// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/fol/fol.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { folListener } from "./folListener";

export class folParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly LPAREN = 6;
	public static readonly RPAREN = 7;
	public static readonly EQUAL = 8;
	public static readonly NOT = 9;
	public static readonly FORALL = 10;
	public static readonly EXISTS = 11;
	public static readonly CHARACTER = 12;
	public static readonly CONJ = 13;
	public static readonly DISJ = 14;
	public static readonly IMPL = 15;
	public static readonly BICOND = 16;
	public static readonly ENDLINE = 17;
	public static readonly WHITESPACE = 18;
	public static readonly RULE_condition = 0;
	public static readonly RULE_formula = 1;
	public static readonly RULE_term = 2;
	public static readonly RULE_bin_connective = 3;
	public static readonly RULE_variable = 4;
	public static readonly RULE_pred_constant = 5;
	public static readonly RULE_ind_constant = 6;
	public static readonly RULE_func_constant = 7;
	public static readonly RULE_separator = 8;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"condition", "formula", "term", "bin_connective", "variable", "pred_constant", 
		"ind_constant", "func_constant", "separator",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'?'", "'_'", "'#'", "'.'", "','", "'('", "')'", "'='", "'!'", 
		"'Forall'", "'Exists'", undefined, "'\\'", "'^'", "'->'", "'<->'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, "LPAREN", 
		"RPAREN", "EQUAL", "NOT", "FORALL", "EXISTS", "CHARACTER", "CONJ", "DISJ", 
		"IMPL", "BICOND", "ENDLINE", "WHITESPACE",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(folParser._LITERAL_NAMES, folParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return folParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "fol.g4"; }

	// @Override
	public get ruleNames(): string[] { return folParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return folParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(folParser._ATN, this);
	}
	// @RuleVersion(0)
	public condition(): ConditionContext {
		let _localctx: ConditionContext = new ConditionContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, folParser.RULE_condition);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 18;
			this.formula(0);
			this.state = 23;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 19;
					this.match(folParser.ENDLINE);
					this.state = 20;
					this.formula(0);
					}
					}
				}
				this.state = 25;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
			}
			this.state = 29;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === folParser.ENDLINE) {
				{
				{
				this.state = 26;
				this.match(folParser.ENDLINE);
				}
				}
				this.state = 31;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 32;
			this.match(folParser.EOF);
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

	public formula(): FormulaContext;
	public formula(_p: number): FormulaContext;
	// @RuleVersion(0)
	public formula(_p?: number): FormulaContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: FormulaContext = new FormulaContext(this._ctx, _parentState);
		let _prevctx: FormulaContext = _localctx;
		let _startState: number = 2;
		this.enterRecursionRule(_localctx, 2, folParser.RULE_formula, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 71;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				{
				this.state = 35;
				this.match(folParser.NOT);
				this.state = 36;
				this.formula(0);
				this.state = 37;
				this.bin_connective();
				this.state = 38;
				this.formula(6);
				}
				break;

			case 2:
				{
				this.state = 40;
				this.match(folParser.NOT);
				this.state = 41;
				this.formula(5);
				}
				break;

			case 3:
				{
				this.state = 42;
				this.match(folParser.FORALL);
				this.state = 43;
				this.match(folParser.LPAREN);
				this.state = 44;
				this.variable();
				this.state = 45;
				this.match(folParser.RPAREN);
				this.state = 46;
				this.formula(4);
				}
				break;

			case 4:
				{
				this.state = 48;
				this.match(folParser.EXISTS);
				this.state = 49;
				this.match(folParser.LPAREN);
				this.state = 50;
				this.variable();
				this.state = 51;
				this.match(folParser.RPAREN);
				this.state = 52;
				this.formula(3);
				}
				break;

			case 5:
				{
				this.state = 54;
				this.pred_constant();
				this.state = 55;
				this.match(folParser.LPAREN);
				this.state = 56;
				this.term();
				this.state = 62;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === folParser.T__4) {
					{
					{
					this.state = 57;
					this.separator();
					this.state = 58;
					this.term();
					}
					}
					this.state = 64;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 65;
				this.match(folParser.RPAREN);
				}
				break;

			case 6:
				{
				this.state = 67;
				this.term();
				this.state = 68;
				this.match(folParser.EQUAL);
				this.state = 69;
				this.term();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 79;
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
					_localctx = new FormulaContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, folParser.RULE_formula);
					this.state = 73;
					if (!(this.precpred(this._ctx, 7))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 7)");
					}
					this.state = 74;
					this.bin_connective();
					this.state = 75;
					this.formula(8);
					}
					}
				}
				this.state = 81;
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
	public term(): TermContext {
		let _localctx: TermContext = new TermContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, folParser.RULE_term);
		let _la: number;
		try {
			this.state = 97;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case folParser.T__2:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 82;
				this.ind_constant();
				}
				break;
			case folParser.T__0:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 83;
				this.variable();
				}
				break;
			case folParser.T__3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 84;
				this.func_constant();
				this.state = 85;
				this.match(folParser.LPAREN);
				this.state = 86;
				this.term();
				this.state = 92;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === folParser.T__4) {
					{
					{
					this.state = 87;
					this.separator();
					this.state = 88;
					this.term();
					}
					}
					this.state = 94;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 95;
				this.match(folParser.RPAREN);
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
	public bin_connective(): Bin_connectiveContext {
		let _localctx: Bin_connectiveContext = new Bin_connectiveContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, folParser.RULE_bin_connective);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 99;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << folParser.CONJ) | (1 << folParser.DISJ) | (1 << folParser.IMPL) | (1 << folParser.BICOND))) !== 0))) {
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
	public variable(): VariableContext {
		let _localctx: VariableContext = new VariableContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, folParser.RULE_variable);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 101;
			this.match(folParser.T__0);
			this.state = 105;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 102;
					this.match(folParser.CHARACTER);
					}
					}
				}
				this.state = 107;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
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
	public pred_constant(): Pred_constantContext {
		let _localctx: Pred_constantContext = new Pred_constantContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, folParser.RULE_pred_constant);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 108;
			this.match(folParser.T__1);
			this.state = 112;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === folParser.CHARACTER) {
				{
				{
				this.state = 109;
				this.match(folParser.CHARACTER);
				}
				}
				this.state = 114;
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
	public ind_constant(): Ind_constantContext {
		let _localctx: Ind_constantContext = new Ind_constantContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, folParser.RULE_ind_constant);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 115;
			this.match(folParser.T__2);
			this.state = 119;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 116;
					this.match(folParser.CHARACTER);
					}
					}
				}
				this.state = 121;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
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
	public func_constant(): Func_constantContext {
		let _localctx: Func_constantContext = new Func_constantContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, folParser.RULE_func_constant);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 122;
			this.match(folParser.T__3);
			this.state = 126;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === folParser.CHARACTER) {
				{
				{
				this.state = 123;
				this.match(folParser.CHARACTER);
				}
				}
				this.state = 128;
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
	public separator(): SeparatorContext {
		let _localctx: SeparatorContext = new SeparatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, folParser.RULE_separator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 129;
			this.match(folParser.T__4);
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
			return this.formula_sempred(_localctx as FormulaContext, predIndex);
		}
		return true;
	}
	private formula_sempred(_localctx: FormulaContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 7);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x14\x86\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x03\x02\x03\x02\x03\x02\x07\x02\x18" +
		"\n\x02\f\x02\x0E\x02\x1B\v\x02\x03\x02\x07\x02\x1E\n\x02\f\x02\x0E\x02" +
		"!\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x07\x03?\n\x03\f\x03\x0E\x03B\v\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x05\x03J\n\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x07\x03P\n\x03\f\x03\x0E\x03S\v\x03\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x07\x04]\n\x04\f\x04\x0E\x04`\v\x04\x03" +
		"\x04\x03\x04\x05\x04d\n\x04\x03\x05\x03\x05\x03\x06\x03\x06\x07\x06j\n" +
		"\x06\f\x06\x0E\x06m\v\x06\x03\x07\x03\x07\x07\x07q\n\x07\f\x07\x0E\x07" +
		"t\v\x07\x03\b\x03\b\x07\bx\n\b\f\b\x0E\b{\v\b\x03\t\x03\t\x07\t\x7F\n" +
		"\t\f\t\x0E\t\x82\v\t\x03\n\x03\n\x03\n\x02\x02\x03\x04\v\x02\x02\x04\x02" +
		"\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x02\x03\x03\x02\x0F" +
		"\x12\x02\x8C\x02\x14\x03\x02\x02\x02\x04I\x03\x02\x02\x02\x06c\x03\x02" +
		"\x02\x02\be\x03\x02\x02\x02\ng\x03\x02\x02\x02\fn\x03\x02\x02\x02\x0E" +
		"u\x03\x02\x02\x02\x10|\x03\x02\x02\x02\x12\x83\x03\x02\x02\x02\x14\x19" +
		"\x05\x04\x03\x02\x15\x16\x07\x13\x02\x02\x16\x18\x05\x04\x03\x02\x17\x15" +
		"\x03\x02\x02\x02\x18\x1B\x03\x02\x02\x02\x19\x17\x03\x02\x02\x02\x19\x1A" +
		"\x03\x02\x02\x02\x1A\x1F\x03\x02\x02\x02\x1B\x19\x03\x02\x02\x02\x1C\x1E" +
		"\x07\x13\x02\x02\x1D\x1C\x03\x02\x02\x02\x1E!\x03\x02\x02\x02\x1F\x1D" +
		"\x03\x02\x02\x02\x1F \x03\x02\x02\x02 \"\x03\x02\x02\x02!\x1F\x03\x02" +
		"\x02\x02\"#\x07\x02\x02\x03#\x03\x03\x02\x02\x02$%\b\x03\x01\x02%&\x07" +
		"\v\x02\x02&\'\x05\x04\x03\x02\'(\x05\b\x05\x02()\x05\x04\x03\b)J\x03\x02" +
		"\x02\x02*+\x07\v\x02\x02+J\x05\x04\x03\x07,-\x07\f\x02\x02-.\x07\b\x02" +
		"\x02./\x05\n\x06\x02/0\x07\t\x02\x0201\x05\x04\x03\x061J\x03\x02\x02\x02" +
		"23\x07\r\x02\x0234\x07\b\x02\x0245\x05\n\x06\x0256\x07\t\x02\x0267\x05" +
		"\x04\x03\x057J\x03\x02\x02\x0289\x05\f\x07\x029:\x07\b\x02\x02:@\x05\x06" +
		"\x04\x02;<\x05\x12\n\x02<=\x05\x06\x04\x02=?\x03\x02\x02\x02>;\x03\x02" +
		"\x02\x02?B\x03\x02\x02\x02@>\x03\x02\x02\x02@A\x03\x02\x02\x02AC\x03\x02" +
		"\x02\x02B@\x03\x02\x02\x02CD\x07\t\x02\x02DJ\x03\x02\x02\x02EF\x05\x06" +
		"\x04\x02FG\x07\n\x02\x02GH\x05\x06\x04\x02HJ\x03\x02\x02\x02I$\x03\x02" +
		"\x02\x02I*\x03\x02\x02\x02I,\x03\x02\x02\x02I2\x03\x02\x02\x02I8\x03\x02" +
		"\x02\x02IE\x03\x02\x02\x02JQ\x03\x02\x02\x02KL\f\t\x02\x02LM\x05\b\x05" +
		"\x02MN\x05\x04\x03\nNP\x03\x02\x02\x02OK\x03\x02\x02\x02PS\x03\x02\x02" +
		"\x02QO\x03\x02\x02\x02QR\x03\x02\x02\x02R\x05\x03\x02\x02\x02SQ\x03\x02" +
		"\x02\x02Td\x05\x0E\b\x02Ud\x05\n\x06\x02VW\x05\x10\t\x02WX\x07\b\x02\x02" +
		"X^\x05\x06\x04\x02YZ\x05\x12\n\x02Z[\x05\x06\x04\x02[]\x03\x02\x02\x02" +
		"\\Y\x03\x02\x02\x02]`\x03\x02\x02\x02^\\\x03\x02\x02\x02^_\x03\x02\x02" +
		"\x02_a\x03\x02\x02\x02`^\x03\x02\x02\x02ab\x07\t\x02\x02bd\x03\x02\x02" +
		"\x02cT\x03\x02\x02\x02cU\x03\x02\x02\x02cV\x03\x02\x02\x02d\x07\x03\x02" +
		"\x02\x02ef\t\x02\x02\x02f\t\x03\x02\x02\x02gk\x07\x03\x02\x02hj\x07\x0E" +
		"\x02\x02ih\x03\x02\x02\x02jm\x03\x02\x02\x02ki\x03\x02\x02\x02kl\x03\x02" +
		"\x02\x02l\v\x03\x02\x02\x02mk\x03\x02\x02\x02nr\x07\x04\x02\x02oq\x07" +
		"\x0E\x02\x02po\x03\x02\x02\x02qt\x03\x02\x02\x02rp\x03\x02\x02\x02rs\x03" +
		"\x02\x02\x02s\r\x03\x02\x02\x02tr\x03\x02\x02\x02uy\x07\x05\x02\x02vx" +
		"\x07\x0E\x02\x02wv\x03\x02\x02\x02x{\x03\x02\x02\x02yw\x03\x02\x02\x02" +
		"yz\x03\x02\x02\x02z\x0F\x03\x02\x02\x02{y\x03\x02\x02\x02|\x80\x07\x06" +
		"\x02\x02}\x7F\x07\x0E\x02\x02~}\x03\x02\x02\x02\x7F\x82\x03\x02\x02\x02" +
		"\x80~\x03\x02\x02\x02\x80\x81\x03\x02\x02\x02\x81\x11\x03\x02\x02\x02" +
		"\x82\x80\x03\x02\x02\x02\x83\x84\x07\x07\x02\x02\x84\x13\x03\x02\x02\x02" +
		"\r\x19\x1F@IQ^ckry\x80";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!folParser.__ATN) {
			folParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(folParser._serializedATN));
		}

		return folParser.__ATN;
	}

}

