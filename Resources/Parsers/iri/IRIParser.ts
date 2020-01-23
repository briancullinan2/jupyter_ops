// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/iri/IRI.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { IRIListener } from "./IRIListener";

export class IRIParser extends Parser {
	public static readonly UCSCHAR = 1;
	public static readonly IPRIVATE = 2;
	public static readonly D0 = 3;
	public static readonly D1 = 4;
	public static readonly D2 = 5;
	public static readonly D3 = 6;
	public static readonly D4 = 7;
	public static readonly D5 = 8;
	public static readonly D6 = 9;
	public static readonly D7 = 10;
	public static readonly D8 = 11;
	public static readonly D9 = 12;
	public static readonly A = 13;
	public static readonly B = 14;
	public static readonly C = 15;
	public static readonly D = 16;
	public static readonly E = 17;
	public static readonly F = 18;
	public static readonly G = 19;
	public static readonly H = 20;
	public static readonly I = 21;
	public static readonly J = 22;
	public static readonly K = 23;
	public static readonly L = 24;
	public static readonly M = 25;
	public static readonly N = 26;
	public static readonly O = 27;
	public static readonly P = 28;
	public static readonly Q = 29;
	public static readonly R = 30;
	public static readonly S = 31;
	public static readonly T = 32;
	public static readonly U = 33;
	public static readonly V = 34;
	public static readonly W = 35;
	public static readonly X = 36;
	public static readonly Y = 37;
	public static readonly Z = 38;
	public static readonly COL2 = 39;
	public static readonly COL = 40;
	public static readonly DOT = 41;
	public static readonly PERCENT = 42;
	public static readonly HYPHEN = 43;
	public static readonly TILDE = 44;
	public static readonly USCORE = 45;
	public static readonly EXCL = 46;
	public static readonly DOLLAR = 47;
	public static readonly AMP = 48;
	public static readonly SQUOTE = 49;
	public static readonly OPAREN = 50;
	public static readonly CPAREN = 51;
	public static readonly STAR = 52;
	public static readonly PLUS = 53;
	public static readonly COMMA = 54;
	public static readonly SCOL = 55;
	public static readonly EQUALS = 56;
	public static readonly FSLASH2 = 57;
	public static readonly FSLASH = 58;
	public static readonly QMARK = 59;
	public static readonly HASH = 60;
	public static readonly OBRACK = 61;
	public static readonly CBRACK = 62;
	public static readonly AT = 63;
	public static readonly RULE_parse = 0;
	public static readonly RULE_iri = 1;
	public static readonly RULE_ihier_part = 2;
	public static readonly RULE_iri_reference = 3;
	public static readonly RULE_absolute_iri = 4;
	public static readonly RULE_irelative_ref = 5;
	public static readonly RULE_irelative_part = 6;
	public static readonly RULE_iauthority = 7;
	public static readonly RULE_iuserinfo = 8;
	public static readonly RULE_ihost = 9;
	public static readonly RULE_ireg_name = 10;
	public static readonly RULE_ipath = 11;
	public static readonly RULE_ipath_abempty = 12;
	public static readonly RULE_ipath_absolute = 13;
	public static readonly RULE_ipath_noscheme = 14;
	public static readonly RULE_ipath_rootless = 15;
	public static readonly RULE_ipath_empty = 16;
	public static readonly RULE_isegment = 17;
	public static readonly RULE_isegment_nz = 18;
	public static readonly RULE_isegment_nz_nc = 19;
	public static readonly RULE_ipchar = 20;
	public static readonly RULE_iquery = 21;
	public static readonly RULE_ifragment = 22;
	public static readonly RULE_iunreserved = 23;
	public static readonly RULE_scheme = 24;
	public static readonly RULE_port = 25;
	public static readonly RULE_ip_literal = 26;
	public static readonly RULE_ip_v_future = 27;
	public static readonly RULE_ip_v6_address = 28;
	public static readonly RULE_h16 = 29;
	public static readonly RULE_ls32 = 30;
	public static readonly RULE_ip_v4_address = 31;
	public static readonly RULE_dec_octet = 32;
	public static readonly RULE_pct_encoded = 33;
	public static readonly RULE_unreserved = 34;
	public static readonly RULE_reserved = 35;
	public static readonly RULE_gen_delims = 36;
	public static readonly RULE_sub_delims = 37;
	public static readonly RULE_alpha = 38;
	public static readonly RULE_hexdig = 39;
	public static readonly RULE_digit = 40;
	public static readonly RULE_non_zero_digit = 41;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"parse", "iri", "ihier_part", "iri_reference", "absolute_iri", "irelative_ref", 
		"irelative_part", "iauthority", "iuserinfo", "ihost", "ireg_name", "ipath", 
		"ipath_abempty", "ipath_absolute", "ipath_noscheme", "ipath_rootless", 
		"ipath_empty", "isegment", "isegment_nz", "isegment_nz_nc", "ipchar", 
		"iquery", "ifragment", "iunreserved", "scheme", "port", "ip_literal", 
		"ip_v_future", "ip_v6_address", "h16", "ls32", "ip_v4_address", "dec_octet", 
		"pct_encoded", "unreserved", "reserved", "gen_delims", "sub_delims", "alpha", 
		"hexdig", "digit", "non_zero_digit",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "'0'", "'1'", "'2'", "'3'", "'4'", "'5'", 
		"'6'", "'7'", "'8'", "'9'", undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, "'::'", "':'", "'.'", "'%'", "'-'", "'~'", "'_'", "'!'", "'$'", 
		"'&'", "'''", "'('", "')'", "'*'", "'+'", "','", "';'", "'='", "'//'", 
		"'/'", "'?'", "'#'", "'['", "']'", "'@'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "UCSCHAR", "IPRIVATE", "D0", "D1", "D2", "D3", "D4", "D5", 
		"D6", "D7", "D8", "D9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", 
		"K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", 
		"Y", "Z", "COL2", "COL", "DOT", "PERCENT", "HYPHEN", "TILDE", "USCORE", 
		"EXCL", "DOLLAR", "AMP", "SQUOTE", "OPAREN", "CPAREN", "STAR", "PLUS", 
		"COMMA", "SCOL", "EQUALS", "FSLASH2", "FSLASH", "QMARK", "HASH", "OBRACK", 
		"CBRACK", "AT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(IRIParser._LITERAL_NAMES, IRIParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return IRIParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "IRI.g4"; }

	// @Override
	public get ruleNames(): string[] { return IRIParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return IRIParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(IRIParser._ATN, this);
	}
	// @RuleVersion(0)
	public parse(): ParseContext {
		let _localctx: ParseContext = new ParseContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, IRIParser.RULE_parse);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 84;
			this.iri();
			this.state = 85;
			this.match(IRIParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public iri(): IriContext {
		let _localctx: IriContext = new IriContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, IRIParser.RULE_iri);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 87;
			this.scheme();
			this.state = 88;
			this.match(IRIParser.COL);
			this.state = 89;
			this.ihier_part();
			this.state = 92;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === IRIParser.QMARK) {
				{
				this.state = 90;
				this.match(IRIParser.QMARK);
				this.state = 91;
				this.iquery();
				}
			}

