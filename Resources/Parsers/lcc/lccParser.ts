// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/lcc/lcc.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { lccListener } from "./lccListener";

export class lccParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly DIGIT = 3;
	public static readonly LETTER = 4;
	public static readonly WS = 5;
	public static readonly RULE_lcc = 0;
	public static readonly RULE_topic = 1;
	public static readonly RULE_subtopic = 2;
	public static readonly RULE_subclasses = 3;
	public static readonly RULE_subclass = 4;
	public static readonly RULE_cutters = 5;
	public static readonly RULE_cutter = 6;
	public static readonly RULE_date = 7;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"lcc", "topic", "subtopic", "subclasses", "subclass", "cutters", "cutter", 
		"date",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "' '", "'.'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "DIGIT", "LETTER", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(lccParser._LITERAL_NAMES, lccParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return lccParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "lcc.g4"; }

	// @Override
	public get ruleNames(): string[] { return lccParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return lccParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(lccParser._ATN, this);
	}
	// @RuleVersion(0)
	public lcc(): LccContext {
		let _localctx: LccContext = new LccContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, lccParser.RULE_lcc);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 16;
			this.topic();
			this.state = 18;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
			case 1:
				{
				this.state = 17;
				this.match(lccParser.T__0);
				}
				break;
			}
			this.state = 21;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === lccParser.LETTER) {
				{
				this.state = 20;
				this.subtopic();
				}
			}

			this.state = 24;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === lccParser.T__0) {
				{
				this.state = 23;
				this.match(lccParser.T__0);
				}
			}

			this.state = 26;
			this.subclasses();
			this.state = 28;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				{
				this.state = 27;
				this.match(lccParser.T__0);
				}
				break;
			}
			this.state = 32;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === lccParser.T__1) {
				{
				this.state = 30;
				this.match(lccParser.T__1);
				this.state = 31;
				this.cutters();
				}
			}

			this.state = 36;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === lccParser.T__0) {
				{
				this.state = 34;
				this.match(lccParser.T__0);
				this.state = 35;
				this.date();
				}
			}

			this.state = 38;
			this.match(lccParser.EOF);
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
	public topic(): TopicContext {
		let _localctx: TopicContext = new TopicContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, lccParser.RULE_topic);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 40;
			this.match(lccParser.LETTER);
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
	public subtopic(): SubtopicContext {
		let _localctx: SubtopicContext = new SubtopicContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, lccParser.RULE_subtopic);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 42;
			this.match(lccParser.LETTER);
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
	public subclasses(): SubclassesContext {
		let _localctx: SubclassesContext = new SubclassesContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, lccParser.RULE_subclasses);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 44;
			this.subclass();
			this.state = 49;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 45;
					this.match(lccParser.T__1);
					this.state = 46;
					this.subclass();
					}
					}
				}
				this.state = 51;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
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
	public subclass(): SubclassContext {
		let _localctx: SubclassContext = new SubclassContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, lccParser.RULE_subclass);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 53;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 52;
				this.match(lccParser.DIGIT);
				}
				}
				this.state = 55;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === lccParser.DIGIT);
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
	public cutters(): CuttersContext {
		let _localctx: CuttersContext = new CuttersContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, lccParser.RULE_cutters);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 57;
			this.cutter();
			this.state = 62;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 58;
					this.match(lccParser.T__0);
					this.state = 59;
					this.cutter();
					}
					}
				}
				this.state = 64;
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
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cutter(): CutterContext {
		let _localctx: CutterContext = new CutterContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, lccParser.RULE_cutter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 65;
			this.match(lccParser.LETTER);
			this.state = 67;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 66;
				this.match(lccParser.DIGIT);
				}
				}
				this.state = 69;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === lccParser.DIGIT);
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
		this.enterRule(_localctx, 14, lccParser.RULE_date);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 71;
			this.match(lccParser.DIGIT);
			this.state = 72;
			this.match(lccParser.DIGIT);
			this.state = 73;
			this.match(lccParser.DIGIT);
			this.state = 74;
			this.match(lccParser.DIGIT);
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x07O\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x03\x02\x03\x02\x05\x02\x15\n\x02\x03\x02\x05" +
		"\x02\x18\n\x02\x03\x02\x05\x02\x1B\n\x02\x03\x02\x03\x02\x05\x02\x1F\n" +
		"\x02\x03\x02\x03\x02\x05\x02#\n\x02\x03\x02\x03\x02\x05\x02\'\n\x02\x03" +
		"\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x07" +
		"\x052\n\x05\f\x05\x0E\x055\v\x05\x03\x06\x06\x068\n\x06\r\x06\x0E\x06" +
		"9\x03\x07\x03\x07\x03\x07\x07\x07?\n\x07\f\x07\x0E\x07B\v\x07\x03\b\x03" +
		"\b\x06\bF\n\b\r\b\x0E\bG\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x02\x02\x02" +
		"\n\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x02\x02\x02" +
		"P\x02\x12\x03\x02\x02\x02\x04*\x03\x02\x02\x02\x06,\x03\x02\x02\x02\b" +
		".\x03\x02\x02\x02\n7\x03\x02\x02\x02\f;\x03\x02\x02\x02\x0EC\x03\x02\x02" +
		"\x02\x10I\x03\x02\x02\x02\x12\x14\x05\x04\x03\x02\x13\x15\x07\x03\x02" +
		"\x02\x14\x13\x03\x02\x02\x02\x14\x15\x03\x02\x02\x02\x15\x17\x03\x02\x02" +
		"\x02\x16\x18\x05\x06\x04\x02\x17\x16\x03\x02\x02\x02\x17\x18\x03\x02\x02" +
		"\x02\x18\x1A\x03\x02\x02\x02\x19\x1B\x07\x03\x02\x02\x1A\x19\x03\x02\x02" +
		"\x02\x1A\x1B\x03\x02\x02\x02\x1B\x1C\x03\x02\x02\x02\x1C\x1E\x05\b\x05" +
		"\x02\x1D\x1F\x07\x03\x02\x02\x1E\x1D\x03\x02\x02\x02\x1E\x1F\x03\x02\x02" +
		"\x02\x1F\"\x03\x02\x02\x02 !\x07\x04\x02\x02!#\x05\f\x07\x02\" \x03\x02" +
		"\x02\x02\"#\x03\x02\x02\x02#&\x03\x02\x02\x02$%\x07\x03\x02\x02%\'\x05" +
		"\x10\t\x02&$\x03\x02\x02\x02&\'\x03\x02\x02\x02\'(\x03\x02\x02\x02()\x07" +
		"\x02\x02\x03)\x03\x03\x02\x02\x02*+\x07\x06\x02\x02+\x05\x03\x02\x02\x02" +
		",-\x07\x06\x02\x02-\x07\x03\x02\x02\x02.3\x05\n\x06\x02/0\x07\x04\x02" +
		"\x0202\x05\n\x06\x021/\x03\x02\x02\x0225\x03\x02\x02\x0231\x03\x02\x02" +
		"\x0234\x03\x02\x02\x024\t\x03\x02\x02\x0253\x03\x02\x02\x0268\x07\x05" +
		"\x02\x0276\x03\x02\x02\x0289\x03\x02\x02\x0297\x03\x02\x02\x029:\x03\x02" +
		"\x02\x02:\v\x03\x02\x02\x02;@\x05\x0E\b\x02<=\x07\x03\x02\x02=?\x05\x0E" +
		"\b\x02><\x03\x02\x02\x02?B\x03\x02\x02\x02@>\x03\x02\x02\x02@A\x03\x02" +
		"\x02\x02A\r\x03\x02\x02\x02B@\x03\x02\x02\x02CE\x07\x06\x02\x02DF\x07" +
		"\x05\x02\x02ED\x03\x02\x02\x02FG\x03\x02\x02\x02GE\x03\x02\x02\x02GH\x03" +
		"\x02\x02\x02H\x0F\x03\x02\x02\x02IJ\x07\x05\x02\x02JK\x07\x05\x02\x02" +
		"KL\x07\x05\x02\x02LM\x07\x05\x02\x02M\x11\x03\x02\x02\x02\f\x14\x17\x1A" +
		"\x1E\"&39@G";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!lccParser.__ATN) {
			lccParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(lccParser._serializedATN));
		}

		return lccParser.__ATN;
	}

}

