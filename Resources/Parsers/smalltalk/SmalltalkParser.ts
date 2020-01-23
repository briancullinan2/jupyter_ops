// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/smalltalk/Smalltalk.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { SmalltalkListener } from "./SmalltalkListener";

export class SmalltalkParser extends Parser {
	public static readonly SEPARATOR = 1;
	public static readonly STRING = 2;
	public static readonly COMMENT = 3;
	public static readonly BLOCK_START = 4;
	public static readonly BLOCK_END = 5;
	public static readonly CLOSE_PAREN = 6;
	public static readonly OPEN_PAREN = 7;
	public static readonly PIPE = 8;
	public static readonly PERIOD = 9;
	public static readonly SEMI_COLON = 10;
	public static readonly BINARY_SELECTOR = 11;
	public static readonly LT = 12;
	public static readonly GT = 13;
	public static readonly MINUS = 14;
	public static readonly RESERVED_WORD = 15;
	public static readonly IDENTIFIER = 16;
	public static readonly CARROT = 17;
	public static readonly COLON = 18;
	public static readonly ASSIGNMENT = 19;
	public static readonly HASH = 20;
	public static readonly DOLLAR = 21;
	public static readonly EXP = 22;
	public static readonly HEX = 23;
	public static readonly LITARR_START = 24;
	public static readonly DYNDICT_START = 25;
	public static readonly DYNARR_END = 26;
	public static readonly DYNARR_START = 27;
	public static readonly DIGIT = 28;
	public static readonly HEXDIGIT = 29;
	public static readonly KEYWORD = 30;
	public static readonly BLOCK_PARAM = 31;
	public static readonly CHARACTER_CONSTANT = 32;
	public static readonly RULE_script = 0;
	public static readonly RULE_sequence = 1;
	public static readonly RULE_ws = 2;
	public static readonly RULE_temps = 3;
	public static readonly RULE_statements = 4;
	public static readonly RULE_answer = 5;
	public static readonly RULE_expression = 6;
	public static readonly RULE_expressions = 7;
	public static readonly RULE_expressionList = 8;
	public static readonly RULE_cascade = 9;
	public static readonly RULE_message = 10;
	public static readonly RULE_assignment = 11;
	public static readonly RULE_variable = 12;
	public static readonly RULE_binarySend = 13;
	public static readonly RULE_unarySend = 14;
	public static readonly RULE_keywordSend = 15;
	public static readonly RULE_keywordMessage = 16;
	public static readonly RULE_keywordPair = 17;
	public static readonly RULE_operand = 18;
	public static readonly RULE_subexpression = 19;
	public static readonly RULE_literal = 20;
	public static readonly RULE_runtimeLiteral = 21;
	public static readonly RULE_block = 22;
	public static readonly RULE_blockParamList = 23;
	public static readonly RULE_dynamicDictionary = 24;
	public static readonly RULE_dynamicArray = 25;
	public static readonly RULE_parsetimeLiteral = 26;
	public static readonly RULE_number = 27;
	public static readonly RULE_numberExp = 28;
	public static readonly RULE_charConstant = 29;
	public static readonly RULE_hex = 30;
	public static readonly RULE_stInteger = 31;
	public static readonly RULE_stFloat = 32;
	public static readonly RULE_pseudoVariable = 33;
	public static readonly RULE_string = 34;
	public static readonly RULE_symbol = 35;
	public static readonly RULE_primitive = 36;
	public static readonly RULE_bareSymbol = 37;
	public static readonly RULE_literalArray = 38;
	public static readonly RULE_literalArrayRest = 39;
	public static readonly RULE_bareLiteralArray = 40;
	public static readonly RULE_unaryTail = 41;
	public static readonly RULE_unaryMessage = 42;
	public static readonly RULE_unarySelector = 43;
	public static readonly RULE_keywords = 44;
	public static readonly RULE_reference = 45;
	public static readonly RULE_binaryTail = 46;
	public static readonly RULE_binaryMessage = 47;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"script", "sequence", "ws", "temps", "statements", "answer", "expression", 
		"expressions", "expressionList", "cascade", "message", "assignment", "variable", 
		"binarySend", "unarySend", "keywordSend", "keywordMessage", "keywordPair", 
		"operand", "subexpression", "literal", "runtimeLiteral", "block", "blockParamList", 
		"dynamicDictionary", "dynamicArray", "parsetimeLiteral", "number", "numberExp", 
		"charConstant", "hex", "stInteger", "stFloat", "pseudoVariable", "string", 
		"symbol", "primitive", "bareSymbol", "literalArray", "literalArrayRest", 
		"bareLiteralArray", "unaryTail", "unaryMessage", "unarySelector", "keywords", 
		"reference", "binaryTail", "binaryMessage",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, "'['", "']'", "')'", "'('", 
		"'|'", "'.'", "';'", undefined, "'<'", "'>'", "'-'", undefined, undefined, 
		"'^'", "':'", "':='", "'#'", "'$'", "'e'", "'16r'", "'#('", "'#{'", "'}'", 
		"'{'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "SEPARATOR", "STRING", "COMMENT", "BLOCK_START", "BLOCK_END", 
		"CLOSE_PAREN", "OPEN_PAREN", "PIPE", "PERIOD", "SEMI_COLON", "BINARY_SELECTOR", 
		"LT", "GT", "MINUS", "RESERVED_WORD", "IDENTIFIER", "CARROT", "COLON", 
		"ASSIGNMENT", "HASH", "DOLLAR", "EXP", "HEX", "LITARR_START", "DYNDICT_START", 
		"DYNARR_END", "DYNARR_START", "DIGIT", "HEXDIGIT", "KEYWORD", "BLOCK_PARAM", 
		"CHARACTER_CONSTANT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(SmalltalkParser._LITERAL_NAMES, SmalltalkParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return SmalltalkParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Smalltalk.g4"; }

	// @Override
	public get ruleNames(): string[] { return SmalltalkParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return SmalltalkParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(SmalltalkParser._ATN, this);
	}
	// @RuleVersion(0)
	public script(): ScriptContext {
		let _localctx: ScriptContext = new ScriptContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, SmalltalkParser.RULE_script);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 96;
			this.sequence();
			this.state = 97;
			this.match(SmalltalkParser.EOF);
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
	public sequence(): SequenceContext {
		let _localctx: SequenceContext = new SequenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, SmalltalkParser.RULE_sequence);
		let _la: number;
		try {
			this.state = 110;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SmalltalkParser.PIPE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 99;
				this.temps();
				this.state = 101;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SmalltalkParser.SEPARATOR || _la === SmalltalkParser.COMMENT) {
					{
					this.state = 100;
					this.ws();
					}
				}

				this.state = 104;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 2)) & ~0x1F) === 0 && ((1 << (_la - 2)) & ((1 << (SmalltalkParser.STRING - 2)) | (1 << (SmalltalkParser.BLOCK_START - 2)) | (1 << (SmalltalkParser.OPEN_PAREN - 2)) | (1 << (SmalltalkParser.LT - 2)) | (1 << (SmalltalkParser.MINUS - 2)) | (1 << (SmalltalkParser.RESERVED_WORD - 2)) | (1 << (SmalltalkParser.IDENTIFIER - 2)) | (1 << (SmalltalkParser.CARROT - 2)) | (1 << (SmalltalkParser.HASH - 2)) | (1 << (SmalltalkParser.HEX - 2)) | (1 << (SmalltalkParser.LITARR_START - 2)) | (1 << (SmalltalkParser.DYNDICT_START - 2)) | (1 << (SmalltalkParser.DYNARR_START - 2)) | (1 << (SmalltalkParser.DIGIT - 2)) | (1 << (SmalltalkParser.CHARACTER_CONSTANT - 2)))) !== 0)) {
					{
					this.state = 103;
					this.statements();
					}
				}

				}
				break;
			case SmalltalkParser.SEPARATOR:
			case SmalltalkParser.STRING:
			case SmalltalkParser.COMMENT:
			case SmalltalkParser.BLOCK_START:
			case SmalltalkParser.OPEN_PAREN:
			case SmalltalkParser.LT:
			case SmalltalkParser.MINUS:
			case SmalltalkParser.RESERVED_WORD:
			case SmalltalkParser.IDENTIFIER:
			case SmalltalkParser.CARROT:
			case SmalltalkParser.HASH:
			case SmalltalkParser.HEX:
			case SmalltalkParser.LITARR_START:
			case SmalltalkParser.DYNDICT_START:
			case SmalltalkParser.DYNARR_START:
			case SmalltalkParser.DIGIT:
			case SmalltalkParser.CHARACTER_CONSTANT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 107;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SmalltalkParser.SEPARATOR || _la === SmalltalkParser.COMMENT) {
					{
					this.state = 106;
					this.ws();
					}
				}

				this.state = 109;
				this.statements();
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
	public ws(): WsContext {
		let _localctx: WsContext = new WsContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, SmalltalkParser.RULE_ws);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 113;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 112;
					_la = this._input.LA(1);
					if (!(_la === SmalltalkParser.SEPARATOR || _la === SmalltalkParser.COMMENT)) {
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
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 115;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
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
	public temps(): TempsContext {
		let _localctx: TempsContext = new TempsContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, SmalltalkParser.RULE_temps);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 117;
			this.match(SmalltalkParser.PIPE);
			this.state = 122;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 119;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === SmalltalkParser.SEPARATOR || _la === SmalltalkParser.COMMENT) {
						{
						this.state = 118;
						this.ws();
						}
					}

					this.state = 121;
					this.match(SmalltalkParser.IDENTIFIER);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 124;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 127;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SmalltalkParser.SEPARATOR || _la === SmalltalkParser.COMMENT) {
				{
				this.state = 126;
				this.ws();
				}
			}

			this.state = 129;
			this.match(SmalltalkParser.PIPE);
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
	public statements(): StatementsContext {
		let _localctx: StatementsContext = new StatementsContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, SmalltalkParser.RULE_statements);
		let _la: number;
		try {
			this.state = 152;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				_localctx = new StatementAnswerContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 131;
				this.answer();
				this.state = 133;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SmalltalkParser.SEPARATOR || _la === SmalltalkParser.COMMENT) {
					{
					this.state = 132;
					this.ws();
					}
				}

				}
				break;

			case 2:
				_localctx = new StatementExpressionsAnswerContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 135;
				this.expressions();
				this.state = 137;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SmalltalkParser.SEPARATOR || _la === SmalltalkParser.COMMENT) {
					{
					this.state = 136;
					this.ws();
					}
				}

				this.state = 139;
				this.match(SmalltalkParser.PERIOD);
				this.state = 141;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SmalltalkParser.SEPARATOR || _la === SmalltalkParser.COMMENT) {
					{
					this.state = 140;
					this.ws();
					}
				}

				this.state = 143;
				this.answer();
				}
				break;

			case 3:
				_localctx = new StatementExpressionsContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 145;
				this.expressions();
				this.state = 147;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SmalltalkParser.PERIOD) {
					{
					this.state = 146;
					this.match(SmalltalkParser.PERIOD);
					}
				}

				this.state = 150;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SmalltalkParser.SEPARATOR || _la === SmalltalkParser.COMMENT) {
					{
					this.state = 149;
					this.ws();
					}
				}

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
	public answer(): AnswerContext {
		let _localctx: AnswerContext = new AnswerContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, SmalltalkParser.RULE_answer);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 154;
			this.match(SmalltalkParser.CARROT);
			this.state = 156;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SmalltalkParser.SEPARATOR || _la === SmalltalkParser.COMMENT) {
				{
				this.state = 155;
				this.ws();
				}
			}

			this.state = 158;
			this.expression();
			this.state = 160;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
			case 1:
				{
				this.state = 159;
				this.ws();
				}
				break;
			}
			this.state = 163;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SmalltalkParser.PERIOD) {
				{
				this.state = 162;
				this.match(SmalltalkParser.PERIOD);
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
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, SmalltalkParser.RULE_expression);
		try {
			this.state = 170;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 165;
				this.assignment();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 166;
				this.cascade();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 167;
				this.keywordSend();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 168;
				this.binarySend();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 169;
				this.primitive();
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
	public expressions(): ExpressionsContext {
		let _localctx: ExpressionsContext = new ExpressionsContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, SmalltalkParser.RULE_expressions);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 172;
			this.expression();
			this.state = 176;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 173;
					this.expressionList();
					}
					}
				}
				this.state = 178;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
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
	public expressionList(): ExpressionListContext {
		let _localctx: ExpressionListContext = new ExpressionListContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, SmalltalkParser.RULE_expressionList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 179;
			this.match(SmalltalkParser.PERIOD);
			this.state = 181;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SmalltalkParser.SEPARATOR || _la === SmalltalkParser.COMMENT) {
				{
				this.state = 180;
				this.ws();
				}
			}

			this.state = 183;
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
	public cascade(): CascadeContext {
		let _localctx: CascadeContext = new CascadeContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, SmalltalkParser.RULE_cascade);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 187;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 20, this._ctx) ) {
			case 1:
				{
				this.state = 185;
				this.keywordSend();
				}
				break;

			case 2:
				{
				this.state = 186;
				this.binarySend();
				}
				break;
			}
			this.state = 197;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 190;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === SmalltalkParser.SEPARATOR || _la === SmalltalkParser.COMMENT) {
						{
						this.state = 189;
						this.ws();
						}
					}

					this.state = 192;
					this.match(SmalltalkParser.SEMI_COLON);
					this.state = 194;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
					case 1:
						{
						this.state = 193;
						this.ws();
						}
						break;
					}
					this.state = 196;
					this.message();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 199;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
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
	public message(): MessageContext {
		let _localctx: MessageContext = new MessageContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, SmalltalkParser.RULE_message);
		try {
			this.state = 204;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 24, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 201;
				this.binaryMessage();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 202;
				this.unaryMessage();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 203;
				this.keywordMessage();
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
	public assignment(): AssignmentContext {
		let _localctx: AssignmentContext = new AssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, SmalltalkParser.RULE_assignment);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 206;
			this.variable();
			this.state = 208;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SmalltalkParser.SEPARATOR || _la === SmalltalkParser.COMMENT) {
				{
				this.state = 207;
				this.ws();
				}
			}

			this.state = 210;
			this.match(SmalltalkParser.ASSIGNMENT);
			this.state = 212;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SmalltalkParser.SEPARATOR || _la === SmalltalkParser.COMMENT) {
				{
				this.state = 211;
				this.ws();
				}
			}

			this.state = 214;
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
	public variable(): VariableContext {
		let _localctx: VariableContext = new VariableContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, SmalltalkParser.RULE_variable);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 216;
			this.match(SmalltalkParser.IDENTIFIER);
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
	public binarySend(): BinarySendContext {
		let _localctx: BinarySendContext = new BinarySendContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, SmalltalkParser.RULE_binarySend);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 218;
			this.unarySend();
			this.state = 220;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 27, this._ctx) ) {
			case 1:
				{
				this.state = 219;
				this.binaryTail();
				}
				break;
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
	public unarySend(): UnarySendContext {
		let _localctx: UnarySendContext = new UnarySendContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, SmalltalkParser.RULE_unarySend);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 222;
			this.operand();
			this.state = 224;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 28, this._ctx) ) {
			case 1:
				{
				this.state = 223;
				this.ws();
				}
				break;
			}
			this.state = 227;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 29, this._ctx) ) {
			case 1:
				{
				this.state = 226;
				this.unaryTail();
				}
				break;
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
	public keywordSend(): KeywordSendContext {
		let _localctx: KeywordSendContext = new KeywordSendContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, SmalltalkParser.RULE_keywordSend);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 229;
			this.binarySend();
			this.state = 230;
			this.keywordMessage();
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
	public keywordMessage(): KeywordMessageContext {
		let _localctx: KeywordMessageContext = new KeywordMessageContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, SmalltalkParser.RULE_keywordMessage);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 233;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SmalltalkParser.SEPARATOR || _la === SmalltalkParser.COMMENT) {
				{
				this.state = 232;
				this.ws();
				}
			}

			this.state = 239;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 235;
				this.keywordPair();
				this.state = 237;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 31, this._ctx) ) {
				case 1:
					{
					this.state = 236;
					this.ws();
					}
					break;
				}
				}
				}
				this.state = 241;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === SmalltalkParser.KEYWORD);
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
	public keywordPair(): KeywordPairContext {
		let _localctx: KeywordPairContext = new KeywordPairContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, SmalltalkParser.RULE_keywordPair);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 243;
			this.match(SmalltalkParser.KEYWORD);
			this.state = 245;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SmalltalkParser.SEPARATOR || _la === SmalltalkParser.COMMENT) {
				{
				this.state = 244;
				this.ws();
				}
			}

			this.state = 247;
			this.binarySend();
			this.state = 249;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 34, this._ctx) ) {
			case 1:
				{
				this.state = 248;
				this.ws();
				}
				break;
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
	public operand(): OperandContext {
		let _localctx: OperandContext = new OperandContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, SmalltalkParser.RULE_operand);
		try {
			this.state = 254;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SmalltalkParser.STRING:
			case SmalltalkParser.BLOCK_START:
			case SmalltalkParser.MINUS:
			case SmalltalkParser.RESERVED_WORD:
			case SmalltalkParser.HASH:
			case SmalltalkParser.HEX:
			case SmalltalkParser.LITARR_START:
			case SmalltalkParser.DYNDICT_START:
			case SmalltalkParser.DYNARR_START:
			case SmalltalkParser.DIGIT:
			case SmalltalkParser.CHARACTER_CONSTANT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 251;
				this.literal();
				}
				break;
			case SmalltalkParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 252;
				this.reference();
				}
				break;
			case SmalltalkParser.OPEN_PAREN:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 253;
				this.subexpression();
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
	public subexpression(): SubexpressionContext {
		let _localctx: SubexpressionContext = new SubexpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, SmalltalkParser.RULE_subexpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 256;
			this.match(SmalltalkParser.OPEN_PAREN);
			this.state = 258;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SmalltalkParser.SEPARATOR || _la === SmalltalkParser.COMMENT) {
				{
				this.state = 257;
				this.ws();
				}
			}

			this.state = 260;
			this.expression();
			this.state = 262;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SmalltalkParser.SEPARATOR || _la === SmalltalkParser.COMMENT) {
				{
				this.state = 261;
				this.ws();
				}
			}

			this.state = 264;
			this.match(SmalltalkParser.CLOSE_PAREN);
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
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, SmalltalkParser.RULE_literal);
		try {
			this.state = 268;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SmalltalkParser.BLOCK_START:
			case SmalltalkParser.DYNDICT_START:
			case SmalltalkParser.DYNARR_START:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 266;
				this.runtimeLiteral();
				}
				break;
			case SmalltalkParser.STRING:
			case SmalltalkParser.MINUS:
			case SmalltalkParser.RESERVED_WORD:
			case SmalltalkParser.HASH:
			case SmalltalkParser.HEX:
			case SmalltalkParser.LITARR_START:
			case SmalltalkParser.DIGIT:
			case SmalltalkParser.CHARACTER_CONSTANT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 267;
				this.parsetimeLiteral();
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
	public runtimeLiteral(): RuntimeLiteralContext {
		let _localctx: RuntimeLiteralContext = new RuntimeLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, SmalltalkParser.RULE_runtimeLiteral);
		try {
			this.state = 273;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SmalltalkParser.DYNDICT_START:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 270;
				this.dynamicDictionary();
				}
				break;
			case SmalltalkParser.DYNARR_START:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 271;
				this.dynamicArray();
				}
				break;
			case SmalltalkParser.BLOCK_START:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 272;
				this.block();
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
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, SmalltalkParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 275;
			this.match(SmalltalkParser.BLOCK_START);
			this.state = 277;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 40, this._ctx) ) {
			case 1:
				{
				this.state = 276;
				this.blockParamList();
				}
				break;
			}
			this.state = 280;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 41, this._ctx) ) {
			case 1:
				{
				this.state = 279;
				this.ws();
				}
				break;
			}
			this.state = 283;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 1)) & ~0x1F) === 0 && ((1 << (_la - 1)) & ((1 << (SmalltalkParser.SEPARATOR - 1)) | (1 << (SmalltalkParser.STRING - 1)) | (1 << (SmalltalkParser.COMMENT - 1)) | (1 << (SmalltalkParser.BLOCK_START - 1)) | (1 << (SmalltalkParser.OPEN_PAREN - 1)) | (1 << (SmalltalkParser.PIPE - 1)) | (1 << (SmalltalkParser.LT - 1)) | (1 << (SmalltalkParser.MINUS - 1)) | (1 << (SmalltalkParser.RESERVED_WORD - 1)) | (1 << (SmalltalkParser.IDENTIFIER - 1)) | (1 << (SmalltalkParser.CARROT - 1)) | (1 << (SmalltalkParser.HASH - 1)) | (1 << (SmalltalkParser.HEX - 1)) | (1 << (SmalltalkParser.LITARR_START - 1)) | (1 << (SmalltalkParser.DYNDICT_START - 1)) | (1 << (SmalltalkParser.DYNARR_START - 1)) | (1 << (SmalltalkParser.DIGIT - 1)) | (1 << (SmalltalkParser.CHARACTER_CONSTANT - 1)))) !== 0)) {
				{
				this.state = 282;
				this.sequence();
				}
			}

			this.state = 285;
			this.match(SmalltalkParser.BLOCK_END);
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
	public blockParamList(): BlockParamListContext {
		let _localctx: BlockParamListContext = new BlockParamListContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, SmalltalkParser.RULE_blockParamList);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 291;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 288;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === SmalltalkParser.SEPARATOR || _la === SmalltalkParser.COMMENT) {
						{
						this.state = 287;
						this.ws();
						}
					}

					this.state = 290;
					this.match(SmalltalkParser.BLOCK_PARAM);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 293;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 44, this._ctx);
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
	public dynamicDictionary(): DynamicDictionaryContext {
		let _localctx: DynamicDictionaryContext = new DynamicDictionaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, SmalltalkParser.RULE_dynamicDictionary);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 295;
			this.match(SmalltalkParser.DYNDICT_START);
			this.state = 297;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 45, this._ctx) ) {
			case 1:
				{
				this.state = 296;
				this.ws();
				}
				break;
			}
			this.state = 300;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 2)) & ~0x1F) === 0 && ((1 << (_la - 2)) & ((1 << (SmalltalkParser.STRING - 2)) | (1 << (SmalltalkParser.BLOCK_START - 2)) | (1 << (SmalltalkParser.OPEN_PAREN - 2)) | (1 << (SmalltalkParser.LT - 2)) | (1 << (SmalltalkParser.MINUS - 2)) | (1 << (SmalltalkParser.RESERVED_WORD - 2)) | (1 << (SmalltalkParser.IDENTIFIER - 2)) | (1 << (SmalltalkParser.HASH - 2)) | (1 << (SmalltalkParser.HEX - 2)) | (1 << (SmalltalkParser.LITARR_START - 2)) | (1 << (SmalltalkParser.DYNDICT_START - 2)) | (1 << (SmalltalkParser.DYNARR_START - 2)) | (1 << (SmalltalkParser.DIGIT - 2)) | (1 << (SmalltalkParser.CHARACTER_CONSTANT - 2)))) !== 0)) {
				{
				this.state = 299;
				this.expressions();
				}
			}

			this.state = 303;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SmalltalkParser.SEPARATOR || _la === SmalltalkParser.COMMENT) {
				{
				this.state = 302;
				this.ws();
				}
			}

			this.state = 305;
			this.match(SmalltalkParser.DYNARR_END);
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
	public dynamicArray(): DynamicArrayContext {
		let _localctx: DynamicArrayContext = new DynamicArrayContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, SmalltalkParser.RULE_dynamicArray);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 307;
			this.match(SmalltalkParser.DYNARR_START);
			this.state = 309;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 48, this._ctx) ) {
			case 1:
				{
				this.state = 308;
				this.ws();
				}
				break;
			}
			this.state = 312;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 2)) & ~0x1F) === 0 && ((1 << (_la - 2)) & ((1 << (SmalltalkParser.STRING - 2)) | (1 << (SmalltalkParser.BLOCK_START - 2)) | (1 << (SmalltalkParser.OPEN_PAREN - 2)) | (1 << (SmalltalkParser.LT - 2)) | (1 << (SmalltalkParser.MINUS - 2)) | (1 << (SmalltalkParser.RESERVED_WORD - 2)) | (1 << (SmalltalkParser.IDENTIFIER - 2)) | (1 << (SmalltalkParser.HASH - 2)) | (1 << (SmalltalkParser.HEX - 2)) | (1 << (SmalltalkParser.LITARR_START - 2)) | (1 << (SmalltalkParser.DYNDICT_START - 2)) | (1 << (SmalltalkParser.DYNARR_START - 2)) | (1 << (SmalltalkParser.DIGIT - 2)) | (1 << (SmalltalkParser.CHARACTER_CONSTANT - 2)))) !== 0)) {
				{
				this.state = 311;
				this.expressions();
				}
			}

			this.state = 315;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SmalltalkParser.SEPARATOR || _la === SmalltalkParser.COMMENT) {
				{
				this.state = 314;
				this.ws();
				}
			}

			this.state = 317;
			this.match(SmalltalkParser.DYNARR_END);
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
	public parsetimeLiteral(): ParsetimeLiteralContext {
		let _localctx: ParsetimeLiteralContext = new ParsetimeLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, SmalltalkParser.RULE_parsetimeLiteral);
		try {
			this.state = 325;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SmalltalkParser.RESERVED_WORD:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 319;
				this.pseudoVariable();
				}
				break;
			case SmalltalkParser.MINUS:
			case SmalltalkParser.HEX:
			case SmalltalkParser.DIGIT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 320;
				this.number();
				}
				break;
			case SmalltalkParser.CHARACTER_CONSTANT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 321;
				this.charConstant();
				}
				break;
			case SmalltalkParser.LITARR_START:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 322;
				this.literalArray();
				}
				break;
			case SmalltalkParser.STRING:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 323;
				this.string();
				}
				break;
			case SmalltalkParser.HASH:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 324;
				this.symbol();
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
	public number(): NumberContext {
		let _localctx: NumberContext = new NumberContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, SmalltalkParser.RULE_number);
		try {
			this.state = 331;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 52, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 327;
				this.numberExp();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 328;
				this.hex();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 329;
				this.stFloat();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 330;
				this.stInteger();
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
	public numberExp(): NumberExpContext {
		let _localctx: NumberExpContext = new NumberExpContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, SmalltalkParser.RULE_numberExp);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 335;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 53, this._ctx) ) {
			case 1:
				{
				this.state = 333;
				this.stFloat();
				}
				break;

			case 2:
				{
				this.state = 334;
				this.stInteger();
				}
				break;
			}
			this.state = 337;
			this.match(SmalltalkParser.EXP);
			this.state = 338;
			this.stInteger();
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
	public charConstant(): CharConstantContext {
		let _localctx: CharConstantContext = new CharConstantContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, SmalltalkParser.RULE_charConstant);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 340;
			this.match(SmalltalkParser.CHARACTER_CONSTANT);
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
	public hex(): HexContext {
		let _localctx: HexContext = new HexContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, SmalltalkParser.RULE_hex);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 343;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SmalltalkParser.MINUS) {
				{
				this.state = 342;
				this.match(SmalltalkParser.MINUS);
				}
			}

			this.state = 345;
			this.match(SmalltalkParser.HEX);
			this.state = 347;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 346;
				this.match(SmalltalkParser.HEXDIGIT);
				}
				}
				this.state = 349;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === SmalltalkParser.HEXDIGIT);
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
	public stInteger(): StIntegerContext {
		let _localctx: StIntegerContext = new StIntegerContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, SmalltalkParser.RULE_stInteger);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 352;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SmalltalkParser.MINUS) {
				{
				this.state = 351;
				this.match(SmalltalkParser.MINUS);
				}
			}

			this.state = 355;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 354;
					this.match(SmalltalkParser.DIGIT);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 357;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 57, this._ctx);
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
	public stFloat(): StFloatContext {
		let _localctx: StFloatContext = new StFloatContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, SmalltalkParser.RULE_stFloat);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 360;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SmalltalkParser.MINUS) {
				{
				this.state = 359;
				this.match(SmalltalkParser.MINUS);
				}
			}

			this.state = 363;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 362;
				this.match(SmalltalkParser.DIGIT);
				}
				}
				this.state = 365;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === SmalltalkParser.DIGIT);
			this.state = 367;
			this.match(SmalltalkParser.PERIOD);
			this.state = 369;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 368;
					this.match(SmalltalkParser.DIGIT);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 371;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 60, this._ctx);
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
	public pseudoVariable(): PseudoVariableContext {
		let _localctx: PseudoVariableContext = new PseudoVariableContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, SmalltalkParser.RULE_pseudoVariable);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 373;
			this.match(SmalltalkParser.RESERVED_WORD);
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
	public string(): StringContext {
		let _localctx: StringContext = new StringContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, SmalltalkParser.RULE_string);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 375;
			this.match(SmalltalkParser.STRING);
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
	public symbol(): SymbolContext {
		let _localctx: SymbolContext = new SymbolContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, SmalltalkParser.RULE_symbol);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 377;
			this.match(SmalltalkParser.HASH);
			this.state = 378;
			this.bareSymbol();
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
	public primitive(): PrimitiveContext {
		let _localctx: PrimitiveContext = new PrimitiveContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, SmalltalkParser.RULE_primitive);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 380;
			this.match(SmalltalkParser.LT);
			this.state = 382;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SmalltalkParser.SEPARATOR || _la === SmalltalkParser.COMMENT) {
				{
				this.state = 381;
				this.ws();
				}
			}

			this.state = 384;
			this.match(SmalltalkParser.KEYWORD);
			this.state = 386;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SmalltalkParser.SEPARATOR || _la === SmalltalkParser.COMMENT) {
				{
				this.state = 385;
				this.ws();
				}
			}

			this.state = 389;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 388;
				this.match(SmalltalkParser.DIGIT);
				}
				}
				this.state = 391;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === SmalltalkParser.DIGIT);
			this.state = 394;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SmalltalkParser.SEPARATOR || _la === SmalltalkParser.COMMENT) {
				{
				this.state = 393;
				this.ws();
				}
			}

			this.state = 396;
			this.match(SmalltalkParser.GT);
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
	public bareSymbol(): BareSymbolContext {
		let _localctx: BareSymbolContext = new BareSymbolContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, SmalltalkParser.RULE_bareSymbol);
		let _la: number;
		try {
			let _alt: number;
			this.state = 405;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SmalltalkParser.BINARY_SELECTOR:
			case SmalltalkParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 398;
				_la = this._input.LA(1);
				if (!(_la === SmalltalkParser.BINARY_SELECTOR || _la === SmalltalkParser.IDENTIFIER)) {
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
			case SmalltalkParser.KEYWORD:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 400;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 399;
						this.match(SmalltalkParser.KEYWORD);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 402;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 65, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case SmalltalkParser.STRING:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 404;
				this.string();
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
	public literalArray(): LiteralArrayContext {
		let _localctx: LiteralArrayContext = new LiteralArrayContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, SmalltalkParser.RULE_literalArray);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 407;
			this.match(SmalltalkParser.LITARR_START);
			this.state = 408;
			this.literalArrayRest();
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
	public literalArrayRest(): LiteralArrayRestContext {
		let _localctx: LiteralArrayRestContext = new LiteralArrayRestContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, SmalltalkParser.RULE_literalArrayRest);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 411;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SmalltalkParser.SEPARATOR || _la === SmalltalkParser.COMMENT) {
				{
				this.state = 410;
				this.ws();
				}
			}

			this.state = 423;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 2)) & ~0x1F) === 0 && ((1 << (_la - 2)) & ((1 << (SmalltalkParser.STRING - 2)) | (1 << (SmalltalkParser.OPEN_PAREN - 2)) | (1 << (SmalltalkParser.BINARY_SELECTOR - 2)) | (1 << (SmalltalkParser.MINUS - 2)) | (1 << (SmalltalkParser.RESERVED_WORD - 2)) | (1 << (SmalltalkParser.IDENTIFIER - 2)) | (1 << (SmalltalkParser.HASH - 2)) | (1 << (SmalltalkParser.HEX - 2)) | (1 << (SmalltalkParser.LITARR_START - 2)) | (1 << (SmalltalkParser.DIGIT - 2)) | (1 << (SmalltalkParser.KEYWORD - 2)) | (1 << (SmalltalkParser.CHARACTER_CONSTANT - 2)))) !== 0)) {
				{
				{
				this.state = 416;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 68, this._ctx) ) {
				case 1:
					{
					this.state = 413;
					this.parsetimeLiteral();
					}
					break;

				case 2:
					{
					this.state = 414;
					this.bareLiteralArray();
					}
					break;

				case 3:
					{
					this.state = 415;
					this.bareSymbol();
					}
					break;
				}
				this.state = 419;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === SmalltalkParser.SEPARATOR || _la === SmalltalkParser.COMMENT) {
					{
					this.state = 418;
					this.ws();
					}
				}

				}
				}
				this.state = 425;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 426;
			this.match(SmalltalkParser.CLOSE_PAREN);
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
	public bareLiteralArray(): BareLiteralArrayContext {
		let _localctx: BareLiteralArrayContext = new BareLiteralArrayContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, SmalltalkParser.RULE_bareLiteralArray);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 428;
			this.match(SmalltalkParser.OPEN_PAREN);
			this.state = 429;
			this.literalArrayRest();
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
	public unaryTail(): UnaryTailContext {
		let _localctx: UnaryTailContext = new UnaryTailContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, SmalltalkParser.RULE_unaryTail);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 431;
			this.unaryMessage();
			this.state = 433;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 71, this._ctx) ) {
			case 1:
				{
				this.state = 432;
				this.ws();
				}
				break;
			}
			this.state = 436;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 72, this._ctx) ) {
			case 1:
				{
				this.state = 435;
				this.unaryTail();
				}
				break;
			}
			this.state = 439;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 73, this._ctx) ) {
			case 1:
				{
				this.state = 438;
				this.ws();
				}
				break;
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
	public unaryMessage(): UnaryMessageContext {
		let _localctx: UnaryMessageContext = new UnaryMessageContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, SmalltalkParser.RULE_unaryMessage);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 442;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SmalltalkParser.SEPARATOR || _la === SmalltalkParser.COMMENT) {
				{
				this.state = 441;
				this.ws();
				}
			}

			this.state = 444;
			this.unarySelector();
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
	public unarySelector(): UnarySelectorContext {
		let _localctx: UnarySelectorContext = new UnarySelectorContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, SmalltalkParser.RULE_unarySelector);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 446;
			this.match(SmalltalkParser.IDENTIFIER);
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
	public keywords(): KeywordsContext {
		let _localctx: KeywordsContext = new KeywordsContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, SmalltalkParser.RULE_keywords);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 449;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 448;
				this.match(SmalltalkParser.KEYWORD);
				}
				}
				this.state = 451;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === SmalltalkParser.KEYWORD);
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
	public reference(): ReferenceContext {
		let _localctx: ReferenceContext = new ReferenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, SmalltalkParser.RULE_reference);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 453;
			this.variable();
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
	public binaryTail(): BinaryTailContext {
		let _localctx: BinaryTailContext = new BinaryTailContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, SmalltalkParser.RULE_binaryTail);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 455;
			this.binaryMessage();
			this.state = 457;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 76, this._ctx) ) {
			case 1:
				{
				this.state = 456;
				this.binaryTail();
				}
				break;
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
	public binaryMessage(): BinaryMessageContext {
		let _localctx: BinaryMessageContext = new BinaryMessageContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, SmalltalkParser.RULE_binaryMessage);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 460;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SmalltalkParser.SEPARATOR || _la === SmalltalkParser.COMMENT) {
				{
				this.state = 459;
				this.ws();
				}
			}

			this.state = 462;
			this.match(SmalltalkParser.BINARY_SELECTOR);
			this.state = 464;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === SmalltalkParser.SEPARATOR || _la === SmalltalkParser.COMMENT) {
				{
				this.state = 463;
				this.ws();
				}
			}

			this.state = 468;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 79, this._ctx) ) {
			case 1:
				{
				this.state = 466;
				this.unarySend();
				}
				break;

			case 2:
				{
				this.state = 467;
				this.operand();
				}
				break;
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\"\u01D9\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x03\x02\x03\x02\x03\x02" +
		"\x03\x03\x03\x03\x05\x03h\n\x03\x03\x03\x05\x03k\n\x03\x03\x03\x05\x03" +
		"n\n\x03\x03\x03\x05\x03q\n\x03\x03\x04\x06\x04t\n\x04\r\x04\x0E\x04u\x03" +
		"\x05\x03\x05\x05\x05z\n\x05\x03\x05\x06\x05}\n\x05\r\x05\x0E\x05~\x03" +
		"\x05\x05\x05\x82\n\x05\x03\x05\x03\x05\x03\x06\x03\x06\x05\x06\x88\n\x06" +
		"\x03\x06\x03\x06\x05\x06\x8C\n\x06\x03\x06\x03\x06\x05\x06\x90\n\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x05\x06\x96\n\x06\x03\x06\x05\x06\x99\n\x06" +
		"\x05\x06\x9B\n\x06\x03\x07\x03\x07\x05\x07\x9F\n\x07\x03\x07\x03\x07\x05" +
		"\x07\xA3\n\x07\x03\x07\x05\x07\xA6\n\x07\x03\b\x03\b\x03\b\x03\b\x03\b" +
		"\x05\b\xAD\n\b\x03\t\x03\t\x07\t\xB1\n\t\f\t\x0E\t\xB4\v\t\x03\n\x03\n" +
		"\x05\n\xB8\n\n\x03\n\x03\n\x03\v\x03\v\x05\v\xBE\n\v\x03\v\x05\v\xC1\n" +
		"\v\x03\v\x03\v\x05\v\xC5\n\v\x03\v\x06\v\xC8\n\v\r\v\x0E\v\xC9\x03\f\x03" +
		"\f\x03\f\x05\f\xCF\n\f\x03\r\x03\r\x05\r\xD3\n\r\x03\r\x03\r\x05\r\xD7" +
		"\n\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x05\x0F\xDF\n\x0F\x03" +
		"\x10\x03\x10\x05\x10\xE3\n\x10\x03\x10\x05\x10\xE6\n\x10\x03\x11\x03\x11" +
		"\x03\x11\x03\x12\x05\x12\xEC\n\x12\x03\x12\x03\x12\x05\x12\xF0\n\x12\x06" +
		"\x12\xF2\n\x12\r\x12\x0E\x12\xF3\x03\x13\x03\x13\x05\x13\xF8\n\x13\x03" +
		"\x13\x03\x13\x05\x13\xFC\n\x13\x03\x14\x03\x14\x03\x14\x05\x14\u0101\n" +
		"\x14\x03\x15\x03\x15\x05\x15\u0105\n\x15\x03\x15\x03\x15\x05\x15\u0109" +
		"\n\x15\x03\x15\x03\x15\x03\x16\x03\x16\x05\x16\u010F\n\x16\x03\x17\x03" +
		"\x17\x03\x17\x05\x17\u0114\n\x17\x03\x18\x03\x18\x05\x18\u0118\n\x18\x03" +
		"\x18\x05\x18\u011B\n\x18\x03\x18\x05\x18\u011E\n\x18\x03\x18\x03\x18\x03" +
		"\x19\x05\x19\u0123\n\x19\x03\x19\x06\x19\u0126\n\x19\r\x19\x0E\x19\u0127" +
		"\x03\x1A\x03\x1A\x05\x1A\u012C\n\x1A\x03\x1A\x05\x1A\u012F\n\x1A\x03\x1A" +
		"\x05\x1A\u0132\n\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x05\x1B\u0138\n\x1B" +
		"\x03\x1B\x05\x1B\u013B\n\x1B\x03\x1B\x05\x1B\u013E\n\x1B\x03\x1B\x03\x1B" +
		"\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x05\x1C\u0148\n\x1C\x03" +
		"\x1D\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u014E\n\x1D\x03\x1E\x03\x1E\x05\x1E" +
		"\u0152\n\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03 \x05 \u015A\n" +
		" \x03 \x03 \x06 \u015E\n \r \x0E \u015F\x03!\x05!\u0163\n!\x03!\x06!\u0166" +
		"\n!\r!\x0E!\u0167\x03\"\x05\"\u016B\n\"\x03\"\x06\"\u016E\n\"\r\"\x0E" +
		"\"\u016F\x03\"\x03\"\x06\"\u0174\n\"\r\"\x0E\"\u0175\x03#\x03#\x03$\x03" +
		"$\x03%\x03%\x03%\x03&\x03&\x05&\u0181\n&\x03&\x03&\x05&\u0185\n&\x03&" +
		"\x06&\u0188\n&\r&\x0E&\u0189\x03&\x05&\u018D\n&\x03&\x03&\x03\'\x03\'" +
		"\x06\'\u0193\n\'\r\'\x0E\'\u0194\x03\'\x05\'\u0198\n\'\x03(\x03(\x03(" +
		"\x03)\x05)\u019E\n)\x03)\x03)\x03)\x05)\u01A3\n)\x03)\x05)\u01A6\n)\x07" +
		")\u01A8\n)\f)\x0E)\u01AB\v)\x03)\x03)\x03*\x03*\x03*\x03+\x03+\x05+\u01B4" +
		"\n+\x03+\x05+\u01B7\n+\x03+\x05+\u01BA\n+\x03,\x05,\u01BD\n,\x03,\x03" +
		",\x03-\x03-\x03.\x06.\u01C4\n.\r.\x0E.\u01C5\x03/\x03/\x030\x030\x050" +
		"\u01CC\n0\x031\x051\u01CF\n1\x031\x031\x051\u01D3\n1\x031\x031\x051\u01D7" +
		"\n1\x031\x02\x02\x022\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02" +
		"\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02" +
		"\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02" +
		">\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02" +
		"Z\x02\\\x02^\x02`\x02\x02\x04\x04\x02\x03\x03\x05\x05\x04\x02\r\r\x12" +
		"\x12\x02\u0207\x02b\x03\x02\x02\x02\x04p\x03\x02\x02\x02\x06s\x03\x02" +
		"\x02\x02\bw\x03\x02\x02\x02\n\x9A\x03\x02\x02\x02\f\x9C\x03\x02\x02\x02" +
		"\x0E\xAC\x03\x02\x02\x02\x10\xAE\x03\x02\x02\x02\x12\xB5\x03\x02\x02\x02" +
		"\x14\xBD\x03\x02\x02\x02\x16\xCE\x03\x02\x02\x02\x18\xD0\x03\x02\x02\x02" +
		"\x1A\xDA\x03\x02\x02\x02\x1C\xDC\x03\x02\x02\x02\x1E\xE0\x03\x02\x02\x02" +
		" \xE7\x03\x02\x02\x02\"\xEB\x03\x02\x02\x02$\xF5\x03\x02\x02\x02&\u0100" +
		"\x03\x02\x02\x02(\u0102\x03\x02\x02\x02*\u010E\x03\x02\x02\x02,\u0113" +
		"\x03\x02\x02\x02.\u0115\x03\x02\x02\x020\u0125\x03\x02\x02\x022\u0129" +
		"\x03\x02\x02\x024\u0135\x03\x02\x02\x026\u0147\x03\x02\x02\x028\u014D" +
		"\x03\x02\x02\x02:\u0151\x03\x02\x02\x02<\u0156\x03\x02\x02\x02>\u0159" +
		"\x03\x02\x02\x02@\u0162\x03\x02\x02\x02B\u016A\x03\x02\x02\x02D\u0177" +
		"\x03\x02\x02\x02F\u0179\x03\x02\x02\x02H\u017B\x03\x02\x02\x02J\u017E" +
		"\x03\x02\x02\x02L\u0197\x03\x02\x02\x02N\u0199\x03\x02\x02\x02P\u019D" +
		"\x03\x02\x02\x02R\u01AE\x03\x02\x02\x02T\u01B1\x03\x02\x02\x02V\u01BC" +
		"\x03\x02\x02\x02X\u01C0\x03\x02\x02\x02Z\u01C3\x03\x02\x02\x02\\\u01C7" +
		"\x03\x02\x02\x02^\u01C9\x03\x02\x02\x02`\u01CE\x03\x02\x02\x02bc\x05\x04" +
		"\x03\x02cd\x07\x02\x02\x03d\x03\x03\x02\x02\x02eg\x05\b\x05\x02fh\x05" +
		"\x06\x04\x02gf\x03\x02\x02\x02gh\x03\x02\x02\x02hj\x03\x02\x02\x02ik\x05" +
		"\n\x06\x02ji\x03\x02\x02\x02jk\x03\x02\x02\x02kq\x03\x02\x02\x02ln\x05" +
		"\x06\x04\x02ml\x03\x02\x02\x02mn\x03\x02\x02\x02no\x03\x02\x02\x02oq\x05" +
		"\n\x06\x02pe\x03\x02\x02\x02pm\x03\x02\x02\x02q\x05\x03\x02\x02\x02rt" +
		"\t\x02\x02\x02sr\x03\x02\x02\x02tu\x03\x02\x02\x02us\x03\x02\x02\x02u" +
		"v\x03\x02\x02\x02v\x07\x03\x02\x02\x02w|\x07\n\x02\x02xz\x05\x06\x04\x02" +
		"yx\x03\x02\x02\x02yz\x03\x02\x02\x02z{\x03\x02\x02\x02{}\x07\x12\x02\x02" +
		"|y\x03\x02\x02\x02}~\x03\x02\x02\x02~|\x03\x02\x02\x02~\x7F\x03\x02\x02" +
		"\x02\x7F\x81\x03\x02\x02\x02\x80\x82\x05\x06\x04\x02\x81\x80\x03\x02\x02" +
		"\x02\x81\x82\x03\x02\x02\x02\x82\x83\x03\x02\x02\x02\x83\x84\x07\n\x02" +
		"\x02\x84\t\x03\x02\x02\x02\x85\x87\x05\f\x07\x02\x86\x88\x05\x06\x04\x02" +
		"\x87\x86\x03\x02\x02\x02\x87\x88\x03\x02\x02\x02\x88\x9B\x03\x02\x02\x02" +
		"\x89\x8B\x05\x10\t\x02\x8A\x8C\x05\x06\x04\x02\x8B\x8A\x03\x02\x02\x02" +
		"\x8B\x8C\x03\x02\x02\x02\x8C\x8D\x03\x02\x02\x02\x8D\x8F\x07\v\x02\x02" +
		"\x8E\x90\x05\x06\x04\x02\x8F\x8E\x03\x02\x02\x02\x8F\x90\x03\x02\x02\x02" +
		"\x90\x91\x03\x02\x02\x02\x91\x92\x05\f\x07\x02\x92\x9B\x03\x02\x02\x02" +
		"\x93\x95\x05\x10\t\x02\x94\x96\x07\v\x02\x02\x95\x94\x03\x02\x02\x02\x95" +
		"\x96\x03\x02\x02\x02\x96\x98\x03\x02\x02\x02\x97\x99\x05\x06\x04\x02\x98" +
		"\x97\x03\x02\x02\x02\x98\x99\x03\x02\x02\x02\x99\x9B\x03\x02\x02\x02\x9A" +
		"\x85\x03\x02\x02\x02\x9A\x89\x03\x02\x02\x02\x9A\x93\x03\x02\x02\x02\x9B" +
		"\v\x03\x02\x02\x02\x9C\x9E\x07\x13\x02\x02\x9D\x9F\x05\x06\x04\x02\x9E" +
		"\x9D\x03\x02\x02\x02\x9E\x9F\x03\x02\x02\x02\x9F\xA0\x03\x02\x02\x02\xA0" +
		"\xA2\x05\x0E\b\x02\xA1\xA3\x05\x06\x04\x02\xA2\xA1\x03\x02\x02\x02\xA2" +
		"\xA3\x03\x02\x02\x02\xA3\xA5\x03\x02\x02\x02\xA4\xA6\x07\v\x02\x02\xA5" +
		"\xA4\x03\x02\x02\x02\xA5\xA6\x03\x02\x02\x02\xA6\r\x03\x02\x02\x02\xA7" +
		"\xAD\x05\x18\r\x02\xA8\xAD\x05\x14\v\x02\xA9\xAD\x05 \x11\x02\xAA\xAD" +
		"\x05\x1C\x0F\x02\xAB\xAD\x05J&\x02\xAC\xA7\x03\x02\x02\x02\xAC\xA8\x03" +
		"\x02\x02\x02\xAC\xA9\x03\x02\x02\x02\xAC\xAA\x03\x02\x02\x02\xAC\xAB\x03" +
		"\x02\x02\x02\xAD\x0F\x03\x02\x02\x02\xAE\xB2\x05\x0E\b\x02\xAF\xB1\x05" +
		"\x12\n\x02\xB0\xAF\x03\x02\x02\x02\xB1\xB4\x03\x02\x02\x02\xB2\xB0\x03" +
		"\x02\x02\x02\xB2\xB3\x03\x02\x02\x02\xB3\x11\x03\x02\x02\x02\xB4\xB2\x03" +
		"\x02\x02\x02\xB5\xB7\x07\v\x02\x02\xB6\xB8\x05\x06\x04\x02\xB7\xB6\x03" +
		"\x02\x02\x02\xB7\xB8\x03\x02\x02\x02\xB8\xB9\x03\x02\x02\x02\xB9\xBA\x05" +
		"\x0E\b\x02\xBA\x13\x03\x02\x02\x02\xBB\xBE\x05 \x11\x02\xBC\xBE\x05\x1C" +
		"\x0F\x02\xBD\xBB\x03\x02\x02\x02\xBD\xBC\x03\x02\x02\x02\xBE\xC7\x03\x02" +
		"\x02\x02\xBF\xC1\x05\x06\x04\x02\xC0\xBF\x03\x02\x02\x02\xC0\xC1\x03\x02" +
		"\x02\x02\xC1\xC2\x03\x02\x02\x02\xC2\xC4\x07\f\x02\x02\xC3\xC5\x05\x06" +
		"\x04\x02\xC4\xC3\x03\x02\x02\x02\xC4\xC5\x03\x02\x02\x02\xC5\xC6\x03\x02" +
		"\x02\x02\xC6\xC8\x05\x16\f\x02\xC7\xC0\x03\x02\x02\x02\xC8\xC9\x03\x02" +
		"\x02\x02\xC9\xC7\x03\x02\x02\x02\xC9\xCA\x03\x02\x02\x02\xCA\x15\x03\x02" +
		"\x02\x02\xCB\xCF\x05`1\x02\xCC\xCF\x05V,\x02\xCD\xCF\x05\"\x12\x02\xCE" +
		"\xCB\x03\x02\x02\x02\xCE\xCC\x03\x02\x02\x02\xCE\xCD\x03\x02\x02\x02\xCF" +
		"\x17\x03\x02\x02\x02\xD0\xD2\x05\x1A\x0E\x02\xD1\xD3\x05\x06\x04\x02\xD2" +
		"\xD1\x03\x02\x02\x02\xD2\xD3\x03\x02\x02\x02\xD3\xD4\x03\x02\x02\x02\xD4" +
		"\xD6\x07\x15\x02\x02\xD5\xD7\x05\x06\x04\x02\xD6\xD5\x03\x02\x02\x02\xD6" +
		"\xD7\x03\x02\x02\x02\xD7\xD8\x03\x02\x02\x02\xD8\xD9\x05\x0E\b\x02\xD9" +
		"\x19\x03\x02\x02\x02\xDA\xDB\x07\x12\x02\x02\xDB\x1B\x03\x02\x02\x02\xDC" +
		"\xDE\x05\x1E\x10\x02\xDD\xDF\x05^0\x02\xDE\xDD\x03\x02\x02\x02\xDE\xDF" +
		"\x03\x02\x02\x02\xDF\x1D\x03\x02\x02\x02\xE0\xE2\x05&\x14\x02\xE1\xE3" +
		"\x05\x06\x04\x02\xE2\xE1\x03\x02\x02\x02\xE2\xE3\x03\x02\x02\x02\xE3\xE5" +
		"\x03\x02\x02\x02\xE4\xE6\x05T+\x02\xE5\xE4\x03\x02\x02\x02\xE5\xE6\x03" +
		"\x02\x02\x02\xE6\x1F\x03\x02\x02\x02\xE7\xE8\x05\x1C\x0F\x02\xE8\xE9\x05" +
		"\"\x12\x02\xE9!\x03\x02\x02\x02\xEA\xEC\x05\x06\x04\x02\xEB\xEA\x03\x02" +
		"\x02\x02\xEB\xEC\x03\x02\x02\x02\xEC\xF1\x03\x02\x02\x02\xED\xEF\x05$" +
		"\x13\x02\xEE\xF0\x05\x06\x04\x02\xEF\xEE\x03\x02\x02\x02\xEF\xF0\x03\x02" +
		"\x02\x02\xF0\xF2\x03\x02\x02\x02\xF1\xED\x03\x02\x02\x02\xF2\xF3\x03\x02" +
		"\x02\x02\xF3\xF1\x03\x02\x02\x02\xF3\xF4\x03\x02\x02\x02\xF4#\x03\x02" +
		"\x02\x02\xF5\xF7\x07 \x02\x02\xF6\xF8\x05\x06\x04\x02\xF7\xF6\x03\x02" +
		"\x02\x02\xF7\xF8\x03\x02\x02\x02\xF8\xF9\x03\x02\x02\x02\xF9\xFB\x05\x1C" +
		"\x0F\x02\xFA\xFC\x05\x06\x04\x02\xFB\xFA\x03\x02\x02\x02\xFB\xFC\x03\x02" +
		"\x02\x02\xFC%\x03\x02\x02\x02\xFD\u0101\x05*\x16\x02\xFE\u0101\x05\\/" +
		"\x02\xFF\u0101\x05(\x15\x02\u0100\xFD\x03\x02\x02\x02\u0100\xFE\x03\x02" +
		"\x02\x02\u0100\xFF\x03\x02\x02\x02\u0101\'\x03\x02\x02\x02\u0102\u0104" +
		"\x07\t\x02\x02\u0103\u0105\x05\x06\x04\x02\u0104\u0103\x03\x02\x02\x02" +
		"\u0104\u0105\x03\x02\x02\x02\u0105\u0106\x03\x02\x02\x02\u0106\u0108\x05" +
		"\x0E\b\x02\u0107\u0109\x05\x06\x04\x02\u0108\u0107\x03\x02\x02\x02\u0108" +
		"\u0109\x03\x02\x02\x02\u0109\u010A\x03\x02\x02\x02\u010A\u010B\x07\b\x02" +
		"\x02\u010B)\x03\x02\x02\x02\u010C\u010F\x05,\x17\x02\u010D\u010F\x056" +
		"\x1C\x02\u010E\u010C\x03\x02\x02\x02\u010E\u010D\x03\x02\x02\x02\u010F" +
		"+\x03\x02\x02\x02\u0110\u0114\x052\x1A\x02\u0111\u0114\x054\x1B\x02\u0112" +
		"\u0114\x05.\x18\x02\u0113\u0110\x03\x02\x02\x02\u0113\u0111\x03\x02\x02" +
		"\x02\u0113\u0112\x03\x02\x02\x02\u0114-\x03\x02\x02\x02\u0115\u0117\x07" +
		"\x06\x02\x02\u0116\u0118\x050\x19\x02\u0117\u0116\x03\x02\x02\x02\u0117" +
		"\u0118\x03\x02\x02\x02\u0118\u011A\x03\x02\x02\x02\u0119\u011B\x05\x06" +
		"\x04\x02\u011A\u0119\x03\x02\x02\x02\u011A\u011B\x03\x02\x02\x02\u011B" +
		"\u011D\x03\x02\x02\x02\u011C\u011E\x05\x04\x03\x02\u011D\u011C\x03\x02" +
		"\x02\x02\u011D\u011E\x03\x02\x02\x02\u011E\u011F\x03\x02\x02\x02\u011F" +
		"\u0120\x07\x07\x02\x02\u0120/\x03\x02\x02\x02\u0121\u0123\x05\x06\x04" +
		"\x02\u0122\u0121\x03\x02\x02\x02\u0122\u0123\x03\x02\x02\x02\u0123\u0124" +
		"\x03\x02\x02\x02\u0124\u0126\x07!\x02\x02\u0125\u0122\x03\x02\x02\x02" +
		"\u0126\u0127\x03\x02\x02\x02\u0127\u0125\x03\x02\x02\x02\u0127\u0128\x03" +
		"\x02\x02\x02\u01281\x03\x02\x02\x02\u0129\u012B\x07\x1B\x02\x02\u012A" +
		"\u012C\x05\x06\x04\x02\u012B\u012A\x03\x02\x02\x02\u012B\u012C\x03\x02" +
		"\x02\x02\u012C\u012E\x03\x02\x02\x02\u012D\u012F\x05\x10\t\x02\u012E\u012D" +
		"\x03\x02\x02\x02\u012E\u012F\x03\x02\x02\x02\u012F\u0131\x03\x02\x02\x02" +
		"\u0130\u0132\x05\x06\x04\x02\u0131\u0130\x03\x02\x02\x02\u0131\u0132\x03" +
		"\x02\x02\x02\u0132\u0133\x03\x02\x02\x02\u0133\u0134\x07\x1C\x02\x02\u0134" +
		"3\x03\x02\x02\x02\u0135\u0137\x07\x1D\x02\x02\u0136\u0138\x05\x06\x04" +
		"\x02\u0137\u0136\x03\x02\x02\x02\u0137\u0138\x03\x02\x02\x02\u0138\u013A" +
		"\x03\x02\x02\x02\u0139\u013B\x05\x10\t\x02\u013A\u0139\x03\x02\x02\x02" +
		"\u013A\u013B\x03\x02\x02\x02\u013B\u013D\x03\x02\x02\x02\u013C\u013E\x05" +
		"\x06\x04\x02\u013D\u013C\x03\x02\x02\x02\u013D\u013E\x03\x02\x02\x02\u013E" +
		"\u013F\x03\x02\x02\x02\u013F\u0140\x07\x1C\x02\x02\u01405\x03\x02\x02" +
		"\x02\u0141\u0148\x05D#\x02\u0142\u0148\x058\x1D\x02\u0143\u0148\x05<\x1F" +
		"\x02\u0144\u0148\x05N(\x02\u0145\u0148\x05F$\x02\u0146\u0148\x05H%\x02" +
		"\u0147\u0141\x03\x02\x02\x02\u0147\u0142\x03\x02\x02\x02\u0147\u0143\x03" +
		"\x02\x02\x02\u0147\u0144\x03\x02\x02\x02\u0147\u0145\x03\x02\x02\x02\u0147" +
		"\u0146\x03\x02\x02\x02\u01487\x03\x02\x02\x02\u0149\u014E\x05:\x1E\x02" +
		"\u014A\u014E\x05> \x02\u014B\u014E\x05B\"\x02\u014C\u014E\x05@!\x02\u014D" +
		"\u0149\x03\x02\x02\x02\u014D\u014A\x03\x02\x02\x02\u014D\u014B\x03\x02" +
		"\x02\x02\u014D\u014C\x03\x02\x02\x02\u014E9\x03\x02\x02\x02\u014F\u0152" +
		"\x05B\"\x02\u0150\u0152\x05@!\x02\u0151\u014F\x03\x02\x02\x02\u0151\u0150" +
		"\x03\x02\x02\x02\u0152\u0153\x03\x02\x02\x02\u0153\u0154\x07\x18\x02\x02" +
		"\u0154\u0155\x05@!\x02\u0155;\x03\x02\x02\x02\u0156\u0157\x07\"\x02\x02" +
		"\u0157=\x03\x02\x02\x02\u0158\u015A\x07\x10\x02\x02\u0159\u0158\x03\x02" +
		"\x02\x02\u0159\u015A\x03\x02\x02\x02\u015A\u015B\x03\x02\x02\x02\u015B" +
		"\u015D\x07\x19\x02\x02\u015C\u015E\x07\x1F\x02\x02\u015D\u015C\x03\x02" +
		"\x02\x02\u015E\u015F\x03\x02\x02\x02\u015F\u015D\x03\x02\x02\x02\u015F" +
		"\u0160\x03\x02\x02\x02\u0160?\x03\x02\x02\x02\u0161\u0163\x07\x10\x02" +
		"\x02\u0162\u0161\x03\x02\x02\x02\u0162\u0163\x03\x02\x02\x02\u0163\u0165" +
		"\x03\x02\x02\x02\u0164\u0166\x07\x1E\x02\x02\u0165\u0164\x03\x02\x02\x02" +
		"\u0166\u0167\x03\x02\x02\x02\u0167\u0165\x03\x02\x02\x02\u0167\u0168\x03" +
		"\x02\x02\x02\u0168A\x03\x02\x02\x02\u0169\u016B\x07\x10\x02\x02\u016A" +
		"\u0169\x03\x02\x02\x02\u016A\u016B\x03\x02\x02\x02\u016B\u016D\x03\x02" +
		"\x02\x02\u016C\u016E\x07\x1E\x02\x02\u016D\u016C\x03\x02\x02\x02\u016E" +
		"\u016F\x03\x02\x02\x02\u016F\u016D\x03\x02\x02\x02\u016F\u0170\x03\x02" +
		"\x02\x02\u0170\u0171\x03\x02\x02\x02\u0171\u0173\x07\v\x02\x02\u0172\u0174" +
		"\x07\x1E\x02\x02\u0173\u0172\x03\x02\x02\x02\u0174\u0175\x03\x02\x02\x02" +
		"\u0175\u0173\x03\x02\x02\x02\u0175\u0176\x03\x02\x02\x02\u0176C\x03\x02" +
		"\x02\x02\u0177\u0178\x07\x11\x02\x02\u0178E\x03\x02\x02\x02\u0179\u017A" +
		"\x07\x04\x02\x02\u017AG\x03\x02\x02\x02\u017B\u017C\x07\x16\x02\x02\u017C" +
		"\u017D\x05L\'\x02\u017DI\x03\x02\x02\x02\u017E\u0180\x07\x0E\x02\x02\u017F" +
		"\u0181\x05\x06\x04\x02\u0180\u017F\x03\x02\x02\x02\u0180\u0181\x03\x02" +
		"\x02\x02\u0181\u0182\x03\x02\x02\x02\u0182\u0184\x07 \x02\x02\u0183\u0185" +
		"\x05\x06\x04\x02\u0184\u0183\x03\x02\x02\x02\u0184\u0185\x03\x02\x02\x02" +
		"\u0185\u0187\x03\x02\x02\x02\u0186\u0188\x07\x1E\x02\x02\u0187\u0186\x03" +
		"\x02\x02\x02\u0188\u0189\x03\x02\x02\x02\u0189\u0187\x03\x02\x02\x02\u0189" +
		"\u018A\x03\x02\x02\x02\u018A\u018C\x03\x02\x02\x02\u018B\u018D\x05\x06" +
		"\x04\x02\u018C\u018B\x03\x02\x02\x02\u018C\u018D\x03\x02\x02\x02\u018D" +
		"\u018E\x03\x02\x02\x02\u018E\u018F\x07\x0F\x02\x02\u018FK\x03\x02\x02" +
		"\x02\u0190\u0198\t\x03\x02\x02\u0191\u0193\x07 \x02\x02\u0192\u0191\x03" +
		"\x02\x02\x02\u0193\u0194\x03\x02\x02\x02\u0194\u0192\x03\x02\x02\x02\u0194" +
		"\u0195\x03\x02\x02\x02\u0195\u0198\x03\x02\x02\x02\u0196\u0198\x05F$\x02" +
		"\u0197\u0190\x03\x02\x02\x02\u0197\u0192\x03\x02\x02\x02\u0197\u0196\x03" +
		"\x02\x02\x02\u0198M\x03\x02\x02\x02\u0199\u019A\x07\x1A\x02\x02\u019A" +
		"\u019B\x05P)\x02\u019BO\x03\x02\x02\x02\u019C\u019E\x05\x06\x04\x02\u019D" +
		"\u019C\x03\x02\x02\x02\u019D\u019E\x03\x02\x02\x02\u019E\u01A9\x03\x02" +
		"\x02\x02\u019F\u01A3\x056\x1C\x02\u01A0\u01A3\x05R*\x02\u01A1\u01A3\x05" +
		"L\'\x02\u01A2\u019F\x03\x02\x02\x02\u01A2\u01A0\x03\x02\x02\x02\u01A2" +
		"\u01A1\x03\x02\x02\x02\u01A3\u01A5\x03\x02\x02\x02\u01A4\u01A6\x05\x06" +
		"\x04\x02\u01A5\u01A4\x03\x02\x02\x02\u01A5\u01A6\x03\x02\x02\x02\u01A6" +
		"\u01A8\x03\x02\x02\x02\u01A7\u01A2\x03\x02\x02\x02\u01A8\u01AB\x03\x02" +
		"\x02\x02\u01A9\u01A7\x03\x02\x02\x02\u01A9\u01AA\x03\x02\x02\x02\u01AA" +
		"\u01AC\x03\x02\x02\x02\u01AB\u01A9\x03\x02\x02\x02\u01AC\u01AD\x07\b\x02" +
		"\x02\u01ADQ\x03\x02\x02\x02\u01AE\u01AF\x07\t\x02\x02\u01AF\u01B0\x05" +
		"P)\x02\u01B0S\x03\x02\x02\x02\u01B1\u01B3\x05V,\x02\u01B2\u01B4\x05\x06" +
		"\x04\x02\u01B3\u01B2\x03\x02\x02\x02\u01B3\u01B4\x03\x02\x02\x02\u01B4" +
		"\u01B6\x03\x02\x02\x02\u01B5\u01B7\x05T+\x02\u01B6\u01B5\x03\x02\x02\x02" +
		"\u01B6\u01B7\x03\x02\x02\x02\u01B7\u01B9\x03\x02\x02\x02\u01B8\u01BA\x05" +
		"\x06\x04\x02\u01B9\u01B8\x03\x02\x02\x02\u01B9\u01BA\x03\x02\x02\x02\u01BA" +
		"U\x03\x02\x02\x02\u01BB\u01BD\x05\x06\x04\x02\u01BC\u01BB\x03\x02\x02" +
		"\x02\u01BC\u01BD\x03\x02\x02\x02\u01BD\u01BE\x03\x02\x02\x02\u01BE\u01BF" +
		"\x05X-\x02\u01BFW\x03\x02\x02\x02\u01C0\u01C1\x07\x12\x02\x02\u01C1Y\x03" +
		"\x02\x02\x02\u01C2\u01C4\x07 \x02\x02\u01C3\u01C2\x03\x02\x02\x02\u01C4" +
		"\u01C5\x03\x02\x02\x02\u01C5\u01C3\x03\x02\x02\x02\u01C5\u01C6\x03\x02" +
		"\x02\x02\u01C6[\x03\x02\x02\x02\u01C7\u01C8\x05\x1A\x0E\x02\u01C8]\x03" +
		"\x02\x02\x02\u01C9\u01CB\x05`1\x02\u01CA\u01CC\x05^0\x02\u01CB\u01CA\x03" +
		"\x02\x02\x02\u01CB\u01CC\x03\x02\x02\x02\u01CC_\x03\x02\x02\x02\u01CD" +
		"\u01CF\x05\x06\x04\x02\u01CE\u01CD\x03\x02\x02\x02\u01CE\u01CF\x03\x02" +
		"\x02\x02\u01CF\u01D0\x03\x02\x02\x02\u01D0\u01D2\x07\r\x02\x02\u01D1\u01D3" +
		"\x05\x06\x04\x02\u01D2\u01D1\x03\x02\x02\x02\u01D2\u01D3\x03\x02\x02\x02" +
		"\u01D3\u01D6\x03\x02\x02\x02\u01D4\u01D7\x05\x1E\x10\x02\u01D5\u01D7\x05" +
		"&\x14\x02\u01D6\u01D4\x03\x02\x02\x02\u01D6\u01D5\x03\x02\x02\x02\u01D7" +
		"a\x03\x02\x02\x02Rgjmpuy~\x81\x87\x8B\x8F\x95\x98\x9A\x9E\xA2\xA5\xAC" +
		"\xB2\xB7\xBD\xC0\xC4\xC9\xCE\xD2\xD6\xDE\xE2\xE5\xEB\xEF\xF3\xF7\xFB\u0100" +
		"\u0104\u0108\u010E\u0113\u0117\u011A\u011D\u0122\u0127\u012B\u012E\u0131" +
		"\u0137\u013A\u013D\u0147\u014D\u0151\u0159\u015F\u0162\u0167\u016A\u016F" +
		"\u0175\u0180\u0184\u0189\u018C\u0194\u0197\u019D\u01A2\u01A5\u01A9\u01B3" +
		"\u01B6\u01B9\u01BC\u01C5\u01CB\u01CE\u01D2\u01D6";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!SmalltalkParser.__ATN) {
			SmalltalkParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(SmalltalkParser._serializedATN));
		}

		return SmalltalkParser.__ATN;
	}

}