			this.state = 96;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === IRIParser.HASH) {
				{
				this.state = 94;
				this.match(IRIParser.HASH);
				this.state = 95;
				this.ifragment();
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
	public ihier_part(): Ihier_partContext {
		let _localctx: Ihier_partContext = new Ihier_partContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, IRIParser.RULE_ihier_part);
		try {
			this.state = 105;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case IRIParser.FSLASH2:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 98;
				this.match(IRIParser.FSLASH2);
				this.state = 99;
				this.iauthority();
				this.state = 100;
				this.ipath_abempty();
				}
				break;
			case IRIParser.FSLASH:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 102;
				this.ipath_absolute();
				}
				break;
			case IRIParser.UCSCHAR:
			case IRIParser.D0:
			case IRIParser.D1:
			case IRIParser.D2:
			case IRIParser.D3:
			case IRIParser.D4:
			case IRIParser.D5:
			case IRIParser.D6:
			case IRIParser.D7:
			case IRIParser.D8:
			case IRIParser.D9:
			case IRIParser.A:
			case IRIParser.B:
			case IRIParser.C:
			case IRIParser.D:
			case IRIParser.E:
			case IRIParser.F:
			case IRIParser.G:
			case IRIParser.H:
			case IRIParser.I:
			case IRIParser.J:
			case IRIParser.K:
			case IRIParser.L:
			case IRIParser.M:
			case IRIParser.N:
			case IRIParser.O:
			case IRIParser.P:
			case IRIParser.Q:
			case IRIParser.R:
			case IRIParser.S:
			case IRIParser.T:
			case IRIParser.U:
			case IRIParser.V:
			case IRIParser.W:
			case IRIParser.X:
			case IRIParser.Y:
			case IRIParser.Z:
			case IRIParser.COL:
			case IRIParser.DOT:
			case IRIParser.PERCENT:
			case IRIParser.HYPHEN:
			case IRIParser.TILDE:
			case IRIParser.USCORE:
			case IRIParser.EXCL:
			case IRIParser.DOLLAR:
			case IRIParser.AMP:
			case IRIParser.SQUOTE:
			case IRIParser.OPAREN:
			case IRIParser.CPAREN:
			case IRIParser.STAR:
			case IRIParser.PLUS:
			case IRIParser.COMMA:
			case IRIParser.SCOL:
			case IRIParser.EQUALS:
			case IRIParser.AT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 103;
				this.ipath_rootless();
				}
				break;
			case IRIParser.EOF:
			case IRIParser.QMARK:
			case IRIParser.HASH:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 104;
				this.ipath_empty();
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
	public iri_reference(): Iri_referenceContext {
		let _localctx: Iri_referenceContext = new Iri_referenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, IRIParser.RULE_iri_reference);
		try {
			this.state = 109;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 107;
				this.iri();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 108;
				this.irelative_ref();
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
	public absolute_iri(): Absolute_iriContext {
		let _localctx: Absolute_iriContext = new Absolute_iriContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, IRIParser.RULE_absolute_iri);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 111;
			this.scheme();
			this.state = 112;
			this.match(IRIParser.COL);
			this.state = 113;
			this.ihier_part();
			this.state = 116;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === IRIParser.QMARK) {
				{
				this.state = 114;
				this.match(IRIParser.QMARK);
				this.state = 115;
				this.iquery();
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
	public irelative_ref(): Irelative_refContext {
		let _localctx: Irelative_refContext = new Irelative_refContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, IRIParser.RULE_irelative_ref);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 118;
			this.irelative_part();
			this.state = 121;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === IRIParser.QMARK) {
				{
				this.state = 119;
				this.match(IRIParser.QMARK);
				this.state = 120;
				this.iquery();
				}
			}

			this.state = 125;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === IRIParser.HASH) {
				{
				this.state = 123;
				this.match(IRIParser.HASH);
				this.state = 124;
				this.ifragment();
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
	public irelative_part(): Irelative_partContext {
		let _localctx: Irelative_partContext = new Irelative_partContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, IRIParser.RULE_irelative_part);
		try {
			this.state = 134;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case IRIParser.FSLASH2:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 127;
				this.match(IRIParser.FSLASH2);
				this.state = 128;
				this.iauthority();
				this.state = 129;
				this.ipath_abempty();
				}
				break;
			case IRIParser.FSLASH:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 131;
				this.ipath_absolute();
				}
				break;
			case IRIParser.UCSCHAR:
			case IRIParser.D0:
			case IRIParser.D1:
			case IRIParser.D2:
			case IRIParser.D3:
			case IRIParser.D4:
			case IRIParser.D5:
			case IRIParser.D6:
			case IRIParser.D7:
			case IRIParser.D8:
			case IRIParser.D9:
			case IRIParser.A:
			case IRIParser.B:
			case IRIParser.C:
			case IRIParser.D:
			case IRIParser.E:
			case IRIParser.F:
			case IRIParser.G:
			case IRIParser.H:
			case IRIParser.I:
			case IRIParser.J:
			case IRIParser.K:
			case IRIParser.L:
			case IRIParser.M:
			case IRIParser.N:
			case IRIParser.O:
			case IRIParser.P:
			case IRIParser.Q:
			case IRIParser.R:
			case IRIParser.S:
			case IRIParser.T:
			case IRIParser.U:
			case IRIParser.V:
			case IRIParser.W:
			case IRIParser.X:
			case IRIParser.Y:
			case IRIParser.Z:
			case IRIParser.DOT:
			case IRIParser.PERCENT:
			case IRIParser.HYPHEN:
			case IRIParser.TILDE:
			case IRIParser.USCORE:
			case IRIParser.EXCL:
			case IRIParser.DOLLAR:
			case IRIParser.AMP:
			case IRIParser.SQUOTE:
			case IRIParser.OPAREN:
			case IRIParser.CPAREN:
			case IRIParser.STAR:
			case IRIParser.PLUS:
			case IRIParser.COMMA:
			case IRIParser.SCOL:
			case IRIParser.EQUALS:
			case IRIParser.AT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 132;
				this.ipath_noscheme();
				}
				break;
			case IRIParser.EOF:
			case IRIParser.QMARK:
			case IRIParser.HASH:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 133;
				this.ipath_empty();
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
	public iauthority(): IauthorityContext {
		let _localctx: IauthorityContext = new IauthorityContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, IRIParser.RULE_iauthority);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 139;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				{
				this.state = 136;
				this.iuserinfo();
				this.state = 137;
				this.match(IRIParser.AT);
				}
				break;
			}
			this.state = 141;
			this.ihost();
			this.state = 144;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === IRIParser.COL) {
				{
				this.state = 142;
				this.match(IRIParser.COL);
				this.state = 143;
				this.port();
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
	public iuserinfo(): IuserinfoContext {
		let _localctx: IuserinfoContext = new IuserinfoContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, IRIParser.RULE_iuserinfo);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 152;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << IRIParser.UCSCHAR) | (1 << IRIParser.D0) | (1 << IRIParser.D1) | (1 << IRIParser.D2) | (1 << IRIParser.D3) | (1 << IRIParser.D4) | (1 << IRIParser.D5) | (1 << IRIParser.D6) | (1 << IRIParser.D7) | (1 << IRIParser.D8) | (1 << IRIParser.D9) | (1 << IRIParser.A) | (1 << IRIParser.B) | (1 << IRIParser.C) | (1 << IRIParser.D) | (1 << IRIParser.E) | (1 << IRIParser.F) | (1 << IRIParser.G) | (1 << IRIParser.H) | (1 << IRIParser.I) | (1 << IRIParser.J) | (1 << IRIParser.K) | (1 << IRIParser.L) | (1 << IRIParser.M) | (1 << IRIParser.N) | (1 << IRIParser.O) | (1 << IRIParser.P) | (1 << IRIParser.Q) | (1 << IRIParser.R) | (1 << IRIParser.S))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (IRIParser.T - 32)) | (1 << (IRIParser.U - 32)) | (1 << (IRIParser.V - 32)) | (1 << (IRIParser.W - 32)) | (1 << (IRIParser.X - 32)) | (1 << (IRIParser.Y - 32)) | (1 << (IRIParser.Z - 32)) | (1 << (IRIParser.COL - 32)) | (1 << (IRIParser.DOT - 32)) | (1 << (IRIParser.PERCENT - 32)) | (1 << (IRIParser.HYPHEN - 32)) | (1 << (IRIParser.TILDE - 32)) | (1 << (IRIParser.USCORE - 32)) | (1 << (IRIParser.EXCL - 32)) | (1 << (IRIParser.DOLLAR - 32)) | (1 << (IRIParser.AMP - 32)) | (1 << (IRIParser.SQUOTE - 32)) | (1 << (IRIParser.OPAREN - 32)) | (1 << (IRIParser.CPAREN - 32)) | (1 << (IRIParser.STAR - 32)) | (1 << (IRIParser.PLUS - 32)) | (1 << (IRIParser.COMMA - 32)) | (1 << (IRIParser.SCOL - 32)) | (1 << (IRIParser.EQUALS - 32)))) !== 0)) {
				{
				this.state = 150;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case IRIParser.UCSCHAR:
				case IRIParser.D0:
				case IRIParser.D1:
				case IRIParser.D2:
				case IRIParser.D3:
				case IRIParser.D4:
				case IRIParser.D5:
				case IRIParser.D6:
				case IRIParser.D7:
				case IRIParser.D8:
				case IRIParser.D9:
				case IRIParser.A:
				case IRIParser.B:
				case IRIParser.C:
				case IRIParser.D:
				case IRIParser.E:
				case IRIParser.F:
				case IRIParser.G:
				case IRIParser.H:
				case IRIParser.I:
				case IRIParser.J:
				case IRIParser.K:
				case IRIParser.L:
				case IRIParser.M:
				case IRIParser.N:
				case IRIParser.O:
				case IRIParser.P:
				case IRIParser.Q:
				case IRIParser.R:
				case IRIParser.S:
				case IRIParser.T:
				case IRIParser.U:
				case IRIParser.V:
				case IRIParser.W:
				case IRIParser.X:
				case IRIParser.Y:
				case IRIParser.Z:
				case IRIParser.DOT:
				case IRIParser.HYPHEN:
				case IRIParser.TILDE:
				case IRIParser.USCORE:
					{
					this.state = 146;
					this.iunreserved();
					}
					break;
				case IRIParser.PERCENT:
					{
					this.state = 147;
					this.pct_encoded();
					}
					break;
				case IRIParser.EXCL:
				case IRIParser.DOLLAR:
				case IRIParser.AMP:
				case IRIParser.SQUOTE:
				case IRIParser.OPAREN:
				case IRIParser.CPAREN:
				case IRIParser.STAR:
				case IRIParser.PLUS:
				case IRIParser.COMMA:
				case IRIParser.SCOL:
				case IRIParser.EQUALS:
					{
					this.state = 148;
					this.sub_delims();
					}
					break;
				case IRIParser.COL:
					{
					this.state = 149;
					this.match(IRIParser.COL);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 154;
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
	public ihost(): IhostContext {
		let _localctx: IhostContext = new IhostContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, IRIParser.RULE_ihost);
		try {
			this.state = 158;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 155;
				this.ip_literal();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 156;
				this.ip_v4_address();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 157;
				this.ireg_name();
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
	public ireg_name(): Ireg_nameContext {
		let _localctx: Ireg_nameContext = new Ireg_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, IRIParser.RULE_ireg_name);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 165;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << IRIParser.UCSCHAR) | (1 << IRIParser.D0) | (1 << IRIParser.D1) | (1 << IRIParser.D2) | (1 << IRIParser.D3) | (1 << IRIParser.D4) | (1 << IRIParser.D5) | (1 << IRIParser.D6) | (1 << IRIParser.D7) | (1 << IRIParser.D8) | (1 << IRIParser.D9) | (1 << IRIParser.A) | (1 << IRIParser.B) | (1 << IRIParser.C) | (1 << IRIParser.D) | (1 << IRIParser.E) | (1 << IRIParser.F) | (1 << IRIParser.G) | (1 << IRIParser.H) | (1 << IRIParser.I) | (1 << IRIParser.J) | (1 << IRIParser.K) | (1 << IRIParser.L) | (1 << IRIParser.M) | (1 << IRIParser.N) | (1 << IRIParser.O) | (1 << IRIParser.P) | (1 << IRIParser.Q) | (1 << IRIParser.R) | (1 << IRIParser.S))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (IRIParser.T - 32)) | (1 << (IRIParser.U - 32)) | (1 << (IRIParser.V - 32)) | (1 << (IRIParser.W - 32)) | (1 << (IRIParser.X - 32)) | (1 << (IRIParser.Y - 32)) | (1 << (IRIParser.Z - 32)) | (1 << (IRIParser.DOT - 32)) | (1 << (IRIParser.PERCENT - 32)) | (1 << (IRIParser.HYPHEN - 32)) | (1 << (IRIParser.TILDE - 32)) | (1 << (IRIParser.USCORE - 32)) | (1 << (IRIParser.EXCL - 32)) | (1 << (IRIParser.DOLLAR - 32)) | (1 << (IRIParser.AMP - 32)) | (1 << (IRIParser.SQUOTE - 32)) | (1 << (IRIParser.OPAREN - 32)) | (1 << (IRIParser.CPAREN - 32)) | (1 << (IRIParser.STAR - 32)) | (1 << (IRIParser.PLUS - 32)) | (1 << (IRIParser.COMMA - 32)) | (1 << (IRIParser.SCOL - 32)) | (1 << (IRIParser.EQUALS - 32)))) !== 0)) {
				{
				this.state = 163;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case IRIParser.UCSCHAR:
				case IRIParser.D0:
				case IRIParser.D1:
				case IRIParser.D2:
				case IRIParser.D3:
				case IRIParser.D4:
				case IRIParser.D5:
				case IRIParser.D6:
				case IRIParser.D7:
				case IRIParser.D8:
				case IRIParser.D9:
				case IRIParser.A:
				case IRIParser.B:
				case IRIParser.C:
				case IRIParser.D:
				case IRIParser.E:
				case IRIParser.F:
				case IRIParser.G:
				case IRIParser.H:
				case IRIParser.I:
				case IRIParser.J:
				case IRIParser.K:
				case IRIParser.L:
				case IRIParser.M:
				case IRIParser.N:
				case IRIParser.O:
				case IRIParser.P:
				case IRIParser.Q:
				case IRIParser.R:
				case IRIParser.S:
				case IRIParser.T:
				case IRIParser.U:
				case IRIParser.V:
				case IRIParser.W:
				case IRIParser.X:
				case IRIParser.Y:
				case IRIParser.Z:
				case IRIParser.DOT:
				case IRIParser.HYPHEN:
				case IRIParser.TILDE:
				case IRIParser.USCORE:
					{
					this.state = 160;
					this.iunreserved();
					}
					break;
				case IRIParser.PERCENT:
					{
					this.state = 161;
					this.pct_encoded();
					}
					break;
				case IRIParser.EXCL:
				case IRIParser.DOLLAR:
				case IRIParser.AMP:
				case IRIParser.SQUOTE:
				case IRIParser.OPAREN:
				case IRIParser.CPAREN:
				case IRIParser.STAR:
				case IRIParser.PLUS:
				case IRIParser.COMMA:
				case IRIParser.SCOL:
				case IRIParser.EQUALS:
					{
					this.state = 162;
					this.sub_delims();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 167;
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
	public ipath(): IpathContext {
		let _localctx: IpathContext = new IpathContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, IRIParser.RULE_ipath);
		try {
			this.state = 173;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 168;
				this.ipath_abempty();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 169;
				this.ipath_absolute();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 170;
				this.ipath_noscheme();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 171;
				this.ipath_rootless();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 172;
				this.ipath_empty();
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
	public ipath_abempty(): Ipath_abemptyContext {
		let _localctx: Ipath_abemptyContext = new Ipath_abemptyContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, IRIParser.RULE_ipath_abempty);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 179;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === IRIParser.FSLASH) {
				{
				{
				this.state = 175;
				this.match(IRIParser.FSLASH);
				this.state = 176;
				this.isegment();
				}
				}
				this.state = 181;
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
	public ipath_absolute(): Ipath_absoluteContext {
		let _localctx: Ipath_absoluteContext = new Ipath_absoluteContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, IRIParser.RULE_ipath_absolute);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 182;
			this.match(IRIParser.FSLASH);
			this.state = 191;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << IRIParser.UCSCHAR) | (1 << IRIParser.D0) | (1 << IRIParser.D1) | (1 << IRIParser.D2) | (1 << IRIParser.D3) | (1 << IRIParser.D4) | (1 << IRIParser.D5) | (1 << IRIParser.D6) | (1 << IRIParser.D7) | (1 << IRIParser.D8) | (1 << IRIParser.D9) | (1 << IRIParser.A) | (1 << IRIParser.B) | (1 << IRIParser.C) | (1 << IRIParser.D) | (1 << IRIParser.E) | (1 << IRIParser.F) | (1 << IRIParser.G) | (1 << IRIParser.H) | (1 << IRIParser.I) | (1 << IRIParser.J) | (1 << IRIParser.K) | (1 << IRIParser.L) | (1 << IRIParser.M) | (1 << IRIParser.N) | (1 << IRIParser.O) | (1 << IRIParser.P) | (1 << IRIParser.Q) | (1 << IRIParser.R) | (1 << IRIParser.S))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (IRIParser.T - 32)) | (1 << (IRIParser.U - 32)) | (1 << (IRIParser.V - 32)) | (1 << (IRIParser.W - 32)) | (1 << (IRIParser.X - 32)) | (1 << (IRIParser.Y - 32)) | (1 << (IRIParser.Z - 32)) | (1 << (IRIParser.COL - 32)) | (1 << (IRIParser.DOT - 32)) | (1 << (IRIParser.PERCENT - 32)) | (1 << (IRIParser.HYPHEN - 32)) | (1 << (IRIParser.TILDE - 32)) | (1 << (IRIParser.USCORE - 32)) | (1 << (IRIParser.EXCL - 32)) | (1 << (IRIParser.DOLLAR - 32)) | (1 << (IRIParser.AMP - 32)) | (1 << (IRIParser.SQUOTE - 32)) | (1 << (IRIParser.OPAREN - 32)) | (1 << (IRIParser.CPAREN - 32)) | (1 << (IRIParser.STAR - 32)) | (1 << (IRIParser.PLUS - 32)) | (1 << (IRIParser.COMMA - 32)) | (1 << (IRIParser.SCOL - 32)) | (1 << (IRIParser.EQUALS - 32)) | (1 << (IRIParser.AT - 32)))) !== 0)) {
				{
				this.state = 183;
				this.isegment_nz();
				this.state = 188;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === IRIParser.FSLASH) {
					{
					{
					this.state = 184;
					this.match(IRIParser.FSLASH);
					this.state = 185;
					this.isegment();
					}
					}
					this.state = 190;
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
	public ipath_noscheme(): Ipath_noschemeContext {
		let _localctx: Ipath_noschemeContext = new Ipath_noschemeContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, IRIParser.RULE_ipath_noscheme);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 193;
			this.isegment_nz_nc();
			this.state = 198;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === IRIParser.FSLASH) {
				{
				{
				this.state = 194;
				this.match(IRIParser.FSLASH);
				this.state = 195;
				this.isegment();
				}
				}
				this.state = 200;
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
	public ipath_rootless(): Ipath_rootlessContext {
		let _localctx: Ipath_rootlessContext = new Ipath_rootlessContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, IRIParser.RULE_ipath_rootless);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 201;
			this.isegment_nz();
			this.state = 206;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === IRIParser.FSLASH) {
				{
				{
				this.state = 202;
				this.match(IRIParser.FSLASH);
				this.state = 203;
				this.isegment();
				}
				}
				this.state = 208;
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
	public ipath_empty(): Ipath_emptyContext {
		let _localctx: Ipath_emptyContext = new Ipath_emptyContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, IRIParser.RULE_ipath_empty);
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
	public isegment(): IsegmentContext {
		let _localctx: IsegmentContext = new IsegmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, IRIParser.RULE_isegment);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 214;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << IRIParser.UCSCHAR) | (1 << IRIParser.D0) | (1 << IRIParser.D1) | (1 << IRIParser.D2) | (1 << IRIParser.D3) | (1 << IRIParser.D4) | (1 << IRIParser.D5) | (1 << IRIParser.D6) | (1 << IRIParser.D7) | (1 << IRIParser.D8) | (1 << IRIParser.D9) | (1 << IRIParser.A) | (1 << IRIParser.B) | (1 << IRIParser.C) | (1 << IRIParser.D) | (1 << IRIParser.E) | (1 << IRIParser.F) | (1 << IRIParser.G) | (1 << IRIParser.H) | (1 << IRIParser.I) | (1 << IRIParser.J) | (1 << IRIParser.K) | (1 << IRIParser.L) | (1 << IRIParser.M) | (1 << IRIParser.N) | (1 << IRIParser.O) | (1 << IRIParser.P) | (1 << IRIParser.Q) | (1 << IRIParser.R) | (1 << IRIParser.S))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (IRIParser.T - 32)) | (1 << (IRIParser.U - 32)) | (1 << (IRIParser.V - 32)) | (1 << (IRIParser.W - 32)) | (1 << (IRIParser.X - 32)) | (1 << (IRIParser.Y - 32)) | (1 << (IRIParser.Z - 32)) | (1 << (IRIParser.COL - 32)) | (1 << (IRIParser.DOT - 32)) | (1 << (IRIParser.PERCENT - 32)) | (1 << (IRIParser.HYPHEN - 32)) | (1 << (IRIParser.TILDE - 32)) | (1 << (IRIParser.USCORE - 32)) | (1 << (IRIParser.EXCL - 32)) | (1 << (IRIParser.DOLLAR - 32)) | (1 << (IRIParser.AMP - 32)) | (1 << (IRIParser.SQUOTE - 32)) | (1 << (IRIParser.OPAREN - 32)) | (1 << (IRIParser.CPAREN - 32)) | (1 << (IRIParser.STAR - 32)) | (1 << (IRIParser.PLUS - 32)) | (1 << (IRIParser.COMMA - 32)) | (1 << (IRIParser.SCOL - 32)) | (1 << (IRIParser.EQUALS - 32)) | (1 << (IRIParser.AT - 32)))) !== 0)) {
				{
				{
				this.state = 211;
				this.ipchar();
				}
				}
				this.state = 216;
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
	public isegment_nz(): Isegment_nzContext {
		let _localctx: Isegment_nzContext = new Isegment_nzContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, IRIParser.RULE_isegment_nz);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 218;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 217;
				this.ipchar();
				}
				}
				this.state = 220;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << IRIParser.UCSCHAR) | (1 << IRIParser.D0) | (1 << IRIParser.D1) | (1 << IRIParser.D2) | (1 << IRIParser.D3) | (1 << IRIParser.D4) | (1 << IRIParser.D5) | (1 << IRIParser.D6) | (1 << IRIParser.D7) | (1 << IRIParser.D8) | (1 << IRIParser.D9) | (1 << IRIParser.A) | (1 << IRIParser.B) | (1 << IRIParser.C) | (1 << IRIParser.D) | (1 << IRIParser.E) | (1 << IRIParser.F) | (1 << IRIParser.G) | (1 << IRIParser.H) | (1 << IRIParser.I) | (1 << IRIParser.J) | (1 << IRIParser.K) | (1 << IRIParser.L) | (1 << IRIParser.M) | (1 << IRIParser.N) | (1 << IRIParser.O) | (1 << IRIParser.P) | (1 << IRIParser.Q) | (1 << IRIParser.R) | (1 << IRIParser.S))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (IRIParser.T - 32)) | (1 << (IRIParser.U - 32)) | (1 << (IRIParser.V - 32)) | (1 << (IRIParser.W - 32)) | (1 << (IRIParser.X - 32)) | (1 << (IRIParser.Y - 32)) | (1 << (IRIParser.Z - 32)) | (1 << (IRIParser.COL - 32)) | (1 << (IRIParser.DOT - 32)) | (1 << (IRIParser.PERCENT - 32)) | (1 << (IRIParser.HYPHEN - 32)) | (1 << (IRIParser.TILDE - 32)) | (1 << (IRIParser.USCORE - 32)) | (1 << (IRIParser.EXCL - 32)) | (1 << (IRIParser.DOLLAR - 32)) | (1 << (IRIParser.AMP - 32)) | (1 << (IRIParser.SQUOTE - 32)) | (1 << (IRIParser.OPAREN - 32)) | (1 << (IRIParser.CPAREN - 32)) | (1 << (IRIParser.STAR - 32)) | (1 << (IRIParser.PLUS - 32)) | (1 << (IRIParser.COMMA - 32)) | (1 << (IRIParser.SCOL - 32)) | (1 << (IRIParser.EQUALS - 32)) | (1 << (IRIParser.AT - 32)))) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public isegment_nz_nc(): Isegment_nz_ncContext {
		let _localctx: Isegment_nz_ncContext = new Isegment_nz_ncContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, IRIParser.RULE_isegment_nz_nc);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 226;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 226;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case IRIParser.UCSCHAR:
				case IRIParser.D0:
				case IRIParser.D1:
				case IRIParser.D2:
				case IRIParser.D3:
				case IRIParser.D4:
				case IRIParser.D5:
				case IRIParser.D6:
				case IRIParser.D7:
				case IRIParser.D8:
				case IRIParser.D9:
				case IRIParser.A:
				case IRIParser.B:
				case IRIParser.C:
				case IRIParser.D:
				case IRIParser.E:
				case IRIParser.F:
				case IRIParser.G:
				case IRIParser.H:
				case IRIParser.I:
				case IRIParser.J:
				case IRIParser.K:
				case IRIParser.L:
				case IRIParser.M:
				case IRIParser.N:
				case IRIParser.O:
				case IRIParser.P:
				case IRIParser.Q:
				case IRIParser.R:
				case IRIParser.S:
				case IRIParser.T:
				case IRIParser.U:
				case IRIParser.V:
				case IRIParser.W:
				case IRIParser.X:
				case IRIParser.Y:
				case IRIParser.Z:
				case IRIParser.DOT:
				case IRIParser.HYPHEN:
				case IRIParser.TILDE:
				case IRIParser.USCORE:
					{
					this.state = 222;
					this.iunreserved();
					}
					break;
				case IRIParser.PERCENT:
					{
					this.state = 223;
					this.pct_encoded();
					}
					break;
				case IRIParser.EXCL:
				case IRIParser.DOLLAR:
				case IRIParser.AMP:
				case IRIParser.SQUOTE:
				case IRIParser.OPAREN:
				case IRIParser.CPAREN:
				case IRIParser.STAR:
				case IRIParser.PLUS:
				case IRIParser.COMMA:
				case IRIParser.SCOL:
				case IRIParser.EQUALS:
					{
					this.state = 224;
					this.sub_delims();
					}
					break;
				case IRIParser.AT:
					{
					this.state = 225;
					this.match(IRIParser.AT);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 228;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << IRIParser.UCSCHAR) | (1 << IRIParser.D0) | (1 << IRIParser.D1) | (1 << IRIParser.D2) | (1 << IRIParser.D3) | (1 << IRIParser.D4) | (1 << IRIParser.D5) | (1 << IRIParser.D6) | (1 << IRIParser.D7) | (1 << IRIParser.D8) | (1 << IRIParser.D9) | (1 << IRIParser.A) | (1 << IRIParser.B) | (1 << IRIParser.C) | (1 << IRIParser.D) | (1 << IRIParser.E) | (1 << IRIParser.F) | (1 << IRIParser.G) | (1 << IRIParser.H) | (1 << IRIParser.I) | (1 << IRIParser.J) | (1 << IRIParser.K) | (1 << IRIParser.L) | (1 << IRIParser.M) | (1 << IRIParser.N) | (1 << IRIParser.O) | (1 << IRIParser.P) | (1 << IRIParser.Q) | (1 << IRIParser.R) | (1 << IRIParser.S))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (IRIParser.T - 32)) | (1 << (IRIParser.U - 32)) | (1 << (IRIParser.V - 32)) | (1 << (IRIParser.W - 32)) | (1 << (IRIParser.X - 32)) | (1 << (IRIParser.Y - 32)) | (1 << (IRIParser.Z - 32)) | (1 << (IRIParser.DOT - 32)) | (1 << (IRIParser.PERCENT - 32)) | (1 << (IRIParser.HYPHEN - 32)) | (1 << (IRIParser.TILDE - 32)) | (1 << (IRIParser.USCORE - 32)) | (1 << (IRIParser.EXCL - 32)) | (1 << (IRIParser.DOLLAR - 32)) | (1 << (IRIParser.AMP - 32)) | (1 << (IRIParser.SQUOTE - 32)) | (1 << (IRIParser.OPAREN - 32)) | (1 << (IRIParser.CPAREN - 32)) | (1 << (IRIParser.STAR - 32)) | (1 << (IRIParser.PLUS - 32)) | (1 << (IRIParser.COMMA - 32)) | (1 << (IRIParser.SCOL - 32)) | (1 << (IRIParser.EQUALS - 32)) | (1 << (IRIParser.AT - 32)))) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ipchar(): IpcharContext {
		let _localctx: IpcharContext = new IpcharContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, IRIParser.RULE_ipchar);
		let _la: number;
		try {
			this.state = 234;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case IRIParser.UCSCHAR:
			case IRIParser.D0:
			case IRIParser.D1:
			case IRIParser.D2:
			case IRIParser.D3:
			case IRIParser.D4:
			case IRIParser.D5:
			case IRIParser.D6:
			case IRIParser.D7:
			case IRIParser.D8:
			case IRIParser.D9:
			case IRIParser.A:
			case IRIParser.B:
			case IRIParser.C:
			case IRIParser.D:
			case IRIParser.E:
			case IRIParser.F:
			case IRIParser.G:
			case IRIParser.H:
			case IRIParser.I:
			case IRIParser.J:
			case IRIParser.K:
			case IRIParser.L:
			case IRIParser.M:
			case IRIParser.N:
			case IRIParser.O:
			case IRIParser.P:
			case IRIParser.Q:
			case IRIParser.R:
			case IRIParser.S:
			case IRIParser.T:
			case IRIParser.U:
			case IRIParser.V:
			case IRIParser.W:
			case IRIParser.X:
			case IRIParser.Y:
			case IRIParser.Z:
			case IRIParser.DOT:
			case IRIParser.HYPHEN:
			case IRIParser.TILDE:
			case IRIParser.USCORE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 230;
				this.iunreserved();
				}
				break;
			case IRIParser.PERCENT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 231;
				this.pct_encoded();
				}
				break;
			case IRIParser.EXCL:
			case IRIParser.DOLLAR:
			case IRIParser.AMP:
			case IRIParser.SQUOTE:
			case IRIParser.OPAREN:
			case IRIParser.CPAREN:
			case IRIParser.STAR:
			case IRIParser.PLUS:
			case IRIParser.COMMA:
			case IRIParser.SCOL:
			case IRIParser.EQUALS:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 232;
				this.sub_delims();
				}
				break;
			case IRIParser.COL:
			case IRIParser.AT:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 233;
				_la = this._input.LA(1);
				if (!(_la === IRIParser.COL || _la === IRIParser.AT)) {
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
	public iquery(): IqueryContext {
		let _localctx: IqueryContext = new IqueryContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, IRIParser.RULE_iquery);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 240;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << IRIParser.UCSCHAR) | (1 << IRIParser.IPRIVATE) | (1 << IRIParser.D0) | (1 << IRIParser.D1) | (1 << IRIParser.D2) | (1 << IRIParser.D3) | (1 << IRIParser.D4) | (1 << IRIParser.D5) | (1 << IRIParser.D6) | (1 << IRIParser.D7) | (1 << IRIParser.D8) | (1 << IRIParser.D9) | (1 << IRIParser.A) | (1 << IRIParser.B) | (1 << IRIParser.C) | (1 << IRIParser.D) | (1 << IRIParser.E) | (1 << IRIParser.F) | (1 << IRIParser.G) | (1 << IRIParser.H) | (1 << IRIParser.I) | (1 << IRIParser.J) | (1 << IRIParser.K) | (1 << IRIParser.L) | (1 << IRIParser.M) | (1 << IRIParser.N) | (1 << IRIParser.O) | (1 << IRIParser.P) | (1 << IRIParser.Q) | (1 << IRIParser.R) | (1 << IRIParser.S))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (IRIParser.T - 32)) | (1 << (IRIParser.U - 32)) | (1 << (IRIParser.V - 32)) | (1 << (IRIParser.W - 32)) | (1 << (IRIParser.X - 32)) | (1 << (IRIParser.Y - 32)) | (1 << (IRIParser.Z - 32)) | (1 << (IRIParser.COL - 32)) | (1 << (IRIParser.DOT - 32)) | (1 << (IRIParser.PERCENT - 32)) | (1 << (IRIParser.HYPHEN - 32)) | (1 << (IRIParser.TILDE - 32)) | (1 << (IRIParser.USCORE - 32)) | (1 << (IRIParser.EXCL - 32)) | (1 << (IRIParser.DOLLAR - 32)) | (1 << (IRIParser.AMP - 32)) | (1 << (IRIParser.SQUOTE - 32)) | (1 << (IRIParser.OPAREN - 32)) | (1 << (IRIParser.CPAREN - 32)) | (1 << (IRIParser.STAR - 32)) | (1 << (IRIParser.PLUS - 32)) | (1 << (IRIParser.COMMA - 32)) | (1 << (IRIParser.SCOL - 32)) | (1 << (IRIParser.EQUALS - 32)) | (1 << (IRIParser.FSLASH - 32)) | (1 << (IRIParser.QMARK - 32)) | (1 << (IRIParser.AT - 32)))) !== 0)) {
				{
				this.state = 238;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case IRIParser.UCSCHAR:
				case IRIParser.D0:
				case IRIParser.D1:
				case IRIParser.D2:
				case IRIParser.D3:
				case IRIParser.D4:
				case IRIParser.D5:
				case IRIParser.D6:
				case IRIParser.D7:
				case IRIParser.D8:
				case IRIParser.D9:
				case IRIParser.A:
				case IRIParser.B:
				case IRIParser.C:
				case IRIParser.D:
				case IRIParser.E:
				case IRIParser.F:
				case IRIParser.G:
				case IRIParser.H:
				case IRIParser.I:
				case IRIParser.J:
				case IRIParser.K:
				case IRIParser.L:
				case IRIParser.M:
				case IRIParser.N:
				case IRIParser.O:
				case IRIParser.P:
				case IRIParser.Q:
				case IRIParser.R:
				case IRIParser.S:
				case IRIParser.T:
				case IRIParser.U:
				case IRIParser.V:
				case IRIParser.W:
				case IRIParser.X:
				case IRIParser.Y:
				case IRIParser.Z:
				case IRIParser.COL:
				case IRIParser.DOT:
				case IRIParser.PERCENT:
				case IRIParser.HYPHEN:
				case IRIParser.TILDE:
				case IRIParser.USCORE:
				case IRIParser.EXCL:
				case IRIParser.DOLLAR:
				case IRIParser.AMP:
				case IRIParser.SQUOTE:
				case IRIParser.OPAREN:
				case IRIParser.CPAREN:
				case IRIParser.STAR:
				case IRIParser.PLUS:
				case IRIParser.COMMA:
				case IRIParser.SCOL:
				case IRIParser.EQUALS:
				case IRIParser.AT:
					{
					this.state = 236;
					this.ipchar();
					}
					break;
				case IRIParser.IPRIVATE:
				case IRIParser.FSLASH:
				case IRIParser.QMARK:
					{
					this.state = 237;
					_la = this._input.LA(1);
					if (!(_la === IRIParser.IPRIVATE || _la === IRIParser.FSLASH || _la === IRIParser.QMARK)) {
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
				this.state = 242;
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
	public ifragment(): IfragmentContext {
		let _localctx: IfragmentContext = new IfragmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, IRIParser.RULE_ifragment);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 247;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << IRIParser.UCSCHAR) | (1 << IRIParser.D0) | (1 << IRIParser.D1) | (1 << IRIParser.D2) | (1 << IRIParser.D3) | (1 << IRIParser.D4) | (1 << IRIParser.D5) | (1 << IRIParser.D6) | (1 << IRIParser.D7) | (1 << IRIParser.D8) | (1 << IRIParser.D9) | (1 << IRIParser.A) | (1 << IRIParser.B) | (1 << IRIParser.C) | (1 << IRIParser.D) | (1 << IRIParser.E) | (1 << IRIParser.F) | (1 << IRIParser.G) | (1 << IRIParser.H) | (1 << IRIParser.I) | (1 << IRIParser.J) | (1 << IRIParser.K) | (1 << IRIParser.L) | (1 << IRIParser.M) | (1 << IRIParser.N) | (1 << IRIParser.O) | (1 << IRIParser.P) | (1 << IRIParser.Q) | (1 << IRIParser.R) | (1 << IRIParser.S))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (IRIParser.T - 32)) | (1 << (IRIParser.U - 32)) | (1 << (IRIParser.V - 32)) | (1 << (IRIParser.W - 32)) | (1 << (IRIParser.X - 32)) | (1 << (IRIParser.Y - 32)) | (1 << (IRIParser.Z - 32)) | (1 << (IRIParser.COL - 32)) | (1 << (IRIParser.DOT - 32)) | (1 << (IRIParser.PERCENT - 32)) | (1 << (IRIParser.HYPHEN - 32)) | (1 << (IRIParser.TILDE - 32)) | (1 << (IRIParser.USCORE - 32)) | (1 << (IRIParser.EXCL - 32)) | (1 << (IRIParser.DOLLAR - 32)) | (1 << (IRIParser.AMP - 32)) | (1 << (IRIParser.SQUOTE - 32)) | (1 << (IRIParser.OPAREN - 32)) | (1 << (IRIParser.CPAREN - 32)) | (1 << (IRIParser.STAR - 32)) | (1 << (IRIParser.PLUS - 32)) | (1 << (IRIParser.COMMA - 32)) | (1 << (IRIParser.SCOL - 32)) | (1 << (IRIParser.EQUALS - 32)) | (1 << (IRIParser.FSLASH - 32)) | (1 << (IRIParser.QMARK - 32)) | (1 << (IRIParser.AT - 32)))) !== 0)) {
				{
				this.state = 245;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case IRIParser.UCSCHAR:
				case IRIParser.D0:
				case IRIParser.D1:
				case IRIParser.D2:
				case IRIParser.D3:
				case IRIParser.D4:
				case IRIParser.D5:
				case IRIParser.D6:
				case IRIParser.D7:
				case IRIParser.D8:
				case IRIParser.D9:
				case IRIParser.A:
				case IRIParser.B:
				case IRIParser.C:
				case IRIParser.D:
				case IRIParser.E:
				case IRIParser.F:
				case IRIParser.G:
				case IRIParser.H:
				case IRIParser.I:
				case IRIParser.J:
				case IRIParser.K:
				case IRIParser.L:
				case IRIParser.M:
				case IRIParser.N:
				case IRIParser.O:
				case IRIParser.P:
				case IRIParser.Q:
				case IRIParser.R:
				case IRIParser.S:
				case IRIParser.T:
				case IRIParser.U:
				case IRIParser.V:
				case IRIParser.W:
				case IRIParser.X:
				case IRIParser.Y:
				case IRIParser.Z:
				case IRIParser.COL:
				case IRIParser.DOT:
				case IRIParser.PERCENT:
				case IRIParser.HYPHEN:
				case IRIParser.TILDE:
				case IRIParser.USCORE:
				case IRIParser.EXCL:
				case IRIParser.DOLLAR:
				case IRIParser.AMP:
				case IRIParser.SQUOTE:
				case IRIParser.OPAREN:
				case IRIParser.CPAREN:
				case IRIParser.STAR:
				case IRIParser.PLUS:
				case IRIParser.COMMA:
				case IRIParser.SCOL:
				case IRIParser.EQUALS:
				case IRIParser.AT:
					{
					this.state = 243;
					this.ipchar();
					}
					break;
				case IRIParser.FSLASH:
				case IRIParser.QMARK:
					{
					this.state = 244;
					_la = this._input.LA(1);
					if (!(_la === IRIParser.FSLASH || _la === IRIParser.QMARK)) {
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
				this.state = 249;
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
	public iunreserved(): IunreservedContext {
		let _localctx: IunreservedContext = new IunreservedContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, IRIParser.RULE_iunreserved);
		let _la: number;
		try {
			this.state = 253;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case IRIParser.A:
			case IRIParser.B:
			case IRIParser.C:
			case IRIParser.D:
			case IRIParser.E:
			case IRIParser.F:
			case IRIParser.G:
			case IRIParser.H:
			case IRIParser.I:
			case IRIParser.J:
			case IRIParser.K:
			case IRIParser.L:
			case IRIParser.M:
			case IRIParser.N:
			case IRIParser.O:
			case IRIParser.P:
			case IRIParser.Q:
			case IRIParser.R:
			case IRIParser.S:
			case IRIParser.T:
			case IRIParser.U:
			case IRIParser.V:
			case IRIParser.W:
			case IRIParser.X:
			case IRIParser.Y:
			case IRIParser.Z:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 250;
				this.alpha();
				}
				break;
			case IRIParser.D0:
			case IRIParser.D1:
			case IRIParser.D2:
			case IRIParser.D3:
			case IRIParser.D4:
			case IRIParser.D5:
			case IRIParser.D6:
			case IRIParser.D7:
			case IRIParser.D8:
			case IRIParser.D9:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 251;
				this.digit();
				}
				break;
			case IRIParser.UCSCHAR:
			case IRIParser.DOT:
			case IRIParser.HYPHEN:
			case IRIParser.TILDE:
			case IRIParser.USCORE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 252;
				_la = this._input.LA(1);
				if (!(_la === IRIParser.UCSCHAR || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (IRIParser.DOT - 41)) | (1 << (IRIParser.HYPHEN - 41)) | (1 << (IRIParser.TILDE - 41)) | (1 << (IRIParser.USCORE - 41)))) !== 0))) {
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
	public scheme(): SchemeContext {
		let _localctx: SchemeContext = new SchemeContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, IRIParser.RULE_scheme);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 255;
			this.alpha();
			this.state = 261;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << IRIParser.D0) | (1 << IRIParser.D1) | (1 << IRIParser.D2) | (1 << IRIParser.D3) | (1 << IRIParser.D4) | (1 << IRIParser.D5) | (1 << IRIParser.D6) | (1 << IRIParser.D7) | (1 << IRIParser.D8) | (1 << IRIParser.D9) | (1 << IRIParser.A) | (1 << IRIParser.B) | (1 << IRIParser.C) | (1 << IRIParser.D) | (1 << IRIParser.E) | (1 << IRIParser.F) | (1 << IRIParser.G) | (1 << IRIParser.H) | (1 << IRIParser.I) | (1 << IRIParser.J) | (1 << IRIParser.K) | (1 << IRIParser.L) | (1 << IRIParser.M) | (1 << IRIParser.N) | (1 << IRIParser.O) | (1 << IRIParser.P) | (1 << IRIParser.Q) | (1 << IRIParser.R) | (1 << IRIParser.S))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (IRIParser.T - 32)) | (1 << (IRIParser.U - 32)) | (1 << (IRIParser.V - 32)) | (1 << (IRIParser.W - 32)) | (1 << (IRIParser.X - 32)) | (1 << (IRIParser.Y - 32)) | (1 << (IRIParser.Z - 32)) | (1 << (IRIParser.DOT - 32)) | (1 << (IRIParser.HYPHEN - 32)) | (1 << (IRIParser.PLUS - 32)))) !== 0)) {
				{
				this.state = 259;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case IRIParser.A:
				case IRIParser.B:
				case IRIParser.C:
				case IRIParser.D:
				case IRIParser.E:
				case IRIParser.F:
				case IRIParser.G:
				case IRIParser.H:
				case IRIParser.I:
				case IRIParser.J:
				case IRIParser.K:
				case IRIParser.L:
				case IRIParser.M:
				case IRIParser.N:
				case IRIParser.O:
				case IRIParser.P:
				case IRIParser.Q:
				case IRIParser.R:
				case IRIParser.S:
				case IRIParser.T:
				case IRIParser.U:
				case IRIParser.V:
				case IRIParser.W:
				case IRIParser.X:
				case IRIParser.Y:
				case IRIParser.Z:
					{
					this.state = 256;
					this.alpha();
					}
					break;
				case IRIParser.D0:
				case IRIParser.D1:
				case IRIParser.D2:
				case IRIParser.D3:
				case IRIParser.D4:
				case IRIParser.D5:
				case IRIParser.D6:
				case IRIParser.D7:
				case IRIParser.D8:
				case IRIParser.D9:
					{
					this.state = 257;
					this.digit();
					}
					break;
				case IRIParser.DOT:
				case IRIParser.HYPHEN:
				case IRIParser.PLUS:
					{
					this.state = 258;
					_la = this._input.LA(1);
					if (!(((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (IRIParser.DOT - 41)) | (1 << (IRIParser.HYPHEN - 41)) | (1 << (IRIParser.PLUS - 41)))) !== 0))) {
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
				this.state = 263;
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
	public port(): PortContext {
		let _localctx: PortContext = new PortContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, IRIParser.RULE_port);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 267;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << IRIParser.D0) | (1 << IRIParser.D1) | (1 << IRIParser.D2) | (1 << IRIParser.D3) | (1 << IRIParser.D4) | (1 << IRIParser.D5) | (1 << IRIParser.D6) | (1 << IRIParser.D7) | (1 << IRIParser.D8) | (1 << IRIParser.D9))) !== 0)) {
				{
				{
				this.state = 264;
				this.digit();
				}
				}
				this.state = 269;
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
	public ip_literal(): Ip_literalContext {
		let _localctx: Ip_literalContext = new Ip_literalContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, IRIParser.RULE_ip_literal);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 270;
			this.match(IRIParser.OBRACK);
			this.state = 273;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case IRIParser.D0:
			case IRIParser.D1:
			case IRIParser.D2:
			case IRIParser.D3:
			case IRIParser.D4:
			case IRIParser.D5:
			case IRIParser.D6:
			case IRIParser.D7:
			case IRIParser.D8:
			case IRIParser.D9:
			case IRIParser.A:
			case IRIParser.B:
			case IRIParser.C:
			case IRIParser.D:
			case IRIParser.E:
			case IRIParser.F:
			case IRIParser.COL2:
				{
				this.state = 271;
				this.ip_v6_address();
				}
				break;
			case IRIParser.V:
				{
				this.state = 272;
				this.ip_v_future();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 275;
			this.match(IRIParser.CBRACK);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ip_v_future(): Ip_v_futureContext {
		let _localctx: Ip_v_futureContext = new Ip_v_futureContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, IRIParser.RULE_ip_v_future);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 277;
			this.match(IRIParser.V);
			this.state = 279;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 278;
				this.hexdig();
				}
				}
				this.state = 281;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << IRIParser.D0) | (1 << IRIParser.D1) | (1 << IRIParser.D2) | (1 << IRIParser.D3) | (1 << IRIParser.D4) | (1 << IRIParser.D5) | (1 << IRIParser.D6) | (1 << IRIParser.D7) | (1 << IRIParser.D8) | (1 << IRIParser.D9) | (1 << IRIParser.A) | (1 << IRIParser.B) | (1 << IRIParser.C) | (1 << IRIParser.D) | (1 << IRIParser.E) | (1 << IRIParser.F))) !== 0));
			this.state = 283;
			this.match(IRIParser.DOT);
			this.state = 287;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 287;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case IRIParser.D0:
				case IRIParser.D1:
				case IRIParser.D2:
				case IRIParser.D3:
				case IRIParser.D4:
				case IRIParser.D5:
				case IRIParser.D6:
				case IRIParser.D7:
				case IRIParser.D8:
				case IRIParser.D9:
				case IRIParser.A:
				case IRIParser.B:
				case IRIParser.C:
				case IRIParser.D:
				case IRIParser.E:
				case IRIParser.F:
				case IRIParser.G:
				case IRIParser.H:
				case IRIParser.I:
				case IRIParser.J:
				case IRIParser.K:
				case IRIParser.L:
				case IRIParser.M:
				case IRIParser.N:
				case IRIParser.O:
				case IRIParser.P:
				case IRIParser.Q:
				case IRIParser.R:
				case IRIParser.S:
				case IRIParser.T:
				case IRIParser.U:
				case IRIParser.V:
				case IRIParser.W:
				case IRIParser.X:
				case IRIParser.Y:
				case IRIParser.Z:
				case IRIParser.DOT:
				case IRIParser.HYPHEN:
				case IRIParser.TILDE:
				case IRIParser.USCORE:
					{
					this.state = 284;
					this.unreserved();
					}
					break;
				case IRIParser.EXCL:
				case IRIParser.DOLLAR:
				case IRIParser.AMP:
				case IRIParser.SQUOTE:
				case IRIParser.OPAREN:
				case IRIParser.CPAREN:
				case IRIParser.STAR:
				case IRIParser.PLUS:
				case IRIParser.COMMA:
				case IRIParser.SCOL:
				case IRIParser.EQUALS:
					{
					this.state = 285;
					this.sub_delims();
					}
					break;
				case IRIParser.COL:
					{
					this.state = 286;
					this.match(IRIParser.COL);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 289;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << IRIParser.D0) | (1 << IRIParser.D1) | (1 << IRIParser.D2) | (1 << IRIParser.D3) | (1 << IRIParser.D4) | (1 << IRIParser.D5) | (1 << IRIParser.D6) | (1 << IRIParser.D7) | (1 << IRIParser.D8) | (1 << IRIParser.D9) | (1 << IRIParser.A) | (1 << IRIParser.B) | (1 << IRIParser.C) | (1 << IRIParser.D) | (1 << IRIParser.E) | (1 << IRIParser.F) | (1 << IRIParser.G) | (1 << IRIParser.H) | (1 << IRIParser.I) | (1 << IRIParser.J) | (1 << IRIParser.K) | (1 << IRIParser.L) | (1 << IRIParser.M) | (1 << IRIParser.N) | (1 << IRIParser.O) | (1 << IRIParser.P) | (1 << IRIParser.Q) | (1 << IRIParser.R) | (1 << IRIParser.S))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (IRIParser.T - 32)) | (1 << (IRIParser.U - 32)) | (1 << (IRIParser.V - 32)) | (1 << (IRIParser.W - 32)) | (1 << (IRIParser.X - 32)) | (1 << (IRIParser.Y - 32)) | (1 << (IRIParser.Z - 32)) | (1 << (IRIParser.COL - 32)) | (1 << (IRIParser.DOT - 32)) | (1 << (IRIParser.HYPHEN - 32)) | (1 << (IRIParser.TILDE - 32)) | (1 << (IRIParser.USCORE - 32)) | (1 << (IRIParser.EXCL - 32)) | (1 << (IRIParser.DOLLAR - 32)) | (1 << (IRIParser.AMP - 32)) | (1 << (IRIParser.SQUOTE - 32)) | (1 << (IRIParser.OPAREN - 32)) | (1 << (IRIParser.CPAREN - 32)) | (1 << (IRIParser.STAR - 32)) | (1 << (IRIParser.PLUS - 32)) | (1 << (IRIParser.COMMA - 32)) | (1 << (IRIParser.SCOL - 32)) | (1 << (IRIParser.EQUALS - 32)))) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ip_v6_address(): Ip_v6_addressContext {
		let _localctx: Ip_v6_addressContext = new Ip_v6_addressContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, IRIParser.RULE_ip_v6_address);
		let _la: number;
		try {
			this.state = 481;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 66, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 291;
				this.h16();
				this.state = 292;
				this.match(IRIParser.COL);
				this.state = 293;
				this.h16();
				this.state = 294;
				this.match(IRIParser.COL);
				this.state = 295;
				this.h16();
				this.state = 296;
				this.match(IRIParser.COL);
				this.state = 297;
				this.h16();
				this.state = 298;
				this.match(IRIParser.COL);
				this.state = 299;
				this.h16();
				this.state = 300;
				this.match(IRIParser.COL);
				this.state = 301;
				this.h16();
				this.state = 302;
				this.match(IRIParser.COL);
				this.state = 303;
				this.ls32();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 305;
				this.match(IRIParser.COL2);
				this.state = 306;
				this.h16();
				this.state = 307;
				this.match(IRIParser.COL);
				this.state = 308;
				this.h16();
				this.state = 309;
				this.match(IRIParser.COL);
				this.state = 310;
				this.h16();
				this.state = 311;
				this.match(IRIParser.COL);
				this.state = 312;
				this.h16();
				this.state = 313;
				this.match(IRIParser.COL);
				this.state = 314;
				this.h16();
				this.state = 315;
				this.match(IRIParser.COL);
				this.state = 316;
				this.ls32();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 319;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << IRIParser.D0) | (1 << IRIParser.D1) | (1 << IRIParser.D2) | (1 << IRIParser.D3) | (1 << IRIParser.D4) | (1 << IRIParser.D5) | (1 << IRIParser.D6) | (1 << IRIParser.D7) | (1 << IRIParser.D8) | (1 << IRIParser.D9) | (1 << IRIParser.A) | (1 << IRIParser.B) | (1 << IRIParser.C) | (1 << IRIParser.D) | (1 << IRIParser.E) | (1 << IRIParser.F))) !== 0)) {
					{
					this.state = 318;
					this.h16();
					}
				}

				this.state = 321;
				this.match(IRIParser.COL2);
				this.state = 322;
				this.h16();
				this.state = 323;
				this.match(IRIParser.COL);
				this.state = 324;
				this.h16();
				this.state = 325;
				this.match(IRIParser.COL);
				this.state = 326;
				this.h16();
				this.state = 327;
				this.match(IRIParser.COL);
				this.state = 328;
				this.h16();
				this.state = 329;
				this.match(IRIParser.COL);
				this.state = 330;
				this.ls32();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 338;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << IRIParser.D0) | (1 << IRIParser.D1) | (1 << IRIParser.D2) | (1 << IRIParser.D3) | (1 << IRIParser.D4) | (1 << IRIParser.D5) | (1 << IRIParser.D6) | (1 << IRIParser.D7) | (1 << IRIParser.D8) | (1 << IRIParser.D9) | (1 << IRIParser.A) | (1 << IRIParser.B) | (1 << IRIParser.C) | (1 << IRIParser.D) | (1 << IRIParser.E) | (1 << IRIParser.F))) !== 0)) {
					{
					this.state = 335;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 39, this._ctx) ) {
					case 1:
						{
						this.state = 332;
						this.h16();
						this.state = 333;
						this.match(IRIParser.COL);
						}
						break;
					}
					this.state = 337;
					this.h16();
					}
				}

				this.state = 340;
				this.match(IRIParser.COL2);
				this.state = 341;
				this.h16();
				this.state = 342;
				this.match(IRIParser.COL);
				this.state = 343;
				this.h16();
				this.state = 344;
				this.match(IRIParser.COL);
				this.state = 345;
				this.h16();
				this.state = 346;
				this.match(IRIParser.COL);
				this.state = 347;
				this.ls32();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 360;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << IRIParser.D0) | (1 << IRIParser.D1) | (1 << IRIParser.D2) | (1 << IRIParser.D3) | (1 << IRIParser.D4) | (1 << IRIParser.D5) | (1 << IRIParser.D6) | (1 << IRIParser.D7) | (1 << IRIParser.D8) | (1 << IRIParser.D9) | (1 << IRIParser.A) | (1 << IRIParser.B) | (1 << IRIParser.C) | (1 << IRIParser.D) | (1 << IRIParser.E) | (1 << IRIParser.F))) !== 0)) {
					{
					this.state = 357;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 42, this._ctx) ) {
					case 1:
						{
						this.state = 352;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 41, this._ctx) ) {
						case 1:
							{
							this.state = 349;
							this.h16();
							this.state = 350;
							this.match(IRIParser.COL);
							}
							break;
						}
						this.state = 354;
						this.h16();
						this.state = 355;
						this.match(IRIParser.COL);
						}
						break;
					}
					this.state = 359;
					this.h16();
					}
				}

				this.state = 362;
				this.match(IRIParser.COL2);
				this.state = 363;
				this.h16();
				this.state = 364;
				this.match(IRIParser.COL);
				this.state = 365;
				this.h16();
				this.state = 366;
				this.match(IRIParser.COL);
				this.state = 367;
				this.ls32();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 385;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << IRIParser.D0) | (1 << IRIParser.D1) | (1 << IRIParser.D2) | (1 << IRIParser.D3) | (1 << IRIParser.D4) | (1 << IRIParser.D5) | (1 << IRIParser.D6) | (1 << IRIParser.D7) | (1 << IRIParser.D8) | (1 << IRIParser.D9) | (1 << IRIParser.A) | (1 << IRIParser.B) | (1 << IRIParser.C) | (1 << IRIParser.D) | (1 << IRIParser.E) | (1 << IRIParser.F))) !== 0)) {
					{
					this.state = 382;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 46, this._ctx) ) {
					case 1:
						{
						this.state = 377;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 45, this._ctx) ) {
						case 1:
							{
							this.state = 372;
							this._errHandler.sync(this);
							switch ( this.interpreter.adaptivePredict(this._input, 44, this._ctx) ) {
							case 1:
								{
								this.state = 369;
								this.h16();
								this.state = 370;
								this.match(IRIParser.COL);
								}
								break;
							}
							this.state = 374;
							this.h16();
							this.state = 375;
							this.match(IRIParser.COL);
							}
							break;
						}
						this.state = 379;
						this.h16();
						this.state = 380;
						this.match(IRIParser.COL);
						}
						break;
					}
					this.state = 384;
					this.h16();
					}
				}

				this.state = 387;
				this.match(IRIParser.COL2);
				this.state = 388;
				this.h16();
				this.state = 389;
				this.match(IRIParser.COL);
				this.state = 390;
				this.ls32();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 413;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << IRIParser.D0) | (1 << IRIParser.D1) | (1 << IRIParser.D2) | (1 << IRIParser.D3) | (1 << IRIParser.D4) | (1 << IRIParser.D5) | (1 << IRIParser.D6) | (1 << IRIParser.D7) | (1 << IRIParser.D8) | (1 << IRIParser.D9) | (1 << IRIParser.A) | (1 << IRIParser.B) | (1 << IRIParser.C) | (1 << IRIParser.D) | (1 << IRIParser.E) | (1 << IRIParser.F))) !== 0)) {
					{
					this.state = 410;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 51, this._ctx) ) {
					case 1:
						{
						this.state = 405;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 50, this._ctx) ) {
						case 1:
							{
							this.state = 400;
							this._errHandler.sync(this);
							switch ( this.interpreter.adaptivePredict(this._input, 49, this._ctx) ) {
							case 1:
								{
								this.state = 395;
								this._errHandler.sync(this);
								switch ( this.interpreter.adaptivePredict(this._input, 48, this._ctx) ) {
								case 1:
									{
									this.state = 392;
									this.h16();
									this.state = 393;
									this.match(IRIParser.COL);
									}
									break;
								}
								this.state = 397;
								this.h16();
								this.state = 398;
								this.match(IRIParser.COL);
								}
								break;
							}
							this.state = 402;
							this.h16();
							this.state = 403;
							this.match(IRIParser.COL);
							}
							break;
						}
						this.state = 407;
						this.h16();
						this.state = 408;
						this.match(IRIParser.COL);
						}
						break;
					}
					this.state = 412;
					this.h16();
					}
				}

				this.state = 415;
				this.match(IRIParser.COL2);
				this.state = 416;
				this.ls32();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 443;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << IRIParser.D0) | (1 << IRIParser.D1) | (1 << IRIParser.D2) | (1 << IRIParser.D3) | (1 << IRIParser.D4) | (1 << IRIParser.D5) | (1 << IRIParser.D6) | (1 << IRIParser.D7) | (1 << IRIParser.D8) | (1 << IRIParser.D9) | (1 << IRIParser.A) | (1 << IRIParser.B) | (1 << IRIParser.C) | (1 << IRIParser.D) | (1 << IRIParser.E) | (1 << IRIParser.F))) !== 0)) {
					{
					this.state = 440;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 57, this._ctx) ) {
					case 1:
						{
						this.state = 435;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 56, this._ctx) ) {
						case 1:
							{
							this.state = 430;
							this._errHandler.sync(this);
							switch ( this.interpreter.adaptivePredict(this._input, 55, this._ctx) ) {
							case 1:
								{
								this.state = 425;
								this._errHandler.sync(this);
								switch ( this.interpreter.adaptivePredict(this._input, 54, this._ctx) ) {
								case 1:
									{
									this.state = 420;
									this._errHandler.sync(this);
									switch ( this.interpreter.adaptivePredict(this._input, 53, this._ctx) ) {
									case 1:
										{
										this.state = 417;
										this.h16();
										this.state = 418;
										this.match(IRIParser.COL);
										}
										break;
									}
									this.state = 422;
									this.h16();
									this.state = 423;
									this.match(IRIParser.COL);
									}
									break;
								}
								this.state = 427;
								this.h16();
								this.state = 428;
								this.match(IRIParser.COL);
								}
								break;
							}
							this.state = 432;
							this.h16();
							this.state = 433;
							this.match(IRIParser.COL);
							}
							break;
						}
						this.state = 437;
						this.h16();
						this.state = 438;
						this.match(IRIParser.COL);
						}
						break;
					}
					this.state = 442;
					this.h16();
					}
				}

				this.state = 445;
				this.match(IRIParser.COL2);
				this.state = 446;
				this.h16();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 478;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << IRIParser.D0) | (1 << IRIParser.D1) | (1 << IRIParser.D2) | (1 << IRIParser.D3) | (1 << IRIParser.D4) | (1 << IRIParser.D5) | (1 << IRIParser.D6) | (1 << IRIParser.D7) | (1 << IRIParser.D8) | (1 << IRIParser.D9) | (1 << IRIParser.A) | (1 << IRIParser.B) | (1 << IRIParser.C) | (1 << IRIParser.D) | (1 << IRIParser.E) | (1 << IRIParser.F))) !== 0)) {
					{
					this.state = 475;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 64, this._ctx) ) {
					case 1:
						{
						this.state = 470;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 63, this._ctx) ) {
						case 1:
							{
							this.state = 465;
							this._errHandler.sync(this);
							switch ( this.interpreter.adaptivePredict(this._input, 62, this._ctx) ) {
							case 1:
								{
								this.state = 460;
								this._errHandler.sync(this);
								switch ( this.interpreter.adaptivePredict(this._input, 61, this._ctx) ) {
								case 1:
									{
									this.state = 455;
									this._errHandler.sync(this);
									switch ( this.interpreter.adaptivePredict(this._input, 60, this._ctx) ) {
									case 1:
										{
										this.state = 450;
										this._errHandler.sync(this);
										switch ( this.interpreter.adaptivePredict(this._input, 59, this._ctx) ) {
										case 1:
											{
											this.state = 447;
											this.h16();
											this.state = 448;
											this.match(IRIParser.COL);
											}
											break;
										}
										this.state = 452;
										this.h16();
										this.state = 453;
										this.match(IRIParser.COL);
										}
										break;
									}
									this.state = 457;
									this.h16();
									this.state = 458;
									this.match(IRIParser.COL);
									}
									break;
								}
								this.state = 462;
								this.h16();
								this.state = 463;
								this.match(IRIParser.COL);
								}
								break;
							}
							this.state = 467;
							this.h16();
							this.state = 468;
							this.match(IRIParser.COL);
							}
							break;
						}
						this.state = 472;
						this.h16();
						this.state = 473;
						this.match(IRIParser.COL);
						}
						break;
					}
					this.state = 477;
					this.h16();
					}
				}

				this.state = 480;
				this.match(IRIParser.COL2);
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
	public h16(): H16Context {
		let _localctx: H16Context = new H16Context(this._ctx, this.state);
		this.enterRule(_localctx, 58, IRIParser.RULE_h16);
		try {
			this.state = 496;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 67, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 483;
				this.hexdig();
				this.state = 484;
				this.hexdig();
				this.state = 485;
				this.hexdig();
				this.state = 486;
				this.hexdig();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 488;
				this.hexdig();
				this.state = 489;
				this.hexdig();
				this.state = 490;
				this.hexdig();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 492;
				this.hexdig();
				this.state = 493;
				this.hexdig();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 495;
				this.hexdig();
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
	public ls32(): Ls32Context {
		let _localctx: Ls32Context = new Ls32Context(this._ctx, this.state);
		this.enterRule(_localctx, 60, IRIParser.RULE_ls32);
		try {
			this.state = 503;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 68, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 498;
				this.h16();
				this.state = 499;
				this.match(IRIParser.COL);
				this.state = 500;
				this.h16();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 502;
				this.ip_v4_address();
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
	public ip_v4_address(): Ip_v4_addressContext {
		let _localctx: Ip_v4_addressContext = new Ip_v4_addressContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, IRIParser.RULE_ip_v4_address);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 505;
			this.dec_octet();
			this.state = 506;
			this.match(IRIParser.DOT);
			this.state = 507;
			this.dec_octet();
			this.state = 508;
			this.match(IRIParser.DOT);
			this.state = 509;
			this.dec_octet();
			this.state = 510;
			this.match(IRIParser.DOT);
			this.state = 511;
			this.dec_octet();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dec_octet(): Dec_octetContext {
		let _localctx: Dec_octetContext = new Dec_octetContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, IRIParser.RULE_dec_octet);
		let _la: number;
		try {
			this.state = 527;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 69, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 513;
				this.digit();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 514;
				this.non_zero_digit();
				this.state = 515;
				this.digit();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 517;
				this.match(IRIParser.D1);
				this.state = 518;
				this.digit();
				this.state = 519;
				this.digit();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 521;
				this.match(IRIParser.D2);
				this.state = 522;
				_la = this._input.LA(1);
				if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << IRIParser.D0) | (1 << IRIParser.D1) | (1 << IRIParser.D2) | (1 << IRIParser.D3) | (1 << IRIParser.D4))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 523;
				this.digit();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 524;
				this.match(IRIParser.D2);
				this.state = 525;
				this.match(IRIParser.D5);
				this.state = 526;
				_la = this._input.LA(1);
				if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << IRIParser.D0) | (1 << IRIParser.D1) | (1 << IRIParser.D2) | (1 << IRIParser.D3) | (1 << IRIParser.D4) | (1 << IRIParser.D5))) !== 0))) {
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
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pct_encoded(): Pct_encodedContext {
		let _localctx: Pct_encodedContext = new Pct_encodedContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, IRIParser.RULE_pct_encoded);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 529;
			this.match(IRIParser.PERCENT);
			this.state = 530;
			this.hexdig();
			this.state = 531;
			this.hexdig();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unreserved(): UnreservedContext {
		let _localctx: UnreservedContext = new UnreservedContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, IRIParser.RULE_unreserved);
		let _la: number;
		try {
			this.state = 536;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case IRIParser.A:
			case IRIParser.B:
			case IRIParser.C:
			case IRIParser.D:
			case IRIParser.E:
			case IRIParser.F:
			case IRIParser.G:
			case IRIParser.H:
			case IRIParser.I:
			case IRIParser.J:
			case IRIParser.K:
			case IRIParser.L:
			case IRIParser.M:
			case IRIParser.N:
			case IRIParser.O:
			case IRIParser.P:
			case IRIParser.Q:
			case IRIParser.R:
			case IRIParser.S:
			case IRIParser.T:
			case IRIParser.U:
			case IRIParser.V:
			case IRIParser.W:
			case IRIParser.X:
			case IRIParser.Y:
			case IRIParser.Z:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 533;
				this.alpha();
				}
				break;
			case IRIParser.D0:
			case IRIParser.D1:
			case IRIParser.D2:
			case IRIParser.D3:
			case IRIParser.D4:
			case IRIParser.D5:
			case IRIParser.D6:
			case IRIParser.D7:
			case IRIParser.D8:
			case IRIParser.D9:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 534;
				this.digit();
				}
				break;
			case IRIParser.DOT:
			case IRIParser.HYPHEN:
			case IRIParser.TILDE:
			case IRIParser.USCORE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 535;
				_la = this._input.LA(1);
				if (!(((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (IRIParser.DOT - 41)) | (1 << (IRIParser.HYPHEN - 41)) | (1 << (IRIParser.TILDE - 41)) | (1 << (IRIParser.USCORE - 41)))) !== 0))) {
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
	public reserved(): ReservedContext {
		let _localctx: ReservedContext = new ReservedContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, IRIParser.RULE_reserved);
		try {
			this.state = 540;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case IRIParser.COL:
			case IRIParser.FSLASH:
			case IRIParser.QMARK:
			case IRIParser.HASH:
			case IRIParser.OBRACK:
			case IRIParser.CBRACK:
			case IRIParser.AT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 538;
				this.gen_delims();
				}
				break;
			case IRIParser.EXCL:
			case IRIParser.DOLLAR:
			case IRIParser.AMP:
			case IRIParser.SQUOTE:
			case IRIParser.OPAREN:
			case IRIParser.CPAREN:
			case IRIParser.STAR:
			case IRIParser.PLUS:
			case IRIParser.COMMA:
			case IRIParser.SCOL:
			case IRIParser.EQUALS:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 539;
				this.sub_delims();
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
	public gen_delims(): Gen_delimsContext {
		let _localctx: Gen_delimsContext = new Gen_delimsContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, IRIParser.RULE_gen_delims);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 542;
			_la = this._input.LA(1);
			if (!(((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (IRIParser.COL - 40)) | (1 << (IRIParser.FSLASH - 40)) | (1 << (IRIParser.QMARK - 40)) | (1 << (IRIParser.HASH - 40)) | (1 << (IRIParser.OBRACK - 40)) | (1 << (IRIParser.CBRACK - 40)) | (1 << (IRIParser.AT - 40)))) !== 0))) {
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
	public sub_delims(): Sub_delimsContext {
		let _localctx: Sub_delimsContext = new Sub_delimsContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, IRIParser.RULE_sub_delims);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 544;
			_la = this._input.LA(1);
			if (!(((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & ((1 << (IRIParser.EXCL - 46)) | (1 << (IRIParser.DOLLAR - 46)) | (1 << (IRIParser.AMP - 46)) | (1 << (IRIParser.SQUOTE - 46)) | (1 << (IRIParser.OPAREN - 46)) | (1 << (IRIParser.CPAREN - 46)) | (1 << (IRIParser.STAR - 46)) | (1 << (IRIParser.PLUS - 46)) | (1 << (IRIParser.COMMA - 46)) | (1 << (IRIParser.SCOL - 46)) | (1 << (IRIParser.EQUALS - 46)))) !== 0))) {
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
	public alpha(): AlphaContext {
		let _localctx: AlphaContext = new AlphaContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, IRIParser.RULE_alpha);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 546;
			_la = this._input.LA(1);
			if (!(((((_la - 13)) & ~0x1F) === 0 && ((1 << (_la - 13)) & ((1 << (IRIParser.A - 13)) | (1 << (IRIParser.B - 13)) | (1 << (IRIParser.C - 13)) | (1 << (IRIParser.D - 13)) | (1 << (IRIParser.E - 13)) | (1 << (IRIParser.F - 13)) | (1 << (IRIParser.G - 13)) | (1 << (IRIParser.H - 13)) | (1 << (IRIParser.I - 13)) | (1 << (IRIParser.J - 13)) | (1 << (IRIParser.K - 13)) | (1 << (IRIParser.L - 13)) | (1 << (IRIParser.M - 13)) | (1 << (IRIParser.N - 13)) | (1 << (IRIParser.O - 13)) | (1 << (IRIParser.P - 13)) | (1 << (IRIParser.Q - 13)) | (1 << (IRIParser.R - 13)) | (1 << (IRIParser.S - 13)) | (1 << (IRIParser.T - 13)) | (1 << (IRIParser.U - 13)) | (1 << (IRIParser.V - 13)) | (1 << (IRIParser.W - 13)) | (1 << (IRIParser.X - 13)) | (1 << (IRIParser.Y - 13)) | (1 << (IRIParser.Z - 13)))) !== 0))) {
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
	public hexdig(): HexdigContext {
		let _localctx: HexdigContext = new HexdigContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, IRIParser.RULE_hexdig);
		let _la: number;
		try {
			this.state = 550;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case IRIParser.D0:
			case IRIParser.D1:
			case IRIParser.D2:
			case IRIParser.D3:
			case IRIParser.D4:
			case IRIParser.D5:
			case IRIParser.D6:
			case IRIParser.D7:
			case IRIParser.D8:
			case IRIParser.D9:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 548;
				this.digit();
				}
				break;
			case IRIParser.A:
			case IRIParser.B:
			case IRIParser.C:
			case IRIParser.D:
			case IRIParser.E:
			case IRIParser.F:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 549;
				_la = this._input.LA(1);
				if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << IRIParser.A) | (1 << IRIParser.B) | (1 << IRIParser.C) | (1 << IRIParser.D) | (1 << IRIParser.E) | (1 << IRIParser.F))) !== 0))) {
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
	public digit(): DigitContext {
		let _localctx: DigitContext = new DigitContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, IRIParser.RULE_digit);
		try {
			this.state = 554;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case IRIParser.D0:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 552;
				this.match(IRIParser.D0);
				}
				break;
			case IRIParser.D1:
			case IRIParser.D2:
			case IRIParser.D3:
			case IRIParser.D4:
			case IRIParser.D5:
			case IRIParser.D6:
			case IRIParser.D7:
			case IRIParser.D8:
			case IRIParser.D9:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 553;
				this.non_zero_digit();
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
	public non_zero_digit(): Non_zero_digitContext {
		let _localctx: Non_zero_digitContext = new Non_zero_digitContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, IRIParser.RULE_non_zero_digit);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 556;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << IRIParser.D1) | (1 << IRIParser.D2) | (1 << IRIParser.D3) | (1 << IRIParser.D4) | (1 << IRIParser.D5) | (1 << IRIParser.D6) | (1 << IRIParser.D7) | (1 << IRIParser.D8) | (1 << IRIParser.D9))) !== 0))) {
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

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03A\u0231\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03" +
		"_\n\x03\x03\x03\x03\x03\x05\x03c\n\x03\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x05\x04l\n\x04\x03\x05\x03\x05\x05\x05p\n\x05" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06w\n\x06\x03\x07\x03\x07" +
		"\x03\x07\x05\x07|\n\x07\x03\x07\x03\x07\x05\x07\x80\n\x07\x03\b\x03\b" +
		"\x03\b\x03\b\x03\b\x03\b\x03\b\x05\b\x89\n\b\x03\t\x03\t\x03\t\x05\t\x8E" +
		"\n\t\x03\t\x03\t\x03\t\x05\t\x93\n\t\x03\n\x03\n\x03\n\x03\n\x07\n\x99" +
		"\n\n\f\n\x0E\n\x9C\v\n\x03\v\x03\v\x03\v\x05\v\xA1\n\v\x03\f\x03\f\x03" +
		"\f\x07\f\xA6\n\f\f\f\x0E\f\xA9\v\f\x03\r\x03\r\x03\r\x03\r\x03\r\x05\r" +
		"\xB0\n\r\x03\x0E\x03\x0E\x07\x0E\xB4\n\x0E\f\x0E\x0E\x0E\xB7\v\x0E\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x0F\x07\x0F\xBD\n\x0F\f\x0F\x0E\x0F\xC0\v\x0F" +
		"\x05\x0F\xC2\n\x0F\x03\x10\x03\x10\x03\x10\x07\x10\xC7\n\x10\f\x10\x0E" +
		"\x10\xCA\v\x10\x03\x11\x03\x11\x03\x11\x07\x11\xCF\n\x11\f\x11\x0E\x11" +
		"\xD2\v\x11\x03\x12\x03\x12\x03\x13\x07\x13\xD7\n\x13\f\x13\x0E\x13\xDA" +
		"\v\x13\x03\x14\x06\x14\xDD\n\x14\r\x14\x0E\x14\xDE\x03\x15\x03\x15\x03" +
		"\x15\x03\x15\x06\x15\xE5\n\x15\r\x15\x0E\x15\xE6\x03\x16\x03\x16\x03\x16" +
		"\x03\x16\x05\x16\xED\n\x16\x03\x17\x03\x17\x07\x17\xF1\n\x17\f\x17\x0E" +
		"\x17\xF4\v\x17\x03\x18\x03\x18\x07\x18\xF8\n\x18\f\x18\x0E\x18\xFB\v\x18" +
		"\x03\x19\x03\x19\x03\x19\x05\x19\u0100\n\x19\x03\x1A\x03\x1A\x03\x1A\x03" +
		"\x1A\x07\x1A\u0106\n\x1A\f\x1A\x0E\x1A\u0109\v\x1A\x03\x1B\x07\x1B\u010C" +
		"\n\x1B\f\x1B\x0E\x1B\u010F\v\x1B\x03\x1C\x03\x1C\x03\x1C\x05\x1C\u0114" +
		"\n\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x06\x1D\u011A\n\x1D\r\x1D\x0E\x1D" +
		"\u011B\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x06\x1D\u0122\n\x1D\r\x1D\x0E\x1D" +
		"\u0123\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E" +
		"\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E" +
		"\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E" +
		"\x03\x1E\x03\x1E\x05\x1E\u0142\n\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03" +
		"\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03" +
		"\x1E\x05\x1E\u0152\n\x1E\x03\x1E\x05\x1E\u0155\n\x1E\x03\x1E\x03\x1E\x03" +
		"\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03" +
		"\x1E\x05\x1E\u0163\n\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u0168\n\x1E\x03" +
		"\x1E\x05\x1E\u016B\n\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E" +
		"\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u0177\n\x1E\x03\x1E\x03\x1E\x03" +
		"\x1E\x05\x1E\u017C\n\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u0181\n\x1E\x03" +
		"\x1E\x05\x1E\u0184\n\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E" +
		"\x03\x1E\x03\x1E\x05\x1E\u018E\n\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u0193" +
		"\n\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u0198\n\x1E\x03\x1E\x03\x1E\x03" +
		"\x1E\x05\x1E\u019D\n\x1E\x03\x1E\x05\x1E\u01A0\n\x1E\x03\x1E\x03\x1E\x03" +
		"\x1E\x03\x1E\x03\x1E\x05\x1E\u01A7\n\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E" +
		"\u01AC\n\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u01B1\n\x1E\x03\x1E\x03\x1E" +
		"\x03\x1E\x05\x1E\u01B6\n\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u01BB\n\x1E" +
		"\x03\x1E\x05\x1E\u01BE\n\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x05" +
		"\x1E\u01C5\n\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u01CA\n\x1E\x03\x1E\x03" +
		"\x1E\x03\x1E\x05\x1E\u01CF\n\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u01D4" +
		"\n\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u01D9\n\x1E\x03\x1E\x03\x1E\x03" +
		"\x1E\x05\x1E\u01DE\n\x1E\x03\x1E\x05\x1E\u01E1\n\x1E\x03\x1E\x05\x1E\u01E4" +
		"\n\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F" +
		"\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u01F3\n\x1F\x03 \x03" +
		" \x03 \x03 \x03 \x05 \u01FA\n \x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03" +
		"!\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03" +
		"\"\x03\"\x03\"\x05\"\u0212\n\"\x03#\x03#\x03#\x03#\x03$\x03$\x03$\x05" +
		"$\u021B\n$\x03%\x03%\x05%\u021F\n%\x03&\x03&\x03\'\x03\'\x03(\x03(\x03" +
		")\x03)\x05)\u0229\n)\x03*\x03*\x05*\u022D\n*\x03+\x03+\x03+\x02\x02\x02" +
		",\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14" +
		"\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02" +
		"*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02" +
		"F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02\x02\x0F\x04\x02**AA\x04\x02\x04" +
		"\x04<=\x03\x02<=\x05\x02\x03\x03++-/\x05\x02++--77\x03\x02\x05\t\x03\x02" +
		"\x05\n\x04\x02++-/\x04\x02**<A\x03\x020:\x03\x02\x0F(\x03\x02\x0F\x14" +
		"\x03\x02\x06\x0E\x02\u026F\x02V\x03\x02\x02\x02\x04Y\x03\x02\x02\x02\x06" +
		"k\x03\x02\x02\x02\bo\x03\x02\x02\x02\nq\x03\x02\x02\x02\fx\x03\x02\x02" +
		"\x02\x0E\x88\x03\x02\x02\x02\x10\x8D\x03\x02\x02\x02\x12\x9A\x03\x02\x02" +
		"\x02\x14\xA0\x03\x02\x02\x02\x16\xA7\x03\x02\x02\x02\x18\xAF\x03\x02\x02" +
		"\x02\x1A\xB5\x03\x02\x02\x02\x1C\xB8\x03\x02\x02\x02\x1E\xC3\x03\x02\x02" +
		"\x02 \xCB\x03\x02\x02\x02\"\xD3\x03\x02\x02\x02$\xD8\x03\x02\x02\x02&" +
		"\xDC\x03\x02\x02\x02(\xE4\x03\x02\x02\x02*\xEC\x03\x02\x02\x02,\xF2\x03" +
		"\x02\x02\x02.\xF9\x03\x02\x02\x020\xFF\x03\x02\x02\x022\u0101\x03\x02" +
		"\x02\x024\u010D\x03\x02\x02\x026\u0110\x03\x02\x02\x028\u0117\x03\x02" +
		"\x02\x02:\u01E3\x03\x02\x02\x02<\u01F2\x03\x02\x02\x02>\u01F9\x03\x02" +
		"\x02\x02@\u01FB\x03\x02\x02\x02B\u0211\x03\x02\x02\x02D\u0213\x03\x02" +
		"\x02\x02F\u021A\x03\x02\x02\x02H\u021E\x03\x02\x02\x02J\u0220\x03\x02" +
		"\x02\x02L\u0222\x03\x02\x02\x02N\u0224\x03\x02\x02\x02P\u0228\x03\x02" +
		"\x02\x02R\u022C\x03\x02\x02\x02T\u022E\x03\x02\x02\x02VW\x05\x04\x03\x02" +
		"WX\x07\x02\x02\x03X\x03\x03\x02\x02\x02YZ\x052\x1A\x02Z[\x07*\x02\x02" +
		"[^\x05\x06\x04\x02\\]\x07=\x02\x02]_\x05,\x17\x02^\\\x03\x02\x02\x02^" +
		"_\x03\x02\x02\x02_b\x03\x02\x02\x02`a\x07>\x02\x02ac\x05.\x18\x02b`\x03" +
		"\x02\x02\x02bc\x03\x02\x02\x02c\x05\x03\x02\x02\x02de\x07;\x02\x02ef\x05" +
		"\x10\t\x02fg\x05\x1A\x0E\x02gl\x03\x02\x02\x02hl\x05\x1C\x0F\x02il\x05" +
		" \x11\x02jl\x05\"\x12\x02kd\x03\x02\x02\x02kh\x03\x02\x02\x02ki\x03\x02" +
		"\x02\x02kj\x03\x02\x02\x02l\x07\x03\x02\x02\x02mp\x05\x04\x03\x02np\x05" +
		"\f\x07\x02om\x03\x02\x02\x02on\x03\x02\x02\x02p\t\x03\x02\x02\x02qr\x05" +
		"2\x1A\x02rs\x07*\x02\x02sv\x05\x06\x04\x02tu\x07=\x02\x02uw\x05,\x17\x02" +
		"vt\x03\x02\x02\x02vw\x03\x02\x02\x02w\v\x03\x02\x02\x02x{\x05\x0E\b\x02" +
		"yz\x07=\x02\x02z|\x05,\x17\x02{y\x03\x02\x02\x02{|\x03\x02\x02\x02|\x7F" +
		"\x03\x02\x02\x02}~\x07>\x02\x02~\x80\x05.\x18\x02\x7F}\x03\x02\x02\x02" +
		"\x7F\x80\x03\x02\x02\x02\x80\r\x03\x02\x02\x02\x81\x82\x07;\x02\x02\x82" +
		"\x83\x05\x10\t\x02\x83\x84\x05\x1A\x0E\x02\x84\x89\x03\x02\x02\x02\x85" +
		"\x89\x05\x1C\x0F\x02\x86\x89\x05\x1E\x10\x02\x87\x89\x05\"\x12\x02\x88" +
		"\x81\x03\x02\x02\x02\x88\x85\x03\x02\x02\x02\x88\x86\x03\x02\x02\x02\x88" +
		"\x87\x03\x02\x02\x02\x89\x0F\x03\x02\x02\x02\x8A\x8B\x05\x12\n\x02\x8B" +
		"\x8C\x07A\x02\x02\x8C\x8E\x03\x02\x02\x02\x8D\x8A\x03\x02\x02\x02\x8D" +
		"\x8E\x03\x02\x02\x02\x8E\x8F\x03\x02\x02\x02\x8F\x92\x05\x14\v\x02\x90" +
		"\x91\x07*\x02\x02\x91\x93\x054\x1B\x02\x92\x90\x03\x02\x02\x02\x92\x93" +
		"\x03\x02\x02\x02\x93\x11\x03\x02\x02\x02\x94\x99\x050\x19\x02\x95\x99" +
		"\x05D#\x02\x96\x99\x05L\'\x02\x97\x99\x07*\x02\x02\x98\x94\x03\x02\x02" +
		"\x02\x98\x95\x03\x02\x02\x02\x98\x96\x03\x02\x02\x02\x98\x97\x03\x02\x02" +
		"\x02\x99\x9C\x03\x02\x02\x02\x9A\x98\x03\x02\x02\x02\x9A\x9B\x03\x02\x02" +
		"\x02\x9B\x13\x03\x02\x02\x02\x9C\x9A\x03\x02\x02\x02\x9D\xA1\x056\x1C" +
		"\x02\x9E\xA1\x05@!\x02\x9F\xA1\x05\x16\f\x02\xA0\x9D\x03\x02\x02\x02\xA0" +
		"\x9E\x03\x02\x02\x02\xA0\x9F\x03\x02\x02\x02\xA1\x15\x03\x02\x02\x02\xA2" +
		"\xA6\x050\x19\x02\xA3\xA6\x05D#\x02\xA4\xA6\x05L\'\x02\xA5\xA2\x03\x02" +
		"\x02\x02\xA5\xA3\x03\x02\x02\x02\xA5\xA4\x03\x02\x02\x02\xA6\xA9\x03\x02" +
		"\x02\x02\xA7\xA5\x03\x02\x02\x02\xA7\xA8\x03\x02\x02\x02\xA8\x17\x03\x02" +
		"\x02\x02\xA9\xA7\x03\x02\x02\x02\xAA\xB0\x05\x1A\x0E\x02\xAB\xB0\x05\x1C" +
		"\x0F\x02\xAC\xB0\x05\x1E\x10\x02\xAD\xB0\x05 \x11\x02\xAE\xB0\x05\"\x12" +
		"\x02\xAF\xAA\x03\x02\x02\x02\xAF\xAB\x03\x02\x02\x02\xAF\xAC\x03\x02\x02" +
		"\x02\xAF\xAD\x03\x02\x02\x02\xAF\xAE\x03\x02\x02\x02\xB0\x19\x03\x02\x02" +
		"\x02\xB1\xB2\x07<\x02\x02\xB2\xB4\x05$\x13\x02\xB3\xB1\x03\x02\x02\x02" +
		"\xB4\xB7\x03\x02\x02\x02\xB5\xB3\x03\x02\x02\x02\xB5\xB6\x03\x02\x02\x02" +
		"\xB6\x1B\x03\x02\x02\x02\xB7\xB5\x03\x02\x02\x02\xB8\xC1\x07<\x02\x02" +
		"\xB9\xBE\x05&\x14\x02\xBA\xBB\x07<\x02\x02\xBB\xBD\x05$\x13\x02\xBC\xBA" +
		"\x03\x02\x02\x02\xBD\xC0\x03\x02\x02\x02\xBE\xBC\x03\x02\x02\x02\xBE\xBF" +
		"\x03\x02\x02\x02\xBF\xC2\x03\x02\x02\x02\xC0\xBE\x03\x02\x02\x02\xC1\xB9" +
		"\x03\x02\x02\x02\xC1\xC2\x03\x02\x02\x02\xC2\x1D\x03\x02\x02\x02\xC3\xC8" +
		"\x05(\x15\x02\xC4\xC5\x07<\x02\x02\xC5\xC7\x05$\x13\x02\xC6\xC4\x03\x02" +
		"\x02\x02\xC7\xCA\x03\x02\x02\x02\xC8\xC6\x03\x02\x02\x02\xC8\xC9\x03\x02" +
		"\x02\x02\xC9\x1F\x03\x02\x02\x02\xCA\xC8\x03\x02\x02\x02\xCB\xD0\x05&" +
		"\x14\x02\xCC\xCD\x07<\x02\x02\xCD\xCF\x05$\x13\x02\xCE\xCC\x03\x02\x02" +
		"\x02\xCF\xD2\x03\x02\x02\x02\xD0\xCE\x03\x02\x02\x02\xD0\xD1\x03\x02\x02" +
		"\x02\xD1!\x03\x02\x02\x02\xD2\xD0\x03\x02\x02\x02\xD3\xD4\x03\x02\x02" +
		"\x02\xD4#\x03\x02\x02\x02\xD5\xD7\x05*\x16\x02\xD6\xD5\x03\x02\x02\x02" +
		"\xD7\xDA\x03\x02\x02\x02\xD8\xD6\x03\x02\x02\x02\xD8\xD9\x03\x02\x02\x02" +
		"\xD9%\x03\x02\x02\x02\xDA\xD8\x03\x02\x02\x02\xDB\xDD\x05*\x16\x02\xDC" +
		"\xDB\x03\x02\x02\x02\xDD\xDE\x03\x02\x02\x02\xDE\xDC\x03\x02\x02\x02\xDE" +
		"\xDF\x03\x02\x02\x02\xDF\'\x03\x02\x02\x02\xE0\xE5\x050\x19\x02\xE1\xE5" +
		"\x05D#\x02\xE2\xE5\x05L\'\x02\xE3\xE5\x07A\x02\x02\xE4\xE0\x03\x02\x02" +
		"\x02\xE4\xE1\x03\x02\x02\x02\xE4\xE2\x03\x02\x02\x02\xE4\xE3\x03\x02\x02" +
		"\x02\xE5\xE6\x03\x02\x02\x02\xE6\xE4\x03\x02\x02\x02\xE6\xE7\x03\x02\x02" +
		"\x02\xE7)\x03\x02\x02\x02\xE8\xED\x050\x19\x02\xE9\xED\x05D#\x02\xEA\xED" +
		"\x05L\'\x02\xEB\xED\t\x02\x02\x02\xEC\xE8\x03\x02\x02\x02\xEC\xE9\x03" +
		"\x02\x02\x02\xEC\xEA\x03\x02\x02\x02\xEC\xEB\x03\x02\x02\x02\xED+\x03" +
		"\x02\x02\x02\xEE\xF1\x05*\x16\x02\xEF\xF1\t\x03\x02\x02\xF0\xEE\x03\x02" +
		"\x02\x02\xF0\xEF\x03\x02\x02\x02\xF1\xF4\x03\x02\x02\x02\xF2\xF0\x03\x02" +
		"\x02\x02\xF2\xF3\x03\x02\x02\x02\xF3-\x03\x02\x02\x02\xF4\xF2\x03\x02" +
		"\x02\x02\xF5\xF8\x05*\x16\x02\xF6\xF8\t\x04\x02\x02\xF7\xF5\x03\x02\x02" +
		"\x02\xF7\xF6\x03\x02\x02\x02\xF8\xFB\x03\x02\x02\x02\xF9\xF7\x03\x02\x02" +
		"\x02\xF9\xFA\x03\x02\x02\x02\xFA/\x03\x02\x02\x02\xFB\xF9\x03\x02\x02" +
		"\x02\xFC\u0100\x05N(\x02\xFD\u0100\x05R*\x02\xFE\u0100\t\x05\x02\x02\xFF" +
		"\xFC\x03\x02\x02\x02\xFF\xFD\x03\x02\x02\x02\xFF\xFE\x03\x02\x02\x02\u0100" +
		"1\x03\x02\x02\x02\u0101\u0107\x05N(\x02\u0102\u0106\x05N(\x02\u0103\u0106" +
		"\x05R*\x02\u0104\u0106\t\x06\x02\x02\u0105\u0102\x03\x02\x02\x02\u0105" +
		"\u0103\x03\x02\x02\x02\u0105\u0104\x03\x02\x02\x02\u0106\u0109\x03\x02" +
		"\x02\x02\u0107\u0105\x03\x02\x02\x02\u0107\u0108\x03\x02\x02\x02\u0108" +
		"3\x03\x02\x02\x02\u0109\u0107\x03\x02\x02\x02\u010A\u010C\x05R*\x02\u010B" +
		"\u010A\x03\x02\x02\x02\u010C\u010F\x03\x02\x02\x02\u010D\u010B\x03\x02" +
		"\x02\x02\u010D\u010E\x03\x02\x02\x02\u010E5\x03\x02\x02\x02\u010F\u010D" +
		"\x03\x02\x02\x02\u0110\u0113\x07?\x02\x02\u0111\u0114\x05:\x1E\x02\u0112" +
		"\u0114\x058\x1D\x02\u0113\u0111\x03\x02\x02\x02\u0113\u0112\x03\x02\x02" +
		"\x02\u0114\u0115\x03\x02\x02\x02\u0115\u0116\x07@\x02\x02\u01167\x03\x02" +
		"\x02\x02\u0117\u0119\x07$\x02\x02\u0118\u011A\x05P)\x02\u0119\u0118\x03" +
		"\x02\x02\x02\u011A\u011B\x03\x02\x02\x02\u011B\u0119\x03\x02\x02\x02\u011B" +
		"\u011C\x03\x02\x02\x02\u011C\u011D\x03\x02\x02\x02\u011D\u0121\x07+\x02" +
		"\x02\u011E\u0122\x05F$\x02\u011F\u0122\x05L\'\x02\u0120\u0122\x07*\x02" +
		"\x02\u0121\u011E\x03\x02\x02\x02\u0121\u011F\x03\x02\x02\x02\u0121\u0120" +
		"\x03\x02\x02\x02\u0122\u0123\x03\x02\x02\x02\u0123\u0121\x03\x02\x02\x02" +
		"\u0123\u0124\x03\x02\x02\x02\u01249\x03\x02\x02\x02\u0125\u0126\x05<\x1F" +
		"\x02\u0126\u0127\x07*\x02\x02\u0127\u0128\x05<\x1F\x02\u0128\u0129\x07" +
		"*\x02\x02\u0129\u012A\x05<\x1F\x02\u012A\u012B\x07*\x02\x02\u012B\u012C" +
		"\x05<\x1F\x02\u012C\u012D\x07*\x02\x02\u012D\u012E\x05<\x1F\x02\u012E" +
		"\u012F\x07*\x02\x02\u012F\u0130\x05<\x1F\x02\u0130\u0131\x07*\x02\x02" +
		"\u0131\u0132\x05> \x02\u0132\u01E4\x03\x02\x02\x02\u0133\u0134\x07)\x02" +
		"\x02\u0134\u0135\x05<\x1F\x02\u0135\u0136\x07*\x02\x02\u0136\u0137\x05" +
		"<\x1F\x02\u0137\u0138\x07*\x02\x02\u0138\u0139\x05<\x1F\x02\u0139\u013A" +
		"\x07*\x02\x02\u013A\u013B\x05<\x1F\x02\u013B\u013C\x07*\x02\x02\u013C" +
		"\u013D\x05<\x1F\x02\u013D\u013E\x07*\x02\x02\u013E\u013F\x05> \x02\u013F" +
		"\u01E4\x03\x02\x02\x02\u0140\u0142\x05<\x1F\x02\u0141\u0140\x03\x02\x02" +
		"\x02\u0141\u0142\x03\x02\x02\x02\u0142\u0143\x03\x02\x02\x02\u0143\u0144" +
		"\x07)\x02\x02\u0144\u0145\x05<\x1F\x02\u0145\u0146\x07*\x02\x02\u0146" +
		"\u0147\x05<\x1F\x02\u0147\u0148\x07*\x02\x02\u0148\u0149\x05<\x1F\x02" +
		"\u0149\u014A\x07*\x02\x02\u014A\u014B\x05<\x1F\x02\u014B\u014C\x07*\x02" +
		"\x02\u014C\u014D\x05> \x02\u014D\u01E4\x03\x02\x02\x02\u014E\u014F\x05" +
		"<\x1F\x02\u014F\u0150\x07*\x02\x02\u0150\u0152\x03\x02\x02\x02\u0151\u014E" +
		"\x03\x02\x02\x02\u0151\u0152\x03\x02\x02\x02\u0152\u0153\x03\x02\x02\x02" +
		"\u0153\u0155\x05<\x1F\x02\u0154\u0151\x03\x02\x02\x02\u0154\u0155\x03" +
		"\x02\x02\x02\u0155\u0156\x03\x02\x02\x02\u0156\u0157\x07)\x02\x02\u0157" +
		"\u0158\x05<\x1F\x02\u0158\u0159\x07*\x02\x02\u0159\u015A\x05<\x1F\x02" +
		"\u015A\u015B\x07*\x02\x02\u015B\u015C\x05<\x1F\x02\u015C\u015D\x07*\x02" +
		"\x02\u015D\u015E\x05> \x02\u015E\u01E4\x03\x02\x02\x02\u015F\u0160\x05" +
		"<\x1F\x02\u0160\u0161\x07*\x02\x02\u0161\u0163\x03\x02\x02\x02\u0162\u015F" +
		"\x03\x02\x02\x02\u0162\u0163\x03\x02\x02\x02\u0163\u0164\x03\x02\x02\x02" +
		"\u0164\u0165\x05<\x1F\x02\u0165\u0166\x07*\x02\x02\u0166\u0168\x03\x02" +
		"\x02\x02\u0167\u0162\x03\x02\x02\x02\u0167\u0168\x03\x02\x02\x02\u0168" +
		"\u0169\x03\x02\x02\x02\u0169\u016B\x05<\x1F\x02\u016A\u0167\x03\x02\x02" +
		"\x02\u016A\u016B\x03\x02\x02\x02\u016B\u016C\x03\x02\x02\x02\u016C\u016D" +
		"\x07)\x02\x02\u016D\u016E\x05<\x1F\x02\u016E\u016F\x07*\x02\x02\u016F" +
		"\u0170\x05<\x1F\x02\u0170\u0171\x07*\x02\x02\u0171\u0172\x05> \x02\u0172" +
		"\u01E4\x03\x02\x02\x02\u0173\u0174\x05<\x1F\x02\u0174\u0175\x07*\x02\x02" +
		"\u0175\u0177\x03\x02\x02\x02\u0176\u0173\x03\x02\x02\x02\u0176\u0177\x03" +
		"\x02\x02\x02\u0177\u0178\x03\x02\x02\x02\u0178\u0179\x05<\x1F\x02\u0179" +
		"\u017A\x07*\x02\x02\u017A\u017C\x03\x02\x02\x02\u017B\u0176\x03\x02\x02" +
		"\x02\u017B\u017C\x03\x02\x02\x02\u017C\u017D\x03\x02\x02\x02\u017D\u017E" +
		"\x05<\x1F\x02\u017E\u017F\x07*\x02\x02\u017F\u0181\x03\x02\x02\x02\u0180" +
		"\u017B\x03\x02\x02\x02\u0180\u0181\x03\x02\x02\x02\u0181\u0182\x03\x02" +
		"\x02\x02\u0182\u0184\x05<\x1F\x02\u0183\u0180\x03\x02\x02\x02\u0183\u0184" +
		"\x03\x02\x02\x02\u0184\u0185\x03\x02\x02\x02\u0185\u0186\x07)\x02\x02" +
		"\u0186\u0187\x05<\x1F\x02\u0187\u0188\x07*\x02\x02\u0188\u0189\x05> \x02" +
		"\u0189\u01E4\x03\x02\x02\x02\u018A\u018B\x05<\x1F\x02\u018B\u018C\x07" +
		"*\x02\x02\u018C\u018E\x03\x02\x02\x02\u018D\u018A\x03\x02\x02\x02\u018D" +
		"\u018E\x03\x02\x02\x02\u018E\u018F\x03\x02\x02\x02\u018F\u0190\x05<\x1F" +
		"\x02\u0190\u0191\x07*\x02\x02\u0191\u0193\x03\x02\x02\x02\u0192\u018D" +
		"\x03\x02\x02\x02\u0192\u0193\x03\x02\x02\x02\u0193\u0194\x03\x02\x02\x02" +
		"\u0194\u0195\x05<\x1F\x02\u0195\u0196\x07*\x02\x02\u0196\u0198\x03\x02" +
		"\x02\x02\u0197\u0192\x03\x02\x02\x02\u0197\u0198\x03\x02\x02\x02\u0198" +
		"\u0199\x03\x02\x02\x02\u0199\u019A\x05<\x1F\x02\u019A\u019B\x07*\x02\x02" +
		"\u019B\u019D\x03\x02\x02\x02\u019C\u0197\x03\x02\x02\x02\u019C\u019D\x03" +
		"\x02\x02\x02\u019D\u019E\x03\x02\x02\x02\u019E\u01A0\x05<\x1F\x02\u019F" +
		"\u019C\x03\x02\x02\x02\u019F\u01A0\x03\x02\x02\x02\u01A0\u01A1\x03\x02" +
		"\x02\x02\u01A1\u01A2\x07)\x02\x02\u01A2\u01E4\x05> \x02\u01A3\u01A4\x05" +
		"<\x1F\x02\u01A4\u01A5\x07*\x02\x02\u01A5\u01A7\x03\x02\x02\x02\u01A6\u01A3" +
		"\x03\x02\x02\x02\u01A6\u01A7\x03\x02\x02\x02\u01A7\u01A8\x03\x02\x02\x02" +
		"\u01A8\u01A9\x05<\x1F\x02\u01A9\u01AA\x07*\x02\x02\u01AA\u01AC\x03\x02" +
		"\x02\x02\u01AB\u01A6\x03\x02\x02\x02\u01AB\u01AC\x03\x02\x02\x02\u01AC" +
		"\u01AD\x03\x02\x02\x02\u01AD\u01AE\x05<\x1F\x02\u01AE\u01AF\x07*\x02\x02" +
		"\u01AF\u01B1\x03\x02\x02\x02\u01B0\u01AB\x03\x02\x02\x02\u01B0\u01B1\x03" +
		"\x02\x02\x02\u01B1\u01B2\x03\x02\x02\x02\u01B2\u01B3\x05<\x1F\x02\u01B3" +
		"\u01B4\x07*\x02\x02\u01B4\u01B6\x03\x02\x02\x02\u01B5\u01B0\x03\x02\x02" +
		"\x02\u01B5\u01B6\x03\x02\x02\x02\u01B6\u01B7\x03\x02\x02\x02\u01B7\u01B8" +
		"\x05<\x1F\x02\u01B8\u01B9\x07*\x02\x02\u01B9\u01BB\x03\x02\x02\x02\u01BA" +
		"\u01B5\x03\x02\x02\x02\u01BA\u01BB\x03\x02\x02\x02\u01BB\u01BC\x03\x02" +
		"\x02\x02\u01BC\u01BE\x05<\x1F\x02\u01BD\u01BA\x03\x02\x02\x02\u01BD\u01BE" +
		"\x03\x02\x02\x02\u01BE\u01BF\x03\x02\x02\x02\u01BF\u01C0\x07)\x02\x02" +
		"\u01C0\u01E4\x05<\x1F\x02\u01C1\u01C2\x05<\x1F\x02\u01C2\u01C3\x07*\x02" +
		"\x02\u01C3\u01C5\x03\x02\x02\x02\u01C4\u01C1\x03\x02\x02\x02\u01C4\u01C5" +
		"\x03\x02\x02\x02\u01C5\u01C6\x03\x02\x02\x02\u01C6\u01C7\x05<\x1F\x02" +
		"\u01C7\u01C8\x07*\x02\x02\u01C8\u01CA\x03\x02\x02\x02\u01C9\u01C4\x03" +
		"\x02\x02\x02\u01C9\u01CA\x03\x02\x02\x02\u01CA\u01CB\x03\x02\x02\x02\u01CB" +
		"\u01CC\x05<\x1F\x02\u01CC\u01CD\x07*\x02\x02\u01CD\u01CF\x03\x02\x02\x02" +
		"\u01CE\u01C9\x03\x02\x02\x02\u01CE\u01CF\x03\x02\x02\x02\u01CF\u01D0\x03" +
		"\x02\x02\x02\u01D0\u01D1\x05<\x1F\x02\u01D1\u01D2\x07*\x02\x02\u01D2\u01D4" +
		"\x03\x02\x02\x02\u01D3\u01CE\x03\x02\x02\x02\u01D3\u01D4\x03\x02\x02\x02" +
		"\u01D4\u01D5\x03\x02\x02\x02\u01D5\u01D6\x05<\x1F\x02\u01D6\u01D7\x07" +
		"*\x02\x02\u01D7\u01D9\x03\x02\x02\x02\u01D8\u01D3\x03\x02\x02\x02\u01D8" +
		"\u01D9\x03\x02\x02\x02\u01D9\u01DA\x03\x02\x02\x02\u01DA\u01DB\x05<\x1F" +
		"\x02\u01DB\u01DC\x07*\x02\x02\u01DC\u01DE\x03\x02\x02\x02\u01DD\u01D8" +
		"\x03\x02\x02\x02\u01DD\u01DE\x03\x02\x02\x02\u01DE\u01DF\x03\x02\x02\x02" +
		"\u01DF\u01E1\x05<\x1F\x02\u01E0\u01DD\x03\x02\x02\x02\u01E0\u01E1\x03" +
		"\x02\x02\x02\u01E1\u01E2\x03\x02\x02\x02\u01E2\u01E4\x07)\x02\x02\u01E3" +
		"\u0125\x03\x02\x02\x02\u01E3\u0133\x03\x02\x02\x02\u01E3\u0141\x03\x02" +
		"\x02\x02\u01E3\u0154\x03\x02\x02\x02\u01E3\u016A\x03\x02\x02\x02\u01E3" +
		"\u0183\x03\x02\x02\x02\u01E3\u019F\x03\x02\x02\x02\u01E3\u01BD\x03\x02" +
		"\x02\x02\u01E3\u01E0\x03\x02\x02\x02\u01E4;\x03\x02\x02\x02\u01E5\u01E6" +
		"\x05P)\x02\u01E6\u01E7\x05P)\x02\u01E7\u01E8\x05P)\x02\u01E8\u01E9\x05" +
		"P)\x02\u01E9\u01F3\x03\x02\x02\x02\u01EA\u01EB\x05P)\x02\u01EB\u01EC\x05" +
		"P)\x02\u01EC\u01ED\x05P)\x02\u01ED\u01F3\x03\x02\x02\x02\u01EE\u01EF\x05" +
		"P)\x02\u01EF\u01F0\x05P)\x02\u01F0\u01F3\x03\x02\x02\x02\u01F1\u01F3\x05" +
		"P)\x02\u01F2\u01E5\x03\x02\x02\x02\u01F2\u01EA\x03\x02\x02\x02\u01F2\u01EE" +
		"\x03\x02\x02\x02\u01F2\u01F1\x03\x02\x02\x02\u01F3=\x03\x02\x02\x02\u01F4" +
		"\u01F5\x05<\x1F\x02\u01F5\u01F6\x07*\x02\x02\u01F6\u01F7\x05<\x1F\x02" +
		"\u01F7\u01FA\x03\x02\x02\x02\u01F8\u01FA\x05@!\x02\u01F9\u01F4\x03\x02" +
		"\x02\x02\u01F9\u01F8\x03\x02\x02\x02\u01FA?\x03\x02\x02\x02\u01FB\u01FC" +
		"\x05B\"\x02\u01FC\u01FD\x07+\x02\x02\u01FD\u01FE\x05B\"\x02\u01FE\u01FF" +
		"\x07+\x02\x02\u01FF\u0200\x05B\"\x02\u0200\u0201\x07+\x02\x02\u0201\u0202" +
		"\x05B\"\x02\u0202A\x03\x02\x02\x02\u0203\u0212\x05R*\x02\u0204\u0205\x05" +
		"T+\x02\u0205\u0206\x05R*\x02\u0206\u0212\x03\x02\x02\x02\u0207\u0208\x07" +
		"\x06\x02\x02\u0208\u0209\x05R*\x02\u0209\u020A\x05R*\x02\u020A\u0212\x03" +
		"\x02\x02\x02\u020B\u020C\x07\x07\x02\x02\u020C\u020D\t\x07\x02\x02\u020D" +
		"\u0212\x05R*\x02\u020E\u020F\x07\x07\x02\x02\u020F\u0210\x07\n\x02\x02" +
		"\u0210\u0212\t\b\x02\x02\u0211\u0203\x03\x02\x02\x02\u0211\u0204\x03\x02" +
		"\x02\x02\u0211\u0207\x03\x02\x02\x02\u0211\u020B\x03\x02\x02\x02\u0211" +
		"\u020E\x03\x02\x02\x02\u0212C\x03\x02\x02\x02\u0213\u0214\x07,\x02\x02" +
		"\u0214\u0215\x05P)\x02\u0215\u0216\x05P)\x02\u0216E\x03\x02\x02\x02\u0217" +
		"\u021B\x05N(\x02\u0218\u021B\x05R*\x02\u0219\u021B\t\t\x02\x02\u021A\u0217" +
		"\x03\x02\x02\x02\u021A\u0218\x03\x02\x02\x02\u021A\u0219\x03\x02\x02\x02" +
		"\u021BG\x03\x02\x02\x02\u021C\u021F\x05J&\x02\u021D\u021F\x05L\'\x02\u021E" +
		"\u021C\x03\x02\x02\x02\u021E\u021D\x03\x02\x02\x02\u021FI\x03\x02\x02" +
		"\x02\u0220\u0221\t\n\x02\x02\u0221K\x03\x02";
	private static readonly _serializedATNSegment1: string =
		"\x02\x02\u0222\u0223\t\v\x02\x02\u0223M\x03\x02\x02\x02\u0224\u0225\t" +
		"\f\x02\x02\u0225O\x03\x02\x02\x02\u0226\u0229\x05R*\x02\u0227\u0229\t" +
		"\r\x02\x02\u0228\u0226\x03\x02\x02\x02\u0228\u0227\x03\x02\x02\x02\u0229" +
		"Q\x03\x02\x02\x02\u022A\u022D\x07\x05\x02\x02\u022B\u022D\x05T+\x02\u022C" +
		"\u022A\x03\x02\x02\x02\u022C\u022B\x03\x02\x02\x02\u022DS\x03\x02\x02" +
		"\x02\u022E\u022F\t\x0E\x02\x02\u022FU\x03\x02\x02\x02L^bkov{\x7F\x88\x8D" +
		"\x92\x98\x9A\xA0\xA5\xA7\xAF\xB5\xBE\xC1\xC8\xD0\xD8\xDE\xE4\xE6\xEC\xF0" +
		"\xF2\xF7\xF9\xFF\u0105\u0107\u010D\u0113\u011B\u0121\u0123\u0141\u0151" +
		"\u0154\u0162\u0167\u016A\u0176\u017B\u0180\u0183\u018D\u0192\u0197\u019C" +
		"\u019F\u01A6\u01AB\u01B0\u01B5\u01BA\u01BD\u01C4\u01C9\u01CE\u01D3\u01D8" +
		"\u01DD\u01E0\u01E3\u01F2\u01F9\u0211\u021A\u021E\u0228\u022C";
	public static readonly _serializedATN: string = Utils.join(
		[
			IRIParser._serializedATNSegment0,
			IRIParser._serializedATNSegment1,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!IRIParser.__ATN) {
			IRIParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(IRIParser._serializedATN));
		}

		return IRIParser.__ATN;
	}

}

