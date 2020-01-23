// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/arithmetic/arithmetic.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { arithmeticListener } from "./arithmeticListener";

export class arithmeticParser extends Parser {
	public static readonly VARIABLE = 1;
	public static readonly SCIENTIFIC_NUMBER = 2;
	public static readonly LPAREN = 3;
	public static readonly RPAREN = 4;
	public static readonly PLUS = 5;
	public static readonly MINUS = 6;
	public static readonly TIMES = 7;
	public static readonly DIV = 8;
	public static readonly GT = 9;
	public static readonly LT = 10;
	public static readonly EQ = 11;
	public static readonly POINT = 12;
	public static readonly POW = 13;
	public static readonly WS = 14;
	public static readonly RULE_file = 0;
	public static readonly RULE_equation = 1;
	public static readonly RULE_expression = 2;
	public static readonly RULE_atom = 3;
	public static readonly RULE_scientific = 4;
	public static readonly RULE_variable = 5;
	public static readonly RULE_relop = 6;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"file", "equation", "expression", "atom", "scientific", "variable", "relop",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "'('", "')'", "'+'", "'-'", "'*'", "'/'", 
		"'>'", "'<'", "'='", "'.'", "'^'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "VARIABLE", "SCIENTIFIC_NUMBER", "LPAREN", "RPAREN", "PLUS", 
		"MINUS", "TIMES", "DIV", "GT", "LT", "EQ", "POINT", "POW", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(arithmeticParser._LITERAL_NAMES, arithmeticParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return arithmeticParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "arithmetic.g4"; }

