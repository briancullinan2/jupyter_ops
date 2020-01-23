// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/istc/istc.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { istcListener } from "./istcListener";

export class istcParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly SEP = 3;
	public static readonly CHAR = 4;
	public static readonly WS = 5;
	public static readonly RULE_istc = 0;
	public static readonly RULE_registration = 1;
	public static readonly RULE_year = 2;
	public static readonly RULE_work = 3;
	public static readonly RULE_check = 4;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"istc", "registration", "year", "work", "check",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'ISTC'", "' '",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "SEP", "CHAR", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(istcParser._LITERAL_NAMES, istcParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return istcParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "istc.g4"; }

	// @Override
	public get ruleNames(): string[] { return istcParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return istcParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(istcParser._ATN, this);
	}
	// @RuleVersion(0)
	public istc(): IstcContext {
		let _localctx: IstcContext = new IstcContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, istcParser.RULE_istc);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 10;
			this.match(istcParser.T__0);
			this.state = 11;
			this.match(istcParser.T__1);
			this.state = 12;
			this.registration();
			this.state = 13;
			this.match(istcParser.SEP);
			this.state = 14;
			this.year();
			this.state = 15;
			this.match(istcParser.SEP);
			this.state = 16;
			this.work();
			this.state = 17;
			this.match(istcParser.SEP);
			this.state = 18;
			this.check();
			this.state = 19;
			this.match(istcParser.EOF);
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
	public registration(): RegistrationContext {
		let _localctx: RegistrationContext = new RegistrationContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, istcParser.RULE_registration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 21;
			this.match(istcParser.CHAR);
			this.state = 22;
			this.match(istcParser.CHAR);
			this.state = 23;
			this.match(istcParser.CHAR);
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
	public year(): YearContext {
		let _localctx: YearContext = new YearContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, istcParser.RULE_year);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 25;
			this.match(istcParser.CHAR);
			this.state = 26;
			this.match(istcParser.CHAR);
			this.state = 27;
			this.match(istcParser.CHAR);
			this.state = 28;
			this.match(istcParser.CHAR);
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
	public work(): WorkContext {
		let _localctx: WorkContext = new WorkContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, istcParser.RULE_work);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 30;
			this.match(istcParser.CHAR);
			this.state = 31;
			this.match(istcParser.CHAR);
			this.state = 32;
			this.match(istcParser.CHAR);
			this.state = 33;
			this.match(istcParser.CHAR);
			this.state = 34;
			this.match(istcParser.CHAR);
			this.state = 35;
			this.match(istcParser.CHAR);
			this.state = 36;
			this.match(istcParser.CHAR);
			this.state = 37;
			this.match(istcParser.CHAR);
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
	public check(): CheckContext {
		let _localctx: CheckContext = new CheckContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, istcParser.RULE_check);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 39;
			this.match(istcParser.CHAR);
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x07,\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x03\x02" +
		"\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02" +
		"\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05" +
		"\x03\x05\x03\x06\x03\x06\x03\x06\x02\x02\x02\x07\x02\x02\x04\x02\x06\x02" +
		"\b\x02\n\x02\x02\x02\x02&\x02\f\x03\x02\x02\x02\x04\x17\x03\x02\x02\x02" +
		"\x06\x1B\x03\x02\x02\x02\b \x03\x02\x02\x02\n)\x03\x02\x02\x02\f\r\x07" +
		"\x03\x02\x02\r\x0E\x07\x04\x02\x02\x0E\x0F\x05\x04\x03\x02\x0F\x10\x07" +
		"\x05\x02\x02\x10\x11\x05\x06\x04\x02\x11\x12\x07\x05\x02\x02\x12\x13\x05" +
		"\b\x05\x02\x13\x14\x07\x05\x02\x02\x14\x15\x05\n\x06\x02\x15\x16\x07\x02" +
		"\x02\x03\x16\x03\x03\x02\x02\x02\x17\x18\x07\x06\x02\x02\x18\x19\x07\x06" +
		"\x02\x02\x19\x1A\x07\x06\x02\x02\x1A\x05\x03\x02\x02\x02\x1B\x1C\x07\x06" +
		"\x02\x02\x1C\x1D\x07\x06\x02\x02\x1D\x1E\x07\x06\x02\x02\x1E\x1F\x07\x06" +
		"\x02\x02\x1F\x07\x03\x02\x02\x02 !\x07\x06\x02\x02!\"\x07\x06\x02\x02" +
		"\"#\x07\x06\x02\x02#$\x07\x06\x02\x02$%\x07\x06\x02\x02%&\x07\x06\x02" +
		"\x02&\'\x07\x06\x02\x02\'(\x07\x06\x02\x02(\t\x03\x02\x02\x02)*\x07\x06" +
		"\x02\x02*\v\x03\x02\x02\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!istcParser.__ATN) {
			istcParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(istcParser._serializedATN));
		}

		return istcParser.__ATN;
	}

}

