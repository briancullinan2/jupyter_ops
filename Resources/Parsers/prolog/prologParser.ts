// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/prolog/prolog.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { prologListener } from "./prologListener";

export class prologParser extends Parser {
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
	public static readonly T__29 = 30;
	public static readonly T__30 = 31;
	public static readonly T__31 = 32;
	public static readonly T__32 = 33;
	public static readonly T__33 = 34;
	public static readonly T__34 = 35;
	public static readonly T__35 = 36;
	public static readonly T__36 = 37;
	public static readonly T__37 = 38;
	public static readonly T__38 = 39;
	public static readonly T__39 = 40;
	public static readonly T__40 = 41;
	public static readonly T__41 = 42;
	public static readonly T__42 = 43;
	public static readonly T__43 = 44;
	public static readonly T__44 = 45;
	public static readonly T__45 = 46;
	public static readonly T__46 = 47;
	public static readonly T__47 = 48;
	public static readonly T__48 = 49;
	public static readonly T__49 = 50;
	public static readonly T__50 = 51;
	public static readonly LETTER_DIGIT = 52;
	public static readonly VARIABLE = 53;
	public static readonly DECIMAL = 54;
	public static readonly BINARY = 55;
	public static readonly OCTAL = 56;
	public static readonly HEX = 57;
	public static readonly CHARACTER_CODE_CONSTANT = 58;
	public static readonly FLOAT = 59;
	public static readonly GRAPHIC_TOKEN = 60;
	public static readonly QUOTED = 61;
	public static readonly DOUBLE_QUOTED_LIST = 62;
	public static readonly BACK_QUOTED_STRING = 63;
	public static readonly WS = 64;
	public static readonly COMMENT = 65;
	public static readonly MULTILINE_COMMENT = 66;
	public static readonly RULE_p_text = 0;
	public static readonly RULE_directive = 1;
	public static readonly RULE_clause = 2;
	public static readonly RULE_termlist = 3;
	public static readonly RULE_term = 4;
	public static readonly RULE_operator = 5;
	public static readonly RULE_atom = 6;
	public static readonly RULE_integer = 7;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"p_text", "directive", "clause", "termlist", "term", "operator", "atom", 
		"integer",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "':-'", "'.'", "','", "'('", "')'", "'-'", "'['", "'|'", "']'", 
		"'{'", "'}'", "'-->'", "'?-'", "'dynamic'", "'multifile'", "'discontiguous'", 
		"'public'", "';'", "'->'", "'\\'", "'='", "'\\'", "'=='", "'\\='", "'@<'", 
		"'@=<'", "'@>'", "'@>='", "'=..'", "'is'", "'=:='", "'=\\'", "'<'", "'=<'", 
		"'>'", "'>='", "':'", "'+'", "'/\\'", "'\\'", "'*'", "'/'", "'//'", "'rem'", 
		"'mod'", "'<<'", "'>>'", "'**'", "'^'", "'\\'", "'!'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "LETTER_DIGIT", "VARIABLE", "DECIMAL", 
		"BINARY", "OCTAL", "HEX", "CHARACTER_CODE_CONSTANT", "FLOAT", "GRAPHIC_TOKEN", 
		"QUOTED", "DOUBLE_QUOTED_LIST", "BACK_QUOTED_STRING", "WS", "COMMENT", 
		"MULTILINE_COMMENT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(prologParser._LITERAL_NAMES, prologParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return prologParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "prolog.g4"; }

