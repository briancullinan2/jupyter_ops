// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/muddb/muddb.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { muddbListener } from "./muddbListener";

export class muddbParser extends Parser {
	public static readonly END = 1;
	public static readonly NUM = 2;
	public static readonly STRING = 3;
	public static readonly EOL = 4;
	public static readonly RULE_db = 0;
	public static readonly RULE_room = 1;
	public static readonly RULE_roomno = 2;
	public static readonly RULE_name = 3;
	public static readonly RULE_description = 4;
	public static readonly RULE_location = 5;
	public static readonly RULE_contents = 6;
	public static readonly RULE_exits = 7;
	public static readonly RULE_next = 8;
	public static readonly RULE_key = 9;
	public static readonly RULE_fail_message = 10;
	public static readonly RULE_succ_message = 11;
	public static readonly RULE_ofail = 12;
	public static readonly RULE_osuccess = 13;
	public static readonly RULE_owner = 14;
	public static readonly RULE_pennies = 15;
	public static readonly RULE_flags = 16;
	public static readonly RULE_password = 17;
	public static readonly RULE_string = 18;
	public static readonly RULE_ref = 19;
	public static readonly RULE_bool = 20;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"db", "room", "roomno", "name", "description", "location", "contents", 
		"exits", "next", "key", "fail_message", "succ_message", "ofail", "osuccess", 
		"owner", "pennies", "flags", "password", "string", "ref", "bool",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'***END OF DUMP***'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "END", "NUM", "STRING", "EOL",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(muddbParser._LITERAL_NAMES, muddbParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return muddbParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "muddb.g4"; }