	// @Override
	public get ruleNames(): string[] { return arithmeticParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return arithmeticParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(arithmeticParser._ATN, this);
	}
	// @RuleVersion(0)
	public file(): FileContext {
		let _localctx: FileContext = new FileContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, arithmeticParser.RULE_file);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 17;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << arithmeticParser.VARIABLE) | (1 << arithmeticParser.SCIENTIFIC_NUMBER) | (1 << arithmeticParser.LPAREN) | (1 << arithmeticParser.PLUS) | (1 << arithmeticParser.MINUS))) !== 0)) {
				{
				{
				this.state = 14;
				this.equation();
				}
				}
				this.state = 19;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 20;
			this.match(arithmeticParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
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
	public equation(): EquationContext {
		let _localctx: EquationContext = new EquationContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, arithmeticParser.RULE_equation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 22;
			this.expression(0);
			this.state = 23;
			this.relop();
			this.state = 24;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
		let _prevctx: ExpressionContext = _localctx;
		let _startState: number = 4;
		this.enterRecursionRule(_localctx, 4, arithmeticParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 38;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case arithmeticParser.LPAREN:
				{
				this.state = 27;
				this.match(arithmeticParser.LPAREN);
				this.state = 28;
				this.expression(0);
				this.state = 29;
				this.match(arithmeticParser.RPAREN);
				}
				break;
			case arithmeticParser.VARIABLE:
			case arithmeticParser.SCIENTIFIC_NUMBER:
			case arithmeticParser.PLUS:
			case arithmeticParser.MINUS:
				{
				this.state = 34;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === arithmeticParser.PLUS || _la === arithmeticParser.MINUS) {
					{
					{
					this.state = 31;
					_la = this._input.LA(1);
					if (!(_la === arithmeticParser.PLUS || _la === arithmeticParser.MINUS)) {
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
					this.state = 36;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 37;
				this.atom();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 51;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 49;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
					case 1:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, arithmeticParser.RULE_expression);
						this.state = 40;
						if (!(this.precpred(this._ctx, 5))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 5)");
						}
						this.state = 41;
						this.match(arithmeticParser.POW);
						this.state = 42;
						this.expression(6);
						}
						break;

					case 2:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, arithmeticParser.RULE_expression);
						this.state = 43;
						if (!(this.precpred(this._ctx, 4))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 4)");
						}
						this.state = 44;
						_la = this._input.LA(1);
						if (!(_la === arithmeticParser.TIMES || _la === arithmeticParser.DIV)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 45;
						this.expression(5);
						}
						break;

					case 3:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, arithmeticParser.RULE_expression);
						this.state = 46;
						if (!(this.precpred(this._ctx, 3))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						}
						this.state = 47;
						_la = this._input.LA(1);
						if (!(_la === arithmeticParser.PLUS || _la === arithmeticParser.MINUS)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 48;
						this.expression(4);
						}
						break;
					}
					}
				}
				this.state = 53;
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
		this.enterRule(_localctx, 6, arithmeticParser.RULE_atom);
		try {
			this.state = 56;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case arithmeticParser.SCIENTIFIC_NUMBER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 54;
				this.scientific();
				}
				break;
			case arithmeticParser.VARIABLE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 55;
				this.variable();
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
	public scientific(): ScientificContext {
		let _localctx: ScientificContext = new ScientificContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, arithmeticParser.RULE_scientific);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 58;
			this.match(arithmeticParser.SCIENTIFIC_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
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
	public variable(): VariableContext {
		let _localctx: VariableContext = new VariableContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, arithmeticParser.RULE_variable);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 60;
			this.match(arithmeticParser.VARIABLE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
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
		this.enterRule(_localctx, 12, arithmeticParser.RULE_relop);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 62;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << arithmeticParser.GT) | (1 << arithmeticParser.LT) | (1 << arithmeticParser.EQ))) !== 0))) {
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

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 2:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 5);

		case 1:
			return this.precpred(this._ctx, 4);

		case 2:
			return this.precpred(this._ctx, 3);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x10C\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x03\x02\x07\x02\x12\n\x02\f\x02\x0E\x02\x15\v\x02\x03" +
		"\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x07\x04#\n\x04\f\x04\x0E\x04&\v\x04\x03\x04\x05\x04" +
		")\n\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x07\x044\n\x04\f\x04\x0E\x047\v\x04\x03\x05\x03\x05\x05\x05;" +
		"\n\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\b\x03\b\x03\b\x02\x02\x03\x06" +
		"\t\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x02\x05\x03\x02\x07" +
		"\b\x03\x02\t\n\x03\x02\v\r\x02B\x02\x13\x03\x02\x02\x02\x04\x18\x03\x02" +
		"\x02\x02\x06(\x03\x02\x02\x02\b:\x03\x02\x02\x02\n<\x03\x02\x02\x02\f" +
		">\x03\x02\x02\x02\x0E@\x03\x02\x02\x02\x10\x12\x05\x04\x03\x02\x11\x10" +
		"\x03\x02\x02\x02\x12\x15\x03\x02\x02\x02\x13\x11\x03\x02\x02\x02\x13\x14" +
		"\x03\x02\x02\x02\x14\x16\x03\x02\x02\x02\x15\x13\x03\x02\x02\x02\x16\x17" +
		"\x07\x02\x02\x03\x17\x03\x03\x02\x02\x02\x18\x19\x05\x06\x04\x02\x19\x1A" +
		"\x05\x0E\b\x02\x1A\x1B\x05\x06\x04\x02\x1B\x05\x03\x02\x02\x02\x1C\x1D" +
		"\b\x04\x01\x02\x1D\x1E\x07\x05\x02\x02\x1E\x1F\x05\x06\x04\x02\x1F \x07" +
		"\x06\x02\x02 )\x03\x02\x02\x02!#\t\x02\x02\x02\"!\x03\x02\x02\x02#&\x03" +
		"\x02\x02\x02$\"\x03\x02\x02\x02$%\x03\x02\x02\x02%\'\x03\x02\x02\x02&" +
		"$\x03\x02\x02\x02\')\x05\b\x05\x02(\x1C\x03\x02\x02\x02($\x03\x02\x02" +
		"\x02)5\x03\x02\x02\x02*+\f\x07\x02\x02+,\x07\x0F\x02\x02,4\x05\x06\x04" +
		"\b-.\f\x06\x02\x02./\t\x03\x02\x02/4\x05\x06\x04\x0701\f\x05\x02\x021" +
		"2\t\x02\x02\x0224\x05\x06\x04\x063*\x03\x02\x02\x023-\x03\x02\x02\x02" +
		"30\x03\x02\x02\x0247\x03\x02\x02\x0253\x03\x02\x02\x0256\x03\x02\x02\x02" +
		"6\x07\x03\x02\x02\x0275\x03\x02\x02\x028;\x05\n\x06\x029;\x05\f\x07\x02" +
		":8\x03\x02\x02\x02:9\x03\x02\x02\x02;\t\x03\x02\x02\x02<=\x07\x04\x02" +
		"\x02=\v\x03\x02\x02\x02>?\x07\x03\x02\x02?\r\x03\x02\x02\x02@A\t\x04\x02" +
		"\x02A\x0F\x03\x02\x02\x02\b\x13$(35:";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!arithmeticParser.__ATN) {
			arithmeticParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(arithmeticParser._serializedATN));
		}

		return arithmeticParser.__ATN;
	}

}