export class ScriptContext extends ParserRuleContext {
	public sequence(): SequenceContext {
		return this.getRuleContext(0, SequenceContext);
	}
	public EOF(): TerminalNode { return this.getToken(SmalltalkParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmalltalkParser.RULE_script; }
	// @Override
	public enterRule(listener: SmalltalkListener): void {
		if (listener.enterScript) {
			listener.enterScript(this);
		}
	}
	// @Override
	public exitRule(listener: SmalltalkListener): void {
		if (listener.exitScript) {
			listener.exitScript(this);
		}
	}
}


export class SequenceContext extends ParserRuleContext {
	public temps(): TempsContext | undefined {
		return this.tryGetRuleContext(0, TempsContext);
	}
	public ws(): WsContext | undefined {
		return this.tryGetRuleContext(0, WsContext);
	}
	public statements(): StatementsContext | undefined {
		return this.tryGetRuleContext(0, StatementsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmalltalkParser.RULE_sequence; }
	// @Override
	public enterRule(listener: SmalltalkListener): void {
		if (listener.enterSequence) {
			listener.enterSequence(this);
		}
	}
	// @Override
	public exitRule(listener: SmalltalkListener): void {
		if (listener.exitSequence) {
			listener.exitSequence(this);
		}
	}
}


export class WsContext extends ParserRuleContext {
	public SEPARATOR(): TerminalNode[];
	public SEPARATOR(i: number): TerminalNode;
	public SEPARATOR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SmalltalkParser.SEPARATOR);
		} else {
			return this.getToken(SmalltalkParser.SEPARATOR, i);
		}
	}
	public COMMENT(): TerminalNode[];
	public COMMENT(i: number): TerminalNode;
	public COMMENT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SmalltalkParser.COMMENT);
		} else {
			return this.getToken(SmalltalkParser.COMMENT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmalltalkParser.RULE_ws; }
	// @Override
	public enterRule(listener: SmalltalkListener): void {
		if (listener.enterWs) {
			listener.enterWs(this);
		}
	}
	// @Override
	public exitRule(listener: SmalltalkListener): void {
		if (listener.exitWs) {
			listener.exitWs(this);
		}
	}
}


