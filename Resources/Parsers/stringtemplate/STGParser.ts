// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/stringtemplate/STGParser.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { STGParserListener } from "./STGParserListener";

export class STGParser extends Parser {
	public static readonly DOC_COMMENT = 1;
	public static readonly BLOCK_COMMENT = 2;
	public static readonly LINE_COMMENT = 3;
	public static readonly TMPL_COMMENT = 4;
	public static readonly HORZ_WS = 5;
	public static readonly VERT_WS = 6;
	public static readonly ID = 7;
	public static readonly STRING = 8;
	public static readonly BIGSTRING = 9;
	public static readonly BIGSTRING_NO_NL = 10;
	public static readonly ANON_TEMPLATE = 11;
	public static readonly TMPL_ASSIGN = 12;
	public static readonly ASSIGN = 13;
	public static readonly DOT = 14;
	public static readonly COMMA = 15;
	public static readonly COLON = 16;
	public static readonly LPAREN = 17;
	public static readonly RPAREN = 18;
	public static readonly LBRACK = 19;
	public static readonly RBRACK = 20;
	public static readonly AT = 21;
	public static readonly TRUE = 22;
	public static readonly FALSE = 23;
	public static readonly ELLIPSIS = 24;
	public static readonly DELIMITERS = 25;
	public static readonly IMPORT = 26;
	public static readonly DEFAULT = 27;
	public static readonly KEY = 28;
	public static readonly VALUE = 29;
	public static readonly FIRST = 30;
	public static readonly LAST = 31;
	public static readonly REST = 32;
	public static readonly TRUNC = 33;
	public static readonly STRIP = 34;
	public static readonly TRIM = 35;
	public static readonly LENGTH = 36;
	public static readonly STRLEN = 37;
	public static readonly REVERSE = 38;
	public static readonly GROUP = 39;
	public static readonly WRAP = 40;
	public static readonly ANCHOR = 41;
	public static readonly SEPARATOR = 42;
	public static readonly RULE_group = 0;
	public static readonly RULE_delimiters = 1;
	public static readonly RULE_imports = 2;
	public static readonly RULE_template = 3;
	public static readonly RULE_formalArgs = 4;
	public static readonly RULE_formalArg = 5;
	public static readonly RULE_dict = 6;
	public static readonly RULE_dictPairs = 7;
	public static readonly RULE_keyValuePair = 8;
	public static readonly RULE_defaultValuePair = 9;
	public static readonly RULE_keyValue = 10;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"group", "delimiters", "imports", "template", "formalArgs", "formalArg", 
		"dict", "dictPairs", "keyValuePair", "defaultValuePair", "keyValue",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, "'delimiters'", "'import'", 
		"'default'", "'key'", "'value'", "'first'", "'last'", "'rest'", "'trunc'", 
		"'strip'", "'trim'", "'length'", "'strlen'", "'reverse'", "'group'", "'wrap'", 
		"'anchor'", "'separator'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "DOC_COMMENT", "BLOCK_COMMENT", "LINE_COMMENT", "TMPL_COMMENT", 
		"HORZ_WS", "VERT_WS", "ID", "STRING", "BIGSTRING", "BIGSTRING_NO_NL", 
		"ANON_TEMPLATE", "TMPL_ASSIGN", "ASSIGN", "DOT", "COMMA", "COLON", "LPAREN", 
		"RPAREN", "LBRACK", "RBRACK", "AT", "TRUE", "FALSE", "ELLIPSIS", "DELIMITERS", 
		"IMPORT", "DEFAULT", "KEY", "VALUE", "FIRST", "LAST", "REST", "TRUNC", 
		"STRIP", "TRIM", "LENGTH", "STRLEN", "REVERSE", "GROUP", "WRAP", "ANCHOR", 
		"SEPARATOR",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(STGParser._LITERAL_NAMES, STGParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return STGParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "STGParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return STGParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return STGParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(STGParser._ATN, this);
	}
	// @RuleVersion(0)
	public group(): GroupContext {
		let _localctx: GroupContext = new GroupContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, STGParser.RULE_group);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 23;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === STGParser.DELIMITERS) {
				{
				this.state = 22;
				this.delimiters();
				}
			}

			this.state = 26;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === STGParser.IMPORT) {
				{
				this.state = 25;
				this.imports();
				}
			}

			this.state = 30;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 30;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
				case 1:
					{
					this.state = 28;
					this.template();
					}
					break;

				case 2:
					{
					this.state = 29;
					this.dict();
					}
					break;
				}
				}
				this.state = 32;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === STGParser.ID || _la === STGParser.AT);
			this.state = 34;
			this.match(STGParser.EOF);
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
	public delimiters(): DelimitersContext {
		let _localctx: DelimitersContext = new DelimitersContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, STGParser.RULE_delimiters);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 36;
			this.match(STGParser.DELIMITERS);
			this.state = 37;
			this.match(STGParser.STRING);
			this.state = 38;
			this.match(STGParser.COMMA);
			this.state = 39;
			this.match(STGParser.STRING);
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
	public imports(): ImportsContext {
		let _localctx: ImportsContext = new ImportsContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, STGParser.RULE_imports);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 43;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 41;
				this.match(STGParser.IMPORT);
				this.state = 42;
				this.match(STGParser.STRING);
				}
				}
				this.state = 45;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === STGParser.IMPORT);
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
	public template(): TemplateContext {
		let _localctx: TemplateContext = new TemplateContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, STGParser.RULE_template);
		let _la: number;
		try {
			this.state = 66;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 59;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case STGParser.AT:
					{
					this.state = 47;
					this.match(STGParser.AT);
					this.state = 48;
					this.match(STGParser.ID);
					this.state = 49;
					this.match(STGParser.DOT);
					this.state = 50;
					this.match(STGParser.ID);
					this.state = 51;
					this.match(STGParser.LPAREN);
					this.state = 52;
					this.match(STGParser.RPAREN);
					}
					break;
				case STGParser.ID:
					{
					this.state = 53;
					this.match(STGParser.ID);
					this.state = 54;
					this.match(STGParser.LPAREN);
					this.state = 56;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === STGParser.ID) {
						{
						this.state = 55;
						this.formalArgs();
						}
					}

					this.state = 58;
					this.match(STGParser.RPAREN);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 61;
				this.match(STGParser.TMPL_ASSIGN);
				this.state = 62;
				_la = this._input.LA(1);
				if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << STGParser.STRING) | (1 << STGParser.BIGSTRING) | (1 << STGParser.BIGSTRING_NO_NL))) !== 0))) {
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

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 63;
				this.match(STGParser.ID);
				this.state = 64;
				this.match(STGParser.TMPL_ASSIGN);
				this.state = 65;
				this.match(STGParser.ID);
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
	public formalArgs(): FormalArgsContext {
		let _localctx: FormalArgsContext = new FormalArgsContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, STGParser.RULE_formalArgs);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 68;
			this.formalArg();
			this.state = 73;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === STGParser.COMMA) {
				{
				{
				this.state = 69;
				this.match(STGParser.COMMA);
				this.state = 70;
				this.formalArg();
				}
				}
				this.state = 75;
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
	public formalArg(): FormalArgContext {
		let _localctx: FormalArgContext = new FormalArgContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, STGParser.RULE_formalArg);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 76;
			this.match(STGParser.ID);
			this.state = 88;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				{
				this.state = 77;
				this.match(STGParser.ASSIGN);
				this.state = 78;
				this.match(STGParser.STRING);
				}
				break;

			case 2:
				{
				this.state = 79;
				this.match(STGParser.ASSIGN);
				this.state = 80;
				this.match(STGParser.ANON_TEMPLATE);
				}
				break;

			case 3:
				{
				this.state = 81;
				this.match(STGParser.ASSIGN);
				this.state = 82;
				this.match(STGParser.TRUE);
				}
				break;

			case 4:
				{
				this.state = 83;
				this.match(STGParser.ASSIGN);
				this.state = 84;
				this.match(STGParser.FALSE);
				}
				break;

			case 5:
				{
				this.state = 85;
				this.match(STGParser.ASSIGN);
				this.state = 86;
				this.match(STGParser.LBRACK);
				this.state = 87;
				this.match(STGParser.RBRACK);
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
	public dict(): DictContext {
		let _localctx: DictContext = new DictContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, STGParser.RULE_dict);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 90;
			this.match(STGParser.ID);
			this.state = 91;
			this.match(STGParser.TMPL_ASSIGN);
			this.state = 92;
			this.match(STGParser.LBRACK);
			this.state = 93;
			this.dictPairs();
			this.state = 94;
			this.match(STGParser.RBRACK);
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
	public dictPairs(): DictPairsContext {
		let _localctx: DictPairsContext = new DictPairsContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, STGParser.RULE_dictPairs);
		let _la: number;
		try {
			let _alt: number;
			this.state = 109;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case STGParser.STRING:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 96;
				this.keyValuePair();
				this.state = 101;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 97;
						this.match(STGParser.COMMA);
						this.state = 98;
						this.keyValuePair();
						}
						}
					}
					this.state = 103;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
				}
				this.state = 106;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === STGParser.COMMA) {
					{
					this.state = 104;
					this.match(STGParser.COMMA);
					this.state = 105;
					this.defaultValuePair();
					}
				}

				}
				break;
			case STGParser.DEFAULT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 108;
				this.defaultValuePair();
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
	public keyValuePair(): KeyValuePairContext {
		let _localctx: KeyValuePairContext = new KeyValuePairContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, STGParser.RULE_keyValuePair);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 111;
			this.match(STGParser.STRING);
			this.state = 112;
			this.match(STGParser.COLON);
			this.state = 113;
			this.keyValue();
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
	public defaultValuePair(): DefaultValuePairContext {
		let _localctx: DefaultValuePairContext = new DefaultValuePairContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, STGParser.RULE_defaultValuePair);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 115;
			this.match(STGParser.DEFAULT);
			this.state = 116;
			this.match(STGParser.COLON);
			this.state = 117;
			this.keyValue();
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
	public keyValue(): KeyValueContext {
		let _localctx: KeyValueContext = new KeyValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, STGParser.RULE_keyValue);
		try {
			this.state = 128;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case STGParser.BIGSTRING:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 119;
				this.match(STGParser.BIGSTRING);
				}
				break;
			case STGParser.BIGSTRING_NO_NL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 120;
				this.match(STGParser.BIGSTRING_NO_NL);
				}
				break;
			case STGParser.ANON_TEMPLATE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 121;
				this.match(STGParser.ANON_TEMPLATE);
				}
				break;
			case STGParser.STRING:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 122;
				this.match(STGParser.STRING);
				}
				break;
			case STGParser.TRUE:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 123;
				this.match(STGParser.TRUE);
				}
				break;
			case STGParser.FALSE:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 124;
				this.match(STGParser.FALSE);
				}
				break;
			case STGParser.LBRACK:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 125;
				this.match(STGParser.LBRACK);
				this.state = 126;
				this.match(STGParser.RBRACK);
				}
				break;
			case STGParser.KEY:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 127;
				this.match(STGParser.KEY);
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

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03,\x85\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x03\x02\x05\x02" +
		"\x1A\n\x02\x03\x02\x05\x02\x1D\n\x02\x03\x02\x03\x02\x06\x02!\n\x02\r" +
		"\x02\x0E\x02\"\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x04\x03\x04\x06\x04.\n\x04\r\x04\x0E\x04/\x03\x05\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05;\n\x05\x03\x05" +
		"\x05\x05>\n\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05E\n\x05" +
		"\x03\x06\x03\x06\x03\x06\x07\x06J\n\x06\f\x06\x0E\x06M\v\x06\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x05\x07[\n\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\t" +
		"\x03\t\x03\t\x07\tf\n\t\f\t\x0E\ti\v\t\x03\t\x03\t\x05\tm\n\t\x03\t\x05" +
		"\tp\n\t\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x05\f\x83\n\f\x03\f\x02\x02\x02" +
		"\r\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14" +
		"\x02\x16\x02\x02\x03\x03\x02\n\f\x02\x91\x02\x19\x03\x02\x02\x02\x04&" +
		"\x03\x02\x02\x02\x06-\x03\x02\x02\x02\bD\x03\x02\x02\x02\nF\x03\x02\x02" +
		"\x02\fN\x03\x02\x02\x02\x0E\\\x03\x02\x02\x02\x10o\x03\x02\x02\x02\x12" +
		"q\x03\x02\x02\x02\x14u\x03\x02\x02\x02\x16\x82\x03\x02\x02\x02\x18\x1A" +
		"\x05\x04\x03\x02\x19\x18\x03\x02\x02\x02\x19\x1A\x03\x02\x02\x02\x1A\x1C" +
		"\x03\x02\x02\x02\x1B\x1D\x05\x06\x04\x02\x1C\x1B\x03\x02\x02\x02\x1C\x1D" +
		"\x03\x02\x02\x02\x1D \x03\x02\x02\x02\x1E!\x05\b\x05\x02\x1F!\x05\x0E" +
		"\b\x02 \x1E\x03\x02\x02\x02 \x1F\x03\x02\x02\x02!\"\x03\x02\x02\x02\"" +
		" \x03\x02\x02\x02\"#\x03\x02\x02\x02#$\x03\x02\x02\x02$%\x07\x02\x02\x03" +
		"%\x03\x03\x02\x02\x02&\'\x07\x1B\x02\x02\'(\x07\n\x02\x02()\x07\x11\x02" +
		"\x02)*\x07\n\x02\x02*\x05\x03\x02\x02\x02+,\x07\x1C\x02\x02,.\x07\n\x02" +
		"\x02-+\x03\x02\x02\x02./\x03\x02\x02\x02/-\x03\x02\x02\x02/0\x03\x02\x02" +
		"\x020\x07\x03\x02\x02\x0212\x07\x17\x02\x0223\x07\t\x02\x0234\x07\x10" +
		"\x02\x0245\x07\t\x02\x0256\x07\x13\x02\x026>\x07\x14\x02\x0278\x07\t\x02" +
		"\x028:\x07\x13\x02\x029;\x05\n\x06\x02:9\x03\x02\x02\x02:;\x03\x02\x02" +
		"\x02;<\x03\x02\x02\x02<>\x07\x14\x02\x02=1\x03\x02\x02\x02=7\x03\x02\x02" +
		"\x02>?\x03\x02\x02\x02?@\x07\x0E\x02\x02@E\t\x02\x02\x02AB\x07\t\x02\x02" +
		"BC\x07\x0E\x02\x02CE\x07\t\x02\x02D=\x03\x02\x02\x02DA\x03\x02\x02\x02" +
		"E\t\x03\x02\x02\x02FK\x05\f\x07\x02GH\x07\x11\x02\x02HJ\x05\f\x07\x02" +
		"IG\x03\x02\x02\x02JM\x03\x02\x02\x02KI\x03\x02\x02\x02KL\x03\x02\x02\x02" +
		"L\v\x03\x02\x02\x02MK\x03\x02\x02\x02NZ\x07\t\x02\x02OP\x07\x0F\x02\x02" +
		"P[\x07\n\x02\x02QR\x07\x0F\x02\x02R[\x07\r\x02\x02ST\x07\x0F\x02\x02T" +
		"[\x07\x18\x02\x02UV\x07\x0F\x02\x02V[\x07\x19\x02\x02WX\x07\x0F\x02\x02" +
		"XY\x07\x15\x02\x02Y[\x07\x16\x02\x02ZO\x03\x02\x02\x02ZQ\x03\x02\x02\x02" +
		"ZS\x03\x02\x02\x02ZU\x03\x02\x02\x02ZW\x03\x02\x02\x02Z[\x03\x02\x02\x02" +
		"[\r\x03\x02\x02\x02\\]\x07\t\x02\x02]^\x07\x0E\x02\x02^_\x07\x15\x02\x02" +
		"_`\x05\x10\t\x02`a\x07\x16\x02\x02a\x0F\x03\x02\x02\x02bg\x05\x12\n\x02" +
		"cd\x07\x11\x02\x02df\x05\x12\n\x02ec\x03\x02\x02\x02fi\x03\x02\x02\x02" +
		"ge\x03\x02\x02\x02gh\x03\x02\x02\x02hl\x03\x02\x02\x02ig\x03\x02\x02\x02" +
		"jk\x07\x11\x02\x02km\x05\x14\v\x02lj\x03\x02\x02\x02lm\x03\x02\x02\x02" +
		"mp\x03\x02\x02\x02np\x05\x14\v\x02ob\x03\x02\x02\x02on\x03\x02\x02\x02" +
		"p\x11\x03\x02\x02\x02qr\x07\n\x02\x02rs\x07\x12\x02\x02st\x05\x16\f\x02" +
		"t\x13\x03\x02\x02\x02uv\x07\x1D\x02\x02vw\x07\x12\x02\x02wx\x05\x16\f" +
		"\x02x\x15\x03\x02\x02\x02y\x83\x07\v\x02\x02z\x83\x07\f\x02\x02{\x83\x07" +
		"\r\x02\x02|\x83\x07\n\x02\x02}\x83\x07\x18\x02\x02~\x83\x07\x19\x02\x02" +
		"\x7F\x80\x07\x15\x02\x02\x80\x83\x07\x16\x02\x02\x81\x83\x07\x1E\x02\x02" +
		"\x82y\x03\x02\x02\x02\x82z\x03\x02\x02\x02\x82{\x03\x02\x02\x02\x82|\x03" +
		"\x02\x02\x02\x82}\x03\x02\x02\x02\x82~\x03\x02\x02\x02\x82\x7F\x03\x02" +
		"\x02\x02\x82\x81\x03\x02\x02\x02\x83\x17\x03\x02\x02\x02\x10\x19\x1C " +
		"\"/:=DKZglo\x82";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!STGParser.__ATN) {
			STGParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(STGParser._serializedATN));
		}

		return STGParser.__ATN;
	}

}

