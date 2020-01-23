// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/javadoc/JavadocParser.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { JavadocParserListener } from "./JavadocParserListener";
import { JavadocParserVisitor } from "./JavadocParserVisitor";


export class JavadocParser extends Parser {
	public static readonly NAME = 1;
	public static readonly NEWLINE = 2;
	public static readonly SPACE = 3;
	public static readonly TEXT_CONTENT = 4;
	public static readonly AT = 5;
	public static readonly STAR = 6;
	public static readonly SLASH = 7;
	public static readonly JAVADOC_START = 8;
	public static readonly JAVADOC_END = 9;
	public static readonly INLINE_TAG_START = 10;
	public static readonly BRACE_OPEN = 11;
	public static readonly BRACE_CLOSE = 12;
	public static readonly RULE_documentation = 0;
	public static readonly RULE_documentationContent = 1;
	public static readonly RULE_skipWhitespace = 2;
	public static readonly RULE_description = 3;
	public static readonly RULE_descriptionLine = 4;
	public static readonly RULE_descriptionLineStart = 5;
	public static readonly RULE_descriptionLineNoSpaceNoAt = 6;
	public static readonly RULE_descriptionLineElement = 7;
	public static readonly RULE_descriptionLineText = 8;
	public static readonly RULE_descriptionNewline = 9;
	public static readonly RULE_tagSection = 10;
	public static readonly RULE_blockTag = 11;
	public static readonly RULE_blockTagName = 12;
	public static readonly RULE_blockTagContent = 13;
	public static readonly RULE_blockTagText = 14;
	public static readonly RULE_blockTagTextElement = 15;
	public static readonly RULE_inlineTag = 16;
	public static readonly RULE_inlineTagName = 17;
	public static readonly RULE_inlineTagContent = 18;
	public static readonly RULE_braceExpression = 19;
	public static readonly RULE_braceContent = 20;
	public static readonly RULE_braceText = 21;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"documentation", "documentationContent", "skipWhitespace", "description", 
		"descriptionLine", "descriptionLineStart", "descriptionLineNoSpaceNoAt", 
		"descriptionLineElement", "descriptionLineText", "descriptionNewline", 
		"tagSection", "blockTag", "blockTagName", "blockTagContent", "blockTagText", 
		"blockTagTextElement", "inlineTag", "inlineTagName", "inlineTagContent", 
		"braceExpression", "braceContent", "braceText",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, "'@'", "'*'", "'/'", 
		undefined, undefined, "'{@'", "'{'", "'}'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "NAME", "NEWLINE", "SPACE", "TEXT_CONTENT", "AT", "STAR", "SLASH", 
		"JAVADOC_START", "JAVADOC_END", "INLINE_TAG_START", "BRACE_OPEN", "BRACE_CLOSE",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(JavadocParser._LITERAL_NAMES, JavadocParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return JavadocParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "JavadocParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return JavadocParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return JavadocParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(JavadocParser._ATN, this);
	}
	// @RuleVersion(0)
	public documentation(): DocumentationContext {
		let _localctx: DocumentationContext = new DocumentationContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, JavadocParser.RULE_documentation);
		try {
			let _alt: number;
			this.state = 65;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavadocParser.EOF:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 44;
				this.match(JavadocParser.EOF);
				}
				break;
			case JavadocParser.JAVADOC_START:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 45;
				this.match(JavadocParser.JAVADOC_START);
				this.state = 49;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 46;
						this.skipWhitespace();
						}
						}
					}
					this.state = 51;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
				}
				this.state = 52;
				this.documentationContent();
				this.state = 53;
				this.match(JavadocParser.JAVADOC_END);
				this.state = 54;
				this.match(JavadocParser.EOF);
				}
				break;
			case JavadocParser.NAME:
			case JavadocParser.NEWLINE:
			case JavadocParser.SPACE:
			case JavadocParser.TEXT_CONTENT:
			case JavadocParser.AT:
			case JavadocParser.STAR:
			case JavadocParser.SLASH:
			case JavadocParser.INLINE_TAG_START:
			case JavadocParser.BRACE_OPEN:
			case JavadocParser.BRACE_CLOSE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 59;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 56;
						this.skipWhitespace();
						}
						}
					}
					this.state = 61;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
				}
				this.state = 62;
				this.documentationContent();
				this.state = 63;
				this.match(JavadocParser.EOF);
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
	public documentationContent(): DocumentationContentContext {
		let _localctx: DocumentationContentContext = new DocumentationContentContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, JavadocParser.RULE_documentationContent);
		let _la: number;
		try {
			let _alt: number;
			this.state = 95;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 67;
				this.description();
				this.state = 71;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === JavadocParser.NEWLINE || _la === JavadocParser.SPACE) {
					{
					{
					this.state = 68;
					this.skipWhitespace();
					}
					}
					this.state = 73;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 77;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 74;
						this.skipWhitespace();
						}
						}
					}
					this.state = 79;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
				}
				this.state = 80;
				this.tagSection();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 81;
				this.description();
				this.state = 83;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 82;
						this.match(JavadocParser.NEWLINE);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 85;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				this.state = 90;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 87;
						this.skipWhitespace();
						}
						}
					}
					this.state = 92;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
				}
				this.state = 93;
				this.tagSection();
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
	public skipWhitespace(): SkipWhitespaceContext {
		let _localctx: SkipWhitespaceContext = new SkipWhitespaceContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, JavadocParser.RULE_skipWhitespace);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 97;
			_la = this._input.LA(1);
			if (!(_la === JavadocParser.NEWLINE || _la === JavadocParser.SPACE)) {
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
	public description(): DescriptionContext {
		let _localctx: DescriptionContext = new DescriptionContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, JavadocParser.RULE_description);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 99;
			this.descriptionLine();
			this.state = 109;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 101;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 100;
						this.descriptionNewline();
						}
						}
						this.state = 103;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la === JavadocParser.NEWLINE);
					this.state = 105;
					this.descriptionLine();
					}
					}
				}
				this.state = 111;
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
	public descriptionLine(): DescriptionLineContext {
		let _localctx: DescriptionLineContext = new DescriptionLineContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, JavadocParser.RULE_descriptionLine);
		try {
			let _alt: number;
			this.state = 126;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavadocParser.NAME:
			case JavadocParser.SPACE:
			case JavadocParser.TEXT_CONTENT:
			case JavadocParser.STAR:
			case JavadocParser.SLASH:
			case JavadocParser.BRACE_OPEN:
			case JavadocParser.BRACE_CLOSE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 112;
				this.descriptionLineStart();
				this.state = 116;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 113;
						this.descriptionLineElement();
						}
						}
					}
					this.state = 118;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
				}
				}
				break;
			case JavadocParser.INLINE_TAG_START:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 119;
				this.inlineTag();
				this.state = 123;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 120;
						this.descriptionLineElement();
						}
						}
					}
					this.state = 125;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
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
	public descriptionLineStart(): DescriptionLineStartContext {
		let _localctx: DescriptionLineStartContext = new DescriptionLineStartContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, JavadocParser.RULE_descriptionLineStart);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 129;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavadocParser.SPACE) {
				{
				this.state = 128;
				this.match(JavadocParser.SPACE);
				}
			}

			this.state = 132;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 131;
					this.descriptionLineNoSpaceNoAt();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 134;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 141;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 139;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case JavadocParser.NAME:
					case JavadocParser.TEXT_CONTENT:
					case JavadocParser.STAR:
					case JavadocParser.SLASH:
					case JavadocParser.BRACE_OPEN:
					case JavadocParser.BRACE_CLOSE:
						{
						this.state = 136;
						this.descriptionLineNoSpaceNoAt();
						}
						break;
					case JavadocParser.SPACE:
						{
						this.state = 137;
						this.match(JavadocParser.SPACE);
						}
						break;
					case JavadocParser.AT:
						{
						this.state = 138;
						this.match(JavadocParser.AT);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
				}
				this.state = 143;
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
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public descriptionLineNoSpaceNoAt(): DescriptionLineNoSpaceNoAtContext {
		let _localctx: DescriptionLineNoSpaceNoAtContext = new DescriptionLineNoSpaceNoAtContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, JavadocParser.RULE_descriptionLineNoSpaceNoAt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 144;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavadocParser.NAME) | (1 << JavadocParser.TEXT_CONTENT) | (1 << JavadocParser.STAR) | (1 << JavadocParser.SLASH) | (1 << JavadocParser.BRACE_OPEN) | (1 << JavadocParser.BRACE_CLOSE))) !== 0))) {
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
	public descriptionLineElement(): DescriptionLineElementContext {
		let _localctx: DescriptionLineElementContext = new DescriptionLineElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, JavadocParser.RULE_descriptionLineElement);
		try {
			this.state = 148;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavadocParser.INLINE_TAG_START:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 146;
				this.inlineTag();
				}
				break;
			case JavadocParser.NAME:
			case JavadocParser.SPACE:
			case JavadocParser.TEXT_CONTENT:
			case JavadocParser.AT:
			case JavadocParser.STAR:
			case JavadocParser.SLASH:
			case JavadocParser.BRACE_OPEN:
			case JavadocParser.BRACE_CLOSE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 147;
				this.descriptionLineText();
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
	public descriptionLineText(): DescriptionLineTextContext {
		let _localctx: DescriptionLineTextContext = new DescriptionLineTextContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, JavadocParser.RULE_descriptionLineText);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 153;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					this.state = 153;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case JavadocParser.NAME:
					case JavadocParser.TEXT_CONTENT:
					case JavadocParser.STAR:
					case JavadocParser.SLASH:
					case JavadocParser.BRACE_OPEN:
					case JavadocParser.BRACE_CLOSE:
						{
						this.state = 150;
						this.descriptionLineNoSpaceNoAt();
						}
						break;
					case JavadocParser.SPACE:
						{
						this.state = 151;
						this.match(JavadocParser.SPACE);
						}
						break;
					case JavadocParser.AT:
						{
						this.state = 152;
						this.match(JavadocParser.AT);
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
				this.state = 155;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
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
	public descriptionNewline(): DescriptionNewlineContext {
		let _localctx: DescriptionNewlineContext = new DescriptionNewlineContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, JavadocParser.RULE_descriptionNewline);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 157;
			this.match(JavadocParser.NEWLINE);
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
	public tagSection(): TagSectionContext {
		let _localctx: TagSectionContext = new TagSectionContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, JavadocParser.RULE_tagSection);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 160;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 159;
				this.blockTag();
				}
				}
				this.state = 162;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === JavadocParser.SPACE || _la === JavadocParser.AT);
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
	public blockTag(): BlockTagContext {
		let _localctx: BlockTagContext = new BlockTagContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, JavadocParser.RULE_blockTag);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 165;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === JavadocParser.SPACE) {
				{
				this.state = 164;
				this.match(JavadocParser.SPACE);
				}
			}

			this.state = 167;
			this.match(JavadocParser.AT);
			this.state = 168;
			this.blockTagName();
			this.state = 170;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
			case 1:
				{
				this.state = 169;
				this.match(JavadocParser.SPACE);
				}
				break;
			}
			this.state = 175;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 172;
					this.blockTagContent();
					}
					}
				}
				this.state = 177;
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
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public blockTagName(): BlockTagNameContext {
		let _localctx: BlockTagNameContext = new BlockTagNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, JavadocParser.RULE_blockTagName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 178;
			this.match(JavadocParser.NAME);
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
	public blockTagContent(): BlockTagContentContext {
		let _localctx: BlockTagContentContext = new BlockTagContentContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, JavadocParser.RULE_blockTagContent);
		try {
			this.state = 183;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavadocParser.NAME:
			case JavadocParser.SPACE:
			case JavadocParser.TEXT_CONTENT:
			case JavadocParser.STAR:
			case JavadocParser.SLASH:
			case JavadocParser.BRACE_OPEN:
			case JavadocParser.BRACE_CLOSE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 180;
				this.blockTagText();
				}
				break;
			case JavadocParser.INLINE_TAG_START:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 181;
				this.inlineTag();
				}
				break;
			case JavadocParser.NEWLINE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 182;
				this.match(JavadocParser.NEWLINE);
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
	public blockTagText(): BlockTagTextContext {
		let _localctx: BlockTagTextContext = new BlockTagTextContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, JavadocParser.RULE_blockTagText);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 186;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 185;
					this.blockTagTextElement();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 188;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
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
	public blockTagTextElement(): BlockTagTextElementContext {
		let _localctx: BlockTagTextElementContext = new BlockTagTextElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, JavadocParser.RULE_blockTagTextElement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 190;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavadocParser.NAME) | (1 << JavadocParser.SPACE) | (1 << JavadocParser.TEXT_CONTENT) | (1 << JavadocParser.STAR) | (1 << JavadocParser.SLASH) | (1 << JavadocParser.BRACE_OPEN) | (1 << JavadocParser.BRACE_CLOSE))) !== 0))) {
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
	public inlineTag(): InlineTagContext {
		let _localctx: InlineTagContext = new InlineTagContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, JavadocParser.RULE_inlineTag);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 192;
			this.match(JavadocParser.INLINE_TAG_START);
			this.state = 193;
			this.inlineTagName();
			this.state = 197;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 194;
					this.match(JavadocParser.SPACE);
					}
					}
				}
				this.state = 199;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
			}
			this.state = 201;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavadocParser.NAME) | (1 << JavadocParser.NEWLINE) | (1 << JavadocParser.SPACE) | (1 << JavadocParser.TEXT_CONTENT) | (1 << JavadocParser.STAR) | (1 << JavadocParser.SLASH) | (1 << JavadocParser.BRACE_OPEN))) !== 0)) {
				{
				this.state = 200;
				this.inlineTagContent();
				}
			}

			this.state = 203;
			this.match(JavadocParser.BRACE_CLOSE);
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
	public inlineTagName(): InlineTagNameContext {
		let _localctx: InlineTagNameContext = new InlineTagNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, JavadocParser.RULE_inlineTagName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 205;
			this.match(JavadocParser.NAME);
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
	public inlineTagContent(): InlineTagContentContext {
		let _localctx: InlineTagContentContext = new InlineTagContentContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, JavadocParser.RULE_inlineTagContent);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 208;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 207;
				this.braceContent();
				}
				}
				this.state = 210;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavadocParser.NAME) | (1 << JavadocParser.NEWLINE) | (1 << JavadocParser.SPACE) | (1 << JavadocParser.TEXT_CONTENT) | (1 << JavadocParser.STAR) | (1 << JavadocParser.SLASH) | (1 << JavadocParser.BRACE_OPEN))) !== 0));
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
	public braceExpression(): BraceExpressionContext {
		let _localctx: BraceExpressionContext = new BraceExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, JavadocParser.RULE_braceExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 212;
			this.match(JavadocParser.BRACE_OPEN);
			this.state = 216;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavadocParser.NAME) | (1 << JavadocParser.NEWLINE) | (1 << JavadocParser.SPACE) | (1 << JavadocParser.TEXT_CONTENT) | (1 << JavadocParser.STAR) | (1 << JavadocParser.SLASH) | (1 << JavadocParser.BRACE_OPEN))) !== 0)) {
				{
				{
				this.state = 213;
				this.braceContent();
				}
				}
				this.state = 218;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 219;
			this.match(JavadocParser.BRACE_CLOSE);
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
	public braceContent(): BraceContentContext {
		let _localctx: BraceContentContext = new BraceContentContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, JavadocParser.RULE_braceContent);
		try {
			let _alt: number;
			this.state = 235;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case JavadocParser.BRACE_OPEN:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 221;
				this.braceExpression();
				}
				break;
			case JavadocParser.NAME:
			case JavadocParser.NEWLINE:
			case JavadocParser.SPACE:
			case JavadocParser.TEXT_CONTENT:
			case JavadocParser.STAR:
			case JavadocParser.SLASH:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 222;
				this.braceText();
				this.state = 232;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 226;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
						while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
							if (_alt === 1) {
								{
								{
								this.state = 223;
								this.match(JavadocParser.NEWLINE);
								}
								}
							}
							this.state = 228;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
						}
						this.state = 229;
						this.braceText();
						}
						}
					}
					this.state = 234;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
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
	public braceText(): BraceTextContext {
		let _localctx: BraceTextContext = new BraceTextContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, JavadocParser.RULE_braceText);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 237;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << JavadocParser.NAME) | (1 << JavadocParser.NEWLINE) | (1 << JavadocParser.SPACE) | (1 << JavadocParser.TEXT_CONTENT) | (1 << JavadocParser.STAR) | (1 << JavadocParser.SLASH))) !== 0))) {
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x0E\xF2\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x03" +
		"\x02\x03\x02\x03\x02\x07\x022\n\x02\f\x02\x0E\x025\v\x02\x03\x02\x03\x02" +
		"\x03\x02\x03\x02\x03\x02\x07\x02<\n\x02\f\x02\x0E\x02?\v\x02\x03\x02\x03" +
		"\x02\x03\x02\x05\x02D\n\x02\x03\x03\x03\x03\x07\x03H\n\x03\f\x03\x0E\x03" +
		"K\v\x03\x03\x03\x07\x03N\n\x03\f\x03\x0E\x03Q\v\x03\x03\x03\x03\x03\x03" +
		"\x03\x06\x03V\n\x03\r\x03\x0E\x03W\x03\x03\x07\x03[\n\x03\f\x03\x0E\x03" +
		"^\v\x03\x03\x03\x03\x03\x05\x03b\n\x03\x03\x04\x03\x04\x03\x05\x03\x05" +
		"\x06\x05h\n\x05\r\x05\x0E\x05i\x03\x05\x03\x05\x07\x05n\n\x05\f\x05\x0E" +
		"\x05q\v\x05\x03\x06\x03\x06\x07\x06u\n\x06\f\x06\x0E\x06x\v\x06\x03\x06" +
		"\x03\x06\x07\x06|\n\x06\f\x06\x0E\x06\x7F\v\x06\x05\x06\x81\n\x06\x03" +
		"\x07\x05\x07\x84\n\x07\x03\x07\x06\x07\x87\n\x07\r\x07\x0E\x07\x88\x03" +
		"\x07\x03\x07\x03\x07\x07\x07\x8E\n\x07\f\x07\x0E\x07\x91\v\x07\x03\b\x03" +
		"\b\x03\t\x03\t\x05\t\x97\n\t\x03\n\x03\n\x03\n\x06\n\x9C\n\n\r\n\x0E\n" +
		"\x9D\x03\v\x03\v\x03\f\x06\f\xA3\n\f\r\f\x0E\f\xA4\x03\r\x05\r\xA8\n\r" +
		"\x03\r\x03\r\x03\r\x05\r\xAD\n\r\x03\r\x07\r\xB0\n\r\f\r\x0E\r\xB3\v\r" +
		"\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x05\x0F\xBA\n\x0F\x03\x10\x06" +
		"\x10\xBD\n\x10\r\x10\x0E\x10\xBE\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12" +
		"\x07\x12\xC6\n\x12\f\x12\x0E\x12\xC9\v\x12\x03\x12\x05\x12\xCC\n\x12\x03" +
		"\x12\x03\x12\x03\x13\x03\x13\x03\x14\x06\x14\xD3\n\x14\r\x14\x0E\x14\xD4" +
		"\x03\x15\x03\x15\x07\x15\xD9\n\x15\f\x15\x0E\x15\xDC\v\x15\x03\x15\x03" +
		"\x15\x03\x16\x03\x16\x03\x16\x07\x16\xE3\n\x16\f\x16\x0E\x16\xE6\v\x16" +
		"\x03\x16\x07\x16\xE9\n\x16\f\x16\x0E\x16\xEC\v\x16\x05\x16\xEE\n\x16\x03" +
		"\x17\x03\x17\x03\x17\x02\x02\x02\x18\x02\x02\x04\x02\x06\x02\b\x02\n\x02" +
		"\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02" +
		"\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02\x02\x06\x03\x02\x04\x05\x06" +
		"\x02\x03\x03\x06\x06\b\t\r\x0E\x06\x02\x03\x03\x05\x06\b\t\r\x0E\x04\x02" +
		"\x03\x06\b\t\x02\u0101\x02C\x03\x02\x02\x02\x04a\x03\x02\x02\x02\x06c" +
		"\x03\x02\x02\x02\be\x03\x02\x02\x02\n\x80\x03\x02\x02\x02\f\x83\x03\x02" +
		"\x02\x02\x0E\x92\x03\x02\x02\x02\x10\x96\x03\x02\x02\x02\x12\x9B\x03\x02" +
		"\x02\x02\x14\x9F\x03\x02\x02\x02\x16\xA2\x03\x02\x02\x02\x18\xA7\x03\x02" +
		"\x02\x02\x1A\xB4\x03\x02\x02\x02\x1C\xB9\x03\x02\x02\x02\x1E\xBC\x03\x02" +
		"\x02\x02 \xC0\x03\x02\x02\x02\"\xC2\x03\x02\x02\x02$\xCF\x03\x02\x02\x02" +
		"&\xD2\x03\x02\x02\x02(\xD6\x03\x02\x02\x02*\xED\x03\x02\x02\x02,\xEF\x03" +
		"\x02\x02\x02.D\x07\x02\x02\x03/3\x07\n\x02\x0202\x05\x06\x04\x0210\x03" +
		"\x02\x02\x0225\x03\x02\x02\x0231\x03\x02\x02\x0234\x03\x02\x02\x0246\x03" +
		"\x02\x02\x0253\x03\x02\x02\x0267\x05\x04\x03\x0278\x07\v\x02\x0289\x07" +
		"\x02\x02\x039D\x03\x02\x02\x02:<\x05\x06\x04\x02;:\x03\x02\x02\x02<?\x03" +
		"\x02\x02\x02=;\x03\x02\x02\x02=>\x03\x02\x02\x02>@\x03\x02\x02\x02?=\x03" +
		"\x02\x02\x02@A\x05\x04\x03\x02AB\x07\x02\x02\x03BD\x03\x02\x02\x02C.\x03" +
		"\x02\x02\x02C/\x03\x02\x02\x02C=\x03\x02\x02\x02D\x03\x03\x02\x02\x02" +
		"EI\x05\b\x05\x02FH\x05\x06\x04\x02GF\x03\x02\x02\x02HK\x03\x02\x02\x02" +
		"IG\x03\x02\x02\x02IJ\x03\x02\x02\x02Jb\x03\x02\x02\x02KI\x03\x02\x02\x02" +
		"LN\x05\x06\x04\x02ML\x03\x02\x02\x02NQ\x03\x02\x02\x02OM\x03\x02\x02\x02" +
		"OP\x03\x02\x02\x02PR\x03\x02\x02\x02QO\x03\x02\x02\x02Rb\x05\x16\f\x02" +
		"SU\x05\b\x05\x02TV\x07\x04\x02\x02UT\x03\x02\x02\x02VW\x03\x02\x02\x02" +
		"WU\x03\x02\x02\x02WX\x03\x02\x02\x02X\\\x03\x02\x02\x02Y[\x05\x06\x04" +
		"\x02ZY\x03\x02\x02\x02[^\x03\x02\x02\x02\\Z\x03\x02\x02\x02\\]\x03\x02" +
		"\x02\x02]_\x03\x02\x02\x02^\\\x03\x02\x02\x02_`\x05\x16\f\x02`b\x03\x02" +
		"\x02\x02aE\x03\x02\x02\x02aO\x03\x02\x02\x02aS\x03\x02\x02\x02b\x05\x03" +
		"\x02\x02\x02cd\t\x02\x02\x02d\x07\x03\x02\x02\x02eo\x05\n\x06\x02fh\x05" +
		"\x14\v\x02gf\x03\x02\x02\x02hi\x03\x02\x02\x02ig\x03\x02\x02\x02ij\x03" +
		"\x02\x02\x02jk\x03\x02\x02\x02kl\x05\n\x06\x02ln\x03\x02\x02\x02mg\x03" +
		"\x02\x02\x02nq\x03\x02\x02\x02om\x03\x02\x02\x02op\x03\x02\x02\x02p\t" +
		"\x03\x02\x02\x02qo\x03\x02\x02\x02rv\x05\f\x07\x02su\x05\x10\t\x02ts\x03" +
		"\x02\x02\x02ux\x03\x02\x02\x02vt\x03\x02\x02\x02vw\x03\x02\x02\x02w\x81" +
		"\x03\x02\x02\x02xv\x03\x02\x02\x02y}\x05\"\x12\x02z|\x05\x10\t\x02{z\x03" +
		"\x02\x02\x02|\x7F\x03\x02\x02\x02}{\x03\x02\x02\x02}~\x03\x02\x02\x02" +
		"~\x81\x03\x02\x02\x02\x7F}\x03\x02\x02\x02\x80r\x03\x02\x02\x02\x80y\x03" +
		"\x02\x02\x02\x81\v\x03\x02\x02\x02\x82\x84\x07\x05\x02\x02\x83\x82\x03" +
		"\x02\x02\x02\x83\x84\x03\x02\x02\x02\x84\x86\x03\x02\x02\x02\x85\x87\x05" +
		"\x0E\b\x02\x86\x85\x03\x02\x02\x02\x87\x88\x03\x02\x02\x02\x88\x86\x03" +
		"\x02\x02\x02\x88\x89\x03\x02\x02\x02\x89\x8F\x03\x02\x02\x02\x8A\x8E\x05" +
		"\x0E\b\x02\x8B\x8E\x07\x05\x02\x02\x8C\x8E\x07\x07\x02\x02\x8D\x8A\x03" +
		"\x02\x02\x02\x8D\x8B\x03\x02\x02\x02\x8D\x8C\x03\x02\x02\x02\x8E\x91\x03" +
		"\x02\x02\x02\x8F\x8D\x03\x02\x02\x02\x8F\x90\x03\x02\x02\x02\x90\r\x03" +
		"\x02\x02\x02\x91\x8F\x03\x02\x02\x02\x92\x93\t\x03\x02\x02\x93\x0F\x03" +
		"\x02\x02\x02\x94\x97\x05\"\x12\x02\x95\x97\x05\x12\n\x02\x96\x94\x03\x02" +
		"\x02\x02\x96\x95\x03\x02\x02\x02\x97\x11\x03\x02\x02\x02\x98\x9C\x05\x0E" +
		"\b\x02\x99\x9C\x07\x05\x02\x02\x9A\x9C\x07\x07\x02\x02\x9B\x98\x03\x02" +
		"\x02\x02\x9B\x99\x03\x02\x02\x02\x9B\x9A\x03\x02\x02\x02\x9C\x9D\x03\x02" +
		"\x02\x02\x9D\x9B\x03\x02\x02\x02\x9D\x9E\x03\x02\x02\x02\x9E\x13\x03\x02" +
		"\x02\x02\x9F\xA0\x07\x04\x02\x02\xA0\x15\x03\x02\x02\x02\xA1\xA3\x05\x18" +
		"\r\x02\xA2\xA1\x03\x02\x02\x02\xA3\xA4\x03\x02\x02\x02\xA4\xA2\x03\x02" +
		"\x02\x02\xA4\xA5\x03\x02\x02\x02\xA5\x17\x03\x02\x02\x02\xA6\xA8\x07\x05" +
		"\x02\x02\xA7\xA6\x03\x02\x02\x02\xA7\xA8\x03\x02\x02\x02\xA8\xA9\x03\x02" +
		"\x02\x02\xA9\xAA\x07\x07\x02\x02\xAA\xAC\x05\x1A\x0E\x02\xAB\xAD\x07\x05" +
		"\x02\x02\xAC\xAB\x03\x02\x02\x02\xAC\xAD\x03\x02\x02\x02\xAD\xB1\x03\x02" +
		"\x02\x02\xAE\xB0\x05\x1C\x0F\x02\xAF\xAE\x03\x02\x02\x02\xB0\xB3\x03\x02" +
		"\x02\x02\xB1\xAF\x03\x02\x02\x02\xB1\xB2\x03\x02\x02\x02\xB2\x19\x03\x02" +
		"\x02\x02\xB3\xB1\x03\x02\x02\x02\xB4\xB5\x07\x03\x02\x02\xB5\x1B\x03\x02" +
		"\x02\x02\xB6\xBA\x05\x1E\x10\x02\xB7\xBA\x05\"\x12\x02\xB8\xBA\x07\x04" +
		"\x02\x02\xB9\xB6\x03\x02\x02\x02\xB9\xB7\x03\x02\x02\x02\xB9\xB8\x03\x02" +
		"\x02\x02\xBA\x1D\x03\x02\x02\x02\xBB\xBD\x05 \x11\x02\xBC\xBB\x03\x02" +
		"\x02\x02\xBD\xBE\x03\x02\x02\x02\xBE\xBC\x03\x02\x02\x02\xBE\xBF\x03\x02" +
		"\x02\x02\xBF\x1F\x03\x02\x02\x02\xC0\xC1\t\x04\x02\x02\xC1!\x03\x02\x02" +
		"\x02\xC2\xC3\x07\f\x02\x02\xC3\xC7\x05$\x13\x02\xC4\xC6\x07\x05\x02\x02" +
		"\xC5\xC4\x03\x02\x02\x02\xC6\xC9\x03\x02\x02\x02\xC7\xC5\x03\x02\x02\x02" +
		"\xC7\xC8\x03\x02\x02\x02\xC8\xCB\x03\x02\x02\x02\xC9\xC7\x03\x02\x02\x02" +
		"\xCA\xCC\x05&\x14\x02\xCB\xCA\x03\x02\x02\x02\xCB\xCC\x03\x02\x02\x02" +
		"\xCC\xCD\x03\x02\x02\x02\xCD\xCE\x07\x0E\x02\x02\xCE#\x03\x02\x02\x02" +
		"\xCF\xD0\x07\x03\x02\x02\xD0%\x03\x02\x02\x02\xD1\xD3\x05*\x16\x02\xD2" +
		"\xD1\x03\x02\x02\x02\xD3\xD4\x03\x02\x02\x02\xD4\xD2\x03\x02\x02\x02\xD4" +
		"\xD5\x03\x02\x02\x02\xD5\'\x03\x02\x02\x02\xD6\xDA\x07\r\x02\x02\xD7\xD9" +
		"\x05*\x16\x02\xD8\xD7\x03\x02\x02\x02\xD9\xDC\x03\x02\x02\x02\xDA\xD8" +
		"\x03\x02\x02\x02\xDA\xDB\x03\x02\x02\x02\xDB\xDD\x03\x02\x02\x02\xDC\xDA" +
		"\x03\x02\x02\x02\xDD\xDE\x07\x0E\x02\x02\xDE)\x03\x02\x02\x02\xDF\xEE" +
		"\x05(\x15\x02\xE0\xEA\x05,\x17\x02\xE1\xE3\x07\x04\x02\x02\xE2\xE1\x03" +
		"\x02\x02\x02\xE3\xE6\x03\x02\x02\x02\xE4\xE2\x03\x02\x02\x02\xE4\xE5\x03" +
		"\x02\x02\x02\xE5\xE7\x03\x02\x02\x02\xE6\xE4\x03\x02\x02\x02\xE7\xE9\x05" +
		",\x17\x02\xE8\xE4\x03\x02\x02\x02\xE9\xEC\x03\x02\x02\x02\xEA\xE8\x03" +
		"\x02\x02\x02\xEA\xEB\x03\x02\x02\x02\xEB\xEE\x03\x02\x02\x02\xEC\xEA\x03" +
		"\x02\x02\x02\xED\xDF\x03\x02\x02\x02\xED\xE0\x03\x02\x02\x02\xEE+\x03" +
		"\x02\x02\x02\xEF\xF0\t\x05\x02\x02\xF0-\x03\x02\x02\x02#3=CIOW\\aiov}" +
		"\x80\x83\x88\x8D\x8F\x96\x9B\x9D\xA4\xA7\xAC\xB1\xB9\xBE\xC7\xCB\xD4\xDA" +
		"\xE4\xEA\xED";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!JavadocParser.__ATN) {
			JavadocParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(JavadocParser._serializedATN));
		}

		return JavadocParser.__ATN;
	}

}