export class TempsContext extends ParserRuleContext {
	public PIPE(): TerminalNode[];
	public PIPE(i: number): TerminalNode;
	public PIPE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SmalltalkParser.PIPE);
		} else {
			return this.getToken(SmalltalkParser.PIPE, i);
		}
	}
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SmalltalkParser.IDENTIFIER);
		} else {
			return this.getToken(SmalltalkParser.IDENTIFIER, i);
		}
	}
	public ws(): WsContext[];
	public ws(i: number): WsContext;
	public ws(i?: number): WsContext | WsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WsContext);
		} else {
			return this.getRuleContext(i, WsContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmalltalkParser.RULE_temps; }
	// @Override
	public enterRule(listener: SmalltalkListener): void {
		if (listener.enterTemps) {
			listener.enterTemps(this);
		}
	}
	// @Override
	public exitRule(listener: SmalltalkListener): void {
		if (listener.exitTemps) {
			listener.exitTemps(this);
		}
	}
}


export class StatementsContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmalltalkParser.RULE_statements; }
	public copyFrom(ctx: StatementsContext): void {
		super.copyFrom(ctx);
	}
}
export class StatementAnswerContext extends StatementsContext {
	public answer(): AnswerContext {
		return this.getRuleContext(0, AnswerContext);
	}
	public ws(): WsContext | undefined {
		return this.tryGetRuleContext(0, WsContext);
	}
	constructor(ctx: StatementsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SmalltalkListener): void {
		if (listener.enterStatementAnswer) {
			listener.enterStatementAnswer(this);
		}
	}
	// @Override
	public exitRule(listener: SmalltalkListener): void {
		if (listener.exitStatementAnswer) {
			listener.exitStatementAnswer(this);
		}
	}
}
export class StatementExpressionsAnswerContext extends StatementsContext {
	public expressions(): ExpressionsContext {
		return this.getRuleContext(0, ExpressionsContext);
	}
	public PERIOD(): TerminalNode { return this.getToken(SmalltalkParser.PERIOD, 0); }
	public answer(): AnswerContext {
		return this.getRuleContext(0, AnswerContext);
	}
	public ws(): WsContext[];
	public ws(i: number): WsContext;
	public ws(i?: number): WsContext | WsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WsContext);
		} else {
			return this.getRuleContext(i, WsContext);
		}
	}
	constructor(ctx: StatementsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SmalltalkListener): void {
		if (listener.enterStatementExpressionsAnswer) {
			listener.enterStatementExpressionsAnswer(this);
		}
	}
	// @Override
	public exitRule(listener: SmalltalkListener): void {
		if (listener.exitStatementExpressionsAnswer) {
			listener.exitStatementExpressionsAnswer(this);
		}
	}
}
export class StatementExpressionsContext extends StatementsContext {
	public expressions(): ExpressionsContext {
		return this.getRuleContext(0, ExpressionsContext);
	}
	public PERIOD(): TerminalNode | undefined { return this.tryGetToken(SmalltalkParser.PERIOD, 0); }
	public ws(): WsContext | undefined {
		return this.tryGetRuleContext(0, WsContext);
	}
	constructor(ctx: StatementsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: SmalltalkListener): void {
		if (listener.enterStatementExpressions) {
			listener.enterStatementExpressions(this);
		}
	}
	// @Override
	public exitRule(listener: SmalltalkListener): void {
		if (listener.exitStatementExpressions) {
			listener.exitStatementExpressions(this);
		}
	}
}


