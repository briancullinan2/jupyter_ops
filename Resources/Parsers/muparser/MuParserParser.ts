// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/muparser/MuParser.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { MuParserListener } from "./MuParserListener";

export class MuParserParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly FUNCTION = 3;
	public static readonly FUNCTIONMULTI = 4;
	public static readonly ASSIGN = 5;
	public static readonly ASSIGNADD = 6;
	public static readonly ASSIGNSUB = 7;
	public static readonly ASSIGNMUL = 8;
	public static readonly ASSIGNDIV = 9;
	public static readonly AND = 10;
	public static readonly OR = 11;
	public static readonly LTEQ = 12;
	public static readonly GTEQ = 13;
	public static readonly NEQ = 14;
	public static readonly EQ = 15;
	public static readonly LT = 16;
	public static readonly GT = 17;
	public static readonly ADD = 18;
	public static readonly SUB = 19;
	public static readonly MUL = 20;
	public static readonly DIV = 21;
	public static readonly POW = 22;
	public static readonly NOT = 23;
	public static readonly QUESTION = 24;
	public static readonly COLON = 25;
	public static readonly OPAR = 26;
	public static readonly CPAR = 27;
	public static readonly INT = 28;
	public static readonly FLOAT = 29;
	public static readonly TRUE = 30;
	public static readonly FALSE = 31;
	public static readonly E = 32;
	public static readonly PI = 33;
	public static readonly ID = 34;
	public static readonly SPACE = 35;
	public static readonly RULE_prog = 0;
	public static readonly RULE_expr = 1;
	public static readonly RULE_atom = 2;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"prog", "expr", "atom",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'\n'", "','", undefined, undefined, "'='", "'+='", "'-='", 
		"'*='", "'/='", "'&&'", "'||'", "'<='", "'>='", "'!='", "'=='", "'<'", 
		"'>'", "'+'", "'-'", "'*'", "'/'", "'^'", "'!'", "'?'", "':'", "'('", 
		"')'", undefined, undefined, "'true'", "'false'", "'_e'", "'_pi'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "FUNCTION", "FUNCTIONMULTI", "ASSIGN", 
		"ASSIGNADD", "ASSIGNSUB", "ASSIGNMUL", "ASSIGNDIV", "AND", "OR", "LTEQ", 
		"GTEQ", "NEQ", "EQ", "LT", "GT", "ADD", "SUB", "MUL", "DIV", "POW", "NOT", 
		"QUESTION", "COLON", "OPAR", "CPAR", "INT", "FLOAT", "TRUE", "FALSE", 
		"E", "PI", "ID", "SPACE",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(MuParserParser._LITERAL_NAMES, MuParserParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return MuParserParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "MuParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return MuParserParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return MuParserParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(MuParserParser._ATN, this);
	}
	// @RuleVersion(0)
	public prog(): ProgContext {
		let _localctx: ProgContext = new ProgContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, MuParserParser.RULE_prog);
		let _la: number;
		try {
			_localctx = new ProgExprContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 6;
			this.expr(0);
			this.state = 11;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MuParserParser.T__0) {
				{
				{
				this.state = 7;
				this.match(MuParserParser.T__0);
				this.state = 8;
				this.expr(0);
				}
				}
				this.state = 13;
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

	public expr(): ExprContext;
	public expr(_p: number): ExprContext;
	// @RuleVersion(0)
	public expr(_p?: number): ExprContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExprContext = new ExprContext(this._ctx, _parentState);
		let _prevctx: ExprContext = _localctx;
		let _startState: number = 2;
		this.enterRecursionRule(_localctx, 2, MuParserParser.RULE_expr, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 38;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				{
				_localctx = new UnaryMinusExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 15;
				this.match(MuParserParser.SUB);
				this.state = 16;
				this.expr(12);
				}
				break;

			case 2:
				{
				_localctx = new FunctionExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 17;
				(_localctx as FunctionExprContext)._op = this.match(MuParserParser.FUNCTION);
				this.state = 18;
				this.match(MuParserParser.OPAR);
				this.state = 19;
				this.expr(0);
				this.state = 20;
				this.match(MuParserParser.CPAR);
				}
				break;

			case 3:
				{
				_localctx = new FunctionMultiExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 22;
				(_localctx as FunctionMultiExprContext)._op = this.match(MuParserParser.FUNCTIONMULTI);
				this.state = 23;
				this.match(MuParserParser.OPAR);
				this.state = 24;
				this.expr(0);
				this.state = 29;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === MuParserParser.T__1) {
					{
					{
					this.state = 25;
					this.match(MuParserParser.T__1);
					this.state = 26;
					this.expr(0);
					}
					}
					this.state = 31;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 32;
				this.match(MuParserParser.CPAR);
				}
				break;

			case 4:
				{
				_localctx = new AtomExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 34;
				this.atom();
				}
				break;

			case 5:
				{
				_localctx = new AssignExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 35;
				this.match(MuParserParser.ID);
				this.state = 36;
				(_localctx as AssignExprContext)._op = this._input.LT(1);
				_la = this._input.LA(1);
				if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MuParserParser.ASSIGN) | (1 << MuParserParser.ASSIGNADD) | (1 << MuParserParser.ASSIGNSUB) | (1 << MuParserParser.ASSIGNMUL) | (1 << MuParserParser.ASSIGNDIV))) !== 0))) {
					(_localctx as AssignExprContext)._op = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 37;
				this.expr(1);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 69;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 67;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
					case 1:
						{
						_localctx = new PowExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, MuParserParser.RULE_expr);
						this.state = 40;
						if (!(this.precpred(this._ctx, 13))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 13)");
						}
						this.state = 41;
						this.match(MuParserParser.POW);
						this.state = 42;
						this.expr(13);
						}
						break;

					case 2:
						{
						_localctx = new MulDivExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, MuParserParser.RULE_expr);
						this.state = 43;
						if (!(this.precpred(this._ctx, 11))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 11)");
						}
						this.state = 44;
						(_localctx as MulDivExprContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === MuParserParser.MUL || _la === MuParserParser.DIV)) {
							(_localctx as MulDivExprContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 45;
						this.expr(12);
						}
						break;

					case 3:
						{
						_localctx = new AddSubExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, MuParserParser.RULE_expr);
						this.state = 46;
						if (!(this.precpred(this._ctx, 10))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 10)");
						}
						this.state = 47;
						(_localctx as AddSubExprContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === MuParserParser.ADD || _la === MuParserParser.SUB)) {
							(_localctx as AddSubExprContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 48;
						this.expr(11);
						}
						break;

					case 4:
						{
						_localctx = new RelationalExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, MuParserParser.RULE_expr);
						this.state = 49;
						if (!(this.precpred(this._ctx, 9))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 9)");
						}
						this.state = 50;
						(_localctx as RelationalExprContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MuParserParser.LTEQ) | (1 << MuParserParser.GTEQ) | (1 << MuParserParser.LT) | (1 << MuParserParser.GT))) !== 0))) {
							(_localctx as RelationalExprContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 51;
						this.expr(10);
						}
						break;

					case 5:
						{
						_localctx = new EqualityExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, MuParserParser.RULE_expr);
						this.state = 52;
						if (!(this.precpred(this._ctx, 8))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 8)");
						}
						this.state = 53;
						(_localctx as EqualityExprContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === MuParserParser.NEQ || _la === MuParserParser.EQ)) {
							(_localctx as EqualityExprContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 54;
						this.expr(9);
						}
						break;

					case 6:
						{
						_localctx = new AndExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, MuParserParser.RULE_expr);
						this.state = 55;
						if (!(this.precpred(this._ctx, 7))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 7)");
						}
						this.state = 56;
						this.match(MuParserParser.AND);
						this.state = 57;
						this.expr(8);
						}
						break;

					case 7:
						{
						_localctx = new OrExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, MuParserParser.RULE_expr);
						this.state = 58;
						if (!(this.precpred(this._ctx, 6))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 6)");
						}
						this.state = 59;
						this.match(MuParserParser.OR);
						this.state = 60;
						this.expr(7);
						}
						break;

					case 8:
						{
						_localctx = new IteExprContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, MuParserParser.RULE_expr);
						this.state = 61;
						if (!(this.precpred(this._ctx, 5))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 5)");
						}
						this.state = 62;
						this.match(MuParserParser.QUESTION);
						this.state = 63;
						this.expr(0);
						this.state = 64;
						this.match(MuParserParser.COLON);
						this.state = 65;
						this.expr(6);
						}
						break;
					}
					}
				}
				this.state = 71;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
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
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public atom(): AtomContext {
		let _localctx: AtomContext = new AtomContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, MuParserParser.RULE_atom);
		let _la: number;
		try {
			this.state = 80;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MuParserParser.OPAR:
				_localctx = new ParExprContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 72;
				this.match(MuParserParser.OPAR);
				this.state = 73;
				this.expr(0);
				this.state = 74;
				this.match(MuParserParser.CPAR);
				}
				break;
			case MuParserParser.INT:
			case MuParserParser.FLOAT:
				_localctx = new NumberAtomContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 76;
				_la = this._input.LA(1);
				if (!(_la === MuParserParser.INT || _la === MuParserParser.FLOAT)) {
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
			case MuParserParser.TRUE:
			case MuParserParser.FALSE:
				_localctx = new BooleanAtomContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 77;
				_la = this._input.LA(1);
				if (!(_la === MuParserParser.TRUE || _la === MuParserParser.FALSE)) {
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
			case MuParserParser.E:
			case MuParserParser.PI:
				_localctx = new PredefinedConstantAtomContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 78;
				_la = this._input.LA(1);
				if (!(_la === MuParserParser.E || _la === MuParserParser.PI)) {
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
			case MuParserParser.ID:
				_localctx = new IdAtomContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 79;
				this.match(MuParserParser.ID);
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

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 1:
			return this.expr_sempred(_localctx as ExprContext, predIndex);
		}
		return true;
	}
	private expr_sempred(_localctx: ExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 13);

		case 1:
			return this.precpred(this._ctx, 11);

		case 2:
			return this.precpred(this._ctx, 10);

		case 3:
			return this.precpred(this._ctx, 9);

		case 4:
			return this.precpred(this._ctx, 8);

		case 5:
			return this.precpred(this._ctx, 7);

		case 6:
			return this.precpred(this._ctx, 6);

		case 7:
			return this.precpred(this._ctx, 5);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03%U\x04\x02\t\x02" +
		"\x04\x03\t\x03\x04\x04\t\x04\x03\x02\x03\x02\x03\x02\x07\x02\f\n\x02\f" +
		"\x02\x0E\x02\x0F\v\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x07\x03\x1E\n" +
		"\x03\f\x03\x0E\x03!\v\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x05\x03)\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x07\x03F\n\x03\f\x03\x0E\x03I\v\x03\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04S\n\x04\x03\x04" +
		"\x02\x02\x03\x04\x05\x02\x02\x04\x02\x06\x02\x02\n\x03\x02\x07\v\x03\x02" +
		"\x16\x17\x03\x02\x14\x15\x04\x02\x0E\x0F\x12\x13\x03\x02\x10\x11\x03\x02" +
		"\x1E\x1F\x03\x02 !\x03\x02\"#\x02c\x02\b\x03\x02\x02\x02\x04(\x03\x02" +
		"\x02\x02\x06R\x03\x02\x02\x02\b\r\x05\x04\x03\x02\t\n\x07\x03\x02\x02" +
		"\n\f\x05\x04\x03\x02\v\t\x03\x02\x02\x02\f\x0F\x03\x02\x02\x02\r\v\x03" +
		"\x02\x02\x02\r\x0E\x03\x02\x02\x02\x0E\x03\x03\x02\x02\x02\x0F\r\x03\x02" +
		"\x02\x02\x10\x11\b\x03\x01\x02\x11\x12\x07\x15\x02\x02\x12)\x05\x04\x03" +
		"\x0E\x13\x14\x07\x05\x02\x02\x14\x15\x07\x1C\x02\x02\x15\x16\x05\x04\x03" +
		"\x02\x16\x17\x07\x1D\x02\x02\x17)\x03\x02\x02\x02\x18\x19\x07\x06\x02" +
		"\x02\x19\x1A\x07\x1C\x02\x02\x1A\x1F\x05\x04\x03\x02\x1B\x1C\x07\x04\x02" +
		"\x02\x1C\x1E\x05\x04\x03\x02\x1D\x1B\x03\x02\x02\x02\x1E!\x03\x02\x02" +
		"\x02\x1F\x1D\x03\x02\x02\x02\x1F \x03\x02\x02\x02 \"\x03\x02\x02\x02!" +
		"\x1F\x03\x02\x02\x02\"#\x07\x1D\x02\x02#)\x03\x02\x02\x02$)\x05\x06\x04" +
		"\x02%&\x07$\x02\x02&\'\t\x02\x02\x02\')\x05\x04\x03\x03(\x10\x03\x02\x02" +
		"\x02(\x13\x03\x02\x02\x02(\x18\x03\x02\x02\x02($\x03\x02\x02\x02(%\x03" +
		"\x02\x02\x02)G\x03\x02\x02\x02*+\f\x0F\x02\x02+,\x07\x18\x02\x02,F\x05" +
		"\x04\x03\x0F-.\f\r\x02\x02./\t\x03\x02\x02/F\x05\x04\x03\x0E01\f\f\x02" +
		"\x0212\t\x04\x02\x022F\x05\x04\x03\r34\f\v\x02\x0245\t\x05\x02\x025F\x05" +
		"\x04\x03\f67\f\n\x02\x0278\t\x06\x02\x028F\x05\x04\x03\v9:\f\t\x02\x02" +
		":;\x07\f\x02\x02;F\x05\x04\x03\n<=\f\b\x02\x02=>\x07\r\x02\x02>F\x05\x04" +
		"\x03\t?@\f\x07\x02\x02@A\x07\x1A\x02\x02AB\x05\x04\x03\x02BC\x07\x1B\x02" +
		"\x02CD\x05\x04\x03\bDF\x03\x02\x02\x02E*\x03\x02\x02\x02E-\x03\x02\x02" +
		"\x02E0\x03\x02\x02\x02E3\x03\x02\x02\x02E6\x03\x02\x02\x02E9\x03\x02\x02" +
		"\x02E<\x03\x02\x02\x02E?\x03\x02\x02\x02FI\x03\x02\x02\x02GE\x03\x02\x02" +
		"\x02GH\x03\x02\x02\x02H\x05\x03\x02\x02\x02IG\x03\x02\x02\x02JK\x07\x1C" +
		"\x02\x02KL\x05\x04\x03\x02LM\x07\x1D\x02\x02MS\x03\x02\x02\x02NS\t\x07" +
		"\x02\x02OS\t\b\x02\x02PS\t\t\x02\x02QS\x07$\x02\x02RJ\x03\x02\x02\x02" +
		"RN\x03\x02\x02\x02RO\x03\x02\x02\x02RP\x03\x02\x02\x02RQ\x03\x02\x02\x02" +
		"S\x07\x03\x02\x02\x02\b\r\x1F(EGR";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!MuParserParser.__ATN) {
			MuParserParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(MuParserParser._serializedATN));
		}

		return MuParserParser.__ATN;
	}

}

