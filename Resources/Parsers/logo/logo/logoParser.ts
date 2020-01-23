// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/logo/logo/logo.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { logoListener } from "./logoListener";

export class logoParser extends Parser {
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
	public static readonly T__38 = 39;
	public static readonly T__39 = 40;
	public static readonly T__40 = 41;
	public static readonly STRINGLITERAL = 42;
	public static readonly STRING = 43;
	public static readonly NUMBER = 44;
	public static readonly COMMENT = 45;
	public static readonly EOL = 46;
	public static readonly WS = 47;
	public static readonly RULE_prog = 0;
	public static readonly RULE_line = 1;
	public static readonly RULE_cmd = 2;
	public static readonly RULE_procedureInvocation = 3;
	public static readonly RULE_procedureDeclaration = 4;
	public static readonly RULE_parameterDeclarations = 5;
	public static readonly RULE_func = 6;
	public static readonly RULE_repeat = 7;
	public static readonly RULE_block = 8;
	public static readonly RULE_ife = 9;
	public static readonly RULE_comparison = 10;
	public static readonly RULE_comparisonOperator = 11;
	public static readonly RULE_make = 12;
	public static readonly RULE_print = 13;
	public static readonly RULE_quotedstring = 14;
	public static readonly RULE_name = 15;
	public static readonly RULE_value = 16;
	public static readonly RULE_signExpression = 17;
	public static readonly RULE_multiplyingExpression = 18;
	public static readonly RULE_expression = 19;
	public static readonly RULE_deref = 20;
	public static readonly RULE_fd = 21;
	public static readonly RULE_bk = 22;
	public static readonly RULE_rt = 23;
	public static readonly RULE_lt = 24;
	public static readonly RULE_cs = 25;
	public static readonly RULE_pu = 26;
	public static readonly RULE_pd = 27;
	public static readonly RULE_ht = 28;
	public static readonly RULE_st = 29;
	public static readonly RULE_home = 30;
	public static readonly RULE_stop = 31;
	public static readonly RULE_label = 32;
	public static readonly RULE_setxy = 33;
	public static readonly RULE_random = 34;
	public static readonly RULE_fore = 35;
	public static readonly RULE_number = 36;
	public static readonly RULE_comment = 37;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"prog", "line", "cmd", "procedureInvocation", "procedureDeclaration", 
		"parameterDeclarations", "func", "repeat", "block", "ife", "comparison", 
		"comparisonOperator", "make", "print", "quotedstring", "name", "value", 
		"signExpression", "multiplyingExpression", "expression", "deref", "fd", 
		"bk", "rt", "lt", "cs", "pu", "pd", "ht", "st", "home", "stop", "label", 
		"setxy", "random", "fore", "number", "comment",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'to'", "'end'", "':'", "','", "'repeat'", "'['", "']'", "'if'", 
		"'<'", "'>'", "'='", "'make'", "'print'", "'+'", "'-'", "'*'", "'/'", 
		"'fd'", "'forward'", "'bk'", "'backward'", "'rt'", "'right'", "'lt'", 
		"'left'", "'cs'", "'clearscreen'", "'pu'", "'penup'", "'pd'", "'pendown'", 
		"'ht'", "'hideturtle'", "'st'", "'showturtle'", "'home'", "'stop'", "'label'", 
		"'setxy'", "'random'", "'for'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		"STRINGLITERAL", "STRING", "NUMBER", "COMMENT", "EOL", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(logoParser._LITERAL_NAMES, logoParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return logoParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "logo.g4"; }

