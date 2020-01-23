// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/lua/Lua.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { LuaListener } from "./LuaListener";

export class LuaParser extends Parser {
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
	public static readonly T__51 = 52;
	public static readonly T__52 = 53;
	public static readonly T__53 = 54;
	public static readonly T__54 = 55;
	public static readonly NAME = 56;
	public static readonly NORMALSTRING = 57;
	public static readonly CHARSTRING = 58;
	public static readonly LONGSTRING = 59;
	public static readonly INT = 60;
	public static readonly HEX = 61;
	public static readonly FLOAT = 62;
	public static readonly HEX_FLOAT = 63;
	public static readonly COMMENT = 64;
	public static readonly LINE_COMMENT = 65;
	public static readonly WS = 66;
	public static readonly SHEBANG = 67;
	public static readonly RULE_chunk = 0;
	public static readonly RULE_block = 1;
	public static readonly RULE_stat = 2;
	public static readonly RULE_retstat = 3;
	public static readonly RULE_label = 4;
	public static readonly RULE_funcname = 5;
	public static readonly RULE_varlist = 6;
	public static readonly RULE_namelist = 7;
	public static readonly RULE_explist = 8;
	public static readonly RULE_exp = 9;
	public static readonly RULE_prefixexp = 10;
	public static readonly RULE_functioncall = 11;
	public static readonly RULE_varOrExp = 12;
	public static readonly RULE_var = 13;
	public static readonly RULE_varSuffix = 14;
	public static readonly RULE_nameAndArgs = 15;
	public static readonly RULE_args = 16;
	public static readonly RULE_functiondef = 17;
	public static readonly RULE_funcbody = 18;
	public static readonly RULE_parlist = 19;
	public static readonly RULE_tableconstructor = 20;
	public static readonly RULE_fieldlist = 21;
	public static readonly RULE_field = 22;
	public static readonly RULE_fieldsep = 23;
	public static readonly RULE_operatorOr = 24;
	public static readonly RULE_operatorAnd = 25;
	public static readonly RULE_operatorComparison = 26;
	public static readonly RULE_operatorStrcat = 27;
	public static readonly RULE_operatorAddSub = 28;
	public static readonly RULE_operatorMulDivMod = 29;
	public static readonly RULE_operatorBitwise = 30;
	public static readonly RULE_operatorUnary = 31;
	public static readonly RULE_operatorPower = 32;
	public static readonly RULE_number = 33;
	public static readonly RULE_string = 34;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"chunk", "block", "stat", "retstat", "label", "funcname", "varlist", "namelist", 
		"explist", "exp", "prefixexp", "functioncall", "varOrExp", "var", "varSuffix", 
		"nameAndArgs", "args", "functiondef", "funcbody", "parlist", "tableconstructor", 
		"fieldlist", "field", "fieldsep", "operatorOr", "operatorAnd", "operatorComparison", 
		"operatorStrcat", "operatorAddSub", "operatorMulDivMod", "operatorBitwise", 
		"operatorUnary", "operatorPower", "number", "string",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "';'", "'='", "'break'", "'goto'", "'do'", "'end'", "'while'", 
		"'repeat'", "'until'", "'if'", "'then'", "'elseif'", "'else'", "'for'", 
		"','", "'in'", "'function'", "'local'", "'return'", "'::'", "'.'", "':'", 
		"'nil'", "'false'", "'true'", "'...'", "'('", "')'", "'['", "']'", "'{'", 
		"'}'", "'or'", "'and'", "'<'", "'>'", "'<='", "'>='", "'~='", "'=='", 
		"'..'", "'+'", "'-'", "'*'", "'/'", "'%'", "'//'", "'&'", "'|'", "'~'", 
		"'<<'", "'>>'", "'not'", "'#'", "'^'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		"NAME", "NORMALSTRING", "CHARSTRING", "LONGSTRING", "INT", "HEX", "FLOAT", 
		"HEX_FLOAT", "COMMENT", "LINE_COMMENT", "WS", "SHEBANG",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(LuaParser._LITERAL_NAMES, LuaParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return LuaParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Lua.g4"; }

	// @Override
	public get ruleNames(): string[] { return LuaParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return LuaParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(LuaParser._ATN, this);
	}
	// @RuleVersion(0)
	public chunk(): ChunkContext {
		let _localctx: ChunkContext = new ChunkContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, LuaParser.RULE_chunk);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 70;
			this.block();
			this.state = 71;
			this.match(LuaParser.EOF);
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
		this.enterRule(_localctx, 2, LuaParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 76;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LuaParser.T__0) | (1 << LuaParser.T__2) | (1 << LuaParser.T__3) | (1 << LuaParser.T__4) | (1 << LuaParser.T__6) | (1 << LuaParser.T__7) | (1 << LuaParser.T__9) | (1 << LuaParser.T__13) | (1 << LuaParser.T__16) | (1 << LuaParser.T__17) | (1 << LuaParser.T__19) | (1 << LuaParser.T__26))) !== 0) || _la === LuaParser.NAME) {
				{
				{
				this.state = 73;
				this.stat();
				}
				}
				this.state = 78;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 80;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LuaParser.T__18) {
				{
				this.state = 79;
				this.retstat();
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
	public stat(): StatContext {
		let _localctx: StatContext = new StatContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, LuaParser.RULE_stat);
		let _la: number;
		try {
			this.state = 163;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 82;
				this.match(LuaParser.T__0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 83;
				this.varlist();
				this.state = 84;
				this.match(LuaParser.T__1);
				this.state = 85;
				this.explist();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 87;
				this.functioncall();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 88;
				this.label();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 89;
				this.match(LuaParser.T__2);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 90;
				this.match(LuaParser.T__3);
				this.state = 91;
				this.match(LuaParser.NAME);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 92;
				this.match(LuaParser.T__4);
				this.state = 93;
				this.block();
				this.state = 94;
				this.match(LuaParser.T__5);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 96;
				this.match(LuaParser.T__6);
				this.state = 97;
				this.exp(0);
				this.state = 98;
				this.match(LuaParser.T__4);
				this.state = 99;
				this.block();
				this.state = 100;
				this.match(LuaParser.T__5);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 102;
				this.match(LuaParser.T__7);
				this.state = 103;
				this.block();
				this.state = 104;
				this.match(LuaParser.T__8);
				this.state = 105;
				this.exp(0);
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 107;
				this.match(LuaParser.T__9);
				this.state = 108;
				this.exp(0);
				this.state = 109;
				this.match(LuaParser.T__10);
				this.state = 110;
				this.block();
				this.state = 118;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === LuaParser.T__11) {
					{
					{
					this.state = 111;
					this.match(LuaParser.T__11);
					this.state = 112;
					this.exp(0);
					this.state = 113;
					this.match(LuaParser.T__10);
					this.state = 114;
					this.block();
					}
					}
					this.state = 120;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 123;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === LuaParser.T__12) {
					{
					this.state = 121;
					this.match(LuaParser.T__12);
					this.state = 122;
					this.block();
					}
				}

				this.state = 125;
				this.match(LuaParser.T__5);
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 127;
				this.match(LuaParser.T__13);
				this.state = 128;
				this.match(LuaParser.NAME);
				this.state = 129;
				this.match(LuaParser.T__1);
				this.state = 130;
				this.exp(0);
				this.state = 131;
				this.match(LuaParser.T__14);
				this.state = 132;
				this.exp(0);
				this.state = 135;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === LuaParser.T__14) {
					{
					this.state = 133;
					this.match(LuaParser.T__14);
					this.state = 134;
					this.exp(0);
					}
				}

				this.state = 137;
				this.match(LuaParser.T__4);
				this.state = 138;
				this.block();
				this.state = 139;
				this.match(LuaParser.T__5);
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 141;
				this.match(LuaParser.T__13);
				this.state = 142;
				this.namelist();
				this.state = 143;
				this.match(LuaParser.T__15);
				this.state = 144;
				this.explist();
				this.state = 145;
				this.match(LuaParser.T__4);
				this.state = 146;
				this.block();
				this.state = 147;
				this.match(LuaParser.T__5);
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 149;
				this.match(LuaParser.T__16);
				this.state = 150;
				this.funcname();
				this.state = 151;
				this.funcbody();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 153;
				this.match(LuaParser.T__17);
				this.state = 154;
				this.match(LuaParser.T__16);
				this.state = 155;
				this.match(LuaParser.NAME);
				this.state = 156;
				this.funcbody();
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 157;
				this.match(LuaParser.T__17);
				this.state = 158;
				this.namelist();
				this.state = 161;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === LuaParser.T__1) {
					{
					this.state = 159;
					this.match(LuaParser.T__1);
					this.state = 160;
					this.explist();
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
	public retstat(): RetstatContext {
		let _localctx: RetstatContext = new RetstatContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, LuaParser.RULE_retstat);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 165;
			this.match(LuaParser.T__18);
			this.state = 167;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LuaParser.T__16) | (1 << LuaParser.T__22) | (1 << LuaParser.T__23) | (1 << LuaParser.T__24) | (1 << LuaParser.T__25) | (1 << LuaParser.T__26) | (1 << LuaParser.T__30))) !== 0) || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (LuaParser.T__42 - 43)) | (1 << (LuaParser.T__49 - 43)) | (1 << (LuaParser.T__52 - 43)) | (1 << (LuaParser.T__53 - 43)) | (1 << (LuaParser.NAME - 43)) | (1 << (LuaParser.NORMALSTRING - 43)) | (1 << (LuaParser.CHARSTRING - 43)) | (1 << (LuaParser.LONGSTRING - 43)) | (1 << (LuaParser.INT - 43)) | (1 << (LuaParser.HEX - 43)) | (1 << (LuaParser.FLOAT - 43)) | (1 << (LuaParser.HEX_FLOAT - 43)))) !== 0)) {
				{
				this.state = 166;
				this.explist();
				}
			}

			this.state = 170;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LuaParser.T__0) {
				{
				this.state = 169;
				this.match(LuaParser.T__0);
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
	public label(): LabelContext {
		let _localctx: LabelContext = new LabelContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, LuaParser.RULE_label);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 172;
			this.match(LuaParser.T__19);
			this.state = 173;
			this.match(LuaParser.NAME);
			this.state = 174;
			this.match(LuaParser.T__19);
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
	public funcname(): FuncnameContext {
		let _localctx: FuncnameContext = new FuncnameContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, LuaParser.RULE_funcname);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 176;
			this.match(LuaParser.NAME);
			this.state = 181;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LuaParser.T__20) {
				{
				{
				this.state = 177;
				this.match(LuaParser.T__20);
				this.state = 178;
				this.match(LuaParser.NAME);
				}
				}
				this.state = 183;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 186;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LuaParser.T__21) {
				{
				this.state = 184;
				this.match(LuaParser.T__21);
				this.state = 185;
				this.match(LuaParser.NAME);
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
	public varlist(): VarlistContext {
		let _localctx: VarlistContext = new VarlistContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, LuaParser.RULE_varlist);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 188;
			this.var();
			this.state = 193;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LuaParser.T__14) {
				{
				{
				this.state = 189;
				this.match(LuaParser.T__14);
				this.state = 190;
				this.var();
				}
				}
				this.state = 195;
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
	public namelist(): NamelistContext {
		let _localctx: NamelistContext = new NamelistContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, LuaParser.RULE_namelist);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 196;
			this.match(LuaParser.NAME);
			this.state = 201;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 197;
					this.match(LuaParser.T__14);
					this.state = 198;
					this.match(LuaParser.NAME);
					}
					}
				}
				this.state = 203;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
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
	public explist(): ExplistContext {
		let _localctx: ExplistContext = new ExplistContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, LuaParser.RULE_explist);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 204;
			this.exp(0);
			this.state = 209;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LuaParser.T__14) {
				{
				{
				this.state = 205;
				this.match(LuaParser.T__14);
				this.state = 206;
				this.exp(0);
				}
				}
				this.state = 211;
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

	public exp(): ExpContext;
	public exp(_p: number): ExpContext;
	// @RuleVersion(0)
	public exp(_p?: number): ExpContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpContext = new ExpContext(this._ctx, _parentState);
		let _prevctx: ExpContext = _localctx;
		let _startState: number = 18;
		this.enterRecursionRule(_localctx, 18, LuaParser.RULE_exp, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 225;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case LuaParser.T__22:
				{
				this.state = 213;
				this.match(LuaParser.T__22);
				}
				break;
			case LuaParser.T__23:
				{
				this.state = 214;
				this.match(LuaParser.T__23);
				}
				break;
			case LuaParser.T__24:
				{
				this.state = 215;
				this.match(LuaParser.T__24);
				}
				break;
			case LuaParser.INT:
			case LuaParser.HEX:
			case LuaParser.FLOAT:
			case LuaParser.HEX_FLOAT:
				{
				this.state = 216;
				this.number();
				}
				break;
			case LuaParser.NORMALSTRING:
			case LuaParser.CHARSTRING:
			case LuaParser.LONGSTRING:
				{
				this.state = 217;
				this.string();
				}
				break;
			case LuaParser.T__25:
				{
				this.state = 218;
				this.match(LuaParser.T__25);
				}
				break;
			case LuaParser.T__16:
				{
				this.state = 219;
				this.functiondef();
				}
				break;
			case LuaParser.T__26:
			case LuaParser.NAME:
				{
				this.state = 220;
				this.prefixexp();
				}
				break;
			case LuaParser.T__30:
				{
				this.state = 221;
				this.tableconstructor();
				}
				break;
			case LuaParser.T__42:
			case LuaParser.T__49:
			case LuaParser.T__52:
			case LuaParser.T__53:
				{
				this.state = 222;
				this.operatorUnary();
				this.state = 223;
				this.exp(8);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 261;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 259;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
					case 1:
						{
						_localctx = new ExpContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, LuaParser.RULE_exp);
						this.state = 227;
						if (!(this.precpred(this._ctx, 9))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 9)");
						}
						this.state = 228;
						this.operatorPower();
						this.state = 229;
						this.exp(9);
						}
						break;

					case 2:
						{
						_localctx = new ExpContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, LuaParser.RULE_exp);
						this.state = 231;
						if (!(this.precpred(this._ctx, 7))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 7)");
						}
						this.state = 232;
						this.operatorMulDivMod();
						this.state = 233;
						this.exp(8);
						}
						break;

					case 3:
						{
						_localctx = new ExpContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, LuaParser.RULE_exp);
						this.state = 235;
						if (!(this.precpred(this._ctx, 6))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 6)");
						}
						this.state = 236;
						this.operatorAddSub();
						this.state = 237;
						this.exp(7);
						}
						break;

					case 4:
						{
						_localctx = new ExpContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, LuaParser.RULE_exp);
						this.state = 239;
						if (!(this.precpred(this._ctx, 5))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 5)");
						}
						this.state = 240;
						this.operatorStrcat();
						this.state = 241;
						this.exp(5);
						}
						break;

					case 5:
						{
						_localctx = new ExpContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, LuaParser.RULE_exp);
						this.state = 243;
						if (!(this.precpred(this._ctx, 4))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 4)");
						}
						this.state = 244;
						this.operatorComparison();
						this.state = 245;
						this.exp(5);
						}
						break;

					case 6:
						{
						_localctx = new ExpContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, LuaParser.RULE_exp);
						this.state = 247;
						if (!(this.precpred(this._ctx, 3))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						}
						this.state = 248;
						this.operatorAnd();
						this.state = 249;
						this.exp(4);
						}
						break;

					case 7:
						{
						_localctx = new ExpContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, LuaParser.RULE_exp);
						this.state = 251;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 252;
						this.operatorOr();
						this.state = 253;
						this.exp(3);
						}
						break;

					case 8:
						{
						_localctx = new ExpContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, LuaParser.RULE_exp);
						this.state = 255;
						if (!(this.precpred(this._ctx, 1))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
						}
						this.state = 256;
						this.operatorBitwise();
						this.state = 257;
						this.exp(2);
						}
						break;
					}
					}
				}
				this.state = 263;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
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
	public prefixexp(): PrefixexpContext {
		let _localctx: PrefixexpContext = new PrefixexpContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, LuaParser.RULE_prefixexp);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 264;
			this.varOrExp();
			this.state = 268;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 265;
					this.nameAndArgs();
					}
					}
				}
				this.state = 270;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
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
	public functioncall(): FunctioncallContext {
		let _localctx: FunctioncallContext = new FunctioncallContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, LuaParser.RULE_functioncall);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 271;
			this.varOrExp();
			this.state = 273;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 272;
					this.nameAndArgs();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 275;
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
	public varOrExp(): VarOrExpContext {
		let _localctx: VarOrExpContext = new VarOrExpContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, LuaParser.RULE_varOrExp);
		try {
			this.state = 282;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 19, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 277;
				this.var();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 278;
				this.match(LuaParser.T__26);
				this.state = 279;
				this.exp(0);
				this.state = 280;
				this.match(LuaParser.T__27);
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
	public var(): VarContext {
		let _localctx: VarContext = new VarContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, LuaParser.RULE_var);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 290;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case LuaParser.NAME:
				{
				this.state = 284;
				this.match(LuaParser.NAME);
				}
				break;
			case LuaParser.T__26:
				{
				this.state = 285;
				this.match(LuaParser.T__26);
				this.state = 286;
				this.exp(0);
				this.state = 287;
				this.match(LuaParser.T__27);
				this.state = 288;
				this.varSuffix();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 295;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 292;
					this.varSuffix();
					}
					}
				}
				this.state = 297;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
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
	public varSuffix(): VarSuffixContext {
		let _localctx: VarSuffixContext = new VarSuffixContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, LuaParser.RULE_varSuffix);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 301;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LuaParser.T__21) | (1 << LuaParser.T__26) | (1 << LuaParser.T__30))) !== 0) || ((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & ((1 << (LuaParser.NORMALSTRING - 57)) | (1 << (LuaParser.CHARSTRING - 57)) | (1 << (LuaParser.LONGSTRING - 57)))) !== 0)) {
				{
				{
				this.state = 298;
				this.nameAndArgs();
				}
				}
				this.state = 303;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 310;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case LuaParser.T__28:
				{
				this.state = 304;
				this.match(LuaParser.T__28);
				this.state = 305;
				this.exp(0);
				this.state = 306;
				this.match(LuaParser.T__29);
				}
				break;
			case LuaParser.T__20:
				{
				this.state = 308;
				this.match(LuaParser.T__20);
				this.state = 309;
				this.match(LuaParser.NAME);
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
	public nameAndArgs(): NameAndArgsContext {
		let _localctx: NameAndArgsContext = new NameAndArgsContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, LuaParser.RULE_nameAndArgs);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 314;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LuaParser.T__21) {
				{
				this.state = 312;
				this.match(LuaParser.T__21);
				this.state = 313;
				this.match(LuaParser.NAME);
				}
			}

			this.state = 316;
			this.args();
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
		this.enterRule(_localctx, 32, LuaParser.RULE_args);
		let _la: number;
		try {
			this.state = 325;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case LuaParser.T__26:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 318;
				this.match(LuaParser.T__26);
				this.state = 320;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LuaParser.T__16) | (1 << LuaParser.T__22) | (1 << LuaParser.T__23) | (1 << LuaParser.T__24) | (1 << LuaParser.T__25) | (1 << LuaParser.T__26) | (1 << LuaParser.T__30))) !== 0) || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (LuaParser.T__42 - 43)) | (1 << (LuaParser.T__49 - 43)) | (1 << (LuaParser.T__52 - 43)) | (1 << (LuaParser.T__53 - 43)) | (1 << (LuaParser.NAME - 43)) | (1 << (LuaParser.NORMALSTRING - 43)) | (1 << (LuaParser.CHARSTRING - 43)) | (1 << (LuaParser.LONGSTRING - 43)) | (1 << (LuaParser.INT - 43)) | (1 << (LuaParser.HEX - 43)) | (1 << (LuaParser.FLOAT - 43)) | (1 << (LuaParser.HEX_FLOAT - 43)))) !== 0)) {
					{
					this.state = 319;
					this.explist();
					}
				}

				this.state = 322;
				this.match(LuaParser.T__27);
				}
				break;
			case LuaParser.T__30:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 323;
				this.tableconstructor();
				}
				break;
			case LuaParser.NORMALSTRING:
			case LuaParser.CHARSTRING:
			case LuaParser.LONGSTRING:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 324;
				this.string();
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
	public functiondef(): FunctiondefContext {
		let _localctx: FunctiondefContext = new FunctiondefContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, LuaParser.RULE_functiondef);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 327;
			this.match(LuaParser.T__16);
			this.state = 328;
			this.funcbody();
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
	public funcbody(): FuncbodyContext {
		let _localctx: FuncbodyContext = new FuncbodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, LuaParser.RULE_funcbody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 330;
			this.match(LuaParser.T__26);
			this.state = 332;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LuaParser.T__25 || _la === LuaParser.NAME) {
				{
				this.state = 331;
				this.parlist();
				}
			}

			this.state = 334;
			this.match(LuaParser.T__27);
			this.state = 335;
			this.block();
			this.state = 336;
			this.match(LuaParser.T__5);
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
	public parlist(): ParlistContext {
		let _localctx: ParlistContext = new ParlistContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, LuaParser.RULE_parlist);
		let _la: number;
		try {
			this.state = 344;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case LuaParser.NAME:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 338;
				this.namelist();
				this.state = 341;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === LuaParser.T__14) {
					{
					this.state = 339;
					this.match(LuaParser.T__14);
					this.state = 340;
					this.match(LuaParser.T__25);
					}
				}

				}
				break;
			case LuaParser.T__25:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 343;
				this.match(LuaParser.T__25);
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
	public tableconstructor(): TableconstructorContext {
		let _localctx: TableconstructorContext = new TableconstructorContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, LuaParser.RULE_tableconstructor);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 346;
			this.match(LuaParser.T__30);
			this.state = 348;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LuaParser.T__16) | (1 << LuaParser.T__22) | (1 << LuaParser.T__23) | (1 << LuaParser.T__24) | (1 << LuaParser.T__25) | (1 << LuaParser.T__26) | (1 << LuaParser.T__28) | (1 << LuaParser.T__30))) !== 0) || ((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (LuaParser.T__42 - 43)) | (1 << (LuaParser.T__49 - 43)) | (1 << (LuaParser.T__52 - 43)) | (1 << (LuaParser.T__53 - 43)) | (1 << (LuaParser.NAME - 43)) | (1 << (LuaParser.NORMALSTRING - 43)) | (1 << (LuaParser.CHARSTRING - 43)) | (1 << (LuaParser.LONGSTRING - 43)) | (1 << (LuaParser.INT - 43)) | (1 << (LuaParser.HEX - 43)) | (1 << (LuaParser.FLOAT - 43)) | (1 << (LuaParser.HEX_FLOAT - 43)))) !== 0)) {
				{
				this.state = 347;
				this.fieldlist();
				}
			}

			this.state = 350;
			this.match(LuaParser.T__31);
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
	public fieldlist(): FieldlistContext {
		let _localctx: FieldlistContext = new FieldlistContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, LuaParser.RULE_fieldlist);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 352;
			this.field();
			this.state = 358;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 353;
					this.fieldsep();
					this.state = 354;
					this.field();
					}
					}
				}
				this.state = 360;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
			}
			this.state = 362;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LuaParser.T__0 || _la === LuaParser.T__14) {
				{
				this.state = 361;
				this.fieldsep();
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
	public field(): FieldContext {
		let _localctx: FieldContext = new FieldContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, LuaParser.RULE_field);
		try {
			this.state = 374;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 33, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 364;
				this.match(LuaParser.T__28);
				this.state = 365;
				this.exp(0);
				this.state = 366;
				this.match(LuaParser.T__29);
				this.state = 367;
				this.match(LuaParser.T__1);
				this.state = 368;
				this.exp(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 370;
				this.match(LuaParser.NAME);
				this.state = 371;
				this.match(LuaParser.T__1);
				this.state = 372;
				this.exp(0);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 373;
				this.exp(0);
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
	public fieldsep(): FieldsepContext {
		let _localctx: FieldsepContext = new FieldsepContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, LuaParser.RULE_fieldsep);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 376;
			_la = this._input.LA(1);
			if (!(_la === LuaParser.T__0 || _la === LuaParser.T__14)) {
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
	public operatorOr(): OperatorOrContext {
		let _localctx: OperatorOrContext = new OperatorOrContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, LuaParser.RULE_operatorOr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 378;
			this.match(LuaParser.T__32);
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
	public operatorAnd(): OperatorAndContext {
		let _localctx: OperatorAndContext = new OperatorAndContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, LuaParser.RULE_operatorAnd);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 380;
			this.match(LuaParser.T__33);
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
	public operatorComparison(): OperatorComparisonContext {
		let _localctx: OperatorComparisonContext = new OperatorComparisonContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, LuaParser.RULE_operatorComparison);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 382;
			_la = this._input.LA(1);
			if (!(((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (LuaParser.T__34 - 35)) | (1 << (LuaParser.T__35 - 35)) | (1 << (LuaParser.T__36 - 35)) | (1 << (LuaParser.T__37 - 35)) | (1 << (LuaParser.T__38 - 35)) | (1 << (LuaParser.T__39 - 35)))) !== 0))) {
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
	public operatorStrcat(): OperatorStrcatContext {
		let _localctx: OperatorStrcatContext = new OperatorStrcatContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, LuaParser.RULE_operatorStrcat);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 384;
			this.match(LuaParser.T__40);
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
	public operatorAddSub(): OperatorAddSubContext {
		let _localctx: OperatorAddSubContext = new OperatorAddSubContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, LuaParser.RULE_operatorAddSub);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 386;
			_la = this._input.LA(1);
			if (!(_la === LuaParser.T__41 || _la === LuaParser.T__42)) {
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
	public operatorMulDivMod(): OperatorMulDivModContext {
		let _localctx: OperatorMulDivModContext = new OperatorMulDivModContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, LuaParser.RULE_operatorMulDivMod);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 388;
			_la = this._input.LA(1);
			if (!(((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & ((1 << (LuaParser.T__43 - 44)) | (1 << (LuaParser.T__44 - 44)) | (1 << (LuaParser.T__45 - 44)) | (1 << (LuaParser.T__46 - 44)))) !== 0))) {
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
	public operatorBitwise(): OperatorBitwiseContext {
		let _localctx: OperatorBitwiseContext = new OperatorBitwiseContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, LuaParser.RULE_operatorBitwise);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 390;
			_la = this._input.LA(1);
			if (!(((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & ((1 << (LuaParser.T__47 - 48)) | (1 << (LuaParser.T__48 - 48)) | (1 << (LuaParser.T__49 - 48)) | (1 << (LuaParser.T__50 - 48)) | (1 << (LuaParser.T__51 - 48)))) !== 0))) {
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
	public operatorUnary(): OperatorUnaryContext {
		let _localctx: OperatorUnaryContext = new OperatorUnaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, LuaParser.RULE_operatorUnary);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 392;
			_la = this._input.LA(1);
			if (!(((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & ((1 << (LuaParser.T__42 - 43)) | (1 << (LuaParser.T__49 - 43)) | (1 << (LuaParser.T__52 - 43)) | (1 << (LuaParser.T__53 - 43)))) !== 0))) {
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
	public operatorPower(): OperatorPowerContext {
		let _localctx: OperatorPowerContext = new OperatorPowerContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, LuaParser.RULE_operatorPower);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 394;
			this.match(LuaParser.T__54);
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
	public number(): NumberContext {
		let _localctx: NumberContext = new NumberContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, LuaParser.RULE_number);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 396;
			_la = this._input.LA(1);
			if (!(((((_la - 60)) & ~0x1F) === 0 && ((1 << (_la - 60)) & ((1 << (LuaParser.INT - 60)) | (1 << (LuaParser.HEX - 60)) | (1 << (LuaParser.FLOAT - 60)) | (1 << (LuaParser.HEX_FLOAT - 60)))) !== 0))) {
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
	public string(): StringContext {
		let _localctx: StringContext = new StringContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, LuaParser.RULE_string);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 398;
			_la = this._input.LA(1);
			if (!(((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & ((1 << (LuaParser.NORMALSTRING - 57)) | (1 << (LuaParser.CHARSTRING - 57)) | (1 << (LuaParser.LONGSTRING - 57)))) !== 0))) {
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
		case 9:
			return this.exp_sempred(_localctx as ExpContext, predIndex);
		}
		return true;
	}
	private exp_sempred(_localctx: ExpContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 9);

		case 1:
			return this.precpred(this._ctx, 7);

		case 2:
			return this.precpred(this._ctx, 6);

		case 3:
			return this.precpred(this._ctx, 5);

		case 4:
			return this.precpred(this._ctx, 4);

		case 5:
			return this.precpred(this._ctx, 3);

		case 6:
			return this.precpred(this._ctx, 2);

		case 7:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03E\u0193\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x03\x02\x03\x02\x03\x02\x03\x03\x07\x03M\n\x03\f\x03\x0E\x03" +
		"P\v\x03\x03\x03\x05\x03S\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x07\x04w\n\x04\f\x04\x0E\x04z\v\x04\x03\x04\x03\x04\x05" +
		"\x04~\n\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x05\x04\x8A\n\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x05\x04\xA4\n\x04\x05\x04\xA6\n\x04\x03\x05\x03\x05\x05" +
		"\x05\xAA\n\x05\x03\x05\x05\x05\xAD\n\x05\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x07\x03\x07\x03\x07\x07\x07\xB6\n\x07\f\x07\x0E\x07\xB9\v\x07\x03" +
		"\x07\x03\x07\x05\x07\xBD\n\x07\x03\b\x03\b\x03\b\x07\b\xC2\n\b\f\b\x0E" +
		"\b\xC5\v\b\x03\t\x03\t\x03\t\x07\t\xCA\n\t\f\t\x0E\t\xCD\v\t\x03\n\x03" +
		"\n\x03\n\x07\n\xD2\n\n\f\n\x0E\n\xD5\v\n\x03\v\x03\v\x03\v\x03\v\x03\v" +
		"\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x05\v\xE4\n\v\x03\v\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x07\v\u0106\n\v\f\v\x0E\v\u0109" +
		"\v\v\x03\f\x03\f\x07\f\u010D\n\f\f\f\x0E\f\u0110\v\f\x03\r\x03\r\x06\r" +
		"\u0114\n\r\r\r\x0E\r\u0115\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05" +
		"\x0E\u011D\n\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F" +
		"\u0125\n\x0F\x03\x0F\x07\x0F\u0128\n\x0F\f\x0F\x0E\x0F\u012B\v\x0F\x03" +
		"\x10\x07\x10\u012E\n\x10\f\x10\x0E\x10\u0131\v\x10\x03\x10\x03\x10\x03" +
		"\x10\x03\x10\x03\x10\x03\x10\x05\x10\u0139\n\x10\x03\x11\x03\x11\x05\x11" +
		"\u013D\n\x11\x03\x11\x03\x11\x03\x12\x03\x12\x05\x12\u0143\n\x12\x03\x12" +
		"\x03\x12\x03\x12\x05\x12\u0148\n\x12\x03\x13\x03\x13\x03\x13\x03\x14\x03" +
		"\x14\x05\x14\u014F\n\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15" +
		"\x03\x15\x05\x15\u0158\n\x15\x03\x15\x05\x15\u015B\n\x15\x03\x16\x03\x16" +
		"\x05\x16\u015F\n\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03\x17\x07" +
		"\x17\u0167\n\x17\f\x17\x0E\x17\u016A\v\x17\x03\x17\x05\x17\u016D\n\x17" +
		"\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18" +
		"\x03\x18\x05\x18\u0179\n\x18\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1B\x03" +
		"\x1B\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03" +
		" \x03 \x03!\x03!\x03\"\x03\"\x03#\x03#\x03$\x03$\x03$\x02\x02\x03\x14" +
		"%\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14" +
		"\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02" +
		"*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02" +
		"F\x02\x02\n\x04\x02\x03\x03\x11\x11\x03\x02%*\x03\x02,-\x03\x02.1\x03" +
		"\x0226\x05\x02--4478\x03\x02>A\x03\x02;=\x02\u01AE\x02H\x03\x02\x02\x02" +
		"\x04N\x03\x02\x02\x02\x06\xA5\x03\x02\x02\x02\b\xA7\x03\x02\x02\x02\n" +
		"\xAE\x03\x02\x02\x02\f\xB2\x03\x02\x02\x02\x0E\xBE\x03\x02\x02\x02\x10" +
		"\xC6\x03\x02\x02\x02\x12\xCE\x03\x02\x02\x02\x14\xE3\x03\x02\x02\x02\x16" +
		"\u010A\x03\x02\x02\x02\x18\u0111\x03\x02\x02\x02\x1A\u011C\x03\x02\x02" +
		"\x02\x1C\u0124\x03\x02\x02\x02\x1E\u012F\x03\x02\x02\x02 \u013C\x03\x02" +
		"\x02\x02\"\u0147\x03\x02\x02\x02$\u0149\x03\x02\x02\x02&\u014C\x03\x02" +
		"\x02\x02(\u015A\x03\x02\x02\x02*\u015C\x03\x02\x02\x02,\u0162\x03\x02" +
		"\x02\x02.\u0178\x03\x02\x02\x020\u017A\x03\x02\x02\x022\u017C\x03\x02" +
		"\x02\x024\u017E\x03\x02\x02\x026\u0180\x03\x02\x02\x028\u0182\x03\x02" +
		"\x02\x02:\u0184\x03\x02\x02\x02<\u0186\x03\x02\x02\x02>\u0188\x03\x02" +
		"\x02\x02@\u018A\x03\x02\x02\x02B\u018C\x03\x02\x02\x02D\u018E\x03\x02" +
		"\x02\x02F\u0190\x03\x02\x02\x02HI\x05\x04\x03\x02IJ\x07\x02\x02\x03J\x03" +
		"\x03\x02\x02\x02KM\x05\x06\x04\x02LK\x03\x02\x02\x02MP\x03\x02\x02\x02" +
		"NL\x03\x02\x02\x02NO\x03\x02\x02\x02OR\x03\x02\x02\x02PN\x03\x02\x02\x02" +
		"QS\x05\b\x05\x02RQ\x03\x02\x02\x02RS\x03\x02\x02\x02S\x05\x03\x02\x02" +
		"\x02T\xA6\x07\x03\x02\x02UV\x05\x0E\b\x02VW\x07\x04\x02\x02WX\x05\x12" +
		"\n\x02X\xA6\x03\x02\x02\x02Y\xA6\x05\x18\r\x02Z\xA6\x05\n\x06\x02[\xA6" +
		"\x07\x05\x02\x02\\]\x07\x06\x02\x02]\xA6\x07:\x02\x02^_\x07\x07\x02\x02" +
		"_`\x05\x04\x03\x02`a\x07\b\x02\x02a\xA6\x03\x02\x02\x02bc\x07\t\x02\x02" +
		"cd\x05\x14\v\x02de\x07\x07\x02\x02ef\x05\x04\x03\x02fg\x07\b\x02\x02g" +
		"\xA6\x03\x02\x02\x02hi\x07\n\x02\x02ij\x05\x04\x03\x02jk\x07\v\x02\x02" +
		"kl\x05\x14\v\x02l\xA6\x03\x02\x02\x02mn\x07\f\x02\x02no\x05\x14\v\x02" +
		"op\x07\r\x02\x02px\x05\x04\x03\x02qr\x07\x0E\x02\x02rs\x05\x14\v\x02s" +
		"t\x07\r\x02\x02tu\x05\x04\x03\x02uw\x03\x02\x02\x02vq\x03\x02\x02\x02" +
		"wz\x03\x02\x02\x02xv\x03\x02\x02\x02xy\x03\x02\x02\x02y}\x03\x02\x02\x02" +
		"zx\x03\x02\x02\x02{|\x07\x0F\x02\x02|~\x05\x04\x03\x02}{\x03\x02\x02\x02" +
		"}~\x03\x02\x02\x02~\x7F\x03\x02\x02\x02\x7F\x80\x07\b\x02\x02\x80\xA6" +
		"\x03\x02\x02\x02\x81\x82\x07\x10\x02\x02\x82\x83\x07:\x02\x02\x83\x84" +
		"\x07\x04\x02\x02\x84\x85\x05\x14\v\x02\x85\x86\x07\x11\x02\x02\x86\x89" +
		"\x05\x14\v\x02\x87\x88\x07\x11\x02\x02\x88\x8A\x05\x14\v\x02\x89\x87\x03" +
		"\x02\x02\x02\x89\x8A\x03\x02\x02\x02\x8A\x8B\x03\x02\x02\x02\x8B\x8C\x07" +
		"\x07\x02\x02\x8C\x8D\x05\x04\x03\x02\x8D\x8E\x07\b\x02\x02\x8E\xA6\x03" +
		"\x02\x02\x02\x8F\x90\x07\x10\x02\x02\x90\x91\x05\x10\t\x02\x91\x92\x07" +
		"\x12\x02\x02\x92\x93\x05\x12\n\x02\x93\x94\x07\x07\x02\x02\x94\x95\x05" +
		"\x04\x03\x02\x95\x96\x07\b\x02\x02\x96\xA6\x03\x02\x02\x02\x97\x98\x07" +
		"\x13\x02\x02\x98\x99\x05\f\x07\x02\x99\x9A\x05&\x14\x02\x9A\xA6\x03\x02" +
		"\x02\x02\x9B\x9C\x07\x14\x02\x02\x9C\x9D\x07\x13\x02\x02\x9D\x9E\x07:" +
		"\x02\x02\x9E\xA6\x05&\x14\x02\x9F\xA0\x07\x14\x02\x02\xA0\xA3\x05\x10" +
		"\t\x02\xA1\xA2\x07\x04\x02\x02\xA2\xA4\x05\x12\n\x02\xA3\xA1\x03\x02\x02" +
		"\x02\xA3\xA4\x03\x02\x02\x02\xA4\xA6\x03\x02\x02\x02\xA5T\x03\x02\x02" +
		"\x02\xA5U\x03\x02\x02\x02\xA5Y\x03\x02\x02\x02\xA5Z\x03\x02\x02\x02\xA5" +
		"[\x03\x02\x02\x02\xA5\\\x03\x02\x02\x02\xA5^\x03\x02\x02\x02\xA5b\x03" +
		"\x02\x02\x02\xA5h\x03\x02\x02\x02\xA5m\x03\x02\x02\x02\xA5\x81\x03\x02" +
		"\x02\x02\xA5\x8F\x03\x02\x02\x02\xA5\x97\x03\x02\x02\x02\xA5\x9B\x03\x02" +
		"\x02\x02\xA5\x9F\x03\x02\x02\x02\xA6\x07\x03\x02\x02\x02\xA7\xA9\x07\x15" +
		"\x02\x02\xA8\xAA\x05\x12\n\x02\xA9\xA8\x03\x02\x02\x02\xA9\xAA\x03\x02" +
		"\x02\x02\xAA\xAC\x03\x02\x02\x02\xAB\xAD\x07\x03\x02\x02\xAC\xAB\x03\x02" +
		"\x02\x02\xAC\xAD\x03\x02\x02\x02\xAD\t\x03\x02\x02\x02\xAE\xAF\x07\x16" +
		"\x02\x02\xAF\xB0\x07:\x02\x02\xB0\xB1\x07\x16\x02\x02\xB1\v\x03\x02\x02" +
		"\x02\xB2\xB7\x07:\x02\x02\xB3\xB4\x07\x17\x02\x02\xB4\xB6\x07:\x02\x02" +
		"\xB5\xB3\x03\x02\x02\x02\xB6\xB9\x03\x02\x02\x02\xB7\xB5\x03\x02\x02\x02" +
		"\xB7\xB8\x03\x02\x02\x02\xB8\xBC\x03\x02\x02\x02\xB9\xB7\x03\x02\x02\x02" +
		"\xBA\xBB\x07\x18\x02\x02\xBB\xBD\x07:\x02\x02\xBC\xBA\x03\x02\x02\x02" +
		"\xBC\xBD\x03\x02\x02\x02\xBD\r\x03\x02\x02\x02\xBE\xC3\x05\x1C\x0F\x02" +
		"\xBF\xC0\x07\x11\x02\x02\xC0\xC2\x05\x1C\x0F\x02\xC1\xBF\x03\x02\x02\x02" +
		"\xC2\xC5\x03\x02\x02\x02\xC3\xC1\x03\x02\x02\x02\xC3\xC4\x03\x02\x02\x02" +
		"\xC4\x0F\x03\x02\x02\x02\xC5\xC3\x03\x02\x02\x02\xC6\xCB\x07:\x02\x02" +
		"\xC7\xC8\x07\x11\x02\x02\xC8\xCA\x07:\x02\x02\xC9\xC7\x03\x02\x02\x02" +
		"\xCA\xCD\x03\x02\x02\x02\xCB\xC9\x03\x02\x02\x02\xCB\xCC\x03\x02\x02\x02" +
		"\xCC\x11\x03\x02\x02\x02\xCD\xCB\x03\x02\x02\x02\xCE\xD3\x05\x14\v\x02" +
		"\xCF\xD0\x07\x11\x02\x02\xD0\xD2\x05\x14\v\x02\xD1\xCF\x03\x02\x02\x02" +
		"\xD2\xD5\x03\x02\x02\x02\xD3\xD1\x03\x02\x02\x02\xD3\xD4\x03\x02\x02\x02" +
		"\xD4\x13\x03\x02\x02\x02\xD5\xD3\x03\x02\x02\x02\xD6\xD7\b\v\x01\x02\xD7" +
		"\xE4\x07\x19\x02\x02\xD8\xE4\x07\x1A\x02\x02\xD9\xE4\x07\x1B\x02\x02\xDA" +
		"\xE4\x05D#\x02\xDB\xE4\x05F$\x02\xDC\xE4\x07\x1C\x02\x02\xDD\xE4\x05$" +
		"\x13\x02\xDE\xE4\x05\x16\f\x02\xDF\xE4\x05*\x16\x02\xE0\xE1\x05@!\x02" +
		"\xE1\xE2\x05\x14\v\n\xE2\xE4\x03\x02\x02\x02\xE3\xD6\x03\x02\x02\x02\xE3" +
		"\xD8\x03\x02\x02\x02\xE3\xD9\x03\x02\x02\x02\xE3\xDA\x03\x02\x02\x02\xE3" +
		"\xDB\x03\x02\x02\x02\xE3\xDC\x03\x02\x02\x02\xE3\xDD\x03\x02\x02\x02\xE3" +
		"\xDE\x03\x02\x02\x02\xE3\xDF\x03\x02\x02\x02\xE3\xE0\x03\x02\x02\x02\xE4" +
		"\u0107\x03\x02\x02\x02\xE5\xE6\f\v\x02\x02\xE6\xE7\x05B\"\x02\xE7\xE8" +
		"\x05\x14\v\v\xE8\u0106\x03\x02\x02\x02\xE9\xEA\f\t\x02\x02\xEA\xEB\x05" +
		"<\x1F\x02\xEB\xEC\x05\x14\v\n\xEC\u0106\x03\x02\x02\x02\xED\xEE\f\b\x02" +
		"\x02\xEE\xEF\x05:\x1E\x02\xEF\xF0\x05\x14\v\t\xF0\u0106\x03\x02\x02\x02" +
		"\xF1\xF2\f\x07\x02\x02\xF2\xF3\x058\x1D\x02\xF3\xF4\x05\x14\v\x07\xF4" +
		"\u0106\x03\x02\x02\x02\xF5\xF6\f\x06\x02\x02\xF6\xF7\x056\x1C\x02\xF7" +
		"\xF8\x05\x14\v\x07\xF8\u0106\x03\x02\x02\x02\xF9\xFA\f\x05\x02\x02\xFA" +
		"\xFB\x054\x1B\x02\xFB\xFC\x05\x14\v\x06\xFC\u0106\x03\x02\x02\x02\xFD" +
		"\xFE\f\x04\x02\x02\xFE\xFF\x052\x1A\x02\xFF\u0100\x05\x14\v\x05\u0100" +
		"\u0106\x03\x02\x02\x02\u0101\u0102\f\x03\x02\x02\u0102\u0103\x05> \x02" +
		"\u0103\u0104\x05\x14\v\x04\u0104\u0106\x03\x02\x02\x02\u0105\xE5\x03\x02" +
		"\x02\x02\u0105\xE9\x03\x02\x02\x02\u0105\xED\x03\x02\x02\x02\u0105\xF1" +
		"\x03\x02\x02\x02\u0105\xF5\x03\x02\x02\x02\u0105\xF9\x03\x02\x02\x02\u0105" +
		"\xFD\x03\x02\x02\x02\u0105\u0101\x03\x02\x02\x02\u0106\u0109\x03\x02\x02" +
		"\x02\u0107\u0105\x03\x02\x02\x02\u0107\u0108\x03\x02\x02\x02\u0108\x15" +
		"\x03\x02\x02\x02\u0109\u0107\x03\x02\x02\x02\u010A\u010E\x05\x1A\x0E\x02" +
		"\u010B\u010D\x05 \x11\x02\u010C\u010B\x03\x02\x02\x02\u010D\u0110\x03" +
		"\x02\x02\x02\u010E\u010C\x03\x02\x02\x02\u010E\u010F\x03\x02\x02\x02\u010F" +
		"\x17\x03\x02\x02\x02\u0110\u010E\x03\x02\x02\x02\u0111\u0113\x05\x1A\x0E" +
		"\x02\u0112\u0114\x05 \x11\x02\u0113\u0112\x03\x02\x02\x02\u0114\u0115" +
		"\x03\x02\x02\x02\u0115\u0113\x03\x02\x02\x02\u0115\u0116\x03\x02\x02\x02" +
		"\u0116\x19\x03\x02\x02\x02\u0117\u011D\x05\x1C\x0F\x02\u0118\u0119\x07" +
		"\x1D\x02\x02\u0119\u011A\x05\x14\v\x02\u011A\u011B\x07\x1E\x02\x02\u011B" +
		"\u011D\x03\x02\x02\x02\u011C\u0117\x03\x02\x02\x02\u011C\u0118\x03\x02" +
		"\x02\x02\u011D\x1B\x03\x02\x02\x02\u011E\u0125\x07:\x02\x02\u011F\u0120" +
		"\x07\x1D\x02\x02\u0120\u0121\x05\x14\v\x02\u0121\u0122\x07\x1E\x02\x02" +
		"\u0122\u0123\x05\x1E\x10\x02\u0123\u0125\x03\x02\x02\x02\u0124\u011E\x03" +
		"\x02\x02\x02\u0124\u011F\x03\x02\x02\x02\u0125\u0129\x03\x02\x02\x02\u0126" +
		"\u0128\x05\x1E\x10\x02\u0127\u0126\x03\x02\x02\x02\u0128\u012B\x03\x02" +
		"\x02\x02\u0129\u0127\x03\x02\x02\x02\u0129\u012A\x03\x02\x02\x02\u012A" +
		"\x1D\x03\x02\x02\x02\u012B\u0129\x03\x02\x02\x02\u012C\u012E\x05 \x11" +
		"\x02\u012D\u012C\x03\x02\x02\x02\u012E\u0131\x03\x02\x02\x02\u012F\u012D" +
		"\x03\x02\x02\x02\u012F\u0130\x03\x02\x02\x02\u0130\u0138\x03\x02\x02\x02" +
		"\u0131\u012F\x03\x02\x02\x02\u0132\u0133\x07\x1F\x02\x02\u0133\u0134\x05" +
		"\x14\v\x02\u0134\u0135\x07 \x02\x02\u0135\u0139\x03\x02\x02\x02\u0136" +
		"\u0137\x07\x17\x02\x02\u0137\u0139\x07:\x02\x02\u0138\u0132\x03\x02\x02" +
		"\x02\u0138\u0136\x03\x02\x02\x02\u0139\x1F\x03\x02\x02\x02\u013A\u013B" +
		"\x07\x18\x02\x02\u013B\u013D\x07:\x02\x02\u013C\u013A\x03\x02\x02\x02" +
		"\u013C\u013D\x03\x02\x02\x02\u013D\u013E\x03\x02\x02\x02\u013E\u013F\x05" +
		"\"\x12\x02\u013F!\x03\x02\x02\x02\u0140\u0142\x07\x1D\x02\x02\u0141\u0143" +
		"\x05\x12\n\x02\u0142\u0141\x03\x02\x02\x02\u0142\u0143\x03\x02\x02\x02" +
		"\u0143\u0144\x03\x02\x02\x02\u0144\u0148\x07\x1E\x02\x02\u0145\u0148\x05" +
		"*\x16\x02\u0146\u0148\x05F$\x02\u0147\u0140\x03\x02\x02\x02\u0147\u0145" +
		"\x03\x02\x02\x02\u0147\u0146\x03\x02\x02\x02\u0148#\x03\x02\x02\x02\u0149" +
		"\u014A\x07\x13\x02\x02\u014A\u014B\x05&\x14\x02\u014B%\x03\x02\x02\x02" +
		"\u014C\u014E\x07\x1D\x02\x02\u014D\u014F\x05(\x15\x02\u014E\u014D\x03" +
		"\x02\x02\x02\u014E\u014F\x03\x02\x02\x02\u014F\u0150\x03\x02\x02\x02\u0150" +
		"\u0151\x07\x1E\x02\x02\u0151\u0152\x05\x04\x03\x02\u0152\u0153\x07\b\x02" +
		"\x02\u0153\'\x03\x02\x02\x02\u0154\u0157\x05\x10\t\x02\u0155\u0156\x07" +
		"\x11\x02\x02\u0156\u0158\x07\x1C\x02\x02\u0157\u0155\x03\x02\x02\x02\u0157" +
		"\u0158\x03\x02\x02\x02\u0158\u015B\x03\x02\x02\x02\u0159\u015B\x07\x1C" +
		"\x02\x02\u015A\u0154\x03\x02\x02\x02\u015A\u0159\x03\x02\x02\x02\u015B" +
		")\x03\x02\x02\x02\u015C\u015E\x07!\x02\x02\u015D\u015F\x05,\x17\x02\u015E" +
		"\u015D\x03\x02\x02\x02\u015E\u015F\x03\x02\x02\x02\u015F\u0160\x03\x02" +
		"\x02\x02\u0160\u0161\x07\"\x02\x02\u0161+\x03\x02\x02\x02\u0162\u0168" +
		"\x05.\x18\x02\u0163\u0164\x050\x19\x02\u0164\u0165\x05.\x18\x02\u0165" +
		"\u0167\x03\x02\x02\x02\u0166\u0163\x03\x02\x02\x02\u0167\u016A\x03\x02" +
		"\x02\x02\u0168\u0166\x03\x02\x02\x02\u0168\u0169\x03\x02\x02\x02\u0169" +
		"\u016C\x03\x02\x02\x02\u016A\u0168\x03\x02\x02\x02\u016B\u016D\x050\x19" +
		"\x02\u016C\u016B\x03\x02\x02\x02\u016C\u016D\x03\x02\x02\x02\u016D-\x03" +
		"\x02\x02\x02\u016E\u016F\x07\x1F\x02\x02\u016F\u0170\x05\x14\v\x02\u0170" +
		"\u0171\x07 \x02\x02\u0171\u0172\x07\x04\x02\x02\u0172\u0173\x05\x14\v" +
		"\x02\u0173\u0179\x03\x02\x02\x02\u0174\u0175\x07:\x02\x02\u0175\u0176" +
		"\x07\x04\x02\x02\u0176\u0179\x05\x14\v\x02\u0177\u0179\x05\x14\v\x02\u0178" +
		"\u016E\x03\x02\x02\x02\u0178\u0174\x03\x02\x02\x02\u0178\u0177\x03\x02" +
		"\x02\x02\u0179/\x03\x02\x02\x02\u017A\u017B\t\x02\x02\x02\u017B1\x03\x02" +
		"\x02\x02\u017C\u017D\x07#\x02\x02\u017D3\x03\x02\x02\x02\u017E\u017F\x07" +
		"$\x02\x02\u017F5\x03\x02\x02\x02\u0180\u0181\t\x03\x02\x02\u01817\x03" +
		"\x02\x02\x02\u0182\u0183\x07+\x02\x02\u01839\x03\x02\x02\x02\u0184\u0185" +
		"\t\x04\x02\x02\u0185;\x03\x02\x02\x02\u0186\u0187\t\x05\x02\x02\u0187" +
		"=\x03\x02\x02\x02\u0188\u0189\t\x06\x02\x02\u0189?\x03\x02\x02\x02\u018A" +
		"\u018B\t\x07\x02\x02\u018BA\x03\x02\x02\x02\u018C\u018D\x079\x02\x02\u018D" +
		"C\x03\x02\x02\x02\u018E\u018F\t\b\x02\x02\u018FE\x03\x02\x02\x02\u0190" +
		"\u0191\t\t\x02\x02\u0191G\x03\x02\x02\x02$NRx}\x89\xA3\xA5\xA9\xAC\xB7" +
		"\xBC\xC3\xCB\xD3\xE3\u0105\u0107\u010E\u0115\u011C\u0124\u0129\u012F\u0138" +
		"\u013C\u0142\u0147\u014E\u0157\u015A\u015E\u0168\u016C\u0178";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!LuaParser.__ATN) {
			LuaParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(LuaParser._serializedATN));
		}

		return LuaParser.__ATN;
	}

}

export class ChunkContext extends ParserRuleContext {
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public EOF(): TerminalNode { return this.getToken(LuaParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuaParser.RULE_chunk; }
	// @Override
	public enterRule(listener: LuaListener): void {
		if (listener.enterChunk) {
			listener.enterChunk(this);
		}
	}
	// @Override
	public exitRule(listener: LuaListener): void {
		if (listener.exitChunk) {
			listener.exitChunk(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	public stat(): StatContext[];
	public stat(i: number): StatContext;
	public stat(i?: number): StatContext | StatContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatContext);
		} else {
			return this.getRuleContext(i, StatContext);
		}
	}
	public retstat(): RetstatContext | undefined {
		return this.tryGetRuleContext(0, RetstatContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuaParser.RULE_block; }
	// @Override
	public enterRule(listener: LuaListener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	// @Override
	public exitRule(listener: LuaListener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
}


export class StatContext extends ParserRuleContext {
	public varlist(): VarlistContext | undefined {
		return this.tryGetRuleContext(0, VarlistContext);
	}
	public explist(): ExplistContext | undefined {
		return this.tryGetRuleContext(0, ExplistContext);
	}
	public functioncall(): FunctioncallContext | undefined {
		return this.tryGetRuleContext(0, FunctioncallContext);
	}
	public label(): LabelContext | undefined {
		return this.tryGetRuleContext(0, LabelContext);
	}
	public NAME(): TerminalNode | undefined { return this.tryGetToken(LuaParser.NAME, 0); }
	public block(): BlockContext[];
	public block(i: number): BlockContext;
	public block(i?: number): BlockContext | BlockContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BlockContext);
		} else {
			return this.getRuleContext(i, BlockContext);
		}
	}
	public exp(): ExpContext[];
	public exp(i: number): ExpContext;
	public exp(i?: number): ExpContext | ExpContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpContext);
		} else {
			return this.getRuleContext(i, ExpContext);
		}
	}
	public namelist(): NamelistContext | undefined {
		return this.tryGetRuleContext(0, NamelistContext);
	}
	public funcname(): FuncnameContext | undefined {
		return this.tryGetRuleContext(0, FuncnameContext);
	}
	public funcbody(): FuncbodyContext | undefined {
		return this.tryGetRuleContext(0, FuncbodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuaParser.RULE_stat; }
	// @Override
	public enterRule(listener: LuaListener): void {
		if (listener.enterStat) {
			listener.enterStat(this);
		}
	}
	// @Override
	public exitRule(listener: LuaListener): void {
		if (listener.exitStat) {
			listener.exitStat(this);
		}
	}
}


export class RetstatContext extends ParserRuleContext {
	public explist(): ExplistContext | undefined {
		return this.tryGetRuleContext(0, ExplistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuaParser.RULE_retstat; }
	// @Override
	public enterRule(listener: LuaListener): void {
		if (listener.enterRetstat) {
			listener.enterRetstat(this);
		}
	}
	// @Override
	public exitRule(listener: LuaListener): void {
		if (listener.exitRetstat) {
			listener.exitRetstat(this);
		}
	}
}


export class LabelContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(LuaParser.NAME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuaParser.RULE_label; }
	// @Override
	public enterRule(listener: LuaListener): void {
		if (listener.enterLabel) {
			listener.enterLabel(this);
		}
	}
	// @Override
	public exitRule(listener: LuaListener): void {
		if (listener.exitLabel) {
			listener.exitLabel(this);
		}
	}
}


export class FuncnameContext extends ParserRuleContext {
	public NAME(): TerminalNode[];
	public NAME(i: number): TerminalNode;
	public NAME(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LuaParser.NAME);
		} else {
			return this.getToken(LuaParser.NAME, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuaParser.RULE_funcname; }
	// @Override
	public enterRule(listener: LuaListener): void {
		if (listener.enterFuncname) {
			listener.enterFuncname(this);
		}
	}
	// @Override
	public exitRule(listener: LuaListener): void {
		if (listener.exitFuncname) {
			listener.exitFuncname(this);
		}
	}
}


export class VarlistContext extends ParserRuleContext {
	public var(): VarContext[];
	public var(i: number): VarContext;
	public var(i?: number): VarContext | VarContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VarContext);
		} else {
			return this.getRuleContext(i, VarContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuaParser.RULE_varlist; }
	// @Override
	public enterRule(listener: LuaListener): void {
		if (listener.enterVarlist) {
			listener.enterVarlist(this);
		}
	}
	// @Override
	public exitRule(listener: LuaListener): void {
		if (listener.exitVarlist) {
			listener.exitVarlist(this);
		}
	}
}


export class NamelistContext extends ParserRuleContext {
	public NAME(): TerminalNode[];
	public NAME(i: number): TerminalNode;
	public NAME(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LuaParser.NAME);
		} else {
			return this.getToken(LuaParser.NAME, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuaParser.RULE_namelist; }
	// @Override
	public enterRule(listener: LuaListener): void {
		if (listener.enterNamelist) {
			listener.enterNamelist(this);
		}
	}
	// @Override
	public exitRule(listener: LuaListener): void {
		if (listener.exitNamelist) {
			listener.exitNamelist(this);
		}
	}
}


export class ExplistContext extends ParserRuleContext {
	public exp(): ExpContext[];
	public exp(i: number): ExpContext;
	public exp(i?: number): ExpContext | ExpContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpContext);
		} else {
			return this.getRuleContext(i, ExpContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuaParser.RULE_explist; }
	// @Override
	public enterRule(listener: LuaListener): void {
		if (listener.enterExplist) {
			listener.enterExplist(this);
		}
	}
	// @Override
	public exitRule(listener: LuaListener): void {
		if (listener.exitExplist) {
			listener.exitExplist(this);
		}
	}
}


export class ExpContext extends ParserRuleContext {
	public number(): NumberContext | undefined {
		return this.tryGetRuleContext(0, NumberContext);
	}
	public string(): StringContext | undefined {
		return this.tryGetRuleContext(0, StringContext);
	}
	public functiondef(): FunctiondefContext | undefined {
		return this.tryGetRuleContext(0, FunctiondefContext);
	}
	public prefixexp(): PrefixexpContext | undefined {
		return this.tryGetRuleContext(0, PrefixexpContext);
	}
	public tableconstructor(): TableconstructorContext | undefined {
		return this.tryGetRuleContext(0, TableconstructorContext);
	}
	public exp(): ExpContext[];
	public exp(i: number): ExpContext;
	public exp(i?: number): ExpContext | ExpContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpContext);
		} else {
			return this.getRuleContext(i, ExpContext);
		}
	}
	public operatorPower(): OperatorPowerContext | undefined {
		return this.tryGetRuleContext(0, OperatorPowerContext);
	}
	public operatorUnary(): OperatorUnaryContext | undefined {
		return this.tryGetRuleContext(0, OperatorUnaryContext);
	}
	public operatorMulDivMod(): OperatorMulDivModContext | undefined {
		return this.tryGetRuleContext(0, OperatorMulDivModContext);
	}
	public operatorAddSub(): OperatorAddSubContext | undefined {
		return this.tryGetRuleContext(0, OperatorAddSubContext);
	}
	public operatorStrcat(): OperatorStrcatContext | undefined {
		return this.tryGetRuleContext(0, OperatorStrcatContext);
	}
	public operatorComparison(): OperatorComparisonContext | undefined {
		return this.tryGetRuleContext(0, OperatorComparisonContext);
	}
	public operatorAnd(): OperatorAndContext | undefined {
		return this.tryGetRuleContext(0, OperatorAndContext);
	}
	public operatorOr(): OperatorOrContext | undefined {
		return this.tryGetRuleContext(0, OperatorOrContext);
	}
	public operatorBitwise(): OperatorBitwiseContext | undefined {
		return this.tryGetRuleContext(0, OperatorBitwiseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuaParser.RULE_exp; }
	// @Override
	public enterRule(listener: LuaListener): void {
		if (listener.enterExp) {
			listener.enterExp(this);
		}
	}
	// @Override
	public exitRule(listener: LuaListener): void {
		if (listener.exitExp) {
			listener.exitExp(this);
		}
	}
}


