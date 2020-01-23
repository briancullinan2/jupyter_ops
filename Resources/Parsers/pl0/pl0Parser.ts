// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/pl0/pl0.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { pl0Listener } from "./pl0Listener";

export class pl0Parser extends Parser {
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
	public static readonly WRITE = 19;
	public static readonly WHILE = 20;
	public static readonly DO = 21;
	public static readonly IF = 22;
	public static readonly THEN = 23;
	public static readonly ODD = 24;
	public static readonly BEGIN = 25;
	public static readonly END = 26;
	public static readonly CALL = 27;
	public static readonly CONST = 28;
	public static readonly VAR = 29;
	public static readonly PROCEDURE = 30;
	public static readonly STRING = 31;
	public static readonly NUMBER = 32;
	public static readonly WS = 33;
	public static readonly RULE_program = 0;
	public static readonly RULE_block = 1;
	public static readonly RULE_consts = 2;
	public static readonly RULE_vars = 3;
	public static readonly RULE_procedure = 4;
	public static readonly RULE_statement = 5;
	public static readonly RULE_assignstmt = 6;
	public static readonly RULE_callstmt = 7;
	public static readonly RULE_writestmt = 8;
	public static readonly RULE_qstmt = 9;
	public static readonly RULE_bangstmt = 10;
	public static readonly RULE_beginstmt = 11;
	public static readonly RULE_ifstmt = 12;
	public static readonly RULE_whilestmt = 13;
	public static readonly RULE_condition = 14;
	public static readonly RULE_expression = 15;
	public static readonly RULE_term = 16;
	public static readonly RULE_factor = 17;
	public static readonly RULE_ident = 18;
	public static readonly RULE_number = 19;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "block", "consts", "vars", "procedure", "statement", "assignstmt", 
		"callstmt", "writestmt", "qstmt", "bangstmt", "beginstmt", "ifstmt", "whilestmt", 
		"condition", "expression", "term", "factor", "ident", "number",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'.'", "'='", "','", "';'", "':='", "'?'", "'!'", "'#'", "'<'", 
		"'<='", "'>'", "'>='", "'+'", "'-'", "'*'", "'/'", "'('", "')'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, "WRITE", "WHILE", 
		"DO", "IF", "THEN", "ODD", "BEGIN", "END", "CALL", "CONST", "VAR", "PROCEDURE", 
		"STRING", "NUMBER", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(pl0Parser._LITERAL_NAMES, pl0Parser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return pl0Parser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "pl0.g4"; }

	// @Override
	public get ruleNames(): string[] { return pl0Parser.ruleNames; }

	// @Override
	public get serializedATN(): string { return pl0Parser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(pl0Parser._ATN, this);
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, pl0Parser.RULE_program);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 40;
			this.block();
			this.state = 41;
			this.match(pl0Parser.T__0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 2, pl0Parser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 44;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pl0Parser.CONST) {
				{
				this.state = 43;
				this.consts();
				}
			}

