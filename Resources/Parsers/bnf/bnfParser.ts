// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/bnf/bnf.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { bnfListener } from "./bnfListener";

export class bnfParser extends Parser {
	public static readonly ASSIGN = 1;
	public static readonly LPAREN = 2;
	public static readonly RPAREN = 3;
	public static readonly LBRACE = 4;
	public static readonly RBRACE = 5;
	public static readonly LEND = 6;
	public static readonly REND = 7;
	public static readonly BAR = 8;
	public static readonly GT = 9;
	public static readonly LT = 10;
	public static readonly ID = 11;
	public static readonly WS = 12;
	public static readonly RULE_rulelist = 0;
	public static readonly RULE_rule_ = 1;
	public static readonly RULE_lhs = 2;
	public static readonly RULE_rhs = 3;
	public static readonly RULE_alternatives = 4;
	public static readonly RULE_alternative = 5;
	public static readonly RULE_element = 6;
	public static readonly RULE_optional = 7;
	public static readonly RULE_zeroormore = 8;
	public static readonly RULE_oneormore = 9;
	public static readonly RULE_text = 10;
	public static readonly RULE_id = 11;
	public static readonly RULE_ruleid = 12;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"rulelist", "rule_", "lhs", "rhs", "alternatives", "alternative", "element", 
		"optional", "zeroormore", "oneormore", "text", "id", "ruleid",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'::='", "')'", "'('", "'}'", "'{'", "']'", "'['", "'|'", "'>'", 
		"'<'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "ASSIGN", "LPAREN", "RPAREN", "LBRACE", "RBRACE", "LEND", "REND", 
		"BAR", "GT", "LT", "ID", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(bnfParser._LITERAL_NAMES, bnfParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return bnfParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "bnf.g4"; }