	// @Override
	public get ruleNames(): string[] { return logoParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return logoParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(logoParser._ATN, this);
	}
	// @RuleVersion(0)
	public prog(): ProgContext {
		let _localctx: ProgContext = new ProgContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, logoParser.RULE_prog);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 80;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 77;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << logoParser.T__0) | (1 << logoParser.T__4) | (1 << logoParser.T__7) | (1 << logoParser.T__11) | (1 << logoParser.T__12) | (1 << logoParser.T__17) | (1 << logoParser.T__18) | (1 << logoParser.T__19) | (1 << logoParser.T__20) | (1 << logoParser.T__21) | (1 << logoParser.T__22) | (1 << logoParser.T__23) | (1 << logoParser.T__24) | (1 << logoParser.T__25) | (1 << logoParser.T__26) | (1 << logoParser.T__27) | (1 << logoParser.T__28) | (1 << logoParser.T__29) | (1 << logoParser.T__30))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (logoParser.T__31 - 32)) | (1 << (logoParser.T__32 - 32)) | (1 << (logoParser.T__33 - 32)) | (1 << (logoParser.T__34 - 32)) | (1 << (logoParser.T__35 - 32)) | (1 << (logoParser.T__36 - 32)) | (1 << (logoParser.T__37 - 32)) | (1 << (logoParser.T__38 - 32)) | (1 << (logoParser.T__40 - 32)) | (1 << (logoParser.STRING - 32)) | (1 << (logoParser.COMMENT - 32)))) !== 0)) {
						{
						this.state = 76;
						this.line();
						}
					}

					this.state = 79;
					this.match(logoParser.EOL);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 82;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 85;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << logoParser.T__0) | (1 << logoParser.T__4) | (1 << logoParser.T__7) | (1 << logoParser.T__11) | (1 << logoParser.T__12) | (1 << logoParser.T__17) | (1 << logoParser.T__18) | (1 << logoParser.T__19) | (1 << logoParser.T__20) | (1 << logoParser.T__21) | (1 << logoParser.T__22) | (1 << logoParser.T__23) | (1 << logoParser.T__24) | (1 << logoParser.T__25) | (1 << logoParser.T__26) | (1 << logoParser.T__27) | (1 << logoParser.T__28) | (1 << logoParser.T__29) | (1 << logoParser.T__30))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (logoParser.T__31 - 32)) | (1 << (logoParser.T__32 - 32)) | (1 << (logoParser.T__33 - 32)) | (1 << (logoParser.T__34 - 32)) | (1 << (logoParser.T__35 - 32)) | (1 << (logoParser.T__36 - 32)) | (1 << (logoParser.T__37 - 32)) | (1 << (logoParser.T__38 - 32)) | (1 << (logoParser.T__40 - 32)) | (1 << (logoParser.STRING - 32)) | (1 << (logoParser.COMMENT - 32)))) !== 0)) {
				{
				this.state = 84;
				this.line();
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
	public line(): LineContext {
		let _localctx: LineContext = new LineContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, logoParser.RULE_line);
		let _la: number;
		try {
			this.state = 101;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case logoParser.T__4:
			case logoParser.T__7:
			case logoParser.T__11:
			case logoParser.T__17:
			case logoParser.T__18:
			case logoParser.T__19:
			case logoParser.T__20:
			case logoParser.T__21:
			case logoParser.T__22:
			case logoParser.T__23:
			case logoParser.T__24:
			case logoParser.T__25:
			case logoParser.T__26:
			case logoParser.T__27:
			case logoParser.T__28:
			case logoParser.T__29:
			case logoParser.T__30:
			case logoParser.T__31:
			case logoParser.T__32:
			case logoParser.T__33:
			case logoParser.T__34:
			case logoParser.T__35:
			case logoParser.T__36:
			case logoParser.T__37:
			case logoParser.T__38:
			case logoParser.T__40:
			case logoParser.STRING:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 88;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 87;
					this.cmd();
					}
					}
					this.state = 90;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << logoParser.T__4) | (1 << logoParser.T__7) | (1 << logoParser.T__11) | (1 << logoParser.T__17) | (1 << logoParser.T__18) | (1 << logoParser.T__19) | (1 << logoParser.T__20) | (1 << logoParser.T__21) | (1 << logoParser.T__22) | (1 << logoParser.T__23) | (1 << logoParser.T__24) | (1 << logoParser.T__25) | (1 << logoParser.T__26) | (1 << logoParser.T__27) | (1 << logoParser.T__28) | (1 << logoParser.T__29) | (1 << logoParser.T__30))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (logoParser.T__31 - 32)) | (1 << (logoParser.T__32 - 32)) | (1 << (logoParser.T__33 - 32)) | (1 << (logoParser.T__34 - 32)) | (1 << (logoParser.T__35 - 32)) | (1 << (logoParser.T__36 - 32)) | (1 << (logoParser.T__37 - 32)) | (1 << (logoParser.T__38 - 32)) | (1 << (logoParser.T__40 - 32)) | (1 << (logoParser.STRING - 32)))) !== 0));
				this.state = 93;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === logoParser.COMMENT) {
					{
					this.state = 92;
					this.comment();
					}
				}

				}
				break;
			case logoParser.COMMENT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 95;
				this.comment();
				}
				break;
			case logoParser.T__12:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 96;
				this.print();
				this.state = 98;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === logoParser.COMMENT) {
					{
					this.state = 97;
					this.comment();
					}
				}

				}
				break;
			case logoParser.T__0:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 100;
				this.procedureDeclaration();
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
	public cmd(): CmdContext {
		let _localctx: CmdContext = new CmdContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, logoParser.RULE_cmd);
		try {
			this.state = 121;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case logoParser.T__4:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 103;
				this.repeat();
				}
				break;
			case logoParser.T__17:
			case logoParser.T__18:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 104;
				this.fd();
				}
				break;
			case logoParser.T__19:
			case logoParser.T__20:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 105;
				this.bk();
				}
				break;
			case logoParser.T__21:
			case logoParser.T__22:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 106;
				this.rt();
				}
				break;
			case logoParser.T__23:
			case logoParser.T__24:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 107;
				this.lt();
				}
				break;
			case logoParser.T__25:
			case logoParser.T__26:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 108;
				this.cs();
				}
				break;
			case logoParser.T__27:
			case logoParser.T__28:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 109;
				this.pu();
				}
				break;
			case logoParser.T__29:
			case logoParser.T__30:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 110;
				this.pd();
				}
				break;
			case logoParser.T__31:
			case logoParser.T__32:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 111;
				this.ht();
				}
				break;
			case logoParser.T__33:
			case logoParser.T__34:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 112;
				this.st();
				}
				break;
			case logoParser.T__35:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 113;
				this.home();
				}
				break;
			case logoParser.T__37:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 114;
				this.label();
				}
				break;
			case logoParser.T__38:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 115;
				this.setxy();
				}
				break;
			case logoParser.T__11:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 116;
				this.make();
				}
				break;
			case logoParser.STRING:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 117;
				this.procedureInvocation();
				}
				break;
			case logoParser.T__7:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 118;
				this.ife();
				}
				break;
			case logoParser.T__36:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 119;
				this.stop();
				}
				break;
			case logoParser.T__40:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 120;
				this.fore();
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
	public procedureInvocation(): ProcedureInvocationContext {
		let _localctx: ProcedureInvocationContext = new ProcedureInvocationContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, logoParser.RULE_procedureInvocation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 123;
			this.name();
			this.state = 127;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << logoParser.T__2) | (1 << logoParser.T__13) | (1 << logoParser.T__14))) !== 0) || _la === logoParser.T__39 || _la === logoParser.NUMBER) {
				{
				{
				this.state = 124;
				this.expression();
				}
				}
				this.state = 129;
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
	public procedureDeclaration(): ProcedureDeclarationContext {
		let _localctx: ProcedureDeclarationContext = new ProcedureDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, logoParser.RULE_procedureDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 130;
			this.match(logoParser.T__0);
			this.state = 131;
			this.name();
			this.state = 135;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === logoParser.T__2) {
				{
				{
				this.state = 132;
				this.parameterDeclarations();
				}
				}
				this.state = 137;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 139;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				{
				this.state = 138;
				this.match(logoParser.EOL);
				}
				break;
			}
			this.state = 145;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 142;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << logoParser.T__0) | (1 << logoParser.T__4) | (1 << logoParser.T__7) | (1 << logoParser.T__11) | (1 << logoParser.T__12) | (1 << logoParser.T__17) | (1 << logoParser.T__18) | (1 << logoParser.T__19) | (1 << logoParser.T__20) | (1 << logoParser.T__21) | (1 << logoParser.T__22) | (1 << logoParser.T__23) | (1 << logoParser.T__24) | (1 << logoParser.T__25) | (1 << logoParser.T__26) | (1 << logoParser.T__27) | (1 << logoParser.T__28) | (1 << logoParser.T__29) | (1 << logoParser.T__30))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (logoParser.T__31 - 32)) | (1 << (logoParser.T__32 - 32)) | (1 << (logoParser.T__33 - 32)) | (1 << (logoParser.T__34 - 32)) | (1 << (logoParser.T__35 - 32)) | (1 << (logoParser.T__36 - 32)) | (1 << (logoParser.T__37 - 32)) | (1 << (logoParser.T__38 - 32)) | (1 << (logoParser.T__40 - 32)) | (1 << (logoParser.STRING - 32)) | (1 << (logoParser.COMMENT - 32)))) !== 0)) {
					{
					this.state = 141;
					this.line();
					}
				}

				this.state = 144;
				this.match(logoParser.EOL);
				}
				}
				this.state = 147;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << logoParser.T__0) | (1 << logoParser.T__4) | (1 << logoParser.T__7) | (1 << logoParser.T__11) | (1 << logoParser.T__12) | (1 << logoParser.T__17) | (1 << logoParser.T__18) | (1 << logoParser.T__19) | (1 << logoParser.T__20) | (1 << logoParser.T__21) | (1 << logoParser.T__22) | (1 << logoParser.T__23) | (1 << logoParser.T__24) | (1 << logoParser.T__25) | (1 << logoParser.T__26) | (1 << logoParser.T__27) | (1 << logoParser.T__28) | (1 << logoParser.T__29) | (1 << logoParser.T__30))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (logoParser.T__31 - 32)) | (1 << (logoParser.T__32 - 32)) | (1 << (logoParser.T__33 - 32)) | (1 << (logoParser.T__34 - 32)) | (1 << (logoParser.T__35 - 32)) | (1 << (logoParser.T__36 - 32)) | (1 << (logoParser.T__37 - 32)) | (1 << (logoParser.T__38 - 32)) | (1 << (logoParser.T__40 - 32)) | (1 << (logoParser.STRING - 32)) | (1 << (logoParser.COMMENT - 32)) | (1 << (logoParser.EOL - 32)))) !== 0));
			this.state = 149;
			this.match(logoParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameterDeclarations(): ParameterDeclarationsContext {
		let _localctx: ParameterDeclarationsContext = new ParameterDeclarationsContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, logoParser.RULE_parameterDeclarations);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 151;
			this.match(logoParser.T__2);
			this.state = 152;
			this.name();
			this.state = 157;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 153;
					this.match(logoParser.T__3);
					this.state = 154;
					this.parameterDeclarations();
					}
					}
				}
				this.state = 159;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 12, logoParser.RULE_func);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 160;
			this.random();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public repeat(): RepeatContext {
		let _localctx: RepeatContext = new RepeatContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, logoParser.RULE_repeat);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 162;
			this.match(logoParser.T__4);
			this.state = 163;
			this.number();
			this.state = 164;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 16, logoParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 166;
			this.match(logoParser.T__5);
			this.state = 168;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 167;
				this.cmd();
				}
				}
				this.state = 170;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << logoParser.T__4) | (1 << logoParser.T__7) | (1 << logoParser.T__11) | (1 << logoParser.T__17) | (1 << logoParser.T__18) | (1 << logoParser.T__19) | (1 << logoParser.T__20) | (1 << logoParser.T__21) | (1 << logoParser.T__22) | (1 << logoParser.T__23) | (1 << logoParser.T__24) | (1 << logoParser.T__25) | (1 << logoParser.T__26) | (1 << logoParser.T__27) | (1 << logoParser.T__28) | (1 << logoParser.T__29) | (1 << logoParser.T__30))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (logoParser.T__31 - 32)) | (1 << (logoParser.T__32 - 32)) | (1 << (logoParser.T__33 - 32)) | (1 << (logoParser.T__34 - 32)) | (1 << (logoParser.T__35 - 32)) | (1 << (logoParser.T__36 - 32)) | (1 << (logoParser.T__37 - 32)) | (1 << (logoParser.T__38 - 32)) | (1 << (logoParser.T__40 - 32)) | (1 << (logoParser.STRING - 32)))) !== 0));
			this.state = 172;
			this.match(logoParser.T__6);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ife(): IfeContext {
		let _localctx: IfeContext = new IfeContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, logoParser.RULE_ife);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 174;
			this.match(logoParser.T__7);
			this.state = 175;
			this.comparison();
			this.state = 176;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 20, logoParser.RULE_comparison);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 178;
			this.expression();
			this.state = 179;
			this.comparisonOperator();
			this.state = 180;
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
	public comparisonOperator(): ComparisonOperatorContext {
		let _localctx: ComparisonOperatorContext = new ComparisonOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, logoParser.RULE_comparisonOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 182;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << logoParser.T__8) | (1 << logoParser.T__9) | (1 << logoParser.T__10))) !== 0))) {
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
	public make(): MakeContext {
		let _localctx: MakeContext = new MakeContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, logoParser.RULE_make);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 184;
			this.match(logoParser.T__11);
			this.state = 185;
			this.match(logoParser.STRINGLITERAL);
			this.state = 186;
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
	public print(): PrintContext {
		let _localctx: PrintContext = new PrintContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, logoParser.RULE_print);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 188;
			this.match(logoParser.T__12);
			this.state = 191;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case logoParser.T__2:
			case logoParser.T__13:
			case logoParser.T__14:
			case logoParser.T__39:
			case logoParser.STRINGLITERAL:
			case logoParser.NUMBER:
				{
				this.state = 189;
				this.value();
				}
				break;
			case logoParser.T__5:
				{
				this.state = 190;
				this.quotedstring();
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
	public quotedstring(): QuotedstringContext {
		let _localctx: QuotedstringContext = new QuotedstringContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, logoParser.RULE_quotedstring);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 193;
			this.match(logoParser.T__5);
			this.state = 198;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << logoParser.T__0) | (1 << logoParser.T__1) | (1 << logoParser.T__2) | (1 << logoParser.T__3) | (1 << logoParser.T__4) | (1 << logoParser.T__5) | (1 << logoParser.T__7) | (1 << logoParser.T__8) | (1 << logoParser.T__9) | (1 << logoParser.T__10) | (1 << logoParser.T__11) | (1 << logoParser.T__12) | (1 << logoParser.T__13) | (1 << logoParser.T__14) | (1 << logoParser.T__15) | (1 << logoParser.T__16) | (1 << logoParser.T__17) | (1 << logoParser.T__18) | (1 << logoParser.T__19) | (1 << logoParser.T__20) | (1 << logoParser.T__21) | (1 << logoParser.T__22) | (1 << logoParser.T__23) | (1 << logoParser.T__24) | (1 << logoParser.T__25) | (1 << logoParser.T__26) | (1 << logoParser.T__27) | (1 << logoParser.T__28) | (1 << logoParser.T__29) | (1 << logoParser.T__30))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (logoParser.T__31 - 32)) | (1 << (logoParser.T__32 - 32)) | (1 << (logoParser.T__33 - 32)) | (1 << (logoParser.T__34 - 32)) | (1 << (logoParser.T__35 - 32)) | (1 << (logoParser.T__36 - 32)) | (1 << (logoParser.T__37 - 32)) | (1 << (logoParser.T__38 - 32)) | (1 << (logoParser.T__39 - 32)) | (1 << (logoParser.T__40 - 32)) | (1 << (logoParser.STRINGLITERAL - 32)) | (1 << (logoParser.STRING - 32)) | (1 << (logoParser.NUMBER - 32)) | (1 << (logoParser.COMMENT - 32)) | (1 << (logoParser.EOL - 32)) | (1 << (logoParser.WS - 32)))) !== 0)) {
				{
				this.state = 196;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
				case 1:
					{
					this.state = 194;
					this.quotedstring();
					}
					break;

				case 2:
					{
					this.state = 195;
					_la = this._input.LA(1);
					if (_la <= 0 || (_la === logoParser.T__6)) {
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
				this.state = 200;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 201;
			this.match(logoParser.T__6);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 30, logoParser.RULE_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 203;
			this.match(logoParser.STRING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 32, logoParser.RULE_value);
		try {
			this.state = 208;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 18, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 205;
				this.match(logoParser.STRINGLITERAL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 206;
				this.expression();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 207;
				this.deref();
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
	public signExpression(): SignExpressionContext {
		let _localctx: SignExpressionContext = new SignExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, logoParser.RULE_signExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 213;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === logoParser.T__13 || _la === logoParser.T__14) {
				{
				{
				this.state = 210;
				_la = this._input.LA(1);
				if (!(_la === logoParser.T__13 || _la === logoParser.T__14)) {
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
				this.state = 215;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 219;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case logoParser.NUMBER:
				{
				this.state = 216;
				this.number();
				}
				break;
			case logoParser.T__2:
				{
				this.state = 217;
				this.deref();
				}
				break;
			case logoParser.T__39:
				{
				this.state = 218;
				this.func();
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
	public multiplyingExpression(): MultiplyingExpressionContext {
		let _localctx: MultiplyingExpressionContext = new MultiplyingExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, logoParser.RULE_multiplyingExpression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 221;
			this.signExpression();
			this.state = 226;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 222;
					_la = this._input.LA(1);
					if (!(_la === logoParser.T__15 || _la === logoParser.T__16)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 223;
					this.signExpression();
					}
					}
				}
				this.state = 228;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 38, logoParser.RULE_expression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 229;
			this.multiplyingExpression();
			this.state = 234;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 230;
					_la = this._input.LA(1);
					if (!(_la === logoParser.T__13 || _la === logoParser.T__14)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 231;
					this.multiplyingExpression();
					}
					}
				}
				this.state = 236;
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
	public deref(): DerefContext {
		let _localctx: DerefContext = new DerefContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, logoParser.RULE_deref);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 237;
			this.match(logoParser.T__2);
			this.state = 238;
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
	public fd(): FdContext {
		let _localctx: FdContext = new FdContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, logoParser.RULE_fd);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 240;
			_la = this._input.LA(1);
			if (!(_la === logoParser.T__17 || _la === logoParser.T__18)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 241;
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
	public bk(): BkContext {
		let _localctx: BkContext = new BkContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, logoParser.RULE_bk);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 243;
			_la = this._input.LA(1);
			if (!(_la === logoParser.T__19 || _la === logoParser.T__20)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 244;
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
	public rt(): RtContext {
		let _localctx: RtContext = new RtContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, logoParser.RULE_rt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 246;
			_la = this._input.LA(1);
			if (!(_la === logoParser.T__21 || _la === logoParser.T__22)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 247;
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
	public lt(): LtContext {
		let _localctx: LtContext = new LtContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, logoParser.RULE_lt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 249;
			_la = this._input.LA(1);
			if (!(_la === logoParser.T__23 || _la === logoParser.T__24)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 250;
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
	public cs(): CsContext {
		let _localctx: CsContext = new CsContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, logoParser.RULE_cs);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 252;
			_la = this._input.LA(1);
			if (!(_la === logoParser.T__25 || _la === logoParser.T__26)) {
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
	public pu(): PuContext {
		let _localctx: PuContext = new PuContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, logoParser.RULE_pu);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 254;
			_la = this._input.LA(1);
			if (!(_la === logoParser.T__27 || _la === logoParser.T__28)) {
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
	public pd(): PdContext {
		let _localctx: PdContext = new PdContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, logoParser.RULE_pd);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 256;
			_la = this._input.LA(1);
			if (!(_la === logoParser.T__29 || _la === logoParser.T__30)) {
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
	public ht(): HtContext {
		let _localctx: HtContext = new HtContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, logoParser.RULE_ht);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 258;
			_la = this._input.LA(1);
			if (!(_la === logoParser.T__31 || _la === logoParser.T__32)) {
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
	public st(): StContext {
		let _localctx: StContext = new StContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, logoParser.RULE_st);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 260;
			_la = this._input.LA(1);
			if (!(_la === logoParser.T__33 || _la === logoParser.T__34)) {
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
	public home(): HomeContext {
		let _localctx: HomeContext = new HomeContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, logoParser.RULE_home);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 262;
			this.match(logoParser.T__35);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stop(): StopContext {
		let _localctx: StopContext = new StopContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, logoParser.RULE_stop);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 264;
			this.match(logoParser.T__36);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 64, logoParser.RULE_label);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 266;
			this.match(logoParser.T__37);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public setxy(): SetxyContext {
		let _localctx: SetxyContext = new SetxyContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, logoParser.RULE_setxy);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 268;
			this.match(logoParser.T__38);
			this.state = 269;
			this.expression();
			this.state = 270;
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
	public random(): RandomContext {
		let _localctx: RandomContext = new RandomContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, logoParser.RULE_random);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 272;
			this.match(logoParser.T__39);
			this.state = 273;
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
	public fore(): ForeContext {
		let _localctx: ForeContext = new ForeContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, logoParser.RULE_fore);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 275;
			this.match(logoParser.T__40);
			this.state = 276;
			this.match(logoParser.T__5);
			this.state = 277;
			this.name();
			this.state = 278;
			this.expression();
			this.state = 279;
			this.expression();
			this.state = 280;
			this.expression();
			this.state = 281;
			this.match(logoParser.T__6);
			this.state = 282;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 72, logoParser.RULE_number);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 284;
			this.match(logoParser.NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 74, logoParser.RULE_comment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 286;
			this.match(logoParser.COMMENT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x031\u0123\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x03\x02\x05\x02P\n\x02\x03\x02\x06" +
		"\x02S\n\x02\r\x02\x0E\x02T\x03\x02\x05\x02X\n\x02\x03\x03\x06\x03[\n\x03" +
		"\r\x03\x0E\x03\\\x03\x03\x05\x03`\n\x03\x03\x03\x03\x03\x03\x03\x05\x03" +
		"e\n\x03\x03\x03\x05\x03h\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04|\n\x04\x03\x05\x03\x05\x07\x05" +
		"\x80\n\x05\f\x05\x0E\x05\x83\v\x05\x03\x06\x03\x06\x03\x06\x07\x06\x88" +
		"\n\x06\f\x06\x0E\x06\x8B\v\x06\x03\x06\x05\x06\x8E\n\x06\x03\x06\x05\x06" +
		"\x91\n\x06\x03\x06\x06\x06\x94\n\x06\r\x06\x0E\x06\x95\x03\x06\x03\x06" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x07\x07\x9E\n\x07\f\x07\x0E\x07\xA1\v" +
		"\x07\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\n\x03\n\x06\n\xAB\n\n\r\n" +
		"\x0E\n\xAC\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f" +
		"\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x05" +
		"\x0F\xC2\n\x0F\x03\x10\x03\x10\x03\x10\x07\x10\xC7\n\x10\f\x10\x0E\x10" +
		"\xCA\v\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x05" +
		"\x12\xD3\n\x12\x03\x13\x07\x13\xD6\n\x13\f\x13\x0E\x13\xD9\v\x13\x03\x13" +
		"\x03\x13\x03\x13\x05\x13\xDE\n\x13\x03\x14\x03\x14\x03\x14\x07\x14\xE3" +
		"\n\x14\f\x14\x0E\x14\xE6\v\x14\x03\x15\x03\x15\x03\x15\x07\x15\xEB\n\x15" +
		"\f\x15\x0E\x15\xEE\v\x15\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17" +
		"\x03\x18\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A" +
		"\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1F" +
		"\x03\x1F\x03 \x03 \x03!\x03!\x03\"\x03\"\x03#\x03#\x03#\x03#\x03$\x03" +
		"$\x03$\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03&\x03&\x03\'\x03" +
		"\'\x03\'\x02\x02\x02(\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02" +
		"\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02" +
		"\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02" +
		">\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02\x02\x0F\x03\x02\v\r\x03\x02\t" +
		"\t\x03\x02\x10\x11\x03\x02\x12\x13\x03\x02\x14\x15\x03\x02\x16\x17\x03" +
		"\x02\x18\x19\x03\x02\x1A\x1B\x03\x02\x1C\x1D\x03\x02\x1E\x1F\x03\x02 " +
		"!\x03\x02\"#\x03\x02$%\x02\u0127\x02R\x03\x02\x02\x02\x04g\x03\x02\x02" +
		"\x02\x06{\x03\x02\x02\x02\b}\x03\x02\x02\x02\n\x84\x03\x02\x02\x02\f\x99" +
		"\x03\x02\x02\x02\x0E\xA2\x03\x02\x02\x02\x10\xA4\x03\x02\x02\x02\x12\xA8" +
		"\x03\x02\x02\x02\x14\xB0\x03\x02\x02\x02\x16\xB4\x03\x02\x02\x02\x18\xB8" +
		"\x03\x02\x02\x02\x1A\xBA\x03\x02\x02\x02\x1C\xBE\x03\x02\x02\x02\x1E\xC3" +
		"\x03\x02\x02\x02 \xCD\x03\x02\x02\x02\"\xD2\x03\x02\x02\x02$\xD7\x03\x02" +
		"\x02\x02&\xDF\x03\x02\x02\x02(\xE7\x03\x02\x02\x02*\xEF\x03\x02\x02\x02" +
		",\xF2\x03\x02\x02\x02.\xF5\x03\x02\x02\x020\xF8\x03\x02\x02\x022\xFB\x03" +
		"\x02\x02\x024\xFE\x03\x02\x02\x026\u0100\x03\x02\x02\x028\u0102\x03\x02" +
		"\x02\x02:\u0104\x03\x02\x02\x02<\u0106\x03\x02\x02\x02>\u0108\x03\x02" +
		"\x02\x02@\u010A\x03\x02\x02\x02B\u010C\x03\x02\x02\x02D\u010E\x03\x02" +
		"\x02\x02F\u0112\x03\x02\x02\x02H\u0115\x03\x02\x02\x02J\u011E\x03\x02" +
		"\x02\x02L\u0120\x03\x02\x02\x02NP\x05\x04\x03\x02ON\x03\x02\x02\x02OP" +
		"\x03\x02\x02\x02PQ\x03\x02\x02\x02QS\x070\x02\x02RO\x03\x02\x02\x02ST" +
		"\x03\x02\x02\x02TR\x03\x02\x02\x02TU\x03\x02\x02\x02UW\x03\x02\x02\x02" +
		"VX\x05\x04\x03\x02WV\x03\x02\x02\x02WX\x03\x02\x02\x02X\x03\x03\x02\x02" +
		"\x02Y[\x05\x06\x04\x02ZY\x03\x02\x02\x02[\\\x03\x02\x02\x02\\Z\x03\x02" +
		"\x02\x02\\]\x03\x02\x02\x02]_\x03\x02\x02\x02^`\x05L\'\x02_^\x03\x02\x02" +
		"\x02_`\x03\x02\x02\x02`h\x03\x02\x02\x02ah\x05L\'\x02bd\x05\x1C\x0F\x02" +
		"ce\x05L\'\x02dc\x03\x02\x02\x02de\x03\x02\x02\x02eh\x03\x02\x02\x02fh" +
		"\x05\n\x06\x02gZ\x03\x02\x02\x02ga\x03\x02\x02\x02gb\x03\x02\x02\x02g" +
		"f\x03\x02\x02\x02h\x05\x03\x02\x02\x02i|\x05\x10\t\x02j|\x05,\x17\x02" +
		"k|\x05.\x18\x02l|\x050\x19\x02m|\x052\x1A\x02n|\x054\x1B\x02o|\x056\x1C" +
		"\x02p|\x058\x1D\x02q|\x05:\x1E\x02r|\x05<\x1F\x02s|\x05> \x02t|\x05B\"" +
		"\x02u|\x05D#\x02v|\x05\x1A\x0E\x02w|\x05\b\x05\x02x|\x05\x14\v\x02y|\x05" +
		"@!\x02z|\x05H%\x02{i\x03\x02\x02\x02{j\x03\x02\x02\x02{k\x03\x02\x02\x02" +
		"{l\x03\x02\x02\x02{m\x03\x02\x02\x02{n\x03\x02\x02\x02{o\x03\x02\x02\x02" +
		"{p\x03\x02\x02\x02{q\x03\x02\x02\x02{r\x03\x02\x02\x02{s\x03\x02\x02\x02" +
		"{t\x03\x02\x02\x02{u\x03\x02\x02\x02{v\x03\x02\x02\x02{w\x03\x02\x02\x02" +
		"{x\x03\x02\x02\x02{y\x03\x02\x02\x02{z\x03\x02\x02\x02|\x07\x03\x02\x02" +
		"\x02}\x81\x05 \x11\x02~\x80\x05(\x15\x02\x7F~\x03\x02\x02\x02\x80\x83" +
		"\x03\x02\x02\x02\x81\x7F\x03\x02\x02\x02\x81\x82\x03\x02\x02\x02\x82\t" +
		"\x03\x02\x02\x02\x83\x81\x03\x02\x02\x02\x84\x85\x07\x03\x02\x02\x85\x89" +
		"\x05 \x11\x02\x86\x88\x05\f\x07\x02\x87\x86\x03\x02\x02\x02\x88\x8B\x03" +
		"\x02\x02\x02\x89\x87\x03\x02\x02\x02\x89\x8A\x03\x02\x02\x02\x8A\x8D\x03" +
		"\x02\x02\x02\x8B\x89\x03\x02\x02\x02\x8C\x8E\x070\x02\x02\x8D\x8C\x03" +
		"\x02\x02\x02\x8D\x8E\x03\x02\x02\x02\x8E\x93\x03\x02\x02\x02\x8F\x91\x05" +
		"\x04\x03\x02\x90\x8F\x03\x02\x02\x02\x90\x91\x03\x02\x02\x02\x91\x92\x03" +
		"\x02\x02\x02\x92\x94\x070\x02\x02\x93\x90\x03\x02\x02\x02\x94\x95\x03" +
		"\x02\x02\x02\x95\x93\x03\x02\x02\x02\x95\x96\x03\x02\x02\x02\x96\x97\x03" +
		"\x02\x02\x02\x97\x98\x07\x04\x02\x02\x98\v\x03\x02\x02\x02\x99\x9A\x07" +
		"\x05\x02\x02\x9A\x9F\x05 \x11\x02\x9B\x9C\x07\x06\x02\x02\x9C\x9E\x05" +
		"\f\x07\x02\x9D\x9B\x03\x02\x02\x02\x9E\xA1\x03\x02\x02\x02\x9F\x9D\x03" +
		"\x02\x02\x02\x9F\xA0\x03\x02\x02\x02\xA0\r\x03\x02\x02\x02\xA1\x9F\x03" +
		"\x02\x02\x02\xA2\xA3\x05F$\x02\xA3\x0F\x03\x02\x02\x02\xA4\xA5\x07\x07" +
		"\x02\x02\xA5\xA6\x05J&\x02\xA6\xA7\x05\x12\n\x02\xA7\x11\x03\x02\x02\x02" +
		"\xA8\xAA\x07\b\x02\x02\xA9\xAB\x05\x06\x04\x02\xAA\xA9\x03\x02\x02\x02" +
		"\xAB\xAC\x03\x02\x02\x02\xAC\xAA\x03\x02\x02\x02\xAC\xAD\x03\x02\x02\x02" +
		"\xAD\xAE\x03\x02\x02\x02\xAE\xAF\x07\t\x02\x02\xAF\x13\x03\x02\x02\x02" +
		"\xB0\xB1\x07\n\x02\x02\xB1\xB2\x05\x16\f\x02\xB2\xB3\x05\x12\n\x02\xB3" +
		"\x15\x03\x02\x02\x02\xB4\xB5\x05(\x15\x02\xB5\xB6\x05\x18\r\x02\xB6\xB7" +
		"\x05(\x15\x02\xB7\x17\x03\x02\x02\x02\xB8\xB9\t\x02\x02\x02\xB9\x19\x03" +
		"\x02\x02\x02\xBA\xBB\x07\x0E\x02\x02\xBB\xBC\x07,\x02\x02\xBC\xBD\x05" +
		"\"\x12\x02\xBD\x1B\x03\x02\x02\x02\xBE\xC1\x07\x0F\x02\x02\xBF\xC2\x05" +
		"\"\x12\x02\xC0\xC2\x05\x1E\x10\x02\xC1\xBF\x03\x02\x02\x02\xC1\xC0\x03" +
		"\x02\x02\x02\xC2\x1D\x03\x02\x02\x02\xC3\xC8\x07\b\x02\x02\xC4\xC7\x05" +
		"\x1E\x10\x02\xC5\xC7\n\x03\x02\x02\xC6\xC4\x03\x02\x02\x02\xC6\xC5\x03" +
		"\x02\x02\x02\xC7\xCA\x03\x02\x02\x02\xC8\xC6\x03\x02\x02\x02\xC8\xC9\x03" +
		"\x02\x02\x02\xC9\xCB\x03\x02\x02\x02\xCA\xC8\x03\x02\x02\x02\xCB\xCC\x07" +
		"\t\x02\x02\xCC\x1F\x03\x02\x02\x02\xCD\xCE\x07-\x02\x02\xCE!\x03\x02\x02" +
		"\x02\xCF\xD3\x07,\x02\x02\xD0\xD3\x05(\x15\x02\xD1\xD3\x05*\x16\x02\xD2" +
		"\xCF\x03\x02\x02\x02\xD2\xD0\x03\x02\x02\x02\xD2\xD1\x03\x02\x02\x02\xD3" +
		"#\x03\x02\x02\x02\xD4\xD6\t\x04\x02\x02\xD5\xD4\x03\x02\x02\x02\xD6\xD9" +
		"\x03\x02\x02\x02\xD7\xD5\x03\x02\x02\x02\xD7\xD8\x03\x02\x02\x02\xD8\xDD" +
		"\x03\x02\x02\x02\xD9\xD7\x03\x02\x02\x02\xDA\xDE\x05J&\x02\xDB\xDE\x05" +
		"*\x16\x02\xDC\xDE\x05\x0E\b\x02\xDD\xDA\x03\x02\x02\x02\xDD\xDB\x03\x02" +
		"\x02\x02\xDD\xDC\x03\x02\x02\x02\xDE%\x03\x02\x02\x02\xDF\xE4\x05$\x13" +
		"\x02\xE0\xE1\t\x05\x02\x02\xE1\xE3\x05$\x13\x02\xE2\xE0\x03\x02\x02\x02" +
		"\xE3\xE6\x03\x02\x02\x02\xE4\xE2\x03\x02\x02\x02\xE4\xE5\x03\x02\x02\x02" +
		"\xE5\'\x03\x02\x02\x02\xE6\xE4\x03\x02\x02\x02\xE7\xEC\x05&\x14\x02\xE8" +
		"\xE9\t\x04\x02\x02\xE9\xEB\x05&\x14\x02\xEA\xE8\x03\x02\x02\x02\xEB\xEE" +
		"\x03\x02\x02\x02\xEC\xEA\x03\x02\x02\x02\xEC\xED\x03\x02\x02\x02\xED)" +
		"\x03\x02\x02\x02\xEE\xEC\x03\x02\x02\x02\xEF\xF0\x07\x05\x02\x02\xF0\xF1" +
		"\x05 \x11\x02\xF1+\x03\x02\x02\x02\xF2\xF3\t\x06\x02\x02\xF3\xF4\x05(" +
		"\x15\x02\xF4-\x03\x02\x02\x02\xF5\xF6\t\x07\x02\x02\xF6\xF7\x05(\x15\x02" +
		"\xF7/\x03\x02\x02\x02\xF8\xF9\t\b\x02\x02\xF9\xFA\x05(\x15\x02\xFA1\x03" +
		"\x02\x02\x02\xFB\xFC\t\t\x02\x02\xFC\xFD\x05(\x15\x02\xFD3\x03\x02\x02" +
		"\x02\xFE\xFF\t\n\x02\x02\xFF5\x03\x02\x02\x02\u0100\u0101\t\v\x02\x02" +
		"\u01017\x03\x02\x02\x02\u0102\u0103\t\f\x02\x02\u01039\x03\x02\x02\x02" +
		"\u0104\u0105\t\r\x02\x02\u0105;\x03\x02\x02\x02\u0106\u0107\t\x0E\x02" +
		"\x02\u0107=\x03\x02\x02\x02\u0108\u0109\x07&\x02\x02\u0109?\x03\x02\x02" +
		"\x02\u010A\u010B\x07\'\x02\x02\u010BA\x03\x02\x02\x02\u010C\u010D\x07" +
		"(\x02\x02\u010DC\x03\x02\x02\x02\u010E\u010F\x07)\x02\x02\u010F\u0110" +
		"\x05(\x15\x02\u0110\u0111\x05(\x15\x02\u0111E\x03\x02\x02\x02\u0112\u0113" +
		"\x07*\x02\x02\u0113\u0114\x05(\x15\x02\u0114G\x03\x02\x02\x02\u0115\u0116" +
		"\x07+\x02\x02\u0116\u0117\x07\b\x02\x02\u0117\u0118\x05 \x11\x02\u0118" +
		"\u0119\x05(\x15\x02\u0119\u011A\x05(\x15\x02\u011A\u011B\x05(\x15\x02" +
		"\u011B\u011C\x07\t\x02\x02\u011C\u011D\x05\x12\n\x02\u011DI\x03\x02\x02" +
		"\x02\u011E\u011F\x07.\x02\x02\u011FK\x03\x02\x02\x02\u0120\u0121\x07/" +
		"\x02\x02\u0121M\x03\x02\x02\x02\x19OTW\\_dg{\x81\x89\x8D\x90\x95\x9F\xAC" +
		"\xC1\xC6\xC8\xD2\xD7\xDD\xE4\xEC";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!logoParser.__ATN) {
			logoParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(logoParser._serializedATN));
		}

		return logoParser.__ATN;
	}

}

export class ProgContext extends ParserRuleContext {
	public EOL(): TerminalNode[];
	public EOL(i: number): TerminalNode;
	public EOL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(logoParser.EOL);
		} else {
			return this.getToken(logoParser.EOL, i);
		}
	}
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
	public get ruleIndex(): number { return logoParser.RULE_prog; }
	// @Override
	public enterRule(listener: logoListener): void {
		if (listener.enterProg) {
			listener.enterProg(this);
		}
	}
	// @Override
	public exitRule(listener: logoListener): void {
		if (listener.exitProg) {
			listener.exitProg(this);
		}
	}
}


export class LineContext extends ParserRuleContext {
	public cmd(): CmdContext[];
	public cmd(i: number): CmdContext;
	public cmd(i?: number): CmdContext | CmdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CmdContext);
		} else {
			return this.getRuleContext(i, CmdContext);
		}
	}
	public comment(): CommentContext | undefined {
		return this.tryGetRuleContext(0, CommentContext);
	}
	public print(): PrintContext | undefined {
		return this.tryGetRuleContext(0, PrintContext);
	}
	public procedureDeclaration(): ProcedureDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ProcedureDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return logoParser.RULE_line; }
	// @Override
	public enterRule(listener: logoListener): void {
		if (listener.enterLine) {
			listener.enterLine(this);
		}
	}
	// @Override
	public exitRule(listener: logoListener): void {
		if (listener.exitLine) {
			listener.exitLine(this);
		}
	}
}


export class CmdContext extends ParserRuleContext {
	public repeat(): RepeatContext | undefined {
		return this.tryGetRuleContext(0, RepeatContext);
	}
	public fd(): FdContext | undefined {
		return this.tryGetRuleContext(0, FdContext);
	}
	public bk(): BkContext | undefined {
		return this.tryGetRuleContext(0, BkContext);
	}
	public rt(): RtContext | undefined {
		return this.tryGetRuleContext(0, RtContext);
	}
	public lt(): LtContext | undefined {
		return this.tryGetRuleContext(0, LtContext);
	}
	public cs(): CsContext | undefined {
		return this.tryGetRuleContext(0, CsContext);
	}
	public pu(): PuContext | undefined {
		return this.tryGetRuleContext(0, PuContext);
	}
	public pd(): PdContext | undefined {
		return this.tryGetRuleContext(0, PdContext);
	}
	public ht(): HtContext | undefined {
		return this.tryGetRuleContext(0, HtContext);
	}
	public st(): StContext | undefined {
		return this.tryGetRuleContext(0, StContext);
	}
	public home(): HomeContext | undefined {
		return this.tryGetRuleContext(0, HomeContext);
	}
	public label(): LabelContext | undefined {
		return this.tryGetRuleContext(0, LabelContext);
	}
	public setxy(): SetxyContext | undefined {
		return this.tryGetRuleContext(0, SetxyContext);
	}
	public make(): MakeContext | undefined {
		return this.tryGetRuleContext(0, MakeContext);
	}
	public procedureInvocation(): ProcedureInvocationContext | undefined {
		return this.tryGetRuleContext(0, ProcedureInvocationContext);
	}
	public ife(): IfeContext | undefined {
		return this.tryGetRuleContext(0, IfeContext);
	}
	public stop(): StopContext | undefined {
		return this.tryGetRuleContext(0, StopContext);
	}
	public fore(): ForeContext | undefined {
		return this.tryGetRuleContext(0, ForeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return logoParser.RULE_cmd; }
	// @Override
	public enterRule(listener: logoListener): void {
		if (listener.enterCmd) {
			listener.enterCmd(this);
		}
	}
	// @Override
	public exitRule(listener: logoListener): void {
		if (listener.exitCmd) {
			listener.exitCmd(this);
		}
	}
}


export class ProcedureInvocationContext extends ParserRuleContext {
	public name(): NameContext {
		return this.getRuleContext(0, NameContext);
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return logoParser.RULE_procedureInvocation; }
	// @Override
	public enterRule(listener: logoListener): void {
		if (listener.enterProcedureInvocation) {
			listener.enterProcedureInvocation(this);
		}
	}
	// @Override
	public exitRule(listener: logoListener): void {
		if (listener.exitProcedureInvocation) {
			listener.exitProcedureInvocation(this);
		}
	}
}


export class ProcedureDeclarationContext extends ParserRuleContext {
	public name(): NameContext {
		return this.getRuleContext(0, NameContext);
	}
	public parameterDeclarations(): ParameterDeclarationsContext[];
	public parameterDeclarations(i: number): ParameterDeclarationsContext;
	public parameterDeclarations(i?: number): ParameterDeclarationsContext | ParameterDeclarationsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterDeclarationsContext);
		} else {
			return this.getRuleContext(i, ParameterDeclarationsContext);
		}
	}
	public EOL(): TerminalNode[];
	public EOL(i: number): TerminalNode;
	public EOL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(logoParser.EOL);
		} else {
			return this.getToken(logoParser.EOL, i);
		}
	}
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
	public get ruleIndex(): number { return logoParser.RULE_procedureDeclaration; }
	// @Override
	public enterRule(listener: logoListener): void {
		if (listener.enterProcedureDeclaration) {
			listener.enterProcedureDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: logoListener): void {
		if (listener.exitProcedureDeclaration) {
			listener.exitProcedureDeclaration(this);
		}
	}
}


export class ParameterDeclarationsContext extends ParserRuleContext {
	public name(): NameContext {
		return this.getRuleContext(0, NameContext);
	}
	public parameterDeclarations(): ParameterDeclarationsContext[];
	public parameterDeclarations(i: number): ParameterDeclarationsContext;
	public parameterDeclarations(i?: number): ParameterDeclarationsContext | ParameterDeclarationsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterDeclarationsContext);
		} else {
			return this.getRuleContext(i, ParameterDeclarationsContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return logoParser.RULE_parameterDeclarations; }
	// @Override
	public enterRule(listener: logoListener): void {
		if (listener.enterParameterDeclarations) {
			listener.enterParameterDeclarations(this);
		}
	}
	// @Override
	public exitRule(listener: logoListener): void {
		if (listener.exitParameterDeclarations) {
			listener.exitParameterDeclarations(this);
		}
	}
}


export class FuncContext extends ParserRuleContext {
	public random(): RandomContext {
		return this.getRuleContext(0, RandomContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return logoParser.RULE_func; }
	// @Override
	public enterRule(listener: logoListener): void {
		if (listener.enterFunc) {
			listener.enterFunc(this);
		}
	}
	// @Override
	public exitRule(listener: logoListener): void {
		if (listener.exitFunc) {
			listener.exitFunc(this);
		}
	}
}


export class RepeatContext extends ParserRuleContext {
	public number(): NumberContext {
		return this.getRuleContext(0, NumberContext);
	}
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return logoParser.RULE_repeat; }
	// @Override
	public enterRule(listener: logoListener): void {
		if (listener.enterRepeat) {
			listener.enterRepeat(this);
		}
	}
	// @Override
	public exitRule(listener: logoListener): void {
		if (listener.exitRepeat) {
			listener.exitRepeat(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	public cmd(): CmdContext[];
	public cmd(i: number): CmdContext;
	public cmd(i?: number): CmdContext | CmdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CmdContext);
		} else {
			return this.getRuleContext(i, CmdContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return logoParser.RULE_block; }
	// @Override
	public enterRule(listener: logoListener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	// @Override
	public exitRule(listener: logoListener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
}


export class IfeContext extends ParserRuleContext {
	public comparison(): ComparisonContext {
		return this.getRuleContext(0, ComparisonContext);
	}
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return logoParser.RULE_ife; }
	// @Override
	public enterRule(listener: logoListener): void {
		if (listener.enterIfe) {
			listener.enterIfe(this);
		}
	}
	// @Override
	public exitRule(listener: logoListener): void {
		if (listener.exitIfe) {
			listener.exitIfe(this);
		}
	}
}


export class ComparisonContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public comparisonOperator(): ComparisonOperatorContext {
		return this.getRuleContext(0, ComparisonOperatorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return logoParser.RULE_comparison; }
	// @Override
	public enterRule(listener: logoListener): void {
		if (listener.enterComparison) {
			listener.enterComparison(this);
		}
	}
	// @Override
	public exitRule(listener: logoListener): void {
		if (listener.exitComparison) {
			listener.exitComparison(this);
		}
	}
}


export class ComparisonOperatorContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return logoParser.RULE_comparisonOperator; }
	// @Override
	public enterRule(listener: logoListener): void {
		if (listener.enterComparisonOperator) {
			listener.enterComparisonOperator(this);
		}
	}
	// @Override
	public exitRule(listener: logoListener): void {
		if (listener.exitComparisonOperator) {
			listener.exitComparisonOperator(this);
		}
	}
}


export class MakeContext extends ParserRuleContext {
	public STRINGLITERAL(): TerminalNode { return this.getToken(logoParser.STRINGLITERAL, 0); }
	public value(): ValueContext {
		return this.getRuleContext(0, ValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return logoParser.RULE_make; }
	// @Override
	public enterRule(listener: logoListener): void {
		if (listener.enterMake) {
			listener.enterMake(this);
		}
	}
	// @Override
	public exitRule(listener: logoListener): void {
		if (listener.exitMake) {
			listener.exitMake(this);
		}
	}
}


export class PrintContext extends ParserRuleContext {
	public value(): ValueContext | undefined {
		return this.tryGetRuleContext(0, ValueContext);
	}
	public quotedstring(): QuotedstringContext | undefined {
		return this.tryGetRuleContext(0, QuotedstringContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return logoParser.RULE_print; }
	// @Override
	public enterRule(listener: logoListener): void {
		if (listener.enterPrint) {
			listener.enterPrint(this);
		}
	}
	// @Override
	public exitRule(listener: logoListener): void {
		if (listener.exitPrint) {
			listener.exitPrint(this);
		}
	}
}


export class QuotedstringContext extends ParserRuleContext {
	public quotedstring(): QuotedstringContext[];
	public quotedstring(i: number): QuotedstringContext;
	public quotedstring(i?: number): QuotedstringContext | QuotedstringContext[] {
		if (i === undefined) {
			return this.getRuleContexts(QuotedstringContext);
		} else {
			return this.getRuleContext(i, QuotedstringContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return logoParser.RULE_quotedstring; }
	// @Override
	public enterRule(listener: logoListener): void {
		if (listener.enterQuotedstring) {
			listener.enterQuotedstring(this);
		}
	}
	// @Override
	public exitRule(listener: logoListener): void {
		if (listener.exitQuotedstring) {
			listener.exitQuotedstring(this);
		}
	}
}


export class NameContext extends ParserRuleContext {
	public STRING(): TerminalNode { return this.getToken(logoParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return logoParser.RULE_name; }
	// @Override
	public enterRule(listener: logoListener): void {
		if (listener.enterName) {
			listener.enterName(this);
		}
	}
	// @Override
	public exitRule(listener: logoListener): void {
		if (listener.exitName) {
			listener.exitName(this);
		}
	}
}


export class ValueContext extends ParserRuleContext {
	public STRINGLITERAL(): TerminalNode | undefined { return this.tryGetToken(logoParser.STRINGLITERAL, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public deref(): DerefContext | undefined {
		return this.tryGetRuleContext(0, DerefContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return logoParser.RULE_value; }
	// @Override
	public enterRule(listener: logoListener): void {
		if (listener.enterValue) {
			listener.enterValue(this);
		}
	}
	// @Override
	public exitRule(listener: logoListener): void {
		if (listener.exitValue) {
			listener.exitValue(this);
		}
	}
}


export class SignExpressionContext extends ParserRuleContext {
	public number(): NumberContext | undefined {
		return this.tryGetRuleContext(0, NumberContext);
	}
	public deref(): DerefContext | undefined {
		return this.tryGetRuleContext(0, DerefContext);
	}
	public func(): FuncContext | undefined {
		return this.tryGetRuleContext(0, FuncContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return logoParser.RULE_signExpression; }
	// @Override
	public enterRule(listener: logoListener): void {
		if (listener.enterSignExpression) {
			listener.enterSignExpression(this);
		}
	}
	// @Override
	public exitRule(listener: logoListener): void {
		if (listener.exitSignExpression) {
			listener.exitSignExpression(this);
		}
	}
}


export class MultiplyingExpressionContext extends ParserRuleContext {
	public signExpression(): SignExpressionContext[];
	public signExpression(i: number): SignExpressionContext;
	public signExpression(i?: number): SignExpressionContext | SignExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SignExpressionContext);
		} else {
			return this.getRuleContext(i, SignExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return logoParser.RULE_multiplyingExpression; }
	// @Override
	public enterRule(listener: logoListener): void {
		if (listener.enterMultiplyingExpression) {
			listener.enterMultiplyingExpression(this);
		}
	}
	// @Override
	public exitRule(listener: logoListener): void {
		if (listener.exitMultiplyingExpression) {
			listener.exitMultiplyingExpression(this);
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return logoParser.RULE_expression; }
	// @Override
	public enterRule(listener: logoListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: logoListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
}


export class DerefContext extends ParserRuleContext {
	public name(): NameContext {
		return this.getRuleContext(0, NameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return logoParser.RULE_deref; }
	// @Override
	public enterRule(listener: logoListener): void {
		if (listener.enterDeref) {
			listener.enterDeref(this);
		}
	}
	// @Override
	public exitRule(listener: logoListener): void {
		if (listener.exitDeref) {
			listener.exitDeref(this);
		}
	}
}


export class FdContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return logoParser.RULE_fd; }
	// @Override
	public enterRule(listener: logoListener): void {
		if (listener.enterFd) {
			listener.enterFd(this);
		}
	}
	// @Override
	public exitRule(listener: logoListener): void {
		if (listener.exitFd) {
			listener.exitFd(this);
		}
	}
}


export class BkContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return logoParser.RULE_bk; }
	// @Override
	public enterRule(listener: logoListener): void {
		if (listener.enterBk) {
			listener.enterBk(this);
		}
	}
	// @Override
	public exitRule(listener: logoListener): void {
		if (listener.exitBk) {
			listener.exitBk(this);
		}
	}
}


export class RtContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return logoParser.RULE_rt; }
	// @Override
	public enterRule(listener: logoListener): void {
		if (listener.enterRt) {
			listener.enterRt(this);
		}
	}
	// @Override
	public exitRule(listener: logoListener): void {
		if (listener.exitRt) {
			listener.exitRt(this);
		}
	}
}


export class LtContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return logoParser.RULE_lt; }
	// @Override
	public enterRule(listener: logoListener): void {
		if (listener.enterLt) {
			listener.enterLt(this);
		}
	}
	// @Override
	public exitRule(listener: logoListener): void {
		if (listener.exitLt) {
			listener.exitLt(this);
		}
	}
}


export class CsContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return logoParser.RULE_cs; }
	// @Override
	public enterRule(listener: logoListener): void {
		if (listener.enterCs) {
			listener.enterCs(this);
		}
	}
	// @Override
	public exitRule(listener: logoListener): void {
		if (listener.exitCs) {
			listener.exitCs(this);
		}
	}
}


export class PuContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return logoParser.RULE_pu; }
	// @Override
	public enterRule(listener: logoListener): void {
		if (listener.enterPu) {
			listener.enterPu(this);
		}
	}
	// @Override
	public exitRule(listener: logoListener): void {
		if (listener.exitPu) {
			listener.exitPu(this);
		}
	}
}


export class PdContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return logoParser.RULE_pd; }
	// @Override
	public enterRule(listener: logoListener): void {
		if (listener.enterPd) {
			listener.enterPd(this);
		}
	}
	// @Override
	public exitRule(listener: logoListener): void {
		if (listener.exitPd) {
			listener.exitPd(this);
		}
	}
}


export class HtContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return logoParser.RULE_ht; }
	// @Override
	public enterRule(listener: logoListener): void {
		if (listener.enterHt) {
			listener.enterHt(this);
		}
	}
	// @Override
	public exitRule(listener: logoListener): void {
		if (listener.exitHt) {
			listener.exitHt(this);
		}
	}
}


export class StContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return logoParser.RULE_st; }
	// @Override
	public enterRule(listener: logoListener): void {
		if (listener.enterSt) {
			listener.enterSt(this);
		}
	}
	// @Override
	public exitRule(listener: logoListener): void {
		if (listener.exitSt) {
			listener.exitSt(this);
		}
	}
}