export class ParseContext extends ParserRuleContext {
	public iri(): IriContext {
		return this.getRuleContext(0, IriContext);
	}
	public EOF(): TerminalNode { return this.getToken(IRIParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IRIParser.RULE_parse; }
	// @Override
	public enterRule(listener: IRIListener): void {
		if (listener.enterParse) {
			listener.enterParse(this);
		}
	}
	// @Override
	public exitRule(listener: IRIListener): void {
		if (listener.exitParse) {
			listener.exitParse(this);
		}
	}
}


export class IriContext extends ParserRuleContext {
	public scheme(): SchemeContext {
		return this.getRuleContext(0, SchemeContext);
	}
	public COL(): TerminalNode { return this.getToken(IRIParser.COL, 0); }
	public ihier_part(): Ihier_partContext {
		return this.getRuleContext(0, Ihier_partContext);
	}
	public QMARK(): TerminalNode | undefined { return this.tryGetToken(IRIParser.QMARK, 0); }
	public iquery(): IqueryContext | undefined {
		return this.tryGetRuleContext(0, IqueryContext);
	}
	public HASH(): TerminalNode | undefined { return this.tryGetToken(IRIParser.HASH, 0); }
	public ifragment(): IfragmentContext | undefined {
		return this.tryGetRuleContext(0, IfragmentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IRIParser.RULE_iri; }
	// @Override
	public enterRule(listener: IRIListener): void {
		if (listener.enterIri) {
			listener.enterIri(this);
		}
	}
	// @Override
	public exitRule(listener: IRIListener): void {
		if (listener.exitIri) {
			listener.exitIri(this);
		}
	}
}


export class Ihier_partContext extends ParserRuleContext {
	public FSLASH2(): TerminalNode | undefined { return this.tryGetToken(IRIParser.FSLASH2, 0); }
	public iauthority(): IauthorityContext | undefined {
		return this.tryGetRuleContext(0, IauthorityContext);
	}
	public ipath_abempty(): Ipath_abemptyContext | undefined {
		return this.tryGetRuleContext(0, Ipath_abemptyContext);
	}
	public ipath_absolute(): Ipath_absoluteContext | undefined {
		return this.tryGetRuleContext(0, Ipath_absoluteContext);
	}
	public ipath_rootless(): Ipath_rootlessContext | undefined {
		return this.tryGetRuleContext(0, Ipath_rootlessContext);
	}
	public ipath_empty(): Ipath_emptyContext | undefined {
		return this.tryGetRuleContext(0, Ipath_emptyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IRIParser.RULE_ihier_part; }
	// @Override
	public enterRule(listener: IRIListener): void {
		if (listener.enterIhier_part) {
			listener.enterIhier_part(this);
		}
	}
	// @Override
	public exitRule(listener: IRIListener): void {
		if (listener.exitIhier_part) {
			listener.exitIhier_part(this);
		}
	}
}


export class Iri_referenceContext extends ParserRuleContext {
	public iri(): IriContext | undefined {
		return this.tryGetRuleContext(0, IriContext);
	}
	public irelative_ref(): Irelative_refContext | undefined {
		return this.tryGetRuleContext(0, Irelative_refContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IRIParser.RULE_iri_reference; }
	// @Override
	public enterRule(listener: IRIListener): void {
		if (listener.enterIri_reference) {
			listener.enterIri_reference(this);
		}
	}
	// @Override
	public exitRule(listener: IRIListener): void {
		if (listener.exitIri_reference) {
			listener.exitIri_reference(this);
		}
	}
}


export class Absolute_iriContext extends ParserRuleContext {
	public scheme(): SchemeContext {
		return this.getRuleContext(0, SchemeContext);
	}
	public COL(): TerminalNode { return this.getToken(IRIParser.COL, 0); }
	public ihier_part(): Ihier_partContext {
		return this.getRuleContext(0, Ihier_partContext);
	}
	public QMARK(): TerminalNode | undefined { return this.tryGetToken(IRIParser.QMARK, 0); }
	public iquery(): IqueryContext | undefined {
		return this.tryGetRuleContext(0, IqueryContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IRIParser.RULE_absolute_iri; }
	// @Override
	public enterRule(listener: IRIListener): void {
		if (listener.enterAbsolute_iri) {
			listener.enterAbsolute_iri(this);
		}
	}
	// @Override
	public exitRule(listener: IRIListener): void {
		if (listener.exitAbsolute_iri) {
			listener.exitAbsolute_iri(this);
		}
	}
}


export class Irelative_refContext extends ParserRuleContext {
	public irelative_part(): Irelative_partContext {
		return this.getRuleContext(0, Irelative_partContext);
	}
	public QMARK(): TerminalNode | undefined { return this.tryGetToken(IRIParser.QMARK, 0); }
	public iquery(): IqueryContext | undefined {
		return this.tryGetRuleContext(0, IqueryContext);
	}
	public HASH(): TerminalNode | undefined { return this.tryGetToken(IRIParser.HASH, 0); }
	public ifragment(): IfragmentContext | undefined {
		return this.tryGetRuleContext(0, IfragmentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IRIParser.RULE_irelative_ref; }
	// @Override
	public enterRule(listener: IRIListener): void {
		if (listener.enterIrelative_ref) {
			listener.enterIrelative_ref(this);
		}
	}
	// @Override
	public exitRule(listener: IRIListener): void {
		if (listener.exitIrelative_ref) {
			listener.exitIrelative_ref(this);
		}
	}
}


export class Irelative_partContext extends ParserRuleContext {
	public FSLASH2(): TerminalNode | undefined { return this.tryGetToken(IRIParser.FSLASH2, 0); }
	public iauthority(): IauthorityContext | undefined {
		return this.tryGetRuleContext(0, IauthorityContext);
	}
	public ipath_abempty(): Ipath_abemptyContext | undefined {
		return this.tryGetRuleContext(0, Ipath_abemptyContext);
	}
	public ipath_absolute(): Ipath_absoluteContext | undefined {
		return this.tryGetRuleContext(0, Ipath_absoluteContext);
	}
	public ipath_noscheme(): Ipath_noschemeContext | undefined {
		return this.tryGetRuleContext(0, Ipath_noschemeContext);
	}
	public ipath_empty(): Ipath_emptyContext | undefined {
		return this.tryGetRuleContext(0, Ipath_emptyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IRIParser.RULE_irelative_part; }
	// @Override
	public enterRule(listener: IRIListener): void {
		if (listener.enterIrelative_part) {
			listener.enterIrelative_part(this);
		}
	}
	// @Override
	public exitRule(listener: IRIListener): void {
		if (listener.exitIrelative_part) {
			listener.exitIrelative_part(this);
		}
	}
}


export class IauthorityContext extends ParserRuleContext {
	public ihost(): IhostContext {
		return this.getRuleContext(0, IhostContext);
	}
	public iuserinfo(): IuserinfoContext | undefined {
		return this.tryGetRuleContext(0, IuserinfoContext);
	}
	public AT(): TerminalNode | undefined { return this.tryGetToken(IRIParser.AT, 0); }
	public COL(): TerminalNode | undefined { return this.tryGetToken(IRIParser.COL, 0); }
	public port(): PortContext | undefined {
		return this.tryGetRuleContext(0, PortContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IRIParser.RULE_iauthority; }
	// @Override
	public enterRule(listener: IRIListener): void {
		if (listener.enterIauthority) {
			listener.enterIauthority(this);
		}
	}
	// @Override
	public exitRule(listener: IRIListener): void {
		if (listener.exitIauthority) {
			listener.exitIauthority(this);
		}
	}
}


export class IuserinfoContext extends ParserRuleContext {
	public iunreserved(): IunreservedContext[];
	public iunreserved(i: number): IunreservedContext;
	public iunreserved(i?: number): IunreservedContext | IunreservedContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IunreservedContext);
		} else {
			return this.getRuleContext(i, IunreservedContext);
		}
	}
	public pct_encoded(): Pct_encodedContext[];
	public pct_encoded(i: number): Pct_encodedContext;
	public pct_encoded(i?: number): Pct_encodedContext | Pct_encodedContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Pct_encodedContext);
		} else {
			return this.getRuleContext(i, Pct_encodedContext);
		}
	}
	public sub_delims(): Sub_delimsContext[];
	public sub_delims(i: number): Sub_delimsContext;
	public sub_delims(i?: number): Sub_delimsContext | Sub_delimsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Sub_delimsContext);
		} else {
			return this.getRuleContext(i, Sub_delimsContext);
		}
	}
	public COL(): TerminalNode[];
	public COL(i: number): TerminalNode;
	public COL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(IRIParser.COL);
		} else {
			return this.getToken(IRIParser.COL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IRIParser.RULE_iuserinfo; }
	// @Override
	public enterRule(listener: IRIListener): void {
		if (listener.enterIuserinfo) {
			listener.enterIuserinfo(this);
		}
	}
	// @Override
	public exitRule(listener: IRIListener): void {
		if (listener.exitIuserinfo) {
			listener.exitIuserinfo(this);
		}
	}
}


