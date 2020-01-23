// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/b/b.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { bListener } from "./bListener";

export class bParser extends Parser {
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
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly T__24 = 25;
	public static readonly T__25 = 26;
	public static readonly T__26 = 27;
	public static readonly T__27 = 28;
	public static readonly T__28 = 29;
	public static readonly T__29 = 30;
	public static readonly T__30 = 31;
	public static readonly T__31 = 32;
	public static readonly T__32 = 33;
	public static readonly T__33 = 34;
	public static readonly T__34 = 35;
	public static readonly T__35 = 36;
	public static readonly T__36 = 37;
	public static readonly T__37 = 38;
	public static readonly NAME = 39;
	public static readonly INT = 40;
	public static readonly STRING1 = 41;
	public static readonly STRING2 = 42;
	public static readonly BLOCKCOMMENT = 43;
	public static readonly WS = 44;
	public static readonly RULE_program = 0;
	public static readonly RULE_definition = 1;
	public static readonly RULE_ival = 2;
	public static readonly RULE_statement = 3;
	public static readonly RULE_nullstmt = 4;
	public static readonly RULE_expressionstmt = 5;
	public static readonly RULE_blockstmt = 6;
	public static readonly RULE_returnstmt = 7;
	public static readonly RULE_gotostmt = 8;
	public static readonly RULE_switchstmt = 9;
	public static readonly RULE_whilestmt = 10;
	public static readonly RULE_ifstmt = 11;
	public static readonly RULE_casestmt = 12;
	public static readonly RULE_externsmt = 13;
	public static readonly RULE_autosmt = 14;
	public static readonly RULE_rvalue = 15;
	public static readonly RULE_ternary = 16;
	public static readonly RULE_comparison = 17;
	public static readonly RULE_assignment = 18;
	public static readonly RULE_expression = 19;
	public static readonly RULE_functioninvocation = 20;
	public static readonly RULE_functionparameters = 21;
	public static readonly RULE_assign = 22;
	public static readonly RULE_incdec = 23;
	public static readonly RULE_unary = 24;
	public static readonly RULE_binary = 25;
	public static readonly RULE_lvalue = 26;
	public static readonly RULE_constant = 27;
	public static readonly RULE_name = 28;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "definition", "ival", "statement", "nullstmt", "expressionstmt", 
		"blockstmt", "returnstmt", "gotostmt", "switchstmt", "whilestmt", "ifstmt", 
		"casestmt", "externsmt", "autosmt", "rvalue", "ternary", "comparison", 
		"assignment", "expression", "functioninvocation", "functionparameters", 
		"assign", "incdec", "unary", "binary", "lvalue", "constant", "name",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "','", "';'", "'('", "')'", "':'", "'{'", "'}'", "'return'", 
		"'goto'", "'switch'", "'while'", "'if'", "'else'", "'case'", "'extrn'", 
		"'auto'", "'?'", "'&'", "'='", "'++'", "'--'", "'-'", "'!'", "'|'", "'=='", 
		"'!='", "'<'", "'<='", "'>'", "'>='", "'<<'", "'>>'", "'+'", "'%'", "'*'", 
		"'/'", "'['", "']'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, "NAME", "INT", "STRING1", 
		"STRING2", "BLOCKCOMMENT", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(bParser._LITERAL_NAMES, bParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return bParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "b.g4"; }

