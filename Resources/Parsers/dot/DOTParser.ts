// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/dot/DOT.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { DOTListener } from "./DOTListener";
import { DOTVisitor } from "./DOTVisitor";


export class DOTParser extends Parser {
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
	public static readonly STRICT = 11;
	public static readonly GRAPH = 12;
	public static readonly DIGRAPH = 13;
	public static readonly NODE = 14;
	public static readonly EDGE = 15;
	public static readonly SUBGRAPH = 16;
	public static readonly NUMBER = 17;
	public static readonly STRING = 18;
	public static readonly ID = 19;
	public static readonly HTML_STRING = 20;
	public static readonly COMMENT = 21;
	public static readonly LINE_COMMENT = 22;
	public static readonly PREPROC = 23;
	public static readonly WS = 24;
	public static readonly RULE_graph = 0;
	public static readonly RULE_stmt_list = 1;
	public static readonly RULE_stmt = 2;
	public static readonly RULE_attr_stmt = 3;
	public static readonly RULE_attr_list = 4;
	public static readonly RULE_a_list = 5;
	public static readonly RULE_edge_stmt = 6;
	public static readonly RULE_edgeRHS = 7;
	public static readonly RULE_edgeop = 8;
	public static readonly RULE_node_stmt = 9;
	public static readonly RULE_node_id = 10;
	public static readonly RULE_port = 11;
	public static readonly RULE_subgraph = 12;
	public static readonly RULE_id = 13;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"graph", "stmt_list", "stmt", "attr_stmt", "attr_list", "a_list", "edge_stmt", 
		"edgeRHS", "edgeop", "node_stmt", "node_id", "port", "subgraph", "id",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'{'", "'}'", "';'", "'='", "'['", "']'", "','", "'->'", "'--'", 
		"':'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, "STRICT", "GRAPH", "DIGRAPH", 
		"NODE", "EDGE", "SUBGRAPH", "NUMBER", "STRING", "ID", "HTML_STRING", "COMMENT", 
		"LINE_COMMENT", "PREPROC", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(DOTParser._LITERAL_NAMES, DOTParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return DOTParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "DOT.g4"; }

