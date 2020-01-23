// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/snobol/snobol.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { snobolListener } from "./snobolListener";

export class snobolParser extends Parser {
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
	public static readonly COMMA = 36;
	public static readonly LPAREN = 37;
	public static readonly RPAREN = 38;
	public static readonly AMP = 39;
	public static readonly PLUS = 40;
	public static readonly MINUS = 41;
	public static readonly TIMES = 42;
	public static readonly DIV = 43;
	public static readonly POW = 44;
	public static readonly EQ = 45;
	public static readonly COLON = 46;
	public static readonly END = 47;
	public static readonly STRINGLITERAL1 = 48;
	public static readonly STRINGLITERAL2 = 49;
	public static readonly STRING = 50;
	public static readonly INTEGER = 51;
	public static readonly REAL = 52;
	public static readonly COMMENT = 53;
	public static readonly EOL = 54;
	public static readonly WS = 55;
	public static readonly RULE_prog = 0;
	public static readonly RULE_lin = 1;
	public static readonly RULE_line = 2;
	public static readonly RULE_label = 3;
	public static readonly RULE_subject = 4;
	public static readonly RULE_pattern = 5;
	public static readonly RULE_expression = 6;
	public static readonly RULE_multiplyingExpression = 7;
	public static readonly RULE_powExpression = 8;
	public static readonly RULE_atom = 9;
	public static readonly RULE_command = 10;
	public static readonly RULE_ident = 11;
	public static readonly RULE_differ = 12;
	public static readonly RULE_eq = 13;
	public static readonly RULE_ne = 14;
	public static readonly RULE_ge = 15;
	public static readonly RULE_gt = 16;
	public static readonly RULE_le = 17;
	public static readonly RULE_lt = 18;
	public static readonly RULE_integer = 19;
	public static readonly RULE_lgt = 20;
	public static readonly RULE_atan = 21;
	public static readonly RULE_chop = 22;
	public static readonly RULE_cos = 23;
	public static readonly RULE_exp = 24;
	public static readonly RULE_ln = 25;
	public static readonly RULE_remdr = 26;
	public static readonly RULE_sin = 27;
	public static readonly RULE_tan = 28;
	public static readonly RULE_dupl = 29;
	public static readonly RULE_reverse = 30;
	public static readonly RULE_date = 31;
	public static readonly RULE_replace = 32;
	public static readonly RULE_size = 33;
	public static readonly RULE_trim = 34;
	public static readonly RULE_array = 35;
	public static readonly RULE_convert = 36;
	public static readonly RULE_table = 37;
	public static readonly RULE_sort = 38;
	public static readonly RULE_break_ = 39;
	public static readonly RULE_transfer = 40;
	public static readonly RULE_transferpre = 41;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"prog", "lin", "line", "label", "subject", "pattern", "expression", "multiplyingExpression", 
		"powExpression", "atom", "command", "ident", "differ", "eq", "ne", "ge", 
		"gt", "le", "lt", "integer", "lgt", "atan", "chop", "cos", "exp", "ln", 
		"remdr", "sin", "tan", "dupl", "reverse", "date", "replace", "size", "trim", 
		"array", "convert", "table", "sort", "break_", "transfer", "transferpre",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'['", "']'", "'ident'", "'differ'", "'eq'", "'ne'", "'ge'", 
		"'gt'", "'le'", "'lt'", "'integer'", "'lgt'", "'atan'", "'chop'", "'cos'", 
		"'exp'", "'ln'", "'remdr'", "'sin'", "'tan'", "'dupl'", "'reverse'", "'date'", 
		"'replace'", "'size'", "'trim'", "'array'", "'convert'", "'table'", "'sort'", 
		"'break'", "'f'", "'F'", "'s'", "'S'", "','", "'('", "')'", "'&'", "'+'", 
		"'-'", "'*'", "'/'", "'^'", "'='", "':'", "'END'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, "COMMA", "LPAREN", "RPAREN", "AMP", "PLUS", "MINUS", "TIMES", 
		"DIV", "POW", "EQ", "COLON", "END", "STRINGLITERAL1", "STRINGLITERAL2", 
		"STRING", "INTEGER", "REAL", "COMMENT", "EOL", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(snobolParser._LITERAL_NAMES, snobolParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return snobolParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "snobol.g4"; }

