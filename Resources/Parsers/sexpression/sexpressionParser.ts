// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/sexpression/sexpression.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { sexpressionListener } from "./sexpressionListener";
import { sexpressionVisitor } from "./sexpressionVisitor";


export class sexpressionParser extends Parser {
	public static readonly STRING = 1;
	public static readonly WHITESPACE = 2;
	public static readonly NUMBER = 3;
	public static readonly SYMBOL = 4;
	public static readonly LPAREN = 5;
	public static readonly RPAREN = 6;
	public static readonly DOT = 7;
	public static readonly RULE_sexpr = 0;
	public static readonly RULE_item = 1;
	public static readonly RULE_list = 2;
	public static readonly RULE_atom = 3;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"sexpr", "item", "list", "atom",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, "'('", "')'", "'.'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "STRING", "WHITESPACE", "NUMBER", "SYMBOL", "LPAREN", "RPAREN", 
		"DOT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(sexpressionParser._LITERAL_NAMES, sexpressionParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return sexpressionParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "sexpression.g4"; }

	// @Override
	public get ruleNames(): string[] { return sexpressionParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return sexpressionParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(sexpressionParser._ATN, this);
	}
	// @RuleVersion(0)
	public sexpr(): SexprContext {
		let _localctx: SexprContext = new SexprContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, sexpressionParser.RULE_sexpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 11;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sexpressionParser.STRING) | (1 << sexpressionParser.NUMBER) | (1 << sexpressionParser.SYMBOL) | (1 << sexpressionParser.LPAREN) | (1 << sexpressionParser.DOT))) !== 0)) {
				{
				{
				this.state = 8;
				this.item();
				}
				}
				this.state = 13;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 14;
			this.match(sexpressionParser.EOF);
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
	public item(): ItemContext {
		let _localctx: ItemContext = new ItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, sexpressionParser.RULE_item);
		try {
			this.state = 24;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 16;
				this.atom();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 17;
				this.list();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 18;
				this.match(sexpressionParser.LPAREN);
				this.state = 19;
				this.item();
				this.state = 20;
				this.match(sexpressionParser.DOT);
				this.state = 21;
				this.item();
				this.state = 22;
				this.match(sexpressionParser.RPAREN);
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
	public list(): ListContext {
		let _localctx: ListContext = new ListContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, sexpressionParser.RULE_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 26;
			this.match(sexpressionParser.LPAREN);
			this.state = 30;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sexpressionParser.STRING) | (1 << sexpressionParser.NUMBER) | (1 << sexpressionParser.SYMBOL) | (1 << sexpressionParser.LPAREN) | (1 << sexpressionParser.DOT))) !== 0)) {
				{
				{
				this.state = 27;
				this.item();
				}
				}
				this.state = 32;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 33;
			this.match(sexpressionParser.RPAREN);
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
		this.enterRule(_localctx, 6, sexpressionParser.RULE_atom);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 35;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << sexpressionParser.STRING) | (1 << sexpressionParser.NUMBER) | (1 << sexpressionParser.SYMBOL) | (1 << sexpressionParser.DOT))) !== 0))) {
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\t(\x04\x02\t" +
		"\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x03\x02\x07\x02\f\n\x02" +
		"\f\x02\x0E\x02\x0F\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03\x1B\n\x03\x03\x04\x03\x04\x07" +
		"\x04\x1F\n\x04\f\x04\x0E\x04\"\v\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03" +
		"\x05\x02\x02\x02\x06\x02\x02\x04\x02\x06\x02\b\x02\x02\x03\x05\x02\x03" +
		"\x03\x05\x06\t\t\x02\'\x02\r\x03\x02\x02\x02\x04\x1A\x03\x02\x02\x02\x06" +
		"\x1C\x03\x02\x02\x02\b%\x03\x02\x02\x02\n\f\x05\x04\x03\x02\v\n\x03\x02" +
		"\x02\x02\f\x0F\x03\x02\x02\x02\r\v\x03\x02\x02\x02\r\x0E\x03\x02\x02\x02" +
		"\x0E\x10\x03\x02\x02\x02\x0F\r\x03\x02\x02\x02\x10\x11\x07\x02\x02\x03" +
		"\x11\x03\x03\x02\x02\x02\x12\x1B\x05\b\x05\x02\x13\x1B\x05\x06\x04\x02" +
		"\x14\x15\x07\x07\x02\x02\x15\x16\x05\x04\x03\x02\x16\x17\x07\t\x02\x02" +
		"\x17\x18\x05\x04\x03\x02\x18\x19\x07\b\x02\x02\x19\x1B\x03\x02\x02\x02" +
		"\x1A\x12\x03\x02\x02\x02\x1A\x13\x03\x02\x02\x02\x1A\x14\x03\x02\x02\x02" +
		"\x1B\x05\x03\x02\x02\x02\x1C \x07\x07\x02\x02\x1D\x1F\x05\x04\x03\x02" +
		"\x1E\x1D\x03\x02\x02\x02\x1F\"\x03\x02\x02\x02 \x1E\x03\x02\x02\x02 !" +
		"\x03\x02\x02\x02!#\x03\x02\x02\x02\" \x03\x02\x02\x02#$\x07\b\x02\x02" +
		"$\x07\x03\x02\x02\x02%&\t\x02\x02\x02&\t\x03\x02\x02\x02\x05\r\x1A ";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!sexpressionParser.__ATN) {
			sexpressionParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(sexpressionParser._serializedATN));
		}

		return sexpressionParser.__ATN;
	}

}