	// @Override
	public get ruleNames(): string[] { return muddbParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return muddbParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(muddbParser._ATN, this);
	}
	// @RuleVersion(0)
	public db(): DbContext {
		let _localctx: DbContext = new DbContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, muddbParser.RULE_db);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 45;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === muddbParser.STRING) {
				{
				{
				this.state = 42;
				this.room();
				}
				}
				this.state = 47;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 48;
			this.match(muddbParser.END);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 2, muddbParser.RULE_room);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 50;
			this.roomno();
			this.state = 51;
			this.name();
			this.state = 52;
			this.description();
			this.state = 53;
			this.location();
			this.state = 54;
			this.contents();
			this.state = 55;
			this.exits();
			this.state = 56;
			this.next();
			this.state = 57;
			this.key();
			this.state = 58;
			this.fail_message();
			this.state = 59;
			this.succ_message();
			this.state = 60;
			this.ofail();
			this.state = 61;
			this.osuccess();
			this.state = 62;
			this.owner();
			this.state = 63;
			this.pennies();
			this.state = 64;
			this.flags();
			this.state = 65;
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
	public roomno(): RoomnoContext {
		let _localctx: RoomnoContext = new RoomnoContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, muddbParser.RULE_roomno);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 67;
			this.match(muddbParser.STRING);
			this.state = 68;
			this.match(muddbParser.EOL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 6, muddbParser.RULE_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 70;
			this.string();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 8, muddbParser.RULE_description);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 72;
			this.string();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public location(): LocationContext {
		let _localctx: LocationContext = new LocationContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, muddbParser.RULE_location);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 74;
			this.ref();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public contents(): ContentsContext {
		let _localctx: ContentsContext = new ContentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, muddbParser.RULE_contents);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 76;
			this.ref();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public exits(): ExitsContext {
		let _localctx: ExitsContext = new ExitsContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, muddbParser.RULE_exits);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 78;
			this.ref();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public next(): NextContext {
		let _localctx: NextContext = new NextContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, muddbParser.RULE_next);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 80;
			this.ref();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 18, muddbParser.RULE_key);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 82;
			this.bool();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fail_message(): Fail_messageContext {
		let _localctx: Fail_messageContext = new Fail_messageContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, muddbParser.RULE_fail_message);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 84;
			this.string();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public succ_message(): Succ_messageContext {
		let _localctx: Succ_messageContext = new Succ_messageContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, muddbParser.RULE_succ_message);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 86;
			this.string();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ofail(): OfailContext {
		let _localctx: OfailContext = new OfailContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, muddbParser.RULE_ofail);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 88;
			this.string();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public osuccess(): OsuccessContext {
		let _localctx: OsuccessContext = new OsuccessContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, muddbParser.RULE_osuccess);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 90;
			this.string();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public owner(): OwnerContext {
		let _localctx: OwnerContext = new OwnerContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, muddbParser.RULE_owner);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 92;
			this.ref();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 30, muddbParser.RULE_pennies);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 94;
			this.ref();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public flags(): FlagsContext {
		let _localctx: FlagsContext = new FlagsContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, muddbParser.RULE_flags);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 96;
			this.ref();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 34, muddbParser.RULE_password);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 98;
			this.string();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 36, muddbParser.RULE_string);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 101;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === muddbParser.STRING) {
				{
				this.state = 100;
				this.match(muddbParser.STRING);
				}
			}

			this.state = 103;
			this.match(muddbParser.EOL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ref(): RefContext {
		let _localctx: RefContext = new RefContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, muddbParser.RULE_ref);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 106;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === muddbParser.NUM) {
				{
				this.state = 105;
				this.match(muddbParser.NUM);
				}
			}

			this.state = 108;
			this.match(muddbParser.EOL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public bool(): BoolContext {
		let _localctx: BoolContext = new BoolContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, muddbParser.RULE_bool);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 111;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === muddbParser.NUM) {
				{
				this.state = 110;
				this.match(muddbParser.NUM);
				}
			}

			this.state = 113;
			this.match(muddbParser.EOL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x06v\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x03\x02\x07\x02." +
		"\n\x02\f\x02\x0E\x021\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x05\x03" +
		"\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03\t\x03\n\x03" +
		"\n\x03\v\x03\v\x03\f\x03\f\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F" +
		"\x03\x10\x03\x10\x03\x11\x03\x11\x03\x12\x03\x12\x03\x13\x03\x13\x03\x14" +
		"\x05\x14h\n\x14\x03\x14\x03\x14\x03\x15\x05\x15m\n\x15\x03\x15\x03\x15" +
		"\x03\x16\x05\x16r\n\x16\x03\x16\x03\x16\x03\x16\x02\x02\x02\x17\x02\x02" +
		"\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16" +
		"\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02\x02" +
		"\x02\x02d\x02/\x03\x02\x02\x02\x044\x03\x02\x02\x02\x06E\x03\x02\x02\x02" +
		"\bH\x03\x02\x02\x02\nJ\x03\x02\x02\x02\fL\x03\x02\x02\x02\x0EN\x03\x02" +
		"\x02\x02\x10P\x03\x02\x02\x02\x12R\x03\x02\x02\x02\x14T\x03\x02\x02\x02" +
		"\x16V\x03\x02\x02\x02\x18X\x03\x02\x02\x02\x1AZ\x03\x02\x02\x02\x1C\\" +
		"\x03\x02\x02\x02\x1E^\x03\x02\x02\x02 `\x03\x02\x02\x02\"b\x03\x02\x02" +
		"\x02$d\x03\x02\x02\x02&g\x03\x02\x02\x02(l\x03\x02\x02\x02*q\x03\x02\x02" +
		"\x02,.\x05\x04\x03\x02-,\x03\x02\x02\x02.1\x03\x02\x02\x02/-\x03\x02\x02" +
		"\x02/0\x03\x02\x02\x0202\x03\x02\x02\x021/\x03\x02\x02\x0223\x07\x03\x02" +
		"\x023\x03\x03\x02\x02\x0245\x05\x06\x04\x0256\x05\b\x05\x0267\x05\n\x06" +
		"\x0278\x05\f\x07\x0289\x05\x0E\b\x029:\x05\x10\t\x02:;\x05\x12\n\x02;" +
		"<\x05\x14\v\x02<=\x05\x16\f\x02=>\x05\x18\r\x02>?\x05\x1A\x0E\x02?@\x05" +
		"\x1C\x0F\x02@A\x05\x1E\x10\x02AB\x05 \x11\x02BC\x05\"\x12\x02CD\x05$\x13" +
		"\x02D\x05\x03\x02\x02\x02EF\x07\x05\x02\x02FG\x07\x06\x02\x02G\x07\x03" +
		"\x02\x02\x02HI\x05&\x14\x02I\t\x03\x02\x02\x02JK\x05&\x14\x02K\v\x03\x02" +
		"\x02\x02LM\x05(\x15\x02M\r\x03\x02\x02\x02NO\x05(\x15\x02O\x0F\x03\x02" +
		"\x02\x02PQ\x05(\x15\x02Q\x11\x03\x02\x02\x02RS\x05(\x15\x02S\x13\x03\x02" +
		"\x02\x02TU\x05*\x16\x02U\x15\x03\x02\x02\x02VW\x05&\x14\x02W\x17\x03\x02" +
		"\x02\x02XY\x05&\x14\x02Y\x19\x03\x02\x02\x02Z[\x05&\x14\x02[\x1B\x03\x02" +
		"\x02\x02\\]\x05&\x14\x02]\x1D\x03\x02\x02\x02^_\x05(\x15\x02_\x1F\x03" +
		"\x02\x02\x02`a\x05(\x15\x02a!\x03\x02\x02\x02bc\x05(\x15\x02c#\x03\x02" +
		"\x02\x02de\x05&\x14\x02e%\x03\x02\x02\x02fh\x07\x05\x02\x02gf\x03\x02" +
		"\x02\x02gh\x03\x02\x02\x02hi\x03\x02\x02\x02ij\x07\x06\x02\x02j\'\x03" +
		"\x02\x02\x02km\x07\x04\x02\x02lk\x03\x02\x02\x02lm\x03\x02\x02\x02mn\x03" +
		"\x02\x02\x02no\x07\x06\x02\x02o)\x03\x02\x02\x02pr\x07\x04\x02\x02qp\x03" +
		"\x02\x02\x02qr\x03\x02\x02\x02rs\x03\x02\x02\x02st\x07\x06\x02\x02t+\x03" +
		"\x02\x02\x02\x06/glq";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!muddbParser.__ATN) {
			muddbParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(muddbParser._serializedATN));
		}

		return muddbParser.__ATN;
	}

}

