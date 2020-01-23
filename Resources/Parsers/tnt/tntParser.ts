// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/tnt/tnt.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { tntListener } from "./tntListener";
import { tntVisitor } from "./tntVisitor";


export class tntParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly ZERO = 8;
	public static readonly SUCCESSOR = 9;
	public static readonly A = 10;
	public static readonly B = 11;
	public static readonly C = 12;
	public static readonly D = 13;
	public static readonly E = 14;
	public static readonly PRIME = 15;
	public static readonly FOREVERY = 16;
	public static readonly EXISTS = 17;
	public static readonly WS = 18;
	public static readonly RULE_equation = 0;
	public static readonly RULE_atom = 1;
	public static readonly RULE_number = 2;
	public static readonly RULE_variable = 3;
	public static readonly RULE_expression = 4;
	public static readonly RULE_forevery = 5;
	public static readonly RULE_exists = 6;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"equation", "atom", "number", "variable", "expression", "forevery", "exists",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'='", "'+'", "'*'", "'('", "')'", "'~'", "':'", "'0'", "'S'", 
		"'a'", "'b'", "'c'", "'d'", "'e'", "'''", "'A'", "'E'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, "ZERO", "SUCCESSOR", "A", "B", "C", "D", "E", "PRIME", "FOREVERY", 
		"EXISTS", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(tntParser._LITERAL_NAMES, tntParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return tntParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "tnt.g4"; }

	// @Override
	public get ruleNames(): string[] { return tntParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return tntParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(tntParser._ATN, this);
	}
	// @RuleVersion(0)
	public equation(): EquationContext {
		let _localctx: EquationContext = new EquationContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, tntParser.RULE_equation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 14;
			this.expression(0);
			this.state = 15;
			this.match(tntParser.T__0);
			this.state = 16;
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
	// @RuleVersion(0)
	public atom(): AtomContext {
		let _localctx: AtomContext = new AtomContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, tntParser.RULE_atom);
		try {
			this.state = 20;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 18;
				this.number();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 19;
				this.variable();
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
	public number(): NumberContext {
		let _localctx: NumberContext = new NumberContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, tntParser.RULE_number);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 25;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === tntParser.SUCCESSOR) {
				{
				{
				this.state = 22;
				this.match(tntParser.SUCCESSOR);
				}
				}
				this.state = 27;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 28;
			this.match(tntParser.ZERO);
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
		this.enterRule(_localctx, 6, tntParser.RULE_variable);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 33;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === tntParser.SUCCESSOR) {
				{
				{
				this.state = 30;
				this.match(tntParser.SUCCESSOR);
				}
				}
				this.state = 35;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 36;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << tntParser.A) | (1 << tntParser.B) | (1 << tntParser.C) | (1 << tntParser.D) | (1 << tntParser.E))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 40;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 37;
					this.match(tntParser.PRIME);
					}
					}
				}
				this.state = 42;
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
		let _startState: number = 8;
		this.enterRecursionRule(_localctx, 8, tntParser.RULE_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 57;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case tntParser.ZERO:
			case tntParser.SUCCESSOR:
			case tntParser.A:
			case tntParser.B:
			case tntParser.C:
			case tntParser.D:
			case tntParser.E:
				{
				this.state = 44;
				this.atom();
				}
				break;
			case tntParser.T__3:
				{
				this.state = 45;
				this.match(tntParser.T__3);
				this.state = 46;
				this.expression(0);
				this.state = 47;
				this.match(tntParser.T__4);
				}
				break;
			case tntParser.T__5:
				{
				this.state = 49;
				this.match(tntParser.T__5);
				this.state = 50;
				this.expression(3);
				}
				break;
			case tntParser.FOREVERY:
				{
				this.state = 51;
				this.forevery();
				this.state = 52;
				this.expression(2);
				}
				break;
			case tntParser.EXISTS:
				{
				this.state = 54;
				this.exists();
				this.state = 55;
				this.expression(1);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 67;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 65;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
					case 1:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, tntParser.RULE_expression);
						this.state = 59;
						if (!(this.precpred(this._ctx, 6))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 6)");
						}
						this.state = 60;
						this.match(tntParser.T__1);
						this.state = 61;
						this.expression(7);
						}
						break;

					case 2:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, tntParser.RULE_expression);
						this.state = 62;
						if (!(this.precpred(this._ctx, 5))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 5)");
						}
						this.state = 63;
						this.match(tntParser.T__2);
						this.state = 64;
						this.expression(6);
						}
						break;
					}
					}
				}
				this.state = 69;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
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
	public forevery(): ForeveryContext {
		let _localctx: ForeveryContext = new ForeveryContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, tntParser.RULE_forevery);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 70;
			this.match(tntParser.FOREVERY);
			this.state = 71;
			this.variable();
			this.state = 72;
			this.match(tntParser.T__6);
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
	public exists(): ExistsContext {
		let _localctx: ExistsContext = new ExistsContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, tntParser.RULE_exists);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 74;
			this.match(tntParser.EXISTS);
			this.state = 75;
			this.variable();
			this.state = 76;
			this.match(tntParser.T__6);
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
		case 4:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 6);

		case 1:
			return this.precpred(this._ctx, 5);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x14Q\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x03\x02\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x05\x03" +
		"\x17\n\x03\x03\x04\x07\x04\x1A\n\x04\f\x04\x0E\x04\x1D\v\x04\x03\x04\x03" +
		"\x04\x03\x05\x07\x05\"\n\x05\f\x05\x0E\x05%\v\x05\x03\x05\x03\x05\x07" +
		"\x05)\n\x05\f\x05\x0E\x05,\v\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x05\x06<\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x07\x06" +
		"D\n\x06\f\x06\x0E\x06G\v\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03" +
		"\b\x03\b\x03\b\x03\b\x02\x02\x03\n\t\x02\x02\x04\x02\x06\x02\b\x02\n\x02" +
		"\f\x02\x0E\x02\x02\x03\x03\x02\f\x10\x02S\x02\x10\x03\x02\x02\x02\x04" +
		"\x16\x03\x02\x02\x02\x06\x1B\x03\x02\x02\x02\b#\x03\x02\x02\x02\n;\x03" +
		"\x02\x02\x02\fH\x03\x02\x02\x02\x0EL\x03\x02\x02\x02\x10\x11\x05\n\x06" +
		"\x02\x11\x12\x07\x03\x02\x02\x12\x13\x05\n\x06\x02\x13\x03\x03\x02\x02" +
		"\x02\x14\x17\x05\x06\x04\x02\x15\x17\x05\b\x05\x02\x16\x14\x03\x02\x02" +
		"\x02\x16\x15\x03\x02\x02\x02\x17\x05\x03\x02\x02\x02\x18\x1A\x07\v\x02" +
		"\x02\x19\x18\x03\x02\x02\x02\x1A\x1D\x03\x02\x02\x02\x1B\x19\x03\x02\x02" +
		"\x02\x1B\x1C\x03\x02\x02\x02\x1C\x1E\x03\x02\x02\x02\x1D\x1B\x03\x02\x02" +
		"\x02\x1E\x1F\x07\n\x02\x02\x1F\x07\x03\x02\x02\x02 \"\x07\v\x02\x02! " +
		"\x03\x02\x02\x02\"%\x03\x02\x02\x02#!\x03\x02\x02\x02#$\x03\x02\x02\x02" +
		"$&\x03\x02\x02\x02%#\x03\x02\x02\x02&*\t\x02\x02\x02\')\x07\x11\x02\x02" +
		"(\'\x03\x02\x02\x02),\x03\x02\x02\x02*(\x03\x02\x02\x02*+\x03\x02\x02" +
		"\x02+\t\x03\x02\x02\x02,*\x03\x02\x02\x02-.\b\x06\x01\x02.<\x05\x04\x03" +
		"\x02/0\x07\x06\x02\x0201\x05\n\x06\x0212\x07\x07\x02\x022<\x03\x02\x02" +
		"\x0234\x07\b\x02\x024<\x05\n\x06\x0556\x05\f\x07\x0267\x05\n\x06\x047" +
		"<\x03\x02\x02\x0289\x05\x0E\b\x029:\x05\n\x06\x03:<\x03\x02\x02\x02;-" +
		"\x03\x02\x02\x02;/\x03\x02\x02\x02;3\x03\x02\x02\x02;5\x03\x02\x02\x02" +
		";8\x03\x02\x02\x02<E\x03\x02\x02\x02=>\f\b\x02\x02>?\x07\x04\x02\x02?" +
		"D\x05\n\x06\t@A\f\x07\x02\x02AB\x07\x05\x02\x02BD\x05\n\x06\bC=\x03\x02" +
		"\x02\x02C@\x03\x02\x02\x02DG\x03\x02\x02\x02EC\x03\x02\x02\x02EF\x03\x02" +
		"\x02\x02F\v\x03\x02\x02\x02GE\x03\x02\x02\x02HI\x07\x12\x02\x02IJ\x05" +
		"\b\x05\x02JK\x07\t\x02\x02K\r\x03\x02\x02\x02LM\x07\x13\x02\x02MN\x05" +
		"\b\x05\x02NO\x07\t\x02\x02O\x0F\x03\x02\x02\x02\t\x16\x1B#*;CE";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!tntParser.__ATN) {
			tntParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(tntParser._serializedATN));
		}

		return tntParser.__ATN;
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tntParser.RULE_equation; }
	// @Override
	public enterRule(listener: tntListener): void {
		if (listener.enterEquation) {
			listener.enterEquation(this);
		}
	}
	// @Override
	public exitRule(listener: tntListener): void {
		if (listener.exitEquation) {
			listener.exitEquation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tntVisitor<Result>): Result {
		if (visitor.visitEquation) {
			return visitor.visitEquation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AtomContext extends ParserRuleContext {
	public number(): NumberContext | undefined {
		return this.tryGetRuleContext(0, NumberContext);
	}
	public variable(): VariableContext | undefined {
		return this.tryGetRuleContext(0, VariableContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tntParser.RULE_atom; }
	// @Override
	public enterRule(listener: tntListener): void {
		if (listener.enterAtom) {
			listener.enterAtom(this);
		}
	}
	// @Override
	public exitRule(listener: tntListener): void {
		if (listener.exitAtom) {
			listener.exitAtom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tntVisitor<Result>): Result {
		if (visitor.visitAtom) {
			return visitor.visitAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NumberContext extends ParserRuleContext {
	public ZERO(): TerminalNode { return this.getToken(tntParser.ZERO, 0); }
	public SUCCESSOR(): TerminalNode[];
	public SUCCESSOR(i: number): TerminalNode;
	public SUCCESSOR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(tntParser.SUCCESSOR);
		} else {
			return this.getToken(tntParser.SUCCESSOR, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tntParser.RULE_number; }
	// @Override
	public enterRule(listener: tntListener): void {
		if (listener.enterNumber) {
			listener.enterNumber(this);
		}
	}
	// @Override
	public exitRule(listener: tntListener): void {
		if (listener.exitNumber) {
			listener.exitNumber(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tntVisitor<Result>): Result {
		if (visitor.visitNumber) {
			return visitor.visitNumber(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableContext extends ParserRuleContext {
	public A(): TerminalNode | undefined { return this.tryGetToken(tntParser.A, 0); }
	public B(): TerminalNode | undefined { return this.tryGetToken(tntParser.B, 0); }
	public C(): TerminalNode | undefined { return this.tryGetToken(tntParser.C, 0); }
	public D(): TerminalNode | undefined { return this.tryGetToken(tntParser.D, 0); }
	public E(): TerminalNode | undefined { return this.tryGetToken(tntParser.E, 0); }
	public SUCCESSOR(): TerminalNode[];
	public SUCCESSOR(i: number): TerminalNode;
	public SUCCESSOR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(tntParser.SUCCESSOR);
		} else {
			return this.getToken(tntParser.SUCCESSOR, i);
		}
	}
	public PRIME(): TerminalNode[];
	public PRIME(i: number): TerminalNode;
	public PRIME(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(tntParser.PRIME);
		} else {
			return this.getToken(tntParser.PRIME, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tntParser.RULE_variable; }
	// @Override
	public enterRule(listener: tntListener): void {
		if (listener.enterVariable) {
			listener.enterVariable(this);
		}
	}
	// @Override
	public exitRule(listener: tntListener): void {
		if (listener.exitVariable) {
			listener.exitVariable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tntVisitor<Result>): Result {
		if (visitor.visitVariable) {
			return visitor.visitVariable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public atom(): AtomContext | undefined {
		return this.tryGetRuleContext(0, AtomContext);
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
	public forevery(): ForeveryContext | undefined {
		return this.tryGetRuleContext(0, ForeveryContext);
	}
	public exists(): ExistsContext | undefined {
		return this.tryGetRuleContext(0, ExistsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tntParser.RULE_expression; }
	// @Override
	public enterRule(listener: tntListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: tntListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tntVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForeveryContext extends ParserRuleContext {
	public FOREVERY(): TerminalNode { return this.getToken(tntParser.FOREVERY, 0); }
	public variable(): VariableContext {
		return this.getRuleContext(0, VariableContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tntParser.RULE_forevery; }
	// @Override
	public enterRule(listener: tntListener): void {
		if (listener.enterForevery) {
			listener.enterForevery(this);
		}
	}
	// @Override
	public exitRule(listener: tntListener): void {
		if (listener.exitForevery) {
			listener.exitForevery(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tntVisitor<Result>): Result {
		if (visitor.visitForevery) {
			return visitor.visitForevery(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExistsContext extends ParserRuleContext {
	public EXISTS(): TerminalNode { return this.getToken(tntParser.EXISTS, 0); }
	public variable(): VariableContext {
		return this.getRuleContext(0, VariableContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tntParser.RULE_exists; }
	// @Override
	public enterRule(listener: tntListener): void {
		if (listener.enterExists) {
			listener.enterExists(this);
		}
	}
	// @Override
	public exitRule(listener: tntListener): void {
		if (listener.exitExists) {
			listener.exitExists(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tntVisitor<Result>): Result {
		if (visitor.visitExists) {
			return visitor.visitExists(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


