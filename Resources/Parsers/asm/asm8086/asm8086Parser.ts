// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/asm/asm8086/asm8086.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { asm8086Listener } from "./asm8086Listener";
import { asm8086Visitor } from "./asm8086Visitor";


export class asm8086Parser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly BYTE = 15;
	public static readonly WORD = 16;
	public static readonly DWORD = 17;
	public static readonly DSEG = 18;
	public static readonly CSEG = 19;
	public static readonly INCLUDE = 20;
	public static readonly TITLE = 21;
	public static readonly END = 22;
	public static readonly ORG = 23;
	public static readonly ENDIF = 24;
	public static readonly IF = 25;
	public static readonly EQU = 26;
	public static readonly DW = 27;
	public static readonly DB = 28;
	public static readonly DD = 29;
	public static readonly PTR = 30;
	public static readonly NOT = 31;
	public static readonly OFFSET = 32;
	public static readonly RW = 33;
	public static readonly RB = 34;
	public static readonly RS = 35;
	public static readonly LENGTH = 36;
	public static readonly COMMENT = 37;
	public static readonly REGISTER = 38;
	public static readonly OPCODE = 39;
	public static readonly REP = 40;
	public static readonly DOLLAR = 41;
	public static readonly SIGN = 42;
	public static readonly NAME = 43;
	public static readonly NUMBER = 44;
	public static readonly STRING = 45;
	public static readonly EOL = 46;
	public static readonly WS = 47;
	public static readonly RULE_prog = 0;
	public static readonly RULE_line = 1;
	public static readonly RULE_instruction = 2;
	public static readonly RULE_lbl = 3;
	public static readonly RULE_assemblerdirective = 4;
	public static readonly RULE_rw = 5;
	public static readonly RULE_rb = 6;
	public static readonly RULE_rs = 7;
	public static readonly RULE_cseg = 8;
	public static readonly RULE_dseg = 9;
	public static readonly RULE_dw = 10;
	public static readonly RULE_db = 11;
	public static readonly RULE_dd = 12;
	public static readonly RULE_equ = 13;
	public static readonly RULE_if_ = 14;
	public static readonly RULE_assemblerexpression = 15;
	public static readonly RULE_assemblerlogical = 16;
	public static readonly RULE_assemblerterm = 17;
	public static readonly RULE_endif = 18;
	public static readonly RULE_end = 19;
	public static readonly RULE_org = 20;
	public static readonly RULE_title = 21;
	public static readonly RULE_include = 22;
	public static readonly RULE_expressionlist = 23;
	public static readonly RULE_label = 24;
	public static readonly RULE_expression = 25;
	public static readonly RULE_multiplyingExpression = 26;
	public static readonly RULE_argument = 27;
	public static readonly RULE_ptr = 28;
	public static readonly RULE_dollar = 29;
	public static readonly RULE_register_ = 30;
	public static readonly RULE_string = 31;
	public static readonly RULE_name = 32;
	public static readonly RULE_number = 33;
	public static readonly RULE_opcode = 34;
	public static readonly RULE_rep = 35;
	public static readonly RULE_comment = 36;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"prog", "line", "instruction", "lbl", "assemblerdirective", "rw", "rb", 
		"rs", "cseg", "dseg", "dw", "db", "dd", "equ", "if_", "assemblerexpression", 
		"assemblerlogical", "assemblerterm", "endif", "end", "org", "title", "include", 
		"expressionlist", "label", "expression", "multiplyingExpression", "argument", 
		"ptr", "dollar", "register_", "string", "name", "number", "opcode", "rep", 
		"comment",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'!'", "':'", "'.'", "'('", "')'", "'eq'", "'ne'", "','", "'*'", 
		"'/'", "'mod'", "'and'", "'['", "']'", undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, "'$'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, "BYTE", "WORD", "DWORD", "DSEG", "CSEG", "INCLUDE", "TITLE", 
		"END", "ORG", "ENDIF", "IF", "EQU", "DW", "DB", "DD", "PTR", "NOT", "OFFSET", 
		"RW", "RB", "RS", "LENGTH", "COMMENT", "REGISTER", "OPCODE", "REP", "DOLLAR", 
		"SIGN", "NAME", "NUMBER", "STRING", "EOL", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(asm8086Parser._LITERAL_NAMES, asm8086Parser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return asm8086Parser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "asm8086.g4"; }

	// @Override
	public get ruleNames(): string[] { return asm8086Parser.ruleNames; }

	// @Override
	public get serializedATN(): string { return asm8086Parser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(asm8086Parser._ATN, this);
	}
	// @RuleVersion(0)
	public prog(): ProgContext {
		let _localctx: ProgContext = new ProgContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, asm8086Parser.RULE_prog);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 86;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << asm8086Parser.T__0) | (1 << asm8086Parser.T__2) | (1 << asm8086Parser.DSEG) | (1 << asm8086Parser.CSEG) | (1 << asm8086Parser.INCLUDE) | (1 << asm8086Parser.TITLE) | (1 << asm8086Parser.END) | (1 << asm8086Parser.ORG) | (1 << asm8086Parser.ENDIF) | (1 << asm8086Parser.IF) | (1 << asm8086Parser.DW) | (1 << asm8086Parser.DB) | (1 << asm8086Parser.DD))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (asm8086Parser.RW - 33)) | (1 << (asm8086Parser.RB - 33)) | (1 << (asm8086Parser.RS - 33)) | (1 << (asm8086Parser.COMMENT - 33)) | (1 << (asm8086Parser.OPCODE - 33)) | (1 << (asm8086Parser.REP - 33)) | (1 << (asm8086Parser.NAME - 33)) | (1 << (asm8086Parser.EOL - 33)))) !== 0)) {
				{
				{
				this.state = 74;
				this.line();
				this.state = 79;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === asm8086Parser.T__0) {
					{
					{
					this.state = 75;
					this.match(asm8086Parser.T__0);
					this.state = 76;
					this.line();
					}
					}
					this.state = 81;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 82;
				this.match(asm8086Parser.EOL);
				}
				}
				this.state = 88;
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
	public line(): LineContext {
		let _localctx: LineContext = new LineContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, asm8086Parser.RULE_line);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 90;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				{
				this.state = 89;
				this.lbl();
				}
				break;
			}
			this.state = 94;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case asm8086Parser.T__2:
			case asm8086Parser.DSEG:
			case asm8086Parser.CSEG:
			case asm8086Parser.INCLUDE:
			case asm8086Parser.TITLE:
			case asm8086Parser.END:
			case asm8086Parser.ORG:
			case asm8086Parser.ENDIF:
			case asm8086Parser.IF:
			case asm8086Parser.DW:
			case asm8086Parser.DB:
			case asm8086Parser.DD:
			case asm8086Parser.RW:
			case asm8086Parser.RB:
			case asm8086Parser.RS:
			case asm8086Parser.NAME:
				{
				this.state = 92;
				this.assemblerdirective();
				}
				break;
			case asm8086Parser.OPCODE:
			case asm8086Parser.REP:
				{
				this.state = 93;
				this.instruction();
				}
				break;
			case asm8086Parser.T__0:
			case asm8086Parser.COMMENT:
			case asm8086Parser.EOL:
				break;
			default:
				break;
			}
			this.state = 97;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === asm8086Parser.COMMENT) {
				{
				this.state = 96;
				this.comment();
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
	public instruction(): InstructionContext {
		let _localctx: InstructionContext = new InstructionContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, asm8086Parser.RULE_instruction);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 100;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === asm8086Parser.REP) {
				{
				this.state = 99;
				this.rep();
				}
			}

			this.state = 102;
			this.opcode();
			this.state = 104;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << asm8086Parser.T__3) | (1 << asm8086Parser.T__12) | (1 << asm8086Parser.BYTE) | (1 << asm8086Parser.WORD) | (1 << asm8086Parser.DWORD) | (1 << asm8086Parser.PTR) | (1 << asm8086Parser.NOT))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (asm8086Parser.OFFSET - 32)) | (1 << (asm8086Parser.LENGTH - 32)) | (1 << (asm8086Parser.REGISTER - 32)) | (1 << (asm8086Parser.DOLLAR - 32)) | (1 << (asm8086Parser.SIGN - 32)) | (1 << (asm8086Parser.NAME - 32)) | (1 << (asm8086Parser.NUMBER - 32)) | (1 << (asm8086Parser.STRING - 32)))) !== 0)) {
				{
				this.state = 103;
				this.expressionlist();
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
	public lbl(): LblContext {
		let _localctx: LblContext = new LblContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, asm8086Parser.RULE_lbl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 106;
			this.label();
			this.state = 108;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === asm8086Parser.T__1) {
				{
				this.state = 107;
				this.match(asm8086Parser.T__1);
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
	public assemblerdirective(): AssemblerdirectiveContext {
		let _localctx: AssemblerdirectiveContext = new AssemblerdirectiveContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, asm8086Parser.RULE_assemblerdirective);
		try {
			this.state = 126;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 110;
				this.org();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 111;
				this.end();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 112;
				this.if_();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 113;
				this.endif();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 114;
				this.equ();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 115;
				this.db();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 116;
				this.dw();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 117;
				this.cseg();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 118;
				this.dd();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 119;
				this.dseg();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 120;
				this.title();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 121;
				this.include();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 122;
				this.rw();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 123;
				this.rb();
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 124;
				this.rs();
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 125;
				this.match(asm8086Parser.T__2);
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
	public rw(): RwContext {
		let _localctx: RwContext = new RwContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, asm8086Parser.RULE_rw);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 129;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === asm8086Parser.NAME) {
				{
				this.state = 128;
				this.name();
				}
			}

			this.state = 131;
			this.match(asm8086Parser.RW);
			this.state = 132;
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
	public rb(): RbContext {
		let _localctx: RbContext = new RbContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, asm8086Parser.RULE_rb);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 135;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === asm8086Parser.NAME) {
				{
				this.state = 134;
				this.name();
				}
			}

			this.state = 137;
			this.match(asm8086Parser.RB);
			this.state = 138;
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
	public rs(): RsContext {
		let _localctx: RsContext = new RsContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, asm8086Parser.RULE_rs);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 141;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === asm8086Parser.NAME) {
				{
				this.state = 140;
				this.name();
				}
			}

			this.state = 143;
			this.match(asm8086Parser.RS);
			this.state = 144;
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
	public cseg(): CsegContext {
		let _localctx: CsegContext = new CsegContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, asm8086Parser.RULE_cseg);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 146;
			this.match(asm8086Parser.CSEG);
			this.state = 148;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << asm8086Parser.T__3) | (1 << asm8086Parser.T__12) | (1 << asm8086Parser.BYTE) | (1 << asm8086Parser.WORD) | (1 << asm8086Parser.DWORD) | (1 << asm8086Parser.PTR) | (1 << asm8086Parser.NOT))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (asm8086Parser.OFFSET - 32)) | (1 << (asm8086Parser.LENGTH - 32)) | (1 << (asm8086Parser.REGISTER - 32)) | (1 << (asm8086Parser.DOLLAR - 32)) | (1 << (asm8086Parser.SIGN - 32)) | (1 << (asm8086Parser.NAME - 32)) | (1 << (asm8086Parser.NUMBER - 32)) | (1 << (asm8086Parser.STRING - 32)))) !== 0)) {
				{
				this.state = 147;
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
	public dseg(): DsegContext {
		let _localctx: DsegContext = new DsegContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, asm8086Parser.RULE_dseg);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 150;
			this.match(asm8086Parser.DSEG);
			this.state = 152;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << asm8086Parser.T__3) | (1 << asm8086Parser.T__12) | (1 << asm8086Parser.BYTE) | (1 << asm8086Parser.WORD) | (1 << asm8086Parser.DWORD) | (1 << asm8086Parser.PTR) | (1 << asm8086Parser.NOT))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (asm8086Parser.OFFSET - 32)) | (1 << (asm8086Parser.LENGTH - 32)) | (1 << (asm8086Parser.REGISTER - 32)) | (1 << (asm8086Parser.DOLLAR - 32)) | (1 << (asm8086Parser.SIGN - 32)) | (1 << (asm8086Parser.NAME - 32)) | (1 << (asm8086Parser.NUMBER - 32)) | (1 << (asm8086Parser.STRING - 32)))) !== 0)) {
				{
				this.state = 151;
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
	public dw(): DwContext {
		let _localctx: DwContext = new DwContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, asm8086Parser.RULE_dw);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 154;
			this.match(asm8086Parser.DW);
			this.state = 155;
			this.expressionlist();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public db(): DbContext {
		let _localctx: DbContext = new DbContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, asm8086Parser.RULE_db);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 157;
			this.match(asm8086Parser.DB);
			this.state = 158;
			this.expressionlist();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dd(): DdContext {
		let _localctx: DdContext = new DdContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, asm8086Parser.RULE_dd);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 160;
			this.match(asm8086Parser.DD);
			this.state = 161;
			this.expressionlist();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public equ(): EquContext {
		let _localctx: EquContext = new EquContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, asm8086Parser.RULE_equ);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 163;
			this.name();
			this.state = 164;
			this.match(asm8086Parser.EQU);
			this.state = 165;
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
	public if_(): If_Context {
		let _localctx: If_Context = new If_Context(this._ctx, this.state);
		this.enterRule(_localctx, 28, asm8086Parser.RULE_if_);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 167;
			this.match(asm8086Parser.IF);
			this.state = 168;
			this.assemblerexpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assemblerexpression(): AssemblerexpressionContext {
		let _localctx: AssemblerexpressionContext = new AssemblerexpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, asm8086Parser.RULE_assemblerexpression);
		let _la: number;
		try {
			this.state = 183;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case asm8086Parser.NOT:
			case asm8086Parser.SIGN:
			case asm8086Parser.NAME:
			case asm8086Parser.NUMBER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 170;
				this.assemblerterm();
				this.state = 176;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === asm8086Parser.T__5 || _la === asm8086Parser.T__6) {
					{
					{
					this.state = 171;
					this.assemblerlogical();
					this.state = 172;
					this.assemblerterm();
					}
					}
					this.state = 178;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case asm8086Parser.T__3:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 179;
				this.match(asm8086Parser.T__3);
				this.state = 180;
				this.assemblerexpression();
				this.state = 181;
				this.match(asm8086Parser.T__4);
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
	public assemblerlogical(): AssemblerlogicalContext {
		let _localctx: AssemblerlogicalContext = new AssemblerlogicalContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, asm8086Parser.RULE_assemblerlogical);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 185;
			_la = this._input.LA(1);
			if (!(_la === asm8086Parser.T__5 || _la === asm8086Parser.T__6)) {
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
	public assemblerterm(): AssemblertermContext {
		let _localctx: AssemblertermContext = new AssemblertermContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, asm8086Parser.RULE_assemblerterm);
		try {
			this.state = 191;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case asm8086Parser.NAME:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 187;
				this.name();
				}
				break;
			case asm8086Parser.SIGN:
			case asm8086Parser.NUMBER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 188;
				this.number();
				}
				break;
			case asm8086Parser.NOT:
				this.enterOuterAlt(_localctx, 3);
				{
				{
				this.state = 189;
				this.match(asm8086Parser.NOT);
				this.state = 190;
				this.assemblerterm();
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
	public endif(): EndifContext {
		let _localctx: EndifContext = new EndifContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, asm8086Parser.RULE_endif);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 193;
			this.match(asm8086Parser.ENDIF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public end(): EndContext {
		let _localctx: EndContext = new EndContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, asm8086Parser.RULE_end);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 195;
			this.match(asm8086Parser.END);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public org(): OrgContext {
		let _localctx: OrgContext = new OrgContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, asm8086Parser.RULE_org);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 197;
			this.match(asm8086Parser.ORG);
			this.state = 198;
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
	public title(): TitleContext {
		let _localctx: TitleContext = new TitleContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, asm8086Parser.RULE_title);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 200;
			this.match(asm8086Parser.TITLE);
			this.state = 201;
			this.string();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public include(): IncludeContext {
		let _localctx: IncludeContext = new IncludeContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, asm8086Parser.RULE_include);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 203;
			this.match(asm8086Parser.INCLUDE);
			this.state = 204;
			this.name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionlist(): ExpressionlistContext {
		let _localctx: ExpressionlistContext = new ExpressionlistContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, asm8086Parser.RULE_expressionlist);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 206;
			this.expression();
			this.state = 211;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === asm8086Parser.T__7) {
				{
				{
				this.state = 207;
				this.match(asm8086Parser.T__7);
				this.state = 208;
				this.expression();
				}
				}
				this.state = 213;
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
	public label(): LabelContext {
		let _localctx: LabelContext = new LabelContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, asm8086Parser.RULE_label);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 214;
			this.name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 50, asm8086Parser.RULE_expression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 216;
			this.multiplyingExpression();
			this.state = 221;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 217;
					this.match(asm8086Parser.SIGN);
					this.state = 218;
					this.multiplyingExpression();
					}
					}
				}
				this.state = 223;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 52, asm8086Parser.RULE_multiplyingExpression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 224;
			this.argument();
			this.state = 229;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 225;
					_la = this._input.LA(1);
					if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << asm8086Parser.T__8) | (1 << asm8086Parser.T__9) | (1 << asm8086Parser.T__10) | (1 << asm8086Parser.T__11))) !== 0))) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 226;
					this.argument();
					}
					}
				}
				this.state = 231;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public argument(): ArgumentContext {
		let _localctx: ArgumentContext = new ArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, asm8086Parser.RULE_argument);
		try {
			this.state = 263;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 232;
				this.number();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 233;
				this.dollar();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 234;
				this.register_();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 235;
				this.name();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 236;
				this.string();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				{
				this.state = 237;
				this.match(asm8086Parser.T__3);
				this.state = 238;
				this.expression();
				this.state = 239;
				this.match(asm8086Parser.T__4);
				}
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				{
				this.state = 243;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case asm8086Parser.SIGN:
				case asm8086Parser.NUMBER:
					{
					this.state = 241;
					this.number();
					}
					break;
				case asm8086Parser.NAME:
					{
					this.state = 242;
					this.name();
					}
					break;
				case asm8086Parser.T__12:
					break;
				default:
					break;
				}
				this.state = 245;
				this.match(asm8086Parser.T__12);
				this.state = 246;
				this.expression();
				this.state = 247;
				this.match(asm8086Parser.T__13);
				}
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 249;
				this.ptr();
				this.state = 250;
				this.expression();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 252;
				this.match(asm8086Parser.NOT);
				this.state = 253;
				this.expression();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 254;
				this.match(asm8086Parser.OFFSET);
				this.state = 255;
				this.expression();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 256;
				this.match(asm8086Parser.LENGTH);
				this.state = 257;
				this.expression();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				{
				this.state = 258;
				this.register_();
				this.state = 259;
				this.match(asm8086Parser.T__1);
				}
				this.state = 261;
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
	public ptr(): PtrContext {
		let _localctx: PtrContext = new PtrContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, asm8086Parser.RULE_ptr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 266;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << asm8086Parser.BYTE) | (1 << asm8086Parser.WORD) | (1 << asm8086Parser.DWORD))) !== 0)) {
				{
				this.state = 265;
				_la = this._input.LA(1);
				if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << asm8086Parser.BYTE) | (1 << asm8086Parser.WORD) | (1 << asm8086Parser.DWORD))) !== 0))) {
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

			this.state = 268;
			this.match(asm8086Parser.PTR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dollar(): DollarContext {
		let _localctx: DollarContext = new DollarContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, asm8086Parser.RULE_dollar);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 270;
			this.match(asm8086Parser.DOLLAR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public register_(): Register_Context {
		let _localctx: Register_Context = new Register_Context(this._ctx, this.state);
		this.enterRule(_localctx, 60, asm8086Parser.RULE_register_);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 272;
			this.match(asm8086Parser.REGISTER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 62, asm8086Parser.RULE_string);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 274;
			this.match(asm8086Parser.STRING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public name(): NameContext {
		let _localctx: NameContext = new NameContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, asm8086Parser.RULE_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 276;
			this.match(asm8086Parser.NAME);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 66, asm8086Parser.RULE_number);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 279;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === asm8086Parser.SIGN) {
				{
				this.state = 278;
				this.match(asm8086Parser.SIGN);
				}
			}

			this.state = 281;
			this.match(asm8086Parser.NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public opcode(): OpcodeContext {
		let _localctx: OpcodeContext = new OpcodeContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, asm8086Parser.RULE_opcode);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 283;
			this.match(asm8086Parser.OPCODE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rep(): RepContext {
		let _localctx: RepContext = new RepContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, asm8086Parser.RULE_rep);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 285;
			this.match(asm8086Parser.REP);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 72, asm8086Parser.RULE_comment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 287;
			this.match(asm8086Parser.COMMENT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x031\u0124\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x03\x02\x03\x02\x03\x02\x07\x02P\n\x02\f\x02" +
		"\x0E\x02S\v\x02\x03\x02\x03\x02\x07\x02W\n\x02\f\x02\x0E\x02Z\v\x02\x03" +
		"\x03\x05\x03]\n\x03\x03\x03\x03\x03\x05\x03a\n\x03\x03\x03\x05\x03d\n" +
		"\x03\x03\x04\x05\x04g\n\x04\x03\x04\x03\x04\x05\x04k\n\x04\x03\x05\x03" +
		"\x05\x05\x05o\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x05\x06\x81\n\x06\x03\x07\x05\x07\x84\n\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\b\x05\b\x8A\n\b\x03\b\x03\b\x03\b\x03\t\x05\t\x90\n\t\x03\t\x03\t" +
		"\x03\t\x03\n\x03\n\x05\n\x97\n\n\x03\v\x03\v\x05\v\x9B\n\v\x03\f\x03\f" +
		"\x03\f\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11\x07\x11" +
		"\xB1\n\x11\f\x11\x0E\x11\xB4\v\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05" +
		"\x11\xBA\n\x11\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13" +
		"\xC2\n\x13\x03\x14\x03\x14\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03" +
		"\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19\x07" +
		"\x19\xD4\n\x19\f\x19\x0E\x19\xD7\v\x19\x03\x1A\x03\x1A\x03\x1B\x03\x1B" +
		"\x03\x1B\x07\x1B\xDE\n\x1B\f\x1B\x0E\x1B\xE1\v\x1B\x03\x1C\x03\x1C\x03" +
		"\x1C\x07\x1C\xE6\n\x1C\f\x1C\x0E\x1C\xE9\v\x1C\x03\x1D\x03\x1D\x03\x1D" +
		"\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x05\x1D" +
		"\xF6\n\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03" +
		"\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03" +
		"\x1D\x03\x1D\x05\x1D\u010A\n\x1D\x03\x1E\x05\x1E\u010D\n\x1E\x03\x1E\x03" +
		"\x1E\x03\x1F\x03\x1F\x03 \x03 \x03!\x03!\x03\"\x03\"\x03#\x05#\u011A\n" +
		"#\x03#\x03#\x03$\x03$\x03%\x03%\x03&\x03&\x03&\x02\x02\x02\'\x02\x02\x04" +
		"\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02" +
		"\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02." +
		"\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02" +
		"J\x02\x02\x05\x03\x02\b\t\x03\x02\v\x0E\x03\x02\x11\x13\x02\u0131\x02" +
		"X\x03\x02\x02\x02\x04\\\x03\x02\x02\x02\x06f\x03\x02\x02\x02\bl\x03\x02" +
		"\x02\x02\n\x80\x03\x02\x02\x02\f\x83\x03\x02\x02\x02\x0E\x89\x03\x02\x02" +
		"\x02\x10\x8F\x03\x02\x02\x02\x12\x94\x03\x02\x02\x02\x14\x98\x03\x02\x02" +
		"\x02\x16\x9C\x03\x02\x02\x02\x18\x9F\x03\x02\x02\x02\x1A\xA2\x03\x02\x02" +
		"\x02\x1C\xA5\x03\x02\x02\x02\x1E\xA9\x03\x02\x02\x02 \xB9\x03\x02\x02" +
		"\x02\"\xBB\x03\x02\x02\x02$\xC1\x03\x02\x02\x02&\xC3\x03\x02\x02\x02(" +
		"\xC5\x03\x02\x02\x02*\xC7\x03\x02\x02\x02,\xCA\x03\x02\x02\x02.\xCD\x03" +
		"\x02\x02\x020\xD0\x03\x02\x02\x022\xD8\x03\x02\x02\x024\xDA\x03\x02\x02" +
		"\x026\xE2\x03\x02\x02\x028\u0109\x03\x02\x02\x02:\u010C\x03\x02\x02\x02" +
		"<\u0110\x03\x02\x02\x02>\u0112\x03\x02\x02\x02@\u0114\x03\x02\x02\x02" +
		"B\u0116\x03\x02\x02\x02D\u0119\x03\x02\x02\x02F\u011D\x03\x02\x02\x02" +
		"H\u011F\x03\x02\x02\x02J\u0121\x03\x02\x02\x02LQ\x05\x04\x03\x02MN\x07" +
		"\x03\x02\x02NP\x05\x04\x03\x02OM\x03\x02\x02\x02PS\x03\x02\x02\x02QO\x03" +
		"\x02\x02\x02QR\x03\x02\x02\x02RT\x03\x02\x02\x02SQ\x03\x02\x02\x02TU\x07" +
		"0\x02\x02UW\x03\x02\x02\x02VL\x03\x02\x02\x02WZ\x03\x02\x02\x02XV\x03" +
		"\x02\x02\x02XY\x03\x02\x02\x02Y\x03\x03\x02\x02\x02ZX\x03\x02\x02\x02" +
		"[]\x05\b\x05\x02\\[\x03\x02\x02\x02\\]\x03\x02\x02\x02]`\x03\x02\x02\x02" +
		"^a\x05\n\x06\x02_a\x05\x06\x04\x02`^\x03\x02\x02\x02`_\x03\x02\x02\x02" +
		"`a\x03\x02\x02\x02ac\x03\x02\x02\x02bd\x05J&\x02cb\x03\x02\x02\x02cd\x03" +
		"\x02\x02\x02d\x05\x03\x02\x02\x02eg\x05H%\x02fe\x03\x02\x02\x02fg\x03" +
		"\x02\x02\x02gh\x03\x02\x02\x02hj\x05F$\x02ik\x050\x19\x02ji\x03\x02\x02" +
		"\x02jk\x03\x02\x02\x02k\x07\x03\x02\x02\x02ln\x052\x1A\x02mo\x07\x04\x02" +
		"\x02nm\x03\x02\x02\x02no\x03\x02\x02\x02o\t\x03\x02\x02\x02p\x81\x05*" +
		"\x16\x02q\x81\x05(\x15\x02r\x81\x05\x1E\x10\x02s\x81\x05&\x14\x02t\x81" +
		"\x05\x1C\x0F\x02u\x81\x05\x18\r\x02v\x81\x05\x16\f\x02w\x81\x05\x12\n" +
		"\x02x\x81\x05\x1A\x0E\x02y\x81\x05\x14\v\x02z\x81\x05,\x17\x02{\x81\x05" +
		".\x18\x02|\x81\x05\f\x07\x02}\x81\x05\x0E\b\x02~\x81\x05\x10\t\x02\x7F" +
		"\x81\x07\x05\x02\x02\x80p\x03\x02\x02\x02\x80q\x03\x02\x02\x02\x80r\x03" +
		"\x02\x02\x02\x80s\x03\x02\x02\x02\x80t\x03\x02\x02\x02\x80u\x03\x02\x02" +
		"\x02\x80v\x03\x02\x02\x02\x80w\x03\x02\x02\x02\x80x\x03\x02\x02\x02\x80" +
		"y\x03\x02\x02\x02\x80z\x03\x02\x02\x02\x80{\x03\x02\x02\x02\x80|\x03\x02" +
		"\x02\x02\x80}\x03\x02\x02\x02\x80~\x03\x02\x02\x02\x80\x7F\x03\x02\x02" +
		"\x02\x81\v\x03\x02\x02\x02\x82\x84\x05B\"\x02\x83\x82\x03\x02\x02\x02" +
		"\x83\x84\x03\x02\x02\x02\x84\x85\x03\x02\x02\x02\x85\x86\x07#\x02\x02" +
		"\x86\x87\x054\x1B\x02\x87\r\x03\x02\x02\x02\x88\x8A\x05B\"\x02\x89\x88" +
		"\x03\x02\x02\x02\x89\x8A\x03\x02\x02\x02\x8A\x8B\x03\x02\x02\x02\x8B\x8C" +
		"\x07$\x02\x02\x8C\x8D\x054\x1B\x02\x8D\x0F\x03\x02\x02\x02\x8E\x90\x05" +
		"B\"\x02\x8F\x8E\x03\x02\x02\x02\x8F\x90\x03\x02\x02\x02\x90\x91\x03\x02" +
		"\x02\x02\x91\x92\x07%\x02\x02\x92\x93\x054\x1B\x02\x93\x11\x03\x02\x02" +
		"\x02\x94\x96\x07\x15\x02\x02\x95\x97\x054\x1B\x02\x96\x95\x03\x02\x02" +
		"\x02\x96\x97\x03\x02\x02\x02\x97\x13\x03\x02\x02\x02\x98\x9A\x07\x14\x02" +
		"\x02\x99\x9B\x054\x1B\x02\x9A\x99\x03\x02\x02\x02\x9A\x9B\x03\x02\x02" +
		"\x02\x9B\x15\x03\x02\x02\x02\x9C\x9D\x07\x1D\x02\x02\x9D\x9E\x050\x19" +
		"\x02\x9E\x17\x03\x02\x02\x02\x9F\xA0\x07\x1E\x02\x02\xA0\xA1\x050\x19" +
		"\x02\xA1\x19\x03\x02\x02\x02\xA2\xA3\x07\x1F\x02\x02\xA3\xA4\x050\x19" +
		"\x02\xA4\x1B\x03\x02\x02\x02\xA5\xA6\x05B\"\x02\xA6\xA7\x07\x1C\x02\x02" +
		"\xA7\xA8\x054\x1B\x02\xA8\x1D\x03\x02\x02\x02\xA9\xAA\x07\x1B\x02\x02" +
		"\xAA\xAB\x05 \x11\x02\xAB\x1F\x03\x02\x02\x02\xAC\xB2\x05$\x13\x02\xAD" +
		"\xAE\x05\"\x12\x02\xAE\xAF\x05$\x13\x02\xAF\xB1\x03\x02\x02\x02\xB0\xAD" +
		"\x03\x02\x02\x02\xB1\xB4\x03\x02\x02\x02\xB2\xB0\x03\x02\x02\x02\xB2\xB3" +
		"\x03\x02\x02\x02\xB3\xBA\x03\x02\x02\x02\xB4\xB2\x03\x02\x02\x02\xB5\xB6" +
		"\x07\x06\x02\x02\xB6\xB7\x05 \x11\x02\xB7\xB8\x07\x07\x02\x02\xB8\xBA" +
		"\x03\x02\x02\x02\xB9\xAC\x03\x02\x02\x02\xB9\xB5\x03\x02\x02\x02\xBA!" +
		"\x03\x02\x02\x02\xBB\xBC\t\x02\x02\x02\xBC#\x03\x02\x02\x02\xBD\xC2\x05" +
		"B\"\x02\xBE\xC2\x05D#\x02\xBF\xC0\x07!\x02\x02\xC0\xC2\x05$\x13\x02\xC1" +
		"\xBD\x03\x02\x02\x02\xC1\xBE\x03\x02\x02\x02\xC1\xBF\x03\x02\x02\x02\xC2" +
		"%\x03\x02\x02\x02\xC3\xC4\x07\x1A\x02\x02\xC4\'\x03\x02\x02\x02\xC5\xC6" +
		"\x07\x18\x02\x02\xC6)\x03\x02\x02\x02\xC7\xC8\x07\x19\x02\x02\xC8\xC9" +
		"\x054\x1B\x02\xC9+\x03\x02\x02\x02\xCA\xCB\x07\x17\x02\x02\xCB\xCC\x05" +
		"@!\x02\xCC-\x03\x02\x02\x02\xCD\xCE\x07\x16\x02\x02\xCE\xCF\x05B\"\x02" +
		"\xCF/\x03\x02\x02\x02\xD0\xD5\x054\x1B\x02\xD1\xD2\x07\n\x02\x02\xD2\xD4" +
		"\x054\x1B\x02\xD3\xD1\x03\x02\x02\x02\xD4\xD7\x03\x02\x02\x02\xD5\xD3" +
		"\x03\x02\x02\x02\xD5\xD6\x03\x02\x02\x02\xD61\x03\x02\x02\x02\xD7\xD5" +
		"\x03\x02\x02\x02\xD8\xD9\x05B\"\x02\xD93\x03\x02\x02\x02\xDA\xDF\x056" +
		"\x1C\x02\xDB\xDC\x07,\x02\x02\xDC\xDE\x056\x1C\x02\xDD\xDB\x03\x02\x02" +
		"\x02\xDE\xE1\x03\x02\x02\x02\xDF\xDD\x03\x02\x02\x02\xDF\xE0\x03\x02\x02" +
		"\x02\xE05\x03\x02\x02\x02\xE1\xDF\x03\x02\x02\x02\xE2\xE7\x058\x1D\x02" +
		"\xE3\xE4\t\x03\x02\x02\xE4\xE6\x058\x1D\x02\xE5\xE3\x03\x02\x02\x02\xE6" +
		"\xE9\x03\x02\x02\x02\xE7\xE5\x03\x02\x02\x02\xE7\xE8\x03\x02\x02\x02\xE8" +
		"7\x03\x02\x02\x02\xE9\xE7\x03\x02\x02\x02\xEA\u010A\x05D#\x02\xEB\u010A" +
		"\x05<\x1F\x02\xEC\u010A\x05> \x02\xED\u010A\x05B\"\x02\xEE\u010A\x05@" +
		"!\x02\xEF\xF0\x07\x06\x02\x02\xF0\xF1\x054\x1B\x02\xF1\xF2\x07\x07\x02" +
		"\x02\xF2\u010A\x03\x02\x02\x02\xF3\xF6\x05D#\x02\xF4\xF6\x05B\"\x02\xF5" +
		"\xF3\x03\x02\x02\x02\xF5\xF4\x03\x02\x02\x02\xF5\xF6\x03\x02\x02\x02\xF6" +
		"\xF7\x03\x02\x02\x02\xF7\xF8\x07\x0F\x02\x02\xF8\xF9\x054\x1B\x02\xF9" +
		"\xFA\x07\x10\x02\x02\xFA\u010A\x03\x02\x02\x02\xFB\xFC\x05:\x1E\x02\xFC" +
		"\xFD\x054\x1B\x02\xFD\u010A\x03\x02\x02\x02\xFE\xFF\x07!\x02\x02\xFF\u010A" +
		"\x054\x1B\x02\u0100\u0101\x07\"\x02\x02\u0101\u010A\x054\x1B\x02\u0102" +
		"\u0103\x07&\x02\x02\u0103\u010A\x054\x1B\x02\u0104\u0105\x05> \x02\u0105" +
		"\u0106\x07\x04\x02\x02\u0106\u0107\x03\x02\x02\x02\u0107\u0108\x054\x1B" +
		"\x02\u0108\u010A\x03\x02\x02\x02\u0109\xEA\x03\x02\x02\x02\u0109\xEB\x03" +
		"\x02\x02\x02\u0109\xEC\x03\x02\x02\x02\u0109\xED\x03\x02\x02\x02\u0109" +
		"\xEE\x03\x02\x02\x02\u0109\xEF\x03\x02\x02\x02\u0109\xF5\x03\x02\x02\x02" +
		"\u0109\xFB\x03\x02\x02\x02\u0109\xFE\x03\x02\x02\x02\u0109\u0100\x03\x02" +
		"\x02\x02\u0109\u0102\x03\x02\x02\x02\u0109\u0104\x03\x02\x02\x02\u010A" +
		"9\x03\x02\x02\x02\u010B\u010D\t\x04\x02\x02\u010C\u010B\x03\x02\x02\x02" +
		"\u010C\u010D\x03\x02\x02\x02\u010D\u010E\x03\x02\x02\x02\u010E\u010F\x07" +
		" \x02\x02\u010F;\x03\x02\x02\x02\u0110\u0111\x07+\x02\x02\u0111=\x03\x02" +
		"\x02\x02\u0112\u0113\x07(\x02\x02\u0113?\x03\x02\x02\x02\u0114\u0115\x07" +
		"/\x02\x02\u0115A\x03\x02\x02\x02\u0116\u0117\x07-\x02\x02\u0117C\x03\x02" +
		"\x02\x02\u0118\u011A\x07,\x02\x02\u0119\u0118\x03\x02\x02\x02\u0119\u011A" +
		"\x03\x02\x02\x02\u011A\u011B\x03\x02\x02\x02\u011B\u011C\x07.\x02\x02" +
		"\u011CE\x03\x02\x02\x02\u011D\u011E\x07)\x02\x02\u011EG\x03\x02\x02\x02" +
		"\u011F\u0120\x07*\x02\x02\u0120I\x03\x02\x02\x02\u0121\u0122\x07\'\x02" +
		"\x02\u0122K\x03\x02\x02\x02\x1AQX\\`cfjn\x80\x83\x89\x8F\x96\x9A\xB2\xB9" +
		"\xC1\xD5\xDF\xE7\xF5\u0109\u010C\u0119";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!asm8086Parser.__ATN) {
			asm8086Parser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(asm8086Parser._serializedATN));
		}

		return asm8086Parser.__ATN;
	}

}

export class ProgContext extends ParserRuleContext {
	public line(): LineContext[];
	public line(i: number): LineContext;
	public line(i?: number): LineContext | LineContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LineContext);
		} else {
			return this.getRuleContext(i, LineContext);
		}
	}
	public EOL(): TerminalNode[];
	public EOL(i: number): TerminalNode;
	public EOL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(asm8086Parser.EOL);
		} else {
			return this.getToken(asm8086Parser.EOL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return asm8086Parser.RULE_prog; }
	// @Override
	public enterRule(listener: asm8086Listener): void {
		if (listener.enterProg) {
			listener.enterProg(this);
		}
	}
	// @Override
	public exitRule(listener: asm8086Listener): void {
		if (listener.exitProg) {
			listener.exitProg(this);
		}
	}
	// @Override
	public accept<Result>(visitor: asm8086Visitor<Result>): Result {
		if (visitor.visitProg) {
			return visitor.visitProg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LineContext extends ParserRuleContext {
	public lbl(): LblContext | undefined {
		return this.tryGetRuleContext(0, LblContext);
	}
	public assemblerdirective(): AssemblerdirectiveContext | undefined {
		return this.tryGetRuleContext(0, AssemblerdirectiveContext);
	}
	public instruction(): InstructionContext | undefined {
		return this.tryGetRuleContext(0, InstructionContext);
	}
	public comment(): CommentContext | undefined {
		return this.tryGetRuleContext(0, CommentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return asm8086Parser.RULE_line; }
	// @Override
	public enterRule(listener: asm8086Listener): void {
		if (listener.enterLine) {
			listener.enterLine(this);
		}
	}
	// @Override
	public exitRule(listener: asm8086Listener): void {
		if (listener.exitLine) {
			listener.exitLine(this);
		}
	}
	// @Override
	public accept<Result>(visitor: asm8086Visitor<Result>): Result {
		if (visitor.visitLine) {
			return visitor.visitLine(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InstructionContext extends ParserRuleContext {
	public opcode(): OpcodeContext {
		return this.getRuleContext(0, OpcodeContext);
	}
	public rep(): RepContext | undefined {
		return this.tryGetRuleContext(0, RepContext);
	}
	public expressionlist(): ExpressionlistContext | undefined {
		return this.tryGetRuleContext(0, ExpressionlistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return asm8086Parser.RULE_instruction; }
	// @Override
	public enterRule(listener: asm8086Listener): void {
		if (listener.enterInstruction) {
			listener.enterInstruction(this);
		}
	}
	// @Override
	public exitRule(listener: asm8086Listener): void {
		if (listener.exitInstruction) {
			listener.exitInstruction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: asm8086Visitor<Result>): Result {
		if (visitor.visitInstruction) {
			return visitor.visitInstruction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LblContext extends ParserRuleContext {
	public label(): LabelContext {
		return this.getRuleContext(0, LabelContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return asm8086Parser.RULE_lbl; }
	// @Override
	public enterRule(listener: asm8086Listener): void {
		if (listener.enterLbl) {
			listener.enterLbl(this);
		}
	}
	// @Override
	public exitRule(listener: asm8086Listener): void {
		if (listener.exitLbl) {
			listener.exitLbl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: asm8086Visitor<Result>): Result {
		if (visitor.visitLbl) {
			return visitor.visitLbl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssemblerdirectiveContext extends ParserRuleContext {
	public org(): OrgContext | undefined {
		return this.tryGetRuleContext(0, OrgContext);
	}
	public end(): EndContext | undefined {
		return this.tryGetRuleContext(0, EndContext);
	}
	public if_(): If_Context | undefined {
		return this.tryGetRuleContext(0, If_Context);
	}
	public endif(): EndifContext | undefined {
		return this.tryGetRuleContext(0, EndifContext);
	}
	public equ(): EquContext | undefined {
		return this.tryGetRuleContext(0, EquContext);
	}
	public db(): DbContext | undefined {
		return this.tryGetRuleContext(0, DbContext);
	}
	public dw(): DwContext | undefined {
		return this.tryGetRuleContext(0, DwContext);
	}
	public cseg(): CsegContext | undefined {
		return this.tryGetRuleContext(0, CsegContext);
	}
	public dd(): DdContext | undefined {
		return this.tryGetRuleContext(0, DdContext);
	}
	public dseg(): DsegContext | undefined {
		return this.tryGetRuleContext(0, DsegContext);
	}
	public title(): TitleContext | undefined {
		return this.tryGetRuleContext(0, TitleContext);
	}
	public include(): IncludeContext | undefined {
		return this.tryGetRuleContext(0, IncludeContext);
	}
	public rw(): RwContext | undefined {
		return this.tryGetRuleContext(0, RwContext);
	}
	public rb(): RbContext | undefined {
		return this.tryGetRuleContext(0, RbContext);
	}
	public rs(): RsContext | undefined {
		return this.tryGetRuleContext(0, RsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return asm8086Parser.RULE_assemblerdirective; }
	// @Override
	public enterRule(listener: asm8086Listener): void {
		if (listener.enterAssemblerdirective) {
			listener.enterAssemblerdirective(this);
		}
	}
	// @Override
	public exitRule(listener: asm8086Listener): void {
		if (listener.exitAssemblerdirective) {
			listener.exitAssemblerdirective(this);
		}
	}
	// @Override
	public accept<Result>(visitor: asm8086Visitor<Result>): Result {
		if (visitor.visitAssemblerdirective) {
			return visitor.visitAssemblerdirective(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RwContext extends ParserRuleContext {
	public RW(): TerminalNode { return this.getToken(asm8086Parser.RW, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public name(): NameContext | undefined {
		return this.tryGetRuleContext(0, NameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return asm8086Parser.RULE_rw; }
	// @Override
	public enterRule(listener: asm8086Listener): void {
		if (listener.enterRw) {
			listener.enterRw(this);
		}
	}
	// @Override
	public exitRule(listener: asm8086Listener): void {
		if (listener.exitRw) {
			listener.exitRw(this);
		}
	}
	// @Override
	public accept<Result>(visitor: asm8086Visitor<Result>): Result {
		if (visitor.visitRw) {
			return visitor.visitRw(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RbContext extends ParserRuleContext {
	public RB(): TerminalNode { return this.getToken(asm8086Parser.RB, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public name(): NameContext | undefined {
		return this.tryGetRuleContext(0, NameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return asm8086Parser.RULE_rb; }
	// @Override
	public enterRule(listener: asm8086Listener): void {
		if (listener.enterRb) {
			listener.enterRb(this);
		}
	}
	// @Override
	public exitRule(listener: asm8086Listener): void {
		if (listener.exitRb) {
			listener.exitRb(this);
		}
	}
	// @Override
	public accept<Result>(visitor: asm8086Visitor<Result>): Result {
		if (visitor.visitRb) {
			return visitor.visitRb(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RsContext extends ParserRuleContext {
	public RS(): TerminalNode { return this.getToken(asm8086Parser.RS, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public name(): NameContext | undefined {
		return this.tryGetRuleContext(0, NameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return asm8086Parser.RULE_rs; }
	// @Override
	public enterRule(listener: asm8086Listener): void {
		if (listener.enterRs) {
			listener.enterRs(this);
		}
	}
	// @Override
	public exitRule(listener: asm8086Listener): void {
		if (listener.exitRs) {
			listener.exitRs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: asm8086Visitor<Result>): Result {
		if (visitor.visitRs) {
			return visitor.visitRs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CsegContext extends ParserRuleContext {
	public CSEG(): TerminalNode { return this.getToken(asm8086Parser.CSEG, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return asm8086Parser.RULE_cseg; }
	// @Override
	public enterRule(listener: asm8086Listener): void {
		if (listener.enterCseg) {
			listener.enterCseg(this);
		}
	}
	// @Override
	public exitRule(listener: asm8086Listener): void {
		if (listener.exitCseg) {
			listener.exitCseg(this);
		}
	}
	// @Override
	public accept<Result>(visitor: asm8086Visitor<Result>): Result {
		if (visitor.visitCseg) {
			return visitor.visitCseg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DsegContext extends ParserRuleContext {
	public DSEG(): TerminalNode { return this.getToken(asm8086Parser.DSEG, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return asm8086Parser.RULE_dseg; }
	// @Override
	public enterRule(listener: asm8086Listener): void {
		if (listener.enterDseg) {
			listener.enterDseg(this);
		}
	}
	// @Override
	public exitRule(listener: asm8086Listener): void {
		if (listener.exitDseg) {
			listener.exitDseg(this);
		}
	}
	// @Override
	public accept<Result>(visitor: asm8086Visitor<Result>): Result {
		if (visitor.visitDseg) {
			return visitor.visitDseg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DwContext extends ParserRuleContext {
	public DW(): TerminalNode { return this.getToken(asm8086Parser.DW, 0); }
	public expressionlist(): ExpressionlistContext {
		return this.getRuleContext(0, ExpressionlistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return asm8086Parser.RULE_dw; }
	// @Override
	public enterRule(listener: asm8086Listener): void {
		if (listener.enterDw) {
			listener.enterDw(this);
		}
	}
	// @Override
	public exitRule(listener: asm8086Listener): void {
		if (listener.exitDw) {
			listener.exitDw(this);
		}
	}
	// @Override
	public accept<Result>(visitor: asm8086Visitor<Result>): Result {
		if (visitor.visitDw) {
			return visitor.visitDw(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DbContext extends ParserRuleContext {
	public DB(): TerminalNode { return this.getToken(asm8086Parser.DB, 0); }
	public expressionlist(): ExpressionlistContext {
		return this.getRuleContext(0, ExpressionlistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return asm8086Parser.RULE_db; }
	// @Override
	public enterRule(listener: asm8086Listener): void {
		if (listener.enterDb) {
			listener.enterDb(this);
		}
	}
	// @Override
	public exitRule(listener: asm8086Listener): void {
		if (listener.exitDb) {
			listener.exitDb(this);
		}
	}
	// @Override
	public accept<Result>(visitor: asm8086Visitor<Result>): Result {
		if (visitor.visitDb) {
			return visitor.visitDb(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DdContext extends ParserRuleContext {
	public DD(): TerminalNode { return this.getToken(asm8086Parser.DD, 0); }
	public expressionlist(): ExpressionlistContext {
		return this.getRuleContext(0, ExpressionlistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return asm8086Parser.RULE_dd; }
	// @Override
	public enterRule(listener: asm8086Listener): void {
		if (listener.enterDd) {
			listener.enterDd(this);
		}
	}
	// @Override
	public exitRule(listener: asm8086Listener): void {
		if (listener.exitDd) {
			listener.exitDd(this);
		}
	}
	// @Override
	public accept<Result>(visitor: asm8086Visitor<Result>): Result {
		if (visitor.visitDd) {
			return visitor.visitDd(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EquContext extends ParserRuleContext {
	public name(): NameContext {
		return this.getRuleContext(0, NameContext);
	}
	public EQU(): TerminalNode { return this.getToken(asm8086Parser.EQU, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return asm8086Parser.RULE_equ; }
	// @Override
	public enterRule(listener: asm8086Listener): void {
		if (listener.enterEqu) {
			listener.enterEqu(this);
		}
	}
	// @Override
	public exitRule(listener: asm8086Listener): void {
		if (listener.exitEqu) {
			listener.exitEqu(this);
		}
	}
	// @Override
	public accept<Result>(visitor: asm8086Visitor<Result>): Result {
		if (visitor.visitEqu) {
			return visitor.visitEqu(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class If_Context extends ParserRuleContext {
	public IF(): TerminalNode { return this.getToken(asm8086Parser.IF, 0); }
	public assemblerexpression(): AssemblerexpressionContext {
		return this.getRuleContext(0, AssemblerexpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return asm8086Parser.RULE_if_; }
	// @Override
	public enterRule(listener: asm8086Listener): void {
		if (listener.enterIf_) {
			listener.enterIf_(this);
		}
	}
	// @Override
	public exitRule(listener: asm8086Listener): void {
		if (listener.exitIf_) {
			listener.exitIf_(this);
		}
	}
	// @Override
	public accept<Result>(visitor: asm8086Visitor<Result>): Result {
		if (visitor.visitIf_) {
			return visitor.visitIf_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssemblerexpressionContext extends ParserRuleContext {
	public assemblerterm(): AssemblertermContext[];
	public assemblerterm(i: number): AssemblertermContext;
	public assemblerterm(i?: number): AssemblertermContext | AssemblertermContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AssemblertermContext);
		} else {
			return this.getRuleContext(i, AssemblertermContext);
		}
	}
	public assemblerlogical(): AssemblerlogicalContext[];
	public assemblerlogical(i: number): AssemblerlogicalContext;
	public assemblerlogical(i?: number): AssemblerlogicalContext | AssemblerlogicalContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AssemblerlogicalContext);
		} else {
			return this.getRuleContext(i, AssemblerlogicalContext);
		}
	}
	public assemblerexpression(): AssemblerexpressionContext | undefined {
		return this.tryGetRuleContext(0, AssemblerexpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return asm8086Parser.RULE_assemblerexpression; }
	// @Override
	public enterRule(listener: asm8086Listener): void {
		if (listener.enterAssemblerexpression) {
			listener.enterAssemblerexpression(this);
		}
	}
	// @Override
	public exitRule(listener: asm8086Listener): void {
		if (listener.exitAssemblerexpression) {
			listener.exitAssemblerexpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: asm8086Visitor<Result>): Result {
		if (visitor.visitAssemblerexpression) {
			return visitor.visitAssemblerexpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssemblerlogicalContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return asm8086Parser.RULE_assemblerlogical; }
	// @Override
	public enterRule(listener: asm8086Listener): void {
		if (listener.enterAssemblerlogical) {
			listener.enterAssemblerlogical(this);
		}
	}
	// @Override
	public exitRule(listener: asm8086Listener): void {
		if (listener.exitAssemblerlogical) {
			listener.exitAssemblerlogical(this);
		}
	}
	// @Override
	public accept<Result>(visitor: asm8086Visitor<Result>): Result {
		if (visitor.visitAssemblerlogical) {
			return visitor.visitAssemblerlogical(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssemblertermContext extends ParserRuleContext {
	public name(): NameContext | undefined {
		return this.tryGetRuleContext(0, NameContext);
	}
	public number(): NumberContext | undefined {
		return this.tryGetRuleContext(0, NumberContext);
	}
	public NOT(): TerminalNode | undefined { return this.tryGetToken(asm8086Parser.NOT, 0); }
	public assemblerterm(): AssemblertermContext | undefined {
		return this.tryGetRuleContext(0, AssemblertermContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return asm8086Parser.RULE_assemblerterm; }
	// @Override
	public enterRule(listener: asm8086Listener): void {
		if (listener.enterAssemblerterm) {
			listener.enterAssemblerterm(this);
		}
	}
	// @Override
	public exitRule(listener: asm8086Listener): void {
		if (listener.exitAssemblerterm) {
			listener.exitAssemblerterm(this);
		}
	}
	// @Override
	public accept<Result>(visitor: asm8086Visitor<Result>): Result {
		if (visitor.visitAssemblerterm) {
			return visitor.visitAssemblerterm(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EndifContext extends ParserRuleContext {
	public ENDIF(): TerminalNode { return this.getToken(asm8086Parser.ENDIF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return asm8086Parser.RULE_endif; }
	// @Override
	public enterRule(listener: asm8086Listener): void {
		if (listener.enterEndif) {
			listener.enterEndif(this);
		}
	}
	// @Override
	public exitRule(listener: asm8086Listener): void {
		if (listener.exitEndif) {
			listener.exitEndif(this);
		}
	}
	// @Override
	public accept<Result>(visitor: asm8086Visitor<Result>): Result {
		if (visitor.visitEndif) {
			return visitor.visitEndif(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EndContext extends ParserRuleContext {
	public END(): TerminalNode { return this.getToken(asm8086Parser.END, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return asm8086Parser.RULE_end; }
	// @Override
	public enterRule(listener: asm8086Listener): void {
		if (listener.enterEnd) {
			listener.enterEnd(this);
		}
	}
	// @Override
	public exitRule(listener: asm8086Listener): void {
		if (listener.exitEnd) {
			listener.exitEnd(this);
		}
	}
	// @Override
	public accept<Result>(visitor: asm8086Visitor<Result>): Result {
		if (visitor.visitEnd) {
			return visitor.visitEnd(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OrgContext extends ParserRuleContext {
	public ORG(): TerminalNode { return this.getToken(asm8086Parser.ORG, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return asm8086Parser.RULE_org; }
	// @Override
	public enterRule(listener: asm8086Listener): void {
		if (listener.enterOrg) {
			listener.enterOrg(this);
		}
	}
	// @Override
	public exitRule(listener: asm8086Listener): void {
		if (listener.exitOrg) {
			listener.exitOrg(this);
		}
	}
	// @Override
	public accept<Result>(visitor: asm8086Visitor<Result>): Result {
		if (visitor.visitOrg) {
			return visitor.visitOrg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TitleContext extends ParserRuleContext {
	public TITLE(): TerminalNode { return this.getToken(asm8086Parser.TITLE, 0); }
	public string(): StringContext {
		return this.getRuleContext(0, StringContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return asm8086Parser.RULE_title; }
	// @Override
	public enterRule(listener: asm8086Listener): void {
		if (listener.enterTitle) {
			listener.enterTitle(this);
		}
	}
	// @Override
	public exitRule(listener: asm8086Listener): void {
		if (listener.exitTitle) {
			listener.exitTitle(this);
		}
	}
	// @Override
	public accept<Result>(visitor: asm8086Visitor<Result>): Result {
		if (visitor.visitTitle) {
			return visitor.visitTitle(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IncludeContext extends ParserRuleContext {
	public INCLUDE(): TerminalNode { return this.getToken(asm8086Parser.INCLUDE, 0); }
	public name(): NameContext {
		return this.getRuleContext(0, NameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return asm8086Parser.RULE_include; }
	// @Override
	public enterRule(listener: asm8086Listener): void {
		if (listener.enterInclude) {
			listener.enterInclude(this);
		}
	}
	// @Override
	public exitRule(listener: asm8086Listener): void {
		if (listener.exitInclude) {
			listener.exitInclude(this);
		}
	}
	// @Override
	public accept<Result>(visitor: asm8086Visitor<Result>): Result {
		if (visitor.visitInclude) {
			return visitor.visitInclude(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionlistContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return asm8086Parser.RULE_expressionlist; }
	// @Override
	public enterRule(listener: asm8086Listener): void {
		if (listener.enterExpressionlist) {
			listener.enterExpressionlist(this);
		}
	}
	// @Override
	public exitRule(listener: asm8086Listener): void {
		if (listener.exitExpressionlist) {
			listener.exitExpressionlist(this);
		}
	}
	// @Override
	public accept<Result>(visitor: asm8086Visitor<Result>): Result {
		if (visitor.visitExpressionlist) {
			return visitor.visitExpressionlist(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LabelContext extends ParserRuleContext {
	public name(): NameContext {
		return this.getRuleContext(0, NameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return asm8086Parser.RULE_label; }
	// @Override
	public enterRule(listener: asm8086Listener): void {
		if (listener.enterLabel) {
			listener.enterLabel(this);
		}
	}
	// @Override
	public exitRule(listener: asm8086Listener): void {
		if (listener.exitLabel) {
			listener.exitLabel(this);
		}
	}
	// @Override
	public accept<Result>(visitor: asm8086Visitor<Result>): Result {
		if (visitor.visitLabel) {
			return visitor.visitLabel(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public multiplyingExpression(): MultiplyingExpressionContext[];
	public multiplyingExpression(i: number): MultiplyingExpressionContext;
	public multiplyingExpression(i?: number): MultiplyingExpressionContext | MultiplyingExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MultiplyingExpressionContext);
		} else {
			return this.getRuleContext(i, MultiplyingExpressionContext);
		}
	}
	public SIGN(): TerminalNode[];
	public SIGN(i: number): TerminalNode;
	public SIGN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(asm8086Parser.SIGN);
		} else {
			return this.getToken(asm8086Parser.SIGN, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return asm8086Parser.RULE_expression; }
	// @Override
	public enterRule(listener: asm8086Listener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: asm8086Listener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: asm8086Visitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MultiplyingExpressionContext extends ParserRuleContext {
	public argument(): ArgumentContext[];
	public argument(i: number): ArgumentContext;
	public argument(i?: number): ArgumentContext | ArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArgumentContext);
		} else {
			return this.getRuleContext(i, ArgumentContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return asm8086Parser.RULE_multiplyingExpression; }
	// @Override
	public enterRule(listener: asm8086Listener): void {
		if (listener.enterMultiplyingExpression) {
			listener.enterMultiplyingExpression(this);
		}
	}
	// @Override
	public exitRule(listener: asm8086Listener): void {
		if (listener.exitMultiplyingExpression) {
			listener.exitMultiplyingExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: asm8086Visitor<Result>): Result {
		if (visitor.visitMultiplyingExpression) {
			return visitor.visitMultiplyingExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgumentContext extends ParserRuleContext {
	public number(): NumberContext | undefined {
		return this.tryGetRuleContext(0, NumberContext);
	}
	public dollar(): DollarContext | undefined {
		return this.tryGetRuleContext(0, DollarContext);
	}
	public register_(): Register_Context | undefined {
		return this.tryGetRuleContext(0, Register_Context);
	}
	public name(): NameContext | undefined {
		return this.tryGetRuleContext(0, NameContext);
	}
	public string(): StringContext | undefined {
		return this.tryGetRuleContext(0, StringContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public ptr(): PtrContext | undefined {
		return this.tryGetRuleContext(0, PtrContext);
	}
	public NOT(): TerminalNode | undefined { return this.tryGetToken(asm8086Parser.NOT, 0); }
	public OFFSET(): TerminalNode | undefined { return this.tryGetToken(asm8086Parser.OFFSET, 0); }
	public LENGTH(): TerminalNode | undefined { return this.tryGetToken(asm8086Parser.LENGTH, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return asm8086Parser.RULE_argument; }
	// @Override
	public enterRule(listener: asm8086Listener): void {
		if (listener.enterArgument) {
			listener.enterArgument(this);
		}
	}
	// @Override
	public exitRule(listener: asm8086Listener): void {
		if (listener.exitArgument) {
			listener.exitArgument(this);
		}
	}
	// @Override
	public accept<Result>(visitor: asm8086Visitor<Result>): Result {
		if (visitor.visitArgument) {
			return visitor.visitArgument(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PtrContext extends ParserRuleContext {
	public PTR(): TerminalNode { return this.getToken(asm8086Parser.PTR, 0); }
	public BYTE(): TerminalNode | undefined { return this.tryGetToken(asm8086Parser.BYTE, 0); }
	public WORD(): TerminalNode | undefined { return this.tryGetToken(asm8086Parser.WORD, 0); }
	public DWORD(): TerminalNode | undefined { return this.tryGetToken(asm8086Parser.DWORD, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return asm8086Parser.RULE_ptr; }
	// @Override
	public enterRule(listener: asm8086Listener): void {
		if (listener.enterPtr) {
			listener.enterPtr(this);
		}
	}
	// @Override
	public exitRule(listener: asm8086Listener): void {
		if (listener.exitPtr) {
			listener.exitPtr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: asm8086Visitor<Result>): Result {
		if (visitor.visitPtr) {
			return visitor.visitPtr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DollarContext extends ParserRuleContext {
	public DOLLAR(): TerminalNode { return this.getToken(asm8086Parser.DOLLAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return asm8086Parser.RULE_dollar; }
	// @Override
	public enterRule(listener: asm8086Listener): void {
		if (listener.enterDollar) {
			listener.enterDollar(this);
		}
	}
	// @Override
	public exitRule(listener: asm8086Listener): void {
		if (listener.exitDollar) {
			listener.exitDollar(this);
		}
	}
	// @Override
	public accept<Result>(visitor: asm8086Visitor<Result>): Result {
		if (visitor.visitDollar) {
			return visitor.visitDollar(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Register_Context extends ParserRuleContext {
	public REGISTER(): TerminalNode { return this.getToken(asm8086Parser.REGISTER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return asm8086Parser.RULE_register_; }
	// @Override
	public enterRule(listener: asm8086Listener): void {
		if (listener.enterRegister_) {
			listener.enterRegister_(this);
		}
	}
	// @Override
	public exitRule(listener: asm8086Listener): void {
		if (listener.exitRegister_) {
			listener.exitRegister_(this);
		}
	}
	// @Override
	public accept<Result>(visitor: asm8086Visitor<Result>): Result {
		if (visitor.visitRegister_) {
			return visitor.visitRegister_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StringContext extends ParserRuleContext {
	public STRING(): TerminalNode { return this.getToken(asm8086Parser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return asm8086Parser.RULE_string; }
	// @Override
	public enterRule(listener: asm8086Listener): void {
		if (listener.enterString) {
			listener.enterString(this);
		}
	}
	// @Override
	public exitRule(listener: asm8086Listener): void {
		if (listener.exitString) {
			listener.exitString(this);
		}
	}
	// @Override
	public accept<Result>(visitor: asm8086Visitor<Result>): Result {
		if (visitor.visitString) {
			return visitor.visitString(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NameContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(asm8086Parser.NAME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return asm8086Parser.RULE_name; }
	// @Override
	public enterRule(listener: asm8086Listener): void {
		if (listener.enterName) {
			listener.enterName(this);
		}
	}
	// @Override
	public exitRule(listener: asm8086Listener): void {
		if (listener.exitName) {
			listener.exitName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: asm8086Visitor<Result>): Result {
		if (visitor.visitName) {
			return visitor.visitName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NumberContext extends ParserRuleContext {
	public NUMBER(): TerminalNode { return this.getToken(asm8086Parser.NUMBER, 0); }
	public SIGN(): TerminalNode | undefined { return this.tryGetToken(asm8086Parser.SIGN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return asm8086Parser.RULE_number; }
	// @Override
	public enterRule(listener: asm8086Listener): void {
		if (listener.enterNumber) {
			listener.enterNumber(this);
		}
	}
	// @Override
	public exitRule(listener: asm8086Listener): void {
		if (listener.exitNumber) {
			listener.exitNumber(this);
		}
	}
	// @Override
	public accept<Result>(visitor: asm8086Visitor<Result>): Result {
		if (visitor.visitNumber) {
			return visitor.visitNumber(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OpcodeContext extends ParserRuleContext {
	public OPCODE(): TerminalNode { return this.getToken(asm8086Parser.OPCODE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return asm8086Parser.RULE_opcode; }
	// @Override
	public enterRule(listener: asm8086Listener): void {
		if (listener.enterOpcode) {
			listener.enterOpcode(this);
		}
	}
	// @Override
	public exitRule(listener: asm8086Listener): void {
		if (listener.exitOpcode) {
			listener.exitOpcode(this);
		}
	}
	// @Override
	public accept<Result>(visitor: asm8086Visitor<Result>): Result {
		if (visitor.visitOpcode) {
			return visitor.visitOpcode(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RepContext extends ParserRuleContext {
	public REP(): TerminalNode { return this.getToken(asm8086Parser.REP, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return asm8086Parser.RULE_rep; }
	// @Override
	public enterRule(listener: asm8086Listener): void {
		if (listener.enterRep) {
			listener.enterRep(this);
		}
	}
	// @Override
	public exitRule(listener: asm8086Listener): void {
		if (listener.exitRep) {
			listener.exitRep(this);
		}
	}
	// @Override
	public accept<Result>(visitor: asm8086Visitor<Result>): Result {
		if (visitor.visitRep) {
			return visitor.visitRep(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CommentContext extends ParserRuleContext {
	public COMMENT(): TerminalNode { return this.getToken(asm8086Parser.COMMENT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return asm8086Parser.RULE_comment; }
	// @Override
	public enterRule(listener: asm8086Listener): void {
		if (listener.enterComment) {
			listener.enterComment(this);
		}
	}
	// @Override
	public exitRule(listener: asm8086Listener): void {
		if (listener.exitComment) {
			listener.exitComment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: asm8086Visitor<Result>): Result {
		if (visitor.visitComment) {
			return visitor.visitComment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


