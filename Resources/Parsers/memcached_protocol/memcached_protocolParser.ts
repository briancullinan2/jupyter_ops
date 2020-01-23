// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/memcached_protocol/memcached_protocol.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { memcached_protocolListener } from "./memcached_protocolListener";

export class memcached_protocolParser extends Parser {
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
	public static readonly INTEGER = 32;
	public static readonly WORD = 33;
	public static readonly WHITESPACE = 34;
	public static readonly RULE_command_line = 0;
	public static readonly RULE_storage_command = 1;
	public static readonly RULE_storage_command_name = 2;
	public static readonly RULE_retrieval_command = 3;
	public static readonly RULE_delete_command = 4;
	public static readonly RULE_increment_command = 5;
	public static readonly RULE_decrement_command = 6;
	public static readonly RULE_statistics_command = 7;
	public static readonly RULE_statistics_option = 8;
	public static readonly RULE_flush_command = 9;
	public static readonly RULE_version_command = 10;
	public static readonly RULE_verbosity_command = 11;
	public static readonly RULE_quit_command = 12;
	public static readonly RULE_storage_response = 13;
	public static readonly RULE_retrieval_response = 14;
	public static readonly RULE_deletion_response = 15;
	public static readonly RULE_incr_or_decr_response = 16;
	public static readonly RULE_statistics_response = 17;
	public static readonly RULE_error_response = 18;
	public static readonly RULE_general_statistic = 19;
	public static readonly RULE_size_statistic = 20;
	public static readonly RULE_general_error = 21;
	public static readonly RULE_client_error_message = 22;
	public static readonly RULE_server_error_message = 23;
	public static readonly RULE_end = 24;
	public static readonly RULE_noreply = 25;
	public static readonly RULE_key = 26;
	public static readonly RULE_flags = 27;
	public static readonly RULE_exptime = 28;
	public static readonly RULE_bytes = 29;
	public static readonly RULE_cas_unique = 30;
	public static readonly RULE_value = 31;
	public static readonly RULE_time = 32;
	public static readonly RULE_delay = 33;
	public static readonly RULE_verbosity_level = 34;
	public static readonly RULE_statistic_name = 35;
	public static readonly RULE_statistic_value = 36;
	public static readonly RULE_size = 37;
	public static readonly RULE_count = 38;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"command_line", "storage_command", "storage_command_name", "retrieval_command", 
		"delete_command", "increment_command", "decrement_command", "statistics_command", 
		"statistics_option", "flush_command", "version_command", "verbosity_command", 
		"quit_command", "storage_response", "retrieval_response", "deletion_response", 
		"incr_or_decr_response", "statistics_response", "error_response", "general_statistic", 
		"size_statistic", "general_error", "client_error_message", "server_error_message", 
		"end", "noreply", "key", "flags", "exptime", "bytes", "cas_unique", "value", 
		"time", "delay", "verbosity_level", "statistic_name", "statistic_value", 
		"size", "count",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'cas'", "'set'", "'add'", "'replace'", "'append'", "'prepend'", 
		"'get'", "'gets'", "'delete'", "'incr'", "'decr'", "'stats'", "'items'", 
		"'slabs'", "'sizes'", "'flush_all'", "'version'", "'verbosity'", "'quit'", 
		"'STORED'", "'NOT_STORED'", "'EXISTS'", "'NOT_FOUND'", "'VALUE'", "'DELETED'", 
		"'STAT'", "'ERROR'", "'CLIENT_ERROR'", "'SERVER_ERROR'", "'END'", "'noreply'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, "INTEGER", "WORD", "WHITESPACE",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(memcached_protocolParser._LITERAL_NAMES, memcached_protocolParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return memcached_protocolParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "memcached_protocol.g4"; }

