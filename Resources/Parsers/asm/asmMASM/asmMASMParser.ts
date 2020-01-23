// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/asm/asmMASM/asmMASM.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { asmMASMListener } from "./asmMASMListener";

export class asmMASMParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly ORG = 9;
	public static readonly ENDIF = 10;
	public static readonly IF = 11;
	public static readonly EQU = 12;
	public static readonly DW = 13;
	public static readonly DB = 14;
	public static readonly DM = 15;
	public static readonly DS = 16;
	public static readonly PUT = 17;
	public static readonly NOT = 18;
	public static readonly REGISTER = 19;
	public static readonly OPCODE = 20;
	public static readonly REP = 21;
	public static readonly ASSIGN = 22;
	public static readonly OFFSET = 23;
	public static readonly DOLLAR = 24;
	public static readonly QUES = 25;
	public static readonly SEGMENT = 26;
	public static readonly SEGMENTEND = 27;
	public static readonly GROUP = 28;
	public static readonly BYTE = 29;
	public static readonly SBYTE = 30;
	public static readonly WORD = 31;
	public static readonly DWORD = 32;
	public static readonly PARA = 33;
	public static readonly PAGE = 34;
	public static readonly ALIGN = 35;
	public static readonly LABEL = 36;
	public static readonly DUP = 37;
	public static readonly ASSUME = 38;
	public static readonly SIGN = 39;
	public static readonly EXTERN = 40;
	public static readonly MASMDIRECTIVE = 41;
	public static readonly NAME = 42;
	public static readonly NUMBER = 43;
	public static readonly STRING1 = 44;
	public static readonly STRING2 = 45;
	public static readonly COMMENT = 46;
	public static readonly EOL = 47;
	public static readonly WS = 48;
	public static readonly RULE_prog = 0;
	public static readonly RULE_line = 1;
	public static readonly RULE_instruction = 2;
	public static readonly RULE_lbl = 3;
	public static readonly RULE_assemblerdirective = 4;
	public static readonly RULE_masmdirectives = 5;
	public static readonly RULE_masmdirective = 6;
	public static readonly RULE_assume = 7;
	public static readonly RULE_label_ = 8;
	public static readonly RULE_type = 9;
	public static readonly RULE_group = 10;
	public static readonly RULE_segment = 11;
	public static readonly RULE_endsegment = 12;
	public static readonly RULE_align = 13;
	public static readonly RULE_assign = 14;
	public static readonly RULE_put = 15;
	public static readonly RULE_ds = 16;
	public static readonly RULE_dw = 17;
	public static readonly RULE_db = 18;
	public static readonly RULE_dm = 19;
	public static readonly RULE_dup = 20;
	public static readonly RULE_equ = 21;
	public static readonly RULE_extern = 22;
	public static readonly RULE_if_ = 23;
	public static readonly RULE_endif = 24;
	public static readonly RULE_org = 25;
	public static readonly RULE_expressionlist = 26;
	public static readonly RULE_label = 27;
	public static readonly RULE_expression = 28;
	public static readonly RULE_multiplyingExpression = 29;
	public static readonly RULE_argument = 30;
	public static readonly RULE_gross = 31;
	public static readonly RULE_grossrawassemblerdirective = 32;
	public static readonly RULE_dollar = 33;
	public static readonly RULE_ques = 34;
	public static readonly RULE_register_ = 35;
	public static readonly RULE_string = 36;
	public static readonly RULE_name = 37;
	public static readonly RULE_number = 38;
	public static readonly RULE_opcode = 39;
	public static readonly RULE_rep = 40;
	public static readonly RULE_comment = 41;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"prog", "line", "instruction", "lbl", "assemblerdirective", "masmdirectives", 
		"masmdirective", "assume", "label_", "type", "group", "segment", "endsegment", 
		"align", "assign", "put", "ds", "dw", "db", "dm", "dup", "equ", "extern", 
		"if_", "endif", "org", "expressionlist", "label", "expression", "multiplyingExpression", 
		"argument", "gross", "grossrawassemblerdirective", "dollar", "ques", "register_", 
		"string", "name", "number", "opcode", "rep", "comment",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "':'", "','", "'('", "')'", "'*'", "'/'", "'['", "']'", undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, "'='", undefined, 
		"'$'", "'?'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, "ORG", "ENDIF", "IF", "EQU", "DW", "DB", "DM", "DS", 
		"PUT", "NOT", "REGISTER", "OPCODE", "REP", "ASSIGN", "OFFSET", "DOLLAR", 
		"QUES", "SEGMENT", "SEGMENTEND", "GROUP", "BYTE", "SBYTE", "WORD", "DWORD", 
		"PARA", "PAGE", "ALIGN", "LABEL", "DUP", "ASSUME", "SIGN", "EXTERN", "MASMDIRECTIVE", 
		"NAME", "NUMBER", "STRING1", "STRING2", "COMMENT", "EOL", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(asmMASMParser._LITERAL_NAMES, asmMASMParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return asmMASMParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "asmMASM.g4"; }

	// @Override
	public get ruleNames(): string[] { return asmMASMParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return asmMASMParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(asmMASMParser._ATN, this);
	}
	// @RuleVersion(0)
	public prog(): ProgContext {
		let _localctx: ProgContext = new ProgContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, asmMASMParser.RULE_prog);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 89;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << asmMASMParser.T__2) | (1 << asmMASMParser.T__6) | (1 << asmMASMParser.ORG) | (1 << asmMASMParser.ENDIF) | (1 << asmMASMParser.IF) | (1 << asmMASMParser.EQU) | (1 << asmMASMParser.DW) | (1 << asmMASMParser.DB) | (1 << asmMASMParser.DM) | (1 << asmMASMParser.DS) | (1 << asmMASMParser.PUT) | (1 << asmMASMParser.NOT) | (1 << asmMASMParser.REGISTER) | (1 << asmMASMParser.OPCODE) | (1 << asmMASMParser.REP) | (1 << asmMASMParser.OFFSET) | (1 << asmMASMParser.DOLLAR) | (1 << asmMASMParser.QUES) | (1 << asmMASMParser.BYTE) | (1 << asmMASMParser.SBYTE) | (1 << asmMASMParser.WORD))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (asmMASMParser.DWORD - 32)) | (1 << (asmMASMParser.ASSUME - 32)) | (1 << (asmMASMParser.SIGN - 32)) | (1 << (asmMASMParser.EXTERN - 32)) | (1 << (asmMASMParser.MASMDIRECTIVE - 32)) | (1 << (asmMASMParser.NAME - 32)) | (1 << (asmMASMParser.NUMBER - 32)) | (1 << (asmMASMParser.STRING1 - 32)) | (1 << (asmMASMParser.STRING2 - 32)) | (1 << (asmMASMParser.COMMENT - 32)) | (1 << (asmMASMParser.EOL - 32)))) !== 0)) {
				{
				{
				this.state = 84;
				this.line();
				this.state = 85;
				this.match(asmMASMParser.EOL);
				}
				}
				this.state = 91;
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
		this.enterRule(_localctx, 2, asmMASMParser.RULE_line);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 93;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				{
				this.state = 92;
				this.lbl();
				}
				break;
			}
			this.state = 98;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				{
				this.state = 95;
				this.assemblerdirective();
				}
				break;

			case 2:
				{
				this.state = 96;
				this.masmdirectives();
				}
				break;

			case 3:
				{
				this.state = 97;
				this.instruction();
				}
				break;
			}
			this.state = 101;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === asmMASMParser.COMMENT) {
				{
				this.state = 100;
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
		this.enterRule(_localctx, 4, asmMASMParser.RULE_instruction);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 104;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === asmMASMParser.REP) {
				{
				this.state = 103;
				this.rep();
				}
			}

			this.state = 107;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				{
				this.state = 106;
				this.opcode();
				}
				break;
			}
			this.state = 110;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << asmMASMParser.T__2) | (1 << asmMASMParser.T__6) | (1 << asmMASMParser.ORG) | (1 << asmMASMParser.ENDIF) | (1 << asmMASMParser.IF) | (1 << asmMASMParser.EQU) | (1 << asmMASMParser.PUT) | (1 << asmMASMParser.NOT) | (1 << asmMASMParser.REGISTER) | (1 << asmMASMParser.OPCODE) | (1 << asmMASMParser.OFFSET) | (1 << asmMASMParser.DOLLAR) | (1 << asmMASMParser.QUES))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (asmMASMParser.SIGN - 39)) | (1 << (asmMASMParser.NAME - 39)) | (1 << (asmMASMParser.NUMBER - 39)) | (1 << (asmMASMParser.STRING1 - 39)) | (1 << (asmMASMParser.STRING2 - 39)))) !== 0)) {
				{
				this.state = 109;
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
		this.enterRule(_localctx, 6, asmMASMParser.RULE_lbl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 112;
			this.label();
			this.state = 114;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === asmMASMParser.T__0) {
				{
				this.state = 113;
				this.match(asmMASMParser.T__0);
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
		this.enterRule(_localctx, 8, asmMASMParser.RULE_assemblerdirective);
		let _la: number;
		try {
			this.state = 138;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 116;
				this.org();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 117;
				this.if_();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 118;
				this.endif();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 119;
				this.equ();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 120;
				this.db();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 121;
				this.dw();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 122;
				this.dm();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 123;
				this.ds();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 124;
				this.put();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 125;
				this.assign();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 126;
				this.segment();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 127;
				this.endsegment();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 128;
				this.group();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 129;
				this.label_();
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 130;
				this.assume();
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 131;
				this.extern();
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				{
				this.state = 132;
				this.type();
				this.state = 134;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 133;
					this.expressionlist();
					}
					}
					this.state = 136;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << asmMASMParser.T__2) | (1 << asmMASMParser.T__6) | (1 << asmMASMParser.ORG) | (1 << asmMASMParser.ENDIF) | (1 << asmMASMParser.IF) | (1 << asmMASMParser.EQU) | (1 << asmMASMParser.PUT) | (1 << asmMASMParser.NOT) | (1 << asmMASMParser.REGISTER) | (1 << asmMASMParser.OPCODE) | (1 << asmMASMParser.OFFSET) | (1 << asmMASMParser.DOLLAR) | (1 << asmMASMParser.QUES))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (asmMASMParser.SIGN - 39)) | (1 << (asmMASMParser.NAME - 39)) | (1 << (asmMASMParser.NUMBER - 39)) | (1 << (asmMASMParser.STRING1 - 39)) | (1 << (asmMASMParser.STRING2 - 39)))) !== 0));
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
	public masmdirectives(): MasmdirectivesContext {
		let _localctx: MasmdirectivesContext = new MasmdirectivesContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, asmMASMParser.RULE_masmdirectives);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 141;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 140;
				this.masmdirective();
				}
				}
				this.state = 143;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === asmMASMParser.MASMDIRECTIVE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public masmdirective(): MasmdirectiveContext {
		let _localctx: MasmdirectiveContext = new MasmdirectiveContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, asmMASMParser.RULE_masmdirective);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 145;
			this.match(asmMASMParser.MASMDIRECTIVE);
			this.state = 147;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << asmMASMParser.T__2) | (1 << asmMASMParser.T__6) | (1 << asmMASMParser.ORG) | (1 << asmMASMParser.ENDIF) | (1 << asmMASMParser.IF) | (1 << asmMASMParser.EQU) | (1 << asmMASMParser.PUT) | (1 << asmMASMParser.NOT) | (1 << asmMASMParser.REGISTER) | (1 << asmMASMParser.OPCODE) | (1 << asmMASMParser.OFFSET) | (1 << asmMASMParser.DOLLAR) | (1 << asmMASMParser.QUES))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (asmMASMParser.SIGN - 39)) | (1 << (asmMASMParser.NAME - 39)) | (1 << (asmMASMParser.NUMBER - 39)) | (1 << (asmMASMParser.STRING1 - 39)) | (1 << (asmMASMParser.STRING2 - 39)))) !== 0)) {
				{
				this.state = 146;
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
	public assume(): AssumeContext {
		let _localctx: AssumeContext = new AssumeContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, asmMASMParser.RULE_assume);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 149;
			this.match(asmMASMParser.ASSUME);
			this.state = 150;
			this.register_();
			this.state = 151;
			this.match(asmMASMParser.T__0);
			this.state = 152;
			this.name();
			this.state = 160;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === asmMASMParser.T__1) {
				{
				{
				this.state = 153;
				this.match(asmMASMParser.T__1);
				this.state = 154;
				this.register_();
				this.state = 155;
				this.match(asmMASMParser.T__0);
				this.state = 156;
				this.name();
				}
				}
				this.state = 162;
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
	public label_(): Label_Context {
		let _localctx: Label_Context = new Label_Context(this._ctx, this.state);
		this.enterRule(_localctx, 16, asmMASMParser.RULE_label_);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 163;
			this.name();
			this.state = 164;
			this.match(asmMASMParser.LABEL);
			this.state = 165;
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
	public type(): TypeContext {
		let _localctx: TypeContext = new TypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, asmMASMParser.RULE_type);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 167;
			_la = this._input.LA(1);
			if (!(((((_la - 29)) & ~0x1F) === 0 && ((1 << (_la - 29)) & ((1 << (asmMASMParser.BYTE - 29)) | (1 << (asmMASMParser.SBYTE - 29)) | (1 << (asmMASMParser.WORD - 29)) | (1 << (asmMASMParser.DWORD - 29)))) !== 0))) {
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
	public group(): GroupContext {
		let _localctx: GroupContext = new GroupContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, asmMASMParser.RULE_group);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 169;
			this.name();
			this.state = 170;
			this.match(asmMASMParser.GROUP);
			this.state = 171;
			this.name();
			this.state = 176;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === asmMASMParser.T__1) {
				{
				{
				this.state = 172;
				this.match(asmMASMParser.T__1);
				this.state = 173;
				this.name();
				}
				}
				this.state = 178;
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
	public segment(): SegmentContext {
		let _localctx: SegmentContext = new SegmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, asmMASMParser.RULE_segment);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 179;
			this.name();
			this.state = 180;
			this.match(asmMASMParser.SEGMENT);
			this.state = 182;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 29)) & ~0x1F) === 0 && ((1 << (_la - 29)) & ((1 << (asmMASMParser.BYTE - 29)) | (1 << (asmMASMParser.WORD - 29)) | (1 << (asmMASMParser.DWORD - 29)) | (1 << (asmMASMParser.PARA - 29)) | (1 << (asmMASMParser.PAGE - 29)) | (1 << (asmMASMParser.ALIGN - 29)))) !== 0)) {
				{
				this.state = 181;
				this.align();
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
	public endsegment(): EndsegmentContext {
		let _localctx: EndsegmentContext = new EndsegmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, asmMASMParser.RULE_endsegment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 184;
			this.name();
			this.state = 185;
			this.match(asmMASMParser.SEGMENTEND);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public align(): AlignContext {
		let _localctx: AlignContext = new AlignContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, asmMASMParser.RULE_align);
		let _la: number;
		try {
			this.state = 193;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case asmMASMParser.BYTE:
			case asmMASMParser.WORD:
			case asmMASMParser.DWORD:
			case asmMASMParser.PARA:
			case asmMASMParser.PAGE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 187;
				_la = this._input.LA(1);
				if (!(((((_la - 29)) & ~0x1F) === 0 && ((1 << (_la - 29)) & ((1 << (asmMASMParser.BYTE - 29)) | (1 << (asmMASMParser.WORD - 29)) | (1 << (asmMASMParser.DWORD - 29)) | (1 << (asmMASMParser.PARA - 29)) | (1 << (asmMASMParser.PAGE - 29)))) !== 0))) {
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
			case asmMASMParser.ALIGN:
				this.enterOuterAlt(_localctx, 2);
				{
				{
				this.state = 188;
				this.match(asmMASMParser.ALIGN);
				this.state = 189;
				this.match(asmMASMParser.T__2);
				this.state = 190;
				this.number();
				this.state = 191;
				this.match(asmMASMParser.T__3);
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
	public assign(): AssignContext {
		let _localctx: AssignContext = new AssignContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, asmMASMParser.RULE_assign);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 195;
			this.name();
			this.state = 196;
			this.match(asmMASMParser.ASSIGN);
			this.state = 197;
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
	public put(): PutContext {
		let _localctx: PutContext = new PutContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, asmMASMParser.RULE_put);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 199;
			this.match(asmMASMParser.PUT);
			this.state = 200;
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
	public ds(): DsContext {
		let _localctx: DsContext = new DsContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, asmMASMParser.RULE_ds);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 202;
			this.match(asmMASMParser.DS);
			this.state = 203;
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
	public dw(): DwContext {
		let _localctx: DwContext = new DwContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, asmMASMParser.RULE_dw);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 205;
			this.match(asmMASMParser.DW);
			this.state = 206;
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
		this.enterRule(_localctx, 36, asmMASMParser.RULE_db);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 208;
			this.match(asmMASMParser.DB);
			this.state = 209;
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
	public dm(): DmContext {
		let _localctx: DmContext = new DmContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, asmMASMParser.RULE_dm);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 211;
			this.match(asmMASMParser.DM);
			this.state = 212;
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
	public dup(): DupContext {
		let _localctx: DupContext = new DupContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, asmMASMParser.RULE_dup);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 214;
			this.number();
			this.state = 215;
			this.match(asmMASMParser.DUP);
			this.state = 216;
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
	public equ(): EquContext {
		let _localctx: EquContext = new EquContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, asmMASMParser.RULE_equ);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 218;
			this.match(asmMASMParser.EQU);
			this.state = 219;
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
	public extern(): ExternContext {
		let _localctx: ExternContext = new ExternContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, asmMASMParser.RULE_extern);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 221;
			this.match(asmMASMParser.EXTERN);
			this.state = 222;
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
		this.enterRule(_localctx, 46, asmMASMParser.RULE_if_);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 224;
			this.match(asmMASMParser.IF);
			this.state = 225;
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
	public endif(): EndifContext {
		let _localctx: EndifContext = new EndifContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, asmMASMParser.RULE_endif);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 227;
			this.match(asmMASMParser.ENDIF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 50, asmMASMParser.RULE_org);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 229;
			this.match(asmMASMParser.ORG);
			this.state = 230;
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
	public expressionlist(): ExpressionlistContext {
		let _localctx: ExpressionlistContext = new ExpressionlistContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, asmMASMParser.RULE_expressionlist);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 232;
			this.expression();
			this.state = 237;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === asmMASMParser.T__1) {
				{
				{
				this.state = 233;
				this.match(asmMASMParser.T__1);
				this.state = 234;
				this.expression();
				}
				}
				this.state = 239;
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
		this.enterRule(_localctx, 54, asmMASMParser.RULE_label);
		try {
			this.state = 242;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case asmMASMParser.NAME:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 240;
				this.name();
				}
				break;
			case asmMASMParser.ORG:
			case asmMASMParser.ENDIF:
			case asmMASMParser.IF:
			case asmMASMParser.EQU:
			case asmMASMParser.PUT:
			case asmMASMParser.OPCODE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 241;
				this.gross();
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
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, asmMASMParser.RULE_expression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 244;
			this.multiplyingExpression();
			this.state = 249;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 245;
					this.match(asmMASMParser.SIGN);
					this.state = 246;
					this.multiplyingExpression();
					}
					}
				}
				this.state = 251;
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
		this.enterRule(_localctx, 58, asmMASMParser.RULE_multiplyingExpression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 252;
			this.argument();
			this.state = 257;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 253;
					_la = this._input.LA(1);
					if (!(_la === asmMASMParser.T__4 || _la === asmMASMParser.T__5)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 254;
					this.argument();
					}
					}
				}
				this.state = 259;
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
		this.enterRule(_localctx, 60, asmMASMParser.RULE_argument);
		try {
			this.state = 285;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 260;
				this.number();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 261;
				this.dollar();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 262;
				this.ques();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 263;
				this.register_();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 267;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 20, this._ctx) ) {
				case 1:
					{
					this.state = 264;
					this.name();
					this.state = 265;
					this.match(asmMASMParser.T__0);
					}
					break;
				}
				this.state = 269;
				this.name();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 270;
				this.string();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				{
				this.state = 271;
				this.match(asmMASMParser.T__2);
				this.state = 272;
				this.expression();
				this.state = 273;
				this.match(asmMASMParser.T__3);
				}
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				{
				this.state = 275;
				this.match(asmMASMParser.T__6);
				this.state = 276;
				this.expression();
				this.state = 277;
				this.match(asmMASMParser.T__7);
				}
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 279;
				this.match(asmMASMParser.NOT);
				this.state = 280;
				this.expression();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 281;
				this.match(asmMASMParser.OFFSET);
				this.state = 282;
				this.expression();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 283;
				this.gross();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 284;
				this.dup();
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
	public gross(): GrossContext {
		let _localctx: GrossContext = new GrossContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, asmMASMParser.RULE_gross);
		try {
			this.state = 289;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case asmMASMParser.OPCODE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 287;
				this.opcode();
				}
				break;
			case asmMASMParser.ORG:
			case asmMASMParser.ENDIF:
			case asmMASMParser.IF:
			case asmMASMParser.EQU:
			case asmMASMParser.PUT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 288;
				this.grossrawassemblerdirective();
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
	public grossrawassemblerdirective(): GrossrawassemblerdirectiveContext {
		let _localctx: GrossrawassemblerdirectiveContext = new GrossrawassemblerdirectiveContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, asmMASMParser.RULE_grossrawassemblerdirective);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 291;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << asmMASMParser.ORG) | (1 << asmMASMParser.ENDIF) | (1 << asmMASMParser.IF) | (1 << asmMASMParser.EQU) | (1 << asmMASMParser.PUT))) !== 0))) {
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
	public dollar(): DollarContext {
		let _localctx: DollarContext = new DollarContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, asmMASMParser.RULE_dollar);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 293;
			this.match(asmMASMParser.DOLLAR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ques(): QuesContext {
		let _localctx: QuesContext = new QuesContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, asmMASMParser.RULE_ques);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 295;
			this.match(asmMASMParser.QUES);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 70, asmMASMParser.RULE_register_);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 297;
			this.match(asmMASMParser.REGISTER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 72, asmMASMParser.RULE_string);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 299;
			_la = this._input.LA(1);
			if (!(_la === asmMASMParser.STRING1 || _la === asmMASMParser.STRING2)) {
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
	public name(): NameContext {
		let _localctx: NameContext = new NameContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, asmMASMParser.RULE_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 301;
			this.match(asmMASMParser.NAME);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 76, asmMASMParser.RULE_number);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 304;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === asmMASMParser.SIGN) {
				{
				this.state = 303;
				this.match(asmMASMParser.SIGN);
				}
			}

			this.state = 306;
			this.match(asmMASMParser.NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 78, asmMASMParser.RULE_opcode);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 308;
			this.match(asmMASMParser.OPCODE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 80, asmMASMParser.RULE_rep);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 310;
			this.match(asmMASMParser.REP);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 82, asmMASMParser.RULE_comment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 312;
			this.match(asmMASMParser.COMMENT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x032\u013D\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x03\x02\x03\x02\x03\x02\x07\x02Z\n\x02\f\x02\x0E\x02]\v\x02\x03\x03\x05" +
		"\x03`\n\x03\x03\x03\x03\x03\x03\x03\x05\x03e\n\x03\x03\x03\x05\x03h\n" +
		"\x03\x03\x04\x05\x04k\n\x04\x03\x04\x05\x04n\n\x04\x03\x04\x05\x04q\n" +
		"\x04\x03\x05\x03\x05\x05\x05u\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x06\x06\x89\n\x06\r\x06\x0E\x06\x8A" +
		"\x05\x06\x8D\n\x06\x03\x07\x06\x07\x90\n\x07\r\x07\x0E\x07\x91\x03\b\x03" +
		"\b\x05\b\x96\n\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t" +
		"\x07\t\xA1\n\t\f\t\x0E\t\xA4\v\t\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x07\f\xB1\n\f\f\f\x0E\f\xB4\v\f\x03\r\x03\r" +
		"\x03\r\x05\r\xB9\n\r\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x05\x0F\xC4\n\x0F\x03\x10\x03\x10\x03\x10\x03\x10" +
		"\x03\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13" +
		"\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16" +
		"\x03\x16\x03\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x19\x03\x19" +
		"\x03\x19\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C" +
		"\x07\x1C\xEE\n\x1C\f\x1C\x0E\x1C\xF1\v\x1C\x03\x1D\x03\x1D\x05\x1D\xF5" +
		"\n\x1D\x03\x1E\x03\x1E\x03\x1E\x07\x1E\xFA\n\x1E\f\x1E\x0E\x1E\xFD\v\x1E" +
		"\x03\x1F\x03\x1F\x03\x1F\x07\x1F\u0102\n\x1F\f\x1F\x0E\x1F\u0105\v\x1F" +
		"\x03 \x03 \x03 \x03 \x03 \x03 \x03 \x05 \u010E\n \x03 \x03 \x03 \x03 " +
		"\x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x05 \u0120" +
		"\n \x03!\x03!\x05!\u0124\n!\x03\"\x03\"\x03#\x03#\x03$\x03$\x03%\x03%" +
		"\x03&\x03&\x03\'\x03\'\x03(\x05(\u0133\n(\x03(\x03(\x03)\x03)\x03*\x03" +
		"*\x03+\x03+\x03+\x02\x02\x02,\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02" +
		"\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02" +
		" \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02" +
		"<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02\x02" +
		"\x07\x03\x02\x1F\"\x04\x02\x1F\x1F!$\x03\x02\x07\b\x04\x02\v\x0E\x13\x13" +
		"\x03\x02./\x02\u0145\x02[\x03\x02\x02\x02\x04_\x03\x02\x02\x02\x06j\x03" +
		"\x02\x02\x02\br\x03\x02\x02\x02\n\x8C\x03\x02\x02\x02\f\x8F\x03\x02\x02" +
		"\x02\x0E\x93\x03\x02\x02\x02\x10\x97\x03\x02\x02\x02\x12\xA5\x03\x02\x02" +
		"\x02\x14\xA9\x03\x02\x02\x02\x16\xAB\x03\x02\x02\x02\x18\xB5\x03\x02\x02" +
		"\x02\x1A\xBA\x03\x02\x02\x02\x1C\xC3\x03\x02\x02\x02\x1E\xC5\x03\x02\x02" +
		"\x02 \xC9\x03\x02\x02\x02\"\xCC\x03\x02\x02\x02$\xCF\x03\x02\x02\x02&" +
		"\xD2\x03\x02\x02\x02(\xD5\x03\x02\x02\x02*\xD8\x03\x02\x02\x02,\xDC\x03" +
		"\x02\x02\x02.\xDF\x03\x02\x02\x020\xE2\x03\x02\x02\x022\xE5\x03\x02\x02" +
		"\x024\xE7\x03\x02\x02\x026\xEA\x03\x02\x02\x028\xF4\x03\x02\x02\x02:\xF6" +
		"\x03\x02\x02\x02<\xFE\x03\x02\x02\x02>\u011F\x03\x02\x02\x02@\u0123\x03" +
		"\x02\x02\x02B\u0125\x03\x02\x02\x02D\u0127\x03\x02\x02\x02F\u0129\x03" +
		"\x02\x02\x02H\u012B\x03\x02\x02\x02J\u012D\x03\x02\x02\x02L\u012F\x03" +
		"\x02\x02\x02N\u0132\x03\x02\x02\x02P\u0136\x03\x02\x02\x02R\u0138\x03" +
		"\x02\x02\x02T\u013A\x03\x02\x02\x02VW\x05\x04\x03\x02WX\x071\x02\x02X" +
		"Z\x03\x02\x02\x02YV\x03\x02\x02\x02Z]\x03\x02\x02\x02[Y\x03\x02\x02\x02" +
		"[\\\x03\x02\x02\x02\\\x03\x03\x02\x02\x02][\x03\x02\x02\x02^`\x05\b\x05" +
		"\x02_^\x03\x02\x02\x02_`\x03\x02\x02\x02`d\x03\x02\x02\x02ae\x05\n\x06" +
		"\x02be\x05\f\x07\x02ce\x05\x06\x04\x02da\x03\x02\x02\x02db\x03\x02\x02" +
		"\x02dc\x03\x02\x02\x02de\x03\x02\x02\x02eg\x03\x02\x02\x02fh\x05T+\x02" +
		"gf\x03\x02\x02\x02gh\x03\x02\x02\x02h\x05\x03\x02\x02\x02ik\x05R*\x02" +
		"ji\x03\x02\x02\x02jk\x03\x02\x02\x02km\x03\x02\x02\x02ln\x05P)\x02ml\x03" +
		"\x02\x02\x02mn\x03\x02\x02\x02np\x03\x02\x02\x02oq\x056\x1C\x02po\x03" +
		"\x02\x02\x02pq\x03\x02\x02\x02q\x07\x03\x02\x02\x02rt\x058\x1D\x02su\x07" +
		"\x03\x02\x02ts\x03\x02\x02\x02tu\x03\x02\x02\x02u\t\x03\x02\x02\x02v\x8D" +
		"\x054\x1B\x02w\x8D\x050\x19\x02x\x8D\x052\x1A\x02y\x8D\x05,\x17\x02z\x8D" +
		"\x05&\x14\x02{\x8D\x05$\x13\x02|\x8D\x05(\x15\x02}\x8D\x05\"\x12\x02~" +
		"\x8D\x05 \x11\x02\x7F\x8D\x05\x1E\x10\x02\x80\x8D\x05\x18\r\x02\x81\x8D" +
		"\x05\x1A\x0E\x02\x82\x8D\x05\x16\f\x02\x83\x8D\x05\x12\n\x02\x84\x8D\x05" +
		"\x10\t\x02\x85\x8D\x05.\x18\x02\x86\x88\x05\x14\v\x02\x87\x89\x056\x1C" +
		"\x02\x88\x87\x03\x02\x02\x02\x89\x8A\x03\x02\x02\x02\x8A\x88\x03\x02\x02" +
		"\x02\x8A\x8B\x03\x02\x02\x02\x8B\x8D\x03\x02\x02\x02\x8Cv\x03\x02\x02" +
		"\x02\x8Cw\x03\x02\x02\x02\x8Cx\x03\x02\x02\x02\x8Cy\x03\x02\x02\x02\x8C" +
		"z\x03\x02\x02\x02\x8C{\x03\x02\x02\x02\x8C|\x03\x02\x02\x02\x8C}\x03\x02" +
		"\x02\x02\x8C~\x03\x02\x02\x02\x8C\x7F\x03\x02\x02\x02\x8C\x80\x03\x02" +
		"\x02\x02\x8C\x81\x03\x02\x02\x02\x8C\x82\x03\x02\x02\x02\x8C\x83\x03\x02" +
		"\x02\x02\x8C\x84\x03\x02\x02\x02\x8C\x85\x03\x02\x02\x02\x8C\x86\x03\x02" +
		"\x02\x02\x8D\v\x03\x02\x02\x02\x8E\x90\x05\x0E\b\x02\x8F\x8E\x03\x02\x02" +
		"\x02\x90\x91\x03\x02\x02\x02\x91\x8F\x03\x02\x02\x02\x91\x92\x03\x02\x02" +
		"\x02\x92\r\x03\x02\x02\x02\x93\x95\x07+\x02\x02\x94\x96\x056\x1C\x02\x95" +
		"\x94\x03\x02\x02\x02\x95\x96\x03\x02\x02\x02\x96\x0F\x03\x02\x02\x02\x97" +
		"\x98\x07(\x02\x02\x98\x99\x05H%\x02\x99\x9A\x07\x03\x02\x02\x9A\xA2\x05" +
		"L\'\x02\x9B\x9C\x07\x04\x02\x02\x9C\x9D\x05H%\x02\x9D\x9E\x07\x03\x02" +
		"\x02\x9E\x9F\x05L\'\x02\x9F\xA1\x03\x02\x02\x02\xA0\x9B\x03\x02\x02\x02" +
		"\xA1\xA4\x03\x02\x02\x02\xA2\xA0\x03\x02\x02\x02\xA2\xA3\x03\x02\x02\x02" +
		"\xA3\x11\x03\x02\x02\x02\xA4\xA2\x03\x02\x02\x02\xA5\xA6\x05L\'\x02\xA6" +
		"\xA7\x07&\x02\x02\xA7\xA8\x05\x14\v\x02\xA8\x13\x03\x02\x02\x02\xA9\xAA" +
		"\t\x02\x02\x02\xAA\x15\x03\x02\x02\x02\xAB\xAC\x05L\'\x02\xAC\xAD\x07" +
		"\x1E\x02\x02\xAD\xB2\x05L\'\x02\xAE\xAF\x07\x04\x02\x02\xAF\xB1\x05L\'" +
		"\x02\xB0\xAE\x03\x02\x02\x02\xB1\xB4\x03\x02\x02\x02\xB2\xB0\x03\x02\x02" +
		"\x02\xB2\xB3\x03\x02\x02\x02\xB3\x17\x03\x02\x02\x02\xB4\xB2\x03\x02\x02" +
		"\x02\xB5\xB6\x05L\'\x02\xB6\xB8\x07\x1C\x02\x02\xB7\xB9\x05\x1C\x0F\x02" +
		"\xB8\xB7\x03\x02\x02\x02\xB8\xB9\x03\x02\x02\x02\xB9\x19\x03\x02\x02\x02" +
		"\xBA\xBB\x05L\'\x02\xBB\xBC\x07\x1D\x02\x02\xBC\x1B\x03\x02\x02\x02\xBD" +
		"\xC4\t\x03\x02\x02\xBE\xBF\x07%\x02\x02\xBF\xC0\x07\x05\x02\x02\xC0\xC1" +
		"\x05N(\x02\xC1\xC2\x07\x06\x02\x02\xC2\xC4\x03\x02\x02\x02\xC3\xBD\x03" +
		"\x02\x02\x02\xC3\xBE\x03\x02\x02\x02\xC4\x1D\x03\x02\x02\x02\xC5\xC6\x05" +
		"L\'\x02\xC6\xC7\x07\x18\x02\x02\xC7\xC8\x05:\x1E\x02\xC8\x1F\x03\x02\x02" +
		"\x02\xC9\xCA\x07\x13\x02\x02\xCA\xCB\x056\x1C\x02\xCB!\x03\x02\x02\x02" +
		"\xCC\xCD\x07\x12\x02\x02\xCD\xCE\x056\x1C\x02\xCE#\x03\x02\x02\x02\xCF" +
		"\xD0\x07\x0F\x02\x02\xD0\xD1\x056\x1C\x02\xD1%\x03\x02\x02\x02\xD2\xD3" +
		"\x07\x10\x02\x02\xD3\xD4\x056\x1C\x02\xD4\'\x03\x02\x02\x02\xD5\xD6\x07" +
		"\x11\x02\x02\xD6\xD7\x056\x1C\x02\xD7)\x03\x02\x02\x02\xD8\xD9\x05N(\x02" +
		"\xD9\xDA\x07\'\x02\x02\xDA\xDB\x05:\x1E\x02\xDB+\x03\x02\x02\x02\xDC\xDD" +
		"\x07\x0E\x02\x02\xDD\xDE\x05:\x1E\x02\xDE-\x03\x02\x02\x02\xDF\xE0\x07" +
		"*\x02\x02\xE0\xE1\x05:\x1E\x02\xE1/\x03\x02\x02\x02\xE2\xE3\x07\r\x02" +
		"\x02\xE3\xE4\x05:\x1E\x02\xE41\x03\x02\x02\x02\xE5\xE6\x07\f\x02\x02\xE6" +
		"3\x03\x02\x02\x02\xE7\xE8\x07\v\x02\x02\xE8\xE9\x05:\x1E\x02\xE95\x03" +
		"\x02\x02\x02\xEA\xEF\x05:\x1E\x02\xEB\xEC\x07\x04\x02\x02\xEC\xEE\x05" +
		":\x1E\x02\xED\xEB\x03\x02\x02\x02\xEE\xF1\x03\x02\x02\x02\xEF\xED\x03" +
		"\x02\x02\x02\xEF\xF0\x03\x02\x02\x02\xF07\x03\x02\x02\x02\xF1\xEF\x03" +
		"\x02\x02\x02\xF2\xF5\x05L\'\x02\xF3\xF5\x05@!\x02\xF4\xF2\x03\x02\x02" +
		"\x02\xF4\xF3\x03\x02\x02\x02\xF59\x03\x02\x02\x02\xF6\xFB\x05<\x1F\x02" +
		"\xF7\xF8\x07)\x02\x02\xF8\xFA\x05<\x1F\x02\xF9\xF7\x03\x02\x02\x02\xFA" +
		"\xFD\x03\x02\x02\x02\xFB\xF9\x03\x02\x02\x02\xFB\xFC\x03\x02\x02\x02\xFC" +
		";\x03\x02\x02\x02\xFD\xFB\x03\x02\x02\x02\xFE\u0103\x05> \x02\xFF\u0100" +
		"\t\x04\x02\x02\u0100\u0102\x05> \x02\u0101\xFF\x03\x02\x02\x02\u0102\u0105" +
		"\x03\x02\x02\x02\u0103\u0101\x03\x02\x02\x02\u0103\u0104\x03\x02\x02\x02" +
		"\u0104=\x03\x02\x02\x02\u0105\u0103\x03\x02\x02\x02\u0106\u0120\x05N(" +
		"\x02\u0107\u0120\x05D#\x02\u0108\u0120\x05F$\x02\u0109\u0120\x05H%\x02" +
		"\u010A\u010B\x05L\'\x02\u010B\u010C\x07\x03\x02\x02\u010C\u010E\x03\x02" +
		"\x02\x02\u010D\u010A\x03\x02\x02\x02\u010D\u010E\x03\x02\x02\x02\u010E" +
		"\u010F\x03\x02\x02\x02\u010F\u0120\x05L\'\x02\u0110\u0120\x05J&\x02\u0111" +
		"\u0112\x07\x05\x02\x02\u0112\u0113\x05:\x1E\x02\u0113\u0114\x07\x06\x02" +
		"\x02\u0114\u0120\x03\x02\x02\x02\u0115\u0116\x07\t\x02\x02\u0116\u0117" +
		"\x05:\x1E\x02\u0117\u0118\x07\n\x02\x02\u0118\u0120\x03\x02\x02\x02\u0119" +
		"\u011A\x07\x14\x02\x02\u011A\u0120\x05:\x1E\x02\u011B\u011C\x07\x19\x02" +
		"\x02\u011C\u0120\x05:\x1E\x02\u011D\u0120\x05@!\x02\u011E\u0120\x05*\x16" +
		"\x02\u011F\u0106\x03\x02\x02\x02\u011F\u0107\x03\x02\x02\x02\u011F\u0108" +
		"\x03\x02\x02\x02\u011F\u0109\x03\x02\x02\x02\u011F\u010D\x03\x02\x02\x02" +
		"\u011F\u0110\x03\x02\x02\x02\u011F\u0111\x03\x02\x02\x02\u011F\u0115\x03" +
		"\x02\x02\x02\u011F\u0119\x03\x02\x02\x02\u011F\u011B\x03\x02\x02\x02\u011F" +
		"\u011D\x03\x02\x02\x02\u011F\u011E\x03\x02\x02\x02\u0120?\x03\x02\x02" +
		"\x02\u0121\u0124\x05P)\x02\u0122\u0124\x05B\"\x02\u0123\u0121\x03\x02" +
		"\x02\x02\u0123\u0122\x03\x02\x02\x02\u0124A\x03\x02\x02\x02\u0125\u0126" +
		"\t\x05\x02\x02\u0126C\x03\x02\x02\x02\u0127\u0128\x07\x1A\x02\x02\u0128" +
		"E\x03\x02\x02\x02\u0129\u012A\x07\x1B\x02\x02\u012AG\x03\x02\x02\x02\u012B" +
		"\u012C\x07\x15\x02\x02\u012CI\x03\x02\x02\x02\u012D\u012E\t\x06\x02\x02" +
		"\u012EK\x03\x02\x02\x02\u012F\u0130\x07,\x02\x02\u0130M\x03\x02\x02\x02" +
		"\u0131\u0133\x07)\x02\x02\u0132\u0131\x03\x02\x02\x02\u0132\u0133\x03" +
		"\x02\x02\x02\u0133\u0134\x03\x02\x02\x02\u0134\u0135\x07-\x02\x02\u0135" +
		"O\x03\x02\x02\x02\u0136\u0137\x07\x16\x02\x02\u0137Q\x03\x02\x02\x02\u0138" +
		"\u0139\x07\x17\x02\x02\u0139S\x03\x02\x02\x02\u013A\u013B\x070\x02\x02" +
		"\u013BU\x03\x02\x02\x02\x1A[_dgjmpt\x8A\x8C\x91\x95\xA2\xB2\xB8\xC3\xEF" +
		"\xF4\xFB\u0103\u010D\u011F\u0123\u0132";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!asmMASMParser.__ATN) {
			asmMASMParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(asmMASMParser._serializedATN));
		}

		return asmMASMParser.__ATN;
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
			return this.getTokens(asmMASMParser.EOL);
		} else {
			return this.getToken(asmMASMParser.EOL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return asmMASMParser.RULE_prog; }
	// @Override
	public enterRule(listener: asmMASMListener): void {
		if (listener.enterProg) {
			listener.enterProg(this);
		}
	}
	// @Override
	public exitRule(listener: asmMASMListener): void {
		if (listener.exitProg) {
			listener.exitProg(this);
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
	public masmdirectives(): MasmdirectivesContext | undefined {
		return this.tryGetRuleContext(0, MasmdirectivesContext);
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
	public get ruleIndex(): number { return asmMASMParser.RULE_line; }
	// @Override
	public enterRule(listener: asmMASMListener): void {
		if (listener.enterLine) {
			listener.enterLine(this);
		}
	}
	// @Override
	public exitRule(listener: asmMASMListener): void {
		if (listener.exitLine) {
			listener.exitLine(this);
		}
	}
}


export class InstructionContext extends ParserRuleContext {
	public rep(): RepContext | undefined {
		return this.tryGetRuleContext(0, RepContext);
	}
	public opcode(): OpcodeContext | undefined {
		return this.tryGetRuleContext(0, OpcodeContext);
	}
	public expressionlist(): ExpressionlistContext | undefined {
		return this.tryGetRuleContext(0, ExpressionlistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return asmMASMParser.RULE_instruction; }
	// @Override
	public enterRule(listener: asmMASMListener): void {
		if (listener.enterInstruction) {
			listener.enterInstruction(this);
		}
	}
	// @Override
	public exitRule(listener: asmMASMListener): void {
		if (listener.exitInstruction) {
			listener.exitInstruction(this);
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
	public get ruleIndex(): number { return asmMASMParser.RULE_lbl; }
	// @Override
	public enterRule(listener: asmMASMListener): void {
		if (listener.enterLbl) {
			listener.enterLbl(this);
		}
	}
	// @Override
	public exitRule(listener: asmMASMListener): void {
		if (listener.exitLbl) {
			listener.exitLbl(this);
		}
	}
}


export class AssemblerdirectiveContext extends ParserRuleContext {
	public org(): OrgContext | undefined {
		return this.tryGetRuleContext(0, OrgContext);
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
	public dm(): DmContext | undefined {
		return this.tryGetRuleContext(0, DmContext);
	}
	public ds(): DsContext | undefined {
		return this.tryGetRuleContext(0, DsContext);
	}
	public put(): PutContext | undefined {
		return this.tryGetRuleContext(0, PutContext);
	}
	public assign(): AssignContext | undefined {
		return this.tryGetRuleContext(0, AssignContext);
	}
	public segment(): SegmentContext | undefined {
		return this.tryGetRuleContext(0, SegmentContext);
	}
	public endsegment(): EndsegmentContext | undefined {
		return this.tryGetRuleContext(0, EndsegmentContext);
	}
	public group(): GroupContext | undefined {
		return this.tryGetRuleContext(0, GroupContext);
	}
	public label_(): Label_Context | undefined {
		return this.tryGetRuleContext(0, Label_Context);
	}
	public assume(): AssumeContext | undefined {
		return this.tryGetRuleContext(0, AssumeContext);
	}
	public extern(): ExternContext | undefined {
		return this.tryGetRuleContext(0, ExternContext);
	}
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public expressionlist(): ExpressionlistContext[];
	public expressionlist(i: number): ExpressionlistContext;
	public expressionlist(i?: number): ExpressionlistContext | ExpressionlistContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionlistContext);
		} else {
			return this.getRuleContext(i, ExpressionlistContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return asmMASMParser.RULE_assemblerdirective; }
	// @Override
	public enterRule(listener: asmMASMListener): void {
		if (listener.enterAssemblerdirective) {
			listener.enterAssemblerdirective(this);
		}
	}
	// @Override
	public exitRule(listener: asmMASMListener): void {
		if (listener.exitAssemblerdirective) {
			listener.exitAssemblerdirective(this);
		}
	}
}


export class MasmdirectivesContext extends ParserRuleContext {
	public masmdirective(): MasmdirectiveContext[];
	public masmdirective(i: number): MasmdirectiveContext;
	public masmdirective(i?: number): MasmdirectiveContext | MasmdirectiveContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MasmdirectiveContext);
		} else {
			return this.getRuleContext(i, MasmdirectiveContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return asmMASMParser.RULE_masmdirectives; }
	// @Override
	public enterRule(listener: asmMASMListener): void {
		if (listener.enterMasmdirectives) {
			listener.enterMasmdirectives(this);
		}
	}
	// @Override
	public exitRule(listener: asmMASMListener): void {
		if (listener.exitMasmdirectives) {
			listener.exitMasmdirectives(this);
		}
	}
}


export class MasmdirectiveContext extends ParserRuleContext {
	public MASMDIRECTIVE(): TerminalNode { return this.getToken(asmMASMParser.MASMDIRECTIVE, 0); }
	public expressionlist(): ExpressionlistContext | undefined {
		return this.tryGetRuleContext(0, ExpressionlistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return asmMASMParser.RULE_masmdirective; }
	// @Override
	public enterRule(listener: asmMASMListener): void {
		if (listener.enterMasmdirective) {
			listener.enterMasmdirective(this);
		}
	}
	// @Override
	public exitRule(listener: asmMASMListener): void {
		if (listener.exitMasmdirective) {
			listener.exitMasmdirective(this);
		}
	}
}


export class AssumeContext extends ParserRuleContext {
	public ASSUME(): TerminalNode { return this.getToken(asmMASMParser.ASSUME, 0); }
	public register_(): Register_Context[];
	public register_(i: number): Register_Context;
	public register_(i?: number): Register_Context | Register_Context[] {
		if (i === undefined) {
			return this.getRuleContexts(Register_Context);
		} else {
			return this.getRuleContext(i, Register_Context);
		}
	}
	public name(): NameContext[];
	public name(i: number): NameContext;
	public name(i?: number): NameContext | NameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NameContext);
		} else {
			return this.getRuleContext(i, NameContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return asmMASMParser.RULE_assume; }
	// @Override
	public enterRule(listener: asmMASMListener): void {
		if (listener.enterAssume) {
			listener.enterAssume(this);
		}
	}
	// @Override
	public exitRule(listener: asmMASMListener): void {
		if (listener.exitAssume) {
			listener.exitAssume(this);
		}
	}
}


export class Label_Context extends ParserRuleContext {
	public name(): NameContext {
		return this.getRuleContext(0, NameContext);
	}
	public LABEL(): TerminalNode { return this.getToken(asmMASMParser.LABEL, 0); }
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return asmMASMParser.RULE_label_; }
	// @Override
	public enterRule(listener: asmMASMListener): void {
		if (listener.enterLabel_) {
			listener.enterLabel_(this);
		}
	}
	// @Override
	public exitRule(listener: asmMASMListener): void {
		if (listener.exitLabel_) {
			listener.exitLabel_(this);
		}
	}
}


export class TypeContext extends ParserRuleContext {
	public BYTE(): TerminalNode | undefined { return this.tryGetToken(asmMASMParser.BYTE, 0); }
	public SBYTE(): TerminalNode | undefined { return this.tryGetToken(asmMASMParser.SBYTE, 0); }
	public WORD(): TerminalNode | undefined { return this.tryGetToken(asmMASMParser.WORD, 0); }
	public DWORD(): TerminalNode | undefined { return this.tryGetToken(asmMASMParser.DWORD, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return asmMASMParser.RULE_type; }
	// @Override
	public enterRule(listener: asmMASMListener): void {
		if (listener.enterType) {
			listener.enterType(this);
		}
	}
	// @Override
	public exitRule(listener: asmMASMListener): void {
		if (listener.exitType) {
			listener.exitType(this);
		}
	}
}


export class GroupContext extends ParserRuleContext {
	public name(): NameContext[];
	public name(i: number): NameContext;
	public name(i?: number): NameContext | NameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NameContext);
		} else {
			return this.getRuleContext(i, NameContext);
		}
	}
	public GROUP(): TerminalNode { return this.getToken(asmMASMParser.GROUP, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return asmMASMParser.RULE_group; }
	// @Override
	public enterRule(listener: asmMASMListener): void {
		if (listener.enterGroup) {
			listener.enterGroup(this);
		}
	}
	// @Override
	public exitRule(listener: asmMASMListener): void {
		if (listener.exitGroup) {
			listener.exitGroup(this);
		}
	}
}


export class SegmentContext extends ParserRuleContext {
	public name(): NameContext {
		return this.getRuleContext(0, NameContext);
	}
	public SEGMENT(): TerminalNode { return this.getToken(asmMASMParser.SEGMENT, 0); }
	public align(): AlignContext | undefined {
		return this.tryGetRuleContext(0, AlignContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return asmMASMParser.RULE_segment; }
	// @Override
	public enterRule(listener: asmMASMListener): void {
		if (listener.enterSegment) {
			listener.enterSegment(this);
		}
	}
	// @Override
	public exitRule(listener: asmMASMListener): void {
		if (listener.exitSegment) {
			listener.exitSegment(this);
		}
	}
}


export class EndsegmentContext extends ParserRuleContext {
	public name(): NameContext {
		return this.getRuleContext(0, NameContext);
	}
	public SEGMENTEND(): TerminalNode { return this.getToken(asmMASMParser.SEGMENTEND, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return asmMASMParser.RULE_endsegment; }
	// @Override
	public enterRule(listener: asmMASMListener): void {
		if (listener.enterEndsegment) {
			listener.enterEndsegment(this);
		}
	}
	// @Override
	public exitRule(listener: asmMASMListener): void {
		if (listener.exitEndsegment) {
			listener.exitEndsegment(this);
		}
	}
}


export class AlignContext extends ParserRuleContext {
	public BYTE(): TerminalNode | undefined { return this.tryGetToken(asmMASMParser.BYTE, 0); }
	public WORD(): TerminalNode | undefined { return this.tryGetToken(asmMASMParser.WORD, 0); }
	public DWORD(): TerminalNode | undefined { return this.tryGetToken(asmMASMParser.DWORD, 0); }
	public PARA(): TerminalNode | undefined { return this.tryGetToken(asmMASMParser.PARA, 0); }
	public PAGE(): TerminalNode | undefined { return this.tryGetToken(asmMASMParser.PAGE, 0); }
	public ALIGN(): TerminalNode | undefined { return this.tryGetToken(asmMASMParser.ALIGN, 0); }
	public number(): NumberContext | undefined {
		return this.tryGetRuleContext(0, NumberContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return asmMASMParser.RULE_align; }
	// @Override
	public enterRule(listener: asmMASMListener): void {
		if (listener.enterAlign) {
			listener.enterAlign(this);
		}
	}
	// @Override
	public exitRule(listener: asmMASMListener): void {
		if (listener.exitAlign) {
			listener.exitAlign(this);
		}
	}
}


export class AssignContext extends ParserRuleContext {
	public name(): NameContext {
		return this.getRuleContext(0, NameContext);
	}
	public ASSIGN(): TerminalNode { return this.getToken(asmMASMParser.ASSIGN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return asmMASMParser.RULE_assign; }
	// @Override
	public enterRule(listener: asmMASMListener): void {
		if (listener.enterAssign) {
			listener.enterAssign(this);
		}
	}
	// @Override
	public exitRule(listener: asmMASMListener): void {
		if (listener.exitAssign) {
			listener.exitAssign(this);
		}
	}
}


export class PutContext extends ParserRuleContext {
	public PUT(): TerminalNode { return this.getToken(asmMASMParser.PUT, 0); }
	public expressionlist(): ExpressionlistContext {
		return this.getRuleContext(0, ExpressionlistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return asmMASMParser.RULE_put; }
	// @Override
	public enterRule(listener: asmMASMListener): void {
		if (listener.enterPut) {
			listener.enterPut(this);
		}
	}
	// @Override
	public exitRule(listener: asmMASMListener): void {
		if (listener.exitPut) {
			listener.exitPut(this);
		}
	}
}


export class DsContext extends ParserRuleContext {
	public DS(): TerminalNode { return this.getToken(asmMASMParser.DS, 0); }
	public expressionlist(): ExpressionlistContext {
		return this.getRuleContext(0, ExpressionlistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return asmMASMParser.RULE_ds; }
	// @Override
	public enterRule(listener: asmMASMListener): void {
		if (listener.enterDs) {
			listener.enterDs(this);
		}
	}
	// @Override
	public exitRule(listener: asmMASMListener): void {
		if (listener.exitDs) {
			listener.exitDs(this);
		}
	}
}


export class DwContext extends ParserRuleContext {
	public DW(): TerminalNode { return this.getToken(asmMASMParser.DW, 0); }
	public expressionlist(): ExpressionlistContext {
		return this.getRuleContext(0, ExpressionlistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return asmMASMParser.RULE_dw; }
	// @Override
	public enterRule(listener: asmMASMListener): void {
		if (listener.enterDw) {
			listener.enterDw(this);
		}
	}
	// @Override
	public exitRule(listener: asmMASMListener): void {
		if (listener.exitDw) {
			listener.exitDw(this);
		}
	}
}


export class DbContext extends ParserRuleContext {
	public DB(): TerminalNode { return this.getToken(asmMASMParser.DB, 0); }
	public expressionlist(): ExpressionlistContext {
		return this.getRuleContext(0, ExpressionlistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return asmMASMParser.RULE_db; }
	// @Override
	public enterRule(listener: asmMASMListener): void {
		if (listener.enterDb) {
			listener.enterDb(this);
		}
	}
	// @Override
	public exitRule(listener: asmMASMListener): void {
		if (listener.exitDb) {
			listener.exitDb(this);
		}
	}
}


export class DmContext extends ParserRuleContext {
	public DM(): TerminalNode { return this.getToken(asmMASMParser.DM, 0); }
	public expressionlist(): ExpressionlistContext {
		return this.getRuleContext(0, ExpressionlistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return asmMASMParser.RULE_dm; }
	// @Override
	public enterRule(listener: asmMASMListener): void {
		if (listener.enterDm) {
			listener.enterDm(this);
		}
	}
	// @Override
	public exitRule(listener: asmMASMListener): void {
		if (listener.exitDm) {
			listener.exitDm(this);
		}
	}
}


export class DupContext extends ParserRuleContext {
	public number(): NumberContext {
		return this.getRuleContext(0, NumberContext);
	}
	public DUP(): TerminalNode { return this.getToken(asmMASMParser.DUP, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return asmMASMParser.RULE_dup; }
	// @Override
	public enterRule(listener: asmMASMListener): void {
		if (listener.enterDup) {
			listener.enterDup(this);
		}
	}
	// @Override
	public exitRule(listener: asmMASMListener): void {
		if (listener.exitDup) {
			listener.exitDup(this);
		}
	}
}


export class EquContext extends ParserRuleContext {
	public EQU(): TerminalNode { return this.getToken(asmMASMParser.EQU, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return asmMASMParser.RULE_equ; }
	// @Override
	public enterRule(listener: asmMASMListener): void {
		if (listener.enterEqu) {
			listener.enterEqu(this);
		}
	}
	// @Override
	public exitRule(listener: asmMASMListener): void {
		if (listener.exitEqu) {
			listener.exitEqu(this);
		}
	}
}


export class ExternContext extends ParserRuleContext {
	public EXTERN(): TerminalNode { return this.getToken(asmMASMParser.EXTERN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return asmMASMParser.RULE_extern; }
	// @Override
	public enterRule(listener: asmMASMListener): void {
		if (listener.enterExtern) {
			listener.enterExtern(this);
		}
	}
	// @Override
	public exitRule(listener: asmMASMListener): void {
		if (listener.exitExtern) {
			listener.exitExtern(this);
		}
	}
}


export class If_Context extends ParserRuleContext {
	public IF(): TerminalNode { return this.getToken(asmMASMParser.IF, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return asmMASMParser.RULE_if_; }
	// @Override
	public enterRule(listener: asmMASMListener): void {
		if (listener.enterIf_) {
			listener.enterIf_(this);
		}
	}
	// @Override
	public exitRule(listener: asmMASMListener): void {
		if (listener.exitIf_) {
			listener.exitIf_(this);
		}
	}
}


export class EndifContext extends ParserRuleContext {
	public ENDIF(): TerminalNode { return this.getToken(asmMASMParser.ENDIF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return asmMASMParser.RULE_endif; }
	// @Override
	public enterRule(listener: asmMASMListener): void {
		if (listener.enterEndif) {
			listener.enterEndif(this);
		}
	}
	// @Override
	public exitRule(listener: asmMASMListener): void {
		if (listener.exitEndif) {
			listener.exitEndif(this);
		}
	}
}


export class OrgContext extends ParserRuleContext {
	public ORG(): TerminalNode { return this.getToken(asmMASMParser.ORG, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return asmMASMParser.RULE_org; }
	// @Override
	public enterRule(listener: asmMASMListener): void {
		if (listener.enterOrg) {
			listener.enterOrg(this);
		}
	}
	// @Override
	public exitRule(listener: asmMASMListener): void {
		if (listener.exitOrg) {
			listener.exitOrg(this);
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
	public get ruleIndex(): number { return asmMASMParser.RULE_expressionlist; }
	// @Override
	public enterRule(listener: asmMASMListener): void {
		if (listener.enterExpressionlist) {
			listener.enterExpressionlist(this);
		}
	}
	// @Override
	public exitRule(listener: asmMASMListener): void {
		if (listener.exitExpressionlist) {
			listener.exitExpressionlist(this);
		}
	}
}


export class LabelContext extends ParserRuleContext {
	public name(): NameContext | undefined {
		return this.tryGetRuleContext(0, NameContext);
	}
	public gross(): GrossContext | undefined {
		return this.tryGetRuleContext(0, GrossContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return asmMASMParser.RULE_label; }
	// @Override
	public enterRule(listener: asmMASMListener): void {
		if (listener.enterLabel) {
			listener.enterLabel(this);
		}
	}
	// @Override
	public exitRule(listener: asmMASMListener): void {
		if (listener.exitLabel) {
			listener.exitLabel(this);
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
			return this.getTokens(asmMASMParser.SIGN);
		} else {
			return this.getToken(asmMASMParser.SIGN, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return asmMASMParser.RULE_expression; }
	// @Override
	public enterRule(listener: asmMASMListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: asmMASMListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
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
	public get ruleIndex(): number { return asmMASMParser.RULE_multiplyingExpression; }
	// @Override
	public enterRule(listener: asmMASMListener): void {
		if (listener.enterMultiplyingExpression) {
			listener.enterMultiplyingExpression(this);
		}
	}
	// @Override
	public exitRule(listener: asmMASMListener): void {
		if (listener.exitMultiplyingExpression) {
			listener.exitMultiplyingExpression(this);
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
	public ques(): QuesContext | undefined {
		return this.tryGetRuleContext(0, QuesContext);
	}
	public register_(): Register_Context | undefined {
		return this.tryGetRuleContext(0, Register_Context);
	}
	public name(): NameContext[];
	public name(i: number): NameContext;
	public name(i?: number): NameContext | NameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NameContext);
		} else {
			return this.getRuleContext(i, NameContext);
		}
	}
	public string(): StringContext | undefined {
		return this.tryGetRuleContext(0, StringContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public NOT(): TerminalNode | undefined { return this.tryGetToken(asmMASMParser.NOT, 0); }
	public OFFSET(): TerminalNode | undefined { return this.tryGetToken(asmMASMParser.OFFSET, 0); }
	public gross(): GrossContext | undefined {
		return this.tryGetRuleContext(0, GrossContext);
	}
	public dup(): DupContext | undefined {
		return this.tryGetRuleContext(0, DupContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return asmMASMParser.RULE_argument; }
	// @Override
	public enterRule(listener: asmMASMListener): void {
		if (listener.enterArgument) {
			listener.enterArgument(this);
		}
	}
	// @Override
	public exitRule(listener: asmMASMListener): void {
		if (listener.exitArgument) {
			listener.exitArgument(this);
		}
	}
}


export class GrossContext extends ParserRuleContext {
	public opcode(): OpcodeContext | undefined {
		return this.tryGetRuleContext(0, OpcodeContext);
	}
	public grossrawassemblerdirective(): GrossrawassemblerdirectiveContext | undefined {
		return this.tryGetRuleContext(0, GrossrawassemblerdirectiveContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return asmMASMParser.RULE_gross; }
	// @Override
	public enterRule(listener: asmMASMListener): void {
		if (listener.enterGross) {
			listener.enterGross(this);
		}
	}
	// @Override
	public exitRule(listener: asmMASMListener): void {
		if (listener.exitGross) {
			listener.exitGross(this);
		}
	}
}


export class GrossrawassemblerdirectiveContext extends ParserRuleContext {
	public PUT(): TerminalNode | undefined { return this.tryGetToken(asmMASMParser.PUT, 0); }
	public IF(): TerminalNode | undefined { return this.tryGetToken(asmMASMParser.IF, 0); }
	public ENDIF(): TerminalNode | undefined { return this.tryGetToken(asmMASMParser.ENDIF, 0); }
	public ORG(): TerminalNode | undefined { return this.tryGetToken(asmMASMParser.ORG, 0); }
	public EQU(): TerminalNode | undefined { return this.tryGetToken(asmMASMParser.EQU, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return asmMASMParser.RULE_grossrawassemblerdirective; }
	// @Override
	public enterRule(listener: asmMASMListener): void {
		if (listener.enterGrossrawassemblerdirective) {
			listener.enterGrossrawassemblerdirective(this);
		}
	}
	// @Override
	public exitRule(listener: asmMASMListener): void {
		if (listener.exitGrossrawassemblerdirective) {
			listener.exitGrossrawassemblerdirective(this);
		}
	}
}


export class DollarContext extends ParserRuleContext {
	public DOLLAR(): TerminalNode { return this.getToken(asmMASMParser.DOLLAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return asmMASMParser.RULE_dollar; }
	// @Override
	public enterRule(listener: asmMASMListener): void {
		if (listener.enterDollar) {
			listener.enterDollar(this);
		}
	}
	// @Override
	public exitRule(listener: asmMASMListener): void {
		if (listener.exitDollar) {
			listener.exitDollar(this);
		}
	}
}


export class QuesContext extends ParserRuleContext {
	public QUES(): TerminalNode { return this.getToken(asmMASMParser.QUES, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return asmMASMParser.RULE_ques; }
	// @Override
	public enterRule(listener: asmMASMListener): void {
		if (listener.enterQues) {
			listener.enterQues(this);
		}
	}
	// @Override
	public exitRule(listener: asmMASMListener): void {
		if (listener.exitQues) {
			listener.exitQues(this);
		}
	}
}


export class Register_Context extends ParserRuleContext {
	public REGISTER(): TerminalNode { return this.getToken(asmMASMParser.REGISTER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return asmMASMParser.RULE_register_; }
	// @Override
	public enterRule(listener: asmMASMListener): void {
		if (listener.enterRegister_) {
			listener.enterRegister_(this);
		}
	}
	// @Override
	public exitRule(listener: asmMASMListener): void {
		if (listener.exitRegister_) {
			listener.exitRegister_(this);
		}
	}
}


export class StringContext extends ParserRuleContext {
	public STRING1(): TerminalNode | undefined { return this.tryGetToken(asmMASMParser.STRING1, 0); }
	public STRING2(): TerminalNode | undefined { return this.tryGetToken(asmMASMParser.STRING2, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return asmMASMParser.RULE_string; }
	// @Override
	public enterRule(listener: asmMASMListener): void {
		if (listener.enterString) {
			listener.enterString(this);
		}
	}
	// @Override
	public exitRule(listener: asmMASMListener): void {
		if (listener.exitString) {
			listener.exitString(this);
		}
	}
}


export class NameContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(asmMASMParser.NAME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return asmMASMParser.RULE_name; }
	// @Override
	public enterRule(listener: asmMASMListener): void {
		if (listener.enterName) {
			listener.enterName(this);
		}
	}
	// @Override
	public exitRule(listener: asmMASMListener): void {
		if (listener.exitName) {
			listener.exitName(this);
		}
	}
}


export class NumberContext extends ParserRuleContext {
	public NUMBER(): TerminalNode { return this.getToken(asmMASMParser.NUMBER, 0); }
	public SIGN(): TerminalNode | undefined { return this.tryGetToken(asmMASMParser.SIGN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return asmMASMParser.RULE_number; }
	// @Override
	public enterRule(listener: asmMASMListener): void {
		if (listener.enterNumber) {
			listener.enterNumber(this);
		}
	}
	// @Override
	public exitRule(listener: asmMASMListener): void {
		if (listener.exitNumber) {
			listener.exitNumber(this);
		}
	}
}


export class OpcodeContext extends ParserRuleContext {
	public OPCODE(): TerminalNode { return this.getToken(asmMASMParser.OPCODE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return asmMASMParser.RULE_opcode; }
	// @Override
	public enterRule(listener: asmMASMListener): void {
		if (listener.enterOpcode) {
			listener.enterOpcode(this);
		}
	}
	// @Override
	public exitRule(listener: asmMASMListener): void {
		if (listener.exitOpcode) {
			listener.exitOpcode(this);
		}
	}
}


export class RepContext extends ParserRuleContext {
	public REP(): TerminalNode { return this.getToken(asmMASMParser.REP, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return asmMASMParser.RULE_rep; }
	// @Override
	public enterRule(listener: asmMASMListener): void {
		if (listener.enterRep) {
			listener.enterRep(this);
		}
	}
	// @Override
	public exitRule(listener: asmMASMListener): void {
		if (listener.exitRep) {
			listener.exitRep(this);
		}
	}
}


export class CommentContext extends ParserRuleContext {
	public COMMENT(): TerminalNode { return this.getToken(asmMASMParser.COMMENT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return asmMASMParser.RULE_comment; }
	// @Override
	public enterRule(listener: asmMASMListener): void {
		if (listener.enterComment) {
			listener.enterComment(this);
		}
	}
	// @Override
	public exitRule(listener: asmMASMListener): void {
		if (listener.exitComment) {
			listener.exitComment(this);
		}
	}
}


