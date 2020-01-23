// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/sickbay/sickbay.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { sickbayListener } from "./sickbayListener";
import { sickbayVisitor } from "./sickbayVisitor";


export class sickbayParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly INTOP = 18;
	public static readonly IINTID = 19;
	public static readonly INTCONST = 20;
	public static readonly STRCONST = 21;
	public static readonly ARBTEXT = 22;
	public static readonly NL = 23;
	public static readonly WS = 24;
	public static readonly RULE_sickbay = 0;
	public static readonly RULE_line = 1;
	public static readonly RULE_stmt = 2;
	public static readonly RULE_intExpr = 3;
	public static readonly RULE_intVar = 4;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"sickbay", "line", "stmt", "intExpr", "intVar",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "':'", "'REM'", "'LET'", "'='", "'GOTO'", "'GOSUB'", "'RETURN'", 
		"'END'", "'PROLONG'", "'CUTSHORT'", "'DIM'", "'RING'", "'('", "')'", "'INPUT'", 
		"'CHR$'", "'RND%'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, "INTOP", "IINTID", "INTCONST", 
		"STRCONST", "ARBTEXT", "NL", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(sickbayParser._LITERAL_NAMES, sickbayParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return sickbayParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "sickbay.g4"; }

	// @Override
	public get ruleNames(): string[] { return sickbayParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return sickbayParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(sickbayParser._ATN, this);
	}
	// @RuleVersion(0)
	public sickbay(): SickbayContext {
		let _localctx: SickbayContext = new SickbayContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, sickbayParser.RULE_sickbay);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 13;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sickbayParser.T__12) | (1 << sickbayParser.T__16) | (1 << sickbayParser.IINTID) | (1 << sickbayParser.INTCONST))) !== 0)) {
				{
				{
				this.state = 10;
				this.line();
				}
				}
				this.state = 15;
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
	public line(): LineContext {
		let _localctx: LineContext = new LineContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, sickbayParser.RULE_line);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 16;
			this.intExpr();
			this.state = 17;
			this.stmt();
			this.state = 22;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === sickbayParser.T__0) {
				{
				{
				this.state = 18;
				this.match(sickbayParser.T__0);
				this.state = 19;
				this.stmt();
				}
				}
				this.state = 24;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 25;
			this.match(sickbayParser.NL);
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
	public stmt(): StmtContext {
		let _localctx: StmtContext = new StmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, sickbayParser.RULE_stmt);
		let _la: number;
		try {
			this.state = 54;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case sickbayParser.T__1:
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 27;
				this.match(sickbayParser.T__1);
				this.state = 28;
				this.match(sickbayParser.ARBTEXT);
				}
				}
				break;
			case sickbayParser.T__2:
				this.enterOuterAlt(_localctx, 2);
				{
				{
				this.state = 29;
				this.match(sickbayParser.T__2);
				this.state = 30;
				this.intVar();
				this.state = 31;
				this.match(sickbayParser.T__3);
				this.state = 32;
				this.intExpr();
				}
				}
				break;
			case sickbayParser.T__4:
				this.enterOuterAlt(_localctx, 3);
				{
				{
				this.state = 34;
				this.match(sickbayParser.T__4);
				this.state = 35;
				this.match(sickbayParser.INTCONST);
				}
				}
				break;
			case sickbayParser.T__5:
				this.enterOuterAlt(_localctx, 4);
				{
				{
				this.state = 36;
				this.match(sickbayParser.T__5);
				this.state = 37;
				this.match(sickbayParser.INTCONST);
				}
				}
				break;
			case sickbayParser.T__6:
			case sickbayParser.T__7:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 38;
				_la = this._input.LA(1);
				if (!(_la === sickbayParser.T__6 || _la === sickbayParser.T__7)) {
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
			case sickbayParser.T__8:
				this.enterOuterAlt(_localctx, 6);
				{
				{
				this.state = 39;
				this.match(sickbayParser.T__8);
				this.state = 40;
				this.match(sickbayParser.INTCONST);
				}
				}
				break;
			case sickbayParser.T__9:
				this.enterOuterAlt(_localctx, 7);
				{
				{
				this.state = 41;
				this.match(sickbayParser.T__9);
				}
				}
				break;
			case sickbayParser.T__10:
				this.enterOuterAlt(_localctx, 8);
				{
				{
				this.state = 42;
				this.match(sickbayParser.T__10);
				this.state = 43;
				this.match(sickbayParser.T__11);
				this.state = 44;
				this.match(sickbayParser.T__12);
				this.state = 45;
				this.intExpr();
				this.state = 46;
				this.match(sickbayParser.T__13);
				}
				}
				break;
			case sickbayParser.T__14:
				this.enterOuterAlt(_localctx, 9);
				{
				{
				this.state = 48;
				this.match(sickbayParser.T__14);
				this.state = 52;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case sickbayParser.IINTID:
					{
					this.state = 49;
					this.intVar();
					}
					break;
				case sickbayParser.T__15:
					{
					this.state = 50;
					this.match(sickbayParser.T__15);
					this.state = 51;
					this.intVar();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
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
	public intExpr(): IntExprContext {
		let _localctx: IntExprContext = new IntExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, sickbayParser.RULE_intExpr);
		try {
			this.state = 69;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case sickbayParser.IINTID:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 56;
				this.intVar();
				}
				break;
			case sickbayParser.INTCONST:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 57;
				this.match(sickbayParser.INTCONST);
				}
				break;
			case sickbayParser.T__16:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 58;
				this.match(sickbayParser.T__16);
				this.state = 59;
				this.match(sickbayParser.T__12);
				this.state = 60;
				this.intExpr();
				this.state = 61;
				this.match(sickbayParser.T__13);
				}
				break;
			case sickbayParser.T__12:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 63;
				this.match(sickbayParser.T__12);
				this.state = 64;
				this.intExpr();
				this.state = 65;
				this.match(sickbayParser.INTOP);
				this.state = 66;
				this.intExpr();
				this.state = 67;
				this.match(sickbayParser.T__13);
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
	public intVar(): IntVarContext {
		let _localctx: IntVarContext = new IntVarContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, sickbayParser.RULE_intVar);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 71;
			this.match(sickbayParser.IINTID);
			this.state = 76;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === sickbayParser.T__12) {
				{
				this.state = 72;
				this.match(sickbayParser.T__12);
				this.state = 73;
				this.intExpr();
				this.state = 74;
				this.match(sickbayParser.T__13);
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

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x1AQ\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x03\x02" +
		"\x07\x02\x0E\n\x02\f\x02\x0E\x02\x11\v\x02\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x07\x03\x17\n\x03\f\x03\x0E\x03\x1A\v\x03\x03\x03\x03\x03\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x047\n\x04\x05\x04" +
		"9\n\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05H\n\x05\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x05\x06O\n\x06\x03\x06\x02\x02\x02\x07\x02\x02" +
		"\x04\x02\x06\x02\b\x02\n\x02\x02\x03\x03\x02\t\n\x02Z\x02\x0F\x03\x02" +
		"\x02\x02\x04\x12\x03\x02\x02\x02\x068\x03\x02\x02\x02\bG\x03\x02\x02\x02" +
		"\nI\x03\x02\x02\x02\f\x0E\x05\x04\x03\x02\r\f\x03\x02\x02\x02\x0E\x11" +
		"\x03\x02\x02\x02\x0F\r\x03\x02\x02\x02\x0F\x10\x03\x02\x02\x02\x10\x03" +
		"\x03\x02\x02\x02\x11\x0F\x03\x02\x02\x02\x12\x13\x05\b\x05\x02\x13\x18" +
		"\x05\x06\x04\x02\x14\x15\x07\x03\x02\x02\x15\x17\x05\x06\x04\x02\x16\x14" +
		"\x03\x02\x02\x02\x17\x1A\x03\x02\x02\x02\x18\x16\x03\x02\x02\x02\x18\x19" +
		"\x03\x02\x02\x02\x19\x1B\x03\x02\x02\x02\x1A\x18\x03\x02\x02\x02\x1B\x1C" +
		"\x07\x19\x02\x02\x1C\x05\x03\x02\x02\x02\x1D\x1E\x07\x04\x02\x02\x1E9" +
		"\x07\x18\x02\x02\x1F \x07\x05\x02\x02 !\x05\n\x06\x02!\"\x07\x06\x02\x02" +
		"\"#\x05\b\x05\x02#9\x03\x02\x02\x02$%\x07\x07\x02\x02%9\x07\x16\x02\x02" +
		"&\'\x07\b\x02\x02\'9\x07\x16\x02\x02(9\t\x02\x02\x02)*\x07\v\x02\x02*" +
		"9\x07\x16\x02\x02+9\x07\f\x02\x02,-\x07\r\x02\x02-.\x07\x0E\x02\x02./" +
		"\x07\x0F\x02\x02/0\x05\b\x05\x0201\x07\x10\x02\x0219\x03\x02\x02\x022" +
		"6\x07\x11\x02\x0237\x05\n\x06\x0245\x07\x12\x02\x0257\x05\n\x06\x0263" +
		"\x03\x02\x02\x0264\x03\x02\x02\x0279\x03\x02\x02\x028\x1D\x03\x02\x02" +
		"\x028\x1F\x03\x02\x02\x028$\x03\x02\x02\x028&\x03\x02\x02\x028(\x03\x02" +
		"\x02\x028)\x03\x02\x02\x028+\x03\x02\x02\x028,\x03\x02\x02\x0282\x03\x02" +
		"\x02\x029\x07\x03\x02\x02\x02:H\x05\n\x06\x02;H\x07\x16\x02\x02<=\x07" +
		"\x13\x02\x02=>\x07\x0F\x02\x02>?\x05\b\x05\x02?@\x07\x10\x02\x02@H\x03" +
		"\x02\x02\x02AB\x07\x0F\x02\x02BC\x05\b\x05\x02CD\x07\x14\x02\x02DE\x05" +
		"\b\x05\x02EF\x07\x10\x02\x02FH\x03\x02\x02\x02G:\x03\x02\x02\x02G;\x03" +
		"\x02\x02\x02G<\x03\x02\x02\x02GA\x03\x02\x02\x02H\t\x03\x02\x02\x02IN" +
		"\x07\x15\x02\x02JK\x07\x0F\x02\x02KL\x05\b\x05\x02LM\x07\x10\x02\x02M" +
		"O\x03\x02\x02\x02NJ\x03\x02\x02\x02NO\x03\x02\x02\x02O\v\x03\x02\x02\x02" +
		"\b\x0F\x1868GN";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!sickbayParser.__ATN) {
			sickbayParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(sickbayParser._serializedATN));
		}

		return sickbayParser.__ATN;
	}

}