export class IhostContext extends ParserRuleContext {
	public ip_literal(): Ip_literalContext | undefined {
		return this.tryGetRuleContext(0, Ip_literalContext);
	}
	public ip_v4_address(): Ip_v4_addressContext | undefined {
		return this.tryGetRuleContext(0, Ip_v4_addressContext);
	}
	public ireg_name(): Ireg_nameContext | undefined {
		return this.tryGetRuleContext(0, Ireg_nameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IRIParser.RULE_ihost; }
	// @Override
	public enterRule(listener: IRIListener): void {
		if (listener.enterIhost) {
			listener.enterIhost(this);
		}
	}
	// @Override
	public exitRule(listener: IRIListener): void {
		if (listener.exitIhost) {
			listener.exitIhost(this);
		}
	}
}


export class Ireg_nameContext extends ParserRuleContext {
	public iunreserved(): IunreservedContext[];
	public iunreserved(i: number): IunreservedContext;
	public iunreserved(i?: number): IunreservedContext | IunreservedContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IunreservedContext);
		} else {
			return this.getRuleContext(i, IunreservedContext);
		}
	}
	public pct_encoded(): Pct_encodedContext[];
	public pct_encoded(i: number): Pct_encodedContext;
	public pct_encoded(i?: number): Pct_encodedContext | Pct_encodedContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Pct_encodedContext);
		} else {
			return this.getRuleContext(i, Pct_encodedContext);
		}
	}
	public sub_delims(): Sub_delimsContext[];
	public sub_delims(i: number): Sub_delimsContext;
	public sub_delims(i?: number): Sub_delimsContext | Sub_delimsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Sub_delimsContext);
		} else {
			return this.getRuleContext(i, Sub_delimsContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IRIParser.RULE_ireg_name; }
	// @Override
	public enterRule(listener: IRIListener): void {
		if (listener.enterIreg_name) {
			listener.enterIreg_name(this);
		}
	}
	// @Override
	public exitRule(listener: IRIListener): void {
		if (listener.exitIreg_name) {
			listener.exitIreg_name(this);
		}
	}
}


