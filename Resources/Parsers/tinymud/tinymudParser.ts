// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/tinymud/tinymud.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { tinymudListener } from "./tinymudListener";
import { tinymudVisitor } from "./tinymudVisitor";


export class tinymudParser extends Parser {
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
	public static readonly T__55 = 56;
	public static readonly T__56 = 57;
	public static readonly STRING = 58;
	public static readonly NUMBER = 59;
	public static readonly EOL = 60;
	public static readonly WS = 61;
	public static readonly RULE_prog = 0;
	public static readonly RULE_line = 1;
	public static readonly RULE_command = 2;
	public static readonly RULE_bootcommand = 3;
	public static readonly RULE_chowncommand = 4;
	public static readonly RULE_createcommand = 5;
	public static readonly RULE_describecommand = 6;
	public static readonly RULE_digcommand = 7;
	public static readonly RULE_dumpcommand = 8;
	public static readonly RULE_failcommand = 9;
	public static readonly RULE_findcommand = 10;
	public static readonly RULE_forcecommand = 11;
	public static readonly RULE_linkcommand = 12;
	public static readonly RULE_lockcommand = 13;
	public static readonly RULE_namecommand = 14;
	public static readonly RULE_newpassswordcommand = 15;
	public static readonly RULE_ofailcommand = 16;
	public static readonly RULE_opencommand = 17;
	public static readonly RULE_osuccesscommand = 18;
	public static readonly RULE_passwordcommand = 19;
	public static readonly RULE_pcreatecommand = 20;
	public static readonly RULE_setcommand = 21;
	public static readonly RULE_shutdowncommand = 22;
	public static readonly RULE_statscommand = 23;
	public static readonly RULE_successcommand = 24;
	public static readonly RULE_teleportcommand = 25;
	public static readonly RULE_toadcommand = 26;
	public static readonly RULE_unlinkcommand = 27;
	public static readonly RULE_unlockcommand = 28;
	public static readonly RULE_wallcommand = 29;
	public static readonly RULE_action = 30;
	public static readonly RULE_dropaction = 31;
	public static readonly RULE_examineaction = 32;
	public static readonly RULE_getaction = 33;
	public static readonly RULE_giveaction = 34;
	public static readonly RULE_gotoaction = 35;
	public static readonly RULE_gripeaction = 36;
	public static readonly RULE_helpaction = 37;
	public static readonly RULE_inventoryaction = 38;
	public static readonly RULE_killaction = 39;
	public static readonly RULE_lookaction = 40;
	public static readonly RULE_newsaction = 41;
	public static readonly RULE_pageaction = 42;
	public static readonly RULE_quitaction = 43;
	public static readonly RULE_robaction = 44;
	public static readonly RULE_sayaction = 45;
	public static readonly RULE_scoreaction = 46;
	public static readonly RULE_whisperaction = 47;
	public static readonly RULE_whoaction = 48;
	public static readonly RULE_object = 49;
	public static readonly RULE_player = 50;
	public static readonly RULE_name = 51;
	public static readonly RULE_description = 52;
	public static readonly RULE_cost = 53;
	public static readonly RULE_key = 54;
	public static readonly RULE_password = 55;
	public static readonly RULE_message = 56;
	public static readonly RULE_dir = 57;
	public static readonly RULE_number = 58;
	public static readonly RULE_room = 59;
	public static readonly RULE_flag = 60;
	public static readonly RULE_pennies = 61;
	public static readonly RULE_direction = 62;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"prog", "line", "command", "bootcommand", "chowncommand", "createcommand", 
		"describecommand", "digcommand", "dumpcommand", "failcommand", "findcommand", 
		"forcecommand", "linkcommand", "lockcommand", "namecommand", "newpassswordcommand", 
		"ofailcommand", "opencommand", "osuccesscommand", "passwordcommand", "pcreatecommand", 
		"setcommand", "shutdowncommand", "statscommand", "successcommand", "teleportcommand", 
		"toadcommand", "unlinkcommand", "unlockcommand", "wallcommand", "action", 
		"dropaction", "examineaction", "getaction", "giveaction", "gotoaction", 
		"gripeaction", "helpaction", "inventoryaction", "killaction", "lookaction", 
		"newsaction", "pageaction", "quitaction", "robaction", "sayaction", "scoreaction", 
		"whisperaction", "whoaction", "object", "player", "name", "description", 
		"cost", "key", "password", "message", "dir", "number", "room", "flag", 
		"pennies", "direction",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'@boot'", "'@chown'", "'='", "'@create'", "'@describe'", "'@desc'", 
		"'@dig'", "'@dump'", "'@fail'", "'@find'", "'@force'", "'@link'", "'@lock'", 
		"'@name'", "'@newpassword'", "'@ofail'", "'@open'", "';'", "'@osuccess'", 
		"'@osucc'", "'@password'", "'@pcreate'", "'@set'", "'!'", "'@shutdown'", 
		"'@stats'", "'@success'", "'@succ'", "'@teleport'", "'@toad'", "'@unlink'", 
		"'@unlock'", "'@wall'", "'drop'", "'throw'", "'examine'", "'get'", "'take'", 
		"'give'", "'go'", "'goto'", "'move'", "'gripe'", "'help'", "'inventory'", 
		"'inv'", "'kill'", "'look'", "'read'", "'news'", "'page'", "'quit'", "'rob'", 
		"'say'", "'score'", "'whisper'", "'who'",
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
		undefined, undefined, "STRING", "NUMBER", "EOL", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(tinymudParser._LITERAL_NAMES, tinymudParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return tinymudParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "tinymud.g4"; }

