// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/inf/inf.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { infListener } from "./infListener";
import { infVisitor } from "./infVisitor";


export class infParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly CHARS = 5;
	public static readonly STRING = 6;
	public static readonly COMMENT = 7;
	public static readonly EOL = 8;
	public static readonly WS = 9;
	public static readonly RULE_inf = 0;
	public static readonly RULE_section = 1;
	public static readonly RULE_sectionheader = 2;
	public static readonly RULE_string = 3;
	public static readonly RULE_line = 4;
	public static readonly RULE_stringlist = 5;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"inf", "section", "sectionheader", "string", "line", "stringlist",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'['", "']'", "'='", "','",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, "CHARS", "STRING", 
		"COMMENT", "EOL", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(infParser._LITERAL_NAMES, infParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return infParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "inf.g4"; }

	// @Override
	public get ruleNames(): string[] { return infParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return infParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(infParser._ATN, this);
	}
	// @RuleVersion(0)
	public inf(): InfContext {
		let _localctx: InfContext = new InfContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, infParser.RULE_inf);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 16;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === infParser.T__0 || _la === infParser.EOL) {
				{
				this.state = 14;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case infParser.T__0:
					{
					this.state = 12;
					this.section();
					}
					break;
				case infParser.EOL:
					{
					this.state = 13;
					this.match(infParser.EOL);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 18;
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
	public section(): SectionContext {
		let _localctx: SectionContext = new SectionContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, infParser.RULE_section);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 19;
			this.sectionheader();
			this.state = 23;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === infParser.CHARS || _la === infParser.STRING) {
				{
				{
				this.state = 20;
				this.line();
				}
				}
				this.state = 25;
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
	public sectionheader(): SectionheaderContext {
		let _localctx: SectionheaderContext = new SectionheaderContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, infParser.RULE_sectionheader);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 26;
			this.match(infParser.T__0);
			this.state = 27;
			this.string();
			this.state = 28;
			this.match(infParser.T__1);
			this.state = 29;
			this.match(infParser.EOL);
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
		this.enterRule(_localctx, 6, infParser.RULE_string);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 31;
			_la = this._input.LA(1);
			if (!(_la === infParser.CHARS || _la === infParser.STRING)) {
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
	public line(): LineContext {
		let _localctx: LineContext = new LineContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, infParser.RULE_line);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 33;
			this.stringlist();
			this.state = 36;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === infParser.T__2) {
				{
				this.state = 34;
				this.match(infParser.T__2);
				this.state = 35;
				this.stringlist();
				}
			}

			this.state = 38;
			this.match(infParser.EOL);
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
	public stringlist(): StringlistContext {
		let _localctx: StringlistContext = new StringlistContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, infParser.RULE_stringlist);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 40;
			this.string();
			this.state = 47;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === infParser.T__3) {
				{
				{
				this.state = 41;
				this.match(infParser.T__3);
				this.state = 43;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === infParser.CHARS || _la === infParser.STRING) {
					{
					this.state = 42;
					this.string();
					}
				}

				}
				}
				this.state = 49;
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

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\v5\x04\x02\t" +
		"\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07\t" +
		"\x07\x03\x02\x03\x02\x07\x02\x11\n\x02\f\x02\x0E\x02\x14\v\x02\x03\x03" +
		"\x03\x03\x07\x03\x18\n\x03\f\x03\x0E\x03\x1B\v\x03\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x05\x06\'" +
		"\n\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x05\x07.\n\x07\x07\x07" +
		"0\n\x07\f\x07\x0E\x073\v\x07\x03\x07\x02\x02\x02\b\x02\x02\x04\x02\x06" +
		"\x02\b\x02\n\x02\f\x02\x02\x03\x03\x02\x07\b\x024\x02\x12\x03\x02\x02" +
		"\x02\x04\x15\x03\x02\x02\x02\x06\x1C\x03\x02\x02\x02\b!\x03\x02\x02\x02" +
		"\n#\x03\x02\x02\x02\f*\x03\x02\x02\x02\x0E\x11\x05\x04\x03\x02\x0F\x11" +
		"\x07\n\x02\x02\x10\x0E\x03\x02\x02\x02\x10\x0F\x03\x02\x02\x02\x11\x14" +
		"\x03\x02\x02\x02\x12\x10\x03\x02\x02\x02\x12\x13\x03\x02\x02\x02\x13\x03" +
		"\x03\x02\x02\x02\x14\x12\x03\x02\x02\x02\x15\x19\x05\x06\x04\x02\x16\x18" +
		"\x05\n\x06\x02\x17\x16\x03\x02\x02\x02\x18\x1B\x03\x02\x02\x02\x19\x17" +
		"\x03\x02\x02\x02\x19\x1A\x03\x02\x02\x02\x1A\x05\x03\x02\x02\x02\x1B\x19" +
		"\x03\x02\x02\x02\x1C\x1D\x07\x03\x02\x02\x1D\x1E\x05\b\x05\x02\x1E\x1F" +
		"\x07\x04\x02\x02\x1F \x07\n\x02\x02 \x07\x03\x02\x02\x02!\"\t\x02\x02" +
		"\x02\"\t\x03\x02\x02\x02#&\x05\f\x07\x02$%\x07\x05\x02\x02%\'\x05\f\x07" +
		"\x02&$\x03\x02\x02\x02&\'\x03\x02\x02\x02\'(\x03\x02\x02\x02()\x07\n\x02" +
		"\x02)\v\x03\x02\x02\x02*1\x05\b\x05\x02+-\x07\x06\x02\x02,.\x05\b\x05" +
		"\x02-,\x03\x02\x02\x02-.\x03\x02\x02\x02.0\x03\x02\x02\x02/+\x03\x02\x02" +
		"\x0203\x03\x02\x02\x021/\x03\x02\x02\x0212\x03\x02\x02\x022\r\x03\x02" +
		"\x02\x0231\x03\x02\x02\x02\b\x10\x12\x19&-1";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!infParser.__ATN) {
			infParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(infParser._serializedATN));
		}

		return infParser.__ATN;
	}

}