	// @Override
	public get ruleNames(): string[] { return bParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return bParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(bParser._ATN, this);
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, bParser.RULE_program);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 61;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bParser.NAME) {
				{
				{
				this.state = 58;
				this.definition();
				}
				}
				this.state = 63;
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
	public definition(): DefinitionContext {
		let _localctx: DefinitionContext = new DefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, bParser.RULE_definition);
		let _la: number;
		try {
			this.state = 98;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 64;
				this.name();
				this.state = 66;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
				case 1:
					{
					this.state = 65;
					this.constant();
					}
					break;
				}
				this.state = 78;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (bParser.NAME - 39)) | (1 << (bParser.INT - 39)) | (1 << (bParser.STRING1 - 39)) | (1 << (bParser.STRING2 - 39)))) !== 0)) {
					{
					{
					this.state = 68;
					this.ival();
					this.state = 73;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === bParser.T__0) {
						{
						{
						this.state = 69;
						this.match(bParser.T__0);
						this.state = 70;
						this.ival();
						}
						}
						this.state = 75;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
					}
					this.state = 80;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 81;
				this.match(bParser.T__1);
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				{
				this.state = 83;
				this.name();
				this.state = 84;
				this.match(bParser.T__2);
				this.state = 93;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === bParser.NAME) {
					{
					this.state = 85;
					this.name();
					this.state = 90;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === bParser.T__0) {
						{
						{
						this.state = 86;
						this.match(bParser.T__0);
						this.state = 87;
						this.name();
						}
						}
						this.state = 92;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 95;
				this.match(bParser.T__3);
				this.state = 96;
				this.statement();
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
	public ival(): IvalContext {
		let _localctx: IvalContext = new IvalContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, bParser.RULE_ival);
		try {
			this.state = 102;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case bParser.INT:
			case bParser.STRING1:
			case bParser.STRING2:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 100;
				this.constant();
				}
				break;
			case bParser.NAME:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 101;
				this.name();
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
		this.enterRule(_localctx, 6, bParser.RULE_statement);
		try {
			this.state = 119;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 104;
				this.externsmt();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 105;
				this.autosmt();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				{
				this.state = 106;
				this.name();
				this.state = 107;
				this.match(bParser.T__4);
				this.state = 108;
				this.statement();
				}
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 110;
				this.casestmt();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 111;
				this.blockstmt();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 112;
				this.ifstmt();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 113;
				this.whilestmt();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 114;
				this.switchstmt();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 115;
				this.gotostmt();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 116;
				this.returnstmt();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 117;
				this.expressionstmt();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 118;
				this.nullstmt();
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
	public nullstmt(): NullstmtContext {
		let _localctx: NullstmtContext = new NullstmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, bParser.RULE_nullstmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 121;
			this.match(bParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionstmt(): ExpressionstmtContext {
		let _localctx: ExpressionstmtContext = new ExpressionstmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, bParser.RULE_expressionstmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 123;
			this.rvalue();
			this.state = 124;
			this.match(bParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public blockstmt(): BlockstmtContext {
		let _localctx: BlockstmtContext = new BlockstmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, bParser.RULE_blockstmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 126;
			this.match(bParser.T__5);
			this.state = 130;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << bParser.T__1) | (1 << bParser.T__2) | (1 << bParser.T__5) | (1 << bParser.T__7) | (1 << bParser.T__8) | (1 << bParser.T__9) | (1 << bParser.T__10) | (1 << bParser.T__11) | (1 << bParser.T__13) | (1 << bParser.T__14) | (1 << bParser.T__15) | (1 << bParser.T__17) | (1 << bParser.T__19) | (1 << bParser.T__20) | (1 << bParser.T__21) | (1 << bParser.T__22))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (bParser.NAME - 39)) | (1 << (bParser.INT - 39)) | (1 << (bParser.STRING1 - 39)) | (1 << (bParser.STRING2 - 39)))) !== 0)) {
				{
				{
				this.state = 127;
				this.statement();
				}
				}
				this.state = 132;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 133;
			this.match(bParser.T__6);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 14, bParser.RULE_returnstmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 135;
			this.match(bParser.T__7);
			this.state = 140;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === bParser.T__2) {
				{
				this.state = 136;
				this.match(bParser.T__2);
				this.state = 137;
				this.rvalue();
				this.state = 138;
				this.match(bParser.T__3);
				}
			}

			this.state = 142;
			this.match(bParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 16, bParser.RULE_gotostmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 144;
			this.match(bParser.T__8);
			this.state = 145;
			this.rvalue();
			this.state = 146;
			this.match(bParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public switchstmt(): SwitchstmtContext {
		let _localctx: SwitchstmtContext = new SwitchstmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, bParser.RULE_switchstmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 148;
			this.match(bParser.T__9);
			this.state = 149;
			this.rvalue();
			this.state = 150;
			this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public whilestmt(): WhilestmtContext {
		let _localctx: WhilestmtContext = new WhilestmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, bParser.RULE_whilestmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 152;
			this.match(bParser.T__10);
			this.state = 153;
			this.match(bParser.T__2);
			this.state = 154;
			this.rvalue();
			this.state = 155;
			this.match(bParser.T__3);
			this.state = 156;
			this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 22, bParser.RULE_ifstmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 158;
			this.match(bParser.T__11);
			this.state = 159;
			this.match(bParser.T__2);
			this.state = 160;
			this.rvalue();
			this.state = 161;
			this.match(bParser.T__3);
			this.state = 162;
			this.statement();
			this.state = 165;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				{
				this.state = 163;
				this.match(bParser.T__12);
				this.state = 164;
				this.statement();
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
	public casestmt(): CasestmtContext {
		let _localctx: CasestmtContext = new CasestmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, bParser.RULE_casestmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 167;
			this.match(bParser.T__13);
			this.state = 168;
			this.constant();
			this.state = 169;
			this.match(bParser.T__4);
			this.state = 170;
			this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public externsmt(): ExternsmtContext {
		let _localctx: ExternsmtContext = new ExternsmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, bParser.RULE_externsmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 172;
			this.match(bParser.T__14);
			this.state = 173;
			this.name();
			this.state = 178;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bParser.T__0) {
				{
				{
				this.state = 174;
				this.match(bParser.T__0);
				this.state = 175;
				this.name();
				}
				}
				this.state = 180;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 181;
			this.match(bParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public autosmt(): AutosmtContext {
		let _localctx: AutosmtContext = new AutosmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, bParser.RULE_autosmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 183;
			this.match(bParser.T__15);
			this.state = 184;
			this.name();
			this.state = 186;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (bParser.INT - 40)) | (1 << (bParser.STRING1 - 40)) | (1 << (bParser.STRING2 - 40)))) !== 0)) {
				{
				this.state = 185;
				this.constant();
				}
			}

			this.state = 195;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bParser.T__0) {
				{
				{
				this.state = 188;
				this.match(bParser.T__0);
				this.state = 189;
				this.name();
				this.state = 191;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (bParser.INT - 40)) | (1 << (bParser.STRING1 - 40)) | (1 << (bParser.STRING2 - 40)))) !== 0)) {
					{
					this.state = 190;
					this.constant();
					}
				}

				}
				}
				this.state = 197;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 198;
			this.match(bParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rvalue(): RvalueContext {
		let _localctx: RvalueContext = new RvalueContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, bParser.RULE_rvalue);
		try {
			this.state = 204;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 200;
				this.expression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 201;
				this.comparison();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 202;
				this.ternary();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 203;
				this.assignment();
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
	public ternary(): TernaryContext {
		let _localctx: TernaryContext = new TernaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, bParser.RULE_ternary);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 206;
			this.expression();
			this.state = 207;
			this.match(bParser.T__16);
			this.state = 208;
			this.rvalue();
			this.state = 209;
			this.match(bParser.T__4);
			this.state = 210;
			this.rvalue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public comparison(): ComparisonContext {
		let _localctx: ComparisonContext = new ComparisonContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, bParser.RULE_comparison);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 212;
			this.expression();
			this.state = 213;
			this.binary();
			this.state = 214;
			this.rvalue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignment(): AssignmentContext {
		let _localctx: AssignmentContext = new AssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, bParser.RULE_assignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 216;
			this.name();
			this.state = 217;
			this.assign();
			this.state = 218;
			this.rvalue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 38, bParser.RULE_expression);
		try {
			this.state = 238;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 220;
				this.match(bParser.T__2);
				this.state = 221;
				this.rvalue();
				this.state = 222;
				this.match(bParser.T__3);
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 224;
				this.name();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 225;
				this.constant();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				{
				this.state = 226;
				this.incdec();
				this.state = 227;
				this.name();
				}
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				{
				this.state = 229;
				this.name();
				this.state = 230;
				this.incdec();
				}
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				{
				this.state = 232;
				this.unary();
				this.state = 233;
				this.rvalue();
				}
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				{
				this.state = 235;
				this.match(bParser.T__17);
				this.state = 236;
				this.name();
				}
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 237;
				this.functioninvocation();
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
	public functioninvocation(): FunctioninvocationContext {
		let _localctx: FunctioninvocationContext = new FunctioninvocationContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, bParser.RULE_functioninvocation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 240;
			this.name();
			this.state = 241;
			this.match(bParser.T__2);
			this.state = 243;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << bParser.T__2) | (1 << bParser.T__17) | (1 << bParser.T__19) | (1 << bParser.T__20) | (1 << bParser.T__21) | (1 << bParser.T__22))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (bParser.NAME - 39)) | (1 << (bParser.INT - 39)) | (1 << (bParser.STRING1 - 39)) | (1 << (bParser.STRING2 - 39)))) !== 0)) {
				{
				this.state = 242;
				this.functionparameters();
				}
			}

			this.state = 245;
			this.match(bParser.T__3);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionparameters(): FunctionparametersContext {
		let _localctx: FunctionparametersContext = new FunctionparametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, bParser.RULE_functionparameters);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 247;
			this.rvalue();
			this.state = 252;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bParser.T__0) {
				{
				{
				this.state = 248;
				this.match(bParser.T__0);
				this.state = 249;
				this.rvalue();
				}
				}
				this.state = 254;
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
	public assign(): AssignContext {
		let _localctx: AssignContext = new AssignContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, bParser.RULE_assign);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 255;
			this.match(bParser.T__18);
			this.state = 257;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 20, this._ctx) ) {
			case 1:
				{
				this.state = 256;
				this.binary();
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
	public incdec(): IncdecContext {
		let _localctx: IncdecContext = new IncdecContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, bParser.RULE_incdec);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 259;
			_la = this._input.LA(1);
			if (!(_la === bParser.T__19 || _la === bParser.T__20)) {
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
	public unary(): UnaryContext {
		let _localctx: UnaryContext = new UnaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, bParser.RULE_unary);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 261;
			_la = this._input.LA(1);
			if (!(_la === bParser.T__21 || _la === bParser.T__22)) {
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
	public binary(): BinaryContext {
		let _localctx: BinaryContext = new BinaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, bParser.RULE_binary);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 263;
			_la = this._input.LA(1);
			if (!(((((_la - 18)) & ~0x1F) === 0 && ((1 << (_la - 18)) & ((1 << (bParser.T__17 - 18)) | (1 << (bParser.T__21 - 18)) | (1 << (bParser.T__23 - 18)) | (1 << (bParser.T__24 - 18)) | (1 << (bParser.T__25 - 18)) | (1 << (bParser.T__26 - 18)) | (1 << (bParser.T__27 - 18)) | (1 << (bParser.T__28 - 18)) | (1 << (bParser.T__29 - 18)) | (1 << (bParser.T__30 - 18)) | (1 << (bParser.T__31 - 18)) | (1 << (bParser.T__32 - 18)) | (1 << (bParser.T__33 - 18)) | (1 << (bParser.T__34 - 18)) | (1 << (bParser.T__35 - 18)))) !== 0))) {
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
	public lvalue(): LvalueContext {
		let _localctx: LvalueContext = new LvalueContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, bParser.RULE_lvalue);
		try {
			this.state = 273;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 265;
				this.name();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				{
				this.state = 266;
				this.match(bParser.T__34);
				this.state = 267;
				this.rvalue();
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				{
				this.state = 268;
				this.rvalue();
				this.state = 269;
				this.match(bParser.T__36);
				this.state = 270;
				this.rvalue();
				this.state = 271;
				this.match(bParser.T__37);
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
	public constant(): ConstantContext {
		let _localctx: ConstantContext = new ConstantContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, bParser.RULE_constant);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 275;
			_la = this._input.LA(1);
			if (!(((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (bParser.INT - 40)) | (1 << (bParser.STRING1 - 40)) | (1 << (bParser.STRING2 - 40)))) !== 0))) {
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
		this.enterRule(_localctx, 56, bParser.RULE_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 277;
			this.match(bParser.NAME);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03.\u011A\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x03\x02\x07\x02>\n\x02\f\x02\x0E\x02A\v\x02\x03" +
		"\x03\x03\x03\x05\x03E\n\x03\x03\x03\x03\x03\x03\x03\x07\x03J\n\x03\f\x03" +
		"\x0E\x03M\v\x03\x07\x03O\n\x03\f\x03\x0E\x03R\v\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x07\x03[\n\x03\f\x03\x0E\x03^\v\x03" +
		"\x05\x03`\n\x03\x03\x03\x03\x03\x03\x03\x05\x03e\n\x03\x03\x04\x03\x04" +
		"\x05\x04i\n\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05" +
		"z\n\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x07\b\x83" +
		"\n\b\f\b\x0E\b\x86\v\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x05\t" +
		"\x8F\n\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x05\r\xA8\n\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x07\x0F\xB3\n\x0F\f\x0F\x0E\x0F\xB6\v\x0F\x03\x0F\x03" +
		"\x0F\x03\x10\x03\x10\x03\x10\x05\x10\xBD\n\x10\x03\x10\x03\x10\x03\x10" +
		"\x05\x10\xC2\n\x10\x07\x10\xC4\n\x10\f\x10\x0E\x10\xC7\v\x10\x03\x10\x03" +
		"\x10\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\xCF\n\x11\x03\x12\x03\x12" +
		"\x03\x12\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x14" +
		"\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15" +
		"\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15" +
		"\x03\x15\x03\x15\x03\x15\x05\x15\xF1\n\x15\x03\x16\x03\x16\x03\x16\x05" +
		"\x16\xF6\n\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x07\x17\xFD\n\x17" +
		"\f\x17\x0E\x17\u0100\v\x17\x03\x18\x03\x18\x05\x18\u0104\n\x18\x03\x19" +
		"\x03\x19\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C" +
		"\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x05\x1C\u0114\n\x1C\x03\x1D\x03\x1D\x03" +
		"\x1E\x03\x1E\x03\x1E\x02\x02\x02\x1F\x02\x02\x04\x02\x06\x02\b\x02\n\x02" +
		"\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02" +
		"\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x02" +
		"8\x02:\x02\x02\x06\x03\x02\x16\x17\x03\x02\x18\x19\x05\x02\x14\x14\x18" +
		"\x18\x1A&\x03\x02*,\x02\u0125\x02?\x03\x02\x02\x02\x04d\x03\x02\x02\x02" +
		"\x06h\x03\x02\x02\x02\by\x03\x02\x02\x02\n{\x03\x02\x02\x02\f}\x03\x02" +
		"\x02\x02\x0E\x80\x03\x02\x02\x02\x10\x89\x03\x02\x02\x02\x12\x92\x03\x02" +
		"\x02\x02\x14\x96\x03\x02\x02\x02\x16\x9A\x03\x02\x02\x02\x18\xA0\x03\x02" +
		"\x02\x02\x1A\xA9\x03\x02\x02\x02\x1C\xAE\x03\x02\x02\x02\x1E\xB9\x03\x02" +
		"\x02\x02 \xCE\x03\x02\x02\x02\"\xD0\x03\x02\x02\x02$\xD6\x03\x02\x02\x02" +
		"&\xDA\x03\x02\x02\x02(\xF0\x03\x02\x02\x02*\xF2\x03\x02\x02\x02,\xF9\x03" +
		"\x02\x02\x02.\u0101\x03\x02\x02\x020\u0105\x03\x02\x02\x022\u0107\x03" +
		"\x02\x02\x024\u0109\x03\x02\x02\x026\u0113\x03\x02\x02\x028\u0115\x03" +
		"\x02\x02\x02:\u0117\x03\x02\x02\x02<>\x05\x04\x03\x02=<\x03\x02\x02\x02" +
		">A\x03\x02\x02\x02?=\x03\x02\x02\x02?@\x03\x02\x02\x02@\x03\x03\x02\x02" +
		"\x02A?\x03\x02\x02\x02BD\x05:\x1E\x02CE\x058\x1D\x02DC\x03\x02\x02\x02" +
		"DE\x03\x02\x02\x02EP\x03\x02\x02\x02FK\x05\x06\x04\x02GH\x07\x03\x02\x02" +
		"HJ\x05\x06\x04\x02IG\x03\x02\x02\x02JM\x03\x02\x02\x02KI\x03\x02\x02\x02" +
		"KL\x03\x02\x02\x02LO\x03\x02\x02\x02MK\x03\x02\x02\x02NF\x03\x02\x02\x02" +
		"OR\x03\x02\x02\x02PN\x03\x02\x02\x02PQ\x03\x02\x02\x02QS\x03\x02\x02\x02" +
		"RP\x03\x02\x02\x02ST\x07\x04\x02\x02Te\x03\x02\x02\x02UV\x05:\x1E\x02" +
		"V_\x07\x05\x02\x02W\\\x05:\x1E\x02XY\x07\x03\x02\x02Y[\x05:\x1E\x02ZX" +
		"\x03\x02\x02\x02[^\x03\x02\x02\x02\\Z\x03\x02\x02\x02\\]\x03\x02\x02\x02" +
		"]`\x03\x02\x02\x02^\\\x03\x02\x02\x02_W\x03\x02\x02\x02_`\x03\x02\x02" +
		"\x02`a\x03\x02\x02\x02ab\x07\x06\x02\x02bc\x05\b\x05\x02ce\x03\x02\x02" +
		"\x02dB\x03\x02\x02\x02dU\x03\x02\x02\x02e\x05\x03\x02\x02\x02fi\x058\x1D" +
		"\x02gi\x05:\x1E\x02hf\x03\x02\x02\x02hg\x03\x02\x02\x02i\x07\x03\x02\x02" +
		"\x02jz\x05\x1C\x0F\x02kz\x05\x1E\x10\x02lm\x05:\x1E\x02mn\x07\x07\x02" +
		"\x02no\x05\b\x05\x02oz\x03\x02\x02\x02pz\x05\x1A\x0E\x02qz\x05\x0E\b\x02" +
		"rz\x05\x18\r\x02sz\x05\x16\f\x02tz\x05\x14\v\x02uz\x05\x12\n\x02vz\x05" +
		"\x10\t\x02wz\x05\f\x07\x02xz\x05\n\x06\x02yj\x03\x02\x02\x02yk\x03\x02" +
		"\x02\x02yl\x03\x02\x02\x02yp\x03\x02\x02\x02yq\x03\x02\x02\x02yr\x03\x02" +
		"\x02\x02ys\x03\x02\x02\x02yt\x03\x02\x02\x02yu\x03\x02\x02\x02yv\x03\x02" +
		"\x02\x02yw\x03\x02\x02\x02yx\x03\x02\x02\x02z\t\x03\x02\x02\x02{|\x07" +
		"\x04\x02\x02|\v\x03\x02\x02\x02}~\x05 \x11\x02~\x7F\x07\x04\x02\x02\x7F" +
		"\r\x03\x02\x02\x02\x80\x84\x07\b\x02\x02\x81\x83\x05\b\x05\x02\x82\x81" +
		"\x03\x02\x02\x02\x83\x86\x03\x02\x02\x02\x84\x82\x03\x02\x02\x02\x84\x85" +
		"\x03\x02\x02\x02\x85\x87\x03\x02\x02\x02\x86\x84\x03\x02\x02\x02\x87\x88" +
		"\x07\t\x02\x02\x88\x0F\x03\x02\x02\x02\x89\x8E\x07\n\x02\x02\x8A\x8B\x07" +
		"\x05\x02\x02\x8B\x8C\x05 \x11\x02\x8C\x8D\x07\x06\x02\x02\x8D\x8F\x03" +
		"\x02\x02\x02\x8E\x8A\x03\x02\x02\x02\x8E\x8F\x03\x02\x02\x02\x8F\x90\x03" +
		"\x02\x02\x02\x90\x91\x07\x04\x02\x02\x91\x11\x03\x02\x02\x02\x92\x93\x07" +
		"\v\x02\x02\x93\x94\x05 \x11\x02\x94\x95\x07\x04\x02\x02\x95\x13\x03\x02" +
		"\x02\x02\x96\x97\x07\f\x02\x02\x97\x98\x05 \x11\x02\x98\x99\x05\b\x05" +
		"\x02\x99\x15\x03\x02\x02\x02\x9A\x9B\x07\r\x02\x02\x9B\x9C\x07\x05\x02" +
		"\x02\x9C\x9D\x05 \x11\x02\x9D\x9E\x07\x06\x02\x02\x9E\x9F\x05\b\x05\x02" +
		"\x9F\x17\x03\x02\x02\x02\xA0\xA1\x07\x0E\x02\x02\xA1\xA2\x07\x05\x02\x02" +
		"\xA2\xA3\x05 \x11\x02\xA3\xA4\x07\x06\x02\x02\xA4\xA7\x05\b\x05\x02\xA5" +
		"\xA6\x07\x0F\x02\x02\xA6\xA8\x05\b\x05\x02\xA7\xA5\x03\x02\x02\x02\xA7" +
		"\xA8\x03\x02\x02\x02\xA8\x19\x03\x02\x02\x02\xA9\xAA\x07\x10\x02\x02\xAA" +
		"\xAB\x058\x1D\x02\xAB\xAC\x07\x07\x02\x02\xAC\xAD\x05\b\x05\x02\xAD\x1B" +
		"\x03\x02\x02\x02\xAE\xAF\x07\x11\x02\x02\xAF\xB4\x05:\x1E\x02\xB0\xB1" +
		"\x07\x03\x02\x02\xB1\xB3\x05:\x1E\x02\xB2\xB0\x03\x02\x02\x02\xB3\xB6" +
		"\x03\x02\x02\x02\xB4\xB2\x03\x02\x02\x02\xB4\xB5\x03\x02\x02\x02\xB5\xB7" +
		"\x03\x02\x02\x02\xB6\xB4\x03\x02\x02\x02\xB7\xB8\x07\x04\x02\x02\xB8\x1D" +
		"\x03\x02\x02\x02\xB9\xBA\x07\x12\x02\x02\xBA\xBC\x05:\x1E\x02\xBB\xBD" +
		"\x058\x1D\x02\xBC\xBB\x03\x02\x02\x02\xBC\xBD\x03\x02\x02\x02\xBD\xC5" +
		"\x03\x02\x02\x02\xBE\xBF\x07\x03\x02\x02\xBF\xC1\x05:\x1E\x02\xC0\xC2" +
		"\x058\x1D\x02\xC1\xC0\x03\x02\x02\x02\xC1\xC2\x03\x02\x02\x02\xC2\xC4" +
		"\x03\x02\x02\x02\xC3\xBE\x03\x02\x02\x02\xC4\xC7\x03\x02\x02\x02\xC5\xC3" +
		"\x03\x02\x02\x02\xC5\xC6\x03\x02\x02\x02\xC6\xC8\x03\x02\x02\x02\xC7\xC5" +
		"\x03\x02\x02\x02\xC8\xC9\x07\x04\x02\x02\xC9\x1F\x03\x02\x02\x02\xCA\xCF" +
		"\x05(\x15\x02\xCB\xCF\x05$\x13\x02\xCC\xCF\x05\"\x12\x02\xCD\xCF\x05&" +
		"\x14\x02\xCE\xCA\x03\x02\x02\x02\xCE\xCB\x03\x02\x02\x02\xCE\xCC\x03\x02" +
		"\x02\x02\xCE\xCD\x03\x02\x02\x02\xCF!\x03\x02\x02\x02\xD0\xD1\x05(\x15" +
		"\x02\xD1\xD2\x07\x13\x02\x02\xD2\xD3\x05 \x11\x02\xD3\xD4\x07\x07\x02" +
		"\x02\xD4\xD5\x05 \x11\x02\xD5#\x03\x02\x02\x02\xD6\xD7\x05(\x15\x02\xD7" +
		"\xD8\x054\x1B\x02\xD8\xD9\x05 \x11\x02\xD9%\x03\x02\x02\x02\xDA\xDB\x05" +
		":\x1E\x02\xDB\xDC\x05.\x18\x02\xDC\xDD\x05 \x11\x02\xDD\'\x03\x02\x02" +
		"\x02\xDE\xDF\x07\x05\x02\x02\xDF\xE0\x05 \x11\x02\xE0\xE1\x07\x06\x02" +
		"\x02\xE1\xF1\x03\x02\x02\x02\xE2\xF1\x05:\x1E\x02\xE3\xF1\x058\x1D\x02" +
		"\xE4\xE5\x050\x19\x02\xE5\xE6\x05:\x1E\x02\xE6\xF1\x03\x02\x02\x02\xE7" +
		"\xE8\x05:\x1E\x02\xE8\xE9\x050\x19\x02\xE9\xF1\x03\x02\x02\x02\xEA\xEB" +
		"\x052\x1A\x02\xEB\xEC\x05 \x11\x02\xEC\xF1\x03\x02\x02\x02\xED\xEE\x07" +
		"\x14\x02\x02\xEE\xF1\x05:\x1E\x02\xEF\xF1\x05*\x16\x02\xF0\xDE\x03\x02" +
		"\x02\x02\xF0\xE2\x03\x02\x02\x02\xF0\xE3\x03\x02\x02\x02\xF0\xE4\x03\x02" +
		"\x02\x02\xF0\xE7\x03\x02\x02\x02\xF0\xEA\x03\x02\x02\x02\xF0\xED\x03\x02" +
		"\x02\x02\xF0\xEF\x03\x02\x02\x02\xF1)\x03\x02\x02\x02\xF2\xF3\x05:\x1E" +
		"\x02\xF3\xF5\x07\x05\x02\x02\xF4\xF6\x05,\x17\x02\xF5\xF4\x03\x02\x02" +
		"\x02\xF5\xF6\x03\x02\x02\x02\xF6\xF7\x03\x02\x02\x02\xF7\xF8\x07\x06\x02" +
		"\x02\xF8+\x03\x02\x02\x02\xF9\xFE\x05 \x11\x02\xFA\xFB\x07\x03\x02\x02" +
		"\xFB\xFD\x05 \x11\x02\xFC\xFA\x03\x02\x02\x02\xFD\u0100\x03\x02\x02\x02" +
		"\xFE\xFC\x03\x02\x02\x02\xFE\xFF\x03\x02\x02\x02\xFF-\x03\x02\x02\x02" +
		"\u0100\xFE\x03\x02\x02\x02\u0101\u0103\x07\x15\x02\x02\u0102\u0104\x05" +
		"4\x1B\x02\u0103\u0102\x03\x02\x02\x02\u0103\u0104\x03\x02\x02\x02\u0104" +
		"/\x03\x02\x02\x02\u0105\u0106\t\x02\x02\x02\u01061\x03\x02\x02\x02\u0107" +
		"\u0108\t\x03\x02\x02\u01083\x03\x02\x02\x02\u0109\u010A\t\x04\x02\x02" +
		"\u010A5\x03\x02\x02\x02\u010B\u0114\x05:\x1E\x02\u010C\u010D\x07%\x02" +
		"\x02\u010D\u0114\x05 \x11\x02\u010E\u010F\x05 \x11\x02\u010F\u0110\x07" +
		"\'\x02\x02\u0110\u0111\x05 \x11\x02\u0111\u0112\x07(\x02\x02\u0112\u0114" +
		"\x03\x02\x02\x02\u0113\u010B\x03\x02\x02\x02\u0113\u010C\x03\x02\x02\x02" +
		"\u0113\u010E\x03\x02\x02\x02\u01147\x03\x02\x02\x02\u0115\u0116\t\x05" +
		"\x02\x02\u01169\x03\x02\x02\x02\u0117\u0118\x07)\x02\x02\u0118;\x03\x02" +
		"\x02\x02\x18?DKP\\_dhy\x84\x8E\xA7\xB4\xBC\xC1\xC5\xCE\xF0\xF5\xFE\u0103" +
		"\u0113";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!bParser.__ATN) {
			bParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(bParser._serializedATN));
		}

		return bParser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	public definition(): DefinitionContext[];
	public definition(i: number): DefinitionContext;
	public definition(i?: number): DefinitionContext | DefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DefinitionContext);
		} else {
			return this.getRuleContext(i, DefinitionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bParser.RULE_program; }
	// @Override
	public enterRule(listener: bListener): void {
		if (listener.enterProgram) {
			listener.enterProgram(this);
		}
	}
	// @Override
	public exitRule(listener: bListener): void {
		if (listener.exitProgram) {
			listener.exitProgram(this);
		}
	}
}


export class DefinitionContext extends ParserRuleContext {
	public name(): NameContext[];
	public name(i: number): NameContext;
	public name(i?: number): NameContext | NameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NameContext);
		} else {
			return this.getRuleContext(i, NameContext);
		}
	}
	public constant(): ConstantContext | undefined {
		return this.tryGetRuleContext(0, ConstantContext);
	}
	public ival(): IvalContext[];
	public ival(i: number): IvalContext;
	public ival(i?: number): IvalContext | IvalContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IvalContext);
		} else {
			return this.getRuleContext(i, IvalContext);
		}
	}
	public statement(): StatementContext | undefined {
		return this.tryGetRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bParser.RULE_definition; }
	// @Override
	public enterRule(listener: bListener): void {
		if (listener.enterDefinition) {
			listener.enterDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: bListener): void {
		if (listener.exitDefinition) {
			listener.exitDefinition(this);
		}
	}
}


