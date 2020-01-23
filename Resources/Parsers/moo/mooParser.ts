// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/moo/moo.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { mooListener } from "./mooListener";

export class mooParser extends Parser {
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
	public static readonly LPAREN = 41;
	public static readonly RPAREN = 42;
	public static readonly PLUS = 43;
	public static readonly MINUS = 44;
	public static readonly TIMES = 45;
	public static readonly MOD = 46;
	public static readonly DIV = 47;
	public static readonly GT = 48;
	public static readonly LT = 49;
	public static readonly GTE = 50;
	public static readonly LTE = 51;
	public static readonly EQ = 52;
	public static readonly AND = 53;
	public static readonly OR = 54;
	public static readonly NEQ = 55;
	public static readonly POW = 56;
	public static readonly COMMA = 57;
	public static readonly ASSIGN = 58;
	public static readonly SEMICOLON = 59;
	public static readonly DOLLAR = 60;
	public static readonly OBJREF = 61;
	public static readonly PERMISSIONS = 62;
	public static readonly STRING = 63;
	public static readonly STRINGLITERAL = 64;
	public static readonly INTEGER = 65;
	public static readonly REAL = 66;
	public static readonly COMMENT = 67;
	public static readonly WS = 68;
	public static readonly RULE_prog = 0;
	public static readonly RULE_declaration = 1;
	public static readonly RULE_programdecl = 2;
	public static readonly RULE_programname = 3;
	public static readonly RULE_verbdecl = 4;
	public static readonly RULE_verbname = 5;
	public static readonly RULE_propertydecl = 6;
	public static readonly RULE_rmpropertydecl = 7;
	public static readonly RULE_setpropertydecl = 8;
	public static readonly RULE_displaypropertydecl = 9;
	public static readonly RULE_kidsdecl = 10;
	public static readonly RULE_parentdecl = 11;
	public static readonly RULE_describedecl = 12;
	public static readonly RULE_contentsdecl = 13;
	public static readonly RULE_noteditdecl = 14;
	public static readonly RULE_createdecl = 15;
	public static readonly RULE_editdecl = 16;
	public static readonly RULE_addaliasdecl = 17;
	public static readonly RULE_statement = 18;
	public static readonly RULE_ifblock = 19;
	public static readonly RULE_whileblock = 20;
	public static readonly RULE_doblock = 21;
	public static readonly RULE_forblock = 22;
	public static readonly RULE_tryblock = 23;
	public static readonly RULE_assignblock = 24;
	public static readonly RULE_condition = 25;
	public static readonly RULE_relop = 26;
	public static readonly RULE_expressionlist = 27;
	public static readonly RULE_expression = 28;
	public static readonly RULE_term = 29;
	public static readonly RULE_factor = 30;
	public static readonly RULE_signedAtom = 31;
	public static readonly RULE_atom = 32;
	public static readonly RULE_objref = 33;
	public static readonly RULE_functioninvocation = 34;
	public static readonly RULE_command = 35;
	public static readonly RULE_returncommand = 36;
	public static readonly RULE_verbinvocation = 37;
	public static readonly RULE_verb = 38;
	public static readonly RULE_property = 39;
	public static readonly RULE_propertyname = 40;
	public static readonly RULE_list = 41;
	public static readonly RULE_stringliteral = 42;
	public static readonly RULE_integer = 43;
	public static readonly RULE_real = 44;
	public static readonly RULE_name = 45;
	public static readonly RULE_sysname = 46;
	public static readonly RULE_username = 47;
	public static readonly RULE_permissions = 48;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"prog", "declaration", "programdecl", "programname", "verbdecl", "verbname", 
		"propertydecl", "rmpropertydecl", "setpropertydecl", "displaypropertydecl", 
		"kidsdecl", "parentdecl", "describedecl", "contentsdecl", "noteditdecl", 
		"createdecl", "editdecl", "addaliasdecl", "statement", "ifblock", "whileblock", 
		"doblock", "forblock", "tryblock", "assignblock", "condition", "relop", 
		"expressionlist", "expression", "term", "factor", "signedAtom", "atom", 
		"objref", "functioninvocation", "command", "returncommand", "verbinvocation", 
		"verb", "property", "propertyname", "list", "stringliteral", "integer", 
		"real", "name", "sysname", "username", "permissions",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'@program'", "':'", "'.'", "'@verb'", "'@property'", "'@prop'", 
		"'@rmproperty'", "'@rmprop'", "'@set'", "'to'", "'@display'", "'@disp'", 
		"'@kids'", "'@parent'", "'@describe'", "'as'", "'@contents'", "'@notedit'", 
		"'@create'", "'called'", "'@edit'", "'@addalias'", "'if'", "'elseif'", 
		"'else'", "'endif'", "'while'", "'do'", "'for'", "'in'", "'endfor'", "'try'", 
		"'except'", "'endtry'", "'!'", "'return'", "'['", "']'", "'{'", "'}'", 
		"'('", "')'", "'+'", "'-'", "'*'", "'%'", "'/'", "'>'", "'<'", "'>='", 
		"'<='", "'=='", "'&&'", "'||'", "'!='", "'^'", "','", "'='", "';'", "'$'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, "LPAREN", 
		"RPAREN", "PLUS", "MINUS", "TIMES", "MOD", "DIV", "GT", "LT", "GTE", "LTE", 
		"EQ", "AND", "OR", "NEQ", "POW", "COMMA", "ASSIGN", "SEMICOLON", "DOLLAR", 
		"OBJREF", "PERMISSIONS", "STRING", "STRINGLITERAL", "INTEGER", "REAL", 
		"COMMENT", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(mooParser._LITERAL_NAMES, mooParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return mooParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "moo.g4"; }