	// @Override
	public get ruleNames(): string[] { return bnfParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return bnfParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(bnfParser._ATN, this);
	}
	// @RuleVersion(0)
	public rulelist(): RulelistContext {
		let _localctx: RulelistContext = new RulelistContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, bnfParser.RULE_rulelist);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 29;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bnfParser.LT) {
				{
				{
				this.state = 26;
				this.rule_();
				}
				}
				this.state = 31;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 32;
			this.match(bnfParser.EOF);
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
		this.enterRule(_localctx, 2, bnfParser.RULE_rule_);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 34;
			this.lhs();
			this.state = 35;
			this.match(bnfParser.ASSIGN);
			this.state = 36;
			this.rhs();
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
	public lhs(): LhsContext {
		let _localctx: LhsContext = new LhsContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, bnfParser.RULE_lhs);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 38;
			this.id();
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
	public rhs(): RhsContext {
		let _localctx: RhsContext = new RhsContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, bnfParser.RULE_rhs);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 40;
			this.alternatives();
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
	public alternatives(): AlternativesContext {
		let _localctx: AlternativesContext = new AlternativesContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, bnfParser.RULE_alternatives);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 42;
			this.alternative();
			this.state = 47;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === bnfParser.BAR) {
				{
				{
				this.state = 43;
				this.match(bnfParser.BAR);
				this.state = 44;
				this.alternative();
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
	// @RuleVersion(0)
	public alternative(): AlternativeContext {
		let _localctx: AlternativeContext = new AlternativeContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, bnfParser.RULE_alternative);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 53;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 50;
					this.element();
					}
					}
				}
				this.state = 55;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
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
	public element(): ElementContext {
		let _localctx: ElementContext = new ElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, bnfParser.RULE_element);
		try {
			this.state = 61;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case bnfParser.REND:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 56;
				this.optional();
				}
				break;
			case bnfParser.RBRACE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 57;
				this.zeroormore();
				}
				break;
			case bnfParser.RPAREN:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 58;
				this.oneormore();
				}
				break;
			case bnfParser.ID:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 59;
				this.text();
				}
				break;
			case bnfParser.LT:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 60;
				this.id();
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
	public optional(): OptionalContext {
		let _localctx: OptionalContext = new OptionalContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, bnfParser.RULE_optional);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 63;
			this.match(bnfParser.REND);
			this.state = 64;
			this.alternatives();
			this.state = 65;
			this.match(bnfParser.LEND);
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
	public zeroormore(): ZeroormoreContext {
		let _localctx: ZeroormoreContext = new ZeroormoreContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, bnfParser.RULE_zeroormore);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 67;
			this.match(bnfParser.RBRACE);
			this.state = 68;
			this.alternatives();
			this.state = 69;
			this.match(bnfParser.LBRACE);
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
	public oneormore(): OneormoreContext {
		let _localctx: OneormoreContext = new OneormoreContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, bnfParser.RULE_oneormore);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 71;
			this.match(bnfParser.RPAREN);
			this.state = 72;
			this.alternatives();
			this.state = 73;
			this.match(bnfParser.LPAREN);
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
	public text(): TextContext {
		let _localctx: TextContext = new TextContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, bnfParser.RULE_text);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 75;
			this.match(bnfParser.ID);
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
	public id(): IdContext {
		let _localctx: IdContext = new IdContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, bnfParser.RULE_id);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 77;
			this.match(bnfParser.LT);
			this.state = 78;
			this.ruleid();
			this.state = 79;
			this.match(bnfParser.GT);
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
	public ruleid(): RuleidContext {
		let _localctx: RuleidContext = new RuleidContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, bnfParser.RULE_ruleid);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 81;
			this.match(bnfParser.ID);
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x0EV\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x03\x02\x07\x02\x1E\n\x02\f\x02\x0E\x02!\v\x02\x03\x02\x03" +
		"\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03" +
		"\x06\x03\x06\x03\x06\x07\x060\n\x06\f\x06\x0E\x063\v\x06\x03\x07\x07\x07" +
		"6\n\x07\f\x07\x0E\x079\v\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x05\b@\n\b" +
		"\x03\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03" +
		"\v\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x02\x02" +
		"\x02\x0F\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12" +
		"\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x02\x02\x02O\x02\x1F\x03\x02\x02" +
		"\x02\x04$\x03\x02\x02\x02\x06(\x03\x02\x02\x02\b*\x03\x02\x02\x02\n,\x03" +
		"\x02\x02\x02\f7\x03\x02\x02\x02\x0E?\x03\x02\x02\x02\x10A\x03\x02\x02" +
		"\x02\x12E\x03\x02\x02\x02\x14I\x03\x02\x02\x02\x16M\x03\x02\x02\x02\x18" +
		"O\x03\x02\x02\x02\x1AS\x03\x02\x02\x02\x1C\x1E\x05\x04\x03\x02\x1D\x1C" +
		"\x03\x02\x02\x02\x1E!\x03\x02\x02\x02\x1F\x1D\x03\x02\x02\x02\x1F \x03" +
		"\x02\x02\x02 \"\x03\x02\x02\x02!\x1F\x03\x02\x02\x02\"#\x07\x02\x02\x03" +
		"#\x03\x03\x02\x02\x02$%\x05\x06\x04\x02%&\x07\x03\x02\x02&\'\x05\b\x05" +
		"\x02\'\x05\x03\x02\x02\x02()\x05\x18\r\x02)\x07\x03\x02\x02\x02*+\x05" +
		"\n\x06\x02+\t\x03\x02\x02\x02,1\x05\f\x07\x02-.\x07\n\x02\x02.0\x05\f" +
		"\x07\x02/-\x03\x02\x02\x0203\x03\x02\x02\x021/\x03\x02\x02\x0212\x03\x02" +
		"\x02\x022\v\x03\x02\x02\x0231\x03\x02\x02\x0246\x05\x0E\b\x0254\x03\x02" +
		"\x02\x0269\x03\x02\x02\x0275\x03\x02\x02\x0278\x03\x02\x02\x028\r\x03" +
		"\x02\x02\x0297\x03\x02\x02\x02:@\x05\x10\t\x02;@\x05\x12\n\x02<@\x05\x14" +
		"\v\x02=@\x05\x16\f\x02>@\x05\x18\r\x02?:\x03\x02\x02\x02?;\x03\x02\x02" +
		"\x02?<\x03\x02\x02\x02?=\x03\x02\x02\x02?>\x03\x02\x02\x02@\x0F\x03\x02" +
		"\x02\x02AB\x07\t\x02\x02BC\x05\n\x06\x02CD\x07\b\x02\x02D\x11\x03\x02" +
		"\x02\x02EF\x07\x07\x02\x02FG\x05\n\x06\x02GH\x07\x06\x02\x02H\x13\x03" +
		"\x02\x02\x02IJ\x07\x05\x02\x02JK\x05\n\x06\x02KL\x07\x04\x02\x02L\x15" +
		"\x03\x02\x02\x02MN\x07\r\x02\x02N\x17\x03\x02\x02\x02OP\x07\f\x02\x02" +
		"PQ\x05\x1A\x0E\x02QR\x07\v\x02\x02R\x19\x03\x02\x02\x02ST\x07\r\x02\x02" +
		"T\x1B\x03\x02\x02\x02\x06\x1F17?";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!bnfParser.__ATN) {
			bnfParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(bnfParser._serializedATN));
		}

		return bnfParser.__ATN;
	}

}

