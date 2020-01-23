// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/alpaca/alpaca.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { alpacaListener } from "./alpacaListener";

export class alpacaParser extends Parser {
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
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly QUOTEDCHAR = 23;
	public static readonly QUOTE = 24;
	public static readonly ALPHA = 25;
	public static readonly DIGIT = 26;
	public static readonly ARROW = 27;
	public static readonly COMMENT = 28;
	public static readonly WS = 29;
	public static readonly RULE_prog = 0;
	public static readonly RULE_defns = 1;
	public static readonly RULE_defn = 2;
	public static readonly RULE_stateDefn = 3;
	public static readonly RULE_classDefn = 4;
	public static readonly RULE_nbhdDefn = 5;
	public static readonly RULE_classID = 6;
	public static readonly RULE_stateID = 7;
	public static readonly RULE_nbhdID = 8;
	public static readonly RULE_membershipDecl = 9;
	public static readonly RULE_classRef = 10;
	public static readonly RULE_rules = 11;
	public static readonly RULE_rule_ = 12;
	public static readonly RULE_stateRef = 13;
	public static readonly RULE_expression = 14;
	public static readonly RULE_term = 15;
	public static readonly RULE_relationalPred = 16;
	public static readonly RULE_adjacencyPred = 17;
	public static readonly RULE_boolPrimitive = 18;
	public static readonly RULE_neigbourhood = 19;
	public static readonly RULE_identifier = 20;
	public static readonly RULE_naturalnumber = 21;
	public static readonly RULE_arrowchain = 22;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"prog", "defns", "defn", "stateDefn", "classDefn", "nbhdDefn", "classID", 
		"stateID", "nbhdID", "membershipDecl", "classRef", "rules", "rule_", "stateRef", 
		"expression", "term", "relationalPred", "adjacencyPred", "boolPrimitive", 
		"neigbourhood", "identifier", "naturalnumber", "arrowchain",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'.'", "'begin'", "';'", "'state'", "'class'", "'neighbourhood'", 
		"'is'", "','", "'to'", "'when'", "'me'", "'and'", "'or'", "'xor'", "'('", 
		"')'", "'not'", "'='", "'in'", "'true'", "'false'", "'guess'", undefined, 
		"'\"'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, "QUOTEDCHAR", "QUOTE", "ALPHA", "DIGIT", "ARROW", 
		"COMMENT", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(alpacaParser._LITERAL_NAMES, alpacaParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return alpacaParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "alpaca.g4"; }

	// @Override
	public get ruleNames(): string[] { return alpacaParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return alpacaParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(alpacaParser._ATN, this);
	}
	// @RuleVersion(0)
	public prog(): ProgContext {
		let _localctx: ProgContext = new ProgContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, alpacaParser.RULE_prog);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 46;
			this.defns();
			this.state = 47;
			_la = this._input.LA(1);
			if (!(_la === alpacaParser.T__0 || _la === alpacaParser.T__1)) {
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
	public defns(): DefnsContext {
		let _localctx: DefnsContext = new DefnsContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, alpacaParser.RULE_defns);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 49;
			this.defn();
			this.state = 54;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === alpacaParser.T__2) {
				{
				{
				this.state = 50;
				this.match(alpacaParser.T__2);
				this.state = 51;
				this.defn();
				}
				}
				this.state = 56;
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
	public defn(): DefnContext {
		let _localctx: DefnContext = new DefnContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, alpacaParser.RULE_defn);
		try {
			this.state = 60;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case alpacaParser.T__3:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 57;
				this.stateDefn();
				}
				break;
			case alpacaParser.T__4:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 58;
				this.classDefn();
				}
				break;
			case alpacaParser.T__5:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 59;
				this.nbhdDefn();
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
	public stateDefn(): StateDefnContext {
		let _localctx: StateDefnContext = new StateDefnContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, alpacaParser.RULE_stateDefn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 62;
			this.match(alpacaParser.T__3);
			this.state = 63;
			this.stateID();
			this.state = 65;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === alpacaParser.QUOTEDCHAR) {
				{
				this.state = 64;
				this.match(alpacaParser.QUOTEDCHAR);
				}
			}

