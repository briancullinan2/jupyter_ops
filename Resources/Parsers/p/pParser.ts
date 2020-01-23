// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/p/p.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { pListener } from "./pListener";
import { pVisitor } from "./pVisitor";


export class pParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly R = 3;
	public static readonly L = 4;
	public static readonly WS = 5;
	public static readonly RULE_prog = 0;
	public static readonly RULE_symbol = 1;
	public static readonly RULE_iterate = 2;
	public static readonly RULE_atom = 3;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"prog", "symbol", "iterate", "atom",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'('", "')'", "'R'", "'\u03BB'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "R", "L", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(pParser._LITERAL_NAMES, pParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return pParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "p.g4"; }

	// @Override
	public get ruleNames(): string[] { return pParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return pParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(pParser._ATN, this);
	}
	// @RuleVersion(0)
	public prog(): ProgContext {
		let _localctx: ProgContext = new ProgContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, pParser.RULE_prog);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 9;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 8;
				this.symbol();
				}
				}
				this.state = 11;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << pParser.T__0) | (1 << pParser.R) | (1 << pParser.L))) !== 0));
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
	public symbol(): SymbolContext {
		let _localctx: SymbolContext = new SymbolContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, pParser.RULE_symbol);
		try {
			this.state = 15;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case pParser.T__0:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 13;
				this.iterate();
				}
				break;
			case pParser.R:
			case pParser.L:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 14;
				this.atom();
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
	public iterate(): IterateContext {
		let _localctx: IterateContext = new IterateContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, pParser.RULE_iterate);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 17;
			this.match(pParser.T__0);
			this.state = 19;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 18;
				this.symbol();
				}
				}
				this.state = 21;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << pParser.T__0) | (1 << pParser.R) | (1 << pParser.L))) !== 0));
			this.state = 23;
			this.match(pParser.T__1);
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
	public atom(): AtomContext {
		let _localctx: AtomContext = new AtomContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, pParser.RULE_atom);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 25;
			_la = this._input.LA(1);
			if (!(_la === pParser.R || _la === pParser.L)) {
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x07\x1E\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x03\x02\x06\x02\f\n\x02" +
		"\r\x02\x0E\x02\r\x03\x03\x03\x03\x05\x03\x12\n\x03\x03\x04\x03\x04\x06" +
		"\x04\x16\n\x04\r\x04\x0E\x04\x17\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05" +
		"\x02\x02\x02\x06\x02\x02\x04\x02\x06\x02\b\x02\x02\x03\x03\x02\x05\x06" +
		"\x02\x1C\x02\v\x03\x02\x02\x02\x04\x11\x03\x02\x02\x02\x06\x13\x03\x02" +
		"\x02\x02\b\x1B\x03\x02\x02\x02\n\f\x05\x04\x03\x02\v\n\x03\x02\x02\x02" +
		"\f\r\x03\x02\x02\x02\r\v\x03\x02\x02\x02\r\x0E\x03\x02\x02\x02\x0E\x03" +
		"\x03\x02\x02\x02\x0F\x12\x05\x06\x04\x02\x10\x12\x05\b\x05\x02\x11\x0F" +
		"\x03\x02\x02\x02\x11\x10\x03\x02\x02\x02\x12\x05\x03\x02\x02\x02\x13\x15" +
		"\x07\x03\x02\x02\x14\x16\x05\x04\x03\x02\x15\x14\x03\x02\x02\x02\x16\x17" +
		"\x03\x02\x02\x02\x17\x15\x03\x02\x02\x02\x17\x18\x03\x02\x02\x02\x18\x19" +
		"\x03\x02\x02\x02\x19\x1A\x07\x04\x02\x02\x1A\x07\x03\x02\x02\x02\x1B\x1C" +
		"\t\x02\x02\x02\x1C\t\x03\x02\x02\x02\x05\r\x11\x17";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!pParser.__ATN) {
			pParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(pParser._serializedATN));
		}

		return pParser.__ATN;
	}

}

export class ProgContext extends ParserRuleContext {
	public symbol(): SymbolContext[];
	public symbol(i: number): SymbolContext;
	public symbol(i?: number): SymbolContext | SymbolContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SymbolContext);
		} else {
			return this.getRuleContext(i, SymbolContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pParser.RULE_prog; }
	// @Override
	public enterRule(listener: pListener): void {
		if (listener.enterProg) {
			listener.enterProg(this);
		}
	}
	// @Override
	public exitRule(listener: pListener): void {
		if (listener.exitProg) {
			listener.exitProg(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pVisitor<Result>): Result {
		if (visitor.visitProg) {
			return visitor.visitProg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SymbolContext extends ParserRuleContext {
	public iterate(): IterateContext | undefined {
		return this.tryGetRuleContext(0, IterateContext);
	}
	public atom(): AtomContext | undefined {
		return this.tryGetRuleContext(0, AtomContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pParser.RULE_symbol; }
	// @Override
	public enterRule(listener: pListener): void {
		if (listener.enterSymbol) {
			listener.enterSymbol(this);
		}
	}
	// @Override
	public exitRule(listener: pListener): void {
		if (listener.exitSymbol) {
			listener.exitSymbol(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pVisitor<Result>): Result {
		if (visitor.visitSymbol) {
			return visitor.visitSymbol(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IterateContext extends ParserRuleContext {
	public symbol(): SymbolContext[];
	public symbol(i: number): SymbolContext;
	public symbol(i?: number): SymbolContext | SymbolContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SymbolContext);
		} else {
			return this.getRuleContext(i, SymbolContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pParser.RULE_iterate; }
	// @Override
	public enterRule(listener: pListener): void {
		if (listener.enterIterate) {
			listener.enterIterate(this);
		}
	}
	// @Override
	public exitRule(listener: pListener): void {
		if (listener.exitIterate) {
			listener.exitIterate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pVisitor<Result>): Result {
		if (visitor.visitIterate) {
			return visitor.visitIterate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AtomContext extends ParserRuleContext {
	public R(): TerminalNode | undefined { return this.tryGetToken(pParser.R, 0); }
	public L(): TerminalNode | undefined { return this.tryGetToken(pParser.L, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return pParser.RULE_atom; }
	// @Override
	public enterRule(listener: pListener): void {
		if (listener.enterAtom) {
			listener.enterAtom(this);
		}
	}
	// @Override
	public exitRule(listener: pListener): void {
		if (listener.exitAtom) {
			listener.exitAtom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: pVisitor<Result>): Result {
		if (visitor.visitAtom) {
			return visitor.visitAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


