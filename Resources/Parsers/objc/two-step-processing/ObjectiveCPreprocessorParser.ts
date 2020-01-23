// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/objc/two-step-processing/ObjectiveCPreprocessorParser.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { ObjectiveCPreprocessorParserListener } from "./ObjectiveCPreprocessorParserListener";
import { ObjectiveCPreprocessorParserVisitor } from "./ObjectiveCPreprocessorParserVisitor";


export class ObjectiveCPreprocessorParser extends Parser {
	public static readonly SHARP = 1;
	public static readonly CODE = 2;
	public static readonly IMPORT = 3;
	public static readonly INCLUDE = 4;
	public static readonly PRAGMA = 5;
	public static readonly DEFINE = 6;
	public static readonly DEFINED = 7;
	public static readonly IF = 8;
	public static readonly ELIF = 9;
	public static readonly ELSE = 10;
	public static readonly UNDEF = 11;
	public static readonly IFDEF = 12;
	public static readonly IFNDEF = 13;
	public static readonly ENDIF = 14;
	public static readonly TRUE = 15;
	public static readonly FALSE = 16;
	public static readonly ERROR = 17;
	public static readonly BANG = 18;
	public static readonly LPAREN = 19;
	public static readonly RPAREN = 20;
	public static readonly EQUAL = 21;
	public static readonly NOTEQUAL = 22;
	public static readonly AND = 23;
	public static readonly OR = 24;
	public static readonly LT = 25;
	public static readonly GT = 26;
	public static readonly LE = 27;
	public static readonly GE = 28;
	public static readonly DIRECTIVE_WHITESPACES = 29;
	public static readonly DIRECTIVE_STRING = 30;
	public static readonly CONDITIONAL_SYMBOL = 31;
	public static readonly DECIMAL_LITERAL = 32;
	public static readonly FLOAT = 33;
	public static readonly NEW_LINE = 34;
	public static readonly DIRECITVE_COMMENT = 35;
	public static readonly DIRECITVE_LINE_COMMENT = 36;
	public static readonly DIRECITVE_NEW_LINE = 37;
	public static readonly DIRECITVE_TEXT_NEW_LINE = 38;
	public static readonly TEXT = 39;
	public static readonly SLASH = 40;
	public static readonly RULE_objectiveCDocument = 0;
	public static readonly RULE_text = 1;
	public static readonly RULE_code = 2;
	public static readonly RULE_directive = 3;
	public static readonly RULE_directive_text = 4;
	public static readonly RULE_preprocessor_expression = 5;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"objectiveCDocument", "text", "code", "directive", "directive_text", "preprocessor_expression",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'#'", undefined, undefined, undefined, "'pragma'", undefined, 
		"'defined'", "'if'", "'elif'", "'else'", "'undef'", "'ifdef'", "'ifndef'", 
		"'endif'", undefined, undefined, "'error'", "'!'", "'('", "')'", "'=='", 
		"'!='", "'&&'", "'||'", "'<'", "'>'", "'<='", "'>='",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "SHARP", "CODE", "IMPORT", "INCLUDE", "PRAGMA", "DEFINE", "DEFINED", 
		"IF", "ELIF", "ELSE", "UNDEF", "IFDEF", "IFNDEF", "ENDIF", "TRUE", "FALSE", 
		"ERROR", "BANG", "LPAREN", "RPAREN", "EQUAL", "NOTEQUAL", "AND", "OR", 
		"LT", "GT", "LE", "GE", "DIRECTIVE_WHITESPACES", "DIRECTIVE_STRING", "CONDITIONAL_SYMBOL", 
		"DECIMAL_LITERAL", "FLOAT", "NEW_LINE", "DIRECITVE_COMMENT", "DIRECITVE_LINE_COMMENT", 
		"DIRECITVE_NEW_LINE", "DIRECITVE_TEXT_NEW_LINE", "TEXT", "SLASH",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(ObjectiveCPreprocessorParser._LITERAL_NAMES, ObjectiveCPreprocessorParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return ObjectiveCPreprocessorParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "ObjectiveCPreprocessorParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return ObjectiveCPreprocessorParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return ObjectiveCPreprocessorParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(ObjectiveCPreprocessorParser._ATN, this);
	}
	// @RuleVersion(0)
	public objectiveCDocument(): ObjectiveCDocumentContext {
		let _localctx: ObjectiveCDocumentContext = new ObjectiveCDocumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, ObjectiveCPreprocessorParser.RULE_objectiveCDocument);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 15;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ObjectiveCPreprocessorParser.SHARP || _la === ObjectiveCPreprocessorParser.CODE) {
				{
				{
				this.state = 12;
				this.text();
				}
				}
				this.state = 17;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 18;
			this.match(ObjectiveCPreprocessorParser.EOF);
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
	public text(): TextContext {
		let _localctx: TextContext = new TextContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, ObjectiveCPreprocessorParser.RULE_text);
		let _la: number;
		try {
			this.state = 25;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ObjectiveCPreprocessorParser.CODE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 20;
				this.code();
				}
				break;
			case ObjectiveCPreprocessorParser.SHARP:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 21;
				this.match(ObjectiveCPreprocessorParser.SHARP);
				this.state = 22;
				this.directive();
				this.state = 23;
				_la = this._input.LA(1);
				if (!(_la === ObjectiveCPreprocessorParser.EOF || _la === ObjectiveCPreprocessorParser.NEW_LINE)) {
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
	public code(): CodeContext {
		let _localctx: CodeContext = new CodeContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, ObjectiveCPreprocessorParser.RULE_code);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 28;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 27;
					this.match(ObjectiveCPreprocessorParser.CODE);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 30;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
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
	public directive(): DirectiveContext {
		let _localctx: DirectiveContext = new DirectiveContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, ObjectiveCPreprocessorParser.RULE_directive);
		let _la: number;
		try {
			this.state = 55;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ObjectiveCPreprocessorParser.IMPORT:
			case ObjectiveCPreprocessorParser.INCLUDE:
				_localctx = new PreprocessorImportContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 32;
				_la = this._input.LA(1);
				if (!(_la === ObjectiveCPreprocessorParser.IMPORT || _la === ObjectiveCPreprocessorParser.INCLUDE)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 33;
				this.directive_text();
				}
				break;
			case ObjectiveCPreprocessorParser.IF:
				_localctx = new PreprocessorConditionalContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 34;
				this.match(ObjectiveCPreprocessorParser.IF);
				this.state = 35;
				this.preprocessor_expression(0);
				}
				break;
			case ObjectiveCPreprocessorParser.ELIF:
				_localctx = new PreprocessorConditionalContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 36;
				this.match(ObjectiveCPreprocessorParser.ELIF);
				this.state = 37;
				this.preprocessor_expression(0);
				}
				break;
			case ObjectiveCPreprocessorParser.ELSE:
				_localctx = new PreprocessorConditionalContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 38;
				this.match(ObjectiveCPreprocessorParser.ELSE);
				}
				break;
			case ObjectiveCPreprocessorParser.ENDIF:
				_localctx = new PreprocessorConditionalContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 39;
				this.match(ObjectiveCPreprocessorParser.ENDIF);
				}
				break;
			case ObjectiveCPreprocessorParser.IFDEF:
				_localctx = new PreprocessorDefContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 40;
				this.match(ObjectiveCPreprocessorParser.IFDEF);
				this.state = 41;
				this.match(ObjectiveCPreprocessorParser.CONDITIONAL_SYMBOL);
				}
				break;
			case ObjectiveCPreprocessorParser.IFNDEF:
				_localctx = new PreprocessorDefContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 42;
				this.match(ObjectiveCPreprocessorParser.IFNDEF);
				this.state = 43;
				this.match(ObjectiveCPreprocessorParser.CONDITIONAL_SYMBOL);
				}
				break;
			case ObjectiveCPreprocessorParser.UNDEF:
				_localctx = new PreprocessorDefContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 44;
				this.match(ObjectiveCPreprocessorParser.UNDEF);
				this.state = 45;
				this.match(ObjectiveCPreprocessorParser.CONDITIONAL_SYMBOL);
				}
				break;
			case ObjectiveCPreprocessorParser.PRAGMA:
				_localctx = new PreprocessorPragmaContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 46;
				this.match(ObjectiveCPreprocessorParser.PRAGMA);
				this.state = 47;
				this.directive_text();
				}
				break;
			case ObjectiveCPreprocessorParser.ERROR:
				_localctx = new PreprocessorErrorContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 48;
				this.match(ObjectiveCPreprocessorParser.ERROR);
				this.state = 49;
				this.directive_text();
				}
				break;
			case ObjectiveCPreprocessorParser.DEFINE:
				_localctx = new PreprocessorDefineContext(_localctx);
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 50;
				this.match(ObjectiveCPreprocessorParser.DEFINE);
				this.state = 51;
				this.match(ObjectiveCPreprocessorParser.CONDITIONAL_SYMBOL);
				this.state = 53;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ObjectiveCPreprocessorParser.TEXT) {
					{
					this.state = 52;
					this.directive_text();
					}
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
	public directive_text(): Directive_textContext {
		let _localctx: Directive_textContext = new Directive_textContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, ObjectiveCPreprocessorParser.RULE_directive_text);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 58;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 57;
				this.match(ObjectiveCPreprocessorParser.TEXT);
				}
				}
				this.state = 60;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === ObjectiveCPreprocessorParser.TEXT);
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

	public preprocessor_expression(): Preprocessor_expressionContext;
	public preprocessor_expression(_p: number): Preprocessor_expressionContext;
	// @RuleVersion(0)
	public preprocessor_expression(_p?: number): Preprocessor_expressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Preprocessor_expressionContext = new Preprocessor_expressionContext(this._ctx, _parentState);
		let _prevctx: Preprocessor_expressionContext = _localctx;
		let _startState: number = 10;
		this.enterRecursionRule(_localctx, 10, ObjectiveCPreprocessorParser.RULE_preprocessor_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 87;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ObjectiveCPreprocessorParser.TRUE:
				{
				_localctx = new PreprocessorConstantContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 63;
				this.match(ObjectiveCPreprocessorParser.TRUE);
				}
				break;
			case ObjectiveCPreprocessorParser.FALSE:
				{
				_localctx = new PreprocessorConstantContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 64;
				this.match(ObjectiveCPreprocessorParser.FALSE);
				}
				break;
			case ObjectiveCPreprocessorParser.DECIMAL_LITERAL:
				{
				_localctx = new PreprocessorConstantContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 65;
				this.match(ObjectiveCPreprocessorParser.DECIMAL_LITERAL);
				}
				break;
			case ObjectiveCPreprocessorParser.DIRECTIVE_STRING:
				{
				_localctx = new PreprocessorConstantContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 66;
				this.match(ObjectiveCPreprocessorParser.DIRECTIVE_STRING);
				}
				break;
			case ObjectiveCPreprocessorParser.CONDITIONAL_SYMBOL:
				{
				_localctx = new PreprocessorConditionalSymbolContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 67;
				this.match(ObjectiveCPreprocessorParser.CONDITIONAL_SYMBOL);
				this.state = 72;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
				case 1:
					{
					this.state = 68;
					this.match(ObjectiveCPreprocessorParser.LPAREN);
					this.state = 69;
					this.preprocessor_expression(0);
					this.state = 70;
					this.match(ObjectiveCPreprocessorParser.RPAREN);
					}
					break;
				}
				}
				break;
			case ObjectiveCPreprocessorParser.LPAREN:
				{
				_localctx = new PreprocessorParenthesisContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 74;
				this.match(ObjectiveCPreprocessorParser.LPAREN);
				this.state = 75;
				this.preprocessor_expression(0);
				this.state = 76;
				this.match(ObjectiveCPreprocessorParser.RPAREN);
				}
				break;
			case ObjectiveCPreprocessorParser.BANG:
				{
				_localctx = new PreprocessorNotContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 78;
				this.match(ObjectiveCPreprocessorParser.BANG);
				this.state = 79;
				this.preprocessor_expression(6);
				}
				break;
			case ObjectiveCPreprocessorParser.DEFINED:
				{
				_localctx = new PreprocessorDefinedContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 80;
				this.match(ObjectiveCPreprocessorParser.DEFINED);
				this.state = 85;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case ObjectiveCPreprocessorParser.CONDITIONAL_SYMBOL:
					{
					this.state = 81;
					this.match(ObjectiveCPreprocessorParser.CONDITIONAL_SYMBOL);
					}
					break;
				case ObjectiveCPreprocessorParser.LPAREN:
					{
					this.state = 82;
					this.match(ObjectiveCPreprocessorParser.LPAREN);
					this.state = 83;
					this.match(ObjectiveCPreprocessorParser.CONDITIONAL_SYMBOL);
					this.state = 84;
					this.match(ObjectiveCPreprocessorParser.RPAREN);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 103;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 101;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
					case 1:
						{
						_localctx = new PreprocessorBinaryContext(new Preprocessor_expressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ObjectiveCPreprocessorParser.RULE_preprocessor_expression);
						this.state = 89;
						if (!(this.precpred(this._ctx, 5))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 5)");
						}
						this.state = 90;
						(_localctx as PreprocessorBinaryContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === ObjectiveCPreprocessorParser.EQUAL || _la === ObjectiveCPreprocessorParser.NOTEQUAL)) {
							(_localctx as PreprocessorBinaryContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 91;
						this.preprocessor_expression(6);
						}
						break;

					case 2:
						{
						_localctx = new PreprocessorBinaryContext(new Preprocessor_expressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ObjectiveCPreprocessorParser.RULE_preprocessor_expression);
						this.state = 92;
						if (!(this.precpred(this._ctx, 4))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 4)");
						}
						this.state = 93;
						(_localctx as PreprocessorBinaryContext)._op = this.match(ObjectiveCPreprocessorParser.AND);
						this.state = 94;
						this.preprocessor_expression(5);
						}
						break;

					case 3:
						{
						_localctx = new PreprocessorBinaryContext(new Preprocessor_expressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ObjectiveCPreprocessorParser.RULE_preprocessor_expression);
						this.state = 95;
						if (!(this.precpred(this._ctx, 3))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						}
						this.state = 96;
						(_localctx as PreprocessorBinaryContext)._op = this.match(ObjectiveCPreprocessorParser.OR);
						this.state = 97;
						this.preprocessor_expression(4);
						}
						break;

					case 4:
						{
						_localctx = new PreprocessorBinaryContext(new Preprocessor_expressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, ObjectiveCPreprocessorParser.RULE_preprocessor_expression);
						this.state = 98;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 99;
						(_localctx as PreprocessorBinaryContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ObjectiveCPreprocessorParser.LT) | (1 << ObjectiveCPreprocessorParser.GT) | (1 << ObjectiveCPreprocessorParser.LE) | (1 << ObjectiveCPreprocessorParser.GE))) !== 0))) {
							(_localctx as PreprocessorBinaryContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 100;
						this.preprocessor_expression(3);
						}
						break;
					}
					}
				}
				this.state = 105;
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

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 5:
			return this.preprocessor_expression_sempred(_localctx as Preprocessor_expressionContext, predIndex);
		}
		return true;
	}
	private preprocessor_expression_sempred(_localctx: Preprocessor_expressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 5);

		case 1:
			return this.precpred(this._ctx, 4);

		case 2:
			return this.precpred(this._ctx, 3);

		case 3:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03*m\x04\x02\t\x02" +
		"\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07\t\x07" +
		"\x03\x02\x07\x02\x10\n\x02\f\x02\x0E\x02\x13\v\x02\x03\x02\x03\x02\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03\x1C\n\x03\x03\x04\x06\x04" +
		"\x1F\n\x04\r\x04\x0E\x04 \x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x058\n\x05\x05" +
		"\x05:\n\x05\x03\x06\x06\x06=\n\x06\r\x06\x0E\x06>\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07K" +
		"\n\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x05\x07X\n\x07\x05\x07Z\n\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x07\x07h\n\x07\f\x07\x0E\x07k\v\x07\x03\x07\x02\x02\x03\f\b\x02" +
		"\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x02\x06\x03\x03$$\x03\x02\x05\x06" +
		"\x03\x02\x17\x18\x03\x02\x1B\x1E\x02\x82\x02\x11\x03\x02\x02\x02\x04\x1B" +
		"\x03\x02\x02\x02\x06\x1E\x03\x02\x02\x02\b9\x03\x02\x02\x02\n<\x03\x02" +
		"\x02\x02\fY\x03\x02\x02\x02\x0E\x10\x05\x04\x03\x02\x0F\x0E\x03\x02\x02" +
		"\x02\x10\x13\x03\x02\x02\x02\x11\x0F\x03\x02\x02\x02\x11\x12\x03\x02\x02" +
		"\x02\x12\x14\x03\x02\x02\x02\x13\x11\x03\x02\x02\x02\x14\x15\x07\x02\x02" +
		"\x03\x15\x03\x03\x02\x02\x02\x16\x1C\x05\x06\x04\x02\x17\x18\x07\x03\x02" +
		"\x02\x18\x19\x05\b\x05\x02\x19\x1A\t\x02\x02\x02\x1A\x1C\x03\x02\x02\x02" +
		"\x1B\x16\x03\x02\x02\x02\x1B\x17\x03\x02\x02\x02\x1C\x05\x03\x02\x02\x02" +
		"\x1D\x1F\x07\x04\x02\x02\x1E\x1D\x03\x02\x02\x02\x1F \x03\x02\x02\x02" +
		" \x1E\x03\x02\x02\x02 !\x03\x02\x02\x02!\x07\x03\x02\x02\x02\"#\t\x03" +
		"\x02\x02#:\x05\n\x06\x02$%\x07\n\x02\x02%:\x05\f\x07\x02&\'\x07\v\x02" +
		"\x02\':\x05\f\x07\x02(:\x07\f\x02\x02):\x07\x10\x02\x02*+\x07\x0E\x02" +
		"\x02+:\x07!\x02\x02,-\x07\x0F\x02\x02-:\x07!\x02\x02./\x07\r\x02\x02/" +
		":\x07!\x02\x0201\x07\x07\x02\x021:\x05\n\x06\x0223\x07\x13\x02\x023:\x05" +
		"\n\x06\x0245\x07\b\x02\x0257\x07!\x02\x0268\x05\n\x06\x0276\x03\x02\x02" +
		"\x0278\x03\x02\x02\x028:\x03\x02\x02\x029\"\x03\x02\x02\x029$\x03\x02" +
		"\x02\x029&\x03\x02\x02\x029(\x03\x02\x02\x029)\x03\x02\x02\x029*\x03\x02" +
		"\x02\x029,\x03\x02\x02\x029.\x03\x02\x02\x0290\x03\x02\x02\x0292\x03\x02" +
		"\x02\x0294\x03\x02\x02\x02:\t\x03\x02\x02\x02;=\x07)\x02\x02<;\x03\x02" +
		"\x02\x02=>\x03\x02\x02\x02><\x03\x02\x02\x02>?\x03\x02\x02\x02?\v\x03" +
		"\x02\x02\x02@A\b\x07\x01\x02AZ\x07\x11\x02\x02BZ\x07\x12\x02\x02CZ\x07" +
		"\"\x02\x02DZ\x07 \x02\x02EJ\x07!\x02\x02FG\x07\x15\x02\x02GH\x05\f\x07" +
		"\x02HI\x07\x16\x02\x02IK\x03\x02\x02\x02JF\x03\x02\x02\x02JK\x03\x02\x02" +
		"\x02KZ\x03\x02\x02\x02LM\x07\x15\x02\x02MN\x05\f\x07\x02NO\x07\x16\x02" +
		"\x02OZ\x03\x02\x02\x02PQ\x07\x14\x02\x02QZ\x05\f\x07\bRW\x07\t\x02\x02" +
		"SX\x07!\x02\x02TU\x07\x15\x02\x02UV\x07!\x02\x02VX\x07\x16\x02\x02WS\x03" +
		"\x02\x02\x02WT\x03\x02\x02\x02XZ\x03\x02\x02\x02Y@\x03\x02\x02\x02YB\x03" +
		"\x02\x02\x02YC\x03\x02\x02\x02YD\x03\x02\x02\x02YE\x03\x02\x02\x02YL\x03" +
		"\x02\x02\x02YP\x03\x02\x02\x02YR\x03\x02\x02\x02Zi\x03\x02\x02\x02[\\" +
		"\f\x07\x02\x02\\]\t\x04\x02\x02]h\x05\f\x07\b^_\f\x06\x02\x02_`\x07\x19" +
		"\x02\x02`h\x05\f\x07\x07ab\f\x05\x02\x02bc\x07\x1A\x02\x02ch\x05\f\x07" +
		"\x06de\f\x04\x02\x02ef\t\x05\x02\x02fh\x05\f\x07\x05g[\x03\x02\x02\x02" +
		"g^\x03\x02\x02\x02ga\x03\x02\x02\x02gd\x03\x02\x02\x02hk\x03\x02\x02\x02" +
		"ig\x03\x02\x02\x02ij\x03\x02\x02\x02j\r\x03\x02\x02\x02ki\x03\x02\x02" +
		"\x02\r\x11\x1B 79>JWYgi";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ObjectiveCPreprocessorParser.__ATN) {
			ObjectiveCPreprocessorParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(ObjectiveCPreprocessorParser._serializedATN));
		}

		return ObjectiveCPreprocessorParser.__ATN;
	}

}