export class PrefixexpContext extends ParserRuleContext {
	public varOrExp(): VarOrExpContext {
		return this.getRuleContext(0, VarOrExpContext);
	}
	public nameAndArgs(): NameAndArgsContext[];
	public nameAndArgs(i: number): NameAndArgsContext;
	public nameAndArgs(i?: number): NameAndArgsContext | NameAndArgsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NameAndArgsContext);
		} else {
			return this.getRuleContext(i, NameAndArgsContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuaParser.RULE_prefixexp; }
	// @Override
	public enterRule(listener: LuaListener): void {
		if (listener.enterPrefixexp) {
			listener.enterPrefixexp(this);
		}
	}
	// @Override
	public exitRule(listener: LuaListener): void {
		if (listener.exitPrefixexp) {
			listener.exitPrefixexp(this);
		}
	}
}


export class FunctioncallContext extends ParserRuleContext {
	public varOrExp(): VarOrExpContext {
		return this.getRuleContext(0, VarOrExpContext);
	}
	public nameAndArgs(): NameAndArgsContext[];
	public nameAndArgs(i: number): NameAndArgsContext;
	public nameAndArgs(i?: number): NameAndArgsContext | NameAndArgsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NameAndArgsContext);
		} else {
			return this.getRuleContext(i, NameAndArgsContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuaParser.RULE_functioncall; }
	// @Override
	public enterRule(listener: LuaListener): void {
		if (listener.enterFunctioncall) {
			listener.enterFunctioncall(this);
		}
	}
	// @Override
	public exitRule(listener: LuaListener): void {
		if (listener.exitFunctioncall) {
			listener.exitFunctioncall(this);
		}
	}
}


