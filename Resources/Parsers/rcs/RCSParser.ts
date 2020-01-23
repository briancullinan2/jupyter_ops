// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/rcs/RCS.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { RCSListener } from "./RCSListener";
import { RCSVisitor } from "./RCSVisitor";


export class RCSParser extends Parser {
	public static readonly COMMA = 1;
	public static readonly BRANCH = 2;
	public static readonly LOGS = 3;
	public static readonly ADMIN = 4;
	public static readonly DELTAS = 5;
	public static readonly LITERAL_HEAD = 6;
	public static readonly LITERAL_BRANCH = 7;
	public static readonly LITERAL_ACCESS = 8;
	public static readonly LITERAL_SYMBOLS = 9;
	public static readonly LITERAL_LOCKS = 10;
	public static readonly LITERAL_STRICT = 11;
	public static readonly LITERAL_COMMENT = 12;
	public static readonly LITERAL_EXPAND = 13;
	public static readonly LITERAL_DATE = 14;
	public static readonly LITERAL_AUTHOR = 15;
	public static readonly LITERAL_STATE = 16;
	public static readonly LITERAL_BRANCHES = 17;
	public static readonly LITERAL_NEXT = 18;
	public static readonly LITERAL_DESC = 19;
	public static readonly LITERAL_LOG = 20;
	public static readonly LITERAL_TEXT = 21;
	public static readonly IDENT = 22;
	public static readonly INT = 23;
	public static readonly REVISION = 24;
	public static readonly STRING = 25;
	public static readonly SEMI = 26;
	public static readonly COLON = 27;
	public static readonly WS = 28;
	public static readonly RULE_rcstext = 0;
	public static readonly RULE_rcsheader = 1;
	public static readonly RULE_rcsrevisions = 2;
	public static readonly RULE_admin = 3;
	public static readonly RULE_head = 4;
	public static readonly RULE_branch = 5;
	public static readonly RULE_access = 6;
	public static readonly RULE_symbols = 7;
	public static readonly RULE_tags = 8;
	public static readonly RULE_locks = 9;
	public static readonly RULE_strict = 10;
	public static readonly RULE_comment = 11;
	public static readonly RULE_expand = 12;
	public static readonly RULE_deltalist = 13;
	public static readonly RULE_delta = 14;
	public static readonly RULE_delta_date = 15;
	public static readonly RULE_delta_author = 16;
	public static readonly RULE_delta_state = 17;
	public static readonly RULE_delta_branches = 18;
	public static readonly RULE_delta_next = 19;
	public static readonly RULE_desc = 20;
	public static readonly RULE_deltatextlist = 21;
	public static readonly RULE_deltatext = 22;
	public static readonly RULE_deltatext_log = 23;
	public static readonly RULE_deltatext_text = 24;
	public static readonly RULE_newphrase = 25;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"rcstext", "rcsheader", "rcsrevisions", "admin", "head", "branch", "access", 
		"symbols", "tags", "locks", "strict", "comment", "expand", "deltalist", 
		"delta", "delta_date", "delta_author", "delta_state", "delta_branches", 
		"delta_next", "desc", "deltatextlist", "deltatext", "deltatext_log", "deltatext_text", 
		"newphrase",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'COMMA'", "'BRANCH'", "'LOGS'", "'ADMIN'", "'DELTAS'", "'head'", 
		"'branch'", "'access'", "'symbols'", "'locks'", "'strict'", "'comment'", 
		"'expand'", "'date'", "'author'", "'state'", "'branches'", "'next'", "'desc'", 
		"'log'", "'text'", undefined, undefined, undefined, undefined, "';'", 
		"':'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "COMMA", "BRANCH", "LOGS", "ADMIN", "DELTAS", "LITERAL_HEAD", 
		"LITERAL_BRANCH", "LITERAL_ACCESS", "LITERAL_SYMBOLS", "LITERAL_LOCKS", 
		"LITERAL_STRICT", "LITERAL_COMMENT", "LITERAL_EXPAND", "LITERAL_DATE", 
		"LITERAL_AUTHOR", "LITERAL_STATE", "LITERAL_BRANCHES", "LITERAL_NEXT", 
		"LITERAL_DESC", "LITERAL_LOG", "LITERAL_TEXT", "IDENT", "INT", "REVISION", 
		"STRING", "SEMI", "COLON", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(RCSParser._LITERAL_NAMES, RCSParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return RCSParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "RCS.g4"; }

