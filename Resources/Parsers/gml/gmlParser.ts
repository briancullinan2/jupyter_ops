// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/gml/gml.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { gmlListener } from "./gmlListener";
import { gmlVisitor } from "./gmlVisitor";


export class gmlParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly STRINGLITERAL = 3;
	public static readonly REAL = 4;
	public static readonly SIGN = 5;
	public static readonly DIGIT = 6;
	public static readonly MANTISSA = 7;
	public static readonly VALUE = 8;
	public static readonly WS = 9;
	public static readonly RULE_graph = 0;
	public static readonly RULE_list = 1;
	public static readonly RULE_kv = 2;
	public static readonly RULE_value = 3;
	public static readonly RULE_key = 4;
	public static readonly RULE_integer = 5;
	public static readonly RULE_realnum = 6;
	public static readonly RULE_str = 7;
	public static readonly RULE_stringliteral = 8;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"graph", "list", "kv", "value", "key", "integer", "realnum", "str", "stringliteral",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'['", "']'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "STRINGLITERAL", "REAL", "SIGN", "DIGIT", 
		"MANTISSA", "VALUE", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(gmlParser._LITERAL_NAMES, gmlParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return gmlParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "gml.g4"; }

	// @Override
	public get ruleNames(): string[] { return gmlParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return gmlParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(gmlParser._ATN, this);
	}
	// @RuleVersion(0)
	public graph(): GraphContext {
		let _localctx: GraphContext = new GraphContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, gmlParser.RULE_graph);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 19;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 18;
				this.kv();
				}
				}
				this.state = 21;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === gmlParser.VALUE);
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
	public list(): ListContext {
		let _localctx: ListContext = new ListContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, gmlParser.RULE_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 23;
			this.match(gmlParser.T__0);
			this.state = 25;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 24;
				this.kv();
				}
				}
				this.state = 27;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === gmlParser.VALUE);
			this.state = 29;
			this.match(gmlParser.T__1);
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
	public kv(): KvContext {
		let _localctx: KvContext = new KvContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, gmlParser.RULE_kv);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 31;
			this.key();
			this.state = 32;
			this.value();
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
	public value(): ValueContext {
		let _localctx: ValueContext = new ValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, gmlParser.RULE_value);
		try {
			this.state = 39;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case gmlParser.SIGN:
			case gmlParser.DIGIT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 34;
				this.integer();
				}
				break;
			case gmlParser.REAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 35;
				this.realnum();
				}
				break;
			case gmlParser.STRINGLITERAL:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 36;
				this.stringliteral();
				}
				break;
			case gmlParser.VALUE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 37;
				this.str();
				}
				break;
			case gmlParser.T__0:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 38;
				this.list();
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
	public key(): KeyContext {
		let _localctx: KeyContext = new KeyContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, gmlParser.RULE_key);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 41;
			this.match(gmlParser.VALUE);
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
		this.enterRule(_localctx, 10, gmlParser.RULE_integer);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 44;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === gmlParser.SIGN) {
				{
				this.state = 43;
				this.match(gmlParser.SIGN);
				}
			}

			this.state = 47;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 46;
				this.match(gmlParser.DIGIT);
				}
				}
				this.state = 49;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === gmlParser.DIGIT);
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
	public realnum(): RealnumContext {
		let _localctx: RealnumContext = new RealnumContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, gmlParser.RULE_realnum);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 51;
			this.match(gmlParser.REAL);
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
	public str(): StrContext {
		let _localctx: StrContext = new StrContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, gmlParser.RULE_str);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 53;
			this.match(gmlParser.VALUE);
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
	public stringliteral(): StringliteralContext {
		let _localctx: StringliteralContext = new StringliteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, gmlParser.RULE_stringliteral);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 55;
			this.match(gmlParser.STRINGLITERAL);
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\v<\x04\x02\t" +
		"\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07\t" +
		"\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x03\x02\x06\x02\x16\n\x02\r\x02\x0E" +
		"\x02\x17\x03\x03\x03\x03\x06\x03\x1C\n\x03\r\x03\x0E\x03\x1D\x03\x03\x03" +
		"\x03\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05" +
		"\x05*\n\x05\x03\x06\x03\x06\x03\x07\x05\x07/\n\x07\x03\x07\x06\x072\n" +
		"\x07\r\x07\x0E\x073\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\n\x02\x02" +
		"\x02\v\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02" +
		"\x02\x02\x02:\x02\x15\x03\x02\x02\x02\x04\x19\x03\x02\x02\x02\x06!\x03" +
		"\x02\x02\x02\b)\x03\x02\x02\x02\n+\x03\x02\x02\x02\f.\x03\x02\x02\x02" +
		"\x0E5\x03\x02\x02\x02\x107\x03\x02\x02\x02\x129\x03\x02\x02\x02\x14\x16" +
		"\x05\x06\x04\x02\x15\x14\x03\x02\x02\x02\x16\x17\x03\x02\x02\x02\x17\x15" +
		"\x03\x02\x02\x02\x17\x18\x03\x02\x02\x02\x18\x03\x03\x02\x02\x02\x19\x1B" +
		"\x07\x03\x02\x02\x1A\x1C\x05\x06\x04\x02\x1B\x1A\x03\x02\x02\x02\x1C\x1D" +
		"\x03\x02\x02\x02\x1D\x1B\x03\x02\x02\x02\x1D\x1E\x03\x02\x02\x02\x1E\x1F" +
		"\x03\x02\x02\x02\x1F \x07\x04\x02\x02 \x05\x03\x02\x02\x02!\"\x05\n\x06" +
		"\x02\"#\x05\b\x05\x02#\x07\x03\x02\x02\x02$*\x05\f\x07\x02%*\x05\x0E\b" +
		"\x02&*\x05\x12\n\x02\'*\x05\x10\t\x02(*\x05\x04\x03\x02)$\x03\x02\x02" +
		"\x02)%\x03\x02\x02\x02)&\x03\x02\x02\x02)\'\x03\x02\x02\x02)(\x03\x02" +
		"\x02\x02*\t\x03\x02\x02\x02+,\x07\n\x02\x02,\v\x03\x02\x02\x02-/\x07\x07" +
		"\x02\x02.-\x03\x02\x02\x02./\x03\x02\x02\x02/1\x03\x02\x02\x0202\x07\b" +
		"\x02\x0210\x03\x02\x02\x0223\x03\x02\x02\x0231\x03\x02\x02\x0234\x03\x02" +
		"\x02\x024\r\x03\x02\x02\x0256\x07\x06\x02\x026\x0F\x03\x02\x02\x0278\x07" +
		"\n\x02\x028\x11\x03\x02\x02\x029:\x07\x05\x02\x02:\x13\x03\x02\x02\x02" +
		"\x07\x17\x1D).3";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!gmlParser.__ATN) {
			gmlParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(gmlParser._serializedATN));
		}

		return gmlParser.__ATN;
	}

}

