// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/abnf/Abnf.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { AbnfListener } from "./AbnfListener";

export class AbnfParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly NumberValue = 8;
	public static readonly ProseValue = 9;
	public static readonly ID = 10;
	public static readonly INT = 11;
	public static readonly COMMENT = 12;
	public static readonly WS = 13;
	public static readonly STRING = 14;
	public static readonly RULE_rulelist = 0;
	public static readonly RULE_rule_ = 1;
	public static readonly RULE_elements = 2;
	public static readonly RULE_alternation = 3;
	public static readonly RULE_concatenation = 4;
	public static readonly RULE_repetition = 5;
	public static readonly RULE_repeat = 6;
	public static readonly RULE_element = 7;
	public static readonly RULE_group = 8;
	public static readonly RULE_option = 9;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"rulelist", "rule_", "elements", "alternation", "concatenation", "repetition", 
		"repeat", "element", "group", "option",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'='", "'/'", "'*'", "'('", "')'", "'['", "']'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, "NumberValue", "ProseValue", "ID", "INT", "COMMENT", "WS", 
		"STRING",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(AbnfParser._LITERAL_NAMES, AbnfParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return AbnfParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Abnf.g4"; }

	// @Override
	public get ruleNames(): string[] { return AbnfParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return AbnfParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(AbnfParser._ATN, this);
	}
	// @RuleVersion(0)
	public rulelist(): RulelistContext {
		let _localctx: RulelistContext = new RulelistContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, AbnfParser.RULE_rulelist);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 23;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === AbnfParser.ID) {
				{
				{
				this.state = 20;
				this.rule_();
				}
				}
				this.state = 25;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 26;
			this.match(AbnfParser.EOF);
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
	public rule_(): Rule_Context {
		let _localctx: Rule_Context = new Rule_Context(this._ctx, this.state);
		this.enterRule(_localctx, 2, AbnfParser.RULE_rule_);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 28;
			this.match(AbnfParser.ID);
			this.state = 29;
			this.match(AbnfParser.T__0);
			this.state = 31;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AbnfParser.T__1) {
				{
				this.state = 30;
				this.match(AbnfParser.T__1);
				}
			}

			this.state = 33;
			this.elements();
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
	public elements(): ElementsContext {
		let _localctx: ElementsContext = new ElementsContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, AbnfParser.RULE_elements);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 35;
			this.alternation();
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
	public alternation(): AlternationContext {
		let _localctx: AlternationContext = new AlternationContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, AbnfParser.RULE_alternation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 37;
			this.concatenation();
			this.state = 42;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === AbnfParser.T__1) {
				{
				{
				this.state = 38;
				this.match(AbnfParser.T__1);
				this.state = 39;
				this.concatenation();
				}
				}
				this.state = 44;
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
	public concatenation(): ConcatenationContext {
		let _localctx: ConcatenationContext = new ConcatenationContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, AbnfParser.RULE_concatenation);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 46;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 45;
					this.repetition();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 48;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
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
	public repetition(): RepetitionContext {
		let _localctx: RepetitionContext = new RepetitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, AbnfParser.RULE_repetition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 51;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === AbnfParser.T__2 || _la === AbnfParser.INT) {
				{
				this.state = 50;
				this.repeat();
				}
			}

			this.state = 53;
			this.element();
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
	public repeat(): RepeatContext {
		let _localctx: RepeatContext = new RepeatContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, AbnfParser.RULE_repeat);
		let _la: number;
		try {
			this.state = 63;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 55;
				this.match(AbnfParser.INT);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				{
				this.state = 57;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === AbnfParser.INT) {
					{
					this.state = 56;
					this.match(AbnfParser.INT);
					}
				}

				this.state = 59;
				this.match(AbnfParser.T__2);
				this.state = 61;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === AbnfParser.INT) {
					{
					this.state = 60;
					this.match(AbnfParser.INT);
					}
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
	public element(): ElementContext {
		let _localctx: ElementContext = new ElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, AbnfParser.RULE_element);
		try {
			this.state = 71;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case AbnfParser.ID:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 65;
				this.match(AbnfParser.ID);
				}
				break;
			case AbnfParser.T__3:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 66;
				this.group();
				}
				break;
			case AbnfParser.T__5:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 67;
				this.option();
				}
				break;
			case AbnfParser.STRING:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 68;
				this.match(AbnfParser.STRING);
				}
				break;
			case AbnfParser.NumberValue:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 69;
				this.match(AbnfParser.NumberValue);
				}
				break;
			case AbnfParser.ProseValue:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 70;
				this.match(AbnfParser.ProseValue);
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
	public group(): GroupContext {
		let _localctx: GroupContext = new GroupContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, AbnfParser.RULE_group);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 73;
			this.match(AbnfParser.T__3);
			this.state = 74;
			this.alternation();
			this.state = 75;
			this.match(AbnfParser.T__4);
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
	public option(): OptionContext {
		let _localctx: OptionContext = new OptionContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, AbnfParser.RULE_option);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 77;
			this.match(AbnfParser.T__5);
			this.state = 78;
			this.alternation();
			this.state = 79;
			this.match(AbnfParser.T__6);
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x10T\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x03\x02\x07\x02\x18\n\x02" +
		"\f\x02\x0E\x02\x1B\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x05\x03" +
		"\"\n\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x07\x05" +
		"+\n\x05\f\x05\x0E\x05.\v\x05\x03\x06\x06\x061\n\x06\r\x06\x0E\x062\x03" +
		"\x07\x05\x076\n\x07\x03\x07\x03\x07\x03\b\x03\b\x05\b<\n\b\x03\b\x03\b" +
		"\x05\b@\n\b\x05\bB\n\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x05\tJ\n\t" +
		"\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x02\x02\x02\f\x02" +
		"\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02" +
		"\x02\x02\x02V\x02\x19\x03\x02\x02\x02\x04\x1E\x03\x02\x02\x02\x06%\x03" +
		"\x02\x02\x02\b\'\x03\x02\x02\x02\n0\x03\x02\x02\x02\f5\x03\x02\x02\x02" +
		"\x0EA\x03\x02\x02\x02\x10I\x03\x02\x02\x02\x12K\x03\x02\x02\x02\x14O\x03" +
		"\x02\x02\x02\x16\x18\x05\x04\x03\x02\x17\x16\x03\x02\x02\x02\x18\x1B\x03" +
		"\x02\x02\x02\x19\x17\x03\x02\x02\x02\x19\x1A\x03\x02\x02\x02\x1A\x1C\x03" +
		"\x02\x02\x02\x1B\x19\x03\x02\x02\x02\x1C\x1D\x07\x02\x02\x03\x1D\x03\x03" +
		"\x02\x02\x02\x1E\x1F\x07\f\x02\x02\x1F!\x07\x03\x02\x02 \"\x07\x04\x02" +
		"\x02! \x03\x02\x02\x02!\"\x03\x02\x02\x02\"#\x03\x02\x02\x02#$\x05\x06" +
		"\x04\x02$\x05\x03\x02\x02\x02%&\x05\b\x05\x02&\x07\x03\x02\x02\x02\'," +
		"\x05\n\x06\x02()\x07\x04\x02\x02)+\x05\n\x06\x02*(\x03\x02\x02\x02+.\x03" +
		"\x02\x02\x02,*\x03\x02\x02\x02,-\x03\x02\x02\x02-\t\x03\x02\x02\x02.," +
		"\x03\x02\x02\x02/1\x05\f\x07\x020/\x03\x02\x02\x0212\x03\x02\x02\x022" +
		"0\x03\x02\x02\x0223\x03\x02\x02\x023\v\x03\x02\x02\x0246\x05\x0E\b\x02" +
		"54\x03\x02\x02\x0256\x03\x02\x02\x0267\x03\x02\x02\x0278\x05\x10\t\x02" +
		"8\r\x03\x02\x02\x029B\x07\r\x02\x02:<\x07\r\x02\x02;:\x03\x02\x02\x02" +
		";<\x03\x02\x02\x02<=\x03\x02\x02\x02=?\x07\x05\x02\x02>@\x07\r\x02\x02" +
		"?>\x03\x02\x02\x02?@\x03\x02\x02\x02@B\x03\x02\x02\x02A9\x03\x02\x02\x02" +
		"A;\x03\x02\x02\x02B\x0F\x03\x02\x02\x02CJ\x07\f\x02\x02DJ\x05\x12\n\x02" +
		"EJ\x05\x14\v\x02FJ\x07\x10\x02\x02GJ\x07\n\x02\x02HJ\x07\v\x02\x02IC\x03" +
		"\x02\x02\x02ID\x03\x02\x02\x02IE\x03\x02\x02\x02IF\x03\x02\x02\x02IG\x03" +
		"\x02\x02\x02IH\x03\x02\x02\x02J\x11\x03\x02\x02\x02KL\x07\x06\x02\x02" +
		"LM\x05\b\x05\x02MN\x07\x07\x02\x02N\x13\x03\x02\x02\x02OP\x07\b\x02\x02" +
		"PQ\x05\b\x05\x02QR\x07\t\x02\x02R\x15\x03\x02\x02\x02\v\x19!,25;?AI";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!AbnfParser.__ATN) {
			AbnfParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(AbnfParser._serializedATN));
		}

		return AbnfParser.__ATN;
	}

}