	// @Override
	public get ruleNames(): string[] { return RCSParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return RCSParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(RCSParser._ATN, this);
	}
	// @RuleVersion(0)
	public rcstext(): RcstextContext {
		let _localctx: RcstextContext = new RcstextContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, RCSParser.RULE_rcstext);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 52;
			this.admin();
			this.state = 53;
			this.deltalist();
			this.state = 54;
			this.desc();
			this.state = 55;
			this.deltatextlist();
			this.state = 56;
			this.match(RCSParser.EOF);
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
	public rcsheader(): RcsheaderContext {
		let _localctx: RcsheaderContext = new RcsheaderContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, RCSParser.RULE_rcsheader);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 58;
			this.admin();
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
	public rcsrevisions(): RcsrevisionsContext {
		let _localctx: RcsrevisionsContext = new RcsrevisionsContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, RCSParser.RULE_rcsrevisions);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 60;
			this.admin();
			this.state = 61;
			this.deltalist();
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
	public admin(): AdminContext {
		let _localctx: AdminContext = new AdminContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, RCSParser.RULE_admin);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 63;
			this.head();
			this.state = 65;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RCSParser.LITERAL_BRANCH) {
				{
				this.state = 64;
				this.branch();
				}
			}

			this.state = 67;
			this.access();
			this.state = 68;
			this.symbols();
			this.state = 70;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RCSParser.LITERAL_LOCKS) {
				{
				this.state = 69;
				this.locks();
				}
			}

			this.state = 73;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RCSParser.LITERAL_STRICT) {
				{
				this.state = 72;
				this.strict();
				}
			}

			this.state = 76;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RCSParser.LITERAL_COMMENT) {
				{
				this.state = 75;
				this.comment();
				}
			}

			this.state = 79;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RCSParser.LITERAL_EXPAND) {
				{
				this.state = 78;
				this.expand();
				}
			}

			this.state = 84;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === RCSParser.IDENT) {
				{
				{
				this.state = 81;
				this.newphrase();
				}
				}
				this.state = 86;
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
	public head(): HeadContext {
		let _localctx: HeadContext = new HeadContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, RCSParser.RULE_head);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 87;
			this.match(RCSParser.LITERAL_HEAD);
			this.state = 88;
			this.match(RCSParser.REVISION);
			this.state = 89;
			this.match(RCSParser.SEMI);
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
	public branch(): BranchContext {
		let _localctx: BranchContext = new BranchContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, RCSParser.RULE_branch);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 91;
			this.match(RCSParser.LITERAL_BRANCH);
			this.state = 92;
			this.match(RCSParser.BRANCH);
			this.state = 93;
			this.match(RCSParser.SEMI);
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
	public access(): AccessContext {
		let _localctx: AccessContext = new AccessContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, RCSParser.RULE_access);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 95;
			this.match(RCSParser.LITERAL_ACCESS);
			this.state = 99;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === RCSParser.IDENT) {
				{
				{
				this.state = 96;
				this.match(RCSParser.IDENT);
				}
				}
				this.state = 101;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 102;
			this.match(RCSParser.SEMI);
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
	public symbols(): SymbolsContext {
		let _localctx: SymbolsContext = new SymbolsContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, RCSParser.RULE_symbols);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 104;
			this.match(RCSParser.LITERAL_SYMBOLS);
			this.state = 108;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === RCSParser.IDENT) {
				{
				{
				this.state = 105;
				this.tags();
				}
				}
				this.state = 110;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 111;
			this.match(RCSParser.SEMI);
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
	public tags(): TagsContext {
		let _localctx: TagsContext = new TagsContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, RCSParser.RULE_tags);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 113;
			this.match(RCSParser.IDENT);
			this.state = 114;
			this.match(RCSParser.COLON);
			this.state = 115;
			this.match(RCSParser.REVISION);
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
	public locks(): LocksContext {
		let _localctx: LocksContext = new LocksContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, RCSParser.RULE_locks);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 117;
			this.match(RCSParser.LITERAL_LOCKS);
			this.state = 121;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === RCSParser.IDENT) {
				{
				{
				this.state = 118;
				this.match(RCSParser.IDENT);
				}
				}
				this.state = 123;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 124;
			this.match(RCSParser.SEMI);
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
	public strict(): StrictContext {
		let _localctx: StrictContext = new StrictContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, RCSParser.RULE_strict);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 126;
			this.match(RCSParser.LITERAL_STRICT);
			this.state = 127;
			this.match(RCSParser.SEMI);
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
	public comment(): CommentContext {
		let _localctx: CommentContext = new CommentContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, RCSParser.RULE_comment);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 129;
			this.match(RCSParser.LITERAL_COMMENT);
			this.state = 131;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RCSParser.STRING) {
				{
				this.state = 130;
				this.match(RCSParser.STRING);
				}
			}

			this.state = 133;
			this.match(RCSParser.SEMI);
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
	public expand(): ExpandContext {
		let _localctx: ExpandContext = new ExpandContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, RCSParser.RULE_expand);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 135;
			this.match(RCSParser.LITERAL_EXPAND);
			this.state = 137;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RCSParser.STRING) {
				{
				this.state = 136;
				this.match(RCSParser.STRING);
				}
			}

			this.state = 139;
			this.match(RCSParser.SEMI);
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
	public deltalist(): DeltalistContext {
		let _localctx: DeltalistContext = new DeltalistContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, RCSParser.RULE_deltalist);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 144;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === RCSParser.REVISION) {
				{
				{
				this.state = 141;
				this.delta();
				}
				}
				this.state = 146;
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
	public delta(): DeltaContext {
		let _localctx: DeltaContext = new DeltaContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, RCSParser.RULE_delta);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 147;
			this.match(RCSParser.REVISION);
			this.state = 148;
			this.delta_date();
			this.state = 149;
			this.delta_author();
			this.state = 150;
			this.delta_state();
			this.state = 151;
			this.delta_branches();
			this.state = 152;
			this.delta_next();
			this.state = 156;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === RCSParser.IDENT) {
				{
				{
				this.state = 153;
				this.newphrase();
				}
				}
				this.state = 158;
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
	public delta_date(): Delta_dateContext {
		let _localctx: Delta_dateContext = new Delta_dateContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, RCSParser.RULE_delta_date);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 159;
			this.match(RCSParser.LITERAL_DATE);
			this.state = 160;
			this.match(RCSParser.REVISION);
			this.state = 161;
			this.match(RCSParser.SEMI);
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
	public delta_author(): Delta_authorContext {
		let _localctx: Delta_authorContext = new Delta_authorContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, RCSParser.RULE_delta_author);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 163;
			this.match(RCSParser.LITERAL_AUTHOR);
			this.state = 164;
			this.match(RCSParser.IDENT);
			this.state = 165;
			this.match(RCSParser.SEMI);
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
	public delta_state(): Delta_stateContext {
		let _localctx: Delta_stateContext = new Delta_stateContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, RCSParser.RULE_delta_state);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 167;
			this.match(RCSParser.LITERAL_STATE);
			this.state = 168;
			this.match(RCSParser.IDENT);
			this.state = 169;
			this.match(RCSParser.SEMI);
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
	public delta_branches(): Delta_branchesContext {
		let _localctx: Delta_branchesContext = new Delta_branchesContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, RCSParser.RULE_delta_branches);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 171;
			this.match(RCSParser.LITERAL_BRANCHES);
			this.state = 175;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === RCSParser.REVISION) {
				{
				{
				this.state = 172;
				this.match(RCSParser.REVISION);
				}
				}
				this.state = 177;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 178;
			this.match(RCSParser.SEMI);
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
	public delta_next(): Delta_nextContext {
		let _localctx: Delta_nextContext = new Delta_nextContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, RCSParser.RULE_delta_next);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 180;
			this.match(RCSParser.LITERAL_NEXT);
			this.state = 182;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RCSParser.REVISION) {
				{
				this.state = 181;
				this.match(RCSParser.REVISION);
				}
			}

			this.state = 184;
			this.match(RCSParser.SEMI);
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
	public desc(): DescContext {
		let _localctx: DescContext = new DescContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, RCSParser.RULE_desc);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 186;
			this.match(RCSParser.LITERAL_DESC);
			this.state = 187;
			this.match(RCSParser.STRING);
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
	public deltatextlist(): DeltatextlistContext {
		let _localctx: DeltatextlistContext = new DeltatextlistContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, RCSParser.RULE_deltatextlist);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 192;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === RCSParser.REVISION) {
				{
				{
				this.state = 189;
				this.deltatext();
				}
				}
				this.state = 194;
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
	public deltatext(): DeltatextContext {
		let _localctx: DeltatextContext = new DeltatextContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, RCSParser.RULE_deltatext);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 195;
			this.match(RCSParser.REVISION);
			this.state = 196;
			this.deltatext_log();
			this.state = 200;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === RCSParser.IDENT) {
				{
				{
				this.state = 197;
				this.newphrase();
				}
				}
				this.state = 202;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 203;
			this.deltatext_text();
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
	public deltatext_log(): Deltatext_logContext {
		let _localctx: Deltatext_logContext = new Deltatext_logContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, RCSParser.RULE_deltatext_log);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 205;
			this.match(RCSParser.LITERAL_LOG);
			this.state = 206;
			this.match(RCSParser.STRING);
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
	public deltatext_text(): Deltatext_textContext {
		let _localctx: Deltatext_textContext = new Deltatext_textContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, RCSParser.RULE_deltatext_text);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 208;
			this.match(RCSParser.LITERAL_TEXT);
			this.state = 209;
			this.match(RCSParser.STRING);
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
	public newphrase(): NewphraseContext {
		let _localctx: NewphraseContext = new NewphraseContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, RCSParser.RULE_newphrase);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 212;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 211;
				this.match(RCSParser.IDENT);
				}
				}
				this.state = 214;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === RCSParser.IDENT);
			this.state = 216;
			this.match(RCSParser.SEMI);
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x1E\xDD\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x03\x02\x03\x02\x03" +
		"\x02\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03" +
		"\x05\x03\x05\x05\x05D\n\x05\x03\x05\x03\x05\x03\x05\x05\x05I\n\x05\x03" +
		"\x05\x05\x05L\n\x05\x03\x05\x05\x05O\n\x05\x03\x05\x05\x05R\n\x05\x03" +
		"\x05\x07\x05U\n\x05\f\x05\x0E\x05X\v\x05\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x07\bd\n\b\f\b\x0E\bg\v\b" +
		"\x03\b\x03\b\x03\t\x03\t\x07\tm\n\t\f\t\x0E\tp\v\t\x03\t\x03\t\x03\n\x03" +
		"\n\x03\n\x03\n\x03\v\x03\v\x07\vz\n\v\f\v\x0E\v}\v\v\x03\v\x03\v\x03\f" +
		"\x03\f\x03\f\x03\r\x03\r\x05\r\x86\n\r\x03\r\x03\r\x03\x0E\x03\x0E\x05" +
		"\x0E\x8C\n\x0E\x03\x0E\x03\x0E\x03\x0F\x07\x0F\x91\n\x0F\f\x0F\x0E\x0F" +
		"\x94\v\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x07" +
		"\x10\x9D\n\x10\f\x10\x0E\x10\xA0\v\x10\x03\x11\x03\x11\x03\x11\x03\x11" +
		"\x03\x12\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x14" +
		"\x03\x14\x07\x14\xB0\n\x14\f\x14\x0E\x14\xB3\v\x14\x03\x14\x03\x14\x03" +
		"\x15\x03\x15\x05\x15\xB9\n\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16" +
		"\x03\x17\x07\x17\xC1\n\x17\f\x17\x0E\x17\xC4\v\x17\x03\x18\x03\x18\x03" +
		"\x18\x07\x18\xC9\n\x18\f\x18\x0E\x18\xCC\v\x18\x03\x18\x03\x18\x03\x19" +
		"\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x06\x1B\xD7\n\x1B\r\x1B" +
		"\x0E\x1B\xD8\x03\x1B\x03\x1B\x03\x1B\x02\x02\x02\x1C\x02\x02\x04\x02\x06" +
		"\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02" +
		"\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x02" +
		"2\x024\x02\x02\x02\x02\xD4\x026\x03\x02\x02\x02\x04<\x03\x02\x02\x02\x06" +
		">\x03\x02\x02\x02\bA\x03\x02\x02\x02\nY\x03\x02\x02\x02\f]\x03\x02\x02" +
		"\x02\x0Ea\x03\x02\x02\x02\x10j\x03\x02\x02\x02\x12s\x03\x02\x02\x02\x14" +
		"w\x03\x02\x02\x02\x16\x80\x03\x02\x02\x02\x18\x83\x03\x02\x02\x02\x1A" +
		"\x89\x03\x02\x02\x02\x1C\x92\x03\x02\x02\x02\x1E\x95\x03\x02\x02\x02 " +
		"\xA1\x03\x02\x02\x02\"\xA5\x03\x02\x02\x02$\xA9\x03\x02\x02\x02&\xAD\x03" +
		"\x02\x02\x02(\xB6\x03\x02\x02\x02*\xBC\x03\x02\x02\x02,\xC2\x03\x02\x02" +
		"\x02.\xC5\x03\x02\x02\x020\xCF\x03\x02\x02\x022\xD2\x03\x02\x02\x024\xD6" +
		"\x03\x02\x02\x0267\x05\b\x05\x0278\x05\x1C\x0F\x0289\x05*\x16\x029:\x05" +
		",\x17\x02:;\x07\x02\x02\x03;\x03\x03\x02\x02\x02<=\x05\b\x05\x02=\x05" +
		"\x03\x02\x02\x02>?\x05\b\x05\x02?@\x05\x1C\x0F\x02@\x07\x03\x02\x02\x02" +
		"AC\x05\n\x06\x02BD\x05\f\x07\x02CB\x03\x02\x02\x02CD\x03\x02\x02\x02D" +
		"E\x03\x02\x02\x02EF\x05\x0E\b\x02FH\x05\x10\t\x02GI\x05\x14\v\x02HG\x03" +
		"\x02\x02\x02HI\x03\x02\x02\x02IK\x03\x02\x02\x02JL\x05\x16\f\x02KJ\x03" +
		"\x02\x02\x02KL\x03\x02\x02\x02LN\x03\x02\x02\x02MO\x05\x18\r\x02NM\x03" +
		"\x02\x02\x02NO\x03\x02\x02\x02OQ\x03\x02\x02\x02PR\x05\x1A\x0E\x02QP\x03" +
		"\x02\x02\x02QR\x03\x02\x02\x02RV\x03\x02\x02\x02SU\x054\x1B\x02TS\x03" +
		"\x02\x02\x02UX\x03\x02\x02\x02VT\x03\x02\x02\x02VW\x03\x02\x02\x02W\t" +
		"\x03\x02\x02\x02XV\x03\x02\x02\x02YZ\x07\b\x02\x02Z[\x07\x1A\x02\x02[" +
		"\\\x07\x1C\x02\x02\\\v\x03\x02\x02\x02]^\x07\t\x02\x02^_\x07\x04\x02\x02" +
		"_`\x07\x1C\x02\x02`\r\x03\x02\x02\x02ae\x07\n\x02\x02bd\x07\x18\x02\x02" +
		"cb\x03\x02\x02\x02dg\x03\x02\x02\x02ec\x03\x02\x02\x02ef\x03\x02\x02\x02" +
		"fh\x03\x02\x02\x02ge\x03\x02\x02\x02hi\x07\x1C\x02\x02i\x0F\x03\x02\x02" +
		"\x02jn\x07\v\x02\x02km\x05\x12\n\x02lk\x03\x02\x02\x02mp\x03\x02\x02\x02" +
		"nl\x03\x02\x02\x02no\x03\x02\x02\x02oq\x03\x02\x02\x02pn\x03\x02\x02\x02" +
		"qr\x07\x1C\x02\x02r\x11\x03\x02\x02\x02st\x07\x18\x02\x02tu\x07\x1D\x02" +
		"\x02uv\x07\x1A\x02\x02v\x13\x03\x02\x02\x02w{\x07\f\x02\x02xz\x07\x18" +
		"\x02\x02yx\x03\x02\x02\x02z}\x03\x02\x02\x02{y\x03\x02\x02\x02{|\x03\x02" +
		"\x02\x02|~\x03\x02\x02\x02}{\x03\x02\x02\x02~\x7F\x07\x1C\x02\x02\x7F" +
		"\x15\x03\x02\x02\x02\x80\x81\x07\r\x02\x02\x81\x82\x07\x1C\x02\x02\x82" +
		"\x17\x03\x02\x02\x02\x83\x85\x07\x0E\x02\x02\x84\x86\x07\x1B\x02\x02\x85" +
		"\x84\x03\x02\x02\x02\x85\x86\x03\x02\x02\x02\x86\x87\x03\x02\x02\x02\x87" +
		"\x88\x07\x1C\x02\x02\x88\x19\x03\x02\x02\x02\x89\x8B\x07\x0F\x02\x02\x8A" +
		"\x8C\x07\x1B\x02\x02\x8B\x8A\x03\x02\x02\x02\x8B\x8C\x03\x02\x02\x02\x8C" +
		"\x8D\x03\x02\x02\x02\x8D\x8E\x07\x1C\x02\x02\x8E\x1B\x03\x02\x02\x02\x8F" +
		"\x91\x05\x1E\x10\x02\x90\x8F\x03\x02\x02\x02\x91\x94\x03\x02\x02\x02\x92" +
		"\x90\x03\x02\x02\x02\x92\x93\x03\x02\x02\x02\x93\x1D\x03\x02\x02\x02\x94" +
		"\x92\x03\x02\x02\x02\x95\x96\x07\x1A\x02\x02\x96\x97\x05 \x11\x02\x97" +
		"\x98\x05\"\x12\x02\x98\x99\x05$\x13\x02\x99\x9A\x05&\x14\x02\x9A\x9E\x05" +
		"(\x15\x02\x9B\x9D\x054\x1B\x02\x9C\x9B\x03\x02\x02\x02\x9D\xA0\x03\x02" +
		"\x02\x02\x9E\x9C\x03\x02\x02\x02\x9E\x9F\x03\x02\x02\x02\x9F\x1F\x03\x02" +
		"\x02\x02\xA0\x9E\x03\x02\x02\x02\xA1\xA2\x07\x10\x02\x02\xA2\xA3\x07\x1A" +
		"\x02\x02\xA3\xA4\x07\x1C\x02\x02\xA4!\x03\x02\x02\x02\xA5\xA6\x07\x11" +
		"\x02\x02\xA6\xA7\x07\x18\x02\x02\xA7\xA8\x07\x1C\x02\x02\xA8#\x03\x02" +
		"\x02\x02\xA9\xAA\x07\x12\x02\x02\xAA\xAB\x07\x18\x02\x02\xAB\xAC\x07\x1C" +
		"\x02\x02\xAC%\x03\x02\x02\x02\xAD\xB1\x07\x13\x02\x02\xAE\xB0\x07\x1A" +
		"\x02\x02\xAF\xAE\x03\x02\x02\x02\xB0\xB3\x03\x02\x02\x02\xB1\xAF\x03\x02" +
		"\x02\x02\xB1\xB2\x03\x02\x02\x02\xB2\xB4\x03\x02\x02\x02\xB3\xB1\x03\x02" +
		"\x02\x02\xB4\xB5\x07\x1C\x02\x02\xB5\'\x03\x02\x02\x02\xB6\xB8\x07\x14" +
		"\x02\x02\xB7\xB9\x07\x1A\x02\x02\xB8\xB7\x03\x02\x02\x02\xB8\xB9\x03\x02" +
		"\x02\x02\xB9\xBA\x03\x02\x02\x02\xBA\xBB\x07\x1C\x02\x02\xBB)\x03\x02" +
		"\x02\x02\xBC\xBD\x07\x15\x02\x02\xBD\xBE\x07\x1B\x02\x02\xBE+\x03\x02" +
		"\x02\x02\xBF\xC1\x05.\x18\x02\xC0\xBF\x03\x02\x02\x02\xC1\xC4\x03\x02" +
		"\x02\x02\xC2\xC0\x03\x02\x02\x02\xC2\xC3\x03\x02\x02\x02\xC3-\x03\x02" +
		"\x02\x02\xC4\xC2\x03\x02\x02\x02\xC5\xC6\x07\x1A\x02\x02\xC6\xCA\x050" +
		"\x19\x02\xC7\xC9\x054\x1B\x02\xC8\xC7\x03\x02\x02\x02\xC9\xCC\x03\x02" +
		"\x02\x02\xCA\xC8\x03\x02\x02\x02\xCA\xCB\x03\x02\x02\x02\xCB\xCD\x03\x02" +
		"\x02\x02\xCC\xCA\x03\x02\x02\x02\xCD\xCE\x052\x1A\x02\xCE/\x03\x02\x02" +
		"\x02\xCF\xD0\x07\x16\x02\x02\xD0\xD1\x07\x1B\x02\x02\xD11\x03\x02\x02" +
		"\x02\xD2\xD3\x07\x17\x02\x02\xD3\xD4\x07\x1B\x02\x02\xD43\x03\x02\x02" +
		"\x02\xD5\xD7\x07\x18\x02\x02\xD6\xD5\x03\x02\x02\x02\xD7\xD8\x03\x02\x02" +
		"\x02\xD8\xD6\x03\x02\x02\x02\xD8\xD9\x03\x02\x02\x02\xD9\xDA\x03\x02\x02" +
		"\x02\xDA\xDB\x07\x1C\x02\x02\xDB5\x03\x02\x02\x02\x14CHKNQVen{\x85\x8B" +
		"\x92\x9E\xB1\xB8\xC2\xCA\xD8";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!RCSParser.__ATN) {
			RCSParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(RCSParser._serializedATN));
		}

		return RCSParser.__ATN;
	}

}