export class GroupContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(STGParser.EOF, 0); }
	public delimiters(): DelimitersContext | undefined {
		return this.tryGetRuleContext(0, DelimitersContext);
	}
	public imports(): ImportsContext | undefined {
		return this.tryGetRuleContext(0, ImportsContext);
	}
	public template(): TemplateContext[];
	public template(i: number): TemplateContext;
	public template(i?: number): TemplateContext | TemplateContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TemplateContext);
		} else {
			return this.getRuleContext(i, TemplateContext);
		}
	}
	public dict(): DictContext[];
	public dict(i: number): DictContext;
	public dict(i?: number): DictContext | DictContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DictContext);
		} else {
			return this.getRuleContext(i, DictContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return STGParser.RULE_group; }
	// @Override
	public enterRule(listener: STGParserListener): void {
		if (listener.enterGroup) {
			listener.enterGroup(this);
		}
	}
	// @Override
	public exitRule(listener: STGParserListener): void {
		if (listener.exitGroup) {
			listener.exitGroup(this);
		}
	}
}


export class DelimitersContext extends ParserRuleContext {
	public DELIMITERS(): TerminalNode { return this.getToken(STGParser.DELIMITERS, 0); }
	public STRING(): TerminalNode[];
	public STRING(i: number): TerminalNode;
	public STRING(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(STGParser.STRING);
		} else {
			return this.getToken(STGParser.STRING, i);
		}
	}
	public COMMA(): TerminalNode { return this.getToken(STGParser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return STGParser.RULE_delimiters; }
	// @Override
	public enterRule(listener: STGParserListener): void {
		if (listener.enterDelimiters) {
			listener.enterDelimiters(this);
		}
	}
	// @Override
	public exitRule(listener: STGParserListener): void {
		if (listener.exitDelimiters) {
			listener.exitDelimiters(this);
		}
	}
}


