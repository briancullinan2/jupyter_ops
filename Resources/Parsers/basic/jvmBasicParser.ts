// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/basic/jvmBasic.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { jvmBasicListener } from "./jvmBasicListener";

export class jvmBasicParser extends Parser {
	public static readonly DOLLAR = 1;
	public static readonly PERCENT = 2;
	public static readonly RETURN = 3;
	public static readonly PRINT = 4;
	public static readonly GOTO = 5;
	public static readonly GOSUB = 6;
	public static readonly IF = 7;
	public static readonly NEXT = 8;
	public static readonly THEN = 9;
	public static readonly REM = 10;
	public static readonly CHR = 11;
	public static readonly MID = 12;
	public static readonly LEFT = 13;
	public static readonly RIGHT = 14;
	public static readonly STR = 15;
	public static readonly LPAREN = 16;
	public static readonly RPAREN = 17;
	public static readonly PLUS = 18;
	public static readonly MINUS = 19;
	public static readonly TIMES = 20;
	public static readonly DIV = 21;
	public static readonly CLEAR = 22;
	public static readonly GTE = 23;
	public static readonly LTE = 24;
	public static readonly GT = 25;
	public static readonly LT = 26;
	public static readonly COMMA = 27;
	public static readonly LIST = 28;
	public static readonly RUN = 29;
	public static readonly END = 30;
	public static readonly LET = 31;
	public static readonly EQ = 32;
	public static readonly FOR = 33;
	public static readonly TO = 34;
	public static readonly STEP = 35;
	public static readonly INPUT = 36;
	public static readonly SEMICOLON = 37;
	public static readonly DIM = 38;
	public static readonly SQR = 39;
	public static readonly COLON = 40;
	public static readonly TEXT = 41;
	public static readonly HGR = 42;
	public static readonly HGR2 = 43;
	public static readonly LEN = 44;
	public static readonly CALL = 45;
	public static readonly ASC = 46;
	public static readonly HPLOT = 47;
	public static readonly VPLOT = 48;
	public static readonly PRNUMBER = 49;
	public static readonly INNUMBER = 50;
	public static readonly VTAB = 51;
	public static readonly HTAB = 52;
	public static readonly HOME = 53;
	public static readonly ON = 54;
	public static readonly PDL = 55;
	public static readonly PLOT = 56;
	public static readonly PEEK = 57;
	public static readonly POKE = 58;
	public static readonly INTF = 59;
	public static readonly STOP = 60;
	public static readonly HIMEM = 61;
	public static readonly LOMEM = 62;
	public static readonly FLASH = 63;
	public static readonly INVERSE = 64;
	public static readonly NORMAL = 65;
	public static readonly ONERR = 66;
	public static readonly SPC = 67;
	public static readonly FRE = 68;
	public static readonly POS = 69;
	public static readonly USR = 70;
	public static readonly TRACE = 71;
	public static readonly NOTRACE = 72;
	public static readonly AND = 73;
	public static readonly OR = 74;
	public static readonly DATA = 75;
	public static readonly WAIT = 76;
	public static readonly READ = 77;
	public static readonly XDRAW = 78;
	public static readonly DRAW = 79;
	public static readonly AT = 80;
	public static readonly DEF = 81;
	public static readonly FN = 82;
	public static readonly VAL = 83;
	public static readonly TAB = 84;
	public static readonly SPEED = 85;
	public static readonly ROT = 86;
	public static readonly SCALE = 87;
	public static readonly COLOR = 88;
	public static readonly HCOLOR = 89;
	public static readonly HLIN = 90;
	public static readonly VLIN = 91;
	public static readonly SCRN = 92;
	public static readonly POP = 93;
	public static readonly SHLOAD = 94;
	public static readonly SIN = 95;
	public static readonly COS = 96;
	public static readonly TAN = 97;
	public static readonly ATN = 98;
	public static readonly RND = 99;
	public static readonly SGN = 100;
	public static readonly EXP = 101;
	public static readonly LOG = 102;
	public static readonly ABS = 103;
	public static readonly STORE = 104;
	public static readonly RECALL = 105;
	public static readonly GET = 106;
	public static readonly EXPONENT = 107;
	public static readonly AMPERSAND = 108;
	public static readonly GR = 109;
	public static readonly NOT = 110;
	public static readonly RESTORE = 111;
	public static readonly SAVE = 112;
	public static readonly LOAD = 113;
	public static readonly QUESTION = 114;
	public static readonly INCLUDE = 115;
	public static readonly CLS = 116;
	public static readonly COMMENT = 117;
	public static readonly STRINGLITERAL = 118;
	public static readonly LETTERS = 119;
	public static readonly NUMBER = 120;
	public static readonly FLOAT = 121;
	public static readonly WS = 122;
	public static readonly RULE_prog = 0;
	public static readonly RULE_line = 1;
	public static readonly RULE_amperoper = 2;
	public static readonly RULE_linenumber = 3;
	public static readonly RULE_amprstmt = 4;
	public static readonly RULE_statement = 5;
	public static readonly RULE_vardecl = 6;
	public static readonly RULE_printstmt1 = 7;
	public static readonly RULE_printlist = 8;
	public static readonly RULE_getstmt = 9;
	public static readonly RULE_letstmt = 10;
	public static readonly RULE_variableassignment = 11;
	public static readonly RULE_relop = 12;
	public static readonly RULE_neq = 13;
	public static readonly RULE_ifstmt = 14;
	public static readonly RULE_forstmt1 = 15;
	public static readonly RULE_forstmt2 = 16;
	public static readonly RULE_nextstmt = 17;
	public static readonly RULE_inputstmt = 18;
	public static readonly RULE_readstmt = 19;
	public static readonly RULE_dimstmt = 20;
	public static readonly RULE_gotostmt = 21;
	public static readonly RULE_gosubstmt = 22;
	public static readonly RULE_pokestmt = 23;
	public static readonly RULE_callstmt = 24;
	public static readonly RULE_hplotstmt = 25;
	public static readonly RULE_vplotstmt = 26;
	public static readonly RULE_plotstmt = 27;
	public static readonly RULE_ongotostmt = 28;
	public static readonly RULE_ongosubstmt = 29;
	public static readonly RULE_vtabstmnt = 30;
	public static readonly RULE_htabstmnt = 31;
	public static readonly RULE_himemstmt = 32;
	public static readonly RULE_lomemstmt = 33;
	public static readonly RULE_datastmt = 34;
	public static readonly RULE_datum = 35;
	public static readonly RULE_waitstmt = 36;
	public static readonly RULE_xdrawstmt = 37;
	public static readonly RULE_drawstmt = 38;
	public static readonly RULE_defstmt = 39;
	public static readonly RULE_tabstmt = 40;
	public static readonly RULE_speedstmt = 41;
	public static readonly RULE_rotstmt = 42;
	public static readonly RULE_scalestmt = 43;
	public static readonly RULE_colorstmt = 44;
	public static readonly RULE_hcolorstmt = 45;
	public static readonly RULE_hlinstmt = 46;
	public static readonly RULE_vlinstmt = 47;
	public static readonly RULE_onerrstmt = 48;
	public static readonly RULE_prstmt = 49;
	public static readonly RULE_instmt = 50;
	public static readonly RULE_storestmt = 51;
	public static readonly RULE_recallstmt = 52;
	public static readonly RULE_liststmt = 53;
	public static readonly RULE_popstmt = 54;
	public static readonly RULE_amptstmt = 55;
	public static readonly RULE_includestmt = 56;
	public static readonly RULE_endstmt = 57;
	public static readonly RULE_returnstmt = 58;
	public static readonly RULE_restorestmt = 59;
	public static readonly RULE_number = 60;
	public static readonly RULE_func = 61;
	public static readonly RULE_signExpression = 62;
	public static readonly RULE_exponentExpression = 63;
	public static readonly RULE_multiplyingExpression = 64;
	public static readonly RULE_addingExpression = 65;
	public static readonly RULE_relationalExpression = 66;
	public static readonly RULE_expression = 67;
	public static readonly RULE_var = 68;
	public static readonly RULE_varname = 69;
	public static readonly RULE_varsuffix = 70;
	public static readonly RULE_varlist = 71;
	public static readonly RULE_exprlist = 72;
	public static readonly RULE_sqrfunc = 73;
	public static readonly RULE_chrfunc = 74;
	public static readonly RULE_lenfunc = 75;
	public static readonly RULE_ascfunc = 76;
	public static readonly RULE_midfunc = 77;
	public static readonly RULE_pdlfunc = 78;
	public static readonly RULE_peekfunc = 79;
	public static readonly RULE_intfunc = 80;
	public static readonly RULE_spcfunc = 81;
	public static readonly RULE_frefunc = 82;
	public static readonly RULE_posfunc = 83;
	public static readonly RULE_usrfunc = 84;
	public static readonly RULE_leftfunc = 85;
	public static readonly RULE_rightfunc = 86;
	public static readonly RULE_strfunc = 87;
	public static readonly RULE_fnfunc = 88;
	public static readonly RULE_valfunc = 89;
	public static readonly RULE_scrnfunc = 90;
	public static readonly RULE_sinfunc = 91;
	public static readonly RULE_cosfunc = 92;
	public static readonly RULE_tanfunc = 93;
	public static readonly RULE_atnfunc = 94;
	public static readonly RULE_rndfunc = 95;
	public static readonly RULE_sgnfunc = 96;
	public static readonly RULE_expfunc = 97;
	public static readonly RULE_logfunc = 98;
	public static readonly RULE_absfunc = 99;
	public static readonly RULE_tabfunc = 100;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"prog", "line", "amperoper", "linenumber", "amprstmt", "statement", "vardecl", 
		"printstmt1", "printlist", "getstmt", "letstmt", "variableassignment", 
		"relop", "neq", "ifstmt", "forstmt1", "forstmt2", "nextstmt", "inputstmt", 
		"readstmt", "dimstmt", "gotostmt", "gosubstmt", "pokestmt", "callstmt", 
		"hplotstmt", "vplotstmt", "plotstmt", "ongotostmt", "ongosubstmt", "vtabstmnt", 
		"htabstmnt", "himemstmt", "lomemstmt", "datastmt", "datum", "waitstmt", 
		"xdrawstmt", "drawstmt", "defstmt", "tabstmt", "speedstmt", "rotstmt", 
		"scalestmt", "colorstmt", "hcolorstmt", "hlinstmt", "vlinstmt", "onerrstmt", 
		"prstmt", "instmt", "storestmt", "recallstmt", "liststmt", "popstmt", 
		"amptstmt", "includestmt", "endstmt", "returnstmt", "restorestmt", "number", 
		"func", "signExpression", "exponentExpression", "multiplyingExpression", 
		"addingExpression", "relationalExpression", "expression", "var", "varname", 
		"varsuffix", "varlist", "exprlist", "sqrfunc", "chrfunc", "lenfunc", "ascfunc", 
		"midfunc", "pdlfunc", "peekfunc", "intfunc", "spcfunc", "frefunc", "posfunc", 
		"usrfunc", "leftfunc", "rightfunc", "strfunc", "fnfunc", "valfunc", "scrnfunc", 
		"sinfunc", "cosfunc", "tanfunc", "atnfunc", "rndfunc", "sgnfunc", "expfunc", 
		"logfunc", "absfunc", "tabfunc",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'$'", "'%'", undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "'CHR$'", "'MID$'", "'LEFT$'", "'RIGHT$'", 
		"'STR$'", "'('", "')'", "'+'", "'-'", "'*'", "'/'", undefined, "'>: '", 
		"'<: '", "'>'", "'<'", "','", undefined, undefined, undefined, undefined, 
		"'='", undefined, undefined, undefined, undefined, "';'", undefined, undefined, 
		"':'", undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, "'PR#'", "'IN#'", undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, "'^'", "'&'", undefined, undefined, 
		undefined, undefined, undefined, "'?'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "DOLLAR", "PERCENT", "RETURN", "PRINT", "GOTO", "GOSUB", "IF", 
		"NEXT", "THEN", "REM", "CHR", "MID", "LEFT", "RIGHT", "STR", "LPAREN", 
		"RPAREN", "PLUS", "MINUS", "TIMES", "DIV", "CLEAR", "GTE", "LTE", "GT", 
		"LT", "COMMA", "LIST", "RUN", "END", "LET", "EQ", "FOR", "TO", "STEP", 
		"INPUT", "SEMICOLON", "DIM", "SQR", "COLON", "TEXT", "HGR", "HGR2", "LEN", 
		"CALL", "ASC", "HPLOT", "VPLOT", "PRNUMBER", "INNUMBER", "VTAB", "HTAB", 
		"HOME", "ON", "PDL", "PLOT", "PEEK", "POKE", "INTF", "STOP", "HIMEM", 
		"LOMEM", "FLASH", "INVERSE", "NORMAL", "ONERR", "SPC", "FRE", "POS", "USR", 
		"TRACE", "NOTRACE", "AND", "OR", "DATA", "WAIT", "READ", "XDRAW", "DRAW", 
		"AT", "DEF", "FN", "VAL", "TAB", "SPEED", "ROT", "SCALE", "COLOR", "HCOLOR", 
		"HLIN", "VLIN", "SCRN", "POP", "SHLOAD", "SIN", "COS", "TAN", "ATN", "RND", 
		"SGN", "EXP", "LOG", "ABS", "STORE", "RECALL", "GET", "EXPONENT", "AMPERSAND", 
		"GR", "NOT", "RESTORE", "SAVE", "LOAD", "QUESTION", "INCLUDE", "CLS", 
		"COMMENT", "STRINGLITERAL", "LETTERS", "NUMBER", "FLOAT", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(jvmBasicParser._LITERAL_NAMES, jvmBasicParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return jvmBasicParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "jvmBasic.g4"; }