export class ConditionContext extends ParserRuleContext {
	public formula(): FormulaContext[];
	public formula(i: number): FormulaContext;
	public formula(i?: number): FormulaContext | FormulaContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FormulaContext);
		} else {
			return this.getRuleContext(i, FormulaContext);
		}
	}
	public EOF(): TerminalNode { return this.getToken(folParser.EOF, 0); }
	public ENDLINE(): TerminalNode[];
	public ENDLINE(i: number): TerminalNode;
	public ENDLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(folParser.ENDLINE);
		} else {
			return this.getToken(folParser.ENDLINE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return folParser.RULE_condition; }
	// @Override
	public enterRule(listener: folListener): void {
		if (listener.enterCondition) {
			listener.enterCondition(this);
		}
	}
	// @Override
	public exitRule(listener: folListener): void {
		if (listener.exitCondition) {
			listener.exitCondition(this);
		}
	}
}


export class FormulaContext extends ParserRuleContext {
	public formula(): FormulaContext[];
	public formula(i: number): FormulaContext;
	public formula(i?: number): FormulaContext | FormulaContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FormulaContext);
		} else {
			return this.getRuleContext(i, FormulaContext);
		}
	}
	public bin_connective(): Bin_connectiveContext | undefined {
		return this.tryGetRuleContext(0, Bin_connectiveContext);
	}
	public NOT(): TerminalNode | undefined { return this.tryGetToken(folParser.NOT, 0); }
	public FORALL(): TerminalNode | undefined { return this.tryGetToken(folParser.FORALL, 0); }
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(folParser.LPAREN, 0); }
	public variable(): VariableContext | undefined {
		return this.tryGetRuleContext(0, VariableContext);
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(folParser.RPAREN, 0); }
	public EXISTS(): TerminalNode | undefined { return this.tryGetToken(folParser.EXISTS, 0); }
	public pred_constant(): Pred_constantContext | undefined {
		return this.tryGetRuleContext(0, Pred_constantContext);
	}
	public term(): TermContext[];
	public term(i: number): TermContext;
	public term(i?: number): TermContext | TermContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TermContext);
		} else {
			return this.getRuleContext(i, TermContext);
		}
	}
	public separator(): SeparatorContext[];
	public separator(i: number): SeparatorContext;
	public separator(i?: number): SeparatorContext | SeparatorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SeparatorContext);
		} else {
			return this.getRuleContext(i, SeparatorContext);
		}
	}
	public EQUAL(): TerminalNode | undefined { return this.tryGetToken(folParser.EQUAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return folParser.RULE_formula; }
	// @Override
	public enterRule(listener: folListener): void {
		if (listener.enterFormula) {
			listener.enterFormula(this);
		}
	}
	// @Override
	public exitRule(listener: folListener): void {
		if (listener.exitFormula) {
			listener.exitFormula(this);
		}
	}
}


