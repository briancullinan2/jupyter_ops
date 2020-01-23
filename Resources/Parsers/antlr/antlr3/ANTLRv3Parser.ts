// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/antlr/antlr3/ANTLRv3.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { ANTLRv3Listener } from "./ANTLRv3Listener";

export class ANTLRv3Parser extends Parser {
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
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly T__24 = 25;
	public static readonly T__25 = 26;
	public static readonly T__26 = 27;
	public static readonly T__27 = 28;
	public static readonly T__28 = 29;
	public static readonly CHAR_LITERAL = 30;
	public static readonly STRING_LITERAL = 31;
	public static readonly DOUBLE_QUOTE_STRING_LITERAL = 32;
	public static readonly DOUBLE_ANGLE_STRING_LITERAL = 33;
	public static readonly INT = 34;
	public static readonly ARG_ACTION = 35;
	public static readonly ACTION = 36;
	public static readonly OPTIONS = 37;
	public static readonly TOKENS = 38;
	public static readonly DOC_COMMENT = 39;
	public static readonly PARSER = 40;
	public static readonly LEXER = 41;
	public static readonly RULE = 42;
	public static readonly BLOCK = 43;
	public static readonly OPTIONAL = 44;
	public static readonly CLOSURE = 45;
	public static readonly POSITIVE_CLOSURE = 46;
	public static readonly SYNPRED = 47;
	public static readonly CHAR_RANGE = 48;
	public static readonly EPSILON = 49;
	public static readonly ALT = 50;
	public static readonly EOR = 51;
	public static readonly EOB = 52;
	public static readonly EOA = 53;
	public static readonly ID = 54;
	public static readonly ARG = 55;
	public static readonly ARGLIST = 56;
	public static readonly RET = 57;
	public static readonly LEXER_GRAMMAR = 58;
	public static readonly PARSER_GRAMMAR = 59;
	public static readonly TREE_GRAMMAR = 60;
	public static readonly COMBINED_GRAMMAR = 61;
	public static readonly INITACTION = 62;
	public static readonly LABEL = 63;
	public static readonly TEMPLATE = 64;
	public static readonly SCOPE = 65;
	public static readonly SEMPRED = 66;
	public static readonly GATED_SEMPRED = 67;
	public static readonly SYN_SEMPRED = 68;
	public static readonly BACKTRACK_SEMPRED = 69;
	public static readonly FRAGMENT = 70;
	public static readonly TREE_BEGIN = 71;
	public static readonly ROOT = 72;
	public static readonly BANG = 73;
	public static readonly RANGE = 74;
	public static readonly REWRITE = 75;
	public static readonly SL_COMMENT = 76;
	public static readonly ML_COMMENT = 77;
	public static readonly WS = 78;
	public static readonly TOKEN_REF = 79;
	public static readonly RULE_REF = 80;
	public static readonly RULE_grammarDef = 0;
	public static readonly RULE_tokensSpec = 1;
	public static readonly RULE_tokenSpec = 2;
	public static readonly RULE_attrScope = 3;
	public static readonly RULE_action = 4;
	public static readonly RULE_actionScopeName = 5;
	public static readonly RULE_optionsSpec = 6;
	public static readonly RULE_option = 7;
	public static readonly RULE_optionValue = 8;
	public static readonly RULE_rule_ = 9;
	public static readonly RULE_ruleAction = 10;
	public static readonly RULE_throwsSpec = 11;
	public static readonly RULE_ruleScopeSpec = 12;
	public static readonly RULE_block = 13;
	public static readonly RULE_altList = 14;
	public static readonly RULE_alternative = 15;
	public static readonly RULE_exceptionGroup = 16;
	public static readonly RULE_exceptionHandler = 17;
	public static readonly RULE_finallyClause = 18;
	public static readonly RULE_element = 19;
	public static readonly RULE_elementNoOptionSpec = 20;
	public static readonly RULE_atom = 21;
	public static readonly RULE_notSet = 22;
	public static readonly RULE_treeSpec = 23;
	public static readonly RULE_ebnf = 24;
	public static readonly RULE_range = 25;
	public static readonly RULE_terminal_ = 26;
	public static readonly RULE_notTerminal = 27;
	public static readonly RULE_ebnfSuffix = 28;
	public static readonly RULE_rewrite = 29;
	public static readonly RULE_rewrite_alternative = 30;
	public static readonly RULE_rewrite_tree_block = 31;
	public static readonly RULE_rewrite_tree_alternative = 32;
	public static readonly RULE_rewrite_tree_element = 33;
	public static readonly RULE_rewrite_tree_atom = 34;
	public static readonly RULE_rewrite_tree_ebnf = 35;
	public static readonly RULE_rewrite_tree = 36;
	public static readonly RULE_rewrite_template = 37;
	public static readonly RULE_rewrite_template_ref = 38;
	public static readonly RULE_rewrite_indirect_template_head = 39;
	public static readonly RULE_rewrite_template_args = 40;
	public static readonly RULE_rewrite_template_arg = 41;
	public static readonly RULE_id = 42;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"grammarDef", "tokensSpec", "tokenSpec", "attrScope", "action", "actionScopeName", 
		"optionsSpec", "option", "optionValue", "rule_", "ruleAction", "throwsSpec", 
		"ruleScopeSpec", "block", "altList", "alternative", "exceptionGroup", 
		"exceptionHandler", "finallyClause", "element", "elementNoOptionSpec", 
		"atom", "notSet", "treeSpec", "ebnf", "range", "terminal_", "notTerminal", 
		"ebnfSuffix", "rewrite", "rewrite_alternative", "rewrite_tree_block", 
		"rewrite_tree_alternative", "rewrite_tree_element", "rewrite_tree_atom", 
		"rewrite_tree_ebnf", "rewrite_tree", "rewrite_template", "rewrite_template_ref", 
		"rewrite_indirect_template_head", "rewrite_template_args", "rewrite_template_arg", 
		"id",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'lexer'", "'parser'", "'tree'", "'grammar'", "';'", "'}'", 
		"'='", "'@'", "'::'", "'*'", "'protected'", "'public'", "'private'", "'returns'", 
		"':'", "'throws'", "','", "'('", "'|'", "')'", "'catch'", "'finally'", 
		"'+='", "'=>'", "'~'", "'?'", "'+'", "'.'", "'$'", undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		"'DOC_COMMENT'", "'PARSER'", "'LEXER'", "'RULE'", "'BLOCK'", "'OPTIONAL'", 
		"'CLOSURE'", "'POSITIVE_CLOSURE'", "'SYNPRED'", "'CHAR_RANGE'", "'EPSILON'", 
		"'ALT'", "'EOR'", "'EOB'", "'EOA'", "'ID'", "'ARG'", "'ARGLIST'", "'RET'", 
		"'LEXER_GRAMMAR'", "'PARSER_GRAMMAR'", "'TREE_GRAMMAR'", "'COMBINED_GRAMMAR'", 
		"'INITACTION'", "'LABEL'", "'TEMPLATE'", "'scope'", "'SEMPRED'", "'GATED_SEMPRED'", 
		"'SYN_SEMPRED'", "'BACKTRACK_SEMPRED'", "'fragment'", "'^('", "'^'", "'!'", 
		"'..'", "'->'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, "CHAR_LITERAL", "STRING_LITERAL", "DOUBLE_QUOTE_STRING_LITERAL", 
		"DOUBLE_ANGLE_STRING_LITERAL", "INT", "ARG_ACTION", "ACTION", "OPTIONS", 
		"TOKENS", "DOC_COMMENT", "PARSER", "LEXER", "RULE", "BLOCK", "OPTIONAL", 
		"CLOSURE", "POSITIVE_CLOSURE", "SYNPRED", "CHAR_RANGE", "EPSILON", "ALT", 
		"EOR", "EOB", "EOA", "ID", "ARG", "ARGLIST", "RET", "LEXER_GRAMMAR", "PARSER_GRAMMAR", 
		"TREE_GRAMMAR", "COMBINED_GRAMMAR", "INITACTION", "LABEL", "TEMPLATE", 
		"SCOPE", "SEMPRED", "GATED_SEMPRED", "SYN_SEMPRED", "BACKTRACK_SEMPRED", 
		"FRAGMENT", "TREE_BEGIN", "ROOT", "BANG", "RANGE", "REWRITE", "SL_COMMENT", 
		"ML_COMMENT", "WS", "TOKEN_REF", "RULE_REF",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(ANTLRv3Parser._LITERAL_NAMES, ANTLRv3Parser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return ANTLRv3Parser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "ANTLRv3.g4"; }

	// @Override
	public get ruleNames(): string[] { return ANTLRv3Parser.ruleNames; }