export class IpathContext extends ParserRuleContext {
	public ipath_abempty(): Ipath_abemptyContext | undefined {
		return this.tryGetRuleContext(0, Ipath_abemptyContext);
	}
	public ipath_absolute(): Ipath_absoluteContext | undefined {
		return this.tryGetRuleContext(0, Ipath_absoluteContext);
	}
	public ipath_noscheme(): Ipath_noschemeContext | undefined {
		return this.tryGetRuleContext(0, Ipath_noschemeContext);
	}
	public ipath_rootless(): Ipath_rootlessContext | undefined {
		return this.tryGetRuleContext(0, Ipath_rootlessContext);
	}
	public ipath_empty(): Ipath_emptyContext | undefined {
		return this.tryGetRuleContext(0, Ipath_emptyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IRIParser.RULE_ipath; }
	// @Override
	public enterRule(listener: IRIListener): void {
		if (listener.enterIpath) {
			listener.enterIpath(this);
		}
	}
	// @Override
	public exitRule(listener: IRIListener): void {
		if (listener.exitIpath) {
			listener.exitIpath(this);
		}
	}
}


export class Ipath_abemptyContext extends ParserRuleContext {
	public FSLASH(): TerminalNode[];
	public FSLASH(i: number): TerminalNode;
	public FSLASH(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(IRIParser.FSLASH);
		} else {
			return this.getToken(IRIParser.FSLASH, i);
		}
	}
	public isegment(): IsegmentContext[];
	public isegment(i: number): IsegmentContext;
	public isegment(i?: number): IsegmentContext | IsegmentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IsegmentContext);
		} else {
			return this.getRuleContext(i, IsegmentContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IRIParser.RULE_ipath_abempty; }
	// @Override
	public enterRule(listener: IRIListener): void {
		if (listener.enterIpath_abempty) {
			listener.enterIpath_abempty(this);
		}
	}
	// @Override
	public exitRule(listener: IRIListener): void {
		if (listener.exitIpath_abempty) {
			listener.exitIpath_abempty(this);
		}
	}
}