export class TermContext extends ParserRuleContext {
	public ind_constant(): Ind_constantContext | undefined {
		return this.tryGetRuleContext(0, Ind_constantContext);
	}
	public variable(): VariableContext | undefined {
		return this.tryGetRuleContext(0, VariableContext);
	}
	public func_constant(): Func_constantContext | undefined {
		return this.tryGetRuleContext(0, Func_constantContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(folParser.LPAREN, 0); }
	public term(): TermContext[];
	public term(i: number): TermContext;
	public term(i?: number): TermContext | TermContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TermContext);
		} else {
			return this.getRuleContext(i, TermContext);
		}
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(folParser.RPAREN, 0); }
	public separator(): SeparatorContext[];
	public separator(i: number): SeparatorContext;
	public separator(i?: number): SeparatorContext | SeparatorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SeparatorContext);
		} else {
			return this.getRuleContext(i, SeparatorContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return folParser.RULE_term; }
	// @Override
	public enterRule(listener: folListener): void {
		if (listener.enterTerm) {
			listener.enterTerm(this);
		}
	}
	// @Override
	public exitRule(listener: folListener): void {
		if (listener.exitTerm) {
			listener.exitTerm(this);
		}
	}
}


export class Bin_connectiveContext extends ParserRuleContext {
	public CONJ(): TerminalNode | undefined { return this.tryGetToken(folParser.CONJ, 0); }
	public DISJ(): TerminalNode | undefined { return this.tryGetToken(folParser.DISJ, 0); }
	public IMPL(): TerminalNode | undefined { return this.tryGetToken(folParser.IMPL, 0); }
	public BICOND(): TerminalNode | undefined { return this.tryGetToken(folParser.BICOND, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return folParser.RULE_bin_connective; }
	// @Override
	public enterRule(listener: folListener): void {
		if (listener.enterBin_connective) {
			listener.enterBin_connective(this);
		}
	}
	// @Override
	public exitRule(listener: folListener): void {
		if (listener.exitBin_connective) {
			listener.exitBin_connective(this);
		}
	}
}


export class VariableContext extends ParserRuleContext {
	public CHARACTER(): TerminalNode[];
	public CHARACTER(i: number): TerminalNode;
	public CHARACTER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(folParser.CHARACTER);
		} else {
			return this.getToken(folParser.CHARACTER, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return folParser.RULE_variable; }
	// @Override
	public enterRule(listener: folListener): void {
		if (listener.enterVariable) {
			listener.enterVariable(this);
		}
	}
	// @Override
	public exitRule(listener: folListener): void {
		if (listener.exitVariable) {
			listener.exitVariable(this);
		}
	}
}


export class Pred_constantContext extends ParserRuleContext {
	public CHARACTER(): TerminalNode[];
	public CHARACTER(i: number): TerminalNode;
	public CHARACTER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(folParser.CHARACTER);
		} else {
			return this.getToken(folParser.CHARACTER, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return folParser.RULE_pred_constant; }
	// @Override
	public enterRule(listener: folListener): void {
		if (listener.enterPred_constant) {
			listener.enterPred_constant(this);
		}
	}
	// @Override
	public exitRule(listener: folListener): void {
		if (listener.exitPred_constant) {
			listener.exitPred_constant(this);
		}
	}
}


export class Ind_constantContext extends ParserRuleContext {
	public CHARACTER(): TerminalNode[];
	public CHARACTER(i: number): TerminalNode;
	public CHARACTER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(folParser.CHARACTER);
		} else {
			return this.getToken(folParser.CHARACTER, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return folParser.RULE_ind_constant; }
	// @Override
	public enterRule(listener: folListener): void {
		if (listener.enterInd_constant) {
			listener.enterInd_constant(this);
		}
	}
	// @Override
	public exitRule(listener: folListener): void {
		if (listener.exitInd_constant) {
			listener.exitInd_constant(this);
		}
	}
}


export class Func_constantContext extends ParserRuleContext {
	public CHARACTER(): TerminalNode[];
	public CHARACTER(i: number): TerminalNode;
	public CHARACTER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(folParser.CHARACTER);
		} else {
			return this.getToken(folParser.CHARACTER, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return folParser.RULE_func_constant; }
	// @Override
	public enterRule(listener: folListener): void {
		if (listener.enterFunc_constant) {
			listener.enterFunc_constant(this);
		}
	}
	// @Override
	public exitRule(listener: folListener): void {
		if (listener.exitFunc_constant) {
			listener.exitFunc_constant(this);
		}
	}
}


export class SeparatorContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return folParser.RULE_separator; }
	// @Override
	public enterRule(listener: folListener): void {
		if (listener.enterSeparator) {
			listener.enterSeparator(this);
		}
	}
	// @Override
	public exitRule(listener: folListener): void {
		if (listener.exitSeparator) {
			listener.exitSeparator(this);
		}
	}
}