			this.state = 70;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === alpacaParser.T__6) {
				{
				{
				this.state = 67;
				this.membershipDecl();
				}
				}
				this.state = 72;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 74;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === alpacaParser.T__8) {
				{
				this.state = 73;
				this.rules();
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
	// @RuleVersion(0)
	public classDefn(): ClassDefnContext {
		let _localctx: ClassDefnContext = new ClassDefnContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, alpacaParser.RULE_classDefn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 76;
			this.match(alpacaParser.T__4);
			this.state = 77;
			this.classID();
			this.state = 81;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === alpacaParser.T__6) {
				{
				{
				this.state = 78;
				this.membershipDecl();
				}
				}
				this.state = 83;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 85;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === alpacaParser.T__8) {
				{
				this.state = 84;
				this.rules();
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
	// @RuleVersion(0)
	public nbhdDefn(): NbhdDefnContext {
		let _localctx: NbhdDefnContext = new NbhdDefnContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, alpacaParser.RULE_nbhdDefn);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 87;
			this.match(alpacaParser.T__5);
			this.state = 88;
			this.nbhdID();
			this.state = 89;
			this.neigbourhood();
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
	public classID(): ClassIDContext {
		let _localctx: ClassIDContext = new ClassIDContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, alpacaParser.RULE_classID);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 91;
			this.identifier();
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
	public stateID(): StateIDContext {
		let _localctx: StateIDContext = new StateIDContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, alpacaParser.RULE_stateID);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 93;
			this.identifier();
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
	public nbhdID(): NbhdIDContext {
		let _localctx: NbhdIDContext = new NbhdIDContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, alpacaParser.RULE_nbhdID);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 95;
			this.identifier();
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
	public membershipDecl(): MembershipDeclContext {
		let _localctx: MembershipDeclContext = new MembershipDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, alpacaParser.RULE_membershipDecl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 97;
			this.classRef();
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
	public classRef(): ClassRefContext {
		let _localctx: ClassRefContext = new ClassRefContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, alpacaParser.RULE_classRef);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 99;
			this.match(alpacaParser.T__6);
			this.state = 100;
			this.classID();
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
	public rules(): RulesContext {
		let _localctx: RulesContext = new RulesContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, alpacaParser.RULE_rules);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 102;
			this.rule_();
			this.state = 107;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === alpacaParser.T__7) {
				{
				{
				this.state = 103;
				this.match(alpacaParser.T__7);
				this.state = 104;
				this.rule_();
				}
				}
				this.state = 109;
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
	public rule_(): Rule_Context {
		let _localctx: Rule_Context = new Rule_Context(this._ctx, this.state);
		this.enterRule(_localctx, 24, alpacaParser.RULE_rule_);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 110;
			this.match(alpacaParser.T__8);
			this.state = 111;
			this.stateRef();
			this.state = 114;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === alpacaParser.T__9) {
				{
				this.state = 112;
				this.match(alpacaParser.T__9);
				this.state = 113;
				this.expression();
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
	// @RuleVersion(0)
	public stateRef(): StateRefContext {
		let _localctx: StateRefContext = new StateRefContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, alpacaParser.RULE_stateRef);
		try {
			this.state = 119;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case alpacaParser.ALPHA:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 116;
				this.stateID();
				}
				break;
			case alpacaParser.ARROW:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 117;
				this.arrowchain();
				}
				break;
			case alpacaParser.T__10:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 118;
				this.match(alpacaParser.T__10);
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
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, alpacaParser.RULE_expression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 121;
			this.term();
			this.state = 126;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << alpacaParser.T__11) | (1 << alpacaParser.T__12) | (1 << alpacaParser.T__13))) !== 0)) {
				{
				{
				this.state = 122;
				_la = this._input.LA(1);
				if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << alpacaParser.T__11) | (1 << alpacaParser.T__12) | (1 << alpacaParser.T__13))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 123;
				this.term();
				}
				}
				this.state = 128;
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
	public term(): TermContext {
		let _localctx: TermContext = new TermContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, alpacaParser.RULE_term);
		try {
			this.state = 138;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case alpacaParser.DIGIT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 129;
				this.adjacencyPred();
				}
				break;
			case alpacaParser.T__14:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 130;
				this.match(alpacaParser.T__14);
				this.state = 131;
				this.expression();
				this.state = 132;
				this.match(alpacaParser.T__15);
				}
				break;
			case alpacaParser.T__16:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 134;
				this.match(alpacaParser.T__16);
				this.state = 135;
				this.term();
				}
				break;
			case alpacaParser.T__19:
			case alpacaParser.T__20:
			case alpacaParser.T__21:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 136;
				this.boolPrimitive();
				}
				break;
			case alpacaParser.T__10:
			case alpacaParser.ALPHA:
			case alpacaParser.ARROW:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 137;
				this.relationalPred();
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
	public relationalPred(): RelationalPredContext {
		let _localctx: RelationalPredContext = new RelationalPredContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, alpacaParser.RULE_relationalPred);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 140;
			this.stateRef();
			this.state = 146;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case alpacaParser.T__10:
			case alpacaParser.T__17:
			case alpacaParser.ALPHA:
			case alpacaParser.ARROW:
				{
				this.state = 142;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === alpacaParser.T__17) {
					{
					this.state = 141;
					this.match(alpacaParser.T__17);
					}
				}

				this.state = 144;
				this.stateRef();
				}
				break;
			case alpacaParser.T__6:
				{
				this.state = 145;
				this.classRef();
				}
				break;
			default:
				throw new NoViableAltException(this);
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
	public adjacencyPred(): AdjacencyPredContext {
		let _localctx: AdjacencyPredContext = new AdjacencyPredContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, alpacaParser.RULE_adjacencyPred);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 148;
			this.naturalnumber();
			this.state = 154;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === alpacaParser.T__18) {
				{
				this.state = 149;
				this.match(alpacaParser.T__18);
				this.state = 152;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case alpacaParser.T__14:
					{
					this.state = 150;
					this.neigbourhood();
					}
					break;
				case alpacaParser.ALPHA:
					{
					this.state = 151;
					this.nbhdID();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
			}

			this.state = 158;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case alpacaParser.T__10:
			case alpacaParser.ALPHA:
			case alpacaParser.ARROW:
				{
				this.state = 156;
				this.stateRef();
				}
				break;
			case alpacaParser.T__6:
				{
				this.state = 157;
				this.classRef();
				}
				break;
			default:
				throw new NoViableAltException(this);
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
	public boolPrimitive(): BoolPrimitiveContext {
		let _localctx: BoolPrimitiveContext = new BoolPrimitiveContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, alpacaParser.RULE_boolPrimitive);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 160;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << alpacaParser.T__19) | (1 << alpacaParser.T__20) | (1 << alpacaParser.T__21))) !== 0))) {
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
	public neigbourhood(): NeigbourhoodContext {
		let _localctx: NeigbourhoodContext = new NeigbourhoodContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, alpacaParser.RULE_neigbourhood);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 162;
			this.match(alpacaParser.T__14);
			this.state = 166;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === alpacaParser.ARROW) {
				{
				{
				this.state = 163;
				this.arrowchain();
				}
				}
				this.state = 168;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 169;
			this.match(alpacaParser.T__15);
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
	public identifier(): IdentifierContext {
		let _localctx: IdentifierContext = new IdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, alpacaParser.RULE_identifier);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 171;
			this.match(alpacaParser.ALPHA);
			this.state = 175;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 172;
					_la = this._input.LA(1);
					if (!(_la === alpacaParser.ALPHA || _la === alpacaParser.DIGIT)) {
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
				}
				this.state = 177;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
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
	public naturalnumber(): NaturalnumberContext {
		let _localctx: NaturalnumberContext = new NaturalnumberContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, alpacaParser.RULE_naturalnumber);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 179;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 178;
				this.match(alpacaParser.DIGIT);
				}
				}
				this.state = 181;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === alpacaParser.DIGIT);
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
	public arrowchain(): ArrowchainContext {
		let _localctx: ArrowchainContext = new ArrowchainContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, alpacaParser.RULE_arrowchain);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 184;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 183;
					this.match(alpacaParser.ARROW);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 186;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
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

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x1F\xBF\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x07\x037\n" +
		"\x03\f\x03\x0E\x03:\v\x03\x03\x04\x03\x04\x03\x04\x05\x04?\n\x04\x03\x05" +
		"\x03\x05\x03\x05\x05\x05D\n\x05\x03\x05\x07\x05G\n\x05\f\x05\x0E\x05J" +
		"\v\x05\x03\x05\x05\x05M\n\x05\x03\x06\x03\x06\x03\x06\x07\x06R\n\x06\f" +
		"\x06\x0E\x06U\v\x06\x03\x06\x05\x06X\n\x06\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\v\x03\v\x03\f\x03\f\x03\f" +
		"\x03\r\x03\r\x03\r\x07\rl\n\r\f\r\x0E\ro\v\r\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x05\x0Eu\n\x0E\x03\x0F\x03\x0F\x03\x0F\x05\x0Fz\n\x0F\x03\x10\x03" +
		"\x10\x03\x10\x07\x10\x7F\n\x10\f\x10\x0E\x10\x82\v\x10\x03\x11\x03\x11" +
		"\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\x8D\n" +
		"\x11\x03\x12\x03\x12\x05\x12\x91\n\x12\x03\x12\x03\x12\x05\x12\x95\n\x12" +
		"\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13\x9B\n\x13\x05\x13\x9D\n\x13\x03" +
		"\x13\x03\x13\x05\x13\xA1\n\x13\x03\x14\x03\x14\x03\x15\x03\x15\x07\x15" +
		"\xA7\n\x15\f\x15\x0E\x15\xAA\v\x15\x03\x15\x03\x15\x03\x16\x03\x16\x07" +
		"\x16\xB0\n\x16\f\x16\x0E\x16\xB3\v\x16\x03\x17\x06\x17\xB6\n\x17\r\x17" +
		"\x0E\x17\xB7\x03\x18\x06\x18\xBB\n\x18\r\x18\x0E\x18\xBC\x03\x18\x02\x02" +
		"\x02\x19\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12" +
		"\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&" +
		"\x02(\x02*\x02,\x02.\x02\x02\x06\x03\x02\x03\x04\x03\x02\x0E\x10\x03\x02" +
		"\x16\x18\x03\x02\x1B\x1C\x02\xC1\x020\x03\x02\x02\x02\x043\x03\x02\x02" +
		"\x02\x06>\x03\x02\x02\x02\b@\x03\x02\x02\x02\nN\x03\x02\x02\x02\fY\x03" +
		"\x02\x02\x02\x0E]\x03\x02\x02\x02\x10_\x03\x02\x02\x02\x12a\x03\x02\x02" +
		"\x02\x14c\x03\x02\x02\x02\x16e\x03\x02\x02\x02\x18h\x03\x02\x02\x02\x1A" +
		"p\x03\x02\x02\x02\x1Cy\x03\x02\x02\x02\x1E{\x03\x02\x02\x02 \x8C\x03\x02" +
		"\x02\x02\"\x8E\x03\x02\x02\x02$\x96\x03\x02\x02\x02&\xA2\x03\x02\x02\x02" +
		"(\xA4\x03\x02\x02\x02*\xAD\x03\x02\x02\x02,\xB5\x03\x02\x02\x02.\xBA\x03" +
		"\x02\x02\x0201\x05\x04\x03\x0212\t\x02\x02\x022\x03\x03\x02\x02\x0238" +
		"\x05\x06\x04\x0245\x07\x05\x02\x0257\x05\x06\x04\x0264\x03\x02\x02\x02" +
		"7:\x03\x02\x02\x0286\x03\x02\x02\x0289\x03\x02\x02\x029\x05\x03\x02\x02" +
		"\x02:8\x03\x02\x02\x02;?\x05\b\x05\x02<?\x05\n\x06\x02=?\x05\f\x07\x02" +
		">;\x03\x02\x02\x02><\x03\x02\x02\x02>=\x03\x02\x02\x02?\x07\x03\x02\x02" +
		"\x02@A\x07\x06\x02\x02AC\x05\x10\t\x02BD\x07\x19\x02\x02CB\x03\x02\x02" +
		"\x02CD\x03\x02\x02\x02DH\x03\x02\x02\x02EG\x05\x14\v\x02FE\x03\x02\x02" +
		"\x02GJ\x03\x02\x02\x02HF\x03\x02\x02\x02HI\x03\x02\x02\x02IL\x03\x02\x02" +
		"\x02JH\x03\x02\x02\x02KM\x05\x18\r\x02LK\x03\x02\x02\x02LM\x03\x02\x02" +
		"\x02M\t\x03\x02\x02\x02NO\x07\x07\x02\x02OS\x05\x0E\b\x02PR\x05\x14\v" +
		"\x02QP\x03\x02\x02\x02RU\x03\x02\x02\x02SQ\x03\x02\x02\x02ST\x03\x02\x02" +
		"\x02TW\x03\x02\x02\x02US\x03\x02\x02\x02VX\x05\x18\r\x02WV\x03\x02\x02" +
		"\x02WX\x03\x02\x02\x02X\v\x03\x02\x02\x02YZ\x07\b\x02\x02Z[\x05\x12\n" +
		"\x02[\\\x05(\x15\x02\\\r\x03\x02\x02\x02]^\x05*\x16\x02^\x0F\x03\x02\x02" +
		"\x02_`\x05*\x16\x02`\x11\x03\x02\x02\x02ab\x05*\x16\x02b\x13\x03\x02\x02" +
		"\x02cd\x05\x16\f\x02d\x15\x03\x02\x02\x02ef\x07\t\x02\x02fg\x05\x0E\b" +
		"\x02g\x17\x03\x02\x02\x02hm\x05\x1A\x0E\x02ij\x07\n\x02\x02jl\x05\x1A" +
		"\x0E\x02ki\x03\x02\x02\x02lo\x03\x02\x02\x02mk\x03\x02\x02\x02mn\x03\x02" +
		"\x02\x02n\x19\x03\x02\x02\x02om\x03\x02\x02\x02pq\x07\v\x02\x02qt\x05" +
		"\x1C\x0F\x02rs\x07\f\x02\x02su\x05\x1E\x10\x02tr\x03\x02\x02\x02tu\x03" +
		"\x02\x02\x02u\x1B\x03\x02\x02\x02vz\x05\x10\t\x02wz\x05.\x18\x02xz\x07" +
		"\r\x02\x02yv\x03\x02\x02\x02yw\x03\x02\x02\x02yx\x03\x02\x02\x02z\x1D" +
		"\x03\x02\x02\x02{\x80\x05 \x11\x02|}\t\x03\x02\x02}\x7F\x05 \x11\x02~" +
		"|\x03\x02\x02\x02\x7F\x82\x03\x02\x02\x02\x80~\x03\x02\x02\x02\x80\x81" +
		"\x03\x02\x02\x02\x81\x1F\x03\x02\x02\x02\x82\x80\x03\x02\x02\x02\x83\x8D" +
		"\x05$\x13\x02\x84\x85\x07\x11\x02\x02\x85\x86\x05\x1E\x10\x02\x86\x87" +
		"\x07\x12\x02\x02\x87\x8D\x03\x02\x02\x02\x88\x89\x07\x13\x02\x02\x89\x8D" +
		"\x05 \x11\x02\x8A\x8D\x05&\x14\x02\x8B\x8D\x05\"\x12\x02\x8C\x83\x03\x02" +
		"\x02\x02\x8C\x84\x03\x02\x02\x02\x8C\x88\x03\x02\x02\x02\x8C\x8A\x03\x02" +
		"\x02\x02\x8C\x8B\x03\x02\x02\x02\x8D!\x03\x02\x02\x02\x8E\x94\x05\x1C" +
		"\x0F\x02\x8F\x91\x07\x14\x02\x02\x90\x8F\x03\x02\x02\x02\x90\x91\x03\x02" +
		"\x02\x02\x91\x92\x03\x02\x02\x02\x92\x95\x05\x1C\x0F\x02\x93\x95\x05\x16" +
		"\f\x02\x94\x90\x03\x02\x02\x02\x94\x93\x03\x02\x02\x02\x95#\x03\x02\x02" +
		"\x02\x96\x9C\x05,\x17\x02\x97\x9A\x07\x15\x02\x02\x98\x9B\x05(\x15\x02" +
		"\x99\x9B\x05\x12\n\x02\x9A\x98\x03\x02\x02\x02\x9A\x99\x03\x02\x02\x02" +
		"\x9B\x9D\x03\x02\x02\x02\x9C\x97\x03\x02\x02\x02\x9C\x9D\x03\x02\x02\x02" +
		"\x9D\xA0\x03\x02\x02\x02\x9E\xA1\x05\x1C\x0F\x02\x9F\xA1\x05\x16\f\x02" +
		"\xA0\x9E\x03\x02\x02\x02\xA0\x9F\x03\x02\x02\x02\xA1%\x03\x02\x02\x02" +
		"\xA2\xA3\t\x04\x02\x02\xA3\'\x03\x02\x02\x02\xA4\xA8\x07\x11\x02\x02\xA5" +
		"\xA7\x05.\x18\x02\xA6\xA5\x03\x02\x02\x02\xA7\xAA\x03\x02\x02\x02\xA8" +
		"\xA6\x03\x02\x02\x02\xA8\xA9\x03\x02\x02\x02\xA9\xAB\x03\x02\x02\x02\xAA" +
		"\xA8\x03\x02\x02\x02\xAB\xAC\x07\x12\x02\x02\xAC)\x03\x02\x02\x02\xAD" +
		"\xB1\x07\x1B\x02\x02\xAE\xB0\t\x05\x02\x02\xAF\xAE\x03\x02\x02\x02\xB0" +
		"\xB3\x03\x02\x02\x02\xB1\xAF\x03\x02\x02\x02\xB1\xB2\x03\x02\x02\x02\xB2" +
		"+\x03\x02\x02\x02\xB3\xB1\x03\x02\x02\x02\xB4\xB6\x07\x1C\x02\x02\xB5" +
		"\xB4\x03\x02\x02\x02\xB6\xB7\x03\x02\x02\x02\xB7\xB5\x03\x02\x02\x02\xB7" +
		"\xB8\x03\x02\x02\x02\xB8-\x03\x02\x02\x02\xB9\xBB\x07\x1D\x02\x02\xBA" +
		"\xB9\x03\x02\x02\x02\xBB\xBC\x03\x02\x02\x02\xBC\xBA\x03\x02\x02\x02\xBC" +
		"\xBD\x03\x02\x02\x02\xBD/\x03\x02\x02\x02\x178>CHLSWmty\x80\x8C\x90\x94" +
		"\x9A\x9C\xA0\xA8\xB1\xB7\xBC";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!alpacaParser.__ATN) {
			alpacaParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(alpacaParser._serializedATN));
		}

		return alpacaParser.__ATN;
	}

}