export class IvalContext extends ParserRuleContext {
	public constant(): ConstantContext | undefined {
		return this.tryGetRuleContext(0, ConstantContext);
	}
	public name(): NameContext | undefined {
		return this.tryGetRuleContext(0, NameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bParser.RULE_ival; }
	// @Override
	public enterRule(listener: bListener): void {
		if (listener.enterIval) {
			listener.enterIval(this);
		}
	}
	// @Override
	public exitRule(listener: bListener): void {
		if (listener.exitIval) {
			listener.exitIval(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public externsmt(): ExternsmtContext | undefined {
		return this.tryGetRuleContext(0, ExternsmtContext);
	}
	public autosmt(): AutosmtContext | undefined {
		return this.tryGetRuleContext(0, AutosmtContext);
	}
	public name(): NameContext | undefined {
		return this.tryGetRuleContext(0, NameContext);
	}
	public statement(): StatementContext | undefined {
		return this.tryGetRuleContext(0, StatementContext);
	}
	public casestmt(): CasestmtContext | undefined {
		return this.tryGetRuleContext(0, CasestmtContext);
	}
	public blockstmt(): BlockstmtContext | undefined {
		return this.tryGetRuleContext(0, BlockstmtContext);
	}
	public ifstmt(): IfstmtContext | undefined {
		return this.tryGetRuleContext(0, IfstmtContext);
	}
	public whilestmt(): WhilestmtContext | undefined {
		return this.tryGetRuleContext(0, WhilestmtContext);
	}
	public switchstmt(): SwitchstmtContext | undefined {
		return this.tryGetRuleContext(0, SwitchstmtContext);
	}
	public gotostmt(): GotostmtContext | undefined {
		return this.tryGetRuleContext(0, GotostmtContext);
	}
	public returnstmt(): ReturnstmtContext | undefined {
		return this.tryGetRuleContext(0, ReturnstmtContext);
	}
	public expressionstmt(): ExpressionstmtContext | undefined {
		return this.tryGetRuleContext(0, ExpressionstmtContext);
	}
	public nullstmt(): NullstmtContext | undefined {
		return this.tryGetRuleContext(0, NullstmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bParser.RULE_statement; }
	// @Override
	public enterRule(listener: bListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: bListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
}


export class NullstmtContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bParser.RULE_nullstmt; }
	// @Override
	public enterRule(listener: bListener): void {
		if (listener.enterNullstmt) {
			listener.enterNullstmt(this);
		}
	}
	// @Override
	public exitRule(listener: bListener): void {
		if (listener.exitNullstmt) {
			listener.exitNullstmt(this);
		}
	}
}


export class ExpressionstmtContext extends ParserRuleContext {
	public rvalue(): RvalueContext {
		return this.getRuleContext(0, RvalueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bParser.RULE_expressionstmt; }
	// @Override
	public enterRule(listener: bListener): void {
		if (listener.enterExpressionstmt) {
			listener.enterExpressionstmt(this);
		}
	}
	// @Override
	public exitRule(listener: bListener): void {
		if (listener.exitExpressionstmt) {
			listener.exitExpressionstmt(this);
		}
	}
}


export class BlockstmtContext extends ParserRuleContext {
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bParser.RULE_blockstmt; }
	// @Override
	public enterRule(listener: bListener): void {
		if (listener.enterBlockstmt) {
			listener.enterBlockstmt(this);
		}
	}
	// @Override
	public exitRule(listener: bListener): void {
		if (listener.exitBlockstmt) {
			listener.exitBlockstmt(this);
		}
	}
}


export class ReturnstmtContext extends ParserRuleContext {
	public rvalue(): RvalueContext | undefined {
		return this.tryGetRuleContext(0, RvalueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bParser.RULE_returnstmt; }
	// @Override
	public enterRule(listener: bListener): void {
		if (listener.enterReturnstmt) {
			listener.enterReturnstmt(this);
		}
	}
	// @Override
	public exitRule(listener: bListener): void {
		if (listener.exitReturnstmt) {
			listener.exitReturnstmt(this);
		}
	}
}


export class GotostmtContext extends ParserRuleContext {
	public rvalue(): RvalueContext {
		return this.getRuleContext(0, RvalueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bParser.RULE_gotostmt; }
	// @Override
	public enterRule(listener: bListener): void {
		if (listener.enterGotostmt) {
			listener.enterGotostmt(this);
		}
	}
	// @Override
	public exitRule(listener: bListener): void {
		if (listener.exitGotostmt) {
			listener.exitGotostmt(this);
		}
	}
}


export class SwitchstmtContext extends ParserRuleContext {
	public rvalue(): RvalueContext {
		return this.getRuleContext(0, RvalueContext);
	}
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bParser.RULE_switchstmt; }
	// @Override
	public enterRule(listener: bListener): void {
		if (listener.enterSwitchstmt) {
			listener.enterSwitchstmt(this);
		}
	}
	// @Override
	public exitRule(listener: bListener): void {
		if (listener.exitSwitchstmt) {
			listener.exitSwitchstmt(this);
		}
	}
}


export class WhilestmtContext extends ParserRuleContext {
	public rvalue(): RvalueContext {
		return this.getRuleContext(0, RvalueContext);
	}
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bParser.RULE_whilestmt; }
	// @Override
	public enterRule(listener: bListener): void {
		if (listener.enterWhilestmt) {
			listener.enterWhilestmt(this);
		}
	}
	// @Override
	public exitRule(listener: bListener): void {
		if (listener.exitWhilestmt) {
			listener.exitWhilestmt(this);
		}
	}
}


export class IfstmtContext extends ParserRuleContext {
	public rvalue(): RvalueContext {
		return this.getRuleContext(0, RvalueContext);
	}
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bParser.RULE_ifstmt; }
	// @Override
	public enterRule(listener: bListener): void {
		if (listener.enterIfstmt) {
			listener.enterIfstmt(this);
		}
	}
	// @Override
	public exitRule(listener: bListener): void {
		if (listener.exitIfstmt) {
			listener.exitIfstmt(this);
		}
	}
}


export class CasestmtContext extends ParserRuleContext {
	public constant(): ConstantContext {
		return this.getRuleContext(0, ConstantContext);
	}
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bParser.RULE_casestmt; }
	// @Override
	public enterRule(listener: bListener): void {
		if (listener.enterCasestmt) {
			listener.enterCasestmt(this);
		}
	}
	// @Override
	public exitRule(listener: bListener): void {
		if (listener.exitCasestmt) {
			listener.exitCasestmt(this);
		}
	}
}


export class ExternsmtContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return bParser.RULE_externsmt; }
	// @Override
	public enterRule(listener: bListener): void {
		if (listener.enterExternsmt) {
			listener.enterExternsmt(this);
		}
	}
	// @Override
	public exitRule(listener: bListener): void {
		if (listener.exitExternsmt) {
			listener.exitExternsmt(this);
		}
	}
}