export class RulelistContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(AbnfParser.EOF, 0); }
	public rule_(): Rule_Context[];
	public rule_(i: number): Rule_Context;
	public rule_(i?: number): Rule_Context | Rule_Context[] {
		if (i === undefined) {
			return this.getRuleContexts(Rule_Context);
		} else {
			return this.getRuleContext(i, Rule_Context);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AbnfParser.RULE_rulelist; }
	// @Override
	public enterRule(listener: AbnfListener): void {
		if (listener.enterRulelist) {
			listener.enterRulelist(this);
		}
	}
	// @Override
	public exitRule(listener: AbnfListener): void {
		if (listener.exitRulelist) {
			listener.exitRulelist(this);
		}
	}
}


export class Rule_Context extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(AbnfParser.ID, 0); }
	public elements(): ElementsContext {
		return this.getRuleContext(0, ElementsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AbnfParser.RULE_rule_; }
	// @Override
	public enterRule(listener: AbnfListener): void {
		if (listener.enterRule_) {
			listener.enterRule_(this);
		}
	}
	// @Override
	public exitRule(listener: AbnfListener): void {
		if (listener.exitRule_) {
			listener.exitRule_(this);
		}
	}
}


export class ElementsContext extends ParserRuleContext {
	public alternation(): AlternationContext {
		return this.getRuleContext(0, AlternationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AbnfParser.RULE_elements; }
	// @Override
	public enterRule(listener: AbnfListener): void {
		if (listener.enterElements) {
			listener.enterElements(this);
		}
	}
	// @Override
	public exitRule(listener: AbnfListener): void {
		if (listener.exitElements) {
			listener.exitElements(this);
		}
	}
}


export class AlternationContext extends ParserRuleContext {
	public concatenation(): ConcatenationContext[];
	public concatenation(i: number): ConcatenationContext;
	public concatenation(i?: number): ConcatenationContext | ConcatenationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConcatenationContext);
		} else {
			return this.getRuleContext(i, ConcatenationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AbnfParser.RULE_alternation; }
	// @Override
	public enterRule(listener: AbnfListener): void {
		if (listener.enterAlternation) {
			listener.enterAlternation(this);
		}
	}
	// @Override
	public exitRule(listener: AbnfListener): void {
		if (listener.exitAlternation) {
			listener.exitAlternation(this);
		}
	}
}