	// @Override
	public get serializedATN(): string { return ANTLRv3Parser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(ANTLRv3Parser._ATN, this);
	}
	// @RuleVersion(0)
	public grammarDef(): GrammarDefContext {
		let _localctx: GrammarDefContext = new GrammarDefContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, ANTLRv3Parser.RULE_grammarDef);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 87;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ANTLRv3Parser.DOC_COMMENT) {
				{
				this.state = 86;
				this.match(ANTLRv3Parser.DOC_COMMENT);
				}
			}

			this.state = 90;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ANTLRv3Parser.T__0) | (1 << ANTLRv3Parser.T__1) | (1 << ANTLRv3Parser.T__2))) !== 0)) {
				{
				this.state = 89;
				_la = this._input.LA(1);
				if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ANTLRv3Parser.T__0) | (1 << ANTLRv3Parser.T__1) | (1 << ANTLRv3Parser.T__2))) !== 0))) {
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

			this.state = 92;
			this.match(ANTLRv3Parser.T__3);
			this.state = 93;
			this.id();
			this.state = 94;
			this.match(ANTLRv3Parser.T__4);
			this.state = 96;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ANTLRv3Parser.OPTIONS) {
				{
				this.state = 95;
				this.optionsSpec();
				}
			}

			this.state = 99;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ANTLRv3Parser.TOKENS) {
				{
				this.state = 98;
				this.tokensSpec();
				}
			}

			this.state = 104;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ANTLRv3Parser.SCOPE) {
				{
				{
				this.state = 101;
				this.attrScope();
				}
				}
				this.state = 106;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 110;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ANTLRv3Parser.T__7) {
				{
				{
				this.state = 107;
				this.action();
				}
				}
				this.state = 112;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 114;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 113;
				this.rule_();
				}
				}
				this.state = 116;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 11)) & ~0x1F) === 0 && ((1 << (_la - 11)) & ((1 << (ANTLRv3Parser.T__10 - 11)) | (1 << (ANTLRv3Parser.T__11 - 11)) | (1 << (ANTLRv3Parser.T__12 - 11)) | (1 << (ANTLRv3Parser.DOC_COMMENT - 11)))) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & ((1 << (ANTLRv3Parser.FRAGMENT - 70)) | (1 << (ANTLRv3Parser.TOKEN_REF - 70)) | (1 << (ANTLRv3Parser.RULE_REF - 70)))) !== 0));
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
	public tokensSpec(): TokensSpecContext {
		let _localctx: TokensSpecContext = new TokensSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, ANTLRv3Parser.RULE_tokensSpec);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 118;
			this.match(ANTLRv3Parser.TOKENS);
			this.state = 120;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 119;
				this.tokenSpec();
				}
				}
				this.state = 122;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === ANTLRv3Parser.TOKEN_REF);
			this.state = 124;
			this.match(ANTLRv3Parser.T__5);
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
	public tokenSpec(): TokenSpecContext {
		let _localctx: TokenSpecContext = new TokenSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, ANTLRv3Parser.RULE_tokenSpec);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 126;
			this.match(ANTLRv3Parser.TOKEN_REF);
			this.state = 130;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ANTLRv3Parser.T__6:
				{
				this.state = 127;
				this.match(ANTLRv3Parser.T__6);
				this.state = 128;
				_la = this._input.LA(1);
				if (!(_la === ANTLRv3Parser.CHAR_LITERAL || _la === ANTLRv3Parser.STRING_LITERAL)) {
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
			case ANTLRv3Parser.T__4:
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 132;
			this.match(ANTLRv3Parser.T__4);
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
	public attrScope(): AttrScopeContext {
		let _localctx: AttrScopeContext = new AttrScopeContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, ANTLRv3Parser.RULE_attrScope);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 134;
			this.match(ANTLRv3Parser.SCOPE);
			this.state = 135;
			this.id();
			this.state = 136;
			this.match(ANTLRv3Parser.ACTION);
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
	public action(): ActionContext {
		let _localctx: ActionContext = new ActionContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, ANTLRv3Parser.RULE_action);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 138;
			this.match(ANTLRv3Parser.T__7);
			this.state = 142;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				{
				this.state = 139;
				this.actionScopeName();
				this.state = 140;
				this.match(ANTLRv3Parser.T__8);
				}
				break;
			}
			this.state = 144;
			this.id();
			this.state = 145;
			this.match(ANTLRv3Parser.ACTION);
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
	public actionScopeName(): ActionScopeNameContext {
		let _localctx: ActionScopeNameContext = new ActionScopeNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, ANTLRv3Parser.RULE_actionScopeName);
		try {
			this.state = 150;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ANTLRv3Parser.TOKEN_REF:
			case ANTLRv3Parser.RULE_REF:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 147;
				this.id();
				}
				break;
			case ANTLRv3Parser.T__0:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 148;
				this.match(ANTLRv3Parser.T__0);
				}
				break;
			case ANTLRv3Parser.T__1:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 149;
				this.match(ANTLRv3Parser.T__1);
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
	public optionsSpec(): OptionsSpecContext {
		let _localctx: OptionsSpecContext = new OptionsSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, ANTLRv3Parser.RULE_optionsSpec);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 152;
			this.match(ANTLRv3Parser.OPTIONS);
			this.state = 156;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 153;
				this.option();
				this.state = 154;
				this.match(ANTLRv3Parser.T__4);
				}
				}
				this.state = 158;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === ANTLRv3Parser.TOKEN_REF || _la === ANTLRv3Parser.RULE_REF);
			this.state = 160;
			this.match(ANTLRv3Parser.T__5);
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
		this.enterRule(_localctx, 14, ANTLRv3Parser.RULE_option);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 162;
			this.id();
			this.state = 163;
			this.match(ANTLRv3Parser.T__6);
			this.state = 164;
			this.optionValue();
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
	public optionValue(): OptionValueContext {
		let _localctx: OptionValueContext = new OptionValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, ANTLRv3Parser.RULE_optionValue);
		try {
			this.state = 171;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ANTLRv3Parser.TOKEN_REF:
			case ANTLRv3Parser.RULE_REF:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 166;
				this.id();
				}
				break;
			case ANTLRv3Parser.STRING_LITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 167;
				this.match(ANTLRv3Parser.STRING_LITERAL);
				}
				break;
			case ANTLRv3Parser.CHAR_LITERAL:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 168;
				this.match(ANTLRv3Parser.CHAR_LITERAL);
				}
				break;
			case ANTLRv3Parser.INT:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 169;
				this.match(ANTLRv3Parser.INT);
				}
				break;
			case ANTLRv3Parser.T__9:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 170;
				this.match(ANTLRv3Parser.T__9);
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
	public rule_(): Rule_Context {
		let _localctx: Rule_Context = new Rule_Context(this._ctx, this.state);
		this.enterRule(_localctx, 18, ANTLRv3Parser.RULE_rule_);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 174;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ANTLRv3Parser.DOC_COMMENT) {
				{
				this.state = 173;
				this.match(ANTLRv3Parser.DOC_COMMENT);
				}
			}

			this.state = 177;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ANTLRv3Parser.T__10) | (1 << ANTLRv3Parser.T__11) | (1 << ANTLRv3Parser.T__12))) !== 0) || _la === ANTLRv3Parser.FRAGMENT) {
				{
				this.state = 176;
				_la = this._input.LA(1);
				if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ANTLRv3Parser.T__10) | (1 << ANTLRv3Parser.T__11) | (1 << ANTLRv3Parser.T__12))) !== 0) || _la === ANTLRv3Parser.FRAGMENT)) {
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

			this.state = 179;
			this.id();
			this.state = 181;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ANTLRv3Parser.BANG) {
				{
				this.state = 180;
				this.match(ANTLRv3Parser.BANG);
				}
			}

			this.state = 184;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ANTLRv3Parser.ARG_ACTION) {
				{
				this.state = 183;
				this.match(ANTLRv3Parser.ARG_ACTION);
				}
			}

			this.state = 188;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ANTLRv3Parser.T__13) {
				{
				this.state = 186;
				this.match(ANTLRv3Parser.T__13);
				this.state = 187;
				this.match(ANTLRv3Parser.ARG_ACTION);
				}
			}

			this.state = 191;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ANTLRv3Parser.T__15) {
				{
				this.state = 190;
				this.throwsSpec();
				}
			}

			this.state = 194;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ANTLRv3Parser.OPTIONS) {
				{
				this.state = 193;
				this.optionsSpec();
				}
			}

			this.state = 197;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ANTLRv3Parser.SCOPE) {
				{
				this.state = 196;
				this.ruleScopeSpec();
				}
			}

			this.state = 202;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ANTLRv3Parser.T__7) {
				{
				{
				this.state = 199;
				this.ruleAction();
				}
				}
				this.state = 204;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 205;
			this.match(ANTLRv3Parser.T__14);
			this.state = 207;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 18)) & ~0x1F) === 0 && ((1 << (_la - 18)) & ((1 << (ANTLRv3Parser.T__17 - 18)) | (1 << (ANTLRv3Parser.T__24 - 18)) | (1 << (ANTLRv3Parser.T__27 - 18)) | (1 << (ANTLRv3Parser.CHAR_LITERAL - 18)) | (1 << (ANTLRv3Parser.STRING_LITERAL - 18)) | (1 << (ANTLRv3Parser.ACTION - 18)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (ANTLRv3Parser.SEMPRED - 66)) | (1 << (ANTLRv3Parser.TREE_BEGIN - 66)) | (1 << (ANTLRv3Parser.TOKEN_REF - 66)) | (1 << (ANTLRv3Parser.RULE_REF - 66)))) !== 0)) {
				{
				this.state = 206;
				this.altList();
				}
			}

			this.state = 209;
			this.match(ANTLRv3Parser.T__4);
			this.state = 211;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ANTLRv3Parser.T__20 || _la === ANTLRv3Parser.T__21) {
				{
				this.state = 210;
				this.exceptionGroup();
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
	public ruleAction(): RuleActionContext {
		let _localctx: RuleActionContext = new RuleActionContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, ANTLRv3Parser.RULE_ruleAction);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 213;
			this.match(ANTLRv3Parser.T__7);
			this.state = 214;
			this.id();
			this.state = 215;
			this.match(ANTLRv3Parser.ACTION);
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
	public throwsSpec(): ThrowsSpecContext {
		let _localctx: ThrowsSpecContext = new ThrowsSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, ANTLRv3Parser.RULE_throwsSpec);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 217;
			this.match(ANTLRv3Parser.T__15);
			this.state = 218;
			this.id();
			this.state = 223;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ANTLRv3Parser.T__16) {
				{
				{
				this.state = 219;
				this.match(ANTLRv3Parser.T__16);
				this.state = 220;
				this.id();
				}
				}
				this.state = 225;
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
	public ruleScopeSpec(): RuleScopeSpecContext {
		let _localctx: RuleScopeSpecContext = new RuleScopeSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, ANTLRv3Parser.RULE_ruleScopeSpec);
		let _la: number;
		try {
			this.state = 252;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 27, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 226;
				this.match(ANTLRv3Parser.SCOPE);
				this.state = 227;
				this.match(ANTLRv3Parser.ACTION);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 228;
				this.match(ANTLRv3Parser.SCOPE);
				this.state = 229;
				this.id();
				this.state = 234;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ANTLRv3Parser.T__16) {
					{
					{
					this.state = 230;
					this.match(ANTLRv3Parser.T__16);
					this.state = 231;
					this.id();
					}
					}
					this.state = 236;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 237;
				this.match(ANTLRv3Parser.T__4);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 239;
				this.match(ANTLRv3Parser.SCOPE);
				this.state = 240;
				this.match(ANTLRv3Parser.ACTION);
				this.state = 241;
				this.match(ANTLRv3Parser.SCOPE);
				this.state = 242;
				this.id();
				this.state = 247;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ANTLRv3Parser.T__16) {
					{
					{
					this.state = 243;
					this.match(ANTLRv3Parser.T__16);
					this.state = 244;
					this.id();
					}
					}
					this.state = 249;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 250;
				this.match(ANTLRv3Parser.T__4);
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
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, ANTLRv3Parser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 254;
			this.match(ANTLRv3Parser.T__17);
			this.state = 259;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ANTLRv3Parser.T__14 || _la === ANTLRv3Parser.OPTIONS) {
				{
				this.state = 256;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ANTLRv3Parser.OPTIONS) {
					{
					this.state = 255;
					this.optionsSpec();
					}
				}

				this.state = 258;
				this.match(ANTLRv3Parser.T__14);
				}
			}

			this.state = 262;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 18)) & ~0x1F) === 0 && ((1 << (_la - 18)) & ((1 << (ANTLRv3Parser.T__17 - 18)) | (1 << (ANTLRv3Parser.T__24 - 18)) | (1 << (ANTLRv3Parser.T__27 - 18)) | (1 << (ANTLRv3Parser.CHAR_LITERAL - 18)) | (1 << (ANTLRv3Parser.STRING_LITERAL - 18)) | (1 << (ANTLRv3Parser.ACTION - 18)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (ANTLRv3Parser.SEMPRED - 66)) | (1 << (ANTLRv3Parser.TREE_BEGIN - 66)) | (1 << (ANTLRv3Parser.TOKEN_REF - 66)) | (1 << (ANTLRv3Parser.RULE_REF - 66)))) !== 0)) {
				{
				this.state = 261;
				this.alternative();
				}
			}

			this.state = 265;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ANTLRv3Parser.REWRITE) {
				{
				this.state = 264;
				this.rewrite();
				}
			}

			this.state = 276;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ANTLRv3Parser.T__18) {
				{
				{
				this.state = 267;
				this.match(ANTLRv3Parser.T__18);
				this.state = 272;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 18)) & ~0x1F) === 0 && ((1 << (_la - 18)) & ((1 << (ANTLRv3Parser.T__17 - 18)) | (1 << (ANTLRv3Parser.T__24 - 18)) | (1 << (ANTLRv3Parser.T__27 - 18)) | (1 << (ANTLRv3Parser.CHAR_LITERAL - 18)) | (1 << (ANTLRv3Parser.STRING_LITERAL - 18)) | (1 << (ANTLRv3Parser.ACTION - 18)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (ANTLRv3Parser.SEMPRED - 66)) | (1 << (ANTLRv3Parser.TREE_BEGIN - 66)) | (1 << (ANTLRv3Parser.TOKEN_REF - 66)) | (1 << (ANTLRv3Parser.RULE_REF - 66)))) !== 0)) {
					{
					this.state = 268;
					this.alternative();
					this.state = 270;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === ANTLRv3Parser.REWRITE) {
						{
						this.state = 269;
						this.rewrite();
						}
					}

					}
				}

				}
				}
				this.state = 278;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 279;
			this.match(ANTLRv3Parser.T__19);
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
	public altList(): AltListContext {
		let _localctx: AltListContext = new AltListContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, ANTLRv3Parser.RULE_altList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 281;
			this.alternative();
			this.state = 283;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ANTLRv3Parser.REWRITE) {
				{
				this.state = 282;
				this.rewrite();
				}
			}

			this.state = 294;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ANTLRv3Parser.T__18) {
				{
				{
				this.state = 285;
				this.match(ANTLRv3Parser.T__18);
				this.state = 290;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 18)) & ~0x1F) === 0 && ((1 << (_la - 18)) & ((1 << (ANTLRv3Parser.T__17 - 18)) | (1 << (ANTLRv3Parser.T__24 - 18)) | (1 << (ANTLRv3Parser.T__27 - 18)) | (1 << (ANTLRv3Parser.CHAR_LITERAL - 18)) | (1 << (ANTLRv3Parser.STRING_LITERAL - 18)) | (1 << (ANTLRv3Parser.ACTION - 18)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (ANTLRv3Parser.SEMPRED - 66)) | (1 << (ANTLRv3Parser.TREE_BEGIN - 66)) | (1 << (ANTLRv3Parser.TOKEN_REF - 66)) | (1 << (ANTLRv3Parser.RULE_REF - 66)))) !== 0)) {
					{
					this.state = 286;
					this.alternative();
					this.state = 288;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === ANTLRv3Parser.REWRITE) {
						{
						this.state = 287;
						this.rewrite();
						}
					}

					}
				}

				}
				}
				this.state = 296;
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
		this.enterRule(_localctx, 30, ANTLRv3Parser.RULE_alternative);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 298;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 297;
				this.element();
				}
				}
				this.state = 300;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 18)) & ~0x1F) === 0 && ((1 << (_la - 18)) & ((1 << (ANTLRv3Parser.T__17 - 18)) | (1 << (ANTLRv3Parser.T__24 - 18)) | (1 << (ANTLRv3Parser.T__27 - 18)) | (1 << (ANTLRv3Parser.CHAR_LITERAL - 18)) | (1 << (ANTLRv3Parser.STRING_LITERAL - 18)) | (1 << (ANTLRv3Parser.ACTION - 18)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (ANTLRv3Parser.SEMPRED - 66)) | (1 << (ANTLRv3Parser.TREE_BEGIN - 66)) | (1 << (ANTLRv3Parser.TOKEN_REF - 66)) | (1 << (ANTLRv3Parser.RULE_REF - 66)))) !== 0));
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
	public exceptionGroup(): ExceptionGroupContext {
		let _localctx: ExceptionGroupContext = new ExceptionGroupContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, ANTLRv3Parser.RULE_exceptionGroup);
		let _la: number;
		try {
			this.state = 311;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ANTLRv3Parser.T__20:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 303;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 302;
					this.exceptionHandler();
					}
					}
					this.state = 305;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === ANTLRv3Parser.T__20);
				this.state = 308;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ANTLRv3Parser.T__21) {
					{
					this.state = 307;
					this.finallyClause();
					}
				}

				}
				break;
			case ANTLRv3Parser.T__21:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 310;
				this.finallyClause();
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
	public exceptionHandler(): ExceptionHandlerContext {
		let _localctx: ExceptionHandlerContext = new ExceptionHandlerContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, ANTLRv3Parser.RULE_exceptionHandler);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 313;
			this.match(ANTLRv3Parser.T__20);
			this.state = 314;
			this.match(ANTLRv3Parser.ARG_ACTION);
			this.state = 315;
			this.match(ANTLRv3Parser.ACTION);
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
	public finallyClause(): FinallyClauseContext {
		let _localctx: FinallyClauseContext = new FinallyClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, ANTLRv3Parser.RULE_finallyClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 317;
			this.match(ANTLRv3Parser.T__21);
			this.state = 318;
			this.match(ANTLRv3Parser.ACTION);
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
		this.enterRule(_localctx, 38, ANTLRv3Parser.RULE_element);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 320;
			this.elementNoOptionSpec();
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
	public elementNoOptionSpec(): ElementNoOptionSpecContext {
		let _localctx: ElementNoOptionSpecContext = new ElementNoOptionSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, ANTLRv3Parser.RULE_elementNoOptionSpec);
		let _la: number;
		try {
			this.state = 345;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 46, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 322;
				this.id();
				this.state = 323;
				_la = this._input.LA(1);
				if (!(_la === ANTLRv3Parser.T__6 || _la === ANTLRv3Parser.T__22)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 324;
				this.atom();
				{
				this.state = 326;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ANTLRv3Parser.T__9) | (1 << ANTLRv3Parser.T__25) | (1 << ANTLRv3Parser.T__26))) !== 0)) {
					{
					this.state = 325;
					this.ebnfSuffix();
					}
				}

				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 328;
				this.id();
				this.state = 329;
				_la = this._input.LA(1);
				if (!(_la === ANTLRv3Parser.T__6 || _la === ANTLRv3Parser.T__22)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 330;
				this.block();
				{
				this.state = 332;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ANTLRv3Parser.T__9) | (1 << ANTLRv3Parser.T__25) | (1 << ANTLRv3Parser.T__26))) !== 0)) {
					{
					this.state = 331;
					this.ebnfSuffix();
					}
				}

				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 334;
				this.atom();
				{
				this.state = 336;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ANTLRv3Parser.T__9) | (1 << ANTLRv3Parser.T__25) | (1 << ANTLRv3Parser.T__26))) !== 0)) {
					{
					this.state = 335;
					this.ebnfSuffix();
					}
				}

				}
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 338;
				this.ebnf();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 339;
				this.match(ANTLRv3Parser.ACTION);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 340;
				this.match(ANTLRv3Parser.SEMPRED);
				{
				this.state = 341;
				this.match(ANTLRv3Parser.T__23);
				}
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 342;
				this.treeSpec();
				{
				this.state = 343;
				this.ebnfSuffix();
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
	public atom(): AtomContext {
		let _localctx: AtomContext = new AtomContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, ANTLRv3Parser.RULE_atom);
		let _la: number;
		try {
			this.state = 354;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 48, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 347;
				this.range();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 348;
				this.terminal_();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 349;
				this.notSet();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 350;
				this.match(ANTLRv3Parser.RULE_REF);
				this.state = 352;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ANTLRv3Parser.ARG_ACTION) {
					{
					this.state = 351;
					this.match(ANTLRv3Parser.ARG_ACTION);
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
	public notSet(): NotSetContext {
		let _localctx: NotSetContext = new NotSetContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, ANTLRv3Parser.RULE_notSet);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 356;
			this.match(ANTLRv3Parser.T__24);
			this.state = 359;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ANTLRv3Parser.CHAR_LITERAL:
			case ANTLRv3Parser.STRING_LITERAL:
			case ANTLRv3Parser.TOKEN_REF:
				{
				this.state = 357;
				this.notTerminal();
				}
				break;
			case ANTLRv3Parser.T__17:
				{
				this.state = 358;
				this.block();
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
	public treeSpec(): TreeSpecContext {
		let _localctx: TreeSpecContext = new TreeSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, ANTLRv3Parser.RULE_treeSpec);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 361;
			this.match(ANTLRv3Parser.TREE_BEGIN);
			this.state = 362;
			this.element();
			this.state = 364;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 363;
				this.element();
				}
				}
				this.state = 366;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 18)) & ~0x1F) === 0 && ((1 << (_la - 18)) & ((1 << (ANTLRv3Parser.T__17 - 18)) | (1 << (ANTLRv3Parser.T__24 - 18)) | (1 << (ANTLRv3Parser.T__27 - 18)) | (1 << (ANTLRv3Parser.CHAR_LITERAL - 18)) | (1 << (ANTLRv3Parser.STRING_LITERAL - 18)) | (1 << (ANTLRv3Parser.ACTION - 18)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (ANTLRv3Parser.SEMPRED - 66)) | (1 << (ANTLRv3Parser.TREE_BEGIN - 66)) | (1 << (ANTLRv3Parser.TOKEN_REF - 66)) | (1 << (ANTLRv3Parser.RULE_REF - 66)))) !== 0));
			this.state = 368;
			this.match(ANTLRv3Parser.T__19);
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
	public ebnf(): EbnfContext {
		let _localctx: EbnfContext = new EbnfContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, ANTLRv3Parser.RULE_ebnf);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 370;
			this.block();
			this.state = 372;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ANTLRv3Parser.T__9) | (1 << ANTLRv3Parser.T__23) | (1 << ANTLRv3Parser.T__25) | (1 << ANTLRv3Parser.T__26))) !== 0)) {
				{
				this.state = 371;
				_la = this._input.LA(1);
				if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ANTLRv3Parser.T__9) | (1 << ANTLRv3Parser.T__23) | (1 << ANTLRv3Parser.T__25) | (1 << ANTLRv3Parser.T__26))) !== 0))) {
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
	public range(): RangeContext {
		let _localctx: RangeContext = new RangeContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, ANTLRv3Parser.RULE_range);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 374;
			this.match(ANTLRv3Parser.CHAR_LITERAL);
			this.state = 375;
			this.match(ANTLRv3Parser.RANGE);
			this.state = 376;
			this.match(ANTLRv3Parser.CHAR_LITERAL);
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
	public terminal_(): Terminal_Context {
		let _localctx: Terminal_Context = new Terminal_Context(this._ctx, this.state);
		this.enterRule(_localctx, 52, ANTLRv3Parser.RULE_terminal_);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 385;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ANTLRv3Parser.CHAR_LITERAL:
				{
				this.state = 378;
				this.match(ANTLRv3Parser.CHAR_LITERAL);
				}
				break;
			case ANTLRv3Parser.TOKEN_REF:
				{
				this.state = 379;
				this.match(ANTLRv3Parser.TOKEN_REF);
				{
				this.state = 381;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ANTLRv3Parser.ARG_ACTION) {
					{
					this.state = 380;
					this.match(ANTLRv3Parser.ARG_ACTION);
					}
				}

				}
				}
				break;
			case ANTLRv3Parser.STRING_LITERAL:
				{
				this.state = 383;
				this.match(ANTLRv3Parser.STRING_LITERAL);
				}
				break;
			case ANTLRv3Parser.T__27:
				{
				this.state = 384;
				this.match(ANTLRv3Parser.T__27);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 388;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ANTLRv3Parser.ROOT || _la === ANTLRv3Parser.BANG) {
				{
				this.state = 387;
				_la = this._input.LA(1);
				if (!(_la === ANTLRv3Parser.ROOT || _la === ANTLRv3Parser.BANG)) {
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
	public notTerminal(): NotTerminalContext {
		let _localctx: NotTerminalContext = new NotTerminalContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, ANTLRv3Parser.RULE_notTerminal);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 390;
			_la = this._input.LA(1);
			if (!(_la === ANTLRv3Parser.CHAR_LITERAL || _la === ANTLRv3Parser.STRING_LITERAL || _la === ANTLRv3Parser.TOKEN_REF)) {
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
	public ebnfSuffix(): EbnfSuffixContext {
		let _localctx: EbnfSuffixContext = new EbnfSuffixContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, ANTLRv3Parser.RULE_ebnfSuffix);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 392;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ANTLRv3Parser.T__9) | (1 << ANTLRv3Parser.T__25) | (1 << ANTLRv3Parser.T__26))) !== 0))) {
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
	public rewrite(): RewriteContext {
		let _localctx: RewriteContext = new RewriteContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, ANTLRv3Parser.RULE_rewrite);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 399;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 55, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 394;
					this.match(ANTLRv3Parser.REWRITE);
					this.state = 395;
					this.match(ANTLRv3Parser.SEMPRED);
					this.state = 396;
					this.rewrite_alternative();
					}
					}
				}
				this.state = 401;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 55, this._ctx);
			}
			this.state = 402;
			this.match(ANTLRv3Parser.REWRITE);
			this.state = 403;
			this.rewrite_alternative();
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
	public rewrite_alternative(): Rewrite_alternativeContext {
		let _localctx: Rewrite_alternativeContext = new Rewrite_alternativeContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, ANTLRv3Parser.RULE_rewrite_alternative);
		try {
			this.state = 407;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ANTLRv3Parser.T__4:
			case ANTLRv3Parser.T__18:
			case ANTLRv3Parser.T__19:
			case ANTLRv3Parser.REWRITE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 405;
				this.rewrite_template();
				}
				break;
			case ANTLRv3Parser.T__17:
			case ANTLRv3Parser.T__28:
			case ANTLRv3Parser.CHAR_LITERAL:
			case ANTLRv3Parser.STRING_LITERAL:
			case ANTLRv3Parser.ACTION:
			case ANTLRv3Parser.TREE_BEGIN:
			case ANTLRv3Parser.TOKEN_REF:
			case ANTLRv3Parser.RULE_REF:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 406;
				this.rewrite_tree_alternative();
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
	public rewrite_tree_block(): Rewrite_tree_blockContext {
		let _localctx: Rewrite_tree_blockContext = new Rewrite_tree_blockContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, ANTLRv3Parser.RULE_rewrite_tree_block);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 409;
			this.match(ANTLRv3Parser.T__17);
			this.state = 410;
			this.rewrite_tree_alternative();
			this.state = 411;
			this.match(ANTLRv3Parser.T__19);
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
	public rewrite_tree_alternative(): Rewrite_tree_alternativeContext {
		let _localctx: Rewrite_tree_alternativeContext = new Rewrite_tree_alternativeContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, ANTLRv3Parser.RULE_rewrite_tree_alternative);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 414;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 413;
				this.rewrite_tree_element();
				}
				}
				this.state = 416;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 18)) & ~0x1F) === 0 && ((1 << (_la - 18)) & ((1 << (ANTLRv3Parser.T__17 - 18)) | (1 << (ANTLRv3Parser.T__28 - 18)) | (1 << (ANTLRv3Parser.CHAR_LITERAL - 18)) | (1 << (ANTLRv3Parser.STRING_LITERAL - 18)) | (1 << (ANTLRv3Parser.ACTION - 18)))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (ANTLRv3Parser.TREE_BEGIN - 71)) | (1 << (ANTLRv3Parser.TOKEN_REF - 71)) | (1 << (ANTLRv3Parser.RULE_REF - 71)))) !== 0));
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
	public rewrite_tree_element(): Rewrite_tree_elementContext {
		let _localctx: Rewrite_tree_elementContext = new Rewrite_tree_elementContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, ANTLRv3Parser.RULE_rewrite_tree_element);
		try {
			this.state = 426;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 58, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 418;
				this.rewrite_tree_atom();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 419;
				this.rewrite_tree_atom();
				this.state = 420;
				this.ebnfSuffix();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 422;
				this.rewrite_tree();
				{
				this.state = 423;
				this.ebnfSuffix();
				}
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 425;
				this.rewrite_tree_ebnf();
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
	public rewrite_tree_atom(): Rewrite_tree_atomContext {
		let _localctx: Rewrite_tree_atomContext = new Rewrite_tree_atomContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, ANTLRv3Parser.RULE_rewrite_tree_atom);
		let _la: number;
		try {
			this.state = 438;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ANTLRv3Parser.CHAR_LITERAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 428;
				this.match(ANTLRv3Parser.CHAR_LITERAL);
				}
				break;
			case ANTLRv3Parser.TOKEN_REF:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 429;
				this.match(ANTLRv3Parser.TOKEN_REF);
				this.state = 431;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ANTLRv3Parser.ARG_ACTION) {
					{
					this.state = 430;
					this.match(ANTLRv3Parser.ARG_ACTION);
					}
				}

				}
				break;
			case ANTLRv3Parser.RULE_REF:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 433;
				this.match(ANTLRv3Parser.RULE_REF);
				}
				break;
			case ANTLRv3Parser.STRING_LITERAL:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 434;
				this.match(ANTLRv3Parser.STRING_LITERAL);
				}
				break;
			case ANTLRv3Parser.T__28:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 435;
				this.match(ANTLRv3Parser.T__28);
				this.state = 436;
				this.id();
				}
				break;
			case ANTLRv3Parser.ACTION:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 437;
				this.match(ANTLRv3Parser.ACTION);
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
	public rewrite_tree_ebnf(): Rewrite_tree_ebnfContext {
		let _localctx: Rewrite_tree_ebnfContext = new Rewrite_tree_ebnfContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, ANTLRv3Parser.RULE_rewrite_tree_ebnf);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 440;
			this.rewrite_tree_block();
			this.state = 441;
			this.ebnfSuffix();
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
	public rewrite_tree(): Rewrite_treeContext {
		let _localctx: Rewrite_treeContext = new Rewrite_treeContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, ANTLRv3Parser.RULE_rewrite_tree);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 443;
			this.match(ANTLRv3Parser.TREE_BEGIN);
			this.state = 444;
			this.rewrite_tree_atom();
			this.state = 448;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 18)) & ~0x1F) === 0 && ((1 << (_la - 18)) & ((1 << (ANTLRv3Parser.T__17 - 18)) | (1 << (ANTLRv3Parser.T__28 - 18)) | (1 << (ANTLRv3Parser.CHAR_LITERAL - 18)) | (1 << (ANTLRv3Parser.STRING_LITERAL - 18)) | (1 << (ANTLRv3Parser.ACTION - 18)))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (ANTLRv3Parser.TREE_BEGIN - 71)) | (1 << (ANTLRv3Parser.TOKEN_REF - 71)) | (1 << (ANTLRv3Parser.RULE_REF - 71)))) !== 0)) {
				{
				{
				this.state = 445;
				this.rewrite_tree_element();
				}
				}
				this.state = 450;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 451;
			this.match(ANTLRv3Parser.T__19);
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
	public rewrite_template(): Rewrite_templateContext {
		let _localctx: Rewrite_templateContext = new Rewrite_templateContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, ANTLRv3Parser.RULE_rewrite_template);
		try {
			this.enterOuterAlt(_localctx, 1);
			// tslint:disable-next-line:no-empty
			{
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
	public rewrite_template_ref(): Rewrite_template_refContext {
		let _localctx: Rewrite_template_refContext = new Rewrite_template_refContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, ANTLRv3Parser.RULE_rewrite_template_ref);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 455;
			this.id();
			this.state = 456;
			this.match(ANTLRv3Parser.T__17);
			this.state = 457;
			this.rewrite_template_args();
			this.state = 458;
			this.match(ANTLRv3Parser.T__19);
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
	public rewrite_indirect_template_head(): Rewrite_indirect_template_headContext {
		let _localctx: Rewrite_indirect_template_headContext = new Rewrite_indirect_template_headContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, ANTLRv3Parser.RULE_rewrite_indirect_template_head);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 460;
			this.match(ANTLRv3Parser.T__17);
			this.state = 461;
			this.match(ANTLRv3Parser.ACTION);
			this.state = 462;
			this.match(ANTLRv3Parser.T__19);
			this.state = 463;
			this.match(ANTLRv3Parser.T__17);
			this.state = 464;
			this.rewrite_template_args();
			this.state = 465;
			this.match(ANTLRv3Parser.T__19);
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
	public rewrite_template_args(): Rewrite_template_argsContext {
		let _localctx: Rewrite_template_argsContext = new Rewrite_template_argsContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, ANTLRv3Parser.RULE_rewrite_template_args);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 467;
			this.rewrite_template_arg();
			this.state = 472;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ANTLRv3Parser.T__16) {
				{
				{
				this.state = 468;
				this.match(ANTLRv3Parser.T__16);
				this.state = 469;
				this.rewrite_template_arg();
				}
				}
				this.state = 474;
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
	public rewrite_template_arg(): Rewrite_template_argContext {
		let _localctx: Rewrite_template_argContext = new Rewrite_template_argContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, ANTLRv3Parser.RULE_rewrite_template_arg);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 475;
			this.id();
			this.state = 476;
			this.match(ANTLRv3Parser.T__6);
			this.state = 477;
			this.match(ANTLRv3Parser.ACTION);
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
		this.enterRule(_localctx, 84, ANTLRv3Parser.RULE_id);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 479;
			_la = this._input.LA(1);
			if (!(_la === ANTLRv3Parser.TOKEN_REF || _la === ANTLRv3Parser.RULE_REF)) {
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03R\u01E4\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x03\x02\x05\x02Z\n\x02\x03\x02\x05\x02]\n\x02\x03\x02\x03\x02" +
		"\x03\x02\x03\x02\x05\x02c\n\x02\x03\x02\x05\x02f\n\x02\x03\x02\x07\x02" +
		"i\n\x02\f\x02\x0E\x02l\v\x02\x03\x02\x07\x02o\n\x02\f\x02\x0E\x02r\v\x02" +
		"\x03\x02\x06\x02u\n\x02\r\x02\x0E\x02v\x03\x03\x03\x03\x06\x03{\n\x03" +
		"\r\x03\x0E\x03|\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04" +
		"\x85\n\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x05\x06\x91\n\x06\x03\x06\x03\x06\x03\x06\x03\x07" +
		"\x03\x07\x03\x07\x05\x07\x99\n\x07\x03\b\x03\b\x03\b\x03\b\x06\b\x9F\n" +
		"\b\r\b\x0E\b\xA0\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n" +
		"\x03\n\x03\n\x05\n\xAE\n\n\x03\v\x05\v\xB1\n\v\x03\v\x05\v\xB4\n\v\x03" +
		"\v\x03\v\x05\v\xB8\n\v\x03\v\x05\v\xBB\n\v\x03\v\x03\v\x05\v\xBF\n\v\x03" +
		"\v\x05\v\xC2\n\v\x03\v\x05\v\xC5\n\v\x03\v\x05\v\xC8\n\v\x03\v\x07\v\xCB" +
		"\n\v\f\v\x0E\v\xCE\v\v\x03\v\x03\v\x05\v\xD2\n\v\x03\v\x03\v\x05\v\xD6" +
		"\n\v\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x07\r\xE0\n\r\f\r" +
		"\x0E\r\xE3\v\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x07\x0E" +
		"\xEB\n\x0E\f\x0E\x0E\x0E\xEE\v\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x07\x0E\xF8\n\x0E\f\x0E\x0E\x0E\xFB\v\x0E" +
		"\x03\x0E\x03\x0E\x05\x0E\xFF\n\x0E\x03\x0F\x03\x0F\x05\x0F\u0103\n\x0F" +
		"\x03\x0F\x05\x0F\u0106\n\x0F\x03\x0F\x05\x0F\u0109\n\x0F\x03\x0F\x05\x0F" +
		"\u010C\n\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u0111\n\x0F\x05\x0F\u0113" +
		"\n\x0F\x07\x0F\u0115\n\x0F\f\x0F\x0E\x0F\u0118\v\x0F\x03\x0F\x03\x0F\x03" +
		"\x10\x03\x10\x05\x10\u011E\n\x10\x03\x10\x03\x10\x03\x10\x05\x10\u0123" +
		"\n\x10\x05\x10\u0125\n\x10\x07\x10\u0127\n\x10\f\x10\x0E\x10\u012A\v\x10" +
		"\x03\x11\x06\x11\u012D\n\x11\r\x11\x0E\x11\u012E\x03\x12\x06\x12\u0132" +
		"\n\x12\r\x12\x0E\x12\u0133\x03\x12\x05\x12\u0137\n\x12\x03\x12\x05\x12" +
		"\u013A\n\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03" +
		"\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16\x05\x16\u0149\n\x16\x03\x16" +
		"\x03\x16\x03\x16\x03\x16\x05\x16\u014F\n\x16\x03\x16\x03\x16\x05\x16\u0153" +
		"\n\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x05\x16" +
		"\u015C\n\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x05\x17\u0163\n\x17" +
		"\x05\x17\u0165\n\x17\x03\x18\x03\x18\x03\x18\x05\x18\u016A\n\x18\x03\x19" +
		"\x03\x19\x03\x19\x06\x19\u016F\n\x19\r\x19\x0E\x19\u0170\x03\x19\x03\x19" +
		"\x03\x1A\x03\x1A\x05\x1A\u0177\n\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03" +
		"\x1C\x03\x1C\x03\x1C\x05\x1C\u0180\n\x1C\x03\x1C\x03\x1C\x05\x1C\u0184" +
		"\n\x1C\x03\x1C\x05\x1C\u0187\n\x1C\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03" +
		"\x1F\x03\x1F\x03\x1F\x07\x1F\u0190\n\x1F\f\x1F\x0E\x1F\u0193\v\x1F\x03" +
		"\x1F\x03\x1F\x03\x1F\x03 \x03 \x05 \u019A\n \x03!\x03!\x03!\x03!\x03\"" +
		"\x06\"\u01A1\n\"\r\"\x0E\"\u01A2\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03" +
		"#\x05#\u01AD\n#\x03$\x03$\x03$\x05$\u01B2\n$\x03$\x03$\x03$\x03$\x03$" +
		"\x05$\u01B9\n$\x03%\x03%\x03%\x03&\x03&\x03&\x07&\u01C1\n&\f&\x0E&\u01C4" +
		"\v&\x03&\x03&\x03\'\x03\'\x03(\x03(\x03(\x03(\x03(\x03)\x03)\x03)\x03" +
		")\x03)\x03)\x03)\x03*\x03*\x03*\x07*\u01D9\n*\f*\x0E*\u01DC\v*\x03+\x03" +
		"+\x03+\x03+\x03,\x03,\x03,\x02\x02\x02-\x02\x02\x04\x02\x06\x02\b\x02" +
		"\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C" +
		"\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026" +
		"\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02" +
		"R\x02T\x02V\x02\x02\v\x03\x02\x03\x05\x03\x02 !\x04\x02\r\x0FHH\x04\x02" +
		"\t\t\x19\x19\x05\x02\f\f\x1A\x1A\x1C\x1D\x03\x02JK\x04\x02 !QQ\x04\x02" +
		"\f\f\x1C\x1D\x03\x02QR\x02\u020B\x02Y\x03\x02\x02\x02\x04x\x03\x02\x02" +
		"\x02\x06\x80\x03\x02\x02\x02\b\x88\x03\x02\x02\x02\n\x8C\x03\x02\x02\x02" +
		"\f\x98\x03\x02\x02\x02\x0E\x9A\x03\x02\x02\x02\x10\xA4\x03\x02\x02\x02" +
		"\x12\xAD\x03\x02\x02\x02\x14\xB0\x03\x02\x02\x02\x16\xD7\x03\x02\x02\x02" +
		"\x18\xDB\x03\x02\x02\x02\x1A\xFE\x03\x02\x02\x02\x1C\u0100\x03\x02\x02" +
		"\x02\x1E\u011B\x03\x02\x02\x02 \u012C\x03\x02\x02\x02\"\u0139\x03\x02" +
		"\x02\x02$\u013B\x03\x02\x02\x02&\u013F\x03\x02\x02\x02(\u0142\x03\x02" +
		"\x02\x02*\u015B\x03\x02\x02\x02,\u0164\x03\x02\x02\x02.\u0166\x03\x02" +
		"\x02\x020\u016B\x03\x02\x02\x022\u0174\x03\x02\x02\x024\u0178\x03\x02" +
		"\x02\x026\u0183\x03\x02\x02\x028\u0188\x03\x02\x02\x02:\u018A\x03\x02" +
		"\x02\x02<\u0191\x03\x02\x02\x02>\u0199\x03\x02\x02\x02@\u019B\x03\x02" +
		"\x02\x02B\u01A0\x03\x02\x02\x02D\u01AC\x03\x02\x02\x02F\u01B8\x03\x02" +
		"\x02\x02H\u01BA\x03\x02\x02\x02J\u01BD\x03\x02\x02\x02L\u01C7\x03\x02" +
		"\x02\x02N\u01C9\x03\x02\x02\x02P\u01CE\x03\x02\x02\x02R\u01D5\x03\x02" +
		"\x02\x02T\u01DD\x03\x02\x02\x02V\u01E1\x03\x02\x02\x02XZ\x07)\x02\x02" +
		"YX\x03\x02\x02\x02YZ\x03\x02\x02\x02Z\\\x03\x02\x02\x02[]\t\x02\x02\x02" +
		"\\[\x03\x02\x02\x02\\]\x03\x02\x02\x02]^\x03\x02\x02\x02^_\x07\x06\x02" +
		"\x02_`\x05V,\x02`b\x07\x07\x02\x02ac\x05\x0E\b\x02ba\x03\x02\x02\x02b" +
		"c\x03\x02\x02\x02ce\x03\x02\x02\x02df\x05\x04\x03\x02ed\x03\x02\x02\x02" +
		"ef\x03\x02\x02\x02fj\x03\x02\x02\x02gi\x05\b\x05\x02hg\x03\x02\x02\x02" +
		"il\x03\x02\x02\x02jh\x03\x02\x02\x02jk\x03\x02\x02\x02kp\x03\x02\x02\x02" +
		"lj\x03\x02\x02\x02mo\x05\n\x06\x02nm\x03\x02\x02\x02or\x03\x02\x02\x02" +
		"pn\x03\x02\x02\x02pq\x03\x02\x02\x02qt\x03\x02\x02\x02rp\x03\x02\x02\x02" +
		"su\x05\x14\v\x02ts\x03\x02\x02\x02uv\x03\x02\x02\x02vt\x03\x02\x02\x02" +
		"vw\x03\x02\x02\x02w\x03\x03\x02\x02\x02xz\x07(\x02\x02y{\x05\x06\x04\x02" +
		"zy\x03\x02\x02\x02{|\x03\x02\x02\x02|z\x03\x02\x02\x02|}\x03\x02\x02\x02" +
		"}~\x03\x02\x02\x02~\x7F\x07\b\x02\x02\x7F\x05\x03\x02\x02\x02\x80\x84" +
		"\x07Q\x02\x02\x81\x82\x07\t\x02\x02\x82\x85\t\x03\x02\x02\x83\x85\x03" +
		"\x02\x02\x02\x84\x81\x03\x02\x02\x02\x84\x83\x03\x02\x02\x02\x85\x86\x03" +
		"\x02\x02\x02\x86\x87\x07\x07\x02\x02\x87\x07\x03\x02\x02\x02\x88\x89\x07" +
		"C\x02\x02\x89\x8A\x05V,\x02\x8A\x8B\x07&\x02\x02\x8B\t\x03\x02\x02\x02" +
		"\x8C\x90\x07\n\x02\x02\x8D\x8E\x05\f\x07\x02\x8E\x8F\x07\v\x02\x02\x8F" +
		"\x91\x03\x02\x02\x02\x90\x8D\x03\x02\x02\x02\x90\x91\x03\x02\x02\x02\x91" +
		"\x92\x03\x02\x02\x02\x92\x93\x05V,\x02\x93\x94\x07&\x02\x02\x94\v\x03" +
		"\x02\x02\x02\x95\x99\x05V,\x02\x96\x99\x07\x03\x02\x02\x97\x99\x07\x04" +
		"\x02\x02\x98\x95\x03\x02\x02\x02\x98\x96\x03\x02\x02\x02\x98\x97\x03\x02" +
		"\x02\x02\x99\r\x03\x02\x02\x02\x9A\x9E\x07\'\x02\x02\x9B\x9C\x05\x10\t" +
		"\x02\x9C\x9D\x07\x07\x02\x02\x9D\x9F\x03\x02\x02\x02\x9E\x9B\x03\x02\x02" +
		"\x02\x9F\xA0\x03\x02\x02\x02\xA0\x9E\x03\x02\x02\x02\xA0\xA1\x03\x02\x02" +
		"\x02\xA1\xA2\x03\x02\x02\x02\xA2\xA3\x07\b\x02\x02\xA3\x0F\x03\x02\x02" +
		"\x02\xA4\xA5\x05V,\x02\xA5\xA6\x07\t\x02\x02\xA6\xA7\x05\x12\n\x02\xA7" +
		"\x11\x03\x02\x02\x02\xA8\xAE\x05V,\x02\xA9\xAE\x07!\x02\x02\xAA\xAE\x07" +
		" \x02\x02\xAB\xAE\x07$\x02\x02\xAC\xAE\x07\f\x02\x02\xAD\xA8\x03\x02\x02" +
		"\x02\xAD\xA9\x03\x02\x02\x02\xAD\xAA\x03\x02\x02\x02\xAD\xAB\x03\x02\x02" +
		"\x02\xAD\xAC\x03\x02\x02\x02\xAE\x13\x03\x02\x02\x02\xAF\xB1\x07)\x02" +
		"\x02\xB0\xAF\x03\x02\x02\x02\xB0\xB1\x03\x02\x02\x02\xB1\xB3\x03\x02\x02" +
		"\x02\xB2\xB4\t\x04\x02\x02\xB3\xB2\x03\x02\x02\x02\xB3\xB4\x03\x02\x02" +
		"\x02\xB4\xB5\x03\x02\x02\x02\xB5\xB7\x05V,\x02\xB6\xB8\x07K\x02\x02\xB7" +
		"\xB6\x03\x02\x02\x02\xB7\xB8\x03\x02\x02\x02\xB8\xBA\x03\x02\x02\x02\xB9" +
		"\xBB\x07%\x02\x02\xBA\xB9\x03\x02\x02\x02\xBA\xBB\x03\x02\x02\x02\xBB" +
		"\xBE\x03\x02\x02\x02\xBC\xBD\x07\x10\x02\x02\xBD\xBF\x07%\x02\x02\xBE" +
		"\xBC\x03\x02\x02\x02\xBE\xBF\x03\x02\x02\x02\xBF\xC1\x03\x02\x02\x02\xC0" +
		"\xC2\x05\x18\r\x02\xC1\xC0\x03\x02\x02\x02\xC1\xC2\x03\x02\x02\x02\xC2" +
		"\xC4\x03\x02\x02\x02\xC3\xC5\x05\x0E\b\x02\xC4\xC3\x03\x02\x02\x02\xC4" +
		"\xC5\x03\x02\x02\x02\xC5\xC7\x03\x02\x02\x02\xC6\xC8\x05\x1A\x0E\x02\xC7" +
		"\xC6\x03\x02\x02\x02\xC7\xC8\x03\x02\x02\x02\xC8\xCC\x03\x02\x02\x02\xC9" +
		"\xCB\x05\x16\f\x02\xCA\xC9\x03\x02\x02\x02\xCB\xCE\x03\x02\x02\x02\xCC" +
		"\xCA\x03\x02\x02\x02\xCC\xCD\x03\x02\x02\x02\xCD\xCF\x03\x02\x02\x02\xCE" +
		"\xCC\x03\x02\x02\x02\xCF\xD1\x07\x11\x02\x02\xD0\xD2\x05\x1E\x10\x02\xD1" +
		"\xD0\x03\x02\x02\x02\xD1\xD2\x03\x02\x02\x02\xD2\xD3\x03\x02\x02\x02\xD3" +
		"\xD5\x07\x07\x02\x02\xD4\xD6\x05\"\x12\x02\xD5\xD4\x03\x02\x02\x02\xD5" +
		"\xD6\x03\x02\x02\x02\xD6\x15\x03\x02\x02\x02\xD7\xD8\x07\n\x02\x02\xD8" +
		"\xD9\x05V,\x02\xD9\xDA\x07&\x02\x02\xDA\x17\x03\x02\x02\x02\xDB\xDC\x07" +
		"\x12\x02\x02\xDC\xE1\x05V,\x02\xDD\xDE\x07\x13\x02\x02\xDE\xE0\x05V,\x02" +
		"\xDF\xDD\x03\x02\x02\x02\xE0\xE3\x03\x02\x02\x02\xE1\xDF\x03\x02\x02\x02" +
		"\xE1\xE2\x03\x02\x02\x02\xE2\x19\x03\x02\x02\x02\xE3\xE1\x03\x02\x02\x02" +
		"\xE4\xE5\x07C\x02\x02\xE5\xFF\x07&\x02\x02\xE6\xE7\x07C\x02\x02\xE7\xEC" +
		"\x05V,\x02\xE8\xE9\x07\x13\x02\x02\xE9\xEB\x05V,\x02\xEA\xE8\x03\x02\x02" +
		"\x02\xEB\xEE\x03\x02\x02\x02\xEC\xEA\x03\x02\x02\x02\xEC\xED\x03\x02\x02" +
		"\x02\xED\xEF\x03\x02\x02\x02\xEE\xEC\x03\x02\x02\x02\xEF\xF0\x07\x07\x02" +
		"\x02\xF0\xFF\x03\x02\x02\x02\xF1\xF2\x07C\x02\x02\xF2\xF3\x07&\x02\x02" +
		"\xF3\xF4\x07C\x02\x02\xF4\xF9\x05V,\x02\xF5\xF6\x07\x13\x02\x02\xF6\xF8" +
		"\x05V,\x02\xF7\xF5\x03\x02\x02\x02\xF8\xFB\x03\x02\x02\x02\xF9\xF7\x03" +
		"\x02\x02\x02\xF9\xFA\x03\x02\x02\x02\xFA\xFC\x03\x02\x02\x02\xFB\xF9\x03" +
		"\x02\x02\x02\xFC\xFD\x07\x07\x02\x02\xFD\xFF\x03\x02\x02\x02\xFE\xE4\x03" +
		"\x02\x02\x02\xFE\xE6\x03\x02\x02\x02\xFE\xF1\x03\x02\x02\x02\xFF\x1B\x03" +
		"\x02\x02\x02\u0100\u0105\x07\x14\x02\x02\u0101\u0103\x05\x0E\b\x02\u0102" +
		"\u0101\x03\x02\x02\x02\u0102\u0103\x03\x02\x02\x02\u0103\u0104\x03\x02" +
		"\x02\x02\u0104\u0106\x07\x11\x02\x02\u0105\u0102\x03\x02\x02\x02\u0105" +
		"\u0106\x03\x02\x02\x02\u0106\u0108\x03\x02\x02\x02\u0107\u0109\x05 \x11" +
		"\x02\u0108\u0107\x03\x02\x02\x02\u0108\u0109\x03\x02\x02\x02\u0109\u010B" +
		"\x03\x02\x02\x02\u010A\u010C\x05<\x1F\x02\u010B\u010A\x03\x02\x02\x02" +
		"\u010B\u010C\x03\x02\x02\x02\u010C\u0116\x03\x02\x02\x02\u010D\u0112\x07" +
		"\x15\x02\x02\u010E\u0110\x05 \x11\x02\u010F\u0111\x05<\x1F\x02\u0110\u010F" +
		"\x03\x02\x02\x02\u0110\u0111\x03\x02\x02\x02\u0111\u0113\x03\x02\x02\x02" +
		"\u0112\u010E\x03\x02\x02\x02\u0112\u0113\x03\x02\x02\x02\u0113\u0115\x03" +
		"\x02\x02\x02\u0114\u010D\x03\x02\x02\x02\u0115\u0118\x03\x02\x02\x02\u0116" +
		"\u0114\x03\x02\x02\x02\u0116\u0117\x03\x02\x02\x02\u0117\u0119\x03\x02" +
		"\x02\x02\u0118\u0116\x03\x02\x02\x02\u0119\u011A\x07\x16\x02\x02\u011A" +
		"\x1D\x03\x02\x02\x02\u011B\u011D\x05 \x11\x02\u011C\u011E\x05<\x1F\x02" +
		"\u011D\u011C\x03\x02\x02\x02\u011D\u011E\x03\x02\x02\x02\u011E\u0128\x03" +
		"\x02\x02\x02\u011F\u0124\x07\x15\x02\x02\u0120\u0122\x05 \x11\x02\u0121" +
		"\u0123\x05<\x1F\x02\u0122\u0121\x03\x02\x02\x02\u0122\u0123\x03\x02\x02" +
		"\x02\u0123\u0125\x03\x02\x02\x02\u0124\u0120\x03\x02\x02\x02\u0124\u0125" +
		"\x03\x02\x02\x02\u0125\u0127\x03\x02\x02\x02\u0126\u011F\x03\x02\x02\x02" +
		"\u0127\u012A\x03\x02\x02\x02\u0128\u0126\x03\x02\x02\x02\u0128\u0129\x03" +
		"\x02\x02\x02\u0129\x1F\x03\x02\x02\x02\u012A\u0128\x03\x02\x02\x02\u012B" +
		"\u012D\x05(\x15\x02\u012C\u012B\x03\x02\x02\x02\u012D\u012E\x03\x02\x02" +
		"\x02\u012E\u012C\x03\x02\x02\x02\u012E\u012F\x03\x02\x02\x02\u012F!\x03" +
		"\x02\x02\x02\u0130\u0132\x05$\x13\x02\u0131\u0130\x03\x02\x02\x02\u0132" +
		"\u0133\x03\x02\x02\x02\u0133\u0131\x03\x02\x02\x02\u0133\u0134\x03\x02" +
		"\x02\x02\u0134\u0136\x03\x02\x02\x02\u0135\u0137\x05&\x14\x02\u0136\u0135" +
		"\x03\x02\x02\x02\u0136\u0137\x03\x02\x02\x02\u0137\u013A\x03\x02\x02\x02" +
		"\u0138\u013A\x05&\x14\x02\u0139\u0131\x03\x02\x02\x02\u0139\u0138\x03" +
		"\x02\x02\x02\u013A#\x03\x02\x02\x02\u013B\u013C\x07\x17\x02\x02\u013C" +
		"\u013D\x07%\x02\x02\u013D\u013E\x07&\x02\x02\u013E%\x03\x02\x02\x02\u013F" +
		"\u0140\x07\x18\x02\x02\u0140\u0141\x07&\x02\x02\u0141\'\x03\x02\x02\x02" +
		"\u0142\u0143\x05*\x16\x02\u0143)\x03\x02\x02\x02\u0144\u0145\x05V,\x02" +
		"\u0145\u0146\t\x05\x02\x02\u0146\u0148\x05,\x17\x02\u0147\u0149\x05:\x1E" +
		"\x02\u0148\u0147\x03\x02\x02\x02\u0148\u0149\x03\x02\x02\x02\u0149\u015C" +
		"\x03\x02\x02\x02\u014A\u014B\x05V,\x02\u014B\u014C\t\x05\x02\x02\u014C" +
		"\u014E\x05\x1C\x0F\x02\u014D\u014F\x05:\x1E\x02\u014E\u014D\x03\x02\x02" +
		"\x02\u014E\u014F\x03\x02\x02\x02\u014F\u015C\x03\x02\x02\x02\u0150\u0152" +
		"\x05,\x17\x02\u0151\u0153\x05:\x1E\x02\u0152\u0151\x03\x02\x02\x02\u0152" +
		"\u0153\x03\x02\x02\x02\u0153\u015C\x03\x02\x02\x02\u0154\u015C\x052\x1A" +
		"\x02\u0155\u015C\x07&\x02\x02\u0156\u0157\x07D\x02\x02\u0157\u015C\x07" +
		"\x1A\x02\x02\u0158\u0159\x050\x19\x02\u0159\u015A\x05:\x1E\x02\u015A\u015C" +
		"\x03\x02\x02\x02\u015B\u0144\x03\x02\x02\x02\u015B\u014A\x03\x02\x02\x02" +
		"\u015B\u0150\x03\x02\x02\x02\u015B\u0154\x03\x02\x02\x02\u015B\u0155\x03" +
		"\x02\x02\x02\u015B\u0156\x03\x02\x02\x02\u015B\u0158\x03\x02\x02\x02\u015C" +
		"+\x03\x02\x02\x02\u015D\u0165\x054\x1B\x02\u015E\u0165\x056\x1C\x02\u015F" +
		"\u0165\x05.\x18\x02\u0160\u0162\x07R\x02\x02\u0161\u0163\x07%\x02\x02" +
		"\u0162\u0161\x03\x02\x02\x02\u0162\u0163\x03\x02\x02\x02\u0163\u0165\x03" +
		"\x02\x02\x02\u0164\u015D\x03\x02\x02\x02\u0164\u015E\x03\x02\x02\x02\u0164" +
		"\u015F\x03\x02\x02\x02\u0164\u0160\x03\x02\x02\x02\u0165-\x03\x02\x02" +
		"\x02\u0166\u0169\x07\x1B\x02\x02\u0167\u016A\x058\x1D\x02\u0168\u016A" +
		"\x05\x1C\x0F\x02\u0169\u0167\x03\x02\x02\x02\u0169\u0168\x03\x02\x02\x02" +
		"\u016A/\x03\x02\x02\x02\u016B\u016C\x07I\x02\x02\u016C\u016E\x05(\x15" +
		"\x02\u016D\u016F\x05(\x15\x02\u016E\u016D\x03\x02\x02\x02\u016F\u0170" +
		"\x03\x02\x02\x02\u0170\u016E\x03\x02\x02\x02\u0170\u0171\x03\x02\x02\x02" +
		"\u0171\u0172\x03\x02\x02\x02\u0172\u0173\x07\x16\x02\x02\u01731\x03\x02" +
		"\x02\x02\u0174\u0176\x05\x1C\x0F\x02\u0175\u0177\t\x06\x02\x02\u0176\u0175" +
		"\x03\x02\x02\x02\u0176\u0177\x03\x02\x02\x02\u01773\x03\x02\x02\x02\u0178" +
		"\u0179\x07 \x02\x02\u0179\u017A\x07L\x02\x02\u017A\u017B\x07 \x02\x02" +
		"\u017B5\x03\x02\x02\x02\u017C\u0184\x07 \x02\x02\u017D\u017F\x07Q\x02" +
		"\x02\u017E\u0180\x07%\x02\x02\u017F\u017E\x03\x02\x02\x02\u017F\u0180" +
		"\x03\x02\x02\x02\u0180\u0184\x03\x02\x02\x02\u0181\u0184\x07!\x02\x02" +
		"\u0182\u0184\x07\x1E\x02\x02\u0183\u017C\x03\x02\x02\x02\u0183\u017D\x03" +
		"\x02\x02\x02\u0183\u0181\x03\x02\x02\x02\u0183\u0182\x03\x02\x02\x02\u0184" +
		"\u0186\x03\x02\x02\x02\u0185\u0187\t\x07\x02\x02\u0186\u0185\x03\x02\x02" +
		"\x02\u0186\u0187\x03\x02\x02\x02\u01877\x03\x02\x02\x02\u0188\u0189\t" +
		"\b\x02\x02\u01899\x03\x02\x02\x02\u018A\u018B\t\t\x02\x02\u018B;\x03\x02" +
		"\x02\x02\u018C\u018D\x07M\x02\x02\u018D\u018E\x07D\x02\x02\u018E\u0190" +
		"\x05> \x02\u018F\u018C\x03\x02\x02\x02\u0190\u0193\x03\x02\x02\x02\u0191" +
		"\u018F\x03\x02\x02\x02\u0191\u0192\x03\x02\x02\x02\u0192\u0194\x03\x02" +
		"\x02\x02\u0193\u0191\x03\x02\x02\x02\u0194\u0195\x07M\x02\x02\u0195\u0196" +
		"\x05> \x02\u0196=\x03\x02\x02\x02\u0197\u019A\x05L\'\x02\u0198\u019A\x05" +
		"B\"\x02\u0199\u0197\x03\x02\x02\x02\u0199\u0198\x03\x02\x02\x02\u019A" +
		"?\x03\x02\x02\x02\u019B\u019C\x07\x14\x02\x02\u019C\u019D\x05B\"\x02\u019D" +
		"\u019E\x07\x16\x02\x02\u019EA\x03\x02\x02\x02\u019F\u01A1\x05D#\x02\u01A0" +
		"\u019F\x03\x02\x02\x02\u01A1\u01A2\x03\x02\x02\x02\u01A2\u01A0\x03\x02" +
		"\x02\x02\u01A2\u01A3\x03\x02\x02\x02\u01A3C\x03\x02\x02\x02\u01A4\u01AD" +
		"\x05F$\x02\u01A5\u01A6\x05F$\x02\u01A6\u01A7\x05:\x1E\x02\u01A7\u01AD" +
		"\x03\x02\x02\x02\u01A8\u01A9\x05J&\x02\u01A9\u01AA\x05:\x1E\x02\u01AA" +
		"\u01AD\x03\x02\x02\x02\u01AB\u01AD\x05H%\x02\u01AC\u01A4\x03\x02\x02\x02" +
		"\u01AC\u01A5\x03\x02\x02\x02\u01AC\u01A8\x03\x02\x02\x02\u01AC\u01AB\x03" +
		"\x02\x02\x02\u01ADE\x03\x02\x02\x02\u01AE\u01B9\x07 \x02\x02\u01AF\u01B1" +
		"\x07Q\x02\x02\u01B0\u01B2\x07%\x02\x02\u01B1\u01B0\x03\x02\x02\x02\u01B1" +
		"\u01B2\x03\x02\x02\x02\u01B2\u01B9\x03\x02\x02\x02\u01B3\u01B9\x07R\x02" +
		"\x02\u01B4\u01B9\x07!\x02\x02\u01B5\u01B6\x07\x1F\x02\x02\u01B6\u01B9" +
		"\x05V,\x02\u01B7\u01B9\x07&\x02\x02\u01B8\u01AE\x03\x02\x02\x02\u01B8" +
		"\u01AF\x03\x02\x02\x02\u01B8\u01B3\x03\x02\x02\x02\u01B8\u01B4\x03\x02" +
		"\x02\x02\u01B8\u01B5\x03\x02\x02\x02\u01B8\u01B7\x03\x02\x02\x02\u01B9" +
		"G\x03\x02\x02\x02\u01BA\u01BB\x05@!\x02\u01BB\u01BC\x05:\x1E\x02\u01BC" +
		"I\x03\x02\x02\x02\u01BD\u01BE\x07I\x02\x02\u01BE\u01C2\x05F$\x02\u01BF" +
		"\u01C1\x05D#\x02\u01C0\u01BF\x03\x02\x02\x02\u01C1\u01C4\x03\x02\x02\x02" +
		"\u01C2\u01C0\x03\x02\x02\x02\u01C2\u01C3\x03\x02\x02\x02\u01C3\u01C5\x03" +
		"\x02\x02\x02\u01C4\u01C2\x03\x02\x02\x02\u01C5\u01C6\x07\x16\x02\x02\u01C6" +
		"K\x03\x02\x02\x02\u01C7\u01C8\x03\x02\x02\x02\u01C8M\x03\x02\x02\x02\u01C9" +
		"\u01CA\x05V,\x02\u01CA\u01CB\x07\x14\x02\x02\u01CB\u01CC\x05R*\x02\u01CC" +
		"\u01CD\x07\x16\x02\x02\u01CDO\x03\x02\x02\x02\u01CE\u01CF\x07\x14\x02" +
		"\x02\u01CF\u01D0\x07&\x02\x02\u01D0\u01D1\x07\x16\x02\x02\u01D1\u01D2" +
		"\x07\x14\x02\x02\u01D2\u01D3\x05R*\x02\u01D3\u01D4\x07\x16\x02\x02\u01D4" +
		"Q\x03\x02\x02\x02\u01D5\u01DA\x05T+\x02\u01D6\u01D7\x07\x13\x02\x02\u01D7" +
		"\u01D9\x05T+\x02\u01D8\u01D6\x03\x02\x02\x02\u01D9\u01DC\x03\x02\x02\x02" +
		"\u01DA\u01D8\x03\x02\x02\x02\u01DA\u01DB\x03\x02\x02\x02\u01DBS\x03\x02" +
		"\x02\x02\u01DC\u01DA\x03\x02\x02\x02\u01DD\u01DE\x05V,\x02\u01DE\u01DF" +
		"\x07\t\x02\x02\u01DF\u01E0\x07&\x02\x02\u01E0U\x03\x02\x02\x02\u01E1\u01E2" +
		"\t\n\x02\x02\u01E2W\x03\x02\x02\x02AY\\bejpv|\x84\x90\x98\xA0\xAD\xB0" +
		"\xB3\xB7\xBA\xBE\xC1\xC4\xC7\xCC\xD1\xD5\xE1\xEC\xF9\xFE\u0102\u0105\u0108" +
		"\u010B\u0110\u0112\u0116\u011D\u0122\u0124\u0128\u012E\u0133\u0136\u0139" +
		"\u0148\u014E\u0152\u015B\u0162\u0164\u0169\u0170\u0176\u017F\u0183\u0186" +
		"\u0191\u0199\u01A2\u01AC\u01B1\u01B8\u01C2\u01DA";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ANTLRv3Parser.__ATN) {
			ANTLRv3Parser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(ANTLRv3Parser._serializedATN));
		}

		return ANTLRv3Parser.__ATN;
	}

}