export class InfContext extends ParserRuleContext {
	public section(): SectionContext[];
	public section(i: number): SectionContext;
	public section(i?: number): SectionContext | SectionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SectionContext);
		} else {
			return this.getRuleContext(i, SectionContext);
		}
	}
	public EOL(): TerminalNode[];
	public EOL(i: number): TerminalNode;
	public EOL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(infParser.EOL);
		} else {
			return this.getToken(infParser.EOL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return infParser.RULE_inf; }
	// @Override
	public enterRule(listener: infListener): void {
		if (listener.enterInf) {
			listener.enterInf(this);
		}
	}
	// @Override
	public exitRule(listener: infListener): void {
		if (listener.exitInf) {
			listener.exitInf(this);
		}
	}
	// @Override
	public accept<Result>(visitor: infVisitor<Result>): Result {
		if (visitor.visitInf) {
			return visitor.visitInf(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SectionContext extends ParserRuleContext {
	public sectionheader(): SectionheaderContext {
		return this.getRuleContext(0, SectionheaderContext);
	}
	public line(): LineContext[];
	public line(i: number): LineContext;
	public line(i?: number): LineContext | LineContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LineContext);
		} else {
			return this.getRuleContext(i, LineContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return infParser.RULE_section; }
	// @Override
	public enterRule(listener: infListener): void {
		if (listener.enterSection) {
			listener.enterSection(this);
		}
	}
	// @Override
	public exitRule(listener: infListener): void {
		if (listener.exitSection) {
			listener.exitSection(this);
		}
	}
	// @Override
	public accept<Result>(visitor: infVisitor<Result>): Result {
		if (visitor.visitSection) {
			return visitor.visitSection(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SectionheaderContext extends ParserRuleContext {
	public string(): StringContext {
		return this.getRuleContext(0, StringContext);
	}
	public EOL(): TerminalNode { return this.getToken(infParser.EOL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return infParser.RULE_sectionheader; }
	// @Override
	public enterRule(listener: infListener): void {
		if (listener.enterSectionheader) {
			listener.enterSectionheader(this);
		}
	}
	// @Override
	public exitRule(listener: infListener): void {
		if (listener.exitSectionheader) {
			listener.exitSectionheader(this);
		}
	}
	// @Override
	public accept<Result>(visitor: infVisitor<Result>): Result {
		if (visitor.visitSectionheader) {
			return visitor.visitSectionheader(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StringContext extends ParserRuleContext {
	public CHARS(): TerminalNode | undefined { return this.tryGetToken(infParser.CHARS, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(infParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return infParser.RULE_string; }
	// @Override
	public enterRule(listener: infListener): void {
		if (listener.enterString) {
			listener.enterString(this);
		}
	}
	// @Override
	public exitRule(listener: infListener): void {
		if (listener.exitString) {
			listener.exitString(this);
		}
	}
	// @Override
	public accept<Result>(visitor: infVisitor<Result>): Result {
		if (visitor.visitString) {
			return visitor.visitString(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LineContext extends ParserRuleContext {
	public stringlist(): StringlistContext[];
	public stringlist(i: number): StringlistContext;
	public stringlist(i?: number): StringlistContext | StringlistContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StringlistContext);
		} else {
			return this.getRuleContext(i, StringlistContext);
		}
	}
	public EOL(): TerminalNode { return this.getToken(infParser.EOL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return infParser.RULE_line; }
	// @Override
	public enterRule(listener: infListener): void {
		if (listener.enterLine) {
			listener.enterLine(this);
		}
	}
	// @Override
	public exitRule(listener: infListener): void {
		if (listener.exitLine) {
			listener.exitLine(this);
		}
	}
	// @Override
	public accept<Result>(visitor: infVisitor<Result>): Result {
		if (visitor.visitLine) {
			return visitor.visitLine(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StringlistContext extends ParserRuleContext {
	public string(): StringContext[];
	public string(i: number): StringContext;
	public string(i?: number): StringContext | StringContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StringContext);
		} else {
			return this.getRuleContext(i, StringContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return infParser.RULE_stringlist; }
	// @Override
	public enterRule(listener: infListener): void {
		if (listener.enterStringlist) {
			listener.enterStringlist(this);
		}
	}
	// @Override
	public exitRule(listener: infListener): void {
		if (listener.exitStringlist) {
			listener.exitStringlist(this);
		}
	}
	// @Override
	public accept<Result>(visitor: infVisitor<Result>): Result {
		if (visitor.visitStringlist) {
			return visitor.visitStringlist(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