	// @Override
	public get ruleNames(): string[] { return prologParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return prologParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(prologParser._ATN, this);
	}
	// @RuleVersion(0)
	public p_text(): P_textContext {
		let _localctx: P_textContext = new P_textContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, prologParser.RULE_p_text);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 20;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << prologParser.T__0) | (1 << prologParser.T__2) | (1 << prologParser.T__3) | (1 << prologParser.T__5) | (1 << prologParser.T__6) | (1 << prologParser.T__9) | (1 << prologParser.T__11) | (1 << prologParser.T__12) | (1 << prologParser.T__13) | (1 << prologParser.T__14) | (1 << prologParser.T__15) | (1 << prologParser.T__16) | (1 << prologParser.T__17) | (1 << prologParser.T__18) | (1 << prologParser.T__19) | (1 << prologParser.T__20) | (1 << prologParser.T__21) | (1 << prologParser.T__22) | (1 << prologParser.T__23) | (1 << prologParser.T__24) | (1 << prologParser.T__25) | (1 << prologParser.T__26) | (1 << prologParser.T__27) | (1 << prologParser.T__28) | (1 << prologParser.T__29) | (1 << prologParser.T__30))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (prologParser.T__31 - 32)) | (1 << (prologParser.T__32 - 32)) | (1 << (prologParser.T__33 - 32)) | (1 << (prologParser.T__34 - 32)) | (1 << (prologParser.T__35 - 32)) | (1 << (prologParser.T__36 - 32)) | (1 << (prologParser.T__37 - 32)) | (1 << (prologParser.T__38 - 32)) | (1 << (prologParser.T__39 - 32)) | (1 << (prologParser.T__40 - 32)) | (1 << (prologParser.T__41 - 32)) | (1 << (prologParser.T__42 - 32)) | (1 << (prologParser.T__43 - 32)) | (1 << (prologParser.T__44 - 32)) | (1 << (prologParser.T__45 - 32)) | (1 << (prologParser.T__46 - 32)) | (1 << (prologParser.T__47 - 32)) | (1 << (prologParser.T__48 - 32)) | (1 << (prologParser.T__49 - 32)) | (1 << (prologParser.T__50 - 32)) | (1 << (prologParser.LETTER_DIGIT - 32)) | (1 << (prologParser.VARIABLE - 32)) | (1 << (prologParser.DECIMAL - 32)) | (1 << (prologParser.BINARY - 32)) | (1 << (prologParser.OCTAL - 32)) | (1 << (prologParser.HEX - 32)) | (1 << (prologParser.CHARACTER_CODE_CONSTANT - 32)) | (1 << (prologParser.FLOAT - 32)) | (1 << (prologParser.GRAPHIC_TOKEN - 32)) | (1 << (prologParser.QUOTED - 32)) | (1 << (prologParser.DOUBLE_QUOTED_LIST - 32)) | (1 << (prologParser.BACK_QUOTED_STRING - 32)))) !== 0)) {
				{
				this.state = 18;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
				case 1:
					{
					this.state = 16;
					this.directive();
					}
					break;

				case 2:
					{
					this.state = 17;
					this.clause();
					}
					break;
				}
				}
				this.state = 22;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 23;
			this.match(prologParser.EOF);
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
	public directive(): DirectiveContext {
		let _localctx: DirectiveContext = new DirectiveContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, prologParser.RULE_directive);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 25;
			this.match(prologParser.T__0);
			this.state = 26;
			this.term(0);
			this.state = 27;
			this.match(prologParser.T__1);
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
	public clause(): ClauseContext {
		let _localctx: ClauseContext = new ClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, prologParser.RULE_clause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 29;
			this.term(0);
			this.state = 30;
			this.match(prologParser.T__1);
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
	public termlist(): TermlistContext {
		let _localctx: TermlistContext = new TermlistContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, prologParser.RULE_termlist);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 32;
			this.term(0);
			this.state = 37;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === prologParser.T__2) {
				{
				{
				this.state = 33;
				this.match(prologParser.T__2);
				this.state = 34;
				this.term(0);
				}
				}
				this.state = 39;
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

	public term(): TermContext;
	public term(_p: number): TermContext;
	// @RuleVersion(0)
	public term(_p?: number): TermContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: TermContext = new TermContext(this._ctx, _parentState);
		let _prevctx: TermContext = _localctx;
		let _startState: number = 8;
		this.enterRecursionRule(_localctx, 8, prologParser.RULE_term, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 75;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				{
				_localctx = new VariableContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 41;
				this.match(prologParser.VARIABLE);
				}
				break;

			case 2:
				{
				_localctx = new Braced_termContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 42;
				this.match(prologParser.T__3);
				this.state = 43;
				this.term(0);
				this.state = 44;
				this.match(prologParser.T__4);
				}
				break;

			case 3:
				{
				_localctx = new Integer_termContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 47;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === prologParser.T__5) {
					{
					this.state = 46;
					this.match(prologParser.T__5);
					}
				}

				this.state = 49;
				this.integer();
				}
				break;

			case 4:
				{
				_localctx = new FloatContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 51;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === prologParser.T__5) {
					{
					this.state = 50;
					this.match(prologParser.T__5);
					}
				}

				this.state = 53;
				this.match(prologParser.FLOAT);
				}
				break;

			case 5:
				{
				_localctx = new Compound_termContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 54;
				this.atom();
				this.state = 55;
				this.match(prologParser.T__3);
				this.state = 56;
				this.termlist();
				this.state = 57;
				this.match(prologParser.T__4);
				}
				break;

			case 6:
				{
				_localctx = new Unary_operatorContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 59;
				this.operator();
				this.state = 60;
				this.term(4);
				}
				break;

			case 7:
				{
				_localctx = new List_termContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 62;
				this.match(prologParser.T__6);
				this.state = 63;
				this.termlist();
				this.state = 66;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === prologParser.T__7) {
					{
					this.state = 64;
					this.match(prologParser.T__7);
					this.state = 65;
					this.term(0);
					}
				}

				this.state = 68;
				this.match(prologParser.T__8);
				}
				break;

			case 8:
				{
				_localctx = new Curly_bracketed_termContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 70;
				this.match(prologParser.T__9);
				this.state = 71;
				this.termlist();
				this.state = 72;
				this.match(prologParser.T__10);
				}
				break;

			case 9:
				{
				_localctx = new Atom_termContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 74;
				this.atom();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 83;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new Binary_operatorContext(new TermContext(_parentctx, _parentState));
					this.pushNewRecursionContext(_localctx, _startState, prologParser.RULE_term);
					this.state = 77;
					if (!(this.precpred(this._ctx, 5))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 5)");
					}
					this.state = 78;
					this.operator();
					this.state = 79;
					this.term(5);
					}
					}
				}
				this.state = 85;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
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
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public operator(): OperatorContext {
		let _localctx: OperatorContext = new OperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, prologParser.RULE_operator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 86;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << prologParser.T__0) | (1 << prologParser.T__2) | (1 << prologParser.T__5) | (1 << prologParser.T__11) | (1 << prologParser.T__12) | (1 << prologParser.T__13) | (1 << prologParser.T__14) | (1 << prologParser.T__15) | (1 << prologParser.T__16) | (1 << prologParser.T__17) | (1 << prologParser.T__18) | (1 << prologParser.T__19) | (1 << prologParser.T__20) | (1 << prologParser.T__21) | (1 << prologParser.T__22) | (1 << prologParser.T__23) | (1 << prologParser.T__24) | (1 << prologParser.T__25) | (1 << prologParser.T__26) | (1 << prologParser.T__27) | (1 << prologParser.T__28) | (1 << prologParser.T__29) | (1 << prologParser.T__30))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (prologParser.T__31 - 32)) | (1 << (prologParser.T__32 - 32)) | (1 << (prologParser.T__33 - 32)) | (1 << (prologParser.T__34 - 32)) | (1 << (prologParser.T__35 - 32)) | (1 << (prologParser.T__36 - 32)) | (1 << (prologParser.T__37 - 32)) | (1 << (prologParser.T__38 - 32)) | (1 << (prologParser.T__39 - 32)) | (1 << (prologParser.T__40 - 32)) | (1 << (prologParser.T__41 - 32)) | (1 << (prologParser.T__42 - 32)) | (1 << (prologParser.T__43 - 32)) | (1 << (prologParser.T__44 - 32)) | (1 << (prologParser.T__45 - 32)) | (1 << (prologParser.T__46 - 32)) | (1 << (prologParser.T__47 - 32)) | (1 << (prologParser.T__48 - 32)) | (1 << (prologParser.T__49 - 32)))) !== 0))) {
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
	public atom(): AtomContext {
		let _localctx: AtomContext = new AtomContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, prologParser.RULE_atom);
		try {
			this.state = 99;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case prologParser.T__6:
				_localctx = new Empty_listContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 88;
				this.match(prologParser.T__6);
				this.state = 89;
				this.match(prologParser.T__8);
				}
				break;
			case prologParser.T__9:
				_localctx = new Empty_bracesContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 90;
				this.match(prologParser.T__9);
				this.state = 91;
				this.match(prologParser.T__10);
				}
				break;
			case prologParser.LETTER_DIGIT:
				_localctx = new NameContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 92;
				this.match(prologParser.LETTER_DIGIT);
				}
				break;
			case prologParser.GRAPHIC_TOKEN:
				_localctx = new GraphicContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 93;
				this.match(prologParser.GRAPHIC_TOKEN);
				}
				break;
			case prologParser.QUOTED:
				_localctx = new Quoted_stringContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 94;
				this.match(prologParser.QUOTED);
				}
				break;
			case prologParser.DOUBLE_QUOTED_LIST:
				_localctx = new Dq_stringContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 95;
				this.match(prologParser.DOUBLE_QUOTED_LIST);
				}
				break;
			case prologParser.BACK_QUOTED_STRING:
				_localctx = new Backq_stringContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 96;
				this.match(prologParser.BACK_QUOTED_STRING);
				}
				break;
			case prologParser.T__17:
				_localctx = new SemicolonContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 97;
				this.match(prologParser.T__17);
				}
				break;
			case prologParser.T__50:
				_localctx = new CutContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 98;
				this.match(prologParser.T__50);
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
	public integer(): IntegerContext {
		let _localctx: IntegerContext = new IntegerContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, prologParser.RULE_integer);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 101;
			_la = this._input.LA(1);
			if (!(((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & ((1 << (prologParser.DECIMAL - 54)) | (1 << (prologParser.BINARY - 54)) | (1 << (prologParser.OCTAL - 54)) | (1 << (prologParser.HEX - 54)) | (1 << (prologParser.CHARACTER_CODE_CONSTANT - 54)))) !== 0))) {
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

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 4:
			return this.term_sempred(_localctx as TermContext, predIndex);
		}
		return true;
	}
	private term_sempred(_localctx: TermContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 5);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03Dj\x04\x02\t\x02" +
		"\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07\t\x07" +
		"\x04\b\t\b\x04\t\t\t\x03\x02\x03\x02\x07\x02\x15\n\x02\f\x02\x0E\x02\x18" +
		"\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04" +
		"\x03\x04\x03\x05\x03\x05\x03\x05\x07\x05&\n\x05\f\x05\x0E\x05)\v\x05\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x062\n\x06\x03" +
		"\x06\x03\x06\x05\x066\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06E" +
		"\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06" +
		"N\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x07\x06T\n\x06\f\x06\x0E\x06W" +
		"\v\x06\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b" +
		"\x03\b\x03\b\x03\b\x05\bf\n\b\x03\t\x03\t\x03\t\x02\x02\x03\n\n\x02\x02" +
		"\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x02\x04\x06\x02\x03" +
		"\x03\x05\x05\b\b\x0E4\x03\x028<\x02x\x02\x16\x03\x02\x02\x02\x04\x1B\x03" +
		"\x02\x02\x02\x06\x1F\x03\x02\x02\x02\b\"\x03\x02\x02\x02\nM\x03\x02\x02" +
		"\x02\fX\x03\x02\x02\x02\x0Ee\x03\x02\x02\x02\x10g\x03\x02\x02\x02\x12" +
		"\x15\x05\x04\x03\x02\x13\x15\x05\x06\x04\x02\x14\x12\x03\x02\x02\x02\x14" +
		"\x13\x03\x02\x02\x02\x15\x18\x03\x02\x02\x02\x16\x14\x03\x02\x02\x02\x16" +
		"\x17\x03\x02\x02\x02\x17\x19\x03\x02\x02\x02\x18\x16\x03\x02\x02\x02\x19" +
		"\x1A\x07\x02\x02\x03\x1A\x03\x03\x02\x02\x02\x1B\x1C\x07\x03\x02\x02\x1C" +
		"\x1D\x05\n\x06\x02\x1D\x1E\x07\x04\x02\x02\x1E\x05\x03\x02\x02\x02\x1F" +
		" \x05\n\x06\x02 !\x07\x04\x02\x02!\x07\x03\x02\x02\x02\"\'\x05\n\x06\x02" +
		"#$\x07\x05\x02\x02$&\x05\n\x06\x02%#\x03\x02\x02\x02&)\x03\x02\x02\x02" +
		"\'%\x03\x02\x02\x02\'(\x03\x02\x02\x02(\t\x03\x02\x02\x02)\'\x03\x02\x02" +
		"\x02*+\b\x06\x01\x02+N\x077\x02\x02,-\x07\x06\x02\x02-.\x05\n\x06\x02" +
		"./\x07\x07\x02\x02/N\x03\x02\x02\x0202\x07\b\x02\x0210\x03\x02\x02\x02" +
		"12\x03\x02\x02\x0223\x03\x02\x02\x023N\x05\x10\t\x0246\x07\b\x02\x025" +
		"4\x03\x02\x02\x0256\x03\x02\x02\x0267\x03\x02\x02\x027N\x07=\x02\x028" +
		"9\x05\x0E\b\x029:\x07\x06\x02\x02:;\x05\b\x05\x02;<\x07\x07\x02\x02<N" +
		"\x03\x02\x02\x02=>\x05\f\x07\x02>?\x05\n\x06\x06?N\x03\x02\x02\x02@A\x07" +
		"\t\x02\x02AD\x05\b\x05\x02BC\x07\n\x02\x02CE\x05\n\x06\x02DB\x03\x02\x02" +
		"\x02DE\x03\x02\x02\x02EF\x03\x02\x02\x02FG\x07\v\x02\x02GN\x03\x02\x02" +
		"\x02HI\x07\f\x02\x02IJ\x05\b\x05\x02JK\x07\r\x02\x02KN\x03\x02\x02\x02" +
		"LN\x05\x0E\b\x02M*\x03\x02\x02\x02M,\x03\x02\x02\x02M1\x03\x02\x02\x02" +
		"M5\x03\x02\x02\x02M8\x03\x02\x02\x02M=\x03\x02\x02\x02M@\x03\x02\x02\x02" +
		"MH\x03\x02\x02\x02ML\x03\x02\x02\x02NU\x03\x02\x02\x02OP\f\x07\x02\x02" +
		"PQ\x05\f\x07\x02QR\x05\n\x06\x07RT\x03\x02\x02\x02SO\x03\x02\x02\x02T" +
		"W\x03\x02\x02\x02US\x03\x02\x02\x02UV\x03\x02\x02\x02V\v\x03\x02\x02\x02" +
		"WU\x03\x02\x02\x02XY\t\x02\x02\x02Y\r\x03\x02\x02\x02Z[\x07\t\x02\x02" +
		"[f\x07\v\x02\x02\\]\x07\f\x02\x02]f\x07\r\x02\x02^f\x076\x02\x02_f\x07" +
		">\x02\x02`f\x07?\x02\x02af\x07@\x02\x02bf\x07A\x02\x02cf\x07\x14\x02\x02" +
		"df\x075\x02\x02eZ\x03\x02\x02\x02e\\\x03\x02\x02\x02e^\x03\x02\x02\x02" +
		"e_\x03\x02\x02\x02e`\x03\x02\x02\x02ea\x03\x02\x02\x02eb\x03\x02\x02\x02" +
		"ec\x03\x02\x02\x02ed\x03\x02\x02\x02f\x0F\x03\x02\x02\x02gh\t\x03\x02" +
		"\x02h\x11\x03\x02\x02\x02\v\x14\x16\'15DMUe";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!prologParser.__ATN) {
			prologParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(prologParser._serializedATN));
		}

		return prologParser.__ATN;
	}

}