export class ObjectiveCDocumentContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(ObjectiveCPreprocessorParser.EOF, 0); }
	public text(): TextContext[];
	public text(i: number): TextContext;
	public text(i?: number): TextContext | TextContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TextContext);
		} else {
			return this.getRuleContext(i, TextContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ObjectiveCPreprocessorParser.RULE_objectiveCDocument; }
	// @Override
	public enterRule(listener: ObjectiveCPreprocessorParserListener): void {
		if (listener.enterObjectiveCDocument) {
			listener.enterObjectiveCDocument(this);
		}
	}
	// @Override
	public exitRule(listener: ObjectiveCPreprocessorParserListener): void {
		if (listener.exitObjectiveCDocument) {
			listener.exitObjectiveCDocument(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ObjectiveCPreprocessorParserVisitor<Result>): Result {
		if (visitor.visitObjectiveCDocument) {
			return visitor.visitObjectiveCDocument(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TextContext extends ParserRuleContext {
	public code(): CodeContext | undefined {
		return this.tryGetRuleContext(0, CodeContext);
	}
	public SHARP(): TerminalNode | undefined { return this.tryGetToken(ObjectiveCPreprocessorParser.SHARP, 0); }
	public directive(): DirectiveContext | undefined {
		return this.tryGetRuleContext(0, DirectiveContext);
	}
	public NEW_LINE(): TerminalNode | undefined { return this.tryGetToken(ObjectiveCPreprocessorParser.NEW_LINE, 0); }
	public EOF(): TerminalNode | undefined { return this.tryGetToken(ObjectiveCPreprocessorParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ObjectiveCPreprocessorParser.RULE_text; }
	// @Override
	public enterRule(listener: ObjectiveCPreprocessorParserListener): void {
		if (listener.enterText) {
			listener.enterText(this);
		}
	}
	// @Override
	public exitRule(listener: ObjectiveCPreprocessorParserListener): void {
		if (listener.exitText) {
			listener.exitText(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ObjectiveCPreprocessorParserVisitor<Result>): Result {
		if (visitor.visitText) {
			return visitor.visitText(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CodeContext extends ParserRuleContext {
	public CODE(): TerminalNode[];
	public CODE(i: number): TerminalNode;
	public CODE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ObjectiveCPreprocessorParser.CODE);
		} else {
			return this.getToken(ObjectiveCPreprocessorParser.CODE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ObjectiveCPreprocessorParser.RULE_code; }
	// @Override
	public enterRule(listener: ObjectiveCPreprocessorParserListener): void {
		if (listener.enterCode) {
			listener.enterCode(this);
		}
	}
	// @Override
	public exitRule(listener: ObjectiveCPreprocessorParserListener): void {
		if (listener.exitCode) {
			listener.exitCode(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ObjectiveCPreprocessorParserVisitor<Result>): Result {
		if (visitor.visitCode) {
			return visitor.visitCode(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DirectiveContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ObjectiveCPreprocessorParser.RULE_directive; }
	public copyFrom(ctx: DirectiveContext): void {
		super.copyFrom(ctx);
	}
}
export class PreprocessorImportContext extends DirectiveContext {
	public directive_text(): Directive_textContext {
		return this.getRuleContext(0, Directive_textContext);
	}
	public IMPORT(): TerminalNode | undefined { return this.tryGetToken(ObjectiveCPreprocessorParser.IMPORT, 0); }
	public INCLUDE(): TerminalNode | undefined { return this.tryGetToken(ObjectiveCPreprocessorParser.INCLUDE, 0); }
	constructor(ctx: DirectiveContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ObjectiveCPreprocessorParserListener): void {
		if (listener.enterPreprocessorImport) {
			listener.enterPreprocessorImport(this);
		}
	}
	// @Override
	public exitRule(listener: ObjectiveCPreprocessorParserListener): void {
		if (listener.exitPreprocessorImport) {
			listener.exitPreprocessorImport(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ObjectiveCPreprocessorParserVisitor<Result>): Result {
		if (visitor.visitPreprocessorImport) {
			return visitor.visitPreprocessorImport(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PreprocessorConditionalContext extends DirectiveContext {
	public IF(): TerminalNode | undefined { return this.tryGetToken(ObjectiveCPreprocessorParser.IF, 0); }
	public preprocessor_expression(): Preprocessor_expressionContext | undefined {
		return this.tryGetRuleContext(0, Preprocessor_expressionContext);
	}
	public ELIF(): TerminalNode | undefined { return this.tryGetToken(ObjectiveCPreprocessorParser.ELIF, 0); }
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(ObjectiveCPreprocessorParser.ELSE, 0); }
	public ENDIF(): TerminalNode | undefined { return this.tryGetToken(ObjectiveCPreprocessorParser.ENDIF, 0); }
	constructor(ctx: DirectiveContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ObjectiveCPreprocessorParserListener): void {
		if (listener.enterPreprocessorConditional) {
			listener.enterPreprocessorConditional(this);
		}
	}
	// @Override
	public exitRule(listener: ObjectiveCPreprocessorParserListener): void {
		if (listener.exitPreprocessorConditional) {
			listener.exitPreprocessorConditional(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ObjectiveCPreprocessorParserVisitor<Result>): Result {
		if (visitor.visitPreprocessorConditional) {
			return visitor.visitPreprocessorConditional(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PreprocessorDefContext extends DirectiveContext {
	public IFDEF(): TerminalNode | undefined { return this.tryGetToken(ObjectiveCPreprocessorParser.IFDEF, 0); }
	public CONDITIONAL_SYMBOL(): TerminalNode { return this.getToken(ObjectiveCPreprocessorParser.CONDITIONAL_SYMBOL, 0); }
	public IFNDEF(): TerminalNode | undefined { return this.tryGetToken(ObjectiveCPreprocessorParser.IFNDEF, 0); }
	public UNDEF(): TerminalNode | undefined { return this.tryGetToken(ObjectiveCPreprocessorParser.UNDEF, 0); }
	constructor(ctx: DirectiveContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ObjectiveCPreprocessorParserListener): void {
		if (listener.enterPreprocessorDef) {
			listener.enterPreprocessorDef(this);
		}
	}
	// @Override
	public exitRule(listener: ObjectiveCPreprocessorParserListener): void {
		if (listener.exitPreprocessorDef) {
			listener.exitPreprocessorDef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ObjectiveCPreprocessorParserVisitor<Result>): Result {
		if (visitor.visitPreprocessorDef) {
			return visitor.visitPreprocessorDef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PreprocessorPragmaContext extends DirectiveContext {
	public PRAGMA(): TerminalNode { return this.getToken(ObjectiveCPreprocessorParser.PRAGMA, 0); }
	public directive_text(): Directive_textContext {
		return this.getRuleContext(0, Directive_textContext);
	}
	constructor(ctx: DirectiveContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ObjectiveCPreprocessorParserListener): void {
		if (listener.enterPreprocessorPragma) {
			listener.enterPreprocessorPragma(this);
		}
	}
	// @Override
	public exitRule(listener: ObjectiveCPreprocessorParserListener): void {
		if (listener.exitPreprocessorPragma) {
			listener.exitPreprocessorPragma(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ObjectiveCPreprocessorParserVisitor<Result>): Result {
		if (visitor.visitPreprocessorPragma) {
			return visitor.visitPreprocessorPragma(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PreprocessorErrorContext extends DirectiveContext {
	public ERROR(): TerminalNode { return this.getToken(ObjectiveCPreprocessorParser.ERROR, 0); }
	public directive_text(): Directive_textContext {
		return this.getRuleContext(0, Directive_textContext);
	}
	constructor(ctx: DirectiveContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ObjectiveCPreprocessorParserListener): void {
		if (listener.enterPreprocessorError) {
			listener.enterPreprocessorError(this);
		}
	}
	// @Override
	public exitRule(listener: ObjectiveCPreprocessorParserListener): void {
		if (listener.exitPreprocessorError) {
			listener.exitPreprocessorError(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ObjectiveCPreprocessorParserVisitor<Result>): Result {
		if (visitor.visitPreprocessorError) {
			return visitor.visitPreprocessorError(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PreprocessorDefineContext extends DirectiveContext {
	public DEFINE(): TerminalNode { return this.getToken(ObjectiveCPreprocessorParser.DEFINE, 0); }
	public CONDITIONAL_SYMBOL(): TerminalNode { return this.getToken(ObjectiveCPreprocessorParser.CONDITIONAL_SYMBOL, 0); }
	public directive_text(): Directive_textContext | undefined {
		return this.tryGetRuleContext(0, Directive_textContext);
	}
	constructor(ctx: DirectiveContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ObjectiveCPreprocessorParserListener): void {
		if (listener.enterPreprocessorDefine) {
			listener.enterPreprocessorDefine(this);
		}
	}
	// @Override
	public exitRule(listener: ObjectiveCPreprocessorParserListener): void {
		if (listener.exitPreprocessorDefine) {
			listener.exitPreprocessorDefine(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ObjectiveCPreprocessorParserVisitor<Result>): Result {
		if (visitor.visitPreprocessorDefine) {
			return visitor.visitPreprocessorDefine(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Directive_textContext extends ParserRuleContext {
	public TEXT(): TerminalNode[];
	public TEXT(i: number): TerminalNode;
	public TEXT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ObjectiveCPreprocessorParser.TEXT);
		} else {
			return this.getToken(ObjectiveCPreprocessorParser.TEXT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ObjectiveCPreprocessorParser.RULE_directive_text; }
	// @Override
	public enterRule(listener: ObjectiveCPreprocessorParserListener): void {
		if (listener.enterDirective_text) {
			listener.enterDirective_text(this);
		}
	}
	// @Override
	public exitRule(listener: ObjectiveCPreprocessorParserListener): void {
		if (listener.exitDirective_text) {
			listener.exitDirective_text(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ObjectiveCPreprocessorParserVisitor<Result>): Result {
		if (visitor.visitDirective_text) {
			return visitor.visitDirective_text(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Preprocessor_expressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ObjectiveCPreprocessorParser.RULE_preprocessor_expression; }
	public copyFrom(ctx: Preprocessor_expressionContext): void {
		super.copyFrom(ctx);
	}
}
export class PreprocessorConstantContext extends Preprocessor_expressionContext {
	public TRUE(): TerminalNode | undefined { return this.tryGetToken(ObjectiveCPreprocessorParser.TRUE, 0); }
	public FALSE(): TerminalNode | undefined { return this.tryGetToken(ObjectiveCPreprocessorParser.FALSE, 0); }
	public DECIMAL_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ObjectiveCPreprocessorParser.DECIMAL_LITERAL, 0); }
	public DIRECTIVE_STRING(): TerminalNode | undefined { return this.tryGetToken(ObjectiveCPreprocessorParser.DIRECTIVE_STRING, 0); }
	constructor(ctx: Preprocessor_expressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ObjectiveCPreprocessorParserListener): void {
		if (listener.enterPreprocessorConstant) {
			listener.enterPreprocessorConstant(this);
		}
	}
	// @Override
	public exitRule(listener: ObjectiveCPreprocessorParserListener): void {
		if (listener.exitPreprocessorConstant) {
			listener.exitPreprocessorConstant(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ObjectiveCPreprocessorParserVisitor<Result>): Result {
		if (visitor.visitPreprocessorConstant) {
			return visitor.visitPreprocessorConstant(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PreprocessorConditionalSymbolContext extends Preprocessor_expressionContext {
	public CONDITIONAL_SYMBOL(): TerminalNode { return this.getToken(ObjectiveCPreprocessorParser.CONDITIONAL_SYMBOL, 0); }
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(ObjectiveCPreprocessorParser.LPAREN, 0); }
	public preprocessor_expression(): Preprocessor_expressionContext | undefined {
		return this.tryGetRuleContext(0, Preprocessor_expressionContext);
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(ObjectiveCPreprocessorParser.RPAREN, 0); }
	constructor(ctx: Preprocessor_expressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ObjectiveCPreprocessorParserListener): void {
		if (listener.enterPreprocessorConditionalSymbol) {
			listener.enterPreprocessorConditionalSymbol(this);
		}
	}
	// @Override
	public exitRule(listener: ObjectiveCPreprocessorParserListener): void {
		if (listener.exitPreprocessorConditionalSymbol) {
			listener.exitPreprocessorConditionalSymbol(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ObjectiveCPreprocessorParserVisitor<Result>): Result {
		if (visitor.visitPreprocessorConditionalSymbol) {
			return visitor.visitPreprocessorConditionalSymbol(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PreprocessorParenthesisContext extends Preprocessor_expressionContext {
	public LPAREN(): TerminalNode { return this.getToken(ObjectiveCPreprocessorParser.LPAREN, 0); }
	public preprocessor_expression(): Preprocessor_expressionContext {
		return this.getRuleContext(0, Preprocessor_expressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(ObjectiveCPreprocessorParser.RPAREN, 0); }
	constructor(ctx: Preprocessor_expressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ObjectiveCPreprocessorParserListener): void {
		if (listener.enterPreprocessorParenthesis) {
			listener.enterPreprocessorParenthesis(this);
		}
	}
	// @Override
	public exitRule(listener: ObjectiveCPreprocessorParserListener): void {
		if (listener.exitPreprocessorParenthesis) {
			listener.exitPreprocessorParenthesis(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ObjectiveCPreprocessorParserVisitor<Result>): Result {
		if (visitor.visitPreprocessorParenthesis) {
			return visitor.visitPreprocessorParenthesis(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PreprocessorNotContext extends Preprocessor_expressionContext {
	public BANG(): TerminalNode { return this.getToken(ObjectiveCPreprocessorParser.BANG, 0); }
	public preprocessor_expression(): Preprocessor_expressionContext {
		return this.getRuleContext(0, Preprocessor_expressionContext);
	}
	constructor(ctx: Preprocessor_expressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ObjectiveCPreprocessorParserListener): void {
		if (listener.enterPreprocessorNot) {
			listener.enterPreprocessorNot(this);
		}
	}
	// @Override
	public exitRule(listener: ObjectiveCPreprocessorParserListener): void {
		if (listener.exitPreprocessorNot) {
			listener.exitPreprocessorNot(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ObjectiveCPreprocessorParserVisitor<Result>): Result {
		if (visitor.visitPreprocessorNot) {
			return visitor.visitPreprocessorNot(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PreprocessorBinaryContext extends Preprocessor_expressionContext {
	public _op: Token;
	public preprocessor_expression(): Preprocessor_expressionContext[];
	public preprocessor_expression(i: number): Preprocessor_expressionContext;
	public preprocessor_expression(i?: number): Preprocessor_expressionContext | Preprocessor_expressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Preprocessor_expressionContext);
		} else {
			return this.getRuleContext(i, Preprocessor_expressionContext);
		}
	}
	public EQUAL(): TerminalNode | undefined { return this.tryGetToken(ObjectiveCPreprocessorParser.EQUAL, 0); }
	public NOTEQUAL(): TerminalNode | undefined { return this.tryGetToken(ObjectiveCPreprocessorParser.NOTEQUAL, 0); }
	public AND(): TerminalNode | undefined { return this.tryGetToken(ObjectiveCPreprocessorParser.AND, 0); }
	public OR(): TerminalNode | undefined { return this.tryGetToken(ObjectiveCPreprocessorParser.OR, 0); }
	public LT(): TerminalNode | undefined { return this.tryGetToken(ObjectiveCPreprocessorParser.LT, 0); }
	public GT(): TerminalNode | undefined { return this.tryGetToken(ObjectiveCPreprocessorParser.GT, 0); }
	public LE(): TerminalNode | undefined { return this.tryGetToken(ObjectiveCPreprocessorParser.LE, 0); }
	public GE(): TerminalNode | undefined { return this.tryGetToken(ObjectiveCPreprocessorParser.GE, 0); }
	constructor(ctx: Preprocessor_expressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ObjectiveCPreprocessorParserListener): void {
		if (listener.enterPreprocessorBinary) {
			listener.enterPreprocessorBinary(this);
		}
	}
	// @Override
	public exitRule(listener: ObjectiveCPreprocessorParserListener): void {
		if (listener.exitPreprocessorBinary) {
			listener.exitPreprocessorBinary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ObjectiveCPreprocessorParserVisitor<Result>): Result {
		if (visitor.visitPreprocessorBinary) {
			return visitor.visitPreprocessorBinary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PreprocessorDefinedContext extends Preprocessor_expressionContext {
	public DEFINED(): TerminalNode { return this.getToken(ObjectiveCPreprocessorParser.DEFINED, 0); }
	public CONDITIONAL_SYMBOL(): TerminalNode | undefined { return this.tryGetToken(ObjectiveCPreprocessorParser.CONDITIONAL_SYMBOL, 0); }
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(ObjectiveCPreprocessorParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(ObjectiveCPreprocessorParser.RPAREN, 0); }
	constructor(ctx: Preprocessor_expressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ObjectiveCPreprocessorParserListener): void {
		if (listener.enterPreprocessorDefined) {
			listener.enterPreprocessorDefined(this);
		}
	}
	// @Override
	public exitRule(listener: ObjectiveCPreprocessorParserListener): void {
		if (listener.exitPreprocessorDefined) {
			listener.exitPreprocessorDefined(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ObjectiveCPreprocessorParserVisitor<Result>): Result {
		if (visitor.visitPreprocessorDefined) {
			return visitor.visitPreprocessorDefined(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