export class VarOrExpContext extends ParserRuleContext {
	public var(): VarContext | undefined {
		return this.tryGetRuleContext(0, VarContext);
	}
	public exp(): ExpContext | undefined {
		return this.tryGetRuleContext(0, ExpContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuaParser.RULE_varOrExp; }
	// @Override
	public enterRule(listener: LuaListener): void {
		if (listener.enterVarOrExp) {
			listener.enterVarOrExp(this);
		}
	}
	// @Override
	public exitRule(listener: LuaListener): void {
		if (listener.exitVarOrExp) {
			listener.exitVarOrExp(this);
		}
	}
}


export class VarContext extends ParserRuleContext {
	public NAME(): TerminalNode | undefined { return this.tryGetToken(LuaParser.NAME, 0); }
	public exp(): ExpContext | undefined {
		return this.tryGetRuleContext(0, ExpContext);
	}
	public varSuffix(): VarSuffixContext[];
	public varSuffix(i: number): VarSuffixContext;
	public varSuffix(i?: number): VarSuffixContext | VarSuffixContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VarSuffixContext);
		} else {
			return this.getRuleContext(i, VarSuffixContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuaParser.RULE_var; }
	// @Override
	public enterRule(listener: LuaListener): void {
		if (listener.enterVar) {
			listener.enterVar(this);
		}
	}
	// @Override
	public exitRule(listener: LuaListener): void {
		if (listener.exitVar) {
			listener.exitVar(this);
		}
	}
}