export class AnswerContext extends ParserRuleContext {
	public CARROT(): TerminalNode { return this.getToken(SmalltalkParser.CARROT, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public ws(): WsContext[];
	public ws(i: number): WsContext;
	public ws(i?: number): WsContext | WsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WsContext);
		} else {
			return this.getRuleContext(i, WsContext);
		}
	}
	public PERIOD(): TerminalNode | undefined { return this.tryGetToken(SmalltalkParser.PERIOD, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmalltalkParser.RULE_answer; }
	// @Override
	public enterRule(listener: SmalltalkListener): void {
		if (listener.enterAnswer) {
			listener.enterAnswer(this);
		}
	}
	// @Override
	public exitRule(listener: SmalltalkListener): void {
		if (listener.exitAnswer) {
			listener.exitAnswer(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public assignment(): AssignmentContext | undefined {
		return this.tryGetRuleContext(0, AssignmentContext);
	}
	public cascade(): CascadeContext | undefined {
		return this.tryGetRuleContext(0, CascadeContext);
	}
	public keywordSend(): KeywordSendContext | undefined {
		return this.tryGetRuleContext(0, KeywordSendContext);
	}
	public binarySend(): BinarySendContext | undefined {
		return this.tryGetRuleContext(0, BinarySendContext);
	}
	public primitive(): PrimitiveContext | undefined {
		return this.tryGetRuleContext(0, PrimitiveContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmalltalkParser.RULE_expression; }
	// @Override
	public enterRule(listener: SmalltalkListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SmalltalkListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
}


export class ExpressionsContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public expressionList(): ExpressionListContext[];
	public expressionList(i: number): ExpressionListContext;
	public expressionList(i?: number): ExpressionListContext | ExpressionListContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionListContext);
		} else {
			return this.getRuleContext(i, ExpressionListContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmalltalkParser.RULE_expressions; }
	// @Override
	public enterRule(listener: SmalltalkListener): void {
		if (listener.enterExpressions) {
			listener.enterExpressions(this);
		}
	}
	// @Override
	public exitRule(listener: SmalltalkListener): void {
		if (listener.exitExpressions) {
			listener.exitExpressions(this);
		}
	}
}


export class ExpressionListContext extends ParserRuleContext {
	public PERIOD(): TerminalNode { return this.getToken(SmalltalkParser.PERIOD, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public ws(): WsContext | undefined {
		return this.tryGetRuleContext(0, WsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmalltalkParser.RULE_expressionList; }
	// @Override
	public enterRule(listener: SmalltalkListener): void {
		if (listener.enterExpressionList) {
			listener.enterExpressionList(this);
		}
	}
	// @Override
	public exitRule(listener: SmalltalkListener): void {
		if (listener.exitExpressionList) {
			listener.exitExpressionList(this);
		}
	}
}


export class CascadeContext extends ParserRuleContext {
	public keywordSend(): KeywordSendContext | undefined {
		return this.tryGetRuleContext(0, KeywordSendContext);
	}
	public binarySend(): BinarySendContext | undefined {
		return this.tryGetRuleContext(0, BinarySendContext);
	}
	public SEMI_COLON(): TerminalNode[];
	public SEMI_COLON(i: number): TerminalNode;
	public SEMI_COLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SmalltalkParser.SEMI_COLON);
		} else {
			return this.getToken(SmalltalkParser.SEMI_COLON, i);
		}
	}
	public message(): MessageContext[];
	public message(i: number): MessageContext;
	public message(i?: number): MessageContext | MessageContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MessageContext);
		} else {
			return this.getRuleContext(i, MessageContext);
		}
	}
	public ws(): WsContext[];
	public ws(i: number): WsContext;
	public ws(i?: number): WsContext | WsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WsContext);
		} else {
			return this.getRuleContext(i, WsContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmalltalkParser.RULE_cascade; }
	// @Override
	public enterRule(listener: SmalltalkListener): void {
		if (listener.enterCascade) {
			listener.enterCascade(this);
		}
	}
	// @Override
	public exitRule(listener: SmalltalkListener): void {
		if (listener.exitCascade) {
			listener.exitCascade(this);
		}
	}
}


