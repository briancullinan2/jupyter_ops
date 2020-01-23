// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/tinybasic/tinybasic.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { tinybasicListener } from "./tinybasicListener";
import { tinybasicVisitor } from "./tinybasicVisitor";


export class tinybasicParser extends Parser {
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
	public static readonly STRING = 21;
	public static readonly DIGIT = 22;
	public static readonly VAR = 23;
	public static readonly CR = 24;
	public static readonly WS = 25;
	public static readonly RULE_program = 0;
	public static readonly RULE_line = 1;
	public static readonly RULE_statement = 2;
	public static readonly RULE_exprlist = 3;
	public static readonly RULE_varlist = 4;
	public static readonly RULE_expression = 5;
	public static readonly RULE_term = 6;
	public static readonly RULE_factor = 7;
	public static readonly RULE_vara = 8;
	public static readonly RULE_number = 9;
	public static readonly RULE_relop = 10;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "line", "statement", "exprlist", "varlist", "expression", "term", 
		"factor", "vara", "number", "relop",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'PRINT'", "'IF'", "'THEN'", "'GOTO'", "'INPUT'", "'LET'", 
		"'='", "'GOSUB'", "'RETURN'", "'CLEAR'", "'LIST'", "'RUN'", "'END'", "','", 
		"'+'", "'-'", "'*'", "'/'", "'<'", "'>'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		"STRING", "DIGIT", "VAR", "CR", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(tinybasicParser._LITERAL_NAMES, tinybasicParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return tinybasicParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "tinybasic.g4"; }