export class VarSuffixContext extends ParserRuleContext {
	public exp(): ExpContext | undefined {
		return this.tryGetRuleContext(0, ExpContext);
	}
	public NAME(): TerminalNode | undefined { return this.tryGetToken(LuaParser.NAME, 0); }
	public nameAndArgs(): NameAndArgsContext[];
	public nameAndArgs(i: number): NameAndArgsContext;
	public nameAndArgs(i?: number): NameAndArgsContext | NameAndArgsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NameAndArgsContext);
		} else {
			return this.getRuleContext(i, NameAndArgsContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuaParser.RULE_varSuffix; }
	// @Override
	public enterRule(listener: LuaListener): void {
		if (listener.enterVarSuffix) {
			listener.enterVarSuffix(this);
		}
	}
	// @Override
	public exitRule(listener: LuaListener): void {
		if (listener.exitVarSuffix) {
			listener.exitVarSuffix(this);
		}
	}
}


export class NameAndArgsContext extends ParserRuleContext {
	public args(): ArgsContext {
		return this.getRuleContext(0, ArgsContext);
	}
	public NAME(): TerminalNode | undefined { return this.tryGetToken(LuaParser.NAME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuaParser.RULE_nameAndArgs; }
	// @Override
	public enterRule(listener: LuaListener): void {
		if (listener.enterNameAndArgs) {
			listener.enterNameAndArgs(this);
		}
	}
	// @Override
	public exitRule(listener: LuaListener): void {
		if (listener.exitNameAndArgs) {
			listener.exitNameAndArgs(this);
		}
	}
}


export class ArgsContext extends ParserRuleContext {
	public explist(): ExplistContext | undefined {
		return this.tryGetRuleContext(0, ExplistContext);
	}
	public tableconstructor(): TableconstructorContext | undefined {
		return this.tryGetRuleContext(0, TableconstructorContext);
	}
	public string(): StringContext | undefined {
		return this.tryGetRuleContext(0, StringContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuaParser.RULE_args; }
	// @Override
	public enterRule(listener: LuaListener): void {
		if (listener.enterArgs) {
			listener.enterArgs(this);
		}
	}
	// @Override
	public exitRule(listener: LuaListener): void {
		if (listener.exitArgs) {
			listener.exitArgs(this);
		}
	}
}


export class FunctiondefContext extends ParserRuleContext {
	public funcbody(): FuncbodyContext {
		return this.getRuleContext(0, FuncbodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuaParser.RULE_functiondef; }
	// @Override
	public enterRule(listener: LuaListener): void {
		if (listener.enterFunctiondef) {
			listener.enterFunctiondef(this);
		}
	}
	// @Override
	public exitRule(listener: LuaListener): void {
		if (listener.exitFunctiondef) {
			listener.exitFunctiondef(this);
		}
	}
}


export class FuncbodyContext extends ParserRuleContext {
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public parlist(): ParlistContext | undefined {
		return this.tryGetRuleContext(0, ParlistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuaParser.RULE_funcbody; }
	// @Override
	public enterRule(listener: LuaListener): void {
		if (listener.enterFuncbody) {
			listener.enterFuncbody(this);
		}
	}
	// @Override
	public exitRule(listener: LuaListener): void {
		if (listener.exitFuncbody) {
			listener.exitFuncbody(this);
		}
	}
}


export class ParlistContext extends ParserRuleContext {
	public namelist(): NamelistContext | undefined {
		return this.tryGetRuleContext(0, NamelistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuaParser.RULE_parlist; }
	// @Override
	public enterRule(listener: LuaListener): void {
		if (listener.enterParlist) {
			listener.enterParlist(this);
		}
	}
	// @Override
	public exitRule(listener: LuaListener): void {
		if (listener.exitParlist) {
			listener.exitParlist(this);
		}
	}
}


export class TableconstructorContext extends ParserRuleContext {
	public fieldlist(): FieldlistContext | undefined {
		return this.tryGetRuleContext(0, FieldlistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuaParser.RULE_tableconstructor; }
	// @Override
	public enterRule(listener: LuaListener): void {
		if (listener.enterTableconstructor) {
			listener.enterTableconstructor(this);
		}
	}
	// @Override
	public exitRule(listener: LuaListener): void {
		if (listener.exitTableconstructor) {
			listener.exitTableconstructor(this);
		}
	}
}


export class FieldlistContext extends ParserRuleContext {
	public field(): FieldContext[];
	public field(i: number): FieldContext;
	public field(i?: number): FieldContext | FieldContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldContext);
		} else {
			return this.getRuleContext(i, FieldContext);
		}
	}
	public fieldsep(): FieldsepContext[];
	public fieldsep(i: number): FieldsepContext;
	public fieldsep(i?: number): FieldsepContext | FieldsepContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldsepContext);
		} else {
			return this.getRuleContext(i, FieldsepContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuaParser.RULE_fieldlist; }
	// @Override
	public enterRule(listener: LuaListener): void {
		if (listener.enterFieldlist) {
			listener.enterFieldlist(this);
		}
	}
	// @Override
	public exitRule(listener: LuaListener): void {
		if (listener.exitFieldlist) {
			listener.exitFieldlist(this);
		}
	}
}


export class FieldContext extends ParserRuleContext {
	public exp(): ExpContext[];
	public exp(i: number): ExpContext;
	public exp(i?: number): ExpContext | ExpContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpContext);
		} else {
			return this.getRuleContext(i, ExpContext);
		}
	}
	public NAME(): TerminalNode | undefined { return this.tryGetToken(LuaParser.NAME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuaParser.RULE_field; }
	// @Override
	public enterRule(listener: LuaListener): void {
		if (listener.enterField) {
			listener.enterField(this);
		}
	}
	// @Override
	public exitRule(listener: LuaListener): void {
		if (listener.exitField) {
			listener.exitField(this);
		}
	}
}