export class SexprContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(sexpressionParser.EOF, 0); }
	public item(): ItemContext[];
	public item(i: number): ItemContext;
	public item(i?: number): ItemContext | ItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ItemContext);
		} else {
			return this.getRuleContext(i, ItemContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sexpressionParser.RULE_sexpr; }
	// @Override
	public enterRule(listener: sexpressionListener): void {
		if (listener.enterSexpr) {
			listener.enterSexpr(this);
		}
	}
	// @Override
	public exitRule(listener: sexpressionListener): void {
		if (listener.exitSexpr) {
			listener.exitSexpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sexpressionVisitor<Result>): Result {
		if (visitor.visitSexpr) {
			return visitor.visitSexpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ItemContext extends ParserRuleContext {
	public atom(): AtomContext | undefined {
		return this.tryGetRuleContext(0, AtomContext);
	}
	public list(): ListContext | undefined {
		return this.tryGetRuleContext(0, ListContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(sexpressionParser.LPAREN, 0); }
	public item(): ItemContext[];
	public item(i: number): ItemContext;
	public item(i?: number): ItemContext | ItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ItemContext);
		} else {
			return this.getRuleContext(i, ItemContext);
		}
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(sexpressionParser.DOT, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(sexpressionParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sexpressionParser.RULE_item; }
	// @Override
	public enterRule(listener: sexpressionListener): void {
		if (listener.enterItem) {
			listener.enterItem(this);
		}
	}
	// @Override
	public exitRule(listener: sexpressionListener): void {
		if (listener.exitItem) {
			listener.exitItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sexpressionVisitor<Result>): Result {
		if (visitor.visitItem) {
			return visitor.visitItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ListContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(sexpressionParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(sexpressionParser.RPAREN, 0); }
	public item(): ItemContext[];
	public item(i: number): ItemContext;
	public item(i?: number): ItemContext | ItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ItemContext);
		} else {
			return this.getRuleContext(i, ItemContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sexpressionParser.RULE_list; }
	// @Override
	public enterRule(listener: sexpressionListener): void {
		if (listener.enterList) {
			listener.enterList(this);
		}
	}
	// @Override
	public exitRule(listener: sexpressionListener): void {
		if (listener.exitList) {
			listener.exitList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sexpressionVisitor<Result>): Result {
		if (visitor.visitList) {
			return visitor.visitList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AtomContext extends ParserRuleContext {
	public STRING(): TerminalNode | undefined { return this.tryGetToken(sexpressionParser.STRING, 0); }
	public SYMBOL(): TerminalNode | undefined { return this.tryGetToken(sexpressionParser.SYMBOL, 0); }
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(sexpressionParser.NUMBER, 0); }
	public DOT(): TerminalNode | undefined { return this.tryGetToken(sexpressionParser.DOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return sexpressionParser.RULE_atom; }
	// @Override
	public enterRule(listener: sexpressionListener): void {
		if (listener.enterAtom) {
			listener.enterAtom(this);
		}
	}
	// @Override
	public exitRule(listener: sexpressionListener): void {
		if (listener.exitAtom) {
			listener.exitAtom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: sexpressionVisitor<Result>): Result {
		if (visitor.visitAtom) {
			return visitor.visitAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