export class RcstextContext extends ParserRuleContext {
	public admin(): AdminContext {
		return this.getRuleContext(0, AdminContext);
	}
	public deltalist(): DeltalistContext {
		return this.getRuleContext(0, DeltalistContext);
	}
	public desc(): DescContext {
		return this.getRuleContext(0, DescContext);
	}
	public deltatextlist(): DeltatextlistContext {
		return this.getRuleContext(0, DeltatextlistContext);
	}
	public EOF(): TerminalNode { return this.getToken(RCSParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RCSParser.RULE_rcstext; }
	// @Override
	public enterRule(listener: RCSListener): void {
		if (listener.enterRcstext) {
			listener.enterRcstext(this);
		}
	}
	// @Override
	public exitRule(listener: RCSListener): void {
		if (listener.exitRcstext) {
			listener.exitRcstext(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RCSVisitor<Result>): Result {
		if (visitor.visitRcstext) {
			return visitor.visitRcstext(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RcsheaderContext extends ParserRuleContext {
	public admin(): AdminContext {
		return this.getRuleContext(0, AdminContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RCSParser.RULE_rcsheader; }
	// @Override
	public enterRule(listener: RCSListener): void {
		if (listener.enterRcsheader) {
			listener.enterRcsheader(this);
		}
	}
	// @Override
	public exitRule(listener: RCSListener): void {
		if (listener.exitRcsheader) {
			listener.exitRcsheader(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RCSVisitor<Result>): Result {
		if (visitor.visitRcsheader) {
			return visitor.visitRcsheader(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RcsrevisionsContext extends ParserRuleContext {
	public admin(): AdminContext {
		return this.getRuleContext(0, AdminContext);
	}
	public deltalist(): DeltalistContext {
		return this.getRuleContext(0, DeltalistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RCSParser.RULE_rcsrevisions; }
	// @Override
	public enterRule(listener: RCSListener): void {
		if (listener.enterRcsrevisions) {
			listener.enterRcsrevisions(this);
		}
	}
	// @Override
	public exitRule(listener: RCSListener): void {
		if (listener.exitRcsrevisions) {
			listener.exitRcsrevisions(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RCSVisitor<Result>): Result {
		if (visitor.visitRcsrevisions) {
			return visitor.visitRcsrevisions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AdminContext extends ParserRuleContext {
	public head(): HeadContext {
		return this.getRuleContext(0, HeadContext);
	}
	public access(): AccessContext {
		return this.getRuleContext(0, AccessContext);
	}
	public symbols(): SymbolsContext {
		return this.getRuleContext(0, SymbolsContext);
	}
	public branch(): BranchContext | undefined {
		return this.tryGetRuleContext(0, BranchContext);
	}
	public locks(): LocksContext | undefined {
		return this.tryGetRuleContext(0, LocksContext);
	}
	public strict(): StrictContext | undefined {
		return this.tryGetRuleContext(0, StrictContext);
	}
	public comment(): CommentContext | undefined {
		return this.tryGetRuleContext(0, CommentContext);
	}
	public expand(): ExpandContext | undefined {
		return this.tryGetRuleContext(0, ExpandContext);
	}
	public newphrase(): NewphraseContext[];
	public newphrase(i: number): NewphraseContext;
	public newphrase(i?: number): NewphraseContext | NewphraseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NewphraseContext);
		} else {
			return this.getRuleContext(i, NewphraseContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RCSParser.RULE_admin; }
	// @Override
	public enterRule(listener: RCSListener): void {
		if (listener.enterAdmin) {
			listener.enterAdmin(this);
		}
	}
	// @Override
	public exitRule(listener: RCSListener): void {
		if (listener.exitAdmin) {
			listener.exitAdmin(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RCSVisitor<Result>): Result {
		if (visitor.visitAdmin) {
			return visitor.visitAdmin(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class HeadContext extends ParserRuleContext {
	public LITERAL_HEAD(): TerminalNode { return this.getToken(RCSParser.LITERAL_HEAD, 0); }
	public REVISION(): TerminalNode { return this.getToken(RCSParser.REVISION, 0); }
	public SEMI(): TerminalNode { return this.getToken(RCSParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RCSParser.RULE_head; }
	// @Override
	public enterRule(listener: RCSListener): void {
		if (listener.enterHead) {
			listener.enterHead(this);
		}
	}
	// @Override
	public exitRule(listener: RCSListener): void {
		if (listener.exitHead) {
			listener.exitHead(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RCSVisitor<Result>): Result {
		if (visitor.visitHead) {
			return visitor.visitHead(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BranchContext extends ParserRuleContext {
	public LITERAL_BRANCH(): TerminalNode { return this.getToken(RCSParser.LITERAL_BRANCH, 0); }
	public BRANCH(): TerminalNode { return this.getToken(RCSParser.BRANCH, 0); }
	public SEMI(): TerminalNode { return this.getToken(RCSParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RCSParser.RULE_branch; }
	// @Override
	public enterRule(listener: RCSListener): void {
		if (listener.enterBranch) {
			listener.enterBranch(this);
		}
	}
	// @Override
	public exitRule(listener: RCSListener): void {
		if (listener.exitBranch) {
			listener.exitBranch(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RCSVisitor<Result>): Result {
		if (visitor.visitBranch) {
			return visitor.visitBranch(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AccessContext extends ParserRuleContext {
	public LITERAL_ACCESS(): TerminalNode { return this.getToken(RCSParser.LITERAL_ACCESS, 0); }
	public SEMI(): TerminalNode { return this.getToken(RCSParser.SEMI, 0); }
	public IDENT(): TerminalNode[];
	public IDENT(i: number): TerminalNode;
	public IDENT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RCSParser.IDENT);
		} else {
			return this.getToken(RCSParser.IDENT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RCSParser.RULE_access; }
	// @Override
	public enterRule(listener: RCSListener): void {
		if (listener.enterAccess) {
			listener.enterAccess(this);
		}
	}
	// @Override
	public exitRule(listener: RCSListener): void {
		if (listener.exitAccess) {
			listener.exitAccess(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RCSVisitor<Result>): Result {
		if (visitor.visitAccess) {
			return visitor.visitAccess(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SymbolsContext extends ParserRuleContext {
	public LITERAL_SYMBOLS(): TerminalNode { return this.getToken(RCSParser.LITERAL_SYMBOLS, 0); }
	public SEMI(): TerminalNode { return this.getToken(RCSParser.SEMI, 0); }
	public tags(): TagsContext[];
	public tags(i: number): TagsContext;
	public tags(i?: number): TagsContext | TagsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TagsContext);
		} else {
			return this.getRuleContext(i, TagsContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RCSParser.RULE_symbols; }
	// @Override
	public enterRule(listener: RCSListener): void {
		if (listener.enterSymbols) {
			listener.enterSymbols(this);
		}
	}
	// @Override
	public exitRule(listener: RCSListener): void {
		if (listener.exitSymbols) {
			listener.exitSymbols(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RCSVisitor<Result>): Result {
		if (visitor.visitSymbols) {
			return visitor.visitSymbols(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TagsContext extends ParserRuleContext {
	public IDENT(): TerminalNode { return this.getToken(RCSParser.IDENT, 0); }
	public COLON(): TerminalNode { return this.getToken(RCSParser.COLON, 0); }
	public REVISION(): TerminalNode { return this.getToken(RCSParser.REVISION, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RCSParser.RULE_tags; }
	// @Override
	public enterRule(listener: RCSListener): void {
		if (listener.enterTags) {
			listener.enterTags(this);
		}
	}
	// @Override
	public exitRule(listener: RCSListener): void {
		if (listener.exitTags) {
			listener.exitTags(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RCSVisitor<Result>): Result {
		if (visitor.visitTags) {
			return visitor.visitTags(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LocksContext extends ParserRuleContext {
	public LITERAL_LOCKS(): TerminalNode { return this.getToken(RCSParser.LITERAL_LOCKS, 0); }
	public SEMI(): TerminalNode { return this.getToken(RCSParser.SEMI, 0); }
	public IDENT(): TerminalNode[];
	public IDENT(i: number): TerminalNode;
	public IDENT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RCSParser.IDENT);
		} else {
			return this.getToken(RCSParser.IDENT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RCSParser.RULE_locks; }
	// @Override
	public enterRule(listener: RCSListener): void {
		if (listener.enterLocks) {
			listener.enterLocks(this);
		}
	}
	// @Override
	public exitRule(listener: RCSListener): void {
		if (listener.exitLocks) {
			listener.exitLocks(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RCSVisitor<Result>): Result {
		if (visitor.visitLocks) {
			return visitor.visitLocks(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StrictContext extends ParserRuleContext {
	public LITERAL_STRICT(): TerminalNode { return this.getToken(RCSParser.LITERAL_STRICT, 0); }
	public SEMI(): TerminalNode { return this.getToken(RCSParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RCSParser.RULE_strict; }
	// @Override
	public enterRule(listener: RCSListener): void {
		if (listener.enterStrict) {
			listener.enterStrict(this);
		}
	}
	// @Override
	public exitRule(listener: RCSListener): void {
		if (listener.exitStrict) {
			listener.exitStrict(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RCSVisitor<Result>): Result {
		if (visitor.visitStrict) {
			return visitor.visitStrict(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CommentContext extends ParserRuleContext {
	public LITERAL_COMMENT(): TerminalNode { return this.getToken(RCSParser.LITERAL_COMMENT, 0); }
	public SEMI(): TerminalNode { return this.getToken(RCSParser.SEMI, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(RCSParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RCSParser.RULE_comment; }
	// @Override
	public enterRule(listener: RCSListener): void {
		if (listener.enterComment) {
			listener.enterComment(this);
		}
	}
	// @Override
	public exitRule(listener: RCSListener): void {
		if (listener.exitComment) {
			listener.exitComment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RCSVisitor<Result>): Result {
		if (visitor.visitComment) {
			return visitor.visitComment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpandContext extends ParserRuleContext {
	public LITERAL_EXPAND(): TerminalNode { return this.getToken(RCSParser.LITERAL_EXPAND, 0); }
	public SEMI(): TerminalNode { return this.getToken(RCSParser.SEMI, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(RCSParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RCSParser.RULE_expand; }
	// @Override
	public enterRule(listener: RCSListener): void {
		if (listener.enterExpand) {
			listener.enterExpand(this);
		}
	}
	// @Override
	public exitRule(listener: RCSListener): void {
		if (listener.exitExpand) {
			listener.exitExpand(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RCSVisitor<Result>): Result {
		if (visitor.visitExpand) {
			return visitor.visitExpand(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeltalistContext extends ParserRuleContext {
	public delta(): DeltaContext[];
	public delta(i: number): DeltaContext;
	public delta(i?: number): DeltaContext | DeltaContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DeltaContext);
		} else {
			return this.getRuleContext(i, DeltaContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RCSParser.RULE_deltalist; }
	// @Override
	public enterRule(listener: RCSListener): void {
		if (listener.enterDeltalist) {
			listener.enterDeltalist(this);
		}
	}
	// @Override
	public exitRule(listener: RCSListener): void {
		if (listener.exitDeltalist) {
			listener.exitDeltalist(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RCSVisitor<Result>): Result {
		if (visitor.visitDeltalist) {
			return visitor.visitDeltalist(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeltaContext extends ParserRuleContext {
	public REVISION(): TerminalNode { return this.getToken(RCSParser.REVISION, 0); }
	public delta_date(): Delta_dateContext {
		return this.getRuleContext(0, Delta_dateContext);
	}
	public delta_author(): Delta_authorContext {
		return this.getRuleContext(0, Delta_authorContext);
	}
	public delta_state(): Delta_stateContext {
		return this.getRuleContext(0, Delta_stateContext);
	}
	public delta_branches(): Delta_branchesContext {
		return this.getRuleContext(0, Delta_branchesContext);
	}
	public delta_next(): Delta_nextContext {
		return this.getRuleContext(0, Delta_nextContext);
	}
	public newphrase(): NewphraseContext[];
	public newphrase(i: number): NewphraseContext;
	public newphrase(i?: number): NewphraseContext | NewphraseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NewphraseContext);
		} else {
			return this.getRuleContext(i, NewphraseContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RCSParser.RULE_delta; }
	// @Override
	public enterRule(listener: RCSListener): void {
		if (listener.enterDelta) {
			listener.enterDelta(this);
		}
	}
	// @Override
	public exitRule(listener: RCSListener): void {
		if (listener.exitDelta) {
			listener.exitDelta(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RCSVisitor<Result>): Result {
		if (visitor.visitDelta) {
			return visitor.visitDelta(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Delta_dateContext extends ParserRuleContext {
	public LITERAL_DATE(): TerminalNode { return this.getToken(RCSParser.LITERAL_DATE, 0); }
	public REVISION(): TerminalNode { return this.getToken(RCSParser.REVISION, 0); }
	public SEMI(): TerminalNode { return this.getToken(RCSParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RCSParser.RULE_delta_date; }
	// @Override
	public enterRule(listener: RCSListener): void {
		if (listener.enterDelta_date) {
			listener.enterDelta_date(this);
		}
	}
	// @Override
	public exitRule(listener: RCSListener): void {
		if (listener.exitDelta_date) {
			listener.exitDelta_date(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RCSVisitor<Result>): Result {
		if (visitor.visitDelta_date) {
			return visitor.visitDelta_date(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Delta_authorContext extends ParserRuleContext {
	public LITERAL_AUTHOR(): TerminalNode { return this.getToken(RCSParser.LITERAL_AUTHOR, 0); }
	public IDENT(): TerminalNode { return this.getToken(RCSParser.IDENT, 0); }
	public SEMI(): TerminalNode { return this.getToken(RCSParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RCSParser.RULE_delta_author; }
	// @Override
	public enterRule(listener: RCSListener): void {
		if (listener.enterDelta_author) {
			listener.enterDelta_author(this);
		}
	}
	// @Override
	public exitRule(listener: RCSListener): void {
		if (listener.exitDelta_author) {
			listener.exitDelta_author(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RCSVisitor<Result>): Result {
		if (visitor.visitDelta_author) {
			return visitor.visitDelta_author(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Delta_stateContext extends ParserRuleContext {
	public LITERAL_STATE(): TerminalNode { return this.getToken(RCSParser.LITERAL_STATE, 0); }
	public IDENT(): TerminalNode { return this.getToken(RCSParser.IDENT, 0); }
	public SEMI(): TerminalNode { return this.getToken(RCSParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RCSParser.RULE_delta_state; }
	// @Override
	public enterRule(listener: RCSListener): void {
		if (listener.enterDelta_state) {
			listener.enterDelta_state(this);
		}
	}
	// @Override
	public exitRule(listener: RCSListener): void {
		if (listener.exitDelta_state) {
			listener.exitDelta_state(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RCSVisitor<Result>): Result {
		if (visitor.visitDelta_state) {
			return visitor.visitDelta_state(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Delta_branchesContext extends ParserRuleContext {
	public LITERAL_BRANCHES(): TerminalNode { return this.getToken(RCSParser.LITERAL_BRANCHES, 0); }
	public SEMI(): TerminalNode { return this.getToken(RCSParser.SEMI, 0); }
	public REVISION(): TerminalNode[];
	public REVISION(i: number): TerminalNode;
	public REVISION(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RCSParser.REVISION);
		} else {
			return this.getToken(RCSParser.REVISION, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RCSParser.RULE_delta_branches; }
	// @Override
	public enterRule(listener: RCSListener): void {
		if (listener.enterDelta_branches) {
			listener.enterDelta_branches(this);
		}
	}
	// @Override
	public exitRule(listener: RCSListener): void {
		if (listener.exitDelta_branches) {
			listener.exitDelta_branches(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RCSVisitor<Result>): Result {
		if (visitor.visitDelta_branches) {
			return visitor.visitDelta_branches(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Delta_nextContext extends ParserRuleContext {
	public LITERAL_NEXT(): TerminalNode { return this.getToken(RCSParser.LITERAL_NEXT, 0); }
	public SEMI(): TerminalNode { return this.getToken(RCSParser.SEMI, 0); }
	public REVISION(): TerminalNode | undefined { return this.tryGetToken(RCSParser.REVISION, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RCSParser.RULE_delta_next; }
	// @Override
	public enterRule(listener: RCSListener): void {
		if (listener.enterDelta_next) {
			listener.enterDelta_next(this);
		}
	}
	// @Override
	public exitRule(listener: RCSListener): void {
		if (listener.exitDelta_next) {
			listener.exitDelta_next(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RCSVisitor<Result>): Result {
		if (visitor.visitDelta_next) {
			return visitor.visitDelta_next(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DescContext extends ParserRuleContext {
	public LITERAL_DESC(): TerminalNode { return this.getToken(RCSParser.LITERAL_DESC, 0); }
	public STRING(): TerminalNode { return this.getToken(RCSParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RCSParser.RULE_desc; }
	// @Override
	public enterRule(listener: RCSListener): void {
		if (listener.enterDesc) {
			listener.enterDesc(this);
		}
	}
	// @Override
	public exitRule(listener: RCSListener): void {
		if (listener.exitDesc) {
			listener.exitDesc(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RCSVisitor<Result>): Result {
		if (visitor.visitDesc) {
			return visitor.visitDesc(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeltatextlistContext extends ParserRuleContext {
	public deltatext(): DeltatextContext[];
	public deltatext(i: number): DeltatextContext;
	public deltatext(i?: number): DeltatextContext | DeltatextContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DeltatextContext);
		} else {
			return this.getRuleContext(i, DeltatextContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RCSParser.RULE_deltatextlist; }
	// @Override
	public enterRule(listener: RCSListener): void {
		if (listener.enterDeltatextlist) {
			listener.enterDeltatextlist(this);
		}
	}
	// @Override
	public exitRule(listener: RCSListener): void {
		if (listener.exitDeltatextlist) {
			listener.exitDeltatextlist(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RCSVisitor<Result>): Result {
		if (visitor.visitDeltatextlist) {
			return visitor.visitDeltatextlist(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeltatextContext extends ParserRuleContext {
	public REVISION(): TerminalNode { return this.getToken(RCSParser.REVISION, 0); }
	public deltatext_log(): Deltatext_logContext {
		return this.getRuleContext(0, Deltatext_logContext);
	}
	public deltatext_text(): Deltatext_textContext {
		return this.getRuleContext(0, Deltatext_textContext);
	}
	public newphrase(): NewphraseContext[];
	public newphrase(i: number): NewphraseContext;
	public newphrase(i?: number): NewphraseContext | NewphraseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NewphraseContext);
		} else {
			return this.getRuleContext(i, NewphraseContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RCSParser.RULE_deltatext; }
	// @Override
	public enterRule(listener: RCSListener): void {
		if (listener.enterDeltatext) {
			listener.enterDeltatext(this);
		}
	}
	// @Override
	public exitRule(listener: RCSListener): void {
		if (listener.exitDeltatext) {
			listener.exitDeltatext(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RCSVisitor<Result>): Result {
		if (visitor.visitDeltatext) {
			return visitor.visitDeltatext(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Deltatext_logContext extends ParserRuleContext {
	public LITERAL_LOG(): TerminalNode { return this.getToken(RCSParser.LITERAL_LOG, 0); }
	public STRING(): TerminalNode { return this.getToken(RCSParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RCSParser.RULE_deltatext_log; }
	// @Override
	public enterRule(listener: RCSListener): void {
		if (listener.enterDeltatext_log) {
			listener.enterDeltatext_log(this);
		}
	}
	// @Override
	public exitRule(listener: RCSListener): void {
		if (listener.exitDeltatext_log) {
			listener.exitDeltatext_log(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RCSVisitor<Result>): Result {
		if (visitor.visitDeltatext_log) {
			return visitor.visitDeltatext_log(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Deltatext_textContext extends ParserRuleContext {
	public LITERAL_TEXT(): TerminalNode { return this.getToken(RCSParser.LITERAL_TEXT, 0); }
	public STRING(): TerminalNode { return this.getToken(RCSParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RCSParser.RULE_deltatext_text; }
	// @Override
	public enterRule(listener: RCSListener): void {
		if (listener.enterDeltatext_text) {
			listener.enterDeltatext_text(this);
		}
	}
	// @Override
	public exitRule(listener: RCSListener): void {
		if (listener.exitDeltatext_text) {
			listener.exitDeltatext_text(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RCSVisitor<Result>): Result {
		if (visitor.visitDeltatext_text) {
			return visitor.visitDeltatext_text(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NewphraseContext extends ParserRuleContext {
	public SEMI(): TerminalNode { return this.getToken(RCSParser.SEMI, 0); }
	public IDENT(): TerminalNode[];
	public IDENT(i: number): TerminalNode;
	public IDENT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RCSParser.IDENT);
		} else {
			return this.getToken(RCSParser.IDENT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RCSParser.RULE_newphrase; }
	// @Override
	public enterRule(listener: RCSListener): void {
		if (listener.enterNewphrase) {
			listener.enterNewphrase(this);
		}
	}
	// @Override
	public exitRule(listener: RCSListener): void {
		if (listener.exitNewphrase) {
			listener.exitNewphrase(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RCSVisitor<Result>): Result {
		if (visitor.visitNewphrase) {
			return visitor.visitNewphrase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