export class MessageContext extends ParserRuleContext {
	public binaryMessage(): BinaryMessageContext | undefined {
		return this.tryGetRuleContext(0, BinaryMessageContext);
	}
	public unaryMessage(): UnaryMessageContext | undefined {
		return this.tryGetRuleContext(0, UnaryMessageContext);
	}
	public keywordMessage(): KeywordMessageContext | undefined {
		return this.tryGetRuleContext(0, KeywordMessageContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmalltalkParser.RULE_message; }
	// @Override
	public enterRule(listener: SmalltalkListener): void {
		if (listener.enterMessage) {
			listener.enterMessage(this);
		}
	}
	// @Override
	public exitRule(listener: SmalltalkListener): void {
		if (listener.exitMessage) {
			listener.exitMessage(this);
		}
	}
}


export class AssignmentContext extends ParserRuleContext {
	public variable(): VariableContext {
		return this.getRuleContext(0, VariableContext);
	}
	public ASSIGNMENT(): TerminalNode { return this.getToken(SmalltalkParser.ASSIGNMENT, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public ws(): WsContext[];
	public ws(i: number): WsContext;
	public ws(i?: number): WsContext | WsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WsContext);
		} else {
			return this.getRuleContext(i, WsContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmalltalkParser.RULE_assignment; }
	// @Override
	public enterRule(listener: SmalltalkListener): void {
		if (listener.enterAssignment) {
			listener.enterAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: SmalltalkListener): void {
		if (listener.exitAssignment) {
			listener.exitAssignment(this);
		}
	}
}


export class VariableContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(SmalltalkParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmalltalkParser.RULE_variable; }
	// @Override
	public enterRule(listener: SmalltalkListener): void {
		if (listener.enterVariable) {
			listener.enterVariable(this);
		}
	}
	// @Override
	public exitRule(listener: SmalltalkListener): void {
		if (listener.exitVariable) {
			listener.exitVariable(this);
		}
	}
}


export class BinarySendContext extends ParserRuleContext {
	public unarySend(): UnarySendContext {
		return this.getRuleContext(0, UnarySendContext);
	}
	public binaryTail(): BinaryTailContext | undefined {
		return this.tryGetRuleContext(0, BinaryTailContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmalltalkParser.RULE_binarySend; }
	// @Override
	public enterRule(listener: SmalltalkListener): void {
		if (listener.enterBinarySend) {
			listener.enterBinarySend(this);
		}
	}
	// @Override
	public exitRule(listener: SmalltalkListener): void {
		if (listener.exitBinarySend) {
			listener.exitBinarySend(this);
		}
	}
}


export class UnarySendContext extends ParserRuleContext {
	public operand(): OperandContext {
		return this.getRuleContext(0, OperandContext);
	}
	public ws(): WsContext | undefined {
		return this.tryGetRuleContext(0, WsContext);
	}
	public unaryTail(): UnaryTailContext | undefined {
		return this.tryGetRuleContext(0, UnaryTailContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmalltalkParser.RULE_unarySend; }
	// @Override
	public enterRule(listener: SmalltalkListener): void {
		if (listener.enterUnarySend) {
			listener.enterUnarySend(this);
		}
	}
	// @Override
	public exitRule(listener: SmalltalkListener): void {
		if (listener.exitUnarySend) {
			listener.exitUnarySend(this);
		}
	}
}


export class KeywordSendContext extends ParserRuleContext {
	public binarySend(): BinarySendContext {
		return this.getRuleContext(0, BinarySendContext);
	}
	public keywordMessage(): KeywordMessageContext {
		return this.getRuleContext(0, KeywordMessageContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmalltalkParser.RULE_keywordSend; }
	// @Override
	public enterRule(listener: SmalltalkListener): void {
		if (listener.enterKeywordSend) {
			listener.enterKeywordSend(this);
		}
	}
	// @Override
	public exitRule(listener: SmalltalkListener): void {
		if (listener.exitKeywordSend) {
			listener.exitKeywordSend(this);
		}
	}
}


export class KeywordMessageContext extends ParserRuleContext {
	public ws(): WsContext[];
	public ws(i: number): WsContext;
	public ws(i?: number): WsContext | WsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WsContext);
		} else {
			return this.getRuleContext(i, WsContext);
		}
	}
	public keywordPair(): KeywordPairContext[];
	public keywordPair(i: number): KeywordPairContext;
	public keywordPair(i?: number): KeywordPairContext | KeywordPairContext[] {
		if (i === undefined) {
			return this.getRuleContexts(KeywordPairContext);
		} else {
			return this.getRuleContext(i, KeywordPairContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmalltalkParser.RULE_keywordMessage; }
	// @Override
	public enterRule(listener: SmalltalkListener): void {
		if (listener.enterKeywordMessage) {
			listener.enterKeywordMessage(this);
		}
	}
	// @Override
	public exitRule(listener: SmalltalkListener): void {
		if (listener.exitKeywordMessage) {
			listener.exitKeywordMessage(this);
		}
	}
}


export class KeywordPairContext extends ParserRuleContext {
	public KEYWORD(): TerminalNode { return this.getToken(SmalltalkParser.KEYWORD, 0); }
	public binarySend(): BinarySendContext {
		return this.getRuleContext(0, BinarySendContext);
	}
	public ws(): WsContext[];
	public ws(i: number): WsContext;
	public ws(i?: number): WsContext | WsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WsContext);
		} else {
			return this.getRuleContext(i, WsContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmalltalkParser.RULE_keywordPair; }
	// @Override
	public enterRule(listener: SmalltalkListener): void {
		if (listener.enterKeywordPair) {
			listener.enterKeywordPair(this);
		}
	}
	// @Override
	public exitRule(listener: SmalltalkListener): void {
		if (listener.exitKeywordPair) {
			listener.exitKeywordPair(this);
		}
	}
}


export class OperandContext extends ParserRuleContext {
	public literal(): LiteralContext | undefined {
		return this.tryGetRuleContext(0, LiteralContext);
	}
	public reference(): ReferenceContext | undefined {
		return this.tryGetRuleContext(0, ReferenceContext);
	}
	public subexpression(): SubexpressionContext | undefined {
		return this.tryGetRuleContext(0, SubexpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmalltalkParser.RULE_operand; }
	// @Override
	public enterRule(listener: SmalltalkListener): void {
		if (listener.enterOperand) {
			listener.enterOperand(this);
		}
	}
	// @Override
	public exitRule(listener: SmalltalkListener): void {
		if (listener.exitOperand) {
			listener.exitOperand(this);
		}
	}
}


export class SubexpressionContext extends ParserRuleContext {
	public OPEN_PAREN(): TerminalNode { return this.getToken(SmalltalkParser.OPEN_PAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public CLOSE_PAREN(): TerminalNode { return this.getToken(SmalltalkParser.CLOSE_PAREN, 0); }
	public ws(): WsContext[];
	public ws(i: number): WsContext;
	public ws(i?: number): WsContext | WsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WsContext);
		} else {
			return this.getRuleContext(i, WsContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmalltalkParser.RULE_subexpression; }
	// @Override
	public enterRule(listener: SmalltalkListener): void {
		if (listener.enterSubexpression) {
			listener.enterSubexpression(this);
		}
	}
	// @Override
	public exitRule(listener: SmalltalkListener): void {
		if (listener.exitSubexpression) {
			listener.exitSubexpression(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	public runtimeLiteral(): RuntimeLiteralContext | undefined {
		return this.tryGetRuleContext(0, RuntimeLiteralContext);
	}
	public parsetimeLiteral(): ParsetimeLiteralContext | undefined {
		return this.tryGetRuleContext(0, ParsetimeLiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmalltalkParser.RULE_literal; }
	// @Override
	public enterRule(listener: SmalltalkListener): void {
		if (listener.enterLiteral) {
			listener.enterLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: SmalltalkListener): void {
		if (listener.exitLiteral) {
			listener.exitLiteral(this);
		}
	}
}


export class RuntimeLiteralContext extends ParserRuleContext {
	public dynamicDictionary(): DynamicDictionaryContext | undefined {
		return this.tryGetRuleContext(0, DynamicDictionaryContext);
	}
	public dynamicArray(): DynamicArrayContext | undefined {
		return this.tryGetRuleContext(0, DynamicArrayContext);
	}
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmalltalkParser.RULE_runtimeLiteral; }
	// @Override
	public enterRule(listener: SmalltalkListener): void {
		if (listener.enterRuntimeLiteral) {
			listener.enterRuntimeLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: SmalltalkListener): void {
		if (listener.exitRuntimeLiteral) {
			listener.exitRuntimeLiteral(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	public BLOCK_START(): TerminalNode { return this.getToken(SmalltalkParser.BLOCK_START, 0); }
	public BLOCK_END(): TerminalNode { return this.getToken(SmalltalkParser.BLOCK_END, 0); }
	public blockParamList(): BlockParamListContext | undefined {
		return this.tryGetRuleContext(0, BlockParamListContext);
	}
	public ws(): WsContext | undefined {
		return this.tryGetRuleContext(0, WsContext);
	}
	public sequence(): SequenceContext | undefined {
		return this.tryGetRuleContext(0, SequenceContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmalltalkParser.RULE_block; }
	// @Override
	public enterRule(listener: SmalltalkListener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	// @Override
	public exitRule(listener: SmalltalkListener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
}


export class BlockParamListContext extends ParserRuleContext {
	public BLOCK_PARAM(): TerminalNode[];
	public BLOCK_PARAM(i: number): TerminalNode;
	public BLOCK_PARAM(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SmalltalkParser.BLOCK_PARAM);
		} else {
			return this.getToken(SmalltalkParser.BLOCK_PARAM, i);
		}
	}
	public ws(): WsContext[];
	public ws(i: number): WsContext;
	public ws(i?: number): WsContext | WsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WsContext);
		} else {
			return this.getRuleContext(i, WsContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmalltalkParser.RULE_blockParamList; }
	// @Override
	public enterRule(listener: SmalltalkListener): void {
		if (listener.enterBlockParamList) {
			listener.enterBlockParamList(this);
		}
	}
	// @Override
	public exitRule(listener: SmalltalkListener): void {
		if (listener.exitBlockParamList) {
			listener.exitBlockParamList(this);
		}
	}
}


export class DynamicDictionaryContext extends ParserRuleContext {
	public DYNDICT_START(): TerminalNode { return this.getToken(SmalltalkParser.DYNDICT_START, 0); }
	public DYNARR_END(): TerminalNode { return this.getToken(SmalltalkParser.DYNARR_END, 0); }
	public ws(): WsContext[];
	public ws(i: number): WsContext;
	public ws(i?: number): WsContext | WsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WsContext);
		} else {
			return this.getRuleContext(i, WsContext);
		}
	}
	public expressions(): ExpressionsContext | undefined {
		return this.tryGetRuleContext(0, ExpressionsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmalltalkParser.RULE_dynamicDictionary; }
	// @Override
	public enterRule(listener: SmalltalkListener): void {
		if (listener.enterDynamicDictionary) {
			listener.enterDynamicDictionary(this);
		}
	}
	// @Override
	public exitRule(listener: SmalltalkListener): void {
		if (listener.exitDynamicDictionary) {
			listener.exitDynamicDictionary(this);
		}
	}
}


export class DynamicArrayContext extends ParserRuleContext {
	public DYNARR_START(): TerminalNode { return this.getToken(SmalltalkParser.DYNARR_START, 0); }
	public DYNARR_END(): TerminalNode { return this.getToken(SmalltalkParser.DYNARR_END, 0); }
	public ws(): WsContext[];
	public ws(i: number): WsContext;
	public ws(i?: number): WsContext | WsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WsContext);
		} else {
			return this.getRuleContext(i, WsContext);
		}
	}
	public expressions(): ExpressionsContext | undefined {
		return this.tryGetRuleContext(0, ExpressionsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmalltalkParser.RULE_dynamicArray; }
	// @Override
	public enterRule(listener: SmalltalkListener): void {
		if (listener.enterDynamicArray) {
			listener.enterDynamicArray(this);
		}
	}
	// @Override
	public exitRule(listener: SmalltalkListener): void {
		if (listener.exitDynamicArray) {
			listener.exitDynamicArray(this);
		}
	}
}


export class ParsetimeLiteralContext extends ParserRuleContext {
	public pseudoVariable(): PseudoVariableContext | undefined {
		return this.tryGetRuleContext(0, PseudoVariableContext);
	}
	public number(): NumberContext | undefined {
		return this.tryGetRuleContext(0, NumberContext);
	}
	public charConstant(): CharConstantContext | undefined {
		return this.tryGetRuleContext(0, CharConstantContext);
	}
	public literalArray(): LiteralArrayContext | undefined {
		return this.tryGetRuleContext(0, LiteralArrayContext);
	}
	public string(): StringContext | undefined {
		return this.tryGetRuleContext(0, StringContext);
	}
	public symbol(): SymbolContext | undefined {
		return this.tryGetRuleContext(0, SymbolContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmalltalkParser.RULE_parsetimeLiteral; }
	// @Override
	public enterRule(listener: SmalltalkListener): void {
		if (listener.enterParsetimeLiteral) {
			listener.enterParsetimeLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: SmalltalkListener): void {
		if (listener.exitParsetimeLiteral) {
			listener.exitParsetimeLiteral(this);
		}
	}
}


export class NumberContext extends ParserRuleContext {
	public numberExp(): NumberExpContext | undefined {
		return this.tryGetRuleContext(0, NumberExpContext);
	}
	public hex(): HexContext | undefined {
		return this.tryGetRuleContext(0, HexContext);
	}
	public stFloat(): StFloatContext | undefined {
		return this.tryGetRuleContext(0, StFloatContext);
	}
	public stInteger(): StIntegerContext | undefined {
		return this.tryGetRuleContext(0, StIntegerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmalltalkParser.RULE_number; }
	// @Override
	public enterRule(listener: SmalltalkListener): void {
		if (listener.enterNumber) {
			listener.enterNumber(this);
		}
	}
	// @Override
	public exitRule(listener: SmalltalkListener): void {
		if (listener.exitNumber) {
			listener.exitNumber(this);
		}
	}
}


export class NumberExpContext extends ParserRuleContext {
	public EXP(): TerminalNode { return this.getToken(SmalltalkParser.EXP, 0); }
	public stInteger(): StIntegerContext[];
	public stInteger(i: number): StIntegerContext;
	public stInteger(i?: number): StIntegerContext | StIntegerContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StIntegerContext);
		} else {
			return this.getRuleContext(i, StIntegerContext);
		}
	}
	public stFloat(): StFloatContext | undefined {
		return this.tryGetRuleContext(0, StFloatContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmalltalkParser.RULE_numberExp; }
	// @Override
	public enterRule(listener: SmalltalkListener): void {
		if (listener.enterNumberExp) {
			listener.enterNumberExp(this);
		}
	}
	// @Override
	public exitRule(listener: SmalltalkListener): void {
		if (listener.exitNumberExp) {
			listener.exitNumberExp(this);
		}
	}
}


export class CharConstantContext extends ParserRuleContext {
	public CHARACTER_CONSTANT(): TerminalNode { return this.getToken(SmalltalkParser.CHARACTER_CONSTANT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmalltalkParser.RULE_charConstant; }
	// @Override
	public enterRule(listener: SmalltalkListener): void {
		if (listener.enterCharConstant) {
			listener.enterCharConstant(this);
		}
	}
	// @Override
	public exitRule(listener: SmalltalkListener): void {
		if (listener.exitCharConstant) {
			listener.exitCharConstant(this);
		}
	}
}


export class HexContext extends ParserRuleContext {
	public HEX(): TerminalNode { return this.getToken(SmalltalkParser.HEX, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(SmalltalkParser.MINUS, 0); }
	public HEXDIGIT(): TerminalNode[];
	public HEXDIGIT(i: number): TerminalNode;
	public HEXDIGIT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SmalltalkParser.HEXDIGIT);
		} else {
			return this.getToken(SmalltalkParser.HEXDIGIT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmalltalkParser.RULE_hex; }
	// @Override
	public enterRule(listener: SmalltalkListener): void {
		if (listener.enterHex) {
			listener.enterHex(this);
		}
	}
	// @Override
	public exitRule(listener: SmalltalkListener): void {
		if (listener.exitHex) {
			listener.exitHex(this);
		}
	}
}


export class StIntegerContext extends ParserRuleContext {
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(SmalltalkParser.MINUS, 0); }
	public DIGIT(): TerminalNode[];
	public DIGIT(i: number): TerminalNode;
	public DIGIT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SmalltalkParser.DIGIT);
		} else {
			return this.getToken(SmalltalkParser.DIGIT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmalltalkParser.RULE_stInteger; }
	// @Override
	public enterRule(listener: SmalltalkListener): void {
		if (listener.enterStInteger) {
			listener.enterStInteger(this);
		}
	}
	// @Override
	public exitRule(listener: SmalltalkListener): void {
		if (listener.exitStInteger) {
			listener.exitStInteger(this);
		}
	}
}


export class StFloatContext extends ParserRuleContext {
	public PERIOD(): TerminalNode { return this.getToken(SmalltalkParser.PERIOD, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(SmalltalkParser.MINUS, 0); }
	public DIGIT(): TerminalNode[];
	public DIGIT(i: number): TerminalNode;
	public DIGIT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SmalltalkParser.DIGIT);
		} else {
			return this.getToken(SmalltalkParser.DIGIT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmalltalkParser.RULE_stFloat; }
	// @Override
	public enterRule(listener: SmalltalkListener): void {
		if (listener.enterStFloat) {
			listener.enterStFloat(this);
		}
	}
	// @Override
	public exitRule(listener: SmalltalkListener): void {
		if (listener.exitStFloat) {
			listener.exitStFloat(this);
		}
	}
}


export class PseudoVariableContext extends ParserRuleContext {
	public RESERVED_WORD(): TerminalNode { return this.getToken(SmalltalkParser.RESERVED_WORD, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmalltalkParser.RULE_pseudoVariable; }
	// @Override
	public enterRule(listener: SmalltalkListener): void {
		if (listener.enterPseudoVariable) {
			listener.enterPseudoVariable(this);
		}
	}
	// @Override
	public exitRule(listener: SmalltalkListener): void {
		if (listener.exitPseudoVariable) {
			listener.exitPseudoVariable(this);
		}
	}
}


export class StringContext extends ParserRuleContext {
	public STRING(): TerminalNode { return this.getToken(SmalltalkParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmalltalkParser.RULE_string; }
	// @Override
	public enterRule(listener: SmalltalkListener): void {
		if (listener.enterString) {
			listener.enterString(this);
		}
	}
	// @Override
	public exitRule(listener: SmalltalkListener): void {
		if (listener.exitString) {
			listener.exitString(this);
		}
	}
}


export class SymbolContext extends ParserRuleContext {
	public HASH(): TerminalNode { return this.getToken(SmalltalkParser.HASH, 0); }
	public bareSymbol(): BareSymbolContext {
		return this.getRuleContext(0, BareSymbolContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmalltalkParser.RULE_symbol; }
	// @Override
	public enterRule(listener: SmalltalkListener): void {
		if (listener.enterSymbol) {
			listener.enterSymbol(this);
		}
	}
	// @Override
	public exitRule(listener: SmalltalkListener): void {
		if (listener.exitSymbol) {
			listener.exitSymbol(this);
		}
	}
}


export class PrimitiveContext extends ParserRuleContext {
	public LT(): TerminalNode { return this.getToken(SmalltalkParser.LT, 0); }
	public KEYWORD(): TerminalNode { return this.getToken(SmalltalkParser.KEYWORD, 0); }
	public GT(): TerminalNode { return this.getToken(SmalltalkParser.GT, 0); }
	public ws(): WsContext[];
	public ws(i: number): WsContext;
	public ws(i?: number): WsContext | WsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WsContext);
		} else {
			return this.getRuleContext(i, WsContext);
		}
	}
	public DIGIT(): TerminalNode[];
	public DIGIT(i: number): TerminalNode;
	public DIGIT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SmalltalkParser.DIGIT);
		} else {
			return this.getToken(SmalltalkParser.DIGIT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmalltalkParser.RULE_primitive; }
	// @Override
	public enterRule(listener: SmalltalkListener): void {
		if (listener.enterPrimitive) {
			listener.enterPrimitive(this);
		}
	}
	// @Override
	public exitRule(listener: SmalltalkListener): void {
		if (listener.exitPrimitive) {
			listener.exitPrimitive(this);
		}
	}
}


export class BareSymbolContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(SmalltalkParser.IDENTIFIER, 0); }
	public BINARY_SELECTOR(): TerminalNode | undefined { return this.tryGetToken(SmalltalkParser.BINARY_SELECTOR, 0); }
	public KEYWORD(): TerminalNode[];
	public KEYWORD(i: number): TerminalNode;
	public KEYWORD(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SmalltalkParser.KEYWORD);
		} else {
			return this.getToken(SmalltalkParser.KEYWORD, i);
		}
	}
	public string(): StringContext | undefined {
		return this.tryGetRuleContext(0, StringContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmalltalkParser.RULE_bareSymbol; }
	// @Override
	public enterRule(listener: SmalltalkListener): void {
		if (listener.enterBareSymbol) {
			listener.enterBareSymbol(this);
		}
	}
	// @Override
	public exitRule(listener: SmalltalkListener): void {
		if (listener.exitBareSymbol) {
			listener.exitBareSymbol(this);
		}
	}
}


export class LiteralArrayContext extends ParserRuleContext {
	public LITARR_START(): TerminalNode { return this.getToken(SmalltalkParser.LITARR_START, 0); }
	public literalArrayRest(): LiteralArrayRestContext {
		return this.getRuleContext(0, LiteralArrayRestContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmalltalkParser.RULE_literalArray; }
	// @Override
	public enterRule(listener: SmalltalkListener): void {
		if (listener.enterLiteralArray) {
			listener.enterLiteralArray(this);
		}
	}
	// @Override
	public exitRule(listener: SmalltalkListener): void {
		if (listener.exitLiteralArray) {
			listener.exitLiteralArray(this);
		}
	}
}


export class LiteralArrayRestContext extends ParserRuleContext {
	public CLOSE_PAREN(): TerminalNode { return this.getToken(SmalltalkParser.CLOSE_PAREN, 0); }
	public ws(): WsContext[];
	public ws(i: number): WsContext;
	public ws(i?: number): WsContext | WsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WsContext);
		} else {
			return this.getRuleContext(i, WsContext);
		}
	}
	public parsetimeLiteral(): ParsetimeLiteralContext[];
	public parsetimeLiteral(i: number): ParsetimeLiteralContext;
	public parsetimeLiteral(i?: number): ParsetimeLiteralContext | ParsetimeLiteralContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParsetimeLiteralContext);
		} else {
			return this.getRuleContext(i, ParsetimeLiteralContext);
		}
	}
	public bareLiteralArray(): BareLiteralArrayContext[];
	public bareLiteralArray(i: number): BareLiteralArrayContext;
	public bareLiteralArray(i?: number): BareLiteralArrayContext | BareLiteralArrayContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BareLiteralArrayContext);
		} else {
			return this.getRuleContext(i, BareLiteralArrayContext);
		}
	}
	public bareSymbol(): BareSymbolContext[];
	public bareSymbol(i: number): BareSymbolContext;
	public bareSymbol(i?: number): BareSymbolContext | BareSymbolContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BareSymbolContext);
		} else {
			return this.getRuleContext(i, BareSymbolContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmalltalkParser.RULE_literalArrayRest; }
	// @Override
	public enterRule(listener: SmalltalkListener): void {
		if (listener.enterLiteralArrayRest) {
			listener.enterLiteralArrayRest(this);
		}
	}
	// @Override
	public exitRule(listener: SmalltalkListener): void {
		if (listener.exitLiteralArrayRest) {
			listener.exitLiteralArrayRest(this);
		}
	}
}


