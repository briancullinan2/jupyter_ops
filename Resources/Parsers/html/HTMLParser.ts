// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/html/HTMLParser.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { HTMLParserListener } from "./HTMLParserListener";

export class HTMLParser extends Parser {
	public static readonly HTML_COMMENT = 1;
	public static readonly HTML_CONDITIONAL_COMMENT = 2;
	public static readonly XML_DECLARATION = 3;
	public static readonly CDATA = 4;
	public static readonly DTD = 5;
	public static readonly SCRIPTLET = 6;
	public static readonly SEA_WS = 7;
	public static readonly SCRIPT_OPEN = 8;
	public static readonly STYLE_OPEN = 9;
	public static readonly TAG_OPEN = 10;
	public static readonly HTML_TEXT = 11;
	public static readonly TAG_CLOSE = 12;
	public static readonly TAG_SLASH_CLOSE = 13;
	public static readonly TAG_SLASH = 14;
	public static readonly TAG_EQUALS = 15;
	public static readonly TAG_NAME = 16;
	public static readonly TAG_WHITESPACE = 17;
	public static readonly SCRIPT_BODY = 18;
	public static readonly SCRIPT_SHORT_BODY = 19;
	public static readonly STYLE_BODY = 20;
	public static readonly STYLE_SHORT_BODY = 21;
	public static readonly ATTVALUE_VALUE = 22;
	public static readonly ATTRIBUTE = 23;
	public static readonly RULE_htmlDocument = 0;
	public static readonly RULE_htmlElements = 1;
	public static readonly RULE_htmlElement = 2;
	public static readonly RULE_htmlContent = 3;
	public static readonly RULE_htmlAttribute = 4;
	public static readonly RULE_htmlAttributeName = 5;
	public static readonly RULE_htmlAttributeValue = 6;
	public static readonly RULE_htmlTagName = 7;
	public static readonly RULE_htmlChardata = 8;
	public static readonly RULE_htmlMisc = 9;
	public static readonly RULE_htmlComment = 10;
	public static readonly RULE_xhtmlCDATA = 11;
	public static readonly RULE_dtd = 12;
	public static readonly RULE_xml = 13;
	public static readonly RULE_scriptlet = 14;
	public static readonly RULE_script = 15;
	public static readonly RULE_style = 16;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"htmlDocument", "htmlElements", "htmlElement", "htmlContent", "htmlAttribute", 
		"htmlAttributeName", "htmlAttributeValue", "htmlTagName", "htmlChardata", 
		"htmlMisc", "htmlComment", "xhtmlCDATA", "dtd", "xml", "scriptlet", "script", 
		"style",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "'<'", undefined, "'>'", "'/>'", "'/'", 
		"'='",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "HTML_COMMENT", "HTML_CONDITIONAL_COMMENT", "XML_DECLARATION", 
		"CDATA", "DTD", "SCRIPTLET", "SEA_WS", "SCRIPT_OPEN", "STYLE_OPEN", "TAG_OPEN", 
		"HTML_TEXT", "TAG_CLOSE", "TAG_SLASH_CLOSE", "TAG_SLASH", "TAG_EQUALS", 
		"TAG_NAME", "TAG_WHITESPACE", "SCRIPT_BODY", "SCRIPT_SHORT_BODY", "STYLE_BODY", 
		"STYLE_SHORT_BODY", "ATTVALUE_VALUE", "ATTRIBUTE",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(HTMLParser._LITERAL_NAMES, HTMLParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return HTMLParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "HTMLParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return HTMLParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return HTMLParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(HTMLParser._ATN, this);
	}
	// @RuleVersion(0)
	public htmlDocument(): HtmlDocumentContext {
		let _localctx: HtmlDocumentContext = new HtmlDocumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, HTMLParser.RULE_htmlDocument);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 38;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 36;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case HTMLParser.SCRIPTLET:
						{
						this.state = 34;
						this.scriptlet();
						}
						break;
					case HTMLParser.SEA_WS:
						{
						this.state = 35;
						this.match(HTMLParser.SEA_WS);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
				}
				this.state = 40;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
			}
			this.state = 42;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HTMLParser.XML_DECLARATION) {
				{
				this.state = 41;
				this.xml();
				}
			}

			this.state = 48;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 46;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case HTMLParser.SCRIPTLET:
						{
						this.state = 44;
						this.scriptlet();
						}
						break;
					case HTMLParser.SEA_WS:
						{
						this.state = 45;
						this.match(HTMLParser.SEA_WS);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
				}
				this.state = 50;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
			}
			this.state = 52;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HTMLParser.DTD) {
				{
				this.state = 51;
				this.dtd();
				}
			}

			this.state = 58;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 56;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case HTMLParser.SCRIPTLET:
						{
						this.state = 54;
						this.scriptlet();
						}
						break;
					case HTMLParser.SEA_WS:
						{
						this.state = 55;
						this.match(HTMLParser.SEA_WS);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
				}
				this.state = 60;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
			}
			this.state = 64;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << HTMLParser.HTML_COMMENT) | (1 << HTMLParser.HTML_CONDITIONAL_COMMENT) | (1 << HTMLParser.SCRIPTLET) | (1 << HTMLParser.SEA_WS) | (1 << HTMLParser.SCRIPT_OPEN) | (1 << HTMLParser.STYLE_OPEN) | (1 << HTMLParser.TAG_OPEN))) !== 0)) {
				{
				{
				this.state = 61;
				this.htmlElements();
				}
				}
				this.state = 66;
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
	public htmlElements(): HtmlElementsContext {
		let _localctx: HtmlElementsContext = new HtmlElementsContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, HTMLParser.RULE_htmlElements);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 70;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << HTMLParser.HTML_COMMENT) | (1 << HTMLParser.HTML_CONDITIONAL_COMMENT) | (1 << HTMLParser.SEA_WS))) !== 0)) {
				{
				{
				this.state = 67;
				this.htmlMisc();
				}
				}
				this.state = 72;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 73;
			this.htmlElement();
			this.state = 77;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 74;
					this.htmlMisc();
					}
					}
				}
				this.state = 79;
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
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public htmlElement(): HtmlElementContext {
		let _localctx: HtmlElementContext = new HtmlElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, HTMLParser.RULE_htmlElement);
		let _la: number;
		try {
			this.state = 118;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 80;
				this.match(HTMLParser.TAG_OPEN);
				this.state = 81;
				this.htmlTagName();
				this.state = 85;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === HTMLParser.TAG_NAME) {
					{
					{
					this.state = 82;
					this.htmlAttribute();
					}
					}
					this.state = 87;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 88;
				this.match(HTMLParser.TAG_CLOSE);
				this.state = 89;
				this.htmlContent();
				this.state = 90;
				this.match(HTMLParser.TAG_OPEN);
				this.state = 91;
				this.match(HTMLParser.TAG_SLASH);
				this.state = 92;
				this.htmlTagName();
				this.state = 93;
				this.match(HTMLParser.TAG_CLOSE);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 95;
				this.match(HTMLParser.TAG_OPEN);
				this.state = 96;
				this.htmlTagName();
				this.state = 100;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === HTMLParser.TAG_NAME) {
					{
					{
					this.state = 97;
					this.htmlAttribute();
					}
					}
					this.state = 102;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 103;
				this.match(HTMLParser.TAG_SLASH_CLOSE);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 105;
				this.match(HTMLParser.TAG_OPEN);
				this.state = 106;
				this.htmlTagName();
				this.state = 110;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === HTMLParser.TAG_NAME) {
					{
					{
					this.state = 107;
					this.htmlAttribute();
					}
					}
					this.state = 112;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 113;
				this.match(HTMLParser.TAG_CLOSE);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 115;
				this.scriptlet();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 116;
				this.script();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 117;
				this.style();
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
	public htmlContent(): HtmlContentContext {
		let _localctx: HtmlContentContext = new HtmlContentContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, HTMLParser.RULE_htmlContent);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 121;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HTMLParser.SEA_WS || _la === HTMLParser.HTML_TEXT) {
				{
				this.state = 120;
				this.htmlChardata();
				}
			}

			this.state = 133;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 126;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case HTMLParser.SCRIPTLET:
					case HTMLParser.SCRIPT_OPEN:
					case HTMLParser.STYLE_OPEN:
					case HTMLParser.TAG_OPEN:
						{
						this.state = 123;
						this.htmlElement();
						}
						break;
					case HTMLParser.CDATA:
						{
						this.state = 124;
						this.xhtmlCDATA();
						}
						break;
					case HTMLParser.HTML_COMMENT:
					case HTMLParser.HTML_CONDITIONAL_COMMENT:
						{
						this.state = 125;
						this.htmlComment();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 129;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === HTMLParser.SEA_WS || _la === HTMLParser.HTML_TEXT) {
						{
						this.state = 128;
						this.htmlChardata();
						}
					}

					}
					}
				}
				this.state = 135;
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
	public htmlAttribute(): HtmlAttributeContext {
		let _localctx: HtmlAttributeContext = new HtmlAttributeContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, HTMLParser.RULE_htmlAttribute);
		try {
			this.state = 141;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 19, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 136;
				this.htmlAttributeName();
				this.state = 137;
				this.match(HTMLParser.TAG_EQUALS);
				this.state = 138;
				this.htmlAttributeValue();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 140;
				this.htmlAttributeName();
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
	public htmlAttributeName(): HtmlAttributeNameContext {
		let _localctx: HtmlAttributeNameContext = new HtmlAttributeNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, HTMLParser.RULE_htmlAttributeName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 143;
			this.match(HTMLParser.TAG_NAME);
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
	public htmlAttributeValue(): HtmlAttributeValueContext {
		let _localctx: HtmlAttributeValueContext = new HtmlAttributeValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, HTMLParser.RULE_htmlAttributeValue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 145;
			this.match(HTMLParser.ATTVALUE_VALUE);
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
	public htmlTagName(): HtmlTagNameContext {
		let _localctx: HtmlTagNameContext = new HtmlTagNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, HTMLParser.RULE_htmlTagName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 147;
			this.match(HTMLParser.TAG_NAME);
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
	public htmlChardata(): HtmlChardataContext {
		let _localctx: HtmlChardataContext = new HtmlChardataContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, HTMLParser.RULE_htmlChardata);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 149;
			_la = this._input.LA(1);
			if (!(_la === HTMLParser.SEA_WS || _la === HTMLParser.HTML_TEXT)) {
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
	public htmlMisc(): HtmlMiscContext {
		let _localctx: HtmlMiscContext = new HtmlMiscContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, HTMLParser.RULE_htmlMisc);
		try {
			this.state = 153;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HTMLParser.HTML_COMMENT:
			case HTMLParser.HTML_CONDITIONAL_COMMENT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 151;
				this.htmlComment();
				}
				break;
			case HTMLParser.SEA_WS:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 152;
				this.match(HTMLParser.SEA_WS);
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
	public htmlComment(): HtmlCommentContext {
		let _localctx: HtmlCommentContext = new HtmlCommentContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, HTMLParser.RULE_htmlComment);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 155;
			_la = this._input.LA(1);
			if (!(_la === HTMLParser.HTML_COMMENT || _la === HTMLParser.HTML_CONDITIONAL_COMMENT)) {
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
	public xhtmlCDATA(): XhtmlCDATAContext {
		let _localctx: XhtmlCDATAContext = new XhtmlCDATAContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, HTMLParser.RULE_xhtmlCDATA);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 157;
			this.match(HTMLParser.CDATA);
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
	public dtd(): DtdContext {
		let _localctx: DtdContext = new DtdContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, HTMLParser.RULE_dtd);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 159;
			this.match(HTMLParser.DTD);
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
	public xml(): XmlContext {
		let _localctx: XmlContext = new XmlContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, HTMLParser.RULE_xml);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 161;
			this.match(HTMLParser.XML_DECLARATION);
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
	public scriptlet(): ScriptletContext {
		let _localctx: ScriptletContext = new ScriptletContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, HTMLParser.RULE_scriptlet);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 163;
			this.match(HTMLParser.SCRIPTLET);
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
	public script(): ScriptContext {
		let _localctx: ScriptContext = new ScriptContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, HTMLParser.RULE_script);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 165;
			this.match(HTMLParser.SCRIPT_OPEN);
			this.state = 166;
			_la = this._input.LA(1);
			if (!(_la === HTMLParser.SCRIPT_BODY || _la === HTMLParser.SCRIPT_SHORT_BODY)) {
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
	public style(): StyleContext {
		let _localctx: StyleContext = new StyleContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, HTMLParser.RULE_style);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 168;
			this.match(HTMLParser.STYLE_OPEN);
			this.state = 169;
			_la = this._input.LA(1);
			if (!(_la === HTMLParser.STYLE_BODY || _la === HTMLParser.STYLE_SHORT_BODY)) {
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x19\xAE\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x03" +
		"\x02\x03\x02\x07\x02\'\n\x02\f\x02\x0E\x02*\v\x02\x03\x02\x05\x02-\n\x02" +
		"\x03\x02\x03\x02\x07\x021\n\x02\f\x02\x0E\x024\v\x02\x03\x02\x05\x027" +
		"\n\x02\x03\x02\x03\x02\x07\x02;\n\x02\f\x02\x0E\x02>\v\x02\x03\x02\x07" +
		"\x02A\n\x02\f\x02\x0E\x02D\v\x02\x03\x03\x07\x03G\n\x03\f\x03\x0E\x03" +
		"J\v\x03\x03\x03\x03\x03\x07\x03N\n\x03\f\x03\x0E\x03Q\v\x03\x03\x04\x03" +
		"\x04\x03\x04\x07\x04V\n\x04\f\x04\x0E\x04Y\v\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x07\x04e\n\x04" +
		"\f\x04\x0E\x04h\v\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x07\x04" +
		"o\n\x04\f\x04\x0E\x04r\v\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05" +
		"\x04y\n\x04\x03\x05\x05\x05|\n\x05\x03\x05\x03\x05\x03\x05\x05\x05\x81" +
		"\n\x05\x03\x05\x05\x05\x84\n\x05\x07\x05\x86\n\x05\f\x05\x0E\x05\x89\v" +
		"\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\x90\n\x06\x03\x07" +
		"\x03\x07\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\v\x03\v\x05\v\x9C\n\v" +
		"\x03\f\x03\f\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x10\x03\x10" +
		"\x03\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03\x12\x02\x02\x02\x13" +
		"\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14" +
		"\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02\x02\x06\x04\x02" +
		"\t\t\r\r\x03\x02\x03\x04\x03\x02\x14\x15\x03\x02\x16\x17\x02\xB6\x02(" +
		"\x03\x02\x02\x02\x04H\x03\x02\x02\x02\x06x\x03\x02\x02\x02\b{\x03\x02" +
		"\x02\x02\n\x8F\x03\x02\x02\x02\f\x91\x03\x02\x02\x02\x0E\x93\x03\x02\x02" +
		"\x02\x10\x95\x03\x02\x02\x02\x12\x97\x03\x02\x02\x02\x14\x9B\x03\x02\x02" +
		"\x02\x16\x9D\x03\x02\x02\x02\x18\x9F\x03\x02\x02\x02\x1A\xA1\x03\x02\x02" +
		"\x02\x1C\xA3\x03\x02\x02\x02\x1E\xA5\x03\x02\x02\x02 \xA7\x03\x02\x02" +
		"\x02\"\xAA\x03\x02\x02\x02$\'\x05\x1E\x10\x02%\'\x07\t\x02\x02&$\x03\x02" +
		"\x02\x02&%\x03\x02\x02\x02\'*\x03\x02\x02\x02(&\x03\x02\x02\x02()\x03" +
		"\x02\x02\x02),\x03\x02\x02\x02*(\x03\x02\x02\x02+-\x05\x1C\x0F\x02,+\x03" +
		"\x02\x02\x02,-\x03\x02\x02\x02-2\x03\x02\x02\x02.1\x05\x1E\x10\x02/1\x07" +
		"\t\x02\x020.\x03\x02\x02\x020/\x03\x02\x02\x0214\x03\x02\x02\x0220\x03" +
		"\x02\x02\x0223\x03\x02\x02\x0236\x03\x02\x02\x0242\x03\x02\x02\x0257\x05" +
		"\x1A\x0E\x0265\x03\x02\x02\x0267\x03\x02\x02\x027<\x03\x02\x02\x028;\x05" +
		"\x1E\x10\x029;\x07\t\x02\x02:8\x03\x02\x02\x02:9\x03\x02\x02\x02;>\x03" +
		"\x02\x02\x02<:\x03\x02\x02\x02<=\x03\x02\x02\x02=B\x03\x02\x02\x02><\x03" +
		"\x02\x02\x02?A\x05\x04\x03\x02@?\x03\x02\x02\x02AD\x03\x02\x02\x02B@\x03" +
		"\x02\x02\x02BC\x03\x02\x02\x02C\x03\x03\x02\x02\x02DB\x03\x02\x02\x02" +
		"EG\x05\x14\v\x02FE\x03\x02\x02\x02GJ\x03\x02\x02\x02HF\x03\x02\x02\x02" +
		"HI\x03\x02\x02\x02IK\x03\x02\x02\x02JH\x03\x02\x02\x02KO\x05\x06\x04\x02" +
		"LN\x05\x14\v\x02ML\x03\x02\x02\x02NQ\x03\x02\x02\x02OM\x03\x02\x02\x02" +
		"OP\x03\x02\x02\x02P\x05\x03\x02\x02\x02QO\x03\x02\x02\x02RS\x07\f\x02" +
		"\x02SW\x05\x10\t\x02TV\x05\n\x06\x02UT\x03\x02\x02\x02VY\x03\x02\x02\x02" +
		"WU\x03\x02\x02\x02WX\x03\x02\x02\x02XZ\x03\x02\x02\x02YW\x03\x02\x02\x02" +
		"Z[\x07\x0E\x02\x02[\\\x05\b\x05\x02\\]\x07\f\x02\x02]^\x07\x10\x02\x02" +
		"^_\x05\x10\t\x02_`\x07\x0E\x02\x02`y\x03\x02\x02\x02ab\x07\f\x02\x02b" +
		"f\x05\x10\t\x02ce\x05\n\x06\x02dc\x03\x02\x02\x02eh\x03\x02\x02\x02fd" +
		"\x03\x02\x02\x02fg\x03\x02\x02\x02gi\x03\x02\x02\x02hf\x03\x02\x02\x02" +
		"ij\x07\x0F\x02\x02jy\x03\x02\x02\x02kl\x07\f\x02\x02lp\x05\x10\t\x02m" +
		"o\x05\n\x06\x02nm\x03\x02\x02\x02or\x03\x02\x02\x02pn\x03\x02\x02\x02" +
		"pq\x03\x02\x02\x02qs\x03\x02\x02\x02rp\x03\x02\x02\x02st\x07\x0E\x02\x02" +
		"ty\x03\x02\x02\x02uy\x05\x1E\x10\x02vy\x05 \x11\x02wy\x05\"\x12\x02xR" +
		"\x03\x02\x02\x02xa\x03\x02\x02\x02xk\x03\x02\x02\x02xu\x03\x02\x02\x02" +
		"xv\x03\x02\x02\x02xw\x03\x02\x02\x02y\x07\x03\x02\x02\x02z|\x05\x12\n" +
		"\x02{z\x03\x02\x02\x02{|\x03\x02\x02\x02|\x87\x03\x02\x02\x02}\x81\x05" +
		"\x06\x04\x02~\x81\x05\x18\r\x02\x7F\x81\x05\x16\f\x02\x80}\x03\x02\x02" +
		"\x02\x80~\x03\x02\x02\x02\x80\x7F\x03\x02\x02\x02\x81\x83\x03\x02\x02" +
		"\x02\x82\x84\x05\x12\n\x02\x83\x82\x03\x02\x02\x02\x83\x84\x03\x02\x02" +
		"\x02\x84\x86\x03\x02\x02\x02\x85\x80\x03\x02\x02\x02\x86\x89\x03\x02\x02" +
		"\x02\x87\x85\x03\x02\x02\x02\x87\x88\x03\x02\x02\x02\x88\t\x03\x02\x02" +
		"\x02\x89\x87\x03\x02\x02\x02\x8A\x8B\x05\f\x07\x02\x8B\x8C\x07\x11\x02" +
		"\x02\x8C\x8D\x05\x0E\b\x02\x8D\x90\x03\x02\x02\x02\x8E\x90\x05\f\x07\x02" +
		"\x8F\x8A\x03\x02\x02\x02\x8F\x8E\x03\x02\x02\x02\x90\v\x03\x02\x02\x02" +
		"\x91\x92\x07\x12\x02\x02\x92\r\x03\x02\x02\x02\x93\x94\x07\x18\x02\x02" +
		"\x94\x0F\x03\x02\x02\x02\x95\x96\x07\x12\x02\x02\x96\x11\x03\x02\x02\x02" +
		"\x97\x98\t\x02\x02\x02\x98\x13\x03\x02\x02\x02\x99\x9C\x05\x16\f\x02\x9A" +
		"\x9C\x07\t\x02\x02\x9B\x99\x03\x02\x02\x02\x9B\x9A\x03\x02\x02\x02\x9C" +
		"\x15\x03\x02\x02\x02\x9D\x9E\t\x03\x02\x02\x9E\x17\x03\x02\x02\x02\x9F" +
		"\xA0\x07\x06\x02\x02\xA0\x19\x03\x02\x02\x02\xA1\xA2\x07\x07\x02\x02\xA2" +
		"\x1B\x03\x02\x02\x02\xA3\xA4\x07\x05\x02\x02\xA4\x1D\x03\x02\x02\x02\xA5" +
		"\xA6\x07\b\x02\x02\xA6\x1F\x03\x02\x02\x02\xA7\xA8\x07\n\x02\x02\xA8\xA9" +
		"\t\x04\x02\x02\xA9!\x03\x02\x02\x02\xAA\xAB\x07\v\x02\x02\xAB\xAC\t\x05" +
		"\x02\x02\xAC#\x03\x02\x02\x02\x17&(,026:<BHOWfpx{\x80\x83\x87\x8F\x9B";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!HTMLParser.__ATN) {
			HTMLParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(HTMLParser._serializedATN));
		}

		return HTMLParser.__ATN;
	}

}

export class HtmlDocumentContext extends ParserRuleContext {
	public scriptlet(): ScriptletContext[];
	public scriptlet(i: number): ScriptletContext;
	public scriptlet(i?: number): ScriptletContext | ScriptletContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ScriptletContext);
		} else {
			return this.getRuleContext(i, ScriptletContext);
		}
	}
	public SEA_WS(): TerminalNode[];
	public SEA_WS(i: number): TerminalNode;
	public SEA_WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(HTMLParser.SEA_WS);
		} else {
			return this.getToken(HTMLParser.SEA_WS, i);
		}
	}
	public xml(): XmlContext | undefined {
		return this.tryGetRuleContext(0, XmlContext);
	}
	public dtd(): DtdContext | undefined {
		return this.tryGetRuleContext(0, DtdContext);
	}
	public htmlElements(): HtmlElementsContext[];
	public htmlElements(i: number): HtmlElementsContext;
	public htmlElements(i?: number): HtmlElementsContext | HtmlElementsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(HtmlElementsContext);
		} else {
			return this.getRuleContext(i, HtmlElementsContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HTMLParser.RULE_htmlDocument; }
	// @Override
	public enterRule(listener: HTMLParserListener): void {
		if (listener.enterHtmlDocument) {
			listener.enterHtmlDocument(this);
		}
	}
	// @Override
	public exitRule(listener: HTMLParserListener): void {
		if (listener.exitHtmlDocument) {
			listener.exitHtmlDocument(this);
		}
	}
}


