// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/graphstream-dgs/DGSParser.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { DGSParserListener } from "./DGSParserListener";

export class DGSParser extends Parser {
	public static readonly MAGIC = 1;
	public static readonly AN = 2;
	public static readonly CN = 3;
	public static readonly DN = 4;
	public static readonly AE = 5;
	public static readonly CE = 6;
	public static readonly DE = 7;
	public static readonly CG = 8;
	public static readonly ST = 9;
	public static readonly CL = 10;
	public static readonly INT = 11;
	public static readonly REAL = 12;
	public static readonly PLUS = 13;
	public static readonly MINUS = 14;
	public static readonly COMMA = 15;
	public static readonly LBRACE = 16;
	public static readonly RBRACE = 17;
	public static readonly LBRACK = 18;
	public static readonly RBRACK = 19;
	public static readonly DOT = 20;
	public static readonly LANGLE = 21;
	public static readonly RANGLE = 22;
	public static readonly EQUALS = 23;
	public static readonly COLON = 24;
	public static readonly EOL = 25;
	public static readonly WORD = 26;
	public static readonly STRING = 27;
	public static readonly COLOR = 28;
	public static readonly START_COMMENT = 29;
	public static readonly WS = 30;
	public static readonly COMMENT = 31;
	public static readonly RULE_dgs = 0;
	public static readonly RULE_header = 1;
	public static readonly RULE_event = 2;
	public static readonly RULE_an = 3;
	public static readonly RULE_cn = 4;
	public static readonly RULE_dn = 5;
	public static readonly RULE_ae = 6;
	public static readonly RULE_ce = 7;
	public static readonly RULE_de = 8;
	public static readonly RULE_cg = 9;
	public static readonly RULE_st = 10;
	public static readonly RULE_cl = 11;
	public static readonly RULE_attributes = 12;
	public static readonly RULE_attribute = 13;
	public static readonly RULE_value = 14;
	public static readonly RULE_array = 15;
	public static readonly RULE_a_map = 16;
	public static readonly RULE_mapping = 17;
	public static readonly RULE_direction = 18;
	public static readonly RULE_assign = 19;
	public static readonly RULE_identifier = 20;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"dgs", "header", "event", "an", "cn", "dn", "ae", "ce", "de", "cg", "st", 
		"cl", "attributes", "attribute", "value", "array", "a_map", "mapping", 
		"direction", "assign", "identifier",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, "'an'", "'cn'", "'dn'", "'ae'", "'ce'", "'de'", 
		"'cg'", "'st'", "'cl'", undefined, undefined, "'+'", "'-'", "','", "'{'", 
		"'}'", "'['", "']'", "'.'", "'<'", "'>'", "'='", "':'", undefined, undefined, 
		undefined, undefined, "'#'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "MAGIC", "AN", "CN", "DN", "AE", "CE", "DE", "CG", "ST", "CL", 
		"INT", "REAL", "PLUS", "MINUS", "COMMA", "LBRACE", "RBRACE", "LBRACK", 
		"RBRACK", "DOT", "LANGLE", "RANGLE", "EQUALS", "COLON", "EOL", "WORD", 
		"STRING", "COLOR", "START_COMMENT", "WS", "COMMENT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(DGSParser._LITERAL_NAMES, DGSParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return DGSParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "DGSParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return DGSParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return DGSParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(DGSParser._ATN, this);
	}
	// @RuleVersion(0)
	public dgs(): DgsContext {
		let _localctx: DgsContext = new DgsContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, DGSParser.RULE_dgs);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 42;
			this.header();
			this.state = 48;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << DGSParser.AN) | (1 << DGSParser.CN) | (1 << DGSParser.DN) | (1 << DGSParser.AE) | (1 << DGSParser.CE) | (1 << DGSParser.DE) | (1 << DGSParser.CG) | (1 << DGSParser.ST) | (1 << DGSParser.CL) | (1 << DGSParser.EOL) | (1 << DGSParser.COMMENT))) !== 0)) {
				{
				this.state = 46;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case DGSParser.AN:
				case DGSParser.CN:
				case DGSParser.DN:
				case DGSParser.AE:
				case DGSParser.CE:
				case DGSParser.DE:
				case DGSParser.CG:
				case DGSParser.ST:
				case DGSParser.CL:
					{
					this.state = 43;
					this.event();
					}
					break;
				case DGSParser.COMMENT:
					{
					this.state = 44;
					this.match(DGSParser.COMMENT);
					}
					break;
				case DGSParser.EOL:
					{
					this.state = 45;
					this.match(DGSParser.EOL);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 50;
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
	public header(): HeaderContext {
		let _localctx: HeaderContext = new HeaderContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, DGSParser.RULE_header);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 51;
			this.match(DGSParser.MAGIC);
			this.state = 52;
			this.match(DGSParser.EOL);
			this.state = 53;
			this.identifier();
			this.state = 54;
			this.match(DGSParser.INT);
			this.state = 55;
			this.match(DGSParser.INT);
			this.state = 56;
			this.match(DGSParser.EOL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public event(): EventContext {
		let _localctx: EventContext = new EventContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, DGSParser.RULE_event);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 67;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case DGSParser.AN:
				{
				this.state = 58;
				this.an();
				}
				break;
			case DGSParser.CN:
				{
				this.state = 59;
				this.cn();
				}
				break;
			case DGSParser.DN:
				{
				this.state = 60;
				this.dn();
				}
				break;
			case DGSParser.AE:
				{
				this.state = 61;
				this.ae();
				}
				break;
			case DGSParser.CE:
				{
				this.state = 62;
				this.ce();
				}
				break;
			case DGSParser.DE:
				{
				this.state = 63;
				this.de();
				}
				break;
			case DGSParser.CG:
				{
				this.state = 64;
				this.cg();
				}
				break;
			case DGSParser.ST:
				{
				this.state = 65;
				this.st();
				}
				break;
			case DGSParser.CL:
				{
				this.state = 66;
				this.cl();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 69;
			_la = this._input.LA(1);
			if (!(_la === DGSParser.EOL || _la === DGSParser.COMMENT)) {
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
	public an(): AnContext {
		let _localctx: AnContext = new AnContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, DGSParser.RULE_an);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 71;
			this.match(DGSParser.AN);
			this.state = 72;
			this.identifier();
			this.state = 73;
			this.attributes();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cn(): CnContext {
		let _localctx: CnContext = new CnContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, DGSParser.RULE_cn);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 75;
			this.match(DGSParser.CN);
			this.state = 76;
			this.identifier();
			this.state = 77;
			this.attributes();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dn(): DnContext {
		let _localctx: DnContext = new DnContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, DGSParser.RULE_dn);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 79;
			this.match(DGSParser.DN);
			this.state = 80;
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
	public ae(): AeContext {
		let _localctx: AeContext = new AeContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, DGSParser.RULE_ae);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 82;
			this.match(DGSParser.AE);
			this.state = 83;
			this.identifier();
			this.state = 84;
			this.identifier();
			this.state = 86;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DGSParser.LANGLE || _la === DGSParser.RANGLE) {
				{
				this.state = 85;
				this.direction();
				}
			}

			this.state = 88;
			this.identifier();
			this.state = 89;
			this.attributes();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ce(): CeContext {
		let _localctx: CeContext = new CeContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, DGSParser.RULE_ce);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 91;
			this.match(DGSParser.CE);
			this.state = 92;
			this.identifier();
			this.state = 93;
			this.attributes();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public de(): DeContext {
		let _localctx: DeContext = new DeContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, DGSParser.RULE_de);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 95;
			this.match(DGSParser.DE);
			this.state = 96;
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
	public cg(): CgContext {
		let _localctx: CgContext = new CgContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, DGSParser.RULE_cg);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 98;
			this.match(DGSParser.CG);
			this.state = 99;
			this.attributes();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public st(): StContext {
		let _localctx: StContext = new StContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, DGSParser.RULE_st);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 101;
			this.match(DGSParser.ST);
			this.state = 102;
			this.match(DGSParser.REAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cl(): ClContext {
		let _localctx: ClContext = new ClContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, DGSParser.RULE_cl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 104;
			this.match(DGSParser.CL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public attributes(): AttributesContext {
		let _localctx: AttributesContext = new AttributesContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, DGSParser.RULE_attributes);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 109;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << DGSParser.INT) | (1 << DGSParser.PLUS) | (1 << DGSParser.MINUS) | (1 << DGSParser.WORD) | (1 << DGSParser.STRING))) !== 0)) {
				{
				{
				this.state = 106;
				this.attribute();
				}
				}
				this.state = 111;
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
	public attribute(): AttributeContext {
		let _localctx: AttributeContext = new AttributeContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, DGSParser.RULE_attribute);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 113;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DGSParser.PLUS || _la === DGSParser.MINUS) {
				{
				this.state = 112;
				_la = this._input.LA(1);
				if (!(_la === DGSParser.PLUS || _la === DGSParser.MINUS)) {
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

			this.state = 115;
			this.identifier();
			this.state = 125;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DGSParser.EQUALS || _la === DGSParser.COLON) {
				{
				this.state = 116;
				this.assign();
				this.state = 117;
				this.value();
				this.state = 122;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === DGSParser.COMMA) {
					{
					{
					this.state = 118;
					this.match(DGSParser.COMMA);
					this.state = 119;
					this.value();
					}
					}
					this.state = 124;
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
	public value(): ValueContext {
		let _localctx: ValueContext = new ValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, DGSParser.RULE_value);
		try {
			this.state = 134;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 127;
				this.match(DGSParser.STRING);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 128;
				this.match(DGSParser.INT);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 129;
				this.match(DGSParser.REAL);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 130;
				this.match(DGSParser.COLOR);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 131;
				this.array();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 132;
				this.a_map();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 133;
				this.identifier();
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
	public array(): ArrayContext {
		let _localctx: ArrayContext = new ArrayContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, DGSParser.RULE_array);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 136;
			this.match(DGSParser.LBRACE);
			this.state = 145;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << DGSParser.INT) | (1 << DGSParser.REAL) | (1 << DGSParser.LBRACE) | (1 << DGSParser.LBRACK) | (1 << DGSParser.WORD) | (1 << DGSParser.STRING) | (1 << DGSParser.COLOR))) !== 0)) {
				{
				this.state = 137;
				this.value();
				this.state = 142;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === DGSParser.COMMA) {
					{
					{
					this.state = 138;
					this.match(DGSParser.COMMA);
					this.state = 139;
					this.value();
					}
					}
					this.state = 144;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 147;
			this.match(DGSParser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public a_map(): A_mapContext {
		let _localctx: A_mapContext = new A_mapContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, DGSParser.RULE_a_map);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 149;
			this.match(DGSParser.LBRACK);
			this.state = 158;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << DGSParser.INT) | (1 << DGSParser.WORD) | (1 << DGSParser.STRING))) !== 0)) {
				{
				this.state = 150;
				this.mapping();
				this.state = 155;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === DGSParser.COMMA) {
					{
					{
					this.state = 151;
					this.match(DGSParser.COMMA);
					this.state = 152;
					this.mapping();
					}
					}
					this.state = 157;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 160;
			this.match(DGSParser.RBRACK);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mapping(): MappingContext {
		let _localctx: MappingContext = new MappingContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, DGSParser.RULE_mapping);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 162;
			this.identifier();
			this.state = 163;
			this.assign();
			this.state = 164;
			this.value();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public direction(): DirectionContext {
		let _localctx: DirectionContext = new DirectionContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, DGSParser.RULE_direction);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 166;
			_la = this._input.LA(1);
			if (!(_la === DGSParser.LANGLE || _la === DGSParser.RANGLE)) {
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
	public assign(): AssignContext {
		let _localctx: AssignContext = new AssignContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, DGSParser.RULE_assign);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 168;
			_la = this._input.LA(1);
			if (!(_la === DGSParser.EQUALS || _la === DGSParser.COLON)) {
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
		this.enterRule(_localctx, 40, DGSParser.RULE_identifier);
		let _la: number;
		try {
			this.state = 180;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case DGSParser.STRING:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 170;
				this.match(DGSParser.STRING);
				}
				break;
			case DGSParser.INT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 171;
				this.match(DGSParser.INT);
				}
				break;
			case DGSParser.WORD:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 172;
				this.match(DGSParser.WORD);
				this.state = 177;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === DGSParser.DOT) {
					{
					{
					this.state = 173;
					this.match(DGSParser.DOT);
					this.state = 174;
					this.match(DGSParser.WORD);
					}
					}
					this.state = 179;
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

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03!\xB9\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x03\x02\x03\x02\x03" +
		"\x02\x03\x02\x07\x021\n\x02\f\x02\x0E\x024\v\x02\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04F\n\x04\x03\x04\x03\x04\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07" +
		"\x03\x07\x03\b\x03\b\x03\b\x03\b\x05\bY\n\b\x03\b\x03\b\x03\b\x03\t\x03" +
		"\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03" +
		"\r\x03\r\x03\x0E\x07\x0En\n\x0E\f\x0E\x0E\x0Eq\v\x0E\x03\x0F\x05\x0Ft" +
		"\n\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x07\x0F{\n\x0F\f\x0F\x0E" +
		"\x0F~\v\x0F\x05\x0F\x80\n\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10" +
		"\x03\x10\x03\x10\x05\x10\x89\n\x10\x03\x11\x03\x11\x03\x11\x03\x11\x07" +
		"\x11\x8F\n\x11\f\x11\x0E\x11\x92\v\x11\x05\x11\x94\n\x11\x03\x11\x03\x11" +
		"\x03\x12\x03\x12\x03\x12\x03\x12\x07\x12\x9C\n\x12\f\x12\x0E\x12\x9F\v" +
		"\x12\x05\x12\xA1\n\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13" +
		"\x03\x14\x03\x14\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16" +
		"\x07\x16\xB2\n\x16\f\x16\x0E\x16\xB5\v\x16\x05\x16\xB7\n\x16\x03\x16\x02" +
		"\x02\x02\x17\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02" +
		"\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02" +
		"&\x02(\x02*\x02\x02\x06\x04\x02\x1B\x1B!!\x03\x02\x0F\x10\x03\x02\x17" +
		"\x18\x03\x02\x19\x1A\x02\xC0\x02,\x03\x02\x02\x02\x045\x03\x02\x02\x02" +
		"\x06E\x03\x02\x02\x02\bI\x03\x02\x02\x02\nM\x03\x02\x02\x02\fQ\x03\x02" +
		"\x02\x02\x0ET\x03\x02\x02\x02\x10]\x03\x02\x02\x02\x12a\x03\x02\x02\x02" +
		"\x14d\x03\x02\x02\x02\x16g\x03\x02\x02\x02\x18j\x03\x02\x02\x02\x1Ao\x03" +
		"\x02\x02\x02\x1Cs\x03\x02\x02\x02\x1E\x88\x03\x02\x02\x02 \x8A\x03\x02" +
		"\x02\x02\"\x97\x03\x02\x02\x02$\xA4\x03\x02\x02\x02&\xA8\x03\x02\x02\x02" +
		"(\xAA\x03\x02\x02\x02*\xB6\x03\x02\x02\x02,2\x05\x04\x03\x02-1\x05\x06" +
		"\x04\x02.1\x07!\x02\x02/1\x07\x1B\x02\x020-\x03\x02\x02\x020.\x03\x02" +
		"\x02\x020/\x03\x02\x02\x0214\x03\x02\x02\x0220\x03\x02\x02\x0223\x03\x02" +
		"\x02\x023\x03\x03\x02\x02\x0242\x03\x02\x02\x0256\x07\x03\x02\x0267\x07" +
		"\x1B\x02\x0278\x05*\x16\x0289\x07\r\x02\x029:\x07\r\x02\x02:;\x07\x1B" +
		"\x02\x02;\x05\x03\x02\x02\x02<F\x05\b\x05\x02=F\x05\n\x06\x02>F\x05\f" +
		"\x07\x02?F\x05\x0E\b\x02@F\x05\x10\t\x02AF\x05\x12\n\x02BF\x05\x14\v\x02" +
		"CF\x05\x16\f\x02DF\x05\x18\r\x02E<\x03\x02\x02\x02E=\x03\x02\x02\x02E" +
		">\x03\x02\x02\x02E?\x03\x02\x02\x02E@\x03\x02\x02\x02EA\x03\x02\x02\x02" +
		"EB\x03\x02\x02\x02EC\x03\x02\x02\x02ED\x03\x02\x02\x02FG\x03\x02\x02\x02" +
		"GH\t\x02\x02\x02H\x07\x03\x02\x02\x02IJ\x07\x04\x02\x02JK\x05*\x16\x02" +
		"KL\x05\x1A\x0E\x02L\t\x03\x02\x02\x02MN\x07\x05\x02\x02NO\x05*\x16\x02" +
		"OP\x05\x1A\x0E\x02P\v\x03\x02\x02\x02QR\x07\x06\x02\x02RS\x05*\x16\x02" +
		"S\r\x03\x02\x02\x02TU\x07\x07\x02\x02UV\x05*\x16\x02VX\x05*\x16\x02WY" +
		"\x05&\x14\x02XW\x03\x02\x02\x02XY\x03\x02\x02\x02YZ\x03\x02\x02\x02Z[" +
		"\x05*\x16\x02[\\\x05\x1A\x0E\x02\\\x0F\x03\x02\x02\x02]^\x07\b\x02\x02" +
		"^_\x05*\x16\x02_`\x05\x1A\x0E\x02`\x11\x03\x02\x02\x02ab\x07\t\x02\x02" +
		"bc\x05*\x16\x02c\x13\x03\x02\x02\x02de\x07\n\x02\x02ef\x05\x1A\x0E\x02" +
		"f\x15\x03\x02\x02\x02gh\x07\v\x02\x02hi\x07\x0E\x02\x02i\x17\x03\x02\x02" +
		"\x02jk\x07\f\x02\x02k\x19\x03\x02\x02\x02ln\x05\x1C\x0F\x02ml\x03\x02" +
		"\x02\x02nq\x03\x02\x02\x02om\x03\x02\x02\x02op\x03\x02\x02\x02p\x1B\x03" +
		"\x02\x02\x02qo\x03\x02\x02\x02rt\t\x03\x02\x02sr\x03\x02\x02\x02st\x03" +
		"\x02\x02\x02tu\x03\x02\x02\x02u\x7F\x05*\x16\x02vw\x05(\x15\x02w|\x05" +
		"\x1E\x10\x02xy\x07\x11\x02\x02y{\x05\x1E\x10\x02zx\x03\x02\x02\x02{~\x03" +
		"\x02\x02\x02|z\x03\x02\x02\x02|}\x03\x02\x02\x02}\x80\x03\x02\x02\x02" +
		"~|\x03\x02\x02\x02\x7Fv\x03\x02\x02\x02\x7F\x80\x03\x02\x02\x02\x80\x1D" +
		"\x03\x02\x02\x02\x81\x89\x07\x1D\x02\x02\x82\x89\x07\r\x02\x02\x83\x89" +
		"\x07\x0E\x02\x02\x84\x89\x07\x1E\x02\x02\x85\x89\x05 \x11\x02\x86\x89" +
		"\x05\"\x12\x02\x87\x89\x05*\x16\x02\x88\x81\x03\x02\x02\x02\x88\x82\x03" +
		"\x02\x02\x02\x88\x83\x03\x02\x02\x02\x88\x84\x03\x02\x02\x02\x88\x85\x03" +
		"\x02\x02\x02\x88\x86\x03\x02\x02\x02\x88\x87\x03\x02\x02\x02\x89\x1F\x03" +
		"\x02\x02\x02\x8A\x93\x07\x12\x02\x02\x8B\x90\x05\x1E\x10\x02\x8C\x8D\x07" +
		"\x11\x02\x02\x8D\x8F\x05\x1E\x10\x02\x8E\x8C\x03\x02\x02\x02\x8F\x92\x03" +
		"\x02\x02\x02\x90\x8E\x03\x02\x02\x02\x90\x91\x03\x02\x02\x02\x91\x94\x03" +
		"\x02\x02\x02\x92\x90\x03\x02\x02\x02\x93\x8B\x03\x02\x02\x02\x93\x94\x03" +
		"\x02\x02\x02\x94\x95\x03\x02\x02\x02\x95\x96\x07\x13\x02\x02\x96!\x03" +
		"\x02\x02\x02\x97\xA0\x07\x14\x02\x02\x98\x9D\x05$\x13\x02\x99\x9A\x07" +
		"\x11\x02\x02\x9A\x9C\x05$\x13\x02\x9B\x99\x03\x02\x02\x02\x9C\x9F\x03" +
		"\x02\x02\x02\x9D\x9B\x03\x02\x02\x02\x9D\x9E\x03\x02\x02\x02\x9E\xA1\x03" +
		"\x02\x02\x02\x9F\x9D\x03\x02\x02\x02\xA0\x98\x03\x02\x02\x02\xA0\xA1\x03" +
		"\x02\x02\x02\xA1\xA2\x03\x02\x02\x02\xA2\xA3\x07\x15\x02\x02\xA3#\x03" +
		"\x02\x02\x02\xA4\xA5\x05*\x16\x02\xA5\xA6\x05(\x15\x02\xA6\xA7\x05\x1E" +
		"\x10\x02\xA7%\x03\x02\x02\x02\xA8\xA9\t\x04\x02\x02\xA9\'\x03\x02\x02" +
		"\x02\xAA\xAB\t\x05\x02\x02\xAB)\x03\x02\x02\x02\xAC\xB7\x07\x1D\x02\x02" +
		"\xAD\xB7\x07\r\x02\x02\xAE\xB3\x07\x1C\x02\x02\xAF\xB0\x07\x16\x02\x02" +
		"\xB0\xB2\x07\x1C\x02\x02\xB1\xAF\x03\x02\x02\x02\xB2\xB5\x03\x02\x02\x02" +
		"\xB3\xB1\x03\x02\x02\x02\xB3\xB4\x03\x02\x02\x02\xB4\xB7\x03\x02\x02\x02" +
		"\xB5\xB3\x03\x02\x02\x02\xB6\xAC\x03\x02\x02\x02\xB6\xAD\x03\x02\x02\x02" +
		"\xB6\xAE\x03\x02\x02\x02\xB7+\x03\x02\x02\x02\x1102EXos|\x7F\x88\x90\x93" +
		"\x9D\xA0\xB3\xB6";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!DGSParser.__ATN) {
			DGSParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(DGSParser._serializedATN));
		}

		return DGSParser.__ATN;
	}

}