export class RulelistContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(bnfParser.EOF, 0); }
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
	public get ruleIndex(): number { return bnfParser.RULE_rulelist; }
	// @Override
	public enterRule(listener: bnfListener): void {
		if (listener.enterRulelist) {
			listener.enterRulelist(this);
		}
	}
	// @Override
	public exitRule(listener: bnfListener): void {
		if (listener.exitRulelist) {
			listener.exitRulelist(this);
		}
	}
}


export class Rule_Context extends ParserRuleContext {
	public lhs(): LhsContext {
		return this.getRuleContext(0, LhsContext);
	}
	public ASSIGN(): TerminalNode { return this.getToken(bnfParser.ASSIGN, 0); }
	public rhs(): RhsContext {
		return this.getRuleContext(0, RhsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bnfParser.RULE_rule_; }
	// @Override
	public enterRule(listener: bnfListener): void {
		if (listener.enterRule_) {
			listener.enterRule_(this);
		}
	}
	// @Override
	public exitRule(listener: bnfListener): void {
		if (listener.exitRule_) {
			listener.exitRule_(this);
		}
	}
}


export class LhsContext extends ParserRuleContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bnfParser.RULE_lhs; }
	// @Override
	public enterRule(listener: bnfListener): void {
		if (listener.enterLhs) {
			listener.enterLhs(this);
		}
	}
	// @Override
	public exitRule(listener: bnfListener): void {
		if (listener.exitLhs) {
			listener.exitLhs(this);
		}
	}
}


export class RhsContext extends ParserRuleContext {
	public alternatives(): AlternativesContext {
		return this.getRuleContext(0, AlternativesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bnfParser.RULE_rhs; }
	// @Override
	public enterRule(listener: bnfListener): void {
		if (listener.enterRhs) {
			listener.enterRhs(this);
		}
	}
	// @Override
	public exitRule(listener: bnfListener): void {
		if (listener.exitRhs) {
			listener.exitRhs(this);
		}
	}
}


export class AlternativesContext extends ParserRuleContext {
	public alternative(): AlternativeContext[];
	public alternative(i: number): AlternativeContext;
	public alternative(i?: number): AlternativeContext | AlternativeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AlternativeContext);
		} else {
			return this.getRuleContext(i, AlternativeContext);
		}
	}
	public BAR(): TerminalNode[];
	public BAR(i: number): TerminalNode;
	public BAR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(bnfParser.BAR);
		} else {
			return this.getToken(bnfParser.BAR, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bnfParser.RULE_alternatives; }
	// @Override
	public enterRule(listener: bnfListener): void {
		if (listener.enterAlternatives) {
			listener.enterAlternatives(this);
		}
	}
	// @Override
	public exitRule(listener: bnfListener): void {
		if (listener.exitAlternatives) {
			listener.exitAlternatives(this);
		}
	}
}


export class AlternativeContext extends ParserRuleContext {
	public element(): ElementContext[];
	public element(i: number): ElementContext;
	public element(i?: number): ElementContext | ElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ElementContext);
		} else {
			return this.getRuleContext(i, ElementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bnfParser.RULE_alternative; }
	// @Override
	public enterRule(listener: bnfListener): void {
		if (listener.enterAlternative) {
			listener.enterAlternative(this);
		}
	}
	// @Override
	public exitRule(listener: bnfListener): void {
		if (listener.exitAlternative) {
			listener.exitAlternative(this);
		}
	}
}