export class P_textContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(prologParser.EOF, 0); }
	public directive(): DirectiveContext[];
	public directive(i: number): DirectiveContext;
	public directive(i?: number): DirectiveContext | DirectiveContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DirectiveContext);
		} else {
			return this.getRuleContext(i, DirectiveContext);
		}
	}
	public clause(): ClauseContext[];
	public clause(i: number): ClauseContext;
	public clause(i?: number): ClauseContext | ClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ClauseContext);
		} else {
			return this.getRuleContext(i, ClauseContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return prologParser.RULE_p_text; }
	// @Override
	public enterRule(listener: prologListener): void {
		if (listener.enterP_text) {
			listener.enterP_text(this);
		}
	}
	// @Override
	public exitRule(listener: prologListener): void {
		if (listener.exitP_text) {
			listener.exitP_text(this);
		}
	}
}


export class DirectiveContext extends ParserRuleContext {
	public term(): TermContext {
		return this.getRuleContext(0, TermContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return prologParser.RULE_directive; }
	// @Override
	public enterRule(listener: prologListener): void {
		if (listener.enterDirective) {
			listener.enterDirective(this);
		}
	}
	// @Override
	public exitRule(listener: prologListener): void {
		if (listener.exitDirective) {
			listener.exitDirective(this);
		}
	}
}


export class ClauseContext extends ParserRuleContext {
	public term(): TermContext {
		return this.getRuleContext(0, TermContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return prologParser.RULE_clause; }
	// @Override
	public enterRule(listener: prologListener): void {
		if (listener.enterClause) {
			listener.enterClause(this);
		}
	}
	// @Override
	public exitRule(listener: prologListener): void {
		if (listener.exitClause) {
			listener.exitClause(this);
		}
	}
}


export class TermlistContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return prologParser.RULE_termlist; }
	// @Override
	public enterRule(listener: prologListener): void {
		if (listener.enterTermlist) {
			listener.enterTermlist(this);
		}
	}
	// @Override
	public exitRule(listener: prologListener): void {
		if (listener.exitTermlist) {
			listener.exitTermlist(this);
		}
	}
}