export class ProgContext extends ParserRuleContext {
	public defns(): DefnsContext {
		return this.getRuleContext(0, DefnsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return alpacaParser.RULE_prog; }
	// @Override
	public enterRule(listener: alpacaListener): void {
		if (listener.enterProg) {
			listener.enterProg(this);
		}
	}
	// @Override
	public exitRule(listener: alpacaListener): void {
		if (listener.exitProg) {
			listener.exitProg(this);
		}
	}
}


export class DefnsContext extends ParserRuleContext {
	public defn(): DefnContext[];
	public defn(i: number): DefnContext;
	public defn(i?: number): DefnContext | DefnContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DefnContext);
		} else {
			return this.getRuleContext(i, DefnContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return alpacaParser.RULE_defns; }
	// @Override
	public enterRule(listener: alpacaListener): void {
		if (listener.enterDefns) {
			listener.enterDefns(this);
		}
	}
	// @Override
	public exitRule(listener: alpacaListener): void {
		if (listener.exitDefns) {
			listener.exitDefns(this);
		}
	}
}


export class DefnContext extends ParserRuleContext {
	public stateDefn(): StateDefnContext | undefined {
		return this.tryGetRuleContext(0, StateDefnContext);
	}
	public classDefn(): ClassDefnContext | undefined {
		return this.tryGetRuleContext(0, ClassDefnContext);
	}
	public nbhdDefn(): NbhdDefnContext | undefined {
		return this.tryGetRuleContext(0, NbhdDefnContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return alpacaParser.RULE_defn; }
	// @Override
	public enterRule(listener: alpacaListener): void {
		if (listener.enterDefn) {
			listener.enterDefn(this);
		}
	}
	// @Override
	public exitRule(listener: alpacaListener): void {
		if (listener.exitDefn) {
			listener.exitDefn(this);
		}
	}
}


export class StateDefnContext extends ParserRuleContext {
	public stateID(): StateIDContext {
		return this.getRuleContext(0, StateIDContext);
	}
	public QUOTEDCHAR(): TerminalNode | undefined { return this.tryGetToken(alpacaParser.QUOTEDCHAR, 0); }
	public membershipDecl(): MembershipDeclContext[];
	public membershipDecl(i: number): MembershipDeclContext;
	public membershipDecl(i?: number): MembershipDeclContext | MembershipDeclContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MembershipDeclContext);
		} else {
			return this.getRuleContext(i, MembershipDeclContext);
		}
	}
	public rules(): RulesContext | undefined {
		return this.tryGetRuleContext(0, RulesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return alpacaParser.RULE_stateDefn; }
	// @Override
	public enterRule(listener: alpacaListener): void {
		if (listener.enterStateDefn) {
			listener.enterStateDefn(this);
		}
	}
	// @Override
	public exitRule(listener: alpacaListener): void {
		if (listener.exitStateDefn) {
			listener.exitStateDefn(this);
		}
	}
}