	// @Override
	public get ruleNames(): string[] { return DOTParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return DOTParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(DOTParser._ATN, this);
	}
	// @RuleVersion(0)
	public graph(): GraphContext {
		let _localctx: GraphContext = new GraphContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, DOTParser.RULE_graph);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 29;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DOTParser.STRICT) {
				{
				this.state = 28;
				this.match(DOTParser.STRICT);
				}
			}

			this.state = 31;
			_la = this._input.LA(1);
			if (!(_la === DOTParser.GRAPH || _la === DOTParser.DIGRAPH)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 33;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << DOTParser.NUMBER) | (1 << DOTParser.STRING) | (1 << DOTParser.ID) | (1 << DOTParser.HTML_STRING))) !== 0)) {
				{
				this.state = 32;
				this.id();
				}
			}

			this.state = 35;
			this.match(DOTParser.T__0);
			this.state = 36;
			this.stmt_list();
			this.state = 37;
			this.match(DOTParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stmt_list(): Stmt_listContext {
		let _localctx: Stmt_listContext = new Stmt_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, DOTParser.RULE_stmt_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 45;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << DOTParser.T__0) | (1 << DOTParser.GRAPH) | (1 << DOTParser.NODE) | (1 << DOTParser.EDGE) | (1 << DOTParser.SUBGRAPH) | (1 << DOTParser.NUMBER) | (1 << DOTParser.STRING) | (1 << DOTParser.ID) | (1 << DOTParser.HTML_STRING))) !== 0)) {
				{
				{
				this.state = 39;
				this.stmt();
				this.state = 41;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === DOTParser.T__2) {
					{
					this.state = 40;
					this.match(DOTParser.T__2);
					}
				}

				}
				}
				this.state = 47;
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
	public stmt(): StmtContext {
		let _localctx: StmtContext = new StmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, DOTParser.RULE_stmt);
		try {
			this.state = 56;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 48;
				this.node_stmt();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 49;
				this.edge_stmt();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 50;
				this.attr_stmt();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 51;
				this.id();
				this.state = 52;
				this.match(DOTParser.T__3);
				this.state = 53;
				this.id();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 55;
				this.subgraph();
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
	public attr_stmt(): Attr_stmtContext {
		let _localctx: Attr_stmtContext = new Attr_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, DOTParser.RULE_attr_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 58;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << DOTParser.GRAPH) | (1 << DOTParser.NODE) | (1 << DOTParser.EDGE))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 59;
			this.attr_list();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public attr_list(): Attr_listContext {
		let _localctx: Attr_listContext = new Attr_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, DOTParser.RULE_attr_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 66;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 61;
				this.match(DOTParser.T__4);
				this.state = 63;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << DOTParser.NUMBER) | (1 << DOTParser.STRING) | (1 << DOTParser.ID) | (1 << DOTParser.HTML_STRING))) !== 0)) {
					{
					this.state = 62;
					this.a_list();
					}
				}

				this.state = 65;
				this.match(DOTParser.T__5);
				}
				}
				this.state = 68;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === DOTParser.T__4);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public a_list(): A_listContext {
		let _localctx: A_listContext = new A_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, DOTParser.RULE_a_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 78;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 70;
				this.id();
				this.state = 73;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === DOTParser.T__3) {
					{
					this.state = 71;
					this.match(DOTParser.T__3);
					this.state = 72;
					this.id();
					}
				}

				this.state = 76;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === DOTParser.T__6) {
					{
					this.state = 75;
					this.match(DOTParser.T__6);
					}
				}

				}
				}
				this.state = 80;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << DOTParser.NUMBER) | (1 << DOTParser.STRING) | (1 << DOTParser.ID) | (1 << DOTParser.HTML_STRING))) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public edge_stmt(): Edge_stmtContext {
		let _localctx: Edge_stmtContext = new Edge_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, DOTParser.RULE_edge_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 84;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case DOTParser.NUMBER:
			case DOTParser.STRING:
			case DOTParser.ID:
			case DOTParser.HTML_STRING:
				{
				this.state = 82;
				this.node_id();
				}
				break;
			case DOTParser.T__0:
			case DOTParser.SUBGRAPH:
				{
				this.state = 83;
				this.subgraph();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 86;
			this.edgeRHS();
			this.state = 88;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DOTParser.T__4) {
				{
				this.state = 87;
				this.attr_list();
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
	public edgeRHS(): EdgeRHSContext {
		let _localctx: EdgeRHSContext = new EdgeRHSContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, DOTParser.RULE_edgeRHS);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 95;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 90;
				this.edgeop();
				this.state = 93;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case DOTParser.NUMBER:
				case DOTParser.STRING:
				case DOTParser.ID:
				case DOTParser.HTML_STRING:
					{
					this.state = 91;
					this.node_id();
					}
					break;
				case DOTParser.T__0:
				case DOTParser.SUBGRAPH:
					{
					this.state = 92;
					this.subgraph();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				}
				this.state = 97;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === DOTParser.T__7 || _la === DOTParser.T__8);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public edgeop(): EdgeopContext {
		let _localctx: EdgeopContext = new EdgeopContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, DOTParser.RULE_edgeop);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 99;
			_la = this._input.LA(1);
			if (!(_la === DOTParser.T__7 || _la === DOTParser.T__8)) {
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
	public node_stmt(): Node_stmtContext {
		let _localctx: Node_stmtContext = new Node_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, DOTParser.RULE_node_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 101;
			this.node_id();
			this.state = 103;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DOTParser.T__4) {
				{
				this.state = 102;
				this.attr_list();
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
	public node_id(): Node_idContext {
		let _localctx: Node_idContext = new Node_idContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, DOTParser.RULE_node_id);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 105;
			this.id();
			this.state = 107;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DOTParser.T__9) {
				{
				this.state = 106;
				this.port();
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
	public port(): PortContext {
		let _localctx: PortContext = new PortContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, DOTParser.RULE_port);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 109;
			this.match(DOTParser.T__9);
			this.state = 110;
			this.id();
			this.state = 113;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DOTParser.T__9) {
				{
				this.state = 111;
				this.match(DOTParser.T__9);
				this.state = 112;
				this.id();
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
	public subgraph(): SubgraphContext {
		let _localctx: SubgraphContext = new SubgraphContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, DOTParser.RULE_subgraph);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 119;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DOTParser.SUBGRAPH) {
				{
				this.state = 115;
				this.match(DOTParser.SUBGRAPH);
				this.state = 117;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << DOTParser.NUMBER) | (1 << DOTParser.STRING) | (1 << DOTParser.ID) | (1 << DOTParser.HTML_STRING))) !== 0)) {
					{
					this.state = 116;
					this.id();
					}
				}

				}
			}

			this.state = 121;
			this.match(DOTParser.T__0);
			this.state = 122;
			this.stmt_list();
			this.state = 123;
			this.match(DOTParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public id(): IdContext {
		let _localctx: IdContext = new IdContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, DOTParser.RULE_id);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 125;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << DOTParser.NUMBER) | (1 << DOTParser.STRING) | (1 << DOTParser.ID) | (1 << DOTParser.HTML_STRING))) !== 0))) {
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

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x1A\x82\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x03\x02\x05\x02 \n\x02\x03\x02\x03\x02\x05\x02" +
		"$\n\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x05\x03,\n\x03" +
		"\x07\x03.\n\x03\f\x03\x0E\x031\v\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x05\x04;\n\x04\x03\x05\x03\x05\x03\x05\x03" +
		"\x06\x03\x06\x05\x06B\n\x06\x03\x06\x06\x06E\n\x06\r\x06\x0E\x06F\x03" +
		"\x07\x03\x07\x03\x07\x05\x07L\n\x07\x03\x07\x05\x07O\n\x07\x06\x07Q\n" +
		"\x07\r\x07\x0E\x07R\x03\b\x03\b\x05\bW\n\b\x03\b\x03\b\x05\b[\n\b\x03" +
		"\t\x03\t\x03\t\x05\t`\n\t\x06\tb\n\t\r\t\x0E\tc\x03\n\x03\n\x03\v\x03" +
		"\v\x05\vj\n\v\x03\f\x03\f\x05\fn\n\f\x03\r\x03\r\x03\r\x03\r\x05\rt\n" +
		"\r\x03\x0E\x03\x0E\x05\x0Ex\n\x0E\x05\x0Ez\n\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x02\x02\x02\x10\x02\x02\x04\x02\x06\x02" +
		"\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A" +
		"\x02\x1C\x02\x02\x06\x03\x02\x0E\x0F\x04\x02\x0E\x0E\x10\x11\x03\x02\n" +
		"\v\x03\x02\x13\x16\x02\x89\x02\x1F\x03\x02\x02\x02\x04/\x03\x02\x02\x02" +
		"\x06:\x03\x02\x02\x02\b<\x03\x02\x02\x02\nD\x03\x02\x02\x02\fP\x03\x02" +
		"\x02\x02\x0EV\x03\x02\x02\x02\x10a\x03\x02\x02\x02\x12e\x03\x02\x02\x02" +
		"\x14g\x03\x02\x02\x02\x16k\x03\x02\x02\x02\x18o\x03\x02\x02\x02\x1Ay\x03" +
		"\x02\x02\x02\x1C\x7F\x03\x02\x02\x02\x1E \x07\r\x02\x02\x1F\x1E\x03\x02" +
		"\x02\x02\x1F \x03\x02\x02\x02 !\x03\x02\x02\x02!#\t\x02\x02\x02\"$\x05" +
		"\x1C\x0F\x02#\"\x03\x02\x02\x02#$\x03\x02\x02\x02$%\x03\x02\x02\x02%&" +
		"\x07\x03\x02\x02&\'\x05\x04\x03\x02\'(\x07\x04\x02\x02(\x03\x03\x02\x02" +
		"\x02)+\x05\x06\x04\x02*,\x07\x05\x02\x02+*\x03\x02\x02\x02+,\x03\x02\x02" +
		"\x02,.\x03\x02\x02\x02-)\x03\x02\x02\x02.1\x03\x02\x02\x02/-\x03\x02\x02" +
		"\x02/0\x03\x02\x02\x020\x05\x03\x02\x02\x021/\x03\x02\x02\x022;\x05\x14" +
		"\v\x023;\x05\x0E\b\x024;\x05\b\x05\x0256\x05\x1C\x0F\x0267\x07\x06\x02" +
		"\x0278\x05\x1C\x0F\x028;\x03\x02\x02\x029;\x05\x1A\x0E\x02:2\x03\x02\x02" +
		"\x02:3\x03\x02\x02\x02:4\x03\x02\x02\x02:5\x03\x02\x02\x02:9\x03\x02\x02" +
		"\x02;\x07\x03\x02\x02\x02<=\t\x03\x02\x02=>\x05\n\x06\x02>\t\x03\x02\x02" +
		"\x02?A\x07\x07\x02\x02@B\x05\f\x07\x02A@\x03\x02\x02\x02AB\x03\x02\x02" +
		"\x02BC\x03\x02\x02\x02CE\x07\b\x02\x02D?\x03\x02\x02\x02EF\x03\x02\x02" +
		"\x02FD\x03\x02\x02\x02FG\x03\x02\x02\x02G\v\x03\x02\x02\x02HK\x05\x1C" +
		"\x0F\x02IJ\x07\x06\x02\x02JL\x05\x1C\x0F\x02KI\x03\x02\x02\x02KL\x03\x02" +
		"\x02\x02LN\x03\x02\x02\x02MO\x07\t\x02\x02NM\x03\x02\x02\x02NO\x03\x02" +
		"\x02\x02OQ\x03\x02\x02\x02PH\x03\x02\x02\x02QR\x03\x02\x02\x02RP\x03\x02" +
		"\x02\x02RS\x03\x02\x02\x02S\r\x03\x02\x02\x02TW\x05\x16\f\x02UW\x05\x1A" +
		"\x0E\x02VT\x03\x02\x02\x02VU\x03\x02\x02\x02WX\x03\x02\x02\x02XZ\x05\x10" +
		"\t\x02Y[\x05\n\x06\x02ZY\x03\x02\x02\x02Z[\x03\x02\x02\x02[\x0F\x03\x02" +
		"\x02\x02\\_\x05\x12\n\x02]`\x05\x16\f\x02^`\x05\x1A\x0E\x02_]\x03\x02" +
		"\x02\x02_^\x03\x02\x02\x02`b\x03\x02\x02\x02a\\\x03\x02\x02\x02bc\x03" +
		"\x02\x02\x02ca\x03\x02\x02\x02cd\x03\x02\x02\x02d\x11\x03\x02\x02\x02" +
		"ef\t\x04\x02\x02f\x13\x03\x02\x02\x02gi\x05\x16\f\x02hj\x05\n\x06\x02" +
		"ih\x03\x02\x02\x02ij\x03\x02\x02\x02j\x15\x03\x02\x02\x02km\x05\x1C\x0F" +
		"\x02ln\x05\x18\r\x02ml\x03\x02\x02\x02mn\x03\x02\x02\x02n\x17\x03\x02" +
		"\x02\x02op\x07\f\x02\x02ps\x05\x1C\x0F\x02qr\x07\f\x02\x02rt\x05\x1C\x0F" +
		"\x02sq\x03\x02\x02\x02st\x03\x02\x02\x02t\x19\x03\x02\x02\x02uw\x07\x12" +
		"\x02\x02vx\x05\x1C\x0F\x02wv\x03\x02\x02\x02wx\x03\x02\x02\x02xz\x03\x02" +
		"\x02\x02yu\x03\x02\x02\x02yz\x03\x02\x02\x02z{\x03\x02\x02\x02{|\x07\x03" +
		"\x02\x02|}\x05\x04\x03\x02}~\x07\x04\x02\x02~\x1B\x03\x02\x02\x02\x7F" +
		"\x80\t\x05\x02\x02\x80\x1D\x03\x02\x02\x02\x15\x1F#+/:AFKNRVZ_cimswy";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!DOTParser.__ATN) {
			DOTParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(DOTParser._serializedATN));
		}

		return DOTParser.__ATN;
	}

}