export class HtmlElementsContext extends ParserRuleContext {
	public htmlElement(): HtmlElementContext {
		return this.getRuleContext(0, HtmlElementContext);
	}
	public htmlMisc(): HtmlMiscContext[];
	public htmlMisc(i: number): HtmlMiscContext;
	public htmlMisc(i?: number): HtmlMiscContext | HtmlMiscContext[] {
		if (i === undefined) {
			return this.getRuleContexts(HtmlMiscContext);
		} else {
			return this.getRuleContext(i, HtmlMiscContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HTMLParser.RULE_htmlElements; }
	// @Override
	public enterRule(listener: HTMLParserListener): void {
		if (listener.enterHtmlElements) {
			listener.enterHtmlElements(this);
		}
	}
	// @Override
	public exitRule(listener: HTMLParserListener): void {
		if (listener.exitHtmlElements) {
			listener.exitHtmlElements(this);
		}
	}
}


export class HtmlElementContext extends ParserRuleContext {
	public TAG_OPEN(): TerminalNode[];
	public TAG_OPEN(i: number): TerminalNode;
	public TAG_OPEN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(HTMLParser.TAG_OPEN);
		} else {
			return this.getToken(HTMLParser.TAG_OPEN, i);
		}
	}
	public htmlTagName(): HtmlTagNameContext[];
	public htmlTagName(i: number): HtmlTagNameContext;
	public htmlTagName(i?: number): HtmlTagNameContext | HtmlTagNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(HtmlTagNameContext);
		} else {
			return this.getRuleContext(i, HtmlTagNameContext);
		}
	}
	public TAG_CLOSE(): TerminalNode[];
	public TAG_CLOSE(i: number): TerminalNode;
	public TAG_CLOSE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(HTMLParser.TAG_CLOSE);
		} else {
			return this.getToken(HTMLParser.TAG_CLOSE, i);
		}
	}
	public htmlContent(): HtmlContentContext | undefined {
		return this.tryGetRuleContext(0, HtmlContentContext);
	}
	public TAG_SLASH(): TerminalNode | undefined { return this.tryGetToken(HTMLParser.TAG_SLASH, 0); }
	public htmlAttribute(): HtmlAttributeContext[];
	public htmlAttribute(i: number): HtmlAttributeContext;
	public htmlAttribute(i?: number): HtmlAttributeContext | HtmlAttributeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(HtmlAttributeContext);
		} else {
			return this.getRuleContext(i, HtmlAttributeContext);
		}
	}
	public TAG_SLASH_CLOSE(): TerminalNode | undefined { return this.tryGetToken(HTMLParser.TAG_SLASH_CLOSE, 0); }
	public scriptlet(): ScriptletContext | undefined {
		return this.tryGetRuleContext(0, ScriptletContext);
	}
	public script(): ScriptContext | undefined {
		return this.tryGetRuleContext(0, ScriptContext);
	}
	public style(): StyleContext | undefined {
		return this.tryGetRuleContext(0, StyleContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HTMLParser.RULE_htmlElement; }
	// @Override
	public enterRule(listener: HTMLParserListener): void {
		if (listener.enterHtmlElement) {
			listener.enterHtmlElement(this);
		}
	}
	// @Override
	public exitRule(listener: HTMLParserListener): void {
		if (listener.exitHtmlElement) {
			listener.exitHtmlElement(this);
		}
	}
}