	// @Override
	public get ruleNames(): string[] { return memcached_protocolParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return memcached_protocolParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(memcached_protocolParser._ATN, this);
	}
	// @RuleVersion(0)
	public command_line(): Command_lineContext {
		let _localctx: Command_lineContext = new Command_lineContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, memcached_protocolParser.RULE_command_line);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 88;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 88;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case memcached_protocolParser.T__0:
				case memcached_protocolParser.T__1:
				case memcached_protocolParser.T__2:
				case memcached_protocolParser.T__3:
				case memcached_protocolParser.T__4:
				case memcached_protocolParser.T__5:
					{
					this.state = 78;
					this.storage_command();
					}
					break;
				case memcached_protocolParser.T__6:
				case memcached_protocolParser.T__7:
					{
					this.state = 79;
					this.retrieval_command();
					}
					break;
				case memcached_protocolParser.T__8:
					{
					this.state = 80;
					this.delete_command();
					}
					break;
				case memcached_protocolParser.T__9:
					{
					this.state = 81;
					this.increment_command();
					}
					break;
				case memcached_protocolParser.T__10:
					{
					this.state = 82;
					this.decrement_command();
					}
					break;
				case memcached_protocolParser.T__11:
					{
					this.state = 83;
					this.statistics_command();
					}
					break;
				case memcached_protocolParser.T__15:
					{
					this.state = 84;
					this.flush_command();
					}
					break;
				case memcached_protocolParser.T__16:
					{
					this.state = 85;
					this.version_command();
					}
					break;
				case memcached_protocolParser.T__17:
					{
					this.state = 86;
					this.verbosity_command();
					}
					break;
				case memcached_protocolParser.T__18:
					{
					this.state = 87;
					this.quit_command();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 90;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << memcached_protocolParser.T__0) | (1 << memcached_protocolParser.T__1) | (1 << memcached_protocolParser.T__2) | (1 << memcached_protocolParser.T__3) | (1 << memcached_protocolParser.T__4) | (1 << memcached_protocolParser.T__5) | (1 << memcached_protocolParser.T__6) | (1 << memcached_protocolParser.T__7) | (1 << memcached_protocolParser.T__8) | (1 << memcached_protocolParser.T__9) | (1 << memcached_protocolParser.T__10) | (1 << memcached_protocolParser.T__11) | (1 << memcached_protocolParser.T__15) | (1 << memcached_protocolParser.T__16) | (1 << memcached_protocolParser.T__17) | (1 << memcached_protocolParser.T__18))) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public storage_command(): Storage_commandContext {
		let _localctx: Storage_commandContext = new Storage_commandContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, memcached_protocolParser.RULE_storage_command);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 105;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case memcached_protocolParser.T__1:
			case memcached_protocolParser.T__2:
			case memcached_protocolParser.T__3:
			case memcached_protocolParser.T__4:
			case memcached_protocolParser.T__5:
				{
				{
				this.state = 92;
				this.storage_command_name();
				this.state = 93;
				this.key();
				this.state = 94;
				this.flags();
				this.state = 95;
				this.exptime();
				this.state = 96;
				this.bytes();
				}
				}
				break;
			case memcached_protocolParser.T__0:
				{
				{
				this.state = 98;
				this.match(memcached_protocolParser.T__0);
				this.state = 99;
				this.key();
				this.state = 100;
				this.flags();
				this.state = 101;
				this.exptime();
				this.state = 102;
				this.bytes();
				this.state = 103;
				this.cas_unique();
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 108;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === memcached_protocolParser.T__30) {
				{
				this.state = 107;
				this.noreply();
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
	public storage_command_name(): Storage_command_nameContext {
		let _localctx: Storage_command_nameContext = new Storage_command_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, memcached_protocolParser.RULE_storage_command_name);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 110;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << memcached_protocolParser.T__1) | (1 << memcached_protocolParser.T__2) | (1 << memcached_protocolParser.T__3) | (1 << memcached_protocolParser.T__4) | (1 << memcached_protocolParser.T__5))) !== 0))) {
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
	public retrieval_command(): Retrieval_commandContext {
		let _localctx: Retrieval_commandContext = new Retrieval_commandContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, memcached_protocolParser.RULE_retrieval_command);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 112;
			_la = this._input.LA(1);
			if (!(_la === memcached_protocolParser.T__6 || _la === memcached_protocolParser.T__7)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 114;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 113;
					this.key();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 116;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
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
	public delete_command(): Delete_commandContext {
		let _localctx: Delete_commandContext = new Delete_commandContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, memcached_protocolParser.RULE_delete_command);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 118;
			this.match(memcached_protocolParser.T__8);
			this.state = 119;
			this.key();
			this.state = 121;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === memcached_protocolParser.INTEGER) {
				{
				this.state = 120;
				this.time();
				}
			}

			this.state = 124;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === memcached_protocolParser.T__30) {
				{
				this.state = 123;
				this.noreply();
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
	public increment_command(): Increment_commandContext {
		let _localctx: Increment_commandContext = new Increment_commandContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, memcached_protocolParser.RULE_increment_command);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 126;
			this.match(memcached_protocolParser.T__9);
			this.state = 127;
			this.key();
			this.state = 128;
			this.value();
			this.state = 130;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === memcached_protocolParser.T__30) {
				{
				this.state = 129;
				this.noreply();
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
	public decrement_command(): Decrement_commandContext {
		let _localctx: Decrement_commandContext = new Decrement_commandContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, memcached_protocolParser.RULE_decrement_command);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 132;
			this.match(memcached_protocolParser.T__10);
			this.state = 133;
			this.key();
			this.state = 134;
			this.value();
			this.state = 136;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === memcached_protocolParser.T__30) {
				{
				this.state = 135;
				this.noreply();
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
	public statistics_command(): Statistics_commandContext {
		let _localctx: Statistics_commandContext = new Statistics_commandContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, memcached_protocolParser.RULE_statistics_command);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 138;
			this.match(memcached_protocolParser.T__11);
			this.state = 140;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << memcached_protocolParser.T__12) | (1 << memcached_protocolParser.T__13) | (1 << memcached_protocolParser.T__14))) !== 0)) {
				{
				this.state = 139;
				this.statistics_option();
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
	public statistics_option(): Statistics_optionContext {
		let _localctx: Statistics_optionContext = new Statistics_optionContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, memcached_protocolParser.RULE_statistics_option);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 142;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << memcached_protocolParser.T__12) | (1 << memcached_protocolParser.T__13) | (1 << memcached_protocolParser.T__14))) !== 0))) {
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
	public flush_command(): Flush_commandContext {
		let _localctx: Flush_commandContext = new Flush_commandContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, memcached_protocolParser.RULE_flush_command);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 144;
			this.match(memcached_protocolParser.T__15);
			this.state = 146;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === memcached_protocolParser.INTEGER) {
				{
				this.state = 145;
				this.delay();
				}
			}

			this.state = 149;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === memcached_protocolParser.T__30) {
				{
				this.state = 148;
				this.noreply();
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
	public version_command(): Version_commandContext {
		let _localctx: Version_commandContext = new Version_commandContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, memcached_protocolParser.RULE_version_command);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 151;
			this.match(memcached_protocolParser.T__16);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public verbosity_command(): Verbosity_commandContext {
		let _localctx: Verbosity_commandContext = new Verbosity_commandContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, memcached_protocolParser.RULE_verbosity_command);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 153;
			this.match(memcached_protocolParser.T__17);
			this.state = 154;
			this.verbosity_level();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public quit_command(): Quit_commandContext {
		let _localctx: Quit_commandContext = new Quit_commandContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, memcached_protocolParser.RULE_quit_command);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 156;
			this.match(memcached_protocolParser.T__18);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public storage_response(): Storage_responseContext {
		let _localctx: Storage_responseContext = new Storage_responseContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, memcached_protocolParser.RULE_storage_response);
		try {
			this.state = 163;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case memcached_protocolParser.T__26:
			case memcached_protocolParser.T__27:
			case memcached_protocolParser.T__28:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 158;
				this.error_response();
				}
				break;
			case memcached_protocolParser.T__19:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 159;
				this.match(memcached_protocolParser.T__19);
				}
				break;
			case memcached_protocolParser.T__20:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 160;
				this.match(memcached_protocolParser.T__20);
				}
				break;
			case memcached_protocolParser.T__21:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 161;
				this.match(memcached_protocolParser.T__21);
				}
				break;
			case memcached_protocolParser.T__22:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 162;
				this.match(memcached_protocolParser.T__22);
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
	public retrieval_response(): Retrieval_responseContext {
		let _localctx: Retrieval_responseContext = new Retrieval_responseContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, memcached_protocolParser.RULE_retrieval_response);
		let _la: number;
		try {
			this.state = 174;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case memcached_protocolParser.T__26:
			case memcached_protocolParser.T__27:
			case memcached_protocolParser.T__28:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 165;
				this.error_response();
				}
				break;
			case memcached_protocolParser.T__23:
				this.enterOuterAlt(_localctx, 2);
				{
				{
				this.state = 166;
				this.match(memcached_protocolParser.T__23);
				this.state = 167;
				this.key();
				this.state = 168;
				this.flags();
				this.state = 169;
				this.bytes();
				this.state = 171;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === memcached_protocolParser.INTEGER) {
					{
					this.state = 170;
					this.cas_unique();
					}
				}

				}
				}
				break;
			case memcached_protocolParser.T__29:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 173;
				this.end();
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
	public deletion_response(): Deletion_responseContext {
		let _localctx: Deletion_responseContext = new Deletion_responseContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, memcached_protocolParser.RULE_deletion_response);
		try {
			this.state = 179;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case memcached_protocolParser.T__26:
			case memcached_protocolParser.T__27:
			case memcached_protocolParser.T__28:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 176;
				this.error_response();
				}
				break;
			case memcached_protocolParser.T__24:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 177;
				this.match(memcached_protocolParser.T__24);
				}
				break;
			case memcached_protocolParser.T__22:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 178;
				this.match(memcached_protocolParser.T__22);
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
	public incr_or_decr_response(): Incr_or_decr_responseContext {
		let _localctx: Incr_or_decr_responseContext = new Incr_or_decr_responseContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, memcached_protocolParser.RULE_incr_or_decr_response);
		try {
			this.state = 184;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case memcached_protocolParser.T__26:
			case memcached_protocolParser.T__27:
			case memcached_protocolParser.T__28:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 181;
				this.error_response();
				}
				break;
			case memcached_protocolParser.T__22:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 182;
				this.match(memcached_protocolParser.T__22);
				}
				break;
			case memcached_protocolParser.INTEGER:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 183;
				this.match(memcached_protocolParser.INTEGER);
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
	public statistics_response(): Statistics_responseContext {
		let _localctx: Statistics_responseContext = new Statistics_responseContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, memcached_protocolParser.RULE_statistics_response);
		try {
			this.state = 190;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case memcached_protocolParser.T__26:
			case memcached_protocolParser.T__27:
			case memcached_protocolParser.T__28:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 186;
				this.error_response();
				}
				break;
			case memcached_protocolParser.T__25:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 187;
				this.general_statistic();
				}
				break;
			case memcached_protocolParser.INTEGER:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 188;
				this.size_statistic();
				}
				break;
			case memcached_protocolParser.T__29:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 189;
				this.end();
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
	public error_response(): Error_responseContext {
		let _localctx: Error_responseContext = new Error_responseContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, memcached_protocolParser.RULE_error_response);
		try {
			this.state = 195;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case memcached_protocolParser.T__26:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 192;
				this.general_error();
				}
				break;
			case memcached_protocolParser.T__27:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 193;
				this.client_error_message();
				}
				break;
			case memcached_protocolParser.T__28:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 194;
				this.server_error_message();
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
	public general_statistic(): General_statisticContext {
		let _localctx: General_statisticContext = new General_statisticContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, memcached_protocolParser.RULE_general_statistic);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 197;
			this.match(memcached_protocolParser.T__25);
			this.state = 198;
			this.statistic_name();
			this.state = 199;
			this.statistic_value();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public size_statistic(): Size_statisticContext {
		let _localctx: Size_statisticContext = new Size_statisticContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, memcached_protocolParser.RULE_size_statistic);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 201;
			this.size();
			this.state = 202;
			this.count();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public general_error(): General_errorContext {
		let _localctx: General_errorContext = new General_errorContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, memcached_protocolParser.RULE_general_error);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 204;
			this.match(memcached_protocolParser.T__26);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public client_error_message(): Client_error_messageContext {
		let _localctx: Client_error_messageContext = new Client_error_messageContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, memcached_protocolParser.RULE_client_error_message);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 206;
			this.match(memcached_protocolParser.T__27);
			this.state = 208;
			this._errHandler.sync(this);
			_alt = 1 + 1;
			do {
				switch (_alt) {
				case 1 + 1:
					{
					{
					this.state = 207;
					this.matchWildcard();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 210;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
			} while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public server_error_message(): Server_error_messageContext {
		let _localctx: Server_error_messageContext = new Server_error_messageContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, memcached_protocolParser.RULE_server_error_message);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 212;
			this.match(memcached_protocolParser.T__28);
			this.state = 214;
			this._errHandler.sync(this);
			_alt = 1 + 1;
			do {
				switch (_alt) {
				case 1 + 1:
					{
					{
					this.state = 213;
					this.matchWildcard();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 216;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
			} while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public end(): EndContext {
		let _localctx: EndContext = new EndContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, memcached_protocolParser.RULE_end);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 218;
			this.match(memcached_protocolParser.T__29);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public noreply(): NoreplyContext {
		let _localctx: NoreplyContext = new NoreplyContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, memcached_protocolParser.RULE_noreply);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 220;
			this.match(memcached_protocolParser.T__30);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 52, memcached_protocolParser.RULE_key);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 222;
			this.matchWildcard();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 54, memcached_protocolParser.RULE_flags);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 224;
			this.match(memcached_protocolParser.INTEGER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public exptime(): ExptimeContext {
		let _localctx: ExptimeContext = new ExptimeContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, memcached_protocolParser.RULE_exptime);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 226;
			this.match(memcached_protocolParser.INTEGER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public bytes(): BytesContext {
		let _localctx: BytesContext = new BytesContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, memcached_protocolParser.RULE_bytes);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 228;
			this.match(memcached_protocolParser.INTEGER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cas_unique(): Cas_uniqueContext {
		let _localctx: Cas_uniqueContext = new Cas_uniqueContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, memcached_protocolParser.RULE_cas_unique);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 230;
			this.match(memcached_protocolParser.INTEGER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public value(): ValueContext {
		let _localctx: ValueContext = new ValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, memcached_protocolParser.RULE_value);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 232;
			this.match(memcached_protocolParser.INTEGER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public time(): TimeContext {
		let _localctx: TimeContext = new TimeContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, memcached_protocolParser.RULE_time);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 234;
			this.match(memcached_protocolParser.INTEGER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public delay(): DelayContext {
		let _localctx: DelayContext = new DelayContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, memcached_protocolParser.RULE_delay);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 236;
			this.match(memcached_protocolParser.INTEGER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public verbosity_level(): Verbosity_levelContext {
		let _localctx: Verbosity_levelContext = new Verbosity_levelContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, memcached_protocolParser.RULE_verbosity_level);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 238;
			this.match(memcached_protocolParser.INTEGER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statistic_name(): Statistic_nameContext {
		let _localctx: Statistic_nameContext = new Statistic_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, memcached_protocolParser.RULE_statistic_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 240;
			this.match(memcached_protocolParser.WORD);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statistic_value(): Statistic_valueContext {
		let _localctx: Statistic_valueContext = new Statistic_valueContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, memcached_protocolParser.RULE_statistic_value);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 242;
			this.matchWildcard();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public size(): SizeContext {
		let _localctx: SizeContext = new SizeContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, memcached_protocolParser.RULE_size);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 244;
			this.match(memcached_protocolParser.INTEGER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public count(): CountContext {
		let _localctx: CountContext = new CountContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, memcached_protocolParser.RULE_count);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 246;
			this.match(memcached_protocolParser.INTEGER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03$\xFB\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x03\x02\x03\x02\x03\x02" +
		"\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x06\x02[\n\x02" +
		"\r\x02\x0E\x02\\\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03l\n\x03\x03\x03" +
		"\x05\x03o\n\x03\x03\x04\x03\x04\x03\x05\x03\x05\x06\x05u\n\x05\r\x05\x0E" +
		"\x05v\x03\x06\x03\x06\x03\x06\x05\x06|\n\x06\x03\x06\x05\x06\x7F\n\x06" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07\x85\n\x07\x03\b\x03\b\x03\b\x03" +
		"\b\x05\b\x8B\n\b\x03\t\x03\t\x05\t\x8F\n\t\x03\n\x03\n\x03\v\x03\v\x05" +
		"\v\x95\n\v\x03\v\x05\v\x98\n\v\x03\f\x03\f\x03\r\x03\r\x03\r\x03\x0E\x03" +
		"\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\xA6\n\x0F\x03\x10" +
		"\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10\xAE\n\x10\x03\x10\x05" +
		"\x10\xB1\n\x10\x03\x11\x03\x11\x03\x11\x05\x11\xB6\n\x11\x03\x12\x03\x12" +
		"\x03\x12\x05\x12\xBB\n\x12\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13\xC1" +
		"\n\x13\x03\x14\x03\x14\x03\x14\x05\x14\xC6\n\x14\x03\x15\x03\x15\x03\x15" +
		"\x03\x15\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x18\x03\x18\x06\x18" +
		"\xD3\n\x18\r\x18\x0E\x18\xD4\x03\x19\x03\x19\x06\x19\xD9\n\x19\r\x19\x0E" +
		"\x19\xDA\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1D\x03\x1D" +
		"\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03 \x03 \x03!\x03!\x03\"\x03\"\x03#" +
		"\x03#\x03$\x03$\x03%\x03%\x03&\x03&\x03\'\x03\'\x03(\x03(\x03(\x04\xD4" +
		"\xDA\x02\x02)\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02" +
		"\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02" +
		"&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02" +
		"B\x02D\x02F\x02H\x02J\x02L\x02N\x02\x02\x05\x03\x02\x04\b\x03\x02\t\n" +
		"\x03\x02\x0F\x11\x02\xF9\x02Z\x03\x02\x02\x02\x04k\x03\x02\x02\x02\x06" +
		"p\x03\x02\x02\x02\br\x03\x02\x02\x02\nx\x03\x02\x02\x02\f\x80\x03\x02" +
		"\x02\x02\x0E\x86\x03\x02\x02\x02\x10\x8C\x03\x02\x02\x02\x12\x90\x03\x02" +
		"\x02\x02\x14\x92\x03\x02\x02\x02\x16\x99\x03\x02\x02\x02\x18\x9B\x03\x02" +
		"\x02\x02\x1A\x9E\x03\x02\x02\x02\x1C\xA5\x03\x02\x02\x02\x1E\xB0\x03\x02" +
		"\x02\x02 \xB5\x03\x02\x02\x02\"\xBA\x03\x02\x02\x02$\xC0\x03\x02\x02\x02" +
		"&\xC5\x03\x02\x02\x02(\xC7\x03\x02\x02\x02*\xCB\x03\x02\x02\x02,\xCE\x03" +
		"\x02\x02\x02.\xD0\x03\x02\x02\x020\xD6\x03\x02\x02\x022\xDC\x03\x02\x02" +
		"\x024\xDE\x03\x02\x02\x026\xE0\x03\x02\x02\x028\xE2\x03\x02\x02\x02:\xE4" +
		"\x03\x02\x02\x02<\xE6\x03\x02\x02\x02>\xE8\x03\x02\x02\x02@\xEA\x03\x02" +
		"\x02\x02B\xEC\x03\x02\x02\x02D\xEE\x03\x02\x02\x02F\xF0\x03\x02\x02\x02" +
		"H\xF2\x03\x02\x02\x02J\xF4\x03\x02\x02\x02L\xF6\x03\x02\x02\x02N\xF8\x03" +
		"\x02\x02\x02P[\x05\x04\x03\x02Q[\x05\b\x05\x02R[\x05\n\x06\x02S[\x05\f" +
		"\x07\x02T[\x05\x0E\b\x02U[\x05\x10\t\x02V[\x05\x14\v\x02W[\x05\x16\f\x02" +
		"X[\x05\x18\r\x02Y[\x05\x1A\x0E\x02ZP\x03\x02\x02\x02ZQ\x03\x02\x02\x02" +
		"ZR\x03\x02\x02\x02ZS\x03\x02\x02\x02ZT\x03\x02\x02\x02ZU\x03\x02\x02\x02" +
		"ZV\x03\x02\x02\x02ZW\x03\x02\x02\x02ZX\x03\x02\x02\x02ZY\x03\x02\x02\x02" +
		"[\\\x03\x02\x02\x02\\Z\x03\x02\x02\x02\\]\x03\x02\x02\x02]\x03\x03\x02" +
		"\x02\x02^_\x05\x06\x04\x02_`\x056\x1C\x02`a\x058\x1D\x02ab\x05:\x1E\x02" +
		"bc\x05<\x1F\x02cl\x03\x02\x02\x02de\x07\x03\x02\x02ef\x056\x1C\x02fg\x05" +
		"8\x1D\x02gh\x05:\x1E\x02hi\x05<\x1F\x02ij\x05> \x02jl\x03\x02\x02\x02" +
		"k^\x03\x02\x02\x02kd\x03\x02\x02\x02ln\x03\x02\x02\x02mo\x054\x1B\x02" +
		"nm\x03\x02\x02\x02no\x03\x02\x02\x02o\x05\x03\x02\x02\x02pq\t\x02\x02" +
		"\x02q\x07\x03\x02\x02\x02rt\t\x03\x02\x02su\x056\x1C\x02ts\x03\x02\x02" +
		"\x02uv\x03\x02\x02\x02vt\x03\x02\x02\x02vw\x03\x02\x02\x02w\t\x03\x02" +
		"\x02\x02xy\x07\v\x02\x02y{\x056\x1C\x02z|\x05B\"\x02{z\x03\x02\x02\x02" +
		"{|\x03\x02\x02\x02|~\x03\x02\x02\x02}\x7F\x054\x1B\x02~}\x03\x02\x02\x02" +
		"~\x7F\x03\x02\x02\x02\x7F\v\x03\x02\x02\x02\x80\x81\x07\f\x02\x02\x81" +
		"\x82\x056\x1C\x02\x82\x84\x05@!\x02\x83\x85\x054\x1B\x02\x84\x83\x03\x02" +
		"\x02\x02\x84\x85\x03\x02\x02\x02\x85\r\x03\x02\x02\x02\x86\x87\x07\r\x02" +
		"\x02\x87\x88\x056\x1C\x02\x88\x8A\x05@!\x02\x89\x8B\x054\x1B\x02\x8A\x89" +
		"\x03\x02\x02\x02\x8A\x8B\x03\x02\x02\x02\x8B\x0F\x03\x02\x02\x02\x8C\x8E" +
		"\x07\x0E\x02\x02\x8D\x8F\x05\x12\n\x02\x8E\x8D\x03\x02\x02\x02\x8E\x8F" +
		"\x03\x02\x02\x02\x8F\x11\x03\x02\x02\x02\x90\x91\t\x04\x02\x02\x91\x13" +
		"\x03\x02\x02\x02\x92\x94\x07\x12\x02\x02\x93\x95\x05D#\x02\x94\x93\x03" +
		"\x02\x02\x02\x94\x95\x03\x02\x02\x02\x95\x97\x03\x02\x02\x02\x96\x98\x05" +
		"4\x1B\x02\x97\x96\x03\x02\x02\x02\x97\x98\x03\x02\x02\x02\x98\x15\x03" +
		"\x02\x02\x02\x99\x9A\x07\x13\x02\x02\x9A\x17\x03\x02\x02\x02\x9B\x9C\x07" +
		"\x14\x02\x02\x9C\x9D\x05F$\x02\x9D\x19\x03\x02\x02\x02\x9E\x9F\x07\x15" +
		"\x02\x02\x9F\x1B\x03\x02\x02\x02\xA0\xA6\x05&\x14\x02\xA1\xA6\x07\x16" +
		"\x02\x02\xA2\xA6\x07\x17\x02\x02\xA3\xA6\x07\x18\x02\x02\xA4\xA6\x07\x19" +
		"\x02\x02\xA5\xA0\x03\x02\x02\x02\xA5\xA1\x03\x02\x02\x02\xA5\xA2\x03\x02" +
		"\x02\x02\xA5\xA3\x03\x02\x02\x02\xA5\xA4\x03\x02\x02\x02\xA6\x1D\x03\x02" +
		"\x02\x02\xA7\xB1\x05&\x14\x02\xA8\xA9\x07\x1A\x02\x02\xA9\xAA\x056\x1C" +
		"\x02\xAA\xAB\x058\x1D\x02\xAB\xAD\x05<\x1F\x02\xAC\xAE\x05> \x02\xAD\xAC" +
		"\x03\x02\x02\x02\xAD\xAE\x03\x02\x02\x02\xAE\xB1\x03\x02\x02\x02\xAF\xB1" +
		"\x052\x1A\x02\xB0\xA7\x03\x02\x02\x02\xB0\xA8\x03\x02\x02\x02\xB0\xAF" +
		"\x03\x02\x02\x02\xB1\x1F\x03\x02\x02\x02\xB2\xB6\x05&\x14\x02\xB3\xB6" +
		"\x07\x1B\x02\x02\xB4\xB6\x07\x19\x02\x02\xB5\xB2\x03\x02\x02\x02\xB5\xB3" +
		"\x03\x02\x02\x02\xB5\xB4\x03\x02\x02\x02\xB6!\x03\x02\x02\x02\xB7\xBB" +
		"\x05&\x14\x02\xB8\xBB\x07\x19\x02\x02\xB9\xBB\x07\"\x02\x02\xBA\xB7\x03" +
		"\x02\x02\x02\xBA\xB8\x03\x02\x02\x02\xBA\xB9\x03\x02\x02\x02\xBB#\x03" +
		"\x02\x02\x02\xBC\xC1\x05&\x14\x02\xBD\xC1\x05(\x15\x02\xBE\xC1\x05*\x16" +
		"\x02\xBF\xC1\x052\x1A\x02\xC0\xBC\x03\x02\x02\x02\xC0\xBD\x03\x02\x02" +
		"\x02\xC0\xBE\x03\x02\x02\x02\xC0\xBF\x03\x02\x02\x02\xC1%\x03\x02\x02" +
		"\x02\xC2\xC6\x05,\x17\x02\xC3\xC6\x05.\x18\x02\xC4\xC6\x050\x19\x02\xC5" +
		"\xC2\x03\x02\x02\x02\xC5\xC3\x03\x02\x02\x02\xC5\xC4\x03\x02\x02\x02\xC6" +
		"\'\x03\x02\x02\x02\xC7\xC8\x07\x1C\x02\x02\xC8\xC9\x05H%\x02\xC9\xCA\x05" +
		"J&\x02\xCA)\x03\x02\x02\x02\xCB\xCC\x05L\'\x02\xCC\xCD\x05N(\x02\xCD+" +
		"\x03\x02\x02\x02\xCE\xCF\x07\x1D\x02\x02\xCF-\x03\x02\x02\x02\xD0\xD2" +
		"\x07\x1E\x02\x02\xD1\xD3\v\x02\x02\x02\xD2\xD1\x03\x02\x02\x02\xD3\xD4" +
		"\x03\x02\x02\x02\xD4\xD5\x03\x02\x02\x02\xD4\xD2\x03\x02\x02\x02\xD5/" +
		"\x03\x02\x02\x02\xD6\xD8\x07\x1F\x02\x02\xD7\xD9\v\x02\x02\x02\xD8\xD7" +
		"\x03\x02\x02\x02\xD9\xDA\x03\x02\x02\x02\xDA\xDB\x03\x02\x02\x02\xDA\xD8" +
		"\x03\x02\x02\x02\xDB1\x03\x02\x02\x02\xDC\xDD\x07 \x02\x02\xDD3\x03\x02" +
		"\x02\x02\xDE\xDF\x07!\x02\x02\xDF5\x03\x02\x02\x02\xE0\xE1\v\x02\x02\x02" +
		"\xE17\x03\x02\x02\x02\xE2\xE3\x07\"\x02\x02\xE39\x03\x02\x02\x02\xE4\xE5" +
		"\x07\"\x02\x02\xE5;\x03\x02\x02\x02\xE6\xE7\x07\"\x02\x02\xE7=\x03\x02" +
		"\x02\x02\xE8\xE9\x07\"\x02\x02\xE9?\x03\x02\x02\x02\xEA\xEB\x07\"\x02" +
		"\x02\xEBA\x03\x02\x02\x02\xEC\xED\x07\"\x02\x02\xEDC\x03\x02\x02\x02\xEE" +
		"\xEF\x07\"\x02\x02\xEFE\x03\x02\x02\x02\xF0\xF1\x07\"\x02\x02\xF1G\x03" +
		"\x02\x02\x02\xF2\xF3\x07#\x02\x02\xF3I\x03\x02\x02\x02\xF4\xF5\v\x02\x02" +
		"\x02\xF5K\x03\x02\x02\x02\xF6\xF7\x07\"\x02\x02\xF7M\x03\x02\x02\x02\xF8" +
		"\xF9\x07\"\x02\x02\xF9O\x03\x02\x02\x02\x17Z\\knv{~\x84\x8A\x8E\x94\x97" +
		"\xA5\xAD\xB0\xB5\xBA\xC0\xC5\xD4\xDA";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!memcached_protocolParser.__ATN) {
			memcached_protocolParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(memcached_protocolParser._serializedATN));
		}

		return memcached_protocolParser.__ATN;
	}

}

export class Command_lineContext extends ParserRuleContext {
	public storage_command(): Storage_commandContext[];
	public storage_command(i: number): Storage_commandContext;
	public storage_command(i?: number): Storage_commandContext | Storage_commandContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Storage_commandContext);
		} else {
			return this.getRuleContext(i, Storage_commandContext);
		}
	}
	public retrieval_command(): Retrieval_commandContext[];
	public retrieval_command(i: number): Retrieval_commandContext;
	public retrieval_command(i?: number): Retrieval_commandContext | Retrieval_commandContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Retrieval_commandContext);
		} else {
			return this.getRuleContext(i, Retrieval_commandContext);
		}
	}
	public delete_command(): Delete_commandContext[];
	public delete_command(i: number): Delete_commandContext;
	public delete_command(i?: number): Delete_commandContext | Delete_commandContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Delete_commandContext);
		} else {
			return this.getRuleContext(i, Delete_commandContext);
		}
	}
	public increment_command(): Increment_commandContext[];
	public increment_command(i: number): Increment_commandContext;
	public increment_command(i?: number): Increment_commandContext | Increment_commandContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Increment_commandContext);
		} else {
			return this.getRuleContext(i, Increment_commandContext);
		}
	}
	public decrement_command(): Decrement_commandContext[];
	public decrement_command(i: number): Decrement_commandContext;
	public decrement_command(i?: number): Decrement_commandContext | Decrement_commandContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Decrement_commandContext);
		} else {
			return this.getRuleContext(i, Decrement_commandContext);
		}
	}
	public statistics_command(): Statistics_commandContext[];
	public statistics_command(i: number): Statistics_commandContext;
	public statistics_command(i?: number): Statistics_commandContext | Statistics_commandContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Statistics_commandContext);
		} else {
			return this.getRuleContext(i, Statistics_commandContext);
		}
	}
	public flush_command(): Flush_commandContext[];
	public flush_command(i: number): Flush_commandContext;
	public flush_command(i?: number): Flush_commandContext | Flush_commandContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Flush_commandContext);
		} else {
			return this.getRuleContext(i, Flush_commandContext);
		}
	}
	public version_command(): Version_commandContext[];
	public version_command(i: number): Version_commandContext;
	public version_command(i?: number): Version_commandContext | Version_commandContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Version_commandContext);
		} else {
			return this.getRuleContext(i, Version_commandContext);
		}
	}
	public verbosity_command(): Verbosity_commandContext[];
	public verbosity_command(i: number): Verbosity_commandContext;
	public verbosity_command(i?: number): Verbosity_commandContext | Verbosity_commandContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Verbosity_commandContext);
		} else {
			return this.getRuleContext(i, Verbosity_commandContext);
		}
	}
	public quit_command(): Quit_commandContext[];
	public quit_command(i: number): Quit_commandContext;
	public quit_command(i?: number): Quit_commandContext | Quit_commandContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Quit_commandContext);
		} else {
			return this.getRuleContext(i, Quit_commandContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return memcached_protocolParser.RULE_command_line; }
	// @Override
	public enterRule(listener: memcached_protocolListener): void {
		if (listener.enterCommand_line) {
			listener.enterCommand_line(this);
		}
	}
	// @Override
	public exitRule(listener: memcached_protocolListener): void {
		if (listener.exitCommand_line) {
			listener.exitCommand_line(this);
		}
	}
}