export class FileContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(arithmeticParser.EOF, 0); }
	public equation(): EquationContext[];
	public equation(i: number): EquationContext;
	public equation(i?: number): EquationContext | EquationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EquationContext);
		} else {
			return this.getRuleContext(i, EquationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return arithmeticParser.RULE_file; }
	// @Override
	public enterRule(listener: arithmeticListener): void {
		if (listener.enterFile) {
			listener.enterFile(this);
		}
	}
	// @Override
	public exitRule(listener: arithmeticListener): void {
		if (listener.exitFile) {
			listener.exitFile(this);
		}
	}
}


export class EquationContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public relop(): RelopContext {
		return this.getRuleContext(0, RelopContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return arithmeticParser.RULE_equation; }
	// @Override
	public enterRule(listener: arithmeticListener): void {
		if (listener.enterEquation) {
			listener.enterEquation(this);
		}
	}
	// @Override
	public exitRule(listener: arithmeticListener): void {
		if (listener.exitEquation) {
			listener.exitEquation(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public POW(): TerminalNode | undefined { return this.tryGetToken(arithmeticParser.POW, 0); }
	public TIMES(): TerminalNode | undefined { return this.tryGetToken(arithmeticParser.TIMES, 0); }
	public DIV(): TerminalNode | undefined { return this.tryGetToken(arithmeticParser.DIV, 0); }
	public PLUS(): TerminalNode[];
	public PLUS(i: number): TerminalNode;
	public PLUS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(arithmeticParser.PLUS);
		} else {
			return this.getToken(arithmeticParser.PLUS, i);
		}
	}
	public MINUS(): TerminalNode[];
	public MINUS(i: number): TerminalNode;
	public MINUS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(arithmeticParser.MINUS);
		} else {
			return this.getToken(arithmeticParser.MINUS, i);
		}
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(arithmeticParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(arithmeticParser.RPAREN, 0); }
	public atom(): AtomContext | undefined {
		return this.tryGetRuleContext(0, AtomContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return arithmeticParser.RULE_expression; }
	// @Override
	public enterRule(listener: arithmeticListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: arithmeticListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
}


export class AtomContext extends ParserRuleContext {
	public scientific(): ScientificContext | undefined {
		return this.tryGetRuleContext(0, ScientificContext);
	}
	public variable(): VariableContext | undefined {
		return this.tryGetRuleContext(0, VariableContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return arithmeticParser.RULE_atom; }
	// @Override
	public enterRule(listener: arithmeticListener): void {
		if (listener.enterAtom) {
			listener.enterAtom(this);
		}
	}
	// @Override
	public exitRule(listener: arithmeticListener): void {
		if (listener.exitAtom) {
			listener.exitAtom(this);
		}
	}
}


export class ScientificContext extends ParserRuleContext {
	public SCIENTIFIC_NUMBER(): TerminalNode { return this.getToken(arithmeticParser.SCIENTIFIC_NUMBER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return arithmeticParser.RULE_scientific; }
	// @Override
	public enterRule(listener: arithmeticListener): void {
		if (listener.enterScientific) {
			listener.enterScientific(this);
		}
	}
	// @Override
	public exitRule(listener: arithmeticListener): void {
		if (listener.exitScientific) {
			listener.exitScientific(this);
		}
	}
}


export class VariableContext extends ParserRuleContext {
	public VARIABLE(): TerminalNode { return this.getToken(arithmeticParser.VARIABLE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return arithmeticParser.RULE_variable; }
	// @Override
	public enterRule(listener: arithmeticListener): void {
		if (listener.enterVariable) {
			listener.enterVariable(this);
		}
	}
	// @Override
	public exitRule(listener: arithmeticListener): void {
		if (listener.exitVariable) {
			listener.exitVariable(this);
		}
	}
}


export class RelopContext extends ParserRuleContext {
	public EQ(): TerminalNode | undefined { return this.tryGetToken(arithmeticParser.EQ, 0); }
	public GT(): TerminalNode | undefined { return this.tryGetToken(arithmeticParser.GT, 0); }
	public LT(): TerminalNode | undefined { return this.tryGetToken(arithmeticParser.LT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return arithmeticParser.RULE_relop; }
	// @Override
	public enterRule(listener: arithmeticListener): void {
		if (listener.enterRelop) {
			listener.enterRelop(this);
		}
	}
	// @Override
	public exitRule(listener: arithmeticListener): void {
		if (listener.exitRelop) {
			listener.exitRelop(this);
		}
	}
}