export class ClassDefnContext extends ParserRuleContext {
	public classID(): ClassIDContext {
		return this.getRuleContext(0, ClassIDContext);
	}
	public membershipDecl(): MembershipDeclContext[];
	public membershipDecl(i: number): MembershipDeclContext;
	public membershipDecl(i?: number): MembershipDeclContext | MembershipDeclContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MembershipDeclContext);
		} else {
			return this.getRuleContext(i, MembershipDeclContext);
		}
	}
	public rules(): RulesContext | undefined {
		return this.tryGetRuleContext(0, RulesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return alpacaParser.RULE_classDefn; }
	// @Override
	public enterRule(listener: alpacaListener): void {
		if (listener.enterClassDefn) {
			listener.enterClassDefn(this);
		}
	}
	// @Override
	public exitRule(listener: alpacaListener): void {
		if (listener.exitClassDefn) {
			listener.exitClassDefn(this);
		}
	}
}


export class NbhdDefnContext extends ParserRuleContext {
	public nbhdID(): NbhdIDContext {
		return this.getRuleContext(0, NbhdIDContext);
	}
	public neigbourhood(): NeigbourhoodContext {
		return this.getRuleContext(0, NeigbourhoodContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return alpacaParser.RULE_nbhdDefn; }
	// @Override
	public enterRule(listener: alpacaListener): void {
		if (listener.enterNbhdDefn) {
			listener.enterNbhdDefn(this);
		}
	}
	// @Override
	public exitRule(listener: alpacaListener): void {
		if (listener.exitNbhdDefn) {
			listener.exitNbhdDefn(this);
		}
	}
}


export class ClassIDContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return alpacaParser.RULE_classID; }
	// @Override
	public enterRule(listener: alpacaListener): void {
		if (listener.enterClassID) {
			listener.enterClassID(this);
		}
	}
	// @Override
	public exitRule(listener: alpacaListener): void {
		if (listener.exitClassID) {
			listener.exitClassID(this);
		}
	}
}


