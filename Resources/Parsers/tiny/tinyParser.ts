// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/tiny/tiny.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { tinyListener } from "./tinyListener";

export class tinyParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly ID = 9;
	public static readonly NUMBER = 10;
	public static readonly WS = 11;
	public static readonly RULE_program = 0;
	public static readonly RULE_stmt_list = 1;
	public static readonly RULE_stmt = 2;
	public static readonly RULE_assign_stmt = 3;
	public static readonly RULE_read_stmt = 4;
	public static readonly RULE_write_stmt = 5;
	public static readonly RULE_id_list = 6;
	public static readonly RULE_expr_list = 7;
	public static readonly RULE_expr = 8;
	public static readonly RULE_factor = 9;
	public static readonly RULE_integer = 10;
	public static readonly RULE_op = 11;
	public static readonly RULE_ident = 12;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "stmt_list", "stmt", "assign_stmt", "read_stmt", "write_stmt", 
		"id_list", "expr_list", "expr", "factor", "integer", "op", "ident",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'BEGIN'", "'END'", "':='", "'READ'", "'WRITE'", "','", "'-'", 
		"'+'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, "ID", "NUMBER", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(tinyParser._LITERAL_NAMES, tinyParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return tinyParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "tiny.g4"; }

	// @Override
	public get ruleNames(): string[] { return tinyParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return tinyParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(tinyParser._ATN, this);
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, tinyParser.RULE_program);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 26;
			this.match(tinyParser.T__0);
			this.state = 27;
			this.stmt_list(0);
			this.state = 28;
			this.match(tinyParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public stmt_list(): Stmt_listContext;
	public stmt_list(_p: number): Stmt_listContext;
	// @RuleVersion(0)
	public stmt_list(_p?: number): Stmt_listContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Stmt_listContext = new Stmt_listContext(this._ctx, _parentState);
		let _prevctx: Stmt_listContext = _localctx;
		let _startState: number = 2;
		this.enterRecursionRule(_localctx, 2, tinyParser.RULE_stmt_list, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 31;
			this.stmt();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 37;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new Stmt_listContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, tinyParser.RULE_stmt_list);
					this.state = 33;
					if (!(this.precpred(this._ctx, 2))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
					}
					this.state = 34;
					this.stmt();
					}
					}
				}
				this.state = 39;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
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
	public stmt(): StmtContext {
		let _localctx: StmtContext = new StmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, tinyParser.RULE_stmt);
		try {
			this.state = 43;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case tinyParser.ID:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 40;
				this.assign_stmt();
				}
				break;
			case tinyParser.T__3:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 41;
				this.read_stmt();
				}
				break;
			case tinyParser.T__4:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 42;
				this.write_stmt();
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
	public assign_stmt(): Assign_stmtContext {
		let _localctx: Assign_stmtContext = new Assign_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, tinyParser.RULE_assign_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 45;
			this.ident();
			this.state = 46;
			this.match(tinyParser.T__2);
			this.state = 47;
			this.expr(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public read_stmt(): Read_stmtContext {
		let _localctx: Read_stmtContext = new Read_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, tinyParser.RULE_read_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 49;
			this.match(tinyParser.T__3);
			this.state = 50;
			this.id_list(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public write_stmt(): Write_stmtContext {
		let _localctx: Write_stmtContext = new Write_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, tinyParser.RULE_write_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 52;
			this.match(tinyParser.T__4);
			this.state = 53;
			this.expr_list(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public id_list(): Id_listContext;
	public id_list(_p: number): Id_listContext;
	// @RuleVersion(0)
	public id_list(_p?: number): Id_listContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Id_listContext = new Id_listContext(this._ctx, _parentState);
		let _prevctx: Id_listContext = _localctx;
		let _startState: number = 12;
		this.enterRecursionRule(_localctx, 12, tinyParser.RULE_id_list, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 56;
			this.ident();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 63;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new Id_listContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, tinyParser.RULE_id_list);
					this.state = 58;
					if (!(this.precpred(this._ctx, 2))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
					}
					this.state = 59;
					this.match(tinyParser.T__5);
					this.state = 60;
					this.ident();
					}
					}
				}
				this.state = 65;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
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

	public expr_list(): Expr_listContext;
	public expr_list(_p: number): Expr_listContext;
	// @RuleVersion(0)
	public expr_list(_p?: number): Expr_listContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Expr_listContext = new Expr_listContext(this._ctx, _parentState);
		let _prevctx: Expr_listContext = _localctx;
		let _startState: number = 14;
		this.enterRecursionRule(_localctx, 14, tinyParser.RULE_expr_list, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 67;
			this.expr(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 74;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new Expr_listContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, tinyParser.RULE_expr_list);
					this.state = 69;
					if (!(this.precpred(this._ctx, 2))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
					}
					this.state = 70;
					this.match(tinyParser.T__5);
					this.state = 71;
					this.expr(0);
					}
					}
				}
				this.state = 76;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
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
		let _startState: number = 16;
		this.enterRecursionRule(_localctx, 16, tinyParser.RULE_expr, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 78;
			this.factor();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 86;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new ExprContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, tinyParser.RULE_expr);
					this.state = 80;
					if (!(this.precpred(this._ctx, 2))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
					}
					this.state = 81;
					this.op();
					this.state = 82;
					this.factor();
					}
					}
				}
				this.state = 88;
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
	public factor(): FactorContext {
		let _localctx: FactorContext = new FactorContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, tinyParser.RULE_factor);
		try {
			this.state = 91;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case tinyParser.ID:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 89;
				this.ident();
				}
				break;
			case tinyParser.T__6:
			case tinyParser.NUMBER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 90;
				this.integer();
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
	public integer(): IntegerContext {
		let _localctx: IntegerContext = new IntegerContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, tinyParser.RULE_integer);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 94;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === tinyParser.T__6) {
				{
				this.state = 93;
				this.match(tinyParser.T__6);
				}
			}

			this.state = 96;
			this.match(tinyParser.NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public op(): OpContext {
		let _localctx: OpContext = new OpContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, tinyParser.RULE_op);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 98;
			_la = this._input.LA(1);
			if (!(_la === tinyParser.T__6 || _la === tinyParser.T__7)) {
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
	public ident(): IdentContext {
		let _localctx: IdentContext = new IdentContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, tinyParser.RULE_ident);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 100;
			this.match(tinyParser.ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
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
			return this.stmt_list_sempred(_localctx as Stmt_listContext, predIndex);

		case 6:
			return this.id_list_sempred(_localctx as Id_listContext, predIndex);

		case 7:
			return this.expr_list_sempred(_localctx as Expr_listContext, predIndex);

		case 8:
			return this.expr_sempred(_localctx as ExprContext, predIndex);
		}
		return true;
	}
	private stmt_list_sempred(_localctx: Stmt_listContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}
	private id_list_sempred(_localctx: Id_listContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}
	private expr_list_sempred(_localctx: Expr_listContext, predIndex: number): boolean {
		switch (predIndex) {
		case 2:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}
	private expr_sempred(_localctx: ExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 3:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\ri\x04\x02\t" +
		"\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07\t" +
		"\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04\x0E" +
		"\t\x0E\x03\x02\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x07\x03&\n\x03\f\x03\x0E\x03)\v\x03\x03\x04\x03\x04\x03\x04\x05" +
		"\x04.\n\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03" +
		"\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x07\b@\n\b\f" +
		"\b\x0E\bC\v\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x07\tK\n\t\f\t\x0E\t" +
		"N\v\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x07\nW\n\n\f\n\x0E\nZ" +
		"\v\n\x03\v\x03\v\x05\v^\n\v\x03\f\x05\fa\n\f\x03\f\x03\f\x03\r\x03\r\x03" +
		"\x0E\x03\x0E\x03\x0E\x02\x02\x06\x04\x0E\x10\x12\x0F\x02\x02\x04\x02\x06" +
		"\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02" +
		"\x1A\x02\x02\x03\x03\x02\t\n\x02c\x02\x1C\x03\x02\x02\x02\x04 \x03\x02" +
		"\x02\x02\x06-\x03\x02\x02\x02\b/\x03\x02\x02\x02\n3\x03\x02\x02\x02\f" +
		"6\x03\x02\x02\x02\x0E9\x03\x02\x02\x02\x10D\x03\x02\x02\x02\x12O\x03\x02" +
		"\x02\x02\x14]\x03\x02\x02\x02\x16`\x03\x02\x02\x02\x18d\x03\x02\x02\x02" +
		"\x1Af\x03\x02\x02\x02\x1C\x1D\x07\x03\x02\x02\x1D\x1E\x05\x04\x03\x02" +
		"\x1E\x1F\x07\x04\x02\x02\x1F\x03\x03\x02\x02\x02 !\b\x03\x01\x02!\"\x05" +
		"\x06\x04\x02\"\'\x03\x02\x02\x02#$\f\x04\x02\x02$&\x05\x06\x04\x02%#\x03" +
		"\x02\x02\x02&)\x03\x02\x02\x02\'%\x03\x02\x02\x02\'(\x03\x02\x02\x02(" +
		"\x05\x03\x02\x02\x02)\'\x03\x02\x02\x02*.\x05\b\x05\x02+.\x05\n\x06\x02" +
		",.\x05\f\x07\x02-*\x03\x02\x02\x02-+\x03\x02\x02\x02-,\x03\x02\x02\x02" +
		".\x07\x03\x02\x02\x02/0\x05\x1A\x0E\x0201\x07\x05\x02\x0212\x05\x12\n" +
		"\x022\t\x03\x02\x02\x0234\x07\x06\x02\x0245\x05\x0E\b\x025\v\x03\x02\x02" +
		"\x0267\x07\x07\x02\x0278\x05\x10\t\x028\r\x03\x02\x02\x029:\b\b\x01\x02" +
		":;\x05\x1A\x0E\x02;A\x03\x02\x02\x02<=\f\x04\x02\x02=>\x07\b\x02\x02>" +
		"@\x05\x1A\x0E\x02?<\x03\x02\x02\x02@C\x03\x02\x02\x02A?\x03\x02\x02\x02" +
		"AB\x03\x02\x02\x02B\x0F\x03\x02\x02\x02CA\x03\x02\x02\x02DE\b\t\x01\x02" +
		"EF\x05\x12\n\x02FL\x03\x02\x02\x02GH\f\x04\x02\x02HI\x07\b\x02\x02IK\x05" +
		"\x12\n\x02JG\x03\x02\x02\x02KN\x03\x02\x02\x02LJ\x03\x02\x02\x02LM\x03" +
		"\x02\x02\x02M\x11\x03\x02\x02\x02NL\x03\x02\x02\x02OP\b\n\x01\x02PQ\x05" +
		"\x14\v\x02QX\x03\x02\x02\x02RS\f\x04\x02\x02ST\x05\x18\r\x02TU\x05\x14" +
		"\v\x02UW\x03\x02\x02\x02VR\x03\x02\x02\x02WZ\x03\x02\x02\x02XV\x03\x02" +
		"\x02\x02XY\x03\x02\x02\x02Y\x13\x03\x02\x02\x02ZX\x03\x02\x02\x02[^\x05" +
		"\x1A\x0E\x02\\^\x05\x16\f\x02][\x03\x02\x02\x02]\\\x03\x02\x02\x02^\x15" +
		"\x03\x02\x02\x02_a\x07\t\x02\x02`_\x03\x02\x02\x02`a\x03\x02\x02\x02a" +
		"b\x03\x02\x02\x02bc\x07\f\x02\x02c\x17\x03\x02\x02\x02de\t\x02\x02\x02" +
		"e\x19\x03\x02\x02\x02fg\x07\v\x02\x02g\x1B\x03\x02\x02\x02\t\'-ALX]`";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!tinyParser.__ATN) {
			tinyParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(tinyParser._serializedATN));
		}

		return tinyParser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	public stmt_list(): Stmt_listContext {
		return this.getRuleContext(0, Stmt_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tinyParser.RULE_program; }
	// @Override
	public enterRule(listener: tinyListener): void {
		if (listener.enterProgram) {
			listener.enterProgram(this);
		}
	}
	// @Override
	public exitRule(listener: tinyListener): void {
		if (listener.exitProgram) {
			listener.exitProgram(this);
		}
	}
}


export class Stmt_listContext extends ParserRuleContext {
	public stmt_list(): Stmt_listContext | undefined {
		return this.tryGetRuleContext(0, Stmt_listContext);
	}
	public stmt(): StmtContext {
		return this.getRuleContext(0, StmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tinyParser.RULE_stmt_list; }
	// @Override
	public enterRule(listener: tinyListener): void {
		if (listener.enterStmt_list) {
			listener.enterStmt_list(this);
		}
	}
	// @Override
	public exitRule(listener: tinyListener): void {
		if (listener.exitStmt_list) {
			listener.exitStmt_list(this);
		}
	}
}


export class StmtContext extends ParserRuleContext {
	public assign_stmt(): Assign_stmtContext | undefined {
		return this.tryGetRuleContext(0, Assign_stmtContext);
	}
	public read_stmt(): Read_stmtContext | undefined {
		return this.tryGetRuleContext(0, Read_stmtContext);
	}
	public write_stmt(): Write_stmtContext | undefined {
		return this.tryGetRuleContext(0, Write_stmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tinyParser.RULE_stmt; }
	// @Override
	public enterRule(listener: tinyListener): void {
		if (listener.enterStmt) {
			listener.enterStmt(this);
		}
	}
	// @Override
	public exitRule(listener: tinyListener): void {
		if (listener.exitStmt) {
			listener.exitStmt(this);
		}
	}
}


export class Assign_stmtContext extends ParserRuleContext {
	public ident(): IdentContext {
		return this.getRuleContext(0, IdentContext);
	}
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tinyParser.RULE_assign_stmt; }
	// @Override
	public enterRule(listener: tinyListener): void {
		if (listener.enterAssign_stmt) {
			listener.enterAssign_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: tinyListener): void {
		if (listener.exitAssign_stmt) {
			listener.exitAssign_stmt(this);
		}
	}
}


export class Read_stmtContext extends ParserRuleContext {
	public id_list(): Id_listContext {
		return this.getRuleContext(0, Id_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tinyParser.RULE_read_stmt; }
	// @Override
	public enterRule(listener: tinyListener): void {
		if (listener.enterRead_stmt) {
			listener.enterRead_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: tinyListener): void {
		if (listener.exitRead_stmt) {
			listener.exitRead_stmt(this);
		}
	}
}


export class Write_stmtContext extends ParserRuleContext {
	public expr_list(): Expr_listContext {
		return this.getRuleContext(0, Expr_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tinyParser.RULE_write_stmt; }
	// @Override
	public enterRule(listener: tinyListener): void {
		if (listener.enterWrite_stmt) {
			listener.enterWrite_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: tinyListener): void {
		if (listener.exitWrite_stmt) {
			listener.exitWrite_stmt(this);
		}
	}
}


export class Id_listContext extends ParserRuleContext {
	public id_list(): Id_listContext | undefined {
		return this.tryGetRuleContext(0, Id_listContext);
	}
	public ident(): IdentContext {
		return this.getRuleContext(0, IdentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tinyParser.RULE_id_list; }
	// @Override
	public enterRule(listener: tinyListener): void {
		if (listener.enterId_list) {
			listener.enterId_list(this);
		}
	}
	// @Override
	public exitRule(listener: tinyListener): void {
		if (listener.exitId_list) {
			listener.exitId_list(this);
		}
	}
}


export class Expr_listContext extends ParserRuleContext {
	public expr_list(): Expr_listContext | undefined {
		return this.tryGetRuleContext(0, Expr_listContext);
	}
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tinyParser.RULE_expr_list; }
	// @Override
	public enterRule(listener: tinyListener): void {
		if (listener.enterExpr_list) {
			listener.enterExpr_list(this);
		}
	}
	// @Override
	public exitRule(listener: tinyListener): void {
		if (listener.exitExpr_list) {
			listener.exitExpr_list(this);
		}
	}
}


export class ExprContext extends ParserRuleContext {
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	public op(): OpContext | undefined {
		return this.tryGetRuleContext(0, OpContext);
	}
	public factor(): FactorContext {
		return this.getRuleContext(0, FactorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tinyParser.RULE_expr; }
	// @Override
	public enterRule(listener: tinyListener): void {
		if (listener.enterExpr) {
			listener.enterExpr(this);
		}
	}
	// @Override
	public exitRule(listener: tinyListener): void {
		if (listener.exitExpr) {
			listener.exitExpr(this);
		}
	}
}


export class FactorContext extends ParserRuleContext {
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	public integer(): IntegerContext | undefined {
		return this.tryGetRuleContext(0, IntegerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tinyParser.RULE_factor; }
	// @Override
	public enterRule(listener: tinyListener): void {
		if (listener.enterFactor) {
			listener.enterFactor(this);
		}
	}
	// @Override
	public exitRule(listener: tinyListener): void {
		if (listener.exitFactor) {
			listener.exitFactor(this);
		}
	}
}


export class IntegerContext extends ParserRuleContext {
	public NUMBER(): TerminalNode { return this.getToken(tinyParser.NUMBER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tinyParser.RULE_integer; }
	// @Override
	public enterRule(listener: tinyListener): void {
		if (listener.enterInteger) {
			listener.enterInteger(this);
		}
	}
	// @Override
	public exitRule(listener: tinyListener): void {
		if (listener.exitInteger) {
			listener.exitInteger(this);
		}
	}
}


export class OpContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tinyParser.RULE_op; }
	// @Override
	public enterRule(listener: tinyListener): void {
		if (listener.enterOp) {
			listener.enterOp(this);
		}
	}
	// @Override
	public exitRule(listener: tinyListener): void {
		if (listener.exitOp) {
			listener.exitOp(this);
		}
	}
}


export class IdentContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(tinyParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tinyParser.RULE_ident; }
	// @Override
	public enterRule(listener: tinyListener): void {
		if (listener.enterIdent) {
			listener.enterIdent(this);
		}
	}
	// @Override
	public exitRule(listener: tinyListener): void {
		if (listener.exitIdent) {
			listener.exitIdent(this);
		}
	}
}


