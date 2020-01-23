// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/stringtemplate/STParser.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { STParserListener } from "./STParserListener";
import { STParserVisitor } from "./STParserVisitor";


export class STParser extends Parser {
	public static readonly DOC_COMMENT = 1;
	public static readonly BLOCK_COMMENT = 2;
	public static readonly LINE_COMMENT = 3;
	public static readonly TMPL_COMMENT = 4;
	public static readonly HORZ_WS = 5;
	public static readonly VERT_WS = 6;
	public static readonly ESCAPE = 7;
	public static readonly LDELIM = 8;
	public static readonly RBRACE = 9;
	public static readonly TEXT = 10;
	public static readonly LBRACE = 11;
	public static readonly RDELIM = 12;
	public static readonly STRING = 13;
	public static readonly IF = 14;
	public static readonly ELSEIF = 15;
	public static readonly ELSE = 16;
	public static readonly ENDIF = 17;
	public static readonly SUPER = 18;
	public static readonly END = 19;
	public static readonly TRUE = 20;
	public static readonly FALSE = 21;
	public static readonly AT = 22;
	public static readonly ELLIPSIS = 23;
	public static readonly DOT = 24;
	public static readonly COMMA = 25;
	public static readonly COLON = 26;
	public static readonly SEMI = 27;
	public static readonly AND = 28;
	public static readonly OR = 29;
	public static readonly LPAREN = 30;
	public static readonly RPAREN = 31;
	public static readonly LBRACK = 32;
	public static readonly RBRACK = 33;
	public static readonly EQUALS = 34;
	public static readonly BANG = 35;
	public static readonly ERR_CHAR = 36;
	public static readonly ID = 37;
	public static readonly PIPE = 38;
	public static readonly RULE_template = 0;
	public static readonly RULE_elements = 1;
	public static readonly RULE_element = 2;
	public static readonly RULE_singleElement = 3;
	public static readonly RULE_compoundElement = 4;
	public static readonly RULE_exprTag = 5;
	public static readonly RULE_region = 6;
	public static readonly RULE_subtemplate = 7;
	public static readonly RULE_ifstat = 8;
	public static readonly RULE_conditional = 9;
	public static readonly RULE_andConditional = 10;
	public static readonly RULE_notConditional = 11;
	public static readonly RULE_notConditionalExpr = 12;
	public static readonly RULE_exprOptions = 13;
	public static readonly RULE_option = 14;
	public static readonly RULE_expr = 15;
	public static readonly RULE_mapExpr = 16;
	public static readonly RULE_memberExpr = 17;
	public static readonly RULE_mapTemplateRef = 18;
	public static readonly RULE_includeExpr = 19;
	public static readonly RULE_primary = 20;
	public static readonly RULE_list = 21;
	public static readonly RULE_args = 22;
	public static readonly RULE_argExprList = 23;
	public static readonly RULE_namedArg = 24;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"template", "elements", "element", "singleElement", "compoundElement", 
		"exprTag", "region", "subtemplate", "ifstat", "conditional", "andConditional", 
		"notConditional", "notConditionalExpr", "exprOptions", "option", "expr", 
		"mapExpr", "memberExpr", "mapTemplateRef", "includeExpr", "primary", "list", 
		"args", "argExprList", "namedArg",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		"'if'", "'elseif'", "'else'", "'endif'", "'super'", "'@end'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "DOC_COMMENT", "BLOCK_COMMENT", "LINE_COMMENT", "TMPL_COMMENT", 
		"HORZ_WS", "VERT_WS", "ESCAPE", "LDELIM", "RBRACE", "TEXT", "LBRACE", 
		"RDELIM", "STRING", "IF", "ELSEIF", "ELSE", "ENDIF", "SUPER", "END", "TRUE", 
		"FALSE", "AT", "ELLIPSIS", "DOT", "COMMA", "COLON", "SEMI", "AND", "OR", 
		"LPAREN", "RPAREN", "LBRACK", "RBRACK", "EQUALS", "BANG", "ERR_CHAR", 
		"ID", "PIPE",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(STParser._LITERAL_NAMES, STParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return STParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "STParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return STParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return STParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(STParser._ATN, this);
	}
	// @RuleVersion(0)
	public template(): TemplateContext {
		let _localctx: TemplateContext = new TemplateContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, STParser.RULE_template);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 50;
			this.elements();
			this.state = 51;
			this.match(STParser.EOF);
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
		this.enterRule(_localctx, 2, STParser.RULE_elements);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 56;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 53;
					this.element();
					}
					}
				}
				this.state = 58;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
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
		this.enterRule(_localctx, 4, STParser.RULE_element);
		try {
			this.state = 61;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 59;
				this.singleElement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 60;
				this.compoundElement();
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
	public singleElement(): SingleElementContext {
		let _localctx: SingleElementContext = new SingleElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, STParser.RULE_singleElement);
		try {
			let _alt: number;
			this.state = 69;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case STParser.LDELIM:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 63;
				this.exprTag();
				}
				break;
			case STParser.TEXT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 65;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 64;
						this.match(STParser.TEXT);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 67;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
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
	public compoundElement(): CompoundElementContext {
		let _localctx: CompoundElementContext = new CompoundElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, STParser.RULE_compoundElement);
		try {
			this.state = 73;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 71;
				this.ifstat();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 72;
				this.region();
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
	public exprTag(): ExprTagContext {
		let _localctx: ExprTagContext = new ExprTagContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, STParser.RULE_exprTag);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 75;
			this.match(STParser.LDELIM);
			this.state = 76;
			this.mapExpr();
			this.state = 79;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === STParser.SEMI) {
				{
				this.state = 77;
				this.match(STParser.SEMI);
				this.state = 78;
				this.exprOptions();
				}
			}

			this.state = 81;
			this.match(STParser.RDELIM);
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
	public region(): RegionContext {
		let _localctx: RegionContext = new RegionContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, STParser.RULE_region);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 83;
			this.match(STParser.LDELIM);
			this.state = 84;
			this.match(STParser.AT);
			this.state = 85;
			this.match(STParser.ID);
			this.state = 86;
			this.match(STParser.RDELIM);
			this.state = 87;
			this.elements();
			this.state = 88;
			this.match(STParser.LDELIM);
			this.state = 89;
			this.match(STParser.END);
			this.state = 90;
			this.match(STParser.RDELIM);
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
	public subtemplate(): SubtemplateContext {
		let _localctx: SubtemplateContext = new SubtemplateContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, STParser.RULE_subtemplate);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 92;
			this.match(STParser.LBRACE);
			this.state = 102;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === STParser.ID) {
				{
				this.state = 93;
				this.match(STParser.ID);
				this.state = 98;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === STParser.COMMA) {
					{
					{
					this.state = 94;
					this.match(STParser.COMMA);
					this.state = 95;
					this.match(STParser.ID);
					}
					}
					this.state = 100;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 101;
				this.match(STParser.PIPE);
				}
			}

			this.state = 104;
			this.elements();
			this.state = 105;
			this.match(STParser.RBRACE);
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
	public ifstat(): IfstatContext {
		let _localctx: IfstatContext = new IfstatContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, STParser.RULE_ifstat);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 107;
			this.match(STParser.LDELIM);
			this.state = 108;
			this.match(STParser.IF);
			this.state = 109;
			this.match(STParser.LPAREN);
			this.state = 110;
			this.conditional();
			this.state = 111;
			this.match(STParser.RPAREN);
			this.state = 112;
			this.match(STParser.RDELIM);
			this.state = 113;
			this.elements();
			this.state = 124;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 114;
					this.match(STParser.LDELIM);
					this.state = 115;
					this.match(STParser.ELSEIF);
					this.state = 116;
					this.match(STParser.LPAREN);
					this.state = 117;
					this.conditional();
					this.state = 118;
					this.match(STParser.RPAREN);
					this.state = 119;
					this.match(STParser.RDELIM);
					this.state = 120;
					this.elements();
					}
					}
				}
				this.state = 126;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
			}
			this.state = 131;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				{
				this.state = 127;
				this.match(STParser.LDELIM);
				this.state = 128;
				this.match(STParser.ELSE);
				this.state = 129;
				this.match(STParser.RDELIM);
				this.state = 130;
				this.elements();
				}
				break;
			}
			this.state = 133;
			this.match(STParser.LDELIM);
			this.state = 134;
			this.match(STParser.ENDIF);
			this.state = 135;
			this.match(STParser.RDELIM);
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
	public conditional(): ConditionalContext {
		let _localctx: ConditionalContext = new ConditionalContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, STParser.RULE_conditional);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 137;
			this.andConditional();
			this.state = 142;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === STParser.OR) {
				{
				{
				this.state = 138;
				this.match(STParser.OR);
				this.state = 139;
				this.andConditional();
				}
				}
				this.state = 144;
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
	public andConditional(): AndConditionalContext {
		let _localctx: AndConditionalContext = new AndConditionalContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, STParser.RULE_andConditional);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 145;
			this.notConditional();
			this.state = 150;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === STParser.AND) {
				{
				{
				this.state = 146;
				this.match(STParser.AND);
				this.state = 147;
				this.notConditional();
				}
				}
				this.state = 152;
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
	public notConditional(): NotConditionalContext {
		let _localctx: NotConditionalContext = new NotConditionalContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, STParser.RULE_notConditional);
		try {
			this.state = 156;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case STParser.BANG:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 153;
				this.match(STParser.BANG);
				this.state = 154;
				this.notConditional();
				}
				break;
			case STParser.LBRACE:
			case STParser.STRING:
			case STParser.SUPER:
			case STParser.TRUE:
			case STParser.FALSE:
			case STParser.AT:
			case STParser.LPAREN:
			case STParser.LBRACK:
			case STParser.ID:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 155;
				this.memberExpr();
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
	public notConditionalExpr(): NotConditionalExprContext {
		let _localctx: NotConditionalExprContext = new NotConditionalExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, STParser.RULE_notConditionalExpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 158;
			this.match(STParser.ID);
			this.state = 168;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === STParser.DOT) {
				{
				this.state = 166;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
				case 1:
					{
					this.state = 159;
					this.match(STParser.DOT);
					this.state = 160;
					this.match(STParser.ID);
					}
					break;

				case 2:
					{
					this.state = 161;
					this.match(STParser.DOT);
					this.state = 162;
					this.match(STParser.LPAREN);
					this.state = 163;
					this.mapExpr();
					this.state = 164;
					this.match(STParser.RPAREN);
					}
					break;
				}
				}
				this.state = 170;
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
	public exprOptions(): ExprOptionsContext {
		let _localctx: ExprOptionsContext = new ExprOptionsContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, STParser.RULE_exprOptions);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 171;
			this.option();
			this.state = 176;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === STParser.COMMA) {
				{
				{
				this.state = 172;
				this.match(STParser.COMMA);
				this.state = 173;
				this.option();
				}
				}
				this.state = 178;
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
	public option(): OptionContext {
		let _localctx: OptionContext = new OptionContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, STParser.RULE_option);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 179;
			this.match(STParser.ID);
			this.state = 182;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === STParser.EQUALS) {
				{
				this.state = 180;
				this.match(STParser.EQUALS);
				this.state = 181;
				this.expr();
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
	public expr(): ExprContext {
		let _localctx: ExprContext = new ExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, STParser.RULE_expr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 184;
			this.memberExpr();
			this.state = 187;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === STParser.COLON) {
				{
				this.state = 185;
				this.match(STParser.COLON);
				this.state = 186;
				this.mapTemplateRef();
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
	public mapExpr(): MapExprContext {
		let _localctx: MapExprContext = new MapExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, STParser.RULE_mapExpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 189;
			this.memberExpr();
			this.state = 199;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === STParser.COMMA) {
				{
				this.state = 192;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 190;
					this.match(STParser.COMMA);
					this.state = 191;
					this.memberExpr();
					}
					}
					this.state = 194;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === STParser.COMMA);
				this.state = 196;
				this.match(STParser.COLON);
				this.state = 197;
				this.mapTemplateRef();
				}
			}

			this.state = 212;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === STParser.COLON) {
				{
				{
				this.state = 201;
				this.match(STParser.COLON);
				this.state = 202;
				this.mapTemplateRef();
				this.state = 207;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === STParser.COMMA) {
					{
					{
					this.state = 203;
					this.match(STParser.COMMA);
					this.state = 204;
					this.mapTemplateRef();
					}
					}
					this.state = 209;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				}
				this.state = 214;
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
	public memberExpr(): MemberExprContext {
		let _localctx: MemberExprContext = new MemberExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, STParser.RULE_memberExpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 215;
			this.includeExpr();
			this.state = 225;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === STParser.DOT) {
				{
				this.state = 223;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
				case 1:
					{
					this.state = 216;
					this.match(STParser.DOT);
					this.state = 217;
					this.match(STParser.ID);
					}
					break;

				case 2:
					{
					this.state = 218;
					this.match(STParser.DOT);
					this.state = 219;
					this.match(STParser.LPAREN);
					this.state = 220;
					this.mapExpr();
					this.state = 221;
					this.match(STParser.RPAREN);
					}
					break;
				}
				}
				this.state = 227;
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
	public mapTemplateRef(): MapTemplateRefContext {
		let _localctx: MapTemplateRefContext = new MapTemplateRefContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, STParser.RULE_mapTemplateRef);
		let _la: number;
		try {
			this.state = 244;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case STParser.ID:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 228;
				this.match(STParser.ID);
				this.state = 229;
				this.match(STParser.LPAREN);
				this.state = 231;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 11)) & ~0x1F) === 0 && ((1 << (_la - 11)) & ((1 << (STParser.LBRACE - 11)) | (1 << (STParser.STRING - 11)) | (1 << (STParser.SUPER - 11)) | (1 << (STParser.TRUE - 11)) | (1 << (STParser.FALSE - 11)) | (1 << (STParser.AT - 11)) | (1 << (STParser.ELLIPSIS - 11)) | (1 << (STParser.LPAREN - 11)) | (1 << (STParser.LBRACK - 11)) | (1 << (STParser.ID - 11)))) !== 0)) {
					{
					this.state = 230;
					this.args();
					}
				}

				this.state = 233;
				this.match(STParser.RPAREN);
				}
				break;
			case STParser.LBRACE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 234;
				this.subtemplate();
				}
				break;
			case STParser.LPAREN:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 235;
				this.match(STParser.LPAREN);
				this.state = 236;
				this.mapExpr();
				this.state = 237;
				this.match(STParser.RPAREN);
				this.state = 238;
				this.match(STParser.LPAREN);
				this.state = 240;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 11)) & ~0x1F) === 0 && ((1 << (_la - 11)) & ((1 << (STParser.LBRACE - 11)) | (1 << (STParser.STRING - 11)) | (1 << (STParser.SUPER - 11)) | (1 << (STParser.TRUE - 11)) | (1 << (STParser.FALSE - 11)) | (1 << (STParser.AT - 11)) | (1 << (STParser.LPAREN - 11)) | (1 << (STParser.LBRACK - 11)) | (1 << (STParser.ID - 11)))) !== 0)) {
					{
					this.state = 239;
					this.argExprList();
					}
				}

				this.state = 242;
				this.match(STParser.RPAREN);
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
	public includeExpr(): IncludeExprContext {
		let _localctx: IncludeExprContext = new IncludeExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, STParser.RULE_includeExpr);
		let _la: number;
		try {
			this.state = 277;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 246;
				this.match(STParser.ID);
				this.state = 247;
				this.match(STParser.LPAREN);
				this.state = 249;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 11)) & ~0x1F) === 0 && ((1 << (_la - 11)) & ((1 << (STParser.LBRACE - 11)) | (1 << (STParser.STRING - 11)) | (1 << (STParser.SUPER - 11)) | (1 << (STParser.TRUE - 11)) | (1 << (STParser.FALSE - 11)) | (1 << (STParser.AT - 11)) | (1 << (STParser.LPAREN - 11)) | (1 << (STParser.LBRACK - 11)) | (1 << (STParser.ID - 11)))) !== 0)) {
					{
					this.state = 248;
					this.mapExpr();
					}
				}

				this.state = 251;
				this.match(STParser.RPAREN);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 252;
				this.match(STParser.SUPER);
				this.state = 253;
				this.match(STParser.DOT);
				this.state = 254;
				this.match(STParser.ID);
				this.state = 255;
				this.match(STParser.LPAREN);
				this.state = 257;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 11)) & ~0x1F) === 0 && ((1 << (_la - 11)) & ((1 << (STParser.LBRACE - 11)) | (1 << (STParser.STRING - 11)) | (1 << (STParser.SUPER - 11)) | (1 << (STParser.TRUE - 11)) | (1 << (STParser.FALSE - 11)) | (1 << (STParser.AT - 11)) | (1 << (STParser.ELLIPSIS - 11)) | (1 << (STParser.LPAREN - 11)) | (1 << (STParser.LBRACK - 11)) | (1 << (STParser.ID - 11)))) !== 0)) {
					{
					this.state = 256;
					this.args();
					}
				}

				this.state = 259;
				this.match(STParser.RPAREN);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 260;
				this.match(STParser.ID);
				this.state = 261;
				this.match(STParser.LPAREN);
				this.state = 263;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 11)) & ~0x1F) === 0 && ((1 << (_la - 11)) & ((1 << (STParser.LBRACE - 11)) | (1 << (STParser.STRING - 11)) | (1 << (STParser.SUPER - 11)) | (1 << (STParser.TRUE - 11)) | (1 << (STParser.FALSE - 11)) | (1 << (STParser.AT - 11)) | (1 << (STParser.ELLIPSIS - 11)) | (1 << (STParser.LPAREN - 11)) | (1 << (STParser.LBRACK - 11)) | (1 << (STParser.ID - 11)))) !== 0)) {
					{
					this.state = 262;
					this.args();
					}
				}

				this.state = 265;
				this.match(STParser.RPAREN);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 266;
				this.match(STParser.AT);
				this.state = 267;
				this.match(STParser.SUPER);
				this.state = 268;
				this.match(STParser.DOT);
				this.state = 269;
				this.match(STParser.ID);
				this.state = 270;
				this.match(STParser.LPAREN);
				this.state = 271;
				this.match(STParser.RPAREN);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 272;
				this.match(STParser.AT);
				this.state = 273;
				this.match(STParser.ID);
				this.state = 274;
				this.match(STParser.LPAREN);
				this.state = 275;
				this.match(STParser.RPAREN);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 276;
				this.primary();
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
	public primary(): PrimaryContext {
		let _localctx: PrimaryContext = new PrimaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, STParser.RULE_primary);
		let _la: number;
		try {
			this.state = 299;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 33, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 279;
				this.match(STParser.ID);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 280;
				this.match(STParser.STRING);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 281;
				this.match(STParser.TRUE);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 282;
				this.match(STParser.FALSE);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 283;
				this.subtemplate();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 284;
				this.list();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 285;
				this.match(STParser.LPAREN);
				this.state = 286;
				this.conditional();
				this.state = 287;
				this.match(STParser.RPAREN);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 289;
				this.match(STParser.LPAREN);
				this.state = 290;
				this.mapExpr();
				this.state = 291;
				this.match(STParser.RPAREN);
				this.state = 297;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === STParser.LPAREN) {
					{
					this.state = 292;
					this.match(STParser.LPAREN);
					this.state = 294;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (((((_la - 11)) & ~0x1F) === 0 && ((1 << (_la - 11)) & ((1 << (STParser.LBRACE - 11)) | (1 << (STParser.STRING - 11)) | (1 << (STParser.SUPER - 11)) | (1 << (STParser.TRUE - 11)) | (1 << (STParser.FALSE - 11)) | (1 << (STParser.AT - 11)) | (1 << (STParser.LPAREN - 11)) | (1 << (STParser.LBRACK - 11)) | (1 << (STParser.ID - 11)))) !== 0)) {
						{
						this.state = 293;
						this.argExprList();
						}
					}

					this.state = 296;
					this.match(STParser.RPAREN);
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
	public list(): ListContext {
		let _localctx: ListContext = new ListContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, STParser.RULE_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 301;
			this.match(STParser.LBRACK);
			this.state = 303;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 11)) & ~0x1F) === 0 && ((1 << (_la - 11)) & ((1 << (STParser.LBRACE - 11)) | (1 << (STParser.STRING - 11)) | (1 << (STParser.SUPER - 11)) | (1 << (STParser.TRUE - 11)) | (1 << (STParser.FALSE - 11)) | (1 << (STParser.AT - 11)) | (1 << (STParser.LPAREN - 11)) | (1 << (STParser.LBRACK - 11)) | (1 << (STParser.ID - 11)))) !== 0)) {
				{
				this.state = 302;
				this.argExprList();
				}
			}

			this.state = 305;
			this.match(STParser.RBRACK);
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
	public args(): ArgsContext {
		let _localctx: ArgsContext = new ArgsContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, STParser.RULE_args);
		let _la: number;
		try {
			let _alt: number;
			this.state = 321;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 37, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 307;
				this.argExprList();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 308;
				this.namedArg();
				this.state = 313;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 309;
						this.match(STParser.COMMA);
						this.state = 310;
						this.namedArg();
						}
						}
					}
					this.state = 315;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
				}
				this.state = 318;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === STParser.COMMA) {
					{
					this.state = 316;
					this.match(STParser.COMMA);
					this.state = 317;
					this.match(STParser.ELLIPSIS);
					}
				}

				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 320;
				this.match(STParser.ELLIPSIS);
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
	public argExprList(): ArgExprListContext {
		let _localctx: ArgExprListContext = new ArgExprListContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, STParser.RULE_argExprList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 323;
			this.expr();
			this.state = 328;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === STParser.COMMA) {
				{
				{
				this.state = 324;
				this.match(STParser.COMMA);
				this.state = 325;
				this.expr();
				}
				}
				this.state = 330;
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
	public namedArg(): NamedArgContext {
		let _localctx: NamedArgContext = new NamedArgContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, STParser.RULE_namedArg);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 331;
			this.match(STParser.ID);
			this.state = 332;
			this.match(STParser.EQUALS);
			this.state = 333;
			this.expr();
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03(\u0152\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x03\x02\x03\x02\x03\x02\x03\x03" +
		"\x07\x039\n\x03\f\x03\x0E\x03<\v\x03\x03\x04\x03\x04\x05\x04@\n\x04\x03" +
		"\x05\x03\x05\x06\x05D\n\x05\r\x05\x0E\x05E\x05\x05H\n\x05\x03\x06\x03" +
		"\x06\x05\x06L\n\x06\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07R\n\x07\x03" +
		"\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03" +
		"\t\x03\t\x03\t\x03\t\x07\tc\n\t\f\t\x0E\tf\v\t\x03\t\x05\ti\n\t\x03\t" +
		"\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x03\n\x07\n}\n\n\f\n\x0E\n\x80\v\n\x03\n\x03" +
		"\n\x03\n\x03\n\x05\n\x86\n\n\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v" +
		"\x07\v\x8F\n\v\f\v\x0E\v\x92\v\v\x03\f\x03\f\x03\f\x07\f\x97\n\f\f\f\x0E" +
		"\f\x9A\v\f\x03\r\x03\r\x03\r\x05\r\x9F\n\r\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x07\x0E\xA9\n\x0E\f\x0E\x0E\x0E\xAC" +
		"\v\x0E\x03\x0F\x03\x0F\x03\x0F\x07\x0F\xB1\n\x0F\f\x0F\x0E\x0F\xB4\v\x0F" +
		"\x03\x10\x03\x10\x03\x10\x05\x10\xB9\n\x10\x03\x11\x03\x11\x03\x11\x05" +
		"\x11\xBE\n\x11\x03\x12\x03\x12\x03\x12\x06\x12\xC3\n\x12\r\x12\x0E\x12" +
		"\xC4\x03\x12\x03\x12\x03\x12\x05\x12\xCA\n\x12\x03\x12\x03\x12\x03\x12" +
		"\x03\x12\x07\x12\xD0\n\x12\f\x12\x0E\x12\xD3\v\x12\x07\x12\xD5\n\x12\f" +
		"\x12\x0E\x12\xD8\v\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13" +
		"\x03\x13\x03\x13\x07\x13\xE2\n\x13\f\x13\x0E\x13\xE5\v\x13\x03\x14\x03" +
		"\x14\x03\x14\x05\x14\xEA\n\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14" +
		"\x03\x14\x03\x14\x05\x14\xF3\n\x14\x03\x14\x03\x14\x05\x14\xF7\n\x14\x03" +
		"\x15\x03\x15\x03\x15\x05\x15\xFC\n\x15\x03\x15\x03\x15\x03\x15\x03\x15" +
		"\x03\x15\x03\x15\x05\x15\u0104\n\x15\x03\x15\x03\x15\x03\x15\x03\x15\x05" +
		"\x15\u010A\n\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15" +
		"\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x05\x15\u0118\n\x15\x03\x16\x03" +
		"\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03" +
		"\x16\x03\x16\x03\x16\x03\x16\x03\x16\x05\x16\u0129\n\x16\x03\x16\x05\x16" +
		"\u012C\n\x16\x05\x16\u012E\n\x16\x03\x17\x03\x17\x05\x17\u0132\n\x17\x03" +
		"\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x18\x07\x18\u013A\n\x18\f\x18" +
		"\x0E\x18\u013D\v\x18\x03\x18\x03\x18\x05\x18\u0141\n\x18\x03\x18\x05\x18" +
		"\u0144\n\x18\x03\x19\x03\x19\x03\x19\x07\x19\u0149\n\x19\f\x19\x0E\x19" +
		"\u014C\v\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x02\x02\x02\x1B\x02" +
		"\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02" +
		"\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02" +
		",\x02.\x020\x022\x02\x02\x02\x02\u016B\x024\x03\x02\x02\x02\x04:\x03\x02" +
		"\x02\x02\x06?\x03\x02\x02\x02\bG\x03\x02\x02\x02\nK\x03\x02\x02\x02\f" +
		"M\x03\x02\x02\x02\x0EU\x03\x02\x02\x02\x10^\x03\x02\x02\x02\x12m\x03\x02" +
		"\x02\x02\x14\x8B\x03\x02\x02\x02\x16\x93\x03\x02\x02\x02\x18\x9E\x03\x02" +
		"\x02\x02\x1A\xA0\x03\x02\x02\x02\x1C\xAD\x03\x02\x02\x02\x1E\xB5\x03\x02" +
		"\x02\x02 \xBA\x03\x02\x02\x02\"\xBF\x03\x02\x02\x02$\xD9\x03\x02\x02\x02" +
		"&\xF6\x03\x02\x02\x02(\u0117\x03\x02\x02\x02*\u012D\x03\x02\x02\x02,\u012F" +
		"\x03\x02\x02\x02.\u0143\x03\x02\x02\x020\u0145\x03\x02\x02\x022\u014D" +
		"\x03\x02\x02\x0245\x05\x04\x03\x0256\x07\x02\x02\x036\x03\x03\x02\x02" +
		"\x0279\x05\x06\x04\x0287\x03\x02\x02\x029<\x03\x02\x02\x02:8\x03\x02\x02" +
		"\x02:;\x03\x02\x02\x02;\x05\x03\x02\x02\x02<:\x03\x02\x02\x02=@\x05\b" +
		"\x05\x02>@\x05\n\x06\x02?=\x03\x02\x02\x02?>\x03\x02\x02\x02@\x07\x03" +
		"\x02\x02\x02AH\x05\f\x07\x02BD\x07\f\x02\x02CB\x03\x02\x02\x02DE\x03\x02" +
		"\x02\x02EC\x03\x02\x02\x02EF\x03\x02\x02\x02FH\x03\x02\x02\x02GA\x03\x02" +
		"\x02\x02GC\x03\x02\x02\x02H\t\x03\x02\x02\x02IL\x05\x12\n\x02JL\x05\x0E" +
		"\b\x02KI\x03\x02\x02\x02KJ\x03\x02\x02\x02L\v\x03\x02\x02\x02MN\x07\n" +
		"\x02\x02NQ\x05\"\x12\x02OP\x07\x1D\x02\x02PR\x05\x1C\x0F\x02QO\x03\x02" +
		"\x02\x02QR\x03\x02\x02\x02RS\x03\x02\x02\x02ST\x07\x0E\x02\x02T\r\x03" +
		"\x02\x02\x02UV\x07\n\x02\x02VW\x07\x18\x02\x02WX\x07\'\x02\x02XY\x07\x0E" +
		"\x02\x02YZ\x05\x04\x03\x02Z[\x07\n\x02\x02[\\\x07\x15\x02\x02\\]\x07\x0E" +
		"\x02\x02]\x0F\x03\x02\x02\x02^h\x07\r\x02\x02_d\x07\'\x02\x02`a\x07\x1B" +
		"\x02\x02ac\x07\'\x02\x02b`\x03\x02\x02\x02cf\x03\x02\x02\x02db\x03\x02" +
		"\x02\x02de\x03\x02\x02\x02eg\x03\x02\x02\x02fd\x03\x02\x02\x02gi\x07(" +
		"\x02\x02h_\x03\x02\x02\x02hi\x03\x02\x02\x02ij\x03\x02\x02\x02jk\x05\x04" +
		"\x03\x02kl\x07\v\x02\x02l\x11\x03\x02\x02\x02mn\x07\n\x02\x02no\x07\x10" +
		"\x02\x02op\x07 \x02\x02pq\x05\x14\v\x02qr\x07!\x02\x02rs\x07\x0E\x02\x02" +
		"s~\x05\x04\x03\x02tu\x07\n\x02\x02uv\x07\x11\x02\x02vw\x07 \x02\x02wx" +
		"\x05\x14\v\x02xy\x07!\x02\x02yz\x07\x0E\x02\x02z{\x05\x04\x03\x02{}\x03" +
		"\x02\x02\x02|t\x03\x02\x02\x02}\x80\x03\x02\x02\x02~|\x03\x02\x02\x02" +
		"~\x7F\x03\x02\x02\x02\x7F\x85\x03\x02\x02\x02\x80~\x03\x02\x02\x02\x81" +
		"\x82\x07\n\x02\x02\x82\x83\x07\x12\x02\x02\x83\x84\x07\x0E\x02\x02\x84" +
		"\x86\x05\x04\x03\x02\x85\x81\x03\x02\x02\x02\x85\x86\x03\x02\x02\x02\x86" +
		"\x87\x03\x02\x02\x02\x87\x88\x07\n\x02\x02\x88\x89\x07\x13\x02\x02\x89" +
		"\x8A\x07\x0E\x02\x02\x8A\x13\x03\x02\x02\x02\x8B\x90\x05\x16\f\x02\x8C" +
		"\x8D\x07\x1F\x02\x02\x8D\x8F\x05\x16\f\x02\x8E\x8C\x03\x02\x02\x02\x8F" +
		"\x92\x03\x02\x02\x02\x90\x8E\x03\x02\x02\x02\x90\x91\x03\x02\x02\x02\x91" +
		"\x15\x03\x02\x02\x02\x92\x90\x03\x02\x02\x02\x93\x98\x05\x18\r\x02\x94" +
		"\x95\x07\x1E\x02\x02\x95\x97\x05\x18\r\x02\x96\x94\x03\x02\x02\x02\x97" +
		"\x9A\x03\x02\x02\x02\x98\x96\x03\x02\x02\x02\x98\x99\x03\x02\x02\x02\x99" +
		"\x17\x03\x02\x02\x02\x9A\x98\x03\x02\x02\x02\x9B\x9C\x07%\x02\x02\x9C" +
		"\x9F\x05\x18\r\x02\x9D\x9F\x05$\x13\x02\x9E\x9B\x03\x02\x02\x02\x9E\x9D" +
		"\x03\x02\x02\x02\x9F\x19\x03\x02\x02\x02\xA0\xAA\x07\'\x02\x02\xA1\xA2" +
		"\x07\x1A\x02\x02\xA2\xA9\x07\'\x02\x02\xA3\xA4\x07\x1A\x02\x02\xA4\xA5" +
		"\x07 \x02\x02\xA5\xA6\x05\"\x12\x02\xA6\xA7\x07!\x02\x02\xA7\xA9\x03\x02" +
		"\x02\x02\xA8\xA1\x03\x02\x02\x02\xA8\xA3\x03\x02\x02\x02\xA9\xAC\x03\x02" +
		"\x02\x02\xAA\xA8\x03\x02\x02\x02\xAA\xAB\x03\x02\x02\x02\xAB\x1B\x03\x02" +
		"\x02\x02\xAC\xAA\x03\x02\x02\x02\xAD\xB2\x05\x1E\x10\x02\xAE\xAF\x07\x1B" +
		"\x02\x02\xAF\xB1\x05\x1E\x10\x02\xB0\xAE\x03\x02\x02\x02\xB1\xB4\x03\x02" +
		"\x02\x02\xB2\xB0\x03\x02\x02\x02\xB2\xB3\x03\x02\x02\x02\xB3\x1D\x03\x02" +
		"\x02\x02\xB4\xB2\x03\x02\x02\x02\xB5\xB8\x07\'\x02\x02\xB6\xB7\x07$\x02" +
		"\x02\xB7\xB9\x05 \x11\x02\xB8\xB6\x03\x02\x02\x02\xB8\xB9\x03\x02\x02" +
		"\x02\xB9\x1F\x03\x02\x02\x02\xBA\xBD\x05$\x13\x02\xBB\xBC\x07\x1C\x02" +
		"\x02\xBC\xBE\x05&\x14\x02\xBD\xBB\x03\x02\x02\x02\xBD\xBE\x03\x02\x02" +
		"\x02\xBE!\x03\x02\x02\x02\xBF\xC9\x05$\x13\x02\xC0\xC1\x07\x1B\x02\x02" +
		"\xC1\xC3\x05$\x13\x02\xC2\xC0\x03\x02\x02\x02\xC3\xC4\x03\x02\x02\x02" +
		"\xC4\xC2\x03\x02\x02\x02\xC4\xC5\x03\x02\x02\x02\xC5\xC6\x03\x02\x02\x02" +
		"\xC6\xC7\x07\x1C\x02\x02\xC7\xC8\x05&\x14\x02\xC8\xCA\x03\x02\x02\x02" +
		"\xC9\xC2\x03\x02\x02\x02\xC9\xCA\x03\x02\x02\x02\xCA\xD6\x03\x02\x02\x02" +
		"\xCB\xCC\x07\x1C\x02\x02\xCC\xD1\x05&\x14\x02\xCD\xCE\x07\x1B\x02\x02" +
		"\xCE\xD0\x05&\x14\x02\xCF\xCD\x03\x02\x02\x02\xD0\xD3\x03\x02\x02\x02" +
		"\xD1\xCF\x03\x02\x02\x02\xD1\xD2\x03\x02\x02\x02\xD2\xD5\x03\x02\x02\x02" +
		"\xD3\xD1\x03\x02\x02\x02\xD4\xCB\x03\x02\x02\x02\xD5\xD8\x03\x02\x02\x02" +
		"\xD6\xD4\x03\x02\x02\x02\xD6\xD7\x03\x02\x02\x02\xD7#\x03\x02\x02\x02" +
		"\xD8\xD6\x03\x02\x02\x02\xD9\xE3\x05(\x15\x02\xDA\xDB\x07\x1A\x02\x02" +
		"\xDB\xE2\x07\'\x02\x02\xDC\xDD\x07\x1A\x02\x02\xDD\xDE\x07 \x02\x02\xDE" +
		"\xDF\x05\"\x12\x02\xDF\xE0\x07!\x02\x02\xE0\xE2\x03\x02\x02\x02\xE1\xDA" +
		"\x03\x02\x02\x02\xE1\xDC\x03\x02\x02\x02\xE2\xE5\x03\x02\x02\x02\xE3\xE1" +
		"\x03\x02\x02\x02\xE3\xE4\x03\x02\x02\x02\xE4%\x03\x02\x02\x02\xE5\xE3" +
		"\x03\x02\x02\x02\xE6\xE7\x07\'\x02\x02\xE7\xE9\x07 \x02\x02\xE8\xEA\x05" +
		".\x18\x02\xE9\xE8\x03\x02\x02\x02\xE9\xEA\x03\x02\x02\x02\xEA\xEB\x03" +
		"\x02\x02\x02\xEB\xF7\x07!\x02\x02\xEC\xF7\x05\x10\t\x02\xED\xEE\x07 \x02" +
		"\x02\xEE\xEF\x05\"\x12\x02\xEF\xF0\x07!\x02\x02\xF0\xF2\x07 \x02\x02\xF1" +
		"\xF3\x050\x19\x02\xF2\xF1\x03\x02\x02\x02\xF2\xF3\x03\x02\x02\x02\xF3" +
		"\xF4\x03\x02\x02\x02\xF4\xF5\x07!\x02\x02\xF5\xF7\x03\x02\x02\x02\xF6" +
		"\xE6\x03\x02\x02\x02\xF6\xEC\x03\x02\x02\x02\xF6\xED\x03\x02\x02\x02\xF7" +
		"\'\x03\x02\x02\x02\xF8\xF9\x07\'\x02\x02\xF9\xFB\x07 \x02\x02\xFA\xFC" +
		"\x05\"\x12\x02\xFB\xFA\x03\x02\x02\x02\xFB\xFC\x03\x02\x02\x02\xFC\xFD" +
		"\x03\x02\x02\x02\xFD\u0118\x07!\x02\x02\xFE\xFF\x07\x14\x02\x02\xFF\u0100" +
		"\x07\x1A\x02\x02\u0100\u0101\x07\'\x02\x02\u0101\u0103\x07 \x02\x02\u0102" +
		"\u0104\x05.\x18\x02\u0103\u0102\x03\x02\x02\x02\u0103\u0104\x03\x02\x02" +
		"\x02\u0104\u0105\x03\x02\x02\x02\u0105\u0118\x07!\x02\x02\u0106\u0107" +
		"\x07\'\x02\x02\u0107\u0109\x07 \x02\x02\u0108\u010A\x05.\x18\x02\u0109" +
		"\u0108\x03\x02\x02\x02\u0109\u010A\x03\x02\x02\x02\u010A\u010B\x03\x02" +
		"\x02\x02\u010B\u0118\x07!\x02\x02\u010C\u010D\x07\x18\x02\x02\u010D\u010E" +
		"\x07\x14\x02\x02\u010E\u010F\x07\x1A\x02\x02\u010F\u0110\x07\'\x02\x02" +
		"\u0110\u0111\x07 \x02\x02\u0111\u0118\x07!\x02\x02\u0112\u0113\x07\x18" +
		"\x02\x02\u0113\u0114\x07\'\x02\x02\u0114\u0115\x07 \x02\x02\u0115\u0118" +
		"\x07!\x02\x02\u0116\u0118\x05*\x16\x02\u0117\xF8\x03\x02\x02\x02\u0117" +
		"\xFE\x03\x02\x02\x02\u0117\u0106\x03\x02\x02\x02\u0117\u010C\x03\x02\x02" +
		"\x02\u0117\u0112\x03\x02\x02\x02\u0117\u0116\x03\x02\x02\x02\u0118)\x03" +
		"\x02\x02\x02\u0119\u012E\x07\'\x02\x02\u011A\u012E\x07\x0F\x02\x02\u011B" +
		"\u012E\x07\x16\x02\x02\u011C\u012E\x07\x17\x02\x02\u011D\u012E\x05\x10" +
		"\t\x02\u011E\u012E\x05,\x17\x02\u011F\u0120\x07 \x02\x02\u0120\u0121\x05" +
		"\x14\v\x02\u0121\u0122\x07!\x02\x02\u0122\u012E\x03\x02\x02\x02\u0123" +
		"\u0124\x07 \x02\x02\u0124\u0125\x05\"\x12\x02\u0125\u012B\x07!\x02\x02" +
		"\u0126\u0128\x07 \x02\x02\u0127\u0129\x050\x19\x02\u0128\u0127\x03\x02" +
		"\x02\x02\u0128\u0129\x03\x02\x02\x02\u0129\u012A\x03\x02\x02\x02\u012A" +
		"\u012C\x07!\x02\x02\u012B\u0126\x03\x02\x02\x02\u012B\u012C\x03\x02\x02" +
		"\x02\u012C\u012E\x03\x02\x02\x02\u012D\u0119\x03\x02\x02\x02\u012D\u011A" +
		"\x03\x02\x02\x02\u012D\u011B\x03\x02\x02\x02\u012D\u011C\x03\x02\x02\x02" +
		"\u012D\u011D\x03\x02\x02\x02\u012D\u011E\x03\x02\x02\x02\u012D\u011F\x03" +
		"\x02\x02\x02\u012D\u0123\x03\x02\x02\x02\u012E+\x03\x02\x02\x02\u012F" +
		"\u0131\x07\"\x02\x02\u0130\u0132\x050\x19\x02\u0131\u0130\x03\x02\x02" +
		"\x02\u0131\u0132\x03\x02\x02\x02\u0132\u0133\x03\x02\x02\x02\u0133\u0134" +
		"\x07#\x02\x02\u0134-\x03\x02\x02\x02\u0135\u0144\x050\x19\x02\u0136\u013B" +
		"\x052\x1A\x02\u0137\u0138\x07\x1B\x02\x02\u0138\u013A\x052\x1A\x02\u0139" +
		"\u0137\x03\x02\x02\x02\u013A\u013D\x03\x02\x02\x02\u013B\u0139\x03\x02" +
		"\x02\x02\u013B\u013C\x03\x02\x02\x02\u013C\u0140\x03\x02\x02\x02\u013D" +
		"\u013B\x03\x02\x02\x02\u013E\u013F\x07\x1B\x02\x02\u013F\u0141\x07\x19" +
		"\x02\x02\u0140\u013E\x03\x02\x02\x02\u0140\u0141\x03\x02\x02\x02\u0141" +
		"\u0144\x03\x02\x02\x02\u0142\u0144\x07\x19\x02\x02\u0143\u0135\x03\x02" +
		"\x02\x02\u0143\u0136\x03\x02\x02\x02\u0143\u0142\x03\x02\x02\x02\u0144" +
		"/\x03\x02\x02\x02\u0145\u014A\x05 \x11\x02\u0146\u0147\x07\x1B\x02\x02" +
		"\u0147\u0149\x05 \x11\x02\u0148\u0146\x03\x02\x02\x02\u0149\u014C\x03" +
		"\x02\x02\x02\u014A\u0148\x03\x02\x02\x02\u014A\u014B\x03\x02\x02\x02\u014B" +
		"1\x03\x02\x02\x02\u014C\u014A\x03\x02\x02\x02\u014D\u014E\x07\'\x02\x02" +
		"\u014E\u014F\x07$\x02\x02\u014F\u0150\x05 \x11\x02\u01503\x03\x02\x02" +
		"\x02):?EGKQdh~\x85\x90\x98\x9E\xA8\xAA\xB2\xB8\xBD\xC4\xC9\xD1\xD6\xE1" +
		"\xE3\xE9\xF2\xF6\xFB\u0103\u0109\u0117\u0128\u012B\u012D\u0131\u013B\u0140" +
		"\u0143\u014A";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!STParser.__ATN) {
			STParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(STParser._serializedATN));
		}

		return STParser.__ATN;
	}

}