export class DgsContext extends ParserRuleContext {
	public header(): HeaderContext {
		return this.getRuleContext(0, HeaderContext);
	}
	public event(): EventContext[];
	public event(i: number): EventContext;
	public event(i?: number): EventContext | EventContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EventContext);
		} else {
			return this.getRuleContext(i, EventContext);
		}
	}
	public COMMENT(): TerminalNode[];
	public COMMENT(i: number): TerminalNode;
	public COMMENT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(DGSParser.COMMENT);
		} else {
			return this.getToken(DGSParser.COMMENT, i);
		}
	}
	public EOL(): TerminalNode[];
	public EOL(i: number): TerminalNode;
	public EOL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(DGSParser.EOL);
		} else {
			return this.getToken(DGSParser.EOL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DGSParser.RULE_dgs; }
	// @Override
	public enterRule(listener: DGSParserListener): void {
		if (listener.enterDgs) {
			listener.enterDgs(this);
		}
	}
	// @Override
	public exitRule(listener: DGSParserListener): void {
		if (listener.exitDgs) {
			listener.exitDgs(this);
		}
	}
}


export class HeaderContext extends ParserRuleContext {
	public MAGIC(): TerminalNode { return this.getToken(DGSParser.MAGIC, 0); }
	public EOL(): TerminalNode[];
	public EOL(i: number): TerminalNode;
	public EOL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(DGSParser.EOL);
		} else {
			return this.getToken(DGSParser.EOL, i);
		}
	}
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public INT(): TerminalNode[];
	public INT(i: number): TerminalNode;
	public INT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(DGSParser.INT);
		} else {
			return this.getToken(DGSParser.INT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DGSParser.RULE_header; }
	// @Override
	public enterRule(listener: DGSParserListener): void {
		if (listener.enterHeader) {
			listener.enterHeader(this);
		}
	}
	// @Override
	public exitRule(listener: DGSParserListener): void {
		if (listener.exitHeader) {
			listener.exitHeader(this);
		}
	}
}


