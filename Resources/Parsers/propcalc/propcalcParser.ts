// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/propcalc/propcalc.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { propcalcListener } from "./propcalcListener";
import { propcalcVisitor } from "./propcalcVisitor";


export class propcalcParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly AND = 2;
	public static readonly OR = 3;
	public static readonly NOT = 4;
	public static readonly EQ = 5;
	public static readonly IMPLIES = 6;
	public static readonly THEREFORE = 7;
	public static readonly EQUIV = 8;
	public static readonly LPAREN = 9;
	public static readonly RPAREN = 10;
	public static readonly LETTER = 11;
	public static readonly WS = 12;
	public static readonly RULE_proposition = 0;
	public static readonly RULE_expression = 1;
	public static readonly RULE_relExpression = 2;
	public static readonly RULE_atoms = 3;
	public static readonly RULE_atom = 4;
	public static readonly RULE_equiv = 5;
	public static readonly RULE_implies = 6;
	public static readonly RULE_variable = 7;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"proposition", "expression", "relExpression", "atoms", "atom", "equiv", 
		"implies", "variable",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "','", "'^'", "'v'", "'!'", "'='", "'->'", "'|-'", "'<->'", 
		"'('", "')'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, "AND", "OR", "NOT", "EQ", "IMPLIES", "THEREFORE", 
		"EQUIV", "LPAREN", "RPAREN", "LETTER", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(propcalcParser._LITERAL_NAMES, propcalcParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return propcalcParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "propcalc.g4"; }

	// @Override
	public get ruleNames(): string[] { return propcalcParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return propcalcParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(propcalcParser._ATN, this);
	}
	// @RuleVersion(0)
	public proposition(): PropositionContext {
		let _localctx: PropositionContext = new PropositionContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, propcalcParser.RULE_proposition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 16;
			this.expression();
			this.state = 17;
			this.match(propcalcParser.THEREFORE);
			this.state = 18;
			this.expression();
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
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, propcalcParser.RULE_expression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 20;
			this.relExpression();
			this.state = 25;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === propcalcParser.AND || _la === propcalcParser.OR) {
				{
				{
				this.state = 21;
				_la = this._input.LA(1);
				if (!(_la === propcalcParser.AND || _la === propcalcParser.OR)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 22;
				this.relExpression();
				}
				}
				this.state = 27;
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
	public relExpression(): RelExpressionContext {
		let _localctx: RelExpressionContext = new RelExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, propcalcParser.RULE_relExpression);
		try {
			this.state = 31;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 28;
				this.atom();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 29;
				this.equiv();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 30;
				this.implies();
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
	public atoms(): AtomsContext {
		let _localctx: AtomsContext = new AtomsContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, propcalcParser.RULE_atoms);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 33;
			this.atom();
			this.state = 38;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === propcalcParser.T__0) {
				{
				{
				this.state = 34;
				this.match(propcalcParser.T__0);
				this.state = 35;
				this.atom();
				}
				}
				this.state = 40;
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
	public atom(): AtomContext {
		let _localctx: AtomContext = new AtomContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, propcalcParser.RULE_atom);
		try {
			this.state = 48;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case propcalcParser.EOF:
			case propcalcParser.T__0:
			case propcalcParser.AND:
			case propcalcParser.OR:
			case propcalcParser.IMPLIES:
			case propcalcParser.THEREFORE:
			case propcalcParser.EQUIV:
			case propcalcParser.RPAREN:
			case propcalcParser.LETTER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 41;
				this.variable();
				}
				break;
			case propcalcParser.NOT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 42;
				this.match(propcalcParser.NOT);
				this.state = 43;
				this.atom();
				}
				break;
			case propcalcParser.LPAREN:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 44;
				this.match(propcalcParser.LPAREN);
				this.state = 45;
				this.expression();
				this.state = 46;
				this.match(propcalcParser.RPAREN);
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
	public equiv(): EquivContext {
		let _localctx: EquivContext = new EquivContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, propcalcParser.RULE_equiv);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 50;
			this.atom();
			this.state = 51;
			this.match(propcalcParser.EQUIV);
			this.state = 52;
			this.atom();
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
	public implies(): ImpliesContext {
		let _localctx: ImpliesContext = new ImpliesContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, propcalcParser.RULE_implies);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 54;
			this.atom();
			this.state = 55;
			this.match(propcalcParser.IMPLIES);
			this.state = 56;
			this.atom();
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
	public variable(): VariableContext {
		let _localctx: VariableContext = new VariableContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, propcalcParser.RULE_variable);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 61;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === propcalcParser.LETTER) {
				{
				{
				this.state = 58;
				this.match(propcalcParser.LETTER);
				}
				}
				this.state = 63;
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x0EC\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x03\x02\x03\x02\x03\x02\x03\x02\x03\x03\x03" +
		"\x03\x03\x03\x07\x03\x1A\n\x03\f\x03\x0E\x03\x1D\v\x03\x03\x04\x03\x04" +
		"\x03\x04\x05\x04\"\n\x04\x03\x05\x03\x05\x03\x05\x07\x05\'\n\x05\f\x05" +
		"\x0E\x05*\v\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x05\x063\n\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03" +
		"\b\x03\t\x07\t>\n\t\f\t\x0E\tA\v\t\x03\t\x02\x02\x02\n\x02\x02\x04\x02" +
		"\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x02\x03\x03\x02\x04\x05\x02" +
		"A\x02\x12\x03\x02\x02\x02\x04\x16\x03\x02\x02\x02\x06!\x03\x02\x02\x02" +
		"\b#\x03\x02\x02\x02\n2\x03\x02\x02\x02\f4\x03\x02\x02\x02\x0E8\x03\x02" +
		"\x02\x02\x10?\x03\x02\x02\x02\x12\x13\x05\x04\x03\x02\x13\x14\x07\t\x02" +
		"\x02\x14\x15\x05\x04\x03\x02\x15\x03\x03\x02\x02\x02\x16\x1B\x05\x06\x04" +
		"\x02\x17\x18\t\x02\x02\x02\x18\x1A\x05\x06\x04\x02\x19\x17\x03\x02\x02" +
		"\x02\x1A\x1D\x03\x02\x02\x02\x1B\x19\x03\x02\x02\x02\x1B\x1C\x03\x02\x02" +
		"\x02\x1C\x05\x03\x02\x02\x02\x1D\x1B\x03\x02\x02\x02\x1E\"\x05\n\x06\x02" +
		"\x1F\"\x05\f\x07\x02 \"\x05\x0E\b\x02!\x1E\x03\x02\x02\x02!\x1F\x03\x02" +
		"\x02\x02! \x03\x02\x02\x02\"\x07\x03\x02\x02\x02#(\x05\n\x06\x02$%\x07" +
		"\x03\x02\x02%\'\x05\n\x06\x02&$\x03\x02\x02\x02\'*\x03\x02\x02\x02(&\x03" +
		"\x02\x02\x02()\x03\x02\x02\x02)\t\x03\x02\x02\x02*(\x03\x02\x02\x02+3" +
		"\x05\x10\t\x02,-\x07\x06\x02\x02-3\x05\n\x06\x02./\x07\v\x02\x02/0\x05" +
		"\x04\x03\x0201\x07\f\x02\x0213\x03\x02\x02\x022+\x03\x02\x02\x022,\x03" +
		"\x02\x02\x022.\x03\x02\x02\x023\v\x03\x02\x02\x0245\x05\n\x06\x0256\x07" +
		"\n\x02\x0267\x05\n\x06\x027\r\x03\x02\x02\x0289\x05\n\x06\x029:\x07\b" +
		"\x02\x02:;\x05\n\x06\x02;\x0F\x03\x02\x02\x02<>\x07\r\x02\x02=<\x03\x02" +
		"\x02\x02>A\x03\x02\x02\x02?=\x03\x02\x02\x02?@\x03\x02\x02\x02@\x11\x03" +
		"\x02\x02\x02A?\x03\x02\x02\x02\x07\x1B!(2?";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!propcalcParser.__ATN) {
			propcalcParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(propcalcParser._serializedATN));
		}

		return propcalcParser.__ATN;
	}

}