export class ImportsContext extends ParserRuleContext {
	public IMPORT(): TerminalNode[];
	public IMPORT(i: number): TerminalNode;
	public IMPORT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(STGParser.IMPORT);
		} else {
			return this.getToken(STGParser.IMPORT, i);
		}
	}
	public STRING(): TerminalNode[];
	public STRING(i: number): TerminalNode;
	public STRING(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(STGParser.STRING);
		} else {
			return this.getToken(STGParser.STRING, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return STGParser.RULE_imports; }
	// @Override
	public enterRule(listener: STGParserListener): void {
		if (listener.enterImports) {
			listener.enterImports(this);
		}
	}
	// @Override
	public exitRule(listener: STGParserListener): void {
		if (listener.exitImports) {
			listener.exitImports(this);
		}
	}
}


export class TemplateContext extends ParserRuleContext {
	public TMPL_ASSIGN(): TerminalNode { return this.getToken(STGParser.TMPL_ASSIGN, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(STGParser.STRING, 0); }
	public BIGSTRING(): TerminalNode | undefined { return this.tryGetToken(STGParser.BIGSTRING, 0); }
	public BIGSTRING_NO_NL(): TerminalNode | undefined { return this.tryGetToken(STGParser.BIGSTRING_NO_NL, 0); }
	public AT(): TerminalNode | undefined { return this.tryGetToken(STGParser.AT, 0); }
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(STGParser.ID);
		} else {
			return this.getToken(STGParser.ID, i);
		}
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(STGParser.DOT, 0); }
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(STGParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(STGParser.RPAREN, 0); }
	public formalArgs(): FormalArgsContext | undefined {
		return this.tryGetRuleContext(0, FormalArgsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return STGParser.RULE_template; }
	// @Override
	public enterRule(listener: STGParserListener): void {
		if (listener.enterTemplate) {
			listener.enterTemplate(this);
		}
	}
	// @Override
	public exitRule(listener: STGParserListener): void {
		if (listener.exitTemplate) {
			listener.exitTemplate(this);
		}
	}
}


