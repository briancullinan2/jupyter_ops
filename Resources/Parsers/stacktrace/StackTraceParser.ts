// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/stacktrace/StackTrace.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { StackTraceListener } from "./StackTraceListener";
import { StackTraceVisitor } from "./StackTraceVisitor";


export class StackTraceParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly Number = 5;
	public static readonly JavaWord = 6;
	public static readonly DOT = 7;
	public static readonly AT = 8;
	public static readonly CAUSED_BY = 9;
	public static readonly MORE_ = 10;
	public static readonly ELLIPSIS = 11;
	public static readonly COLON = 12;
	public static readonly NATIVE_METHOD = 13;
	public static readonly UNKNOWN_SOURCE = 14;
	public static readonly INIT = 15;
	public static readonly NonCapitalLetter = 16;
	public static readonly CapitalLetter = 17;
	public static readonly Symbol = 18;
	public static readonly Digit = 19;
	public static readonly WS = 20;
	public static readonly RULE_startRule = 0;
	public static readonly RULE_stackTrace = 1;
	public static readonly RULE_stackTraceLine = 2;
	public static readonly RULE_atLine = 3;
	public static readonly RULE_causedByLine = 4;
	public static readonly RULE_ellipsisLine = 5;
	public static readonly RULE_messageLine = 6;
	public static readonly RULE_qualifiedClass = 7;
	public static readonly RULE_innerClassName = 8;
	public static readonly RULE_classFile = 9;
	public static readonly RULE_qualifiedMethod = 10;
	public static readonly RULE_constructor = 11;
	public static readonly RULE_methodName = 12;
	public static readonly RULE_packagePath = 13;
	public static readonly RULE_className = 14;
	public static readonly RULE_identifier = 15;
	public static readonly RULE_message = 16;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"startRule", "stackTrace", "stackTraceLine", "atLine", "causedByLine", 
		"ellipsisLine", "messageLine", "qualifiedClass", "innerClassName", "classFile", 
		"qualifiedMethod", "constructor", "methodName", "packagePath", "className", 
		"identifier", "message",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'('", "')'", "'$'", "'.java'", undefined, undefined, "'.'", 
		"'at'", "'Caused by:'", "'more'", "'...'", "':'", "'Native Method'", "'Unknown Source'", 
		"'<init>'", undefined, undefined, "'_'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, "Number", "JavaWord", 
		"DOT", "AT", "CAUSED_BY", "MORE_", "ELLIPSIS", "COLON", "NATIVE_METHOD", 
		"UNKNOWN_SOURCE", "INIT", "NonCapitalLetter", "CapitalLetter", "Symbol", 
		"Digit", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(StackTraceParser._LITERAL_NAMES, StackTraceParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return StackTraceParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "StackTrace.g4"; }

	// @Override
	public get ruleNames(): string[] { return StackTraceParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return StackTraceParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(StackTraceParser._ATN, this);
	}
	// @RuleVersion(0)
	public startRule(): StartRuleContext {
		let _localctx: StartRuleContext = new StartRuleContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, StackTraceParser.RULE_startRule);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 34;
			this.stackTrace();
			this.state = 35;
			this.match(StackTraceParser.EOF);
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
	public stackTrace(): StackTraceContext {
		let _localctx: StackTraceContext = new StackTraceContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, StackTraceParser.RULE_stackTrace);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 38;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 37;
				this.messageLine();
				}
				}
				this.state = 40;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === StackTraceParser.JavaWord);
			this.state = 45;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === StackTraceParser.AT || _la === StackTraceParser.ELLIPSIS) {
				{
				{
				this.state = 42;
				this.stackTraceLine();
				}
				}
				this.state = 47;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 49;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === StackTraceParser.CAUSED_BY) {
				{
				this.state = 48;
				this.causedByLine();
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
	public stackTraceLine(): StackTraceLineContext {
		let _localctx: StackTraceLineContext = new StackTraceLineContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, StackTraceParser.RULE_stackTraceLine);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 53;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case StackTraceParser.AT:
				{
				this.state = 51;
				this.atLine();
				}
				break;
			case StackTraceParser.ELLIPSIS:
				{
				this.state = 52;
				this.ellipsisLine();
				}
				break;
			default:
				throw new NoViableAltException(this);
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
	public atLine(): AtLineContext {
		let _localctx: AtLineContext = new AtLineContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, StackTraceParser.RULE_atLine);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 55;
			this.match(StackTraceParser.AT);
			this.state = 56;
			this.qualifiedMethod();
			this.state = 57;
			this.match(StackTraceParser.T__0);
			this.state = 58;
			this.classFile();
			this.state = 61;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === StackTraceParser.COLON) {
				{
				this.state = 59;
				this.match(StackTraceParser.COLON);
				this.state = 60;
				this.match(StackTraceParser.Number);
				}
			}

			this.state = 63;
			this.match(StackTraceParser.T__1);
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
	public causedByLine(): CausedByLineContext {
		let _localctx: CausedByLineContext = new CausedByLineContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, StackTraceParser.RULE_causedByLine);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 65;
			this.match(StackTraceParser.CAUSED_BY);
			this.state = 66;
			this.stackTrace();
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
	public ellipsisLine(): EllipsisLineContext {
		let _localctx: EllipsisLineContext = new EllipsisLineContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, StackTraceParser.RULE_ellipsisLine);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 68;
			this.match(StackTraceParser.ELLIPSIS);
			this.state = 69;
			this.match(StackTraceParser.Number);
			this.state = 70;
			this.match(StackTraceParser.MORE_);
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
	public messageLine(): MessageLineContext {
		let _localctx: MessageLineContext = new MessageLineContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, StackTraceParser.RULE_messageLine);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 72;
			this.qualifiedClass();
			this.state = 74;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === StackTraceParser.COLON) {
				{
				this.state = 73;
				this.message();
				}
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
	public qualifiedClass(): QualifiedClassContext {
		let _localctx: QualifiedClassContext = new QualifiedClassContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, StackTraceParser.RULE_qualifiedClass);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 77;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				{
				this.state = 76;
				this.packagePath();
				}
				break;
			}
			this.state = 79;
			this.className();
			this.state = 83;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === StackTraceParser.T__2) {
				{
				{
				this.state = 80;
				this.innerClassName();
				}
				}
				this.state = 85;
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
	public innerClassName(): InnerClassNameContext {
		let _localctx: InnerClassNameContext = new InnerClassNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, StackTraceParser.RULE_innerClassName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 86;
			this.match(StackTraceParser.T__2);
			this.state = 87;
			this.className();
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
	public classFile(): ClassFileContext {
		let _localctx: ClassFileContext = new ClassFileContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, StackTraceParser.RULE_classFile);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 94;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case StackTraceParser.JavaWord:
				{
				this.state = 89;
				this.identifier();
				this.state = 90;
				this.match(StackTraceParser.T__3);
				}
				break;
			case StackTraceParser.NATIVE_METHOD:
				{
				this.state = 92;
				this.match(StackTraceParser.NATIVE_METHOD);
				}
				break;
			case StackTraceParser.UNKNOWN_SOURCE:
				{
				this.state = 93;
				this.match(StackTraceParser.UNKNOWN_SOURCE);
				}
				break;
			default:
				throw new NoViableAltException(this);
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
	public qualifiedMethod(): QualifiedMethodContext {
		let _localctx: QualifiedMethodContext = new QualifiedMethodContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, StackTraceParser.RULE_qualifiedMethod);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 96;
			this.qualifiedClass();
			this.state = 97;
			this.match(StackTraceParser.DOT);
			this.state = 100;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case StackTraceParser.JavaWord:
				{
				this.state = 98;
				this.methodName();
				}
				break;
			case StackTraceParser.INIT:
				{
				this.state = 99;
				this.constructor();
				}
				break;
			case StackTraceParser.T__0:
				break;
			default:
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
	public constructor(): ConstructorContext {
		let _localctx: ConstructorContext = new ConstructorContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, StackTraceParser.RULE_constructor);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 102;
			this.match(StackTraceParser.INIT);
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
	public methodName(): MethodNameContext {
		let _localctx: MethodNameContext = new MethodNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, StackTraceParser.RULE_methodName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 104;
			this.identifier();
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
	public packagePath(): PackagePathContext {
		let _localctx: PackagePathContext = new PackagePathContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, StackTraceParser.RULE_packagePath);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 109;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 106;
					this.identifier();
					this.state = 107;
					this.match(StackTraceParser.DOT);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 111;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
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
	public className(): ClassNameContext {
		let _localctx: ClassNameContext = new ClassNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, StackTraceParser.RULE_className);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 113;
			this.match(StackTraceParser.JavaWord);
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
	public identifier(): IdentifierContext {
		let _localctx: IdentifierContext = new IdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, StackTraceParser.RULE_identifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 115;
			this.match(StackTraceParser.JavaWord);
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
		this.enterRule(_localctx, 32, StackTraceParser.RULE_message);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 117;
			this.match(StackTraceParser.COLON);
			this.state = 121;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					{
					this.state = 118;
					this.matchWildcard();
					}
					}
				}
				this.state = 123;
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

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x16\x7F\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x03" +
		"\x02\x03\x02\x03\x02\x03\x03\x06\x03)\n\x03\r\x03\x0E\x03*\x03\x03\x07" +
		"\x03.\n\x03\f\x03\x0E\x031\v\x03\x03\x03\x05\x034\n\x03\x03\x04\x03\x04" +
		"\x05\x048\n\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05" +
		"@\n\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\b\x03\b\x05\bM\n\b\x03\t\x05\tP\n\t\x03\t\x03\t\x07\tT\n" +
		"\t\f\t\x0E\tW\v\t\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x05" +
		"\va\n\v\x03\f\x03\f\x03\f\x03\f\x05\fg\n\f\x03\r\x03\r\x03\x0E\x03\x0E" +
		"\x03\x0F\x03\x0F\x03\x0F\x06\x0Fp\n\x0F\r\x0F\x0E\x0Fq\x03\x10\x03\x10" +
		"\x03\x11\x03\x11\x03\x12\x03\x12\x07\x12z\n\x12\f\x12\x0E\x12}\v\x12\x03" +
		"\x12\x03{\x02\x02\x13\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02" +
		"\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02" +
		"\"\x02\x02\x02\x02{\x02$\x03\x02\x02\x02\x04(\x03\x02\x02\x02\x067\x03" +
		"\x02\x02\x02\b9\x03\x02\x02\x02\nC\x03\x02\x02\x02\fF\x03\x02\x02\x02" +
		"\x0EJ\x03\x02\x02\x02\x10O\x03\x02\x02\x02\x12X\x03\x02\x02\x02\x14`\x03" +
		"\x02\x02\x02\x16b\x03\x02\x02\x02\x18h\x03\x02\x02\x02\x1Aj\x03\x02\x02" +
		"\x02\x1Co\x03\x02\x02\x02\x1Es\x03\x02\x02\x02 u\x03\x02\x02\x02\"w\x03" +
		"\x02\x02\x02$%\x05\x04\x03\x02%&\x07\x02\x02\x03&\x03\x03\x02\x02\x02" +
		"\')\x05\x0E\b\x02(\'\x03\x02\x02\x02)*\x03\x02\x02\x02*(\x03\x02\x02\x02" +
		"*+\x03\x02\x02\x02+/\x03\x02\x02\x02,.\x05\x06\x04\x02-,\x03\x02\x02\x02" +
		".1\x03\x02\x02\x02/-\x03\x02\x02\x02/0\x03\x02\x02\x0203\x03\x02\x02\x02" +
		"1/\x03\x02\x02\x0224\x05\n\x06\x0232\x03\x02\x02\x0234\x03\x02\x02\x02" +
		"4\x05\x03\x02\x02\x0258\x05\b\x05\x0268\x05\f\x07\x0275\x03\x02\x02\x02" +
		"76\x03\x02\x02\x028\x07\x03\x02\x02\x029:\x07\n\x02\x02:;\x05\x16\f\x02" +
		";<\x07\x03\x02\x02<?\x05\x14\v\x02=>\x07\x0E\x02\x02>@\x07\x07\x02\x02" +
		"?=\x03\x02\x02\x02?@\x03\x02\x02\x02@A\x03\x02\x02\x02AB\x07\x04\x02\x02" +
		"B\t\x03\x02\x02\x02CD\x07\v\x02\x02DE\x05\x04\x03\x02E\v\x03\x02\x02\x02" +
		"FG\x07\r\x02\x02GH\x07\x07\x02\x02HI\x07\f\x02\x02I\r\x03\x02\x02\x02" +
		"JL\x05\x10\t\x02KM\x05\"\x12\x02LK\x03\x02\x02\x02LM\x03\x02\x02\x02M" +
		"\x0F\x03\x02\x02\x02NP\x05\x1C\x0F\x02ON\x03\x02\x02\x02OP\x03\x02\x02" +
		"\x02PQ\x03\x02\x02\x02QU\x05\x1E\x10\x02RT\x05\x12\n\x02SR\x03\x02\x02" +
		"\x02TW\x03\x02\x02\x02US\x03\x02\x02\x02UV\x03\x02\x02\x02V\x11\x03\x02" +
		"\x02\x02WU\x03\x02\x02\x02XY\x07\x05\x02\x02YZ\x05\x1E\x10\x02Z\x13\x03" +
		"\x02\x02\x02[\\\x05 \x11\x02\\]\x07\x06\x02\x02]a\x03\x02\x02\x02^a\x07" +
		"\x0F\x02\x02_a\x07\x10\x02\x02`[\x03\x02\x02\x02`^\x03\x02\x02\x02`_\x03" +
		"\x02\x02\x02a\x15\x03\x02\x02\x02bc\x05\x10\t\x02cf\x07\t\x02\x02dg\x05" +
		"\x1A\x0E\x02eg\x05\x18\r\x02fd\x03\x02\x02\x02fe\x03\x02\x02\x02fg\x03" +
		"\x02\x02\x02g\x17\x03\x02\x02\x02hi\x07\x11\x02\x02i\x19\x03\x02\x02\x02" +
		"jk\x05 \x11\x02k\x1B\x03\x02\x02\x02lm\x05 \x11\x02mn\x07\t\x02\x02np" +
		"\x03\x02\x02\x02ol\x03\x02\x02\x02pq\x03\x02\x02\x02qo\x03\x02\x02\x02" +
		"qr\x03\x02\x02\x02r\x1D\x03\x02\x02\x02st\x07\b\x02\x02t\x1F\x03\x02\x02" +
		"\x02uv\x07\b\x02\x02v!\x03\x02\x02\x02w{\x07\x0E\x02\x02xz\v\x02\x02\x02" +
		"yx\x03\x02\x02\x02z}\x03\x02\x02\x02{|\x03\x02\x02\x02{y\x03\x02\x02\x02" +
		"|#\x03\x02\x02\x02}{\x03\x02\x02\x02\x0E*/37?LOU`fq{";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!StackTraceParser.__ATN) {
			StackTraceParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(StackTraceParser._serializedATN));
		}

		return StackTraceParser.__ATN;
	}

}