	// @Override
	public get ruleNames(): string[] { return mooParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return mooParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(mooParser._ATN, this);
	}
	// @RuleVersion(0)
	public prog(): ProgContext {
		let _localctx: ProgContext = new ProgContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, mooParser.RULE_prog);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 99;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 98;
				this.declaration();
				}
				}
				this.state = 101;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << mooParser.T__0) | (1 << mooParser.T__3) | (1 << mooParser.T__4) | (1 << mooParser.T__5) | (1 << mooParser.T__6) | (1 << mooParser.T__7) | (1 << mooParser.T__8) | (1 << mooParser.T__10) | (1 << mooParser.T__11) | (1 << mooParser.T__12) | (1 << mooParser.T__13) | (1 << mooParser.T__14) | (1 << mooParser.T__16) | (1 << mooParser.T__17) | (1 << mooParser.T__18) | (1 << mooParser.T__20) | (1 << mooParser.T__21))) !== 0));
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
	public declaration(): DeclarationContext {
		let _localctx: DeclarationContext = new DeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, mooParser.RULE_declaration);
		try {
			this.state = 117;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case mooParser.T__0:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 103;
				this.programdecl();
				}
				break;
			case mooParser.T__3:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 104;
				this.verbdecl();
				}
				break;
			case mooParser.T__4:
			case mooParser.T__5:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 105;
				this.propertydecl();
				}
				break;
			case mooParser.T__6:
			case mooParser.T__7:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 106;
				this.rmpropertydecl();
				}
				break;
			case mooParser.T__8:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 107;
				this.setpropertydecl();
				}
				break;
			case mooParser.T__10:
			case mooParser.T__11:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 108;
				this.displaypropertydecl();
				}
				break;
			case mooParser.T__12:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 109;
				this.kidsdecl();
				}
				break;
			case mooParser.T__13:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 110;
				this.parentdecl();
				}
				break;
			case mooParser.T__14:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 111;
				this.describedecl();
				}
				break;
			case mooParser.T__16:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 112;
				this.contentsdecl();
				}
				break;
			case mooParser.T__17:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 113;
				this.noteditdecl();
				}
				break;
			case mooParser.T__18:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 114;
				this.createdecl();
				}
				break;
			case mooParser.T__20:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 115;
				this.editdecl();
				}
				break;
			case mooParser.T__21:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 116;
				this.addaliasdecl();
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
	public programdecl(): ProgramdeclContext {
		let _localctx: ProgramdeclContext = new ProgramdeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, mooParser.RULE_programdecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 119;
			this.match(mooParser.T__0);
			this.state = 120;
			this.programname();
			this.state = 121;
			this.match(mooParser.T__1);
			this.state = 122;
			this.name();
			this.state = 124;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 123;
				this.statement();
				}
				}
				this.state = 126;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 23)) & ~0x1F) === 0 && ((1 << (_la - 23)) & ((1 << (mooParser.T__22 - 23)) | (1 << (mooParser.T__26 - 23)) | (1 << (mooParser.T__27 - 23)) | (1 << (mooParser.T__28 - 23)) | (1 << (mooParser.T__31 - 23)) | (1 << (mooParser.T__35 - 23)))) !== 0) || ((((_la - 60)) & ~0x1F) === 0 && ((1 << (_la - 60)) & ((1 << (mooParser.DOLLAR - 60)) | (1 << (mooParser.STRING - 60)) | (1 << (mooParser.STRINGLITERAL - 60)))) !== 0));
			this.state = 128;
			this.match(mooParser.T__2);
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
	public programname(): ProgramnameContext {
		let _localctx: ProgramnameContext = new ProgramnameContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, mooParser.RULE_programname);
		try {
			this.state = 132;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case mooParser.DOLLAR:
			case mooParser.STRING:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 130;
				this.name();
				}
				break;
			case mooParser.STRINGLITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 131;
				this.stringliteral();
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
	public verbdecl(): VerbdeclContext {
		let _localctx: VerbdeclContext = new VerbdeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, mooParser.RULE_verbdecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 134;
			this.match(mooParser.T__3);
			{
			this.state = 135;
			this.verbname();
			this.state = 136;
			this.match(mooParser.T__1);
			this.state = 137;
			this.name();
			}
			this.state = 140;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 139;
				this.name();
				}
				}
				this.state = 142;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === mooParser.DOLLAR || _la === mooParser.STRING);
			this.state = 145;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === mooParser.PERMISSIONS) {
				{
				this.state = 144;
				this.permissions();
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
	public verbname(): VerbnameContext {
		let _localctx: VerbnameContext = new VerbnameContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, mooParser.RULE_verbname);
		try {
			this.state = 149;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case mooParser.DOLLAR:
			case mooParser.STRING:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 147;
				this.name();
				}
				break;
			case mooParser.STRINGLITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 148;
				this.stringliteral();
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
	public propertydecl(): PropertydeclContext {
		let _localctx: PropertydeclContext = new PropertydeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, mooParser.RULE_propertydecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 151;
			_la = this._input.LA(1);
			if (!(_la === mooParser.T__4 || _la === mooParser.T__5)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 152;
			this.property();
			this.state = 154;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === mooParser.ASSIGN) {
				{
				this.state = 153;
				this.match(mooParser.ASSIGN);
				}
			}

			this.state = 157;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (mooParser.T__34 - 35)) | (1 << (mooParser.T__38 - 35)) | (1 << (mooParser.LPAREN - 35)) | (1 << (mooParser.PLUS - 35)) | (1 << (mooParser.MINUS - 35)) | (1 << (mooParser.DOLLAR - 35)) | (1 << (mooParser.OBJREF - 35)) | (1 << (mooParser.STRING - 35)) | (1 << (mooParser.STRINGLITERAL - 35)) | (1 << (mooParser.INTEGER - 35)) | (1 << (mooParser.REAL - 35)))) !== 0)) {
				{
				this.state = 156;
				this.expression();
				}
			}

			this.state = 160;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === mooParser.PERMISSIONS) {
				{
				this.state = 159;
				this.permissions();
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
	public rmpropertydecl(): RmpropertydeclContext {
		let _localctx: RmpropertydeclContext = new RmpropertydeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, mooParser.RULE_rmpropertydecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 162;
			_la = this._input.LA(1);
			if (!(_la === mooParser.T__6 || _la === mooParser.T__7)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 163;
			this.name();
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
	public setpropertydecl(): SetpropertydeclContext {
		let _localctx: SetpropertydeclContext = new SetpropertydeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, mooParser.RULE_setpropertydecl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 165;
			this.match(mooParser.T__8);
			this.state = 166;
			this.property();
			this.state = 167;
			this.match(mooParser.T__9);
			this.state = 168;
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
	public displaypropertydecl(): DisplaypropertydeclContext {
		let _localctx: DisplaypropertydeclContext = new DisplaypropertydeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, mooParser.RULE_displaypropertydecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 170;
			_la = this._input.LA(1);
			if (!(_la === mooParser.T__10 || _la === mooParser.T__11)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 171;
			this.property();
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
	public kidsdecl(): KidsdeclContext {
		let _localctx: KidsdeclContext = new KidsdeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, mooParser.RULE_kidsdecl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 173;
			this.match(mooParser.T__12);
			this.state = 174;
			this.name();
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
	public parentdecl(): ParentdeclContext {
		let _localctx: ParentdeclContext = new ParentdeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, mooParser.RULE_parentdecl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 176;
			this.match(mooParser.T__13);
			this.state = 177;
			this.name();
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
	public describedecl(): DescribedeclContext {
		let _localctx: DescribedeclContext = new DescribedeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, mooParser.RULE_describedecl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 179;
			this.match(mooParser.T__14);
			this.state = 180;
			this.property();
			this.state = 181;
			this.match(mooParser.T__15);
			this.state = 182;
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
	public contentsdecl(): ContentsdeclContext {
		let _localctx: ContentsdeclContext = new ContentsdeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, mooParser.RULE_contentsdecl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 184;
			this.match(mooParser.T__16);
			this.state = 185;
			this.name();
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
	public noteditdecl(): NoteditdeclContext {
		let _localctx: NoteditdeclContext = new NoteditdeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, mooParser.RULE_noteditdecl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 187;
			this.match(mooParser.T__17);
			this.state = 188;
			this.property();
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
	public createdecl(): CreatedeclContext {
		let _localctx: CreatedeclContext = new CreatedeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, mooParser.RULE_createdecl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 190;
			this.match(mooParser.T__18);
			this.state = 191;
			this.sysname();
			this.state = 192;
			this.match(mooParser.T__19);
			this.state = 193;
			this.expressionlist();
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
	public editdecl(): EditdeclContext {
		let _localctx: EditdeclContext = new EditdeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, mooParser.RULE_editdecl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 195;
			this.match(mooParser.T__20);
			this.state = 196;
			this.property();
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
	public addaliasdecl(): AddaliasdeclContext {
		let _localctx: AddaliasdeclContext = new AddaliasdeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, mooParser.RULE_addaliasdecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 198;
			this.match(mooParser.T__21);
			this.state = 199;
			this.name();
			this.state = 204;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === mooParser.COMMA) {
				{
				{
				this.state = 200;
				this.match(mooParser.COMMA);
				this.state = 201;
				this.name();
				}
				}
				this.state = 206;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 207;
			this.match(mooParser.T__9);
			this.state = 208;
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
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, mooParser.RULE_statement);
		try {
			this.state = 219;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 210;
				this.ifblock();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 211;
				this.whileblock();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 212;
				this.doblock();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 213;
				this.forblock();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 214;
				this.assignblock();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 215;
				this.tryblock();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 216;
				this.command();
				this.state = 217;
				this.match(mooParser.SEMICOLON);
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
	public ifblock(): IfblockContext {
		let _localctx: IfblockContext = new IfblockContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, mooParser.RULE_ifblock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 221;
			this.match(mooParser.T__22);
			this.state = 222;
			this.condition();
			this.state = 224;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 223;
				this.statement();
				}
				}
				this.state = 226;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 23)) & ~0x1F) === 0 && ((1 << (_la - 23)) & ((1 << (mooParser.T__22 - 23)) | (1 << (mooParser.T__26 - 23)) | (1 << (mooParser.T__27 - 23)) | (1 << (mooParser.T__28 - 23)) | (1 << (mooParser.T__31 - 23)) | (1 << (mooParser.T__35 - 23)))) !== 0) || ((((_la - 60)) & ~0x1F) === 0 && ((1 << (_la - 60)) & ((1 << (mooParser.DOLLAR - 60)) | (1 << (mooParser.STRING - 60)) | (1 << (mooParser.STRINGLITERAL - 60)))) !== 0));
			this.state = 235;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === mooParser.T__23) {
				{
				this.state = 228;
				this.match(mooParser.T__23);
				this.state = 229;
				this.condition();
				this.state = 231;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 230;
					this.statement();
					}
					}
					this.state = 233;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (((((_la - 23)) & ~0x1F) === 0 && ((1 << (_la - 23)) & ((1 << (mooParser.T__22 - 23)) | (1 << (mooParser.T__26 - 23)) | (1 << (mooParser.T__27 - 23)) | (1 << (mooParser.T__28 - 23)) | (1 << (mooParser.T__31 - 23)) | (1 << (mooParser.T__35 - 23)))) !== 0) || ((((_la - 60)) & ~0x1F) === 0 && ((1 << (_la - 60)) & ((1 << (mooParser.DOLLAR - 60)) | (1 << (mooParser.STRING - 60)) | (1 << (mooParser.STRINGLITERAL - 60)))) !== 0));
				}
			}

			this.state = 243;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === mooParser.T__24) {
				{
				this.state = 237;
				this.match(mooParser.T__24);
				this.state = 239;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 238;
					this.statement();
					}
					}
					this.state = 241;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (((((_la - 23)) & ~0x1F) === 0 && ((1 << (_la - 23)) & ((1 << (mooParser.T__22 - 23)) | (1 << (mooParser.T__26 - 23)) | (1 << (mooParser.T__27 - 23)) | (1 << (mooParser.T__28 - 23)) | (1 << (mooParser.T__31 - 23)) | (1 << (mooParser.T__35 - 23)))) !== 0) || ((((_la - 60)) & ~0x1F) === 0 && ((1 << (_la - 60)) & ((1 << (mooParser.DOLLAR - 60)) | (1 << (mooParser.STRING - 60)) | (1 << (mooParser.STRINGLITERAL - 60)))) !== 0));
				}
			}

			this.state = 245;
			this.match(mooParser.T__25);
			this.state = 247;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === mooParser.SEMICOLON) {
				{
				this.state = 246;
				this.match(mooParser.SEMICOLON);
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
	public whileblock(): WhileblockContext {
		let _localctx: WhileblockContext = new WhileblockContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, mooParser.RULE_whileblock);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 249;
			this.match(mooParser.T__26);
			this.state = 250;
			this.condition();
			this.state = 252;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 251;
					this.statement();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 254;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
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
	// @RuleVersion(0)
	public doblock(): DoblockContext {
		let _localctx: DoblockContext = new DoblockContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, mooParser.RULE_doblock);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 256;
			this.match(mooParser.T__27);
			this.state = 258;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 257;
					this.statement();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 260;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 262;
			this.match(mooParser.T__26);
			this.state = 263;
			this.condition();
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
	public forblock(): ForblockContext {
		let _localctx: ForblockContext = new ForblockContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, mooParser.RULE_forblock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 265;
			this.match(mooParser.T__28);
			this.state = 266;
			this.name();
			this.state = 267;
			this.match(mooParser.T__29);
			this.state = 268;
			this.expression();
			this.state = 270;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 269;
				this.statement();
				}
				}
				this.state = 272;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 23)) & ~0x1F) === 0 && ((1 << (_la - 23)) & ((1 << (mooParser.T__22 - 23)) | (1 << (mooParser.T__26 - 23)) | (1 << (mooParser.T__27 - 23)) | (1 << (mooParser.T__28 - 23)) | (1 << (mooParser.T__31 - 23)) | (1 << (mooParser.T__35 - 23)))) !== 0) || ((((_la - 60)) & ~0x1F) === 0 && ((1 << (_la - 60)) & ((1 << (mooParser.DOLLAR - 60)) | (1 << (mooParser.STRING - 60)) | (1 << (mooParser.STRINGLITERAL - 60)))) !== 0));
			this.state = 274;
			this.match(mooParser.T__30);
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
	public tryblock(): TryblockContext {
		let _localctx: TryblockContext = new TryblockContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, mooParser.RULE_tryblock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 276;
			this.match(mooParser.T__31);
			this.state = 278;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 277;
				this.statement();
				}
				}
				this.state = 280;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 23)) & ~0x1F) === 0 && ((1 << (_la - 23)) & ((1 << (mooParser.T__22 - 23)) | (1 << (mooParser.T__26 - 23)) | (1 << (mooParser.T__27 - 23)) | (1 << (mooParser.T__28 - 23)) | (1 << (mooParser.T__31 - 23)) | (1 << (mooParser.T__35 - 23)))) !== 0) || ((((_la - 60)) & ~0x1F) === 0 && ((1 << (_la - 60)) & ((1 << (mooParser.DOLLAR - 60)) | (1 << (mooParser.STRING - 60)) | (1 << (mooParser.STRINGLITERAL - 60)))) !== 0));
			this.state = 282;
			this.match(mooParser.T__32);
			this.state = 283;
			this.property();
			this.state = 285;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 284;
				this.statement();
				}
				}
				this.state = 287;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 23)) & ~0x1F) === 0 && ((1 << (_la - 23)) & ((1 << (mooParser.T__22 - 23)) | (1 << (mooParser.T__26 - 23)) | (1 << (mooParser.T__27 - 23)) | (1 << (mooParser.T__28 - 23)) | (1 << (mooParser.T__31 - 23)) | (1 << (mooParser.T__35 - 23)))) !== 0) || ((((_la - 60)) & ~0x1F) === 0 && ((1 << (_la - 60)) & ((1 << (mooParser.DOLLAR - 60)) | (1 << (mooParser.STRING - 60)) | (1 << (mooParser.STRINGLITERAL - 60)))) !== 0));
			this.state = 289;
			this.match(mooParser.T__33);
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
	public assignblock(): AssignblockContext {
		let _localctx: AssignblockContext = new AssignblockContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, mooParser.RULE_assignblock);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 291;
			this.property();
			this.state = 292;
			this.match(mooParser.ASSIGN);
			this.state = 293;
			this.expression();
			this.state = 294;
			this.match(mooParser.SEMICOLON);
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
	public condition(): ConditionContext {
		let _localctx: ConditionContext = new ConditionContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, mooParser.RULE_condition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 296;
			this.match(mooParser.LPAREN);
			this.state = 297;
			this.expression();
			this.state = 303;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & ((1 << (mooParser.GT - 48)) | (1 << (mooParser.LT - 48)) | (1 << (mooParser.GTE - 48)) | (1 << (mooParser.LTE - 48)) | (1 << (mooParser.EQ - 48)) | (1 << (mooParser.AND - 48)) | (1 << (mooParser.OR - 48)) | (1 << (mooParser.NEQ - 48)))) !== 0)) {
				{
				{
				this.state = 298;
				this.relop();
				this.state = 299;
				this.expression();
				}
				}
				this.state = 305;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 306;
			this.match(mooParser.RPAREN);
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
	public relop(): RelopContext {
		let _localctx: RelopContext = new RelopContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, mooParser.RULE_relop);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 308;
			_la = this._input.LA(1);
			if (!(((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & ((1 << (mooParser.GT - 48)) | (1 << (mooParser.LT - 48)) | (1 << (mooParser.GTE - 48)) | (1 << (mooParser.LTE - 48)) | (1 << (mooParser.EQ - 48)) | (1 << (mooParser.AND - 48)) | (1 << (mooParser.OR - 48)) | (1 << (mooParser.NEQ - 48)))) !== 0))) {
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
	public expressionlist(): ExpressionlistContext {
		let _localctx: ExpressionlistContext = new ExpressionlistContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, mooParser.RULE_expressionlist);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 310;
			this.expression();
			this.state = 315;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === mooParser.COMMA) {
				{
				{
				this.state = 311;
				this.match(mooParser.COMMA);
				this.state = 312;
				this.expression();
				}
				}
				this.state = 317;
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
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, mooParser.RULE_expression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 318;
			this.term();
			this.state = 323;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 319;
					_la = this._input.LA(1);
					if (!(_la === mooParser.PLUS || _la === mooParser.MINUS)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 320;
					this.term();
					}
					}
				}
				this.state = 325;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
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
		this.enterRule(_localctx, 58, mooParser.RULE_term);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 326;
			this.factor();
			this.state = 331;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 327;
					_la = this._input.LA(1);
					if (!(((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (mooParser.TIMES - 45)) | (1 << (mooParser.MOD - 45)) | (1 << (mooParser.DIV - 45)))) !== 0))) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 328;
					this.factor();
					}
					}
				}
				this.state = 333;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
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
	public factor(): FactorContext {
		let _localctx: FactorContext = new FactorContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, mooParser.RULE_factor);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 334;
			this.signedAtom();
			this.state = 339;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 335;
					this.match(mooParser.POW);
					this.state = 336;
					this.signedAtom();
					}
					}
				}
				this.state = 341;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
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
	public signedAtom(): SignedAtomContext {
		let _localctx: SignedAtomContext = new SignedAtomContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, mooParser.RULE_signedAtom);
		try {
			this.state = 347;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case mooParser.PLUS:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 342;
				this.match(mooParser.PLUS);
				this.state = 343;
				this.signedAtom();
				}
				break;
			case mooParser.MINUS:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 344;
				this.match(mooParser.MINUS);
				this.state = 345;
				this.signedAtom();
				}
				break;
			case mooParser.T__34:
			case mooParser.T__38:
			case mooParser.LPAREN:
			case mooParser.DOLLAR:
			case mooParser.OBJREF:
			case mooParser.STRING:
			case mooParser.STRINGLITERAL:
			case mooParser.INTEGER:
			case mooParser.REAL:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 346;
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
	public atom(): AtomContext {
		let _localctx: AtomContext = new AtomContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, mooParser.RULE_atom);
		try {
			this.state = 363;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 29, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 349;
				this.stringliteral();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 350;
				this.functioninvocation();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 351;
				this.verbinvocation();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 352;
				this.property();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 353;
				this.integer();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 354;
				this.real();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 355;
				this.list();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 356;
				this.objref();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 357;
				this.match(mooParser.LPAREN);
				this.state = 358;
				this.expression();
				this.state = 359;
				this.match(mooParser.RPAREN);
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				{
				this.state = 361;
				this.match(mooParser.T__34);
				this.state = 362;
				this.expression();
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
	public objref(): ObjrefContext {
		let _localctx: ObjrefContext = new ObjrefContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, mooParser.RULE_objref);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 365;
			this.match(mooParser.OBJREF);
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
	public functioninvocation(): FunctioninvocationContext {
		let _localctx: FunctioninvocationContext = new FunctioninvocationContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, mooParser.RULE_functioninvocation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 367;
			this.name();
			this.state = 368;
			this.match(mooParser.LPAREN);
			this.state = 369;
			this.expressionlist();
			this.state = 370;
			this.match(mooParser.RPAREN);
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
	public command(): CommandContext {
		let _localctx: CommandContext = new CommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, mooParser.RULE_command);
		try {
			this.state = 374;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case mooParser.DOLLAR:
			case mooParser.STRING:
			case mooParser.STRINGLITERAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 372;
				this.verbinvocation();
				}
				break;
			case mooParser.T__35:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 373;
				this.returncommand();
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
	public returncommand(): ReturncommandContext {
		let _localctx: ReturncommandContext = new ReturncommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, mooParser.RULE_returncommand);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 376;
			this.match(mooParser.T__35);
			this.state = 378;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (mooParser.T__34 - 35)) | (1 << (mooParser.T__38 - 35)) | (1 << (mooParser.LPAREN - 35)) | (1 << (mooParser.PLUS - 35)) | (1 << (mooParser.MINUS - 35)) | (1 << (mooParser.DOLLAR - 35)) | (1 << (mooParser.OBJREF - 35)) | (1 << (mooParser.STRING - 35)) | (1 << (mooParser.STRINGLITERAL - 35)) | (1 << (mooParser.INTEGER - 35)) | (1 << (mooParser.REAL - 35)))) !== 0)) {
				{
				this.state = 377;
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
	public verbinvocation(): VerbinvocationContext {
		let _localctx: VerbinvocationContext = new VerbinvocationContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, mooParser.RULE_verbinvocation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 380;
			this.property();
			this.state = 381;
			this.match(mooParser.T__1);
			this.state = 382;
			this.verb();
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
	public verb(): VerbContext {
		let _localctx: VerbContext = new VerbContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, mooParser.RULE_verb);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 384;
			this.name();
			this.state = 390;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === mooParser.LPAREN) {
				{
				this.state = 385;
				this.match(mooParser.LPAREN);
				this.state = 387;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (mooParser.T__34 - 35)) | (1 << (mooParser.T__38 - 35)) | (1 << (mooParser.LPAREN - 35)) | (1 << (mooParser.PLUS - 35)) | (1 << (mooParser.MINUS - 35)) | (1 << (mooParser.DOLLAR - 35)) | (1 << (mooParser.OBJREF - 35)) | (1 << (mooParser.STRING - 35)) | (1 << (mooParser.STRINGLITERAL - 35)) | (1 << (mooParser.INTEGER - 35)) | (1 << (mooParser.REAL - 35)))) !== 0)) {
					{
					this.state = 386;
					this.expressionlist();
					}
				}

				this.state = 389;
				this.match(mooParser.RPAREN);
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
	public property(): PropertyContext {
		let _localctx: PropertyContext = new PropertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, mooParser.RULE_property);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 392;
			this.propertyname();
			this.state = 401;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === mooParser.T__2 || _la === mooParser.T__36) {
				{
				this.state = 399;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case mooParser.T__2:
					{
					{
					this.state = 393;
					this.match(mooParser.T__2);
					this.state = 394;
					this.name();
					}
					}
					break;
				case mooParser.T__36:
					{
					this.state = 395;
					this.match(mooParser.T__36);
					this.state = 396;
					this.expression();
					this.state = 397;
					this.match(mooParser.T__37);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 403;
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
	public propertyname(): PropertynameContext {
		let _localctx: PropertynameContext = new PropertynameContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, mooParser.RULE_propertyname);
		try {
			this.state = 406;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case mooParser.DOLLAR:
			case mooParser.STRING:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 404;
				this.name();
				}
				break;
			case mooParser.STRINGLITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 405;
				this.stringliteral();
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
	public list(): ListContext {
		let _localctx: ListContext = new ListContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, mooParser.RULE_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 408;
			this.match(mooParser.T__38);
			this.state = 410;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (mooParser.T__34 - 35)) | (1 << (mooParser.T__38 - 35)) | (1 << (mooParser.LPAREN - 35)) | (1 << (mooParser.PLUS - 35)) | (1 << (mooParser.MINUS - 35)) | (1 << (mooParser.DOLLAR - 35)) | (1 << (mooParser.OBJREF - 35)) | (1 << (mooParser.STRING - 35)) | (1 << (mooParser.STRINGLITERAL - 35)) | (1 << (mooParser.INTEGER - 35)) | (1 << (mooParser.REAL - 35)))) !== 0)) {
				{
				this.state = 409;
				this.expressionlist();
				}
			}

			this.state = 412;
			this.match(mooParser.T__39);
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
	public stringliteral(): StringliteralContext {
		let _localctx: StringliteralContext = new StringliteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, mooParser.RULE_stringliteral);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 414;
			this.match(mooParser.STRINGLITERAL);
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
		this.enterRule(_localctx, 86, mooParser.RULE_integer);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 416;
			this.match(mooParser.INTEGER);
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
	public real(): RealContext {
		let _localctx: RealContext = new RealContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, mooParser.RULE_real);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 418;
			this.match(mooParser.REAL);
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
	public name(): NameContext {
		let _localctx: NameContext = new NameContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, mooParser.RULE_name);
		try {
			this.state = 422;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case mooParser.STRING:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 420;
				this.username();
				}
				break;
			case mooParser.DOLLAR:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 421;
				this.sysname();
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
	public sysname(): SysnameContext {
		let _localctx: SysnameContext = new SysnameContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, mooParser.RULE_sysname);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 424;
			this.match(mooParser.DOLLAR);
			this.state = 426;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 39, this._ctx) ) {
			case 1:
				{
				this.state = 425;
				this.match(mooParser.STRING);
				}
				break;
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
	public username(): UsernameContext {
		let _localctx: UsernameContext = new UsernameContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, mooParser.RULE_username);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 428;
			this.match(mooParser.STRING);
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
	public permissions(): PermissionsContext {
		let _localctx: PermissionsContext = new PermissionsContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, mooParser.RULE_permissions);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 430;
			this.match(mooParser.PERMISSIONS);
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03F\u01B3\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x03\x02\x06\x02" +
		"f\n\x02\r\x02\x0E\x02g\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03" +
		"x\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x06\x04\x7F\n\x04\r\x04" +
		"\x0E\x04\x80\x03\x04\x03\x04\x03\x05\x03\x05\x05\x05\x87\n\x05\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x06\x06\x8F\n\x06\r\x06\x0E\x06" +
		"\x90\x03\x06\x05\x06\x94\n\x06\x03\x07\x03\x07\x05\x07\x98\n\x07\x03\b" +
		"\x03\b\x03\b\x05\b\x9D\n\b\x03\b\x05\b\xA0\n\b\x03\b\x05\b\xA3\n\b\x03" +
		"\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\f\x03" +
		"\f\x03\f\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03" +
		"\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x07" +
		"\x13\xCD\n\x13\f\x13\x0E\x13\xD0\v\x13\x03\x13\x03\x13\x03\x13\x03\x14" +
		"\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x05\x14" +
		"\xDE\n\x14\x03\x15\x03\x15\x03\x15\x06\x15\xE3\n\x15\r\x15\x0E\x15\xE4" +
		"\x03\x15\x03\x15\x03\x15\x06\x15\xEA\n\x15\r\x15\x0E\x15\xEB\x05\x15\xEE" +
		"\n\x15\x03\x15\x03\x15\x06\x15\xF2\n\x15\r\x15\x0E\x15\xF3\x05\x15\xF6" +
		"\n\x15\x03\x15\x03\x15\x05\x15\xFA\n\x15\x03\x16\x03\x16\x03\x16\x06\x16" +
		"\xFF\n\x16\r\x16\x0E\x16\u0100\x03\x17\x03\x17\x06\x17\u0105\n\x17\r\x17" +
		"\x0E\x17\u0106\x03\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x18" +
		"\x03\x18\x06\x18\u0111\n\x18\r\x18\x0E\x18\u0112\x03\x18\x03\x18\x03\x19" +
		"\x03\x19\x06\x19\u0119\n\x19\r\x19\x0E\x19\u011A\x03\x19\x03\x19\x03\x19" +
		"\x06\x19\u0120\n\x19\r\x19\x0E\x19\u0121\x03\x19\x03\x19\x03\x1A\x03\x1A" +
		"\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x07\x1B" +
		"\u0130\n\x1B\f\x1B\x0E\x1B\u0133\v\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C" +
		"\x03\x1D\x03\x1D\x03\x1D\x07\x1D\u013C\n\x1D\f\x1D\x0E\x1D\u013F\v\x1D" +
		"\x03\x1E\x03\x1E\x03\x1E\x07\x1E\u0144\n\x1E\f\x1E\x0E\x1E\u0147\v\x1E" +
		"\x03\x1F\x03\x1F\x03\x1F\x07\x1F\u014C\n\x1F\f\x1F\x0E\x1F\u014F\v\x1F" +
		"\x03 \x03 \x03 \x07 \u0154\n \f \x0E \u0157\v \x03!\x03!\x03!\x03!\x03" +
		"!\x05!\u015E\n!\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"" +
		"\x03\"\x03\"\x03\"\x03\"\x03\"\x05\"\u016E\n\"\x03#\x03#\x03$\x03$\x03" +
		"$\x03$\x03$\x03%\x03%\x05%\u0179\n%\x03&\x03&\x05&\u017D\n&\x03\'\x03" +
		"\'\x03\'\x03\'\x03(\x03(\x03(\x05(\u0186\n(\x03(\x05(\u0189\n(\x03)\x03" +
		")\x03)\x03)\x03)\x03)\x03)\x07)\u0192\n)\f)\x0E)\u0195\v)\x03*\x03*\x05" +
		"*\u0199\n*\x03+\x03+\x05+\u019D\n+\x03+\x03+\x03,\x03,\x03-\x03-\x03." +
		"\x03.\x03/\x03/\x05/\u01A9\n/\x030\x030\x050\u01AD\n0\x031\x031\x032\x03" +
		"2\x032\x02\x02\x023\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02" +
		"\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02" +
		"\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02" +
		">\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02" +
		"Z\x02\\\x02^\x02`\x02b\x02\x02\b\x03\x02\x07\b\x03\x02\t\n\x03\x02\r\x0E" +
		"\x03\x0229\x03\x02-.\x03\x02/1\x02\u01C3\x02e\x03\x02\x02\x02\x04w\x03" +
		"\x02\x02\x02\x06y\x03\x02\x02\x02\b\x86\x03\x02\x02\x02\n\x88\x03\x02" +
		"\x02\x02\f\x97\x03\x02\x02\x02\x0E\x99\x03\x02\x02\x02\x10\xA4\x03\x02" +
		"\x02\x02\x12\xA7\x03\x02\x02\x02\x14\xAC\x03\x02\x02\x02\x16\xAF\x03\x02" +
		"\x02\x02\x18\xB2\x03\x02\x02\x02\x1A\xB5\x03\x02\x02\x02\x1C\xBA\x03\x02" +
		"\x02\x02\x1E\xBD\x03\x02\x02\x02 \xC0\x03\x02\x02\x02\"\xC5\x03\x02\x02" +
		"\x02$\xC8\x03\x02\x02\x02&\xDD\x03\x02\x02\x02(\xDF\x03\x02\x02\x02*\xFB" +
		"\x03\x02\x02\x02,\u0102\x03\x02\x02\x02.\u010B\x03\x02\x02\x020\u0116" +
		"\x03\x02\x02\x022\u0125\x03\x02\x02\x024\u012A\x03\x02\x02\x026\u0136" +
		"\x03\x02\x02\x028\u0138\x03\x02\x02\x02:\u0140\x03\x02\x02\x02<\u0148" +
		"\x03\x02\x02\x02>\u0150\x03\x02\x02\x02@\u015D\x03\x02\x02\x02B\u016D" +
		"\x03\x02\x02\x02D\u016F\x03\x02\x02\x02F\u0171\x03\x02\x02\x02H\u0178" +
		"\x03\x02\x02\x02J\u017A\x03\x02\x02\x02L\u017E\x03\x02\x02\x02N\u0182" +
		"\x03\x02\x02\x02P\u018A\x03\x02\x02\x02R\u0198\x03\x02\x02\x02T\u019A" +
		"\x03\x02\x02\x02V\u01A0\x03\x02\x02\x02X\u01A2\x03\x02\x02\x02Z\u01A4" +
		"\x03\x02\x02\x02\\\u01A8\x03\x02\x02\x02^\u01AA\x03\x02\x02\x02`\u01AE" +
		"\x03\x02\x02\x02b\u01B0\x03\x02\x02\x02df\x05\x04\x03\x02ed\x03\x02\x02" +
		"\x02fg\x03\x02\x02\x02ge\x03\x02\x02\x02gh\x03\x02\x02\x02h\x03\x03\x02" +
		"\x02\x02ix\x05\x06\x04\x02jx\x05\n\x06\x02kx\x05\x0E\b\x02lx\x05\x10\t" +
		"\x02mx\x05\x12\n\x02nx\x05\x14\v\x02ox\x05\x16\f\x02px\x05\x18\r\x02q" +
		"x\x05\x1A\x0E\x02rx\x05\x1C\x0F\x02sx\x05\x1E\x10\x02tx\x05 \x11\x02u" +
		"x\x05\"\x12\x02vx\x05$\x13\x02wi\x03\x02\x02\x02wj\x03\x02\x02\x02wk\x03" +
		"\x02\x02\x02wl\x03\x02\x02\x02wm\x03\x02\x02\x02wn\x03\x02\x02\x02wo\x03" +
		"\x02\x02\x02wp\x03\x02\x02\x02wq\x03\x02\x02\x02wr\x03\x02\x02\x02ws\x03" +
		"\x02\x02\x02wt\x03\x02\x02\x02wu\x03\x02\x02\x02wv\x03\x02\x02\x02x\x05" +
		"\x03\x02\x02\x02yz\x07\x03\x02\x02z{\x05\b\x05\x02{|\x07\x04\x02\x02|" +
		"~\x05\\/\x02}\x7F\x05&\x14\x02~}\x03\x02\x02\x02\x7F\x80\x03\x02\x02\x02" +
		"\x80~\x03\x02\x02\x02\x80\x81\x03\x02\x02\x02\x81\x82\x03\x02\x02\x02" +
		"\x82\x83\x07\x05\x02\x02\x83\x07\x03\x02\x02\x02\x84\x87\x05\\/\x02\x85" +
		"\x87\x05V,\x02\x86\x84\x03\x02\x02\x02\x86\x85\x03\x02\x02\x02\x87\t\x03" +
		"\x02\x02\x02\x88\x89\x07\x06\x02\x02\x89\x8A\x05\f\x07\x02\x8A\x8B\x07" +
		"\x04\x02\x02\x8B\x8C\x05\\/\x02\x8C\x8E\x03\x02\x02\x02\x8D\x8F\x05\\" +
		"/\x02\x8E\x8D\x03\x02\x02\x02\x8F\x90\x03\x02\x02\x02\x90\x8E\x03\x02" +
		"\x02\x02\x90\x91\x03\x02\x02\x02\x91\x93\x03\x02\x02\x02\x92\x94\x05b" +
		"2\x02\x93\x92\x03\x02\x02\x02\x93\x94\x03\x02\x02\x02\x94\v\x03\x02\x02" +
		"\x02\x95\x98\x05\\/\x02\x96\x98\x05V,\x02\x97\x95\x03\x02\x02\x02\x97" +
		"\x96\x03\x02\x02\x02\x98\r\x03\x02\x02\x02\x99\x9A\t\x02\x02\x02\x9A\x9C" +
		"\x05P)\x02\x9B\x9D\x07<\x02\x02\x9C\x9B\x03\x02\x02\x02\x9C\x9D\x03\x02" +
		"\x02\x02\x9D\x9F\x03\x02\x02\x02\x9E\xA0\x05:\x1E\x02\x9F\x9E\x03\x02" +
		"\x02\x02\x9F\xA0\x03\x02\x02\x02\xA0\xA2\x03\x02\x02\x02\xA1\xA3\x05b" +
		"2\x02\xA2\xA1\x03\x02\x02\x02\xA2\xA3\x03\x02\x02\x02\xA3\x0F\x03\x02" +
		"\x02\x02\xA4\xA5\t\x03\x02\x02\xA5\xA6\x05\\/\x02\xA6\x11\x03\x02\x02" +
		"\x02\xA7\xA8\x07\v\x02\x02\xA8\xA9\x05P)\x02\xA9\xAA\x07\f\x02\x02\xAA" +
		"\xAB\x05:\x1E\x02\xAB\x13\x03\x02\x02\x02\xAC\xAD\t\x04\x02\x02\xAD\xAE" +
		"\x05P)\x02\xAE\x15\x03\x02\x02\x02\xAF\xB0\x07\x0F\x02\x02\xB0\xB1\x05" +
		"\\/\x02\xB1\x17\x03\x02\x02\x02\xB2\xB3\x07\x10\x02\x02\xB3\xB4\x05\\" +
		"/\x02\xB4\x19\x03\x02\x02\x02\xB5\xB6\x07\x11\x02\x02\xB6\xB7\x05P)\x02" +
		"\xB7\xB8\x07\x12\x02\x02\xB8\xB9\x05:\x1E\x02\xB9\x1B\x03\x02\x02\x02" +
		"\xBA\xBB\x07\x13\x02\x02\xBB\xBC\x05\\/\x02\xBC\x1D\x03\x02\x02\x02\xBD" +
		"\xBE\x07\x14\x02\x02\xBE\xBF\x05P)\x02\xBF\x1F\x03\x02\x02\x02\xC0\xC1" +
		"\x07\x15\x02\x02\xC1\xC2\x05^0\x02\xC2\xC3\x07\x16\x02\x02\xC3\xC4\x05" +
		"8\x1D\x02\xC4!\x03\x02\x02\x02\xC5\xC6\x07\x17\x02\x02\xC6\xC7\x05P)\x02" +
		"\xC7#\x03\x02\x02\x02\xC8\xC9\x07\x18\x02\x02\xC9\xCE\x05\\/\x02\xCA\xCB" +
		"\x07;\x02\x02\xCB\xCD\x05\\/\x02\xCC\xCA\x03\x02\x02\x02\xCD\xD0\x03\x02" +
		"\x02\x02\xCE\xCC\x03\x02\x02\x02\xCE\xCF\x03\x02\x02\x02\xCF\xD1\x03\x02" +
		"\x02\x02\xD0\xCE\x03\x02\x02\x02\xD1\xD2\x07\f\x02\x02\xD2\xD3\x05:\x1E" +
		"\x02\xD3%\x03\x02\x02\x02\xD4\xDE\x05(\x15\x02\xD5\xDE\x05*\x16\x02\xD6" +
		"\xDE\x05,\x17\x02\xD7\xDE\x05.\x18\x02\xD8\xDE\x052\x1A\x02\xD9\xDE\x05" +
		"0\x19\x02\xDA\xDB\x05H%\x02\xDB\xDC\x07=\x02\x02\xDC\xDE\x03\x02\x02\x02" +
		"\xDD\xD4\x03\x02\x02\x02\xDD\xD5\x03\x02\x02\x02\xDD\xD6\x03\x02\x02\x02" +
		"\xDD\xD7\x03\x02\x02\x02\xDD\xD8\x03\x02\x02\x02\xDD\xD9\x03\x02\x02\x02" +
		"\xDD\xDA\x03\x02\x02\x02\xDE\'\x03\x02\x02\x02\xDF\xE0\x07\x19\x02\x02" +
		"\xE0\xE2\x054\x1B\x02\xE1\xE3\x05&\x14\x02\xE2\xE1\x03\x02\x02\x02\xE3" +
		"\xE4\x03\x02\x02\x02\xE4\xE2\x03\x02\x02\x02\xE4\xE5\x03\x02\x02\x02\xE5" +
		"\xED\x03\x02\x02\x02\xE6\xE7\x07\x1A\x02\x02\xE7\xE9\x054\x1B\x02\xE8" +
		"\xEA\x05&\x14\x02\xE9\xE8\x03\x02\x02\x02\xEA\xEB\x03\x02\x02\x02\xEB" +
		"\xE9\x03\x02\x02\x02\xEB\xEC\x03\x02\x02\x02\xEC\xEE\x03\x02\x02\x02\xED" +
		"\xE6\x03\x02\x02\x02\xED\xEE\x03\x02\x02\x02\xEE\xF5\x03\x02\x02\x02\xEF" +
		"\xF1\x07\x1B\x02\x02\xF0\xF2\x05&\x14\x02\xF1\xF0\x03\x02\x02\x02\xF2" +
		"\xF3\x03\x02\x02\x02\xF3\xF1\x03\x02\x02\x02\xF3\xF4\x03\x02\x02\x02\xF4" +
		"\xF6\x03\x02\x02\x02\xF5\xEF\x03\x02\x02\x02\xF5\xF6\x03\x02\x02\x02\xF6" +
		"\xF7\x03\x02\x02\x02\xF7\xF9\x07\x1C\x02\x02\xF8\xFA\x07=\x02\x02\xF9" +
		"\xF8\x03\x02\x02\x02\xF9\xFA\x03\x02\x02\x02\xFA)\x03\x02\x02\x02\xFB" +
		"\xFC\x07\x1D\x02\x02\xFC\xFE\x054\x1B\x02\xFD\xFF\x05&\x14\x02\xFE\xFD" +
		"\x03\x02\x02\x02\xFF\u0100\x03\x02\x02\x02\u0100\xFE\x03\x02\x02\x02\u0100" +
		"\u0101\x03\x02\x02\x02\u0101+\x03\x02\x02\x02\u0102\u0104\x07\x1E\x02" +
		"\x02\u0103\u0105\x05&\x14\x02\u0104\u0103\x03\x02\x02\x02\u0105\u0106" +
		"\x03\x02\x02\x02\u0106\u0104\x03\x02\x02\x02\u0106\u0107\x03\x02\x02\x02" +
		"\u0107\u0108\x03\x02\x02\x02\u0108\u0109\x07\x1D\x02\x02\u0109\u010A\x05" +
		"4\x1B\x02\u010A-\x03\x02\x02\x02\u010B\u010C\x07\x1F\x02\x02\u010C\u010D" +
		"\x05\\/\x02\u010D\u010E\x07 \x02\x02\u010E\u0110\x05:\x1E\x02\u010F\u0111" +
		"\x05&\x14\x02\u0110\u010F\x03\x02\x02\x02\u0111\u0112\x03\x02\x02\x02" +
		"\u0112\u0110\x03\x02\x02\x02\u0112\u0113\x03\x02\x02\x02\u0113\u0114\x03" +
		"\x02\x02\x02\u0114\u0115\x07!\x02\x02\u0115/\x03\x02\x02\x02\u0116\u0118" +
		"\x07\"\x02\x02\u0117\u0119\x05&\x14\x02\u0118\u0117\x03\x02\x02\x02\u0119" +
		"\u011A\x03\x02\x02\x02\u011A\u0118\x03\x02\x02\x02\u011A\u011B\x03\x02" +
		"\x02\x02\u011B\u011C\x03\x02\x02\x02\u011C\u011D\x07#\x02\x02\u011D\u011F" +
		"\x05P)\x02\u011E\u0120\x05&\x14\x02\u011F\u011E\x03\x02\x02\x02\u0120" +
		"\u0121\x03\x02\x02\x02\u0121\u011F\x03\x02\x02\x02\u0121\u0122\x03\x02" +
		"\x02\x02\u0122\u0123\x03\x02\x02\x02\u0123\u0124\x07$\x02\x02\u01241\x03" +
		"\x02\x02\x02\u0125\u0126\x05P)\x02\u0126\u0127\x07<\x02\x02\u0127\u0128" +
		"\x05:\x1E\x02\u0128\u0129\x07=\x02\x02\u01293\x03\x02\x02\x02\u012A\u012B" +
		"\x07+\x02\x02\u012B\u0131\x05:\x1E\x02\u012C\u012D\x056\x1C\x02\u012D" +
		"\u012E\x05:\x1E\x02\u012E\u0130\x03\x02\x02\x02\u012F\u012C\x03\x02\x02" +
		"\x02\u0130\u0133\x03\x02\x02\x02\u0131\u012F\x03\x02\x02\x02\u0131\u0132" +
		"\x03\x02\x02\x02\u0132\u0134\x03\x02\x02\x02\u0133\u0131\x03\x02\x02\x02" +
		"\u0134\u0135\x07,\x02\x02\u01355\x03\x02\x02\x02\u0136\u0137\t\x05\x02" +
		"\x02\u01377\x03\x02\x02\x02\u0138\u013D\x05:\x1E\x02\u0139\u013A\x07;" +
		"\x02\x02\u013A\u013C\x05:\x1E\x02\u013B\u0139\x03\x02\x02\x02\u013C\u013F" +
		"\x03\x02\x02\x02\u013D\u013B\x03\x02\x02\x02\u013D\u013E\x03\x02\x02\x02" +
		"\u013E9\x03\x02\x02\x02\u013F\u013D\x03\x02\x02\x02\u0140\u0145\x05<\x1F" +
		"\x02\u0141\u0142\t\x06\x02\x02\u0142\u0144\x05<\x1F\x02\u0143\u0141\x03" +
		"\x02\x02\x02\u0144\u0147\x03\x02\x02\x02\u0145\u0143\x03\x02\x02\x02\u0145" +
		"\u0146\x03\x02\x02\x02\u0146;\x03\x02\x02\x02\u0147\u0145\x03\x02\x02" +
		"\x02\u0148\u014D\x05> \x02\u0149\u014A\t\x07\x02\x02\u014A\u014C\x05>" +
		" \x02\u014B\u0149\x03\x02\x02\x02\u014C\u014F\x03\x02\x02\x02\u014D\u014B" +
		"\x03\x02\x02\x02\u014D\u014E\x03\x02\x02\x02\u014E=\x03\x02\x02\x02\u014F" +
		"\u014D\x03\x02\x02\x02\u0150\u0155\x05@!\x02\u0151\u0152\x07:\x02\x02" +
		"\u0152\u0154\x05@!\x02\u0153\u0151\x03\x02\x02\x02\u0154\u0157\x03\x02" +
		"\x02\x02\u0155\u0153\x03\x02\x02\x02\u0155\u0156\x03\x02\x02\x02\u0156" +
		"?\x03\x02\x02\x02\u0157\u0155\x03\x02\x02\x02\u0158\u0159\x07-\x02\x02" +
		"\u0159\u015E\x05@!\x02\u015A\u015B\x07.\x02\x02\u015B\u015E\x05@!\x02" +
		"\u015C\u015E\x05B\"\x02\u015D\u0158\x03\x02\x02\x02\u015D\u015A\x03\x02" +
		"\x02\x02\u015D\u015C\x03\x02\x02\x02\u015EA\x03\x02\x02\x02\u015F\u016E" +
		"\x05V,\x02\u0160\u016E\x05F$\x02\u0161\u016E\x05L\'\x02\u0162\u016E\x05" +
		"P)\x02\u0163\u016E\x05X-\x02\u0164\u016E\x05Z.\x02\u0165\u016E\x05T+\x02" +
		"\u0166\u016E\x05D#\x02\u0167\u0168\x07+\x02\x02\u0168\u0169\x05:\x1E\x02" +
		"\u0169\u016A\x07,\x02\x02\u016A\u016E\x03\x02\x02\x02\u016B\u016C\x07" +
		"%\x02\x02\u016C\u016E\x05:\x1E\x02\u016D\u015F\x03\x02\x02\x02\u016D\u0160" +
		"\x03\x02\x02\x02\u016D\u0161\x03\x02\x02\x02\u016D\u0162\x03\x02\x02\x02" +
		"\u016D\u0163\x03\x02\x02\x02\u016D\u0164\x03\x02\x02\x02\u016D\u0165\x03" +
		"\x02\x02\x02\u016D\u0166\x03\x02\x02\x02\u016D\u0167\x03\x02\x02\x02\u016D" +
		"\u016B\x03\x02\x02\x02\u016EC\x03\x02\x02\x02\u016F\u0170\x07?\x02\x02" +
		"\u0170E\x03\x02\x02\x02\u0171\u0172\x05\\/\x02\u0172\u0173\x07+\x02\x02" +
		"\u0173\u0174\x058\x1D\x02\u0174\u0175\x07,\x02\x02\u0175G\x03\x02\x02" +
		"\x02\u0176\u0179\x05L\'\x02\u0177\u0179\x05J&\x02\u0178\u0176\x03\x02" +
		"\x02\x02\u0178\u0177\x03\x02\x02\x02\u0179I\x03\x02\x02\x02\u017A\u017C" +
		"\x07&\x02\x02\u017B\u017D\x05:\x1E\x02\u017C\u017B\x03\x02\x02\x02\u017C" +
		"\u017D\x03\x02\x02\x02\u017DK\x03\x02\x02\x02\u017E\u017F\x05P)\x02\u017F" +
		"\u0180\x07\x04\x02\x02\u0180\u0181\x05N(\x02\u0181M\x03\x02\x02\x02\u0182" +
		"\u0188\x05\\/\x02\u0183\u0185\x07+\x02\x02\u0184\u0186\x058\x1D\x02\u0185" +
		"\u0184\x03\x02\x02\x02\u0185\u0186\x03\x02\x02\x02\u0186\u0187\x03\x02" +
		"\x02\x02\u0187\u0189\x07,\x02\x02\u0188\u0183\x03\x02\x02\x02\u0188\u0189" +
		"\x03\x02\x02\x02\u0189O\x03\x02\x02\x02\u018A\u0193\x05R*\x02\u018B\u018C" +
		"\x07\x05\x02\x02\u018C\u0192\x05\\/\x02\u018D\u018E\x07\'\x02\x02\u018E" +
		"\u018F\x05:\x1E\x02\u018F\u0190\x07(\x02\x02\u0190\u0192\x03\x02\x02\x02" +
		"\u0191\u018B\x03\x02\x02\x02\u0191\u018D\x03\x02\x02\x02\u0192\u0195\x03" +
		"\x02\x02\x02\u0193\u0191\x03\x02\x02\x02\u0193\u0194\x03\x02\x02\x02\u0194" +
		"Q\x03\x02\x02\x02\u0195\u0193\x03\x02\x02\x02\u0196\u0199\x05\\/\x02\u0197" +
		"\u0199\x05V,\x02\u0198\u0196\x03\x02\x02\x02\u0198\u0197\x03\x02\x02\x02" +
		"\u0199S\x03\x02\x02\x02\u019A\u019C\x07)\x02\x02\u019B\u019D\x058\x1D" +
		"\x02\u019C\u019B\x03\x02\x02\x02\u019C\u019D\x03\x02\x02\x02\u019D\u019E" +
		"\x03\x02\x02\x02\u019E\u019F\x07*\x02\x02\u019FU\x03\x02\x02\x02\u01A0" +
		"\u01A1\x07B\x02\x02\u01A1W\x03\x02\x02\x02\u01A2\u01A3\x07C\x02\x02\u01A3" +
		"Y\x03\x02\x02\x02\u01A4\u01A5\x07D\x02\x02\u01A5[\x03\x02\x02\x02\u01A6" +
		"\u01A9\x05`1\x02\u01A7\u01A9\x05^0\x02\u01A8\u01A6\x03\x02\x02\x02\u01A8" +
		"\u01A7\x03\x02\x02\x02\u01A9]\x03\x02\x02\x02\u01AA\u01AC\x07>\x02\x02" +
		"\u01AB\u01AD\x07A\x02\x02\u01AC\u01AB\x03\x02\x02\x02\u01AC\u01AD\x03" +
		"\x02\x02\x02\u01AD_\x03\x02\x02\x02\u01AE\u01AF\x07A\x02\x02\u01AFa\x03" +
		"\x02\x02\x02\u01B0\u01B1\x07@\x02\x02\u01B1c\x03\x02\x02\x02*gw\x80\x86" +
		"\x90\x93\x97\x9C\x9F\xA2\xCE\xDD\xE4\xEB\xED\xF3\xF5\xF9\u0100\u0106\u0112" +
		"\u011A\u0121\u0131\u013D\u0145\u014D\u0155\u015D\u016D\u0178\u017C\u0185" +
		"\u0188\u0191\u0193\u0198\u019C\u01A8\u01AC";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!mooParser.__ATN) {
			mooParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(mooParser._serializedATN));
		}

		return mooParser.__ATN;
	}

}