export class TemplateContext extends ParserRuleContext {
	public elements(): ElementsContext {
		return this.getRuleContext(0, ElementsContext);
	}
	public EOF(): TerminalNode { return this.getToken(STParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return STParser.RULE_template; }
	// @Override
	public enterRule(listener: STParserListener): void {
		if (listener.enterTemplate) {
			listener.enterTemplate(this);
		}
	}
	// @Override
	public exitRule(listener: STParserListener): void {
		if (listener.exitTemplate) {
			listener.exitTemplate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: STParserVisitor<Result>): Result {
		if (visitor.visitTemplate) {
			return visitor.visitTemplate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementsContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return STParser.RULE_elements; }
	// @Override
	public enterRule(listener: STParserListener): void {
		if (listener.enterElements) {
			listener.enterElements(this);
		}
	}
	// @Override
	public exitRule(listener: STParserListener): void {
		if (listener.exitElements) {
			listener.exitElements(this);
		}
	}
	// @Override
	public accept<Result>(visitor: STParserVisitor<Result>): Result {
		if (visitor.visitElements) {
			return visitor.visitElements(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementContext extends ParserRuleContext {
	public singleElement(): SingleElementContext | undefined {
		return this.tryGetRuleContext(0, SingleElementContext);
	}
	public compoundElement(): CompoundElementContext | undefined {
		return this.tryGetRuleContext(0, CompoundElementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return STParser.RULE_element; }
	// @Override
	public enterRule(listener: STParserListener): void {
		if (listener.enterElement) {
			listener.enterElement(this);
		}
	}
	// @Override
	public exitRule(listener: STParserListener): void {
		if (listener.exitElement) {
			listener.exitElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: STParserVisitor<Result>): Result {
		if (visitor.visitElement) {
			return visitor.visitElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SingleElementContext extends ParserRuleContext {
	public exprTag(): ExprTagContext | undefined {
		return this.tryGetRuleContext(0, ExprTagContext);
	}
	public TEXT(): TerminalNode[];
	public TEXT(i: number): TerminalNode;
	public TEXT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(STParser.TEXT);
		} else {
			return this.getToken(STParser.TEXT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return STParser.RULE_singleElement; }
	// @Override
	public enterRule(listener: STParserListener): void {
		if (listener.enterSingleElement) {
			listener.enterSingleElement(this);
		}
	}
	// @Override
	public exitRule(listener: STParserListener): void {
		if (listener.exitSingleElement) {
			listener.exitSingleElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: STParserVisitor<Result>): Result {
		if (visitor.visitSingleElement) {
			return visitor.visitSingleElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CompoundElementContext extends ParserRuleContext {
	public ifstat(): IfstatContext | undefined {
		return this.tryGetRuleContext(0, IfstatContext);
	}
	public region(): RegionContext | undefined {
		return this.tryGetRuleContext(0, RegionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return STParser.RULE_compoundElement; }
	// @Override
	public enterRule(listener: STParserListener): void {
		if (listener.enterCompoundElement) {
			listener.enterCompoundElement(this);
		}
	}
	// @Override
	public exitRule(listener: STParserListener): void {
		if (listener.exitCompoundElement) {
			listener.exitCompoundElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: STParserVisitor<Result>): Result {
		if (visitor.visitCompoundElement) {
			return visitor.visitCompoundElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExprTagContext extends ParserRuleContext {
	public LDELIM(): TerminalNode { return this.getToken(STParser.LDELIM, 0); }
	public mapExpr(): MapExprContext {
		return this.getRuleContext(0, MapExprContext);
	}
	public RDELIM(): TerminalNode { return this.getToken(STParser.RDELIM, 0); }
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(STParser.SEMI, 0); }
	public exprOptions(): ExprOptionsContext | undefined {
		return this.tryGetRuleContext(0, ExprOptionsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return STParser.RULE_exprTag; }
	// @Override
	public enterRule(listener: STParserListener): void {
		if (listener.enterExprTag) {
			listener.enterExprTag(this);
		}
	}
	// @Override
	public exitRule(listener: STParserListener): void {
		if (listener.exitExprTag) {
			listener.exitExprTag(this);
		}
	}
	// @Override
	public accept<Result>(visitor: STParserVisitor<Result>): Result {
		if (visitor.visitExprTag) {
			return visitor.visitExprTag(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RegionContext extends ParserRuleContext {
	public LDELIM(): TerminalNode[];
	public LDELIM(i: number): TerminalNode;
	public LDELIM(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(STParser.LDELIM);
		} else {
			return this.getToken(STParser.LDELIM, i);
		}
	}
	public AT(): TerminalNode { return this.getToken(STParser.AT, 0); }
	public ID(): TerminalNode { return this.getToken(STParser.ID, 0); }
	public RDELIM(): TerminalNode[];
	public RDELIM(i: number): TerminalNode;
	public RDELIM(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(STParser.RDELIM);
		} else {
			return this.getToken(STParser.RDELIM, i);
		}
	}
	public elements(): ElementsContext {
		return this.getRuleContext(0, ElementsContext);
	}
	public END(): TerminalNode { return this.getToken(STParser.END, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return STParser.RULE_region; }
	// @Override
	public enterRule(listener: STParserListener): void {
		if (listener.enterRegion) {
			listener.enterRegion(this);
		}
	}
	// @Override
	public exitRule(listener: STParserListener): void {
		if (listener.exitRegion) {
			listener.exitRegion(this);
		}
	}
	// @Override
	public accept<Result>(visitor: STParserVisitor<Result>): Result {
		if (visitor.visitRegion) {
			return visitor.visitRegion(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SubtemplateContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(STParser.LBRACE, 0); }
	public elements(): ElementsContext {
		return this.getRuleContext(0, ElementsContext);
	}
	public RBRACE(): TerminalNode { return this.getToken(STParser.RBRACE, 0); }
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(STParser.ID);
		} else {
			return this.getToken(STParser.ID, i);
		}
	}
	public PIPE(): TerminalNode | undefined { return this.tryGetToken(STParser.PIPE, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(STParser.COMMA);
		} else {
			return this.getToken(STParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return STParser.RULE_subtemplate; }
	// @Override
	public enterRule(listener: STParserListener): void {
		if (listener.enterSubtemplate) {
			listener.enterSubtemplate(this);
		}
	}
	// @Override
	public exitRule(listener: STParserListener): void {
		if (listener.exitSubtemplate) {
			listener.exitSubtemplate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: STParserVisitor<Result>): Result {
		if (visitor.visitSubtemplate) {
			return visitor.visitSubtemplate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfstatContext extends ParserRuleContext {
	public LDELIM(): TerminalNode[];
	public LDELIM(i: number): TerminalNode;
	public LDELIM(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(STParser.LDELIM);
		} else {
			return this.getToken(STParser.LDELIM, i);
		}
	}
	public IF(): TerminalNode { return this.getToken(STParser.IF, 0); }
	public LPAREN(): TerminalNode[];
	public LPAREN(i: number): TerminalNode;
	public LPAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(STParser.LPAREN);
		} else {
			return this.getToken(STParser.LPAREN, i);
		}
	}
	public conditional(): ConditionalContext[];
	public conditional(i: number): ConditionalContext;
	public conditional(i?: number): ConditionalContext | ConditionalContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConditionalContext);
		} else {
			return this.getRuleContext(i, ConditionalContext);
		}
	}
	public RPAREN(): TerminalNode[];
	public RPAREN(i: number): TerminalNode;
	public RPAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(STParser.RPAREN);
		} else {
			return this.getToken(STParser.RPAREN, i);
		}
	}
	public RDELIM(): TerminalNode[];
	public RDELIM(i: number): TerminalNode;
	public RDELIM(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(STParser.RDELIM);
		} else {
			return this.getToken(STParser.RDELIM, i);
		}
	}
	public elements(): ElementsContext[];
	public elements(i: number): ElementsContext;
	public elements(i?: number): ElementsContext | ElementsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ElementsContext);
		} else {
			return this.getRuleContext(i, ElementsContext);
		}
	}
	public ENDIF(): TerminalNode { return this.getToken(STParser.ENDIF, 0); }
	public ELSEIF(): TerminalNode[];
	public ELSEIF(i: number): TerminalNode;
	public ELSEIF(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(STParser.ELSEIF);
		} else {
			return this.getToken(STParser.ELSEIF, i);
		}
	}
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(STParser.ELSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return STParser.RULE_ifstat; }
	// @Override
	public enterRule(listener: STParserListener): void {
		if (listener.enterIfstat) {
			listener.enterIfstat(this);
		}
	}
	// @Override
	public exitRule(listener: STParserListener): void {
		if (listener.exitIfstat) {
			listener.exitIfstat(this);
		}
	}
	// @Override
	public accept<Result>(visitor: STParserVisitor<Result>): Result {
		if (visitor.visitIfstat) {
			return visitor.visitIfstat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConditionalContext extends ParserRuleContext {
	public andConditional(): AndConditionalContext[];
	public andConditional(i: number): AndConditionalContext;
	public andConditional(i?: number): AndConditionalContext | AndConditionalContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AndConditionalContext);
		} else {
			return this.getRuleContext(i, AndConditionalContext);
		}
	}
	public OR(): TerminalNode[];
	public OR(i: number): TerminalNode;
	public OR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(STParser.OR);
		} else {
			return this.getToken(STParser.OR, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return STParser.RULE_conditional; }
	// @Override
	public enterRule(listener: STParserListener): void {
		if (listener.enterConditional) {
			listener.enterConditional(this);
		}
	}
	// @Override
	public exitRule(listener: STParserListener): void {
		if (listener.exitConditional) {
			listener.exitConditional(this);
		}
	}
	// @Override
	public accept<Result>(visitor: STParserVisitor<Result>): Result {
		if (visitor.visitConditional) {
			return visitor.visitConditional(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AndConditionalContext extends ParserRuleContext {
	public notConditional(): NotConditionalContext[];
	public notConditional(i: number): NotConditionalContext;
	public notConditional(i?: number): NotConditionalContext | NotConditionalContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NotConditionalContext);
		} else {
			return this.getRuleContext(i, NotConditionalContext);
		}
	}
	public AND(): TerminalNode[];
	public AND(i: number): TerminalNode;
	public AND(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(STParser.AND);
		} else {
			return this.getToken(STParser.AND, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return STParser.RULE_andConditional; }
	// @Override
	public enterRule(listener: STParserListener): void {
		if (listener.enterAndConditional) {
			listener.enterAndConditional(this);
		}
	}
	// @Override
	public exitRule(listener: STParserListener): void {
		if (listener.exitAndConditional) {
			listener.exitAndConditional(this);
		}
	}
	// @Override
	public accept<Result>(visitor: STParserVisitor<Result>): Result {
		if (visitor.visitAndConditional) {
			return visitor.visitAndConditional(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NotConditionalContext extends ParserRuleContext {
	public BANG(): TerminalNode | undefined { return this.tryGetToken(STParser.BANG, 0); }
	public notConditional(): NotConditionalContext | undefined {
		return this.tryGetRuleContext(0, NotConditionalContext);
	}
	public memberExpr(): MemberExprContext | undefined {
		return this.tryGetRuleContext(0, MemberExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return STParser.RULE_notConditional; }
	// @Override
	public enterRule(listener: STParserListener): void {
		if (listener.enterNotConditional) {
			listener.enterNotConditional(this);
		}
	}
	// @Override
	public exitRule(listener: STParserListener): void {
		if (listener.exitNotConditional) {
			listener.exitNotConditional(this);
		}
	}
	// @Override
	public accept<Result>(visitor: STParserVisitor<Result>): Result {
		if (visitor.visitNotConditional) {
			return visitor.visitNotConditional(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NotConditionalExprContext extends ParserRuleContext {
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(STParser.ID);
		} else {
			return this.getToken(STParser.ID, i);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(STParser.DOT);
		} else {
			return this.getToken(STParser.DOT, i);
		}
	}
	public LPAREN(): TerminalNode[];
	public LPAREN(i: number): TerminalNode;
	public LPAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(STParser.LPAREN);
		} else {
			return this.getToken(STParser.LPAREN, i);
		}
	}
	public mapExpr(): MapExprContext[];
	public mapExpr(i: number): MapExprContext;
	public mapExpr(i?: number): MapExprContext | MapExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MapExprContext);
		} else {
			return this.getRuleContext(i, MapExprContext);
		}
	}
	public RPAREN(): TerminalNode[];
	public RPAREN(i: number): TerminalNode;
	public RPAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(STParser.RPAREN);
		} else {
			return this.getToken(STParser.RPAREN, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return STParser.RULE_notConditionalExpr; }
	// @Override
	public enterRule(listener: STParserListener): void {
		if (listener.enterNotConditionalExpr) {
			listener.enterNotConditionalExpr(this);
		}
	}
	// @Override
	public exitRule(listener: STParserListener): void {
		if (listener.exitNotConditionalExpr) {
			listener.exitNotConditionalExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: STParserVisitor<Result>): Result {
		if (visitor.visitNotConditionalExpr) {
			return visitor.visitNotConditionalExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExprOptionsContext extends ParserRuleContext {
	public option(): OptionContext[];
	public option(i: number): OptionContext;
	public option(i?: number): OptionContext | OptionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OptionContext);
		} else {
			return this.getRuleContext(i, OptionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(STParser.COMMA);
		} else {
			return this.getToken(STParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return STParser.RULE_exprOptions; }
	// @Override
	public enterRule(listener: STParserListener): void {
		if (listener.enterExprOptions) {
			listener.enterExprOptions(this);
		}
	}
	// @Override
	public exitRule(listener: STParserListener): void {
		if (listener.exitExprOptions) {
			listener.exitExprOptions(this);
		}
	}
	// @Override
	public accept<Result>(visitor: STParserVisitor<Result>): Result {
		if (visitor.visitExprOptions) {
			return visitor.visitExprOptions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OptionContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(STParser.ID, 0); }
	public EQUALS(): TerminalNode | undefined { return this.tryGetToken(STParser.EQUALS, 0); }
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return STParser.RULE_option; }
	// @Override
	public enterRule(listener: STParserListener): void {
		if (listener.enterOption) {
			listener.enterOption(this);
		}
	}
	// @Override
	public exitRule(listener: STParserListener): void {
		if (listener.exitOption) {
			listener.exitOption(this);
		}
	}
	// @Override
	public accept<Result>(visitor: STParserVisitor<Result>): Result {
		if (visitor.visitOption) {
			return visitor.visitOption(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExprContext extends ParserRuleContext {
	public memberExpr(): MemberExprContext {
		return this.getRuleContext(0, MemberExprContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(STParser.COLON, 0); }
	public mapTemplateRef(): MapTemplateRefContext | undefined {
		return this.tryGetRuleContext(0, MapTemplateRefContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return STParser.RULE_expr; }
	// @Override
	public enterRule(listener: STParserListener): void {
		if (listener.enterExpr) {
			listener.enterExpr(this);
		}
	}
	// @Override
	public exitRule(listener: STParserListener): void {
		if (listener.exitExpr) {
			listener.exitExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: STParserVisitor<Result>): Result {
		if (visitor.visitExpr) {
			return visitor.visitExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MapExprContext extends ParserRuleContext {
	public memberExpr(): MemberExprContext[];
	public memberExpr(i: number): MemberExprContext;
	public memberExpr(i?: number): MemberExprContext | MemberExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MemberExprContext);
		} else {
			return this.getRuleContext(i, MemberExprContext);
		}
	}
	public COLON(): TerminalNode[];
	public COLON(i: number): TerminalNode;
	public COLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(STParser.COLON);
		} else {
			return this.getToken(STParser.COLON, i);
		}
	}
	public mapTemplateRef(): MapTemplateRefContext[];
	public mapTemplateRef(i: number): MapTemplateRefContext;
	public mapTemplateRef(i?: number): MapTemplateRefContext | MapTemplateRefContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MapTemplateRefContext);
		} else {
			return this.getRuleContext(i, MapTemplateRefContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(STParser.COMMA);
		} else {
			return this.getToken(STParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return STParser.RULE_mapExpr; }
	// @Override
	public enterRule(listener: STParserListener): void {
		if (listener.enterMapExpr) {
			listener.enterMapExpr(this);
		}
	}
	// @Override
	public exitRule(listener: STParserListener): void {
		if (listener.exitMapExpr) {
			listener.exitMapExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: STParserVisitor<Result>): Result {
		if (visitor.visitMapExpr) {
			return visitor.visitMapExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MemberExprContext extends ParserRuleContext {
	public includeExpr(): IncludeExprContext {
		return this.getRuleContext(0, IncludeExprContext);
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(STParser.DOT);
		} else {
			return this.getToken(STParser.DOT, i);
		}
	}
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(STParser.ID);
		} else {
			return this.getToken(STParser.ID, i);
		}
	}
	public LPAREN(): TerminalNode[];
	public LPAREN(i: number): TerminalNode;
	public LPAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(STParser.LPAREN);
		} else {
			return this.getToken(STParser.LPAREN, i);
		}
	}
	public mapExpr(): MapExprContext[];
	public mapExpr(i: number): MapExprContext;
	public mapExpr(i?: number): MapExprContext | MapExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MapExprContext);
		} else {
			return this.getRuleContext(i, MapExprContext);
		}
	}
	public RPAREN(): TerminalNode[];
	public RPAREN(i: number): TerminalNode;
	public RPAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(STParser.RPAREN);
		} else {
			return this.getToken(STParser.RPAREN, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return STParser.RULE_memberExpr; }
	// @Override
	public enterRule(listener: STParserListener): void {
		if (listener.enterMemberExpr) {
			listener.enterMemberExpr(this);
		}
	}
	// @Override
	public exitRule(listener: STParserListener): void {
		if (listener.exitMemberExpr) {
			listener.exitMemberExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: STParserVisitor<Result>): Result {
		if (visitor.visitMemberExpr) {
			return visitor.visitMemberExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MapTemplateRefContext extends ParserRuleContext {
	public ID(): TerminalNode | undefined { return this.tryGetToken(STParser.ID, 0); }
	public LPAREN(): TerminalNode[];
	public LPAREN(i: number): TerminalNode;
	public LPAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(STParser.LPAREN);
		} else {
			return this.getToken(STParser.LPAREN, i);
		}
	}
	public RPAREN(): TerminalNode[];
	public RPAREN(i: number): TerminalNode;
	public RPAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(STParser.RPAREN);
		} else {
			return this.getToken(STParser.RPAREN, i);
		}
	}
	public args(): ArgsContext | undefined {
		return this.tryGetRuleContext(0, ArgsContext);
	}
	public subtemplate(): SubtemplateContext | undefined {
		return this.tryGetRuleContext(0, SubtemplateContext);
	}
	public mapExpr(): MapExprContext | undefined {
		return this.tryGetRuleContext(0, MapExprContext);
	}
	public argExprList(): ArgExprListContext | undefined {
		return this.tryGetRuleContext(0, ArgExprListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return STParser.RULE_mapTemplateRef; }
	// @Override
	public enterRule(listener: STParserListener): void {
		if (listener.enterMapTemplateRef) {
			listener.enterMapTemplateRef(this);
		}
	}
	// @Override
	public exitRule(listener: STParserListener): void {
		if (listener.exitMapTemplateRef) {
			listener.exitMapTemplateRef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: STParserVisitor<Result>): Result {
		if (visitor.visitMapTemplateRef) {
			return visitor.visitMapTemplateRef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IncludeExprContext extends ParserRuleContext {
	public ID(): TerminalNode | undefined { return this.tryGetToken(STParser.ID, 0); }
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(STParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(STParser.RPAREN, 0); }
	public mapExpr(): MapExprContext | undefined {
		return this.tryGetRuleContext(0, MapExprContext);
	}
	public SUPER(): TerminalNode | undefined { return this.tryGetToken(STParser.SUPER, 0); }
	public DOT(): TerminalNode | undefined { return this.tryGetToken(STParser.DOT, 0); }
	public args(): ArgsContext | undefined {
		return this.tryGetRuleContext(0, ArgsContext);
	}
	public AT(): TerminalNode | undefined { return this.tryGetToken(STParser.AT, 0); }
	public primary(): PrimaryContext | undefined {
		return this.tryGetRuleContext(0, PrimaryContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return STParser.RULE_includeExpr; }
	// @Override
	public enterRule(listener: STParserListener): void {
		if (listener.enterIncludeExpr) {
			listener.enterIncludeExpr(this);
		}
	}
	// @Override
	public exitRule(listener: STParserListener): void {
		if (listener.exitIncludeExpr) {
			listener.exitIncludeExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: STParserVisitor<Result>): Result {
		if (visitor.visitIncludeExpr) {
			return visitor.visitIncludeExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryContext extends ParserRuleContext {
	public ID(): TerminalNode | undefined { return this.tryGetToken(STParser.ID, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(STParser.STRING, 0); }
	public TRUE(): TerminalNode | undefined { return this.tryGetToken(STParser.TRUE, 0); }
	public FALSE(): TerminalNode | undefined { return this.tryGetToken(STParser.FALSE, 0); }
	public subtemplate(): SubtemplateContext | undefined {
		return this.tryGetRuleContext(0, SubtemplateContext);
	}
	public list(): ListContext | undefined {
		return this.tryGetRuleContext(0, ListContext);
	}
	public LPAREN(): TerminalNode[];
	public LPAREN(i: number): TerminalNode;
	public LPAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(STParser.LPAREN);
		} else {
			return this.getToken(STParser.LPAREN, i);
		}
	}
	public conditional(): ConditionalContext | undefined {
		return this.tryGetRuleContext(0, ConditionalContext);
	}
	public RPAREN(): TerminalNode[];
	public RPAREN(i: number): TerminalNode;
	public RPAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(STParser.RPAREN);
		} else {
			return this.getToken(STParser.RPAREN, i);
		}
	}
	public mapExpr(): MapExprContext | undefined {
		return this.tryGetRuleContext(0, MapExprContext);
	}
	public argExprList(): ArgExprListContext | undefined {
		return this.tryGetRuleContext(0, ArgExprListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return STParser.RULE_primary; }
	// @Override
	public enterRule(listener: STParserListener): void {
		if (listener.enterPrimary) {
			listener.enterPrimary(this);
		}
	}
	// @Override
	public exitRule(listener: STParserListener): void {
		if (listener.exitPrimary) {
			listener.exitPrimary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: STParserVisitor<Result>): Result {
		if (visitor.visitPrimary) {
			return visitor.visitPrimary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ListContext extends ParserRuleContext {
	public LBRACK(): TerminalNode { return this.getToken(STParser.LBRACK, 0); }
	public RBRACK(): TerminalNode { return this.getToken(STParser.RBRACK, 0); }
	public argExprList(): ArgExprListContext | undefined {
		return this.tryGetRuleContext(0, ArgExprListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return STParser.RULE_list; }
	// @Override
	public enterRule(listener: STParserListener): void {
		if (listener.enterList) {
			listener.enterList(this);
		}
	}
	// @Override
	public exitRule(listener: STParserListener): void {
		if (listener.exitList) {
			listener.exitList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: STParserVisitor<Result>): Result {
		if (visitor.visitList) {
			return visitor.visitList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgsContext extends ParserRuleContext {
	public argExprList(): ArgExprListContext | undefined {
		return this.tryGetRuleContext(0, ArgExprListContext);
	}
	public namedArg(): NamedArgContext[];
	public namedArg(i: number): NamedArgContext;
	public namedArg(i?: number): NamedArgContext | NamedArgContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NamedArgContext);
		} else {
			return this.getRuleContext(i, NamedArgContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(STParser.COMMA);
		} else {
			return this.getToken(STParser.COMMA, i);
		}
	}
	public ELLIPSIS(): TerminalNode | undefined { return this.tryGetToken(STParser.ELLIPSIS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return STParser.RULE_args; }
	// @Override
	public enterRule(listener: STParserListener): void {
		if (listener.enterArgs) {
			listener.enterArgs(this);
		}
	}
	// @Override
	public exitRule(listener: STParserListener): void {
		if (listener.exitArgs) {
			listener.exitArgs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: STParserVisitor<Result>): Result {
		if (visitor.visitArgs) {
			return visitor.visitArgs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgExprListContext extends ParserRuleContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(STParser.COMMA);
		} else {
			return this.getToken(STParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return STParser.RULE_argExprList; }
	// @Override
	public enterRule(listener: STParserListener): void {
		if (listener.enterArgExprList) {
			listener.enterArgExprList(this);
		}
	}
	// @Override
	public exitRule(listener: STParserListener): void {
		if (listener.exitArgExprList) {
			listener.exitArgExprList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: STParserVisitor<Result>): Result {
		if (visitor.visitArgExprList) {
			return visitor.visitArgExprList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NamedArgContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(STParser.ID, 0); }
	public EQUALS(): TerminalNode { return this.getToken(STParser.EQUALS, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return STParser.RULE_namedArg; }
	// @Override
	public enterRule(listener: STParserListener): void {
		if (listener.enterNamedArg) {
			listener.enterNamedArg(this);
		}
	}
	// @Override
	public exitRule(listener: STParserListener): void {
		if (listener.exitNamedArg) {
			listener.exitNamedArg(this);
		}
	}
	// @Override
	public accept<Result>(visitor: STParserVisitor<Result>): Result {
		if (visitor.visitNamedArg) {
			return visitor.visitNamedArg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


