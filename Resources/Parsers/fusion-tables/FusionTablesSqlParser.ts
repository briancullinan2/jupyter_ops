// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/fusion-tables/FusionTablesSql.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { FusionTablesSqlListener } from "./FusionTablesSqlListener";
import { FusionTablesSqlVisitor } from "./FusionTablesSqlVisitor";


export class FusionTablesSqlParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly K_ALTER = 5;
	public static readonly K_AND = 6;
	public static readonly K_OR = 7;
	public static readonly K_AS = 8;
	public static readonly K_ASC = 9;
	public static readonly K_AVERAGE = 10;
	public static readonly K_BY = 11;
	public static readonly K_BETWEEN = 12;
	public static readonly K_CASE = 13;
	public static readonly K_CIRCLE = 14;
	public static readonly K_COLUMN = 15;
	public static readonly K_CONTAINS = 16;
	public static readonly K_COUNT = 17;
	public static readonly K_CREATE = 18;
	public static readonly K_DELETE = 19;
	public static readonly K_DESC = 20;
	public static readonly K_DESCRIBE = 21;
	public static readonly K_DOES = 22;
	public static readonly K_CONTAIN = 23;
	public static readonly K_DROP = 24;
	public static readonly K_ENDS = 25;
	public static readonly K_FROM = 26;
	public static readonly K_GROUP = 27;
	public static readonly K_HAVING = 28;
	public static readonly K_IGNORING = 29;
	public static readonly K_IN = 30;
	public static readonly K_INSERT = 31;
	public static readonly K_INTO = 32;
	public static readonly K_JOIN = 33;
	public static readonly K_LATLNG = 34;
	public static readonly K_LEFT = 35;
	public static readonly K_LIKE = 36;
	public static readonly K_LIMIT = 37;
	public static readonly K_MATCHES = 38;
	public static readonly K_MAXIMUM = 39;
	public static readonly K_MINIMUM = 40;
	public static readonly K_NOT = 41;
	public static readonly K_EQUAL = 42;
	public static readonly K_OF = 43;
	public static readonly K_OFFSET = 44;
	public static readonly K_ON = 45;
	public static readonly K_ORDER = 46;
	public static readonly K_OUTER = 47;
	public static readonly K_RECTANGLE = 48;
	public static readonly K_RENAME = 49;
	public static readonly K_ST_DISTANCE = 50;
	public static readonly K_SELECT = 51;
	public static readonly K_ST_INTERSECTS = 52;
	public static readonly K_SUM = 53;
	public static readonly K_SET = 54;
	public static readonly K_SHOW = 55;
	public static readonly K_STARTS = 56;
	public static readonly K_TABLE = 57;
	public static readonly K_TABLES = 58;
	public static readonly K_TO = 59;
	public static readonly K_UPDATE = 60;
	public static readonly K_VALUES = 61;
	public static readonly K_VIEW = 62;
	public static readonly K_WHERE = 63;
	public static readonly K_WITH = 64;
	public static readonly LT_EQ = 65;
	public static readonly GT_EQ = 66;
	public static readonly GT = 67;
	public static readonly EQ = 68;
	public static readonly LT = 69;
	public static readonly LPAR = 70;
	public static readonly RPAR = 71;
	public static readonly NUMERIC_LITERAL = 72;
	public static readonly STRING_LITERAL = 73;
	public static readonly STRING = 74;
	public static readonly QUOTED_STRING = 75;
	public static readonly SINGLELINE_COMMENT = 76;
	public static readonly MULTILINE_COMMENT = 77;
	public static readonly WHITESPACE = 78;
	public static readonly RULE_fusionTablesSql = 0;
	public static readonly RULE_sql_stmt = 1;
	public static readonly RULE_table_name_in_ddl = 2;
	public static readonly RULE_table_name_in_dml = 3;
	public static readonly RULE_create_table_as_select_stmt = 4;
	public static readonly RULE_describe_stmt = 5;
	public static readonly RULE_show_tables_stmt = 6;
	public static readonly RULE_alter_table_stmt = 7;
	public static readonly RULE_create_view_stmt = 8;
	public static readonly RULE_drop_table_stmt = 9;
	public static readonly RULE_insert_stmt = 10;
	public static readonly RULE_update_stmt = 11;
	public static readonly RULE_column_assignment = 12;
	public static readonly RULE_delete_stmt = 13;
	public static readonly RULE_eq_comparison = 14;
	public static readonly RULE_table_name_with_alias = 15;
	public static readonly RULE_select_stmt = 16;
	public static readonly RULE_ordering_term = 17;
	public static readonly RULE_join_clause = 18;
	public static readonly RULE_result_column = 19;
	public static readonly RULE_qualified_column_name = 20;
	public static readonly RULE_aggregate_exp = 21;
	public static readonly RULE_expr = 22;
	public static readonly RULE_column_name_beginning_expr = 23;
	public static readonly RULE_column_name_in_dml = 24;
	public static readonly RULE_and_or_or = 25;
	public static readonly RULE_geometry = 26;
	public static readonly RULE_circle = 27;
	public static readonly RULE_rectangle = 28;
	public static readonly RULE_coordinate = 29;
	public static readonly RULE_keyword = 30;
	public static readonly RULE_operator = 31;
	public static readonly RULE_literal = 32;
	public static readonly RULE_error_message = 33;
	public static readonly RULE_identifier = 34;
	public static readonly RULE_column_alias = 35;
	public static readonly RULE_table_name = 36;
	public static readonly RULE_column_name = 37;
	public static readonly RULE_new_table_name = 38;
	public static readonly RULE_view_name = 39;
	public static readonly RULE_table_alias = 40;
	public static readonly RULE_numeric_literal = 41;
	public static readonly RULE_string_literal = 42;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"fusionTablesSql", "sql_stmt", "table_name_in_ddl", "table_name_in_dml", 
		"create_table_as_select_stmt", "describe_stmt", "show_tables_stmt", "alter_table_stmt", 
		"create_view_stmt", "drop_table_stmt", "insert_stmt", "update_stmt", "column_assignment", 
		"delete_stmt", "eq_comparison", "table_name_with_alias", "select_stmt", 
		"ordering_term", "join_clause", "result_column", "qualified_column_name", 
		"aggregate_exp", "expr", "column_name_beginning_expr", "column_name_in_dml", 
		"and_or_or", "geometry", "circle", "rectangle", "coordinate", "keyword", 
		"operator", "literal", "error_message", "identifier", "column_alias", 
		"table_name", "column_name", "new_table_name", "view_name", "table_alias", 
		"numeric_literal", "string_literal",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "';'", "'*'", "','", "'.'", undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, "'<='", "'>='", "'>'", "'='", "'<'", "'('", "')'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, "K_ALTER", "K_AND", 
		"K_OR", "K_AS", "K_ASC", "K_AVERAGE", "K_BY", "K_BETWEEN", "K_CASE", "K_CIRCLE", 
		"K_COLUMN", "K_CONTAINS", "K_COUNT", "K_CREATE", "K_DELETE", "K_DESC", 
		"K_DESCRIBE", "K_DOES", "K_CONTAIN", "K_DROP", "K_ENDS", "K_FROM", "K_GROUP", 
		"K_HAVING", "K_IGNORING", "K_IN", "K_INSERT", "K_INTO", "K_JOIN", "K_LATLNG", 
		"K_LEFT", "K_LIKE", "K_LIMIT", "K_MATCHES", "K_MAXIMUM", "K_MINIMUM", 
		"K_NOT", "K_EQUAL", "K_OF", "K_OFFSET", "K_ON", "K_ORDER", "K_OUTER", 
		"K_RECTANGLE", "K_RENAME", "K_ST_DISTANCE", "K_SELECT", "K_ST_INTERSECTS", 
		"K_SUM", "K_SET", "K_SHOW", "K_STARTS", "K_TABLE", "K_TABLES", "K_TO", 
		"K_UPDATE", "K_VALUES", "K_VIEW", "K_WHERE", "K_WITH", "LT_EQ", "GT_EQ", 
		"GT", "EQ", "LT", "LPAR", "RPAR", "NUMERIC_LITERAL", "STRING_LITERAL", 
		"STRING", "QUOTED_STRING", "SINGLELINE_COMMENT", "MULTILINE_COMMENT", 
		"WHITESPACE",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(FusionTablesSqlParser._LITERAL_NAMES, FusionTablesSqlParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return FusionTablesSqlParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "FusionTablesSql.g4"; }

	// @Override
	public get ruleNames(): string[] { return FusionTablesSqlParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return FusionTablesSqlParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(FusionTablesSqlParser._ATN, this);
	}
	// @RuleVersion(0)
	public fusionTablesSql(): FusionTablesSqlContext {
		let _localctx: FusionTablesSqlContext = new FusionTablesSqlContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, FusionTablesSqlParser.RULE_fusionTablesSql);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 89;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FusionTablesSqlParser.K_ALTER) | (1 << FusionTablesSqlParser.K_CREATE) | (1 << FusionTablesSqlParser.K_DELETE) | (1 << FusionTablesSqlParser.K_DESCRIBE) | (1 << FusionTablesSqlParser.K_DROP) | (1 << FusionTablesSqlParser.K_INSERT))) !== 0) || ((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (FusionTablesSqlParser.K_SELECT - 51)) | (1 << (FusionTablesSqlParser.K_SHOW - 51)) | (1 << (FusionTablesSqlParser.K_UPDATE - 51)))) !== 0)) {
				{
				{
				this.state = 86;
				this.sql_stmt();
				}
				}
				this.state = 91;
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
	public sql_stmt(): Sql_stmtContext {
		let _localctx: Sql_stmtContext = new Sql_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, FusionTablesSqlParser.RULE_sql_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 102;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				{
				this.state = 92;
				this.alter_table_stmt();
				}
				break;

			case 2:
				{
				this.state = 93;
				this.select_stmt();
				}
				break;

			case 3:
				{
				this.state = 94;
				this.create_view_stmt();
				}
				break;

			case 4:
				{
				this.state = 95;
				this.create_table_as_select_stmt();
				}
				break;

			case 5:
				{
				this.state = 96;
				this.delete_stmt();
				}
				break;

			case 6:
				{
				this.state = 97;
				this.drop_table_stmt();
				}
				break;

			case 7:
				{
				this.state = 98;
				this.insert_stmt();
				}
				break;

			case 8:
				{
				this.state = 99;
				this.update_stmt();
				}
				break;

			case 9:
				{
				this.state = 100;
				this.describe_stmt();
				}
				break;

			case 10:
				{
				this.state = 101;
				this.show_tables_stmt();
				}
				break;
			}
			this.state = 104;
			this.match(FusionTablesSqlParser.T__0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public table_name_in_ddl(): Table_name_in_ddlContext {
		let _localctx: Table_name_in_ddlContext = new Table_name_in_ddlContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, FusionTablesSqlParser.RULE_table_name_in_ddl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 106;
			this.table_name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public table_name_in_dml(): Table_name_in_dmlContext {
		let _localctx: Table_name_in_dmlContext = new Table_name_in_dmlContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, FusionTablesSqlParser.RULE_table_name_in_dml);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 108;
			this.table_name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public create_table_as_select_stmt(): Create_table_as_select_stmtContext {
		let _localctx: Create_table_as_select_stmtContext = new Create_table_as_select_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, FusionTablesSqlParser.RULE_create_table_as_select_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 110;
			this.match(FusionTablesSqlParser.K_CREATE);
			this.state = 111;
			this.match(FusionTablesSqlParser.K_TABLE);
			this.state = 112;
			this.identifier();
			this.state = 113;
			this.match(FusionTablesSqlParser.K_AS);
			this.state = 114;
			this.match(FusionTablesSqlParser.K_SELECT);
			this.state = 115;
			this.match(FusionTablesSqlParser.T__1);
			this.state = 116;
			this.match(FusionTablesSqlParser.K_FROM);
			this.state = 117;
			this.table_name_in_ddl();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public describe_stmt(): Describe_stmtContext {
		let _localctx: Describe_stmtContext = new Describe_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, FusionTablesSqlParser.RULE_describe_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 119;
			this.match(FusionTablesSqlParser.K_DESCRIBE);
			this.state = 120;
			this.table_name_in_ddl();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public show_tables_stmt(): Show_tables_stmtContext {
		let _localctx: Show_tables_stmtContext = new Show_tables_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, FusionTablesSqlParser.RULE_show_tables_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 122;
			this.match(FusionTablesSqlParser.K_SHOW);
			this.state = 123;
			this.match(FusionTablesSqlParser.K_TABLES);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public alter_table_stmt(): Alter_table_stmtContext {
		let _localctx: Alter_table_stmtContext = new Alter_table_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, FusionTablesSqlParser.RULE_alter_table_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 125;
			this.match(FusionTablesSqlParser.K_ALTER);
			this.state = 126;
			this.match(FusionTablesSqlParser.K_TABLE);
			this.state = 127;
			this.table_name_in_ddl();
			{
			this.state = 128;
			this.match(FusionTablesSqlParser.K_RENAME);
			this.state = 129;
			this.match(FusionTablesSqlParser.K_TO);
			this.state = 130;
			this.identifier();
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
	public create_view_stmt(): Create_view_stmtContext {
		let _localctx: Create_view_stmtContext = new Create_view_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, FusionTablesSqlParser.RULE_create_view_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 132;
			this.match(FusionTablesSqlParser.K_CREATE);
			this.state = 133;
			this.match(FusionTablesSqlParser.K_VIEW);
			this.state = 134;
			this.view_name();
			this.state = 135;
			this.match(FusionTablesSqlParser.K_AS);
			this.state = 136;
			this.match(FusionTablesSqlParser.LPAR);
			this.state = 137;
			this.match(FusionTablesSqlParser.K_SELECT);
			this.state = 138;
			this.result_column();
			this.state = 143;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FusionTablesSqlParser.T__2) {
				{
				{
				this.state = 139;
				this.match(FusionTablesSqlParser.T__2);
				this.state = 140;
				this.result_column();
				}
				}
				this.state = 145;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 146;
			this.match(FusionTablesSqlParser.K_FROM);
			{
			{
			this.state = 147;
			this.table_name_with_alias();
			this.state = 150;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FusionTablesSqlParser.K_WHERE) {
				{
				this.state = 148;
				this.match(FusionTablesSqlParser.K_WHERE);
				this.state = 149;
				this.expr();
				}
			}

			}
			this.state = 155;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FusionTablesSqlParser.K_LEFT) {
				{
				{
				this.state = 152;
				this.join_clause();
				}
				}
				this.state = 157;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
			this.state = 158;
			this.match(FusionTablesSqlParser.RPAR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public drop_table_stmt(): Drop_table_stmtContext {
		let _localctx: Drop_table_stmtContext = new Drop_table_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, FusionTablesSqlParser.RULE_drop_table_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 160;
			this.match(FusionTablesSqlParser.K_DROP);
			this.state = 161;
			this.match(FusionTablesSqlParser.K_TABLE);
			this.state = 162;
			this.table_name_in_ddl();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public insert_stmt(): Insert_stmtContext {
		let _localctx: Insert_stmtContext = new Insert_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, FusionTablesSqlParser.RULE_insert_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 164;
			this.match(FusionTablesSqlParser.K_INSERT);
			this.state = 165;
			this.match(FusionTablesSqlParser.K_INTO);
			this.state = 166;
			this.table_name_in_dml();
			{
			this.state = 167;
			this.match(FusionTablesSqlParser.LPAR);
			this.state = 168;
			this.column_name_in_dml();
			this.state = 173;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FusionTablesSqlParser.T__2) {
				{
				{
				this.state = 169;
				this.match(FusionTablesSqlParser.T__2);
				this.state = 170;
				this.column_name_in_dml();
				}
				}
				this.state = 175;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 176;
			this.match(FusionTablesSqlParser.RPAR);
			}
			{
			this.state = 178;
			this.match(FusionTablesSqlParser.K_VALUES);
			this.state = 179;
			this.match(FusionTablesSqlParser.LPAR);
			this.state = 180;
			this.literal();
			this.state = 185;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FusionTablesSqlParser.T__2) {
				{
				{
				this.state = 181;
				this.match(FusionTablesSqlParser.T__2);
				this.state = 182;
				this.literal();
				}
				}
				this.state = 187;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 188;
			this.match(FusionTablesSqlParser.RPAR);
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
	public update_stmt(): Update_stmtContext {
		let _localctx: Update_stmtContext = new Update_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, FusionTablesSqlParser.RULE_update_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 190;
			this.match(FusionTablesSqlParser.K_UPDATE);
			this.state = 191;
			this.table_name_in_dml();
			this.state = 192;
			this.match(FusionTablesSqlParser.K_SET);
			this.state = 193;
			this.column_assignment();
			this.state = 198;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FusionTablesSqlParser.T__2) {
				{
				{
				this.state = 194;
				this.match(FusionTablesSqlParser.T__2);
				this.state = 195;
				this.column_assignment();
				}
				}
				this.state = 200;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 201;
			this.match(FusionTablesSqlParser.K_WHERE);
			this.state = 202;
			this.eq_comparison();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public column_assignment(): Column_assignmentContext {
		let _localctx: Column_assignmentContext = new Column_assignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, FusionTablesSqlParser.RULE_column_assignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 204;
			this.column_name_in_dml();
			this.state = 205;
			this.match(FusionTablesSqlParser.EQ);
			this.state = 206;
			this.literal();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public delete_stmt(): Delete_stmtContext {
		let _localctx: Delete_stmtContext = new Delete_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, FusionTablesSqlParser.RULE_delete_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 208;
			this.match(FusionTablesSqlParser.K_DELETE);
			this.state = 209;
			this.match(FusionTablesSqlParser.K_FROM);
			this.state = 210;
			this.table_name_in_dml();
			this.state = 216;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FusionTablesSqlParser.K_WHERE) {
				{
				this.state = 211;
				this.match(FusionTablesSqlParser.K_WHERE);
				this.state = 212;
				this.column_name_in_dml();
				this.state = 213;
				this.match(FusionTablesSqlParser.EQ);
				this.state = 214;
				this.literal();
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
	public eq_comparison(): Eq_comparisonContext {
		let _localctx: Eq_comparisonContext = new Eq_comparisonContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, FusionTablesSqlParser.RULE_eq_comparison);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 218;
			this.identifier();
			this.state = 219;
			this.match(FusionTablesSqlParser.EQ);
			this.state = 220;
			this.string_literal();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public table_name_with_alias(): Table_name_with_aliasContext {
		let _localctx: Table_name_with_aliasContext = new Table_name_with_aliasContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, FusionTablesSqlParser.RULE_table_name_with_alias);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 222;
			this.table_name();
			this.state = 225;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FusionTablesSqlParser.K_AS) {
				{
				this.state = 223;
				this.match(FusionTablesSqlParser.K_AS);
				this.state = 224;
				this.table_alias();
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
	public select_stmt(): Select_stmtContext {
		let _localctx: Select_stmtContext = new Select_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, FusionTablesSqlParser.RULE_select_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 227;
			this.match(FusionTablesSqlParser.K_SELECT);
			this.state = 228;
			this.result_column();
			this.state = 233;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FusionTablesSqlParser.T__2) {
				{
				{
				this.state = 229;
				this.match(FusionTablesSqlParser.T__2);
				this.state = 230;
				this.result_column();
				}
				}
				this.state = 235;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 236;
			this.match(FusionTablesSqlParser.K_FROM);
			this.state = 237;
			this.table_name_with_alias();
			this.state = 241;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === FusionTablesSqlParser.K_LEFT) {
				{
				{
				this.state = 238;
				this.join_clause();
				}
				}
				this.state = 243;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 246;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FusionTablesSqlParser.K_WHERE) {
				{
				this.state = 244;
				this.match(FusionTablesSqlParser.K_WHERE);
				this.state = 245;
				this.expr();
				}
			}

			this.state = 258;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FusionTablesSqlParser.K_GROUP) {
				{
				this.state = 248;
				this.match(FusionTablesSqlParser.K_GROUP);
				this.state = 249;
				this.match(FusionTablesSqlParser.K_BY);
				this.state = 250;
				this.qualified_column_name();
				this.state = 255;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FusionTablesSqlParser.T__2) {
					{
					{
					this.state = 251;
					this.match(FusionTablesSqlParser.T__2);
					this.state = 252;
					this.qualified_column_name();
					}
					}
					this.state = 257;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 270;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FusionTablesSqlParser.K_ORDER) {
				{
				this.state = 260;
				this.match(FusionTablesSqlParser.K_ORDER);
				this.state = 261;
				this.match(FusionTablesSqlParser.K_BY);
				this.state = 262;
				this.ordering_term();
				this.state = 267;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FusionTablesSqlParser.T__2) {
					{
					{
					this.state = 263;
					this.match(FusionTablesSqlParser.T__2);
					this.state = 264;
					this.ordering_term();
					}
					}
					this.state = 269;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 278;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FusionTablesSqlParser.K_OFFSET) {
				{
				{
				this.state = 272;
				this.match(FusionTablesSqlParser.K_OFFSET);
				this.state = 273;
				this.numeric_literal();
				this.state = 276;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FusionTablesSqlParser.K_LIMIT) {
					{
					this.state = 274;
					this.match(FusionTablesSqlParser.K_LIMIT);
					this.state = 275;
					this.numeric_literal();
					}
				}

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
	public ordering_term(): Ordering_termContext {
		let _localctx: Ordering_termContext = new Ordering_termContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, FusionTablesSqlParser.RULE_ordering_term);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 288;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FusionTablesSqlParser.STRING_LITERAL:
				{
				this.state = 280;
				this.qualified_column_name();
				}
				break;
			case FusionTablesSqlParser.K_ST_DISTANCE:
				{
				this.state = 281;
				this.match(FusionTablesSqlParser.K_ST_DISTANCE);
				this.state = 282;
				this.match(FusionTablesSqlParser.LPAR);
				this.state = 283;
				this.qualified_column_name();
				this.state = 284;
				this.match(FusionTablesSqlParser.T__2);
				this.state = 285;
				this.coordinate();
				this.state = 286;
				this.match(FusionTablesSqlParser.RPAR);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 291;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FusionTablesSqlParser.K_ASC || _la === FusionTablesSqlParser.K_DESC) {
				{
				this.state = 290;
				_la = this._input.LA(1);
				if (!(_la === FusionTablesSqlParser.K_ASC || _la === FusionTablesSqlParser.K_DESC)) {
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
	public join_clause(): Join_clauseContext {
		let _localctx: Join_clauseContext = new Join_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, FusionTablesSqlParser.RULE_join_clause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 293;
			this.match(FusionTablesSqlParser.K_LEFT);
			this.state = 294;
			this.match(FusionTablesSqlParser.K_OUTER);
			this.state = 295;
			this.match(FusionTablesSqlParser.K_JOIN);
			this.state = 296;
			this.table_name_with_alias();
			this.state = 297;
			this.match(FusionTablesSqlParser.K_ON);
			this.state = 298;
			this.qualified_column_name();
			this.state = 299;
			this.match(FusionTablesSqlParser.EQ);
			this.state = 300;
			this.qualified_column_name();
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
	public result_column(): Result_columnContext {
		let _localctx: Result_columnContext = new Result_columnContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, FusionTablesSqlParser.RULE_result_column);
		try {
			this.state = 309;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 302;
				this.match(FusionTablesSqlParser.T__1);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 303;
				this.table_name();
				this.state = 304;
				this.match(FusionTablesSqlParser.T__3);
				this.state = 305;
				this.match(FusionTablesSqlParser.T__1);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 307;
				this.qualified_column_name();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 308;
				this.aggregate_exp();
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
	public qualified_column_name(): Qualified_column_nameContext {
		let _localctx: Qualified_column_nameContext = new Qualified_column_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, FusionTablesSqlParser.RULE_qualified_column_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 314;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
			case 1:
				{
				this.state = 311;
				this.table_name();
				this.state = 312;
				this.match(FusionTablesSqlParser.T__3);
				}
				break;
			}
			this.state = 316;
			this.column_name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public aggregate_exp(): Aggregate_expContext {
		let _localctx: Aggregate_expContext = new Aggregate_expContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, FusionTablesSqlParser.RULE_aggregate_exp);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 318;
			_la = this._input.LA(1);
			if (!(_la === FusionTablesSqlParser.K_AVERAGE || _la === FusionTablesSqlParser.K_COUNT || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (FusionTablesSqlParser.K_MAXIMUM - 39)) | (1 << (FusionTablesSqlParser.K_MINIMUM - 39)) | (1 << (FusionTablesSqlParser.K_SUM - 39)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 319;
			this.match(FusionTablesSqlParser.LPAR);
			this.state = 320;
			this.qualified_column_name();
			this.state = 321;
			this.match(FusionTablesSqlParser.RPAR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 44, FusionTablesSqlParser.RULE_expr);
		let _la: number;
		try {
			this.state = 394;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 323;
				this.column_name_beginning_expr();
				{
				this.state = 324;
				this.operator();
				}
				this.state = 325;
				this.literal();
				this.state = 329;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FusionTablesSqlParser.K_AND || _la === FusionTablesSqlParser.K_OR) {
					{
					this.state = 326;
					this.and_or_or();
					this.state = 327;
					this.expr();
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 331;
				this.column_name_beginning_expr();
				this.state = 348;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 24, this._ctx) ) {
				case 1:
					{
					this.state = 332;
					this.match(FusionTablesSqlParser.K_LIKE);
					}
					break;

				case 2:
					{
					this.state = 333;
					this.match(FusionTablesSqlParser.K_MATCHES);
					}
					break;

				case 3:
					{
					this.state = 334;
					this.match(FusionTablesSqlParser.K_STARTS);
					this.state = 335;
					this.match(FusionTablesSqlParser.K_WITH);
					}
					break;

				case 4:
					{
					this.state = 336;
					this.match(FusionTablesSqlParser.K_ENDS);
					this.state = 337;
					this.match(FusionTablesSqlParser.K_WITH);
					}
					break;

				case 5:
					{
					this.state = 338;
					this.match(FusionTablesSqlParser.K_CONTAINS);
					}
					break;

				case 6:
					{
					this.state = 339;
					this.match(FusionTablesSqlParser.K_CONTAINS);
					this.state = 340;
					this.match(FusionTablesSqlParser.K_IGNORING);
					this.state = 341;
					this.match(FusionTablesSqlParser.K_CASE);
					}
					break;

				case 7:
					{
					this.state = 342;
					this.match(FusionTablesSqlParser.K_DOES);
					this.state = 343;
					this.match(FusionTablesSqlParser.K_NOT);
					this.state = 344;
					this.match(FusionTablesSqlParser.K_CONTAIN);
					}
					break;

				case 8:
					{
					this.state = 345;
					this.match(FusionTablesSqlParser.K_NOT);
					this.state = 346;
					this.match(FusionTablesSqlParser.K_EQUAL);
					this.state = 347;
					this.match(FusionTablesSqlParser.K_TO);
					}
					break;
				}
				this.state = 350;
				this.string_literal();
				this.state = 354;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FusionTablesSqlParser.K_AND || _la === FusionTablesSqlParser.K_OR) {
					{
					this.state = 351;
					this.and_or_or();
					this.state = 352;
					this.expr();
					}
				}

				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 356;
				this.column_name_beginning_expr();
				this.state = 357;
				this.match(FusionTablesSqlParser.K_IN);
				this.state = 358;
				this.match(FusionTablesSqlParser.LPAR);
				this.state = 359;
				this.string_literal();
				this.state = 364;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FusionTablesSqlParser.T__2) {
					{
					{
					this.state = 360;
					this.match(FusionTablesSqlParser.T__2);
					this.state = 361;
					this.string_literal();
					}
					}
					this.state = 366;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 367;
				this.match(FusionTablesSqlParser.RPAR);
				this.state = 371;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FusionTablesSqlParser.K_AND || _la === FusionTablesSqlParser.K_OR) {
					{
					this.state = 368;
					this.and_or_or();
					this.state = 369;
					this.expr();
					}
				}

				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 373;
				this.column_name_beginning_expr();
				this.state = 374;
				this.match(FusionTablesSqlParser.K_BETWEEN);
				this.state = 375;
				this.literal();
				this.state = 376;
				this.match(FusionTablesSqlParser.K_AND);
				this.state = 377;
				this.literal();
				this.state = 381;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FusionTablesSqlParser.K_AND || _la === FusionTablesSqlParser.K_OR) {
					{
					this.state = 378;
					this.and_or_or();
					this.state = 379;
					this.expr();
					}
				}

				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 383;
				this.match(FusionTablesSqlParser.K_ST_INTERSECTS);
				this.state = 384;
				this.match(FusionTablesSqlParser.LPAR);
				this.state = 385;
				this.qualified_column_name();
				this.state = 386;
				this.match(FusionTablesSqlParser.T__2);
				this.state = 387;
				this.geometry();
				this.state = 388;
				this.match(FusionTablesSqlParser.RPAR);
				this.state = 392;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === FusionTablesSqlParser.K_AND || _la === FusionTablesSqlParser.K_OR) {
					{
					this.state = 389;
					this.and_or_or();
					this.state = 390;
					this.expr();
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
	public column_name_beginning_expr(): Column_name_beginning_exprContext {
		let _localctx: Column_name_beginning_exprContext = new Column_name_beginning_exprContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, FusionTablesSqlParser.RULE_column_name_beginning_expr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 396;
			this.qualified_column_name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public column_name_in_dml(): Column_name_in_dmlContext {
		let _localctx: Column_name_in_dmlContext = new Column_name_in_dmlContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, FusionTablesSqlParser.RULE_column_name_in_dml);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 398;
			this.column_name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public and_or_or(): And_or_orContext {
		let _localctx: And_or_orContext = new And_or_orContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, FusionTablesSqlParser.RULE_and_or_or);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 400;
			_la = this._input.LA(1);
			if (!(_la === FusionTablesSqlParser.K_AND || _la === FusionTablesSqlParser.K_OR)) {
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
	public geometry(): GeometryContext {
		let _localctx: GeometryContext = new GeometryContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, FusionTablesSqlParser.RULE_geometry);
		try {
			this.state = 404;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FusionTablesSqlParser.K_CIRCLE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 402;
				this.circle();
				}
				break;
			case FusionTablesSqlParser.K_RECTANGLE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 403;
				this.rectangle();
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
	public circle(): CircleContext {
		let _localctx: CircleContext = new CircleContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, FusionTablesSqlParser.RULE_circle);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 406;
			this.match(FusionTablesSqlParser.K_CIRCLE);
			this.state = 407;
			this.match(FusionTablesSqlParser.LPAR);
			this.state = 408;
			this.coordinate();
			this.state = 409;
			this.match(FusionTablesSqlParser.T__2);
			this.state = 410;
			this.numeric_literal();
			this.state = 411;
			this.match(FusionTablesSqlParser.RPAR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rectangle(): RectangleContext {
		let _localctx: RectangleContext = new RectangleContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, FusionTablesSqlParser.RULE_rectangle);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 413;
			this.match(FusionTablesSqlParser.K_RECTANGLE);
			this.state = 414;
			this.match(FusionTablesSqlParser.LPAR);
			this.state = 415;
			this.coordinate();
			this.state = 416;
			this.match(FusionTablesSqlParser.T__2);
			this.state = 417;
			this.coordinate();
			this.state = 418;
			this.match(FusionTablesSqlParser.RPAR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public coordinate(): CoordinateContext {
		let _localctx: CoordinateContext = new CoordinateContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, FusionTablesSqlParser.RULE_coordinate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 420;
			this.match(FusionTablesSqlParser.K_LATLNG);
			this.state = 421;
			this.match(FusionTablesSqlParser.LPAR);
			this.state = 422;
			this.numeric_literal();
			this.state = 423;
			this.match(FusionTablesSqlParser.T__2);
			this.state = 424;
			this.numeric_literal();
			this.state = 425;
			this.match(FusionTablesSqlParser.RPAR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public keyword(): KeywordContext {
		let _localctx: KeywordContext = new KeywordContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, FusionTablesSqlParser.RULE_keyword);
		try {
			this.state = 485;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FusionTablesSqlParser.EOF:
				this.enterOuterAlt(_localctx, 1);
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			case FusionTablesSqlParser.K_ALTER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 428;
				this.match(FusionTablesSqlParser.K_ALTER);
				}
				break;
			case FusionTablesSqlParser.K_AND:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 429;
				this.match(FusionTablesSqlParser.K_AND);
				}
				break;
			case FusionTablesSqlParser.K_OR:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 430;
				this.match(FusionTablesSqlParser.K_OR);
				}
				break;
			case FusionTablesSqlParser.K_AS:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 431;
				this.match(FusionTablesSqlParser.K_AS);
				}
				break;
			case FusionTablesSqlParser.K_ASC:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 432;
				this.match(FusionTablesSqlParser.K_ASC);
				}
				break;
			case FusionTablesSqlParser.K_AVERAGE:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 433;
				this.match(FusionTablesSqlParser.K_AVERAGE);
				}
				break;
			case FusionTablesSqlParser.K_BY:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 434;
				this.match(FusionTablesSqlParser.K_BY);
				}
				break;
			case FusionTablesSqlParser.K_BETWEEN:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 435;
				this.match(FusionTablesSqlParser.K_BETWEEN);
				}
				break;
			case FusionTablesSqlParser.K_CASE:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 436;
				this.match(FusionTablesSqlParser.K_CASE);
				}
				break;
			case FusionTablesSqlParser.K_CIRCLE:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 437;
				this.match(FusionTablesSqlParser.K_CIRCLE);
				}
				break;
			case FusionTablesSqlParser.K_COLUMN:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 438;
				this.match(FusionTablesSqlParser.K_COLUMN);
				}
				break;
			case FusionTablesSqlParser.K_CONTAIN:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 439;
				this.match(FusionTablesSqlParser.K_CONTAIN);
				}
				break;
			case FusionTablesSqlParser.K_CONTAINS:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 440;
				this.match(FusionTablesSqlParser.K_CONTAINS);
				}
				break;
			case FusionTablesSqlParser.K_COUNT:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 441;
				this.match(FusionTablesSqlParser.K_COUNT);
				}
				break;
			case FusionTablesSqlParser.K_CREATE:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 442;
				this.match(FusionTablesSqlParser.K_CREATE);
				}
				break;
			case FusionTablesSqlParser.K_DELETE:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 443;
				this.match(FusionTablesSqlParser.K_DELETE);
				}
				break;
			case FusionTablesSqlParser.K_DESC:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 444;
				this.match(FusionTablesSqlParser.K_DESC);
				}
				break;
			case FusionTablesSqlParser.K_DOES:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 445;
				this.match(FusionTablesSqlParser.K_DOES);
				}
				break;
			case FusionTablesSqlParser.K_DROP:
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 446;
				this.match(FusionTablesSqlParser.K_DROP);
				}
				break;
			case FusionTablesSqlParser.K_ENDS:
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 447;
				this.match(FusionTablesSqlParser.K_ENDS);
				}
				break;
			case FusionTablesSqlParser.K_EQUAL:
				this.enterOuterAlt(_localctx, 22);
				{
				this.state = 448;
				this.match(FusionTablesSqlParser.K_EQUAL);
				}
				break;
			case FusionTablesSqlParser.K_FROM:
				this.enterOuterAlt(_localctx, 23);
				{
				this.state = 449;
				this.match(FusionTablesSqlParser.K_FROM);
				}
				break;
			case FusionTablesSqlParser.K_GROUP:
				this.enterOuterAlt(_localctx, 24);
				{
				this.state = 450;
				this.match(FusionTablesSqlParser.K_GROUP);
				}
				break;
			case FusionTablesSqlParser.K_HAVING:
				this.enterOuterAlt(_localctx, 25);
				{
				this.state = 451;
				this.match(FusionTablesSqlParser.K_HAVING);
				}
				break;
			case FusionTablesSqlParser.K_IGNORING:
				this.enterOuterAlt(_localctx, 26);
				{
				this.state = 452;
				this.match(FusionTablesSqlParser.K_IGNORING);
				}
				break;
			case FusionTablesSqlParser.K_IN:
				this.enterOuterAlt(_localctx, 27);
				{
				this.state = 453;
				this.match(FusionTablesSqlParser.K_IN);
				}
				break;
			case FusionTablesSqlParser.K_INSERT:
				this.enterOuterAlt(_localctx, 28);
				{
				this.state = 454;
				this.match(FusionTablesSqlParser.K_INSERT);
				}
				break;
			case FusionTablesSqlParser.K_INTO:
				this.enterOuterAlt(_localctx, 29);
				{
				this.state = 455;
				this.match(FusionTablesSqlParser.K_INTO);
				}
				break;
			case FusionTablesSqlParser.K_JOIN:
				this.enterOuterAlt(_localctx, 30);
				{
				this.state = 456;
				this.match(FusionTablesSqlParser.K_JOIN);
				}
				break;
			case FusionTablesSqlParser.K_LATLNG:
				this.enterOuterAlt(_localctx, 31);
				{
				this.state = 457;
				this.match(FusionTablesSqlParser.K_LATLNG);
				}
				break;
			case FusionTablesSqlParser.K_LEFT:
				this.enterOuterAlt(_localctx, 32);
				{
				this.state = 458;
				this.match(FusionTablesSqlParser.K_LEFT);
				}
				break;
			case FusionTablesSqlParser.K_LIKE:
				this.enterOuterAlt(_localctx, 33);
				{
				this.state = 459;
				this.match(FusionTablesSqlParser.K_LIKE);
				}
				break;
			case FusionTablesSqlParser.K_LIMIT:
				this.enterOuterAlt(_localctx, 34);
				{
				this.state = 460;
				this.match(FusionTablesSqlParser.K_LIMIT);
				}
				break;
			case FusionTablesSqlParser.K_MATCHES:
				this.enterOuterAlt(_localctx, 35);
				{
				this.state = 461;
				this.match(FusionTablesSqlParser.K_MATCHES);
				}
				break;
			case FusionTablesSqlParser.K_MAXIMUM:
				this.enterOuterAlt(_localctx, 36);
				{
				this.state = 462;
				this.match(FusionTablesSqlParser.K_MAXIMUM);
				}
				break;
			case FusionTablesSqlParser.K_MINIMUM:
				this.enterOuterAlt(_localctx, 37);
				{
				this.state = 463;
				this.match(FusionTablesSqlParser.K_MINIMUM);
				}
				break;
			case FusionTablesSqlParser.K_NOT:
				this.enterOuterAlt(_localctx, 38);
				{
				this.state = 464;
				this.match(FusionTablesSqlParser.K_NOT);
				}
				break;
			case FusionTablesSqlParser.K_OF:
				this.enterOuterAlt(_localctx, 39);
				{
				this.state = 465;
				this.match(FusionTablesSqlParser.K_OF);
				}
				break;
			case FusionTablesSqlParser.K_OFFSET:
				this.enterOuterAlt(_localctx, 40);
				{
				this.state = 466;
				this.match(FusionTablesSqlParser.K_OFFSET);
				}
				break;
			case FusionTablesSqlParser.K_ON:
				this.enterOuterAlt(_localctx, 41);
				{
				this.state = 467;
				this.match(FusionTablesSqlParser.K_ON);
				}
				break;
			case FusionTablesSqlParser.K_ORDER:
				this.enterOuterAlt(_localctx, 42);
				{
				this.state = 468;
				this.match(FusionTablesSqlParser.K_ORDER);
				}
				break;
			case FusionTablesSqlParser.K_OUTER:
				this.enterOuterAlt(_localctx, 43);
				{
				this.state = 469;
				this.match(FusionTablesSqlParser.K_OUTER);
				}
				break;
			case FusionTablesSqlParser.K_RECTANGLE:
				this.enterOuterAlt(_localctx, 44);
				{
				this.state = 470;
				this.match(FusionTablesSqlParser.K_RECTANGLE);
				}
				break;
			case FusionTablesSqlParser.K_RENAME:
				this.enterOuterAlt(_localctx, 45);
				{
				this.state = 471;
				this.match(FusionTablesSqlParser.K_RENAME);
				}
				break;
			case FusionTablesSqlParser.K_SELECT:
				this.enterOuterAlt(_localctx, 46);
				{
				this.state = 472;
				this.match(FusionTablesSqlParser.K_SELECT);
				}
				break;
			case FusionTablesSqlParser.K_SET:
				this.enterOuterAlt(_localctx, 47);
				{
				this.state = 473;
				this.match(FusionTablesSqlParser.K_SET);
				}
				break;
			case FusionTablesSqlParser.K_STARTS:
				this.enterOuterAlt(_localctx, 48);
				{
				this.state = 474;
				this.match(FusionTablesSqlParser.K_STARTS);
				}
				break;
			case FusionTablesSqlParser.K_ST_DISTANCE:
				this.enterOuterAlt(_localctx, 49);
				{
				this.state = 475;
				this.match(FusionTablesSqlParser.K_ST_DISTANCE);
				}
				break;
			case FusionTablesSqlParser.K_ST_INTERSECTS:
				this.enterOuterAlt(_localctx, 50);
				{
				this.state = 476;
				this.match(FusionTablesSqlParser.K_ST_INTERSECTS);
				}
				break;
			case FusionTablesSqlParser.K_SUM:
				this.enterOuterAlt(_localctx, 51);
				{
				this.state = 477;
				this.match(FusionTablesSqlParser.K_SUM);
				}
				break;
			case FusionTablesSqlParser.K_TABLE:
				this.enterOuterAlt(_localctx, 52);
				{
				this.state = 478;
				this.match(FusionTablesSqlParser.K_TABLE);
				}
				break;
			case FusionTablesSqlParser.K_TO:
				this.enterOuterAlt(_localctx, 53);
				{
				this.state = 479;
				this.match(FusionTablesSqlParser.K_TO);
				}
				break;
			case FusionTablesSqlParser.K_UPDATE:
				this.enterOuterAlt(_localctx, 54);
				{
				this.state = 480;
				this.match(FusionTablesSqlParser.K_UPDATE);
				}
				break;
			case FusionTablesSqlParser.K_VALUES:
				this.enterOuterAlt(_localctx, 55);
				{
				this.state = 481;
				this.match(FusionTablesSqlParser.K_VALUES);
				}
				break;
			case FusionTablesSqlParser.K_VIEW:
				this.enterOuterAlt(_localctx, 56);
				{
				this.state = 482;
				this.match(FusionTablesSqlParser.K_VIEW);
				}
				break;
			case FusionTablesSqlParser.K_WHERE:
				this.enterOuterAlt(_localctx, 57);
				{
				this.state = 483;
				this.match(FusionTablesSqlParser.K_WHERE);
				}
				break;
			case FusionTablesSqlParser.K_WITH:
				this.enterOuterAlt(_localctx, 58);
				{
				this.state = 484;
				this.match(FusionTablesSqlParser.K_WITH);
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
	public operator(): OperatorContext {
		let _localctx: OperatorContext = new OperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, FusionTablesSqlParser.RULE_operator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 487;
			_la = this._input.LA(1);
			if (!(((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (FusionTablesSqlParser.LT_EQ - 65)) | (1 << (FusionTablesSqlParser.GT_EQ - 65)) | (1 << (FusionTablesSqlParser.GT - 65)) | (1 << (FusionTablesSqlParser.EQ - 65)) | (1 << (FusionTablesSqlParser.LT - 65)))) !== 0))) {
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
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, FusionTablesSqlParser.RULE_literal);
		try {
			this.state = 491;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FusionTablesSqlParser.NUMERIC_LITERAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 489;
				this.numeric_literal();
				}
				break;
			case FusionTablesSqlParser.STRING_LITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 490;
				this.string_literal();
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
	public error_message(): Error_messageContext {
		let _localctx: Error_messageContext = new Error_messageContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, FusionTablesSqlParser.RULE_error_message);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 493;
			this.string_literal();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identifier(): IdentifierContext {
		let _localctx: IdentifierContext = new IdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, FusionTablesSqlParser.RULE_identifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 495;
			this.string_literal();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public column_alias(): Column_aliasContext {
		let _localctx: Column_aliasContext = new Column_aliasContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, FusionTablesSqlParser.RULE_column_alias);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 497;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public table_name(): Table_nameContext {
		let _localctx: Table_nameContext = new Table_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, FusionTablesSqlParser.RULE_table_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 499;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public column_name(): Column_nameContext {
		let _localctx: Column_nameContext = new Column_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, FusionTablesSqlParser.RULE_column_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 501;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public new_table_name(): New_table_nameContext {
		let _localctx: New_table_nameContext = new New_table_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, FusionTablesSqlParser.RULE_new_table_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 503;
			this.table_name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public view_name(): View_nameContext {
		let _localctx: View_nameContext = new View_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, FusionTablesSqlParser.RULE_view_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 505;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public table_alias(): Table_aliasContext {
		let _localctx: Table_aliasContext = new Table_aliasContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, FusionTablesSqlParser.RULE_table_alias);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 507;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public numeric_literal(): Numeric_literalContext {
		let _localctx: Numeric_literalContext = new Numeric_literalContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, FusionTablesSqlParser.RULE_numeric_literal);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 509;
			this.match(FusionTablesSqlParser.NUMERIC_LITERAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public string_literal(): String_literalContext {
		let _localctx: String_literalContext = new String_literalContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, FusionTablesSqlParser.RULE_string_literal);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 511;
			this.match(FusionTablesSqlParser.STRING_LITERAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03P\u0204\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x03\x02\x07\x02Z\n\x02\f\x02\x0E\x02]\v\x02\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03i" +
		"\n\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07" +
		"\x03\x07\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x07\n\x90\n\n\f\n\x0E" +
		"\n\x93\v\n\x03\n\x03\n\x03\n\x03\n\x05\n\x99\n\n\x03\n\x07\n\x9C\n\n\f" +
		"\n\x0E\n\x9F\v\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f" +
		"\x03\f\x03\f\x03\f\x03\f\x07\f\xAE\n\f\f\f\x0E\f\xB1\v\f\x03\f\x03\f\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x07\f\xBA\n\f\f\f\x0E\f\xBD\v\f\x03\f\x03\f" +
		"\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x07\r\xC7\n\r\f\r\x0E\r\xCA\v\r\x03" +
		"\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\xDB\n\x0F\x03\x10\x03" +
		"\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x05\x11\xE4\n\x11\x03\x12" +
		"\x03\x12\x03\x12\x03\x12\x07\x12\xEA\n\x12\f\x12\x0E\x12\xED\v\x12\x03" +
		"\x12\x03\x12\x03\x12\x07\x12\xF2\n\x12\f\x12\x0E\x12\xF5\v\x12\x03\x12" +
		"\x03\x12\x05\x12\xF9\n\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x07" +
		"\x12\u0100\n\x12\f\x12\x0E\x12\u0103\v\x12\x05\x12\u0105\n\x12\x03\x12" +
		"\x03\x12\x03\x12\x03\x12\x03\x12\x07\x12\u010C\n\x12\f\x12\x0E\x12\u010F" +
		"\v\x12\x05\x12\u0111\n\x12\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\u0117" +
		"\n\x12\x05\x12\u0119\n\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03" +
		"\x13\x03\x13\x03\x13\x05\x13\u0123\n\x13\x03\x13\x05\x13\u0126\n\x13\x03" +
		"\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03" +
		"\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x05\x15\u0138\n\x15" +
		"\x03\x16\x03\x16\x03\x16\x05\x16\u013D\n\x16\x03\x16\x03\x16\x03\x17\x03" +
		"\x17\x03\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03" +
		"\x18\x05\x18\u014C\n\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18" +
		"\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18" +
		"\x03\x18\x03\x18\x05\x18\u015F\n\x18\x03\x18\x03\x18\x03\x18\x03\x18\x05" +
		"\x18\u0165\n\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x07\x18" +
		"\u016D\n\x18\f\x18\x0E\x18\u0170\v\x18\x03\x18\x03\x18\x03\x18\x03\x18" +
		"\x05\x18\u0176\n\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03" +
		"\x18\x03\x18\x05\x18\u0180\n\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18" +
		"\x03\x18\x03\x18\x03\x18\x03\x18\x05\x18\u018B\n\x18\x05\x18\u018D\n\x18" +
		"\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x05\x1C" +
		"\u0197\n\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03" +
		"\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03" +
		"\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03 \x03 \x03 \x03 \x03 \x03 \x03" +
		" \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03" +
		" \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03" +
		" \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03" +
		" \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x05 \u01E8\n \x03!\x03" +
		"!\x03\"\x03\"\x05\"\u01EE\n\"\x03#\x03#\x03$\x03$\x03%\x03%\x03&\x03&" +
		"\x03\'\x03\'\x03(\x03(\x03)\x03)\x03*\x03*\x03+\x03+\x03,\x03,\x03,\x02" +
		"\x02\x02-\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12" +
		"\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&" +
		"\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02" +
		"B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02\x02\x06\x04\x02" +
		"\v\v\x16\x16\x06\x02\f\f\x13\x13)*77\x03\x02\b\t\x03\x02CG\x02\u0245\x02" +
		"[\x03\x02\x02\x02\x04h\x03\x02\x02\x02\x06l\x03\x02\x02\x02\bn\x03\x02" +
		"\x02\x02\np\x03\x02\x02\x02\fy\x03\x02\x02\x02\x0E|\x03\x02\x02\x02\x10" +
		"\x7F\x03\x02\x02\x02\x12\x86\x03\x02\x02\x02\x14\xA2\x03\x02\x02\x02\x16" +
		"\xA6\x03\x02\x02\x02\x18\xC0\x03\x02\x02\x02\x1A\xCE\x03\x02\x02\x02\x1C" +
		"\xD2\x03\x02\x02\x02\x1E\xDC\x03\x02\x02\x02 \xE0\x03\x02\x02\x02\"\xE5" +
		"\x03\x02\x02\x02$\u0122\x03\x02\x02\x02&\u0127\x03\x02\x02\x02(\u0137" +
		"\x03\x02\x02\x02*\u013C\x03\x02\x02\x02,\u0140\x03\x02\x02\x02.\u018C" +
		"\x03\x02\x02\x020\u018E\x03\x02\x02\x022\u0190\x03\x02\x02\x024\u0192" +
		"\x03\x02\x02\x026\u0196\x03\x02\x02\x028\u0198\x03\x02\x02\x02:\u019F" +
		"\x03\x02\x02\x02<\u01A6\x03\x02\x02\x02>\u01E7\x03\x02\x02\x02@\u01E9" +
		"\x03\x02\x02\x02B\u01ED\x03\x02\x02\x02D\u01EF\x03\x02\x02\x02F\u01F1" +
		"\x03\x02\x02\x02H\u01F3\x03\x02\x02\x02J\u01F5\x03\x02\x02\x02L\u01F7" +
		"\x03\x02\x02\x02N\u01F9\x03\x02\x02\x02P\u01FB\x03\x02\x02\x02R\u01FD" +
		"\x03\x02\x02\x02T\u01FF\x03\x02\x02\x02V\u0201\x03\x02\x02\x02XZ\x05\x04" +
		"\x03\x02YX\x03\x02\x02\x02Z]\x03\x02\x02\x02[Y\x03\x02\x02\x02[\\\x03" +
		"\x02\x02\x02\\\x03\x03\x02\x02\x02][\x03\x02\x02\x02^i\x05\x10\t\x02_" +
		"i\x05\"\x12\x02`i\x05\x12\n\x02ai\x05\n\x06\x02bi\x05\x1C\x0F\x02ci\x05" +
		"\x14\v\x02di\x05\x16\f\x02ei\x05\x18\r\x02fi\x05\f\x07\x02gi\x05\x0E\b" +
		"\x02h^\x03\x02\x02\x02h_\x03\x02\x02\x02h`\x03\x02\x02\x02ha\x03\x02\x02" +
		"\x02hb\x03\x02\x02\x02hc\x03\x02\x02\x02hd\x03\x02\x02\x02he\x03\x02\x02" +
		"\x02hf\x03\x02\x02\x02hg\x03\x02\x02\x02ij\x03\x02\x02\x02jk\x07\x03\x02" +
		"\x02k\x05\x03\x02\x02\x02lm\x05J&\x02m\x07\x03\x02\x02\x02no\x05J&\x02" +
		"o\t\x03\x02\x02\x02pq\x07\x14\x02\x02qr\x07;\x02\x02rs\x05F$\x02st\x07" +
		"\n\x02\x02tu\x075\x02\x02uv\x07\x04\x02\x02vw\x07\x1C\x02\x02wx\x05\x06" +
		"\x04\x02x\v\x03\x02\x02\x02yz\x07\x17\x02\x02z{\x05\x06\x04\x02{\r\x03" +
		"\x02\x02\x02|}\x079\x02\x02}~\x07<\x02\x02~\x0F\x03\x02\x02\x02\x7F\x80" +
		"\x07\x07\x02\x02\x80\x81\x07;\x02\x02\x81\x82\x05\x06\x04\x02\x82\x83" +
		"\x073\x02\x02\x83\x84\x07=\x02\x02\x84\x85\x05F$\x02\x85\x11\x03\x02\x02" +
		"\x02\x86\x87\x07\x14\x02\x02\x87\x88\x07@\x02\x02\x88\x89\x05P)\x02\x89" +
		"\x8A\x07\n\x02\x02\x8A\x8B\x07H\x02\x02\x8B\x8C\x075\x02\x02\x8C\x91\x05" +
		"(\x15\x02\x8D\x8E\x07\x05\x02\x02\x8E\x90\x05(\x15\x02\x8F\x8D\x03\x02" +
		"\x02\x02\x90\x93\x03\x02\x02\x02\x91\x8F\x03\x02\x02\x02\x91\x92\x03\x02" +
		"\x02\x02\x92\x94\x03\x02\x02\x02\x93\x91\x03\x02\x02\x02\x94\x95\x07\x1C" +
		"\x02\x02\x95\x98\x05 \x11\x02\x96\x97\x07A\x02\x02\x97\x99\x05.\x18\x02" +
		"\x98\x96\x03\x02\x02\x02\x98\x99\x03\x02\x02\x02\x99\x9D\x03\x02\x02\x02" +
		"\x9A\x9C\x05&\x14\x02\x9B\x9A\x03\x02\x02\x02\x9C\x9F\x03\x02\x02\x02" +
		"\x9D\x9B\x03\x02\x02\x02\x9D\x9E\x03\x02\x02\x02\x9E\xA0\x03\x02\x02\x02" +
		"\x9F\x9D\x03\x02\x02\x02\xA0\xA1\x07I\x02\x02\xA1\x13\x03\x02\x02\x02" +
		"\xA2\xA3\x07\x1A\x02\x02\xA3\xA4\x07;\x02\x02\xA4\xA5\x05\x06\x04\x02" +
		"\xA5\x15\x03\x02\x02\x02\xA6\xA7\x07!\x02\x02\xA7\xA8\x07\"\x02\x02\xA8" +
		"\xA9\x05\b\x05\x02\xA9\xAA\x07H\x02\x02\xAA\xAF\x052\x1A\x02\xAB\xAC\x07" +
		"\x05\x02\x02\xAC\xAE\x052\x1A\x02\xAD\xAB\x03\x02\x02\x02\xAE\xB1\x03" +
		"\x02\x02\x02\xAF\xAD\x03\x02\x02\x02\xAF\xB0\x03\x02\x02\x02\xB0\xB2\x03" +
		"\x02\x02\x02\xB1\xAF\x03\x02\x02\x02\xB2\xB3\x07I\x02\x02\xB3\xB4\x03" +
		"\x02\x02\x02\xB4\xB5\x07?\x02\x02\xB5\xB6\x07H\x02\x02\xB6\xBB\x05B\"" +
		"\x02\xB7\xB8\x07\x05\x02\x02\xB8\xBA\x05B\"\x02\xB9\xB7\x03\x02\x02\x02" +
		"\xBA\xBD\x03\x02\x02\x02\xBB\xB9\x03\x02\x02\x02\xBB\xBC\x03\x02\x02\x02" +
		"\xBC\xBE\x03\x02\x02\x02\xBD\xBB\x03\x02\x02\x02\xBE\xBF\x07I\x02\x02" +
		"\xBF\x17\x03\x02\x02\x02\xC0\xC1\x07>\x02\x02\xC1\xC2\x05\b\x05\x02\xC2" +
		"\xC3\x078\x02\x02\xC3\xC8\x05\x1A\x0E\x02\xC4\xC5\x07\x05\x02\x02\xC5" +
		"\xC7\x05\x1A\x0E\x02\xC6\xC4\x03\x02\x02\x02\xC7\xCA\x03\x02\x02\x02\xC8" +
		"\xC6\x03\x02\x02\x02\xC8\xC9\x03\x02\x02\x02\xC9\xCB\x03\x02\x02\x02\xCA" +
		"\xC8\x03\x02\x02\x02\xCB\xCC\x07A\x02\x02\xCC\xCD\x05\x1E\x10\x02\xCD" +
		"\x19\x03\x02\x02\x02\xCE\xCF\x052\x1A\x02\xCF\xD0\x07F\x02\x02\xD0\xD1" +
		"\x05B\"\x02\xD1\x1B\x03\x02\x02\x02\xD2\xD3\x07\x15\x02\x02\xD3\xD4\x07" +
		"\x1C\x02\x02\xD4\xDA\x05\b\x05\x02\xD5\xD6\x07A\x02\x02\xD6\xD7\x052\x1A" +
		"\x02\xD7\xD8\x07F\x02\x02\xD8\xD9\x05B\"\x02\xD9\xDB\x03\x02\x02\x02\xDA" +
		"\xD5\x03\x02\x02\x02\xDA\xDB\x03\x02\x02\x02\xDB\x1D\x03\x02\x02\x02\xDC" +
		"\xDD\x05F$\x02\xDD\xDE\x07F\x02\x02\xDE\xDF\x05V,\x02\xDF\x1F\x03\x02" +
		"\x02\x02\xE0\xE3\x05J&\x02\xE1\xE2\x07\n\x02\x02\xE2\xE4\x05R*\x02\xE3" +
		"\xE1\x03\x02\x02\x02\xE3\xE4\x03\x02\x02\x02\xE4!\x03\x02\x02\x02\xE5" +
		"\xE6\x075\x02\x02\xE6\xEB\x05(\x15\x02\xE7\xE8\x07\x05\x02\x02\xE8\xEA" +
		"\x05(\x15\x02\xE9\xE7\x03\x02\x02\x02\xEA\xED\x03\x02\x02\x02\xEB\xE9" +
		"\x03\x02\x02\x02\xEB\xEC\x03\x02\x02\x02\xEC\xEE\x03\x02\x02\x02\xED\xEB" +
		"\x03\x02\x02\x02\xEE\xEF\x07\x1C\x02\x02\xEF\xF3\x05 \x11\x02\xF0\xF2" +
		"\x05&\x14\x02\xF1\xF0\x03\x02\x02\x02\xF2\xF5\x03\x02\x02\x02\xF3\xF1" +
		"\x03\x02\x02\x02\xF3\xF4\x03\x02\x02\x02\xF4\xF8\x03\x02\x02\x02\xF5\xF3" +
		"\x03\x02\x02\x02\xF6\xF7\x07A\x02\x02\xF7\xF9\x05.\x18\x02\xF8\xF6\x03" +
		"\x02\x02\x02\xF8\xF9\x03\x02\x02\x02\xF9\u0104\x03\x02\x02\x02\xFA\xFB" +
		"\x07\x1D\x02\x02\xFB\xFC\x07\r\x02\x02\xFC\u0101\x05*\x16\x02\xFD\xFE" +
		"\x07\x05\x02\x02\xFE\u0100\x05*\x16\x02\xFF\xFD\x03\x02\x02\x02\u0100" +
		"\u0103\x03\x02\x02\x02\u0101\xFF\x03\x02\x02\x02\u0101\u0102\x03\x02\x02" +
		"\x02\u0102\u0105\x03\x02\x02\x02\u0103\u0101\x03\x02\x02\x02\u0104\xFA" +
		"\x03\x02\x02\x02\u0104\u0105\x03\x02\x02\x02\u0105\u0110\x03\x02\x02\x02" +
		"\u0106\u0107\x070\x02\x02\u0107\u0108\x07\r\x02\x02\u0108\u010D\x05$\x13" +
		"\x02\u0109\u010A\x07\x05\x02\x02\u010A\u010C\x05$\x13\x02\u010B\u0109" +
		"\x03\x02\x02\x02\u010C\u010F\x03\x02\x02\x02\u010D\u010B\x03\x02\x02\x02" +
		"\u010D\u010E\x03\x02\x02\x02\u010E\u0111\x03\x02\x02\x02\u010F\u010D\x03" +
		"\x02\x02\x02\u0110\u0106\x03\x02\x02\x02\u0110\u0111\x03\x02\x02\x02\u0111" +
		"\u0118\x03\x02\x02\x02\u0112\u0113\x07.\x02\x02\u0113\u0116\x05T+\x02" +
		"\u0114\u0115\x07\'\x02\x02\u0115\u0117\x05T+\x02\u0116\u0114\x03\x02\x02" +
		"\x02\u0116\u0117\x03\x02\x02\x02\u0117\u0119\x03\x02\x02\x02\u0118\u0112" +
		"\x03\x02\x02\x02\u0118\u0119\x03\x02\x02\x02\u0119#\x03\x02\x02\x02\u011A" +
		"\u0123\x05*\x16\x02\u011B\u011C\x074\x02\x02\u011C\u011D\x07H\x02\x02" +
		"\u011D\u011E\x05*\x16\x02\u011E\u011F\x07\x05\x02\x02\u011F\u0120\x05" +
		"<\x1F\x02\u0120\u0121\x07I\x02\x02\u0121\u0123\x03\x02\x02\x02\u0122\u011A" +
		"\x03\x02\x02\x02\u0122\u011B\x03\x02\x02\x02\u0123\u0125\x03\x02\x02\x02" +
		"\u0124\u0126\t\x02\x02\x02\u0125\u0124\x03\x02\x02\x02\u0125\u0126\x03" +
		"\x02\x02\x02\u0126%\x03\x02\x02\x02\u0127\u0128\x07%\x02\x02\u0128\u0129" +
		"\x071\x02\x02\u0129\u012A\x07#\x02\x02\u012A\u012B\x05 \x11\x02\u012B" +
		"\u012C\x07/\x02\x02\u012C\u012D\x05*\x16\x02\u012D\u012E\x07F\x02\x02" +
		"\u012E\u012F\x05*\x16\x02\u012F\'\x03\x02\x02\x02\u0130\u0138\x07\x04" +
		"\x02\x02\u0131\u0132\x05J&\x02\u0132\u0133\x07\x06\x02\x02\u0133\u0134" +
		"\x07\x04\x02\x02\u0134\u0138\x03\x02\x02\x02\u0135\u0138\x05*\x16\x02" +
		"\u0136\u0138\x05,\x17\x02\u0137\u0130\x03\x02\x02\x02\u0137\u0131\x03" +
		"\x02\x02\x02\u0137\u0135\x03\x02\x02\x02\u0137\u0136\x03\x02\x02\x02\u0138" +
		")\x03\x02\x02\x02\u0139\u013A\x05J&\x02\u013A\u013B\x07\x06\x02\x02\u013B" +
		"\u013D\x03\x02\x02\x02\u013C\u0139\x03\x02\x02\x02\u013C\u013D\x03\x02" +
		"\x02\x02\u013D\u013E\x03\x02\x02\x02\u013E\u013F\x05L\'\x02\u013F+\x03" +
		"\x02\x02\x02\u0140\u0141\t\x03\x02\x02\u0141\u0142\x07H\x02\x02\u0142" +
		"\u0143\x05*\x16\x02\u0143\u0144\x07I\x02\x02\u0144-\x03\x02\x02\x02\u0145" +
		"\u0146\x050\x19\x02\u0146\u0147\x05@!\x02\u0147\u014B\x05B\"\x02\u0148" +
		"\u0149\x054\x1B\x02\u0149\u014A\x05.\x18\x02\u014A\u014C\x03\x02\x02\x02" +
		"\u014B\u0148\x03\x02\x02\x02\u014B\u014C\x03\x02\x02\x02\u014C\u018D\x03" +
		"\x02\x02\x02\u014D\u015E\x050\x19\x02\u014E\u015F\x07&\x02\x02\u014F\u015F" +
		"\x07(\x02\x02\u0150\u0151\x07:\x02\x02\u0151\u015F\x07B\x02\x02\u0152" +
		"\u0153\x07\x1B\x02\x02\u0153\u015F\x07B\x02\x02\u0154\u015F\x07\x12\x02" +
		"\x02\u0155\u0156\x07\x12\x02\x02\u0156\u0157\x07\x1F\x02\x02\u0157\u015F" +
		"\x07\x0F\x02\x02\u0158\u0159\x07\x18\x02\x02\u0159\u015A\x07+\x02\x02" +
		"\u015A\u015F\x07\x19\x02\x02\u015B\u015C\x07+\x02\x02\u015C\u015D\x07" +
		",\x02\x02\u015D\u015F\x07=\x02\x02\u015E\u014E\x03\x02\x02\x02\u015E\u014F" +
		"\x03\x02\x02\x02\u015E\u0150\x03\x02\x02\x02\u015E\u0152\x03\x02\x02\x02" +
		"\u015E\u0154\x03\x02\x02\x02\u015E\u0155\x03\x02\x02\x02\u015E\u0158\x03" +
		"\x02\x02\x02\u015E\u015B\x03\x02\x02\x02\u015F\u0160\x03\x02\x02\x02\u0160" +
		"\u0164\x05V,\x02\u0161\u0162\x054\x1B\x02\u0162\u0163\x05.\x18\x02\u0163" +
		"\u0165\x03\x02\x02\x02\u0164\u0161\x03\x02\x02\x02\u0164\u0165\x03\x02" +
		"\x02\x02\u0165\u018D\x03\x02\x02\x02\u0166\u0167\x050\x19\x02\u0167\u0168" +
		"\x07 \x02\x02\u0168\u0169\x07H\x02\x02\u0169\u016E\x05V,\x02\u016A\u016B" +
		"\x07\x05\x02\x02\u016B\u016D\x05V,\x02\u016C\u016A\x03\x02\x02\x02\u016D" +
		"\u0170\x03\x02\x02\x02\u016E\u016C\x03\x02\x02\x02\u016E\u016F\x03\x02" +
		"\x02\x02\u016F\u0171\x03\x02\x02\x02\u0170\u016E\x03\x02\x02\x02\u0171" +
		"\u0175\x07I\x02\x02\u0172\u0173\x054\x1B\x02\u0173\u0174\x05.\x18\x02" +
		"\u0174\u0176\x03\x02\x02\x02\u0175\u0172\x03\x02\x02\x02\u0175\u0176\x03" +
		"\x02\x02\x02\u0176\u018D\x03\x02\x02\x02\u0177\u0178\x050\x19\x02\u0178" +
		"\u0179\x07\x0E\x02\x02\u0179\u017A\x05B\"\x02\u017A\u017B\x07\b\x02\x02" +
		"\u017B\u017F\x05B\"\x02\u017C\u017D\x054\x1B\x02\u017D\u017E\x05.\x18" +
		"\x02\u017E\u0180\x03\x02\x02\x02\u017F\u017C\x03\x02\x02\x02\u017F\u0180" +
		"\x03\x02\x02\x02\u0180\u018D\x03\x02\x02\x02\u0181\u0182\x076\x02\x02" +
		"\u0182\u0183\x07H\x02\x02\u0183\u0184\x05*\x16\x02\u0184\u0185\x07\x05" +
		"\x02\x02\u0185\u0186\x056\x1C\x02\u0186\u018A\x07I\x02\x02\u0187\u0188" +
		"\x054\x1B\x02\u0188\u0189\x05.\x18\x02\u0189\u018B\x03\x02\x02\x02\u018A" +
		"\u0187\x03\x02\x02\x02\u018A\u018B\x03\x02\x02\x02\u018B\u018D\x03\x02" +
		"\x02\x02\u018C\u0145\x03\x02\x02\x02\u018C\u014D\x03\x02\x02\x02\u018C" +
		"\u0166\x03\x02\x02\x02\u018C\u0177\x03\x02\x02\x02\u018C\u0181\x03\x02" +
		"\x02\x02\u018D/\x03\x02\x02\x02\u018E\u018F\x05*\x16\x02\u018F1\x03\x02" +
		"\x02\x02\u0190\u0191\x05L\'\x02\u01913\x03\x02\x02\x02\u0192\u0193\t\x04" +
		"\x02\x02\u01935\x03\x02\x02\x02\u0194\u0197\x058\x1D\x02\u0195\u0197\x05" +
		":\x1E\x02\u0196\u0194\x03\x02\x02\x02\u0196\u0195\x03\x02\x02\x02\u0197" +
		"7\x03\x02\x02\x02\u0198\u0199\x07\x10\x02\x02\u0199\u019A\x07H\x02\x02" +
		"\u019A\u019B\x05<\x1F\x02\u019B\u019C\x07\x05\x02\x02\u019C\u019D\x05" +
		"T+\x02\u019D\u019E\x07I\x02\x02\u019E9\x03\x02\x02\x02\u019F\u01A0\x07" +
		"2\x02\x02\u01A0\u01A1\x07H\x02\x02\u01A1\u01A2\x05<\x1F\x02\u01A2\u01A3" +
		"\x07\x05\x02\x02\u01A3\u01A4\x05<\x1F\x02\u01A4\u01A5\x07I\x02\x02\u01A5" +
		";\x03\x02\x02\x02\u01A6\u01A7\x07$\x02\x02\u01A7\u01A8\x07H\x02\x02\u01A8" +
		"\u01A9\x05T+\x02\u01A9\u01AA\x07\x05\x02\x02\u01AA\u01AB\x05T+\x02\u01AB" +
		"\u01AC\x07I\x02\x02\u01AC=\x03\x02\x02\x02\u01AD\u01E8\x03\x02\x02\x02" +
		"\u01AE\u01E8\x07\x07\x02\x02\u01AF\u01E8\x07\b\x02\x02\u01B0\u01E8\x07" +
		"\t\x02\x02\u01B1\u01E8\x07\n\x02\x02\u01B2\u01E8\x07\v\x02\x02\u01B3\u01E8" +
		"\x07\f\x02\x02\u01B4\u01E8\x07\r\x02\x02\u01B5\u01E8\x07\x0E\x02\x02\u01B6" +
		"\u01E8\x07\x0F\x02\x02\u01B7\u01E8\x07\x10\x02\x02\u01B8\u01E8\x07\x11" +
		"\x02\x02\u01B9\u01E8\x07\x19\x02\x02\u01BA\u01E8\x07\x12\x02\x02\u01BB" +
		"\u01E8\x07\x13\x02\x02\u01BC\u01E8\x07\x14\x02\x02\u01BD\u01E8\x07\x15" +
		"\x02\x02\u01BE\u01E8\x07\x16\x02\x02\u01BF\u01E8\x07\x18\x02\x02\u01C0" +
		"\u01E8\x07\x1A\x02\x02\u01C1\u01E8\x07\x1B\x02\x02\u01C2\u01E8\x07,\x02" +
		"\x02\u01C3\u01E8\x07\x1C\x02\x02\u01C4\u01E8\x07\x1D\x02\x02\u01C5\u01E8" +
		"\x07\x1E\x02\x02\u01C6\u01E8\x07\x1F\x02\x02\u01C7\u01E8\x07 \x02\x02" +
		"\u01C8\u01E8\x07!\x02\x02\u01C9\u01E8\x07\"\x02\x02\u01CA\u01E8\x07#\x02" +
		"\x02\u01CB\u01E8\x07$\x02\x02\u01CC\u01E8\x07%\x02\x02\u01CD\u01E8\x07" +
		"&\x02\x02\u01CE\u01E8\x07\'\x02\x02\u01CF\u01E8\x07(\x02\x02\u01D0\u01E8" +
		"\x07)\x02\x02\u01D1\u01E8\x07*\x02\x02\u01D2\u01E8\x07+\x02\x02\u01D3" +
		"\u01E8\x07-\x02\x02\u01D4\u01E8\x07.\x02\x02\u01D5\u01E8\x07/\x02\x02" +
		"\u01D6\u01E8\x070\x02\x02\u01D7\u01E8\x071\x02\x02\u01D8\u01E8\x072\x02" +
		"\x02\u01D9\u01E8\x073\x02\x02\u01DA\u01E8\x075\x02\x02\u01DB\u01E8\x07" +
		"8\x02\x02\u01DC\u01E8\x07:\x02\x02\u01DD\u01E8\x074\x02\x02\u01DE\u01E8" +
		"\x076\x02\x02\u01DF\u01E8\x077\x02\x02\u01E0\u01E8\x07;\x02\x02\u01E1" +
		"\u01E8\x07=\x02\x02\u01E2\u01E8\x07>\x02\x02\u01E3\u01E8\x07?\x02\x02" +
		"\u01E4\u01E8\x07@\x02\x02\u01E5\u01E8\x07A\x02\x02\u01E6\u01E8\x07B\x02" +
		"\x02\u01E7\u01AD\x03\x02\x02\x02\u01E7\u01AE\x03\x02\x02\x02\u01E7\u01AF" +
		"\x03\x02\x02\x02\u01E7\u01B0\x03\x02\x02\x02\u01E7\u01B1\x03\x02\x02\x02" +
		"\u01E7\u01B2\x03\x02\x02\x02\u01E7\u01B3\x03\x02\x02\x02\u01E7\u01B4\x03" +
		"\x02\x02\x02\u01E7\u01B5\x03\x02\x02\x02\u01E7\u01B6\x03\x02\x02\x02\u01E7" +
		"\u01B7\x03\x02\x02\x02\u01E7\u01B8\x03\x02\x02\x02\u01E7\u01B9\x03\x02" +
		"\x02\x02\u01E7\u01BA\x03\x02\x02\x02\u01E7\u01BB\x03\x02\x02\x02\u01E7" +
		"\u01BC\x03\x02\x02\x02\u01E7\u01BD\x03\x02\x02\x02\u01E7\u01BE\x03\x02" +
		"\x02\x02\u01E7\u01BF\x03\x02\x02\x02\u01E7\u01C0\x03\x02\x02\x02\u01E7" +
		"\u01C1\x03\x02\x02\x02\u01E7\u01C2\x03\x02\x02\x02\u01E7\u01C3\x03\x02" +
		"\x02\x02\u01E7\u01C4\x03\x02\x02\x02\u01E7\u01C5\x03\x02\x02\x02\u01E7" +
		"\u01C6\x03\x02\x02\x02\u01E7\u01C7\x03\x02\x02\x02\u01E7\u01C8\x03\x02" +
		"\x02\x02\u01E7\u01C9\x03\x02\x02\x02\u01E7\u01CA\x03\x02\x02\x02\u01E7" +
		"\u01CB\x03\x02\x02\x02\u01E7\u01CC\x03\x02\x02\x02\u01E7\u01CD\x03\x02" +
		"\x02\x02\u01E7\u01CE\x03\x02\x02\x02\u01E7\u01CF\x03\x02\x02\x02\u01E7" +
		"\u01D0\x03\x02\x02\x02\u01E7\u01D1\x03\x02\x02\x02\u01E7\u01D2\x03\x02" +
		"\x02\x02\u01E7\u01D3\x03\x02\x02\x02\u01E7\u01D4\x03\x02\x02\x02\u01E7" +
		"\u01D5\x03\x02\x02\x02\u01E7\u01D6\x03\x02\x02\x02\u01E7\u01D7\x03\x02" +
		"\x02\x02\u01E7\u01D8\x03\x02\x02\x02\u01E7\u01D9\x03\x02\x02\x02\u01E7" +
		"\u01DA\x03\x02\x02\x02\u01E7\u01DB\x03\x02\x02\x02\u01E7\u01DC\x03\x02" +
		"\x02\x02\u01E7\u01DD\x03\x02\x02\x02\u01E7\u01DE\x03\x02\x02\x02\u01E7" +
		"\u01DF\x03\x02\x02\x02\u01E7\u01E0\x03\x02\x02\x02\u01E7\u01E1\x03\x02" +
		"\x02\x02\u01E7\u01E2\x03\x02\x02\x02\u01E7\u01E3\x03\x02\x02\x02\u01E7" +
		"\u01E4\x03\x02\x02\x02\u01E7\u01E5\x03\x02\x02\x02\u01E7\u01E6\x03\x02" +
		"\x02\x02\u01E8?\x03\x02\x02\x02\u01E9\u01EA\t\x05\x02\x02\u01EAA\x03\x02" +
		"\x02\x02\u01EB\u01EE\x05T+\x02\u01EC\u01EE\x05V,\x02\u01ED\u01EB\x03\x02" +
		"\x02\x02\u01ED\u01EC\x03\x02\x02\x02\u01EEC\x03\x02\x02\x02\u01EF\u01F0" +
		"\x05V,\x02\u01F0E\x03\x02\x02\x02\u01F1\u01F2\x05V,\x02\u01F2G\x03\x02" +
		"\x02\x02\u01F3\u01F4\x05F$\x02\u01F4I\x03\x02\x02\x02\u01F5\u01F6\x05" +
		"F$\x02\u01F6K\x03\x02\x02\x02\u01F7\u01F8\x05F$\x02\u01F8M\x03\x02\x02" +
		"\x02\u01F9\u01FA\x05J&\x02\u01FAO\x03\x02\x02\x02\u01FB\u01FC\x05F$\x02" +
		"\u01FCQ\x03\x02\x02\x02\u01FD\u01FE\x05F$\x02\u01FES\x03\x02\x02\x02\u01FF" +
		"\u0200\x07J\x02\x02\u0200U\x03\x02\x02\x02\u0201\u0202\x07K\x02\x02\u0202" +
		"W\x03\x02\x02\x02$[h\x91\x98\x9D\xAF\xBB\xC8\xDA\xE3\xEB\xF3\xF8\u0101" +
		"\u0104\u010D\u0110\u0116\u0118\u0122\u0125\u0137\u013C\u014B\u015E\u0164" +
		"\u016E\u0175\u017F\u018A\u018C\u0196\u01E7\u01ED";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!FusionTablesSqlParser.__ATN) {
			FusionTablesSqlParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(FusionTablesSqlParser._serializedATN));
		}

		return FusionTablesSqlParser.__ATN;
	}

}

export class FusionTablesSqlContext extends ParserRuleContext {
	public sql_stmt(): Sql_stmtContext[];
	public sql_stmt(i: number): Sql_stmtContext;
	public sql_stmt(i?: number): Sql_stmtContext | Sql_stmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Sql_stmtContext);
		} else {
			return this.getRuleContext(i, Sql_stmtContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FusionTablesSqlParser.RULE_fusionTablesSql; }
	// @Override
	public enterRule(listener: FusionTablesSqlListener): void {
		if (listener.enterFusionTablesSql) {
			listener.enterFusionTablesSql(this);
		}
	}
	// @Override
	public exitRule(listener: FusionTablesSqlListener): void {
		if (listener.exitFusionTablesSql) {
			listener.exitFusionTablesSql(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FusionTablesSqlVisitor<Result>): Result {
		if (visitor.visitFusionTablesSql) {
			return visitor.visitFusionTablesSql(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Sql_stmtContext extends ParserRuleContext {
	public alter_table_stmt(): Alter_table_stmtContext | undefined {
		return this.tryGetRuleContext(0, Alter_table_stmtContext);
	}
	public select_stmt(): Select_stmtContext | undefined {
		return this.tryGetRuleContext(0, Select_stmtContext);
	}
	public create_view_stmt(): Create_view_stmtContext | undefined {
		return this.tryGetRuleContext(0, Create_view_stmtContext);
	}
	public create_table_as_select_stmt(): Create_table_as_select_stmtContext | undefined {
		return this.tryGetRuleContext(0, Create_table_as_select_stmtContext);
	}
	public delete_stmt(): Delete_stmtContext | undefined {
		return this.tryGetRuleContext(0, Delete_stmtContext);
	}
	public drop_table_stmt(): Drop_table_stmtContext | undefined {
		return this.tryGetRuleContext(0, Drop_table_stmtContext);
	}
	public insert_stmt(): Insert_stmtContext | undefined {
		return this.tryGetRuleContext(0, Insert_stmtContext);
	}
	public update_stmt(): Update_stmtContext | undefined {
		return this.tryGetRuleContext(0, Update_stmtContext);
	}
	public describe_stmt(): Describe_stmtContext | undefined {
		return this.tryGetRuleContext(0, Describe_stmtContext);
	}
	public show_tables_stmt(): Show_tables_stmtContext | undefined {
		return this.tryGetRuleContext(0, Show_tables_stmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FusionTablesSqlParser.RULE_sql_stmt; }
	// @Override
	public enterRule(listener: FusionTablesSqlListener): void {
		if (listener.enterSql_stmt) {
			listener.enterSql_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: FusionTablesSqlListener): void {
		if (listener.exitSql_stmt) {
			listener.exitSql_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FusionTablesSqlVisitor<Result>): Result {
		if (visitor.visitSql_stmt) {
			return visitor.visitSql_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Table_name_in_ddlContext extends ParserRuleContext {
	public table_name(): Table_nameContext {
		return this.getRuleContext(0, Table_nameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FusionTablesSqlParser.RULE_table_name_in_ddl; }
	// @Override
	public enterRule(listener: FusionTablesSqlListener): void {
		if (listener.enterTable_name_in_ddl) {
			listener.enterTable_name_in_ddl(this);
		}
	}
	// @Override
	public exitRule(listener: FusionTablesSqlListener): void {
		if (listener.exitTable_name_in_ddl) {
			listener.exitTable_name_in_ddl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FusionTablesSqlVisitor<Result>): Result {
		if (visitor.visitTable_name_in_ddl) {
			return visitor.visitTable_name_in_ddl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Table_name_in_dmlContext extends ParserRuleContext {
	public table_name(): Table_nameContext {
		return this.getRuleContext(0, Table_nameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FusionTablesSqlParser.RULE_table_name_in_dml; }
	// @Override
	public enterRule(listener: FusionTablesSqlListener): void {
		if (listener.enterTable_name_in_dml) {
			listener.enterTable_name_in_dml(this);
		}
	}
	// @Override
	public exitRule(listener: FusionTablesSqlListener): void {
		if (listener.exitTable_name_in_dml) {
			listener.exitTable_name_in_dml(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FusionTablesSqlVisitor<Result>): Result {
		if (visitor.visitTable_name_in_dml) {
			return visitor.visitTable_name_in_dml(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Create_table_as_select_stmtContext extends ParserRuleContext {
	public K_CREATE(): TerminalNode { return this.getToken(FusionTablesSqlParser.K_CREATE, 0); }
	public K_TABLE(): TerminalNode { return this.getToken(FusionTablesSqlParser.K_TABLE, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public K_AS(): TerminalNode { return this.getToken(FusionTablesSqlParser.K_AS, 0); }
	public K_SELECT(): TerminalNode { return this.getToken(FusionTablesSqlParser.K_SELECT, 0); }
	public K_FROM(): TerminalNode { return this.getToken(FusionTablesSqlParser.K_FROM, 0); }
	public table_name_in_ddl(): Table_name_in_ddlContext {
		return this.getRuleContext(0, Table_name_in_ddlContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FusionTablesSqlParser.RULE_create_table_as_select_stmt; }
	// @Override
	public enterRule(listener: FusionTablesSqlListener): void {
		if (listener.enterCreate_table_as_select_stmt) {
			listener.enterCreate_table_as_select_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: FusionTablesSqlListener): void {
		if (listener.exitCreate_table_as_select_stmt) {
			listener.exitCreate_table_as_select_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FusionTablesSqlVisitor<Result>): Result {
		if (visitor.visitCreate_table_as_select_stmt) {
			return visitor.visitCreate_table_as_select_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Describe_stmtContext extends ParserRuleContext {
	public K_DESCRIBE(): TerminalNode { return this.getToken(FusionTablesSqlParser.K_DESCRIBE, 0); }
	public table_name_in_ddl(): Table_name_in_ddlContext {
		return this.getRuleContext(0, Table_name_in_ddlContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FusionTablesSqlParser.RULE_describe_stmt; }
	// @Override
	public enterRule(listener: FusionTablesSqlListener): void {
		if (listener.enterDescribe_stmt) {
			listener.enterDescribe_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: FusionTablesSqlListener): void {
		if (listener.exitDescribe_stmt) {
			listener.exitDescribe_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FusionTablesSqlVisitor<Result>): Result {
		if (visitor.visitDescribe_stmt) {
			return visitor.visitDescribe_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Show_tables_stmtContext extends ParserRuleContext {
	public K_SHOW(): TerminalNode { return this.getToken(FusionTablesSqlParser.K_SHOW, 0); }
	public K_TABLES(): TerminalNode { return this.getToken(FusionTablesSqlParser.K_TABLES, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FusionTablesSqlParser.RULE_show_tables_stmt; }
	// @Override
	public enterRule(listener: FusionTablesSqlListener): void {
		if (listener.enterShow_tables_stmt) {
			listener.enterShow_tables_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: FusionTablesSqlListener): void {
		if (listener.exitShow_tables_stmt) {
			listener.exitShow_tables_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FusionTablesSqlVisitor<Result>): Result {
		if (visitor.visitShow_tables_stmt) {
			return visitor.visitShow_tables_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Alter_table_stmtContext extends ParserRuleContext {
	public K_ALTER(): TerminalNode { return this.getToken(FusionTablesSqlParser.K_ALTER, 0); }
	public K_TABLE(): TerminalNode { return this.getToken(FusionTablesSqlParser.K_TABLE, 0); }
	public table_name_in_ddl(): Table_name_in_ddlContext {
		return this.getRuleContext(0, Table_name_in_ddlContext);
	}
	public K_RENAME(): TerminalNode | undefined { return this.tryGetToken(FusionTablesSqlParser.K_RENAME, 0); }
	public K_TO(): TerminalNode | undefined { return this.tryGetToken(FusionTablesSqlParser.K_TO, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FusionTablesSqlParser.RULE_alter_table_stmt; }
	// @Override
	public enterRule(listener: FusionTablesSqlListener): void {
		if (listener.enterAlter_table_stmt) {
			listener.enterAlter_table_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: FusionTablesSqlListener): void {
		if (listener.exitAlter_table_stmt) {
			listener.exitAlter_table_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FusionTablesSqlVisitor<Result>): Result {
		if (visitor.visitAlter_table_stmt) {
			return visitor.visitAlter_table_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Create_view_stmtContext extends ParserRuleContext {
	public K_CREATE(): TerminalNode { return this.getToken(FusionTablesSqlParser.K_CREATE, 0); }
	public K_VIEW(): TerminalNode { return this.getToken(FusionTablesSqlParser.K_VIEW, 0); }
	public view_name(): View_nameContext {
		return this.getRuleContext(0, View_nameContext);
	}
	public K_AS(): TerminalNode { return this.getToken(FusionTablesSqlParser.K_AS, 0); }
	public LPAR(): TerminalNode { return this.getToken(FusionTablesSqlParser.LPAR, 0); }
	public K_SELECT(): TerminalNode { return this.getToken(FusionTablesSqlParser.K_SELECT, 0); }
	public result_column(): Result_columnContext[];
	public result_column(i: number): Result_columnContext;
	public result_column(i?: number): Result_columnContext | Result_columnContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Result_columnContext);
		} else {
			return this.getRuleContext(i, Result_columnContext);
		}
	}
	public K_FROM(): TerminalNode { return this.getToken(FusionTablesSqlParser.K_FROM, 0); }
	public RPAR(): TerminalNode { return this.getToken(FusionTablesSqlParser.RPAR, 0); }
	public table_name_with_alias(): Table_name_with_aliasContext | undefined {
		return this.tryGetRuleContext(0, Table_name_with_aliasContext);
	}
	public join_clause(): Join_clauseContext[];
	public join_clause(i: number): Join_clauseContext;
	public join_clause(i?: number): Join_clauseContext | Join_clauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Join_clauseContext);
		} else {
			return this.getRuleContext(i, Join_clauseContext);
		}
	}
	public K_WHERE(): TerminalNode | undefined { return this.tryGetToken(FusionTablesSqlParser.K_WHERE, 0); }
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FusionTablesSqlParser.RULE_create_view_stmt; }
	// @Override
	public enterRule(listener: FusionTablesSqlListener): void {
		if (listener.enterCreate_view_stmt) {
			listener.enterCreate_view_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: FusionTablesSqlListener): void {
		if (listener.exitCreate_view_stmt) {
			listener.exitCreate_view_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FusionTablesSqlVisitor<Result>): Result {
		if (visitor.visitCreate_view_stmt) {
			return visitor.visitCreate_view_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Drop_table_stmtContext extends ParserRuleContext {
	public K_DROP(): TerminalNode { return this.getToken(FusionTablesSqlParser.K_DROP, 0); }
	public K_TABLE(): TerminalNode { return this.getToken(FusionTablesSqlParser.K_TABLE, 0); }
	public table_name_in_ddl(): Table_name_in_ddlContext {
		return this.getRuleContext(0, Table_name_in_ddlContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FusionTablesSqlParser.RULE_drop_table_stmt; }
	// @Override
	public enterRule(listener: FusionTablesSqlListener): void {
		if (listener.enterDrop_table_stmt) {
			listener.enterDrop_table_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: FusionTablesSqlListener): void {
		if (listener.exitDrop_table_stmt) {
			listener.exitDrop_table_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FusionTablesSqlVisitor<Result>): Result {
		if (visitor.visitDrop_table_stmt) {
			return visitor.visitDrop_table_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Insert_stmtContext extends ParserRuleContext {
	public K_INSERT(): TerminalNode { return this.getToken(FusionTablesSqlParser.K_INSERT, 0); }
	public K_INTO(): TerminalNode { return this.getToken(FusionTablesSqlParser.K_INTO, 0); }
	public table_name_in_dml(): Table_name_in_dmlContext {
		return this.getRuleContext(0, Table_name_in_dmlContext);
	}
	public LPAR(): TerminalNode[];
	public LPAR(i: number): TerminalNode;
	public LPAR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FusionTablesSqlParser.LPAR);
		} else {
			return this.getToken(FusionTablesSqlParser.LPAR, i);
		}
	}
	public column_name_in_dml(): Column_name_in_dmlContext[];
	public column_name_in_dml(i: number): Column_name_in_dmlContext;
	public column_name_in_dml(i?: number): Column_name_in_dmlContext | Column_name_in_dmlContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Column_name_in_dmlContext);
		} else {
			return this.getRuleContext(i, Column_name_in_dmlContext);
		}
	}
	public RPAR(): TerminalNode[];
	public RPAR(i: number): TerminalNode;
	public RPAR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FusionTablesSqlParser.RPAR);
		} else {
			return this.getToken(FusionTablesSqlParser.RPAR, i);
		}
	}
	public K_VALUES(): TerminalNode | undefined { return this.tryGetToken(FusionTablesSqlParser.K_VALUES, 0); }
	public literal(): LiteralContext[];
	public literal(i: number): LiteralContext;
	public literal(i?: number): LiteralContext | LiteralContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LiteralContext);
		} else {
			return this.getRuleContext(i, LiteralContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FusionTablesSqlParser.RULE_insert_stmt; }
	// @Override
	public enterRule(listener: FusionTablesSqlListener): void {
		if (listener.enterInsert_stmt) {
			listener.enterInsert_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: FusionTablesSqlListener): void {
		if (listener.exitInsert_stmt) {
			listener.exitInsert_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FusionTablesSqlVisitor<Result>): Result {
		if (visitor.visitInsert_stmt) {
			return visitor.visitInsert_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Update_stmtContext extends ParserRuleContext {
	public K_UPDATE(): TerminalNode { return this.getToken(FusionTablesSqlParser.K_UPDATE, 0); }
	public table_name_in_dml(): Table_name_in_dmlContext {
		return this.getRuleContext(0, Table_name_in_dmlContext);
	}
	public K_SET(): TerminalNode { return this.getToken(FusionTablesSqlParser.K_SET, 0); }
	public column_assignment(): Column_assignmentContext[];
	public column_assignment(i: number): Column_assignmentContext;
	public column_assignment(i?: number): Column_assignmentContext | Column_assignmentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Column_assignmentContext);
		} else {
			return this.getRuleContext(i, Column_assignmentContext);
		}
	}
	public K_WHERE(): TerminalNode { return this.getToken(FusionTablesSqlParser.K_WHERE, 0); }
	public eq_comparison(): Eq_comparisonContext {
		return this.getRuleContext(0, Eq_comparisonContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FusionTablesSqlParser.RULE_update_stmt; }
	// @Override
	public enterRule(listener: FusionTablesSqlListener): void {
		if (listener.enterUpdate_stmt) {
			listener.enterUpdate_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: FusionTablesSqlListener): void {
		if (listener.exitUpdate_stmt) {
			listener.exitUpdate_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FusionTablesSqlVisitor<Result>): Result {
		if (visitor.visitUpdate_stmt) {
			return visitor.visitUpdate_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Column_assignmentContext extends ParserRuleContext {
	public column_name_in_dml(): Column_name_in_dmlContext {
		return this.getRuleContext(0, Column_name_in_dmlContext);
	}
	public EQ(): TerminalNode { return this.getToken(FusionTablesSqlParser.EQ, 0); }
	public literal(): LiteralContext {
		return this.getRuleContext(0, LiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FusionTablesSqlParser.RULE_column_assignment; }
	// @Override
	public enterRule(listener: FusionTablesSqlListener): void {
		if (listener.enterColumn_assignment) {
			listener.enterColumn_assignment(this);
		}
	}
	// @Override
	public exitRule(listener: FusionTablesSqlListener): void {
		if (listener.exitColumn_assignment) {
			listener.exitColumn_assignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FusionTablesSqlVisitor<Result>): Result {
		if (visitor.visitColumn_assignment) {
			return visitor.visitColumn_assignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Delete_stmtContext extends ParserRuleContext {
	public K_DELETE(): TerminalNode { return this.getToken(FusionTablesSqlParser.K_DELETE, 0); }
	public K_FROM(): TerminalNode { return this.getToken(FusionTablesSqlParser.K_FROM, 0); }
	public table_name_in_dml(): Table_name_in_dmlContext {
		return this.getRuleContext(0, Table_name_in_dmlContext);
	}
	public K_WHERE(): TerminalNode | undefined { return this.tryGetToken(FusionTablesSqlParser.K_WHERE, 0); }
	public column_name_in_dml(): Column_name_in_dmlContext | undefined {
		return this.tryGetRuleContext(0, Column_name_in_dmlContext);
	}
	public EQ(): TerminalNode | undefined { return this.tryGetToken(FusionTablesSqlParser.EQ, 0); }
	public literal(): LiteralContext | undefined {
		return this.tryGetRuleContext(0, LiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FusionTablesSqlParser.RULE_delete_stmt; }
	// @Override
	public enterRule(listener: FusionTablesSqlListener): void {
		if (listener.enterDelete_stmt) {
			listener.enterDelete_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: FusionTablesSqlListener): void {
		if (listener.exitDelete_stmt) {
			listener.exitDelete_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FusionTablesSqlVisitor<Result>): Result {
		if (visitor.visitDelete_stmt) {
			return visitor.visitDelete_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Eq_comparisonContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public EQ(): TerminalNode { return this.getToken(FusionTablesSqlParser.EQ, 0); }
	public string_literal(): String_literalContext {
		return this.getRuleContext(0, String_literalContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FusionTablesSqlParser.RULE_eq_comparison; }
	// @Override
	public enterRule(listener: FusionTablesSqlListener): void {
		if (listener.enterEq_comparison) {
			listener.enterEq_comparison(this);
		}
	}
	// @Override
	public exitRule(listener: FusionTablesSqlListener): void {
		if (listener.exitEq_comparison) {
			listener.exitEq_comparison(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FusionTablesSqlVisitor<Result>): Result {
		if (visitor.visitEq_comparison) {
			return visitor.visitEq_comparison(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Table_name_with_aliasContext extends ParserRuleContext {
	public table_name(): Table_nameContext {
		return this.getRuleContext(0, Table_nameContext);
	}
	public K_AS(): TerminalNode | undefined { return this.tryGetToken(FusionTablesSqlParser.K_AS, 0); }
	public table_alias(): Table_aliasContext | undefined {
		return this.tryGetRuleContext(0, Table_aliasContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FusionTablesSqlParser.RULE_table_name_with_alias; }
	// @Override
	public enterRule(listener: FusionTablesSqlListener): void {
		if (listener.enterTable_name_with_alias) {
			listener.enterTable_name_with_alias(this);
		}
	}
	// @Override
	public exitRule(listener: FusionTablesSqlListener): void {
		if (listener.exitTable_name_with_alias) {
			listener.exitTable_name_with_alias(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FusionTablesSqlVisitor<Result>): Result {
		if (visitor.visitTable_name_with_alias) {
			return visitor.visitTable_name_with_alias(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Select_stmtContext extends ParserRuleContext {
	public K_SELECT(): TerminalNode { return this.getToken(FusionTablesSqlParser.K_SELECT, 0); }
	public result_column(): Result_columnContext[];
	public result_column(i: number): Result_columnContext;
	public result_column(i?: number): Result_columnContext | Result_columnContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Result_columnContext);
		} else {
			return this.getRuleContext(i, Result_columnContext);
		}
	}
	public K_FROM(): TerminalNode { return this.getToken(FusionTablesSqlParser.K_FROM, 0); }
	public table_name_with_alias(): Table_name_with_aliasContext {
		return this.getRuleContext(0, Table_name_with_aliasContext);
	}
	public join_clause(): Join_clauseContext[];
	public join_clause(i: number): Join_clauseContext;
	public join_clause(i?: number): Join_clauseContext | Join_clauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Join_clauseContext);
		} else {
			return this.getRuleContext(i, Join_clauseContext);
		}
	}
	public K_WHERE(): TerminalNode | undefined { return this.tryGetToken(FusionTablesSqlParser.K_WHERE, 0); }
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	public K_GROUP(): TerminalNode | undefined { return this.tryGetToken(FusionTablesSqlParser.K_GROUP, 0); }
	public K_BY(): TerminalNode[];
	public K_BY(i: number): TerminalNode;
	public K_BY(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FusionTablesSqlParser.K_BY);
		} else {
			return this.getToken(FusionTablesSqlParser.K_BY, i);
		}
	}
	public qualified_column_name(): Qualified_column_nameContext[];
	public qualified_column_name(i: number): Qualified_column_nameContext;
	public qualified_column_name(i?: number): Qualified_column_nameContext | Qualified_column_nameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Qualified_column_nameContext);
		} else {
			return this.getRuleContext(i, Qualified_column_nameContext);
		}
	}
	public K_ORDER(): TerminalNode | undefined { return this.tryGetToken(FusionTablesSqlParser.K_ORDER, 0); }
	public ordering_term(): Ordering_termContext[];
	public ordering_term(i: number): Ordering_termContext;
	public ordering_term(i?: number): Ordering_termContext | Ordering_termContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Ordering_termContext);
		} else {
			return this.getRuleContext(i, Ordering_termContext);
		}
	}
	public K_OFFSET(): TerminalNode | undefined { return this.tryGetToken(FusionTablesSqlParser.K_OFFSET, 0); }
	public numeric_literal(): Numeric_literalContext[];
	public numeric_literal(i: number): Numeric_literalContext;
	public numeric_literal(i?: number): Numeric_literalContext | Numeric_literalContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Numeric_literalContext);
		} else {
			return this.getRuleContext(i, Numeric_literalContext);
		}
	}
	public K_LIMIT(): TerminalNode | undefined { return this.tryGetToken(FusionTablesSqlParser.K_LIMIT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FusionTablesSqlParser.RULE_select_stmt; }
	// @Override
	public enterRule(listener: FusionTablesSqlListener): void {
		if (listener.enterSelect_stmt) {
			listener.enterSelect_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: FusionTablesSqlListener): void {
		if (listener.exitSelect_stmt) {
			listener.exitSelect_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FusionTablesSqlVisitor<Result>): Result {
		if (visitor.visitSelect_stmt) {
			return visitor.visitSelect_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Ordering_termContext extends ParserRuleContext {
	public qualified_column_name(): Qualified_column_nameContext | undefined {
		return this.tryGetRuleContext(0, Qualified_column_nameContext);
	}
	public K_ST_DISTANCE(): TerminalNode | undefined { return this.tryGetToken(FusionTablesSqlParser.K_ST_DISTANCE, 0); }
	public LPAR(): TerminalNode | undefined { return this.tryGetToken(FusionTablesSqlParser.LPAR, 0); }
	public coordinate(): CoordinateContext | undefined {
		return this.tryGetRuleContext(0, CoordinateContext);
	}
	public RPAR(): TerminalNode | undefined { return this.tryGetToken(FusionTablesSqlParser.RPAR, 0); }
	public K_ASC(): TerminalNode | undefined { return this.tryGetToken(FusionTablesSqlParser.K_ASC, 0); }
	public K_DESC(): TerminalNode | undefined { return this.tryGetToken(FusionTablesSqlParser.K_DESC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FusionTablesSqlParser.RULE_ordering_term; }
	// @Override
	public enterRule(listener: FusionTablesSqlListener): void {
		if (listener.enterOrdering_term) {
			listener.enterOrdering_term(this);
		}
	}
	// @Override
	public exitRule(listener: FusionTablesSqlListener): void {
		if (listener.exitOrdering_term) {
			listener.exitOrdering_term(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FusionTablesSqlVisitor<Result>): Result {
		if (visitor.visitOrdering_term) {
			return visitor.visitOrdering_term(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Join_clauseContext extends ParserRuleContext {
	public K_LEFT(): TerminalNode | undefined { return this.tryGetToken(FusionTablesSqlParser.K_LEFT, 0); }
	public K_OUTER(): TerminalNode | undefined { return this.tryGetToken(FusionTablesSqlParser.K_OUTER, 0); }
	public K_JOIN(): TerminalNode | undefined { return this.tryGetToken(FusionTablesSqlParser.K_JOIN, 0); }
	public table_name_with_alias(): Table_name_with_aliasContext | undefined {
		return this.tryGetRuleContext(0, Table_name_with_aliasContext);
	}
	public K_ON(): TerminalNode | undefined { return this.tryGetToken(FusionTablesSqlParser.K_ON, 0); }
	public qualified_column_name(): Qualified_column_nameContext[];
	public qualified_column_name(i: number): Qualified_column_nameContext;
	public qualified_column_name(i?: number): Qualified_column_nameContext | Qualified_column_nameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Qualified_column_nameContext);
		} else {
			return this.getRuleContext(i, Qualified_column_nameContext);
		}
	}
	public EQ(): TerminalNode | undefined { return this.tryGetToken(FusionTablesSqlParser.EQ, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FusionTablesSqlParser.RULE_join_clause; }
	// @Override
	public enterRule(listener: FusionTablesSqlListener): void {
		if (listener.enterJoin_clause) {
			listener.enterJoin_clause(this);
		}
	}
	// @Override
	public exitRule(listener: FusionTablesSqlListener): void {
		if (listener.exitJoin_clause) {
			listener.exitJoin_clause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FusionTablesSqlVisitor<Result>): Result {
		if (visitor.visitJoin_clause) {
			return visitor.visitJoin_clause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Result_columnContext extends ParserRuleContext {
	public table_name(): Table_nameContext | undefined {
		return this.tryGetRuleContext(0, Table_nameContext);
	}
	public qualified_column_name(): Qualified_column_nameContext | undefined {
		return this.tryGetRuleContext(0, Qualified_column_nameContext);
	}
	public aggregate_exp(): Aggregate_expContext | undefined {
		return this.tryGetRuleContext(0, Aggregate_expContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FusionTablesSqlParser.RULE_result_column; }
	// @Override
	public enterRule(listener: FusionTablesSqlListener): void {
		if (listener.enterResult_column) {
			listener.enterResult_column(this);
		}
	}
	// @Override
	public exitRule(listener: FusionTablesSqlListener): void {
		if (listener.exitResult_column) {
			listener.exitResult_column(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FusionTablesSqlVisitor<Result>): Result {
		if (visitor.visitResult_column) {
			return visitor.visitResult_column(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Qualified_column_nameContext extends ParserRuleContext {
	public column_name(): Column_nameContext {
		return this.getRuleContext(0, Column_nameContext);
	}
	public table_name(): Table_nameContext | undefined {
		return this.tryGetRuleContext(0, Table_nameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FusionTablesSqlParser.RULE_qualified_column_name; }
	// @Override
	public enterRule(listener: FusionTablesSqlListener): void {
		if (listener.enterQualified_column_name) {
			listener.enterQualified_column_name(this);
		}
	}
	// @Override
	public exitRule(listener: FusionTablesSqlListener): void {
		if (listener.exitQualified_column_name) {
			listener.exitQualified_column_name(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FusionTablesSqlVisitor<Result>): Result {
		if (visitor.visitQualified_column_name) {
			return visitor.visitQualified_column_name(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Aggregate_expContext extends ParserRuleContext {
	public LPAR(): TerminalNode { return this.getToken(FusionTablesSqlParser.LPAR, 0); }
	public qualified_column_name(): Qualified_column_nameContext {
		return this.getRuleContext(0, Qualified_column_nameContext);
	}
	public RPAR(): TerminalNode { return this.getToken(FusionTablesSqlParser.RPAR, 0); }
	public K_SUM(): TerminalNode | undefined { return this.tryGetToken(FusionTablesSqlParser.K_SUM, 0); }
	public K_COUNT(): TerminalNode | undefined { return this.tryGetToken(FusionTablesSqlParser.K_COUNT, 0); }
	public K_AVERAGE(): TerminalNode | undefined { return this.tryGetToken(FusionTablesSqlParser.K_AVERAGE, 0); }
	public K_MAXIMUM(): TerminalNode | undefined { return this.tryGetToken(FusionTablesSqlParser.K_MAXIMUM, 0); }
	public K_MINIMUM(): TerminalNode | undefined { return this.tryGetToken(FusionTablesSqlParser.K_MINIMUM, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FusionTablesSqlParser.RULE_aggregate_exp; }
	// @Override
	public enterRule(listener: FusionTablesSqlListener): void {
		if (listener.enterAggregate_exp) {
			listener.enterAggregate_exp(this);
		}
	}
	// @Override
	public exitRule(listener: FusionTablesSqlListener): void {
		if (listener.exitAggregate_exp) {
			listener.exitAggregate_exp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FusionTablesSqlVisitor<Result>): Result {
		if (visitor.visitAggregate_exp) {
			return visitor.visitAggregate_exp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExprContext extends ParserRuleContext {
	public column_name_beginning_expr(): Column_name_beginning_exprContext | undefined {
		return this.tryGetRuleContext(0, Column_name_beginning_exprContext);
	}
	public literal(): LiteralContext[];
	public literal(i: number): LiteralContext;
	public literal(i?: number): LiteralContext | LiteralContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LiteralContext);
		} else {
			return this.getRuleContext(i, LiteralContext);
		}
	}
	public operator(): OperatorContext | undefined {
		return this.tryGetRuleContext(0, OperatorContext);
	}
	public and_or_or(): And_or_orContext | undefined {
		return this.tryGetRuleContext(0, And_or_orContext);
	}
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	public string_literal(): String_literalContext[];
	public string_literal(i: number): String_literalContext;
	public string_literal(i?: number): String_literalContext | String_literalContext[] {
		if (i === undefined) {
			return this.getRuleContexts(String_literalContext);
		} else {
			return this.getRuleContext(i, String_literalContext);
		}
	}
	public K_LIKE(): TerminalNode | undefined { return this.tryGetToken(FusionTablesSqlParser.K_LIKE, 0); }
	public K_MATCHES(): TerminalNode | undefined { return this.tryGetToken(FusionTablesSqlParser.K_MATCHES, 0); }
	public K_STARTS(): TerminalNode | undefined { return this.tryGetToken(FusionTablesSqlParser.K_STARTS, 0); }
	public K_WITH(): TerminalNode | undefined { return this.tryGetToken(FusionTablesSqlParser.K_WITH, 0); }
	public K_ENDS(): TerminalNode | undefined { return this.tryGetToken(FusionTablesSqlParser.K_ENDS, 0); }
	public K_CONTAINS(): TerminalNode | undefined { return this.tryGetToken(FusionTablesSqlParser.K_CONTAINS, 0); }
	public K_IGNORING(): TerminalNode | undefined { return this.tryGetToken(FusionTablesSqlParser.K_IGNORING, 0); }
	public K_CASE(): TerminalNode | undefined { return this.tryGetToken(FusionTablesSqlParser.K_CASE, 0); }
	public K_DOES(): TerminalNode | undefined { return this.tryGetToken(FusionTablesSqlParser.K_DOES, 0); }
	public K_NOT(): TerminalNode | undefined { return this.tryGetToken(FusionTablesSqlParser.K_NOT, 0); }
	public K_CONTAIN(): TerminalNode | undefined { return this.tryGetToken(FusionTablesSqlParser.K_CONTAIN, 0); }
	public K_EQUAL(): TerminalNode | undefined { return this.tryGetToken(FusionTablesSqlParser.K_EQUAL, 0); }
	public K_TO(): TerminalNode | undefined { return this.tryGetToken(FusionTablesSqlParser.K_TO, 0); }
	public K_IN(): TerminalNode | undefined { return this.tryGetToken(FusionTablesSqlParser.K_IN, 0); }
	public LPAR(): TerminalNode | undefined { return this.tryGetToken(FusionTablesSqlParser.LPAR, 0); }
	public RPAR(): TerminalNode | undefined { return this.tryGetToken(FusionTablesSqlParser.RPAR, 0); }
	public K_BETWEEN(): TerminalNode | undefined { return this.tryGetToken(FusionTablesSqlParser.K_BETWEEN, 0); }
	public K_AND(): TerminalNode | undefined { return this.tryGetToken(FusionTablesSqlParser.K_AND, 0); }
	public K_ST_INTERSECTS(): TerminalNode | undefined { return this.tryGetToken(FusionTablesSqlParser.K_ST_INTERSECTS, 0); }
	public qualified_column_name(): Qualified_column_nameContext | undefined {
		return this.tryGetRuleContext(0, Qualified_column_nameContext);
	}
	public geometry(): GeometryContext | undefined {
		return this.tryGetRuleContext(0, GeometryContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FusionTablesSqlParser.RULE_expr; }
	// @Override
	public enterRule(listener: FusionTablesSqlListener): void {
		if (listener.enterExpr) {
			listener.enterExpr(this);
		}
	}
	// @Override
	public exitRule(listener: FusionTablesSqlListener): void {
		if (listener.exitExpr) {
			listener.exitExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FusionTablesSqlVisitor<Result>): Result {
		if (visitor.visitExpr) {
			return visitor.visitExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Column_name_beginning_exprContext extends ParserRuleContext {
	public qualified_column_name(): Qualified_column_nameContext {
		return this.getRuleContext(0, Qualified_column_nameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FusionTablesSqlParser.RULE_column_name_beginning_expr; }
	// @Override
	public enterRule(listener: FusionTablesSqlListener): void {
		if (listener.enterColumn_name_beginning_expr) {
			listener.enterColumn_name_beginning_expr(this);
		}
	}
	// @Override
	public exitRule(listener: FusionTablesSqlListener): void {
		if (listener.exitColumn_name_beginning_expr) {
			listener.exitColumn_name_beginning_expr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FusionTablesSqlVisitor<Result>): Result {
		if (visitor.visitColumn_name_beginning_expr) {
			return visitor.visitColumn_name_beginning_expr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Column_name_in_dmlContext extends ParserRuleContext {
	public column_name(): Column_nameContext {
		return this.getRuleContext(0, Column_nameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FusionTablesSqlParser.RULE_column_name_in_dml; }
	// @Override
	public enterRule(listener: FusionTablesSqlListener): void {
		if (listener.enterColumn_name_in_dml) {
			listener.enterColumn_name_in_dml(this);
		}
	}
	// @Override
	public exitRule(listener: FusionTablesSqlListener): void {
		if (listener.exitColumn_name_in_dml) {
			listener.exitColumn_name_in_dml(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FusionTablesSqlVisitor<Result>): Result {
		if (visitor.visitColumn_name_in_dml) {
			return visitor.visitColumn_name_in_dml(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class And_or_orContext extends ParserRuleContext {
	public K_AND(): TerminalNode | undefined { return this.tryGetToken(FusionTablesSqlParser.K_AND, 0); }
	public K_OR(): TerminalNode | undefined { return this.tryGetToken(FusionTablesSqlParser.K_OR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FusionTablesSqlParser.RULE_and_or_or; }
	// @Override
	public enterRule(listener: FusionTablesSqlListener): void {
		if (listener.enterAnd_or_or) {
			listener.enterAnd_or_or(this);
		}
	}
	// @Override
	public exitRule(listener: FusionTablesSqlListener): void {
		if (listener.exitAnd_or_or) {
			listener.exitAnd_or_or(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FusionTablesSqlVisitor<Result>): Result {
		if (visitor.visitAnd_or_or) {
			return visitor.visitAnd_or_or(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GeometryContext extends ParserRuleContext {
	public circle(): CircleContext | undefined {
		return this.tryGetRuleContext(0, CircleContext);
	}
	public rectangle(): RectangleContext | undefined {
		return this.tryGetRuleContext(0, RectangleContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FusionTablesSqlParser.RULE_geometry; }
	// @Override
	public enterRule(listener: FusionTablesSqlListener): void {
		if (listener.enterGeometry) {
			listener.enterGeometry(this);
		}
	}
	// @Override
	public exitRule(listener: FusionTablesSqlListener): void {
		if (listener.exitGeometry) {
			listener.exitGeometry(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FusionTablesSqlVisitor<Result>): Result {
		if (visitor.visitGeometry) {
			return visitor.visitGeometry(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CircleContext extends ParserRuleContext {
	public K_CIRCLE(): TerminalNode { return this.getToken(FusionTablesSqlParser.K_CIRCLE, 0); }
	public LPAR(): TerminalNode { return this.getToken(FusionTablesSqlParser.LPAR, 0); }
	public coordinate(): CoordinateContext {
		return this.getRuleContext(0, CoordinateContext);
	}
	public numeric_literal(): Numeric_literalContext {
		return this.getRuleContext(0, Numeric_literalContext);
	}
	public RPAR(): TerminalNode { return this.getToken(FusionTablesSqlParser.RPAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FusionTablesSqlParser.RULE_circle; }
	// @Override
	public enterRule(listener: FusionTablesSqlListener): void {
		if (listener.enterCircle) {
			listener.enterCircle(this);
		}
	}
	// @Override
	public exitRule(listener: FusionTablesSqlListener): void {
		if (listener.exitCircle) {
			listener.exitCircle(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FusionTablesSqlVisitor<Result>): Result {
		if (visitor.visitCircle) {
			return visitor.visitCircle(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RectangleContext extends ParserRuleContext {
	public K_RECTANGLE(): TerminalNode { return this.getToken(FusionTablesSqlParser.K_RECTANGLE, 0); }
	public LPAR(): TerminalNode { return this.getToken(FusionTablesSqlParser.LPAR, 0); }
	public coordinate(): CoordinateContext[];
	public coordinate(i: number): CoordinateContext;
	public coordinate(i?: number): CoordinateContext | CoordinateContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CoordinateContext);
		} else {
			return this.getRuleContext(i, CoordinateContext);
		}
	}
	public RPAR(): TerminalNode { return this.getToken(FusionTablesSqlParser.RPAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FusionTablesSqlParser.RULE_rectangle; }
	// @Override
	public enterRule(listener: FusionTablesSqlListener): void {
		if (listener.enterRectangle) {
			listener.enterRectangle(this);
		}
	}
	// @Override
	public exitRule(listener: FusionTablesSqlListener): void {
		if (listener.exitRectangle) {
			listener.exitRectangle(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FusionTablesSqlVisitor<Result>): Result {
		if (visitor.visitRectangle) {
			return visitor.visitRectangle(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CoordinateContext extends ParserRuleContext {
	public K_LATLNG(): TerminalNode { return this.getToken(FusionTablesSqlParser.K_LATLNG, 0); }
	public LPAR(): TerminalNode { return this.getToken(FusionTablesSqlParser.LPAR, 0); }
	public numeric_literal(): Numeric_literalContext[];
	public numeric_literal(i: number): Numeric_literalContext;
	public numeric_literal(i?: number): Numeric_literalContext | Numeric_literalContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Numeric_literalContext);
		} else {
			return this.getRuleContext(i, Numeric_literalContext);
		}
	}
	public RPAR(): TerminalNode { return this.getToken(FusionTablesSqlParser.RPAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FusionTablesSqlParser.RULE_coordinate; }
	// @Override
	public enterRule(listener: FusionTablesSqlListener): void {
		if (listener.enterCoordinate) {
			listener.enterCoordinate(this);
		}
	}
	// @Override
	public exitRule(listener: FusionTablesSqlListener): void {
		if (listener.exitCoordinate) {
			listener.exitCoordinate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FusionTablesSqlVisitor<Result>): Result {
		if (visitor.visitCoordinate) {
			return visitor.visitCoordinate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class KeywordContext extends ParserRuleContext {
	public K_ALTER(): TerminalNode | undefined { return this.tryGetToken(FusionTablesSqlParser.K_ALTER, 0); }
	public K_AND(): TerminalNode | undefined { return this.tryGetToken(FusionTablesSqlParser.K_AND, 0); }
	public K_OR(): TerminalNode | undefined { return this.tryGetToken(FusionTablesSqlParser.K_OR, 0); }
	public K_AS(): TerminalNode | undefined { return this.tryGetToken(FusionTablesSqlParser.K_AS, 0); }
	public K_ASC(): TerminalNode | undefined { return this.tryGetToken(FusionTablesSqlParser.K_ASC, 0); }
	public K_AVERAGE(): TerminalNode | undefined { return this.tryGetToken(FusionTablesSqlParser.K_AVERAGE, 0); }
	public K_BY(): TerminalNode | undefined { return this.tryGetToken(FusionTablesSqlParser.K_BY, 0); }
	public K_BETWEEN(): TerminalNode | undefined { return this.tryGetToken(FusionTablesSqlParser.K_BETWEEN, 0); }
	public K_CASE(): TerminalNode | undefined { return this.tryGetToken(FusionTablesSqlParser.K_CASE, 0); }
	public K_CIRCLE(): TerminalNode | undefined { return this.tryGetToken(FusionTablesSqlParser.K_CIRCLE, 0); }
	public K_COLUMN(): TerminalNode | undefined { return this.tryGetToken(FusionTablesSqlParser.K_COLUMN, 0); }
	public K_CONTAIN(): TerminalNode | undefined { return this.tryGetToken(FusionTablesSqlParser.K_CONTAIN, 0); }
	public K_CONTAINS(): TerminalNode | undefined { return this.tryGetToken(FusionTablesSqlParser.K_CONTAINS, 0); }
	public K_COUNT(): TerminalNode | undefined { return this.tryGetToken(FusionTablesSqlParser.K_COUNT, 0); }
	public K_CREATE(): TerminalNode | undefined { return this.tryGetToken(FusionTablesSqlParser.K_CREATE, 0); }
	public K_DELETE(): TerminalNode | undefined { return this.tryGetToken(FusionTablesSqlParser.K_DELETE, 0); }
	public K_DESC(): TerminalNode | undefined { return this.tryGetToken(FusionTablesSqlParser.K_DESC, 0); }
	public K_DOES(): TerminalNode | undefined { return this.tryGetToken(FusionTablesSqlParser.K_DOES, 0); }
	public K_DROP(): TerminalNode | undefined { return this.tryGetToken(FusionTablesSqlParser.K_DROP, 0); }
	public K_ENDS(): TerminalNode | undefined { return this.tryGetToken(FusionTablesSqlParser.K_ENDS, 0); }
	public K_EQUAL(): TerminalNode | undefined { return this.tryGetToken(FusionTablesSqlParser.K_EQUAL, 0); }
	public K_FROM(): TerminalNode | undefined { return this.tryGetToken(FusionTablesSqlParser.K_FROM, 0); }
	public K_GROUP(): TerminalNode | undefined { return this.tryGetToken(FusionTablesSqlParser.K_GROUP, 0); }
	public K_HAVING(): TerminalNode | undefined { return this.tryGetToken(FusionTablesSqlParser.K_HAVING, 0); }
	public K_IGNORING(): TerminalNode | undefined { return this.tryGetToken(FusionTablesSqlParser.K_IGNORING, 0); }
	public K_IN(): TerminalNode | undefined { return this.tryGetToken(FusionTablesSqlParser.K_IN, 0); }
	public K_INSERT(): TerminalNode | undefined { return this.tryGetToken(FusionTablesSqlParser.K_INSERT, 0); }
	public K_INTO(): TerminalNode | undefined { return this.tryGetToken(FusionTablesSqlParser.K_INTO, 0); }
	public K_JOIN(): TerminalNode | undefined { return this.tryGetToken(FusionTablesSqlParser.K_JOIN, 0); }
	public K_LATLNG(): TerminalNode | undefined { return this.tryGetToken(FusionTablesSqlParser.K_LATLNG, 0); }
	public K_LEFT(): TerminalNode | undefined { return this.tryGetToken(FusionTablesSqlParser.K_LEFT, 0); }
	public K_LIKE(): TerminalNode | undefined { return this.tryGetToken(FusionTablesSqlParser.K_LIKE, 0); }
	public K_LIMIT(): TerminalNode | undefined { return this.tryGetToken(FusionTablesSqlParser.K_LIMIT, 0); }
	public K_MATCHES(): TerminalNode | undefined { return this.tryGetToken(FusionTablesSqlParser.K_MATCHES, 0); }
	public K_MAXIMUM(): TerminalNode | undefined { return this.tryGetToken(FusionTablesSqlParser.K_MAXIMUM, 0); }
	public K_MINIMUM(): TerminalNode | undefined { return this.tryGetToken(FusionTablesSqlParser.K_MINIMUM, 0); }
	public K_NOT(): TerminalNode | undefined { return this.tryGetToken(FusionTablesSqlParser.K_NOT, 0); }
	public K_OF(): TerminalNode | undefined { return this.tryGetToken(FusionTablesSqlParser.K_OF, 0); }
	public K_OFFSET(): TerminalNode | undefined { return this.tryGetToken(FusionTablesSqlParser.K_OFFSET, 0); }
	public K_ON(): TerminalNode | undefined { return this.tryGetToken(FusionTablesSqlParser.K_ON, 0); }
	public K_ORDER(): TerminalNode | undefined { return this.tryGetToken(FusionTablesSqlParser.K_ORDER, 0); }
	public K_OUTER(): TerminalNode | undefined { return this.tryGetToken(FusionTablesSqlParser.K_OUTER, 0); }
	public K_RECTANGLE(): TerminalNode | undefined { return this.tryGetToken(FusionTablesSqlParser.K_RECTANGLE, 0); }
	public K_RENAME(): TerminalNode | undefined { return this.tryGetToken(FusionTablesSqlParser.K_RENAME, 0); }
	public K_SELECT(): TerminalNode | undefined { return this.tryGetToken(FusionTablesSqlParser.K_SELECT, 0); }
	public K_SET(): TerminalNode | undefined { return this.tryGetToken(FusionTablesSqlParser.K_SET, 0); }
	public K_STARTS(): TerminalNode | undefined { return this.tryGetToken(FusionTablesSqlParser.K_STARTS, 0); }
	public K_ST_DISTANCE(): TerminalNode | undefined { return this.tryGetToken(FusionTablesSqlParser.K_ST_DISTANCE, 0); }
	public K_ST_INTERSECTS(): TerminalNode | undefined { return this.tryGetToken(FusionTablesSqlParser.K_ST_INTERSECTS, 0); }
	public K_SUM(): TerminalNode | undefined { return this.tryGetToken(FusionTablesSqlParser.K_SUM, 0); }
	public K_TABLE(): TerminalNode | undefined { return this.tryGetToken(FusionTablesSqlParser.K_TABLE, 0); }
	public K_TO(): TerminalNode | undefined { return this.tryGetToken(FusionTablesSqlParser.K_TO, 0); }
	public K_UPDATE(): TerminalNode | undefined { return this.tryGetToken(FusionTablesSqlParser.K_UPDATE, 0); }
	public K_VALUES(): TerminalNode | undefined { return this.tryGetToken(FusionTablesSqlParser.K_VALUES, 0); }
	public K_VIEW(): TerminalNode | undefined { return this.tryGetToken(FusionTablesSqlParser.K_VIEW, 0); }
	public K_WHERE(): TerminalNode | undefined { return this.tryGetToken(FusionTablesSqlParser.K_WHERE, 0); }
	public K_WITH(): TerminalNode | undefined { return this.tryGetToken(FusionTablesSqlParser.K_WITH, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FusionTablesSqlParser.RULE_keyword; }
	// @Override
	public enterRule(listener: FusionTablesSqlListener): void {
		if (listener.enterKeyword) {
			listener.enterKeyword(this);
		}
	}
	// @Override
	public exitRule(listener: FusionTablesSqlListener): void {
		if (listener.exitKeyword) {
			listener.exitKeyword(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FusionTablesSqlVisitor<Result>): Result {
		if (visitor.visitKeyword) {
			return visitor.visitKeyword(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OperatorContext extends ParserRuleContext {
	public LT(): TerminalNode | undefined { return this.tryGetToken(FusionTablesSqlParser.LT, 0); }
	public LT_EQ(): TerminalNode | undefined { return this.tryGetToken(FusionTablesSqlParser.LT_EQ, 0); }
	public GT(): TerminalNode | undefined { return this.tryGetToken(FusionTablesSqlParser.GT, 0); }
	public GT_EQ(): TerminalNode | undefined { return this.tryGetToken(FusionTablesSqlParser.GT_EQ, 0); }
	public EQ(): TerminalNode | undefined { return this.tryGetToken(FusionTablesSqlParser.EQ, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FusionTablesSqlParser.RULE_operator; }
	// @Override
	public enterRule(listener: FusionTablesSqlListener): void {
		if (listener.enterOperator) {
			listener.enterOperator(this);
		}
	}
	// @Override
	public exitRule(listener: FusionTablesSqlListener): void {
		if (listener.exitOperator) {
			listener.exitOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FusionTablesSqlVisitor<Result>): Result {
		if (visitor.visitOperator) {
			return visitor.visitOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	public numeric_literal(): Numeric_literalContext | undefined {
		return this.tryGetRuleContext(0, Numeric_literalContext);
	}
	public string_literal(): String_literalContext | undefined {
		return this.tryGetRuleContext(0, String_literalContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FusionTablesSqlParser.RULE_literal; }
	// @Override
	public enterRule(listener: FusionTablesSqlListener): void {
		if (listener.enterLiteral) {
			listener.enterLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: FusionTablesSqlListener): void {
		if (listener.exitLiteral) {
			listener.exitLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FusionTablesSqlVisitor<Result>): Result {
		if (visitor.visitLiteral) {
			return visitor.visitLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Error_messageContext extends ParserRuleContext {
	public string_literal(): String_literalContext {
		return this.getRuleContext(0, String_literalContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FusionTablesSqlParser.RULE_error_message; }
	// @Override
	public enterRule(listener: FusionTablesSqlListener): void {
		if (listener.enterError_message) {
			listener.enterError_message(this);
		}
	}
	// @Override
	public exitRule(listener: FusionTablesSqlListener): void {
		if (listener.exitError_message) {
			listener.exitError_message(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FusionTablesSqlVisitor<Result>): Result {
		if (visitor.visitError_message) {
			return visitor.visitError_message(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierContext extends ParserRuleContext {
	public string_literal(): String_literalContext {
		return this.getRuleContext(0, String_literalContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FusionTablesSqlParser.RULE_identifier; }
	// @Override
	public enterRule(listener: FusionTablesSqlListener): void {
		if (listener.enterIdentifier) {
			listener.enterIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: FusionTablesSqlListener): void {
		if (listener.exitIdentifier) {
			listener.exitIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FusionTablesSqlVisitor<Result>): Result {
		if (visitor.visitIdentifier) {
			return visitor.visitIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Column_aliasContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FusionTablesSqlParser.RULE_column_alias; }
	// @Override
	public enterRule(listener: FusionTablesSqlListener): void {
		if (listener.enterColumn_alias) {
			listener.enterColumn_alias(this);
		}
	}
	// @Override
	public exitRule(listener: FusionTablesSqlListener): void {
		if (listener.exitColumn_alias) {
			listener.exitColumn_alias(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FusionTablesSqlVisitor<Result>): Result {
		if (visitor.visitColumn_alias) {
			return visitor.visitColumn_alias(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Table_nameContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FusionTablesSqlParser.RULE_table_name; }
	// @Override
	public enterRule(listener: FusionTablesSqlListener): void {
		if (listener.enterTable_name) {
			listener.enterTable_name(this);
		}
	}
	// @Override
	public exitRule(listener: FusionTablesSqlListener): void {
		if (listener.exitTable_name) {
			listener.exitTable_name(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FusionTablesSqlVisitor<Result>): Result {
		if (visitor.visitTable_name) {
			return visitor.visitTable_name(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Column_nameContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FusionTablesSqlParser.RULE_column_name; }
	// @Override
	public enterRule(listener: FusionTablesSqlListener): void {
		if (listener.enterColumn_name) {
			listener.enterColumn_name(this);
		}
	}
	// @Override
	public exitRule(listener: FusionTablesSqlListener): void {
		if (listener.exitColumn_name) {
			listener.exitColumn_name(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FusionTablesSqlVisitor<Result>): Result {
		if (visitor.visitColumn_name) {
			return visitor.visitColumn_name(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class New_table_nameContext extends ParserRuleContext {
	public table_name(): Table_nameContext {
		return this.getRuleContext(0, Table_nameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FusionTablesSqlParser.RULE_new_table_name; }
	// @Override
	public enterRule(listener: FusionTablesSqlListener): void {
		if (listener.enterNew_table_name) {
			listener.enterNew_table_name(this);
		}
	}
	// @Override
	public exitRule(listener: FusionTablesSqlListener): void {
		if (listener.exitNew_table_name) {
			listener.exitNew_table_name(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FusionTablesSqlVisitor<Result>): Result {
		if (visitor.visitNew_table_name) {
			return visitor.visitNew_table_name(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class View_nameContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FusionTablesSqlParser.RULE_view_name; }
	// @Override
	public enterRule(listener: FusionTablesSqlListener): void {
		if (listener.enterView_name) {
			listener.enterView_name(this);
		}
	}
	// @Override
	public exitRule(listener: FusionTablesSqlListener): void {
		if (listener.exitView_name) {
			listener.exitView_name(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FusionTablesSqlVisitor<Result>): Result {
		if (visitor.visitView_name) {
			return visitor.visitView_name(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Table_aliasContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FusionTablesSqlParser.RULE_table_alias; }
	// @Override
	public enterRule(listener: FusionTablesSqlListener): void {
		if (listener.enterTable_alias) {
			listener.enterTable_alias(this);
		}
	}
	// @Override
	public exitRule(listener: FusionTablesSqlListener): void {
		if (listener.exitTable_alias) {
			listener.exitTable_alias(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FusionTablesSqlVisitor<Result>): Result {
		if (visitor.visitTable_alias) {
			return visitor.visitTable_alias(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Numeric_literalContext extends ParserRuleContext {
	public NUMERIC_LITERAL(): TerminalNode { return this.getToken(FusionTablesSqlParser.NUMERIC_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FusionTablesSqlParser.RULE_numeric_literal; }
	// @Override
	public enterRule(listener: FusionTablesSqlListener): void {
		if (listener.enterNumeric_literal) {
			listener.enterNumeric_literal(this);
		}
	}
	// @Override
	public exitRule(listener: FusionTablesSqlListener): void {
		if (listener.exitNumeric_literal) {
			listener.exitNumeric_literal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FusionTablesSqlVisitor<Result>): Result {
		if (visitor.visitNumeric_literal) {
			return visitor.visitNumeric_literal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class String_literalContext extends ParserRuleContext {
	public STRING_LITERAL(): TerminalNode { return this.getToken(FusionTablesSqlParser.STRING_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FusionTablesSqlParser.RULE_string_literal; }
	// @Override
	public enterRule(listener: FusionTablesSqlListener): void {
		if (listener.enterString_literal) {
			listener.enterString_literal(this);
		}
	}
	// @Override
	public exitRule(listener: FusionTablesSqlListener): void {
		if (listener.exitString_literal) {
			listener.exitString_literal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FusionTablesSqlVisitor<Result>): Result {
		if (visitor.visitString_literal) {
			return visitor.visitString_literal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