export class BareLiteralArrayContext extends ParserRuleContext {
	public OPEN_PAREN(): TerminalNode { return this.getToken(SmalltalkParser.OPEN_PAREN, 0); }
	public literalArrayRest(): LiteralArrayRestContext {
		return this.getRuleContext(0, LiteralArrayRestContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmalltalkParser.RULE_bareLiteralArray; }
	// @Override
	public enterRule(listener: SmalltalkListener): void {
		if (listener.enterBareLiteralArray) {
			listener.enterBareLiteralArray(this);
		}
	}
	// @Override
	public exitRule(listener: SmalltalkListener): void {
		if (listener.exitBareLiteralArray) {
			listener.exitBareLiteralArray(this);
		}
	}
}


export class UnaryTailContext extends ParserRuleContext {
	public unaryMessage(): UnaryMessageContext {
		return this.getRuleContext(0, UnaryMessageContext);
	}
	public ws(): WsContext[];
	public ws(i: number): WsContext;
	public ws(i?: number): WsContext | WsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WsContext);
		} else {
			return this.getRuleContext(i, WsContext);
		}
	}
	public unaryTail(): UnaryTailContext | undefined {
		return this.tryGetRuleContext(0, UnaryTailContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmalltalkParser.RULE_unaryTail; }
	// @Override
	public enterRule(listener: SmalltalkListener): void {
		if (listener.enterUnaryTail) {
			listener.enterUnaryTail(this);
		}
	}
	// @Override
	public exitRule(listener: SmalltalkListener): void {
		if (listener.exitUnaryTail) {
			listener.exitUnaryTail(this);
		}
	}
}