export class ProgContext extends ParserRuleContext {
	public declaration(): DeclarationContext[];
	public declaration(i: number): DeclarationContext;
	public declaration(i?: number): DeclarationContext | DeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DeclarationContext);
		} else {
			return this.getRuleContext(i, DeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mooParser.RULE_prog; }
	// @Override
	public enterRule(listener: mooListener): void {
		if (listener.enterProg) {
			listener.enterProg(this);
		}
	}
	// @Override
	public exitRule(listener: mooListener): void {
		if (listener.exitProg) {
			listener.exitProg(this);
		}
	}
}


export class DeclarationContext extends ParserRuleContext {
	public programdecl(): ProgramdeclContext | undefined {
		return this.tryGetRuleContext(0, ProgramdeclContext);
	}
	public verbdecl(): VerbdeclContext | undefined {
		return this.tryGetRuleContext(0, VerbdeclContext);
	}
	public propertydecl(): PropertydeclContext | undefined {
		return this.tryGetRuleContext(0, PropertydeclContext);
	}
	public rmpropertydecl(): RmpropertydeclContext | undefined {
		return this.tryGetRuleContext(0, RmpropertydeclContext);
	}
	public setpropertydecl(): SetpropertydeclContext | undefined {
		return this.tryGetRuleContext(0, SetpropertydeclContext);
	}
	public displaypropertydecl(): DisplaypropertydeclContext | undefined {
		return this.tryGetRuleContext(0, DisplaypropertydeclContext);
	}
	public kidsdecl(): KidsdeclContext | undefined {
		return this.tryGetRuleContext(0, KidsdeclContext);
	}
	public parentdecl(): ParentdeclContext | undefined {
		return this.tryGetRuleContext(0, ParentdeclContext);
	}
	public describedecl(): DescribedeclContext | undefined {
		return this.tryGetRuleContext(0, DescribedeclContext);
	}
	public contentsdecl(): ContentsdeclContext | undefined {
		return this.tryGetRuleContext(0, ContentsdeclContext);
	}
	public noteditdecl(): NoteditdeclContext | undefined {
		return this.tryGetRuleContext(0, NoteditdeclContext);
	}
	public createdecl(): CreatedeclContext | undefined {
		return this.tryGetRuleContext(0, CreatedeclContext);
	}
	public editdecl(): EditdeclContext | undefined {
		return this.tryGetRuleContext(0, EditdeclContext);
	}
	public addaliasdecl(): AddaliasdeclContext | undefined {
		return this.tryGetRuleContext(0, AddaliasdeclContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mooParser.RULE_declaration; }
	// @Override
	public enterRule(listener: mooListener): void {
		if (listener.enterDeclaration) {
			listener.enterDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: mooListener): void {
		if (listener.exitDeclaration) {
			listener.exitDeclaration(this);
		}
	}
}


export class ProgramdeclContext extends ParserRuleContext {
	public programname(): ProgramnameContext {
		return this.getRuleContext(0, ProgramnameContext);
	}
	public name(): NameContext {
		return this.getRuleContext(0, NameContext);
	}
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mooParser.RULE_programdecl; }
	// @Override
	public enterRule(listener: mooListener): void {
		if (listener.enterProgramdecl) {
			listener.enterProgramdecl(this);
		}
	}
	// @Override
	public exitRule(listener: mooListener): void {
		if (listener.exitProgramdecl) {
			listener.exitProgramdecl(this);
		}
	}
}


export class ProgramnameContext extends ParserRuleContext {
	public name(): NameContext | undefined {
		return this.tryGetRuleContext(0, NameContext);
	}
	public stringliteral(): StringliteralContext | undefined {
		return this.tryGetRuleContext(0, StringliteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mooParser.RULE_programname; }
	// @Override
	public enterRule(listener: mooListener): void {
		if (listener.enterProgramname) {
			listener.enterProgramname(this);
		}
	}
	// @Override
	public exitRule(listener: mooListener): void {
		if (listener.exitProgramname) {
			listener.exitProgramname(this);
		}
	}
}


export class VerbdeclContext extends ParserRuleContext {
	public verbname(): VerbnameContext | undefined {
		return this.tryGetRuleContext(0, VerbnameContext);
	}
	public name(): NameContext[];
	public name(i: number): NameContext;
	public name(i?: number): NameContext | NameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NameContext);
		} else {
			return this.getRuleContext(i, NameContext);
		}
	}
	public permissions(): PermissionsContext | undefined {
		return this.tryGetRuleContext(0, PermissionsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mooParser.RULE_verbdecl; }
	// @Override
	public enterRule(listener: mooListener): void {
		if (listener.enterVerbdecl) {
			listener.enterVerbdecl(this);
		}
	}
	// @Override
	public exitRule(listener: mooListener): void {
		if (listener.exitVerbdecl) {
			listener.exitVerbdecl(this);
		}
	}
}


