// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/turtle-doc/turtle.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { turtleListener } from "./turtleListener";
import { turtleVisitor } from "./turtleVisitor";


export class turtleParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly PNameLn = 2;
	public static readonly LetterA = 3;
	public static readonly Dot = 4;
	public static readonly Coma = 5;
	public static readonly LParen = 6;
	public static readonly RParen = 7;
	public static readonly LEnd = 8;
	public static readonly REnd = 9;
	public static readonly IriRef = 10;
	public static readonly PNameNs = 11;
	public static readonly BlankNodeLabel = 12;
	public static readonly Integer = 13;
	public static readonly Decimal = 14;
	public static readonly Double = 15;
	public static readonly Exponent = 16;
	public static readonly StringLiteralQuote = 17;
	public static readonly StringLiteralSingleQuote = 18;
	public static readonly StringLiteralLongSingleQuote = 19;
	public static readonly StringLiteralLongQuote = 20;
	public static readonly Uchar = 21;
	public static readonly ECHAR = 22;
	public static readonly WS = 23;
	public static readonly ANON = 24;
	public static readonly PN_CHARS_BASE = 25;
	public static readonly PNCharsU = 26;
	public static readonly PN_CHARS = 27;
	public static readonly PN_Prefix = 28;
	public static readonly PNLocal = 29;
	public static readonly PLX = 30;
	public static readonly PERCENT = 31;
	public static readonly HEX = 32;
	public static readonly PN_LOCAL_ESC = 33;
	public static readonly Semi = 34;
	public static readonly TrueKeyword = 35;
	public static readonly FalseKeyword = 36;
	public static readonly PrefixKeyword = 37;
	public static readonly BaseKeyword = 38;
	public static readonly AtPrefixKeyword = 39;
	public static readonly AtBaseKeyword = 40;
	public static readonly LangTag = 41;
	public static readonly RULE_turtleDoc = 0;
	public static readonly RULE_statement = 1;
	public static readonly RULE_directive = 2;
	public static readonly RULE_prefixID = 3;
	public static readonly RULE_base = 4;
	public static readonly RULE_sparqlBase = 5;
	public static readonly RULE_sparqlPrefix = 6;
	public static readonly RULE_triples = 7;
	public static readonly RULE_predicateObjectList = 8;
	public static readonly RULE_objectList = 9;
	public static readonly RULE_predicateObject = 10;
	public static readonly RULE_subject = 11;
	public static readonly RULE_predicate = 12;
	public static readonly RULE_object = 13;
	public static readonly RULE_literal = 14;
	public static readonly RULE_blankNodePropertyList = 15;
	public static readonly RULE_collection = 16;
	public static readonly RULE_numericLiteral = 17;
	public static readonly RULE_rDFLiteral = 18;
	public static readonly RULE_bool = 19;
	public static readonly RULE_string = 20;
	public static readonly RULE_iri = 21;
	public static readonly RULE_blankNode = 22;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"turtleDoc", "statement", "directive", "prefixID", "base", "sparqlBase", 
		"sparqlPrefix", "triples", "predicateObjectList", "objectList", "predicateObject", 
		"subject", "predicate", "object", "literal", "blankNodePropertyList", 
		"collection", "numericLiteral", "rDFLiteral", "bool", "string", "iri", 
		"blankNode",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'^^'", undefined, "'a'", "'.'", "','", "'('", "')'", "'['", 
		"']'", undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, "';'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, "PNameLn", "LetterA", "Dot", "Coma", "LParen", "RParen", 
		"LEnd", "REnd", "IriRef", "PNameNs", "BlankNodeLabel", "Integer", "Decimal", 
		"Double", "Exponent", "StringLiteralQuote", "StringLiteralSingleQuote", 
		"StringLiteralLongSingleQuote", "StringLiteralLongQuote", "Uchar", "ECHAR", 
		"WS", "ANON", "PN_CHARS_BASE", "PNCharsU", "PN_CHARS", "PN_Prefix", "PNLocal", 
		"PLX", "PERCENT", "HEX", "PN_LOCAL_ESC", "Semi", "TrueKeyword", "FalseKeyword", 
		"PrefixKeyword", "BaseKeyword", "AtPrefixKeyword", "AtBaseKeyword", "LangTag",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(turtleParser._LITERAL_NAMES, turtleParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return turtleParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "turtle.g4"; }

	// @Override
	public get ruleNames(): string[] { return turtleParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return turtleParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(turtleParser._ATN, this);
	}
	// @RuleVersion(0)
	public turtleDoc(): TurtleDocContext {
		let _localctx: TurtleDocContext = new TurtleDocContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, turtleParser.RULE_turtleDoc);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 49;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << turtleParser.PNameLn) | (1 << turtleParser.LParen) | (1 << turtleParser.LEnd) | (1 << turtleParser.IriRef) | (1 << turtleParser.PNameNs) | (1 << turtleParser.BlankNodeLabel) | (1 << turtleParser.ANON))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (turtleParser.PrefixKeyword - 37)) | (1 << (turtleParser.BaseKeyword - 37)) | (1 << (turtleParser.AtPrefixKeyword - 37)) | (1 << (turtleParser.AtBaseKeyword - 37)))) !== 0)) {
				{
				{
				this.state = 46;
				this.statement();
				}
				}
				this.state = 51;
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
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, turtleParser.RULE_statement);
		try {
			this.state = 56;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case turtleParser.PrefixKeyword:
			case turtleParser.BaseKeyword:
			case turtleParser.AtPrefixKeyword:
			case turtleParser.AtBaseKeyword:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 52;
				this.directive();
				}
				break;
			case turtleParser.PNameLn:
			case turtleParser.LParen:
			case turtleParser.LEnd:
			case turtleParser.IriRef:
			case turtleParser.PNameNs:
			case turtleParser.BlankNodeLabel:
			case turtleParser.ANON:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 53;
				this.triples();
				this.state = 54;
				this.match(turtleParser.Dot);
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
	public directive(): DirectiveContext {
		let _localctx: DirectiveContext = new DirectiveContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, turtleParser.RULE_directive);
		try {
			this.state = 62;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case turtleParser.AtPrefixKeyword:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 58;
				this.prefixID();
				}
				break;
			case turtleParser.AtBaseKeyword:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 59;
				this.base();
				}
				break;
			case turtleParser.PrefixKeyword:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 60;
				this.sparqlPrefix();
				}
				break;
			case turtleParser.BaseKeyword:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 61;
				this.sparqlBase();
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
	public prefixID(): PrefixIDContext {
		let _localctx: PrefixIDContext = new PrefixIDContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, turtleParser.RULE_prefixID);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 64;
			this.match(turtleParser.AtPrefixKeyword);
			this.state = 65;
			this.match(turtleParser.PNameNs);
			this.state = 66;
			this.match(turtleParser.IriRef);
			this.state = 67;
			this.match(turtleParser.Dot);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public base(): BaseContext {
		let _localctx: BaseContext = new BaseContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, turtleParser.RULE_base);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 69;
			this.match(turtleParser.AtBaseKeyword);
			this.state = 70;
			this.match(turtleParser.IriRef);
			this.state = 71;
			this.match(turtleParser.Dot);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sparqlBase(): SparqlBaseContext {
		let _localctx: SparqlBaseContext = new SparqlBaseContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, turtleParser.RULE_sparqlBase);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 73;
			this.match(turtleParser.BaseKeyword);
			this.state = 74;
			this.match(turtleParser.IriRef);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sparqlPrefix(): SparqlPrefixContext {
		let _localctx: SparqlPrefixContext = new SparqlPrefixContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, turtleParser.RULE_sparqlPrefix);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 76;
			this.match(turtleParser.PrefixKeyword);
			this.state = 77;
			this.match(turtleParser.PNameNs);
			this.state = 78;
			this.match(turtleParser.IriRef);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public triples(): TriplesContext {
		let _localctx: TriplesContext = new TriplesContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, turtleParser.RULE_triples);
		let _la: number;
		try {
			this.state = 87;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case turtleParser.PNameLn:
			case turtleParser.LParen:
			case turtleParser.IriRef:
			case turtleParser.PNameNs:
			case turtleParser.BlankNodeLabel:
			case turtleParser.ANON:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 80;
				this.subject();
				this.state = 81;
				this.predicateObjectList();
				}
				break;
			case turtleParser.LEnd:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 83;
				this.blankNodePropertyList();
				this.state = 85;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << turtleParser.PNameLn) | (1 << turtleParser.LetterA) | (1 << turtleParser.IriRef) | (1 << turtleParser.PNameNs))) !== 0)) {
					{
					this.state = 84;
					this.predicateObjectList();
					}
				}

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
	public predicateObjectList(): PredicateObjectListContext {
		let _localctx: PredicateObjectListContext = new PredicateObjectListContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, turtleParser.RULE_predicateObjectList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 89;
			this.predicateObject();
			this.state = 96;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === turtleParser.Semi) {
				{
				{
				this.state = 90;
				this.match(turtleParser.Semi);
				this.state = 92;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << turtleParser.PNameLn) | (1 << turtleParser.LetterA) | (1 << turtleParser.IriRef) | (1 << turtleParser.PNameNs))) !== 0)) {
					{
					this.state = 91;
					this.predicateObject();
					}
				}

				}
				}
				this.state = 98;
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
	public objectList(): ObjectListContext {
		let _localctx: ObjectListContext = new ObjectListContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, turtleParser.RULE_objectList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 99;
			this.object();
			this.state = 104;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === turtleParser.Coma) {
				{
				{
				this.state = 100;
				this.match(turtleParser.Coma);
				this.state = 101;
				this.object();
				}
				}
				this.state = 106;
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
	public predicateObject(): PredicateObjectContext {
		let _localctx: PredicateObjectContext = new PredicateObjectContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, turtleParser.RULE_predicateObject);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 109;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case turtleParser.PNameLn:
			case turtleParser.IriRef:
			case turtleParser.PNameNs:
				{
				this.state = 107;
				this.predicate();
				}
				break;
			case turtleParser.LetterA:
				{
				this.state = 108;
				this.match(turtleParser.LetterA);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 111;
			this.objectList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public subject(): SubjectContext {
		let _localctx: SubjectContext = new SubjectContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, turtleParser.RULE_subject);
		try {
			this.state = 116;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case turtleParser.PNameLn:
			case turtleParser.IriRef:
			case turtleParser.PNameNs:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 113;
				this.iri();
				}
				break;
			case turtleParser.BlankNodeLabel:
			case turtleParser.ANON:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 114;
				this.blankNode();
				}
				break;
			case turtleParser.LParen:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 115;
				this.collection();
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
	public predicate(): PredicateContext {
		let _localctx: PredicateContext = new PredicateContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, turtleParser.RULE_predicate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 118;
			this.iri();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 26, turtleParser.RULE_object);
		try {
			this.state = 125;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case turtleParser.PNameLn:
			case turtleParser.IriRef:
			case turtleParser.PNameNs:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 120;
				this.iri();
				}
				break;
			case turtleParser.BlankNodeLabel:
			case turtleParser.ANON:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 121;
				this.blankNode();
				}
				break;
			case turtleParser.LParen:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 122;
				this.collection();
				}
				break;
			case turtleParser.LEnd:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 123;
				this.blankNodePropertyList();
				}
				break;
			case turtleParser.Integer:
			case turtleParser.Decimal:
			case turtleParser.Double:
			case turtleParser.StringLiteralQuote:
			case turtleParser.StringLiteralSingleQuote:
			case turtleParser.StringLiteralLongSingleQuote:
			case turtleParser.StringLiteralLongQuote:
			case turtleParser.TrueKeyword:
			case turtleParser.FalseKeyword:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 124;
				this.literal();
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
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, turtleParser.RULE_literal);
		try {
			this.state = 130;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case turtleParser.StringLiteralQuote:
			case turtleParser.StringLiteralSingleQuote:
			case turtleParser.StringLiteralLongSingleQuote:
			case turtleParser.StringLiteralLongQuote:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 127;
				this.rDFLiteral();
				}
				break;
			case turtleParser.Integer:
			case turtleParser.Decimal:
			case turtleParser.Double:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 128;
				this.numericLiteral();
				}
				break;
			case turtleParser.TrueKeyword:
			case turtleParser.FalseKeyword:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 129;
				this.bool();
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
	public blankNodePropertyList(): BlankNodePropertyListContext {
		let _localctx: BlankNodePropertyListContext = new BlankNodePropertyListContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, turtleParser.RULE_blankNodePropertyList);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 132;
			this.match(turtleParser.LEnd);
			this.state = 133;
			this.predicateObjectList();
			this.state = 134;
			this.match(turtleParser.REnd);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public collection(): CollectionContext {
		let _localctx: CollectionContext = new CollectionContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, turtleParser.RULE_collection);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 136;
			this.match(turtleParser.LParen);
			this.state = 140;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << turtleParser.PNameLn) | (1 << turtleParser.LParen) | (1 << turtleParser.LEnd) | (1 << turtleParser.IriRef) | (1 << turtleParser.PNameNs) | (1 << turtleParser.BlankNodeLabel) | (1 << turtleParser.Integer) | (1 << turtleParser.Decimal) | (1 << turtleParser.Double) | (1 << turtleParser.StringLiteralQuote) | (1 << turtleParser.StringLiteralSingleQuote) | (1 << turtleParser.StringLiteralLongSingleQuote) | (1 << turtleParser.StringLiteralLongQuote) | (1 << turtleParser.ANON))) !== 0) || _la === turtleParser.TrueKeyword || _la === turtleParser.FalseKeyword) {
				{
				{
				this.state = 137;
				this.object();
				}
				}
				this.state = 142;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 143;
			this.match(turtleParser.RParen);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public numericLiteral(): NumericLiteralContext {
		let _localctx: NumericLiteralContext = new NumericLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, turtleParser.RULE_numericLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 145;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << turtleParser.Integer) | (1 << turtleParser.Decimal) | (1 << turtleParser.Double))) !== 0))) {
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
	public rDFLiteral(): RDFLiteralContext {
		let _localctx: RDFLiteralContext = new RDFLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, turtleParser.RULE_rDFLiteral);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 147;
			this.string();
			this.state = 151;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case turtleParser.LangTag:
				{
				this.state = 148;
				this.match(turtleParser.LangTag);
				}
				break;
			case turtleParser.T__0:
				{
				{
				this.state = 149;
				this.match(turtleParser.T__0);
				this.state = 150;
				this.iri();
				}
				}
				break;
			case turtleParser.PNameLn:
			case turtleParser.Dot:
			case turtleParser.Coma:
			case turtleParser.LParen:
			case turtleParser.RParen:
			case turtleParser.LEnd:
			case turtleParser.REnd:
			case turtleParser.IriRef:
			case turtleParser.PNameNs:
			case turtleParser.BlankNodeLabel:
			case turtleParser.Integer:
			case turtleParser.Decimal:
			case turtleParser.Double:
			case turtleParser.StringLiteralQuote:
			case turtleParser.StringLiteralSingleQuote:
			case turtleParser.StringLiteralLongSingleQuote:
			case turtleParser.StringLiteralLongQuote:
			case turtleParser.ANON:
			case turtleParser.Semi:
			case turtleParser.TrueKeyword:
			case turtleParser.FalseKeyword:
				break;
			default:
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
	public bool(): BoolContext {
		let _localctx: BoolContext = new BoolContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, turtleParser.RULE_bool);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 153;
			_la = this._input.LA(1);
			if (!(_la === turtleParser.TrueKeyword || _la === turtleParser.FalseKeyword)) {
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
		this.enterRule(_localctx, 40, turtleParser.RULE_string);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 155;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << turtleParser.StringLiteralQuote) | (1 << turtleParser.StringLiteralSingleQuote) | (1 << turtleParser.StringLiteralLongSingleQuote) | (1 << turtleParser.StringLiteralLongQuote))) !== 0))) {
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
	public iri(): IriContext {
		let _localctx: IriContext = new IriContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, turtleParser.RULE_iri);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 157;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << turtleParser.PNameLn) | (1 << turtleParser.IriRef) | (1 << turtleParser.PNameNs))) !== 0))) {
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
	public blankNode(): BlankNodeContext {
		let _localctx: BlankNodeContext = new BlankNodeContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, turtleParser.RULE_blankNode);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 159;
			_la = this._input.LA(1);
			if (!(_la === turtleParser.BlankNodeLabel || _la === turtleParser.ANON)) {
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03+\xA4\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x03\x02\x07\x022\n\x02\f\x02\x0E\x025\v\x02\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x05\x03;\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04" +
		"A\n\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x05\tX\n\t\x05\tZ\n\t\x03\n\x03\n\x03\n\x05\n_\n\n\x07" +
		"\na\n\n\f\n\x0E\nd\v\n\x03\v\x03\v\x03\v\x07\vi\n\v\f\v\x0E\vl\v\v\x03" +
		"\f\x03\f\x05\fp\n\f\x03\f\x03\f\x03\r\x03\r\x03\r\x05\rw\n\r\x03\x0E\x03" +
		"\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\x80\n\x0F\x03\x10" +
		"\x03\x10\x03\x10\x05\x10\x85\n\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03" +
		"\x12\x03\x12\x07\x12\x8D\n\x12\f\x12\x0E\x12\x90\v\x12\x03\x12\x03\x12" +
		"\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x14\x05\x14\x9A\n\x14\x03" +
		"\x15\x03\x15\x03\x16\x03\x16\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x02" +
		"\x02\x02\x19\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02" +
		"\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02" +
		"&\x02(\x02*\x02,\x02.\x02\x02\x07\x03\x02\x0F\x11\x03\x02%&\x03\x02\x13" +
		"\x16\x04\x02\x04\x04\f\r\x04\x02\x0E\x0E\x1A\x1A\x02\xA2\x023\x03\x02" +
		"\x02\x02\x04:\x03\x02\x02\x02\x06@\x03\x02\x02\x02\bB\x03\x02\x02\x02" +
		"\nG\x03\x02\x02\x02\fK\x03\x02\x02\x02\x0EN\x03\x02\x02\x02\x10Y\x03\x02" +
		"\x02\x02\x12[\x03\x02\x02\x02\x14e\x03\x02\x02\x02\x16o\x03\x02\x02\x02" +
		"\x18v\x03\x02\x02\x02\x1Ax\x03\x02\x02\x02\x1C\x7F\x03\x02\x02\x02\x1E" +
		"\x84\x03\x02\x02\x02 \x86\x03\x02\x02\x02\"\x8A\x03\x02\x02\x02$\x93\x03" +
		"\x02\x02\x02&\x95\x03\x02\x02\x02(\x9B\x03\x02\x02\x02*\x9D\x03\x02\x02" +
		"\x02,\x9F\x03\x02\x02\x02.\xA1\x03\x02\x02\x0202\x05\x04\x03\x0210\x03" +
		"\x02\x02\x0225\x03\x02\x02\x0231\x03\x02\x02\x0234\x03\x02\x02\x024\x03" +
		"\x03\x02\x02\x0253\x03\x02\x02\x026;\x05\x06\x04\x0278\x05\x10\t\x028" +
		"9\x07\x06\x02\x029;\x03\x02\x02\x02:6\x03\x02\x02\x02:7\x03\x02\x02\x02" +
		";\x05\x03\x02\x02\x02<A\x05\b\x05\x02=A\x05\n\x06\x02>A\x05\x0E\b\x02" +
		"?A\x05\f\x07\x02@<\x03\x02\x02\x02@=\x03\x02\x02\x02@>\x03\x02\x02\x02" +
		"@?\x03\x02\x02\x02A\x07\x03\x02\x02\x02BC\x07)\x02\x02CD\x07\r\x02\x02" +
		"DE\x07\f\x02\x02EF\x07\x06\x02\x02F\t\x03\x02\x02\x02GH\x07*\x02\x02H" +
		"I\x07\f\x02\x02IJ\x07\x06\x02\x02J\v\x03\x02\x02\x02KL\x07(\x02\x02LM" +
		"\x07\f\x02\x02M\r\x03\x02\x02\x02NO\x07\'\x02\x02OP\x07\r\x02\x02PQ\x07" +
		"\f\x02\x02Q\x0F\x03\x02\x02\x02RS\x05\x18\r\x02ST\x05\x12\n\x02TZ\x03" +
		"\x02\x02\x02UW\x05 \x11\x02VX\x05\x12\n\x02WV\x03\x02\x02\x02WX\x03\x02" +
		"\x02\x02XZ\x03\x02\x02\x02YR\x03\x02\x02\x02YU\x03\x02\x02\x02Z\x11\x03" +
		"\x02\x02\x02[b\x05\x16\f\x02\\^\x07$\x02\x02]_\x05\x16\f\x02^]\x03\x02" +
		"\x02\x02^_\x03\x02\x02\x02_a\x03\x02\x02\x02`\\\x03\x02\x02\x02ad\x03" +
		"\x02\x02\x02b`\x03\x02\x02\x02bc\x03\x02\x02\x02c\x13\x03\x02\x02\x02" +
		"db\x03\x02\x02\x02ej\x05\x1C\x0F\x02fg\x07\x07\x02\x02gi\x05\x1C\x0F\x02" +
		"hf\x03\x02\x02\x02il\x03\x02\x02\x02jh\x03\x02\x02\x02jk\x03\x02\x02\x02" +
		"k\x15\x03\x02\x02\x02lj\x03\x02\x02\x02mp\x05\x1A\x0E\x02np\x07\x05\x02" +
		"\x02om\x03\x02\x02\x02on\x03\x02\x02\x02pq\x03\x02\x02\x02qr\x05\x14\v" +
		"\x02r\x17\x03\x02\x02\x02sw\x05,\x17\x02tw\x05.\x18\x02uw\x05\"\x12\x02" +
		"vs\x03\x02\x02\x02vt\x03\x02\x02\x02vu\x03\x02\x02\x02w\x19\x03\x02\x02" +
		"\x02xy\x05,\x17\x02y\x1B\x03\x02\x02\x02z\x80\x05,\x17\x02{\x80\x05.\x18" +
		"\x02|\x80\x05\"\x12\x02}\x80\x05 \x11\x02~\x80\x05\x1E\x10\x02\x7Fz\x03" +
		"\x02\x02\x02\x7F{\x03\x02\x02\x02\x7F|\x03\x02\x02\x02\x7F}\x03\x02\x02" +
		"\x02\x7F~\x03\x02\x02\x02\x80\x1D\x03\x02\x02\x02\x81\x85\x05&\x14\x02" +
		"\x82\x85\x05$\x13\x02\x83\x85\x05(\x15\x02\x84\x81\x03\x02\x02\x02\x84" +
		"\x82\x03\x02\x02\x02\x84\x83\x03\x02\x02\x02\x85\x1F\x03\x02\x02\x02\x86" +
		"\x87\x07\n\x02\x02\x87\x88\x05\x12\n\x02\x88\x89\x07\v\x02\x02\x89!\x03" +
		"\x02\x02\x02\x8A\x8E\x07\b\x02\x02\x8B\x8D\x05\x1C\x0F\x02\x8C\x8B\x03" +
		"\x02\x02\x02\x8D\x90\x03\x02\x02\x02\x8E\x8C\x03\x02\x02\x02\x8E\x8F\x03" +
		"\x02\x02\x02\x8F\x91\x03\x02\x02\x02\x90\x8E\x03\x02\x02\x02\x91\x92\x07" +
		"\t\x02\x02\x92#\x03\x02\x02\x02\x93\x94\t\x02\x02\x02\x94%\x03\x02\x02" +
		"\x02\x95\x99\x05*\x16\x02\x96\x9A\x07+\x02\x02\x97\x98\x07\x03\x02\x02" +
		"\x98\x9A\x05,\x17\x02\x99\x96\x03\x02\x02\x02\x99\x97\x03\x02\x02\x02" +
		"\x99\x9A\x03\x02\x02\x02\x9A\'\x03\x02\x02\x02\x9B\x9C\t\x03\x02\x02\x9C" +
		")\x03\x02\x02\x02\x9D\x9E\t\x04\x02\x02\x9E+\x03\x02\x02\x02\x9F\xA0\t" +
		"\x05\x02\x02\xA0-\x03\x02\x02\x02\xA1\xA2\t\x06\x02\x02\xA2/\x03\x02\x02" +
		"\x02\x103:@WY^bjov\x7F\x84\x8E\x99";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!turtleParser.__ATN) {
			turtleParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(turtleParser._serializedATN));
		}

		return turtleParser.__ATN;
	}

}