	// @Override
	public get ruleNames(): string[] { return tinybasicParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return tinybasicParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(tinybasicParser._ATN, this);
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, tinybasicParser.RULE_program);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 25;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << tinybasicParser.T__0) | (1 << tinybasicParser.T__1) | (1 << tinybasicParser.T__3) | (1 << tinybasicParser.T__4) | (1 << tinybasicParser.T__5) | (1 << tinybasicParser.T__7) | (1 << tinybasicParser.T__8) | (1 << tinybasicParser.T__9) | (1 << tinybasicParser.T__10) | (1 << tinybasicParser.T__11) | (1 << tinybasicParser.T__12) | (1 << tinybasicParser.STRING) | (1 << tinybasicParser.DIGIT) | (1 << tinybasicParser.VAR))) !== 0)) {
				{
				{
				this.state = 22;
				this.line();
				}
				}
				this.state = 27;
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
		this.enterRule(_localctx, 2, tinybasicParser.RULE_line);
		try {
			this.state = 35;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case tinybasicParser.DIGIT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 28;
				this.number();
				this.state = 29;
				this.statement();
				this.state = 30;
				this.match(tinybasicParser.CR);
				}
				break;
			case tinybasicParser.T__0:
			case tinybasicParser.T__1:
			case tinybasicParser.T__3:
			case tinybasicParser.T__4:
			case tinybasicParser.T__5:
			case tinybasicParser.T__7:
			case tinybasicParser.T__8:
			case tinybasicParser.T__9:
			case tinybasicParser.T__10:
			case tinybasicParser.T__11:
			case tinybasicParser.T__12:
			case tinybasicParser.STRING:
			case tinybasicParser.VAR:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 32;
				this.statement();
				this.state = 33;
				this.match(tinybasicParser.CR);
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
		this.enterRule(_localctx, 4, tinybasicParser.RULE_statement);
		let _la: number;
		try {
			this.state = 66;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case tinybasicParser.T__0:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 37;
				this.match(tinybasicParser.T__0);
				this.state = 38;
				this.exprlist();
				}
				break;
			case tinybasicParser.T__1:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 39;
				this.match(tinybasicParser.T__1);
				this.state = 40;
				this.expression();
				this.state = 41;
				this.relop();
				this.state = 42;
				this.expression();
				this.state = 44;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === tinybasicParser.T__2) {
					{
					this.state = 43;
					this.match(tinybasicParser.T__2);
					}
				}

				this.state = 46;
				this.statement();
				}
				break;
			case tinybasicParser.T__3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 48;
				this.match(tinybasicParser.T__3);
				this.state = 49;
				this.number();
				}
				break;
			case tinybasicParser.T__4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 50;
				this.match(tinybasicParser.T__4);
				this.state = 51;
				this.varlist();
				}
				break;
			case tinybasicParser.T__5:
			case tinybasicParser.STRING:
			case tinybasicParser.VAR:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 53;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === tinybasicParser.T__5) {
					{
					this.state = 52;
					this.match(tinybasicParser.T__5);
					}
				}

				this.state = 55;
				this.vara();
				this.state = 56;
				this.match(tinybasicParser.T__6);
				this.state = 57;
				this.expression();
				}
				break;
			case tinybasicParser.T__7:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 59;
				this.match(tinybasicParser.T__7);
				this.state = 60;
				this.expression();
				}
				break;
			case tinybasicParser.T__8:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 61;
				this.match(tinybasicParser.T__8);
				}
				break;
			case tinybasicParser.T__9:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 62;
				this.match(tinybasicParser.T__9);
				}
				break;
			case tinybasicParser.T__10:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 63;
				this.match(tinybasicParser.T__10);
				}
				break;
			case tinybasicParser.T__11:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 64;
				this.match(tinybasicParser.T__11);
				}
				break;
			case tinybasicParser.T__12:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 65;
				this.match(tinybasicParser.T__12);
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
	public exprlist(): ExprlistContext {
		let _localctx: ExprlistContext = new ExprlistContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, tinybasicParser.RULE_exprlist);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 70;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				{
				this.state = 68;
				this.match(tinybasicParser.STRING);
				}
				break;

			case 2:
				{
				this.state = 69;
				this.expression();
				}
				break;
			}
			this.state = 79;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === tinybasicParser.T__13) {
				{
				{
				this.state = 72;
				this.match(tinybasicParser.T__13);
				this.state = 75;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
				case 1:
					{
					this.state = 73;
					this.match(tinybasicParser.STRING);
					}
					break;

				case 2:
					{
					this.state = 74;
					this.expression();
					}
					break;
				}
				}
				}
				this.state = 81;
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
	public varlist(): VarlistContext {
		let _localctx: VarlistContext = new VarlistContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, tinybasicParser.RULE_varlist);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 82;
			this.vara();
			this.state = 87;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === tinybasicParser.T__13) {
				{
				{
				this.state = 83;
				this.match(tinybasicParser.T__13);
				this.state = 84;
				this.vara();
				}
				}
				this.state = 89;
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
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, tinybasicParser.RULE_expression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 91;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === tinybasicParser.T__14 || _la === tinybasicParser.T__15) {
				{
				this.state = 90;
				_la = this._input.LA(1);
				if (!(_la === tinybasicParser.T__14 || _la === tinybasicParser.T__15)) {
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

			this.state = 93;
			this.term();
			this.state = 98;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === tinybasicParser.T__14 || _la === tinybasicParser.T__15) {
				{
				{
				this.state = 94;
				_la = this._input.LA(1);
				if (!(_la === tinybasicParser.T__14 || _la === tinybasicParser.T__15)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 95;
				this.term();
				}
				}
				this.state = 100;
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
		this.enterRule(_localctx, 12, tinybasicParser.RULE_term);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 101;
			this.factor();
			this.state = 106;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === tinybasicParser.T__16 || _la === tinybasicParser.T__17) {
				{
				{
				this.state = 102;
				_la = this._input.LA(1);
				if (!(_la === tinybasicParser.T__16 || _la === tinybasicParser.T__17)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 103;
				this.factor();
				}
				}
				this.state = 108;
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
		this.enterRule(_localctx, 14, tinybasicParser.RULE_factor);
		try {
			this.state = 111;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case tinybasicParser.STRING:
			case tinybasicParser.VAR:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 109;
				this.vara();
				}
				break;
			case tinybasicParser.DIGIT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 110;
				this.number();
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
	public vara(): VaraContext {
		let _localctx: VaraContext = new VaraContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, tinybasicParser.RULE_vara);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 113;
			_la = this._input.LA(1);
			if (!(_la === tinybasicParser.STRING || _la === tinybasicParser.VAR)) {
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
	public number(): NumberContext {
		let _localctx: NumberContext = new NumberContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, tinybasicParser.RULE_number);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 116;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 115;
				this.match(tinybasicParser.DIGIT);
				}
				}
				this.state = 118;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === tinybasicParser.DIGIT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 20, tinybasicParser.RULE_relop);
		let _la: number;
		try {
			this.state = 129;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case tinybasicParser.T__18:
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 120;
				this.match(tinybasicParser.T__18);
				this.state = 122;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === tinybasicParser.T__6 || _la === tinybasicParser.T__19) {
					{
					this.state = 121;
					_la = this._input.LA(1);
					if (!(_la === tinybasicParser.T__6 || _la === tinybasicParser.T__19)) {
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
				break;
			case tinybasicParser.T__19:
				this.enterOuterAlt(_localctx, 2);
				{
				{
				this.state = 124;
				this.match(tinybasicParser.T__19);
				this.state = 126;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === tinybasicParser.T__6 || _la === tinybasicParser.T__18) {
					{
					this.state = 125;
					_la = this._input.LA(1);
					if (!(_la === tinybasicParser.T__6 || _la === tinybasicParser.T__18)) {
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
				break;
			case tinybasicParser.T__6:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 128;
				this.match(tinybasicParser.T__6);
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x1B\x86\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x03\x02\x07\x02" +
		"\x1A\n\x02\f\x02\x0E\x02\x1D\v\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x05\x03&\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x05\x04/\n\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x05\x048\n\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04E\n\x04\x03" +
		"\x05\x03\x05\x05\x05I\n\x05\x03\x05\x03\x05\x03\x05\x05\x05N\n\x05\x07" +
		"\x05P\n\x05\f\x05\x0E\x05S\v\x05\x03\x06\x03\x06\x03\x06\x07\x06X\n\x06" +
		"\f\x06\x0E\x06[\v\x06\x03\x07\x05\x07^\n\x07\x03\x07\x03\x07\x03\x07\x07" +
		"\x07c\n\x07\f\x07\x0E\x07f\v\x07\x03\b\x03\b\x03\b\x07\bk\n\b\f\b\x0E" +
		"\bn\v\b\x03\t\x03\t\x05\tr\n\t\x03\n\x03\n\x03\v\x06\vw\n\v\r\v\x0E\v" +
		"x\x03\f\x03\f\x05\f}\n\f\x03\f\x03\f\x05\f\x81\n\f\x03\f\x05\f\x84\n\f" +
		"\x03\f\x02\x02\x02\r\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02" +
		"\x10\x02\x12\x02\x14\x02\x16\x02\x02\x07\x03\x02\x11\x12\x03\x02\x13\x14" +
		"\x04\x02\x17\x17\x19\x19\x04\x02\t\t\x16\x16\x04\x02\t\t\x15\x15\x02\x95" +
		"\x02\x1B\x03\x02\x02\x02\x04%\x03\x02\x02\x02\x06D\x03\x02\x02\x02\bH" +
		"\x03\x02\x02\x02\nT\x03\x02\x02\x02\f]\x03\x02\x02\x02\x0Eg\x03\x02\x02" +
		"\x02\x10q\x03\x02\x02\x02\x12s\x03\x02\x02\x02\x14v\x03\x02\x02\x02\x16" +
		"\x83\x03\x02\x02\x02\x18\x1A\x05\x04\x03\x02\x19\x18\x03\x02\x02\x02\x1A" +
		"\x1D\x03\x02\x02\x02\x1B\x19\x03\x02\x02\x02\x1B\x1C\x03\x02\x02\x02\x1C" +
		"\x03\x03\x02\x02\x02\x1D\x1B\x03\x02\x02\x02\x1E\x1F\x05\x14\v\x02\x1F" +
		" \x05\x06\x04\x02 !\x07\x1A\x02\x02!&\x03\x02\x02\x02\"#\x05\x06\x04\x02" +
		"#$\x07\x1A\x02\x02$&\x03\x02\x02\x02%\x1E\x03\x02\x02\x02%\"\x03\x02\x02" +
		"\x02&\x05\x03\x02\x02\x02\'(\x07\x03\x02\x02(E\x05\b\x05\x02)*\x07\x04" +
		"\x02\x02*+\x05\f\x07\x02+,\x05\x16\f\x02,.\x05\f\x07\x02-/\x07\x05\x02" +
		"\x02.-\x03\x02\x02\x02./\x03\x02\x02\x02/0\x03\x02\x02\x0201\x05\x06\x04" +
		"\x021E\x03\x02\x02\x0223\x07\x06\x02\x023E\x05\x14\v\x0245\x07\x07\x02" +
		"\x025E\x05\n\x06\x0268\x07\b\x02\x0276\x03\x02\x02\x0278\x03\x02\x02\x02" +
		"89\x03\x02\x02\x029:\x05\x12\n\x02:;\x07\t\x02\x02;<\x05\f\x07\x02<E\x03" +
		"\x02\x02\x02=>\x07\n\x02\x02>E\x05\f\x07\x02?E\x07\v\x02\x02@E\x07\f\x02" +
		"\x02AE\x07\r\x02\x02BE\x07\x0E\x02\x02CE\x07\x0F\x02\x02D\'\x03\x02\x02" +
		"\x02D)\x03\x02\x02\x02D2\x03\x02\x02\x02D4\x03\x02\x02\x02D7\x03\x02\x02" +
		"\x02D=\x03\x02\x02\x02D?\x03\x02\x02\x02D@\x03\x02\x02\x02DA\x03\x02\x02" +
		"\x02DB\x03\x02\x02\x02DC\x03\x02\x02\x02E\x07\x03\x02\x02\x02FI\x07\x17" +
		"\x02\x02GI\x05\f\x07\x02HF\x03\x02\x02\x02HG\x03\x02\x02\x02IQ\x03\x02" +
		"\x02\x02JM\x07\x10\x02\x02KN\x07\x17\x02\x02LN\x05\f\x07\x02MK\x03\x02" +
		"\x02\x02ML\x03\x02\x02\x02NP\x03\x02\x02\x02OJ\x03\x02\x02\x02PS\x03\x02" +
		"\x02\x02QO\x03\x02\x02\x02QR\x03\x02\x02\x02R\t\x03\x02\x02\x02SQ\x03" +
		"\x02\x02\x02TY\x05\x12\n\x02UV\x07\x10\x02\x02VX\x05\x12\n\x02WU\x03\x02" +
		"\x02\x02X[\x03\x02\x02\x02YW\x03\x02\x02\x02YZ\x03\x02\x02\x02Z\v\x03" +
		"\x02\x02\x02[Y\x03\x02\x02\x02\\^\t\x02\x02\x02]\\\x03\x02\x02\x02]^\x03" +
		"\x02\x02\x02^_\x03\x02\x02\x02_d\x05\x0E\b\x02`a\t\x02\x02\x02ac\x05\x0E" +
		"\b\x02b`\x03\x02\x02\x02cf\x03\x02\x02\x02db\x03\x02\x02\x02de\x03\x02" +
		"\x02\x02e\r\x03\x02\x02\x02fd\x03\x02\x02\x02gl\x05\x10\t\x02hi\t\x03" +
		"\x02\x02ik\x05\x10\t\x02jh\x03\x02\x02\x02kn\x03\x02\x02\x02lj\x03\x02" +
		"\x02\x02lm\x03\x02\x02\x02m\x0F\x03\x02\x02\x02nl\x03\x02\x02\x02or\x05" +
		"\x12\n\x02pr\x05\x14\v\x02qo\x03\x02\x02\x02qp\x03\x02\x02\x02r\x11\x03" +
		"\x02\x02\x02st\t\x04\x02\x02t\x13\x03\x02\x02\x02uw\x07\x18\x02\x02vu" +
		"\x03\x02\x02\x02wx\x03\x02\x02\x02xv\x03\x02\x02\x02xy\x03\x02\x02\x02" +
		"y\x15\x03\x02\x02\x02z|\x07\x15\x02\x02{}\t\x05\x02\x02|{\x03\x02\x02" +
		"\x02|}\x03\x02\x02\x02}\x84\x03\x02\x02\x02~\x80\x07\x16\x02\x02\x7F\x81" +
		"\t\x06\x02\x02\x80\x7F\x03\x02\x02\x02\x80\x81\x03\x02\x02\x02\x81\x84" +
		"\x03\x02\x02\x02\x82\x84\x07\t\x02\x02\x83z\x03\x02\x02\x02\x83~\x03\x02" +
		"\x02\x02\x83\x82\x03\x02\x02\x02\x84\x17\x03\x02\x02\x02\x13\x1B%.7DH" +
		"MQY]dlqx|\x80\x83";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!tinybasicParser.__ATN) {
			tinybasicParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(tinybasicParser._serializedATN));
		}

		return tinybasicParser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return tinybasicParser.RULE_program; }
	// @Override
	public enterRule(listener: tinybasicListener): void {
		if (listener.enterProgram) {
			listener.enterProgram(this);
		}
	}
	// @Override
	public exitRule(listener: tinybasicListener): void {
		if (listener.exitProgram) {
			listener.exitProgram(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tinybasicVisitor<Result>): Result {
		if (visitor.visitProgram) {
			return visitor.visitProgram(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LineContext extends ParserRuleContext {
	public number(): NumberContext | undefined {
		return this.tryGetRuleContext(0, NumberContext);
	}
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public CR(): TerminalNode { return this.getToken(tinybasicParser.CR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tinybasicParser.RULE_line; }
	// @Override
	public enterRule(listener: tinybasicListener): void {
		if (listener.enterLine) {
			listener.enterLine(this);
		}
	}
	// @Override
	public exitRule(listener: tinybasicListener): void {
		if (listener.exitLine) {
			listener.exitLine(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tinybasicVisitor<Result>): Result {
		if (visitor.visitLine) {
			return visitor.visitLine(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public exprlist(): ExprlistContext | undefined {
		return this.tryGetRuleContext(0, ExprlistContext);
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
	public relop(): RelopContext | undefined {
		return this.tryGetRuleContext(0, RelopContext);
	}
	public statement(): StatementContext | undefined {
		return this.tryGetRuleContext(0, StatementContext);
	}
	public number(): NumberContext | undefined {
		return this.tryGetRuleContext(0, NumberContext);
	}
	public varlist(): VarlistContext | undefined {
		return this.tryGetRuleContext(0, VarlistContext);
	}
	public vara(): VaraContext | undefined {
		return this.tryGetRuleContext(0, VaraContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tinybasicParser.RULE_statement; }
	// @Override
	public enterRule(listener: tinybasicListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: tinybasicListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tinybasicVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExprlistContext extends ParserRuleContext {
	public STRING(): TerminalNode[];
	public STRING(i: number): TerminalNode;
	public STRING(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(tinybasicParser.STRING);
		} else {
			return this.getToken(tinybasicParser.STRING, i);
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tinybasicParser.RULE_exprlist; }
	// @Override
	public enterRule(listener: tinybasicListener): void {
		if (listener.enterExprlist) {
			listener.enterExprlist(this);
		}
	}
	// @Override
	public exitRule(listener: tinybasicListener): void {
		if (listener.exitExprlist) {
			listener.exitExprlist(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tinybasicVisitor<Result>): Result {
		if (visitor.visitExprlist) {
			return visitor.visitExprlist(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VarlistContext extends ParserRuleContext {
	public vara(): VaraContext[];
	public vara(i: number): VaraContext;
	public vara(i?: number): VaraContext | VaraContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VaraContext);
		} else {
			return this.getRuleContext(i, VaraContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tinybasicParser.RULE_varlist; }
	// @Override
	public enterRule(listener: tinybasicListener): void {
		if (listener.enterVarlist) {
			listener.enterVarlist(this);
		}
	}
	// @Override
	public exitRule(listener: tinybasicListener): void {
		if (listener.exitVarlist) {
			listener.exitVarlist(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tinybasicVisitor<Result>): Result {
		if (visitor.visitVarlist) {
			return visitor.visitVarlist(this);
		} else {
			return visitor.visitChildren(this);
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
	public get ruleIndex(): number { return tinybasicParser.RULE_expression; }
	// @Override
	public enterRule(listener: tinybasicListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: tinybasicListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tinybasicVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
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
	public get ruleIndex(): number { return tinybasicParser.RULE_term; }
	// @Override
	public enterRule(listener: tinybasicListener): void {
		if (listener.enterTerm) {
			listener.enterTerm(this);
		}
	}
	// @Override
	public exitRule(listener: tinybasicListener): void {
		if (listener.exitTerm) {
			listener.exitTerm(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tinybasicVisitor<Result>): Result {
		if (visitor.visitTerm) {
			return visitor.visitTerm(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FactorContext extends ParserRuleContext {
	public vara(): VaraContext | undefined {
		return this.tryGetRuleContext(0, VaraContext);
	}
	public number(): NumberContext | undefined {
		return this.tryGetRuleContext(0, NumberContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tinybasicParser.RULE_factor; }
	// @Override
	public enterRule(listener: tinybasicListener): void {
		if (listener.enterFactor) {
			listener.enterFactor(this);
		}
	}
	// @Override
	public exitRule(listener: tinybasicListener): void {
		if (listener.exitFactor) {
			listener.exitFactor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tinybasicVisitor<Result>): Result {
		if (visitor.visitFactor) {
			return visitor.visitFactor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VaraContext extends ParserRuleContext {
	public VAR(): TerminalNode | undefined { return this.tryGetToken(tinybasicParser.VAR, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(tinybasicParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tinybasicParser.RULE_vara; }
	// @Override
	public enterRule(listener: tinybasicListener): void {
		if (listener.enterVara) {
			listener.enterVara(this);
		}
	}
	// @Override
	public exitRule(listener: tinybasicListener): void {
		if (listener.exitVara) {
			listener.exitVara(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tinybasicVisitor<Result>): Result {
		if (visitor.visitVara) {
			return visitor.visitVara(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NumberContext extends ParserRuleContext {
	public DIGIT(): TerminalNode[];
	public DIGIT(i: number): TerminalNode;
	public DIGIT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(tinybasicParser.DIGIT);
		} else {
			return this.getToken(tinybasicParser.DIGIT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tinybasicParser.RULE_number; }
	// @Override
	public enterRule(listener: tinybasicListener): void {
		if (listener.enterNumber) {
			listener.enterNumber(this);
		}
	}
	// @Override
	public exitRule(listener: tinybasicListener): void {
		if (listener.exitNumber) {
			listener.exitNumber(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tinybasicVisitor<Result>): Result {
		if (visitor.visitNumber) {
			return visitor.visitNumber(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RelopContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tinybasicParser.RULE_relop; }
	// @Override
	public enterRule(listener: tinybasicListener): void {
		if (listener.enterRelop) {
			listener.enterRelop(this);
		}
	}
	// @Override
	public exitRule(listener: tinybasicListener): void {
		if (listener.exitRelop) {
			listener.exitRelop(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tinybasicVisitor<Result>): Result {
		if (visitor.visitRelop) {
			return visitor.visitRelop(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