export class VerbnameContext extends ParserRuleContext {
	public name(): NameContext | undefined {
		return this.tryGetRuleContext(0, NameContext);
	}
	public stringliteral(): StringliteralContext | undefined {
		return this.tryGetRuleContext(0, StringliteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mooParser.RULE_verbname; }
	// @Override
	public enterRule(listener: mooListener): void {
		if (listener.enterVerbname) {
			listener.enterVerbname(this);
		}
	}
	// @Override
	public exitRule(listener: mooListener): void {
		if (listener.exitVerbname) {
			listener.exitVerbname(this);
		}
	}
}


export class PropertydeclContext extends ParserRuleContext {
	public property(): PropertyContext {
		return this.getRuleContext(0, PropertyContext);
	}
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(mooParser.ASSIGN, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public permissions(): PermissionsContext | undefined {
		return this.tryGetRuleContext(0, PermissionsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mooParser.RULE_propertydecl; }
	// @Override
	public enterRule(listener: mooListener): void {
		if (listener.enterPropertydecl) {
			listener.enterPropertydecl(this);
		}
	}
	// @Override
	public exitRule(listener: mooListener): void {
		if (listener.exitPropertydecl) {
			listener.exitPropertydecl(this);
		}
	}
}


export class RmpropertydeclContext extends ParserRuleContext {
	public name(): NameContext {
		return this.getRuleContext(0, NameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mooParser.RULE_rmpropertydecl; }
	// @Override
	public enterRule(listener: mooListener): void {
		if (listener.enterRmpropertydecl) {
			listener.enterRmpropertydecl(this);
		}
	}
	// @Override
	public exitRule(listener: mooListener): void {
		if (listener.exitRmpropertydecl) {
			listener.exitRmpropertydecl(this);
		}
	}
}


export class SetpropertydeclContext extends ParserRuleContext {
	public property(): PropertyContext {
		return this.getRuleContext(0, PropertyContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mooParser.RULE_setpropertydecl; }
	// @Override
	public enterRule(listener: mooListener): void {
		if (listener.enterSetpropertydecl) {
			listener.enterSetpropertydecl(this);
		}
	}
	// @Override
	public exitRule(listener: mooListener): void {
		if (listener.exitSetpropertydecl) {
			listener.exitSetpropertydecl(this);
		}
	}
}


export class DisplaypropertydeclContext extends ParserRuleContext {
	public property(): PropertyContext {
		return this.getRuleContext(0, PropertyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mooParser.RULE_displaypropertydecl; }
	// @Override
	public enterRule(listener: mooListener): void {
		if (listener.enterDisplaypropertydecl) {
			listener.enterDisplaypropertydecl(this);
		}
	}
	// @Override
	public exitRule(listener: mooListener): void {
		if (listener.exitDisplaypropertydecl) {
			listener.exitDisplaypropertydecl(this);
		}
	}
}


export class KidsdeclContext extends ParserRuleContext {
	public name(): NameContext {
		return this.getRuleContext(0, NameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mooParser.RULE_kidsdecl; }
	// @Override
	public enterRule(listener: mooListener): void {
		if (listener.enterKidsdecl) {
			listener.enterKidsdecl(this);
		}
	}
	// @Override
	public exitRule(listener: mooListener): void {
		if (listener.exitKidsdecl) {
			listener.exitKidsdecl(this);
		}
	}
}


export class ParentdeclContext extends ParserRuleContext {
	public name(): NameContext {
		return this.getRuleContext(0, NameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mooParser.RULE_parentdecl; }
	// @Override
	public enterRule(listener: mooListener): void {
		if (listener.enterParentdecl) {
			listener.enterParentdecl(this);
		}
	}
	// @Override
	public exitRule(listener: mooListener): void {
		if (listener.exitParentdecl) {
			listener.exitParentdecl(this);
		}
	}
}


export class DescribedeclContext extends ParserRuleContext {
	public property(): PropertyContext {
		return this.getRuleContext(0, PropertyContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mooParser.RULE_describedecl; }
	// @Override
	public enterRule(listener: mooListener): void {
		if (listener.enterDescribedecl) {
			listener.enterDescribedecl(this);
		}
	}
	// @Override
	public exitRule(listener: mooListener): void {
		if (listener.exitDescribedecl) {
			listener.exitDescribedecl(this);
		}
	}
}


export class ContentsdeclContext extends ParserRuleContext {
	public name(): NameContext {
		return this.getRuleContext(0, NameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mooParser.RULE_contentsdecl; }
	// @Override
	public enterRule(listener: mooListener): void {
		if (listener.enterContentsdecl) {
			listener.enterContentsdecl(this);
		}
	}
	// @Override
	public exitRule(listener: mooListener): void {
		if (listener.exitContentsdecl) {
			listener.exitContentsdecl(this);
		}
	}
}


export class NoteditdeclContext extends ParserRuleContext {
	public property(): PropertyContext {
		return this.getRuleContext(0, PropertyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mooParser.RULE_noteditdecl; }
	// @Override
	public enterRule(listener: mooListener): void {
		if (listener.enterNoteditdecl) {
			listener.enterNoteditdecl(this);
		}
	}
	// @Override
	public exitRule(listener: mooListener): void {
		if (listener.exitNoteditdecl) {
			listener.exitNoteditdecl(this);
		}
	}
}


export class CreatedeclContext extends ParserRuleContext {
	public sysname(): SysnameContext {
		return this.getRuleContext(0, SysnameContext);
	}
	public expressionlist(): ExpressionlistContext {
		return this.getRuleContext(0, ExpressionlistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mooParser.RULE_createdecl; }
	// @Override
	public enterRule(listener: mooListener): void {
		if (listener.enterCreatedecl) {
			listener.enterCreatedecl(this);
		}
	}
	// @Override
	public exitRule(listener: mooListener): void {
		if (listener.exitCreatedecl) {
			listener.exitCreatedecl(this);
		}
	}
}


export class EditdeclContext extends ParserRuleContext {
	public property(): PropertyContext {
		return this.getRuleContext(0, PropertyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mooParser.RULE_editdecl; }
	// @Override
	public enterRule(listener: mooListener): void {
		if (listener.enterEditdecl) {
			listener.enterEditdecl(this);
		}
	}
	// @Override
	public exitRule(listener: mooListener): void {
		if (listener.exitEditdecl) {
			listener.exitEditdecl(this);
		}
	}
}


export class AddaliasdeclContext extends ParserRuleContext {
	public name(): NameContext[];
	public name(i: number): NameContext;
	public name(i?: number): NameContext | NameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NameContext);
		} else {
			return this.getRuleContext(i, NameContext);
		}
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mooParser.COMMA);
		} else {
			return this.getToken(mooParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mooParser.RULE_addaliasdecl; }
	// @Override
	public enterRule(listener: mooListener): void {
		if (listener.enterAddaliasdecl) {
			listener.enterAddaliasdecl(this);
		}
	}
	// @Override
	public exitRule(listener: mooListener): void {
		if (listener.exitAddaliasdecl) {
			listener.exitAddaliasdecl(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public ifblock(): IfblockContext | undefined {
		return this.tryGetRuleContext(0, IfblockContext);
	}
	public whileblock(): WhileblockContext | undefined {
		return this.tryGetRuleContext(0, WhileblockContext);
	}
	public doblock(): DoblockContext | undefined {
		return this.tryGetRuleContext(0, DoblockContext);
	}
	public forblock(): ForblockContext | undefined {
		return this.tryGetRuleContext(0, ForblockContext);
	}
	public assignblock(): AssignblockContext | undefined {
		return this.tryGetRuleContext(0, AssignblockContext);
	}
	public tryblock(): TryblockContext | undefined {
		return this.tryGetRuleContext(0, TryblockContext);
	}
	public command(): CommandContext | undefined {
		return this.tryGetRuleContext(0, CommandContext);
	}
	public SEMICOLON(): TerminalNode | undefined { return this.tryGetToken(mooParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mooParser.RULE_statement; }
	// @Override
	public enterRule(listener: mooListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: mooListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
}


export class IfblockContext extends ParserRuleContext {
	public condition(): ConditionContext[];
	public condition(i: number): ConditionContext;
	public condition(i?: number): ConditionContext | ConditionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConditionContext);
		} else {
			return this.getRuleContext(i, ConditionContext);
		}
	}
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public SEMICOLON(): TerminalNode | undefined { return this.tryGetToken(mooParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mooParser.RULE_ifblock; }
	// @Override
	public enterRule(listener: mooListener): void {
		if (listener.enterIfblock) {
			listener.enterIfblock(this);
		}
	}
	// @Override
	public exitRule(listener: mooListener): void {
		if (listener.exitIfblock) {
			listener.exitIfblock(this);
		}
	}
}


export class WhileblockContext extends ParserRuleContext {
	public condition(): ConditionContext {
		return this.getRuleContext(0, ConditionContext);
	}
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mooParser.RULE_whileblock; }
	// @Override
	public enterRule(listener: mooListener): void {
		if (listener.enterWhileblock) {
			listener.enterWhileblock(this);
		}
	}
	// @Override
	public exitRule(listener: mooListener): void {
		if (listener.exitWhileblock) {
			listener.exitWhileblock(this);
		}
	}
}


export class DoblockContext extends ParserRuleContext {
	public condition(): ConditionContext {
		return this.getRuleContext(0, ConditionContext);
	}
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mooParser.RULE_doblock; }
	// @Override
	public enterRule(listener: mooListener): void {
		if (listener.enterDoblock) {
			listener.enterDoblock(this);
		}
	}
	// @Override
	public exitRule(listener: mooListener): void {
		if (listener.exitDoblock) {
			listener.exitDoblock(this);
		}
	}
}


export class ForblockContext extends ParserRuleContext {
	public name(): NameContext {
		return this.getRuleContext(0, NameContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mooParser.RULE_forblock; }
	// @Override
	public enterRule(listener: mooListener): void {
		if (listener.enterForblock) {
			listener.enterForblock(this);
		}
	}
	// @Override
	public exitRule(listener: mooListener): void {
		if (listener.exitForblock) {
			listener.exitForblock(this);
		}
	}
}


export class TryblockContext extends ParserRuleContext {
	public property(): PropertyContext {
		return this.getRuleContext(0, PropertyContext);
	}
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mooParser.RULE_tryblock; }
	// @Override
	public enterRule(listener: mooListener): void {
		if (listener.enterTryblock) {
			listener.enterTryblock(this);
		}
	}
	// @Override
	public exitRule(listener: mooListener): void {
		if (listener.exitTryblock) {
			listener.exitTryblock(this);
		}
	}
}


export class AssignblockContext extends ParserRuleContext {
	public property(): PropertyContext {
		return this.getRuleContext(0, PropertyContext);
	}
	public ASSIGN(): TerminalNode { return this.getToken(mooParser.ASSIGN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public SEMICOLON(): TerminalNode { return this.getToken(mooParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mooParser.RULE_assignblock; }
	// @Override
	public enterRule(listener: mooListener): void {
		if (listener.enterAssignblock) {
			listener.enterAssignblock(this);
		}
	}
	// @Override
	public exitRule(listener: mooListener): void {
		if (listener.exitAssignblock) {
			listener.exitAssignblock(this);
		}
	}
}


export class ConditionContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(mooParser.LPAREN, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(mooParser.RPAREN, 0); }
	public relop(): RelopContext[];
	public relop(i: number): RelopContext;
	public relop(i?: number): RelopContext | RelopContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RelopContext);
		} else {
			return this.getRuleContext(i, RelopContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mooParser.RULE_condition; }
	// @Override
	public enterRule(listener: mooListener): void {
		if (listener.enterCondition) {
			listener.enterCondition(this);
		}
	}
	// @Override
	public exitRule(listener: mooListener): void {
		if (listener.exitCondition) {
			listener.exitCondition(this);
		}
	}
}


export class RelopContext extends ParserRuleContext {
	public EQ(): TerminalNode | undefined { return this.tryGetToken(mooParser.EQ, 0); }
	public NEQ(): TerminalNode | undefined { return this.tryGetToken(mooParser.NEQ, 0); }
	public GT(): TerminalNode | undefined { return this.tryGetToken(mooParser.GT, 0); }
	public GTE(): TerminalNode | undefined { return this.tryGetToken(mooParser.GTE, 0); }
	public LT(): TerminalNode | undefined { return this.tryGetToken(mooParser.LT, 0); }
	public LTE(): TerminalNode | undefined { return this.tryGetToken(mooParser.LTE, 0); }
	public AND(): TerminalNode | undefined { return this.tryGetToken(mooParser.AND, 0); }
	public OR(): TerminalNode | undefined { return this.tryGetToken(mooParser.OR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mooParser.RULE_relop; }
	// @Override
	public enterRule(listener: mooListener): void {
		if (listener.enterRelop) {
			listener.enterRelop(this);
		}
	}
	// @Override
	public exitRule(listener: mooListener): void {
		if (listener.exitRelop) {
			listener.exitRelop(this);
		}
	}
}


export class ExpressionlistContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mooParser.COMMA);
		} else {
			return this.getToken(mooParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mooParser.RULE_expressionlist; }
	// @Override
	public enterRule(listener: mooListener): void {
		if (listener.enterExpressionlist) {
			listener.enterExpressionlist(this);
		}
	}
	// @Override
	public exitRule(listener: mooListener): void {
		if (listener.exitExpressionlist) {
			listener.exitExpressionlist(this);
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
	public PLUS(): TerminalNode[];
	public PLUS(i: number): TerminalNode;
	public PLUS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mooParser.PLUS);
		} else {
			return this.getToken(mooParser.PLUS, i);
		}
	}
	public MINUS(): TerminalNode[];
	public MINUS(i: number): TerminalNode;
	public MINUS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mooParser.MINUS);
		} else {
			return this.getToken(mooParser.MINUS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mooParser.RULE_expression; }
	// @Override
	public enterRule(listener: mooListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: mooListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
}


export class TermContext extends ParserRuleContext {
	public factor(): FactorContext[];
	public factor(i: number): FactorContext;
	public factor(i?: number): FactorContext | FactorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FactorContext);
		} else {
			return this.getRuleContext(i, FactorContext);
		}
	}
	public TIMES(): TerminalNode[];
	public TIMES(i: number): TerminalNode;
	public TIMES(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mooParser.TIMES);
		} else {
			return this.getToken(mooParser.TIMES, i);
		}
	}
	public DIV(): TerminalNode[];
	public DIV(i: number): TerminalNode;
	public DIV(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mooParser.DIV);
		} else {
			return this.getToken(mooParser.DIV, i);
		}
	}
	public MOD(): TerminalNode[];
	public MOD(i: number): TerminalNode;
	public MOD(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mooParser.MOD);
		} else {
			return this.getToken(mooParser.MOD, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mooParser.RULE_term; }
	// @Override
	public enterRule(listener: mooListener): void {
		if (listener.enterTerm) {
			listener.enterTerm(this);
		}
	}
	// @Override
	public exitRule(listener: mooListener): void {
		if (listener.exitTerm) {
			listener.exitTerm(this);
		}
	}
}


export class FactorContext extends ParserRuleContext {
	public signedAtom(): SignedAtomContext[];
	public signedAtom(i: number): SignedAtomContext;
	public signedAtom(i?: number): SignedAtomContext | SignedAtomContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SignedAtomContext);
		} else {
			return this.getRuleContext(i, SignedAtomContext);
		}
	}
	public POW(): TerminalNode[];
	public POW(i: number): TerminalNode;
	public POW(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mooParser.POW);
		} else {
			return this.getToken(mooParser.POW, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mooParser.RULE_factor; }
	// @Override
	public enterRule(listener: mooListener): void {
		if (listener.enterFactor) {
			listener.enterFactor(this);
		}
	}
	// @Override
	public exitRule(listener: mooListener): void {
		if (listener.exitFactor) {
			listener.exitFactor(this);
		}
	}
}


