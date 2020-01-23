// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/matlab/matlab.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { matlabListener } from "./matlabListener";
import { matlabVisitor } from "./matlabVisitor";


export class matlabParser extends Parser {
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
	public static readonly ARRAYMUL = 20;
	public static readonly ARRAYDIV = 21;
	public static readonly ARRAYRDIV = 22;
	public static readonly ARRAYPOW = 23;
	public static readonly BREAK = 24;
	public static readonly RETURN = 25;
	public static readonly FUNCTION = 26;
	public static readonly FOR = 27;
	public static readonly WHILE = 28;
	public static readonly END = 29;
	public static readonly GLOBAL = 30;
	public static readonly IF = 31;
	public static readonly CLEAR = 32;
	public static readonly ELSE = 33;
	public static readonly ELSEIF = 34;
	public static readonly LE_OP = 35;
	public static readonly GE_OP = 36;
	public static readonly EQ_OP = 37;
	public static readonly NE_OP = 38;
	public static readonly TRANSPOSE = 39;
	public static readonly NCTRANSPOSE = 40;
	public static readonly STRING_LITERAL = 41;
	public static readonly IDENTIFIER = 42;
	public static readonly CONSTANT = 43;
	public static readonly CR = 44;
	public static readonly WS = 45;
	public static readonly RULE_primary_expression = 0;
	public static readonly RULE_postfix_expression = 1;
	public static readonly RULE_index_expression = 2;
	public static readonly RULE_index_expression_list = 3;
	public static readonly RULE_array_expression = 4;
	public static readonly RULE_unary_expression = 5;
	public static readonly RULE_unary_operator = 6;
	public static readonly RULE_multiplicative_expression = 7;
	public static readonly RULE_additive_expression = 8;
	public static readonly RULE_relational_expression = 9;
	public static readonly RULE_equality_expression = 10;
	public static readonly RULE_and_expression = 11;
	public static readonly RULE_or_expression = 12;
	public static readonly RULE_expression = 13;
	public static readonly RULE_assignment_expression = 14;
	public static readonly RULE_eostmt = 15;
	public static readonly RULE_statement = 16;
	public static readonly RULE_statement_list = 17;
	public static readonly RULE_identifier_list = 18;
	public static readonly RULE_global_statement = 19;
	public static readonly RULE_clear_statement = 20;
	public static readonly RULE_expression_statement = 21;
	public static readonly RULE_assignment_statement = 22;
	public static readonly RULE_array_element = 23;
	public static readonly RULE_array_list = 24;
	public static readonly RULE_selection_statement = 25;
	public static readonly RULE_elseif_clause = 26;
	public static readonly RULE_iteration_statement = 27;
	public static readonly RULE_jump_statement = 28;
	public static readonly RULE_translation_unit = 29;
	public static readonly RULE_func_ident_list = 30;
	public static readonly RULE_func_return_list = 31;
	public static readonly RULE_function_declare_lhs = 32;
	public static readonly RULE_function_declare = 33;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"primary_expression", "postfix_expression", "index_expression", "index_expression_list", 
		"array_expression", "unary_expression", "unary_operator", "multiplicative_expression", 
		"additive_expression", "relational_expression", "equality_expression", 
		"and_expression", "or_expression", "expression", "assignment_expression", 
		"eostmt", "statement", "statement_list", "identifier_list", "global_statement", 
		"clear_statement", "expression_statement", "assignment_statement", "array_element", 
		"array_list", "selection_statement", "elseif_clause", "iteration_statement", 
		"jump_statement", "translation_unit", "func_ident_list", "func_return_list", 
		"function_declare_lhs", "function_declare",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'('", "')'", "'['", "']'", "':'", "','", "'+'", "'-'", "'~'", 
		"'*'", "'/'", "'\\'", "'^'", "'<'", "'>'", "'&'", "'|'", "'='", "';'", 
		"'.*'", "'.\\'", "'./'", "'.^'", "'break'", "'return'", "'function'", 
		"'for'", "'while'", "'end'", "'global'", "'if'", "'clear'", "'else'", 
		"'elseif'", "'<='", "'>='", "'=='", "'~='", "'transpose'", "'.''",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, "ARRAYMUL", 
		"ARRAYDIV", "ARRAYRDIV", "ARRAYPOW", "BREAK", "RETURN", "FUNCTION", "FOR", 
		"WHILE", "END", "GLOBAL", "IF", "CLEAR", "ELSE", "ELSEIF", "LE_OP", "GE_OP", 
		"EQ_OP", "NE_OP", "TRANSPOSE", "NCTRANSPOSE", "STRING_LITERAL", "IDENTIFIER", 
		"CONSTANT", "CR", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(matlabParser._LITERAL_NAMES, matlabParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return matlabParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "matlab.g4"; }