export class ElementContext extends ParserRuleContext {
	public optional(): OptionalContext | undefined {
		return this.tryGetRuleContext(0, OptionalContext);
	}
	public zeroormore(): ZeroormoreContext | undefined {
		return this.tryGetRuleContext(0, ZeroormoreContext);
	}
	public oneormore(): OneormoreContext | undefined {
		return this.tryGetRuleContext(0, OneormoreContext);
	}
	public text(): TextContext | undefined {
		return this.tryGetRuleContext(0, TextContext);
	}
	public id(): IdContext | undefined {
		return this.tryGetRuleContext(0, IdContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bnfParser.RULE_element; }
	// @Override
	public enterRule(listener: bnfListener): void {
		if (listener.enterElement) {
			listener.enterElement(this);
		}
	}
	// @Override
	public exitRule(listener: bnfListener): void {
		if (listener.exitElement) {
			listener.exitElement(this);
		}
	}
}


export class OptionalContext extends ParserRuleContext {
	public REND(): TerminalNode { return this.getToken(bnfParser.REND, 0); }
	public alternatives(): AlternativesContext {
		return this.getRuleContext(0, AlternativesContext);
	}
	public LEND(): TerminalNode { return this.getToken(bnfParser.LEND, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bnfParser.RULE_optional; }
	// @Override
	public enterRule(listener: bnfListener): void {
		if (listener.enterOptional) {
			listener.enterOptional(this);
		}
	}
	// @Override
	public exitRule(listener: bnfListener): void {
		if (listener.exitOptional) {
			listener.exitOptional(this);
		}
	}
}


export class ZeroormoreContext extends ParserRuleContext {
	public RBRACE(): TerminalNode { return this.getToken(bnfParser.RBRACE, 0); }
	public alternatives(): AlternativesContext {
		return this.getRuleContext(0, AlternativesContext);
	}
	public LBRACE(): TerminalNode { return this.getToken(bnfParser.LBRACE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bnfParser.RULE_zeroormore; }
	// @Override
	public enterRule(listener: bnfListener): void {
		if (listener.enterZeroormore) {
			listener.enterZeroormore(this);
		}
	}
	// @Override
	public exitRule(listener: bnfListener): void {
		if (listener.exitZeroormore) {
			listener.exitZeroormore(this);
		}
	}
}


export class OneormoreContext extends ParserRuleContext {
	public RPAREN(): TerminalNode { return this.getToken(bnfParser.RPAREN, 0); }
	public alternatives(): AlternativesContext {
		return this.getRuleContext(0, AlternativesContext);
	}
	public LPAREN(): TerminalNode { return this.getToken(bnfParser.LPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bnfParser.RULE_oneormore; }
	// @Override
	public enterRule(listener: bnfListener): void {
		if (listener.enterOneormore) {
			listener.enterOneormore(this);
		}
	}
	// @Override
	public exitRule(listener: bnfListener): void {
		if (listener.exitOneormore) {
			listener.exitOneormore(this);
		}
	}
}


export class TextContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(bnfParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bnfParser.RULE_text; }
	// @Override
	public enterRule(listener: bnfListener): void {
		if (listener.enterText) {
			listener.enterText(this);
		}
	}
	// @Override
	public exitRule(listener: bnfListener): void {
		if (listener.exitText) {
			listener.exitText(this);
		}
	}
}


export class IdContext extends ParserRuleContext {
	public LT(): TerminalNode { return this.getToken(bnfParser.LT, 0); }
	public ruleid(): RuleidContext {
		return this.getRuleContext(0, RuleidContext);
	}
	public GT(): TerminalNode { return this.getToken(bnfParser.GT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bnfParser.RULE_id; }
	// @Override
	public enterRule(listener: bnfListener): void {
		if (listener.enterId) {
			listener.enterId(this);
		}
	}
	// @Override
	public exitRule(listener: bnfListener): void {
		if (listener.exitId) {
			listener.exitId(this);
		}
	}
}


export class RuleidContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(bnfParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return bnfParser.RULE_ruleid; }
	// @Override
	public enterRule(listener: bnfListener): void {
		if (listener.enterRuleid) {
			listener.enterRuleid(this);
		}
	}
	// @Override
	public exitRule(listener: bnfListener): void {
		if (listener.exitRuleid) {
			listener.exitRuleid(this);
		}
	}
}