export class UnaryMessageContext extends ParserRuleContext {
	public unarySelector(): UnarySelectorContext {
		return this.getRuleContext(0, UnarySelectorContext);
	}
	public ws(): WsContext | undefined {
		return this.tryGetRuleContext(0, WsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmalltalkParser.RULE_unaryMessage; }
	// @Override
	public enterRule(listener: SmalltalkListener): void {
		if (listener.enterUnaryMessage) {
			listener.enterUnaryMessage(this);
		}
	}
	// @Override
	public exitRule(listener: SmalltalkListener): void {
		if (listener.exitUnaryMessage) {
			listener.exitUnaryMessage(this);
		}
	}
}


export class UnarySelectorContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(SmalltalkParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmalltalkParser.RULE_unarySelector; }
	// @Override
	public enterRule(listener: SmalltalkListener): void {
		if (listener.enterUnarySelector) {
			listener.enterUnarySelector(this);
		}
	}
	// @Override
	public exitRule(listener: SmalltalkListener): void {
		if (listener.exitUnarySelector) {
			listener.exitUnarySelector(this);
		}
	}
}


export class KeywordsContext extends ParserRuleContext {
	public KEYWORD(): TerminalNode[];
	public KEYWORD(i: number): TerminalNode;
	public KEYWORD(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SmalltalkParser.KEYWORD);
		} else {
			return this.getToken(SmalltalkParser.KEYWORD, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmalltalkParser.RULE_keywords; }
	// @Override
	public enterRule(listener: SmalltalkListener): void {
		if (listener.enterKeywords) {
			listener.enterKeywords(this);
		}
	}
	// @Override
	public exitRule(listener: SmalltalkListener): void {
		if (listener.exitKeywords) {
			listener.exitKeywords(this);
		}
	}
}