export class FormalArgsContext extends ParserRuleContext {
	public formalArg(): FormalArgContext[];
	public formalArg(i: number): FormalArgContext;
	public formalArg(i?: number): FormalArgContext | FormalArgContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FormalArgContext);
		} else {
			return this.getRuleContext(i, FormalArgContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(STGParser.COMMA);
		} else {
			return this.getToken(STGParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return STGParser.RULE_formalArgs; }
	// @Override
	public enterRule(listener: STGParserListener): void {
		if (listener.enterFormalArgs) {
			listener.enterFormalArgs(this);
		}
	}
	// @Override
	public exitRule(listener: STGParserListener): void {
		if (listener.exitFormalArgs) {
			listener.exitFormalArgs(this);
		}
	}
}


export class FormalArgContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(STGParser.ID, 0); }
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(STGParser.ASSIGN, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(STGParser.STRING, 0); }
	public ANON_TEMPLATE(): TerminalNode | undefined { return this.tryGetToken(STGParser.ANON_TEMPLATE, 0); }
	public TRUE(): TerminalNode | undefined { return this.tryGetToken(STGParser.TRUE, 0); }
	public FALSE(): TerminalNode | undefined { return this.tryGetToken(STGParser.FALSE, 0); }
	public LBRACK(): TerminalNode | undefined { return this.tryGetToken(STGParser.LBRACK, 0); }
	public RBRACK(): TerminalNode | undefined { return this.tryGetToken(STGParser.RBRACK, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return STGParser.RULE_formalArg; }
	// @Override
	public enterRule(listener: STGParserListener): void {
		if (listener.enterFormalArg) {
			listener.enterFormalArg(this);
		}
	}
	// @Override
	public exitRule(listener: STGParserListener): void {
		if (listener.exitFormalArg) {
			listener.exitFormalArg(this);
		}
	}
}