export class StateIDContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return alpacaParser.RULE_stateID; }
	// @Override
	public enterRule(listener: alpacaListener): void {
		if (listener.enterStateID) {
			listener.enterStateID(this);
		}
	}
	// @Override
	public exitRule(listener: alpacaListener): void {
		if (listener.exitStateID) {
			listener.exitStateID(this);
		}
	}
}


export class NbhdIDContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return alpacaParser.RULE_nbhdID; }
	// @Override
	public enterRule(listener: alpacaListener): void {
		if (listener.enterNbhdID) {
			listener.enterNbhdID(this);
		}
	}
	// @Override
	public exitRule(listener: alpacaListener): void {
		if (listener.exitNbhdID) {
			listener.exitNbhdID(this);
		}
	}
}


export class MembershipDeclContext extends ParserRuleContext {
	public classRef(): ClassRefContext {
		return this.getRuleContext(0, ClassRefContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return alpacaParser.RULE_membershipDecl; }
	// @Override
	public enterRule(listener: alpacaListener): void {
		if (listener.enterMembershipDecl) {
			listener.enterMembershipDecl(this);
		}
	}
	// @Override
	public exitRule(listener: alpacaListener): void {
		if (listener.exitMembershipDecl) {
			listener.exitMembershipDecl(this);
		}
	}
}


export class ClassRefContext extends ParserRuleContext {
	public classID(): ClassIDContext {
		return this.getRuleContext(0, ClassIDContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return alpacaParser.RULE_classRef; }
	// @Override
	public enterRule(listener: alpacaListener): void {
		if (listener.enterClassRef) {
			listener.enterClassRef(this);
		}
	}
	// @Override
	public exitRule(listener: alpacaListener): void {
		if (listener.exitClassRef) {
			listener.exitClassRef(this);
		}
	}
}


export class RulesContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return alpacaParser.RULE_rules; }
	// @Override
	public enterRule(listener: alpacaListener): void {
		if (listener.enterRules) {
			listener.enterRules(this);
		}
	}
	// @Override
	public exitRule(listener: alpacaListener): void {
		if (listener.exitRules) {
			listener.exitRules(this);
		}
	}
}