export class Ipath_absoluteContext extends ParserRuleContext {
	public FSLASH(): TerminalNode[];
	public FSLASH(i: number): TerminalNode;
	public FSLASH(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(IRIParser.FSLASH);
		} else {
			return this.getToken(IRIParser.FSLASH, i);
		}
	}
	public isegment_nz(): Isegment_nzContext | undefined {
		return this.tryGetRuleContext(0, Isegment_nzContext);
	}
	public isegment(): IsegmentContext[];
	public isegment(i: number): IsegmentContext;
	public isegment(i?: number): IsegmentContext | IsegmentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IsegmentContext);
		} else {
			return this.getRuleContext(i, IsegmentContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IRIParser.RULE_ipath_absolute; }
	// @Override
	public enterRule(listener: IRIListener): void {
		if (listener.enterIpath_absolute) {
			listener.enterIpath_absolute(this);
		}
	}
	// @Override
	public exitRule(listener: IRIListener): void {
		if (listener.exitIpath_absolute) {
			listener.exitIpath_absolute(this);
		}
	}
}


export class Ipath_noschemeContext extends ParserRuleContext {
	public isegment_nz_nc(): Isegment_nz_ncContext {
		return this.getRuleContext(0, Isegment_nz_ncContext);
	}
	public FSLASH(): TerminalNode[];
	public FSLASH(i: number): TerminalNode;
	public FSLASH(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(IRIParser.FSLASH);
		} else {
			return this.getToken(IRIParser.FSLASH, i);
		}
	}
	public isegment(): IsegmentContext[];
	public isegment(i: number): IsegmentContext;
	public isegment(i?: number): IsegmentContext | IsegmentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IsegmentContext);
		} else {
			return this.getRuleContext(i, IsegmentContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IRIParser.RULE_ipath_noscheme; }
	// @Override
	public enterRule(listener: IRIListener): void {
		if (listener.enterIpath_noscheme) {
			listener.enterIpath_noscheme(this);
		}
	}
	// @Override
	public exitRule(listener: IRIListener): void {
		if (listener.exitIpath_noscheme) {
			listener.exitIpath_noscheme(this);
		}
	}
}