export class DictContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(STGParser.ID, 0); }
	public TMPL_ASSIGN(): TerminalNode { return this.getToken(STGParser.TMPL_ASSIGN, 0); }
	public LBRACK(): TerminalNode { return this.getToken(STGParser.LBRACK, 0); }
	public dictPairs(): DictPairsContext {
		return this.getRuleContext(0, DictPairsContext);
	}
	public RBRACK(): TerminalNode { return this.getToken(STGParser.RBRACK, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return STGParser.RULE_dict; }
	// @Override
	public enterRule(listener: STGParserListener): void {
		if (listener.enterDict) {
			listener.enterDict(this);
		}
	}
	// @Override
	public exitRule(listener: STGParserListener): void {
		if (listener.exitDict) {
			listener.exitDict(this);
		}
	}
}


export class DictPairsContext extends ParserRuleContext {
	public keyValuePair(): KeyValuePairContext[];
	public keyValuePair(i: number): KeyValuePairContext;
	public keyValuePair(i?: number): KeyValuePairContext | KeyValuePairContext[] {
		if (i === undefined) {
			return this.getRuleContexts(KeyValuePairContext);
		} else {
			return this.getRuleContext(i, KeyValuePairContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(STGParser.COMMA);
		} else {
			return this.getToken(STGParser.COMMA, i);
		}
	}
	public defaultValuePair(): DefaultValuePairContext | undefined {
		return this.tryGetRuleContext(0, DefaultValuePairContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return STGParser.RULE_dictPairs; }
	// @Override
	public enterRule(listener: STGParserListener): void {
		if (listener.enterDictPairs) {
			listener.enterDictPairs(this);
		}
	}
	// @Override
	public exitRule(listener: STGParserListener): void {
		if (listener.exitDictPairs) {
			listener.exitDictPairs(this);
		}
	}
}


export class KeyValuePairContext extends ParserRuleContext {
	public STRING(): TerminalNode { return this.getToken(STGParser.STRING, 0); }
	public COLON(): TerminalNode { return this.getToken(STGParser.COLON, 0); }
	public keyValue(): KeyValueContext {
		return this.getRuleContext(0, KeyValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return STGParser.RULE_keyValuePair; }
	// @Override
	public enterRule(listener: STGParserListener): void {
		if (listener.enterKeyValuePair) {
			listener.enterKeyValuePair(this);
		}
	}
	// @Override
	public exitRule(listener: STGParserListener): void {
		if (listener.exitKeyValuePair) {
			listener.exitKeyValuePair(this);
		}
	}
}


export class DefaultValuePairContext extends ParserRuleContext {
	public DEFAULT(): TerminalNode { return this.getToken(STGParser.DEFAULT, 0); }
	public COLON(): TerminalNode { return this.getToken(STGParser.COLON, 0); }
	public keyValue(): KeyValueContext {
		return this.getRuleContext(0, KeyValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return STGParser.RULE_defaultValuePair; }
	// @Override
	public enterRule(listener: STGParserListener): void {
		if (listener.enterDefaultValuePair) {
			listener.enterDefaultValuePair(this);
		}
	}
	// @Override
	public exitRule(listener: STGParserListener): void {
		if (listener.exitDefaultValuePair) {
			listener.exitDefaultValuePair(this);
		}
	}
}


export class KeyValueContext extends ParserRuleContext {
	public BIGSTRING(): TerminalNode | undefined { return this.tryGetToken(STGParser.BIGSTRING, 0); }
	public BIGSTRING_NO_NL(): TerminalNode | undefined { return this.tryGetToken(STGParser.BIGSTRING_NO_NL, 0); }
	public ANON_TEMPLATE(): TerminalNode | undefined { return this.tryGetToken(STGParser.ANON_TEMPLATE, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(STGParser.STRING, 0); }
	public TRUE(): TerminalNode | undefined { return this.tryGetToken(STGParser.TRUE, 0); }
	public FALSE(): TerminalNode | undefined { return this.tryGetToken(STGParser.FALSE, 0); }
	public LBRACK(): TerminalNode | undefined { return this.tryGetToken(STGParser.LBRACK, 0); }
	public RBRACK(): TerminalNode | undefined { return this.tryGetToken(STGParser.RBRACK, 0); }
	public KEY(): TerminalNode | undefined { return this.tryGetToken(STGParser.KEY, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return STGParser.RULE_keyValue; }
	// @Override
	public enterRule(listener: STGParserListener): void {
		if (listener.enterKeyValue) {
			listener.enterKeyValue(this);
		}
	}
	// @Override
	public exitRule(listener: STGParserListener): void {
		if (listener.exitKeyValue) {
			listener.exitKeyValue(this);
		}
	}
}