export class Rule_Context extends ParserRuleContext {
	public stateRef(): StateRefContext {
		return this.getRuleContext(0, StateRefContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return alpacaParser.RULE_rule_; }
	// @Override
	public enterRule(listener: alpacaListener): void {
		if (listener.enterRule_) {
			listener.enterRule_(this);
		}
	}
	// @Override
	public exitRule(listener: alpacaListener): void {
		if (listener.exitRule_) {
			listener.exitRule_(this);
		}
	}
}


export class StateRefContext extends ParserRuleContext {
	public stateID(): StateIDContext | undefined {
		return this.tryGetRuleContext(0, StateIDContext);
	}
	public arrowchain(): ArrowchainContext | undefined {
		return this.tryGetRuleContext(0, ArrowchainContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return alpacaParser.RULE_stateRef; }
	// @Override
	public enterRule(listener: alpacaListener): void {
		if (listener.enterStateRef) {
			listener.enterStateRef(this);
		}
	}
	// @Override
	public exitRule(listener: alpacaListener): void {
		if (listener.exitStateRef) {
			listener.exitStateRef(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public term(): TermContext[];
	public term(i: number): TermContext;
	public term(i?: number): TermContext | TermContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TermContext);
		} else {
			return this.getRuleContext(i, TermContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return alpacaParser.RULE_expression; }
	// @Override
	public enterRule(listener: alpacaListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: alpacaListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
}


export class TermContext extends ParserRuleContext {
	public adjacencyPred(): AdjacencyPredContext | undefined {
		return this.tryGetRuleContext(0, AdjacencyPredContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public term(): TermContext | undefined {
		return this.tryGetRuleContext(0, TermContext);
	}
	public boolPrimitive(): BoolPrimitiveContext | undefined {
		return this.tryGetRuleContext(0, BoolPrimitiveContext);
	}
	public relationalPred(): RelationalPredContext | undefined {
		return this.tryGetRuleContext(0, RelationalPredContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return alpacaParser.RULE_term; }
	// @Override
	public enterRule(listener: alpacaListener): void {
		if (listener.enterTerm) {
			listener.enterTerm(this);
		}
	}
	// @Override
	public exitRule(listener: alpacaListener): void {
		if (listener.exitTerm) {
			listener.exitTerm(this);
		}
	}
}


export class RelationalPredContext extends ParserRuleContext {
	public stateRef(): StateRefContext[];
	public stateRef(i: number): StateRefContext;
	public stateRef(i?: number): StateRefContext | StateRefContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StateRefContext);
		} else {
			return this.getRuleContext(i, StateRefContext);
		}
	}
	public classRef(): ClassRefContext | undefined {
		return this.tryGetRuleContext(0, ClassRefContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return alpacaParser.RULE_relationalPred; }
	// @Override
	public enterRule(listener: alpacaListener): void {
		if (listener.enterRelationalPred) {
			listener.enterRelationalPred(this);
		}
	}
	// @Override
	public exitRule(listener: alpacaListener): void {
		if (listener.exitRelationalPred) {
			listener.exitRelationalPred(this);
		}
	}
}


export class AdjacencyPredContext extends ParserRuleContext {
	public naturalnumber(): NaturalnumberContext {
		return this.getRuleContext(0, NaturalnumberContext);
	}
	public stateRef(): StateRefContext | undefined {
		return this.tryGetRuleContext(0, StateRefContext);
	}
	public classRef(): ClassRefContext | undefined {
		return this.tryGetRuleContext(0, ClassRefContext);
	}
	public neigbourhood(): NeigbourhoodContext | undefined {
		return this.tryGetRuleContext(0, NeigbourhoodContext);
	}
	public nbhdID(): NbhdIDContext | undefined {
		return this.tryGetRuleContext(0, NbhdIDContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return alpacaParser.RULE_adjacencyPred; }
	// @Override
	public enterRule(listener: alpacaListener): void {
		if (listener.enterAdjacencyPred) {
			listener.enterAdjacencyPred(this);
		}
	}
	// @Override
	public exitRule(listener: alpacaListener): void {
		if (listener.exitAdjacencyPred) {
			listener.exitAdjacencyPred(this);
		}
	}
}


export class BoolPrimitiveContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return alpacaParser.RULE_boolPrimitive; }
	// @Override
	public enterRule(listener: alpacaListener): void {
		if (listener.enterBoolPrimitive) {
			listener.enterBoolPrimitive(this);
		}
	}
	// @Override
	public exitRule(listener: alpacaListener): void {
		if (listener.exitBoolPrimitive) {
			listener.exitBoolPrimitive(this);
		}
	}
}


export class NeigbourhoodContext extends ParserRuleContext {
	public arrowchain(): ArrowchainContext[];
	public arrowchain(i: number): ArrowchainContext;
	public arrowchain(i?: number): ArrowchainContext | ArrowchainContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArrowchainContext);
		} else {
			return this.getRuleContext(i, ArrowchainContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return alpacaParser.RULE_neigbourhood; }
	// @Override
	public enterRule(listener: alpacaListener): void {
		if (listener.enterNeigbourhood) {
			listener.enterNeigbourhood(this);
		}
	}
	// @Override
	public exitRule(listener: alpacaListener): void {
		if (listener.exitNeigbourhood) {
			listener.exitNeigbourhood(this);
		}
	}
}


export class IdentifierContext extends ParserRuleContext {
	public ALPHA(): TerminalNode[];
	public ALPHA(i: number): TerminalNode;
	public ALPHA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(alpacaParser.ALPHA);
		} else {
			return this.getToken(alpacaParser.ALPHA, i);
		}
	}
	public DIGIT(): TerminalNode[];
	public DIGIT(i: number): TerminalNode;
	public DIGIT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(alpacaParser.DIGIT);
		} else {
			return this.getToken(alpacaParser.DIGIT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return alpacaParser.RULE_identifier; }
	// @Override
	public enterRule(listener: alpacaListener): void {
		if (listener.enterIdentifier) {
			listener.enterIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: alpacaListener): void {
		if (listener.exitIdentifier) {
			listener.exitIdentifier(this);
		}
	}
}


export class NaturalnumberContext extends ParserRuleContext {
	public DIGIT(): TerminalNode[];
	public DIGIT(i: number): TerminalNode;
	public DIGIT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(alpacaParser.DIGIT);
		} else {
			return this.getToken(alpacaParser.DIGIT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return alpacaParser.RULE_naturalnumber; }
	// @Override
	public enterRule(listener: alpacaListener): void {
		if (listener.enterNaturalnumber) {
			listener.enterNaturalnumber(this);
		}
	}
	// @Override
	public exitRule(listener: alpacaListener): void {
		if (listener.exitNaturalnumber) {
			listener.exitNaturalnumber(this);
		}
	}
}


export class ArrowchainContext extends ParserRuleContext {
	public ARROW(): TerminalNode[];
	public ARROW(i: number): TerminalNode;
	public ARROW(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(alpacaParser.ARROW);
		} else {
			return this.getToken(alpacaParser.ARROW, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return alpacaParser.RULE_arrowchain; }
	// @Override
	public enterRule(listener: alpacaListener): void {
		if (listener.enterArrowchain) {
			listener.enterArrowchain(this);
		}
	}
	// @Override
	public exitRule(listener: alpacaListener): void {
		if (listener.exitArrowchain) {
			listener.exitArrowchain(this);
		}
	}
}


