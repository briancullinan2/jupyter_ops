// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/calculator/calculator.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { calculatorListener } from "./calculatorListener";
import { calculatorVisitor } from "./calculatorVisitor";


export class calculatorParser extends Parser {
	public static readonly COS = 1;
	public static readonly SIN = 2;
	public static readonly TAN = 3;
	public static readonly ACOS = 4;
	public static readonly ASIN = 5;
	public static readonly ATAN = 6;
	public static readonly LN = 7;
	public static readonly LOG = 8;
	public static readonly SQRT = 9;
	public static readonly LPAREN = 10;
	public static readonly RPAREN = 11;
	public static readonly PLUS = 12;
	public static readonly MINUS = 13;
	public static readonly TIMES = 14;
	public static readonly DIV = 15;
	public static readonly GT = 16;
	public static readonly LT = 17;
	public static readonly EQ = 18;
	public static readonly COMMA = 19;
	public static readonly POINT = 20;
	public static readonly POW = 21;
	public static readonly PI = 22;
	public static readonly EULER = 23;
	public static readonly I = 24;
	public static readonly VARIABLE = 25;
	public static readonly SCIENTIFIC_NUMBER = 26;
	public static readonly WS = 27;
	public static readonly RULE_equation = 0;
	public static readonly RULE_expression = 1;
	public static readonly RULE_multiplyingExpression = 2;
	public static readonly RULE_powExpression = 3;
	public static readonly RULE_signedAtom = 4;
	public static readonly RULE_atom = 5;
	public static readonly RULE_scientific = 6;
	public static readonly RULE_constant = 7;
	public static readonly RULE_variable = 8;
	public static readonly RULE_func = 9;
	public static readonly RULE_funcname = 10;
	public static readonly RULE_relop = 11;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"equation", "expression", "multiplyingExpression", "powExpression", "signedAtom", 
		"atom", "scientific", "constant", "variable", "func", "funcname", "relop",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'cos'", "'sin'", "'tan'", "'acos'", "'asin'", "'atan'", "'ln'", 
		"'log'", "'sqrt'", "'('", "')'", "'+'", "'-'", "'*'", "'/'", "'>'", "'<'", 
		"'='", "','", "'.'", "'^'", "'pi'", undefined, "'i'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "COS", "SIN", "TAN", "ACOS", "ASIN", "ATAN", "LN", "LOG", "SQRT", 
		"LPAREN", "RPAREN", "PLUS", "MINUS", "TIMES", "DIV", "GT", "LT", "EQ", 
		"COMMA", "POINT", "POW", "PI", "EULER", "I", "VARIABLE", "SCIENTIFIC_NUMBER", 
		"WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(calculatorParser._LITERAL_NAMES, calculatorParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return calculatorParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "calculator.g4"; }