export class FieldsepContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuaParser.RULE_fieldsep; }
	// @Override
	public enterRule(listener: LuaListener): void {
		if (listener.enterFieldsep) {
			listener.enterFieldsep(this);
		}
	}
	// @Override
	public exitRule(listener: LuaListener): void {
		if (listener.exitFieldsep) {
			listener.exitFieldsep(this);
		}
	}
}


export class OperatorOrContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuaParser.RULE_operatorOr; }
	// @Override
	public enterRule(listener: LuaListener): void {
		if (listener.enterOperatorOr) {
			listener.enterOperatorOr(this);
		}
	}
	// @Override
	public exitRule(listener: LuaListener): void {
		if (listener.exitOperatorOr) {
			listener.exitOperatorOr(this);
		}
	}
}


export class OperatorAndContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuaParser.RULE_operatorAnd; }
	// @Override
	public enterRule(listener: LuaListener): void {
		if (listener.enterOperatorAnd) {
			listener.enterOperatorAnd(this);
		}
	}
	// @Override
	public exitRule(listener: LuaListener): void {
		if (listener.exitOperatorAnd) {
			listener.exitOperatorAnd(this);
		}
	}
}


export class OperatorComparisonContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuaParser.RULE_operatorComparison; }
	// @Override
	public enterRule(listener: LuaListener): void {
		if (listener.enterOperatorComparison) {
			listener.enterOperatorComparison(this);
		}
	}
	// @Override
	public exitRule(listener: LuaListener): void {
		if (listener.exitOperatorComparison) {
			listener.exitOperatorComparison(this);
		}
	}
}