export class IstcContext extends ParserRuleContext {
	public registration(): RegistrationContext {
		return this.getRuleContext(0, RegistrationContext);
	}
	public SEP(): TerminalNode[];
	public SEP(i: number): TerminalNode;
	public SEP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(istcParser.SEP);
		} else {
			return this.getToken(istcParser.SEP, i);
		}
	}
	public year(): YearContext {
		return this.getRuleContext(0, YearContext);
	}
	public work(): WorkContext {
		return this.getRuleContext(0, WorkContext);
	}
	public check(): CheckContext {
		return this.getRuleContext(0, CheckContext);
	}
	public EOF(): TerminalNode { return this.getToken(istcParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return istcParser.RULE_istc; }
	// @Override
	public enterRule(listener: istcListener): void {
		if (listener.enterIstc) {
			listener.enterIstc(this);
		}
	}
	// @Override
	public exitRule(listener: istcListener): void {
		if (listener.exitIstc) {
			listener.exitIstc(this);
		}
	}
}


export class RegistrationContext extends ParserRuleContext {
	public CHAR(): TerminalNode[];
	public CHAR(i: number): TerminalNode;
	public CHAR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(istcParser.CHAR);
		} else {
			return this.getToken(istcParser.CHAR, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return istcParser.RULE_registration; }
	// @Override
	public enterRule(listener: istcListener): void {
		if (listener.enterRegistration) {
			listener.enterRegistration(this);
		}
	}
	// @Override
	public exitRule(listener: istcListener): void {
		if (listener.exitRegistration) {
			listener.exitRegistration(this);
		}
	}
}


export class YearContext extends ParserRuleContext {
	public CHAR(): TerminalNode[];
	public CHAR(i: number): TerminalNode;
	public CHAR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(istcParser.CHAR);
		} else {
			return this.getToken(istcParser.CHAR, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return istcParser.RULE_year; }
	// @Override
	public enterRule(listener: istcListener): void {
		if (listener.enterYear) {
			listener.enterYear(this);
		}
	}
	// @Override
	public exitRule(listener: istcListener): void {
		if (listener.exitYear) {
			listener.exitYear(this);
		}
	}
}


export class WorkContext extends ParserRuleContext {
	public CHAR(): TerminalNode[];
	public CHAR(i: number): TerminalNode;
	public CHAR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(istcParser.CHAR);
		} else {
			return this.getToken(istcParser.CHAR, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return istcParser.RULE_work; }
	// @Override
	public enterRule(listener: istcListener): void {
		if (listener.enterWork) {
			listener.enterWork(this);
		}
	}
	// @Override
	public exitRule(listener: istcListener): void {
		if (listener.exitWork) {
			listener.exitWork(this);
		}
	}
}


export class CheckContext extends ParserRuleContext {
	public CHAR(): TerminalNode { return this.getToken(istcParser.CHAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return istcParser.RULE_check; }
	// @Override
	public enterRule(listener: istcListener): void {
		if (listener.enterCheck) {
			listener.enterCheck(this);
		}
	}
	// @Override
	public exitRule(listener: istcListener): void {
		if (listener.exitCheck) {
			listener.exitCheck(this);
		}
	}
}