export class GrammarDefContext extends ParserRuleContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public DOC_COMMENT(): TerminalNode | undefined { return this.tryGetToken(ANTLRv3Parser.DOC_COMMENT, 0); }
	public optionsSpec(): OptionsSpecContext | undefined {
		return this.tryGetRuleContext(0, OptionsSpecContext);
	}
	public tokensSpec(): TokensSpecContext | undefined {
		return this.tryGetRuleContext(0, TokensSpecContext);
	}
	public attrScope(): AttrScopeContext[];
	public attrScope(i: number): AttrScopeContext;
	public attrScope(i?: number): AttrScopeContext | AttrScopeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AttrScopeContext);
		} else {
			return this.getRuleContext(i, AttrScopeContext);
		}
	}
	public action(): ActionContext[];
	public action(i: number): ActionContext;
	public action(i?: number): ActionContext | ActionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ActionContext);
		} else {
			return this.getRuleContext(i, ActionContext);
		}
	}
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
	public get ruleIndex(): number { return ANTLRv3Parser.RULE_grammarDef; }
	// @Override
	public enterRule(listener: ANTLRv3Listener): void {
		if (listener.enterGrammarDef) {
			listener.enterGrammarDef(this);
		}
	}
	// @Override
	public exitRule(listener: ANTLRv3Listener): void {
		if (listener.exitGrammarDef) {
			listener.exitGrammarDef(this);
		}
	}
}