export class HomeContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return logoParser.RULE_home; }
	// @Override
	public enterRule(listener: logoListener): void {
		if (listener.enterHome) {
			listener.enterHome(this);
		}
	}
	// @Override
	public exitRule(listener: logoListener): void {
		if (listener.exitHome) {
			listener.exitHome(this);
		}
	}
}


export class StopContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return logoParser.RULE_stop; }
	// @Override
	public enterRule(listener: logoListener): void {
		if (listener.enterStop) {
			listener.enterStop(this);
		}
	}
	// @Override
	public exitRule(listener: logoListener): void {
		if (listener.exitStop) {
			listener.exitStop(this);
		}
	}
}


export class LabelContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return logoParser.RULE_label; }
	// @Override
	public enterRule(listener: logoListener): void {
		if (listener.enterLabel) {
			listener.enterLabel(this);
		}
	}
	// @Override
	public exitRule(listener: logoListener): void {
		if (listener.exitLabel) {
			listener.exitLabel(this);
		}
	}
}


export class SetxyContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return logoParser.RULE_setxy; }
	// @Override
	public enterRule(listener: logoListener): void {
		if (listener.enterSetxy) {
			listener.enterSetxy(this);
		}
	}
	// @Override
	public exitRule(listener: logoListener): void {
		if (listener.exitSetxy) {
			listener.exitSetxy(this);
		}
	}
}