	// @Override
	public get ruleNames(): string[] { return snobolParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return snobolParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(snobolParser._ATN, this);
	}
	// @RuleVersion(0)
	public prog(): ProgContext {
		let _localctx: ProgContext = new ProgContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, snobolParser.RULE_prog);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 85;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 84;
				this.lin();
				}
				}
				this.state = 87;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (snobolParser.AMP - 39)) | (1 << (snobolParser.COLON - 39)) | (1 << (snobolParser.END - 39)) | (1 << (snobolParser.STRING - 39)) | (1 << (snobolParser.COMMENT - 39)) | (1 << (snobolParser.EOL - 39)))) !== 0));
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
	public lin(): LinContext {
		let _localctx: LinContext = new LinContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, snobolParser.RULE_lin);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 90;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (snobolParser.AMP - 39)) | (1 << (snobolParser.COLON - 39)) | (1 << (snobolParser.END - 39)) | (1 << (snobolParser.STRING - 39)) | (1 << (snobolParser.COMMENT - 39)))) !== 0)) {
				{
				this.state = 89;
				this.line();
				}
			}

			this.state = 92;
			this.match(snobolParser.EOL);
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
		this.enterRule(_localctx, 4, snobolParser.RULE_line);
		let _la: number;
		try {
			this.state = 116;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case snobolParser.AMP:
			case snobolParser.STRING:
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 95;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
				case 1:
					{
					this.state = 94;
					this.label();
					}
					break;
				}
				this.state = 97;
				this.subject();
				this.state = 99;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === snobolParser.STRINGLITERAL1 || _la === snobolParser.STRINGLITERAL2) {
					{
					this.state = 98;
					this.pattern();
					}
				}

				this.state = 107;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === snobolParser.EQ) {
					{
					this.state = 101;
					this.match(snobolParser.EQ);
					this.state = 103;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 102;
						this.expression();
						}
						}
						this.state = 105;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << snobolParser.T__0) | (1 << snobolParser.T__2) | (1 << snobolParser.T__3) | (1 << snobolParser.T__4) | (1 << snobolParser.T__5) | (1 << snobolParser.T__6) | (1 << snobolParser.T__8) | (1 << snobolParser.T__9) | (1 << snobolParser.T__10) | (1 << snobolParser.T__11) | (1 << snobolParser.T__12) | (1 << snobolParser.T__13) | (1 << snobolParser.T__14) | (1 << snobolParser.T__15) | (1 << snobolParser.T__16) | (1 << snobolParser.T__17) | (1 << snobolParser.T__18) | (1 << snobolParser.T__19) | (1 << snobolParser.T__20) | (1 << snobolParser.T__21) | (1 << snobolParser.T__22) | (1 << snobolParser.T__23) | (1 << snobolParser.T__24) | (1 << snobolParser.T__25) | (1 << snobolParser.T__26) | (1 << snobolParser.T__28) | (1 << snobolParser.T__29) | (1 << snobolParser.T__30))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (snobolParser.LPAREN - 37)) | (1 << (snobolParser.AMP - 37)) | (1 << (snobolParser.STRINGLITERAL1 - 37)) | (1 << (snobolParser.STRINGLITERAL2 - 37)) | (1 << (snobolParser.STRING - 37)) | (1 << (snobolParser.INTEGER - 37)))) !== 0));
					}
				}

				this.state = 111;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === snobolParser.COLON) {
					{
					this.state = 109;
					this.match(snobolParser.COLON);
					this.state = 110;
					this.transfer();
					}
				}

				}
				}
				break;
			case snobolParser.COLON:
				this.enterOuterAlt(_localctx, 2);
				{
				{
				this.state = 113;
				this.match(snobolParser.COLON);
				this.state = 114;
				this.transfer();
				}
				}
				break;
			case snobolParser.END:
			case snobolParser.COMMENT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 115;
				_la = this._input.LA(1);
				if (!(_la === snobolParser.END || _la === snobolParser.COMMENT)) {
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
	public label(): LabelContext {
		let _localctx: LabelContext = new LabelContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, snobolParser.RULE_label);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 118;
			this.match(snobolParser.STRING);
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
	public subject(): SubjectContext {
		let _localctx: SubjectContext = new SubjectContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, snobolParser.RULE_subject);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 121;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === snobolParser.AMP) {
				{
				this.state = 120;
				this.match(snobolParser.AMP);
				}
			}

			this.state = 123;
			this.match(snobolParser.STRING);
			this.state = 134;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				{
				this.state = 124;
				this.match(snobolParser.T__0);
				this.state = 125;
				this.match(snobolParser.STRING);
				this.state = 130;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === snobolParser.COMMA) {
					{
					{
					this.state = 126;
					this.match(snobolParser.COMMA);
					this.state = 127;
					this.match(snobolParser.STRING);
					}
					}
					this.state = 132;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 133;
				this.match(snobolParser.T__1);
				}
				break;
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
	public pattern(): PatternContext {
		let _localctx: PatternContext = new PatternContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, snobolParser.RULE_pattern);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 136;
			_la = this._input.LA(1);
			if (!(_la === snobolParser.STRINGLITERAL1 || _la === snobolParser.STRINGLITERAL2)) {
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
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, snobolParser.RULE_expression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 138;
			this.multiplyingExpression();
			this.state = 143;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 139;
					_la = this._input.LA(1);
					if (!(_la === snobolParser.PLUS || _la === snobolParser.MINUS)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 140;
					this.multiplyingExpression();
					}
					}
				}
				this.state = 145;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
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
		this.enterRule(_localctx, 14, snobolParser.RULE_multiplyingExpression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 146;
			this.powExpression();
			this.state = 151;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 147;
					_la = this._input.LA(1);
					if (!(_la === snobolParser.TIMES || _la === snobolParser.DIV)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 148;
					this.powExpression();
					}
					}
				}
				this.state = 153;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
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
		this.enterRule(_localctx, 16, snobolParser.RULE_powExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 154;
			this.atom();
			this.state = 157;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === snobolParser.POW) {
				{
				this.state = 155;
				this.match(snobolParser.POW);
				this.state = 156;
				this.expression();
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
	public atom(): AtomContext {
		let _localctx: AtomContext = new AtomContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, snobolParser.RULE_atom);
		let _la: number;
		try {
			this.state = 177;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case snobolParser.STRINGLITERAL1:
			case snobolParser.STRINGLITERAL2:
			case snobolParser.INTEGER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 159;
				_la = this._input.LA(1);
				if (!(((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & ((1 << (snobolParser.STRINGLITERAL1 - 48)) | (1 << (snobolParser.STRINGLITERAL2 - 48)) | (1 << (snobolParser.INTEGER - 48)))) !== 0))) {
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
			case snobolParser.AMP:
			case snobolParser.STRING:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 160;
				this.subject();
				}
				break;
			case snobolParser.T__2:
			case snobolParser.T__3:
			case snobolParser.T__4:
			case snobolParser.T__5:
			case snobolParser.T__6:
			case snobolParser.T__8:
			case snobolParser.T__9:
			case snobolParser.T__10:
			case snobolParser.T__11:
			case snobolParser.T__12:
			case snobolParser.T__13:
			case snobolParser.T__14:
			case snobolParser.T__15:
			case snobolParser.T__16:
			case snobolParser.T__17:
			case snobolParser.T__18:
			case snobolParser.T__19:
			case snobolParser.T__20:
			case snobolParser.T__21:
			case snobolParser.T__22:
			case snobolParser.T__23:
			case snobolParser.T__24:
			case snobolParser.T__25:
			case snobolParser.T__26:
			case snobolParser.T__28:
			case snobolParser.T__29:
			case snobolParser.T__30:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 161;
				this.command();
				}
				break;
			case snobolParser.T__0:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 162;
				this.match(snobolParser.T__0);
				this.state = 163;
				this.expression();
				this.state = 168;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === snobolParser.COMMA) {
					{
					{
					this.state = 164;
					this.match(snobolParser.COMMA);
					this.state = 165;
					this.expression();
					}
					}
					this.state = 170;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 171;
				this.match(snobolParser.T__1);
				}
				break;
			case snobolParser.LPAREN:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 173;
				this.match(snobolParser.LPAREN);
				this.state = 174;
				this.expression();
				this.state = 175;
				this.match(snobolParser.RPAREN);
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
	public command(): CommandContext {
		let _localctx: CommandContext = new CommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, snobolParser.RULE_command);
		try {
			this.state = 206;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case snobolParser.T__2:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 179;
				this.ident();
				}
				break;
			case snobolParser.T__3:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 180;
				this.differ();
				}
				break;
			case snobolParser.T__4:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 181;
				this.eq();
				}
				break;
			case snobolParser.T__5:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 182;
				this.ne();
				}
				break;
			case snobolParser.T__6:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 183;
				this.ge();
				}
				break;
			case snobolParser.T__8:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 184;
				this.le();
				}
				break;
			case snobolParser.T__9:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 185;
				this.lt();
				}
				break;
			case snobolParser.T__10:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 186;
				this.integer();
				}
				break;
			case snobolParser.T__11:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 187;
				this.lgt();
				}
				break;
			case snobolParser.T__12:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 188;
				this.atan();
				}
				break;
			case snobolParser.T__13:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 189;
				this.chop();
				}
				break;
			case snobolParser.T__14:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 190;
				this.cos();
				}
				break;
			case snobolParser.T__15:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 191;
				this.exp();
				}
				break;
			case snobolParser.T__16:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 192;
				this.ln();
				}
				break;
			case snobolParser.T__17:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 193;
				this.remdr();
				}
				break;
			case snobolParser.T__18:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 194;
				this.sin();
				}
				break;
			case snobolParser.T__19:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 195;
				this.tan();
				}
				break;
			case snobolParser.T__22:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 196;
				this.date();
				}
				break;
			case snobolParser.T__20:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 197;
				this.dupl();
				}
				break;
			case snobolParser.T__21:
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 198;
				this.reverse();
				}
				break;
			case snobolParser.T__23:
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 199;
				this.replace();
				}
				break;
			case snobolParser.T__24:
				this.enterOuterAlt(_localctx, 22);
				{
				this.state = 200;
				this.size();
				}
				break;
			case snobolParser.T__25:
				this.enterOuterAlt(_localctx, 23);
				{
				this.state = 201;
				this.trim();
				}
				break;
			case snobolParser.T__26:
				this.enterOuterAlt(_localctx, 24);
				{
				this.state = 202;
				this.array();
				}
				break;
			case snobolParser.T__29:
				this.enterOuterAlt(_localctx, 25);
				{
				this.state = 203;
				this.sort();
				}
				break;
			case snobolParser.T__28:
				this.enterOuterAlt(_localctx, 26);
				{
				this.state = 204;
				this.table();
				}
				break;
			case snobolParser.T__30:
				this.enterOuterAlt(_localctx, 27);
				{
				this.state = 205;
				this.break_();
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
		this.enterRule(_localctx, 22, snobolParser.RULE_ident);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 208;
			this.match(snobolParser.T__2);
			this.state = 209;
			this.match(snobolParser.LPAREN);
			this.state = 210;
			this.expression();
			this.state = 211;
			this.match(snobolParser.RPAREN);
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
	public differ(): DifferContext {
		let _localctx: DifferContext = new DifferContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, snobolParser.RULE_differ);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 213;
			this.match(snobolParser.T__3);
			this.state = 214;
			this.match(snobolParser.LPAREN);
			this.state = 215;
			this.expression();
			this.state = 216;
			this.match(snobolParser.RPAREN);
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
	public eq(): EqContext {
		let _localctx: EqContext = new EqContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, snobolParser.RULE_eq);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 218;
			this.match(snobolParser.T__4);
			this.state = 219;
			this.match(snobolParser.LPAREN);
			this.state = 220;
			this.expression();
			this.state = 221;
			this.match(snobolParser.RPAREN);
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
	public ne(): NeContext {
		let _localctx: NeContext = new NeContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, snobolParser.RULE_ne);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 223;
			this.match(snobolParser.T__5);
			this.state = 224;
			this.match(snobolParser.LPAREN);
			this.state = 225;
			this.expression();
			this.state = 226;
			this.match(snobolParser.RPAREN);
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
	public ge(): GeContext {
		let _localctx: GeContext = new GeContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, snobolParser.RULE_ge);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 228;
			this.match(snobolParser.T__6);
			this.state = 229;
			this.match(snobolParser.LPAREN);
			this.state = 230;
			this.expression();
			this.state = 231;
			this.match(snobolParser.RPAREN);
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
	public gt(): GtContext {
		let _localctx: GtContext = new GtContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, snobolParser.RULE_gt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 233;
			this.match(snobolParser.T__7);
			this.state = 234;
			this.match(snobolParser.LPAREN);
			this.state = 235;
			this.expression();
			this.state = 236;
			this.match(snobolParser.RPAREN);
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
	public le(): LeContext {
		let _localctx: LeContext = new LeContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, snobolParser.RULE_le);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 238;
			this.match(snobolParser.T__8);
			this.state = 239;
			this.match(snobolParser.LPAREN);
			this.state = 240;
			this.expression();
			this.state = 241;
			this.match(snobolParser.RPAREN);
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
		this.enterRule(_localctx, 36, snobolParser.RULE_lt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 243;
			this.match(snobolParser.T__9);
			this.state = 244;
			this.match(snobolParser.LPAREN);
			this.state = 245;
			this.expression();
			this.state = 246;
			this.match(snobolParser.RPAREN);
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
		this.enterRule(_localctx, 38, snobolParser.RULE_integer);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 248;
			this.match(snobolParser.T__10);
			this.state = 249;
			this.match(snobolParser.LPAREN);
			this.state = 250;
			this.expression();
			this.state = 251;
			this.match(snobolParser.RPAREN);
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
	public lgt(): LgtContext {
		let _localctx: LgtContext = new LgtContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, snobolParser.RULE_lgt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 253;
			this.match(snobolParser.T__11);
			this.state = 254;
			this.match(snobolParser.LPAREN);
			this.state = 255;
			this.expression();
			this.state = 256;
			this.match(snobolParser.RPAREN);
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
	public atan(): AtanContext {
		let _localctx: AtanContext = new AtanContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, snobolParser.RULE_atan);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 258;
			this.match(snobolParser.T__12);
			this.state = 259;
			this.match(snobolParser.LPAREN);
			this.state = 260;
			this.expression();
			this.state = 261;
			this.match(snobolParser.RPAREN);
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
	public chop(): ChopContext {
		let _localctx: ChopContext = new ChopContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, snobolParser.RULE_chop);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 263;
			this.match(snobolParser.T__13);
			this.state = 264;
			this.match(snobolParser.LPAREN);
			this.state = 265;
			this.expression();
			this.state = 266;
			this.match(snobolParser.RPAREN);
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
	public cos(): CosContext {
		let _localctx: CosContext = new CosContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, snobolParser.RULE_cos);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 268;
			this.match(snobolParser.T__14);
			this.state = 269;
			this.match(snobolParser.LPAREN);
			this.state = 270;
			this.expression();
			this.state = 271;
			this.match(snobolParser.RPAREN);
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
	public exp(): ExpContext {
		let _localctx: ExpContext = new ExpContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, snobolParser.RULE_exp);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 273;
			this.match(snobolParser.T__15);
			this.state = 274;
			this.match(snobolParser.LPAREN);
			this.state = 275;
			this.expression();
			this.state = 276;
			this.match(snobolParser.RPAREN);
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
	public ln(): LnContext {
		let _localctx: LnContext = new LnContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, snobolParser.RULE_ln);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 278;
			this.match(snobolParser.T__16);
			this.state = 279;
			this.match(snobolParser.LPAREN);
			this.state = 280;
			this.expression();
			this.state = 281;
			this.match(snobolParser.RPAREN);
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
	public remdr(): RemdrContext {
		let _localctx: RemdrContext = new RemdrContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, snobolParser.RULE_remdr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 283;
			this.match(snobolParser.T__17);
			this.state = 284;
			this.match(snobolParser.LPAREN);
			this.state = 285;
			this.expression();
			this.state = 286;
			this.match(snobolParser.RPAREN);
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
	public sin(): SinContext {
		let _localctx: SinContext = new SinContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, snobolParser.RULE_sin);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 288;
			this.match(snobolParser.T__18);
			this.state = 289;
			this.match(snobolParser.LPAREN);
			this.state = 290;
			this.expression();
			this.state = 291;
			this.match(snobolParser.RPAREN);
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
	public tan(): TanContext {
		let _localctx: TanContext = new TanContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, snobolParser.RULE_tan);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 293;
			this.match(snobolParser.T__19);
			this.state = 294;
			this.match(snobolParser.LPAREN);
			this.state = 295;
			this.expression();
			this.state = 296;
			this.match(snobolParser.RPAREN);
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
	public dupl(): DuplContext {
		let _localctx: DuplContext = new DuplContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, snobolParser.RULE_dupl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 298;
			this.match(snobolParser.T__20);
			this.state = 299;
			this.match(snobolParser.LPAREN);
			this.state = 300;
			this.expression();
			this.state = 301;
			this.match(snobolParser.COMMA);
			this.state = 302;
			this.expression();
			this.state = 303;
			this.match(snobolParser.RPAREN);
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
	public reverse(): ReverseContext {
		let _localctx: ReverseContext = new ReverseContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, snobolParser.RULE_reverse);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 305;
			this.match(snobolParser.T__21);
			this.state = 306;
			this.match(snobolParser.LPAREN);
			this.state = 307;
			this.expression();
			this.state = 308;
			this.match(snobolParser.RPAREN);
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
	public date(): DateContext {
		let _localctx: DateContext = new DateContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, snobolParser.RULE_date);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 310;
			this.match(snobolParser.T__22);
			this.state = 311;
			this.match(snobolParser.LPAREN);
			this.state = 312;
			this.match(snobolParser.RPAREN);
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
	public replace(): ReplaceContext {
		let _localctx: ReplaceContext = new ReplaceContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, snobolParser.RULE_replace);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 314;
			this.match(snobolParser.T__23);
			this.state = 315;
			this.match(snobolParser.LPAREN);
			this.state = 316;
			this.expression();
			this.state = 317;
			this.match(snobolParser.COMMA);
			this.state = 318;
			this.expression();
			this.state = 319;
			this.match(snobolParser.COMMA);
			this.state = 320;
			this.expression();
			this.state = 321;
			this.match(snobolParser.RPAREN);
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
	public size(): SizeContext {
		let _localctx: SizeContext = new SizeContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, snobolParser.RULE_size);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 323;
			this.match(snobolParser.T__24);
			this.state = 324;
			this.match(snobolParser.LPAREN);
			this.state = 325;
			this.expression();
			this.state = 326;
			this.match(snobolParser.RPAREN);
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
	public trim(): TrimContext {
		let _localctx: TrimContext = new TrimContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, snobolParser.RULE_trim);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 328;
			this.match(snobolParser.T__25);
			this.state = 329;
			this.match(snobolParser.LPAREN);
			this.state = 330;
			this.expression();
			this.state = 331;
			this.match(snobolParser.RPAREN);
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
	public array(): ArrayContext {
		let _localctx: ArrayContext = new ArrayContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, snobolParser.RULE_array);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 333;
			this.match(snobolParser.T__26);
			this.state = 334;
			this.match(snobolParser.LPAREN);
			this.state = 335;
			this.expression();
			this.state = 336;
			this.match(snobolParser.COMMA);
			this.state = 337;
			this.expression();
			this.state = 338;
			this.match(snobolParser.RPAREN);
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
	public convert(): ConvertContext {
		let _localctx: ConvertContext = new ConvertContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, snobolParser.RULE_convert);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 340;
			this.match(snobolParser.T__27);
			this.state = 341;
			this.match(snobolParser.LPAREN);
			this.state = 342;
			this.expression();
			this.state = 343;
			this.match(snobolParser.COMMA);
			this.state = 344;
			this.expression();
			this.state = 345;
			this.match(snobolParser.RPAREN);
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
	public table(): TableContext {
		let _localctx: TableContext = new TableContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, snobolParser.RULE_table);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 347;
			this.match(snobolParser.T__28);
			this.state = 348;
			this.match(snobolParser.LPAREN);
			this.state = 349;
			this.expression();
			this.state = 350;
			this.match(snobolParser.RPAREN);
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
	public sort(): SortContext {
		let _localctx: SortContext = new SortContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, snobolParser.RULE_sort);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 352;
			this.match(snobolParser.T__29);
			this.state = 353;
			this.match(snobolParser.LPAREN);
			this.state = 354;
			this.expression();
			this.state = 355;
			this.match(snobolParser.RPAREN);
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
	public break_(): Break_Context {
		let _localctx: Break_Context = new Break_Context(this._ctx, this.state);
		this.enterRule(_localctx, 78, snobolParser.RULE_break_);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 357;
			this.match(snobolParser.T__30);
			this.state = 358;
			this.match(snobolParser.LPAREN);
			this.state = 359;
			this.expression();
			this.state = 360;
			this.match(snobolParser.RPAREN);
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
	public transfer(): TransferContext {
		let _localctx: TransferContext = new TransferContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, snobolParser.RULE_transfer);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 371;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (snobolParser.T__31 - 32)) | (1 << (snobolParser.T__32 - 32)) | (1 << (snobolParser.T__33 - 32)) | (1 << (snobolParser.T__34 - 32)) | (1 << (snobolParser.LPAREN - 32)))) !== 0)) {
				{
				this.state = 363;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (snobolParser.T__31 - 32)) | (1 << (snobolParser.T__32 - 32)) | (1 << (snobolParser.T__33 - 32)) | (1 << (snobolParser.T__34 - 32)))) !== 0)) {
					{
					this.state = 362;
					this.transferpre();
					}
				}

				this.state = 365;
				this.match(snobolParser.LPAREN);
				this.state = 368;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case snobolParser.STRING:
					{
					this.state = 366;
					this.label();
					}
					break;
				case snobolParser.END:
					{
					this.state = 367;
					this.match(snobolParser.END);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 370;
				this.match(snobolParser.RPAREN);
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
	public transferpre(): TransferpreContext {
		let _localctx: TransferpreContext = new TransferpreContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, snobolParser.RULE_transferpre);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 373;
			_la = this._input.LA(1);
			if (!(((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (snobolParser.T__31 - 32)) | (1 << (snobolParser.T__32 - 32)) | (1 << (snobolParser.T__33 - 32)) | (1 << (snobolParser.T__34 - 32)))) !== 0))) {
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x039\u017A\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x03\x02\x06\x02X\n\x02\r\x02\x0E\x02Y\x03\x03\x05\x03]\n\x03\x03\x03" +
		"\x03\x03\x03\x04\x05\x04b\n\x04\x03\x04\x03\x04\x05\x04f\n\x04\x03\x04" +
		"\x03\x04\x06\x04j\n\x04\r\x04\x0E\x04k\x05\x04n\n\x04\x03\x04\x03\x04" +
		"\x05\x04r\n\x04\x03\x04\x03\x04\x03\x04\x05\x04w\n\x04\x03\x05\x03\x05" +
		"\x03\x06\x05\x06|\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x07\x06" +
		"\x83\n\x06\f\x06\x0E\x06\x86\v\x06\x03\x06\x05\x06\x89\n\x06\x03\x07\x03" +
		"\x07\x03\b\x03\b\x03\b\x07\b\x90\n\b\f\b\x0E\b\x93\v\b\x03\t\x03\t\x03" +
		"\t\x07\t\x98\n\t\f\t\x0E\t\x9B\v\t\x03\n\x03\n\x03\n\x05\n\xA0\n\n\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x07\v\xA9\n\v\f\v\x0E\v\xAC\v\v" +
		"\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x05\v\xB4\n\v\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x05" +
		"\f\xD1\n\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10" +
		"\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x12\x03\x12" +
		"\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x14" +
		"\x03\x14\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15" +
		"\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03\x17" +
		"\x03\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19" +
		"\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B" +
		"\x03\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1D" +
		"\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E" +
		"\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03 \x03 \x03" +
		" \x03 \x03 \x03!\x03!\x03!\x03!\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03" +
		"\"\x03\"\x03\"\x03#\x03#\x03#\x03#\x03#\x03$\x03$\x03$\x03$\x03$\x03%" +
		"\x03%\x03%\x03%\x03%\x03%\x03%\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03" +
		"\'\x03\'\x03\'\x03\'\x03\'\x03(\x03(\x03(\x03(\x03(\x03)\x03)\x03)\x03" +
		")\x03)\x03*\x05*\u016E\n*\x03*\x03*\x03*\x05*\u0173\n*\x03*\x05*\u0176" +
		"\n*\x03+\x03+\x03+\x02\x02\x02,\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f" +
		"\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E" +
		"\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02" +
		":\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02" +
		"\x02\b\x04\x021177\x03\x0223\x03\x02*+\x03\x02,-\x04\x022355\x03\x02\"" +
		"%\x02\u0180\x02W\x03\x02\x02\x02\x04\\\x03\x02\x02\x02\x06v\x03\x02\x02" +
		"\x02\bx\x03\x02\x02\x02\n{\x03\x02\x02\x02\f\x8A\x03\x02\x02\x02\x0E\x8C" +
		"\x03\x02\x02\x02\x10\x94\x03\x02\x02\x02\x12\x9C\x03\x02\x02\x02\x14\xB3" +
		"\x03\x02\x02\x02\x16\xD0\x03\x02\x02\x02\x18\xD2\x03\x02\x02\x02\x1A\xD7" +
		"\x03\x02\x02\x02\x1C\xDC\x03\x02\x02\x02\x1E\xE1\x03\x02\x02\x02 \xE6" +
		"\x03\x02\x02\x02\"\xEB\x03\x02\x02\x02$\xF0\x03\x02\x02\x02&\xF5\x03\x02" +
		"\x02\x02(\xFA\x03\x02\x02\x02*\xFF\x03\x02\x02\x02,\u0104\x03\x02\x02" +
		"\x02.\u0109\x03\x02\x02\x020\u010E\x03\x02\x02\x022\u0113\x03\x02\x02" +
		"\x024\u0118\x03\x02\x02\x026\u011D\x03\x02\x02\x028\u0122\x03\x02\x02" +
		"\x02:\u0127\x03\x02\x02\x02<\u012C\x03\x02\x02\x02>\u0133\x03\x02\x02" +
		"\x02@\u0138\x03\x02\x02\x02B\u013C\x03\x02\x02\x02D\u0145\x03\x02\x02" +
		"\x02F\u014A\x03\x02\x02\x02H\u014F\x03\x02\x02\x02J\u0156\x03\x02\x02" +
		"\x02L\u015D\x03\x02\x02\x02N\u0162\x03\x02\x02\x02P\u0167\x03\x02\x02" +
		"\x02R\u0175\x03\x02\x02\x02T\u0177\x03\x02\x02\x02VX\x05\x04\x03\x02W" +
		"V\x03\x02\x02\x02XY\x03\x02\x02\x02YW\x03\x02\x02\x02YZ\x03\x02\x02\x02" +
		"Z\x03\x03\x02\x02\x02[]\x05\x06\x04\x02\\[\x03\x02\x02\x02\\]\x03\x02" +
		"\x02\x02]^\x03\x02\x02\x02^_\x078\x02\x02_\x05\x03\x02\x02\x02`b\x05\b" +
		"\x05\x02a`\x03\x02\x02\x02ab\x03\x02\x02\x02bc\x03\x02\x02\x02ce\x05\n" +
		"\x06\x02df\x05\f\x07\x02ed\x03\x02\x02\x02ef\x03\x02\x02\x02fm\x03\x02" +
		"\x02\x02gi\x07/\x02\x02hj\x05\x0E\b\x02ih\x03\x02\x02\x02jk\x03\x02\x02" +
		"\x02ki\x03\x02\x02\x02kl\x03\x02\x02\x02ln\x03\x02\x02\x02mg\x03\x02\x02" +
		"\x02mn\x03\x02\x02\x02nq\x03\x02\x02\x02op\x070\x02\x02pr\x05R*\x02qo" +
		"\x03\x02\x02\x02qr\x03\x02\x02\x02rw\x03\x02\x02\x02st\x070\x02\x02tw" +
		"\x05R*\x02uw\t\x02\x02\x02va\x03\x02\x02\x02vs\x03\x02\x02\x02vu\x03\x02" +
		"\x02\x02w\x07\x03\x02\x02\x02xy\x074\x02\x02y\t\x03\x02\x02\x02z|\x07" +
		")\x02\x02{z\x03\x02\x02\x02{|\x03\x02\x02\x02|}\x03\x02\x02\x02}\x88\x07" +
		"4\x02\x02~\x7F\x07\x03\x02\x02\x7F\x84\x074\x02\x02\x80\x81\x07&\x02\x02" +
		"\x81\x83\x074\x02\x02\x82\x80\x03\x02\x02\x02\x83\x86\x03\x02\x02\x02" +
		"\x84\x82\x03\x02\x02\x02\x84\x85\x03\x02\x02\x02\x85\x87\x03\x02\x02\x02" +
		"\x86\x84\x03\x02\x02\x02\x87\x89\x07\x04\x02\x02\x88~\x03\x02\x02\x02" +
		"\x88\x89\x03\x02\x02\x02\x89\v\x03\x02\x02\x02\x8A\x8B\t\x03\x02\x02\x8B" +
		"\r\x03\x02\x02\x02\x8C\x91\x05\x10\t\x02\x8D\x8E\t\x04\x02\x02\x8E\x90" +
		"\x05\x10\t\x02\x8F\x8D\x03\x02\x02\x02\x90\x93\x03\x02\x02\x02\x91\x8F" +
		"\x03\x02\x02\x02\x91\x92\x03\x02\x02\x02\x92\x0F\x03\x02\x02\x02\x93\x91" +
		"\x03\x02\x02\x02\x94\x99\x05\x12\n\x02\x95\x96\t\x05\x02\x02\x96\x98\x05" +
		"\x12\n\x02\x97\x95\x03\x02\x02\x02\x98\x9B\x03\x02\x02\x02\x99\x97\x03" +
		"\x02\x02\x02\x99\x9A\x03\x02\x02\x02\x9A\x11\x03\x02\x02\x02\x9B\x99\x03" +
		"\x02\x02\x02\x9C\x9F\x05\x14\v\x02\x9D\x9E\x07.\x02\x02\x9E\xA0\x05\x0E" +
		"\b\x02\x9F\x9D\x03\x02\x02\x02\x9F\xA0\x03\x02\x02\x02\xA0\x13\x03\x02" +
		"\x02\x02\xA1\xB4\t\x06\x02\x02\xA2\xB4\x05\n\x06\x02\xA3\xB4\x05\x16\f" +
		"\x02\xA4\xA5\x07\x03\x02\x02\xA5\xAA\x05\x0E\b\x02\xA6\xA7\x07&\x02\x02" +
		"\xA7\xA9\x05\x0E\b\x02\xA8\xA6\x03\x02\x02\x02\xA9\xAC\x03\x02\x02\x02" +
		"\xAA\xA8\x03\x02\x02\x02\xAA\xAB\x03\x02\x02\x02\xAB\xAD\x03\x02\x02\x02" +
		"\xAC\xAA\x03\x02\x02\x02\xAD\xAE\x07\x04\x02\x02\xAE\xB4\x03\x02\x02\x02" +
		"\xAF\xB0\x07\'\x02\x02\xB0\xB1\x05\x0E\b\x02\xB1\xB2\x07(\x02\x02\xB2" +
		"\xB4\x03\x02\x02\x02\xB3\xA1\x03\x02\x02\x02\xB3\xA2\x03\x02\x02\x02\xB3" +
		"\xA3\x03\x02\x02\x02\xB3\xA4\x03\x02\x02\x02\xB3\xAF\x03\x02\x02\x02\xB4" +
		"\x15\x03\x02\x02\x02\xB5\xD1\x05\x18\r\x02\xB6\xD1\x05\x1A\x0E\x02\xB7" +
		"\xD1\x05\x1C\x0F\x02\xB8\xD1\x05\x1E\x10\x02\xB9\xD1\x05 \x11\x02\xBA" +
		"\xD1\x05$\x13\x02\xBB\xD1\x05&\x14\x02\xBC\xD1\x05(\x15\x02\xBD\xD1\x05" +
		"*\x16\x02\xBE\xD1\x05,\x17\x02\xBF\xD1\x05.\x18\x02\xC0\xD1\x050\x19\x02" +
		"\xC1\xD1\x052\x1A\x02\xC2\xD1\x054\x1B\x02\xC3\xD1\x056\x1C\x02\xC4\xD1" +
		"\x058\x1D\x02\xC5\xD1\x05:\x1E\x02\xC6\xD1\x05@!\x02\xC7\xD1\x05<\x1F" +
		"\x02\xC8\xD1\x05> \x02\xC9\xD1\x05B\"\x02\xCA\xD1\x05D#\x02\xCB\xD1\x05" +
		"F$\x02\xCC\xD1\x05H%\x02\xCD\xD1\x05N(\x02\xCE\xD1\x05L\'\x02\xCF\xD1" +
		"\x05P)\x02\xD0\xB5\x03\x02\x02\x02\xD0\xB6\x03\x02\x02\x02\xD0\xB7\x03" +
		"\x02\x02\x02\xD0\xB8\x03\x02\x02\x02\xD0\xB9\x03\x02\x02\x02\xD0\xBA\x03" +
		"\x02\x02\x02\xD0\xBB\x03\x02\x02\x02\xD0\xBC\x03\x02\x02\x02\xD0\xBD\x03" +
		"\x02\x02\x02\xD0\xBE\x03\x02\x02\x02\xD0\xBF\x03\x02\x02\x02\xD0\xC0\x03" +
		"\x02\x02\x02\xD0\xC1\x03\x02\x02\x02\xD0\xC2\x03\x02\x02\x02\xD0\xC3\x03" +
		"\x02\x02\x02\xD0\xC4\x03\x02\x02\x02\xD0\xC5\x03\x02\x02\x02\xD0\xC6\x03" +
		"\x02\x02\x02\xD0\xC7\x03\x02\x02\x02\xD0\xC8\x03\x02\x02\x02\xD0\xC9\x03" +
		"\x02\x02\x02\xD0\xCA\x03\x02\x02\x02\xD0\xCB\x03\x02\x02\x02\xD0\xCC\x03" +
		"\x02\x02\x02\xD0\xCD\x03\x02\x02\x02\xD0\xCE\x03\x02\x02\x02\xD0\xCF\x03" +
		"\x02\x02\x02\xD1\x17\x03\x02\x02\x02\xD2\xD3\x07\x05\x02\x02\xD3\xD4\x07" +
		"\'\x02\x02\xD4\xD5\x05\x0E\b\x02\xD5\xD6\x07(\x02\x02\xD6\x19\x03\x02" +
		"\x02\x02\xD7\xD8\x07\x06\x02\x02\xD8\xD9\x07\'\x02\x02\xD9\xDA\x05\x0E" +
		"\b\x02\xDA\xDB\x07(\x02\x02\xDB\x1B\x03\x02\x02\x02\xDC\xDD\x07\x07\x02" +
		"\x02\xDD\xDE\x07\'\x02\x02\xDE\xDF\x05\x0E\b\x02\xDF\xE0\x07(\x02\x02" +
		"\xE0\x1D\x03\x02\x02\x02\xE1\xE2\x07\b\x02\x02\xE2\xE3\x07\'\x02\x02\xE3" +
		"\xE4\x05\x0E\b\x02\xE4\xE5\x07(\x02\x02\xE5\x1F\x03\x02\x02\x02\xE6\xE7" +
		"\x07\t\x02\x02\xE7\xE8\x07\'\x02\x02\xE8\xE9\x05\x0E\b\x02\xE9\xEA\x07" +
		"(\x02\x02\xEA!\x03\x02\x02\x02\xEB\xEC\x07\n\x02\x02\xEC\xED\x07\'\x02" +
		"\x02\xED\xEE\x05\x0E\b\x02\xEE\xEF\x07(\x02\x02\xEF#\x03\x02\x02\x02\xF0" +
		"\xF1\x07\v\x02\x02\xF1\xF2\x07\'\x02\x02\xF2\xF3\x05\x0E\b\x02\xF3\xF4" +
		"\x07(\x02\x02\xF4%\x03\x02\x02\x02\xF5\xF6\x07\f\x02\x02\xF6\xF7\x07\'" +
		"\x02\x02\xF7\xF8\x05\x0E\b\x02\xF8\xF9\x07(\x02\x02\xF9\'\x03\x02\x02" +
		"\x02\xFA\xFB\x07\r\x02\x02\xFB\xFC\x07\'\x02\x02\xFC\xFD\x05\x0E\b\x02" +
		"\xFD\xFE\x07(\x02\x02\xFE)\x03\x02\x02\x02\xFF\u0100\x07\x0E\x02\x02\u0100" +
		"\u0101\x07\'\x02\x02\u0101\u0102\x05\x0E\b\x02\u0102\u0103\x07(\x02\x02" +
		"\u0103+\x03\x02\x02\x02\u0104\u0105\x07\x0F\x02\x02\u0105\u0106\x07\'" +
		"\x02\x02\u0106\u0107\x05\x0E\b\x02\u0107\u0108\x07(\x02\x02\u0108-\x03" +
		"\x02\x02\x02\u0109\u010A\x07\x10\x02\x02\u010A\u010B\x07\'\x02\x02\u010B" +
		"\u010C\x05\x0E\b\x02\u010C\u010D\x07(\x02\x02\u010D/\x03\x02\x02\x02\u010E" +
		"\u010F\x07\x11\x02\x02\u010F\u0110\x07\'\x02\x02\u0110\u0111\x05\x0E\b" +
		"\x02\u0111\u0112\x07(\x02\x02\u01121\x03\x02\x02\x02\u0113\u0114\x07\x12" +
		"\x02\x02\u0114\u0115\x07\'\x02\x02\u0115\u0116\x05\x0E\b\x02\u0116\u0117" +
		"\x07(\x02\x02\u01173\x03\x02\x02\x02\u0118\u0119\x07\x13\x02\x02\u0119" +
		"\u011A\x07\'\x02\x02\u011A\u011B\x05\x0E\b\x02\u011B\u011C\x07(\x02\x02" +
		"\u011C5\x03\x02\x02\x02\u011D\u011E\x07\x14\x02\x02\u011E\u011F\x07\'" +
		"\x02\x02\u011F\u0120\x05\x0E\b\x02\u0120\u0121\x07(\x02\x02\u01217\x03" +
		"\x02\x02\x02\u0122\u0123\x07\x15\x02\x02\u0123\u0124\x07\'\x02\x02\u0124" +
		"\u0125\x05\x0E\b\x02\u0125\u0126\x07(\x02\x02\u01269\x03\x02\x02\x02\u0127" +
		"\u0128\x07\x16\x02\x02\u0128\u0129\x07\'\x02\x02\u0129\u012A\x05\x0E\b" +
		"\x02\u012A\u012B\x07(\x02\x02\u012B;\x03\x02\x02\x02\u012C\u012D\x07\x17" +
		"\x02\x02\u012D\u012E\x07\'\x02\x02\u012E\u012F\x05\x0E\b\x02\u012F\u0130" +
		"\x07&\x02\x02\u0130\u0131\x05\x0E\b\x02\u0131\u0132\x07(\x02\x02\u0132" +
		"=\x03\x02\x02\x02\u0133\u0134\x07\x18\x02\x02\u0134\u0135\x07\'\x02\x02" +
		"\u0135\u0136\x05\x0E\b\x02\u0136\u0137\x07(\x02\x02\u0137?\x03\x02\x02" +
		"\x02\u0138\u0139\x07\x19\x02\x02\u0139\u013A\x07\'\x02\x02\u013A\u013B" +
		"\x07(\x02\x02\u013BA\x03\x02\x02\x02\u013C\u013D\x07\x1A\x02\x02\u013D" +
		"\u013E\x07\'\x02\x02\u013E\u013F\x05\x0E\b\x02\u013F\u0140\x07&\x02\x02" +
		"\u0140\u0141\x05\x0E\b\x02\u0141\u0142\x07&\x02\x02\u0142\u0143\x05\x0E" +
		"\b\x02\u0143\u0144\x07(\x02\x02\u0144C\x03\x02\x02\x02\u0145\u0146\x07" +
		"\x1B\x02\x02\u0146\u0147\x07\'\x02\x02\u0147\u0148\x05\x0E\b\x02\u0148" +
		"\u0149\x07(\x02\x02\u0149E\x03\x02\x02\x02\u014A\u014B\x07\x1C\x02\x02" +
		"\u014B\u014C\x07\'\x02\x02\u014C\u014D\x05\x0E\b\x02\u014D\u014E\x07(" +
		"\x02\x02\u014EG\x03\x02\x02\x02\u014F\u0150\x07\x1D\x02\x02\u0150\u0151" +
		"\x07\'\x02\x02\u0151\u0152\x05\x0E\b\x02\u0152\u0153\x07&\x02\x02\u0153" +
		"\u0154\x05\x0E\b\x02\u0154\u0155\x07(\x02\x02\u0155I\x03\x02\x02\x02\u0156" +
		"\u0157\x07\x1E\x02\x02\u0157\u0158\x07\'\x02\x02\u0158\u0159\x05\x0E\b" +
		"\x02\u0159\u015A\x07&\x02\x02\u015A\u015B\x05\x0E\b\x02\u015B\u015C\x07" +
		"(\x02\x02\u015CK\x03\x02\x02\x02\u015D\u015E\x07\x1F\x02\x02\u015E\u015F" +
		"\x07\'\x02\x02\u015F\u0160\x05\x0E\b\x02\u0160\u0161\x07(\x02\x02\u0161" +
		"M\x03\x02\x02\x02\u0162\u0163\x07 \x02\x02\u0163\u0164\x07\'\x02\x02\u0164" +
		"\u0165\x05\x0E\b\x02\u0165\u0166\x07(\x02\x02\u0166O\x03\x02\x02\x02\u0167" +
		"\u0168\x07!\x02\x02\u0168\u0169\x07\'\x02\x02\u0169\u016A\x05\x0E\b\x02" +
		"\u016A\u016B\x07(\x02\x02\u016BQ\x03\x02\x02\x02\u016C\u016E\x05T+\x02" +
		"\u016D\u016C\x03\x02\x02\x02\u016D\u016E\x03\x02\x02\x02\u016E\u016F\x03" +
		"\x02\x02\x02\u016F\u0172\x07\'\x02\x02\u0170\u0173\x05\b\x05\x02\u0171" +
		"\u0173\x071\x02\x02\u0172\u0170\x03\x02\x02\x02\u0172\u0171\x03\x02\x02" +
		"\x02\u0173\u0174\x03\x02\x02\x02\u0174\u0176\x07(\x02\x02\u0175\u016D" +
		"\x03\x02\x02\x02\u0175\u0176\x03\x02\x02\x02\u0176S\x03\x02\x02\x02\u0177" +
		"\u0178\t\x07\x02\x02\u0178U\x03\x02\x02\x02\x16Y\\aekmqv{\x84\x88\x91" +
		"\x99\x9F\xAA\xB3\xD0\u016D\u0172\u0175";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!snobolParser.__ATN) {
			snobolParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(snobolParser._serializedATN));
		}

		return snobolParser.__ATN;
	}

}