export class TokensSpecContext extends ParserRuleContext {
	public TOKENS(): TerminalNode { return this.getToken(ANTLRv3Parser.TOKENS, 0); }
	public tokenSpec(): TokenSpecContext[];
	public tokenSpec(i: number): TokenSpecContext;
	public tokenSpec(i?: number): TokenSpecContext | TokenSpecContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TokenSpecContext);
		} else {
			return this.getRuleContext(i, TokenSpecContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ANTLRv3Parser.RULE_tokensSpec; }
	// @Override
	public enterRule(listener: ANTLRv3Listener): void {
		if (listener.enterTokensSpec) {
			listener.enterTokensSpec(this);
		}
	}
	// @Override
	public exitRule(listener: ANTLRv3Listener): void {
		if (listener.exitTokensSpec) {
			listener.exitTokensSpec(this);
		}
	}
}


export class TokenSpecContext extends ParserRuleContext {
	public TOKEN_REF(): TerminalNode { return this.getToken(ANTLRv3Parser.TOKEN_REF, 0); }
	public STRING_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ANTLRv3Parser.STRING_LITERAL, 0); }
	public CHAR_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ANTLRv3Parser.CHAR_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ANTLRv3Parser.RULE_tokenSpec; }
	// @Override
	public enterRule(listener: ANTLRv3Listener): void {
		if (listener.enterTokenSpec) {
			listener.enterTokenSpec(this);
		}
	}
	// @Override
	public exitRule(listener: ANTLRv3Listener): void {
		if (listener.exitTokenSpec) {
			listener.exitTokenSpec(this);
		}
	}
}