export class RandomContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return logoParser.RULE_random; }
	// @Override
	public enterRule(listener: logoListener): void {
		if (listener.enterRandom) {
			listener.enterRandom(this);
		}
	}
	// @Override
	public exitRule(listener: logoListener): void {
		if (listener.exitRandom) {
			listener.exitRandom(this);
		}
	}
}


export class ForeContext extends ParserRuleContext {
	public name(): NameContext {
		return this.getRuleContext(0, NameContext);
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
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return logoParser.RULE_fore; }
	// @Override
	public enterRule(listener: logoListener): void {
		if (listener.enterFore) {
			listener.enterFore(this);
		}
	}
	// @Override
	public exitRule(listener: logoListener): void {
		if (listener.exitFore) {
			listener.exitFore(this);
		}
	}
}


export class NumberContext extends ParserRuleContext {
	public NUMBER(): TerminalNode { return this.getToken(logoParser.NUMBER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return logoParser.RULE_number; }
	// @Override
	public enterRule(listener: logoListener): void {
		if (listener.enterNumber) {
			listener.enterNumber(this);
		}
	}
	// @Override
	public exitRule(listener: logoListener): void {
		if (listener.exitNumber) {
			listener.exitNumber(this);
		}
	}
}


export class CommentContext extends ParserRuleContext {
	public COMMENT(): TerminalNode { return this.getToken(logoParser.COMMENT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return logoParser.RULE_comment; }
	// @Override
	public enterRule(listener: logoListener): void {
		if (listener.enterComment) {
			listener.enterComment(this);
		}
	}
	// @Override
	public exitRule(listener: logoListener): void {
		if (listener.exitComment) {
			listener.exitComment(this);
		}
	}
}