export class EventContext extends ParserRuleContext {
	public COMMENT(): TerminalNode | undefined { return this.tryGetToken(DGSParser.COMMENT, 0); }
	public EOL(): TerminalNode | undefined { return this.tryGetToken(DGSParser.EOL, 0); }
	public an(): AnContext | undefined {
		return this.tryGetRuleContext(0, AnContext);
	}
	public cn(): CnContext | undefined {
		return this.tryGetRuleContext(0, CnContext);
	}
	public dn(): DnContext | undefined {
		return this.tryGetRuleContext(0, DnContext);
	}
	public ae(): AeContext | undefined {
		return this.tryGetRuleContext(0, AeContext);
	}
	public ce(): CeContext | undefined {
		return this.tryGetRuleContext(0, CeContext);
	}
	public de(): DeContext | undefined {
		return this.tryGetRuleContext(0, DeContext);
	}
	public cg(): CgContext | undefined {
		return this.tryGetRuleContext(0, CgContext);
	}
	public st(): StContext | undefined {
		return this.tryGetRuleContext(0, StContext);
	}
	public cl(): ClContext | undefined {
		return this.tryGetRuleContext(0, ClContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DGSParser.RULE_event; }
	// @Override
	public enterRule(listener: DGSParserListener): void {
		if (listener.enterEvent) {
			listener.enterEvent(this);
		}
	}
	// @Override
	public exitRule(listener: DGSParserListener): void {
		if (listener.exitEvent) {
			listener.exitEvent(this);
		}
	}
}


export class AnContext extends ParserRuleContext {
	public AN(): TerminalNode { return this.getToken(DGSParser.AN, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public attributes(): AttributesContext {
		return this.getRuleContext(0, AttributesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DGSParser.RULE_an; }
	// @Override
	public enterRule(listener: DGSParserListener): void {
		if (listener.enterAn) {
			listener.enterAn(this);
		}
	}
	// @Override
	public exitRule(listener: DGSParserListener): void {
		if (listener.exitAn) {
			listener.exitAn(this);
		}
	}
}


export class CnContext extends ParserRuleContext {
	public CN(): TerminalNode { return this.getToken(DGSParser.CN, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public attributes(): AttributesContext {
		return this.getRuleContext(0, AttributesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DGSParser.RULE_cn; }
	// @Override
	public enterRule(listener: DGSParserListener): void {
		if (listener.enterCn) {
			listener.enterCn(this);
		}
	}
	// @Override
	public exitRule(listener: DGSParserListener): void {
		if (listener.exitCn) {
			listener.exitCn(this);
		}
	}
}


export class DnContext extends ParserRuleContext {
	public DN(): TerminalNode { return this.getToken(DGSParser.DN, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DGSParser.RULE_dn; }
	// @Override
	public enterRule(listener: DGSParserListener): void {
		if (listener.enterDn) {
			listener.enterDn(this);
		}
	}
	// @Override
	public exitRule(listener: DGSParserListener): void {
		if (listener.exitDn) {
			listener.exitDn(this);
		}
	}
}


export class AeContext extends ParserRuleContext {
	public AE(): TerminalNode { return this.getToken(DGSParser.AE, 0); }
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public attributes(): AttributesContext {
		return this.getRuleContext(0, AttributesContext);
	}
	public direction(): DirectionContext | undefined {
		return this.tryGetRuleContext(0, DirectionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DGSParser.RULE_ae; }
	// @Override
	public enterRule(listener: DGSParserListener): void {
		if (listener.enterAe) {
			listener.enterAe(this);
		}
	}
	// @Override
	public exitRule(listener: DGSParserListener): void {
		if (listener.exitAe) {
			listener.exitAe(this);
		}
	}
}


export class CeContext extends ParserRuleContext {
	public CE(): TerminalNode { return this.getToken(DGSParser.CE, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public attributes(): AttributesContext {
		return this.getRuleContext(0, AttributesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DGSParser.RULE_ce; }
	// @Override
	public enterRule(listener: DGSParserListener): void {
		if (listener.enterCe) {
			listener.enterCe(this);
		}
	}
	// @Override
	public exitRule(listener: DGSParserListener): void {
		if (listener.exitCe) {
			listener.exitCe(this);
		}
	}
}


export class DeContext extends ParserRuleContext {
	public DE(): TerminalNode { return this.getToken(DGSParser.DE, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DGSParser.RULE_de; }
	// @Override
	public enterRule(listener: DGSParserListener): void {
		if (listener.enterDe) {
			listener.enterDe(this);
		}
	}
	// @Override
	public exitRule(listener: DGSParserListener): void {
		if (listener.exitDe) {
			listener.exitDe(this);
		}
	}
}


export class CgContext extends ParserRuleContext {
	public CG(): TerminalNode { return this.getToken(DGSParser.CG, 0); }
	public attributes(): AttributesContext {
		return this.getRuleContext(0, AttributesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DGSParser.RULE_cg; }
	// @Override
	public enterRule(listener: DGSParserListener): void {
		if (listener.enterCg) {
			listener.enterCg(this);
		}
	}
	// @Override
	public exitRule(listener: DGSParserListener): void {
		if (listener.exitCg) {
			listener.exitCg(this);
		}
	}
}


export class StContext extends ParserRuleContext {
	public ST(): TerminalNode { return this.getToken(DGSParser.ST, 0); }
	public REAL(): TerminalNode { return this.getToken(DGSParser.REAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DGSParser.RULE_st; }
	// @Override
	public enterRule(listener: DGSParserListener): void {
		if (listener.enterSt) {
			listener.enterSt(this);
		}
	}
	// @Override
	public exitRule(listener: DGSParserListener): void {
		if (listener.exitSt) {
			listener.exitSt(this);
		}
	}
}


export class ClContext extends ParserRuleContext {
	public CL(): TerminalNode { return this.getToken(DGSParser.CL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DGSParser.RULE_cl; }
	// @Override
	public enterRule(listener: DGSParserListener): void {
		if (listener.enterCl) {
			listener.enterCl(this);
		}
	}
	// @Override
	public exitRule(listener: DGSParserListener): void {
		if (listener.exitCl) {
			listener.exitCl(this);
		}
	}
}


export class AttributesContext extends ParserRuleContext {
	public attribute(): AttributeContext[];
	public attribute(i: number): AttributeContext;
	public attribute(i?: number): AttributeContext | AttributeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AttributeContext);
		} else {
			return this.getRuleContext(i, AttributeContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DGSParser.RULE_attributes; }
	// @Override
	public enterRule(listener: DGSParserListener): void {
		if (listener.enterAttributes) {
			listener.enterAttributes(this);
		}
	}
	// @Override
	public exitRule(listener: DGSParserListener): void {
		if (listener.exitAttributes) {
			listener.exitAttributes(this);
		}
	}
}


export class AttributeContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public assign(): AssignContext | undefined {
		return this.tryGetRuleContext(0, AssignContext);
	}
	public value(): ValueContext[];
	public value(i: number): ValueContext;
	public value(i?: number): ValueContext | ValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueContext);
		} else {
			return this.getRuleContext(i, ValueContext);
		}
	}
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(DGSParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(DGSParser.MINUS, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(DGSParser.COMMA);
		} else {
			return this.getToken(DGSParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DGSParser.RULE_attribute; }
	// @Override
	public enterRule(listener: DGSParserListener): void {
		if (listener.enterAttribute) {
			listener.enterAttribute(this);
		}
	}
	// @Override
	public exitRule(listener: DGSParserListener): void {
		if (listener.exitAttribute) {
			listener.exitAttribute(this);
		}
	}
}


export class ValueContext extends ParserRuleContext {
	public STRING(): TerminalNode | undefined { return this.tryGetToken(DGSParser.STRING, 0); }
	public INT(): TerminalNode | undefined { return this.tryGetToken(DGSParser.INT, 0); }
	public REAL(): TerminalNode | undefined { return this.tryGetToken(DGSParser.REAL, 0); }
	public COLOR(): TerminalNode | undefined { return this.tryGetToken(DGSParser.COLOR, 0); }
	public array(): ArrayContext | undefined {
		return this.tryGetRuleContext(0, ArrayContext);
	}
	public a_map(): A_mapContext | undefined {
		return this.tryGetRuleContext(0, A_mapContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DGSParser.RULE_value; }
	// @Override
	public enterRule(listener: DGSParserListener): void {
		if (listener.enterValue) {
			listener.enterValue(this);
		}
	}
	// @Override
	public exitRule(listener: DGSParserListener): void {
		if (listener.exitValue) {
			listener.exitValue(this);
		}
	}
}


export class ArrayContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(DGSParser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(DGSParser.RBRACE, 0); }
	public value(): ValueContext[];
	public value(i: number): ValueContext;
	public value(i?: number): ValueContext | ValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueContext);
		} else {
			return this.getRuleContext(i, ValueContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(DGSParser.COMMA);
		} else {
			return this.getToken(DGSParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DGSParser.RULE_array; }
	// @Override
	public enterRule(listener: DGSParserListener): void {
		if (listener.enterArray) {
			listener.enterArray(this);
		}
	}
	// @Override
	public exitRule(listener: DGSParserListener): void {
		if (listener.exitArray) {
			listener.exitArray(this);
		}
	}
}


export class A_mapContext extends ParserRuleContext {
	public LBRACK(): TerminalNode { return this.getToken(DGSParser.LBRACK, 0); }
	public RBRACK(): TerminalNode { return this.getToken(DGSParser.RBRACK, 0); }
	public mapping(): MappingContext[];
	public mapping(i: number): MappingContext;
	public mapping(i?: number): MappingContext | MappingContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MappingContext);
		} else {
			return this.getRuleContext(i, MappingContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(DGSParser.COMMA);
		} else {
			return this.getToken(DGSParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DGSParser.RULE_a_map; }
	// @Override
	public enterRule(listener: DGSParserListener): void {
		if (listener.enterA_map) {
			listener.enterA_map(this);
		}
	}
	// @Override
	public exitRule(listener: DGSParserListener): void {
		if (listener.exitA_map) {
			listener.exitA_map(this);
		}
	}
}


export class MappingContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public assign(): AssignContext {
		return this.getRuleContext(0, AssignContext);
	}
	public value(): ValueContext {
		return this.getRuleContext(0, ValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DGSParser.RULE_mapping; }
	// @Override
	public enterRule(listener: DGSParserListener): void {
		if (listener.enterMapping) {
			listener.enterMapping(this);
		}
	}
	// @Override
	public exitRule(listener: DGSParserListener): void {
		if (listener.exitMapping) {
			listener.exitMapping(this);
		}
	}
}


export class DirectionContext extends ParserRuleContext {
	public LANGLE(): TerminalNode | undefined { return this.tryGetToken(DGSParser.LANGLE, 0); }
	public RANGLE(): TerminalNode | undefined { return this.tryGetToken(DGSParser.RANGLE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DGSParser.RULE_direction; }
	// @Override
	public enterRule(listener: DGSParserListener): void {
		if (listener.enterDirection) {
			listener.enterDirection(this);
		}
	}
	// @Override
	public exitRule(listener: DGSParserListener): void {
		if (listener.exitDirection) {
			listener.exitDirection(this);
		}
	}
}


export class AssignContext extends ParserRuleContext {
	public EQUALS(): TerminalNode | undefined { return this.tryGetToken(DGSParser.EQUALS, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(DGSParser.COLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DGSParser.RULE_assign; }
	// @Override
	public enterRule(listener: DGSParserListener): void {
		if (listener.enterAssign) {
			listener.enterAssign(this);
		}
	}
	// @Override
	public exitRule(listener: DGSParserListener): void {
		if (listener.exitAssign) {
			listener.exitAssign(this);
		}
	}
}


export class IdentifierContext extends ParserRuleContext {
	public STRING(): TerminalNode | undefined { return this.tryGetToken(DGSParser.STRING, 0); }
	public INT(): TerminalNode | undefined { return this.tryGetToken(DGSParser.INT, 0); }
	public WORD(): TerminalNode[];
	public WORD(i: number): TerminalNode;
	public WORD(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(DGSParser.WORD);
		} else {
			return this.getToken(DGSParser.WORD, i);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(DGSParser.DOT);
		} else {
			return this.getToken(DGSParser.DOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DGSParser.RULE_identifier; }
	// @Override
	public enterRule(listener: DGSParserListener): void {
		if (listener.enterIdentifier) {
			listener.enterIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: DGSParserListener): void {
		if (listener.exitIdentifier) {
			listener.exitIdentifier(this);
		}
	}
}