export class AttrScopeContext extends ParserRuleContext {
	public SCOPE(): TerminalNode { return this.getToken(ANTLRv3Parser.SCOPE, 0); }
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public ACTION(): TerminalNode { return this.getToken(ANTLRv3Parser.ACTION, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ANTLRv3Parser.RULE_attrScope; }
	// @Override
	public enterRule(listener: ANTLRv3Listener): void {
		if (listener.enterAttrScope) {
			listener.enterAttrScope(this);
		}
	}
	// @Override
	public exitRule(listener: ANTLRv3Listener): void {
		if (listener.exitAttrScope) {
			listener.exitAttrScope(this);
		}
	}
}


export class ActionContext extends ParserRuleContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public ACTION(): TerminalNode { return this.getToken(ANTLRv3Parser.ACTION, 0); }
	public actionScopeName(): ActionScopeNameContext | undefined {
		return this.tryGetRuleContext(0, ActionScopeNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ANTLRv3Parser.RULE_action; }
	// @Override
	public enterRule(listener: ANTLRv3Listener): void {
		if (listener.enterAction) {
			listener.enterAction(this);
		}
	}
	// @Override
	public exitRule(listener: ANTLRv3Listener): void {
		if (listener.exitAction) {
			listener.exitAction(this);
		}
	}
}


export class ActionScopeNameContext extends ParserRuleContext {
	public id(): IdContext | undefined {
		return this.tryGetRuleContext(0, IdContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ANTLRv3Parser.RULE_actionScopeName; }
	// @Override
	public enterRule(listener: ANTLRv3Listener): void {
		if (listener.enterActionScopeName) {
			listener.enterActionScopeName(this);
		}
	}
	// @Override
	public exitRule(listener: ANTLRv3Listener): void {
		if (listener.exitActionScopeName) {
			listener.exitActionScopeName(this);
		}
	}
}


export class OptionsSpecContext extends ParserRuleContext {
	public OPTIONS(): TerminalNode { return this.getToken(ANTLRv3Parser.OPTIONS, 0); }
	public option(): OptionContext[];
	public option(i: number): OptionContext;
	public option(i?: number): OptionContext | OptionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OptionContext);
		} else {
			return this.getRuleContext(i, OptionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ANTLRv3Parser.RULE_optionsSpec; }
	// @Override
	public enterRule(listener: ANTLRv3Listener): void {
		if (listener.enterOptionsSpec) {
			listener.enterOptionsSpec(this);
		}
	}
	// @Override
	public exitRule(listener: ANTLRv3Listener): void {
		if (listener.exitOptionsSpec) {
			listener.exitOptionsSpec(this);
		}
	}
}


export class OptionContext extends ParserRuleContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public optionValue(): OptionValueContext {
		return this.getRuleContext(0, OptionValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ANTLRv3Parser.RULE_option; }
	// @Override
	public enterRule(listener: ANTLRv3Listener): void {
		if (listener.enterOption) {
			listener.enterOption(this);
		}
	}
	// @Override
	public exitRule(listener: ANTLRv3Listener): void {
		if (listener.exitOption) {
			listener.exitOption(this);
		}
	}
}


export class OptionValueContext extends ParserRuleContext {
	public id(): IdContext | undefined {
		return this.tryGetRuleContext(0, IdContext);
	}
	public STRING_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ANTLRv3Parser.STRING_LITERAL, 0); }
	public CHAR_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ANTLRv3Parser.CHAR_LITERAL, 0); }
	public INT(): TerminalNode | undefined { return this.tryGetToken(ANTLRv3Parser.INT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ANTLRv3Parser.RULE_optionValue; }
	// @Override
	public enterRule(listener: ANTLRv3Listener): void {
		if (listener.enterOptionValue) {
			listener.enterOptionValue(this);
		}
	}
	// @Override
	public exitRule(listener: ANTLRv3Listener): void {
		if (listener.exitOptionValue) {
			listener.exitOptionValue(this);
		}
	}
}