export class OperatorStrcatContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuaParser.RULE_operatorStrcat; }
	// @Override
	public enterRule(listener: LuaListener): void {
		if (listener.enterOperatorStrcat) {
			listener.enterOperatorStrcat(this);
		}
	}
	// @Override
	public exitRule(listener: LuaListener): void {
		if (listener.exitOperatorStrcat) {
			listener.exitOperatorStrcat(this);
		}
	}
}


export class OperatorAddSubContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuaParser.RULE_operatorAddSub; }
	// @Override
	public enterRule(listener: LuaListener): void {
		if (listener.enterOperatorAddSub) {
			listener.enterOperatorAddSub(this);
		}
	}
	// @Override
	public exitRule(listener: LuaListener): void {
		if (listener.exitOperatorAddSub) {
			listener.exitOperatorAddSub(this);
		}
	}
}


export class OperatorMulDivModContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuaParser.RULE_operatorMulDivMod; }
	// @Override
	public enterRule(listener: LuaListener): void {
		if (listener.enterOperatorMulDivMod) {
			listener.enterOperatorMulDivMod(this);
		}
	}
	// @Override
	public exitRule(listener: LuaListener): void {
		if (listener.exitOperatorMulDivMod) {
			listener.exitOperatorMulDivMod(this);
		}
	}
}