	// @Override
	public get ruleNames(): string[] { return matlabParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return matlabParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(matlabParser._ATN, this);
	}
	// @RuleVersion(0)
	public primary_expression(): Primary_expressionContext {
		let _localctx: Primary_expressionContext = new Primary_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, matlabParser.RULE_primary_expression);
		try {
			this.state = 81;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 68;
				this.match(matlabParser.IDENTIFIER);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 69;
				this.match(matlabParser.CONSTANT);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 70;
				this.match(matlabParser.STRING_LITERAL);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 71;
				this.match(matlabParser.T__0);
				this.state = 72;
				this.expression(0);
				this.state = 73;
				this.match(matlabParser.T__1);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 75;
				this.match(matlabParser.T__2);
				this.state = 76;
				this.match(matlabParser.T__3);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 77;
				this.match(matlabParser.T__2);
				this.state = 78;
				this.array_list(0);
				this.state = 79;
				this.match(matlabParser.T__3);
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

	public postfix_expression(): Postfix_expressionContext;
	public postfix_expression(_p: number): Postfix_expressionContext;
	// @RuleVersion(0)
	public postfix_expression(_p?: number): Postfix_expressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Postfix_expressionContext = new Postfix_expressionContext(this._ctx, _parentState);
		let _prevctx: Postfix_expressionContext = _localctx;
		let _startState: number = 2;
		this.enterRecursionRule(_localctx, 2, matlabParser.RULE_postfix_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 86;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				{
				this.state = 84;
				this.primary_expression();
				}
				break;

			case 2:
				{
				this.state = 85;
				this.array_expression();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 94;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 92;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
					case 1:
						{
						_localctx = new Postfix_expressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, matlabParser.RULE_postfix_expression);
						this.state = 88;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 89;
						this.match(matlabParser.TRANSPOSE);
						}
						break;

					case 2:
						{
						_localctx = new Postfix_expressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, matlabParser.RULE_postfix_expression);
						this.state = 90;
						if (!(this.precpred(this._ctx, 1))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
						}
						this.state = 91;
						this.match(matlabParser.NCTRANSPOSE);
						}
						break;
					}
					}
				}
				this.state = 96;
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
	// @RuleVersion(0)
	public index_expression(): Index_expressionContext {
		let _localctx: Index_expressionContext = new Index_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, matlabParser.RULE_index_expression);
		try {
			this.state = 99;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case matlabParser.T__4:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 97;
				this.match(matlabParser.T__4);
				}
				break;
			case matlabParser.T__0:
			case matlabParser.T__2:
			case matlabParser.T__6:
			case matlabParser.T__7:
			case matlabParser.T__8:
			case matlabParser.STRING_LITERAL:
			case matlabParser.IDENTIFIER:
			case matlabParser.CONSTANT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 98;
				this.expression(0);
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

	public index_expression_list(): Index_expression_listContext;
	public index_expression_list(_p: number): Index_expression_listContext;
	// @RuleVersion(0)
	public index_expression_list(_p?: number): Index_expression_listContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Index_expression_listContext = new Index_expression_listContext(this._ctx, _parentState);
		let _prevctx: Index_expression_listContext = _localctx;
		let _startState: number = 6;
		this.enterRecursionRule(_localctx, 6, matlabParser.RULE_index_expression_list, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 102;
			this.index_expression();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 109;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new Index_expression_listContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, matlabParser.RULE_index_expression_list);
					this.state = 104;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 105;
					this.match(matlabParser.T__5);
					this.state = 106;
					this.index_expression();
					}
					}
				}
				this.state = 111;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
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
	public array_expression(): Array_expressionContext {
		let _localctx: Array_expressionContext = new Array_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, matlabParser.RULE_array_expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 112;
			this.match(matlabParser.IDENTIFIER);
			this.state = 113;
			this.match(matlabParser.T__0);
			this.state = 114;
			this.index_expression_list(0);
			this.state = 115;
			this.match(matlabParser.T__1);
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
	public unary_expression(): Unary_expressionContext {
		let _localctx: Unary_expressionContext = new Unary_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, matlabParser.RULE_unary_expression);
		try {
			this.state = 121;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case matlabParser.T__0:
			case matlabParser.T__2:
			case matlabParser.STRING_LITERAL:
			case matlabParser.IDENTIFIER:
			case matlabParser.CONSTANT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 117;
				this.postfix_expression(0);
				}
				break;
			case matlabParser.T__6:
			case matlabParser.T__7:
			case matlabParser.T__8:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 118;
				this.unary_operator();
				this.state = 119;
				this.postfix_expression(0);
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
	public unary_operator(): Unary_operatorContext {
		let _localctx: Unary_operatorContext = new Unary_operatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, matlabParser.RULE_unary_operator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 123;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << matlabParser.T__6) | (1 << matlabParser.T__7) | (1 << matlabParser.T__8))) !== 0))) {
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

	public multiplicative_expression(): Multiplicative_expressionContext;
	public multiplicative_expression(_p: number): Multiplicative_expressionContext;
	// @RuleVersion(0)
	public multiplicative_expression(_p?: number): Multiplicative_expressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Multiplicative_expressionContext = new Multiplicative_expressionContext(this._ctx, _parentState);
		let _prevctx: Multiplicative_expressionContext = _localctx;
		let _startState: number = 14;
		this.enterRecursionRule(_localctx, 14, matlabParser.RULE_multiplicative_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 126;
			this.unary_expression();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 154;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 152;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
					case 1:
						{
						_localctx = new Multiplicative_expressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, matlabParser.RULE_multiplicative_expression);
						this.state = 128;
						if (!(this.precpred(this._ctx, 8))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 8)");
						}
						this.state = 129;
						this.match(matlabParser.T__9);
						this.state = 130;
						this.unary_expression();
						}
						break;

					case 2:
						{
						_localctx = new Multiplicative_expressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, matlabParser.RULE_multiplicative_expression);
						this.state = 131;
						if (!(this.precpred(this._ctx, 7))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 7)");
						}
						this.state = 132;
						this.match(matlabParser.T__10);
						this.state = 133;
						this.unary_expression();
						}
						break;

					case 3:
						{
						_localctx = new Multiplicative_expressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, matlabParser.RULE_multiplicative_expression);
						this.state = 134;
						if (!(this.precpred(this._ctx, 6))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 6)");
						}
						this.state = 135;
						this.match(matlabParser.T__11);
						this.state = 136;
						this.unary_expression();
						}
						break;

					case 4:
						{
						_localctx = new Multiplicative_expressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, matlabParser.RULE_multiplicative_expression);
						this.state = 137;
						if (!(this.precpred(this._ctx, 5))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 5)");
						}
						this.state = 138;
						this.match(matlabParser.T__12);
						this.state = 139;
						this.unary_expression();
						}
						break;

					case 5:
						{
						_localctx = new Multiplicative_expressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, matlabParser.RULE_multiplicative_expression);
						this.state = 140;
						if (!(this.precpred(this._ctx, 4))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 4)");
						}
						this.state = 141;
						this.match(matlabParser.ARRAYMUL);
						this.state = 142;
						this.unary_expression();
						}
						break;

					case 6:
						{
						_localctx = new Multiplicative_expressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, matlabParser.RULE_multiplicative_expression);
						this.state = 143;
						if (!(this.precpred(this._ctx, 3))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						}
						this.state = 144;
						this.match(matlabParser.ARRAYDIV);
						this.state = 145;
						this.unary_expression();
						}
						break;

					case 7:
						{
						_localctx = new Multiplicative_expressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, matlabParser.RULE_multiplicative_expression);
						this.state = 146;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 147;
						this.match(matlabParser.ARRAYRDIV);
						this.state = 148;
						this.unary_expression();
						}
						break;

					case 8:
						{
						_localctx = new Multiplicative_expressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, matlabParser.RULE_multiplicative_expression);
						this.state = 149;
						if (!(this.precpred(this._ctx, 1))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
						}
						this.state = 150;
						this.match(matlabParser.ARRAYPOW);
						this.state = 151;
						this.unary_expression();
						}
						break;
					}
					}
				}
				this.state = 156;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
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

	public additive_expression(): Additive_expressionContext;
	public additive_expression(_p: number): Additive_expressionContext;
	// @RuleVersion(0)
	public additive_expression(_p?: number): Additive_expressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Additive_expressionContext = new Additive_expressionContext(this._ctx, _parentState);
		let _prevctx: Additive_expressionContext = _localctx;
		let _startState: number = 16;
		this.enterRecursionRule(_localctx, 16, matlabParser.RULE_additive_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 158;
			this.multiplicative_expression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 168;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 166;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
					case 1:
						{
						_localctx = new Additive_expressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, matlabParser.RULE_additive_expression);
						this.state = 160;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 161;
						this.match(matlabParser.T__6);
						this.state = 162;
						this.multiplicative_expression(0);
						}
						break;

					case 2:
						{
						_localctx = new Additive_expressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, matlabParser.RULE_additive_expression);
						this.state = 163;
						if (!(this.precpred(this._ctx, 1))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
						}
						this.state = 164;
						this.match(matlabParser.T__7);
						this.state = 165;
						this.multiplicative_expression(0);
						}
						break;
					}
					}
				}
				this.state = 170;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
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

	public relational_expression(): Relational_expressionContext;
	public relational_expression(_p: number): Relational_expressionContext;
	// @RuleVersion(0)
	public relational_expression(_p?: number): Relational_expressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Relational_expressionContext = new Relational_expressionContext(this._ctx, _parentState);
		let _prevctx: Relational_expressionContext = _localctx;
		let _startState: number = 18;
		this.enterRecursionRule(_localctx, 18, matlabParser.RULE_relational_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 172;
			this.additive_expression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 188;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 186;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
					case 1:
						{
						_localctx = new Relational_expressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, matlabParser.RULE_relational_expression);
						this.state = 174;
						if (!(this.precpred(this._ctx, 4))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 4)");
						}
						this.state = 175;
						this.match(matlabParser.T__13);
						this.state = 176;
						this.additive_expression(0);
						}
						break;

					case 2:
						{
						_localctx = new Relational_expressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, matlabParser.RULE_relational_expression);
						this.state = 177;
						if (!(this.precpred(this._ctx, 3))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						}
						this.state = 178;
						this.match(matlabParser.T__14);
						this.state = 179;
						this.additive_expression(0);
						}
						break;

					case 3:
						{
						_localctx = new Relational_expressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, matlabParser.RULE_relational_expression);
						this.state = 180;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 181;
						this.match(matlabParser.LE_OP);
						this.state = 182;
						this.additive_expression(0);
						}
						break;

					case 4:
						{
						_localctx = new Relational_expressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, matlabParser.RULE_relational_expression);
						this.state = 183;
						if (!(this.precpred(this._ctx, 1))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
						}
						this.state = 184;
						this.match(matlabParser.GE_OP);
						this.state = 185;
						this.additive_expression(0);
						}
						break;
					}
					}
				}
				this.state = 190;
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
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public equality_expression(): Equality_expressionContext;
	public equality_expression(_p: number): Equality_expressionContext;
	// @RuleVersion(0)
	public equality_expression(_p?: number): Equality_expressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Equality_expressionContext = new Equality_expressionContext(this._ctx, _parentState);
		let _prevctx: Equality_expressionContext = _localctx;
		let _startState: number = 20;
		this.enterRecursionRule(_localctx, 20, matlabParser.RULE_equality_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 192;
			this.relational_expression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 202;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 200;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
					case 1:
						{
						_localctx = new Equality_expressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, matlabParser.RULE_equality_expression);
						this.state = 194;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 195;
						this.match(matlabParser.EQ_OP);
						this.state = 196;
						this.relational_expression(0);
						}
						break;

					case 2:
						{
						_localctx = new Equality_expressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, matlabParser.RULE_equality_expression);
						this.state = 197;
						if (!(this.precpred(this._ctx, 1))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
						}
						this.state = 198;
						this.match(matlabParser.NE_OP);
						this.state = 199;
						this.relational_expression(0);
						}
						break;
					}
					}
				}
				this.state = 204;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
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

	public and_expression(): And_expressionContext;
	public and_expression(_p: number): And_expressionContext;
	// @RuleVersion(0)
	public and_expression(_p?: number): And_expressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: And_expressionContext = new And_expressionContext(this._ctx, _parentState);
		let _prevctx: And_expressionContext = _localctx;
		let _startState: number = 22;
		this.enterRecursionRule(_localctx, 22, matlabParser.RULE_and_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 206;
			this.equality_expression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 213;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new And_expressionContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, matlabParser.RULE_and_expression);
					this.state = 208;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 209;
					this.match(matlabParser.T__15);
					this.state = 210;
					this.equality_expression(0);
					}
					}
				}
				this.state = 215;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
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

	public or_expression(): Or_expressionContext;
	public or_expression(_p: number): Or_expressionContext;
	// @RuleVersion(0)
	public or_expression(_p?: number): Or_expressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Or_expressionContext = new Or_expressionContext(this._ctx, _parentState);
		let _prevctx: Or_expressionContext = _localctx;
		let _startState: number = 24;
		this.enterRecursionRule(_localctx, 24, matlabParser.RULE_or_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 217;
			this.and_expression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 224;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new Or_expressionContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, matlabParser.RULE_or_expression);
					this.state = 219;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 220;
					this.match(matlabParser.T__16);
					this.state = 221;
					this.and_expression(0);
					}
					}
				}
				this.state = 226;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
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
		let _startState: number = 26;
		this.enterRecursionRule(_localctx, 26, matlabParser.RULE_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 228;
			this.or_expression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 235;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new ExpressionContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, matlabParser.RULE_expression);
					this.state = 230;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 231;
					this.match(matlabParser.T__4);
					this.state = 232;
					this.or_expression(0);
					}
					}
				}
				this.state = 237;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
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
	public assignment_expression(): Assignment_expressionContext {
		let _localctx: Assignment_expressionContext = new Assignment_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, matlabParser.RULE_assignment_expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 238;
			this.postfix_expression(0);
			this.state = 239;
			this.match(matlabParser.T__17);
			this.state = 240;
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
	public eostmt(): EostmtContext {
		let _localctx: EostmtContext = new EostmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, matlabParser.RULE_eostmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 242;
			_la = this._input.LA(1);
			if (!(_la === matlabParser.T__5 || _la === matlabParser.T__18 || _la === matlabParser.CR)) {
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
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, matlabParser.RULE_statement);
		try {
			this.state = 251;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 18, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 244;
				this.global_statement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 245;
				this.clear_statement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 246;
				this.assignment_statement();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 247;
				this.expression_statement();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 248;
				this.selection_statement();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 249;
				this.iteration_statement();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 250;
				this.jump_statement();
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

	public statement_list(): Statement_listContext;
	public statement_list(_p: number): Statement_listContext;
	// @RuleVersion(0)
	public statement_list(_p?: number): Statement_listContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Statement_listContext = new Statement_listContext(this._ctx, _parentState);
		let _prevctx: Statement_listContext = _localctx;
		let _startState: number = 34;
		this.enterRecursionRule(_localctx, 34, matlabParser.RULE_statement_list, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 254;
			this.statement();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 260;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new Statement_listContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, matlabParser.RULE_statement_list);
					this.state = 256;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 257;
					this.statement();
					}
					}
				}
				this.state = 262;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
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

	public identifier_list(): Identifier_listContext;
	public identifier_list(_p: number): Identifier_listContext;
	// @RuleVersion(0)
	public identifier_list(_p?: number): Identifier_listContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Identifier_listContext = new Identifier_listContext(this._ctx, _parentState);
		let _prevctx: Identifier_listContext = _localctx;
		let _startState: number = 36;
		this.enterRecursionRule(_localctx, 36, matlabParser.RULE_identifier_list, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 264;
			this.match(matlabParser.IDENTIFIER);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 270;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new Identifier_listContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, matlabParser.RULE_identifier_list);
					this.state = 266;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 267;
					this.match(matlabParser.IDENTIFIER);
					}
					}
				}
				this.state = 272;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
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
	public global_statement(): Global_statementContext {
		let _localctx: Global_statementContext = new Global_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, matlabParser.RULE_global_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 273;
			this.match(matlabParser.GLOBAL);
			this.state = 274;
			this.identifier_list(0);
			this.state = 275;
			this.eostmt();
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
	public clear_statement(): Clear_statementContext {
		let _localctx: Clear_statementContext = new Clear_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, matlabParser.RULE_clear_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 277;
			this.match(matlabParser.CLEAR);
			this.state = 278;
			this.identifier_list(0);
			this.state = 279;
			this.eostmt();
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
	public expression_statement(): Expression_statementContext {
		let _localctx: Expression_statementContext = new Expression_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, matlabParser.RULE_expression_statement);
		try {
			this.state = 285;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case matlabParser.T__5:
			case matlabParser.T__18:
			case matlabParser.CR:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 281;
				this.eostmt();
				}
				break;
			case matlabParser.T__0:
			case matlabParser.T__2:
			case matlabParser.T__6:
			case matlabParser.T__7:
			case matlabParser.T__8:
			case matlabParser.STRING_LITERAL:
			case matlabParser.IDENTIFIER:
			case matlabParser.CONSTANT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 282;
				this.expression(0);
				this.state = 283;
				this.eostmt();
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
	public assignment_statement(): Assignment_statementContext {
		let _localctx: Assignment_statementContext = new Assignment_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, matlabParser.RULE_assignment_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 287;
			this.assignment_expression();
			this.state = 288;
			this.eostmt();
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
	public array_element(): Array_elementContext {
		let _localctx: Array_elementContext = new Array_elementContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, matlabParser.RULE_array_element);
		try {
			this.state = 292;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 290;
				this.expression(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 291;
				this.expression_statement();
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

	public array_list(): Array_listContext;
	public array_list(_p: number): Array_listContext;
	// @RuleVersion(0)
	public array_list(_p?: number): Array_listContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Array_listContext = new Array_listContext(this._ctx, _parentState);
		let _prevctx: Array_listContext = _localctx;
		let _startState: number = 48;
		this.enterRecursionRule(_localctx, 48, matlabParser.RULE_array_list, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 295;
			this.array_element();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 301;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new Array_listContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, matlabParser.RULE_array_list);
					this.state = 297;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 298;
					this.array_element();
					}
					}
				}
				this.state = 303;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
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
	public selection_statement(): Selection_statementContext {
		let _localctx: Selection_statementContext = new Selection_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, matlabParser.RULE_selection_statement);
		try {
			this.state = 334;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 24, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 304;
				this.match(matlabParser.IF);
				this.state = 305;
				this.expression(0);
				this.state = 306;
				this.statement_list(0);
				this.state = 307;
				this.match(matlabParser.END);
				this.state = 308;
				this.eostmt();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 310;
				this.match(matlabParser.IF);
				this.state = 311;
				this.expression(0);
				this.state = 312;
				this.statement_list(0);
				this.state = 313;
				this.match(matlabParser.ELSE);
				this.state = 314;
				this.statement_list(0);
				this.state = 315;
				this.match(matlabParser.END);
				this.state = 316;
				this.eostmt();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 318;
				this.match(matlabParser.IF);
				this.state = 319;
				this.expression(0);
				this.state = 320;
				this.statement_list(0);
				this.state = 321;
				this.elseif_clause(0);
				this.state = 322;
				this.match(matlabParser.END);
				this.state = 323;
				this.eostmt();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 325;
				this.match(matlabParser.IF);
				this.state = 326;
				this.expression(0);
				this.state = 327;
				this.statement_list(0);
				this.state = 328;
				this.elseif_clause(0);
				this.state = 329;
				this.match(matlabParser.ELSE);
				this.state = 330;
				this.statement_list(0);
				this.state = 331;
				this.match(matlabParser.END);
				this.state = 332;
				this.eostmt();
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

	public elseif_clause(): Elseif_clauseContext;
	public elseif_clause(_p: number): Elseif_clauseContext;
	// @RuleVersion(0)
	public elseif_clause(_p?: number): Elseif_clauseContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Elseif_clauseContext = new Elseif_clauseContext(this._ctx, _parentState);
		let _prevctx: Elseif_clauseContext = _localctx;
		let _startState: number = 52;
		this.enterRecursionRule(_localctx, 52, matlabParser.RULE_elseif_clause, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 337;
			this.match(matlabParser.ELSEIF);
			this.state = 338;
			this.expression(0);
			this.state = 339;
			this.statement_list(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 348;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new Elseif_clauseContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, matlabParser.RULE_elseif_clause);
					this.state = 341;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 342;
					this.match(matlabParser.ELSEIF);
					this.state = 343;
					this.expression(0);
					this.state = 344;
					this.statement_list(0);
					}
					}
				}
				this.state = 350;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
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
	public iteration_statement(): Iteration_statementContext {
		let _localctx: Iteration_statementContext = new Iteration_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, matlabParser.RULE_iteration_statement);
		try {
			this.state = 375;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 26, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 351;
				this.match(matlabParser.WHILE);
				this.state = 352;
				this.expression(0);
				this.state = 353;
				this.statement_list(0);
				this.state = 354;
				this.match(matlabParser.END);
				this.state = 355;
				this.eostmt();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 357;
				this.match(matlabParser.FOR);
				this.state = 358;
				this.match(matlabParser.IDENTIFIER);
				this.state = 359;
				this.match(matlabParser.T__17);
				this.state = 360;
				this.expression(0);
				this.state = 361;
				this.statement_list(0);
				this.state = 362;
				this.match(matlabParser.END);
				this.state = 363;
				this.eostmt();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 365;
				this.match(matlabParser.FOR);
				this.state = 366;
				this.match(matlabParser.T__0);
				this.state = 367;
				this.match(matlabParser.IDENTIFIER);
				this.state = 368;
				this.match(matlabParser.T__17);
				this.state = 369;
				this.expression(0);
				this.state = 370;
				this.match(matlabParser.T__1);
				this.state = 371;
				this.statement_list(0);
				this.state = 372;
				this.match(matlabParser.END);
				this.state = 373;
				this.eostmt();
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
	public jump_statement(): Jump_statementContext {
		let _localctx: Jump_statementContext = new Jump_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, matlabParser.RULE_jump_statement);
		try {
			this.state = 381;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case matlabParser.BREAK:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 377;
				this.match(matlabParser.BREAK);
				this.state = 378;
				this.eostmt();
				}
				break;
			case matlabParser.RETURN:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 379;
				this.match(matlabParser.RETURN);
				this.state = 380;
				this.eostmt();
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
	public translation_unit(): Translation_unitContext {
		let _localctx: Translation_unitContext = new Translation_unitContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, matlabParser.RULE_translation_unit);
		try {
			this.state = 389;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case matlabParser.T__0:
			case matlabParser.T__2:
			case matlabParser.T__5:
			case matlabParser.T__6:
			case matlabParser.T__7:
			case matlabParser.T__8:
			case matlabParser.T__18:
			case matlabParser.BREAK:
			case matlabParser.RETURN:
			case matlabParser.FOR:
			case matlabParser.WHILE:
			case matlabParser.GLOBAL:
			case matlabParser.IF:
			case matlabParser.CLEAR:
			case matlabParser.STRING_LITERAL:
			case matlabParser.IDENTIFIER:
			case matlabParser.CONSTANT:
			case matlabParser.CR:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 383;
				this.statement_list(0);
				}
				break;
			case matlabParser.FUNCTION:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 384;
				this.match(matlabParser.FUNCTION);
				this.state = 385;
				this.function_declare();
				this.state = 386;
				this.eostmt();
				this.state = 387;
				this.statement_list(0);
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

	public func_ident_list(): Func_ident_listContext;
	public func_ident_list(_p: number): Func_ident_listContext;
	// @RuleVersion(0)
	public func_ident_list(_p?: number): Func_ident_listContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Func_ident_listContext = new Func_ident_listContext(this._ctx, _parentState);
		let _prevctx: Func_ident_listContext = _localctx;
		let _startState: number = 60;
		this.enterRecursionRule(_localctx, 60, matlabParser.RULE_func_ident_list, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 392;
			this.match(matlabParser.IDENTIFIER);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 399;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new Func_ident_listContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, matlabParser.RULE_func_ident_list);
					this.state = 394;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 395;
					this.match(matlabParser.T__5);
					this.state = 396;
					this.match(matlabParser.IDENTIFIER);
					}
					}
				}
				this.state = 401;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
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
	public func_return_list(): Func_return_listContext {
		let _localctx: Func_return_listContext = new Func_return_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, matlabParser.RULE_func_return_list);
		try {
			this.state = 407;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case matlabParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 402;
				this.match(matlabParser.IDENTIFIER);
				}
				break;
			case matlabParser.T__2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 403;
				this.match(matlabParser.T__2);
				this.state = 404;
				this.func_ident_list(0);
				this.state = 405;
				this.match(matlabParser.T__3);
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
	public function_declare_lhs(): Function_declare_lhsContext {
		let _localctx: Function_declare_lhsContext = new Function_declare_lhsContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, matlabParser.RULE_function_declare_lhs);
		try {
			this.state = 418;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 31, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 409;
				this.match(matlabParser.IDENTIFIER);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 410;
				this.match(matlabParser.IDENTIFIER);
				this.state = 411;
				this.match(matlabParser.T__0);
				this.state = 412;
				this.match(matlabParser.T__1);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 413;
				this.match(matlabParser.IDENTIFIER);
				this.state = 414;
				this.match(matlabParser.T__0);
				this.state = 415;
				this.func_ident_list(0);
				this.state = 416;
				this.match(matlabParser.T__1);
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
	public function_declare(): Function_declareContext {
		let _localctx: Function_declareContext = new Function_declareContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, matlabParser.RULE_function_declare);
		try {
			this.state = 425;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 32, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 420;
				this.function_declare_lhs();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 421;
				this.func_return_list();
				this.state = 422;
				this.match(matlabParser.T__17);
				this.state = 423;
				this.function_declare_lhs();
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

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 1:
			return this.postfix_expression_sempred(_localctx as Postfix_expressionContext, predIndex);

		case 3:
			return this.index_expression_list_sempred(_localctx as Index_expression_listContext, predIndex);

		case 7:
			return this.multiplicative_expression_sempred(_localctx as Multiplicative_expressionContext, predIndex);

		case 8:
			return this.additive_expression_sempred(_localctx as Additive_expressionContext, predIndex);

		case 9:
			return this.relational_expression_sempred(_localctx as Relational_expressionContext, predIndex);

		case 10:
			return this.equality_expression_sempred(_localctx as Equality_expressionContext, predIndex);

		case 11:
			return this.and_expression_sempred(_localctx as And_expressionContext, predIndex);

		case 12:
			return this.or_expression_sempred(_localctx as Or_expressionContext, predIndex);

		case 13:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);

		case 17:
			return this.statement_list_sempred(_localctx as Statement_listContext, predIndex);

		case 18:
			return this.identifier_list_sempred(_localctx as Identifier_listContext, predIndex);

		case 24:
			return this.array_list_sempred(_localctx as Array_listContext, predIndex);

		case 26:
			return this.elseif_clause_sempred(_localctx as Elseif_clauseContext, predIndex);

		case 30:
			return this.func_ident_list_sempred(_localctx as Func_ident_listContext, predIndex);
		}
		return true;
	}
	private postfix_expression_sempred(_localctx: Postfix_expressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 2);

		case 1:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private index_expression_list_sempred(_localctx: Index_expression_listContext, predIndex: number): boolean {
		switch (predIndex) {
		case 2:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private multiplicative_expression_sempred(_localctx: Multiplicative_expressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 3:
			return this.precpred(this._ctx, 8);

		case 4:
			return this.precpred(this._ctx, 7);

		case 5:
			return this.precpred(this._ctx, 6);

		case 6:
			return this.precpred(this._ctx, 5);

		case 7:
			return this.precpred(this._ctx, 4);

		case 8:
			return this.precpred(this._ctx, 3);

		case 9:
			return this.precpred(this._ctx, 2);

		case 10:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private additive_expression_sempred(_localctx: Additive_expressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 11:
			return this.precpred(this._ctx, 2);

		case 12:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private relational_expression_sempred(_localctx: Relational_expressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 13:
			return this.precpred(this._ctx, 4);

		case 14:
			return this.precpred(this._ctx, 3);

		case 15:
			return this.precpred(this._ctx, 2);

		case 16:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private equality_expression_sempred(_localctx: Equality_expressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 17:
			return this.precpred(this._ctx, 2);

		case 18:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private and_expression_sempred(_localctx: And_expressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 19:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private or_expression_sempred(_localctx: Or_expressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 20:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 21:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private statement_list_sempred(_localctx: Statement_listContext, predIndex: number): boolean {
		switch (predIndex) {
		case 22:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private identifier_list_sempred(_localctx: Identifier_listContext, predIndex: number): boolean {
		switch (predIndex) {
		case 23:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private array_list_sempred(_localctx: Array_listContext, predIndex: number): boolean {
		switch (predIndex) {
		case 24:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private elseif_clause_sempred(_localctx: Elseif_clauseContext, predIndex: number): boolean {
		switch (predIndex) {
		case 25:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private func_ident_list_sempred(_localctx: Func_ident_listContext, predIndex: number): boolean {
		switch (predIndex) {
		case 26:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03/\u01AE\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03" +
		"\x02\x03\x02\x03\x02\x03\x02\x03\x02\x05\x02T\n\x02\x03\x03\x03\x03\x03" +
		"\x03\x05\x03Y\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x07\x03_\n\x03\f\x03" +
		"\x0E\x03b\v\x03\x03\x04\x03\x04\x05\x04f\n\x04\x03\x05\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x07\x05n\n\x05\f\x05\x0E\x05q\v\x05\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07|" +
		"\n\x07\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x07\t\x9B\n\t\f\t\x0E\t\x9E\v\t" +
		"\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x07\n\xA9\n\n\f" +
		"\n\x0E\n\xAC\v\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v" +
		"\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x07\v\xBD\n\v\f\v\x0E\v\xC0\v\v\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x07\f\xCB\n\f\f\f\x0E" +
		"\f\xCE\v\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x07\r\xD6\n\r\f\r\x0E\r" +
		"\xD9\v\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x07\x0E\xE1\n" +
		"\x0E\f\x0E\x0E\x0E\xE4\v\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x07\x0F\xEC\n\x0F\f\x0F\x0E\x0F\xEF\v\x0F\x03\x10\x03\x10\x03\x10" +
		"\x03\x10\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
		"\x03\x12\x05\x12\xFE\n\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x07" +
		"\x13\u0105\n\x13\f\x13\x0E\x13\u0108\v\x13\x03\x14\x03\x14\x03\x14\x03" +
		"\x14\x03\x14\x07\x14\u010F\n\x14\f\x14\x0E\x14\u0112\v\x14\x03\x15\x03" +
		"\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03" +
		"\x17\x03\x17\x05\x17\u0120\n\x17\x03\x18\x03\x18\x03\x18\x03\x19\x03\x19" +
		"\x05\x19\u0127\n\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x07\x1A\u012E" +
		"\n\x1A\f\x1A\x0E\x1A\u0131\v\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B" +
		"\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B" +
		"\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B" +
		"\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u0151" +
		"\n\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C" +
		"\x03\x1C\x03\x1C\x07\x1C\u015D\n\x1C\f\x1C\x0E\x1C\u0160\v\x1C\x03\x1D" +
		"\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D" +
		"\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D" +
		"\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u017A\n\x1D\x03\x1E\x03" +
		"\x1E\x03\x1E\x03\x1E\x05\x1E\u0180\n\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F" +
		"\x03\x1F\x03\x1F\x05\x1F\u0188\n\x1F\x03 \x03 \x03 \x03 \x03 \x03 \x07" +
		" \u0190\n \f \x0E \u0193\v \x03!\x03!\x03!\x03!\x03!\x05!\u019A\n!\x03" +
		"\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x05\"\u01A5\n\"\x03" +
		"#\x03#\x03#\x03#\x03#\x05#\u01AC\n#\x03#\x02\x02\x10\x04\b\x10\x12\x14" +
		"\x16\x18\x1A\x1C$&26>$\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02" +
		"\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02" +
		"\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02" +
		">\x02@\x02B\x02D\x02\x02\x04\x03\x02\t\v\x05\x02\b\b\x15\x15..\x02\u01C1" +
		"\x02S\x03\x02\x02\x02\x04X\x03\x02\x02\x02\x06e\x03\x02\x02\x02\bg\x03" +
		"\x02\x02\x02\nr\x03\x02\x02\x02\f{\x03\x02\x02\x02\x0E}\x03\x02\x02\x02" +
		"\x10\x7F\x03\x02\x02\x02\x12\x9F\x03\x02\x02\x02\x14\xAD\x03\x02\x02\x02" +
		"\x16\xC1\x03\x02\x02\x02\x18\xCF\x03\x02\x02\x02\x1A\xDA\x03\x02\x02\x02" +
		"\x1C\xE5\x03\x02\x02\x02\x1E\xF0\x03\x02\x02\x02 \xF4\x03\x02\x02\x02" +
		"\"\xFD\x03\x02\x02\x02$\xFF\x03\x02\x02\x02&\u0109\x03\x02\x02\x02(\u0113" +
		"\x03\x02\x02\x02*\u0117\x03\x02\x02\x02,\u011F\x03\x02\x02\x02.\u0121" +
		"\x03\x02\x02\x020\u0126\x03\x02\x02\x022\u0128\x03\x02\x02\x024\u0150" +
		"\x03\x02\x02\x026\u0152\x03\x02\x02\x028\u0179\x03\x02\x02\x02:\u017F" +
		"\x03\x02\x02\x02<\u0187\x03\x02\x02\x02>\u0189\x03\x02\x02\x02@\u0199" +
		"\x03\x02\x02\x02B\u01A4\x03\x02\x02\x02D\u01AB\x03\x02\x02\x02FT\x07," +
		"\x02\x02GT\x07-\x02\x02HT\x07+\x02\x02IJ\x07\x03\x02\x02JK\x05\x1C\x0F" +
		"\x02KL\x07\x04\x02\x02LT\x03\x02\x02\x02MN\x07\x05\x02\x02NT\x07\x06\x02" +
		"\x02OP\x07\x05\x02\x02PQ\x052\x1A\x02QR\x07\x06\x02\x02RT\x03\x02\x02" +
		"\x02SF\x03\x02\x02\x02SG\x03\x02\x02\x02SH\x03\x02\x02\x02SI\x03\x02\x02" +
		"\x02SM\x03\x02\x02\x02SO\x03\x02\x02\x02T\x03\x03\x02\x02\x02UV\b\x03" +
		"\x01\x02VY\x05\x02\x02\x02WY\x05\n\x06\x02XU\x03\x02\x02\x02XW\x03\x02" +
		"\x02\x02Y`\x03\x02\x02\x02Z[\f\x04\x02\x02[_\x07)\x02\x02\\]\f\x03\x02" +
		"\x02]_\x07*\x02\x02^Z\x03\x02\x02\x02^\\\x03\x02\x02\x02_b\x03\x02\x02" +
		"\x02`^\x03\x02\x02\x02`a\x03\x02\x02\x02a\x05\x03\x02\x02\x02b`\x03\x02" +
		"\x02\x02cf\x07\x07\x02\x02df\x05\x1C\x0F\x02ec\x03\x02\x02\x02ed\x03\x02" +
		"\x02\x02f\x07\x03\x02\x02\x02gh\b\x05\x01\x02hi\x05\x06\x04\x02io\x03" +
		"\x02\x02\x02jk\f\x03\x02\x02kl\x07\b\x02\x02ln\x05\x06\x04\x02mj\x03\x02" +
		"\x02\x02nq\x03\x02\x02\x02om\x03\x02\x02\x02op\x03\x02\x02\x02p\t\x03" +
		"\x02\x02\x02qo\x03\x02\x02\x02rs\x07,\x02\x02st\x07\x03\x02\x02tu\x05" +
		"\b\x05\x02uv\x07\x04\x02\x02v\v\x03\x02\x02\x02w|\x05\x04\x03\x02xy\x05" +
		"\x0E\b\x02yz\x05\x04\x03\x02z|\x03\x02\x02\x02{w\x03\x02\x02\x02{x\x03" +
		"\x02\x02\x02|\r\x03\x02\x02\x02}~\t\x02\x02\x02~\x0F\x03\x02\x02\x02\x7F" +
		"\x80\b\t\x01\x02\x80\x81\x05\f\x07\x02\x81\x9C\x03\x02\x02\x02\x82\x83" +
		"\f\n\x02\x02\x83\x84\x07\f\x02\x02\x84\x9B\x05\f\x07\x02\x85\x86\f\t\x02" +
		"\x02\x86\x87\x07\r\x02\x02\x87\x9B\x05\f\x07\x02\x88\x89\f\b\x02\x02\x89" +
		"\x8A\x07\x0E\x02\x02\x8A\x9B\x05\f\x07\x02\x8B\x8C\f\x07\x02\x02\x8C\x8D" +
		"\x07\x0F\x02\x02\x8D\x9B\x05\f\x07\x02\x8E\x8F\f\x06\x02\x02\x8F\x90\x07" +
		"\x16\x02\x02\x90\x9B\x05\f\x07\x02\x91\x92\f\x05\x02\x02\x92\x93\x07\x17" +
		"\x02\x02\x93\x9B\x05\f\x07\x02\x94\x95\f\x04\x02\x02\x95\x96\x07\x18\x02" +
		"\x02\x96\x9B\x05\f\x07\x02\x97\x98\f\x03\x02\x02\x98\x99\x07\x19\x02\x02" +
		"\x99\x9B\x05\f\x07\x02\x9A\x82\x03\x02\x02\x02\x9A\x85\x03\x02\x02\x02" +
		"\x9A\x88\x03\x02\x02\x02\x9A\x8B\x03\x02\x02\x02\x9A\x8E\x03\x02\x02\x02" +
		"\x9A\x91\x03\x02\x02\x02\x9A\x94\x03\x02\x02\x02\x9A\x97\x03\x02\x02\x02" +
		"\x9B\x9E\x03\x02\x02\x02\x9C\x9A\x03\x02\x02\x02\x9C\x9D\x03\x02\x02\x02" +
		"\x9D\x11\x03\x02\x02\x02\x9E\x9C\x03\x02\x02\x02\x9F\xA0\b\n\x01\x02\xA0" +
		"\xA1\x05\x10\t\x02\xA1\xAA\x03\x02\x02\x02\xA2\xA3\f\x04\x02\x02\xA3\xA4" +
		"\x07\t\x02\x02\xA4\xA9\x05\x10\t\x02\xA5\xA6\f\x03\x02\x02\xA6\xA7\x07" +
		"\n\x02\x02\xA7\xA9\x05\x10\t\x02\xA8\xA2\x03\x02\x02\x02\xA8\xA5\x03\x02" +
		"\x02\x02\xA9\xAC\x03\x02\x02\x02\xAA\xA8\x03\x02\x02\x02\xAA\xAB\x03\x02" +
		"\x02\x02\xAB\x13\x03\x02\x02\x02\xAC\xAA\x03\x02\x02\x02\xAD\xAE\b\v\x01" +
		"\x02\xAE\xAF\x05\x12\n\x02\xAF\xBE\x03\x02\x02\x02\xB0\xB1\f\x06\x02\x02" +
		"\xB1\xB2\x07\x10\x02\x02\xB2\xBD\x05\x12\n\x02\xB3\xB4\f\x05\x02\x02\xB4" +
		"\xB5\x07\x11\x02\x02\xB5\xBD\x05\x12\n\x02\xB6\xB7\f\x04\x02\x02\xB7\xB8" +
		"\x07%\x02\x02\xB8\xBD\x05\x12\n\x02\xB9\xBA\f\x03\x02\x02\xBA\xBB\x07" +
		"&\x02\x02\xBB\xBD\x05\x12\n\x02\xBC\xB0\x03\x02\x02\x02\xBC\xB3\x03\x02" +
		"\x02\x02\xBC\xB6\x03\x02\x02\x02\xBC\xB9\x03\x02\x02\x02\xBD\xC0\x03\x02" +
		"\x02\x02\xBE\xBC\x03\x02\x02\x02\xBE\xBF\x03\x02\x02\x02\xBF\x15\x03\x02" +
		"\x02\x02\xC0\xBE\x03\x02\x02\x02\xC1\xC2\b\f\x01\x02\xC2\xC3\x05\x14\v" +
		"\x02\xC3\xCC\x03\x02\x02\x02\xC4\xC5\f\x04\x02\x02\xC5\xC6\x07\'\x02\x02" +
		"\xC6\xCB\x05\x14\v\x02\xC7\xC8\f\x03\x02\x02\xC8\xC9\x07(\x02\x02\xC9" +
		"\xCB\x05\x14\v\x02\xCA\xC4\x03\x02\x02\x02\xCA\xC7\x03\x02\x02\x02\xCB" +
		"\xCE\x03\x02\x02\x02\xCC\xCA\x03\x02\x02\x02\xCC\xCD\x03\x02\x02\x02\xCD" +
		"\x17\x03\x02\x02\x02\xCE\xCC\x03\x02\x02\x02\xCF\xD0\b\r\x01\x02\xD0\xD1" +
		"\x05\x16\f\x02\xD1\xD7\x03\x02\x02\x02\xD2\xD3\f\x03\x02\x02\xD3\xD4\x07" +
		"\x12\x02\x02\xD4\xD6\x05\x16\f\x02\xD5\xD2\x03\x02\x02\x02\xD6\xD9\x03" +
		"\x02\x02\x02\xD7\xD5\x03\x02\x02\x02\xD7\xD8\x03\x02\x02\x02\xD8\x19\x03" +
		"\x02\x02\x02\xD9\xD7\x03\x02\x02\x02\xDA\xDB\b\x0E\x01\x02\xDB\xDC\x05" +
		"\x18\r\x02\xDC\xE2\x03\x02\x02\x02\xDD\xDE\f\x03\x02\x02\xDE\xDF\x07\x13" +
		"\x02\x02\xDF\xE1\x05\x18\r\x02\xE0\xDD\x03\x02\x02\x02\xE1\xE4\x03\x02" +
		"\x02\x02\xE2\xE0\x03\x02\x02\x02\xE2\xE3\x03\x02\x02\x02\xE3\x1B\x03\x02" +
		"\x02\x02\xE4\xE2\x03\x02\x02\x02\xE5\xE6\b\x0F\x01\x02\xE6\xE7\x05\x1A" +
		"\x0E\x02\xE7\xED\x03\x02\x02\x02\xE8\xE9\f\x03\x02\x02\xE9\xEA\x07\x07" +
		"\x02\x02\xEA\xEC\x05\x1A\x0E\x02\xEB\xE8\x03\x02\x02\x02\xEC\xEF\x03\x02" +
		"\x02\x02\xED\xEB\x03\x02\x02\x02\xED\xEE\x03\x02\x02\x02\xEE\x1D\x03\x02" +
		"\x02\x02\xEF\xED\x03\x02\x02\x02\xF0\xF1\x05\x04\x03\x02\xF1\xF2\x07\x14" +
		"\x02\x02\xF2\xF3\x05\x1C\x0F\x02\xF3\x1F\x03\x02\x02\x02\xF4\xF5\t\x03" +
		"\x02\x02\xF5!\x03\x02\x02\x02\xF6\xFE\x05(\x15\x02\xF7\xFE\x05*\x16\x02" +
		"\xF8\xFE\x05.\x18\x02\xF9\xFE\x05,\x17\x02\xFA\xFE\x054\x1B\x02\xFB\xFE" +
		"\x058\x1D\x02\xFC\xFE\x05:\x1E\x02\xFD\xF6\x03\x02\x02\x02\xFD\xF7\x03" +
		"\x02\x02\x02\xFD\xF8\x03\x02\x02\x02\xFD\xF9\x03\x02\x02\x02\xFD\xFA\x03" +
		"\x02\x02\x02\xFD\xFB\x03\x02\x02\x02\xFD\xFC\x03\x02\x02\x02\xFE#\x03" +
		"\x02\x02\x02\xFF\u0100\b\x13\x01\x02\u0100\u0101\x05\"\x12\x02\u0101\u0106" +
		"\x03\x02\x02\x02\u0102\u0103\f\x03\x02\x02\u0103\u0105\x05\"\x12\x02\u0104" +
		"\u0102\x03\x02\x02\x02\u0105\u0108\x03\x02\x02\x02\u0106\u0104\x03\x02" +
		"\x02\x02\u0106\u0107\x03\x02\x02\x02\u0107%\x03\x02\x02\x02\u0108\u0106" +
		"\x03\x02\x02\x02\u0109\u010A\b\x14\x01\x02\u010A\u010B\x07,\x02\x02\u010B" +
		"\u0110\x03\x02\x02\x02\u010C\u010D\f\x03\x02\x02\u010D\u010F\x07,\x02" +
		"\x02\u010E\u010C\x03\x02\x02\x02\u010F\u0112\x03\x02\x02\x02\u0110\u010E" +
		"\x03\x02\x02\x02\u0110\u0111\x03\x02\x02\x02\u0111\'\x03\x02\x02\x02\u0112" +
		"\u0110\x03\x02\x02\x02\u0113\u0114\x07 \x02\x02\u0114\u0115\x05&\x14\x02" +
		"\u0115\u0116\x05 \x11\x02\u0116)\x03\x02\x02\x02\u0117\u0118\x07\"\x02" +
		"\x02\u0118\u0119\x05&\x14\x02\u0119\u011A\x05 \x11\x02\u011A+\x03\x02" +
		"\x02\x02\u011B\u0120\x05 \x11\x02\u011C\u011D\x05\x1C\x0F\x02\u011D\u011E" +
		"\x05 \x11\x02\u011E\u0120\x03\x02\x02\x02\u011F\u011B\x03\x02\x02\x02" +
		"\u011F\u011C\x03\x02\x02\x02\u0120-\x03\x02\x02\x02\u0121\u0122\x05\x1E" +
		"\x10\x02\u0122\u0123\x05 \x11\x02\u0123/\x03\x02\x02\x02\u0124\u0127\x05" +
		"\x1C\x0F\x02\u0125\u0127\x05,\x17\x02\u0126\u0124\x03\x02\x02\x02\u0126" +
		"\u0125\x03\x02\x02\x02\u01271\x03\x02\x02\x02\u0128\u0129\b\x1A\x01\x02" +
		"\u0129\u012A\x050\x19\x02\u012A\u012F\x03\x02\x02\x02\u012B\u012C\f\x03" +
		"\x02\x02\u012C\u012E\x050\x19\x02\u012D\u012B\x03\x02\x02\x02\u012E\u0131" +
		"\x03\x02\x02\x02\u012F\u012D\x03\x02\x02\x02\u012F\u0130\x03\x02\x02\x02" +
		"\u01303\x03\x02\x02\x02\u0131\u012F\x03\x02\x02\x02\u0132\u0133\x07!\x02" +
		"\x02\u0133\u0134\x05\x1C\x0F\x02\u0134\u0135\x05$\x13\x02\u0135\u0136" +
		"\x07\x1F\x02\x02\u0136\u0137\x05 \x11\x02\u0137\u0151\x03\x02\x02\x02" +
		"\u0138\u0139\x07!\x02\x02\u0139\u013A\x05\x1C\x0F\x02\u013A\u013B\x05" +
		"$\x13\x02\u013B\u013C\x07#\x02\x02\u013C\u013D\x05$\x13\x02\u013D\u013E" +
		"\x07\x1F\x02\x02\u013E\u013F\x05 \x11\x02\u013F\u0151\x03\x02\x02\x02" +
		"\u0140\u0141\x07!\x02\x02\u0141\u0142\x05\x1C\x0F\x02\u0142\u0143\x05" +
		"$\x13\x02\u0143\u0144\x056\x1C\x02\u0144\u0145\x07\x1F\x02\x02\u0145\u0146" +
		"\x05 \x11\x02\u0146\u0151\x03\x02\x02\x02\u0147\u0148\x07!\x02\x02\u0148" +
		"\u0149\x05\x1C\x0F\x02\u0149\u014A\x05$\x13\x02\u014A\u014B\x056\x1C\x02" +
		"\u014B\u014C\x07#\x02\x02\u014C\u014D\x05$\x13\x02\u014D\u014E\x07\x1F" +
		"\x02\x02\u014E\u014F\x05 \x11\x02\u014F\u0151\x03\x02\x02\x02\u0150\u0132" +
		"\x03\x02\x02\x02\u0150\u0138\x03\x02\x02\x02\u0150\u0140\x03\x02\x02\x02" +
		"\u0150\u0147\x03\x02\x02\x02\u01515\x03\x02\x02\x02\u0152\u0153\b\x1C" +
		"\x01\x02\u0153\u0154\x07$\x02\x02\u0154\u0155\x05\x1C\x0F\x02\u0155\u0156" +
		"\x05$\x13\x02\u0156\u015E\x03\x02\x02\x02\u0157\u0158\f\x03\x02\x02\u0158" +
		"\u0159\x07$\x02\x02\u0159\u015A\x05\x1C\x0F\x02\u015A\u015B\x05$\x13\x02" +
		"\u015B\u015D\x03\x02\x02\x02\u015C\u0157\x03\x02\x02\x02\u015D\u0160\x03" +
		"\x02\x02\x02\u015E\u015C\x03\x02\x02\x02\u015E\u015F\x03\x02\x02\x02\u015F" +
		"7\x03\x02\x02\x02\u0160\u015E\x03\x02\x02\x02\u0161\u0162\x07\x1E\x02" +
		"\x02\u0162\u0163\x05\x1C\x0F\x02\u0163\u0164\x05$\x13\x02\u0164\u0165" +
		"\x07\x1F\x02\x02\u0165\u0166\x05 \x11\x02\u0166\u017A\x03\x02\x02\x02" +
		"\u0167\u0168\x07\x1D\x02\x02\u0168\u0169\x07,\x02\x02\u0169\u016A\x07" +
		"\x14\x02\x02\u016A\u016B\x05\x1C\x0F\x02\u016B\u016C\x05$\x13\x02\u016C" +
		"\u016D\x07\x1F\x02\x02\u016D\u016E\x05 \x11\x02\u016E\u017A\x03\x02\x02" +
		"\x02\u016F\u0170\x07\x1D\x02\x02\u0170\u0171\x07\x03\x02\x02\u0171\u0172" +
		"\x07,\x02\x02\u0172\u0173\x07\x14\x02\x02\u0173\u0174\x05\x1C\x0F\x02" +
		"\u0174\u0175\x07\x04\x02\x02\u0175\u0176\x05$\x13\x02\u0176\u0177\x07" +
		"\x1F\x02\x02\u0177\u0178\x05 \x11\x02\u0178\u017A\x03\x02\x02\x02\u0179" +
		"\u0161\x03\x02\x02\x02\u0179\u0167\x03\x02\x02\x02\u0179\u016F\x03\x02" +
		"\x02\x02\u017A9\x03\x02\x02\x02\u017B\u017C\x07\x1A\x02\x02\u017C\u0180" +
		"\x05 \x11\x02\u017D\u017E\x07\x1B\x02\x02\u017E\u0180\x05 \x11\x02\u017F" +
		"\u017B\x03\x02\x02\x02\u017F\u017D\x03\x02\x02\x02\u0180;\x03\x02\x02" +
		"\x02\u0181\u0188\x05$\x13\x02\u0182\u0183\x07\x1C\x02\x02\u0183\u0184" +
		"\x05D#\x02\u0184\u0185\x05 \x11\x02\u0185\u0186\x05$\x13\x02\u0186\u0188" +
		"\x03\x02\x02\x02\u0187\u0181\x03\x02\x02\x02\u0187\u0182\x03\x02\x02\x02" +
		"\u0188=\x03\x02\x02\x02\u0189\u018A\b \x01\x02\u018A\u018B\x07,\x02\x02" +
		"\u018B\u0191\x03\x02\x02\x02\u018C\u018D\f\x03\x02\x02\u018D\u018E\x07" +
		"\b\x02\x02\u018E\u0190\x07,\x02\x02\u018F\u018C\x03\x02\x02\x02\u0190" +
		"\u0193\x03\x02\x02\x02\u0191\u018F\x03\x02\x02\x02\u0191\u0192\x03\x02" +
		"\x02\x02\u0192?\x03\x02\x02\x02\u0193\u0191\x03\x02\x02\x02\u0194\u019A" +
		"\x07,\x02\x02\u0195\u0196\x07\x05\x02\x02\u0196\u0197\x05> \x02\u0197" +
		"\u0198\x07\x06\x02\x02\u0198\u019A\x03\x02\x02\x02\u0199\u0194\x03\x02" +
		"\x02\x02\u0199\u0195\x03\x02\x02\x02\u019AA\x03\x02\x02\x02\u019B\u01A5" +
		"\x07,\x02\x02\u019C\u019D\x07,\x02\x02\u019D\u019E\x07\x03\x02\x02\u019E" +
		"\u01A5\x07\x04\x02\x02\u019F\u01A0\x07,\x02\x02\u01A0\u01A1\x07\x03\x02" +
		"\x02\u01A1\u01A2\x05> \x02\u01A2\u01A3\x07\x04\x02\x02\u01A3\u01A5\x03" +
		"\x02\x02\x02\u01A4\u019B\x03\x02\x02\x02\u01A4\u019C\x03\x02\x02\x02\u01A4" +
		"\u019F\x03\x02\x02\x02\u01A5C\x03\x02\x02\x02\u01A6\u01AC\x05B\"\x02\u01A7" +
		"\u01A8\x05@!\x02\u01A8\u01A9\x07\x14\x02\x02\u01A9\u01AA\x05B\"\x02\u01AA" +
		"\u01AC\x03\x02\x02\x02\u01AB\u01A6\x03\x02\x02\x02\u01AB\u01A7\x03\x02" +
		"\x02\x02\u01ACE\x03\x02\x02\x02#SX^`eo{\x9A\x9C\xA8\xAA\xBC\xBE\xCA\xCC" +
		"\xD7\xE2\xED\xFD\u0106\u0110\u011F\u0126\u012F\u0150\u015E\u0179\u017F" +
		"\u0187\u0191\u0199\u01A4\u01AB";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!matlabParser.__ATN) {
			matlabParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(matlabParser._serializedATN));
		}

		return matlabParser.__ATN;
	}

}

export class Primary_expressionContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(matlabParser.IDENTIFIER, 0); }
	public CONSTANT(): TerminalNode | undefined { return this.tryGetToken(matlabParser.CONSTANT, 0); }
	public STRING_LITERAL(): TerminalNode | undefined { return this.tryGetToken(matlabParser.STRING_LITERAL, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public array_list(): Array_listContext | undefined {
		return this.tryGetRuleContext(0, Array_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matlabParser.RULE_primary_expression; }
	// @Override
	public enterRule(listener: matlabListener): void {
		if (listener.enterPrimary_expression) {
			listener.enterPrimary_expression(this);
		}
	}
	// @Override
	public exitRule(listener: matlabListener): void {
		if (listener.exitPrimary_expression) {
			listener.exitPrimary_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: matlabVisitor<Result>): Result {
		if (visitor.visitPrimary_expression) {
			return visitor.visitPrimary_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Postfix_expressionContext extends ParserRuleContext {
	public primary_expression(): Primary_expressionContext | undefined {
		return this.tryGetRuleContext(0, Primary_expressionContext);
	}
	public array_expression(): Array_expressionContext | undefined {
		return this.tryGetRuleContext(0, Array_expressionContext);
	}
	public postfix_expression(): Postfix_expressionContext | undefined {
		return this.tryGetRuleContext(0, Postfix_expressionContext);
	}
	public TRANSPOSE(): TerminalNode | undefined { return this.tryGetToken(matlabParser.TRANSPOSE, 0); }
	public NCTRANSPOSE(): TerminalNode | undefined { return this.tryGetToken(matlabParser.NCTRANSPOSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matlabParser.RULE_postfix_expression; }
	// @Override
	public enterRule(listener: matlabListener): void {
		if (listener.enterPostfix_expression) {
			listener.enterPostfix_expression(this);
		}
	}
	// @Override
	public exitRule(listener: matlabListener): void {
		if (listener.exitPostfix_expression) {
			listener.exitPostfix_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: matlabVisitor<Result>): Result {
		if (visitor.visitPostfix_expression) {
			return visitor.visitPostfix_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Index_expressionContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matlabParser.RULE_index_expression; }
	// @Override
	public enterRule(listener: matlabListener): void {
		if (listener.enterIndex_expression) {
			listener.enterIndex_expression(this);
		}
	}
	// @Override
	public exitRule(listener: matlabListener): void {
		if (listener.exitIndex_expression) {
			listener.exitIndex_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: matlabVisitor<Result>): Result {
		if (visitor.visitIndex_expression) {
			return visitor.visitIndex_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Index_expression_listContext extends ParserRuleContext {
	public index_expression(): Index_expressionContext {
		return this.getRuleContext(0, Index_expressionContext);
	}
	public index_expression_list(): Index_expression_listContext | undefined {
		return this.tryGetRuleContext(0, Index_expression_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matlabParser.RULE_index_expression_list; }
	// @Override
	public enterRule(listener: matlabListener): void {
		if (listener.enterIndex_expression_list) {
			listener.enterIndex_expression_list(this);
		}
	}
	// @Override
	public exitRule(listener: matlabListener): void {
		if (listener.exitIndex_expression_list) {
			listener.exitIndex_expression_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: matlabVisitor<Result>): Result {
		if (visitor.visitIndex_expression_list) {
			return visitor.visitIndex_expression_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Array_expressionContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(matlabParser.IDENTIFIER, 0); }
	public index_expression_list(): Index_expression_listContext {
		return this.getRuleContext(0, Index_expression_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matlabParser.RULE_array_expression; }
	// @Override
	public enterRule(listener: matlabListener): void {
		if (listener.enterArray_expression) {
			listener.enterArray_expression(this);
		}
	}
	// @Override
	public exitRule(listener: matlabListener): void {
		if (listener.exitArray_expression) {
			listener.exitArray_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: matlabVisitor<Result>): Result {
		if (visitor.visitArray_expression) {
			return visitor.visitArray_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Unary_expressionContext extends ParserRuleContext {
	public postfix_expression(): Postfix_expressionContext {
		return this.getRuleContext(0, Postfix_expressionContext);
	}
	public unary_operator(): Unary_operatorContext | undefined {
		return this.tryGetRuleContext(0, Unary_operatorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matlabParser.RULE_unary_expression; }
	// @Override
	public enterRule(listener: matlabListener): void {
		if (listener.enterUnary_expression) {
			listener.enterUnary_expression(this);
		}
	}
	// @Override
	public exitRule(listener: matlabListener): void {
		if (listener.exitUnary_expression) {
			listener.exitUnary_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: matlabVisitor<Result>): Result {
		if (visitor.visitUnary_expression) {
			return visitor.visitUnary_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Unary_operatorContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matlabParser.RULE_unary_operator; }
	// @Override
	public enterRule(listener: matlabListener): void {
		if (listener.enterUnary_operator) {
			listener.enterUnary_operator(this);
		}
	}
	// @Override
	public exitRule(listener: matlabListener): void {
		if (listener.exitUnary_operator) {
			listener.exitUnary_operator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: matlabVisitor<Result>): Result {
		if (visitor.visitUnary_operator) {
			return visitor.visitUnary_operator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Multiplicative_expressionContext extends ParserRuleContext {
	public unary_expression(): Unary_expressionContext {
		return this.getRuleContext(0, Unary_expressionContext);
	}
	public multiplicative_expression(): Multiplicative_expressionContext | undefined {
		return this.tryGetRuleContext(0, Multiplicative_expressionContext);
	}
	public ARRAYMUL(): TerminalNode | undefined { return this.tryGetToken(matlabParser.ARRAYMUL, 0); }
	public ARRAYDIV(): TerminalNode | undefined { return this.tryGetToken(matlabParser.ARRAYDIV, 0); }
	public ARRAYRDIV(): TerminalNode | undefined { return this.tryGetToken(matlabParser.ARRAYRDIV, 0); }
	public ARRAYPOW(): TerminalNode | undefined { return this.tryGetToken(matlabParser.ARRAYPOW, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matlabParser.RULE_multiplicative_expression; }
	// @Override
	public enterRule(listener: matlabListener): void {
		if (listener.enterMultiplicative_expression) {
			listener.enterMultiplicative_expression(this);
		}
	}
	// @Override
	public exitRule(listener: matlabListener): void {
		if (listener.exitMultiplicative_expression) {
			listener.exitMultiplicative_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: matlabVisitor<Result>): Result {
		if (visitor.visitMultiplicative_expression) {
			return visitor.visitMultiplicative_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Additive_expressionContext extends ParserRuleContext {
	public multiplicative_expression(): Multiplicative_expressionContext {
		return this.getRuleContext(0, Multiplicative_expressionContext);
	}
	public additive_expression(): Additive_expressionContext | undefined {
		return this.tryGetRuleContext(0, Additive_expressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matlabParser.RULE_additive_expression; }
	// @Override
	public enterRule(listener: matlabListener): void {
		if (listener.enterAdditive_expression) {
			listener.enterAdditive_expression(this);
		}
	}
	// @Override
	public exitRule(listener: matlabListener): void {
		if (listener.exitAdditive_expression) {
			listener.exitAdditive_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: matlabVisitor<Result>): Result {
		if (visitor.visitAdditive_expression) {
			return visitor.visitAdditive_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Relational_expressionContext extends ParserRuleContext {
	public additive_expression(): Additive_expressionContext {
		return this.getRuleContext(0, Additive_expressionContext);
	}
	public relational_expression(): Relational_expressionContext | undefined {
		return this.tryGetRuleContext(0, Relational_expressionContext);
	}
	public LE_OP(): TerminalNode | undefined { return this.tryGetToken(matlabParser.LE_OP, 0); }
	public GE_OP(): TerminalNode | undefined { return this.tryGetToken(matlabParser.GE_OP, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matlabParser.RULE_relational_expression; }
	// @Override
	public enterRule(listener: matlabListener): void {
		if (listener.enterRelational_expression) {
			listener.enterRelational_expression(this);
		}
	}
	// @Override
	public exitRule(listener: matlabListener): void {
		if (listener.exitRelational_expression) {
			listener.exitRelational_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: matlabVisitor<Result>): Result {
		if (visitor.visitRelational_expression) {
			return visitor.visitRelational_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Equality_expressionContext extends ParserRuleContext {
	public relational_expression(): Relational_expressionContext {
		return this.getRuleContext(0, Relational_expressionContext);
	}
	public equality_expression(): Equality_expressionContext | undefined {
		return this.tryGetRuleContext(0, Equality_expressionContext);
	}
	public EQ_OP(): TerminalNode | undefined { return this.tryGetToken(matlabParser.EQ_OP, 0); }
	public NE_OP(): TerminalNode | undefined { return this.tryGetToken(matlabParser.NE_OP, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matlabParser.RULE_equality_expression; }
	// @Override
	public enterRule(listener: matlabListener): void {
		if (listener.enterEquality_expression) {
			listener.enterEquality_expression(this);
		}
	}
	// @Override
	public exitRule(listener: matlabListener): void {
		if (listener.exitEquality_expression) {
			listener.exitEquality_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: matlabVisitor<Result>): Result {
		if (visitor.visitEquality_expression) {
			return visitor.visitEquality_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class And_expressionContext extends ParserRuleContext {
	public equality_expression(): Equality_expressionContext {
		return this.getRuleContext(0, Equality_expressionContext);
	}
	public and_expression(): And_expressionContext | undefined {
		return this.tryGetRuleContext(0, And_expressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matlabParser.RULE_and_expression; }
	// @Override
	public enterRule(listener: matlabListener): void {
		if (listener.enterAnd_expression) {
			listener.enterAnd_expression(this);
		}
	}
	// @Override
	public exitRule(listener: matlabListener): void {
		if (listener.exitAnd_expression) {
			listener.exitAnd_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: matlabVisitor<Result>): Result {
		if (visitor.visitAnd_expression) {
			return visitor.visitAnd_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Or_expressionContext extends ParserRuleContext {
	public and_expression(): And_expressionContext {
		return this.getRuleContext(0, And_expressionContext);
	}
	public or_expression(): Or_expressionContext | undefined {
		return this.tryGetRuleContext(0, Or_expressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matlabParser.RULE_or_expression; }
	// @Override
	public enterRule(listener: matlabListener): void {
		if (listener.enterOr_expression) {
			listener.enterOr_expression(this);
		}
	}
	// @Override
	public exitRule(listener: matlabListener): void {
		if (listener.exitOr_expression) {
			listener.exitOr_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: matlabVisitor<Result>): Result {
		if (visitor.visitOr_expression) {
			return visitor.visitOr_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public or_expression(): Or_expressionContext {
		return this.getRuleContext(0, Or_expressionContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matlabParser.RULE_expression; }
	// @Override
	public enterRule(listener: matlabListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: matlabListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: matlabVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Assignment_expressionContext extends ParserRuleContext {
	public postfix_expression(): Postfix_expressionContext {
		return this.getRuleContext(0, Postfix_expressionContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matlabParser.RULE_assignment_expression; }
	// @Override
	public enterRule(listener: matlabListener): void {
		if (listener.enterAssignment_expression) {
			listener.enterAssignment_expression(this);
		}
	}
	// @Override
	public exitRule(listener: matlabListener): void {
		if (listener.exitAssignment_expression) {
			listener.exitAssignment_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: matlabVisitor<Result>): Result {
		if (visitor.visitAssignment_expression) {
			return visitor.visitAssignment_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EostmtContext extends ParserRuleContext {
	public CR(): TerminalNode { return this.getToken(matlabParser.CR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matlabParser.RULE_eostmt; }
	// @Override
	public enterRule(listener: matlabListener): void {
		if (listener.enterEostmt) {
			listener.enterEostmt(this);
		}
	}
	// @Override
	public exitRule(listener: matlabListener): void {
		if (listener.exitEostmt) {
			listener.exitEostmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: matlabVisitor<Result>): Result {
		if (visitor.visitEostmt) {
			return visitor.visitEostmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public global_statement(): Global_statementContext | undefined {
		return this.tryGetRuleContext(0, Global_statementContext);
	}
	public clear_statement(): Clear_statementContext | undefined {
		return this.tryGetRuleContext(0, Clear_statementContext);
	}
	public assignment_statement(): Assignment_statementContext | undefined {
		return this.tryGetRuleContext(0, Assignment_statementContext);
	}
	public expression_statement(): Expression_statementContext | undefined {
		return this.tryGetRuleContext(0, Expression_statementContext);
	}
	public selection_statement(): Selection_statementContext | undefined {
		return this.tryGetRuleContext(0, Selection_statementContext);
	}
	public iteration_statement(): Iteration_statementContext | undefined {
		return this.tryGetRuleContext(0, Iteration_statementContext);
	}
	public jump_statement(): Jump_statementContext | undefined {
		return this.tryGetRuleContext(0, Jump_statementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matlabParser.RULE_statement; }
	// @Override
	public enterRule(listener: matlabListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: matlabListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: matlabVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Statement_listContext extends ParserRuleContext {
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public statement_list(): Statement_listContext | undefined {
		return this.tryGetRuleContext(0, Statement_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matlabParser.RULE_statement_list; }
	// @Override
	public enterRule(listener: matlabListener): void {
		if (listener.enterStatement_list) {
			listener.enterStatement_list(this);
		}
	}
	// @Override
	public exitRule(listener: matlabListener): void {
		if (listener.exitStatement_list) {
			listener.exitStatement_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: matlabVisitor<Result>): Result {
		if (visitor.visitStatement_list) {
			return visitor.visitStatement_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Identifier_listContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(matlabParser.IDENTIFIER, 0); }
	public identifier_list(): Identifier_listContext | undefined {
		return this.tryGetRuleContext(0, Identifier_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matlabParser.RULE_identifier_list; }
	// @Override
	public enterRule(listener: matlabListener): void {
		if (listener.enterIdentifier_list) {
			listener.enterIdentifier_list(this);
		}
	}
	// @Override
	public exitRule(listener: matlabListener): void {
		if (listener.exitIdentifier_list) {
			listener.exitIdentifier_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: matlabVisitor<Result>): Result {
		if (visitor.visitIdentifier_list) {
			return visitor.visitIdentifier_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Global_statementContext extends ParserRuleContext {
	public GLOBAL(): TerminalNode { return this.getToken(matlabParser.GLOBAL, 0); }
	public identifier_list(): Identifier_listContext {
		return this.getRuleContext(0, Identifier_listContext);
	}
	public eostmt(): EostmtContext {
		return this.getRuleContext(0, EostmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matlabParser.RULE_global_statement; }
	// @Override
	public enterRule(listener: matlabListener): void {
		if (listener.enterGlobal_statement) {
			listener.enterGlobal_statement(this);
		}
	}
	// @Override
	public exitRule(listener: matlabListener): void {
		if (listener.exitGlobal_statement) {
			listener.exitGlobal_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: matlabVisitor<Result>): Result {
		if (visitor.visitGlobal_statement) {
			return visitor.visitGlobal_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Clear_statementContext extends ParserRuleContext {
	public CLEAR(): TerminalNode { return this.getToken(matlabParser.CLEAR, 0); }
	public identifier_list(): Identifier_listContext {
		return this.getRuleContext(0, Identifier_listContext);
	}
	public eostmt(): EostmtContext {
		return this.getRuleContext(0, EostmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matlabParser.RULE_clear_statement; }
	// @Override
	public enterRule(listener: matlabListener): void {
		if (listener.enterClear_statement) {
			listener.enterClear_statement(this);
		}
	}
	// @Override
	public exitRule(listener: matlabListener): void {
		if (listener.exitClear_statement) {
			listener.exitClear_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: matlabVisitor<Result>): Result {
		if (visitor.visitClear_statement) {
			return visitor.visitClear_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Expression_statementContext extends ParserRuleContext {
	public eostmt(): EostmtContext {
		return this.getRuleContext(0, EostmtContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matlabParser.RULE_expression_statement; }
	// @Override
	public enterRule(listener: matlabListener): void {
		if (listener.enterExpression_statement) {
			listener.enterExpression_statement(this);
		}
	}
	// @Override
	public exitRule(listener: matlabListener): void {
		if (listener.exitExpression_statement) {
			listener.exitExpression_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: matlabVisitor<Result>): Result {
		if (visitor.visitExpression_statement) {
			return visitor.visitExpression_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Assignment_statementContext extends ParserRuleContext {
	public assignment_expression(): Assignment_expressionContext {
		return this.getRuleContext(0, Assignment_expressionContext);
	}
	public eostmt(): EostmtContext {
		return this.getRuleContext(0, EostmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matlabParser.RULE_assignment_statement; }
	// @Override
	public enterRule(listener: matlabListener): void {
		if (listener.enterAssignment_statement) {
			listener.enterAssignment_statement(this);
		}
	}
	// @Override
	public exitRule(listener: matlabListener): void {
		if (listener.exitAssignment_statement) {
			listener.exitAssignment_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: matlabVisitor<Result>): Result {
		if (visitor.visitAssignment_statement) {
			return visitor.visitAssignment_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Array_elementContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public expression_statement(): Expression_statementContext | undefined {
		return this.tryGetRuleContext(0, Expression_statementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matlabParser.RULE_array_element; }
	// @Override
	public enterRule(listener: matlabListener): void {
		if (listener.enterArray_element) {
			listener.enterArray_element(this);
		}
	}
	// @Override
	public exitRule(listener: matlabListener): void {
		if (listener.exitArray_element) {
			listener.exitArray_element(this);
		}
	}
	// @Override
	public accept<Result>(visitor: matlabVisitor<Result>): Result {
		if (visitor.visitArray_element) {
			return visitor.visitArray_element(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Array_listContext extends ParserRuleContext {
	public array_element(): Array_elementContext {
		return this.getRuleContext(0, Array_elementContext);
	}
	public array_list(): Array_listContext | undefined {
		return this.tryGetRuleContext(0, Array_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matlabParser.RULE_array_list; }
	// @Override
	public enterRule(listener: matlabListener): void {
		if (listener.enterArray_list) {
			listener.enterArray_list(this);
		}
	}
	// @Override
	public exitRule(listener: matlabListener): void {
		if (listener.exitArray_list) {
			listener.exitArray_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: matlabVisitor<Result>): Result {
		if (visitor.visitArray_list) {
			return visitor.visitArray_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Selection_statementContext extends ParserRuleContext {
	public IF(): TerminalNode { return this.getToken(matlabParser.IF, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public statement_list(): Statement_listContext[];
	public statement_list(i: number): Statement_listContext;
	public statement_list(i?: number): Statement_listContext | Statement_listContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Statement_listContext);
		} else {
			return this.getRuleContext(i, Statement_listContext);
		}
	}
	public END(): TerminalNode { return this.getToken(matlabParser.END, 0); }
	public eostmt(): EostmtContext {
		return this.getRuleContext(0, EostmtContext);
	}
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(matlabParser.ELSE, 0); }
	public elseif_clause(): Elseif_clauseContext | undefined {
		return this.tryGetRuleContext(0, Elseif_clauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matlabParser.RULE_selection_statement; }
	// @Override
	public enterRule(listener: matlabListener): void {
		if (listener.enterSelection_statement) {
			listener.enterSelection_statement(this);
		}
	}
	// @Override
	public exitRule(listener: matlabListener): void {
		if (listener.exitSelection_statement) {
			listener.exitSelection_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: matlabVisitor<Result>): Result {
		if (visitor.visitSelection_statement) {
			return visitor.visitSelection_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Elseif_clauseContext extends ParserRuleContext {
	public ELSEIF(): TerminalNode { return this.getToken(matlabParser.ELSEIF, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public statement_list(): Statement_listContext {
		return this.getRuleContext(0, Statement_listContext);
	}
	public elseif_clause(): Elseif_clauseContext | undefined {
		return this.tryGetRuleContext(0, Elseif_clauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matlabParser.RULE_elseif_clause; }
	// @Override
	public enterRule(listener: matlabListener): void {
		if (listener.enterElseif_clause) {
			listener.enterElseif_clause(this);
		}
	}
	// @Override
	public exitRule(listener: matlabListener): void {
		if (listener.exitElseif_clause) {
			listener.exitElseif_clause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: matlabVisitor<Result>): Result {
		if (visitor.visitElseif_clause) {
			return visitor.visitElseif_clause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Iteration_statementContext extends ParserRuleContext {
	public WHILE(): TerminalNode | undefined { return this.tryGetToken(matlabParser.WHILE, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public statement_list(): Statement_listContext {
		return this.getRuleContext(0, Statement_listContext);
	}
	public END(): TerminalNode { return this.getToken(matlabParser.END, 0); }
	public eostmt(): EostmtContext {
		return this.getRuleContext(0, EostmtContext);
	}
	public FOR(): TerminalNode | undefined { return this.tryGetToken(matlabParser.FOR, 0); }
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(matlabParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matlabParser.RULE_iteration_statement; }
	// @Override
	public enterRule(listener: matlabListener): void {
		if (listener.enterIteration_statement) {
			listener.enterIteration_statement(this);
		}
	}
	// @Override
	public exitRule(listener: matlabListener): void {
		if (listener.exitIteration_statement) {
			listener.exitIteration_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: matlabVisitor<Result>): Result {
		if (visitor.visitIteration_statement) {
			return visitor.visitIteration_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Jump_statementContext extends ParserRuleContext {
	public BREAK(): TerminalNode | undefined { return this.tryGetToken(matlabParser.BREAK, 0); }
	public eostmt(): EostmtContext {
		return this.getRuleContext(0, EostmtContext);
	}
	public RETURN(): TerminalNode | undefined { return this.tryGetToken(matlabParser.RETURN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matlabParser.RULE_jump_statement; }
	// @Override
	public enterRule(listener: matlabListener): void {
		if (listener.enterJump_statement) {
			listener.enterJump_statement(this);
		}
	}
	// @Override
	public exitRule(listener: matlabListener): void {
		if (listener.exitJump_statement) {
			listener.exitJump_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: matlabVisitor<Result>): Result {
		if (visitor.visitJump_statement) {
			return visitor.visitJump_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Translation_unitContext extends ParserRuleContext {
	public statement_list(): Statement_listContext {
		return this.getRuleContext(0, Statement_listContext);
	}
	public FUNCTION(): TerminalNode | undefined { return this.tryGetToken(matlabParser.FUNCTION, 0); }
	public function_declare(): Function_declareContext | undefined {
		return this.tryGetRuleContext(0, Function_declareContext);
	}
	public eostmt(): EostmtContext | undefined {
		return this.tryGetRuleContext(0, EostmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matlabParser.RULE_translation_unit; }
	// @Override
	public enterRule(listener: matlabListener): void {
		if (listener.enterTranslation_unit) {
			listener.enterTranslation_unit(this);
		}
	}
	// @Override
	public exitRule(listener: matlabListener): void {
		if (listener.exitTranslation_unit) {
			listener.exitTranslation_unit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: matlabVisitor<Result>): Result {
		if (visitor.visitTranslation_unit) {
			return visitor.visitTranslation_unit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Func_ident_listContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(matlabParser.IDENTIFIER, 0); }
	public func_ident_list(): Func_ident_listContext | undefined {
		return this.tryGetRuleContext(0, Func_ident_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matlabParser.RULE_func_ident_list; }
	// @Override
	public enterRule(listener: matlabListener): void {
		if (listener.enterFunc_ident_list) {
			listener.enterFunc_ident_list(this);
		}
	}
	// @Override
	public exitRule(listener: matlabListener): void {
		if (listener.exitFunc_ident_list) {
			listener.exitFunc_ident_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: matlabVisitor<Result>): Result {
		if (visitor.visitFunc_ident_list) {
			return visitor.visitFunc_ident_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Func_return_listContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(matlabParser.IDENTIFIER, 0); }
	public func_ident_list(): Func_ident_listContext | undefined {
		return this.tryGetRuleContext(0, Func_ident_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matlabParser.RULE_func_return_list; }
	// @Override
	public enterRule(listener: matlabListener): void {
		if (listener.enterFunc_return_list) {
			listener.enterFunc_return_list(this);
		}
	}
	// @Override
	public exitRule(listener: matlabListener): void {
		if (listener.exitFunc_return_list) {
			listener.exitFunc_return_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: matlabVisitor<Result>): Result {
		if (visitor.visitFunc_return_list) {
			return visitor.visitFunc_return_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Function_declare_lhsContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(matlabParser.IDENTIFIER, 0); }
	public func_ident_list(): Func_ident_listContext | undefined {
		return this.tryGetRuleContext(0, Func_ident_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matlabParser.RULE_function_declare_lhs; }
	// @Override
	public enterRule(listener: matlabListener): void {
		if (listener.enterFunction_declare_lhs) {
			listener.enterFunction_declare_lhs(this);
		}
	}
	// @Override
	public exitRule(listener: matlabListener): void {
		if (listener.exitFunction_declare_lhs) {
			listener.exitFunction_declare_lhs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: matlabVisitor<Result>): Result {
		if (visitor.visitFunction_declare_lhs) {
			return visitor.visitFunction_declare_lhs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Function_declareContext extends ParserRuleContext {
	public function_declare_lhs(): Function_declare_lhsContext {
		return this.getRuleContext(0, Function_declare_lhsContext);
	}
	public func_return_list(): Func_return_listContext | undefined {
		return this.tryGetRuleContext(0, Func_return_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return matlabParser.RULE_function_declare; }
	// @Override
	public enterRule(listener: matlabListener): void {
		if (listener.enterFunction_declare) {
			listener.enterFunction_declare(this);
		}
	}
	// @Override
	public exitRule(listener: matlabListener): void {
		if (listener.exitFunction_declare) {
			listener.exitFunction_declare(this);
		}
	}
	// @Override
	public accept<Result>(visitor: matlabVisitor<Result>): Result {
		if (visitor.visitFunction_declare) {
			return visitor.visitFunction_declare(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