export class Rule_Context extends ParserRuleContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public DOC_COMMENT(): TerminalNode | undefined { return this.tryGetToken(ANTLRv3Parser.DOC_COMMENT, 0); }
	public BANG(): TerminalNode | undefined { return this.tryGetToken(ANTLRv3Parser.BANG, 0); }
	public ARG_ACTION(): TerminalNode[];
	public ARG_ACTION(i: number): TerminalNode;
	public ARG_ACTION(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ANTLRv3Parser.ARG_ACTION);
		} else {
			return this.getToken(ANTLRv3Parser.ARG_ACTION, i);
		}
	}
	public throwsSpec(): ThrowsSpecContext | undefined {
		return this.tryGetRuleContext(0, ThrowsSpecContext);
	}
	public optionsSpec(): OptionsSpecContext | undefined {
		return this.tryGetRuleContext(0, OptionsSpecContext);
	}
	public ruleScopeSpec(): RuleScopeSpecContext | undefined {
		return this.tryGetRuleContext(0, RuleScopeSpecContext);
	}
	public ruleAction(): RuleActionContext[];
	public ruleAction(i: number): RuleActionContext;
	public ruleAction(i?: number): RuleActionContext | RuleActionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RuleActionContext);
		} else {
			return this.getRuleContext(i, RuleActionContext);
		}
	}
	public altList(): AltListContext | undefined {
		return this.tryGetRuleContext(0, AltListContext);
	}
	public exceptionGroup(): ExceptionGroupContext | undefined {
		return this.tryGetRuleContext(0, ExceptionGroupContext);
	}
	public FRAGMENT(): TerminalNode | undefined { return this.tryGetToken(ANTLRv3Parser.FRAGMENT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ANTLRv3Parser.RULE_rule_; }
	// @Override
	public enterRule(listener: ANTLRv3Listener): void {
		if (listener.enterRule_) {
			listener.enterRule_(this);
		}
	}
	// @Override
	public exitRule(listener: ANTLRv3Listener): void {
		if (listener.exitRule_) {
			listener.exitRule_(this);
		}
	}
}