export class GraphContext extends ParserRuleContext {
	public kv(): KvContext[];
	public kv(i: number): KvContext;
	public kv(i?: number): KvContext | KvContext[] {
		if (i === undefined) {
			return this.getRuleContexts(KvContext);
		} else {
			return this.getRuleContext(i, KvContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gmlParser.RULE_graph; }
	// @Override
	public enterRule(listener: gmlListener): void {
		if (listener.enterGraph) {
			listener.enterGraph(this);
		}
	}
	// @Override
	public exitRule(listener: gmlListener): void {
		if (listener.exitGraph) {
			listener.exitGraph(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gmlVisitor<Result>): Result {
		if (visitor.visitGraph) {
			return visitor.visitGraph(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ListContext extends ParserRuleContext {
	public kv(): KvContext[];
	public kv(i: number): KvContext;
	public kv(i?: number): KvContext | KvContext[] {
		if (i === undefined) {
			return this.getRuleContexts(KvContext);
		} else {
			return this.getRuleContext(i, KvContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gmlParser.RULE_list; }
	// @Override
	public enterRule(listener: gmlListener): void {
		if (listener.enterList) {
			listener.enterList(this);
		}
	}
	// @Override
	public exitRule(listener: gmlListener): void {
		if (listener.exitList) {
			listener.exitList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gmlVisitor<Result>): Result {
		if (visitor.visitList) {
			return visitor.visitList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class KvContext extends ParserRuleContext {
	public key(): KeyContext {
		return this.getRuleContext(0, KeyContext);
	}
	public value(): ValueContext {
		return this.getRuleContext(0, ValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gmlParser.RULE_kv; }
	// @Override
	public enterRule(listener: gmlListener): void {
		if (listener.enterKv) {
			listener.enterKv(this);
		}
	}
	// @Override
	public exitRule(listener: gmlListener): void {
		if (listener.exitKv) {
			listener.exitKv(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gmlVisitor<Result>): Result {
		if (visitor.visitKv) {
			return visitor.visitKv(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValueContext extends ParserRuleContext {
	public integer(): IntegerContext | undefined {
		return this.tryGetRuleContext(0, IntegerContext);
	}
	public realnum(): RealnumContext | undefined {
		return this.tryGetRuleContext(0, RealnumContext);
	}
	public stringliteral(): StringliteralContext | undefined {
		return this.tryGetRuleContext(0, StringliteralContext);
	}
	public str(): StrContext | undefined {
		return this.tryGetRuleContext(0, StrContext);
	}
	public list(): ListContext | undefined {
		return this.tryGetRuleContext(0, ListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gmlParser.RULE_value; }
	// @Override
	public enterRule(listener: gmlListener): void {
		if (listener.enterValue) {
			listener.enterValue(this);
		}
	}
	// @Override
	public exitRule(listener: gmlListener): void {
		if (listener.exitValue) {
			listener.exitValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gmlVisitor<Result>): Result {
		if (visitor.visitValue) {
			return visitor.visitValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class KeyContext extends ParserRuleContext {
	public VALUE(): TerminalNode { return this.getToken(gmlParser.VALUE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gmlParser.RULE_key; }
	// @Override
	public enterRule(listener: gmlListener): void {
		if (listener.enterKey) {
			listener.enterKey(this);
		}
	}
	// @Override
	public exitRule(listener: gmlListener): void {
		if (listener.exitKey) {
			listener.exitKey(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gmlVisitor<Result>): Result {
		if (visitor.visitKey) {
			return visitor.visitKey(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IntegerContext extends ParserRuleContext {
	public SIGN(): TerminalNode | undefined { return this.tryGetToken(gmlParser.SIGN, 0); }
	public DIGIT(): TerminalNode[];
	public DIGIT(i: number): TerminalNode;
	public DIGIT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(gmlParser.DIGIT);
		} else {
			return this.getToken(gmlParser.DIGIT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gmlParser.RULE_integer; }
	// @Override
	public enterRule(listener: gmlListener): void {
		if (listener.enterInteger) {
			listener.enterInteger(this);
		}
	}
	// @Override
	public exitRule(listener: gmlListener): void {
		if (listener.exitInteger) {
			listener.exitInteger(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gmlVisitor<Result>): Result {
		if (visitor.visitInteger) {
			return visitor.visitInteger(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RealnumContext extends ParserRuleContext {
	public REAL(): TerminalNode { return this.getToken(gmlParser.REAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gmlParser.RULE_realnum; }
	// @Override
	public enterRule(listener: gmlListener): void {
		if (listener.enterRealnum) {
			listener.enterRealnum(this);
		}
	}
	// @Override
	public exitRule(listener: gmlListener): void {
		if (listener.exitRealnum) {
			listener.exitRealnum(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gmlVisitor<Result>): Result {
		if (visitor.visitRealnum) {
			return visitor.visitRealnum(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StrContext extends ParserRuleContext {
	public VALUE(): TerminalNode { return this.getToken(gmlParser.VALUE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gmlParser.RULE_str; }
	// @Override
	public enterRule(listener: gmlListener): void {
		if (listener.enterStr) {
			listener.enterStr(this);
		}
	}
	// @Override
	public exitRule(listener: gmlListener): void {
		if (listener.exitStr) {
			listener.exitStr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gmlVisitor<Result>): Result {
		if (visitor.visitStr) {
			return visitor.visitStr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StringliteralContext extends ParserRuleContext {
	public STRINGLITERAL(): TerminalNode { return this.getToken(gmlParser.STRINGLITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return gmlParser.RULE_stringliteral; }
	// @Override
	public enterRule(listener: gmlListener): void {
		if (listener.enterStringliteral) {
			listener.enterStringliteral(this);
		}
	}
	// @Override
	public exitRule(listener: gmlListener): void {
		if (listener.exitStringliteral) {
			listener.exitStringliteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: gmlVisitor<Result>): Result {
		if (visitor.visitStringliteral) {
			return visitor.visitStringliteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


