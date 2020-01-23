// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/lolcode/lolcode.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { lolcodeListener } from "./lolcodeListener";
import { lolcodeVisitor } from "./lolcodeVisitor";


export class lolcodeParser extends Parser {
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
	public static readonly LABEL = 41;
	public static readonly ATOM = 42;
	public static readonly STRING = 43;
	public static readonly WS = 44;
	public static readonly RULE_program = 0;
	public static readonly RULE_code_block = 1;
	public static readonly RULE_statement = 2;
	public static readonly RULE_loop = 3;
	public static readonly RULE_declaration = 4;
	public static readonly RULE_comment = 5;
	public static readonly RULE_print_block = 6;
	public static readonly RULE_if_block = 7;
	public static readonly RULE_else_if_block = 8;
	public static readonly RULE_input_block = 9;
	public static readonly RULE_func_decl = 10;
	public static readonly RULE_assignment = 11;
	public static readonly RULE_expression = 12;
	public static readonly RULE_equals = 13;
	public static readonly RULE_not_equals = 14;
	public static readonly RULE_both = 15;
	public static readonly RULE_either = 16;
	public static readonly RULE_greater = 17;
	public static readonly RULE_less = 18;
	public static readonly RULE_add = 19;
	public static readonly RULE_sub = 20;
	public static readonly RULE_mul = 21;
	public static readonly RULE_div = 22;
	public static readonly RULE_mod = 23;
	public static readonly RULE_cast = 24;
	public static readonly RULE_all = 25;
	public static readonly RULE_any = 26;
	public static readonly RULE_not = 27;
	public static readonly RULE_func = 28;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "code_block", "statement", "loop", "declaration", "comment", 
		"print_block", "if_block", "else_if_block", "input_block", "func_decl", 
		"assignment", "expression", "equals", "not_equals", "both", "either", 
		"greater", "less", "add", "sub", "mul", "div", "mod", "cast", "all", "any", 
		"not", "func",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'HAI'", "'KTHXBYE'", "'IM IN YR'", "'WILE'", "'IM OUTTA YR'", 
		"'I HAS A'", "'ITZ'", "'BTW'", "'OBTW'", "'TLDR'", "'VISIBLE'", "'MKAY?'", 
		"'O RLY?'", "'YA RLY'", "'OIC'", "'MEBBE'", "'NO WAI'", "'GIMMEH'", "'HOW DUZ I'", 
		"'YR'", "'AN YR'", "'IF U SAY SO'", "'R'", "'BOTH SAEM'", "'AN'", "'DIFFRINT'", 
		"'BOTH OF'", "'EITHER OF'", "'BIGGR OF'", "'SMALLR OF'", "'SUM OF'", "'DIFF OF'", 
		"'PRODUKT OF'", "'QUOSHUNT OF'", "'MOD OF'", "'MAEK'", "'A'", "'ALL OF'", 
		"'ANY OF'", "'NOT'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, "LABEL", 
		"ATOM", "STRING", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(lolcodeParser._LITERAL_NAMES, lolcodeParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return lolcodeParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "lolcode.g4"; }