export class RuleActionContext extends ParserRuleContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public ACTION(): TerminalNode { return this.getToken(ANTLRv3Parser.ACTION, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ANTLRv3Parser.RULE_ruleAction; }
	// @Override
	public enterRule(listener: ANTLRv3Listener): void {
		if (listener.enterRuleAction) {
			listener.enterRuleAction(this);
		}
	}
	// @Override
	public exitRule(listener: ANTLRv3Listener): void {
		if (listener.exitRuleAction) {
			listener.exitRuleAction(this);
		}
	}
}


export class ThrowsSpecContext extends ParserRuleContext {
	public id(): IdContext[];
	public id(i: number): IdContext;
	public id(i?: number): IdContext | IdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdContext);
		} else {
			return this.getRuleContext(i, IdContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ANTLRv3Parser.RULE_throwsSpec; }
	// @Override
	public enterRule(listener: ANTLRv3Listener): void {
		if (listener.enterThrowsSpec) {
			listener.enterThrowsSpec(this);
		}
	}
	// @Override
	public exitRule(listener: ANTLRv3Listener): void {
		if (listener.exitThrowsSpec) {
			listener.exitThrowsSpec(this);
		}
	}
}


export class RuleScopeSpecContext extends ParserRuleContext {
	public SCOPE(): TerminalNode[];
	public SCOPE(i: number): TerminalNode;
	public SCOPE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ANTLRv3Parser.SCOPE);
		} else {
			return this.getToken(ANTLRv3Parser.SCOPE, i);
		}
	}
	public ACTION(): TerminalNode | undefined { return this.tryGetToken(ANTLRv3Parser.ACTION, 0); }
	public id(): IdContext[];
	public id(i: number): IdContext;
	public id(i?: number): IdContext | IdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdContext);
		} else {
			return this.getRuleContext(i, IdContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ANTLRv3Parser.RULE_ruleScopeSpec; }
	// @Override
	public enterRule(listener: ANTLRv3Listener): void {
		if (listener.enterRuleScopeSpec) {
			listener.enterRuleScopeSpec(this);
		}
	}
	// @Override
	public exitRule(listener: ANTLRv3Listener): void {
		if (listener.exitRuleScopeSpec) {
			listener.exitRuleScopeSpec(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	public alternative(): AlternativeContext[];
	public alternative(i: number): AlternativeContext;
	public alternative(i?: number): AlternativeContext | AlternativeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AlternativeContext);
		} else {
			return this.getRuleContext(i, AlternativeContext);
		}
	}
	public rewrite(): RewriteContext[];
	public rewrite(i: number): RewriteContext;
	public rewrite(i?: number): RewriteContext | RewriteContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RewriteContext);
		} else {
			return this.getRuleContext(i, RewriteContext);
		}
	}
	public optionsSpec(): OptionsSpecContext | undefined {
		return this.tryGetRuleContext(0, OptionsSpecContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ANTLRv3Parser.RULE_block; }
	// @Override
	public enterRule(listener: ANTLRv3Listener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	// @Override
	public exitRule(listener: ANTLRv3Listener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
}


export class AltListContext extends ParserRuleContext {
	public alternative(): AlternativeContext[];
	public alternative(i: number): AlternativeContext;
	public alternative(i?: number): AlternativeContext | AlternativeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AlternativeContext);
		} else {
			return this.getRuleContext(i, AlternativeContext);
		}
	}
	public rewrite(): RewriteContext[];
	public rewrite(i: number): RewriteContext;
	public rewrite(i?: number): RewriteContext | RewriteContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RewriteContext);
		} else {
			return this.getRuleContext(i, RewriteContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ANTLRv3Parser.RULE_altList; }
	// @Override
	public enterRule(listener: ANTLRv3Listener): void {
		if (listener.enterAltList) {
			listener.enterAltList(this);
		}
	}
	// @Override
	public exitRule(listener: ANTLRv3Listener): void {
		if (listener.exitAltList) {
			listener.exitAltList(this);
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
	public get ruleIndex(): number { return ANTLRv3Parser.RULE_alternative; }
	// @Override
	public enterRule(listener: ANTLRv3Listener): void {
		if (listener.enterAlternative) {
			listener.enterAlternative(this);
		}
	}
	// @Override
	public exitRule(listener: ANTLRv3Listener): void {
		if (listener.exitAlternative) {
			listener.exitAlternative(this);
		}
	}
}


export class ExceptionGroupContext extends ParserRuleContext {
	public exceptionHandler(): ExceptionHandlerContext[];
	public exceptionHandler(i: number): ExceptionHandlerContext;
	public exceptionHandler(i?: number): ExceptionHandlerContext | ExceptionHandlerContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExceptionHandlerContext);
		} else {
			return this.getRuleContext(i, ExceptionHandlerContext);
		}
	}
	public finallyClause(): FinallyClauseContext | undefined {
		return this.tryGetRuleContext(0, FinallyClauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ANTLRv3Parser.RULE_exceptionGroup; }
	// @Override
	public enterRule(listener: ANTLRv3Listener): void {
		if (listener.enterExceptionGroup) {
			listener.enterExceptionGroup(this);
		}
	}
	// @Override
	public exitRule(listener: ANTLRv3Listener): void {
		if (listener.exitExceptionGroup) {
			listener.exitExceptionGroup(this);
		}
	}
}


export class ExceptionHandlerContext extends ParserRuleContext {
	public ARG_ACTION(): TerminalNode { return this.getToken(ANTLRv3Parser.ARG_ACTION, 0); }
	public ACTION(): TerminalNode { return this.getToken(ANTLRv3Parser.ACTION, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ANTLRv3Parser.RULE_exceptionHandler; }
	// @Override
	public enterRule(listener: ANTLRv3Listener): void {
		if (listener.enterExceptionHandler) {
			listener.enterExceptionHandler(this);
		}
	}
	// @Override
	public exitRule(listener: ANTLRv3Listener): void {
		if (listener.exitExceptionHandler) {
			listener.exitExceptionHandler(this);
		}
	}
}


export class FinallyClauseContext extends ParserRuleContext {
	public ACTION(): TerminalNode { return this.getToken(ANTLRv3Parser.ACTION, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ANTLRv3Parser.RULE_finallyClause; }
	// @Override
	public enterRule(listener: ANTLRv3Listener): void {
		if (listener.enterFinallyClause) {
			listener.enterFinallyClause(this);
		}
	}
	// @Override
	public exitRule(listener: ANTLRv3Listener): void {
		if (listener.exitFinallyClause) {
			listener.exitFinallyClause(this);
		}
	}
}


export class ElementContext extends ParserRuleContext {
	public elementNoOptionSpec(): ElementNoOptionSpecContext {
		return this.getRuleContext(0, ElementNoOptionSpecContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ANTLRv3Parser.RULE_element; }
	// @Override
	public enterRule(listener: ANTLRv3Listener): void {
		if (listener.enterElement) {
			listener.enterElement(this);
		}
	}
	// @Override
	public exitRule(listener: ANTLRv3Listener): void {
		if (listener.exitElement) {
			listener.exitElement(this);
		}
	}
}


export class ElementNoOptionSpecContext extends ParserRuleContext {
	public id(): IdContext | undefined {
		return this.tryGetRuleContext(0, IdContext);
	}
	public atom(): AtomContext | undefined {
		return this.tryGetRuleContext(0, AtomContext);
	}
	public ebnfSuffix(): EbnfSuffixContext | undefined {
		return this.tryGetRuleContext(0, EbnfSuffixContext);
	}
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public ebnf(): EbnfContext | undefined {
		return this.tryGetRuleContext(0, EbnfContext);
	}
	public ACTION(): TerminalNode | undefined { return this.tryGetToken(ANTLRv3Parser.ACTION, 0); }
	public SEMPRED(): TerminalNode | undefined { return this.tryGetToken(ANTLRv3Parser.SEMPRED, 0); }
	public treeSpec(): TreeSpecContext | undefined {
		return this.tryGetRuleContext(0, TreeSpecContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ANTLRv3Parser.RULE_elementNoOptionSpec; }
	// @Override
	public enterRule(listener: ANTLRv3Listener): void {
		if (listener.enterElementNoOptionSpec) {
			listener.enterElementNoOptionSpec(this);
		}
	}
	// @Override
	public exitRule(listener: ANTLRv3Listener): void {
		if (listener.exitElementNoOptionSpec) {
			listener.exitElementNoOptionSpec(this);
		}
	}
}


export class AtomContext extends ParserRuleContext {
	public range(): RangeContext | undefined {
		return this.tryGetRuleContext(0, RangeContext);
	}
	public terminal_(): Terminal_Context | undefined {
		return this.tryGetRuleContext(0, Terminal_Context);
	}
	public notSet(): NotSetContext | undefined {
		return this.tryGetRuleContext(0, NotSetContext);
	}
	public RULE_REF(): TerminalNode | undefined { return this.tryGetToken(ANTLRv3Parser.RULE_REF, 0); }
	public ARG_ACTION(): TerminalNode | undefined { return this.tryGetToken(ANTLRv3Parser.ARG_ACTION, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ANTLRv3Parser.RULE_atom; }
	// @Override
	public enterRule(listener: ANTLRv3Listener): void {
		if (listener.enterAtom) {
			listener.enterAtom(this);
		}
	}
	// @Override
	public exitRule(listener: ANTLRv3Listener): void {
		if (listener.exitAtom) {
			listener.exitAtom(this);
		}
	}
}


export class NotSetContext extends ParserRuleContext {
	public notTerminal(): NotTerminalContext | undefined {
		return this.tryGetRuleContext(0, NotTerminalContext);
	}
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ANTLRv3Parser.RULE_notSet; }
	// @Override
	public enterRule(listener: ANTLRv3Listener): void {
		if (listener.enterNotSet) {
			listener.enterNotSet(this);
		}
	}
	// @Override
	public exitRule(listener: ANTLRv3Listener): void {
		if (listener.exitNotSet) {
			listener.exitNotSet(this);
		}
	}
}


export class TreeSpecContext extends ParserRuleContext {
	public TREE_BEGIN(): TerminalNode { return this.getToken(ANTLRv3Parser.TREE_BEGIN, 0); }
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
	public get ruleIndex(): number { return ANTLRv3Parser.RULE_treeSpec; }
	// @Override
	public enterRule(listener: ANTLRv3Listener): void {
		if (listener.enterTreeSpec) {
			listener.enterTreeSpec(this);
		}
	}
	// @Override
	public exitRule(listener: ANTLRv3Listener): void {
		if (listener.exitTreeSpec) {
			listener.exitTreeSpec(this);
		}
	}
}


export class EbnfContext extends ParserRuleContext {
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ANTLRv3Parser.RULE_ebnf; }
	// @Override
	public enterRule(listener: ANTLRv3Listener): void {
		if (listener.enterEbnf) {
			listener.enterEbnf(this);
		}
	}
	// @Override
	public exitRule(listener: ANTLRv3Listener): void {
		if (listener.exitEbnf) {
			listener.exitEbnf(this);
		}
	}
}


export class RangeContext extends ParserRuleContext {
	public CHAR_LITERAL(): TerminalNode[];
	public CHAR_LITERAL(i: number): TerminalNode;
	public CHAR_LITERAL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ANTLRv3Parser.CHAR_LITERAL);
		} else {
			return this.getToken(ANTLRv3Parser.CHAR_LITERAL, i);
		}
	}
	public RANGE(): TerminalNode { return this.getToken(ANTLRv3Parser.RANGE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ANTLRv3Parser.RULE_range; }
	// @Override
	public enterRule(listener: ANTLRv3Listener): void {
		if (listener.enterRange) {
			listener.enterRange(this);
		}
	}
	// @Override
	public exitRule(listener: ANTLRv3Listener): void {
		if (listener.exitRange) {
			listener.exitRange(this);
		}
	}
}


export class Terminal_Context extends ParserRuleContext {
	public CHAR_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ANTLRv3Parser.CHAR_LITERAL, 0); }
	public TOKEN_REF(): TerminalNode | undefined { return this.tryGetToken(ANTLRv3Parser.TOKEN_REF, 0); }
	public STRING_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ANTLRv3Parser.STRING_LITERAL, 0); }
	public ROOT(): TerminalNode | undefined { return this.tryGetToken(ANTLRv3Parser.ROOT, 0); }
	public BANG(): TerminalNode | undefined { return this.tryGetToken(ANTLRv3Parser.BANG, 0); }
	public ARG_ACTION(): TerminalNode | undefined { return this.tryGetToken(ANTLRv3Parser.ARG_ACTION, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ANTLRv3Parser.RULE_terminal_; }
	// @Override
	public enterRule(listener: ANTLRv3Listener): void {
		if (listener.enterTerminal_) {
			listener.enterTerminal_(this);
		}
	}
	// @Override
	public exitRule(listener: ANTLRv3Listener): void {
		if (listener.exitTerminal_) {
			listener.exitTerminal_(this);
		}
	}
}