export class TermContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return prologParser.RULE_term; }
	public copyFrom(ctx: TermContext): void {
		super.copyFrom(ctx);
	}
}
export class VariableContext extends TermContext {
	public VARIABLE(): TerminalNode { return this.getToken(prologParser.VARIABLE, 0); }
	constructor(ctx: TermContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: prologListener): void {
		if (listener.enterVariable) {
			listener.enterVariable(this);
		}
	}
	// @Override
	public exitRule(listener: prologListener): void {
		if (listener.exitVariable) {
			listener.exitVariable(this);
		}
	}
}
export class Braced_termContext extends TermContext {
	public term(): TermContext {
		return this.getRuleContext(0, TermContext);
	}
	constructor(ctx: TermContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: prologListener): void {
		if (listener.enterBraced_term) {
			listener.enterBraced_term(this);
		}
	}
	// @Override
	public exitRule(listener: prologListener): void {
		if (listener.exitBraced_term) {
			listener.exitBraced_term(this);
		}
	}
}
export class Integer_termContext extends TermContext {
	public integer(): IntegerContext {
		return this.getRuleContext(0, IntegerContext);
	}
	constructor(ctx: TermContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: prologListener): void {
		if (listener.enterInteger_term) {
			listener.enterInteger_term(this);
		}
	}
	// @Override
	public exitRule(listener: prologListener): void {
		if (listener.exitInteger_term) {
			listener.exitInteger_term(this);
		}
	}
}
export class FloatContext extends TermContext {
	public FLOAT(): TerminalNode { return this.getToken(prologParser.FLOAT, 0); }
	constructor(ctx: TermContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: prologListener): void {
		if (listener.enterFloat) {
			listener.enterFloat(this);
		}
	}
	// @Override
	public exitRule(listener: prologListener): void {
		if (listener.exitFloat) {
			listener.exitFloat(this);
		}
	}
}
export class Compound_termContext extends TermContext {
	public atom(): AtomContext {
		return this.getRuleContext(0, AtomContext);
	}
	public termlist(): TermlistContext {
		return this.getRuleContext(0, TermlistContext);
	}
	constructor(ctx: TermContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: prologListener): void {
		if (listener.enterCompound_term) {
			listener.enterCompound_term(this);
		}
	}
	// @Override
	public exitRule(listener: prologListener): void {
		if (listener.exitCompound_term) {
			listener.exitCompound_term(this);
		}
	}
}
export class Binary_operatorContext extends TermContext {
	public term(): TermContext[];
	public term(i: number): TermContext;
	public term(i?: number): TermContext | TermContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TermContext);
		} else {
			return this.getRuleContext(i, TermContext);
		}
	}
	public operator(): OperatorContext {
		return this.getRuleContext(0, OperatorContext);
	}
	constructor(ctx: TermContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: prologListener): void {
		if (listener.enterBinary_operator) {
			listener.enterBinary_operator(this);
		}
	}
	// @Override
	public exitRule(listener: prologListener): void {
		if (listener.exitBinary_operator) {
			listener.exitBinary_operator(this);
		}
	}
}
export class Unary_operatorContext extends TermContext {
	public operator(): OperatorContext {
		return this.getRuleContext(0, OperatorContext);
	}
	public term(): TermContext {
		return this.getRuleContext(0, TermContext);
	}
	constructor(ctx: TermContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: prologListener): void {
		if (listener.enterUnary_operator) {
			listener.enterUnary_operator(this);
		}
	}
	// @Override
	public exitRule(listener: prologListener): void {
		if (listener.exitUnary_operator) {
			listener.exitUnary_operator(this);
		}
	}
}
export class List_termContext extends TermContext {
	public termlist(): TermlistContext {
		return this.getRuleContext(0, TermlistContext);
	}
	public term(): TermContext | undefined {
		return this.tryGetRuleContext(0, TermContext);
	}
	constructor(ctx: TermContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: prologListener): void {
		if (listener.enterList_term) {
			listener.enterList_term(this);
		}
	}
	// @Override
	public exitRule(listener: prologListener): void {
		if (listener.exitList_term) {
			listener.exitList_term(this);
		}
	}
}
export class Curly_bracketed_termContext extends TermContext {
	public termlist(): TermlistContext {
		return this.getRuleContext(0, TermlistContext);
	}
	constructor(ctx: TermContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: prologListener): void {
		if (listener.enterCurly_bracketed_term) {
			listener.enterCurly_bracketed_term(this);
		}
	}
	// @Override
	public exitRule(listener: prologListener): void {
		if (listener.exitCurly_bracketed_term) {
			listener.exitCurly_bracketed_term(this);
		}
	}
}
export class Atom_termContext extends TermContext {
	public atom(): AtomContext {
		return this.getRuleContext(0, AtomContext);
	}
	constructor(ctx: TermContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: prologListener): void {
		if (listener.enterAtom_term) {
			listener.enterAtom_term(this);
		}
	}
	// @Override
	public exitRule(listener: prologListener): void {
		if (listener.exitAtom_term) {
			listener.exitAtom_term(this);
		}
	}
}