export class LccContext extends ParserRuleContext {
	public topic(): TopicContext {
		return this.getRuleContext(0, TopicContext);
	}
	public subclasses(): SubclassesContext {
		return this.getRuleContext(0, SubclassesContext);
	}
	public EOF(): TerminalNode { return this.getToken(lccParser.EOF, 0); }
	public subtopic(): SubtopicContext | undefined {
		return this.tryGetRuleContext(0, SubtopicContext);
	}
	public cutters(): CuttersContext | undefined {
		return this.tryGetRuleContext(0, CuttersContext);
	}
	public date(): DateContext | undefined {
		return this.tryGetRuleContext(0, DateContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return lccParser.RULE_lcc; }
	// @Override
	public enterRule(listener: lccListener): void {
		if (listener.enterLcc) {
			listener.enterLcc(this);
		}
	}
	// @Override
	public exitRule(listener: lccListener): void {
		if (listener.exitLcc) {
			listener.exitLcc(this);
		}
	}
}


export class TopicContext extends ParserRuleContext {
	public LETTER(): TerminalNode { return this.getToken(lccParser.LETTER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return lccParser.RULE_topic; }
	// @Override
	public enterRule(listener: lccListener): void {
		if (listener.enterTopic) {
			listener.enterTopic(this);
		}
	}
	// @Override
	public exitRule(listener: lccListener): void {
		if (listener.exitTopic) {
			listener.exitTopic(this);
		}
	}
}


export class SubtopicContext extends ParserRuleContext {
	public LETTER(): TerminalNode { return this.getToken(lccParser.LETTER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return lccParser.RULE_subtopic; }
	// @Override
	public enterRule(listener: lccListener): void {
		if (listener.enterSubtopic) {
			listener.enterSubtopic(this);
		}
	}
	// @Override
	public exitRule(listener: lccListener): void {
		if (listener.exitSubtopic) {
			listener.exitSubtopic(this);
		}
	}
}


export class SubclassesContext extends ParserRuleContext {
	public subclass(): SubclassContext[];
	public subclass(i: number): SubclassContext;
	public subclass(i?: number): SubclassContext | SubclassContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SubclassContext);
		} else {
			return this.getRuleContext(i, SubclassContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return lccParser.RULE_subclasses; }
	// @Override
	public enterRule(listener: lccListener): void {
		if (listener.enterSubclasses) {
			listener.enterSubclasses(this);
		}
	}
	// @Override
	public exitRule(listener: lccListener): void {
		if (listener.exitSubclasses) {
			listener.exitSubclasses(this);
		}
	}
}


export class SubclassContext extends ParserRuleContext {
	public DIGIT(): TerminalNode[];
	public DIGIT(i: number): TerminalNode;
	public DIGIT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(lccParser.DIGIT);
		} else {
			return this.getToken(lccParser.DIGIT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return lccParser.RULE_subclass; }
	// @Override
	public enterRule(listener: lccListener): void {
		if (listener.enterSubclass) {
			listener.enterSubclass(this);
		}
	}
	// @Override
	public exitRule(listener: lccListener): void {
		if (listener.exitSubclass) {
			listener.exitSubclass(this);
		}
	}
}


export class CuttersContext extends ParserRuleContext {
	public cutter(): CutterContext[];
	public cutter(i: number): CutterContext;
	public cutter(i?: number): CutterContext | CutterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CutterContext);
		} else {
			return this.getRuleContext(i, CutterContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return lccParser.RULE_cutters; }
	// @Override
	public enterRule(listener: lccListener): void {
		if (listener.enterCutters) {
			listener.enterCutters(this);
		}
	}
	// @Override
	public exitRule(listener: lccListener): void {
		if (listener.exitCutters) {
			listener.exitCutters(this);
		}
	}
}


export class CutterContext extends ParserRuleContext {
	public LETTER(): TerminalNode { return this.getToken(lccParser.LETTER, 0); }
	public DIGIT(): TerminalNode[];
	public DIGIT(i: number): TerminalNode;
	public DIGIT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(lccParser.DIGIT);
		} else {
			return this.getToken(lccParser.DIGIT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return lccParser.RULE_cutter; }
	// @Override
	public enterRule(listener: lccListener): void {
		if (listener.enterCutter) {
			listener.enterCutter(this);
		}
	}
	// @Override
	public exitRule(listener: lccListener): void {
		if (listener.exitCutter) {
			listener.exitCutter(this);
		}
	}
}


export class DateContext extends ParserRuleContext {
	public DIGIT(): TerminalNode[];
	public DIGIT(i: number): TerminalNode;
	public DIGIT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(lccParser.DIGIT);
		} else {
			return this.getToken(lccParser.DIGIT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return lccParser.RULE_date; }
	// @Override
	public enterRule(listener: lccListener): void {
		if (listener.enterDate) {
			listener.enterDate(this);
		}
	}
	// @Override
	public exitRule(listener: lccListener): void {
		if (listener.exitDate) {
			listener.exitDate(this);
		}
	}
}