export class AutosmtContext extends ParserRuleContext {
	public name(): NameContext[];
	public name(i: number): NameContext;
	public name(i?: number): NameContext | NameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NameContext);
		} else {
			return this.getRuleContext(i, NameContext);
		}
	}
	public constant(): ConstantContext[];
	public constant(i: number): ConstantContext;
	public constant(i?: number): ConstantContext | ConstantContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConstantContext);
		} else {
			return this.getRuleContext(i, ConstantContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bParser.RULE_autosmt; }
	// @Override
	public enterRule(listener: bListener): void {
		if (listener.enterAutosmt) {
			listener.enterAutosmt(this);
		}
	}
	// @Override
	public exitRule(listener: bListener): void {
		if (listener.exitAutosmt) {
			listener.exitAutosmt(this);
		}
	}
}


export class RvalueContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public comparison(): ComparisonContext | undefined {
		return this.tryGetRuleContext(0, ComparisonContext);
	}
	public ternary(): TernaryContext | undefined {
		return this.tryGetRuleContext(0, TernaryContext);
	}
	public assignment(): AssignmentContext | undefined {
		return this.tryGetRuleContext(0, AssignmentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bParser.RULE_rvalue; }
	// @Override
	public enterRule(listener: bListener): void {
		if (listener.enterRvalue) {
			listener.enterRvalue(this);
		}
	}
	// @Override
	public exitRule(listener: bListener): void {
		if (listener.exitRvalue) {
			listener.exitRvalue(this);
		}
	}
}