export class SignedAtomContext extends ParserRuleContext {
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(mooParser.PLUS, 0); }
	public signedAtom(): SignedAtomContext | undefined {
		return this.tryGetRuleContext(0, SignedAtomContext);
	}
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(mooParser.MINUS, 0); }
	public atom(): AtomContext | undefined {
		return this.tryGetRuleContext(0, AtomContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mooParser.RULE_signedAtom; }
	// @Override
	public enterRule(listener: mooListener): void {
		if (listener.enterSignedAtom) {
			listener.enterSignedAtom(this);
		}
	}
	// @Override
	public exitRule(listener: mooListener): void {
		if (listener.exitSignedAtom) {
			listener.exitSignedAtom(this);
		}
	}
}


export class AtomContext extends ParserRuleContext {
	public stringliteral(): StringliteralContext | undefined {
		return this.tryGetRuleContext(0, StringliteralContext);
	}
	public functioninvocation(): FunctioninvocationContext | undefined {
		return this.tryGetRuleContext(0, FunctioninvocationContext);
	}
	public verbinvocation(): VerbinvocationContext | undefined {
		return this.tryGetRuleContext(0, VerbinvocationContext);
	}
	public property(): PropertyContext | undefined {
		return this.tryGetRuleContext(0, PropertyContext);
	}
	public integer(): IntegerContext | undefined {
		return this.tryGetRuleContext(0, IntegerContext);
	}
	public real(): RealContext | undefined {
		return this.tryGetRuleContext(0, RealContext);
	}
	public list(): ListContext | undefined {
		return this.tryGetRuleContext(0, ListContext);
	}
	public objref(): ObjrefContext | undefined {
		return this.tryGetRuleContext(0, ObjrefContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(mooParser.LPAREN, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(mooParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mooParser.RULE_atom; }
	// @Override
	public enterRule(listener: mooListener): void {
		if (listener.enterAtom) {
			listener.enterAtom(this);
		}
	}
	// @Override
	public exitRule(listener: mooListener): void {
		if (listener.exitAtom) {
			listener.exitAtom(this);
		}
	}
}


export class ObjrefContext extends ParserRuleContext {
	public OBJREF(): TerminalNode { return this.getToken(mooParser.OBJREF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mooParser.RULE_objref; }
	// @Override
	public enterRule(listener: mooListener): void {
		if (listener.enterObjref) {
			listener.enterObjref(this);
		}
	}
	// @Override
	public exitRule(listener: mooListener): void {
		if (listener.exitObjref) {
			listener.exitObjref(this);
		}
	}
}


export class FunctioninvocationContext extends ParserRuleContext {
	public name(): NameContext {
		return this.getRuleContext(0, NameContext);
	}
	public LPAREN(): TerminalNode { return this.getToken(mooParser.LPAREN, 0); }
	public expressionlist(): ExpressionlistContext {
		return this.getRuleContext(0, ExpressionlistContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(mooParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mooParser.RULE_functioninvocation; }
	// @Override
	public enterRule(listener: mooListener): void {
		if (listener.enterFunctioninvocation) {
			listener.enterFunctioninvocation(this);
		}
	}
	// @Override
	public exitRule(listener: mooListener): void {
		if (listener.exitFunctioninvocation) {
			listener.exitFunctioninvocation(this);
		}
	}
}


export class CommandContext extends ParserRuleContext {
	public verbinvocation(): VerbinvocationContext | undefined {
		return this.tryGetRuleContext(0, VerbinvocationContext);
	}
	public returncommand(): ReturncommandContext | undefined {
		return this.tryGetRuleContext(0, ReturncommandContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mooParser.RULE_command; }
	// @Override
	public enterRule(listener: mooListener): void {
		if (listener.enterCommand) {
			listener.enterCommand(this);
		}
	}
	// @Override
	public exitRule(listener: mooListener): void {
		if (listener.exitCommand) {
			listener.exitCommand(this);
		}
	}
}


export class ReturncommandContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mooParser.RULE_returncommand; }
	// @Override
	public enterRule(listener: mooListener): void {
		if (listener.enterReturncommand) {
			listener.enterReturncommand(this);
		}
	}
	// @Override
	public exitRule(listener: mooListener): void {
		if (listener.exitReturncommand) {
			listener.exitReturncommand(this);
		}
	}
}


export class VerbinvocationContext extends ParserRuleContext {
	public property(): PropertyContext {
		return this.getRuleContext(0, PropertyContext);
	}
	public verb(): VerbContext {
		return this.getRuleContext(0, VerbContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mooParser.RULE_verbinvocation; }
	// @Override
	public enterRule(listener: mooListener): void {
		if (listener.enterVerbinvocation) {
			listener.enterVerbinvocation(this);
		}
	}
	// @Override
	public exitRule(listener: mooListener): void {
		if (listener.exitVerbinvocation) {
			listener.exitVerbinvocation(this);
		}
	}
}


export class VerbContext extends ParserRuleContext {
	public name(): NameContext {
		return this.getRuleContext(0, NameContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(mooParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(mooParser.RPAREN, 0); }
	public expressionlist(): ExpressionlistContext | undefined {
		return this.tryGetRuleContext(0, ExpressionlistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mooParser.RULE_verb; }
	// @Override
	public enterRule(listener: mooListener): void {
		if (listener.enterVerb) {
			listener.enterVerb(this);
		}
	}
	// @Override
	public exitRule(listener: mooListener): void {
		if (listener.exitVerb) {
			listener.exitVerb(this);
		}
	}
}


export class PropertyContext extends ParserRuleContext {
	public propertyname(): PropertynameContext {
		return this.getRuleContext(0, PropertynameContext);
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public name(): NameContext[];
	public name(i: number): NameContext;
	public name(i?: number): NameContext | NameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NameContext);
		} else {
			return this.getRuleContext(i, NameContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mooParser.RULE_property; }
	// @Override
	public enterRule(listener: mooListener): void {
		if (listener.enterProperty) {
			listener.enterProperty(this);
		}
	}
	// @Override
	public exitRule(listener: mooListener): void {
		if (listener.exitProperty) {
			listener.exitProperty(this);
		}
	}
}


export class PropertynameContext extends ParserRuleContext {
	public name(): NameContext | undefined {
		return this.tryGetRuleContext(0, NameContext);
	}
	public stringliteral(): StringliteralContext | undefined {
		return this.tryGetRuleContext(0, StringliteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mooParser.RULE_propertyname; }
	// @Override
	public enterRule(listener: mooListener): void {
		if (listener.enterPropertyname) {
			listener.enterPropertyname(this);
		}
	}
	// @Override
	public exitRule(listener: mooListener): void {
		if (listener.exitPropertyname) {
			listener.exitPropertyname(this);
		}
	}
}


export class ListContext extends ParserRuleContext {
	public expressionlist(): ExpressionlistContext | undefined {
		return this.tryGetRuleContext(0, ExpressionlistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mooParser.RULE_list; }
	// @Override
	public enterRule(listener: mooListener): void {
		if (listener.enterList) {
			listener.enterList(this);
		}
	}
	// @Override
	public exitRule(listener: mooListener): void {
		if (listener.exitList) {
			listener.exitList(this);
		}
	}
}


export class StringliteralContext extends ParserRuleContext {
	public STRINGLITERAL(): TerminalNode { return this.getToken(mooParser.STRINGLITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mooParser.RULE_stringliteral; }
	// @Override
	public enterRule(listener: mooListener): void {
		if (listener.enterStringliteral) {
			listener.enterStringliteral(this);
		}
	}
	// @Override
	public exitRule(listener: mooListener): void {
		if (listener.exitStringliteral) {
			listener.exitStringliteral(this);
		}
	}
}


export class IntegerContext extends ParserRuleContext {
	public INTEGER(): TerminalNode { return this.getToken(mooParser.INTEGER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mooParser.RULE_integer; }
	// @Override
	public enterRule(listener: mooListener): void {
		if (listener.enterInteger) {
			listener.enterInteger(this);
		}
	}
	// @Override
	public exitRule(listener: mooListener): void {
		if (listener.exitInteger) {
			listener.exitInteger(this);
		}
	}
}


export class RealContext extends ParserRuleContext {
	public REAL(): TerminalNode { return this.getToken(mooParser.REAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mooParser.RULE_real; }
	// @Override
	public enterRule(listener: mooListener): void {
		if (listener.enterReal) {
			listener.enterReal(this);
		}
	}
	// @Override
	public exitRule(listener: mooListener): void {
		if (listener.exitReal) {
			listener.exitReal(this);
		}
	}
}


export class NameContext extends ParserRuleContext {
	public username(): UsernameContext | undefined {
		return this.tryGetRuleContext(0, UsernameContext);
	}
	public sysname(): SysnameContext | undefined {
		return this.tryGetRuleContext(0, SysnameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mooParser.RULE_name; }
	// @Override
	public enterRule(listener: mooListener): void {
		if (listener.enterName) {
			listener.enterName(this);
		}
	}
	// @Override
	public exitRule(listener: mooListener): void {
		if (listener.exitName) {
			listener.exitName(this);
		}
	}
}


export class SysnameContext extends ParserRuleContext {
	public DOLLAR(): TerminalNode { return this.getToken(mooParser.DOLLAR, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(mooParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mooParser.RULE_sysname; }
	// @Override
	public enterRule(listener: mooListener): void {
		if (listener.enterSysname) {
			listener.enterSysname(this);
		}
	}
	// @Override
	public exitRule(listener: mooListener): void {
		if (listener.exitSysname) {
			listener.exitSysname(this);
		}
	}
}


export class UsernameContext extends ParserRuleContext {
	public STRING(): TerminalNode { return this.getToken(mooParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mooParser.RULE_username; }
	// @Override
	public enterRule(listener: mooListener): void {
		if (listener.enterUsername) {
			listener.enterUsername(this);
		}
	}
	// @Override
	public exitRule(listener: mooListener): void {
		if (listener.exitUsername) {
			listener.exitUsername(this);
		}
	}
}


export class PermissionsContext extends ParserRuleContext {
	public PERMISSIONS(): TerminalNode { return this.getToken(mooParser.PERMISSIONS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mooParser.RULE_permissions; }
	// @Override
	public enterRule(listener: mooListener): void {
		if (listener.enterPermissions) {
			listener.enterPermissions(this);
		}
	}
	// @Override
	public exitRule(listener: mooListener): void {
		if (listener.exitPermissions) {
			listener.exitPermissions(this);
		}
	}
}