export class ReferenceContext extends ParserRuleContext {
	public variable(): VariableContext {
		return this.getRuleContext(0, VariableContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmalltalkParser.RULE_reference; }
	// @Override
	public enterRule(listener: SmalltalkListener): void {
		if (listener.enterReference) {
			listener.enterReference(this);
		}
	}
	// @Override
	public exitRule(listener: SmalltalkListener): void {
		if (listener.exitReference) {
			listener.exitReference(this);
		}
	}
}


export class BinaryTailContext extends ParserRuleContext {
	public binaryMessage(): BinaryMessageContext {
		return this.getRuleContext(0, BinaryMessageContext);
	}
	public binaryTail(): BinaryTailContext | undefined {
		return this.tryGetRuleContext(0, BinaryTailContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmalltalkParser.RULE_binaryTail; }
	// @Override
	public enterRule(listener: SmalltalkListener): void {
		if (listener.enterBinaryTail) {
			listener.enterBinaryTail(this);
		}
	}
	// @Override
	public exitRule(listener: SmalltalkListener): void {
		if (listener.exitBinaryTail) {
			listener.exitBinaryTail(this);
		}
	}
}


export class BinaryMessageContext extends ParserRuleContext {
	public BINARY_SELECTOR(): TerminalNode { return this.getToken(SmalltalkParser.BINARY_SELECTOR, 0); }
	public unarySend(): UnarySendContext | undefined {
		return this.tryGetRuleContext(0, UnarySendContext);
	}
	public operand(): OperandContext | undefined {
		return this.tryGetRuleContext(0, OperandContext);
	}
	public ws(): WsContext[];
	public ws(i: number): WsContext;
	public ws(i?: number): WsContext | WsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WsContext);
		} else {
			return this.getRuleContext(i, WsContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SmalltalkParser.RULE_binaryMessage; }
	// @Override
	public enterRule(listener: SmalltalkListener): void {
		if (listener.enterBinaryMessage) {
			listener.enterBinaryMessage(this);
		}
	}
	// @Override
	public exitRule(listener: SmalltalkListener): void {
		if (listener.exitBinaryMessage) {
			listener.exitBinaryMessage(this);
		}
	}
}