	// @Override
	public get ruleNames(): string[] { return lolcodeParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return lolcodeParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(lolcodeParser._ATN, this);
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, lolcodeParser.RULE_program);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 58;
			this.match(lolcodeParser.T__0);
			this.state = 59;
			this.code_block();
			this.state = 61;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === lolcodeParser.T__1) {
				{
				this.state = 60;
				this.match(lolcodeParser.T__1);
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
	public code_block(): Code_blockContext {
		let _localctx: Code_blockContext = new Code_blockContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, lolcodeParser.RULE_code_block);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 64;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 63;
				this.statement();
				}
				}
				this.state = 66;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << lolcodeParser.T__2) | (1 << lolcodeParser.T__5) | (1 << lolcodeParser.T__7) | (1 << lolcodeParser.T__8) | (1 << lolcodeParser.T__10) | (1 << lolcodeParser.T__12) | (1 << lolcodeParser.T__17) | (1 << lolcodeParser.T__18) | (1 << lolcodeParser.T__23) | (1 << lolcodeParser.T__25) | (1 << lolcodeParser.T__26) | (1 << lolcodeParser.T__27) | (1 << lolcodeParser.T__28) | (1 << lolcodeParser.T__29) | (1 << lolcodeParser.T__30))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (lolcodeParser.T__31 - 32)) | (1 << (lolcodeParser.T__32 - 32)) | (1 << (lolcodeParser.T__33 - 32)) | (1 << (lolcodeParser.T__34 - 32)) | (1 << (lolcodeParser.T__35 - 32)) | (1 << (lolcodeParser.T__37 - 32)) | (1 << (lolcodeParser.T__38 - 32)) | (1 << (lolcodeParser.T__39 - 32)) | (1 << (lolcodeParser.LABEL - 32)) | (1 << (lolcodeParser.ATOM - 32)))) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 4, lolcodeParser.RULE_statement);
		try {
			this.state = 77;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 68;
				this.loop();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 69;
				this.declaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 70;
				this.comment();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 71;
				this.print_block();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 72;
				this.if_block();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 73;
				this.input_block();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 74;
				this.func_decl();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 75;
				this.assignment();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 76;
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
	public loop(): LoopContext {
		let _localctx: LoopContext = new LoopContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, lolcodeParser.RULE_loop);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 79;
			this.match(lolcodeParser.T__2);
			this.state = 80;
			this.match(lolcodeParser.LABEL);
			this.state = 81;
			this.match(lolcodeParser.T__3);
			this.state = 82;
			this.expression();
			this.state = 83;
			this.code_block();
			this.state = 84;
			this.match(lolcodeParser.T__4);
			this.state = 85;
			this.match(lolcodeParser.LABEL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declaration(): DeclarationContext {
		let _localctx: DeclarationContext = new DeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, lolcodeParser.RULE_declaration);
		try {
			this.state = 92;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 87;
				this.match(lolcodeParser.T__5);
				this.state = 88;
				this.match(lolcodeParser.LABEL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 89;
				this.match(lolcodeParser.T__5);
				this.state = 90;
				this.match(lolcodeParser.LABEL);
				this.state = 91;
				this.match(lolcodeParser.T__6);
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
	public comment(): CommentContext {
		let _localctx: CommentContext = new CommentContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, lolcodeParser.RULE_comment);
		try {
			this.state = 99;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case lolcodeParser.T__7:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 94;
				this.match(lolcodeParser.T__7);
				this.state = 95;
				this.match(lolcodeParser.STRING);
				}
				break;
			case lolcodeParser.T__8:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 96;
				this.match(lolcodeParser.T__8);
				this.state = 97;
				this.match(lolcodeParser.STRING);
				this.state = 98;
				this.match(lolcodeParser.T__9);
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
	public print_block(): Print_blockContext {
		let _localctx: Print_blockContext = new Print_blockContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, lolcodeParser.RULE_print_block);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 101;
			this.match(lolcodeParser.T__10);
			this.state = 105;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 102;
					this.expression();
					}
					}
				}
				this.state = 107;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
			}
			this.state = 109;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === lolcodeParser.T__11) {
				{
				this.state = 108;
				this.match(lolcodeParser.T__11);
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
	public if_block(): If_blockContext {
		let _localctx: If_blockContext = new If_blockContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, lolcodeParser.RULE_if_block);
		try {
			this.state = 122;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 111;
				this.match(lolcodeParser.T__12);
				this.state = 112;
				this.match(lolcodeParser.T__13);
				this.state = 113;
				this.code_block();
				this.state = 114;
				this.match(lolcodeParser.T__14);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 116;
				this.match(lolcodeParser.T__12);
				this.state = 117;
				this.match(lolcodeParser.T__13);
				this.state = 118;
				this.code_block();
				this.state = 119;
				this.else_if_block();
				this.state = 120;
				this.match(lolcodeParser.T__14);
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
	public else_if_block(): Else_if_blockContext {
		let _localctx: Else_if_blockContext = new Else_if_blockContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, lolcodeParser.RULE_else_if_block);
		try {
			this.state = 135;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 124;
				this.match(lolcodeParser.T__15);
				this.state = 125;
				this.expression();
				this.state = 126;
				this.code_block();
				this.state = 127;
				this.else_if_block();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 129;
				this.match(lolcodeParser.T__16);
				this.state = 130;
				this.code_block();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 131;
				this.match(lolcodeParser.T__15);
				this.state = 132;
				this.expression();
				this.state = 133;
				this.code_block();
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
	public input_block(): Input_blockContext {
		let _localctx: Input_blockContext = new Input_blockContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, lolcodeParser.RULE_input_block);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 137;
			this.match(lolcodeParser.T__17);
			this.state = 138;
			this.match(lolcodeParser.LABEL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public func_decl(): Func_declContext {
		let _localctx: Func_declContext = new Func_declContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, lolcodeParser.RULE_func_decl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 140;
			this.match(lolcodeParser.T__18);
			this.state = 141;
			this.match(lolcodeParser.LABEL);
			this.state = 152;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === lolcodeParser.T__19) {
				{
				{
				this.state = 142;
				this.match(lolcodeParser.T__19);
				this.state = 143;
				this.match(lolcodeParser.LABEL);
				}
				this.state = 149;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === lolcodeParser.T__20) {
					{
					{
					this.state = 145;
					this.match(lolcodeParser.T__20);
					this.state = 146;
					this.match(lolcodeParser.LABEL);
					}
					}
					this.state = 151;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 154;
			this.code_block();
			this.state = 155;
			this.match(lolcodeParser.T__21);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 22, lolcodeParser.RULE_assignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 157;
			this.match(lolcodeParser.LABEL);
			this.state = 158;
			this.match(lolcodeParser.T__22);
			this.state = 159;
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
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, lolcodeParser.RULE_expression);
		try {
			this.state = 179;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 161;
				this.equals();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 162;
				this.both();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 163;
				this.not_equals();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 164;
				this.greater();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 165;
				this.less();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 166;
				this.add();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 167;
				this.sub();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 168;
				this.mul();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 169;
				this.div();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 170;
				this.mod();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 171;
				this.cast();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 172;
				this.either();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 173;
				this.all();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 174;
				this.any();
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 175;
				this.not();
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 176;
				this.func();
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 177;
				this.match(lolcodeParser.LABEL);
				}
				break;

			case 18:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 178;
				this.match(lolcodeParser.ATOM);
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
	public equals(): EqualsContext {
		let _localctx: EqualsContext = new EqualsContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, lolcodeParser.RULE_equals);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 181;
			this.match(lolcodeParser.T__23);
			this.state = 182;
			this.expression();
			this.state = 183;
			this.match(lolcodeParser.T__24);
			this.state = 184;
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
	public not_equals(): Not_equalsContext {
		let _localctx: Not_equalsContext = new Not_equalsContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, lolcodeParser.RULE_not_equals);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 186;
			this.match(lolcodeParser.T__25);
			this.state = 187;
			this.expression();
			this.state = 188;
			this.match(lolcodeParser.T__24);
			this.state = 189;
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
	public both(): BothContext {
		let _localctx: BothContext = new BothContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, lolcodeParser.RULE_both);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 191;
			this.match(lolcodeParser.T__26);
			this.state = 192;
			this.expression();
			this.state = 193;
			this.match(lolcodeParser.T__24);
			this.state = 194;
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
	public either(): EitherContext {
		let _localctx: EitherContext = new EitherContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, lolcodeParser.RULE_either);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 196;
			this.match(lolcodeParser.T__27);
			this.state = 197;
			this.expression();
			this.state = 198;
			this.match(lolcodeParser.T__24);
			this.state = 199;
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
	public greater(): GreaterContext {
		let _localctx: GreaterContext = new GreaterContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, lolcodeParser.RULE_greater);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 201;
			this.match(lolcodeParser.T__28);
			this.state = 202;
			this.expression();
			this.state = 203;
			this.match(lolcodeParser.T__24);
			this.state = 204;
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
	public less(): LessContext {
		let _localctx: LessContext = new LessContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, lolcodeParser.RULE_less);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 206;
			this.match(lolcodeParser.T__29);
			this.state = 207;
			this.expression();
			this.state = 208;
			this.match(lolcodeParser.T__24);
			this.state = 209;
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
	public add(): AddContext {
		let _localctx: AddContext = new AddContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, lolcodeParser.RULE_add);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 211;
			this.match(lolcodeParser.T__30);
			this.state = 212;
			this.expression();
			this.state = 213;
			this.match(lolcodeParser.T__24);
			this.state = 214;
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
	public sub(): SubContext {
		let _localctx: SubContext = new SubContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, lolcodeParser.RULE_sub);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 216;
			this.match(lolcodeParser.T__31);
			this.state = 217;
			this.expression();
			this.state = 218;
			this.match(lolcodeParser.T__24);
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
	public mul(): MulContext {
		let _localctx: MulContext = new MulContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, lolcodeParser.RULE_mul);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 221;
			this.match(lolcodeParser.T__32);
			this.state = 222;
			this.expression();
			this.state = 223;
			this.match(lolcodeParser.T__24);
			this.state = 224;
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
	public div(): DivContext {
		let _localctx: DivContext = new DivContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, lolcodeParser.RULE_div);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 226;
			this.match(lolcodeParser.T__33);
			this.state = 227;
			this.expression();
			this.state = 228;
			this.match(lolcodeParser.T__24);
			this.state = 229;
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
	public mod(): ModContext {
		let _localctx: ModContext = new ModContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, lolcodeParser.RULE_mod);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 231;
			this.match(lolcodeParser.T__34);
			this.state = 232;
			this.expression();
			this.state = 233;
			this.match(lolcodeParser.T__24);
			this.state = 234;
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
	public cast(): CastContext {
		let _localctx: CastContext = new CastContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, lolcodeParser.RULE_cast);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 236;
			this.match(lolcodeParser.T__35);
			this.state = 237;
			this.expression();
			this.state = 238;
			this.match(lolcodeParser.T__36);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public all(): AllContext {
		let _localctx: AllContext = new AllContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, lolcodeParser.RULE_all);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 240;
			this.match(lolcodeParser.T__37);
			this.state = 241;
			this.expression();
			this.state = 246;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === lolcodeParser.T__24) {
				{
				{
				this.state = 242;
				this.match(lolcodeParser.T__24);
				this.state = 243;
				this.expression();
				}
				}
				this.state = 248;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 249;
			this.match(lolcodeParser.T__11);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public any(): AnyContext {
		let _localctx: AnyContext = new AnyContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, lolcodeParser.RULE_any);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 251;
			this.match(lolcodeParser.T__38);
			this.state = 252;
			this.expression();
			this.state = 257;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === lolcodeParser.T__24) {
				{
				{
				this.state = 253;
				this.match(lolcodeParser.T__24);
				this.state = 254;
				this.expression();
				}
				}
				this.state = 259;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 260;
			this.match(lolcodeParser.T__11);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public not(): NotContext {
		let _localctx: NotContext = new NotContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, lolcodeParser.RULE_not);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 262;
			this.match(lolcodeParser.T__39);
			this.state = 263;
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
	public func(): FuncContext {
		let _localctx: FuncContext = new FuncContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, lolcodeParser.RULE_func);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 265;
			this.match(lolcodeParser.LABEL);
			this.state = 267;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 266;
				this.expression();
				}
				}
				this.state = 269;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 24)) & ~0x1F) === 0 && ((1 << (_la - 24)) & ((1 << (lolcodeParser.T__23 - 24)) | (1 << (lolcodeParser.T__25 - 24)) | (1 << (lolcodeParser.T__26 - 24)) | (1 << (lolcodeParser.T__27 - 24)) | (1 << (lolcodeParser.T__28 - 24)) | (1 << (lolcodeParser.T__29 - 24)) | (1 << (lolcodeParser.T__30 - 24)) | (1 << (lolcodeParser.T__31 - 24)) | (1 << (lolcodeParser.T__32 - 24)) | (1 << (lolcodeParser.T__33 - 24)) | (1 << (lolcodeParser.T__34 - 24)) | (1 << (lolcodeParser.T__35 - 24)) | (1 << (lolcodeParser.T__37 - 24)) | (1 << (lolcodeParser.T__38 - 24)) | (1 << (lolcodeParser.T__39 - 24)) | (1 << (lolcodeParser.LABEL - 24)) | (1 << (lolcodeParser.ATOM - 24)))) !== 0));
			this.state = 271;
			this.match(lolcodeParser.T__11);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03.\u0114\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x03\x02\x03\x02\x03\x02\x05\x02@\n\x02\x03\x03" +
		"\x06\x03C\n\x03\r\x03\x0E\x03D\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04P\n\x04\x03\x05\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x05\x06_\n\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07" +
		"f\n\x07\x03\b\x03\b\x07\bj\n\b\f\b\x0E\bm\v\b\x03\b\x05\bp\n\b\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x05\t}\n\t\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n\x8A" +
		"\n\n\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x07\f" +
		"\x96\n\f\f\f\x0E\f\x99\v\f\x05\f\x9B\n\f\x03\f\x03\f\x03\f\x03\r\x03\r" +
		"\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x05\x0E\xB6\n\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11" +
		"\x03\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13" +
		"\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15" +
		"\x03\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x17" +
		"\x03\x17\x03\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18" +
		"\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A" +
		"\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x07\x1B\xF7\n\x1B\f\x1B\x0E\x1B\xFA\v" +
		"\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x07\x1C\u0102\n\x1C" +
		"\f\x1C\x0E\x1C\u0105\v\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x03" +
		"\x1E\x03\x1E\x06\x1E\u010E\n\x1E\r\x1E\x0E\x1E\u010F\x03\x1E\x03\x1E\x03" +
		"\x1E\x02\x02\x02\x1F\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02" +
		"\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02" +
		"\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02\x02" +
		"\x02\x02\u011D\x02<\x03\x02\x02\x02\x04B\x03\x02\x02\x02\x06O\x03\x02" +
		"\x02\x02\bQ\x03\x02\x02\x02\n^\x03\x02\x02\x02\fe\x03\x02\x02\x02\x0E" +
		"g\x03\x02\x02\x02\x10|\x03\x02\x02\x02\x12\x89\x03\x02\x02\x02\x14\x8B" +
		"\x03\x02\x02\x02\x16\x8E\x03\x02\x02\x02\x18\x9F\x03\x02\x02\x02\x1A\xB5" +
		"\x03\x02\x02\x02\x1C\xB7\x03\x02\x02\x02\x1E\xBC\x03\x02\x02\x02 \xC1" +
		"\x03\x02\x02\x02\"\xC6\x03\x02\x02\x02$\xCB\x03\x02\x02\x02&\xD0\x03\x02" +
		"\x02\x02(\xD5\x03\x02\x02\x02*\xDA\x03\x02\x02\x02,\xDF\x03\x02\x02\x02" +
		".\xE4\x03\x02\x02\x020\xE9\x03\x02\x02\x022\xEE\x03\x02\x02\x024\xF2\x03" +
		"\x02\x02\x026\xFD\x03\x02\x02\x028\u0108\x03\x02\x02\x02:\u010B\x03\x02" +
		"\x02\x02<=\x07\x03\x02\x02=?\x05\x04\x03\x02>@\x07\x04\x02\x02?>\x03\x02" +
		"\x02\x02?@\x03\x02\x02\x02@\x03\x03\x02\x02\x02AC\x05\x06\x04\x02BA\x03" +
		"\x02\x02\x02CD\x03\x02\x02\x02DB\x03\x02\x02\x02DE\x03\x02\x02\x02E\x05" +
		"\x03\x02\x02\x02FP\x05\b\x05\x02GP\x05\n\x06\x02HP\x05\f\x07\x02IP\x05" +
		"\x0E\b\x02JP\x05\x10\t\x02KP\x05\x14\v\x02LP\x05\x16\f\x02MP\x05\x18\r" +
		"\x02NP\x05\x1A\x0E\x02OF\x03\x02\x02\x02OG\x03\x02\x02\x02OH\x03\x02\x02" +
		"\x02OI\x03\x02\x02\x02OJ\x03\x02\x02\x02OK\x03\x02\x02\x02OL\x03\x02\x02" +
		"\x02OM\x03\x02\x02\x02ON\x03\x02\x02\x02P\x07\x03\x02\x02\x02QR\x07\x05" +
		"\x02\x02RS\x07+\x02\x02ST\x07\x06\x02\x02TU\x05\x1A\x0E\x02UV\x05\x04" +
		"\x03\x02VW\x07\x07\x02\x02WX\x07+\x02\x02X\t\x03\x02\x02\x02YZ\x07\b\x02" +
		"\x02Z_\x07+\x02\x02[\\\x07\b\x02\x02\\]\x07+\x02\x02]_\x07\t\x02\x02^" +
		"Y\x03\x02\x02\x02^[\x03\x02\x02\x02_\v\x03\x02\x02\x02`a\x07\n\x02\x02" +
		"af\x07-\x02\x02bc\x07\v\x02\x02cd\x07-\x02\x02df\x07\f\x02\x02e`\x03\x02" +
		"\x02\x02eb\x03\x02\x02\x02f\r\x03\x02\x02\x02gk\x07\r\x02\x02hj\x05\x1A" +
		"\x0E\x02ih\x03\x02\x02\x02jm\x03\x02\x02\x02ki\x03\x02\x02\x02kl\x03\x02" +
		"\x02\x02lo\x03\x02\x02\x02mk\x03\x02\x02\x02np\x07\x0E\x02\x02on\x03\x02" +
		"\x02\x02op\x03\x02\x02\x02p\x0F\x03\x02\x02\x02qr\x07\x0F\x02\x02rs\x07" +
		"\x10\x02\x02st\x05\x04\x03\x02tu\x07\x11\x02\x02u}\x03\x02\x02\x02vw\x07" +
		"\x0F\x02\x02wx\x07\x10\x02\x02xy\x05\x04\x03\x02yz\x05\x12\n\x02z{\x07" +
		"\x11\x02\x02{}\x03\x02\x02\x02|q\x03\x02\x02\x02|v\x03\x02\x02\x02}\x11" +
		"\x03\x02\x02\x02~\x7F\x07\x12\x02\x02\x7F\x80\x05\x1A\x0E\x02\x80\x81" +
		"\x05\x04\x03\x02\x81\x82\x05\x12\n\x02\x82\x8A\x03\x02\x02\x02\x83\x84" +
		"\x07\x13\x02\x02\x84\x8A\x05\x04\x03\x02\x85\x86\x07\x12\x02\x02\x86\x87" +
		"\x05\x1A\x0E\x02\x87\x88\x05\x04\x03\x02\x88\x8A\x03\x02\x02\x02\x89~" +
		"\x03\x02\x02\x02\x89\x83\x03\x02\x02\x02\x89\x85\x03\x02\x02\x02\x8A\x13" +
		"\x03\x02\x02\x02\x8B\x8C\x07\x14\x02\x02\x8C\x8D\x07+\x02\x02\x8D\x15" +
		"\x03\x02\x02\x02\x8E\x8F\x07\x15\x02\x02\x8F\x9A\x07+\x02\x02\x90\x91" +
		"\x07\x16\x02\x02\x91\x92\x07+\x02\x02\x92\x97\x03\x02\x02\x02\x93\x94" +
		"\x07\x17\x02\x02\x94\x96\x07+\x02\x02\x95\x93\x03\x02\x02\x02\x96\x99" +
		"\x03\x02\x02\x02\x97\x95\x03\x02\x02\x02\x97\x98\x03\x02\x02\x02\x98\x9B" +
		"\x03\x02\x02\x02\x99\x97\x03\x02\x02\x02\x9A\x90\x03\x02\x02\x02\x9A\x9B" +
		"\x03\x02\x02\x02\x9B\x9C\x03\x02\x02\x02\x9C\x9D\x05\x04\x03\x02\x9D\x9E" +
		"\x07\x18\x02\x02\x9E\x17\x03\x02\x02\x02\x9F\xA0\x07+\x02\x02\xA0\xA1" +
		"\x07\x19\x02\x02\xA1\xA2\x05\x1A\x0E\x02\xA2\x19\x03\x02\x02\x02\xA3\xB6" +
		"\x05\x1C\x0F\x02\xA4\xB6\x05 \x11\x02\xA5\xB6\x05\x1E\x10\x02\xA6\xB6" +
		"\x05$\x13\x02\xA7\xB6\x05&\x14\x02\xA8\xB6\x05(\x15\x02\xA9\xB6\x05*\x16" +
		"\x02\xAA\xB6\x05,\x17\x02\xAB\xB6\x05.\x18\x02\xAC\xB6\x050\x19\x02\xAD" +
		"\xB6\x052\x1A\x02\xAE\xB6\x05\"\x12\x02\xAF\xB6\x054\x1B\x02\xB0\xB6\x05" +
		"6\x1C\x02\xB1\xB6\x058\x1D\x02\xB2\xB6\x05:\x1E\x02\xB3\xB6\x07+\x02\x02" +
		"\xB4\xB6\x07,\x02\x02\xB5\xA3\x03\x02\x02\x02\xB5\xA4\x03\x02\x02\x02" +
		"\xB5\xA5\x03\x02\x02\x02\xB5\xA6\x03\x02\x02\x02\xB5\xA7\x03\x02\x02\x02" +
		"\xB5\xA8\x03\x02\x02\x02\xB5\xA9\x03\x02\x02\x02\xB5\xAA\x03\x02\x02\x02" +
		"\xB5\xAB\x03\x02\x02\x02\xB5\xAC\x03\x02\x02\x02\xB5\xAD\x03\x02\x02\x02" +
		"\xB5\xAE\x03\x02\x02\x02\xB5\xAF\x03\x02\x02\x02\xB5\xB0\x03\x02\x02\x02" +
		"\xB5\xB1\x03\x02\x02\x02\xB5\xB2\x03\x02\x02\x02\xB5\xB3\x03\x02\x02\x02" +
		"\xB5\xB4\x03\x02\x02\x02\xB6\x1B\x03\x02\x02\x02\xB7\xB8\x07\x1A\x02\x02" +
		"\xB8\xB9\x05\x1A\x0E\x02\xB9\xBA\x07\x1B\x02\x02\xBA\xBB\x05\x1A\x0E\x02" +
		"\xBB\x1D\x03\x02\x02\x02\xBC\xBD\x07\x1C\x02\x02\xBD\xBE\x05\x1A\x0E\x02" +
		"\xBE\xBF\x07\x1B\x02\x02\xBF\xC0\x05\x1A\x0E\x02\xC0\x1F\x03\x02\x02\x02" +
		"\xC1\xC2\x07\x1D\x02\x02\xC2\xC3\x05\x1A\x0E\x02\xC3\xC4\x07\x1B\x02\x02" +
		"\xC4\xC5\x05\x1A\x0E\x02\xC5!\x03\x02\x02\x02\xC6\xC7\x07\x1E\x02\x02" +
		"\xC7\xC8\x05\x1A\x0E\x02\xC8\xC9\x07\x1B\x02\x02\xC9\xCA\x05\x1A\x0E\x02" +
		"\xCA#\x03\x02\x02\x02\xCB\xCC\x07\x1F\x02\x02\xCC\xCD\x05\x1A\x0E\x02" +
		"\xCD\xCE\x07\x1B\x02\x02\xCE\xCF\x05\x1A\x0E\x02\xCF%\x03\x02\x02\x02" +
		"\xD0\xD1\x07 \x02\x02\xD1\xD2\x05\x1A\x0E\x02\xD2\xD3\x07\x1B\x02\x02" +
		"\xD3\xD4\x05\x1A\x0E\x02\xD4\'\x03\x02\x02\x02\xD5\xD6\x07!\x02\x02\xD6" +
		"\xD7\x05\x1A\x0E\x02\xD7\xD8\x07\x1B\x02\x02\xD8\xD9\x05\x1A\x0E\x02\xD9" +
		")\x03\x02\x02\x02\xDA\xDB\x07\"\x02\x02\xDB\xDC\x05\x1A\x0E\x02\xDC\xDD" +
		"\x07\x1B\x02\x02\xDD\xDE\x05\x1A\x0E\x02\xDE+\x03\x02\x02\x02\xDF\xE0" +
		"\x07#\x02\x02\xE0\xE1\x05\x1A\x0E\x02\xE1\xE2\x07\x1B\x02\x02\xE2\xE3" +
		"\x05\x1A\x0E\x02\xE3-\x03\x02\x02\x02\xE4\xE5\x07$\x02\x02\xE5\xE6\x05" +
		"\x1A\x0E\x02\xE6\xE7\x07\x1B\x02\x02\xE7\xE8\x05\x1A\x0E\x02\xE8/\x03" +
		"\x02\x02\x02\xE9\xEA\x07%\x02\x02\xEA\xEB\x05\x1A\x0E\x02\xEB\xEC\x07" +
		"\x1B\x02\x02\xEC\xED\x05\x1A\x0E\x02\xED1\x03\x02\x02\x02\xEE\xEF\x07" +
		"&\x02\x02\xEF\xF0\x05\x1A\x0E\x02\xF0\xF1\x07\'\x02\x02\xF13\x03\x02\x02" +
		"\x02\xF2\xF3\x07(\x02\x02\xF3\xF8\x05\x1A\x0E\x02\xF4\xF5\x07\x1B\x02" +
		"\x02\xF5\xF7\x05\x1A\x0E\x02\xF6\xF4\x03\x02\x02\x02\xF7\xFA\x03\x02\x02" +
		"\x02\xF8\xF6\x03\x02\x02\x02\xF8\xF9\x03\x02\x02\x02\xF9\xFB\x03\x02\x02" +
		"\x02\xFA\xF8\x03\x02\x02\x02\xFB\xFC\x07\x0E\x02\x02\xFC5\x03\x02\x02" +
		"\x02\xFD\xFE\x07)\x02\x02\xFE\u0103\x05\x1A\x0E\x02\xFF\u0100\x07\x1B" +
		"\x02\x02\u0100\u0102\x05\x1A\x0E\x02\u0101\xFF\x03\x02\x02\x02\u0102\u0105" +
		"\x03\x02\x02\x02\u0103\u0101\x03\x02\x02\x02\u0103\u0104\x03\x02\x02\x02" +
		"\u0104\u0106\x03\x02\x02\x02\u0105\u0103\x03\x02\x02\x02\u0106\u0107\x07" +
		"\x0E\x02\x02\u01077\x03\x02\x02\x02\u0108\u0109\x07*\x02\x02\u0109\u010A" +
		"\x05\x1A\x0E\x02\u010A9\x03\x02\x02\x02\u010B\u010D\x07+\x02\x02\u010C" +
		"\u010E\x05\x1A\x0E\x02\u010D\u010C\x03\x02\x02\x02\u010E\u010F\x03\x02" +
		"\x02\x02\u010F\u010D\x03\x02\x02\x02\u010F\u0110\x03\x02\x02\x02\u0110" +
		"\u0111\x03\x02\x02\x02\u0111\u0112\x07\x0E\x02\x02\u0112;\x03\x02\x02" +
		"\x02\x11?DO^eko|\x89\x97\x9A\xB5\xF8\u0103\u010F";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!lolcodeParser.__ATN) {
			lolcodeParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(lolcodeParser._serializedATN));
		}

		return lolcodeParser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	public code_block(): Code_blockContext {
		return this.getRuleContext(0, Code_blockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return lolcodeParser.RULE_program; }
	// @Override
	public enterRule(listener: lolcodeListener): void {
		if (listener.enterProgram) {
			listener.enterProgram(this);
		}
	}
	// @Override
	public exitRule(listener: lolcodeListener): void {
		if (listener.exitProgram) {
			listener.exitProgram(this);
		}
	}
	// @Override
	public accept<Result>(visitor: lolcodeVisitor<Result>): Result {
		if (visitor.visitProgram) {
			return visitor.visitProgram(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Code_blockContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return lolcodeParser.RULE_code_block; }
	// @Override
	public enterRule(listener: lolcodeListener): void {
		if (listener.enterCode_block) {
			listener.enterCode_block(this);
		}
	}
	// @Override
	public exitRule(listener: lolcodeListener): void {
		if (listener.exitCode_block) {
			listener.exitCode_block(this);
		}
	}
	// @Override
	public accept<Result>(visitor: lolcodeVisitor<Result>): Result {
		if (visitor.visitCode_block) {
			return visitor.visitCode_block(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public loop(): LoopContext | undefined {
		return this.tryGetRuleContext(0, LoopContext);
	}
	public declaration(): DeclarationContext | undefined {
		return this.tryGetRuleContext(0, DeclarationContext);
	}
	public comment(): CommentContext | undefined {
		return this.tryGetRuleContext(0, CommentContext);
	}
	public print_block(): Print_blockContext | undefined {
		return this.tryGetRuleContext(0, Print_blockContext);
	}
	public if_block(): If_blockContext | undefined {
		return this.tryGetRuleContext(0, If_blockContext);
	}
	public input_block(): Input_blockContext | undefined {
		return this.tryGetRuleContext(0, Input_blockContext);
	}
	public func_decl(): Func_declContext | undefined {
		return this.tryGetRuleContext(0, Func_declContext);
	}
	public assignment(): AssignmentContext | undefined {
		return this.tryGetRuleContext(0, AssignmentContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return lolcodeParser.RULE_statement; }
	// @Override
	public enterRule(listener: lolcodeListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: lolcodeListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: lolcodeVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LoopContext extends ParserRuleContext {
	public LABEL(): TerminalNode[];
	public LABEL(i: number): TerminalNode;
	public LABEL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(lolcodeParser.LABEL);
		} else {
			return this.getToken(lolcodeParser.LABEL, i);
		}
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public code_block(): Code_blockContext {
		return this.getRuleContext(0, Code_blockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return lolcodeParser.RULE_loop; }
	// @Override
	public enterRule(listener: lolcodeListener): void {
		if (listener.enterLoop) {
			listener.enterLoop(this);
		}
	}
	// @Override
	public exitRule(listener: lolcodeListener): void {
		if (listener.exitLoop) {
			listener.exitLoop(this);
		}
	}
	// @Override
	public accept<Result>(visitor: lolcodeVisitor<Result>): Result {
		if (visitor.visitLoop) {
			return visitor.visitLoop(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclarationContext extends ParserRuleContext {
	public LABEL(): TerminalNode { return this.getToken(lolcodeParser.LABEL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return lolcodeParser.RULE_declaration; }
	// @Override
	public enterRule(listener: lolcodeListener): void {
		if (listener.enterDeclaration) {
			listener.enterDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: lolcodeListener): void {
		if (listener.exitDeclaration) {
			listener.exitDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: lolcodeVisitor<Result>): Result {
		if (visitor.visitDeclaration) {
			return visitor.visitDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CommentContext extends ParserRuleContext {
	public STRING(): TerminalNode { return this.getToken(lolcodeParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return lolcodeParser.RULE_comment; }
	// @Override
	public enterRule(listener: lolcodeListener): void {
		if (listener.enterComment) {
			listener.enterComment(this);
		}
	}
	// @Override
	public exitRule(listener: lolcodeListener): void {
		if (listener.exitComment) {
			listener.exitComment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: lolcodeVisitor<Result>): Result {
		if (visitor.visitComment) {
			return visitor.visitComment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Print_blockContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return lolcodeParser.RULE_print_block; }
	// @Override
	public enterRule(listener: lolcodeListener): void {
		if (listener.enterPrint_block) {
			listener.enterPrint_block(this);
		}
	}
	// @Override
	public exitRule(listener: lolcodeListener): void {
		if (listener.exitPrint_block) {
			listener.exitPrint_block(this);
		}
	}
	// @Override
	public accept<Result>(visitor: lolcodeVisitor<Result>): Result {
		if (visitor.visitPrint_block) {
			return visitor.visitPrint_block(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class If_blockContext extends ParserRuleContext {
	public code_block(): Code_blockContext {
		return this.getRuleContext(0, Code_blockContext);
	}
	public else_if_block(): Else_if_blockContext | undefined {
		return this.tryGetRuleContext(0, Else_if_blockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return lolcodeParser.RULE_if_block; }
	// @Override
	public enterRule(listener: lolcodeListener): void {
		if (listener.enterIf_block) {
			listener.enterIf_block(this);
		}
	}
	// @Override
	public exitRule(listener: lolcodeListener): void {
		if (listener.exitIf_block) {
			listener.exitIf_block(this);
		}
	}
	// @Override
	public accept<Result>(visitor: lolcodeVisitor<Result>): Result {
		if (visitor.visitIf_block) {
			return visitor.visitIf_block(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Else_if_blockContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public code_block(): Code_blockContext {
		return this.getRuleContext(0, Code_blockContext);
	}
	public else_if_block(): Else_if_blockContext | undefined {
		return this.tryGetRuleContext(0, Else_if_blockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return lolcodeParser.RULE_else_if_block; }
	// @Override
	public enterRule(listener: lolcodeListener): void {
		if (listener.enterElse_if_block) {
			listener.enterElse_if_block(this);
		}
	}
	// @Override
	public exitRule(listener: lolcodeListener): void {
		if (listener.exitElse_if_block) {
			listener.exitElse_if_block(this);
		}
	}
	// @Override
	public accept<Result>(visitor: lolcodeVisitor<Result>): Result {
		if (visitor.visitElse_if_block) {
			return visitor.visitElse_if_block(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Input_blockContext extends ParserRuleContext {
	public LABEL(): TerminalNode { return this.getToken(lolcodeParser.LABEL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return lolcodeParser.RULE_input_block; }
	// @Override
	public enterRule(listener: lolcodeListener): void {
		if (listener.enterInput_block) {
			listener.enterInput_block(this);
		}
	}
	// @Override
	public exitRule(listener: lolcodeListener): void {
		if (listener.exitInput_block) {
			listener.exitInput_block(this);
		}
	}
	// @Override
	public accept<Result>(visitor: lolcodeVisitor<Result>): Result {
		if (visitor.visitInput_block) {
			return visitor.visitInput_block(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Func_declContext extends ParserRuleContext {
	public LABEL(): TerminalNode[];
	public LABEL(i: number): TerminalNode;
	public LABEL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(lolcodeParser.LABEL);
		} else {
			return this.getToken(lolcodeParser.LABEL, i);
		}
	}
	public code_block(): Code_blockContext {
		return this.getRuleContext(0, Code_blockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return lolcodeParser.RULE_func_decl; }
	// @Override
	public enterRule(listener: lolcodeListener): void {
		if (listener.enterFunc_decl) {
			listener.enterFunc_decl(this);
		}
	}
	// @Override
	public exitRule(listener: lolcodeListener): void {
		if (listener.exitFunc_decl) {
			listener.exitFunc_decl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: lolcodeVisitor<Result>): Result {
		if (visitor.visitFunc_decl) {
			return visitor.visitFunc_decl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignmentContext extends ParserRuleContext {
	public LABEL(): TerminalNode { return this.getToken(lolcodeParser.LABEL, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return lolcodeParser.RULE_assignment; }
	// @Override
	public enterRule(listener: lolcodeListener): void {
		if (listener.enterAssignment) {
			listener.enterAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: lolcodeListener): void {
		if (listener.exitAssignment) {
			listener.exitAssignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: lolcodeVisitor<Result>): Result {
		if (visitor.visitAssignment) {
			return visitor.visitAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public equals(): EqualsContext | undefined {
		return this.tryGetRuleContext(0, EqualsContext);
	}
	public both(): BothContext | undefined {
		return this.tryGetRuleContext(0, BothContext);
	}
	public not_equals(): Not_equalsContext | undefined {
		return this.tryGetRuleContext(0, Not_equalsContext);
	}
	public greater(): GreaterContext | undefined {
		return this.tryGetRuleContext(0, GreaterContext);
	}
	public less(): LessContext | undefined {
		return this.tryGetRuleContext(0, LessContext);
	}
	public add(): AddContext | undefined {
		return this.tryGetRuleContext(0, AddContext);
	}
	public sub(): SubContext | undefined {
		return this.tryGetRuleContext(0, SubContext);
	}
	public mul(): MulContext | undefined {
		return this.tryGetRuleContext(0, MulContext);
	}
	public div(): DivContext | undefined {
		return this.tryGetRuleContext(0, DivContext);
	}
	public mod(): ModContext | undefined {
		return this.tryGetRuleContext(0, ModContext);
	}
	public cast(): CastContext | undefined {
		return this.tryGetRuleContext(0, CastContext);
	}
	public either(): EitherContext | undefined {
		return this.tryGetRuleContext(0, EitherContext);
	}
	public all(): AllContext | undefined {
		return this.tryGetRuleContext(0, AllContext);
	}
	public any(): AnyContext | undefined {
		return this.tryGetRuleContext(0, AnyContext);
	}
	public not(): NotContext | undefined {
		return this.tryGetRuleContext(0, NotContext);
	}
	public func(): FuncContext | undefined {
		return this.tryGetRuleContext(0, FuncContext);
	}
	public LABEL(): TerminalNode | undefined { return this.tryGetToken(lolcodeParser.LABEL, 0); }
	public ATOM(): TerminalNode | undefined { return this.tryGetToken(lolcodeParser.ATOM, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return lolcodeParser.RULE_expression; }
	// @Override
	public enterRule(listener: lolcodeListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: lolcodeListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: lolcodeVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EqualsContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return lolcodeParser.RULE_equals; }
	// @Override
	public enterRule(listener: lolcodeListener): void {
		if (listener.enterEquals) {
			listener.enterEquals(this);
		}
	}
	// @Override
	public exitRule(listener: lolcodeListener): void {
		if (listener.exitEquals) {
			listener.exitEquals(this);
		}
	}
	// @Override
	public accept<Result>(visitor: lolcodeVisitor<Result>): Result {
		if (visitor.visitEquals) {
			return visitor.visitEquals(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Not_equalsContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return lolcodeParser.RULE_not_equals; }
	// @Override
	public enterRule(listener: lolcodeListener): void {
		if (listener.enterNot_equals) {
			listener.enterNot_equals(this);
		}
	}
	// @Override
	public exitRule(listener: lolcodeListener): void {
		if (listener.exitNot_equals) {
			listener.exitNot_equals(this);
		}
	}
	// @Override
	public accept<Result>(visitor: lolcodeVisitor<Result>): Result {
		if (visitor.visitNot_equals) {
			return visitor.visitNot_equals(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BothContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return lolcodeParser.RULE_both; }
	// @Override
	public enterRule(listener: lolcodeListener): void {
		if (listener.enterBoth) {
			listener.enterBoth(this);
		}
	}
	// @Override
	public exitRule(listener: lolcodeListener): void {
		if (listener.exitBoth) {
			listener.exitBoth(this);
		}
	}
	// @Override
	public accept<Result>(visitor: lolcodeVisitor<Result>): Result {
		if (visitor.visitBoth) {
			return visitor.visitBoth(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EitherContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return lolcodeParser.RULE_either; }
	// @Override
	public enterRule(listener: lolcodeListener): void {
		if (listener.enterEither) {
			listener.enterEither(this);
		}
	}
	// @Override
	public exitRule(listener: lolcodeListener): void {
		if (listener.exitEither) {
			listener.exitEither(this);
		}
	}
	// @Override
	public accept<Result>(visitor: lolcodeVisitor<Result>): Result {
		if (visitor.visitEither) {
			return visitor.visitEither(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GreaterContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return lolcodeParser.RULE_greater; }
	// @Override
	public enterRule(listener: lolcodeListener): void {
		if (listener.enterGreater) {
			listener.enterGreater(this);
		}
	}
	// @Override
	public exitRule(listener: lolcodeListener): void {
		if (listener.exitGreater) {
			listener.exitGreater(this);
		}
	}
	// @Override
	public accept<Result>(visitor: lolcodeVisitor<Result>): Result {
		if (visitor.visitGreater) {
			return visitor.visitGreater(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LessContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return lolcodeParser.RULE_less; }
	// @Override
	public enterRule(listener: lolcodeListener): void {
		if (listener.enterLess) {
			listener.enterLess(this);
		}
	}
	// @Override
	public exitRule(listener: lolcodeListener): void {
		if (listener.exitLess) {
			listener.exitLess(this);
		}
	}
	// @Override
	public accept<Result>(visitor: lolcodeVisitor<Result>): Result {
		if (visitor.visitLess) {
			return visitor.visitLess(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AddContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return lolcodeParser.RULE_add; }
	// @Override
	public enterRule(listener: lolcodeListener): void {
		if (listener.enterAdd) {
			listener.enterAdd(this);
		}
	}
	// @Override
	public exitRule(listener: lolcodeListener): void {
		if (listener.exitAdd) {
			listener.exitAdd(this);
		}
	}
	// @Override
	public accept<Result>(visitor: lolcodeVisitor<Result>): Result {
		if (visitor.visitAdd) {
			return visitor.visitAdd(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SubContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return lolcodeParser.RULE_sub; }
	// @Override
	public enterRule(listener: lolcodeListener): void {
		if (listener.enterSub) {
			listener.enterSub(this);
		}
	}
	// @Override
	public exitRule(listener: lolcodeListener): void {
		if (listener.exitSub) {
			listener.exitSub(this);
		}
	}
	// @Override
	public accept<Result>(visitor: lolcodeVisitor<Result>): Result {
		if (visitor.visitSub) {
			return visitor.visitSub(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MulContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return lolcodeParser.RULE_mul; }
	// @Override
	public enterRule(listener: lolcodeListener): void {
		if (listener.enterMul) {
			listener.enterMul(this);
		}
	}
	// @Override
	public exitRule(listener: lolcodeListener): void {
		if (listener.exitMul) {
			listener.exitMul(this);
		}
	}
	// @Override
	public accept<Result>(visitor: lolcodeVisitor<Result>): Result {
		if (visitor.visitMul) {
			return visitor.visitMul(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DivContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return lolcodeParser.RULE_div; }
	// @Override
	public enterRule(listener: lolcodeListener): void {
		if (listener.enterDiv) {
			listener.enterDiv(this);
		}
	}
	// @Override
	public exitRule(listener: lolcodeListener): void {
		if (listener.exitDiv) {
			listener.exitDiv(this);
		}
	}
	// @Override
	public accept<Result>(visitor: lolcodeVisitor<Result>): Result {
		if (visitor.visitDiv) {
			return visitor.visitDiv(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return lolcodeParser.RULE_mod; }
	// @Override
	public enterRule(listener: lolcodeListener): void {
		if (listener.enterMod) {
			listener.enterMod(this);
		}
	}
	// @Override
	public exitRule(listener: lolcodeListener): void {
		if (listener.exitMod) {
			listener.exitMod(this);
		}
	}
	// @Override
	public accept<Result>(visitor: lolcodeVisitor<Result>): Result {
		if (visitor.visitMod) {
			return visitor.visitMod(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CastContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return lolcodeParser.RULE_cast; }
	// @Override
	public enterRule(listener: lolcodeListener): void {
		if (listener.enterCast) {
			listener.enterCast(this);
		}
	}
	// @Override
	public exitRule(listener: lolcodeListener): void {
		if (listener.exitCast) {
			listener.exitCast(this);
		}
	}
	// @Override
	public accept<Result>(visitor: lolcodeVisitor<Result>): Result {
		if (visitor.visitCast) {
			return visitor.visitCast(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AllContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return lolcodeParser.RULE_all; }
	// @Override
	public enterRule(listener: lolcodeListener): void {
		if (listener.enterAll) {
			listener.enterAll(this);
		}
	}
	// @Override
	public exitRule(listener: lolcodeListener): void {
		if (listener.exitAll) {
			listener.exitAll(this);
		}
	}
	// @Override
	public accept<Result>(visitor: lolcodeVisitor<Result>): Result {
		if (visitor.visitAll) {
			return visitor.visitAll(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnyContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return lolcodeParser.RULE_any; }
	// @Override
	public enterRule(listener: lolcodeListener): void {
		if (listener.enterAny) {
			listener.enterAny(this);
		}
	}
	// @Override
	public exitRule(listener: lolcodeListener): void {
		if (listener.exitAny) {
			listener.exitAny(this);
		}
	}
	// @Override
	public accept<Result>(visitor: lolcodeVisitor<Result>): Result {
		if (visitor.visitAny) {
			return visitor.visitAny(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NotContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return lolcodeParser.RULE_not; }
	// @Override
	public enterRule(listener: lolcodeListener): void {
		if (listener.enterNot) {
			listener.enterNot(this);
		}
	}
	// @Override
	public exitRule(listener: lolcodeListener): void {
		if (listener.exitNot) {
			listener.exitNot(this);
		}
	}
	// @Override
	public accept<Result>(visitor: lolcodeVisitor<Result>): Result {
		if (visitor.visitNot) {
			return visitor.visitNot(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FuncContext extends ParserRuleContext {
	public LABEL(): TerminalNode { return this.getToken(lolcodeParser.LABEL, 0); }
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
	public get ruleIndex(): number { return lolcodeParser.RULE_func; }
	// @Override
	public enterRule(listener: lolcodeListener): void {
		if (listener.enterFunc) {
			listener.enterFunc(this);
		}
	}
	// @Override
	public exitRule(listener: lolcodeListener): void {
		if (listener.exitFunc) {
			listener.exitFunc(this);
		}
	}
	// @Override
	public accept<Result>(visitor: lolcodeVisitor<Result>): Result {
		if (visitor.visitFunc) {
			return visitor.visitFunc(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