export class OperatorContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return prologParser.RULE_operator; }
	// @Override
	public enterRule(listener: prologListener): void {
		if (listener.enterOperator) {
			listener.enterOperator(this);
		}
	}
	// @Override
	public exitRule(listener: prologListener): void {
		if (listener.exitOperator) {
			listener.exitOperator(this);
		}
	}
}


export class AtomContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return prologParser.RULE_atom; }
	public copyFrom(ctx: AtomContext): void {
		super.copyFrom(ctx);
	}
}
export class Empty_listContext extends AtomContext {
	constructor(ctx: AtomContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: prologListener): void {
		if (listener.enterEmpty_list) {
			listener.enterEmpty_list(this);
		}
	}
	// @Override
	public exitRule(listener: prologListener): void {
		if (listener.exitEmpty_list) {
			listener.exitEmpty_list(this);
		}
	}
}
export class Empty_bracesContext extends AtomContext {
	constructor(ctx: AtomContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: prologListener): void {
		if (listener.enterEmpty_braces) {
			listener.enterEmpty_braces(this);
		}
	}
	// @Override
	public exitRule(listener: prologListener): void {
		if (listener.exitEmpty_braces) {
			listener.exitEmpty_braces(this);
		}
	}
}
export class NameContext extends AtomContext {
	public LETTER_DIGIT(): TerminalNode { return this.getToken(prologParser.LETTER_DIGIT, 0); }
	constructor(ctx: AtomContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: prologListener): void {
		if (listener.enterName) {
			listener.enterName(this);
		}
	}
	// @Override
	public exitRule(listener: prologListener): void {
		if (listener.exitName) {
			listener.exitName(this);
		}
	}
}
export class GraphicContext extends AtomContext {
	public GRAPHIC_TOKEN(): TerminalNode { return this.getToken(prologParser.GRAPHIC_TOKEN, 0); }
	constructor(ctx: AtomContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: prologListener): void {
		if (listener.enterGraphic) {
			listener.enterGraphic(this);
		}
	}
	// @Override
	public exitRule(listener: prologListener): void {
		if (listener.exitGraphic) {
			listener.exitGraphic(this);
		}
	}
}
export class Quoted_stringContext extends AtomContext {
	public QUOTED(): TerminalNode { return this.getToken(prologParser.QUOTED, 0); }
	constructor(ctx: AtomContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: prologListener): void {
		if (listener.enterQuoted_string) {
			listener.enterQuoted_string(this);
		}
	}
	// @Override
	public exitRule(listener: prologListener): void {
		if (listener.exitQuoted_string) {
			listener.exitQuoted_string(this);
		}
	}
}
export class Dq_stringContext extends AtomContext {
	public DOUBLE_QUOTED_LIST(): TerminalNode { return this.getToken(prologParser.DOUBLE_QUOTED_LIST, 0); }
	constructor(ctx: AtomContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: prologListener): void {
		if (listener.enterDq_string) {
			listener.enterDq_string(this);
		}
	}
	// @Override
	public exitRule(listener: prologListener): void {
		if (listener.exitDq_string) {
			listener.exitDq_string(this);
		}
	}
}
export class Backq_stringContext extends AtomContext {
	public BACK_QUOTED_STRING(): TerminalNode { return this.getToken(prologParser.BACK_QUOTED_STRING, 0); }
	constructor(ctx: AtomContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: prologListener): void {
		if (listener.enterBackq_string) {
			listener.enterBackq_string(this);
		}
	}
	// @Override
	public exitRule(listener: prologListener): void {
		if (listener.exitBackq_string) {
			listener.exitBackq_string(this);
		}
	}
}
export class SemicolonContext extends AtomContext {
	constructor(ctx: AtomContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: prologListener): void {
		if (listener.enterSemicolon) {
			listener.enterSemicolon(this);
		}
	}
	// @Override
	public exitRule(listener: prologListener): void {
		if (listener.exitSemicolon) {
			listener.exitSemicolon(this);
		}
	}
}
export class CutContext extends AtomContext {
	constructor(ctx: AtomContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: prologListener): void {
		if (listener.enterCut) {
			listener.enterCut(this);
		}
	}
	// @Override
	public exitRule(listener: prologListener): void {
		if (listener.exitCut) {
			listener.exitCut(this);
		}
	}
}


export class IntegerContext extends ParserRuleContext {
	public DECIMAL(): TerminalNode | undefined { return this.tryGetToken(prologParser.DECIMAL, 0); }
	public CHARACTER_CODE_CONSTANT(): TerminalNode | undefined { return this.tryGetToken(prologParser.CHARACTER_CODE_CONSTANT, 0); }
	public BINARY(): TerminalNode | undefined { return this.tryGetToken(prologParser.BINARY, 0); }
	public OCTAL(): TerminalNode | undefined { return this.tryGetToken(prologParser.OCTAL, 0); }
	public HEX(): TerminalNode | undefined { return this.tryGetToken(prologParser.HEX, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return prologParser.RULE_integer; }
	// @Override
	public enterRule(listener: prologListener): void {
		if (listener.enterInteger) {
			listener.enterInteger(this);
		}
	}
	// @Override
	public exitRule(listener: prologListener): void {
		if (listener.exitInteger) {
			listener.exitInteger(this);
		}
	}
}