export class HtmlContentContext extends ParserRuleContext {
	public htmlChardata(): HtmlChardataContext[];
	public htmlChardata(i: number): HtmlChardataContext;
	public htmlChardata(i?: number): HtmlChardataContext | HtmlChardataContext[] {
		if (i === undefined) {
			return this.getRuleContexts(HtmlChardataContext);
		} else {
			return this.getRuleContext(i, HtmlChardataContext);
		}
	}
	public htmlElement(): HtmlElementContext[];
	public htmlElement(i: number): HtmlElementContext;
	public htmlElement(i?: number): HtmlElementContext | HtmlElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(HtmlElementContext);
		} else {
			return this.getRuleContext(i, HtmlElementContext);
		}
	}
	public xhtmlCDATA(): XhtmlCDATAContext[];
	public xhtmlCDATA(i: number): XhtmlCDATAContext;
	public xhtmlCDATA(i?: number): XhtmlCDATAContext | XhtmlCDATAContext[] {
		if (i === undefined) {
			return this.getRuleContexts(XhtmlCDATAContext);
		} else {
			return this.getRuleContext(i, XhtmlCDATAContext);
		}
	}
	public htmlComment(): HtmlCommentContext[];
	public htmlComment(i: number): HtmlCommentContext;
	public htmlComment(i?: number): HtmlCommentContext | HtmlCommentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(HtmlCommentContext);
		} else {
			return this.getRuleContext(i, HtmlCommentContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HTMLParser.RULE_htmlContent; }
	// @Override
	public enterRule(listener: HTMLParserListener): void {
		if (listener.enterHtmlContent) {
			listener.enterHtmlContent(this);
		}
	}
	// @Override
	public exitRule(listener: HTMLParserListener): void {
		if (listener.exitHtmlContent) {
			listener.exitHtmlContent(this);
		}
	}
}