export class DbContext extends ParserRuleContext {
	public END(): TerminalNode { return this.getToken(muddbParser.END, 0); }
	public room(): RoomContext[];
	public room(i: number): RoomContext;
	public room(i?: number): RoomContext | RoomContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RoomContext);
		} else {
			return this.getRuleContext(i, RoomContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return muddbParser.RULE_db; }
	// @Override
	public enterRule(listener: muddbListener): void {
		if (listener.enterDb) {
			listener.enterDb(this);
		}
	}
	// @Override
	public exitRule(listener: muddbListener): void {
		if (listener.exitDb) {
			listener.exitDb(this);
		}
	}
}


export class RoomContext extends ParserRuleContext {
	public roomno(): RoomnoContext {
		return this.getRuleContext(0, RoomnoContext);
	}
	public name(): NameContext {
		return this.getRuleContext(0, NameContext);
	}
	public description(): DescriptionContext {
		return this.getRuleContext(0, DescriptionContext);
	}
	public location(): LocationContext {
		return this.getRuleContext(0, LocationContext);
	}
	public contents(): ContentsContext {
		return this.getRuleContext(0, ContentsContext);
	}
	public exits(): ExitsContext {
		return this.getRuleContext(0, ExitsContext);
	}
	public next(): NextContext {
		return this.getRuleContext(0, NextContext);
	}
	public key(): KeyContext {
		return this.getRuleContext(0, KeyContext);
	}
	public fail_message(): Fail_messageContext {
		return this.getRuleContext(0, Fail_messageContext);
	}
	public succ_message(): Succ_messageContext {
		return this.getRuleContext(0, Succ_messageContext);
	}
	public ofail(): OfailContext {
		return this.getRuleContext(0, OfailContext);
	}
	public osuccess(): OsuccessContext {
		return this.getRuleContext(0, OsuccessContext);
	}
	public owner(): OwnerContext {
		return this.getRuleContext(0, OwnerContext);
	}
	public pennies(): PenniesContext {
		return this.getRuleContext(0, PenniesContext);
	}
	public flags(): FlagsContext {
		return this.getRuleContext(0, FlagsContext);
	}
	public password(): PasswordContext {
		return this.getRuleContext(0, PasswordContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return muddbParser.RULE_room; }
	// @Override
	public enterRule(listener: muddbListener): void {
		if (listener.enterRoom) {
			listener.enterRoom(this);
		}
	}
	// @Override
	public exitRule(listener: muddbListener): void {
		if (listener.exitRoom) {
			listener.exitRoom(this);
		}
	}
}


export class RoomnoContext extends ParserRuleContext {
	public STRING(): TerminalNode { return this.getToken(muddbParser.STRING, 0); }
	public EOL(): TerminalNode { return this.getToken(muddbParser.EOL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return muddbParser.RULE_roomno; }
	// @Override
	public enterRule(listener: muddbListener): void {
		if (listener.enterRoomno) {
			listener.enterRoomno(this);
		}
	}
	// @Override
	public exitRule(listener: muddbListener): void {
		if (listener.exitRoomno) {
			listener.exitRoomno(this);
		}
	}
}


export class NameContext extends ParserRuleContext {
	public string(): StringContext {
		return this.getRuleContext(0, StringContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return muddbParser.RULE_name; }
	// @Override
	public enterRule(listener: muddbListener): void {
		if (listener.enterName) {
			listener.enterName(this);
		}
	}
	// @Override
	public exitRule(listener: muddbListener): void {
		if (listener.exitName) {
			listener.exitName(this);
		}
	}
}


export class DescriptionContext extends ParserRuleContext {
	public string(): StringContext {
		return this.getRuleContext(0, StringContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return muddbParser.RULE_description; }
	// @Override
	public enterRule(listener: muddbListener): void {
		if (listener.enterDescription) {
			listener.enterDescription(this);
		}
	}
	// @Override
	public exitRule(listener: muddbListener): void {
		if (listener.exitDescription) {
			listener.exitDescription(this);
		}
	}
}


export class LocationContext extends ParserRuleContext {
	public ref(): RefContext {
		return this.getRuleContext(0, RefContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return muddbParser.RULE_location; }
	// @Override
	public enterRule(listener: muddbListener): void {
		if (listener.enterLocation) {
			listener.enterLocation(this);
		}
	}
	// @Override
	public exitRule(listener: muddbListener): void {
		if (listener.exitLocation) {
			listener.exitLocation(this);
		}
	}
}


export class ContentsContext extends ParserRuleContext {
	public ref(): RefContext {
		return this.getRuleContext(0, RefContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return muddbParser.RULE_contents; }
	// @Override
	public enterRule(listener: muddbListener): void {
		if (listener.enterContents) {
			listener.enterContents(this);
		}
	}
	// @Override
	public exitRule(listener: muddbListener): void {
		if (listener.exitContents) {
			listener.exitContents(this);
		}
	}
}


export class ExitsContext extends ParserRuleContext {
	public ref(): RefContext {
		return this.getRuleContext(0, RefContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return muddbParser.RULE_exits; }
	// @Override
	public enterRule(listener: muddbListener): void {
		if (listener.enterExits) {
			listener.enterExits(this);
		}
	}
	// @Override
	public exitRule(listener: muddbListener): void {
		if (listener.exitExits) {
			listener.exitExits(this);
		}
	}
}


export class NextContext extends ParserRuleContext {
	public ref(): RefContext {
		return this.getRuleContext(0, RefContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return muddbParser.RULE_next; }
	// @Override
	public enterRule(listener: muddbListener): void {
		if (listener.enterNext) {
			listener.enterNext(this);
		}
	}
	// @Override
	public exitRule(listener: muddbListener): void {
		if (listener.exitNext) {
			listener.exitNext(this);
		}
	}
}


export class KeyContext extends ParserRuleContext {
	public bool(): BoolContext {
		return this.getRuleContext(0, BoolContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return muddbParser.RULE_key; }
	// @Override
	public enterRule(listener: muddbListener): void {
		if (listener.enterKey) {
			listener.enterKey(this);
		}
	}
	// @Override
	public exitRule(listener: muddbListener): void {
		if (listener.exitKey) {
			listener.exitKey(this);
		}
	}
}


export class Fail_messageContext extends ParserRuleContext {
	public string(): StringContext {
		return this.getRuleContext(0, StringContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return muddbParser.RULE_fail_message; }
	// @Override
	public enterRule(listener: muddbListener): void {
		if (listener.enterFail_message) {
			listener.enterFail_message(this);
		}
	}
	// @Override
	public exitRule(listener: muddbListener): void {
		if (listener.exitFail_message) {
			listener.exitFail_message(this);
		}
	}
}


export class Succ_messageContext extends ParserRuleContext {
	public string(): StringContext {
		return this.getRuleContext(0, StringContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return muddbParser.RULE_succ_message; }
	// @Override
	public enterRule(listener: muddbListener): void {
		if (listener.enterSucc_message) {
			listener.enterSucc_message(this);
		}
	}
	// @Override
	public exitRule(listener: muddbListener): void {
		if (listener.exitSucc_message) {
			listener.exitSucc_message(this);
		}
	}
}


export class OfailContext extends ParserRuleContext {
	public string(): StringContext {
		return this.getRuleContext(0, StringContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return muddbParser.RULE_ofail; }
	// @Override
	public enterRule(listener: muddbListener): void {
		if (listener.enterOfail) {
			listener.enterOfail(this);
		}
	}
	// @Override
	public exitRule(listener: muddbListener): void {
		if (listener.exitOfail) {
			listener.exitOfail(this);
		}
	}
}


export class OsuccessContext extends ParserRuleContext {
	public string(): StringContext {
		return this.getRuleContext(0, StringContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return muddbParser.RULE_osuccess; }
	// @Override
	public enterRule(listener: muddbListener): void {
		if (listener.enterOsuccess) {
			listener.enterOsuccess(this);
		}
	}
	// @Override
	public exitRule(listener: muddbListener): void {
		if (listener.exitOsuccess) {
			listener.exitOsuccess(this);
		}
	}
}


export class OwnerContext extends ParserRuleContext {
	public ref(): RefContext {
		return this.getRuleContext(0, RefContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return muddbParser.RULE_owner; }
	// @Override
	public enterRule(listener: muddbListener): void {
		if (listener.enterOwner) {
			listener.enterOwner(this);
		}
	}
	// @Override
	public exitRule(listener: muddbListener): void {
		if (listener.exitOwner) {
			listener.exitOwner(this);
		}
	}
}


export class PenniesContext extends ParserRuleContext {
	public ref(): RefContext {
		return this.getRuleContext(0, RefContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return muddbParser.RULE_pennies; }
	// @Override
	public enterRule(listener: muddbListener): void {
		if (listener.enterPennies) {
			listener.enterPennies(this);
		}
	}
	// @Override
	public exitRule(listener: muddbListener): void {
		if (listener.exitPennies) {
			listener.exitPennies(this);
		}
	}
}


export class FlagsContext extends ParserRuleContext {
	public ref(): RefContext {
		return this.getRuleContext(0, RefContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return muddbParser.RULE_flags; }
	// @Override
	public enterRule(listener: muddbListener): void {
		if (listener.enterFlags) {
			listener.enterFlags(this);
		}
	}
	// @Override
	public exitRule(listener: muddbListener): void {
		if (listener.exitFlags) {
			listener.exitFlags(this);
		}
	}
}


export class PasswordContext extends ParserRuleContext {
	public string(): StringContext {
		return this.getRuleContext(0, StringContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return muddbParser.RULE_password; }
	// @Override
	public enterRule(listener: muddbListener): void {
		if (listener.enterPassword) {
			listener.enterPassword(this);
		}
	}
	// @Override
	public exitRule(listener: muddbListener): void {
		if (listener.exitPassword) {
			listener.exitPassword(this);
		}
	}
}


export class StringContext extends ParserRuleContext {
	public EOL(): TerminalNode { return this.getToken(muddbParser.EOL, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(muddbParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return muddbParser.RULE_string; }
	// @Override
	public enterRule(listener: muddbListener): void {
		if (listener.enterString) {
			listener.enterString(this);
		}
	}
	// @Override
	public exitRule(listener: muddbListener): void {
		if (listener.exitString) {
			listener.exitString(this);
		}
	}
}


export class RefContext extends ParserRuleContext {
	public EOL(): TerminalNode { return this.getToken(muddbParser.EOL, 0); }
	public NUM(): TerminalNode | undefined { return this.tryGetToken(muddbParser.NUM, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return muddbParser.RULE_ref; }
	// @Override
	public enterRule(listener: muddbListener): void {
		if (listener.enterRef) {
			listener.enterRef(this);
		}
	}
	// @Override
	public exitRule(listener: muddbListener): void {
		if (listener.exitRef) {
			listener.exitRef(this);
		}
	}
}


export class BoolContext extends ParserRuleContext {
	public EOL(): TerminalNode { return this.getToken(muddbParser.EOL, 0); }
	public NUM(): TerminalNode | undefined { return this.tryGetToken(muddbParser.NUM, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return muddbParser.RULE_bool; }
	// @Override
	public enterRule(listener: muddbListener): void {
		if (listener.enterBool) {
			listener.enterBool(this);
		}
	}
	// @Override
	public exitRule(listener: muddbListener): void {
		if (listener.exitBool) {
			listener.exitBool(this);
		}
	}
}