export class SickbayContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return sickbayParser.RULE_sickbay; }
	// @Override
	public enterRule(listener: sickbayListener): void {
		if (listener.enterSickbay) {
			listener.enterSickbay(this);
		}
	}
	// @Override
	public exitRule(listener: sickbayListener): void {
		if (listener.exitSickbay) {
			listener.exitSickbay(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sickbayVisitor<Result>): Result {
		if (visitor.visitSickbay) {
			return visitor.visitSickbay(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LineContext extends ParserRuleContext {
	public intExpr(): IntExprContext {
		return this.getRuleContext(0, IntExprContext);
	}
	public stmt(): StmtContext[];
	public stmt(i: number): StmtContext;
	public stmt(i?: number): StmtContext | StmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StmtContext);
		} else {
			return this.getRuleContext(i, StmtContext);
		}
	}
	public NL(): TerminalNode { return this.getToken(sickbayParser.NL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sickbayParser.RULE_line; }
	// @Override
	public enterRule(listener: sickbayListener): void {
		if (listener.enterLine) {
			listener.enterLine(this);
		}
	}
	// @Override
	public exitRule(listener: sickbayListener): void {
		if (listener.exitLine) {
			listener.exitLine(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sickbayVisitor<Result>): Result {
		if (visitor.visitLine) {
			return visitor.visitLine(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StmtContext extends ParserRuleContext {
	public ARBTEXT(): TerminalNode | undefined { return this.tryGetToken(sickbayParser.ARBTEXT, 0); }
	public intVar(): IntVarContext | undefined {
		return this.tryGetRuleContext(0, IntVarContext);
	}
	public intExpr(): IntExprContext | undefined {
		return this.tryGetRuleContext(0, IntExprContext);
	}
	public INTCONST(): TerminalNode | undefined { return this.tryGetToken(sickbayParser.INTCONST, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sickbayParser.RULE_stmt; }
	// @Override
	public enterRule(listener: sickbayListener): void {
		if (listener.enterStmt) {
			listener.enterStmt(this);
		}
	}
	// @Override
	public exitRule(listener: sickbayListener): void {
		if (listener.exitStmt) {
			listener.exitStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sickbayVisitor<Result>): Result {
		if (visitor.visitStmt) {
			return visitor.visitStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IntExprContext extends ParserRuleContext {
	public intVar(): IntVarContext | undefined {
		return this.tryGetRuleContext(0, IntVarContext);
	}
	public INTCONST(): TerminalNode | undefined { return this.tryGetToken(sickbayParser.INTCONST, 0); }
	public intExpr(): IntExprContext[];
	public intExpr(i: number): IntExprContext;
	public intExpr(i?: number): IntExprContext | IntExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IntExprContext);
		} else {
			return this.getRuleContext(i, IntExprContext);
		}
	}
	public INTOP(): TerminalNode | undefined { return this.tryGetToken(sickbayParser.INTOP, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sickbayParser.RULE_intExpr; }
	// @Override
	public enterRule(listener: sickbayListener): void {
		if (listener.enterIntExpr) {
			listener.enterIntExpr(this);
		}
	}
	// @Override
	public exitRule(listener: sickbayListener): void {
		if (listener.exitIntExpr) {
			listener.exitIntExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sickbayVisitor<Result>): Result {
		if (visitor.visitIntExpr) {
			return visitor.visitIntExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IntVarContext extends ParserRuleContext {
	public IINTID(): TerminalNode { return this.getToken(sickbayParser.IINTID, 0); }
	public intExpr(): IntExprContext | undefined {
		return this.tryGetRuleContext(0, IntExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sickbayParser.RULE_intVar; }
	// @Override
	public enterRule(listener: sickbayListener): void {
		if (listener.enterIntVar) {
			listener.enterIntVar(this);
		}
	}
	// @Override
	public exitRule(listener: sickbayListener): void {
		if (listener.exitIntVar) {
			listener.exitIntVar(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sickbayVisitor<Result>): Result {
		if (visitor.visitIntVar) {
			return visitor.visitIntVar(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