export class HtmlAttributeContext extends ParserRuleContext {
	public htmlAttributeName(): HtmlAttributeNameContext {
		return this.getRuleContext(0, HtmlAttributeNameContext);
	}
	public TAG_EQUALS(): TerminalNode | undefined { return this.tryGetToken(HTMLParser.TAG_EQUALS, 0); }
	public htmlAttributeValue(): HtmlAttributeValueContext | undefined {
		return this.tryGetRuleContext(0, HtmlAttributeValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HTMLParser.RULE_htmlAttribute; }
	// @Override
	public enterRule(listener: HTMLParserListener): void {
		if (listener.enterHtmlAttribute) {
			listener.enterHtmlAttribute(this);
		}
	}
	// @Override
	public exitRule(listener: HTMLParserListener): void {
		if (listener.exitHtmlAttribute) {
			listener.exitHtmlAttribute(this);
		}
	}
}


export class HtmlAttributeNameContext extends ParserRuleContext {
	public TAG_NAME(): TerminalNode { return this.getToken(HTMLParser.TAG_NAME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HTMLParser.RULE_htmlAttributeName; }
	// @Override
	public enterRule(listener: HTMLParserListener): void {
		if (listener.enterHtmlAttributeName) {
			listener.enterHtmlAttributeName(this);
		}
	}
	// @Override
	public exitRule(listener: HTMLParserListener): void {
		if (listener.exitHtmlAttributeName) {
			listener.exitHtmlAttributeName(this);
		}
	}
}


export class HtmlAttributeValueContext extends ParserRuleContext {
	public ATTVALUE_VALUE(): TerminalNode { return this.getToken(HTMLParser.ATTVALUE_VALUE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HTMLParser.RULE_htmlAttributeValue; }
	// @Override
	public enterRule(listener: HTMLParserListener): void {
		if (listener.enterHtmlAttributeValue) {
			listener.enterHtmlAttributeValue(this);
		}
	}
	// @Override
	public exitRule(listener: HTMLParserListener): void {
		if (listener.exitHtmlAttributeValue) {
			listener.exitHtmlAttributeValue(this);
		}
	}
}


export class HtmlTagNameContext extends ParserRuleContext {
	public TAG_NAME(): TerminalNode { return this.getToken(HTMLParser.TAG_NAME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HTMLParser.RULE_htmlTagName; }
	// @Override
	public enterRule(listener: HTMLParserListener): void {
		if (listener.enterHtmlTagName) {
			listener.enterHtmlTagName(this);
		}
	}
	// @Override
	public exitRule(listener: HTMLParserListener): void {
		if (listener.exitHtmlTagName) {
			listener.exitHtmlTagName(this);
		}
	}
}


export class HtmlChardataContext extends ParserRuleContext {
	public HTML_TEXT(): TerminalNode | undefined { return this.tryGetToken(HTMLParser.HTML_TEXT, 0); }
	public SEA_WS(): TerminalNode | undefined { return this.tryGetToken(HTMLParser.SEA_WS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HTMLParser.RULE_htmlChardata; }
	// @Override
	public enterRule(listener: HTMLParserListener): void {
		if (listener.enterHtmlChardata) {
			listener.enterHtmlChardata(this);
		}
	}
	// @Override
	public exitRule(listener: HTMLParserListener): void {
		if (listener.exitHtmlChardata) {
			listener.exitHtmlChardata(this);
		}
	}
}


export class HtmlMiscContext extends ParserRuleContext {
	public htmlComment(): HtmlCommentContext | undefined {
		return this.tryGetRuleContext(0, HtmlCommentContext);
	}
	public SEA_WS(): TerminalNode | undefined { return this.tryGetToken(HTMLParser.SEA_WS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HTMLParser.RULE_htmlMisc; }
	// @Override
	public enterRule(listener: HTMLParserListener): void {
		if (listener.enterHtmlMisc) {
			listener.enterHtmlMisc(this);
		}
	}
	// @Override
	public exitRule(listener: HTMLParserListener): void {
		if (listener.exitHtmlMisc) {
			listener.exitHtmlMisc(this);
		}
	}
}


export class HtmlCommentContext extends ParserRuleContext {
	public HTML_COMMENT(): TerminalNode | undefined { return this.tryGetToken(HTMLParser.HTML_COMMENT, 0); }
	public HTML_CONDITIONAL_COMMENT(): TerminalNode | undefined { return this.tryGetToken(HTMLParser.HTML_CONDITIONAL_COMMENT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HTMLParser.RULE_htmlComment; }
	// @Override
	public enterRule(listener: HTMLParserListener): void {
		if (listener.enterHtmlComment) {
			listener.enterHtmlComment(this);
		}
	}
	// @Override
	public exitRule(listener: HTMLParserListener): void {
		if (listener.exitHtmlComment) {
			listener.exitHtmlComment(this);
		}
	}
}


export class XhtmlCDATAContext extends ParserRuleContext {
	public CDATA(): TerminalNode { return this.getToken(HTMLParser.CDATA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HTMLParser.RULE_xhtmlCDATA; }
	// @Override
	public enterRule(listener: HTMLParserListener): void {
		if (listener.enterXhtmlCDATA) {
			listener.enterXhtmlCDATA(this);
		}
	}
	// @Override
	public exitRule(listener: HTMLParserListener): void {
		if (listener.exitXhtmlCDATA) {
			listener.exitXhtmlCDATA(this);
		}
	}
}


export class DtdContext extends ParserRuleContext {
	public DTD(): TerminalNode { return this.getToken(HTMLParser.DTD, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HTMLParser.RULE_dtd; }
	// @Override
	public enterRule(listener: HTMLParserListener): void {
		if (listener.enterDtd) {
			listener.enterDtd(this);
		}
	}
	// @Override
	public exitRule(listener: HTMLParserListener): void {
		if (listener.exitDtd) {
			listener.exitDtd(this);
		}
	}
}


export class XmlContext extends ParserRuleContext {
	public XML_DECLARATION(): TerminalNode { return this.getToken(HTMLParser.XML_DECLARATION, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HTMLParser.RULE_xml; }
	// @Override
	public enterRule(listener: HTMLParserListener): void {
		if (listener.enterXml) {
			listener.enterXml(this);
		}
	}
	// @Override
	public exitRule(listener: HTMLParserListener): void {
		if (listener.exitXml) {
			listener.exitXml(this);
		}
	}
}


export class ScriptletContext extends ParserRuleContext {
	public SCRIPTLET(): TerminalNode { return this.getToken(HTMLParser.SCRIPTLET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HTMLParser.RULE_scriptlet; }
	// @Override
	public enterRule(listener: HTMLParserListener): void {
		if (listener.enterScriptlet) {
			listener.enterScriptlet(this);
		}
	}
	// @Override
	public exitRule(listener: HTMLParserListener): void {
		if (listener.exitScriptlet) {
			listener.exitScriptlet(this);
		}
	}
}


export class ScriptContext extends ParserRuleContext {
	public SCRIPT_OPEN(): TerminalNode { return this.getToken(HTMLParser.SCRIPT_OPEN, 0); }
	public SCRIPT_BODY(): TerminalNode | undefined { return this.tryGetToken(HTMLParser.SCRIPT_BODY, 0); }
	public SCRIPT_SHORT_BODY(): TerminalNode | undefined { return this.tryGetToken(HTMLParser.SCRIPT_SHORT_BODY, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HTMLParser.RULE_script; }
	// @Override
	public enterRule(listener: HTMLParserListener): void {
		if (listener.enterScript) {
			listener.enterScript(this);
		}
	}
	// @Override
	public exitRule(listener: HTMLParserListener): void {
		if (listener.exitScript) {
			listener.exitScript(this);
		}
	}
}


export class StyleContext extends ParserRuleContext {
	public STYLE_OPEN(): TerminalNode { return this.getToken(HTMLParser.STYLE_OPEN, 0); }
	public STYLE_BODY(): TerminalNode | undefined { return this.tryGetToken(HTMLParser.STYLE_BODY, 0); }
	public STYLE_SHORT_BODY(): TerminalNode | undefined { return this.tryGetToken(HTMLParser.STYLE_SHORT_BODY, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HTMLParser.RULE_style; }
	// @Override
	public enterRule(listener: HTMLParserListener): void {
		if (listener.enterStyle) {
			listener.enterStyle(this);
		}
	}
	// @Override
	public exitRule(listener: HTMLParserListener): void {
		if (listener.exitStyle) {
			listener.exitStyle(this);
		}
	}
}