	// @Override
	public get ruleNames(): string[] { return tinymudParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return tinymudParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(tinymudParser._ATN, this);
	}
	// @RuleVersion(0)
	public prog(): ProgContext {
		let _localctx: ProgContext = new ProgContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, tinymudParser.RULE_prog);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 127;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 126;
				this.line();
				}
				}
				this.state = 129;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << tinymudParser.T__0) | (1 << tinymudParser.T__1) | (1 << tinymudParser.T__3) | (1 << tinymudParser.T__4) | (1 << tinymudParser.T__5) | (1 << tinymudParser.T__6) | (1 << tinymudParser.T__7) | (1 << tinymudParser.T__8) | (1 << tinymudParser.T__9) | (1 << tinymudParser.T__10) | (1 << tinymudParser.T__11) | (1 << tinymudParser.T__12) | (1 << tinymudParser.T__13) | (1 << tinymudParser.T__14) | (1 << tinymudParser.T__15) | (1 << tinymudParser.T__16) | (1 << tinymudParser.T__18) | (1 << tinymudParser.T__19) | (1 << tinymudParser.T__20) | (1 << tinymudParser.T__21) | (1 << tinymudParser.T__22) | (1 << tinymudParser.T__24) | (1 << tinymudParser.T__25) | (1 << tinymudParser.T__26) | (1 << tinymudParser.T__27) | (1 << tinymudParser.T__28) | (1 << tinymudParser.T__29) | (1 << tinymudParser.T__30))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (tinymudParser.T__31 - 32)) | (1 << (tinymudParser.T__32 - 32)) | (1 << (tinymudParser.T__33 - 32)) | (1 << (tinymudParser.T__34 - 32)) | (1 << (tinymudParser.T__35 - 32)) | (1 << (tinymudParser.T__36 - 32)) | (1 << (tinymudParser.T__37 - 32)) | (1 << (tinymudParser.T__38 - 32)) | (1 << (tinymudParser.T__39 - 32)) | (1 << (tinymudParser.T__40 - 32)) | (1 << (tinymudParser.T__41 - 32)) | (1 << (tinymudParser.T__42 - 32)) | (1 << (tinymudParser.T__43 - 32)) | (1 << (tinymudParser.T__44 - 32)) | (1 << (tinymudParser.T__45 - 32)) | (1 << (tinymudParser.T__46 - 32)) | (1 << (tinymudParser.T__47 - 32)) | (1 << (tinymudParser.T__48 - 32)) | (1 << (tinymudParser.T__49 - 32)) | (1 << (tinymudParser.T__50 - 32)) | (1 << (tinymudParser.T__51 - 32)) | (1 << (tinymudParser.T__52 - 32)) | (1 << (tinymudParser.T__53 - 32)) | (1 << (tinymudParser.T__54 - 32)) | (1 << (tinymudParser.T__55 - 32)) | (1 << (tinymudParser.T__56 - 32)))) !== 0));
			this.state = 134;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === tinymudParser.EOL) {
				{
				{
				this.state = 131;
				this.match(tinymudParser.EOL);
				}
				}
				this.state = 136;
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
	public line(): LineContext {
		let _localctx: LineContext = new LineContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, tinymudParser.RULE_line);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 139;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case tinymudParser.T__0:
			case tinymudParser.T__1:
			case tinymudParser.T__3:
			case tinymudParser.T__4:
			case tinymudParser.T__5:
			case tinymudParser.T__6:
			case tinymudParser.T__7:
			case tinymudParser.T__8:
			case tinymudParser.T__9:
			case tinymudParser.T__10:
			case tinymudParser.T__11:
			case tinymudParser.T__12:
			case tinymudParser.T__13:
			case tinymudParser.T__14:
			case tinymudParser.T__15:
			case tinymudParser.T__16:
			case tinymudParser.T__18:
			case tinymudParser.T__19:
			case tinymudParser.T__20:
			case tinymudParser.T__21:
			case tinymudParser.T__22:
			case tinymudParser.T__24:
			case tinymudParser.T__25:
			case tinymudParser.T__26:
			case tinymudParser.T__27:
			case tinymudParser.T__28:
			case tinymudParser.T__29:
			case tinymudParser.T__30:
			case tinymudParser.T__31:
			case tinymudParser.T__32:
				{
				this.state = 137;
				this.command();
				}
				break;
			case tinymudParser.T__33:
			case tinymudParser.T__34:
			case tinymudParser.T__35:
			case tinymudParser.T__36:
			case tinymudParser.T__37:
			case tinymudParser.T__38:
			case tinymudParser.T__39:
			case tinymudParser.T__40:
			case tinymudParser.T__41:
			case tinymudParser.T__42:
			case tinymudParser.T__43:
			case tinymudParser.T__44:
			case tinymudParser.T__45:
			case tinymudParser.T__46:
			case tinymudParser.T__47:
			case tinymudParser.T__48:
			case tinymudParser.T__49:
			case tinymudParser.T__50:
			case tinymudParser.T__51:
			case tinymudParser.T__52:
			case tinymudParser.T__53:
			case tinymudParser.T__54:
			case tinymudParser.T__55:
			case tinymudParser.T__56:
				{
				this.state = 138;
				this.action();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 141;
			this.match(tinymudParser.EOL);
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
		this.enterRule(_localctx, 4, tinymudParser.RULE_command);
		try {
			this.state = 170;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case tinymudParser.T__0:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 143;
				this.bootcommand();
				}
				break;
			case tinymudParser.T__1:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 144;
				this.chowncommand();
				}
				break;
			case tinymudParser.T__3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 145;
				this.createcommand();
				}
				break;
			case tinymudParser.T__4:
			case tinymudParser.T__5:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 146;
				this.describecommand();
				}
				break;
			case tinymudParser.T__6:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 147;
				this.digcommand();
				}
				break;
			case tinymudParser.T__7:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 148;
				this.dumpcommand();
				}
				break;
			case tinymudParser.T__8:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 149;
				this.failcommand();
				}
				break;
			case tinymudParser.T__9:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 150;
				this.findcommand();
				}
				break;
			case tinymudParser.T__10:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 151;
				this.forcecommand();
				}
				break;
			case tinymudParser.T__11:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 152;
				this.linkcommand();
				}
				break;
			case tinymudParser.T__12:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 153;
				this.lockcommand();
				}
				break;
			case tinymudParser.T__13:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 154;
				this.namecommand();
				}
				break;
			case tinymudParser.T__14:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 155;
				this.newpassswordcommand();
				}
				break;
			case tinymudParser.T__15:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 156;
				this.ofailcommand();
				}
				break;
			case tinymudParser.T__16:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 157;
				this.opencommand();
				}
				break;
			case tinymudParser.T__18:
			case tinymudParser.T__19:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 158;
				this.osuccesscommand();
				}
				break;
			case tinymudParser.T__20:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 159;
				this.passwordcommand();
				}
				break;
			case tinymudParser.T__21:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 160;
				this.pcreatecommand();
				}
				break;
			case tinymudParser.T__22:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 161;
				this.setcommand();
				}
				break;
			case tinymudParser.T__24:
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 162;
				this.shutdowncommand();
				}
				break;
			case tinymudParser.T__25:
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 163;
				this.statscommand();
				}
				break;
			case tinymudParser.T__26:
			case tinymudParser.T__27:
				this.enterOuterAlt(_localctx, 22);
				{
				this.state = 164;
				this.successcommand();
				}
				break;
			case tinymudParser.T__28:
				this.enterOuterAlt(_localctx, 23);
				{
				this.state = 165;
				this.teleportcommand();
				}
				break;
			case tinymudParser.T__29:
				this.enterOuterAlt(_localctx, 24);
				{
				this.state = 166;
				this.toadcommand();
				}
				break;
			case tinymudParser.T__30:
				this.enterOuterAlt(_localctx, 25);
				{
				this.state = 167;
				this.unlinkcommand();
				}
				break;
			case tinymudParser.T__31:
				this.enterOuterAlt(_localctx, 26);
				{
				this.state = 168;
				this.unlockcommand();
				}
				break;
			case tinymudParser.T__32:
				this.enterOuterAlt(_localctx, 27);
				{
				this.state = 169;
				this.wallcommand();
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
	public bootcommand(): BootcommandContext {
		let _localctx: BootcommandContext = new BootcommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, tinymudParser.RULE_bootcommand);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 172;
			this.match(tinymudParser.T__0);
			this.state = 173;
			this.player();
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
	public chowncommand(): ChowncommandContext {
		let _localctx: ChowncommandContext = new ChowncommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, tinymudParser.RULE_chowncommand);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 175;
			this.match(tinymudParser.T__1);
			this.state = 176;
			this.object();
			this.state = 177;
			this.match(tinymudParser.T__2);
			this.state = 178;
			this.player();
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
	public createcommand(): CreatecommandContext {
		let _localctx: CreatecommandContext = new CreatecommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, tinymudParser.RULE_createcommand);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 180;
			this.match(tinymudParser.T__3);
			this.state = 181;
			this.name();
			this.state = 184;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === tinymudParser.T__2) {
				{
				this.state = 182;
				this.match(tinymudParser.T__2);
				this.state = 183;
				this.cost();
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
	public describecommand(): DescribecommandContext {
		let _localctx: DescribecommandContext = new DescribecommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, tinymudParser.RULE_describecommand);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 186;
			_la = this._input.LA(1);
			if (!(_la === tinymudParser.T__4 || _la === tinymudParser.T__5)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 187;
			this.object();
			this.state = 190;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === tinymudParser.T__2) {
				{
				this.state = 188;
				this.match(tinymudParser.T__2);
				this.state = 189;
				this.description();
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
	public digcommand(): DigcommandContext {
		let _localctx: DigcommandContext = new DigcommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, tinymudParser.RULE_digcommand);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 192;
			this.match(tinymudParser.T__6);
			this.state = 193;
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
	public dumpcommand(): DumpcommandContext {
		let _localctx: DumpcommandContext = new DumpcommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, tinymudParser.RULE_dumpcommand);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 195;
			this.match(tinymudParser.T__7);
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
	public failcommand(): FailcommandContext {
		let _localctx: FailcommandContext = new FailcommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, tinymudParser.RULE_failcommand);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 197;
			this.match(tinymudParser.T__8);
			this.state = 198;
			this.name();
			this.state = 201;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === tinymudParser.T__2) {
				{
				this.state = 199;
				this.match(tinymudParser.T__2);
				this.state = 200;
				this.description();
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
	public findcommand(): FindcommandContext {
		let _localctx: FindcommandContext = new FindcommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, tinymudParser.RULE_findcommand);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 203;
			this.match(tinymudParser.T__9);
			this.state = 205;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === tinymudParser.STRING) {
				{
				this.state = 204;
				this.name();
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
	public forcecommand(): ForcecommandContext {
		let _localctx: ForcecommandContext = new ForcecommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, tinymudParser.RULE_forcecommand);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 207;
			this.match(tinymudParser.T__10);
			this.state = 208;
			this.player();
			this.state = 209;
			this.match(tinymudParser.T__2);
			this.state = 210;
			this.command();
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
	public linkcommand(): LinkcommandContext {
		let _localctx: LinkcommandContext = new LinkcommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, tinymudParser.RULE_linkcommand);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 212;
			this.match(tinymudParser.T__11);
			this.state = 213;
			this.object();
			this.state = 214;
			this.match(tinymudParser.T__2);
			this.state = 218;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				{
				this.state = 215;
				this.number();
				}
				break;

			case 2:
				{
				this.state = 216;
				this.dir();
				}
				break;

			case 3:
				{
				this.state = 217;
				this.room();
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
	public lockcommand(): LockcommandContext {
		let _localctx: LockcommandContext = new LockcommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, tinymudParser.RULE_lockcommand);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 220;
			this.match(tinymudParser.T__12);
			this.state = 221;
			this.object();
			this.state = 222;
			this.match(tinymudParser.T__2);
			this.state = 223;
			this.key();
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
	public namecommand(): NamecommandContext {
		let _localctx: NamecommandContext = new NamecommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, tinymudParser.RULE_namecommand);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 225;
			this.match(tinymudParser.T__13);
			this.state = 226;
			this.object();
			this.state = 227;
			this.match(tinymudParser.T__2);
			this.state = 228;
			this.name();
			this.state = 230;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === tinymudParser.STRING) {
				{
				this.state = 229;
				this.password();
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
	public newpassswordcommand(): NewpassswordcommandContext {
		let _localctx: NewpassswordcommandContext = new NewpassswordcommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, tinymudParser.RULE_newpassswordcommand);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 232;
			this.match(tinymudParser.T__14);
			this.state = 233;
			this.player();
			this.state = 236;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === tinymudParser.T__2) {
				{
				this.state = 234;
				this.match(tinymudParser.T__2);
				this.state = 235;
				this.password();
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
	public ofailcommand(): OfailcommandContext {
		let _localctx: OfailcommandContext = new OfailcommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, tinymudParser.RULE_ofailcommand);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 238;
			this.match(tinymudParser.T__15);
			this.state = 239;
			this.object();
			this.state = 242;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === tinymudParser.T__2) {
				{
				this.state = 240;
				this.match(tinymudParser.T__2);
				this.state = 241;
				this.message();
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
	public opencommand(): OpencommandContext {
		let _localctx: OpencommandContext = new OpencommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, tinymudParser.RULE_opencommand);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 244;
			this.match(tinymudParser.T__16);
			this.state = 245;
			this.dir();
			this.state = 250;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === tinymudParser.T__17) {
				{
				{
				this.state = 246;
				this.match(tinymudParser.T__17);
				this.state = 247;
				this.dir();
				}
				}
				this.state = 252;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 255;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === tinymudParser.T__2) {
				{
				this.state = 253;
				this.match(tinymudParser.T__2);
				this.state = 254;
				this.number();
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
	public osuccesscommand(): OsuccesscommandContext {
		let _localctx: OsuccesscommandContext = new OsuccesscommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, tinymudParser.RULE_osuccesscommand);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 257;
			_la = this._input.LA(1);
			if (!(_la === tinymudParser.T__18 || _la === tinymudParser.T__19)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 258;
			this.object();
			this.state = 261;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === tinymudParser.T__2) {
				{
				this.state = 259;
				this.match(tinymudParser.T__2);
				this.state = 260;
				this.message();
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
	public passwordcommand(): PasswordcommandContext {
		let _localctx: PasswordcommandContext = new PasswordcommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, tinymudParser.RULE_passwordcommand);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 263;
			this.match(tinymudParser.T__20);
			this.state = 264;
			this.password();
			this.state = 265;
			this.match(tinymudParser.T__2);
			this.state = 266;
			this.password();
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
	public pcreatecommand(): PcreatecommandContext {
		let _localctx: PcreatecommandContext = new PcreatecommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, tinymudParser.RULE_pcreatecommand);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 268;
			this.match(tinymudParser.T__21);
			this.state = 269;
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
	public setcommand(): SetcommandContext {
		let _localctx: SetcommandContext = new SetcommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, tinymudParser.RULE_setcommand);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 271;
			this.match(tinymudParser.T__22);
			this.state = 272;
			this.object();
			this.state = 273;
			this.match(tinymudParser.T__2);
			this.state = 275;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === tinymudParser.T__23) {
				{
				this.state = 274;
				this.match(tinymudParser.T__23);
				}
			}

			this.state = 277;
			this.flag();
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
	public shutdowncommand(): ShutdowncommandContext {
		let _localctx: ShutdowncommandContext = new ShutdowncommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, tinymudParser.RULE_shutdowncommand);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 279;
			this.match(tinymudParser.T__24);
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
	public statscommand(): StatscommandContext {
		let _localctx: StatscommandContext = new StatscommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, tinymudParser.RULE_statscommand);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 281;
			this.match(tinymudParser.T__25);
			this.state = 282;
			this.player();
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
	public successcommand(): SuccesscommandContext {
		let _localctx: SuccesscommandContext = new SuccesscommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, tinymudParser.RULE_successcommand);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 284;
			_la = this._input.LA(1);
			if (!(_la === tinymudParser.T__26 || _la === tinymudParser.T__27)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 285;
			this.object();
			this.state = 288;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === tinymudParser.T__2) {
				{
				this.state = 286;
				this.match(tinymudParser.T__2);
				this.state = 287;
				this.message();
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
	public teleportcommand(): TeleportcommandContext {
		let _localctx: TeleportcommandContext = new TeleportcommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, tinymudParser.RULE_teleportcommand);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 290;
			this.match(tinymudParser.T__28);
			this.state = 294;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
			case 1:
				{
				this.state = 291;
				this.object();
				this.state = 292;
				this.match(tinymudParser.T__2);
				}
				break;
			}
			this.state = 296;
			this.room();
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
	public toadcommand(): ToadcommandContext {
		let _localctx: ToadcommandContext = new ToadcommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, tinymudParser.RULE_toadcommand);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 298;
			this.match(tinymudParser.T__29);
			this.state = 299;
			this.player();
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
	public unlinkcommand(): UnlinkcommandContext {
		let _localctx: UnlinkcommandContext = new UnlinkcommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, tinymudParser.RULE_unlinkcommand);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 301;
			this.match(tinymudParser.T__30);
			this.state = 302;
			this.dir();
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
	public unlockcommand(): UnlockcommandContext {
		let _localctx: UnlockcommandContext = new UnlockcommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, tinymudParser.RULE_unlockcommand);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 304;
			this.match(tinymudParser.T__31);
			this.state = 305;
			this.object();
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
	public wallcommand(): WallcommandContext {
		let _localctx: WallcommandContext = new WallcommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, tinymudParser.RULE_wallcommand);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 307;
			this.match(tinymudParser.T__32);
			this.state = 308;
			this.message();
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
		this.enterRule(_localctx, 60, tinymudParser.RULE_action);
		try {
			this.state = 328;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case tinymudParser.T__33:
			case tinymudParser.T__34:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 310;
				this.dropaction();
				}
				break;
			case tinymudParser.T__35:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 311;
				this.examineaction();
				}
				break;
			case tinymudParser.T__36:
			case tinymudParser.T__37:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 312;
				this.getaction();
				}
				break;
			case tinymudParser.T__38:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 313;
				this.giveaction();
				}
				break;
			case tinymudParser.T__39:
			case tinymudParser.T__40:
			case tinymudParser.T__41:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 314;
				this.gotoaction();
				}
				break;
			case tinymudParser.T__42:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 315;
				this.gripeaction();
				}
				break;
			case tinymudParser.T__43:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 316;
				this.helpaction();
				}
				break;
			case tinymudParser.T__44:
			case tinymudParser.T__45:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 317;
				this.inventoryaction();
				}
				break;
			case tinymudParser.T__46:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 318;
				this.killaction();
				}
				break;
			case tinymudParser.T__47:
			case tinymudParser.T__48:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 319;
				this.lookaction();
				}
				break;
			case tinymudParser.T__49:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 320;
				this.newsaction();
				}
				break;
			case tinymudParser.T__50:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 321;
				this.pageaction();
				}
				break;
			case tinymudParser.T__51:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 322;
				this.quitaction();
				}
				break;
			case tinymudParser.T__52:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 323;
				this.robaction();
				}
				break;
			case tinymudParser.T__53:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 324;
				this.sayaction();
				}
				break;
			case tinymudParser.T__54:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 325;
				this.scoreaction();
				}
				break;
			case tinymudParser.T__55:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 326;
				this.whisperaction();
				}
				break;
			case tinymudParser.T__56:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 327;
				this.whoaction();
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
	public dropaction(): DropactionContext {
		let _localctx: DropactionContext = new DropactionContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, tinymudParser.RULE_dropaction);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 330;
			_la = this._input.LA(1);
			if (!(_la === tinymudParser.T__33 || _la === tinymudParser.T__34)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 331;
			this.object();
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
	public examineaction(): ExamineactionContext {
		let _localctx: ExamineactionContext = new ExamineactionContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, tinymudParser.RULE_examineaction);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 333;
			this.match(tinymudParser.T__35);
			this.state = 334;
			this.object();
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
	public getaction(): GetactionContext {
		let _localctx: GetactionContext = new GetactionContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, tinymudParser.RULE_getaction);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 336;
			_la = this._input.LA(1);
			if (!(_la === tinymudParser.T__36 || _la === tinymudParser.T__37)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 337;
			this.object();
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
	public giveaction(): GiveactionContext {
		let _localctx: GiveactionContext = new GiveactionContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, tinymudParser.RULE_giveaction);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 339;
			this.match(tinymudParser.T__38);
			this.state = 340;
			this.player();
			this.state = 341;
			this.match(tinymudParser.T__2);
			this.state = 342;
			this.pennies();
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
	public gotoaction(): GotoactionContext {
		let _localctx: GotoactionContext = new GotoactionContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, tinymudParser.RULE_gotoaction);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 344;
			_la = this._input.LA(1);
			if (!(((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (tinymudParser.T__39 - 40)) | (1 << (tinymudParser.T__40 - 40)) | (1 << (tinymudParser.T__41 - 40)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 345;
			this.direction();
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
	public gripeaction(): GripeactionContext {
		let _localctx: GripeactionContext = new GripeactionContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, tinymudParser.RULE_gripeaction);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 347;
			this.match(tinymudParser.T__42);
			this.state = 348;
			this.message();
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
	public helpaction(): HelpactionContext {
		let _localctx: HelpactionContext = new HelpactionContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, tinymudParser.RULE_helpaction);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 350;
			this.match(tinymudParser.T__43);
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
	public inventoryaction(): InventoryactionContext {
		let _localctx: InventoryactionContext = new InventoryactionContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, tinymudParser.RULE_inventoryaction);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 352;
			_la = this._input.LA(1);
			if (!(_la === tinymudParser.T__44 || _la === tinymudParser.T__45)) {
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
	public killaction(): KillactionContext {
		let _localctx: KillactionContext = new KillactionContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, tinymudParser.RULE_killaction);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 354;
			this.match(tinymudParser.T__46);
			this.state = 355;
			this.player();
			{
			this.state = 356;
			this.match(tinymudParser.T__2);
			this.state = 357;
			this.cost();
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
	public lookaction(): LookactionContext {
		let _localctx: LookactionContext = new LookactionContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, tinymudParser.RULE_lookaction);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 359;
			_la = this._input.LA(1);
			if (!(_la === tinymudParser.T__47 || _la === tinymudParser.T__48)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 360;
			this.object();
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
	public newsaction(): NewsactionContext {
		let _localctx: NewsactionContext = new NewsactionContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, tinymudParser.RULE_newsaction);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 362;
			this.match(tinymudParser.T__49);
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
	public pageaction(): PageactionContext {
		let _localctx: PageactionContext = new PageactionContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, tinymudParser.RULE_pageaction);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 364;
			this.match(tinymudParser.T__50);
			this.state = 365;
			this.player();
			{
			this.state = 366;
			this.match(tinymudParser.T__2);
			this.state = 367;
			this.message();
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
	public quitaction(): QuitactionContext {
		let _localctx: QuitactionContext = new QuitactionContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, tinymudParser.RULE_quitaction);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 369;
			this.match(tinymudParser.T__51);
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
	public robaction(): RobactionContext {
		let _localctx: RobactionContext = new RobactionContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, tinymudParser.RULE_robaction);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 371;
			this.match(tinymudParser.T__52);
			this.state = 372;
			this.player();
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
	public sayaction(): SayactionContext {
		let _localctx: SayactionContext = new SayactionContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, tinymudParser.RULE_sayaction);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 374;
			this.match(tinymudParser.T__53);
			this.state = 375;
			this.message();
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
	public scoreaction(): ScoreactionContext {
		let _localctx: ScoreactionContext = new ScoreactionContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, tinymudParser.RULE_scoreaction);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 377;
			this.match(tinymudParser.T__54);
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
	public whisperaction(): WhisperactionContext {
		let _localctx: WhisperactionContext = new WhisperactionContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, tinymudParser.RULE_whisperaction);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 379;
			this.match(tinymudParser.T__55);
			this.state = 380;
			this.player();
			this.state = 381;
			this.match(tinymudParser.T__2);
			this.state = 382;
			this.message();
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
	public whoaction(): WhoactionContext {
		let _localctx: WhoactionContext = new WhoactionContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, tinymudParser.RULE_whoaction);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 384;
			this.match(tinymudParser.T__56);
			this.state = 386;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === tinymudParser.STRING) {
				{
				this.state = 385;
				this.player();
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
	public object(): ObjectContext {
		let _localctx: ObjectContext = new ObjectContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, tinymudParser.RULE_object);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 388;
			this.match(tinymudParser.STRING);
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
	public player(): PlayerContext {
		let _localctx: PlayerContext = new PlayerContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, tinymudParser.RULE_player);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 390;
			this.match(tinymudParser.STRING);
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
		this.enterRule(_localctx, 102, tinymudParser.RULE_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 392;
			this.match(tinymudParser.STRING);
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
	public description(): DescriptionContext {
		let _localctx: DescriptionContext = new DescriptionContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, tinymudParser.RULE_description);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 394;
			this.match(tinymudParser.STRING);
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
	public cost(): CostContext {
		let _localctx: CostContext = new CostContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, tinymudParser.RULE_cost);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 396;
			this.match(tinymudParser.NUMBER);
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
	public key(): KeyContext {
		let _localctx: KeyContext = new KeyContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, tinymudParser.RULE_key);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 398;
			this.match(tinymudParser.STRING);
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
	public password(): PasswordContext {
		let _localctx: PasswordContext = new PasswordContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, tinymudParser.RULE_password);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 400;
			this.match(tinymudParser.STRING);
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
	public message(): MessageContext {
		let _localctx: MessageContext = new MessageContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, tinymudParser.RULE_message);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 402;
			this.match(tinymudParser.STRING);
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
	public dir(): DirContext {
		let _localctx: DirContext = new DirContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, tinymudParser.RULE_dir);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 404;
			this.match(tinymudParser.STRING);
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
		this.enterRule(_localctx, 116, tinymudParser.RULE_number);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 406;
			this.match(tinymudParser.NUMBER);
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
	public room(): RoomContext {
		let _localctx: RoomContext = new RoomContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, tinymudParser.RULE_room);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 408;
			this.match(tinymudParser.STRING);
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
	public flag(): FlagContext {
		let _localctx: FlagContext = new FlagContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, tinymudParser.RULE_flag);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 410;
			this.match(tinymudParser.NUMBER);
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
	public pennies(): PenniesContext {
		let _localctx: PenniesContext = new PenniesContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, tinymudParser.RULE_pennies);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 412;
			this.match(tinymudParser.NUMBER);
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
	public direction(): DirectionContext {
		let _localctx: DirectionContext = new DirectionContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, tinymudParser.RULE_direction);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 414;
			this.match(tinymudParser.STRING);
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03?\u01A3\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
		"\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x03\x02\x06\x02\x82\n\x02\r\x02\x0E\x02\x83" +
		"\x03\x02\x07\x02\x87\n\x02\f\x02\x0E\x02\x8A\v\x02\x03\x03\x03\x03\x05" +
		"\x03\x8E\n\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04\xAD\n\x04\x03\x05\x03\x05\x03" +
		"\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x05\x07\xBB\n\x07\x03\b\x03\b\x03\b\x03\b\x05\b\xC1\n\b\x03\t\x03" +
		"\t\x03\t\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x05\v\xCC\n\v\x03\f\x03\f" +
		"\x05\f\xD0\n\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x05\x0E\xDD\n\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10\xE9\n\x10\x03" +
		"\x11\x03\x11\x03\x11\x03\x11\x05\x11\xEF\n\x11\x03\x12\x03\x12\x03\x12" +
		"\x03\x12\x05\x12\xF5\n\x12\x03\x13\x03\x13\x03\x13\x03\x13\x07\x13\xFB" +
		"\n\x13\f\x13\x0E\x13\xFE\v\x13\x03\x13\x03\x13\x05\x13\u0102\n\x13\x03" +
		"\x14\x03\x14\x03\x14\x03\x14\x05\x14\u0108\n\x14\x03\x15\x03\x15\x03\x15" +
		"\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03\x17" +
		"\x05\x17\u0116\n\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x19\x03\x19\x03" +
		"\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u0123\n\x1A\x03\x1B\x03\x1B" +
		"\x03\x1B\x03\x1B\x05\x1B\u0129\n\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03" +
		"\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03" +
		"\x1F\x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 " +
		"\x03 \x03 \x03 \x03 \x03 \x05 \u014B\n \x03!\x03!\x03!\x03\"\x03\"\x03" +
		"\"\x03#\x03#\x03#\x03$\x03$\x03$\x03$\x03$\x03%\x03%\x03%\x03&\x03&\x03" +
		"&\x03\'\x03\'\x03(\x03(\x03)\x03)\x03)\x03)\x03)\x03*\x03*\x03*\x03+\x03" +
		"+\x03,\x03,\x03,\x03,\x03,\x03-\x03-\x03.\x03.\x03.\x03/\x03/\x03/\x03" +
		"0\x030\x031\x031\x031\x031\x031\x032\x032\x052\u0185\n2\x033\x033\x03" +
		"4\x034\x035\x035\x036\x036\x037\x037\x038\x038\x039\x039\x03:\x03:\x03" +
		";\x03;\x03<\x03<\x03=\x03=\x03>\x03>\x03?\x03?\x03@\x03@\x03@\x02\x02" +
		"\x02A\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02" +
		"\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02" +
		"(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02" +
		"D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02" +
		"`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02" +
		"|\x02~\x02\x02\n\x03\x02\x07\b\x03\x02\x15\x16\x03\x02\x1D\x1E\x03\x02" +
		"$%\x03\x02\'(\x03\x02*,\x03\x02/0\x03\x0223\x02\u01A1\x02\x81\x03\x02" +
		"\x02\x02\x04\x8D\x03\x02\x02\x02\x06\xAC\x03\x02\x02\x02\b\xAE\x03\x02" +
		"\x02\x02\n\xB1\x03\x02\x02\x02\f\xB6\x03\x02\x02\x02\x0E\xBC\x03\x02\x02" +
		"\x02\x10\xC2\x03\x02\x02\x02\x12\xC5\x03\x02\x02\x02\x14\xC7\x03\x02\x02" +
		"\x02\x16\xCD\x03\x02\x02\x02\x18\xD1\x03\x02\x02\x02\x1A\xD6\x03\x02\x02" +
		"\x02\x1C\xDE\x03\x02\x02\x02\x1E\xE3\x03\x02\x02\x02 \xEA\x03\x02\x02" +
		"\x02\"\xF0\x03\x02\x02\x02$\xF6\x03\x02\x02\x02&\u0103\x03\x02\x02\x02" +
		"(\u0109\x03\x02\x02\x02*\u010E\x03\x02\x02\x02,\u0111\x03\x02\x02\x02" +
		".\u0119\x03\x02\x02\x020\u011B\x03\x02\x02\x022\u011E\x03\x02\x02\x02" +
		"4\u0124\x03\x02\x02\x026\u012C\x03\x02\x02\x028\u012F\x03\x02\x02\x02" +
		":\u0132\x03\x02\x02\x02<\u0135\x03\x02\x02\x02>\u014A\x03\x02\x02\x02" +
		"@\u014C\x03\x02\x02\x02B\u014F\x03\x02\x02\x02D\u0152\x03\x02\x02\x02" +
		"F\u0155\x03\x02\x02\x02H\u015A\x03\x02\x02\x02J\u015D\x03\x02\x02\x02" +
		"L\u0160\x03\x02\x02\x02N\u0162\x03\x02\x02\x02P\u0164\x03\x02\x02\x02" +
		"R\u0169\x03\x02\x02\x02T\u016C\x03\x02\x02\x02V\u016E\x03\x02\x02\x02" +
		"X\u0173\x03\x02\x02\x02Z\u0175\x03\x02\x02\x02\\\u0178\x03\x02\x02\x02" +
		"^\u017B\x03\x02\x02\x02`\u017D\x03\x02\x02\x02b\u0182\x03\x02\x02\x02" +
		"d\u0186\x03\x02\x02\x02f\u0188\x03\x02\x02\x02h\u018A\x03\x02\x02\x02" +
		"j\u018C\x03\x02\x02\x02l\u018E\x03\x02\x02\x02n\u0190\x03\x02\x02\x02" +
		"p\u0192\x03\x02\x02\x02r\u0194\x03\x02\x02\x02t\u0196\x03\x02\x02\x02" +
		"v\u0198\x03\x02\x02\x02x\u019A\x03\x02\x02\x02z\u019C\x03\x02\x02\x02" +
		"|\u019E\x03\x02\x02\x02~\u01A0\x03\x02\x02\x02\x80\x82\x05\x04\x03\x02" +
		"\x81\x80\x03\x02\x02\x02\x82\x83\x03\x02\x02\x02\x83\x81\x03\x02\x02\x02" +
		"\x83\x84\x03\x02\x02\x02\x84\x88\x03\x02\x02\x02\x85\x87\x07>\x02\x02" +
		"\x86\x85\x03\x02\x02\x02\x87\x8A\x03\x02\x02\x02\x88\x86\x03\x02\x02\x02" +
		"\x88\x89\x03\x02\x02\x02\x89\x03\x03\x02\x02\x02\x8A\x88\x03\x02\x02\x02" +
		"\x8B\x8E\x05\x06\x04\x02\x8C\x8E\x05> \x02\x8D\x8B\x03\x02\x02\x02\x8D" +
		"\x8C\x03\x02\x02\x02\x8E\x8F\x03\x02\x02\x02\x8F\x90\x07>\x02\x02\x90" +
		"\x05\x03\x02\x02\x02\x91\xAD\x05\b\x05\x02\x92\xAD\x05\n\x06\x02\x93\xAD" +
		"\x05\f\x07\x02\x94\xAD\x05\x0E\b\x02\x95\xAD\x05\x10\t\x02\x96\xAD\x05" +
		"\x12\n\x02\x97\xAD\x05\x14\v\x02\x98\xAD\x05\x16\f\x02\x99\xAD\x05\x18" +
		"\r\x02\x9A\xAD\x05\x1A\x0E\x02\x9B\xAD\x05\x1C\x0F\x02\x9C\xAD\x05\x1E" +
		"\x10\x02\x9D\xAD\x05 \x11\x02\x9E\xAD\x05\"\x12\x02\x9F\xAD\x05$\x13\x02" +
		"\xA0\xAD\x05&\x14\x02\xA1\xAD\x05(\x15\x02\xA2\xAD\x05*\x16\x02\xA3\xAD" +
		"\x05,\x17\x02\xA4\xAD\x05.\x18\x02\xA5\xAD\x050\x19\x02\xA6\xAD\x052\x1A" +
		"\x02\xA7\xAD\x054\x1B\x02\xA8\xAD\x056\x1C\x02\xA9\xAD\x058\x1D\x02\xAA" +
		"\xAD\x05:\x1E\x02\xAB\xAD\x05<\x1F\x02\xAC\x91\x03\x02\x02\x02\xAC\x92" +
		"\x03\x02\x02\x02\xAC\x93\x03\x02\x02\x02\xAC\x94\x03\x02\x02\x02\xAC\x95" +
		"\x03\x02\x02\x02\xAC\x96\x03\x02\x02\x02\xAC\x97\x03\x02\x02\x02\xAC\x98" +
		"\x03\x02\x02\x02\xAC\x99\x03\x02\x02\x02\xAC\x9A\x03\x02\x02\x02\xAC\x9B" +
		"\x03\x02\x02\x02\xAC\x9C\x03\x02\x02\x02\xAC\x9D\x03\x02\x02\x02\xAC\x9E" +
		"\x03\x02\x02\x02\xAC\x9F\x03\x02\x02\x02\xAC\xA0\x03\x02\x02\x02\xAC\xA1" +
		"\x03\x02\x02\x02\xAC\xA2\x03\x02\x02\x02\xAC\xA3\x03\x02\x02\x02\xAC\xA4" +
		"\x03\x02\x02\x02\xAC\xA5\x03\x02\x02\x02\xAC\xA6\x03\x02\x02\x02\xAC\xA7" +
		"\x03\x02\x02\x02\xAC\xA8\x03\x02\x02\x02\xAC\xA9\x03\x02\x02\x02\xAC\xAA" +
		"\x03\x02\x02\x02\xAC\xAB\x03\x02\x02\x02\xAD\x07\x03\x02\x02\x02\xAE\xAF" +
		"\x07\x03\x02\x02\xAF\xB0\x05f4\x02\xB0\t\x03\x02\x02\x02\xB1\xB2\x07\x04" +
		"\x02\x02\xB2\xB3\x05d3\x02\xB3\xB4\x07\x05\x02\x02\xB4\xB5\x05f4\x02\xB5" +
		"\v\x03\x02\x02\x02\xB6\xB7\x07\x06\x02\x02\xB7\xBA\x05h5\x02\xB8\xB9\x07" +
		"\x05\x02\x02\xB9\xBB\x05l7\x02\xBA\xB8\x03\x02\x02\x02\xBA\xBB\x03\x02" +
		"\x02\x02\xBB\r\x03\x02\x02\x02\xBC\xBD\t\x02\x02\x02\xBD\xC0\x05d3\x02" +
		"\xBE\xBF\x07\x05\x02\x02\xBF\xC1\x05j6\x02\xC0\xBE\x03\x02\x02\x02\xC0" +
		"\xC1\x03\x02\x02\x02\xC1\x0F\x03\x02\x02\x02\xC2\xC3\x07\t\x02\x02\xC3" +
		"\xC4\x05h5\x02\xC4\x11\x03\x02\x02\x02\xC5\xC6\x07\n\x02\x02\xC6\x13\x03" +
		"\x02\x02\x02\xC7\xC8\x07\v\x02\x02\xC8\xCB\x05h5\x02\xC9\xCA\x07\x05\x02" +
		"\x02\xCA\xCC\x05j6\x02\xCB\xC9\x03\x02\x02\x02\xCB\xCC\x03\x02\x02\x02" +
		"\xCC\x15\x03\x02\x02\x02\xCD\xCF\x07\f\x02\x02\xCE\xD0\x05h5\x02\xCF\xCE" +
		"\x03\x02\x02\x02\xCF\xD0\x03\x02\x02\x02\xD0\x17\x03\x02\x02\x02\xD1\xD2" +
		"\x07\r\x02\x02\xD2\xD3\x05f4\x02\xD3\xD4\x07\x05\x02\x02\xD4\xD5\x05\x06" +
		"\x04\x02\xD5\x19\x03\x02\x02\x02\xD6\xD7\x07\x0E\x02\x02\xD7\xD8\x05d" +
		"3\x02\xD8\xDC\x07\x05\x02\x02\xD9\xDD\x05v<\x02\xDA\xDD\x05t;\x02\xDB" +
		"\xDD\x05x=\x02\xDC\xD9\x03\x02\x02\x02\xDC\xDA\x03\x02\x02\x02\xDC\xDB" +
		"\x03\x02\x02\x02\xDD\x1B\x03\x02\x02\x02\xDE\xDF\x07\x0F\x02\x02\xDF\xE0" +
		"\x05d3\x02\xE0\xE1\x07\x05\x02\x02\xE1\xE2\x05n8\x02\xE2\x1D\x03\x02\x02" +
		"\x02\xE3\xE4\x07\x10\x02\x02\xE4\xE5\x05d3\x02\xE5\xE6\x07\x05\x02\x02" +
		"\xE6\xE8\x05h5\x02\xE7\xE9\x05p9\x02\xE8\xE7\x03\x02\x02\x02\xE8\xE9\x03" +
		"\x02\x02\x02\xE9\x1F\x03\x02\x02\x02\xEA\xEB\x07\x11\x02\x02\xEB\xEE\x05" +
		"f4\x02\xEC\xED\x07\x05\x02\x02\xED\xEF\x05p9\x02\xEE\xEC\x03\x02\x02\x02" +
		"\xEE\xEF\x03\x02\x02\x02\xEF!\x03\x02\x02\x02\xF0\xF1\x07\x12\x02\x02" +
		"\xF1\xF4\x05d3\x02\xF2\xF3\x07\x05\x02\x02\xF3\xF5\x05r:\x02\xF4\xF2\x03" +
		"\x02\x02\x02\xF4\xF5\x03\x02\x02\x02\xF5#\x03\x02\x02\x02\xF6\xF7\x07" +
		"\x13\x02\x02\xF7\xFC\x05t;\x02\xF8\xF9\x07\x14\x02\x02\xF9\xFB\x05t;\x02" +
		"\xFA\xF8\x03\x02\x02\x02\xFB\xFE\x03\x02\x02\x02\xFC\xFA\x03\x02\x02\x02" +
		"\xFC\xFD\x03\x02\x02\x02\xFD\u0101\x03\x02\x02\x02\xFE\xFC\x03\x02\x02" +
		"\x02\xFF\u0100\x07\x05\x02\x02\u0100\u0102\x05v<\x02\u0101\xFF\x03\x02" +
		"\x02\x02\u0101\u0102\x03\x02\x02\x02\u0102%\x03\x02\x02\x02\u0103\u0104" +
		"\t\x03\x02\x02\u0104\u0107\x05d3\x02\u0105\u0106\x07\x05\x02\x02\u0106" +
		"\u0108\x05r:\x02\u0107\u0105\x03\x02\x02\x02\u0107\u0108\x03\x02\x02\x02" +
		"\u0108\'\x03\x02\x02\x02\u0109\u010A\x07\x17\x02\x02\u010A\u010B\x05p" +
		"9\x02\u010B\u010C\x07\x05\x02\x02\u010C\u010D\x05p9\x02\u010D)\x03\x02" +
		"\x02\x02\u010E\u010F\x07\x18\x02\x02\u010F\u0110\x05h5\x02\u0110+\x03" +
		"\x02\x02\x02\u0111\u0112\x07\x19\x02\x02\u0112\u0113\x05d3\x02\u0113\u0115" +
		"\x07\x05\x02\x02\u0114\u0116\x07\x1A\x02\x02\u0115\u0114\x03\x02\x02\x02" +
		"\u0115\u0116\x03\x02\x02\x02\u0116\u0117\x03\x02\x02\x02\u0117\u0118\x05" +
		"z>\x02\u0118-\x03\x02\x02\x02\u0119\u011A\x07\x1B\x02\x02\u011A/\x03\x02" +
		"\x02\x02\u011B\u011C\x07\x1C\x02\x02\u011C\u011D\x05f4\x02\u011D1\x03" +
		"\x02\x02\x02\u011E\u011F\t\x04\x02\x02\u011F\u0122\x05d3\x02\u0120\u0121" +
		"\x07\x05\x02\x02\u0121\u0123\x05r:\x02\u0122\u0120\x03\x02\x02\x02\u0122" +
		"\u0123\x03\x02\x02\x02\u01233\x03\x02\x02\x02\u0124\u0128\x07\x1F\x02" +
		"\x02\u0125\u0126\x05d3\x02\u0126\u0127\x07\x05\x02\x02\u0127\u0129\x03" +
		"\x02\x02\x02\u0128\u0125\x03\x02\x02\x02\u0128\u0129\x03\x02\x02\x02\u0129" +
		"\u012A\x03\x02\x02\x02\u012A\u012B\x05x=\x02\u012B5\x03\x02\x02\x02\u012C" +
		"\u012D\x07 \x02\x02\u012D\u012E\x05f4\x02\u012E7\x03\x02\x02\x02\u012F" +
		"\u0130\x07!\x02\x02\u0130\u0131\x05t;\x02\u01319\x03\x02\x02\x02\u0132" +
		"\u0133\x07\"\x02\x02\u0133\u0134\x05d3\x02\u0134;\x03\x02\x02\x02\u0135" +
		"\u0136\x07#\x02\x02\u0136\u0137\x05r:\x02\u0137=\x03\x02\x02\x02\u0138" +
		"\u014B\x05@!\x02\u0139\u014B\x05B\"\x02\u013A\u014B\x05D#\x02\u013B\u014B" +
		"\x05F$\x02\u013C\u014B\x05H%\x02\u013D\u014B\x05J&\x02\u013E\u014B\x05" +
		"L\'\x02\u013F\u014B\x05N(\x02\u0140\u014B\x05P)\x02\u0141\u014B\x05R*" +
		"\x02\u0142\u014B\x05T+\x02\u0143\u014B\x05V,\x02\u0144\u014B\x05X-\x02" +
		"\u0145\u014B\x05Z.\x02\u0146\u014B\x05\\/\x02\u0147\u014B\x05^0\x02\u0148" +
		"\u014B\x05`1\x02\u0149\u014B\x05b2\x02\u014A\u0138\x03\x02\x02\x02\u014A" +
		"\u0139\x03\x02\x02\x02\u014A\u013A\x03\x02\x02\x02\u014A\u013B\x03\x02" +
		"\x02\x02\u014A\u013C\x03\x02\x02\x02\u014A\u013D\x03\x02\x02\x02\u014A" +
		"\u013E\x03\x02\x02\x02\u014A\u013F\x03\x02\x02\x02\u014A\u0140\x03\x02" +
		"\x02\x02\u014A\u0141\x03\x02\x02\x02\u014A\u0142\x03\x02\x02\x02\u014A" +
		"\u0143\x03\x02\x02\x02\u014A\u0144\x03\x02\x02\x02\u014A\u0145\x03\x02" +
		"\x02\x02\u014A\u0146\x03\x02\x02\x02\u014A\u0147\x03\x02\x02\x02\u014A" +
		"\u0148\x03\x02\x02\x02\u014A\u0149\x03\x02\x02\x02\u014B?\x03\x02\x02" +
		"\x02\u014C\u014D\t\x05\x02\x02\u014D\u014E\x05d3\x02\u014EA\x03\x02\x02" +
		"\x02\u014F\u0150\x07&\x02\x02\u0150\u0151\x05d3\x02\u0151C\x03\x02\x02" +
		"\x02\u0152\u0153\t\x06\x02\x02\u0153\u0154\x05d3\x02\u0154E\x03\x02\x02" +
		"\x02\u0155\u0156\x07)\x02\x02\u0156\u0157\x05f4\x02\u0157\u0158\x07\x05" +
		"\x02\x02\u0158\u0159\x05|?\x02\u0159G\x03\x02\x02\x02\u015A\u015B\t\x07" +
		"\x02\x02\u015B\u015C\x05~@\x02\u015CI\x03\x02\x02\x02\u015D\u015E\x07" +
		"-\x02\x02\u015E\u015F\x05r:\x02\u015FK\x03\x02\x02\x02\u0160\u0161\x07" +
		".\x02\x02\u0161M\x03\x02\x02\x02\u0162\u0163\t\b\x02\x02\u0163O\x03\x02" +
		"\x02\x02\u0164\u0165\x071\x02\x02\u0165\u0166\x05f4\x02\u0166\u0167\x07" +
		"\x05\x02\x02\u0167\u0168\x05l7\x02\u0168Q\x03\x02\x02\x02\u0169\u016A" +
		"\t\t\x02\x02\u016A\u016B\x05d3\x02\u016BS\x03\x02\x02\x02\u016C\u016D" +
		"\x074\x02\x02\u016DU\x03\x02\x02\x02\u016E\u016F\x075\x02\x02\u016F\u0170" +
		"\x05f4\x02\u0170\u0171\x07\x05\x02\x02\u0171\u0172\x05r:\x02\u0172W\x03" +
		"\x02\x02\x02\u0173\u0174\x076\x02\x02\u0174Y\x03\x02\x02\x02\u0175\u0176" +
		"\x077\x02\x02\u0176\u0177\x05f4\x02\u0177[\x03\x02\x02\x02\u0178\u0179" +
		"\x078\x02\x02\u0179\u017A\x05r:\x02\u017A]\x03\x02\x02\x02\u017B\u017C" +
		"\x079\x02\x02\u017C_\x03\x02\x02\x02\u017D\u017E\x07:\x02\x02\u017E\u017F" +
		"\x05f4\x02\u017F\u0180\x07\x05\x02\x02\u0180\u0181\x05r:\x02\u0181a\x03" +
		"\x02\x02\x02\u0182\u0184\x07;\x02\x02\u0183\u0185\x05f4\x02\u0184\u0183" +
		"\x03\x02\x02\x02\u0184\u0185\x03\x02\x02\x02\u0185c\x03\x02\x02\x02\u0186" +
		"\u0187\x07<\x02\x02\u0187e\x03\x02\x02\x02\u0188\u0189\x07<\x02\x02\u0189" +
		"g\x03\x02\x02\x02\u018A\u018B\x07<\x02\x02\u018Bi\x03\x02\x02\x02\u018C" +
		"\u018D\x07<\x02\x02\u018Dk\x03\x02\x02\x02\u018E\u018F\x07=\x02\x02\u018F" +
		"m\x03\x02\x02\x02\u0190\u0191\x07<\x02\x02\u0191o\x03\x02\x02\x02\u0192" +
		"\u0193\x07<\x02\x02\u0193q\x03\x02\x02\x02\u0194\u0195\x07<\x02\x02\u0195" +
		"s\x03\x02\x02\x02\u0196\u0197\x07<\x02\x02\u0197u\x03\x02\x02\x02\u0198" +
		"\u0199\x07=\x02\x02\u0199w\x03\x02\x02\x02\u019A\u019B\x07<\x02\x02\u019B" +
		"y\x03\x02\x02\x02\u019C\u019D\x07=\x02\x02\u019D{\x03\x02\x02\x02\u019E" +
		"\u019F\x07=\x02\x02\u019F}\x03\x02\x02\x02\u01A0\u01A1\x07<\x02\x02\u01A1" +
		"\x7F\x03\x02\x02\x02\x16\x83\x88\x8D\xAC\xBA\xC0\xCB\xCF\xDC\xE8\xEE\xF4" +
		"\xFC\u0101\u0107\u0115\u0122\u0128\u014A\u0184";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!tinymudParser.__ATN) {
			tinymudParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(tinymudParser._serializedATN));
		}

		return tinymudParser.__ATN;
	}

}

export class ProgContext extends ParserRuleContext {
	public line(): LineContext[];
	public line(i: number): LineContext;
	public line(i?: number): LineContext | LineContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LineContext);
		} else {
			return this.getRuleContext(i, LineContext);
		}
	}
	public EOL(): TerminalNode[];
	public EOL(i: number): TerminalNode;
	public EOL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(tinymudParser.EOL);
		} else {
			return this.getToken(tinymudParser.EOL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tinymudParser.RULE_prog; }
	// @Override
	public enterRule(listener: tinymudListener): void {
		if (listener.enterProg) {
			listener.enterProg(this);
		}
	}
	// @Override
	public exitRule(listener: tinymudListener): void {
		if (listener.exitProg) {
			listener.exitProg(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tinymudVisitor<Result>): Result {
		if (visitor.visitProg) {
			return visitor.visitProg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LineContext extends ParserRuleContext {
	public EOL(): TerminalNode { return this.getToken(tinymudParser.EOL, 0); }
	public command(): CommandContext | undefined {
		return this.tryGetRuleContext(0, CommandContext);
	}
	public action(): ActionContext | undefined {
		return this.tryGetRuleContext(0, ActionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tinymudParser.RULE_line; }
	// @Override
	public enterRule(listener: tinymudListener): void {
		if (listener.enterLine) {
			listener.enterLine(this);
		}
	}
	// @Override
	public exitRule(listener: tinymudListener): void {
		if (listener.exitLine) {
			listener.exitLine(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tinymudVisitor<Result>): Result {
		if (visitor.visitLine) {
			return visitor.visitLine(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CommandContext extends ParserRuleContext {
	public bootcommand(): BootcommandContext | undefined {
		return this.tryGetRuleContext(0, BootcommandContext);
	}
	public chowncommand(): ChowncommandContext | undefined {
		return this.tryGetRuleContext(0, ChowncommandContext);
	}
	public createcommand(): CreatecommandContext | undefined {
		return this.tryGetRuleContext(0, CreatecommandContext);
	}
	public describecommand(): DescribecommandContext | undefined {
		return this.tryGetRuleContext(0, DescribecommandContext);
	}
	public digcommand(): DigcommandContext | undefined {
		return this.tryGetRuleContext(0, DigcommandContext);
	}
	public dumpcommand(): DumpcommandContext | undefined {
		return this.tryGetRuleContext(0, DumpcommandContext);
	}
	public failcommand(): FailcommandContext | undefined {
		return this.tryGetRuleContext(0, FailcommandContext);
	}
	public findcommand(): FindcommandContext | undefined {
		return this.tryGetRuleContext(0, FindcommandContext);
	}
	public forcecommand(): ForcecommandContext | undefined {
		return this.tryGetRuleContext(0, ForcecommandContext);
	}
	public linkcommand(): LinkcommandContext | undefined {
		return this.tryGetRuleContext(0, LinkcommandContext);
	}
	public lockcommand(): LockcommandContext | undefined {
		return this.tryGetRuleContext(0, LockcommandContext);
	}
	public namecommand(): NamecommandContext | undefined {
		return this.tryGetRuleContext(0, NamecommandContext);
	}
	public newpassswordcommand(): NewpassswordcommandContext | undefined {
		return this.tryGetRuleContext(0, NewpassswordcommandContext);
	}
	public ofailcommand(): OfailcommandContext | undefined {
		return this.tryGetRuleContext(0, OfailcommandContext);
	}
	public opencommand(): OpencommandContext | undefined {
		return this.tryGetRuleContext(0, OpencommandContext);
	}
	public osuccesscommand(): OsuccesscommandContext | undefined {
		return this.tryGetRuleContext(0, OsuccesscommandContext);
	}
	public passwordcommand(): PasswordcommandContext | undefined {
		return this.tryGetRuleContext(0, PasswordcommandContext);
	}
	public pcreatecommand(): PcreatecommandContext | undefined {
		return this.tryGetRuleContext(0, PcreatecommandContext);
	}
	public setcommand(): SetcommandContext | undefined {
		return this.tryGetRuleContext(0, SetcommandContext);
	}
	public shutdowncommand(): ShutdowncommandContext | undefined {
		return this.tryGetRuleContext(0, ShutdowncommandContext);
	}
	public statscommand(): StatscommandContext | undefined {
		return this.tryGetRuleContext(0, StatscommandContext);
	}
	public successcommand(): SuccesscommandContext | undefined {
		return this.tryGetRuleContext(0, SuccesscommandContext);
	}
	public teleportcommand(): TeleportcommandContext | undefined {
		return this.tryGetRuleContext(0, TeleportcommandContext);
	}
	public toadcommand(): ToadcommandContext | undefined {
		return this.tryGetRuleContext(0, ToadcommandContext);
	}
	public unlinkcommand(): UnlinkcommandContext | undefined {
		return this.tryGetRuleContext(0, UnlinkcommandContext);
	}
	public unlockcommand(): UnlockcommandContext | undefined {
		return this.tryGetRuleContext(0, UnlockcommandContext);
	}
	public wallcommand(): WallcommandContext | undefined {
		return this.tryGetRuleContext(0, WallcommandContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tinymudParser.RULE_command; }
	// @Override
	public enterRule(listener: tinymudListener): void {
		if (listener.enterCommand) {
			listener.enterCommand(this);
		}
	}
	// @Override
	public exitRule(listener: tinymudListener): void {
		if (listener.exitCommand) {
			listener.exitCommand(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tinymudVisitor<Result>): Result {
		if (visitor.visitCommand) {
			return visitor.visitCommand(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BootcommandContext extends ParserRuleContext {
	public player(): PlayerContext {
		return this.getRuleContext(0, PlayerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tinymudParser.RULE_bootcommand; }
	// @Override
	public enterRule(listener: tinymudListener): void {
		if (listener.enterBootcommand) {
			listener.enterBootcommand(this);
		}
	}
	// @Override
	public exitRule(listener: tinymudListener): void {
		if (listener.exitBootcommand) {
			listener.exitBootcommand(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tinymudVisitor<Result>): Result {
		if (visitor.visitBootcommand) {
			return visitor.visitBootcommand(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ChowncommandContext extends ParserRuleContext {
	public object(): ObjectContext {
		return this.getRuleContext(0, ObjectContext);
	}
	public player(): PlayerContext {
		return this.getRuleContext(0, PlayerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tinymudParser.RULE_chowncommand; }
	// @Override
	public enterRule(listener: tinymudListener): void {
		if (listener.enterChowncommand) {
			listener.enterChowncommand(this);
		}
	}
	// @Override
	public exitRule(listener: tinymudListener): void {
		if (listener.exitChowncommand) {
			listener.exitChowncommand(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tinymudVisitor<Result>): Result {
		if (visitor.visitChowncommand) {
			return visitor.visitChowncommand(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CreatecommandContext extends ParserRuleContext {
	public name(): NameContext {
		return this.getRuleContext(0, NameContext);
	}
	public cost(): CostContext | undefined {
		return this.tryGetRuleContext(0, CostContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tinymudParser.RULE_createcommand; }
	// @Override
	public enterRule(listener: tinymudListener): void {
		if (listener.enterCreatecommand) {
			listener.enterCreatecommand(this);
		}
	}
	// @Override
	public exitRule(listener: tinymudListener): void {
		if (listener.exitCreatecommand) {
			listener.exitCreatecommand(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tinymudVisitor<Result>): Result {
		if (visitor.visitCreatecommand) {
			return visitor.visitCreatecommand(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DescribecommandContext extends ParserRuleContext {
	public object(): ObjectContext {
		return this.getRuleContext(0, ObjectContext);
	}
	public description(): DescriptionContext | undefined {
		return this.tryGetRuleContext(0, DescriptionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tinymudParser.RULE_describecommand; }
	// @Override
	public enterRule(listener: tinymudListener): void {
		if (listener.enterDescribecommand) {
			listener.enterDescribecommand(this);
		}
	}
	// @Override
	public exitRule(listener: tinymudListener): void {
		if (listener.exitDescribecommand) {
			listener.exitDescribecommand(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tinymudVisitor<Result>): Result {
		if (visitor.visitDescribecommand) {
			return visitor.visitDescribecommand(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DigcommandContext extends ParserRuleContext {
	public name(): NameContext {
		return this.getRuleContext(0, NameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tinymudParser.RULE_digcommand; }
	// @Override
	public enterRule(listener: tinymudListener): void {
		if (listener.enterDigcommand) {
			listener.enterDigcommand(this);
		}
	}
	// @Override
	public exitRule(listener: tinymudListener): void {
		if (listener.exitDigcommand) {
			listener.exitDigcommand(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tinymudVisitor<Result>): Result {
		if (visitor.visitDigcommand) {
			return visitor.visitDigcommand(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DumpcommandContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tinymudParser.RULE_dumpcommand; }
	// @Override
	public enterRule(listener: tinymudListener): void {
		if (listener.enterDumpcommand) {
			listener.enterDumpcommand(this);
		}
	}
	// @Override
	public exitRule(listener: tinymudListener): void {
		if (listener.exitDumpcommand) {
			listener.exitDumpcommand(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tinymudVisitor<Result>): Result {
		if (visitor.visitDumpcommand) {
			return visitor.visitDumpcommand(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FailcommandContext extends ParserRuleContext {
	public name(): NameContext {
		return this.getRuleContext(0, NameContext);
	}
	public description(): DescriptionContext | undefined {
		return this.tryGetRuleContext(0, DescriptionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tinymudParser.RULE_failcommand; }
	// @Override
	public enterRule(listener: tinymudListener): void {
		if (listener.enterFailcommand) {
			listener.enterFailcommand(this);
		}
	}
	// @Override
	public exitRule(listener: tinymudListener): void {
		if (listener.exitFailcommand) {
			listener.exitFailcommand(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tinymudVisitor<Result>): Result {
		if (visitor.visitFailcommand) {
			return visitor.visitFailcommand(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FindcommandContext extends ParserRuleContext {
	public name(): NameContext | undefined {
		return this.tryGetRuleContext(0, NameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tinymudParser.RULE_findcommand; }
	// @Override
	public enterRule(listener: tinymudListener): void {
		if (listener.enterFindcommand) {
			listener.enterFindcommand(this);
		}
	}
	// @Override
	public exitRule(listener: tinymudListener): void {
		if (listener.exitFindcommand) {
			listener.exitFindcommand(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tinymudVisitor<Result>): Result {
		if (visitor.visitFindcommand) {
			return visitor.visitFindcommand(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForcecommandContext extends ParserRuleContext {
	public player(): PlayerContext {
		return this.getRuleContext(0, PlayerContext);
	}
	public command(): CommandContext {
		return this.getRuleContext(0, CommandContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tinymudParser.RULE_forcecommand; }
	// @Override
	public enterRule(listener: tinymudListener): void {
		if (listener.enterForcecommand) {
			listener.enterForcecommand(this);
		}
	}
	// @Override
	public exitRule(listener: tinymudListener): void {
		if (listener.exitForcecommand) {
			listener.exitForcecommand(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tinymudVisitor<Result>): Result {
		if (visitor.visitForcecommand) {
			return visitor.visitForcecommand(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LinkcommandContext extends ParserRuleContext {
	public object(): ObjectContext {
		return this.getRuleContext(0, ObjectContext);
	}
	public number(): NumberContext | undefined {
		return this.tryGetRuleContext(0, NumberContext);
	}
	public dir(): DirContext | undefined {
		return this.tryGetRuleContext(0, DirContext);
	}
	public room(): RoomContext | undefined {
		return this.tryGetRuleContext(0, RoomContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tinymudParser.RULE_linkcommand; }
	// @Override
	public enterRule(listener: tinymudListener): void {
		if (listener.enterLinkcommand) {
			listener.enterLinkcommand(this);
		}
	}
	// @Override
	public exitRule(listener: tinymudListener): void {
		if (listener.exitLinkcommand) {
			listener.exitLinkcommand(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tinymudVisitor<Result>): Result {
		if (visitor.visitLinkcommand) {
			return visitor.visitLinkcommand(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LockcommandContext extends ParserRuleContext {
	public object(): ObjectContext {
		return this.getRuleContext(0, ObjectContext);
	}
	public key(): KeyContext {
		return this.getRuleContext(0, KeyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tinymudParser.RULE_lockcommand; }
	// @Override
	public enterRule(listener: tinymudListener): void {
		if (listener.enterLockcommand) {
			listener.enterLockcommand(this);
		}
	}
	// @Override
	public exitRule(listener: tinymudListener): void {
		if (listener.exitLockcommand) {
			listener.exitLockcommand(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tinymudVisitor<Result>): Result {
		if (visitor.visitLockcommand) {
			return visitor.visitLockcommand(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NamecommandContext extends ParserRuleContext {
	public object(): ObjectContext {
		return this.getRuleContext(0, ObjectContext);
	}
	public name(): NameContext {
		return this.getRuleContext(0, NameContext);
	}
	public password(): PasswordContext | undefined {
		return this.tryGetRuleContext(0, PasswordContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tinymudParser.RULE_namecommand; }
	// @Override
	public enterRule(listener: tinymudListener): void {
		if (listener.enterNamecommand) {
			listener.enterNamecommand(this);
		}
	}
	// @Override
	public exitRule(listener: tinymudListener): void {
		if (listener.exitNamecommand) {
			listener.exitNamecommand(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tinymudVisitor<Result>): Result {
		if (visitor.visitNamecommand) {
			return visitor.visitNamecommand(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NewpassswordcommandContext extends ParserRuleContext {
	public player(): PlayerContext {
		return this.getRuleContext(0, PlayerContext);
	}
	public password(): PasswordContext | undefined {
		return this.tryGetRuleContext(0, PasswordContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tinymudParser.RULE_newpassswordcommand; }
	// @Override
	public enterRule(listener: tinymudListener): void {
		if (listener.enterNewpassswordcommand) {
			listener.enterNewpassswordcommand(this);
		}
	}
	// @Override
	public exitRule(listener: tinymudListener): void {
		if (listener.exitNewpassswordcommand) {
			listener.exitNewpassswordcommand(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tinymudVisitor<Result>): Result {
		if (visitor.visitNewpassswordcommand) {
			return visitor.visitNewpassswordcommand(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OfailcommandContext extends ParserRuleContext {
	public object(): ObjectContext {
		return this.getRuleContext(0, ObjectContext);
	}
	public message(): MessageContext | undefined {
		return this.tryGetRuleContext(0, MessageContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tinymudParser.RULE_ofailcommand; }
	// @Override
	public enterRule(listener: tinymudListener): void {
		if (listener.enterOfailcommand) {
			listener.enterOfailcommand(this);
		}
	}
	// @Override
	public exitRule(listener: tinymudListener): void {
		if (listener.exitOfailcommand) {
			listener.exitOfailcommand(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tinymudVisitor<Result>): Result {
		if (visitor.visitOfailcommand) {
			return visitor.visitOfailcommand(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OpencommandContext extends ParserRuleContext {
	public dir(): DirContext[];
	public dir(i: number): DirContext;
	public dir(i?: number): DirContext | DirContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DirContext);
		} else {
			return this.getRuleContext(i, DirContext);
		}
	}
	public number(): NumberContext | undefined {
		return this.tryGetRuleContext(0, NumberContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tinymudParser.RULE_opencommand; }
	// @Override
	public enterRule(listener: tinymudListener): void {
		if (listener.enterOpencommand) {
			listener.enterOpencommand(this);
		}
	}
	// @Override
	public exitRule(listener: tinymudListener): void {
		if (listener.exitOpencommand) {
			listener.exitOpencommand(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tinymudVisitor<Result>): Result {
		if (visitor.visitOpencommand) {
			return visitor.visitOpencommand(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OsuccesscommandContext extends ParserRuleContext {
	public object(): ObjectContext {
		return this.getRuleContext(0, ObjectContext);
	}
	public message(): MessageContext | undefined {
		return this.tryGetRuleContext(0, MessageContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tinymudParser.RULE_osuccesscommand; }
	// @Override
	public enterRule(listener: tinymudListener): void {
		if (listener.enterOsuccesscommand) {
			listener.enterOsuccesscommand(this);
		}
	}
	// @Override
	public exitRule(listener: tinymudListener): void {
		if (listener.exitOsuccesscommand) {
			listener.exitOsuccesscommand(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tinymudVisitor<Result>): Result {
		if (visitor.visitOsuccesscommand) {
			return visitor.visitOsuccesscommand(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PasswordcommandContext extends ParserRuleContext {
	public password(): PasswordContext[];
	public password(i: number): PasswordContext;
	public password(i?: number): PasswordContext | PasswordContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PasswordContext);
		} else {
			return this.getRuleContext(i, PasswordContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tinymudParser.RULE_passwordcommand; }
	// @Override
	public enterRule(listener: tinymudListener): void {
		if (listener.enterPasswordcommand) {
			listener.enterPasswordcommand(this);
		}
	}
	// @Override
	public exitRule(listener: tinymudListener): void {
		if (listener.exitPasswordcommand) {
			listener.exitPasswordcommand(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tinymudVisitor<Result>): Result {
		if (visitor.visitPasswordcommand) {
			return visitor.visitPasswordcommand(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PcreatecommandContext extends ParserRuleContext {
	public name(): NameContext {
		return this.getRuleContext(0, NameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tinymudParser.RULE_pcreatecommand; }
	// @Override
	public enterRule(listener: tinymudListener): void {
		if (listener.enterPcreatecommand) {
			listener.enterPcreatecommand(this);
		}
	}
	// @Override
	public exitRule(listener: tinymudListener): void {
		if (listener.exitPcreatecommand) {
			listener.exitPcreatecommand(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tinymudVisitor<Result>): Result {
		if (visitor.visitPcreatecommand) {
			return visitor.visitPcreatecommand(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SetcommandContext extends ParserRuleContext {
	public object(): ObjectContext {
		return this.getRuleContext(0, ObjectContext);
	}
	public flag(): FlagContext {
		return this.getRuleContext(0, FlagContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tinymudParser.RULE_setcommand; }
	// @Override
	public enterRule(listener: tinymudListener): void {
		if (listener.enterSetcommand) {
			listener.enterSetcommand(this);
		}
	}
	// @Override
	public exitRule(listener: tinymudListener): void {
		if (listener.exitSetcommand) {
			listener.exitSetcommand(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tinymudVisitor<Result>): Result {
		if (visitor.visitSetcommand) {
			return visitor.visitSetcommand(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ShutdowncommandContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tinymudParser.RULE_shutdowncommand; }
	// @Override
	public enterRule(listener: tinymudListener): void {
		if (listener.enterShutdowncommand) {
			listener.enterShutdowncommand(this);
		}
	}
	// @Override
	public exitRule(listener: tinymudListener): void {
		if (listener.exitShutdowncommand) {
			listener.exitShutdowncommand(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tinymudVisitor<Result>): Result {
		if (visitor.visitShutdowncommand) {
			return visitor.visitShutdowncommand(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatscommandContext extends ParserRuleContext {
	public player(): PlayerContext {
		return this.getRuleContext(0, PlayerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tinymudParser.RULE_statscommand; }
	// @Override
	public enterRule(listener: tinymudListener): void {
		if (listener.enterStatscommand) {
			listener.enterStatscommand(this);
		}
	}
	// @Override
	public exitRule(listener: tinymudListener): void {
		if (listener.exitStatscommand) {
			listener.exitStatscommand(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tinymudVisitor<Result>): Result {
		if (visitor.visitStatscommand) {
			return visitor.visitStatscommand(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SuccesscommandContext extends ParserRuleContext {
	public object(): ObjectContext {
		return this.getRuleContext(0, ObjectContext);
	}
	public message(): MessageContext | undefined {
		return this.tryGetRuleContext(0, MessageContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tinymudParser.RULE_successcommand; }
	// @Override
	public enterRule(listener: tinymudListener): void {
		if (listener.enterSuccesscommand) {
			listener.enterSuccesscommand(this);
		}
	}
	// @Override
	public exitRule(listener: tinymudListener): void {
		if (listener.exitSuccesscommand) {
			listener.exitSuccesscommand(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tinymudVisitor<Result>): Result {
		if (visitor.visitSuccesscommand) {
			return visitor.visitSuccesscommand(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TeleportcommandContext extends ParserRuleContext {
	public room(): RoomContext {
		return this.getRuleContext(0, RoomContext);
	}
	public object(): ObjectContext | undefined {
		return this.tryGetRuleContext(0, ObjectContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tinymudParser.RULE_teleportcommand; }
	// @Override
	public enterRule(listener: tinymudListener): void {
		if (listener.enterTeleportcommand) {
			listener.enterTeleportcommand(this);
		}
	}
	// @Override
	public exitRule(listener: tinymudListener): void {
		if (listener.exitTeleportcommand) {
			listener.exitTeleportcommand(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tinymudVisitor<Result>): Result {
		if (visitor.visitTeleportcommand) {
			return visitor.visitTeleportcommand(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ToadcommandContext extends ParserRuleContext {
	public player(): PlayerContext {
		return this.getRuleContext(0, PlayerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tinymudParser.RULE_toadcommand; }
	// @Override
	public enterRule(listener: tinymudListener): void {
		if (listener.enterToadcommand) {
			listener.enterToadcommand(this);
		}
	}
	// @Override
	public exitRule(listener: tinymudListener): void {
		if (listener.exitToadcommand) {
			listener.exitToadcommand(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tinymudVisitor<Result>): Result {
		if (visitor.visitToadcommand) {
			return visitor.visitToadcommand(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnlinkcommandContext extends ParserRuleContext {
	public dir(): DirContext {
		return this.getRuleContext(0, DirContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tinymudParser.RULE_unlinkcommand; }
	// @Override
	public enterRule(listener: tinymudListener): void {
		if (listener.enterUnlinkcommand) {
			listener.enterUnlinkcommand(this);
		}
	}
	// @Override
	public exitRule(listener: tinymudListener): void {
		if (listener.exitUnlinkcommand) {
			listener.exitUnlinkcommand(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tinymudVisitor<Result>): Result {
		if (visitor.visitUnlinkcommand) {
			return visitor.visitUnlinkcommand(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnlockcommandContext extends ParserRuleContext {
	public object(): ObjectContext {
		return this.getRuleContext(0, ObjectContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tinymudParser.RULE_unlockcommand; }
	// @Override
	public enterRule(listener: tinymudListener): void {
		if (listener.enterUnlockcommand) {
			listener.enterUnlockcommand(this);
		}
	}
	// @Override
	public exitRule(listener: tinymudListener): void {
		if (listener.exitUnlockcommand) {
			listener.exitUnlockcommand(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tinymudVisitor<Result>): Result {
		if (visitor.visitUnlockcommand) {
			return visitor.visitUnlockcommand(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WallcommandContext extends ParserRuleContext {
	public message(): MessageContext {
		return this.getRuleContext(0, MessageContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tinymudParser.RULE_wallcommand; }
	// @Override
	public enterRule(listener: tinymudListener): void {
		if (listener.enterWallcommand) {
			listener.enterWallcommand(this);
		}
	}
	// @Override
	public exitRule(listener: tinymudListener): void {
		if (listener.exitWallcommand) {
			listener.exitWallcommand(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tinymudVisitor<Result>): Result {
		if (visitor.visitWallcommand) {
			return visitor.visitWallcommand(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ActionContext extends ParserRuleContext {
	public dropaction(): DropactionContext | undefined {
		return this.tryGetRuleContext(0, DropactionContext);
	}
	public examineaction(): ExamineactionContext | undefined {
		return this.tryGetRuleContext(0, ExamineactionContext);
	}
	public getaction(): GetactionContext | undefined {
		return this.tryGetRuleContext(0, GetactionContext);
	}
	public giveaction(): GiveactionContext | undefined {
		return this.tryGetRuleContext(0, GiveactionContext);
	}
	public gotoaction(): GotoactionContext | undefined {
		return this.tryGetRuleContext(0, GotoactionContext);
	}
	public gripeaction(): GripeactionContext | undefined {
		return this.tryGetRuleContext(0, GripeactionContext);
	}
	public helpaction(): HelpactionContext | undefined {
		return this.tryGetRuleContext(0, HelpactionContext);
	}
	public inventoryaction(): InventoryactionContext | undefined {
		return this.tryGetRuleContext(0, InventoryactionContext);
	}
	public killaction(): KillactionContext | undefined {
		return this.tryGetRuleContext(0, KillactionContext);
	}
	public lookaction(): LookactionContext | undefined {
		return this.tryGetRuleContext(0, LookactionContext);
	}
	public newsaction(): NewsactionContext | undefined {
		return this.tryGetRuleContext(0, NewsactionContext);
	}
	public pageaction(): PageactionContext | undefined {
		return this.tryGetRuleContext(0, PageactionContext);
	}
	public quitaction(): QuitactionContext | undefined {
		return this.tryGetRuleContext(0, QuitactionContext);
	}
	public robaction(): RobactionContext | undefined {
		return this.tryGetRuleContext(0, RobactionContext);
	}
	public sayaction(): SayactionContext | undefined {
		return this.tryGetRuleContext(0, SayactionContext);
	}
	public scoreaction(): ScoreactionContext | undefined {
		return this.tryGetRuleContext(0, ScoreactionContext);
	}
	public whisperaction(): WhisperactionContext | undefined {
		return this.tryGetRuleContext(0, WhisperactionContext);
	}
	public whoaction(): WhoactionContext | undefined {
		return this.tryGetRuleContext(0, WhoactionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tinymudParser.RULE_action; }
	// @Override
	public enterRule(listener: tinymudListener): void {
		if (listener.enterAction) {
			listener.enterAction(this);
		}
	}
	// @Override
	public exitRule(listener: tinymudListener): void {
		if (listener.exitAction) {
			listener.exitAction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tinymudVisitor<Result>): Result {
		if (visitor.visitAction) {
			return visitor.visitAction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DropactionContext extends ParserRuleContext {
	public object(): ObjectContext {
		return this.getRuleContext(0, ObjectContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tinymudParser.RULE_dropaction; }
	// @Override
	public enterRule(listener: tinymudListener): void {
		if (listener.enterDropaction) {
			listener.enterDropaction(this);
		}
	}
	// @Override
	public exitRule(listener: tinymudListener): void {
		if (listener.exitDropaction) {
			listener.exitDropaction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tinymudVisitor<Result>): Result {
		if (visitor.visitDropaction) {
			return visitor.visitDropaction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExamineactionContext extends ParserRuleContext {
	public object(): ObjectContext {
		return this.getRuleContext(0, ObjectContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tinymudParser.RULE_examineaction; }
	// @Override
	public enterRule(listener: tinymudListener): void {
		if (listener.enterExamineaction) {
			listener.enterExamineaction(this);
		}
	}
	// @Override
	public exitRule(listener: tinymudListener): void {
		if (listener.exitExamineaction) {
			listener.exitExamineaction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tinymudVisitor<Result>): Result {
		if (visitor.visitExamineaction) {
			return visitor.visitExamineaction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GetactionContext extends ParserRuleContext {
	public object(): ObjectContext {
		return this.getRuleContext(0, ObjectContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tinymudParser.RULE_getaction; }
	// @Override
	public enterRule(listener: tinymudListener): void {
		if (listener.enterGetaction) {
			listener.enterGetaction(this);
		}
	}
	// @Override
	public exitRule(listener: tinymudListener): void {
		if (listener.exitGetaction) {
			listener.exitGetaction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tinymudVisitor<Result>): Result {
		if (visitor.visitGetaction) {
			return visitor.visitGetaction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GiveactionContext extends ParserRuleContext {
	public player(): PlayerContext {
		return this.getRuleContext(0, PlayerContext);
	}
	public pennies(): PenniesContext {
		return this.getRuleContext(0, PenniesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tinymudParser.RULE_giveaction; }
	// @Override
	public enterRule(listener: tinymudListener): void {
		if (listener.enterGiveaction) {
			listener.enterGiveaction(this);
		}
	}
	// @Override
	public exitRule(listener: tinymudListener): void {
		if (listener.exitGiveaction) {
			listener.exitGiveaction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tinymudVisitor<Result>): Result {
		if (visitor.visitGiveaction) {
			return visitor.visitGiveaction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GotoactionContext extends ParserRuleContext {
	public direction(): DirectionContext {
		return this.getRuleContext(0, DirectionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tinymudParser.RULE_gotoaction; }
	// @Override
	public enterRule(listener: tinymudListener): void {
		if (listener.enterGotoaction) {
			listener.enterGotoaction(this);
		}
	}
	// @Override
	public exitRule(listener: tinymudListener): void {
		if (listener.exitGotoaction) {
			listener.exitGotoaction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tinymudVisitor<Result>): Result {
		if (visitor.visitGotoaction) {
			return visitor.visitGotoaction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GripeactionContext extends ParserRuleContext {
	public message(): MessageContext {
		return this.getRuleContext(0, MessageContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tinymudParser.RULE_gripeaction; }
	// @Override
	public enterRule(listener: tinymudListener): void {
		if (listener.enterGripeaction) {
			listener.enterGripeaction(this);
		}
	}
	// @Override
	public exitRule(listener: tinymudListener): void {
		if (listener.exitGripeaction) {
			listener.exitGripeaction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tinymudVisitor<Result>): Result {
		if (visitor.visitGripeaction) {
			return visitor.visitGripeaction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class HelpactionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tinymudParser.RULE_helpaction; }
	// @Override
	public enterRule(listener: tinymudListener): void {
		if (listener.enterHelpaction) {
			listener.enterHelpaction(this);
		}
	}
	// @Override
	public exitRule(listener: tinymudListener): void {
		if (listener.exitHelpaction) {
			listener.exitHelpaction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tinymudVisitor<Result>): Result {
		if (visitor.visitHelpaction) {
			return visitor.visitHelpaction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InventoryactionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tinymudParser.RULE_inventoryaction; }
	// @Override
	public enterRule(listener: tinymudListener): void {
		if (listener.enterInventoryaction) {
			listener.enterInventoryaction(this);
		}
	}
	// @Override
	public exitRule(listener: tinymudListener): void {
		if (listener.exitInventoryaction) {
			listener.exitInventoryaction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tinymudVisitor<Result>): Result {
		if (visitor.visitInventoryaction) {
			return visitor.visitInventoryaction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class KillactionContext extends ParserRuleContext {
	public player(): PlayerContext {
		return this.getRuleContext(0, PlayerContext);
	}
	public cost(): CostContext | undefined {
		return this.tryGetRuleContext(0, CostContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tinymudParser.RULE_killaction; }
	// @Override
	public enterRule(listener: tinymudListener): void {
		if (listener.enterKillaction) {
			listener.enterKillaction(this);
		}
	}
	// @Override
	public exitRule(listener: tinymudListener): void {
		if (listener.exitKillaction) {
			listener.exitKillaction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tinymudVisitor<Result>): Result {
		if (visitor.visitKillaction) {
			return visitor.visitKillaction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LookactionContext extends ParserRuleContext {
	public object(): ObjectContext {
		return this.getRuleContext(0, ObjectContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tinymudParser.RULE_lookaction; }
	// @Override
	public enterRule(listener: tinymudListener): void {
		if (listener.enterLookaction) {
			listener.enterLookaction(this);
		}
	}
	// @Override
	public exitRule(listener: tinymudListener): void {
		if (listener.exitLookaction) {
			listener.exitLookaction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tinymudVisitor<Result>): Result {
		if (visitor.visitLookaction) {
			return visitor.visitLookaction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NewsactionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tinymudParser.RULE_newsaction; }
	// @Override
	public enterRule(listener: tinymudListener): void {
		if (listener.enterNewsaction) {
			listener.enterNewsaction(this);
		}
	}
	// @Override
	public exitRule(listener: tinymudListener): void {
		if (listener.exitNewsaction) {
			listener.exitNewsaction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tinymudVisitor<Result>): Result {
		if (visitor.visitNewsaction) {
			return visitor.visitNewsaction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PageactionContext extends ParserRuleContext {
	public player(): PlayerContext {
		return this.getRuleContext(0, PlayerContext);
	}
	public message(): MessageContext | undefined {
		return this.tryGetRuleContext(0, MessageContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tinymudParser.RULE_pageaction; }
	// @Override
	public enterRule(listener: tinymudListener): void {
		if (listener.enterPageaction) {
			listener.enterPageaction(this);
		}
	}
	// @Override
	public exitRule(listener: tinymudListener): void {
		if (listener.exitPageaction) {
			listener.exitPageaction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tinymudVisitor<Result>): Result {
		if (visitor.visitPageaction) {
			return visitor.visitPageaction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QuitactionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tinymudParser.RULE_quitaction; }
	// @Override
	public enterRule(listener: tinymudListener): void {
		if (listener.enterQuitaction) {
			listener.enterQuitaction(this);
		}
	}
	// @Override
	public exitRule(listener: tinymudListener): void {
		if (listener.exitQuitaction) {
			listener.exitQuitaction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tinymudVisitor<Result>): Result {
		if (visitor.visitQuitaction) {
			return visitor.visitQuitaction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RobactionContext extends ParserRuleContext {
	public player(): PlayerContext {
		return this.getRuleContext(0, PlayerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tinymudParser.RULE_robaction; }
	// @Override
	public enterRule(listener: tinymudListener): void {
		if (listener.enterRobaction) {
			listener.enterRobaction(this);
		}
	}
	// @Override
	public exitRule(listener: tinymudListener): void {
		if (listener.exitRobaction) {
			listener.exitRobaction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tinymudVisitor<Result>): Result {
		if (visitor.visitRobaction) {
			return visitor.visitRobaction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SayactionContext extends ParserRuleContext {
	public message(): MessageContext {
		return this.getRuleContext(0, MessageContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tinymudParser.RULE_sayaction; }
	// @Override
	public enterRule(listener: tinymudListener): void {
		if (listener.enterSayaction) {
			listener.enterSayaction(this);
		}
	}
	// @Override
	public exitRule(listener: tinymudListener): void {
		if (listener.exitSayaction) {
			listener.exitSayaction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tinymudVisitor<Result>): Result {
		if (visitor.visitSayaction) {
			return visitor.visitSayaction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ScoreactionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tinymudParser.RULE_scoreaction; }
	// @Override
	public enterRule(listener: tinymudListener): void {
		if (listener.enterScoreaction) {
			listener.enterScoreaction(this);
		}
	}
	// @Override
	public exitRule(listener: tinymudListener): void {
		if (listener.exitScoreaction) {
			listener.exitScoreaction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tinymudVisitor<Result>): Result {
		if (visitor.visitScoreaction) {
			return visitor.visitScoreaction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WhisperactionContext extends ParserRuleContext {
	public player(): PlayerContext {
		return this.getRuleContext(0, PlayerContext);
	}
	public message(): MessageContext {
		return this.getRuleContext(0, MessageContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tinymudParser.RULE_whisperaction; }
	// @Override
	public enterRule(listener: tinymudListener): void {
		if (listener.enterWhisperaction) {
			listener.enterWhisperaction(this);
		}
	}
	// @Override
	public exitRule(listener: tinymudListener): void {
		if (listener.exitWhisperaction) {
			listener.exitWhisperaction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tinymudVisitor<Result>): Result {
		if (visitor.visitWhisperaction) {
			return visitor.visitWhisperaction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WhoactionContext extends ParserRuleContext {
	public player(): PlayerContext | undefined {
		return this.tryGetRuleContext(0, PlayerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tinymudParser.RULE_whoaction; }
	// @Override
	public enterRule(listener: tinymudListener): void {
		if (listener.enterWhoaction) {
			listener.enterWhoaction(this);
		}
	}
	// @Override
	public exitRule(listener: tinymudListener): void {
		if (listener.exitWhoaction) {
			listener.exitWhoaction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tinymudVisitor<Result>): Result {
		if (visitor.visitWhoaction) {
			return visitor.visitWhoaction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ObjectContext extends ParserRuleContext {
	public STRING(): TerminalNode { return this.getToken(tinymudParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tinymudParser.RULE_object; }
	// @Override
	public enterRule(listener: tinymudListener): void {
		if (listener.enterObject) {
			listener.enterObject(this);
		}
	}
	// @Override
	public exitRule(listener: tinymudListener): void {
		if (listener.exitObject) {
			listener.exitObject(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tinymudVisitor<Result>): Result {
		if (visitor.visitObject) {
			return visitor.visitObject(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PlayerContext extends ParserRuleContext {
	public STRING(): TerminalNode { return this.getToken(tinymudParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tinymudParser.RULE_player; }
	// @Override
	public enterRule(listener: tinymudListener): void {
		if (listener.enterPlayer) {
			listener.enterPlayer(this);
		}
	}
	// @Override
	public exitRule(listener: tinymudListener): void {
		if (listener.exitPlayer) {
			listener.exitPlayer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tinymudVisitor<Result>): Result {
		if (visitor.visitPlayer) {
			return visitor.visitPlayer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NameContext extends ParserRuleContext {
	public STRING(): TerminalNode { return this.getToken(tinymudParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tinymudParser.RULE_name; }
	// @Override
	public enterRule(listener: tinymudListener): void {
		if (listener.enterName) {
			listener.enterName(this);
		}
	}
	// @Override
	public exitRule(listener: tinymudListener): void {
		if (listener.exitName) {
			listener.exitName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tinymudVisitor<Result>): Result {
		if (visitor.visitName) {
			return visitor.visitName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DescriptionContext extends ParserRuleContext {
	public STRING(): TerminalNode { return this.getToken(tinymudParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tinymudParser.RULE_description; }
	// @Override
	public enterRule(listener: tinymudListener): void {
		if (listener.enterDescription) {
			listener.enterDescription(this);
		}
	}
	// @Override
	public exitRule(listener: tinymudListener): void {
		if (listener.exitDescription) {
			listener.exitDescription(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tinymudVisitor<Result>): Result {
		if (visitor.visitDescription) {
			return visitor.visitDescription(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CostContext extends ParserRuleContext {
	public NUMBER(): TerminalNode { return this.getToken(tinymudParser.NUMBER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tinymudParser.RULE_cost; }
	// @Override
	public enterRule(listener: tinymudListener): void {
		if (listener.enterCost) {
			listener.enterCost(this);
		}
	}
	// @Override
	public exitRule(listener: tinymudListener): void {
		if (listener.exitCost) {
			listener.exitCost(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tinymudVisitor<Result>): Result {
		if (visitor.visitCost) {
			return visitor.visitCost(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class KeyContext extends ParserRuleContext {
	public STRING(): TerminalNode { return this.getToken(tinymudParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tinymudParser.RULE_key; }
	// @Override
	public enterRule(listener: tinymudListener): void {
		if (listener.enterKey) {
			listener.enterKey(this);
		}
	}
	// @Override
	public exitRule(listener: tinymudListener): void {
		if (listener.exitKey) {
			listener.exitKey(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tinymudVisitor<Result>): Result {
		if (visitor.visitKey) {
			return visitor.visitKey(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PasswordContext extends ParserRuleContext {
	public STRING(): TerminalNode { return this.getToken(tinymudParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tinymudParser.RULE_password; }
	// @Override
	public enterRule(listener: tinymudListener): void {
		if (listener.enterPassword) {
			listener.enterPassword(this);
		}
	}
	// @Override
	public exitRule(listener: tinymudListener): void {
		if (listener.exitPassword) {
			listener.exitPassword(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tinymudVisitor<Result>): Result {
		if (visitor.visitPassword) {
			return visitor.visitPassword(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MessageContext extends ParserRuleContext {
	public STRING(): TerminalNode { return this.getToken(tinymudParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tinymudParser.RULE_message; }
	// @Override
	public enterRule(listener: tinymudListener): void {
		if (listener.enterMessage) {
			listener.enterMessage(this);
		}
	}
	// @Override
	public exitRule(listener: tinymudListener): void {
		if (listener.exitMessage) {
			listener.exitMessage(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tinymudVisitor<Result>): Result {
		if (visitor.visitMessage) {
			return visitor.visitMessage(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DirContext extends ParserRuleContext {
	public STRING(): TerminalNode { return this.getToken(tinymudParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tinymudParser.RULE_dir; }
	// @Override
	public enterRule(listener: tinymudListener): void {
		if (listener.enterDir) {
			listener.enterDir(this);
		}
	}
	// @Override
	public exitRule(listener: tinymudListener): void {
		if (listener.exitDir) {
			listener.exitDir(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tinymudVisitor<Result>): Result {
		if (visitor.visitDir) {
			return visitor.visitDir(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NumberContext extends ParserRuleContext {
	public NUMBER(): TerminalNode { return this.getToken(tinymudParser.NUMBER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tinymudParser.RULE_number; }
	// @Override
	public enterRule(listener: tinymudListener): void {
		if (listener.enterNumber) {
			listener.enterNumber(this);
		}
	}
	// @Override
	public exitRule(listener: tinymudListener): void {
		if (listener.exitNumber) {
			listener.exitNumber(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tinymudVisitor<Result>): Result {
		if (visitor.visitNumber) {
			return visitor.visitNumber(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RoomContext extends ParserRuleContext {
	public STRING(): TerminalNode { return this.getToken(tinymudParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tinymudParser.RULE_room; }
	// @Override
	public enterRule(listener: tinymudListener): void {
		if (listener.enterRoom) {
			listener.enterRoom(this);
		}
	}
	// @Override
	public exitRule(listener: tinymudListener): void {
		if (listener.exitRoom) {
			listener.exitRoom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tinymudVisitor<Result>): Result {
		if (visitor.visitRoom) {
			return visitor.visitRoom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FlagContext extends ParserRuleContext {
	public NUMBER(): TerminalNode { return this.getToken(tinymudParser.NUMBER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tinymudParser.RULE_flag; }
	// @Override
	public enterRule(listener: tinymudListener): void {
		if (listener.enterFlag) {
			listener.enterFlag(this);
		}
	}
	// @Override
	public exitRule(listener: tinymudListener): void {
		if (listener.exitFlag) {
			listener.exitFlag(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tinymudVisitor<Result>): Result {
		if (visitor.visitFlag) {
			return visitor.visitFlag(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PenniesContext extends ParserRuleContext {
	public NUMBER(): TerminalNode { return this.getToken(tinymudParser.NUMBER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tinymudParser.RULE_pennies; }
	// @Override
	public enterRule(listener: tinymudListener): void {
		if (listener.enterPennies) {
			listener.enterPennies(this);
		}
	}
	// @Override
	public exitRule(listener: tinymudListener): void {
		if (listener.exitPennies) {
			listener.exitPennies(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tinymudVisitor<Result>): Result {
		if (visitor.visitPennies) {
			return visitor.visitPennies(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DirectionContext extends ParserRuleContext {
	public STRING(): TerminalNode { return this.getToken(tinymudParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tinymudParser.RULE_direction; }
	// @Override
	public enterRule(listener: tinymudListener): void {
		if (listener.enterDirection) {
			listener.enterDirection(this);
		}
	}
	// @Override
	public exitRule(listener: tinymudListener): void {
		if (listener.exitDirection) {
			listener.exitDirection(this);
		}
	}
	// @Override
	public accept<Result>(visitor: tinymudVisitor<Result>): Result {
		if (visitor.visitDirection) {
			return visitor.visitDirection(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