	// @Override
	public get ruleNames(): string[] { return jvmBasicParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return jvmBasicParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(jvmBasicParser._ATN, this);
	}
	// @RuleVersion(0)
	public prog(): ProgContext {
		let _localctx: ProgContext = new ProgContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, jvmBasicParser.RULE_prog);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 203;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 202;
				this.line();
				}
				}
				this.state = 205;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === jvmBasicParser.NUMBER);
			this.state = 207;
			this.match(jvmBasicParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public line(): LineContext {
		let _localctx: LineContext = new LineContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, jvmBasicParser.RULE_line);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 209;
			this.linenumber();
			this.state = 221;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				{
				{
				this.state = 210;
				this.amprstmt();
				this.state = 217;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === jvmBasicParser.COLON) {
					{
					{
					this.state = 211;
					this.match(jvmBasicParser.COLON);
					this.state = 213;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << jvmBasicParser.RETURN) | (1 << jvmBasicParser.PRINT) | (1 << jvmBasicParser.GOTO) | (1 << jvmBasicParser.GOSUB) | (1 << jvmBasicParser.IF) | (1 << jvmBasicParser.NEXT) | (1 << jvmBasicParser.REM) | (1 << jvmBasicParser.CLEAR) | (1 << jvmBasicParser.LIST) | (1 << jvmBasicParser.RUN) | (1 << jvmBasicParser.END) | (1 << jvmBasicParser.LET))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (jvmBasicParser.FOR - 33)) | (1 << (jvmBasicParser.INPUT - 33)) | (1 << (jvmBasicParser.DIM - 33)) | (1 << (jvmBasicParser.TEXT - 33)) | (1 << (jvmBasicParser.HGR - 33)) | (1 << (jvmBasicParser.HGR2 - 33)) | (1 << (jvmBasicParser.CALL - 33)) | (1 << (jvmBasicParser.HPLOT - 33)) | (1 << (jvmBasicParser.VPLOT - 33)) | (1 << (jvmBasicParser.PRNUMBER - 33)) | (1 << (jvmBasicParser.INNUMBER - 33)) | (1 << (jvmBasicParser.VTAB - 33)) | (1 << (jvmBasicParser.HTAB - 33)) | (1 << (jvmBasicParser.HOME - 33)) | (1 << (jvmBasicParser.ON - 33)) | (1 << (jvmBasicParser.PLOT - 33)) | (1 << (jvmBasicParser.POKE - 33)) | (1 << (jvmBasicParser.STOP - 33)) | (1 << (jvmBasicParser.HIMEM - 33)) | (1 << (jvmBasicParser.LOMEM - 33)) | (1 << (jvmBasicParser.FLASH - 33)) | (1 << (jvmBasicParser.INVERSE - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (jvmBasicParser.NORMAL - 65)) | (1 << (jvmBasicParser.ONERR - 65)) | (1 << (jvmBasicParser.TRACE - 65)) | (1 << (jvmBasicParser.NOTRACE - 65)) | (1 << (jvmBasicParser.DATA - 65)) | (1 << (jvmBasicParser.WAIT - 65)) | (1 << (jvmBasicParser.READ - 65)) | (1 << (jvmBasicParser.XDRAW - 65)) | (1 << (jvmBasicParser.DRAW - 65)) | (1 << (jvmBasicParser.DEF - 65)) | (1 << (jvmBasicParser.TAB - 65)) | (1 << (jvmBasicParser.SPEED - 65)) | (1 << (jvmBasicParser.ROT - 65)) | (1 << (jvmBasicParser.SCALE - 65)) | (1 << (jvmBasicParser.COLOR - 65)) | (1 << (jvmBasicParser.HCOLOR - 65)) | (1 << (jvmBasicParser.HLIN - 65)) | (1 << (jvmBasicParser.VLIN - 65)) | (1 << (jvmBasicParser.POP - 65)) | (1 << (jvmBasicParser.SHLOAD - 65)))) !== 0) || ((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & ((1 << (jvmBasicParser.STORE - 104)) | (1 << (jvmBasicParser.RECALL - 104)) | (1 << (jvmBasicParser.GET - 104)) | (1 << (jvmBasicParser.AMPERSAND - 104)) | (1 << (jvmBasicParser.GR - 104)) | (1 << (jvmBasicParser.RESTORE - 104)) | (1 << (jvmBasicParser.SAVE - 104)) | (1 << (jvmBasicParser.LOAD - 104)) | (1 << (jvmBasicParser.QUESTION - 104)) | (1 << (jvmBasicParser.INCLUDE - 104)) | (1 << (jvmBasicParser.CLS - 104)) | (1 << (jvmBasicParser.COMMENT - 104)) | (1 << (jvmBasicParser.LETTERS - 104)))) !== 0)) {
						{
						this.state = 212;
						this.amprstmt();
						}
					}

					}
					}
					this.state = 219;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				}
				break;

			case 2:
				{
				this.state = 220;
				_la = this._input.LA(1);
				if (!(_la === jvmBasicParser.REM || _la === jvmBasicParser.COMMENT)) {
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
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public amperoper(): AmperoperContext {
		let _localctx: AmperoperContext = new AmperoperContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, jvmBasicParser.RULE_amperoper);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 223;
			this.match(jvmBasicParser.AMPERSAND);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public linenumber(): LinenumberContext {
		let _localctx: LinenumberContext = new LinenumberContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, jvmBasicParser.RULE_linenumber);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 225;
			this.match(jvmBasicParser.NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public amprstmt(): AmprstmtContext {
		let _localctx: AmprstmtContext = new AmprstmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, jvmBasicParser.RULE_amprstmt);
		let _la: number;
		try {
			this.state = 232;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case jvmBasicParser.RETURN:
			case jvmBasicParser.PRINT:
			case jvmBasicParser.GOTO:
			case jvmBasicParser.GOSUB:
			case jvmBasicParser.IF:
			case jvmBasicParser.NEXT:
			case jvmBasicParser.CLEAR:
			case jvmBasicParser.LIST:
			case jvmBasicParser.RUN:
			case jvmBasicParser.END:
			case jvmBasicParser.LET:
			case jvmBasicParser.FOR:
			case jvmBasicParser.INPUT:
			case jvmBasicParser.DIM:
			case jvmBasicParser.TEXT:
			case jvmBasicParser.HGR:
			case jvmBasicParser.HGR2:
			case jvmBasicParser.CALL:
			case jvmBasicParser.HPLOT:
			case jvmBasicParser.VPLOT:
			case jvmBasicParser.PRNUMBER:
			case jvmBasicParser.INNUMBER:
			case jvmBasicParser.VTAB:
			case jvmBasicParser.HTAB:
			case jvmBasicParser.HOME:
			case jvmBasicParser.ON:
			case jvmBasicParser.PLOT:
			case jvmBasicParser.POKE:
			case jvmBasicParser.STOP:
			case jvmBasicParser.HIMEM:
			case jvmBasicParser.LOMEM:
			case jvmBasicParser.FLASH:
			case jvmBasicParser.INVERSE:
			case jvmBasicParser.NORMAL:
			case jvmBasicParser.ONERR:
			case jvmBasicParser.TRACE:
			case jvmBasicParser.NOTRACE:
			case jvmBasicParser.DATA:
			case jvmBasicParser.WAIT:
			case jvmBasicParser.READ:
			case jvmBasicParser.XDRAW:
			case jvmBasicParser.DRAW:
			case jvmBasicParser.DEF:
			case jvmBasicParser.TAB:
			case jvmBasicParser.SPEED:
			case jvmBasicParser.ROT:
			case jvmBasicParser.SCALE:
			case jvmBasicParser.COLOR:
			case jvmBasicParser.HCOLOR:
			case jvmBasicParser.HLIN:
			case jvmBasicParser.VLIN:
			case jvmBasicParser.POP:
			case jvmBasicParser.SHLOAD:
			case jvmBasicParser.STORE:
			case jvmBasicParser.RECALL:
			case jvmBasicParser.GET:
			case jvmBasicParser.AMPERSAND:
			case jvmBasicParser.GR:
			case jvmBasicParser.RESTORE:
			case jvmBasicParser.SAVE:
			case jvmBasicParser.LOAD:
			case jvmBasicParser.QUESTION:
			case jvmBasicParser.INCLUDE:
			case jvmBasicParser.CLS:
			case jvmBasicParser.LETTERS:
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 228;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
				case 1:
					{
					this.state = 227;
					this.amperoper();
					}
					break;
				}
				this.state = 230;
				this.statement();
				}
				}
				break;
			case jvmBasicParser.REM:
			case jvmBasicParser.COMMENT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 231;
				_la = this._input.LA(1);
				if (!(_la === jvmBasicParser.REM || _la === jvmBasicParser.COMMENT)) {
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
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, jvmBasicParser.RULE_statement);
		let _la: number;
		try {
			this.state = 283;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 234;
				_la = this._input.LA(1);
				if (!(_la === jvmBasicParser.CLEAR || _la === jvmBasicParser.RUN || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (jvmBasicParser.TEXT - 41)) | (1 << (jvmBasicParser.HGR - 41)) | (1 << (jvmBasicParser.HGR2 - 41)) | (1 << (jvmBasicParser.HOME - 41)) | (1 << (jvmBasicParser.STOP - 41)) | (1 << (jvmBasicParser.FLASH - 41)) | (1 << (jvmBasicParser.INVERSE - 41)) | (1 << (jvmBasicParser.NORMAL - 41)) | (1 << (jvmBasicParser.TRACE - 41)) | (1 << (jvmBasicParser.NOTRACE - 41)))) !== 0) || ((((_la - 94)) & ~0x1F) === 0 && ((1 << (_la - 94)) & ((1 << (jvmBasicParser.SHLOAD - 94)) | (1 << (jvmBasicParser.GR - 94)) | (1 << (jvmBasicParser.SAVE - 94)) | (1 << (jvmBasicParser.LOAD - 94)) | (1 << (jvmBasicParser.CLS - 94)))) !== 0))) {
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
				this.state = 235;
				this.endstmt();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 236;
				this.returnstmt();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 237;
				this.restorestmt();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 238;
				this.amptstmt();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 239;
				this.popstmt();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 240;
				this.liststmt();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 241;
				this.storestmt();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 242;
				this.getstmt();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 243;
				this.recallstmt();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 244;
				this.nextstmt();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 245;
				this.instmt();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 246;
				this.prstmt();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 247;
				this.onerrstmt();
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 248;
				this.hlinstmt();
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 249;
				this.vlinstmt();
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 250;
				this.colorstmt();
				}
				break;

			case 18:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 251;
				this.speedstmt();
				}
				break;

			case 19:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 252;
				this.scalestmt();
				}
				break;

			case 20:
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 253;
				this.rotstmt();
				}
				break;

			case 21:
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 254;
				this.hcolorstmt();
				}
				break;

			case 22:
				this.enterOuterAlt(_localctx, 22);
				{
				this.state = 255;
				this.himemstmt();
				}
				break;

			case 23:
				this.enterOuterAlt(_localctx, 23);
				{
				this.state = 256;
				this.lomemstmt();
				}
				break;

			case 24:
				this.enterOuterAlt(_localctx, 24);
				{
				this.state = 257;
				this.printstmt1();
				}
				break;

			case 25:
				this.enterOuterAlt(_localctx, 25);
				{
				this.state = 258;
				this.pokestmt();
				}
				break;

			case 26:
				this.enterOuterAlt(_localctx, 26);
				{
				this.state = 259;
				this.plotstmt();
				}
				break;

			case 27:
				this.enterOuterAlt(_localctx, 27);
				{
				this.state = 260;
				this.ongotostmt();
				}
				break;

			case 28:
				this.enterOuterAlt(_localctx, 28);
				{
				this.state = 261;
				this.ongosubstmt();
				}
				break;

			case 29:
				this.enterOuterAlt(_localctx, 29);
				{
				this.state = 262;
				this.ifstmt();
				}
				break;

			case 30:
				this.enterOuterAlt(_localctx, 30);
				{
				this.state = 263;
				this.forstmt1();
				}
				break;

			case 31:
				this.enterOuterAlt(_localctx, 31);
				{
				this.state = 264;
				this.forstmt2();
				}
				break;

			case 32:
				this.enterOuterAlt(_localctx, 32);
				{
				this.state = 265;
				this.inputstmt();
				}
				break;

			case 33:
				this.enterOuterAlt(_localctx, 33);
				{
				this.state = 266;
				this.tabstmt();
				}
				break;

			case 34:
				this.enterOuterAlt(_localctx, 34);
				{
				this.state = 267;
				this.dimstmt();
				}
				break;

			case 35:
				this.enterOuterAlt(_localctx, 35);
				{
				this.state = 268;
				this.gotostmt();
				}
				break;

			case 36:
				this.enterOuterAlt(_localctx, 36);
				{
				this.state = 269;
				this.gosubstmt();
				}
				break;

			case 37:
				this.enterOuterAlt(_localctx, 37);
				{
				this.state = 270;
				this.callstmt();
				}
				break;

			case 38:
				this.enterOuterAlt(_localctx, 38);
				{
				this.state = 271;
				this.readstmt();
				}
				break;

			case 39:
				this.enterOuterAlt(_localctx, 39);
				{
				this.state = 272;
				this.hplotstmt();
				}
				break;

			case 40:
				this.enterOuterAlt(_localctx, 40);
				{
				this.state = 273;
				this.vplotstmt();
				}
				break;

			case 41:
				this.enterOuterAlt(_localctx, 41);
				{
				this.state = 274;
				this.vtabstmnt();
				}
				break;

			case 42:
				this.enterOuterAlt(_localctx, 42);
				{
				this.state = 275;
				this.htabstmnt();
				}
				break;

			case 43:
				this.enterOuterAlt(_localctx, 43);
				{
				this.state = 276;
				this.waitstmt();
				}
				break;

			case 44:
				this.enterOuterAlt(_localctx, 44);
				{
				this.state = 277;
				this.datastmt();
				}
				break;

			case 45:
				this.enterOuterAlt(_localctx, 45);
				{
				this.state = 278;
				this.xdrawstmt();
				}
				break;

			case 46:
				this.enterOuterAlt(_localctx, 46);
				{
				this.state = 279;
				this.drawstmt();
				}
				break;

			case 47:
				this.enterOuterAlt(_localctx, 47);
				{
				this.state = 280;
				this.defstmt();
				}
				break;

			case 48:
				this.enterOuterAlt(_localctx, 48);
				{
				this.state = 281;
				this.letstmt();
				}
				break;

			case 49:
				this.enterOuterAlt(_localctx, 49);
				{
				this.state = 282;
				this.includestmt();
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
	public vardecl(): VardeclContext {
		let _localctx: VardeclContext = new VardeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, jvmBasicParser.RULE_vardecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 285;
			this.var();
			this.state = 292;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === jvmBasicParser.LPAREN) {
				{
				{
				this.state = 286;
				this.match(jvmBasicParser.LPAREN);
				this.state = 287;
				this.exprlist();
				this.state = 288;
				this.match(jvmBasicParser.RPAREN);
				}
				}
				this.state = 294;
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
	public printstmt1(): Printstmt1Context {
		let _localctx: Printstmt1Context = new Printstmt1Context(this._ctx, this.state);
		this.enterRule(_localctx, 14, jvmBasicParser.RULE_printstmt1);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 295;
			_la = this._input.LA(1);
			if (!(_la === jvmBasicParser.PRINT || _la === jvmBasicParser.QUESTION)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 297;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				{
				this.state = 296;
				this.printlist();
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
	public printlist(): PrintlistContext {
		let _localctx: PrintlistContext = new PrintlistContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, jvmBasicParser.RULE_printlist);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 299;
			this.expression();
			this.state = 306;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === jvmBasicParser.COMMA || _la === jvmBasicParser.SEMICOLON) {
				{
				{
				this.state = 300;
				_la = this._input.LA(1);
				if (!(_la === jvmBasicParser.COMMA || _la === jvmBasicParser.SEMICOLON)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 302;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
				case 1:
					{
					this.state = 301;
					this.expression();
					}
					break;
				}
				}
				}
				this.state = 308;
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
	public getstmt(): GetstmtContext {
		let _localctx: GetstmtContext = new GetstmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, jvmBasicParser.RULE_getstmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 309;
			this.match(jvmBasicParser.GET);
			this.state = 310;
			this.exprlist();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public letstmt(): LetstmtContext {
		let _localctx: LetstmtContext = new LetstmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, jvmBasicParser.RULE_letstmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 313;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === jvmBasicParser.LET) {
				{
				this.state = 312;
				this.match(jvmBasicParser.LET);
				}
			}

			this.state = 315;
			this.variableassignment();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableassignment(): VariableassignmentContext {
		let _localctx: VariableassignmentContext = new VariableassignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, jvmBasicParser.RULE_variableassignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 317;
			this.vardecl();
			this.state = 318;
			this.match(jvmBasicParser.EQ);
			this.state = 319;
			this.exprlist();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public relop(): RelopContext {
		let _localctx: RelopContext = new RelopContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, jvmBasicParser.RULE_relop);
		try {
			this.state = 335;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 321;
				this.match(jvmBasicParser.GTE);
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				{
				this.state = 322;
				this.match(jvmBasicParser.GT);
				this.state = 323;
				this.match(jvmBasicParser.EQ);
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				{
				this.state = 324;
				this.match(jvmBasicParser.EQ);
				this.state = 325;
				this.match(jvmBasicParser.GT);
				}
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 326;
				this.match(jvmBasicParser.LTE);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				{
				this.state = 327;
				this.match(jvmBasicParser.LT);
				this.state = 328;
				this.match(jvmBasicParser.EQ);
				}
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				{
				this.state = 329;
				this.match(jvmBasicParser.EQ);
				this.state = 330;
				this.match(jvmBasicParser.LT);
				}
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 331;
				this.neq();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 332;
				this.match(jvmBasicParser.EQ);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 333;
				this.match(jvmBasicParser.GT);
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 334;
				this.match(jvmBasicParser.LT);
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
	public neq(): NeqContext {
		let _localctx: NeqContext = new NeqContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, jvmBasicParser.RULE_neq);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 337;
			this.match(jvmBasicParser.LT);
			this.state = 338;
			this.match(jvmBasicParser.GT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ifstmt(): IfstmtContext {
		let _localctx: IfstmtContext = new IfstmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, jvmBasicParser.RULE_ifstmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 340;
			this.match(jvmBasicParser.IF);
			this.state = 341;
			this.expression();
			this.state = 343;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === jvmBasicParser.THEN) {
				{
				this.state = 342;
				this.match(jvmBasicParser.THEN);
				}
			}

			this.state = 347;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case jvmBasicParser.RETURN:
			case jvmBasicParser.PRINT:
			case jvmBasicParser.GOTO:
			case jvmBasicParser.GOSUB:
			case jvmBasicParser.IF:
			case jvmBasicParser.NEXT:
			case jvmBasicParser.CLEAR:
			case jvmBasicParser.LIST:
			case jvmBasicParser.RUN:
			case jvmBasicParser.END:
			case jvmBasicParser.LET:
			case jvmBasicParser.FOR:
			case jvmBasicParser.INPUT:
			case jvmBasicParser.DIM:
			case jvmBasicParser.TEXT:
			case jvmBasicParser.HGR:
			case jvmBasicParser.HGR2:
			case jvmBasicParser.CALL:
			case jvmBasicParser.HPLOT:
			case jvmBasicParser.VPLOT:
			case jvmBasicParser.PRNUMBER:
			case jvmBasicParser.INNUMBER:
			case jvmBasicParser.VTAB:
			case jvmBasicParser.HTAB:
			case jvmBasicParser.HOME:
			case jvmBasicParser.ON:
			case jvmBasicParser.PLOT:
			case jvmBasicParser.POKE:
			case jvmBasicParser.STOP:
			case jvmBasicParser.HIMEM:
			case jvmBasicParser.LOMEM:
			case jvmBasicParser.FLASH:
			case jvmBasicParser.INVERSE:
			case jvmBasicParser.NORMAL:
			case jvmBasicParser.ONERR:
			case jvmBasicParser.TRACE:
			case jvmBasicParser.NOTRACE:
			case jvmBasicParser.DATA:
			case jvmBasicParser.WAIT:
			case jvmBasicParser.READ:
			case jvmBasicParser.XDRAW:
			case jvmBasicParser.DRAW:
			case jvmBasicParser.DEF:
			case jvmBasicParser.TAB:
			case jvmBasicParser.SPEED:
			case jvmBasicParser.ROT:
			case jvmBasicParser.SCALE:
			case jvmBasicParser.COLOR:
			case jvmBasicParser.HCOLOR:
			case jvmBasicParser.HLIN:
			case jvmBasicParser.VLIN:
			case jvmBasicParser.POP:
			case jvmBasicParser.SHLOAD:
			case jvmBasicParser.STORE:
			case jvmBasicParser.RECALL:
			case jvmBasicParser.GET:
			case jvmBasicParser.AMPERSAND:
			case jvmBasicParser.GR:
			case jvmBasicParser.RESTORE:
			case jvmBasicParser.SAVE:
			case jvmBasicParser.LOAD:
			case jvmBasicParser.QUESTION:
			case jvmBasicParser.INCLUDE:
			case jvmBasicParser.CLS:
			case jvmBasicParser.LETTERS:
				{
				this.state = 345;
				this.statement();
				}
				break;
			case jvmBasicParser.NUMBER:
				{
				this.state = 346;
				this.linenumber();
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
	public forstmt1(): Forstmt1Context {
		let _localctx: Forstmt1Context = new Forstmt1Context(this._ctx, this.state);
		this.enterRule(_localctx, 30, jvmBasicParser.RULE_forstmt1);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 349;
			this.match(jvmBasicParser.FOR);
			this.state = 350;
			this.vardecl();
			this.state = 351;
			this.match(jvmBasicParser.EQ);
			this.state = 352;
			this.expression();
			this.state = 353;
			this.match(jvmBasicParser.TO);
			this.state = 354;
			this.expression();
			this.state = 357;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === jvmBasicParser.STEP) {
				{
				this.state = 355;
				this.match(jvmBasicParser.STEP);
				this.state = 356;
				this.expression();
				}
			}

			this.state = 364;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
			case 1:
				{
				this.state = 359;
				this.statement();
				this.state = 360;
				this.match(jvmBasicParser.NEXT);
				this.state = 362;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === jvmBasicParser.LETTERS) {
					{
					this.state = 361;
					this.vardecl();
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
	public forstmt2(): Forstmt2Context {
		let _localctx: Forstmt2Context = new Forstmt2Context(this._ctx, this.state);
		this.enterRule(_localctx, 32, jvmBasicParser.RULE_forstmt2);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 366;
			this.match(jvmBasicParser.FOR);
			this.state = 367;
			this.vardecl();
			this.state = 368;
			this.match(jvmBasicParser.EQ);
			this.state = 369;
			this.expression();
			this.state = 370;
			this.match(jvmBasicParser.TO);
			this.state = 371;
			this.expression();
			this.state = 374;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === jvmBasicParser.STEP) {
				{
				this.state = 372;
				this.match(jvmBasicParser.STEP);
				this.state = 373;
				this.expression();
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
	public nextstmt(): NextstmtContext {
		let _localctx: NextstmtContext = new NextstmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, jvmBasicParser.RULE_nextstmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 376;
			this.match(jvmBasicParser.NEXT);
			this.state = 385;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === jvmBasicParser.LETTERS) {
				{
				this.state = 377;
				this.vardecl();
				this.state = 382;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === jvmBasicParser.COMMA) {
					{
					{
					this.state = 378;
					this.match(jvmBasicParser.COMMA);
					this.state = 379;
					this.vardecl();
					}
					}
					this.state = 384;
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
	public inputstmt(): InputstmtContext {
		let _localctx: InputstmtContext = new InputstmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, jvmBasicParser.RULE_inputstmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 387;
			this.match(jvmBasicParser.INPUT);
			this.state = 390;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === jvmBasicParser.STRINGLITERAL) {
				{
				this.state = 388;
				this.match(jvmBasicParser.STRINGLITERAL);
				this.state = 389;
				_la = this._input.LA(1);
				if (!(_la === jvmBasicParser.COMMA || _la === jvmBasicParser.SEMICOLON)) {
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

			this.state = 392;
			this.varlist();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public readstmt(): ReadstmtContext {
		let _localctx: ReadstmtContext = new ReadstmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, jvmBasicParser.RULE_readstmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 394;
			this.match(jvmBasicParser.READ);
			this.state = 395;
			this.varlist();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dimstmt(): DimstmtContext {
		let _localctx: DimstmtContext = new DimstmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, jvmBasicParser.RULE_dimstmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 397;
			this.match(jvmBasicParser.DIM);
			this.state = 398;
			this.varlist();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public gotostmt(): GotostmtContext {
		let _localctx: GotostmtContext = new GotostmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, jvmBasicParser.RULE_gotostmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 400;
			this.match(jvmBasicParser.GOTO);
			this.state = 401;
			this.linenumber();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public gosubstmt(): GosubstmtContext {
		let _localctx: GosubstmtContext = new GosubstmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, jvmBasicParser.RULE_gosubstmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 403;
			this.match(jvmBasicParser.GOSUB);
			this.state = 404;
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
	public pokestmt(): PokestmtContext {
		let _localctx: PokestmtContext = new PokestmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, jvmBasicParser.RULE_pokestmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 406;
			this.match(jvmBasicParser.POKE);
			this.state = 407;
			this.expression();
			this.state = 408;
			this.match(jvmBasicParser.COMMA);
			this.state = 409;
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
	public callstmt(): CallstmtContext {
		let _localctx: CallstmtContext = new CallstmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, jvmBasicParser.RULE_callstmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 411;
			this.match(jvmBasicParser.CALL);
			this.state = 412;
			this.exprlist();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public hplotstmt(): HplotstmtContext {
		let _localctx: HplotstmtContext = new HplotstmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, jvmBasicParser.RULE_hplotstmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 414;
			this.match(jvmBasicParser.HPLOT);
			this.state = 419;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
			case 1:
				{
				this.state = 415;
				this.expression();
				this.state = 416;
				this.match(jvmBasicParser.COMMA);
				this.state = 417;
				this.expression();
				}
				break;
			}
			this.state = 428;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === jvmBasicParser.TO) {
				{
				{
				this.state = 421;
				this.match(jvmBasicParser.TO);
				this.state = 422;
				this.expression();
				this.state = 423;
				this.match(jvmBasicParser.COMMA);
				this.state = 424;
				this.expression();
				}
				}
				this.state = 430;
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
	public vplotstmt(): VplotstmtContext {
		let _localctx: VplotstmtContext = new VplotstmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, jvmBasicParser.RULE_vplotstmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 431;
			this.match(jvmBasicParser.VPLOT);
			this.state = 436;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 24, this._ctx) ) {
			case 1:
				{
				this.state = 432;
				this.expression();
				this.state = 433;
				this.match(jvmBasicParser.COMMA);
				this.state = 434;
				this.expression();
				}
				break;
			}
			this.state = 445;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === jvmBasicParser.TO) {
				{
				{
				this.state = 438;
				this.match(jvmBasicParser.TO);
				this.state = 439;
				this.expression();
				this.state = 440;
				this.match(jvmBasicParser.COMMA);
				this.state = 441;
				this.expression();
				}
				}
				this.state = 447;
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
	public plotstmt(): PlotstmtContext {
		let _localctx: PlotstmtContext = new PlotstmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, jvmBasicParser.RULE_plotstmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 448;
			this.match(jvmBasicParser.PLOT);
			this.state = 449;
			this.expression();
			this.state = 450;
			this.match(jvmBasicParser.COMMA);
			this.state = 451;
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
	public ongotostmt(): OngotostmtContext {
		let _localctx: OngotostmtContext = new OngotostmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, jvmBasicParser.RULE_ongotostmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 453;
			this.match(jvmBasicParser.ON);
			this.state = 454;
			this.expression();
			this.state = 455;
			this.match(jvmBasicParser.GOTO);
			this.state = 456;
			this.linenumber();
			this.state = 461;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === jvmBasicParser.COMMA) {
				{
				{
				this.state = 457;
				this.match(jvmBasicParser.COMMA);
				this.state = 458;
				this.linenumber();
				}
				}
				this.state = 463;
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
	public ongosubstmt(): OngosubstmtContext {
		let _localctx: OngosubstmtContext = new OngosubstmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, jvmBasicParser.RULE_ongosubstmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 464;
			this.match(jvmBasicParser.ON);
			this.state = 465;
			this.expression();
			this.state = 466;
			this.match(jvmBasicParser.GOSUB);
			this.state = 467;
			this.linenumber();
			this.state = 472;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === jvmBasicParser.COMMA) {
				{
				{
				this.state = 468;
				this.match(jvmBasicParser.COMMA);
				this.state = 469;
				this.linenumber();
				}
				}
				this.state = 474;
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
	public vtabstmnt(): VtabstmntContext {
		let _localctx: VtabstmntContext = new VtabstmntContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, jvmBasicParser.RULE_vtabstmnt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 475;
			this.match(jvmBasicParser.VTAB);
			this.state = 476;
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
	public htabstmnt(): HtabstmntContext {
		let _localctx: HtabstmntContext = new HtabstmntContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, jvmBasicParser.RULE_htabstmnt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 478;
			this.match(jvmBasicParser.HTAB);
			this.state = 479;
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
	public himemstmt(): HimemstmtContext {
		let _localctx: HimemstmtContext = new HimemstmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, jvmBasicParser.RULE_himemstmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 481;
			this.match(jvmBasicParser.HIMEM);
			this.state = 482;
			this.match(jvmBasicParser.COLON);
			this.state = 483;
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
	public lomemstmt(): LomemstmtContext {
		let _localctx: LomemstmtContext = new LomemstmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, jvmBasicParser.RULE_lomemstmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 485;
			this.match(jvmBasicParser.LOMEM);
			this.state = 486;
			this.match(jvmBasicParser.COLON);
			this.state = 487;
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
	public datastmt(): DatastmtContext {
		let _localctx: DatastmtContext = new DatastmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, jvmBasicParser.RULE_datastmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 489;
			this.match(jvmBasicParser.DATA);
			this.state = 490;
			this.datum();
			this.state = 497;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === jvmBasicParser.COMMA) {
				{
				{
				this.state = 491;
				this.match(jvmBasicParser.COMMA);
				this.state = 493;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 28, this._ctx) ) {
				case 1:
					{
					this.state = 492;
					this.datum();
					}
					break;
				}
				}
				}
				this.state = 499;
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
	public datum(): DatumContext {
		let _localctx: DatumContext = new DatumContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, jvmBasicParser.RULE_datum);
		try {
			this.state = 502;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case jvmBasicParser.PLUS:
			case jvmBasicParser.MINUS:
			case jvmBasicParser.NUMBER:
			case jvmBasicParser.FLOAT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 500;
				this.number();
				}
				break;
			case jvmBasicParser.STRINGLITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 501;
				this.match(jvmBasicParser.STRINGLITERAL);
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
	public waitstmt(): WaitstmtContext {
		let _localctx: WaitstmtContext = new WaitstmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, jvmBasicParser.RULE_waitstmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 504;
			this.match(jvmBasicParser.WAIT);
			this.state = 505;
			this.expression();
			this.state = 506;
			this.match(jvmBasicParser.COMMA);
			this.state = 507;
			this.expression();
			this.state = 510;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === jvmBasicParser.COMMA) {
				{
				this.state = 508;
				this.match(jvmBasicParser.COMMA);
				this.state = 509;
				this.expression();
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
	public xdrawstmt(): XdrawstmtContext {
		let _localctx: XdrawstmtContext = new XdrawstmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, jvmBasicParser.RULE_xdrawstmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 512;
			this.match(jvmBasicParser.XDRAW);
			this.state = 513;
			this.expression();
			this.state = 519;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === jvmBasicParser.AT) {
				{
				this.state = 514;
				this.match(jvmBasicParser.AT);
				this.state = 515;
				this.expression();
				this.state = 516;
				this.match(jvmBasicParser.COMMA);
				this.state = 517;
				this.expression();
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
	public drawstmt(): DrawstmtContext {
		let _localctx: DrawstmtContext = new DrawstmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, jvmBasicParser.RULE_drawstmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 521;
			this.match(jvmBasicParser.DRAW);
			this.state = 522;
			this.expression();
			this.state = 528;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === jvmBasicParser.AT) {
				{
				this.state = 523;
				this.match(jvmBasicParser.AT);
				this.state = 524;
				this.expression();
				this.state = 525;
				this.match(jvmBasicParser.COMMA);
				this.state = 526;
				this.expression();
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
	public defstmt(): DefstmtContext {
		let _localctx: DefstmtContext = new DefstmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, jvmBasicParser.RULE_defstmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 530;
			this.match(jvmBasicParser.DEF);
			this.state = 532;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === jvmBasicParser.FN) {
				{
				this.state = 531;
				this.match(jvmBasicParser.FN);
				}
			}

			this.state = 534;
			this.var();
			this.state = 535;
			this.match(jvmBasicParser.LPAREN);
			this.state = 536;
			this.var();
			this.state = 537;
			this.match(jvmBasicParser.RPAREN);
			this.state = 538;
			this.match(jvmBasicParser.EQ);
			this.state = 539;
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
	public tabstmt(): TabstmtContext {
		let _localctx: TabstmtContext = new TabstmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, jvmBasicParser.RULE_tabstmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 541;
			this.match(jvmBasicParser.TAB);
			this.state = 542;
			this.match(jvmBasicParser.LPAREN);
			this.state = 543;
			this.expression();
			this.state = 544;
			this.match(jvmBasicParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public speedstmt(): SpeedstmtContext {
		let _localctx: SpeedstmtContext = new SpeedstmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, jvmBasicParser.RULE_speedstmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 546;
			this.match(jvmBasicParser.SPEED);
			this.state = 547;
			this.match(jvmBasicParser.EQ);
			this.state = 548;
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
	public rotstmt(): RotstmtContext {
		let _localctx: RotstmtContext = new RotstmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, jvmBasicParser.RULE_rotstmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 550;
			this.match(jvmBasicParser.ROT);
			this.state = 551;
			this.match(jvmBasicParser.EQ);
			this.state = 552;
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
	public scalestmt(): ScalestmtContext {
		let _localctx: ScalestmtContext = new ScalestmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, jvmBasicParser.RULE_scalestmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 554;
			this.match(jvmBasicParser.SCALE);
			this.state = 555;
			this.match(jvmBasicParser.EQ);
			this.state = 556;
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
	public colorstmt(): ColorstmtContext {
		let _localctx: ColorstmtContext = new ColorstmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, jvmBasicParser.RULE_colorstmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 558;
			this.match(jvmBasicParser.COLOR);
			this.state = 559;
			this.match(jvmBasicParser.EQ);
			this.state = 560;
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
	public hcolorstmt(): HcolorstmtContext {
		let _localctx: HcolorstmtContext = new HcolorstmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, jvmBasicParser.RULE_hcolorstmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 562;
			this.match(jvmBasicParser.HCOLOR);
			this.state = 563;
			this.match(jvmBasicParser.EQ);
			this.state = 564;
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
	public hlinstmt(): HlinstmtContext {
		let _localctx: HlinstmtContext = new HlinstmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, jvmBasicParser.RULE_hlinstmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 566;
			this.match(jvmBasicParser.HLIN);
			this.state = 567;
			this.expression();
			this.state = 568;
			this.match(jvmBasicParser.COMMA);
			this.state = 569;
			this.expression();
			this.state = 570;
			this.match(jvmBasicParser.AT);
			this.state = 571;
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
	public vlinstmt(): VlinstmtContext {
		let _localctx: VlinstmtContext = new VlinstmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, jvmBasicParser.RULE_vlinstmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 573;
			this.match(jvmBasicParser.VLIN);
			this.state = 574;
			this.expression();
			this.state = 575;
			this.match(jvmBasicParser.COMMA);
			this.state = 576;
			this.expression();
			this.state = 577;
			this.match(jvmBasicParser.AT);
			this.state = 578;
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
	public onerrstmt(): OnerrstmtContext {
		let _localctx: OnerrstmtContext = new OnerrstmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, jvmBasicParser.RULE_onerrstmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 580;
			this.match(jvmBasicParser.ONERR);
			this.state = 581;
			this.match(jvmBasicParser.GOTO);
			this.state = 582;
			this.linenumber();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public prstmt(): PrstmtContext {
		let _localctx: PrstmtContext = new PrstmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, jvmBasicParser.RULE_prstmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 584;
			this.match(jvmBasicParser.PRNUMBER);
			this.state = 585;
			this.match(jvmBasicParser.NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public instmt(): InstmtContext {
		let _localctx: InstmtContext = new InstmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, jvmBasicParser.RULE_instmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 587;
			this.match(jvmBasicParser.INNUMBER);
			this.state = 588;
			this.match(jvmBasicParser.NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public storestmt(): StorestmtContext {
		let _localctx: StorestmtContext = new StorestmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, jvmBasicParser.RULE_storestmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 590;
			this.match(jvmBasicParser.STORE);
			this.state = 591;
			this.vardecl();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public recallstmt(): RecallstmtContext {
		let _localctx: RecallstmtContext = new RecallstmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, jvmBasicParser.RULE_recallstmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 593;
			this.match(jvmBasicParser.RECALL);
			this.state = 594;
			this.vardecl();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public liststmt(): ListstmtContext {
		let _localctx: ListstmtContext = new ListstmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, jvmBasicParser.RULE_liststmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 596;
			this.match(jvmBasicParser.LIST);
			this.state = 598;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 35, this._ctx) ) {
			case 1:
				{
				this.state = 597;
				this.expression();
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
	public popstmt(): PopstmtContext {
		let _localctx: PopstmtContext = new PopstmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, jvmBasicParser.RULE_popstmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 600;
			this.match(jvmBasicParser.POP);
			this.state = 605;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 36, this._ctx) ) {
			case 1:
				{
				this.state = 601;
				this.expression();
				this.state = 602;
				this.match(jvmBasicParser.COMMA);
				this.state = 603;
				this.expression();
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
	public amptstmt(): AmptstmtContext {
		let _localctx: AmptstmtContext = new AmptstmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, jvmBasicParser.RULE_amptstmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 607;
			this.match(jvmBasicParser.AMPERSAND);
			this.state = 608;
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
	public includestmt(): IncludestmtContext {
		let _localctx: IncludestmtContext = new IncludestmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, jvmBasicParser.RULE_includestmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 610;
			this.match(jvmBasicParser.INCLUDE);
			this.state = 611;
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
	public endstmt(): EndstmtContext {
		let _localctx: EndstmtContext = new EndstmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, jvmBasicParser.RULE_endstmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 613;
			this.match(jvmBasicParser.END);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public returnstmt(): ReturnstmtContext {
		let _localctx: ReturnstmtContext = new ReturnstmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, jvmBasicParser.RULE_returnstmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 615;
			this.match(jvmBasicParser.RETURN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public restorestmt(): RestorestmtContext {
		let _localctx: RestorestmtContext = new RestorestmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, jvmBasicParser.RULE_restorestmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 617;
			this.match(jvmBasicParser.RESTORE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public number(): NumberContext {
		let _localctx: NumberContext = new NumberContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, jvmBasicParser.RULE_number);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 620;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === jvmBasicParser.PLUS || _la === jvmBasicParser.MINUS) {
				{
				this.state = 619;
				_la = this._input.LA(1);
				if (!(_la === jvmBasicParser.PLUS || _la === jvmBasicParser.MINUS)) {
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

			this.state = 622;
			_la = this._input.LA(1);
			if (!(_la === jvmBasicParser.NUMBER || _la === jvmBasicParser.FLOAT)) {
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
	public func(): FuncContext {
		let _localctx: FuncContext = new FuncContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, jvmBasicParser.RULE_func);
		try {
			this.state = 659;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case jvmBasicParser.STRINGLITERAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 624;
				this.match(jvmBasicParser.STRINGLITERAL);
				}
				break;
			case jvmBasicParser.PLUS:
			case jvmBasicParser.MINUS:
			case jvmBasicParser.NUMBER:
			case jvmBasicParser.FLOAT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 625;
				this.number();
				}
				break;
			case jvmBasicParser.TAB:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 626;
				this.tabfunc();
				}
				break;
			case jvmBasicParser.LETTERS:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 627;
				this.vardecl();
				}
				break;
			case jvmBasicParser.CHR:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 628;
				this.chrfunc();
				}
				break;
			case jvmBasicParser.SQR:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 629;
				this.sqrfunc();
				}
				break;
			case jvmBasicParser.LEN:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 630;
				this.lenfunc();
				}
				break;
			case jvmBasicParser.STR:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 631;
				this.strfunc();
				}
				break;
			case jvmBasicParser.ASC:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 632;
				this.ascfunc();
				}
				break;
			case jvmBasicParser.SCRN:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 633;
				this.scrnfunc();
				}
				break;
			case jvmBasicParser.MID:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 634;
				this.midfunc();
				}
				break;
			case jvmBasicParser.PDL:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 635;
				this.pdlfunc();
				}
				break;
			case jvmBasicParser.PEEK:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 636;
				this.peekfunc();
				}
				break;
			case jvmBasicParser.INTF:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 637;
				this.intfunc();
				}
				break;
			case jvmBasicParser.SPC:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 638;
				this.spcfunc();
				}
				break;
			case jvmBasicParser.FRE:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 639;
				this.frefunc();
				}
				break;
			case jvmBasicParser.POS:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 640;
				this.posfunc();
				}
				break;
			case jvmBasicParser.USR:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 641;
				this.usrfunc();
				}
				break;
			case jvmBasicParser.LEFT:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 642;
				this.leftfunc();
				}
				break;
			case jvmBasicParser.VAL:
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 643;
				this.valfunc();
				}
				break;
			case jvmBasicParser.RIGHT:
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 644;
				this.rightfunc();
				}
				break;
			case jvmBasicParser.FN:
				this.enterOuterAlt(_localctx, 22);
				{
				this.state = 645;
				this.fnfunc();
				}
				break;
			case jvmBasicParser.SIN:
				this.enterOuterAlt(_localctx, 23);
				{
				this.state = 646;
				this.sinfunc();
				}
				break;
			case jvmBasicParser.COS:
				this.enterOuterAlt(_localctx, 24);
				{
				this.state = 647;
				this.cosfunc();
				}
				break;
			case jvmBasicParser.TAN:
				this.enterOuterAlt(_localctx, 25);
				{
				this.state = 648;
				this.tanfunc();
				}
				break;
			case jvmBasicParser.ATN:
				this.enterOuterAlt(_localctx, 26);
				{
				this.state = 649;
				this.atnfunc();
				}
				break;
			case jvmBasicParser.RND:
				this.enterOuterAlt(_localctx, 27);
				{
				this.state = 650;
				this.rndfunc();
				}
				break;
			case jvmBasicParser.SGN:
				this.enterOuterAlt(_localctx, 28);
				{
				this.state = 651;
				this.sgnfunc();
				}
				break;
			case jvmBasicParser.EXP:
				this.enterOuterAlt(_localctx, 29);
				{
				this.state = 652;
				this.expfunc();
				}
				break;
			case jvmBasicParser.LOG:
				this.enterOuterAlt(_localctx, 30);
				{
				this.state = 653;
				this.logfunc();
				}
				break;
			case jvmBasicParser.ABS:
				this.enterOuterAlt(_localctx, 31);
				{
				this.state = 654;
				this.absfunc();
				}
				break;
			case jvmBasicParser.LPAREN:
				this.enterOuterAlt(_localctx, 32);
				{
				{
				this.state = 655;
				this.match(jvmBasicParser.LPAREN);
				this.state = 656;
				this.expression();
				this.state = 657;
				this.match(jvmBasicParser.RPAREN);
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
	public signExpression(): SignExpressionContext {
		let _localctx: SignExpressionContext = new SignExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, jvmBasicParser.RULE_signExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 662;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === jvmBasicParser.NOT) {
				{
				this.state = 661;
				this.match(jvmBasicParser.NOT);
				}
			}

			this.state = 665;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 40, this._ctx) ) {
			case 1:
				{
				this.state = 664;
				_la = this._input.LA(1);
				if (!(_la === jvmBasicParser.PLUS || _la === jvmBasicParser.MINUS)) {
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
			this.state = 667;
			this.func();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public exponentExpression(): ExponentExpressionContext {
		let _localctx: ExponentExpressionContext = new ExponentExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, jvmBasicParser.RULE_exponentExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 669;
			this.signExpression();
			this.state = 674;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === jvmBasicParser.EXPONENT) {
				{
				{
				this.state = 670;
				this.match(jvmBasicParser.EXPONENT);
				this.state = 671;
				this.signExpression();
				}
				}
				this.state = 676;
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
	public multiplyingExpression(): MultiplyingExpressionContext {
		let _localctx: MultiplyingExpressionContext = new MultiplyingExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, jvmBasicParser.RULE_multiplyingExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 677;
			this.exponentExpression();
			this.state = 682;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === jvmBasicParser.TIMES || _la === jvmBasicParser.DIV) {
				{
				{
				this.state = 678;
				_la = this._input.LA(1);
				if (!(_la === jvmBasicParser.TIMES || _la === jvmBasicParser.DIV)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 679;
				this.exponentExpression();
				}
				}
				this.state = 684;
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
	public addingExpression(): AddingExpressionContext {
		let _localctx: AddingExpressionContext = new AddingExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, jvmBasicParser.RULE_addingExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 685;
			this.multiplyingExpression();
			this.state = 690;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === jvmBasicParser.PLUS || _la === jvmBasicParser.MINUS) {
				{
				{
				this.state = 686;
				_la = this._input.LA(1);
				if (!(_la === jvmBasicParser.PLUS || _la === jvmBasicParser.MINUS)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 687;
				this.multiplyingExpression();
				}
				}
				this.state = 692;
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
	public relationalExpression(): RelationalExpressionContext {
		let _localctx: RelationalExpressionContext = new RelationalExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, jvmBasicParser.RULE_relationalExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 693;
			this.addingExpression();
			this.state = 697;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 23)) & ~0x1F) === 0 && ((1 << (_la - 23)) & ((1 << (jvmBasicParser.GTE - 23)) | (1 << (jvmBasicParser.LTE - 23)) | (1 << (jvmBasicParser.GT - 23)) | (1 << (jvmBasicParser.LT - 23)) | (1 << (jvmBasicParser.EQ - 23)))) !== 0)) {
				{
				{
				this.state = 694;
				this.relop();
				}
				this.state = 695;
				this.addingExpression();
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
		this.enterRule(_localctx, 134, jvmBasicParser.RULE_expression);
		let _la: number;
		try {
			this.state = 708;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 46, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 699;
				this.func();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				{
				this.state = 700;
				this.relationalExpression();
				this.state = 705;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === jvmBasicParser.AND || _la === jvmBasicParser.OR) {
					{
					{
					this.state = 701;
					_la = this._input.LA(1);
					if (!(_la === jvmBasicParser.AND || _la === jvmBasicParser.OR)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 702;
					this.relationalExpression();
					}
					}
					this.state = 707;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
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
	public var(): VarContext {
		let _localctx: VarContext = new VarContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, jvmBasicParser.RULE_var);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 710;
			this.varname();
			this.state = 712;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === jvmBasicParser.DOLLAR || _la === jvmBasicParser.PERCENT) {
				{
				this.state = 711;
				this.varsuffix();
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
	public varname(): VarnameContext {
		let _localctx: VarnameContext = new VarnameContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, jvmBasicParser.RULE_varname);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 714;
			this.match(jvmBasicParser.LETTERS);
			this.state = 718;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 715;
					_la = this._input.LA(1);
					if (!(_la === jvmBasicParser.LETTERS || _la === jvmBasicParser.NUMBER)) {
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
				this.state = 720;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public varsuffix(): VarsuffixContext {
		let _localctx: VarsuffixContext = new VarsuffixContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, jvmBasicParser.RULE_varsuffix);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 721;
			_la = this._input.LA(1);
			if (!(_la === jvmBasicParser.DOLLAR || _la === jvmBasicParser.PERCENT)) {
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
	public varlist(): VarlistContext {
		let _localctx: VarlistContext = new VarlistContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, jvmBasicParser.RULE_varlist);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 723;
			this.vardecl();
			this.state = 728;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === jvmBasicParser.COMMA) {
				{
				{
				this.state = 724;
				this.match(jvmBasicParser.COMMA);
				this.state = 725;
				this.vardecl();
				}
				}
				this.state = 730;
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
	public exprlist(): ExprlistContext {
		let _localctx: ExprlistContext = new ExprlistContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, jvmBasicParser.RULE_exprlist);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 731;
			this.expression();
			this.state = 736;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === jvmBasicParser.COMMA) {
				{
				{
				this.state = 732;
				this.match(jvmBasicParser.COMMA);
				this.state = 733;
				this.expression();
				}
				}
				this.state = 738;
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
	public sqrfunc(): SqrfuncContext {
		let _localctx: SqrfuncContext = new SqrfuncContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, jvmBasicParser.RULE_sqrfunc);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 739;
			this.match(jvmBasicParser.SQR);
			this.state = 740;
			this.match(jvmBasicParser.LPAREN);
			this.state = 741;
			this.expression();
			this.state = 742;
			this.match(jvmBasicParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public chrfunc(): ChrfuncContext {
		let _localctx: ChrfuncContext = new ChrfuncContext(this._ctx, this.state);
		this.enterRule(_localctx, 148, jvmBasicParser.RULE_chrfunc);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 744;
			this.match(jvmBasicParser.CHR);
			this.state = 745;
			this.match(jvmBasicParser.LPAREN);
			this.state = 746;
			this.expression();
			this.state = 747;
			this.match(jvmBasicParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lenfunc(): LenfuncContext {
		let _localctx: LenfuncContext = new LenfuncContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, jvmBasicParser.RULE_lenfunc);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 749;
			this.match(jvmBasicParser.LEN);
			this.state = 750;
			this.match(jvmBasicParser.LPAREN);
			this.state = 751;
			this.expression();
			this.state = 752;
			this.match(jvmBasicParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ascfunc(): AscfuncContext {
		let _localctx: AscfuncContext = new AscfuncContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, jvmBasicParser.RULE_ascfunc);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 754;
			this.match(jvmBasicParser.ASC);
			this.state = 755;
			this.match(jvmBasicParser.LPAREN);
			this.state = 756;
			this.expression();
			this.state = 757;
			this.match(jvmBasicParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public midfunc(): MidfuncContext {
		let _localctx: MidfuncContext = new MidfuncContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, jvmBasicParser.RULE_midfunc);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 759;
			this.match(jvmBasicParser.MID);
			this.state = 760;
			this.match(jvmBasicParser.LPAREN);
			this.state = 761;
			this.expression();
			this.state = 762;
			this.match(jvmBasicParser.COMMA);
			this.state = 763;
			this.expression();
			this.state = 764;
			this.match(jvmBasicParser.COMMA);
			this.state = 765;
			this.expression();
			this.state = 766;
			this.match(jvmBasicParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pdlfunc(): PdlfuncContext {
		let _localctx: PdlfuncContext = new PdlfuncContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, jvmBasicParser.RULE_pdlfunc);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 768;
			this.match(jvmBasicParser.PDL);
			this.state = 769;
			this.match(jvmBasicParser.LPAREN);
			this.state = 770;
			this.expression();
			this.state = 771;
			this.match(jvmBasicParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public peekfunc(): PeekfuncContext {
		let _localctx: PeekfuncContext = new PeekfuncContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, jvmBasicParser.RULE_peekfunc);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 773;
			this.match(jvmBasicParser.PEEK);
			this.state = 774;
			this.match(jvmBasicParser.LPAREN);
			this.state = 775;
			this.expression();
			this.state = 776;
			this.match(jvmBasicParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public intfunc(): IntfuncContext {
		let _localctx: IntfuncContext = new IntfuncContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, jvmBasicParser.RULE_intfunc);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 778;
			this.match(jvmBasicParser.INTF);
			this.state = 779;
			this.match(jvmBasicParser.LPAREN);
			this.state = 780;
			this.expression();
			this.state = 781;
			this.match(jvmBasicParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public spcfunc(): SpcfuncContext {
		let _localctx: SpcfuncContext = new SpcfuncContext(this._ctx, this.state);
		this.enterRule(_localctx, 162, jvmBasicParser.RULE_spcfunc);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 783;
			this.match(jvmBasicParser.SPC);
			this.state = 784;
			this.match(jvmBasicParser.LPAREN);
			this.state = 785;
			this.expression();
			this.state = 786;
			this.match(jvmBasicParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public frefunc(): FrefuncContext {
		let _localctx: FrefuncContext = new FrefuncContext(this._ctx, this.state);
		this.enterRule(_localctx, 164, jvmBasicParser.RULE_frefunc);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 788;
			this.match(jvmBasicParser.FRE);
			this.state = 789;
			this.match(jvmBasicParser.LPAREN);
			this.state = 790;
			this.expression();
			this.state = 791;
			this.match(jvmBasicParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public posfunc(): PosfuncContext {
		let _localctx: PosfuncContext = new PosfuncContext(this._ctx, this.state);
		this.enterRule(_localctx, 166, jvmBasicParser.RULE_posfunc);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 793;
			this.match(jvmBasicParser.POS);
			this.state = 794;
			this.match(jvmBasicParser.LPAREN);
			this.state = 795;
			this.expression();
			this.state = 796;
			this.match(jvmBasicParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public usrfunc(): UsrfuncContext {
		let _localctx: UsrfuncContext = new UsrfuncContext(this._ctx, this.state);
		this.enterRule(_localctx, 168, jvmBasicParser.RULE_usrfunc);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 798;
			this.match(jvmBasicParser.USR);
			this.state = 799;
			this.match(jvmBasicParser.LPAREN);
			this.state = 800;
			this.expression();
			this.state = 801;
			this.match(jvmBasicParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public leftfunc(): LeftfuncContext {
		let _localctx: LeftfuncContext = new LeftfuncContext(this._ctx, this.state);
		this.enterRule(_localctx, 170, jvmBasicParser.RULE_leftfunc);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 803;
			this.match(jvmBasicParser.LEFT);
			this.state = 804;
			this.match(jvmBasicParser.LPAREN);
			this.state = 805;
			this.expression();
			this.state = 806;
			this.match(jvmBasicParser.COMMA);
			this.state = 807;
			this.expression();
			this.state = 808;
			this.match(jvmBasicParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rightfunc(): RightfuncContext {
		let _localctx: RightfuncContext = new RightfuncContext(this._ctx, this.state);
		this.enterRule(_localctx, 172, jvmBasicParser.RULE_rightfunc);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 810;
			this.match(jvmBasicParser.RIGHT);
			this.state = 811;
			this.match(jvmBasicParser.LPAREN);
			this.state = 812;
			this.expression();
			this.state = 813;
			this.match(jvmBasicParser.COMMA);
			this.state = 814;
			this.expression();
			this.state = 815;
			this.match(jvmBasicParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public strfunc(): StrfuncContext {
		let _localctx: StrfuncContext = new StrfuncContext(this._ctx, this.state);
		this.enterRule(_localctx, 174, jvmBasicParser.RULE_strfunc);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 817;
			this.match(jvmBasicParser.STR);
			this.state = 818;
			this.match(jvmBasicParser.LPAREN);
			this.state = 819;
			this.expression();
			this.state = 820;
			this.match(jvmBasicParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fnfunc(): FnfuncContext {
		let _localctx: FnfuncContext = new FnfuncContext(this._ctx, this.state);
		this.enterRule(_localctx, 176, jvmBasicParser.RULE_fnfunc);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 822;
			this.match(jvmBasicParser.FN);
			this.state = 823;
			this.var();
			this.state = 824;
			this.match(jvmBasicParser.LPAREN);
			this.state = 825;
			this.expression();
			this.state = 826;
			this.match(jvmBasicParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public valfunc(): ValfuncContext {
		let _localctx: ValfuncContext = new ValfuncContext(this._ctx, this.state);
		this.enterRule(_localctx, 178, jvmBasicParser.RULE_valfunc);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 828;
			this.match(jvmBasicParser.VAL);
			this.state = 829;
			this.match(jvmBasicParser.LPAREN);
			this.state = 830;
			this.expression();
			this.state = 831;
			this.match(jvmBasicParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public scrnfunc(): ScrnfuncContext {
		let _localctx: ScrnfuncContext = new ScrnfuncContext(this._ctx, this.state);
		this.enterRule(_localctx, 180, jvmBasicParser.RULE_scrnfunc);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 833;
			this.match(jvmBasicParser.SCRN);
			this.state = 834;
			this.match(jvmBasicParser.LPAREN);
			this.state = 835;
			this.expression();
			this.state = 836;
			this.match(jvmBasicParser.COMMA);
			this.state = 837;
			this.expression();
			this.state = 838;
			this.match(jvmBasicParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sinfunc(): SinfuncContext {
		let _localctx: SinfuncContext = new SinfuncContext(this._ctx, this.state);
		this.enterRule(_localctx, 182, jvmBasicParser.RULE_sinfunc);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 840;
			this.match(jvmBasicParser.SIN);
			this.state = 841;
			this.match(jvmBasicParser.LPAREN);
			this.state = 842;
			this.expression();
			this.state = 843;
			this.match(jvmBasicParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cosfunc(): CosfuncContext {
		let _localctx: CosfuncContext = new CosfuncContext(this._ctx, this.state);
		this.enterRule(_localctx, 184, jvmBasicParser.RULE_cosfunc);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 845;
			this.match(jvmBasicParser.COS);
			this.state = 846;
			this.match(jvmBasicParser.LPAREN);
			this.state = 847;
			this.expression();
			this.state = 848;
			this.match(jvmBasicParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tanfunc(): TanfuncContext {
		let _localctx: TanfuncContext = new TanfuncContext(this._ctx, this.state);
		this.enterRule(_localctx, 186, jvmBasicParser.RULE_tanfunc);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 850;
			this.match(jvmBasicParser.TAN);
			this.state = 851;
			this.match(jvmBasicParser.LPAREN);
			this.state = 852;
			this.expression();
			this.state = 853;
			this.match(jvmBasicParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public atnfunc(): AtnfuncContext {
		let _localctx: AtnfuncContext = new AtnfuncContext(this._ctx, this.state);
		this.enterRule(_localctx, 188, jvmBasicParser.RULE_atnfunc);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 855;
			this.match(jvmBasicParser.ATN);
			this.state = 856;
			this.match(jvmBasicParser.LPAREN);
			this.state = 857;
			this.expression();
			this.state = 858;
			this.match(jvmBasicParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rndfunc(): RndfuncContext {
		let _localctx: RndfuncContext = new RndfuncContext(this._ctx, this.state);
		this.enterRule(_localctx, 190, jvmBasicParser.RULE_rndfunc);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 860;
			this.match(jvmBasicParser.RND);
			this.state = 861;
			this.match(jvmBasicParser.LPAREN);
			this.state = 862;
			this.expression();
			this.state = 863;
			this.match(jvmBasicParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sgnfunc(): SgnfuncContext {
		let _localctx: SgnfuncContext = new SgnfuncContext(this._ctx, this.state);
		this.enterRule(_localctx, 192, jvmBasicParser.RULE_sgnfunc);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 865;
			this.match(jvmBasicParser.SGN);
			this.state = 866;
			this.match(jvmBasicParser.LPAREN);
			this.state = 867;
			this.expression();
			this.state = 868;
			this.match(jvmBasicParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expfunc(): ExpfuncContext {
		let _localctx: ExpfuncContext = new ExpfuncContext(this._ctx, this.state);
		this.enterRule(_localctx, 194, jvmBasicParser.RULE_expfunc);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 870;
			this.match(jvmBasicParser.EXP);
			this.state = 871;
			this.match(jvmBasicParser.LPAREN);
			this.state = 872;
			this.expression();
			this.state = 873;
			this.match(jvmBasicParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public logfunc(): LogfuncContext {
		let _localctx: LogfuncContext = new LogfuncContext(this._ctx, this.state);
		this.enterRule(_localctx, 196, jvmBasicParser.RULE_logfunc);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 875;
			this.match(jvmBasicParser.LOG);
			this.state = 876;
			this.match(jvmBasicParser.LPAREN);
			this.state = 877;
			this.expression();
			this.state = 878;
			this.match(jvmBasicParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public absfunc(): AbsfuncContext {
		let _localctx: AbsfuncContext = new AbsfuncContext(this._ctx, this.state);
		this.enterRule(_localctx, 198, jvmBasicParser.RULE_absfunc);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 880;
			this.match(jvmBasicParser.ABS);
			this.state = 881;
			this.match(jvmBasicParser.LPAREN);
			this.state = 882;
			this.expression();
			this.state = 883;
			this.match(jvmBasicParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tabfunc(): TabfuncContext {
		let _localctx: TabfuncContext = new TabfuncContext(this._ctx, this.state);
		this.enterRule(_localctx, 200, jvmBasicParser.RULE_tabfunc);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 885;
			this.match(jvmBasicParser.TAB);
			this.state = 886;
			this.match(jvmBasicParser.LPAREN);
			this.state = 887;
			this.expression();
			this.state = 888;
			this.match(jvmBasicParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03|\u037D\x04\x02" +
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
		"`\x04a\ta\x04b\tb\x04c\tc\x04d\td\x04e\te\x04f\tf\x03\x02\x06\x02\xCE" +
		"\n\x02\r\x02\x0E\x02\xCF\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x05\x03\xD8\n\x03\x07\x03\xDA\n\x03\f\x03\x0E\x03\xDD\v\x03\x03\x03\x05" +
		"\x03\xE0\n\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x05\x06\xE7\n\x06" +
		"\x03\x06\x03\x06\x05\x06\xEB\n\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05" +
		"\x07\u011E\n\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x07\b\u0125\n\b\f\b\x0E" +
		"\b\u0128\v\b\x03\t\x03\t\x05\t\u012C\n\t\x03\n\x03\n\x03\n\x05\n\u0131" +
		"\n\n\x07\n\u0133\n\n\f\n\x0E\n\u0136\v\n\x03\v\x03\v\x03\v\x03\f\x05\f" +
		"\u013C\n\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x05\x0E\u0152\n\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03" +
		"\x10\x03\x10\x05\x10\u015A\n\x10\x03\x10\x03\x10\x05\x10\u015E\n\x10\x03" +
		"\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\u0168" +
		"\n\x11\x03\x11\x03\x11\x03\x11\x05\x11\u016D\n\x11\x05\x11\u016F\n\x11" +
		"\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12" +
		"\u0179\n\x12\x03\x13\x03\x13\x03\x13\x03\x13\x07\x13\u017F\n\x13\f\x13" +
		"\x0E\x13\u0182\v\x13\x05\x13\u0184\n\x13\x03\x14\x03\x14\x03\x14\x05\x14" +
		"\u0189\n\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03" +
		"\x16\x03\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x19\x03\x19\x03" +
		"\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03" +
		"\x1B\x03\x1B\x05\x1B\u01A6\n\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B" +
		"\x07\x1B\u01AD\n\x1B\f\x1B\x0E\x1B\u01B0\v\x1B\x03\x1C\x03\x1C\x03\x1C" +
		"\x03\x1C\x03\x1C\x05\x1C\u01B7\n\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03" +
		"\x1C\x07\x1C\u01BE\n\x1C\f\x1C\x0E\x1C\u01C1\v\x1C\x03\x1D\x03\x1D\x03" +
		"\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x07" +
		"\x1E\u01CE\n\x1E\f\x1E\x0E\x1E\u01D1\v\x1E\x03\x1F\x03\x1F\x03\x1F\x03" +
		"\x1F\x03\x1F\x03\x1F\x07\x1F\u01D9\n\x1F\f\x1F\x0E\x1F\u01DC\v\x1F\x03" +
		" \x03 \x03 \x03!\x03!\x03!\x03\"\x03\"\x03\"\x03\"\x03#\x03#\x03#\x03" +
		"#\x03$\x03$\x03$\x03$\x05$\u01F0\n$\x07$\u01F2\n$\f$\x0E$\u01F5\v$\x03" +
		"%\x03%\x05%\u01F9\n%\x03&\x03&\x03&\x03&\x03&\x03&\x05&\u0201\n&\x03\'" +
		"\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x05\'\u020A\n\'\x03(\x03(\x03(\x03" +
		"(\x03(\x03(\x03(\x05(\u0213\n(\x03)\x03)\x05)\u0217\n)\x03)\x03)\x03)" +
		"\x03)\x03)\x03)\x03)\x03*\x03*\x03*\x03*\x03*\x03+\x03+\x03+\x03+\x03" +
		",\x03,\x03,\x03,\x03-\x03-\x03-\x03-\x03.\x03.\x03.\x03.\x03/\x03/\x03" +
		"/\x03/\x030\x030\x030\x030\x030\x030\x030\x031\x031\x031\x031\x031\x03" +
		"1\x031\x032\x032\x032\x032\x033\x033\x033\x034\x034\x034\x035\x035\x03" +
		"5\x036\x036\x036\x037\x037\x057\u0259\n7\x038\x038\x038\x038\x038\x05" +
		"8\u0260\n8\x039\x039\x039\x03:\x03:\x03:\x03;\x03;\x03<\x03<\x03=\x03" +
		"=\x03>\x05>\u026F\n>\x03>\x03>\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03" +
		"?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03" +
		"?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x05" +
		"?\u0296\n?\x03@\x05@\u0299\n@\x03@\x05@\u029C\n@\x03@\x03@\x03A\x03A\x03" +
		"A\x07A\u02A3\nA\fA\x0EA\u02A6\vA\x03B\x03B\x03B\x07B\u02AB\nB\fB\x0EB" +
		"\u02AE\vB\x03C\x03C\x03C\x07C\u02B3\nC\fC\x0EC\u02B6\vC\x03D\x03D\x03" +
		"D\x03D\x05D\u02BC\nD\x03E\x03E\x03E\x03E\x07E\u02C2\nE\fE\x0EE\u02C5\v" +
		"E\x05E\u02C7\nE\x03F\x03F\x05F\u02CB\nF\x03G\x03G\x07G\u02CF\nG\fG\x0E" +
		"G\u02D2\vG\x03H\x03H\x03I\x03I\x03I\x07I\u02D9\nI\fI\x0EI\u02DC\vI\x03" +
		"J\x03J\x03J\x07J\u02E1\nJ\fJ\x0EJ\u02E4\vJ\x03K\x03K\x03K\x03K\x03K\x03" +
		"L\x03L\x03L\x03L\x03L\x03M\x03M\x03M\x03M\x03M\x03N\x03N\x03N\x03N\x03" +
		"N\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x03P\x03P\x03P\x03P\x03" +
		"P\x03Q\x03Q\x03Q\x03Q\x03Q\x03R\x03R\x03R\x03R\x03R\x03S\x03S\x03S\x03" +
		"S\x03S\x03T\x03T\x03T\x03T\x03T\x03U\x03U\x03U\x03U\x03U\x03V\x03V\x03" +
		"V\x03V\x03V\x03W\x03W\x03W\x03W\x03W\x03W\x03W\x03X\x03X\x03X\x03X\x03" +
		"X\x03X\x03X\x03Y\x03Y\x03Y\x03Y\x03Y\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03" +
		"[\x03[\x03[\x03[\x03[\x03\\\x03\\\x03\\\x03\\\x03\\\x03\\\x03\\\x03]\x03" +
		"]\x03]\x03]\x03]\x03^\x03^\x03^\x03^\x03^\x03_\x03_\x03_\x03_\x03_\x03" +
		"`\x03`\x03`\x03`\x03`\x03a\x03a\x03a\x03a\x03a\x03b\x03b\x03b\x03b\x03" +
		"b\x03c\x03c\x03c\x03c\x03c\x03d\x03d\x03d\x03d\x03d\x03e\x03e\x03e\x03" +
		"e\x03e\x03f\x03f\x03f\x03f\x03f\x03f\x02\x02\x02g\x02\x02\x04\x02\x06" +
		"\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02" +
		"\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x02" +
		"2\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02" +
		"N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02" +
		"j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02" +
		"\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02" +
		"\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02" +
		"\xA8\x02\xAA\x02\xAC\x02\xAE\x02\xB0\x02\xB2\x02\xB4\x02\xB6\x02\xB8\x02" +
		"\xBA\x02\xBC\x02\xBE\x02\xC0\x02\xC2\x02\xC4\x02\xC6\x02\xC8\x02\xCA\x02" +
		"\x02\f\x04\x02\f\fww\r\x02\x18\x18\x1F\x1F+-77>>ACIJ``oorsvv\x04\x02\x06" +
		"\x06tt\x04\x02\x1D\x1D\'\'\x03\x02\x14\x15\x03\x02z{\x03\x02\x16\x17\x03" +
		"\x02KL\x03\x02yz\x03\x02\x03\x04\x02\u039F\x02\xCD\x03\x02\x02\x02\x04" +
		"\xD3\x03\x02\x02\x02\x06\xE1\x03\x02\x02\x02\b\xE3\x03\x02\x02\x02\n\xEA" +
		"\x03\x02\x02\x02\f\u011D\x03\x02\x02\x02\x0E\u011F\x03\x02\x02\x02\x10" +
		"\u0129\x03\x02\x02\x02\x12\u012D\x03\x02\x02\x02\x14\u0137\x03\x02\x02" +
		"\x02\x16\u013B\x03\x02\x02\x02\x18\u013F\x03\x02\x02\x02\x1A\u0151\x03" +
		"\x02\x02\x02\x1C\u0153\x03\x02\x02\x02\x1E\u0156\x03\x02\x02\x02 \u015F" +
		"\x03\x02\x02\x02\"\u0170\x03\x02\x02\x02$\u017A\x03\x02\x02\x02&\u0185" +
		"\x03\x02\x02\x02(\u018C\x03\x02\x02\x02*\u018F\x03\x02\x02\x02,\u0192" +
		"\x03\x02\x02\x02.\u0195\x03\x02\x02\x020\u0198\x03\x02\x02\x022\u019D" +
		"\x03\x02\x02\x024\u01A0\x03\x02\x02\x026\u01B1\x03\x02\x02\x028\u01C2" +
		"\x03\x02\x02\x02:\u01C7\x03\x02\x02\x02<\u01D2\x03\x02\x02\x02>\u01DD" +
		"\x03\x02\x02\x02@\u01E0\x03\x02\x02\x02B\u01E3\x03\x02\x02\x02D\u01E7" +
		"\x03\x02\x02\x02F\u01EB\x03\x02\x02\x02H\u01F8\x03\x02\x02\x02J\u01FA" +
		"\x03\x02\x02\x02L\u0202\x03\x02\x02\x02N\u020B\x03\x02\x02\x02P\u0214" +
		"\x03\x02\x02\x02R\u021F\x03\x02\x02\x02T\u0224\x03\x02\x02\x02V\u0228" +
		"\x03\x02\x02\x02X\u022C\x03\x02\x02\x02Z\u0230\x03\x02\x02\x02\\\u0234" +
		"\x03\x02\x02\x02^\u0238\x03\x02\x02\x02`\u023F\x03\x02\x02\x02b\u0246" +
		"\x03\x02\x02\x02d\u024A\x03\x02\x02\x02f\u024D\x03\x02\x02\x02h\u0250" +
		"\x03\x02\x02\x02j\u0253\x03\x02\x02\x02l\u0256\x03\x02\x02\x02n\u025A" +
		"\x03\x02\x02\x02p\u0261\x03\x02\x02\x02r\u0264\x03\x02\x02\x02t\u0267" +
		"\x03\x02\x02\x02v\u0269\x03\x02\x02\x02x\u026B\x03\x02\x02\x02z\u026E" +
		"\x03\x02\x02\x02|\u0295\x03\x02\x02\x02~\u0298\x03\x02\x02\x02\x80\u029F" +
		"\x03\x02\x02\x02\x82\u02A7\x03\x02\x02\x02\x84\u02AF\x03\x02\x02\x02\x86" +
		"\u02B7\x03\x02\x02\x02\x88\u02C6\x03\x02\x02\x02\x8A\u02C8\x03\x02\x02" +
		"\x02\x8C\u02CC\x03\x02\x02\x02\x8E\u02D3\x03\x02\x02\x02\x90\u02D5\x03" +
		"\x02\x02\x02\x92\u02DD\x03\x02\x02\x02\x94\u02E5\x03\x02\x02\x02\x96\u02EA" +
		"\x03\x02\x02\x02\x98\u02EF\x03\x02\x02\x02\x9A\u02F4\x03\x02\x02\x02\x9C" +
		"\u02F9\x03\x02\x02\x02\x9E\u0302\x03\x02\x02\x02\xA0\u0307\x03\x02\x02" +
		"\x02\xA2\u030C\x03\x02\x02\x02\xA4\u0311\x03\x02\x02\x02\xA6\u0316\x03" +
		"\x02\x02\x02\xA8\u031B\x03\x02\x02\x02\xAA\u0320\x03\x02\x02\x02\xAC\u0325" +
		"\x03\x02\x02\x02\xAE\u032C\x03\x02\x02\x02\xB0\u0333\x03\x02\x02\x02\xB2" +
		"\u0338\x03\x02\x02\x02\xB4\u033E\x03\x02\x02\x02\xB6\u0343\x03\x02\x02" +
		"\x02\xB8\u034A\x03\x02\x02\x02\xBA\u034F\x03\x02\x02\x02\xBC\u0354\x03" +
		"\x02\x02\x02\xBE\u0359\x03\x02\x02\x02\xC0\u035E\x03\x02\x02\x02\xC2\u0363" +
		"\x03\x02\x02\x02\xC4\u0368\x03\x02\x02\x02\xC6\u036D\x03\x02\x02\x02\xC8" +
		"\u0372\x03\x02\x02\x02\xCA\u0377\x03\x02\x02\x02\xCC\xCE\x05\x04\x03\x02" +
		"\xCD\xCC\x03\x02\x02\x02\xCE\xCF\x03\x02\x02\x02\xCF\xCD\x03\x02\x02\x02" +
		"\xCF\xD0\x03\x02\x02\x02\xD0\xD1\x03\x02\x02\x02\xD1\xD2\x07\x02\x02\x03" +
		"\xD2\x03\x03\x02\x02\x02\xD3\xDF\x05\b\x05\x02\xD4\xDB\x05\n\x06\x02\xD5" +
		"\xD7\x07*\x02\x02\xD6\xD8\x05\n\x06\x02\xD7\xD6\x03\x02\x02\x02\xD7\xD8" +
		"\x03\x02\x02\x02\xD8\xDA\x03\x02\x02\x02\xD9\xD5\x03\x02\x02\x02\xDA\xDD" +
		"\x03\x02\x02\x02\xDB\xD9\x03\x02\x02\x02\xDB\xDC\x03\x02\x02\x02\xDC\xE0" +
		"\x03\x02\x02\x02\xDD\xDB\x03\x02\x02\x02\xDE\xE0\t\x02\x02\x02\xDF\xD4" +
		"\x03\x02\x02\x02\xDF\xDE\x03\x02\x02\x02\xE0\x05\x03\x02\x02\x02\xE1\xE2" +
		"\x07n\x02\x02\xE2\x07\x03\x02\x02\x02\xE3\xE4\x07z\x02\x02\xE4\t\x03\x02" +
		"\x02\x02\xE5\xE7\x05\x06\x04\x02\xE6\xE5\x03\x02\x02\x02\xE6\xE7\x03\x02" +
		"\x02\x02\xE7\xE8\x03\x02\x02\x02\xE8\xEB\x05\f\x07\x02\xE9\xEB\t\x02\x02" +
		"\x02\xEA\xE6\x03\x02\x02\x02\xEA\xE9\x03\x02\x02\x02\xEB\v\x03\x02\x02" +
		"\x02\xEC\u011E\t\x03\x02\x02\xED\u011E\x05t;\x02\xEE\u011E\x05v<\x02\xEF" +
		"\u011E\x05x=\x02\xF0\u011E\x05p9\x02\xF1\u011E\x05n8\x02\xF2\u011E\x05" +
		"l7\x02\xF3\u011E\x05h5\x02\xF4\u011E\x05\x14\v\x02\xF5\u011E\x05j6\x02" +
		"\xF6\u011E\x05$\x13\x02\xF7\u011E\x05f4\x02\xF8\u011E\x05d3\x02\xF9\u011E" +
		"\x05b2\x02\xFA\u011E\x05^0\x02\xFB\u011E\x05`1\x02\xFC\u011E\x05Z.\x02" +
		"\xFD\u011E\x05T+\x02\xFE\u011E\x05X-\x02\xFF\u011E\x05V,\x02\u0100\u011E" +
		"\x05\\/\x02\u0101\u011E\x05B\"\x02\u0102\u011E\x05D#\x02\u0103\u011E\x05" +
		"\x10\t\x02\u0104\u011E\x050\x19\x02\u0105\u011E\x058\x1D\x02\u0106\u011E" +
		"\x05:\x1E\x02\u0107\u011E\x05<\x1F\x02\u0108\u011E\x05\x1E\x10\x02\u0109" +
		"\u011E\x05 \x11\x02\u010A\u011E\x05\"\x12\x02\u010B\u011E\x05&\x14\x02" +
		"\u010C\u011E\x05R*\x02\u010D\u011E\x05*\x16\x02\u010E\u011E\x05,\x17\x02" +
		"\u010F\u011E\x05.\x18\x02\u0110\u011E\x052\x1A\x02\u0111\u011E\x05(\x15" +
		"\x02\u0112\u011E\x054\x1B\x02\u0113\u011E\x056\x1C\x02\u0114\u011E\x05" +
		"> \x02\u0115\u011E\x05@!\x02\u0116\u011E\x05J&\x02\u0117\u011E\x05F$\x02" +
		"\u0118\u011E\x05L\'\x02\u0119\u011E\x05N(\x02\u011A\u011E\x05P)\x02\u011B" +
		"\u011E\x05\x16\f\x02\u011C\u011E\x05r:\x02\u011D\xEC\x03\x02\x02\x02\u011D" +
		"\xED\x03\x02\x02\x02\u011D\xEE\x03\x02\x02\x02\u011D\xEF\x03\x02\x02\x02" +
		"\u011D\xF0\x03\x02\x02\x02\u011D\xF1\x03\x02\x02\x02\u011D\xF2\x03\x02" +
		"\x02\x02\u011D\xF3\x03\x02\x02\x02\u011D\xF4\x03\x02\x02\x02\u011D\xF5" +
		"\x03\x02\x02\x02\u011D\xF6\x03\x02\x02\x02\u011D\xF7\x03\x02\x02\x02\u011D" +
		"\xF8\x03\x02\x02\x02\u011D\xF9\x03\x02\x02\x02\u011D\xFA\x03\x02\x02\x02" +
		"\u011D\xFB\x03\x02\x02\x02\u011D\xFC\x03\x02\x02\x02\u011D\xFD\x03\x02" +
		"\x02\x02\u011D\xFE\x03\x02\x02\x02\u011D\xFF\x03\x02\x02\x02\u011D\u0100" +
		"\x03\x02\x02\x02\u011D\u0101\x03\x02\x02\x02\u011D\u0102\x03\x02\x02\x02" +
		"\u011D\u0103\x03\x02\x02\x02\u011D\u0104\x03\x02\x02\x02\u011D\u0105\x03" +
		"\x02\x02\x02\u011D\u0106\x03\x02\x02\x02\u011D\u0107\x03\x02\x02\x02\u011D" +
		"\u0108\x03\x02\x02\x02\u011D\u0109\x03\x02\x02\x02\u011D\u010A\x03\x02" +
		"\x02\x02\u011D\u010B\x03\x02\x02\x02\u011D\u010C\x03\x02\x02\x02\u011D" +
		"\u010D\x03\x02\x02\x02\u011D\u010E\x03\x02\x02\x02\u011D\u010F\x03\x02" +
		"\x02\x02\u011D\u0110\x03\x02\x02\x02\u011D\u0111\x03\x02\x02\x02\u011D" +
		"\u0112\x03\x02\x02\x02\u011D\u0113\x03\x02\x02\x02\u011D\u0114\x03\x02" +
		"\x02\x02\u011D\u0115\x03\x02\x02\x02\u011D\u0116\x03\x02\x02\x02\u011D" +
		"\u0117\x03\x02\x02\x02\u011D\u0118\x03\x02\x02\x02\u011D\u0119\x03\x02" +
		"\x02\x02\u011D\u011A\x03\x02\x02\x02\u011D\u011B\x03\x02\x02\x02\u011D" +
		"\u011C\x03\x02\x02\x02\u011E\r\x03\x02\x02\x02\u011F\u0126\x05\x8AF\x02" +
		"\u0120\u0121\x07\x12\x02\x02\u0121\u0122\x05\x92J\x02\u0122\u0123\x07" +
		"\x13\x02\x02\u0123\u0125\x03\x02\x02\x02\u0124\u0120\x03\x02\x02\x02\u0125" +
		"\u0128\x03\x02\x02\x02\u0126\u0124\x03\x02\x02\x02\u0126\u0127\x03\x02" +
		"\x02\x02\u0127\x0F\x03\x02\x02\x02\u0128\u0126\x03\x02\x02\x02\u0129\u012B" +
		"\t\x04\x02\x02\u012A\u012C\x05\x12\n\x02\u012B\u012A\x03\x02\x02\x02\u012B" +
		"\u012C\x03\x02\x02\x02\u012C\x11\x03\x02\x02\x02\u012D\u0134\x05\x88E" +
		"\x02\u012E\u0130\t\x05\x02\x02\u012F\u0131\x05\x88E\x02\u0130\u012F\x03" +
		"\x02\x02\x02\u0130\u0131\x03\x02\x02\x02\u0131\u0133\x03\x02\x02\x02\u0132" +
		"\u012E\x03\x02\x02\x02\u0133\u0136\x03\x02\x02\x02\u0134\u0132\x03\x02" +
		"\x02\x02\u0134\u0135\x03\x02\x02\x02\u0135\x13\x03\x02\x02\x02\u0136\u0134" +
		"\x03\x02\x02\x02\u0137\u0138\x07l\x02\x02\u0138\u0139\x05\x92J\x02\u0139" +
		"\x15\x03\x02\x02\x02\u013A\u013C\x07!\x02\x02\u013B\u013A\x03\x02\x02" +
		"\x02\u013B\u013C\x03\x02\x02\x02\u013C\u013D\x03\x02\x02\x02\u013D\u013E" +
		"\x05\x18\r\x02\u013E\x17\x03\x02\x02\x02\u013F\u0140\x05\x0E\b\x02\u0140" +
		"\u0141\x07\"\x02\x02\u0141\u0142\x05\x92J\x02\u0142\x19\x03\x02\x02\x02" +
		"\u0143\u0152\x07\x19\x02\x02\u0144\u0145\x07\x1B\x02\x02\u0145\u0152\x07" +
		"\"\x02\x02\u0146\u0147\x07\"\x02\x02\u0147\u0152\x07\x1B\x02\x02\u0148" +
		"\u0152\x07\x1A\x02\x02\u0149\u014A\x07\x1C\x02\x02\u014A\u0152\x07\"\x02" +
		"\x02\u014B\u014C\x07\"\x02\x02\u014C\u0152\x07\x1C\x02\x02\u014D\u0152" +
		"\x05\x1C\x0F\x02\u014E\u0152\x07\"\x02\x02\u014F\u0152\x07\x1B\x02\x02" +
		"\u0150\u0152\x07\x1C\x02\x02\u0151\u0143\x03\x02\x02\x02\u0151\u0144\x03" +
		"\x02\x02\x02\u0151\u0146\x03\x02\x02\x02\u0151\u0148\x03\x02\x02\x02\u0151" +
		"\u0149\x03\x02\x02\x02\u0151\u014B\x03\x02\x02\x02\u0151\u014D\x03\x02" +
		"\x02\x02\u0151\u014E\x03\x02\x02\x02\u0151\u014F\x03\x02\x02\x02\u0151" +
		"\u0150\x03\x02\x02\x02\u0152\x1B\x03\x02\x02\x02\u0153\u0154\x07\x1C\x02" +
		"\x02\u0154\u0155\x07\x1B\x02\x02\u0155\x1D\x03\x02\x02\x02\u0156\u0157" +
		"\x07\t\x02\x02\u0157\u0159\x05\x88E\x02\u0158\u015A\x07\v\x02\x02\u0159" +
		"\u0158\x03\x02\x02\x02\u0159\u015A\x03\x02\x02\x02\u015A\u015D\x03\x02" +
		"\x02\x02\u015B\u015E\x05\f\x07\x02\u015C\u015E\x05\b\x05\x02\u015D\u015B" +
		"\x03\x02\x02\x02\u015D\u015C\x03\x02\x02\x02\u015E\x1F\x03\x02\x02\x02" +
		"\u015F\u0160\x07#\x02\x02\u0160\u0161\x05\x0E\b\x02\u0161\u0162\x07\"" +
		"\x02\x02\u0162\u0163\x05\x88E\x02\u0163\u0164\x07$\x02\x02\u0164\u0167" +
		"\x05\x88E\x02\u0165\u0166\x07%\x02\x02\u0166\u0168\x05\x88E\x02\u0167" +
		"\u0165\x03\x02\x02\x02\u0167\u0168\x03\x02\x02\x02\u0168\u016E\x03\x02" +
		"\x02\x02\u0169\u016A\x05\f\x07\x02\u016A\u016C\x07\n\x02\x02\u016B\u016D" +
		"\x05\x0E\b\x02\u016C\u016B\x03\x02\x02\x02\u016C\u016D\x03\x02\x02\x02" +
		"\u016D\u016F\x03\x02\x02\x02\u016E\u0169\x03\x02\x02\x02\u016E\u016F\x03" +
		"\x02\x02\x02\u016F!\x03\x02\x02\x02\u0170\u0171\x07#\x02\x02\u0171\u0172" +
		"\x05\x0E\b\x02\u0172\u0173\x07\"\x02\x02\u0173\u0174\x05\x88E\x02\u0174" +
		"\u0175\x07$\x02\x02\u0175\u0178\x05\x88E\x02\u0176\u0177\x07%\x02\x02" +
		"\u0177\u0179\x05\x88E\x02\u0178\u0176\x03\x02\x02\x02\u0178\u0179\x03" +
		"\x02\x02\x02\u0179#\x03\x02\x02\x02\u017A\u0183\x07\n\x02\x02\u017B\u0180" +
		"\x05\x0E\b\x02\u017C\u017D\x07\x1D\x02\x02\u017D\u017F\x05\x0E\b\x02\u017E" +
		"\u017C\x03\x02\x02\x02\u017F\u0182\x03\x02\x02\x02\u0180\u017E\x03\x02" +
		"\x02\x02\u0180\u0181\x03\x02\x02\x02\u0181\u0184\x03\x02\x02\x02\u0182" +
		"\u0180\x03\x02\x02\x02\u0183\u017B\x03\x02\x02\x02\u0183\u0184\x03\x02" +
		"\x02\x02\u0184%\x03\x02\x02\x02\u0185\u0188\x07&\x02\x02\u0186\u0187\x07" +
		"x\x02\x02\u0187\u0189\t\x05\x02\x02\u0188\u0186\x03\x02\x02\x02\u0188" +
		"\u0189\x03\x02\x02\x02\u0189\u018A\x03\x02\x02\x02\u018A\u018B\x05\x90" +
		"I\x02\u018B\'\x03\x02\x02\x02\u018C\u018D\x07O\x02\x02\u018D\u018E\x05" +
		"\x90I\x02\u018E)\x03\x02\x02\x02\u018F\u0190\x07(\x02\x02\u0190\u0191" +
		"\x05\x90I\x02\u0191+\x03\x02\x02\x02\u0192\u0193\x07\x07\x02\x02\u0193" +
		"\u0194\x05\b\x05\x02\u0194-\x03\x02\x02\x02\u0195\u0196\x07\b\x02\x02" +
		"\u0196\u0197\x05\x88E\x02\u0197/\x03\x02\x02\x02\u0198\u0199\x07<\x02" +
		"\x02\u0199\u019A\x05\x88E\x02\u019A\u019B\x07\x1D\x02\x02\u019B\u019C" +
		"\x05\x88E\x02\u019C1\x03\x02\x02\x02\u019D\u019E\x07/\x02\x02\u019E\u019F" +
		"\x05\x92J\x02\u019F3\x03\x02\x02\x02\u01A0\u01A5\x071\x02\x02\u01A1\u01A2" +
		"\x05\x88E\x02\u01A2\u01A3\x07\x1D\x02\x02\u01A3\u01A4\x05\x88E\x02\u01A4" +
		"\u01A6\x03\x02\x02\x02\u01A5\u01A1\x03\x02\x02\x02\u01A5\u01A6\x03\x02" +
		"\x02\x02\u01A6\u01AE\x03\x02\x02\x02\u01A7\u01A8\x07$\x02\x02\u01A8\u01A9" +
		"\x05\x88E\x02\u01A9\u01AA\x07\x1D\x02\x02\u01AA\u01AB\x05\x88E\x02\u01AB" +
		"\u01AD\x03\x02\x02\x02\u01AC\u01A7\x03\x02\x02\x02\u01AD\u01B0\x03\x02" +
		"\x02\x02\u01AE\u01AC\x03\x02\x02\x02\u01AE\u01AF\x03\x02\x02\x02\u01AF" +
		"5\x03\x02\x02\x02\u01B0\u01AE\x03\x02\x02\x02\u01B1\u01B6\x072\x02\x02" +
		"\u01B2\u01B3\x05\x88E\x02\u01B3\u01B4\x07\x1D\x02\x02\u01B4\u01B5\x05" +
		"\x88E\x02\u01B5\u01B7\x03\x02\x02\x02\u01B6\u01B2\x03\x02\x02\x02\u01B6" +
		"\u01B7\x03\x02\x02\x02\u01B7\u01BF\x03\x02\x02\x02\u01B8\u01B9\x07$\x02" +
		"\x02\u01B9\u01BA\x05\x88E\x02\u01BA\u01BB\x07\x1D\x02\x02\u01BB\u01BC" +
		"\x05\x88E\x02\u01BC\u01BE\x03\x02\x02\x02\u01BD\u01B8\x03\x02\x02\x02" +
		"\u01BE\u01C1\x03\x02\x02\x02\u01BF\u01BD\x03\x02\x02\x02\u01BF\u01C0\x03" +
		"\x02\x02\x02\u01C07\x03\x02\x02\x02\u01C1\u01BF\x03\x02\x02\x02\u01C2" +
		"\u01C3\x07:\x02\x02\u01C3\u01C4\x05\x88E\x02\u01C4\u01C5\x07\x1D\x02\x02" +
		"\u01C5\u01C6\x05\x88E\x02\u01C69\x03\x02\x02\x02\u01C7\u01C8\x078\x02" +
		"\x02\u01C8\u01C9\x05\x88E\x02\u01C9\u01CA\x07\x07\x02\x02\u01CA\u01CF" +
		"\x05\b\x05\x02\u01CB\u01CC\x07\x1D\x02\x02\u01CC\u01CE\x05\b\x05\x02\u01CD" +
		"\u01CB\x03\x02\x02\x02\u01CE\u01D1\x03\x02\x02\x02\u01CF\u01CD\x03\x02" +
		"\x02\x02\u01CF\u01D0\x03\x02\x02\x02\u01D0;\x03\x02\x02\x02\u01D1\u01CF" +
		"\x03\x02\x02\x02\u01D2\u01D3\x078\x02\x02\u01D3\u01D4\x05\x88E\x02\u01D4" +
		"\u01D5\x07\b\x02\x02\u01D5\u01DA\x05\b\x05\x02\u01D6\u01D7\x07\x1D\x02" +
		"\x02\u01D7\u01D9\x05\b\x05\x02\u01D8\u01D6\x03\x02\x02\x02\u01D9\u01DC" +
		"\x03\x02\x02\x02\u01DA\u01D8\x03\x02\x02\x02\u01DA\u01DB\x03\x02\x02\x02" +
		"\u01DB=\x03\x02\x02\x02\u01DC\u01DA\x03\x02\x02\x02\u01DD\u01DE\x075\x02" +
		"\x02\u01DE\u01DF\x05\x88E\x02\u01DF?\x03\x02\x02\x02\u01E0\u01E1\x076" +
		"\x02\x02\u01E1\u01E2\x05\x88E\x02\u01E2A\x03\x02\x02\x02\u01E3\u01E4\x07" +
		"?\x02\x02\u01E4\u01E5\x07*\x02\x02\u01E5\u01E6\x05\x88E\x02\u01E6C\x03" +
		"\x02\x02\x02\u01E7\u01E8\x07@\x02\x02\u01E8\u01E9\x07*\x02\x02\u01E9\u01EA" +
		"\x05\x88E\x02\u01EAE\x03\x02\x02\x02\u01EB\u01EC\x07M\x02\x02\u01EC\u01F3" +
		"\x05H%\x02\u01ED\u01EF\x07\x1D\x02\x02\u01EE\u01F0\x05H%\x02\u01EF\u01EE" +
		"\x03\x02\x02\x02\u01EF\u01F0\x03\x02\x02\x02";
	private static readonly _serializedATNSegment1: string =
		"\u01F0\u01F2\x03\x02\x02\x02\u01F1\u01ED\x03\x02\x02\x02\u01F2\u01F5\x03" +
		"\x02\x02\x02\u01F3\u01F1\x03\x02\x02\x02\u01F3\u01F4\x03\x02\x02\x02\u01F4" +
		"G\x03\x02\x02\x02\u01F5\u01F3\x03\x02\x02\x02\u01F6\u01F9\x05z>\x02\u01F7" +
		"\u01F9\x07x\x02\x02\u01F8\u01F6\x03\x02\x02\x02\u01F8\u01F7\x03\x02\x02" +
		"\x02\u01F9I\x03\x02\x02\x02\u01FA\u01FB\x07N\x02\x02\u01FB\u01FC\x05\x88" +
		"E\x02\u01FC\u01FD\x07\x1D\x02\x02\u01FD\u0200\x05\x88E\x02\u01FE\u01FF" +
		"\x07\x1D\x02\x02\u01FF\u0201\x05\x88E\x02\u0200\u01FE\x03\x02\x02\x02" +
		"\u0200\u0201\x03\x02\x02\x02\u0201K\x03\x02\x02\x02\u0202\u0203\x07P\x02" +
		"\x02\u0203\u0209\x05\x88E\x02\u0204\u0205\x07R\x02\x02\u0205\u0206\x05" +
		"\x88E\x02\u0206\u0207\x07\x1D\x02\x02\u0207\u0208\x05\x88E\x02\u0208\u020A" +
		"\x03\x02\x02\x02\u0209\u0204\x03\x02\x02\x02\u0209\u020A\x03\x02\x02\x02" +
		"\u020AM\x03\x02\x02\x02\u020B\u020C\x07Q\x02\x02\u020C\u0212\x05\x88E" +
		"\x02\u020D\u020E\x07R\x02\x02\u020E\u020F\x05\x88E\x02\u020F\u0210\x07" +
		"\x1D\x02\x02\u0210\u0211\x05\x88E\x02\u0211\u0213\x03\x02\x02\x02\u0212" +
		"\u020D\x03\x02\x02\x02\u0212\u0213\x03\x02\x02\x02\u0213O\x03\x02\x02" +
		"\x02\u0214\u0216\x07S\x02\x02\u0215\u0217\x07T\x02\x02\u0216\u0215\x03" +
		"\x02\x02\x02\u0216\u0217\x03\x02\x02\x02\u0217\u0218\x03\x02\x02\x02\u0218" +
		"\u0219\x05\x8AF\x02\u0219\u021A\x07\x12\x02\x02\u021A\u021B\x05\x8AF\x02" +
		"\u021B\u021C\x07\x13\x02\x02\u021C\u021D\x07\"\x02\x02\u021D\u021E\x05" +
		"\x88E\x02\u021EQ\x03\x02\x02\x02\u021F\u0220\x07V\x02\x02\u0220\u0221" +
		"\x07\x12\x02\x02\u0221\u0222\x05\x88E\x02\u0222\u0223\x07\x13\x02\x02" +
		"\u0223S\x03\x02\x02\x02\u0224\u0225\x07W\x02\x02\u0225\u0226\x07\"\x02" +
		"\x02\u0226\u0227\x05\x88E\x02\u0227U\x03\x02\x02\x02\u0228\u0229\x07X" +
		"\x02\x02\u0229\u022A\x07\"\x02\x02\u022A\u022B\x05\x88E\x02\u022BW\x03" +
		"\x02\x02\x02\u022C\u022D\x07Y\x02\x02\u022D\u022E\x07\"\x02\x02\u022E" +
		"\u022F\x05\x88E\x02\u022FY\x03\x02\x02\x02\u0230\u0231\x07Z\x02\x02\u0231" +
		"\u0232\x07\"\x02\x02\u0232\u0233\x05\x88E\x02\u0233[\x03\x02\x02\x02\u0234" +
		"\u0235\x07[\x02\x02\u0235\u0236\x07\"\x02\x02\u0236\u0237\x05\x88E\x02" +
		"\u0237]\x03\x02\x02\x02\u0238\u0239\x07\\\x02\x02\u0239\u023A\x05\x88" +
		"E\x02\u023A\u023B\x07\x1D\x02\x02\u023B\u023C\x05\x88E\x02\u023C\u023D" +
		"\x07R\x02\x02\u023D\u023E\x05\x88E\x02\u023E_\x03\x02\x02\x02\u023F\u0240" +
		"\x07]\x02\x02\u0240\u0241\x05\x88E\x02\u0241\u0242\x07\x1D\x02\x02\u0242" +
		"\u0243\x05\x88E\x02\u0243\u0244\x07R\x02\x02\u0244\u0245\x05\x88E\x02" +
		"\u0245a\x03\x02\x02\x02\u0246\u0247\x07D\x02\x02\u0247\u0248\x07\x07\x02" +
		"\x02\u0248\u0249\x05\b\x05\x02\u0249c\x03\x02\x02\x02\u024A\u024B\x07" +
		"3\x02\x02\u024B\u024C\x07z\x02\x02\u024Ce\x03\x02\x02\x02\u024D\u024E" +
		"\x074\x02\x02\u024E\u024F\x07z\x02\x02\u024Fg\x03\x02\x02\x02\u0250\u0251" +
		"\x07j\x02\x02\u0251\u0252\x05\x0E\b\x02\u0252i\x03\x02\x02\x02\u0253\u0254" +
		"\x07k\x02\x02\u0254\u0255\x05\x0E\b\x02\u0255k\x03\x02\x02\x02\u0256\u0258" +
		"\x07\x1E\x02\x02\u0257\u0259\x05\x88E\x02\u0258\u0257\x03\x02\x02\x02" +
		"\u0258\u0259\x03\x02\x02\x02\u0259m\x03\x02\x02\x02\u025A\u025F\x07_\x02" +
		"\x02\u025B\u025C\x05\x88E\x02\u025C\u025D\x07\x1D\x02\x02\u025D\u025E" +
		"\x05\x88E\x02\u025E\u0260\x03\x02\x02\x02\u025F\u025B\x03\x02\x02\x02" +
		"\u025F\u0260\x03\x02\x02\x02\u0260o\x03\x02\x02\x02\u0261\u0262\x07n\x02" +
		"\x02\u0262\u0263\x05\x88E\x02\u0263q\x03\x02\x02\x02\u0264\u0265\x07u" +
		"\x02\x02\u0265\u0266\x05\x88E\x02\u0266s\x03\x02\x02\x02\u0267\u0268\x07" +
		" \x02\x02\u0268u\x03\x02\x02\x02\u0269\u026A\x07\x05\x02\x02\u026Aw\x03" +
		"\x02\x02\x02\u026B\u026C\x07q\x02\x02\u026Cy\x03\x02\x02\x02\u026D\u026F" +
		"\t\x06\x02\x02\u026E\u026D\x03\x02\x02\x02\u026E\u026F\x03\x02\x02\x02" +
		"\u026F\u0270\x03\x02\x02\x02\u0270\u0271\t\x07\x02\x02\u0271{\x03\x02" +
		"\x02\x02\u0272\u0296\x07x\x02\x02\u0273\u0296\x05z>\x02\u0274\u0296\x05" +
		"\xCAf\x02\u0275\u0296\x05\x0E\b\x02\u0276\u0296\x05\x96L\x02\u0277\u0296" +
		"\x05\x94K\x02\u0278\u0296\x05\x98M\x02\u0279\u0296\x05\xB0Y\x02\u027A" +
		"\u0296\x05\x9AN\x02\u027B\u0296\x05\xB6\\\x02\u027C\u0296\x05\x9CO\x02" +
		"\u027D\u0296\x05\x9EP\x02\u027E\u0296\x05\xA0Q\x02\u027F\u0296\x05\xA2" +
		"R\x02\u0280\u0296\x05\xA4S\x02\u0281\u0296\x05\xA6T\x02\u0282\u0296\x05" +
		"\xA8U\x02\u0283\u0296\x05\xAAV\x02\u0284\u0296\x05\xACW\x02\u0285\u0296" +
		"\x05\xB4[\x02\u0286\u0296\x05\xAEX\x02\u0287\u0296\x05\xB2Z\x02\u0288" +
		"\u0296\x05\xB8]\x02\u0289\u0296\x05\xBA^\x02\u028A\u0296\x05\xBC_\x02" +
		"\u028B\u0296\x05\xBE`\x02\u028C\u0296\x05\xC0a\x02\u028D\u0296\x05\xC2" +
		"b\x02\u028E\u0296\x05\xC4c\x02\u028F\u0296\x05\xC6d\x02\u0290\u0296\x05" +
		"\xC8e\x02\u0291\u0292\x07\x12\x02\x02\u0292\u0293\x05\x88E\x02\u0293\u0294" +
		"\x07\x13\x02\x02\u0294\u0296\x03\x02\x02\x02\u0295\u0272\x03\x02\x02\x02" +
		"\u0295\u0273\x03\x02\x02\x02\u0295\u0274\x03\x02\x02\x02\u0295\u0275\x03" +
		"\x02\x02\x02\u0295\u0276\x03\x02\x02\x02\u0295\u0277\x03\x02\x02\x02\u0295" +
		"\u0278\x03\x02\x02\x02\u0295\u0279\x03\x02\x02\x02\u0295\u027A\x03\x02" +
		"\x02\x02\u0295\u027B\x03\x02\x02\x02\u0295\u027C\x03\x02\x02\x02\u0295" +
		"\u027D\x03\x02\x02\x02\u0295\u027E\x03\x02\x02\x02\u0295\u027F\x03\x02" +
		"\x02\x02\u0295\u0280\x03\x02\x02\x02\u0295\u0281\x03\x02\x02\x02\u0295" +
		"\u0282\x03\x02\x02\x02\u0295\u0283\x03\x02\x02\x02\u0295\u0284\x03\x02" +
		"\x02\x02\u0295\u0285\x03\x02\x02\x02\u0295\u0286\x03\x02\x02\x02\u0295" +
		"\u0287\x03\x02\x02\x02\u0295\u0288\x03\x02\x02\x02\u0295\u0289\x03\x02" +
		"\x02\x02\u0295\u028A\x03\x02\x02\x02\u0295\u028B\x03\x02\x02\x02\u0295" +
		"\u028C\x03\x02\x02\x02\u0295\u028D\x03\x02\x02\x02\u0295\u028E\x03\x02" +
		"\x02\x02\u0295\u028F\x03\x02\x02\x02\u0295\u0290\x03\x02\x02\x02\u0295" +
		"\u0291\x03\x02\x02\x02\u0296}\x03\x02\x02\x02\u0297\u0299\x07p\x02\x02" +
		"\u0298\u0297\x03\x02\x02\x02\u0298\u0299\x03\x02\x02\x02\u0299\u029B\x03" +
		"\x02\x02\x02\u029A\u029C\t\x06\x02\x02\u029B\u029A\x03\x02\x02\x02\u029B" +
		"\u029C\x03\x02\x02\x02\u029C\u029D\x03\x02\x02\x02\u029D\u029E\x05|?\x02" +
		"\u029E\x7F\x03\x02\x02\x02\u029F\u02A4\x05~@\x02\u02A0\u02A1\x07m\x02" +
		"\x02\u02A1\u02A3\x05~@\x02\u02A2\u02A0\x03\x02\x02\x02\u02A3\u02A6\x03" +
		"\x02\x02\x02\u02A4\u02A2\x03\x02\x02\x02\u02A4\u02A5\x03\x02\x02\x02\u02A5" +
		"\x81\x03\x02\x02\x02\u02A6\u02A4\x03\x02\x02\x02\u02A7\u02AC\x05\x80A" +
		"\x02\u02A8\u02A9\t\b\x02\x02\u02A9\u02AB\x05\x80A\x02\u02AA\u02A8\x03" +
		"\x02\x02\x02\u02AB\u02AE\x03\x02\x02\x02\u02AC\u02AA\x03\x02\x02\x02\u02AC" +
		"\u02AD\x03\x02\x02\x02\u02AD\x83\x03\x02\x02\x02\u02AE\u02AC\x03\x02\x02" +
		"\x02\u02AF\u02B4\x05\x82B\x02\u02B0\u02B1\t\x06\x02\x02\u02B1\u02B3\x05" +
		"\x82B\x02\u02B2\u02B0\x03\x02\x02\x02\u02B3\u02B6\x03\x02\x02\x02\u02B4" +
		"\u02B2\x03\x02\x02\x02\u02B4\u02B5\x03\x02\x02\x02\u02B5\x85\x03\x02\x02" +
		"\x02\u02B6\u02B4\x03\x02\x02\x02\u02B7\u02BB\x05\x84C\x02\u02B8\u02B9" +
		"\x05\x1A\x0E\x02\u02B9\u02BA\x05\x84C\x02\u02BA\u02BC\x03\x02\x02\x02" +
		"\u02BB\u02B8\x03\x02\x02\x02\u02BB\u02BC\x03\x02\x02\x02\u02BC\x87\x03" +
		"\x02\x02\x02\u02BD\u02C7\x05|?\x02\u02BE\u02C3\x05\x86D\x02\u02BF\u02C0" +
		"\t\t\x02\x02\u02C0\u02C2\x05\x86D\x02\u02C1\u02BF\x03\x02\x02\x02\u02C2" +
		"\u02C5\x03\x02\x02\x02\u02C3\u02C1\x03\x02\x02\x02\u02C3\u02C4\x03\x02" +
		"\x02\x02\u02C4\u02C7\x03\x02\x02\x02\u02C5\u02C3\x03\x02\x02\x02\u02C6" +
		"\u02BD\x03\x02\x02\x02\u02C6\u02BE\x03\x02\x02\x02\u02C7\x89\x03\x02\x02" +
		"\x02\u02C8\u02CA\x05\x8CG\x02\u02C9\u02CB\x05\x8EH\x02\u02CA\u02C9\x03" +
		"\x02\x02\x02\u02CA\u02CB\x03\x02\x02\x02\u02CB\x8B\x03\x02\x02\x02\u02CC" +
		"\u02D0\x07y\x02\x02\u02CD\u02CF\t\n\x02\x02\u02CE\u02CD\x03\x02\x02\x02" +
		"\u02CF\u02D2\x03\x02\x02\x02\u02D0\u02CE\x03\x02\x02\x02\u02D0\u02D1\x03" +
		"\x02\x02\x02\u02D1\x8D\x03\x02\x02\x02\u02D2\u02D0\x03\x02\x02\x02\u02D3" +
		"\u02D4\t\v\x02\x02\u02D4\x8F\x03\x02\x02\x02\u02D5\u02DA\x05\x0E\b\x02" +
		"\u02D6\u02D7\x07\x1D\x02\x02\u02D7\u02D9\x05\x0E\b\x02\u02D8\u02D6\x03" +
		"\x02\x02\x02\u02D9\u02DC\x03\x02\x02\x02\u02DA\u02D8\x03\x02\x02\x02\u02DA" +
		"\u02DB\x03\x02\x02\x02\u02DB\x91\x03\x02\x02\x02\u02DC\u02DA\x03\x02\x02" +
		"\x02\u02DD\u02E2\x05\x88E\x02\u02DE\u02DF\x07\x1D\x02\x02\u02DF\u02E1" +
		"\x05\x88E\x02\u02E0\u02DE\x03\x02\x02\x02\u02E1\u02E4\x03\x02\x02\x02" +
		"\u02E2\u02E0\x03\x02\x02\x02\u02E2\u02E3\x03\x02\x02\x02\u02E3\x93\x03" +
		"\x02\x02\x02\u02E4\u02E2\x03\x02\x02\x02\u02E5\u02E6\x07)\x02\x02\u02E6" +
		"\u02E7\x07\x12\x02\x02\u02E7\u02E8\x05\x88E\x02\u02E8\u02E9\x07\x13\x02" +
		"\x02\u02E9\x95\x03\x02\x02\x02\u02EA\u02EB\x07\r\x02\x02\u02EB\u02EC\x07" +
		"\x12\x02\x02\u02EC\u02ED\x05\x88E\x02\u02ED\u02EE\x07\x13\x02\x02\u02EE" +
		"\x97\x03\x02\x02\x02\u02EF\u02F0\x07.\x02\x02\u02F0\u02F1\x07\x12\x02" +
		"\x02\u02F1\u02F2\x05\x88E\x02\u02F2\u02F3\x07\x13\x02\x02\u02F3\x99\x03" +
		"\x02\x02\x02\u02F4\u02F5\x070\x02\x02\u02F5\u02F6\x07\x12\x02\x02\u02F6" +
		"\u02F7\x05\x88E\x02\u02F7\u02F8\x07\x13\x02\x02\u02F8\x9B\x03\x02\x02" +
		"\x02\u02F9\u02FA\x07\x0E\x02\x02\u02FA\u02FB\x07\x12\x02\x02\u02FB\u02FC" +
		"\x05\x88E\x02\u02FC\u02FD\x07\x1D\x02\x02\u02FD\u02FE\x05\x88E\x02\u02FE" +
		"\u02FF\x07\x1D\x02\x02\u02FF\u0300\x05\x88E\x02\u0300\u0301\x07\x13\x02" +
		"\x02\u0301\x9D\x03\x02\x02\x02\u0302\u0303\x079\x02\x02\u0303\u0304\x07" +
		"\x12\x02\x02\u0304\u0305\x05\x88E\x02\u0305\u0306\x07\x13\x02\x02\u0306" +
		"\x9F\x03\x02\x02\x02\u0307\u0308\x07;\x02\x02\u0308\u0309\x07\x12\x02" +
		"\x02\u0309\u030A\x05\x88E\x02\u030A\u030B\x07\x13\x02\x02\u030B\xA1\x03" +
		"\x02\x02\x02\u030C\u030D\x07=\x02\x02\u030D\u030E\x07\x12\x02\x02\u030E" +
		"\u030F\x05\x88E\x02\u030F\u0310\x07\x13\x02\x02\u0310\xA3\x03\x02\x02" +
		"\x02\u0311\u0312\x07E\x02\x02\u0312\u0313\x07\x12\x02\x02\u0313\u0314" +
		"\x05\x88E\x02\u0314\u0315\x07\x13\x02\x02\u0315\xA5\x03\x02\x02\x02\u0316" +
		"\u0317\x07F\x02\x02\u0317\u0318\x07\x12\x02\x02\u0318\u0319\x05\x88E\x02" +
		"\u0319\u031A\x07\x13\x02\x02\u031A\xA7\x03\x02\x02\x02\u031B\u031C\x07" +
		"G\x02\x02\u031C\u031D\x07\x12\x02\x02\u031D\u031E\x05\x88E\x02\u031E\u031F" +
		"\x07\x13\x02\x02\u031F\xA9\x03\x02\x02\x02\u0320\u0321\x07H\x02\x02\u0321" +
		"\u0322\x07\x12\x02\x02\u0322\u0323\x05\x88E\x02\u0323\u0324\x07\x13\x02" +
		"\x02\u0324\xAB\x03\x02\x02\x02\u0325\u0326\x07\x0F\x02\x02\u0326\u0327" +
		"\x07\x12\x02\x02\u0327\u0328\x05\x88E\x02\u0328\u0329\x07\x1D\x02\x02" +
		"\u0329\u032A\x05\x88E\x02\u032A\u032B\x07\x13\x02\x02\u032B\xAD\x03\x02" +
		"\x02\x02\u032C\u032D\x07\x10\x02\x02\u032D\u032E\x07\x12\x02\x02\u032E" +
		"\u032F\x05\x88E\x02\u032F\u0330\x07\x1D\x02\x02\u0330\u0331\x05\x88E\x02" +
		"\u0331\u0332\x07\x13\x02\x02\u0332\xAF\x03\x02\x02\x02\u0333\u0334\x07" +
		"\x11\x02\x02\u0334\u0335\x07\x12\x02\x02\u0335\u0336\x05\x88E\x02\u0336" +
		"\u0337\x07\x13\x02\x02\u0337\xB1\x03\x02\x02\x02\u0338\u0339\x07T\x02" +
		"\x02\u0339\u033A\x05\x8AF\x02\u033A\u033B\x07\x12\x02\x02\u033B\u033C" +
		"\x05\x88E\x02\u033C\u033D\x07\x13\x02\x02\u033D\xB3\x03\x02\x02\x02\u033E" +
		"\u033F\x07U\x02\x02\u033F\u0340\x07\x12\x02\x02\u0340\u0341\x05\x88E\x02" +
		"\u0341\u0342\x07\x13\x02\x02\u0342\xB5\x03\x02\x02\x02\u0343\u0344\x07" +
		"^\x02\x02\u0344\u0345\x07\x12\x02\x02\u0345\u0346\x05\x88E\x02\u0346\u0347" +
		"\x07\x1D\x02\x02\u0347\u0348\x05\x88E\x02\u0348\u0349\x07\x13\x02\x02" +
		"\u0349\xB7\x03\x02\x02\x02\u034A\u034B\x07a\x02\x02\u034B\u034C\x07\x12" +
		"\x02\x02\u034C\u034D\x05\x88E\x02\u034D\u034E\x07\x13\x02\x02\u034E\xB9" +
		"\x03\x02\x02\x02\u034F\u0350\x07b\x02\x02\u0350\u0351\x07\x12\x02\x02" +
		"\u0351\u0352\x05\x88E\x02\u0352\u0353\x07\x13\x02\x02\u0353\xBB\x03\x02" +
		"\x02\x02\u0354\u0355\x07c\x02\x02\u0355\u0356\x07\x12\x02\x02\u0356\u0357" +
		"\x05\x88E\x02\u0357\u0358\x07\x13\x02\x02\u0358\xBD\x03\x02\x02\x02\u0359" +
		"\u035A\x07d\x02\x02\u035A\u035B\x07\x12\x02\x02\u035B\u035C\x05\x88E\x02" +
		"\u035C\u035D\x07\x13\x02\x02\u035D\xBF\x03\x02\x02\x02\u035E\u035F\x07" +
		"e\x02\x02\u035F\u0360\x07\x12\x02\x02\u0360\u0361\x05\x88E\x02\u0361\u0362" +
		"\x07\x13\x02\x02\u0362\xC1\x03\x02\x02\x02\u0363\u0364\x07f\x02\x02\u0364" +
		"\u0365\x07\x12\x02\x02\u0365\u0366\x05\x88E\x02\u0366\u0367\x07\x13\x02" +
		"\x02\u0367\xC3\x03\x02\x02\x02\u0368\u0369\x07g\x02\x02\u0369\u036A\x07" +
		"\x12\x02\x02\u036A\u036B\x05\x88E\x02\u036B\u036C\x07\x13\x02\x02\u036C" +
		"\xC5\x03\x02\x02\x02\u036D\u036E\x07h\x02\x02\u036E\u036F\x07\x12\x02" +
		"\x02\u036F\u0370\x05\x88E\x02\u0370\u0371\x07\x13\x02\x02\u0371\xC7\x03" +
		"\x02\x02\x02\u0372\u0373\x07i\x02\x02\u0373\u0374\x07\x12\x02\x02\u0374" +
		"\u0375\x05\x88E\x02\u0375\u0376\x07\x13\x02\x02\u0376\xC9\x03\x02\x02" +
		"\x02\u0377\u0378\x07V\x02\x02\u0378\u0379\x07\x12\x02\x02\u0379\u037A" +
		"\x05\x88E\x02\u037A\u037B\x07\x13\x02\x02\u037B\xCB\x03\x02\x02\x025\xCF" +
		"\xD7\xDB\xDF\xE6\xEA\u011D\u0126\u012B\u0130\u0134\u013B\u0151\u0159\u015D" +
		"\u0167\u016C\u016E\u0178\u0180\u0183\u0188\u01A5\u01AE\u01B6\u01BF\u01CF" +
		"\u01DA\u01EF\u01F3\u01F8\u0200\u0209\u0212\u0216\u0258\u025F\u026E\u0295" +
		"\u0298\u029B\u02A4\u02AC\u02B4\u02BB\u02C3\u02C6\u02CA\u02D0\u02DA\u02E2";
	public static readonly _serializedATN: string = Utils.join(
		[
			jvmBasicParser._serializedATNSegment0,
			jvmBasicParser._serializedATNSegment1,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!jvmBasicParser.__ATN) {
			jvmBasicParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(jvmBasicParser._serializedATN));
		}

		return jvmBasicParser.__ATN;
	}

}

export class ProgContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(jvmBasicParser.EOF, 0); }
	public line(): LineContext[];
	public line(i: number): LineContext;
	public line(i?: number): LineContext | LineContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LineContext);
		} else {
			return this.getRuleContext(i, LineContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return jvmBasicParser.RULE_prog; }
	// @Override
	public enterRule(listener: jvmBasicListener): void {
		if (listener.enterProg) {
			listener.enterProg(this);
		}
	}
	// @Override
	public exitRule(listener: jvmBasicListener): void {
		if (listener.exitProg) {
			listener.exitProg(this);
		}
	}
}


export class LineContext extends ParserRuleContext {
	public linenumber(): LinenumberContext | undefined {
		return this.tryGetRuleContext(0, LinenumberContext);
	}
	public COMMENT(): TerminalNode | undefined { return this.tryGetToken(jvmBasicParser.COMMENT, 0); }
	public REM(): TerminalNode | undefined { return this.tryGetToken(jvmBasicParser.REM, 0); }
	public amprstmt(): AmprstmtContext[];
	public amprstmt(i: number): AmprstmtContext;
	public amprstmt(i?: number): AmprstmtContext | AmprstmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AmprstmtContext);
		} else {
			return this.getRuleContext(i, AmprstmtContext);
		}
	}
	public COLON(): TerminalNode[];
	public COLON(i: number): TerminalNode;
	public COLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(jvmBasicParser.COLON);
		} else {
			return this.getToken(jvmBasicParser.COLON, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return jvmBasicParser.RULE_line; }
	// @Override
	public enterRule(listener: jvmBasicListener): void {
		if (listener.enterLine) {
			listener.enterLine(this);
		}
	}
	// @Override
	public exitRule(listener: jvmBasicListener): void {
		if (listener.exitLine) {
			listener.exitLine(this);
		}
	}
}


export class AmperoperContext extends ParserRuleContext {
	public AMPERSAND(): TerminalNode { return this.getToken(jvmBasicParser.AMPERSAND, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return jvmBasicParser.RULE_amperoper; }
	// @Override
	public enterRule(listener: jvmBasicListener): void {
		if (listener.enterAmperoper) {
			listener.enterAmperoper(this);
		}
	}
	// @Override
	public exitRule(listener: jvmBasicListener): void {
		if (listener.exitAmperoper) {
			listener.exitAmperoper(this);
		}
	}
}


export class LinenumberContext extends ParserRuleContext {
	public NUMBER(): TerminalNode { return this.getToken(jvmBasicParser.NUMBER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return jvmBasicParser.RULE_linenumber; }
	// @Override
	public enterRule(listener: jvmBasicListener): void {
		if (listener.enterLinenumber) {
			listener.enterLinenumber(this);
		}
	}
	// @Override
	public exitRule(listener: jvmBasicListener): void {
		if (listener.exitLinenumber) {
			listener.exitLinenumber(this);
		}
	}
}


export class AmprstmtContext extends ParserRuleContext {
	public statement(): StatementContext | undefined {
		return this.tryGetRuleContext(0, StatementContext);
	}
	public amperoper(): AmperoperContext | undefined {
		return this.tryGetRuleContext(0, AmperoperContext);
	}
	public COMMENT(): TerminalNode | undefined { return this.tryGetToken(jvmBasicParser.COMMENT, 0); }
	public REM(): TerminalNode | undefined { return this.tryGetToken(jvmBasicParser.REM, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return jvmBasicParser.RULE_amprstmt; }
	// @Override
	public enterRule(listener: jvmBasicListener): void {
		if (listener.enterAmprstmt) {
			listener.enterAmprstmt(this);
		}
	}
	// @Override
	public exitRule(listener: jvmBasicListener): void {
		if (listener.exitAmprstmt) {
			listener.exitAmprstmt(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public CLS(): TerminalNode | undefined { return this.tryGetToken(jvmBasicParser.CLS, 0); }
	public LOAD(): TerminalNode | undefined { return this.tryGetToken(jvmBasicParser.LOAD, 0); }
	public SAVE(): TerminalNode | undefined { return this.tryGetToken(jvmBasicParser.SAVE, 0); }
	public TRACE(): TerminalNode | undefined { return this.tryGetToken(jvmBasicParser.TRACE, 0); }
	public NOTRACE(): TerminalNode | undefined { return this.tryGetToken(jvmBasicParser.NOTRACE, 0); }
	public FLASH(): TerminalNode | undefined { return this.tryGetToken(jvmBasicParser.FLASH, 0); }
	public INVERSE(): TerminalNode | undefined { return this.tryGetToken(jvmBasicParser.INVERSE, 0); }
	public GR(): TerminalNode | undefined { return this.tryGetToken(jvmBasicParser.GR, 0); }
	public NORMAL(): TerminalNode | undefined { return this.tryGetToken(jvmBasicParser.NORMAL, 0); }
	public SHLOAD(): TerminalNode | undefined { return this.tryGetToken(jvmBasicParser.SHLOAD, 0); }
	public CLEAR(): TerminalNode | undefined { return this.tryGetToken(jvmBasicParser.CLEAR, 0); }
	public RUN(): TerminalNode | undefined { return this.tryGetToken(jvmBasicParser.RUN, 0); }
	public STOP(): TerminalNode | undefined { return this.tryGetToken(jvmBasicParser.STOP, 0); }
	public TEXT(): TerminalNode | undefined { return this.tryGetToken(jvmBasicParser.TEXT, 0); }
	public HOME(): TerminalNode | undefined { return this.tryGetToken(jvmBasicParser.HOME, 0); }
	public HGR(): TerminalNode | undefined { return this.tryGetToken(jvmBasicParser.HGR, 0); }
	public HGR2(): TerminalNode | undefined { return this.tryGetToken(jvmBasicParser.HGR2, 0); }
	public endstmt(): EndstmtContext | undefined {
		return this.tryGetRuleContext(0, EndstmtContext);
	}
	public returnstmt(): ReturnstmtContext | undefined {
		return this.tryGetRuleContext(0, ReturnstmtContext);
	}
	public restorestmt(): RestorestmtContext | undefined {
		return this.tryGetRuleContext(0, RestorestmtContext);
	}
	public amptstmt(): AmptstmtContext | undefined {
		return this.tryGetRuleContext(0, AmptstmtContext);
	}
	public popstmt(): PopstmtContext | undefined {
		return this.tryGetRuleContext(0, PopstmtContext);
	}
	public liststmt(): ListstmtContext | undefined {
		return this.tryGetRuleContext(0, ListstmtContext);
	}
	public storestmt(): StorestmtContext | undefined {
		return this.tryGetRuleContext(0, StorestmtContext);
	}
	public getstmt(): GetstmtContext | undefined {
		return this.tryGetRuleContext(0, GetstmtContext);
	}
	public recallstmt(): RecallstmtContext | undefined {
		return this.tryGetRuleContext(0, RecallstmtContext);
	}
	public nextstmt(): NextstmtContext | undefined {
		return this.tryGetRuleContext(0, NextstmtContext);
	}
	public instmt(): InstmtContext | undefined {
		return this.tryGetRuleContext(0, InstmtContext);
	}
	public prstmt(): PrstmtContext | undefined {
		return this.tryGetRuleContext(0, PrstmtContext);
	}
	public onerrstmt(): OnerrstmtContext | undefined {
		return this.tryGetRuleContext(0, OnerrstmtContext);
	}
	public hlinstmt(): HlinstmtContext | undefined {
		return this.tryGetRuleContext(0, HlinstmtContext);
	}
	public vlinstmt(): VlinstmtContext | undefined {
		return this.tryGetRuleContext(0, VlinstmtContext);
	}
	public colorstmt(): ColorstmtContext | undefined {
		return this.tryGetRuleContext(0, ColorstmtContext);
	}
	public speedstmt(): SpeedstmtContext | undefined {
		return this.tryGetRuleContext(0, SpeedstmtContext);
	}
	public scalestmt(): ScalestmtContext | undefined {
		return this.tryGetRuleContext(0, ScalestmtContext);
	}
	public rotstmt(): RotstmtContext | undefined {
		return this.tryGetRuleContext(0, RotstmtContext);
	}
	public hcolorstmt(): HcolorstmtContext | undefined {
		return this.tryGetRuleContext(0, HcolorstmtContext);
	}
	public himemstmt(): HimemstmtContext | undefined {
		return this.tryGetRuleContext(0, HimemstmtContext);
	}
	public lomemstmt(): LomemstmtContext | undefined {
		return this.tryGetRuleContext(0, LomemstmtContext);
	}
	public printstmt1(): Printstmt1Context | undefined {
		return this.tryGetRuleContext(0, Printstmt1Context);
	}
	public pokestmt(): PokestmtContext | undefined {
		return this.tryGetRuleContext(0, PokestmtContext);
	}
	public plotstmt(): PlotstmtContext | undefined {
		return this.tryGetRuleContext(0, PlotstmtContext);
	}
	public ongotostmt(): OngotostmtContext | undefined {
		return this.tryGetRuleContext(0, OngotostmtContext);
	}
	public ongosubstmt(): OngosubstmtContext | undefined {
		return this.tryGetRuleContext(0, OngosubstmtContext);
	}
	public ifstmt(): IfstmtContext | undefined {
		return this.tryGetRuleContext(0, IfstmtContext);
	}
	public forstmt1(): Forstmt1Context | undefined {
		return this.tryGetRuleContext(0, Forstmt1Context);
	}
	public forstmt2(): Forstmt2Context | undefined {
		return this.tryGetRuleContext(0, Forstmt2Context);
	}
	public inputstmt(): InputstmtContext | undefined {
		return this.tryGetRuleContext(0, InputstmtContext);
	}
	public tabstmt(): TabstmtContext | undefined {
		return this.tryGetRuleContext(0, TabstmtContext);
	}
	public dimstmt(): DimstmtContext | undefined {
		return this.tryGetRuleContext(0, DimstmtContext);
	}
	public gotostmt(): GotostmtContext | undefined {
		return this.tryGetRuleContext(0, GotostmtContext);
	}
	public gosubstmt(): GosubstmtContext | undefined {
		return this.tryGetRuleContext(0, GosubstmtContext);
	}
	public callstmt(): CallstmtContext | undefined {
		return this.tryGetRuleContext(0, CallstmtContext);
	}
	public readstmt(): ReadstmtContext | undefined {
		return this.tryGetRuleContext(0, ReadstmtContext);
	}
	public hplotstmt(): HplotstmtContext | undefined {
		return this.tryGetRuleContext(0, HplotstmtContext);
	}
	public vplotstmt(): VplotstmtContext | undefined {
		return this.tryGetRuleContext(0, VplotstmtContext);
	}
	public vtabstmnt(): VtabstmntContext | undefined {
		return this.tryGetRuleContext(0, VtabstmntContext);
	}
	public htabstmnt(): HtabstmntContext | undefined {
		return this.tryGetRuleContext(0, HtabstmntContext);
	}
	public waitstmt(): WaitstmtContext | undefined {
		return this.tryGetRuleContext(0, WaitstmtContext);
	}
	public datastmt(): DatastmtContext | undefined {
		return this.tryGetRuleContext(0, DatastmtContext);
	}
	public xdrawstmt(): XdrawstmtContext | undefined {
		return this.tryGetRuleContext(0, XdrawstmtContext);
	}
	public drawstmt(): DrawstmtContext | undefined {
		return this.tryGetRuleContext(0, DrawstmtContext);
	}
	public defstmt(): DefstmtContext | undefined {
		return this.tryGetRuleContext(0, DefstmtContext);
	}
	public letstmt(): LetstmtContext | undefined {
		return this.tryGetRuleContext(0, LetstmtContext);
	}
	public includestmt(): IncludestmtContext | undefined {
		return this.tryGetRuleContext(0, IncludestmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return jvmBasicParser.RULE_statement; }
	// @Override
	public enterRule(listener: jvmBasicListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: jvmBasicListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
}


export class VardeclContext extends ParserRuleContext {
	public var(): VarContext {
		return this.getRuleContext(0, VarContext);
	}
	public LPAREN(): TerminalNode[];
	public LPAREN(i: number): TerminalNode;
	public LPAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(jvmBasicParser.LPAREN);
		} else {
			return this.getToken(jvmBasicParser.LPAREN, i);
		}
	}
	public exprlist(): ExprlistContext[];
	public exprlist(i: number): ExprlistContext;
	public exprlist(i?: number): ExprlistContext | ExprlistContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprlistContext);
		} else {
			return this.getRuleContext(i, ExprlistContext);
		}
	}
	public RPAREN(): TerminalNode[];
	public RPAREN(i: number): TerminalNode;
	public RPAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(jvmBasicParser.RPAREN);
		} else {
			return this.getToken(jvmBasicParser.RPAREN, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return jvmBasicParser.RULE_vardecl; }
	// @Override
	public enterRule(listener: jvmBasicListener): void {
		if (listener.enterVardecl) {
			listener.enterVardecl(this);
		}
	}
	// @Override
	public exitRule(listener: jvmBasicListener): void {
		if (listener.exitVardecl) {
			listener.exitVardecl(this);
		}
	}
}


export class Printstmt1Context extends ParserRuleContext {
	public PRINT(): TerminalNode | undefined { return this.tryGetToken(jvmBasicParser.PRINT, 0); }
	public QUESTION(): TerminalNode | undefined { return this.tryGetToken(jvmBasicParser.QUESTION, 0); }
	public printlist(): PrintlistContext | undefined {
		return this.tryGetRuleContext(0, PrintlistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return jvmBasicParser.RULE_printstmt1; }
	// @Override
	public enterRule(listener: jvmBasicListener): void {
		if (listener.enterPrintstmt1) {
			listener.enterPrintstmt1(this);
		}
	}
	// @Override
	public exitRule(listener: jvmBasicListener): void {
		if (listener.exitPrintstmt1) {
			listener.exitPrintstmt1(this);
		}
	}
}


export class PrintlistContext extends ParserRuleContext {
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
			return this.getTokens(jvmBasicParser.COMMA);
		} else {
			return this.getToken(jvmBasicParser.COMMA, i);
		}
	}
	public SEMICOLON(): TerminalNode[];
	public SEMICOLON(i: number): TerminalNode;
	public SEMICOLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(jvmBasicParser.SEMICOLON);
		} else {
			return this.getToken(jvmBasicParser.SEMICOLON, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return jvmBasicParser.RULE_printlist; }
	// @Override
	public enterRule(listener: jvmBasicListener): void {
		if (listener.enterPrintlist) {
			listener.enterPrintlist(this);
		}
	}
	// @Override
	public exitRule(listener: jvmBasicListener): void {
		if (listener.exitPrintlist) {
			listener.exitPrintlist(this);
		}
	}
}


export class GetstmtContext extends ParserRuleContext {
	public GET(): TerminalNode { return this.getToken(jvmBasicParser.GET, 0); }
	public exprlist(): ExprlistContext {
		return this.getRuleContext(0, ExprlistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return jvmBasicParser.RULE_getstmt; }
	// @Override
	public enterRule(listener: jvmBasicListener): void {
		if (listener.enterGetstmt) {
			listener.enterGetstmt(this);
		}
	}
	// @Override
	public exitRule(listener: jvmBasicListener): void {
		if (listener.exitGetstmt) {
			listener.exitGetstmt(this);
		}
	}
}


export class LetstmtContext extends ParserRuleContext {
	public variableassignment(): VariableassignmentContext {
		return this.getRuleContext(0, VariableassignmentContext);
	}
	public LET(): TerminalNode | undefined { return this.tryGetToken(jvmBasicParser.LET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return jvmBasicParser.RULE_letstmt; }
	// @Override
	public enterRule(listener: jvmBasicListener): void {
		if (listener.enterLetstmt) {
			listener.enterLetstmt(this);
		}
	}
	// @Override
	public exitRule(listener: jvmBasicListener): void {
		if (listener.exitLetstmt) {
			listener.exitLetstmt(this);
		}
	}
}


export class VariableassignmentContext extends ParserRuleContext {
	public vardecl(): VardeclContext {
		return this.getRuleContext(0, VardeclContext);
	}
	public EQ(): TerminalNode { return this.getToken(jvmBasicParser.EQ, 0); }
	public exprlist(): ExprlistContext {
		return this.getRuleContext(0, ExprlistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return jvmBasicParser.RULE_variableassignment; }
	// @Override
	public enterRule(listener: jvmBasicListener): void {
		if (listener.enterVariableassignment) {
			listener.enterVariableassignment(this);
		}
	}
	// @Override
	public exitRule(listener: jvmBasicListener): void {
		if (listener.exitVariableassignment) {
			listener.exitVariableassignment(this);
		}
	}
}


export class RelopContext extends ParserRuleContext {
	public GTE(): TerminalNode | undefined { return this.tryGetToken(jvmBasicParser.GTE, 0); }
	public GT(): TerminalNode | undefined { return this.tryGetToken(jvmBasicParser.GT, 0); }
	public EQ(): TerminalNode | undefined { return this.tryGetToken(jvmBasicParser.EQ, 0); }
	public LTE(): TerminalNode | undefined { return this.tryGetToken(jvmBasicParser.LTE, 0); }
	public LT(): TerminalNode | undefined { return this.tryGetToken(jvmBasicParser.LT, 0); }
	public neq(): NeqContext | undefined {
		return this.tryGetRuleContext(0, NeqContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return jvmBasicParser.RULE_relop; }
	// @Override
	public enterRule(listener: jvmBasicListener): void {
		if (listener.enterRelop) {
			listener.enterRelop(this);
		}
	}
	// @Override
	public exitRule(listener: jvmBasicListener): void {
		if (listener.exitRelop) {
			listener.exitRelop(this);
		}
	}
}


export class NeqContext extends ParserRuleContext {
	public LT(): TerminalNode { return this.getToken(jvmBasicParser.LT, 0); }
	public GT(): TerminalNode { return this.getToken(jvmBasicParser.GT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return jvmBasicParser.RULE_neq; }
	// @Override
	public enterRule(listener: jvmBasicListener): void {
		if (listener.enterNeq) {
			listener.enterNeq(this);
		}
	}
	// @Override
	public exitRule(listener: jvmBasicListener): void {
		if (listener.exitNeq) {
			listener.exitNeq(this);
		}
	}
}


export class IfstmtContext extends ParserRuleContext {
	public IF(): TerminalNode { return this.getToken(jvmBasicParser.IF, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public statement(): StatementContext | undefined {
		return this.tryGetRuleContext(0, StatementContext);
	}
	public linenumber(): LinenumberContext | undefined {
		return this.tryGetRuleContext(0, LinenumberContext);
	}
	public THEN(): TerminalNode | undefined { return this.tryGetToken(jvmBasicParser.THEN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return jvmBasicParser.RULE_ifstmt; }
	// @Override
	public enterRule(listener: jvmBasicListener): void {
		if (listener.enterIfstmt) {
			listener.enterIfstmt(this);
		}
	}
	// @Override
	public exitRule(listener: jvmBasicListener): void {
		if (listener.exitIfstmt) {
			listener.exitIfstmt(this);
		}
	}
}


export class Forstmt1Context extends ParserRuleContext {
	public FOR(): TerminalNode { return this.getToken(jvmBasicParser.FOR, 0); }
	public vardecl(): VardeclContext[];
	public vardecl(i: number): VardeclContext;
	public vardecl(i?: number): VardeclContext | VardeclContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VardeclContext);
		} else {
			return this.getRuleContext(i, VardeclContext);
		}
	}
	public EQ(): TerminalNode { return this.getToken(jvmBasicParser.EQ, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public TO(): TerminalNode { return this.getToken(jvmBasicParser.TO, 0); }
	public STEP(): TerminalNode | undefined { return this.tryGetToken(jvmBasicParser.STEP, 0); }
	public statement(): StatementContext | undefined {
		return this.tryGetRuleContext(0, StatementContext);
	}
	public NEXT(): TerminalNode | undefined { return this.tryGetToken(jvmBasicParser.NEXT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return jvmBasicParser.RULE_forstmt1; }
	// @Override
	public enterRule(listener: jvmBasicListener): void {
		if (listener.enterForstmt1) {
			listener.enterForstmt1(this);
		}
	}
	// @Override
	public exitRule(listener: jvmBasicListener): void {
		if (listener.exitForstmt1) {
			listener.exitForstmt1(this);
		}
	}
}


export class Forstmt2Context extends ParserRuleContext {
	public FOR(): TerminalNode { return this.getToken(jvmBasicParser.FOR, 0); }
	public vardecl(): VardeclContext {
		return this.getRuleContext(0, VardeclContext);
	}
	public EQ(): TerminalNode { return this.getToken(jvmBasicParser.EQ, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public TO(): TerminalNode { return this.getToken(jvmBasicParser.TO, 0); }
	public STEP(): TerminalNode | undefined { return this.tryGetToken(jvmBasicParser.STEP, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return jvmBasicParser.RULE_forstmt2; }
	// @Override
	public enterRule(listener: jvmBasicListener): void {
		if (listener.enterForstmt2) {
			listener.enterForstmt2(this);
		}
	}
	// @Override
	public exitRule(listener: jvmBasicListener): void {
		if (listener.exitForstmt2) {
			listener.exitForstmt2(this);
		}
	}
}


export class NextstmtContext extends ParserRuleContext {
	public NEXT(): TerminalNode { return this.getToken(jvmBasicParser.NEXT, 0); }
	public vardecl(): VardeclContext[];
	public vardecl(i: number): VardeclContext;
	public vardecl(i?: number): VardeclContext | VardeclContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VardeclContext);
		} else {
			return this.getRuleContext(i, VardeclContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(jvmBasicParser.COMMA);
		} else {
			return this.getToken(jvmBasicParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return jvmBasicParser.RULE_nextstmt; }
	// @Override
	public enterRule(listener: jvmBasicListener): void {
		if (listener.enterNextstmt) {
			listener.enterNextstmt(this);
		}
	}
	// @Override
	public exitRule(listener: jvmBasicListener): void {
		if (listener.exitNextstmt) {
			listener.exitNextstmt(this);
		}
	}
}


export class InputstmtContext extends ParserRuleContext {
	public INPUT(): TerminalNode { return this.getToken(jvmBasicParser.INPUT, 0); }
	public varlist(): VarlistContext {
		return this.getRuleContext(0, VarlistContext);
	}
	public STRINGLITERAL(): TerminalNode | undefined { return this.tryGetToken(jvmBasicParser.STRINGLITERAL, 0); }
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(jvmBasicParser.COMMA, 0); }
	public SEMICOLON(): TerminalNode | undefined { return this.tryGetToken(jvmBasicParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return jvmBasicParser.RULE_inputstmt; }
	// @Override
	public enterRule(listener: jvmBasicListener): void {
		if (listener.enterInputstmt) {
			listener.enterInputstmt(this);
		}
	}
	// @Override
	public exitRule(listener: jvmBasicListener): void {
		if (listener.exitInputstmt) {
			listener.exitInputstmt(this);
		}
	}
}


export class ReadstmtContext extends ParserRuleContext {
	public READ(): TerminalNode { return this.getToken(jvmBasicParser.READ, 0); }
	public varlist(): VarlistContext {
		return this.getRuleContext(0, VarlistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return jvmBasicParser.RULE_readstmt; }
	// @Override
	public enterRule(listener: jvmBasicListener): void {
		if (listener.enterReadstmt) {
			listener.enterReadstmt(this);
		}
	}
	// @Override
	public exitRule(listener: jvmBasicListener): void {
		if (listener.exitReadstmt) {
			listener.exitReadstmt(this);
		}
	}
}


export class DimstmtContext extends ParserRuleContext {
	public DIM(): TerminalNode { return this.getToken(jvmBasicParser.DIM, 0); }
	public varlist(): VarlistContext {
		return this.getRuleContext(0, VarlistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return jvmBasicParser.RULE_dimstmt; }
	// @Override
	public enterRule(listener: jvmBasicListener): void {
		if (listener.enterDimstmt) {
			listener.enterDimstmt(this);
		}
	}
	// @Override
	public exitRule(listener: jvmBasicListener): void {
		if (listener.exitDimstmt) {
			listener.exitDimstmt(this);
		}
	}
}


export class GotostmtContext extends ParserRuleContext {
	public GOTO(): TerminalNode { return this.getToken(jvmBasicParser.GOTO, 0); }
	public linenumber(): LinenumberContext {
		return this.getRuleContext(0, LinenumberContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return jvmBasicParser.RULE_gotostmt; }
	// @Override
	public enterRule(listener: jvmBasicListener): void {
		if (listener.enterGotostmt) {
			listener.enterGotostmt(this);
		}
	}
	// @Override
	public exitRule(listener: jvmBasicListener): void {
		if (listener.exitGotostmt) {
			listener.exitGotostmt(this);
		}
	}
}


export class GosubstmtContext extends ParserRuleContext {
	public GOSUB(): TerminalNode { return this.getToken(jvmBasicParser.GOSUB, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return jvmBasicParser.RULE_gosubstmt; }
	// @Override
	public enterRule(listener: jvmBasicListener): void {
		if (listener.enterGosubstmt) {
			listener.enterGosubstmt(this);
		}
	}
	// @Override
	public exitRule(listener: jvmBasicListener): void {
		if (listener.exitGosubstmt) {
			listener.exitGosubstmt(this);
		}
	}
}


export class PokestmtContext extends ParserRuleContext {
	public POKE(): TerminalNode { return this.getToken(jvmBasicParser.POKE, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public COMMA(): TerminalNode { return this.getToken(jvmBasicParser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return jvmBasicParser.RULE_pokestmt; }
	// @Override
	public enterRule(listener: jvmBasicListener): void {
		if (listener.enterPokestmt) {
			listener.enterPokestmt(this);
		}
	}
	// @Override
	public exitRule(listener: jvmBasicListener): void {
		if (listener.exitPokestmt) {
			listener.exitPokestmt(this);
		}
	}
}


export class CallstmtContext extends ParserRuleContext {
	public CALL(): TerminalNode { return this.getToken(jvmBasicParser.CALL, 0); }
	public exprlist(): ExprlistContext {
		return this.getRuleContext(0, ExprlistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return jvmBasicParser.RULE_callstmt; }
	// @Override
	public enterRule(listener: jvmBasicListener): void {
		if (listener.enterCallstmt) {
			listener.enterCallstmt(this);
		}
	}
	// @Override
	public exitRule(listener: jvmBasicListener): void {
		if (listener.exitCallstmt) {
			listener.exitCallstmt(this);
		}
	}
}


export class HplotstmtContext extends ParserRuleContext {
	public HPLOT(): TerminalNode { return this.getToken(jvmBasicParser.HPLOT, 0); }
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
			return this.getTokens(jvmBasicParser.COMMA);
		} else {
			return this.getToken(jvmBasicParser.COMMA, i);
		}
	}
	public TO(): TerminalNode[];
	public TO(i: number): TerminalNode;
	public TO(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(jvmBasicParser.TO);
		} else {
			return this.getToken(jvmBasicParser.TO, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return jvmBasicParser.RULE_hplotstmt; }
	// @Override
	public enterRule(listener: jvmBasicListener): void {
		if (listener.enterHplotstmt) {
			listener.enterHplotstmt(this);
		}
	}
	// @Override
	public exitRule(listener: jvmBasicListener): void {
		if (listener.exitHplotstmt) {
			listener.exitHplotstmt(this);
		}
	}
}


export class VplotstmtContext extends ParserRuleContext {
	public VPLOT(): TerminalNode { return this.getToken(jvmBasicParser.VPLOT, 0); }
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
			return this.getTokens(jvmBasicParser.COMMA);
		} else {
			return this.getToken(jvmBasicParser.COMMA, i);
		}
	}
	public TO(): TerminalNode[];
	public TO(i: number): TerminalNode;
	public TO(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(jvmBasicParser.TO);
		} else {
			return this.getToken(jvmBasicParser.TO, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return jvmBasicParser.RULE_vplotstmt; }
	// @Override
	public enterRule(listener: jvmBasicListener): void {
		if (listener.enterVplotstmt) {
			listener.enterVplotstmt(this);
		}
	}
	// @Override
	public exitRule(listener: jvmBasicListener): void {
		if (listener.exitVplotstmt) {
			listener.exitVplotstmt(this);
		}
	}
}


export class PlotstmtContext extends ParserRuleContext {
	public PLOT(): TerminalNode { return this.getToken(jvmBasicParser.PLOT, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public COMMA(): TerminalNode { return this.getToken(jvmBasicParser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return jvmBasicParser.RULE_plotstmt; }
	// @Override
	public enterRule(listener: jvmBasicListener): void {
		if (listener.enterPlotstmt) {
			listener.enterPlotstmt(this);
		}
	}
	// @Override
	public exitRule(listener: jvmBasicListener): void {
		if (listener.exitPlotstmt) {
			listener.exitPlotstmt(this);
		}
	}
}


export class OngotostmtContext extends ParserRuleContext {
	public ON(): TerminalNode { return this.getToken(jvmBasicParser.ON, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public GOTO(): TerminalNode { return this.getToken(jvmBasicParser.GOTO, 0); }
	public linenumber(): LinenumberContext[];
	public linenumber(i: number): LinenumberContext;
	public linenumber(i?: number): LinenumberContext | LinenumberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LinenumberContext);
		} else {
			return this.getRuleContext(i, LinenumberContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(jvmBasicParser.COMMA);
		} else {
			return this.getToken(jvmBasicParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return jvmBasicParser.RULE_ongotostmt; }
	// @Override
	public enterRule(listener: jvmBasicListener): void {
		if (listener.enterOngotostmt) {
			listener.enterOngotostmt(this);
		}
	}
	// @Override
	public exitRule(listener: jvmBasicListener): void {
		if (listener.exitOngotostmt) {
			listener.exitOngotostmt(this);
		}
	}
}


export class OngosubstmtContext extends ParserRuleContext {
	public ON(): TerminalNode { return this.getToken(jvmBasicParser.ON, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public GOSUB(): TerminalNode { return this.getToken(jvmBasicParser.GOSUB, 0); }
	public linenumber(): LinenumberContext[];
	public linenumber(i: number): LinenumberContext;
	public linenumber(i?: number): LinenumberContext | LinenumberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LinenumberContext);
		} else {
			return this.getRuleContext(i, LinenumberContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(jvmBasicParser.COMMA);
		} else {
			return this.getToken(jvmBasicParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return jvmBasicParser.RULE_ongosubstmt; }
	// @Override
	public enterRule(listener: jvmBasicListener): void {
		if (listener.enterOngosubstmt) {
			listener.enterOngosubstmt(this);
		}
	}
	// @Override
	public exitRule(listener: jvmBasicListener): void {
		if (listener.exitOngosubstmt) {
			listener.exitOngosubstmt(this);
		}
	}
}


export class VtabstmntContext extends ParserRuleContext {
	public VTAB(): TerminalNode { return this.getToken(jvmBasicParser.VTAB, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return jvmBasicParser.RULE_vtabstmnt; }
	// @Override
	public enterRule(listener: jvmBasicListener): void {
		if (listener.enterVtabstmnt) {
			listener.enterVtabstmnt(this);
		}
	}
	// @Override
	public exitRule(listener: jvmBasicListener): void {
		if (listener.exitVtabstmnt) {
			listener.exitVtabstmnt(this);
		}
	}
}


export class HtabstmntContext extends ParserRuleContext {
	public HTAB(): TerminalNode { return this.getToken(jvmBasicParser.HTAB, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return jvmBasicParser.RULE_htabstmnt; }
	// @Override
	public enterRule(listener: jvmBasicListener): void {
		if (listener.enterHtabstmnt) {
			listener.enterHtabstmnt(this);
		}
	}
	// @Override
	public exitRule(listener: jvmBasicListener): void {
		if (listener.exitHtabstmnt) {
			listener.exitHtabstmnt(this);
		}
	}
}


export class HimemstmtContext extends ParserRuleContext {
	public HIMEM(): TerminalNode { return this.getToken(jvmBasicParser.HIMEM, 0); }
	public COLON(): TerminalNode { return this.getToken(jvmBasicParser.COLON, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return jvmBasicParser.RULE_himemstmt; }
	// @Override
	public enterRule(listener: jvmBasicListener): void {
		if (listener.enterHimemstmt) {
			listener.enterHimemstmt(this);
		}
	}
	// @Override
	public exitRule(listener: jvmBasicListener): void {
		if (listener.exitHimemstmt) {
			listener.exitHimemstmt(this);
		}
	}
}


export class LomemstmtContext extends ParserRuleContext {
	public LOMEM(): TerminalNode { return this.getToken(jvmBasicParser.LOMEM, 0); }
	public COLON(): TerminalNode { return this.getToken(jvmBasicParser.COLON, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return jvmBasicParser.RULE_lomemstmt; }
	// @Override
	public enterRule(listener: jvmBasicListener): void {
		if (listener.enterLomemstmt) {
			listener.enterLomemstmt(this);
		}
	}
	// @Override
	public exitRule(listener: jvmBasicListener): void {
		if (listener.exitLomemstmt) {
			listener.exitLomemstmt(this);
		}
	}
}


export class DatastmtContext extends ParserRuleContext {
	public DATA(): TerminalNode { return this.getToken(jvmBasicParser.DATA, 0); }
	public datum(): DatumContext[];
	public datum(i: number): DatumContext;
	public datum(i?: number): DatumContext | DatumContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DatumContext);
		} else {
			return this.getRuleContext(i, DatumContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(jvmBasicParser.COMMA);
		} else {
			return this.getToken(jvmBasicParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return jvmBasicParser.RULE_datastmt; }
	// @Override
	public enterRule(listener: jvmBasicListener): void {
		if (listener.enterDatastmt) {
			listener.enterDatastmt(this);
		}
	}
	// @Override
	public exitRule(listener: jvmBasicListener): void {
		if (listener.exitDatastmt) {
			listener.exitDatastmt(this);
		}
	}
}


export class DatumContext extends ParserRuleContext {
	public number(): NumberContext | undefined {
		return this.tryGetRuleContext(0, NumberContext);
	}
	public STRINGLITERAL(): TerminalNode | undefined { return this.tryGetToken(jvmBasicParser.STRINGLITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return jvmBasicParser.RULE_datum; }
	// @Override
	public enterRule(listener: jvmBasicListener): void {
		if (listener.enterDatum) {
			listener.enterDatum(this);
		}
	}
	// @Override
	public exitRule(listener: jvmBasicListener): void {
		if (listener.exitDatum) {
			listener.exitDatum(this);
		}
	}
}


export class WaitstmtContext extends ParserRuleContext {
	public WAIT(): TerminalNode { return this.getToken(jvmBasicParser.WAIT, 0); }
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
			return this.getTokens(jvmBasicParser.COMMA);
		} else {
			return this.getToken(jvmBasicParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return jvmBasicParser.RULE_waitstmt; }
	// @Override
	public enterRule(listener: jvmBasicListener): void {
		if (listener.enterWaitstmt) {
			listener.enterWaitstmt(this);
		}
	}
	// @Override
	public exitRule(listener: jvmBasicListener): void {
		if (listener.exitWaitstmt) {
			listener.exitWaitstmt(this);
		}
	}
}


export class XdrawstmtContext extends ParserRuleContext {
	public XDRAW(): TerminalNode { return this.getToken(jvmBasicParser.XDRAW, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public AT(): TerminalNode | undefined { return this.tryGetToken(jvmBasicParser.AT, 0); }
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(jvmBasicParser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return jvmBasicParser.RULE_xdrawstmt; }
	// @Override
	public enterRule(listener: jvmBasicListener): void {
		if (listener.enterXdrawstmt) {
			listener.enterXdrawstmt(this);
		}
	}
	// @Override
	public exitRule(listener: jvmBasicListener): void {
		if (listener.exitXdrawstmt) {
			listener.exitXdrawstmt(this);
		}
	}
}


export class DrawstmtContext extends ParserRuleContext {
	public DRAW(): TerminalNode { return this.getToken(jvmBasicParser.DRAW, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public AT(): TerminalNode | undefined { return this.tryGetToken(jvmBasicParser.AT, 0); }
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(jvmBasicParser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return jvmBasicParser.RULE_drawstmt; }
	// @Override
	public enterRule(listener: jvmBasicListener): void {
		if (listener.enterDrawstmt) {
			listener.enterDrawstmt(this);
		}
	}
	// @Override
	public exitRule(listener: jvmBasicListener): void {
		if (listener.exitDrawstmt) {
			listener.exitDrawstmt(this);
		}
	}
}


export class DefstmtContext extends ParserRuleContext {
	public DEF(): TerminalNode { return this.getToken(jvmBasicParser.DEF, 0); }
	public var(): VarContext[];
	public var(i: number): VarContext;
	public var(i?: number): VarContext | VarContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VarContext);
		} else {
			return this.getRuleContext(i, VarContext);
		}
	}
	public LPAREN(): TerminalNode { return this.getToken(jvmBasicParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(jvmBasicParser.RPAREN, 0); }
	public EQ(): TerminalNode { return this.getToken(jvmBasicParser.EQ, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public FN(): TerminalNode | undefined { return this.tryGetToken(jvmBasicParser.FN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return jvmBasicParser.RULE_defstmt; }
	// @Override
	public enterRule(listener: jvmBasicListener): void {
		if (listener.enterDefstmt) {
			listener.enterDefstmt(this);
		}
	}
	// @Override
	public exitRule(listener: jvmBasicListener): void {
		if (listener.exitDefstmt) {
			listener.exitDefstmt(this);
		}
	}
}


export class TabstmtContext extends ParserRuleContext {
	public TAB(): TerminalNode { return this.getToken(jvmBasicParser.TAB, 0); }
	public LPAREN(): TerminalNode { return this.getToken(jvmBasicParser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(jvmBasicParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return jvmBasicParser.RULE_tabstmt; }
	// @Override
	public enterRule(listener: jvmBasicListener): void {
		if (listener.enterTabstmt) {
			listener.enterTabstmt(this);
		}
	}
	// @Override
	public exitRule(listener: jvmBasicListener): void {
		if (listener.exitTabstmt) {
			listener.exitTabstmt(this);
		}
	}
}


export class SpeedstmtContext extends ParserRuleContext {
	public SPEED(): TerminalNode { return this.getToken(jvmBasicParser.SPEED, 0); }
	public EQ(): TerminalNode { return this.getToken(jvmBasicParser.EQ, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return jvmBasicParser.RULE_speedstmt; }
	// @Override
	public enterRule(listener: jvmBasicListener): void {
		if (listener.enterSpeedstmt) {
			listener.enterSpeedstmt(this);
		}
	}
	// @Override
	public exitRule(listener: jvmBasicListener): void {
		if (listener.exitSpeedstmt) {
			listener.exitSpeedstmt(this);
		}
	}
}


export class RotstmtContext extends ParserRuleContext {
	public ROT(): TerminalNode { return this.getToken(jvmBasicParser.ROT, 0); }
	public EQ(): TerminalNode { return this.getToken(jvmBasicParser.EQ, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return jvmBasicParser.RULE_rotstmt; }
	// @Override
	public enterRule(listener: jvmBasicListener): void {
		if (listener.enterRotstmt) {
			listener.enterRotstmt(this);
		}
	}
	// @Override
	public exitRule(listener: jvmBasicListener): void {
		if (listener.exitRotstmt) {
			listener.exitRotstmt(this);
		}
	}
}


export class ScalestmtContext extends ParserRuleContext {
	public SCALE(): TerminalNode { return this.getToken(jvmBasicParser.SCALE, 0); }
	public EQ(): TerminalNode { return this.getToken(jvmBasicParser.EQ, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return jvmBasicParser.RULE_scalestmt; }
	// @Override
	public enterRule(listener: jvmBasicListener): void {
		if (listener.enterScalestmt) {
			listener.enterScalestmt(this);
		}
	}
	// @Override
	public exitRule(listener: jvmBasicListener): void {
		if (listener.exitScalestmt) {
			listener.exitScalestmt(this);
		}
	}
}


export class ColorstmtContext extends ParserRuleContext {
	public COLOR(): TerminalNode { return this.getToken(jvmBasicParser.COLOR, 0); }
	public EQ(): TerminalNode { return this.getToken(jvmBasicParser.EQ, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return jvmBasicParser.RULE_colorstmt; }
	// @Override
	public enterRule(listener: jvmBasicListener): void {
		if (listener.enterColorstmt) {
			listener.enterColorstmt(this);
		}
	}
	// @Override
	public exitRule(listener: jvmBasicListener): void {
		if (listener.exitColorstmt) {
			listener.exitColorstmt(this);
		}
	}
}


export class HcolorstmtContext extends ParserRuleContext {
	public HCOLOR(): TerminalNode { return this.getToken(jvmBasicParser.HCOLOR, 0); }
	public EQ(): TerminalNode { return this.getToken(jvmBasicParser.EQ, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return jvmBasicParser.RULE_hcolorstmt; }
	// @Override
	public enterRule(listener: jvmBasicListener): void {
		if (listener.enterHcolorstmt) {
			listener.enterHcolorstmt(this);
		}
	}
	// @Override
	public exitRule(listener: jvmBasicListener): void {
		if (listener.exitHcolorstmt) {
			listener.exitHcolorstmt(this);
		}
	}
}


export class HlinstmtContext extends ParserRuleContext {
	public HLIN(): TerminalNode { return this.getToken(jvmBasicParser.HLIN, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public COMMA(): TerminalNode { return this.getToken(jvmBasicParser.COMMA, 0); }
	public AT(): TerminalNode { return this.getToken(jvmBasicParser.AT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return jvmBasicParser.RULE_hlinstmt; }
	// @Override
	public enterRule(listener: jvmBasicListener): void {
		if (listener.enterHlinstmt) {
			listener.enterHlinstmt(this);
		}
	}
	// @Override
	public exitRule(listener: jvmBasicListener): void {
		if (listener.exitHlinstmt) {
			listener.exitHlinstmt(this);
		}
	}
}


export class VlinstmtContext extends ParserRuleContext {
	public VLIN(): TerminalNode { return this.getToken(jvmBasicParser.VLIN, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public COMMA(): TerminalNode { return this.getToken(jvmBasicParser.COMMA, 0); }
	public AT(): TerminalNode { return this.getToken(jvmBasicParser.AT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return jvmBasicParser.RULE_vlinstmt; }
	// @Override
	public enterRule(listener: jvmBasicListener): void {
		if (listener.enterVlinstmt) {
			listener.enterVlinstmt(this);
		}
	}
	// @Override
	public exitRule(listener: jvmBasicListener): void {
		if (listener.exitVlinstmt) {
			listener.exitVlinstmt(this);
		}
	}
}


export class OnerrstmtContext extends ParserRuleContext {
	public ONERR(): TerminalNode { return this.getToken(jvmBasicParser.ONERR, 0); }
	public GOTO(): TerminalNode { return this.getToken(jvmBasicParser.GOTO, 0); }
	public linenumber(): LinenumberContext {
		return this.getRuleContext(0, LinenumberContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return jvmBasicParser.RULE_onerrstmt; }
	// @Override
	public enterRule(listener: jvmBasicListener): void {
		if (listener.enterOnerrstmt) {
			listener.enterOnerrstmt(this);
		}
	}
	// @Override
	public exitRule(listener: jvmBasicListener): void {
		if (listener.exitOnerrstmt) {
			listener.exitOnerrstmt(this);
		}
	}
}


export class PrstmtContext extends ParserRuleContext {
	public PRNUMBER(): TerminalNode { return this.getToken(jvmBasicParser.PRNUMBER, 0); }
	public NUMBER(): TerminalNode { return this.getToken(jvmBasicParser.NUMBER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return jvmBasicParser.RULE_prstmt; }
	// @Override
	public enterRule(listener: jvmBasicListener): void {
		if (listener.enterPrstmt) {
			listener.enterPrstmt(this);
		}
	}
	// @Override
	public exitRule(listener: jvmBasicListener): void {
		if (listener.exitPrstmt) {
			listener.exitPrstmt(this);
		}
	}
}


export class InstmtContext extends ParserRuleContext {
	public INNUMBER(): TerminalNode { return this.getToken(jvmBasicParser.INNUMBER, 0); }
	public NUMBER(): TerminalNode { return this.getToken(jvmBasicParser.NUMBER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return jvmBasicParser.RULE_instmt; }
	// @Override
	public enterRule(listener: jvmBasicListener): void {
		if (listener.enterInstmt) {
			listener.enterInstmt(this);
		}
	}
	// @Override
	public exitRule(listener: jvmBasicListener): void {
		if (listener.exitInstmt) {
			listener.exitInstmt(this);
		}
	}
}


export class StorestmtContext extends ParserRuleContext {
	public STORE(): TerminalNode { return this.getToken(jvmBasicParser.STORE, 0); }
	public vardecl(): VardeclContext {
		return this.getRuleContext(0, VardeclContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return jvmBasicParser.RULE_storestmt; }
	// @Override
	public enterRule(listener: jvmBasicListener): void {
		if (listener.enterStorestmt) {
			listener.enterStorestmt(this);
		}
	}
	// @Override
	public exitRule(listener: jvmBasicListener): void {
		if (listener.exitStorestmt) {
			listener.exitStorestmt(this);
		}
	}
}


export class RecallstmtContext extends ParserRuleContext {
	public RECALL(): TerminalNode { return this.getToken(jvmBasicParser.RECALL, 0); }
	public vardecl(): VardeclContext {
		return this.getRuleContext(0, VardeclContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return jvmBasicParser.RULE_recallstmt; }
	// @Override
	public enterRule(listener: jvmBasicListener): void {
		if (listener.enterRecallstmt) {
			listener.enterRecallstmt(this);
		}
	}
	// @Override
	public exitRule(listener: jvmBasicListener): void {
		if (listener.exitRecallstmt) {
			listener.exitRecallstmt(this);
		}
	}
}


export class ListstmtContext extends ParserRuleContext {
	public LIST(): TerminalNode { return this.getToken(jvmBasicParser.LIST, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return jvmBasicParser.RULE_liststmt; }
	// @Override
	public enterRule(listener: jvmBasicListener): void {
		if (listener.enterListstmt) {
			listener.enterListstmt(this);
		}
	}
	// @Override
	public exitRule(listener: jvmBasicListener): void {
		if (listener.exitListstmt) {
			listener.exitListstmt(this);
		}
	}
}


export class PopstmtContext extends ParserRuleContext {
	public POP(): TerminalNode { return this.getToken(jvmBasicParser.POP, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(jvmBasicParser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return jvmBasicParser.RULE_popstmt; }
	// @Override
	public enterRule(listener: jvmBasicListener): void {
		if (listener.enterPopstmt) {
			listener.enterPopstmt(this);
		}
	}
	// @Override
	public exitRule(listener: jvmBasicListener): void {
		if (listener.exitPopstmt) {
			listener.exitPopstmt(this);
		}
	}
}


export class AmptstmtContext extends ParserRuleContext {
	public AMPERSAND(): TerminalNode { return this.getToken(jvmBasicParser.AMPERSAND, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return jvmBasicParser.RULE_amptstmt; }
	// @Override
	public enterRule(listener: jvmBasicListener): void {
		if (listener.enterAmptstmt) {
			listener.enterAmptstmt(this);
		}
	}
	// @Override
	public exitRule(listener: jvmBasicListener): void {
		if (listener.exitAmptstmt) {
			listener.exitAmptstmt(this);
		}
	}
}


export class IncludestmtContext extends ParserRuleContext {
	public INCLUDE(): TerminalNode { return this.getToken(jvmBasicParser.INCLUDE, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return jvmBasicParser.RULE_includestmt; }
	// @Override
	public enterRule(listener: jvmBasicListener): void {
		if (listener.enterIncludestmt) {
			listener.enterIncludestmt(this);
		}
	}
	// @Override
	public exitRule(listener: jvmBasicListener): void {
		if (listener.exitIncludestmt) {
			listener.exitIncludestmt(this);
		}
	}
}


export class EndstmtContext extends ParserRuleContext {
	public END(): TerminalNode { return this.getToken(jvmBasicParser.END, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return jvmBasicParser.RULE_endstmt; }
	// @Override
	public enterRule(listener: jvmBasicListener): void {
		if (listener.enterEndstmt) {
			listener.enterEndstmt(this);
		}
	}
	// @Override
	public exitRule(listener: jvmBasicListener): void {
		if (listener.exitEndstmt) {
			listener.exitEndstmt(this);
		}
	}
}


export class ReturnstmtContext extends ParserRuleContext {
	public RETURN(): TerminalNode { return this.getToken(jvmBasicParser.RETURN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return jvmBasicParser.RULE_returnstmt; }
	// @Override
	public enterRule(listener: jvmBasicListener): void {
		if (listener.enterReturnstmt) {
			listener.enterReturnstmt(this);
		}
	}
	// @Override
	public exitRule(listener: jvmBasicListener): void {
		if (listener.exitReturnstmt) {
			listener.exitReturnstmt(this);
		}
	}
}


export class RestorestmtContext extends ParserRuleContext {
	public RESTORE(): TerminalNode { return this.getToken(jvmBasicParser.RESTORE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return jvmBasicParser.RULE_restorestmt; }
	// @Override
	public enterRule(listener: jvmBasicListener): void {
		if (listener.enterRestorestmt) {
			listener.enterRestorestmt(this);
		}
	}
	// @Override
	public exitRule(listener: jvmBasicListener): void {
		if (listener.exitRestorestmt) {
			listener.exitRestorestmt(this);
		}
	}
}


export class NumberContext extends ParserRuleContext {
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(jvmBasicParser.NUMBER, 0); }
	public FLOAT(): TerminalNode | undefined { return this.tryGetToken(jvmBasicParser.FLOAT, 0); }
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(jvmBasicParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(jvmBasicParser.MINUS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return jvmBasicParser.RULE_number; }
	// @Override
	public enterRule(listener: jvmBasicListener): void {
		if (listener.enterNumber) {
			listener.enterNumber(this);
		}
	}
	// @Override
	public exitRule(listener: jvmBasicListener): void {
		if (listener.exitNumber) {
			listener.exitNumber(this);
		}
	}
}


export class FuncContext extends ParserRuleContext {
	public STRINGLITERAL(): TerminalNode | undefined { return this.tryGetToken(jvmBasicParser.STRINGLITERAL, 0); }
	public number(): NumberContext | undefined {
		return this.tryGetRuleContext(0, NumberContext);
	}
	public tabfunc(): TabfuncContext | undefined {
		return this.tryGetRuleContext(0, TabfuncContext);
	}
	public vardecl(): VardeclContext | undefined {
		return this.tryGetRuleContext(0, VardeclContext);
	}
	public chrfunc(): ChrfuncContext | undefined {
		return this.tryGetRuleContext(0, ChrfuncContext);
	}
	public sqrfunc(): SqrfuncContext | undefined {
		return this.tryGetRuleContext(0, SqrfuncContext);
	}
	public lenfunc(): LenfuncContext | undefined {
		return this.tryGetRuleContext(0, LenfuncContext);
	}
	public strfunc(): StrfuncContext | undefined {
		return this.tryGetRuleContext(0, StrfuncContext);
	}
	public ascfunc(): AscfuncContext | undefined {
		return this.tryGetRuleContext(0, AscfuncContext);
	}
	public scrnfunc(): ScrnfuncContext | undefined {
		return this.tryGetRuleContext(0, ScrnfuncContext);
	}
	public midfunc(): MidfuncContext | undefined {
		return this.tryGetRuleContext(0, MidfuncContext);
	}
	public pdlfunc(): PdlfuncContext | undefined {
		return this.tryGetRuleContext(0, PdlfuncContext);
	}
	public peekfunc(): PeekfuncContext | undefined {
		return this.tryGetRuleContext(0, PeekfuncContext);
	}
	public intfunc(): IntfuncContext | undefined {
		return this.tryGetRuleContext(0, IntfuncContext);
	}
	public spcfunc(): SpcfuncContext | undefined {
		return this.tryGetRuleContext(0, SpcfuncContext);
	}
	public frefunc(): FrefuncContext | undefined {
		return this.tryGetRuleContext(0, FrefuncContext);
	}
	public posfunc(): PosfuncContext | undefined {
		return this.tryGetRuleContext(0, PosfuncContext);
	}
	public usrfunc(): UsrfuncContext | undefined {
		return this.tryGetRuleContext(0, UsrfuncContext);
	}
	public leftfunc(): LeftfuncContext | undefined {
		return this.tryGetRuleContext(0, LeftfuncContext);
	}
	public valfunc(): ValfuncContext | undefined {
		return this.tryGetRuleContext(0, ValfuncContext);
	}
	public rightfunc(): RightfuncContext | undefined {
		return this.tryGetRuleContext(0, RightfuncContext);
	}
	public fnfunc(): FnfuncContext | undefined {
		return this.tryGetRuleContext(0, FnfuncContext);
	}
	public sinfunc(): SinfuncContext | undefined {
		return this.tryGetRuleContext(0, SinfuncContext);
	}
	public cosfunc(): CosfuncContext | undefined {
		return this.tryGetRuleContext(0, CosfuncContext);
	}
	public tanfunc(): TanfuncContext | undefined {
		return this.tryGetRuleContext(0, TanfuncContext);
	}
	public atnfunc(): AtnfuncContext | undefined {
		return this.tryGetRuleContext(0, AtnfuncContext);
	}
	public rndfunc(): RndfuncContext | undefined {
		return this.tryGetRuleContext(0, RndfuncContext);
	}
	public sgnfunc(): SgnfuncContext | undefined {
		return this.tryGetRuleContext(0, SgnfuncContext);
	}
	public expfunc(): ExpfuncContext | undefined {
		return this.tryGetRuleContext(0, ExpfuncContext);
	}
	public logfunc(): LogfuncContext | undefined {
		return this.tryGetRuleContext(0, LogfuncContext);
	}
	public absfunc(): AbsfuncContext | undefined {
		return this.tryGetRuleContext(0, AbsfuncContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(jvmBasicParser.LPAREN, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(jvmBasicParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return jvmBasicParser.RULE_func; }
	// @Override
	public enterRule(listener: jvmBasicListener): void {
		if (listener.enterFunc) {
			listener.enterFunc(this);
		}
	}
	// @Override
	public exitRule(listener: jvmBasicListener): void {
		if (listener.exitFunc) {
			listener.exitFunc(this);
		}
	}
}


export class SignExpressionContext extends ParserRuleContext {
	public func(): FuncContext {
		return this.getRuleContext(0, FuncContext);
	}
	public NOT(): TerminalNode | undefined { return this.tryGetToken(jvmBasicParser.NOT, 0); }
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(jvmBasicParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(jvmBasicParser.MINUS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return jvmBasicParser.RULE_signExpression; }
	// @Override
	public enterRule(listener: jvmBasicListener): void {
		if (listener.enterSignExpression) {
			listener.enterSignExpression(this);
		}
	}
	// @Override
	public exitRule(listener: jvmBasicListener): void {
		if (listener.exitSignExpression) {
			listener.exitSignExpression(this);
		}
	}
}


export class ExponentExpressionContext extends ParserRuleContext {
	public signExpression(): SignExpressionContext[];
	public signExpression(i: number): SignExpressionContext;
	public signExpression(i?: number): SignExpressionContext | SignExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SignExpressionContext);
		} else {
			return this.getRuleContext(i, SignExpressionContext);
		}
	}
	public EXPONENT(): TerminalNode[];
	public EXPONENT(i: number): TerminalNode;
	public EXPONENT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(jvmBasicParser.EXPONENT);
		} else {
			return this.getToken(jvmBasicParser.EXPONENT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return jvmBasicParser.RULE_exponentExpression; }
	// @Override
	public enterRule(listener: jvmBasicListener): void {
		if (listener.enterExponentExpression) {
			listener.enterExponentExpression(this);
		}
	}
	// @Override
	public exitRule(listener: jvmBasicListener): void {
		if (listener.exitExponentExpression) {
			listener.exitExponentExpression(this);
		}
	}
}


export class MultiplyingExpressionContext extends ParserRuleContext {
	public exponentExpression(): ExponentExpressionContext[];
	public exponentExpression(i: number): ExponentExpressionContext;
	public exponentExpression(i?: number): ExponentExpressionContext | ExponentExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExponentExpressionContext);
		} else {
			return this.getRuleContext(i, ExponentExpressionContext);
		}
	}
	public TIMES(): TerminalNode[];
	public TIMES(i: number): TerminalNode;
	public TIMES(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(jvmBasicParser.TIMES);
		} else {
			return this.getToken(jvmBasicParser.TIMES, i);
		}
	}
	public DIV(): TerminalNode[];
	public DIV(i: number): TerminalNode;
	public DIV(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(jvmBasicParser.DIV);
		} else {
			return this.getToken(jvmBasicParser.DIV, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return jvmBasicParser.RULE_multiplyingExpression; }
	// @Override
	public enterRule(listener: jvmBasicListener): void {
		if (listener.enterMultiplyingExpression) {
			listener.enterMultiplyingExpression(this);
		}
	}
	// @Override
	public exitRule(listener: jvmBasicListener): void {
		if (listener.exitMultiplyingExpression) {
			listener.exitMultiplyingExpression(this);
		}
	}
}


export class AddingExpressionContext extends ParserRuleContext {
	public multiplyingExpression(): MultiplyingExpressionContext[];
	public multiplyingExpression(i: number): MultiplyingExpressionContext;
	public multiplyingExpression(i?: number): MultiplyingExpressionContext | MultiplyingExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MultiplyingExpressionContext);
		} else {
			return this.getRuleContext(i, MultiplyingExpressionContext);
		}
	}
	public PLUS(): TerminalNode[];
	public PLUS(i: number): TerminalNode;
	public PLUS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(jvmBasicParser.PLUS);
		} else {
			return this.getToken(jvmBasicParser.PLUS, i);
		}
	}
	public MINUS(): TerminalNode[];
	public MINUS(i: number): TerminalNode;
	public MINUS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(jvmBasicParser.MINUS);
		} else {
			return this.getToken(jvmBasicParser.MINUS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return jvmBasicParser.RULE_addingExpression; }
	// @Override
	public enterRule(listener: jvmBasicListener): void {
		if (listener.enterAddingExpression) {
			listener.enterAddingExpression(this);
		}
	}
	// @Override
	public exitRule(listener: jvmBasicListener): void {
		if (listener.exitAddingExpression) {
			listener.exitAddingExpression(this);
		}
	}
}


export class RelationalExpressionContext extends ParserRuleContext {
	public addingExpression(): AddingExpressionContext[];
	public addingExpression(i: number): AddingExpressionContext;
	public addingExpression(i?: number): AddingExpressionContext | AddingExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AddingExpressionContext);
		} else {
			return this.getRuleContext(i, AddingExpressionContext);
		}
	}
	public relop(): RelopContext | undefined {
		return this.tryGetRuleContext(0, RelopContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return jvmBasicParser.RULE_relationalExpression; }
	// @Override
	public enterRule(listener: jvmBasicListener): void {
		if (listener.enterRelationalExpression) {
			listener.enterRelationalExpression(this);
		}
	}
	// @Override
	public exitRule(listener: jvmBasicListener): void {
		if (listener.exitRelationalExpression) {
			listener.exitRelationalExpression(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public func(): FuncContext | undefined {
		return this.tryGetRuleContext(0, FuncContext);
	}
	public relationalExpression(): RelationalExpressionContext[];
	public relationalExpression(i: number): RelationalExpressionContext;
	public relationalExpression(i?: number): RelationalExpressionContext | RelationalExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RelationalExpressionContext);
		} else {
			return this.getRuleContext(i, RelationalExpressionContext);
		}
	}
	public AND(): TerminalNode[];
	public AND(i: number): TerminalNode;
	public AND(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(jvmBasicParser.AND);
		} else {
			return this.getToken(jvmBasicParser.AND, i);
		}
	}
	public OR(): TerminalNode[];
	public OR(i: number): TerminalNode;
	public OR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(jvmBasicParser.OR);
		} else {
			return this.getToken(jvmBasicParser.OR, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return jvmBasicParser.RULE_expression; }
	// @Override
	public enterRule(listener: jvmBasicListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: jvmBasicListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
}


export class VarContext extends ParserRuleContext {
	public varname(): VarnameContext {
		return this.getRuleContext(0, VarnameContext);
	}
	public varsuffix(): VarsuffixContext | undefined {
		return this.tryGetRuleContext(0, VarsuffixContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return jvmBasicParser.RULE_var; }
	// @Override
	public enterRule(listener: jvmBasicListener): void {
		if (listener.enterVar) {
			listener.enterVar(this);
		}
	}
	// @Override
	public exitRule(listener: jvmBasicListener): void {
		if (listener.exitVar) {
			listener.exitVar(this);
		}
	}
}


export class VarnameContext extends ParserRuleContext {
	public LETTERS(): TerminalNode[];
	public LETTERS(i: number): TerminalNode;
	public LETTERS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(jvmBasicParser.LETTERS);
		} else {
			return this.getToken(jvmBasicParser.LETTERS, i);
		}
	}
	public NUMBER(): TerminalNode[];
	public NUMBER(i: number): TerminalNode;
	public NUMBER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(jvmBasicParser.NUMBER);
		} else {
			return this.getToken(jvmBasicParser.NUMBER, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return jvmBasicParser.RULE_varname; }
	// @Override
	public enterRule(listener: jvmBasicListener): void {
		if (listener.enterVarname) {
			listener.enterVarname(this);
		}
	}
	// @Override
	public exitRule(listener: jvmBasicListener): void {
		if (listener.exitVarname) {
			listener.exitVarname(this);
		}
	}
}


export class VarsuffixContext extends ParserRuleContext {
	public DOLLAR(): TerminalNode | undefined { return this.tryGetToken(jvmBasicParser.DOLLAR, 0); }
	public PERCENT(): TerminalNode | undefined { return this.tryGetToken(jvmBasicParser.PERCENT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return jvmBasicParser.RULE_varsuffix; }
	// @Override
	public enterRule(listener: jvmBasicListener): void {
		if (listener.enterVarsuffix) {
			listener.enterVarsuffix(this);
		}
	}
	// @Override
	public exitRule(listener: jvmBasicListener): void {
		if (listener.exitVarsuffix) {
			listener.exitVarsuffix(this);
		}
	}
}


export class VarlistContext extends ParserRuleContext {
	public vardecl(): VardeclContext[];
	public vardecl(i: number): VardeclContext;
	public vardecl(i?: number): VardeclContext | VardeclContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VardeclContext);
		} else {
			return this.getRuleContext(i, VardeclContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(jvmBasicParser.COMMA);
		} else {
			return this.getToken(jvmBasicParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return jvmBasicParser.RULE_varlist; }
	// @Override
	public enterRule(listener: jvmBasicListener): void {
		if (listener.enterVarlist) {
			listener.enterVarlist(this);
		}
	}
	// @Override
	public exitRule(listener: jvmBasicListener): void {
		if (listener.exitVarlist) {
			listener.exitVarlist(this);
		}
	}
}


export class ExprlistContext extends ParserRuleContext {
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
			return this.getTokens(jvmBasicParser.COMMA);
		} else {
			return this.getToken(jvmBasicParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return jvmBasicParser.RULE_exprlist; }
	// @Override
	public enterRule(listener: jvmBasicListener): void {
		if (listener.enterExprlist) {
			listener.enterExprlist(this);
		}
	}
	// @Override
	public exitRule(listener: jvmBasicListener): void {
		if (listener.exitExprlist) {
			listener.exitExprlist(this);
		}
	}
}


export class SqrfuncContext extends ParserRuleContext {
	public SQR(): TerminalNode { return this.getToken(jvmBasicParser.SQR, 0); }
	public LPAREN(): TerminalNode { return this.getToken(jvmBasicParser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(jvmBasicParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return jvmBasicParser.RULE_sqrfunc; }
	// @Override
	public enterRule(listener: jvmBasicListener): void {
		if (listener.enterSqrfunc) {
			listener.enterSqrfunc(this);
		}
	}
	// @Override
	public exitRule(listener: jvmBasicListener): void {
		if (listener.exitSqrfunc) {
			listener.exitSqrfunc(this);
		}
	}
}


export class ChrfuncContext extends ParserRuleContext {
	public CHR(): TerminalNode { return this.getToken(jvmBasicParser.CHR, 0); }
	public LPAREN(): TerminalNode { return this.getToken(jvmBasicParser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(jvmBasicParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return jvmBasicParser.RULE_chrfunc; }
	// @Override
	public enterRule(listener: jvmBasicListener): void {
		if (listener.enterChrfunc) {
			listener.enterChrfunc(this);
		}
	}
	// @Override
	public exitRule(listener: jvmBasicListener): void {
		if (listener.exitChrfunc) {
			listener.exitChrfunc(this);
		}
	}
}


export class LenfuncContext extends ParserRuleContext {
	public LEN(): TerminalNode { return this.getToken(jvmBasicParser.LEN, 0); }
	public LPAREN(): TerminalNode { return this.getToken(jvmBasicParser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(jvmBasicParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return jvmBasicParser.RULE_lenfunc; }
	// @Override
	public enterRule(listener: jvmBasicListener): void {
		if (listener.enterLenfunc) {
			listener.enterLenfunc(this);
		}
	}
	// @Override
	public exitRule(listener: jvmBasicListener): void {
		if (listener.exitLenfunc) {
			listener.exitLenfunc(this);
		}
	}
}


export class AscfuncContext extends ParserRuleContext {
	public ASC(): TerminalNode { return this.getToken(jvmBasicParser.ASC, 0); }
	public LPAREN(): TerminalNode { return this.getToken(jvmBasicParser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(jvmBasicParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return jvmBasicParser.RULE_ascfunc; }
	// @Override
	public enterRule(listener: jvmBasicListener): void {
		if (listener.enterAscfunc) {
			listener.enterAscfunc(this);
		}
	}
	// @Override
	public exitRule(listener: jvmBasicListener): void {
		if (listener.exitAscfunc) {
			listener.exitAscfunc(this);
		}
	}
}


export class MidfuncContext extends ParserRuleContext {
	public MID(): TerminalNode { return this.getToken(jvmBasicParser.MID, 0); }
	public LPAREN(): TerminalNode { return this.getToken(jvmBasicParser.LPAREN, 0); }
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
			return this.getTokens(jvmBasicParser.COMMA);
		} else {
			return this.getToken(jvmBasicParser.COMMA, i);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(jvmBasicParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return jvmBasicParser.RULE_midfunc; }
	// @Override
	public enterRule(listener: jvmBasicListener): void {
		if (listener.enterMidfunc) {
			listener.enterMidfunc(this);
		}
	}
	// @Override
	public exitRule(listener: jvmBasicListener): void {
		if (listener.exitMidfunc) {
			listener.exitMidfunc(this);
		}
	}
}


export class PdlfuncContext extends ParserRuleContext {
	public PDL(): TerminalNode { return this.getToken(jvmBasicParser.PDL, 0); }
	public LPAREN(): TerminalNode { return this.getToken(jvmBasicParser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(jvmBasicParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return jvmBasicParser.RULE_pdlfunc; }
	// @Override
	public enterRule(listener: jvmBasicListener): void {
		if (listener.enterPdlfunc) {
			listener.enterPdlfunc(this);
		}
	}
	// @Override
	public exitRule(listener: jvmBasicListener): void {
		if (listener.exitPdlfunc) {
			listener.exitPdlfunc(this);
		}
	}
}


export class PeekfuncContext extends ParserRuleContext {
	public PEEK(): TerminalNode { return this.getToken(jvmBasicParser.PEEK, 0); }
	public LPAREN(): TerminalNode { return this.getToken(jvmBasicParser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(jvmBasicParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return jvmBasicParser.RULE_peekfunc; }
	// @Override
	public enterRule(listener: jvmBasicListener): void {
		if (listener.enterPeekfunc) {
			listener.enterPeekfunc(this);
		}
	}
	// @Override
	public exitRule(listener: jvmBasicListener): void {
		if (listener.exitPeekfunc) {
			listener.exitPeekfunc(this);
		}
	}
}


export class IntfuncContext extends ParserRuleContext {
	public INTF(): TerminalNode { return this.getToken(jvmBasicParser.INTF, 0); }
	public LPAREN(): TerminalNode { return this.getToken(jvmBasicParser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(jvmBasicParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return jvmBasicParser.RULE_intfunc; }
	// @Override
	public enterRule(listener: jvmBasicListener): void {
		if (listener.enterIntfunc) {
			listener.enterIntfunc(this);
		}
	}
	// @Override
	public exitRule(listener: jvmBasicListener): void {
		if (listener.exitIntfunc) {
			listener.exitIntfunc(this);
		}
	}
}


export class SpcfuncContext extends ParserRuleContext {
	public SPC(): TerminalNode { return this.getToken(jvmBasicParser.SPC, 0); }
	public LPAREN(): TerminalNode { return this.getToken(jvmBasicParser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(jvmBasicParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return jvmBasicParser.RULE_spcfunc; }
	// @Override
	public enterRule(listener: jvmBasicListener): void {
		if (listener.enterSpcfunc) {
			listener.enterSpcfunc(this);
		}
	}
	// @Override
	public exitRule(listener: jvmBasicListener): void {
		if (listener.exitSpcfunc) {
			listener.exitSpcfunc(this);
		}
	}
}


export class FrefuncContext extends ParserRuleContext {
	public FRE(): TerminalNode { return this.getToken(jvmBasicParser.FRE, 0); }
	public LPAREN(): TerminalNode { return this.getToken(jvmBasicParser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(jvmBasicParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return jvmBasicParser.RULE_frefunc; }
	// @Override
	public enterRule(listener: jvmBasicListener): void {
		if (listener.enterFrefunc) {
			listener.enterFrefunc(this);
		}
	}
	// @Override
	public exitRule(listener: jvmBasicListener): void {
		if (listener.exitFrefunc) {
			listener.exitFrefunc(this);
		}
	}
}


export class PosfuncContext extends ParserRuleContext {
	public POS(): TerminalNode { return this.getToken(jvmBasicParser.POS, 0); }
	public LPAREN(): TerminalNode { return this.getToken(jvmBasicParser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(jvmBasicParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return jvmBasicParser.RULE_posfunc; }
	// @Override
	public enterRule(listener: jvmBasicListener): void {
		if (listener.enterPosfunc) {
			listener.enterPosfunc(this);
		}
	}
	// @Override
	public exitRule(listener: jvmBasicListener): void {
		if (listener.exitPosfunc) {
			listener.exitPosfunc(this);
		}
	}
}


export class UsrfuncContext extends ParserRuleContext {
	public USR(): TerminalNode { return this.getToken(jvmBasicParser.USR, 0); }
	public LPAREN(): TerminalNode { return this.getToken(jvmBasicParser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(jvmBasicParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return jvmBasicParser.RULE_usrfunc; }
	// @Override
	public enterRule(listener: jvmBasicListener): void {
		if (listener.enterUsrfunc) {
			listener.enterUsrfunc(this);
		}
	}
	// @Override
	public exitRule(listener: jvmBasicListener): void {
		if (listener.exitUsrfunc) {
			listener.exitUsrfunc(this);
		}
	}
}


export class LeftfuncContext extends ParserRuleContext {
	public LEFT(): TerminalNode { return this.getToken(jvmBasicParser.LEFT, 0); }
	public LPAREN(): TerminalNode { return this.getToken(jvmBasicParser.LPAREN, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public COMMA(): TerminalNode { return this.getToken(jvmBasicParser.COMMA, 0); }
	public RPAREN(): TerminalNode { return this.getToken(jvmBasicParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return jvmBasicParser.RULE_leftfunc; }
	// @Override
	public enterRule(listener: jvmBasicListener): void {
		if (listener.enterLeftfunc) {
			listener.enterLeftfunc(this);
		}
	}
	// @Override
	public exitRule(listener: jvmBasicListener): void {
		if (listener.exitLeftfunc) {
			listener.exitLeftfunc(this);
		}
	}
}


export class RightfuncContext extends ParserRuleContext {
	public RIGHT(): TerminalNode { return this.getToken(jvmBasicParser.RIGHT, 0); }
	public LPAREN(): TerminalNode { return this.getToken(jvmBasicParser.LPAREN, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public COMMA(): TerminalNode { return this.getToken(jvmBasicParser.COMMA, 0); }
	public RPAREN(): TerminalNode { return this.getToken(jvmBasicParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return jvmBasicParser.RULE_rightfunc; }
	// @Override
	public enterRule(listener: jvmBasicListener): void {
		if (listener.enterRightfunc) {
			listener.enterRightfunc(this);
		}
	}
	// @Override
	public exitRule(listener: jvmBasicListener): void {
		if (listener.exitRightfunc) {
			listener.exitRightfunc(this);
		}
	}
}


export class StrfuncContext extends ParserRuleContext {
	public STR(): TerminalNode { return this.getToken(jvmBasicParser.STR, 0); }
	public LPAREN(): TerminalNode { return this.getToken(jvmBasicParser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(jvmBasicParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return jvmBasicParser.RULE_strfunc; }
	// @Override
	public enterRule(listener: jvmBasicListener): void {
		if (listener.enterStrfunc) {
			listener.enterStrfunc(this);
		}
	}
	// @Override
	public exitRule(listener: jvmBasicListener): void {
		if (listener.exitStrfunc) {
			listener.exitStrfunc(this);
		}
	}
}


export class FnfuncContext extends ParserRuleContext {
	public FN(): TerminalNode { return this.getToken(jvmBasicParser.FN, 0); }
	public var(): VarContext {
		return this.getRuleContext(0, VarContext);
	}
	public LPAREN(): TerminalNode { return this.getToken(jvmBasicParser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(jvmBasicParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return jvmBasicParser.RULE_fnfunc; }
	// @Override
	public enterRule(listener: jvmBasicListener): void {
		if (listener.enterFnfunc) {
			listener.enterFnfunc(this);
		}
	}
	// @Override
	public exitRule(listener: jvmBasicListener): void {
		if (listener.exitFnfunc) {
			listener.exitFnfunc(this);
		}
	}
}


export class ValfuncContext extends ParserRuleContext {
	public VAL(): TerminalNode { return this.getToken(jvmBasicParser.VAL, 0); }
	public LPAREN(): TerminalNode { return this.getToken(jvmBasicParser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(jvmBasicParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return jvmBasicParser.RULE_valfunc; }
	// @Override
	public enterRule(listener: jvmBasicListener): void {
		if (listener.enterValfunc) {
			listener.enterValfunc(this);
		}
	}
	// @Override
	public exitRule(listener: jvmBasicListener): void {
		if (listener.exitValfunc) {
			listener.exitValfunc(this);
		}
	}
}


export class ScrnfuncContext extends ParserRuleContext {
	public SCRN(): TerminalNode { return this.getToken(jvmBasicParser.SCRN, 0); }
	public LPAREN(): TerminalNode { return this.getToken(jvmBasicParser.LPAREN, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public COMMA(): TerminalNode { return this.getToken(jvmBasicParser.COMMA, 0); }
	public RPAREN(): TerminalNode { return this.getToken(jvmBasicParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return jvmBasicParser.RULE_scrnfunc; }
	// @Override
	public enterRule(listener: jvmBasicListener): void {
		if (listener.enterScrnfunc) {
			listener.enterScrnfunc(this);
		}
	}
	// @Override
	public exitRule(listener: jvmBasicListener): void {
		if (listener.exitScrnfunc) {
			listener.exitScrnfunc(this);
		}
	}
}


export class SinfuncContext extends ParserRuleContext {
	public SIN(): TerminalNode { return this.getToken(jvmBasicParser.SIN, 0); }
	public LPAREN(): TerminalNode { return this.getToken(jvmBasicParser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(jvmBasicParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return jvmBasicParser.RULE_sinfunc; }
	// @Override
	public enterRule(listener: jvmBasicListener): void {
		if (listener.enterSinfunc) {
			listener.enterSinfunc(this);
		}
	}
	// @Override
	public exitRule(listener: jvmBasicListener): void {
		if (listener.exitSinfunc) {
			listener.exitSinfunc(this);
		}
	}
}


export class CosfuncContext extends ParserRuleContext {
	public COS(): TerminalNode { return this.getToken(jvmBasicParser.COS, 0); }
	public LPAREN(): TerminalNode { return this.getToken(jvmBasicParser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(jvmBasicParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return jvmBasicParser.RULE_cosfunc; }
	// @Override
	public enterRule(listener: jvmBasicListener): void {
		if (listener.enterCosfunc) {
			listener.enterCosfunc(this);
		}
	}
	// @Override
	public exitRule(listener: jvmBasicListener): void {
		if (listener.exitCosfunc) {
			listener.exitCosfunc(this);
		}
	}
}


export class TanfuncContext extends ParserRuleContext {
	public TAN(): TerminalNode { return this.getToken(jvmBasicParser.TAN, 0); }
	public LPAREN(): TerminalNode { return this.getToken(jvmBasicParser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(jvmBasicParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return jvmBasicParser.RULE_tanfunc; }
	// @Override
	public enterRule(listener: jvmBasicListener): void {
		if (listener.enterTanfunc) {
			listener.enterTanfunc(this);
		}
	}
	// @Override
	public exitRule(listener: jvmBasicListener): void {
		if (listener.exitTanfunc) {
			listener.exitTanfunc(this);
		}
	}
}


export class AtnfuncContext extends ParserRuleContext {
	public ATN(): TerminalNode { return this.getToken(jvmBasicParser.ATN, 0); }
	public LPAREN(): TerminalNode { return this.getToken(jvmBasicParser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(jvmBasicParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return jvmBasicParser.RULE_atnfunc; }
	// @Override
	public enterRule(listener: jvmBasicListener): void {
		if (listener.enterAtnfunc) {
			listener.enterAtnfunc(this);
		}
	}
	// @Override
	public exitRule(listener: jvmBasicListener): void {
		if (listener.exitAtnfunc) {
			listener.exitAtnfunc(this);
		}
	}
}


export class RndfuncContext extends ParserRuleContext {
	public RND(): TerminalNode { return this.getToken(jvmBasicParser.RND, 0); }
	public LPAREN(): TerminalNode { return this.getToken(jvmBasicParser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(jvmBasicParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return jvmBasicParser.RULE_rndfunc; }
	// @Override
	public enterRule(listener: jvmBasicListener): void {
		if (listener.enterRndfunc) {
			listener.enterRndfunc(this);
		}
	}
	// @Override
	public exitRule(listener: jvmBasicListener): void {
		if (listener.exitRndfunc) {
			listener.exitRndfunc(this);
		}
	}
}


export class SgnfuncContext extends ParserRuleContext {
	public SGN(): TerminalNode { return this.getToken(jvmBasicParser.SGN, 0); }
	public LPAREN(): TerminalNode { return this.getToken(jvmBasicParser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(jvmBasicParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return jvmBasicParser.RULE_sgnfunc; }
	// @Override
	public enterRule(listener: jvmBasicListener): void {
		if (listener.enterSgnfunc) {
			listener.enterSgnfunc(this);
		}
	}
	// @Override
	public exitRule(listener: jvmBasicListener): void {
		if (listener.exitSgnfunc) {
			listener.exitSgnfunc(this);
		}
	}
}


export class ExpfuncContext extends ParserRuleContext {
	public EXP(): TerminalNode { return this.getToken(jvmBasicParser.EXP, 0); }
	public LPAREN(): TerminalNode { return this.getToken(jvmBasicParser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(jvmBasicParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return jvmBasicParser.RULE_expfunc; }
	// @Override
	public enterRule(listener: jvmBasicListener): void {
		if (listener.enterExpfunc) {
			listener.enterExpfunc(this);
		}
	}
	// @Override
	public exitRule(listener: jvmBasicListener): void {
		if (listener.exitExpfunc) {
			listener.exitExpfunc(this);
		}
	}
}


export class LogfuncContext extends ParserRuleContext {
	public LOG(): TerminalNode { return this.getToken(jvmBasicParser.LOG, 0); }
	public LPAREN(): TerminalNode { return this.getToken(jvmBasicParser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(jvmBasicParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return jvmBasicParser.RULE_logfunc; }
	// @Override
	public enterRule(listener: jvmBasicListener): void {
		if (listener.enterLogfunc) {
			listener.enterLogfunc(this);
		}
	}
	// @Override
	public exitRule(listener: jvmBasicListener): void {
		if (listener.exitLogfunc) {
			listener.exitLogfunc(this);
		}
	}
}


export class AbsfuncContext extends ParserRuleContext {
	public ABS(): TerminalNode { return this.getToken(jvmBasicParser.ABS, 0); }
	public LPAREN(): TerminalNode { return this.getToken(jvmBasicParser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(jvmBasicParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return jvmBasicParser.RULE_absfunc; }
	// @Override
	public enterRule(listener: jvmBasicListener): void {
		if (listener.enterAbsfunc) {
			listener.enterAbsfunc(this);
		}
	}
	// @Override
	public exitRule(listener: jvmBasicListener): void {
		if (listener.exitAbsfunc) {
			listener.exitAbsfunc(this);
		}
	}
}


export class TabfuncContext extends ParserRuleContext {
	public TAB(): TerminalNode { return this.getToken(jvmBasicParser.TAB, 0); }
	public LPAREN(): TerminalNode { return this.getToken(jvmBasicParser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(jvmBasicParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return jvmBasicParser.RULE_tabfunc; }
	// @Override
	public enterRule(listener: jvmBasicListener): void {
		if (listener.enterTabfunc) {
			listener.enterTabfunc(this);
		}
	}
	// @Override
	public exitRule(listener: jvmBasicListener): void {
		if (listener.exitTabfunc) {
			listener.exitTabfunc(this);
		}
	}
}


