// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/informix/informix.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { informixListener } from "./informixListener";

export class informixParser extends Parser {
	public static readonly ABSOLUTE = 1;
	public static readonly AFTER = 2;
	public static readonly ACCEPT = 3;
	public static readonly AGGREGATE = 4;
	public static readonly ALLOCATE = 5;
	public static readonly ALL = 6;
	public static readonly ALL_ROWS = 7;
	public static readonly AND = 8;
	public static readonly ANY = 9;
	public static readonly AS = 10;
	public static readonly ASC = 11;
	public static readonly ASCII = 12;
	public static readonly AT = 13;
	public static readonly ATTRIBUTE = 14;
	public static readonly ATTRIBUTES = 15;
	public static readonly AVERAGE = 16;
	public static readonly AVG = 17;
	public static readonly ARRAY = 18;
	public static readonly BEFORE = 19;
	public static readonly BEGIN = 20;
	public static readonly BETWEEN = 21;
	public static readonly BIGINT = 22;
	public static readonly BLACK = 23;
	public static readonly BLINK = 24;
	public static readonly BLUE = 25;
	public static readonly BOLD = 26;
	public static readonly BORDER = 27;
	public static readonly BOTTOM = 28;
	public static readonly BUFFERED = 29;
	public static readonly BY = 30;
	public static readonly BYTE = 31;
	public static readonly CACHE = 32;
	public static readonly CALL = 33;
	public static readonly CASE = 34;
	public static readonly CHAR = 35;
	public static readonly CHARARACTER = 36;
	public static readonly CHAR_LENGTH = 37;
	public static readonly CHECK = 38;
	public static readonly CLEAR = 39;
	public static readonly CLIPPED = 40;
	public static readonly CLOSE = 41;
	public static readonly CLUSTER = 42;
	public static readonly COLUMN = 43;
	public static readonly COLUMNS = 44;
	public static readonly COMMAND = 45;
	public static readonly COMMENT = 46;
	public static readonly COMMIT = 47;
	public static readonly COMMITTED = 48;
	public static readonly CONSTANT = 49;
	public static readonly CONSTRAINED = 50;
	public static readonly CONSTRAINT = 51;
	public static readonly CONSTRUCT = 52;
	public static readonly CONTINUE = 53;
	public static readonly COUNT = 54;
	public static readonly COPY = 55;
	public static readonly CRCOLS = 56;
	public static readonly CREATE = 57;
	public static readonly CURRENT = 58;
	public static readonly CURSOR = 59;
	public static readonly CYAN = 60;
	public static readonly DATABASE = 61;
	public static readonly DATE = 62;
	public static readonly DATETIME = 63;
	public static readonly DAY = 64;
	public static readonly DEALLOCATE = 65;
	public static readonly DEC = 66;
	public static readonly DECIMAL = 67;
	public static readonly DECODE = 68;
	public static readonly DECLARE = 69;
	public static readonly DEFAULT = 70;
	public static readonly DEFAULTS = 71;
	public static readonly DEFER = 72;
	public static readonly DEFINE = 73;
	public static readonly DELETE = 74;
	public static readonly DELIMITER = 75;
	public static readonly DESC = 76;
	public static readonly DIM = 77;
	public static readonly DIMENSIONS = 78;
	public static readonly DIRTY = 79;
	public static readonly DISPLAY = 80;
	public static readonly DISTINCT = 81;
	public static readonly DO = 82;
	public static readonly DOUBLE = 83;
	public static readonly DOWN = 84;
	public static readonly DROP = 85;
	public static readonly DYNAMIC = 86;
	public static readonly ELSE = 87;
	public static readonly END = 88;
	public static readonly ERROR = 89;
	public static readonly ESCAPE = 90;
	public static readonly EVERY = 91;
	public static readonly EXCLUSIVE = 92;
	public static readonly EXEC = 93;
	public static readonly EXECUTE = 94;
	public static readonly EXIT = 95;
	public static readonly EXISTS = 96;
	public static readonly EXPLAIN = 97;
	public static readonly EXTEND = 98;
	public static readonly EXTENT = 99;
	public static readonly EXTERNAL = 100;
	public static readonly FALSE = 101;
	public static readonly FETCH = 102;
	public static readonly FIELD = 103;
	public static readonly FIELD_TOUCHED = 104;
	public static readonly FILE = 105;
	public static readonly FINISH = 106;
	public static readonly FIRST = 107;
	public static readonly FIRST_ROWS = 108;
	public static readonly FLOAT = 109;
	public static readonly FLUSH = 110;
	public static readonly FOR = 111;
	public static readonly FORM = 112;
	public static readonly FORMAT = 113;
	public static readonly FORMONLY = 114;
	public static readonly FOREACH = 115;
	public static readonly FOUND = 116;
	public static readonly FRACTION = 117;
	public static readonly FREE = 118;
	public static readonly FROM = 119;
	public static readonly FUNCTION = 120;
	public static readonly GET_FLDBUF = 121;
	public static readonly GLOBALS = 122;
	public static readonly GO = 123;
	public static readonly GOTO = 124;
	public static readonly GREEN = 125;
	public static readonly GROUP = 126;
	public static readonly HAVING = 127;
	public static readonly HEADER = 128;
	public static readonly HELP = 129;
	public static readonly HIDE = 130;
	public static readonly HOLD = 131;
	public static readonly HOUR = 132;
	public static readonly IF = 133;
	public static readonly IN = 134;
	public static readonly INNER = 135;
	public static readonly INDEX = 136;
	public static readonly INDICATOR = 137;
	public static readonly INFIELD = 138;
	public static readonly INITIALIZE = 139;
	public static readonly INPUT = 140;
	public static readonly INSERT = 141;
	public static readonly INSTRUCTIONS = 142;
	public static readonly INTO = 143;
	public static readonly INT = 144;
	public static readonly INT_FLAG = 145;
	public static readonly INTEGER = 146;
	public static readonly INTERRUPT = 147;
	public static readonly INTERVAL = 148;
	public static readonly INVISIBLE = 149;
	public static readonly IS = 150;
	public static readonly ISNULL = 151;
	public static readonly ISOLATION = 152;
	public static readonly JOIN = 153;
	public static readonly KEY = 154;
	public static readonly LABEL = 155;
	public static readonly LAST = 156;
	public static readonly LEFT = 157;
	public static readonly LENGTH = 158;
	public static readonly LET = 159;
	public static readonly LIKE = 160;
	public static readonly LINE = 161;
	public static readonly LINENO = 162;
	public static readonly LINES = 163;
	public static readonly LOAD = 164;
	public static readonly LOCATE = 165;
	public static readonly LOCK = 166;
	public static readonly LOG = 167;
	public static readonly LONG = 168;
	public static readonly MAGENTA = 169;
	public static readonly MATCHES = 170;
	public static readonly MENU = 171;
	public static readonly MESSAGE = 172;
	public static readonly MAIN = 173;
	public static readonly MARGIN = 174;
	public static readonly MAX = 175;
	public static readonly MDY = 176;
	public static readonly MIN = 177;
	public static readonly MINUTE = 178;
	public static readonly MOD = 179;
	public static readonly MODE = 180;
	public static readonly MODULE = 181;
	public static readonly MONTH = 182;
	public static readonly MONEY = 183;
	public static readonly NCHAR = 184;
	public static readonly NAME = 185;
	public static readonly NEED = 186;
	public static readonly NEXT = 187;
	public static readonly NEW = 188;
	public static readonly NORMAL = 189;
	public static readonly NO = 190;
	public static readonly NOT = 191;
	public static readonly NOTFOUND = 192;
	public static readonly NOW = 193;
	public static readonly NUMERIC = 194;
	public static readonly NULL = 195;
	public static readonly NVARCHAR = 196;
	public static readonly NVL = 197;
	public static readonly OF = 198;
	public static readonly OFF = 199;
	public static readonly ON = 200;
	public static readonly OPEN = 201;
	public static readonly OPTION = 202;
	public static readonly OPTIONS = 203;
	public static readonly OR = 204;
	public static readonly ORD = 205;
	public static readonly ORDER = 206;
	public static readonly OUTPUT = 207;
	public static readonly OUTER = 208;
	public static readonly OTHERWISE = 209;
	public static readonly PAGE = 210;
	public static readonly PAGENO = 211;
	public static readonly PAUSE = 212;
	public static readonly PERCENT = 213;
	public static readonly PIPE = 214;
	public static readonly PRECISION = 215;
	public static readonly PREPARE = 216;
	public static readonly PREVIOUS = 217;
	public static readonly PRINT = 218;
	public static readonly PRINTER = 219;
	public static readonly PROGRAM = 220;
	public static readonly PROMPT = 221;
	public static readonly PUT = 222;
	public static readonly QUIT = 223;
	public static readonly QUIT_FLAG = 224;
	public static readonly RECORD = 225;
	public static readonly REAL = 226;
	public static readonly READ = 227;
	public static readonly RED = 228;
	public static readonly RELATIVE = 229;
	public static readonly REMOVE = 230;
	public static readonly REOPTIMIZATION = 231;
	public static readonly REPEATABLE = 232;
	public static readonly REPEAT = 233;
	public static readonly REPORT = 234;
	public static readonly RESIZE = 235;
	public static readonly RETURN = 236;
	public static readonly RETURNING = 237;
	public static readonly REVERSE = 238;
	public static readonly RIGHT = 239;
	public static readonly ROLLBACK = 240;
	public static readonly ROW = 241;
	public static readonly ROWS = 242;
	public static readonly RUN = 243;
	public static readonly SCREEN = 244;
	public static readonly SCROLL = 245;
	public static readonly SECOND = 246;
	public static readonly SKIP2 = 247;
	public static readonly SELECT = 248;
	public static readonly SET = 249;
	public static readonly SHARE = 250;
	public static readonly SHOW = 251;
	public static readonly SIZE = 252;
	public static readonly SLEEP = 253;
	public static readonly SMALLFLOAT = 254;
	public static readonly SMALLINT = 255;
	public static readonly SPACE = 256;
	public static readonly SPACES = 257;
	public static readonly SQL = 258;
	public static readonly SQLERROR = 259;
	public static readonly SQLWARNING = 260;
	public static readonly START = 261;
	public static readonly STABILITY = 262;
	public static readonly STATISTICS = 263;
	public static readonly STATUS = 264;
	public static readonly STOP = 265;
	public static readonly SUM = 266;
	public static readonly TABLE = 267;
	public static readonly TABLES = 268;
	public static readonly TERMINATE = 269;
	public static readonly TEMP = 270;
	public static readonly TEXT = 271;
	public static readonly THEN = 272;
	public static readonly THROUGH = 273;
	public static readonly THRU = 274;
	public static readonly TIME = 275;
	public static readonly TO = 276;
	public static readonly TODAY = 277;
	public static readonly TOP = 278;
	public static readonly TRAILER = 279;
	public static readonly TRUE = 280;
	public static readonly TYPE = 281;
	public static readonly UNCONSTRAINED = 282;
	public static readonly UNDERLINE = 283;
	public static readonly UNION = 284;
	public static readonly UNIQUE = 285;
	public static readonly UNITS = 286;
	public static readonly UNLOAD = 287;
	public static readonly UP = 288;
	public static readonly UPDATE = 289;
	public static readonly USER = 290;
	public static readonly USING = 291;
	public static readonly VALIDATE = 292;
	public static readonly VALUES = 293;
	public static readonly VARCHAR = 294;
	public static readonly WEEKDAY = 295;
	public static readonly VIEW = 296;
	public static readonly WAIT = 297;
	public static readonly WAITING = 298;
	public static readonly WARNING = 299;
	public static readonly WHEN = 300;
	public static readonly WHENEVER = 301;
	public static readonly WHERE = 302;
	public static readonly WHILE = 303;
	public static readonly WHITE = 304;
	public static readonly WITH = 305;
	public static readonly WITHOUT = 306;
	public static readonly WINDOW = 307;
	public static readonly WORDWRAP = 308;
	public static readonly WORK = 309;
	public static readonly YEAR = 310;
	public static readonly YELLOW = 311;
	public static readonly PLUS = 312;
	public static readonly MINUS = 313;
	public static readonly STAR = 314;
	public static readonly SLASH = 315;
	public static readonly COMMA = 316;
	public static readonly SEMI = 317;
	public static readonly COLON = 318;
	public static readonly EQUAL = 319;
	public static readonly NOT_EQUAL = 320;
	public static readonly LT = 321;
	public static readonly LE = 322;
	public static readonly GE = 323;
	public static readonly GT = 324;
	public static readonly LPAREN = 325;
	public static readonly RPAREN = 326;
	public static readonly LBRACK = 327;
	public static readonly RBRACK = 328;
	public static readonly DOT = 329;
	public static readonly ATSYMBOL = 330;
	public static readonly DOUBLEVERTBAR = 331;
	public static readonly IDENT = 332;
	public static readonly STRING_LITERAL = 333;
	public static readonly NUM_INT = 334;
	public static readonly NUM_REAL = 335;
	public static readonly HEX_DIGIT = 336;
	public static readonly SL_COMMENT = 337;
	public static readonly SL_COMMENT_2 = 338;
	public static readonly EOL = 339;
	public static readonly WS = 340;
	public static readonly CHARACTER = 341;
	public static readonly ESC = 342;
	public static readonly QUOTED_STRING = 343;
	public static readonly DIV = 344;
	public static readonly STEP = 345;
	public static readonly MEMORY = 346;
	public static readonly SAME = 347;
	public static readonly WRAP = 348;
	public static readonly PRIOR = 349;
	public static readonly SECONDS = 350;
	public static readonly RULE_compilation_unit = 0;
	public static readonly RULE_identifier = 1;
	public static readonly RULE_mainBlock = 2;
	public static readonly RULE_mainStatements = 3;
	public static readonly RULE_deferStatement = 4;
	public static readonly RULE_functionOrReportDefinitions = 5;
	public static readonly RULE_returnStatement = 6;
	public static readonly RULE_functionDefinition = 7;
	public static readonly RULE_parameterList = 8;
	public static readonly RULE_parameterGroup = 9;
	public static readonly RULE_globalDeclaration = 10;
	public static readonly RULE_typeDeclarations = 11;
	public static readonly RULE_typeDeclaration = 12;
	public static readonly RULE_variableDeclaration = 13;
	public static readonly RULE_type = 14;
	public static readonly RULE_indirectType = 15;
	public static readonly RULE_typeIdentifier = 16;
	public static readonly RULE_largeType = 17;
	public static readonly RULE_numberType = 18;
	public static readonly RULE_charType = 19;
	public static readonly RULE_timeType = 20;
	public static readonly RULE_datetimeQualifier = 21;
	public static readonly RULE_intervalQualifier = 22;
	public static readonly RULE_unitType = 23;
	public static readonly RULE_yearQualifier = 24;
	public static readonly RULE_monthQualifier = 25;
	public static readonly RULE_dayQualifier = 26;
	public static readonly RULE_hourQualifier = 27;
	public static readonly RULE_minuteQualifier = 28;
	public static readonly RULE_secondQualifier = 29;
	public static readonly RULE_fractionQualifier = 30;
	public static readonly RULE_structuredType = 31;
	public static readonly RULE_recordType = 32;
	public static readonly RULE_arrayIndexer = 33;
	public static readonly RULE_arrayType = 34;
	public static readonly RULE_dynArrayType = 35;
	public static readonly RULE_string = 36;
	public static readonly RULE_statement = 37;
	public static readonly RULE_codeBlock = 38;
	public static readonly RULE_label = 39;
	public static readonly RULE_unlabelledStatement = 40;
	public static readonly RULE_simpleStatement = 41;
	public static readonly RULE_runStatement = 42;
	public static readonly RULE_assignmentStatement = 43;
	public static readonly RULE_procedureStatement = 44;
	public static readonly RULE_procedureIdentifier = 45;
	public static readonly RULE_actualParameter = 46;
	public static readonly RULE_gotoStatement = 47;
	public static readonly RULE_condition = 48;
	public static readonly RULE_logicalTerm = 49;
	public static readonly RULE_logicalFactor = 50;
	public static readonly RULE_quantifiedFactor = 51;
	public static readonly RULE_expressionSet = 52;
	public static readonly RULE_subquery = 53;
	public static readonly RULE_sqlExpression = 54;
	public static readonly RULE_sqlAlias = 55;
	public static readonly RULE_sqlTerm = 56;
	public static readonly RULE_sqlMultiply = 57;
	public static readonly RULE_sqlFactor = 58;
	public static readonly RULE_sqlFactor2 = 59;
	public static readonly RULE_sqlExpressionList = 60;
	public static readonly RULE_sqlLiteral = 61;
	public static readonly RULE_sqlVariable = 62;
	public static readonly RULE_sqlFunction = 63;
	public static readonly RULE_dateFunction = 64;
	public static readonly RULE_numberFunction = 65;
	public static readonly RULE_charFunction = 66;
	public static readonly RULE_groupFunction = 67;
	public static readonly RULE_otherFunction = 68;
	public static readonly RULE_sqlPseudoColumn = 69;
	public static readonly RULE_relationalOperator = 70;
	public static readonly RULE_ifCondition = 71;
	public static readonly RULE_ifCondition2 = 72;
	public static readonly RULE_ifLogicalTerm = 73;
	public static readonly RULE_expression = 74;
	public static readonly RULE_ifLogicalFactor = 75;
	public static readonly RULE_simpleExpression = 76;
	public static readonly RULE_addingOperator = 77;
	public static readonly RULE_term = 78;
	public static readonly RULE_multiplyingOperator = 79;
	public static readonly RULE_factor = 80;
	public static readonly RULE_functionDesignator = 81;
	public static readonly RULE_functionIdentifier = 82;
	public static readonly RULE_unsignedConstant = 83;
	public static readonly RULE_constant = 84;
	public static readonly RULE_numericConstant = 85;
	public static readonly RULE_variable = 86;
	public static readonly RULE_entireVariable = 87;
	public static readonly RULE_variableIdentifier = 88;
	public static readonly RULE_indexingVariable = 89;
	public static readonly RULE_componentVariable = 90;
	public static readonly RULE_recordVariable = 91;
	public static readonly RULE_fieldIdentifier = 92;
	public static readonly RULE_structuredStatement = 93;
	public static readonly RULE_conditionalStatement = 94;
	public static readonly RULE_ifStatement = 95;
	public static readonly RULE_repetetiveStatement = 96;
	public static readonly RULE_whileStatement = 97;
	public static readonly RULE_forStatement = 98;
	public static readonly RULE_forList = 99;
	public static readonly RULE_controlVariable = 100;
	public static readonly RULE_initialValue = 101;
	public static readonly RULE_finalValue = 102;
	public static readonly RULE_forEachStatement = 103;
	public static readonly RULE_variableList = 104;
	public static readonly RULE_variableOrConstantList = 105;
	public static readonly RULE_caseStatement = 106;
	public static readonly RULE_otherFGLStatement = 107;
	public static readonly RULE_otherProgramFlowStatement = 108;
	public static readonly RULE_exitTypes = 109;
	public static readonly RULE_exitStatements = 110;
	public static readonly RULE_continueStatements = 111;
	public static readonly RULE_otherStorageStatement = 112;
	public static readonly RULE_printExpressionItem = 113;
	public static readonly RULE_printExpressionList = 114;
	public static readonly RULE_reportStatement = 115;
	public static readonly RULE_fieldName = 116;
	public static readonly RULE_thruNotation = 117;
	public static readonly RULE_fieldList = 118;
	public static readonly RULE_keyList = 119;
	public static readonly RULE_constructEvents = 120;
	public static readonly RULE_constructInsideStatement = 121;
	public static readonly RULE_specialAttribute = 122;
	public static readonly RULE_attribute = 123;
	public static readonly RULE_attributeList = 124;
	public static readonly RULE_constructGroupStatement = 125;
	public static readonly RULE_constructStatement = 126;
	public static readonly RULE_displayArrayStatement = 127;
	public static readonly RULE_displayInsideStatement = 128;
	public static readonly RULE_displayEvents = 129;
	public static readonly RULE_displayStatement = 130;
	public static readonly RULE_errorStatement = 131;
	public static readonly RULE_messageStatement = 132;
	public static readonly RULE_promptStatement = 133;
	public static readonly RULE_inputEvents = 134;
	public static readonly RULE_inputInsideStatement = 135;
	public static readonly RULE_inputGroupStatement = 136;
	public static readonly RULE_inputStatement = 137;
	public static readonly RULE_inputArrayStatement = 138;
	public static readonly RULE_menuEvents = 139;
	public static readonly RULE_menuInsideStatement = 140;
	public static readonly RULE_menuGroupStatement = 141;
	public static readonly RULE_menuStatement = 142;
	public static readonly RULE_reservedLinePosition = 143;
	public static readonly RULE_specialWindowAttribute = 144;
	public static readonly RULE_windowAttribute = 145;
	public static readonly RULE_windowAttributeList = 146;
	public static readonly RULE_optionStatement = 147;
	public static readonly RULE_optionsStatement = 148;
	public static readonly RULE_screenStatement = 149;
	public static readonly RULE_sqlStatements = 150;
	public static readonly RULE_cursorManipulationStatement = 151;
	public static readonly RULE_columnsList = 152;
	public static readonly RULE_statementId = 153;
	public static readonly RULE_cursorName = 154;
	public static readonly RULE_dataType = 155;
	public static readonly RULE_columnItem = 156;
	public static readonly RULE_dataDefinitionStatement = 157;
	public static readonly RULE_dataManipulationStatement = 158;
	public static readonly RULE_sqlSelectStatement = 159;
	public static readonly RULE_columnsTableId = 160;
	public static readonly RULE_selectList = 161;
	public static readonly RULE_headSelectStatement = 162;
	public static readonly RULE_tableQualifier = 163;
	public static readonly RULE_tableIdentifier = 164;
	public static readonly RULE_fromTable = 165;
	public static readonly RULE_tableExpression = 166;
	public static readonly RULE_fromSelectStatement = 167;
	public static readonly RULE_aliasName = 168;
	public static readonly RULE_mainSelectStatement = 169;
	public static readonly RULE_unionSelectStatement = 170;
	public static readonly RULE_simpleSelectStatement = 171;
	public static readonly RULE_whereStatement = 172;
	public static readonly RULE_groupByStatement = 173;
	public static readonly RULE_havingStatement = 174;
	public static readonly RULE_orderbyColumn = 175;
	public static readonly RULE_orderbyStatement = 176;
	public static readonly RULE_sqlLoadStatement = 177;
	public static readonly RULE_sqlUnLoadStatement = 178;
	public static readonly RULE_sqlInsertStatement = 179;
	public static readonly RULE_sqlUpdateStatement = 180;
	public static readonly RULE_sqlDeleteStatement = 181;
	public static readonly RULE_actualParameterList = 182;
	public static readonly RULE_dynamicManagementStatement = 183;
	public static readonly RULE_queryOptimizationStatement = 184;
	public static readonly RULE_databaseDeclaration = 185;
	public static readonly RULE_clientServerStatement = 186;
	public static readonly RULE_dataIntegrityStatement = 187;
	public static readonly RULE_wheneverStatement = 188;
	public static readonly RULE_wheneverType = 189;
	public static readonly RULE_wheneverFlow = 190;
	public static readonly RULE_reportDefinition = 191;
	public static readonly RULE_outputReport = 192;
	public static readonly RULE_formatReport = 193;
	public static readonly RULE_eol = 194;
	public static readonly RULE_unsignedNumber = 195;
	public static readonly RULE_unsignedInteger = 196;
	public static readonly RULE_unsignedReal = 197;
	public static readonly RULE_sign = 198;
	public static readonly RULE_constantIdentifier = 199;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"compilation_unit", "identifier", "mainBlock", "mainStatements", "deferStatement", 
		"functionOrReportDefinitions", "returnStatement", "functionDefinition", 
		"parameterList", "parameterGroup", "globalDeclaration", "typeDeclarations", 
		"typeDeclaration", "variableDeclaration", "type", "indirectType", "typeIdentifier", 
		"largeType", "numberType", "charType", "timeType", "datetimeQualifier", 
		"intervalQualifier", "unitType", "yearQualifier", "monthQualifier", "dayQualifier", 
		"hourQualifier", "minuteQualifier", "secondQualifier", "fractionQualifier", 
		"structuredType", "recordType", "arrayIndexer", "arrayType", "dynArrayType", 
		"string", "statement", "codeBlock", "label", "unlabelledStatement", "simpleStatement", 
		"runStatement", "assignmentStatement", "procedureStatement", "procedureIdentifier", 
		"actualParameter", "gotoStatement", "condition", "logicalTerm", "logicalFactor", 
		"quantifiedFactor", "expressionSet", "subquery", "sqlExpression", "sqlAlias", 
		"sqlTerm", "sqlMultiply", "sqlFactor", "sqlFactor2", "sqlExpressionList", 
		"sqlLiteral", "sqlVariable", "sqlFunction", "dateFunction", "numberFunction", 
		"charFunction", "groupFunction", "otherFunction", "sqlPseudoColumn", "relationalOperator", 
		"ifCondition", "ifCondition2", "ifLogicalTerm", "expression", "ifLogicalFactor", 
		"simpleExpression", "addingOperator", "term", "multiplyingOperator", "factor", 
		"functionDesignator", "functionIdentifier", "unsignedConstant", "constant", 
		"numericConstant", "variable", "entireVariable", "variableIdentifier", 
		"indexingVariable", "componentVariable", "recordVariable", "fieldIdentifier", 
		"structuredStatement", "conditionalStatement", "ifStatement", "repetetiveStatement", 
		"whileStatement", "forStatement", "forList", "controlVariable", "initialValue", 
		"finalValue", "forEachStatement", "variableList", "variableOrConstantList", 
		"caseStatement", "otherFGLStatement", "otherProgramFlowStatement", "exitTypes", 
		"exitStatements", "continueStatements", "otherStorageStatement", "printExpressionItem", 
		"printExpressionList", "reportStatement", "fieldName", "thruNotation", 
		"fieldList", "keyList", "constructEvents", "constructInsideStatement", 
		"specialAttribute", "attribute", "attributeList", "constructGroupStatement", 
		"constructStatement", "displayArrayStatement", "displayInsideStatement", 
		"displayEvents", "displayStatement", "errorStatement", "messageStatement", 
		"promptStatement", "inputEvents", "inputInsideStatement", "inputGroupStatement", 
		"inputStatement", "inputArrayStatement", "menuEvents", "menuInsideStatement", 
		"menuGroupStatement", "menuStatement", "reservedLinePosition", "specialWindowAttribute", 
		"windowAttribute", "windowAttributeList", "optionStatement", "optionsStatement", 
		"screenStatement", "sqlStatements", "cursorManipulationStatement", "columnsList", 
		"statementId", "cursorName", "dataType", "columnItem", "dataDefinitionStatement", 
		"dataManipulationStatement", "sqlSelectStatement", "columnsTableId", "selectList", 
		"headSelectStatement", "tableQualifier", "tableIdentifier", "fromTable", 
		"tableExpression", "fromSelectStatement", "aliasName", "mainSelectStatement", 
		"unionSelectStatement", "simpleSelectStatement", "whereStatement", "groupByStatement", 
		"havingStatement", "orderbyColumn", "orderbyStatement", "sqlLoadStatement", 
		"sqlUnLoadStatement", "sqlInsertStatement", "sqlUpdateStatement", "sqlDeleteStatement", 
		"actualParameterList", "dynamicManagementStatement", "queryOptimizationStatement", 
		"databaseDeclaration", "clientServerStatement", "dataIntegrityStatement", 
		"wheneverStatement", "wheneverType", "wheneverFlow", "reportDefinition", 
		"outputReport", "formatReport", "eol", "unsignedNumber", "unsignedInteger", 
		"unsignedReal", "sign", "constantIdentifier",
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
		undefined, undefined, undefined, undefined, "'+'", "'-'", "'*'", "'/'", 
		"','", "';'", "':'", "'='", undefined, "'<'", "'<='", "'>='", "'>'", "'('", 
		"')'", "'['", "']'", "'.'", "'@'", "'||'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "ABSOLUTE", "AFTER", "ACCEPT", "AGGREGATE", "ALLOCATE", "ALL", 
		"ALL_ROWS", "AND", "ANY", "AS", "ASC", "ASCII", "AT", "ATTRIBUTE", "ATTRIBUTES", 
		"AVERAGE", "AVG", "ARRAY", "BEFORE", "BEGIN", "BETWEEN", "BIGINT", "BLACK", 
		"BLINK", "BLUE", "BOLD", "BORDER", "BOTTOM", "BUFFERED", "BY", "BYTE", 
		"CACHE", "CALL", "CASE", "CHAR", "CHARARACTER", "CHAR_LENGTH", "CHECK", 
		"CLEAR", "CLIPPED", "CLOSE", "CLUSTER", "COLUMN", "COLUMNS", "COMMAND", 
		"COMMENT", "COMMIT", "COMMITTED", "CONSTANT", "CONSTRAINED", "CONSTRAINT", 
		"CONSTRUCT", "CONTINUE", "COUNT", "COPY", "CRCOLS", "CREATE", "CURRENT", 
		"CURSOR", "CYAN", "DATABASE", "DATE", "DATETIME", "DAY", "DEALLOCATE", 
		"DEC", "DECIMAL", "DECODE", "DECLARE", "DEFAULT", "DEFAULTS", "DEFER", 
		"DEFINE", "DELETE", "DELIMITER", "DESC", "DIM", "DIMENSIONS", "DIRTY", 
		"DISPLAY", "DISTINCT", "DO", "DOUBLE", "DOWN", "DROP", "DYNAMIC", "ELSE", 
		"END", "ERROR", "ESCAPE", "EVERY", "EXCLUSIVE", "EXEC", "EXECUTE", "EXIT", 
		"EXISTS", "EXPLAIN", "EXTEND", "EXTENT", "EXTERNAL", "FALSE", "FETCH", 
		"FIELD", "FIELD_TOUCHED", "FILE", "FINISH", "FIRST", "FIRST_ROWS", "FLOAT", 
		"FLUSH", "FOR", "FORM", "FORMAT", "FORMONLY", "FOREACH", "FOUND", "FRACTION", 
		"FREE", "FROM", "FUNCTION", "GET_FLDBUF", "GLOBALS", "GO", "GOTO", "GREEN", 
		"GROUP", "HAVING", "HEADER", "HELP", "HIDE", "HOLD", "HOUR", "IF", "IN", 
		"INNER", "INDEX", "INDICATOR", "INFIELD", "INITIALIZE", "INPUT", "INSERT", 
		"INSTRUCTIONS", "INTO", "INT", "INT_FLAG", "INTEGER", "INTERRUPT", "INTERVAL", 
		"INVISIBLE", "IS", "ISNULL", "ISOLATION", "JOIN", "KEY", "LABEL", "LAST", 
		"LEFT", "LENGTH", "LET", "LIKE", "LINE", "LINENO", "LINES", "LOAD", "LOCATE", 
		"LOCK", "LOG", "LONG", "MAGENTA", "MATCHES", "MENU", "MESSAGE", "MAIN", 
		"MARGIN", "MAX", "MDY", "MIN", "MINUTE", "MOD", "MODE", "MODULE", "MONTH", 
		"MONEY", "NCHAR", "NAME", "NEED", "NEXT", "NEW", "NORMAL", "NO", "NOT", 
		"NOTFOUND", "NOW", "NUMERIC", "NULL", "NVARCHAR", "NVL", "OF", "OFF", 
		"ON", "OPEN", "OPTION", "OPTIONS", "OR", "ORD", "ORDER", "OUTPUT", "OUTER", 
		"OTHERWISE", "PAGE", "PAGENO", "PAUSE", "PERCENT", "PIPE", "PRECISION", 
		"PREPARE", "PREVIOUS", "PRINT", "PRINTER", "PROGRAM", "PROMPT", "PUT", 
		"QUIT", "QUIT_FLAG", "RECORD", "REAL", "READ", "RED", "RELATIVE", "REMOVE", 
		"REOPTIMIZATION", "REPEATABLE", "REPEAT", "REPORT", "RESIZE", "RETURN", 
		"RETURNING", "REVERSE", "RIGHT", "ROLLBACK", "ROW", "ROWS", "RUN", "SCREEN", 
		"SCROLL", "SECOND", "SKIP2", "SELECT", "SET", "SHARE", "SHOW", "SIZE", 
		"SLEEP", "SMALLFLOAT", "SMALLINT", "SPACE", "SPACES", "SQL", "SQLERROR", 
		"SQLWARNING", "START", "STABILITY", "STATISTICS", "STATUS", "STOP", "SUM", 
		"TABLE", "TABLES", "TERMINATE", "TEMP", "TEXT", "THEN", "THROUGH", "THRU", 
		"TIME", "TO", "TODAY", "TOP", "TRAILER", "TRUE", "TYPE", "UNCONSTRAINED", 
		"UNDERLINE", "UNION", "UNIQUE", "UNITS", "UNLOAD", "UP", "UPDATE", "USER", 
		"USING", "VALIDATE", "VALUES", "VARCHAR", "WEEKDAY", "VIEW", "WAIT", "WAITING", 
		"WARNING", "WHEN", "WHENEVER", "WHERE", "WHILE", "WHITE", "WITH", "WITHOUT", 
		"WINDOW", "WORDWRAP", "WORK", "YEAR", "YELLOW", "PLUS", "MINUS", "STAR", 
		"SLASH", "COMMA", "SEMI", "COLON", "EQUAL", "NOT_EQUAL", "LT", "LE", "GE", 
		"GT", "LPAREN", "RPAREN", "LBRACK", "RBRACK", "DOT", "ATSYMBOL", "DOUBLEVERTBAR", 
		"IDENT", "STRING_LITERAL", "NUM_INT", "NUM_REAL", "HEX_DIGIT", "SL_COMMENT", 
		"SL_COMMENT_2", "EOL", "WS", "CHARACTER", "ESC", "QUOTED_STRING", "DIV", 
		"STEP", "MEMORY", "SAME", "WRAP", "PRIOR", "SECONDS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(informixParser._LITERAL_NAMES, informixParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return informixParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "informix.g4"; }

	// @Override
	public get ruleNames(): string[] { return informixParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return informixParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(informixParser._ATN, this);
	}
	// @RuleVersion(0)
	public compilation_unit(): Compilation_unitContext {
		let _localctx: Compilation_unitContext = new Compilation_unitContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, informixParser.RULE_compilation_unit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 401;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === informixParser.DATABASE) {
				{
				this.state = 400;
				this.databaseDeclaration();
				}
			}

			this.state = 404;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === informixParser.GLOBALS) {
				{
				this.state = 403;
				this.globalDeclaration();
				}
			}

			this.state = 407;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === informixParser.DEFINE) {
				{
				this.state = 406;
				this.typeDeclarations();
				}
			}

			this.state = 409;
			this.mainBlock();
			this.state = 411;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === informixParser.FUNCTION || _la === informixParser.REPORT) {
				{
				this.state = 410;
				this.functionOrReportDefinitions();
				}
			}

			this.state = 413;
			this.match(informixParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 2, informixParser.RULE_identifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 415;
			this.match(informixParser.IDENT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mainBlock(): MainBlockContext {
		let _localctx: MainBlockContext = new MainBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, informixParser.RULE_mainBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 418;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === informixParser.EOL) {
				{
				this.state = 417;
				this.eol();
				}
			}

			this.state = 420;
			this.match(informixParser.MAIN);
			this.state = 421;
			this.eol();
			this.state = 423;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === informixParser.DEFINE) {
				{
				this.state = 422;
				this.typeDeclarations();
				}
			}

			this.state = 426;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === informixParser.ALLOCATE || _la === informixParser.BEGIN || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (informixParser.CALL - 33)) | (1 << (informixParser.CASE - 33)) | (1 << (informixParser.CLEAR - 33)) | (1 << (informixParser.CLOSE - 33)) | (1 << (informixParser.COMMIT - 33)) | (1 << (informixParser.CONSTRUCT - 33)) | (1 << (informixParser.CONTINUE - 33)) | (1 << (informixParser.CREATE - 33)) | (1 << (informixParser.CURRENT - 33)) | (1 << (informixParser.DATABASE - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (informixParser.DEALLOCATE - 65)) | (1 << (informixParser.DECLARE - 65)) | (1 << (informixParser.DEFER - 65)) | (1 << (informixParser.DELETE - 65)) | (1 << (informixParser.DISPLAY - 65)) | (1 << (informixParser.DROP - 65)) | (1 << (informixParser.ERROR - 65)) | (1 << (informixParser.EXECUTE - 65)) | (1 << (informixParser.EXIT - 65)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (informixParser.FETCH - 102)) | (1 << (informixParser.FINISH - 102)) | (1 << (informixParser.FLUSH - 102)) | (1 << (informixParser.FOR - 102)) | (1 << (informixParser.FOREACH - 102)) | (1 << (informixParser.FREE - 102)) | (1 << (informixParser.GOTO - 102)) | (1 << (informixParser.HIDE - 102)) | (1 << (informixParser.IF - 102)))) !== 0) || ((((_la - 139)) & ~0x1F) === 0 && ((1 << (_la - 139)) & ((1 << (informixParser.INITIALIZE - 139)) | (1 << (informixParser.INPUT - 139)) | (1 << (informixParser.INSERT - 139)) | (1 << (informixParser.LET - 139)) | (1 << (informixParser.LOAD - 139)) | (1 << (informixParser.LOCATE - 139)) | (1 << (informixParser.LOCK - 139)))) !== 0) || ((((_la - 171)) & ~0x1F) === 0 && ((1 << (_la - 171)) & ((1 << (informixParser.MENU - 171)) | (1 << (informixParser.MESSAGE - 171)) | (1 << (informixParser.NEED - 171)) | (1 << (informixParser.NEXT - 171)) | (1 << (informixParser.OPEN - 171)))) !== 0) || ((((_la - 203)) & ~0x1F) === 0 && ((1 << (_la - 203)) & ((1 << (informixParser.OPTIONS - 203)) | (1 << (informixParser.OUTPUT - 203)) | (1 << (informixParser.PAUSE - 203)) | (1 << (informixParser.PREPARE - 203)) | (1 << (informixParser.PRINT - 203)) | (1 << (informixParser.PROMPT - 203)) | (1 << (informixParser.PUT - 203)))) !== 0) || ((((_la - 235)) & ~0x1F) === 0 && ((1 << (_la - 235)) & ((1 << (informixParser.RESIZE - 235)) | (1 << (informixParser.RETURN - 235)) | (1 << (informixParser.ROLLBACK - 235)) | (1 << (informixParser.RUN - 235)) | (1 << (informixParser.SCROLL - 235)) | (1 << (informixParser.SKIP2 - 235)) | (1 << (informixParser.SELECT - 235)) | (1 << (informixParser.SET - 235)) | (1 << (informixParser.SHOW - 235)) | (1 << (informixParser.SLEEP - 235)) | (1 << (informixParser.START - 235)))) !== 0) || ((((_la - 269)) & ~0x1F) === 0 && ((1 << (_la - 269)) & ((1 << (informixParser.TERMINATE - 269)) | (1 << (informixParser.UNLOAD - 269)) | (1 << (informixParser.UPDATE - 269)) | (1 << (informixParser.VALIDATE - 269)))) !== 0) || ((((_la - 301)) & ~0x1F) === 0 && ((1 << (_la - 301)) & ((1 << (informixParser.WHENEVER - 301)) | (1 << (informixParser.WHILE - 301)) | (1 << (informixParser.IDENT - 301)))) !== 0) || _la === informixParser.EOL) {
				{
				this.state = 425;
				this.mainStatements();
				}
			}

			this.state = 428;
			this.match(informixParser.END);
			this.state = 429;
			this.match(informixParser.MAIN);
			this.state = 430;
			this.eol();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mainStatements(): MainStatementsContext {
		let _localctx: MainStatementsContext = new MainStatementsContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, informixParser.RULE_mainStatements);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 435;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 435;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case informixParser.DEFER:
					{
					this.state = 432;
					this.deferStatement();
					}
					break;
				case informixParser.ALLOCATE:
				case informixParser.BEGIN:
				case informixParser.CALL:
				case informixParser.CASE:
				case informixParser.CLEAR:
				case informixParser.CLOSE:
				case informixParser.COMMIT:
				case informixParser.CONSTRUCT:
				case informixParser.CONTINUE:
				case informixParser.CREATE:
				case informixParser.CURRENT:
				case informixParser.DATABASE:
				case informixParser.DEALLOCATE:
				case informixParser.DECLARE:
				case informixParser.DELETE:
				case informixParser.DISPLAY:
				case informixParser.DROP:
				case informixParser.ERROR:
				case informixParser.EXECUTE:
				case informixParser.EXIT:
				case informixParser.FETCH:
				case informixParser.FINISH:
				case informixParser.FLUSH:
				case informixParser.FOR:
				case informixParser.FOREACH:
				case informixParser.FREE:
				case informixParser.GOTO:
				case informixParser.HIDE:
				case informixParser.IF:
				case informixParser.INITIALIZE:
				case informixParser.INPUT:
				case informixParser.INSERT:
				case informixParser.LET:
				case informixParser.LOAD:
				case informixParser.LOCATE:
				case informixParser.LOCK:
				case informixParser.MENU:
				case informixParser.MESSAGE:
				case informixParser.NEED:
				case informixParser.NEXT:
				case informixParser.OPEN:
				case informixParser.OPTIONS:
				case informixParser.OUTPUT:
				case informixParser.PAUSE:
				case informixParser.PREPARE:
				case informixParser.PRINT:
				case informixParser.PROMPT:
				case informixParser.PUT:
				case informixParser.RESIZE:
				case informixParser.RETURN:
				case informixParser.ROLLBACK:
				case informixParser.RUN:
				case informixParser.SCROLL:
				case informixParser.SKIP2:
				case informixParser.SELECT:
				case informixParser.SET:
				case informixParser.SHOW:
				case informixParser.SLEEP:
				case informixParser.START:
				case informixParser.TERMINATE:
				case informixParser.UNLOAD:
				case informixParser.UPDATE:
				case informixParser.VALIDATE:
				case informixParser.WHENEVER:
				case informixParser.WHILE:
				case informixParser.IDENT:
					{
					this.state = 433;
					this.codeBlock();
					}
					break;
				case informixParser.EOL:
					{
					this.state = 434;
					this.eol();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 437;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === informixParser.ALLOCATE || _la === informixParser.BEGIN || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (informixParser.CALL - 33)) | (1 << (informixParser.CASE - 33)) | (1 << (informixParser.CLEAR - 33)) | (1 << (informixParser.CLOSE - 33)) | (1 << (informixParser.COMMIT - 33)) | (1 << (informixParser.CONSTRUCT - 33)) | (1 << (informixParser.CONTINUE - 33)) | (1 << (informixParser.CREATE - 33)) | (1 << (informixParser.CURRENT - 33)) | (1 << (informixParser.DATABASE - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (informixParser.DEALLOCATE - 65)) | (1 << (informixParser.DECLARE - 65)) | (1 << (informixParser.DEFER - 65)) | (1 << (informixParser.DELETE - 65)) | (1 << (informixParser.DISPLAY - 65)) | (1 << (informixParser.DROP - 65)) | (1 << (informixParser.ERROR - 65)) | (1 << (informixParser.EXECUTE - 65)) | (1 << (informixParser.EXIT - 65)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (informixParser.FETCH - 102)) | (1 << (informixParser.FINISH - 102)) | (1 << (informixParser.FLUSH - 102)) | (1 << (informixParser.FOR - 102)) | (1 << (informixParser.FOREACH - 102)) | (1 << (informixParser.FREE - 102)) | (1 << (informixParser.GOTO - 102)) | (1 << (informixParser.HIDE - 102)) | (1 << (informixParser.IF - 102)))) !== 0) || ((((_la - 139)) & ~0x1F) === 0 && ((1 << (_la - 139)) & ((1 << (informixParser.INITIALIZE - 139)) | (1 << (informixParser.INPUT - 139)) | (1 << (informixParser.INSERT - 139)) | (1 << (informixParser.LET - 139)) | (1 << (informixParser.LOAD - 139)) | (1 << (informixParser.LOCATE - 139)) | (1 << (informixParser.LOCK - 139)))) !== 0) || ((((_la - 171)) & ~0x1F) === 0 && ((1 << (_la - 171)) & ((1 << (informixParser.MENU - 171)) | (1 << (informixParser.MESSAGE - 171)) | (1 << (informixParser.NEED - 171)) | (1 << (informixParser.NEXT - 171)) | (1 << (informixParser.OPEN - 171)))) !== 0) || ((((_la - 203)) & ~0x1F) === 0 && ((1 << (_la - 203)) & ((1 << (informixParser.OPTIONS - 203)) | (1 << (informixParser.OUTPUT - 203)) | (1 << (informixParser.PAUSE - 203)) | (1 << (informixParser.PREPARE - 203)) | (1 << (informixParser.PRINT - 203)) | (1 << (informixParser.PROMPT - 203)) | (1 << (informixParser.PUT - 203)))) !== 0) || ((((_la - 235)) & ~0x1F) === 0 && ((1 << (_la - 235)) & ((1 << (informixParser.RESIZE - 235)) | (1 << (informixParser.RETURN - 235)) | (1 << (informixParser.ROLLBACK - 235)) | (1 << (informixParser.RUN - 235)) | (1 << (informixParser.SCROLL - 235)) | (1 << (informixParser.SKIP2 - 235)) | (1 << (informixParser.SELECT - 235)) | (1 << (informixParser.SET - 235)) | (1 << (informixParser.SHOW - 235)) | (1 << (informixParser.SLEEP - 235)) | (1 << (informixParser.START - 235)))) !== 0) || ((((_la - 269)) & ~0x1F) === 0 && ((1 << (_la - 269)) & ((1 << (informixParser.TERMINATE - 269)) | (1 << (informixParser.UNLOAD - 269)) | (1 << (informixParser.UPDATE - 269)) | (1 << (informixParser.VALIDATE - 269)))) !== 0) || ((((_la - 301)) & ~0x1F) === 0 && ((1 << (_la - 301)) & ((1 << (informixParser.WHENEVER - 301)) | (1 << (informixParser.WHILE - 301)) | (1 << (informixParser.IDENT - 301)))) !== 0) || _la === informixParser.EOL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public deferStatement(): DeferStatementContext {
		let _localctx: DeferStatementContext = new DeferStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, informixParser.RULE_deferStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 439;
			this.match(informixParser.DEFER);
			this.state = 440;
			_la = this._input.LA(1);
			if (!(_la === informixParser.INTERRUPT || _la === informixParser.QUIT)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 441;
			this.eol();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionOrReportDefinitions(): FunctionOrReportDefinitionsContext {
		let _localctx: FunctionOrReportDefinitionsContext = new FunctionOrReportDefinitionsContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, informixParser.RULE_functionOrReportDefinitions);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 445;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 445;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case informixParser.REPORT:
					{
					this.state = 443;
					this.reportDefinition();
					}
					break;
				case informixParser.FUNCTION:
					{
					this.state = 444;
					this.functionDefinition();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 447;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === informixParser.FUNCTION || _la === informixParser.REPORT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 12, informixParser.RULE_returnStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 449;
			this.match(informixParser.RETURN);
			this.state = 451;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				{
				this.state = 450;
				this.variableOrConstantList();
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
	public functionDefinition(): FunctionDefinitionContext {
		let _localctx: FunctionDefinitionContext = new FunctionDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, informixParser.RULE_functionDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 453;
			this.match(informixParser.FUNCTION);
			this.state = 454;
			this.functionIdentifier();
			this.state = 456;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === informixParser.LPAREN) {
				{
				this.state = 455;
				this.parameterList();
				}
			}

			this.state = 458;
			this.eol();
			this.state = 459;
			this.typeDeclarations();
			this.state = 461;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === informixParser.ALLOCATE || _la === informixParser.BEGIN || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (informixParser.CALL - 33)) | (1 << (informixParser.CASE - 33)) | (1 << (informixParser.CLEAR - 33)) | (1 << (informixParser.CLOSE - 33)) | (1 << (informixParser.COMMIT - 33)) | (1 << (informixParser.CONSTRUCT - 33)) | (1 << (informixParser.CONTINUE - 33)) | (1 << (informixParser.CREATE - 33)) | (1 << (informixParser.CURRENT - 33)) | (1 << (informixParser.DATABASE - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (informixParser.DEALLOCATE - 65)) | (1 << (informixParser.DECLARE - 65)) | (1 << (informixParser.DELETE - 65)) | (1 << (informixParser.DISPLAY - 65)) | (1 << (informixParser.DROP - 65)) | (1 << (informixParser.ERROR - 65)) | (1 << (informixParser.EXECUTE - 65)) | (1 << (informixParser.EXIT - 65)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (informixParser.FETCH - 102)) | (1 << (informixParser.FINISH - 102)) | (1 << (informixParser.FLUSH - 102)) | (1 << (informixParser.FOR - 102)) | (1 << (informixParser.FOREACH - 102)) | (1 << (informixParser.FREE - 102)) | (1 << (informixParser.GOTO - 102)) | (1 << (informixParser.HIDE - 102)) | (1 << (informixParser.IF - 102)))) !== 0) || ((((_la - 139)) & ~0x1F) === 0 && ((1 << (_la - 139)) & ((1 << (informixParser.INITIALIZE - 139)) | (1 << (informixParser.INPUT - 139)) | (1 << (informixParser.INSERT - 139)) | (1 << (informixParser.LET - 139)) | (1 << (informixParser.LOAD - 139)) | (1 << (informixParser.LOCATE - 139)) | (1 << (informixParser.LOCK - 139)))) !== 0) || ((((_la - 171)) & ~0x1F) === 0 && ((1 << (_la - 171)) & ((1 << (informixParser.MENU - 171)) | (1 << (informixParser.MESSAGE - 171)) | (1 << (informixParser.NEED - 171)) | (1 << (informixParser.NEXT - 171)) | (1 << (informixParser.OPEN - 171)))) !== 0) || ((((_la - 203)) & ~0x1F) === 0 && ((1 << (_la - 203)) & ((1 << (informixParser.OPTIONS - 203)) | (1 << (informixParser.OUTPUT - 203)) | (1 << (informixParser.PAUSE - 203)) | (1 << (informixParser.PREPARE - 203)) | (1 << (informixParser.PRINT - 203)) | (1 << (informixParser.PROMPT - 203)) | (1 << (informixParser.PUT - 203)))) !== 0) || ((((_la - 235)) & ~0x1F) === 0 && ((1 << (_la - 235)) & ((1 << (informixParser.RESIZE - 235)) | (1 << (informixParser.RETURN - 235)) | (1 << (informixParser.ROLLBACK - 235)) | (1 << (informixParser.RUN - 235)) | (1 << (informixParser.SCROLL - 235)) | (1 << (informixParser.SKIP2 - 235)) | (1 << (informixParser.SELECT - 235)) | (1 << (informixParser.SET - 235)) | (1 << (informixParser.SHOW - 235)) | (1 << (informixParser.SLEEP - 235)) | (1 << (informixParser.START - 235)))) !== 0) || ((((_la - 269)) & ~0x1F) === 0 && ((1 << (_la - 269)) & ((1 << (informixParser.TERMINATE - 269)) | (1 << (informixParser.UNLOAD - 269)) | (1 << (informixParser.UPDATE - 269)) | (1 << (informixParser.VALIDATE - 269)))) !== 0) || ((((_la - 301)) & ~0x1F) === 0 && ((1 << (_la - 301)) & ((1 << (informixParser.WHENEVER - 301)) | (1 << (informixParser.WHILE - 301)) | (1 << (informixParser.IDENT - 301)))) !== 0)) {
				{
				this.state = 460;
				this.codeBlock();
				}
			}

			this.state = 463;
			this.match(informixParser.END);
			this.state = 464;
			this.match(informixParser.FUNCTION);
			this.state = 465;
			this.eol();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameterList(): ParameterListContext {
		let _localctx: ParameterListContext = new ParameterListContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, informixParser.RULE_parameterList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 467;
			this.match(informixParser.LPAREN);
			this.state = 471;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === informixParser.IDENT) {
				{
				{
				this.state = 468;
				this.parameterGroup();
				}
				}
				this.state = 473;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 474;
			this.match(informixParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameterGroup(): ParameterGroupContext {
		let _localctx: ParameterGroupContext = new ParameterGroupContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, informixParser.RULE_parameterGroup);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 476;
			this.identifier();
			this.state = 481;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === informixParser.COMMA) {
				{
				{
				this.state = 477;
				this.match(informixParser.COMMA);
				this.state = 478;
				this.identifier();
				}
				}
				this.state = 483;
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
	public globalDeclaration(): GlobalDeclarationContext {
		let _localctx: GlobalDeclarationContext = new GlobalDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, informixParser.RULE_globalDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 484;
			this.match(informixParser.GLOBALS);
			this.state = 491;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case informixParser.STRING_LITERAL:
				{
				this.state = 485;
				this.string();
				}
				break;
			case informixParser.EOL:
				{
				this.state = 486;
				this.eol();
				this.state = 487;
				this.typeDeclarations();
				this.state = 488;
				this.match(informixParser.END);
				this.state = 489;
				this.match(informixParser.GLOBALS);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 493;
			this.eol();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeDeclarations(): TypeDeclarationsContext {
		let _localctx: TypeDeclarationsContext = new TypeDeclarationsContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, informixParser.RULE_typeDeclarations);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 496;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 495;
				this.typeDeclaration();
				}
				}
				this.state = 498;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === informixParser.DEFINE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeDeclaration(): TypeDeclarationContext {
		let _localctx: TypeDeclarationContext = new TypeDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, informixParser.RULE_typeDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 500;
			this.match(informixParser.DEFINE);
			this.state = 501;
			this.variableDeclaration();
			this.state = 506;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === informixParser.COMMA) {
				{
				{
				this.state = 502;
				this.match(informixParser.COMMA);
				this.state = 503;
				this.variableDeclaration();
				}
				}
				this.state = 508;
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
	public variableDeclaration(): VariableDeclarationContext {
		let _localctx: VariableDeclarationContext = new VariableDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, informixParser.RULE_variableDeclaration);
		let _la: number;
		try {
			let _alt: number;
			this.state = 530;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 509;
				this.constantIdentifier();
				this.state = 514;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === informixParser.COMMA) {
					{
					{
					this.state = 510;
					this.match(informixParser.COMMA);
					this.state = 511;
					this.constantIdentifier();
					}
					}
					this.state = 516;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 517;
				this.type();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 519;
				this.constantIdentifier();
				this.state = 520;
				this.type();
				this.state = 527;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 521;
						this.match(informixParser.COMMA);
						this.state = 522;
						this.constantIdentifier();
						this.state = 523;
						this.type();
						}
						}
					}
					this.state = 529;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
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
	public type(): TypeContext {
		let _localctx: TypeContext = new TypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, informixParser.RULE_type);
		try {
			this.state = 536;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case informixParser.BIGINT:
			case informixParser.CHAR:
			case informixParser.DATE:
			case informixParser.DATETIME:
			case informixParser.DEC:
			case informixParser.DECIMAL:
			case informixParser.DOUBLE:
			case informixParser.FLOAT:
			case informixParser.INT:
			case informixParser.INTEGER:
			case informixParser.INTERVAL:
			case informixParser.MONEY:
			case informixParser.NCHAR:
			case informixParser.NUMERIC:
			case informixParser.NVARCHAR:
			case informixParser.REAL:
			case informixParser.SMALLFLOAT:
			case informixParser.SMALLINT:
			case informixParser.VARCHAR:
			case informixParser.CHARACTER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 532;
				this.typeIdentifier();
				}
				break;
			case informixParser.LIKE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 533;
				this.indirectType();
				}
				break;
			case informixParser.BYTE:
			case informixParser.TEXT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 534;
				this.largeType();
				}
				break;
			case informixParser.ARRAY:
			case informixParser.DYNAMIC:
			case informixParser.RECORD:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 535;
				this.structuredType();
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
	public indirectType(): IndirectTypeContext {
		let _localctx: IndirectTypeContext = new IndirectTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, informixParser.RULE_indirectType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 538;
			this.match(informixParser.LIKE);
			this.state = 539;
			this.tableIdentifier();
			this.state = 540;
			this.match(informixParser.DOT);
			this.state = 541;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeIdentifier(): TypeIdentifierContext {
		let _localctx: TypeIdentifierContext = new TypeIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, informixParser.RULE_typeIdentifier);
		try {
			this.state = 546;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case informixParser.CHAR:
			case informixParser.NCHAR:
			case informixParser.NVARCHAR:
			case informixParser.VARCHAR:
			case informixParser.CHARACTER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 543;
				this.charType();
				}
				break;
			case informixParser.BIGINT:
			case informixParser.DEC:
			case informixParser.DECIMAL:
			case informixParser.DOUBLE:
			case informixParser.FLOAT:
			case informixParser.INT:
			case informixParser.INTEGER:
			case informixParser.MONEY:
			case informixParser.NUMERIC:
			case informixParser.REAL:
			case informixParser.SMALLFLOAT:
			case informixParser.SMALLINT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 544;
				this.numberType();
				}
				break;
			case informixParser.DATE:
			case informixParser.DATETIME:
			case informixParser.INTERVAL:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 545;
				this.timeType();
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
	public largeType(): LargeTypeContext {
		let _localctx: LargeTypeContext = new LargeTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, informixParser.RULE_largeType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 548;
			_la = this._input.LA(1);
			if (!(_la === informixParser.BYTE || _la === informixParser.TEXT)) {
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
	public numberType(): NumberTypeContext {
		let _localctx: NumberTypeContext = new NumberTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, informixParser.RULE_numberType);
		let _la: number;
		try {
			this.state = 569;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case informixParser.BIGINT:
			case informixParser.INT:
			case informixParser.INTEGER:
			case informixParser.REAL:
			case informixParser.SMALLFLOAT:
			case informixParser.SMALLINT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 550;
				_la = this._input.LA(1);
				if (!(_la === informixParser.BIGINT || _la === informixParser.INT || _la === informixParser.INTEGER || ((((_la - 226)) & ~0x1F) === 0 && ((1 << (_la - 226)) & ((1 << (informixParser.REAL - 226)) | (1 << (informixParser.SMALLFLOAT - 226)) | (1 << (informixParser.SMALLINT - 226)))) !== 0))) {
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
			case informixParser.DEC:
			case informixParser.DECIMAL:
			case informixParser.MONEY:
			case informixParser.NUMERIC:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 551;
				_la = this._input.LA(1);
				if (!(_la === informixParser.DEC || _la === informixParser.DECIMAL || _la === informixParser.MONEY || _la === informixParser.NUMERIC)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 560;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === informixParser.LPAREN) {
					{
					this.state = 552;
					this.match(informixParser.LPAREN);
					this.state = 553;
					this.numericConstant();
					this.state = 556;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === informixParser.COMMA) {
						{
						this.state = 554;
						this.match(informixParser.COMMA);
						this.state = 555;
						this.numericConstant();
						}
					}

					this.state = 558;
					this.match(informixParser.RPAREN);
					}
				}

				}
				break;
			case informixParser.DOUBLE:
			case informixParser.FLOAT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 562;
				_la = this._input.LA(1);
				if (!(_la === informixParser.DOUBLE || _la === informixParser.FLOAT)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 567;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === informixParser.LPAREN) {
					{
					this.state = 563;
					this.match(informixParser.LPAREN);
					this.state = 564;
					this.numericConstant();
					this.state = 565;
					this.match(informixParser.RPAREN);
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
	public charType(): CharTypeContext {
		let _localctx: CharTypeContext = new CharTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, informixParser.RULE_charType);
		let _la: number;
		try {
			this.state = 587;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case informixParser.NVARCHAR:
			case informixParser.VARCHAR:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 571;
				_la = this._input.LA(1);
				if (!(_la === informixParser.NVARCHAR || _la === informixParser.VARCHAR)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 572;
				this.match(informixParser.LPAREN);
				this.state = 573;
				this.numericConstant();
				this.state = 576;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === informixParser.COMMA) {
					{
					this.state = 574;
					this.match(informixParser.COMMA);
					this.state = 575;
					this.numericConstant();
					}
				}

				this.state = 578;
				this.match(informixParser.RPAREN);
				}
				break;
			case informixParser.CHAR:
			case informixParser.NCHAR:
			case informixParser.CHARACTER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 580;
				_la = this._input.LA(1);
				if (!(_la === informixParser.CHAR || _la === informixParser.NCHAR || _la === informixParser.CHARACTER)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 585;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === informixParser.LPAREN) {
					{
					this.state = 581;
					this.match(informixParser.LPAREN);
					this.state = 582;
					this.numericConstant();
					this.state = 583;
					this.match(informixParser.RPAREN);
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
	public timeType(): TimeTypeContext {
		let _localctx: TimeTypeContext = new TimeTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, informixParser.RULE_timeType);
		try {
			this.state = 594;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case informixParser.DATE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 589;
				this.match(informixParser.DATE);
				}
				break;
			case informixParser.DATETIME:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 590;
				this.match(informixParser.DATETIME);
				this.state = 591;
				this.datetimeQualifier();
				}
				break;
			case informixParser.INTERVAL:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 592;
				this.match(informixParser.INTERVAL);
				this.state = 593;
				this.intervalQualifier();
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
	public datetimeQualifier(): DatetimeQualifierContext {
		let _localctx: DatetimeQualifierContext = new DatetimeQualifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, informixParser.RULE_datetimeQualifier);
		try {
			this.state = 617;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case informixParser.YEAR:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 596;
				this.match(informixParser.YEAR);
				this.state = 597;
				this.match(informixParser.TO);
				this.state = 598;
				this.yearQualifier();
				}
				break;
			case informixParser.MONTH:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 599;
				this.match(informixParser.MONTH);
				this.state = 600;
				this.match(informixParser.TO);
				this.state = 601;
				this.monthQualifier();
				}
				break;
			case informixParser.DAY:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 602;
				this.match(informixParser.DAY);
				this.state = 603;
				this.match(informixParser.TO);
				this.state = 604;
				this.dayQualifier();
				}
				break;
			case informixParser.HOUR:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 605;
				this.match(informixParser.HOUR);
				this.state = 606;
				this.match(informixParser.TO);
				this.state = 607;
				this.hourQualifier();
				}
				break;
			case informixParser.MINUTE:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 608;
				this.match(informixParser.MINUTE);
				this.state = 609;
				this.match(informixParser.TO);
				this.state = 610;
				this.minuteQualifier();
				}
				break;
			case informixParser.SECOND:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 611;
				this.match(informixParser.SECOND);
				this.state = 612;
				this.match(informixParser.TO);
				this.state = 613;
				this.secondQualifier();
				}
				break;
			case informixParser.FRACTION:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 614;
				this.match(informixParser.FRACTION);
				this.state = 615;
				this.match(informixParser.TO);
				this.state = 616;
				this.fractionQualifier();
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
	public intervalQualifier(): IntervalQualifierContext {
		let _localctx: IntervalQualifierContext = new IntervalQualifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, informixParser.RULE_intervalQualifier);
		let _la: number;
		try {
			this.state = 676;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case informixParser.YEAR:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 619;
				this.match(informixParser.YEAR);
				this.state = 624;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === informixParser.LPAREN) {
					{
					this.state = 620;
					this.match(informixParser.LPAREN);
					this.state = 621;
					this.numericConstant();
					this.state = 622;
					this.match(informixParser.RPAREN);
					}
				}

				this.state = 626;
				this.match(informixParser.TO);
				this.state = 627;
				this.yearQualifier();
				}
				break;
			case informixParser.MONTH:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 628;
				this.match(informixParser.MONTH);
				this.state = 633;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === informixParser.LPAREN) {
					{
					this.state = 629;
					this.match(informixParser.LPAREN);
					this.state = 630;
					this.numericConstant();
					this.state = 631;
					this.match(informixParser.RPAREN);
					}
				}

				this.state = 635;
				this.match(informixParser.TO);
				this.state = 636;
				this.monthQualifier();
				}
				break;
			case informixParser.DAY:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 637;
				this.match(informixParser.DAY);
				this.state = 642;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === informixParser.LPAREN) {
					{
					this.state = 638;
					this.match(informixParser.LPAREN);
					this.state = 639;
					this.numericConstant();
					this.state = 640;
					this.match(informixParser.RPAREN);
					}
				}

				this.state = 644;
				this.match(informixParser.TO);
				this.state = 645;
				this.dayQualifier();
				}
				break;
			case informixParser.HOUR:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 646;
				this.match(informixParser.HOUR);
				this.state = 651;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === informixParser.LPAREN) {
					{
					this.state = 647;
					this.match(informixParser.LPAREN);
					this.state = 648;
					this.numericConstant();
					this.state = 649;
					this.match(informixParser.RPAREN);
					}
				}

				this.state = 653;
				this.match(informixParser.TO);
				this.state = 654;
				this.hourQualifier();
				}
				break;
			case informixParser.MINUTE:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 655;
				this.match(informixParser.MINUTE);
				this.state = 660;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === informixParser.LPAREN) {
					{
					this.state = 656;
					this.match(informixParser.LPAREN);
					this.state = 657;
					this.numericConstant();
					this.state = 658;
					this.match(informixParser.RPAREN);
					}
				}

				this.state = 662;
				this.match(informixParser.TO);
				this.state = 663;
				this.minuteQualifier();
				}
				break;
			case informixParser.SECOND:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 664;
				this.match(informixParser.SECOND);
				this.state = 669;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === informixParser.LPAREN) {
					{
					this.state = 665;
					this.match(informixParser.LPAREN);
					this.state = 666;
					this.numericConstant();
					this.state = 667;
					this.match(informixParser.RPAREN);
					}
				}

				this.state = 671;
				this.match(informixParser.TO);
				this.state = 672;
				this.secondQualifier();
				}
				break;
			case informixParser.FRACTION:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 673;
				this.match(informixParser.FRACTION);
				this.state = 674;
				this.match(informixParser.TO);
				this.state = 675;
				this.fractionQualifier();
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
	public unitType(): UnitTypeContext {
		let _localctx: UnitTypeContext = new UnitTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, informixParser.RULE_unitType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 678;
			this.yearQualifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public yearQualifier(): YearQualifierContext {
		let _localctx: YearQualifierContext = new YearQualifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, informixParser.RULE_yearQualifier);
		try {
			this.state = 682;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case informixParser.YEAR:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 680;
				this.match(informixParser.YEAR);
				}
				break;
			case informixParser.DAY:
			case informixParser.FRACTION:
			case informixParser.HOUR:
			case informixParser.MINUTE:
			case informixParser.MONTH:
			case informixParser.SECOND:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 681;
				this.monthQualifier();
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
	public monthQualifier(): MonthQualifierContext {
		let _localctx: MonthQualifierContext = new MonthQualifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, informixParser.RULE_monthQualifier);
		try {
			this.state = 686;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case informixParser.MONTH:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 684;
				this.match(informixParser.MONTH);
				}
				break;
			case informixParser.DAY:
			case informixParser.FRACTION:
			case informixParser.HOUR:
			case informixParser.MINUTE:
			case informixParser.SECOND:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 685;
				this.dayQualifier();
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
	public dayQualifier(): DayQualifierContext {
		let _localctx: DayQualifierContext = new DayQualifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, informixParser.RULE_dayQualifier);
		try {
			this.state = 690;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case informixParser.DAY:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 688;
				this.match(informixParser.DAY);
				}
				break;
			case informixParser.FRACTION:
			case informixParser.HOUR:
			case informixParser.MINUTE:
			case informixParser.SECOND:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 689;
				this.hourQualifier();
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
	public hourQualifier(): HourQualifierContext {
		let _localctx: HourQualifierContext = new HourQualifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, informixParser.RULE_hourQualifier);
		try {
			this.state = 694;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case informixParser.HOUR:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 692;
				this.match(informixParser.HOUR);
				}
				break;
			case informixParser.FRACTION:
			case informixParser.MINUTE:
			case informixParser.SECOND:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 693;
				this.minuteQualifier();
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
	public minuteQualifier(): MinuteQualifierContext {
		let _localctx: MinuteQualifierContext = new MinuteQualifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, informixParser.RULE_minuteQualifier);
		try {
			this.state = 698;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case informixParser.MINUTE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 696;
				this.match(informixParser.MINUTE);
				}
				break;
			case informixParser.FRACTION:
			case informixParser.SECOND:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 697;
				this.secondQualifier();
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
	public secondQualifier(): SecondQualifierContext {
		let _localctx: SecondQualifierContext = new SecondQualifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, informixParser.RULE_secondQualifier);
		try {
			this.state = 702;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case informixParser.SECOND:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 700;
				this.match(informixParser.SECOND);
				}
				break;
			case informixParser.FRACTION:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 701;
				this.fractionQualifier();
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
	public fractionQualifier(): FractionQualifierContext {
		let _localctx: FractionQualifierContext = new FractionQualifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, informixParser.RULE_fractionQualifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 704;
			this.match(informixParser.FRACTION);
			this.state = 709;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 46, this._ctx) ) {
			case 1:
				{
				this.state = 705;
				this.match(informixParser.LPAREN);
				this.state = 706;
				this.numericConstant();
				this.state = 707;
				this.match(informixParser.RPAREN);
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
	public structuredType(): StructuredTypeContext {
		let _localctx: StructuredTypeContext = new StructuredTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, informixParser.RULE_structuredType);
		try {
			this.state = 714;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case informixParser.RECORD:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 711;
				this.recordType();
				}
				break;
			case informixParser.ARRAY:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 712;
				this.arrayType();
				}
				break;
			case informixParser.DYNAMIC:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 713;
				this.dynArrayType();
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
	public recordType(): RecordTypeContext {
		let _localctx: RecordTypeContext = new RecordTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, informixParser.RULE_recordType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 716;
			this.match(informixParser.RECORD);
			this.state = 734;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case informixParser.EOL:
				{
				this.state = 717;
				this.eol();
				{
				this.state = 718;
				this.variableDeclaration();
				this.state = 723;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === informixParser.COMMA) {
					{
					{
					this.state = 719;
					this.match(informixParser.COMMA);
					this.state = 720;
					this.variableDeclaration();
					}
					}
					this.state = 725;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				this.state = 726;
				this.match(informixParser.END);
				this.state = 727;
				this.match(informixParser.RECORD);
				}
				break;
			case informixParser.LIKE:
				{
				{
				this.state = 729;
				this.match(informixParser.LIKE);
				this.state = 730;
				this.tableIdentifier();
				this.state = 731;
				this.match(informixParser.DOT);
				this.state = 732;
				this.match(informixParser.STAR);
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
	public arrayIndexer(): ArrayIndexerContext {
		let _localctx: ArrayIndexerContext = new ArrayIndexerContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, informixParser.RULE_arrayIndexer);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 736;
			this.match(informixParser.LBRACK);
			this.state = 737;
			this.numericConstant();
			this.state = 745;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 50, this._ctx) ) {
			case 1:
				{
				this.state = 738;
				this.match(informixParser.COMMA);
				this.state = 739;
				this.numericConstant();
				}
				break;

			case 2:
				{
				this.state = 740;
				this.match(informixParser.COMMA);
				this.state = 741;
				this.numericConstant();
				this.state = 742;
				this.match(informixParser.COMMA);
				this.state = 743;
				this.numericConstant();
				}
				break;
			}
			this.state = 747;
			this.match(informixParser.RBRACK);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrayType(): ArrayTypeContext {
		let _localctx: ArrayTypeContext = new ArrayTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, informixParser.RULE_arrayType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 749;
			this.match(informixParser.ARRAY);
			this.state = 750;
			this.arrayIndexer();
			this.state = 751;
			this.match(informixParser.OF);
			this.state = 755;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case informixParser.RECORD:
				{
				this.state = 752;
				this.recordType();
				}
				break;
			case informixParser.BIGINT:
			case informixParser.CHAR:
			case informixParser.DATE:
			case informixParser.DATETIME:
			case informixParser.DEC:
			case informixParser.DECIMAL:
			case informixParser.DOUBLE:
			case informixParser.FLOAT:
			case informixParser.INT:
			case informixParser.INTEGER:
			case informixParser.INTERVAL:
			case informixParser.MONEY:
			case informixParser.NCHAR:
			case informixParser.NUMERIC:
			case informixParser.NVARCHAR:
			case informixParser.REAL:
			case informixParser.SMALLFLOAT:
			case informixParser.SMALLINT:
			case informixParser.VARCHAR:
			case informixParser.CHARACTER:
				{
				this.state = 753;
				this.typeIdentifier();
				}
				break;
			case informixParser.BYTE:
			case informixParser.TEXT:
				{
				this.state = 754;
				this.largeType();
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
	public dynArrayType(): DynArrayTypeContext {
		let _localctx: DynArrayTypeContext = new DynArrayTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, informixParser.RULE_dynArrayType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 757;
			this.match(informixParser.DYNAMIC);
			this.state = 758;
			this.match(informixParser.ARRAY);
			this.state = 759;
			this.match(informixParser.WITH);
			this.state = 760;
			this.numericConstant();
			this.state = 761;
			this.match(informixParser.DIMENSIONS);
			this.state = 762;
			this.match(informixParser.OF);
			this.state = 765;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case informixParser.RECORD:
				{
				this.state = 763;
				this.recordType();
				}
				break;
			case informixParser.BIGINT:
			case informixParser.CHAR:
			case informixParser.DATE:
			case informixParser.DATETIME:
			case informixParser.DEC:
			case informixParser.DECIMAL:
			case informixParser.DOUBLE:
			case informixParser.FLOAT:
			case informixParser.INT:
			case informixParser.INTEGER:
			case informixParser.INTERVAL:
			case informixParser.MONEY:
			case informixParser.NCHAR:
			case informixParser.NUMERIC:
			case informixParser.NVARCHAR:
			case informixParser.REAL:
			case informixParser.SMALLFLOAT:
			case informixParser.SMALLINT:
			case informixParser.VARCHAR:
			case informixParser.CHARACTER:
				{
				this.state = 764;
				this.typeIdentifier();
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
	public string(): StringContext {
		let _localctx: StringContext = new StringContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, informixParser.RULE_string);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 767;
			this.match(informixParser.STRING_LITERAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 74, informixParser.RULE_statement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 772;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === informixParser.IDENT) {
				{
				this.state = 769;
				this.label();
				this.state = 770;
				this.match(informixParser.COLON);
				}
			}

			this.state = 774;
			this.unlabelledStatement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public codeBlock(): CodeBlockContext {
		let _localctx: CodeBlockContext = new CodeBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, informixParser.RULE_codeBlock);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 778;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					this.state = 778;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case informixParser.ALLOCATE:
					case informixParser.BEGIN:
					case informixParser.CALL:
					case informixParser.CASE:
					case informixParser.CLEAR:
					case informixParser.CLOSE:
					case informixParser.COMMIT:
					case informixParser.CONSTRUCT:
					case informixParser.CONTINUE:
					case informixParser.CREATE:
					case informixParser.CURRENT:
					case informixParser.DEALLOCATE:
					case informixParser.DECLARE:
					case informixParser.DELETE:
					case informixParser.DISPLAY:
					case informixParser.DROP:
					case informixParser.ERROR:
					case informixParser.EXECUTE:
					case informixParser.EXIT:
					case informixParser.FETCH:
					case informixParser.FINISH:
					case informixParser.FLUSH:
					case informixParser.FOR:
					case informixParser.FOREACH:
					case informixParser.FREE:
					case informixParser.GOTO:
					case informixParser.HIDE:
					case informixParser.IF:
					case informixParser.INITIALIZE:
					case informixParser.INPUT:
					case informixParser.INSERT:
					case informixParser.LET:
					case informixParser.LOAD:
					case informixParser.LOCATE:
					case informixParser.LOCK:
					case informixParser.MENU:
					case informixParser.MESSAGE:
					case informixParser.NEED:
					case informixParser.NEXT:
					case informixParser.OPEN:
					case informixParser.OPTIONS:
					case informixParser.OUTPUT:
					case informixParser.PAUSE:
					case informixParser.PREPARE:
					case informixParser.PRINT:
					case informixParser.PROMPT:
					case informixParser.PUT:
					case informixParser.RESIZE:
					case informixParser.RETURN:
					case informixParser.ROLLBACK:
					case informixParser.RUN:
					case informixParser.SCROLL:
					case informixParser.SKIP2:
					case informixParser.SELECT:
					case informixParser.SET:
					case informixParser.SHOW:
					case informixParser.SLEEP:
					case informixParser.START:
					case informixParser.TERMINATE:
					case informixParser.UNLOAD:
					case informixParser.UPDATE:
					case informixParser.VALIDATE:
					case informixParser.WHENEVER:
					case informixParser.WHILE:
					case informixParser.IDENT:
						{
						this.state = 776;
						this.statement();
						}
						break;
					case informixParser.DATABASE:
						{
						this.state = 777;
						this.databaseDeclaration();
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
				this.state = 780;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 55, this._ctx);
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
	public label(): LabelContext {
		let _localctx: LabelContext = new LabelContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, informixParser.RULE_label);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 782;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unlabelledStatement(): UnlabelledStatementContext {
		let _localctx: UnlabelledStatementContext = new UnlabelledStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, informixParser.RULE_unlabelledStatement);
		try {
			this.state = 786;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case informixParser.ALLOCATE:
			case informixParser.BEGIN:
			case informixParser.CALL:
			case informixParser.CLEAR:
			case informixParser.CLOSE:
			case informixParser.COMMIT:
			case informixParser.CONSTRUCT:
			case informixParser.CONTINUE:
			case informixParser.CREATE:
			case informixParser.CURRENT:
			case informixParser.DEALLOCATE:
			case informixParser.DECLARE:
			case informixParser.DELETE:
			case informixParser.DISPLAY:
			case informixParser.DROP:
			case informixParser.ERROR:
			case informixParser.EXECUTE:
			case informixParser.EXIT:
			case informixParser.FETCH:
			case informixParser.FINISH:
			case informixParser.FLUSH:
			case informixParser.FREE:
			case informixParser.GOTO:
			case informixParser.HIDE:
			case informixParser.INITIALIZE:
			case informixParser.INPUT:
			case informixParser.INSERT:
			case informixParser.LET:
			case informixParser.LOAD:
			case informixParser.LOCATE:
			case informixParser.LOCK:
			case informixParser.MENU:
			case informixParser.MESSAGE:
			case informixParser.NEED:
			case informixParser.NEXT:
			case informixParser.OPEN:
			case informixParser.OPTIONS:
			case informixParser.OUTPUT:
			case informixParser.PAUSE:
			case informixParser.PREPARE:
			case informixParser.PRINT:
			case informixParser.PROMPT:
			case informixParser.PUT:
			case informixParser.RESIZE:
			case informixParser.RETURN:
			case informixParser.ROLLBACK:
			case informixParser.RUN:
			case informixParser.SCROLL:
			case informixParser.SKIP2:
			case informixParser.SELECT:
			case informixParser.SET:
			case informixParser.SHOW:
			case informixParser.SLEEP:
			case informixParser.START:
			case informixParser.TERMINATE:
			case informixParser.UNLOAD:
			case informixParser.UPDATE:
			case informixParser.VALIDATE:
			case informixParser.WHENEVER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 784;
				this.simpleStatement();
				}
				break;
			case informixParser.CASE:
			case informixParser.FOR:
			case informixParser.FOREACH:
			case informixParser.IF:
			case informixParser.WHILE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 785;
				this.structuredStatement();
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
	public simpleStatement(): SimpleStatementContext {
		let _localctx: SimpleStatementContext = new SimpleStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, informixParser.RULE_simpleStatement);
		let _la: number;
		try {
			this.state = 799;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 58, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 788;
				this.assignmentStatement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 789;
				this.procedureStatement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 790;
				this.sqlStatements();
				this.state = 792;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === informixParser.SEMI) {
					{
					this.state = 791;
					this.match(informixParser.SEMI);
					}
				}

				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 794;
				this.otherFGLStatement();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 795;
				this.menuInsideStatement();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 796;
				this.constructInsideStatement();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 797;
				this.displayInsideStatement();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 798;
				this.inputInsideStatement();
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
	public runStatement(): RunStatementContext {
		let _localctx: RunStatementContext = new RunStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, informixParser.RULE_runStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 801;
			this.match(informixParser.RUN);
			this.state = 804;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case informixParser.ACCEPT:
			case informixParser.ASCII:
			case informixParser.COUNT:
			case informixParser.CURRENT:
			case informixParser.FALSE:
			case informixParser.FIRST:
			case informixParser.FOUND:
			case informixParser.GROUP:
			case informixParser.HIDE:
			case informixParser.INDEX:
			case informixParser.INT_FLAG:
			case informixParser.INTERRUPT:
			case informixParser.LAST:
			case informixParser.LENGTH:
			case informixParser.LINENO:
			case informixParser.MDY:
			case informixParser.NO:
			case informixParser.NOT:
			case informixParser.NOTFOUND:
			case informixParser.NULL:
			case informixParser.PAGENO:
			case informixParser.REAL:
			case informixParser.SIZE:
			case informixParser.SQL:
			case informixParser.STATUS:
			case informixParser.TEMP:
			case informixParser.TIME:
			case informixParser.TODAY:
			case informixParser.TRUE:
			case informixParser.USER:
			case informixParser.WEEKDAY:
			case informixParser.WAIT:
			case informixParser.WORK:
			case informixParser.IDENT:
				{
				this.state = 802;
				this.variable();
				}
				break;
			case informixParser.STRING_LITERAL:
				{
				this.state = 803;
				this.string();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 812;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 60, this._ctx) ) {
			case 1:
				{
				this.state = 806;
				this.match(informixParser.IN);
				this.state = 807;
				this.match(informixParser.FORM);
				this.state = 808;
				this.match(informixParser.MODE);
				}
				break;

			case 2:
				{
				this.state = 809;
				this.match(informixParser.IN);
				this.state = 810;
				this.match(informixParser.LINE);
				this.state = 811;
				this.match(informixParser.MODE);
				}
				break;
			}
			this.state = 818;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case informixParser.WITHOUT:
				{
				this.state = 814;
				this.match(informixParser.WITHOUT);
				this.state = 815;
				this.match(informixParser.WAITING);
				}
				break;
			case informixParser.RETURNING:
				{
				this.state = 816;
				this.match(informixParser.RETURNING);
				this.state = 817;
				this.variable();
				}
				break;
			case informixParser.AFTER:
			case informixParser.ALLOCATE:
			case informixParser.BEFORE:
			case informixParser.BEGIN:
			case informixParser.CALL:
			case informixParser.CASE:
			case informixParser.CLEAR:
			case informixParser.CLOSE:
			case informixParser.COMMAND:
			case informixParser.COMMIT:
			case informixParser.CONSTRUCT:
			case informixParser.CONTINUE:
			case informixParser.CREATE:
			case informixParser.CURRENT:
			case informixParser.DATABASE:
			case informixParser.DEALLOCATE:
			case informixParser.DECLARE:
			case informixParser.DEFER:
			case informixParser.DELETE:
			case informixParser.DISPLAY:
			case informixParser.DROP:
			case informixParser.ELSE:
			case informixParser.END:
			case informixParser.ERROR:
			case informixParser.EXECUTE:
			case informixParser.EXIT:
			case informixParser.FETCH:
			case informixParser.FINISH:
			case informixParser.FIRST:
			case informixParser.FLUSH:
			case informixParser.FOR:
			case informixParser.FOREACH:
			case informixParser.FREE:
			case informixParser.GOTO:
			case informixParser.HIDE:
			case informixParser.IF:
			case informixParser.INITIALIZE:
			case informixParser.INPUT:
			case informixParser.INSERT:
			case informixParser.LET:
			case informixParser.LOAD:
			case informixParser.LOCATE:
			case informixParser.LOCK:
			case informixParser.MENU:
			case informixParser.MESSAGE:
			case informixParser.NEED:
			case informixParser.NEXT:
			case informixParser.ON:
			case informixParser.OPEN:
			case informixParser.OPTIONS:
			case informixParser.OUTPUT:
			case informixParser.OTHERWISE:
			case informixParser.PAGE:
			case informixParser.PAUSE:
			case informixParser.PREPARE:
			case informixParser.PRINT:
			case informixParser.PROMPT:
			case informixParser.PUT:
			case informixParser.RESIZE:
			case informixParser.RETURN:
			case informixParser.ROLLBACK:
			case informixParser.RUN:
			case informixParser.SCROLL:
			case informixParser.SKIP2:
			case informixParser.SELECT:
			case informixParser.SET:
			case informixParser.SHOW:
			case informixParser.SLEEP:
			case informixParser.START:
			case informixParser.TERMINATE:
			case informixParser.UNLOAD:
			case informixParser.UPDATE:
			case informixParser.VALIDATE:
			case informixParser.WHEN:
			case informixParser.WHENEVER:
			case informixParser.WHILE:
			case informixParser.IDENT:
			case informixParser.EOL:
				break;
			default:
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
	public assignmentStatement(): AssignmentStatementContext {
		let _localctx: AssignmentStatementContext = new AssignmentStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, informixParser.RULE_assignmentStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 820;
			this.match(informixParser.LET);
			this.state = 821;
			this.variable();
			this.state = 822;
			this.match(informixParser.EQUAL);
			this.state = 823;
			this.expression();
			this.state = 828;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === informixParser.COMMA) {
				{
				{
				this.state = 824;
				this.match(informixParser.COMMA);
				this.state = 825;
				this.expression();
				}
				}
				this.state = 830;
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
	public procedureStatement(): ProcedureStatementContext {
		let _localctx: ProcedureStatementContext = new ProcedureStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, informixParser.RULE_procedureStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 831;
			this.match(informixParser.CALL);
			this.state = 832;
			this.procedureIdentifier();
			this.state = 845;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === informixParser.LPAREN) {
				{
				this.state = 833;
				this.match(informixParser.LPAREN);
				this.state = 842;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << informixParser.ACCEPT) | (1 << informixParser.ASCII) | (1 << informixParser.AVG))) !== 0) || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (informixParser.COLUMN - 43)) | (1 << (informixParser.COUNT - 43)) | (1 << (informixParser.CURRENT - 43)) | (1 << (informixParser.DATE - 43)) | (1 << (informixParser.DAY - 43)))) !== 0) || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & ((1 << (informixParser.EXTEND - 98)) | (1 << (informixParser.FALSE - 98)) | (1 << (informixParser.FIRST - 98)) | (1 << (informixParser.FOUND - 98)) | (1 << (informixParser.GROUP - 98)))) !== 0) || ((((_la - 130)) & ~0x1F) === 0 && ((1 << (_la - 130)) & ((1 << (informixParser.HIDE - 130)) | (1 << (informixParser.INDEX - 130)) | (1 << (informixParser.INFIELD - 130)) | (1 << (informixParser.INT_FLAG - 130)) | (1 << (informixParser.INTERRUPT - 130)) | (1 << (informixParser.LAST - 130)) | (1 << (informixParser.LENGTH - 130)))) !== 0) || ((((_la - 162)) & ~0x1F) === 0 && ((1 << (_la - 162)) & ((1 << (informixParser.LINENO - 162)) | (1 << (informixParser.MAX - 162)) | (1 << (informixParser.MDY - 162)) | (1 << (informixParser.MIN - 162)) | (1 << (informixParser.MONTH - 162)) | (1 << (informixParser.NO - 162)) | (1 << (informixParser.NOT - 162)) | (1 << (informixParser.NOTFOUND - 162)))) !== 0) || ((((_la - 195)) & ~0x1F) === 0 && ((1 << (_la - 195)) & ((1 << (informixParser.NULL - 195)) | (1 << (informixParser.PAGENO - 195)) | (1 << (informixParser.PREPARE - 195)) | (1 << (informixParser.REAL - 195)))) !== 0) || ((((_la - 252)) & ~0x1F) === 0 && ((1 << (_la - 252)) & ((1 << (informixParser.SIZE - 252)) | (1 << (informixParser.SQL - 252)) | (1 << (informixParser.STATUS - 252)) | (1 << (informixParser.SUM - 252)) | (1 << (informixParser.TEMP - 252)) | (1 << (informixParser.TIME - 252)) | (1 << (informixParser.TODAY - 252)) | (1 << (informixParser.TRUE - 252)))) !== 0) || ((((_la - 290)) & ~0x1F) === 0 && ((1 << (_la - 290)) & ((1 << (informixParser.USER - 290)) | (1 << (informixParser.WEEKDAY - 290)) | (1 << (informixParser.WAIT - 290)) | (1 << (informixParser.WORK - 290)) | (1 << (informixParser.YEAR - 290)) | (1 << (informixParser.PLUS - 290)) | (1 << (informixParser.MINUS - 290)) | (1 << (informixParser.STAR - 290)))) !== 0) || ((((_la - 325)) & ~0x1F) === 0 && ((1 << (_la - 325)) & ((1 << (informixParser.LPAREN - 325)) | (1 << (informixParser.IDENT - 325)) | (1 << (informixParser.STRING_LITERAL - 325)) | (1 << (informixParser.NUM_INT - 325)) | (1 << (informixParser.NUM_REAL - 325)))) !== 0)) {
					{
					this.state = 834;
					this.actualParameter();
					this.state = 839;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === informixParser.COMMA) {
						{
						{
						this.state = 835;
						this.match(informixParser.COMMA);
						this.state = 836;
						this.actualParameter();
						}
						}
						this.state = 841;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 844;
				this.match(informixParser.RPAREN);
				}
			}

			this.state = 856;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === informixParser.RETURNING) {
				{
				this.state = 847;
				this.match(informixParser.RETURNING);
				this.state = 848;
				this.variable();
				this.state = 853;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === informixParser.COMMA) {
					{
					{
					this.state = 849;
					this.match(informixParser.COMMA);
					this.state = 850;
					this.variable();
					}
					}
					this.state = 855;
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
	public procedureIdentifier(): ProcedureIdentifierContext {
		let _localctx: ProcedureIdentifierContext = new ProcedureIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, informixParser.RULE_procedureIdentifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 858;
			this.functionIdentifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public actualParameter(): ActualParameterContext {
		let _localctx: ActualParameterContext = new ActualParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, informixParser.RULE_actualParameter);
		try {
			this.state = 862;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case informixParser.STAR:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 860;
				this.match(informixParser.STAR);
				}
				break;
			case informixParser.ACCEPT:
			case informixParser.ASCII:
			case informixParser.AVG:
			case informixParser.COLUMN:
			case informixParser.COUNT:
			case informixParser.CURRENT:
			case informixParser.DATE:
			case informixParser.DAY:
			case informixParser.EXTEND:
			case informixParser.FALSE:
			case informixParser.FIRST:
			case informixParser.FOUND:
			case informixParser.GROUP:
			case informixParser.HIDE:
			case informixParser.INDEX:
			case informixParser.INFIELD:
			case informixParser.INT_FLAG:
			case informixParser.INTERRUPT:
			case informixParser.LAST:
			case informixParser.LENGTH:
			case informixParser.LINENO:
			case informixParser.MAX:
			case informixParser.MDY:
			case informixParser.MIN:
			case informixParser.MONTH:
			case informixParser.NO:
			case informixParser.NOT:
			case informixParser.NOTFOUND:
			case informixParser.NULL:
			case informixParser.PAGENO:
			case informixParser.PREPARE:
			case informixParser.REAL:
			case informixParser.SIZE:
			case informixParser.SQL:
			case informixParser.STATUS:
			case informixParser.SUM:
			case informixParser.TEMP:
			case informixParser.TIME:
			case informixParser.TODAY:
			case informixParser.TRUE:
			case informixParser.USER:
			case informixParser.WEEKDAY:
			case informixParser.WAIT:
			case informixParser.WORK:
			case informixParser.YEAR:
			case informixParser.PLUS:
			case informixParser.MINUS:
			case informixParser.LPAREN:
			case informixParser.IDENT:
			case informixParser.STRING_LITERAL:
			case informixParser.NUM_INT:
			case informixParser.NUM_REAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 861;
				this.expression();
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
	public gotoStatement(): GotoStatementContext {
		let _localctx: GotoStatementContext = new GotoStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, informixParser.RULE_gotoStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 864;
			this.match(informixParser.GOTO);
			this.state = 866;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === informixParser.COLON) {
				{
				this.state = 865;
				this.match(informixParser.COLON);
				}
			}

			this.state = 868;
			this.label();
			this.state = 869;
			this.eol();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 96, informixParser.RULE_condition);
		let _la: number;
		try {
			let _alt: number;
			this.state = 880;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 71, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 871;
				_la = this._input.LA(1);
				if (!(_la === informixParser.FALSE || _la === informixParser.TRUE)) {
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

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 872;
				this.logicalTerm();
				this.state = 877;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 70, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 873;
						this.match(informixParser.OR);
						this.state = 874;
						this.logicalTerm();
						}
						}
					}
					this.state = 879;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 70, this._ctx);
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
	public logicalTerm(): LogicalTermContext {
		let _localctx: LogicalTermContext = new LogicalTermContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, informixParser.RULE_logicalTerm);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 882;
			this.logicalFactor();
			this.state = 887;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 72, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 883;
					this.match(informixParser.AND);
					this.state = 884;
					this.logicalFactor();
					}
					}
				}
				this.state = 889;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 72, this._ctx);
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
	public logicalFactor(): LogicalFactorContext {
		let _localctx: LogicalFactorContext = new LogicalFactorContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, informixParser.RULE_logicalFactor);
		let _la: number;
		try {
			this.state = 953;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 80, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				// tslint:disable-next-line:no-empty
				{
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				{
				this.state = 891;
				this.sqlExpression();
				this.state = 893;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === informixParser.NOT) {
					{
					this.state = 892;
					this.match(informixParser.NOT);
					}
				}

				this.state = 895;
				this.match(informixParser.LIKE);
				}
				this.state = 897;
				this.sqlExpression();
				this.state = 899;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === informixParser.NOT) {
					{
					this.state = 898;
					this.match(informixParser.NOT);
					}
				}

				this.state = 901;
				this.match(informixParser.LIKE);
				this.state = 902;
				this.sqlExpression();
				this.state = 905;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === informixParser.ESC) {
					{
					this.state = 903;
					this.match(informixParser.ESC);
					this.state = 904;
					this.match(informixParser.QUOTED_STRING);
					}
				}

				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				{
				this.state = 907;
				this.sqlExpression();
				this.state = 909;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === informixParser.NOT) {
					{
					this.state = 908;
					this.match(informixParser.NOT);
					}
				}

				this.state = 911;
				this.match(informixParser.BETWEEN);
				}
				this.state = 913;
				this.sqlExpression();
				this.state = 915;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === informixParser.NOT) {
					{
					this.state = 914;
					this.match(informixParser.NOT);
					}
				}

				this.state = 917;
				this.match(informixParser.BETWEEN);
				this.state = 918;
				this.sqlExpression();
				this.state = 919;
				this.match(informixParser.AND);
				this.state = 920;
				this.sqlExpression();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				{
				this.state = 922;
				this.sqlExpression();
				this.state = 923;
				this.match(informixParser.IS);
				this.state = 925;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === informixParser.NOT) {
					{
					this.state = 924;
					this.match(informixParser.NOT);
					}
				}

				this.state = 927;
				this.match(informixParser.NULL);
				}
				this.state = 929;
				this.sqlExpression();
				this.state = 930;
				this.match(informixParser.IS);
				this.state = 932;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === informixParser.NOT) {
					{
					this.state = 931;
					this.match(informixParser.NOT);
					}
				}

				this.state = 934;
				this.match(informixParser.NULL);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 936;
				this.quantifiedFactor();
				this.state = 937;
				this.quantifiedFactor();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				{
				this.state = 939;
				this.match(informixParser.NOT);
				this.state = 940;
				this.condition();
				}
				this.state = 942;
				this.match(informixParser.NOT);
				this.state = 943;
				this.condition();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 945;
				this.match(informixParser.LPAREN);
				this.state = 946;
				this.condition();
				this.state = 947;
				this.match(informixParser.RPAREN);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 949;
				this.sqlExpression();
				this.state = 950;
				this.relationalOperator();
				this.state = 951;
				this.sqlExpression();
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
	public quantifiedFactor(): QuantifiedFactorContext {
		let _localctx: QuantifiedFactorContext = new QuantifiedFactorContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, informixParser.RULE_quantifiedFactor);
		let _la: number;
		try {
			this.state = 982;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 85, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 955;
				this.sqlExpression();
				this.state = 956;
				this.relationalOperator();
				this.state = 958;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === informixParser.ALL || _la === informixParser.ANY) {
					{
					this.state = 957;
					_la = this._input.LA(1);
					if (!(_la === informixParser.ALL || _la === informixParser.ANY)) {
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

				this.state = 960;
				this.subquery();
				}
				this.state = 962;
				this.sqlExpression();
				this.state = 963;
				this.relationalOperator();
				this.state = 965;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === informixParser.ALL || _la === informixParser.ANY) {
					{
					this.state = 964;
					_la = this._input.LA(1);
					if (!(_la === informixParser.ALL || _la === informixParser.ANY)) {
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

				this.state = 967;
				this.subquery();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				{
				this.state = 970;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === informixParser.NOT) {
					{
					this.state = 969;
					this.match(informixParser.NOT);
					}
				}

				this.state = 972;
				this.match(informixParser.EXISTS);
				this.state = 973;
				this.subquery();
				}
				this.state = 976;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === informixParser.NOT) {
					{
					this.state = 975;
					this.match(informixParser.NOT);
					}
				}

				this.state = 978;
				this.match(informixParser.EXISTS);
				this.state = 979;
				this.subquery();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 981;
				this.subquery();
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
	public expressionSet(): ExpressionSetContext {
		let _localctx: ExpressionSetContext = new ExpressionSetContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, informixParser.RULE_expressionSet);
		try {
			this.state = 988;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 86, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 984;
				this.sqlExpression();
				this.state = 985;
				this.sqlExpression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 987;
				this.subquery();
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
	public subquery(): SubqueryContext {
		let _localctx: SubqueryContext = new SubqueryContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, informixParser.RULE_subquery);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 990;
			this.match(informixParser.LPAREN);
			this.state = 991;
			this.sqlSelectStatement();
			this.state = 992;
			this.match(informixParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sqlExpression(): SqlExpressionContext {
		let _localctx: SqlExpressionContext = new SqlExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, informixParser.RULE_sqlExpression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 994;
			this.sqlTerm();
			this.state = 999;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 87, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 995;
					_la = this._input.LA(1);
					if (!(_la === informixParser.PLUS || _la === informixParser.MINUS)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 996;
					this.sqlTerm();
					}
					}
				}
				this.state = 1001;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 87, this._ctx);
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
	public sqlAlias(): SqlAliasContext {
		let _localctx: SqlAliasContext = new SqlAliasContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, informixParser.RULE_sqlAlias);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1003;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === informixParser.AS) {
				{
				this.state = 1002;
				this.match(informixParser.AS);
				}
			}

			this.state = 1005;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sqlTerm(): SqlTermContext {
		let _localctx: SqlTermContext = new SqlTermContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, informixParser.RULE_sqlTerm);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1007;
			this.sqlFactor();
			this.state = 1016;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 90, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1011;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case informixParser.STAR:
						{
						this.state = 1008;
						this.sqlMultiply();
						}
						break;
					case informixParser.DIV:
						{
						this.state = 1009;
						this.match(informixParser.DIV);
						}
						break;
					case informixParser.SLASH:
						{
						this.state = 1010;
						this.match(informixParser.SLASH);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 1013;
					this.sqlFactor();
					}
					}
				}
				this.state = 1018;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 90, this._ctx);
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
	public sqlMultiply(): SqlMultiplyContext {
		let _localctx: SqlMultiplyContext = new SqlMultiplyContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, informixParser.RULE_sqlMultiply);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1019;
			this.match(informixParser.STAR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sqlFactor(): SqlFactorContext {
		let _localctx: SqlFactorContext = new SqlFactorContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, informixParser.RULE_sqlFactor);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1021;
			this.sqlFactor2();
			this.state = 1026;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 91, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1022;
					this.match(informixParser.DOUBLEVERTBAR);
					this.state = 1023;
					this.sqlFactor2();
					}
					}
				}
				this.state = 1028;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 91, this._ctx);
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
	public sqlFactor2(): SqlFactor2Context {
		let _localctx: SqlFactor2Context = new SqlFactor2Context(this._ctx, this.state);
		this.enterRule(_localctx, 118, informixParser.RULE_sqlFactor2);
		let _la: number;
		try {
			this.state = 1122;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 104, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 1029;
				this.sqlVariable();
				this.state = 1032;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === informixParser.UNITS) {
					{
					this.state = 1030;
					this.match(informixParser.UNITS);
					this.state = 1031;
					this.unitType();
					}
				}

				}
				this.state = 1034;
				this.sqlVariable();
				this.state = 1037;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === informixParser.UNITS) {
					{
					this.state = 1035;
					this.match(informixParser.UNITS);
					this.state = 1036;
					this.unitType();
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				{
				this.state = 1039;
				this.sqlLiteral();
				this.state = 1042;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === informixParser.UNITS) {
					{
					this.state = 1040;
					this.match(informixParser.UNITS);
					this.state = 1041;
					this.unitType();
					}
				}

				}
				this.state = 1044;
				this.sqlLiteral();
				this.state = 1047;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === informixParser.UNITS) {
					{
					this.state = 1045;
					this.match(informixParser.UNITS);
					this.state = 1046;
					this.unitType();
					}
				}

				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				{
				this.state = 1049;
				this.groupFunction();
				this.state = 1050;
				this.match(informixParser.LPAREN);
				this.state = 1052;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 96, this._ctx) ) {
				case 1:
					{
					this.state = 1051;
					_la = this._input.LA(1);
					if (!(_la === informixParser.ALL || _la === informixParser.DISTINCT || _la === informixParser.STAR)) {
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
				this.state = 1062;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << informixParser.ACCEPT) | (1 << informixParser.ASCII) | (1 << informixParser.AVG))) !== 0) || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & ((1 << (informixParser.COUNT - 54)) | (1 << (informixParser.CURRENT - 54)) | (1 << (informixParser.DATE - 54)) | (1 << (informixParser.DAY - 54)) | (1 << (informixParser.DECODE - 54)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (informixParser.FALSE - 101)) | (1 << (informixParser.FIRST - 101)) | (1 << (informixParser.FOUND - 101)) | (1 << (informixParser.GROUP - 101)) | (1 << (informixParser.HIDE - 101)))) !== 0) || ((((_la - 136)) & ~0x1F) === 0 && ((1 << (_la - 136)) & ((1 << (informixParser.INDEX - 136)) | (1 << (informixParser.INT_FLAG - 136)) | (1 << (informixParser.INTERRUPT - 136)) | (1 << (informixParser.LAST - 136)) | (1 << (informixParser.LENGTH - 136)) | (1 << (informixParser.LINENO - 136)))) !== 0) || ((((_la - 175)) & ~0x1F) === 0 && ((1 << (_la - 175)) & ((1 << (informixParser.MAX - 175)) | (1 << (informixParser.MDY - 175)) | (1 << (informixParser.MIN - 175)) | (1 << (informixParser.MOD - 175)) | (1 << (informixParser.MONTH - 175)) | (1 << (informixParser.NO - 175)) | (1 << (informixParser.NOT - 175)) | (1 << (informixParser.NOTFOUND - 175)) | (1 << (informixParser.NULL - 175)) | (1 << (informixParser.NVL - 175)))) !== 0) || _la === informixParser.PAGENO || _la === informixParser.REAL || ((((_la - 252)) & ~0x1F) === 0 && ((1 << (_la - 252)) & ((1 << (informixParser.SIZE - 252)) | (1 << (informixParser.SQL - 252)) | (1 << (informixParser.STATUS - 252)) | (1 << (informixParser.SUM - 252)) | (1 << (informixParser.TEMP - 252)) | (1 << (informixParser.TIME - 252)) | (1 << (informixParser.TODAY - 252)) | (1 << (informixParser.TRUE - 252)))) !== 0) || ((((_la - 290)) & ~0x1F) === 0 && ((1 << (_la - 290)) & ((1 << (informixParser.USER - 290)) | (1 << (informixParser.WEEKDAY - 290)) | (1 << (informixParser.WAIT - 290)) | (1 << (informixParser.WORK - 290)) | (1 << (informixParser.YEAR - 290)) | (1 << (informixParser.PLUS - 290)) | (1 << (informixParser.MINUS - 290)) | (1 << (informixParser.STAR - 290)))) !== 0) || ((((_la - 325)) & ~0x1F) === 0 && ((1 << (_la - 325)) & ((1 << (informixParser.LPAREN - 325)) | (1 << (informixParser.IDENT - 325)) | (1 << (informixParser.STRING_LITERAL - 325)) | (1 << (informixParser.NUM_INT - 325)) | (1 << (informixParser.NUM_REAL - 325)))) !== 0)) {
					{
					this.state = 1054;
					this.sqlExpression();
					this.state = 1059;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === informixParser.COMMA) {
						{
						{
						this.state = 1055;
						this.match(informixParser.COMMA);
						this.state = 1056;
						this.sqlExpression();
						}
						}
						this.state = 1061;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 1064;
				this.match(informixParser.RPAREN);
				}
				this.state = 1066;
				this.groupFunction();
				this.state = 1067;
				this.match(informixParser.LPAREN);
				this.state = 1069;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 99, this._ctx) ) {
				case 1:
					{
					this.state = 1068;
					_la = this._input.LA(1);
					if (!(_la === informixParser.ALL || _la === informixParser.DISTINCT || _la === informixParser.STAR)) {
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
				this.state = 1079;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << informixParser.ACCEPT) | (1 << informixParser.ASCII) | (1 << informixParser.AVG))) !== 0) || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & ((1 << (informixParser.COUNT - 54)) | (1 << (informixParser.CURRENT - 54)) | (1 << (informixParser.DATE - 54)) | (1 << (informixParser.DAY - 54)) | (1 << (informixParser.DECODE - 54)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (informixParser.FALSE - 101)) | (1 << (informixParser.FIRST - 101)) | (1 << (informixParser.FOUND - 101)) | (1 << (informixParser.GROUP - 101)) | (1 << (informixParser.HIDE - 101)))) !== 0) || ((((_la - 136)) & ~0x1F) === 0 && ((1 << (_la - 136)) & ((1 << (informixParser.INDEX - 136)) | (1 << (informixParser.INT_FLAG - 136)) | (1 << (informixParser.INTERRUPT - 136)) | (1 << (informixParser.LAST - 136)) | (1 << (informixParser.LENGTH - 136)) | (1 << (informixParser.LINENO - 136)))) !== 0) || ((((_la - 175)) & ~0x1F) === 0 && ((1 << (_la - 175)) & ((1 << (informixParser.MAX - 175)) | (1 << (informixParser.MDY - 175)) | (1 << (informixParser.MIN - 175)) | (1 << (informixParser.MOD - 175)) | (1 << (informixParser.MONTH - 175)) | (1 << (informixParser.NO - 175)) | (1 << (informixParser.NOT - 175)) | (1 << (informixParser.NOTFOUND - 175)) | (1 << (informixParser.NULL - 175)) | (1 << (informixParser.NVL - 175)))) !== 0) || _la === informixParser.PAGENO || _la === informixParser.REAL || ((((_la - 252)) & ~0x1F) === 0 && ((1 << (_la - 252)) & ((1 << (informixParser.SIZE - 252)) | (1 << (informixParser.SQL - 252)) | (1 << (informixParser.STATUS - 252)) | (1 << (informixParser.SUM - 252)) | (1 << (informixParser.TEMP - 252)) | (1 << (informixParser.TIME - 252)) | (1 << (informixParser.TODAY - 252)) | (1 << (informixParser.TRUE - 252)))) !== 0) || ((((_la - 290)) & ~0x1F) === 0 && ((1 << (_la - 290)) & ((1 << (informixParser.USER - 290)) | (1 << (informixParser.WEEKDAY - 290)) | (1 << (informixParser.WAIT - 290)) | (1 << (informixParser.WORK - 290)) | (1 << (informixParser.YEAR - 290)) | (1 << (informixParser.PLUS - 290)) | (1 << (informixParser.MINUS - 290)) | (1 << (informixParser.STAR - 290)))) !== 0) || ((((_la - 325)) & ~0x1F) === 0 && ((1 << (_la - 325)) & ((1 << (informixParser.LPAREN - 325)) | (1 << (informixParser.IDENT - 325)) | (1 << (informixParser.STRING_LITERAL - 325)) | (1 << (informixParser.NUM_INT - 325)) | (1 << (informixParser.NUM_REAL - 325)))) !== 0)) {
					{
					this.state = 1071;
					this.sqlExpression();
					this.state = 1076;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === informixParser.COMMA) {
						{
						{
						this.state = 1072;
						this.match(informixParser.COMMA);
						this.state = 1073;
						this.sqlExpression();
						}
						}
						this.state = 1078;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 1081;
				this.match(informixParser.RPAREN);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				{
				this.state = 1083;
				this.sqlFunction();
				{
				this.state = 1084;
				this.match(informixParser.LPAREN);
				this.state = 1085;
				this.sqlExpression();
				this.state = 1090;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === informixParser.COMMA) {
					{
					{
					this.state = 1086;
					this.match(informixParser.COMMA);
					this.state = 1087;
					this.sqlExpression();
					}
					}
					this.state = 1092;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1093;
				this.match(informixParser.RPAREN);
				}
				}
				this.state = 1095;
				this.sqlFunction();
				{
				this.state = 1096;
				this.match(informixParser.LPAREN);
				this.state = 1097;
				this.sqlExpression();
				this.state = 1102;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === informixParser.COMMA) {
					{
					{
					this.state = 1098;
					this.match(informixParser.COMMA);
					this.state = 1099;
					this.sqlExpression();
					}
					}
					this.state = 1104;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1105;
				this.match(informixParser.RPAREN);
				}
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				{
				this.state = 1107;
				_la = this._input.LA(1);
				if (!(_la === informixParser.PLUS || _la === informixParser.MINUS)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1108;
				this.sqlExpression();
				}
				this.state = 1110;
				_la = this._input.LA(1);
				if (!(_la === informixParser.PLUS || _la === informixParser.MINUS)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1111;
				this.sqlExpression();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				{
				this.state = 1113;
				this.match(informixParser.LPAREN);
				this.state = 1114;
				this.sqlExpression();
				this.state = 1115;
				this.match(informixParser.RPAREN);
				}
				this.state = 1117;
				this.match(informixParser.LPAREN);
				this.state = 1118;
				this.sqlExpression();
				this.state = 1119;
				this.match(informixParser.RPAREN);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1121;
				this.sqlExpressionList();
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
	public sqlExpressionList(): SqlExpressionListContext {
		let _localctx: SqlExpressionListContext = new SqlExpressionListContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, informixParser.RULE_sqlExpressionList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1124;
			this.match(informixParser.LPAREN);
			this.state = 1125;
			this.sqlExpression();
			this.state = 1128;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1126;
				this.match(informixParser.COMMA);
				this.state = 1127;
				this.sqlExpression();
				}
				}
				this.state = 1130;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === informixParser.COMMA);
			this.state = 1132;
			this.match(informixParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sqlLiteral(): SqlLiteralContext {
		let _localctx: SqlLiteralContext = new SqlLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, informixParser.RULE_sqlLiteral);
		try {
			this.state = 1139;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 106, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1134;
				this.unsignedConstant();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1135;
				this.string();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1136;
				this.match(informixParser.NULL);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1137;
				this.match(informixParser.FALSE);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1138;
				this.match(informixParser.TRUE);
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
	public sqlVariable(): SqlVariableContext {
		let _localctx: SqlVariableContext = new SqlVariableContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, informixParser.RULE_sqlVariable);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1141;
			this.columnsTableId();
			this.state = 1142;
			this.columnsTableId();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sqlFunction(): SqlFunctionContext {
		let _localctx: SqlFunctionContext = new SqlFunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, informixParser.RULE_sqlFunction);
		try {
			this.state = 1148;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 107, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1144;
				this.numberFunction();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1145;
				this.charFunction();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1146;
				this.dateFunction();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1147;
				this.otherFunction();
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
	public dateFunction(): DateFunctionContext {
		let _localctx: DateFunctionContext = new DateFunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, informixParser.RULE_dateFunction);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1150;
			_la = this._input.LA(1);
			if (!(_la === informixParser.DATE || _la === informixParser.DAY || _la === informixParser.MONTH || _la === informixParser.YEAR)) {
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
	public numberFunction(): NumberFunctionContext {
		let _localctx: NumberFunctionContext = new NumberFunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, informixParser.RULE_numberFunction);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1152;
			this.match(informixParser.MOD);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public charFunction(): CharFunctionContext {
		let _localctx: CharFunctionContext = new CharFunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, informixParser.RULE_charFunction);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1154;
			this.match(informixParser.LENGTH);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public groupFunction(): GroupFunctionContext {
		let _localctx: GroupFunctionContext = new GroupFunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, informixParser.RULE_groupFunction);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1156;
			_la = this._input.LA(1);
			if (!(_la === informixParser.AVG || _la === informixParser.COUNT || _la === informixParser.MAX || _la === informixParser.MIN || _la === informixParser.SUM)) {
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
	public otherFunction(): OtherFunctionContext {
		let _localctx: OtherFunctionContext = new OtherFunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, informixParser.RULE_otherFunction);
		let _la: number;
		try {
			this.state = 1160;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case informixParser.DECODE:
			case informixParser.NVL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1158;
				_la = this._input.LA(1);
				if (!(_la === informixParser.DECODE || _la === informixParser.NVL)) {
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
			case informixParser.ACCEPT:
			case informixParser.ASCII:
			case informixParser.COUNT:
			case informixParser.CURRENT:
			case informixParser.FALSE:
			case informixParser.FIRST:
			case informixParser.FOUND:
			case informixParser.GROUP:
			case informixParser.HIDE:
			case informixParser.INDEX:
			case informixParser.INT_FLAG:
			case informixParser.INTERRUPT:
			case informixParser.LAST:
			case informixParser.LENGTH:
			case informixParser.LINENO:
			case informixParser.MDY:
			case informixParser.NO:
			case informixParser.NOT:
			case informixParser.NOTFOUND:
			case informixParser.NULL:
			case informixParser.PAGENO:
			case informixParser.REAL:
			case informixParser.SIZE:
			case informixParser.SQL:
			case informixParser.STATUS:
			case informixParser.TEMP:
			case informixParser.TIME:
			case informixParser.TODAY:
			case informixParser.TRUE:
			case informixParser.USER:
			case informixParser.WEEKDAY:
			case informixParser.WAIT:
			case informixParser.WORK:
			case informixParser.IDENT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1159;
				this.constantIdentifier();
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
	public sqlPseudoColumn(): SqlPseudoColumnContext {
		let _localctx: SqlPseudoColumnContext = new SqlPseudoColumnContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, informixParser.RULE_sqlPseudoColumn);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1162;
			this.match(informixParser.USER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public relationalOperator(): RelationalOperatorContext {
		let _localctx: RelationalOperatorContext = new RelationalOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, informixParser.RULE_relationalOperator);
		let _la: number;
		try {
			this.state = 1175;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case informixParser.EQUAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1164;
				this.match(informixParser.EQUAL);
				}
				break;
			case informixParser.NOT_EQUAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1165;
				this.match(informixParser.NOT_EQUAL);
				}
				break;
			case informixParser.LE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1166;
				this.match(informixParser.LE);
				}
				break;
			case informixParser.LT:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1167;
				this.match(informixParser.LT);
				}
				break;
			case informixParser.GE:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1168;
				this.match(informixParser.GE);
				}
				break;
			case informixParser.GT:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1169;
				this.match(informixParser.GT);
				}
				break;
			case informixParser.LIKE:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1170;
				this.match(informixParser.LIKE);
				}
				break;
			case informixParser.MATCHES:
			case informixParser.NOT:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1172;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === informixParser.NOT) {
					{
					this.state = 1171;
					this.match(informixParser.NOT);
					}
				}

				this.state = 1174;
				this.match(informixParser.MATCHES);
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
	public ifCondition(): IfConditionContext {
		let _localctx: IfConditionContext = new IfConditionContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, informixParser.RULE_ifCondition);
		try {
			let _alt: number;
			this.state = 1188;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 112, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1177;
				this.match(informixParser.TRUE);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1178;
				this.match(informixParser.FALSE);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1179;
				this.ifCondition2();
				this.state = 1185;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 111, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1180;
						this.relationalOperator();
						this.state = 1181;
						this.ifCondition2();
						}
						}
					}
					this.state = 1187;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 111, this._ctx);
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
	public ifCondition2(): IfCondition2Context {
		let _localctx: IfCondition2Context = new IfCondition2Context(this._ctx, this.state);
		this.enterRule(_localctx, 144, informixParser.RULE_ifCondition2);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1190;
			this.ifLogicalTerm();
			this.state = 1195;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 113, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1191;
					this.match(informixParser.OR);
					this.state = 1192;
					this.ifLogicalTerm();
					}
					}
				}
				this.state = 1197;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 113, this._ctx);
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
	public ifLogicalTerm(): IfLogicalTermContext {
		let _localctx: IfLogicalTermContext = new IfLogicalTermContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, informixParser.RULE_ifLogicalTerm);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1198;
			this.ifLogicalFactor();
			this.state = 1203;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 114, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1199;
					this.match(informixParser.AND);
					this.state = 1200;
					this.ifLogicalFactor();
					}
					}
				}
				this.state = 1205;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 114, this._ctx);
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
		this.enterRule(_localctx, 148, informixParser.RULE_expression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1206;
			this.simpleExpression();
			this.state = 1212;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === informixParser.CLIPPED || _la === informixParser.USING) {
				{
				this.state = 1210;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case informixParser.CLIPPED:
					{
					this.state = 1207;
					this.match(informixParser.CLIPPED);
					}
					break;
				case informixParser.USING:
					{
					this.state = 1208;
					this.match(informixParser.USING);
					this.state = 1209;
					this.string();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 1214;
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
	public ifLogicalFactor(): IfLogicalFactorContext {
		let _localctx: IfLogicalFactorContext = new IfLogicalFactorContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, informixParser.RULE_ifLogicalFactor);
		try {
			this.state = 1229;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 117, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				// tslint:disable-next-line:no-empty
				{
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				{
				this.state = 1216;
				this.match(informixParser.NOT);
				this.state = 1217;
				this.ifCondition();
				}
				this.state = 1219;
				this.match(informixParser.NOT);
				this.state = 1220;
				this.ifCondition();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1222;
				this.match(informixParser.LPAREN);
				this.state = 1223;
				this.ifCondition();
				this.state = 1224;
				this.match(informixParser.RPAREN);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1226;
				this.simpleExpression();
				this.state = 1227;
				this.simpleExpression();
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
	public simpleExpression(): SimpleExpressionContext {
		let _localctx: SimpleExpressionContext = new SimpleExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, informixParser.RULE_simpleExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1232;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 118, this._ctx) ) {
			case 1:
				{
				this.state = 1231;
				this.sign();
				}
				break;
			}
			this.state = 1234;
			this.term();
			this.state = 1240;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 119, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1235;
					this.addingOperator();
					this.state = 1236;
					this.term();
					}
					}
				}
				this.state = 1242;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 119, this._ctx);
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
	public addingOperator(): AddingOperatorContext {
		let _localctx: AddingOperatorContext = new AddingOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, informixParser.RULE_addingOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1243;
			_la = this._input.LA(1);
			if (!(_la === informixParser.PLUS || _la === informixParser.MINUS)) {
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
	public term(): TermContext {
		let _localctx: TermContext = new TermContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, informixParser.RULE_term);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1245;
			this.factor();
			this.state = 1251;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === informixParser.MOD || ((((_la - 314)) & ~0x1F) === 0 && ((1 << (_la - 314)) & ((1 << (informixParser.STAR - 314)) | (1 << (informixParser.SLASH - 314)) | (1 << (informixParser.DIV - 314)))) !== 0)) {
				{
				{
				this.state = 1246;
				this.multiplyingOperator();
				this.state = 1247;
				this.factor();
				}
				}
				this.state = 1253;
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
	public multiplyingOperator(): MultiplyingOperatorContext {
		let _localctx: MultiplyingOperatorContext = new MultiplyingOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, informixParser.RULE_multiplyingOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1254;
			_la = this._input.LA(1);
			if (!(_la === informixParser.MOD || ((((_la - 314)) & ~0x1F) === 0 && ((1 << (_la - 314)) & ((1 << (informixParser.STAR - 314)) | (1 << (informixParser.SLASH - 314)) | (1 << (informixParser.DIV - 314)))) !== 0))) {
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
	public factor(): FactorContext {
		let _localctx: FactorContext = new FactorContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, informixParser.RULE_factor);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1268;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 122, this._ctx) ) {
			case 1:
				{
				this.state = 1257;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 121, this._ctx) ) {
				case 1:
					{
					this.state = 1256;
					this.match(informixParser.GROUP);
					}
					break;
				}
				this.state = 1259;
				this.functionDesignator();
				}
				break;

			case 2:
				{
				this.state = 1260;
				this.variable();
				}
				break;

			case 3:
				{
				this.state = 1261;
				this.constant();
				}
				break;

			case 4:
				{
				this.state = 1262;
				this.match(informixParser.LPAREN);
				this.state = 1263;
				this.expression();
				this.state = 1264;
				this.match(informixParser.RPAREN);
				}
				break;

			case 5:
				{
				this.state = 1266;
				this.match(informixParser.NOT);
				this.state = 1267;
				this.factor();
				}
				break;
			}
			this.state = 1272;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 123, this._ctx) ) {
			case 1:
				{
				this.state = 1270;
				this.match(informixParser.UNITS);
				this.state = 1271;
				this.unitType();
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
	public functionDesignator(): FunctionDesignatorContext {
		let _localctx: FunctionDesignatorContext = new FunctionDesignatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 162, informixParser.RULE_functionDesignator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1274;
			this.functionIdentifier();
			this.state = 1287;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 126, this._ctx) ) {
			case 1:
				{
				this.state = 1275;
				this.match(informixParser.LPAREN);
				this.state = 1284;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << informixParser.ACCEPT) | (1 << informixParser.ASCII) | (1 << informixParser.AVG))) !== 0) || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (informixParser.COLUMN - 43)) | (1 << (informixParser.COUNT - 43)) | (1 << (informixParser.CURRENT - 43)) | (1 << (informixParser.DATE - 43)) | (1 << (informixParser.DAY - 43)))) !== 0) || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & ((1 << (informixParser.EXTEND - 98)) | (1 << (informixParser.FALSE - 98)) | (1 << (informixParser.FIRST - 98)) | (1 << (informixParser.FOUND - 98)) | (1 << (informixParser.GROUP - 98)))) !== 0) || ((((_la - 130)) & ~0x1F) === 0 && ((1 << (_la - 130)) & ((1 << (informixParser.HIDE - 130)) | (1 << (informixParser.INDEX - 130)) | (1 << (informixParser.INFIELD - 130)) | (1 << (informixParser.INT_FLAG - 130)) | (1 << (informixParser.INTERRUPT - 130)) | (1 << (informixParser.LAST - 130)) | (1 << (informixParser.LENGTH - 130)))) !== 0) || ((((_la - 162)) & ~0x1F) === 0 && ((1 << (_la - 162)) & ((1 << (informixParser.LINENO - 162)) | (1 << (informixParser.MAX - 162)) | (1 << (informixParser.MDY - 162)) | (1 << (informixParser.MIN - 162)) | (1 << (informixParser.MONTH - 162)) | (1 << (informixParser.NO - 162)) | (1 << (informixParser.NOT - 162)) | (1 << (informixParser.NOTFOUND - 162)))) !== 0) || ((((_la - 195)) & ~0x1F) === 0 && ((1 << (_la - 195)) & ((1 << (informixParser.NULL - 195)) | (1 << (informixParser.PAGENO - 195)) | (1 << (informixParser.PREPARE - 195)) | (1 << (informixParser.REAL - 195)))) !== 0) || ((((_la - 252)) & ~0x1F) === 0 && ((1 << (_la - 252)) & ((1 << (informixParser.SIZE - 252)) | (1 << (informixParser.SQL - 252)) | (1 << (informixParser.STATUS - 252)) | (1 << (informixParser.SUM - 252)) | (1 << (informixParser.TEMP - 252)) | (1 << (informixParser.TIME - 252)) | (1 << (informixParser.TODAY - 252)) | (1 << (informixParser.TRUE - 252)))) !== 0) || ((((_la - 290)) & ~0x1F) === 0 && ((1 << (_la - 290)) & ((1 << (informixParser.USER - 290)) | (1 << (informixParser.WEEKDAY - 290)) | (1 << (informixParser.WAIT - 290)) | (1 << (informixParser.WORK - 290)) | (1 << (informixParser.YEAR - 290)) | (1 << (informixParser.PLUS - 290)) | (1 << (informixParser.MINUS - 290)) | (1 << (informixParser.STAR - 290)))) !== 0) || ((((_la - 325)) & ~0x1F) === 0 && ((1 << (_la - 325)) & ((1 << (informixParser.LPAREN - 325)) | (1 << (informixParser.IDENT - 325)) | (1 << (informixParser.STRING_LITERAL - 325)) | (1 << (informixParser.NUM_INT - 325)) | (1 << (informixParser.NUM_REAL - 325)))) !== 0)) {
					{
					this.state = 1276;
					this.actualParameter();
					this.state = 1281;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === informixParser.COMMA) {
						{
						{
						this.state = 1277;
						this.match(informixParser.COMMA);
						this.state = 1278;
						this.actualParameter();
						}
						}
						this.state = 1283;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 1286;
				this.match(informixParser.RPAREN);
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
	public functionIdentifier(): FunctionIdentifierContext {
		let _localctx: FunctionIdentifierContext = new FunctionIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 164, informixParser.RULE_functionIdentifier);
		let _la: number;
		try {
			this.state = 1291;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 127, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1289;
				_la = this._input.LA(1);
				if (!(_la === informixParser.AVG || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (informixParser.COLUMN - 43)) | (1 << (informixParser.COUNT - 43)) | (1 << (informixParser.DATE - 43)) | (1 << (informixParser.DAY - 43)))) !== 0) || _la === informixParser.EXTEND || _la === informixParser.INFIELD || ((((_la - 175)) & ~0x1F) === 0 && ((1 << (_la - 175)) & ((1 << (informixParser.MAX - 175)) | (1 << (informixParser.MDY - 175)) | (1 << (informixParser.MIN - 175)) | (1 << (informixParser.MONTH - 175)))) !== 0) || _la === informixParser.PREPARE || ((((_la - 266)) & ~0x1F) === 0 && ((1 << (_la - 266)) & ((1 << (informixParser.SUM - 266)) | (1 << (informixParser.TIME - 266)) | (1 << (informixParser.TODAY - 266)) | (1 << (informixParser.WEEKDAY - 266)))) !== 0) || _la === informixParser.YEAR)) {
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

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1290;
				this.constantIdentifier();
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
	public unsignedConstant(): UnsignedConstantContext {
		let _localctx: UnsignedConstantContext = new UnsignedConstantContext(this._ctx, this.state);
		this.enterRule(_localctx, 166, informixParser.RULE_unsignedConstant);
		try {
			this.state = 1297;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 128, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1293;
				this.unsignedNumber();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1294;
				this.string();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1295;
				this.constantIdentifier();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1296;
				this.match(informixParser.NULL);
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
	public constant(): ConstantContext {
		let _localctx: ConstantContext = new ConstantContext(this._ctx, this.state);
		this.enterRule(_localctx, 168, informixParser.RULE_constant);
		try {
			this.state = 1305;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 129, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1299;
				this.numericConstant();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1300;
				this.constantIdentifier();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1301;
				this.sign();
				this.state = 1302;
				this.identifier();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1304;
				this.string();
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
	public numericConstant(): NumericConstantContext {
		let _localctx: NumericConstantContext = new NumericConstantContext(this._ctx, this.state);
		this.enterRule(_localctx, 170, informixParser.RULE_numericConstant);
		try {
			this.state = 1311;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case informixParser.NUM_INT:
			case informixParser.NUM_REAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1307;
				this.unsignedNumber();
				}
				break;
			case informixParser.PLUS:
			case informixParser.MINUS:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1308;
				this.sign();
				this.state = 1309;
				this.unsignedNumber();
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
	public variable(): VariableContext {
		let _localctx: VariableContext = new VariableContext(this._ctx, this.state);
		this.enterRule(_localctx, 172, informixParser.RULE_variable);
		try {
			this.state = 1315;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 131, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1313;
				this.entireVariable();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1314;
				this.componentVariable();
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
	public entireVariable(): EntireVariableContext {
		let _localctx: EntireVariableContext = new EntireVariableContext(this._ctx, this.state);
		this.enterRule(_localctx, 174, informixParser.RULE_entireVariable);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1317;
			this.variableIdentifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableIdentifier(): VariableIdentifierContext {
		let _localctx: VariableIdentifierContext = new VariableIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 176, informixParser.RULE_variableIdentifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1319;
			this.constantIdentifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public indexingVariable(): IndexingVariableContext {
		let _localctx: IndexingVariableContext = new IndexingVariableContext(this._ctx, this.state);
		this.enterRule(_localctx, 178, informixParser.RULE_indexingVariable);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1321;
			this.match(informixParser.LBRACK);
			this.state = 1322;
			this.expression();
			this.state = 1327;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === informixParser.COMMA) {
				{
				{
				this.state = 1323;
				this.match(informixParser.COMMA);
				this.state = 1324;
				this.expression();
				}
				}
				this.state = 1329;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1330;
			this.match(informixParser.RBRACK);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public componentVariable(): ComponentVariableContext {
		let _localctx: ComponentVariableContext = new ComponentVariableContext(this._ctx, this.state);
		this.enterRule(_localctx, 180, informixParser.RULE_componentVariable);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 1332;
			this.recordVariable();
			this.state = 1334;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === informixParser.LBRACK) {
				{
				this.state = 1333;
				this.indexingVariable();
				}
			}

			}
			this.state = 1344;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 135, this._ctx) ) {
			case 1:
				{
				{
				this.state = 1336;
				this.match(informixParser.DOT);
				this.state = 1337;
				this.match(informixParser.STAR);
				}
				}
				break;

			case 2:
				{
				{
				this.state = 1338;
				this.match(informixParser.DOT);
				this.state = 1339;
				this.componentVariable();
				this.state = 1342;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 134, this._ctx) ) {
				case 1:
					{
					this.state = 1340;
					_la = this._input.LA(1);
					if (!(_la === informixParser.THROUGH || _la === informixParser.THRU)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 1341;
					this.componentVariable();
					}
					break;
				}
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
	public recordVariable(): RecordVariableContext {
		let _localctx: RecordVariableContext = new RecordVariableContext(this._ctx, this.state);
		this.enterRule(_localctx, 182, informixParser.RULE_recordVariable);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1346;
			this.constantIdentifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldIdentifier(): FieldIdentifierContext {
		let _localctx: FieldIdentifierContext = new FieldIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 184, informixParser.RULE_fieldIdentifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1348;
			this.constantIdentifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public structuredStatement(): StructuredStatementContext {
		let _localctx: StructuredStatementContext = new StructuredStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 186, informixParser.RULE_structuredStatement);
		try {
			this.state = 1352;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case informixParser.CASE:
			case informixParser.IF:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1350;
				this.conditionalStatement();
				}
				break;
			case informixParser.FOR:
			case informixParser.FOREACH:
			case informixParser.WHILE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1351;
				this.repetetiveStatement();
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
	public conditionalStatement(): ConditionalStatementContext {
		let _localctx: ConditionalStatementContext = new ConditionalStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 188, informixParser.RULE_conditionalStatement);
		try {
			this.state = 1356;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case informixParser.IF:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1354;
				this.ifStatement();
				}
				break;
			case informixParser.CASE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1355;
				this.caseStatement();
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
	public ifStatement(): IfStatementContext {
		let _localctx: IfStatementContext = new IfStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 190, informixParser.RULE_ifStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1358;
			this.match(informixParser.IF);
			this.state = 1359;
			this.ifCondition();
			this.state = 1360;
			this.match(informixParser.THEN);
			this.state = 1362;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === informixParser.ALLOCATE || _la === informixParser.BEGIN || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (informixParser.CALL - 33)) | (1 << (informixParser.CASE - 33)) | (1 << (informixParser.CLEAR - 33)) | (1 << (informixParser.CLOSE - 33)) | (1 << (informixParser.COMMIT - 33)) | (1 << (informixParser.CONSTRUCT - 33)) | (1 << (informixParser.CONTINUE - 33)) | (1 << (informixParser.CREATE - 33)) | (1 << (informixParser.CURRENT - 33)) | (1 << (informixParser.DATABASE - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (informixParser.DEALLOCATE - 65)) | (1 << (informixParser.DECLARE - 65)) | (1 << (informixParser.DELETE - 65)) | (1 << (informixParser.DISPLAY - 65)) | (1 << (informixParser.DROP - 65)) | (1 << (informixParser.ERROR - 65)) | (1 << (informixParser.EXECUTE - 65)) | (1 << (informixParser.EXIT - 65)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (informixParser.FETCH - 102)) | (1 << (informixParser.FINISH - 102)) | (1 << (informixParser.FLUSH - 102)) | (1 << (informixParser.FOR - 102)) | (1 << (informixParser.FOREACH - 102)) | (1 << (informixParser.FREE - 102)) | (1 << (informixParser.GOTO - 102)) | (1 << (informixParser.HIDE - 102)) | (1 << (informixParser.IF - 102)))) !== 0) || ((((_la - 139)) & ~0x1F) === 0 && ((1 << (_la - 139)) & ((1 << (informixParser.INITIALIZE - 139)) | (1 << (informixParser.INPUT - 139)) | (1 << (informixParser.INSERT - 139)) | (1 << (informixParser.LET - 139)) | (1 << (informixParser.LOAD - 139)) | (1 << (informixParser.LOCATE - 139)) | (1 << (informixParser.LOCK - 139)))) !== 0) || ((((_la - 171)) & ~0x1F) === 0 && ((1 << (_la - 171)) & ((1 << (informixParser.MENU - 171)) | (1 << (informixParser.MESSAGE - 171)) | (1 << (informixParser.NEED - 171)) | (1 << (informixParser.NEXT - 171)) | (1 << (informixParser.OPEN - 171)))) !== 0) || ((((_la - 203)) & ~0x1F) === 0 && ((1 << (_la - 203)) & ((1 << (informixParser.OPTIONS - 203)) | (1 << (informixParser.OUTPUT - 203)) | (1 << (informixParser.PAUSE - 203)) | (1 << (informixParser.PREPARE - 203)) | (1 << (informixParser.PRINT - 203)) | (1 << (informixParser.PROMPT - 203)) | (1 << (informixParser.PUT - 203)))) !== 0) || ((((_la - 235)) & ~0x1F) === 0 && ((1 << (_la - 235)) & ((1 << (informixParser.RESIZE - 235)) | (1 << (informixParser.RETURN - 235)) | (1 << (informixParser.ROLLBACK - 235)) | (1 << (informixParser.RUN - 235)) | (1 << (informixParser.SCROLL - 235)) | (1 << (informixParser.SKIP2 - 235)) | (1 << (informixParser.SELECT - 235)) | (1 << (informixParser.SET - 235)) | (1 << (informixParser.SHOW - 235)) | (1 << (informixParser.SLEEP - 235)) | (1 << (informixParser.START - 235)))) !== 0) || ((((_la - 269)) & ~0x1F) === 0 && ((1 << (_la - 269)) & ((1 << (informixParser.TERMINATE - 269)) | (1 << (informixParser.UNLOAD - 269)) | (1 << (informixParser.UPDATE - 269)) | (1 << (informixParser.VALIDATE - 269)))) !== 0) || ((((_la - 301)) & ~0x1F) === 0 && ((1 << (_la - 301)) & ((1 << (informixParser.WHENEVER - 301)) | (1 << (informixParser.WHILE - 301)) | (1 << (informixParser.IDENT - 301)))) !== 0)) {
				{
				this.state = 1361;
				this.codeBlock();
				}
			}

			this.state = 1368;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === informixParser.ELSE) {
				{
				this.state = 1364;
				this.match(informixParser.ELSE);
				this.state = 1366;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === informixParser.ALLOCATE || _la === informixParser.BEGIN || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (informixParser.CALL - 33)) | (1 << (informixParser.CASE - 33)) | (1 << (informixParser.CLEAR - 33)) | (1 << (informixParser.CLOSE - 33)) | (1 << (informixParser.COMMIT - 33)) | (1 << (informixParser.CONSTRUCT - 33)) | (1 << (informixParser.CONTINUE - 33)) | (1 << (informixParser.CREATE - 33)) | (1 << (informixParser.CURRENT - 33)) | (1 << (informixParser.DATABASE - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (informixParser.DEALLOCATE - 65)) | (1 << (informixParser.DECLARE - 65)) | (1 << (informixParser.DELETE - 65)) | (1 << (informixParser.DISPLAY - 65)) | (1 << (informixParser.DROP - 65)) | (1 << (informixParser.ERROR - 65)) | (1 << (informixParser.EXECUTE - 65)) | (1 << (informixParser.EXIT - 65)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (informixParser.FETCH - 102)) | (1 << (informixParser.FINISH - 102)) | (1 << (informixParser.FLUSH - 102)) | (1 << (informixParser.FOR - 102)) | (1 << (informixParser.FOREACH - 102)) | (1 << (informixParser.FREE - 102)) | (1 << (informixParser.GOTO - 102)) | (1 << (informixParser.HIDE - 102)) | (1 << (informixParser.IF - 102)))) !== 0) || ((((_la - 139)) & ~0x1F) === 0 && ((1 << (_la - 139)) & ((1 << (informixParser.INITIALIZE - 139)) | (1 << (informixParser.INPUT - 139)) | (1 << (informixParser.INSERT - 139)) | (1 << (informixParser.LET - 139)) | (1 << (informixParser.LOAD - 139)) | (1 << (informixParser.LOCATE - 139)) | (1 << (informixParser.LOCK - 139)))) !== 0) || ((((_la - 171)) & ~0x1F) === 0 && ((1 << (_la - 171)) & ((1 << (informixParser.MENU - 171)) | (1 << (informixParser.MESSAGE - 171)) | (1 << (informixParser.NEED - 171)) | (1 << (informixParser.NEXT - 171)) | (1 << (informixParser.OPEN - 171)))) !== 0) || ((((_la - 203)) & ~0x1F) === 0 && ((1 << (_la - 203)) & ((1 << (informixParser.OPTIONS - 203)) | (1 << (informixParser.OUTPUT - 203)) | (1 << (informixParser.PAUSE - 203)) | (1 << (informixParser.PREPARE - 203)) | (1 << (informixParser.PRINT - 203)) | (1 << (informixParser.PROMPT - 203)) | (1 << (informixParser.PUT - 203)))) !== 0) || ((((_la - 235)) & ~0x1F) === 0 && ((1 << (_la - 235)) & ((1 << (informixParser.RESIZE - 235)) | (1 << (informixParser.RETURN - 235)) | (1 << (informixParser.ROLLBACK - 235)) | (1 << (informixParser.RUN - 235)) | (1 << (informixParser.SCROLL - 235)) | (1 << (informixParser.SKIP2 - 235)) | (1 << (informixParser.SELECT - 235)) | (1 << (informixParser.SET - 235)) | (1 << (informixParser.SHOW - 235)) | (1 << (informixParser.SLEEP - 235)) | (1 << (informixParser.START - 235)))) !== 0) || ((((_la - 269)) & ~0x1F) === 0 && ((1 << (_la - 269)) & ((1 << (informixParser.TERMINATE - 269)) | (1 << (informixParser.UNLOAD - 269)) | (1 << (informixParser.UPDATE - 269)) | (1 << (informixParser.VALIDATE - 269)))) !== 0) || ((((_la - 301)) & ~0x1F) === 0 && ((1 << (_la - 301)) & ((1 << (informixParser.WHENEVER - 301)) | (1 << (informixParser.WHILE - 301)) | (1 << (informixParser.IDENT - 301)))) !== 0)) {
					{
					this.state = 1365;
					this.codeBlock();
					}
				}

				}
			}

			this.state = 1370;
			this.match(informixParser.END);
			this.state = 1371;
			this.match(informixParser.IF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public repetetiveStatement(): RepetetiveStatementContext {
		let _localctx: RepetetiveStatementContext = new RepetetiveStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 192, informixParser.RULE_repetetiveStatement);
		try {
			this.state = 1376;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case informixParser.WHILE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1373;
				this.whileStatement();
				}
				break;
			case informixParser.FOREACH:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1374;
				this.forEachStatement();
				}
				break;
			case informixParser.FOR:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1375;
				this.forStatement();
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
	public whileStatement(): WhileStatementContext {
		let _localctx: WhileStatementContext = new WhileStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 194, informixParser.RULE_whileStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1378;
			this.match(informixParser.WHILE);
			this.state = 1379;
			this.ifCondition();
			this.state = 1381;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === informixParser.ALLOCATE || _la === informixParser.BEGIN || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (informixParser.CALL - 33)) | (1 << (informixParser.CASE - 33)) | (1 << (informixParser.CLEAR - 33)) | (1 << (informixParser.CLOSE - 33)) | (1 << (informixParser.COMMIT - 33)) | (1 << (informixParser.CONSTRUCT - 33)) | (1 << (informixParser.CONTINUE - 33)) | (1 << (informixParser.CREATE - 33)) | (1 << (informixParser.CURRENT - 33)) | (1 << (informixParser.DATABASE - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (informixParser.DEALLOCATE - 65)) | (1 << (informixParser.DECLARE - 65)) | (1 << (informixParser.DELETE - 65)) | (1 << (informixParser.DISPLAY - 65)) | (1 << (informixParser.DROP - 65)) | (1 << (informixParser.ERROR - 65)) | (1 << (informixParser.EXECUTE - 65)) | (1 << (informixParser.EXIT - 65)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (informixParser.FETCH - 102)) | (1 << (informixParser.FINISH - 102)) | (1 << (informixParser.FLUSH - 102)) | (1 << (informixParser.FOR - 102)) | (1 << (informixParser.FOREACH - 102)) | (1 << (informixParser.FREE - 102)) | (1 << (informixParser.GOTO - 102)) | (1 << (informixParser.HIDE - 102)) | (1 << (informixParser.IF - 102)))) !== 0) || ((((_la - 139)) & ~0x1F) === 0 && ((1 << (_la - 139)) & ((1 << (informixParser.INITIALIZE - 139)) | (1 << (informixParser.INPUT - 139)) | (1 << (informixParser.INSERT - 139)) | (1 << (informixParser.LET - 139)) | (1 << (informixParser.LOAD - 139)) | (1 << (informixParser.LOCATE - 139)) | (1 << (informixParser.LOCK - 139)))) !== 0) || ((((_la - 171)) & ~0x1F) === 0 && ((1 << (_la - 171)) & ((1 << (informixParser.MENU - 171)) | (1 << (informixParser.MESSAGE - 171)) | (1 << (informixParser.NEED - 171)) | (1 << (informixParser.NEXT - 171)) | (1 << (informixParser.OPEN - 171)))) !== 0) || ((((_la - 203)) & ~0x1F) === 0 && ((1 << (_la - 203)) & ((1 << (informixParser.OPTIONS - 203)) | (1 << (informixParser.OUTPUT - 203)) | (1 << (informixParser.PAUSE - 203)) | (1 << (informixParser.PREPARE - 203)) | (1 << (informixParser.PRINT - 203)) | (1 << (informixParser.PROMPT - 203)) | (1 << (informixParser.PUT - 203)))) !== 0) || ((((_la - 235)) & ~0x1F) === 0 && ((1 << (_la - 235)) & ((1 << (informixParser.RESIZE - 235)) | (1 << (informixParser.RETURN - 235)) | (1 << (informixParser.ROLLBACK - 235)) | (1 << (informixParser.RUN - 235)) | (1 << (informixParser.SCROLL - 235)) | (1 << (informixParser.SKIP2 - 235)) | (1 << (informixParser.SELECT - 235)) | (1 << (informixParser.SET - 235)) | (1 << (informixParser.SHOW - 235)) | (1 << (informixParser.SLEEP - 235)) | (1 << (informixParser.START - 235)))) !== 0) || ((((_la - 269)) & ~0x1F) === 0 && ((1 << (_la - 269)) & ((1 << (informixParser.TERMINATE - 269)) | (1 << (informixParser.UNLOAD - 269)) | (1 << (informixParser.UPDATE - 269)) | (1 << (informixParser.VALIDATE - 269)))) !== 0) || ((((_la - 301)) & ~0x1F) === 0 && ((1 << (_la - 301)) & ((1 << (informixParser.WHENEVER - 301)) | (1 << (informixParser.WHILE - 301)) | (1 << (informixParser.IDENT - 301)))) !== 0)) {
				{
				this.state = 1380;
				this.codeBlock();
				}
			}

			this.state = 1383;
			this.match(informixParser.END);
			this.state = 1384;
			this.match(informixParser.WHILE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forStatement(): ForStatementContext {
		let _localctx: ForStatementContext = new ForStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 196, informixParser.RULE_forStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1386;
			this.match(informixParser.FOR);
			this.state = 1387;
			this.controlVariable();
			this.state = 1388;
			this.match(informixParser.EQUAL);
			this.state = 1389;
			this.forList();
			this.state = 1392;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === informixParser.STEP) {
				{
				this.state = 1390;
				this.match(informixParser.STEP);
				this.state = 1391;
				this.numericConstant();
				}
			}

			this.state = 1394;
			this.eol();
			this.state = 1396;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === informixParser.ALLOCATE || _la === informixParser.BEGIN || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (informixParser.CALL - 33)) | (1 << (informixParser.CASE - 33)) | (1 << (informixParser.CLEAR - 33)) | (1 << (informixParser.CLOSE - 33)) | (1 << (informixParser.COMMIT - 33)) | (1 << (informixParser.CONSTRUCT - 33)) | (1 << (informixParser.CONTINUE - 33)) | (1 << (informixParser.CREATE - 33)) | (1 << (informixParser.CURRENT - 33)) | (1 << (informixParser.DATABASE - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (informixParser.DEALLOCATE - 65)) | (1 << (informixParser.DECLARE - 65)) | (1 << (informixParser.DELETE - 65)) | (1 << (informixParser.DISPLAY - 65)) | (1 << (informixParser.DROP - 65)) | (1 << (informixParser.ERROR - 65)) | (1 << (informixParser.EXECUTE - 65)) | (1 << (informixParser.EXIT - 65)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (informixParser.FETCH - 102)) | (1 << (informixParser.FINISH - 102)) | (1 << (informixParser.FLUSH - 102)) | (1 << (informixParser.FOR - 102)) | (1 << (informixParser.FOREACH - 102)) | (1 << (informixParser.FREE - 102)) | (1 << (informixParser.GOTO - 102)) | (1 << (informixParser.HIDE - 102)) | (1 << (informixParser.IF - 102)))) !== 0) || ((((_la - 139)) & ~0x1F) === 0 && ((1 << (_la - 139)) & ((1 << (informixParser.INITIALIZE - 139)) | (1 << (informixParser.INPUT - 139)) | (1 << (informixParser.INSERT - 139)) | (1 << (informixParser.LET - 139)) | (1 << (informixParser.LOAD - 139)) | (1 << (informixParser.LOCATE - 139)) | (1 << (informixParser.LOCK - 139)))) !== 0) || ((((_la - 171)) & ~0x1F) === 0 && ((1 << (_la - 171)) & ((1 << (informixParser.MENU - 171)) | (1 << (informixParser.MESSAGE - 171)) | (1 << (informixParser.NEED - 171)) | (1 << (informixParser.NEXT - 171)) | (1 << (informixParser.OPEN - 171)))) !== 0) || ((((_la - 203)) & ~0x1F) === 0 && ((1 << (_la - 203)) & ((1 << (informixParser.OPTIONS - 203)) | (1 << (informixParser.OUTPUT - 203)) | (1 << (informixParser.PAUSE - 203)) | (1 << (informixParser.PREPARE - 203)) | (1 << (informixParser.PRINT - 203)) | (1 << (informixParser.PROMPT - 203)) | (1 << (informixParser.PUT - 203)))) !== 0) || ((((_la - 235)) & ~0x1F) === 0 && ((1 << (_la - 235)) & ((1 << (informixParser.RESIZE - 235)) | (1 << (informixParser.RETURN - 235)) | (1 << (informixParser.ROLLBACK - 235)) | (1 << (informixParser.RUN - 235)) | (1 << (informixParser.SCROLL - 235)) | (1 << (informixParser.SKIP2 - 235)) | (1 << (informixParser.SELECT - 235)) | (1 << (informixParser.SET - 235)) | (1 << (informixParser.SHOW - 235)) | (1 << (informixParser.SLEEP - 235)) | (1 << (informixParser.START - 235)))) !== 0) || ((((_la - 269)) & ~0x1F) === 0 && ((1 << (_la - 269)) & ((1 << (informixParser.TERMINATE - 269)) | (1 << (informixParser.UNLOAD - 269)) | (1 << (informixParser.UPDATE - 269)) | (1 << (informixParser.VALIDATE - 269)))) !== 0) || ((((_la - 301)) & ~0x1F) === 0 && ((1 << (_la - 301)) & ((1 << (informixParser.WHENEVER - 301)) | (1 << (informixParser.WHILE - 301)) | (1 << (informixParser.IDENT - 301)))) !== 0)) {
				{
				this.state = 1395;
				this.codeBlock();
				}
			}

			this.state = 1398;
			this.match(informixParser.END);
			this.state = 1399;
			this.match(informixParser.FOR);
			this.state = 1400;
			this.eol();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forList(): ForListContext {
		let _localctx: ForListContext = new ForListContext(this._ctx, this.state);
		this.enterRule(_localctx, 198, informixParser.RULE_forList);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1402;
			this.initialValue();
			this.state = 1403;
			this.match(informixParser.TO);
			this.state = 1404;
			this.finalValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public controlVariable(): ControlVariableContext {
		let _localctx: ControlVariableContext = new ControlVariableContext(this._ctx, this.state);
		this.enterRule(_localctx, 200, informixParser.RULE_controlVariable);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1406;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public initialValue(): InitialValueContext {
		let _localctx: InitialValueContext = new InitialValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 202, informixParser.RULE_initialValue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1408;
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
	public finalValue(): FinalValueContext {
		let _localctx: FinalValueContext = new FinalValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 204, informixParser.RULE_finalValue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1410;
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
	public forEachStatement(): ForEachStatementContext {
		let _localctx: ForEachStatementContext = new ForEachStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 206, informixParser.RULE_forEachStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1412;
			this.match(informixParser.FOREACH);
			this.state = 1413;
			this.identifier();
			this.state = 1416;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === informixParser.USING) {
				{
				this.state = 1414;
				this.match(informixParser.USING);
				this.state = 1415;
				this.variableList();
				}
			}

			this.state = 1420;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === informixParser.INTO) {
				{
				this.state = 1418;
				this.match(informixParser.INTO);
				this.state = 1419;
				this.variableList();
				}
			}

			this.state = 1424;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === informixParser.WITH) {
				{
				this.state = 1422;
				this.match(informixParser.WITH);
				this.state = 1423;
				this.match(informixParser.REOPTIMIZATION);
				}
			}

			this.state = 1426;
			this.eol();
			this.state = 1428;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === informixParser.ALLOCATE || _la === informixParser.BEGIN || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (informixParser.CALL - 33)) | (1 << (informixParser.CASE - 33)) | (1 << (informixParser.CLEAR - 33)) | (1 << (informixParser.CLOSE - 33)) | (1 << (informixParser.COMMIT - 33)) | (1 << (informixParser.CONSTRUCT - 33)) | (1 << (informixParser.CONTINUE - 33)) | (1 << (informixParser.CREATE - 33)) | (1 << (informixParser.CURRENT - 33)) | (1 << (informixParser.DATABASE - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (informixParser.DEALLOCATE - 65)) | (1 << (informixParser.DECLARE - 65)) | (1 << (informixParser.DELETE - 65)) | (1 << (informixParser.DISPLAY - 65)) | (1 << (informixParser.DROP - 65)) | (1 << (informixParser.ERROR - 65)) | (1 << (informixParser.EXECUTE - 65)) | (1 << (informixParser.EXIT - 65)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (informixParser.FETCH - 102)) | (1 << (informixParser.FINISH - 102)) | (1 << (informixParser.FLUSH - 102)) | (1 << (informixParser.FOR - 102)) | (1 << (informixParser.FOREACH - 102)) | (1 << (informixParser.FREE - 102)) | (1 << (informixParser.GOTO - 102)) | (1 << (informixParser.HIDE - 102)) | (1 << (informixParser.IF - 102)))) !== 0) || ((((_la - 139)) & ~0x1F) === 0 && ((1 << (_la - 139)) & ((1 << (informixParser.INITIALIZE - 139)) | (1 << (informixParser.INPUT - 139)) | (1 << (informixParser.INSERT - 139)) | (1 << (informixParser.LET - 139)) | (1 << (informixParser.LOAD - 139)) | (1 << (informixParser.LOCATE - 139)) | (1 << (informixParser.LOCK - 139)))) !== 0) || ((((_la - 171)) & ~0x1F) === 0 && ((1 << (_la - 171)) & ((1 << (informixParser.MENU - 171)) | (1 << (informixParser.MESSAGE - 171)) | (1 << (informixParser.NEED - 171)) | (1 << (informixParser.NEXT - 171)) | (1 << (informixParser.OPEN - 171)))) !== 0) || ((((_la - 203)) & ~0x1F) === 0 && ((1 << (_la - 203)) & ((1 << (informixParser.OPTIONS - 203)) | (1 << (informixParser.OUTPUT - 203)) | (1 << (informixParser.PAUSE - 203)) | (1 << (informixParser.PREPARE - 203)) | (1 << (informixParser.PRINT - 203)) | (1 << (informixParser.PROMPT - 203)) | (1 << (informixParser.PUT - 203)))) !== 0) || ((((_la - 235)) & ~0x1F) === 0 && ((1 << (_la - 235)) & ((1 << (informixParser.RESIZE - 235)) | (1 << (informixParser.RETURN - 235)) | (1 << (informixParser.ROLLBACK - 235)) | (1 << (informixParser.RUN - 235)) | (1 << (informixParser.SCROLL - 235)) | (1 << (informixParser.SKIP2 - 235)) | (1 << (informixParser.SELECT - 235)) | (1 << (informixParser.SET - 235)) | (1 << (informixParser.SHOW - 235)) | (1 << (informixParser.SLEEP - 235)) | (1 << (informixParser.START - 235)))) !== 0) || ((((_la - 269)) & ~0x1F) === 0 && ((1 << (_la - 269)) & ((1 << (informixParser.TERMINATE - 269)) | (1 << (informixParser.UNLOAD - 269)) | (1 << (informixParser.UPDATE - 269)) | (1 << (informixParser.VALIDATE - 269)))) !== 0) || ((((_la - 301)) & ~0x1F) === 0 && ((1 << (_la - 301)) & ((1 << (informixParser.WHENEVER - 301)) | (1 << (informixParser.WHILE - 301)) | (1 << (informixParser.IDENT - 301)))) !== 0)) {
				{
				this.state = 1427;
				this.codeBlock();
				}
			}

			this.state = 1430;
			this.match(informixParser.END);
			this.state = 1431;
			this.match(informixParser.FOREACH);
			this.state = 1432;
			this.eol();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableList(): VariableListContext {
		let _localctx: VariableListContext = new VariableListContext(this._ctx, this.state);
		this.enterRule(_localctx, 208, informixParser.RULE_variableList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1434;
			this.variable();
			this.state = 1439;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === informixParser.COMMA) {
				{
				{
				this.state = 1435;
				this.match(informixParser.COMMA);
				this.state = 1436;
				this.variable();
				}
				}
				this.state = 1441;
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
	public variableOrConstantList(): VariableOrConstantListContext {
		let _localctx: VariableOrConstantListContext = new VariableOrConstantListContext(this._ctx, this.state);
		this.enterRule(_localctx, 210, informixParser.RULE_variableOrConstantList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1442;
			this.expression();
			this.state = 1447;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === informixParser.COMMA) {
				{
				{
				this.state = 1443;
				this.match(informixParser.COMMA);
				this.state = 1444;
				this.expression();
				}
				}
				this.state = 1449;
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
	public caseStatement(): CaseStatementContext {
		let _localctx: CaseStatementContext = new CaseStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 212, informixParser.RULE_caseStatement);
		let _la: number;
		try {
			this.state = 1487;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 157, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1450;
				this.match(informixParser.CASE);
				this.state = 1451;
				this.expression();
				this.state = 1459;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === informixParser.WHEN) {
					{
					{
					this.state = 1452;
					this.match(informixParser.WHEN);
					this.state = 1453;
					this.expression();
					this.state = 1455;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === informixParser.ALLOCATE || _la === informixParser.BEGIN || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (informixParser.CALL - 33)) | (1 << (informixParser.CASE - 33)) | (1 << (informixParser.CLEAR - 33)) | (1 << (informixParser.CLOSE - 33)) | (1 << (informixParser.COMMIT - 33)) | (1 << (informixParser.CONSTRUCT - 33)) | (1 << (informixParser.CONTINUE - 33)) | (1 << (informixParser.CREATE - 33)) | (1 << (informixParser.CURRENT - 33)) | (1 << (informixParser.DATABASE - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (informixParser.DEALLOCATE - 65)) | (1 << (informixParser.DECLARE - 65)) | (1 << (informixParser.DELETE - 65)) | (1 << (informixParser.DISPLAY - 65)) | (1 << (informixParser.DROP - 65)) | (1 << (informixParser.ERROR - 65)) | (1 << (informixParser.EXECUTE - 65)) | (1 << (informixParser.EXIT - 65)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (informixParser.FETCH - 102)) | (1 << (informixParser.FINISH - 102)) | (1 << (informixParser.FLUSH - 102)) | (1 << (informixParser.FOR - 102)) | (1 << (informixParser.FOREACH - 102)) | (1 << (informixParser.FREE - 102)) | (1 << (informixParser.GOTO - 102)) | (1 << (informixParser.HIDE - 102)) | (1 << (informixParser.IF - 102)))) !== 0) || ((((_la - 139)) & ~0x1F) === 0 && ((1 << (_la - 139)) & ((1 << (informixParser.INITIALIZE - 139)) | (1 << (informixParser.INPUT - 139)) | (1 << (informixParser.INSERT - 139)) | (1 << (informixParser.LET - 139)) | (1 << (informixParser.LOAD - 139)) | (1 << (informixParser.LOCATE - 139)) | (1 << (informixParser.LOCK - 139)))) !== 0) || ((((_la - 171)) & ~0x1F) === 0 && ((1 << (_la - 171)) & ((1 << (informixParser.MENU - 171)) | (1 << (informixParser.MESSAGE - 171)) | (1 << (informixParser.NEED - 171)) | (1 << (informixParser.NEXT - 171)) | (1 << (informixParser.OPEN - 171)))) !== 0) || ((((_la - 203)) & ~0x1F) === 0 && ((1 << (_la - 203)) & ((1 << (informixParser.OPTIONS - 203)) | (1 << (informixParser.OUTPUT - 203)) | (1 << (informixParser.PAUSE - 203)) | (1 << (informixParser.PREPARE - 203)) | (1 << (informixParser.PRINT - 203)) | (1 << (informixParser.PROMPT - 203)) | (1 << (informixParser.PUT - 203)))) !== 0) || ((((_la - 235)) & ~0x1F) === 0 && ((1 << (_la - 235)) & ((1 << (informixParser.RESIZE - 235)) | (1 << (informixParser.RETURN - 235)) | (1 << (informixParser.ROLLBACK - 235)) | (1 << (informixParser.RUN - 235)) | (1 << (informixParser.SCROLL - 235)) | (1 << (informixParser.SKIP2 - 235)) | (1 << (informixParser.SELECT - 235)) | (1 << (informixParser.SET - 235)) | (1 << (informixParser.SHOW - 235)) | (1 << (informixParser.SLEEP - 235)) | (1 << (informixParser.START - 235)))) !== 0) || ((((_la - 269)) & ~0x1F) === 0 && ((1 << (_la - 269)) & ((1 << (informixParser.TERMINATE - 269)) | (1 << (informixParser.UNLOAD - 269)) | (1 << (informixParser.UPDATE - 269)) | (1 << (informixParser.VALIDATE - 269)))) !== 0) || ((((_la - 301)) & ~0x1F) === 0 && ((1 << (_la - 301)) & ((1 << (informixParser.WHENEVER - 301)) | (1 << (informixParser.WHILE - 301)) | (1 << (informixParser.IDENT - 301)))) !== 0)) {
						{
						this.state = 1454;
						this.codeBlock();
						}
					}

					}
					}
					this.state = 1461;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1466;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === informixParser.OTHERWISE) {
					{
					this.state = 1462;
					this.match(informixParser.OTHERWISE);
					this.state = 1464;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === informixParser.ALLOCATE || _la === informixParser.BEGIN || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (informixParser.CALL - 33)) | (1 << (informixParser.CASE - 33)) | (1 << (informixParser.CLEAR - 33)) | (1 << (informixParser.CLOSE - 33)) | (1 << (informixParser.COMMIT - 33)) | (1 << (informixParser.CONSTRUCT - 33)) | (1 << (informixParser.CONTINUE - 33)) | (1 << (informixParser.CREATE - 33)) | (1 << (informixParser.CURRENT - 33)) | (1 << (informixParser.DATABASE - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (informixParser.DEALLOCATE - 65)) | (1 << (informixParser.DECLARE - 65)) | (1 << (informixParser.DELETE - 65)) | (1 << (informixParser.DISPLAY - 65)) | (1 << (informixParser.DROP - 65)) | (1 << (informixParser.ERROR - 65)) | (1 << (informixParser.EXECUTE - 65)) | (1 << (informixParser.EXIT - 65)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (informixParser.FETCH - 102)) | (1 << (informixParser.FINISH - 102)) | (1 << (informixParser.FLUSH - 102)) | (1 << (informixParser.FOR - 102)) | (1 << (informixParser.FOREACH - 102)) | (1 << (informixParser.FREE - 102)) | (1 << (informixParser.GOTO - 102)) | (1 << (informixParser.HIDE - 102)) | (1 << (informixParser.IF - 102)))) !== 0) || ((((_la - 139)) & ~0x1F) === 0 && ((1 << (_la - 139)) & ((1 << (informixParser.INITIALIZE - 139)) | (1 << (informixParser.INPUT - 139)) | (1 << (informixParser.INSERT - 139)) | (1 << (informixParser.LET - 139)) | (1 << (informixParser.LOAD - 139)) | (1 << (informixParser.LOCATE - 139)) | (1 << (informixParser.LOCK - 139)))) !== 0) || ((((_la - 171)) & ~0x1F) === 0 && ((1 << (_la - 171)) & ((1 << (informixParser.MENU - 171)) | (1 << (informixParser.MESSAGE - 171)) | (1 << (informixParser.NEED - 171)) | (1 << (informixParser.NEXT - 171)) | (1 << (informixParser.OPEN - 171)))) !== 0) || ((((_la - 203)) & ~0x1F) === 0 && ((1 << (_la - 203)) & ((1 << (informixParser.OPTIONS - 203)) | (1 << (informixParser.OUTPUT - 203)) | (1 << (informixParser.PAUSE - 203)) | (1 << (informixParser.PREPARE - 203)) | (1 << (informixParser.PRINT - 203)) | (1 << (informixParser.PROMPT - 203)) | (1 << (informixParser.PUT - 203)))) !== 0) || ((((_la - 235)) & ~0x1F) === 0 && ((1 << (_la - 235)) & ((1 << (informixParser.RESIZE - 235)) | (1 << (informixParser.RETURN - 235)) | (1 << (informixParser.ROLLBACK - 235)) | (1 << (informixParser.RUN - 235)) | (1 << (informixParser.SCROLL - 235)) | (1 << (informixParser.SKIP2 - 235)) | (1 << (informixParser.SELECT - 235)) | (1 << (informixParser.SET - 235)) | (1 << (informixParser.SHOW - 235)) | (1 << (informixParser.SLEEP - 235)) | (1 << (informixParser.START - 235)))) !== 0) || ((((_la - 269)) & ~0x1F) === 0 && ((1 << (_la - 269)) & ((1 << (informixParser.TERMINATE - 269)) | (1 << (informixParser.UNLOAD - 269)) | (1 << (informixParser.UPDATE - 269)) | (1 << (informixParser.VALIDATE - 269)))) !== 0) || ((((_la - 301)) & ~0x1F) === 0 && ((1 << (_la - 301)) & ((1 << (informixParser.WHENEVER - 301)) | (1 << (informixParser.WHILE - 301)) | (1 << (informixParser.IDENT - 301)))) !== 0)) {
						{
						this.state = 1463;
						this.codeBlock();
						}
					}

					}
				}

				this.state = 1468;
				this.match(informixParser.END);
				this.state = 1469;
				this.match(informixParser.CASE);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1471;
				this.match(informixParser.CASE);
				this.state = 1478;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === informixParser.WHEN) {
					{
					{
					this.state = 1472;
					this.match(informixParser.WHEN);
					this.state = 1473;
					this.ifCondition();
					this.state = 1474;
					this.codeBlock();
					}
					}
					this.state = 1480;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1483;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === informixParser.OTHERWISE) {
					{
					this.state = 1481;
					this.match(informixParser.OTHERWISE);
					this.state = 1482;
					this.codeBlock();
					}
				}

				this.state = 1485;
				this.match(informixParser.END);
				this.state = 1486;
				this.match(informixParser.CASE);
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
	public otherFGLStatement(): OtherFGLStatementContext {
		let _localctx: OtherFGLStatementContext = new OtherFGLStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 214, informixParser.RULE_otherFGLStatement);
		try {
			this.state = 1493;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case informixParser.CONTINUE:
			case informixParser.EXIT:
			case informixParser.GOTO:
			case informixParser.RETURN:
			case informixParser.RUN:
			case informixParser.SLEEP:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1489;
				this.otherProgramFlowStatement();
				}
				break;
			case informixParser.ALLOCATE:
			case informixParser.DEALLOCATE:
			case informixParser.FREE:
			case informixParser.INITIALIZE:
			case informixParser.LOCATE:
			case informixParser.RESIZE:
			case informixParser.VALIDATE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1490;
				this.otherStorageStatement();
				}
				break;
			case informixParser.FINISH:
			case informixParser.NEED:
			case informixParser.OUTPUT:
			case informixParser.PAUSE:
			case informixParser.PRINT:
			case informixParser.SKIP2:
			case informixParser.START:
			case informixParser.TERMINATE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1491;
				this.reportStatement();
				}
				break;
			case informixParser.CLEAR:
			case informixParser.CLOSE:
			case informixParser.CONSTRUCT:
			case informixParser.CURRENT:
			case informixParser.DISPLAY:
			case informixParser.ERROR:
			case informixParser.INPUT:
			case informixParser.MENU:
			case informixParser.MESSAGE:
			case informixParser.OPEN:
			case informixParser.OPTIONS:
			case informixParser.PROMPT:
			case informixParser.SCROLL:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1492;
				this.screenStatement();
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
	public otherProgramFlowStatement(): OtherProgramFlowStatementContext {
		let _localctx: OtherProgramFlowStatementContext = new OtherProgramFlowStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 216, informixParser.RULE_otherProgramFlowStatement);
		try {
			this.state = 1502;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case informixParser.RUN:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1495;
				this.runStatement();
				}
				break;
			case informixParser.GOTO:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1496;
				this.gotoStatement();
				}
				break;
			case informixParser.SLEEP:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1497;
				this.match(informixParser.SLEEP);
				this.state = 1498;
				this.expression();
				}
				break;
			case informixParser.EXIT:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1499;
				this.exitStatements();
				}
				break;
			case informixParser.CONTINUE:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1500;
				this.continueStatements();
				}
				break;
			case informixParser.RETURN:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1501;
				this.returnStatement();
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
	public exitTypes(): ExitTypesContext {
		let _localctx: ExitTypesContext = new ExitTypesContext(this._ctx, this.state);
		this.enterRule(_localctx, 218, informixParser.RULE_exitTypes);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1504;
			_la = this._input.LA(1);
			if (!(_la === informixParser.CASE || _la === informixParser.CONSTRUCT || _la === informixParser.DISPLAY || _la === informixParser.FOR || _la === informixParser.FOREACH || _la === informixParser.INPUT || _la === informixParser.MENU || _la === informixParser.REPORT || _la === informixParser.WHILE)) {
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
	public exitStatements(): ExitStatementsContext {
		let _localctx: ExitStatementsContext = new ExitStatementsContext(this._ctx, this.state);
		this.enterRule(_localctx, 220, informixParser.RULE_exitStatements);
		try {
			this.state = 1517;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 161, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1506;
				this.match(informixParser.EXIT);
				this.state = 1507;
				this.exitTypes();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1508;
				this.match(informixParser.EXIT);
				this.state = 1509;
				this.match(informixParser.PROGRAM);
				this.state = 1515;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 160, this._ctx) ) {
				case 1:
					{
					this.state = 1510;
					this.match(informixParser.LPAREN);
					this.state = 1511;
					this.expression();
					this.state = 1512;
					this.match(informixParser.RPAREN);
					}
					break;

				case 2:
					{
					this.state = 1514;
					this.expression();
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
	public continueStatements(): ContinueStatementsContext {
		let _localctx: ContinueStatementsContext = new ContinueStatementsContext(this._ctx, this.state);
		this.enterRule(_localctx, 222, informixParser.RULE_continueStatements);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1519;
			this.match(informixParser.CONTINUE);
			this.state = 1520;
			this.exitTypes();
			this.state = 1521;
			this.eol();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public otherStorageStatement(): OtherStorageStatementContext {
		let _localctx: OtherStorageStatementContext = new OtherStorageStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 224, informixParser.RULE_otherStorageStatement);
		let _la: number;
		try {
			this.state = 1596;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case informixParser.ALLOCATE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1523;
				this.match(informixParser.ALLOCATE);
				this.state = 1524;
				this.match(informixParser.ARRAY);
				this.state = 1525;
				this.identifier();
				this.state = 1526;
				this.arrayIndexer();
				}
				break;
			case informixParser.LOCATE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1528;
				this.match(informixParser.LOCATE);
				this.state = 1529;
				this.variableList();
				this.state = 1530;
				this.match(informixParser.IN);
				this.state = 1537;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case informixParser.MEMORY:
					{
					this.state = 1531;
					this.match(informixParser.MEMORY);
					}
					break;
				case informixParser.FILE:
					{
					this.state = 1532;
					this.match(informixParser.FILE);
					this.state = 1535;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 162, this._ctx) ) {
					case 1:
						{
						this.state = 1533;
						this.variable();
						}
						break;

					case 2:
						{
						this.state = 1534;
						this.string();
						}
						break;
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case informixParser.DEALLOCATE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1539;
				this.match(informixParser.DEALLOCATE);
				this.state = 1540;
				this.match(informixParser.ARRAY);
				this.state = 1541;
				this.identifier();
				}
				break;
			case informixParser.RESIZE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1542;
				this.match(informixParser.RESIZE);
				this.state = 1543;
				this.match(informixParser.ARRAY);
				this.state = 1544;
				this.identifier();
				this.state = 1545;
				this.arrayIndexer();
				}
				break;
			case informixParser.FREE:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1547;
				this.match(informixParser.FREE);
				this.state = 1548;
				this.variable();
				this.state = 1553;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === informixParser.COMMA) {
					{
					{
					this.state = 1549;
					this.match(informixParser.COMMA);
					this.state = 1550;
					this.variable();
					}
					}
					this.state = 1555;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case informixParser.INITIALIZE:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1556;
				this.match(informixParser.INITIALIZE);
				this.state = 1557;
				this.variable();
				this.state = 1562;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === informixParser.COMMA) {
					{
					{
					this.state = 1558;
					this.match(informixParser.COMMA);
					this.state = 1559;
					this.variable();
					}
					}
					this.state = 1564;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1576;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case informixParser.TO:
					{
					this.state = 1565;
					this.match(informixParser.TO);
					this.state = 1566;
					this.match(informixParser.NULL);
					}
					break;
				case informixParser.LIKE:
					{
					this.state = 1567;
					this.match(informixParser.LIKE);
					this.state = 1568;
					this.expression();
					this.state = 1573;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === informixParser.COMMA) {
						{
						{
						this.state = 1569;
						this.match(informixParser.COMMA);
						this.state = 1570;
						this.expression();
						}
						}
						this.state = 1575;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case informixParser.VALIDATE:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1578;
				this.match(informixParser.VALIDATE);
				this.state = 1579;
				this.variable();
				this.state = 1584;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === informixParser.COMMA) {
					{
					{
					this.state = 1580;
					this.match(informixParser.COMMA);
					this.state = 1581;
					this.variable();
					}
					}
					this.state = 1586;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1587;
				this.match(informixParser.LIKE);
				this.state = 1588;
				this.expression();
				this.state = 1593;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === informixParser.COMMA) {
					{
					{
					this.state = 1589;
					this.match(informixParser.COMMA);
					this.state = 1590;
					this.expression();
					}
					}
					this.state = 1595;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
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
	public printExpressionItem(): PrintExpressionItemContext {
		let _localctx: PrintExpressionItemContext = new PrintExpressionItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 226, informixParser.RULE_printExpressionItem);
		let _la: number;
		try {
			this.state = 1617;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 174, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1598;
				this.match(informixParser.COLUMN);
				this.state = 1599;
				this.expression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1600;
				_la = this._input.LA(1);
				if (!(_la === informixParser.LINENO || _la === informixParser.PAGENO)) {
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
				this.state = 1601;
				this.match(informixParser.BYTE);
				this.state = 1602;
				this.variable();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1603;
				this.match(informixParser.TEXT);
				this.state = 1604;
				this.variable();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1605;
				this.expression();
				this.state = 1607;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === informixParser.SPACE || _la === informixParser.SPACES) {
					{
					this.state = 1606;
					_la = this._input.LA(1);
					if (!(_la === informixParser.SPACE || _la === informixParser.SPACES)) {
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

				this.state = 1615;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === informixParser.WORDWRAP) {
					{
					this.state = 1609;
					this.match(informixParser.WORDWRAP);
					this.state = 1613;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === informixParser.RIGHT) {
						{
						this.state = 1610;
						this.match(informixParser.RIGHT);
						this.state = 1611;
						this.match(informixParser.MARGIN);
						this.state = 1612;
						this.numericConstant();
						}
					}

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
	public printExpressionList(): PrintExpressionListContext {
		let _localctx: PrintExpressionListContext = new PrintExpressionListContext(this._ctx, this.state);
		this.enterRule(_localctx, 228, informixParser.RULE_printExpressionList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1619;
			this.printExpressionItem();
			this.state = 1624;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === informixParser.COMMA) {
				{
				{
				this.state = 1620;
				this.match(informixParser.COMMA);
				this.state = 1621;
				this.printExpressionItem();
				}
				}
				this.state = 1626;
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
	public reportStatement(): ReportStatementContext {
		let _localctx: ReportStatementContext = new ReportStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 230, informixParser.RULE_reportStatement);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1718;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case informixParser.START:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1627;
				this.match(informixParser.START);
				this.state = 1628;
				this.match(informixParser.REPORT);
				this.state = 1629;
				this.constantIdentifier();
				this.state = 1637;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === informixParser.TO) {
					{
					this.state = 1630;
					this.match(informixParser.TO);
					this.state = 1635;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case informixParser.ACCEPT:
					case informixParser.ASCII:
					case informixParser.AVG:
					case informixParser.COLUMN:
					case informixParser.COUNT:
					case informixParser.CURRENT:
					case informixParser.DATE:
					case informixParser.DAY:
					case informixParser.EXTEND:
					case informixParser.FALSE:
					case informixParser.FIRST:
					case informixParser.FOUND:
					case informixParser.GROUP:
					case informixParser.HIDE:
					case informixParser.INDEX:
					case informixParser.INFIELD:
					case informixParser.INT_FLAG:
					case informixParser.INTERRUPT:
					case informixParser.LAST:
					case informixParser.LENGTH:
					case informixParser.LINENO:
					case informixParser.MAX:
					case informixParser.MDY:
					case informixParser.MIN:
					case informixParser.MONTH:
					case informixParser.NO:
					case informixParser.NOT:
					case informixParser.NOTFOUND:
					case informixParser.NULL:
					case informixParser.PAGENO:
					case informixParser.PREPARE:
					case informixParser.REAL:
					case informixParser.SIZE:
					case informixParser.SQL:
					case informixParser.STATUS:
					case informixParser.SUM:
					case informixParser.TEMP:
					case informixParser.TIME:
					case informixParser.TODAY:
					case informixParser.TRUE:
					case informixParser.USER:
					case informixParser.WEEKDAY:
					case informixParser.WAIT:
					case informixParser.WORK:
					case informixParser.YEAR:
					case informixParser.PLUS:
					case informixParser.MINUS:
					case informixParser.LPAREN:
					case informixParser.IDENT:
					case informixParser.STRING_LITERAL:
					case informixParser.NUM_INT:
					case informixParser.NUM_REAL:
						{
						this.state = 1631;
						this.expression();
						}
						break;
					case informixParser.PIPE:
						{
						this.state = 1632;
						this.match(informixParser.PIPE);
						this.state = 1633;
						this.expression();
						}
						break;
					case informixParser.PRINTER:
						{
						this.state = 1634;
						this.match(informixParser.PRINTER);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
				}

				this.state = 1664;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === informixParser.WITH) {
					{
					this.state = 1639;
					this.match(informixParser.WITH);
					this.state = 1661;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 179, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							this.state = 1659;
							this._errHandler.sync(this);
							switch ( this.interpreter.adaptivePredict(this._input, 178, this._ctx) ) {
							case 1:
								{
								{
								this.state = 1640;
								this.match(informixParser.LEFT);
								this.state = 1641;
								this.match(informixParser.MARGIN);
								this.state = 1642;
								this.numericConstant();
								}
								}
								break;

							case 2:
								{
								{
								this.state = 1643;
								this.match(informixParser.RIGHT);
								this.state = 1644;
								this.match(informixParser.MARGIN);
								this.state = 1645;
								this.numericConstant();
								}
								}
								break;

							case 3:
								{
								{
								this.state = 1646;
								this.match(informixParser.TOP);
								this.state = 1647;
								this.match(informixParser.MARGIN);
								this.state = 1648;
								this.numericConstant();
								}
								}
								break;

							case 4:
								{
								{
								this.state = 1649;
								this.match(informixParser.BOTTOM);
								this.state = 1650;
								this.match(informixParser.MARGIN);
								this.state = 1651;
								this.numericConstant();
								}
								}
								break;

							case 5:
								{
								{
								this.state = 1652;
								this.match(informixParser.PAGE);
								this.state = 1653;
								this.match(informixParser.LENGTH);
								this.state = 1654;
								this.numericConstant();
								}
								}
								break;

							case 6:
								{
								{
								this.state = 1655;
								this.match(informixParser.TOP);
								this.state = 1656;
								this.match(informixParser.OF);
								this.state = 1657;
								this.match(informixParser.PAGE);
								this.state = 1658;
								this.string();
								}
								}
								break;
							}
							}
						}
						this.state = 1663;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 179, this._ctx);
					}
					}
				}

				}
				break;
			case informixParser.TERMINATE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1666;
				this.match(informixParser.TERMINATE);
				this.state = 1667;
				this.match(informixParser.REPORT);
				this.state = 1668;
				this.constantIdentifier();
				}
				break;
			case informixParser.FINISH:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1669;
				this.match(informixParser.FINISH);
				this.state = 1670;
				this.match(informixParser.REPORT);
				this.state = 1671;
				this.constantIdentifier();
				}
				break;
			case informixParser.PAUSE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1672;
				this.match(informixParser.PAUSE);
				this.state = 1674;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === informixParser.STRING_LITERAL) {
					{
					this.state = 1673;
					this.string();
					}
				}

				}
				break;
			case informixParser.NEED:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1676;
				this.match(informixParser.NEED);
				this.state = 1677;
				this.expression();
				this.state = 1678;
				this.match(informixParser.LINES);
				}
				break;
			case informixParser.PRINT:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1680;
				this.match(informixParser.PRINT);
				this.state = 1689;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 184, this._ctx) ) {
				case 1:
					{
					this.state = 1682;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 182, this._ctx) ) {
					case 1:
						{
						this.state = 1681;
						this.printExpressionList();
						}
						break;
					}
					this.state = 1685;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === informixParser.SEMI) {
						{
						this.state = 1684;
						this.match(informixParser.SEMI);
						}
					}

					}
					break;

				case 2:
					{
					this.state = 1687;
					this.match(informixParser.FILE);
					this.state = 1688;
					this.string();
					}
					break;
				}
				}
				break;
			case informixParser.SKIP2:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1691;
				this.match(informixParser.SKIP2);
				this.state = 1699;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case informixParser.ACCEPT:
				case informixParser.ASCII:
				case informixParser.AVG:
				case informixParser.COLUMN:
				case informixParser.COUNT:
				case informixParser.CURRENT:
				case informixParser.DATE:
				case informixParser.DAY:
				case informixParser.EXTEND:
				case informixParser.FALSE:
				case informixParser.FIRST:
				case informixParser.FOUND:
				case informixParser.GROUP:
				case informixParser.HIDE:
				case informixParser.INDEX:
				case informixParser.INFIELD:
				case informixParser.INT_FLAG:
				case informixParser.INTERRUPT:
				case informixParser.LAST:
				case informixParser.LENGTH:
				case informixParser.LINENO:
				case informixParser.MAX:
				case informixParser.MDY:
				case informixParser.MIN:
				case informixParser.MONTH:
				case informixParser.NO:
				case informixParser.NOT:
				case informixParser.NOTFOUND:
				case informixParser.NULL:
				case informixParser.PAGENO:
				case informixParser.PREPARE:
				case informixParser.REAL:
				case informixParser.SIZE:
				case informixParser.SQL:
				case informixParser.STATUS:
				case informixParser.SUM:
				case informixParser.TEMP:
				case informixParser.TIME:
				case informixParser.TODAY:
				case informixParser.TRUE:
				case informixParser.USER:
				case informixParser.WEEKDAY:
				case informixParser.WAIT:
				case informixParser.WORK:
				case informixParser.YEAR:
				case informixParser.PLUS:
				case informixParser.MINUS:
				case informixParser.LPAREN:
				case informixParser.IDENT:
				case informixParser.STRING_LITERAL:
				case informixParser.NUM_INT:
				case informixParser.NUM_REAL:
					{
					this.state = 1692;
					this.expression();
					this.state = 1693;
					_la = this._input.LA(1);
					if (!(_la === informixParser.LINE || _la === informixParser.LINES)) {
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
				case informixParser.TO:
					{
					this.state = 1695;
					this.match(informixParser.TO);
					this.state = 1696;
					this.match(informixParser.TOP);
					this.state = 1697;
					this.match(informixParser.OF);
					this.state = 1698;
					this.match(informixParser.PAGE);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case informixParser.OUTPUT:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1701;
				this.match(informixParser.OUTPUT);
				this.state = 1702;
				this.match(informixParser.TO);
				this.state = 1703;
				this.match(informixParser.REPORT);
				this.state = 1704;
				this.constantIdentifier();
				this.state = 1705;
				this.match(informixParser.LPAREN);
				this.state = 1714;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << informixParser.ACCEPT) | (1 << informixParser.ASCII) | (1 << informixParser.AVG))) !== 0) || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (informixParser.COLUMN - 43)) | (1 << (informixParser.COUNT - 43)) | (1 << (informixParser.CURRENT - 43)) | (1 << (informixParser.DATE - 43)) | (1 << (informixParser.DAY - 43)))) !== 0) || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & ((1 << (informixParser.EXTEND - 98)) | (1 << (informixParser.FALSE - 98)) | (1 << (informixParser.FIRST - 98)) | (1 << (informixParser.FOUND - 98)) | (1 << (informixParser.GROUP - 98)))) !== 0) || ((((_la - 130)) & ~0x1F) === 0 && ((1 << (_la - 130)) & ((1 << (informixParser.HIDE - 130)) | (1 << (informixParser.INDEX - 130)) | (1 << (informixParser.INFIELD - 130)) | (1 << (informixParser.INT_FLAG - 130)) | (1 << (informixParser.INTERRUPT - 130)) | (1 << (informixParser.LAST - 130)) | (1 << (informixParser.LENGTH - 130)))) !== 0) || ((((_la - 162)) & ~0x1F) === 0 && ((1 << (_la - 162)) & ((1 << (informixParser.LINENO - 162)) | (1 << (informixParser.MAX - 162)) | (1 << (informixParser.MDY - 162)) | (1 << (informixParser.MIN - 162)) | (1 << (informixParser.MONTH - 162)) | (1 << (informixParser.NO - 162)) | (1 << (informixParser.NOT - 162)) | (1 << (informixParser.NOTFOUND - 162)))) !== 0) || ((((_la - 195)) & ~0x1F) === 0 && ((1 << (_la - 195)) & ((1 << (informixParser.NULL - 195)) | (1 << (informixParser.PAGENO - 195)) | (1 << (informixParser.PREPARE - 195)) | (1 << (informixParser.REAL - 195)))) !== 0) || ((((_la - 252)) & ~0x1F) === 0 && ((1 << (_la - 252)) & ((1 << (informixParser.SIZE - 252)) | (1 << (informixParser.SQL - 252)) | (1 << (informixParser.STATUS - 252)) | (1 << (informixParser.SUM - 252)) | (1 << (informixParser.TEMP - 252)) | (1 << (informixParser.TIME - 252)) | (1 << (informixParser.TODAY - 252)) | (1 << (informixParser.TRUE - 252)))) !== 0) || ((((_la - 290)) & ~0x1F) === 0 && ((1 << (_la - 290)) & ((1 << (informixParser.USER - 290)) | (1 << (informixParser.WEEKDAY - 290)) | (1 << (informixParser.WAIT - 290)) | (1 << (informixParser.WORK - 290)) | (1 << (informixParser.YEAR - 290)) | (1 << (informixParser.PLUS - 290)) | (1 << (informixParser.MINUS - 290)))) !== 0) || ((((_la - 325)) & ~0x1F) === 0 && ((1 << (_la - 325)) & ((1 << (informixParser.LPAREN - 325)) | (1 << (informixParser.IDENT - 325)) | (1 << (informixParser.STRING_LITERAL - 325)) | (1 << (informixParser.NUM_INT - 325)) | (1 << (informixParser.NUM_REAL - 325)))) !== 0)) {
					{
					this.state = 1706;
					this.expression();
					this.state = 1711;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === informixParser.COMMA) {
						{
						{
						this.state = 1707;
						this.match(informixParser.COMMA);
						this.state = 1708;
						this.expression();
						}
						}
						this.state = 1713;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 1716;
				this.match(informixParser.RPAREN);
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
	public fieldName(): FieldNameContext {
		let _localctx: FieldNameContext = new FieldNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 232, informixParser.RULE_fieldName);
		let _la: number;
		try {
			this.state = 1747;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 194, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1729;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 190, this._ctx) ) {
				case 1:
					{
					{
					this.state = 1720;
					this.identifier();
					this.state = 1725;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === informixParser.LBRACK) {
						{
						this.state = 1721;
						this.match(informixParser.LBRACK);
						this.state = 1722;
						this.numericConstant();
						this.state = 1723;
						this.match(informixParser.RBRACK);
						}
					}

					}
					this.state = 1727;
					this.match(informixParser.DOT);
					}
					break;
				}
				this.state = 1731;
				this.identifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				{
				this.state = 1732;
				this.identifier();
				this.state = 1737;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === informixParser.LBRACK) {
					{
					this.state = 1733;
					this.match(informixParser.LBRACK);
					this.state = 1734;
					this.numericConstant();
					this.state = 1735;
					this.match(informixParser.RBRACK);
					}
				}

				}
				this.state = 1739;
				this.match(informixParser.DOT);
				this.state = 1745;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case informixParser.STAR:
					{
					this.state = 1740;
					this.match(informixParser.STAR);
					}
					break;
				case informixParser.IDENT:
					{
					this.state = 1741;
					this.identifier();
					this.state = 1743;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === informixParser.THROUGH || _la === informixParser.THRU) {
						{
						this.state = 1742;
						this.thruNotation();
						}
					}

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
	public thruNotation(): ThruNotationContext {
		let _localctx: ThruNotationContext = new ThruNotationContext(this._ctx, this.state);
		this.enterRule(_localctx, 234, informixParser.RULE_thruNotation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1749;
			_la = this._input.LA(1);
			if (!(_la === informixParser.THROUGH || _la === informixParser.THRU)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 1752;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === informixParser.SAME) {
				{
				this.state = 1750;
				this.match(informixParser.SAME);
				this.state = 1751;
				this.match(informixParser.DOT);
				}
			}

			this.state = 1754;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldList(): FieldListContext {
		let _localctx: FieldListContext = new FieldListContext(this._ctx, this.state);
		this.enterRule(_localctx, 236, informixParser.RULE_fieldList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1756;
			this.expression();
			this.state = 1761;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 196, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1757;
					this.match(informixParser.COMMA);
					this.state = 1758;
					this.expression();
					}
					}
				}
				this.state = 1763;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 196, this._ctx);
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
	public keyList(): KeyListContext {
		let _localctx: KeyListContext = new KeyListContext(this._ctx, this.state);
		this.enterRule(_localctx, 238, informixParser.RULE_keyList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1764;
			this.expression();
			this.state = 1769;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === informixParser.COMMA) {
				{
				{
				this.state = 1765;
				this.match(informixParser.COMMA);
				this.state = 1766;
				this.expression();
				}
				}
				this.state = 1771;
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
	public constructEvents(): ConstructEventsContext {
		let _localctx: ConstructEventsContext = new ConstructEventsContext(this._ctx, this.state);
		this.enterRule(_localctx, 240, informixParser.RULE_constructEvents);
		try {
			this.state = 1788;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 198, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1772;
				this.match(informixParser.BEFORE);
				this.state = 1773;
				this.match(informixParser.CONSTRUCT);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1774;
				this.match(informixParser.AFTER);
				this.state = 1775;
				this.match(informixParser.CONSTRUCT);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1776;
				this.match(informixParser.BEFORE);
				this.state = 1777;
				this.match(informixParser.FIELD);
				this.state = 1778;
				this.fieldList();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1779;
				this.match(informixParser.AFTER);
				this.state = 1780;
				this.match(informixParser.FIELD);
				this.state = 1781;
				this.fieldList();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1782;
				this.match(informixParser.ON);
				this.state = 1783;
				this.match(informixParser.KEY);
				this.state = 1784;
				this.match(informixParser.LPAREN);
				this.state = 1785;
				this.keyList();
				this.state = 1786;
				this.match(informixParser.RPAREN);
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
	public constructInsideStatement(): ConstructInsideStatementContext {
		let _localctx: ConstructInsideStatementContext = new ConstructInsideStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 242, informixParser.RULE_constructInsideStatement);
		try {
			this.state = 1804;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case informixParser.NEXT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1790;
				this.match(informixParser.NEXT);
				this.state = 1791;
				this.match(informixParser.FIELD);
				this.state = 1795;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case informixParser.IDENT:
					{
					this.state = 1792;
					this.fieldName();
					}
					break;
				case informixParser.NEXT:
					{
					this.state = 1793;
					this.match(informixParser.NEXT);
					}
					break;
				case informixParser.PREVIOUS:
					{
					this.state = 1794;
					this.match(informixParser.PREVIOUS);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1797;
				this.eol();
				}
				break;
			case informixParser.CONTINUE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1798;
				this.match(informixParser.CONTINUE);
				this.state = 1799;
				this.match(informixParser.CONSTRUCT);
				this.state = 1800;
				this.eol();
				}
				break;
			case informixParser.EXIT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1801;
				this.match(informixParser.EXIT);
				this.state = 1802;
				this.match(informixParser.CONSTRUCT);
				this.state = 1803;
				this.eol();
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
	public specialAttribute(): SpecialAttributeContext {
		let _localctx: SpecialAttributeContext = new SpecialAttributeContext(this._ctx, this.state);
		this.enterRule(_localctx, 244, informixParser.RULE_specialAttribute);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1806;
			_la = this._input.LA(1);
			if (!(_la === informixParser.BLINK || _la === informixParser.REVERSE || _la === informixParser.UNDERLINE)) {
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
	public attribute(): AttributeContext {
		let _localctx: AttributeContext = new AttributeContext(this._ctx, this.state);
		this.enterRule(_localctx, 246, informixParser.RULE_attribute);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1809;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << informixParser.BLACK) | (1 << informixParser.BLUE) | (1 << informixParser.BOLD))) !== 0) || _la === informixParser.CYAN || _la === informixParser.DIM || _la === informixParser.GREEN || _la === informixParser.INVISIBLE || _la === informixParser.MAGENTA || _la === informixParser.NORMAL || _la === informixParser.RED || _la === informixParser.WHITE || _la === informixParser.YELLOW) {
				{
				this.state = 1808;
				_la = this._input.LA(1);
				if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << informixParser.BLACK) | (1 << informixParser.BLUE) | (1 << informixParser.BOLD))) !== 0) || _la === informixParser.CYAN || _la === informixParser.DIM || _la === informixParser.GREEN || _la === informixParser.INVISIBLE || _la === informixParser.MAGENTA || _la === informixParser.NORMAL || _la === informixParser.RED || _la === informixParser.WHITE || _la === informixParser.YELLOW)) {
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

			this.state = 1811;
			this.specialAttribute();
			this.state = 1816;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === informixParser.COMMA) {
				{
				{
				this.state = 1812;
				this.match(informixParser.COMMA);
				this.state = 1813;
				this.specialAttribute();
				}
				}
				this.state = 1818;
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
	public attributeList(): AttributeListContext {
		let _localctx: AttributeListContext = new AttributeListContext(this._ctx, this.state);
		this.enterRule(_localctx, 248, informixParser.RULE_attributeList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1819;
			_la = this._input.LA(1);
			if (!(_la === informixParser.ATTRIBUTE || _la === informixParser.ATTRIBUTES)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 1820;
			this.match(informixParser.LPAREN);
			this.state = 1821;
			this.attribute();
			this.state = 1822;
			this.match(informixParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constructGroupStatement(): ConstructGroupStatementContext {
		let _localctx: ConstructGroupStatementContext = new ConstructGroupStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 250, informixParser.RULE_constructGroupStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1824;
			this.constructEvents();
			this.state = 1826;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1825;
				this.codeBlock();
				}
				}
				this.state = 1828;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === informixParser.ALLOCATE || _la === informixParser.BEGIN || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (informixParser.CALL - 33)) | (1 << (informixParser.CASE - 33)) | (1 << (informixParser.CLEAR - 33)) | (1 << (informixParser.CLOSE - 33)) | (1 << (informixParser.COMMIT - 33)) | (1 << (informixParser.CONSTRUCT - 33)) | (1 << (informixParser.CONTINUE - 33)) | (1 << (informixParser.CREATE - 33)) | (1 << (informixParser.CURRENT - 33)) | (1 << (informixParser.DATABASE - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (informixParser.DEALLOCATE - 65)) | (1 << (informixParser.DECLARE - 65)) | (1 << (informixParser.DELETE - 65)) | (1 << (informixParser.DISPLAY - 65)) | (1 << (informixParser.DROP - 65)) | (1 << (informixParser.ERROR - 65)) | (1 << (informixParser.EXECUTE - 65)) | (1 << (informixParser.EXIT - 65)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (informixParser.FETCH - 102)) | (1 << (informixParser.FINISH - 102)) | (1 << (informixParser.FLUSH - 102)) | (1 << (informixParser.FOR - 102)) | (1 << (informixParser.FOREACH - 102)) | (1 << (informixParser.FREE - 102)) | (1 << (informixParser.GOTO - 102)) | (1 << (informixParser.HIDE - 102)) | (1 << (informixParser.IF - 102)))) !== 0) || ((((_la - 139)) & ~0x1F) === 0 && ((1 << (_la - 139)) & ((1 << (informixParser.INITIALIZE - 139)) | (1 << (informixParser.INPUT - 139)) | (1 << (informixParser.INSERT - 139)) | (1 << (informixParser.LET - 139)) | (1 << (informixParser.LOAD - 139)) | (1 << (informixParser.LOCATE - 139)) | (1 << (informixParser.LOCK - 139)))) !== 0) || ((((_la - 171)) & ~0x1F) === 0 && ((1 << (_la - 171)) & ((1 << (informixParser.MENU - 171)) | (1 << (informixParser.MESSAGE - 171)) | (1 << (informixParser.NEED - 171)) | (1 << (informixParser.NEXT - 171)) | (1 << (informixParser.OPEN - 171)))) !== 0) || ((((_la - 203)) & ~0x1F) === 0 && ((1 << (_la - 203)) & ((1 << (informixParser.OPTIONS - 203)) | (1 << (informixParser.OUTPUT - 203)) | (1 << (informixParser.PAUSE - 203)) | (1 << (informixParser.PREPARE - 203)) | (1 << (informixParser.PRINT - 203)) | (1 << (informixParser.PROMPT - 203)) | (1 << (informixParser.PUT - 203)))) !== 0) || ((((_la - 235)) & ~0x1F) === 0 && ((1 << (_la - 235)) & ((1 << (informixParser.RESIZE - 235)) | (1 << (informixParser.RETURN - 235)) | (1 << (informixParser.ROLLBACK - 235)) | (1 << (informixParser.RUN - 235)) | (1 << (informixParser.SCROLL - 235)) | (1 << (informixParser.SKIP2 - 235)) | (1 << (informixParser.SELECT - 235)) | (1 << (informixParser.SET - 235)) | (1 << (informixParser.SHOW - 235)) | (1 << (informixParser.SLEEP - 235)) | (1 << (informixParser.START - 235)))) !== 0) || ((((_la - 269)) & ~0x1F) === 0 && ((1 << (_la - 269)) & ((1 << (informixParser.TERMINATE - 269)) | (1 << (informixParser.UNLOAD - 269)) | (1 << (informixParser.UPDATE - 269)) | (1 << (informixParser.VALIDATE - 269)))) !== 0) || ((((_la - 301)) & ~0x1F) === 0 && ((1 << (_la - 301)) & ((1 << (informixParser.WHENEVER - 301)) | (1 << (informixParser.WHILE - 301)) | (1 << (informixParser.IDENT - 301)))) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constructStatement(): ConstructStatementContext {
		let _localctx: ConstructStatementContext = new ConstructStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 252, informixParser.RULE_constructStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1830;
			this.match(informixParser.CONSTRUCT);
			this.state = 1843;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case informixParser.BY:
				{
				this.state = 1831;
				this.match(informixParser.BY);
				this.state = 1832;
				this.match(informixParser.NAME);
				this.state = 1833;
				this.variable();
				this.state = 1834;
				this.match(informixParser.ON);
				this.state = 1835;
				this.columnsList();
				}
				break;
			case informixParser.ACCEPT:
			case informixParser.ASCII:
			case informixParser.COUNT:
			case informixParser.CURRENT:
			case informixParser.FALSE:
			case informixParser.FIRST:
			case informixParser.FOUND:
			case informixParser.GROUP:
			case informixParser.HIDE:
			case informixParser.INDEX:
			case informixParser.INT_FLAG:
			case informixParser.INTERRUPT:
			case informixParser.LAST:
			case informixParser.LENGTH:
			case informixParser.LINENO:
			case informixParser.MDY:
			case informixParser.NO:
			case informixParser.NOT:
			case informixParser.NOTFOUND:
			case informixParser.NULL:
			case informixParser.PAGENO:
			case informixParser.REAL:
			case informixParser.SIZE:
			case informixParser.SQL:
			case informixParser.STATUS:
			case informixParser.TEMP:
			case informixParser.TIME:
			case informixParser.TODAY:
			case informixParser.TRUE:
			case informixParser.USER:
			case informixParser.WEEKDAY:
			case informixParser.WAIT:
			case informixParser.WORK:
			case informixParser.IDENT:
				{
				this.state = 1837;
				this.variable();
				this.state = 1838;
				this.match(informixParser.ON);
				this.state = 1839;
				this.columnsList();
				this.state = 1840;
				this.match(informixParser.FROM);
				this.state = 1841;
				this.fieldList();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1846;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === informixParser.ATTRIBUTE || _la === informixParser.ATTRIBUTES) {
				{
				this.state = 1845;
				this.attributeList();
				}
			}

			this.state = 1850;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === informixParser.HELP) {
				{
				this.state = 1848;
				this.match(informixParser.HELP);
				this.state = 1849;
				this.numericConstant();
				}
			}

			this.state = 1860;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 208, this._ctx) ) {
			case 1:
				{
				this.state = 1853;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1852;
					this.constructGroupStatement();
					}
					}
					this.state = 1855;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === informixParser.AFTER || _la === informixParser.BEFORE || _la === informixParser.ON);
				this.state = 1857;
				this.match(informixParser.END);
				this.state = 1858;
				this.match(informixParser.CONSTRUCT);
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
	public displayArrayStatement(): DisplayArrayStatementContext {
		let _localctx: DisplayArrayStatementContext = new DisplayArrayStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 254, informixParser.RULE_displayArrayStatement);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1862;
			this.match(informixParser.DISPLAY);
			this.state = 1863;
			this.match(informixParser.ARRAY);
			this.state = 1864;
			this.expression();
			this.state = 1865;
			this.match(informixParser.TO);
			this.state = 1866;
			this.expression();
			this.state = 1868;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === informixParser.ATTRIBUTE || _la === informixParser.ATTRIBUTES) {
				{
				this.state = 1867;
				this.attributeList();
				}
			}

			this.state = 1873;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 210, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1870;
					this.displayEvents();
					}
					}
				}
				this.state = 1875;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 210, this._ctx);
			}
			this.state = 1878;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 211, this._ctx) ) {
			case 1:
				{
				this.state = 1876;
				this.match(informixParser.END);
				this.state = 1877;
				this.match(informixParser.DISPLAY);
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
	public displayInsideStatement(): DisplayInsideStatementContext {
		let _localctx: DisplayInsideStatementContext = new DisplayInsideStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 256, informixParser.RULE_displayInsideStatement);
		try {
			this.state = 1884;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case informixParser.CONTINUE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1880;
				this.match(informixParser.CONTINUE);
				this.state = 1881;
				this.match(informixParser.DISPLAY);
				}
				break;
			case informixParser.EXIT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1882;
				this.match(informixParser.EXIT);
				this.state = 1883;
				this.match(informixParser.DISPLAY);
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
	public displayEvents(): DisplayEventsContext {
		let _localctx: DisplayEventsContext = new DisplayEventsContext(this._ctx, this.state);
		this.enterRule(_localctx, 258, informixParser.RULE_displayEvents);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1886;
			this.match(informixParser.ON);
			this.state = 1887;
			this.match(informixParser.KEY);
			this.state = 1888;
			this.match(informixParser.LPAREN);
			this.state = 1889;
			this.keyList();
			this.state = 1890;
			this.match(informixParser.RPAREN);
			this.state = 1892;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1891;
					this.codeBlock();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1894;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 213, this._ctx);
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
	public displayStatement(): DisplayStatementContext {
		let _localctx: DisplayStatementContext = new DisplayStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 260, informixParser.RULE_displayStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1896;
			this.match(informixParser.DISPLAY);
			this.state = 1924;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case informixParser.BY:
				{
				this.state = 1897;
				this.match(informixParser.BY);
				this.state = 1898;
				this.match(informixParser.NAME);
				{
				this.state = 1899;
				this.expression();
				this.state = 1904;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === informixParser.COMMA) {
					{
					{
					this.state = 1900;
					this.match(informixParser.COMMA);
					this.state = 1901;
					this.expression();
					}
					}
					this.state = 1906;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				}
				break;
			case informixParser.ACCEPT:
			case informixParser.ASCII:
			case informixParser.AVG:
			case informixParser.COLUMN:
			case informixParser.COUNT:
			case informixParser.CURRENT:
			case informixParser.DATE:
			case informixParser.DAY:
			case informixParser.EXTEND:
			case informixParser.FALSE:
			case informixParser.FIRST:
			case informixParser.FOUND:
			case informixParser.GROUP:
			case informixParser.HIDE:
			case informixParser.INDEX:
			case informixParser.INFIELD:
			case informixParser.INT_FLAG:
			case informixParser.INTERRUPT:
			case informixParser.LAST:
			case informixParser.LENGTH:
			case informixParser.LINENO:
			case informixParser.MAX:
			case informixParser.MDY:
			case informixParser.MIN:
			case informixParser.MONTH:
			case informixParser.NO:
			case informixParser.NOT:
			case informixParser.NOTFOUND:
			case informixParser.NULL:
			case informixParser.PAGENO:
			case informixParser.PREPARE:
			case informixParser.REAL:
			case informixParser.SIZE:
			case informixParser.SQL:
			case informixParser.STATUS:
			case informixParser.SUM:
			case informixParser.TEMP:
			case informixParser.TIME:
			case informixParser.TODAY:
			case informixParser.TRUE:
			case informixParser.USER:
			case informixParser.WEEKDAY:
			case informixParser.WAIT:
			case informixParser.WORK:
			case informixParser.YEAR:
			case informixParser.PLUS:
			case informixParser.MINUS:
			case informixParser.LPAREN:
			case informixParser.IDENT:
			case informixParser.STRING_LITERAL:
			case informixParser.NUM_INT:
			case informixParser.NUM_REAL:
				{
				{
				this.state = 1907;
				this.expression();
				this.state = 1912;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === informixParser.COMMA) {
					{
					{
					this.state = 1908;
					this.match(informixParser.COMMA);
					this.state = 1909;
					this.expression();
					}
					}
					this.state = 1914;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				this.state = 1922;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case informixParser.TO:
					{
					this.state = 1915;
					this.match(informixParser.TO);
					this.state = 1916;
					this.fieldList();
					}
					break;
				case informixParser.AT:
					{
					this.state = 1917;
					this.match(informixParser.AT);
					this.state = 1918;
					this.expression();
					this.state = 1919;
					this.match(informixParser.COMMA);
					this.state = 1920;
					this.expression();
					}
					break;
				case informixParser.ATTRIBUTE:
				case informixParser.ATTRIBUTES:
				case informixParser.EOL:
					break;
				default:
					break;
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1927;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === informixParser.ATTRIBUTE || _la === informixParser.ATTRIBUTES) {
				{
				this.state = 1926;
				this.attributeList();
				}
			}

			this.state = 1929;
			this.eol();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public errorStatement(): ErrorStatementContext {
		let _localctx: ErrorStatementContext = new ErrorStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 262, informixParser.RULE_errorStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1931;
			this.match(informixParser.ERROR);
			this.state = 1932;
			this.expression();
			this.state = 1937;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === informixParser.COMMA) {
				{
				{
				this.state = 1933;
				this.match(informixParser.COMMA);
				this.state = 1934;
				this.expression();
				}
				}
				this.state = 1939;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1941;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === informixParser.ATTRIBUTE || _la === informixParser.ATTRIBUTES) {
				{
				this.state = 1940;
				this.attributeList();
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
	public messageStatement(): MessageStatementContext {
		let _localctx: MessageStatementContext = new MessageStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 264, informixParser.RULE_messageStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1943;
			this.match(informixParser.MESSAGE);
			this.state = 1944;
			this.expression();
			this.state = 1949;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === informixParser.COMMA) {
				{
				{
				this.state = 1945;
				this.match(informixParser.COMMA);
				this.state = 1946;
				this.expression();
				}
				}
				this.state = 1951;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1953;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === informixParser.ATTRIBUTE || _la === informixParser.ATTRIBUTES) {
				{
				this.state = 1952;
				this.attributeList();
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
	public promptStatement(): PromptStatementContext {
		let _localctx: PromptStatementContext = new PromptStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 266, informixParser.RULE_promptStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1955;
			this.match(informixParser.PROMPT);
			this.state = 1956;
			this.expression();
			this.state = 1961;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === informixParser.COMMA) {
				{
				{
				this.state = 1957;
				this.match(informixParser.COMMA);
				this.state = 1958;
				this.expression();
				}
				}
				this.state = 1963;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1965;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === informixParser.ATTRIBUTE || _la === informixParser.ATTRIBUTES) {
				{
				this.state = 1964;
				this.attributeList();
				}
			}

			this.state = 1967;
			this.match(informixParser.FOR);
			this.state = 1969;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === informixParser.CHAR) {
				{
				this.state = 1968;
				this.match(informixParser.CHAR);
				}
			}

			this.state = 1971;
			this.variable();
			this.state = 1974;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === informixParser.HELP) {
				{
				this.state = 1972;
				this.match(informixParser.HELP);
				this.state = 1973;
				this.numericConstant();
				}
			}

			this.state = 1977;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === informixParser.ATTRIBUTE || _la === informixParser.ATTRIBUTES) {
				{
				this.state = 1976;
				this.attributeList();
				}
			}

			this.state = 1994;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 230, this._ctx) ) {
			case 1:
				{
				this.state = 1989;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === informixParser.ON) {
					{
					{
					this.state = 1979;
					this.match(informixParser.ON);
					this.state = 1980;
					this.match(informixParser.KEY);
					this.state = 1981;
					this.match(informixParser.LPAREN);
					this.state = 1982;
					this.keyList();
					this.state = 1983;
					this.match(informixParser.RPAREN);
					this.state = 1985;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === informixParser.ALLOCATE || _la === informixParser.BEGIN || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (informixParser.CALL - 33)) | (1 << (informixParser.CASE - 33)) | (1 << (informixParser.CLEAR - 33)) | (1 << (informixParser.CLOSE - 33)) | (1 << (informixParser.COMMIT - 33)) | (1 << (informixParser.CONSTRUCT - 33)) | (1 << (informixParser.CONTINUE - 33)) | (1 << (informixParser.CREATE - 33)) | (1 << (informixParser.CURRENT - 33)) | (1 << (informixParser.DATABASE - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (informixParser.DEALLOCATE - 65)) | (1 << (informixParser.DECLARE - 65)) | (1 << (informixParser.DELETE - 65)) | (1 << (informixParser.DISPLAY - 65)) | (1 << (informixParser.DROP - 65)) | (1 << (informixParser.ERROR - 65)) | (1 << (informixParser.EXECUTE - 65)) | (1 << (informixParser.EXIT - 65)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (informixParser.FETCH - 102)) | (1 << (informixParser.FINISH - 102)) | (1 << (informixParser.FLUSH - 102)) | (1 << (informixParser.FOR - 102)) | (1 << (informixParser.FOREACH - 102)) | (1 << (informixParser.FREE - 102)) | (1 << (informixParser.GOTO - 102)) | (1 << (informixParser.HIDE - 102)) | (1 << (informixParser.IF - 102)))) !== 0) || ((((_la - 139)) & ~0x1F) === 0 && ((1 << (_la - 139)) & ((1 << (informixParser.INITIALIZE - 139)) | (1 << (informixParser.INPUT - 139)) | (1 << (informixParser.INSERT - 139)) | (1 << (informixParser.LET - 139)) | (1 << (informixParser.LOAD - 139)) | (1 << (informixParser.LOCATE - 139)) | (1 << (informixParser.LOCK - 139)))) !== 0) || ((((_la - 171)) & ~0x1F) === 0 && ((1 << (_la - 171)) & ((1 << (informixParser.MENU - 171)) | (1 << (informixParser.MESSAGE - 171)) | (1 << (informixParser.NEED - 171)) | (1 << (informixParser.NEXT - 171)) | (1 << (informixParser.OPEN - 171)))) !== 0) || ((((_la - 203)) & ~0x1F) === 0 && ((1 << (_la - 203)) & ((1 << (informixParser.OPTIONS - 203)) | (1 << (informixParser.OUTPUT - 203)) | (1 << (informixParser.PAUSE - 203)) | (1 << (informixParser.PREPARE - 203)) | (1 << (informixParser.PRINT - 203)) | (1 << (informixParser.PROMPT - 203)) | (1 << (informixParser.PUT - 203)))) !== 0) || ((((_la - 235)) & ~0x1F) === 0 && ((1 << (_la - 235)) & ((1 << (informixParser.RESIZE - 235)) | (1 << (informixParser.RETURN - 235)) | (1 << (informixParser.ROLLBACK - 235)) | (1 << (informixParser.RUN - 235)) | (1 << (informixParser.SCROLL - 235)) | (1 << (informixParser.SKIP2 - 235)) | (1 << (informixParser.SELECT - 235)) | (1 << (informixParser.SET - 235)) | (1 << (informixParser.SHOW - 235)) | (1 << (informixParser.SLEEP - 235)) | (1 << (informixParser.START - 235)))) !== 0) || ((((_la - 269)) & ~0x1F) === 0 && ((1 << (_la - 269)) & ((1 << (informixParser.TERMINATE - 269)) | (1 << (informixParser.UNLOAD - 269)) | (1 << (informixParser.UPDATE - 269)) | (1 << (informixParser.VALIDATE - 269)))) !== 0) || ((((_la - 301)) & ~0x1F) === 0 && ((1 << (_la - 301)) & ((1 << (informixParser.WHENEVER - 301)) | (1 << (informixParser.WHILE - 301)) | (1 << (informixParser.IDENT - 301)))) !== 0)) {
						{
						this.state = 1984;
						this.codeBlock();
						}
					}

					}
					}
					this.state = 1991;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1992;
				this.match(informixParser.END);
				this.state = 1993;
				this.match(informixParser.PROMPT);
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
	public inputEvents(): InputEventsContext {
		let _localctx: InputEventsContext = new InputEventsContext(this._ctx, this.state);
		this.enterRule(_localctx, 268, informixParser.RULE_inputEvents);
		let _la: number;
		try {
			this.state = 2010;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 231, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1996;
				_la = this._input.LA(1);
				if (!(_la === informixParser.AFTER || _la === informixParser.BEFORE)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1997;
				_la = this._input.LA(1);
				if (!(_la === informixParser.DELETE || _la === informixParser.INPUT || _la === informixParser.INSERT || _la === informixParser.ROW)) {
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

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1998;
				this.match(informixParser.BEFORE);
				this.state = 1999;
				this.match(informixParser.FIELD);
				this.state = 2000;
				this.fieldList();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2001;
				this.match(informixParser.AFTER);
				this.state = 2002;
				this.match(informixParser.FIELD);
				this.state = 2003;
				this.fieldList();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2004;
				this.match(informixParser.ON);
				this.state = 2005;
				this.match(informixParser.KEY);
				this.state = 2006;
				this.match(informixParser.LPAREN);
				this.state = 2007;
				this.keyList();
				this.state = 2008;
				this.match(informixParser.RPAREN);
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
	public inputInsideStatement(): InputInsideStatementContext {
		let _localctx: InputInsideStatementContext = new InputInsideStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 270, informixParser.RULE_inputInsideStatement);
		let _la: number;
		try {
			this.state = 2024;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case informixParser.NEXT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2012;
				this.match(informixParser.NEXT);
				this.state = 2013;
				this.match(informixParser.FIELD);
				this.state = 2016;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case informixParser.IDENT:
					{
					this.state = 2014;
					this.fieldName();
					}
					break;
				case informixParser.NEXT:
				case informixParser.PREVIOUS:
					{
					this.state = 2015;
					_la = this._input.LA(1);
					if (!(_la === informixParser.NEXT || _la === informixParser.PREVIOUS)) {
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
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case informixParser.CONTINUE:
			case informixParser.EXIT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2022;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case informixParser.CONTINUE:
					{
					this.state = 2018;
					this.match(informixParser.CONTINUE);
					this.state = 2019;
					this.match(informixParser.INPUT);
					}
					break;
				case informixParser.EXIT:
					{
					this.state = 2020;
					this.match(informixParser.EXIT);
					this.state = 2021;
					this.match(informixParser.INPUT);
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
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public inputGroupStatement(): InputGroupStatementContext {
		let _localctx: InputGroupStatementContext = new InputGroupStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 272, informixParser.RULE_inputGroupStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2026;
			this.inputEvents();
			this.state = 2030;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === informixParser.ALLOCATE || _la === informixParser.BEGIN || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (informixParser.CALL - 33)) | (1 << (informixParser.CASE - 33)) | (1 << (informixParser.CLEAR - 33)) | (1 << (informixParser.CLOSE - 33)) | (1 << (informixParser.COMMIT - 33)) | (1 << (informixParser.CONSTRUCT - 33)) | (1 << (informixParser.CONTINUE - 33)) | (1 << (informixParser.CREATE - 33)) | (1 << (informixParser.CURRENT - 33)) | (1 << (informixParser.DATABASE - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (informixParser.DEALLOCATE - 65)) | (1 << (informixParser.DECLARE - 65)) | (1 << (informixParser.DELETE - 65)) | (1 << (informixParser.DISPLAY - 65)) | (1 << (informixParser.DROP - 65)) | (1 << (informixParser.ERROR - 65)) | (1 << (informixParser.EXECUTE - 65)) | (1 << (informixParser.EXIT - 65)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (informixParser.FETCH - 102)) | (1 << (informixParser.FINISH - 102)) | (1 << (informixParser.FLUSH - 102)) | (1 << (informixParser.FOR - 102)) | (1 << (informixParser.FOREACH - 102)) | (1 << (informixParser.FREE - 102)) | (1 << (informixParser.GOTO - 102)) | (1 << (informixParser.HIDE - 102)) | (1 << (informixParser.IF - 102)))) !== 0) || ((((_la - 139)) & ~0x1F) === 0 && ((1 << (_la - 139)) & ((1 << (informixParser.INITIALIZE - 139)) | (1 << (informixParser.INPUT - 139)) | (1 << (informixParser.INSERT - 139)) | (1 << (informixParser.LET - 139)) | (1 << (informixParser.LOAD - 139)) | (1 << (informixParser.LOCATE - 139)) | (1 << (informixParser.LOCK - 139)))) !== 0) || ((((_la - 171)) & ~0x1F) === 0 && ((1 << (_la - 171)) & ((1 << (informixParser.MENU - 171)) | (1 << (informixParser.MESSAGE - 171)) | (1 << (informixParser.NEED - 171)) | (1 << (informixParser.NEXT - 171)) | (1 << (informixParser.OPEN - 171)))) !== 0) || ((((_la - 203)) & ~0x1F) === 0 && ((1 << (_la - 203)) & ((1 << (informixParser.OPTIONS - 203)) | (1 << (informixParser.OUTPUT - 203)) | (1 << (informixParser.PAUSE - 203)) | (1 << (informixParser.PREPARE - 203)) | (1 << (informixParser.PRINT - 203)) | (1 << (informixParser.PROMPT - 203)) | (1 << (informixParser.PUT - 203)))) !== 0) || ((((_la - 235)) & ~0x1F) === 0 && ((1 << (_la - 235)) & ((1 << (informixParser.RESIZE - 235)) | (1 << (informixParser.RETURN - 235)) | (1 << (informixParser.ROLLBACK - 235)) | (1 << (informixParser.RUN - 235)) | (1 << (informixParser.SCROLL - 235)) | (1 << (informixParser.SKIP2 - 235)) | (1 << (informixParser.SELECT - 235)) | (1 << (informixParser.SET - 235)) | (1 << (informixParser.SHOW - 235)) | (1 << (informixParser.SLEEP - 235)) | (1 << (informixParser.START - 235)))) !== 0) || ((((_la - 269)) & ~0x1F) === 0 && ((1 << (_la - 269)) & ((1 << (informixParser.TERMINATE - 269)) | (1 << (informixParser.UNLOAD - 269)) | (1 << (informixParser.UPDATE - 269)) | (1 << (informixParser.VALIDATE - 269)))) !== 0) || ((((_la - 301)) & ~0x1F) === 0 && ((1 << (_la - 301)) & ((1 << (informixParser.WHENEVER - 301)) | (1 << (informixParser.WHILE - 301)) | (1 << (informixParser.IDENT - 301)))) !== 0)) {
				{
				{
				this.state = 2027;
				this.codeBlock();
				}
				}
				this.state = 2032;
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
	public inputStatement(): InputStatementContext {
		let _localctx: InputStatementContext = new InputStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 274, informixParser.RULE_inputStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2033;
			this.match(informixParser.INPUT);
			this.state = 2063;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case informixParser.BY:
				{
				this.state = 2034;
				this.match(informixParser.BY);
				this.state = 2035;
				this.match(informixParser.NAME);
				this.state = 2036;
				this.expression();
				this.state = 2041;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === informixParser.COMMA) {
					{
					{
					this.state = 2037;
					this.match(informixParser.COMMA);
					this.state = 2038;
					this.expression();
					}
					}
					this.state = 2043;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2046;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === informixParser.WITHOUT) {
					{
					this.state = 2044;
					this.match(informixParser.WITHOUT);
					this.state = 2045;
					this.match(informixParser.DEFAULTS);
					}
				}

				}
				break;
			case informixParser.ACCEPT:
			case informixParser.ASCII:
			case informixParser.AVG:
			case informixParser.COLUMN:
			case informixParser.COUNT:
			case informixParser.CURRENT:
			case informixParser.DATE:
			case informixParser.DAY:
			case informixParser.EXTEND:
			case informixParser.FALSE:
			case informixParser.FIRST:
			case informixParser.FOUND:
			case informixParser.GROUP:
			case informixParser.HIDE:
			case informixParser.INDEX:
			case informixParser.INFIELD:
			case informixParser.INT_FLAG:
			case informixParser.INTERRUPT:
			case informixParser.LAST:
			case informixParser.LENGTH:
			case informixParser.LINENO:
			case informixParser.MAX:
			case informixParser.MDY:
			case informixParser.MIN:
			case informixParser.MONTH:
			case informixParser.NO:
			case informixParser.NOT:
			case informixParser.NOTFOUND:
			case informixParser.NULL:
			case informixParser.PAGENO:
			case informixParser.PREPARE:
			case informixParser.REAL:
			case informixParser.SIZE:
			case informixParser.SQL:
			case informixParser.STATUS:
			case informixParser.SUM:
			case informixParser.TEMP:
			case informixParser.TIME:
			case informixParser.TODAY:
			case informixParser.TRUE:
			case informixParser.USER:
			case informixParser.WEEKDAY:
			case informixParser.WAIT:
			case informixParser.WORK:
			case informixParser.YEAR:
			case informixParser.PLUS:
			case informixParser.MINUS:
			case informixParser.LPAREN:
			case informixParser.IDENT:
			case informixParser.STRING_LITERAL:
			case informixParser.NUM_INT:
			case informixParser.NUM_REAL:
				{
				this.state = 2048;
				this.expression();
				this.state = 2053;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === informixParser.COMMA) {
					{
					{
					this.state = 2049;
					this.match(informixParser.COMMA);
					this.state = 2050;
					this.expression();
					}
					}
					this.state = 2055;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2058;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === informixParser.WITHOUT) {
					{
					this.state = 2056;
					this.match(informixParser.WITHOUT);
					this.state = 2057;
					this.match(informixParser.DEFAULTS);
					}
				}

				this.state = 2060;
				this.match(informixParser.FROM);
				this.state = 2061;
				this.fieldList();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 2066;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === informixParser.ATTRIBUTE || _la === informixParser.ATTRIBUTES) {
				{
				this.state = 2065;
				this.attributeList();
				}
			}

			this.state = 2070;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === informixParser.HELP) {
				{
				this.state = 2068;
				this.match(informixParser.HELP);
				this.state = 2069;
				this.numericConstant();
				}
			}

			this.state = 2080;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 244, this._ctx) ) {
			case 1:
				{
				this.state = 2073;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 2072;
					this.inputGroupStatement();
					}
					}
					this.state = 2075;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === informixParser.AFTER || _la === informixParser.BEFORE || _la === informixParser.ON);
				this.state = 2077;
				this.match(informixParser.END);
				this.state = 2078;
				this.match(informixParser.INPUT);
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
	public inputArrayStatement(): InputArrayStatementContext {
		let _localctx: InputArrayStatementContext = new InputArrayStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 276, informixParser.RULE_inputArrayStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2082;
			this.match(informixParser.INPUT);
			this.state = 2083;
			this.match(informixParser.ARRAY);
			this.state = 2084;
			this.expression();
			this.state = 2087;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === informixParser.WITHOUT) {
				{
				this.state = 2085;
				this.match(informixParser.WITHOUT);
				this.state = 2086;
				this.match(informixParser.DEFAULTS);
				}
			}

			this.state = 2089;
			this.match(informixParser.FROM);
			this.state = 2090;
			this.expression();
			this.state = 2095;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === informixParser.COMMA) {
				{
				{
				this.state = 2091;
				this.match(informixParser.COMMA);
				this.state = 2092;
				this.expression();
				}
				}
				this.state = 2097;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2100;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === informixParser.HELP) {
				{
				this.state = 2098;
				this.match(informixParser.HELP);
				this.state = 2099;
				this.numericConstant();
				}
			}

			this.state = 2103;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === informixParser.ATTRIBUTE || _la === informixParser.ATTRIBUTES) {
				{
				this.state = 2102;
				this.attributeList();
				}
			}

			this.state = 2113;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 250, this._ctx) ) {
			case 1:
				{
				this.state = 2106;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 2105;
					this.inputGroupStatement();
					}
					}
					this.state = 2108;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === informixParser.AFTER || _la === informixParser.BEFORE || _la === informixParser.ON);
				this.state = 2110;
				this.match(informixParser.END);
				this.state = 2111;
				this.match(informixParser.INPUT);
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
	public menuEvents(): MenuEventsContext {
		let _localctx: MenuEventsContext = new MenuEventsContext(this._ctx, this.state);
		this.enterRule(_localctx, 278, informixParser.RULE_menuEvents);
		let _la: number;
		try {
			this.state = 2133;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case informixParser.BEFORE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2115;
				this.match(informixParser.BEFORE);
				this.state = 2116;
				this.match(informixParser.MENU);
				}
				break;
			case informixParser.COMMAND:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2117;
				this.match(informixParser.COMMAND);
				{
				this.state = 2123;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === informixParser.KEY) {
					{
					this.state = 2118;
					this.match(informixParser.KEY);
					this.state = 2119;
					this.match(informixParser.LPAREN);
					this.state = 2120;
					this.keyList();
					this.state = 2121;
					this.match(informixParser.RPAREN);
					}
				}

				this.state = 2125;
				this.expression();
				this.state = 2127;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 252, this._ctx) ) {
				case 1:
					{
					this.state = 2126;
					this.expression();
					}
					break;
				}
				this.state = 2131;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === informixParser.HELP) {
					{
					this.state = 2129;
					this.match(informixParser.HELP);
					this.state = 2130;
					this.numericConstant();
					}
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
	public menuInsideStatement(): MenuInsideStatementContext {
		let _localctx: MenuInsideStatementContext = new MenuInsideStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 280, informixParser.RULE_menuInsideStatement);
		let _la: number;
		try {
			this.state = 2178;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case informixParser.NEXT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2135;
				this.match(informixParser.NEXT);
				this.state = 2136;
				this.match(informixParser.OPTION);
				this.state = 2139;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case informixParser.ACCEPT:
				case informixParser.ASCII:
				case informixParser.AVG:
				case informixParser.COLUMN:
				case informixParser.COUNT:
				case informixParser.CURRENT:
				case informixParser.DATE:
				case informixParser.DAY:
				case informixParser.EXTEND:
				case informixParser.FALSE:
				case informixParser.FIRST:
				case informixParser.FOUND:
				case informixParser.GROUP:
				case informixParser.HIDE:
				case informixParser.INDEX:
				case informixParser.INFIELD:
				case informixParser.INT_FLAG:
				case informixParser.INTERRUPT:
				case informixParser.LAST:
				case informixParser.LENGTH:
				case informixParser.LINENO:
				case informixParser.MAX:
				case informixParser.MDY:
				case informixParser.MIN:
				case informixParser.MONTH:
				case informixParser.NO:
				case informixParser.NOT:
				case informixParser.NOTFOUND:
				case informixParser.NULL:
				case informixParser.PAGENO:
				case informixParser.PREPARE:
				case informixParser.REAL:
				case informixParser.SIZE:
				case informixParser.SQL:
				case informixParser.STATUS:
				case informixParser.SUM:
				case informixParser.TEMP:
				case informixParser.TIME:
				case informixParser.TODAY:
				case informixParser.TRUE:
				case informixParser.USER:
				case informixParser.WEEKDAY:
				case informixParser.WAIT:
				case informixParser.WORK:
				case informixParser.YEAR:
				case informixParser.PLUS:
				case informixParser.MINUS:
				case informixParser.LPAREN:
				case informixParser.IDENT:
				case informixParser.STRING_LITERAL:
				case informixParser.NUM_INT:
				case informixParser.NUM_REAL:
					{
					this.state = 2137;
					this.expression();
					}
					break;
				case informixParser.ALL:
					{
					this.state = 2138;
					this.match(informixParser.ALL);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2145;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === informixParser.COMMA) {
					{
					{
					this.state = 2141;
					this.match(informixParser.COMMA);
					this.state = 2142;
					this.expression();
					}
					}
					this.state = 2147;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case informixParser.SHOW:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2148;
				this.match(informixParser.SHOW);
				this.state = 2149;
				this.match(informixParser.OPTION);
				this.state = 2152;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case informixParser.ACCEPT:
				case informixParser.ASCII:
				case informixParser.AVG:
				case informixParser.COLUMN:
				case informixParser.COUNT:
				case informixParser.CURRENT:
				case informixParser.DATE:
				case informixParser.DAY:
				case informixParser.EXTEND:
				case informixParser.FALSE:
				case informixParser.FIRST:
				case informixParser.FOUND:
				case informixParser.GROUP:
				case informixParser.HIDE:
				case informixParser.INDEX:
				case informixParser.INFIELD:
				case informixParser.INT_FLAG:
				case informixParser.INTERRUPT:
				case informixParser.LAST:
				case informixParser.LENGTH:
				case informixParser.LINENO:
				case informixParser.MAX:
				case informixParser.MDY:
				case informixParser.MIN:
				case informixParser.MONTH:
				case informixParser.NO:
				case informixParser.NOT:
				case informixParser.NOTFOUND:
				case informixParser.NULL:
				case informixParser.PAGENO:
				case informixParser.PREPARE:
				case informixParser.REAL:
				case informixParser.SIZE:
				case informixParser.SQL:
				case informixParser.STATUS:
				case informixParser.SUM:
				case informixParser.TEMP:
				case informixParser.TIME:
				case informixParser.TODAY:
				case informixParser.TRUE:
				case informixParser.USER:
				case informixParser.WEEKDAY:
				case informixParser.WAIT:
				case informixParser.WORK:
				case informixParser.YEAR:
				case informixParser.PLUS:
				case informixParser.MINUS:
				case informixParser.LPAREN:
				case informixParser.IDENT:
				case informixParser.STRING_LITERAL:
				case informixParser.NUM_INT:
				case informixParser.NUM_REAL:
					{
					this.state = 2150;
					this.expression();
					}
					break;
				case informixParser.ALL:
					{
					this.state = 2151;
					this.match(informixParser.ALL);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2158;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === informixParser.COMMA) {
					{
					{
					this.state = 2154;
					this.match(informixParser.COMMA);
					this.state = 2155;
					this.expression();
					}
					}
					this.state = 2160;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case informixParser.HIDE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2161;
				this.match(informixParser.HIDE);
				this.state = 2162;
				this.match(informixParser.OPTION);
				this.state = 2165;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case informixParser.ACCEPT:
				case informixParser.ASCII:
				case informixParser.AVG:
				case informixParser.COLUMN:
				case informixParser.COUNT:
				case informixParser.CURRENT:
				case informixParser.DATE:
				case informixParser.DAY:
				case informixParser.EXTEND:
				case informixParser.FALSE:
				case informixParser.FIRST:
				case informixParser.FOUND:
				case informixParser.GROUP:
				case informixParser.HIDE:
				case informixParser.INDEX:
				case informixParser.INFIELD:
				case informixParser.INT_FLAG:
				case informixParser.INTERRUPT:
				case informixParser.LAST:
				case informixParser.LENGTH:
				case informixParser.LINENO:
				case informixParser.MAX:
				case informixParser.MDY:
				case informixParser.MIN:
				case informixParser.MONTH:
				case informixParser.NO:
				case informixParser.NOT:
				case informixParser.NOTFOUND:
				case informixParser.NULL:
				case informixParser.PAGENO:
				case informixParser.PREPARE:
				case informixParser.REAL:
				case informixParser.SIZE:
				case informixParser.SQL:
				case informixParser.STATUS:
				case informixParser.SUM:
				case informixParser.TEMP:
				case informixParser.TIME:
				case informixParser.TODAY:
				case informixParser.TRUE:
				case informixParser.USER:
				case informixParser.WEEKDAY:
				case informixParser.WAIT:
				case informixParser.WORK:
				case informixParser.YEAR:
				case informixParser.PLUS:
				case informixParser.MINUS:
				case informixParser.LPAREN:
				case informixParser.IDENT:
				case informixParser.STRING_LITERAL:
				case informixParser.NUM_INT:
				case informixParser.NUM_REAL:
					{
					this.state = 2163;
					this.expression();
					}
					break;
				case informixParser.ALL:
					{
					this.state = 2164;
					this.match(informixParser.ALL);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2171;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === informixParser.COMMA) {
					{
					{
					this.state = 2167;
					this.match(informixParser.COMMA);
					this.state = 2168;
					this.expression();
					}
					}
					this.state = 2173;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case informixParser.CONTINUE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2174;
				this.match(informixParser.CONTINUE);
				this.state = 2175;
				this.match(informixParser.MENU);
				}
				break;
			case informixParser.EXIT:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2176;
				this.match(informixParser.EXIT);
				this.state = 2177;
				this.match(informixParser.MENU);
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
	public menuGroupStatement(): MenuGroupStatementContext {
		let _localctx: MenuGroupStatementContext = new MenuGroupStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 282, informixParser.RULE_menuGroupStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2180;
			this.menuEvents();
			this.state = 2182;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === informixParser.ALLOCATE || _la === informixParser.BEGIN || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (informixParser.CALL - 33)) | (1 << (informixParser.CASE - 33)) | (1 << (informixParser.CLEAR - 33)) | (1 << (informixParser.CLOSE - 33)) | (1 << (informixParser.COMMIT - 33)) | (1 << (informixParser.CONSTRUCT - 33)) | (1 << (informixParser.CONTINUE - 33)) | (1 << (informixParser.CREATE - 33)) | (1 << (informixParser.CURRENT - 33)) | (1 << (informixParser.DATABASE - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (informixParser.DEALLOCATE - 65)) | (1 << (informixParser.DECLARE - 65)) | (1 << (informixParser.DELETE - 65)) | (1 << (informixParser.DISPLAY - 65)) | (1 << (informixParser.DROP - 65)) | (1 << (informixParser.ERROR - 65)) | (1 << (informixParser.EXECUTE - 65)) | (1 << (informixParser.EXIT - 65)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (informixParser.FETCH - 102)) | (1 << (informixParser.FINISH - 102)) | (1 << (informixParser.FLUSH - 102)) | (1 << (informixParser.FOR - 102)) | (1 << (informixParser.FOREACH - 102)) | (1 << (informixParser.FREE - 102)) | (1 << (informixParser.GOTO - 102)) | (1 << (informixParser.HIDE - 102)) | (1 << (informixParser.IF - 102)))) !== 0) || ((((_la - 139)) & ~0x1F) === 0 && ((1 << (_la - 139)) & ((1 << (informixParser.INITIALIZE - 139)) | (1 << (informixParser.INPUT - 139)) | (1 << (informixParser.INSERT - 139)) | (1 << (informixParser.LET - 139)) | (1 << (informixParser.LOAD - 139)) | (1 << (informixParser.LOCATE - 139)) | (1 << (informixParser.LOCK - 139)))) !== 0) || ((((_la - 171)) & ~0x1F) === 0 && ((1 << (_la - 171)) & ((1 << (informixParser.MENU - 171)) | (1 << (informixParser.MESSAGE - 171)) | (1 << (informixParser.NEED - 171)) | (1 << (informixParser.NEXT - 171)) | (1 << (informixParser.OPEN - 171)))) !== 0) || ((((_la - 203)) & ~0x1F) === 0 && ((1 << (_la - 203)) & ((1 << (informixParser.OPTIONS - 203)) | (1 << (informixParser.OUTPUT - 203)) | (1 << (informixParser.PAUSE - 203)) | (1 << (informixParser.PREPARE - 203)) | (1 << (informixParser.PRINT - 203)) | (1 << (informixParser.PROMPT - 203)) | (1 << (informixParser.PUT - 203)))) !== 0) || ((((_la - 235)) & ~0x1F) === 0 && ((1 << (_la - 235)) & ((1 << (informixParser.RESIZE - 235)) | (1 << (informixParser.RETURN - 235)) | (1 << (informixParser.ROLLBACK - 235)) | (1 << (informixParser.RUN - 235)) | (1 << (informixParser.SCROLL - 235)) | (1 << (informixParser.SKIP2 - 235)) | (1 << (informixParser.SELECT - 235)) | (1 << (informixParser.SET - 235)) | (1 << (informixParser.SHOW - 235)) | (1 << (informixParser.SLEEP - 235)) | (1 << (informixParser.START - 235)))) !== 0) || ((((_la - 269)) & ~0x1F) === 0 && ((1 << (_la - 269)) & ((1 << (informixParser.TERMINATE - 269)) | (1 << (informixParser.UNLOAD - 269)) | (1 << (informixParser.UPDATE - 269)) | (1 << (informixParser.VALIDATE - 269)))) !== 0) || ((((_la - 301)) & ~0x1F) === 0 && ((1 << (_la - 301)) & ((1 << (informixParser.WHENEVER - 301)) | (1 << (informixParser.WHILE - 301)) | (1 << (informixParser.IDENT - 301)))) !== 0)) {
				{
				this.state = 2181;
				this.codeBlock();
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
	public menuStatement(): MenuStatementContext {
		let _localctx: MenuStatementContext = new MenuStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 284, informixParser.RULE_menuStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2184;
			this.match(informixParser.MENU);
			this.state = 2185;
			this.expression();
			this.state = 2189;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === informixParser.BEFORE || _la === informixParser.COMMAND) {
				{
				{
				this.state = 2186;
				this.menuGroupStatement();
				}
				}
				this.state = 2191;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2192;
			this.match(informixParser.END);
			this.state = 2193;
			this.match(informixParser.MENU);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public reservedLinePosition(): ReservedLinePositionContext {
		let _localctx: ReservedLinePositionContext = new ReservedLinePositionContext(this._ctx, this.state);
		this.enterRule(_localctx, 286, informixParser.RULE_reservedLinePosition);
		let _la: number;
		try {
			this.state = 2206;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case informixParser.FIRST:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2195;
				this.match(informixParser.FIRST);
				this.state = 2198;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === informixParser.PLUS) {
					{
					this.state = 2196;
					this.match(informixParser.PLUS);
					this.state = 2197;
					this.numericConstant();
					}
				}

				}
				break;
			case informixParser.PLUS:
			case informixParser.MINUS:
			case informixParser.NUM_INT:
			case informixParser.NUM_REAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2200;
				this.numericConstant();
				}
				break;
			case informixParser.LAST:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2201;
				this.match(informixParser.LAST);
				this.state = 2204;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === informixParser.MINUS) {
					{
					this.state = 2202;
					this.match(informixParser.MINUS);
					this.state = 2203;
					this.numericConstant();
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
	public specialWindowAttribute(): SpecialWindowAttributeContext {
		let _localctx: SpecialWindowAttributeContext = new SpecialWindowAttributeContext(this._ctx, this.state);
		this.enterRule(_localctx, 288, informixParser.RULE_specialWindowAttribute);
		let _la: number;
		try {
			this.state = 2220;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case informixParser.BLACK:
			case informixParser.BLUE:
			case informixParser.BOLD:
			case informixParser.CYAN:
			case informixParser.DIM:
			case informixParser.GREEN:
			case informixParser.INVISIBLE:
			case informixParser.MAGENTA:
			case informixParser.NORMAL:
			case informixParser.RED:
			case informixParser.WHITE:
			case informixParser.YELLOW:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2208;
				_la = this._input.LA(1);
				if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << informixParser.BLACK) | (1 << informixParser.BLUE) | (1 << informixParser.BOLD))) !== 0) || _la === informixParser.CYAN || _la === informixParser.DIM || _la === informixParser.GREEN || _la === informixParser.INVISIBLE || _la === informixParser.MAGENTA || _la === informixParser.NORMAL || _la === informixParser.RED || _la === informixParser.WHITE || _la === informixParser.YELLOW)) {
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
			case informixParser.REVERSE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2209;
				this.match(informixParser.REVERSE);
				}
				break;
			case informixParser.BORDER:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2210;
				this.match(informixParser.BORDER);
				}
				break;
			case informixParser.FORM:
			case informixParser.MENU:
			case informixParser.MESSAGE:
			case informixParser.PROMPT:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2211;
				_la = this._input.LA(1);
				if (!(_la === informixParser.FORM || _la === informixParser.MENU || _la === informixParser.MESSAGE || _la === informixParser.PROMPT)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 2212;
				this.match(informixParser.LINE);
				this.state = 2213;
				this.reservedLinePosition();
				}
				break;
			case informixParser.COMMENT:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2214;
				this.match(informixParser.COMMENT);
				this.state = 2215;
				this.match(informixParser.LINE);
				this.state = 2218;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case informixParser.FIRST:
				case informixParser.LAST:
				case informixParser.PLUS:
				case informixParser.MINUS:
				case informixParser.NUM_INT:
				case informixParser.NUM_REAL:
					{
					this.state = 2216;
					this.reservedLinePosition();
					}
					break;
				case informixParser.OFF:
					{
					this.state = 2217;
					this.match(informixParser.OFF);
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
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public windowAttribute(): WindowAttributeContext {
		let _localctx: WindowAttributeContext = new WindowAttributeContext(this._ctx, this.state);
		this.enterRule(_localctx, 290, informixParser.RULE_windowAttribute);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2222;
			this.specialWindowAttribute();
			this.state = 2227;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === informixParser.COMMA) {
				{
				{
				this.state = 2223;
				this.match(informixParser.COMMA);
				this.state = 2224;
				this.specialWindowAttribute();
				}
				}
				this.state = 2229;
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
	public windowAttributeList(): WindowAttributeListContext {
		let _localctx: WindowAttributeListContext = new WindowAttributeListContext(this._ctx, this.state);
		this.enterRule(_localctx, 292, informixParser.RULE_windowAttributeList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2230;
			_la = this._input.LA(1);
			if (!(_la === informixParser.ATTRIBUTE || _la === informixParser.ATTRIBUTES)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 2231;
			this.match(informixParser.LPAREN);
			this.state = 2232;
			this.windowAttribute();
			this.state = 2233;
			this.match(informixParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public optionStatement(): OptionStatementContext {
		let _localctx: OptionStatementContext = new OptionStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 294, informixParser.RULE_optionStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2290;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 271, this._ctx) ) {
			case 1:
				{
				this.state = 2235;
				this.match(informixParser.MESSAGE);
				this.state = 2236;
				this.match(informixParser.LINE);
				this.state = 2237;
				this.expression();
				}
				break;

			case 2:
				{
				this.state = 2238;
				this.match(informixParser.PROMPT);
				this.state = 2239;
				this.match(informixParser.LINE);
				this.state = 2240;
				this.expression();
				}
				break;

			case 3:
				{
				this.state = 2241;
				this.match(informixParser.MENU);
				this.state = 2242;
				this.match(informixParser.LINE);
				this.state = 2243;
				this.expression();
				}
				break;

			case 4:
				{
				this.state = 2244;
				this.match(informixParser.COMMENT);
				this.state = 2245;
				this.match(informixParser.LINE);
				this.state = 2246;
				this.expression();
				}
				break;

			case 5:
				{
				this.state = 2247;
				this.match(informixParser.ERROR);
				this.state = 2248;
				this.match(informixParser.LINE);
				this.state = 2249;
				this.expression();
				}
				break;

			case 6:
				{
				this.state = 2250;
				this.match(informixParser.FORM);
				this.state = 2251;
				this.match(informixParser.LINE);
				this.state = 2252;
				this.expression();
				}
				break;

			case 7:
				{
				this.state = 2253;
				this.match(informixParser.INPUT);
				this.state = 2257;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case informixParser.WRAP:
					{
					this.state = 2254;
					this.match(informixParser.WRAP);
					}
					break;
				case informixParser.NO:
					{
					this.state = 2255;
					this.match(informixParser.NO);
					this.state = 2256;
					this.match(informixParser.WRAP);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;

			case 8:
				{
				this.state = 2259;
				this.match(informixParser.INSERT);
				this.state = 2260;
				this.match(informixParser.KEY);
				this.state = 2261;
				this.expression();
				}
				break;

			case 9:
				{
				this.state = 2262;
				this.match(informixParser.DELETE);
				this.state = 2263;
				this.match(informixParser.KEY);
				this.state = 2264;
				this.expression();
				}
				break;

			case 10:
				{
				this.state = 2265;
				this.match(informixParser.NEXT);
				this.state = 2266;
				this.match(informixParser.KEY);
				this.state = 2267;
				this.expression();
				}
				break;

			case 11:
				{
				this.state = 2268;
				this.match(informixParser.PREVIOUS);
				this.state = 2269;
				this.match(informixParser.KEY);
				this.state = 2270;
				this.expression();
				}
				break;

			case 12:
				{
				this.state = 2271;
				this.match(informixParser.ACCEPT);
				this.state = 2272;
				this.match(informixParser.KEY);
				this.state = 2273;
				this.expression();
				}
				break;

			case 13:
				{
				this.state = 2274;
				this.match(informixParser.HELP);
				this.state = 2275;
				this.match(informixParser.FILE);
				this.state = 2276;
				this.expression();
				}
				break;

			case 14:
				{
				this.state = 2277;
				this.match(informixParser.HELP);
				this.state = 2278;
				this.match(informixParser.KEY);
				this.state = 2279;
				this.expression();
				}
				break;

			case 15:
				{
				this.state = 2280;
				this.match(informixParser.INPUT);
				this.state = 2281;
				this.attributeList();
				}
				break;

			case 16:
				{
				this.state = 2282;
				this.match(informixParser.DISPLAY);
				this.state = 2283;
				this.attributeList();
				}
				break;

			case 17:
				{
				this.state = 2284;
				this.match(informixParser.SQL);
				this.state = 2285;
				this.match(informixParser.INTERRUPT);
				this.state = 2286;
				_la = this._input.LA(1);
				if (!(_la === informixParser.OFF || _la === informixParser.ON)) {
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

			case 18:
				{
				this.state = 2287;
				this.match(informixParser.FIELD);
				this.state = 2288;
				this.match(informixParser.ORDER);
				this.state = 2289;
				_la = this._input.LA(1);
				if (!(_la === informixParser.CONSTRAINED || _la === informixParser.UNCONSTRAINED)) {
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
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public optionsStatement(): OptionsStatementContext {
		let _localctx: OptionsStatementContext = new OptionsStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 296, informixParser.RULE_optionsStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2292;
			this.match(informixParser.OPTIONS);
			this.state = 2293;
			this.optionStatement();
			this.state = 2298;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === informixParser.COMMA) {
				{
				{
				this.state = 2294;
				this.match(informixParser.COMMA);
				this.state = 2295;
				this.optionStatement();
				}
				}
				this.state = 2300;
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
	public screenStatement(): ScreenStatementContext {
		let _localctx: ScreenStatementContext = new ScreenStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 298, informixParser.RULE_screenStatement);
		let _la: number;
		try {
			this.state = 2390;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 281, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2301;
				this.match(informixParser.CLEAR);
				this.state = 2310;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 274, this._ctx) ) {
				case 1:
					{
					this.state = 2302;
					this.match(informixParser.FORM);
					}
					break;

				case 2:
					{
					this.state = 2303;
					this.match(informixParser.WINDOW);
					this.state = 2304;
					this.identifier();
					}
					break;

				case 3:
					{
					this.state = 2306;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === informixParser.WINDOW) {
						{
						this.state = 2305;
						this.match(informixParser.WINDOW);
						}
					}

					this.state = 2308;
					this.match(informixParser.SCREEN);
					}
					break;

				case 4:
					{
					this.state = 2309;
					this.fieldList();
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2312;
				this.match(informixParser.CLOSE);
				this.state = 2313;
				this.match(informixParser.WINDOW);
				this.state = 2314;
				this.identifier();
				this.state = 2315;
				this.eol();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2317;
				this.match(informixParser.CLOSE);
				this.state = 2318;
				this.match(informixParser.FORM);
				this.state = 2319;
				this.identifier();
				this.state = 2320;
				this.eol();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2322;
				this.constructStatement();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2323;
				this.match(informixParser.CURRENT);
				this.state = 2324;
				this.match(informixParser.WINDOW);
				this.state = 2325;
				this.match(informixParser.IS);
				this.state = 2328;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case informixParser.SCREEN:
					{
					this.state = 2326;
					this.match(informixParser.SCREEN);
					}
					break;
				case informixParser.IDENT:
					{
					this.state = 2327;
					this.identifier();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2330;
				this.eol();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2331;
				this.displayStatement();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 2332;
				this.displayArrayStatement();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 2333;
				this.match(informixParser.DISPLAY);
				this.state = 2334;
				this.match(informixParser.FORM);
				this.state = 2335;
				this.identifier();
				this.state = 2337;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === informixParser.ATTRIBUTE || _la === informixParser.ATTRIBUTES) {
					{
					this.state = 2336;
					this.attributeList();
					}
				}

				this.state = 2339;
				this.eol();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 2341;
				this.errorStatement();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 2342;
				this.messageStatement();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 2343;
				this.promptStatement();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 2344;
				this.inputStatement();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 2345;
				this.inputArrayStatement();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 2346;
				this.menuStatement();
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 2347;
				this.match(informixParser.OPEN);
				this.state = 2348;
				this.match(informixParser.FORM);
				this.state = 2349;
				this.expression();
				this.state = 2350;
				this.match(informixParser.FROM);
				this.state = 2351;
				this.expression();
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 2353;
				this.match(informixParser.OPEN);
				this.state = 2354;
				this.match(informixParser.WINDOW);
				this.state = 2355;
				this.expression();
				this.state = 2356;
				this.match(informixParser.AT);
				this.state = 2357;
				this.expression();
				this.state = 2358;
				this.match(informixParser.COMMA);
				this.state = 2359;
				this.expression();
				this.state = 2370;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 277, this._ctx) ) {
				case 1:
					{
					this.state = 2360;
					this.match(informixParser.WITH);
					this.state = 2361;
					this.match(informixParser.FORM);
					this.state = 2362;
					this.expression();
					}
					break;

				case 2:
					{
					this.state = 2363;
					this.match(informixParser.WITH);
					this.state = 2364;
					this.expression();
					this.state = 2365;
					this.match(informixParser.ROWS);
					this.state = 2366;
					this.match(informixParser.COMMA);
					this.state = 2367;
					this.expression();
					this.state = 2368;
					this.match(informixParser.COLUMNS);
					}
					break;
				}
				this.state = 2373;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === informixParser.ATTRIBUTE || _la === informixParser.ATTRIBUTES) {
					{
					this.state = 2372;
					this.windowAttributeList();
					}
				}

				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 2375;
				this.optionsStatement();
				}
				break;

			case 18:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 2376;
				this.match(informixParser.SCROLL);
				this.state = 2377;
				this.fieldList();
				this.state = 2382;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === informixParser.COMMA) {
					{
					{
					this.state = 2378;
					this.match(informixParser.COMMA);
					this.state = 2379;
					this.fieldList();
					}
					}
					this.state = 2384;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2385;
				_la = this._input.LA(1);
				if (!(_la === informixParser.DOWN || _la === informixParser.UP)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 2388;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === informixParser.BY) {
					{
					this.state = 2386;
					this.match(informixParser.BY);
					this.state = 2387;
					this.numericConstant();
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
	public sqlStatements(): SqlStatementsContext {
		let _localctx: SqlStatementsContext = new SqlStatementsContext(this._ctx, this.state);
		this.enterRule(_localctx, 300, informixParser.RULE_sqlStatements);
		try {
			this.state = 2399;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 282, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2392;
				this.cursorManipulationStatement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2393;
				this.dataDefinitionStatement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2394;
				this.dataManipulationStatement();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2395;
				this.dynamicManagementStatement();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2396;
				this.queryOptimizationStatement();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2397;
				this.dataIntegrityStatement();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 2398;
				this.clientServerStatement();
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
	public cursorManipulationStatement(): CursorManipulationStatementContext {
		let _localctx: CursorManipulationStatementContext = new CursorManipulationStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 302, informixParser.RULE_cursorManipulationStatement);
		let _la: number;
		try {
			this.state = 2472;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case informixParser.CLOSE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2401;
				this.match(informixParser.CLOSE);
				this.state = 2402;
				this.cursorName();
				this.state = 2403;
				this.eol();
				}
				break;
			case informixParser.DECLARE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2405;
				this.match(informixParser.DECLARE);
				this.state = 2406;
				this.cursorName();
				this.state = 2437;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case informixParser.CURSOR:
					{
					this.state = 2407;
					this.match(informixParser.CURSOR);
					this.state = 2410;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === informixParser.WITH) {
						{
						this.state = 2408;
						this.match(informixParser.WITH);
						this.state = 2409;
						this.match(informixParser.HOLD);
						}
					}

					this.state = 2412;
					this.match(informixParser.FOR);
					this.state = 2424;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case informixParser.SELECT:
						{
						this.state = 2413;
						this.sqlSelectStatement();
						this.state = 2420;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 285, this._ctx) ) {
						case 1:
							{
							this.state = 2414;
							this.match(informixParser.FOR);
							this.state = 2415;
							this.match(informixParser.UPDATE);
							this.state = 2418;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la === informixParser.OF) {
								{
								this.state = 2416;
								this.match(informixParser.OF);
								this.state = 2417;
								this.columnsList();
								}
							}

							}
							break;
						}
						}
						break;
					case informixParser.INSERT:
						{
						this.state = 2422;
						this.sqlInsertStatement();
						}
						break;
					case informixParser.ACCEPT:
					case informixParser.ASCII:
					case informixParser.COUNT:
					case informixParser.CURRENT:
					case informixParser.FALSE:
					case informixParser.FIRST:
					case informixParser.FOUND:
					case informixParser.GROUP:
					case informixParser.HIDE:
					case informixParser.INDEX:
					case informixParser.INT_FLAG:
					case informixParser.INTERRUPT:
					case informixParser.LAST:
					case informixParser.LENGTH:
					case informixParser.LINENO:
					case informixParser.MDY:
					case informixParser.NO:
					case informixParser.NOT:
					case informixParser.NOTFOUND:
					case informixParser.NULL:
					case informixParser.PAGENO:
					case informixParser.REAL:
					case informixParser.SIZE:
					case informixParser.SQL:
					case informixParser.STATUS:
					case informixParser.TEMP:
					case informixParser.TIME:
					case informixParser.TODAY:
					case informixParser.TRUE:
					case informixParser.USER:
					case informixParser.WEEKDAY:
					case informixParser.WAIT:
					case informixParser.WORK:
					case informixParser.IDENT:
						{
						this.state = 2423;
						this.statementId();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					break;
				case informixParser.SCROLL:
					{
					this.state = 2426;
					this.match(informixParser.SCROLL);
					this.state = 2427;
					this.match(informixParser.CURSOR);
					this.state = 2430;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === informixParser.WITH) {
						{
						this.state = 2428;
						this.match(informixParser.WITH);
						this.state = 2429;
						this.match(informixParser.HOLD);
						}
					}

					this.state = 2432;
					this.match(informixParser.FOR);
					this.state = 2435;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case informixParser.SELECT:
						{
						this.state = 2433;
						this.sqlSelectStatement();
						}
						break;
					case informixParser.ACCEPT:
					case informixParser.ASCII:
					case informixParser.COUNT:
					case informixParser.CURRENT:
					case informixParser.FALSE:
					case informixParser.FIRST:
					case informixParser.FOUND:
					case informixParser.GROUP:
					case informixParser.HIDE:
					case informixParser.INDEX:
					case informixParser.INT_FLAG:
					case informixParser.INTERRUPT:
					case informixParser.LAST:
					case informixParser.LENGTH:
					case informixParser.LINENO:
					case informixParser.MDY:
					case informixParser.NO:
					case informixParser.NOT:
					case informixParser.NOTFOUND:
					case informixParser.NULL:
					case informixParser.PAGENO:
					case informixParser.REAL:
					case informixParser.SIZE:
					case informixParser.SQL:
					case informixParser.STATUS:
					case informixParser.TEMP:
					case informixParser.TIME:
					case informixParser.TODAY:
					case informixParser.TRUE:
					case informixParser.USER:
					case informixParser.WEEKDAY:
					case informixParser.WAIT:
					case informixParser.WORK:
					case informixParser.IDENT:
						{
						this.state = 2434;
						this.statementId();
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
				break;
			case informixParser.FETCH:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2439;
				this.match(informixParser.FETCH);
				this.state = 2449;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case informixParser.NEXT:
					{
					this.state = 2440;
					this.match(informixParser.NEXT);
					}
					break;
				case informixParser.PREVIOUS:
				case informixParser.PRIOR:
					{
					this.state = 2441;
					_la = this._input.LA(1);
					if (!(_la === informixParser.PREVIOUS || _la === informixParser.PRIOR)) {
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
				case informixParser.FIRST:
					{
					this.state = 2442;
					this.match(informixParser.FIRST);
					}
					break;
				case informixParser.LAST:
					{
					this.state = 2443;
					this.match(informixParser.LAST);
					}
					break;
				case informixParser.CURRENT:
					{
					this.state = 2444;
					this.match(informixParser.CURRENT);
					}
					break;
				case informixParser.RELATIVE:
					{
					this.state = 2445;
					this.match(informixParser.RELATIVE);
					this.state = 2446;
					this.expression();
					}
					break;
				case informixParser.ABSOLUTE:
					{
					this.state = 2447;
					this.match(informixParser.ABSOLUTE);
					this.state = 2448;
					this.expression();
					}
					break;
				case informixParser.IDENT:
					break;
				default:
					break;
				}
				this.state = 2451;
				this.cursorName();
				this.state = 2454;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === informixParser.INTO) {
					{
					this.state = 2452;
					this.match(informixParser.INTO);
					this.state = 2453;
					this.variableList();
					}
				}

				}
				break;
			case informixParser.FLUSH:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2456;
				this.match(informixParser.FLUSH);
				this.state = 2457;
				this.cursorName();
				this.state = 2458;
				this.eol();
				}
				break;
			case informixParser.OPEN:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2460;
				this.match(informixParser.OPEN);
				this.state = 2461;
				this.cursorName();
				this.state = 2464;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === informixParser.USING) {
					{
					this.state = 2462;
					this.match(informixParser.USING);
					this.state = 2463;
					this.variableList();
					}
				}

				}
				break;
			case informixParser.PUT:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2466;
				this.match(informixParser.PUT);
				this.state = 2467;
				this.cursorName();
				this.state = 2470;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === informixParser.FROM) {
					{
					this.state = 2468;
					this.match(informixParser.FROM);
					this.state = 2469;
					this.variableOrConstantList();
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
	public columnsList(): ColumnsListContext {
		let _localctx: ColumnsListContext = new ColumnsListContext(this._ctx, this.state);
		this.enterRule(_localctx, 304, informixParser.RULE_columnsList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2474;
			this.columnsTableId();
			this.state = 2479;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === informixParser.COMMA) {
				{
				{
				this.state = 2475;
				this.match(informixParser.COMMA);
				this.state = 2476;
				this.columnsTableId();
				}
				}
				this.state = 2481;
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
	public statementId(): StatementIdContext {
		let _localctx: StatementIdContext = new StatementIdContext(this._ctx, this.state);
		this.enterRule(_localctx, 306, informixParser.RULE_statementId);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2482;
			this.constantIdentifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cursorName(): CursorNameContext {
		let _localctx: CursorNameContext = new CursorNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 308, informixParser.RULE_cursorName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2484;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dataType(): DataTypeContext {
		let _localctx: DataTypeContext = new DataTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 310, informixParser.RULE_dataType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2486;
			this.type();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public columnItem(): ColumnItemContext {
		let _localctx: ColumnItemContext = new ColumnItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 312, informixParser.RULE_columnItem);
		let _la: number;
		try {
			this.state = 2521;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case informixParser.ACCEPT:
			case informixParser.ASCII:
			case informixParser.COUNT:
			case informixParser.CURRENT:
			case informixParser.FALSE:
			case informixParser.FIRST:
			case informixParser.FOUND:
			case informixParser.GROUP:
			case informixParser.HIDE:
			case informixParser.INDEX:
			case informixParser.INT_FLAG:
			case informixParser.INTERRUPT:
			case informixParser.LAST:
			case informixParser.LENGTH:
			case informixParser.LINENO:
			case informixParser.MDY:
			case informixParser.NO:
			case informixParser.NOT:
			case informixParser.NOTFOUND:
			case informixParser.NULL:
			case informixParser.PAGENO:
			case informixParser.REAL:
			case informixParser.SIZE:
			case informixParser.SQL:
			case informixParser.STATUS:
			case informixParser.TEMP:
			case informixParser.TIME:
			case informixParser.TODAY:
			case informixParser.TRUE:
			case informixParser.USER:
			case informixParser.WEEKDAY:
			case informixParser.WAIT:
			case informixParser.WORK:
			case informixParser.IDENT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2488;
				this.constantIdentifier();
				this.state = 2498;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 298, this._ctx) ) {
				case 1:
					{
					this.state = 2489;
					this.dataType();
					}
					break;

				case 2:
					{
					this.state = 2490;
					_la = this._input.LA(1);
					if (!(_la === informixParser.BYTE || _la === informixParser.TEXT)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 2496;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === informixParser.IN) {
						{
						this.state = 2491;
						this.match(informixParser.IN);
						this.state = 2494;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case informixParser.TABLE:
							{
							this.state = 2492;
							this.match(informixParser.TABLE);
							}
							break;
						case informixParser.ACCEPT:
						case informixParser.ASCII:
						case informixParser.COUNT:
						case informixParser.CURRENT:
						case informixParser.FALSE:
						case informixParser.FIRST:
						case informixParser.FOUND:
						case informixParser.GROUP:
						case informixParser.HIDE:
						case informixParser.INDEX:
						case informixParser.INT_FLAG:
						case informixParser.INTERRUPT:
						case informixParser.LAST:
						case informixParser.LENGTH:
						case informixParser.LINENO:
						case informixParser.MDY:
						case informixParser.NO:
						case informixParser.NOT:
						case informixParser.NOTFOUND:
						case informixParser.NULL:
						case informixParser.PAGENO:
						case informixParser.REAL:
						case informixParser.SIZE:
						case informixParser.SQL:
						case informixParser.STATUS:
						case informixParser.TEMP:
						case informixParser.TIME:
						case informixParser.TODAY:
						case informixParser.TRUE:
						case informixParser.USER:
						case informixParser.WEEKDAY:
						case informixParser.WAIT:
						case informixParser.WORK:
						case informixParser.IDENT:
							{
							this.state = 2493;
							this.constantIdentifier();
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						}
					}

					}
					break;
				}
				this.state = 2502;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === informixParser.NOT) {
					{
					this.state = 2500;
					this.match(informixParser.NOT);
					this.state = 2501;
					this.match(informixParser.NULL);
					}
				}

				}
				break;
			case informixParser.UNIQUE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2504;
				this.match(informixParser.UNIQUE);
				this.state = 2505;
				this.match(informixParser.LPAREN);
				this.state = 2514;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === informixParser.ACCEPT || _la === informixParser.ASCII || _la === informixParser.COUNT || _la === informixParser.CURRENT || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (informixParser.FALSE - 101)) | (1 << (informixParser.FIRST - 101)) | (1 << (informixParser.FOUND - 101)) | (1 << (informixParser.GROUP - 101)) | (1 << (informixParser.HIDE - 101)))) !== 0) || ((((_la - 136)) & ~0x1F) === 0 && ((1 << (_la - 136)) & ((1 << (informixParser.INDEX - 136)) | (1 << (informixParser.INT_FLAG - 136)) | (1 << (informixParser.INTERRUPT - 136)) | (1 << (informixParser.LAST - 136)) | (1 << (informixParser.LENGTH - 136)) | (1 << (informixParser.LINENO - 136)))) !== 0) || ((((_la - 176)) & ~0x1F) === 0 && ((1 << (_la - 176)) & ((1 << (informixParser.MDY - 176)) | (1 << (informixParser.NO - 176)) | (1 << (informixParser.NOT - 176)) | (1 << (informixParser.NOTFOUND - 176)) | (1 << (informixParser.NULL - 176)))) !== 0) || _la === informixParser.PAGENO || _la === informixParser.REAL || ((((_la - 252)) & ~0x1F) === 0 && ((1 << (_la - 252)) & ((1 << (informixParser.SIZE - 252)) | (1 << (informixParser.SQL - 252)) | (1 << (informixParser.STATUS - 252)) | (1 << (informixParser.TEMP - 252)) | (1 << (informixParser.TIME - 252)) | (1 << (informixParser.TODAY - 252)) | (1 << (informixParser.TRUE - 252)))) !== 0) || ((((_la - 290)) & ~0x1F) === 0 && ((1 << (_la - 290)) & ((1 << (informixParser.USER - 290)) | (1 << (informixParser.WEEKDAY - 290)) | (1 << (informixParser.WAIT - 290)) | (1 << (informixParser.WORK - 290)))) !== 0) || _la === informixParser.IDENT) {
					{
					this.state = 2506;
					this.constantIdentifier();
					this.state = 2511;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === informixParser.COMMA) {
						{
						{
						this.state = 2507;
						this.match(informixParser.COMMA);
						this.state = 2508;
						this.constantIdentifier();
						}
						}
						this.state = 2513;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 2516;
				this.match(informixParser.RPAREN);
				this.state = 2519;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === informixParser.CONSTRAINT) {
					{
					this.state = 2517;
					this.match(informixParser.CONSTRAINT);
					this.state = 2518;
					this.constantIdentifier();
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
	public dataDefinitionStatement(): DataDefinitionStatementContext {
		let _localctx: DataDefinitionStatementContext = new DataDefinitionStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 314, informixParser.RULE_dataDefinitionStatement);
		let _la: number;
		try {
			this.state = 2599;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 316, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2523;
				this.match(informixParser.DROP);
				this.state = 2524;
				this.match(informixParser.TABLE);
				this.state = 2525;
				this.constantIdentifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2526;
				this.match(informixParser.CREATE);
				this.state = 2528;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === informixParser.TEMP) {
					{
					this.state = 2527;
					this.match(informixParser.TEMP);
					}
				}

				this.state = 2530;
				this.match(informixParser.TABLE);
				this.state = 2531;
				this.constantIdentifier();
				this.state = 2532;
				this.match(informixParser.LPAREN);
				this.state = 2533;
				this.columnItem();
				this.state = 2538;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === informixParser.COMMA) {
					{
					{
					this.state = 2534;
					this.match(informixParser.COMMA);
					this.state = 2535;
					this.columnItem();
					}
					}
					this.state = 2540;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2541;
				this.match(informixParser.RPAREN);
				this.state = 2545;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === informixParser.WITH) {
					{
					this.state = 2542;
					this.match(informixParser.WITH);
					this.state = 2543;
					this.match(informixParser.NO);
					this.state = 2544;
					this.match(informixParser.LOG);
					}
				}

				this.state = 2549;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === informixParser.IN) {
					{
					this.state = 2547;
					this.match(informixParser.IN);
					this.state = 2548;
					this.constantIdentifier();
					}
				}

				this.state = 2554;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === informixParser.EXTENT) {
					{
					this.state = 2551;
					this.match(informixParser.EXTENT);
					this.state = 2552;
					this.match(informixParser.SIZE);
					this.state = 2553;
					this.numericConstant();
					}
				}

				this.state = 2559;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 309, this._ctx) ) {
				case 1:
					{
					this.state = 2556;
					this.match(informixParser.NEXT);
					this.state = 2557;
					this.match(informixParser.SIZE);
					this.state = 2558;
					this.numericConstant();
					}
					break;
				}
				this.state = 2566;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 310, this._ctx) ) {
				case 1:
					{
					this.state = 2561;
					this.match(informixParser.LOCK);
					this.state = 2562;
					this.match(informixParser.MODE);
					this.state = 2563;
					this.match(informixParser.LPAREN);
					this.state = 2564;
					_la = this._input.LA(1);
					if (!(_la === informixParser.PAGE || _la === informixParser.ROW)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 2565;
					this.match(informixParser.RPAREN);
					}
					break;
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2568;
				this.match(informixParser.CREATE);
				this.state = 2570;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === informixParser.UNIQUE) {
					{
					this.state = 2569;
					this.match(informixParser.UNIQUE);
					}
				}

				this.state = 2573;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === informixParser.CLUSTER) {
					{
					this.state = 2572;
					this.match(informixParser.CLUSTER);
					}
				}

				this.state = 2575;
				this.match(informixParser.INDEX);
				this.state = 2576;
				this.constantIdentifier();
				this.state = 2577;
				this.match(informixParser.ON);
				this.state = 2578;
				this.constantIdentifier();
				this.state = 2579;
				this.match(informixParser.LPAREN);
				this.state = 2580;
				this.constantIdentifier();
				this.state = 2582;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === informixParser.ASC || _la === informixParser.DESC) {
					{
					this.state = 2581;
					_la = this._input.LA(1);
					if (!(_la === informixParser.ASC || _la === informixParser.DESC)) {
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

				this.state = 2591;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === informixParser.COMMA) {
					{
					{
					this.state = 2584;
					this.match(informixParser.COMMA);
					this.state = 2585;
					this.constantIdentifier();
					this.state = 2587;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === informixParser.ASC || _la === informixParser.DESC) {
						{
						this.state = 2586;
						_la = this._input.LA(1);
						if (!(_la === informixParser.ASC || _la === informixParser.DESC)) {
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
					this.state = 2593;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2594;
				this.match(informixParser.RPAREN);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2596;
				this.match(informixParser.DROP);
				this.state = 2597;
				this.match(informixParser.INDEX);
				this.state = 2598;
				this.constantIdentifier();
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
	public dataManipulationStatement(): DataManipulationStatementContext {
		let _localctx: DataManipulationStatementContext = new DataManipulationStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 316, informixParser.RULE_dataManipulationStatement);
		try {
			this.state = 2607;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case informixParser.INSERT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2601;
				this.sqlInsertStatement();
				}
				break;
			case informixParser.DELETE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2602;
				this.sqlDeleteStatement();
				}
				break;
			case informixParser.SELECT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2603;
				this.sqlSelectStatement();
				}
				break;
			case informixParser.UPDATE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2604;
				this.sqlUpdateStatement();
				}
				break;
			case informixParser.LOAD:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2605;
				this.sqlLoadStatement();
				}
				break;
			case informixParser.UNLOAD:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2606;
				this.sqlUnLoadStatement();
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
	public sqlSelectStatement(): SqlSelectStatementContext {
		let _localctx: SqlSelectStatementContext = new SqlSelectStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 318, informixParser.RULE_sqlSelectStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2609;
			this.mainSelectStatement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public columnsTableId(): ColumnsTableIdContext {
		let _localctx: ColumnsTableIdContext = new ColumnsTableIdContext(this._ctx, this.state);
		this.enterRule(_localctx, 320, informixParser.RULE_columnsTableId);
		let _la: number;
		try {
			this.state = 2622;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case informixParser.STAR:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2611;
				this.match(informixParser.STAR);
				}
				break;
			case informixParser.ACCEPT:
			case informixParser.ASCII:
			case informixParser.COUNT:
			case informixParser.CURRENT:
			case informixParser.FALSE:
			case informixParser.FIRST:
			case informixParser.FOUND:
			case informixParser.GROUP:
			case informixParser.HIDE:
			case informixParser.INDEX:
			case informixParser.INT_FLAG:
			case informixParser.INTERRUPT:
			case informixParser.LAST:
			case informixParser.LENGTH:
			case informixParser.LINENO:
			case informixParser.MDY:
			case informixParser.NO:
			case informixParser.NOT:
			case informixParser.NOTFOUND:
			case informixParser.NULL:
			case informixParser.PAGENO:
			case informixParser.REAL:
			case informixParser.SIZE:
			case informixParser.SQL:
			case informixParser.STATUS:
			case informixParser.TEMP:
			case informixParser.TIME:
			case informixParser.TODAY:
			case informixParser.TRUE:
			case informixParser.USER:
			case informixParser.WEEKDAY:
			case informixParser.WAIT:
			case informixParser.WORK:
			case informixParser.IDENT:
			case informixParser.STRING_LITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				{
				this.state = 2612;
				this.tableIdentifier();
				this.state = 2614;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === informixParser.LBRACK) {
					{
					this.state = 2613;
					this.indexingVariable();
					}
				}

				}
				this.state = 2620;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 319, this._ctx) ) {
				case 1:
					{
					this.state = 2616;
					this.match(informixParser.DOT);
					this.state = 2617;
					this.match(informixParser.STAR);
					}
					break;

				case 2:
					{
					this.state = 2618;
					this.match(informixParser.DOT);
					this.state = 2619;
					this.columnsTableId();
					}
					break;
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
	public selectList(): SelectListContext {
		let _localctx: SelectListContext = new SelectListContext(this._ctx, this.state);
		this.enterRule(_localctx, 322, informixParser.RULE_selectList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 2624;
			this.sqlExpression();
			this.state = 2626;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === informixParser.AS || _la === informixParser.IDENT) {
				{
				this.state = 2625;
				this.sqlAlias();
				}
			}

			this.state = 2635;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === informixParser.COMMA) {
				{
				{
				this.state = 2628;
				this.match(informixParser.COMMA);
				this.state = 2629;
				this.sqlExpression();
				this.state = 2631;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === informixParser.AS || _la === informixParser.IDENT) {
					{
					this.state = 2630;
					this.sqlAlias();
					}
				}

				}
				}
				this.state = 2637;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
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
	public headSelectStatement(): HeadSelectStatementContext {
		let _localctx: HeadSelectStatementContext = new HeadSelectStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 324, informixParser.RULE_headSelectStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2638;
			this.match(informixParser.SELECT);
			this.state = 2641;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case informixParser.ALL:
				{
				this.state = 2639;
				this.match(informixParser.ALL);
				}
				break;
			case informixParser.DISTINCT:
			case informixParser.UNIQUE:
				{
				this.state = 2640;
				_la = this._input.LA(1);
				if (!(_la === informixParser.DISTINCT || _la === informixParser.UNIQUE)) {
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
			case informixParser.ACCEPT:
			case informixParser.ASCII:
			case informixParser.AVG:
			case informixParser.COUNT:
			case informixParser.CURRENT:
			case informixParser.DATE:
			case informixParser.DAY:
			case informixParser.DECODE:
			case informixParser.FALSE:
			case informixParser.FIRST:
			case informixParser.FOUND:
			case informixParser.GROUP:
			case informixParser.HIDE:
			case informixParser.INDEX:
			case informixParser.INT_FLAG:
			case informixParser.INTERRUPT:
			case informixParser.LAST:
			case informixParser.LENGTH:
			case informixParser.LINENO:
			case informixParser.MAX:
			case informixParser.MDY:
			case informixParser.MIN:
			case informixParser.MOD:
			case informixParser.MONTH:
			case informixParser.NO:
			case informixParser.NOT:
			case informixParser.NOTFOUND:
			case informixParser.NULL:
			case informixParser.NVL:
			case informixParser.PAGENO:
			case informixParser.REAL:
			case informixParser.SIZE:
			case informixParser.SQL:
			case informixParser.STATUS:
			case informixParser.SUM:
			case informixParser.TEMP:
			case informixParser.TIME:
			case informixParser.TODAY:
			case informixParser.TRUE:
			case informixParser.USER:
			case informixParser.WEEKDAY:
			case informixParser.WAIT:
			case informixParser.WORK:
			case informixParser.YEAR:
			case informixParser.PLUS:
			case informixParser.MINUS:
			case informixParser.STAR:
			case informixParser.LPAREN:
			case informixParser.IDENT:
			case informixParser.STRING_LITERAL:
			case informixParser.NUM_INT:
			case informixParser.NUM_REAL:
				break;
			default:
				break;
			}
			this.state = 2643;
			this.selectList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tableQualifier(): TableQualifierContext {
		let _localctx: TableQualifierContext = new TableQualifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 326, informixParser.RULE_tableQualifier);
		try {
			this.state = 2654;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 325, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2645;
				this.constantIdentifier();
				this.state = 2646;
				this.match(informixParser.COLON);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2648;
				this.constantIdentifier();
				this.state = 2649;
				this.match(informixParser.ATSYMBOL);
				this.state = 2650;
				this.constantIdentifier();
				this.state = 2651;
				this.match(informixParser.COLON);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2653;
				this.string();
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
	public tableIdentifier(): TableIdentifierContext {
		let _localctx: TableIdentifierContext = new TableIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 328, informixParser.RULE_tableIdentifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2657;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 326, this._ctx) ) {
			case 1:
				{
				this.state = 2656;
				this.tableQualifier();
				}
				break;
			}
			this.state = 2659;
			this.constantIdentifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fromTable(): FromTableContext {
		let _localctx: FromTableContext = new FromTableContext(this._ctx, this.state);
		this.enterRule(_localctx, 330, informixParser.RULE_fromTable);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2662;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === informixParser.OUTER) {
				{
				this.state = 2661;
				this.match(informixParser.OUTER);
				}
			}

			this.state = 2664;
			this.tableIdentifier();
			this.state = 2666;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 328, this._ctx) ) {
			case 1:
				{
				this.state = 2665;
				this.sqlAlias();
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
	public tableExpression(): TableExpressionContext {
		let _localctx: TableExpressionContext = new TableExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 332, informixParser.RULE_tableExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2668;
			this.simpleSelectStatement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fromSelectStatement(): FromSelectStatementContext {
		let _localctx: FromSelectStatementContext = new FromSelectStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 334, informixParser.RULE_fromSelectStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2670;
			this.match(informixParser.FROM);
			this.state = 2678;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case informixParser.ACCEPT:
			case informixParser.ASCII:
			case informixParser.COUNT:
			case informixParser.CURRENT:
			case informixParser.FALSE:
			case informixParser.FIRST:
			case informixParser.FOUND:
			case informixParser.GROUP:
			case informixParser.HIDE:
			case informixParser.INDEX:
			case informixParser.INT_FLAG:
			case informixParser.INTERRUPT:
			case informixParser.LAST:
			case informixParser.LENGTH:
			case informixParser.LINENO:
			case informixParser.MDY:
			case informixParser.NO:
			case informixParser.NOT:
			case informixParser.NOTFOUND:
			case informixParser.NULL:
			case informixParser.OUTER:
			case informixParser.PAGENO:
			case informixParser.REAL:
			case informixParser.SIZE:
			case informixParser.SQL:
			case informixParser.STATUS:
			case informixParser.TEMP:
			case informixParser.TIME:
			case informixParser.TODAY:
			case informixParser.TRUE:
			case informixParser.USER:
			case informixParser.WEEKDAY:
			case informixParser.WAIT:
			case informixParser.WORK:
			case informixParser.IDENT:
			case informixParser.STRING_LITERAL:
				{
				this.state = 2671;
				this.fromTable();
				}
				break;
			case informixParser.LPAREN:
				{
				this.state = 2672;
				this.match(informixParser.LPAREN);
				this.state = 2673;
				this.tableExpression();
				this.state = 2674;
				this.match(informixParser.RPAREN);
				this.state = 2676;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 329, this._ctx) ) {
				case 1:
					{
					this.state = 2675;
					this.sqlAlias();
					}
					break;
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 2692;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === informixParser.COMMA) {
				{
				{
				this.state = 2680;
				this.match(informixParser.COMMA);
				this.state = 2688;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case informixParser.ACCEPT:
				case informixParser.ASCII:
				case informixParser.COUNT:
				case informixParser.CURRENT:
				case informixParser.FALSE:
				case informixParser.FIRST:
				case informixParser.FOUND:
				case informixParser.GROUP:
				case informixParser.HIDE:
				case informixParser.INDEX:
				case informixParser.INT_FLAG:
				case informixParser.INTERRUPT:
				case informixParser.LAST:
				case informixParser.LENGTH:
				case informixParser.LINENO:
				case informixParser.MDY:
				case informixParser.NO:
				case informixParser.NOT:
				case informixParser.NOTFOUND:
				case informixParser.NULL:
				case informixParser.OUTER:
				case informixParser.PAGENO:
				case informixParser.REAL:
				case informixParser.SIZE:
				case informixParser.SQL:
				case informixParser.STATUS:
				case informixParser.TEMP:
				case informixParser.TIME:
				case informixParser.TODAY:
				case informixParser.TRUE:
				case informixParser.USER:
				case informixParser.WEEKDAY:
				case informixParser.WAIT:
				case informixParser.WORK:
				case informixParser.IDENT:
				case informixParser.STRING_LITERAL:
					{
					this.state = 2681;
					this.fromTable();
					}
					break;
				case informixParser.LPAREN:
					{
					this.state = 2682;
					this.match(informixParser.LPAREN);
					this.state = 2683;
					this.tableExpression();
					this.state = 2684;
					this.match(informixParser.RPAREN);
					this.state = 2686;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 331, this._ctx) ) {
					case 1:
						{
						this.state = 2685;
						this.sqlAlias();
						}
						break;
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				}
				this.state = 2694;
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
	public aliasName(): AliasNameContext {
		let _localctx: AliasNameContext = new AliasNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 336, informixParser.RULE_aliasName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2695;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mainSelectStatement(): MainSelectStatementContext {
		let _localctx: MainSelectStatementContext = new MainSelectStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 338, informixParser.RULE_mainSelectStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2697;
			this.headSelectStatement();
			this.state = 2700;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === informixParser.INTO) {
				{
				this.state = 2698;
				this.match(informixParser.INTO);
				this.state = 2699;
				this.variableList();
				}
			}

			this.state = 2702;
			this.fromSelectStatement();
			this.state = 2704;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === informixParser.WHERE) {
				{
				this.state = 2703;
				this.whereStatement();
				}
			}

			this.state = 2707;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === informixParser.GROUP) {
				{
				this.state = 2706;
				this.groupByStatement();
				}
			}

			this.state = 2710;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === informixParser.HAVING) {
				{
				this.state = 2709;
				this.havingStatement();
				}
			}

			this.state = 2713;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === informixParser.UNION) {
				{
				this.state = 2712;
				this.unionSelectStatement();
				}
			}

			this.state = 2716;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === informixParser.ORDER) {
				{
				this.state = 2715;
				this.orderbyStatement();
				}
			}

			this.state = 2721;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === informixParser.INTO) {
				{
				this.state = 2718;
				this.match(informixParser.INTO);
				this.state = 2719;
				this.match(informixParser.TEMP);
				this.state = 2720;
				this.identifier();
				}
			}

			this.state = 2726;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === informixParser.WITH) {
				{
				this.state = 2723;
				this.match(informixParser.WITH);
				this.state = 2724;
				this.match(informixParser.NO);
				this.state = 2725;
				this.match(informixParser.LOG);
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
	public unionSelectStatement(): UnionSelectStatementContext {
		let _localctx: UnionSelectStatementContext = new UnionSelectStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 340, informixParser.RULE_unionSelectStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 2728;
			this.match(informixParser.UNION);
			this.state = 2730;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === informixParser.ALL) {
				{
				this.state = 2729;
				this.match(informixParser.ALL);
				}
			}

			this.state = 2732;
			this.simpleSelectStatement();
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
	public simpleSelectStatement(): SimpleSelectStatementContext {
		let _localctx: SimpleSelectStatementContext = new SimpleSelectStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 342, informixParser.RULE_simpleSelectStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2734;
			this.headSelectStatement();
			this.state = 2735;
			this.fromSelectStatement();
			this.state = 2737;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === informixParser.WHERE) {
				{
				this.state = 2736;
				this.whereStatement();
				}
			}

			this.state = 2740;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === informixParser.GROUP) {
				{
				this.state = 2739;
				this.groupByStatement();
				}
			}

			this.state = 2743;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === informixParser.HAVING) {
				{
				this.state = 2742;
				this.havingStatement();
				}
			}

			this.state = 2746;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === informixParser.UNION) {
				{
				this.state = 2745;
				this.unionSelectStatement();
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
	public whereStatement(): WhereStatementContext {
		let _localctx: WhereStatementContext = new WhereStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 344, informixParser.RULE_whereStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2748;
			this.match(informixParser.WHERE);
			this.state = 2749;
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
	public groupByStatement(): GroupByStatementContext {
		let _localctx: GroupByStatementContext = new GroupByStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 346, informixParser.RULE_groupByStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2751;
			this.match(informixParser.GROUP);
			this.state = 2752;
			this.match(informixParser.BY);
			this.state = 2753;
			this.variableOrConstantList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public havingStatement(): HavingStatementContext {
		let _localctx: HavingStatementContext = new HavingStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 348, informixParser.RULE_havingStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2755;
			this.match(informixParser.HAVING);
			this.state = 2756;
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
	public orderbyColumn(): OrderbyColumnContext {
		let _localctx: OrderbyColumnContext = new OrderbyColumnContext(this._ctx, this.state);
		this.enterRule(_localctx, 350, informixParser.RULE_orderbyColumn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2758;
			this.expression();
			this.state = 2760;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === informixParser.ASC || _la === informixParser.DESC) {
				{
				this.state = 2759;
				_la = this._input.LA(1);
				if (!(_la === informixParser.ASC || _la === informixParser.DESC)) {
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
	public orderbyStatement(): OrderbyStatementContext {
		let _localctx: OrderbyStatementContext = new OrderbyStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 352, informixParser.RULE_orderbyStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2762;
			this.match(informixParser.ORDER);
			this.state = 2763;
			this.match(informixParser.BY);
			this.state = 2764;
			this.orderbyColumn();
			this.state = 2769;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === informixParser.COMMA) {
				{
				{
				this.state = 2765;
				this.match(informixParser.COMMA);
				this.state = 2766;
				this.orderbyColumn();
				}
				}
				this.state = 2771;
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
	public sqlLoadStatement(): SqlLoadStatementContext {
		let _localctx: SqlLoadStatementContext = new SqlLoadStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 354, informixParser.RULE_sqlLoadStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2772;
			this.match(informixParser.LOAD);
			this.state = 2773;
			this.match(informixParser.FROM);
			this.state = 2776;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case informixParser.ACCEPT:
			case informixParser.ASCII:
			case informixParser.COUNT:
			case informixParser.CURRENT:
			case informixParser.FALSE:
			case informixParser.FIRST:
			case informixParser.FOUND:
			case informixParser.GROUP:
			case informixParser.HIDE:
			case informixParser.INDEX:
			case informixParser.INT_FLAG:
			case informixParser.INTERRUPT:
			case informixParser.LAST:
			case informixParser.LENGTH:
			case informixParser.LINENO:
			case informixParser.MDY:
			case informixParser.NO:
			case informixParser.NOT:
			case informixParser.NOTFOUND:
			case informixParser.NULL:
			case informixParser.PAGENO:
			case informixParser.REAL:
			case informixParser.SIZE:
			case informixParser.SQL:
			case informixParser.STATUS:
			case informixParser.TEMP:
			case informixParser.TIME:
			case informixParser.TODAY:
			case informixParser.TRUE:
			case informixParser.USER:
			case informixParser.WEEKDAY:
			case informixParser.WAIT:
			case informixParser.WORK:
			case informixParser.IDENT:
				{
				this.state = 2774;
				this.variable();
				}
				break;
			case informixParser.STRING_LITERAL:
				{
				this.state = 2775;
				this.string();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 2783;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === informixParser.DELIMITER) {
				{
				this.state = 2778;
				this.match(informixParser.DELIMITER);
				this.state = 2781;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case informixParser.ACCEPT:
				case informixParser.ASCII:
				case informixParser.COUNT:
				case informixParser.CURRENT:
				case informixParser.FALSE:
				case informixParser.FIRST:
				case informixParser.FOUND:
				case informixParser.GROUP:
				case informixParser.HIDE:
				case informixParser.INDEX:
				case informixParser.INT_FLAG:
				case informixParser.INTERRUPT:
				case informixParser.LAST:
				case informixParser.LENGTH:
				case informixParser.LINENO:
				case informixParser.MDY:
				case informixParser.NO:
				case informixParser.NOT:
				case informixParser.NOTFOUND:
				case informixParser.NULL:
				case informixParser.PAGENO:
				case informixParser.REAL:
				case informixParser.SIZE:
				case informixParser.SQL:
				case informixParser.STATUS:
				case informixParser.TEMP:
				case informixParser.TIME:
				case informixParser.TODAY:
				case informixParser.TRUE:
				case informixParser.USER:
				case informixParser.WEEKDAY:
				case informixParser.WAIT:
				case informixParser.WORK:
				case informixParser.IDENT:
					{
					this.state = 2779;
					this.variable();
					}
					break;
				case informixParser.STRING_LITERAL:
					{
					this.state = 2780;
					this.string();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
			}

			this.state = 2795;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 353, this._ctx) ) {
			case 1:
				{
				this.state = 2785;
				this.match(informixParser.INSERT);
				this.state = 2786;
				this.match(informixParser.INTO);
				this.state = 2787;
				this.tableIdentifier();
				this.state = 2792;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === informixParser.LPAREN) {
					{
					this.state = 2788;
					this.match(informixParser.LPAREN);
					this.state = 2789;
					this.columnsList();
					this.state = 2790;
					this.match(informixParser.RPAREN);
					}
				}

				}
				break;

			case 2:
				{
				this.state = 2794;
				this.sqlInsertStatement();
				}
				break;
			}
			this.state = 2797;
			this.eol();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sqlUnLoadStatement(): SqlUnLoadStatementContext {
		let _localctx: SqlUnLoadStatementContext = new SqlUnLoadStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 356, informixParser.RULE_sqlUnLoadStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2799;
			this.match(informixParser.UNLOAD);
			this.state = 2800;
			this.match(informixParser.TO);
			this.state = 2803;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case informixParser.ACCEPT:
			case informixParser.ASCII:
			case informixParser.COUNT:
			case informixParser.CURRENT:
			case informixParser.FALSE:
			case informixParser.FIRST:
			case informixParser.FOUND:
			case informixParser.GROUP:
			case informixParser.HIDE:
			case informixParser.INDEX:
			case informixParser.INT_FLAG:
			case informixParser.INTERRUPT:
			case informixParser.LAST:
			case informixParser.LENGTH:
			case informixParser.LINENO:
			case informixParser.MDY:
			case informixParser.NO:
			case informixParser.NOT:
			case informixParser.NOTFOUND:
			case informixParser.NULL:
			case informixParser.PAGENO:
			case informixParser.REAL:
			case informixParser.SIZE:
			case informixParser.SQL:
			case informixParser.STATUS:
			case informixParser.TEMP:
			case informixParser.TIME:
			case informixParser.TODAY:
			case informixParser.TRUE:
			case informixParser.USER:
			case informixParser.WEEKDAY:
			case informixParser.WAIT:
			case informixParser.WORK:
			case informixParser.IDENT:
				{
				this.state = 2801;
				this.variable();
				}
				break;
			case informixParser.STRING_LITERAL:
				{
				this.state = 2802;
				this.string();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 2810;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === informixParser.DELIMITER) {
				{
				this.state = 2805;
				this.match(informixParser.DELIMITER);
				this.state = 2808;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case informixParser.ACCEPT:
				case informixParser.ASCII:
				case informixParser.COUNT:
				case informixParser.CURRENT:
				case informixParser.FALSE:
				case informixParser.FIRST:
				case informixParser.FOUND:
				case informixParser.GROUP:
				case informixParser.HIDE:
				case informixParser.INDEX:
				case informixParser.INT_FLAG:
				case informixParser.INTERRUPT:
				case informixParser.LAST:
				case informixParser.LENGTH:
				case informixParser.LINENO:
				case informixParser.MDY:
				case informixParser.NO:
				case informixParser.NOT:
				case informixParser.NOTFOUND:
				case informixParser.NULL:
				case informixParser.PAGENO:
				case informixParser.REAL:
				case informixParser.SIZE:
				case informixParser.SQL:
				case informixParser.STATUS:
				case informixParser.TEMP:
				case informixParser.TIME:
				case informixParser.TODAY:
				case informixParser.TRUE:
				case informixParser.USER:
				case informixParser.WEEKDAY:
				case informixParser.WAIT:
				case informixParser.WORK:
				case informixParser.IDENT:
					{
					this.state = 2806;
					this.variable();
					}
					break;
				case informixParser.STRING_LITERAL:
					{
					this.state = 2807;
					this.string();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
			}

			this.state = 2812;
			this.sqlSelectStatement();
			this.state = 2813;
			this.eol();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sqlInsertStatement(): SqlInsertStatementContext {
		let _localctx: SqlInsertStatementContext = new SqlInsertStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 358, informixParser.RULE_sqlInsertStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2815;
			this.match(informixParser.INSERT);
			this.state = 2816;
			this.match(informixParser.INTO);
			this.state = 2817;
			this.tableIdentifier();
			this.state = 2822;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === informixParser.LPAREN) {
				{
				this.state = 2818;
				this.match(informixParser.LPAREN);
				this.state = 2819;
				this.columnsList();
				this.state = 2820;
				this.match(informixParser.RPAREN);
				}
			}

			this.state = 2837;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case informixParser.VALUES:
				{
				this.state = 2824;
				this.match(informixParser.VALUES);
				this.state = 2825;
				this.match(informixParser.LPAREN);
				this.state = 2826;
				this.expression();
				this.state = 2831;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === informixParser.COMMA) {
					{
					{
					this.state = 2827;
					this.match(informixParser.COMMA);
					this.state = 2828;
					this.expression();
					}
					}
					this.state = 2833;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2834;
				this.match(informixParser.RPAREN);
				}
				break;
			case informixParser.SELECT:
				{
				this.state = 2836;
				this.simpleSelectStatement();
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
	public sqlUpdateStatement(): SqlUpdateStatementContext {
		let _localctx: SqlUpdateStatementContext = new SqlUpdateStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 360, informixParser.RULE_sqlUpdateStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2839;
			this.match(informixParser.UPDATE);
			this.state = 2840;
			this.tableIdentifier();
			this.state = 2841;
			this.match(informixParser.SET);
			this.state = 2887;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 366, this._ctx) ) {
			case 1:
				{
				{
				this.state = 2842;
				this.columnsTableId();
				this.state = 2843;
				this.match(informixParser.EQUAL);
				this.state = 2844;
				this.expression();
				this.state = 2852;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === informixParser.COMMA) {
					{
					{
					this.state = 2845;
					this.match(informixParser.COMMA);
					this.state = 2846;
					this.columnsTableId();
					this.state = 2847;
					this.match(informixParser.EQUAL);
					this.state = 2848;
					this.expression();
					}
					}
					this.state = 2854;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				}
				break;

			case 2:
				{
				{
				this.state = 2865;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case informixParser.LPAREN:
					{
					this.state = 2855;
					this.match(informixParser.LPAREN);
					this.state = 2856;
					this.columnsList();
					this.state = 2857;
					this.match(informixParser.RPAREN);
					}
					break;
				case informixParser.STAR:
				case informixParser.IDENT:
					{
					this.state = 2862;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === informixParser.IDENT) {
						{
						this.state = 2859;
						this.aliasName();
						this.state = 2860;
						this.match(informixParser.DOT);
						}
					}

					this.state = 2864;
					this.match(informixParser.STAR);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2867;
				this.match(informixParser.EQUAL);
				this.state = 2885;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case informixParser.LPAREN:
					{
					this.state = 2868;
					this.match(informixParser.LPAREN);
					this.state = 2869;
					this.expression();
					this.state = 2874;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === informixParser.COMMA) {
						{
						{
						this.state = 2870;
						this.match(informixParser.COMMA);
						this.state = 2871;
						this.expression();
						}
						}
						this.state = 2876;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 2877;
					this.match(informixParser.RPAREN);
					}
					break;
				case informixParser.STAR:
				case informixParser.IDENT:
					{
					this.state = 2882;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === informixParser.IDENT) {
						{
						this.state = 2879;
						this.aliasName();
						this.state = 2880;
						this.match(informixParser.DOT);
						}
					}

					this.state = 2884;
					this.match(informixParser.STAR);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				}
				break;
			}
			this.state = 2896;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === informixParser.WHERE) {
				{
				this.state = 2889;
				this.match(informixParser.WHERE);
				this.state = 2894;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 367, this._ctx) ) {
				case 1:
					{
					this.state = 2890;
					this.condition();
					}
					break;

				case 2:
					{
					this.state = 2891;
					this.match(informixParser.CURRENT);
					this.state = 2892;
					this.match(informixParser.OF);
					this.state = 2893;
					this.cursorName();
					}
					break;
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
	public sqlDeleteStatement(): SqlDeleteStatementContext {
		let _localctx: SqlDeleteStatementContext = new SqlDeleteStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 362, informixParser.RULE_sqlDeleteStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2898;
			this.match(informixParser.DELETE);
			this.state = 2899;
			this.match(informixParser.FROM);
			this.state = 2900;
			this.tableIdentifier();
			this.state = 2908;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === informixParser.WHERE) {
				{
				this.state = 2901;
				this.match(informixParser.WHERE);
				this.state = 2906;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 369, this._ctx) ) {
				case 1:
					{
					this.state = 2902;
					this.condition();
					}
					break;

				case 2:
					{
					this.state = 2903;
					this.match(informixParser.CURRENT);
					this.state = 2904;
					this.match(informixParser.OF);
					this.state = 2905;
					this.cursorName();
					}
					break;
				}
				}
			}

			this.state = 2910;
			this.eol();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public actualParameterList(): ActualParameterListContext {
		let _localctx: ActualParameterListContext = new ActualParameterListContext(this._ctx, this.state);
		this.enterRule(_localctx, 364, informixParser.RULE_actualParameterList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2912;
			this.actualParameter();
			this.state = 2917;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === informixParser.COMMA) {
				{
				{
				this.state = 2913;
				this.match(informixParser.COMMA);
				this.state = 2914;
				this.actualParameter();
				}
				}
				this.state = 2919;
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
	public dynamicManagementStatement(): DynamicManagementStatementContext {
		let _localctx: DynamicManagementStatementContext = new DynamicManagementStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 366, informixParser.RULE_dynamicManagementStatement);
		let _la: number;
		try {
			this.state = 2943;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case informixParser.PREPARE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2920;
				this.match(informixParser.PREPARE);
				this.state = 2921;
				this.cursorName();
				this.state = 2922;
				this.match(informixParser.FROM);
				this.state = 2923;
				this.expression();
				}
				break;
			case informixParser.EXECUTE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2925;
				this.match(informixParser.EXECUTE);
				this.state = 2926;
				this.cursorName();
				this.state = 2929;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === informixParser.USING) {
					{
					this.state = 2927;
					this.match(informixParser.USING);
					this.state = 2928;
					this.variableList();
					}
				}

				}
				break;
			case informixParser.FREE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2931;
				this.match(informixParser.FREE);
				this.state = 2934;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 373, this._ctx) ) {
				case 1:
					{
					this.state = 2932;
					this.cursorName();
					}
					break;

				case 2:
					{
					this.state = 2933;
					this.statementId();
					}
					break;
				}
				}
				break;
			case informixParser.LOCK:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2936;
				this.match(informixParser.LOCK);
				this.state = 2937;
				this.match(informixParser.TABLE);
				this.state = 2938;
				this.expression();
				this.state = 2939;
				this.match(informixParser.IN);
				this.state = 2940;
				_la = this._input.LA(1);
				if (!(_la === informixParser.EXCLUSIVE || _la === informixParser.SHARE)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 2941;
				this.match(informixParser.MODE);
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
	public queryOptimizationStatement(): QueryOptimizationStatementContext {
		let _localctx: QueryOptimizationStatementContext = new QueryOptimizationStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 368, informixParser.RULE_queryOptimizationStatement);
		let _la: number;
		try {
			this.state = 2981;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 380, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2945;
				this.match(informixParser.UPDATE);
				this.state = 2946;
				this.match(informixParser.STATISTICS);
				this.state = 2950;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 375, this._ctx) ) {
				case 1:
					{
					this.state = 2947;
					this.match(informixParser.FOR);
					this.state = 2948;
					this.match(informixParser.TABLE);
					this.state = 2949;
					this.tableIdentifier();
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2952;
				this.match(informixParser.SET);
				this.state = 2953;
				this.match(informixParser.LOCK);
				this.state = 2954;
				this.match(informixParser.MODE);
				this.state = 2955;
				this.match(informixParser.TO);
				this.state = 2962;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case informixParser.WAIT:
					{
					this.state = 2956;
					this.match(informixParser.WAIT);
					this.state = 2958;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === informixParser.SECONDS) {
						{
						this.state = 2957;
						this.match(informixParser.SECONDS);
						}
					}

					}
					break;
				case informixParser.NOT:
					{
					this.state = 2960;
					this.match(informixParser.NOT);
					this.state = 2961;
					this.match(informixParser.WAIT);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2964;
				this.match(informixParser.SET);
				this.state = 2965;
				this.match(informixParser.EXPLAIN);
				this.state = 2966;
				_la = this._input.LA(1);
				if (!(_la === informixParser.OFF || _la === informixParser.ON)) {
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

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2967;
				this.match(informixParser.SET);
				this.state = 2968;
				this.match(informixParser.ISOLATION);
				this.state = 2969;
				this.match(informixParser.TO);
				this.state = 2974;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case informixParser.CURSOR:
					{
					this.state = 2970;
					this.match(informixParser.CURSOR);
					this.state = 2971;
					this.match(informixParser.STABILITY);
					}
					break;
				case informixParser.COMMITTED:
				case informixParser.DIRTY:
				case informixParser.REPEATABLE:
					{
					this.state = 2972;
					_la = this._input.LA(1);
					if (!(_la === informixParser.COMMITTED || _la === informixParser.DIRTY || _la === informixParser.REPEATABLE)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 2973;
					this.match(informixParser.READ);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2976;
				this.match(informixParser.SET);
				this.state = 2978;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === informixParser.BUFFERED) {
					{
					this.state = 2977;
					this.match(informixParser.BUFFERED);
					}
				}

				this.state = 2980;
				this.match(informixParser.LOG);
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
	public databaseDeclaration(): DatabaseDeclarationContext {
		let _localctx: DatabaseDeclarationContext = new DatabaseDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 370, informixParser.RULE_databaseDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2983;
			this.match(informixParser.DATABASE);
			{
			this.state = 2984;
			this.constantIdentifier();
			this.state = 2987;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === informixParser.ATSYMBOL) {
				{
				this.state = 2985;
				this.match(informixParser.ATSYMBOL);
				this.state = 2986;
				this.constantIdentifier();
				}
			}

			}
			this.state = 2990;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === informixParser.EXCLUSIVE) {
				{
				this.state = 2989;
				this.match(informixParser.EXCLUSIVE);
				}
			}

			this.state = 2993;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === informixParser.SEMI) {
				{
				this.state = 2992;
				this.match(informixParser.SEMI);
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
	public clientServerStatement(): ClientServerStatementContext {
		let _localctx: ClientServerStatementContext = new ClientServerStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 372, informixParser.RULE_clientServerStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2995;
			this.match(informixParser.CLOSE);
			this.state = 2996;
			this.match(informixParser.DATABASE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dataIntegrityStatement(): DataIntegrityStatementContext {
		let _localctx: DataIntegrityStatementContext = new DataIntegrityStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 374, informixParser.RULE_dataIntegrityStatement);
		try {
			this.state = 3005;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case informixParser.WHENEVER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2998;
				this.wheneverStatement();
				}
				break;
			case informixParser.BEGIN:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2999;
				this.match(informixParser.BEGIN);
				this.state = 3000;
				this.match(informixParser.WORK);
				}
				break;
			case informixParser.COMMIT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 3001;
				this.match(informixParser.COMMIT);
				this.state = 3002;
				this.match(informixParser.WORK);
				}
				break;
			case informixParser.ROLLBACK:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 3003;
				this.match(informixParser.ROLLBACK);
				this.state = 3004;
				this.match(informixParser.WORK);
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
	public wheneverStatement(): WheneverStatementContext {
		let _localctx: WheneverStatementContext = new WheneverStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 376, informixParser.RULE_wheneverStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 3007;
			this.match(informixParser.WHENEVER);
			this.state = 3008;
			this.wheneverType();
			this.state = 3009;
			this.wheneverFlow();
			this.state = 3010;
			this.eol();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public wheneverType(): WheneverTypeContext {
		let _localctx: WheneverTypeContext = new WheneverTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 378, informixParser.RULE_wheneverType);
		let _la: number;
		try {
			this.state = 3019;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case informixParser.NOT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 3012;
				this.match(informixParser.NOT);
				this.state = 3013;
				this.match(informixParser.FOUND);
				}
				break;
			case informixParser.ANY:
			case informixParser.ERROR:
			case informixParser.SQLERROR:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 3015;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === informixParser.ANY) {
					{
					this.state = 3014;
					this.match(informixParser.ANY);
					}
				}

				this.state = 3017;
				_la = this._input.LA(1);
				if (!(_la === informixParser.ERROR || _la === informixParser.SQLERROR)) {
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
			case informixParser.SQLWARNING:
			case informixParser.WARNING:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 3018;
				_la = this._input.LA(1);
				if (!(_la === informixParser.SQLWARNING || _la === informixParser.WARNING)) {
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
	public wheneverFlow(): WheneverFlowContext {
		let _localctx: WheneverFlowContext = new WheneverFlowContext(this._ctx, this.state);
		this.enterRule(_localctx, 380, informixParser.RULE_wheneverFlow);
		let _la: number;
		try {
			this.state = 3033;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case informixParser.CONTINUE:
			case informixParser.STOP:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 3021;
				_la = this._input.LA(1);
				if (!(_la === informixParser.CONTINUE || _la === informixParser.STOP)) {
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
			case informixParser.CALL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 3022;
				this.match(informixParser.CALL);
				this.state = 3023;
				this.identifier();
				}
				break;
			case informixParser.GO:
			case informixParser.GOTO:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 3027;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case informixParser.GO:
					{
					this.state = 3024;
					this.match(informixParser.GO);
					this.state = 3025;
					this.match(informixParser.TO);
					}
					break;
				case informixParser.GOTO:
					{
					this.state = 3026;
					this.match(informixParser.GOTO);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 3030;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === informixParser.COLON) {
					{
					this.state = 3029;
					this.match(informixParser.COLON);
					}
				}

				this.state = 3032;
				this.identifier();
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
	public reportDefinition(): ReportDefinitionContext {
		let _localctx: ReportDefinitionContext = new ReportDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 382, informixParser.RULE_reportDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 3035;
			this.match(informixParser.REPORT);
			this.state = 3036;
			this.identifier();
			this.state = 3038;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === informixParser.LPAREN) {
				{
				this.state = 3037;
				this.parameterList();
				}
			}

			this.state = 3041;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === informixParser.DEFINE) {
				{
				this.state = 3040;
				this.typeDeclarations();
				}
			}

			this.state = 3044;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === informixParser.OUTPUT) {
				{
				this.state = 3043;
				this.outputReport();
				}
			}

			this.state = 3052;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === informixParser.ORDER) {
				{
				this.state = 3046;
				this.match(informixParser.ORDER);
				this.state = 3048;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === informixParser.EXTERNAL) {
					{
					this.state = 3047;
					this.match(informixParser.EXTERNAL);
					}
				}

				this.state = 3050;
				this.match(informixParser.BY);
				this.state = 3051;
				this.variableList();
				}
			}

			this.state = 3055;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === informixParser.FORMAT) {
				{
				this.state = 3054;
				this.formatReport();
				}
			}

			this.state = 3057;
			this.match(informixParser.END);
			this.state = 3058;
			this.match(informixParser.REPORT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public outputReport(): OutputReportContext {
		let _localctx: OutputReportContext = new OutputReportContext(this._ctx, this.state);
		this.enterRule(_localctx, 384, informixParser.RULE_outputReport);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 3060;
			this.match(informixParser.OUTPUT);
			this.state = 3069;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === informixParser.REPORT) {
				{
				this.state = 3061;
				this.match(informixParser.REPORT);
				this.state = 3062;
				this.match(informixParser.TO);
				this.state = 3067;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case informixParser.STRING_LITERAL:
					{
					this.state = 3063;
					this.string();
					}
					break;
				case informixParser.PIPE:
					{
					this.state = 3064;
					this.match(informixParser.PIPE);
					this.state = 3065;
					this.string();
					}
					break;
				case informixParser.PRINTER:
					{
					this.state = 3066;
					this.match(informixParser.PRINTER);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
			}

			this.state = 3092;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === informixParser.BOTTOM || _la === informixParser.LEFT || _la === informixParser.PAGE || _la === informixParser.RIGHT || _la === informixParser.TOP) {
				{
				this.state = 3090;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 398, this._ctx) ) {
				case 1:
					{
					{
					this.state = 3071;
					this.match(informixParser.LEFT);
					this.state = 3072;
					this.match(informixParser.MARGIN);
					this.state = 3073;
					this.numericConstant();
					}
					}
					break;

				case 2:
					{
					{
					this.state = 3074;
					this.match(informixParser.RIGHT);
					this.state = 3075;
					this.match(informixParser.MARGIN);
					this.state = 3076;
					this.numericConstant();
					}
					}
					break;

				case 3:
					{
					{
					this.state = 3077;
					this.match(informixParser.TOP);
					this.state = 3078;
					this.match(informixParser.MARGIN);
					this.state = 3079;
					this.numericConstant();
					}
					}
					break;

				case 4:
					{
					{
					this.state = 3080;
					this.match(informixParser.BOTTOM);
					this.state = 3081;
					this.match(informixParser.MARGIN);
					this.state = 3082;
					this.numericConstant();
					}
					}
					break;

				case 5:
					{
					{
					this.state = 3083;
					this.match(informixParser.PAGE);
					this.state = 3084;
					this.match(informixParser.LENGTH);
					this.state = 3085;
					this.numericConstant();
					}
					}
					break;

				case 6:
					{
					{
					this.state = 3086;
					this.match(informixParser.TOP);
					this.state = 3087;
					this.match(informixParser.OF);
					this.state = 3088;
					this.match(informixParser.PAGE);
					this.state = 3089;
					this.string();
					}
					}
					break;
				}
				}
				this.state = 3094;
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
	public formatReport(): FormatReportContext {
		let _localctx: FormatReportContext = new FormatReportContext(this._ctx, this.state);
		this.enterRule(_localctx, 386, informixParser.RULE_formatReport);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 3095;
			this.match(informixParser.FORMAT);
			this.state = 3123;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case informixParser.EVERY:
				{
				this.state = 3096;
				this.match(informixParser.EVERY);
				this.state = 3097;
				this.match(informixParser.ROW);
				}
				break;
			case informixParser.AFTER:
			case informixParser.BEFORE:
			case informixParser.FIRST:
			case informixParser.ON:
			case informixParser.PAGE:
				{
				this.state = 3119;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 3116;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 402, this._ctx) ) {
					case 1:
						{
						this.state = 3099;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === informixParser.FIRST) {
							{
							this.state = 3098;
							this.match(informixParser.FIRST);
							}
						}

						this.state = 3101;
						this.match(informixParser.PAGE);
						this.state = 3102;
						this.match(informixParser.HEADER);
						}
						break;

					case 2:
						{
						this.state = 3103;
						this.match(informixParser.PAGE);
						this.state = 3104;
						this.match(informixParser.TRAILER);
						}
						break;

					case 3:
						{
						this.state = 3105;
						this.match(informixParser.ON);
						this.state = 3110;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case informixParser.EVERY:
							{
							this.state = 3106;
							this.match(informixParser.EVERY);
							this.state = 3107;
							this.match(informixParser.ROW);
							}
							break;
						case informixParser.LAST:
							{
							this.state = 3108;
							this.match(informixParser.LAST);
							this.state = 3109;
							this.match(informixParser.ROW);
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						}
						break;

					case 4:
						{
						this.state = 3112;
						_la = this._input.LA(1);
						if (!(_la === informixParser.AFTER || _la === informixParser.BEFORE)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 3113;
						this.match(informixParser.GROUP);
						this.state = 3114;
						this.match(informixParser.OF);
						this.state = 3115;
						this.variable();
						}
						break;
					}
					this.state = 3118;
					this.codeBlock();
					}
					}
					this.state = 3121;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === informixParser.AFTER || _la === informixParser.BEFORE || _la === informixParser.FIRST || _la === informixParser.ON || _la === informixParser.PAGE);
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
	public eol(): EolContext {
		let _localctx: EolContext = new EolContext(this._ctx, this.state);
		this.enterRule(_localctx, 388, informixParser.RULE_eol);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 3125;
			this.match(informixParser.EOL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unsignedNumber(): UnsignedNumberContext {
		let _localctx: UnsignedNumberContext = new UnsignedNumberContext(this._ctx, this.state);
		this.enterRule(_localctx, 390, informixParser.RULE_unsignedNumber);
		try {
			this.state = 3129;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case informixParser.NUM_INT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 3127;
				this.unsignedInteger();
				}
				break;
			case informixParser.NUM_REAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 3128;
				this.unsignedReal();
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
	public unsignedInteger(): UnsignedIntegerContext {
		let _localctx: UnsignedIntegerContext = new UnsignedIntegerContext(this._ctx, this.state);
		this.enterRule(_localctx, 392, informixParser.RULE_unsignedInteger);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 3131;
			this.match(informixParser.NUM_INT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unsignedReal(): UnsignedRealContext {
		let _localctx: UnsignedRealContext = new UnsignedRealContext(this._ctx, this.state);
		this.enterRule(_localctx, 394, informixParser.RULE_unsignedReal);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 3133;
			this.match(informixParser.NUM_REAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sign(): SignContext {
		let _localctx: SignContext = new SignContext(this._ctx, this.state);
		this.enterRule(_localctx, 396, informixParser.RULE_sign);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 3135;
			_la = this._input.LA(1);
			if (!(_la === informixParser.PLUS || _la === informixParser.MINUS)) {
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
	public constantIdentifier(): ConstantIdentifierContext {
		let _localctx: ConstantIdentifierContext = new ConstantIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 398, informixParser.RULE_constantIdentifier);
		let _la: number;
		try {
			this.state = 3139;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case informixParser.ACCEPT:
			case informixParser.ASCII:
			case informixParser.COUNT:
			case informixParser.CURRENT:
			case informixParser.FALSE:
			case informixParser.FIRST:
			case informixParser.FOUND:
			case informixParser.GROUP:
			case informixParser.HIDE:
			case informixParser.INDEX:
			case informixParser.INT_FLAG:
			case informixParser.INTERRUPT:
			case informixParser.LAST:
			case informixParser.LENGTH:
			case informixParser.LINENO:
			case informixParser.MDY:
			case informixParser.NO:
			case informixParser.NOT:
			case informixParser.NOTFOUND:
			case informixParser.NULL:
			case informixParser.PAGENO:
			case informixParser.REAL:
			case informixParser.SIZE:
			case informixParser.SQL:
			case informixParser.STATUS:
			case informixParser.TEMP:
			case informixParser.TIME:
			case informixParser.TODAY:
			case informixParser.TRUE:
			case informixParser.USER:
			case informixParser.WEEKDAY:
			case informixParser.WAIT:
			case informixParser.WORK:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 3137;
				_la = this._input.LA(1);
				if (!(_la === informixParser.ACCEPT || _la === informixParser.ASCII || _la === informixParser.COUNT || _la === informixParser.CURRENT || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (informixParser.FALSE - 101)) | (1 << (informixParser.FIRST - 101)) | (1 << (informixParser.FOUND - 101)) | (1 << (informixParser.GROUP - 101)) | (1 << (informixParser.HIDE - 101)))) !== 0) || ((((_la - 136)) & ~0x1F) === 0 && ((1 << (_la - 136)) & ((1 << (informixParser.INDEX - 136)) | (1 << (informixParser.INT_FLAG - 136)) | (1 << (informixParser.INTERRUPT - 136)) | (1 << (informixParser.LAST - 136)) | (1 << (informixParser.LENGTH - 136)) | (1 << (informixParser.LINENO - 136)))) !== 0) || ((((_la - 176)) & ~0x1F) === 0 && ((1 << (_la - 176)) & ((1 << (informixParser.MDY - 176)) | (1 << (informixParser.NO - 176)) | (1 << (informixParser.NOT - 176)) | (1 << (informixParser.NOTFOUND - 176)) | (1 << (informixParser.NULL - 176)))) !== 0) || _la === informixParser.PAGENO || _la === informixParser.REAL || ((((_la - 252)) & ~0x1F) === 0 && ((1 << (_la - 252)) & ((1 << (informixParser.SIZE - 252)) | (1 << (informixParser.SQL - 252)) | (1 << (informixParser.STATUS - 252)) | (1 << (informixParser.TEMP - 252)) | (1 << (informixParser.TIME - 252)) | (1 << (informixParser.TODAY - 252)) | (1 << (informixParser.TRUE - 252)))) !== 0) || ((((_la - 290)) & ~0x1F) === 0 && ((1 << (_la - 290)) & ((1 << (informixParser.USER - 290)) | (1 << (informixParser.WEEKDAY - 290)) | (1 << (informixParser.WAIT - 290)) | (1 << (informixParser.WORK - 290)))) !== 0))) {
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
			case informixParser.IDENT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 3138;
				this.identifier();
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

	private static readonly _serializedATNSegments: number = 6;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\u0160\u0C48\x04" +
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
		"\x04\x9B\t\x9B\x04\x9C\t\x9C\x04\x9D\t\x9D\x04\x9E\t\x9E\x04\x9F\t\x9F" +
		"\x04\xA0\t\xA0\x04\xA1\t\xA1\x04\xA2\t\xA2\x04\xA3\t\xA3\x04\xA4\t\xA4" +
		"\x04\xA5\t\xA5\x04\xA6\t\xA6\x04\xA7\t\xA7\x04\xA8\t\xA8\x04\xA9\t\xA9" +
		"\x04\xAA\t\xAA\x04\xAB\t\xAB\x04\xAC\t\xAC\x04\xAD\t\xAD\x04\xAE\t\xAE" +
		"\x04\xAF\t\xAF\x04\xB0\t\xB0\x04\xB1\t\xB1\x04\xB2\t\xB2\x04\xB3\t\xB3" +
		"\x04\xB4\t\xB4\x04\xB5\t\xB5\x04\xB6\t\xB6\x04\xB7\t\xB7\x04\xB8\t\xB8" +
		"\x04\xB9\t\xB9\x04\xBA\t\xBA\x04\xBB\t\xBB\x04\xBC\t\xBC\x04\xBD\t\xBD" +
		"\x04\xBE\t\xBE\x04\xBF\t\xBF\x04\xC0\t\xC0\x04\xC1\t\xC1\x04\xC2\t\xC2" +
		"\x04\xC3\t\xC3\x04\xC4\t\xC4\x04\xC5\t\xC5\x04\xC6\t\xC6\x04\xC7\t\xC7" +
		"\x04\xC8\t\xC8\x04\xC9\t\xC9\x03\x02\x05\x02\u0194\n\x02\x03\x02\x05\x02" +
		"\u0197\n\x02\x03\x02\x05\x02\u019A\n\x02\x03\x02\x03\x02\x05\x02\u019E" +
		"\n\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x05\x04\u01A5\n\x04\x03" +
		"\x04\x03\x04\x03\x04\x05\x04\u01AA\n\x04\x03\x04\x05\x04\u01AD\n\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x06\x05\u01B6\n\x05" +
		"\r\x05\x0E\x05\u01B7\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x06" +
		"\x07\u01C0\n\x07\r\x07\x0E\x07\u01C1\x03\b\x03\b\x05\b\u01C6\n\b\x03\t" +
		"\x03\t\x03\t\x05\t\u01CB\n\t\x03\t\x03\t\x03\t\x05\t\u01D0\n\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\n\x03\n\x07\n\u01D8\n\n\f\n\x0E\n\u01DB\v\n\x03\n\x03" +
		"\n\x03\v\x03\v\x03\v\x07\v\u01E2\n\v\f\v\x0E\v\u01E5\v\v\x03\f\x03\f\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x05\f\u01EE\n\f\x03\f\x03\f\x03\r\x06\r\u01F3" +
		"\n\r\r\r\x0E\r\u01F4\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x07\x0E\u01FB\n\x0E" +
		"\f\x0E\x0E\x0E\u01FE\v\x0E\x03\x0F\x03\x0F\x03\x0F\x07\x0F\u0203\n\x0F" +
		"\f\x0F\x0E\x0F\u0206\v\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x07\x0F\u0210\n\x0F\f\x0F\x0E\x0F\u0213\v\x0F\x05" +
		"\x0F\u0215\n\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10\u021B\n\x10\x03" +
		"\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x05\x12\u0225" +
		"\n\x12\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14" +
		"\x05\x14\u022F\n\x14\x03\x14\x03\x14\x05\x14\u0233\n\x14\x03\x14\x03\x14" +
		"\x03\x14\x03\x14\x03\x14\x05\x14\u023A\n\x14\x05\x14\u023C\n\x14\x03\x15" +
		"\x03\x15\x03\x15\x03\x15\x03\x15\x05\x15\u0243\n\x15\x03\x15\x03\x15\x03" +
		"\x15\x03\x15\x03\x15\x03\x15\x03\x15\x05\x15\u024C\n\x15\x05\x15\u024E" +
		"\n\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x05\x16\u0255\n\x16\x03" +
		"\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03" +
		"\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03" +
		"\x17\x03\x17\x03\x17\x05\x17\u026C\n\x17\x03\x18\x03\x18\x03\x18\x03\x18" +
		"\x03\x18\x05\x18\u0273\n\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03" +
		"\x18\x03\x18\x05\x18\u027C\n\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18" +
		"\x03\x18\x03\x18\x05\x18\u0285\n\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03" +
		"\x18\x03\x18\x03\x18\x05\x18\u028E\n\x18\x03\x18\x03\x18\x03\x18\x03\x18" +
		"\x03\x18\x03\x18\x03\x18\x05\x18\u0297\n\x18\x03\x18\x03\x18\x03\x18\x03" +
		"\x18\x03\x18\x03\x18\x03\x18\x05\x18\u02A0\n\x18\x03\x18\x03\x18\x03\x18" +
		"\x03\x18\x03\x18\x05\x18\u02A7\n\x18\x03\x19\x03\x19\x03\x1A\x03\x1A\x05" +
		"\x1A\u02AD\n\x1A\x03\x1B\x03\x1B\x05\x1B\u02B1\n\x1B\x03\x1C\x03\x1C\x05" +
		"\x1C\u02B5\n\x1C\x03\x1D\x03\x1D\x05\x1D\u02B9\n\x1D\x03\x1E\x03\x1E\x05" +
		"\x1E\u02BD\n\x1E\x03\x1F\x03\x1F\x05\x1F\u02C1\n\x1F\x03 \x03 \x03 \x03" +
		" \x03 \x05 \u02C8\n \x03!\x03!\x03!\x05!\u02CD\n!\x03\"\x03\"\x03\"\x03" +
		"\"\x03\"\x07\"\u02D4\n\"\f\"\x0E\"\u02D7\v\"\x03\"\x03\"\x03\"\x03\"\x03" +
		"\"\x03\"\x03\"\x03\"\x05\"\u02E1\n\"\x03#\x03#\x03#\x03#\x03#\x03#\x03" +
		"#\x03#\x03#\x05#\u02EC\n#\x03#\x03#\x03$\x03$\x03$\x03$\x03$\x03$\x05" +
		"$\u02F6\n$\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x05%\u0300\n%\x03&" +
		"\x03&\x03\'\x03\'\x03\'\x05\'\u0307\n\'\x03\'\x03\'\x03(\x03(\x06(\u030D" +
		"\n(\r(\x0E(\u030E\x03)\x03)\x03*\x03*\x05*\u0315\n*\x03+\x03+\x03+\x03" +
		"+\x05+\u031B\n+\x03+\x03+\x03+\x03+\x03+\x05+\u0322\n+\x03,\x03,\x03," +
		"\x05,\u0327\n,\x03,\x03,\x03,\x03,\x03,\x03,\x05,\u032F\n,\x03,\x03,\x03" +
		",\x03,\x05,\u0335\n,\x03-\x03-\x03-\x03-\x03-\x03-\x07-\u033D\n-\f-\x0E" +
		"-\u0340\v-\x03.\x03.\x03.\x03.\x03.\x03.\x07.\u0348\n.\f.\x0E.\u034B\v" +
		".\x05.\u034D\n.\x03.\x05.\u0350\n.\x03.\x03.\x03.\x03.\x07.\u0356\n.\f" +
		".\x0E.\u0359\v.\x05.\u035B\n.\x03/\x03/\x030\x030\x050\u0361\n0\x031\x03" +
		"1\x051\u0365\n1\x031\x031\x031\x032\x032\x032\x032\x072\u036E\n2\f2\x0E" +
		"2\u0371\v2\x052\u0373\n2\x033\x033\x033\x073\u0378\n3\f3\x0E3\u037B\v" +
		"3\x034\x034\x034\x054\u0380\n4\x034\x034\x034\x034\x054\u0386\n4\x034" +
		"\x034\x034\x034\x054\u038C\n4\x034\x034\x054\u0390\n4\x034\x034\x034\x03" +
		"4\x054\u0396\n4\x034\x034\x034\x034\x034\x034\x034\x034\x054\u03A0\n4" +
		"\x034\x034\x034\x034\x034\x054\u03A7\n4\x034\x034\x034\x034\x034\x034" +
		"\x034\x034\x034\x034\x034\x034\x034\x034\x034\x034\x034\x034\x034\x05" +
		"4\u03BC\n4\x035\x035\x035\x055\u03C1\n5\x035\x035\x035\x035\x035\x055" +
		"\u03C8\n5\x035\x035\x035\x055\u03CD\n5\x035\x035\x035\x035\x055\u03D3" +
		"\n5\x035\x035\x035\x035\x055\u03D9\n5\x036\x036\x036\x036\x056\u03DF\n" +
		"6\x037\x037\x037\x037\x038\x038\x038\x078\u03E8\n8\f8\x0E8\u03EB\v8\x03" +
		"9\x059\u03EE\n9\x039\x039\x03:\x03:\x03:\x03:\x05:\u03F6\n:\x03:\x07:" +
		"\u03F9\n:\f:\x0E:\u03FC\v:\x03;\x03;\x03<\x03<\x03<\x07<\u0403\n<\f<\x0E" +
		"<\u0406\v<\x03=\x03=\x03=\x05=\u040B\n=\x03=\x03=\x03=\x05=\u0410\n=\x03" +
		"=\x03=\x03=\x05=\u0415\n=\x03=\x03=\x03=\x05=\u041A\n=\x03=\x03=\x03=" +
		"\x05=\u041F\n=\x03=\x03=\x03=\x07=\u0424\n=\f=\x0E=\u0427\v=\x05=\u0429" +
		"\n=\x03=\x03=\x03=\x03=\x03=\x05=\u0430\n=\x03=\x03=\x03=\x07=\u0435\n" +
		"=\f=\x0E=\u0438\v=\x05=\u043A\n=\x03=\x03=\x03=\x03=\x03=\x03=\x03=\x07" +
		"=\u0443\n=\f=\x0E=\u0446\v=\x03=\x03=\x03=\x03=\x03=\x03=\x03=\x07=\u044F" +
		"\n=\f=\x0E=\u0452\v=\x03=\x03=\x03=\x03=\x03=\x03=\x03=\x03=\x03=\x03" +
		"=\x03=\x03=\x03=\x03=\x03=\x03=\x03=\x05=\u0465\n=\x03>\x03>\x03>\x03" +
		">\x06>\u046B\n>\r>\x0E>\u046C\x03>\x03>\x03?\x03?\x03?\x03?\x03?\x05?" +
		"\u0476\n?\x03@\x03@\x03@\x03A\x03A\x03A\x03A\x05A\u047F\nA\x03B\x03B\x03" +
		"C\x03C\x03D\x03D\x03E\x03E\x03F\x03F\x05F\u048B\nF\x03G\x03G\x03H\x03" +
		"H\x03H\x03H\x03H\x03H\x03H\x03H\x05H\u0497\nH\x03H\x05H\u049A\nH\x03I" +
		"\x03I\x03I\x03I\x03I\x03I\x07I\u04A2\nI\fI\x0EI\u04A5\vI\x05I\u04A7\n" +
		"I\x03J\x03J\x03J\x07J\u04AC\nJ\fJ\x0EJ\u04AF\vJ\x03K\x03K\x03K\x07K\u04B4" +
		"\nK\fK\x0EK\u04B7\vK\x03L\x03L\x03L\x03L\x07L\u04BD\nL\fL\x0EL\u04C0\v" +
		"L\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x03" +
		"M\x05M\u04D0\nM\x03N\x05N\u04D3\nN\x03N\x03N\x03N\x03N\x07N\u04D9\nN\f" +
		"N\x0EN\u04DC\vN\x03O\x03O\x03P\x03P\x03P\x03P\x07P\u04E4\nP\fP\x0EP\u04E7" +
		"\vP\x03Q\x03Q\x03R\x05R\u04EC\nR\x03R\x03R\x03R\x03R\x03R\x03R\x03R\x03" +
		"R\x03R\x05R\u04F7\nR\x03R\x03R\x05R\u04FB\nR\x03S\x03S\x03S\x03S\x03S" +
		"\x07S\u0502\nS\fS\x0ES\u0505\vS\x05S\u0507\nS\x03S\x05S\u050A\nS\x03T" +
		"\x03T\x05T\u050E\nT\x03U\x03U\x03U\x03U\x05U\u0514\nU\x03V\x03V\x03V\x03" +
		"V\x03V\x03V\x05V\u051C\nV\x03W\x03W\x03W\x03W\x05W\u0522\nW\x03X\x03X" +
		"\x05X\u0526\nX\x03Y\x03Y\x03Z\x03Z\x03[\x03[\x03[\x03[\x07[\u0530\n[\f" +
		"[\x0E[\u0533\v[\x03[\x03[\x03\\\x03\\\x05\\\u0539\n\\\x03\\\x03\\\x03" +
		"\\\x03\\\x03\\\x03\\\x05\\\u0541\n\\\x05\\\u0543\n\\\x03]\x03]\x03^\x03" +
		"^\x03_\x03_\x05_\u054B\n_\x03`\x03`\x05`\u054F\n`\x03a\x03a\x03a\x03a" +
		"\x05a\u0555\na\x03a\x03a\x05a\u0559\na\x05a\u055B\na\x03a\x03a\x03a\x03" +
		"b\x03b\x03b\x05b\u0563\nb\x03c\x03c\x03c\x05c\u0568\nc\x03c\x03c\x03c" +
		"\x03d\x03d\x03d\x03d\x03d\x03d\x05d\u0573\nd\x03d\x03d\x05d\u0577\nd\x03" +
		"d\x03d\x03d\x03d\x03e\x03e\x03e\x03e\x03f\x03f\x03g\x03g\x03h\x03h\x03" +
		"i\x03i\x03i\x03i\x05i\u058B\ni\x03i\x03i\x05i\u058F\ni\x03i\x03i\x05i" +
		"\u0593\ni\x03i\x03i\x05i\u0597\ni\x03i\x03i\x03i\x03i\x03j\x03j\x03j\x07" +
		"j\u05A0\nj\fj\x0Ej\u05A3\vj\x03k\x03k\x03k\x07k\u05A8\nk\fk\x0Ek\u05AB" +
		"\vk\x03l\x03l\x03l\x03l\x03l\x05l\u05B2\nl\x07l\u05B4\nl\fl\x0El\u05B7" +
		"\vl\x03l\x03l\x05l\u05BB\nl\x05l\u05BD\nl\x03l\x03l\x03l\x03l\x03l\x03" +
		"l\x03l\x03l\x07l\u05C7\nl\fl\x0El\u05CA\vl\x03l\x03l\x05l\u05CE\nl\x03" +
		"l\x03l\x05l\u05D2\nl\x03m\x03m\x03m\x03m\x05m\u05D8\nm\x03n\x03n\x03n" +
		"\x03n\x03n\x03n\x03n\x05n\u05E1\nn\x03o\x03o\x03p\x03p\x03p\x03p\x03p" +
		"\x03p\x03p\x03p\x03p\x05p\u05EE\np\x05p\u05F0\np\x03q\x03q\x03q\x03q\x03" +
		"r\x03r\x03r\x03r\x03r\x03r\x03r\x03r\x03r\x03r\x03r\x03r\x05r\u0602\n" +
		"r\x05r\u0604\nr\x03r\x03r\x03r\x03r\x03r\x03r\x03r\x03r\x03r\x03r\x03" +
		"r\x03r\x07r\u0612\nr\fr\x0Er\u0615\vr\x03r\x03r\x03r\x03r\x07r\u061B\n" +
		"r\fr\x0Er\u061E\vr\x03r\x03r\x03r\x03r\x03r\x03r\x07r\u0626\nr\fr\x0E" +
		"r\u0629\vr\x05r\u062B\nr\x03r\x03r\x03r\x03r\x07r\u0631\nr\fr\x0Er\u0634" +
		"\vr\x03r\x03r\x03r\x03r\x07r\u063A\nr\fr\x0Er\u063D\vr\x05r\u063F\nr\x03" +
		"s\x03s\x03s\x03s\x03s\x03s\x03s\x03s\x03s\x05s\u064A\ns\x03s\x03s\x03" +
		"s\x03s\x05s\u0650\ns\x05s\u0652\ns\x05s\u0654\ns\x03t\x03t\x03t\x07t\u0659" +
		"\nt\ft\x0Et\u065C\vt\x03u\x03u\x03u\x03u\x03u\x03u\x03u\x03u\x05u\u0666" +
		"\nu\x05u\u0668\nu\x03u\x03u\x03u\x03u\x03u\x03u\x03u\x03u\x03u\x03u\x03" +
		"u\x03u\x03u\x03u\x03u\x03u\x03u\x03u\x03u\x03u\x07u\u067E\nu\fu\x0Eu\u0681" +
		"\vu\x05u\u0683\nu\x03u\x03u\x03u\x03u\x03u\x03u\x03u\x03u\x05u\u068D\n" +
		"u\x03u\x03u\x03u\x03u\x03u\x03u\x05u\u0695\nu\x03u\x05u\u0698\nu\x03u" +
		"\x03u\x05u\u069C\nu\x03u\x03u\x03u\x03u\x03u\x03u\x03u\x03u\x05u\u06A6" +
		"\nu\x03u\x03u\x03u\x03u\x03u\x03u\x03u\x03u\x07u\u06B0\nu\fu\x0Eu\u06B3" +
		"\vu\x05u\u06B5\nu\x03u\x03u\x05u\u06B9\nu\x03v\x03v\x03v\x03v\x03v\x05" +
		"v\u06C0\nv\x03v\x03v\x05v\u06C4\nv\x03v\x03v\x03v\x03v\x03v\x03v\x05v" +
		"\u06CC\nv\x03v\x03v\x03v\x03v\x05v\u06D2\nv\x05v\u06D4\nv\x05v\u06D6\n" +
		"v\x03w\x03w\x03w\x05w\u06DB\nw\x03w\x03w\x03x\x03x\x03x\x07x\u06E2\nx" +
		"\fx\x0Ex\u06E5\vx\x03y\x03y\x03y\x07y\u06EA\ny\fy\x0Ey\u06ED\vy\x03z\x03" +
		"z\x03z\x03z\x03z\x03z\x03z\x03z\x03z\x03z\x03z\x03z\x03z\x03z\x03z\x03" +
		"z\x05z\u06FF\nz\x03{\x03{\x03{\x03{\x03{\x05{\u0706\n{\x03{\x03{\x03{" +
		"\x03{\x03{\x03{\x03{\x05{\u070F\n{\x03|\x03|\x03}\x05}\u0714\n}\x03}\x03" +
		"}\x03}\x07}\u0719\n}\f}\x0E}\u071C\v}\x03~\x03~\x03~\x03~\x03~\x03\x7F" +
		"\x03\x7F\x06\x7F\u0725\n\x7F\r\x7F\x0E\x7F\u0726\x03\x80\x03\x80\x03\x80" +
		"\x03\x80\x03\x80\x03\x80\x03\x80\x03\x80\x03\x80\x03\x80\x03\x80\x03\x80" +
		"\x03\x80\x05\x80\u0736\n\x80\x03\x80\x05\x80\u0739\n\x80\x03\x80\x03\x80" +
		"\x05\x80\u073D\n\x80\x03\x80\x06\x80\u0740\n\x80\r\x80\x0E\x80\u0741\x03" +
		"\x80\x03\x80\x03\x80\x05\x80\u0747\n\x80\x03\x81\x03\x81\x03\x81\x03\x81" +
		"\x03\x81\x03\x81\x05\x81\u074F\n\x81\x03\x81\x07\x81\u0752\n\x81\f\x81" +
		"\x0E\x81\u0755\v\x81\x03\x81\x03\x81\x05\x81\u0759\n\x81\x03\x82\x03\x82" +
		"\x03\x82\x03\x82\x05\x82\u075F\n\x82\x03\x83\x03\x83\x03\x83\x03\x83\x03" +
		"\x83\x03\x83\x06\x83\u0767\n\x83\r\x83\x0E\x83\u0768\x03\x84\x03\x84\x03" +
		"\x84\x03\x84\x03\x84\x03\x84\x07\x84\u0771\n\x84\f\x84\x0E\x84\u0774\v" +
		"\x84\x03\x84\x03\x84\x03\x84\x07\x84\u0779\n\x84\f\x84\x0E\x84\u077C\v" +
		"\x84\x03\x84\x03\x84\x03\x84\x03\x84\x03\x84\x03\x84\x03\x84\x05\x84\u0785" +
		"\n\x84\x05\x84\u0787\n\x84\x03\x84\x05\x84\u078A\n\x84\x03\x84\x03\x84" +
		"\x03\x85\x03\x85\x03\x85\x03\x85\x07\x85\u0792\n\x85\f\x85\x0E\x85\u0795" +
		"\v\x85\x03\x85\x05\x85\u0798\n\x85\x03\x86\x03\x86\x03\x86\x03\x86\x07" +
		"\x86\u079E\n\x86\f\x86\x0E\x86\u07A1\v\x86\x03\x86\x05\x86\u07A4\n\x86" +
		"\x03\x87\x03\x87\x03\x87\x03\x87\x07\x87\u07AA\n\x87\f\x87\x0E\x87\u07AD" +
		"\v\x87\x03\x87\x05\x87\u07B0\n\x87\x03\x87\x03\x87\x05\x87\u07B4\n\x87" +
		"\x03\x87\x03\x87\x03\x87\x05\x87\u07B9\n\x87\x03\x87\x05\x87\u07BC\n\x87" +
		"\x03\x87\x03\x87\x03\x87\x03\x87\x03\x87\x03\x87\x05\x87\u07C4\n\x87\x07" +
		"\x87\u07C6\n\x87\f\x87\x0E\x87\u07C9\v\x87\x03\x87\x03\x87\x05\x87\u07CD" +
		"\n\x87\x03\x88\x03\x88\x03\x88\x03\x88\x03\x88\x03\x88\x03\x88\x03\x88" +
		"\x03\x88\x03\x88\x03\x88\x03\x88\x03\x88\x03\x88\x05\x88\u07DD\n\x88\x03" +
		"\x89\x03\x89\x03\x89\x03\x89\x05\x89\u07E3\n\x89\x03\x89\x03\x89\x03\x89" +
		"\x03\x89\x05\x89\u07E9\n\x89\x05\x89\u07EB\n\x89\x03\x8A\x03\x8A\x07\x8A" +
		"\u07EF\n\x8A\f\x8A\x0E\x8A\u07F2\v\x8A\x03\x8B\x03\x8B\x03\x8B\x03\x8B" +
		"\x03\x8B\x03\x8B\x07\x8B\u07FA\n\x8B\f\x8B\x0E\x8B\u07FD\v\x8B\x03\x8B" +
		"\x03\x8B\x05\x8B\u0801\n\x8B\x03\x8B\x03\x8B\x03\x8B\x07\x8B\u0806\n\x8B" +
		"\f\x8B\x0E\x8B\u0809\v\x8B\x03\x8B\x03\x8B\x05\x8B\u080D\n\x8B\x03\x8B" +
		"\x03\x8B\x03\x8B\x05\x8B\u0812\n\x8B\x03\x8B\x05\x8B\u0815\n\x8B\x03\x8B" +
		"\x03\x8B\x05\x8B\u0819\n\x8B\x03\x8B\x06\x8B\u081C\n\x8B\r\x8B\x0E\x8B" +
		"\u081D\x03\x8B\x03\x8B\x03\x8B\x05\x8B\u0823\n\x8B\x03\x8C\x03\x8C\x03" +
		"\x8C\x03\x8C\x03\x8C\x05\x8C\u082A\n\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8C" +
		"\x07\x8C\u0830\n\x8C\f\x8C\x0E\x8C\u0833\v\x8C\x03\x8C\x03\x8C\x05\x8C" +
		"\u0837\n\x8C\x03\x8C\x05\x8C\u083A\n\x8C\x03\x8C\x06\x8C\u083D\n\x8C\r" +
		"\x8C\x0E\x8C\u083E\x03\x8C\x03\x8C\x03\x8C\x05\x8C\u0844\n\x8C\x03\x8D" +
		"\x03\x8D\x03\x8D\x03\x8D\x03\x8D\x03\x8D\x03\x8D\x03\x8D\x05\x8D\u084E" +
		"\n\x8D\x03\x8D\x03\x8D\x05\x8D\u0852\n\x8D\x03\x8D\x03\x8D\x05\x8D\u0856" +
		"\n\x8D\x05\x8D\u0858\n\x8D\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x05\x8E\u085E" +
		"\n\x8E\x03\x8E\x03\x8E\x07\x8E\u0862\n\x8E\f\x8E\x0E\x8E\u0865\v\x8E\x03" +
		"\x8E\x03\x8E\x03\x8E\x03\x8E\x05\x8E\u086B\n\x8E\x03\x8E\x03\x8E\x07\x8E" +
		"\u086F\n\x8E\f\x8E\x0E\x8E\u0872\v\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E" +
		"\x05\x8E\u0878\n\x8E\x03\x8E\x03\x8E\x07\x8E\u087C\n\x8E\f\x8E\x0E\x8E" +
		"\u087F\v\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x05\x8E\u0885\n\x8E\x03\x8F" +
		"\x03\x8F\x05\x8F\u0889\n\x8F\x03\x90\x03\x90\x03\x90\x07\x90\u088E\n\x90" +
		"\f\x90\x0E\x90\u0891\v\x90\x03\x90\x03\x90\x03\x90\x03\x91\x03\x91\x03" +
		"\x91\x05\x91\u0899\n\x91\x03\x91\x03\x91\x03\x91\x03\x91\x05\x91\u089F" +
		"\n\x91\x05\x91\u08A1\n\x91\x03\x92\x03\x92\x03\x92\x03\x92\x03\x92\x03" +
		"\x92\x03\x92\x03\x92\x03\x92\x03\x92\x05\x92\u08AD\n\x92\x05\x92\u08AF" +
		"\n\x92\x03\x93\x03\x93\x03\x93\x07\x93\u08B4\n\x93\f\x93\x0E\x93\u08B7" +
		"\v\x93\x03\x94\x03\x94\x03\x94\x03\x94\x03\x94\x03\x95\x03\x95\x03\x95" +
		"\x03\x95\x03\x95\x03\x95\x03\x95\x03\x95\x03\x95\x03\x95\x03\x95\x03\x95" +
		"\x03\x95\x03\x95\x03\x95\x03\x95\x03\x95\x03\x95\x03\x95\x03\x95\x03\x95" +
		"\x03\x95\x05\x95\u08D4\n\x95\x03\x95\x03\x95\x03\x95\x03\x95\x03\x95\x03" +
		"\x95\x03\x95\x03\x95\x03\x95\x03\x95\x03\x95\x03\x95\x03\x95\x03\x95\x03" +
		"\x95\x03\x95\x03\x95\x03\x95\x03\x95\x03\x95\x03\x95\x03\x95\x03\x95\x03" +
		"\x95\x03\x95\x03\x95\x03\x95\x03\x95\x03\x95\x03\x95\x03\x95\x05\x95\u08F5" +
		"\n\x95\x03\x96\x03\x96\x03\x96\x03\x96\x07\x96\u08FB\n\x96\f\x96\x0E\x96" +
		"\u08FE\v\x96\x03\x97\x03\x97\x03\x97\x03\x97\x03\x97\x05\x97\u0905\n\x97" +
		"\x03\x97\x03\x97\x05\x97\u0909\n\x97\x03\x97\x03\x97\x03\x97\x03\x97\x03" +
		"\x97\x03\x97\x03\x97\x03\x97\x03\x97\x03\x97\x03\x97\x03\x97\x03\x97";
	private static readonly _serializedATNSegment1: string =
		"\x03\x97\x03\x97\x03\x97\x05\x97\u091B\n\x97\x03\x97\x03\x97\x03\x97\x03" +
		"\x97\x03\x97\x03\x97\x03\x97\x05\x97\u0924\n\x97\x03\x97\x03\x97\x03\x97" +
		"\x03\x97\x03\x97\x03\x97\x03\x97\x03\x97\x03\x97\x03\x97\x03\x97\x03\x97" +
		"\x03\x97\x03\x97\x03\x97\x03\x97\x03\x97\x03\x97\x03\x97\x03\x97\x03\x97" +
		"\x03\x97\x03\x97\x03\x97\x03\x97\x03\x97\x03\x97\x03\x97\x03\x97\x03\x97" +
		"\x03\x97\x05\x97\u0945\n\x97\x03\x97\x05\x97\u0948\n\x97\x03\x97\x03\x97" +
		"\x03\x97\x03\x97\x03\x97\x07\x97\u094F\n\x97\f\x97\x0E\x97\u0952\v\x97" +
		"\x03\x97\x03\x97\x03\x97\x05\x97\u0957\n\x97\x05\x97\u0959\n\x97\x03\x98" +
		"\x03\x98\x03\x98\x03\x98\x03\x98\x03\x98\x03\x98\x05\x98\u0962\n\x98\x03" +
		"\x99\x03\x99\x03\x99\x03\x99\x03\x99\x03\x99\x03\x99\x03\x99\x03\x99\x05" +
		"\x99\u096D\n\x99\x03\x99\x03\x99\x03\x99\x03\x99\x03\x99\x03\x99\x05\x99" +
		"\u0975\n\x99\x05\x99\u0977\n\x99\x03\x99\x03\x99\x05\x99\u097B\n\x99\x03" +
		"\x99\x03\x99\x03\x99\x03\x99\x05\x99\u0981\n\x99\x03\x99\x03\x99\x03\x99" +
		"\x05\x99\u0986\n\x99\x05\x99\u0988\n\x99\x03\x99\x03\x99\x03\x99\x03\x99" +
		"\x03\x99\x03\x99\x03\x99\x03\x99\x03\x99\x03\x99\x05\x99\u0994\n\x99\x03" +
		"\x99\x03\x99\x03\x99\x05\x99\u0999\n\x99\x03\x99\x03\x99\x03\x99\x03\x99" +
		"\x03\x99\x03\x99\x03\x99\x03\x99\x05\x99\u09A3\n\x99\x03\x99\x03\x99\x03" +
		"\x99\x03\x99\x05\x99\u09A9\n\x99\x05\x99\u09AB\n\x99\x03\x9A\x03\x9A\x03" +
		"\x9A\x07\x9A\u09B0\n\x9A\f\x9A\x0E\x9A\u09B3\v\x9A\x03\x9B\x03\x9B\x03" +
		"\x9C\x03\x9C\x03\x9D\x03\x9D\x03\x9E\x03\x9E\x03\x9E\x03\x9E\x03\x9E\x03" +
		"\x9E\x05\x9E\u09C1\n\x9E\x05\x9E\u09C3\n\x9E\x05\x9E\u09C5\n\x9E\x03\x9E" +
		"\x03\x9E\x05\x9E\u09C9\n\x9E\x03\x9E\x03\x9E\x03\x9E\x03\x9E\x03\x9E\x07" +
		"\x9E\u09D0\n\x9E\f\x9E\x0E\x9E\u09D3\v\x9E\x05\x9E\u09D5\n\x9E\x03\x9E" +
		"\x03\x9E\x03\x9E\x05\x9E\u09DA\n\x9E\x05\x9E\u09DC\n\x9E\x03\x9F\x03\x9F" +
		"\x03\x9F\x03\x9F\x03\x9F\x05\x9F\u09E3\n\x9F\x03\x9F\x03\x9F\x03\x9F\x03" +
		"\x9F\x03\x9F\x03\x9F\x07\x9F\u09EB\n\x9F\f\x9F\x0E\x9F\u09EE\v\x9F\x03" +
		"\x9F\x03\x9F\x03\x9F\x03\x9F\x05\x9F\u09F4\n\x9F\x03\x9F\x03\x9F\x05\x9F" +
		"\u09F8\n\x9F\x03\x9F\x03\x9F\x03\x9F\x05\x9F\u09FD\n\x9F\x03\x9F\x03\x9F" +
		"\x03\x9F\x05\x9F\u0A02\n\x9F\x03\x9F\x03\x9F\x03\x9F\x03\x9F\x03\x9F\x05" +
		"\x9F\u0A09\n\x9F\x03\x9F\x03\x9F\x05\x9F\u0A0D\n\x9F\x03\x9F\x05\x9F\u0A10" +
		"\n\x9F\x03\x9F\x03\x9F\x03\x9F\x03\x9F\x03\x9F\x03\x9F\x03\x9F\x05\x9F" +
		"\u0A19\n\x9F\x03\x9F\x03\x9F\x03\x9F\x05\x9F\u0A1E\n\x9F\x07\x9F\u0A20" +
		"\n\x9F\f\x9F\x0E\x9F\u0A23\v\x9F\x03\x9F\x03\x9F\x03\x9F\x03\x9F\x03\x9F" +
		"\x05\x9F\u0A2A\n\x9F\x03\xA0\x03\xA0\x03\xA0\x03\xA0\x03\xA0\x03\xA0\x05" +
		"\xA0\u0A32\n\xA0\x03\xA1\x03\xA1\x03\xA2\x03\xA2\x03\xA2\x05\xA2\u0A39" +
		"\n\xA2\x03\xA2\x03\xA2\x03\xA2\x03\xA2\x05\xA2\u0A3F\n\xA2\x05\xA2\u0A41" +
		"\n\xA2\x03\xA3\x03\xA3\x05\xA3\u0A45\n\xA3\x03\xA3\x03\xA3\x03\xA3\x05" +
		"\xA3\u0A4A\n\xA3\x07\xA3\u0A4C\n\xA3\f\xA3\x0E\xA3\u0A4F\v\xA3\x03\xA4" +
		"\x03\xA4\x03\xA4\x05\xA4\u0A54\n\xA4\x03\xA4\x03\xA4\x03\xA5\x03\xA5\x03" +
		"\xA5\x03\xA5\x03\xA5\x03\xA5\x03\xA5\x03\xA5\x03\xA5\x05\xA5\u0A61\n\xA5" +
		"\x03\xA6\x05\xA6\u0A64\n\xA6\x03\xA6\x03\xA6\x03\xA7\x05\xA7\u0A69\n\xA7" +
		"\x03\xA7\x03\xA7\x05\xA7\u0A6D\n\xA7\x03\xA8\x03\xA8\x03\xA9\x03\xA9\x03" +
		"\xA9\x03\xA9\x03\xA9\x03\xA9\x05\xA9\u0A77\n\xA9\x05\xA9\u0A79\n\xA9\x03" +
		"\xA9\x03\xA9\x03\xA9\x03\xA9\x03\xA9\x03\xA9\x05\xA9\u0A81\n\xA9\x05\xA9" +
		"\u0A83\n\xA9\x07\xA9\u0A85\n\xA9\f\xA9\x0E\xA9\u0A88\v\xA9\x03\xAA\x03" +
		"\xAA\x03\xAB\x03\xAB\x03\xAB\x05\xAB\u0A8F\n\xAB\x03\xAB\x03\xAB\x05\xAB" +
		"\u0A93\n\xAB\x03\xAB\x05\xAB\u0A96\n\xAB\x03\xAB\x05\xAB\u0A99\n\xAB\x03" +
		"\xAB\x05\xAB\u0A9C\n\xAB\x03\xAB\x05\xAB\u0A9F\n\xAB\x03\xAB\x03\xAB\x03" +
		"\xAB\x05\xAB\u0AA4\n\xAB\x03\xAB\x03\xAB\x03\xAB\x05\xAB\u0AA9\n\xAB\x03" +
		"\xAC\x03\xAC\x05\xAC\u0AAD\n\xAC\x03\xAC\x03\xAC\x03\xAD\x03\xAD\x03\xAD" +
		"\x05\xAD\u0AB4\n\xAD\x03\xAD\x05\xAD\u0AB7\n\xAD\x03\xAD\x05\xAD\u0ABA" +
		"\n\xAD\x03\xAD\x05\xAD\u0ABD\n\xAD\x03\xAE\x03\xAE\x03\xAE\x03\xAF\x03" +
		"\xAF\x03\xAF\x03\xAF\x03\xB0\x03\xB0\x03\xB0\x03\xB1\x03\xB1\x05\xB1\u0ACB" +
		"\n\xB1\x03\xB2\x03\xB2\x03\xB2\x03\xB2\x03\xB2\x07\xB2\u0AD2\n\xB2\f\xB2" +
		"\x0E\xB2\u0AD5\v\xB2\x03\xB3\x03\xB3\x03\xB3\x03\xB3\x05\xB3\u0ADB\n\xB3" +
		"\x03\xB3\x03\xB3\x03\xB3\x05\xB3\u0AE0\n\xB3\x05\xB3\u0AE2\n\xB3\x03\xB3" +
		"\x03\xB3\x03\xB3\x03\xB3\x03\xB3\x03\xB3\x03\xB3\x05\xB3\u0AEB\n\xB3\x03" +
		"\xB3\x05\xB3\u0AEE\n\xB3\x03\xB3\x03\xB3\x03\xB4\x03\xB4\x03\xB4\x03\xB4" +
		"\x05\xB4\u0AF6\n\xB4\x03\xB4\x03\xB4\x03\xB4\x05\xB4\u0AFB\n\xB4\x05\xB4" +
		"\u0AFD\n\xB4\x03\xB4\x03\xB4\x03\xB4\x03\xB5\x03\xB5\x03\xB5\x03\xB5\x03" +
		"\xB5\x03\xB5\x03\xB5\x05\xB5\u0B09\n\xB5\x03\xB5\x03\xB5\x03\xB5\x03\xB5" +
		"\x03\xB5\x07\xB5\u0B10\n\xB5\f\xB5\x0E\xB5\u0B13\v\xB5\x03\xB5\x03\xB5" +
		"\x03\xB5\x05\xB5\u0B18\n\xB5\x03\xB6\x03\xB6\x03\xB6\x03\xB6\x03\xB6\x03" +
		"\xB6\x03\xB6\x03\xB6\x03\xB6\x03\xB6\x03\xB6\x07\xB6\u0B25\n\xB6\f\xB6" +
		"\x0E\xB6\u0B28\v\xB6\x03\xB6\x03\xB6\x03\xB6\x03\xB6\x03\xB6\x03\xB6\x03" +
		"\xB6\x05\xB6\u0B31\n\xB6\x03\xB6\x05\xB6\u0B34\n\xB6\x03\xB6\x03\xB6\x03" +
		"\xB6\x03\xB6\x03\xB6\x07\xB6\u0B3B\n\xB6\f\xB6\x0E\xB6\u0B3E\v\xB6\x03" +
		"\xB6\x03\xB6\x03\xB6\x03\xB6\x03\xB6\x05\xB6\u0B45\n\xB6\x03\xB6\x05\xB6" +
		"\u0B48\n\xB6\x05\xB6\u0B4A\n\xB6\x03\xB6\x03\xB6\x03\xB6\x03\xB6\x03\xB6" +
		"\x05\xB6\u0B51\n\xB6\x05\xB6\u0B53\n\xB6\x03\xB7\x03\xB7\x03\xB7\x03\xB7" +
		"\x03\xB7\x03\xB7\x03\xB7\x03\xB7\x05\xB7\u0B5D\n\xB7\x05\xB7\u0B5F\n\xB7" +
		"\x03\xB7\x03\xB7\x03\xB8\x03\xB8\x03\xB8\x07\xB8\u0B66\n\xB8\f\xB8\x0E" +
		"\xB8\u0B69\v\xB8\x03\xB9\x03\xB9\x03\xB9\x03\xB9\x03\xB9\x03\xB9\x03\xB9" +
		"\x03\xB9\x03\xB9\x05\xB9\u0B74\n\xB9\x03\xB9\x03\xB9\x03\xB9\x05\xB9\u0B79" +
		"\n\xB9\x03\xB9\x03\xB9\x03\xB9\x03\xB9\x03\xB9\x03\xB9\x03\xB9\x05\xB9" +
		"\u0B82\n\xB9\x03\xBA\x03\xBA\x03\xBA\x03\xBA\x03\xBA\x05\xBA\u0B89\n\xBA" +
		"\x03\xBA\x03\xBA\x03\xBA\x03\xBA\x03\xBA\x03\xBA\x05\xBA\u0B91\n\xBA\x03" +
		"\xBA\x03\xBA\x05\xBA\u0B95\n\xBA\x03\xBA\x03\xBA\x03\xBA\x03\xBA\x03\xBA" +
		"\x03\xBA\x03\xBA\x03\xBA\x03\xBA\x03\xBA\x05\xBA\u0BA1\n\xBA\x03\xBA\x03" +
		"\xBA\x05\xBA\u0BA5\n\xBA\x03\xBA\x05\xBA\u0BA8\n\xBA\x03\xBB\x03\xBB\x03" +
		"\xBB\x03\xBB\x05\xBB\u0BAE\n\xBB\x03\xBB\x05\xBB\u0BB1\n\xBB\x03\xBB\x05" +
		"\xBB\u0BB4\n\xBB\x03\xBC\x03\xBC\x03\xBC\x03\xBD\x03\xBD\x03\xBD\x03\xBD" +
		"\x03\xBD\x03\xBD\x03\xBD\x05\xBD\u0BC0\n\xBD\x03\xBE\x03\xBE\x03\xBE\x03" +
		"\xBE\x03\xBE\x03\xBF\x03\xBF\x03\xBF\x05\xBF\u0BCA\n\xBF\x03\xBF\x03\xBF" +
		"\x05\xBF\u0BCE\n\xBF\x03\xC0\x03\xC0\x03\xC0\x03\xC0\x03\xC0\x03\xC0\x05" +
		"\xC0\u0BD6\n\xC0\x03\xC0\x05\xC0\u0BD9\n\xC0\x03\xC0\x05\xC0\u0BDC\n\xC0" +
		"\x03\xC1\x03\xC1\x03\xC1\x05\xC1\u0BE1\n\xC1\x03\xC1\x05\xC1\u0BE4\n\xC1" +
		"\x03\xC1\x05\xC1\u0BE7\n\xC1\x03\xC1\x03\xC1\x05\xC1\u0BEB\n\xC1\x03\xC1" +
		"\x03\xC1\x05\xC1\u0BEF\n\xC1\x03\xC1\x05\xC1\u0BF2\n\xC1\x03\xC1\x03\xC1" +
		"\x03\xC1\x03\xC2\x03\xC2\x03\xC2\x03\xC2\x03\xC2\x03\xC2\x03\xC2\x05\xC2" +
		"\u0BFE\n\xC2\x05\xC2\u0C00\n\xC2\x03\xC2\x03\xC2\x03\xC2\x03\xC2\x03\xC2" +
		"\x03\xC2\x03\xC2\x03\xC2\x03\xC2\x03\xC2\x03\xC2\x03\xC2\x03\xC2\x03\xC2" +
		"\x03\xC2\x03\xC2\x03\xC2\x03\xC2\x03\xC2\x07\xC2\u0C15\n\xC2\f\xC2\x0E" +
		"\xC2\u0C18\v\xC2\x03\xC3\x03\xC3\x03\xC3\x03\xC3\x05\xC3\u0C1E\n\xC3\x03" +
		"\xC3\x03\xC3\x03\xC3\x03\xC3\x03\xC3\x03\xC3\x03\xC3\x03\xC3\x03\xC3\x05" +
		"\xC3\u0C29\n\xC3\x03\xC3\x03\xC3\x03\xC3\x03\xC3\x05\xC3\u0C2F\n\xC3\x03" +
		"\xC3\x06\xC3\u0C32\n\xC3\r\xC3\x0E\xC3\u0C33\x05\xC3\u0C36\n\xC3\x03\xC4" +
		"\x03\xC4\x03\xC5\x03\xC5\x05\xC5\u0C3C\n\xC5\x03\xC6\x03\xC6\x03\xC7\x03" +
		"\xC7\x03\xC8\x03\xC8\x03\xC9\x03\xC9\x05\xC9\u0C46\n\xC9\x03\xC9\x02\x02" +
		"\x02\xCA\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12" +
		"\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&" +
		"\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02" +
		"B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02" +
		"^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02" +
		"z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02" +
		"\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02" +
		"\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02\xAE\x02\xB0\x02" +
		"\xB2\x02\xB4\x02\xB6\x02\xB8\x02\xBA\x02\xBC\x02\xBE\x02\xC0\x02\xC2\x02" +
		"\xC4\x02\xC6\x02\xC8\x02\xCA\x02\xCC\x02\xCE\x02\xD0\x02\xD2\x02\xD4\x02" +
		"\xD6\x02\xD8\x02\xDA\x02\xDC\x02\xDE\x02\xE0\x02\xE2\x02\xE4\x02\xE6\x02" +
		"\xE8\x02\xEA\x02\xEC\x02\xEE\x02\xF0\x02\xF2\x02\xF4\x02\xF6\x02\xF8\x02" +
		"\xFA\x02\xFC\x02\xFE\x02\u0100\x02\u0102\x02\u0104\x02\u0106\x02\u0108" +
		"\x02\u010A\x02\u010C\x02\u010E\x02\u0110\x02\u0112\x02\u0114\x02\u0116" +
		"\x02\u0118\x02\u011A\x02\u011C\x02\u011E\x02\u0120\x02\u0122\x02\u0124" +
		"\x02\u0126\x02\u0128\x02\u012A\x02\u012C\x02\u012E\x02\u0130\x02\u0132" +
		"\x02\u0134\x02\u0136\x02\u0138\x02\u013A\x02\u013C\x02\u013E\x02\u0140" +
		"\x02\u0142\x02\u0144\x02\u0146\x02\u0148\x02\u014A\x02\u014C\x02\u014E" +
		"\x02\u0150\x02\u0152\x02\u0154\x02\u0156\x02\u0158\x02\u015A\x02\u015C" +
		"\x02\u015E\x02\u0160\x02\u0162\x02\u0164\x02\u0166\x02\u0168\x02\u016A" +
		"\x02\u016C\x02\u016E\x02\u0170\x02\u0172\x02\u0174\x02\u0176\x02\u0178" +
		"\x02\u017A\x02\u017C\x02\u017E\x02\u0180\x02\u0182\x02\u0184\x02\u0186" +
		"\x02\u0188\x02\u018A\x02\u018C\x02\u018E\x02\u0190\x02\x02+\x04\x02\x95" +
		"\x95\xE1\xE1\x04\x02!!\u0111\u0111\x07\x02\x18\x18\x92\x92\x94\x94\xE4" +
		"\xE4\u0100\u0101\x05\x02DE\xB9\xB9\xC4\xC4\x04\x02UUoo\x04\x02\xC6\xC6" +
		"\u0128\u0128\x05\x02%%\xBA\xBA\u0157\u0157\x04\x02gg\u011A\u011A\x04\x02" +
		"\b\b\v\v\x03\x02\u013A\u013B\x05\x02\b\bSS\u013C\u013C\x06\x02@@BB\xB8" +
		"\xB8\u0138\u0138\x07\x02\x13\x1388\xB1\xB1\xB3\xB3\u010C\u010C\x04\x02" +
		"FF\xC7\xC7\x05\x02\xB5\xB5\u013C\u013D\u015A\u015A\x11\x02\x13\x13--8" +
		"8@@BBdd\x8C\x8C\xB1\xB3\xB8\xB8\xDA\xDA\u010C\u010C\u0115\u0115\u0117" +
		"\u0117\u0129\u0129\u0138\u0138\x03\x02\u0113\u0114\v\x02$$66RRqquu\x8E" +
		"\x8E\xAD\xAD\xEC\xEC\u0131\u0131\x04\x02\xA4\xA4\xD5\xD5\x03\x02\u0102" +
		"\u0103\x04\x02\xA3\xA3\xA5\xA5\x05\x02\x1A\x1A\xF0\xF0\u011D\u011D\r\x02" +
		"\x19\x19\x1B\x1C>>OO\x7F\x7F\x97\x97\xAB\xAB\xBF\xBF\xE6\xE6\u0132\u0132" +
		"\u0139\u0139\x03\x02\x10\x11\x04\x02\x04\x04\x15\x15\x05\x02LL\x8E\x8F" +
		"\xF3\xF3\x04\x02\xBD\xBD\xDB\xDB\x05\x02rr\xAD\xAE\xDF\xDF\x03\x02\xC9" +
		"\xCA\x04\x0244\u011C\u011C\x04\x02VV\u0122\u0122\x04\x02\xDB\xDB\u015F" +
		"\u015F\x04\x02\xD4\xD4\xF3\xF3\x04\x02\r\rNN\x04\x02SS\u011F\u011F\x04" +
		"\x02^^\xFC\xFC\x05\x0222QQ\xEA\xEA\x04\x02[[\u0105\u0105\x04\x02\u0106" +
		"\u0106\u012D\u012D\x04\x0277\u010B\u010B!\x02\x05\x05\x0E\x0E88<<ggmm" +
		"vv\x80\x80\x84\x84\x8A\x8A\x93\x93\x95\x95\x9E\x9E\xA0\xA0\xA4\xA4\xB2" +
		"\xB2\xC0\xC2\xC5\xC5\xD5\xD5\xE4\xE4\xFE\xFE\u0104\u0104\u010A\u010A\u0110" +
		"\u0110\u0115\u0115\u0117\u0117\u011A\u011A\u0124\u0124\u0129\u0129\u012B" +
		"\u012B\u0137\u0137\x02\u0DCB\x02\u0193\x03\x02\x02\x02\x04\u01A1\x03\x02" +
		"\x02\x02\x06\u01A4\x03\x02\x02\x02\b\u01B5\x03\x02\x02\x02\n\u01B9\x03" +
		"\x02\x02\x02\f\u01BF\x03\x02\x02\x02\x0E\u01C3\x03\x02\x02\x02\x10\u01C7" +
		"\x03\x02\x02\x02\x12\u01D5\x03\x02\x02\x02\x14\u01DE\x03\x02\x02\x02\x16" +
		"\u01E6\x03\x02\x02\x02\x18\u01F2\x03\x02\x02\x02\x1A\u01F6\x03\x02\x02" +
		"\x02\x1C\u0214\x03\x02\x02\x02\x1E\u021A\x03\x02\x02\x02 \u021C\x03\x02" +
		"\x02\x02\"\u0224\x03\x02\x02\x02$\u0226\x03\x02\x02\x02&\u023B\x03\x02" +
		"\x02\x02(\u024D\x03\x02\x02\x02*\u0254\x03\x02\x02\x02,\u026B\x03\x02" +
		"\x02\x02.\u02A6\x03\x02\x02\x020\u02A8\x03\x02\x02\x022\u02AC\x03\x02" +
		"\x02\x024\u02B0\x03\x02\x02\x026\u02B4\x03\x02\x02\x028\u02B8\x03\x02" +
		"\x02\x02:\u02BC\x03\x02\x02\x02<\u02C0\x03\x02\x02\x02>\u02C2\x03\x02" +
		"\x02\x02@\u02CC\x03\x02\x02\x02B\u02CE\x03\x02\x02\x02D\u02E2\x03\x02" +
		"\x02\x02F\u02EF\x03\x02\x02\x02H\u02F7\x03\x02\x02\x02J\u0301\x03\x02" +
		"\x02\x02L\u0306\x03\x02\x02\x02N\u030C\x03\x02\x02\x02P\u0310\x03\x02" +
		"\x02\x02R\u0314\x03\x02\x02\x02T\u0321\x03\x02\x02\x02V\u0323\x03\x02" +
		"\x02\x02X\u0336\x03\x02\x02\x02Z\u0341\x03\x02\x02\x02\\\u035C\x03\x02" +
		"\x02\x02^\u0360\x03\x02\x02\x02`\u0362\x03\x02\x02\x02b\u0372\x03\x02" +
		"\x02\x02d\u0374\x03\x02\x02\x02f\u03BB\x03\x02\x02\x02h\u03D8\x03\x02" +
		"\x02\x02j\u03DE\x03\x02\x02\x02l\u03E0\x03\x02\x02\x02n\u03E4\x03\x02" +
		"\x02\x02p\u03ED\x03\x02\x02\x02r\u03F1\x03\x02\x02\x02t\u03FD\x03\x02" +
		"\x02\x02v\u03FF\x03\x02\x02\x02x\u0464\x03\x02\x02\x02z\u0466\x03\x02" +
		"\x02\x02|\u0475\x03\x02\x02\x02~\u0477\x03\x02\x02\x02\x80\u047E\x03\x02" +
		"\x02\x02\x82\u0480\x03\x02\x02\x02\x84\u0482\x03\x02\x02\x02\x86\u0484" +
		"\x03\x02\x02\x02\x88\u0486\x03\x02\x02\x02\x8A\u048A\x03\x02\x02\x02\x8C" +
		"\u048C\x03\x02\x02\x02\x8E\u0499\x03\x02\x02\x02\x90\u04A6\x03\x02\x02" +
		"\x02\x92\u04A8\x03\x02\x02\x02\x94\u04B0\x03\x02\x02\x02\x96\u04B8\x03" +
		"\x02\x02\x02\x98\u04CF\x03\x02\x02\x02\x9A\u04D2\x03\x02\x02\x02\x9C\u04DD" +
		"\x03\x02\x02\x02\x9E\u04DF\x03\x02\x02\x02\xA0\u04E8\x03\x02\x02\x02\xA2" +
		"\u04F6\x03\x02\x02\x02\xA4\u04FC\x03\x02\x02\x02\xA6\u050D\x03\x02\x02" +
		"\x02\xA8\u0513\x03\x02\x02\x02\xAA\u051B\x03\x02\x02\x02\xAC\u0521\x03" +
		"\x02\x02\x02\xAE\u0525\x03\x02\x02\x02\xB0\u0527\x03\x02\x02\x02\xB2\u0529" +
		"\x03\x02\x02\x02\xB4\u052B\x03\x02\x02\x02\xB6\u0536\x03\x02\x02\x02\xB8" +
		"\u0544\x03\x02\x02\x02\xBA\u0546\x03\x02\x02\x02\xBC\u054A\x03\x02\x02" +
		"\x02\xBE\u054E\x03\x02\x02\x02\xC0\u0550\x03\x02\x02\x02\xC2\u0562\x03" +
		"\x02\x02\x02\xC4\u0564\x03\x02\x02\x02\xC6\u056C\x03\x02\x02\x02\xC8\u057C" +
		"\x03\x02\x02\x02\xCA\u0580\x03\x02\x02\x02\xCC\u0582\x03\x02\x02\x02\xCE" +
		"\u0584\x03\x02\x02\x02\xD0\u0586\x03\x02\x02\x02\xD2\u059C\x03\x02\x02" +
		"\x02\xD4\u05A4\x03\x02\x02\x02\xD6\u05D1\x03\x02\x02\x02\xD8\u05D7\x03" +
		"\x02\x02\x02\xDA\u05E0\x03\x02\x02\x02\xDC\u05E2\x03\x02\x02\x02\xDE\u05EF" +
		"\x03\x02\x02\x02\xE0\u05F1\x03\x02\x02\x02\xE2\u063E\x03\x02\x02\x02\xE4" +
		"\u0653\x03\x02\x02\x02\xE6\u0655\x03\x02\x02\x02\xE8\u06B8\x03\x02\x02" +
		"\x02\xEA\u06D5\x03\x02\x02\x02\xEC\u06D7\x03\x02\x02\x02\xEE\u06DE\x03" +
		"\x02\x02\x02\xF0\u06E6\x03\x02\x02\x02\xF2\u06FE\x03\x02\x02\x02\xF4\u070E" +
		"\x03\x02\x02\x02\xF6\u0710\x03\x02\x02\x02\xF8\u0713\x03\x02\x02\x02\xFA" +
		"\u071D\x03\x02\x02\x02\xFC\u0722\x03\x02\x02\x02\xFE\u0728\x03\x02\x02" +
		"\x02\u0100\u0748\x03\x02\x02\x02\u0102\u075E\x03\x02\x02\x02\u0104\u0760" +
		"\x03\x02\x02\x02\u0106\u076A\x03\x02\x02\x02\u0108\u078D\x03\x02\x02\x02" +
		"\u010A\u0799\x03\x02\x02\x02\u010C\u07A5\x03\x02\x02\x02\u010E\u07DC\x03" +
		"\x02\x02\x02\u0110\u07EA\x03\x02\x02\x02\u0112\u07EC\x03\x02\x02\x02\u0114" +
		"\u07F3\x03\x02\x02\x02\u0116\u0824\x03\x02\x02\x02\u0118\u0857\x03\x02" +
		"\x02\x02\u011A\u0884\x03\x02\x02\x02\u011C\u0886\x03\x02\x02\x02\u011E" +
		"\u088A\x03\x02\x02\x02\u0120\u08A0\x03\x02\x02\x02\u0122\u08AE\x03\x02" +
		"\x02\x02\u0124\u08B0\x03\x02\x02\x02\u0126\u08B8\x03\x02\x02\x02\u0128" +
		"\u08F4\x03\x02\x02\x02\u012A\u08F6\x03\x02\x02\x02\u012C\u0958\x03\x02" +
		"\x02\x02\u012E\u0961\x03\x02\x02\x02\u0130\u09AA\x03\x02\x02\x02\u0132" +
		"\u09AC\x03\x02\x02\x02\u0134\u09B4\x03\x02\x02\x02\u0136\u09B6\x03\x02" +
		"\x02\x02\u0138\u09B8\x03\x02\x02\x02\u013A\u09DB\x03\x02\x02\x02\u013C" +
		"\u0A29\x03\x02\x02\x02\u013E\u0A31\x03\x02\x02\x02\u0140\u0A33\x03\x02" +
		"\x02\x02\u0142\u0A40\x03\x02\x02\x02\u0144\u0A42\x03\x02\x02\x02\u0146" +
		"\u0A50\x03\x02\x02\x02\u0148\u0A60\x03\x02\x02\x02\u014A\u0A63\x03\x02" +
		"\x02\x02\u014C\u0A68\x03\x02\x02\x02\u014E\u0A6E\x03\x02\x02\x02\u0150" +
		"\u0A70\x03\x02\x02\x02\u0152\u0A89\x03\x02\x02\x02\u0154\u0A8B\x03\x02" +
		"\x02\x02\u0156\u0AAA\x03\x02\x02\x02\u0158\u0AB0\x03\x02\x02\x02\u015A" +
		"\u0ABE\x03\x02\x02\x02\u015C\u0AC1\x03\x02\x02\x02\u015E\u0AC5\x03\x02" +
		"\x02\x02\u0160\u0AC8\x03\x02\x02\x02\u0162\u0ACC\x03\x02\x02\x02\u0164" +
		"\u0AD6\x03\x02\x02\x02\u0166\u0AF1\x03\x02\x02\x02\u0168\u0B01\x03\x02" +
		"\x02\x02\u016A\u0B19\x03\x02\x02\x02\u016C\u0B54\x03\x02\x02\x02\u016E" +
		"\u0B62\x03\x02\x02\x02\u0170\u0B81\x03\x02\x02\x02\u0172\u0BA7\x03\x02" +
		"\x02\x02\u0174\u0BA9\x03\x02\x02\x02\u0176\u0BB5\x03\x02\x02\x02\u0178" +
		"\u0BBF\x03\x02\x02\x02\u017A\u0BC1\x03\x02\x02\x02\u017C\u0BCD\x03\x02" +
		"\x02\x02\u017E\u0BDB\x03\x02\x02\x02\u0180\u0BDD\x03\x02\x02\x02\u0182" +
		"\u0BF6\x03\x02\x02\x02\u0184\u0C19\x03\x02\x02\x02\u0186\u0C37\x03\x02" +
		"\x02\x02\u0188\u0C3B\x03\x02\x02\x02\u018A\u0C3D\x03\x02\x02\x02\u018C" +
		"\u0C3F\x03\x02\x02\x02\u018E\u0C41\x03\x02\x02\x02\u0190\u0C45\x03\x02" +
		"\x02\x02\u0192\u0194\x05\u0174\xBB\x02\u0193\u0192\x03\x02\x02\x02\u0193" +
		"\u0194\x03\x02\x02\x02\u0194\u0196\x03\x02\x02\x02\u0195\u0197\x05\x16" +
		"\f\x02\u0196\u0195\x03\x02\x02\x02\u0196\u0197\x03\x02\x02\x02\u0197\u0199" +
		"\x03\x02\x02\x02\u0198\u019A\x05\x18\r\x02\u0199\u0198\x03\x02\x02\x02" +
		"\u0199\u019A\x03\x02\x02\x02\u019A\u019B\x03\x02\x02\x02\u019B\u019D\x05" +
		"\x06\x04\x02\u019C\u019E\x05\f\x07\x02\u019D\u019C\x03\x02\x02\x02\u019D" +
		"\u019E\x03\x02\x02\x02\u019E\u019F\x03\x02\x02\x02\u019F\u01A0\x07\x02" +
		"\x02\x03\u01A0\x03\x03\x02\x02\x02\u01A1\u01A2\x07\u014E\x02\x02\u01A2" +
		"\x05\x03\x02\x02\x02\u01A3\u01A5\x05\u0186\xC4\x02\u01A4\u01A3\x03\x02" +
		"\x02\x02\u01A4\u01A5\x03\x02\x02\x02\u01A5\u01A6\x03\x02\x02\x02\u01A6" +
		"\u01A7\x07\xAF\x02\x02\u01A7\u01A9\x05\u0186\xC4\x02\u01A8\u01AA\x05\x18" +
		"\r\x02\u01A9\u01A8\x03\x02\x02\x02\u01A9\u01AA\x03\x02\x02\x02\u01AA\u01AC" +
		"\x03\x02\x02\x02\u01AB\u01AD\x05\b\x05\x02\u01AC\u01AB\x03\x02\x02\x02" +
		"\u01AC\u01AD\x03\x02\x02\x02\u01AD\u01AE\x03\x02\x02\x02\u01AE\u01AF\x07" +
		"Z\x02\x02\u01AF\u01B0\x07\xAF\x02\x02\u01B0\u01B1\x05\u0186\xC4\x02\u01B1" +
		"\x07\x03\x02\x02\x02\u01B2\u01B6\x05\n\x06\x02\u01B3\u01B6\x05N(\x02\u01B4" +
		"\u01B6\x05\u0186\xC4\x02\u01B5\u01B2\x03\x02\x02\x02\u01B5\u01B3\x03\x02" +
		"\x02\x02\u01B5\u01B4\x03\x02\x02\x02\u01B6\u01B7\x03\x02\x02\x02\u01B7" +
		"\u01B5\x03\x02\x02\x02\u01B7\u01B8\x03\x02\x02\x02\u01B8\t\x03\x02\x02" +
		"\x02\u01B9\u01BA\x07J\x02\x02\u01BA\u01BB\t\x02\x02\x02\u01BB\u01BC\x05" +
		"\u0186\xC4\x02\u01BC\v\x03\x02\x02\x02\u01BD\u01C0\x05\u0180\xC1\x02\u01BE" +
		"\u01C0\x05\x10\t\x02\u01BF\u01BD\x03\x02\x02\x02\u01BF\u01BE\x03\x02\x02" +
		"\x02\u01C0\u01C1\x03\x02\x02\x02\u01C1\u01BF\x03\x02\x02\x02\u01C1\u01C2" +
		"\x03\x02\x02\x02\u01C2\r\x03\x02\x02\x02\u01C3\u01C5\x07\xEE\x02\x02\u01C4" +
		"\u01C6\x05\xD4k\x02\u01C5\u01C4\x03\x02\x02\x02\u01C5\u01C6\x03\x02\x02" +
		"\x02\u01C6\x0F\x03\x02\x02\x02\u01C7\u01C8\x07z\x02\x02\u01C8\u01CA\x05" +
		"\xA6T\x02\u01C9\u01CB\x05\x12\n\x02\u01CA\u01C9\x03\x02\x02\x02\u01CA" +
		"\u01CB\x03\x02\x02\x02\u01CB\u01CC\x03\x02\x02\x02\u01CC\u01CD\x05\u0186" +
		"\xC4\x02\u01CD\u01CF\x05\x18\r\x02\u01CE\u01D0\x05N(\x02\u01CF\u01CE\x03" +
		"\x02\x02\x02\u01CF\u01D0\x03\x02\x02\x02\u01D0\u01D1\x03\x02\x02\x02\u01D1" +
		"\u01D2\x07Z\x02\x02\u01D2\u01D3\x07z\x02\x02\u01D3\u01D4\x05\u0186\xC4" +
		"\x02\u01D4\x11\x03\x02\x02\x02\u01D5\u01D9\x07\u0147\x02\x02\u01D6\u01D8" +
		"\x05\x14\v\x02\u01D7\u01D6\x03\x02\x02\x02\u01D8\u01DB\x03\x02\x02\x02" +
		"\u01D9\u01D7\x03\x02\x02\x02\u01D9\u01DA\x03\x02\x02\x02\u01DA\u01DC\x03" +
		"\x02\x02\x02\u01DB\u01D9\x03\x02\x02\x02\u01DC\u01DD\x07\u0148\x02\x02" +
		"\u01DD\x13\x03\x02\x02\x02\u01DE\u01E3\x05\x04\x03\x02\u01DF\u01E0\x07" +
		"\u013E\x02\x02\u01E0\u01E2\x05\x04\x03\x02\u01E1\u01DF\x03\x02\x02\x02" +
		"\u01E2\u01E5\x03\x02\x02\x02\u01E3\u01E1\x03\x02\x02\x02\u01E3\u01E4\x03" +
		"\x02\x02\x02\u01E4\x15\x03\x02\x02\x02\u01E5\u01E3\x03\x02\x02\x02\u01E6" +
		"\u01ED\x07|\x02\x02\u01E7\u01EE\x05J&\x02\u01E8\u01E9\x05\u0186\xC4\x02" +
		"\u01E9\u01EA\x05\x18\r\x02\u01EA\u01EB\x07Z\x02\x02\u01EB\u01EC\x07|\x02" +
		"\x02\u01EC\u01EE\x03\x02\x02\x02\u01ED\u01E7\x03\x02\x02\x02\u01ED\u01E8" +
		"\x03\x02\x02\x02\u01EE\u01EF\x03\x02\x02\x02\u01EF\u01F0\x05\u0186\xC4" +
		"\x02\u01F0\x17\x03\x02\x02\x02\u01F1\u01F3\x05\x1A\x0E\x02\u01F2\u01F1" +
		"\x03\x02\x02\x02\u01F3\u01F4\x03\x02\x02\x02\u01F4\u01F2\x03\x02\x02\x02" +
		"\u01F4\u01F5\x03\x02\x02\x02\u01F5\x19\x03\x02\x02\x02\u01F6\u01F7\x07" +
		"K\x02\x02\u01F7\u01FC\x05\x1C\x0F\x02\u01F8\u01F9\x07\u013E\x02\x02\u01F9" +
		"\u01FB\x05\x1C\x0F\x02\u01FA\u01F8\x03\x02\x02\x02\u01FB\u01FE\x03\x02" +
		"\x02\x02\u01FC\u01FA\x03\x02\x02\x02\u01FC\u01FD\x03\x02\x02\x02\u01FD" +
		"\x1B\x03\x02\x02\x02\u01FE\u01FC\x03\x02\x02\x02\u01FF\u0204\x05\u0190" +
		"\xC9\x02\u0200\u0201\x07\u013E\x02\x02\u0201\u0203\x05\u0190\xC9\x02\u0202" +
		"\u0200\x03\x02\x02\x02\u0203\u0206\x03\x02\x02\x02\u0204\u0202\x03\x02" +
		"\x02\x02\u0204\u0205\x03\x02\x02\x02\u0205\u0207\x03\x02\x02\x02\u0206" +
		"\u0204\x03\x02\x02\x02\u0207\u0208\x05\x1E\x10\x02\u0208\u0215\x03\x02" +
		"\x02\x02\u0209\u020A\x05\u0190\xC9\x02\u020A\u0211\x05\x1E\x10\x02\u020B" +
		"\u020C\x07\u013E\x02\x02\u020C\u020D\x05\u0190\xC9\x02\u020D\u020E\x05" +
		"\x1E\x10\x02\u020E\u0210\x03\x02\x02\x02\u020F\u020B\x03\x02\x02\x02\u0210" +
		"\u0213\x03\x02\x02\x02\u0211\u020F\x03\x02\x02\x02\u0211\u0212\x03\x02" +
		"\x02\x02\u0212\u0215\x03\x02\x02\x02\u0213\u0211\x03\x02\x02\x02\u0214" +
		"\u01FF\x03\x02\x02\x02\u0214\u0209\x03\x02\x02\x02\u0215\x1D\x03\x02\x02" +
		"\x02\u0216\u021B\x05\"\x12\x02\u0217\u021B\x05 \x11\x02\u0218\u021B\x05" +
		"$\x13\x02\u0219\u021B\x05@!\x02\u021A\u0216\x03\x02\x02\x02\u021A\u0217" +
		"\x03\x02\x02\x02\u021A\u0218\x03\x02\x02\x02\u021A\u0219\x03\x02\x02\x02" +
		"\u021B\x1F\x03\x02\x02\x02\u021C\u021D\x07\xA2\x02\x02\u021D\u021E\x05" +
		"\u014A\xA6\x02\u021E\u021F\x07\u014B\x02\x02\u021F\u0220\x05\x04\x03\x02" +
		"\u0220!\x03\x02\x02\x02\u0221\u0225\x05(\x15\x02\u0222\u0225\x05&\x14" +
		"\x02\u0223\u0225\x05*\x16\x02\u0224\u0221\x03\x02\x02\x02\u0224\u0222" +
		"\x03\x02\x02\x02\u0224\u0223\x03\x02\x02\x02\u0225#\x03\x02\x02\x02\u0226" +
		"\u0227\t\x03\x02\x02\u0227%\x03\x02\x02\x02\u0228\u023C\t\x04\x02\x02" +
		"\u0229\u0232\t\x05\x02\x02\u022A\u022B\x07\u0147\x02\x02\u022B\u022E\x05" +
		"\xACW\x02\u022C\u022D\x07\u013E\x02\x02\u022D\u022F\x05\xACW\x02\u022E" +
		"\u022C\x03\x02\x02\x02\u022E\u022F\x03\x02\x02\x02\u022F\u0230\x03\x02" +
		"\x02\x02\u0230\u0231\x07\u0148\x02\x02\u0231\u0233\x03\x02\x02\x02\u0232" +
		"\u022A\x03\x02\x02\x02\u0232\u0233\x03\x02\x02\x02\u0233\u023C\x03\x02" +
		"\x02\x02\u0234\u0239\t\x06\x02\x02\u0235\u0236\x07\u0147\x02\x02\u0236" +
		"\u0237\x05\xACW\x02\u0237\u0238\x07\u0148\x02\x02\u0238\u023A\x03\x02" +
		"\x02\x02\u0239\u0235\x03\x02\x02\x02\u0239\u023A\x03\x02\x02\x02\u023A" +
		"\u023C\x03\x02\x02\x02\u023B\u0228\x03\x02\x02\x02\u023B\u0229\x03\x02" +
		"\x02\x02\u023B\u0234\x03\x02\x02\x02\u023C\'\x03\x02\x02\x02\u023D\u023E" +
		"\t\x07\x02";
	private static readonly _serializedATNSegment2: string =
		"\x02\u023E\u023F\x07\u0147\x02\x02\u023F\u0242\x05\xACW\x02\u0240\u0241" +
		"\x07\u013E\x02\x02\u0241\u0243\x05\xACW\x02\u0242\u0240\x03\x02\x02\x02" +
		"\u0242\u0243\x03\x02\x02\x02\u0243\u0244\x03\x02\x02\x02\u0244\u0245\x07" +
		"\u0148\x02\x02\u0245\u024E\x03\x02\x02\x02\u0246\u024B\t\b\x02\x02\u0247" +
		"\u0248\x07\u0147\x02\x02\u0248\u0249\x05\xACW\x02\u0249\u024A\x07\u0148" +
		"\x02\x02\u024A\u024C\x03\x02\x02\x02\u024B\u0247\x03\x02\x02\x02\u024B" +
		"\u024C\x03\x02\x02\x02\u024C\u024E\x03\x02\x02\x02\u024D\u023D\x03\x02" +
		"\x02\x02\u024D\u0246\x03\x02\x02\x02\u024E)\x03\x02\x02\x02\u024F\u0255" +
		"\x07@\x02\x02\u0250\u0251\x07A\x02\x02\u0251\u0255\x05,\x17\x02\u0252" +
		"\u0253\x07\x96\x02\x02\u0253\u0255\x05.\x18\x02\u0254\u024F\x03\x02\x02" +
		"\x02\u0254\u0250\x03\x02\x02\x02\u0254\u0252\x03\x02\x02\x02\u0255+\x03" +
		"\x02\x02\x02\u0256\u0257\x07\u0138\x02\x02\u0257\u0258\x07\u0116\x02\x02" +
		"\u0258\u026C\x052\x1A\x02\u0259\u025A\x07\xB8\x02\x02\u025A\u025B\x07" +
		"\u0116\x02\x02\u025B\u026C\x054\x1B\x02\u025C\u025D\x07B\x02\x02\u025D" +
		"\u025E\x07\u0116\x02\x02\u025E\u026C\x056\x1C\x02\u025F\u0260\x07\x86" +
		"\x02\x02\u0260\u0261\x07\u0116\x02\x02\u0261\u026C\x058\x1D\x02\u0262" +
		"\u0263\x07\xB4\x02\x02\u0263\u0264\x07\u0116\x02\x02\u0264\u026C\x05:" +
		"\x1E\x02\u0265\u0266\x07\xF8\x02\x02\u0266\u0267\x07\u0116\x02\x02\u0267" +
		"\u026C\x05<\x1F\x02\u0268\u0269\x07w\x02\x02\u0269\u026A\x07\u0116\x02" +
		"\x02\u026A\u026C\x05> \x02\u026B\u0256\x03\x02\x02\x02\u026B\u0259\x03" +
		"\x02\x02\x02\u026B\u025C\x03\x02\x02\x02\u026B\u025F\x03\x02\x02\x02\u026B" +
		"\u0262\x03\x02\x02\x02\u026B\u0265\x03\x02\x02\x02\u026B\u0268\x03\x02" +
		"\x02\x02\u026C-\x03\x02\x02\x02\u026D\u0272\x07\u0138\x02\x02\u026E\u026F" +
		"\x07\u0147\x02\x02\u026F\u0270\x05\xACW\x02\u0270\u0271\x07\u0148\x02" +
		"\x02\u0271\u0273\x03\x02\x02\x02\u0272\u026E\x03\x02\x02\x02\u0272\u0273" +
		"\x03\x02\x02\x02\u0273\u0274\x03\x02\x02\x02\u0274\u0275\x07\u0116\x02" +
		"\x02\u0275\u02A7\x052\x1A\x02\u0276\u027B\x07\xB8\x02\x02\u0277\u0278" +
		"\x07\u0147\x02\x02\u0278\u0279\x05\xACW\x02\u0279\u027A\x07\u0148\x02" +
		"\x02\u027A\u027C\x03\x02\x02\x02\u027B\u0277\x03\x02\x02\x02\u027B\u027C" +
		"\x03\x02\x02\x02\u027C\u027D\x03\x02\x02\x02\u027D\u027E\x07\u0116\x02" +
		"\x02\u027E\u02A7\x054\x1B\x02\u027F\u0284\x07B\x02\x02\u0280\u0281\x07" +
		"\u0147\x02\x02\u0281\u0282\x05\xACW\x02\u0282\u0283\x07\u0148\x02\x02" +
		"\u0283\u0285\x03\x02\x02\x02\u0284\u0280\x03\x02\x02\x02\u0284\u0285\x03" +
		"\x02\x02\x02\u0285\u0286\x03\x02\x02\x02\u0286\u0287\x07\u0116\x02\x02" +
		"\u0287\u02A7\x056\x1C\x02\u0288\u028D\x07\x86\x02\x02\u0289\u028A\x07" +
		"\u0147\x02\x02\u028A\u028B\x05\xACW\x02\u028B\u028C\x07\u0148\x02\x02" +
		"\u028C\u028E\x03\x02\x02\x02\u028D\u0289\x03\x02\x02\x02\u028D\u028E\x03" +
		"\x02\x02\x02\u028E\u028F\x03\x02\x02\x02\u028F\u0290\x07\u0116\x02\x02" +
		"\u0290\u02A7\x058\x1D\x02\u0291\u0296\x07\xB4\x02\x02\u0292\u0293\x07" +
		"\u0147\x02\x02\u0293\u0294\x05\xACW\x02\u0294\u0295\x07\u0148\x02\x02" +
		"\u0295\u0297\x03\x02\x02\x02\u0296\u0292\x03\x02\x02\x02\u0296\u0297\x03" +
		"\x02\x02\x02\u0297\u0298\x03\x02\x02\x02\u0298\u0299\x07\u0116\x02\x02" +
		"\u0299\u02A7\x05:\x1E\x02\u029A\u029F\x07\xF8\x02\x02\u029B\u029C\x07" +
		"\u0147\x02\x02\u029C\u029D\x05\xACW\x02\u029D\u029E\x07\u0148\x02\x02" +
		"\u029E\u02A0\x03\x02\x02\x02\u029F\u029B\x03\x02\x02\x02\u029F\u02A0\x03" +
		"\x02\x02\x02\u02A0\u02A1\x03\x02\x02\x02\u02A1\u02A2\x07\u0116\x02\x02" +
		"\u02A2\u02A7\x05<\x1F\x02\u02A3\u02A4\x07w\x02\x02\u02A4\u02A5\x07\u0116" +
		"\x02\x02\u02A5\u02A7\x05> \x02\u02A6\u026D\x03\x02\x02\x02\u02A6\u0276" +
		"\x03\x02\x02\x02\u02A6\u027F\x03\x02\x02\x02\u02A6\u0288\x03\x02\x02\x02" +
		"\u02A6\u0291\x03\x02\x02\x02\u02A6\u029A\x03\x02\x02\x02\u02A6\u02A3\x03" +
		"\x02\x02\x02\u02A7/\x03\x02\x02\x02\u02A8\u02A9\x052\x1A\x02\u02A91\x03" +
		"\x02\x02\x02\u02AA\u02AD\x07\u0138\x02\x02\u02AB\u02AD\x054\x1B\x02\u02AC" +
		"\u02AA\x03\x02\x02\x02\u02AC\u02AB\x03\x02\x02\x02\u02AD3\x03\x02\x02" +
		"\x02\u02AE\u02B1\x07\xB8\x02\x02\u02AF\u02B1\x056\x1C\x02\u02B0\u02AE" +
		"\x03\x02\x02\x02\u02B0\u02AF\x03\x02\x02\x02\u02B15\x03\x02\x02\x02\u02B2" +
		"\u02B5\x07B\x02\x02\u02B3\u02B5\x058\x1D\x02\u02B4\u02B2\x03\x02\x02\x02" +
		"\u02B4\u02B3\x03\x02\x02\x02\u02B57\x03\x02\x02\x02\u02B6\u02B9\x07\x86" +
		"\x02\x02\u02B7\u02B9\x05:\x1E\x02\u02B8\u02B6\x03\x02\x02\x02\u02B8\u02B7" +
		"\x03\x02\x02\x02\u02B99\x03\x02\x02\x02\u02BA\u02BD\x07\xB4\x02\x02\u02BB" +
		"\u02BD\x05<\x1F\x02\u02BC\u02BA\x03\x02\x02\x02\u02BC\u02BB\x03\x02\x02" +
		"\x02\u02BD;\x03\x02\x02\x02\u02BE\u02C1\x07\xF8\x02\x02\u02BF\u02C1\x05" +
		"> \x02\u02C0\u02BE\x03\x02\x02\x02\u02C0\u02BF\x03\x02\x02\x02\u02C1=" +
		"\x03\x02\x02\x02\u02C2\u02C7\x07w\x02\x02\u02C3\u02C4\x07\u0147\x02\x02" +
		"\u02C4\u02C5\x05\xACW\x02\u02C5\u02C6\x07\u0148\x02\x02\u02C6\u02C8\x03" +
		"\x02\x02\x02\u02C7\u02C3\x03\x02\x02\x02\u02C7\u02C8\x03\x02\x02\x02\u02C8" +
		"?\x03\x02\x02\x02\u02C9\u02CD\x05B\"\x02\u02CA\u02CD\x05F$\x02\u02CB\u02CD" +
		"\x05H%\x02\u02CC\u02C9\x03\x02\x02\x02\u02CC\u02CA\x03\x02\x02\x02\u02CC" +
		"\u02CB\x03\x02\x02\x02\u02CDA\x03\x02\x02\x02\u02CE\u02E0\x07\xE3\x02" +
		"\x02\u02CF\u02D0\x05\u0186\xC4\x02\u02D0\u02D5\x05\x1C\x0F\x02\u02D1\u02D2" +
		"\x07\u013E\x02\x02\u02D2\u02D4\x05\x1C\x0F\x02\u02D3\u02D1\x03\x02\x02" +
		"\x02\u02D4\u02D7\x03\x02\x02\x02\u02D5\u02D3\x03\x02\x02\x02\u02D5\u02D6" +
		"\x03\x02\x02\x02\u02D6\u02D8\x03\x02\x02\x02\u02D7\u02D5\x03\x02\x02\x02" +
		"\u02D8\u02D9\x07Z\x02\x02\u02D9\u02DA\x07\xE3\x02\x02\u02DA\u02E1\x03" +
		"\x02\x02\x02\u02DB\u02DC\x07\xA2\x02\x02\u02DC\u02DD\x05\u014A\xA6\x02" +
		"\u02DD\u02DE\x07\u014B\x02\x02\u02DE\u02DF\x07\u013C\x02\x02\u02DF\u02E1" +
		"\x03\x02\x02\x02\u02E0\u02CF\x03\x02\x02\x02\u02E0\u02DB\x03\x02\x02\x02" +
		"\u02E1C\x03\x02\x02\x02\u02E2\u02E3\x07\u0149\x02\x02\u02E3\u02EB\x05" +
		"\xACW\x02\u02E4\u02E5\x07\u013E\x02\x02\u02E5\u02EC\x05\xACW\x02\u02E6" +
		"\u02E7\x07\u013E\x02\x02\u02E7\u02E8\x05\xACW\x02\u02E8\u02E9\x07\u013E" +
		"\x02\x02\u02E9\u02EA\x05\xACW\x02\u02EA\u02EC\x03\x02\x02\x02\u02EB\u02E4" +
		"\x03\x02\x02\x02\u02EB\u02E6\x03\x02\x02\x02\u02EB\u02EC\x03\x02\x02\x02" +
		"\u02EC\u02ED\x03\x02\x02\x02\u02ED\u02EE\x07\u014A\x02\x02\u02EEE\x03" +
		"\x02\x02\x02\u02EF\u02F0\x07\x14\x02\x02\u02F0\u02F1\x05D#\x02\u02F1\u02F5" +
		"\x07\xC8\x02\x02\u02F2\u02F6\x05B\"\x02\u02F3\u02F6\x05\"\x12\x02\u02F4" +
		"\u02F6\x05$\x13\x02\u02F5\u02F2\x03\x02\x02\x02\u02F5\u02F3\x03\x02\x02" +
		"\x02\u02F5\u02F4\x03\x02\x02\x02\u02F6G\x03\x02\x02\x02\u02F7\u02F8\x07" +
		"X\x02\x02\u02F8\u02F9\x07\x14\x02\x02\u02F9\u02FA\x07\u0133\x02\x02\u02FA" +
		"\u02FB\x05\xACW\x02\u02FB\u02FC\x07P\x02\x02\u02FC\u02FF\x07\xC8\x02\x02" +
		"\u02FD\u0300\x05B\"\x02\u02FE\u0300\x05\"\x12\x02\u02FF\u02FD\x03\x02" +
		"\x02\x02\u02FF\u02FE\x03\x02\x02\x02\u0300I\x03\x02\x02\x02\u0301\u0302" +
		"\x07\u014F\x02\x02\u0302K\x03\x02\x02\x02\u0303\u0304\x05P)\x02\u0304" +
		"\u0305\x07\u0140\x02\x02\u0305\u0307\x03\x02\x02\x02\u0306\u0303\x03\x02" +
		"\x02\x02\u0306\u0307\x03\x02\x02\x02\u0307\u0308\x03\x02\x02\x02\u0308" +
		"\u0309\x05R*\x02\u0309M\x03\x02\x02\x02\u030A\u030D\x05L\'\x02\u030B\u030D" +
		"\x05\u0174\xBB\x02\u030C\u030A\x03\x02\x02\x02\u030C\u030B\x03\x02\x02" +
		"\x02\u030D\u030E\x03\x02\x02\x02\u030E\u030C\x03\x02\x02\x02\u030E\u030F" +
		"\x03\x02\x02\x02\u030FO\x03\x02\x02\x02\u0310\u0311\x05\x04\x03\x02\u0311" +
		"Q\x03\x02\x02\x02\u0312\u0315\x05T+\x02\u0313\u0315\x05\xBC_\x02\u0314" +
		"\u0312\x03\x02\x02\x02\u0314\u0313\x03\x02\x02\x02\u0315S\x03\x02\x02" +
		"\x02\u0316\u0322\x05X-\x02\u0317\u0322\x05Z.\x02\u0318\u031A\x05\u012E" +
		"\x98\x02\u0319\u031B\x07\u013F\x02\x02\u031A\u0319\x03\x02\x02\x02\u031A" +
		"\u031B\x03\x02\x02\x02\u031B\u0322\x03\x02\x02\x02\u031C\u0322\x05\xD8" +
		"m\x02\u031D\u0322\x05\u011A\x8E\x02\u031E\u0322\x05\xF4{\x02\u031F\u0322" +
		"\x05\u0102\x82\x02\u0320\u0322\x05\u0110\x89\x02\u0321\u0316\x03\x02\x02" +
		"\x02\u0321\u0317\x03\x02\x02\x02\u0321\u0318\x03\x02\x02\x02\u0321\u031C" +
		"\x03\x02\x02\x02\u0321\u031D\x03\x02\x02\x02\u0321\u031E\x03\x02\x02\x02" +
		"\u0321\u031F\x03\x02\x02\x02\u0321\u0320\x03\x02\x02\x02\u0322U\x03\x02" +
		"\x02\x02\u0323\u0326\x07\xF5\x02\x02\u0324\u0327\x05\xAEX\x02\u0325\u0327" +
		"\x05J&\x02\u0326\u0324\x03\x02\x02\x02\u0326\u0325\x03\x02\x02\x02\u0327" +
		"\u032E\x03\x02\x02\x02\u0328\u0329\x07\x88\x02\x02\u0329\u032A\x07r\x02" +
		"\x02\u032A\u032F\x07\xB6\x02\x02\u032B\u032C\x07\x88\x02\x02\u032C\u032D" +
		"\x07\xA3\x02\x02\u032D\u032F\x07\xB6\x02\x02\u032E\u0328\x03\x02\x02\x02" +
		"\u032E\u032B\x03\x02\x02\x02\u032E\u032F\x03\x02\x02\x02\u032F\u0334\x03" +
		"\x02\x02\x02\u0330\u0331\x07\u0134\x02\x02\u0331\u0335\x07\u012C\x02\x02" +
		"\u0332\u0333\x07\xEF\x02\x02\u0333\u0335\x05\xAEX\x02\u0334\u0330\x03" +
		"\x02\x02\x02\u0334\u0332\x03\x02\x02\x02\u0334\u0335\x03\x02\x02\x02\u0335" +
		"W\x03\x02\x02\x02\u0336\u0337\x07\xA1\x02\x02\u0337\u0338\x05\xAEX\x02" +
		"\u0338\u0339\x07\u0141\x02\x02\u0339\u033E\x05\x96L\x02\u033A\u033B\x07" +
		"\u013E\x02\x02\u033B\u033D\x05\x96L\x02\u033C\u033A\x03\x02\x02\x02\u033D" +
		"\u0340\x03\x02\x02\x02\u033E\u033C\x03\x02\x02\x02\u033E\u033F\x03\x02" +
		"\x02\x02\u033FY\x03\x02\x02\x02\u0340\u033E\x03\x02\x02\x02\u0341\u0342" +
		"\x07#\x02\x02\u0342\u034F\x05\\/\x02\u0343\u034C\x07\u0147\x02\x02\u0344" +
		"\u0349\x05^0\x02\u0345\u0346\x07\u013E\x02\x02\u0346\u0348\x05^0\x02\u0347" +
		"\u0345\x03\x02\x02\x02\u0348\u034B\x03\x02\x02\x02\u0349\u0347\x03\x02" +
		"\x02\x02\u0349\u034A\x03\x02\x02\x02\u034A\u034D\x03\x02\x02\x02\u034B" +
		"\u0349\x03\x02\x02\x02\u034C\u0344\x03\x02\x02\x02\u034C\u034D\x03\x02" +
		"\x02\x02\u034D\u034E\x03\x02\x02\x02\u034E\u0350\x07\u0148\x02\x02\u034F" +
		"\u0343\x03\x02\x02\x02\u034F\u0350\x03\x02\x02\x02\u0350\u035A\x03\x02" +
		"\x02\x02\u0351\u0352\x07\xEF\x02\x02\u0352\u0357\x05\xAEX\x02\u0353\u0354" +
		"\x07\u013E\x02\x02\u0354\u0356\x05\xAEX\x02\u0355\u0353\x03\x02\x02\x02" +
		"\u0356\u0359\x03\x02\x02\x02\u0357\u0355\x03\x02\x02\x02\u0357\u0358\x03" +
		"\x02\x02\x02\u0358\u035B\x03\x02\x02\x02\u0359\u0357\x03\x02\x02\x02\u035A" +
		"\u0351\x03\x02\x02\x02\u035A\u035B\x03\x02\x02\x02\u035B[\x03\x02\x02" +
		"\x02\u035C\u035D\x05\xA6T\x02\u035D]\x03\x02\x02\x02\u035E\u0361\x07\u013C" +
		"\x02\x02\u035F\u0361\x05\x96L\x02\u0360\u035E\x03\x02\x02\x02\u0360\u035F" +
		"\x03\x02\x02\x02\u0361_\x03\x02\x02\x02\u0362\u0364\x07~\x02\x02\u0363" +
		"\u0365\x07\u0140\x02\x02\u0364\u0363\x03\x02\x02\x02\u0364\u0365\x03\x02" +
		"\x02\x02\u0365\u0366\x03\x02\x02\x02\u0366\u0367\x05P)\x02\u0367\u0368" +
		"\x05\u0186\xC4\x02\u0368a\x03\x02\x02\x02\u0369\u0373\t\t\x02\x02\u036A" +
		"\u036F\x05d3\x02\u036B\u036C\x07\xCE\x02\x02\u036C\u036E\x05d3\x02\u036D" +
		"\u036B\x03\x02\x02\x02\u036E\u0371\x03\x02\x02\x02\u036F\u036D\x03\x02" +
		"\x02\x02\u036F\u0370\x03\x02\x02\x02\u0370\u0373\x03\x02\x02\x02\u0371" +
		"\u036F\x03\x02\x02\x02\u0372\u0369\x03\x02\x02\x02\u0372\u036A\x03\x02" +
		"\x02\x02\u0373c\x03\x02\x02\x02\u0374\u0379\x05f4\x02\u0375\u0376\x07" +
		"\n\x02\x02\u0376\u0378\x05f4\x02\u0377\u0375\x03\x02\x02\x02\u0378\u037B" +
		"\x03\x02\x02\x02\u0379\u0377\x03\x02\x02\x02\u0379\u037A\x03\x02\x02\x02" +
		"\u037Ae\x03\x02\x02\x02\u037B\u0379\x03\x02\x02\x02\u037C\u03BC\x03\x02" +
		"\x02\x02\u037D\u037F\x05n8\x02\u037E\u0380\x07\xC1\x02\x02\u037F\u037E" +
		"\x03\x02\x02\x02\u037F\u0380\x03\x02\x02\x02\u0380\u0381\x03\x02\x02\x02" +
		"\u0381\u0382\x07\xA2\x02\x02\u0382\u0383\x03\x02\x02\x02\u0383\u0385\x05" +
		"n8\x02\u0384\u0386\x07\xC1\x02\x02\u0385\u0384\x03\x02\x02\x02\u0385\u0386" +
		"\x03\x02\x02\x02\u0386\u0387\x03\x02\x02\x02\u0387\u0388\x07\xA2\x02\x02" +
		"\u0388\u038B\x05n8\x02\u0389\u038A\x07\u0158\x02\x02\u038A\u038C\x07\u0159" +
		"\x02\x02\u038B\u0389\x03\x02\x02\x02\u038B\u038C\x03\x02\x02\x02\u038C" +
		"\u03BC\x03\x02\x02\x02\u038D\u038F\x05n8\x02\u038E\u0390\x07\xC1\x02\x02" +
		"\u038F\u038E\x03\x02\x02\x02\u038F\u0390\x03\x02\x02\x02\u0390\u0391\x03" +
		"\x02\x02\x02\u0391\u0392\x07\x17\x02\x02\u0392\u0393\x03\x02\x02\x02\u0393" +
		"\u0395\x05n8\x02\u0394\u0396\x07\xC1\x02\x02\u0395\u0394\x03\x02\x02\x02" +
		"\u0395\u0396\x03\x02\x02\x02\u0396\u0397\x03\x02\x02\x02\u0397\u0398\x07" +
		"\x17\x02\x02\u0398\u0399\x05n8\x02\u0399\u039A\x07\n\x02\x02\u039A\u039B" +
		"\x05n8\x02\u039B\u03BC\x03\x02\x02\x02\u039C\u039D\x05n8\x02\u039D\u039F" +
		"\x07\x98\x02\x02\u039E\u03A0\x07\xC1\x02\x02\u039F\u039E\x03\x02\x02\x02" +
		"\u039F\u03A0\x03\x02\x02\x02\u03A0\u03A1\x03\x02\x02\x02\u03A1\u03A2\x07" +
		"\xC5\x02\x02\u03A2\u03A3\x03\x02\x02\x02\u03A3\u03A4\x05n8\x02\u03A4\u03A6" +
		"\x07\x98\x02\x02\u03A5\u03A7\x07\xC1\x02\x02\u03A6\u03A5\x03\x02\x02\x02" +
		"\u03A6\u03A7\x03\x02\x02\x02\u03A7\u03A8\x03\x02\x02\x02\u03A8\u03A9\x07" +
		"\xC5\x02\x02\u03A9\u03BC\x03\x02\x02\x02\u03AA\u03AB\x05h5\x02\u03AB\u03AC" +
		"\x05h5\x02\u03AC\u03BC\x03\x02\x02\x02\u03AD\u03AE\x07\xC1\x02\x02\u03AE" +
		"\u03AF\x05b2\x02\u03AF\u03B0\x03\x02\x02\x02\u03B0\u03B1\x07\xC1\x02\x02" +
		"\u03B1\u03B2\x05b2\x02\u03B2\u03BC\x03\x02\x02\x02\u03B3\u03B4\x07\u0147" +
		"\x02\x02\u03B4\u03B5\x05b2\x02\u03B5\u03B6\x07\u0148\x02\x02\u03B6\u03BC" +
		"\x03\x02\x02\x02\u03B7\u03B8\x05n8\x02\u03B8\u03B9\x05\x8EH\x02\u03B9" +
		"\u03BA\x05n8\x02\u03BA\u03BC\x03\x02\x02\x02\u03BB\u037C\x03\x02\x02\x02" +
		"\u03BB\u037D\x03\x02\x02\x02\u03BB\u038D\x03\x02\x02\x02\u03BB\u039C\x03" +
		"\x02\x02\x02\u03BB\u03AA\x03\x02\x02\x02\u03BB\u03AD\x03\x02\x02\x02\u03BB" +
		"\u03B3\x03\x02\x02\x02\u03BB\u03B7\x03\x02\x02\x02\u03BCg\x03\x02\x02" +
		"\x02\u03BD\u03BE\x05n8\x02\u03BE\u03C0\x05\x8EH\x02\u03BF\u03C1\t\n\x02" +
		"\x02\u03C0\u03BF\x03\x02\x02\x02\u03C0\u03C1\x03\x02\x02\x02\u03C1\u03C2" +
		"\x03\x02\x02\x02\u03C2\u03C3\x05l7\x02\u03C3\u03C4\x03\x02\x02\x02\u03C4" +
		"\u03C5\x05n8\x02\u03C5\u03C7\x05\x8EH\x02\u03C6\u03C8\t\n\x02\x02\u03C7" +
		"\u03C6\x03\x02\x02\x02\u03C7\u03C8\x03\x02\x02\x02\u03C8\u03C9\x03\x02" +
		"\x02\x02\u03C9\u03CA\x05l7\x02\u03CA\u03D9\x03\x02\x02\x02\u03CB\u03CD" +
		"\x07\xC1\x02\x02\u03CC\u03CB\x03\x02\x02\x02\u03CC\u03CD\x03\x02\x02\x02" +
		"\u03CD\u03CE\x03\x02\x02\x02\u03CE\u03CF\x07b\x02\x02\u03CF\u03D0\x05" +
		"l7\x02\u03D0\u03D2\x03\x02\x02\x02\u03D1\u03D3\x07\xC1\x02\x02\u03D2\u03D1" +
		"\x03\x02\x02\x02\u03D2\u03D3\x03\x02\x02\x02\u03D3\u03D4\x03\x02\x02\x02" +
		"\u03D4\u03D5\x07b\x02\x02\u03D5\u03D6\x05l7\x02\u03D6\u03D9\x03\x02\x02" +
		"\x02\u03D7\u03D9\x05l7\x02\u03D8\u03BD\x03\x02\x02\x02\u03D8\u03CC\x03" +
		"\x02\x02\x02\u03D8\u03D7\x03\x02\x02\x02\u03D9i\x03\x02\x02\x02\u03DA" +
		"\u03DB\x05n8\x02\u03DB\u03DC\x05n8\x02\u03DC\u03DF\x03\x02\x02\x02\u03DD" +
		"\u03DF\x05l7\x02\u03DE\u03DA\x03\x02\x02\x02\u03DE\u03DD\x03\x02\x02\x02" +
		"\u03DFk\x03\x02\x02\x02\u03E0\u03E1\x07\u0147\x02\x02\u03E1\u03E2\x05" +
		"\u0140\xA1\x02\u03E2\u03E3\x07\u0148\x02\x02\u03E3m\x03\x02\x02\x02\u03E4" +
		"\u03E9\x05r:\x02\u03E5\u03E6\t\v\x02\x02\u03E6\u03E8\x05r:\x02\u03E7\u03E5" +
		"\x03\x02\x02\x02\u03E8\u03EB\x03\x02\x02\x02\u03E9\u03E7\x03\x02\x02\x02" +
		"\u03E9\u03EA\x03\x02\x02\x02\u03EAo\x03\x02\x02\x02\u03EB\u03E9\x03\x02" +
		"\x02\x02\u03EC\u03EE\x07\f\x02\x02\u03ED\u03EC\x03\x02\x02\x02\u03ED\u03EE" +
		"\x03\x02\x02\x02\u03EE\u03EF\x03\x02\x02\x02\u03EF\u03F0\x05\x04\x03\x02" +
		"\u03F0q\x03\x02\x02\x02\u03F1\u03FA\x05v<\x02\u03F2\u03F6\x05t;\x02\u03F3" +
		"\u03F6\x07\u015A\x02\x02\u03F4\u03F6\x07\u013D\x02\x02\u03F5\u03F2\x03" +
		"\x02\x02\x02\u03F5\u03F3\x03\x02\x02\x02\u03F5\u03F4\x03\x02\x02\x02\u03F6" +
		"\u03F7\x03\x02\x02\x02\u03F7\u03F9\x05v<\x02\u03F8\u03F5\x03\x02\x02\x02" +
		"\u03F9\u03FC\x03\x02\x02\x02\u03FA\u03F8\x03\x02\x02\x02\u03FA\u03FB\x03" +
		"\x02\x02\x02\u03FBs\x03\x02\x02\x02\u03FC\u03FA\x03\x02\x02\x02\u03FD" +
		"\u03FE\x07\u013C\x02\x02\u03FEu\x03\x02\x02\x02\u03FF\u0404\x05x=\x02" +
		"\u0400\u0401\x07\u014D\x02\x02\u0401\u0403\x05x=\x02\u0402\u0400\x03\x02" +
		"\x02\x02\u0403\u0406\x03\x02\x02\x02\u0404\u0402\x03\x02\x02\x02\u0404" +
		"\u0405\x03\x02\x02\x02\u0405w\x03\x02\x02\x02\u0406\u0404\x03\x02\x02" +
		"\x02\u0407\u040A\x05~@\x02\u0408\u0409\x07\u0120\x02\x02\u0409\u040B\x05" +
		"0\x19\x02\u040A\u0408\x03\x02\x02\x02\u040A\u040B\x03\x02\x02\x02\u040B" +
		"\u040C\x03\x02\x02\x02\u040C\u040F\x05~@\x02\u040D\u040E\x07\u0120\x02" +
		"\x02\u040E\u0410\x050\x19\x02\u040F\u040D\x03\x02\x02\x02\u040F\u0410" +
		"\x03\x02\x02\x02\u0410\u0465\x03\x02\x02\x02\u0411\u0414\x05|?\x02\u0412" +
		"\u0413\x07\u0120\x02\x02\u0413\u0415\x050\x19\x02\u0414\u0412\x03\x02" +
		"\x02\x02\u0414\u0415\x03\x02\x02\x02\u0415\u0416\x03\x02\x02\x02\u0416" +
		"\u0419\x05|?\x02\u0417\u0418\x07\u0120\x02\x02\u0418\u041A\x050\x19\x02" +
		"\u0419\u0417\x03\x02\x02\x02\u0419\u041A\x03\x02\x02\x02\u041A\u0465\x03" +
		"\x02\x02\x02\u041B\u041C\x05\x88E\x02\u041C\u041E\x07\u0147\x02\x02\u041D" +
		"\u041F\t\f\x02\x02\u041E\u041D\x03\x02\x02\x02\u041E\u041F\x03\x02\x02" +
		"\x02\u041F\u0428\x03\x02\x02\x02\u0420\u0425\x05n8\x02\u0421\u0422\x07" +
		"\u013E\x02\x02\u0422\u0424\x05n8\x02\u0423\u0421\x03\x02\x02\x02\u0424" +
		"\u0427\x03\x02\x02\x02\u0425\u0423\x03\x02\x02\x02\u0425\u0426\x03\x02" +
		"\x02\x02\u0426\u0429\x03\x02\x02\x02\u0427\u0425\x03\x02\x02\x02\u0428" +
		"\u0420\x03\x02\x02\x02\u0428\u0429\x03\x02\x02\x02\u0429\u042A\x03\x02" +
		"\x02\x02\u042A\u042B\x07\u0148\x02\x02\u042B\u042C\x03\x02\x02\x02\u042C" +
		"\u042D\x05\x88E\x02\u042D\u042F\x07\u0147\x02\x02\u042E\u0430\t\f\x02" +
		"\x02\u042F\u042E\x03\x02\x02\x02\u042F\u0430\x03\x02\x02\x02\u0430\u0439" +
		"\x03\x02\x02\x02\u0431\u0436\x05n8\x02\u0432\u0433\x07\u013E\x02\x02\u0433" +
		"\u0435\x05n8\x02\u0434\u0432\x03\x02\x02\x02\u0435\u0438\x03\x02\x02\x02" +
		"\u0436\u0434\x03\x02\x02\x02\u0436\u0437\x03\x02\x02\x02\u0437\u043A\x03" +
		"\x02\x02\x02\u0438\u0436\x03\x02\x02\x02\u0439\u0431\x03\x02\x02\x02\u0439" +
		"\u043A\x03\x02\x02\x02\u043A\u043B\x03\x02\x02\x02\u043B\u043C\x07\u0148" +
		"\x02\x02\u043C\u0465\x03\x02\x02\x02\u043D\u043E\x05\x80A\x02\u043E\u043F" +
		"\x07\u0147\x02\x02\u043F\u0444\x05n8\x02\u0440\u0441\x07\u013E\x02\x02" +
		"\u0441\u0443\x05n8\x02\u0442\u0440\x03\x02\x02\x02\u0443\u0446\x03\x02" +
		"\x02\x02\u0444\u0442\x03\x02\x02\x02\u0444\u0445\x03\x02\x02\x02\u0445" +
		"\u0447\x03\x02\x02\x02\u0446\u0444\x03\x02\x02\x02\u0447\u0448\x07\u0148" +
		"\x02\x02\u0448\u0449\x03\x02\x02\x02\u0449\u044A\x05\x80A\x02\u044A\u044B" +
		"\x07\u0147\x02\x02\u044B\u0450\x05n8\x02\u044C\u044D\x07\u013E\x02\x02" +
		"\u044D\u044F\x05n8\x02\u044E\u044C\x03\x02\x02\x02\u044F\u0452\x03\x02" +
		"\x02\x02\u0450\u044E\x03\x02\x02\x02\u0450\u0451\x03\x02\x02\x02\u0451" +
		"\u0453\x03\x02\x02\x02\u0452\u0450\x03\x02\x02\x02\u0453\u0454\x07\u0148" +
		"\x02\x02\u0454\u0465\x03\x02\x02\x02\u0455\u0456\t\v\x02\x02\u0456\u0457" +
		"\x05n8\x02\u0457\u0458\x03\x02\x02\x02\u0458\u0459\t\v\x02\x02\u0459\u045A" +
		"\x05n8\x02\u045A\u0465\x03\x02\x02\x02\u045B\u045C\x07\u0147\x02\x02\u045C" +
		"\u045D\x05n8\x02\u045D\u045E\x07\u0148\x02\x02\u045E\u045F\x03\x02\x02" +
		"\x02\u045F\u0460\x07\u0147\x02\x02\u0460\u0461\x05n8\x02\u0461\u0462\x07" +
		"\u0148\x02\x02\u0462\u0465\x03\x02\x02\x02\u0463\u0465\x05z>\x02\u0464" +
		"\u0407\x03\x02\x02\x02\u0464\u0411\x03\x02\x02\x02\u0464\u041B\x03\x02" +
		"\x02\x02\u0464\u043D\x03\x02\x02\x02\u0464\u0455\x03\x02\x02\x02\u0464" +
		"\u045B\x03\x02\x02\x02\u0464\u0463\x03\x02\x02\x02\u0465y\x03\x02\x02" +
		"\x02\u0466\u0467\x07\u0147\x02\x02\u0467\u046A\x05n8\x02\u0468\u0469\x07" +
		"\u013E\x02\x02\u0469\u046B\x05n8\x02\u046A\u0468\x03\x02\x02\x02\u046B" +
		"\u046C\x03\x02\x02\x02\u046C\u046A\x03\x02\x02\x02\u046C\u046D\x03\x02" +
		"\x02\x02\u046D\u046E\x03\x02\x02\x02\u046E\u046F\x07\u0148\x02\x02\u046F" +
		"{\x03\x02\x02\x02\u0470\u0476\x05\xA8U\x02\u0471\u0476\x05J&\x02\u0472" +
		"\u0476\x07\xC5\x02\x02\u0473\u0476\x07g\x02\x02\u0474\u0476\x07\u011A" +
		"\x02\x02\u0475\u0470\x03\x02\x02\x02\u0475\u0471\x03\x02\x02\x02\u0475" +
		"\u0472\x03\x02\x02\x02\u0475\u0473\x03\x02\x02\x02\u0475\u0474\x03\x02" +
		"\x02\x02\u0476}\x03\x02\x02\x02\u0477\u0478\x05\u0142\xA2\x02\u0478\u0479" +
		"\x05\u0142\xA2\x02\u0479\x7F\x03\x02\x02\x02\u047A\u047F\x05\x84C\x02" +
		"\u047B\u047F\x05\x86D\x02\u047C\u047F\x05\x82B\x02\u047D\u047F\x05\x8A" +
		"F\x02\u047E\u047A\x03\x02\x02\x02\u047E\u047B\x03\x02\x02\x02\u047E\u047C" +
		"\x03\x02\x02\x02\u047E\u047D\x03\x02\x02\x02\u047F\x81\x03\x02\x02\x02" +
		"\u0480\u0481\t\r\x02\x02\u0481\x83\x03\x02\x02\x02\u0482\u0483\x07\xB5" +
		"\x02\x02\u0483\x85\x03\x02\x02\x02\u0484\u0485\x07\xA0\x02\x02\u0485\x87" +
		"\x03\x02\x02\x02\u0486\u0487\t\x0E\x02\x02\u0487\x89\x03\x02\x02\x02\u0488" +
		"\u048B\t\x0F\x02\x02\u0489\u048B\x05\u0190\xC9\x02\u048A\u0488\x03\x02" +
		"\x02\x02\u048A\u0489\x03\x02\x02\x02\u048B\x8B\x03\x02\x02\x02\u048C\u048D" +
		"\x07\u0124\x02\x02\u048D\x8D\x03\x02\x02\x02\u048E\u049A\x07\u0141\x02" +
		"\x02\u048F\u049A\x07\u0142\x02\x02\u0490\u049A\x07\u0144\x02\x02\u0491" +
		"\u049A\x07\u0143\x02\x02\u0492\u049A\x07\u0145\x02\x02\u0493\u049A\x07" +
		"\u0146\x02\x02\u0494\u049A\x07\xA2\x02\x02\u0495\u0497\x07\xC1\x02\x02" +
		"\u0496\u0495\x03\x02\x02\x02\u0496\u0497\x03\x02\x02\x02\u0497\u0498\x03" +
		"\x02\x02\x02\u0498\u049A\x07\xAC\x02\x02\u0499\u048E\x03\x02\x02\x02\u0499" +
		"\u048F\x03\x02\x02\x02\u0499\u0490\x03\x02\x02\x02\u0499\u0491\x03\x02" +
		"\x02\x02\u0499\u0492\x03\x02\x02\x02\u0499\u0493\x03\x02\x02\x02\u0499" +
		"\u0494\x03\x02\x02\x02\u0499\u0496\x03\x02\x02\x02\u049A\x8F\x03\x02\x02" +
		"\x02\u049B\u04A7\x07\u011A\x02\x02\u049C\u04A7\x07g\x02\x02\u049D\u04A3" +
		"\x05\x92J\x02\u049E\u049F\x05\x8EH\x02\u049F\u04A0\x05\x92J\x02\u04A0" +
		"\u04A2\x03\x02\x02\x02\u04A1\u049E\x03\x02\x02\x02\u04A2\u04A5\x03\x02" +
		"\x02\x02\u04A3\u04A1\x03\x02\x02\x02\u04A3\u04A4\x03\x02\x02\x02\u04A4" +
		"\u04A7\x03\x02\x02\x02\u04A5\u04A3\x03\x02\x02\x02\u04A6\u049B\x03\x02" +
		"\x02\x02\u04A6\u049C\x03\x02\x02\x02\u04A6\u049D\x03\x02\x02\x02\u04A7" +
		"\x91\x03\x02\x02\x02\u04A8\u04AD\x05\x94K\x02\u04A9\u04AA\x07\xCE\x02" +
		"\x02\u04AA\u04AC\x05\x94K\x02\u04AB\u04A9\x03\x02\x02\x02\u04AC\u04AF" +
		"\x03\x02\x02\x02\u04AD\u04AB\x03\x02\x02\x02\u04AD\u04AE\x03\x02\x02\x02" +
		"\u04AE\x93\x03\x02\x02\x02\u04AF\u04AD\x03\x02\x02\x02\u04B0\u04B5\x05" +
		"\x98M\x02\u04B1\u04B2\x07\n\x02\x02\u04B2\u04B4\x05\x98M\x02\u04B3\u04B1" +
		"\x03\x02\x02\x02\u04B4\u04B7\x03\x02\x02\x02\u04B5\u04B3\x03\x02\x02\x02" +
		"\u04B5\u04B6\x03\x02\x02\x02\u04B6\x95\x03\x02\x02\x02\u04B7\u04B5\x03" +
		"\x02\x02\x02\u04B8\u04BE\x05\x9AN\x02\u04B9\u04BD\x07*\x02\x02\u04BA\u04BB" +
		"\x07\u0125\x02\x02\u04BB\u04BD\x05J&\x02\u04BC\u04B9\x03\x02\x02\x02\u04BC" +
		"\u04BA\x03\x02\x02\x02\u04BD\u04C0\x03\x02\x02\x02\u04BE\u04BC\x03\x02" +
		"\x02\x02\u04BE\u04BF\x03\x02\x02\x02\u04BF\x97\x03\x02\x02\x02\u04C0\u04BE" +
		"\x03\x02\x02\x02\u04C1\u04D0\x03\x02\x02\x02\u04C2\u04C3\x07\xC1\x02\x02" +
		"\u04C3\u04C4\x05\x90I\x02\u04C4\u04C5\x03\x02\x02\x02\u04C5\u04C6\x07" +
		"\xC1\x02\x02\u04C6\u04C7\x05\x90I\x02\u04C7\u04D0\x03\x02\x02\x02\u04C8" +
		"\u04C9\x07\u0147\x02\x02\u04C9\u04CA\x05\x90I\x02\u04CA\u04CB\x07\u0148" +
		"\x02\x02\u04CB\u04D0\x03\x02\x02\x02\u04CC\u04CD\x05\x9AN\x02\u04CD\u04CE" +
		"\x05\x9AN\x02\u04CE\u04D0\x03\x02\x02\x02\u04CF\u04C1\x03\x02\x02\x02" +
		"\u04CF\u04C2\x03\x02\x02\x02\u04CF\u04C8\x03\x02\x02\x02\u04CF\u04CC\x03" +
		"\x02\x02\x02\u04D0\x99\x03\x02\x02\x02\u04D1\u04D3\x05\u018E\xC8\x02\u04D2" +
		"\u04D1\x03\x02\x02\x02\u04D2\u04D3\x03\x02\x02\x02\u04D3\u04D4\x03\x02" +
		"\x02\x02\u04D4\u04DA\x05\x9EP\x02\u04D5\u04D6\x05\x9CO\x02\u04D6\u04D7" +
		"\x05\x9EP\x02\u04D7\u04D9\x03\x02\x02\x02\u04D8\u04D5\x03\x02\x02\x02" +
		"\u04D9\u04DC\x03\x02\x02\x02\u04DA\u04D8\x03\x02\x02\x02\u04DA\u04DB\x03" +
		"\x02\x02\x02\u04DB\x9B\x03\x02\x02\x02\u04DC\u04DA\x03\x02\x02\x02\u04DD" +
		"\u04DE\t\v\x02\x02\u04DE\x9D\x03\x02\x02\x02\u04DF\u04E5\x05\xA2R\x02" +
		"\u04E0\u04E1\x05\xA0Q\x02\u04E1\u04E2\x05\xA2R\x02\u04E2\u04E4\x03\x02" +
		"\x02\x02\u04E3\u04E0\x03\x02\x02\x02\u04E4\u04E7\x03\x02\x02\x02\u04E5" +
		"\u04E3\x03\x02\x02\x02\u04E5\u04E6\x03\x02\x02\x02\u04E6\x9F\x03\x02\x02" +
		"\x02\u04E7\u04E5\x03\x02\x02\x02\u04E8\u04E9\t\x10\x02\x02\u04E9\xA1\x03" +
		"\x02\x02\x02\u04EA\u04EC\x07\x80\x02\x02\u04EB\u04EA\x03\x02\x02\x02\u04EB" +
		"\u04EC\x03\x02\x02\x02\u04EC\u04ED\x03\x02\x02\x02\u04ED\u04F7\x05\xA4" +
		"S\x02\u04EE\u04F7\x05\xAEX\x02\u04EF\u04F7\x05\xAAV\x02\u04F0";
	private static readonly _serializedATNSegment3: string =
		"\u04F1\x07\u0147\x02\x02\u04F1\u04F2\x05\x96L\x02\u04F2\u04F3\x07\u0148" +
		"\x02\x02\u04F3\u04F7\x03\x02\x02\x02\u04F4\u04F5\x07\xC1\x02\x02\u04F5" +
		"\u04F7\x05\xA2R\x02\u04F6\u04EB\x03\x02\x02\x02\u04F6\u04EE\x03\x02\x02" +
		"\x02\u04F6\u04EF\x03\x02\x02\x02\u04F6\u04F0\x03\x02\x02\x02\u04F6\u04F4" +
		"\x03\x02\x02\x02\u04F7\u04FA\x03\x02\x02\x02\u04F8\u04F9\x07\u0120\x02" +
		"\x02\u04F9\u04FB\x050\x19\x02\u04FA\u04F8\x03\x02\x02\x02\u04FA\u04FB" +
		"\x03\x02\x02\x02\u04FB\xA3\x03\x02\x02\x02\u04FC\u0509\x05\xA6T\x02\u04FD" +
		"\u0506\x07\u0147\x02\x02\u04FE\u0503\x05^0\x02\u04FF\u0500\x07\u013E\x02" +
		"\x02\u0500\u0502\x05^0\x02\u0501\u04FF\x03\x02\x02\x02\u0502\u0505\x03" +
		"\x02\x02\x02\u0503\u0501\x03\x02\x02\x02\u0503\u0504\x03\x02\x02\x02\u0504" +
		"\u0507\x03\x02\x02\x02\u0505\u0503\x03\x02\x02\x02\u0506\u04FE\x03\x02" +
		"\x02\x02\u0506\u0507\x03\x02\x02\x02\u0507\u0508\x03\x02\x02\x02\u0508" +
		"\u050A\x07\u0148\x02\x02\u0509\u04FD\x03\x02\x02\x02\u0509\u050A\x03\x02" +
		"\x02\x02\u050A\xA5\x03\x02\x02\x02\u050B\u050E\t\x11\x02\x02\u050C\u050E" +
		"\x05\u0190\xC9\x02\u050D\u050B\x03\x02\x02\x02\u050D\u050C\x03\x02\x02" +
		"\x02\u050E\xA7\x03\x02\x02\x02\u050F\u0514\x05\u0188\xC5\x02\u0510\u0514" +
		"\x05J&\x02\u0511\u0514\x05\u0190\xC9\x02\u0512\u0514\x07\xC5\x02\x02\u0513" +
		"\u050F\x03\x02\x02\x02\u0513\u0510\x03\x02\x02\x02\u0513\u0511\x03\x02" +
		"\x02\x02\u0513\u0512\x03\x02\x02\x02\u0514\xA9\x03\x02\x02\x02\u0515\u051C" +
		"\x05\xACW\x02\u0516\u051C\x05\u0190\xC9\x02\u0517\u0518\x05\u018E\xC8" +
		"\x02\u0518\u0519\x05\x04\x03\x02\u0519\u051C\x03\x02\x02\x02\u051A\u051C" +
		"\x05J&\x02\u051B\u0515\x03\x02\x02\x02\u051B\u0516\x03\x02\x02\x02\u051B" +
		"\u0517\x03\x02\x02\x02\u051B\u051A\x03\x02\x02\x02\u051C\xAB\x03\x02\x02" +
		"\x02\u051D\u0522\x05\u0188\xC5\x02\u051E\u051F\x05\u018E\xC8\x02\u051F" +
		"\u0520\x05\u0188\xC5\x02\u0520\u0522\x03\x02\x02\x02\u0521\u051D\x03\x02" +
		"\x02\x02\u0521\u051E\x03\x02\x02\x02\u0522\xAD\x03\x02\x02\x02\u0523\u0526" +
		"\x05\xB0Y\x02\u0524\u0526\x05\xB6\\\x02\u0525\u0523\x03\x02\x02\x02\u0525" +
		"\u0524\x03\x02\x02\x02\u0526\xAF\x03\x02\x02\x02\u0527\u0528\x05\xB2Z" +
		"\x02\u0528\xB1\x03\x02\x02\x02\u0529\u052A\x05\u0190\xC9\x02\u052A\xB3" +
		"\x03\x02\x02\x02\u052B\u052C\x07\u0149\x02\x02\u052C\u0531\x05\x96L\x02" +
		"\u052D\u052E\x07\u013E\x02\x02\u052E\u0530\x05\x96L\x02\u052F\u052D\x03" +
		"\x02\x02\x02\u0530\u0533\x03\x02\x02\x02\u0531\u052F\x03\x02\x02\x02\u0531" +
		"\u0532\x03\x02\x02\x02\u0532\u0534\x03\x02\x02\x02\u0533\u0531\x03\x02" +
		"\x02\x02\u0534\u0535\x07\u014A\x02\x02\u0535\xB5\x03\x02\x02\x02\u0536" +
		"\u0538\x05\xB8]\x02\u0537\u0539\x05\xB4[\x02\u0538\u0537\x03\x02\x02\x02" +
		"\u0538\u0539\x03\x02\x02\x02\u0539\u0542\x03\x02\x02\x02\u053A\u053B\x07" +
		"\u014B\x02\x02\u053B\u0543\x07\u013C\x02\x02\u053C\u053D\x07\u014B\x02" +
		"\x02\u053D\u0540\x05\xB6\\\x02\u053E\u053F\t\x12\x02\x02\u053F\u0541\x05" +
		"\xB6\\\x02\u0540\u053E\x03\x02\x02\x02\u0540\u0541\x03\x02\x02\x02\u0541" +
		"\u0543\x03\x02\x02\x02\u0542\u053A\x03\x02\x02\x02\u0542\u053C\x03\x02" +
		"\x02\x02\u0542\u0543\x03\x02\x02\x02\u0543\xB7\x03\x02\x02\x02\u0544\u0545" +
		"\x05\u0190\xC9\x02\u0545\xB9\x03\x02\x02\x02\u0546\u0547\x05\u0190\xC9" +
		"\x02\u0547\xBB\x03\x02\x02\x02\u0548\u054B\x05\xBE`\x02\u0549\u054B\x05" +
		"\xC2b\x02\u054A\u0548\x03\x02\x02\x02\u054A\u0549\x03\x02\x02\x02\u054B" +
		"\xBD\x03\x02\x02\x02\u054C\u054F\x05\xC0a\x02\u054D\u054F\x05\xD6l\x02" +
		"\u054E\u054C\x03\x02\x02\x02\u054E\u054D\x03\x02\x02\x02\u054F\xBF\x03" +
		"\x02\x02\x02\u0550\u0551\x07\x87\x02\x02\u0551\u0552\x05\x90I\x02\u0552" +
		"\u0554\x07\u0112\x02\x02\u0553\u0555\x05N(\x02\u0554\u0553\x03\x02\x02" +
		"\x02\u0554\u0555\x03\x02\x02\x02\u0555\u055A\x03\x02\x02\x02\u0556\u0558" +
		"\x07Y\x02\x02\u0557\u0559\x05N(\x02\u0558\u0557\x03\x02\x02\x02\u0558" +
		"\u0559\x03\x02\x02\x02\u0559\u055B\x03\x02\x02\x02\u055A\u0556\x03\x02" +
		"\x02\x02\u055A\u055B\x03\x02\x02\x02\u055B\u055C\x03\x02\x02\x02\u055C" +
		"\u055D\x07Z\x02\x02\u055D\u055E\x07\x87\x02\x02\u055E\xC1\x03\x02\x02" +
		"\x02\u055F\u0563\x05\xC4c\x02\u0560\u0563\x05\xD0i\x02\u0561\u0563\x05" +
		"\xC6d\x02\u0562\u055F\x03\x02\x02\x02\u0562\u0560\x03\x02\x02\x02\u0562" +
		"\u0561\x03\x02\x02\x02\u0563\xC3\x03\x02\x02\x02\u0564\u0565\x07\u0131" +
		"\x02\x02\u0565\u0567\x05\x90I\x02\u0566\u0568\x05N(\x02\u0567\u0566\x03" +
		"\x02\x02\x02\u0567\u0568\x03\x02\x02\x02\u0568\u0569\x03\x02\x02\x02\u0569" +
		"\u056A\x07Z\x02\x02\u056A\u056B\x07\u0131\x02\x02\u056B\xC5\x03\x02\x02" +
		"\x02\u056C\u056D\x07q\x02\x02\u056D\u056E\x05\xCAf\x02\u056E\u056F\x07" +
		"\u0141\x02\x02\u056F\u0572\x05\xC8e\x02\u0570\u0571\x07\u015B\x02\x02" +
		"\u0571\u0573\x05\xACW\x02\u0572\u0570\x03\x02\x02\x02\u0572\u0573\x03" +
		"\x02\x02\x02\u0573\u0574\x03\x02\x02\x02\u0574\u0576\x05\u0186\xC4\x02" +
		"\u0575\u0577\x05N(\x02\u0576\u0575\x03\x02\x02\x02\u0576\u0577\x03\x02" +
		"\x02\x02\u0577\u0578\x03\x02\x02\x02\u0578\u0579\x07Z\x02\x02\u0579\u057A" +
		"\x07q\x02\x02\u057A\u057B\x05\u0186\xC4\x02\u057B\xC7\x03\x02\x02\x02" +
		"\u057C\u057D\x05\xCCg\x02\u057D\u057E\x07\u0116\x02\x02\u057E\u057F\x05" +
		"\xCEh\x02\u057F\xC9\x03\x02\x02\x02\u0580\u0581\x05\x04\x03\x02\u0581" +
		"\xCB\x03\x02\x02\x02\u0582\u0583\x05\x96L\x02\u0583\xCD\x03\x02\x02\x02" +
		"\u0584\u0585\x05\x96L\x02\u0585\xCF\x03\x02\x02\x02\u0586\u0587\x07u\x02" +
		"\x02\u0587\u058A\x05\x04\x03\x02\u0588\u0589\x07\u0125\x02\x02\u0589\u058B" +
		"\x05\xD2j\x02\u058A\u0588\x03\x02\x02\x02\u058A\u058B\x03\x02\x02\x02" +
		"\u058B\u058E\x03\x02\x02\x02\u058C\u058D\x07\x91\x02\x02\u058D\u058F\x05" +
		"\xD2j\x02\u058E\u058C\x03\x02\x02\x02\u058E\u058F\x03\x02\x02\x02\u058F" +
		"\u0592\x03\x02\x02\x02\u0590\u0591\x07\u0133\x02\x02\u0591\u0593\x07\xE9" +
		"\x02\x02\u0592\u0590\x03\x02\x02\x02\u0592\u0593\x03\x02\x02\x02\u0593" +
		"\u0594\x03\x02\x02\x02\u0594\u0596\x05\u0186\xC4\x02\u0595\u0597\x05N" +
		"(\x02\u0596\u0595\x03\x02\x02\x02\u0596\u0597\x03\x02\x02\x02\u0597\u0598" +
		"\x03\x02\x02\x02\u0598\u0599\x07Z\x02\x02\u0599\u059A\x07u\x02\x02\u059A" +
		"\u059B\x05\u0186\xC4\x02\u059B\xD1\x03\x02\x02\x02\u059C\u05A1\x05\xAE" +
		"X\x02\u059D\u059E\x07\u013E\x02\x02\u059E\u05A0\x05\xAEX\x02\u059F\u059D" +
		"\x03\x02\x02\x02\u05A0\u05A3\x03\x02\x02\x02\u05A1\u059F\x03\x02\x02\x02" +
		"\u05A1\u05A2\x03\x02\x02\x02\u05A2\xD3\x03\x02\x02\x02\u05A3\u05A1\x03" +
		"\x02\x02\x02\u05A4\u05A9\x05\x96L\x02\u05A5\u05A6\x07\u013E\x02\x02\u05A6" +
		"\u05A8\x05\x96L\x02\u05A7\u05A5\x03\x02\x02\x02\u05A8\u05AB\x03\x02\x02" +
		"\x02\u05A9\u05A7\x03\x02\x02\x02\u05A9\u05AA\x03\x02\x02\x02\u05AA\xD5" +
		"\x03\x02\x02\x02\u05AB\u05A9\x03\x02\x02\x02\u05AC\u05AD\x07$\x02\x02" +
		"\u05AD\u05B5\x05\x96L\x02\u05AE\u05AF\x07\u012E\x02\x02\u05AF\u05B1\x05" +
		"\x96L\x02\u05B0\u05B2\x05N(\x02\u05B1\u05B0\x03\x02\x02\x02\u05B1\u05B2" +
		"\x03\x02\x02\x02\u05B2\u05B4\x03\x02\x02\x02\u05B3\u05AE\x03\x02\x02\x02" +
		"\u05B4\u05B7\x03\x02\x02\x02\u05B5\u05B3\x03\x02\x02\x02\u05B5\u05B6\x03" +
		"\x02\x02\x02\u05B6\u05BC\x03\x02\x02\x02\u05B7\u05B5\x03\x02\x02\x02\u05B8" +
		"\u05BA\x07\xD3\x02\x02\u05B9\u05BB\x05N(\x02\u05BA\u05B9\x03\x02\x02\x02" +
		"\u05BA\u05BB\x03\x02\x02\x02\u05BB\u05BD\x03\x02\x02\x02\u05BC\u05B8\x03" +
		"\x02\x02\x02\u05BC\u05BD\x03\x02\x02\x02\u05BD\u05BE\x03\x02\x02\x02\u05BE" +
		"\u05BF\x07Z\x02\x02\u05BF\u05C0\x07$\x02\x02\u05C0\u05D2\x03\x02\x02\x02" +
		"\u05C1\u05C8\x07$\x02\x02\u05C2\u05C3\x07\u012E\x02\x02\u05C3\u05C4\x05" +
		"\x90I\x02\u05C4\u05C5\x05N(\x02\u05C5\u05C7\x03\x02\x02\x02\u05C6\u05C2" +
		"\x03\x02\x02\x02\u05C7\u05CA\x03\x02\x02\x02\u05C8\u05C6\x03\x02\x02\x02" +
		"\u05C8\u05C9\x03\x02\x02\x02\u05C9\u05CD\x03\x02\x02\x02\u05CA\u05C8\x03" +
		"\x02\x02\x02\u05CB\u05CC\x07\xD3\x02\x02\u05CC\u05CE\x05N(\x02\u05CD\u05CB" +
		"\x03\x02\x02\x02\u05CD\u05CE\x03\x02\x02\x02\u05CE\u05CF\x03\x02\x02\x02" +
		"\u05CF\u05D0\x07Z\x02\x02\u05D0\u05D2\x07$\x02\x02\u05D1\u05AC\x03\x02" +
		"\x02\x02\u05D1\u05C1\x03\x02\x02\x02\u05D2\xD7\x03\x02\x02\x02\u05D3\u05D8" +
		"\x05\xDAn\x02\u05D4\u05D8\x05\xE2r\x02\u05D5\u05D8\x05\xE8u\x02\u05D6" +
		"\u05D8\x05\u012C\x97\x02\u05D7\u05D3\x03\x02\x02\x02\u05D7\u05D4\x03\x02" +
		"\x02\x02\u05D7\u05D5\x03\x02\x02\x02\u05D7\u05D6\x03\x02\x02\x02\u05D8" +
		"\xD9\x03\x02\x02\x02\u05D9\u05E1\x05V,\x02\u05DA\u05E1\x05`1\x02\u05DB" +
		"\u05DC\x07\xFF\x02\x02\u05DC\u05E1\x05\x96L\x02\u05DD\u05E1\x05\xDEp\x02" +
		"\u05DE\u05E1\x05\xE0q\x02\u05DF\u05E1\x05\x0E\b\x02\u05E0\u05D9\x03\x02" +
		"\x02\x02\u05E0\u05DA\x03\x02\x02\x02\u05E0\u05DB\x03\x02\x02\x02\u05E0" +
		"\u05DD\x03\x02\x02\x02\u05E0\u05DE\x03\x02\x02\x02\u05E0\u05DF\x03\x02" +
		"\x02\x02\u05E1\xDB\x03\x02\x02\x02\u05E2\u05E3\t\x13\x02\x02\u05E3\xDD" +
		"\x03\x02\x02\x02\u05E4\u05E5\x07a\x02\x02\u05E5\u05F0\x05\xDCo\x02\u05E6" +
		"\u05E7\x07a\x02\x02\u05E7\u05ED\x07\xDE\x02\x02\u05E8\u05E9\x07\u0147" +
		"\x02\x02\u05E9\u05EA\x05\x96L\x02\u05EA\u05EB\x07\u0148\x02\x02\u05EB" +
		"\u05EE\x03\x02\x02\x02\u05EC\u05EE\x05\x96L\x02\u05ED\u05E8\x03\x02\x02" +
		"\x02\u05ED\u05EC\x03\x02\x02\x02\u05ED\u05EE\x03\x02\x02\x02\u05EE\u05F0" +
		"\x03\x02\x02\x02\u05EF\u05E4\x03\x02\x02\x02\u05EF\u05E6\x03\x02\x02\x02" +
		"\u05F0\xDF\x03\x02\x02\x02\u05F1\u05F2\x077\x02\x02\u05F2\u05F3\x05\xDC" +
		"o\x02\u05F3\u05F4\x05\u0186\xC4\x02\u05F4\xE1\x03\x02\x02\x02\u05F5\u05F6" +
		"\x07\x07\x02\x02\u05F6\u05F7\x07\x14\x02\x02\u05F7\u05F8\x05\x04\x03\x02" +
		"\u05F8\u05F9\x05D#\x02\u05F9\u063F\x03\x02\x02\x02\u05FA\u05FB\x07\xA7" +
		"\x02\x02\u05FB\u05FC\x05\xD2j\x02\u05FC\u0603\x07\x88\x02\x02\u05FD\u0604" +
		"\x07\u015C\x02\x02\u05FE\u0601\x07k\x02\x02\u05FF\u0602\x05\xAEX\x02\u0600" +
		"\u0602\x05J&\x02\u0601\u05FF\x03\x02\x02\x02\u0601\u0600\x03\x02\x02\x02" +
		"\u0601\u0602\x03\x02\x02\x02\u0602\u0604\x03\x02\x02\x02\u0603\u05FD\x03" +
		"\x02\x02\x02\u0603\u05FE\x03\x02\x02\x02\u0604\u063F\x03\x02\x02\x02\u0605" +
		"\u0606\x07C\x02\x02\u0606\u0607\x07\x14\x02\x02\u0607\u063F\x05\x04\x03" +
		"\x02\u0608\u0609\x07\xED\x02\x02\u0609\u060A\x07\x14\x02\x02\u060A\u060B" +
		"\x05\x04\x03\x02\u060B\u060C\x05D#\x02\u060C\u063F\x03\x02\x02\x02\u060D" +
		"\u060E\x07x\x02\x02\u060E\u0613\x05\xAEX\x02\u060F\u0610\x07\u013E\x02" +
		"\x02\u0610\u0612\x05\xAEX\x02\u0611\u060F\x03\x02\x02\x02\u0612\u0615" +
		"\x03\x02\x02\x02\u0613\u0611\x03\x02\x02\x02\u0613\u0614\x03\x02\x02\x02" +
		"\u0614\u063F\x03\x02\x02\x02\u0615\u0613\x03\x02\x02\x02\u0616\u0617\x07" +
		"\x8D\x02\x02\u0617\u061C\x05\xAEX\x02\u0618\u0619\x07\u013E\x02\x02\u0619" +
		"\u061B\x05\xAEX\x02\u061A\u0618\x03\x02\x02\x02\u061B\u061E\x03\x02\x02" +
		"\x02\u061C\u061A\x03\x02\x02\x02\u061C\u061D\x03\x02\x02\x02\u061D\u062A" +
		"\x03\x02\x02\x02\u061E\u061C\x03\x02\x02\x02\u061F\u0620\x07\u0116\x02" +
		"\x02\u0620\u062B\x07\xC5\x02\x02\u0621\u0622\x07\xA2\x02\x02\u0622\u0627" +
		"\x05\x96L\x02\u0623\u0624\x07\u013E\x02\x02\u0624\u0626\x05\x96L\x02\u0625" +
		"\u0623\x03\x02\x02\x02\u0626\u0629\x03\x02\x02\x02\u0627\u0625\x03\x02" +
		"\x02\x02\u0627\u0628\x03\x02\x02\x02\u0628\u062B\x03\x02\x02\x02\u0629" +
		"\u0627\x03\x02\x02\x02\u062A\u061F\x03\x02\x02\x02\u062A\u0621\x03\x02" +
		"\x02\x02\u062B\u063F\x03\x02\x02\x02\u062C\u062D\x07\u0126\x02\x02\u062D" +
		"\u0632\x05\xAEX\x02\u062E\u062F\x07\u013E\x02\x02\u062F\u0631\x05\xAE" +
		"X\x02\u0630\u062E\x03\x02\x02\x02\u0631\u0634\x03\x02\x02\x02\u0632\u0630" +
		"\x03\x02\x02\x02\u0632\u0633\x03\x02\x02\x02\u0633\u0635\x03\x02\x02\x02" +
		"\u0634\u0632\x03\x02\x02\x02\u0635\u0636\x07\xA2\x02\x02\u0636\u063B\x05" +
		"\x96L\x02\u0637\u0638\x07\u013E\x02\x02\u0638\u063A\x05\x96L\x02\u0639" +
		"\u0637\x03\x02\x02\x02\u063A\u063D\x03\x02\x02\x02\u063B\u0639\x03\x02" +
		"\x02\x02\u063B\u063C\x03\x02\x02\x02\u063C\u063F\x03\x02\x02\x02\u063D" +
		"\u063B\x03\x02\x02\x02\u063E\u05F5\x03\x02\x02\x02\u063E\u05FA\x03\x02" +
		"\x02\x02\u063E\u0605\x03\x02\x02\x02\u063E\u0608\x03\x02\x02\x02\u063E" +
		"\u060D\x03\x02\x02\x02\u063E\u0616\x03\x02\x02\x02\u063E\u062C\x03\x02" +
		"\x02\x02\u063F\xE3\x03\x02\x02\x02\u0640\u0641\x07-\x02\x02\u0641\u0654" +
		"\x05\x96L\x02\u0642\u0654\t\x14\x02\x02\u0643\u0644\x07!\x02\x02\u0644" +
		"\u0654\x05\xAEX\x02\u0645\u0646\x07\u0111\x02\x02\u0646\u0654\x05\xAE" +
		"X\x02\u0647\u0649\x05\x96L\x02\u0648\u064A\t\x15\x02\x02\u0649\u0648\x03" +
		"\x02\x02\x02\u0649\u064A\x03\x02\x02\x02\u064A\u0651\x03\x02\x02\x02\u064B" +
		"\u064F\x07\u0136\x02\x02\u064C\u064D\x07\xF1\x02\x02\u064D\u064E\x07\xB0" +
		"\x02\x02\u064E\u0650\x05\xACW\x02\u064F\u064C\x03\x02\x02\x02\u064F\u0650" +
		"\x03\x02\x02\x02\u0650\u0652\x03\x02\x02\x02\u0651\u064B\x03\x02\x02\x02" +
		"\u0651\u0652\x03\x02\x02\x02\u0652\u0654\x03\x02\x02\x02\u0653\u0640\x03" +
		"\x02\x02\x02\u0653\u0642\x03\x02\x02\x02\u0653\u0643\x03\x02\x02\x02\u0653" +
		"\u0645\x03\x02\x02\x02\u0653\u0647\x03\x02\x02\x02\u0654\xE5\x03\x02\x02" +
		"\x02\u0655\u065A\x05\xE4s\x02\u0656\u0657\x07\u013E\x02\x02\u0657\u0659" +
		"\x05\xE4s\x02\u0658\u0656\x03\x02\x02\x02\u0659\u065C\x03\x02\x02\x02" +
		"\u065A\u0658\x03\x02\x02\x02\u065A\u065B\x03\x02\x02\x02\u065B\xE7\x03" +
		"\x02\x02\x02\u065C\u065A\x03\x02\x02\x02\u065D\u065E\x07\u0107\x02\x02" +
		"\u065E\u065F\x07\xEC\x02\x02\u065F\u0667\x05\u0190\xC9\x02\u0660\u0665" +
		"\x07\u0116\x02\x02\u0661\u0666\x05\x96L\x02\u0662\u0663\x07\xD8\x02\x02" +
		"\u0663\u0666\x05\x96L\x02\u0664\u0666\x07\xDD\x02\x02\u0665\u0661\x03" +
		"\x02\x02\x02\u0665\u0662\x03\x02\x02\x02\u0665\u0664\x03\x02\x02\x02\u0666" +
		"\u0668\x03\x02\x02\x02\u0667\u0660\x03\x02\x02\x02\u0667\u0668\x03\x02" +
		"\x02\x02\u0668\u0682\x03\x02\x02\x02\u0669\u067F\x07\u0133\x02\x02\u066A" +
		"\u066B\x07\x9F\x02\x02\u066B\u066C\x07\xB0\x02\x02\u066C\u067E\x05\xAC" +
		"W\x02\u066D\u066E\x07\xF1\x02\x02\u066E\u066F\x07\xB0\x02\x02\u066F\u067E" +
		"\x05\xACW\x02\u0670\u0671\x07\u0118\x02\x02\u0671\u0672\x07\xB0\x02\x02" +
		"\u0672\u067E\x05\xACW\x02\u0673\u0674\x07\x1E\x02\x02\u0674\u0675\x07" +
		"\xB0\x02\x02\u0675\u067E\x05\xACW\x02\u0676\u0677\x07\xD4\x02\x02\u0677" +
		"\u0678\x07\xA0\x02\x02\u0678\u067E\x05\xACW\x02\u0679\u067A\x07\u0118" +
		"\x02\x02\u067A\u067B\x07\xC8\x02\x02\u067B\u067C\x07\xD4\x02\x02\u067C" +
		"\u067E\x05J&\x02\u067D\u066A\x03\x02\x02\x02\u067D\u066D\x03\x02\x02\x02" +
		"\u067D\u0670\x03\x02\x02\x02\u067D\u0673\x03\x02\x02\x02\u067D\u0676\x03" +
		"\x02\x02\x02\u067D\u0679\x03\x02\x02\x02\u067E\u0681\x03\x02\x02\x02\u067F" +
		"\u067D\x03\x02\x02\x02\u067F\u0680\x03\x02\x02\x02\u0680\u0683\x03\x02" +
		"\x02\x02\u0681\u067F\x03\x02\x02\x02\u0682\u0669\x03\x02\x02\x02\u0682" +
		"\u0683\x03\x02\x02\x02\u0683\u06B9\x03\x02\x02\x02\u0684\u0685\x07\u010F" +
		"\x02\x02\u0685\u0686\x07\xEC\x02\x02\u0686\u06B9\x05\u0190\xC9\x02\u0687" +
		"\u0688\x07l\x02\x02\u0688\u0689\x07\xEC\x02\x02\u0689\u06B9\x05\u0190" +
		"\xC9\x02\u068A\u068C\x07\xD6\x02\x02\u068B\u068D\x05J&\x02\u068C\u068B" +
		"\x03\x02\x02\x02\u068C\u068D\x03\x02\x02\x02\u068D\u06B9\x03\x02\x02\x02" +
		"\u068E\u068F\x07\xBC\x02\x02\u068F\u0690\x05\x96L\x02\u0690\u0691\x07" +
		"\xA5\x02\x02\u0691\u06B9\x03\x02\x02\x02\u0692\u069B\x07\xDC\x02\x02\u0693" +
		"\u0695\x05\xE6t\x02\u0694\u0693\x03\x02\x02\x02\u0694\u0695\x03\x02\x02" +
		"\x02\u0695\u0697\x03\x02\x02\x02\u0696\u0698\x07\u013F\x02\x02\u0697\u0696" +
		"\x03\x02\x02\x02\u0697\u0698\x03\x02\x02\x02\u0698\u069C\x03\x02\x02\x02" +
		"\u0699\u069A\x07k\x02\x02\u069A\u069C\x05J&\x02\u069B\u0694\x03\x02\x02" +
		"\x02\u069B\u0699\x03\x02\x02\x02\u069B\u069C\x03\x02\x02\x02\u069C\u06B9" +
		"\x03\x02\x02\x02\u069D\u06A5\x07\xF9\x02\x02\u069E\u069F\x05\x96L\x02" +
		"\u069F\u06A0\t\x16\x02\x02\u06A0\u06A6\x03\x02\x02\x02\u06A1\u06A2\x07" +
		"\u0116\x02\x02\u06A2\u06A3\x07\u0118\x02\x02\u06A3\u06A4\x07\xC8\x02\x02" +
		"\u06A4\u06A6\x07\xD4\x02\x02\u06A5\u069E\x03\x02\x02\x02\u06A5\u06A1\x03" +
		"\x02\x02\x02\u06A6\u06B9\x03\x02\x02\x02\u06A7\u06A8\x07\xD1\x02\x02\u06A8" +
		"\u06A9\x07\u0116\x02\x02\u06A9\u06AA\x07\xEC\x02\x02\u06AA\u06AB\x05\u0190" +
		"\xC9\x02\u06AB\u06B4\x07\u0147\x02\x02\u06AC\u06B1\x05\x96L\x02\u06AD" +
		"\u06AE\x07\u013E\x02\x02\u06AE\u06B0\x05\x96L\x02\u06AF\u06AD\x03\x02" +
		"\x02\x02\u06B0\u06B3\x03\x02\x02\x02\u06B1\u06AF\x03\x02\x02\x02\u06B1" +
		"\u06B2\x03\x02\x02\x02\u06B2\u06B5\x03\x02\x02\x02\u06B3\u06B1\x03\x02" +
		"\x02\x02\u06B4\u06AC\x03\x02\x02\x02\u06B4\u06B5\x03\x02\x02\x02\u06B5" +
		"\u06B6\x03\x02\x02\x02\u06B6\u06B7\x07\u0148\x02\x02\u06B7\u06B9\x03\x02" +
		"\x02\x02\u06B8\u065D\x03\x02\x02\x02\u06B8\u0684\x03\x02\x02\x02\u06B8" +
		"\u0687\x03\x02\x02\x02\u06B8\u068A\x03\x02\x02\x02\u06B8\u068E\x03\x02" +
		"\x02\x02\u06B8\u0692\x03\x02\x02\x02\u06B8\u069D\x03\x02\x02\x02\u06B8" +
		"\u06A7\x03\x02\x02\x02\u06B9\xE9\x03\x02\x02\x02\u06BA\u06BF\x05\x04\x03" +
		"\x02\u06BB\u06BC\x07\u0149\x02\x02\u06BC\u06BD\x05\xACW\x02\u06BD\u06BE" +
		"\x07\u014A\x02\x02\u06BE\u06C0\x03\x02\x02\x02\u06BF\u06BB\x03\x02\x02" +
		"\x02\u06BF\u06C0\x03\x02\x02\x02\u06C0\u06C1\x03\x02\x02\x02\u06C1\u06C2" +
		"\x07\u014B\x02\x02\u06C2\u06C4\x03\x02\x02\x02\u06C3\u06BA\x03\x02\x02" +
		"\x02\u06C3\u06C4\x03\x02\x02\x02\u06C4\u06C5\x03\x02\x02\x02\u06C5\u06D6" +
		"\x05\x04\x03\x02\u06C6\u06CB\x05\x04\x03\x02\u06C7\u06C8\x07\u0149\x02" +
		"\x02\u06C8\u06C9\x05\xACW\x02\u06C9\u06CA\x07\u014A\x02\x02\u06CA\u06CC" +
		"\x03\x02\x02\x02\u06CB\u06C7\x03\x02\x02\x02\u06CB\u06CC\x03\x02\x02\x02" +
		"\u06CC\u06CD\x03\x02\x02\x02\u06CD\u06D3\x07\u014B\x02\x02\u06CE\u06D4" +
		"\x07\u013C\x02\x02\u06CF\u06D1\x05\x04\x03\x02\u06D0\u06D2\x05\xECw\x02" +
		"\u06D1\u06D0\x03\x02\x02\x02\u06D1\u06D2\x03\x02\x02\x02\u06D2\u06D4\x03" +
		"\x02\x02\x02\u06D3\u06CE\x03\x02\x02\x02\u06D3\u06CF\x03\x02\x02\x02\u06D4" +
		"\u06D6\x03\x02\x02\x02\u06D5\u06C3\x03\x02\x02\x02\u06D5\u06C6\x03\x02" +
		"\x02\x02\u06D6\xEB\x03\x02\x02\x02\u06D7\u06DA\t\x12\x02\x02\u06D8\u06D9" +
		"\x07\u015D\x02\x02\u06D9\u06DB\x07\u014B\x02\x02\u06DA\u06D8\x03\x02\x02" +
		"\x02\u06DA\u06DB\x03\x02\x02\x02\u06DB\u06DC\x03\x02\x02\x02\u06DC\u06DD" +
		"\x05\x04\x03\x02\u06DD\xED\x03\x02\x02\x02\u06DE\u06E3\x05\x96L\x02\u06DF" +
		"\u06E0\x07\u013E\x02\x02\u06E0\u06E2\x05\x96L\x02\u06E1\u06DF\x03\x02" +
		"\x02\x02\u06E2\u06E5\x03\x02\x02\x02\u06E3\u06E1\x03\x02\x02\x02\u06E3" +
		"\u06E4\x03\x02\x02\x02\u06E4\xEF\x03\x02\x02\x02\u06E5\u06E3\x03\x02\x02" +
		"\x02\u06E6\u06EB\x05\x96L\x02\u06E7\u06E8\x07\u013E\x02\x02\u06E8\u06EA" +
		"\x05\x96L\x02\u06E9\u06E7\x03\x02\x02\x02\u06EA\u06ED\x03\x02\x02\x02" +
		"\u06EB\u06E9\x03\x02\x02\x02\u06EB\u06EC\x03\x02\x02\x02\u06EC\xF1\x03" +
		"\x02\x02\x02\u06ED\u06EB\x03\x02\x02\x02\u06EE\u06EF\x07\x15\x02\x02\u06EF" +
		"\u06FF\x076\x02\x02\u06F0\u06F1\x07\x04\x02\x02\u06F1\u06FF\x076\x02\x02" +
		"\u06F2\u06F3\x07\x15\x02\x02\u06F3\u06F4\x07i\x02\x02\u06F4\u06FF\x05" +
		"\xEEx\x02\u06F5\u06F6\x07\x04\x02\x02\u06F6\u06F7\x07i\x02\x02\u06F7\u06FF" +
		"\x05\xEEx\x02\u06F8\u06F9\x07\xCA\x02\x02\u06F9\u06FA\x07\x9C\x02\x02" +
		"\u06FA\u06FB\x07\u0147\x02\x02\u06FB\u06FC\x05\xF0y\x02\u06FC\u06FD\x07" +
		"\u0148\x02\x02\u06FD\u06FF\x03\x02\x02\x02\u06FE\u06EE\x03\x02\x02\x02" +
		"\u06FE\u06F0\x03\x02\x02\x02\u06FE\u06F2\x03\x02\x02\x02\u06FE\u06F5\x03" +
		"\x02\x02\x02\u06FE\u06F8\x03\x02\x02\x02\u06FF\xF3\x03\x02\x02\x02\u0700" +
		"\u0701\x07\xBD\x02\x02\u0701\u0705\x07i\x02\x02\u0702\u0706\x05\xEAv\x02" +
		"\u0703\u0706\x07\xBD\x02\x02\u0704\u0706\x07\xDB\x02\x02\u0705\u0702\x03" +
		"\x02\x02\x02\u0705\u0703\x03\x02\x02\x02\u0705\u0704\x03\x02\x02\x02\u0706" +
		"\u0707\x03\x02\x02\x02\u0707\u070F\x05\u0186\xC4\x02\u0708\u0709\x077" +
		"\x02\x02\u0709\u070A\x076\x02\x02\u070A\u070F\x05\u0186\xC4\x02\u070B" +
		"\u070C\x07a\x02\x02\u070C\u070D\x076\x02\x02\u070D\u070F\x05\u0186\xC4" +
		"\x02\u070E\u0700\x03\x02\x02\x02\u070E\u0708\x03\x02\x02\x02\u070E\u070B" +
		"\x03\x02\x02\x02\u070F\xF5\x03\x02\x02\x02\u0710\u0711\t\x17\x02\x02\u0711" +
		"\xF7\x03\x02\x02\x02\u0712\u0714\t\x18\x02\x02\u0713\u0712\x03\x02\x02" +
		"\x02\u0713\u0714\x03\x02\x02\x02\u0714\u0715\x03\x02\x02\x02\u0715\u071A" +
		"\x05\xF6|\x02\u0716\u0717\x07\u013E\x02\x02\u0717\u0719\x05\xF6|\x02\u0718" +
		"\u0716\x03\x02\x02\x02\u0719\u071C\x03\x02\x02\x02\u071A\u0718\x03\x02" +
		"\x02\x02\u071A\u071B\x03\x02\x02\x02\u071B\xF9\x03\x02\x02\x02\u071C\u071A" +
		"\x03\x02\x02\x02\u071D\u071E\t\x19\x02\x02\u071E\u071F\x07\u0147\x02\x02" +
		"\u071F\u0720\x05\xF8}\x02\u0720\u0721\x07\u0148\x02\x02\u0721\xFB\x03" +
		"\x02\x02\x02\u0722\u0724\x05\xF2z\x02\u0723\u0725\x05N(\x02\u0724\u0723" +
		"\x03\x02\x02\x02\u0725\u0726\x03\x02\x02\x02\u0726\u0724\x03\x02\x02\x02" +
		"\u0726\u0727\x03\x02\x02\x02\u0727\xFD\x03\x02\x02\x02\u0728\u0735\x07" +
		"6\x02\x02\u0729\u072A\x07 \x02\x02\u072A\u072B\x07\xBB\x02\x02\u072B\u072C" +
		"\x05\xAEX\x02\u072C\u072D\x07\xCA\x02\x02\u072D\u072E\x05\u0132\x9A\x02" +
		"\u072E\u0736\x03\x02\x02\x02\u072F\u0730\x05\xAEX\x02\u0730\u0731\x07" +
		"\xCA\x02\x02\u0731\u0732\x05\u0132\x9A\x02\u0732\u0733\x07y\x02\x02\u0733" +
		"\u0734\x05\xEEx\x02\u0734\u0736\x03\x02\x02\x02\u0735\u0729\x03\x02\x02" +
		"\x02\u0735\u072F\x03\x02\x02\x02\u0736\u0738\x03\x02\x02\x02\u0737\u0739" +
		"\x05\xFA~\x02\u0738\u0737\x03\x02\x02\x02\u0738\u0739\x03\x02\x02\x02" +
		"\u0739\u073C\x03\x02\x02\x02\u073A\u073B\x07\x83\x02\x02\u073B\u073D\x05" +
		"\xACW\x02\u073C\u073A\x03\x02\x02\x02\u073C\u073D\x03\x02\x02\x02\u073D" +
		"\u0746\x03\x02\x02\x02\u073E\u0740\x05\xFC\x7F\x02\u073F\u073E\x03\x02" +
		"\x02\x02\u0740\u0741\x03\x02\x02\x02\u0741\u073F\x03\x02\x02\x02\u0741" +
		"\u0742\x03\x02\x02\x02\u0742\u0743\x03\x02\x02\x02\u0743\u0744\x07Z\x02" +
		"\x02\u0744\u0745\x076\x02\x02\u0745\u0747\x03\x02\x02\x02\u0746\u073F" +
		"\x03\x02\x02\x02\u0746\u0747\x03\x02\x02\x02\u0747\xFF\x03\x02\x02\x02" +
		"\u0748\u0749\x07R\x02\x02\u0749\u074A\x07\x14\x02\x02\u074A\u074B\x05" +
		"\x96L\x02\u074B\u074C\x07\u0116\x02\x02\u074C\u074E\x05\x96L\x02\u074D" +
		"\u074F\x05\xFA~\x02\u074E\u074D\x03\x02\x02\x02\u074E\u074F\x03\x02\x02" +
		"\x02\u074F\u0753\x03\x02\x02\x02\u0750\u0752\x05\u0104\x83\x02\u0751\u0750" +
		"\x03\x02\x02\x02\u0752\u0755\x03\x02\x02\x02\u0753\u0751\x03\x02\x02\x02" +
		"\u0753\u0754\x03\x02\x02\x02\u0754\u0758\x03\x02\x02\x02\u0755\u0753\x03" +
		"\x02\x02\x02\u0756\u0757\x07Z\x02\x02\u0757\u0759\x07R\x02\x02\u0758\u0756" +
		"\x03\x02\x02\x02\u0758\u0759\x03\x02\x02\x02\u0759\u0101\x03\x02\x02\x02" +
		"\u075A\u075B\x077\x02\x02\u075B\u075F\x07R\x02\x02\u075C\u075D\x07a\x02" +
		"\x02\u075D\u075F\x07R\x02\x02\u075E\u075A\x03\x02\x02\x02\u075E\u075C" +
		"\x03\x02\x02\x02\u075F\u0103\x03\x02\x02\x02\u0760\u0761\x07\xCA\x02\x02" +
		"\u0761\u0762\x07\x9C\x02\x02\u0762\u0763\x07\u0147\x02\x02\u0763\u0764" +
		"\x05\xF0y\x02\u0764\u0766\x07\u0148\x02\x02\u0765\u0767\x05N(\x02\u0766" +
		"\u0765\x03\x02\x02\x02\u0767\u0768\x03\x02\x02\x02\u0768\u0766\x03\x02" +
		"\x02\x02\u0768\u0769\x03\x02\x02\x02\u0769\u0105\x03\x02\x02\x02\u076A" +
		"\u0786\x07R\x02\x02\u076B\u076C\x07 \x02\x02\u076C\u076D\x07\xBB\x02\x02" +
		"\u076D\u0772\x05\x96L\x02\u076E\u076F\x07\u013E\x02\x02\u076F\u0771\x05" +
		"\x96L\x02\u0770\u076E\x03\x02\x02\x02\u0771\u0774\x03\x02\x02\x02\u0772" +
		"\u0770\x03\x02\x02\x02\u0772\u0773\x03\x02\x02\x02\u0773\u0787\x03\x02" +
		"\x02\x02\u0774\u0772\x03\x02\x02\x02\u0775\u077A\x05\x96L\x02\u0776\u0777" +
		"\x07\u013E\x02\x02\u0777\u0779\x05\x96L\x02\u0778\u0776\x03\x02\x02\x02" +
		"\u0779\u077C\x03\x02\x02\x02\u077A\u0778\x03\x02\x02\x02\u077A\u077B\x03" +
		"\x02\x02\x02\u077B\u0784\x03\x02\x02\x02\u077C\u077A\x03\x02\x02\x02\u077D" +
		"\u077E\x07\u0116\x02\x02\u077E\u0785\x05\xEEx\x02\u077F\u0780\x07\x0F" +
		"\x02\x02\u0780\u0781\x05\x96L\x02\u0781\u0782\x07\u013E\x02\x02\u0782" +
		"\u0783\x05\x96L\x02\u0783\u0785\x03\x02\x02\x02\u0784\u077D\x03\x02\x02" +
		"\x02\u0784\u077F\x03\x02\x02\x02\u0784\u0785\x03\x02\x02\x02\u0785\u0787" +
		"\x03\x02\x02\x02\u0786\u076B\x03\x02\x02\x02\u0786\u0775\x03\x02\x02\x02" +
		"\u0787\u0789\x03\x02\x02\x02\u0788\u078A\x05\xFA~\x02\u0789\u0788\x03" +
		"\x02\x02\x02\u0789\u078A\x03\x02\x02\x02\u078A\u078B\x03\x02\x02\x02\u078B" +
		"\u078C\x05\u0186\xC4\x02\u078C\u0107\x03\x02\x02\x02\u078D\u078E\x07[" +
		"\x02\x02\u078E\u0793\x05\x96L\x02\u078F\u0790\x07\u013E\x02\x02\u0790" +
		"\u0792\x05\x96L\x02\u0791\u078F\x03\x02\x02\x02\u0792\u0795\x03\x02\x02" +
		"\x02\u0793\u0791\x03\x02\x02\x02\u0793\u0794\x03\x02\x02\x02\u0794\u0797" +
		"\x03\x02\x02\x02\u0795\u0793\x03\x02\x02\x02\u0796\u0798\x05\xFA~\x02" +
		"\u0797\u0796\x03\x02\x02\x02\u0797\u0798\x03\x02\x02\x02\u0798\u0109\x03" +
		"\x02\x02\x02\u0799\u079A\x07\xAE\x02\x02\u079A\u079F\x05\x96L\x02\u079B" +
		"\u079C\x07\u013E\x02\x02\u079C\u079E\x05\x96L\x02\u079D\u079B\x03\x02" +
		"\x02\x02\u079E\u07A1\x03\x02\x02\x02\u079F\u079D\x03\x02\x02\x02\u079F" +
		"\u07A0\x03\x02\x02\x02\u07A0\u07A3\x03\x02\x02\x02\u07A1\u079F\x03\x02" +
		"\x02\x02\u07A2\u07A4\x05";
	private static readonly _serializedATNSegment4: string =
		"\xFA~\x02\u07A3\u07A2\x03\x02\x02\x02\u07A3\u07A4\x03\x02\x02\x02\u07A4" +
		"\u010B\x03\x02\x02\x02\u07A5\u07A6\x07\xDF\x02\x02\u07A6\u07AB\x05\x96" +
		"L\x02\u07A7\u07A8\x07\u013E\x02\x02\u07A8\u07AA\x05\x96L\x02\u07A9\u07A7" +
		"\x03\x02\x02\x02\u07AA\u07AD\x03\x02\x02\x02\u07AB\u07A9\x03\x02\x02\x02" +
		"\u07AB\u07AC\x03\x02\x02\x02\u07AC\u07AF\x03\x02\x02\x02\u07AD\u07AB\x03" +
		"\x02\x02\x02\u07AE\u07B0\x05\xFA~\x02\u07AF\u07AE\x03\x02\x02\x02\u07AF" +
		"\u07B0\x03\x02\x02\x02\u07B0\u07B1\x03\x02\x02\x02\u07B1\u07B3\x07q\x02" +
		"\x02\u07B2\u07B4\x07%\x02\x02\u07B3\u07B2\x03\x02\x02\x02\u07B3\u07B4" +
		"\x03\x02\x02\x02\u07B4\u07B5\x03\x02\x02\x02\u07B5\u07B8\x05\xAEX\x02" +
		"\u07B6\u07B7\x07\x83\x02\x02\u07B7\u07B9\x05\xACW\x02\u07B8\u07B6\x03" +
		"\x02\x02\x02\u07B8\u07B9\x03\x02\x02\x02\u07B9\u07BB\x03\x02\x02\x02\u07BA" +
		"\u07BC\x05\xFA~\x02\u07BB\u07BA\x03\x02\x02\x02\u07BB\u07BC\x03\x02\x02" +
		"\x02\u07BC\u07CC\x03\x02\x02\x02\u07BD\u07BE\x07\xCA\x02\x02\u07BE\u07BF" +
		"\x07\x9C\x02\x02\u07BF\u07C0\x07\u0147\x02\x02\u07C0\u07C1\x05\xF0y\x02" +
		"\u07C1\u07C3\x07\u0148\x02\x02\u07C2\u07C4\x05N(\x02\u07C3\u07C2\x03\x02" +
		"\x02\x02\u07C3\u07C4\x03\x02\x02\x02\u07C4\u07C6\x03\x02\x02\x02\u07C5" +
		"\u07BD\x03\x02\x02\x02\u07C6\u07C9\x03\x02\x02\x02\u07C7\u07C5\x03\x02" +
		"\x02\x02\u07C7\u07C8\x03\x02\x02\x02\u07C8\u07CA\x03\x02\x02\x02\u07C9" +
		"\u07C7\x03\x02\x02\x02\u07CA\u07CB\x07Z\x02\x02\u07CB\u07CD\x07\xDF\x02" +
		"\x02\u07CC\u07C7\x03\x02\x02\x02\u07CC\u07CD\x03\x02\x02\x02\u07CD\u010D" +
		"\x03\x02\x02\x02\u07CE\u07CF\t\x1A\x02\x02\u07CF\u07DD\t\x1B\x02\x02\u07D0" +
		"\u07D1\x07\x15\x02\x02\u07D1\u07D2\x07i\x02\x02\u07D2\u07DD\x05\xEEx\x02" +
		"\u07D3\u07D4\x07\x04\x02\x02\u07D4\u07D5\x07i\x02\x02\u07D5\u07DD\x05" +
		"\xEEx\x02\u07D6\u07D7\x07\xCA\x02\x02\u07D7\u07D8\x07\x9C\x02\x02\u07D8" +
		"\u07D9\x07\u0147\x02\x02\u07D9\u07DA\x05\xF0y\x02\u07DA\u07DB\x07\u0148" +
		"\x02\x02\u07DB\u07DD\x03\x02\x02\x02\u07DC\u07CE\x03\x02\x02\x02\u07DC" +
		"\u07D0\x03\x02\x02\x02\u07DC\u07D3\x03\x02\x02\x02\u07DC\u07D6\x03\x02" +
		"\x02\x02\u07DD\u010F\x03\x02\x02\x02\u07DE\u07DF\x07\xBD\x02\x02\u07DF" +
		"\u07E2\x07i\x02\x02\u07E0\u07E3\x05\xEAv\x02\u07E1\u07E3\t\x1C\x02\x02" +
		"\u07E2\u07E0\x03\x02\x02\x02\u07E2\u07E1\x03\x02\x02\x02\u07E3\u07EB\x03" +
		"\x02\x02\x02\u07E4\u07E5\x077\x02\x02\u07E5\u07E9\x07\x8E\x02\x02\u07E6" +
		"\u07E7\x07a\x02\x02\u07E7\u07E9\x07\x8E\x02\x02\u07E8\u07E4\x03\x02\x02" +
		"\x02\u07E8\u07E6\x03\x02\x02\x02\u07E9\u07EB\x03\x02\x02\x02\u07EA\u07DE" +
		"\x03\x02\x02\x02\u07EA\u07E8\x03\x02\x02\x02\u07EB\u0111\x03\x02\x02\x02" +
		"\u07EC\u07F0\x05\u010E\x88\x02\u07ED\u07EF\x05N(\x02\u07EE\u07ED\x03\x02" +
		"\x02\x02\u07EF\u07F2\x03\x02\x02\x02\u07F0\u07EE\x03\x02\x02\x02\u07F0" +
		"\u07F1\x03\x02\x02\x02\u07F1\u0113\x03\x02\x02\x02\u07F2\u07F0\x03\x02" +
		"\x02\x02\u07F3\u0811\x07\x8E\x02\x02\u07F4\u07F5\x07 \x02\x02\u07F5\u07F6" +
		"\x07\xBB\x02\x02\u07F6\u07FB\x05\x96L\x02\u07F7\u07F8\x07\u013E\x02\x02" +
		"\u07F8\u07FA\x05\x96L\x02\u07F9\u07F7\x03\x02\x02\x02\u07FA\u07FD\x03" +
		"\x02\x02\x02\u07FB\u07F9\x03\x02\x02\x02\u07FB\u07FC\x03\x02\x02\x02\u07FC" +
		"\u0800\x03\x02\x02\x02\u07FD\u07FB\x03\x02\x02\x02\u07FE\u07FF\x07\u0134" +
		"\x02\x02\u07FF\u0801\x07I\x02\x02\u0800\u07FE\x03\x02\x02\x02\u0800\u0801" +
		"\x03\x02\x02\x02\u0801\u0812\x03\x02\x02\x02\u0802\u0807\x05\x96L\x02" +
		"\u0803\u0804\x07\u013E\x02\x02\u0804\u0806\x05\x96L\x02\u0805\u0803\x03" +
		"\x02\x02\x02\u0806\u0809\x03\x02\x02\x02\u0807\u0805\x03\x02\x02\x02\u0807" +
		"\u0808\x03\x02\x02\x02\u0808\u080C\x03\x02\x02\x02\u0809\u0807\x03\x02" +
		"\x02\x02\u080A\u080B\x07\u0134\x02\x02\u080B\u080D\x07I\x02\x02\u080C" +
		"\u080A\x03\x02\x02\x02\u080C\u080D\x03\x02\x02\x02\u080D\u080E\x03\x02" +
		"\x02\x02\u080E\u080F\x07y\x02\x02\u080F\u0810\x05\xEEx\x02\u0810\u0812" +
		"\x03\x02\x02\x02\u0811\u07F4\x03\x02\x02\x02\u0811\u0802\x03\x02\x02\x02" +
		"\u0812\u0814\x03\x02\x02\x02\u0813\u0815\x05\xFA~\x02\u0814\u0813\x03" +
		"\x02\x02\x02\u0814\u0815\x03\x02\x02\x02\u0815\u0818\x03\x02\x02\x02\u0816" +
		"\u0817\x07\x83\x02\x02\u0817\u0819\x05\xACW\x02\u0818\u0816\x03\x02\x02" +
		"\x02\u0818\u0819\x03\x02\x02\x02\u0819\u0822\x03\x02\x02\x02\u081A\u081C" +
		"\x05\u0112\x8A\x02\u081B\u081A\x03\x02\x02\x02\u081C\u081D\x03\x02\x02" +
		"\x02\u081D\u081B\x03\x02\x02\x02\u081D\u081E\x03\x02\x02\x02\u081E\u081F" +
		"\x03\x02\x02\x02\u081F\u0820\x07Z\x02\x02\u0820\u0821\x07\x8E\x02\x02" +
		"\u0821\u0823\x03\x02\x02\x02\u0822\u081B\x03\x02\x02\x02\u0822\u0823\x03" +
		"\x02\x02\x02\u0823\u0115\x03\x02\x02\x02\u0824\u0825\x07\x8E\x02\x02\u0825" +
		"\u0826\x07\x14\x02\x02\u0826\u0829\x05\x96L\x02\u0827\u0828\x07\u0134" +
		"\x02\x02\u0828\u082A\x07I\x02\x02\u0829\u0827\x03\x02\x02\x02\u0829\u082A" +
		"\x03\x02\x02\x02\u082A\u082B\x03\x02\x02\x02\u082B\u082C\x07y\x02\x02" +
		"\u082C\u0831\x05\x96L\x02\u082D\u082E\x07\u013E\x02\x02\u082E\u0830\x05" +
		"\x96L\x02\u082F\u082D\x03\x02\x02\x02\u0830\u0833\x03\x02\x02\x02\u0831" +
		"\u082F\x03\x02\x02\x02\u0831\u0832\x03\x02\x02\x02\u0832\u0836\x03\x02" +
		"\x02\x02\u0833\u0831\x03\x02\x02\x02\u0834\u0835\x07\x83\x02\x02\u0835" +
		"\u0837\x05\xACW\x02\u0836\u0834\x03\x02\x02\x02\u0836\u0837\x03\x02\x02" +
		"\x02\u0837\u0839\x03\x02\x02\x02\u0838\u083A\x05\xFA~\x02\u0839\u0838" +
		"\x03\x02\x02\x02\u0839\u083A\x03\x02\x02\x02\u083A\u0843\x03\x02\x02\x02" +
		"\u083B\u083D\x05\u0112\x8A\x02\u083C\u083B\x03\x02\x02\x02\u083D\u083E" +
		"\x03\x02\x02\x02\u083E\u083C\x03\x02\x02\x02\u083E\u083F\x03\x02\x02\x02" +
		"\u083F\u0840\x03\x02\x02\x02\u0840\u0841\x07Z\x02\x02\u0841\u0842\x07" +
		"\x8E\x02\x02\u0842\u0844\x03\x02\x02\x02\u0843\u083C\x03\x02\x02\x02\u0843" +
		"\u0844\x03\x02\x02\x02\u0844\u0117\x03\x02\x02\x02\u0845\u0846\x07\x15" +
		"\x02\x02\u0846\u0858\x07\xAD\x02\x02\u0847\u084D\x07/\x02\x02\u0848\u0849" +
		"\x07\x9C\x02\x02\u0849\u084A\x07\u0147\x02\x02\u084A\u084B\x05\xF0y\x02" +
		"\u084B\u084C\x07\u0148\x02\x02\u084C\u084E\x03\x02\x02\x02\u084D\u0848" +
		"\x03\x02\x02\x02\u084D\u084E\x03\x02\x02\x02\u084E\u084F\x03\x02\x02\x02" +
		"\u084F\u0851\x05\x96L\x02\u0850\u0852\x05\x96L\x02\u0851\u0850\x03\x02" +
		"\x02\x02\u0851\u0852\x03\x02\x02\x02\u0852\u0855\x03\x02\x02\x02\u0853" +
		"\u0854\x07\x83\x02\x02\u0854\u0856\x05\xACW\x02\u0855\u0853\x03\x02\x02" +
		"\x02\u0855\u0856\x03\x02\x02\x02\u0856\u0858\x03\x02\x02\x02\u0857\u0845" +
		"\x03\x02\x02\x02\u0857\u0847\x03\x02\x02\x02\u0858\u0119\x03\x02\x02\x02" +
		"\u0859\u085A\x07\xBD\x02\x02\u085A\u085D\x07\xCC\x02\x02\u085B\u085E\x05" +
		"\x96L\x02\u085C\u085E\x07\b\x02\x02\u085D\u085B\x03\x02\x02\x02\u085D" +
		"\u085C\x03\x02\x02\x02\u085E\u0863\x03\x02\x02\x02\u085F\u0860\x07\u013E" +
		"\x02\x02\u0860\u0862\x05\x96L\x02\u0861\u085F\x03\x02\x02\x02\u0862\u0865" +
		"\x03\x02\x02\x02\u0863\u0861\x03\x02\x02\x02\u0863\u0864\x03\x02\x02\x02" +
		"\u0864\u0885\x03\x02\x02\x02\u0865\u0863\x03\x02\x02\x02\u0866\u0867\x07" +
		"\xFD\x02\x02\u0867\u086A\x07\xCC\x02\x02\u0868\u086B\x05\x96L\x02\u0869" +
		"\u086B\x07\b\x02\x02\u086A\u0868\x03\x02\x02\x02\u086A\u0869\x03\x02\x02" +
		"\x02\u086B\u0870\x03\x02\x02\x02\u086C\u086D\x07\u013E\x02\x02\u086D\u086F" +
		"\x05\x96L\x02\u086E\u086C\x03\x02\x02\x02\u086F\u0872\x03\x02\x02\x02" +
		"\u0870\u086E\x03\x02\x02\x02\u0870\u0871\x03\x02\x02\x02\u0871\u0885\x03" +
		"\x02\x02\x02\u0872\u0870\x03\x02\x02\x02\u0873\u0874\x07\x84\x02\x02\u0874" +
		"\u0877\x07\xCC\x02\x02\u0875\u0878\x05\x96L\x02\u0876\u0878\x07\b\x02" +
		"\x02\u0877\u0875\x03\x02\x02\x02\u0877\u0876\x03\x02\x02\x02\u0878\u087D" +
		"\x03\x02\x02\x02\u0879\u087A\x07\u013E\x02\x02\u087A\u087C\x05\x96L\x02" +
		"\u087B\u0879\x03\x02\x02\x02\u087C\u087F\x03\x02\x02\x02\u087D\u087B\x03" +
		"\x02\x02\x02\u087D\u087E\x03\x02\x02\x02\u087E\u0885\x03\x02\x02\x02\u087F" +
		"\u087D\x03\x02\x02\x02\u0880\u0881\x077\x02\x02\u0881\u0885\x07\xAD\x02" +
		"\x02\u0882\u0883\x07a\x02\x02\u0883\u0885\x07\xAD\x02\x02\u0884\u0859" +
		"\x03\x02\x02\x02\u0884\u0866\x03\x02\x02\x02\u0884\u0873\x03\x02\x02\x02" +
		"\u0884\u0880\x03\x02\x02\x02\u0884\u0882\x03\x02\x02\x02\u0885\u011B\x03" +
		"\x02\x02\x02\u0886\u0888\x05\u0118\x8D\x02\u0887\u0889\x05N(\x02\u0888" +
		"\u0887\x03\x02\x02\x02\u0888\u0889\x03\x02\x02\x02\u0889\u011D\x03\x02" +
		"\x02\x02\u088A\u088B\x07\xAD\x02\x02\u088B\u088F\x05\x96L\x02\u088C\u088E" +
		"\x05\u011C\x8F\x02\u088D\u088C\x03\x02\x02\x02\u088E\u0891\x03\x02\x02" +
		"\x02\u088F\u088D\x03\x02\x02\x02\u088F\u0890\x03\x02\x02\x02\u0890\u0892" +
		"\x03\x02\x02\x02\u0891\u088F\x03\x02\x02\x02\u0892\u0893\x07Z\x02\x02" +
		"\u0893\u0894\x07\xAD\x02\x02\u0894\u011F\x03\x02\x02\x02\u0895\u0898\x07" +
		"m\x02\x02\u0896\u0897\x07\u013A\x02\x02\u0897\u0899\x05\xACW\x02\u0898" +
		"\u0896\x03\x02\x02\x02\u0898\u0899\x03\x02\x02\x02\u0899\u08A1\x03\x02" +
		"\x02\x02\u089A\u08A1\x05\xACW\x02\u089B\u089E\x07\x9E\x02\x02\u089C\u089D" +
		"\x07\u013B\x02\x02\u089D\u089F\x05\xACW\x02\u089E\u089C\x03\x02\x02\x02" +
		"\u089E\u089F\x03\x02\x02\x02\u089F\u08A1\x03\x02\x02\x02\u08A0\u0895\x03" +
		"\x02\x02\x02\u08A0\u089A\x03\x02\x02\x02\u08A0\u089B\x03\x02\x02\x02\u08A1" +
		"\u0121\x03\x02\x02\x02\u08A2\u08AF\t\x18\x02\x02\u08A3\u08AF\x07\xF0\x02" +
		"\x02\u08A4\u08AF\x07\x1D\x02\x02\u08A5\u08A6\t\x1D\x02\x02\u08A6\u08A7" +
		"\x07\xA3\x02\x02\u08A7\u08AF\x05\u0120\x91\x02\u08A8\u08A9\x070\x02\x02" +
		"\u08A9\u08AC\x07\xA3\x02\x02\u08AA\u08AD\x05\u0120\x91\x02\u08AB\u08AD" +
		"\x07\xC9\x02\x02\u08AC\u08AA\x03\x02\x02\x02\u08AC\u08AB\x03\x02\x02\x02" +
		"\u08AD\u08AF\x03\x02\x02\x02\u08AE\u08A2\x03\x02\x02\x02\u08AE\u08A3\x03" +
		"\x02\x02\x02\u08AE\u08A4\x03\x02\x02\x02\u08AE\u08A5\x03\x02\x02\x02\u08AE" +
		"\u08A8\x03\x02\x02\x02\u08AF\u0123\x03\x02\x02\x02\u08B0\u08B5\x05\u0122" +
		"\x92\x02\u08B1\u08B2\x07\u013E\x02\x02\u08B2\u08B4\x05\u0122\x92\x02\u08B3" +
		"\u08B1\x03\x02\x02\x02\u08B4\u08B7\x03\x02\x02\x02\u08B5\u08B3\x03\x02" +
		"\x02\x02\u08B5\u08B6\x03\x02\x02\x02\u08B6\u0125\x03\x02\x02\x02\u08B7" +
		"\u08B5\x03\x02\x02\x02\u08B8\u08B9\t\x19\x02\x02\u08B9\u08BA\x07\u0147" +
		"\x02\x02\u08BA\u08BB\x05\u0124\x93\x02\u08BB\u08BC\x07\u0148\x02\x02\u08BC" +
		"\u0127\x03\x02\x02\x02\u08BD\u08BE\x07\xAE\x02\x02\u08BE\u08BF\x07\xA3" +
		"\x02\x02\u08BF\u08F5\x05\x96L\x02\u08C0\u08C1\x07\xDF\x02\x02\u08C1\u08C2" +
		"\x07\xA3\x02\x02\u08C2\u08F5\x05\x96L\x02\u08C3\u08C4\x07\xAD\x02\x02" +
		"\u08C4\u08C5\x07\xA3\x02\x02\u08C5\u08F5\x05\x96L\x02\u08C6\u08C7\x07" +
		"0\x02\x02\u08C7\u08C8\x07\xA3\x02\x02\u08C8\u08F5\x05\x96L\x02\u08C9\u08CA" +
		"\x07[\x02\x02\u08CA\u08CB\x07\xA3\x02\x02\u08CB\u08F5\x05\x96L\x02\u08CC" +
		"\u08CD\x07r\x02\x02\u08CD\u08CE\x07\xA3\x02\x02\u08CE\u08F5\x05\x96L\x02" +
		"\u08CF\u08D3\x07\x8E\x02\x02\u08D0\u08D4\x07\u015E\x02\x02\u08D1\u08D2" +
		"\x07\xC0\x02\x02\u08D2\u08D4\x07\u015E\x02\x02\u08D3\u08D0\x03\x02\x02" +
		"\x02\u08D3\u08D1\x03\x02\x02\x02\u08D4\u08F5\x03\x02\x02\x02\u08D5\u08D6" +
		"\x07\x8F\x02\x02\u08D6\u08D7\x07\x9C\x02\x02\u08D7\u08F5\x05\x96L\x02" +
		"\u08D8\u08D9\x07L\x02\x02\u08D9\u08DA\x07\x9C\x02\x02\u08DA\u08F5\x05" +
		"\x96L\x02\u08DB\u08DC\x07\xBD\x02\x02\u08DC\u08DD\x07\x9C\x02\x02\u08DD" +
		"\u08F5\x05\x96L\x02\u08DE\u08DF\x07\xDB\x02\x02\u08DF\u08E0\x07\x9C\x02" +
		"\x02\u08E0\u08F5\x05\x96L\x02\u08E1\u08E2\x07\x05\x02\x02\u08E2\u08E3" +
		"\x07\x9C\x02\x02\u08E3\u08F5\x05\x96L\x02\u08E4\u08E5\x07\x83\x02\x02" +
		"\u08E5\u08E6\x07k\x02\x02\u08E6\u08F5\x05\x96L\x02\u08E7\u08E8\x07\x83" +
		"\x02\x02\u08E8\u08E9\x07\x9C\x02\x02\u08E9\u08F5\x05\x96L\x02\u08EA\u08EB" +
		"\x07\x8E\x02\x02\u08EB\u08F5\x05\xFA~\x02\u08EC\u08ED\x07R\x02\x02\u08ED" +
		"\u08F5\x05\xFA~\x02\u08EE\u08EF\x07\u0104\x02\x02\u08EF\u08F0\x07\x95" +
		"\x02\x02\u08F0\u08F5\t\x1E\x02\x02\u08F1\u08F2\x07i\x02\x02\u08F2\u08F3" +
		"\x07\xD0\x02\x02\u08F3\u08F5\t\x1F\x02\x02\u08F4\u08BD\x03\x02\x02\x02" +
		"\u08F4\u08C0\x03\x02\x02\x02\u08F4\u08C3\x03\x02\x02\x02\u08F4\u08C6\x03" +
		"\x02\x02\x02\u08F4\u08C9\x03\x02\x02\x02\u08F4\u08CC\x03\x02\x02\x02\u08F4" +
		"\u08CF\x03\x02\x02\x02\u08F4\u08D5\x03\x02\x02\x02\u08F4\u08D8\x03\x02" +
		"\x02\x02\u08F4\u08DB\x03\x02\x02\x02\u08F4\u08DE\x03\x02\x02\x02\u08F4" +
		"\u08E1\x03\x02\x02\x02\u08F4\u08E4\x03\x02\x02\x02\u08F4\u08E7\x03\x02" +
		"\x02\x02\u08F4\u08EA\x03\x02\x02\x02\u08F4\u08EC\x03\x02\x02\x02\u08F4" +
		"\u08EE\x03\x02\x02\x02\u08F4\u08F1\x03\x02\x02\x02\u08F5\u0129\x03\x02" +
		"\x02\x02\u08F6\u08F7\x07\xCD\x02\x02\u08F7\u08FC\x05\u0128\x95\x02\u08F8" +
		"\u08F9\x07\u013E\x02\x02\u08F9\u08FB\x05\u0128\x95\x02\u08FA\u08F8\x03" +
		"\x02\x02\x02\u08FB\u08FE\x03\x02\x02\x02\u08FC\u08FA\x03\x02\x02\x02\u08FC" +
		"\u08FD\x03\x02\x02\x02\u08FD\u012B\x03\x02\x02\x02\u08FE\u08FC\x03\x02" +
		"\x02\x02\u08FF\u0908\x07)\x02\x02\u0900\u0909\x07r\x02\x02\u0901\u0902" +
		"\x07\u0135\x02\x02\u0902\u0909\x05\x04\x03\x02\u0903\u0905\x07\u0135\x02" +
		"\x02\u0904\u0903\x03\x02\x02\x02\u0904\u0905\x03\x02\x02\x02\u0905\u0906" +
		"\x03\x02\x02\x02\u0906\u0909\x07\xF6\x02\x02\u0907\u0909\x05\xEEx\x02" +
		"\u0908\u0900\x03\x02\x02\x02\u0908\u0901\x03\x02\x02\x02\u0908\u0904\x03" +
		"\x02\x02\x02\u0908\u0907\x03\x02\x02\x02\u0909\u0959\x03\x02\x02\x02\u090A" +
		"\u090B\x07+\x02\x02\u090B\u090C\x07\u0135\x02\x02\u090C\u090D\x05\x04" +
		"\x03\x02\u090D\u090E\x05\u0186\xC4\x02\u090E\u0959\x03\x02\x02\x02\u090F" +
		"\u0910\x07+\x02\x02\u0910\u0911\x07r\x02\x02\u0911\u0912\x05\x04\x03\x02" +
		"\u0912\u0913\x05\u0186\xC4\x02\u0913\u0959\x03\x02\x02\x02\u0914\u0959" +
		"\x05\xFE\x80\x02\u0915\u0916\x07<\x02\x02\u0916\u0917\x07\u0135\x02\x02" +
		"\u0917\u091A\x07\x98\x02\x02\u0918\u091B\x07\xF6\x02\x02\u0919\u091B\x05" +
		"\x04\x03\x02\u091A\u0918\x03\x02\x02\x02\u091A\u0919\x03\x02\x02\x02\u091B" +
		"\u091C\x03\x02\x02\x02\u091C\u0959\x05\u0186\xC4\x02\u091D\u0959\x05\u0106" +
		"\x84\x02\u091E\u0959\x05\u0100\x81\x02\u091F\u0920\x07R\x02\x02\u0920" +
		"\u0921\x07r\x02\x02\u0921\u0923\x05\x04\x03\x02\u0922\u0924\x05\xFA~\x02" +
		"\u0923\u0922\x03\x02\x02\x02\u0923\u0924\x03\x02\x02\x02\u0924\u0925\x03" +
		"\x02\x02\x02\u0925\u0926\x05\u0186\xC4\x02\u0926\u0959\x03\x02\x02\x02" +
		"\u0927\u0959\x05\u0108\x85\x02\u0928\u0959\x05\u010A\x86\x02\u0929\u0959" +
		"\x05\u010C\x87\x02\u092A\u0959\x05\u0114\x8B\x02\u092B\u0959\x05\u0116" +
		"\x8C\x02\u092C\u0959\x05\u011E\x90\x02\u092D\u092E\x07\xCB\x02\x02\u092E" +
		"\u092F\x07r\x02\x02\u092F\u0930\x05\x96L\x02\u0930\u0931\x07y\x02\x02" +
		"\u0931\u0932\x05\x96L\x02\u0932\u0959\x03\x02\x02\x02\u0933\u0934\x07" +
		"\xCB\x02\x02\u0934\u0935\x07\u0135\x02\x02\u0935\u0936\x05\x96L\x02\u0936" +
		"\u0937\x07\x0F\x02\x02\u0937\u0938\x05\x96L\x02\u0938\u0939\x07\u013E" +
		"\x02\x02\u0939\u0944\x05\x96L\x02\u093A\u093B\x07\u0133\x02\x02\u093B" +
		"\u093C\x07r\x02\x02\u093C\u0945\x05\x96L\x02\u093D\u093E\x07\u0133\x02" +
		"\x02\u093E\u093F\x05\x96L\x02\u093F\u0940\x07\xF4\x02\x02\u0940\u0941" +
		"\x07\u013E\x02\x02\u0941\u0942\x05\x96L\x02\u0942\u0943\x07.\x02\x02\u0943" +
		"\u0945\x03\x02\x02\x02\u0944\u093A\x03\x02\x02\x02\u0944\u093D\x03\x02" +
		"\x02\x02\u0945\u0947\x03\x02\x02\x02\u0946\u0948\x05\u0126\x94\x02\u0947" +
		"\u0946\x03\x02\x02\x02\u0947\u0948\x03\x02\x02\x02\u0948\u0959\x03\x02" +
		"\x02\x02\u0949\u0959\x05\u012A\x96\x02\u094A\u094B\x07\xF7\x02\x02\u094B" +
		"\u0950\x05\xEEx\x02\u094C\u094D\x07\u013E\x02\x02\u094D\u094F\x05\xEE" +
		"x\x02\u094E\u094C\x03\x02\x02\x02\u094F\u0952\x03\x02\x02\x02\u0950\u094E" +
		"\x03\x02\x02\x02\u0950\u0951\x03\x02\x02\x02\u0951\u0953\x03\x02\x02\x02" +
		"\u0952\u0950\x03\x02\x02\x02\u0953\u0956\t \x02\x02\u0954\u0955\x07 \x02" +
		"\x02\u0955\u0957\x05\xACW\x02\u0956\u0954\x03\x02\x02\x02\u0956\u0957" +
		"\x03\x02\x02\x02\u0957\u0959\x03\x02\x02\x02\u0958\u08FF\x03\x02\x02\x02" +
		"\u0958\u090A\x03\x02\x02\x02\u0958\u090F\x03\x02\x02\x02\u0958\u0914\x03" +
		"\x02\x02\x02\u0958\u0915\x03\x02\x02\x02\u0958\u091D\x03\x02\x02\x02\u0958" +
		"\u091E\x03\x02\x02\x02\u0958\u091F\x03\x02\x02\x02\u0958\u0927\x03\x02" +
		"\x02\x02\u0958\u0928\x03\x02\x02\x02\u0958\u0929\x03\x02\x02\x02\u0958" +
		"\u092A\x03\x02\x02\x02\u0958\u092B\x03\x02\x02\x02\u0958\u092C\x03\x02" +
		"\x02\x02\u0958\u092D\x03\x02\x02\x02\u0958\u0933\x03\x02\x02\x02\u0958" +
		"\u0949\x03\x02\x02\x02\u0958\u094A\x03\x02\x02\x02\u0959\u012D\x03\x02" +
		"\x02\x02\u095A\u0962\x05\u0130\x99\x02\u095B\u0962\x05\u013C\x9F\x02\u095C" +
		"\u0962\x05\u013E\xA0\x02\u095D\u0962\x05\u0170\xB9\x02\u095E\u0962\x05" +
		"\u0172\xBA\x02\u095F\u0962\x05\u0178\xBD\x02\u0960\u0962\x05\u0176\xBC" +
		"\x02\u0961\u095A\x03\x02\x02\x02\u0961\u095B\x03\x02\x02\x02\u0961\u095C" +
		"\x03\x02\x02\x02\u0961\u095D\x03\x02\x02\x02\u0961\u095E\x03\x02\x02\x02" +
		"\u0961\u095F\x03\x02\x02\x02\u0961\u0960\x03\x02\x02\x02\u0962\u012F\x03" +
		"\x02\x02\x02\u0963\u0964\x07+\x02\x02\u0964\u0965\x05\u0136\x9C\x02\u0965" +
		"\u0966\x05\u0186\xC4\x02\u0966\u09AB\x03\x02\x02\x02\u0967\u0968\x07G" +
		"\x02\x02\u0968\u0987\x05\u0136\x9C\x02\u0969\u096C\x07=\x02\x02\u096A" +
		"\u096B\x07\u0133\x02\x02\u096B\u096D\x07\x85\x02\x02\u096C\u096A\x03\x02" +
		"\x02\x02\u096C\u096D\x03\x02\x02\x02\u096D\u096E\x03\x02\x02\x02\u096E" +
		"\u097A\x07q\x02\x02\u096F\u0976\x05\u0140\xA1\x02\u0970\u0971\x07q\x02" +
		"\x02\u0971\u0974\x07\u0123\x02\x02\u0972\u0973\x07\xC8\x02\x02\u0973\u0975" +
		"\x05\u0132\x9A\x02\u0974\u0972\x03\x02\x02\x02\u0974\u0975\x03\x02\x02" +
		"\x02\u0975\u0977\x03\x02\x02\x02\u0976\u0970\x03\x02\x02\x02\u0976\u0977" +
		"\x03\x02\x02\x02\u0977\u097B\x03\x02\x02\x02\u0978\u097B\x05\u0168\xB5" +
		"\x02\u0979\u097B\x05\u0134\x9B\x02\u097A\u096F\x03\x02\x02\x02\u097A\u0978" +
		"\x03\x02\x02\x02\u097A\u0979\x03\x02\x02\x02\u097B\u0988\x03\x02\x02\x02" +
		"\u097C\u097D\x07\xF7\x02\x02\u097D\u0980\x07=\x02\x02\u097E\u097F\x07" +
		"\u0133\x02\x02\u097F\u0981\x07\x85\x02\x02\u0980\u097E\x03\x02\x02\x02" +
		"\u0980\u0981\x03\x02\x02\x02\u0981\u0982\x03\x02\x02\x02\u0982\u0985\x07" +
		"q\x02\x02\u0983\u0986\x05\u0140\xA1\x02\u0984\u0986\x05\u0134\x9B\x02" +
		"\u0985\u0983\x03\x02\x02\x02\u0985\u0984\x03\x02\x02\x02\u0986\u0988\x03" +
		"\x02\x02\x02\u0987\u0969\x03\x02\x02\x02\u0987\u097C\x03\x02\x02\x02\u0988" +
		"\u09AB\x03\x02\x02\x02\u0989\u0993\x07h\x02\x02\u098A\u0994\x07\xBD\x02" +
		"\x02\u098B\u0994\t!\x02\x02\u098C\u0994\x07m\x02\x02\u098D\u0994\x07\x9E" +
		"\x02\x02\u098E\u0994\x07<\x02\x02\u098F\u0990\x07\xE7\x02\x02\u0990\u0994" +
		"\x05\x96L\x02\u0991\u0992\x07\x03\x02\x02\u0992\u0994\x05\x96L\x02\u0993" +
		"\u098A\x03\x02\x02\x02\u0993\u098B\x03\x02\x02\x02\u0993\u098C\x03\x02" +
		"\x02\x02\u0993\u098D\x03\x02\x02\x02\u0993\u098E\x03\x02\x02\x02\u0993" +
		"\u098F\x03\x02\x02\x02\u0993\u0991\x03\x02\x02\x02\u0993\u0994\x03\x02" +
		"\x02\x02\u0994\u0995\x03\x02\x02\x02\u0995\u0998\x05\u0136\x9C\x02\u0996" +
		"\u0997\x07\x91\x02\x02\u0997\u0999\x05\xD2j\x02\u0998\u0996\x03\x02\x02" +
		"\x02\u0998\u0999\x03\x02\x02\x02\u0999\u09AB\x03\x02\x02\x02\u099A\u099B" +
		"\x07p\x02\x02\u099B\u099C\x05\u0136\x9C\x02\u099C\u099D\x05\u0186\xC4" +
		"\x02\u099D\u09AB\x03\x02\x02\x02\u099E\u099F\x07\xCB\x02\x02\u099F\u09A2" +
		"\x05\u0136\x9C\x02\u09A0\u09A1\x07\u0125\x02\x02\u09A1\u09A3\x05\xD2j" +
		"\x02\u09A2\u09A0\x03\x02\x02\x02\u09A2\u09A3\x03\x02\x02\x02\u09A3\u09AB" +
		"\x03\x02\x02\x02\u09A4\u09A5\x07\xE0\x02\x02\u09A5\u09A8\x05\u0136\x9C" +
		"\x02\u09A6\u09A7\x07y\x02\x02\u09A7\u09A9\x05\xD4k\x02\u09A8\u09A6\x03" +
		"\x02\x02\x02\u09A8\u09A9\x03\x02\x02\x02\u09A9\u09AB\x03\x02\x02\x02\u09AA" +
		"\u0963\x03\x02\x02\x02\u09AA\u0967\x03\x02\x02\x02\u09AA\u0989\x03\x02" +
		"\x02\x02\u09AA\u099A\x03\x02\x02\x02\u09AA\u099E\x03\x02\x02\x02\u09AA" +
		"\u09A4\x03\x02\x02\x02\u09AB\u0131\x03\x02\x02\x02\u09AC\u09B1\x05\u0142" +
		"\xA2\x02\u09AD\u09AE\x07\u013E\x02\x02\u09AE\u09B0\x05\u0142\xA2\x02\u09AF" +
		"\u09AD\x03\x02\x02\x02\u09B0\u09B3\x03\x02\x02\x02\u09B1\u09AF\x03\x02" +
		"\x02\x02\u09B1\u09B2\x03\x02\x02\x02\u09B2\u0133\x03\x02\x02\x02\u09B3" +
		"\u09B1\x03\x02\x02\x02\u09B4\u09B5\x05\u0190\xC9\x02\u09B5\u0135\x03\x02" +
		"\x02\x02\u09B6\u09B7\x05\x04\x03\x02\u09B7\u0137\x03\x02\x02\x02\u09B8" +
		"\u09B9\x05\x1E\x10\x02\u09B9\u0139\x03\x02\x02\x02\u09BA\u09C4\x05\u0190" +
		"\xC9\x02\u09BB\u09C5\x05\u0138\x9D\x02\u09BC\u09C2\t\x03\x02\x02\u09BD" +
		"\u09C0\x07\x88\x02\x02\u09BE\u09C1\x07\u010D\x02\x02\u09BF\u09C1\x05\u0190" +
		"\xC9\x02\u09C0\u09BE\x03\x02\x02\x02\u09C0\u09BF\x03\x02\x02\x02\u09C1" +
		"\u09C3\x03\x02\x02\x02\u09C2\u09BD\x03\x02\x02\x02\u09C2\u09C3\x03\x02" +
		"\x02\x02\u09C3\u09C5\x03\x02\x02\x02\u09C4\u09BB\x03\x02\x02\x02\u09C4" +
		"\u09BC\x03\x02\x02\x02\u09C5\u09C8\x03\x02\x02\x02\u09C6\u09C7\x07\xC1" +
		"\x02\x02\u09C7\u09C9\x07\xC5\x02\x02\u09C8\u09C6\x03\x02\x02\x02\u09C8" +
		"\u09C9\x03\x02\x02\x02\u09C9\u09DC\x03\x02\x02\x02\u09CA\u09CB\x07\u011F" +
		"\x02\x02\u09CB\u09D4\x07\u0147\x02\x02\u09CC\u09D1\x05\u0190\xC9\x02\u09CD" +
		"\u09CE\x07\u013E\x02\x02\u09CE\u09D0\x05\u0190\xC9\x02\u09CF\u09CD\x03" +
		"\x02\x02\x02\u09D0\u09D3\x03\x02\x02\x02\u09D1\u09CF\x03\x02\x02\x02\u09D1" +
		"\u09D2\x03\x02\x02\x02\u09D2\u09D5\x03\x02\x02\x02\u09D3\u09D1\x03\x02" +
		"\x02\x02\u09D4\u09CC\x03\x02\x02\x02\u09D4\u09D5\x03\x02\x02\x02\u09D5" +
		"\u09D6\x03\x02\x02\x02\u09D6\u09D9\x07\u0148\x02\x02\u09D7\u09D8\x075" +
		"\x02\x02\u09D8\u09DA\x05\u0190\xC9\x02\u09D9\u09D7\x03\x02\x02\x02\u09D9" +
		"\u09DA\x03\x02\x02\x02\u09DA\u09DC\x03\x02\x02\x02\u09DB\u09BA\x03\x02" +
		"\x02\x02\u09DB\u09CA\x03\x02\x02\x02\u09DC\u013B\x03\x02\x02\x02\u09DD" +
		"\u09DE\x07W\x02\x02\u09DE\u09DF\x07\u010D\x02\x02\u09DF\u0A2A\x05\u0190" +
		"\xC9\x02\u09E0\u09E2\x07;\x02\x02\u09E1\u09E3\x07\u0110\x02\x02\u09E2" +
		"\u09E1\x03\x02\x02\x02\u09E2\u09E3\x03\x02\x02\x02\u09E3\u09E4\x03\x02" +
		"\x02\x02\u09E4\u09E5\x07\u010D\x02\x02\u09E5\u09E6\x05\u0190\xC9\x02\u09E6" +
		"\u09E7\x07\u0147\x02\x02\u09E7\u09EC\x05\u013A\x9E\x02\u09E8\u09E9\x07" +
		"\u013E\x02\x02\u09E9\u09EB\x05\u013A\x9E\x02\u09EA\u09E8\x03\x02\x02\x02" +
		"\u09EB\u09EE\x03\x02\x02\x02\u09EC\u09EA\x03\x02\x02\x02\u09EC\u09ED\x03" +
		"\x02\x02\x02\u09ED\u09EF\x03\x02\x02\x02\u09EE\u09EC\x03\x02\x02\x02\u09EF" +
		"\u09F3\x07\u0148\x02\x02\u09F0\u09F1\x07\u0133\x02\x02\u09F1\u09F2\x07" +
		"\xC0\x02\x02\u09F2\u09F4\x07\xA9\x02\x02\u09F3\u09F0\x03\x02\x02\x02\u09F3" +
		"\u09F4\x03\x02\x02\x02\u09F4\u09F7\x03\x02\x02\x02\u09F5\u09F6\x07\x88" +
		"\x02\x02\u09F6\u09F8\x05\u0190\xC9\x02\u09F7\u09F5\x03\x02\x02\x02\u09F7" +
		"\u09F8\x03\x02\x02\x02\u09F8\u09FC\x03\x02\x02\x02\u09F9\u09FA\x07e\x02" +
		"\x02\u09FA\u09FB\x07\xFE\x02\x02\u09FB\u09FD\x05\xACW\x02\u09FC\u09F9" +
		"\x03\x02\x02\x02\u09FC\u09FD\x03\x02\x02\x02\u09FD\u0A01\x03\x02\x02\x02" +
		"\u09FE\u09FF\x07\xBD\x02\x02\u09FF\u0A00\x07\xFE\x02\x02\u0A00\u0A02\x05" +
		"\xACW\x02\u0A01\u09FE\x03\x02\x02\x02\u0A01\u0A02\x03\x02\x02\x02\u0A02" +
		"\u0A08\x03\x02\x02\x02\u0A03\u0A04\x07\xA8\x02\x02\u0A04\u0A05\x07\xB6" +
		"\x02\x02\u0A05\u0A06\x07\u0147\x02\x02\u0A06\u0A07\t\"\x02\x02\u0A07\u0A09" +
		"\x07\u0148\x02\x02\u0A08\u0A03\x03\x02\x02\x02\u0A08\u0A09\x03\x02\x02" +
		"\x02\u0A09\u0A2A\x03\x02\x02\x02\u0A0A\u0A0C\x07;\x02\x02\u0A0B\u0A0D" +
		"\x07\u011F\x02\x02\u0A0C\u0A0B\x03\x02\x02\x02\u0A0C\u0A0D\x03\x02\x02" +
		"\x02\u0A0D\u0A0F\x03\x02\x02\x02\u0A0E\u0A10\x07,\x02\x02\u0A0F\u0A0E" +
		"\x03\x02\x02\x02\u0A0F\u0A10\x03\x02\x02\x02\u0A10\u0A11\x03\x02\x02\x02" +
		"\u0A11\u0A12\x07\x8A\x02\x02\u0A12\u0A13\x05\u0190\xC9\x02\u0A13\u0A14" +
		"\x07\xCA\x02\x02\u0A14\u0A15\x05\u0190\xC9\x02\u0A15\u0A16\x07\u0147\x02" +
		"\x02\u0A16\u0A18\x05\u0190\xC9\x02\u0A17\u0A19\t#\x02\x02\u0A18\u0A17" +
		"\x03\x02\x02\x02\u0A18\u0A19\x03\x02\x02\x02\u0A19\u0A21\x03\x02\x02\x02" +
		"\u0A1A\u0A1B\x07\u013E\x02\x02\u0A1B\u0A1D\x05\u0190\xC9\x02\u0A1C\u0A1E" +
		"\t#\x02\x02\u0A1D\u0A1C\x03\x02\x02\x02\u0A1D\u0A1E\x03\x02\x02\x02\u0A1E" +
		"\u0A20\x03\x02\x02\x02\u0A1F\u0A1A\x03\x02\x02\x02\u0A20\u0A23\x03\x02" +
		"\x02\x02\u0A21\u0A1F\x03\x02\x02\x02\u0A21\u0A22\x03\x02\x02\x02\u0A22" +
		"\u0A24\x03\x02\x02\x02\u0A23\u0A21\x03\x02\x02\x02\u0A24\u0A25\x07\u0148" +
		"\x02\x02\u0A25\u0A2A\x03\x02\x02\x02\u0A26\u0A27\x07W\x02\x02\u0A27\u0A28" +
		"\x07\x8A\x02\x02\u0A28\u0A2A\x05\u0190\xC9\x02\u0A29\u09DD\x03\x02\x02" +
		"\x02\u0A29\u09E0\x03\x02\x02\x02\u0A29\u0A0A\x03\x02\x02\x02\u0A29\u0A26" +
		"\x03\x02\x02\x02\u0A2A\u013D\x03\x02\x02\x02\u0A2B\u0A32\x05\u0168\xB5" +
		"\x02\u0A2C\u0A32\x05\u016C\xB7\x02\u0A2D\u0A32\x05\u0140\xA1\x02\u0A2E" +
		"\u0A32\x05\u016A\xB6\x02\u0A2F\u0A32\x05\u0164\xB3\x02\u0A30\u0A32\x05" +
		"\u0166\xB4\x02\u0A31\u0A2B\x03\x02\x02\x02\u0A31\u0A2C\x03\x02\x02\x02" +
		"\u0A31\u0A2D\x03\x02\x02\x02\u0A31\u0A2E\x03\x02\x02\x02\u0A31\u0A2F\x03" +
		"\x02\x02\x02\u0A31\u0A30\x03\x02\x02\x02\u0A32\u013F\x03\x02\x02\x02\u0A33" +
		"\u0A34\x05\u0154\xAB\x02\u0A34\u0141\x03\x02\x02\x02\u0A35\u0A41\x07\u013C" +
		"\x02\x02\u0A36\u0A38\x05\u014A\xA6\x02\u0A37\u0A39\x05\xB4[\x02\u0A38" +
		"\u0A37\x03\x02\x02\x02\u0A38\u0A39\x03\x02\x02\x02\u0A39\u0A3E\x03\x02" +
		"\x02\x02\u0A3A\u0A3B\x07\u014B\x02\x02\u0A3B\u0A3F\x07\u013C\x02\x02\u0A3C" +
		"\u0A3D\x07\u014B\x02\x02\u0A3D\u0A3F\x05\u0142\xA2\x02\u0A3E\u0A3A\x03" +
		"\x02\x02\x02\u0A3E\u0A3C\x03\x02\x02\x02\u0A3E\u0A3F\x03\x02\x02\x02\u0A3F" +
		"\u0A41\x03\x02\x02";
	private static readonly _serializedATNSegment5: string =
		"\x02\u0A40\u0A35\x03\x02\x02\x02\u0A40\u0A36\x03\x02\x02\x02\u0A41\u0143" +
		"\x03\x02\x02\x02\u0A42\u0A44\x05n8\x02\u0A43\u0A45\x05p9\x02\u0A44\u0A43" +
		"\x03\x02\x02\x02\u0A44\u0A45\x03\x02\x02\x02\u0A45\u0A4D\x03\x02\x02\x02" +
		"\u0A46\u0A47\x07\u013E\x02\x02\u0A47\u0A49\x05n8\x02\u0A48\u0A4A\x05p" +
		"9\x02\u0A49\u0A48\x03\x02\x02\x02\u0A49\u0A4A\x03\x02\x02\x02\u0A4A\u0A4C" +
		"\x03\x02\x02\x02\u0A4B\u0A46\x03\x02\x02\x02\u0A4C\u0A4F\x03\x02\x02\x02" +
		"\u0A4D\u0A4B\x03\x02\x02\x02\u0A4D\u0A4E\x03\x02\x02\x02\u0A4E\u0145\x03" +
		"\x02\x02\x02\u0A4F\u0A4D\x03\x02\x02\x02\u0A50\u0A53\x07\xFA\x02\x02\u0A51" +
		"\u0A54\x07\b\x02\x02\u0A52\u0A54\t$\x02\x02\u0A53\u0A51\x03\x02\x02\x02" +
		"\u0A53\u0A52\x03\x02\x02\x02\u0A53\u0A54\x03\x02\x02\x02\u0A54\u0A55\x03" +
		"\x02\x02\x02\u0A55\u0A56\x05\u0144\xA3\x02\u0A56\u0147\x03\x02\x02\x02" +
		"\u0A57\u0A58\x05\u0190\xC9\x02\u0A58\u0A59\x07\u0140\x02\x02\u0A59\u0A61" +
		"\x03\x02\x02\x02\u0A5A\u0A5B\x05\u0190\xC9\x02\u0A5B\u0A5C\x07\u014C\x02" +
		"\x02\u0A5C\u0A5D\x05\u0190\xC9\x02\u0A5D\u0A5E\x07\u0140\x02\x02\u0A5E" +
		"\u0A61\x03\x02\x02\x02\u0A5F\u0A61\x05J&\x02\u0A60\u0A57\x03\x02\x02\x02" +
		"\u0A60\u0A5A\x03\x02\x02\x02\u0A60\u0A5F\x03\x02\x02\x02\u0A61\u0149\x03" +
		"\x02\x02\x02\u0A62\u0A64\x05\u0148\xA5\x02\u0A63\u0A62\x03\x02\x02\x02" +
		"\u0A63\u0A64\x03\x02\x02\x02\u0A64\u0A65\x03\x02\x02\x02\u0A65\u0A66\x05" +
		"\u0190\xC9\x02\u0A66\u014B\x03\x02\x02\x02\u0A67\u0A69\x07\xD2\x02\x02" +
		"\u0A68\u0A67\x03\x02\x02\x02\u0A68\u0A69\x03\x02\x02\x02\u0A69\u0A6A\x03" +
		"\x02\x02\x02\u0A6A\u0A6C\x05\u014A\xA6\x02\u0A6B\u0A6D\x05p9\x02\u0A6C" +
		"\u0A6B\x03\x02\x02\x02\u0A6C\u0A6D\x03\x02\x02\x02\u0A6D\u014D\x03\x02" +
		"\x02\x02\u0A6E\u0A6F\x05\u0158\xAD\x02\u0A6F\u014F\x03\x02\x02\x02\u0A70" +
		"\u0A78\x07y\x02\x02\u0A71\u0A79\x05\u014C\xA7\x02\u0A72\u0A73\x07\u0147" +
		"\x02\x02\u0A73\u0A74\x05\u014E\xA8\x02\u0A74\u0A76\x07\u0148\x02\x02\u0A75" +
		"\u0A77\x05p9\x02\u0A76\u0A75\x03\x02\x02\x02\u0A76\u0A77\x03\x02\x02\x02" +
		"\u0A77\u0A79\x03\x02\x02\x02\u0A78\u0A71\x03\x02\x02\x02\u0A78\u0A72\x03" +
		"\x02\x02\x02\u0A79\u0A86\x03\x02\x02\x02\u0A7A\u0A82\x07\u013E\x02\x02" +
		"\u0A7B\u0A83\x05\u014C\xA7\x02\u0A7C\u0A7D\x07\u0147\x02\x02\u0A7D\u0A7E" +
		"\x05\u014E\xA8\x02\u0A7E\u0A80\x07\u0148\x02\x02\u0A7F\u0A81\x05p9\x02" +
		"\u0A80\u0A7F\x03\x02\x02\x02\u0A80\u0A81\x03\x02\x02\x02\u0A81\u0A83\x03" +
		"\x02\x02\x02\u0A82\u0A7B\x03\x02\x02\x02\u0A82\u0A7C\x03\x02\x02\x02\u0A83" +
		"\u0A85\x03\x02\x02\x02\u0A84\u0A7A\x03\x02\x02\x02\u0A85\u0A88\x03\x02" +
		"\x02\x02\u0A86\u0A84\x03\x02\x02\x02\u0A86\u0A87\x03\x02\x02\x02\u0A87" +
		"\u0151\x03\x02\x02\x02\u0A88\u0A86\x03\x02\x02\x02\u0A89\u0A8A\x05\x04" +
		"\x03\x02\u0A8A\u0153\x03\x02\x02\x02\u0A8B\u0A8E\x05\u0146\xA4\x02\u0A8C" +
		"\u0A8D\x07\x91\x02\x02\u0A8D\u0A8F\x05\xD2j\x02\u0A8E\u0A8C\x03\x02\x02" +
		"\x02\u0A8E\u0A8F\x03\x02\x02\x02\u0A8F\u0A90\x03\x02\x02\x02\u0A90\u0A92" +
		"\x05\u0150\xA9\x02\u0A91\u0A93\x05\u015A\xAE\x02\u0A92\u0A91\x03\x02\x02" +
		"\x02\u0A92\u0A93\x03\x02\x02\x02\u0A93\u0A95\x03\x02\x02\x02\u0A94\u0A96" +
		"\x05\u015C\xAF\x02\u0A95\u0A94\x03\x02\x02\x02\u0A95\u0A96\x03\x02\x02" +
		"\x02\u0A96\u0A98\x03\x02\x02\x02\u0A97\u0A99\x05\u015E\xB0\x02\u0A98\u0A97" +
		"\x03\x02\x02\x02\u0A98\u0A99\x03\x02\x02\x02\u0A99\u0A9B\x03\x02\x02\x02" +
		"\u0A9A\u0A9C\x05\u0156\xAC\x02\u0A9B\u0A9A\x03\x02\x02\x02\u0A9B\u0A9C" +
		"\x03\x02\x02\x02\u0A9C\u0A9E\x03\x02\x02\x02\u0A9D\u0A9F\x05\u0162\xB2" +
		"\x02\u0A9E\u0A9D\x03\x02\x02\x02\u0A9E\u0A9F\x03\x02\x02\x02\u0A9F\u0AA3" +
		"\x03\x02\x02\x02\u0AA0\u0AA1\x07\x91\x02\x02\u0AA1\u0AA2\x07\u0110\x02" +
		"\x02\u0AA2\u0AA4\x05\x04\x03\x02\u0AA3\u0AA0\x03\x02\x02\x02\u0AA3\u0AA4" +
		"\x03\x02\x02\x02\u0AA4\u0AA8\x03\x02\x02\x02\u0AA5\u0AA6\x07\u0133\x02" +
		"\x02\u0AA6\u0AA7\x07\xC0\x02\x02\u0AA7\u0AA9\x07\xA9\x02\x02\u0AA8\u0AA5" +
		"\x03\x02\x02\x02\u0AA8\u0AA9\x03\x02\x02\x02\u0AA9\u0155\x03\x02\x02\x02" +
		"\u0AAA\u0AAC\x07\u011E\x02\x02\u0AAB\u0AAD\x07\b\x02\x02\u0AAC\u0AAB\x03" +
		"\x02\x02\x02\u0AAC\u0AAD\x03\x02\x02\x02\u0AAD\u0AAE\x03\x02\x02\x02\u0AAE" +
		"\u0AAF\x05\u0158\xAD\x02\u0AAF\u0157\x03\x02\x02\x02\u0AB0\u0AB1\x05\u0146" +
		"\xA4\x02\u0AB1\u0AB3\x05\u0150\xA9\x02\u0AB2\u0AB4\x05\u015A\xAE\x02\u0AB3" +
		"\u0AB2\x03\x02\x02\x02\u0AB3\u0AB4\x03\x02\x02\x02\u0AB4\u0AB6\x03\x02" +
		"\x02\x02\u0AB5\u0AB7\x05\u015C\xAF\x02\u0AB6\u0AB5\x03\x02\x02\x02\u0AB6" +
		"\u0AB7\x03\x02\x02\x02\u0AB7\u0AB9\x03\x02\x02\x02\u0AB8\u0ABA\x05\u015E" +
		"\xB0\x02\u0AB9\u0AB8\x03\x02\x02\x02\u0AB9\u0ABA\x03\x02\x02\x02\u0ABA" +
		"\u0ABC\x03\x02\x02\x02\u0ABB\u0ABD\x05\u0156\xAC\x02\u0ABC\u0ABB\x03\x02" +
		"\x02\x02\u0ABC\u0ABD\x03\x02\x02\x02\u0ABD\u0159\x03\x02\x02\x02\u0ABE" +
		"\u0ABF\x07\u0130\x02\x02\u0ABF\u0AC0\x05b2\x02\u0AC0\u015B\x03\x02\x02" +
		"\x02\u0AC1\u0AC2\x07\x80\x02\x02\u0AC2\u0AC3\x07 \x02\x02\u0AC3\u0AC4" +
		"\x05\xD4k\x02\u0AC4\u015D\x03\x02\x02\x02\u0AC5\u0AC6\x07\x81\x02\x02" +
		"\u0AC6\u0AC7\x05b2\x02\u0AC7\u015F\x03\x02\x02\x02\u0AC8\u0ACA\x05\x96" +
		"L\x02\u0AC9\u0ACB\t#\x02\x02\u0ACA\u0AC9\x03\x02\x02\x02\u0ACA\u0ACB\x03" +
		"\x02\x02\x02\u0ACB\u0161\x03\x02\x02\x02\u0ACC\u0ACD\x07\xD0\x02\x02\u0ACD" +
		"\u0ACE\x07 \x02\x02\u0ACE\u0AD3\x05\u0160\xB1\x02\u0ACF\u0AD0\x07\u013E" +
		"\x02\x02\u0AD0\u0AD2\x05\u0160\xB1\x02\u0AD1\u0ACF\x03\x02\x02\x02\u0AD2" +
		"\u0AD5\x03\x02\x02\x02\u0AD3\u0AD1\x03\x02\x02\x02\u0AD3\u0AD4\x03\x02" +
		"\x02\x02\u0AD4\u0163\x03\x02\x02\x02\u0AD5\u0AD3\x03\x02\x02\x02\u0AD6" +
		"\u0AD7\x07\xA6\x02\x02\u0AD7\u0ADA\x07y\x02\x02\u0AD8\u0ADB\x05\xAEX\x02" +
		"\u0AD9\u0ADB\x05J&\x02\u0ADA\u0AD8\x03\x02\x02\x02\u0ADA\u0AD9\x03\x02" +
		"\x02\x02\u0ADB\u0AE1\x03\x02\x02\x02\u0ADC\u0ADF\x07M\x02\x02\u0ADD\u0AE0" +
		"\x05\xAEX\x02\u0ADE\u0AE0\x05J&\x02\u0ADF\u0ADD\x03\x02\x02\x02\u0ADF" +
		"\u0ADE\x03\x02\x02\x02\u0AE0\u0AE2\x03\x02\x02\x02\u0AE1\u0ADC\x03\x02" +
		"\x02\x02\u0AE1\u0AE2\x03\x02\x02\x02\u0AE2\u0AED\x03\x02\x02\x02\u0AE3" +
		"\u0AE4\x07\x8F\x02\x02\u0AE4\u0AE5\x07\x91\x02\x02\u0AE5\u0AEA\x05\u014A" +
		"\xA6\x02\u0AE6\u0AE7\x07\u0147\x02\x02\u0AE7\u0AE8\x05\u0132\x9A\x02\u0AE8" +
		"\u0AE9\x07\u0148\x02\x02\u0AE9\u0AEB\x03\x02\x02\x02\u0AEA\u0AE6\x03\x02" +
		"\x02\x02\u0AEA\u0AEB\x03\x02\x02\x02\u0AEB\u0AEE\x03\x02\x02\x02\u0AEC" +
		"\u0AEE\x05\u0168\xB5\x02\u0AED\u0AE3\x03\x02\x02\x02\u0AED\u0AEC\x03\x02" +
		"\x02\x02\u0AEE\u0AEF\x03\x02\x02\x02\u0AEF\u0AF0\x05\u0186\xC4\x02\u0AF0" +
		"\u0165\x03\x02\x02\x02\u0AF1\u0AF2\x07\u0121\x02\x02\u0AF2\u0AF5\x07\u0116" +
		"\x02\x02\u0AF3\u0AF6\x05\xAEX\x02\u0AF4\u0AF6\x05J&\x02\u0AF5\u0AF3\x03" +
		"\x02\x02\x02\u0AF5\u0AF4\x03\x02\x02\x02\u0AF6\u0AFC\x03\x02\x02\x02\u0AF7" +
		"\u0AFA\x07M\x02\x02\u0AF8\u0AFB\x05\xAEX\x02\u0AF9\u0AFB\x05J&\x02\u0AFA" +
		"\u0AF8\x03\x02\x02\x02\u0AFA\u0AF9\x03\x02\x02\x02\u0AFB\u0AFD\x03\x02" +
		"\x02\x02\u0AFC\u0AF7\x03\x02\x02\x02\u0AFC\u0AFD\x03\x02\x02\x02\u0AFD" +
		"\u0AFE\x03\x02\x02\x02\u0AFE\u0AFF\x05\u0140\xA1\x02\u0AFF\u0B00\x05\u0186" +
		"\xC4\x02\u0B00\u0167\x03\x02\x02\x02\u0B01\u0B02\x07\x8F\x02\x02\u0B02" +
		"\u0B03\x07\x91\x02\x02\u0B03\u0B08\x05\u014A\xA6\x02\u0B04\u0B05\x07\u0147" +
		"\x02\x02\u0B05\u0B06\x05\u0132\x9A\x02\u0B06\u0B07\x07\u0148\x02\x02\u0B07" +
		"\u0B09\x03\x02\x02\x02\u0B08\u0B04\x03\x02\x02\x02\u0B08\u0B09\x03\x02" +
		"\x02\x02\u0B09\u0B17\x03\x02\x02\x02\u0B0A\u0B0B\x07\u0127\x02\x02\u0B0B" +
		"\u0B0C\x07\u0147\x02\x02\u0B0C\u0B11\x05\x96L\x02\u0B0D\u0B0E\x07\u013E" +
		"\x02\x02\u0B0E\u0B10\x05\x96L\x02\u0B0F\u0B0D\x03\x02\x02\x02\u0B10\u0B13" +
		"\x03\x02\x02\x02\u0B11\u0B0F\x03\x02\x02\x02\u0B11\u0B12\x03\x02\x02\x02" +
		"\u0B12\u0B14\x03\x02\x02\x02\u0B13\u0B11\x03\x02\x02\x02\u0B14\u0B15\x07" +
		"\u0148\x02\x02\u0B15\u0B18\x03\x02\x02\x02\u0B16\u0B18\x05\u0158\xAD\x02" +
		"\u0B17\u0B0A\x03\x02\x02\x02\u0B17\u0B16\x03\x02\x02\x02\u0B18\u0169\x03" +
		"\x02\x02\x02\u0B19\u0B1A\x07\u0123\x02\x02\u0B1A\u0B1B\x05\u014A\xA6\x02" +
		"\u0B1B\u0B49\x07\xFB\x02\x02\u0B1C\u0B1D\x05\u0142\xA2\x02\u0B1D\u0B1E" +
		"\x07\u0141\x02\x02\u0B1E\u0B26\x05\x96L\x02\u0B1F\u0B20\x07\u013E\x02" +
		"\x02\u0B20\u0B21\x05\u0142\xA2\x02\u0B21\u0B22\x07\u0141\x02\x02\u0B22" +
		"\u0B23\x05\x96L\x02\u0B23\u0B25\x03\x02\x02\x02\u0B24\u0B1F\x03\x02\x02" +
		"\x02\u0B25\u0B28\x03\x02\x02\x02\u0B26\u0B24\x03\x02\x02\x02\u0B26\u0B27" +
		"\x03\x02\x02\x02\u0B27\u0B4A\x03\x02\x02\x02\u0B28\u0B26\x03\x02\x02\x02" +
		"\u0B29\u0B2A\x07\u0147\x02\x02\u0B2A\u0B2B\x05\u0132\x9A\x02\u0B2B\u0B2C" +
		"\x07\u0148\x02\x02\u0B2C\u0B34\x03\x02\x02\x02\u0B2D\u0B2E\x05\u0152\xAA" +
		"\x02\u0B2E\u0B2F\x07\u014B\x02\x02\u0B2F\u0B31\x03\x02\x02\x02\u0B30\u0B2D" +
		"\x03\x02\x02\x02\u0B30\u0B31\x03\x02\x02\x02\u0B31\u0B32\x03\x02\x02\x02" +
		"\u0B32\u0B34\x07\u013C\x02\x02\u0B33\u0B29\x03\x02\x02\x02\u0B33\u0B30" +
		"\x03\x02\x02\x02\u0B34\u0B35\x03\x02\x02\x02\u0B35\u0B47\x07\u0141\x02" +
		"\x02\u0B36\u0B37\x07\u0147\x02\x02\u0B37\u0B3C\x05\x96L\x02\u0B38\u0B39" +
		"\x07\u013E\x02\x02\u0B39\u0B3B\x05\x96L\x02\u0B3A\u0B38\x03\x02\x02\x02" +
		"\u0B3B\u0B3E\x03\x02\x02\x02\u0B3C\u0B3A\x03\x02\x02\x02\u0B3C\u0B3D\x03" +
		"\x02\x02\x02\u0B3D\u0B3F\x03\x02\x02\x02\u0B3E\u0B3C\x03\x02\x02\x02\u0B3F" +
		"\u0B40\x07\u0148\x02\x02\u0B40\u0B48\x03\x02\x02\x02\u0B41\u0B42\x05\u0152" +
		"\xAA\x02\u0B42\u0B43\x07\u014B\x02\x02\u0B43\u0B45\x03\x02\x02\x02\u0B44" +
		"\u0B41\x03\x02\x02\x02\u0B44\u0B45\x03\x02\x02\x02\u0B45\u0B46\x03\x02" +
		"\x02\x02\u0B46\u0B48\x07\u013C\x02\x02\u0B47\u0B36\x03\x02\x02\x02\u0B47" +
		"\u0B44\x03\x02\x02\x02\u0B48\u0B4A\x03\x02\x02\x02\u0B49\u0B1C\x03\x02" +
		"\x02\x02\u0B49\u0B33\x03\x02\x02\x02\u0B4A\u0B52\x03\x02\x02\x02\u0B4B" +
		"\u0B50\x07\u0130\x02\x02\u0B4C\u0B51\x05b2\x02\u0B4D\u0B4E\x07<\x02\x02" +
		"\u0B4E\u0B4F\x07\xC8\x02\x02\u0B4F\u0B51\x05\u0136\x9C\x02\u0B50\u0B4C" +
		"\x03\x02\x02\x02\u0B50\u0B4D\x03\x02\x02\x02\u0B51\u0B53\x03\x02\x02\x02" +
		"\u0B52\u0B4B\x03\x02\x02\x02\u0B52\u0B53\x03\x02\x02\x02\u0B53\u016B\x03" +
		"\x02\x02\x02\u0B54\u0B55\x07L\x02\x02\u0B55\u0B56\x07y\x02\x02\u0B56\u0B5E" +
		"\x05\u014A\xA6\x02\u0B57\u0B5C\x07\u0130\x02\x02\u0B58\u0B5D\x05b2\x02" +
		"\u0B59\u0B5A\x07<\x02\x02\u0B5A\u0B5B\x07\xC8\x02\x02\u0B5B\u0B5D\x05" +
		"\u0136\x9C\x02\u0B5C\u0B58\x03\x02\x02\x02\u0B5C\u0B59\x03\x02\x02\x02" +
		"\u0B5D\u0B5F\x03\x02\x02\x02\u0B5E\u0B57\x03\x02\x02\x02\u0B5E\u0B5F\x03" +
		"\x02\x02\x02\u0B5F\u0B60\x03\x02\x02\x02\u0B60\u0B61\x05\u0186\xC4\x02" +
		"\u0B61\u016D\x03\x02\x02\x02\u0B62\u0B67\x05^0\x02\u0B63\u0B64\x07\u013E" +
		"\x02\x02\u0B64\u0B66\x05^0\x02\u0B65\u0B63\x03\x02\x02\x02\u0B66\u0B69" +
		"\x03\x02\x02\x02\u0B67\u0B65\x03\x02\x02\x02\u0B67\u0B68\x03\x02\x02\x02" +
		"\u0B68\u016F\x03\x02\x02\x02\u0B69\u0B67\x03\x02\x02\x02\u0B6A\u0B6B\x07" +
		"\xDA\x02\x02\u0B6B\u0B6C\x05\u0136\x9C\x02\u0B6C\u0B6D\x07y\x02\x02\u0B6D" +
		"\u0B6E\x05\x96L\x02\u0B6E\u0B82\x03\x02\x02\x02\u0B6F\u0B70\x07`\x02\x02" +
		"\u0B70\u0B73\x05\u0136\x9C\x02\u0B71\u0B72\x07\u0125\x02\x02\u0B72\u0B74" +
		"\x05\xD2j\x02\u0B73\u0B71\x03\x02\x02\x02\u0B73\u0B74\x03\x02\x02\x02" +
		"\u0B74\u0B82\x03\x02\x02\x02\u0B75\u0B78\x07x\x02\x02\u0B76\u0B79\x05" +
		"\u0136\x9C\x02\u0B77\u0B79\x05\u0134\x9B\x02\u0B78\u0B76\x03\x02\x02\x02" +
		"\u0B78\u0B77\x03\x02\x02\x02\u0B79\u0B82\x03\x02\x02\x02\u0B7A\u0B7B\x07" +
		"\xA8\x02\x02\u0B7B\u0B7C\x07\u010D\x02\x02\u0B7C\u0B7D\x05\x96L\x02\u0B7D" +
		"\u0B7E\x07\x88\x02\x02\u0B7E\u0B7F\t%\x02\x02\u0B7F\u0B80\x07\xB6\x02" +
		"\x02\u0B80\u0B82\x03\x02\x02\x02\u0B81\u0B6A\x03\x02\x02\x02\u0B81\u0B6F" +
		"\x03\x02\x02\x02\u0B81\u0B75\x03\x02\x02\x02\u0B81\u0B7A\x03\x02\x02\x02" +
		"\u0B82\u0171\x03\x02\x02\x02\u0B83\u0B84\x07\u0123\x02\x02\u0B84\u0B88" +
		"\x07\u0109\x02\x02\u0B85\u0B86\x07q\x02\x02\u0B86\u0B87\x07\u010D\x02" +
		"\x02\u0B87\u0B89\x05\u014A\xA6\x02\u0B88\u0B85\x03\x02\x02\x02\u0B88\u0B89" +
		"\x03\x02\x02\x02\u0B89\u0BA8\x03\x02\x02\x02\u0B8A\u0B8B\x07\xFB\x02\x02" +
		"\u0B8B\u0B8C\x07\xA8\x02\x02\u0B8C\u0B8D\x07\xB6\x02\x02\u0B8D\u0B94\x07" +
		"\u0116\x02\x02\u0B8E\u0B90\x07\u012B\x02\x02\u0B8F\u0B91\x07\u0160\x02" +
		"\x02\u0B90\u0B8F\x03\x02\x02\x02\u0B90\u0B91\x03\x02\x02\x02\u0B91\u0B95" +
		"\x03\x02\x02\x02\u0B92\u0B93\x07\xC1\x02\x02\u0B93\u0B95\x07\u012B\x02" +
		"\x02\u0B94\u0B8E\x03\x02\x02\x02\u0B94\u0B92\x03\x02\x02\x02\u0B95\u0BA8" +
		"\x03\x02\x02\x02\u0B96\u0B97\x07\xFB\x02\x02\u0B97\u0B98\x07c\x02\x02" +
		"\u0B98\u0BA8\t\x1E\x02\x02\u0B99\u0B9A\x07\xFB\x02\x02\u0B9A\u0B9B\x07" +
		"\x9A\x02\x02\u0B9B\u0BA0\x07\u0116\x02\x02\u0B9C\u0B9D\x07=\x02\x02\u0B9D" +
		"\u0BA1\x07\u0108\x02\x02\u0B9E\u0B9F\t&\x02\x02\u0B9F\u0BA1\x07\xE5\x02" +
		"\x02\u0BA0\u0B9C\x03\x02\x02\x02\u0BA0\u0B9E\x03\x02\x02\x02\u0BA1\u0BA8" +
		"\x03\x02\x02\x02\u0BA2\u0BA4\x07\xFB\x02\x02\u0BA3\u0BA5\x07\x1F\x02\x02" +
		"\u0BA4\u0BA3\x03\x02\x02\x02\u0BA4\u0BA5\x03\x02\x02\x02\u0BA5\u0BA6\x03" +
		"\x02\x02\x02\u0BA6\u0BA8\x07\xA9\x02\x02\u0BA7\u0B83\x03\x02\x02\x02\u0BA7" +
		"\u0B8A\x03\x02\x02\x02\u0BA7\u0B96\x03\x02\x02\x02\u0BA7\u0B99\x03\x02" +
		"\x02\x02\u0BA7\u0BA2\x03\x02\x02\x02\u0BA8\u0173\x03\x02\x02\x02\u0BA9" +
		"\u0BAA\x07?\x02\x02\u0BAA\u0BAD\x05\u0190\xC9\x02\u0BAB\u0BAC\x07\u014C" +
		"\x02\x02\u0BAC\u0BAE\x05\u0190\xC9\x02\u0BAD\u0BAB\x03\x02\x02\x02\u0BAD" +
		"\u0BAE\x03\x02\x02\x02\u0BAE\u0BB0\x03\x02\x02\x02\u0BAF\u0BB1\x07^\x02" +
		"\x02\u0BB0\u0BAF\x03\x02\x02\x02\u0BB0\u0BB1\x03\x02\x02\x02\u0BB1\u0BB3" +
		"\x03\x02\x02\x02\u0BB2\u0BB4\x07\u013F\x02\x02\u0BB3\u0BB2\x03\x02\x02" +
		"\x02\u0BB3\u0BB4\x03\x02\x02\x02\u0BB4\u0175\x03\x02\x02\x02\u0BB5\u0BB6" +
		"\x07+\x02\x02\u0BB6\u0BB7\x07?\x02\x02\u0BB7\u0177\x03\x02\x02\x02\u0BB8" +
		"\u0BC0\x05\u017A\xBE\x02\u0BB9\u0BBA\x07\x16\x02\x02\u0BBA\u0BC0\x07\u0137" +
		"\x02\x02\u0BBB\u0BBC\x071\x02\x02\u0BBC\u0BC0\x07\u0137\x02\x02\u0BBD" +
		"\u0BBE\x07\xF2\x02\x02\u0BBE\u0BC0\x07\u0137\x02\x02\u0BBF\u0BB8\x03\x02" +
		"\x02\x02\u0BBF\u0BB9\x03\x02\x02\x02\u0BBF\u0BBB\x03\x02\x02\x02\u0BBF" +
		"\u0BBD\x03\x02\x02\x02\u0BC0\u0179\x03\x02\x02\x02\u0BC1\u0BC2\x07\u012F" +
		"\x02\x02\u0BC2\u0BC3\x05\u017C\xBF\x02\u0BC3\u0BC4\x05\u017E\xC0\x02\u0BC4" +
		"\u0BC5\x05\u0186\xC4\x02\u0BC5\u017B\x03\x02\x02\x02\u0BC6\u0BC7\x07\xC1" +
		"\x02\x02\u0BC7\u0BCE\x07v\x02\x02\u0BC8\u0BCA\x07\v\x02\x02\u0BC9\u0BC8" +
		"\x03\x02\x02\x02\u0BC9\u0BCA\x03\x02\x02\x02\u0BCA\u0BCB\x03\x02\x02\x02" +
		"\u0BCB\u0BCE\t\'\x02\x02\u0BCC\u0BCE\t(\x02\x02\u0BCD\u0BC6\x03\x02\x02" +
		"\x02\u0BCD\u0BC9\x03\x02\x02\x02\u0BCD\u0BCC\x03\x02\x02\x02\u0BCE\u017D" +
		"\x03\x02\x02\x02\u0BCF\u0BDC\t)\x02\x02\u0BD0\u0BD1\x07#\x02\x02\u0BD1" +
		"\u0BDC\x05\x04\x03\x02\u0BD2\u0BD3\x07}\x02\x02\u0BD3\u0BD6\x07\u0116" +
		"\x02\x02\u0BD4\u0BD6\x07~\x02\x02\u0BD5\u0BD2\x03\x02\x02\x02\u0BD5\u0BD4" +
		"\x03\x02\x02\x02\u0BD6\u0BD8\x03\x02\x02\x02\u0BD7\u0BD9\x07\u0140\x02" +
		"\x02\u0BD8\u0BD7\x03\x02\x02\x02\u0BD8\u0BD9\x03\x02\x02\x02\u0BD9\u0BDA" +
		"\x03\x02\x02\x02\u0BDA\u0BDC\x05\x04\x03\x02\u0BDB\u0BCF\x03\x02\x02\x02" +
		"\u0BDB\u0BD0\x03\x02\x02\x02\u0BDB\u0BD5\x03\x02\x02\x02\u0BDC\u017F\x03" +
		"\x02\x02\x02\u0BDD\u0BDE\x07\xEC\x02\x02\u0BDE\u0BE0\x05\x04\x03\x02\u0BDF" +
		"\u0BE1\x05\x12\n\x02\u0BE0\u0BDF\x03\x02\x02\x02\u0BE0\u0BE1\x03\x02\x02" +
		"\x02\u0BE1\u0BE3\x03\x02\x02\x02\u0BE2\u0BE4\x05\x18\r\x02\u0BE3\u0BE2" +
		"\x03\x02\x02\x02\u0BE3\u0BE4\x03\x02\x02\x02\u0BE4\u0BE6\x03\x02\x02\x02" +
		"\u0BE5\u0BE7\x05\u0182\xC2\x02\u0BE6\u0BE5\x03\x02\x02\x02\u0BE6\u0BE7" +
		"\x03\x02\x02\x02\u0BE7\u0BEE\x03\x02\x02\x02\u0BE8\u0BEA\x07\xD0\x02\x02" +
		"\u0BE9\u0BEB\x07f\x02\x02\u0BEA\u0BE9\x03\x02\x02\x02\u0BEA\u0BEB\x03" +
		"\x02\x02\x02\u0BEB\u0BEC\x03\x02\x02\x02\u0BEC\u0BED\x07 \x02\x02\u0BED" +
		"\u0BEF\x05\xD2j\x02\u0BEE\u0BE8\x03\x02\x02\x02\u0BEE\u0BEF\x03\x02\x02" +
		"\x02\u0BEF\u0BF1\x03\x02\x02\x02\u0BF0\u0BF2\x05\u0184\xC3\x02\u0BF1\u0BF0" +
		"\x03\x02\x02\x02\u0BF1\u0BF2\x03\x02\x02\x02\u0BF2\u0BF3\x03\x02\x02\x02" +
		"\u0BF3\u0BF4\x07Z\x02\x02\u0BF4\u0BF5\x07\xEC\x02\x02\u0BF5\u0181\x03" +
		"\x02\x02\x02\u0BF6\u0BFF\x07\xD1\x02\x02\u0BF7\u0BF8\x07\xEC\x02\x02\u0BF8" +
		"\u0BFD\x07\u0116\x02\x02\u0BF9\u0BFE\x05J&\x02\u0BFA\u0BFB\x07\xD8\x02" +
		"\x02\u0BFB\u0BFE\x05J&\x02\u0BFC\u0BFE\x07\xDD\x02\x02\u0BFD\u0BF9\x03" +
		"\x02\x02\x02\u0BFD\u0BFA\x03\x02\x02\x02\u0BFD\u0BFC\x03\x02\x02\x02\u0BFE" +
		"\u0C00\x03\x02\x02\x02\u0BFF\u0BF7\x03\x02\x02\x02\u0BFF\u0C00\x03\x02" +
		"\x02\x02\u0C00\u0C16\x03\x02\x02\x02\u0C01\u0C02\x07\x9F\x02\x02\u0C02" +
		"\u0C03\x07\xB0\x02\x02\u0C03\u0C15\x05\xACW\x02\u0C04\u0C05\x07\xF1\x02" +
		"\x02\u0C05\u0C06\x07\xB0\x02\x02\u0C06\u0C15\x05\xACW\x02\u0C07\u0C08" +
		"\x07\u0118\x02\x02\u0C08\u0C09\x07\xB0\x02\x02\u0C09\u0C15\x05\xACW\x02" +
		"\u0C0A\u0C0B\x07\x1E\x02\x02\u0C0B\u0C0C\x07\xB0\x02\x02\u0C0C\u0C15\x05" +
		"\xACW\x02\u0C0D\u0C0E\x07\xD4\x02\x02\u0C0E\u0C0F\x07\xA0\x02\x02\u0C0F" +
		"\u0C15\x05\xACW\x02\u0C10\u0C11\x07\u0118\x02\x02\u0C11\u0C12\x07\xC8" +
		"\x02\x02\u0C12\u0C13\x07\xD4\x02\x02\u0C13\u0C15\x05J&\x02\u0C14\u0C01" +
		"\x03\x02\x02\x02\u0C14\u0C04\x03\x02\x02\x02\u0C14\u0C07\x03\x02\x02\x02" +
		"\u0C14\u0C0A\x03\x02\x02\x02\u0C14\u0C0D\x03\x02\x02\x02\u0C14\u0C10\x03" +
		"\x02\x02\x02\u0C15\u0C18\x03\x02\x02\x02\u0C16\u0C14\x03\x02\x02\x02\u0C16" +
		"\u0C17\x03\x02\x02\x02\u0C17\u0183\x03\x02\x02\x02\u0C18\u0C16\x03\x02" +
		"\x02\x02\u0C19\u0C35\x07s\x02\x02\u0C1A\u0C1B\x07]\x02\x02\u0C1B\u0C36" +
		"\x07\xF3\x02\x02\u0C1C\u0C1E\x07m\x02\x02\u0C1D\u0C1C\x03\x02\x02\x02" +
		"\u0C1D\u0C1E\x03\x02\x02\x02\u0C1E\u0C1F\x03\x02\x02\x02\u0C1F\u0C20\x07" +
		"\xD4\x02\x02\u0C20\u0C2F\x07\x82\x02\x02\u0C21\u0C22\x07\xD4\x02\x02\u0C22" +
		"\u0C2F\x07\u0119\x02\x02\u0C23\u0C28\x07\xCA\x02\x02\u0C24\u0C25\x07]" +
		"\x02\x02\u0C25\u0C29\x07\xF3\x02\x02\u0C26\u0C27\x07\x9E\x02\x02\u0C27" +
		"\u0C29\x07\xF3\x02\x02\u0C28\u0C24\x03\x02\x02\x02\u0C28\u0C26\x03\x02" +
		"\x02\x02\u0C29\u0C2F\x03\x02\x02\x02\u0C2A\u0C2B\t\x1A\x02\x02\u0C2B\u0C2C" +
		"\x07\x80\x02\x02\u0C2C\u0C2D\x07\xC8\x02\x02\u0C2D\u0C2F\x05\xAEX\x02" +
		"\u0C2E\u0C1D\x03\x02\x02\x02\u0C2E\u0C21\x03\x02\x02\x02\u0C2E\u0C23\x03" +
		"\x02\x02\x02\u0C2E\u0C2A\x03\x02\x02\x02\u0C2F\u0C30\x03\x02\x02\x02\u0C30" +
		"\u0C32\x05N(\x02\u0C31\u0C2E\x03\x02\x02\x02\u0C32\u0C33\x03\x02\x02\x02" +
		"\u0C33\u0C31\x03\x02\x02\x02\u0C33\u0C34\x03\x02\x02\x02\u0C34\u0C36\x03" +
		"\x02\x02\x02\u0C35\u0C1A\x03\x02\x02\x02\u0C35\u0C31\x03\x02\x02\x02\u0C36" +
		"\u0185\x03\x02\x02\x02\u0C37\u0C38\x07\u0155\x02\x02\u0C38\u0187\x03\x02" +
		"\x02\x02\u0C39\u0C3C\x05\u018A\xC6\x02\u0C3A\u0C3C\x05\u018C\xC7\x02\u0C3B" +
		"\u0C39\x03\x02\x02\x02\u0C3B\u0C3A\x03\x02\x02\x02\u0C3C\u0189\x03\x02" +
		"\x02\x02\u0C3D\u0C3E\x07\u0150\x02\x02\u0C3E\u018B\x03\x02\x02\x02\u0C3F" +
		"\u0C40\x07\u0151\x02\x02\u0C40\u018D\x03\x02\x02\x02\u0C41\u0C42\t\v\x02" +
		"\x02\u0C42\u018F\x03\x02\x02\x02\u0C43\u0C46\t*\x02\x02\u0C44\u0C46\x05" +
		"\x04\x03\x02\u0C45\u0C43\x03\x02\x02\x02\u0C45\u0C44\x03\x02\x02\x02\u0C46" +
		"\u0191\x03\x02\x02\x02\u0199\u0193\u0196\u0199\u019D\u01A4\u01A9\u01AC" +
		"\u01B5\u01B7\u01BF\u01C1\u01C5\u01CA\u01CF\u01D9\u01E3\u01ED\u01F4\u01FC" +
		"\u0204\u0211\u0214\u021A\u0224\u022E\u0232\u0239\u023B\u0242\u024B\u024D" +
		"\u0254\u026B\u0272\u027B\u0284\u028D\u0296\u029F\u02A6\u02AC\u02B0\u02B4" +
		"\u02B8\u02BC\u02C0\u02C7\u02CC\u02D5\u02E0\u02EB\u02F5\u02FF\u0306\u030C" +
		"\u030E\u0314\u031A\u0321\u0326\u032E\u0334\u033E\u0349\u034C\u034F\u0357" +
		"\u035A\u0360\u0364\u036F\u0372\u0379\u037F\u0385\u038B\u038F\u0395\u039F" +
		"\u03A6\u03BB\u03C0\u03C7\u03CC\u03D2\u03D8\u03DE\u03E9\u03ED\u03F5\u03FA" +
		"\u0404\u040A\u040F\u0414\u0419\u041E\u0425\u0428\u042F\u0436\u0439\u0444" +
		"\u0450\u0464\u046C\u0475\u047E\u048A\u0496\u0499\u04A3\u04A6\u04AD\u04B5" +
		"\u04BC\u04BE\u04CF\u04D2\u04DA\u04E5\u04EB\u04F6\u04FA\u0503\u0506\u0509" +
		"\u050D\u0513\u051B\u0521\u0525\u0531\u0538\u0540\u0542\u054A\u054E\u0554" +
		"\u0558\u055A\u0562\u0567\u0572\u0576\u058A\u058E\u0592\u0596\u05A1\u05A9" +
		"\u05B1\u05B5\u05BA\u05BC\u05C8\u05CD\u05D1\u05D7\u05E0\u05ED\u05EF\u0601" +
		"\u0603\u0613\u061C\u0627\u062A\u0632\u063B\u063E\u0649\u064F\u0651\u0653" +
		"\u065A\u0665\u0667\u067D\u067F\u0682\u068C\u0694\u0697\u069B\u06A5\u06B1" +
		"\u06B4\u06B8\u06BF\u06C3\u06CB\u06D1\u06D3\u06D5\u06DA\u06E3\u06EB\u06FE" +
		"\u0705\u070E\u0713\u071A\u0726\u0735\u0738\u073C\u0741\u0746\u074E\u0753" +
		"\u0758\u075E\u0768\u0772\u077A\u0784\u0786\u0789\u0793\u0797\u079F\u07A3" +
		"\u07AB\u07AF\u07B3\u07B8\u07BB\u07C3\u07C7\u07CC\u07DC\u07E2\u07E8\u07EA" +
		"\u07F0\u07FB\u0800\u0807\u080C\u0811\u0814\u0818\u081D\u0822\u0829\u0831" +
		"\u0836\u0839\u083E\u0843\u084D\u0851\u0855\u0857\u085D\u0863\u086A\u0870" +
		"\u0877\u087D\u0884\u0888\u088F\u0898\u089E\u08A0\u08AC\u08AE\u08B5\u08D3" +
		"\u08F4\u08FC\u0904\u0908\u091A\u0923\u0944\u0947\u0950\u0956\u0958\u0961" +
		"\u096C\u0974\u0976\u097A\u0980\u0985\u0987\u0993\u0998\u09A2\u09A8\u09AA" +
		"\u09B1\u09C0\u09C2\u09C4\u09C8\u09D1\u09D4\u09D9\u09DB\u09E2\u09EC\u09F3" +
		"\u09F7\u09FC\u0A01\u0A08\u0A0C\u0A0F\u0A18\u0A1D\u0A21\u0A29\u0A31\u0A38" +
		"\u0A3E\u0A40\u0A44\u0A49\u0A4D\u0A53\u0A60\u0A63\u0A68\u0A6C\u0A76\u0A78" +
		"\u0A80\u0A82\u0A86\u0A8E\u0A92\u0A95\u0A98\u0A9B\u0A9E\u0AA3\u0AA8\u0AAC" +
		"\u0AB3\u0AB6\u0AB9\u0ABC\u0ACA\u0AD3\u0ADA\u0ADF\u0AE1\u0AEA\u0AED\u0AF5" +
		"\u0AFA\u0AFC\u0B08\u0B11\u0B17\u0B26\u0B30\u0B33\u0B3C\u0B44\u0B47\u0B49" +
		"\u0B50\u0B52\u0B5C\u0B5E\u0B67\u0B73\u0B78\u0B81\u0B88\u0B90\u0B94\u0BA0" +
		"\u0BA4\u0BA7\u0BAD\u0BB0\u0BB3\u0BBF\u0BC9\u0BCD\u0BD5\u0BD8\u0BDB\u0BE0" +
		"\u0BE3\u0BE6\u0BEA\u0BEE\u0BF1\u0BFD\u0BFF\u0C14\u0C16\u0C1D\u0C28\u0C2E" +
		"\u0C33\u0C35\u0C3B\u0C45";
	public static readonly _serializedATN: string = Utils.join(
		[
			informixParser._serializedATNSegment0,
			informixParser._serializedATNSegment1,
			informixParser._serializedATNSegment2,
			informixParser._serializedATNSegment3,
			informixParser._serializedATNSegment4,
			informixParser._serializedATNSegment5,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!informixParser.__ATN) {
			informixParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(informixParser._serializedATN));
		}

		return informixParser.__ATN;
	}

}

export class Compilation_unitContext extends ParserRuleContext {
	public mainBlock(): MainBlockContext {
		return this.getRuleContext(0, MainBlockContext);
	}
	public EOF(): TerminalNode { return this.getToken(informixParser.EOF, 0); }
	public databaseDeclaration(): DatabaseDeclarationContext | undefined {
		return this.tryGetRuleContext(0, DatabaseDeclarationContext);
	}
	public globalDeclaration(): GlobalDeclarationContext | undefined {
		return this.tryGetRuleContext(0, GlobalDeclarationContext);
	}
	public typeDeclarations(): TypeDeclarationsContext | undefined {
		return this.tryGetRuleContext(0, TypeDeclarationsContext);
	}
	public functionOrReportDefinitions(): FunctionOrReportDefinitionsContext | undefined {
		return this.tryGetRuleContext(0, FunctionOrReportDefinitionsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_compilation_unit; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterCompilation_unit) {
			listener.enterCompilation_unit(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitCompilation_unit) {
			listener.exitCompilation_unit(this);
		}
	}
}


export class IdentifierContext extends ParserRuleContext {
	public IDENT(): TerminalNode { return this.getToken(informixParser.IDENT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_identifier; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterIdentifier) {
			listener.enterIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitIdentifier) {
			listener.exitIdentifier(this);
		}
	}
}


export class MainBlockContext extends ParserRuleContext {
	public MAIN(): TerminalNode[];
	public MAIN(i: number): TerminalNode;
	public MAIN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.MAIN);
		} else {
			return this.getToken(informixParser.MAIN, i);
		}
	}
	public eol(): EolContext[];
	public eol(i: number): EolContext;
	public eol(i?: number): EolContext | EolContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EolContext);
		} else {
			return this.getRuleContext(i, EolContext);
		}
	}
	public END(): TerminalNode { return this.getToken(informixParser.END, 0); }
	public typeDeclarations(): TypeDeclarationsContext | undefined {
		return this.tryGetRuleContext(0, TypeDeclarationsContext);
	}
	public mainStatements(): MainStatementsContext | undefined {
		return this.tryGetRuleContext(0, MainStatementsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_mainBlock; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterMainBlock) {
			listener.enterMainBlock(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitMainBlock) {
			listener.exitMainBlock(this);
		}
	}
}


export class MainStatementsContext extends ParserRuleContext {
	public deferStatement(): DeferStatementContext[];
	public deferStatement(i: number): DeferStatementContext;
	public deferStatement(i?: number): DeferStatementContext | DeferStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DeferStatementContext);
		} else {
			return this.getRuleContext(i, DeferStatementContext);
		}
	}
	public codeBlock(): CodeBlockContext[];
	public codeBlock(i: number): CodeBlockContext;
	public codeBlock(i?: number): CodeBlockContext | CodeBlockContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CodeBlockContext);
		} else {
			return this.getRuleContext(i, CodeBlockContext);
		}
	}
	public eol(): EolContext[];
	public eol(i: number): EolContext;
	public eol(i?: number): EolContext | EolContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EolContext);
		} else {
			return this.getRuleContext(i, EolContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_mainStatements; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterMainStatements) {
			listener.enterMainStatements(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitMainStatements) {
			listener.exitMainStatements(this);
		}
	}
}


export class DeferStatementContext extends ParserRuleContext {
	public DEFER(): TerminalNode { return this.getToken(informixParser.DEFER, 0); }
	public eol(): EolContext {
		return this.getRuleContext(0, EolContext);
	}
	public INTERRUPT(): TerminalNode | undefined { return this.tryGetToken(informixParser.INTERRUPT, 0); }
	public QUIT(): TerminalNode | undefined { return this.tryGetToken(informixParser.QUIT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_deferStatement; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterDeferStatement) {
			listener.enterDeferStatement(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitDeferStatement) {
			listener.exitDeferStatement(this);
		}
	}
}


export class FunctionOrReportDefinitionsContext extends ParserRuleContext {
	public reportDefinition(): ReportDefinitionContext[];
	public reportDefinition(i: number): ReportDefinitionContext;
	public reportDefinition(i?: number): ReportDefinitionContext | ReportDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ReportDefinitionContext);
		} else {
			return this.getRuleContext(i, ReportDefinitionContext);
		}
	}
	public functionDefinition(): FunctionDefinitionContext[];
	public functionDefinition(i: number): FunctionDefinitionContext;
	public functionDefinition(i?: number): FunctionDefinitionContext | FunctionDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionDefinitionContext);
		} else {
			return this.getRuleContext(i, FunctionDefinitionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_functionOrReportDefinitions; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterFunctionOrReportDefinitions) {
			listener.enterFunctionOrReportDefinitions(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitFunctionOrReportDefinitions) {
			listener.exitFunctionOrReportDefinitions(this);
		}
	}
}


export class ReturnStatementContext extends ParserRuleContext {
	public RETURN(): TerminalNode { return this.getToken(informixParser.RETURN, 0); }
	public variableOrConstantList(): VariableOrConstantListContext | undefined {
		return this.tryGetRuleContext(0, VariableOrConstantListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_returnStatement; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterReturnStatement) {
			listener.enterReturnStatement(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitReturnStatement) {
			listener.exitReturnStatement(this);
		}
	}
}


export class FunctionDefinitionContext extends ParserRuleContext {
	public FUNCTION(): TerminalNode[];
	public FUNCTION(i: number): TerminalNode;
	public FUNCTION(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.FUNCTION);
		} else {
			return this.getToken(informixParser.FUNCTION, i);
		}
	}
	public functionIdentifier(): FunctionIdentifierContext {
		return this.getRuleContext(0, FunctionIdentifierContext);
	}
	public eol(): EolContext[];
	public eol(i: number): EolContext;
	public eol(i?: number): EolContext | EolContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EolContext);
		} else {
			return this.getRuleContext(i, EolContext);
		}
	}
	public typeDeclarations(): TypeDeclarationsContext {
		return this.getRuleContext(0, TypeDeclarationsContext);
	}
	public END(): TerminalNode { return this.getToken(informixParser.END, 0); }
	public parameterList(): ParameterListContext | undefined {
		return this.tryGetRuleContext(0, ParameterListContext);
	}
	public codeBlock(): CodeBlockContext | undefined {
		return this.tryGetRuleContext(0, CodeBlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_functionDefinition; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterFunctionDefinition) {
			listener.enterFunctionDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitFunctionDefinition) {
			listener.exitFunctionDefinition(this);
		}
	}
}


export class ParameterListContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(informixParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(informixParser.RPAREN, 0); }
	public parameterGroup(): ParameterGroupContext[];
	public parameterGroup(i: number): ParameterGroupContext;
	public parameterGroup(i?: number): ParameterGroupContext | ParameterGroupContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterGroupContext);
		} else {
			return this.getRuleContext(i, ParameterGroupContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_parameterList; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterParameterList) {
			listener.enterParameterList(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitParameterList) {
			listener.exitParameterList(this);
		}
	}
}


export class ParameterGroupContext extends ParserRuleContext {
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
			return this.getTokens(informixParser.COMMA);
		} else {
			return this.getToken(informixParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_parameterGroup; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterParameterGroup) {
			listener.enterParameterGroup(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitParameterGroup) {
			listener.exitParameterGroup(this);
		}
	}
}


export class GlobalDeclarationContext extends ParserRuleContext {
	public GLOBALS(): TerminalNode[];
	public GLOBALS(i: number): TerminalNode;
	public GLOBALS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.GLOBALS);
		} else {
			return this.getToken(informixParser.GLOBALS, i);
		}
	}
	public eol(): EolContext[];
	public eol(i: number): EolContext;
	public eol(i?: number): EolContext | EolContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EolContext);
		} else {
			return this.getRuleContext(i, EolContext);
		}
	}
	public string(): StringContext | undefined {
		return this.tryGetRuleContext(0, StringContext);
	}
	public typeDeclarations(): TypeDeclarationsContext | undefined {
		return this.tryGetRuleContext(0, TypeDeclarationsContext);
	}
	public END(): TerminalNode | undefined { return this.tryGetToken(informixParser.END, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_globalDeclaration; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterGlobalDeclaration) {
			listener.enterGlobalDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitGlobalDeclaration) {
			listener.exitGlobalDeclaration(this);
		}
	}
}


export class TypeDeclarationsContext extends ParserRuleContext {
	public typeDeclaration(): TypeDeclarationContext[];
	public typeDeclaration(i: number): TypeDeclarationContext;
	public typeDeclaration(i?: number): TypeDeclarationContext | TypeDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeDeclarationContext);
		} else {
			return this.getRuleContext(i, TypeDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_typeDeclarations; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterTypeDeclarations) {
			listener.enterTypeDeclarations(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitTypeDeclarations) {
			listener.exitTypeDeclarations(this);
		}
	}
}


export class TypeDeclarationContext extends ParserRuleContext {
	public DEFINE(): TerminalNode { return this.getToken(informixParser.DEFINE, 0); }
	public variableDeclaration(): VariableDeclarationContext[];
	public variableDeclaration(i: number): VariableDeclarationContext;
	public variableDeclaration(i?: number): VariableDeclarationContext | VariableDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableDeclarationContext);
		} else {
			return this.getRuleContext(i, VariableDeclarationContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.COMMA);
		} else {
			return this.getToken(informixParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_typeDeclaration; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterTypeDeclaration) {
			listener.enterTypeDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitTypeDeclaration) {
			listener.exitTypeDeclaration(this);
		}
	}
}


export class VariableDeclarationContext extends ParserRuleContext {
	public constantIdentifier(): ConstantIdentifierContext[];
	public constantIdentifier(i: number): ConstantIdentifierContext;
	public constantIdentifier(i?: number): ConstantIdentifierContext | ConstantIdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConstantIdentifierContext);
		} else {
			return this.getRuleContext(i, ConstantIdentifierContext);
		}
	}
	public type(): TypeContext[];
	public type(i: number): TypeContext;
	public type(i?: number): TypeContext | TypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeContext);
		} else {
			return this.getRuleContext(i, TypeContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.COMMA);
		} else {
			return this.getToken(informixParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_variableDeclaration; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterVariableDeclaration) {
			listener.enterVariableDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitVariableDeclaration) {
			listener.exitVariableDeclaration(this);
		}
	}
}


export class TypeContext extends ParserRuleContext {
	public typeIdentifier(): TypeIdentifierContext | undefined {
		return this.tryGetRuleContext(0, TypeIdentifierContext);
	}
	public indirectType(): IndirectTypeContext | undefined {
		return this.tryGetRuleContext(0, IndirectTypeContext);
	}
	public largeType(): LargeTypeContext | undefined {
		return this.tryGetRuleContext(0, LargeTypeContext);
	}
	public structuredType(): StructuredTypeContext | undefined {
		return this.tryGetRuleContext(0, StructuredTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_type; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterType) {
			listener.enterType(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitType) {
			listener.exitType(this);
		}
	}
}


export class IndirectTypeContext extends ParserRuleContext {
	public LIKE(): TerminalNode { return this.getToken(informixParser.LIKE, 0); }
	public tableIdentifier(): TableIdentifierContext {
		return this.getRuleContext(0, TableIdentifierContext);
	}
	public DOT(): TerminalNode { return this.getToken(informixParser.DOT, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_indirectType; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterIndirectType) {
			listener.enterIndirectType(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitIndirectType) {
			listener.exitIndirectType(this);
		}
	}
}


export class TypeIdentifierContext extends ParserRuleContext {
	public charType(): CharTypeContext | undefined {
		return this.tryGetRuleContext(0, CharTypeContext);
	}
	public numberType(): NumberTypeContext | undefined {
		return this.tryGetRuleContext(0, NumberTypeContext);
	}
	public timeType(): TimeTypeContext | undefined {
		return this.tryGetRuleContext(0, TimeTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_typeIdentifier; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterTypeIdentifier) {
			listener.enterTypeIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitTypeIdentifier) {
			listener.exitTypeIdentifier(this);
		}
	}
}


export class LargeTypeContext extends ParserRuleContext {
	public TEXT(): TerminalNode | undefined { return this.tryGetToken(informixParser.TEXT, 0); }
	public BYTE(): TerminalNode | undefined { return this.tryGetToken(informixParser.BYTE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_largeType; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterLargeType) {
			listener.enterLargeType(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitLargeType) {
			listener.exitLargeType(this);
		}
	}
}


export class NumberTypeContext extends ParserRuleContext {
	public BIGINT(): TerminalNode | undefined { return this.tryGetToken(informixParser.BIGINT, 0); }
	public INTEGER(): TerminalNode | undefined { return this.tryGetToken(informixParser.INTEGER, 0); }
	public INT(): TerminalNode | undefined { return this.tryGetToken(informixParser.INT, 0); }
	public SMALLINT(): TerminalNode | undefined { return this.tryGetToken(informixParser.SMALLINT, 0); }
	public REAL(): TerminalNode | undefined { return this.tryGetToken(informixParser.REAL, 0); }
	public SMALLFLOAT(): TerminalNode | undefined { return this.tryGetToken(informixParser.SMALLFLOAT, 0); }
	public DECIMAL(): TerminalNode | undefined { return this.tryGetToken(informixParser.DECIMAL, 0); }
	public DEC(): TerminalNode | undefined { return this.tryGetToken(informixParser.DEC, 0); }
	public NUMERIC(): TerminalNode | undefined { return this.tryGetToken(informixParser.NUMERIC, 0); }
	public MONEY(): TerminalNode | undefined { return this.tryGetToken(informixParser.MONEY, 0); }
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(informixParser.LPAREN, 0); }
	public numericConstant(): NumericConstantContext[];
	public numericConstant(i: number): NumericConstantContext;
	public numericConstant(i?: number): NumericConstantContext | NumericConstantContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NumericConstantContext);
		} else {
			return this.getRuleContext(i, NumericConstantContext);
		}
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(informixParser.RPAREN, 0); }
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(informixParser.COMMA, 0); }
	public FLOAT(): TerminalNode | undefined { return this.tryGetToken(informixParser.FLOAT, 0); }
	public DOUBLE(): TerminalNode | undefined { return this.tryGetToken(informixParser.DOUBLE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_numberType; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterNumberType) {
			listener.enterNumberType(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitNumberType) {
			listener.exitNumberType(this);
		}
	}
}


export class CharTypeContext extends ParserRuleContext {
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(informixParser.LPAREN, 0); }
	public numericConstant(): NumericConstantContext[];
	public numericConstant(i: number): NumericConstantContext;
	public numericConstant(i?: number): NumericConstantContext | NumericConstantContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NumericConstantContext);
		} else {
			return this.getRuleContext(i, NumericConstantContext);
		}
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(informixParser.RPAREN, 0); }
	public VARCHAR(): TerminalNode | undefined { return this.tryGetToken(informixParser.VARCHAR, 0); }
	public NVARCHAR(): TerminalNode | undefined { return this.tryGetToken(informixParser.NVARCHAR, 0); }
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(informixParser.COMMA, 0); }
	public CHAR(): TerminalNode | undefined { return this.tryGetToken(informixParser.CHAR, 0); }
	public NCHAR(): TerminalNode | undefined { return this.tryGetToken(informixParser.NCHAR, 0); }
	public CHARACTER(): TerminalNode | undefined { return this.tryGetToken(informixParser.CHARACTER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_charType; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterCharType) {
			listener.enterCharType(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitCharType) {
			listener.exitCharType(this);
		}
	}
}


export class TimeTypeContext extends ParserRuleContext {
	public DATE(): TerminalNode | undefined { return this.tryGetToken(informixParser.DATE, 0); }
	public DATETIME(): TerminalNode | undefined { return this.tryGetToken(informixParser.DATETIME, 0); }
	public datetimeQualifier(): DatetimeQualifierContext | undefined {
		return this.tryGetRuleContext(0, DatetimeQualifierContext);
	}
	public INTERVAL(): TerminalNode | undefined { return this.tryGetToken(informixParser.INTERVAL, 0); }
	public intervalQualifier(): IntervalQualifierContext | undefined {
		return this.tryGetRuleContext(0, IntervalQualifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_timeType; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterTimeType) {
			listener.enterTimeType(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitTimeType) {
			listener.exitTimeType(this);
		}
	}
}


export class DatetimeQualifierContext extends ParserRuleContext {
	public YEAR(): TerminalNode | undefined { return this.tryGetToken(informixParser.YEAR, 0); }
	public TO(): TerminalNode { return this.getToken(informixParser.TO, 0); }
	public yearQualifier(): YearQualifierContext | undefined {
		return this.tryGetRuleContext(0, YearQualifierContext);
	}
	public MONTH(): TerminalNode | undefined { return this.tryGetToken(informixParser.MONTH, 0); }
	public monthQualifier(): MonthQualifierContext | undefined {
		return this.tryGetRuleContext(0, MonthQualifierContext);
	}
	public DAY(): TerminalNode | undefined { return this.tryGetToken(informixParser.DAY, 0); }
	public dayQualifier(): DayQualifierContext | undefined {
		return this.tryGetRuleContext(0, DayQualifierContext);
	}
	public HOUR(): TerminalNode | undefined { return this.tryGetToken(informixParser.HOUR, 0); }
	public hourQualifier(): HourQualifierContext | undefined {
		return this.tryGetRuleContext(0, HourQualifierContext);
	}
	public MINUTE(): TerminalNode | undefined { return this.tryGetToken(informixParser.MINUTE, 0); }
	public minuteQualifier(): MinuteQualifierContext | undefined {
		return this.tryGetRuleContext(0, MinuteQualifierContext);
	}
	public SECOND(): TerminalNode | undefined { return this.tryGetToken(informixParser.SECOND, 0); }
	public secondQualifier(): SecondQualifierContext | undefined {
		return this.tryGetRuleContext(0, SecondQualifierContext);
	}
	public FRACTION(): TerminalNode | undefined { return this.tryGetToken(informixParser.FRACTION, 0); }
	public fractionQualifier(): FractionQualifierContext | undefined {
		return this.tryGetRuleContext(0, FractionQualifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_datetimeQualifier; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterDatetimeQualifier) {
			listener.enterDatetimeQualifier(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitDatetimeQualifier) {
			listener.exitDatetimeQualifier(this);
		}
	}
}


export class IntervalQualifierContext extends ParserRuleContext {
	public YEAR(): TerminalNode | undefined { return this.tryGetToken(informixParser.YEAR, 0); }
	public TO(): TerminalNode { return this.getToken(informixParser.TO, 0); }
	public yearQualifier(): YearQualifierContext | undefined {
		return this.tryGetRuleContext(0, YearQualifierContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(informixParser.LPAREN, 0); }
	public numericConstant(): NumericConstantContext | undefined {
		return this.tryGetRuleContext(0, NumericConstantContext);
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(informixParser.RPAREN, 0); }
	public MONTH(): TerminalNode | undefined { return this.tryGetToken(informixParser.MONTH, 0); }
	public monthQualifier(): MonthQualifierContext | undefined {
		return this.tryGetRuleContext(0, MonthQualifierContext);
	}
	public DAY(): TerminalNode | undefined { return this.tryGetToken(informixParser.DAY, 0); }
	public dayQualifier(): DayQualifierContext | undefined {
		return this.tryGetRuleContext(0, DayQualifierContext);
	}
	public HOUR(): TerminalNode | undefined { return this.tryGetToken(informixParser.HOUR, 0); }
	public hourQualifier(): HourQualifierContext | undefined {
		return this.tryGetRuleContext(0, HourQualifierContext);
	}
	public MINUTE(): TerminalNode | undefined { return this.tryGetToken(informixParser.MINUTE, 0); }
	public minuteQualifier(): MinuteQualifierContext | undefined {
		return this.tryGetRuleContext(0, MinuteQualifierContext);
	}
	public SECOND(): TerminalNode | undefined { return this.tryGetToken(informixParser.SECOND, 0); }
	public secondQualifier(): SecondQualifierContext | undefined {
		return this.tryGetRuleContext(0, SecondQualifierContext);
	}
	public FRACTION(): TerminalNode | undefined { return this.tryGetToken(informixParser.FRACTION, 0); }
	public fractionQualifier(): FractionQualifierContext | undefined {
		return this.tryGetRuleContext(0, FractionQualifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_intervalQualifier; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterIntervalQualifier) {
			listener.enterIntervalQualifier(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitIntervalQualifier) {
			listener.exitIntervalQualifier(this);
		}
	}
}


export class UnitTypeContext extends ParserRuleContext {
	public yearQualifier(): YearQualifierContext {
		return this.getRuleContext(0, YearQualifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_unitType; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterUnitType) {
			listener.enterUnitType(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitUnitType) {
			listener.exitUnitType(this);
		}
	}
}


export class YearQualifierContext extends ParserRuleContext {
	public YEAR(): TerminalNode | undefined { return this.tryGetToken(informixParser.YEAR, 0); }
	public monthQualifier(): MonthQualifierContext | undefined {
		return this.tryGetRuleContext(0, MonthQualifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_yearQualifier; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterYearQualifier) {
			listener.enterYearQualifier(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitYearQualifier) {
			listener.exitYearQualifier(this);
		}
	}
}


export class MonthQualifierContext extends ParserRuleContext {
	public MONTH(): TerminalNode | undefined { return this.tryGetToken(informixParser.MONTH, 0); }
	public dayQualifier(): DayQualifierContext | undefined {
		return this.tryGetRuleContext(0, DayQualifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_monthQualifier; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterMonthQualifier) {
			listener.enterMonthQualifier(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitMonthQualifier) {
			listener.exitMonthQualifier(this);
		}
	}
}


export class DayQualifierContext extends ParserRuleContext {
	public DAY(): TerminalNode | undefined { return this.tryGetToken(informixParser.DAY, 0); }
	public hourQualifier(): HourQualifierContext | undefined {
		return this.tryGetRuleContext(0, HourQualifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_dayQualifier; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterDayQualifier) {
			listener.enterDayQualifier(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitDayQualifier) {
			listener.exitDayQualifier(this);
		}
	}
}


export class HourQualifierContext extends ParserRuleContext {
	public HOUR(): TerminalNode | undefined { return this.tryGetToken(informixParser.HOUR, 0); }
	public minuteQualifier(): MinuteQualifierContext | undefined {
		return this.tryGetRuleContext(0, MinuteQualifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_hourQualifier; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterHourQualifier) {
			listener.enterHourQualifier(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitHourQualifier) {
			listener.exitHourQualifier(this);
		}
	}
}


export class MinuteQualifierContext extends ParserRuleContext {
	public MINUTE(): TerminalNode | undefined { return this.tryGetToken(informixParser.MINUTE, 0); }
	public secondQualifier(): SecondQualifierContext | undefined {
		return this.tryGetRuleContext(0, SecondQualifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_minuteQualifier; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterMinuteQualifier) {
			listener.enterMinuteQualifier(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitMinuteQualifier) {
			listener.exitMinuteQualifier(this);
		}
	}
}


export class SecondQualifierContext extends ParserRuleContext {
	public SECOND(): TerminalNode | undefined { return this.tryGetToken(informixParser.SECOND, 0); }
	public fractionQualifier(): FractionQualifierContext | undefined {
		return this.tryGetRuleContext(0, FractionQualifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_secondQualifier; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterSecondQualifier) {
			listener.enterSecondQualifier(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitSecondQualifier) {
			listener.exitSecondQualifier(this);
		}
	}
}


export class FractionQualifierContext extends ParserRuleContext {
	public FRACTION(): TerminalNode { return this.getToken(informixParser.FRACTION, 0); }
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(informixParser.LPAREN, 0); }
	public numericConstant(): NumericConstantContext | undefined {
		return this.tryGetRuleContext(0, NumericConstantContext);
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(informixParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_fractionQualifier; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterFractionQualifier) {
			listener.enterFractionQualifier(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitFractionQualifier) {
			listener.exitFractionQualifier(this);
		}
	}
}


export class StructuredTypeContext extends ParserRuleContext {
	public recordType(): RecordTypeContext | undefined {
		return this.tryGetRuleContext(0, RecordTypeContext);
	}
	public arrayType(): ArrayTypeContext | undefined {
		return this.tryGetRuleContext(0, ArrayTypeContext);
	}
	public dynArrayType(): DynArrayTypeContext | undefined {
		return this.tryGetRuleContext(0, DynArrayTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_structuredType; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterStructuredType) {
			listener.enterStructuredType(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitStructuredType) {
			listener.exitStructuredType(this);
		}
	}
}


export class RecordTypeContext extends ParserRuleContext {
	public RECORD(): TerminalNode[];
	public RECORD(i: number): TerminalNode;
	public RECORD(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.RECORD);
		} else {
			return this.getToken(informixParser.RECORD, i);
		}
	}
	public eol(): EolContext | undefined {
		return this.tryGetRuleContext(0, EolContext);
	}
	public END(): TerminalNode | undefined { return this.tryGetToken(informixParser.END, 0); }
	public variableDeclaration(): VariableDeclarationContext[];
	public variableDeclaration(i: number): VariableDeclarationContext;
	public variableDeclaration(i?: number): VariableDeclarationContext | VariableDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableDeclarationContext);
		} else {
			return this.getRuleContext(i, VariableDeclarationContext);
		}
	}
	public LIKE(): TerminalNode | undefined { return this.tryGetToken(informixParser.LIKE, 0); }
	public tableIdentifier(): TableIdentifierContext | undefined {
		return this.tryGetRuleContext(0, TableIdentifierContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(informixParser.DOT, 0); }
	public STAR(): TerminalNode | undefined { return this.tryGetToken(informixParser.STAR, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.COMMA);
		} else {
			return this.getToken(informixParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_recordType; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterRecordType) {
			listener.enterRecordType(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitRecordType) {
			listener.exitRecordType(this);
		}
	}
}


export class ArrayIndexerContext extends ParserRuleContext {
	public LBRACK(): TerminalNode { return this.getToken(informixParser.LBRACK, 0); }
	public numericConstant(): NumericConstantContext[];
	public numericConstant(i: number): NumericConstantContext;
	public numericConstant(i?: number): NumericConstantContext | NumericConstantContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NumericConstantContext);
		} else {
			return this.getRuleContext(i, NumericConstantContext);
		}
	}
	public RBRACK(): TerminalNode { return this.getToken(informixParser.RBRACK, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.COMMA);
		} else {
			return this.getToken(informixParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_arrayIndexer; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterArrayIndexer) {
			listener.enterArrayIndexer(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitArrayIndexer) {
			listener.exitArrayIndexer(this);
		}
	}
}


export class ArrayTypeContext extends ParserRuleContext {
	public ARRAY(): TerminalNode { return this.getToken(informixParser.ARRAY, 0); }
	public arrayIndexer(): ArrayIndexerContext {
		return this.getRuleContext(0, ArrayIndexerContext);
	}
	public OF(): TerminalNode { return this.getToken(informixParser.OF, 0); }
	public recordType(): RecordTypeContext | undefined {
		return this.tryGetRuleContext(0, RecordTypeContext);
	}
	public typeIdentifier(): TypeIdentifierContext | undefined {
		return this.tryGetRuleContext(0, TypeIdentifierContext);
	}
	public largeType(): LargeTypeContext | undefined {
		return this.tryGetRuleContext(0, LargeTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_arrayType; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterArrayType) {
			listener.enterArrayType(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitArrayType) {
			listener.exitArrayType(this);
		}
	}
}


export class DynArrayTypeContext extends ParserRuleContext {
	public DYNAMIC(): TerminalNode { return this.getToken(informixParser.DYNAMIC, 0); }
	public ARRAY(): TerminalNode { return this.getToken(informixParser.ARRAY, 0); }
	public WITH(): TerminalNode { return this.getToken(informixParser.WITH, 0); }
	public numericConstant(): NumericConstantContext {
		return this.getRuleContext(0, NumericConstantContext);
	}
	public DIMENSIONS(): TerminalNode { return this.getToken(informixParser.DIMENSIONS, 0); }
	public OF(): TerminalNode { return this.getToken(informixParser.OF, 0); }
	public recordType(): RecordTypeContext | undefined {
		return this.tryGetRuleContext(0, RecordTypeContext);
	}
	public typeIdentifier(): TypeIdentifierContext | undefined {
		return this.tryGetRuleContext(0, TypeIdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_dynArrayType; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterDynArrayType) {
			listener.enterDynArrayType(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitDynArrayType) {
			listener.exitDynArrayType(this);
		}
	}
}


export class StringContext extends ParserRuleContext {
	public STRING_LITERAL(): TerminalNode { return this.getToken(informixParser.STRING_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_string; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterString) {
			listener.enterString(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitString) {
			listener.exitString(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public unlabelledStatement(): UnlabelledStatementContext {
		return this.getRuleContext(0, UnlabelledStatementContext);
	}
	public label(): LabelContext | undefined {
		return this.tryGetRuleContext(0, LabelContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(informixParser.COLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_statement; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
}


export class CodeBlockContext extends ParserRuleContext {
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public databaseDeclaration(): DatabaseDeclarationContext[];
	public databaseDeclaration(i: number): DatabaseDeclarationContext;
	public databaseDeclaration(i?: number): DatabaseDeclarationContext | DatabaseDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DatabaseDeclarationContext);
		} else {
			return this.getRuleContext(i, DatabaseDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_codeBlock; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterCodeBlock) {
			listener.enterCodeBlock(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitCodeBlock) {
			listener.exitCodeBlock(this);
		}
	}
}


export class LabelContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_label; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterLabel) {
			listener.enterLabel(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitLabel) {
			listener.exitLabel(this);
		}
	}
}


export class UnlabelledStatementContext extends ParserRuleContext {
	public simpleStatement(): SimpleStatementContext | undefined {
		return this.tryGetRuleContext(0, SimpleStatementContext);
	}
	public structuredStatement(): StructuredStatementContext | undefined {
		return this.tryGetRuleContext(0, StructuredStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_unlabelledStatement; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterUnlabelledStatement) {
			listener.enterUnlabelledStatement(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitUnlabelledStatement) {
			listener.exitUnlabelledStatement(this);
		}
	}
}


export class SimpleStatementContext extends ParserRuleContext {
	public assignmentStatement(): AssignmentStatementContext | undefined {
		return this.tryGetRuleContext(0, AssignmentStatementContext);
	}
	public procedureStatement(): ProcedureStatementContext | undefined {
		return this.tryGetRuleContext(0, ProcedureStatementContext);
	}
	public sqlStatements(): SqlStatementsContext | undefined {
		return this.tryGetRuleContext(0, SqlStatementsContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(informixParser.SEMI, 0); }
	public otherFGLStatement(): OtherFGLStatementContext | undefined {
		return this.tryGetRuleContext(0, OtherFGLStatementContext);
	}
	public menuInsideStatement(): MenuInsideStatementContext | undefined {
		return this.tryGetRuleContext(0, MenuInsideStatementContext);
	}
	public constructInsideStatement(): ConstructInsideStatementContext | undefined {
		return this.tryGetRuleContext(0, ConstructInsideStatementContext);
	}
	public displayInsideStatement(): DisplayInsideStatementContext | undefined {
		return this.tryGetRuleContext(0, DisplayInsideStatementContext);
	}
	public inputInsideStatement(): InputInsideStatementContext | undefined {
		return this.tryGetRuleContext(0, InputInsideStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_simpleStatement; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterSimpleStatement) {
			listener.enterSimpleStatement(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitSimpleStatement) {
			listener.exitSimpleStatement(this);
		}
	}
}


export class RunStatementContext extends ParserRuleContext {
	public RUN(): TerminalNode { return this.getToken(informixParser.RUN, 0); }
	public variable(): VariableContext[];
	public variable(i: number): VariableContext;
	public variable(i?: number): VariableContext | VariableContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableContext);
		} else {
			return this.getRuleContext(i, VariableContext);
		}
	}
	public string(): StringContext | undefined {
		return this.tryGetRuleContext(0, StringContext);
	}
	public IN(): TerminalNode | undefined { return this.tryGetToken(informixParser.IN, 0); }
	public FORM(): TerminalNode | undefined { return this.tryGetToken(informixParser.FORM, 0); }
	public MODE(): TerminalNode | undefined { return this.tryGetToken(informixParser.MODE, 0); }
	public LINE(): TerminalNode | undefined { return this.tryGetToken(informixParser.LINE, 0); }
	public WITHOUT(): TerminalNode | undefined { return this.tryGetToken(informixParser.WITHOUT, 0); }
	public WAITING(): TerminalNode | undefined { return this.tryGetToken(informixParser.WAITING, 0); }
	public RETURNING(): TerminalNode | undefined { return this.tryGetToken(informixParser.RETURNING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_runStatement; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterRunStatement) {
			listener.enterRunStatement(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitRunStatement) {
			listener.exitRunStatement(this);
		}
	}
}


export class AssignmentStatementContext extends ParserRuleContext {
	public LET(): TerminalNode { return this.getToken(informixParser.LET, 0); }
	public variable(): VariableContext {
		return this.getRuleContext(0, VariableContext);
	}
	public EQUAL(): TerminalNode { return this.getToken(informixParser.EQUAL, 0); }
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
			return this.getTokens(informixParser.COMMA);
		} else {
			return this.getToken(informixParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_assignmentStatement; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterAssignmentStatement) {
			listener.enterAssignmentStatement(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitAssignmentStatement) {
			listener.exitAssignmentStatement(this);
		}
	}
}


export class ProcedureStatementContext extends ParserRuleContext {
	public CALL(): TerminalNode { return this.getToken(informixParser.CALL, 0); }
	public procedureIdentifier(): ProcedureIdentifierContext {
		return this.getRuleContext(0, ProcedureIdentifierContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(informixParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(informixParser.RPAREN, 0); }
	public RETURNING(): TerminalNode | undefined { return this.tryGetToken(informixParser.RETURNING, 0); }
	public variable(): VariableContext[];
	public variable(i: number): VariableContext;
	public variable(i?: number): VariableContext | VariableContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableContext);
		} else {
			return this.getRuleContext(i, VariableContext);
		}
	}
	public actualParameter(): ActualParameterContext[];
	public actualParameter(i: number): ActualParameterContext;
	public actualParameter(i?: number): ActualParameterContext | ActualParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ActualParameterContext);
		} else {
			return this.getRuleContext(i, ActualParameterContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.COMMA);
		} else {
			return this.getToken(informixParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_procedureStatement; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterProcedureStatement) {
			listener.enterProcedureStatement(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitProcedureStatement) {
			listener.exitProcedureStatement(this);
		}
	}
}


export class ProcedureIdentifierContext extends ParserRuleContext {
	public functionIdentifier(): FunctionIdentifierContext {
		return this.getRuleContext(0, FunctionIdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_procedureIdentifier; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterProcedureIdentifier) {
			listener.enterProcedureIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitProcedureIdentifier) {
			listener.exitProcedureIdentifier(this);
		}
	}
}


export class ActualParameterContext extends ParserRuleContext {
	public STAR(): TerminalNode | undefined { return this.tryGetToken(informixParser.STAR, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_actualParameter; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterActualParameter) {
			listener.enterActualParameter(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitActualParameter) {
			listener.exitActualParameter(this);
		}
	}
}


export class GotoStatementContext extends ParserRuleContext {
	public GOTO(): TerminalNode { return this.getToken(informixParser.GOTO, 0); }
	public label(): LabelContext {
		return this.getRuleContext(0, LabelContext);
	}
	public eol(): EolContext {
		return this.getRuleContext(0, EolContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(informixParser.COLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_gotoStatement; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterGotoStatement) {
			listener.enterGotoStatement(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitGotoStatement) {
			listener.exitGotoStatement(this);
		}
	}
}


export class ConditionContext extends ParserRuleContext {
	public TRUE(): TerminalNode | undefined { return this.tryGetToken(informixParser.TRUE, 0); }
	public FALSE(): TerminalNode | undefined { return this.tryGetToken(informixParser.FALSE, 0); }
	public logicalTerm(): LogicalTermContext[];
	public logicalTerm(i: number): LogicalTermContext;
	public logicalTerm(i?: number): LogicalTermContext | LogicalTermContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LogicalTermContext);
		} else {
			return this.getRuleContext(i, LogicalTermContext);
		}
	}
	public OR(): TerminalNode[];
	public OR(i: number): TerminalNode;
	public OR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.OR);
		} else {
			return this.getToken(informixParser.OR, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_condition; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterCondition) {
			listener.enterCondition(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitCondition) {
			listener.exitCondition(this);
		}
	}
}


export class LogicalTermContext extends ParserRuleContext {
	public logicalFactor(): LogicalFactorContext[];
	public logicalFactor(i: number): LogicalFactorContext;
	public logicalFactor(i?: number): LogicalFactorContext | LogicalFactorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LogicalFactorContext);
		} else {
			return this.getRuleContext(i, LogicalFactorContext);
		}
	}
	public AND(): TerminalNode[];
	public AND(i: number): TerminalNode;
	public AND(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.AND);
		} else {
			return this.getToken(informixParser.AND, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_logicalTerm; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterLogicalTerm) {
			listener.enterLogicalTerm(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitLogicalTerm) {
			listener.exitLogicalTerm(this);
		}
	}
}


export class LogicalFactorContext extends ParserRuleContext {
	public sqlExpression(): SqlExpressionContext[];
	public sqlExpression(i: number): SqlExpressionContext;
	public sqlExpression(i?: number): SqlExpressionContext | SqlExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SqlExpressionContext);
		} else {
			return this.getRuleContext(i, SqlExpressionContext);
		}
	}
	public LIKE(): TerminalNode[];
	public LIKE(i: number): TerminalNode;
	public LIKE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.LIKE);
		} else {
			return this.getToken(informixParser.LIKE, i);
		}
	}
	public NOT(): TerminalNode[];
	public NOT(i: number): TerminalNode;
	public NOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.NOT);
		} else {
			return this.getToken(informixParser.NOT, i);
		}
	}
	public ESC(): TerminalNode | undefined { return this.tryGetToken(informixParser.ESC, 0); }
	public QUOTED_STRING(): TerminalNode | undefined { return this.tryGetToken(informixParser.QUOTED_STRING, 0); }
	public BETWEEN(): TerminalNode[];
	public BETWEEN(i: number): TerminalNode;
	public BETWEEN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.BETWEEN);
		} else {
			return this.getToken(informixParser.BETWEEN, i);
		}
	}
	public AND(): TerminalNode | undefined { return this.tryGetToken(informixParser.AND, 0); }
	public IS(): TerminalNode[];
	public IS(i: number): TerminalNode;
	public IS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.IS);
		} else {
			return this.getToken(informixParser.IS, i);
		}
	}
	public NULL(): TerminalNode[];
	public NULL(i: number): TerminalNode;
	public NULL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.NULL);
		} else {
			return this.getToken(informixParser.NULL, i);
		}
	}
	public quantifiedFactor(): QuantifiedFactorContext[];
	public quantifiedFactor(i: number): QuantifiedFactorContext;
	public quantifiedFactor(i?: number): QuantifiedFactorContext | QuantifiedFactorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(QuantifiedFactorContext);
		} else {
			return this.getRuleContext(i, QuantifiedFactorContext);
		}
	}
	public condition(): ConditionContext[];
	public condition(i: number): ConditionContext;
	public condition(i?: number): ConditionContext | ConditionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConditionContext);
		} else {
			return this.getRuleContext(i, ConditionContext);
		}
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(informixParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(informixParser.RPAREN, 0); }
	public relationalOperator(): RelationalOperatorContext | undefined {
		return this.tryGetRuleContext(0, RelationalOperatorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_logicalFactor; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterLogicalFactor) {
			listener.enterLogicalFactor(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitLogicalFactor) {
			listener.exitLogicalFactor(this);
		}
	}
}


export class QuantifiedFactorContext extends ParserRuleContext {
	public sqlExpression(): SqlExpressionContext[];
	public sqlExpression(i: number): SqlExpressionContext;
	public sqlExpression(i?: number): SqlExpressionContext | SqlExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SqlExpressionContext);
		} else {
			return this.getRuleContext(i, SqlExpressionContext);
		}
	}
	public relationalOperator(): RelationalOperatorContext[];
	public relationalOperator(i: number): RelationalOperatorContext;
	public relationalOperator(i?: number): RelationalOperatorContext | RelationalOperatorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RelationalOperatorContext);
		} else {
			return this.getRuleContext(i, RelationalOperatorContext);
		}
	}
	public subquery(): SubqueryContext[];
	public subquery(i: number): SubqueryContext;
	public subquery(i?: number): SubqueryContext | SubqueryContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SubqueryContext);
		} else {
			return this.getRuleContext(i, SubqueryContext);
		}
	}
	public ALL(): TerminalNode[];
	public ALL(i: number): TerminalNode;
	public ALL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.ALL);
		} else {
			return this.getToken(informixParser.ALL, i);
		}
	}
	public ANY(): TerminalNode[];
	public ANY(i: number): TerminalNode;
	public ANY(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.ANY);
		} else {
			return this.getToken(informixParser.ANY, i);
		}
	}
	public EXISTS(): TerminalNode[];
	public EXISTS(i: number): TerminalNode;
	public EXISTS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.EXISTS);
		} else {
			return this.getToken(informixParser.EXISTS, i);
		}
	}
	public NOT(): TerminalNode[];
	public NOT(i: number): TerminalNode;
	public NOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.NOT);
		} else {
			return this.getToken(informixParser.NOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_quantifiedFactor; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterQuantifiedFactor) {
			listener.enterQuantifiedFactor(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitQuantifiedFactor) {
			listener.exitQuantifiedFactor(this);
		}
	}
}


export class ExpressionSetContext extends ParserRuleContext {
	public sqlExpression(): SqlExpressionContext[];
	public sqlExpression(i: number): SqlExpressionContext;
	public sqlExpression(i?: number): SqlExpressionContext | SqlExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SqlExpressionContext);
		} else {
			return this.getRuleContext(i, SqlExpressionContext);
		}
	}
	public subquery(): SubqueryContext | undefined {
		return this.tryGetRuleContext(0, SubqueryContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_expressionSet; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterExpressionSet) {
			listener.enterExpressionSet(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitExpressionSet) {
			listener.exitExpressionSet(this);
		}
	}
}


export class SubqueryContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(informixParser.LPAREN, 0); }
	public sqlSelectStatement(): SqlSelectStatementContext {
		return this.getRuleContext(0, SqlSelectStatementContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(informixParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_subquery; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterSubquery) {
			listener.enterSubquery(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitSubquery) {
			listener.exitSubquery(this);
		}
	}
}


export class SqlExpressionContext extends ParserRuleContext {
	public sqlTerm(): SqlTermContext[];
	public sqlTerm(i: number): SqlTermContext;
	public sqlTerm(i?: number): SqlTermContext | SqlTermContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SqlTermContext);
		} else {
			return this.getRuleContext(i, SqlTermContext);
		}
	}
	public PLUS(): TerminalNode[];
	public PLUS(i: number): TerminalNode;
	public PLUS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.PLUS);
		} else {
			return this.getToken(informixParser.PLUS, i);
		}
	}
	public MINUS(): TerminalNode[];
	public MINUS(i: number): TerminalNode;
	public MINUS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.MINUS);
		} else {
			return this.getToken(informixParser.MINUS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_sqlExpression; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterSqlExpression) {
			listener.enterSqlExpression(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitSqlExpression) {
			listener.exitSqlExpression(this);
		}
	}
}


export class SqlAliasContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public AS(): TerminalNode | undefined { return this.tryGetToken(informixParser.AS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_sqlAlias; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterSqlAlias) {
			listener.enterSqlAlias(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitSqlAlias) {
			listener.exitSqlAlias(this);
		}
	}
}


export class SqlTermContext extends ParserRuleContext {
	public sqlFactor(): SqlFactorContext[];
	public sqlFactor(i: number): SqlFactorContext;
	public sqlFactor(i?: number): SqlFactorContext | SqlFactorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SqlFactorContext);
		} else {
			return this.getRuleContext(i, SqlFactorContext);
		}
	}
	public sqlMultiply(): SqlMultiplyContext[];
	public sqlMultiply(i: number): SqlMultiplyContext;
	public sqlMultiply(i?: number): SqlMultiplyContext | SqlMultiplyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SqlMultiplyContext);
		} else {
			return this.getRuleContext(i, SqlMultiplyContext);
		}
	}
	public DIV(): TerminalNode[];
	public DIV(i: number): TerminalNode;
	public DIV(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.DIV);
		} else {
			return this.getToken(informixParser.DIV, i);
		}
	}
	public SLASH(): TerminalNode[];
	public SLASH(i: number): TerminalNode;
	public SLASH(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.SLASH);
		} else {
			return this.getToken(informixParser.SLASH, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_sqlTerm; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterSqlTerm) {
			listener.enterSqlTerm(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitSqlTerm) {
			listener.exitSqlTerm(this);
		}
	}
}


export class SqlMultiplyContext extends ParserRuleContext {
	public STAR(): TerminalNode { return this.getToken(informixParser.STAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_sqlMultiply; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterSqlMultiply) {
			listener.enterSqlMultiply(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitSqlMultiply) {
			listener.exitSqlMultiply(this);
		}
	}
}


export class SqlFactorContext extends ParserRuleContext {
	public sqlFactor2(): SqlFactor2Context[];
	public sqlFactor2(i: number): SqlFactor2Context;
	public sqlFactor2(i?: number): SqlFactor2Context | SqlFactor2Context[] {
		if (i === undefined) {
			return this.getRuleContexts(SqlFactor2Context);
		} else {
			return this.getRuleContext(i, SqlFactor2Context);
		}
	}
	public DOUBLEVERTBAR(): TerminalNode[];
	public DOUBLEVERTBAR(i: number): TerminalNode;
	public DOUBLEVERTBAR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.DOUBLEVERTBAR);
		} else {
			return this.getToken(informixParser.DOUBLEVERTBAR, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_sqlFactor; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterSqlFactor) {
			listener.enterSqlFactor(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitSqlFactor) {
			listener.exitSqlFactor(this);
		}
	}
}


export class SqlFactor2Context extends ParserRuleContext {
	public sqlVariable(): SqlVariableContext[];
	public sqlVariable(i: number): SqlVariableContext;
	public sqlVariable(i?: number): SqlVariableContext | SqlVariableContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SqlVariableContext);
		} else {
			return this.getRuleContext(i, SqlVariableContext);
		}
	}
	public UNITS(): TerminalNode[];
	public UNITS(i: number): TerminalNode;
	public UNITS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.UNITS);
		} else {
			return this.getToken(informixParser.UNITS, i);
		}
	}
	public unitType(): UnitTypeContext[];
	public unitType(i: number): UnitTypeContext;
	public unitType(i?: number): UnitTypeContext | UnitTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(UnitTypeContext);
		} else {
			return this.getRuleContext(i, UnitTypeContext);
		}
	}
	public sqlLiteral(): SqlLiteralContext[];
	public sqlLiteral(i: number): SqlLiteralContext;
	public sqlLiteral(i?: number): SqlLiteralContext | SqlLiteralContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SqlLiteralContext);
		} else {
			return this.getRuleContext(i, SqlLiteralContext);
		}
	}
	public groupFunction(): GroupFunctionContext[];
	public groupFunction(i: number): GroupFunctionContext;
	public groupFunction(i?: number): GroupFunctionContext | GroupFunctionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(GroupFunctionContext);
		} else {
			return this.getRuleContext(i, GroupFunctionContext);
		}
	}
	public LPAREN(): TerminalNode[];
	public LPAREN(i: number): TerminalNode;
	public LPAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.LPAREN);
		} else {
			return this.getToken(informixParser.LPAREN, i);
		}
	}
	public RPAREN(): TerminalNode[];
	public RPAREN(i: number): TerminalNode;
	public RPAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.RPAREN);
		} else {
			return this.getToken(informixParser.RPAREN, i);
		}
	}
	public sqlExpression(): SqlExpressionContext[];
	public sqlExpression(i: number): SqlExpressionContext;
	public sqlExpression(i?: number): SqlExpressionContext | SqlExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SqlExpressionContext);
		} else {
			return this.getRuleContext(i, SqlExpressionContext);
		}
	}
	public STAR(): TerminalNode[];
	public STAR(i: number): TerminalNode;
	public STAR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.STAR);
		} else {
			return this.getToken(informixParser.STAR, i);
		}
	}
	public ALL(): TerminalNode[];
	public ALL(i: number): TerminalNode;
	public ALL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.ALL);
		} else {
			return this.getToken(informixParser.ALL, i);
		}
	}
	public DISTINCT(): TerminalNode[];
	public DISTINCT(i: number): TerminalNode;
	public DISTINCT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.DISTINCT);
		} else {
			return this.getToken(informixParser.DISTINCT, i);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.COMMA);
		} else {
			return this.getToken(informixParser.COMMA, i);
		}
	}
	public sqlFunction(): SqlFunctionContext[];
	public sqlFunction(i: number): SqlFunctionContext;
	public sqlFunction(i?: number): SqlFunctionContext | SqlFunctionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SqlFunctionContext);
		} else {
			return this.getRuleContext(i, SqlFunctionContext);
		}
	}
	public PLUS(): TerminalNode[];
	public PLUS(i: number): TerminalNode;
	public PLUS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.PLUS);
		} else {
			return this.getToken(informixParser.PLUS, i);
		}
	}
	public MINUS(): TerminalNode[];
	public MINUS(i: number): TerminalNode;
	public MINUS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.MINUS);
		} else {
			return this.getToken(informixParser.MINUS, i);
		}
	}
	public sqlExpressionList(): SqlExpressionListContext | undefined {
		return this.tryGetRuleContext(0, SqlExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_sqlFactor2; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterSqlFactor2) {
			listener.enterSqlFactor2(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitSqlFactor2) {
			listener.exitSqlFactor2(this);
		}
	}
}


export class SqlExpressionListContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(informixParser.LPAREN, 0); }
	public sqlExpression(): SqlExpressionContext[];
	public sqlExpression(i: number): SqlExpressionContext;
	public sqlExpression(i?: number): SqlExpressionContext | SqlExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SqlExpressionContext);
		} else {
			return this.getRuleContext(i, SqlExpressionContext);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(informixParser.RPAREN, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.COMMA);
		} else {
			return this.getToken(informixParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_sqlExpressionList; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterSqlExpressionList) {
			listener.enterSqlExpressionList(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitSqlExpressionList) {
			listener.exitSqlExpressionList(this);
		}
	}
}


export class SqlLiteralContext extends ParserRuleContext {
	public unsignedConstant(): UnsignedConstantContext | undefined {
		return this.tryGetRuleContext(0, UnsignedConstantContext);
	}
	public string(): StringContext | undefined {
		return this.tryGetRuleContext(0, StringContext);
	}
	public NULL(): TerminalNode | undefined { return this.tryGetToken(informixParser.NULL, 0); }
	public FALSE(): TerminalNode | undefined { return this.tryGetToken(informixParser.FALSE, 0); }
	public TRUE(): TerminalNode | undefined { return this.tryGetToken(informixParser.TRUE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_sqlLiteral; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterSqlLiteral) {
			listener.enterSqlLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitSqlLiteral) {
			listener.exitSqlLiteral(this);
		}
	}
}


export class SqlVariableContext extends ParserRuleContext {
	public columnsTableId(): ColumnsTableIdContext[];
	public columnsTableId(i: number): ColumnsTableIdContext;
	public columnsTableId(i?: number): ColumnsTableIdContext | ColumnsTableIdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ColumnsTableIdContext);
		} else {
			return this.getRuleContext(i, ColumnsTableIdContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_sqlVariable; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterSqlVariable) {
			listener.enterSqlVariable(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitSqlVariable) {
			listener.exitSqlVariable(this);
		}
	}
}


export class SqlFunctionContext extends ParserRuleContext {
	public numberFunction(): NumberFunctionContext | undefined {
		return this.tryGetRuleContext(0, NumberFunctionContext);
	}
	public charFunction(): CharFunctionContext | undefined {
		return this.tryGetRuleContext(0, CharFunctionContext);
	}
	public dateFunction(): DateFunctionContext | undefined {
		return this.tryGetRuleContext(0, DateFunctionContext);
	}
	public otherFunction(): OtherFunctionContext | undefined {
		return this.tryGetRuleContext(0, OtherFunctionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_sqlFunction; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterSqlFunction) {
			listener.enterSqlFunction(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitSqlFunction) {
			listener.exitSqlFunction(this);
		}
	}
}


export class DateFunctionContext extends ParserRuleContext {
	public YEAR(): TerminalNode | undefined { return this.tryGetToken(informixParser.YEAR, 0); }
	public DATE(): TerminalNode | undefined { return this.tryGetToken(informixParser.DATE, 0); }
	public DAY(): TerminalNode | undefined { return this.tryGetToken(informixParser.DAY, 0); }
	public MONTH(): TerminalNode | undefined { return this.tryGetToken(informixParser.MONTH, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_dateFunction; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterDateFunction) {
			listener.enterDateFunction(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitDateFunction) {
			listener.exitDateFunction(this);
		}
	}
}


export class NumberFunctionContext extends ParserRuleContext {
	public MOD(): TerminalNode { return this.getToken(informixParser.MOD, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_numberFunction; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterNumberFunction) {
			listener.enterNumberFunction(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitNumberFunction) {
			listener.exitNumberFunction(this);
		}
	}
}


export class CharFunctionContext extends ParserRuleContext {
	public LENGTH(): TerminalNode { return this.getToken(informixParser.LENGTH, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_charFunction; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterCharFunction) {
			listener.enterCharFunction(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitCharFunction) {
			listener.exitCharFunction(this);
		}
	}
}


export class GroupFunctionContext extends ParserRuleContext {
	public AVG(): TerminalNode | undefined { return this.tryGetToken(informixParser.AVG, 0); }
	public COUNT(): TerminalNode | undefined { return this.tryGetToken(informixParser.COUNT, 0); }
	public MAX(): TerminalNode | undefined { return this.tryGetToken(informixParser.MAX, 0); }
	public MIN(): TerminalNode | undefined { return this.tryGetToken(informixParser.MIN, 0); }
	public SUM(): TerminalNode | undefined { return this.tryGetToken(informixParser.SUM, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_groupFunction; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterGroupFunction) {
			listener.enterGroupFunction(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitGroupFunction) {
			listener.exitGroupFunction(this);
		}
	}
}


export class OtherFunctionContext extends ParserRuleContext {
	public DECODE(): TerminalNode | undefined { return this.tryGetToken(informixParser.DECODE, 0); }
	public NVL(): TerminalNode | undefined { return this.tryGetToken(informixParser.NVL, 0); }
	public constantIdentifier(): ConstantIdentifierContext | undefined {
		return this.tryGetRuleContext(0, ConstantIdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_otherFunction; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterOtherFunction) {
			listener.enterOtherFunction(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitOtherFunction) {
			listener.exitOtherFunction(this);
		}
	}
}


export class SqlPseudoColumnContext extends ParserRuleContext {
	public USER(): TerminalNode { return this.getToken(informixParser.USER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_sqlPseudoColumn; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterSqlPseudoColumn) {
			listener.enterSqlPseudoColumn(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitSqlPseudoColumn) {
			listener.exitSqlPseudoColumn(this);
		}
	}
}


export class RelationalOperatorContext extends ParserRuleContext {
	public EQUAL(): TerminalNode | undefined { return this.tryGetToken(informixParser.EQUAL, 0); }
	public NOT_EQUAL(): TerminalNode | undefined { return this.tryGetToken(informixParser.NOT_EQUAL, 0); }
	public LE(): TerminalNode | undefined { return this.tryGetToken(informixParser.LE, 0); }
	public LT(): TerminalNode | undefined { return this.tryGetToken(informixParser.LT, 0); }
	public GE(): TerminalNode | undefined { return this.tryGetToken(informixParser.GE, 0); }
	public GT(): TerminalNode | undefined { return this.tryGetToken(informixParser.GT, 0); }
	public LIKE(): TerminalNode | undefined { return this.tryGetToken(informixParser.LIKE, 0); }
	public MATCHES(): TerminalNode | undefined { return this.tryGetToken(informixParser.MATCHES, 0); }
	public NOT(): TerminalNode | undefined { return this.tryGetToken(informixParser.NOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_relationalOperator; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterRelationalOperator) {
			listener.enterRelationalOperator(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitRelationalOperator) {
			listener.exitRelationalOperator(this);
		}
	}
}


export class IfConditionContext extends ParserRuleContext {
	public TRUE(): TerminalNode | undefined { return this.tryGetToken(informixParser.TRUE, 0); }
	public FALSE(): TerminalNode | undefined { return this.tryGetToken(informixParser.FALSE, 0); }
	public ifCondition2(): IfCondition2Context[];
	public ifCondition2(i: number): IfCondition2Context;
	public ifCondition2(i?: number): IfCondition2Context | IfCondition2Context[] {
		if (i === undefined) {
			return this.getRuleContexts(IfCondition2Context);
		} else {
			return this.getRuleContext(i, IfCondition2Context);
		}
	}
	public relationalOperator(): RelationalOperatorContext[];
	public relationalOperator(i: number): RelationalOperatorContext;
	public relationalOperator(i?: number): RelationalOperatorContext | RelationalOperatorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RelationalOperatorContext);
		} else {
			return this.getRuleContext(i, RelationalOperatorContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_ifCondition; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterIfCondition) {
			listener.enterIfCondition(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitIfCondition) {
			listener.exitIfCondition(this);
		}
	}
}


export class IfCondition2Context extends ParserRuleContext {
	public ifLogicalTerm(): IfLogicalTermContext[];
	public ifLogicalTerm(i: number): IfLogicalTermContext;
	public ifLogicalTerm(i?: number): IfLogicalTermContext | IfLogicalTermContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IfLogicalTermContext);
		} else {
			return this.getRuleContext(i, IfLogicalTermContext);
		}
	}
	public OR(): TerminalNode[];
	public OR(i: number): TerminalNode;
	public OR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.OR);
		} else {
			return this.getToken(informixParser.OR, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_ifCondition2; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterIfCondition2) {
			listener.enterIfCondition2(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitIfCondition2) {
			listener.exitIfCondition2(this);
		}
	}
}


export class IfLogicalTermContext extends ParserRuleContext {
	public ifLogicalFactor(): IfLogicalFactorContext[];
	public ifLogicalFactor(i: number): IfLogicalFactorContext;
	public ifLogicalFactor(i?: number): IfLogicalFactorContext | IfLogicalFactorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IfLogicalFactorContext);
		} else {
			return this.getRuleContext(i, IfLogicalFactorContext);
		}
	}
	public AND(): TerminalNode[];
	public AND(i: number): TerminalNode;
	public AND(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.AND);
		} else {
			return this.getToken(informixParser.AND, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_ifLogicalTerm; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterIfLogicalTerm) {
			listener.enterIfLogicalTerm(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitIfLogicalTerm) {
			listener.exitIfLogicalTerm(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public simpleExpression(): SimpleExpressionContext {
		return this.getRuleContext(0, SimpleExpressionContext);
	}
	public CLIPPED(): TerminalNode[];
	public CLIPPED(i: number): TerminalNode;
	public CLIPPED(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.CLIPPED);
		} else {
			return this.getToken(informixParser.CLIPPED, i);
		}
	}
	public USING(): TerminalNode[];
	public USING(i: number): TerminalNode;
	public USING(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.USING);
		} else {
			return this.getToken(informixParser.USING, i);
		}
	}
	public string(): StringContext[];
	public string(i: number): StringContext;
	public string(i?: number): StringContext | StringContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StringContext);
		} else {
			return this.getRuleContext(i, StringContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_expression; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
}


export class IfLogicalFactorContext extends ParserRuleContext {
	public NOT(): TerminalNode[];
	public NOT(i: number): TerminalNode;
	public NOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.NOT);
		} else {
			return this.getToken(informixParser.NOT, i);
		}
	}
	public ifCondition(): IfConditionContext[];
	public ifCondition(i: number): IfConditionContext;
	public ifCondition(i?: number): IfConditionContext | IfConditionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IfConditionContext);
		} else {
			return this.getRuleContext(i, IfConditionContext);
		}
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(informixParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(informixParser.RPAREN, 0); }
	public simpleExpression(): SimpleExpressionContext[];
	public simpleExpression(i: number): SimpleExpressionContext;
	public simpleExpression(i?: number): SimpleExpressionContext | SimpleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SimpleExpressionContext);
		} else {
			return this.getRuleContext(i, SimpleExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_ifLogicalFactor; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterIfLogicalFactor) {
			listener.enterIfLogicalFactor(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitIfLogicalFactor) {
			listener.exitIfLogicalFactor(this);
		}
	}
}


export class SimpleExpressionContext extends ParserRuleContext {
	public term(): TermContext[];
	public term(i: number): TermContext;
	public term(i?: number): TermContext | TermContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TermContext);
		} else {
			return this.getRuleContext(i, TermContext);
		}
	}
	public sign(): SignContext | undefined {
		return this.tryGetRuleContext(0, SignContext);
	}
	public addingOperator(): AddingOperatorContext[];
	public addingOperator(i: number): AddingOperatorContext;
	public addingOperator(i?: number): AddingOperatorContext | AddingOperatorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AddingOperatorContext);
		} else {
			return this.getRuleContext(i, AddingOperatorContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_simpleExpression; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterSimpleExpression) {
			listener.enterSimpleExpression(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitSimpleExpression) {
			listener.exitSimpleExpression(this);
		}
	}
}


export class AddingOperatorContext extends ParserRuleContext {
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(informixParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(informixParser.MINUS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_addingOperator; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterAddingOperator) {
			listener.enterAddingOperator(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitAddingOperator) {
			listener.exitAddingOperator(this);
		}
	}
}


export class TermContext extends ParserRuleContext {
	public factor(): FactorContext[];
	public factor(i: number): FactorContext;
	public factor(i?: number): FactorContext | FactorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FactorContext);
		} else {
			return this.getRuleContext(i, FactorContext);
		}
	}
	public multiplyingOperator(): MultiplyingOperatorContext[];
	public multiplyingOperator(i: number): MultiplyingOperatorContext;
	public multiplyingOperator(i?: number): MultiplyingOperatorContext | MultiplyingOperatorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MultiplyingOperatorContext);
		} else {
			return this.getRuleContext(i, MultiplyingOperatorContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_term; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterTerm) {
			listener.enterTerm(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitTerm) {
			listener.exitTerm(this);
		}
	}
}


export class MultiplyingOperatorContext extends ParserRuleContext {
	public STAR(): TerminalNode | undefined { return this.tryGetToken(informixParser.STAR, 0); }
	public SLASH(): TerminalNode | undefined { return this.tryGetToken(informixParser.SLASH, 0); }
	public DIV(): TerminalNode | undefined { return this.tryGetToken(informixParser.DIV, 0); }
	public MOD(): TerminalNode | undefined { return this.tryGetToken(informixParser.MOD, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_multiplyingOperator; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterMultiplyingOperator) {
			listener.enterMultiplyingOperator(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitMultiplyingOperator) {
			listener.exitMultiplyingOperator(this);
		}
	}
}


export class FactorContext extends ParserRuleContext {
	public functionDesignator(): FunctionDesignatorContext | undefined {
		return this.tryGetRuleContext(0, FunctionDesignatorContext);
	}
	public variable(): VariableContext | undefined {
		return this.tryGetRuleContext(0, VariableContext);
	}
	public constant(): ConstantContext | undefined {
		return this.tryGetRuleContext(0, ConstantContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(informixParser.LPAREN, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(informixParser.RPAREN, 0); }
	public NOT(): TerminalNode | undefined { return this.tryGetToken(informixParser.NOT, 0); }
	public factor(): FactorContext | undefined {
		return this.tryGetRuleContext(0, FactorContext);
	}
	public UNITS(): TerminalNode | undefined { return this.tryGetToken(informixParser.UNITS, 0); }
	public unitType(): UnitTypeContext | undefined {
		return this.tryGetRuleContext(0, UnitTypeContext);
	}
	public GROUP(): TerminalNode | undefined { return this.tryGetToken(informixParser.GROUP, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_factor; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterFactor) {
			listener.enterFactor(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitFactor) {
			listener.exitFactor(this);
		}
	}
}


export class FunctionDesignatorContext extends ParserRuleContext {
	public functionIdentifier(): FunctionIdentifierContext {
		return this.getRuleContext(0, FunctionIdentifierContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(informixParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(informixParser.RPAREN, 0); }
	public actualParameter(): ActualParameterContext[];
	public actualParameter(i: number): ActualParameterContext;
	public actualParameter(i?: number): ActualParameterContext | ActualParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ActualParameterContext);
		} else {
			return this.getRuleContext(i, ActualParameterContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.COMMA);
		} else {
			return this.getToken(informixParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_functionDesignator; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterFunctionDesignator) {
			listener.enterFunctionDesignator(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitFunctionDesignator) {
			listener.exitFunctionDesignator(this);
		}
	}
}


export class FunctionIdentifierContext extends ParserRuleContext {
	public DAY(): TerminalNode | undefined { return this.tryGetToken(informixParser.DAY, 0); }
	public YEAR(): TerminalNode | undefined { return this.tryGetToken(informixParser.YEAR, 0); }
	public MONTH(): TerminalNode | undefined { return this.tryGetToken(informixParser.MONTH, 0); }
	public TODAY(): TerminalNode | undefined { return this.tryGetToken(informixParser.TODAY, 0); }
	public WEEKDAY(): TerminalNode | undefined { return this.tryGetToken(informixParser.WEEKDAY, 0); }
	public MDY(): TerminalNode | undefined { return this.tryGetToken(informixParser.MDY, 0); }
	public COLUMN(): TerminalNode | undefined { return this.tryGetToken(informixParser.COLUMN, 0); }
	public SUM(): TerminalNode | undefined { return this.tryGetToken(informixParser.SUM, 0); }
	public COUNT(): TerminalNode | undefined { return this.tryGetToken(informixParser.COUNT, 0); }
	public AVG(): TerminalNode | undefined { return this.tryGetToken(informixParser.AVG, 0); }
	public MIN(): TerminalNode | undefined { return this.tryGetToken(informixParser.MIN, 0); }
	public MAX(): TerminalNode | undefined { return this.tryGetToken(informixParser.MAX, 0); }
	public EXTEND(): TerminalNode | undefined { return this.tryGetToken(informixParser.EXTEND, 0); }
	public DATE(): TerminalNode | undefined { return this.tryGetToken(informixParser.DATE, 0); }
	public TIME(): TerminalNode | undefined { return this.tryGetToken(informixParser.TIME, 0); }
	public INFIELD(): TerminalNode | undefined { return this.tryGetToken(informixParser.INFIELD, 0); }
	public PREPARE(): TerminalNode | undefined { return this.tryGetToken(informixParser.PREPARE, 0); }
	public constantIdentifier(): ConstantIdentifierContext | undefined {
		return this.tryGetRuleContext(0, ConstantIdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_functionIdentifier; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterFunctionIdentifier) {
			listener.enterFunctionIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitFunctionIdentifier) {
			listener.exitFunctionIdentifier(this);
		}
	}
}


export class UnsignedConstantContext extends ParserRuleContext {
	public unsignedNumber(): UnsignedNumberContext | undefined {
		return this.tryGetRuleContext(0, UnsignedNumberContext);
	}
	public string(): StringContext | undefined {
		return this.tryGetRuleContext(0, StringContext);
	}
	public constantIdentifier(): ConstantIdentifierContext | undefined {
		return this.tryGetRuleContext(0, ConstantIdentifierContext);
	}
	public NULL(): TerminalNode | undefined { return this.tryGetToken(informixParser.NULL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_unsignedConstant; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterUnsignedConstant) {
			listener.enterUnsignedConstant(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitUnsignedConstant) {
			listener.exitUnsignedConstant(this);
		}
	}
}


export class ConstantContext extends ParserRuleContext {
	public numericConstant(): NumericConstantContext | undefined {
		return this.tryGetRuleContext(0, NumericConstantContext);
	}
	public constantIdentifier(): ConstantIdentifierContext | undefined {
		return this.tryGetRuleContext(0, ConstantIdentifierContext);
	}
	public sign(): SignContext | undefined {
		return this.tryGetRuleContext(0, SignContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public string(): StringContext | undefined {
		return this.tryGetRuleContext(0, StringContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_constant; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterConstant) {
			listener.enterConstant(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitConstant) {
			listener.exitConstant(this);
		}
	}
}


export class NumericConstantContext extends ParserRuleContext {
	public unsignedNumber(): UnsignedNumberContext {
		return this.getRuleContext(0, UnsignedNumberContext);
	}
	public sign(): SignContext | undefined {
		return this.tryGetRuleContext(0, SignContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_numericConstant; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterNumericConstant) {
			listener.enterNumericConstant(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitNumericConstant) {
			listener.exitNumericConstant(this);
		}
	}
}


export class VariableContext extends ParserRuleContext {
	public entireVariable(): EntireVariableContext | undefined {
		return this.tryGetRuleContext(0, EntireVariableContext);
	}
	public componentVariable(): ComponentVariableContext | undefined {
		return this.tryGetRuleContext(0, ComponentVariableContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_variable; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterVariable) {
			listener.enterVariable(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitVariable) {
			listener.exitVariable(this);
		}
	}
}


export class EntireVariableContext extends ParserRuleContext {
	public variableIdentifier(): VariableIdentifierContext {
		return this.getRuleContext(0, VariableIdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_entireVariable; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterEntireVariable) {
			listener.enterEntireVariable(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitEntireVariable) {
			listener.exitEntireVariable(this);
		}
	}
}


export class VariableIdentifierContext extends ParserRuleContext {
	public constantIdentifier(): ConstantIdentifierContext {
		return this.getRuleContext(0, ConstantIdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_variableIdentifier; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterVariableIdentifier) {
			listener.enterVariableIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitVariableIdentifier) {
			listener.exitVariableIdentifier(this);
		}
	}
}


export class IndexingVariableContext extends ParserRuleContext {
	public LBRACK(): TerminalNode { return this.getToken(informixParser.LBRACK, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public RBRACK(): TerminalNode { return this.getToken(informixParser.RBRACK, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.COMMA);
		} else {
			return this.getToken(informixParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_indexingVariable; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterIndexingVariable) {
			listener.enterIndexingVariable(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitIndexingVariable) {
			listener.exitIndexingVariable(this);
		}
	}
}


export class ComponentVariableContext extends ParserRuleContext {
	public recordVariable(): RecordVariableContext | undefined {
		return this.tryGetRuleContext(0, RecordVariableContext);
	}
	public indexingVariable(): IndexingVariableContext | undefined {
		return this.tryGetRuleContext(0, IndexingVariableContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(informixParser.DOT, 0); }
	public STAR(): TerminalNode | undefined { return this.tryGetToken(informixParser.STAR, 0); }
	public componentVariable(): ComponentVariableContext[];
	public componentVariable(i: number): ComponentVariableContext;
	public componentVariable(i?: number): ComponentVariableContext | ComponentVariableContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ComponentVariableContext);
		} else {
			return this.getRuleContext(i, ComponentVariableContext);
		}
	}
	public THROUGH(): TerminalNode | undefined { return this.tryGetToken(informixParser.THROUGH, 0); }
	public THRU(): TerminalNode | undefined { return this.tryGetToken(informixParser.THRU, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_componentVariable; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterComponentVariable) {
			listener.enterComponentVariable(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitComponentVariable) {
			listener.exitComponentVariable(this);
		}
	}
}


export class RecordVariableContext extends ParserRuleContext {
	public constantIdentifier(): ConstantIdentifierContext {
		return this.getRuleContext(0, ConstantIdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_recordVariable; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterRecordVariable) {
			listener.enterRecordVariable(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitRecordVariable) {
			listener.exitRecordVariable(this);
		}
	}
}


export class FieldIdentifierContext extends ParserRuleContext {
	public constantIdentifier(): ConstantIdentifierContext {
		return this.getRuleContext(0, ConstantIdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_fieldIdentifier; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterFieldIdentifier) {
			listener.enterFieldIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitFieldIdentifier) {
			listener.exitFieldIdentifier(this);
		}
	}
}


export class StructuredStatementContext extends ParserRuleContext {
	public conditionalStatement(): ConditionalStatementContext | undefined {
		return this.tryGetRuleContext(0, ConditionalStatementContext);
	}
	public repetetiveStatement(): RepetetiveStatementContext | undefined {
		return this.tryGetRuleContext(0, RepetetiveStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_structuredStatement; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterStructuredStatement) {
			listener.enterStructuredStatement(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitStructuredStatement) {
			listener.exitStructuredStatement(this);
		}
	}
}


export class ConditionalStatementContext extends ParserRuleContext {
	public ifStatement(): IfStatementContext | undefined {
		return this.tryGetRuleContext(0, IfStatementContext);
	}
	public caseStatement(): CaseStatementContext | undefined {
		return this.tryGetRuleContext(0, CaseStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_conditionalStatement; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterConditionalStatement) {
			listener.enterConditionalStatement(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitConditionalStatement) {
			listener.exitConditionalStatement(this);
		}
	}
}


export class IfStatementContext extends ParserRuleContext {
	public IF(): TerminalNode[];
	public IF(i: number): TerminalNode;
	public IF(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.IF);
		} else {
			return this.getToken(informixParser.IF, i);
		}
	}
	public ifCondition(): IfConditionContext {
		return this.getRuleContext(0, IfConditionContext);
	}
	public THEN(): TerminalNode { return this.getToken(informixParser.THEN, 0); }
	public END(): TerminalNode { return this.getToken(informixParser.END, 0); }
	public codeBlock(): CodeBlockContext[];
	public codeBlock(i: number): CodeBlockContext;
	public codeBlock(i?: number): CodeBlockContext | CodeBlockContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CodeBlockContext);
		} else {
			return this.getRuleContext(i, CodeBlockContext);
		}
	}
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(informixParser.ELSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_ifStatement; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterIfStatement) {
			listener.enterIfStatement(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitIfStatement) {
			listener.exitIfStatement(this);
		}
	}
}


export class RepetetiveStatementContext extends ParserRuleContext {
	public whileStatement(): WhileStatementContext | undefined {
		return this.tryGetRuleContext(0, WhileStatementContext);
	}
	public forEachStatement(): ForEachStatementContext | undefined {
		return this.tryGetRuleContext(0, ForEachStatementContext);
	}
	public forStatement(): ForStatementContext | undefined {
		return this.tryGetRuleContext(0, ForStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_repetetiveStatement; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterRepetetiveStatement) {
			listener.enterRepetetiveStatement(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitRepetetiveStatement) {
			listener.exitRepetetiveStatement(this);
		}
	}
}


export class WhileStatementContext extends ParserRuleContext {
	public WHILE(): TerminalNode[];
	public WHILE(i: number): TerminalNode;
	public WHILE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.WHILE);
		} else {
			return this.getToken(informixParser.WHILE, i);
		}
	}
	public ifCondition(): IfConditionContext {
		return this.getRuleContext(0, IfConditionContext);
	}
	public END(): TerminalNode { return this.getToken(informixParser.END, 0); }
	public codeBlock(): CodeBlockContext | undefined {
		return this.tryGetRuleContext(0, CodeBlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_whileStatement; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterWhileStatement) {
			listener.enterWhileStatement(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitWhileStatement) {
			listener.exitWhileStatement(this);
		}
	}
}


export class ForStatementContext extends ParserRuleContext {
	public FOR(): TerminalNode[];
	public FOR(i: number): TerminalNode;
	public FOR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.FOR);
		} else {
			return this.getToken(informixParser.FOR, i);
		}
	}
	public controlVariable(): ControlVariableContext {
		return this.getRuleContext(0, ControlVariableContext);
	}
	public EQUAL(): TerminalNode { return this.getToken(informixParser.EQUAL, 0); }
	public forList(): ForListContext {
		return this.getRuleContext(0, ForListContext);
	}
	public eol(): EolContext[];
	public eol(i: number): EolContext;
	public eol(i?: number): EolContext | EolContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EolContext);
		} else {
			return this.getRuleContext(i, EolContext);
		}
	}
	public END(): TerminalNode { return this.getToken(informixParser.END, 0); }
	public STEP(): TerminalNode | undefined { return this.tryGetToken(informixParser.STEP, 0); }
	public numericConstant(): NumericConstantContext | undefined {
		return this.tryGetRuleContext(0, NumericConstantContext);
	}
	public codeBlock(): CodeBlockContext | undefined {
		return this.tryGetRuleContext(0, CodeBlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_forStatement; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterForStatement) {
			listener.enterForStatement(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitForStatement) {
			listener.exitForStatement(this);
		}
	}
}


export class ForListContext extends ParserRuleContext {
	public initialValue(): InitialValueContext {
		return this.getRuleContext(0, InitialValueContext);
	}
	public TO(): TerminalNode { return this.getToken(informixParser.TO, 0); }
	public finalValue(): FinalValueContext {
		return this.getRuleContext(0, FinalValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_forList; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterForList) {
			listener.enterForList(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitForList) {
			listener.exitForList(this);
		}
	}
}


export class ControlVariableContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_controlVariable; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterControlVariable) {
			listener.enterControlVariable(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitControlVariable) {
			listener.exitControlVariable(this);
		}
	}
}


export class InitialValueContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_initialValue; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterInitialValue) {
			listener.enterInitialValue(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitInitialValue) {
			listener.exitInitialValue(this);
		}
	}
}


export class FinalValueContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_finalValue; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterFinalValue) {
			listener.enterFinalValue(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitFinalValue) {
			listener.exitFinalValue(this);
		}
	}
}


export class ForEachStatementContext extends ParserRuleContext {
	public FOREACH(): TerminalNode[];
	public FOREACH(i: number): TerminalNode;
	public FOREACH(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.FOREACH);
		} else {
			return this.getToken(informixParser.FOREACH, i);
		}
	}
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public eol(): EolContext[];
	public eol(i: number): EolContext;
	public eol(i?: number): EolContext | EolContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EolContext);
		} else {
			return this.getRuleContext(i, EolContext);
		}
	}
	public END(): TerminalNode { return this.getToken(informixParser.END, 0); }
	public USING(): TerminalNode | undefined { return this.tryGetToken(informixParser.USING, 0); }
	public variableList(): VariableListContext[];
	public variableList(i: number): VariableListContext;
	public variableList(i?: number): VariableListContext | VariableListContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableListContext);
		} else {
			return this.getRuleContext(i, VariableListContext);
		}
	}
	public INTO(): TerminalNode | undefined { return this.tryGetToken(informixParser.INTO, 0); }
	public WITH(): TerminalNode | undefined { return this.tryGetToken(informixParser.WITH, 0); }
	public REOPTIMIZATION(): TerminalNode | undefined { return this.tryGetToken(informixParser.REOPTIMIZATION, 0); }
	public codeBlock(): CodeBlockContext | undefined {
		return this.tryGetRuleContext(0, CodeBlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_forEachStatement; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterForEachStatement) {
			listener.enterForEachStatement(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitForEachStatement) {
			listener.exitForEachStatement(this);
		}
	}
}


export class VariableListContext extends ParserRuleContext {
	public variable(): VariableContext[];
	public variable(i: number): VariableContext;
	public variable(i?: number): VariableContext | VariableContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableContext);
		} else {
			return this.getRuleContext(i, VariableContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.COMMA);
		} else {
			return this.getToken(informixParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_variableList; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterVariableList) {
			listener.enterVariableList(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitVariableList) {
			listener.exitVariableList(this);
		}
	}
}


export class VariableOrConstantListContext extends ParserRuleContext {
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
			return this.getTokens(informixParser.COMMA);
		} else {
			return this.getToken(informixParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_variableOrConstantList; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterVariableOrConstantList) {
			listener.enterVariableOrConstantList(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitVariableOrConstantList) {
			listener.exitVariableOrConstantList(this);
		}
	}
}


export class CaseStatementContext extends ParserRuleContext {
	public CASE(): TerminalNode[];
	public CASE(i: number): TerminalNode;
	public CASE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.CASE);
		} else {
			return this.getToken(informixParser.CASE, i);
		}
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public END(): TerminalNode { return this.getToken(informixParser.END, 0); }
	public WHEN(): TerminalNode[];
	public WHEN(i: number): TerminalNode;
	public WHEN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.WHEN);
		} else {
			return this.getToken(informixParser.WHEN, i);
		}
	}
	public OTHERWISE(): TerminalNode | undefined { return this.tryGetToken(informixParser.OTHERWISE, 0); }
	public codeBlock(): CodeBlockContext[];
	public codeBlock(i: number): CodeBlockContext;
	public codeBlock(i?: number): CodeBlockContext | CodeBlockContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CodeBlockContext);
		} else {
			return this.getRuleContext(i, CodeBlockContext);
		}
	}
	public ifCondition(): IfConditionContext[];
	public ifCondition(i: number): IfConditionContext;
	public ifCondition(i?: number): IfConditionContext | IfConditionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IfConditionContext);
		} else {
			return this.getRuleContext(i, IfConditionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_caseStatement; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterCaseStatement) {
			listener.enterCaseStatement(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitCaseStatement) {
			listener.exitCaseStatement(this);
		}
	}
}


export class OtherFGLStatementContext extends ParserRuleContext {
	public otherProgramFlowStatement(): OtherProgramFlowStatementContext | undefined {
		return this.tryGetRuleContext(0, OtherProgramFlowStatementContext);
	}
	public otherStorageStatement(): OtherStorageStatementContext | undefined {
		return this.tryGetRuleContext(0, OtherStorageStatementContext);
	}
	public reportStatement(): ReportStatementContext | undefined {
		return this.tryGetRuleContext(0, ReportStatementContext);
	}
	public screenStatement(): ScreenStatementContext | undefined {
		return this.tryGetRuleContext(0, ScreenStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_otherFGLStatement; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterOtherFGLStatement) {
			listener.enterOtherFGLStatement(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitOtherFGLStatement) {
			listener.exitOtherFGLStatement(this);
		}
	}
}


export class OtherProgramFlowStatementContext extends ParserRuleContext {
	public runStatement(): RunStatementContext | undefined {
		return this.tryGetRuleContext(0, RunStatementContext);
	}
	public gotoStatement(): GotoStatementContext | undefined {
		return this.tryGetRuleContext(0, GotoStatementContext);
	}
	public SLEEP(): TerminalNode | undefined { return this.tryGetToken(informixParser.SLEEP, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public exitStatements(): ExitStatementsContext | undefined {
		return this.tryGetRuleContext(0, ExitStatementsContext);
	}
	public continueStatements(): ContinueStatementsContext | undefined {
		return this.tryGetRuleContext(0, ContinueStatementsContext);
	}
	public returnStatement(): ReturnStatementContext | undefined {
		return this.tryGetRuleContext(0, ReturnStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_otherProgramFlowStatement; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterOtherProgramFlowStatement) {
			listener.enterOtherProgramFlowStatement(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitOtherProgramFlowStatement) {
			listener.exitOtherProgramFlowStatement(this);
		}
	}
}


export class ExitTypesContext extends ParserRuleContext {
	public FOREACH(): TerminalNode | undefined { return this.tryGetToken(informixParser.FOREACH, 0); }
	public FOR(): TerminalNode | undefined { return this.tryGetToken(informixParser.FOR, 0); }
	public CASE(): TerminalNode | undefined { return this.tryGetToken(informixParser.CASE, 0); }
	public CONSTRUCT(): TerminalNode | undefined { return this.tryGetToken(informixParser.CONSTRUCT, 0); }
	public DISPLAY(): TerminalNode | undefined { return this.tryGetToken(informixParser.DISPLAY, 0); }
	public INPUT(): TerminalNode | undefined { return this.tryGetToken(informixParser.INPUT, 0); }
	public MENU(): TerminalNode | undefined { return this.tryGetToken(informixParser.MENU, 0); }
	public REPORT(): TerminalNode | undefined { return this.tryGetToken(informixParser.REPORT, 0); }
	public WHILE(): TerminalNode | undefined { return this.tryGetToken(informixParser.WHILE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_exitTypes; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterExitTypes) {
			listener.enterExitTypes(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitExitTypes) {
			listener.exitExitTypes(this);
		}
	}
}


export class ExitStatementsContext extends ParserRuleContext {
	public EXIT(): TerminalNode { return this.getToken(informixParser.EXIT, 0); }
	public exitTypes(): ExitTypesContext | undefined {
		return this.tryGetRuleContext(0, ExitTypesContext);
	}
	public PROGRAM(): TerminalNode | undefined { return this.tryGetToken(informixParser.PROGRAM, 0); }
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(informixParser.LPAREN, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(informixParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_exitStatements; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterExitStatements) {
			listener.enterExitStatements(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitExitStatements) {
			listener.exitExitStatements(this);
		}
	}
}


export class ContinueStatementsContext extends ParserRuleContext {
	public CONTINUE(): TerminalNode { return this.getToken(informixParser.CONTINUE, 0); }
	public exitTypes(): ExitTypesContext {
		return this.getRuleContext(0, ExitTypesContext);
	}
	public eol(): EolContext {
		return this.getRuleContext(0, EolContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_continueStatements; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterContinueStatements) {
			listener.enterContinueStatements(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitContinueStatements) {
			listener.exitContinueStatements(this);
		}
	}
}


export class OtherStorageStatementContext extends ParserRuleContext {
	public ALLOCATE(): TerminalNode | undefined { return this.tryGetToken(informixParser.ALLOCATE, 0); }
	public ARRAY(): TerminalNode | undefined { return this.tryGetToken(informixParser.ARRAY, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public arrayIndexer(): ArrayIndexerContext | undefined {
		return this.tryGetRuleContext(0, ArrayIndexerContext);
	}
	public LOCATE(): TerminalNode | undefined { return this.tryGetToken(informixParser.LOCATE, 0); }
	public variableList(): VariableListContext | undefined {
		return this.tryGetRuleContext(0, VariableListContext);
	}
	public IN(): TerminalNode | undefined { return this.tryGetToken(informixParser.IN, 0); }
	public MEMORY(): TerminalNode | undefined { return this.tryGetToken(informixParser.MEMORY, 0); }
	public FILE(): TerminalNode | undefined { return this.tryGetToken(informixParser.FILE, 0); }
	public variable(): VariableContext[];
	public variable(i: number): VariableContext;
	public variable(i?: number): VariableContext | VariableContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableContext);
		} else {
			return this.getRuleContext(i, VariableContext);
		}
	}
	public string(): StringContext | undefined {
		return this.tryGetRuleContext(0, StringContext);
	}
	public DEALLOCATE(): TerminalNode | undefined { return this.tryGetToken(informixParser.DEALLOCATE, 0); }
	public RESIZE(): TerminalNode | undefined { return this.tryGetToken(informixParser.RESIZE, 0); }
	public FREE(): TerminalNode | undefined { return this.tryGetToken(informixParser.FREE, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.COMMA);
		} else {
			return this.getToken(informixParser.COMMA, i);
		}
	}
	public INITIALIZE(): TerminalNode | undefined { return this.tryGetToken(informixParser.INITIALIZE, 0); }
	public TO(): TerminalNode | undefined { return this.tryGetToken(informixParser.TO, 0); }
	public NULL(): TerminalNode | undefined { return this.tryGetToken(informixParser.NULL, 0); }
	public LIKE(): TerminalNode | undefined { return this.tryGetToken(informixParser.LIKE, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public VALIDATE(): TerminalNode | undefined { return this.tryGetToken(informixParser.VALIDATE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_otherStorageStatement; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterOtherStorageStatement) {
			listener.enterOtherStorageStatement(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitOtherStorageStatement) {
			listener.exitOtherStorageStatement(this);
		}
	}
}


export class PrintExpressionItemContext extends ParserRuleContext {
	public COLUMN(): TerminalNode | undefined { return this.tryGetToken(informixParser.COLUMN, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public PAGENO(): TerminalNode | undefined { return this.tryGetToken(informixParser.PAGENO, 0); }
	public LINENO(): TerminalNode | undefined { return this.tryGetToken(informixParser.LINENO, 0); }
	public BYTE(): TerminalNode | undefined { return this.tryGetToken(informixParser.BYTE, 0); }
	public variable(): VariableContext | undefined {
		return this.tryGetRuleContext(0, VariableContext);
	}
	public TEXT(): TerminalNode | undefined { return this.tryGetToken(informixParser.TEXT, 0); }
	public WORDWRAP(): TerminalNode | undefined { return this.tryGetToken(informixParser.WORDWRAP, 0); }
	public SPACE(): TerminalNode | undefined { return this.tryGetToken(informixParser.SPACE, 0); }
	public SPACES(): TerminalNode | undefined { return this.tryGetToken(informixParser.SPACES, 0); }
	public RIGHT(): TerminalNode | undefined { return this.tryGetToken(informixParser.RIGHT, 0); }
	public MARGIN(): TerminalNode | undefined { return this.tryGetToken(informixParser.MARGIN, 0); }
	public numericConstant(): NumericConstantContext | undefined {
		return this.tryGetRuleContext(0, NumericConstantContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_printExpressionItem; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterPrintExpressionItem) {
			listener.enterPrintExpressionItem(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitPrintExpressionItem) {
			listener.exitPrintExpressionItem(this);
		}
	}
}


export class PrintExpressionListContext extends ParserRuleContext {
	public printExpressionItem(): PrintExpressionItemContext[];
	public printExpressionItem(i: number): PrintExpressionItemContext;
	public printExpressionItem(i?: number): PrintExpressionItemContext | PrintExpressionItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PrintExpressionItemContext);
		} else {
			return this.getRuleContext(i, PrintExpressionItemContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.COMMA);
		} else {
			return this.getToken(informixParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_printExpressionList; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterPrintExpressionList) {
			listener.enterPrintExpressionList(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitPrintExpressionList) {
			listener.exitPrintExpressionList(this);
		}
	}
}


export class ReportStatementContext extends ParserRuleContext {
	public START(): TerminalNode | undefined { return this.tryGetToken(informixParser.START, 0); }
	public REPORT(): TerminalNode | undefined { return this.tryGetToken(informixParser.REPORT, 0); }
	public constantIdentifier(): ConstantIdentifierContext | undefined {
		return this.tryGetRuleContext(0, ConstantIdentifierContext);
	}
	public TO(): TerminalNode | undefined { return this.tryGetToken(informixParser.TO, 0); }
	public WITH(): TerminalNode | undefined { return this.tryGetToken(informixParser.WITH, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public PIPE(): TerminalNode | undefined { return this.tryGetToken(informixParser.PIPE, 0); }
	public PRINTER(): TerminalNode | undefined { return this.tryGetToken(informixParser.PRINTER, 0); }
	public LEFT(): TerminalNode[];
	public LEFT(i: number): TerminalNode;
	public LEFT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.LEFT);
		} else {
			return this.getToken(informixParser.LEFT, i);
		}
	}
	public MARGIN(): TerminalNode[];
	public MARGIN(i: number): TerminalNode;
	public MARGIN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.MARGIN);
		} else {
			return this.getToken(informixParser.MARGIN, i);
		}
	}
	public numericConstant(): NumericConstantContext[];
	public numericConstant(i: number): NumericConstantContext;
	public numericConstant(i?: number): NumericConstantContext | NumericConstantContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NumericConstantContext);
		} else {
			return this.getRuleContext(i, NumericConstantContext);
		}
	}
	public RIGHT(): TerminalNode[];
	public RIGHT(i: number): TerminalNode;
	public RIGHT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.RIGHT);
		} else {
			return this.getToken(informixParser.RIGHT, i);
		}
	}
	public TOP(): TerminalNode[];
	public TOP(i: number): TerminalNode;
	public TOP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.TOP);
		} else {
			return this.getToken(informixParser.TOP, i);
		}
	}
	public BOTTOM(): TerminalNode[];
	public BOTTOM(i: number): TerminalNode;
	public BOTTOM(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.BOTTOM);
		} else {
			return this.getToken(informixParser.BOTTOM, i);
		}
	}
	public PAGE(): TerminalNode[];
	public PAGE(i: number): TerminalNode;
	public PAGE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.PAGE);
		} else {
			return this.getToken(informixParser.PAGE, i);
		}
	}
	public LENGTH(): TerminalNode[];
	public LENGTH(i: number): TerminalNode;
	public LENGTH(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.LENGTH);
		} else {
			return this.getToken(informixParser.LENGTH, i);
		}
	}
	public OF(): TerminalNode[];
	public OF(i: number): TerminalNode;
	public OF(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.OF);
		} else {
			return this.getToken(informixParser.OF, i);
		}
	}
	public string(): StringContext[];
	public string(i: number): StringContext;
	public string(i?: number): StringContext | StringContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StringContext);
		} else {
			return this.getRuleContext(i, StringContext);
		}
	}
	public TERMINATE(): TerminalNode | undefined { return this.tryGetToken(informixParser.TERMINATE, 0); }
	public FINISH(): TerminalNode | undefined { return this.tryGetToken(informixParser.FINISH, 0); }
	public PAUSE(): TerminalNode | undefined { return this.tryGetToken(informixParser.PAUSE, 0); }
	public NEED(): TerminalNode | undefined { return this.tryGetToken(informixParser.NEED, 0); }
	public LINES(): TerminalNode | undefined { return this.tryGetToken(informixParser.LINES, 0); }
	public PRINT(): TerminalNode | undefined { return this.tryGetToken(informixParser.PRINT, 0); }
	public FILE(): TerminalNode | undefined { return this.tryGetToken(informixParser.FILE, 0); }
	public printExpressionList(): PrintExpressionListContext | undefined {
		return this.tryGetRuleContext(0, PrintExpressionListContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(informixParser.SEMI, 0); }
	public SKIP2(): TerminalNode | undefined { return this.tryGetToken(informixParser.SKIP2, 0); }
	public LINE(): TerminalNode | undefined { return this.tryGetToken(informixParser.LINE, 0); }
	public OUTPUT(): TerminalNode | undefined { return this.tryGetToken(informixParser.OUTPUT, 0); }
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(informixParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(informixParser.RPAREN, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.COMMA);
		} else {
			return this.getToken(informixParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_reportStatement; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterReportStatement) {
			listener.enterReportStatement(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitReportStatement) {
			listener.exitReportStatement(this);
		}
	}
}


export class FieldNameContext extends ParserRuleContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(informixParser.DOT, 0); }
	public LBRACK(): TerminalNode | undefined { return this.tryGetToken(informixParser.LBRACK, 0); }
	public numericConstant(): NumericConstantContext | undefined {
		return this.tryGetRuleContext(0, NumericConstantContext);
	}
	public RBRACK(): TerminalNode | undefined { return this.tryGetToken(informixParser.RBRACK, 0); }
	public STAR(): TerminalNode | undefined { return this.tryGetToken(informixParser.STAR, 0); }
	public thruNotation(): ThruNotationContext | undefined {
		return this.tryGetRuleContext(0, ThruNotationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_fieldName; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterFieldName) {
			listener.enterFieldName(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitFieldName) {
			listener.exitFieldName(this);
		}
	}
}


export class ThruNotationContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public THROUGH(): TerminalNode | undefined { return this.tryGetToken(informixParser.THROUGH, 0); }
	public THRU(): TerminalNode | undefined { return this.tryGetToken(informixParser.THRU, 0); }
	public SAME(): TerminalNode | undefined { return this.tryGetToken(informixParser.SAME, 0); }
	public DOT(): TerminalNode | undefined { return this.tryGetToken(informixParser.DOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_thruNotation; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterThruNotation) {
			listener.enterThruNotation(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitThruNotation) {
			listener.exitThruNotation(this);
		}
	}
}


export class FieldListContext extends ParserRuleContext {
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
			return this.getTokens(informixParser.COMMA);
		} else {
			return this.getToken(informixParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_fieldList; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterFieldList) {
			listener.enterFieldList(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitFieldList) {
			listener.exitFieldList(this);
		}
	}
}


export class KeyListContext extends ParserRuleContext {
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
			return this.getTokens(informixParser.COMMA);
		} else {
			return this.getToken(informixParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_keyList; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterKeyList) {
			listener.enterKeyList(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitKeyList) {
			listener.exitKeyList(this);
		}
	}
}


export class ConstructEventsContext extends ParserRuleContext {
	public BEFORE(): TerminalNode | undefined { return this.tryGetToken(informixParser.BEFORE, 0); }
	public CONSTRUCT(): TerminalNode | undefined { return this.tryGetToken(informixParser.CONSTRUCT, 0); }
	public AFTER(): TerminalNode | undefined { return this.tryGetToken(informixParser.AFTER, 0); }
	public FIELD(): TerminalNode | undefined { return this.tryGetToken(informixParser.FIELD, 0); }
	public fieldList(): FieldListContext | undefined {
		return this.tryGetRuleContext(0, FieldListContext);
	}
	public ON(): TerminalNode | undefined { return this.tryGetToken(informixParser.ON, 0); }
	public KEY(): TerminalNode | undefined { return this.tryGetToken(informixParser.KEY, 0); }
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(informixParser.LPAREN, 0); }
	public keyList(): KeyListContext | undefined {
		return this.tryGetRuleContext(0, KeyListContext);
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(informixParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_constructEvents; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterConstructEvents) {
			listener.enterConstructEvents(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitConstructEvents) {
			listener.exitConstructEvents(this);
		}
	}
}


export class ConstructInsideStatementContext extends ParserRuleContext {
	public NEXT(): TerminalNode[];
	public NEXT(i: number): TerminalNode;
	public NEXT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.NEXT);
		} else {
			return this.getToken(informixParser.NEXT, i);
		}
	}
	public FIELD(): TerminalNode | undefined { return this.tryGetToken(informixParser.FIELD, 0); }
	public eol(): EolContext {
		return this.getRuleContext(0, EolContext);
	}
	public fieldName(): FieldNameContext | undefined {
		return this.tryGetRuleContext(0, FieldNameContext);
	}
	public PREVIOUS(): TerminalNode | undefined { return this.tryGetToken(informixParser.PREVIOUS, 0); }
	public CONTINUE(): TerminalNode | undefined { return this.tryGetToken(informixParser.CONTINUE, 0); }
	public CONSTRUCT(): TerminalNode | undefined { return this.tryGetToken(informixParser.CONSTRUCT, 0); }
	public EXIT(): TerminalNode | undefined { return this.tryGetToken(informixParser.EXIT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_constructInsideStatement; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterConstructInsideStatement) {
			listener.enterConstructInsideStatement(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitConstructInsideStatement) {
			listener.exitConstructInsideStatement(this);
		}
	}
}


export class SpecialAttributeContext extends ParserRuleContext {
	public REVERSE(): TerminalNode | undefined { return this.tryGetToken(informixParser.REVERSE, 0); }
	public BLINK(): TerminalNode | undefined { return this.tryGetToken(informixParser.BLINK, 0); }
	public UNDERLINE(): TerminalNode | undefined { return this.tryGetToken(informixParser.UNDERLINE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_specialAttribute; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterSpecialAttribute) {
			listener.enterSpecialAttribute(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitSpecialAttribute) {
			listener.exitSpecialAttribute(this);
		}
	}
}


export class AttributeContext extends ParserRuleContext {
	public specialAttribute(): SpecialAttributeContext[];
	public specialAttribute(i: number): SpecialAttributeContext;
	public specialAttribute(i?: number): SpecialAttributeContext | SpecialAttributeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SpecialAttributeContext);
		} else {
			return this.getRuleContext(i, SpecialAttributeContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.COMMA);
		} else {
			return this.getToken(informixParser.COMMA, i);
		}
	}
	public BLACK(): TerminalNode | undefined { return this.tryGetToken(informixParser.BLACK, 0); }
	public BLUE(): TerminalNode | undefined { return this.tryGetToken(informixParser.BLUE, 0); }
	public CYAN(): TerminalNode | undefined { return this.tryGetToken(informixParser.CYAN, 0); }
	public GREEN(): TerminalNode | undefined { return this.tryGetToken(informixParser.GREEN, 0); }
	public MAGENTA(): TerminalNode | undefined { return this.tryGetToken(informixParser.MAGENTA, 0); }
	public RED(): TerminalNode | undefined { return this.tryGetToken(informixParser.RED, 0); }
	public WHITE(): TerminalNode | undefined { return this.tryGetToken(informixParser.WHITE, 0); }
	public YELLOW(): TerminalNode | undefined { return this.tryGetToken(informixParser.YELLOW, 0); }
	public BOLD(): TerminalNode | undefined { return this.tryGetToken(informixParser.BOLD, 0); }
	public DIM(): TerminalNode | undefined { return this.tryGetToken(informixParser.DIM, 0); }
	public NORMAL(): TerminalNode | undefined { return this.tryGetToken(informixParser.NORMAL, 0); }
	public INVISIBLE(): TerminalNode | undefined { return this.tryGetToken(informixParser.INVISIBLE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_attribute; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterAttribute) {
			listener.enterAttribute(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitAttribute) {
			listener.exitAttribute(this);
		}
	}
}


export class AttributeListContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(informixParser.LPAREN, 0); }
	public attribute(): AttributeContext {
		return this.getRuleContext(0, AttributeContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(informixParser.RPAREN, 0); }
	public ATTRIBUTE(): TerminalNode | undefined { return this.tryGetToken(informixParser.ATTRIBUTE, 0); }
	public ATTRIBUTES(): TerminalNode | undefined { return this.tryGetToken(informixParser.ATTRIBUTES, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_attributeList; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterAttributeList) {
			listener.enterAttributeList(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitAttributeList) {
			listener.exitAttributeList(this);
		}
	}
}


export class ConstructGroupStatementContext extends ParserRuleContext {
	public constructEvents(): ConstructEventsContext {
		return this.getRuleContext(0, ConstructEventsContext);
	}
	public codeBlock(): CodeBlockContext[];
	public codeBlock(i: number): CodeBlockContext;
	public codeBlock(i?: number): CodeBlockContext | CodeBlockContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CodeBlockContext);
		} else {
			return this.getRuleContext(i, CodeBlockContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_constructGroupStatement; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterConstructGroupStatement) {
			listener.enterConstructGroupStatement(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitConstructGroupStatement) {
			listener.exitConstructGroupStatement(this);
		}
	}
}


export class ConstructStatementContext extends ParserRuleContext {
	public CONSTRUCT(): TerminalNode[];
	public CONSTRUCT(i: number): TerminalNode;
	public CONSTRUCT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.CONSTRUCT);
		} else {
			return this.getToken(informixParser.CONSTRUCT, i);
		}
	}
	public BY(): TerminalNode | undefined { return this.tryGetToken(informixParser.BY, 0); }
	public NAME(): TerminalNode | undefined { return this.tryGetToken(informixParser.NAME, 0); }
	public variable(): VariableContext | undefined {
		return this.tryGetRuleContext(0, VariableContext);
	}
	public ON(): TerminalNode | undefined { return this.tryGetToken(informixParser.ON, 0); }
	public columnsList(): ColumnsListContext | undefined {
		return this.tryGetRuleContext(0, ColumnsListContext);
	}
	public FROM(): TerminalNode | undefined { return this.tryGetToken(informixParser.FROM, 0); }
	public fieldList(): FieldListContext | undefined {
		return this.tryGetRuleContext(0, FieldListContext);
	}
	public attributeList(): AttributeListContext | undefined {
		return this.tryGetRuleContext(0, AttributeListContext);
	}
	public HELP(): TerminalNode | undefined { return this.tryGetToken(informixParser.HELP, 0); }
	public numericConstant(): NumericConstantContext | undefined {
		return this.tryGetRuleContext(0, NumericConstantContext);
	}
	public END(): TerminalNode | undefined { return this.tryGetToken(informixParser.END, 0); }
	public constructGroupStatement(): ConstructGroupStatementContext[];
	public constructGroupStatement(i: number): ConstructGroupStatementContext;
	public constructGroupStatement(i?: number): ConstructGroupStatementContext | ConstructGroupStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConstructGroupStatementContext);
		} else {
			return this.getRuleContext(i, ConstructGroupStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_constructStatement; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterConstructStatement) {
			listener.enterConstructStatement(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitConstructStatement) {
			listener.exitConstructStatement(this);
		}
	}
}


export class DisplayArrayStatementContext extends ParserRuleContext {
	public DISPLAY(): TerminalNode[];
	public DISPLAY(i: number): TerminalNode;
	public DISPLAY(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.DISPLAY);
		} else {
			return this.getToken(informixParser.DISPLAY, i);
		}
	}
	public ARRAY(): TerminalNode { return this.getToken(informixParser.ARRAY, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public TO(): TerminalNode { return this.getToken(informixParser.TO, 0); }
	public attributeList(): AttributeListContext | undefined {
		return this.tryGetRuleContext(0, AttributeListContext);
	}
	public displayEvents(): DisplayEventsContext[];
	public displayEvents(i: number): DisplayEventsContext;
	public displayEvents(i?: number): DisplayEventsContext | DisplayEventsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DisplayEventsContext);
		} else {
			return this.getRuleContext(i, DisplayEventsContext);
		}
	}
	public END(): TerminalNode | undefined { return this.tryGetToken(informixParser.END, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_displayArrayStatement; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterDisplayArrayStatement) {
			listener.enterDisplayArrayStatement(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitDisplayArrayStatement) {
			listener.exitDisplayArrayStatement(this);
		}
	}
}


export class DisplayInsideStatementContext extends ParserRuleContext {
	public CONTINUE(): TerminalNode | undefined { return this.tryGetToken(informixParser.CONTINUE, 0); }
	public DISPLAY(): TerminalNode { return this.getToken(informixParser.DISPLAY, 0); }
	public EXIT(): TerminalNode | undefined { return this.tryGetToken(informixParser.EXIT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_displayInsideStatement; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterDisplayInsideStatement) {
			listener.enterDisplayInsideStatement(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitDisplayInsideStatement) {
			listener.exitDisplayInsideStatement(this);
		}
	}
}


export class DisplayEventsContext extends ParserRuleContext {
	public ON(): TerminalNode { return this.getToken(informixParser.ON, 0); }
	public KEY(): TerminalNode { return this.getToken(informixParser.KEY, 0); }
	public LPAREN(): TerminalNode { return this.getToken(informixParser.LPAREN, 0); }
	public keyList(): KeyListContext {
		return this.getRuleContext(0, KeyListContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(informixParser.RPAREN, 0); }
	public codeBlock(): CodeBlockContext[];
	public codeBlock(i: number): CodeBlockContext;
	public codeBlock(i?: number): CodeBlockContext | CodeBlockContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CodeBlockContext);
		} else {
			return this.getRuleContext(i, CodeBlockContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_displayEvents; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterDisplayEvents) {
			listener.enterDisplayEvents(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitDisplayEvents) {
			listener.exitDisplayEvents(this);
		}
	}
}


export class DisplayStatementContext extends ParserRuleContext {
	public DISPLAY(): TerminalNode { return this.getToken(informixParser.DISPLAY, 0); }
	public eol(): EolContext {
		return this.getRuleContext(0, EolContext);
	}
	public BY(): TerminalNode | undefined { return this.tryGetToken(informixParser.BY, 0); }
	public NAME(): TerminalNode | undefined { return this.tryGetToken(informixParser.NAME, 0); }
	public attributeList(): AttributeListContext | undefined {
		return this.tryGetRuleContext(0, AttributeListContext);
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public TO(): TerminalNode | undefined { return this.tryGetToken(informixParser.TO, 0); }
	public fieldList(): FieldListContext | undefined {
		return this.tryGetRuleContext(0, FieldListContext);
	}
	public AT(): TerminalNode | undefined { return this.tryGetToken(informixParser.AT, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.COMMA);
		} else {
			return this.getToken(informixParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_displayStatement; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterDisplayStatement) {
			listener.enterDisplayStatement(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitDisplayStatement) {
			listener.exitDisplayStatement(this);
		}
	}
}


export class ErrorStatementContext extends ParserRuleContext {
	public ERROR(): TerminalNode { return this.getToken(informixParser.ERROR, 0); }
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
			return this.getTokens(informixParser.COMMA);
		} else {
			return this.getToken(informixParser.COMMA, i);
		}
	}
	public attributeList(): AttributeListContext | undefined {
		return this.tryGetRuleContext(0, AttributeListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_errorStatement; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterErrorStatement) {
			listener.enterErrorStatement(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitErrorStatement) {
			listener.exitErrorStatement(this);
		}
	}
}


export class MessageStatementContext extends ParserRuleContext {
	public MESSAGE(): TerminalNode { return this.getToken(informixParser.MESSAGE, 0); }
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
			return this.getTokens(informixParser.COMMA);
		} else {
			return this.getToken(informixParser.COMMA, i);
		}
	}
	public attributeList(): AttributeListContext | undefined {
		return this.tryGetRuleContext(0, AttributeListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_messageStatement; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterMessageStatement) {
			listener.enterMessageStatement(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitMessageStatement) {
			listener.exitMessageStatement(this);
		}
	}
}


export class PromptStatementContext extends ParserRuleContext {
	public PROMPT(): TerminalNode[];
	public PROMPT(i: number): TerminalNode;
	public PROMPT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.PROMPT);
		} else {
			return this.getToken(informixParser.PROMPT, i);
		}
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public FOR(): TerminalNode { return this.getToken(informixParser.FOR, 0); }
	public variable(): VariableContext {
		return this.getRuleContext(0, VariableContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.COMMA);
		} else {
			return this.getToken(informixParser.COMMA, i);
		}
	}
	public attributeList(): AttributeListContext[];
	public attributeList(i: number): AttributeListContext;
	public attributeList(i?: number): AttributeListContext | AttributeListContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AttributeListContext);
		} else {
			return this.getRuleContext(i, AttributeListContext);
		}
	}
	public CHAR(): TerminalNode | undefined { return this.tryGetToken(informixParser.CHAR, 0); }
	public HELP(): TerminalNode | undefined { return this.tryGetToken(informixParser.HELP, 0); }
	public numericConstant(): NumericConstantContext | undefined {
		return this.tryGetRuleContext(0, NumericConstantContext);
	}
	public END(): TerminalNode | undefined { return this.tryGetToken(informixParser.END, 0); }
	public ON(): TerminalNode[];
	public ON(i: number): TerminalNode;
	public ON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.ON);
		} else {
			return this.getToken(informixParser.ON, i);
		}
	}
	public KEY(): TerminalNode[];
	public KEY(i: number): TerminalNode;
	public KEY(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.KEY);
		} else {
			return this.getToken(informixParser.KEY, i);
		}
	}
	public LPAREN(): TerminalNode[];
	public LPAREN(i: number): TerminalNode;
	public LPAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.LPAREN);
		} else {
			return this.getToken(informixParser.LPAREN, i);
		}
	}
	public keyList(): KeyListContext[];
	public keyList(i: number): KeyListContext;
	public keyList(i?: number): KeyListContext | KeyListContext[] {
		if (i === undefined) {
			return this.getRuleContexts(KeyListContext);
		} else {
			return this.getRuleContext(i, KeyListContext);
		}
	}
	public RPAREN(): TerminalNode[];
	public RPAREN(i: number): TerminalNode;
	public RPAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.RPAREN);
		} else {
			return this.getToken(informixParser.RPAREN, i);
		}
	}
	public codeBlock(): CodeBlockContext[];
	public codeBlock(i: number): CodeBlockContext;
	public codeBlock(i?: number): CodeBlockContext | CodeBlockContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CodeBlockContext);
		} else {
			return this.getRuleContext(i, CodeBlockContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_promptStatement; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterPromptStatement) {
			listener.enterPromptStatement(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitPromptStatement) {
			listener.exitPromptStatement(this);
		}
	}
}


export class InputEventsContext extends ParserRuleContext {
	public BEFORE(): TerminalNode | undefined { return this.tryGetToken(informixParser.BEFORE, 0); }
	public AFTER(): TerminalNode | undefined { return this.tryGetToken(informixParser.AFTER, 0); }
	public INPUT(): TerminalNode | undefined { return this.tryGetToken(informixParser.INPUT, 0); }
	public ROW(): TerminalNode | undefined { return this.tryGetToken(informixParser.ROW, 0); }
	public INSERT(): TerminalNode | undefined { return this.tryGetToken(informixParser.INSERT, 0); }
	public DELETE(): TerminalNode | undefined { return this.tryGetToken(informixParser.DELETE, 0); }
	public FIELD(): TerminalNode | undefined { return this.tryGetToken(informixParser.FIELD, 0); }
	public fieldList(): FieldListContext | undefined {
		return this.tryGetRuleContext(0, FieldListContext);
	}
	public ON(): TerminalNode | undefined { return this.tryGetToken(informixParser.ON, 0); }
	public KEY(): TerminalNode | undefined { return this.tryGetToken(informixParser.KEY, 0); }
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(informixParser.LPAREN, 0); }
	public keyList(): KeyListContext | undefined {
		return this.tryGetRuleContext(0, KeyListContext);
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(informixParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_inputEvents; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterInputEvents) {
			listener.enterInputEvents(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitInputEvents) {
			listener.exitInputEvents(this);
		}
	}
}


export class InputInsideStatementContext extends ParserRuleContext {
	public NEXT(): TerminalNode[];
	public NEXT(i: number): TerminalNode;
	public NEXT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.NEXT);
		} else {
			return this.getToken(informixParser.NEXT, i);
		}
	}
	public FIELD(): TerminalNode | undefined { return this.tryGetToken(informixParser.FIELD, 0); }
	public fieldName(): FieldNameContext | undefined {
		return this.tryGetRuleContext(0, FieldNameContext);
	}
	public PREVIOUS(): TerminalNode | undefined { return this.tryGetToken(informixParser.PREVIOUS, 0); }
	public CONTINUE(): TerminalNode | undefined { return this.tryGetToken(informixParser.CONTINUE, 0); }
	public INPUT(): TerminalNode | undefined { return this.tryGetToken(informixParser.INPUT, 0); }
	public EXIT(): TerminalNode | undefined { return this.tryGetToken(informixParser.EXIT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_inputInsideStatement; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterInputInsideStatement) {
			listener.enterInputInsideStatement(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitInputInsideStatement) {
			listener.exitInputInsideStatement(this);
		}
	}
}


export class InputGroupStatementContext extends ParserRuleContext {
	public inputEvents(): InputEventsContext {
		return this.getRuleContext(0, InputEventsContext);
	}
	public codeBlock(): CodeBlockContext[];
	public codeBlock(i: number): CodeBlockContext;
	public codeBlock(i?: number): CodeBlockContext | CodeBlockContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CodeBlockContext);
		} else {
			return this.getRuleContext(i, CodeBlockContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_inputGroupStatement; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterInputGroupStatement) {
			listener.enterInputGroupStatement(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitInputGroupStatement) {
			listener.exitInputGroupStatement(this);
		}
	}
}


export class InputStatementContext extends ParserRuleContext {
	public INPUT(): TerminalNode[];
	public INPUT(i: number): TerminalNode;
	public INPUT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.INPUT);
		} else {
			return this.getToken(informixParser.INPUT, i);
		}
	}
	public BY(): TerminalNode | undefined { return this.tryGetToken(informixParser.BY, 0); }
	public NAME(): TerminalNode | undefined { return this.tryGetToken(informixParser.NAME, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public FROM(): TerminalNode | undefined { return this.tryGetToken(informixParser.FROM, 0); }
	public fieldList(): FieldListContext | undefined {
		return this.tryGetRuleContext(0, FieldListContext);
	}
	public attributeList(): AttributeListContext | undefined {
		return this.tryGetRuleContext(0, AttributeListContext);
	}
	public HELP(): TerminalNode | undefined { return this.tryGetToken(informixParser.HELP, 0); }
	public numericConstant(): NumericConstantContext | undefined {
		return this.tryGetRuleContext(0, NumericConstantContext);
	}
	public END(): TerminalNode | undefined { return this.tryGetToken(informixParser.END, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.COMMA);
		} else {
			return this.getToken(informixParser.COMMA, i);
		}
	}
	public WITHOUT(): TerminalNode | undefined { return this.tryGetToken(informixParser.WITHOUT, 0); }
	public DEFAULTS(): TerminalNode | undefined { return this.tryGetToken(informixParser.DEFAULTS, 0); }
	public inputGroupStatement(): InputGroupStatementContext[];
	public inputGroupStatement(i: number): InputGroupStatementContext;
	public inputGroupStatement(i?: number): InputGroupStatementContext | InputGroupStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InputGroupStatementContext);
		} else {
			return this.getRuleContext(i, InputGroupStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_inputStatement; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterInputStatement) {
			listener.enterInputStatement(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitInputStatement) {
			listener.exitInputStatement(this);
		}
	}
}


export class InputArrayStatementContext extends ParserRuleContext {
	public INPUT(): TerminalNode[];
	public INPUT(i: number): TerminalNode;
	public INPUT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.INPUT);
		} else {
			return this.getToken(informixParser.INPUT, i);
		}
	}
	public ARRAY(): TerminalNode { return this.getToken(informixParser.ARRAY, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public FROM(): TerminalNode { return this.getToken(informixParser.FROM, 0); }
	public WITHOUT(): TerminalNode | undefined { return this.tryGetToken(informixParser.WITHOUT, 0); }
	public DEFAULTS(): TerminalNode | undefined { return this.tryGetToken(informixParser.DEFAULTS, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.COMMA);
		} else {
			return this.getToken(informixParser.COMMA, i);
		}
	}
	public HELP(): TerminalNode | undefined { return this.tryGetToken(informixParser.HELP, 0); }
	public numericConstant(): NumericConstantContext | undefined {
		return this.tryGetRuleContext(0, NumericConstantContext);
	}
	public attributeList(): AttributeListContext | undefined {
		return this.tryGetRuleContext(0, AttributeListContext);
	}
	public END(): TerminalNode | undefined { return this.tryGetToken(informixParser.END, 0); }
	public inputGroupStatement(): InputGroupStatementContext[];
	public inputGroupStatement(i: number): InputGroupStatementContext;
	public inputGroupStatement(i?: number): InputGroupStatementContext | InputGroupStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InputGroupStatementContext);
		} else {
			return this.getRuleContext(i, InputGroupStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_inputArrayStatement; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterInputArrayStatement) {
			listener.enterInputArrayStatement(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitInputArrayStatement) {
			listener.exitInputArrayStatement(this);
		}
	}
}


export class MenuEventsContext extends ParserRuleContext {
	public BEFORE(): TerminalNode | undefined { return this.tryGetToken(informixParser.BEFORE, 0); }
	public MENU(): TerminalNode | undefined { return this.tryGetToken(informixParser.MENU, 0); }
	public COMMAND(): TerminalNode | undefined { return this.tryGetToken(informixParser.COMMAND, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public KEY(): TerminalNode | undefined { return this.tryGetToken(informixParser.KEY, 0); }
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(informixParser.LPAREN, 0); }
	public keyList(): KeyListContext | undefined {
		return this.tryGetRuleContext(0, KeyListContext);
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(informixParser.RPAREN, 0); }
	public HELP(): TerminalNode | undefined { return this.tryGetToken(informixParser.HELP, 0); }
	public numericConstant(): NumericConstantContext | undefined {
		return this.tryGetRuleContext(0, NumericConstantContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_menuEvents; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterMenuEvents) {
			listener.enterMenuEvents(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitMenuEvents) {
			listener.exitMenuEvents(this);
		}
	}
}


export class MenuInsideStatementContext extends ParserRuleContext {
	public NEXT(): TerminalNode | undefined { return this.tryGetToken(informixParser.NEXT, 0); }
	public OPTION(): TerminalNode | undefined { return this.tryGetToken(informixParser.OPTION, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public ALL(): TerminalNode | undefined { return this.tryGetToken(informixParser.ALL, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.COMMA);
		} else {
			return this.getToken(informixParser.COMMA, i);
		}
	}
	public SHOW(): TerminalNode | undefined { return this.tryGetToken(informixParser.SHOW, 0); }
	public HIDE(): TerminalNode | undefined { return this.tryGetToken(informixParser.HIDE, 0); }
	public CONTINUE(): TerminalNode | undefined { return this.tryGetToken(informixParser.CONTINUE, 0); }
	public MENU(): TerminalNode | undefined { return this.tryGetToken(informixParser.MENU, 0); }
	public EXIT(): TerminalNode | undefined { return this.tryGetToken(informixParser.EXIT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_menuInsideStatement; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterMenuInsideStatement) {
			listener.enterMenuInsideStatement(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitMenuInsideStatement) {
			listener.exitMenuInsideStatement(this);
		}
	}
}


export class MenuGroupStatementContext extends ParserRuleContext {
	public menuEvents(): MenuEventsContext {
		return this.getRuleContext(0, MenuEventsContext);
	}
	public codeBlock(): CodeBlockContext | undefined {
		return this.tryGetRuleContext(0, CodeBlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_menuGroupStatement; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterMenuGroupStatement) {
			listener.enterMenuGroupStatement(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitMenuGroupStatement) {
			listener.exitMenuGroupStatement(this);
		}
	}
}


export class MenuStatementContext extends ParserRuleContext {
	public MENU(): TerminalNode[];
	public MENU(i: number): TerminalNode;
	public MENU(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.MENU);
		} else {
			return this.getToken(informixParser.MENU, i);
		}
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public END(): TerminalNode { return this.getToken(informixParser.END, 0); }
	public menuGroupStatement(): MenuGroupStatementContext[];
	public menuGroupStatement(i: number): MenuGroupStatementContext;
	public menuGroupStatement(i?: number): MenuGroupStatementContext | MenuGroupStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MenuGroupStatementContext);
		} else {
			return this.getRuleContext(i, MenuGroupStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_menuStatement; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterMenuStatement) {
			listener.enterMenuStatement(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitMenuStatement) {
			listener.exitMenuStatement(this);
		}
	}
}


export class ReservedLinePositionContext extends ParserRuleContext {
	public FIRST(): TerminalNode | undefined { return this.tryGetToken(informixParser.FIRST, 0); }
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(informixParser.PLUS, 0); }
	public numericConstant(): NumericConstantContext | undefined {
		return this.tryGetRuleContext(0, NumericConstantContext);
	}
	public LAST(): TerminalNode | undefined { return this.tryGetToken(informixParser.LAST, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(informixParser.MINUS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_reservedLinePosition; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterReservedLinePosition) {
			listener.enterReservedLinePosition(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitReservedLinePosition) {
			listener.exitReservedLinePosition(this);
		}
	}
}


export class SpecialWindowAttributeContext extends ParserRuleContext {
	public BLACK(): TerminalNode | undefined { return this.tryGetToken(informixParser.BLACK, 0); }
	public BLUE(): TerminalNode | undefined { return this.tryGetToken(informixParser.BLUE, 0); }
	public CYAN(): TerminalNode | undefined { return this.tryGetToken(informixParser.CYAN, 0); }
	public GREEN(): TerminalNode | undefined { return this.tryGetToken(informixParser.GREEN, 0); }
	public MAGENTA(): TerminalNode | undefined { return this.tryGetToken(informixParser.MAGENTA, 0); }
	public RED(): TerminalNode | undefined { return this.tryGetToken(informixParser.RED, 0); }
	public WHITE(): TerminalNode | undefined { return this.tryGetToken(informixParser.WHITE, 0); }
	public YELLOW(): TerminalNode | undefined { return this.tryGetToken(informixParser.YELLOW, 0); }
	public BOLD(): TerminalNode | undefined { return this.tryGetToken(informixParser.BOLD, 0); }
	public DIM(): TerminalNode | undefined { return this.tryGetToken(informixParser.DIM, 0); }
	public NORMAL(): TerminalNode | undefined { return this.tryGetToken(informixParser.NORMAL, 0); }
	public INVISIBLE(): TerminalNode | undefined { return this.tryGetToken(informixParser.INVISIBLE, 0); }
	public REVERSE(): TerminalNode | undefined { return this.tryGetToken(informixParser.REVERSE, 0); }
	public BORDER(): TerminalNode | undefined { return this.tryGetToken(informixParser.BORDER, 0); }
	public LINE(): TerminalNode | undefined { return this.tryGetToken(informixParser.LINE, 0); }
	public reservedLinePosition(): ReservedLinePositionContext | undefined {
		return this.tryGetRuleContext(0, ReservedLinePositionContext);
	}
	public PROMPT(): TerminalNode | undefined { return this.tryGetToken(informixParser.PROMPT, 0); }
	public FORM(): TerminalNode | undefined { return this.tryGetToken(informixParser.FORM, 0); }
	public MENU(): TerminalNode | undefined { return this.tryGetToken(informixParser.MENU, 0); }
	public MESSAGE(): TerminalNode | undefined { return this.tryGetToken(informixParser.MESSAGE, 0); }
	public COMMENT(): TerminalNode | undefined { return this.tryGetToken(informixParser.COMMENT, 0); }
	public OFF(): TerminalNode | undefined { return this.tryGetToken(informixParser.OFF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_specialWindowAttribute; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterSpecialWindowAttribute) {
			listener.enterSpecialWindowAttribute(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitSpecialWindowAttribute) {
			listener.exitSpecialWindowAttribute(this);
		}
	}
}


export class WindowAttributeContext extends ParserRuleContext {
	public specialWindowAttribute(): SpecialWindowAttributeContext[];
	public specialWindowAttribute(i: number): SpecialWindowAttributeContext;
	public specialWindowAttribute(i?: number): SpecialWindowAttributeContext | SpecialWindowAttributeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SpecialWindowAttributeContext);
		} else {
			return this.getRuleContext(i, SpecialWindowAttributeContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.COMMA);
		} else {
			return this.getToken(informixParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_windowAttribute; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterWindowAttribute) {
			listener.enterWindowAttribute(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitWindowAttribute) {
			listener.exitWindowAttribute(this);
		}
	}
}


export class WindowAttributeListContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(informixParser.LPAREN, 0); }
	public windowAttribute(): WindowAttributeContext {
		return this.getRuleContext(0, WindowAttributeContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(informixParser.RPAREN, 0); }
	public ATTRIBUTE(): TerminalNode | undefined { return this.tryGetToken(informixParser.ATTRIBUTE, 0); }
	public ATTRIBUTES(): TerminalNode | undefined { return this.tryGetToken(informixParser.ATTRIBUTES, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_windowAttributeList; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterWindowAttributeList) {
			listener.enterWindowAttributeList(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitWindowAttributeList) {
			listener.exitWindowAttributeList(this);
		}
	}
}


export class OptionStatementContext extends ParserRuleContext {
	public MESSAGE(): TerminalNode | undefined { return this.tryGetToken(informixParser.MESSAGE, 0); }
	public LINE(): TerminalNode | undefined { return this.tryGetToken(informixParser.LINE, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public PROMPT(): TerminalNode | undefined { return this.tryGetToken(informixParser.PROMPT, 0); }
	public MENU(): TerminalNode | undefined { return this.tryGetToken(informixParser.MENU, 0); }
	public COMMENT(): TerminalNode | undefined { return this.tryGetToken(informixParser.COMMENT, 0); }
	public ERROR(): TerminalNode | undefined { return this.tryGetToken(informixParser.ERROR, 0); }
	public FORM(): TerminalNode | undefined { return this.tryGetToken(informixParser.FORM, 0); }
	public INPUT(): TerminalNode | undefined { return this.tryGetToken(informixParser.INPUT, 0); }
	public INSERT(): TerminalNode | undefined { return this.tryGetToken(informixParser.INSERT, 0); }
	public KEY(): TerminalNode | undefined { return this.tryGetToken(informixParser.KEY, 0); }
	public DELETE(): TerminalNode | undefined { return this.tryGetToken(informixParser.DELETE, 0); }
	public NEXT(): TerminalNode | undefined { return this.tryGetToken(informixParser.NEXT, 0); }
	public PREVIOUS(): TerminalNode | undefined { return this.tryGetToken(informixParser.PREVIOUS, 0); }
	public ACCEPT(): TerminalNode | undefined { return this.tryGetToken(informixParser.ACCEPT, 0); }
	public HELP(): TerminalNode | undefined { return this.tryGetToken(informixParser.HELP, 0); }
	public FILE(): TerminalNode | undefined { return this.tryGetToken(informixParser.FILE, 0); }
	public attributeList(): AttributeListContext | undefined {
		return this.tryGetRuleContext(0, AttributeListContext);
	}
	public DISPLAY(): TerminalNode | undefined { return this.tryGetToken(informixParser.DISPLAY, 0); }
	public SQL(): TerminalNode | undefined { return this.tryGetToken(informixParser.SQL, 0); }
	public INTERRUPT(): TerminalNode | undefined { return this.tryGetToken(informixParser.INTERRUPT, 0); }
	public FIELD(): TerminalNode | undefined { return this.tryGetToken(informixParser.FIELD, 0); }
	public ORDER(): TerminalNode | undefined { return this.tryGetToken(informixParser.ORDER, 0); }
	public ON(): TerminalNode | undefined { return this.tryGetToken(informixParser.ON, 0); }
	public OFF(): TerminalNode | undefined { return this.tryGetToken(informixParser.OFF, 0); }
	public CONSTRAINED(): TerminalNode | undefined { return this.tryGetToken(informixParser.CONSTRAINED, 0); }
	public UNCONSTRAINED(): TerminalNode | undefined { return this.tryGetToken(informixParser.UNCONSTRAINED, 0); }
	public WRAP(): TerminalNode | undefined { return this.tryGetToken(informixParser.WRAP, 0); }
	public NO(): TerminalNode | undefined { return this.tryGetToken(informixParser.NO, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_optionStatement; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterOptionStatement) {
			listener.enterOptionStatement(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitOptionStatement) {
			listener.exitOptionStatement(this);
		}
	}
}


export class OptionsStatementContext extends ParserRuleContext {
	public OPTIONS(): TerminalNode { return this.getToken(informixParser.OPTIONS, 0); }
	public optionStatement(): OptionStatementContext[];
	public optionStatement(i: number): OptionStatementContext;
	public optionStatement(i?: number): OptionStatementContext | OptionStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OptionStatementContext);
		} else {
			return this.getRuleContext(i, OptionStatementContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.COMMA);
		} else {
			return this.getToken(informixParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_optionsStatement; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterOptionsStatement) {
			listener.enterOptionsStatement(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitOptionsStatement) {
			listener.exitOptionsStatement(this);
		}
	}
}


export class ScreenStatementContext extends ParserRuleContext {
	public CLEAR(): TerminalNode | undefined { return this.tryGetToken(informixParser.CLEAR, 0); }
	public FORM(): TerminalNode | undefined { return this.tryGetToken(informixParser.FORM, 0); }
	public WINDOW(): TerminalNode | undefined { return this.tryGetToken(informixParser.WINDOW, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public SCREEN(): TerminalNode | undefined { return this.tryGetToken(informixParser.SCREEN, 0); }
	public fieldList(): FieldListContext[];
	public fieldList(i: number): FieldListContext;
	public fieldList(i?: number): FieldListContext | FieldListContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldListContext);
		} else {
			return this.getRuleContext(i, FieldListContext);
		}
	}
	public CLOSE(): TerminalNode | undefined { return this.tryGetToken(informixParser.CLOSE, 0); }
	public eol(): EolContext | undefined {
		return this.tryGetRuleContext(0, EolContext);
	}
	public constructStatement(): ConstructStatementContext | undefined {
		return this.tryGetRuleContext(0, ConstructStatementContext);
	}
	public CURRENT(): TerminalNode | undefined { return this.tryGetToken(informixParser.CURRENT, 0); }
	public IS(): TerminalNode | undefined { return this.tryGetToken(informixParser.IS, 0); }
	public displayStatement(): DisplayStatementContext | undefined {
		return this.tryGetRuleContext(0, DisplayStatementContext);
	}
	public displayArrayStatement(): DisplayArrayStatementContext | undefined {
		return this.tryGetRuleContext(0, DisplayArrayStatementContext);
	}
	public DISPLAY(): TerminalNode | undefined { return this.tryGetToken(informixParser.DISPLAY, 0); }
	public attributeList(): AttributeListContext | undefined {
		return this.tryGetRuleContext(0, AttributeListContext);
	}
	public errorStatement(): ErrorStatementContext | undefined {
		return this.tryGetRuleContext(0, ErrorStatementContext);
	}
	public messageStatement(): MessageStatementContext | undefined {
		return this.tryGetRuleContext(0, MessageStatementContext);
	}
	public promptStatement(): PromptStatementContext | undefined {
		return this.tryGetRuleContext(0, PromptStatementContext);
	}
	public inputStatement(): InputStatementContext | undefined {
		return this.tryGetRuleContext(0, InputStatementContext);
	}
	public inputArrayStatement(): InputArrayStatementContext | undefined {
		return this.tryGetRuleContext(0, InputArrayStatementContext);
	}
	public menuStatement(): MenuStatementContext | undefined {
		return this.tryGetRuleContext(0, MenuStatementContext);
	}
	public OPEN(): TerminalNode | undefined { return this.tryGetToken(informixParser.OPEN, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public FROM(): TerminalNode | undefined { return this.tryGetToken(informixParser.FROM, 0); }
	public AT(): TerminalNode | undefined { return this.tryGetToken(informixParser.AT, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.COMMA);
		} else {
			return this.getToken(informixParser.COMMA, i);
		}
	}
	public WITH(): TerminalNode | undefined { return this.tryGetToken(informixParser.WITH, 0); }
	public ROWS(): TerminalNode | undefined { return this.tryGetToken(informixParser.ROWS, 0); }
	public COLUMNS(): TerminalNode | undefined { return this.tryGetToken(informixParser.COLUMNS, 0); }
	public windowAttributeList(): WindowAttributeListContext | undefined {
		return this.tryGetRuleContext(0, WindowAttributeListContext);
	}
	public optionsStatement(): OptionsStatementContext | undefined {
		return this.tryGetRuleContext(0, OptionsStatementContext);
	}
	public SCROLL(): TerminalNode | undefined { return this.tryGetToken(informixParser.SCROLL, 0); }
	public UP(): TerminalNode | undefined { return this.tryGetToken(informixParser.UP, 0); }
	public DOWN(): TerminalNode | undefined { return this.tryGetToken(informixParser.DOWN, 0); }
	public BY(): TerminalNode | undefined { return this.tryGetToken(informixParser.BY, 0); }
	public numericConstant(): NumericConstantContext | undefined {
		return this.tryGetRuleContext(0, NumericConstantContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_screenStatement; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterScreenStatement) {
			listener.enterScreenStatement(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitScreenStatement) {
			listener.exitScreenStatement(this);
		}
	}
}


export class SqlStatementsContext extends ParserRuleContext {
	public cursorManipulationStatement(): CursorManipulationStatementContext | undefined {
		return this.tryGetRuleContext(0, CursorManipulationStatementContext);
	}
	public dataDefinitionStatement(): DataDefinitionStatementContext | undefined {
		return this.tryGetRuleContext(0, DataDefinitionStatementContext);
	}
	public dataManipulationStatement(): DataManipulationStatementContext | undefined {
		return this.tryGetRuleContext(0, DataManipulationStatementContext);
	}
	public dynamicManagementStatement(): DynamicManagementStatementContext | undefined {
		return this.tryGetRuleContext(0, DynamicManagementStatementContext);
	}
	public queryOptimizationStatement(): QueryOptimizationStatementContext | undefined {
		return this.tryGetRuleContext(0, QueryOptimizationStatementContext);
	}
	public dataIntegrityStatement(): DataIntegrityStatementContext | undefined {
		return this.tryGetRuleContext(0, DataIntegrityStatementContext);
	}
	public clientServerStatement(): ClientServerStatementContext | undefined {
		return this.tryGetRuleContext(0, ClientServerStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_sqlStatements; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterSqlStatements) {
			listener.enterSqlStatements(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitSqlStatements) {
			listener.exitSqlStatements(this);
		}
	}
}


export class CursorManipulationStatementContext extends ParserRuleContext {
	public CLOSE(): TerminalNode | undefined { return this.tryGetToken(informixParser.CLOSE, 0); }
	public cursorName(): CursorNameContext {
		return this.getRuleContext(0, CursorNameContext);
	}
	public eol(): EolContext | undefined {
		return this.tryGetRuleContext(0, EolContext);
	}
	public DECLARE(): TerminalNode | undefined { return this.tryGetToken(informixParser.DECLARE, 0); }
	public CURSOR(): TerminalNode | undefined { return this.tryGetToken(informixParser.CURSOR, 0); }
	public FOR(): TerminalNode[];
	public FOR(i: number): TerminalNode;
	public FOR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.FOR);
		} else {
			return this.getToken(informixParser.FOR, i);
		}
	}
	public SCROLL(): TerminalNode | undefined { return this.tryGetToken(informixParser.SCROLL, 0); }
	public sqlSelectStatement(): SqlSelectStatementContext | undefined {
		return this.tryGetRuleContext(0, SqlSelectStatementContext);
	}
	public sqlInsertStatement(): SqlInsertStatementContext | undefined {
		return this.tryGetRuleContext(0, SqlInsertStatementContext);
	}
	public statementId(): StatementIdContext | undefined {
		return this.tryGetRuleContext(0, StatementIdContext);
	}
	public WITH(): TerminalNode | undefined { return this.tryGetToken(informixParser.WITH, 0); }
	public HOLD(): TerminalNode | undefined { return this.tryGetToken(informixParser.HOLD, 0); }
	public UPDATE(): TerminalNode | undefined { return this.tryGetToken(informixParser.UPDATE, 0); }
	public OF(): TerminalNode | undefined { return this.tryGetToken(informixParser.OF, 0); }
	public columnsList(): ColumnsListContext | undefined {
		return this.tryGetRuleContext(0, ColumnsListContext);
	}
	public FETCH(): TerminalNode | undefined { return this.tryGetToken(informixParser.FETCH, 0); }
	public NEXT(): TerminalNode | undefined { return this.tryGetToken(informixParser.NEXT, 0); }
	public FIRST(): TerminalNode | undefined { return this.tryGetToken(informixParser.FIRST, 0); }
	public LAST(): TerminalNode | undefined { return this.tryGetToken(informixParser.LAST, 0); }
	public CURRENT(): TerminalNode | undefined { return this.tryGetToken(informixParser.CURRENT, 0); }
	public RELATIVE(): TerminalNode | undefined { return this.tryGetToken(informixParser.RELATIVE, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public ABSOLUTE(): TerminalNode | undefined { return this.tryGetToken(informixParser.ABSOLUTE, 0); }
	public INTO(): TerminalNode | undefined { return this.tryGetToken(informixParser.INTO, 0); }
	public variableList(): VariableListContext | undefined {
		return this.tryGetRuleContext(0, VariableListContext);
	}
	public PREVIOUS(): TerminalNode | undefined { return this.tryGetToken(informixParser.PREVIOUS, 0); }
	public PRIOR(): TerminalNode | undefined { return this.tryGetToken(informixParser.PRIOR, 0); }
	public FLUSH(): TerminalNode | undefined { return this.tryGetToken(informixParser.FLUSH, 0); }
	public OPEN(): TerminalNode | undefined { return this.tryGetToken(informixParser.OPEN, 0); }
	public USING(): TerminalNode | undefined { return this.tryGetToken(informixParser.USING, 0); }
	public PUT(): TerminalNode | undefined { return this.tryGetToken(informixParser.PUT, 0); }
	public FROM(): TerminalNode | undefined { return this.tryGetToken(informixParser.FROM, 0); }
	public variableOrConstantList(): VariableOrConstantListContext | undefined {
		return this.tryGetRuleContext(0, VariableOrConstantListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_cursorManipulationStatement; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterCursorManipulationStatement) {
			listener.enterCursorManipulationStatement(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitCursorManipulationStatement) {
			listener.exitCursorManipulationStatement(this);
		}
	}
}


export class ColumnsListContext extends ParserRuleContext {
	public columnsTableId(): ColumnsTableIdContext[];
	public columnsTableId(i: number): ColumnsTableIdContext;
	public columnsTableId(i?: number): ColumnsTableIdContext | ColumnsTableIdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ColumnsTableIdContext);
		} else {
			return this.getRuleContext(i, ColumnsTableIdContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.COMMA);
		} else {
			return this.getToken(informixParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_columnsList; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterColumnsList) {
			listener.enterColumnsList(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitColumnsList) {
			listener.exitColumnsList(this);
		}
	}
}


export class StatementIdContext extends ParserRuleContext {
	public constantIdentifier(): ConstantIdentifierContext {
		return this.getRuleContext(0, ConstantIdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_statementId; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterStatementId) {
			listener.enterStatementId(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitStatementId) {
			listener.exitStatementId(this);
		}
	}
}


export class CursorNameContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_cursorName; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterCursorName) {
			listener.enterCursorName(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitCursorName) {
			listener.exitCursorName(this);
		}
	}
}


export class DataTypeContext extends ParserRuleContext {
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_dataType; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterDataType) {
			listener.enterDataType(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitDataType) {
			listener.exitDataType(this);
		}
	}
}


export class ColumnItemContext extends ParserRuleContext {
	public constantIdentifier(): ConstantIdentifierContext[];
	public constantIdentifier(i: number): ConstantIdentifierContext;
	public constantIdentifier(i?: number): ConstantIdentifierContext | ConstantIdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConstantIdentifierContext);
		} else {
			return this.getRuleContext(i, ConstantIdentifierContext);
		}
	}
	public dataType(): DataTypeContext | undefined {
		return this.tryGetRuleContext(0, DataTypeContext);
	}
	public BYTE(): TerminalNode | undefined { return this.tryGetToken(informixParser.BYTE, 0); }
	public TEXT(): TerminalNode | undefined { return this.tryGetToken(informixParser.TEXT, 0); }
	public NOT(): TerminalNode | undefined { return this.tryGetToken(informixParser.NOT, 0); }
	public NULL(): TerminalNode | undefined { return this.tryGetToken(informixParser.NULL, 0); }
	public IN(): TerminalNode | undefined { return this.tryGetToken(informixParser.IN, 0); }
	public TABLE(): TerminalNode | undefined { return this.tryGetToken(informixParser.TABLE, 0); }
	public UNIQUE(): TerminalNode | undefined { return this.tryGetToken(informixParser.UNIQUE, 0); }
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(informixParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(informixParser.RPAREN, 0); }
	public CONSTRAINT(): TerminalNode | undefined { return this.tryGetToken(informixParser.CONSTRAINT, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.COMMA);
		} else {
			return this.getToken(informixParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_columnItem; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterColumnItem) {
			listener.enterColumnItem(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitColumnItem) {
			listener.exitColumnItem(this);
		}
	}
}


export class DataDefinitionStatementContext extends ParserRuleContext {
	public DROP(): TerminalNode | undefined { return this.tryGetToken(informixParser.DROP, 0); }
	public TABLE(): TerminalNode | undefined { return this.tryGetToken(informixParser.TABLE, 0); }
	public constantIdentifier(): ConstantIdentifierContext[];
	public constantIdentifier(i: number): ConstantIdentifierContext;
	public constantIdentifier(i?: number): ConstantIdentifierContext | ConstantIdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConstantIdentifierContext);
		} else {
			return this.getRuleContext(i, ConstantIdentifierContext);
		}
	}
	public CREATE(): TerminalNode | undefined { return this.tryGetToken(informixParser.CREATE, 0); }
	public LPAREN(): TerminalNode[];
	public LPAREN(i: number): TerminalNode;
	public LPAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.LPAREN);
		} else {
			return this.getToken(informixParser.LPAREN, i);
		}
	}
	public columnItem(): ColumnItemContext[];
	public columnItem(i: number): ColumnItemContext;
	public columnItem(i?: number): ColumnItemContext | ColumnItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ColumnItemContext);
		} else {
			return this.getRuleContext(i, ColumnItemContext);
		}
	}
	public RPAREN(): TerminalNode[];
	public RPAREN(i: number): TerminalNode;
	public RPAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.RPAREN);
		} else {
			return this.getToken(informixParser.RPAREN, i);
		}
	}
	public TEMP(): TerminalNode | undefined { return this.tryGetToken(informixParser.TEMP, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.COMMA);
		} else {
			return this.getToken(informixParser.COMMA, i);
		}
	}
	public WITH(): TerminalNode | undefined { return this.tryGetToken(informixParser.WITH, 0); }
	public NO(): TerminalNode | undefined { return this.tryGetToken(informixParser.NO, 0); }
	public LOG(): TerminalNode | undefined { return this.tryGetToken(informixParser.LOG, 0); }
	public IN(): TerminalNode | undefined { return this.tryGetToken(informixParser.IN, 0); }
	public EXTENT(): TerminalNode | undefined { return this.tryGetToken(informixParser.EXTENT, 0); }
	public SIZE(): TerminalNode[];
	public SIZE(i: number): TerminalNode;
	public SIZE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.SIZE);
		} else {
			return this.getToken(informixParser.SIZE, i);
		}
	}
	public numericConstant(): NumericConstantContext[];
	public numericConstant(i: number): NumericConstantContext;
	public numericConstant(i?: number): NumericConstantContext | NumericConstantContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NumericConstantContext);
		} else {
			return this.getRuleContext(i, NumericConstantContext);
		}
	}
	public NEXT(): TerminalNode | undefined { return this.tryGetToken(informixParser.NEXT, 0); }
	public LOCK(): TerminalNode | undefined { return this.tryGetToken(informixParser.LOCK, 0); }
	public MODE(): TerminalNode | undefined { return this.tryGetToken(informixParser.MODE, 0); }
	public PAGE(): TerminalNode | undefined { return this.tryGetToken(informixParser.PAGE, 0); }
	public ROW(): TerminalNode | undefined { return this.tryGetToken(informixParser.ROW, 0); }
	public INDEX(): TerminalNode | undefined { return this.tryGetToken(informixParser.INDEX, 0); }
	public ON(): TerminalNode | undefined { return this.tryGetToken(informixParser.ON, 0); }
	public UNIQUE(): TerminalNode | undefined { return this.tryGetToken(informixParser.UNIQUE, 0); }
	public CLUSTER(): TerminalNode | undefined { return this.tryGetToken(informixParser.CLUSTER, 0); }
	public ASC(): TerminalNode[];
	public ASC(i: number): TerminalNode;
	public ASC(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.ASC);
		} else {
			return this.getToken(informixParser.ASC, i);
		}
	}
	public DESC(): TerminalNode[];
	public DESC(i: number): TerminalNode;
	public DESC(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.DESC);
		} else {
			return this.getToken(informixParser.DESC, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_dataDefinitionStatement; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterDataDefinitionStatement) {
			listener.enterDataDefinitionStatement(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitDataDefinitionStatement) {
			listener.exitDataDefinitionStatement(this);
		}
	}
}


export class DataManipulationStatementContext extends ParserRuleContext {
	public sqlInsertStatement(): SqlInsertStatementContext | undefined {
		return this.tryGetRuleContext(0, SqlInsertStatementContext);
	}
	public sqlDeleteStatement(): SqlDeleteStatementContext | undefined {
		return this.tryGetRuleContext(0, SqlDeleteStatementContext);
	}
	public sqlSelectStatement(): SqlSelectStatementContext | undefined {
		return this.tryGetRuleContext(0, SqlSelectStatementContext);
	}
	public sqlUpdateStatement(): SqlUpdateStatementContext | undefined {
		return this.tryGetRuleContext(0, SqlUpdateStatementContext);
	}
	public sqlLoadStatement(): SqlLoadStatementContext | undefined {
		return this.tryGetRuleContext(0, SqlLoadStatementContext);
	}
	public sqlUnLoadStatement(): SqlUnLoadStatementContext | undefined {
		return this.tryGetRuleContext(0, SqlUnLoadStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_dataManipulationStatement; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterDataManipulationStatement) {
			listener.enterDataManipulationStatement(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitDataManipulationStatement) {
			listener.exitDataManipulationStatement(this);
		}
	}
}


export class SqlSelectStatementContext extends ParserRuleContext {
	public mainSelectStatement(): MainSelectStatementContext {
		return this.getRuleContext(0, MainSelectStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_sqlSelectStatement; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterSqlSelectStatement) {
			listener.enterSqlSelectStatement(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitSqlSelectStatement) {
			listener.exitSqlSelectStatement(this);
		}
	}
}


export class ColumnsTableIdContext extends ParserRuleContext {
	public STAR(): TerminalNode | undefined { return this.tryGetToken(informixParser.STAR, 0); }
	public tableIdentifier(): TableIdentifierContext | undefined {
		return this.tryGetRuleContext(0, TableIdentifierContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(informixParser.DOT, 0); }
	public columnsTableId(): ColumnsTableIdContext | undefined {
		return this.tryGetRuleContext(0, ColumnsTableIdContext);
	}
	public indexingVariable(): IndexingVariableContext | undefined {
		return this.tryGetRuleContext(0, IndexingVariableContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_columnsTableId; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterColumnsTableId) {
			listener.enterColumnsTableId(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitColumnsTableId) {
			listener.exitColumnsTableId(this);
		}
	}
}


export class SelectListContext extends ParserRuleContext {
	public sqlExpression(): SqlExpressionContext[];
	public sqlExpression(i: number): SqlExpressionContext;
	public sqlExpression(i?: number): SqlExpressionContext | SqlExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SqlExpressionContext);
		} else {
			return this.getRuleContext(i, SqlExpressionContext);
		}
	}
	public sqlAlias(): SqlAliasContext[];
	public sqlAlias(i: number): SqlAliasContext;
	public sqlAlias(i?: number): SqlAliasContext | SqlAliasContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SqlAliasContext);
		} else {
			return this.getRuleContext(i, SqlAliasContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.COMMA);
		} else {
			return this.getToken(informixParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_selectList; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterSelectList) {
			listener.enterSelectList(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitSelectList) {
			listener.exitSelectList(this);
		}
	}
}


export class HeadSelectStatementContext extends ParserRuleContext {
	public SELECT(): TerminalNode { return this.getToken(informixParser.SELECT, 0); }
	public selectList(): SelectListContext {
		return this.getRuleContext(0, SelectListContext);
	}
	public ALL(): TerminalNode | undefined { return this.tryGetToken(informixParser.ALL, 0); }
	public DISTINCT(): TerminalNode | undefined { return this.tryGetToken(informixParser.DISTINCT, 0); }
	public UNIQUE(): TerminalNode | undefined { return this.tryGetToken(informixParser.UNIQUE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_headSelectStatement; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterHeadSelectStatement) {
			listener.enterHeadSelectStatement(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitHeadSelectStatement) {
			listener.exitHeadSelectStatement(this);
		}
	}
}


export class TableQualifierContext extends ParserRuleContext {
	public constantIdentifier(): ConstantIdentifierContext[];
	public constantIdentifier(i: number): ConstantIdentifierContext;
	public constantIdentifier(i?: number): ConstantIdentifierContext | ConstantIdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConstantIdentifierContext);
		} else {
			return this.getRuleContext(i, ConstantIdentifierContext);
		}
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(informixParser.COLON, 0); }
	public ATSYMBOL(): TerminalNode | undefined { return this.tryGetToken(informixParser.ATSYMBOL, 0); }
	public string(): StringContext | undefined {
		return this.tryGetRuleContext(0, StringContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_tableQualifier; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterTableQualifier) {
			listener.enterTableQualifier(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitTableQualifier) {
			listener.exitTableQualifier(this);
		}
	}
}


export class TableIdentifierContext extends ParserRuleContext {
	public constantIdentifier(): ConstantIdentifierContext {
		return this.getRuleContext(0, ConstantIdentifierContext);
	}
	public tableQualifier(): TableQualifierContext | undefined {
		return this.tryGetRuleContext(0, TableQualifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_tableIdentifier; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterTableIdentifier) {
			listener.enterTableIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitTableIdentifier) {
			listener.exitTableIdentifier(this);
		}
	}
}


export class FromTableContext extends ParserRuleContext {
	public tableIdentifier(): TableIdentifierContext {
		return this.getRuleContext(0, TableIdentifierContext);
	}
	public OUTER(): TerminalNode | undefined { return this.tryGetToken(informixParser.OUTER, 0); }
	public sqlAlias(): SqlAliasContext | undefined {
		return this.tryGetRuleContext(0, SqlAliasContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_fromTable; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterFromTable) {
			listener.enterFromTable(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitFromTable) {
			listener.exitFromTable(this);
		}
	}
}


export class TableExpressionContext extends ParserRuleContext {
	public simpleSelectStatement(): SimpleSelectStatementContext {
		return this.getRuleContext(0, SimpleSelectStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_tableExpression; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterTableExpression) {
			listener.enterTableExpression(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitTableExpression) {
			listener.exitTableExpression(this);
		}
	}
}


export class FromSelectStatementContext extends ParserRuleContext {
	public FROM(): TerminalNode { return this.getToken(informixParser.FROM, 0); }
	public fromTable(): FromTableContext[];
	public fromTable(i: number): FromTableContext;
	public fromTable(i?: number): FromTableContext | FromTableContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FromTableContext);
		} else {
			return this.getRuleContext(i, FromTableContext);
		}
	}
	public LPAREN(): TerminalNode[];
	public LPAREN(i: number): TerminalNode;
	public LPAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.LPAREN);
		} else {
			return this.getToken(informixParser.LPAREN, i);
		}
	}
	public tableExpression(): TableExpressionContext[];
	public tableExpression(i: number): TableExpressionContext;
	public tableExpression(i?: number): TableExpressionContext | TableExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TableExpressionContext);
		} else {
			return this.getRuleContext(i, TableExpressionContext);
		}
	}
	public RPAREN(): TerminalNode[];
	public RPAREN(i: number): TerminalNode;
	public RPAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.RPAREN);
		} else {
			return this.getToken(informixParser.RPAREN, i);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.COMMA);
		} else {
			return this.getToken(informixParser.COMMA, i);
		}
	}
	public sqlAlias(): SqlAliasContext[];
	public sqlAlias(i: number): SqlAliasContext;
	public sqlAlias(i?: number): SqlAliasContext | SqlAliasContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SqlAliasContext);
		} else {
			return this.getRuleContext(i, SqlAliasContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_fromSelectStatement; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterFromSelectStatement) {
			listener.enterFromSelectStatement(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitFromSelectStatement) {
			listener.exitFromSelectStatement(this);
		}
	}
}


export class AliasNameContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_aliasName; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterAliasName) {
			listener.enterAliasName(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitAliasName) {
			listener.exitAliasName(this);
		}
	}
}


export class MainSelectStatementContext extends ParserRuleContext {
	public headSelectStatement(): HeadSelectStatementContext {
		return this.getRuleContext(0, HeadSelectStatementContext);
	}
	public fromSelectStatement(): FromSelectStatementContext {
		return this.getRuleContext(0, FromSelectStatementContext);
	}
	public INTO(): TerminalNode[];
	public INTO(i: number): TerminalNode;
	public INTO(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.INTO);
		} else {
			return this.getToken(informixParser.INTO, i);
		}
	}
	public variableList(): VariableListContext | undefined {
		return this.tryGetRuleContext(0, VariableListContext);
	}
	public whereStatement(): WhereStatementContext | undefined {
		return this.tryGetRuleContext(0, WhereStatementContext);
	}
	public groupByStatement(): GroupByStatementContext | undefined {
		return this.tryGetRuleContext(0, GroupByStatementContext);
	}
	public havingStatement(): HavingStatementContext | undefined {
		return this.tryGetRuleContext(0, HavingStatementContext);
	}
	public unionSelectStatement(): UnionSelectStatementContext | undefined {
		return this.tryGetRuleContext(0, UnionSelectStatementContext);
	}
	public orderbyStatement(): OrderbyStatementContext | undefined {
		return this.tryGetRuleContext(0, OrderbyStatementContext);
	}
	public TEMP(): TerminalNode | undefined { return this.tryGetToken(informixParser.TEMP, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public WITH(): TerminalNode | undefined { return this.tryGetToken(informixParser.WITH, 0); }
	public NO(): TerminalNode | undefined { return this.tryGetToken(informixParser.NO, 0); }
	public LOG(): TerminalNode | undefined { return this.tryGetToken(informixParser.LOG, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_mainSelectStatement; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterMainSelectStatement) {
			listener.enterMainSelectStatement(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitMainSelectStatement) {
			listener.exitMainSelectStatement(this);
		}
	}
}


export class UnionSelectStatementContext extends ParserRuleContext {
	public UNION(): TerminalNode | undefined { return this.tryGetToken(informixParser.UNION, 0); }
	public simpleSelectStatement(): SimpleSelectStatementContext | undefined {
		return this.tryGetRuleContext(0, SimpleSelectStatementContext);
	}
	public ALL(): TerminalNode | undefined { return this.tryGetToken(informixParser.ALL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_unionSelectStatement; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterUnionSelectStatement) {
			listener.enterUnionSelectStatement(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitUnionSelectStatement) {
			listener.exitUnionSelectStatement(this);
		}
	}
}


export class SimpleSelectStatementContext extends ParserRuleContext {
	public headSelectStatement(): HeadSelectStatementContext {
		return this.getRuleContext(0, HeadSelectStatementContext);
	}
	public fromSelectStatement(): FromSelectStatementContext {
		return this.getRuleContext(0, FromSelectStatementContext);
	}
	public whereStatement(): WhereStatementContext | undefined {
		return this.tryGetRuleContext(0, WhereStatementContext);
	}
	public groupByStatement(): GroupByStatementContext | undefined {
		return this.tryGetRuleContext(0, GroupByStatementContext);
	}
	public havingStatement(): HavingStatementContext | undefined {
		return this.tryGetRuleContext(0, HavingStatementContext);
	}
	public unionSelectStatement(): UnionSelectStatementContext | undefined {
		return this.tryGetRuleContext(0, UnionSelectStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_simpleSelectStatement; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterSimpleSelectStatement) {
			listener.enterSimpleSelectStatement(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitSimpleSelectStatement) {
			listener.exitSimpleSelectStatement(this);
		}
	}
}


export class WhereStatementContext extends ParserRuleContext {
	public WHERE(): TerminalNode { return this.getToken(informixParser.WHERE, 0); }
	public condition(): ConditionContext {
		return this.getRuleContext(0, ConditionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_whereStatement; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterWhereStatement) {
			listener.enterWhereStatement(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitWhereStatement) {
			listener.exitWhereStatement(this);
		}
	}
}


export class GroupByStatementContext extends ParserRuleContext {
	public GROUP(): TerminalNode { return this.getToken(informixParser.GROUP, 0); }
	public BY(): TerminalNode { return this.getToken(informixParser.BY, 0); }
	public variableOrConstantList(): VariableOrConstantListContext {
		return this.getRuleContext(0, VariableOrConstantListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_groupByStatement; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterGroupByStatement) {
			listener.enterGroupByStatement(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitGroupByStatement) {
			listener.exitGroupByStatement(this);
		}
	}
}


export class HavingStatementContext extends ParserRuleContext {
	public HAVING(): TerminalNode { return this.getToken(informixParser.HAVING, 0); }
	public condition(): ConditionContext {
		return this.getRuleContext(0, ConditionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_havingStatement; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterHavingStatement) {
			listener.enterHavingStatement(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitHavingStatement) {
			listener.exitHavingStatement(this);
		}
	}
}


export class OrderbyColumnContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public ASC(): TerminalNode | undefined { return this.tryGetToken(informixParser.ASC, 0); }
	public DESC(): TerminalNode | undefined { return this.tryGetToken(informixParser.DESC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_orderbyColumn; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterOrderbyColumn) {
			listener.enterOrderbyColumn(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitOrderbyColumn) {
			listener.exitOrderbyColumn(this);
		}
	}
}


export class OrderbyStatementContext extends ParserRuleContext {
	public ORDER(): TerminalNode { return this.getToken(informixParser.ORDER, 0); }
	public BY(): TerminalNode { return this.getToken(informixParser.BY, 0); }
	public orderbyColumn(): OrderbyColumnContext[];
	public orderbyColumn(i: number): OrderbyColumnContext;
	public orderbyColumn(i?: number): OrderbyColumnContext | OrderbyColumnContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OrderbyColumnContext);
		} else {
			return this.getRuleContext(i, OrderbyColumnContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.COMMA);
		} else {
			return this.getToken(informixParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_orderbyStatement; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterOrderbyStatement) {
			listener.enterOrderbyStatement(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitOrderbyStatement) {
			listener.exitOrderbyStatement(this);
		}
	}
}


export class SqlLoadStatementContext extends ParserRuleContext {
	public LOAD(): TerminalNode { return this.getToken(informixParser.LOAD, 0); }
	public FROM(): TerminalNode { return this.getToken(informixParser.FROM, 0); }
	public eol(): EolContext {
		return this.getRuleContext(0, EolContext);
	}
	public variable(): VariableContext[];
	public variable(i: number): VariableContext;
	public variable(i?: number): VariableContext | VariableContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableContext);
		} else {
			return this.getRuleContext(i, VariableContext);
		}
	}
	public string(): StringContext[];
	public string(i: number): StringContext;
	public string(i?: number): StringContext | StringContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StringContext);
		} else {
			return this.getRuleContext(i, StringContext);
		}
	}
	public INSERT(): TerminalNode | undefined { return this.tryGetToken(informixParser.INSERT, 0); }
	public INTO(): TerminalNode | undefined { return this.tryGetToken(informixParser.INTO, 0); }
	public tableIdentifier(): TableIdentifierContext | undefined {
		return this.tryGetRuleContext(0, TableIdentifierContext);
	}
	public sqlInsertStatement(): SqlInsertStatementContext | undefined {
		return this.tryGetRuleContext(0, SqlInsertStatementContext);
	}
	public DELIMITER(): TerminalNode | undefined { return this.tryGetToken(informixParser.DELIMITER, 0); }
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(informixParser.LPAREN, 0); }
	public columnsList(): ColumnsListContext | undefined {
		return this.tryGetRuleContext(0, ColumnsListContext);
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(informixParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_sqlLoadStatement; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterSqlLoadStatement) {
			listener.enterSqlLoadStatement(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitSqlLoadStatement) {
			listener.exitSqlLoadStatement(this);
		}
	}
}


export class SqlUnLoadStatementContext extends ParserRuleContext {
	public UNLOAD(): TerminalNode { return this.getToken(informixParser.UNLOAD, 0); }
	public TO(): TerminalNode { return this.getToken(informixParser.TO, 0); }
	public sqlSelectStatement(): SqlSelectStatementContext {
		return this.getRuleContext(0, SqlSelectStatementContext);
	}
	public eol(): EolContext {
		return this.getRuleContext(0, EolContext);
	}
	public variable(): VariableContext[];
	public variable(i: number): VariableContext;
	public variable(i?: number): VariableContext | VariableContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableContext);
		} else {
			return this.getRuleContext(i, VariableContext);
		}
	}
	public string(): StringContext[];
	public string(i: number): StringContext;
	public string(i?: number): StringContext | StringContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StringContext);
		} else {
			return this.getRuleContext(i, StringContext);
		}
	}
	public DELIMITER(): TerminalNode | undefined { return this.tryGetToken(informixParser.DELIMITER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_sqlUnLoadStatement; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterSqlUnLoadStatement) {
			listener.enterSqlUnLoadStatement(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitSqlUnLoadStatement) {
			listener.exitSqlUnLoadStatement(this);
		}
	}
}


export class SqlInsertStatementContext extends ParserRuleContext {
	public INSERT(): TerminalNode { return this.getToken(informixParser.INSERT, 0); }
	public INTO(): TerminalNode { return this.getToken(informixParser.INTO, 0); }
	public tableIdentifier(): TableIdentifierContext {
		return this.getRuleContext(0, TableIdentifierContext);
	}
	public VALUES(): TerminalNode | undefined { return this.tryGetToken(informixParser.VALUES, 0); }
	public LPAREN(): TerminalNode[];
	public LPAREN(i: number): TerminalNode;
	public LPAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.LPAREN);
		} else {
			return this.getToken(informixParser.LPAREN, i);
		}
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public RPAREN(): TerminalNode[];
	public RPAREN(i: number): TerminalNode;
	public RPAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.RPAREN);
		} else {
			return this.getToken(informixParser.RPAREN, i);
		}
	}
	public simpleSelectStatement(): SimpleSelectStatementContext | undefined {
		return this.tryGetRuleContext(0, SimpleSelectStatementContext);
	}
	public columnsList(): ColumnsListContext | undefined {
		return this.tryGetRuleContext(0, ColumnsListContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.COMMA);
		} else {
			return this.getToken(informixParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_sqlInsertStatement; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterSqlInsertStatement) {
			listener.enterSqlInsertStatement(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitSqlInsertStatement) {
			listener.exitSqlInsertStatement(this);
		}
	}
}


export class SqlUpdateStatementContext extends ParserRuleContext {
	public UPDATE(): TerminalNode { return this.getToken(informixParser.UPDATE, 0); }
	public tableIdentifier(): TableIdentifierContext {
		return this.getRuleContext(0, TableIdentifierContext);
	}
	public SET(): TerminalNode { return this.getToken(informixParser.SET, 0); }
	public WHERE(): TerminalNode | undefined { return this.tryGetToken(informixParser.WHERE, 0); }
	public columnsTableId(): ColumnsTableIdContext[];
	public columnsTableId(i: number): ColumnsTableIdContext;
	public columnsTableId(i?: number): ColumnsTableIdContext | ColumnsTableIdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ColumnsTableIdContext);
		} else {
			return this.getRuleContext(i, ColumnsTableIdContext);
		}
	}
	public EQUAL(): TerminalNode[];
	public EQUAL(i: number): TerminalNode;
	public EQUAL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.EQUAL);
		} else {
			return this.getToken(informixParser.EQUAL, i);
		}
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public condition(): ConditionContext | undefined {
		return this.tryGetRuleContext(0, ConditionContext);
	}
	public CURRENT(): TerminalNode | undefined { return this.tryGetToken(informixParser.CURRENT, 0); }
	public OF(): TerminalNode | undefined { return this.tryGetToken(informixParser.OF, 0); }
	public cursorName(): CursorNameContext | undefined {
		return this.tryGetRuleContext(0, CursorNameContext);
	}
	public LPAREN(): TerminalNode[];
	public LPAREN(i: number): TerminalNode;
	public LPAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.LPAREN);
		} else {
			return this.getToken(informixParser.LPAREN, i);
		}
	}
	public columnsList(): ColumnsListContext | undefined {
		return this.tryGetRuleContext(0, ColumnsListContext);
	}
	public RPAREN(): TerminalNode[];
	public RPAREN(i: number): TerminalNode;
	public RPAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.RPAREN);
		} else {
			return this.getToken(informixParser.RPAREN, i);
		}
	}
	public STAR(): TerminalNode[];
	public STAR(i: number): TerminalNode;
	public STAR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.STAR);
		} else {
			return this.getToken(informixParser.STAR, i);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.COMMA);
		} else {
			return this.getToken(informixParser.COMMA, i);
		}
	}
	public aliasName(): AliasNameContext[];
	public aliasName(i: number): AliasNameContext;
	public aliasName(i?: number): AliasNameContext | AliasNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AliasNameContext);
		} else {
			return this.getRuleContext(i, AliasNameContext);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.DOT);
		} else {
			return this.getToken(informixParser.DOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_sqlUpdateStatement; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterSqlUpdateStatement) {
			listener.enterSqlUpdateStatement(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitSqlUpdateStatement) {
			listener.exitSqlUpdateStatement(this);
		}
	}
}


export class SqlDeleteStatementContext extends ParserRuleContext {
	public DELETE(): TerminalNode { return this.getToken(informixParser.DELETE, 0); }
	public FROM(): TerminalNode { return this.getToken(informixParser.FROM, 0); }
	public tableIdentifier(): TableIdentifierContext {
		return this.getRuleContext(0, TableIdentifierContext);
	}
	public eol(): EolContext {
		return this.getRuleContext(0, EolContext);
	}
	public WHERE(): TerminalNode | undefined { return this.tryGetToken(informixParser.WHERE, 0); }
	public condition(): ConditionContext | undefined {
		return this.tryGetRuleContext(0, ConditionContext);
	}
	public CURRENT(): TerminalNode | undefined { return this.tryGetToken(informixParser.CURRENT, 0); }
	public OF(): TerminalNode | undefined { return this.tryGetToken(informixParser.OF, 0); }
	public cursorName(): CursorNameContext | undefined {
		return this.tryGetRuleContext(0, CursorNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_sqlDeleteStatement; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterSqlDeleteStatement) {
			listener.enterSqlDeleteStatement(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitSqlDeleteStatement) {
			listener.exitSqlDeleteStatement(this);
		}
	}
}


export class ActualParameterListContext extends ParserRuleContext {
	public actualParameter(): ActualParameterContext[];
	public actualParameter(i: number): ActualParameterContext;
	public actualParameter(i?: number): ActualParameterContext | ActualParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ActualParameterContext);
		} else {
			return this.getRuleContext(i, ActualParameterContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.COMMA);
		} else {
			return this.getToken(informixParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_actualParameterList; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterActualParameterList) {
			listener.enterActualParameterList(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitActualParameterList) {
			listener.exitActualParameterList(this);
		}
	}
}


export class DynamicManagementStatementContext extends ParserRuleContext {
	public PREPARE(): TerminalNode | undefined { return this.tryGetToken(informixParser.PREPARE, 0); }
	public cursorName(): CursorNameContext | undefined {
		return this.tryGetRuleContext(0, CursorNameContext);
	}
	public FROM(): TerminalNode | undefined { return this.tryGetToken(informixParser.FROM, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public EXECUTE(): TerminalNode | undefined { return this.tryGetToken(informixParser.EXECUTE, 0); }
	public USING(): TerminalNode | undefined { return this.tryGetToken(informixParser.USING, 0); }
	public variableList(): VariableListContext | undefined {
		return this.tryGetRuleContext(0, VariableListContext);
	}
	public FREE(): TerminalNode | undefined { return this.tryGetToken(informixParser.FREE, 0); }
	public statementId(): StatementIdContext | undefined {
		return this.tryGetRuleContext(0, StatementIdContext);
	}
	public LOCK(): TerminalNode | undefined { return this.tryGetToken(informixParser.LOCK, 0); }
	public TABLE(): TerminalNode | undefined { return this.tryGetToken(informixParser.TABLE, 0); }
	public IN(): TerminalNode | undefined { return this.tryGetToken(informixParser.IN, 0); }
	public MODE(): TerminalNode | undefined { return this.tryGetToken(informixParser.MODE, 0); }
	public SHARE(): TerminalNode | undefined { return this.tryGetToken(informixParser.SHARE, 0); }
	public EXCLUSIVE(): TerminalNode | undefined { return this.tryGetToken(informixParser.EXCLUSIVE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_dynamicManagementStatement; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterDynamicManagementStatement) {
			listener.enterDynamicManagementStatement(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitDynamicManagementStatement) {
			listener.exitDynamicManagementStatement(this);
		}
	}
}


export class QueryOptimizationStatementContext extends ParserRuleContext {
	public UPDATE(): TerminalNode | undefined { return this.tryGetToken(informixParser.UPDATE, 0); }
	public STATISTICS(): TerminalNode | undefined { return this.tryGetToken(informixParser.STATISTICS, 0); }
	public FOR(): TerminalNode | undefined { return this.tryGetToken(informixParser.FOR, 0); }
	public TABLE(): TerminalNode | undefined { return this.tryGetToken(informixParser.TABLE, 0); }
	public tableIdentifier(): TableIdentifierContext | undefined {
		return this.tryGetRuleContext(0, TableIdentifierContext);
	}
	public SET(): TerminalNode | undefined { return this.tryGetToken(informixParser.SET, 0); }
	public LOCK(): TerminalNode | undefined { return this.tryGetToken(informixParser.LOCK, 0); }
	public MODE(): TerminalNode | undefined { return this.tryGetToken(informixParser.MODE, 0); }
	public TO(): TerminalNode | undefined { return this.tryGetToken(informixParser.TO, 0); }
	public WAIT(): TerminalNode | undefined { return this.tryGetToken(informixParser.WAIT, 0); }
	public NOT(): TerminalNode | undefined { return this.tryGetToken(informixParser.NOT, 0); }
	public SECONDS(): TerminalNode | undefined { return this.tryGetToken(informixParser.SECONDS, 0); }
	public EXPLAIN(): TerminalNode | undefined { return this.tryGetToken(informixParser.EXPLAIN, 0); }
	public ON(): TerminalNode | undefined { return this.tryGetToken(informixParser.ON, 0); }
	public OFF(): TerminalNode | undefined { return this.tryGetToken(informixParser.OFF, 0); }
	public ISOLATION(): TerminalNode | undefined { return this.tryGetToken(informixParser.ISOLATION, 0); }
	public CURSOR(): TerminalNode | undefined { return this.tryGetToken(informixParser.CURSOR, 0); }
	public STABILITY(): TerminalNode | undefined { return this.tryGetToken(informixParser.STABILITY, 0); }
	public READ(): TerminalNode | undefined { return this.tryGetToken(informixParser.READ, 0); }
	public DIRTY(): TerminalNode | undefined { return this.tryGetToken(informixParser.DIRTY, 0); }
	public COMMITTED(): TerminalNode | undefined { return this.tryGetToken(informixParser.COMMITTED, 0); }
	public REPEATABLE(): TerminalNode | undefined { return this.tryGetToken(informixParser.REPEATABLE, 0); }
	public LOG(): TerminalNode | undefined { return this.tryGetToken(informixParser.LOG, 0); }
	public BUFFERED(): TerminalNode | undefined { return this.tryGetToken(informixParser.BUFFERED, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_queryOptimizationStatement; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterQueryOptimizationStatement) {
			listener.enterQueryOptimizationStatement(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitQueryOptimizationStatement) {
			listener.exitQueryOptimizationStatement(this);
		}
	}
}


export class DatabaseDeclarationContext extends ParserRuleContext {
	public DATABASE(): TerminalNode { return this.getToken(informixParser.DATABASE, 0); }
	public constantIdentifier(): ConstantIdentifierContext[];
	public constantIdentifier(i: number): ConstantIdentifierContext;
	public constantIdentifier(i?: number): ConstantIdentifierContext | ConstantIdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConstantIdentifierContext);
		} else {
			return this.getRuleContext(i, ConstantIdentifierContext);
		}
	}
	public EXCLUSIVE(): TerminalNode | undefined { return this.tryGetToken(informixParser.EXCLUSIVE, 0); }
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(informixParser.SEMI, 0); }
	public ATSYMBOL(): TerminalNode | undefined { return this.tryGetToken(informixParser.ATSYMBOL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_databaseDeclaration; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterDatabaseDeclaration) {
			listener.enterDatabaseDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitDatabaseDeclaration) {
			listener.exitDatabaseDeclaration(this);
		}
	}
}


export class ClientServerStatementContext extends ParserRuleContext {
	public CLOSE(): TerminalNode { return this.getToken(informixParser.CLOSE, 0); }
	public DATABASE(): TerminalNode { return this.getToken(informixParser.DATABASE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_clientServerStatement; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterClientServerStatement) {
			listener.enterClientServerStatement(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitClientServerStatement) {
			listener.exitClientServerStatement(this);
		}
	}
}


export class DataIntegrityStatementContext extends ParserRuleContext {
	public wheneverStatement(): WheneverStatementContext | undefined {
		return this.tryGetRuleContext(0, WheneverStatementContext);
	}
	public BEGIN(): TerminalNode | undefined { return this.tryGetToken(informixParser.BEGIN, 0); }
	public WORK(): TerminalNode | undefined { return this.tryGetToken(informixParser.WORK, 0); }
	public COMMIT(): TerminalNode | undefined { return this.tryGetToken(informixParser.COMMIT, 0); }
	public ROLLBACK(): TerminalNode | undefined { return this.tryGetToken(informixParser.ROLLBACK, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_dataIntegrityStatement; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterDataIntegrityStatement) {
			listener.enterDataIntegrityStatement(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitDataIntegrityStatement) {
			listener.exitDataIntegrityStatement(this);
		}
	}
}


export class WheneverStatementContext extends ParserRuleContext {
	public WHENEVER(): TerminalNode { return this.getToken(informixParser.WHENEVER, 0); }
	public wheneverType(): WheneverTypeContext {
		return this.getRuleContext(0, WheneverTypeContext);
	}
	public wheneverFlow(): WheneverFlowContext {
		return this.getRuleContext(0, WheneverFlowContext);
	}
	public eol(): EolContext {
		return this.getRuleContext(0, EolContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_wheneverStatement; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterWheneverStatement) {
			listener.enterWheneverStatement(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitWheneverStatement) {
			listener.exitWheneverStatement(this);
		}
	}
}


export class WheneverTypeContext extends ParserRuleContext {
	public NOT(): TerminalNode | undefined { return this.tryGetToken(informixParser.NOT, 0); }
	public FOUND(): TerminalNode | undefined { return this.tryGetToken(informixParser.FOUND, 0); }
	public SQLERROR(): TerminalNode | undefined { return this.tryGetToken(informixParser.SQLERROR, 0); }
	public ERROR(): TerminalNode | undefined { return this.tryGetToken(informixParser.ERROR, 0); }
	public ANY(): TerminalNode | undefined { return this.tryGetToken(informixParser.ANY, 0); }
	public SQLWARNING(): TerminalNode | undefined { return this.tryGetToken(informixParser.SQLWARNING, 0); }
	public WARNING(): TerminalNode | undefined { return this.tryGetToken(informixParser.WARNING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_wheneverType; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterWheneverType) {
			listener.enterWheneverType(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitWheneverType) {
			listener.exitWheneverType(this);
		}
	}
}


export class WheneverFlowContext extends ParserRuleContext {
	public CONTINUE(): TerminalNode | undefined { return this.tryGetToken(informixParser.CONTINUE, 0); }
	public STOP(): TerminalNode | undefined { return this.tryGetToken(informixParser.STOP, 0); }
	public CALL(): TerminalNode | undefined { return this.tryGetToken(informixParser.CALL, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public GO(): TerminalNode | undefined { return this.tryGetToken(informixParser.GO, 0); }
	public TO(): TerminalNode | undefined { return this.tryGetToken(informixParser.TO, 0); }
	public GOTO(): TerminalNode | undefined { return this.tryGetToken(informixParser.GOTO, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(informixParser.COLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_wheneverFlow; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterWheneverFlow) {
			listener.enterWheneverFlow(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitWheneverFlow) {
			listener.exitWheneverFlow(this);
		}
	}
}


export class ReportDefinitionContext extends ParserRuleContext {
	public REPORT(): TerminalNode[];
	public REPORT(i: number): TerminalNode;
	public REPORT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.REPORT);
		} else {
			return this.getToken(informixParser.REPORT, i);
		}
	}
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public END(): TerminalNode { return this.getToken(informixParser.END, 0); }
	public parameterList(): ParameterListContext | undefined {
		return this.tryGetRuleContext(0, ParameterListContext);
	}
	public typeDeclarations(): TypeDeclarationsContext | undefined {
		return this.tryGetRuleContext(0, TypeDeclarationsContext);
	}
	public outputReport(): OutputReportContext | undefined {
		return this.tryGetRuleContext(0, OutputReportContext);
	}
	public ORDER(): TerminalNode | undefined { return this.tryGetToken(informixParser.ORDER, 0); }
	public BY(): TerminalNode | undefined { return this.tryGetToken(informixParser.BY, 0); }
	public variableList(): VariableListContext | undefined {
		return this.tryGetRuleContext(0, VariableListContext);
	}
	public formatReport(): FormatReportContext | undefined {
		return this.tryGetRuleContext(0, FormatReportContext);
	}
	public EXTERNAL(): TerminalNode | undefined { return this.tryGetToken(informixParser.EXTERNAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_reportDefinition; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterReportDefinition) {
			listener.enterReportDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitReportDefinition) {
			listener.exitReportDefinition(this);
		}
	}
}


export class OutputReportContext extends ParserRuleContext {
	public OUTPUT(): TerminalNode { return this.getToken(informixParser.OUTPUT, 0); }
	public REPORT(): TerminalNode | undefined { return this.tryGetToken(informixParser.REPORT, 0); }
	public TO(): TerminalNode | undefined { return this.tryGetToken(informixParser.TO, 0); }
	public string(): StringContext[];
	public string(i: number): StringContext;
	public string(i?: number): StringContext | StringContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StringContext);
		} else {
			return this.getRuleContext(i, StringContext);
		}
	}
	public PIPE(): TerminalNode | undefined { return this.tryGetToken(informixParser.PIPE, 0); }
	public PRINTER(): TerminalNode | undefined { return this.tryGetToken(informixParser.PRINTER, 0); }
	public LEFT(): TerminalNode[];
	public LEFT(i: number): TerminalNode;
	public LEFT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.LEFT);
		} else {
			return this.getToken(informixParser.LEFT, i);
		}
	}
	public MARGIN(): TerminalNode[];
	public MARGIN(i: number): TerminalNode;
	public MARGIN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.MARGIN);
		} else {
			return this.getToken(informixParser.MARGIN, i);
		}
	}
	public numericConstant(): NumericConstantContext[];
	public numericConstant(i: number): NumericConstantContext;
	public numericConstant(i?: number): NumericConstantContext | NumericConstantContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NumericConstantContext);
		} else {
			return this.getRuleContext(i, NumericConstantContext);
		}
	}
	public RIGHT(): TerminalNode[];
	public RIGHT(i: number): TerminalNode;
	public RIGHT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.RIGHT);
		} else {
			return this.getToken(informixParser.RIGHT, i);
		}
	}
	public TOP(): TerminalNode[];
	public TOP(i: number): TerminalNode;
	public TOP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.TOP);
		} else {
			return this.getToken(informixParser.TOP, i);
		}
	}
	public BOTTOM(): TerminalNode[];
	public BOTTOM(i: number): TerminalNode;
	public BOTTOM(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.BOTTOM);
		} else {
			return this.getToken(informixParser.BOTTOM, i);
		}
	}
	public PAGE(): TerminalNode[];
	public PAGE(i: number): TerminalNode;
	public PAGE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.PAGE);
		} else {
			return this.getToken(informixParser.PAGE, i);
		}
	}
	public LENGTH(): TerminalNode[];
	public LENGTH(i: number): TerminalNode;
	public LENGTH(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.LENGTH);
		} else {
			return this.getToken(informixParser.LENGTH, i);
		}
	}
	public OF(): TerminalNode[];
	public OF(i: number): TerminalNode;
	public OF(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.OF);
		} else {
			return this.getToken(informixParser.OF, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_outputReport; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterOutputReport) {
			listener.enterOutputReport(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitOutputReport) {
			listener.exitOutputReport(this);
		}
	}
}


export class FormatReportContext extends ParserRuleContext {
	public FORMAT(): TerminalNode { return this.getToken(informixParser.FORMAT, 0); }
	public EVERY(): TerminalNode[];
	public EVERY(i: number): TerminalNode;
	public EVERY(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.EVERY);
		} else {
			return this.getToken(informixParser.EVERY, i);
		}
	}
	public ROW(): TerminalNode[];
	public ROW(i: number): TerminalNode;
	public ROW(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.ROW);
		} else {
			return this.getToken(informixParser.ROW, i);
		}
	}
	public codeBlock(): CodeBlockContext[];
	public codeBlock(i: number): CodeBlockContext;
	public codeBlock(i?: number): CodeBlockContext | CodeBlockContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CodeBlockContext);
		} else {
			return this.getRuleContext(i, CodeBlockContext);
		}
	}
	public PAGE(): TerminalNode[];
	public PAGE(i: number): TerminalNode;
	public PAGE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.PAGE);
		} else {
			return this.getToken(informixParser.PAGE, i);
		}
	}
	public HEADER(): TerminalNode[];
	public HEADER(i: number): TerminalNode;
	public HEADER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.HEADER);
		} else {
			return this.getToken(informixParser.HEADER, i);
		}
	}
	public TRAILER(): TerminalNode[];
	public TRAILER(i: number): TerminalNode;
	public TRAILER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.TRAILER);
		} else {
			return this.getToken(informixParser.TRAILER, i);
		}
	}
	public ON(): TerminalNode[];
	public ON(i: number): TerminalNode;
	public ON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.ON);
		} else {
			return this.getToken(informixParser.ON, i);
		}
	}
	public GROUP(): TerminalNode[];
	public GROUP(i: number): TerminalNode;
	public GROUP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.GROUP);
		} else {
			return this.getToken(informixParser.GROUP, i);
		}
	}
	public OF(): TerminalNode[];
	public OF(i: number): TerminalNode;
	public OF(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.OF);
		} else {
			return this.getToken(informixParser.OF, i);
		}
	}
	public variable(): VariableContext[];
	public variable(i: number): VariableContext;
	public variable(i?: number): VariableContext | VariableContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableContext);
		} else {
			return this.getRuleContext(i, VariableContext);
		}
	}
	public BEFORE(): TerminalNode[];
	public BEFORE(i: number): TerminalNode;
	public BEFORE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.BEFORE);
		} else {
			return this.getToken(informixParser.BEFORE, i);
		}
	}
	public AFTER(): TerminalNode[];
	public AFTER(i: number): TerminalNode;
	public AFTER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.AFTER);
		} else {
			return this.getToken(informixParser.AFTER, i);
		}
	}
	public LAST(): TerminalNode[];
	public LAST(i: number): TerminalNode;
	public LAST(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.LAST);
		} else {
			return this.getToken(informixParser.LAST, i);
		}
	}
	public FIRST(): TerminalNode[];
	public FIRST(i: number): TerminalNode;
	public FIRST(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(informixParser.FIRST);
		} else {
			return this.getToken(informixParser.FIRST, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_formatReport; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterFormatReport) {
			listener.enterFormatReport(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitFormatReport) {
			listener.exitFormatReport(this);
		}
	}
}


export class EolContext extends ParserRuleContext {
	public EOL(): TerminalNode { return this.getToken(informixParser.EOL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_eol; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterEol) {
			listener.enterEol(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitEol) {
			listener.exitEol(this);
		}
	}
}


export class UnsignedNumberContext extends ParserRuleContext {
	public unsignedInteger(): UnsignedIntegerContext | undefined {
		return this.tryGetRuleContext(0, UnsignedIntegerContext);
	}
	public unsignedReal(): UnsignedRealContext | undefined {
		return this.tryGetRuleContext(0, UnsignedRealContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_unsignedNumber; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterUnsignedNumber) {
			listener.enterUnsignedNumber(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitUnsignedNumber) {
			listener.exitUnsignedNumber(this);
		}
	}
}


export class UnsignedIntegerContext extends ParserRuleContext {
	public NUM_INT(): TerminalNode { return this.getToken(informixParser.NUM_INT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_unsignedInteger; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterUnsignedInteger) {
			listener.enterUnsignedInteger(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitUnsignedInteger) {
			listener.exitUnsignedInteger(this);
		}
	}
}


export class UnsignedRealContext extends ParserRuleContext {
	public NUM_REAL(): TerminalNode { return this.getToken(informixParser.NUM_REAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_unsignedReal; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterUnsignedReal) {
			listener.enterUnsignedReal(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitUnsignedReal) {
			listener.exitUnsignedReal(this);
		}
	}
}


export class SignContext extends ParserRuleContext {
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(informixParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(informixParser.MINUS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_sign; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterSign) {
			listener.enterSign(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitSign) {
			listener.exitSign(this);
		}
	}
}


export class ConstantIdentifierContext extends ParserRuleContext {
	public ACCEPT(): TerminalNode | undefined { return this.tryGetToken(informixParser.ACCEPT, 0); }
	public ASCII(): TerminalNode | undefined { return this.tryGetToken(informixParser.ASCII, 0); }
	public COUNT(): TerminalNode | undefined { return this.tryGetToken(informixParser.COUNT, 0); }
	public CURRENT(): TerminalNode | undefined { return this.tryGetToken(informixParser.CURRENT, 0); }
	public FALSE(): TerminalNode | undefined { return this.tryGetToken(informixParser.FALSE, 0); }
	public FIRST(): TerminalNode | undefined { return this.tryGetToken(informixParser.FIRST, 0); }
	public FOUND(): TerminalNode | undefined { return this.tryGetToken(informixParser.FOUND, 0); }
	public GROUP(): TerminalNode | undefined { return this.tryGetToken(informixParser.GROUP, 0); }
	public HIDE(): TerminalNode | undefined { return this.tryGetToken(informixParser.HIDE, 0); }
	public INDEX(): TerminalNode | undefined { return this.tryGetToken(informixParser.INDEX, 0); }
	public INT_FLAG(): TerminalNode | undefined { return this.tryGetToken(informixParser.INT_FLAG, 0); }
	public INTERRUPT(): TerminalNode | undefined { return this.tryGetToken(informixParser.INTERRUPT, 0); }
	public LAST(): TerminalNode | undefined { return this.tryGetToken(informixParser.LAST, 0); }
	public LENGTH(): TerminalNode | undefined { return this.tryGetToken(informixParser.LENGTH, 0); }
	public LINENO(): TerminalNode | undefined { return this.tryGetToken(informixParser.LINENO, 0); }
	public MDY(): TerminalNode | undefined { return this.tryGetToken(informixParser.MDY, 0); }
	public NO(): TerminalNode | undefined { return this.tryGetToken(informixParser.NO, 0); }
	public NOT(): TerminalNode | undefined { return this.tryGetToken(informixParser.NOT, 0); }
	public NOTFOUND(): TerminalNode | undefined { return this.tryGetToken(informixParser.NOTFOUND, 0); }
	public NULL(): TerminalNode | undefined { return this.tryGetToken(informixParser.NULL, 0); }
	public PAGENO(): TerminalNode | undefined { return this.tryGetToken(informixParser.PAGENO, 0); }
	public REAL(): TerminalNode | undefined { return this.tryGetToken(informixParser.REAL, 0); }
	public SIZE(): TerminalNode | undefined { return this.tryGetToken(informixParser.SIZE, 0); }
	public SQL(): TerminalNode | undefined { return this.tryGetToken(informixParser.SQL, 0); }
	public STATUS(): TerminalNode | undefined { return this.tryGetToken(informixParser.STATUS, 0); }
	public TEMP(): TerminalNode | undefined { return this.tryGetToken(informixParser.TEMP, 0); }
	public TIME(): TerminalNode | undefined { return this.tryGetToken(informixParser.TIME, 0); }
	public TODAY(): TerminalNode | undefined { return this.tryGetToken(informixParser.TODAY, 0); }
	public TRUE(): TerminalNode | undefined { return this.tryGetToken(informixParser.TRUE, 0); }
	public USER(): TerminalNode | undefined { return this.tryGetToken(informixParser.USER, 0); }
	public WAIT(): TerminalNode | undefined { return this.tryGetToken(informixParser.WAIT, 0); }
	public WEEKDAY(): TerminalNode | undefined { return this.tryGetToken(informixParser.WEEKDAY, 0); }
	public WORK(): TerminalNode | undefined { return this.tryGetToken(informixParser.WORK, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return informixParser.RULE_constantIdentifier; }
	// @Override
	public enterRule(listener: informixListener): void {
		if (listener.enterConstantIdentifier) {
			listener.enterConstantIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: informixListener): void {
		if (listener.exitConstantIdentifier) {
			listener.exitConstantIdentifier(this);
		}
	}
}