export class Ipath_rootlessContext extends ParserRuleContext {
	public isegment_nz(): Isegment_nzContext {
		return this.getRuleContext(0, Isegment_nzContext);
	}
	public FSLASH(): TerminalNode[];
	public FSLASH(i: number): TerminalNode;
	public FSLASH(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(IRIParser.FSLASH);
		} else {
			return this.getToken(IRIParser.FSLASH, i);
		}
	}
	public isegment(): IsegmentContext[];
	public isegment(i: number): IsegmentContext;
	public isegment(i?: number): IsegmentContext | IsegmentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IsegmentContext);
		} else {
			return this.getRuleContext(i, IsegmentContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IRIParser.RULE_ipath_rootless; }
	// @Override
	public enterRule(listener: IRIListener): void {
		if (listener.enterIpath_rootless) {
			listener.enterIpath_rootless(this);
		}
	}
	// @Override
	public exitRule(listener: IRIListener): void {
		if (listener.exitIpath_rootless) {
			listener.exitIpath_rootless(this);
		}
	}
}


export class Ipath_emptyContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IRIParser.RULE_ipath_empty; }
	// @Override
	public enterRule(listener: IRIListener): void {
		if (listener.enterIpath_empty) {
			listener.enterIpath_empty(this);
		}
	}
	// @Override
	public exitRule(listener: IRIListener): void {
		if (listener.exitIpath_empty) {
			listener.exitIpath_empty(this);
		}
	}
}


export class IsegmentContext extends ParserRuleContext {
	public ipchar(): IpcharContext[];
	public ipchar(i: number): IpcharContext;
	public ipchar(i?: number): IpcharContext | IpcharContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IpcharContext);
		} else {
			return this.getRuleContext(i, IpcharContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IRIParser.RULE_isegment; }
	// @Override
	public enterRule(listener: IRIListener): void {
		if (listener.enterIsegment) {
			listener.enterIsegment(this);
		}
	}
	// @Override
	public exitRule(listener: IRIListener): void {
		if (listener.exitIsegment) {
			listener.exitIsegment(this);
		}
	}
}


export class Isegment_nzContext extends ParserRuleContext {
	public ipchar(): IpcharContext[];
	public ipchar(i: number): IpcharContext;
	public ipchar(i?: number): IpcharContext | IpcharContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IpcharContext);
		} else {
			return this.getRuleContext(i, IpcharContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IRIParser.RULE_isegment_nz; }
	// @Override
	public enterRule(listener: IRIListener): void {
		if (listener.enterIsegment_nz) {
			listener.enterIsegment_nz(this);
		}
	}
	// @Override
	public exitRule(listener: IRIListener): void {
		if (listener.exitIsegment_nz) {
			listener.exitIsegment_nz(this);
		}
	}
}


export class Isegment_nz_ncContext extends ParserRuleContext {
	public iunreserved(): IunreservedContext[];
	public iunreserved(i: number): IunreservedContext;
	public iunreserved(i?: number): IunreservedContext | IunreservedContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IunreservedContext);
		} else {
			return this.getRuleContext(i, IunreservedContext);
		}
	}
	public pct_encoded(): Pct_encodedContext[];
	public pct_encoded(i: number): Pct_encodedContext;
	public pct_encoded(i?: number): Pct_encodedContext | Pct_encodedContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Pct_encodedContext);
		} else {
			return this.getRuleContext(i, Pct_encodedContext);
		}
	}
	public sub_delims(): Sub_delimsContext[];
	public sub_delims(i: number): Sub_delimsContext;
	public sub_delims(i?: number): Sub_delimsContext | Sub_delimsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Sub_delimsContext);
		} else {
			return this.getRuleContext(i, Sub_delimsContext);
		}
	}
	public AT(): TerminalNode[];
	public AT(i: number): TerminalNode;
	public AT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(IRIParser.AT);
		} else {
			return this.getToken(IRIParser.AT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IRIParser.RULE_isegment_nz_nc; }
	// @Override
	public enterRule(listener: IRIListener): void {
		if (listener.enterIsegment_nz_nc) {
			listener.enterIsegment_nz_nc(this);
		}
	}
	// @Override
	public exitRule(listener: IRIListener): void {
		if (listener.exitIsegment_nz_nc) {
			listener.exitIsegment_nz_nc(this);
		}
	}
}


export class IpcharContext extends ParserRuleContext {
	public iunreserved(): IunreservedContext | undefined {
		return this.tryGetRuleContext(0, IunreservedContext);
	}
	public pct_encoded(): Pct_encodedContext | undefined {
		return this.tryGetRuleContext(0, Pct_encodedContext);
	}
	public sub_delims(): Sub_delimsContext | undefined {
		return this.tryGetRuleContext(0, Sub_delimsContext);
	}
	public COL(): TerminalNode | undefined { return this.tryGetToken(IRIParser.COL, 0); }
	public AT(): TerminalNode | undefined { return this.tryGetToken(IRIParser.AT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IRIParser.RULE_ipchar; }
	// @Override
	public enterRule(listener: IRIListener): void {
		if (listener.enterIpchar) {
			listener.enterIpchar(this);
		}
	}
	// @Override
	public exitRule(listener: IRIListener): void {
		if (listener.exitIpchar) {
			listener.exitIpchar(this);
		}
	}
}


export class IqueryContext extends ParserRuleContext {
	public ipchar(): IpcharContext[];
	public ipchar(i: number): IpcharContext;
	public ipchar(i?: number): IpcharContext | IpcharContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IpcharContext);
		} else {
			return this.getRuleContext(i, IpcharContext);
		}
	}
	public IPRIVATE(): TerminalNode[];
	public IPRIVATE(i: number): TerminalNode;
	public IPRIVATE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(IRIParser.IPRIVATE);
		} else {
			return this.getToken(IRIParser.IPRIVATE, i);
		}
	}
	public FSLASH(): TerminalNode[];
	public FSLASH(i: number): TerminalNode;
	public FSLASH(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(IRIParser.FSLASH);
		} else {
			return this.getToken(IRIParser.FSLASH, i);
		}
	}
	public QMARK(): TerminalNode[];
	public QMARK(i: number): TerminalNode;
	public QMARK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(IRIParser.QMARK);
		} else {
			return this.getToken(IRIParser.QMARK, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IRIParser.RULE_iquery; }
	// @Override
	public enterRule(listener: IRIListener): void {
		if (listener.enterIquery) {
			listener.enterIquery(this);
		}
	}
	// @Override
	public exitRule(listener: IRIListener): void {
		if (listener.exitIquery) {
			listener.exitIquery(this);
		}
	}
}


export class IfragmentContext extends ParserRuleContext {
	public ipchar(): IpcharContext[];
	public ipchar(i: number): IpcharContext;
	public ipchar(i?: number): IpcharContext | IpcharContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IpcharContext);
		} else {
			return this.getRuleContext(i, IpcharContext);
		}
	}
	public FSLASH(): TerminalNode[];
	public FSLASH(i: number): TerminalNode;
	public FSLASH(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(IRIParser.FSLASH);
		} else {
			return this.getToken(IRIParser.FSLASH, i);
		}
	}
	public QMARK(): TerminalNode[];
	public QMARK(i: number): TerminalNode;
	public QMARK(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(IRIParser.QMARK);
		} else {
			return this.getToken(IRIParser.QMARK, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IRIParser.RULE_ifragment; }
	// @Override
	public enterRule(listener: IRIListener): void {
		if (listener.enterIfragment) {
			listener.enterIfragment(this);
		}
	}
	// @Override
	public exitRule(listener: IRIListener): void {
		if (listener.exitIfragment) {
			listener.exitIfragment(this);
		}
	}
}