export class DocumentationContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(JavadocParser.EOF, 0); }
	public JAVADOC_START(): TerminalNode | undefined { return this.tryGetToken(JavadocParser.JAVADOC_START, 0); }
	public documentationContent(): DocumentationContentContext | undefined {
		return this.tryGetRuleContext(0, DocumentationContentContext);
	}
	public JAVADOC_END(): TerminalNode | undefined { return this.tryGetToken(JavadocParser.JAVADOC_END, 0); }
	public skipWhitespace(): SkipWhitespaceContext[];
	public skipWhitespace(i: number): SkipWhitespaceContext;
	public skipWhitespace(i?: number): SkipWhitespaceContext | SkipWhitespaceContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SkipWhitespaceContext);
		} else {
			return this.getRuleContext(i, SkipWhitespaceContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavadocParser.RULE_documentation; }
	// @Override
	public enterRule(listener: JavadocParserListener): void {
		if (listener.enterDocumentation) {
			listener.enterDocumentation(this);
		}
	}
	// @Override
	public exitRule(listener: JavadocParserListener): void {
		if (listener.exitDocumentation) {
			listener.exitDocumentation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavadocParserVisitor<Result>): Result {
		if (visitor.visitDocumentation) {
			return visitor.visitDocumentation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DocumentationContentContext extends ParserRuleContext {
	public description(): DescriptionContext | undefined {
		return this.tryGetRuleContext(0, DescriptionContext);
	}
	public skipWhitespace(): SkipWhitespaceContext[];
	public skipWhitespace(i: number): SkipWhitespaceContext;
	public skipWhitespace(i?: number): SkipWhitespaceContext | SkipWhitespaceContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SkipWhitespaceContext);
		} else {
			return this.getRuleContext(i, SkipWhitespaceContext);
		}
	}
	public tagSection(): TagSectionContext | undefined {
		return this.tryGetRuleContext(0, TagSectionContext);
	}
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavadocParser.NEWLINE);
		} else {
			return this.getToken(JavadocParser.NEWLINE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavadocParser.RULE_documentationContent; }
	// @Override
	public enterRule(listener: JavadocParserListener): void {
		if (listener.enterDocumentationContent) {
			listener.enterDocumentationContent(this);
		}
	}
	// @Override
	public exitRule(listener: JavadocParserListener): void {
		if (listener.exitDocumentationContent) {
			listener.exitDocumentationContent(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavadocParserVisitor<Result>): Result {
		if (visitor.visitDocumentationContent) {
			return visitor.visitDocumentationContent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SkipWhitespaceContext extends ParserRuleContext {
	public SPACE(): TerminalNode | undefined { return this.tryGetToken(JavadocParser.SPACE, 0); }
	public NEWLINE(): TerminalNode | undefined { return this.tryGetToken(JavadocParser.NEWLINE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavadocParser.RULE_skipWhitespace; }
	// @Override
	public enterRule(listener: JavadocParserListener): void {
		if (listener.enterSkipWhitespace) {
			listener.enterSkipWhitespace(this);
		}
	}
	// @Override
	public exitRule(listener: JavadocParserListener): void {
		if (listener.exitSkipWhitespace) {
			listener.exitSkipWhitespace(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavadocParserVisitor<Result>): Result {
		if (visitor.visitSkipWhitespace) {
			return visitor.visitSkipWhitespace(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DescriptionContext extends ParserRuleContext {
	public descriptionLine(): DescriptionLineContext[];
	public descriptionLine(i: number): DescriptionLineContext;
	public descriptionLine(i?: number): DescriptionLineContext | DescriptionLineContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DescriptionLineContext);
		} else {
			return this.getRuleContext(i, DescriptionLineContext);
		}
	}
	public descriptionNewline(): DescriptionNewlineContext[];
	public descriptionNewline(i: number): DescriptionNewlineContext;
	public descriptionNewline(i?: number): DescriptionNewlineContext | DescriptionNewlineContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DescriptionNewlineContext);
		} else {
			return this.getRuleContext(i, DescriptionNewlineContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavadocParser.RULE_description; }
	// @Override
	public enterRule(listener: JavadocParserListener): void {
		if (listener.enterDescription) {
			listener.enterDescription(this);
		}
	}
	// @Override
	public exitRule(listener: JavadocParserListener): void {
		if (listener.exitDescription) {
			listener.exitDescription(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavadocParserVisitor<Result>): Result {
		if (visitor.visitDescription) {
			return visitor.visitDescription(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DescriptionLineContext extends ParserRuleContext {
	public descriptionLineStart(): DescriptionLineStartContext | undefined {
		return this.tryGetRuleContext(0, DescriptionLineStartContext);
	}
	public descriptionLineElement(): DescriptionLineElementContext[];
	public descriptionLineElement(i: number): DescriptionLineElementContext;
	public descriptionLineElement(i?: number): DescriptionLineElementContext | DescriptionLineElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DescriptionLineElementContext);
		} else {
			return this.getRuleContext(i, DescriptionLineElementContext);
		}
	}
	public inlineTag(): InlineTagContext | undefined {
		return this.tryGetRuleContext(0, InlineTagContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavadocParser.RULE_descriptionLine; }
	// @Override
	public enterRule(listener: JavadocParserListener): void {
		if (listener.enterDescriptionLine) {
			listener.enterDescriptionLine(this);
		}
	}
	// @Override
	public exitRule(listener: JavadocParserListener): void {
		if (listener.exitDescriptionLine) {
			listener.exitDescriptionLine(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavadocParserVisitor<Result>): Result {
		if (visitor.visitDescriptionLine) {
			return visitor.visitDescriptionLine(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DescriptionLineStartContext extends ParserRuleContext {
	public SPACE(): TerminalNode[];
	public SPACE(i: number): TerminalNode;
	public SPACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavadocParser.SPACE);
		} else {
			return this.getToken(JavadocParser.SPACE, i);
		}
	}
	public descriptionLineNoSpaceNoAt(): DescriptionLineNoSpaceNoAtContext[];
	public descriptionLineNoSpaceNoAt(i: number): DescriptionLineNoSpaceNoAtContext;
	public descriptionLineNoSpaceNoAt(i?: number): DescriptionLineNoSpaceNoAtContext | DescriptionLineNoSpaceNoAtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DescriptionLineNoSpaceNoAtContext);
		} else {
			return this.getRuleContext(i, DescriptionLineNoSpaceNoAtContext);
		}
	}
	public AT(): TerminalNode[];
	public AT(i: number): TerminalNode;
	public AT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavadocParser.AT);
		} else {
			return this.getToken(JavadocParser.AT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavadocParser.RULE_descriptionLineStart; }
	// @Override
	public enterRule(listener: JavadocParserListener): void {
		if (listener.enterDescriptionLineStart) {
			listener.enterDescriptionLineStart(this);
		}
	}
	// @Override
	public exitRule(listener: JavadocParserListener): void {
		if (listener.exitDescriptionLineStart) {
			listener.exitDescriptionLineStart(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavadocParserVisitor<Result>): Result {
		if (visitor.visitDescriptionLineStart) {
			return visitor.visitDescriptionLineStart(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DescriptionLineNoSpaceNoAtContext extends ParserRuleContext {
	public TEXT_CONTENT(): TerminalNode | undefined { return this.tryGetToken(JavadocParser.TEXT_CONTENT, 0); }
	public NAME(): TerminalNode | undefined { return this.tryGetToken(JavadocParser.NAME, 0); }
	public STAR(): TerminalNode | undefined { return this.tryGetToken(JavadocParser.STAR, 0); }
	public SLASH(): TerminalNode | undefined { return this.tryGetToken(JavadocParser.SLASH, 0); }
	public BRACE_OPEN(): TerminalNode | undefined { return this.tryGetToken(JavadocParser.BRACE_OPEN, 0); }
	public BRACE_CLOSE(): TerminalNode | undefined { return this.tryGetToken(JavadocParser.BRACE_CLOSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavadocParser.RULE_descriptionLineNoSpaceNoAt; }
	// @Override
	public enterRule(listener: JavadocParserListener): void {
		if (listener.enterDescriptionLineNoSpaceNoAt) {
			listener.enterDescriptionLineNoSpaceNoAt(this);
		}
	}
	// @Override
	public exitRule(listener: JavadocParserListener): void {
		if (listener.exitDescriptionLineNoSpaceNoAt) {
			listener.exitDescriptionLineNoSpaceNoAt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavadocParserVisitor<Result>): Result {
		if (visitor.visitDescriptionLineNoSpaceNoAt) {
			return visitor.visitDescriptionLineNoSpaceNoAt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DescriptionLineElementContext extends ParserRuleContext {
	public inlineTag(): InlineTagContext | undefined {
		return this.tryGetRuleContext(0, InlineTagContext);
	}
	public descriptionLineText(): DescriptionLineTextContext | undefined {
		return this.tryGetRuleContext(0, DescriptionLineTextContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavadocParser.RULE_descriptionLineElement; }
	// @Override
	public enterRule(listener: JavadocParserListener): void {
		if (listener.enterDescriptionLineElement) {
			listener.enterDescriptionLineElement(this);
		}
	}
	// @Override
	public exitRule(listener: JavadocParserListener): void {
		if (listener.exitDescriptionLineElement) {
			listener.exitDescriptionLineElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavadocParserVisitor<Result>): Result {
		if (visitor.visitDescriptionLineElement) {
			return visitor.visitDescriptionLineElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DescriptionLineTextContext extends ParserRuleContext {
	public descriptionLineNoSpaceNoAt(): DescriptionLineNoSpaceNoAtContext[];
	public descriptionLineNoSpaceNoAt(i: number): DescriptionLineNoSpaceNoAtContext;
	public descriptionLineNoSpaceNoAt(i?: number): DescriptionLineNoSpaceNoAtContext | DescriptionLineNoSpaceNoAtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DescriptionLineNoSpaceNoAtContext);
		} else {
			return this.getRuleContext(i, DescriptionLineNoSpaceNoAtContext);
		}
	}
	public SPACE(): TerminalNode[];
	public SPACE(i: number): TerminalNode;
	public SPACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavadocParser.SPACE);
		} else {
			return this.getToken(JavadocParser.SPACE, i);
		}
	}
	public AT(): TerminalNode[];
	public AT(i: number): TerminalNode;
	public AT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavadocParser.AT);
		} else {
			return this.getToken(JavadocParser.AT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavadocParser.RULE_descriptionLineText; }
	// @Override
	public enterRule(listener: JavadocParserListener): void {
		if (listener.enterDescriptionLineText) {
			listener.enterDescriptionLineText(this);
		}
	}
	// @Override
	public exitRule(listener: JavadocParserListener): void {
		if (listener.exitDescriptionLineText) {
			listener.exitDescriptionLineText(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavadocParserVisitor<Result>): Result {
		if (visitor.visitDescriptionLineText) {
			return visitor.visitDescriptionLineText(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DescriptionNewlineContext extends ParserRuleContext {
	public NEWLINE(): TerminalNode { return this.getToken(JavadocParser.NEWLINE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavadocParser.RULE_descriptionNewline; }
	// @Override
	public enterRule(listener: JavadocParserListener): void {
		if (listener.enterDescriptionNewline) {
			listener.enterDescriptionNewline(this);
		}
	}
	// @Override
	public exitRule(listener: JavadocParserListener): void {
		if (listener.exitDescriptionNewline) {
			listener.exitDescriptionNewline(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavadocParserVisitor<Result>): Result {
		if (visitor.visitDescriptionNewline) {
			return visitor.visitDescriptionNewline(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TagSectionContext extends ParserRuleContext {
	public blockTag(): BlockTagContext[];
	public blockTag(i: number): BlockTagContext;
	public blockTag(i?: number): BlockTagContext | BlockTagContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BlockTagContext);
		} else {
			return this.getRuleContext(i, BlockTagContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavadocParser.RULE_tagSection; }
	// @Override
	public enterRule(listener: JavadocParserListener): void {
		if (listener.enterTagSection) {
			listener.enterTagSection(this);
		}
	}
	// @Override
	public exitRule(listener: JavadocParserListener): void {
		if (listener.exitTagSection) {
			listener.exitTagSection(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavadocParserVisitor<Result>): Result {
		if (visitor.visitTagSection) {
			return visitor.visitTagSection(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockTagContext extends ParserRuleContext {
	public AT(): TerminalNode { return this.getToken(JavadocParser.AT, 0); }
	public blockTagName(): BlockTagNameContext {
		return this.getRuleContext(0, BlockTagNameContext);
	}
	public SPACE(): TerminalNode[];
	public SPACE(i: number): TerminalNode;
	public SPACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavadocParser.SPACE);
		} else {
			return this.getToken(JavadocParser.SPACE, i);
		}
	}
	public blockTagContent(): BlockTagContentContext[];
	public blockTagContent(i: number): BlockTagContentContext;
	public blockTagContent(i?: number): BlockTagContentContext | BlockTagContentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BlockTagContentContext);
		} else {
			return this.getRuleContext(i, BlockTagContentContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavadocParser.RULE_blockTag; }
	// @Override
	public enterRule(listener: JavadocParserListener): void {
		if (listener.enterBlockTag) {
			listener.enterBlockTag(this);
		}
	}
	// @Override
	public exitRule(listener: JavadocParserListener): void {
		if (listener.exitBlockTag) {
			listener.exitBlockTag(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavadocParserVisitor<Result>): Result {
		if (visitor.visitBlockTag) {
			return visitor.visitBlockTag(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockTagNameContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(JavadocParser.NAME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavadocParser.RULE_blockTagName; }
	// @Override
	public enterRule(listener: JavadocParserListener): void {
		if (listener.enterBlockTagName) {
			listener.enterBlockTagName(this);
		}
	}
	// @Override
	public exitRule(listener: JavadocParserListener): void {
		if (listener.exitBlockTagName) {
			listener.exitBlockTagName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavadocParserVisitor<Result>): Result {
		if (visitor.visitBlockTagName) {
			return visitor.visitBlockTagName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockTagContentContext extends ParserRuleContext {
	public blockTagText(): BlockTagTextContext | undefined {
		return this.tryGetRuleContext(0, BlockTagTextContext);
	}
	public inlineTag(): InlineTagContext | undefined {
		return this.tryGetRuleContext(0, InlineTagContext);
	}
	public NEWLINE(): TerminalNode | undefined { return this.tryGetToken(JavadocParser.NEWLINE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavadocParser.RULE_blockTagContent; }
	// @Override
	public enterRule(listener: JavadocParserListener): void {
		if (listener.enterBlockTagContent) {
			listener.enterBlockTagContent(this);
		}
	}
	// @Override
	public exitRule(listener: JavadocParserListener): void {
		if (listener.exitBlockTagContent) {
			listener.exitBlockTagContent(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavadocParserVisitor<Result>): Result {
		if (visitor.visitBlockTagContent) {
			return visitor.visitBlockTagContent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockTagTextContext extends ParserRuleContext {
	public blockTagTextElement(): BlockTagTextElementContext[];
	public blockTagTextElement(i: number): BlockTagTextElementContext;
	public blockTagTextElement(i?: number): BlockTagTextElementContext | BlockTagTextElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BlockTagTextElementContext);
		} else {
			return this.getRuleContext(i, BlockTagTextElementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavadocParser.RULE_blockTagText; }
	// @Override
	public enterRule(listener: JavadocParserListener): void {
		if (listener.enterBlockTagText) {
			listener.enterBlockTagText(this);
		}
	}
	// @Override
	public exitRule(listener: JavadocParserListener): void {
		if (listener.exitBlockTagText) {
			listener.exitBlockTagText(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavadocParserVisitor<Result>): Result {
		if (visitor.visitBlockTagText) {
			return visitor.visitBlockTagText(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockTagTextElementContext extends ParserRuleContext {
	public TEXT_CONTENT(): TerminalNode | undefined { return this.tryGetToken(JavadocParser.TEXT_CONTENT, 0); }
	public NAME(): TerminalNode | undefined { return this.tryGetToken(JavadocParser.NAME, 0); }
	public SPACE(): TerminalNode | undefined { return this.tryGetToken(JavadocParser.SPACE, 0); }
	public STAR(): TerminalNode | undefined { return this.tryGetToken(JavadocParser.STAR, 0); }
	public SLASH(): TerminalNode | undefined { return this.tryGetToken(JavadocParser.SLASH, 0); }
	public BRACE_OPEN(): TerminalNode | undefined { return this.tryGetToken(JavadocParser.BRACE_OPEN, 0); }
	public BRACE_CLOSE(): TerminalNode | undefined { return this.tryGetToken(JavadocParser.BRACE_CLOSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavadocParser.RULE_blockTagTextElement; }
	// @Override
	public enterRule(listener: JavadocParserListener): void {
		if (listener.enterBlockTagTextElement) {
			listener.enterBlockTagTextElement(this);
		}
	}
	// @Override
	public exitRule(listener: JavadocParserListener): void {
		if (listener.exitBlockTagTextElement) {
			listener.exitBlockTagTextElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavadocParserVisitor<Result>): Result {
		if (visitor.visitBlockTagTextElement) {
			return visitor.visitBlockTagTextElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InlineTagContext extends ParserRuleContext {
	public INLINE_TAG_START(): TerminalNode { return this.getToken(JavadocParser.INLINE_TAG_START, 0); }
	public inlineTagName(): InlineTagNameContext {
		return this.getRuleContext(0, InlineTagNameContext);
	}
	public BRACE_CLOSE(): TerminalNode { return this.getToken(JavadocParser.BRACE_CLOSE, 0); }
	public SPACE(): TerminalNode[];
	public SPACE(i: number): TerminalNode;
	public SPACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavadocParser.SPACE);
		} else {
			return this.getToken(JavadocParser.SPACE, i);
		}
	}
	public inlineTagContent(): InlineTagContentContext | undefined {
		return this.tryGetRuleContext(0, InlineTagContentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavadocParser.RULE_inlineTag; }
	// @Override
	public enterRule(listener: JavadocParserListener): void {
		if (listener.enterInlineTag) {
			listener.enterInlineTag(this);
		}
	}
	// @Override
	public exitRule(listener: JavadocParserListener): void {
		if (listener.exitInlineTag) {
			listener.exitInlineTag(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavadocParserVisitor<Result>): Result {
		if (visitor.visitInlineTag) {
			return visitor.visitInlineTag(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InlineTagNameContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(JavadocParser.NAME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavadocParser.RULE_inlineTagName; }
	// @Override
	public enterRule(listener: JavadocParserListener): void {
		if (listener.enterInlineTagName) {
			listener.enterInlineTagName(this);
		}
	}
	// @Override
	public exitRule(listener: JavadocParserListener): void {
		if (listener.exitInlineTagName) {
			listener.exitInlineTagName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavadocParserVisitor<Result>): Result {
		if (visitor.visitInlineTagName) {
			return visitor.visitInlineTagName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InlineTagContentContext extends ParserRuleContext {
	public braceContent(): BraceContentContext[];
	public braceContent(i: number): BraceContentContext;
	public braceContent(i?: number): BraceContentContext | BraceContentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BraceContentContext);
		} else {
			return this.getRuleContext(i, BraceContentContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavadocParser.RULE_inlineTagContent; }
	// @Override
	public enterRule(listener: JavadocParserListener): void {
		if (listener.enterInlineTagContent) {
			listener.enterInlineTagContent(this);
		}
	}
	// @Override
	public exitRule(listener: JavadocParserListener): void {
		if (listener.exitInlineTagContent) {
			listener.exitInlineTagContent(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavadocParserVisitor<Result>): Result {
		if (visitor.visitInlineTagContent) {
			return visitor.visitInlineTagContent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BraceExpressionContext extends ParserRuleContext {
	public BRACE_OPEN(): TerminalNode { return this.getToken(JavadocParser.BRACE_OPEN, 0); }
	public BRACE_CLOSE(): TerminalNode { return this.getToken(JavadocParser.BRACE_CLOSE, 0); }
	public braceContent(): BraceContentContext[];
	public braceContent(i: number): BraceContentContext;
	public braceContent(i?: number): BraceContentContext | BraceContentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BraceContentContext);
		} else {
			return this.getRuleContext(i, BraceContentContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavadocParser.RULE_braceExpression; }
	// @Override
	public enterRule(listener: JavadocParserListener): void {
		if (listener.enterBraceExpression) {
			listener.enterBraceExpression(this);
		}
	}
	// @Override
	public exitRule(listener: JavadocParserListener): void {
		if (listener.exitBraceExpression) {
			listener.exitBraceExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavadocParserVisitor<Result>): Result {
		if (visitor.visitBraceExpression) {
			return visitor.visitBraceExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BraceContentContext extends ParserRuleContext {
	public braceExpression(): BraceExpressionContext | undefined {
		return this.tryGetRuleContext(0, BraceExpressionContext);
	}
	public braceText(): BraceTextContext[];
	public braceText(i: number): BraceTextContext;
	public braceText(i?: number): BraceTextContext | BraceTextContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BraceTextContext);
		} else {
			return this.getRuleContext(i, BraceTextContext);
		}
	}
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(JavadocParser.NEWLINE);
		} else {
			return this.getToken(JavadocParser.NEWLINE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavadocParser.RULE_braceContent; }
	// @Override
	public enterRule(listener: JavadocParserListener): void {
		if (listener.enterBraceContent) {
			listener.enterBraceContent(this);
		}
	}
	// @Override
	public exitRule(listener: JavadocParserListener): void {
		if (listener.exitBraceContent) {
			listener.exitBraceContent(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavadocParserVisitor<Result>): Result {
		if (visitor.visitBraceContent) {
			return visitor.visitBraceContent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BraceTextContext extends ParserRuleContext {
	public TEXT_CONTENT(): TerminalNode | undefined { return this.tryGetToken(JavadocParser.TEXT_CONTENT, 0); }
	public NAME(): TerminalNode | undefined { return this.tryGetToken(JavadocParser.NAME, 0); }
	public SPACE(): TerminalNode | undefined { return this.tryGetToken(JavadocParser.SPACE, 0); }
	public STAR(): TerminalNode | undefined { return this.tryGetToken(JavadocParser.STAR, 0); }
	public SLASH(): TerminalNode | undefined { return this.tryGetToken(JavadocParser.SLASH, 0); }
	public NEWLINE(): TerminalNode | undefined { return this.tryGetToken(JavadocParser.NEWLINE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return JavadocParser.RULE_braceText; }
	// @Override
	public enterRule(listener: JavadocParserListener): void {
		if (listener.enterBraceText) {
			listener.enterBraceText(this);
		}
	}
	// @Override
	public exitRule(listener: JavadocParserListener): void {
		if (listener.exitBraceText) {
			listener.exitBraceText(this);
		}
	}
	// @Override
	public accept<Result>(visitor: JavadocParserVisitor<Result>): Result {
		if (visitor.visitBraceText) {
			return visitor.visitBraceText(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