export class PropositionContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public THEREFORE(): TerminalNode { return this.getToken(propcalcParser.THEREFORE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return propcalcParser.RULE_proposition; }
	// @Override
	public enterRule(listener: propcalcListener): void {
		if (listener.enterProposition) {
			listener.enterProposition(this);
		}
	}
	// @Override
	public exitRule(listener: propcalcListener): void {
		if (listener.exitProposition) {
			listener.exitProposition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: propcalcVisitor<Result>): Result {
		if (visitor.visitProposition) {
			return visitor.visitProposition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public relExpression(): RelExpressionContext[];
	public relExpression(i: number): RelExpressionContext;
	public relExpression(i?: number): RelExpressionContext | RelExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RelExpressionContext);
		} else {
			return this.getRuleContext(i, RelExpressionContext);
		}
	}
	public AND(): TerminalNode[];
	public AND(i: number): TerminalNode;
	public AND(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(propcalcParser.AND);
		} else {
			return this.getToken(propcalcParser.AND, i);
		}
	}
	public OR(): TerminalNode[];
	public OR(i: number): TerminalNode;
	public OR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(propcalcParser.OR);
		} else {
			return this.getToken(propcalcParser.OR, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return propcalcParser.RULE_expression; }
	// @Override
	public enterRule(listener: propcalcListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: propcalcListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: propcalcVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RelExpressionContext extends ParserRuleContext {
	public atom(): AtomContext | undefined {
		return this.tryGetRuleContext(0, AtomContext);
	}
	public equiv(): EquivContext | undefined {
		return this.tryGetRuleContext(0, EquivContext);
	}
	public implies(): ImpliesContext | undefined {
		return this.tryGetRuleContext(0, ImpliesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return propcalcParser.RULE_relExpression; }
	// @Override
	public enterRule(listener: propcalcListener): void {
		if (listener.enterRelExpression) {
			listener.enterRelExpression(this);
		}
	}
	// @Override
	public exitRule(listener: propcalcListener): void {
		if (listener.exitRelExpression) {
			listener.exitRelExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: propcalcVisitor<Result>): Result {
		if (visitor.visitRelExpression) {
			return visitor.visitRelExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AtomsContext extends ParserRuleContext {
	public atom(): AtomContext[];
	public atom(i: number): AtomContext;
	public atom(i?: number): AtomContext | AtomContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AtomContext);
		} else {
			return this.getRuleContext(i, AtomContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return propcalcParser.RULE_atoms; }
	// @Override
	public enterRule(listener: propcalcListener): void {
		if (listener.enterAtoms) {
			listener.enterAtoms(this);
		}
	}
	// @Override
	public exitRule(listener: propcalcListener): void {
		if (listener.exitAtoms) {
			listener.exitAtoms(this);
		}
	}
	// @Override
	public accept<Result>(visitor: propcalcVisitor<Result>): Result {
		if (visitor.visitAtoms) {
			return visitor.visitAtoms(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AtomContext extends ParserRuleContext {
	public variable(): VariableContext | undefined {
		return this.tryGetRuleContext(0, VariableContext);
	}
	public NOT(): TerminalNode | undefined { return this.tryGetToken(propcalcParser.NOT, 0); }
	public atom(): AtomContext | undefined {
		return this.tryGetRuleContext(0, AtomContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(propcalcParser.LPAREN, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(propcalcParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return propcalcParser.RULE_atom; }
	// @Override
	public enterRule(listener: propcalcListener): void {
		if (listener.enterAtom) {
			listener.enterAtom(this);
		}
	}
	// @Override
	public exitRule(listener: propcalcListener): void {
		if (listener.exitAtom) {
			listener.exitAtom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: propcalcVisitor<Result>): Result {
		if (visitor.visitAtom) {
			return visitor.visitAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EquivContext extends ParserRuleContext {
	public atom(): AtomContext[];
	public atom(i: number): AtomContext;
	public atom(i?: number): AtomContext | AtomContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AtomContext);
		} else {
			return this.getRuleContext(i, AtomContext);
		}
	}
	public EQUIV(): TerminalNode { return this.getToken(propcalcParser.EQUIV, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return propcalcParser.RULE_equiv; }
	// @Override
	public enterRule(listener: propcalcListener): void {
		if (listener.enterEquiv) {
			listener.enterEquiv(this);
		}
	}
	// @Override
	public exitRule(listener: propcalcListener): void {
		if (listener.exitEquiv) {
			listener.exitEquiv(this);
		}
	}
	// @Override
	public accept<Result>(visitor: propcalcVisitor<Result>): Result {
		if (visitor.visitEquiv) {
			return visitor.visitEquiv(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImpliesContext extends ParserRuleContext {
	public atom(): AtomContext[];
	public atom(i: number): AtomContext;
	public atom(i?: number): AtomContext | AtomContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AtomContext);
		} else {
			return this.getRuleContext(i, AtomContext);
		}
	}
	public IMPLIES(): TerminalNode { return this.getToken(propcalcParser.IMPLIES, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return propcalcParser.RULE_implies; }
	// @Override
	public enterRule(listener: propcalcListener): void {
		if (listener.enterImplies) {
			listener.enterImplies(this);
		}
	}
	// @Override
	public exitRule(listener: propcalcListener): void {
		if (listener.exitImplies) {
			listener.exitImplies(this);
		}
	}
	// @Override
	public accept<Result>(visitor: propcalcVisitor<Result>): Result {
		if (visitor.visitImplies) {
			return visitor.visitImplies(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableContext extends ParserRuleContext {
	public LETTER(): TerminalNode[];
	public LETTER(i: number): TerminalNode;
	public LETTER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(propcalcParser.LETTER);
		} else {
			return this.getToken(propcalcParser.LETTER, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return propcalcParser.RULE_variable; }
	// @Override
	public enterRule(listener: propcalcListener): void {
		if (listener.enterVariable) {
			listener.enterVariable(this);
		}
	}
	// @Override
	public exitRule(listener: propcalcListener): void {
		if (listener.exitVariable) {
			listener.exitVariable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: propcalcVisitor<Result>): Result {
		if (visitor.visitVariable) {
			return visitor.visitVariable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