export class IunreservedContext extends ParserRuleContext {
	public alpha(): AlphaContext | undefined {
		return this.tryGetRuleContext(0, AlphaContext);
	}
	public digit(): DigitContext | undefined {
		return this.tryGetRuleContext(0, DigitContext);
	}
	public HYPHEN(): TerminalNode | undefined { return this.tryGetToken(IRIParser.HYPHEN, 0); }
	public DOT(): TerminalNode | undefined { return this.tryGetToken(IRIParser.DOT, 0); }
	public USCORE(): TerminalNode | undefined { return this.tryGetToken(IRIParser.USCORE, 0); }
	public TILDE(): TerminalNode | undefined { return this.tryGetToken(IRIParser.TILDE, 0); }
	public UCSCHAR(): TerminalNode | undefined { return this.tryGetToken(IRIParser.UCSCHAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IRIParser.RULE_iunreserved; }
	// @Override
	public enterRule(listener: IRIListener): void {
		if (listener.enterIunreserved) {
			listener.enterIunreserved(this);
		}
	}
	// @Override
	public exitRule(listener: IRIListener): void {
		if (listener.exitIunreserved) {
			listener.exitIunreserved(this);
		}
	}
}


export class SchemeContext extends ParserRuleContext {
	public alpha(): AlphaContext[];
	public alpha(i: number): AlphaContext;
	public alpha(i?: number): AlphaContext | AlphaContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AlphaContext);
		} else {
			return this.getRuleContext(i, AlphaContext);
		}
	}
	public digit(): DigitContext[];
	public digit(i: number): DigitContext;
	public digit(i?: number): DigitContext | DigitContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DigitContext);
		} else {
			return this.getRuleContext(i, DigitContext);
		}
	}
	public PLUS(): TerminalNode[];
	public PLUS(i: number): TerminalNode;
	public PLUS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(IRIParser.PLUS);
		} else {
			return this.getToken(IRIParser.PLUS, i);
		}
	}
	public HYPHEN(): TerminalNode[];
	public HYPHEN(i: number): TerminalNode;
	public HYPHEN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(IRIParser.HYPHEN);
		} else {
			return this.getToken(IRIParser.HYPHEN, i);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(IRIParser.DOT);
		} else {
			return this.getToken(IRIParser.DOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IRIParser.RULE_scheme; }
	// @Override
	public enterRule(listener: IRIListener): void {
		if (listener.enterScheme) {
			listener.enterScheme(this);
		}
	}
	// @Override
	public exitRule(listener: IRIListener): void {
		if (listener.exitScheme) {
			listener.exitScheme(this);
		}
	}
}


export class PortContext extends ParserRuleContext {
	public digit(): DigitContext[];
	public digit(i: number): DigitContext;
	public digit(i?: number): DigitContext | DigitContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DigitContext);
		} else {
			return this.getRuleContext(i, DigitContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IRIParser.RULE_port; }
	// @Override
	public enterRule(listener: IRIListener): void {
		if (listener.enterPort) {
			listener.enterPort(this);
		}
	}
	// @Override
	public exitRule(listener: IRIListener): void {
		if (listener.exitPort) {
			listener.exitPort(this);
		}
	}
}


export class Ip_literalContext extends ParserRuleContext {
	public OBRACK(): TerminalNode { return this.getToken(IRIParser.OBRACK, 0); }
	public CBRACK(): TerminalNode { return this.getToken(IRIParser.CBRACK, 0); }
	public ip_v6_address(): Ip_v6_addressContext | undefined {
		return this.tryGetRuleContext(0, Ip_v6_addressContext);
	}
	public ip_v_future(): Ip_v_futureContext | undefined {
		return this.tryGetRuleContext(0, Ip_v_futureContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IRIParser.RULE_ip_literal; }
	// @Override
	public enterRule(listener: IRIListener): void {
		if (listener.enterIp_literal) {
			listener.enterIp_literal(this);
		}
	}
	// @Override
	public exitRule(listener: IRIListener): void {
		if (listener.exitIp_literal) {
			listener.exitIp_literal(this);
		}
	}
}


export class Ip_v_futureContext extends ParserRuleContext {
	public V(): TerminalNode { return this.getToken(IRIParser.V, 0); }
	public DOT(): TerminalNode { return this.getToken(IRIParser.DOT, 0); }
	public hexdig(): HexdigContext[];
	public hexdig(i: number): HexdigContext;
	public hexdig(i?: number): HexdigContext | HexdigContext[] {
		if (i === undefined) {
			return this.getRuleContexts(HexdigContext);
		} else {
			return this.getRuleContext(i, HexdigContext);
		}
	}
	public unreserved(): UnreservedContext[];
	public unreserved(i: number): UnreservedContext;
	public unreserved(i?: number): UnreservedContext | UnreservedContext[] {
		if (i === undefined) {
			return this.getRuleContexts(UnreservedContext);
		} else {
			return this.getRuleContext(i, UnreservedContext);
		}
	}
	public sub_delims(): Sub_delimsContext[];
	public sub_delims(i: number): Sub_delimsContext;
	public sub_delims(i?: number): Sub_delimsContext | Sub_delimsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Sub_delimsContext);
		} else {
			return this.getRuleContext(i, Sub_delimsContext);
		}
	}
	public COL(): TerminalNode[];
	public COL(i: number): TerminalNode;
	public COL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(IRIParser.COL);
		} else {
			return this.getToken(IRIParser.COL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IRIParser.RULE_ip_v_future; }
	// @Override
	public enterRule(listener: IRIListener): void {
		if (listener.enterIp_v_future) {
			listener.enterIp_v_future(this);
		}
	}
	// @Override
	public exitRule(listener: IRIListener): void {
		if (listener.exitIp_v_future) {
			listener.exitIp_v_future(this);
		}
	}
}


export class Ip_v6_addressContext extends ParserRuleContext {
	public h16(): H16Context[];
	public h16(i: number): H16Context;
	public h16(i?: number): H16Context | H16Context[] {
		if (i === undefined) {
			return this.getRuleContexts(H16Context);
		} else {
			return this.getRuleContext(i, H16Context);
		}
	}
	public COL(): TerminalNode[];
	public COL(i: number): TerminalNode;
	public COL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(IRIParser.COL);
		} else {
			return this.getToken(IRIParser.COL, i);
		}
	}
	public ls32(): Ls32Context | undefined {
		return this.tryGetRuleContext(0, Ls32Context);
	}
	public COL2(): TerminalNode | undefined { return this.tryGetToken(IRIParser.COL2, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IRIParser.RULE_ip_v6_address; }
	// @Override
	public enterRule(listener: IRIListener): void {
		if (listener.enterIp_v6_address) {
			listener.enterIp_v6_address(this);
		}
	}
	// @Override
	public exitRule(listener: IRIListener): void {
		if (listener.exitIp_v6_address) {
			listener.exitIp_v6_address(this);
		}
	}
}


export class H16Context extends ParserRuleContext {
	public hexdig(): HexdigContext[];
	public hexdig(i: number): HexdigContext;
	public hexdig(i?: number): HexdigContext | HexdigContext[] {
		if (i === undefined) {
			return this.getRuleContexts(HexdigContext);
		} else {
			return this.getRuleContext(i, HexdigContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IRIParser.RULE_h16; }
	// @Override
	public enterRule(listener: IRIListener): void {
		if (listener.enterH16) {
			listener.enterH16(this);
		}
	}
	// @Override
	public exitRule(listener: IRIListener): void {
		if (listener.exitH16) {
			listener.exitH16(this);
		}
	}
}


export class Ls32Context extends ParserRuleContext {
	public h16(): H16Context[];
	public h16(i: number): H16Context;
	public h16(i?: number): H16Context | H16Context[] {
		if (i === undefined) {
			return this.getRuleContexts(H16Context);
		} else {
			return this.getRuleContext(i, H16Context);
		}
	}
	public COL(): TerminalNode | undefined { return this.tryGetToken(IRIParser.COL, 0); }
	public ip_v4_address(): Ip_v4_addressContext | undefined {
		return this.tryGetRuleContext(0, Ip_v4_addressContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IRIParser.RULE_ls32; }
	// @Override
	public enterRule(listener: IRIListener): void {
		if (listener.enterLs32) {
			listener.enterLs32(this);
		}
	}
	// @Override
	public exitRule(listener: IRIListener): void {
		if (listener.exitLs32) {
			listener.exitLs32(this);
		}
	}
}


export class Ip_v4_addressContext extends ParserRuleContext {
	public dec_octet(): Dec_octetContext[];
	public dec_octet(i: number): Dec_octetContext;
	public dec_octet(i?: number): Dec_octetContext | Dec_octetContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Dec_octetContext);
		} else {
			return this.getRuleContext(i, Dec_octetContext);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(IRIParser.DOT);
		} else {
			return this.getToken(IRIParser.DOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IRIParser.RULE_ip_v4_address; }
	// @Override
	public enterRule(listener: IRIListener): void {
		if (listener.enterIp_v4_address) {
			listener.enterIp_v4_address(this);
		}
	}
	// @Override
	public exitRule(listener: IRIListener): void {
		if (listener.exitIp_v4_address) {
			listener.exitIp_v4_address(this);
		}
	}
}


export class Dec_octetContext extends ParserRuleContext {
	public digit(): DigitContext[];
	public digit(i: number): DigitContext;
	public digit(i?: number): DigitContext | DigitContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DigitContext);
		} else {
			return this.getRuleContext(i, DigitContext);
		}
	}
	public non_zero_digit(): Non_zero_digitContext | undefined {
		return this.tryGetRuleContext(0, Non_zero_digitContext);
	}
	public D1(): TerminalNode | undefined { return this.tryGetToken(IRIParser.D1, 0); }
	public D2(): TerminalNode[];
	public D2(i: number): TerminalNode;
	public D2(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(IRIParser.D2);
		} else {
			return this.getToken(IRIParser.D2, i);
		}
	}
	public D0(): TerminalNode | undefined { return this.tryGetToken(IRIParser.D0, 0); }
	public D3(): TerminalNode | undefined { return this.tryGetToken(IRIParser.D3, 0); }
	public D4(): TerminalNode | undefined { return this.tryGetToken(IRIParser.D4, 0); }
	public D5(): TerminalNode[];
	public D5(i: number): TerminalNode;
	public D5(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(IRIParser.D5);
		} else {
			return this.getToken(IRIParser.D5, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IRIParser.RULE_dec_octet; }
	// @Override
	public enterRule(listener: IRIListener): void {
		if (listener.enterDec_octet) {
			listener.enterDec_octet(this);
		}
	}
	// @Override
	public exitRule(listener: IRIListener): void {
		if (listener.exitDec_octet) {
			listener.exitDec_octet(this);
		}
	}
}


export class Pct_encodedContext extends ParserRuleContext {
	public PERCENT(): TerminalNode { return this.getToken(IRIParser.PERCENT, 0); }
	public hexdig(): HexdigContext[];
	public hexdig(i: number): HexdigContext;
	public hexdig(i?: number): HexdigContext | HexdigContext[] {
		if (i === undefined) {
			return this.getRuleContexts(HexdigContext);
		} else {
			return this.getRuleContext(i, HexdigContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IRIParser.RULE_pct_encoded; }
	// @Override
	public enterRule(listener: IRIListener): void {
		if (listener.enterPct_encoded) {
			listener.enterPct_encoded(this);
		}
	}
	// @Override
	public exitRule(listener: IRIListener): void {
		if (listener.exitPct_encoded) {
			listener.exitPct_encoded(this);
		}
	}
}


export class UnreservedContext extends ParserRuleContext {
	public alpha(): AlphaContext | undefined {
		return this.tryGetRuleContext(0, AlphaContext);
	}
	public digit(): DigitContext | undefined {
		return this.tryGetRuleContext(0, DigitContext);
	}
	public HYPHEN(): TerminalNode | undefined { return this.tryGetToken(IRIParser.HYPHEN, 0); }
	public DOT(): TerminalNode | undefined { return this.tryGetToken(IRIParser.DOT, 0); }
	public USCORE(): TerminalNode | undefined { return this.tryGetToken(IRIParser.USCORE, 0); }
	public TILDE(): TerminalNode | undefined { return this.tryGetToken(IRIParser.TILDE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IRIParser.RULE_unreserved; }
	// @Override
	public enterRule(listener: IRIListener): void {
		if (listener.enterUnreserved) {
			listener.enterUnreserved(this);
		}
	}
	// @Override
	public exitRule(listener: IRIListener): void {
		if (listener.exitUnreserved) {
			listener.exitUnreserved(this);
		}
	}
}


export class ReservedContext extends ParserRuleContext {
	public gen_delims(): Gen_delimsContext | undefined {
		return this.tryGetRuleContext(0, Gen_delimsContext);
	}
	public sub_delims(): Sub_delimsContext | undefined {
		return this.tryGetRuleContext(0, Sub_delimsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IRIParser.RULE_reserved; }
	// @Override
	public enterRule(listener: IRIListener): void {
		if (listener.enterReserved) {
			listener.enterReserved(this);
		}
	}
	// @Override
	public exitRule(listener: IRIListener): void {
		if (listener.exitReserved) {
			listener.exitReserved(this);
		}
	}
}


export class Gen_delimsContext extends ParserRuleContext {
	public COL(): TerminalNode | undefined { return this.tryGetToken(IRIParser.COL, 0); }
	public FSLASH(): TerminalNode | undefined { return this.tryGetToken(IRIParser.FSLASH, 0); }
	public QMARK(): TerminalNode | undefined { return this.tryGetToken(IRIParser.QMARK, 0); }
	public HASH(): TerminalNode | undefined { return this.tryGetToken(IRIParser.HASH, 0); }
	public OBRACK(): TerminalNode | undefined { return this.tryGetToken(IRIParser.OBRACK, 0); }
	public CBRACK(): TerminalNode | undefined { return this.tryGetToken(IRIParser.CBRACK, 0); }
	public AT(): TerminalNode | undefined { return this.tryGetToken(IRIParser.AT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IRIParser.RULE_gen_delims; }
	// @Override
	public enterRule(listener: IRIListener): void {
		if (listener.enterGen_delims) {
			listener.enterGen_delims(this);
		}
	}
	// @Override
	public exitRule(listener: IRIListener): void {
		if (listener.exitGen_delims) {
			listener.exitGen_delims(this);
		}
	}
}


export class Sub_delimsContext extends ParserRuleContext {
	public EXCL(): TerminalNode | undefined { return this.tryGetToken(IRIParser.EXCL, 0); }
	public DOLLAR(): TerminalNode | undefined { return this.tryGetToken(IRIParser.DOLLAR, 0); }
	public AMP(): TerminalNode | undefined { return this.tryGetToken(IRIParser.AMP, 0); }
	public SQUOTE(): TerminalNode | undefined { return this.tryGetToken(IRIParser.SQUOTE, 0); }
	public OPAREN(): TerminalNode | undefined { return this.tryGetToken(IRIParser.OPAREN, 0); }
	public CPAREN(): TerminalNode | undefined { return this.tryGetToken(IRIParser.CPAREN, 0); }
	public STAR(): TerminalNode | undefined { return this.tryGetToken(IRIParser.STAR, 0); }
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(IRIParser.PLUS, 0); }
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(IRIParser.COMMA, 0); }
	public SCOL(): TerminalNode | undefined { return this.tryGetToken(IRIParser.SCOL, 0); }
	public EQUALS(): TerminalNode | undefined { return this.tryGetToken(IRIParser.EQUALS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IRIParser.RULE_sub_delims; }
	// @Override
	public enterRule(listener: IRIListener): void {
		if (listener.enterSub_delims) {
			listener.enterSub_delims(this);
		}
	}
	// @Override
	public exitRule(listener: IRIListener): void {
		if (listener.exitSub_delims) {
			listener.exitSub_delims(this);
		}
	}
}


export class AlphaContext extends ParserRuleContext {
	public A(): TerminalNode | undefined { return this.tryGetToken(IRIParser.A, 0); }
	public B(): TerminalNode | undefined { return this.tryGetToken(IRIParser.B, 0); }
	public C(): TerminalNode | undefined { return this.tryGetToken(IRIParser.C, 0); }
	public D(): TerminalNode | undefined { return this.tryGetToken(IRIParser.D, 0); }
	public E(): TerminalNode | undefined { return this.tryGetToken(IRIParser.E, 0); }
	public F(): TerminalNode | undefined { return this.tryGetToken(IRIParser.F, 0); }
	public G(): TerminalNode | undefined { return this.tryGetToken(IRIParser.G, 0); }
	public H(): TerminalNode | undefined { return this.tryGetToken(IRIParser.H, 0); }
	public I(): TerminalNode | undefined { return this.tryGetToken(IRIParser.I, 0); }
	public J(): TerminalNode | undefined { return this.tryGetToken(IRIParser.J, 0); }
	public K(): TerminalNode | undefined { return this.tryGetToken(IRIParser.K, 0); }
	public L(): TerminalNode | undefined { return this.tryGetToken(IRIParser.L, 0); }
	public M(): TerminalNode | undefined { return this.tryGetToken(IRIParser.M, 0); }
	public N(): TerminalNode | undefined { return this.tryGetToken(IRIParser.N, 0); }
	public O(): TerminalNode | undefined { return this.tryGetToken(IRIParser.O, 0); }
	public P(): TerminalNode | undefined { return this.tryGetToken(IRIParser.P, 0); }
	public Q(): TerminalNode | undefined { return this.tryGetToken(IRIParser.Q, 0); }
	public R(): TerminalNode | undefined { return this.tryGetToken(IRIParser.R, 0); }
	public S(): TerminalNode | undefined { return this.tryGetToken(IRIParser.S, 0); }
	public T(): TerminalNode | undefined { return this.tryGetToken(IRIParser.T, 0); }
	public U(): TerminalNode | undefined { return this.tryGetToken(IRIParser.U, 0); }
	public V(): TerminalNode | undefined { return this.tryGetToken(IRIParser.V, 0); }
	public W(): TerminalNode | undefined { return this.tryGetToken(IRIParser.W, 0); }
	public X(): TerminalNode | undefined { return this.tryGetToken(IRIParser.X, 0); }
	public Y(): TerminalNode | undefined { return this.tryGetToken(IRIParser.Y, 0); }
	public Z(): TerminalNode | undefined { return this.tryGetToken(IRIParser.Z, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IRIParser.RULE_alpha; }
	// @Override
	public enterRule(listener: IRIListener): void {
		if (listener.enterAlpha) {
			listener.enterAlpha(this);
		}
	}
	// @Override
	public exitRule(listener: IRIListener): void {
		if (listener.exitAlpha) {
			listener.exitAlpha(this);
		}
	}
}


export class HexdigContext extends ParserRuleContext {
	public digit(): DigitContext | undefined {
		return this.tryGetRuleContext(0, DigitContext);
	}
	public A(): TerminalNode | undefined { return this.tryGetToken(IRIParser.A, 0); }
	public B(): TerminalNode | undefined { return this.tryGetToken(IRIParser.B, 0); }
	public C(): TerminalNode | undefined { return this.tryGetToken(IRIParser.C, 0); }
	public D(): TerminalNode | undefined { return this.tryGetToken(IRIParser.D, 0); }
	public E(): TerminalNode | undefined { return this.tryGetToken(IRIParser.E, 0); }
	public F(): TerminalNode | undefined { return this.tryGetToken(IRIParser.F, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IRIParser.RULE_hexdig; }
	// @Override
	public enterRule(listener: IRIListener): void {
		if (listener.enterHexdig) {
			listener.enterHexdig(this);
		}
	}
	// @Override
	public exitRule(listener: IRIListener): void {
		if (listener.exitHexdig) {
			listener.exitHexdig(this);
		}
	}
}


export class DigitContext extends ParserRuleContext {
	public D0(): TerminalNode | undefined { return this.tryGetToken(IRIParser.D0, 0); }
	public non_zero_digit(): Non_zero_digitContext | undefined {
		return this.tryGetRuleContext(0, Non_zero_digitContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IRIParser.RULE_digit; }
	// @Override
	public enterRule(listener: IRIListener): void {
		if (listener.enterDigit) {
			listener.enterDigit(this);
		}
	}
	// @Override
	public exitRule(listener: IRIListener): void {
		if (listener.exitDigit) {
			listener.exitDigit(this);
		}
	}
}


export class Non_zero_digitContext extends ParserRuleContext {
	public D1(): TerminalNode | undefined { return this.tryGetToken(IRIParser.D1, 0); }
	public D2(): TerminalNode | undefined { return this.tryGetToken(IRIParser.D2, 0); }
	public D3(): TerminalNode | undefined { return this.tryGetToken(IRIParser.D3, 0); }
	public D4(): TerminalNode | undefined { return this.tryGetToken(IRIParser.D4, 0); }
	public D5(): TerminalNode | undefined { return this.tryGetToken(IRIParser.D5, 0); }
	public D6(): TerminalNode | undefined { return this.tryGetToken(IRIParser.D6, 0); }
	public D7(): TerminalNode | undefined { return this.tryGetToken(IRIParser.D7, 0); }
	public D8(): TerminalNode | undefined { return this.tryGetToken(IRIParser.D8, 0); }
	public D9(): TerminalNode | undefined { return this.tryGetToken(IRIParser.D9, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return IRIParser.RULE_non_zero_digit; }
	// @Override
	public enterRule(listener: IRIListener): void {
		if (listener.enterNon_zero_digit) {
			listener.enterNon_zero_digit(this);
		}
	}
	// @Override
	public exitRule(listener: IRIListener): void {
		if (listener.exitNon_zero_digit) {
			listener.exitNon_zero_digit(this);
		}
	}
}