export class Storage_commandContext extends ParserRuleContext {
	public noreply(): NoreplyContext | undefined {
		return this.tryGetRuleContext(0, NoreplyContext);
	}
	public storage_command_name(): Storage_command_nameContext | undefined {
		return this.tryGetRuleContext(0, Storage_command_nameContext);
	}
	public key(): KeyContext | undefined {
		return this.tryGetRuleContext(0, KeyContext);
	}
	public flags(): FlagsContext | undefined {
		return this.tryGetRuleContext(0, FlagsContext);
	}
	public exptime(): ExptimeContext | undefined {
		return this.tryGetRuleContext(0, ExptimeContext);
	}
	public bytes(): BytesContext | undefined {
		return this.tryGetRuleContext(0, BytesContext);
	}
	public cas_unique(): Cas_uniqueContext | undefined {
		return this.tryGetRuleContext(0, Cas_uniqueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return memcached_protocolParser.RULE_storage_command; }
	// @Override
	public enterRule(listener: memcached_protocolListener): void {
		if (listener.enterStorage_command) {
			listener.enterStorage_command(this);
		}
	}
	// @Override
	public exitRule(listener: memcached_protocolListener): void {
		if (listener.exitStorage_command) {
			listener.exitStorage_command(this);
		}
	}
}


export class Storage_command_nameContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return memcached_protocolParser.RULE_storage_command_name; }
	// @Override
	public enterRule(listener: memcached_protocolListener): void {
		if (listener.enterStorage_command_name) {
			listener.enterStorage_command_name(this);
		}
	}
	// @Override
	public exitRule(listener: memcached_protocolListener): void {
		if (listener.exitStorage_command_name) {
			listener.exitStorage_command_name(this);
		}
	}
}