export class NotTerminalContext extends ParserRuleContext {
	public CHAR_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ANTLRv3Parser.CHAR_LITERAL, 0); }
	public TOKEN_REF(): TerminalNode | undefined { return this.tryGetToken(ANTLRv3Parser.TOKEN_REF, 0); }
	public STRING_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ANTLRv3Parser.STRING_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ANTLRv3Parser.RULE_notTerminal; }
	// @Override
	public enterRule(listener: ANTLRv3Listener): void {
		if (listener.enterNotTerminal) {
			listener.enterNotTerminal(this);
		}
	}
	// @Override
	public exitRule(listener: ANTLRv3Listener): void {
		if (listener.exitNotTerminal) {
			listener.exitNotTerminal(this);
		}
	}
}


export class EbnfSuffixContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ANTLRv3Parser.RULE_ebnfSuffix; }
	// @Override
	public enterRule(listener: ANTLRv3Listener): void {
		if (listener.enterEbnfSuffix) {
			listener.enterEbnfSuffix(this);
		}
	}
	// @Override
	public exitRule(listener: ANTLRv3Listener): void {
		if (listener.exitEbnfSuffix) {
			listener.exitEbnfSuffix(this);
		}
	}
}


export class RewriteContext extends ParserRuleContext {
	public REWRITE(): TerminalNode[];
	public REWRITE(i: number): TerminalNode;
	public REWRITE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ANTLRv3Parser.REWRITE);
		} else {
			return this.getToken(ANTLRv3Parser.REWRITE, i);
		}
	}
	public rewrite_alternative(): Rewrite_alternativeContext[];
	public rewrite_alternative(i: number): Rewrite_alternativeContext;
	public rewrite_alternative(i?: number): Rewrite_alternativeContext | Rewrite_alternativeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Rewrite_alternativeContext);
		} else {
			return this.getRuleContext(i, Rewrite_alternativeContext);
		}
	}
	public SEMPRED(): TerminalNode[];
	public SEMPRED(i: number): TerminalNode;
	public SEMPRED(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ANTLRv3Parser.SEMPRED);
		} else {
			return this.getToken(ANTLRv3Parser.SEMPRED, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ANTLRv3Parser.RULE_rewrite; }
	// @Override
	public enterRule(listener: ANTLRv3Listener): void {
		if (listener.enterRewrite) {
			listener.enterRewrite(this);
		}
	}
	// @Override
	public exitRule(listener: ANTLRv3Listener): void {
		if (listener.exitRewrite) {
			listener.exitRewrite(this);
		}
	}
}


export class Rewrite_alternativeContext extends ParserRuleContext {
	public rewrite_template(): Rewrite_templateContext | undefined {
		return this.tryGetRuleContext(0, Rewrite_templateContext);
	}
	public rewrite_tree_alternative(): Rewrite_tree_alternativeContext | undefined {
		return this.tryGetRuleContext(0, Rewrite_tree_alternativeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ANTLRv3Parser.RULE_rewrite_alternative; }
	// @Override
	public enterRule(listener: ANTLRv3Listener): void {
		if (listener.enterRewrite_alternative) {
			listener.enterRewrite_alternative(this);
		}
	}
	// @Override
	public exitRule(listener: ANTLRv3Listener): void {
		if (listener.exitRewrite_alternative) {
			listener.exitRewrite_alternative(this);
		}
	}
}


export class Rewrite_tree_blockContext extends ParserRuleContext {
	public rewrite_tree_alternative(): Rewrite_tree_alternativeContext {
		return this.getRuleContext(0, Rewrite_tree_alternativeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ANTLRv3Parser.RULE_rewrite_tree_block; }
	// @Override
	public enterRule(listener: ANTLRv3Listener): void {
		if (listener.enterRewrite_tree_block) {
			listener.enterRewrite_tree_block(this);
		}
	}
	// @Override
	public exitRule(listener: ANTLRv3Listener): void {
		if (listener.exitRewrite_tree_block) {
			listener.exitRewrite_tree_block(this);
		}
	}
}


export class Rewrite_tree_alternativeContext extends ParserRuleContext {
	public rewrite_tree_element(): Rewrite_tree_elementContext[];
	public rewrite_tree_element(i: number): Rewrite_tree_elementContext;
	public rewrite_tree_element(i?: number): Rewrite_tree_elementContext | Rewrite_tree_elementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Rewrite_tree_elementContext);
		} else {
			return this.getRuleContext(i, Rewrite_tree_elementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ANTLRv3Parser.RULE_rewrite_tree_alternative; }
	// @Override
	public enterRule(listener: ANTLRv3Listener): void {
		if (listener.enterRewrite_tree_alternative) {
			listener.enterRewrite_tree_alternative(this);
		}
	}
	// @Override
	public exitRule(listener: ANTLRv3Listener): void {
		if (listener.exitRewrite_tree_alternative) {
			listener.exitRewrite_tree_alternative(this);
		}
	}
}


export class Rewrite_tree_elementContext extends ParserRuleContext {
	public rewrite_tree_atom(): Rewrite_tree_atomContext | undefined {
		return this.tryGetRuleContext(0, Rewrite_tree_atomContext);
	}
	public ebnfSuffix(): EbnfSuffixContext | undefined {
		return this.tryGetRuleContext(0, EbnfSuffixContext);
	}
	public rewrite_tree(): Rewrite_treeContext | undefined {
		return this.tryGetRuleContext(0, Rewrite_treeContext);
	}
	public rewrite_tree_ebnf(): Rewrite_tree_ebnfContext | undefined {
		return this.tryGetRuleContext(0, Rewrite_tree_ebnfContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ANTLRv3Parser.RULE_rewrite_tree_element; }
	// @Override
	public enterRule(listener: ANTLRv3Listener): void {
		if (listener.enterRewrite_tree_element) {
			listener.enterRewrite_tree_element(this);
		}
	}
	// @Override
	public exitRule(listener: ANTLRv3Listener): void {
		if (listener.exitRewrite_tree_element) {
			listener.exitRewrite_tree_element(this);
		}
	}
}


export class Rewrite_tree_atomContext extends ParserRuleContext {
	public CHAR_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ANTLRv3Parser.CHAR_LITERAL, 0); }
	public TOKEN_REF(): TerminalNode | undefined { return this.tryGetToken(ANTLRv3Parser.TOKEN_REF, 0); }
	public ARG_ACTION(): TerminalNode | undefined { return this.tryGetToken(ANTLRv3Parser.ARG_ACTION, 0); }
	public RULE_REF(): TerminalNode | undefined { return this.tryGetToken(ANTLRv3Parser.RULE_REF, 0); }
	public STRING_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ANTLRv3Parser.STRING_LITERAL, 0); }
	public id(): IdContext | undefined {
		return this.tryGetRuleContext(0, IdContext);
	}
	public ACTION(): TerminalNode | undefined { return this.tryGetToken(ANTLRv3Parser.ACTION, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ANTLRv3Parser.RULE_rewrite_tree_atom; }
	// @Override
	public enterRule(listener: ANTLRv3Listener): void {
		if (listener.enterRewrite_tree_atom) {
			listener.enterRewrite_tree_atom(this);
		}
	}
	// @Override
	public exitRule(listener: ANTLRv3Listener): void {
		if (listener.exitRewrite_tree_atom) {
			listener.exitRewrite_tree_atom(this);
		}
	}
}


export class Rewrite_tree_ebnfContext extends ParserRuleContext {
	public rewrite_tree_block(): Rewrite_tree_blockContext {
		return this.getRuleContext(0, Rewrite_tree_blockContext);
	}
	public ebnfSuffix(): EbnfSuffixContext {
		return this.getRuleContext(0, EbnfSuffixContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ANTLRv3Parser.RULE_rewrite_tree_ebnf; }
	// @Override
	public enterRule(listener: ANTLRv3Listener): void {
		if (listener.enterRewrite_tree_ebnf) {
			listener.enterRewrite_tree_ebnf(this);
		}
	}
	// @Override
	public exitRule(listener: ANTLRv3Listener): void {
		if (listener.exitRewrite_tree_ebnf) {
			listener.exitRewrite_tree_ebnf(this);
		}
	}
}


export class Rewrite_treeContext extends ParserRuleContext {
	public TREE_BEGIN(): TerminalNode { return this.getToken(ANTLRv3Parser.TREE_BEGIN, 0); }
	public rewrite_tree_atom(): Rewrite_tree_atomContext {
		return this.getRuleContext(0, Rewrite_tree_atomContext);
	}
	public rewrite_tree_element(): Rewrite_tree_elementContext[];
	public rewrite_tree_element(i: number): Rewrite_tree_elementContext;
	public rewrite_tree_element(i?: number): Rewrite_tree_elementContext | Rewrite_tree_elementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Rewrite_tree_elementContext);
		} else {
			return this.getRuleContext(i, Rewrite_tree_elementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ANTLRv3Parser.RULE_rewrite_tree; }
	// @Override
	public enterRule(listener: ANTLRv3Listener): void {
		if (listener.enterRewrite_tree) {
			listener.enterRewrite_tree(this);
		}
	}
	// @Override
	public exitRule(listener: ANTLRv3Listener): void {
		if (listener.exitRewrite_tree) {
			listener.exitRewrite_tree(this);
		}
	}
}


export class Rewrite_templateContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ANTLRv3Parser.RULE_rewrite_template; }
	// @Override
	public enterRule(listener: ANTLRv3Listener): void {
		if (listener.enterRewrite_template) {
			listener.enterRewrite_template(this);
		}
	}
	// @Override
	public exitRule(listener: ANTLRv3Listener): void {
		if (listener.exitRewrite_template) {
			listener.exitRewrite_template(this);
		}
	}
}


export class Rewrite_template_refContext extends ParserRuleContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public rewrite_template_args(): Rewrite_template_argsContext {
		return this.getRuleContext(0, Rewrite_template_argsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ANTLRv3Parser.RULE_rewrite_template_ref; }
	// @Override
	public enterRule(listener: ANTLRv3Listener): void {
		if (listener.enterRewrite_template_ref) {
			listener.enterRewrite_template_ref(this);
		}
	}
	// @Override
	public exitRule(listener: ANTLRv3Listener): void {
		if (listener.exitRewrite_template_ref) {
			listener.exitRewrite_template_ref(this);
		}
	}
}


export class Rewrite_indirect_template_headContext extends ParserRuleContext {
	public ACTION(): TerminalNode { return this.getToken(ANTLRv3Parser.ACTION, 0); }
	public rewrite_template_args(): Rewrite_template_argsContext {
		return this.getRuleContext(0, Rewrite_template_argsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ANTLRv3Parser.RULE_rewrite_indirect_template_head; }
	// @Override
	public enterRule(listener: ANTLRv3Listener): void {
		if (listener.enterRewrite_indirect_template_head) {
			listener.enterRewrite_indirect_template_head(this);
		}
	}
	// @Override
	public exitRule(listener: ANTLRv3Listener): void {
		if (listener.exitRewrite_indirect_template_head) {
			listener.exitRewrite_indirect_template_head(this);
		}
	}
}


export class Rewrite_template_argsContext extends ParserRuleContext {
	public rewrite_template_arg(): Rewrite_template_argContext[];
	public rewrite_template_arg(i: number): Rewrite_template_argContext;
	public rewrite_template_arg(i?: number): Rewrite_template_argContext | Rewrite_template_argContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Rewrite_template_argContext);
		} else {
			return this.getRuleContext(i, Rewrite_template_argContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ANTLRv3Parser.RULE_rewrite_template_args; }
	// @Override
	public enterRule(listener: ANTLRv3Listener): void {
		if (listener.enterRewrite_template_args) {
			listener.enterRewrite_template_args(this);
		}
	}
	// @Override
	public exitRule(listener: ANTLRv3Listener): void {
		if (listener.exitRewrite_template_args) {
			listener.exitRewrite_template_args(this);
		}
	}
}


export class Rewrite_template_argContext extends ParserRuleContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public ACTION(): TerminalNode { return this.getToken(ANTLRv3Parser.ACTION, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ANTLRv3Parser.RULE_rewrite_template_arg; }
	// @Override
	public enterRule(listener: ANTLRv3Listener): void {
		if (listener.enterRewrite_template_arg) {
			listener.enterRewrite_template_arg(this);
		}
	}
	// @Override
	public exitRule(listener: ANTLRv3Listener): void {
		if (listener.exitRewrite_template_arg) {
			listener.exitRewrite_template_arg(this);
		}
	}
}


export class IdContext extends ParserRuleContext {
	public TOKEN_REF(): TerminalNode | undefined { return this.tryGetToken(ANTLRv3Parser.TOKEN_REF, 0); }
	public RULE_REF(): TerminalNode | undefined { return this.tryGetToken(ANTLRv3Parser.RULE_REF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ANTLRv3Parser.RULE_id; }
	// @Override
	public enterRule(listener: ANTLRv3Listener): void {
		if (listener.enterId) {
			listener.enterId(this);
		}
	}
	// @Override
	public exitRule(listener: ANTLRv3Listener): void {
		if (listener.exitId) {
			listener.exitId(this);
		}
	}
}