export class GraphContext extends ParserRuleContext {
	public stmt_list(): Stmt_listContext {
		return this.getRuleContext(0, Stmt_listContext);
	}
	public GRAPH(): TerminalNode | undefined { return this.tryGetToken(DOTParser.GRAPH, 0); }
	public DIGRAPH(): TerminalNode | undefined { return this.tryGetToken(DOTParser.DIGRAPH, 0); }
	public STRICT(): TerminalNode | undefined { return this.tryGetToken(DOTParser.STRICT, 0); }
	public id(): IdContext | undefined {
		return this.tryGetRuleContext(0, IdContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DOTParser.RULE_graph; }
	// @Override
	public enterRule(listener: DOTListener): void {
		if (listener.enterGraph) {
			listener.enterGraph(this);
		}
	}
	// @Override
	public exitRule(listener: DOTListener): void {
		if (listener.exitGraph) {
			listener.exitGraph(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DOTVisitor<Result>): Result {
		if (visitor.visitGraph) {
			return visitor.visitGraph(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Stmt_listContext extends ParserRuleContext {
	public stmt(): StmtContext[];
	public stmt(i: number): StmtContext;
	public stmt(i?: number): StmtContext | StmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StmtContext);
		} else {
			return this.getRuleContext(i, StmtContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DOTParser.RULE_stmt_list; }
	// @Override
	public enterRule(listener: DOTListener): void {
		if (listener.enterStmt_list) {
			listener.enterStmt_list(this);
		}
	}
	// @Override
	public exitRule(listener: DOTListener): void {
		if (listener.exitStmt_list) {
			listener.exitStmt_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DOTVisitor<Result>): Result {
		if (visitor.visitStmt_list) {
			return visitor.visitStmt_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StmtContext extends ParserRuleContext {
	public node_stmt(): Node_stmtContext | undefined {
		return this.tryGetRuleContext(0, Node_stmtContext);
	}
	public edge_stmt(): Edge_stmtContext | undefined {
		return this.tryGetRuleContext(0, Edge_stmtContext);
	}
	public attr_stmt(): Attr_stmtContext | undefined {
		return this.tryGetRuleContext(0, Attr_stmtContext);
	}
	public id(): IdContext[];
	public id(i: number): IdContext;
	public id(i?: number): IdContext | IdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdContext);
		} else {
			return this.getRuleContext(i, IdContext);
		}
	}
	public subgraph(): SubgraphContext | undefined {
		return this.tryGetRuleContext(0, SubgraphContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DOTParser.RULE_stmt; }
	// @Override
	public enterRule(listener: DOTListener): void {
		if (listener.enterStmt) {
			listener.enterStmt(this);
		}
	}
	// @Override
	public exitRule(listener: DOTListener): void {
		if (listener.exitStmt) {
			listener.exitStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DOTVisitor<Result>): Result {
		if (visitor.visitStmt) {
			return visitor.visitStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Attr_stmtContext extends ParserRuleContext {
	public attr_list(): Attr_listContext {
		return this.getRuleContext(0, Attr_listContext);
	}
	public GRAPH(): TerminalNode | undefined { return this.tryGetToken(DOTParser.GRAPH, 0); }
	public NODE(): TerminalNode | undefined { return this.tryGetToken(DOTParser.NODE, 0); }
	public EDGE(): TerminalNode | undefined { return this.tryGetToken(DOTParser.EDGE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DOTParser.RULE_attr_stmt; }
	// @Override
	public enterRule(listener: DOTListener): void {
		if (listener.enterAttr_stmt) {
			listener.enterAttr_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: DOTListener): void {
		if (listener.exitAttr_stmt) {
			listener.exitAttr_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DOTVisitor<Result>): Result {
		if (visitor.visitAttr_stmt) {
			return visitor.visitAttr_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Attr_listContext extends ParserRuleContext {
	public a_list(): A_listContext[];
	public a_list(i: number): A_listContext;
	public a_list(i?: number): A_listContext | A_listContext[] {
		if (i === undefined) {
			return this.getRuleContexts(A_listContext);
		} else {
			return this.getRuleContext(i, A_listContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DOTParser.RULE_attr_list; }
	// @Override
	public enterRule(listener: DOTListener): void {
		if (listener.enterAttr_list) {
			listener.enterAttr_list(this);
		}
	}
	// @Override
	public exitRule(listener: DOTListener): void {
		if (listener.exitAttr_list) {
			listener.exitAttr_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DOTVisitor<Result>): Result {
		if (visitor.visitAttr_list) {
			return visitor.visitAttr_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class A_listContext extends ParserRuleContext {
	public id(): IdContext[];
	public id(i: number): IdContext;
	public id(i?: number): IdContext | IdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdContext);
		} else {
			return this.getRuleContext(i, IdContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DOTParser.RULE_a_list; }
	// @Override
	public enterRule(listener: DOTListener): void {
		if (listener.enterA_list) {
			listener.enterA_list(this);
		}
	}
	// @Override
	public exitRule(listener: DOTListener): void {
		if (listener.exitA_list) {
			listener.exitA_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DOTVisitor<Result>): Result {
		if (visitor.visitA_list) {
			return visitor.visitA_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Edge_stmtContext extends ParserRuleContext {
	public edgeRHS(): EdgeRHSContext {
		return this.getRuleContext(0, EdgeRHSContext);
	}
	public node_id(): Node_idContext | undefined {
		return this.tryGetRuleContext(0, Node_idContext);
	}
	public subgraph(): SubgraphContext | undefined {
		return this.tryGetRuleContext(0, SubgraphContext);
	}
	public attr_list(): Attr_listContext | undefined {
		return this.tryGetRuleContext(0, Attr_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DOTParser.RULE_edge_stmt; }
	// @Override
	public enterRule(listener: DOTListener): void {
		if (listener.enterEdge_stmt) {
			listener.enterEdge_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: DOTListener): void {
		if (listener.exitEdge_stmt) {
			listener.exitEdge_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DOTVisitor<Result>): Result {
		if (visitor.visitEdge_stmt) {
			return visitor.visitEdge_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EdgeRHSContext extends ParserRuleContext {
	public edgeop(): EdgeopContext[];
	public edgeop(i: number): EdgeopContext;
	public edgeop(i?: number): EdgeopContext | EdgeopContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EdgeopContext);
		} else {
			return this.getRuleContext(i, EdgeopContext);
		}
	}
	public node_id(): Node_idContext[];
	public node_id(i: number): Node_idContext;
	public node_id(i?: number): Node_idContext | Node_idContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Node_idContext);
		} else {
			return this.getRuleContext(i, Node_idContext);
		}
	}
	public subgraph(): SubgraphContext[];
	public subgraph(i: number): SubgraphContext;
	public subgraph(i?: number): SubgraphContext | SubgraphContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SubgraphContext);
		} else {
			return this.getRuleContext(i, SubgraphContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DOTParser.RULE_edgeRHS; }
	// @Override
	public enterRule(listener: DOTListener): void {
		if (listener.enterEdgeRHS) {
			listener.enterEdgeRHS(this);
		}
	}
	// @Override
	public exitRule(listener: DOTListener): void {
		if (listener.exitEdgeRHS) {
			listener.exitEdgeRHS(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DOTVisitor<Result>): Result {
		if (visitor.visitEdgeRHS) {
			return visitor.visitEdgeRHS(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EdgeopContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DOTParser.RULE_edgeop; }
	// @Override
	public enterRule(listener: DOTListener): void {
		if (listener.enterEdgeop) {
			listener.enterEdgeop(this);
		}
	}
	// @Override
	public exitRule(listener: DOTListener): void {
		if (listener.exitEdgeop) {
			listener.exitEdgeop(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DOTVisitor<Result>): Result {
		if (visitor.visitEdgeop) {
			return visitor.visitEdgeop(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Node_stmtContext extends ParserRuleContext {
	public node_id(): Node_idContext {
		return this.getRuleContext(0, Node_idContext);
	}
	public attr_list(): Attr_listContext | undefined {
		return this.tryGetRuleContext(0, Attr_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DOTParser.RULE_node_stmt; }
	// @Override
	public enterRule(listener: DOTListener): void {
		if (listener.enterNode_stmt) {
			listener.enterNode_stmt(this);
		}
	}
	// @Override
	public exitRule(listener: DOTListener): void {
		if (listener.exitNode_stmt) {
			listener.exitNode_stmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DOTVisitor<Result>): Result {
		if (visitor.visitNode_stmt) {
			return visitor.visitNode_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Node_idContext extends ParserRuleContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public port(): PortContext | undefined {
		return this.tryGetRuleContext(0, PortContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DOTParser.RULE_node_id; }
	// @Override
	public enterRule(listener: DOTListener): void {
		if (listener.enterNode_id) {
			listener.enterNode_id(this);
		}
	}
	// @Override
	public exitRule(listener: DOTListener): void {
		if (listener.exitNode_id) {
			listener.exitNode_id(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DOTVisitor<Result>): Result {
		if (visitor.visitNode_id) {
			return visitor.visitNode_id(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PortContext extends ParserRuleContext {
	public id(): IdContext[];
	public id(i: number): IdContext;
	public id(i?: number): IdContext | IdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdContext);
		} else {
			return this.getRuleContext(i, IdContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DOTParser.RULE_port; }
	// @Override
	public enterRule(listener: DOTListener): void {
		if (listener.enterPort) {
			listener.enterPort(this);
		}
	}
	// @Override
	public exitRule(listener: DOTListener): void {
		if (listener.exitPort) {
			listener.exitPort(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DOTVisitor<Result>): Result {
		if (visitor.visitPort) {
			return visitor.visitPort(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SubgraphContext extends ParserRuleContext {
	public stmt_list(): Stmt_listContext {
		return this.getRuleContext(0, Stmt_listContext);
	}
	public SUBGRAPH(): TerminalNode | undefined { return this.tryGetToken(DOTParser.SUBGRAPH, 0); }
	public id(): IdContext | undefined {
		return this.tryGetRuleContext(0, IdContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DOTParser.RULE_subgraph; }
	// @Override
	public enterRule(listener: DOTListener): void {
		if (listener.enterSubgraph) {
			listener.enterSubgraph(this);
		}
	}
	// @Override
	public exitRule(listener: DOTListener): void {
		if (listener.exitSubgraph) {
			listener.exitSubgraph(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DOTVisitor<Result>): Result {
		if (visitor.visitSubgraph) {
			return visitor.visitSubgraph(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdContext extends ParserRuleContext {
	public ID(): TerminalNode | undefined { return this.tryGetToken(DOTParser.ID, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(DOTParser.STRING, 0); }
	public HTML_STRING(): TerminalNode | undefined { return this.tryGetToken(DOTParser.HTML_STRING, 0); }
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(DOTParser.NUMBER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DOTParser.RULE_id; }
	// @Override
	public enterRule(listener: DOTListener): void {
		if (listener.enterId) {
			listener.enterId(this);
		}
	}
	// @Override
	public exitRule(listener: DOTListener): void {
		if (listener.exitId) {
			listener.exitId(this);
		}
	}
	// @Override
	public accept<Result>(visitor: DOTVisitor<Result>): Result {
		if (visitor.visitId) {
			return visitor.visitId(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