export class Retrieval_commandContext extends ParserRuleContext {
	public key(): KeyContext[];
	public key(i: number): KeyContext;
	public key(i?: number): KeyContext | KeyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(KeyContext);
		} else {
			return this.getRuleContext(i, KeyContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return memcached_protocolParser.RULE_retrieval_command; }
	// @Override
	public enterRule(listener: memcached_protocolListener): void {
		if (listener.enterRetrieval_command) {
			listener.enterRetrieval_command(this);
		}
	}
	// @Override
	public exitRule(listener: memcached_protocolListener): void {
		if (listener.exitRetrieval_command) {
			listener.exitRetrieval_command(this);
		}
	}
}


export class Delete_commandContext extends ParserRuleContext {
	public key(): KeyContext {
		return this.getRuleContext(0, KeyContext);
	}
	public time(): TimeContext | undefined {
		return this.tryGetRuleContext(0, TimeContext);
	}
	public noreply(): NoreplyContext | undefined {
		return this.tryGetRuleContext(0, NoreplyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return memcached_protocolParser.RULE_delete_command; }
	// @Override
	public enterRule(listener: memcached_protocolListener): void {
		if (listener.enterDelete_command) {
			listener.enterDelete_command(this);
		}
	}
	// @Override
	public exitRule(listener: memcached_protocolListener): void {
		if (listener.exitDelete_command) {
			listener.exitDelete_command(this);
		}
	}
}


export class Increment_commandContext extends ParserRuleContext {
	public key(): KeyContext {
		return this.getRuleContext(0, KeyContext);
	}
	public value(): ValueContext {
		return this.getRuleContext(0, ValueContext);
	}
	public noreply(): NoreplyContext | undefined {
		return this.tryGetRuleContext(0, NoreplyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return memcached_protocolParser.RULE_increment_command; }
	// @Override
	public enterRule(listener: memcached_protocolListener): void {
		if (listener.enterIncrement_command) {
			listener.enterIncrement_command(this);
		}
	}
	// @Override
	public exitRule(listener: memcached_protocolListener): void {
		if (listener.exitIncrement_command) {
			listener.exitIncrement_command(this);
		}
	}
}


export class Decrement_commandContext extends ParserRuleContext {
	public key(): KeyContext {
		return this.getRuleContext(0, KeyContext);
	}
	public value(): ValueContext {
		return this.getRuleContext(0, ValueContext);
	}
	public noreply(): NoreplyContext | undefined {
		return this.tryGetRuleContext(0, NoreplyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return memcached_protocolParser.RULE_decrement_command; }
	// @Override
	public enterRule(listener: memcached_protocolListener): void {
		if (listener.enterDecrement_command) {
			listener.enterDecrement_command(this);
		}
	}
	// @Override
	public exitRule(listener: memcached_protocolListener): void {
		if (listener.exitDecrement_command) {
			listener.exitDecrement_command(this);
		}
	}
}


export class Statistics_commandContext extends ParserRuleContext {
	public statistics_option(): Statistics_optionContext | undefined {
		return this.tryGetRuleContext(0, Statistics_optionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return memcached_protocolParser.RULE_statistics_command; }
	// @Override
	public enterRule(listener: memcached_protocolListener): void {
		if (listener.enterStatistics_command) {
			listener.enterStatistics_command(this);
		}
	}
	// @Override
	public exitRule(listener: memcached_protocolListener): void {
		if (listener.exitStatistics_command) {
			listener.exitStatistics_command(this);
		}
	}
}


export class Statistics_optionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return memcached_protocolParser.RULE_statistics_option; }
	// @Override
	public enterRule(listener: memcached_protocolListener): void {
		if (listener.enterStatistics_option) {
			listener.enterStatistics_option(this);
		}
	}
	// @Override
	public exitRule(listener: memcached_protocolListener): void {
		if (listener.exitStatistics_option) {
			listener.exitStatistics_option(this);
		}
	}
}


export class Flush_commandContext extends ParserRuleContext {
	public delay(): DelayContext | undefined {
		return this.tryGetRuleContext(0, DelayContext);
	}
	public noreply(): NoreplyContext | undefined {
		return this.tryGetRuleContext(0, NoreplyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return memcached_protocolParser.RULE_flush_command; }
	// @Override
	public enterRule(listener: memcached_protocolListener): void {
		if (listener.enterFlush_command) {
			listener.enterFlush_command(this);
		}
	}
	// @Override
	public exitRule(listener: memcached_protocolListener): void {
		if (listener.exitFlush_command) {
			listener.exitFlush_command(this);
		}
	}
}


export class Version_commandContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return memcached_protocolParser.RULE_version_command; }
	// @Override
	public enterRule(listener: memcached_protocolListener): void {
		if (listener.enterVersion_command) {
			listener.enterVersion_command(this);
		}
	}
	// @Override
	public exitRule(listener: memcached_protocolListener): void {
		if (listener.exitVersion_command) {
			listener.exitVersion_command(this);
		}
	}
}


export class Verbosity_commandContext extends ParserRuleContext {
	public verbosity_level(): Verbosity_levelContext {
		return this.getRuleContext(0, Verbosity_levelContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return memcached_protocolParser.RULE_verbosity_command; }
	// @Override
	public enterRule(listener: memcached_protocolListener): void {
		if (listener.enterVerbosity_command) {
			listener.enterVerbosity_command(this);
		}
	}
	// @Override
	public exitRule(listener: memcached_protocolListener): void {
		if (listener.exitVerbosity_command) {
			listener.exitVerbosity_command(this);
		}
	}
}


export class Quit_commandContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return memcached_protocolParser.RULE_quit_command; }
	// @Override
	public enterRule(listener: memcached_protocolListener): void {
		if (listener.enterQuit_command) {
			listener.enterQuit_command(this);
		}
	}
	// @Override
	public exitRule(listener: memcached_protocolListener): void {
		if (listener.exitQuit_command) {
			listener.exitQuit_command(this);
		}
	}
}