export class ProgContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MuParserParser.RULE_prog; }
	public copyFrom(ctx: ProgContext): void {
		super.copyFrom(ctx);
	}
}
export class ProgExprContext extends ProgContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	constructor(ctx: ProgContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MuParserListener): void {
		if (listener.enterProgExpr) {
			listener.enterProgExpr(this);
		}
	}
	// @Override
	public exitRule(listener: MuParserListener): void {
		if (listener.exitProgExpr) {
			listener.exitProgExpr(this);
		}
	}
}


export class ExprContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MuParserParser.RULE_expr; }
	public copyFrom(ctx: ExprContext): void {
		super.copyFrom(ctx);
	}
}
export class PowExprContext extends ExprContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public POW(): TerminalNode { return this.getToken(MuParserParser.POW, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MuParserListener): void {
		if (listener.enterPowExpr) {
			listener.enterPowExpr(this);
		}
	}
	// @Override
	public exitRule(listener: MuParserListener): void {
		if (listener.exitPowExpr) {
			listener.exitPowExpr(this);
		}
	}
}
export class UnaryMinusExprContext extends ExprContext {
	public SUB(): TerminalNode { return this.getToken(MuParserParser.SUB, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MuParserListener): void {
		if (listener.enterUnaryMinusExpr) {
			listener.enterUnaryMinusExpr(this);
		}
	}
	// @Override
	public exitRule(listener: MuParserListener): void {
		if (listener.exitUnaryMinusExpr) {
			listener.exitUnaryMinusExpr(this);
		}
	}
}
export class MulDivExprContext extends ExprContext {
	public _op: Token;
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public MUL(): TerminalNode | undefined { return this.tryGetToken(MuParserParser.MUL, 0); }
	public DIV(): TerminalNode | undefined { return this.tryGetToken(MuParserParser.DIV, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MuParserListener): void {
		if (listener.enterMulDivExpr) {
			listener.enterMulDivExpr(this);
		}
	}
	// @Override
	public exitRule(listener: MuParserListener): void {
		if (listener.exitMulDivExpr) {
			listener.exitMulDivExpr(this);
		}
	}
}
export class AddSubExprContext extends ExprContext {
	public _op: Token;
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public ADD(): TerminalNode | undefined { return this.tryGetToken(MuParserParser.ADD, 0); }
	public SUB(): TerminalNode | undefined { return this.tryGetToken(MuParserParser.SUB, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MuParserListener): void {
		if (listener.enterAddSubExpr) {
			listener.enterAddSubExpr(this);
		}
	}
	// @Override
	public exitRule(listener: MuParserListener): void {
		if (listener.exitAddSubExpr) {
			listener.exitAddSubExpr(this);
		}
	}
}
export class RelationalExprContext extends ExprContext {
	public _op: Token;
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public LTEQ(): TerminalNode | undefined { return this.tryGetToken(MuParserParser.LTEQ, 0); }
	public GTEQ(): TerminalNode | undefined { return this.tryGetToken(MuParserParser.GTEQ, 0); }
	public LT(): TerminalNode | undefined { return this.tryGetToken(MuParserParser.LT, 0); }
	public GT(): TerminalNode | undefined { return this.tryGetToken(MuParserParser.GT, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MuParserListener): void {
		if (listener.enterRelationalExpr) {
			listener.enterRelationalExpr(this);
		}
	}
	// @Override
	public exitRule(listener: MuParserListener): void {
		if (listener.exitRelationalExpr) {
			listener.exitRelationalExpr(this);
		}
	}
}
export class EqualityExprContext extends ExprContext {
	public _op: Token;
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public EQ(): TerminalNode | undefined { return this.tryGetToken(MuParserParser.EQ, 0); }
	public NEQ(): TerminalNode | undefined { return this.tryGetToken(MuParserParser.NEQ, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MuParserListener): void {
		if (listener.enterEqualityExpr) {
			listener.enterEqualityExpr(this);
		}
	}
	// @Override
	public exitRule(listener: MuParserListener): void {
		if (listener.exitEqualityExpr) {
			listener.exitEqualityExpr(this);
		}
	}
}
export class AndExprContext extends ExprContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public AND(): TerminalNode { return this.getToken(MuParserParser.AND, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MuParserListener): void {
		if (listener.enterAndExpr) {
			listener.enterAndExpr(this);
		}
	}
	// @Override
	public exitRule(listener: MuParserListener): void {
		if (listener.exitAndExpr) {
			listener.exitAndExpr(this);
		}
	}
}
export class OrExprContext extends ExprContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public OR(): TerminalNode { return this.getToken(MuParserParser.OR, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MuParserListener): void {
		if (listener.enterOrExpr) {
			listener.enterOrExpr(this);
		}
	}
	// @Override
	public exitRule(listener: MuParserListener): void {
		if (listener.exitOrExpr) {
			listener.exitOrExpr(this);
		}
	}
}
export class IteExprContext extends ExprContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public QUESTION(): TerminalNode { return this.getToken(MuParserParser.QUESTION, 0); }
	public COLON(): TerminalNode { return this.getToken(MuParserParser.COLON, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MuParserListener): void {
		if (listener.enterIteExpr) {
			listener.enterIteExpr(this);
		}
	}
	// @Override
	public exitRule(listener: MuParserListener): void {
		if (listener.exitIteExpr) {
			listener.exitIteExpr(this);
		}
	}
}
export class FunctionExprContext extends ExprContext {
	public _op: Token;
	public OPAR(): TerminalNode { return this.getToken(MuParserParser.OPAR, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public CPAR(): TerminalNode { return this.getToken(MuParserParser.CPAR, 0); }
	public FUNCTION(): TerminalNode { return this.getToken(MuParserParser.FUNCTION, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MuParserListener): void {
		if (listener.enterFunctionExpr) {
			listener.enterFunctionExpr(this);
		}
	}
	// @Override
	public exitRule(listener: MuParserListener): void {
		if (listener.exitFunctionExpr) {
			listener.exitFunctionExpr(this);
		}
	}
}
export class FunctionMultiExprContext extends ExprContext {
	public _op: Token;
	public OPAR(): TerminalNode { return this.getToken(MuParserParser.OPAR, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public CPAR(): TerminalNode { return this.getToken(MuParserParser.CPAR, 0); }
	public FUNCTIONMULTI(): TerminalNode { return this.getToken(MuParserParser.FUNCTIONMULTI, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MuParserListener): void {
		if (listener.enterFunctionMultiExpr) {
			listener.enterFunctionMultiExpr(this);
		}
	}
	// @Override
	public exitRule(listener: MuParserListener): void {
		if (listener.exitFunctionMultiExpr) {
			listener.exitFunctionMultiExpr(this);
		}
	}
}
export class AtomExprContext extends ExprContext {
	public atom(): AtomContext {
		return this.getRuleContext(0, AtomContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MuParserListener): void {
		if (listener.enterAtomExpr) {
			listener.enterAtomExpr(this);
		}
	}
	// @Override
	public exitRule(listener: MuParserListener): void {
		if (listener.exitAtomExpr) {
			listener.exitAtomExpr(this);
		}
	}
}
export class AssignExprContext extends ExprContext {
	public _op: Token;
	public ID(): TerminalNode { return this.getToken(MuParserParser.ID, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(MuParserParser.ASSIGN, 0); }
	public ASSIGNADD(): TerminalNode | undefined { return this.tryGetToken(MuParserParser.ASSIGNADD, 0); }
	public ASSIGNSUB(): TerminalNode | undefined { return this.tryGetToken(MuParserParser.ASSIGNSUB, 0); }
	public ASSIGNMUL(): TerminalNode | undefined { return this.tryGetToken(MuParserParser.ASSIGNMUL, 0); }
	public ASSIGNDIV(): TerminalNode | undefined { return this.tryGetToken(MuParserParser.ASSIGNDIV, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MuParserListener): void {
		if (listener.enterAssignExpr) {
			listener.enterAssignExpr(this);
		}
	}
	// @Override
	public exitRule(listener: MuParserListener): void {
		if (listener.exitAssignExpr) {
			listener.exitAssignExpr(this);
		}
	}
}


export class AtomContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MuParserParser.RULE_atom; }
	public copyFrom(ctx: AtomContext): void {
		super.copyFrom(ctx);
	}
}
export class ParExprContext extends AtomContext {
	public OPAR(): TerminalNode { return this.getToken(MuParserParser.OPAR, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public CPAR(): TerminalNode { return this.getToken(MuParserParser.CPAR, 0); }
	constructor(ctx: AtomContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MuParserListener): void {
		if (listener.enterParExpr) {
			listener.enterParExpr(this);
		}
	}
	// @Override
	public exitRule(listener: MuParserListener): void {
		if (listener.exitParExpr) {
			listener.exitParExpr(this);
		}
	}
}
export class NumberAtomContext extends AtomContext {
	public INT(): TerminalNode | undefined { return this.tryGetToken(MuParserParser.INT, 0); }
	public FLOAT(): TerminalNode | undefined { return this.tryGetToken(MuParserParser.FLOAT, 0); }
	constructor(ctx: AtomContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MuParserListener): void {
		if (listener.enterNumberAtom) {
			listener.enterNumberAtom(this);
		}
	}
	// @Override
	public exitRule(listener: MuParserListener): void {
		if (listener.exitNumberAtom) {
			listener.exitNumberAtom(this);
		}
	}
}
export class BooleanAtomContext extends AtomContext {
	public TRUE(): TerminalNode | undefined { return this.tryGetToken(MuParserParser.TRUE, 0); }
	public FALSE(): TerminalNode | undefined { return this.tryGetToken(MuParserParser.FALSE, 0); }
	constructor(ctx: AtomContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MuParserListener): void {
		if (listener.enterBooleanAtom) {
			listener.enterBooleanAtom(this);
		}
	}
	// @Override
	public exitRule(listener: MuParserListener): void {
		if (listener.exitBooleanAtom) {
			listener.exitBooleanAtom(this);
		}
	}
}
export class PredefinedConstantAtomContext extends AtomContext {
	public E(): TerminalNode | undefined { return this.tryGetToken(MuParserParser.E, 0); }
	public PI(): TerminalNode | undefined { return this.tryGetToken(MuParserParser.PI, 0); }
	constructor(ctx: AtomContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MuParserListener): void {
		if (listener.enterPredefinedConstantAtom) {
			listener.enterPredefinedConstantAtom(this);
		}
	}
	// @Override
	public exitRule(listener: MuParserListener): void {
		if (listener.exitPredefinedConstantAtom) {
			listener.exitPredefinedConstantAtom(this);
		}
	}
}
export class IdAtomContext extends AtomContext {
	public ID(): TerminalNode { return this.getToken(MuParserParser.ID, 0); }
	constructor(ctx: AtomContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MuParserListener): void {
		if (listener.enterIdAtom) {
			listener.enterIdAtom(this);
		}
	}
	// @Override
	public exitRule(listener: MuParserListener): void {
		if (listener.exitIdAtom) {
			listener.exitIdAtom(this);
		}
	}
}