export class TernaryContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public rvalue(): RvalueContext[];
	public rvalue(i: number): RvalueContext;
	public rvalue(i?: number): RvalueContext | RvalueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RvalueContext);
		} else {
			return this.getRuleContext(i, RvalueContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bParser.RULE_ternary; }
	// @Override
	public enterRule(listener: bListener): void {
		if (listener.enterTernary) {
			listener.enterTernary(this);
		}
	}
	// @Override
	public exitRule(listener: bListener): void {
		if (listener.exitTernary) {
			listener.exitTernary(this);
		}
	}
}


export class ComparisonContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public binary(): BinaryContext {
		return this.getRuleContext(0, BinaryContext);
	}
	public rvalue(): RvalueContext {
		return this.getRuleContext(0, RvalueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bParser.RULE_comparison; }
	// @Override
	public enterRule(listener: bListener): void {
		if (listener.enterComparison) {
			listener.enterComparison(this);
		}
	}
	// @Override
	public exitRule(listener: bListener): void {
		if (listener.exitComparison) {
			listener.exitComparison(this);
		}
	}
}


export class AssignmentContext extends ParserRuleContext {
	public name(): NameContext {
		return this.getRuleContext(0, NameContext);
	}
	public assign(): AssignContext {
		return this.getRuleContext(0, AssignContext);
	}
	public rvalue(): RvalueContext {
		return this.getRuleContext(0, RvalueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bParser.RULE_assignment; }
	// @Override
	public enterRule(listener: bListener): void {
		if (listener.enterAssignment) {
			listener.enterAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: bListener): void {
		if (listener.exitAssignment) {
			listener.exitAssignment(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public rvalue(): RvalueContext | undefined {
		return this.tryGetRuleContext(0, RvalueContext);
	}
	public name(): NameContext | undefined {
		return this.tryGetRuleContext(0, NameContext);
	}
	public constant(): ConstantContext | undefined {
		return this.tryGetRuleContext(0, ConstantContext);
	}
	public incdec(): IncdecContext | undefined {
		return this.tryGetRuleContext(0, IncdecContext);
	}
	public unary(): UnaryContext | undefined {
		return this.tryGetRuleContext(0, UnaryContext);
	}
	public functioninvocation(): FunctioninvocationContext | undefined {
		return this.tryGetRuleContext(0, FunctioninvocationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bParser.RULE_expression; }
	// @Override
	public enterRule(listener: bListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: bListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
}


export class FunctioninvocationContext extends ParserRuleContext {
	public name(): NameContext {
		return this.getRuleContext(0, NameContext);
	}
	public functionparameters(): FunctionparametersContext | undefined {
		return this.tryGetRuleContext(0, FunctionparametersContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bParser.RULE_functioninvocation; }
	// @Override
	public enterRule(listener: bListener): void {
		if (listener.enterFunctioninvocation) {
			listener.enterFunctioninvocation(this);
		}
	}
	// @Override
	public exitRule(listener: bListener): void {
		if (listener.exitFunctioninvocation) {
			listener.exitFunctioninvocation(this);
		}
	}
}


export class FunctionparametersContext extends ParserRuleContext {
	public rvalue(): RvalueContext[];
	public rvalue(i: number): RvalueContext;
	public rvalue(i?: number): RvalueContext | RvalueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RvalueContext);
		} else {
			return this.getRuleContext(i, RvalueContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bParser.RULE_functionparameters; }
	// @Override
	public enterRule(listener: bListener): void {
		if (listener.enterFunctionparameters) {
			listener.enterFunctionparameters(this);
		}
	}
	// @Override
	public exitRule(listener: bListener): void {
		if (listener.exitFunctionparameters) {
			listener.exitFunctionparameters(this);
		}
	}
}


export class AssignContext extends ParserRuleContext {
	public binary(): BinaryContext | undefined {
		return this.tryGetRuleContext(0, BinaryContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bParser.RULE_assign; }
	// @Override
	public enterRule(listener: bListener): void {
		if (listener.enterAssign) {
			listener.enterAssign(this);
		}
	}
	// @Override
	public exitRule(listener: bListener): void {
		if (listener.exitAssign) {
			listener.exitAssign(this);
		}
	}
}


export class IncdecContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bParser.RULE_incdec; }
	// @Override
	public enterRule(listener: bListener): void {
		if (listener.enterIncdec) {
			listener.enterIncdec(this);
		}
	}
	// @Override
	public exitRule(listener: bListener): void {
		if (listener.exitIncdec) {
			listener.exitIncdec(this);
		}
	}
}


export class UnaryContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bParser.RULE_unary; }
	// @Override
	public enterRule(listener: bListener): void {
		if (listener.enterUnary) {
			listener.enterUnary(this);
		}
	}
	// @Override
	public exitRule(listener: bListener): void {
		if (listener.exitUnary) {
			listener.exitUnary(this);
		}
	}
}


export class BinaryContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bParser.RULE_binary; }
	// @Override
	public enterRule(listener: bListener): void {
		if (listener.enterBinary) {
			listener.enterBinary(this);
		}
	}
	// @Override
	public exitRule(listener: bListener): void {
		if (listener.exitBinary) {
			listener.exitBinary(this);
		}
	}
}


export class LvalueContext extends ParserRuleContext {
	public name(): NameContext | undefined {
		return this.tryGetRuleContext(0, NameContext);
	}
	public rvalue(): RvalueContext[];
	public rvalue(i: number): RvalueContext;
	public rvalue(i?: number): RvalueContext | RvalueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RvalueContext);
		} else {
			return this.getRuleContext(i, RvalueContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bParser.RULE_lvalue; }
	// @Override
	public enterRule(listener: bListener): void {
		if (listener.enterLvalue) {
			listener.enterLvalue(this);
		}
	}
	// @Override
	public exitRule(listener: bListener): void {
		if (listener.exitLvalue) {
			listener.exitLvalue(this);
		}
	}
}


export class ConstantContext extends ParserRuleContext {
	public INT(): TerminalNode | undefined { return this.tryGetToken(bParser.INT, 0); }
	public STRING1(): TerminalNode | undefined { return this.tryGetToken(bParser.STRING1, 0); }
	public STRING2(): TerminalNode | undefined { return this.tryGetToken(bParser.STRING2, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bParser.RULE_constant; }
	// @Override
	public enterRule(listener: bListener): void {
		if (listener.enterConstant) {
			listener.enterConstant(this);
		}
	}
	// @Override
	public exitRule(listener: bListener): void {
		if (listener.exitConstant) {
			listener.exitConstant(this);
		}
	}
}


export class NameContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(bParser.NAME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bParser.RULE_name; }
	// @Override
	public enterRule(listener: bListener): void {
		if (listener.enterName) {
			listener.enterName(this);
		}
	}
	// @Override
	public exitRule(listener: bListener): void {
		if (listener.exitName) {
			listener.exitName(this);
		}
	}
}