export class Storage_responseContext extends ParserRuleContext {
	public error_response(): Error_responseContext | undefined {
		return this.tryGetRuleContext(0, Error_responseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return memcached_protocolParser.RULE_storage_response; }
	// @Override
	public enterRule(listener: memcached_protocolListener): void {
		if (listener.enterStorage_response) {
			listener.enterStorage_response(this);
		}
	}
	// @Override
	public exitRule(listener: memcached_protocolListener): void {
		if (listener.exitStorage_response) {
			listener.exitStorage_response(this);
		}
	}
}


export class Retrieval_responseContext extends ParserRuleContext {
	public error_response(): Error_responseContext | undefined {
		return this.tryGetRuleContext(0, Error_responseContext);
	}
	public key(): KeyContext | undefined {
		return this.tryGetRuleContext(0, KeyContext);
	}
	public flags(): FlagsContext | undefined {
		return this.tryGetRuleContext(0, FlagsContext);
	}
	public bytes(): BytesContext | undefined {
		return this.tryGetRuleContext(0, BytesContext);
	}
	public cas_unique(): Cas_uniqueContext | undefined {
		return this.tryGetRuleContext(0, Cas_uniqueContext);
	}
	public end(): EndContext | undefined {
		return this.tryGetRuleContext(0, EndContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return memcached_protocolParser.RULE_retrieval_response; }
	// @Override
	public enterRule(listener: memcached_protocolListener): void {
		if (listener.enterRetrieval_response) {
			listener.enterRetrieval_response(this);
		}
	}
	// @Override
	public exitRule(listener: memcached_protocolListener): void {
		if (listener.exitRetrieval_response) {
			listener.exitRetrieval_response(this);
		}
	}
}


export class Deletion_responseContext extends ParserRuleContext {
	public error_response(): Error_responseContext | undefined {
		return this.tryGetRuleContext(0, Error_responseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return memcached_protocolParser.RULE_deletion_response; }
	// @Override
	public enterRule(listener: memcached_protocolListener): void {
		if (listener.enterDeletion_response) {
			listener.enterDeletion_response(this);
		}
	}
	// @Override
	public exitRule(listener: memcached_protocolListener): void {
		if (listener.exitDeletion_response) {
			listener.exitDeletion_response(this);
		}
	}
}


export class Incr_or_decr_responseContext extends ParserRuleContext {
	public error_response(): Error_responseContext | undefined {
		return this.tryGetRuleContext(0, Error_responseContext);
	}
	public INTEGER(): TerminalNode | undefined { return this.tryGetToken(memcached_protocolParser.INTEGER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return memcached_protocolParser.RULE_incr_or_decr_response; }
	// @Override
	public enterRule(listener: memcached_protocolListener): void {
		if (listener.enterIncr_or_decr_response) {
			listener.enterIncr_or_decr_response(this);
		}
	}
	// @Override
	public exitRule(listener: memcached_protocolListener): void {
		if (listener.exitIncr_or_decr_response) {
			listener.exitIncr_or_decr_response(this);
		}
	}
}


export class Statistics_responseContext extends ParserRuleContext {
	public error_response(): Error_responseContext | undefined {
		return this.tryGetRuleContext(0, Error_responseContext);
	}
	public general_statistic(): General_statisticContext | undefined {
		return this.tryGetRuleContext(0, General_statisticContext);
	}
	public size_statistic(): Size_statisticContext | undefined {
		return this.tryGetRuleContext(0, Size_statisticContext);
	}
	public end(): EndContext | undefined {
		return this.tryGetRuleContext(0, EndContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return memcached_protocolParser.RULE_statistics_response; }
	// @Override
	public enterRule(listener: memcached_protocolListener): void {
		if (listener.enterStatistics_response) {
			listener.enterStatistics_response(this);
		}
	}
	// @Override
	public exitRule(listener: memcached_protocolListener): void {
		if (listener.exitStatistics_response) {
			listener.exitStatistics_response(this);
		}
	}
}


export class Error_responseContext extends ParserRuleContext {
	public general_error(): General_errorContext | undefined {
		return this.tryGetRuleContext(0, General_errorContext);
	}
	public client_error_message(): Client_error_messageContext | undefined {
		return this.tryGetRuleContext(0, Client_error_messageContext);
	}
	public server_error_message(): Server_error_messageContext | undefined {
		return this.tryGetRuleContext(0, Server_error_messageContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return memcached_protocolParser.RULE_error_response; }
	// @Override
	public enterRule(listener: memcached_protocolListener): void {
		if (listener.enterError_response) {
			listener.enterError_response(this);
		}
	}
	// @Override
	public exitRule(listener: memcached_protocolListener): void {
		if (listener.exitError_response) {
			listener.exitError_response(this);
		}
	}
}


export class General_statisticContext extends ParserRuleContext {
	public statistic_name(): Statistic_nameContext {
		return this.getRuleContext(0, Statistic_nameContext);
	}
	public statistic_value(): Statistic_valueContext {
		return this.getRuleContext(0, Statistic_valueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return memcached_protocolParser.RULE_general_statistic; }
	// @Override
	public enterRule(listener: memcached_protocolListener): void {
		if (listener.enterGeneral_statistic) {
			listener.enterGeneral_statistic(this);
		}
	}
	// @Override
	public exitRule(listener: memcached_protocolListener): void {
		if (listener.exitGeneral_statistic) {
			listener.exitGeneral_statistic(this);
		}
	}
}


export class Size_statisticContext extends ParserRuleContext {
	public size(): SizeContext {
		return this.getRuleContext(0, SizeContext);
	}
	public count(): CountContext {
		return this.getRuleContext(0, CountContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return memcached_protocolParser.RULE_size_statistic; }
	// @Override
	public enterRule(listener: memcached_protocolListener): void {
		if (listener.enterSize_statistic) {
			listener.enterSize_statistic(this);
		}
	}
	// @Override
	public exitRule(listener: memcached_protocolListener): void {
		if (listener.exitSize_statistic) {
			listener.exitSize_statistic(this);
		}
	}
}


export class General_errorContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return memcached_protocolParser.RULE_general_error; }
	// @Override
	public enterRule(listener: memcached_protocolListener): void {
		if (listener.enterGeneral_error) {
			listener.enterGeneral_error(this);
		}
	}
	// @Override
	public exitRule(listener: memcached_protocolListener): void {
		if (listener.exitGeneral_error) {
			listener.exitGeneral_error(this);
		}
	}
}


export class Client_error_messageContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return memcached_protocolParser.RULE_client_error_message; }
	// @Override
	public enterRule(listener: memcached_protocolListener): void {
		if (listener.enterClient_error_message) {
			listener.enterClient_error_message(this);
		}
	}
	// @Override
	public exitRule(listener: memcached_protocolListener): void {
		if (listener.exitClient_error_message) {
			listener.exitClient_error_message(this);
		}
	}
}


export class Server_error_messageContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return memcached_protocolParser.RULE_server_error_message; }
	// @Override
	public enterRule(listener: memcached_protocolListener): void {
		if (listener.enterServer_error_message) {
			listener.enterServer_error_message(this);
		}
	}
	// @Override
	public exitRule(listener: memcached_protocolListener): void {
		if (listener.exitServer_error_message) {
			listener.exitServer_error_message(this);
		}
	}
}


export class EndContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return memcached_protocolParser.RULE_end; }
	// @Override
	public enterRule(listener: memcached_protocolListener): void {
		if (listener.enterEnd) {
			listener.enterEnd(this);
		}
	}
	// @Override
	public exitRule(listener: memcached_protocolListener): void {
		if (listener.exitEnd) {
			listener.exitEnd(this);
		}
	}
}