export class OperatorBitwiseContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuaParser.RULE_operatorBitwise; }
	// @Override
	public enterRule(listener: LuaListener): void {
		if (listener.enterOperatorBitwise) {
			listener.enterOperatorBitwise(this);
		}
	}
	// @Override
	public exitRule(listener: LuaListener): void {
		if (listener.exitOperatorBitwise) {
			listener.exitOperatorBitwise(this);
		}
	}
}


export class OperatorUnaryContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuaParser.RULE_operatorUnary; }
	// @Override
	public enterRule(listener: LuaListener): void {
		if (listener.enterOperatorUnary) {
			listener.enterOperatorUnary(this);
		}
	}
	// @Override
	public exitRule(listener: LuaListener): void {
		if (listener.exitOperatorUnary) {
			listener.exitOperatorUnary(this);
		}
	}
}


export class OperatorPowerContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuaParser.RULE_operatorPower; }
	// @Override
	public enterRule(listener: LuaListener): void {
		if (listener.enterOperatorPower) {
			listener.enterOperatorPower(this);
		}
	}
	// @Override
	public exitRule(listener: LuaListener): void {
		if (listener.exitOperatorPower) {
			listener.exitOperatorPower(this);
		}
	}
}


export class NumberContext extends ParserRuleContext {
	public INT(): TerminalNode | undefined { return this.tryGetToken(LuaParser.INT, 0); }
	public HEX(): TerminalNode | undefined { return this.tryGetToken(LuaParser.HEX, 0); }
	public FLOAT(): TerminalNode | undefined { return this.tryGetToken(LuaParser.FLOAT, 0); }
	public HEX_FLOAT(): TerminalNode | undefined { return this.tryGetToken(LuaParser.HEX_FLOAT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuaParser.RULE_number; }
	// @Override
	public enterRule(listener: LuaListener): void {
		if (listener.enterNumber) {
			listener.enterNumber(this);
		}
	}
	// @Override
	public exitRule(listener: LuaListener): void {
		if (listener.exitNumber) {
			listener.exitNumber(this);
		}
	}
}


export class StringContext extends ParserRuleContext {
	public NORMALSTRING(): TerminalNode | undefined { return this.tryGetToken(LuaParser.NORMALSTRING, 0); }
	public CHARSTRING(): TerminalNode | undefined { return this.tryGetToken(LuaParser.CHARSTRING, 0); }
	public LONGSTRING(): TerminalNode | undefined { return this.tryGetToken(LuaParser.LONGSTRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuaParser.RULE_string; }
	// @Override
	public enterRule(listener: LuaListener): void {
		if (listener.enterString) {
			listener.enterString(this);
		}
	}
	// @Override
	public exitRule(listener: LuaListener): void {
		if (listener.exitString) {
			listener.exitString(this);
		}
	}
}