export class TurtleDocContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return turtleParser.RULE_turtleDoc; }
	// @Override
	public enterRule(listener: turtleListener): void {
		if (listener.enterTurtleDoc) {
			listener.enterTurtleDoc(this);
		}
	}
	// @Override
	public exitRule(listener: turtleListener): void {
		if (listener.exitTurtleDoc) {
			listener.exitTurtleDoc(this);
		}
	}
	// @Override
	public accept<Result>(visitor: turtleVisitor<Result>): Result {
		if (visitor.visitTurtleDoc) {
			return visitor.visitTurtleDoc(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public directive(): DirectiveContext | undefined {
		return this.tryGetRuleContext(0, DirectiveContext);
	}
	public triples(): TriplesContext | undefined {
		return this.tryGetRuleContext(0, TriplesContext);
	}
	public Dot(): TerminalNode | undefined { return this.tryGetToken(turtleParser.Dot, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return turtleParser.RULE_statement; }
	// @Override
	public enterRule(listener: turtleListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: turtleListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: turtleVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DirectiveContext extends ParserRuleContext {
	public prefixID(): PrefixIDContext | undefined {
		return this.tryGetRuleContext(0, PrefixIDContext);
	}
	public base(): BaseContext | undefined {
		return this.tryGetRuleContext(0, BaseContext);
	}
	public sparqlPrefix(): SparqlPrefixContext | undefined {
		return this.tryGetRuleContext(0, SparqlPrefixContext);
	}
	public sparqlBase(): SparqlBaseContext | undefined {
		return this.tryGetRuleContext(0, SparqlBaseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return turtleParser.RULE_directive; }
	// @Override
	public enterRule(listener: turtleListener): void {
		if (listener.enterDirective) {
			listener.enterDirective(this);
		}
	}
	// @Override
	public exitRule(listener: turtleListener): void {
		if (listener.exitDirective) {
			listener.exitDirective(this);
		}
	}
	// @Override
	public accept<Result>(visitor: turtleVisitor<Result>): Result {
		if (visitor.visitDirective) {
			return visitor.visitDirective(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrefixIDContext extends ParserRuleContext {
	public AtPrefixKeyword(): TerminalNode { return this.getToken(turtleParser.AtPrefixKeyword, 0); }
	public PNameNs(): TerminalNode { return this.getToken(turtleParser.PNameNs, 0); }
	public IriRef(): TerminalNode { return this.getToken(turtleParser.IriRef, 0); }
	public Dot(): TerminalNode { return this.getToken(turtleParser.Dot, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return turtleParser.RULE_prefixID; }
	// @Override
	public enterRule(listener: turtleListener): void {
		if (listener.enterPrefixID) {
			listener.enterPrefixID(this);
		}
	}
	// @Override
	public exitRule(listener: turtleListener): void {
		if (listener.exitPrefixID) {
			listener.exitPrefixID(this);
		}
	}
	// @Override
	public accept<Result>(visitor: turtleVisitor<Result>): Result {
		if (visitor.visitPrefixID) {
			return visitor.visitPrefixID(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BaseContext extends ParserRuleContext {
	public AtBaseKeyword(): TerminalNode { return this.getToken(turtleParser.AtBaseKeyword, 0); }
	public IriRef(): TerminalNode { return this.getToken(turtleParser.IriRef, 0); }
	public Dot(): TerminalNode { return this.getToken(turtleParser.Dot, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return turtleParser.RULE_base; }
	// @Override
	public enterRule(listener: turtleListener): void {
		if (listener.enterBase) {
			listener.enterBase(this);
		}
	}
	// @Override
	public exitRule(listener: turtleListener): void {
		if (listener.exitBase) {
			listener.exitBase(this);
		}
	}
	// @Override
	public accept<Result>(visitor: turtleVisitor<Result>): Result {
		if (visitor.visitBase) {
			return visitor.visitBase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SparqlBaseContext extends ParserRuleContext {
	public BaseKeyword(): TerminalNode { return this.getToken(turtleParser.BaseKeyword, 0); }
	public IriRef(): TerminalNode { return this.getToken(turtleParser.IriRef, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return turtleParser.RULE_sparqlBase; }
	// @Override
	public enterRule(listener: turtleListener): void {
		if (listener.enterSparqlBase) {
			listener.enterSparqlBase(this);
		}
	}
	// @Override
	public exitRule(listener: turtleListener): void {
		if (listener.exitSparqlBase) {
			listener.exitSparqlBase(this);
		}
	}
	// @Override
	public accept<Result>(visitor: turtleVisitor<Result>): Result {
		if (visitor.visitSparqlBase) {
			return visitor.visitSparqlBase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SparqlPrefixContext extends ParserRuleContext {
	public PrefixKeyword(): TerminalNode { return this.getToken(turtleParser.PrefixKeyword, 0); }
	public PNameNs(): TerminalNode { return this.getToken(turtleParser.PNameNs, 0); }
	public IriRef(): TerminalNode { return this.getToken(turtleParser.IriRef, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return turtleParser.RULE_sparqlPrefix; }
	// @Override
	public enterRule(listener: turtleListener): void {
		if (listener.enterSparqlPrefix) {
			listener.enterSparqlPrefix(this);
		}
	}
	// @Override
	public exitRule(listener: turtleListener): void {
		if (listener.exitSparqlPrefix) {
			listener.exitSparqlPrefix(this);
		}
	}
	// @Override
	public accept<Result>(visitor: turtleVisitor<Result>): Result {
		if (visitor.visitSparqlPrefix) {
			return visitor.visitSparqlPrefix(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TriplesContext extends ParserRuleContext {
	public subject(): SubjectContext | undefined {
		return this.tryGetRuleContext(0, SubjectContext);
	}
	public predicateObjectList(): PredicateObjectListContext | undefined {
		return this.tryGetRuleContext(0, PredicateObjectListContext);
	}
	public blankNodePropertyList(): BlankNodePropertyListContext | undefined {
		return this.tryGetRuleContext(0, BlankNodePropertyListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return turtleParser.RULE_triples; }
	// @Override
	public enterRule(listener: turtleListener): void {
		if (listener.enterTriples) {
			listener.enterTriples(this);
		}
	}
	// @Override
	public exitRule(listener: turtleListener): void {
		if (listener.exitTriples) {
			listener.exitTriples(this);
		}
	}
	// @Override
	public accept<Result>(visitor: turtleVisitor<Result>): Result {
		if (visitor.visitTriples) {
			return visitor.visitTriples(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PredicateObjectListContext extends ParserRuleContext {
	public predicateObject(): PredicateObjectContext[];
	public predicateObject(i: number): PredicateObjectContext;
	public predicateObject(i?: number): PredicateObjectContext | PredicateObjectContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PredicateObjectContext);
		} else {
			return this.getRuleContext(i, PredicateObjectContext);
		}
	}
	public Semi(): TerminalNode[];
	public Semi(i: number): TerminalNode;
	public Semi(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(turtleParser.Semi);
		} else {
			return this.getToken(turtleParser.Semi, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return turtleParser.RULE_predicateObjectList; }
	// @Override
	public enterRule(listener: turtleListener): void {
		if (listener.enterPredicateObjectList) {
			listener.enterPredicateObjectList(this);
		}
	}
	// @Override
	public exitRule(listener: turtleListener): void {
		if (listener.exitPredicateObjectList) {
			listener.exitPredicateObjectList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: turtleVisitor<Result>): Result {
		if (visitor.visitPredicateObjectList) {
			return visitor.visitPredicateObjectList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ObjectListContext extends ParserRuleContext {
	public object(): ObjectContext[];
	public object(i: number): ObjectContext;
	public object(i?: number): ObjectContext | ObjectContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ObjectContext);
		} else {
			return this.getRuleContext(i, ObjectContext);
		}
	}
	public Coma(): TerminalNode[];
	public Coma(i: number): TerminalNode;
	public Coma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(turtleParser.Coma);
		} else {
			return this.getToken(turtleParser.Coma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return turtleParser.RULE_objectList; }
	// @Override
	public enterRule(listener: turtleListener): void {
		if (listener.enterObjectList) {
			listener.enterObjectList(this);
		}
	}
	// @Override
	public exitRule(listener: turtleListener): void {
		if (listener.exitObjectList) {
			listener.exitObjectList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: turtleVisitor<Result>): Result {
		if (visitor.visitObjectList) {
			return visitor.visitObjectList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PredicateObjectContext extends ParserRuleContext {
	public objectList(): ObjectListContext {
		return this.getRuleContext(0, ObjectListContext);
	}
	public predicate(): PredicateContext | undefined {
		return this.tryGetRuleContext(0, PredicateContext);
	}
	public LetterA(): TerminalNode | undefined { return this.tryGetToken(turtleParser.LetterA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return turtleParser.RULE_predicateObject; }
	// @Override
	public enterRule(listener: turtleListener): void {
		if (listener.enterPredicateObject) {
			listener.enterPredicateObject(this);
		}
	}
	// @Override
	public exitRule(listener: turtleListener): void {
		if (listener.exitPredicateObject) {
			listener.exitPredicateObject(this);
		}
	}
	// @Override
	public accept<Result>(visitor: turtleVisitor<Result>): Result {
		if (visitor.visitPredicateObject) {
			return visitor.visitPredicateObject(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SubjectContext extends ParserRuleContext {
	public iri(): IriContext | undefined {
		return this.tryGetRuleContext(0, IriContext);
	}
	public blankNode(): BlankNodeContext | undefined {
		return this.tryGetRuleContext(0, BlankNodeContext);
	}
	public collection(): CollectionContext | undefined {
		return this.tryGetRuleContext(0, CollectionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return turtleParser.RULE_subject; }
	// @Override
	public enterRule(listener: turtleListener): void {
		if (listener.enterSubject) {
			listener.enterSubject(this);
		}
	}
	// @Override
	public exitRule(listener: turtleListener): void {
		if (listener.exitSubject) {
			listener.exitSubject(this);
		}
	}
	// @Override
	public accept<Result>(visitor: turtleVisitor<Result>): Result {
		if (visitor.visitSubject) {
			return visitor.visitSubject(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PredicateContext extends ParserRuleContext {
	public iri(): IriContext {
		return this.getRuleContext(0, IriContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return turtleParser.RULE_predicate; }
	// @Override
	public enterRule(listener: turtleListener): void {
		if (listener.enterPredicate) {
			listener.enterPredicate(this);
		}
	}
	// @Override
	public exitRule(listener: turtleListener): void {
		if (listener.exitPredicate) {
			listener.exitPredicate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: turtleVisitor<Result>): Result {
		if (visitor.visitPredicate) {
			return visitor.visitPredicate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ObjectContext extends ParserRuleContext {
	public iri(): IriContext | undefined {
		return this.tryGetRuleContext(0, IriContext);
	}
	public blankNode(): BlankNodeContext | undefined {
		return this.tryGetRuleContext(0, BlankNodeContext);
	}
	public collection(): CollectionContext | undefined {
		return this.tryGetRuleContext(0, CollectionContext);
	}
	public blankNodePropertyList(): BlankNodePropertyListContext | undefined {
		return this.tryGetRuleContext(0, BlankNodePropertyListContext);
	}
	public literal(): LiteralContext | undefined {
		return this.tryGetRuleContext(0, LiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return turtleParser.RULE_object; }
	// @Override
	public enterRule(listener: turtleListener): void {
		if (listener.enterObject) {
			listener.enterObject(this);
		}
	}
	// @Override
	public exitRule(listener: turtleListener): void {
		if (listener.exitObject) {
			listener.exitObject(this);
		}
	}
	// @Override
	public accept<Result>(visitor: turtleVisitor<Result>): Result {
		if (visitor.visitObject) {
			return visitor.visitObject(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	public rDFLiteral(): RDFLiteralContext | undefined {
		return this.tryGetRuleContext(0, RDFLiteralContext);
	}
	public numericLiteral(): NumericLiteralContext | undefined {
		return this.tryGetRuleContext(0, NumericLiteralContext);
	}
	public bool(): BoolContext | undefined {
		return this.tryGetRuleContext(0, BoolContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return turtleParser.RULE_literal; }
	// @Override
	public enterRule(listener: turtleListener): void {
		if (listener.enterLiteral) {
			listener.enterLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: turtleListener): void {
		if (listener.exitLiteral) {
			listener.exitLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: turtleVisitor<Result>): Result {
		if (visitor.visitLiteral) {
			return visitor.visitLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlankNodePropertyListContext extends ParserRuleContext {
	public LEnd(): TerminalNode { return this.getToken(turtleParser.LEnd, 0); }
	public predicateObjectList(): PredicateObjectListContext {
		return this.getRuleContext(0, PredicateObjectListContext);
	}
	public REnd(): TerminalNode { return this.getToken(turtleParser.REnd, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return turtleParser.RULE_blankNodePropertyList; }
	// @Override
	public enterRule(listener: turtleListener): void {
		if (listener.enterBlankNodePropertyList) {
			listener.enterBlankNodePropertyList(this);
		}
	}
	// @Override
	public exitRule(listener: turtleListener): void {
		if (listener.exitBlankNodePropertyList) {
			listener.exitBlankNodePropertyList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: turtleVisitor<Result>): Result {
		if (visitor.visitBlankNodePropertyList) {
			return visitor.visitBlankNodePropertyList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CollectionContext extends ParserRuleContext {
	public LParen(): TerminalNode { return this.getToken(turtleParser.LParen, 0); }
	public RParen(): TerminalNode { return this.getToken(turtleParser.RParen, 0); }
	public object(): ObjectContext[];
	public object(i: number): ObjectContext;
	public object(i?: number): ObjectContext | ObjectContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ObjectContext);
		} else {
			return this.getRuleContext(i, ObjectContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return turtleParser.RULE_collection; }
	// @Override
	public enterRule(listener: turtleListener): void {
		if (listener.enterCollection) {
			listener.enterCollection(this);
		}
	}
	// @Override
	public exitRule(listener: turtleListener): void {
		if (listener.exitCollection) {
			listener.exitCollection(this);
		}
	}
	// @Override
	public accept<Result>(visitor: turtleVisitor<Result>): Result {
		if (visitor.visitCollection) {
			return visitor.visitCollection(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NumericLiteralContext extends ParserRuleContext {
	public Integer(): TerminalNode | undefined { return this.tryGetToken(turtleParser.Integer, 0); }
	public Decimal(): TerminalNode | undefined { return this.tryGetToken(turtleParser.Decimal, 0); }
	public Double(): TerminalNode | undefined { return this.tryGetToken(turtleParser.Double, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return turtleParser.RULE_numericLiteral; }
	// @Override
	public enterRule(listener: turtleListener): void {
		if (listener.enterNumericLiteral) {
			listener.enterNumericLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: turtleListener): void {
		if (listener.exitNumericLiteral) {
			listener.exitNumericLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: turtleVisitor<Result>): Result {
		if (visitor.visitNumericLiteral) {
			return visitor.visitNumericLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RDFLiteralContext extends ParserRuleContext {
	public string(): StringContext {
		return this.getRuleContext(0, StringContext);
	}
	public LangTag(): TerminalNode | undefined { return this.tryGetToken(turtleParser.LangTag, 0); }
	public iri(): IriContext | undefined {
		return this.tryGetRuleContext(0, IriContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return turtleParser.RULE_rDFLiteral; }
	// @Override
	public enterRule(listener: turtleListener): void {
		if (listener.enterRDFLiteral) {
			listener.enterRDFLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: turtleListener): void {
		if (listener.exitRDFLiteral) {
			listener.exitRDFLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: turtleVisitor<Result>): Result {
		if (visitor.visitRDFLiteral) {
			return visitor.visitRDFLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BoolContext extends ParserRuleContext {
	public TrueKeyword(): TerminalNode | undefined { return this.tryGetToken(turtleParser.TrueKeyword, 0); }
	public FalseKeyword(): TerminalNode | undefined { return this.tryGetToken(turtleParser.FalseKeyword, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return turtleParser.RULE_bool; }
	// @Override
	public enterRule(listener: turtleListener): void {
		if (listener.enterBool) {
			listener.enterBool(this);
		}
	}
	// @Override
	public exitRule(listener: turtleListener): void {
		if (listener.exitBool) {
			listener.exitBool(this);
		}
	}
	// @Override
	public accept<Result>(visitor: turtleVisitor<Result>): Result {
		if (visitor.visitBool) {
			return visitor.visitBool(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StringContext extends ParserRuleContext {
	public StringLiteralQuote(): TerminalNode | undefined { return this.tryGetToken(turtleParser.StringLiteralQuote, 0); }
	public StringLiteralSingleQuote(): TerminalNode | undefined { return this.tryGetToken(turtleParser.StringLiteralSingleQuote, 0); }
	public StringLiteralLongSingleQuote(): TerminalNode | undefined { return this.tryGetToken(turtleParser.StringLiteralLongSingleQuote, 0); }
	public StringLiteralLongQuote(): TerminalNode | undefined { return this.tryGetToken(turtleParser.StringLiteralLongQuote, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return turtleParser.RULE_string; }
	// @Override
	public enterRule(listener: turtleListener): void {
		if (listener.enterString) {
			listener.enterString(this);
		}
	}
	// @Override
	public exitRule(listener: turtleListener): void {
		if (listener.exitString) {
			listener.exitString(this);
		}
	}
	// @Override
	public accept<Result>(visitor: turtleVisitor<Result>): Result {
		if (visitor.visitString) {
			return visitor.visitString(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IriContext extends ParserRuleContext {
	public IriRef(): TerminalNode | undefined { return this.tryGetToken(turtleParser.IriRef, 0); }
	public PNameLn(): TerminalNode | undefined { return this.tryGetToken(turtleParser.PNameLn, 0); }
	public PNameNs(): TerminalNode | undefined { return this.tryGetToken(turtleParser.PNameNs, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return turtleParser.RULE_iri; }
	// @Override
	public enterRule(listener: turtleListener): void {
		if (listener.enterIri) {
			listener.enterIri(this);
		}
	}
	// @Override
	public exitRule(listener: turtleListener): void {
		if (listener.exitIri) {
			listener.exitIri(this);
		}
	}
	// @Override
	public accept<Result>(visitor: turtleVisitor<Result>): Result {
		if (visitor.visitIri) {
			return visitor.visitIri(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlankNodeContext extends ParserRuleContext {
	public BlankNodeLabel(): TerminalNode | undefined { return this.tryGetToken(turtleParser.BlankNodeLabel, 0); }
	public ANON(): TerminalNode | undefined { return this.tryGetToken(turtleParser.ANON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return turtleParser.RULE_blankNode; }
	// @Override
	public enterRule(listener: turtleListener): void {
		if (listener.enterBlankNode) {
			listener.enterBlankNode(this);
		}
	}
	// @Override
	public exitRule(listener: turtleListener): void {
		if (listener.exitBlankNode) {
			listener.exitBlankNode(this);
		}
	}
	// @Override
	public accept<Result>(visitor: turtleVisitor<Result>): Result {
		if (visitor.visitBlankNode) {
			return visitor.visitBlankNode(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