export class NoreplyContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return memcached_protocolParser.RULE_noreply; }
	// @Override
	public enterRule(listener: memcached_protocolListener): void {
		if (listener.enterNoreply) {
			listener.enterNoreply(this);
		}
	}
	// @Override
	public exitRule(listener: memcached_protocolListener): void {
		if (listener.exitNoreply) {
			listener.exitNoreply(this);
		}
	}
}


export class KeyContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return memcached_protocolParser.RULE_key; }
	// @Override
	public enterRule(listener: memcached_protocolListener): void {
		if (listener.enterKey) {
			listener.enterKey(this);
		}
	}
	// @Override
	public exitRule(listener: memcached_protocolListener): void {
		if (listener.exitKey) {
			listener.exitKey(this);
		}
	}
}


export class FlagsContext extends ParserRuleContext {
	public INTEGER(): TerminalNode { return this.getToken(memcached_protocolParser.INTEGER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return memcached_protocolParser.RULE_flags; }
	// @Override
	public enterRule(listener: memcached_protocolListener): void {
		if (listener.enterFlags) {
			listener.enterFlags(this);
		}
	}
	// @Override
	public exitRule(listener: memcached_protocolListener): void {
		if (listener.exitFlags) {
			listener.exitFlags(this);
		}
	}
}


export class ExptimeContext extends ParserRuleContext {
	public INTEGER(): TerminalNode { return this.getToken(memcached_protocolParser.INTEGER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return memcached_protocolParser.RULE_exptime; }
	// @Override
	public enterRule(listener: memcached_protocolListener): void {
		if (listener.enterExptime) {
			listener.enterExptime(this);
		}
	}
	// @Override
	public exitRule(listener: memcached_protocolListener): void {
		if (listener.exitExptime) {
			listener.exitExptime(this);
		}
	}
}


export class BytesContext extends ParserRuleContext {
	public INTEGER(): TerminalNode { return this.getToken(memcached_protocolParser.INTEGER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return memcached_protocolParser.RULE_bytes; }
	// @Override
	public enterRule(listener: memcached_protocolListener): void {
		if (listener.enterBytes) {
			listener.enterBytes(this);
		}
	}
	// @Override
	public exitRule(listener: memcached_protocolListener): void {
		if (listener.exitBytes) {
			listener.exitBytes(this);
		}
	}
}


export class Cas_uniqueContext extends ParserRuleContext {
	public INTEGER(): TerminalNode { return this.getToken(memcached_protocolParser.INTEGER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return memcached_protocolParser.RULE_cas_unique; }
	// @Override
	public enterRule(listener: memcached_protocolListener): void {
		if (listener.enterCas_unique) {
			listener.enterCas_unique(this);
		}
	}
	// @Override
	public exitRule(listener: memcached_protocolListener): void {
		if (listener.exitCas_unique) {
			listener.exitCas_unique(this);
		}
	}
}


export class ValueContext extends ParserRuleContext {
	public INTEGER(): TerminalNode { return this.getToken(memcached_protocolParser.INTEGER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return memcached_protocolParser.RULE_value; }
	// @Override
	public enterRule(listener: memcached_protocolListener): void {
		if (listener.enterValue) {
			listener.enterValue(this);
		}
	}
	// @Override
	public exitRule(listener: memcached_protocolListener): void {
		if (listener.exitValue) {
			listener.exitValue(this);
		}
	}
}


export class TimeContext extends ParserRuleContext {
	public INTEGER(): TerminalNode { return this.getToken(memcached_protocolParser.INTEGER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return memcached_protocolParser.RULE_time; }
	// @Override
	public enterRule(listener: memcached_protocolListener): void {
		if (listener.enterTime) {
			listener.enterTime(this);
		}
	}
	// @Override
	public exitRule(listener: memcached_protocolListener): void {
		if (listener.exitTime) {
			listener.exitTime(this);
		}
	}
}


export class DelayContext extends ParserRuleContext {
	public INTEGER(): TerminalNode { return this.getToken(memcached_protocolParser.INTEGER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return memcached_protocolParser.RULE_delay; }
	// @Override
	public enterRule(listener: memcached_protocolListener): void {
		if (listener.enterDelay) {
			listener.enterDelay(this);
		}
	}
	// @Override
	public exitRule(listener: memcached_protocolListener): void {
		if (listener.exitDelay) {
			listener.exitDelay(this);
		}
	}
}


export class Verbosity_levelContext extends ParserRuleContext {
	public INTEGER(): TerminalNode { return this.getToken(memcached_protocolParser.INTEGER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return memcached_protocolParser.RULE_verbosity_level; }
	// @Override
	public enterRule(listener: memcached_protocolListener): void {
		if (listener.enterVerbosity_level) {
			listener.enterVerbosity_level(this);
		}
	}
	// @Override
	public exitRule(listener: memcached_protocolListener): void {
		if (listener.exitVerbosity_level) {
			listener.exitVerbosity_level(this);
		}
	}
}


export class Statistic_nameContext extends ParserRuleContext {
	public WORD(): TerminalNode { return this.getToken(memcached_protocolParser.WORD, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return memcached_protocolParser.RULE_statistic_name; }
	// @Override
	public enterRule(listener: memcached_protocolListener): void {
		if (listener.enterStatistic_name) {
			listener.enterStatistic_name(this);
		}
	}
	// @Override
	public exitRule(listener: memcached_protocolListener): void {
		if (listener.exitStatistic_name) {
			listener.exitStatistic_name(this);
		}
	}
}


export class Statistic_valueContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return memcached_protocolParser.RULE_statistic_value; }
	// @Override
	public enterRule(listener: memcached_protocolListener): void {
		if (listener.enterStatistic_value) {
			listener.enterStatistic_value(this);
		}
	}
	// @Override
	public exitRule(listener: memcached_protocolListener): void {
		if (listener.exitStatistic_value) {
			listener.exitStatistic_value(this);
		}
	}
}


export class SizeContext extends ParserRuleContext {
	public INTEGER(): TerminalNode { return this.getToken(memcached_protocolParser.INTEGER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return memcached_protocolParser.RULE_size; }
	// @Override
	public enterRule(listener: memcached_protocolListener): void {
		if (listener.enterSize) {
			listener.enterSize(this);
		}
	}
	// @Override
	public exitRule(listener: memcached_protocolListener): void {
		if (listener.exitSize) {
			listener.exitSize(this);
		}
	}
}


export class CountContext extends ParserRuleContext {
	public INTEGER(): TerminalNode { return this.getToken(memcached_protocolParser.INTEGER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return memcached_protocolParser.RULE_count; }
	// @Override
	public enterRule(listener: memcached_protocolListener): void {
		if (listener.enterCount) {
			listener.enterCount(this);
		}
	}
	// @Override
	public exitRule(listener: memcached_protocolListener): void {
		if (listener.exitCount) {
			listener.exitCount(this);
		}
	}
}


