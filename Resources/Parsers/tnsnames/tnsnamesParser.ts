// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/tnsnames/tnsnamesParser.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { tnsnamesParserListener } from "./tnsnamesParserListener";

export class tnsnamesParser extends Parser {
	public static readonly L_PAREN = 1;
	public static readonly R_PAREN = 2;
	public static readonly L_SQUARE = 3;
	public static readonly R_SQUARE = 4;
	public static readonly EQUAL = 5;
	public static readonly DOT = 6;
	public static readonly COMMA = 7;
	public static readonly D_QUOTE = 8;
	public static readonly S_QUOTE = 9;
	public static readonly CONNECT_DATA = 10;
	public static readonly DESCRIPTION_LIST = 11;
	public static readonly DESCRIPTION = 12;
	public static readonly ADDRESS_LIST = 13;
	public static readonly ADDRESS = 14;
	public static readonly PROTOCOL = 15;
	public static readonly TCP = 16;
	public static readonly HOST = 17;
	public static readonly PORT = 18;
	public static readonly LOCAL = 19;
	public static readonly IP = 20;
	public static readonly YES_NO = 21;
	public static readonly ON_OFF = 22;
	public static readonly TRUE_FALSE = 23;
	public static readonly COMMENT = 24;
	public static readonly INT = 25;
	public static readonly OK = 26;
	public static readonly DEDICATED = 27;
	public static readonly SHARED = 28;
	public static readonly POOLED = 29;
	public static readonly LOAD_BALANCE = 30;
	public static readonly FAILOVER = 31;
	public static readonly UR = 32;
	public static readonly UR_A = 33;
	public static readonly ENABLE = 34;
	public static readonly BROKEN = 35;
	public static readonly SDU = 36;
	public static readonly RECV_BUF = 37;
	public static readonly SEND_BUF = 38;
	public static readonly SOURCE_ROUTE = 39;
	public static readonly SERVICE = 40;
	public static readonly SERVICE_TYPE = 41;
	public static readonly KEY = 42;
	public static readonly IPC = 43;
	public static readonly SPX = 44;
	public static readonly NMP = 45;
	public static readonly BEQ = 46;
	public static readonly PIPE = 47;
	public static readonly PROGRAM = 48;
	public static readonly ARGV0 = 49;
	public static readonly ARGS = 50;
	public static readonly SECURITY = 51;
	public static readonly SSL_CERT = 52;
	public static readonly CONN_TIMEOUT = 53;
	public static readonly RETRY_COUNT = 54;
	public static readonly TCT = 55;
	public static readonly IFILE = 56;
	public static readonly DQ_STRING = 57;
	public static readonly SERVICE_NAME = 58;
	public static readonly SID = 59;
	public static readonly INSTANCE_NAME = 60;
	public static readonly FAILOVER_MODE = 61;
	public static readonly GLOBAL_NAME = 62;
	public static readonly HS = 63;
	public static readonly RDB_DATABASE = 64;
	public static readonly SERVER = 65;
	public static readonly BACKUP = 66;
	public static readonly TYPE = 67;
	public static readonly SESSION = 68;
	public static readonly SELECT = 69;
	public static readonly NONE = 70;
	public static readonly METHOD = 71;
	public static readonly BASIC = 72;
	public static readonly PRECONNECT = 73;
	public static readonly RETRIES = 74;
	public static readonly DELAY = 75;
	public static readonly QUAD = 76;
	public static readonly ID = 77;
	public static readonly WS = 78;
	public static readonly I_EQUAL = 79;
	public static readonly I_STRING = 80;
	public static readonly ISQ_STRING = 81;
	public static readonly IUQ_STRING = 82;
	public static readonly I_WS = 83;
	public static readonly I_COMMENT = 84;
	public static readonly RULE_tnsnames = 0;
	public static readonly RULE_tns_entry = 1;
	public static readonly RULE_ifile = 2;
	public static readonly RULE_lsnr_entry = 3;
	public static readonly RULE_lsnr_description = 4;
	public static readonly RULE_alias_list = 5;
	public static readonly RULE_alias = 6;
	public static readonly RULE_description_list = 7;
	public static readonly RULE_dl_params = 8;
	public static readonly RULE_dl_parameter = 9;
	public static readonly RULE_description = 10;
	public static readonly RULE_d_params = 11;
	public static readonly RULE_d_parameter = 12;
	public static readonly RULE_d_enable = 13;
	public static readonly RULE_d_sdu = 14;
	public static readonly RULE_d_recv_buf = 15;
	public static readonly RULE_d_send_buf = 16;
	public static readonly RULE_d_service_type = 17;
	public static readonly RULE_d_security = 18;
	public static readonly RULE_d_conn_timeout = 19;
	public static readonly RULE_d_retry_count = 20;
	public static readonly RULE_d_tct = 21;
	public static readonly RULE_ds_parameter = 22;
	public static readonly RULE_address_list = 23;
	public static readonly RULE_al_params = 24;
	public static readonly RULE_al_parameter = 25;
	public static readonly RULE_al_failover = 26;
	public static readonly RULE_al_load_balance = 27;
	public static readonly RULE_al_source_route = 28;
	public static readonly RULE_address = 29;
	public static readonly RULE_a_params = 30;
	public static readonly RULE_a_parameter = 31;
	public static readonly RULE_protocol_info = 32;
	public static readonly RULE_tcp_protocol = 33;
	public static readonly RULE_tcp_params = 34;
	public static readonly RULE_tcp_parameter = 35;
	public static readonly RULE_tcp_host = 36;
	public static readonly RULE_tcp_port = 37;
	public static readonly RULE_tcp_tcp = 38;
	public static readonly RULE_host = 39;
	public static readonly RULE_port = 40;
	public static readonly RULE_ipc_protocol = 41;
	public static readonly RULE_ipc_params = 42;
	public static readonly RULE_ipc_parameter = 43;
	public static readonly RULE_ipc_ipc = 44;
	public static readonly RULE_ipc_key = 45;
	public static readonly RULE_spx_protocol = 46;
	public static readonly RULE_spx_params = 47;
	public static readonly RULE_spx_parameter = 48;
	public static readonly RULE_spx_spx = 49;
	public static readonly RULE_spx_service = 50;
	public static readonly RULE_nmp_protocol = 51;
	public static readonly RULE_nmp_params = 52;
	public static readonly RULE_nmp_parameter = 53;
	public static readonly RULE_nmp_nmp = 54;
	public static readonly RULE_nmp_server = 55;
	public static readonly RULE_nmp_pipe = 56;
	public static readonly RULE_beq_protocol = 57;
	public static readonly RULE_beq_params = 58;
	public static readonly RULE_beq_parameter = 59;
	public static readonly RULE_beq_beq = 60;
	public static readonly RULE_beq_program = 61;
	public static readonly RULE_beq_argv0 = 62;
	public static readonly RULE_beq_args = 63;
	public static readonly RULE_ba_parameter = 64;
	public static readonly RULE_ba_description = 65;
	public static readonly RULE_bad_params = 66;
	public static readonly RULE_bad_parameter = 67;
	public static readonly RULE_bad_local = 68;
	public static readonly RULE_bad_address = 69;
	public static readonly RULE_connect_data = 70;
	public static readonly RULE_cd_params = 71;
	public static readonly RULE_cd_parameter = 72;
	public static readonly RULE_cd_service_name = 73;
	public static readonly RULE_cd_sid = 74;
	public static readonly RULE_cd_instance_name = 75;
	public static readonly RULE_cd_failover_mode = 76;
	public static readonly RULE_cd_global_name = 77;
	public static readonly RULE_cd_hs = 78;
	public static readonly RULE_cd_rdb_database = 79;
	public static readonly RULE_cd_server = 80;
	public static readonly RULE_cd_ur = 81;
	public static readonly RULE_fo_params = 82;
	public static readonly RULE_fo_parameter = 83;
	public static readonly RULE_fo_type = 84;
	public static readonly RULE_fo_backup = 85;
	public static readonly RULE_fo_method = 86;
	public static readonly RULE_fo_retries = 87;
	public static readonly RULE_fo_delay = 88;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"tnsnames", "tns_entry", "ifile", "lsnr_entry", "lsnr_description", "alias_list", 
		"alias", "description_list", "dl_params", "dl_parameter", "description", 
		"d_params", "d_parameter", "d_enable", "d_sdu", "d_recv_buf", "d_send_buf", 
		"d_service_type", "d_security", "d_conn_timeout", "d_retry_count", "d_tct", 
		"ds_parameter", "address_list", "al_params", "al_parameter", "al_failover", 
		"al_load_balance", "al_source_route", "address", "a_params", "a_parameter", 
		"protocol_info", "tcp_protocol", "tcp_params", "tcp_parameter", "tcp_host", 
		"tcp_port", "tcp_tcp", "host", "port", "ipc_protocol", "ipc_params", "ipc_parameter", 
		"ipc_ipc", "ipc_key", "spx_protocol", "spx_params", "spx_parameter", "spx_spx", 
		"spx_service", "nmp_protocol", "nmp_params", "nmp_parameter", "nmp_nmp", 
		"nmp_server", "nmp_pipe", "beq_protocol", "beq_params", "beq_parameter", 
		"beq_beq", "beq_program", "beq_argv0", "beq_args", "ba_parameter", "ba_description", 
		"bad_params", "bad_parameter", "bad_local", "bad_address", "connect_data", 
		"cd_params", "cd_parameter", "cd_service_name", "cd_sid", "cd_instance_name", 
		"cd_failover_mode", "cd_global_name", "cd_hs", "cd_rdb_database", "cd_server", 
		"cd_ur", "fo_params", "fo_parameter", "fo_type", "fo_backup", "fo_method", 
		"fo_retries", "fo_delay",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'('", "')'", "'['", "']'", undefined, "'.'", "','", "'\"'", 
		"'''",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "L_PAREN", "R_PAREN", "L_SQUARE", "R_SQUARE", "EQUAL", "DOT", 
		"COMMA", "D_QUOTE", "S_QUOTE", "CONNECT_DATA", "DESCRIPTION_LIST", "DESCRIPTION", 
		"ADDRESS_LIST", "ADDRESS", "PROTOCOL", "TCP", "HOST", "PORT", "LOCAL", 
		"IP", "YES_NO", "ON_OFF", "TRUE_FALSE", "COMMENT", "INT", "OK", "DEDICATED", 
		"SHARED", "POOLED", "LOAD_BALANCE", "FAILOVER", "UR", "UR_A", "ENABLE", 
		"BROKEN", "SDU", "RECV_BUF", "SEND_BUF", "SOURCE_ROUTE", "SERVICE", "SERVICE_TYPE", 
		"KEY", "IPC", "SPX", "NMP", "BEQ", "PIPE", "PROGRAM", "ARGV0", "ARGS", 
		"SECURITY", "SSL_CERT", "CONN_TIMEOUT", "RETRY_COUNT", "TCT", "IFILE", 
		"DQ_STRING", "SERVICE_NAME", "SID", "INSTANCE_NAME", "FAILOVER_MODE", 
		"GLOBAL_NAME", "HS", "RDB_DATABASE", "SERVER", "BACKUP", "TYPE", "SESSION", 
		"SELECT", "NONE", "METHOD", "BASIC", "PRECONNECT", "RETRIES", "DELAY", 
		"QUAD", "ID", "WS", "I_EQUAL", "I_STRING", "ISQ_STRING", "IUQ_STRING", 
		"I_WS", "I_COMMENT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(tnsnamesParser._LITERAL_NAMES, tnsnamesParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return tnsnamesParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "tnsnamesParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return tnsnamesParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return tnsnamesParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(tnsnamesParser._ATN, this);
	}
	// @RuleVersion(0)
	public tnsnames(): TnsnamesContext {
		let _localctx: TnsnamesContext = new TnsnamesContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, tnsnamesParser.RULE_tnsnames);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 183;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === tnsnamesParser.IFILE || _la === tnsnamesParser.ID) {
				{
				this.state = 181;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
				case 1:
					{
					this.state = 178;
					this.tns_entry();
					}
					break;

				case 2:
					{
					this.state = 179;
					this.ifile();
					}
					break;

				case 3:
					{
					this.state = 180;
					this.lsnr_entry();
					}
					break;
				}
				}
				this.state = 185;
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
	public tns_entry(): Tns_entryContext {
		let _localctx: Tns_entryContext = new Tns_entryContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, tnsnamesParser.RULE_tns_entry);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 186;
			this.alias_list();
			this.state = 187;
			this.match(tnsnamesParser.EQUAL);
			this.state = 190;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				{
				this.state = 188;
				this.description_list();
				}
				break;

			case 2:
				{
				this.state = 189;
				this.description();
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
	public ifile(): IfileContext {
		let _localctx: IfileContext = new IfileContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, tnsnamesParser.RULE_ifile);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 192;
			this.match(tnsnamesParser.IFILE);
			this.state = 193;
			this.match(tnsnamesParser.I_EQUAL);
			this.state = 194;
			this.match(tnsnamesParser.I_STRING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lsnr_entry(): Lsnr_entryContext {
		let _localctx: Lsnr_entryContext = new Lsnr_entryContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, tnsnamesParser.RULE_lsnr_entry);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 196;
			this.alias();
			this.state = 197;
			this.match(tnsnamesParser.EQUAL);
			this.state = 205;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				{
				this.state = 198;
				this.lsnr_description();
				}
				break;

			case 2:
				{
				this.state = 199;
				this.address_list();
				}
				break;

			case 3:
				{
				this.state = 201;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 200;
					this.address();
					}
					}
					this.state = 203;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === tnsnamesParser.L_PAREN);
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
	public lsnr_description(): Lsnr_descriptionContext {
		let _localctx: Lsnr_descriptionContext = new Lsnr_descriptionContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, tnsnamesParser.RULE_lsnr_description);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 207;
			this.match(tnsnamesParser.L_PAREN);
			this.state = 208;
			this.match(tnsnamesParser.DESCRIPTION);
			this.state = 209;
			this.match(tnsnamesParser.EQUAL);
			this.state = 216;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				{
				this.state = 210;
				this.address_list();
				}
				break;

			case 2:
				{
				this.state = 212;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 211;
					this.address();
					}
					}
					this.state = 214;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === tnsnamesParser.L_PAREN);
				}
				break;
			}
			this.state = 218;
			this.match(tnsnamesParser.R_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public alias_list(): Alias_listContext {
		let _localctx: Alias_listContext = new Alias_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, tnsnamesParser.RULE_alias_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 220;
			this.alias();
			this.state = 225;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === tnsnamesParser.COMMA) {
				{
				{
				this.state = 221;
				this.match(tnsnamesParser.COMMA);
				this.state = 222;
				this.alias();
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
	public alias(): AliasContext {
		let _localctx: AliasContext = new AliasContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, tnsnamesParser.RULE_alias);
		let _la: number;
		try {
			this.state = 236;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 228;
				this.match(tnsnamesParser.ID);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 229;
				this.match(tnsnamesParser.ID);
				this.state = 232;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 230;
					this.match(tnsnamesParser.DOT);
					this.state = 231;
					this.match(tnsnamesParser.ID);
					}
					}
					this.state = 234;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === tnsnamesParser.DOT);
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
	public description_list(): Description_listContext {
		let _localctx: Description_listContext = new Description_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, tnsnamesParser.RULE_description_list);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 238;
			this.match(tnsnamesParser.L_PAREN);
			this.state = 239;
			this.match(tnsnamesParser.DESCRIPTION_LIST);
			this.state = 240;
			this.match(tnsnamesParser.EQUAL);
			this.state = 242;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				{
				this.state = 241;
				this.dl_params();
				}
				break;
			}
			this.state = 245;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 244;
					this.description();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 247;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 250;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === tnsnamesParser.L_PAREN) {
				{
				this.state = 249;
				this.dl_params();
				}
			}

			this.state = 252;
			this.match(tnsnamesParser.R_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dl_params(): Dl_paramsContext {
		let _localctx: Dl_paramsContext = new Dl_paramsContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, tnsnamesParser.RULE_dl_params);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 255;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 254;
					this.dl_parameter();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 257;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
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
	public dl_parameter(): Dl_parameterContext {
		let _localctx: Dl_parameterContext = new Dl_parameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, tnsnamesParser.RULE_dl_parameter);
		try {
			this.state = 262;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 259;
				this.al_failover();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 260;
				this.al_load_balance();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 261;
				this.al_source_route();
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
	public description(): DescriptionContext {
		let _localctx: DescriptionContext = new DescriptionContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, tnsnamesParser.RULE_description);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 264;
			this.match(tnsnamesParser.L_PAREN);
			this.state = 265;
			this.match(tnsnamesParser.DESCRIPTION);
			this.state = 266;
			this.match(tnsnamesParser.EQUAL);
			this.state = 268;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
			case 1:
				{
				this.state = 267;
				this.d_params();
				}
				break;
			}
			this.state = 276;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
			case 1:
				{
				this.state = 270;
				this.address_list();
				}
				break;

			case 2:
				{
				this.state = 272;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 271;
						this.address();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 274;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			}
			this.state = 279;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 18, this._ctx) ) {
			case 1:
				{
				this.state = 278;
				this.d_params();
				}
				break;
			}
			this.state = 281;
			this.connect_data();
			this.state = 283;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === tnsnamesParser.L_PAREN) {
				{
				this.state = 282;
				this.d_params();
				}
			}

			this.state = 285;
			this.match(tnsnamesParser.R_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public d_params(): D_paramsContext {
		let _localctx: D_paramsContext = new D_paramsContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, tnsnamesParser.RULE_d_params);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 288;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 287;
					this.d_parameter();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 290;
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
	// @RuleVersion(0)
	public d_parameter(): D_parameterContext {
		let _localctx: D_parameterContext = new D_parameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, tnsnamesParser.RULE_d_parameter);
		try {
			this.state = 304;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 292;
				this.d_enable();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 293;
				this.al_failover();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 294;
				this.al_load_balance();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 295;
				this.d_sdu();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 296;
				this.d_recv_buf();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 297;
				this.d_send_buf();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 298;
				this.al_source_route();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 299;
				this.d_service_type();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 300;
				this.d_security();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 301;
				this.d_conn_timeout();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 302;
				this.d_retry_count();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 303;
				this.d_tct();
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
	public d_enable(): D_enableContext {
		let _localctx: D_enableContext = new D_enableContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, tnsnamesParser.RULE_d_enable);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 306;
			this.match(tnsnamesParser.L_PAREN);
			this.state = 307;
			this.match(tnsnamesParser.ENABLE);
			this.state = 308;
			this.match(tnsnamesParser.EQUAL);
			this.state = 309;
			this.match(tnsnamesParser.BROKEN);
			this.state = 310;
			this.match(tnsnamesParser.R_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public d_sdu(): D_sduContext {
		let _localctx: D_sduContext = new D_sduContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, tnsnamesParser.RULE_d_sdu);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 312;
			this.match(tnsnamesParser.L_PAREN);
			this.state = 313;
			this.match(tnsnamesParser.SDU);
			this.state = 314;
			this.match(tnsnamesParser.EQUAL);
			this.state = 315;
			this.match(tnsnamesParser.INT);
			this.state = 316;
			this.match(tnsnamesParser.R_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public d_recv_buf(): D_recv_bufContext {
		let _localctx: D_recv_bufContext = new D_recv_bufContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, tnsnamesParser.RULE_d_recv_buf);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 318;
			this.match(tnsnamesParser.L_PAREN);
			this.state = 319;
			this.match(tnsnamesParser.RECV_BUF);
			this.state = 320;
			this.match(tnsnamesParser.EQUAL);
			this.state = 321;
			this.match(tnsnamesParser.INT);
			this.state = 322;
			this.match(tnsnamesParser.R_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public d_send_buf(): D_send_bufContext {
		let _localctx: D_send_bufContext = new D_send_bufContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, tnsnamesParser.RULE_d_send_buf);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 324;
			this.match(tnsnamesParser.L_PAREN);
			this.state = 325;
			this.match(tnsnamesParser.SEND_BUF);
			this.state = 326;
			this.match(tnsnamesParser.EQUAL);
			this.state = 327;
			this.match(tnsnamesParser.INT);
			this.state = 328;
			this.match(tnsnamesParser.R_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public d_service_type(): D_service_typeContext {
		let _localctx: D_service_typeContext = new D_service_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, tnsnamesParser.RULE_d_service_type);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 330;
			this.match(tnsnamesParser.L_PAREN);
			this.state = 331;
			this.match(tnsnamesParser.SERVICE_TYPE);
			this.state = 332;
			this.match(tnsnamesParser.EQUAL);
			this.state = 333;
			this.match(tnsnamesParser.ID);
			this.state = 334;
			this.match(tnsnamesParser.R_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public d_security(): D_securityContext {
		let _localctx: D_securityContext = new D_securityContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, tnsnamesParser.RULE_d_security);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 336;
			this.match(tnsnamesParser.L_PAREN);
			this.state = 337;
			this.match(tnsnamesParser.SECURITY);
			this.state = 338;
			this.match(tnsnamesParser.EQUAL);
			this.state = 339;
			this.ds_parameter();
			this.state = 340;
			this.match(tnsnamesParser.R_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public d_conn_timeout(): D_conn_timeoutContext {
		let _localctx: D_conn_timeoutContext = new D_conn_timeoutContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, tnsnamesParser.RULE_d_conn_timeout);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 342;
			this.match(tnsnamesParser.L_PAREN);
			this.state = 343;
			this.match(tnsnamesParser.CONN_TIMEOUT);
			this.state = 344;
			this.match(tnsnamesParser.EQUAL);
			this.state = 345;
			this.match(tnsnamesParser.INT);
			this.state = 346;
			this.match(tnsnamesParser.R_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public d_retry_count(): D_retry_countContext {
		let _localctx: D_retry_countContext = new D_retry_countContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, tnsnamesParser.RULE_d_retry_count);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 348;
			this.match(tnsnamesParser.L_PAREN);
			this.state = 349;
			this.match(tnsnamesParser.RETRY_COUNT);
			this.state = 350;
			this.match(tnsnamesParser.EQUAL);
			this.state = 351;
			this.match(tnsnamesParser.INT);
			this.state = 352;
			this.match(tnsnamesParser.R_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public d_tct(): D_tctContext {
		let _localctx: D_tctContext = new D_tctContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, tnsnamesParser.RULE_d_tct);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 354;
			this.match(tnsnamesParser.L_PAREN);
			this.state = 355;
			this.match(tnsnamesParser.TCT);
			this.state = 356;
			this.match(tnsnamesParser.EQUAL);
			this.state = 357;
			this.match(tnsnamesParser.INT);
			this.state = 358;
			this.match(tnsnamesParser.R_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ds_parameter(): Ds_parameterContext {
		let _localctx: Ds_parameterContext = new Ds_parameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, tnsnamesParser.RULE_ds_parameter);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 360;
			this.match(tnsnamesParser.L_PAREN);
			this.state = 361;
			this.match(tnsnamesParser.SSL_CERT);
			this.state = 362;
			this.match(tnsnamesParser.EQUAL);
			this.state = 363;
			this.match(tnsnamesParser.DQ_STRING);
			this.state = 364;
			this.match(tnsnamesParser.R_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public address_list(): Address_listContext {
		let _localctx: Address_listContext = new Address_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, tnsnamesParser.RULE_address_list);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 366;
			this.match(tnsnamesParser.L_PAREN);
			this.state = 367;
			this.match(tnsnamesParser.ADDRESS_LIST);
			this.state = 368;
			this.match(tnsnamesParser.EQUAL);
			this.state = 370;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
			case 1:
				{
				this.state = 369;
				this.al_params();
				}
				break;
			}
			this.state = 373;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 372;
					this.address();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 375;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 378;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === tnsnamesParser.L_PAREN) {
				{
				this.state = 377;
				this.al_params();
				}
			}

			this.state = 380;
			this.match(tnsnamesParser.R_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public al_params(): Al_paramsContext {
		let _localctx: Al_paramsContext = new Al_paramsContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, tnsnamesParser.RULE_al_params);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 383;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 382;
					this.al_parameter();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 385;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
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
	public al_parameter(): Al_parameterContext {
		let _localctx: Al_parameterContext = new Al_parameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, tnsnamesParser.RULE_al_parameter);
		try {
			this.state = 390;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 26, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 387;
				this.al_failover();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 388;
				this.al_load_balance();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 389;
				this.al_source_route();
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
	public al_failover(): Al_failoverContext {
		let _localctx: Al_failoverContext = new Al_failoverContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, tnsnamesParser.RULE_al_failover);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 392;
			this.match(tnsnamesParser.L_PAREN);
			this.state = 393;
			this.match(tnsnamesParser.FAILOVER);
			this.state = 394;
			this.match(tnsnamesParser.EQUAL);
			this.state = 395;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << tnsnamesParser.YES_NO) | (1 << tnsnamesParser.ON_OFF) | (1 << tnsnamesParser.TRUE_FALSE))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 396;
			this.match(tnsnamesParser.R_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public al_load_balance(): Al_load_balanceContext {
		let _localctx: Al_load_balanceContext = new Al_load_balanceContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, tnsnamesParser.RULE_al_load_balance);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 398;
			this.match(tnsnamesParser.L_PAREN);
			this.state = 399;
			this.match(tnsnamesParser.LOAD_BALANCE);
			this.state = 400;
			this.match(tnsnamesParser.EQUAL);
			this.state = 401;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << tnsnamesParser.YES_NO) | (1 << tnsnamesParser.ON_OFF) | (1 << tnsnamesParser.TRUE_FALSE))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 402;
			this.match(tnsnamesParser.R_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public al_source_route(): Al_source_routeContext {
		let _localctx: Al_source_routeContext = new Al_source_routeContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, tnsnamesParser.RULE_al_source_route);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 404;
			this.match(tnsnamesParser.L_PAREN);
			this.state = 405;
			this.match(tnsnamesParser.SOURCE_ROUTE);
			this.state = 406;
			this.match(tnsnamesParser.EQUAL);
			this.state = 407;
			_la = this._input.LA(1);
			if (!(_la === tnsnamesParser.YES_NO || _la === tnsnamesParser.ON_OFF)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 408;
			this.match(tnsnamesParser.R_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public address(): AddressContext {
		let _localctx: AddressContext = new AddressContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, tnsnamesParser.RULE_address);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 410;
			this.match(tnsnamesParser.L_PAREN);
			this.state = 411;
			this.match(tnsnamesParser.ADDRESS);
			this.state = 412;
			this.match(tnsnamesParser.EQUAL);
			this.state = 413;
			this.protocol_info();
			this.state = 415;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === tnsnamesParser.L_PAREN) {
				{
				this.state = 414;
				this.a_params();
				}
			}

			this.state = 417;
			this.match(tnsnamesParser.R_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public a_params(): A_paramsContext {
		let _localctx: A_paramsContext = new A_paramsContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, tnsnamesParser.RULE_a_params);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 420;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 419;
				this.a_parameter();
				}
				}
				this.state = 422;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === tnsnamesParser.L_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public a_parameter(): A_parameterContext {
		let _localctx: A_parameterContext = new A_parameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, tnsnamesParser.RULE_a_parameter);
		try {
			this.state = 426;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 29, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 424;
				this.d_send_buf();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 425;
				this.d_recv_buf();
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
	public protocol_info(): Protocol_infoContext {
		let _localctx: Protocol_infoContext = new Protocol_infoContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, tnsnamesParser.RULE_protocol_info);
		try {
			this.state = 433;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 428;
				this.tcp_protocol();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 429;
				this.ipc_protocol();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 430;
				this.spx_protocol();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 431;
				this.nmp_protocol();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 432;
				this.beq_protocol();
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
	public tcp_protocol(): Tcp_protocolContext {
		let _localctx: Tcp_protocolContext = new Tcp_protocolContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, tnsnamesParser.RULE_tcp_protocol);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 435;
			this.tcp_params();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tcp_params(): Tcp_paramsContext {
		let _localctx: Tcp_paramsContext = new Tcp_paramsContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, tnsnamesParser.RULE_tcp_params);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 438;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 437;
					this.tcp_parameter();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 440;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
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
	public tcp_parameter(): Tcp_parameterContext {
		let _localctx: Tcp_parameterContext = new Tcp_parameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, tnsnamesParser.RULE_tcp_parameter);
		try {
			this.state = 445;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 32, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 442;
				this.tcp_host();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 443;
				this.tcp_port();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 444;
				this.tcp_tcp();
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
	public tcp_host(): Tcp_hostContext {
		let _localctx: Tcp_hostContext = new Tcp_hostContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, tnsnamesParser.RULE_tcp_host);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 447;
			this.match(tnsnamesParser.L_PAREN);
			this.state = 448;
			this.match(tnsnamesParser.HOST);
			this.state = 449;
			this.match(tnsnamesParser.EQUAL);
			this.state = 450;
			this.host();
			this.state = 451;
			this.match(tnsnamesParser.R_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tcp_port(): Tcp_portContext {
		let _localctx: Tcp_portContext = new Tcp_portContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, tnsnamesParser.RULE_tcp_port);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 453;
			this.match(tnsnamesParser.L_PAREN);
			this.state = 454;
			this.match(tnsnamesParser.PORT);
			this.state = 455;
			this.match(tnsnamesParser.EQUAL);
			this.state = 456;
			this.port();
			this.state = 457;
			this.match(tnsnamesParser.R_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tcp_tcp(): Tcp_tcpContext {
		let _localctx: Tcp_tcpContext = new Tcp_tcpContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, tnsnamesParser.RULE_tcp_tcp);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 459;
			this.match(tnsnamesParser.L_PAREN);
			this.state = 460;
			this.match(tnsnamesParser.PROTOCOL);
			this.state = 461;
			this.match(tnsnamesParser.EQUAL);
			this.state = 462;
			this.match(tnsnamesParser.TCP);
			this.state = 463;
			this.match(tnsnamesParser.R_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public host(): HostContext {
		let _localctx: HostContext = new HostContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, tnsnamesParser.RULE_host);
		let _la: number;
		try {
			this.state = 474;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 34, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 465;
				this.match(tnsnamesParser.ID);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 466;
				this.match(tnsnamesParser.ID);
				this.state = 469;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 467;
					this.match(tnsnamesParser.DOT);
					this.state = 468;
					this.match(tnsnamesParser.ID);
					}
					}
					this.state = 471;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === tnsnamesParser.DOT);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 473;
				this.match(tnsnamesParser.IP);
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
	public port(): PortContext {
		let _localctx: PortContext = new PortContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, tnsnamesParser.RULE_port);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 476;
			this.match(tnsnamesParser.INT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ipc_protocol(): Ipc_protocolContext {
		let _localctx: Ipc_protocolContext = new Ipc_protocolContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, tnsnamesParser.RULE_ipc_protocol);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 478;
			this.ipc_params();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ipc_params(): Ipc_paramsContext {
		let _localctx: Ipc_paramsContext = new Ipc_paramsContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, tnsnamesParser.RULE_ipc_params);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 481;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 480;
					this.ipc_parameter();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 483;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
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
	public ipc_parameter(): Ipc_parameterContext {
		let _localctx: Ipc_parameterContext = new Ipc_parameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, tnsnamesParser.RULE_ipc_parameter);
		try {
			this.state = 487;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 36, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 485;
				this.ipc_ipc();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 486;
				this.ipc_key();
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
	public ipc_ipc(): Ipc_ipcContext {
		let _localctx: Ipc_ipcContext = new Ipc_ipcContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, tnsnamesParser.RULE_ipc_ipc);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 489;
			this.match(tnsnamesParser.L_PAREN);
			this.state = 490;
			this.match(tnsnamesParser.PROTOCOL);
			this.state = 491;
			this.match(tnsnamesParser.EQUAL);
			this.state = 492;
			this.match(tnsnamesParser.IPC);
			this.state = 493;
			this.match(tnsnamesParser.R_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ipc_key(): Ipc_keyContext {
		let _localctx: Ipc_keyContext = new Ipc_keyContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, tnsnamesParser.RULE_ipc_key);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 495;
			this.match(tnsnamesParser.L_PAREN);
			this.state = 496;
			this.match(tnsnamesParser.KEY);
			this.state = 497;
			this.match(tnsnamesParser.EQUAL);
			this.state = 498;
			this.match(tnsnamesParser.ID);
			this.state = 499;
			this.match(tnsnamesParser.R_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public spx_protocol(): Spx_protocolContext {
		let _localctx: Spx_protocolContext = new Spx_protocolContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, tnsnamesParser.RULE_spx_protocol);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 501;
			this.spx_params();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public spx_params(): Spx_paramsContext {
		let _localctx: Spx_paramsContext = new Spx_paramsContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, tnsnamesParser.RULE_spx_params);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 504;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 503;
					this.spx_parameter();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 506;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 37, this._ctx);
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
	public spx_parameter(): Spx_parameterContext {
		let _localctx: Spx_parameterContext = new Spx_parameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, tnsnamesParser.RULE_spx_parameter);
		try {
			this.state = 510;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 38, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 508;
				this.spx_spx();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 509;
				this.spx_service();
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
	public spx_spx(): Spx_spxContext {
		let _localctx: Spx_spxContext = new Spx_spxContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, tnsnamesParser.RULE_spx_spx);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 512;
			this.match(tnsnamesParser.L_PAREN);
			this.state = 513;
			this.match(tnsnamesParser.PROTOCOL);
			this.state = 514;
			this.match(tnsnamesParser.EQUAL);
			this.state = 515;
			this.match(tnsnamesParser.SPX);
			this.state = 516;
			this.match(tnsnamesParser.R_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public spx_service(): Spx_serviceContext {
		let _localctx: Spx_serviceContext = new Spx_serviceContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, tnsnamesParser.RULE_spx_service);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 518;
			this.match(tnsnamesParser.L_PAREN);
			this.state = 519;
			this.match(tnsnamesParser.SERVICE);
			this.state = 520;
			this.match(tnsnamesParser.EQUAL);
			this.state = 521;
			this.match(tnsnamesParser.ID);
			this.state = 522;
			this.match(tnsnamesParser.R_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nmp_protocol(): Nmp_protocolContext {
		let _localctx: Nmp_protocolContext = new Nmp_protocolContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, tnsnamesParser.RULE_nmp_protocol);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 524;
			this.nmp_params();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nmp_params(): Nmp_paramsContext {
		let _localctx: Nmp_paramsContext = new Nmp_paramsContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, tnsnamesParser.RULE_nmp_params);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 527;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 526;
					this.nmp_parameter();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 529;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 39, this._ctx);
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
	public nmp_parameter(): Nmp_parameterContext {
		let _localctx: Nmp_parameterContext = new Nmp_parameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, tnsnamesParser.RULE_nmp_parameter);
		try {
			this.state = 534;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 40, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 531;
				this.nmp_nmp();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 532;
				this.nmp_server();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 533;
				this.nmp_pipe();
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
	public nmp_nmp(): Nmp_nmpContext {
		let _localctx: Nmp_nmpContext = new Nmp_nmpContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, tnsnamesParser.RULE_nmp_nmp);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 536;
			this.match(tnsnamesParser.L_PAREN);
			this.state = 537;
			this.match(tnsnamesParser.PROTOCOL);
			this.state = 538;
			this.match(tnsnamesParser.EQUAL);
			this.state = 539;
			this.match(tnsnamesParser.NMP);
			this.state = 540;
			this.match(tnsnamesParser.R_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nmp_server(): Nmp_serverContext {
		let _localctx: Nmp_serverContext = new Nmp_serverContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, tnsnamesParser.RULE_nmp_server);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 542;
			this.match(tnsnamesParser.L_PAREN);
			this.state = 543;
			this.match(tnsnamesParser.SERVER);
			this.state = 544;
			this.match(tnsnamesParser.EQUAL);
			this.state = 545;
			this.match(tnsnamesParser.ID);
			this.state = 546;
			this.match(tnsnamesParser.R_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nmp_pipe(): Nmp_pipeContext {
		let _localctx: Nmp_pipeContext = new Nmp_pipeContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, tnsnamesParser.RULE_nmp_pipe);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 548;
			this.match(tnsnamesParser.L_PAREN);
			this.state = 549;
			this.match(tnsnamesParser.PIPE);
			this.state = 550;
			this.match(tnsnamesParser.EQUAL);
			this.state = 551;
			this.match(tnsnamesParser.ID);
			this.state = 552;
			this.match(tnsnamesParser.R_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public beq_protocol(): Beq_protocolContext {
		let _localctx: Beq_protocolContext = new Beq_protocolContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, tnsnamesParser.RULE_beq_protocol);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 554;
			this.beq_params();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public beq_params(): Beq_paramsContext {
		let _localctx: Beq_paramsContext = new Beq_paramsContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, tnsnamesParser.RULE_beq_params);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 557;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 556;
					this.beq_parameter();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 559;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
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
	public beq_parameter(): Beq_parameterContext {
		let _localctx: Beq_parameterContext = new Beq_parameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, tnsnamesParser.RULE_beq_parameter);
		try {
			this.state = 565;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 42, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 561;
				this.beq_beq();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 562;
				this.beq_program();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 563;
				this.beq_argv0();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 564;
				this.beq_args();
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
	public beq_beq(): Beq_beqContext {
		let _localctx: Beq_beqContext = new Beq_beqContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, tnsnamesParser.RULE_beq_beq);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 567;
			this.match(tnsnamesParser.L_PAREN);
			this.state = 568;
			this.match(tnsnamesParser.PROTOCOL);
			this.state = 569;
			this.match(tnsnamesParser.EQUAL);
			this.state = 570;
			this.match(tnsnamesParser.BEQ);
			this.state = 571;
			this.match(tnsnamesParser.R_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public beq_program(): Beq_programContext {
		let _localctx: Beq_programContext = new Beq_programContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, tnsnamesParser.RULE_beq_program);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 573;
			this.match(tnsnamesParser.L_PAREN);
			this.state = 574;
			this.match(tnsnamesParser.PROGRAM);
			this.state = 575;
			this.match(tnsnamesParser.EQUAL);
			this.state = 576;
			this.match(tnsnamesParser.ID);
			this.state = 577;
			this.match(tnsnamesParser.R_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public beq_argv0(): Beq_argv0Context {
		let _localctx: Beq_argv0Context = new Beq_argv0Context(this._ctx, this.state);
		this.enterRule(_localctx, 124, tnsnamesParser.RULE_beq_argv0);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 579;
			this.match(tnsnamesParser.L_PAREN);
			this.state = 580;
			this.match(tnsnamesParser.ARGV0);
			this.state = 581;
			this.match(tnsnamesParser.EQUAL);
			this.state = 582;
			this.match(tnsnamesParser.ID);
			this.state = 583;
			this.match(tnsnamesParser.R_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public beq_args(): Beq_argsContext {
		let _localctx: Beq_argsContext = new Beq_argsContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, tnsnamesParser.RULE_beq_args);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 585;
			this.match(tnsnamesParser.L_PAREN);
			this.state = 586;
			this.match(tnsnamesParser.ARGS);
			this.state = 587;
			this.match(tnsnamesParser.EQUAL);
			this.state = 588;
			this.ba_parameter();
			this.state = 589;
			this.match(tnsnamesParser.R_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ba_parameter(): Ba_parameterContext {
		let _localctx: Ba_parameterContext = new Ba_parameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, tnsnamesParser.RULE_ba_parameter);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 591;
			this.match(tnsnamesParser.S_QUOTE);
			this.state = 592;
			this.ba_description();
			this.state = 593;
			this.match(tnsnamesParser.S_QUOTE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ba_description(): Ba_descriptionContext {
		let _localctx: Ba_descriptionContext = new Ba_descriptionContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, tnsnamesParser.RULE_ba_description);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 595;
			this.match(tnsnamesParser.L_PAREN);
			this.state = 596;
			this.match(tnsnamesParser.DESCRIPTION);
			this.state = 597;
			this.match(tnsnamesParser.EQUAL);
			this.state = 598;
			this.bad_params();
			this.state = 599;
			this.match(tnsnamesParser.R_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public bad_params(): Bad_paramsContext {
		let _localctx: Bad_paramsContext = new Bad_paramsContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, tnsnamesParser.RULE_bad_params);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 602;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 601;
				this.bad_parameter();
				}
				}
				this.state = 604;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === tnsnamesParser.L_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public bad_parameter(): Bad_parameterContext {
		let _localctx: Bad_parameterContext = new Bad_parameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, tnsnamesParser.RULE_bad_parameter);
		try {
			this.state = 608;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 44, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 606;
				this.bad_local();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 607;
				this.bad_address();
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
	public bad_local(): Bad_localContext {
		let _localctx: Bad_localContext = new Bad_localContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, tnsnamesParser.RULE_bad_local);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 610;
			this.match(tnsnamesParser.L_PAREN);
			this.state = 611;
			this.match(tnsnamesParser.LOCAL);
			this.state = 612;
			this.match(tnsnamesParser.EQUAL);
			this.state = 613;
			this.match(tnsnamesParser.YES_NO);
			this.state = 614;
			this.match(tnsnamesParser.R_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public bad_address(): Bad_addressContext {
		let _localctx: Bad_addressContext = new Bad_addressContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, tnsnamesParser.RULE_bad_address);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 616;
			this.match(tnsnamesParser.L_PAREN);
			this.state = 617;
			this.match(tnsnamesParser.ADDRESS);
			this.state = 618;
			this.match(tnsnamesParser.EQUAL);
			this.state = 619;
			this.beq_beq();
			this.state = 620;
			this.match(tnsnamesParser.R_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public connect_data(): Connect_dataContext {
		let _localctx: Connect_dataContext = new Connect_dataContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, tnsnamesParser.RULE_connect_data);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 622;
			this.match(tnsnamesParser.L_PAREN);
			this.state = 623;
			this.match(tnsnamesParser.CONNECT_DATA);
			this.state = 624;
			this.match(tnsnamesParser.EQUAL);
			this.state = 625;
			this.cd_params();
			this.state = 626;
			this.match(tnsnamesParser.R_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cd_params(): Cd_paramsContext {
		let _localctx: Cd_paramsContext = new Cd_paramsContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, tnsnamesParser.RULE_cd_params);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 629;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 628;
				this.cd_parameter();
				}
				}
				this.state = 631;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === tnsnamesParser.L_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cd_parameter(): Cd_parameterContext {
		let _localctx: Cd_parameterContext = new Cd_parameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, tnsnamesParser.RULE_cd_parameter);
		try {
			this.state = 642;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 46, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 633;
				this.cd_service_name();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 634;
				this.cd_sid();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 635;
				this.cd_instance_name();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 636;
				this.cd_failover_mode();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 637;
				this.cd_global_name();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 638;
				this.cd_hs();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 639;
				this.cd_rdb_database();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 640;
				this.cd_server();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 641;
				this.cd_ur();
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
	public cd_service_name(): Cd_service_nameContext {
		let _localctx: Cd_service_nameContext = new Cd_service_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, tnsnamesParser.RULE_cd_service_name);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 644;
			this.match(tnsnamesParser.L_PAREN);
			this.state = 645;
			this.match(tnsnamesParser.SERVICE_NAME);
			this.state = 646;
			this.match(tnsnamesParser.EQUAL);
			this.state = 647;
			this.match(tnsnamesParser.ID);
			this.state = 652;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === tnsnamesParser.DOT) {
				{
				{
				this.state = 648;
				this.match(tnsnamesParser.DOT);
				this.state = 649;
				this.match(tnsnamesParser.ID);
				}
				}
				this.state = 654;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 655;
			this.match(tnsnamesParser.R_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cd_sid(): Cd_sidContext {
		let _localctx: Cd_sidContext = new Cd_sidContext(this._ctx, this.state);
		this.enterRule(_localctx, 148, tnsnamesParser.RULE_cd_sid);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 657;
			this.match(tnsnamesParser.L_PAREN);
			this.state = 658;
			this.match(tnsnamesParser.SID);
			this.state = 659;
			this.match(tnsnamesParser.EQUAL);
			this.state = 660;
			this.match(tnsnamesParser.ID);
			this.state = 661;
			this.match(tnsnamesParser.R_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cd_instance_name(): Cd_instance_nameContext {
		let _localctx: Cd_instance_nameContext = new Cd_instance_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, tnsnamesParser.RULE_cd_instance_name);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 663;
			this.match(tnsnamesParser.L_PAREN);
			this.state = 664;
			this.match(tnsnamesParser.INSTANCE_NAME);
			this.state = 665;
			this.match(tnsnamesParser.EQUAL);
			this.state = 666;
			this.match(tnsnamesParser.ID);
			this.state = 671;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === tnsnamesParser.DOT) {
				{
				{
				this.state = 667;
				this.match(tnsnamesParser.DOT);
				this.state = 668;
				this.match(tnsnamesParser.ID);
				}
				}
				this.state = 673;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 674;
			this.match(tnsnamesParser.R_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cd_failover_mode(): Cd_failover_modeContext {
		let _localctx: Cd_failover_modeContext = new Cd_failover_modeContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, tnsnamesParser.RULE_cd_failover_mode);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 676;
			this.match(tnsnamesParser.L_PAREN);
			this.state = 677;
			this.match(tnsnamesParser.FAILOVER_MODE);
			this.state = 678;
			this.match(tnsnamesParser.EQUAL);
			this.state = 679;
			this.fo_params();
			this.state = 680;
			this.match(tnsnamesParser.R_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cd_global_name(): Cd_global_nameContext {
		let _localctx: Cd_global_nameContext = new Cd_global_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, tnsnamesParser.RULE_cd_global_name);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 682;
			this.match(tnsnamesParser.L_PAREN);
			this.state = 683;
			this.match(tnsnamesParser.GLOBAL_NAME);
			this.state = 684;
			this.match(tnsnamesParser.EQUAL);
			this.state = 685;
			this.match(tnsnamesParser.ID);
			this.state = 690;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === tnsnamesParser.DOT) {
				{
				{
				this.state = 686;
				this.match(tnsnamesParser.DOT);
				this.state = 687;
				this.match(tnsnamesParser.ID);
				}
				}
				this.state = 692;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 693;
			this.match(tnsnamesParser.R_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cd_hs(): Cd_hsContext {
		let _localctx: Cd_hsContext = new Cd_hsContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, tnsnamesParser.RULE_cd_hs);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 695;
			this.match(tnsnamesParser.L_PAREN);
			this.state = 696;
			this.match(tnsnamesParser.HS);
			this.state = 697;
			this.match(tnsnamesParser.EQUAL);
			this.state = 698;
			this.match(tnsnamesParser.OK);
			this.state = 699;
			this.match(tnsnamesParser.R_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cd_rdb_database(): Cd_rdb_databaseContext {
		let _localctx: Cd_rdb_databaseContext = new Cd_rdb_databaseContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, tnsnamesParser.RULE_cd_rdb_database);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 701;
			this.match(tnsnamesParser.L_PAREN);
			this.state = 702;
			this.match(tnsnamesParser.RDB_DATABASE);
			this.state = 703;
			this.match(tnsnamesParser.EQUAL);
			this.state = 708;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === tnsnamesParser.L_SQUARE) {
				{
				this.state = 704;
				this.match(tnsnamesParser.L_SQUARE);
				this.state = 705;
				this.match(tnsnamesParser.DOT);
				this.state = 706;
				this.match(tnsnamesParser.ID);
				this.state = 707;
				this.match(tnsnamesParser.R_SQUARE);
				}
			}

			this.state = 710;
			this.match(tnsnamesParser.ID);
			this.state = 715;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === tnsnamesParser.DOT) {
				{
				{
				this.state = 711;
				this.match(tnsnamesParser.DOT);
				this.state = 712;
				this.match(tnsnamesParser.ID);
				}
				}
				this.state = 717;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 718;
			this.match(tnsnamesParser.R_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cd_server(): Cd_serverContext {
		let _localctx: Cd_serverContext = new Cd_serverContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, tnsnamesParser.RULE_cd_server);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 720;
			this.match(tnsnamesParser.L_PAREN);
			this.state = 721;
			this.match(tnsnamesParser.SERVER);
			this.state = 722;
			this.match(tnsnamesParser.EQUAL);
			this.state = 723;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << tnsnamesParser.DEDICATED) | (1 << tnsnamesParser.SHARED) | (1 << tnsnamesParser.POOLED))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 724;
			this.match(tnsnamesParser.R_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cd_ur(): Cd_urContext {
		let _localctx: Cd_urContext = new Cd_urContext(this._ctx, this.state);
		this.enterRule(_localctx, 162, tnsnamesParser.RULE_cd_ur);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 726;
			this.match(tnsnamesParser.L_PAREN);
			this.state = 727;
			this.match(tnsnamesParser.UR);
			this.state = 728;
			this.match(tnsnamesParser.EQUAL);
			this.state = 729;
			this.match(tnsnamesParser.UR_A);
			this.state = 730;
			this.match(tnsnamesParser.R_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fo_params(): Fo_paramsContext {
		let _localctx: Fo_paramsContext = new Fo_paramsContext(this._ctx, this.state);
		this.enterRule(_localctx, 164, tnsnamesParser.RULE_fo_params);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 733;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 732;
				this.fo_parameter();
				}
				}
				this.state = 735;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === tnsnamesParser.L_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fo_parameter(): Fo_parameterContext {
		let _localctx: Fo_parameterContext = new Fo_parameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 166, tnsnamesParser.RULE_fo_parameter);
		try {
			this.state = 742;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 53, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 737;
				this.fo_type();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 738;
				this.fo_backup();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 739;
				this.fo_method();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 740;
				this.fo_retries();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 741;
				this.fo_delay();
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
	public fo_type(): Fo_typeContext {
		let _localctx: Fo_typeContext = new Fo_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 168, tnsnamesParser.RULE_fo_type);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 744;
			this.match(tnsnamesParser.L_PAREN);
			this.state = 745;
			this.match(tnsnamesParser.TYPE);
			this.state = 746;
			this.match(tnsnamesParser.EQUAL);
			this.state = 747;
			_la = this._input.LA(1);
			if (!(((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (tnsnamesParser.SESSION - 68)) | (1 << (tnsnamesParser.SELECT - 68)) | (1 << (tnsnamesParser.NONE - 68)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 748;
			this.match(tnsnamesParser.R_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fo_backup(): Fo_backupContext {
		let _localctx: Fo_backupContext = new Fo_backupContext(this._ctx, this.state);
		this.enterRule(_localctx, 170, tnsnamesParser.RULE_fo_backup);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 750;
			this.match(tnsnamesParser.L_PAREN);
			this.state = 751;
			this.match(tnsnamesParser.BACKUP);
			this.state = 752;
			this.match(tnsnamesParser.EQUAL);
			this.state = 753;
			this.match(tnsnamesParser.ID);
			this.state = 758;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === tnsnamesParser.DOT) {
				{
				{
				this.state = 754;
				this.match(tnsnamesParser.DOT);
				this.state = 755;
				this.match(tnsnamesParser.ID);
				}
				}
				this.state = 760;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 761;
			this.match(tnsnamesParser.R_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fo_method(): Fo_methodContext {
		let _localctx: Fo_methodContext = new Fo_methodContext(this._ctx, this.state);
		this.enterRule(_localctx, 172, tnsnamesParser.RULE_fo_method);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 763;
			this.match(tnsnamesParser.L_PAREN);
			this.state = 764;
			this.match(tnsnamesParser.METHOD);
			this.state = 765;
			this.match(tnsnamesParser.EQUAL);
			this.state = 766;
			_la = this._input.LA(1);
			if (!(_la === tnsnamesParser.BASIC || _la === tnsnamesParser.PRECONNECT)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 767;
			this.match(tnsnamesParser.R_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fo_retries(): Fo_retriesContext {
		let _localctx: Fo_retriesContext = new Fo_retriesContext(this._ctx, this.state);
		this.enterRule(_localctx, 174, tnsnamesParser.RULE_fo_retries);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 769;
			this.match(tnsnamesParser.L_PAREN);
			this.state = 770;
			this.match(tnsnamesParser.RETRIES);
			this.state = 771;
			this.match(tnsnamesParser.EQUAL);
			this.state = 772;
			this.match(tnsnamesParser.INT);
			this.state = 773;
			this.match(tnsnamesParser.R_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fo_delay(): Fo_delayContext {
		let _localctx: Fo_delayContext = new Fo_delayContext(this._ctx, this.state);
		this.enterRule(_localctx, 176, tnsnamesParser.RULE_fo_delay);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 775;
			this.match(tnsnamesParser.L_PAREN);
			this.state = 776;
			this.match(tnsnamesParser.DELAY);
			this.state = 777;
			this.match(tnsnamesParser.EQUAL);
			this.state = 778;
			this.match(tnsnamesParser.INT);
			this.state = 779;
			this.match(tnsnamesParser.R_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03V\u0310\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
		"\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04" +
		"X\tX\x04Y\tY\x04Z\tZ\x03\x02\x03\x02\x03\x02\x07\x02\xB8\n\x02\f\x02\x0E" +
		"\x02\xBB\v\x02\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03\xC1\n\x03\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x06\x05" +
		"\xCC\n\x05\r\x05\x0E\x05\xCD\x05\x05\xD0\n\x05\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x06\x06\xD7\n\x06\r\x06\x0E\x06\xD8\x05\x06\xDB\n\x06" +
		"\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x07\x07\xE2\n\x07\f\x07\x0E\x07" +
		"\xE5\v\x07\x03\b\x03\b\x03\b\x03\b\x06\b\xEB\n\b\r\b\x0E\b\xEC\x05\b\xEF" +
		"\n\b\x03\t\x03\t\x03\t\x03\t\x05\t\xF5\n\t\x03\t\x06\t\xF8\n\t\r\t\x0E" +
		"\t\xF9\x03\t\x05\t\xFD\n\t\x03\t\x03\t\x03\n\x06\n\u0102\n\n\r\n\x0E\n" +
		"\u0103\x03\v\x03\v\x03\v\x05\v\u0109\n\v\x03\f\x03\f\x03\f\x03\f\x05\f" +
		"\u010F\n\f\x03\f\x03\f\x06\f\u0113\n\f\r\f\x0E\f\u0114\x05\f\u0117\n\f" +
		"\x03\f\x05\f\u011A\n\f\x03\f\x03\f\x05\f\u011E\n\f\x03\f\x03\f\x03\r\x06" +
		"\r\u0123\n\r\r\r\x0E\r\u0124\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u0133\n\x0E" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10" +
		"\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11" +
		"\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13" +
		"\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14" +
		"\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16" +
		"\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17" +
		"\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19" +
		"\x03\x19\x05\x19\u0175\n\x19\x03\x19\x06\x19\u0178\n\x19\r\x19\x0E\x19" +
		"\u0179\x03\x19\x05\x19\u017D\n\x19\x03\x19\x03\x19\x03\x1A\x06\x1A\u0182" +
		"\n\x1A\r\x1A\x0E\x1A\u0183\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u0189\n\x1B" +
		"\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D" +
		"\x03\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E" +
		"\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u01A2\n\x1F\x03\x1F\x03" +
		"\x1F\x03 \x06 \u01A7\n \r \x0E \u01A8\x03!\x03!\x05!\u01AD\n!\x03\"\x03" +
		"\"\x03\"\x03\"\x03\"\x05\"\u01B4\n\"\x03#\x03#\x03$\x06$\u01B9\n$\r$\x0E" +
		"$\u01BA\x03%\x03%\x03%\x05%\u01C0\n%\x03&\x03&\x03&\x03&\x03&\x03&\x03" +
		"\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03(\x03(\x03(\x03(\x03(\x03(\x03)\x03" +
		")\x03)\x03)\x06)\u01D8\n)\r)\x0E)\u01D9\x03)\x05)\u01DD\n)\x03*\x03*\x03" +
		"+\x03+\x03,\x06,\u01E4\n,\r,\x0E,\u01E5\x03-\x03-\x05-\u01EA\n-\x03.\x03" +
		".\x03.\x03.\x03.\x03.\x03/\x03/\x03/\x03/\x03/\x03/\x030\x030\x031\x06" +
		"1\u01FB\n1\r1\x0E1\u01FC\x032\x032\x052\u0201\n2\x033\x033\x033\x033\x03" +
		"3\x033\x034\x034\x034\x034\x034\x034\x035\x035\x036\x066\u0212\n6\r6\x0E" +
		"6\u0213\x037\x037\x037\x057\u0219\n7\x038\x038\x038\x038\x038\x038\x03" +
		"9\x039\x039\x039\x039\x039\x03:\x03:\x03:\x03:\x03:\x03:\x03;\x03;\x03" +
		"<\x06<\u0230\n<\r<\x0E<\u0231\x03=\x03=\x03=\x03=\x05=\u0238\n=\x03>\x03" +
		">\x03>\x03>\x03>\x03>\x03?\x03?\x03?\x03?\x03?\x03?\x03@\x03@\x03@\x03" +
		"@\x03@\x03@\x03A\x03A\x03A\x03A\x03A\x03A\x03B\x03B\x03B\x03B\x03C\x03" +
		"C\x03C\x03C\x03C\x03C\x03D\x06D\u025D\nD\rD\x0ED\u025E\x03E\x03E\x05E" +
		"\u0263\nE\x03F\x03F\x03F\x03F\x03F\x03F\x03G\x03G\x03G\x03G\x03G\x03G" +
		"\x03H\x03H\x03H\x03H\x03H\x03H\x03I\x06I\u0278\nI\rI\x0EI\u0279\x03J\x03" +
		"J\x03J\x03J\x03J\x03J\x03J\x03J\x03J\x05J\u0285\nJ\x03K\x03K\x03K\x03" +
		"K\x03K\x03K\x07K\u028D\nK\fK\x0EK\u0290\vK\x03K\x03K\x03L\x03L\x03L\x03" +
		"L\x03L\x03L\x03M\x03M\x03M\x03M\x03M\x03M\x07M\u02A0\nM\fM\x0EM\u02A3" +
		"\vM\x03M\x03M\x03N\x03N\x03N\x03N\x03N\x03N\x03O\x03O\x03O\x03O\x03O\x03" +
		"O\x07O\u02B3\nO\fO\x0EO\u02B6\vO\x03O\x03O\x03P\x03P\x03P\x03P\x03P\x03" +
		"P\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x05Q\u02C7\nQ\x03Q\x03Q\x03Q\x07" +
		"Q\u02CC\nQ\fQ\x0EQ\u02CF\vQ\x03Q\x03Q\x03R\x03R\x03R\x03R\x03R\x03R\x03" +
		"S\x03S\x03S\x03S\x03S\x03S\x03T\x06T\u02E0\nT\rT\x0ET\u02E1\x03U\x03U" +
		"\x03U\x03U\x03U\x05U\u02E9\nU\x03V\x03V\x03V\x03V\x03V\x03V\x03W\x03W" +
		"\x03W\x03W\x03W\x03W\x07W\u02F7\nW\fW\x0EW\u02FA\vW\x03W\x03W\x03X\x03" +
		"X\x03X\x03X\x03X\x03X\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03Z\x03Z\x03Z\x03" +
		"Z\x03Z\x03Z\x03Z\x02\x02\x02[\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02" +
		"\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02" +
		" \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02" +
		"<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02" +
		"X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02" +
		"t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02" +
		"\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02" +
		"\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02" +
		"\xAE\x02\xB0\x02\xB2\x02\x02\x07\x03\x02\x17\x19\x03\x02\x17\x18\x03\x02" +
		"\x1D\x1F\x03\x02FH\x03\x02JK\x02\u030D\x02\xB9\x03\x02\x02\x02\x04\xBC" +
		"\x03\x02\x02\x02\x06\xC2\x03\x02\x02\x02\b\xC6\x03\x02\x02\x02\n\xD1\x03" +
		"\x02\x02\x02\f\xDE\x03\x02\x02\x02\x0E\xEE\x03\x02\x02\x02\x10\xF0\x03" +
		"\x02\x02\x02\x12\u0101\x03\x02\x02\x02\x14\u0108\x03\x02\x02\x02\x16\u010A" +
		"\x03\x02\x02\x02\x18\u0122\x03\x02\x02\x02\x1A\u0132\x03\x02\x02\x02\x1C" +
		"\u0134\x03\x02\x02\x02\x1E\u013A\x03\x02\x02\x02 \u0140\x03\x02\x02\x02" +
		"\"\u0146\x03\x02\x02\x02$\u014C\x03\x02\x02\x02&\u0152\x03\x02\x02\x02" +
		"(\u0158\x03\x02\x02\x02*\u015E\x03\x02\x02\x02,\u0164\x03\x02\x02\x02" +
		".\u016A\x03\x02\x02\x020\u0170\x03\x02\x02\x022\u0181\x03\x02\x02\x02" +
		"4\u0188\x03\x02\x02\x026\u018A\x03\x02\x02\x028\u0190\x03\x02\x02\x02" +
		":\u0196\x03\x02\x02\x02<\u019C\x03\x02\x02\x02>\u01A6\x03\x02\x02\x02" +
		"@\u01AC\x03\x02\x02\x02B\u01B3\x03\x02\x02\x02D\u01B5\x03\x02\x02\x02" +
		"F\u01B8\x03\x02\x02\x02H\u01BF\x03\x02\x02\x02J\u01C1\x03\x02\x02\x02" +
		"L\u01C7\x03\x02\x02\x02N\u01CD\x03\x02\x02\x02P\u01DC\x03\x02\x02\x02" +
		"R\u01DE\x03\x02\x02\x02T\u01E0\x03\x02\x02\x02V\u01E3\x03\x02\x02\x02" +
		"X\u01E9\x03\x02\x02\x02Z\u01EB\x03\x02\x02\x02\\\u01F1\x03\x02\x02\x02" +
		"^\u01F7\x03\x02\x02\x02`\u01FA\x03\x02\x02\x02b\u0200\x03\x02\x02\x02" +
		"d\u0202\x03\x02\x02\x02f\u0208\x03\x02\x02\x02h\u020E\x03\x02\x02\x02" +
		"j\u0211\x03\x02\x02\x02l\u0218\x03\x02\x02\x02n\u021A\x03\x02\x02\x02" +
		"p\u0220\x03\x02\x02\x02r\u0226\x03\x02\x02\x02t\u022C\x03\x02\x02\x02" +
		"v\u022F\x03\x02\x02\x02x\u0237\x03\x02\x02\x02z\u0239\x03\x02\x02\x02" +
		"|\u023F\x03\x02\x02\x02~\u0245\x03\x02\x02\x02\x80\u024B\x03\x02\x02\x02" +
		"\x82\u0251\x03\x02\x02\x02\x84\u0255\x03\x02\x02\x02\x86\u025C\x03\x02" +
		"\x02\x02\x88\u0262\x03\x02\x02\x02\x8A\u0264\x03\x02\x02\x02\x8C\u026A" +
		"\x03\x02\x02\x02\x8E\u0270\x03\x02\x02\x02\x90\u0277\x03\x02\x02\x02\x92" +
		"\u0284\x03\x02\x02\x02\x94\u0286\x03\x02\x02\x02\x96\u0293\x03\x02\x02" +
		"\x02\x98\u0299\x03\x02\x02\x02\x9A\u02A6\x03\x02\x02\x02\x9C\u02AC\x03" +
		"\x02\x02\x02\x9E\u02B9\x03\x02\x02\x02\xA0\u02BF\x03\x02\x02\x02\xA2\u02D2" +
		"\x03\x02\x02\x02\xA4\u02D8\x03\x02\x02\x02\xA6\u02DF\x03\x02\x02\x02\xA8" +
		"\u02E8\x03\x02\x02\x02\xAA\u02EA\x03\x02\x02\x02\xAC\u02F0\x03\x02\x02" +
		"\x02\xAE\u02FD\x03\x02\x02\x02\xB0\u0303\x03\x02\x02\x02\xB2\u0309\x03" +
		"\x02\x02\x02\xB4\xB8\x05\x04\x03\x02\xB5\xB8\x05\x06\x04\x02\xB6\xB8\x05" +
		"\b\x05\x02\xB7\xB4\x03\x02\x02\x02\xB7\xB5\x03\x02\x02\x02\xB7\xB6\x03" +
		"\x02\x02\x02\xB8\xBB\x03\x02\x02\x02\xB9\xB7\x03\x02\x02\x02\xB9\xBA\x03" +
		"\x02\x02\x02\xBA\x03\x03\x02\x02\x02\xBB\xB9\x03\x02\x02\x02\xBC\xBD\x05" +
		"\f\x07\x02\xBD\xC0\x07\x07\x02\x02\xBE\xC1\x05\x10\t\x02\xBF\xC1\x05\x16" +
		"\f\x02\xC0\xBE\x03\x02\x02\x02\xC0\xBF\x03\x02\x02\x02\xC1\x05\x03\x02" +
		"\x02\x02\xC2\xC3\x07:\x02\x02\xC3\xC4\x07Q\x02\x02\xC4\xC5\x07R\x02\x02" +
		"\xC5\x07\x03\x02\x02\x02\xC6\xC7\x05\x0E\b\x02\xC7\xCF\x07\x07\x02\x02" +
		"\xC8\xD0\x05\n\x06\x02\xC9\xD0\x050\x19\x02\xCA\xCC\x05<\x1F\x02\xCB\xCA" +
		"\x03\x02\x02\x02\xCC\xCD\x03\x02\x02\x02\xCD\xCB\x03\x02\x02\x02\xCD\xCE" +
		"\x03\x02\x02\x02\xCE\xD0\x03\x02\x02\x02\xCF\xC8\x03\x02\x02\x02\xCF\xC9" +
		"\x03\x02\x02\x02\xCF\xCB\x03\x02\x02\x02\xD0\t\x03\x02\x02\x02\xD1\xD2" +
		"\x07\x03\x02\x02\xD2\xD3\x07\x0E\x02\x02\xD3\xDA\x07\x07\x02\x02\xD4\xDB" +
		"\x050\x19\x02\xD5\xD7\x05<\x1F\x02\xD6\xD5\x03\x02\x02\x02\xD7\xD8\x03" +
		"\x02\x02\x02\xD8\xD6\x03\x02\x02\x02\xD8\xD9\x03\x02\x02\x02\xD9\xDB\x03" +
		"\x02\x02\x02\xDA\xD4\x03\x02\x02\x02\xDA\xD6\x03\x02\x02\x02\xDB\xDC\x03" +
		"\x02\x02\x02\xDC\xDD\x07\x04\x02\x02\xDD\v\x03\x02\x02\x02\xDE\xE3\x05" +
		"\x0E\b\x02\xDF\xE0\x07\t\x02\x02\xE0\xE2\x05\x0E\b\x02\xE1\xDF\x03\x02" +
		"\x02\x02\xE2\xE5\x03\x02\x02\x02\xE3\xE1\x03\x02\x02\x02\xE3\xE4\x03\x02" +
		"\x02\x02\xE4\r\x03\x02\x02\x02\xE5\xE3\x03\x02\x02\x02\xE6\xEF\x07O\x02" +
		"\x02\xE7\xEA\x07O\x02\x02\xE8\xE9\x07\b\x02\x02\xE9\xEB\x07O\x02\x02\xEA" +
		"\xE8\x03\x02\x02\x02\xEB\xEC\x03\x02\x02\x02\xEC\xEA\x03\x02\x02\x02\xEC" +
		"\xED\x03\x02\x02\x02\xED\xEF\x03\x02\x02\x02\xEE\xE6\x03\x02\x02\x02\xEE" +
		"\xE7\x03\x02\x02\x02\xEF\x0F\x03\x02\x02\x02\xF0\xF1\x07\x03\x02\x02\xF1" +
		"\xF2\x07\r\x02\x02\xF2\xF4\x07\x07\x02\x02\xF3\xF5\x05\x12\n\x02\xF4\xF3" +
		"\x03\x02\x02\x02\xF4\xF5\x03\x02\x02\x02\xF5\xF7\x03\x02\x02\x02\xF6\xF8" +
		"\x05\x16\f\x02\xF7\xF6\x03\x02\x02\x02\xF8\xF9\x03\x02\x02\x02\xF9\xF7" +
		"\x03\x02\x02\x02\xF9\xFA\x03\x02\x02\x02\xFA\xFC\x03\x02\x02\x02\xFB\xFD" +
		"\x05\x12\n\x02\xFC\xFB\x03\x02\x02\x02\xFC\xFD\x03\x02\x02\x02\xFD\xFE" +
		"\x03\x02\x02\x02\xFE\xFF\x07\x04\x02\x02\xFF\x11\x03\x02\x02\x02\u0100" +
		"\u0102\x05\x14\v\x02\u0101\u0100\x03\x02\x02\x02\u0102\u0103\x03\x02\x02" +
		"\x02\u0103\u0101\x03\x02\x02\x02\u0103\u0104\x03\x02\x02\x02\u0104\x13" +
		"\x03\x02\x02\x02\u0105\u0109\x056\x1C\x02\u0106\u0109\x058\x1D\x02\u0107" +
		"\u0109\x05:\x1E\x02\u0108\u0105\x03\x02\x02\x02\u0108\u0106\x03\x02\x02" +
		"\x02\u0108\u0107\x03\x02\x02\x02\u0109\x15\x03\x02\x02\x02\u010A\u010B" +
		"\x07\x03\x02\x02\u010B\u010C\x07\x0E\x02\x02\u010C\u010E\x07\x07\x02\x02" +
		"\u010D\u010F\x05\x18\r\x02\u010E\u010D\x03\x02\x02\x02\u010E\u010F\x03" +
		"\x02\x02\x02\u010F\u0116\x03\x02\x02\x02\u0110\u0117\x050\x19\x02\u0111" +
		"\u0113\x05<\x1F\x02\u0112\u0111\x03\x02\x02\x02\u0113\u0114\x03\x02\x02" +
		"\x02\u0114\u0112\x03\x02\x02\x02\u0114\u0115\x03\x02\x02\x02\u0115\u0117" +
		"\x03\x02\x02\x02\u0116\u0110\x03\x02\x02\x02\u0116\u0112\x03\x02\x02\x02" +
		"\u0117\u0119\x03\x02\x02\x02\u0118\u011A\x05\x18\r\x02\u0119\u0118\x03" +
		"\x02\x02\x02\u0119\u011A\x03\x02\x02\x02\u011A\u011B\x03\x02\x02\x02\u011B" +
		"\u011D\x05\x8EH\x02\u011C\u011E\x05\x18\r\x02\u011D\u011C\x03\x02\x02" +
		"\x02\u011D\u011E\x03\x02\x02\x02\u011E\u011F\x03\x02\x02\x02\u011F\u0120" +
		"\x07\x04\x02\x02\u0120\x17\x03\x02\x02\x02\u0121\u0123\x05\x1A\x0E\x02" +
		"\u0122\u0121\x03\x02\x02\x02\u0123\u0124\x03\x02\x02\x02\u0124\u0122\x03" +
		"\x02\x02\x02\u0124\u0125\x03\x02\x02\x02\u0125\x19\x03\x02\x02\x02\u0126" +
		"\u0133\x05\x1C\x0F\x02\u0127\u0133\x056\x1C\x02\u0128\u0133\x058\x1D\x02" +
		"\u0129\u0133\x05\x1E\x10\x02\u012A\u0133\x05 \x11\x02\u012B\u0133\x05" +
		"\"\x12\x02\u012C\u0133\x05:\x1E\x02\u012D\u0133\x05$\x13\x02\u012E\u0133" +
		"\x05&\x14\x02\u012F\u0133\x05(\x15\x02\u0130\u0133\x05*\x16\x02\u0131" +
		"\u0133\x05,\x17\x02\u0132\u0126\x03\x02\x02\x02\u0132\u0127\x03\x02\x02" +
		"\x02\u0132\u0128\x03\x02\x02\x02\u0132\u0129\x03\x02\x02\x02\u0132\u012A" +
		"\x03\x02\x02\x02\u0132\u012B\x03\x02\x02\x02\u0132\u012C\x03\x02\x02\x02" +
		"\u0132\u012D\x03\x02\x02\x02\u0132\u012E\x03\x02\x02\x02\u0132\u012F\x03" +
		"\x02\x02\x02\u0132\u0130\x03\x02\x02\x02\u0132\u0131\x03\x02\x02\x02\u0133" +
		"\x1B\x03\x02\x02\x02\u0134\u0135\x07\x03\x02\x02\u0135\u0136\x07$\x02" +
		"\x02\u0136\u0137\x07\x07\x02\x02\u0137\u0138\x07%\x02\x02\u0138\u0139" +
		"\x07\x04\x02\x02\u0139\x1D\x03\x02\x02\x02\u013A\u013B\x07\x03\x02\x02" +
		"\u013B\u013C\x07&\x02\x02\u013C\u013D\x07\x07\x02\x02\u013D\u013E\x07" +
		"\x1B\x02\x02\u013E\u013F\x07\x04\x02\x02\u013F\x1F\x03\x02\x02\x02\u0140" +
		"\u0141\x07\x03\x02\x02\u0141\u0142\x07\'\x02\x02\u0142\u0143\x07\x07\x02" +
		"\x02\u0143\u0144\x07\x1B\x02\x02\u0144\u0145\x07\x04\x02\x02\u0145!\x03" +
		"\x02\x02\x02\u0146\u0147\x07\x03\x02\x02\u0147\u0148\x07(\x02\x02\u0148" +
		"\u0149\x07\x07\x02\x02\u0149\u014A\x07\x1B\x02\x02\u014A\u014B\x07\x04" +
		"\x02\x02\u014B#\x03\x02\x02\x02\u014C\u014D\x07\x03\x02\x02\u014D\u014E" +
		"\x07+\x02\x02\u014E\u014F\x07\x07\x02\x02\u014F\u0150\x07O\x02\x02\u0150" +
		"\u0151\x07\x04\x02\x02\u0151%\x03\x02\x02\x02\u0152\u0153\x07\x03\x02" +
		"\x02\u0153\u0154\x075\x02\x02\u0154\u0155\x07\x07\x02\x02\u0155\u0156" +
		"\x05.\x18\x02\u0156\u0157\x07\x04\x02\x02\u0157\'\x03\x02\x02\x02\u0158" +
		"\u0159\x07\x03\x02\x02\u0159\u015A\x077\x02\x02\u015A\u015B\x07\x07\x02" +
		"\x02\u015B\u015C\x07\x1B\x02\x02\u015C\u015D\x07\x04\x02\x02\u015D)\x03" +
		"\x02\x02\x02\u015E\u015F\x07\x03\x02\x02\u015F\u0160\x078\x02\x02\u0160" +
		"\u0161\x07\x07\x02\x02\u0161\u0162\x07\x1B\x02\x02\u0162\u0163\x07\x04" +
		"\x02\x02\u0163+\x03\x02\x02\x02\u0164\u0165\x07\x03\x02\x02\u0165\u0166" +
		"\x079\x02\x02\u0166\u0167\x07\x07\x02\x02\u0167\u0168\x07\x1B\x02\x02" +
		"\u0168\u0169\x07\x04\x02\x02\u0169-\x03\x02\x02\x02\u016A\u016B\x07\x03" +
		"\x02\x02\u016B\u016C\x076\x02\x02\u016C\u016D\x07\x07\x02\x02\u016D\u016E" +
		"\x07;\x02\x02\u016E\u016F\x07\x04\x02\x02\u016F/\x03\x02\x02\x02\u0170" +
		"\u0171\x07\x03\x02\x02\u0171\u0172\x07\x0F\x02\x02\u0172\u0174\x07\x07" +
		"\x02\x02\u0173\u0175\x052\x1A\x02\u0174\u0173\x03\x02\x02\x02\u0174\u0175" +
		"\x03\x02\x02\x02\u0175\u0177\x03\x02\x02\x02\u0176\u0178\x05<\x1F\x02" +
		"\u0177\u0176\x03\x02\x02\x02\u0178\u0179\x03\x02\x02\x02\u0179\u0177\x03" +
		"\x02\x02\x02\u0179\u017A\x03\x02\x02\x02\u017A\u017C\x03\x02\x02\x02\u017B" +
		"\u017D\x052\x1A\x02\u017C\u017B\x03\x02\x02\x02\u017C\u017D\x03\x02\x02" +
		"\x02\u017D\u017E\x03\x02\x02\x02\u017E\u017F\x07\x04\x02\x02\u017F1\x03" +
		"\x02\x02\x02\u0180\u0182\x054\x1B\x02\u0181\u0180\x03\x02\x02\x02\u0182" +
		"\u0183\x03\x02\x02\x02\u0183\u0181\x03\x02\x02\x02\u0183\u0184\x03\x02" +
		"\x02\x02\u01843\x03\x02\x02\x02\u0185\u0189\x056\x1C\x02\u0186\u0189\x05" +
		"8\x1D\x02\u0187\u0189\x05:\x1E\x02\u0188\u0185\x03\x02\x02\x02\u0188\u0186" +
		"\x03\x02\x02\x02\u0188\u0187\x03\x02\x02\x02\u01895\x03\x02\x02\x02\u018A" +
		"\u018B\x07\x03\x02\x02\u018B\u018C\x07!\x02\x02\u018C\u018D\x07\x07\x02" +
		"\x02\u018D\u018E\t\x02\x02\x02\u018E\u018F\x07\x04\x02\x02\u018F7\x03" +
		"\x02\x02\x02\u0190\u0191\x07\x03\x02\x02\u0191\u0192\x07 \x02\x02\u0192" +
		"\u0193\x07\x07\x02\x02\u0193\u0194\t\x02\x02\x02\u0194\u0195\x07\x04\x02" +
		"\x02\u01959\x03\x02\x02\x02\u0196\u0197\x07\x03\x02\x02\u0197\u0198\x07" +
		")\x02\x02\u0198\u0199\x07\x07\x02\x02\u0199\u019A\t\x03\x02\x02\u019A" +
		"\u019B\x07\x04\x02\x02\u019B;\x03\x02\x02\x02\u019C\u019D\x07\x03\x02" +
		"\x02\u019D\u019E\x07\x10\x02\x02\u019E\u019F\x07\x07\x02\x02\u019F\u01A1" +
		"\x05B\"\x02\u01A0\u01A2\x05> \x02\u01A1\u01A0\x03\x02\x02\x02\u01A1\u01A2" +
		"\x03\x02\x02\x02\u01A2\u01A3\x03\x02\x02\x02\u01A3\u01A4\x07\x04\x02\x02" +
		"\u01A4=\x03\x02\x02\x02\u01A5\u01A7\x05@!\x02\u01A6\u01A5\x03\x02\x02" +
		"\x02\u01A7\u01A8\x03\x02\x02\x02\u01A8\u01A6\x03\x02\x02\x02\u01A8\u01A9" +
		"\x03\x02\x02\x02\u01A9?\x03\x02\x02\x02\u01AA\u01AD\x05\"\x12\x02\u01AB" +
		"\u01AD\x05 \x11\x02\u01AC\u01AA\x03\x02\x02\x02\u01AC\u01AB\x03\x02\x02" +
		"\x02\u01ADA\x03\x02\x02\x02\u01AE\u01B4\x05D#\x02\u01AF\u01B4\x05T+\x02" +
		"\u01B0\u01B4\x05^0\x02\u01B1\u01B4\x05h5\x02\u01B2\u01B4\x05t;\x02\u01B3" +
		"\u01AE\x03\x02\x02\x02\u01B3\u01AF\x03\x02\x02\x02\u01B3\u01B0\x03\x02" +
		"\x02\x02\u01B3\u01B1\x03\x02\x02\x02\u01B3\u01B2\x03\x02\x02\x02\u01B4" +
		"C\x03\x02\x02\x02\u01B5\u01B6\x05F$\x02\u01B6E\x03\x02\x02\x02\u01B7\u01B9" +
		"\x05H%\x02\u01B8\u01B7\x03\x02\x02\x02\u01B9\u01BA\x03\x02\x02\x02\u01BA" +
		"\u01B8\x03\x02\x02\x02\u01BA\u01BB\x03\x02\x02\x02\u01BBG\x03\x02\x02" +
		"\x02\u01BC\u01C0\x05J&\x02\u01BD\u01C0\x05L\'\x02\u01BE\u01C0\x05N(\x02" +
		"\u01BF\u01BC\x03\x02\x02\x02\u01BF\u01BD\x03\x02\x02\x02\u01BF\u01BE\x03" +
		"\x02\x02\x02\u01C0I\x03\x02\x02\x02\u01C1\u01C2\x07\x03\x02\x02\u01C2" +
		"\u01C3\x07\x13\x02\x02\u01C3\u01C4\x07\x07\x02\x02\u01C4\u01C5\x05P)\x02" +
		"\u01C5\u01C6\x07\x04\x02\x02\u01C6K\x03\x02\x02\x02\u01C7\u01C8\x07\x03" +
		"\x02\x02\u01C8\u01C9\x07\x14\x02\x02\u01C9\u01CA\x07\x07\x02\x02\u01CA" +
		"\u01CB\x05R*\x02\u01CB\u01CC\x07\x04\x02\x02\u01CCM\x03\x02\x02\x02\u01CD" +
		"\u01CE\x07\x03\x02\x02\u01CE\u01CF\x07\x11\x02\x02\u01CF\u01D0\x07\x07" +
		"\x02\x02\u01D0\u01D1\x07\x12\x02\x02\u01D1\u01D2\x07\x04\x02\x02\u01D2" +
		"O\x03\x02\x02\x02\u01D3\u01DD\x07O\x02\x02\u01D4\u01D7\x07O\x02\x02\u01D5" +
		"\u01D6\x07\b\x02\x02\u01D6\u01D8\x07O\x02\x02\u01D7\u01D5\x03\x02\x02" +
		"\x02\u01D8\u01D9\x03\x02\x02\x02\u01D9\u01D7\x03\x02\x02\x02\u01D9\u01DA" +
		"\x03\x02\x02\x02\u01DA\u01DD\x03\x02\x02\x02\u01DB\u01DD\x07\x16\x02\x02" +
		"\u01DC\u01D3\x03\x02\x02\x02\u01DC\u01D4\x03\x02\x02\x02\u01DC\u01DB\x03" +
		"\x02\x02\x02\u01DDQ\x03\x02\x02\x02\u01DE\u01DF\x07\x1B\x02\x02\u01DF" +
		"S\x03\x02\x02\x02\u01E0\u01E1\x05V,\x02\u01E1U\x03\x02\x02\x02\u01E2\u01E4" +
		"\x05X-\x02\u01E3\u01E2\x03\x02\x02\x02\u01E4\u01E5\x03\x02\x02\x02\u01E5" +
		"\u01E3\x03\x02\x02\x02\u01E5\u01E6\x03\x02\x02\x02\u01E6W\x03\x02\x02" +
		"\x02\u01E7\u01EA\x05Z.\x02\u01E8\u01EA\x05\\/\x02\u01E9\u01E7\x03\x02" +
		"\x02\x02\u01E9\u01E8\x03\x02\x02\x02\u01EAY\x03\x02\x02\x02\u01EB\u01EC" +
		"\x07\x03\x02\x02\u01EC\u01ED\x07\x11\x02\x02\u01ED\u01EE\x07\x07\x02\x02" +
		"\u01EE\u01EF\x07-\x02\x02\u01EF\u01F0\x07\x04\x02\x02\u01F0[\x03\x02\x02" +
		"\x02\u01F1\u01F2\x07\x03\x02\x02\u01F2\u01F3\x07,\x02\x02\u01F3\u01F4" +
		"\x07\x07\x02\x02\u01F4\u01F5\x07O\x02\x02\u01F5\u01F6\x07\x04\x02\x02" +
		"\u01F6]\x03\x02\x02\x02\u01F7\u01F8\x05`1\x02\u01F8_\x03\x02\x02\x02\u01F9" +
		"\u01FB\x05b2\x02\u01FA\u01F9\x03\x02\x02\x02\u01FB\u01FC\x03\x02\x02\x02" +
		"\u01FC\u01FA\x03\x02\x02\x02\u01FC\u01FD\x03\x02\x02\x02\u01FDa\x03\x02" +
		"\x02\x02\u01FE\u0201\x05d3\x02\u01FF\u0201\x05f4\x02\u0200\u01FE\x03\x02" +
		"\x02\x02\u0200\u01FF\x03\x02\x02\x02\u0201c\x03\x02\x02\x02\u0202\u0203" +
		"\x07\x03\x02\x02\u0203\u0204\x07\x11\x02\x02\u0204\u0205\x07\x07\x02\x02" +
		"\u0205\u0206\x07.\x02\x02\u0206\u0207\x07\x04\x02\x02\u0207e\x03\x02\x02" +
		"\x02\u0208\u0209\x07\x03\x02\x02\u0209\u020A\x07*\x02\x02\u020A\u020B" +
		"\x07\x07\x02\x02\u020B\u020C\x07O\x02\x02\u020C\u020D\x07\x04\x02\x02" +
		"\u020Dg\x03\x02\x02\x02\u020E\u020F\x05j6\x02\u020Fi\x03\x02\x02\x02\u0210" +
		"\u0212\x05l7\x02\u0211\u0210\x03\x02\x02\x02\u0212\u0213\x03\x02\x02\x02" +
		"\u0213\u0211\x03\x02\x02\x02\u0213\u0214\x03\x02\x02\x02\u0214k\x03\x02" +
		"\x02\x02\u0215\u0219\x05n8\x02\u0216\u0219\x05p9\x02\u0217\u0219\x05r" +
		":\x02\u0218\u0215\x03\x02\x02\x02\u0218\u0216\x03\x02\x02\x02\u0218\u0217" +
		"\x03\x02\x02\x02\u0219m\x03\x02\x02\x02\u021A\u021B\x07\x03\x02\x02\u021B" +
		"\u021C\x07\x11\x02\x02\u021C\u021D\x07\x07\x02\x02\u021D\u021E\x07/\x02" +
		"\x02\u021E\u021F\x07\x04\x02\x02\u021Fo\x03\x02\x02\x02\u0220\u0221\x07" +
		"\x03\x02\x02\u0221\u0222\x07C\x02\x02\u0222\u0223\x07\x07\x02\x02\u0223" +
		"\u0224\x07O\x02\x02\u0224\u0225\x07\x04\x02\x02\u0225q\x03\x02\x02\x02" +
		"\u0226\u0227\x07\x03\x02\x02\u0227\u0228\x071\x02\x02\u0228\u0229\x07" +
		"\x07\x02\x02";
	private static readonly _serializedATNSegment1: string =
		"\u0229\u022A\x07O\x02\x02\u022A\u022B\x07\x04\x02\x02\u022Bs\x03\x02\x02" +
		"\x02\u022C\u022D\x05v<\x02\u022Du\x03\x02\x02\x02\u022E\u0230\x05x=\x02" +
		"\u022F\u022E\x03\x02\x02\x02\u0230\u0231\x03\x02\x02\x02\u0231\u022F\x03" +
		"\x02\x02\x02\u0231\u0232\x03\x02\x02\x02\u0232w\x03\x02\x02\x02\u0233" +
		"\u0238\x05z>\x02\u0234\u0238\x05|?\x02\u0235\u0238\x05~@\x02\u0236\u0238" +
		"\x05\x80A\x02\u0237\u0233\x03\x02\x02\x02\u0237\u0234\x03\x02\x02\x02" +
		"\u0237\u0235\x03\x02\x02\x02\u0237\u0236\x03\x02\x02\x02\u0238y\x03\x02" +
		"\x02\x02\u0239\u023A\x07\x03\x02\x02\u023A\u023B\x07\x11\x02\x02\u023B" +
		"\u023C\x07\x07\x02\x02\u023C\u023D\x070\x02\x02\u023D\u023E\x07\x04\x02" +
		"\x02\u023E{\x03\x02\x02\x02\u023F\u0240\x07\x03\x02\x02\u0240\u0241\x07" +
		"2\x02\x02\u0241\u0242\x07\x07\x02\x02\u0242\u0243\x07O\x02\x02\u0243\u0244" +
		"\x07\x04\x02\x02\u0244}\x03\x02\x02\x02\u0245\u0246\x07\x03\x02\x02\u0246" +
		"\u0247\x073\x02\x02\u0247\u0248\x07\x07\x02\x02\u0248\u0249\x07O\x02\x02" +
		"\u0249\u024A\x07\x04\x02\x02\u024A\x7F\x03\x02\x02\x02\u024B\u024C\x07" +
		"\x03\x02\x02\u024C\u024D\x074\x02\x02\u024D\u024E\x07\x07\x02\x02\u024E" +
		"\u024F\x05\x82B\x02\u024F\u0250\x07\x04\x02\x02\u0250\x81\x03\x02\x02" +
		"\x02\u0251\u0252\x07\v\x02\x02\u0252\u0253\x05\x84C\x02\u0253\u0254\x07" +
		"\v\x02\x02\u0254\x83\x03\x02\x02\x02\u0255\u0256\x07\x03\x02\x02\u0256" +
		"\u0257\x07\x0E\x02\x02\u0257\u0258\x07\x07\x02\x02\u0258\u0259\x05\x86" +
		"D\x02\u0259\u025A\x07\x04\x02\x02\u025A\x85\x03\x02\x02\x02\u025B\u025D" +
		"\x05\x88E\x02\u025C\u025B\x03\x02\x02\x02\u025D\u025E\x03\x02\x02\x02" +
		"\u025E\u025C\x03\x02\x02\x02\u025E\u025F\x03\x02\x02\x02\u025F\x87\x03" +
		"\x02\x02\x02\u0260\u0263\x05\x8AF\x02\u0261\u0263\x05\x8CG\x02\u0262\u0260" +
		"\x03\x02\x02\x02\u0262\u0261\x03\x02\x02\x02\u0263\x89\x03\x02\x02\x02" +
		"\u0264\u0265\x07\x03\x02\x02\u0265\u0266\x07\x15\x02\x02\u0266\u0267\x07" +
		"\x07\x02\x02\u0267\u0268\x07\x17\x02\x02\u0268\u0269\x07\x04\x02\x02\u0269" +
		"\x8B\x03\x02\x02\x02\u026A\u026B\x07\x03\x02\x02\u026B\u026C\x07\x10\x02" +
		"\x02\u026C\u026D\x07\x07\x02\x02\u026D\u026E\x05z>\x02\u026E\u026F\x07" +
		"\x04\x02\x02\u026F\x8D\x03\x02\x02\x02\u0270\u0271\x07\x03\x02\x02\u0271" +
		"\u0272\x07\f\x02\x02\u0272\u0273\x07\x07\x02\x02\u0273\u0274\x05\x90I" +
		"\x02\u0274\u0275\x07\x04\x02\x02\u0275\x8F\x03\x02\x02\x02\u0276\u0278" +
		"\x05\x92J\x02\u0277\u0276\x03\x02\x02\x02\u0278\u0279\x03\x02\x02\x02" +
		"\u0279\u0277\x03\x02\x02\x02\u0279\u027A\x03\x02\x02\x02\u027A\x91\x03" +
		"\x02\x02\x02\u027B\u0285\x05\x94K\x02\u027C\u0285\x05\x96L\x02\u027D\u0285" +
		"\x05\x98M\x02\u027E\u0285\x05\x9AN\x02\u027F\u0285\x05\x9CO\x02\u0280" +
		"\u0285\x05\x9EP\x02\u0281\u0285\x05\xA0Q\x02\u0282\u0285\x05\xA2R\x02" +
		"\u0283\u0285\x05\xA4S\x02\u0284\u027B\x03\x02\x02\x02\u0284\u027C\x03" +
		"\x02\x02\x02\u0284\u027D\x03\x02\x02\x02\u0284\u027E\x03\x02\x02\x02\u0284" +
		"\u027F\x03\x02\x02\x02\u0284\u0280\x03\x02\x02\x02\u0284\u0281\x03\x02" +
		"\x02\x02\u0284\u0282\x03\x02\x02\x02\u0284\u0283\x03\x02\x02\x02\u0285" +
		"\x93\x03\x02\x02\x02\u0286\u0287\x07\x03\x02\x02\u0287\u0288\x07<\x02" +
		"\x02\u0288\u0289\x07\x07\x02\x02\u0289\u028E\x07O\x02\x02\u028A\u028B" +
		"\x07\b\x02\x02\u028B\u028D\x07O\x02\x02\u028C\u028A\x03\x02\x02\x02\u028D" +
		"\u0290\x03\x02\x02\x02\u028E\u028C\x03\x02\x02\x02\u028E\u028F\x03\x02" +
		"\x02\x02\u028F\u0291\x03\x02\x02\x02\u0290\u028E\x03\x02\x02\x02\u0291" +
		"\u0292\x07\x04\x02\x02\u0292\x95\x03\x02\x02\x02\u0293\u0294\x07\x03\x02" +
		"\x02\u0294\u0295\x07=\x02\x02\u0295\u0296\x07\x07\x02\x02\u0296\u0297" +
		"\x07O\x02\x02\u0297\u0298\x07\x04\x02\x02\u0298\x97\x03\x02\x02\x02\u0299" +
		"\u029A\x07\x03\x02\x02\u029A\u029B\x07>\x02\x02\u029B\u029C\x07\x07\x02" +
		"\x02\u029C\u02A1\x07O\x02\x02\u029D\u029E\x07\b\x02\x02\u029E\u02A0\x07" +
		"O\x02\x02\u029F\u029D\x03\x02\x02\x02\u02A0\u02A3\x03\x02\x02\x02\u02A1" +
		"\u029F\x03\x02\x02\x02\u02A1\u02A2\x03\x02\x02\x02\u02A2\u02A4\x03\x02" +
		"\x02\x02\u02A3\u02A1\x03\x02\x02\x02\u02A4\u02A5\x07\x04\x02\x02\u02A5" +
		"\x99\x03\x02\x02\x02\u02A6\u02A7\x07\x03\x02\x02\u02A7\u02A8\x07?\x02" +
		"\x02\u02A8\u02A9\x07\x07\x02\x02\u02A9\u02AA\x05\xA6T\x02\u02AA\u02AB" +
		"\x07\x04\x02\x02\u02AB\x9B\x03\x02\x02\x02\u02AC\u02AD\x07\x03\x02\x02" +
		"\u02AD\u02AE\x07@\x02\x02\u02AE\u02AF\x07\x07\x02\x02\u02AF\u02B4\x07" +
		"O\x02\x02\u02B0\u02B1\x07\b\x02\x02\u02B1\u02B3\x07O\x02\x02\u02B2\u02B0" +
		"\x03\x02\x02\x02\u02B3\u02B6\x03\x02\x02\x02\u02B4\u02B2\x03\x02\x02\x02" +
		"\u02B4\u02B5\x03\x02\x02\x02\u02B5\u02B7\x03\x02\x02\x02\u02B6\u02B4\x03" +
		"\x02\x02\x02\u02B7\u02B8\x07\x04\x02\x02\u02B8\x9D\x03\x02\x02\x02\u02B9" +
		"\u02BA\x07\x03\x02\x02\u02BA\u02BB\x07A\x02\x02\u02BB\u02BC\x07\x07\x02" +
		"\x02\u02BC\u02BD\x07\x1C\x02\x02\u02BD\u02BE\x07\x04\x02\x02\u02BE\x9F" +
		"\x03\x02\x02\x02\u02BF\u02C0\x07\x03\x02\x02\u02C0\u02C1\x07B\x02\x02" +
		"\u02C1\u02C6\x07\x07\x02\x02\u02C2\u02C3\x07\x05\x02\x02\u02C3\u02C4\x07" +
		"\b\x02\x02\u02C4\u02C5\x07O\x02\x02\u02C5\u02C7\x07\x06\x02\x02\u02C6" +
		"\u02C2\x03\x02\x02\x02\u02C6\u02C7\x03\x02\x02\x02\u02C7\u02C8\x03\x02" +
		"\x02\x02\u02C8\u02CD\x07O\x02\x02\u02C9\u02CA\x07\b\x02\x02\u02CA\u02CC" +
		"\x07O\x02\x02\u02CB\u02C9\x03\x02\x02\x02\u02CC\u02CF\x03\x02\x02\x02" +
		"\u02CD\u02CB\x03\x02\x02\x02\u02CD\u02CE\x03\x02\x02\x02\u02CE\u02D0\x03" +
		"\x02\x02\x02\u02CF\u02CD\x03\x02\x02\x02\u02D0\u02D1\x07\x04\x02\x02\u02D1" +
		"\xA1\x03\x02\x02\x02\u02D2\u02D3\x07\x03\x02\x02\u02D3\u02D4\x07C\x02" +
		"\x02\u02D4\u02D5\x07\x07\x02\x02\u02D5\u02D6\t\x04\x02\x02\u02D6\u02D7" +
		"\x07\x04\x02\x02\u02D7\xA3\x03\x02\x02\x02\u02D8\u02D9\x07\x03\x02\x02" +
		"\u02D9\u02DA\x07\"\x02\x02\u02DA\u02DB\x07\x07\x02\x02\u02DB\u02DC\x07" +
		"#\x02\x02\u02DC\u02DD\x07\x04\x02\x02\u02DD\xA5\x03\x02\x02\x02\u02DE" +
		"\u02E0\x05\xA8U\x02\u02DF\u02DE\x03\x02\x02\x02\u02E0\u02E1\x03\x02\x02" +
		"\x02\u02E1\u02DF\x03\x02\x02\x02\u02E1\u02E2\x03\x02\x02\x02\u02E2\xA7" +
		"\x03\x02\x02\x02\u02E3\u02E9\x05\xAAV\x02\u02E4\u02E9\x05\xACW\x02\u02E5" +
		"\u02E9\x05\xAEX\x02\u02E6\u02E9\x05\xB0Y\x02\u02E7\u02E9\x05\xB2Z\x02" +
		"\u02E8\u02E3\x03\x02\x02\x02\u02E8\u02E4\x03\x02\x02\x02\u02E8\u02E5\x03" +
		"\x02\x02\x02\u02E8\u02E6\x03\x02\x02\x02\u02E8\u02E7\x03\x02\x02\x02\u02E9" +
		"\xA9\x03\x02\x02\x02\u02EA\u02EB\x07\x03\x02\x02\u02EB\u02EC\x07E\x02" +
		"\x02\u02EC\u02ED\x07\x07\x02\x02\u02ED\u02EE\t\x05\x02\x02\u02EE\u02EF" +
		"\x07\x04\x02\x02\u02EF\xAB\x03\x02\x02\x02\u02F0\u02F1\x07\x03\x02\x02" +
		"\u02F1\u02F2\x07D\x02\x02\u02F2\u02F3\x07\x07\x02\x02\u02F3\u02F8\x07" +
		"O\x02\x02\u02F4\u02F5\x07\b\x02\x02\u02F5\u02F7\x07O\x02\x02\u02F6\u02F4" +
		"\x03\x02\x02\x02\u02F7\u02FA\x03\x02\x02\x02\u02F8\u02F6\x03\x02\x02\x02" +
		"\u02F8\u02F9\x03\x02\x02\x02\u02F9\u02FB\x03\x02\x02\x02\u02FA\u02F8\x03" +
		"\x02\x02\x02\u02FB\u02FC\x07\x04\x02\x02\u02FC\xAD\x03\x02\x02\x02\u02FD" +
		"\u02FE\x07\x03\x02\x02\u02FE\u02FF\x07I\x02\x02\u02FF\u0300\x07\x07\x02" +
		"\x02\u0300\u0301\t\x06\x02\x02\u0301\u0302\x07\x04\x02\x02\u0302\xAF\x03" +
		"\x02\x02\x02\u0303\u0304\x07\x03\x02\x02\u0304\u0305\x07L\x02\x02\u0305" +
		"\u0306\x07\x07\x02\x02\u0306\u0307\x07\x1B\x02\x02\u0307\u0308\x07\x04" +
		"\x02\x02\u0308\xB1\x03\x02\x02\x02\u0309\u030A\x07\x03\x02\x02\u030A\u030B" +
		"\x07M\x02\x02\u030B\u030C\x07\x07\x02\x02\u030C\u030D\x07\x1B\x02\x02" +
		"\u030D\u030E\x07\x04\x02\x02\u030E\xB3\x03\x02\x02\x029\xB7\xB9\xC0\xCD" +
		"\xCF\xD8\xDA\xE3\xEC\xEE\xF4\xF9\xFC\u0103\u0108\u010E\u0114\u0116\u0119" +
		"\u011D\u0124\u0132\u0174\u0179\u017C\u0183\u0188\u01A1\u01A8\u01AC\u01B3" +
		"\u01BA\u01BF\u01D9\u01DC\u01E5\u01E9\u01FC\u0200\u0213\u0218\u0231\u0237" +
		"\u025E\u0262\u0279\u0284\u028E\u02A1\u02B4\u02C6\u02CD\u02E1\u02E8\u02F8";
	public static readonly _serializedATN: string = Utils.join(
		[
			tnsnamesParser._serializedATNSegment0,
			tnsnamesParser._serializedATNSegment1,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!tnsnamesParser.__ATN) {
			tnsnamesParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(tnsnamesParser._serializedATN));
		}

		return tnsnamesParser.__ATN;
	}

}

export class TnsnamesContext extends ParserRuleContext {
	public tns_entry(): Tns_entryContext[];
	public tns_entry(i: number): Tns_entryContext;
	public tns_entry(i?: number): Tns_entryContext | Tns_entryContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Tns_entryContext);
		} else {
			return this.getRuleContext(i, Tns_entryContext);
		}
	}
	public ifile(): IfileContext[];
	public ifile(i: number): IfileContext;
	public ifile(i?: number): IfileContext | IfileContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IfileContext);
		} else {
			return this.getRuleContext(i, IfileContext);
		}
	}
	public lsnr_entry(): Lsnr_entryContext[];
	public lsnr_entry(i: number): Lsnr_entryContext;
	public lsnr_entry(i?: number): Lsnr_entryContext | Lsnr_entryContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Lsnr_entryContext);
		} else {
			return this.getRuleContext(i, Lsnr_entryContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tnsnamesParser.RULE_tnsnames; }
	// @Override
	public enterRule(listener: tnsnamesParserListener): void {
		if (listener.enterTnsnames) {
			listener.enterTnsnames(this);
		}
	}
	// @Override
	public exitRule(listener: tnsnamesParserListener): void {
		if (listener.exitTnsnames) {
			listener.exitTnsnames(this);
		}
	}
}


export class Tns_entryContext extends ParserRuleContext {
	public alias_list(): Alias_listContext {
		return this.getRuleContext(0, Alias_listContext);
	}
	public EQUAL(): TerminalNode { return this.getToken(tnsnamesParser.EQUAL, 0); }
	public description_list(): Description_listContext | undefined {
		return this.tryGetRuleContext(0, Description_listContext);
	}
	public description(): DescriptionContext | undefined {
		return this.tryGetRuleContext(0, DescriptionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tnsnamesParser.RULE_tns_entry; }
	// @Override
	public enterRule(listener: tnsnamesParserListener): void {
		if (listener.enterTns_entry) {
			listener.enterTns_entry(this);
		}
	}
	// @Override
	public exitRule(listener: tnsnamesParserListener): void {
		if (listener.exitTns_entry) {
			listener.exitTns_entry(this);
		}
	}
}


export class IfileContext extends ParserRuleContext {
	public IFILE(): TerminalNode { return this.getToken(tnsnamesParser.IFILE, 0); }
	public I_EQUAL(): TerminalNode { return this.getToken(tnsnamesParser.I_EQUAL, 0); }
	public I_STRING(): TerminalNode { return this.getToken(tnsnamesParser.I_STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tnsnamesParser.RULE_ifile; }
	// @Override
	public enterRule(listener: tnsnamesParserListener): void {
		if (listener.enterIfile) {
			listener.enterIfile(this);
		}
	}
	// @Override
	public exitRule(listener: tnsnamesParserListener): void {
		if (listener.exitIfile) {
			listener.exitIfile(this);
		}
	}
}


export class Lsnr_entryContext extends ParserRuleContext {
	public alias(): AliasContext {
		return this.getRuleContext(0, AliasContext);
	}
	public EQUAL(): TerminalNode { return this.getToken(tnsnamesParser.EQUAL, 0); }
	public lsnr_description(): Lsnr_descriptionContext | undefined {
		return this.tryGetRuleContext(0, Lsnr_descriptionContext);
	}
	public address_list(): Address_listContext | undefined {
		return this.tryGetRuleContext(0, Address_listContext);
	}
	public address(): AddressContext[];
	public address(i: number): AddressContext;
	public address(i?: number): AddressContext | AddressContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AddressContext);
		} else {
			return this.getRuleContext(i, AddressContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tnsnamesParser.RULE_lsnr_entry; }
	// @Override
	public enterRule(listener: tnsnamesParserListener): void {
		if (listener.enterLsnr_entry) {
			listener.enterLsnr_entry(this);
		}
	}
	// @Override
	public exitRule(listener: tnsnamesParserListener): void {
		if (listener.exitLsnr_entry) {
			listener.exitLsnr_entry(this);
		}
	}
}


export class Lsnr_descriptionContext extends ParserRuleContext {
	public L_PAREN(): TerminalNode { return this.getToken(tnsnamesParser.L_PAREN, 0); }
	public DESCRIPTION(): TerminalNode { return this.getToken(tnsnamesParser.DESCRIPTION, 0); }
	public EQUAL(): TerminalNode { return this.getToken(tnsnamesParser.EQUAL, 0); }
	public R_PAREN(): TerminalNode { return this.getToken(tnsnamesParser.R_PAREN, 0); }
	public address_list(): Address_listContext | undefined {
		return this.tryGetRuleContext(0, Address_listContext);
	}
	public address(): AddressContext[];
	public address(i: number): AddressContext;
	public address(i?: number): AddressContext | AddressContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AddressContext);
		} else {
			return this.getRuleContext(i, AddressContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tnsnamesParser.RULE_lsnr_description; }
	// @Override
	public enterRule(listener: tnsnamesParserListener): void {
		if (listener.enterLsnr_description) {
			listener.enterLsnr_description(this);
		}
	}
	// @Override
	public exitRule(listener: tnsnamesParserListener): void {
		if (listener.exitLsnr_description) {
			listener.exitLsnr_description(this);
		}
	}
}


export class Alias_listContext extends ParserRuleContext {
	public alias(): AliasContext[];
	public alias(i: number): AliasContext;
	public alias(i?: number): AliasContext | AliasContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AliasContext);
		} else {
			return this.getRuleContext(i, AliasContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(tnsnamesParser.COMMA);
		} else {
			return this.getToken(tnsnamesParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tnsnamesParser.RULE_alias_list; }
	// @Override
	public enterRule(listener: tnsnamesParserListener): void {
		if (listener.enterAlias_list) {
			listener.enterAlias_list(this);
		}
	}
	// @Override
	public exitRule(listener: tnsnamesParserListener): void {
		if (listener.exitAlias_list) {
			listener.exitAlias_list(this);
		}
	}
}


export class AliasContext extends ParserRuleContext {
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(tnsnamesParser.ID);
		} else {
			return this.getToken(tnsnamesParser.ID, i);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(tnsnamesParser.DOT);
		} else {
			return this.getToken(tnsnamesParser.DOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tnsnamesParser.RULE_alias; }
	// @Override
	public enterRule(listener: tnsnamesParserListener): void {
		if (listener.enterAlias) {
			listener.enterAlias(this);
		}
	}
	// @Override
	public exitRule(listener: tnsnamesParserListener): void {
		if (listener.exitAlias) {
			listener.exitAlias(this);
		}
	}
}


export class Description_listContext extends ParserRuleContext {
	public L_PAREN(): TerminalNode { return this.getToken(tnsnamesParser.L_PAREN, 0); }
	public DESCRIPTION_LIST(): TerminalNode { return this.getToken(tnsnamesParser.DESCRIPTION_LIST, 0); }
	public EQUAL(): TerminalNode { return this.getToken(tnsnamesParser.EQUAL, 0); }
	public R_PAREN(): TerminalNode { return this.getToken(tnsnamesParser.R_PAREN, 0); }
	public dl_params(): Dl_paramsContext[];
	public dl_params(i: number): Dl_paramsContext;
	public dl_params(i?: number): Dl_paramsContext | Dl_paramsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Dl_paramsContext);
		} else {
			return this.getRuleContext(i, Dl_paramsContext);
		}
	}
	public description(): DescriptionContext[];
	public description(i: number): DescriptionContext;
	public description(i?: number): DescriptionContext | DescriptionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DescriptionContext);
		} else {
			return this.getRuleContext(i, DescriptionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tnsnamesParser.RULE_description_list; }
	// @Override
	public enterRule(listener: tnsnamesParserListener): void {
		if (listener.enterDescription_list) {
			listener.enterDescription_list(this);
		}
	}
	// @Override
	public exitRule(listener: tnsnamesParserListener): void {
		if (listener.exitDescription_list) {
			listener.exitDescription_list(this);
		}
	}
}


export class Dl_paramsContext extends ParserRuleContext {
	public dl_parameter(): Dl_parameterContext[];
	public dl_parameter(i: number): Dl_parameterContext;
	public dl_parameter(i?: number): Dl_parameterContext | Dl_parameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Dl_parameterContext);
		} else {
			return this.getRuleContext(i, Dl_parameterContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tnsnamesParser.RULE_dl_params; }
	// @Override
	public enterRule(listener: tnsnamesParserListener): void {
		if (listener.enterDl_params) {
			listener.enterDl_params(this);
		}
	}
	// @Override
	public exitRule(listener: tnsnamesParserListener): void {
		if (listener.exitDl_params) {
			listener.exitDl_params(this);
		}
	}
}


export class Dl_parameterContext extends ParserRuleContext {
	public al_failover(): Al_failoverContext | undefined {
		return this.tryGetRuleContext(0, Al_failoverContext);
	}
	public al_load_balance(): Al_load_balanceContext | undefined {
		return this.tryGetRuleContext(0, Al_load_balanceContext);
	}
	public al_source_route(): Al_source_routeContext | undefined {
		return this.tryGetRuleContext(0, Al_source_routeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tnsnamesParser.RULE_dl_parameter; }
	// @Override
	public enterRule(listener: tnsnamesParserListener): void {
		if (listener.enterDl_parameter) {
			listener.enterDl_parameter(this);
		}
	}
	// @Override
	public exitRule(listener: tnsnamesParserListener): void {
		if (listener.exitDl_parameter) {
			listener.exitDl_parameter(this);
		}
	}
}


export class DescriptionContext extends ParserRuleContext {
	public L_PAREN(): TerminalNode { return this.getToken(tnsnamesParser.L_PAREN, 0); }
	public DESCRIPTION(): TerminalNode { return this.getToken(tnsnamesParser.DESCRIPTION, 0); }
	public EQUAL(): TerminalNode { return this.getToken(tnsnamesParser.EQUAL, 0); }
	public connect_data(): Connect_dataContext {
		return this.getRuleContext(0, Connect_dataContext);
	}
	public R_PAREN(): TerminalNode { return this.getToken(tnsnamesParser.R_PAREN, 0); }
	public address_list(): Address_listContext | undefined {
		return this.tryGetRuleContext(0, Address_listContext);
	}
	public d_params(): D_paramsContext[];
	public d_params(i: number): D_paramsContext;
	public d_params(i?: number): D_paramsContext | D_paramsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(D_paramsContext);
		} else {
			return this.getRuleContext(i, D_paramsContext);
		}
	}
	public address(): AddressContext[];
	public address(i: number): AddressContext;
	public address(i?: number): AddressContext | AddressContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AddressContext);
		} else {
			return this.getRuleContext(i, AddressContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tnsnamesParser.RULE_description; }
	// @Override
	public enterRule(listener: tnsnamesParserListener): void {
		if (listener.enterDescription) {
			listener.enterDescription(this);
		}
	}
	// @Override
	public exitRule(listener: tnsnamesParserListener): void {
		if (listener.exitDescription) {
			listener.exitDescription(this);
		}
	}
}


export class D_paramsContext extends ParserRuleContext {
	public d_parameter(): D_parameterContext[];
	public d_parameter(i: number): D_parameterContext;
	public d_parameter(i?: number): D_parameterContext | D_parameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(D_parameterContext);
		} else {
			return this.getRuleContext(i, D_parameterContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tnsnamesParser.RULE_d_params; }
	// @Override
	public enterRule(listener: tnsnamesParserListener): void {
		if (listener.enterD_params) {
			listener.enterD_params(this);
		}
	}
	// @Override
	public exitRule(listener: tnsnamesParserListener): void {
		if (listener.exitD_params) {
			listener.exitD_params(this);
		}
	}
}


export class D_parameterContext extends ParserRuleContext {
	public d_enable(): D_enableContext | undefined {
		return this.tryGetRuleContext(0, D_enableContext);
	}
	public al_failover(): Al_failoverContext | undefined {
		return this.tryGetRuleContext(0, Al_failoverContext);
	}
	public al_load_balance(): Al_load_balanceContext | undefined {
		return this.tryGetRuleContext(0, Al_load_balanceContext);
	}
	public d_sdu(): D_sduContext | undefined {
		return this.tryGetRuleContext(0, D_sduContext);
	}
	public d_recv_buf(): D_recv_bufContext | undefined {
		return this.tryGetRuleContext(0, D_recv_bufContext);
	}
	public d_send_buf(): D_send_bufContext | undefined {
		return this.tryGetRuleContext(0, D_send_bufContext);
	}
	public al_source_route(): Al_source_routeContext | undefined {
		return this.tryGetRuleContext(0, Al_source_routeContext);
	}
	public d_service_type(): D_service_typeContext | undefined {
		return this.tryGetRuleContext(0, D_service_typeContext);
	}
	public d_security(): D_securityContext | undefined {
		return this.tryGetRuleContext(0, D_securityContext);
	}
	public d_conn_timeout(): D_conn_timeoutContext | undefined {
		return this.tryGetRuleContext(0, D_conn_timeoutContext);
	}
	public d_retry_count(): D_retry_countContext | undefined {
		return this.tryGetRuleContext(0, D_retry_countContext);
	}
	public d_tct(): D_tctContext | undefined {
		return this.tryGetRuleContext(0, D_tctContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tnsnamesParser.RULE_d_parameter; }
	// @Override
	public enterRule(listener: tnsnamesParserListener): void {
		if (listener.enterD_parameter) {
			listener.enterD_parameter(this);
		}
	}
	// @Override
	public exitRule(listener: tnsnamesParserListener): void {
		if (listener.exitD_parameter) {
			listener.exitD_parameter(this);
		}
	}
}


export class D_enableContext extends ParserRuleContext {
	public L_PAREN(): TerminalNode { return this.getToken(tnsnamesParser.L_PAREN, 0); }
	public ENABLE(): TerminalNode { return this.getToken(tnsnamesParser.ENABLE, 0); }
	public EQUAL(): TerminalNode { return this.getToken(tnsnamesParser.EQUAL, 0); }
	public BROKEN(): TerminalNode { return this.getToken(tnsnamesParser.BROKEN, 0); }
	public R_PAREN(): TerminalNode { return this.getToken(tnsnamesParser.R_PAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tnsnamesParser.RULE_d_enable; }
	// @Override
	public enterRule(listener: tnsnamesParserListener): void {
		if (listener.enterD_enable) {
			listener.enterD_enable(this);
		}
	}
	// @Override
	public exitRule(listener: tnsnamesParserListener): void {
		if (listener.exitD_enable) {
			listener.exitD_enable(this);
		}
	}
}


export class D_sduContext extends ParserRuleContext {
	public L_PAREN(): TerminalNode { return this.getToken(tnsnamesParser.L_PAREN, 0); }
	public SDU(): TerminalNode { return this.getToken(tnsnamesParser.SDU, 0); }
	public EQUAL(): TerminalNode { return this.getToken(tnsnamesParser.EQUAL, 0); }
	public INT(): TerminalNode { return this.getToken(tnsnamesParser.INT, 0); }
	public R_PAREN(): TerminalNode { return this.getToken(tnsnamesParser.R_PAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tnsnamesParser.RULE_d_sdu; }
	// @Override
	public enterRule(listener: tnsnamesParserListener): void {
		if (listener.enterD_sdu) {
			listener.enterD_sdu(this);
		}
	}
	// @Override
	public exitRule(listener: tnsnamesParserListener): void {
		if (listener.exitD_sdu) {
			listener.exitD_sdu(this);
		}
	}
}


export class D_recv_bufContext extends ParserRuleContext {
	public L_PAREN(): TerminalNode { return this.getToken(tnsnamesParser.L_PAREN, 0); }
	public RECV_BUF(): TerminalNode { return this.getToken(tnsnamesParser.RECV_BUF, 0); }
	public EQUAL(): TerminalNode { return this.getToken(tnsnamesParser.EQUAL, 0); }
	public INT(): TerminalNode { return this.getToken(tnsnamesParser.INT, 0); }
	public R_PAREN(): TerminalNode { return this.getToken(tnsnamesParser.R_PAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tnsnamesParser.RULE_d_recv_buf; }
	// @Override
	public enterRule(listener: tnsnamesParserListener): void {
		if (listener.enterD_recv_buf) {
			listener.enterD_recv_buf(this);
		}
	}
	// @Override
	public exitRule(listener: tnsnamesParserListener): void {
		if (listener.exitD_recv_buf) {
			listener.exitD_recv_buf(this);
		}
	}
}


export class D_send_bufContext extends ParserRuleContext {
	public L_PAREN(): TerminalNode { return this.getToken(tnsnamesParser.L_PAREN, 0); }
	public SEND_BUF(): TerminalNode { return this.getToken(tnsnamesParser.SEND_BUF, 0); }
	public EQUAL(): TerminalNode { return this.getToken(tnsnamesParser.EQUAL, 0); }
	public INT(): TerminalNode { return this.getToken(tnsnamesParser.INT, 0); }
	public R_PAREN(): TerminalNode { return this.getToken(tnsnamesParser.R_PAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tnsnamesParser.RULE_d_send_buf; }
	// @Override
	public enterRule(listener: tnsnamesParserListener): void {
		if (listener.enterD_send_buf) {
			listener.enterD_send_buf(this);
		}
	}
	// @Override
	public exitRule(listener: tnsnamesParserListener): void {
		if (listener.exitD_send_buf) {
			listener.exitD_send_buf(this);
		}
	}
}


export class D_service_typeContext extends ParserRuleContext {
	public L_PAREN(): TerminalNode { return this.getToken(tnsnamesParser.L_PAREN, 0); }
	public SERVICE_TYPE(): TerminalNode { return this.getToken(tnsnamesParser.SERVICE_TYPE, 0); }
	public EQUAL(): TerminalNode { return this.getToken(tnsnamesParser.EQUAL, 0); }
	public ID(): TerminalNode { return this.getToken(tnsnamesParser.ID, 0); }
	public R_PAREN(): TerminalNode { return this.getToken(tnsnamesParser.R_PAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tnsnamesParser.RULE_d_service_type; }
	// @Override
	public enterRule(listener: tnsnamesParserListener): void {
		if (listener.enterD_service_type) {
			listener.enterD_service_type(this);
		}
	}
	// @Override
	public exitRule(listener: tnsnamesParserListener): void {
		if (listener.exitD_service_type) {
			listener.exitD_service_type(this);
		}
	}
}


export class D_securityContext extends ParserRuleContext {
	public L_PAREN(): TerminalNode { return this.getToken(tnsnamesParser.L_PAREN, 0); }
	public SECURITY(): TerminalNode { return this.getToken(tnsnamesParser.SECURITY, 0); }
	public EQUAL(): TerminalNode { return this.getToken(tnsnamesParser.EQUAL, 0); }
	public ds_parameter(): Ds_parameterContext {
		return this.getRuleContext(0, Ds_parameterContext);
	}
	public R_PAREN(): TerminalNode { return this.getToken(tnsnamesParser.R_PAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tnsnamesParser.RULE_d_security; }
	// @Override
	public enterRule(listener: tnsnamesParserListener): void {
		if (listener.enterD_security) {
			listener.enterD_security(this);
		}
	}
	// @Override
	public exitRule(listener: tnsnamesParserListener): void {
		if (listener.exitD_security) {
			listener.exitD_security(this);
		}
	}
}


export class D_conn_timeoutContext extends ParserRuleContext {
	public L_PAREN(): TerminalNode { return this.getToken(tnsnamesParser.L_PAREN, 0); }
	public CONN_TIMEOUT(): TerminalNode { return this.getToken(tnsnamesParser.CONN_TIMEOUT, 0); }
	public EQUAL(): TerminalNode { return this.getToken(tnsnamesParser.EQUAL, 0); }
	public INT(): TerminalNode { return this.getToken(tnsnamesParser.INT, 0); }
	public R_PAREN(): TerminalNode { return this.getToken(tnsnamesParser.R_PAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tnsnamesParser.RULE_d_conn_timeout; }
	// @Override
	public enterRule(listener: tnsnamesParserListener): void {
		if (listener.enterD_conn_timeout) {
			listener.enterD_conn_timeout(this);
		}
	}
	// @Override
	public exitRule(listener: tnsnamesParserListener): void {
		if (listener.exitD_conn_timeout) {
			listener.exitD_conn_timeout(this);
		}
	}
}


export class D_retry_countContext extends ParserRuleContext {
	public L_PAREN(): TerminalNode { return this.getToken(tnsnamesParser.L_PAREN, 0); }
	public RETRY_COUNT(): TerminalNode { return this.getToken(tnsnamesParser.RETRY_COUNT, 0); }
	public EQUAL(): TerminalNode { return this.getToken(tnsnamesParser.EQUAL, 0); }
	public INT(): TerminalNode { return this.getToken(tnsnamesParser.INT, 0); }
	public R_PAREN(): TerminalNode { return this.getToken(tnsnamesParser.R_PAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tnsnamesParser.RULE_d_retry_count; }
	// @Override
	public enterRule(listener: tnsnamesParserListener): void {
		if (listener.enterD_retry_count) {
			listener.enterD_retry_count(this);
		}
	}
	// @Override
	public exitRule(listener: tnsnamesParserListener): void {
		if (listener.exitD_retry_count) {
			listener.exitD_retry_count(this);
		}
	}
}


export class D_tctContext extends ParserRuleContext {
	public L_PAREN(): TerminalNode { return this.getToken(tnsnamesParser.L_PAREN, 0); }
	public TCT(): TerminalNode { return this.getToken(tnsnamesParser.TCT, 0); }
	public EQUAL(): TerminalNode { return this.getToken(tnsnamesParser.EQUAL, 0); }
	public INT(): TerminalNode { return this.getToken(tnsnamesParser.INT, 0); }
	public R_PAREN(): TerminalNode { return this.getToken(tnsnamesParser.R_PAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tnsnamesParser.RULE_d_tct; }
	// @Override
	public enterRule(listener: tnsnamesParserListener): void {
		if (listener.enterD_tct) {
			listener.enterD_tct(this);
		}
	}
	// @Override
	public exitRule(listener: tnsnamesParserListener): void {
		if (listener.exitD_tct) {
			listener.exitD_tct(this);
		}
	}
}


export class Ds_parameterContext extends ParserRuleContext {
	public L_PAREN(): TerminalNode { return this.getToken(tnsnamesParser.L_PAREN, 0); }
	public SSL_CERT(): TerminalNode { return this.getToken(tnsnamesParser.SSL_CERT, 0); }
	public EQUAL(): TerminalNode { return this.getToken(tnsnamesParser.EQUAL, 0); }
	public DQ_STRING(): TerminalNode { return this.getToken(tnsnamesParser.DQ_STRING, 0); }
	public R_PAREN(): TerminalNode { return this.getToken(tnsnamesParser.R_PAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tnsnamesParser.RULE_ds_parameter; }
	// @Override
	public enterRule(listener: tnsnamesParserListener): void {
		if (listener.enterDs_parameter) {
			listener.enterDs_parameter(this);
		}
	}
	// @Override
	public exitRule(listener: tnsnamesParserListener): void {
		if (listener.exitDs_parameter) {
			listener.exitDs_parameter(this);
		}
	}
}


export class Address_listContext extends ParserRuleContext {
	public L_PAREN(): TerminalNode { return this.getToken(tnsnamesParser.L_PAREN, 0); }
	public ADDRESS_LIST(): TerminalNode { return this.getToken(tnsnamesParser.ADDRESS_LIST, 0); }
	public EQUAL(): TerminalNode { return this.getToken(tnsnamesParser.EQUAL, 0); }
	public R_PAREN(): TerminalNode { return this.getToken(tnsnamesParser.R_PAREN, 0); }
	public al_params(): Al_paramsContext[];
	public al_params(i: number): Al_paramsContext;
	public al_params(i?: number): Al_paramsContext | Al_paramsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Al_paramsContext);
		} else {
			return this.getRuleContext(i, Al_paramsContext);
		}
	}
	public address(): AddressContext[];
	public address(i: number): AddressContext;
	public address(i?: number): AddressContext | AddressContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AddressContext);
		} else {
			return this.getRuleContext(i, AddressContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tnsnamesParser.RULE_address_list; }
	// @Override
	public enterRule(listener: tnsnamesParserListener): void {
		if (listener.enterAddress_list) {
			listener.enterAddress_list(this);
		}
	}
	// @Override
	public exitRule(listener: tnsnamesParserListener): void {
		if (listener.exitAddress_list) {
			listener.exitAddress_list(this);
		}
	}
}


export class Al_paramsContext extends ParserRuleContext {
	public al_parameter(): Al_parameterContext[];
	public al_parameter(i: number): Al_parameterContext;
	public al_parameter(i?: number): Al_parameterContext | Al_parameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Al_parameterContext);
		} else {
			return this.getRuleContext(i, Al_parameterContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tnsnamesParser.RULE_al_params; }
	// @Override
	public enterRule(listener: tnsnamesParserListener): void {
		if (listener.enterAl_params) {
			listener.enterAl_params(this);
		}
	}
	// @Override
	public exitRule(listener: tnsnamesParserListener): void {
		if (listener.exitAl_params) {
			listener.exitAl_params(this);
		}
	}
}


export class Al_parameterContext extends ParserRuleContext {
	public al_failover(): Al_failoverContext | undefined {
		return this.tryGetRuleContext(0, Al_failoverContext);
	}
	public al_load_balance(): Al_load_balanceContext | undefined {
		return this.tryGetRuleContext(0, Al_load_balanceContext);
	}
	public al_source_route(): Al_source_routeContext | undefined {
		return this.tryGetRuleContext(0, Al_source_routeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tnsnamesParser.RULE_al_parameter; }
	// @Override
	public enterRule(listener: tnsnamesParserListener): void {
		if (listener.enterAl_parameter) {
			listener.enterAl_parameter(this);
		}
	}
	// @Override
	public exitRule(listener: tnsnamesParserListener): void {
		if (listener.exitAl_parameter) {
			listener.exitAl_parameter(this);
		}
	}
}


export class Al_failoverContext extends ParserRuleContext {
	public L_PAREN(): TerminalNode { return this.getToken(tnsnamesParser.L_PAREN, 0); }
	public FAILOVER(): TerminalNode { return this.getToken(tnsnamesParser.FAILOVER, 0); }
	public EQUAL(): TerminalNode { return this.getToken(tnsnamesParser.EQUAL, 0); }
	public R_PAREN(): TerminalNode { return this.getToken(tnsnamesParser.R_PAREN, 0); }
	public YES_NO(): TerminalNode | undefined { return this.tryGetToken(tnsnamesParser.YES_NO, 0); }
	public ON_OFF(): TerminalNode | undefined { return this.tryGetToken(tnsnamesParser.ON_OFF, 0); }
	public TRUE_FALSE(): TerminalNode | undefined { return this.tryGetToken(tnsnamesParser.TRUE_FALSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tnsnamesParser.RULE_al_failover; }
	// @Override
	public enterRule(listener: tnsnamesParserListener): void {
		if (listener.enterAl_failover) {
			listener.enterAl_failover(this);
		}
	}
	// @Override
	public exitRule(listener: tnsnamesParserListener): void {
		if (listener.exitAl_failover) {
			listener.exitAl_failover(this);
		}
	}
}


export class Al_load_balanceContext extends ParserRuleContext {
	public L_PAREN(): TerminalNode { return this.getToken(tnsnamesParser.L_PAREN, 0); }
	public LOAD_BALANCE(): TerminalNode { return this.getToken(tnsnamesParser.LOAD_BALANCE, 0); }
	public EQUAL(): TerminalNode { return this.getToken(tnsnamesParser.EQUAL, 0); }
	public R_PAREN(): TerminalNode { return this.getToken(tnsnamesParser.R_PAREN, 0); }
	public YES_NO(): TerminalNode | undefined { return this.tryGetToken(tnsnamesParser.YES_NO, 0); }
	public ON_OFF(): TerminalNode | undefined { return this.tryGetToken(tnsnamesParser.ON_OFF, 0); }
	public TRUE_FALSE(): TerminalNode | undefined { return this.tryGetToken(tnsnamesParser.TRUE_FALSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tnsnamesParser.RULE_al_load_balance; }
	// @Override
	public enterRule(listener: tnsnamesParserListener): void {
		if (listener.enterAl_load_balance) {
			listener.enterAl_load_balance(this);
		}
	}
	// @Override
	public exitRule(listener: tnsnamesParserListener): void {
		if (listener.exitAl_load_balance) {
			listener.exitAl_load_balance(this);
		}
	}
}


export class Al_source_routeContext extends ParserRuleContext {
	public L_PAREN(): TerminalNode { return this.getToken(tnsnamesParser.L_PAREN, 0); }
	public SOURCE_ROUTE(): TerminalNode { return this.getToken(tnsnamesParser.SOURCE_ROUTE, 0); }
	public EQUAL(): TerminalNode { return this.getToken(tnsnamesParser.EQUAL, 0); }
	public R_PAREN(): TerminalNode { return this.getToken(tnsnamesParser.R_PAREN, 0); }
	public YES_NO(): TerminalNode | undefined { return this.tryGetToken(tnsnamesParser.YES_NO, 0); }
	public ON_OFF(): TerminalNode | undefined { return this.tryGetToken(tnsnamesParser.ON_OFF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tnsnamesParser.RULE_al_source_route; }
	// @Override
	public enterRule(listener: tnsnamesParserListener): void {
		if (listener.enterAl_source_route) {
			listener.enterAl_source_route(this);
		}
	}
	// @Override
	public exitRule(listener: tnsnamesParserListener): void {
		if (listener.exitAl_source_route) {
			listener.exitAl_source_route(this);
		}
	}
}


export class AddressContext extends ParserRuleContext {
	public L_PAREN(): TerminalNode { return this.getToken(tnsnamesParser.L_PAREN, 0); }
	public ADDRESS(): TerminalNode { return this.getToken(tnsnamesParser.ADDRESS, 0); }
	public EQUAL(): TerminalNode { return this.getToken(tnsnamesParser.EQUAL, 0); }
	public protocol_info(): Protocol_infoContext {
		return this.getRuleContext(0, Protocol_infoContext);
	}
	public R_PAREN(): TerminalNode { return this.getToken(tnsnamesParser.R_PAREN, 0); }
	public a_params(): A_paramsContext | undefined {
		return this.tryGetRuleContext(0, A_paramsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tnsnamesParser.RULE_address; }
	// @Override
	public enterRule(listener: tnsnamesParserListener): void {
		if (listener.enterAddress) {
			listener.enterAddress(this);
		}
	}
	// @Override
	public exitRule(listener: tnsnamesParserListener): void {
		if (listener.exitAddress) {
			listener.exitAddress(this);
		}
	}
}


export class A_paramsContext extends ParserRuleContext {
	public a_parameter(): A_parameterContext[];
	public a_parameter(i: number): A_parameterContext;
	public a_parameter(i?: number): A_parameterContext | A_parameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(A_parameterContext);
		} else {
			return this.getRuleContext(i, A_parameterContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tnsnamesParser.RULE_a_params; }
	// @Override
	public enterRule(listener: tnsnamesParserListener): void {
		if (listener.enterA_params) {
			listener.enterA_params(this);
		}
	}
	// @Override
	public exitRule(listener: tnsnamesParserListener): void {
		if (listener.exitA_params) {
			listener.exitA_params(this);
		}
	}
}


export class A_parameterContext extends ParserRuleContext {
	public d_send_buf(): D_send_bufContext | undefined {
		return this.tryGetRuleContext(0, D_send_bufContext);
	}
	public d_recv_buf(): D_recv_bufContext | undefined {
		return this.tryGetRuleContext(0, D_recv_bufContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tnsnamesParser.RULE_a_parameter; }
	// @Override
	public enterRule(listener: tnsnamesParserListener): void {
		if (listener.enterA_parameter) {
			listener.enterA_parameter(this);
		}
	}
	// @Override
	public exitRule(listener: tnsnamesParserListener): void {
		if (listener.exitA_parameter) {
			listener.exitA_parameter(this);
		}
	}
}


export class Protocol_infoContext extends ParserRuleContext {
	public tcp_protocol(): Tcp_protocolContext | undefined {
		return this.tryGetRuleContext(0, Tcp_protocolContext);
	}
	public ipc_protocol(): Ipc_protocolContext | undefined {
		return this.tryGetRuleContext(0, Ipc_protocolContext);
	}
	public spx_protocol(): Spx_protocolContext | undefined {
		return this.tryGetRuleContext(0, Spx_protocolContext);
	}
	public nmp_protocol(): Nmp_protocolContext | undefined {
		return this.tryGetRuleContext(0, Nmp_protocolContext);
	}
	public beq_protocol(): Beq_protocolContext | undefined {
		return this.tryGetRuleContext(0, Beq_protocolContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tnsnamesParser.RULE_protocol_info; }
	// @Override
	public enterRule(listener: tnsnamesParserListener): void {
		if (listener.enterProtocol_info) {
			listener.enterProtocol_info(this);
		}
	}
	// @Override
	public exitRule(listener: tnsnamesParserListener): void {
		if (listener.exitProtocol_info) {
			listener.exitProtocol_info(this);
		}
	}
}


export class Tcp_protocolContext extends ParserRuleContext {
	public tcp_params(): Tcp_paramsContext {
		return this.getRuleContext(0, Tcp_paramsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tnsnamesParser.RULE_tcp_protocol; }
	// @Override
	public enterRule(listener: tnsnamesParserListener): void {
		if (listener.enterTcp_protocol) {
			listener.enterTcp_protocol(this);
		}
	}
	// @Override
	public exitRule(listener: tnsnamesParserListener): void {
		if (listener.exitTcp_protocol) {
			listener.exitTcp_protocol(this);
		}
	}
}


export class Tcp_paramsContext extends ParserRuleContext {
	public tcp_parameter(): Tcp_parameterContext[];
	public tcp_parameter(i: number): Tcp_parameterContext;
	public tcp_parameter(i?: number): Tcp_parameterContext | Tcp_parameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Tcp_parameterContext);
		} else {
			return this.getRuleContext(i, Tcp_parameterContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tnsnamesParser.RULE_tcp_params; }
	// @Override
	public enterRule(listener: tnsnamesParserListener): void {
		if (listener.enterTcp_params) {
			listener.enterTcp_params(this);
		}
	}
	// @Override
	public exitRule(listener: tnsnamesParserListener): void {
		if (listener.exitTcp_params) {
			listener.exitTcp_params(this);
		}
	}
}


export class Tcp_parameterContext extends ParserRuleContext {
	public tcp_host(): Tcp_hostContext | undefined {
		return this.tryGetRuleContext(0, Tcp_hostContext);
	}
	public tcp_port(): Tcp_portContext | undefined {
		return this.tryGetRuleContext(0, Tcp_portContext);
	}
	public tcp_tcp(): Tcp_tcpContext | undefined {
		return this.tryGetRuleContext(0, Tcp_tcpContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tnsnamesParser.RULE_tcp_parameter; }
	// @Override
	public enterRule(listener: tnsnamesParserListener): void {
		if (listener.enterTcp_parameter) {
			listener.enterTcp_parameter(this);
		}
	}
	// @Override
	public exitRule(listener: tnsnamesParserListener): void {
		if (listener.exitTcp_parameter) {
			listener.exitTcp_parameter(this);
		}
	}
}


export class Tcp_hostContext extends ParserRuleContext {
	public L_PAREN(): TerminalNode { return this.getToken(tnsnamesParser.L_PAREN, 0); }
	public HOST(): TerminalNode { return this.getToken(tnsnamesParser.HOST, 0); }
	public EQUAL(): TerminalNode { return this.getToken(tnsnamesParser.EQUAL, 0); }
	public host(): HostContext {
		return this.getRuleContext(0, HostContext);
	}
	public R_PAREN(): TerminalNode { return this.getToken(tnsnamesParser.R_PAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tnsnamesParser.RULE_tcp_host; }
	// @Override
	public enterRule(listener: tnsnamesParserListener): void {
		if (listener.enterTcp_host) {
			listener.enterTcp_host(this);
		}
	}
	// @Override
	public exitRule(listener: tnsnamesParserListener): void {
		if (listener.exitTcp_host) {
			listener.exitTcp_host(this);
		}
	}
}


export class Tcp_portContext extends ParserRuleContext {
	public L_PAREN(): TerminalNode { return this.getToken(tnsnamesParser.L_PAREN, 0); }
	public PORT(): TerminalNode { return this.getToken(tnsnamesParser.PORT, 0); }
	public EQUAL(): TerminalNode { return this.getToken(tnsnamesParser.EQUAL, 0); }
	public port(): PortContext {
		return this.getRuleContext(0, PortContext);
	}
	public R_PAREN(): TerminalNode { return this.getToken(tnsnamesParser.R_PAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tnsnamesParser.RULE_tcp_port; }
	// @Override
	public enterRule(listener: tnsnamesParserListener): void {
		if (listener.enterTcp_port) {
			listener.enterTcp_port(this);
		}
	}
	// @Override
	public exitRule(listener: tnsnamesParserListener): void {
		if (listener.exitTcp_port) {
			listener.exitTcp_port(this);
		}
	}
}


export class Tcp_tcpContext extends ParserRuleContext {
	public L_PAREN(): TerminalNode { return this.getToken(tnsnamesParser.L_PAREN, 0); }
	public PROTOCOL(): TerminalNode { return this.getToken(tnsnamesParser.PROTOCOL, 0); }
	public EQUAL(): TerminalNode { return this.getToken(tnsnamesParser.EQUAL, 0); }
	public TCP(): TerminalNode { return this.getToken(tnsnamesParser.TCP, 0); }
	public R_PAREN(): TerminalNode { return this.getToken(tnsnamesParser.R_PAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tnsnamesParser.RULE_tcp_tcp; }
	// @Override
	public enterRule(listener: tnsnamesParserListener): void {
		if (listener.enterTcp_tcp) {
			listener.enterTcp_tcp(this);
		}
	}
	// @Override
	public exitRule(listener: tnsnamesParserListener): void {
		if (listener.exitTcp_tcp) {
			listener.exitTcp_tcp(this);
		}
	}
}


export class HostContext extends ParserRuleContext {
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(tnsnamesParser.ID);
		} else {
			return this.getToken(tnsnamesParser.ID, i);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(tnsnamesParser.DOT);
		} else {
			return this.getToken(tnsnamesParser.DOT, i);
		}
	}
	public IP(): TerminalNode | undefined { return this.tryGetToken(tnsnamesParser.IP, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tnsnamesParser.RULE_host; }
	// @Override
	public enterRule(listener: tnsnamesParserListener): void {
		if (listener.enterHost) {
			listener.enterHost(this);
		}
	}
	// @Override
	public exitRule(listener: tnsnamesParserListener): void {
		if (listener.exitHost) {
			listener.exitHost(this);
		}
	}
}


export class PortContext extends ParserRuleContext {
	public INT(): TerminalNode { return this.getToken(tnsnamesParser.INT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tnsnamesParser.RULE_port; }
	// @Override
	public enterRule(listener: tnsnamesParserListener): void {
		if (listener.enterPort) {
			listener.enterPort(this);
		}
	}
	// @Override
	public exitRule(listener: tnsnamesParserListener): void {
		if (listener.exitPort) {
			listener.exitPort(this);
		}
	}
}


export class Ipc_protocolContext extends ParserRuleContext {
	public ipc_params(): Ipc_paramsContext {
		return this.getRuleContext(0, Ipc_paramsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tnsnamesParser.RULE_ipc_protocol; }
	// @Override
	public enterRule(listener: tnsnamesParserListener): void {
		if (listener.enterIpc_protocol) {
			listener.enterIpc_protocol(this);
		}
	}
	// @Override
	public exitRule(listener: tnsnamesParserListener): void {
		if (listener.exitIpc_protocol) {
			listener.exitIpc_protocol(this);
		}
	}
}


export class Ipc_paramsContext extends ParserRuleContext {
	public ipc_parameter(): Ipc_parameterContext[];
	public ipc_parameter(i: number): Ipc_parameterContext;
	public ipc_parameter(i?: number): Ipc_parameterContext | Ipc_parameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Ipc_parameterContext);
		} else {
			return this.getRuleContext(i, Ipc_parameterContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tnsnamesParser.RULE_ipc_params; }
	// @Override
	public enterRule(listener: tnsnamesParserListener): void {
		if (listener.enterIpc_params) {
			listener.enterIpc_params(this);
		}
	}
	// @Override
	public exitRule(listener: tnsnamesParserListener): void {
		if (listener.exitIpc_params) {
			listener.exitIpc_params(this);
		}
	}
}


export class Ipc_parameterContext extends ParserRuleContext {
	public ipc_ipc(): Ipc_ipcContext | undefined {
		return this.tryGetRuleContext(0, Ipc_ipcContext);
	}
	public ipc_key(): Ipc_keyContext | undefined {
		return this.tryGetRuleContext(0, Ipc_keyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tnsnamesParser.RULE_ipc_parameter; }
	// @Override
	public enterRule(listener: tnsnamesParserListener): void {
		if (listener.enterIpc_parameter) {
			listener.enterIpc_parameter(this);
		}
	}
	// @Override
	public exitRule(listener: tnsnamesParserListener): void {
		if (listener.exitIpc_parameter) {
			listener.exitIpc_parameter(this);
		}
	}
}


export class Ipc_ipcContext extends ParserRuleContext {
	public L_PAREN(): TerminalNode { return this.getToken(tnsnamesParser.L_PAREN, 0); }
	public PROTOCOL(): TerminalNode { return this.getToken(tnsnamesParser.PROTOCOL, 0); }
	public EQUAL(): TerminalNode { return this.getToken(tnsnamesParser.EQUAL, 0); }
	public IPC(): TerminalNode { return this.getToken(tnsnamesParser.IPC, 0); }
	public R_PAREN(): TerminalNode { return this.getToken(tnsnamesParser.R_PAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tnsnamesParser.RULE_ipc_ipc; }
	// @Override
	public enterRule(listener: tnsnamesParserListener): void {
		if (listener.enterIpc_ipc) {
			listener.enterIpc_ipc(this);
		}
	}
	// @Override
	public exitRule(listener: tnsnamesParserListener): void {
		if (listener.exitIpc_ipc) {
			listener.exitIpc_ipc(this);
		}
	}
}


export class Ipc_keyContext extends ParserRuleContext {
	public L_PAREN(): TerminalNode { return this.getToken(tnsnamesParser.L_PAREN, 0); }
	public KEY(): TerminalNode { return this.getToken(tnsnamesParser.KEY, 0); }
	public EQUAL(): TerminalNode { return this.getToken(tnsnamesParser.EQUAL, 0); }
	public ID(): TerminalNode { return this.getToken(tnsnamesParser.ID, 0); }
	public R_PAREN(): TerminalNode { return this.getToken(tnsnamesParser.R_PAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tnsnamesParser.RULE_ipc_key; }
	// @Override
	public enterRule(listener: tnsnamesParserListener): void {
		if (listener.enterIpc_key) {
			listener.enterIpc_key(this);
		}
	}
	// @Override
	public exitRule(listener: tnsnamesParserListener): void {
		if (listener.exitIpc_key) {
			listener.exitIpc_key(this);
		}
	}
}


export class Spx_protocolContext extends ParserRuleContext {
	public spx_params(): Spx_paramsContext {
		return this.getRuleContext(0, Spx_paramsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tnsnamesParser.RULE_spx_protocol; }
	// @Override
	public enterRule(listener: tnsnamesParserListener): void {
		if (listener.enterSpx_protocol) {
			listener.enterSpx_protocol(this);
		}
	}
	// @Override
	public exitRule(listener: tnsnamesParserListener): void {
		if (listener.exitSpx_protocol) {
			listener.exitSpx_protocol(this);
		}
	}
}


export class Spx_paramsContext extends ParserRuleContext {
	public spx_parameter(): Spx_parameterContext[];
	public spx_parameter(i: number): Spx_parameterContext;
	public spx_parameter(i?: number): Spx_parameterContext | Spx_parameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Spx_parameterContext);
		} else {
			return this.getRuleContext(i, Spx_parameterContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tnsnamesParser.RULE_spx_params; }
	// @Override
	public enterRule(listener: tnsnamesParserListener): void {
		if (listener.enterSpx_params) {
			listener.enterSpx_params(this);
		}
	}
	// @Override
	public exitRule(listener: tnsnamesParserListener): void {
		if (listener.exitSpx_params) {
			listener.exitSpx_params(this);
		}
	}
}


export class Spx_parameterContext extends ParserRuleContext {
	public spx_spx(): Spx_spxContext | undefined {
		return this.tryGetRuleContext(0, Spx_spxContext);
	}
	public spx_service(): Spx_serviceContext | undefined {
		return this.tryGetRuleContext(0, Spx_serviceContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tnsnamesParser.RULE_spx_parameter; }
	// @Override
	public enterRule(listener: tnsnamesParserListener): void {
		if (listener.enterSpx_parameter) {
			listener.enterSpx_parameter(this);
		}
	}
	// @Override
	public exitRule(listener: tnsnamesParserListener): void {
		if (listener.exitSpx_parameter) {
			listener.exitSpx_parameter(this);
		}
	}
}


export class Spx_spxContext extends ParserRuleContext {
	public L_PAREN(): TerminalNode { return this.getToken(tnsnamesParser.L_PAREN, 0); }
	public PROTOCOL(): TerminalNode { return this.getToken(tnsnamesParser.PROTOCOL, 0); }
	public EQUAL(): TerminalNode { return this.getToken(tnsnamesParser.EQUAL, 0); }
	public SPX(): TerminalNode { return this.getToken(tnsnamesParser.SPX, 0); }
	public R_PAREN(): TerminalNode { return this.getToken(tnsnamesParser.R_PAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tnsnamesParser.RULE_spx_spx; }
	// @Override
	public enterRule(listener: tnsnamesParserListener): void {
		if (listener.enterSpx_spx) {
			listener.enterSpx_spx(this);
		}
	}
	// @Override
	public exitRule(listener: tnsnamesParserListener): void {
		if (listener.exitSpx_spx) {
			listener.exitSpx_spx(this);
		}
	}
}


export class Spx_serviceContext extends ParserRuleContext {
	public L_PAREN(): TerminalNode { return this.getToken(tnsnamesParser.L_PAREN, 0); }
	public SERVICE(): TerminalNode { return this.getToken(tnsnamesParser.SERVICE, 0); }
	public EQUAL(): TerminalNode { return this.getToken(tnsnamesParser.EQUAL, 0); }
	public ID(): TerminalNode { return this.getToken(tnsnamesParser.ID, 0); }
	public R_PAREN(): TerminalNode { return this.getToken(tnsnamesParser.R_PAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tnsnamesParser.RULE_spx_service; }
	// @Override
	public enterRule(listener: tnsnamesParserListener): void {
		if (listener.enterSpx_service) {
			listener.enterSpx_service(this);
		}
	}
	// @Override
	public exitRule(listener: tnsnamesParserListener): void {
		if (listener.exitSpx_service) {
			listener.exitSpx_service(this);
		}
	}
}


export class Nmp_protocolContext extends ParserRuleContext {
	public nmp_params(): Nmp_paramsContext {
		return this.getRuleContext(0, Nmp_paramsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tnsnamesParser.RULE_nmp_protocol; }
	// @Override
	public enterRule(listener: tnsnamesParserListener): void {
		if (listener.enterNmp_protocol) {
			listener.enterNmp_protocol(this);
		}
	}
	// @Override
	public exitRule(listener: tnsnamesParserListener): void {
		if (listener.exitNmp_protocol) {
			listener.exitNmp_protocol(this);
		}
	}
}


export class Nmp_paramsContext extends ParserRuleContext {
	public nmp_parameter(): Nmp_parameterContext[];
	public nmp_parameter(i: number): Nmp_parameterContext;
	public nmp_parameter(i?: number): Nmp_parameterContext | Nmp_parameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Nmp_parameterContext);
		} else {
			return this.getRuleContext(i, Nmp_parameterContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tnsnamesParser.RULE_nmp_params; }
	// @Override
	public enterRule(listener: tnsnamesParserListener): void {
		if (listener.enterNmp_params) {
			listener.enterNmp_params(this);
		}
	}
	// @Override
	public exitRule(listener: tnsnamesParserListener): void {
		if (listener.exitNmp_params) {
			listener.exitNmp_params(this);
		}
	}
}


export class Nmp_parameterContext extends ParserRuleContext {
	public nmp_nmp(): Nmp_nmpContext | undefined {
		return this.tryGetRuleContext(0, Nmp_nmpContext);
	}
	public nmp_server(): Nmp_serverContext | undefined {
		return this.tryGetRuleContext(0, Nmp_serverContext);
	}
	public nmp_pipe(): Nmp_pipeContext | undefined {
		return this.tryGetRuleContext(0, Nmp_pipeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tnsnamesParser.RULE_nmp_parameter; }
	// @Override
	public enterRule(listener: tnsnamesParserListener): void {
		if (listener.enterNmp_parameter) {
			listener.enterNmp_parameter(this);
		}
	}
	// @Override
	public exitRule(listener: tnsnamesParserListener): void {
		if (listener.exitNmp_parameter) {
			listener.exitNmp_parameter(this);
		}
	}
}


export class Nmp_nmpContext extends ParserRuleContext {
	public L_PAREN(): TerminalNode { return this.getToken(tnsnamesParser.L_PAREN, 0); }
	public PROTOCOL(): TerminalNode { return this.getToken(tnsnamesParser.PROTOCOL, 0); }
	public EQUAL(): TerminalNode { return this.getToken(tnsnamesParser.EQUAL, 0); }
	public NMP(): TerminalNode { return this.getToken(tnsnamesParser.NMP, 0); }
	public R_PAREN(): TerminalNode { return this.getToken(tnsnamesParser.R_PAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tnsnamesParser.RULE_nmp_nmp; }
	// @Override
	public enterRule(listener: tnsnamesParserListener): void {
		if (listener.enterNmp_nmp) {
			listener.enterNmp_nmp(this);
		}
	}
	// @Override
	public exitRule(listener: tnsnamesParserListener): void {
		if (listener.exitNmp_nmp) {
			listener.exitNmp_nmp(this);
		}
	}
}


export class Nmp_serverContext extends ParserRuleContext {
	public L_PAREN(): TerminalNode { return this.getToken(tnsnamesParser.L_PAREN, 0); }
	public SERVER(): TerminalNode { return this.getToken(tnsnamesParser.SERVER, 0); }
	public EQUAL(): TerminalNode { return this.getToken(tnsnamesParser.EQUAL, 0); }
	public ID(): TerminalNode { return this.getToken(tnsnamesParser.ID, 0); }
	public R_PAREN(): TerminalNode { return this.getToken(tnsnamesParser.R_PAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tnsnamesParser.RULE_nmp_server; }
	// @Override
	public enterRule(listener: tnsnamesParserListener): void {
		if (listener.enterNmp_server) {
			listener.enterNmp_server(this);
		}
	}
	// @Override
	public exitRule(listener: tnsnamesParserListener): void {
		if (listener.exitNmp_server) {
			listener.exitNmp_server(this);
		}
	}
}


export class Nmp_pipeContext extends ParserRuleContext {
	public L_PAREN(): TerminalNode { return this.getToken(tnsnamesParser.L_PAREN, 0); }
	public PIPE(): TerminalNode { return this.getToken(tnsnamesParser.PIPE, 0); }
	public EQUAL(): TerminalNode { return this.getToken(tnsnamesParser.EQUAL, 0); }
	public ID(): TerminalNode { return this.getToken(tnsnamesParser.ID, 0); }
	public R_PAREN(): TerminalNode { return this.getToken(tnsnamesParser.R_PAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tnsnamesParser.RULE_nmp_pipe; }
	// @Override
	public enterRule(listener: tnsnamesParserListener): void {
		if (listener.enterNmp_pipe) {
			listener.enterNmp_pipe(this);
		}
	}
	// @Override
	public exitRule(listener: tnsnamesParserListener): void {
		if (listener.exitNmp_pipe) {
			listener.exitNmp_pipe(this);
		}
	}
}


export class Beq_protocolContext extends ParserRuleContext {
	public beq_params(): Beq_paramsContext {
		return this.getRuleContext(0, Beq_paramsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tnsnamesParser.RULE_beq_protocol; }
	// @Override
	public enterRule(listener: tnsnamesParserListener): void {
		if (listener.enterBeq_protocol) {
			listener.enterBeq_protocol(this);
		}
	}
	// @Override
	public exitRule(listener: tnsnamesParserListener): void {
		if (listener.exitBeq_protocol) {
			listener.exitBeq_protocol(this);
		}
	}
}


export class Beq_paramsContext extends ParserRuleContext {
	public beq_parameter(): Beq_parameterContext[];
	public beq_parameter(i: number): Beq_parameterContext;
	public beq_parameter(i?: number): Beq_parameterContext | Beq_parameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Beq_parameterContext);
		} else {
			return this.getRuleContext(i, Beq_parameterContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tnsnamesParser.RULE_beq_params; }
	// @Override
	public enterRule(listener: tnsnamesParserListener): void {
		if (listener.enterBeq_params) {
			listener.enterBeq_params(this);
		}
	}
	// @Override
	public exitRule(listener: tnsnamesParserListener): void {
		if (listener.exitBeq_params) {
			listener.exitBeq_params(this);
		}
	}
}


export class Beq_parameterContext extends ParserRuleContext {
	public beq_beq(): Beq_beqContext | undefined {
		return this.tryGetRuleContext(0, Beq_beqContext);
	}
	public beq_program(): Beq_programContext | undefined {
		return this.tryGetRuleContext(0, Beq_programContext);
	}
	public beq_argv0(): Beq_argv0Context | undefined {
		return this.tryGetRuleContext(0, Beq_argv0Context);
	}
	public beq_args(): Beq_argsContext | undefined {
		return this.tryGetRuleContext(0, Beq_argsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tnsnamesParser.RULE_beq_parameter; }
	// @Override
	public enterRule(listener: tnsnamesParserListener): void {
		if (listener.enterBeq_parameter) {
			listener.enterBeq_parameter(this);
		}
	}
	// @Override
	public exitRule(listener: tnsnamesParserListener): void {
		if (listener.exitBeq_parameter) {
			listener.exitBeq_parameter(this);
		}
	}
}


export class Beq_beqContext extends ParserRuleContext {
	public L_PAREN(): TerminalNode { return this.getToken(tnsnamesParser.L_PAREN, 0); }
	public PROTOCOL(): TerminalNode { return this.getToken(tnsnamesParser.PROTOCOL, 0); }
	public EQUAL(): TerminalNode { return this.getToken(tnsnamesParser.EQUAL, 0); }
	public BEQ(): TerminalNode { return this.getToken(tnsnamesParser.BEQ, 0); }
	public R_PAREN(): TerminalNode { return this.getToken(tnsnamesParser.R_PAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tnsnamesParser.RULE_beq_beq; }
	// @Override
	public enterRule(listener: tnsnamesParserListener): void {
		if (listener.enterBeq_beq) {
			listener.enterBeq_beq(this);
		}
	}
	// @Override
	public exitRule(listener: tnsnamesParserListener): void {
		if (listener.exitBeq_beq) {
			listener.exitBeq_beq(this);
		}
	}
}


export class Beq_programContext extends ParserRuleContext {
	public L_PAREN(): TerminalNode { return this.getToken(tnsnamesParser.L_PAREN, 0); }
	public PROGRAM(): TerminalNode { return this.getToken(tnsnamesParser.PROGRAM, 0); }
	public EQUAL(): TerminalNode { return this.getToken(tnsnamesParser.EQUAL, 0); }
	public ID(): TerminalNode { return this.getToken(tnsnamesParser.ID, 0); }
	public R_PAREN(): TerminalNode { return this.getToken(tnsnamesParser.R_PAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tnsnamesParser.RULE_beq_program; }
	// @Override
	public enterRule(listener: tnsnamesParserListener): void {
		if (listener.enterBeq_program) {
			listener.enterBeq_program(this);
		}
	}
	// @Override
	public exitRule(listener: tnsnamesParserListener): void {
		if (listener.exitBeq_program) {
			listener.exitBeq_program(this);
		}
	}
}


export class Beq_argv0Context extends ParserRuleContext {
	public L_PAREN(): TerminalNode { return this.getToken(tnsnamesParser.L_PAREN, 0); }
	public ARGV0(): TerminalNode { return this.getToken(tnsnamesParser.ARGV0, 0); }
	public EQUAL(): TerminalNode { return this.getToken(tnsnamesParser.EQUAL, 0); }
	public ID(): TerminalNode { return this.getToken(tnsnamesParser.ID, 0); }
	public R_PAREN(): TerminalNode { return this.getToken(tnsnamesParser.R_PAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tnsnamesParser.RULE_beq_argv0; }
	// @Override
	public enterRule(listener: tnsnamesParserListener): void {
		if (listener.enterBeq_argv0) {
			listener.enterBeq_argv0(this);
		}
	}
	// @Override
	public exitRule(listener: tnsnamesParserListener): void {
		if (listener.exitBeq_argv0) {
			listener.exitBeq_argv0(this);
		}
	}
}


export class Beq_argsContext extends ParserRuleContext {
	public L_PAREN(): TerminalNode { return this.getToken(tnsnamesParser.L_PAREN, 0); }
	public ARGS(): TerminalNode { return this.getToken(tnsnamesParser.ARGS, 0); }
	public EQUAL(): TerminalNode { return this.getToken(tnsnamesParser.EQUAL, 0); }
	public ba_parameter(): Ba_parameterContext {
		return this.getRuleContext(0, Ba_parameterContext);
	}
	public R_PAREN(): TerminalNode { return this.getToken(tnsnamesParser.R_PAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tnsnamesParser.RULE_beq_args; }
	// @Override
	public enterRule(listener: tnsnamesParserListener): void {
		if (listener.enterBeq_args) {
			listener.enterBeq_args(this);
		}
	}
	// @Override
	public exitRule(listener: tnsnamesParserListener): void {
		if (listener.exitBeq_args) {
			listener.exitBeq_args(this);
		}
	}
}


export class Ba_parameterContext extends ParserRuleContext {
	public S_QUOTE(): TerminalNode[];
	public S_QUOTE(i: number): TerminalNode;
	public S_QUOTE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(tnsnamesParser.S_QUOTE);
		} else {
			return this.getToken(tnsnamesParser.S_QUOTE, i);
		}
	}
	public ba_description(): Ba_descriptionContext {
		return this.getRuleContext(0, Ba_descriptionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tnsnamesParser.RULE_ba_parameter; }
	// @Override
	public enterRule(listener: tnsnamesParserListener): void {
		if (listener.enterBa_parameter) {
			listener.enterBa_parameter(this);
		}
	}
	// @Override
	public exitRule(listener: tnsnamesParserListener): void {
		if (listener.exitBa_parameter) {
			listener.exitBa_parameter(this);
		}
	}
}


export class Ba_descriptionContext extends ParserRuleContext {
	public L_PAREN(): TerminalNode { return this.getToken(tnsnamesParser.L_PAREN, 0); }
	public DESCRIPTION(): TerminalNode { return this.getToken(tnsnamesParser.DESCRIPTION, 0); }
	public EQUAL(): TerminalNode { return this.getToken(tnsnamesParser.EQUAL, 0); }
	public bad_params(): Bad_paramsContext {
		return this.getRuleContext(0, Bad_paramsContext);
	}
	public R_PAREN(): TerminalNode { return this.getToken(tnsnamesParser.R_PAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tnsnamesParser.RULE_ba_description; }
	// @Override
	public enterRule(listener: tnsnamesParserListener): void {
		if (listener.enterBa_description) {
			listener.enterBa_description(this);
		}
	}
	// @Override
	public exitRule(listener: tnsnamesParserListener): void {
		if (listener.exitBa_description) {
			listener.exitBa_description(this);
		}
	}
}


export class Bad_paramsContext extends ParserRuleContext {
	public bad_parameter(): Bad_parameterContext[];
	public bad_parameter(i: number): Bad_parameterContext;
	public bad_parameter(i?: number): Bad_parameterContext | Bad_parameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Bad_parameterContext);
		} else {
			return this.getRuleContext(i, Bad_parameterContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tnsnamesParser.RULE_bad_params; }
	// @Override
	public enterRule(listener: tnsnamesParserListener): void {
		if (listener.enterBad_params) {
			listener.enterBad_params(this);
		}
	}
	// @Override
	public exitRule(listener: tnsnamesParserListener): void {
		if (listener.exitBad_params) {
			listener.exitBad_params(this);
		}
	}
}


export class Bad_parameterContext extends ParserRuleContext {
	public bad_local(): Bad_localContext | undefined {
		return this.tryGetRuleContext(0, Bad_localContext);
	}
	public bad_address(): Bad_addressContext | undefined {
		return this.tryGetRuleContext(0, Bad_addressContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tnsnamesParser.RULE_bad_parameter; }
	// @Override
	public enterRule(listener: tnsnamesParserListener): void {
		if (listener.enterBad_parameter) {
			listener.enterBad_parameter(this);
		}
	}
	// @Override
	public exitRule(listener: tnsnamesParserListener): void {
		if (listener.exitBad_parameter) {
			listener.exitBad_parameter(this);
		}
	}
}


export class Bad_localContext extends ParserRuleContext {
	public L_PAREN(): TerminalNode { return this.getToken(tnsnamesParser.L_PAREN, 0); }
	public LOCAL(): TerminalNode { return this.getToken(tnsnamesParser.LOCAL, 0); }
	public EQUAL(): TerminalNode { return this.getToken(tnsnamesParser.EQUAL, 0); }
	public YES_NO(): TerminalNode { return this.getToken(tnsnamesParser.YES_NO, 0); }
	public R_PAREN(): TerminalNode { return this.getToken(tnsnamesParser.R_PAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tnsnamesParser.RULE_bad_local; }
	// @Override
	public enterRule(listener: tnsnamesParserListener): void {
		if (listener.enterBad_local) {
			listener.enterBad_local(this);
		}
	}
	// @Override
	public exitRule(listener: tnsnamesParserListener): void {
		if (listener.exitBad_local) {
			listener.exitBad_local(this);
		}
	}
}


export class Bad_addressContext extends ParserRuleContext {
	public L_PAREN(): TerminalNode { return this.getToken(tnsnamesParser.L_PAREN, 0); }
	public ADDRESS(): TerminalNode { return this.getToken(tnsnamesParser.ADDRESS, 0); }
	public EQUAL(): TerminalNode { return this.getToken(tnsnamesParser.EQUAL, 0); }
	public beq_beq(): Beq_beqContext {
		return this.getRuleContext(0, Beq_beqContext);
	}
	public R_PAREN(): TerminalNode { return this.getToken(tnsnamesParser.R_PAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tnsnamesParser.RULE_bad_address; }
	// @Override
	public enterRule(listener: tnsnamesParserListener): void {
		if (listener.enterBad_address) {
			listener.enterBad_address(this);
		}
	}
	// @Override
	public exitRule(listener: tnsnamesParserListener): void {
		if (listener.exitBad_address) {
			listener.exitBad_address(this);
		}
	}
}


export class Connect_dataContext extends ParserRuleContext {
	public L_PAREN(): TerminalNode { return this.getToken(tnsnamesParser.L_PAREN, 0); }
	public CONNECT_DATA(): TerminalNode { return this.getToken(tnsnamesParser.CONNECT_DATA, 0); }
	public EQUAL(): TerminalNode { return this.getToken(tnsnamesParser.EQUAL, 0); }
	public cd_params(): Cd_paramsContext {
		return this.getRuleContext(0, Cd_paramsContext);
	}
	public R_PAREN(): TerminalNode { return this.getToken(tnsnamesParser.R_PAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tnsnamesParser.RULE_connect_data; }
	// @Override
	public enterRule(listener: tnsnamesParserListener): void {
		if (listener.enterConnect_data) {
			listener.enterConnect_data(this);
		}
	}
	// @Override
	public exitRule(listener: tnsnamesParserListener): void {
		if (listener.exitConnect_data) {
			listener.exitConnect_data(this);
		}
	}
}


export class Cd_paramsContext extends ParserRuleContext {
	public cd_parameter(): Cd_parameterContext[];
	public cd_parameter(i: number): Cd_parameterContext;
	public cd_parameter(i?: number): Cd_parameterContext | Cd_parameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Cd_parameterContext);
		} else {
			return this.getRuleContext(i, Cd_parameterContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tnsnamesParser.RULE_cd_params; }
	// @Override
	public enterRule(listener: tnsnamesParserListener): void {
		if (listener.enterCd_params) {
			listener.enterCd_params(this);
		}
	}
	// @Override
	public exitRule(listener: tnsnamesParserListener): void {
		if (listener.exitCd_params) {
			listener.exitCd_params(this);
		}
	}
}


export class Cd_parameterContext extends ParserRuleContext {
	public cd_service_name(): Cd_service_nameContext | undefined {
		return this.tryGetRuleContext(0, Cd_service_nameContext);
	}
	public cd_sid(): Cd_sidContext | undefined {
		return this.tryGetRuleContext(0, Cd_sidContext);
	}
	public cd_instance_name(): Cd_instance_nameContext | undefined {
		return this.tryGetRuleContext(0, Cd_instance_nameContext);
	}
	public cd_failover_mode(): Cd_failover_modeContext | undefined {
		return this.tryGetRuleContext(0, Cd_failover_modeContext);
	}
	public cd_global_name(): Cd_global_nameContext | undefined {
		return this.tryGetRuleContext(0, Cd_global_nameContext);
	}
	public cd_hs(): Cd_hsContext | undefined {
		return this.tryGetRuleContext(0, Cd_hsContext);
	}
	public cd_rdb_database(): Cd_rdb_databaseContext | undefined {
		return this.tryGetRuleContext(0, Cd_rdb_databaseContext);
	}
	public cd_server(): Cd_serverContext | undefined {
		return this.tryGetRuleContext(0, Cd_serverContext);
	}
	public cd_ur(): Cd_urContext | undefined {
		return this.tryGetRuleContext(0, Cd_urContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tnsnamesParser.RULE_cd_parameter; }
	// @Override
	public enterRule(listener: tnsnamesParserListener): void {
		if (listener.enterCd_parameter) {
			listener.enterCd_parameter(this);
		}
	}
	// @Override
	public exitRule(listener: tnsnamesParserListener): void {
		if (listener.exitCd_parameter) {
			listener.exitCd_parameter(this);
		}
	}
}


export class Cd_service_nameContext extends ParserRuleContext {
	public L_PAREN(): TerminalNode { return this.getToken(tnsnamesParser.L_PAREN, 0); }
	public SERVICE_NAME(): TerminalNode { return this.getToken(tnsnamesParser.SERVICE_NAME, 0); }
	public EQUAL(): TerminalNode { return this.getToken(tnsnamesParser.EQUAL, 0); }
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(tnsnamesParser.ID);
		} else {
			return this.getToken(tnsnamesParser.ID, i);
		}
	}
	public R_PAREN(): TerminalNode { return this.getToken(tnsnamesParser.R_PAREN, 0); }
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(tnsnamesParser.DOT);
		} else {
			return this.getToken(tnsnamesParser.DOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tnsnamesParser.RULE_cd_service_name; }
	// @Override
	public enterRule(listener: tnsnamesParserListener): void {
		if (listener.enterCd_service_name) {
			listener.enterCd_service_name(this);
		}
	}
	// @Override
	public exitRule(listener: tnsnamesParserListener): void {
		if (listener.exitCd_service_name) {
			listener.exitCd_service_name(this);
		}
	}
}


export class Cd_sidContext extends ParserRuleContext {
	public L_PAREN(): TerminalNode { return this.getToken(tnsnamesParser.L_PAREN, 0); }
	public SID(): TerminalNode { return this.getToken(tnsnamesParser.SID, 0); }
	public EQUAL(): TerminalNode { return this.getToken(tnsnamesParser.EQUAL, 0); }
	public ID(): TerminalNode { return this.getToken(tnsnamesParser.ID, 0); }
	public R_PAREN(): TerminalNode { return this.getToken(tnsnamesParser.R_PAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tnsnamesParser.RULE_cd_sid; }
	// @Override
	public enterRule(listener: tnsnamesParserListener): void {
		if (listener.enterCd_sid) {
			listener.enterCd_sid(this);
		}
	}
	// @Override
	public exitRule(listener: tnsnamesParserListener): void {
		if (listener.exitCd_sid) {
			listener.exitCd_sid(this);
		}
	}
}


export class Cd_instance_nameContext extends ParserRuleContext {
	public L_PAREN(): TerminalNode { return this.getToken(tnsnamesParser.L_PAREN, 0); }
	public INSTANCE_NAME(): TerminalNode { return this.getToken(tnsnamesParser.INSTANCE_NAME, 0); }
	public EQUAL(): TerminalNode { return this.getToken(tnsnamesParser.EQUAL, 0); }
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(tnsnamesParser.ID);
		} else {
			return this.getToken(tnsnamesParser.ID, i);
		}
	}
	public R_PAREN(): TerminalNode { return this.getToken(tnsnamesParser.R_PAREN, 0); }
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(tnsnamesParser.DOT);
		} else {
			return this.getToken(tnsnamesParser.DOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tnsnamesParser.RULE_cd_instance_name; }
	// @Override
	public enterRule(listener: tnsnamesParserListener): void {
		if (listener.enterCd_instance_name) {
			listener.enterCd_instance_name(this);
		}
	}
	// @Override
	public exitRule(listener: tnsnamesParserListener): void {
		if (listener.exitCd_instance_name) {
			listener.exitCd_instance_name(this);
		}
	}
}


export class Cd_failover_modeContext extends ParserRuleContext {
	public L_PAREN(): TerminalNode { return this.getToken(tnsnamesParser.L_PAREN, 0); }
	public FAILOVER_MODE(): TerminalNode { return this.getToken(tnsnamesParser.FAILOVER_MODE, 0); }
	public EQUAL(): TerminalNode { return this.getToken(tnsnamesParser.EQUAL, 0); }
	public fo_params(): Fo_paramsContext {
		return this.getRuleContext(0, Fo_paramsContext);
	}
	public R_PAREN(): TerminalNode { return this.getToken(tnsnamesParser.R_PAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tnsnamesParser.RULE_cd_failover_mode; }
	// @Override
	public enterRule(listener: tnsnamesParserListener): void {
		if (listener.enterCd_failover_mode) {
			listener.enterCd_failover_mode(this);
		}
	}
	// @Override
	public exitRule(listener: tnsnamesParserListener): void {
		if (listener.exitCd_failover_mode) {
			listener.exitCd_failover_mode(this);
		}
	}
}


export class Cd_global_nameContext extends ParserRuleContext {
	public L_PAREN(): TerminalNode { return this.getToken(tnsnamesParser.L_PAREN, 0); }
	public GLOBAL_NAME(): TerminalNode { return this.getToken(tnsnamesParser.GLOBAL_NAME, 0); }
	public EQUAL(): TerminalNode { return this.getToken(tnsnamesParser.EQUAL, 0); }
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(tnsnamesParser.ID);
		} else {
			return this.getToken(tnsnamesParser.ID, i);
		}
	}
	public R_PAREN(): TerminalNode { return this.getToken(tnsnamesParser.R_PAREN, 0); }
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(tnsnamesParser.DOT);
		} else {
			return this.getToken(tnsnamesParser.DOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tnsnamesParser.RULE_cd_global_name; }
	// @Override
	public enterRule(listener: tnsnamesParserListener): void {
		if (listener.enterCd_global_name) {
			listener.enterCd_global_name(this);
		}
	}
	// @Override
	public exitRule(listener: tnsnamesParserListener): void {
		if (listener.exitCd_global_name) {
			listener.exitCd_global_name(this);
		}
	}
}


export class Cd_hsContext extends ParserRuleContext {
	public L_PAREN(): TerminalNode { return this.getToken(tnsnamesParser.L_PAREN, 0); }
	public HS(): TerminalNode { return this.getToken(tnsnamesParser.HS, 0); }
	public EQUAL(): TerminalNode { return this.getToken(tnsnamesParser.EQUAL, 0); }
	public OK(): TerminalNode { return this.getToken(tnsnamesParser.OK, 0); }
	public R_PAREN(): TerminalNode { return this.getToken(tnsnamesParser.R_PAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tnsnamesParser.RULE_cd_hs; }
	// @Override
	public enterRule(listener: tnsnamesParserListener): void {
		if (listener.enterCd_hs) {
			listener.enterCd_hs(this);
		}
	}
	// @Override
	public exitRule(listener: tnsnamesParserListener): void {
		if (listener.exitCd_hs) {
			listener.exitCd_hs(this);
		}
	}
}


export class Cd_rdb_databaseContext extends ParserRuleContext {
	public L_PAREN(): TerminalNode { return this.getToken(tnsnamesParser.L_PAREN, 0); }
	public RDB_DATABASE(): TerminalNode { return this.getToken(tnsnamesParser.RDB_DATABASE, 0); }
	public EQUAL(): TerminalNode { return this.getToken(tnsnamesParser.EQUAL, 0); }
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(tnsnamesParser.ID);
		} else {
			return this.getToken(tnsnamesParser.ID, i);
		}
	}
	public R_PAREN(): TerminalNode { return this.getToken(tnsnamesParser.R_PAREN, 0); }
	public L_SQUARE(): TerminalNode | undefined { return this.tryGetToken(tnsnamesParser.L_SQUARE, 0); }
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(tnsnamesParser.DOT);
		} else {
			return this.getToken(tnsnamesParser.DOT, i);
		}
	}
	public R_SQUARE(): TerminalNode | undefined { return this.tryGetToken(tnsnamesParser.R_SQUARE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tnsnamesParser.RULE_cd_rdb_database; }
	// @Override
	public enterRule(listener: tnsnamesParserListener): void {
		if (listener.enterCd_rdb_database) {
			listener.enterCd_rdb_database(this);
		}
	}
	// @Override
	public exitRule(listener: tnsnamesParserListener): void {
		if (listener.exitCd_rdb_database) {
			listener.exitCd_rdb_database(this);
		}
	}
}


export class Cd_serverContext extends ParserRuleContext {
	public L_PAREN(): TerminalNode { return this.getToken(tnsnamesParser.L_PAREN, 0); }
	public SERVER(): TerminalNode { return this.getToken(tnsnamesParser.SERVER, 0); }
	public EQUAL(): TerminalNode { return this.getToken(tnsnamesParser.EQUAL, 0); }
	public R_PAREN(): TerminalNode { return this.getToken(tnsnamesParser.R_PAREN, 0); }
	public DEDICATED(): TerminalNode | undefined { return this.tryGetToken(tnsnamesParser.DEDICATED, 0); }
	public SHARED(): TerminalNode | undefined { return this.tryGetToken(tnsnamesParser.SHARED, 0); }
	public POOLED(): TerminalNode | undefined { return this.tryGetToken(tnsnamesParser.POOLED, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tnsnamesParser.RULE_cd_server; }
	// @Override
	public enterRule(listener: tnsnamesParserListener): void {
		if (listener.enterCd_server) {
			listener.enterCd_server(this);
		}
	}
	// @Override
	public exitRule(listener: tnsnamesParserListener): void {
		if (listener.exitCd_server) {
			listener.exitCd_server(this);
		}
	}
}


export class Cd_urContext extends ParserRuleContext {
	public L_PAREN(): TerminalNode { return this.getToken(tnsnamesParser.L_PAREN, 0); }
	public UR(): TerminalNode { return this.getToken(tnsnamesParser.UR, 0); }
	public EQUAL(): TerminalNode { return this.getToken(tnsnamesParser.EQUAL, 0); }
	public UR_A(): TerminalNode { return this.getToken(tnsnamesParser.UR_A, 0); }
	public R_PAREN(): TerminalNode { return this.getToken(tnsnamesParser.R_PAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tnsnamesParser.RULE_cd_ur; }
	// @Override
	public enterRule(listener: tnsnamesParserListener): void {
		if (listener.enterCd_ur) {
			listener.enterCd_ur(this);
		}
	}
	// @Override
	public exitRule(listener: tnsnamesParserListener): void {
		if (listener.exitCd_ur) {
			listener.exitCd_ur(this);
		}
	}
}


export class Fo_paramsContext extends ParserRuleContext {
	public fo_parameter(): Fo_parameterContext[];
	public fo_parameter(i: number): Fo_parameterContext;
	public fo_parameter(i?: number): Fo_parameterContext | Fo_parameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Fo_parameterContext);
		} else {
			return this.getRuleContext(i, Fo_parameterContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tnsnamesParser.RULE_fo_params; }
	// @Override
	public enterRule(listener: tnsnamesParserListener): void {
		if (listener.enterFo_params) {
			listener.enterFo_params(this);
		}
	}
	// @Override
	public exitRule(listener: tnsnamesParserListener): void {
		if (listener.exitFo_params) {
			listener.exitFo_params(this);
		}
	}
}


export class Fo_parameterContext extends ParserRuleContext {
	public fo_type(): Fo_typeContext | undefined {
		return this.tryGetRuleContext(0, Fo_typeContext);
	}
	public fo_backup(): Fo_backupContext | undefined {
		return this.tryGetRuleContext(0, Fo_backupContext);
	}
	public fo_method(): Fo_methodContext | undefined {
		return this.tryGetRuleContext(0, Fo_methodContext);
	}
	public fo_retries(): Fo_retriesContext | undefined {
		return this.tryGetRuleContext(0, Fo_retriesContext);
	}
	public fo_delay(): Fo_delayContext | undefined {
		return this.tryGetRuleContext(0, Fo_delayContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tnsnamesParser.RULE_fo_parameter; }
	// @Override
	public enterRule(listener: tnsnamesParserListener): void {
		if (listener.enterFo_parameter) {
			listener.enterFo_parameter(this);
		}
	}
	// @Override
	public exitRule(listener: tnsnamesParserListener): void {
		if (listener.exitFo_parameter) {
			listener.exitFo_parameter(this);
		}
	}
}


export class Fo_typeContext extends ParserRuleContext {
	public L_PAREN(): TerminalNode { return this.getToken(tnsnamesParser.L_PAREN, 0); }
	public TYPE(): TerminalNode { return this.getToken(tnsnamesParser.TYPE, 0); }
	public EQUAL(): TerminalNode { return this.getToken(tnsnamesParser.EQUAL, 0); }
	public R_PAREN(): TerminalNode { return this.getToken(tnsnamesParser.R_PAREN, 0); }
	public SESSION(): TerminalNode | undefined { return this.tryGetToken(tnsnamesParser.SESSION, 0); }
	public SELECT(): TerminalNode | undefined { return this.tryGetToken(tnsnamesParser.SELECT, 0); }
	public NONE(): TerminalNode | undefined { return this.tryGetToken(tnsnamesParser.NONE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tnsnamesParser.RULE_fo_type; }
	// @Override
	public enterRule(listener: tnsnamesParserListener): void {
		if (listener.enterFo_type) {
			listener.enterFo_type(this);
		}
	}
	// @Override
	public exitRule(listener: tnsnamesParserListener): void {
		if (listener.exitFo_type) {
			listener.exitFo_type(this);
		}
	}
}


export class Fo_backupContext extends ParserRuleContext {
	public L_PAREN(): TerminalNode { return this.getToken(tnsnamesParser.L_PAREN, 0); }
	public BACKUP(): TerminalNode { return this.getToken(tnsnamesParser.BACKUP, 0); }
	public EQUAL(): TerminalNode { return this.getToken(tnsnamesParser.EQUAL, 0); }
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(tnsnamesParser.ID);
		} else {
			return this.getToken(tnsnamesParser.ID, i);
		}
	}
	public R_PAREN(): TerminalNode { return this.getToken(tnsnamesParser.R_PAREN, 0); }
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(tnsnamesParser.DOT);
		} else {
			return this.getToken(tnsnamesParser.DOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tnsnamesParser.RULE_fo_backup; }
	// @Override
	public enterRule(listener: tnsnamesParserListener): void {
		if (listener.enterFo_backup) {
			listener.enterFo_backup(this);
		}
	}
	// @Override
	public exitRule(listener: tnsnamesParserListener): void {
		if (listener.exitFo_backup) {
			listener.exitFo_backup(this);
		}
	}
}


export class Fo_methodContext extends ParserRuleContext {
	public L_PAREN(): TerminalNode { return this.getToken(tnsnamesParser.L_PAREN, 0); }
	public METHOD(): TerminalNode { return this.getToken(tnsnamesParser.METHOD, 0); }
	public EQUAL(): TerminalNode { return this.getToken(tnsnamesParser.EQUAL, 0); }
	public R_PAREN(): TerminalNode { return this.getToken(tnsnamesParser.R_PAREN, 0); }
	public BASIC(): TerminalNode | undefined { return this.tryGetToken(tnsnamesParser.BASIC, 0); }
	public PRECONNECT(): TerminalNode | undefined { return this.tryGetToken(tnsnamesParser.PRECONNECT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tnsnamesParser.RULE_fo_method; }
	// @Override
	public enterRule(listener: tnsnamesParserListener): void {
		if (listener.enterFo_method) {
			listener.enterFo_method(this);
		}
	}
	// @Override
	public exitRule(listener: tnsnamesParserListener): void {
		if (listener.exitFo_method) {
			listener.exitFo_method(this);
		}
	}
}


export class Fo_retriesContext extends ParserRuleContext {
	public L_PAREN(): TerminalNode { return this.getToken(tnsnamesParser.L_PAREN, 0); }
	public RETRIES(): TerminalNode { return this.getToken(tnsnamesParser.RETRIES, 0); }
	public EQUAL(): TerminalNode { return this.getToken(tnsnamesParser.EQUAL, 0); }
	public INT(): TerminalNode { return this.getToken(tnsnamesParser.INT, 0); }
	public R_PAREN(): TerminalNode { return this.getToken(tnsnamesParser.R_PAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tnsnamesParser.RULE_fo_retries; }
	// @Override
	public enterRule(listener: tnsnamesParserListener): void {
		if (listener.enterFo_retries) {
			listener.enterFo_retries(this);
		}
	}
	// @Override
	public exitRule(listener: tnsnamesParserListener): void {
		if (listener.exitFo_retries) {
			listener.exitFo_retries(this);
		}
	}
}


export class Fo_delayContext extends ParserRuleContext {
	public L_PAREN(): TerminalNode { return this.getToken(tnsnamesParser.L_PAREN, 0); }
	public DELAY(): TerminalNode { return this.getToken(tnsnamesParser.DELAY, 0); }
	public EQUAL(): TerminalNode { return this.getToken(tnsnamesParser.EQUAL, 0); }
	public INT(): TerminalNode { return this.getToken(tnsnamesParser.INT, 0); }
	public R_PAREN(): TerminalNode { return this.getToken(tnsnamesParser.R_PAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return tnsnamesParser.RULE_fo_delay; }
	// @Override
	public enterRule(listener: tnsnamesParserListener): void {
		if (listener.enterFo_delay) {
			listener.enterFo_delay(this);
		}
	}
	// @Override
	public exitRule(listener: tnsnamesParserListener): void {
		if (listener.exitFo_delay) {
			listener.exitFo_delay(this);
		}
	}
}