			this.state = 47;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pl0Parser.VAR) {
				{
				this.state = 46;
				this.vars();
				}
			}

			this.state = 52;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === pl0Parser.PROCEDURE) {
				{
				{
				this.state = 49;
				this.procedure();
				}
				}
				this.state = 54;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 55;
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
	public consts(): ConstsContext {
		let _localctx: ConstsContext = new ConstsContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, pl0Parser.RULE_consts);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 57;
			this.match(pl0Parser.CONST);
			this.state = 58;
			this.ident();
			this.state = 59;
			this.match(pl0Parser.T__1);
			this.state = 60;
			this.number();
			this.state = 68;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === pl0Parser.T__2) {
				{
				{
				this.state = 61;
				this.match(pl0Parser.T__2);
				this.state = 62;
				this.ident();
				this.state = 63;
				this.match(pl0Parser.T__1);
				this.state = 64;
				this.number();
				}
				}
				this.state = 70;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 71;
			this.match(pl0Parser.T__3);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public vars(): VarsContext {
		let _localctx: VarsContext = new VarsContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, pl0Parser.RULE_vars);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 73;
			this.match(pl0Parser.VAR);
			this.state = 74;
			this.ident();
			this.state = 79;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === pl0Parser.T__2) {
				{
				{
				this.state = 75;
				this.match(pl0Parser.T__2);
				this.state = 76;
				this.ident();
				}
				}
				this.state = 81;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 82;
			this.match(pl0Parser.T__3);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public procedure(): ProcedureContext {
		let _localctx: ProcedureContext = new ProcedureContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, pl0Parser.RULE_procedure);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 84;
			this.match(pl0Parser.PROCEDURE);
			this.state = 85;
			this.ident();
			this.state = 86;
			this.match(pl0Parser.T__3);
			this.state = 87;
			this.block();
			this.state = 88;
			this.match(pl0Parser.T__3);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 10, pl0Parser.RULE_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 98;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pl0Parser.STRING:
				{
				this.state = 90;
				this.assignstmt();
				}
				break;
			case pl0Parser.CALL:
				{
				this.state = 91;
				this.callstmt();
				}
				break;
			case pl0Parser.WRITE:
				{
				this.state = 92;
				this.writestmt();
				}
				break;
			case pl0Parser.T__5:
				{
				this.state = 93;
				this.qstmt();
				}
				break;
			case pl0Parser.T__6:
				{
				this.state = 94;
				this.bangstmt();
				}
				break;
			case pl0Parser.BEGIN:
				{
				this.state = 95;
				this.beginstmt();
				}
				break;
			case pl0Parser.IF:
				{
				this.state = 96;
				this.ifstmt();
				}
				break;
			case pl0Parser.WHILE:
				{
				this.state = 97;
				this.whilestmt();
				}
				break;
			case pl0Parser.T__0:
			case pl0Parser.T__3:
			case pl0Parser.END:
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
	public assignstmt(): AssignstmtContext {
		let _localctx: AssignstmtContext = new AssignstmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, pl0Parser.RULE_assignstmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 100;
			this.ident();
			this.state = 101;
			this.match(pl0Parser.T__4);
			this.state = 102;
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
		this.enterRule(_localctx, 14, pl0Parser.RULE_callstmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 104;
			this.match(pl0Parser.CALL);
			this.state = 105;
			this.ident();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public writestmt(): WritestmtContext {
		let _localctx: WritestmtContext = new WritestmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, pl0Parser.RULE_writestmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 107;
			this.match(pl0Parser.WRITE);
			this.state = 108;
			this.ident();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public qstmt(): QstmtContext {
		let _localctx: QstmtContext = new QstmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, pl0Parser.RULE_qstmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 110;
			this.match(pl0Parser.T__5);
			this.state = 111;
			this.ident();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public bangstmt(): BangstmtContext {
		let _localctx: BangstmtContext = new BangstmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, pl0Parser.RULE_bangstmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 113;
			this.match(pl0Parser.T__6);
			this.state = 114;
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
	public beginstmt(): BeginstmtContext {
		let _localctx: BeginstmtContext = new BeginstmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, pl0Parser.RULE_beginstmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 116;
			this.match(pl0Parser.BEGIN);
			this.state = 117;
			this.statement();
			this.state = 122;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === pl0Parser.T__3) {
				{
				{
				this.state = 118;
				this.match(pl0Parser.T__3);
				this.state = 119;
				this.statement();
				}
				}
				this.state = 124;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 125;
			this.match(pl0Parser.END);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 24, pl0Parser.RULE_ifstmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 127;
			this.match(pl0Parser.IF);
			this.state = 128;
			this.condition();
			this.state = 129;
			this.match(pl0Parser.THEN);
			this.state = 130;
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
		this.enterRule(_localctx, 26, pl0Parser.RULE_whilestmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 132;
			this.match(pl0Parser.WHILE);
			this.state = 133;
			this.condition();
			this.state = 134;
			this.match(pl0Parser.DO);
			this.state = 135;
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
	public condition(): ConditionContext {
		let _localctx: ConditionContext = new ConditionContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, pl0Parser.RULE_condition);
		let _la: number;
		try {
			this.state = 143;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pl0Parser.ODD:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 137;
				this.match(pl0Parser.ODD);
				this.state = 138;
				this.expression();
				}
				break;
			case pl0Parser.T__12:
			case pl0Parser.T__13:
			case pl0Parser.T__16:
			case pl0Parser.STRING:
			case pl0Parser.NUMBER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 139;
				this.expression();
				this.state = 140;
				_la = this._input.LA(1);
				if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << pl0Parser.T__1) | (1 << pl0Parser.T__7) | (1 << pl0Parser.T__8) | (1 << pl0Parser.T__9) | (1 << pl0Parser.T__10) | (1 << pl0Parser.T__11))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 141;
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
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, pl0Parser.RULE_expression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 146;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === pl0Parser.T__12 || _la === pl0Parser.T__13) {
				{
				this.state = 145;
				_la = this._input.LA(1);
				if (!(_la === pl0Parser.T__12 || _la === pl0Parser.T__13)) {
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

			this.state = 148;
			this.term();
			this.state = 153;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === pl0Parser.T__12 || _la === pl0Parser.T__13) {
				{
				{
				this.state = 149;
				_la = this._input.LA(1);
				if (!(_la === pl0Parser.T__12 || _la === pl0Parser.T__13)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 150;
				this.term();
				}
				}
				this.state = 155;
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
	public term(): TermContext {
		let _localctx: TermContext = new TermContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, pl0Parser.RULE_term);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 156;
			this.factor();
			this.state = 161;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === pl0Parser.T__14 || _la === pl0Parser.T__15) {
				{
				{
				this.state = 157;
				_la = this._input.LA(1);
				if (!(_la === pl0Parser.T__14 || _la === pl0Parser.T__15)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 158;
				this.factor();
				}
				}
				this.state = 163;
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
	public factor(): FactorContext {
		let _localctx: FactorContext = new FactorContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, pl0Parser.RULE_factor);
		try {
			this.state = 170;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pl0Parser.STRING:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 164;
				this.ident();
				}
				break;
			case pl0Parser.NUMBER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 165;
				this.number();
				}
				break;
			case pl0Parser.T__16:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 166;
				this.match(pl0Parser.T__16);
				this.state = 167;
				this.expression();
				this.state = 168;
				this.match(pl0Parser.T__17);
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
	public ident(): IdentContext {
		let _localctx: IdentContext = new IdentContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, pl0Parser.RULE_ident);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 172;
			this.match(pl0Parser.STRING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 38, pl0Parser.RULE_number);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 174;
			this.match(pl0Parser.NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03#\xB3\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x03\x02\x03\x02\x03\x02\x03\x03" +
		"\x05\x03/\n\x03\x03\x03\x05\x032\n\x03\x03\x03\x07\x035\n\x03\f\x03\x0E" +
		"\x038\v\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x07\x04E\n\x04\f\x04\x0E\x04H\v\x04\x03\x04" +
		"\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x07\x05P\n\x05\f\x05\x0E\x05" +
		"S\v\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07" +
		"e\n\x07\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03" +
		"\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x07\r{\n\r\f" +
		"\r\x0E\r~\v\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03" +
		"\x10\x03\x10\x05\x10\x92\n\x10\x03\x11\x05\x11\x95\n\x11\x03\x11\x03\x11" +
		"\x03\x11\x07\x11\x9A\n\x11\f\x11\x0E\x11\x9D\v\x11\x03\x12\x03\x12\x03" +
		"\x12\x07\x12\xA2\n\x12\f\x12\x0E\x12\xA5\v\x12\x03\x13\x03\x13\x03\x13" +
		"\x03\x13\x03\x13\x03\x13\x05\x13\xAD\n\x13\x03\x14\x03\x14\x03\x15\x03" +
		"\x15\x03\x15\x02\x02\x02\x16\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02" +
		"\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02" +
		" \x02\"\x02$\x02&\x02(\x02\x02\x05\x04\x02\x04\x04\n\x0E\x03\x02\x0F\x10" +
		"\x03\x02\x11\x12\x02\xB2\x02*\x03\x02\x02\x02\x04.\x03\x02\x02\x02\x06" +
		";\x03\x02\x02\x02\bK\x03\x02\x02\x02\nV\x03\x02\x02\x02\fd\x03\x02\x02" +
		"\x02\x0Ef\x03\x02\x02\x02\x10j\x03\x02\x02\x02\x12m\x03\x02\x02\x02\x14" +
		"p\x03\x02\x02\x02\x16s\x03\x02\x02\x02\x18v\x03\x02\x02\x02\x1A\x81\x03" +
		"\x02\x02\x02\x1C\x86\x03\x02\x02\x02\x1E\x91\x03\x02\x02\x02 \x94\x03" +
		"\x02\x02\x02\"\x9E\x03\x02\x02\x02$\xAC\x03\x02\x02\x02&\xAE\x03\x02\x02" +
		"\x02(\xB0\x03\x02\x02\x02*+\x05\x04\x03\x02+,\x07\x03\x02\x02,\x03\x03" +
		"\x02\x02\x02-/\x05\x06\x04\x02.-\x03\x02\x02\x02./\x03\x02\x02\x02/1\x03" +
		"\x02\x02\x0202\x05\b\x05\x0210\x03\x02\x02\x0212\x03\x02\x02\x0226\x03" +
		"\x02\x02\x0235\x05\n\x06\x0243\x03\x02\x02\x0258\x03\x02\x02\x0264\x03" +
		"\x02\x02\x0267\x03\x02\x02\x0279\x03\x02\x02\x0286\x03\x02\x02\x029:\x05" +
		"\f\x07\x02:\x05\x03\x02\x02\x02;<\x07\x1E\x02\x02<=\x05&\x14\x02=>\x07" +
		"\x04\x02\x02>F\x05(\x15\x02?@\x07\x05\x02\x02@A\x05&\x14\x02AB\x07\x04" +
		"\x02\x02BC\x05(\x15\x02CE\x03\x02\x02\x02D?\x03\x02\x02\x02EH\x03\x02" +
		"\x02\x02FD\x03\x02\x02\x02FG\x03\x02\x02\x02GI\x03\x02\x02\x02HF\x03\x02" +
		"\x02\x02IJ\x07\x06\x02\x02J\x07\x03\x02\x02\x02KL\x07\x1F\x02\x02LQ\x05" +
		"&\x14\x02MN\x07\x05\x02\x02NP\x05&\x14\x02OM\x03\x02\x02\x02PS\x03\x02" +
		"\x02\x02QO\x03\x02\x02\x02QR\x03\x02\x02\x02RT\x03\x02\x02\x02SQ\x03\x02" +
		"\x02\x02TU\x07\x06\x02\x02U\t\x03\x02\x02\x02VW\x07 \x02\x02WX\x05&\x14" +
		"\x02XY\x07\x06\x02\x02YZ\x05\x04\x03\x02Z[\x07\x06\x02\x02[\v\x03\x02" +
		"\x02\x02\\e\x05\x0E\b\x02]e\x05\x10\t\x02^e\x05\x12\n\x02_e\x05\x14\v" +
		"\x02`e\x05\x16\f\x02ae\x05\x18\r\x02be\x05\x1A\x0E\x02ce\x05\x1C\x0F\x02" +
		"d\\\x03\x02\x02\x02d]\x03\x02\x02\x02d^\x03\x02\x02\x02d_\x03\x02\x02" +
		"\x02d`\x03\x02\x02\x02da\x03\x02\x02\x02db\x03\x02\x02\x02dc\x03\x02\x02" +
		"\x02de\x03\x02\x02\x02e\r\x03\x02\x02\x02fg\x05&\x14\x02gh\x07\x07\x02" +
		"\x02hi\x05 \x11\x02i\x0F\x03\x02\x02\x02jk\x07\x1D\x02\x02kl\x05&\x14" +
		"\x02l\x11\x03\x02\x02\x02mn\x07\x15\x02\x02no\x05&\x14\x02o\x13\x03\x02" +
		"\x02\x02pq\x07\b\x02\x02qr\x05&\x14\x02r\x15\x03\x02\x02\x02st\x07\t\x02" +
		"\x02tu\x05 \x11\x02u\x17\x03\x02\x02\x02vw\x07\x1B\x02\x02w|\x05\f\x07" +
		"\x02xy\x07\x06\x02\x02y{\x05\f\x07\x02zx\x03\x02\x02\x02{~\x03\x02\x02" +
		"\x02|z\x03\x02\x02\x02|}\x03\x02\x02\x02}\x7F\x03\x02\x02\x02~|\x03\x02" +
		"\x02\x02\x7F\x80\x07\x1C\x02\x02\x80\x19\x03\x02\x02\x02\x81\x82\x07\x18" +
		"\x02\x02\x82\x83\x05\x1E\x10\x02\x83\x84\x07\x19\x02\x02\x84\x85\x05\f" +
		"\x07\x02\x85\x1B\x03\x02\x02\x02\x86\x87\x07\x16\x02\x02\x87\x88\x05\x1E" +
		"\x10\x02\x88\x89\x07\x17\x02\x02\x89\x8A\x05\f\x07\x02\x8A\x1D\x03\x02" +
		"\x02\x02\x8B\x8C\x07\x1A\x02\x02\x8C\x92\x05 \x11\x02\x8D\x8E\x05 \x11" +
		"\x02\x8E\x8F\t\x02\x02\x02\x8F\x90\x05 \x11\x02\x90\x92\x03\x02\x02\x02" +
		"\x91\x8B\x03\x02\x02\x02\x91\x8D\x03\x02\x02\x02\x92\x1F\x03\x02\x02\x02" +
		"\x93\x95\t\x03\x02\x02\x94\x93\x03\x02\x02\x02\x94\x95\x03\x02\x02\x02" +
		"\x95\x96\x03\x02\x02\x02\x96\x9B\x05\"\x12\x02\x97\x98\t\x03\x02\x02\x98" +
		"\x9A\x05\"\x12\x02\x99\x97\x03\x02\x02\x02\x9A\x9D\x03\x02\x02\x02\x9B" +
		"\x99\x03\x02\x02\x02\x9B\x9C\x03\x02\x02\x02\x9C!\x03\x02\x02\x02\x9D" +
		"\x9B\x03\x02\x02\x02\x9E\xA3\x05$\x13\x02\x9F\xA0\t\x04\x02\x02\xA0\xA2" +
		"\x05$\x13\x02\xA1\x9F\x03\x02\x02\x02\xA2\xA5\x03\x02\x02\x02\xA3\xA1" +
		"\x03\x02\x02\x02\xA3\xA4\x03\x02\x02\x02\xA4#\x03\x02\x02\x02\xA5\xA3" +
		"\x03\x02\x02\x02\xA6\xAD\x05&\x14\x02\xA7\xAD\x05(\x15\x02\xA8\xA9\x07" +
		"\x13\x02\x02\xA9\xAA\x05 \x11\x02\xAA\xAB\x07\x14\x02\x02\xAB\xAD\x03" +
		"\x02\x02\x02\xAC\xA6\x03\x02\x02\x02\xAC\xA7\x03\x02\x02\x02\xAC\xA8\x03" +
		"\x02\x02\x02\xAD%\x03\x02\x02\x02\xAE\xAF\x07!\x02\x02\xAF\'\x03\x02\x02" +
		"\x02\xB0\xB1\x07\"\x02\x02\xB1)\x03\x02\x02\x02\x0E.16FQd|\x91\x94\x9B" +
		"\xA3\xAC";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!pl0Parser.__ATN) {
			pl0Parser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(pl0Parser._serializedATN));
		}

		return pl0Parser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pl0Parser.RULE_program; }
	// @Override
	public enterRule(listener: pl0Listener): void {
		if (listener.enterProgram) {
			listener.enterProgram(this);
		}
	}
	// @Override
	public exitRule(listener: pl0Listener): void {
		if (listener.exitProgram) {
			listener.exitProgram(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public consts(): ConstsContext | undefined {
		return this.tryGetRuleContext(0, ConstsContext);
	}
	public vars(): VarsContext | undefined {
		return this.tryGetRuleContext(0, VarsContext);
	}
	public procedure(): ProcedureContext[];
	public procedure(i: number): ProcedureContext;
	public procedure(i?: number): ProcedureContext | ProcedureContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ProcedureContext);
		} else {
			return this.getRuleContext(i, ProcedureContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pl0Parser.RULE_block; }
	// @Override
	public enterRule(listener: pl0Listener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	// @Override
	public exitRule(listener: pl0Listener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
}


export class ConstsContext extends ParserRuleContext {
	public CONST(): TerminalNode { return this.getToken(pl0Parser.CONST, 0); }
	public ident(): IdentContext[];
	public ident(i: number): IdentContext;
	public ident(i?: number): IdentContext | IdentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentContext);
		} else {
			return this.getRuleContext(i, IdentContext);
		}
	}
	public number(): NumberContext[];
	public number(i: number): NumberContext;
	public number(i?: number): NumberContext | NumberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NumberContext);
		} else {
			return this.getRuleContext(i, NumberContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pl0Parser.RULE_consts; }
	// @Override
	public enterRule(listener: pl0Listener): void {
		if (listener.enterConsts) {
			listener.enterConsts(this);
		}
	}
	// @Override
	public exitRule(listener: pl0Listener): void {
		if (listener.exitConsts) {
			listener.exitConsts(this);
		}
	}
}


export class VarsContext extends ParserRuleContext {
	public VAR(): TerminalNode { return this.getToken(pl0Parser.VAR, 0); }
	public ident(): IdentContext[];
	public ident(i: number): IdentContext;
	public ident(i?: number): IdentContext | IdentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentContext);
		} else {
			return this.getRuleContext(i, IdentContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pl0Parser.RULE_vars; }
	// @Override
	public enterRule(listener: pl0Listener): void {
		if (listener.enterVars) {
			listener.enterVars(this);
		}
	}
	// @Override
	public exitRule(listener: pl0Listener): void {
		if (listener.exitVars) {
			listener.exitVars(this);
		}
	}
}


export class ProcedureContext extends ParserRuleContext {
	public PROCEDURE(): TerminalNode { return this.getToken(pl0Parser.PROCEDURE, 0); }
	public ident(): IdentContext {
		return this.getRuleContext(0, IdentContext);
	}
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pl0Parser.RULE_procedure; }
	// @Override
	public enterRule(listener: pl0Listener): void {
		if (listener.enterProcedure) {
			listener.enterProcedure(this);
		}
	}
	// @Override
	public exitRule(listener: pl0Listener): void {
		if (listener.exitProcedure) {
			listener.exitProcedure(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public assignstmt(): AssignstmtContext | undefined {
		return this.tryGetRuleContext(0, AssignstmtContext);
	}
	public callstmt(): CallstmtContext | undefined {
		return this.tryGetRuleContext(0, CallstmtContext);
	}
	public writestmt(): WritestmtContext | undefined {
		return this.tryGetRuleContext(0, WritestmtContext);
	}
	public qstmt(): QstmtContext | undefined {
		return this.tryGetRuleContext(0, QstmtContext);
	}
	public bangstmt(): BangstmtContext | undefined {
		return this.tryGetRuleContext(0, BangstmtContext);
	}
	public beginstmt(): BeginstmtContext | undefined {
		return this.tryGetRuleContext(0, BeginstmtContext);
	}
	public ifstmt(): IfstmtContext | undefined {
		return this.tryGetRuleContext(0, IfstmtContext);
	}
	public whilestmt(): WhilestmtContext | undefined {
		return this.tryGetRuleContext(0, WhilestmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pl0Parser.RULE_statement; }
	// @Override
	public enterRule(listener: pl0Listener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: pl0Listener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
}


export class AssignstmtContext extends ParserRuleContext {
	public ident(): IdentContext {
		return this.getRuleContext(0, IdentContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pl0Parser.RULE_assignstmt; }
	// @Override
	public enterRule(listener: pl0Listener): void {
		if (listener.enterAssignstmt) {
			listener.enterAssignstmt(this);
		}
	}
	// @Override
	public exitRule(listener: pl0Listener): void {
		if (listener.exitAssignstmt) {
			listener.exitAssignstmt(this);
		}
	}
}


export class CallstmtContext extends ParserRuleContext {
	public CALL(): TerminalNode { return this.getToken(pl0Parser.CALL, 0); }
	public ident(): IdentContext {
		return this.getRuleContext(0, IdentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pl0Parser.RULE_callstmt; }
	// @Override
	public enterRule(listener: pl0Listener): void {
		if (listener.enterCallstmt) {
			listener.enterCallstmt(this);
		}
	}
	// @Override
	public exitRule(listener: pl0Listener): void {
		if (listener.exitCallstmt) {
			listener.exitCallstmt(this);
		}
	}
}


export class WritestmtContext extends ParserRuleContext {
	public WRITE(): TerminalNode { return this.getToken(pl0Parser.WRITE, 0); }
	public ident(): IdentContext {
		return this.getRuleContext(0, IdentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pl0Parser.RULE_writestmt; }
	// @Override
	public enterRule(listener: pl0Listener): void {
		if (listener.enterWritestmt) {
			listener.enterWritestmt(this);
		}
	}
	// @Override
	public exitRule(listener: pl0Listener): void {
		if (listener.exitWritestmt) {
			listener.exitWritestmt(this);
		}
	}
}


export class QstmtContext extends ParserRuleContext {
	public ident(): IdentContext {
		return this.getRuleContext(0, IdentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pl0Parser.RULE_qstmt; }
	// @Override
	public enterRule(listener: pl0Listener): void {
		if (listener.enterQstmt) {
			listener.enterQstmt(this);
		}
	}
	// @Override
	public exitRule(listener: pl0Listener): void {
		if (listener.exitQstmt) {
			listener.exitQstmt(this);
		}
	}
}


export class BangstmtContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pl0Parser.RULE_bangstmt; }
	// @Override
	public enterRule(listener: pl0Listener): void {
		if (listener.enterBangstmt) {
			listener.enterBangstmt(this);
		}
	}
	// @Override
	public exitRule(listener: pl0Listener): void {
		if (listener.exitBangstmt) {
			listener.exitBangstmt(this);
		}
	}
}


export class BeginstmtContext extends ParserRuleContext {
	public BEGIN(): TerminalNode { return this.getToken(pl0Parser.BEGIN, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public END(): TerminalNode { return this.getToken(pl0Parser.END, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pl0Parser.RULE_beginstmt; }
	// @Override
	public enterRule(listener: pl0Listener): void {
		if (listener.enterBeginstmt) {
			listener.enterBeginstmt(this);
		}
	}
	// @Override
	public exitRule(listener: pl0Listener): void {
		if (listener.exitBeginstmt) {
			listener.exitBeginstmt(this);
		}
	}
}


export class IfstmtContext extends ParserRuleContext {
	public IF(): TerminalNode { return this.getToken(pl0Parser.IF, 0); }
	public condition(): ConditionContext {
		return this.getRuleContext(0, ConditionContext);
	}
	public THEN(): TerminalNode { return this.getToken(pl0Parser.THEN, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pl0Parser.RULE_ifstmt; }
	// @Override
	public enterRule(listener: pl0Listener): void {
		if (listener.enterIfstmt) {
			listener.enterIfstmt(this);
		}
	}
	// @Override
	public exitRule(listener: pl0Listener): void {
		if (listener.exitIfstmt) {
			listener.exitIfstmt(this);
		}
	}
}


export class WhilestmtContext extends ParserRuleContext {
	public WHILE(): TerminalNode { return this.getToken(pl0Parser.WHILE, 0); }
	public condition(): ConditionContext {
		return this.getRuleContext(0, ConditionContext);
	}
	public DO(): TerminalNode { return this.getToken(pl0Parser.DO, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pl0Parser.RULE_whilestmt; }
	// @Override
	public enterRule(listener: pl0Listener): void {
		if (listener.enterWhilestmt) {
			listener.enterWhilestmt(this);
		}
	}
	// @Override
	public exitRule(listener: pl0Listener): void {
		if (listener.exitWhilestmt) {
			listener.exitWhilestmt(this);
		}
	}
}


export class ConditionContext extends ParserRuleContext {
	public ODD(): TerminalNode | undefined { return this.tryGetToken(pl0Parser.ODD, 0); }
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
	public get ruleIndex(): number { return pl0Parser.RULE_condition; }
	// @Override
	public enterRule(listener: pl0Listener): void {
		if (listener.enterCondition) {
			listener.enterCondition(this);
		}
	}
	// @Override
	public exitRule(listener: pl0Listener): void {
		if (listener.exitCondition) {
			listener.exitCondition(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public term(): TermContext[];
	public term(i: number): TermContext;
	public term(i?: number): TermContext | TermContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TermContext);
		} else {
			return this.getRuleContext(i, TermContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pl0Parser.RULE_expression; }
	// @Override
	public enterRule(listener: pl0Listener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: pl0Listener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pl0Parser.RULE_term; }
	// @Override
	public enterRule(listener: pl0Listener): void {
		if (listener.enterTerm) {
			listener.enterTerm(this);
		}
	}
	// @Override
	public exitRule(listener: pl0Listener): void {
		if (listener.exitTerm) {
			listener.exitTerm(this);
		}
	}
}


export class FactorContext extends ParserRuleContext {
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	public number(): NumberContext | undefined {
		return this.tryGetRuleContext(0, NumberContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pl0Parser.RULE_factor; }
	// @Override
	public enterRule(listener: pl0Listener): void {
		if (listener.enterFactor) {
			listener.enterFactor(this);
		}
	}
	// @Override
	public exitRule(listener: pl0Listener): void {
		if (listener.exitFactor) {
			listener.exitFactor(this);
		}
	}
}


export class IdentContext extends ParserRuleContext {
	public STRING(): TerminalNode { return this.getToken(pl0Parser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pl0Parser.RULE_ident; }
	// @Override
	public enterRule(listener: pl0Listener): void {
		if (listener.enterIdent) {
			listener.enterIdent(this);
		}
	}
	// @Override
	public exitRule(listener: pl0Listener): void {
		if (listener.exitIdent) {
			listener.exitIdent(this);
		}
	}
}


export class NumberContext extends ParserRuleContext {
	public NUMBER(): TerminalNode { return this.getToken(pl0Parser.NUMBER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pl0Parser.RULE_number; }
	// @Override
	public enterRule(listener: pl0Listener): void {
		if (listener.enterNumber) {
			listener.enterNumber(this);
		}
	}
	// @Override
	public exitRule(listener: pl0Listener): void {
		if (listener.exitNumber) {
			listener.exitNumber(this);
		}
	}
}