	// @Override
	public get ruleNames(): string[] { return calculatorParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return calculatorParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(calculatorParser._ATN, this);
	}
	// @RuleVersion(0)
	public equation(): EquationContext {
		let _localctx: EquationContext = new EquationContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, calculatorParser.RULE_equation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 24;
			this.expression();
			this.state = 25;
			this.relop();
			this.state = 26;
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
		this.enterRule(_localctx, 2, calculatorParser.RULE_expression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 28;
			this.multiplyingExpression();
			this.state = 33;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === calculatorParser.PLUS || _la === calculatorParser.MINUS) {
				{
				{
				this.state = 29;
				_la = this._input.LA(1);
				if (!(_la === calculatorParser.PLUS || _la === calculatorParser.MINUS)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 30;
				this.multiplyingExpression();
				}
				}
				this.state = 35;
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
	public multiplyingExpression(): MultiplyingExpressionContext {
		let _localctx: MultiplyingExpressionContext = new MultiplyingExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, calculatorParser.RULE_multiplyingExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 36;
			this.powExpression();
			this.state = 41;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === calculatorParser.TIMES || _la === calculatorParser.DIV) {
				{
				{
				this.state = 37;
				_la = this._input.LA(1);
				if (!(_la === calculatorParser.TIMES || _la === calculatorParser.DIV)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 38;
				this.powExpression();
				}
				}
				this.state = 43;
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
	public powExpression(): PowExpressionContext {
		let _localctx: PowExpressionContext = new PowExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, calculatorParser.RULE_powExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 44;
			this.signedAtom();
			this.state = 49;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === calculatorParser.POW) {
				{
				{
				this.state = 45;
				this.match(calculatorParser.POW);
				this.state = 46;
				this.signedAtom();
				}
				}
				this.state = 51;
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
	public signedAtom(): SignedAtomContext {
		let _localctx: SignedAtomContext = new SignedAtomContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, calculatorParser.RULE_signedAtom);
		try {
			this.state = 58;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case calculatorParser.PLUS:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 52;
				this.match(calculatorParser.PLUS);
				this.state = 53;
				this.signedAtom();
				}
				break;
			case calculatorParser.MINUS:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 54;
				this.match(calculatorParser.MINUS);
				this.state = 55;
				this.signedAtom();
				}
				break;
			case calculatorParser.COS:
			case calculatorParser.SIN:
			case calculatorParser.TAN:
			case calculatorParser.ACOS:
			case calculatorParser.ASIN:
			case calculatorParser.ATAN:
			case calculatorParser.LN:
			case calculatorParser.LOG:
			case calculatorParser.SQRT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 56;
				this.func();
				}
				break;
			case calculatorParser.LPAREN:
			case calculatorParser.PI:
			case calculatorParser.EULER:
			case calculatorParser.I:
			case calculatorParser.VARIABLE:
			case calculatorParser.SCIENTIFIC_NUMBER:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 57;
				this.atom();
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
	public atom(): AtomContext {
		let _localctx: AtomContext = new AtomContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, calculatorParser.RULE_atom);
		try {
			this.state = 67;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case calculatorParser.SCIENTIFIC_NUMBER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 60;
				this.scientific();
				}
				break;
			case calculatorParser.VARIABLE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 61;
				this.variable();
				}
				break;
			case calculatorParser.PI:
			case calculatorParser.EULER:
			case calculatorParser.I:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 62;
				this.constant();
				}
				break;
			case calculatorParser.LPAREN:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 63;
				this.match(calculatorParser.LPAREN);
				this.state = 64;
				this.expression();
				this.state = 65;
				this.match(calculatorParser.RPAREN);
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
		this.enterRule(_localctx, 12, calculatorParser.RULE_scientific);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 69;
			this.match(calculatorParser.SCIENTIFIC_NUMBER);
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
		this.enterRule(_localctx, 14, calculatorParser.RULE_constant);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 71;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << calculatorParser.PI) | (1 << calculatorParser.EULER) | (1 << calculatorParser.I))) !== 0))) {
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
		this.enterRule(_localctx, 16, calculatorParser.RULE_variable);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 73;
			this.match(calculatorParser.VARIABLE);
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
		this.enterRule(_localctx, 18, calculatorParser.RULE_func);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 75;
			this.funcname();
			this.state = 76;
			this.match(calculatorParser.LPAREN);
			this.state = 77;
			this.expression();
			this.state = 82;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === calculatorParser.COMMA) {
				{
				{
				this.state = 78;
				this.match(calculatorParser.COMMA);
				this.state = 79;
				this.expression();
				}
				}
				this.state = 84;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 85;
			this.match(calculatorParser.RPAREN);
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
	public funcname(): FuncnameContext {
		let _localctx: FuncnameContext = new FuncnameContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, calculatorParser.RULE_funcname);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 87;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << calculatorParser.COS) | (1 << calculatorParser.SIN) | (1 << calculatorParser.TAN) | (1 << calculatorParser.ACOS) | (1 << calculatorParser.ASIN) | (1 << calculatorParser.ATAN) | (1 << calculatorParser.LN) | (1 << calculatorParser.LOG) | (1 << calculatorParser.SQRT))) !== 0))) {
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
	public relop(): RelopContext {
		let _localctx: RelopContext = new RelopContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, calculatorParser.RULE_relop);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 89;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << calculatorParser.GT) | (1 << calculatorParser.LT) | (1 << calculatorParser.EQ))) !== 0))) {
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

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x1D^\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x03" +
		"\x02\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x07\x03\"\n\x03\f" +
		"\x03\x0E\x03%\v\x03\x03\x04\x03\x04\x03\x04\x07\x04*\n\x04\f\x04\x0E\x04" +
		"-\v\x04\x03\x05\x03\x05\x03\x05\x07\x052\n\x05\f\x05\x0E\x055\v\x05\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06=\n\x06\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07F\n\x07\x03\b\x03" +
		"\b\x03\t\x03\t\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x07\vS\n\v\f" +
		"\v\x0E\vV\v\v\x03\v\x03\v\x03\f\x03\f\x03\r\x03\r\x03\r\x02\x02\x02\x0E" +
		"\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14" +
		"\x02\x16\x02\x18\x02\x02\x07\x03\x02\x0E\x0F\x03\x02\x10\x11\x03\x02\x18" +
		"\x1A\x03\x02\x03\v\x03\x02\x12\x14\x02[\x02\x1A\x03\x02\x02\x02\x04\x1E" +
		"\x03\x02\x02\x02\x06&\x03\x02\x02\x02\b.\x03\x02\x02\x02\n<\x03\x02\x02" +
		"\x02\fE\x03\x02\x02\x02\x0EG\x03\x02\x02\x02\x10I\x03\x02\x02\x02\x12" +
		"K\x03\x02\x02\x02\x14M\x03\x02\x02\x02\x16Y\x03\x02\x02\x02\x18[\x03\x02" +
		"\x02\x02\x1A\x1B\x05\x04\x03\x02\x1B\x1C\x05\x18\r\x02\x1C\x1D\x05\x04" +
		"\x03\x02\x1D\x03\x03\x02\x02\x02\x1E#\x05\x06\x04\x02\x1F \t\x02\x02\x02" +
		" \"\x05\x06\x04\x02!\x1F\x03\x02\x02\x02\"%\x03\x02\x02\x02#!\x03\x02" +
		"\x02\x02#$\x03\x02\x02\x02$\x05\x03\x02\x02\x02%#\x03\x02\x02\x02&+\x05" +
		"\b\x05\x02\'(\t\x03\x02\x02(*\x05\b\x05\x02)\'\x03\x02\x02\x02*-\x03\x02" +
		"\x02\x02+)\x03\x02\x02\x02+,\x03\x02\x02\x02,\x07\x03\x02\x02\x02-+\x03" +
		"\x02\x02\x02.3\x05\n\x06\x02/0\x07\x17\x02\x0202\x05\n\x06\x021/\x03\x02" +
		"\x02\x0225\x03\x02\x02\x0231\x03\x02\x02\x0234\x03\x02\x02\x024\t\x03" +
		"\x02\x02\x0253\x03\x02\x02\x0267\x07\x0E\x02\x027=\x05\n\x06\x0289\x07" +
		"\x0F\x02\x029=\x05\n\x06\x02:=\x05\x14\v\x02;=\x05\f\x07\x02<6\x03\x02" +
		"\x02\x02<8\x03\x02\x02\x02<:\x03\x02\x02\x02<;\x03\x02\x02\x02=\v\x03" +
		"\x02\x02\x02>F\x05\x0E\b\x02?F\x05\x12\n\x02@F\x05\x10\t\x02AB\x07\f\x02" +
		"\x02BC\x05\x04\x03\x02CD\x07\r\x02\x02DF\x03\x02\x02\x02E>\x03\x02\x02" +
		"\x02E?\x03\x02\x02\x02E@\x03\x02\x02\x02EA\x03\x02\x02\x02F\r\x03\x02" +
		"\x02\x02GH\x07\x1C\x02\x02H\x0F\x03\x02\x02\x02IJ\t\x04\x02\x02J\x11\x03" +
		"\x02\x02\x02KL\x07\x1B\x02\x02L\x13\x03\x02\x02\x02MN\x05\x16\f\x02NO" +
		"\x07\f\x02\x02OT\x05\x04\x03\x02PQ\x07\x15\x02\x02QS\x05\x04\x03\x02R" +
		"P\x03\x02\x02\x02SV\x03\x02\x02\x02TR\x03\x02\x02\x02TU\x03\x02\x02\x02" +
		"UW\x03\x02\x02\x02VT\x03\x02\x02\x02WX\x07\r\x02\x02X\x15\x03\x02\x02" +
		"\x02YZ\t\x05\x02\x02Z\x17\x03\x02\x02\x02[\\\t\x06\x02\x02\\\x19\x03\x02" +
		"\x02\x02\b#+3<ET";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!calculatorParser.__ATN) {
			calculatorParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(calculatorParser._serializedATN));
		}

		return calculatorParser.__ATN;
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
	public get ruleIndex(): number { return calculatorParser.RULE_equation; }
	// @Override
	public enterRule(listener: calculatorListener): void {
		if (listener.enterEquation) {
			listener.enterEquation(this);
		}
	}
	// @Override
	public exitRule(listener: calculatorListener): void {
		if (listener.exitEquation) {
			listener.exitEquation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: calculatorVisitor<Result>): Result {
		if (visitor.visitEquation) {
			return visitor.visitEquation(this);
		} else {
			return visitor.visitChildren(this);
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
	public PLUS(): TerminalNode[];
	public PLUS(i: number): TerminalNode;
	public PLUS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(calculatorParser.PLUS);
		} else {
			return this.getToken(calculatorParser.PLUS, i);
		}
	}
	public MINUS(): TerminalNode[];
	public MINUS(i: number): TerminalNode;
	public MINUS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(calculatorParser.MINUS);
		} else {
			return this.getToken(calculatorParser.MINUS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return calculatorParser.RULE_expression; }
	// @Override
	public enterRule(listener: calculatorListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: calculatorListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: calculatorVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MultiplyingExpressionContext extends ParserRuleContext {
	public powExpression(): PowExpressionContext[];
	public powExpression(i: number): PowExpressionContext;
	public powExpression(i?: number): PowExpressionContext | PowExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PowExpressionContext);
		} else {
			return this.getRuleContext(i, PowExpressionContext);
		}
	}
	public TIMES(): TerminalNode[];
	public TIMES(i: number): TerminalNode;
	public TIMES(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(calculatorParser.TIMES);
		} else {
			return this.getToken(calculatorParser.TIMES, i);
		}
	}
	public DIV(): TerminalNode[];
	public DIV(i: number): TerminalNode;
	public DIV(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(calculatorParser.DIV);
		} else {
			return this.getToken(calculatorParser.DIV, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return calculatorParser.RULE_multiplyingExpression; }
	// @Override
	public enterRule(listener: calculatorListener): void {
		if (listener.enterMultiplyingExpression) {
			listener.enterMultiplyingExpression(this);
		}
	}
	// @Override
	public exitRule(listener: calculatorListener): void {
		if (listener.exitMultiplyingExpression) {
			listener.exitMultiplyingExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: calculatorVisitor<Result>): Result {
		if (visitor.visitMultiplyingExpression) {
			return visitor.visitMultiplyingExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PowExpressionContext extends ParserRuleContext {
	public signedAtom(): SignedAtomContext[];
	public signedAtom(i: number): SignedAtomContext;
	public signedAtom(i?: number): SignedAtomContext | SignedAtomContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SignedAtomContext);
		} else {
			return this.getRuleContext(i, SignedAtomContext);
		}
	}
	public POW(): TerminalNode[];
	public POW(i: number): TerminalNode;
	public POW(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(calculatorParser.POW);
		} else {
			return this.getToken(calculatorParser.POW, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return calculatorParser.RULE_powExpression; }
	// @Override
	public enterRule(listener: calculatorListener): void {
		if (listener.enterPowExpression) {
			listener.enterPowExpression(this);
		}
	}
	// @Override
	public exitRule(listener: calculatorListener): void {
		if (listener.exitPowExpression) {
			listener.exitPowExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: calculatorVisitor<Result>): Result {
		if (visitor.visitPowExpression) {
			return visitor.visitPowExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SignedAtomContext extends ParserRuleContext {
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(calculatorParser.PLUS, 0); }
	public signedAtom(): SignedAtomContext | undefined {
		return this.tryGetRuleContext(0, SignedAtomContext);
	}
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(calculatorParser.MINUS, 0); }
	public func(): FuncContext | undefined {
		return this.tryGetRuleContext(0, FuncContext);
	}
	public atom(): AtomContext | undefined {
		return this.tryGetRuleContext(0, AtomContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return calculatorParser.RULE_signedAtom; }
	// @Override
	public enterRule(listener: calculatorListener): void {
		if (listener.enterSignedAtom) {
			listener.enterSignedAtom(this);
		}
	}
	// @Override
	public exitRule(listener: calculatorListener): void {
		if (listener.exitSignedAtom) {
			listener.exitSignedAtom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: calculatorVisitor<Result>): Result {
		if (visitor.visitSignedAtom) {
			return visitor.visitSignedAtom(this);
		} else {
			return visitor.visitChildren(this);
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
	public constant(): ConstantContext | undefined {
		return this.tryGetRuleContext(0, ConstantContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(calculatorParser.LPAREN, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(calculatorParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return calculatorParser.RULE_atom; }
	// @Override
	public enterRule(listener: calculatorListener): void {
		if (listener.enterAtom) {
			listener.enterAtom(this);
		}
	}
	// @Override
	public exitRule(listener: calculatorListener): void {
		if (listener.exitAtom) {
			listener.exitAtom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: calculatorVisitor<Result>): Result {
		if (visitor.visitAtom) {
			return visitor.visitAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ScientificContext extends ParserRuleContext {
	public SCIENTIFIC_NUMBER(): TerminalNode { return this.getToken(calculatorParser.SCIENTIFIC_NUMBER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return calculatorParser.RULE_scientific; }
	// @Override
	public enterRule(listener: calculatorListener): void {
		if (listener.enterScientific) {
			listener.enterScientific(this);
		}
	}
	// @Override
	public exitRule(listener: calculatorListener): void {
		if (listener.exitScientific) {
			listener.exitScientific(this);
		}
	}
	// @Override
	public accept<Result>(visitor: calculatorVisitor<Result>): Result {
		if (visitor.visitScientific) {
			return visitor.visitScientific(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstantContext extends ParserRuleContext {
	public PI(): TerminalNode | undefined { return this.tryGetToken(calculatorParser.PI, 0); }
	public EULER(): TerminalNode | undefined { return this.tryGetToken(calculatorParser.EULER, 0); }
	public I(): TerminalNode | undefined { return this.tryGetToken(calculatorParser.I, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return calculatorParser.RULE_constant; }
	// @Override
	public enterRule(listener: calculatorListener): void {
		if (listener.enterConstant) {
			listener.enterConstant(this);
		}
	}
	// @Override
	public exitRule(listener: calculatorListener): void {
		if (listener.exitConstant) {
			listener.exitConstant(this);
		}
	}
	// @Override
	public accept<Result>(visitor: calculatorVisitor<Result>): Result {
		if (visitor.visitConstant) {
			return visitor.visitConstant(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableContext extends ParserRuleContext {
	public VARIABLE(): TerminalNode { return this.getToken(calculatorParser.VARIABLE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return calculatorParser.RULE_variable; }
	// @Override
	public enterRule(listener: calculatorListener): void {
		if (listener.enterVariable) {
			listener.enterVariable(this);
		}
	}
	// @Override
	public exitRule(listener: calculatorListener): void {
		if (listener.exitVariable) {
			listener.exitVariable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: calculatorVisitor<Result>): Result {
		if (visitor.visitVariable) {
			return visitor.visitVariable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FuncContext extends ParserRuleContext {
	public funcname(): FuncnameContext {
		return this.getRuleContext(0, FuncnameContext);
	}
	public LPAREN(): TerminalNode { return this.getToken(calculatorParser.LPAREN, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(calculatorParser.RPAREN, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(calculatorParser.COMMA);
		} else {
			return this.getToken(calculatorParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return calculatorParser.RULE_func; }
	// @Override
	public enterRule(listener: calculatorListener): void {
		if (listener.enterFunc) {
			listener.enterFunc(this);
		}
	}
	// @Override
	public exitRule(listener: calculatorListener): void {
		if (listener.exitFunc) {
			listener.exitFunc(this);
		}
	}
	// @Override
	public accept<Result>(visitor: calculatorVisitor<Result>): Result {
		if (visitor.visitFunc) {
			return visitor.visitFunc(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FuncnameContext extends ParserRuleContext {
	public COS(): TerminalNode | undefined { return this.tryGetToken(calculatorParser.COS, 0); }
	public TAN(): TerminalNode | undefined { return this.tryGetToken(calculatorParser.TAN, 0); }
	public SIN(): TerminalNode | undefined { return this.tryGetToken(calculatorParser.SIN, 0); }
	public ACOS(): TerminalNode | undefined { return this.tryGetToken(calculatorParser.ACOS, 0); }
	public ATAN(): TerminalNode | undefined { return this.tryGetToken(calculatorParser.ATAN, 0); }
	public ASIN(): TerminalNode | undefined { return this.tryGetToken(calculatorParser.ASIN, 0); }
	public LOG(): TerminalNode | undefined { return this.tryGetToken(calculatorParser.LOG, 0); }
	public LN(): TerminalNode | undefined { return this.tryGetToken(calculatorParser.LN, 0); }
	public SQRT(): TerminalNode | undefined { return this.tryGetToken(calculatorParser.SQRT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return calculatorParser.RULE_funcname; }
	// @Override
	public enterRule(listener: calculatorListener): void {
		if (listener.enterFuncname) {
			listener.enterFuncname(this);
		}
	}
	// @Override
	public exitRule(listener: calculatorListener): void {
		if (listener.exitFuncname) {
			listener.exitFuncname(this);
		}
	}
	// @Override
	public accept<Result>(visitor: calculatorVisitor<Result>): Result {
		if (visitor.visitFuncname) {
			return visitor.visitFuncname(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RelopContext extends ParserRuleContext {
	public EQ(): TerminalNode | undefined { return this.tryGetToken(calculatorParser.EQ, 0); }
	public GT(): TerminalNode | undefined { return this.tryGetToken(calculatorParser.GT, 0); }
	public LT(): TerminalNode | undefined { return this.tryGetToken(calculatorParser.LT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return calculatorParser.RULE_relop; }
	// @Override
	public enterRule(listener: calculatorListener): void {
		if (listener.enterRelop) {
			listener.enterRelop(this);
		}
	}
	// @Override
	public exitRule(listener: calculatorListener): void {
		if (listener.exitRelop) {
			listener.exitRelop(this);
		}
	}
	// @Override
	public accept<Result>(visitor: calculatorVisitor<Result>): Result {
		if (visitor.visitRelop) {
			return visitor.visitRelop(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