export class ConcatenationContext extends ParserRuleContext {
	public repetition(): RepetitionContext[];
	public repetition(i: number): RepetitionContext;
	public repetition(i?: number): RepetitionContext | RepetitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RepetitionContext);
		} else {
			return this.getRuleContext(i, RepetitionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AbnfParser.RULE_concatenation; }
	// @Override
	public enterRule(listener: AbnfListener): void {
		if (listener.enterConcatenation) {
			listener.enterConcatenation(this);
		}
	}
	// @Override
	public exitRule(listener: AbnfListener): void {
		if (listener.exitConcatenation) {
			listener.exitConcatenation(this);
		}
	}
}


export class RepetitionContext extends ParserRuleContext {
	public element(): ElementContext {
		return this.getRuleContext(0, ElementContext);
	}
	public repeat(): RepeatContext | undefined {
		return this.tryGetRuleContext(0, RepeatContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AbnfParser.RULE_repetition; }
	// @Override
	public enterRule(listener: AbnfListener): void {
		if (listener.enterRepetition) {
			listener.enterRepetition(this);
		}
	}
	// @Override
	public exitRule(listener: AbnfListener): void {
		if (listener.exitRepetition) {
			listener.exitRepetition(this);
		}
	}
}


export class RepeatContext extends ParserRuleContext {
	public INT(): TerminalNode[];
	public INT(i: number): TerminalNode;
	public INT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(AbnfParser.INT);
		} else {
			return this.getToken(AbnfParser.INT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AbnfParser.RULE_repeat; }
	// @Override
	public enterRule(listener: AbnfListener): void {
		if (listener.enterRepeat) {
			listener.enterRepeat(this);
		}
	}
	// @Override
	public exitRule(listener: AbnfListener): void {
		if (listener.exitRepeat) {
			listener.exitRepeat(this);
		}
	}
}


export class ElementContext extends ParserRuleContext {
	public ID(): TerminalNode | undefined { return this.tryGetToken(AbnfParser.ID, 0); }
	public group(): GroupContext | undefined {
		return this.tryGetRuleContext(0, GroupContext);
	}
	public option(): OptionContext | undefined {
		return this.tryGetRuleContext(0, OptionContext);
	}
	public STRING(): TerminalNode | undefined { return this.tryGetToken(AbnfParser.STRING, 0); }
	public NumberValue(): TerminalNode | undefined { return this.tryGetToken(AbnfParser.NumberValue, 0); }
	public ProseValue(): TerminalNode | undefined { return this.tryGetToken(AbnfParser.ProseValue, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AbnfParser.RULE_element; }
	// @Override
	public enterRule(listener: AbnfListener): void {
		if (listener.enterElement) {
			listener.enterElement(this);
		}
	}
	// @Override
	public exitRule(listener: AbnfListener): void {
		if (listener.exitElement) {
			listener.exitElement(this);
		}
	}
}


export class GroupContext extends ParserRuleContext {
	public alternation(): AlternationContext {
		return this.getRuleContext(0, AlternationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AbnfParser.RULE_group; }
	// @Override
	public enterRule(listener: AbnfListener): void {
		if (listener.enterGroup) {
			listener.enterGroup(this);
		}
	}
	// @Override
	public exitRule(listener: AbnfListener): void {
		if (listener.exitGroup) {
			listener.exitGroup(this);
		}
	}
}


export class OptionContext extends ParserRuleContext {
	public alternation(): AlternationContext {
		return this.getRuleContext(0, AlternationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return AbnfParser.RULE_option; }
	// @Override
	public enterRule(listener: AbnfListener): void {
		if (listener.enterOption) {
			listener.enterOption(this);
		}
	}
	// @Override
	public exitRule(listener: AbnfListener): void {
		if (listener.exitOption) {
			listener.exitOption(this);
		}
	}
}