export class StartRuleContext extends ParserRuleContext {
	public stackTrace(): StackTraceContext {
		return this.getRuleContext(0, StackTraceContext);
	}
	public EOF(): TerminalNode { return this.getToken(StackTraceParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return StackTraceParser.RULE_startRule; }
	// @Override
	public enterRule(listener: StackTraceListener): void {
		if (listener.enterStartRule) {
			listener.enterStartRule(this);
		}
	}
	// @Override
	public exitRule(listener: StackTraceListener): void {
		if (listener.exitStartRule) {
			listener.exitStartRule(this);
		}
	}
	// @Override
	public accept<Result>(visitor: StackTraceVisitor<Result>): Result {
		if (visitor.visitStartRule) {
			return visitor.visitStartRule(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StackTraceContext extends ParserRuleContext {
	public messageLine(): MessageLineContext[];
	public messageLine(i: number): MessageLineContext;
	public messageLine(i?: number): MessageLineContext | MessageLineContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MessageLineContext);
		} else {
			return this.getRuleContext(i, MessageLineContext);
		}
	}
	public stackTraceLine(): StackTraceLineContext[];
	public stackTraceLine(i: number): StackTraceLineContext;
	public stackTraceLine(i?: number): StackTraceLineContext | StackTraceLineContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StackTraceLineContext);
		} else {
			return this.getRuleContext(i, StackTraceLineContext);
		}
	}
	public causedByLine(): CausedByLineContext | undefined {
		return this.tryGetRuleContext(0, CausedByLineContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return StackTraceParser.RULE_stackTrace; }
	// @Override
	public enterRule(listener: StackTraceListener): void {
		if (listener.enterStackTrace) {
			listener.enterStackTrace(this);
		}
	}
	// @Override
	public exitRule(listener: StackTraceListener): void {
		if (listener.exitStackTrace) {
			listener.exitStackTrace(this);
		}
	}
	// @Override
	public accept<Result>(visitor: StackTraceVisitor<Result>): Result {
		if (visitor.visitStackTrace) {
			return visitor.visitStackTrace(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StackTraceLineContext extends ParserRuleContext {
	public atLine(): AtLineContext | undefined {
		return this.tryGetRuleContext(0, AtLineContext);
	}
	public ellipsisLine(): EllipsisLineContext | undefined {
		return this.tryGetRuleContext(0, EllipsisLineContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return StackTraceParser.RULE_stackTraceLine; }
	// @Override
	public enterRule(listener: StackTraceListener): void {
		if (listener.enterStackTraceLine) {
			listener.enterStackTraceLine(this);
		}
	}
	// @Override
	public exitRule(listener: StackTraceListener): void {
		if (listener.exitStackTraceLine) {
			listener.exitStackTraceLine(this);
		}
	}
	// @Override
	public accept<Result>(visitor: StackTraceVisitor<Result>): Result {
		if (visitor.visitStackTraceLine) {
			return visitor.visitStackTraceLine(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AtLineContext extends ParserRuleContext {
	public AT(): TerminalNode { return this.getToken(StackTraceParser.AT, 0); }
	public qualifiedMethod(): QualifiedMethodContext {
		return this.getRuleContext(0, QualifiedMethodContext);
	}
	public classFile(): ClassFileContext {
		return this.getRuleContext(0, ClassFileContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(StackTraceParser.COLON, 0); }
	public Number(): TerminalNode | undefined { return this.tryGetToken(StackTraceParser.Number, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return StackTraceParser.RULE_atLine; }
	// @Override
	public enterRule(listener: StackTraceListener): void {
		if (listener.enterAtLine) {
			listener.enterAtLine(this);
		}
	}
	// @Override
	public exitRule(listener: StackTraceListener): void {
		if (listener.exitAtLine) {
			listener.exitAtLine(this);
		}
	}
	// @Override
	public accept<Result>(visitor: StackTraceVisitor<Result>): Result {
		if (visitor.visitAtLine) {
			return visitor.visitAtLine(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CausedByLineContext extends ParserRuleContext {
	public CAUSED_BY(): TerminalNode { return this.getToken(StackTraceParser.CAUSED_BY, 0); }
	public stackTrace(): StackTraceContext {
		return this.getRuleContext(0, StackTraceContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return StackTraceParser.RULE_causedByLine; }
	// @Override
	public enterRule(listener: StackTraceListener): void {
		if (listener.enterCausedByLine) {
			listener.enterCausedByLine(this);
		}
	}
	// @Override
	public exitRule(listener: StackTraceListener): void {
		if (listener.exitCausedByLine) {
			listener.exitCausedByLine(this);
		}
	}
	// @Override
	public accept<Result>(visitor: StackTraceVisitor<Result>): Result {
		if (visitor.visitCausedByLine) {
			return visitor.visitCausedByLine(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EllipsisLineContext extends ParserRuleContext {
	public ELLIPSIS(): TerminalNode { return this.getToken(StackTraceParser.ELLIPSIS, 0); }
	public Number(): TerminalNode { return this.getToken(StackTraceParser.Number, 0); }
	public MORE_(): TerminalNode { return this.getToken(StackTraceParser.MORE_, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return StackTraceParser.RULE_ellipsisLine; }
	// @Override
	public enterRule(listener: StackTraceListener): void {
		if (listener.enterEllipsisLine) {
			listener.enterEllipsisLine(this);
		}
	}
	// @Override
	public exitRule(listener: StackTraceListener): void {
		if (listener.exitEllipsisLine) {
			listener.exitEllipsisLine(this);
		}
	}
	// @Override
	public accept<Result>(visitor: StackTraceVisitor<Result>): Result {
		if (visitor.visitEllipsisLine) {
			return visitor.visitEllipsisLine(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MessageLineContext extends ParserRuleContext {
	public qualifiedClass(): QualifiedClassContext | undefined {
		return this.tryGetRuleContext(0, QualifiedClassContext);
	}
	public message(): MessageContext | undefined {
		return this.tryGetRuleContext(0, MessageContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return StackTraceParser.RULE_messageLine; }
	// @Override
	public enterRule(listener: StackTraceListener): void {
		if (listener.enterMessageLine) {
			listener.enterMessageLine(this);
		}
	}
	// @Override
	public exitRule(listener: StackTraceListener): void {
		if (listener.exitMessageLine) {
			listener.exitMessageLine(this);
		}
	}
	// @Override
	public accept<Result>(visitor: StackTraceVisitor<Result>): Result {
		if (visitor.visitMessageLine) {
			return visitor.visitMessageLine(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QualifiedClassContext extends ParserRuleContext {
	public className(): ClassNameContext {
		return this.getRuleContext(0, ClassNameContext);
	}
	public packagePath(): PackagePathContext | undefined {
		return this.tryGetRuleContext(0, PackagePathContext);
	}
	public innerClassName(): InnerClassNameContext[];
	public innerClassName(i: number): InnerClassNameContext;
	public innerClassName(i?: number): InnerClassNameContext | InnerClassNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InnerClassNameContext);
		} else {
			return this.getRuleContext(i, InnerClassNameContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return StackTraceParser.RULE_qualifiedClass; }
	// @Override
	public enterRule(listener: StackTraceListener): void {
		if (listener.enterQualifiedClass) {
			listener.enterQualifiedClass(this);
		}
	}
	// @Override
	public exitRule(listener: StackTraceListener): void {
		if (listener.exitQualifiedClass) {
			listener.exitQualifiedClass(this);
		}
	}
	// @Override
	public accept<Result>(visitor: StackTraceVisitor<Result>): Result {
		if (visitor.visitQualifiedClass) {
			return visitor.visitQualifiedClass(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InnerClassNameContext extends ParserRuleContext {
	public className(): ClassNameContext | undefined {
		return this.tryGetRuleContext(0, ClassNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return StackTraceParser.RULE_innerClassName; }
	// @Override
	public enterRule(listener: StackTraceListener): void {
		if (listener.enterInnerClassName) {
			listener.enterInnerClassName(this);
		}
	}
	// @Override
	public exitRule(listener: StackTraceListener): void {
		if (listener.exitInnerClassName) {
			listener.exitInnerClassName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: StackTraceVisitor<Result>): Result {
		if (visitor.visitInnerClassName) {
			return visitor.visitInnerClassName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassFileContext extends ParserRuleContext {
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public NATIVE_METHOD(): TerminalNode | undefined { return this.tryGetToken(StackTraceParser.NATIVE_METHOD, 0); }
	public UNKNOWN_SOURCE(): TerminalNode | undefined { return this.tryGetToken(StackTraceParser.UNKNOWN_SOURCE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return StackTraceParser.RULE_classFile; }
	// @Override
	public enterRule(listener: StackTraceListener): void {
		if (listener.enterClassFile) {
			listener.enterClassFile(this);
		}
	}
	// @Override
	public exitRule(listener: StackTraceListener): void {
		if (listener.exitClassFile) {
			listener.exitClassFile(this);
		}
	}
	// @Override
	public accept<Result>(visitor: StackTraceVisitor<Result>): Result {
		if (visitor.visitClassFile) {
			return visitor.visitClassFile(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QualifiedMethodContext extends ParserRuleContext {
	public qualifiedClass(): QualifiedClassContext {
		return this.getRuleContext(0, QualifiedClassContext);
	}
	public DOT(): TerminalNode { return this.getToken(StackTraceParser.DOT, 0); }
	public methodName(): MethodNameContext | undefined {
		return this.tryGetRuleContext(0, MethodNameContext);
	}
	public constructor(): ConstructorContext | undefined {
		return this.tryGetRuleContext(0, ConstructorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return StackTraceParser.RULE_qualifiedMethod; }
	// @Override
	public enterRule(listener: StackTraceListener): void {
		if (listener.enterQualifiedMethod) {
			listener.enterQualifiedMethod(this);
		}
	}
	// @Override
	public exitRule(listener: StackTraceListener): void {
		if (listener.exitQualifiedMethod) {
			listener.exitQualifiedMethod(this);
		}
	}
	// @Override
	public accept<Result>(visitor: StackTraceVisitor<Result>): Result {
		if (visitor.visitQualifiedMethod) {
			return visitor.visitQualifiedMethod(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstructorContext extends ParserRuleContext {
	public INIT(): TerminalNode { return this.getToken(StackTraceParser.INIT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return StackTraceParser.RULE_constructor; }
	// @Override
	public enterRule(listener: StackTraceListener): void {
		if (listener.enterConstructor) {
			listener.enterConstructor(this);
		}
	}
	// @Override
	public exitRule(listener: StackTraceListener): void {
		if (listener.exitConstructor) {
			listener.exitConstructor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: StackTraceVisitor<Result>): Result {
		if (visitor.visitConstructor) {
			return visitor.visitConstructor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodNameContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return StackTraceParser.RULE_methodName; }
	// @Override
	public enterRule(listener: StackTraceListener): void {
		if (listener.enterMethodName) {
			listener.enterMethodName(this);
		}
	}
	// @Override
	public exitRule(listener: StackTraceListener): void {
		if (listener.exitMethodName) {
			listener.exitMethodName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: StackTraceVisitor<Result>): Result {
		if (visitor.visitMethodName) {
			return visitor.visitMethodName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PackagePathContext extends ParserRuleContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(StackTraceParser.DOT);
		} else {
			return this.getToken(StackTraceParser.DOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return StackTraceParser.RULE_packagePath; }
	// @Override
	public enterRule(listener: StackTraceListener): void {
		if (listener.enterPackagePath) {
			listener.enterPackagePath(this);
		}
	}
	// @Override
	public exitRule(listener: StackTraceListener): void {
		if (listener.exitPackagePath) {
			listener.exitPackagePath(this);
		}
	}
	// @Override
	public accept<Result>(visitor: StackTraceVisitor<Result>): Result {
		if (visitor.visitPackagePath) {
			return visitor.visitPackagePath(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassNameContext extends ParserRuleContext {
	public JavaWord(): TerminalNode { return this.getToken(StackTraceParser.JavaWord, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return StackTraceParser.RULE_className; }
	// @Override
	public enterRule(listener: StackTraceListener): void {
		if (listener.enterClassName) {
			listener.enterClassName(this);
		}
	}
	// @Override
	public exitRule(listener: StackTraceListener): void {
		if (listener.exitClassName) {
			listener.exitClassName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: StackTraceVisitor<Result>): Result {
		if (visitor.visitClassName) {
			return visitor.visitClassName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierContext extends ParserRuleContext {
	public JavaWord(): TerminalNode { return this.getToken(StackTraceParser.JavaWord, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return StackTraceParser.RULE_identifier; }
	// @Override
	public enterRule(listener: StackTraceListener): void {
		if (listener.enterIdentifier) {
			listener.enterIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: StackTraceListener): void {
		if (listener.exitIdentifier) {
			listener.exitIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: StackTraceVisitor<Result>): Result {
		if (visitor.visitIdentifier) {
			return visitor.visitIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MessageContext extends ParserRuleContext {
	public COLON(): TerminalNode { return this.getToken(StackTraceParser.COLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return StackTraceParser.RULE_message; }
	// @Override
	public enterRule(listener: StackTraceListener): void {
		if (listener.enterMessage) {
			listener.enterMessage(this);
		}
	}
	// @Override
	public exitRule(listener: StackTraceListener): void {
		if (listener.exitMessage) {
			listener.exitMessage(this);
		}
	}
	// @Override
	public accept<Result>(visitor: StackTraceVisitor<Result>): Result {
		if (visitor.visitMessage) {
			return visitor.visitMessage(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