export class ProgContext extends ParserRuleContext {
	public lin(): LinContext[];
	public lin(i: number): LinContext;
	public lin(i?: number): LinContext | LinContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LinContext);
		} else {
			return this.getRuleContext(i, LinContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return snobolParser.RULE_prog; }
	// @Override
	public enterRule(listener: snobolListener): void {
		if (listener.enterProg) {
			listener.enterProg(this);
		}
	}
	// @Override
	public exitRule(listener: snobolListener): void {
		if (listener.exitProg) {
			listener.exitProg(this);
		}
	}
}


export class LinContext extends ParserRuleContext {
	public EOL(): TerminalNode { return this.getToken(snobolParser.EOL, 0); }
	public line(): LineContext | undefined {
		return this.tryGetRuleContext(0, LineContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return snobolParser.RULE_lin; }
	// @Override
	public enterRule(listener: snobolListener): void {
		if (listener.enterLin) {
			listener.enterLin(this);
		}
	}
	// @Override
	public exitRule(listener: snobolListener): void {
		if (listener.exitLin) {
			listener.exitLin(this);
		}
	}
}


export class LineContext extends ParserRuleContext {
	public subject(): SubjectContext | undefined {
		return this.tryGetRuleContext(0, SubjectContext);
	}
	public label(): LabelContext | undefined {
		return this.tryGetRuleContext(0, LabelContext);
	}
	public pattern(): PatternContext | undefined {
		return this.tryGetRuleContext(0, PatternContext);
	}
	public EQ(): TerminalNode | undefined { return this.tryGetToken(snobolParser.EQ, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(snobolParser.COLON, 0); }
	public transfer(): TransferContext | undefined {
		return this.tryGetRuleContext(0, TransferContext);
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
	public COMMENT(): TerminalNode | undefined { return this.tryGetToken(snobolParser.COMMENT, 0); }
	public END(): TerminalNode | undefined { return this.tryGetToken(snobolParser.END, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return snobolParser.RULE_line; }
	// @Override
	public enterRule(listener: snobolListener): void {
		if (listener.enterLine) {
			listener.enterLine(this);
		}
	}
	// @Override
	public exitRule(listener: snobolListener): void {
		if (listener.exitLine) {
			listener.exitLine(this);
		}
	}
}


export class LabelContext extends ParserRuleContext {
	public STRING(): TerminalNode { return this.getToken(snobolParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return snobolParser.RULE_label; }
	// @Override
	public enterRule(listener: snobolListener): void {
		if (listener.enterLabel) {
			listener.enterLabel(this);
		}
	}
	// @Override
	public exitRule(listener: snobolListener): void {
		if (listener.exitLabel) {
			listener.exitLabel(this);
		}
	}
}


export class SubjectContext extends ParserRuleContext {
	public STRING(): TerminalNode[];
	public STRING(i: number): TerminalNode;
	public STRING(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(snobolParser.STRING);
		} else {
			return this.getToken(snobolParser.STRING, i);
		}
	}
	public AMP(): TerminalNode | undefined { return this.tryGetToken(snobolParser.AMP, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(snobolParser.COMMA);
		} else {
			return this.getToken(snobolParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return snobolParser.RULE_subject; }
	// @Override
	public enterRule(listener: snobolListener): void {
		if (listener.enterSubject) {
			listener.enterSubject(this);
		}
	}
	// @Override
	public exitRule(listener: snobolListener): void {
		if (listener.exitSubject) {
			listener.exitSubject(this);
		}
	}
}


export class PatternContext extends ParserRuleContext {
	public STRINGLITERAL1(): TerminalNode | undefined { return this.tryGetToken(snobolParser.STRINGLITERAL1, 0); }
	public STRINGLITERAL2(): TerminalNode | undefined { return this.tryGetToken(snobolParser.STRINGLITERAL2, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return snobolParser.RULE_pattern; }
	// @Override
	public enterRule(listener: snobolListener): void {
		if (listener.enterPattern) {
			listener.enterPattern(this);
		}
	}
	// @Override
	public exitRule(listener: snobolListener): void {
		if (listener.exitPattern) {
			listener.exitPattern(this);
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
			return this.getTokens(snobolParser.PLUS);
		} else {
			return this.getToken(snobolParser.PLUS, i);
		}
	}
	public MINUS(): TerminalNode[];
	public MINUS(i: number): TerminalNode;
	public MINUS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(snobolParser.MINUS);
		} else {
			return this.getToken(snobolParser.MINUS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return snobolParser.RULE_expression; }
	// @Override
	public enterRule(listener: snobolListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: snobolListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
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
			return this.getTokens(snobolParser.TIMES);
		} else {
			return this.getToken(snobolParser.TIMES, i);
		}
	}
	public DIV(): TerminalNode[];
	public DIV(i: number): TerminalNode;
	public DIV(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(snobolParser.DIV);
		} else {
			return this.getToken(snobolParser.DIV, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return snobolParser.RULE_multiplyingExpression; }
	// @Override
	public enterRule(listener: snobolListener): void {
		if (listener.enterMultiplyingExpression) {
			listener.enterMultiplyingExpression(this);
		}
	}
	// @Override
	public exitRule(listener: snobolListener): void {
		if (listener.exitMultiplyingExpression) {
			listener.exitMultiplyingExpression(this);
		}
	}
}


export class PowExpressionContext extends ParserRuleContext {
	public atom(): AtomContext {
		return this.getRuleContext(0, AtomContext);
	}
	public POW(): TerminalNode | undefined { return this.tryGetToken(snobolParser.POW, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return snobolParser.RULE_powExpression; }
	// @Override
	public enterRule(listener: snobolListener): void {
		if (listener.enterPowExpression) {
			listener.enterPowExpression(this);
		}
	}
	// @Override
	public exitRule(listener: snobolListener): void {
		if (listener.exitPowExpression) {
			listener.exitPowExpression(this);
		}
	}
}


export class AtomContext extends ParserRuleContext {
	public STRINGLITERAL1(): TerminalNode | undefined { return this.tryGetToken(snobolParser.STRINGLITERAL1, 0); }
	public STRINGLITERAL2(): TerminalNode | undefined { return this.tryGetToken(snobolParser.STRINGLITERAL2, 0); }
	public INTEGER(): TerminalNode | undefined { return this.tryGetToken(snobolParser.INTEGER, 0); }
	public subject(): SubjectContext | undefined {
		return this.tryGetRuleContext(0, SubjectContext);
	}
	public command(): CommandContext | undefined {
		return this.tryGetRuleContext(0, CommandContext);
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
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(snobolParser.COMMA);
		} else {
			return this.getToken(snobolParser.COMMA, i);
		}
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(snobolParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(snobolParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return snobolParser.RULE_atom; }
	// @Override
	public enterRule(listener: snobolListener): void {
		if (listener.enterAtom) {
			listener.enterAtom(this);
		}
	}
	// @Override
	public exitRule(listener: snobolListener): void {
		if (listener.exitAtom) {
			listener.exitAtom(this);
		}
	}
}


export class CommandContext extends ParserRuleContext {
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	public differ(): DifferContext | undefined {
		return this.tryGetRuleContext(0, DifferContext);
	}
	public eq(): EqContext | undefined {
		return this.tryGetRuleContext(0, EqContext);
	}
	public ne(): NeContext | undefined {
		return this.tryGetRuleContext(0, NeContext);
	}
	public ge(): GeContext | undefined {
		return this.tryGetRuleContext(0, GeContext);
	}
	public le(): LeContext | undefined {
		return this.tryGetRuleContext(0, LeContext);
	}
	public lt(): LtContext | undefined {
		return this.tryGetRuleContext(0, LtContext);
	}
	public integer(): IntegerContext | undefined {
		return this.tryGetRuleContext(0, IntegerContext);
	}
	public lgt(): LgtContext | undefined {
		return this.tryGetRuleContext(0, LgtContext);
	}
	public atan(): AtanContext | undefined {
		return this.tryGetRuleContext(0, AtanContext);
	}
	public chop(): ChopContext | undefined {
		return this.tryGetRuleContext(0, ChopContext);
	}
	public cos(): CosContext | undefined {
		return this.tryGetRuleContext(0, CosContext);
	}
	public exp(): ExpContext | undefined {
		return this.tryGetRuleContext(0, ExpContext);
	}
	public ln(): LnContext | undefined {
		return this.tryGetRuleContext(0, LnContext);
	}
	public remdr(): RemdrContext | undefined {
		return this.tryGetRuleContext(0, RemdrContext);
	}
	public sin(): SinContext | undefined {
		return this.tryGetRuleContext(0, SinContext);
	}
	public tan(): TanContext | undefined {
		return this.tryGetRuleContext(0, TanContext);
	}
	public date(): DateContext | undefined {
		return this.tryGetRuleContext(0, DateContext);
	}
	public dupl(): DuplContext | undefined {
		return this.tryGetRuleContext(0, DuplContext);
	}
	public reverse(): ReverseContext | undefined {
		return this.tryGetRuleContext(0, ReverseContext);
	}
	public replace(): ReplaceContext | undefined {
		return this.tryGetRuleContext(0, ReplaceContext);
	}
	public size(): SizeContext | undefined {
		return this.tryGetRuleContext(0, SizeContext);
	}
	public trim(): TrimContext | undefined {
		return this.tryGetRuleContext(0, TrimContext);
	}
	public array(): ArrayContext | undefined {
		return this.tryGetRuleContext(0, ArrayContext);
	}
	public sort(): SortContext | undefined {
		return this.tryGetRuleContext(0, SortContext);
	}
	public table(): TableContext | undefined {
		return this.tryGetRuleContext(0, TableContext);
	}
	public break_(): Break_Context | undefined {
		return this.tryGetRuleContext(0, Break_Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return snobolParser.RULE_command; }
	// @Override
	public enterRule(listener: snobolListener): void {
		if (listener.enterCommand) {
			listener.enterCommand(this);
		}
	}
	// @Override
	public exitRule(listener: snobolListener): void {
		if (listener.exitCommand) {
			listener.exitCommand(this);
		}
	}
}


export class IdentContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(snobolParser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(snobolParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return snobolParser.RULE_ident; }
	// @Override
	public enterRule(listener: snobolListener): void {
		if (listener.enterIdent) {
			listener.enterIdent(this);
		}
	}
	// @Override
	public exitRule(listener: snobolListener): void {
		if (listener.exitIdent) {
			listener.exitIdent(this);
		}
	}
}


export class DifferContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(snobolParser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(snobolParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return snobolParser.RULE_differ; }
	// @Override
	public enterRule(listener: snobolListener): void {
		if (listener.enterDiffer) {
			listener.enterDiffer(this);
		}
	}
	// @Override
	public exitRule(listener: snobolListener): void {
		if (listener.exitDiffer) {
			listener.exitDiffer(this);
		}
	}
}


export class EqContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(snobolParser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(snobolParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return snobolParser.RULE_eq; }
	// @Override
	public enterRule(listener: snobolListener): void {
		if (listener.enterEq) {
			listener.enterEq(this);
		}
	}
	// @Override
	public exitRule(listener: snobolListener): void {
		if (listener.exitEq) {
			listener.exitEq(this);
		}
	}
}


export class NeContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(snobolParser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(snobolParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return snobolParser.RULE_ne; }
	// @Override
	public enterRule(listener: snobolListener): void {
		if (listener.enterNe) {
			listener.enterNe(this);
		}
	}
	// @Override
	public exitRule(listener: snobolListener): void {
		if (listener.exitNe) {
			listener.exitNe(this);
		}
	}
}


export class GeContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(snobolParser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(snobolParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return snobolParser.RULE_ge; }
	// @Override
	public enterRule(listener: snobolListener): void {
		if (listener.enterGe) {
			listener.enterGe(this);
		}
	}
	// @Override
	public exitRule(listener: snobolListener): void {
		if (listener.exitGe) {
			listener.exitGe(this);
		}
	}
}


export class GtContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(snobolParser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(snobolParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return snobolParser.RULE_gt; }
	// @Override
	public enterRule(listener: snobolListener): void {
		if (listener.enterGt) {
			listener.enterGt(this);
		}
	}
	// @Override
	public exitRule(listener: snobolListener): void {
		if (listener.exitGt) {
			listener.exitGt(this);
		}
	}
}


export class LeContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(snobolParser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(snobolParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return snobolParser.RULE_le; }
	// @Override
	public enterRule(listener: snobolListener): void {
		if (listener.enterLe) {
			listener.enterLe(this);
		}
	}
	// @Override
	public exitRule(listener: snobolListener): void {
		if (listener.exitLe) {
			listener.exitLe(this);
		}
	}
}


export class LtContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(snobolParser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(snobolParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return snobolParser.RULE_lt; }
	// @Override
	public enterRule(listener: snobolListener): void {
		if (listener.enterLt) {
			listener.enterLt(this);
		}
	}
	// @Override
	public exitRule(listener: snobolListener): void {
		if (listener.exitLt) {
			listener.exitLt(this);
		}
	}
}


export class IntegerContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(snobolParser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(snobolParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return snobolParser.RULE_integer; }
	// @Override
	public enterRule(listener: snobolListener): void {
		if (listener.enterInteger) {
			listener.enterInteger(this);
		}
	}
	// @Override
	public exitRule(listener: snobolListener): void {
		if (listener.exitInteger) {
			listener.exitInteger(this);
		}
	}
}


export class LgtContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(snobolParser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(snobolParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return snobolParser.RULE_lgt; }
	// @Override
	public enterRule(listener: snobolListener): void {
		if (listener.enterLgt) {
			listener.enterLgt(this);
		}
	}
	// @Override
	public exitRule(listener: snobolListener): void {
		if (listener.exitLgt) {
			listener.exitLgt(this);
		}
	}
}


export class AtanContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(snobolParser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(snobolParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return snobolParser.RULE_atan; }
	// @Override
	public enterRule(listener: snobolListener): void {
		if (listener.enterAtan) {
			listener.enterAtan(this);
		}
	}
	// @Override
	public exitRule(listener: snobolListener): void {
		if (listener.exitAtan) {
			listener.exitAtan(this);
		}
	}
}


export class ChopContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(snobolParser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(snobolParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return snobolParser.RULE_chop; }
	// @Override
	public enterRule(listener: snobolListener): void {
		if (listener.enterChop) {
			listener.enterChop(this);
		}
	}
	// @Override
	public exitRule(listener: snobolListener): void {
		if (listener.exitChop) {
			listener.exitChop(this);
		}
	}
}


export class CosContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(snobolParser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(snobolParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return snobolParser.RULE_cos; }
	// @Override
	public enterRule(listener: snobolListener): void {
		if (listener.enterCos) {
			listener.enterCos(this);
		}
	}
	// @Override
	public exitRule(listener: snobolListener): void {
		if (listener.exitCos) {
			listener.exitCos(this);
		}
	}
}


export class ExpContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(snobolParser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(snobolParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return snobolParser.RULE_exp; }
	// @Override
	public enterRule(listener: snobolListener): void {
		if (listener.enterExp) {
			listener.enterExp(this);
		}
	}
	// @Override
	public exitRule(listener: snobolListener): void {
		if (listener.exitExp) {
			listener.exitExp(this);
		}
	}
}


export class LnContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(snobolParser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(snobolParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return snobolParser.RULE_ln; }
	// @Override
	public enterRule(listener: snobolListener): void {
		if (listener.enterLn) {
			listener.enterLn(this);
		}
	}
	// @Override
	public exitRule(listener: snobolListener): void {
		if (listener.exitLn) {
			listener.exitLn(this);
		}
	}
}


export class RemdrContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(snobolParser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(snobolParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return snobolParser.RULE_remdr; }
	// @Override
	public enterRule(listener: snobolListener): void {
		if (listener.enterRemdr) {
			listener.enterRemdr(this);
		}
	}
	// @Override
	public exitRule(listener: snobolListener): void {
		if (listener.exitRemdr) {
			listener.exitRemdr(this);
		}
	}
}


export class SinContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(snobolParser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(snobolParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return snobolParser.RULE_sin; }
	// @Override
	public enterRule(listener: snobolListener): void {
		if (listener.enterSin) {
			listener.enterSin(this);
		}
	}
	// @Override
	public exitRule(listener: snobolListener): void {
		if (listener.exitSin) {
			listener.exitSin(this);
		}
	}
}


export class TanContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(snobolParser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(snobolParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return snobolParser.RULE_tan; }
	// @Override
	public enterRule(listener: snobolListener): void {
		if (listener.enterTan) {
			listener.enterTan(this);
		}
	}
	// @Override
	public exitRule(listener: snobolListener): void {
		if (listener.exitTan) {
			listener.exitTan(this);
		}
	}
}


export class DuplContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(snobolParser.LPAREN, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public COMMA(): TerminalNode { return this.getToken(snobolParser.COMMA, 0); }
	public RPAREN(): TerminalNode { return this.getToken(snobolParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return snobolParser.RULE_dupl; }
	// @Override
	public enterRule(listener: snobolListener): void {
		if (listener.enterDupl) {
			listener.enterDupl(this);
		}
	}
	// @Override
	public exitRule(listener: snobolListener): void {
		if (listener.exitDupl) {
			listener.exitDupl(this);
		}
	}
}


export class ReverseContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(snobolParser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(snobolParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return snobolParser.RULE_reverse; }
	// @Override
	public enterRule(listener: snobolListener): void {
		if (listener.enterReverse) {
			listener.enterReverse(this);
		}
	}
	// @Override
	public exitRule(listener: snobolListener): void {
		if (listener.exitReverse) {
			listener.exitReverse(this);
		}
	}
}


export class DateContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(snobolParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(snobolParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return snobolParser.RULE_date; }
	// @Override
	public enterRule(listener: snobolListener): void {
		if (listener.enterDate) {
			listener.enterDate(this);
		}
	}
	// @Override
	public exitRule(listener: snobolListener): void {
		if (listener.exitDate) {
			listener.exitDate(this);
		}
	}
}


export class ReplaceContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(snobolParser.LPAREN, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(snobolParser.COMMA);
		} else {
			return this.getToken(snobolParser.COMMA, i);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(snobolParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return snobolParser.RULE_replace; }
	// @Override
	public enterRule(listener: snobolListener): void {
		if (listener.enterReplace) {
			listener.enterReplace(this);
		}
	}
	// @Override
	public exitRule(listener: snobolListener): void {
		if (listener.exitReplace) {
			listener.exitReplace(this);
		}
	}
}


export class SizeContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(snobolParser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(snobolParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return snobolParser.RULE_size; }
	// @Override
	public enterRule(listener: snobolListener): void {
		if (listener.enterSize) {
			listener.enterSize(this);
		}
	}
	// @Override
	public exitRule(listener: snobolListener): void {
		if (listener.exitSize) {
			listener.exitSize(this);
		}
	}
}


export class TrimContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(snobolParser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(snobolParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return snobolParser.RULE_trim; }
	// @Override
	public enterRule(listener: snobolListener): void {
		if (listener.enterTrim) {
			listener.enterTrim(this);
		}
	}
	// @Override
	public exitRule(listener: snobolListener): void {
		if (listener.exitTrim) {
			listener.exitTrim(this);
		}
	}
}


export class ArrayContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(snobolParser.LPAREN, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public COMMA(): TerminalNode { return this.getToken(snobolParser.COMMA, 0); }
	public RPAREN(): TerminalNode { return this.getToken(snobolParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return snobolParser.RULE_array; }
	// @Override
	public enterRule(listener: snobolListener): void {
		if (listener.enterArray) {
			listener.enterArray(this);
		}
	}
	// @Override
	public exitRule(listener: snobolListener): void {
		if (listener.exitArray) {
			listener.exitArray(this);
		}
	}
}


export class ConvertContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(snobolParser.LPAREN, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public COMMA(): TerminalNode { return this.getToken(snobolParser.COMMA, 0); }
	public RPAREN(): TerminalNode { return this.getToken(snobolParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return snobolParser.RULE_convert; }
	// @Override
	public enterRule(listener: snobolListener): void {
		if (listener.enterConvert) {
			listener.enterConvert(this);
		}
	}
	// @Override
	public exitRule(listener: snobolListener): void {
		if (listener.exitConvert) {
			listener.exitConvert(this);
		}
	}
}


export class TableContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(snobolParser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(snobolParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return snobolParser.RULE_table; }
	// @Override
	public enterRule(listener: snobolListener): void {
		if (listener.enterTable) {
			listener.enterTable(this);
		}
	}
	// @Override
	public exitRule(listener: snobolListener): void {
		if (listener.exitTable) {
			listener.exitTable(this);
		}
	}
}


export class SortContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(snobolParser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(snobolParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return snobolParser.RULE_sort; }
	// @Override
	public enterRule(listener: snobolListener): void {
		if (listener.enterSort) {
			listener.enterSort(this);
		}
	}
	// @Override
	public exitRule(listener: snobolListener): void {
		if (listener.exitSort) {
			listener.exitSort(this);
		}
	}
}


export class Break_Context extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(snobolParser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(snobolParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return snobolParser.RULE_break_; }
	// @Override
	public enterRule(listener: snobolListener): void {
		if (listener.enterBreak_) {
			listener.enterBreak_(this);
		}
	}
	// @Override
	public exitRule(listener: snobolListener): void {
		if (listener.exitBreak_) {
			listener.exitBreak_(this);
		}
	}
}


export class TransferContext extends ParserRuleContext {
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(snobolParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(snobolParser.RPAREN, 0); }
	public label(): LabelContext | undefined {
		return this.tryGetRuleContext(0, LabelContext);
	}
	public END(): TerminalNode | undefined { return this.tryGetToken(snobolParser.END, 0); }
	public transferpre(): TransferpreContext | undefined {
		return this.tryGetRuleContext(0, TransferpreContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return snobolParser.RULE_transfer; }
	// @Override
	public enterRule(listener: snobolListener): void {
		if (listener.enterTransfer) {
			listener.enterTransfer(this);
		}
	}
	// @Override
	public exitRule(listener: snobolListener): void {
		if (listener.exitTransfer) {
			listener.exitTransfer(this);
		}
	}
}


export class TransferpreContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return snobolParser.RULE_transferpre; }
	// @Override
	public enterRule(listener: snobolListener): void {
		if (listener.enterTransferpre) {
			listener.enterTransferpre(this);
		}
	}
	// @Override
	public exitRule(listener: snobolListener): void {
		if (listener.exitTransferpre) {
			listener.exitTransferpre(this);
		}
	}
}


