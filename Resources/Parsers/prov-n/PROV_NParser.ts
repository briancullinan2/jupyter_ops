// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/prov-n/PROV_N.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { PROV_NListener } from "./PROV_NListener";
import { PROV_NVisitor } from "./PROV_NVisitor";


export class PROV_NParser extends Parser {
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
	public static readonly DOCUMENT = 30;
	public static readonly ENDDOCUMENT = 31;
	public static readonly BUNDLE = 32;
	public static readonly ENDBUNDLE = 33;
	public static readonly WS = 34;
	public static readonly COMMENT = 35;
	public static readonly LINE_COMMENT = 36;
	public static readonly IRI_REF = 37;
	public static readonly LESS = 38;
	public static readonly GREATER = 39;
	public static readonly DOT = 40;
	public static readonly MINUS = 41;
	public static readonly PREFX = 42;
	public static readonly QUALIFIED_NAME = 43;
	public static readonly HEX = 44;
	public static readonly STRING_LITERAL = 45;
	public static readonly INT_LITERAL = 46;
	public static readonly QUALIFIED_NAME_LITERAL = 47;
	public static readonly ECHAR = 48;
	public static readonly STRING_LITERAL2 = 49;
	public static readonly STRING_LITERAL_LONG2 = 50;
	public static readonly DATETIME = 51;
	public static readonly LANGTAG = 52;
	public static readonly RULE_document = 0;
	public static readonly RULE_namespaceDeclarations = 1;
	public static readonly RULE_defaultNamespaceDeclaration = 2;
	public static readonly RULE_namespaceDeclaration = 3;
	public static readonly RULE_namespace = 4;
	public static readonly RULE_bundle = 5;
	public static readonly RULE_identifier = 6;
	public static readonly RULE_expression = 7;
	public static readonly RULE_entityExpression = 8;
	public static readonly RULE_optionalAttributeValuePairs = 9;
	public static readonly RULE_attributeValuePairs = 10;
	public static readonly RULE_attributeValuePair = 11;
	public static readonly RULE_attribute = 12;
	public static readonly RULE_literal = 13;
	public static readonly RULE_typedLiteral = 14;
	public static readonly RULE_datatype = 15;
	public static readonly RULE_convenienceNotation = 16;
	public static readonly RULE_activityExpression = 17;
	public static readonly RULE_timeOrMarker = 18;
	public static readonly RULE_time = 19;
	public static readonly RULE_generationExpression = 20;
	public static readonly RULE_optionalIdentifier = 21;
	public static readonly RULE_identifierOrMarker = 22;
	public static readonly RULE_eIdentifier = 23;
	public static readonly RULE_eIdentifierOrMarker = 24;
	public static readonly RULE_aIdentifierOrMarker = 25;
	public static readonly RULE_aIdentifier = 26;
	public static readonly RULE_agIdentifierOrMarker = 27;
	public static readonly RULE_agIdentifier = 28;
	public static readonly RULE_cIdentifier = 29;
	public static readonly RULE_gIdentifier = 30;
	public static readonly RULE_gIdentifierOrMarker = 31;
	public static readonly RULE_uIdentifier = 32;
	public static readonly RULE_uIdentifierOrMarker = 33;
	public static readonly RULE_usageExpression = 34;
	public static readonly RULE_startExpression = 35;
	public static readonly RULE_endExpression = 36;
	public static readonly RULE_invalidationExpression = 37;
	public static readonly RULE_communicationExpression = 38;
	public static readonly RULE_agentExpression = 39;
	public static readonly RULE_associationExpression = 40;
	public static readonly RULE_attributionExpression = 41;
	public static readonly RULE_delegationExpression = 42;
	public static readonly RULE_derivationExpression = 43;
	public static readonly RULE_influenceExpression = 44;
	public static readonly RULE_alternateExpression = 45;
	public static readonly RULE_specializationExpression = 46;
	public static readonly RULE_membershipExpression = 47;
	public static readonly RULE_extensibilityExpression = 48;
	public static readonly RULE_extensibilityArgument = 49;
	public static readonly RULE_extensibilityTuple = 50;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"document", "namespaceDeclarations", "defaultNamespaceDeclaration", "namespaceDeclaration", 
		"namespace", "bundle", "identifier", "expression", "entityExpression", 
		"optionalAttributeValuePairs", "attributeValuePairs", "attributeValuePair", 
		"attribute", "literal", "typedLiteral", "datatype", "convenienceNotation", 
		"activityExpression", "timeOrMarker", "time", "generationExpression", 
		"optionalIdentifier", "identifierOrMarker", "eIdentifier", "eIdentifierOrMarker", 
		"aIdentifierOrMarker", "aIdentifier", "agIdentifierOrMarker", "agIdentifier", 
		"cIdentifier", "gIdentifier", "gIdentifierOrMarker", "uIdentifier", "uIdentifierOrMarker", 
		"usageExpression", "startExpression", "endExpression", "invalidationExpression", 
		"communicationExpression", "agentExpression", "associationExpression", 
		"attributionExpression", "delegationExpression", "derivationExpression", 
		"influenceExpression", "alternateExpression", "specializationExpression", 
		"membershipExpression", "extensibilityExpression", "extensibilityArgument", 
		"extensibilityTuple",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'default'", "'prefix'", "'entity'", "'('", "')'", "','", "'['", 
		"']'", "'='", "'%%'", "'activity'", "'wasGeneratedBy'", "';'", "'used'", 
		"'wasStartedBy'", "'wasEndedBy'", "'wasInvalidatedBy'", "'wasInformedBy'", 
		"'agent'", "'wasAssociatedWith'", "'wasAttributedTo'", "'actedOnBehalfOf'", 
		"'wasDerivedFrom'", "'wasInfluencedBy'", "'alternateOf'", "'specializationOf'", 
		"'hadMember'", "'{'", "'}'", "'document'", "'endDocument'", "'bundle'", 
		"'endBundle'", undefined, undefined, undefined, undefined, "'<'", "'>'", 
		"'.'", "'-'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, "DOCUMENT", "ENDDOCUMENT", "BUNDLE", "ENDBUNDLE", 
		"WS", "COMMENT", "LINE_COMMENT", "IRI_REF", "LESS", "GREATER", "DOT", 
		"MINUS", "PREFX", "QUALIFIED_NAME", "HEX", "STRING_LITERAL", "INT_LITERAL", 
		"QUALIFIED_NAME_LITERAL", "ECHAR", "STRING_LITERAL2", "STRING_LITERAL_LONG2", 
		"DATETIME", "LANGTAG",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(PROV_NParser._LITERAL_NAMES, PROV_NParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return PROV_NParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "PROV_N.g4"; }

	// @Override
	public get ruleNames(): string[] { return PROV_NParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return PROV_NParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(PROV_NParser._ATN, this);
	}
	// @RuleVersion(0)
	public document(): DocumentContext {
		let _localctx: DocumentContext = new DocumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, PROV_NParser.RULE_document);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 102;
			this.match(PROV_NParser.DOCUMENT);
			this.state = 104;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PROV_NParser.T__0 || _la === PROV_NParser.T__1) {
				{
				this.state = 103;
				this.namespaceDeclarations();
				}
			}

			this.state = 109;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PROV_NParser.T__2) | (1 << PROV_NParser.T__10) | (1 << PROV_NParser.T__11) | (1 << PROV_NParser.T__13) | (1 << PROV_NParser.T__14) | (1 << PROV_NParser.T__15) | (1 << PROV_NParser.T__16) | (1 << PROV_NParser.T__17) | (1 << PROV_NParser.T__18) | (1 << PROV_NParser.T__19) | (1 << PROV_NParser.T__20) | (1 << PROV_NParser.T__21) | (1 << PROV_NParser.T__22) | (1 << PROV_NParser.T__23) | (1 << PROV_NParser.T__24) | (1 << PROV_NParser.T__25) | (1 << PROV_NParser.T__26))) !== 0) || _la === PROV_NParser.PREFX || _la === PROV_NParser.QUALIFIED_NAME) {
				{
				{
				this.state = 106;
				this.expression();
				}
				}
				this.state = 111;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 119;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PROV_NParser.BUNDLE) {
				{
				this.state = 112;
				this.bundle();
				this.state = 116;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === PROV_NParser.BUNDLE) {
					{
					{
					this.state = 113;
					this.bundle();
					}
					}
					this.state = 118;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 121;
			this.match(PROV_NParser.ENDDOCUMENT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public namespaceDeclarations(): NamespaceDeclarationsContext {
		let _localctx: NamespaceDeclarationsContext = new NamespaceDeclarationsContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, PROV_NParser.RULE_namespaceDeclarations);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 125;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case PROV_NParser.T__0:
				{
				this.state = 123;
				this.defaultNamespaceDeclaration();
				}
				break;
			case PROV_NParser.T__1:
				{
				this.state = 124;
				this.namespaceDeclaration();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 130;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === PROV_NParser.T__1) {
				{
				{
				this.state = 127;
				this.namespaceDeclaration();
				}
				}
				this.state = 132;
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
	public defaultNamespaceDeclaration(): DefaultNamespaceDeclarationContext {
		let _localctx: DefaultNamespaceDeclarationContext = new DefaultNamespaceDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, PROV_NParser.RULE_defaultNamespaceDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 133;
			this.match(PROV_NParser.T__0);
			this.state = 134;
			this.match(PROV_NParser.IRI_REF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public namespaceDeclaration(): NamespaceDeclarationContext {
		let _localctx: NamespaceDeclarationContext = new NamespaceDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, PROV_NParser.RULE_namespaceDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 136;
			this.match(PROV_NParser.T__1);
			this.state = 137;
			this.match(PROV_NParser.PREFX);
			this.state = 138;
			this.namespace();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public namespace(): NamespaceContext {
		let _localctx: NamespaceContext = new NamespaceContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, PROV_NParser.RULE_namespace);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 140;
			this.match(PROV_NParser.IRI_REF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public bundle(): BundleContext {
		let _localctx: BundleContext = new BundleContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, PROV_NParser.RULE_bundle);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 142;
			this.match(PROV_NParser.BUNDLE);
			this.state = 143;
			this.identifier();
			this.state = 145;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PROV_NParser.T__0 || _la === PROV_NParser.T__1) {
				{
				this.state = 144;
				this.namespaceDeclarations();
				}
			}

			this.state = 150;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PROV_NParser.T__2) | (1 << PROV_NParser.T__10) | (1 << PROV_NParser.T__11) | (1 << PROV_NParser.T__13) | (1 << PROV_NParser.T__14) | (1 << PROV_NParser.T__15) | (1 << PROV_NParser.T__16) | (1 << PROV_NParser.T__17) | (1 << PROV_NParser.T__18) | (1 << PROV_NParser.T__19) | (1 << PROV_NParser.T__20) | (1 << PROV_NParser.T__21) | (1 << PROV_NParser.T__22) | (1 << PROV_NParser.T__23) | (1 << PROV_NParser.T__24) | (1 << PROV_NParser.T__25) | (1 << PROV_NParser.T__26))) !== 0) || _la === PROV_NParser.PREFX || _la === PROV_NParser.QUALIFIED_NAME) {
				{
				{
				this.state = 147;
				this.expression();
				}
				}
				this.state = 152;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 153;
			this.match(PROV_NParser.ENDBUNDLE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 12, PROV_NParser.RULE_identifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 155;
			_la = this._input.LA(1);
			if (!(_la === PROV_NParser.PREFX || _la === PROV_NParser.QUALIFIED_NAME)) {
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
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, PROV_NParser.RULE_expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 175;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case PROV_NParser.T__2:
				{
				this.state = 157;
				this.entityExpression();
				}
				break;
			case PROV_NParser.T__10:
				{
				this.state = 158;
				this.activityExpression();
				}
				break;
			case PROV_NParser.T__11:
				{
				this.state = 159;
				this.generationExpression();
				}
				break;
			case PROV_NParser.T__13:
				{
				this.state = 160;
				this.usageExpression();
				}
				break;
			case PROV_NParser.T__14:
				{
				this.state = 161;
				this.startExpression();
				}
				break;
			case PROV_NParser.T__15:
				{
				this.state = 162;
				this.endExpression();
				}
				break;
			case PROV_NParser.T__16:
				{
				this.state = 163;
				this.invalidationExpression();
				}
				break;
			case PROV_NParser.T__17:
				{
				this.state = 164;
				this.communicationExpression();
				}
				break;
			case PROV_NParser.T__18:
				{
				this.state = 165;
				this.agentExpression();
				}
				break;
			case PROV_NParser.T__19:
				{
				this.state = 166;
				this.associationExpression();
				}
				break;
			case PROV_NParser.T__20:
				{
				this.state = 167;
				this.attributionExpression();
				}
				break;
			case PROV_NParser.T__21:
				{
				this.state = 168;
				this.delegationExpression();
				}
				break;
			case PROV_NParser.T__22:
				{
				this.state = 169;
				this.derivationExpression();
				}
				break;
			case PROV_NParser.T__23:
				{
				this.state = 170;
				this.influenceExpression();
				}
				break;
			case PROV_NParser.T__24:
				{
				this.state = 171;
				this.alternateExpression();
				}
				break;
			case PROV_NParser.T__25:
				{
				this.state = 172;
				this.specializationExpression();
				}
				break;
			case PROV_NParser.T__26:
				{
				this.state = 173;
				this.membershipExpression();
				}
				break;
			case PROV_NParser.PREFX:
			case PROV_NParser.QUALIFIED_NAME:
				{
				this.state = 174;
				this.extensibilityExpression();
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
	public entityExpression(): EntityExpressionContext {
		let _localctx: EntityExpressionContext = new EntityExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, PROV_NParser.RULE_entityExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 177;
			this.match(PROV_NParser.T__2);
			this.state = 178;
			this.match(PROV_NParser.T__3);
			this.state = 179;
			this.identifier();
			this.state = 180;
			this.optionalAttributeValuePairs();
			this.state = 181;
			this.match(PROV_NParser.T__4);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public optionalAttributeValuePairs(): OptionalAttributeValuePairsContext {
		let _localctx: OptionalAttributeValuePairsContext = new OptionalAttributeValuePairsContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, PROV_NParser.RULE_optionalAttributeValuePairs);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 188;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PROV_NParser.T__5) {
				{
				this.state = 183;
				this.match(PROV_NParser.T__5);
				this.state = 184;
				this.match(PROV_NParser.T__6);
				this.state = 185;
				this.attributeValuePairs();
				this.state = 186;
				this.match(PROV_NParser.T__7);
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
	public attributeValuePairs(): AttributeValuePairsContext {
		let _localctx: AttributeValuePairsContext = new AttributeValuePairsContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, PROV_NParser.RULE_attributeValuePairs);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 199;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case PROV_NParser.T__7:
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			case PROV_NParser.PREFX:
			case PROV_NParser.QUALIFIED_NAME:
				{
				this.state = 191;
				this.attributeValuePair();
				this.state = 196;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === PROV_NParser.T__5) {
					{
					{
					this.state = 192;
					this.match(PROV_NParser.T__5);
					this.state = 193;
					this.attributeValuePair();
					}
					}
					this.state = 198;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
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
	public attributeValuePair(): AttributeValuePairContext {
		let _localctx: AttributeValuePairContext = new AttributeValuePairContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, PROV_NParser.RULE_attributeValuePair);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 201;
			this.attribute();
			this.state = 202;
			this.match(PROV_NParser.T__8);
			this.state = 203;
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
	public attribute(): AttributeContext {
		let _localctx: AttributeContext = new AttributeContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, PROV_NParser.RULE_attribute);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 205;
			_la = this._input.LA(1);
			if (!(_la === PROV_NParser.PREFX || _la === PROV_NParser.QUALIFIED_NAME)) {
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
		this.enterRule(_localctx, 26, PROV_NParser.RULE_literal);
		try {
			this.state = 209;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 207;
				this.typedLiteral();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 208;
				this.convenienceNotation();
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
	public typedLiteral(): TypedLiteralContext {
		let _localctx: TypedLiteralContext = new TypedLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, PROV_NParser.RULE_typedLiteral);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 211;
			this.match(PROV_NParser.STRING_LITERAL);
			this.state = 212;
			this.match(PROV_NParser.T__9);
			this.state = 213;
			this.datatype();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public datatype(): DatatypeContext {
		let _localctx: DatatypeContext = new DatatypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, PROV_NParser.RULE_datatype);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 215;
			_la = this._input.LA(1);
			if (!(_la === PROV_NParser.PREFX || _la === PROV_NParser.QUALIFIED_NAME)) {
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
	public convenienceNotation(): ConvenienceNotationContext {
		let _localctx: ConvenienceNotationContext = new ConvenienceNotationContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, PROV_NParser.RULE_convenienceNotation);
		let _la: number;
		try {
			this.state = 223;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case PROV_NParser.STRING_LITERAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 217;
				this.match(PROV_NParser.STRING_LITERAL);
				this.state = 219;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === PROV_NParser.LANGTAG) {
					{
					this.state = 218;
					this.match(PROV_NParser.LANGTAG);
					}
				}

				}
				break;
			case PROV_NParser.INT_LITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 221;
				this.match(PROV_NParser.INT_LITERAL);
				}
				break;
			case PROV_NParser.QUALIFIED_NAME_LITERAL:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 222;
				this.match(PROV_NParser.QUALIFIED_NAME_LITERAL);
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
	public activityExpression(): ActivityExpressionContext {
		let _localctx: ActivityExpressionContext = new ActivityExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, PROV_NParser.RULE_activityExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 225;
			this.match(PROV_NParser.T__10);
			this.state = 226;
			this.match(PROV_NParser.T__3);
			this.state = 227;
			this.identifier();
			this.state = 233;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
			case 1:
				{
				this.state = 228;
				this.match(PROV_NParser.T__5);
				this.state = 229;
				this.timeOrMarker();
				this.state = 230;
				this.match(PROV_NParser.T__5);
				this.state = 231;
				this.timeOrMarker();
				}
				break;
			}
			this.state = 235;
			this.optionalAttributeValuePairs();
			this.state = 236;
			this.match(PROV_NParser.T__4);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public timeOrMarker(): TimeOrMarkerContext {
		let _localctx: TimeOrMarkerContext = new TimeOrMarkerContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, PROV_NParser.RULE_timeOrMarker);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 240;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case PROV_NParser.DATETIME:
				{
				this.state = 238;
				this.time();
				}
				break;
			case PROV_NParser.MINUS:
				{
				this.state = 239;
				this.match(PROV_NParser.MINUS);
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
	public time(): TimeContext {
		let _localctx: TimeContext = new TimeContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, PROV_NParser.RULE_time);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 242;
			this.match(PROV_NParser.DATETIME);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public generationExpression(): GenerationExpressionContext {
		let _localctx: GenerationExpressionContext = new GenerationExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, PROV_NParser.RULE_generationExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 244;
			this.match(PROV_NParser.T__11);
			this.state = 245;
			this.match(PROV_NParser.T__3);
			this.state = 246;
			this.optionalIdentifier();
			this.state = 247;
			this.eIdentifier();
			this.state = 253;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
			case 1:
				{
				this.state = 248;
				this.match(PROV_NParser.T__5);
				this.state = 249;
				this.aIdentifierOrMarker();
				this.state = 250;
				this.match(PROV_NParser.T__5);
				this.state = 251;
				this.timeOrMarker();
				}
				break;
			}
			this.state = 255;
			this.optionalAttributeValuePairs();
			this.state = 256;
			this.match(PROV_NParser.T__4);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public optionalIdentifier(): OptionalIdentifierContext {
		let _localctx: OptionalIdentifierContext = new OptionalIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, PROV_NParser.RULE_optionalIdentifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 261;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 18, this._ctx) ) {
			case 1:
				{
				this.state = 258;
				this.identifierOrMarker();
				this.state = 259;
				this.match(PROV_NParser.T__12);
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
	public identifierOrMarker(): IdentifierOrMarkerContext {
		let _localctx: IdentifierOrMarkerContext = new IdentifierOrMarkerContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, PROV_NParser.RULE_identifierOrMarker);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 265;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case PROV_NParser.PREFX:
			case PROV_NParser.QUALIFIED_NAME:
				{
				this.state = 263;
				this.identifier();
				}
				break;
			case PROV_NParser.MINUS:
				{
				this.state = 264;
				this.match(PROV_NParser.MINUS);
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
	public eIdentifier(): EIdentifierContext {
		let _localctx: EIdentifierContext = new EIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, PROV_NParser.RULE_eIdentifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 267;
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
	public eIdentifierOrMarker(): EIdentifierOrMarkerContext {
		let _localctx: EIdentifierOrMarkerContext = new EIdentifierOrMarkerContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, PROV_NParser.RULE_eIdentifierOrMarker);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 271;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case PROV_NParser.PREFX:
			case PROV_NParser.QUALIFIED_NAME:
				{
				this.state = 269;
				this.eIdentifier();
				}
				break;
			case PROV_NParser.MINUS:
				{
				this.state = 270;
				this.match(PROV_NParser.MINUS);
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
	public aIdentifierOrMarker(): AIdentifierOrMarkerContext {
		let _localctx: AIdentifierOrMarkerContext = new AIdentifierOrMarkerContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, PROV_NParser.RULE_aIdentifierOrMarker);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 275;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case PROV_NParser.PREFX:
			case PROV_NParser.QUALIFIED_NAME:
				{
				this.state = 273;
				this.aIdentifier();
				}
				break;
			case PROV_NParser.MINUS:
				{
				this.state = 274;
				this.match(PROV_NParser.MINUS);
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
	public aIdentifier(): AIdentifierContext {
		let _localctx: AIdentifierContext = new AIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, PROV_NParser.RULE_aIdentifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 277;
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
	public agIdentifierOrMarker(): AgIdentifierOrMarkerContext {
		let _localctx: AgIdentifierOrMarkerContext = new AgIdentifierOrMarkerContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, PROV_NParser.RULE_agIdentifierOrMarker);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 281;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case PROV_NParser.PREFX:
			case PROV_NParser.QUALIFIED_NAME:
				{
				this.state = 279;
				this.agIdentifier();
				}
				break;
			case PROV_NParser.MINUS:
				{
				this.state = 280;
				this.match(PROV_NParser.MINUS);
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
	public agIdentifier(): AgIdentifierContext {
		let _localctx: AgIdentifierContext = new AgIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, PROV_NParser.RULE_agIdentifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 283;
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
	public cIdentifier(): CIdentifierContext {
		let _localctx: CIdentifierContext = new CIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, PROV_NParser.RULE_cIdentifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 285;
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
	public gIdentifier(): GIdentifierContext {
		let _localctx: GIdentifierContext = new GIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, PROV_NParser.RULE_gIdentifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 287;
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
	public gIdentifierOrMarker(): GIdentifierOrMarkerContext {
		let _localctx: GIdentifierOrMarkerContext = new GIdentifierOrMarkerContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, PROV_NParser.RULE_gIdentifierOrMarker);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 291;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case PROV_NParser.PREFX:
			case PROV_NParser.QUALIFIED_NAME:
				{
				this.state = 289;
				this.gIdentifier();
				}
				break;
			case PROV_NParser.MINUS:
				{
				this.state = 290;
				this.match(PROV_NParser.MINUS);
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
	public uIdentifier(): UIdentifierContext {
		let _localctx: UIdentifierContext = new UIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, PROV_NParser.RULE_uIdentifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 293;
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
	public uIdentifierOrMarker(): UIdentifierOrMarkerContext {
		let _localctx: UIdentifierOrMarkerContext = new UIdentifierOrMarkerContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, PROV_NParser.RULE_uIdentifierOrMarker);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 297;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case PROV_NParser.PREFX:
			case PROV_NParser.QUALIFIED_NAME:
				{
				this.state = 295;
				this.uIdentifier();
				}
				break;
			case PROV_NParser.MINUS:
				{
				this.state = 296;
				this.match(PROV_NParser.MINUS);
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
	public usageExpression(): UsageExpressionContext {
		let _localctx: UsageExpressionContext = new UsageExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, PROV_NParser.RULE_usageExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 299;
			this.match(PROV_NParser.T__13);
			this.state = 300;
			this.match(PROV_NParser.T__3);
			this.state = 301;
			this.optionalIdentifier();
			this.state = 302;
			this.aIdentifier();
			this.state = 308;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 25, this._ctx) ) {
			case 1:
				{
				this.state = 303;
				this.match(PROV_NParser.T__5);
				this.state = 304;
				this.eIdentifierOrMarker();
				this.state = 305;
				this.match(PROV_NParser.T__5);
				this.state = 306;
				this.timeOrMarker();
				}
				break;
			}
			this.state = 310;
			this.optionalAttributeValuePairs();
			this.state = 311;
			this.match(PROV_NParser.T__4);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public startExpression(): StartExpressionContext {
		let _localctx: StartExpressionContext = new StartExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, PROV_NParser.RULE_startExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 313;
			this.match(PROV_NParser.T__14);
			this.state = 314;
			this.match(PROV_NParser.T__3);
			this.state = 315;
			this.optionalIdentifier();
			this.state = 316;
			this.aIdentifier();
			this.state = 324;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 26, this._ctx) ) {
			case 1:
				{
				this.state = 317;
				this.match(PROV_NParser.T__5);
				this.state = 318;
				this.eIdentifierOrMarker();
				this.state = 319;
				this.match(PROV_NParser.T__5);
				this.state = 320;
				this.aIdentifierOrMarker();
				this.state = 321;
				this.match(PROV_NParser.T__5);
				this.state = 322;
				this.timeOrMarker();
				}
				break;
			}
			this.state = 326;
			this.optionalAttributeValuePairs();
			this.state = 327;
			this.match(PROV_NParser.T__4);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public endExpression(): EndExpressionContext {
		let _localctx: EndExpressionContext = new EndExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, PROV_NParser.RULE_endExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 329;
			this.match(PROV_NParser.T__15);
			this.state = 330;
			this.match(PROV_NParser.T__3);
			this.state = 331;
			this.optionalIdentifier();
			this.state = 332;
			this.aIdentifier();
			this.state = 340;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 27, this._ctx) ) {
			case 1:
				{
				this.state = 333;
				this.match(PROV_NParser.T__5);
				this.state = 334;
				this.eIdentifierOrMarker();
				this.state = 335;
				this.match(PROV_NParser.T__5);
				this.state = 336;
				this.aIdentifierOrMarker();
				this.state = 337;
				this.match(PROV_NParser.T__5);
				this.state = 338;
				this.timeOrMarker();
				}
				break;
			}
			this.state = 342;
			this.optionalAttributeValuePairs();
			this.state = 343;
			this.match(PROV_NParser.T__4);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public invalidationExpression(): InvalidationExpressionContext {
		let _localctx: InvalidationExpressionContext = new InvalidationExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, PROV_NParser.RULE_invalidationExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 345;
			this.match(PROV_NParser.T__16);
			this.state = 346;
			this.match(PROV_NParser.T__3);
			this.state = 347;
			this.optionalIdentifier();
			this.state = 348;
			this.eIdentifier();
			this.state = 354;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 28, this._ctx) ) {
			case 1:
				{
				this.state = 349;
				this.match(PROV_NParser.T__5);
				this.state = 350;
				this.aIdentifierOrMarker();
				this.state = 351;
				this.match(PROV_NParser.T__5);
				this.state = 352;
				this.timeOrMarker();
				}
				break;
			}
			this.state = 356;
			this.optionalAttributeValuePairs();
			this.state = 357;
			this.match(PROV_NParser.T__4);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public communicationExpression(): CommunicationExpressionContext {
		let _localctx: CommunicationExpressionContext = new CommunicationExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, PROV_NParser.RULE_communicationExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 359;
			this.match(PROV_NParser.T__17);
			this.state = 360;
			this.match(PROV_NParser.T__3);
			this.state = 361;
			this.optionalIdentifier();
			this.state = 362;
			this.aIdentifier();
			this.state = 363;
			this.match(PROV_NParser.T__5);
			this.state = 364;
			this.aIdentifier();
			this.state = 365;
			this.optionalAttributeValuePairs();
			this.state = 366;
			this.match(PROV_NParser.T__4);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public agentExpression(): AgentExpressionContext {
		let _localctx: AgentExpressionContext = new AgentExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, PROV_NParser.RULE_agentExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 368;
			this.match(PROV_NParser.T__18);
			this.state = 369;
			this.match(PROV_NParser.T__3);
			this.state = 370;
			this.identifier();
			this.state = 371;
			this.optionalAttributeValuePairs();
			this.state = 372;
			this.match(PROV_NParser.T__4);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public associationExpression(): AssociationExpressionContext {
		let _localctx: AssociationExpressionContext = new AssociationExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, PROV_NParser.RULE_associationExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 374;
			this.match(PROV_NParser.T__19);
			this.state = 375;
			this.match(PROV_NParser.T__3);
			this.state = 376;
			this.optionalIdentifier();
			this.state = 377;
			this.aIdentifier();
			this.state = 383;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 29, this._ctx) ) {
			case 1:
				{
				this.state = 378;
				this.match(PROV_NParser.T__5);
				this.state = 379;
				this.agIdentifierOrMarker();
				this.state = 380;
				this.match(PROV_NParser.T__5);
				this.state = 381;
				this.eIdentifierOrMarker();
				}
				break;
			}
			this.state = 385;
			this.optionalAttributeValuePairs();
			this.state = 386;
			this.match(PROV_NParser.T__4);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public attributionExpression(): AttributionExpressionContext {
		let _localctx: AttributionExpressionContext = new AttributionExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, PROV_NParser.RULE_attributionExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 388;
			this.match(PROV_NParser.T__20);
			this.state = 389;
			this.match(PROV_NParser.T__3);
			this.state = 390;
			this.optionalIdentifier();
			this.state = 391;
			this.eIdentifier();
			this.state = 392;
			this.match(PROV_NParser.T__5);
			this.state = 393;
			this.agIdentifier();
			this.state = 394;
			this.optionalAttributeValuePairs();
			this.state = 395;
			this.match(PROV_NParser.T__4);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public delegationExpression(): DelegationExpressionContext {
		let _localctx: DelegationExpressionContext = new DelegationExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, PROV_NParser.RULE_delegationExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 397;
			this.match(PROV_NParser.T__21);
			this.state = 398;
			this.match(PROV_NParser.T__3);
			this.state = 399;
			this.optionalIdentifier();
			this.state = 400;
			this.agIdentifier();
			this.state = 401;
			this.match(PROV_NParser.T__5);
			this.state = 402;
			this.agIdentifier();
			this.state = 405;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
			case 1:
				{
				this.state = 403;
				this.match(PROV_NParser.T__5);
				this.state = 404;
				this.aIdentifierOrMarker();
				}
				break;
			}
			this.state = 407;
			this.optionalAttributeValuePairs();
			this.state = 408;
			this.match(PROV_NParser.T__4);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public derivationExpression(): DerivationExpressionContext {
		let _localctx: DerivationExpressionContext = new DerivationExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, PROV_NParser.RULE_derivationExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 410;
			this.match(PROV_NParser.T__22);
			this.state = 411;
			this.match(PROV_NParser.T__3);
			this.state = 412;
			this.optionalIdentifier();
			this.state = 413;
			this.eIdentifier();
			this.state = 414;
			this.match(PROV_NParser.T__5);
			this.state = 415;
			this.eIdentifier();
			this.state = 423;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 31, this._ctx) ) {
			case 1:
				{
				this.state = 416;
				this.match(PROV_NParser.T__5);
				this.state = 417;
				this.aIdentifierOrMarker();
				this.state = 418;
				this.match(PROV_NParser.T__5);
				this.state = 419;
				this.gIdentifierOrMarker();
				this.state = 420;
				this.match(PROV_NParser.T__5);
				this.state = 421;
				this.uIdentifierOrMarker();
				}
				break;
			}
			this.state = 425;
			this.optionalAttributeValuePairs();
			this.state = 426;
			this.match(PROV_NParser.T__4);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public influenceExpression(): InfluenceExpressionContext {
		let _localctx: InfluenceExpressionContext = new InfluenceExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, PROV_NParser.RULE_influenceExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 428;
			this.match(PROV_NParser.T__23);
			this.state = 429;
			this.match(PROV_NParser.T__3);
			this.state = 430;
			this.optionalIdentifier();
			this.state = 431;
			this.eIdentifier();
			this.state = 432;
			this.match(PROV_NParser.T__5);
			this.state = 433;
			this.eIdentifier();
			this.state = 434;
			this.optionalAttributeValuePairs();
			this.state = 435;
			this.match(PROV_NParser.T__4);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public alternateExpression(): AlternateExpressionContext {
		let _localctx: AlternateExpressionContext = new AlternateExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, PROV_NParser.RULE_alternateExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 437;
			this.match(PROV_NParser.T__24);
			this.state = 438;
			this.match(PROV_NParser.T__3);
			this.state = 439;
			this.eIdentifier();
			this.state = 440;
			this.match(PROV_NParser.T__5);
			this.state = 441;
			this.eIdentifier();
			this.state = 442;
			this.match(PROV_NParser.T__4);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public specializationExpression(): SpecializationExpressionContext {
		let _localctx: SpecializationExpressionContext = new SpecializationExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, PROV_NParser.RULE_specializationExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 444;
			this.match(PROV_NParser.T__25);
			this.state = 445;
			this.match(PROV_NParser.T__3);
			this.state = 446;
			this.eIdentifier();
			this.state = 447;
			this.match(PROV_NParser.T__5);
			this.state = 448;
			this.eIdentifier();
			this.state = 449;
			this.match(PROV_NParser.T__4);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public membershipExpression(): MembershipExpressionContext {
		let _localctx: MembershipExpressionContext = new MembershipExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, PROV_NParser.RULE_membershipExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 451;
			this.match(PROV_NParser.T__26);
			this.state = 452;
			this.match(PROV_NParser.T__3);
			this.state = 453;
			this.cIdentifier();
			this.state = 454;
			this.match(PROV_NParser.T__5);
			this.state = 455;
			this.eIdentifier();
			this.state = 456;
			this.match(PROV_NParser.T__4);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public extensibilityExpression(): ExtensibilityExpressionContext {
		let _localctx: ExtensibilityExpressionContext = new ExtensibilityExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, PROV_NParser.RULE_extensibilityExpression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 458;
			_la = this._input.LA(1);
			if (!(_la === PROV_NParser.PREFX || _la === PROV_NParser.QUALIFIED_NAME)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 459;
			this.match(PROV_NParser.T__3);
			this.state = 460;
			this.optionalIdentifier();
			this.state = 461;
			this.extensibilityArgument();
			this.state = 466;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 462;
					this.match(PROV_NParser.T__5);
					this.state = 463;
					this.extensibilityArgument();
					}
					}
				}
				this.state = 468;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
			}
			this.state = 469;
			this.optionalAttributeValuePairs();
			this.state = 470;
			this.match(PROV_NParser.T__4);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public extensibilityArgument(): ExtensibilityArgumentContext {
		let _localctx: ExtensibilityArgumentContext = new ExtensibilityArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, PROV_NParser.RULE_extensibilityArgument);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 477;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 33, this._ctx) ) {
			case 1:
				{
				this.state = 472;
				this.identifierOrMarker();
				}
				break;

			case 2:
				{
				this.state = 473;
				this.literal();
				}
				break;

			case 3:
				{
				this.state = 474;
				this.time();
				}
				break;

			case 4:
				{
				this.state = 475;
				this.extensibilityExpression();
				}
				break;

			case 5:
				{
				this.state = 476;
				this.extensibilityTuple();
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
	public extensibilityTuple(): ExtensibilityTupleContext {
		let _localctx: ExtensibilityTupleContext = new ExtensibilityTupleContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, PROV_NParser.RULE_extensibilityTuple);
		let _la: number;
		try {
			this.state = 501;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case PROV_NParser.T__27:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 479;
				this.match(PROV_NParser.T__27);
				this.state = 480;
				this.extensibilityArgument();
				this.state = 485;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === PROV_NParser.T__5) {
					{
					{
					this.state = 481;
					this.match(PROV_NParser.T__5);
					this.state = 482;
					this.extensibilityArgument();
					}
					}
					this.state = 487;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 488;
				this.match(PROV_NParser.T__28);
				}
				break;
			case PROV_NParser.T__3:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 490;
				this.match(PROV_NParser.T__3);
				this.state = 491;
				this.extensibilityArgument();
				this.state = 496;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === PROV_NParser.T__5) {
					{
					{
					this.state = 492;
					this.match(PROV_NParser.T__5);
					this.state = 493;
					this.extensibilityArgument();
					}
					}
					this.state = 498;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 499;
				this.match(PROV_NParser.T__4);
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

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x036\u01FA\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
		"\t4\x03\x02\x03\x02\x05\x02k\n\x02\x03\x02\x07\x02n\n\x02\f\x02\x0E\x02" +
		"q\v\x02\x03\x02\x03\x02\x07\x02u\n\x02\f\x02\x0E\x02x\v\x02\x05\x02z\n" +
		"\x02\x03\x02\x03\x02\x03\x03\x03\x03\x05\x03\x80\n\x03\x03\x03\x07\x03" +
		"\x83\n\x03\f\x03\x0E\x03\x86\v\x03\x03\x04\x03\x04\x03\x04\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x05\x07\x94" +
		"\n\x07\x03\x07\x07\x07\x97\n\x07\f\x07\x0E\x07\x9A\v\x07\x03\x07\x03\x07" +
		"\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x05\t\xB2\n\t\x03\n" +
		"\x03\n\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x05\v\xBF" +
		"\n\v\x03\f\x03\f\x03\f\x03\f\x07\f\xC5\n\f\f\f\x0E\f\xC8\v\f\x05\f\xCA" +
		"\n\f\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x05\x0F\xD4" +
		"\n\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x12\x03\x12" +
		"\x05\x12\xDE\n\x12\x03\x12\x03\x12\x05\x12\xE2\n\x12\x03\x13\x03\x13\x03" +
		"\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13\xEC\n\x13\x03\x13" +
		"\x03\x13\x03\x13\x03\x14\x03\x14\x05\x14\xF3\n\x14\x03\x15\x03\x15\x03" +
		"\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x05" +
		"\x16\u0100\n\x16\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x05\x17" +
		"\u0108\n\x17\x03\x18\x03\x18\x05\x18\u010C\n\x18\x03\x19\x03\x19\x03\x1A" +
		"\x03\x1A\x05\x1A\u0112\n\x1A\x03\x1B\x03\x1B\x05\x1B\u0116\n\x1B\x03\x1C" +
		"\x03\x1C\x03\x1D\x03\x1D\x05\x1D\u011C\n\x1D\x03\x1E\x03\x1E\x03\x1F\x03" +
		"\x1F\x03 \x03 \x03!\x03!\x05!\u0126\n!\x03\"\x03\"\x03#\x03#\x05#\u012C" +
		"\n#\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x05$\u0137\n$\x03$\x03" +
		"$\x03$\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x05%\u0147" +
		"\n%\x03%\x03%\x03%\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03" +
		"&\x05&\u0157\n&\x03&\x03&\x03&\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03" +
		"\'\x03\'\x03\'\x05\'\u0165\n\'\x03\'\x03\'\x03\'\x03(\x03(\x03(\x03(\x03" +
		"(\x03(\x03(\x03(\x03(\x03)\x03)\x03)\x03)\x03)\x03)\x03*\x03*\x03*\x03" +
		"*\x03*\x03*\x03*\x03*\x03*\x05*\u0182\n*\x03*\x03*\x03*\x03+\x03+\x03" +
		"+\x03+\x03+\x03+\x03+\x03+\x03+\x03,\x03,\x03,\x03,\x03,\x03,\x03,\x03" +
		",\x05,\u0198\n,\x03,\x03,\x03,\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03" +
		"-\x03-\x03-\x03-\x03-\x03-\x05-\u01AA\n-\x03-\x03-\x03-\x03.\x03.\x03" +
		".\x03.\x03.\x03.\x03.\x03.\x03.\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03" +
		"0\x030\x030\x030\x030\x030\x030\x031\x031\x031\x031\x031\x031\x031\x03" +
		"2\x032\x032\x032\x032\x032\x072\u01D3\n2\f2\x0E2\u01D6\v2\x032\x032\x03" +
		"2\x033\x033\x033\x033\x033\x053\u01E0\n3\x034\x034\x034\x034\x074\u01E6" +
		"\n4\f4\x0E4\u01E9\v4\x034\x034\x034\x034\x034\x034\x074\u01F1\n4\f4\x0E" +
		"4\u01F4\v4\x034\x034\x054\u01F8\n4\x034\x02\x02\x025\x02\x02\x04\x02\x06" +
		"\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02" +
		"\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x02" +
		"2\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02" +
		"N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02\x02" +
		"\x03\x03\x02,-\x02\u01FF\x02h\x03\x02\x02\x02\x04\x7F\x03\x02\x02\x02" +
		"\x06\x87\x03\x02\x02\x02\b\x8A\x03\x02\x02\x02\n\x8E\x03\x02\x02\x02\f" +
		"\x90\x03\x02\x02\x02\x0E\x9D\x03\x02\x02\x02\x10\xB1\x03\x02\x02\x02\x12" +
		"\xB3\x03\x02\x02\x02\x14\xBE\x03\x02\x02\x02\x16\xC9\x03\x02\x02\x02\x18" +
		"\xCB\x03\x02\x02\x02\x1A\xCF\x03\x02\x02\x02\x1C\xD3\x03\x02\x02\x02\x1E" +
		"\xD5\x03\x02\x02\x02 \xD9\x03\x02\x02\x02\"\xE1\x03\x02\x02\x02$\xE3\x03" +
		"\x02\x02\x02&\xF2\x03\x02\x02\x02(\xF4\x03\x02\x02\x02*\xF6\x03\x02\x02" +
		"\x02,\u0107\x03\x02\x02\x02.\u010B\x03\x02\x02\x020\u010D\x03\x02\x02" +
		"\x022\u0111\x03\x02\x02\x024\u0115\x03\x02\x02\x026\u0117\x03\x02\x02" +
		"\x028\u011B\x03\x02\x02\x02:\u011D\x03\x02\x02\x02<\u011F\x03\x02\x02" +
		"\x02>\u0121\x03\x02\x02\x02@\u0125\x03\x02\x02\x02B\u0127\x03\x02\x02" +
		"\x02D\u012B\x03\x02\x02\x02F\u012D\x03\x02\x02\x02H\u013B\x03\x02\x02" +
		"\x02J\u014B\x03\x02\x02\x02L\u015B\x03\x02\x02\x02N\u0169\x03\x02\x02" +
		"\x02P\u0172\x03\x02\x02\x02R\u0178\x03\x02\x02\x02T\u0186\x03\x02\x02" +
		"\x02V\u018F\x03\x02\x02\x02X\u019C\x03\x02\x02\x02Z\u01AE\x03\x02\x02" +
		"\x02\\\u01B7\x03\x02\x02\x02^\u01BE\x03\x02\x02\x02`\u01C5\x03\x02\x02" +
		"\x02b\u01CC\x03\x02\x02\x02d\u01DF\x03\x02\x02\x02f\u01F7\x03\x02\x02" +
		"\x02hj\x07 \x02\x02ik\x05\x04\x03\x02ji\x03\x02\x02\x02jk\x03\x02\x02" +
		"\x02ko\x03\x02\x02\x02ln\x05\x10\t\x02ml\x03\x02\x02\x02nq\x03\x02\x02" +
		"\x02om\x03\x02\x02\x02op\x03\x02\x02\x02py\x03\x02\x02\x02qo\x03\x02\x02" +
		"\x02rv\x05\f\x07\x02su\x05\f\x07\x02ts\x03\x02\x02\x02ux\x03\x02\x02\x02" +
		"vt\x03\x02\x02\x02vw\x03\x02\x02\x02wz\x03\x02\x02\x02xv\x03\x02\x02\x02" +
		"yr\x03\x02\x02\x02yz\x03\x02\x02\x02z{\x03\x02\x02\x02{|\x07!\x02\x02" +
		"|\x03\x03\x02\x02\x02}\x80\x05\x06\x04\x02~\x80\x05\b\x05\x02\x7F}\x03" +
		"\x02\x02\x02\x7F~\x03\x02\x02\x02\x80\x84\x03\x02\x02\x02\x81\x83\x05" +
		"\b\x05\x02\x82\x81\x03\x02\x02\x02\x83\x86\x03\x02\x02\x02\x84\x82\x03" +
		"\x02\x02\x02\x84\x85\x03\x02\x02\x02\x85\x05\x03\x02\x02\x02\x86\x84\x03" +
		"\x02\x02\x02\x87\x88\x07\x03\x02\x02\x88\x89\x07\'\x02\x02\x89\x07\x03" +
		"\x02\x02\x02\x8A\x8B\x07\x04\x02\x02\x8B\x8C\x07,\x02\x02\x8C\x8D\x05" +
		"\n\x06\x02\x8D\t\x03\x02\x02\x02\x8E\x8F\x07\'\x02\x02\x8F\v\x03\x02\x02" +
		"\x02\x90\x91\x07\"\x02\x02\x91\x93\x05\x0E\b\x02\x92\x94\x05\x04\x03\x02" +
		"\x93\x92\x03\x02\x02\x02\x93\x94\x03\x02\x02\x02\x94\x98\x03\x02\x02\x02" +
		"\x95\x97\x05\x10\t\x02\x96\x95\x03\x02\x02\x02\x97\x9A\x03\x02\x02\x02" +
		"\x98\x96\x03\x02\x02\x02\x98\x99\x03\x02\x02\x02\x99\x9B\x03\x02\x02\x02" +
		"\x9A\x98\x03\x02\x02\x02\x9B\x9C\x07#\x02\x02\x9C\r\x03\x02\x02\x02\x9D" +
		"\x9E\t\x02\x02\x02\x9E\x0F\x03\x02\x02\x02\x9F\xB2\x05\x12\n\x02\xA0\xB2" +
		"\x05$\x13\x02\xA1\xB2\x05*\x16\x02\xA2\xB2\x05F$\x02\xA3\xB2\x05H%\x02" +
		"\xA4\xB2\x05J&\x02\xA5\xB2\x05L\'\x02\xA6\xB2\x05N(\x02\xA7\xB2\x05P)" +
		"\x02\xA8\xB2\x05R*\x02\xA9\xB2\x05T+\x02\xAA\xB2\x05V,\x02\xAB\xB2\x05" +
		"X-\x02\xAC\xB2\x05Z.\x02\xAD\xB2\x05\\/\x02\xAE\xB2\x05^0\x02\xAF\xB2" +
		"\x05`1\x02\xB0\xB2\x05b2\x02\xB1\x9F\x03\x02\x02\x02\xB1\xA0\x03\x02\x02" +
		"\x02\xB1\xA1\x03\x02\x02\x02\xB1\xA2\x03\x02\x02\x02\xB1\xA3\x03\x02\x02" +
		"\x02\xB1\xA4\x03\x02\x02\x02\xB1\xA5\x03\x02\x02\x02\xB1\xA6\x03\x02\x02" +
		"\x02\xB1\xA7\x03\x02\x02\x02\xB1\xA8\x03\x02\x02\x02\xB1\xA9\x03\x02\x02" +
		"\x02\xB1\xAA\x03\x02\x02\x02\xB1\xAB\x03\x02\x02\x02\xB1\xAC\x03\x02\x02" +
		"\x02\xB1\xAD\x03\x02\x02\x02\xB1\xAE\x03\x02\x02\x02\xB1\xAF\x03\x02\x02" +
		"\x02\xB1\xB0\x03\x02\x02\x02\xB2\x11\x03\x02\x02\x02\xB3\xB4\x07\x05\x02" +
		"\x02\xB4\xB5\x07\x06\x02\x02\xB5\xB6\x05\x0E\b\x02\xB6\xB7\x05\x14\v\x02" +
		"\xB7\xB8\x07\x07\x02\x02\xB8\x13\x03\x02\x02\x02\xB9\xBA\x07\b\x02\x02" +
		"\xBA\xBB\x07\t\x02\x02\xBB\xBC\x05\x16\f\x02\xBC\xBD\x07\n\x02\x02\xBD" +
		"\xBF\x03\x02\x02\x02\xBE\xB9\x03\x02\x02\x02\xBE\xBF\x03\x02\x02\x02\xBF" +
		"\x15\x03\x02\x02\x02\xC0\xCA\x03\x02\x02\x02\xC1\xC6\x05\x18\r\x02\xC2" +
		"\xC3\x07\b\x02\x02\xC3\xC5\x05\x18\r\x02\xC4\xC2\x03\x02\x02\x02\xC5\xC8" +
		"\x03\x02\x02\x02\xC6\xC4\x03\x02\x02\x02\xC6\xC7\x03\x02\x02\x02\xC7\xCA" +
		"\x03\x02\x02\x02\xC8\xC6\x03\x02\x02\x02\xC9\xC0\x03\x02\x02\x02\xC9\xC1" +
		"\x03\x02\x02\x02\xCA\x17\x03\x02\x02\x02\xCB\xCC\x05\x1A\x0E\x02\xCC\xCD" +
		"\x07\v\x02\x02\xCD\xCE\x05\x1C\x0F\x02\xCE\x19\x03\x02\x02\x02\xCF\xD0" +
		"\t\x02\x02\x02\xD0\x1B\x03\x02\x02\x02\xD1\xD4\x05\x1E\x10\x02\xD2\xD4" +
		"\x05\"\x12\x02\xD3\xD1\x03\x02\x02\x02\xD3\xD2\x03\x02\x02\x02\xD4\x1D" +
		"\x03\x02\x02\x02\xD5\xD6\x07/\x02\x02\xD6\xD7\x07\f\x02\x02\xD7\xD8\x05" +
		" \x11\x02\xD8\x1F\x03\x02\x02\x02\xD9\xDA\t\x02\x02\x02\xDA!\x03\x02\x02" +
		"\x02\xDB\xDD\x07/\x02\x02\xDC\xDE\x076\x02\x02\xDD\xDC\x03\x02\x02\x02" +
		"\xDD\xDE\x03\x02\x02\x02\xDE\xE2\x03\x02\x02\x02\xDF\xE2\x070\x02\x02" +
		"\xE0\xE2\x071\x02\x02\xE1\xDB\x03\x02\x02\x02\xE1\xDF\x03\x02\x02\x02" +
		"\xE1\xE0\x03\x02\x02\x02\xE2#\x03\x02\x02\x02\xE3\xE4\x07\r\x02\x02\xE4" +
		"\xE5\x07\x06\x02\x02\xE5\xEB\x05\x0E\b\x02\xE6\xE7\x07\b\x02\x02\xE7\xE8" +
		"\x05&\x14\x02\xE8\xE9\x07\b\x02\x02\xE9\xEA\x05&\x14\x02\xEA\xEC\x03\x02" +
		"\x02\x02\xEB\xE6\x03\x02\x02\x02\xEB\xEC\x03\x02\x02\x02\xEC\xED\x03\x02" +
		"\x02\x02\xED\xEE\x05\x14\v\x02\xEE\xEF\x07\x07\x02\x02\xEF%\x03\x02\x02" +
		"\x02\xF0\xF3\x05(\x15\x02\xF1\xF3\x07+\x02\x02\xF2\xF0\x03\x02\x02\x02" +
		"\xF2\xF1\x03\x02\x02\x02\xF3\'\x03\x02\x02\x02\xF4\xF5\x075\x02\x02\xF5" +
		")\x03\x02\x02\x02\xF6\xF7\x07\x0E\x02\x02\xF7\xF8\x07\x06\x02\x02\xF8" +
		"\xF9\x05,\x17\x02\xF9\xFF\x050\x19\x02\xFA\xFB\x07\b\x02\x02\xFB\xFC\x05" +
		"4\x1B\x02\xFC\xFD\x07\b\x02\x02\xFD\xFE\x05&\x14\x02\xFE\u0100\x03\x02" +
		"\x02\x02\xFF\xFA\x03\x02\x02\x02\xFF\u0100\x03\x02\x02\x02\u0100\u0101" +
		"\x03\x02\x02\x02\u0101\u0102\x05\x14\v\x02\u0102\u0103\x07\x07\x02\x02" +
		"\u0103+\x03\x02\x02\x02\u0104\u0105\x05.\x18\x02\u0105\u0106\x07\x0F\x02" +
		"\x02\u0106\u0108\x03\x02\x02\x02\u0107\u0104\x03\x02\x02\x02\u0107\u0108" +
		"\x03\x02\x02\x02\u0108-\x03\x02\x02\x02\u0109\u010C\x05\x0E\b\x02\u010A" +
		"\u010C\x07+\x02\x02\u010B\u0109\x03\x02\x02\x02\u010B\u010A\x03\x02\x02" +
		"\x02\u010C/\x03\x02\x02\x02\u010D\u010E\x05\x0E\b\x02\u010E1\x03\x02\x02" +
		"\x02\u010F\u0112\x050\x19\x02\u0110\u0112\x07+\x02\x02\u0111\u010F\x03" +
		"\x02\x02\x02\u0111\u0110\x03\x02\x02\x02\u01123\x03\x02\x02\x02\u0113" +
		"\u0116\x056\x1C\x02\u0114\u0116\x07+\x02\x02\u0115\u0113\x03\x02\x02\x02" +
		"\u0115\u0114\x03\x02\x02\x02\u01165\x03\x02\x02\x02\u0117\u0118\x05\x0E" +
		"\b\x02\u01187\x03\x02\x02\x02\u0119\u011C\x05:\x1E\x02\u011A\u011C\x07" +
		"+\x02\x02\u011B\u0119\x03\x02\x02\x02\u011B\u011A\x03\x02\x02\x02\u011C" +
		"9\x03\x02\x02\x02\u011D\u011E\x05\x0E\b\x02\u011E;\x03\x02\x02\x02\u011F" +
		"\u0120\x05\x0E\b\x02\u0120=\x03\x02\x02\x02\u0121\u0122\x05\x0E\b\x02" +
		"\u0122?\x03\x02\x02\x02\u0123\u0126\x05> \x02\u0124\u0126\x07+\x02\x02" +
		"\u0125\u0123\x03\x02\x02\x02\u0125\u0124\x03\x02\x02\x02\u0126A\x03\x02" +
		"\x02\x02\u0127\u0128\x05\x0E\b\x02\u0128C\x03\x02\x02\x02\u0129\u012C" +
		"\x05B\"\x02\u012A\u012C\x07+\x02\x02\u012B\u0129\x03\x02\x02\x02\u012B" +
		"\u012A\x03\x02\x02\x02\u012CE\x03\x02\x02\x02\u012D\u012E\x07\x10\x02" +
		"\x02\u012E\u012F\x07\x06\x02\x02\u012F\u0130\x05,\x17\x02\u0130\u0136" +
		"\x056\x1C\x02\u0131\u0132\x07\b\x02\x02\u0132\u0133\x052\x1A\x02\u0133" +
		"\u0134\x07\b\x02\x02\u0134\u0135\x05&\x14\x02\u0135\u0137\x03\x02\x02" +
		"\x02\u0136\u0131\x03\x02\x02\x02\u0136\u0137\x03\x02\x02\x02\u0137\u0138" +
		"\x03\x02\x02\x02\u0138\u0139\x05\x14\v\x02\u0139\u013A\x07\x07\x02\x02" +
		"\u013AG\x03\x02\x02\x02\u013B\u013C\x07\x11\x02\x02\u013C\u013D\x07\x06" +
		"\x02\x02\u013D\u013E\x05,\x17\x02\u013E\u0146\x056\x1C\x02\u013F\u0140" +
		"\x07\b\x02\x02\u0140\u0141\x052\x1A\x02\u0141\u0142\x07\b\x02\x02\u0142" +
		"\u0143\x054\x1B\x02\u0143\u0144\x07\b\x02\x02\u0144\u0145\x05&\x14\x02" +
		"\u0145\u0147\x03\x02\x02\x02\u0146\u013F\x03\x02\x02\x02\u0146\u0147\x03" +
		"\x02\x02\x02\u0147\u0148\x03\x02\x02\x02\u0148\u0149\x05\x14\v\x02\u0149" +
		"\u014A\x07\x07\x02\x02\u014AI\x03\x02\x02\x02\u014B\u014C\x07\x12\x02" +
		"\x02\u014C\u014D\x07\x06\x02\x02\u014D\u014E\x05,\x17\x02\u014E\u0156" +
		"\x056\x1C\x02\u014F\u0150\x07\b\x02\x02\u0150\u0151\x052\x1A\x02\u0151" +
		"\u0152\x07\b\x02\x02\u0152\u0153\x054\x1B\x02\u0153\u0154\x07\b\x02\x02" +
		"\u0154\u0155\x05&\x14\x02\u0155\u0157\x03\x02\x02\x02\u0156\u014F\x03" +
		"\x02\x02\x02\u0156\u0157\x03\x02\x02\x02\u0157\u0158\x03\x02\x02\x02\u0158" +
		"\u0159\x05\x14\v\x02\u0159\u015A\x07\x07\x02\x02\u015AK\x03\x02\x02\x02" +
		"\u015B\u015C\x07\x13\x02\x02\u015C\u015D\x07\x06\x02\x02\u015D\u015E\x05" +
		",\x17\x02\u015E\u0164\x050\x19\x02\u015F\u0160\x07\b\x02\x02\u0160\u0161" +
		"\x054\x1B\x02\u0161\u0162\x07\b\x02\x02\u0162\u0163\x05&\x14\x02\u0163" +
		"\u0165\x03\x02\x02\x02\u0164\u015F\x03\x02\x02\x02\u0164\u0165\x03\x02" +
		"\x02\x02\u0165\u0166\x03\x02\x02\x02\u0166\u0167\x05\x14\v\x02\u0167\u0168" +
		"\x07\x07\x02\x02\u0168M\x03\x02\x02\x02\u0169\u016A\x07\x14\x02\x02\u016A" +
		"\u016B\x07\x06\x02\x02\u016B\u016C\x05,\x17\x02\u016C\u016D\x056\x1C\x02" +
		"\u016D\u016E\x07\b\x02\x02\u016E\u016F\x056\x1C\x02\u016F\u0170\x05\x14" +
		"\v\x02\u0170\u0171\x07\x07\x02\x02\u0171O\x03\x02\x02\x02\u0172\u0173" +
		"\x07\x15\x02\x02\u0173\u0174\x07\x06\x02\x02\u0174\u0175\x05\x0E\b\x02" +
		"\u0175\u0176\x05\x14\v\x02\u0176\u0177\x07\x07\x02\x02\u0177Q\x03\x02" +
		"\x02\x02\u0178\u0179\x07\x16\x02\x02\u0179\u017A\x07\x06\x02\x02\u017A" +
		"\u017B\x05,\x17\x02\u017B\u0181\x056\x1C\x02\u017C\u017D\x07\b\x02\x02" +
		"\u017D\u017E\x058\x1D\x02\u017E\u017F\x07\b\x02\x02\u017F\u0180\x052\x1A" +
		"\x02\u0180\u0182\x03\x02\x02\x02\u0181\u017C\x03\x02\x02\x02\u0181\u0182" +
		"\x03\x02\x02\x02\u0182\u0183\x03\x02\x02\x02\u0183\u0184\x05\x14\v\x02" +
		"\u0184\u0185\x07\x07\x02\x02\u0185S\x03\x02\x02\x02\u0186\u0187\x07\x17" +
		"\x02\x02\u0187\u0188\x07\x06\x02\x02\u0188\u0189\x05,\x17\x02\u0189\u018A" +
		"\x050\x19\x02\u018A\u018B\x07\b\x02\x02\u018B\u018C\x05:\x1E\x02\u018C" +
		"\u018D\x05\x14\v\x02\u018D\u018E\x07\x07\x02\x02\u018EU\x03\x02\x02\x02" +
		"\u018F\u0190\x07\x18\x02\x02\u0190\u0191\x07\x06\x02\x02\u0191\u0192\x05" +
		",\x17\x02\u0192\u0193\x05:\x1E\x02\u0193\u0194\x07\b\x02\x02\u0194\u0197" +
		"\x05:\x1E\x02\u0195\u0196\x07\b\x02\x02\u0196\u0198\x054\x1B\x02\u0197" +
		"\u0195\x03\x02\x02\x02\u0197\u0198\x03\x02\x02\x02\u0198\u0199\x03\x02" +
		"\x02\x02\u0199\u019A\x05\x14\v\x02\u019A\u019B\x07\x07\x02\x02\u019BW" +
		"\x03\x02\x02\x02\u019C\u019D\x07\x19\x02\x02\u019D\u019E\x07\x06\x02\x02" +
		"\u019E\u019F\x05,\x17\x02\u019F\u01A0\x050\x19\x02\u01A0\u01A1\x07\b\x02" +
		"\x02\u01A1\u01A9\x050\x19\x02\u01A2\u01A3\x07\b\x02\x02\u01A3\u01A4\x05" +
		"4\x1B\x02\u01A4\u01A5\x07\b\x02\x02\u01A5\u01A6\x05@!\x02\u01A6\u01A7" +
		"\x07\b\x02\x02\u01A7\u01A8\x05D#\x02\u01A8\u01AA\x03\x02\x02\x02\u01A9" +
		"\u01A2\x03\x02\x02\x02\u01A9\u01AA\x03\x02\x02\x02\u01AA\u01AB\x03\x02" +
		"\x02\x02\u01AB\u01AC\x05\x14\v\x02\u01AC\u01AD\x07\x07\x02\x02\u01ADY" +
		"\x03\x02\x02\x02\u01AE\u01AF\x07\x1A\x02\x02\u01AF\u01B0\x07\x06\x02\x02" +
		"\u01B0\u01B1\x05,\x17\x02\u01B1\u01B2\x050\x19\x02\u01B2\u01B3\x07\b\x02" +
		"\x02\u01B3\u01B4\x050\x19\x02\u01B4\u01B5\x05\x14\v\x02\u01B5\u01B6\x07" +
		"\x07\x02\x02\u01B6[\x03\x02\x02\x02\u01B7\u01B8\x07\x1B\x02\x02\u01B8" +
		"\u01B9\x07\x06\x02\x02\u01B9\u01BA\x050\x19\x02\u01BA\u01BB\x07\b\x02" +
		"\x02\u01BB\u01BC\x050\x19\x02\u01BC\u01BD\x07\x07\x02\x02\u01BD]\x03\x02" +
		"\x02\x02\u01BE\u01BF\x07\x1C\x02\x02\u01BF\u01C0\x07\x06\x02\x02\u01C0" +
		"\u01C1\x050\x19\x02\u01C1\u01C2\x07\b\x02\x02\u01C2\u01C3\x050\x19\x02" +
		"\u01C3\u01C4\x07\x07\x02\x02\u01C4_\x03\x02\x02\x02\u01C5\u01C6\x07\x1D" +
		"\x02\x02\u01C6\u01C7\x07\x06\x02\x02\u01C7\u01C8\x05<\x1F\x02\u01C8\u01C9" +
		"\x07\b\x02\x02\u01C9\u01CA\x050\x19\x02\u01CA\u01CB\x07\x07\x02\x02\u01CB" +
		"a\x03\x02\x02\x02\u01CC\u01CD\t\x02\x02\x02\u01CD\u01CE\x07\x06\x02\x02" +
		"\u01CE\u01CF\x05,\x17\x02\u01CF\u01D4\x05d3\x02\u01D0\u01D1\x07\b\x02" +
		"\x02\u01D1\u01D3\x05d3\x02\u01D2\u01D0\x03\x02\x02\x02\u01D3\u01D6\x03" +
		"\x02\x02\x02\u01D4\u01D2\x03\x02\x02\x02\u01D4\u01D5\x03\x02\x02\x02\u01D5" +
		"\u01D7\x03\x02\x02\x02\u01D6\u01D4\x03\x02\x02\x02\u01D7\u01D8\x05\x14" +
		"\v\x02\u01D8\u01D9\x07\x07\x02\x02\u01D9c\x03\x02\x02\x02\u01DA\u01E0" +
		"\x05.\x18\x02\u01DB\u01E0\x05\x1C\x0F\x02\u01DC\u01E0\x05(\x15\x02\u01DD" +
		"\u01E0\x05b2\x02\u01DE\u01E0\x05f4\x02\u01DF\u01DA\x03\x02\x02\x02\u01DF" +
		"\u01DB\x03\x02\x02\x02\u01DF\u01DC\x03\x02\x02\x02\u01DF\u01DD\x03\x02" +
		"\x02\x02\u01DF\u01DE\x03\x02\x02\x02\u01E0e\x03\x02\x02\x02\u01E1\u01E2" +
		"\x07\x1E\x02\x02\u01E2\u01E7\x05d3\x02\u01E3\u01E4\x07\b\x02\x02\u01E4" +
		"\u01E6\x05d3\x02\u01E5\u01E3\x03\x02\x02\x02\u01E6\u01E9\x03\x02\x02\x02" +
		"\u01E7\u01E5\x03\x02\x02\x02\u01E7\u01E8\x03\x02\x02\x02\u01E8\u01EA\x03" +
		"\x02\x02\x02\u01E9\u01E7\x03\x02\x02\x02\u01EA\u01EB\x07\x1F\x02\x02\u01EB" +
		"\u01F8\x03\x02\x02\x02\u01EC\u01ED\x07\x06\x02\x02\u01ED\u01F2\x05d3\x02" +
		"\u01EE\u01EF\x07\b\x02\x02\u01EF\u01F1\x05d3\x02\u01F0\u01EE\x03\x02\x02" +
		"\x02\u01F1\u01F4\x03\x02\x02\x02\u01F2\u01F0\x03\x02\x02\x02\u01F2\u01F3" +
		"\x03\x02\x02\x02\u01F3\u01F5\x03\x02\x02\x02\u01F4\u01F2\x03\x02\x02\x02" +
		"\u01F5\u01F6\x07\x07\x02\x02\u01F6\u01F8\x03\x02\x02\x02\u01F7\u01E1\x03" +
		"\x02\x02\x02\u01F7\u01EC\x03\x02\x02\x02\u01F8g\x03\x02\x02\x02\'jovy" +
		"\x7F\x84\x93\x98\xB1\xBE\xC6\xC9\xD3\xDD\xE1\xEB\xF2\xFF\u0107\u010B\u0111" +
		"\u0115\u011B\u0125\u012B\u0136\u0146\u0156\u0164\u0181\u0197\u01A9\u01D4" +
		"\u01DF\u01E7\u01F2\u01F7";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!PROV_NParser.__ATN) {
			PROV_NParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(PROV_NParser._serializedATN));
		}

		return PROV_NParser.__ATN;
	}

}

export class DocumentContext extends ParserRuleContext {
	public DOCUMENT(): TerminalNode { return this.getToken(PROV_NParser.DOCUMENT, 0); }
	public ENDDOCUMENT(): TerminalNode { return this.getToken(PROV_NParser.ENDDOCUMENT, 0); }
	public namespaceDeclarations(): NamespaceDeclarationsContext | undefined {
		return this.tryGetRuleContext(0, NamespaceDeclarationsContext);
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
	public bundle(): BundleContext[];
	public bundle(i: number): BundleContext;
	public bundle(i?: number): BundleContext | BundleContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BundleContext);
		} else {
			return this.getRuleContext(i, BundleContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PROV_NParser.RULE_document; }
	// @Override
	public enterRule(listener: PROV_NListener): void {
		if (listener.enterDocument) {
			listener.enterDocument(this);
		}
	}
	// @Override
	public exitRule(listener: PROV_NListener): void {
		if (listener.exitDocument) {
			listener.exitDocument(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PROV_NVisitor<Result>): Result {
		if (visitor.visitDocument) {
			return visitor.visitDocument(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NamespaceDeclarationsContext extends ParserRuleContext {
	public defaultNamespaceDeclaration(): DefaultNamespaceDeclarationContext | undefined {
		return this.tryGetRuleContext(0, DefaultNamespaceDeclarationContext);
	}
	public namespaceDeclaration(): NamespaceDeclarationContext[];
	public namespaceDeclaration(i: number): NamespaceDeclarationContext;
	public namespaceDeclaration(i?: number): NamespaceDeclarationContext | NamespaceDeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NamespaceDeclarationContext);
		} else {
			return this.getRuleContext(i, NamespaceDeclarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PROV_NParser.RULE_namespaceDeclarations; }
	// @Override
	public enterRule(listener: PROV_NListener): void {
		if (listener.enterNamespaceDeclarations) {
			listener.enterNamespaceDeclarations(this);
		}
	}
	// @Override
	public exitRule(listener: PROV_NListener): void {
		if (listener.exitNamespaceDeclarations) {
			listener.exitNamespaceDeclarations(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PROV_NVisitor<Result>): Result {
		if (visitor.visitNamespaceDeclarations) {
			return visitor.visitNamespaceDeclarations(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DefaultNamespaceDeclarationContext extends ParserRuleContext {
	public IRI_REF(): TerminalNode { return this.getToken(PROV_NParser.IRI_REF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PROV_NParser.RULE_defaultNamespaceDeclaration; }
	// @Override
	public enterRule(listener: PROV_NListener): void {
		if (listener.enterDefaultNamespaceDeclaration) {
			listener.enterDefaultNamespaceDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: PROV_NListener): void {
		if (listener.exitDefaultNamespaceDeclaration) {
			listener.exitDefaultNamespaceDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PROV_NVisitor<Result>): Result {
		if (visitor.visitDefaultNamespaceDeclaration) {
			return visitor.visitDefaultNamespaceDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NamespaceDeclarationContext extends ParserRuleContext {
	public PREFX(): TerminalNode { return this.getToken(PROV_NParser.PREFX, 0); }
	public namespace(): NamespaceContext {
		return this.getRuleContext(0, NamespaceContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PROV_NParser.RULE_namespaceDeclaration; }
	// @Override
	public enterRule(listener: PROV_NListener): void {
		if (listener.enterNamespaceDeclaration) {
			listener.enterNamespaceDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: PROV_NListener): void {
		if (listener.exitNamespaceDeclaration) {
			listener.exitNamespaceDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PROV_NVisitor<Result>): Result {
		if (visitor.visitNamespaceDeclaration) {
			return visitor.visitNamespaceDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NamespaceContext extends ParserRuleContext {
	public IRI_REF(): TerminalNode { return this.getToken(PROV_NParser.IRI_REF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PROV_NParser.RULE_namespace; }
	// @Override
	public enterRule(listener: PROV_NListener): void {
		if (listener.enterNamespace) {
			listener.enterNamespace(this);
		}
	}
	// @Override
	public exitRule(listener: PROV_NListener): void {
		if (listener.exitNamespace) {
			listener.exitNamespace(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PROV_NVisitor<Result>): Result {
		if (visitor.visitNamespace) {
			return visitor.visitNamespace(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BundleContext extends ParserRuleContext {
	public BUNDLE(): TerminalNode { return this.getToken(PROV_NParser.BUNDLE, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public ENDBUNDLE(): TerminalNode { return this.getToken(PROV_NParser.ENDBUNDLE, 0); }
	public namespaceDeclarations(): NamespaceDeclarationsContext | undefined {
		return this.tryGetRuleContext(0, NamespaceDeclarationsContext);
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PROV_NParser.RULE_bundle; }
	// @Override
	public enterRule(listener: PROV_NListener): void {
		if (listener.enterBundle) {
			listener.enterBundle(this);
		}
	}
	// @Override
	public exitRule(listener: PROV_NListener): void {
		if (listener.exitBundle) {
			listener.exitBundle(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PROV_NVisitor<Result>): Result {
		if (visitor.visitBundle) {
			return visitor.visitBundle(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierContext extends ParserRuleContext {
	public PREFX(): TerminalNode | undefined { return this.tryGetToken(PROV_NParser.PREFX, 0); }
	public QUALIFIED_NAME(): TerminalNode | undefined { return this.tryGetToken(PROV_NParser.QUALIFIED_NAME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PROV_NParser.RULE_identifier; }
	// @Override
	public enterRule(listener: PROV_NListener): void {
		if (listener.enterIdentifier) {
			listener.enterIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: PROV_NListener): void {
		if (listener.exitIdentifier) {
			listener.exitIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PROV_NVisitor<Result>): Result {
		if (visitor.visitIdentifier) {
			return visitor.visitIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public entityExpression(): EntityExpressionContext | undefined {
		return this.tryGetRuleContext(0, EntityExpressionContext);
	}
	public activityExpression(): ActivityExpressionContext | undefined {
		return this.tryGetRuleContext(0, ActivityExpressionContext);
	}
	public generationExpression(): GenerationExpressionContext | undefined {
		return this.tryGetRuleContext(0, GenerationExpressionContext);
	}
	public usageExpression(): UsageExpressionContext | undefined {
		return this.tryGetRuleContext(0, UsageExpressionContext);
	}
	public startExpression(): StartExpressionContext | undefined {
		return this.tryGetRuleContext(0, StartExpressionContext);
	}
	public endExpression(): EndExpressionContext | undefined {
		return this.tryGetRuleContext(0, EndExpressionContext);
	}
	public invalidationExpression(): InvalidationExpressionContext | undefined {
		return this.tryGetRuleContext(0, InvalidationExpressionContext);
	}
	public communicationExpression(): CommunicationExpressionContext | undefined {
		return this.tryGetRuleContext(0, CommunicationExpressionContext);
	}
	public agentExpression(): AgentExpressionContext | undefined {
		return this.tryGetRuleContext(0, AgentExpressionContext);
	}
	public associationExpression(): AssociationExpressionContext | undefined {
		return this.tryGetRuleContext(0, AssociationExpressionContext);
	}
	public attributionExpression(): AttributionExpressionContext | undefined {
		return this.tryGetRuleContext(0, AttributionExpressionContext);
	}
	public delegationExpression(): DelegationExpressionContext | undefined {
		return this.tryGetRuleContext(0, DelegationExpressionContext);
	}
	public derivationExpression(): DerivationExpressionContext | undefined {
		return this.tryGetRuleContext(0, DerivationExpressionContext);
	}
	public influenceExpression(): InfluenceExpressionContext | undefined {
		return this.tryGetRuleContext(0, InfluenceExpressionContext);
	}
	public alternateExpression(): AlternateExpressionContext | undefined {
		return this.tryGetRuleContext(0, AlternateExpressionContext);
	}
	public specializationExpression(): SpecializationExpressionContext | undefined {
		return this.tryGetRuleContext(0, SpecializationExpressionContext);
	}
	public membershipExpression(): MembershipExpressionContext | undefined {
		return this.tryGetRuleContext(0, MembershipExpressionContext);
	}
	public extensibilityExpression(): ExtensibilityExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExtensibilityExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PROV_NParser.RULE_expression; }
	// @Override
	public enterRule(listener: PROV_NListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: PROV_NListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PROV_NVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EntityExpressionContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public optionalAttributeValuePairs(): OptionalAttributeValuePairsContext {
		return this.getRuleContext(0, OptionalAttributeValuePairsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PROV_NParser.RULE_entityExpression; }
	// @Override
	public enterRule(listener: PROV_NListener): void {
		if (listener.enterEntityExpression) {
			listener.enterEntityExpression(this);
		}
	}
	// @Override
	public exitRule(listener: PROV_NListener): void {
		if (listener.exitEntityExpression) {
			listener.exitEntityExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PROV_NVisitor<Result>): Result {
		if (visitor.visitEntityExpression) {
			return visitor.visitEntityExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OptionalAttributeValuePairsContext extends ParserRuleContext {
	public attributeValuePairs(): AttributeValuePairsContext | undefined {
		return this.tryGetRuleContext(0, AttributeValuePairsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PROV_NParser.RULE_optionalAttributeValuePairs; }
	// @Override
	public enterRule(listener: PROV_NListener): void {
		if (listener.enterOptionalAttributeValuePairs) {
			listener.enterOptionalAttributeValuePairs(this);
		}
	}
	// @Override
	public exitRule(listener: PROV_NListener): void {
		if (listener.exitOptionalAttributeValuePairs) {
			listener.exitOptionalAttributeValuePairs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PROV_NVisitor<Result>): Result {
		if (visitor.visitOptionalAttributeValuePairs) {
			return visitor.visitOptionalAttributeValuePairs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AttributeValuePairsContext extends ParserRuleContext {
	public attributeValuePair(): AttributeValuePairContext[];
	public attributeValuePair(i: number): AttributeValuePairContext;
	public attributeValuePair(i?: number): AttributeValuePairContext | AttributeValuePairContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AttributeValuePairContext);
		} else {
			return this.getRuleContext(i, AttributeValuePairContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PROV_NParser.RULE_attributeValuePairs; }
	// @Override
	public enterRule(listener: PROV_NListener): void {
		if (listener.enterAttributeValuePairs) {
			listener.enterAttributeValuePairs(this);
		}
	}
	// @Override
	public exitRule(listener: PROV_NListener): void {
		if (listener.exitAttributeValuePairs) {
			listener.exitAttributeValuePairs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PROV_NVisitor<Result>): Result {
		if (visitor.visitAttributeValuePairs) {
			return visitor.visitAttributeValuePairs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AttributeValuePairContext extends ParserRuleContext {
	public attribute(): AttributeContext {
		return this.getRuleContext(0, AttributeContext);
	}
	public literal(): LiteralContext {
		return this.getRuleContext(0, LiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PROV_NParser.RULE_attributeValuePair; }
	// @Override
	public enterRule(listener: PROV_NListener): void {
		if (listener.enterAttributeValuePair) {
			listener.enterAttributeValuePair(this);
		}
	}
	// @Override
	public exitRule(listener: PROV_NListener): void {
		if (listener.exitAttributeValuePair) {
			listener.exitAttributeValuePair(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PROV_NVisitor<Result>): Result {
		if (visitor.visitAttributeValuePair) {
			return visitor.visitAttributeValuePair(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AttributeContext extends ParserRuleContext {
	public PREFX(): TerminalNode | undefined { return this.tryGetToken(PROV_NParser.PREFX, 0); }
	public QUALIFIED_NAME(): TerminalNode | undefined { return this.tryGetToken(PROV_NParser.QUALIFIED_NAME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PROV_NParser.RULE_attribute; }
	// @Override
	public enterRule(listener: PROV_NListener): void {
		if (listener.enterAttribute) {
			listener.enterAttribute(this);
		}
	}
	// @Override
	public exitRule(listener: PROV_NListener): void {
		if (listener.exitAttribute) {
			listener.exitAttribute(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PROV_NVisitor<Result>): Result {
		if (visitor.visitAttribute) {
			return visitor.visitAttribute(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	public typedLiteral(): TypedLiteralContext | undefined {
		return this.tryGetRuleContext(0, TypedLiteralContext);
	}
	public convenienceNotation(): ConvenienceNotationContext | undefined {
		return this.tryGetRuleContext(0, ConvenienceNotationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PROV_NParser.RULE_literal; }
	// @Override
	public enterRule(listener: PROV_NListener): void {
		if (listener.enterLiteral) {
			listener.enterLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: PROV_NListener): void {
		if (listener.exitLiteral) {
			listener.exitLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PROV_NVisitor<Result>): Result {
		if (visitor.visitLiteral) {
			return visitor.visitLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypedLiteralContext extends ParserRuleContext {
	public STRING_LITERAL(): TerminalNode { return this.getToken(PROV_NParser.STRING_LITERAL, 0); }
	public datatype(): DatatypeContext {
		return this.getRuleContext(0, DatatypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PROV_NParser.RULE_typedLiteral; }
	// @Override
	public enterRule(listener: PROV_NListener): void {
		if (listener.enterTypedLiteral) {
			listener.enterTypedLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: PROV_NListener): void {
		if (listener.exitTypedLiteral) {
			listener.exitTypedLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PROV_NVisitor<Result>): Result {
		if (visitor.visitTypedLiteral) {
			return visitor.visitTypedLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DatatypeContext extends ParserRuleContext {
	public PREFX(): TerminalNode | undefined { return this.tryGetToken(PROV_NParser.PREFX, 0); }
	public QUALIFIED_NAME(): TerminalNode | undefined { return this.tryGetToken(PROV_NParser.QUALIFIED_NAME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PROV_NParser.RULE_datatype; }
	// @Override
	public enterRule(listener: PROV_NListener): void {
		if (listener.enterDatatype) {
			listener.enterDatatype(this);
		}
	}
	// @Override
	public exitRule(listener: PROV_NListener): void {
		if (listener.exitDatatype) {
			listener.exitDatatype(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PROV_NVisitor<Result>): Result {
		if (visitor.visitDatatype) {
			return visitor.visitDatatype(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConvenienceNotationContext extends ParserRuleContext {
	public STRING_LITERAL(): TerminalNode | undefined { return this.tryGetToken(PROV_NParser.STRING_LITERAL, 0); }
	public LANGTAG(): TerminalNode | undefined { return this.tryGetToken(PROV_NParser.LANGTAG, 0); }
	public INT_LITERAL(): TerminalNode | undefined { return this.tryGetToken(PROV_NParser.INT_LITERAL, 0); }
	public QUALIFIED_NAME_LITERAL(): TerminalNode | undefined { return this.tryGetToken(PROV_NParser.QUALIFIED_NAME_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PROV_NParser.RULE_convenienceNotation; }
	// @Override
	public enterRule(listener: PROV_NListener): void {
		if (listener.enterConvenienceNotation) {
			listener.enterConvenienceNotation(this);
		}
	}
	// @Override
	public exitRule(listener: PROV_NListener): void {
		if (listener.exitConvenienceNotation) {
			listener.exitConvenienceNotation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PROV_NVisitor<Result>): Result {
		if (visitor.visitConvenienceNotation) {
			return visitor.visitConvenienceNotation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ActivityExpressionContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public optionalAttributeValuePairs(): OptionalAttributeValuePairsContext {
		return this.getRuleContext(0, OptionalAttributeValuePairsContext);
	}
	public timeOrMarker(): TimeOrMarkerContext[];
	public timeOrMarker(i: number): TimeOrMarkerContext;
	public timeOrMarker(i?: number): TimeOrMarkerContext | TimeOrMarkerContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TimeOrMarkerContext);
		} else {
			return this.getRuleContext(i, TimeOrMarkerContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PROV_NParser.RULE_activityExpression; }
	// @Override
	public enterRule(listener: PROV_NListener): void {
		if (listener.enterActivityExpression) {
			listener.enterActivityExpression(this);
		}
	}
	// @Override
	public exitRule(listener: PROV_NListener): void {
		if (listener.exitActivityExpression) {
			listener.exitActivityExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PROV_NVisitor<Result>): Result {
		if (visitor.visitActivityExpression) {
			return visitor.visitActivityExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TimeOrMarkerContext extends ParserRuleContext {
	public time(): TimeContext | undefined {
		return this.tryGetRuleContext(0, TimeContext);
	}
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(PROV_NParser.MINUS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PROV_NParser.RULE_timeOrMarker; }
	// @Override
	public enterRule(listener: PROV_NListener): void {
		if (listener.enterTimeOrMarker) {
			listener.enterTimeOrMarker(this);
		}
	}
	// @Override
	public exitRule(listener: PROV_NListener): void {
		if (listener.exitTimeOrMarker) {
			listener.exitTimeOrMarker(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PROV_NVisitor<Result>): Result {
		if (visitor.visitTimeOrMarker) {
			return visitor.visitTimeOrMarker(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TimeContext extends ParserRuleContext {
	public DATETIME(): TerminalNode { return this.getToken(PROV_NParser.DATETIME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PROV_NParser.RULE_time; }
	// @Override
	public enterRule(listener: PROV_NListener): void {
		if (listener.enterTime) {
			listener.enterTime(this);
		}
	}
	// @Override
	public exitRule(listener: PROV_NListener): void {
		if (listener.exitTime) {
			listener.exitTime(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PROV_NVisitor<Result>): Result {
		if (visitor.visitTime) {
			return visitor.visitTime(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GenerationExpressionContext extends ParserRuleContext {
	public optionalIdentifier(): OptionalIdentifierContext {
		return this.getRuleContext(0, OptionalIdentifierContext);
	}
	public eIdentifier(): EIdentifierContext {
		return this.getRuleContext(0, EIdentifierContext);
	}
	public optionalAttributeValuePairs(): OptionalAttributeValuePairsContext {
		return this.getRuleContext(0, OptionalAttributeValuePairsContext);
	}
	public aIdentifierOrMarker(): AIdentifierOrMarkerContext | undefined {
		return this.tryGetRuleContext(0, AIdentifierOrMarkerContext);
	}
	public timeOrMarker(): TimeOrMarkerContext | undefined {
		return this.tryGetRuleContext(0, TimeOrMarkerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PROV_NParser.RULE_generationExpression; }
	// @Override
	public enterRule(listener: PROV_NListener): void {
		if (listener.enterGenerationExpression) {
			listener.enterGenerationExpression(this);
		}
	}
	// @Override
	public exitRule(listener: PROV_NListener): void {
		if (listener.exitGenerationExpression) {
			listener.exitGenerationExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PROV_NVisitor<Result>): Result {
		if (visitor.visitGenerationExpression) {
			return visitor.visitGenerationExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OptionalIdentifierContext extends ParserRuleContext {
	public identifierOrMarker(): IdentifierOrMarkerContext | undefined {
		return this.tryGetRuleContext(0, IdentifierOrMarkerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PROV_NParser.RULE_optionalIdentifier; }
	// @Override
	public enterRule(listener: PROV_NListener): void {
		if (listener.enterOptionalIdentifier) {
			listener.enterOptionalIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: PROV_NListener): void {
		if (listener.exitOptionalIdentifier) {
			listener.exitOptionalIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PROV_NVisitor<Result>): Result {
		if (visitor.visitOptionalIdentifier) {
			return visitor.visitOptionalIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierOrMarkerContext extends ParserRuleContext {
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(PROV_NParser.MINUS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PROV_NParser.RULE_identifierOrMarker; }
	// @Override
	public enterRule(listener: PROV_NListener): void {
		if (listener.enterIdentifierOrMarker) {
			listener.enterIdentifierOrMarker(this);
		}
	}
	// @Override
	public exitRule(listener: PROV_NListener): void {
		if (listener.exitIdentifierOrMarker) {
			listener.exitIdentifierOrMarker(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PROV_NVisitor<Result>): Result {
		if (visitor.visitIdentifierOrMarker) {
			return visitor.visitIdentifierOrMarker(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EIdentifierContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PROV_NParser.RULE_eIdentifier; }
	// @Override
	public enterRule(listener: PROV_NListener): void {
		if (listener.enterEIdentifier) {
			listener.enterEIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: PROV_NListener): void {
		if (listener.exitEIdentifier) {
			listener.exitEIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PROV_NVisitor<Result>): Result {
		if (visitor.visitEIdentifier) {
			return visitor.visitEIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EIdentifierOrMarkerContext extends ParserRuleContext {
	public eIdentifier(): EIdentifierContext | undefined {
		return this.tryGetRuleContext(0, EIdentifierContext);
	}
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(PROV_NParser.MINUS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PROV_NParser.RULE_eIdentifierOrMarker; }
	// @Override
	public enterRule(listener: PROV_NListener): void {
		if (listener.enterEIdentifierOrMarker) {
			listener.enterEIdentifierOrMarker(this);
		}
	}
	// @Override
	public exitRule(listener: PROV_NListener): void {
		if (listener.exitEIdentifierOrMarker) {
			listener.exitEIdentifierOrMarker(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PROV_NVisitor<Result>): Result {
		if (visitor.visitEIdentifierOrMarker) {
			return visitor.visitEIdentifierOrMarker(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AIdentifierOrMarkerContext extends ParserRuleContext {
	public aIdentifier(): AIdentifierContext | undefined {
		return this.tryGetRuleContext(0, AIdentifierContext);
	}
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(PROV_NParser.MINUS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PROV_NParser.RULE_aIdentifierOrMarker; }
	// @Override
	public enterRule(listener: PROV_NListener): void {
		if (listener.enterAIdentifierOrMarker) {
			listener.enterAIdentifierOrMarker(this);
		}
	}
	// @Override
	public exitRule(listener: PROV_NListener): void {
		if (listener.exitAIdentifierOrMarker) {
			listener.exitAIdentifierOrMarker(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PROV_NVisitor<Result>): Result {
		if (visitor.visitAIdentifierOrMarker) {
			return visitor.visitAIdentifierOrMarker(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AIdentifierContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PROV_NParser.RULE_aIdentifier; }
	// @Override
	public enterRule(listener: PROV_NListener): void {
		if (listener.enterAIdentifier) {
			listener.enterAIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: PROV_NListener): void {
		if (listener.exitAIdentifier) {
			listener.exitAIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PROV_NVisitor<Result>): Result {
		if (visitor.visitAIdentifier) {
			return visitor.visitAIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AgIdentifierOrMarkerContext extends ParserRuleContext {
	public agIdentifier(): AgIdentifierContext | undefined {
		return this.tryGetRuleContext(0, AgIdentifierContext);
	}
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(PROV_NParser.MINUS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PROV_NParser.RULE_agIdentifierOrMarker; }
	// @Override
	public enterRule(listener: PROV_NListener): void {
		if (listener.enterAgIdentifierOrMarker) {
			listener.enterAgIdentifierOrMarker(this);
		}
	}
	// @Override
	public exitRule(listener: PROV_NListener): void {
		if (listener.exitAgIdentifierOrMarker) {
			listener.exitAgIdentifierOrMarker(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PROV_NVisitor<Result>): Result {
		if (visitor.visitAgIdentifierOrMarker) {
			return visitor.visitAgIdentifierOrMarker(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AgIdentifierContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PROV_NParser.RULE_agIdentifier; }
	// @Override
	public enterRule(listener: PROV_NListener): void {
		if (listener.enterAgIdentifier) {
			listener.enterAgIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: PROV_NListener): void {
		if (listener.exitAgIdentifier) {
			listener.exitAgIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PROV_NVisitor<Result>): Result {
		if (visitor.visitAgIdentifier) {
			return visitor.visitAgIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CIdentifierContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PROV_NParser.RULE_cIdentifier; }
	// @Override
	public enterRule(listener: PROV_NListener): void {
		if (listener.enterCIdentifier) {
			listener.enterCIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: PROV_NListener): void {
		if (listener.exitCIdentifier) {
			listener.exitCIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PROV_NVisitor<Result>): Result {
		if (visitor.visitCIdentifier) {
			return visitor.visitCIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GIdentifierContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PROV_NParser.RULE_gIdentifier; }
	// @Override
	public enterRule(listener: PROV_NListener): void {
		if (listener.enterGIdentifier) {
			listener.enterGIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: PROV_NListener): void {
		if (listener.exitGIdentifier) {
			listener.exitGIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PROV_NVisitor<Result>): Result {
		if (visitor.visitGIdentifier) {
			return visitor.visitGIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GIdentifierOrMarkerContext extends ParserRuleContext {
	public gIdentifier(): GIdentifierContext | undefined {
		return this.tryGetRuleContext(0, GIdentifierContext);
	}
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(PROV_NParser.MINUS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PROV_NParser.RULE_gIdentifierOrMarker; }
	// @Override
	public enterRule(listener: PROV_NListener): void {
		if (listener.enterGIdentifierOrMarker) {
			listener.enterGIdentifierOrMarker(this);
		}
	}
	// @Override
	public exitRule(listener: PROV_NListener): void {
		if (listener.exitGIdentifierOrMarker) {
			listener.exitGIdentifierOrMarker(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PROV_NVisitor<Result>): Result {
		if (visitor.visitGIdentifierOrMarker) {
			return visitor.visitGIdentifierOrMarker(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UIdentifierContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PROV_NParser.RULE_uIdentifier; }
	// @Override
	public enterRule(listener: PROV_NListener): void {
		if (listener.enterUIdentifier) {
			listener.enterUIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: PROV_NListener): void {
		if (listener.exitUIdentifier) {
			listener.exitUIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PROV_NVisitor<Result>): Result {
		if (visitor.visitUIdentifier) {
			return visitor.visitUIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UIdentifierOrMarkerContext extends ParserRuleContext {
	public uIdentifier(): UIdentifierContext | undefined {
		return this.tryGetRuleContext(0, UIdentifierContext);
	}
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(PROV_NParser.MINUS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PROV_NParser.RULE_uIdentifierOrMarker; }
	// @Override
	public enterRule(listener: PROV_NListener): void {
		if (listener.enterUIdentifierOrMarker) {
			listener.enterUIdentifierOrMarker(this);
		}
	}
	// @Override
	public exitRule(listener: PROV_NListener): void {
		if (listener.exitUIdentifierOrMarker) {
			listener.exitUIdentifierOrMarker(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PROV_NVisitor<Result>): Result {
		if (visitor.visitUIdentifierOrMarker) {
			return visitor.visitUIdentifierOrMarker(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UsageExpressionContext extends ParserRuleContext {
	public optionalIdentifier(): OptionalIdentifierContext {
		return this.getRuleContext(0, OptionalIdentifierContext);
	}
	public aIdentifier(): AIdentifierContext {
		return this.getRuleContext(0, AIdentifierContext);
	}
	public optionalAttributeValuePairs(): OptionalAttributeValuePairsContext {
		return this.getRuleContext(0, OptionalAttributeValuePairsContext);
	}
	public eIdentifierOrMarker(): EIdentifierOrMarkerContext | undefined {
		return this.tryGetRuleContext(0, EIdentifierOrMarkerContext);
	}
	public timeOrMarker(): TimeOrMarkerContext | undefined {
		return this.tryGetRuleContext(0, TimeOrMarkerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PROV_NParser.RULE_usageExpression; }
	// @Override
	public enterRule(listener: PROV_NListener): void {
		if (listener.enterUsageExpression) {
			listener.enterUsageExpression(this);
		}
	}
	// @Override
	public exitRule(listener: PROV_NListener): void {
		if (listener.exitUsageExpression) {
			listener.exitUsageExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PROV_NVisitor<Result>): Result {
		if (visitor.visitUsageExpression) {
			return visitor.visitUsageExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StartExpressionContext extends ParserRuleContext {
	public optionalIdentifier(): OptionalIdentifierContext {
		return this.getRuleContext(0, OptionalIdentifierContext);
	}
	public aIdentifier(): AIdentifierContext {
		return this.getRuleContext(0, AIdentifierContext);
	}
	public optionalAttributeValuePairs(): OptionalAttributeValuePairsContext {
		return this.getRuleContext(0, OptionalAttributeValuePairsContext);
	}
	public eIdentifierOrMarker(): EIdentifierOrMarkerContext | undefined {
		return this.tryGetRuleContext(0, EIdentifierOrMarkerContext);
	}
	public aIdentifierOrMarker(): AIdentifierOrMarkerContext | undefined {
		return this.tryGetRuleContext(0, AIdentifierOrMarkerContext);
	}
	public timeOrMarker(): TimeOrMarkerContext | undefined {
		return this.tryGetRuleContext(0, TimeOrMarkerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PROV_NParser.RULE_startExpression; }
	// @Override
	public enterRule(listener: PROV_NListener): void {
		if (listener.enterStartExpression) {
			listener.enterStartExpression(this);
		}
	}
	// @Override
	public exitRule(listener: PROV_NListener): void {
		if (listener.exitStartExpression) {
			listener.exitStartExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PROV_NVisitor<Result>): Result {
		if (visitor.visitStartExpression) {
			return visitor.visitStartExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EndExpressionContext extends ParserRuleContext {
	public optionalIdentifier(): OptionalIdentifierContext {
		return this.getRuleContext(0, OptionalIdentifierContext);
	}
	public aIdentifier(): AIdentifierContext {
		return this.getRuleContext(0, AIdentifierContext);
	}
	public optionalAttributeValuePairs(): OptionalAttributeValuePairsContext {
		return this.getRuleContext(0, OptionalAttributeValuePairsContext);
	}
	public eIdentifierOrMarker(): EIdentifierOrMarkerContext | undefined {
		return this.tryGetRuleContext(0, EIdentifierOrMarkerContext);
	}
	public aIdentifierOrMarker(): AIdentifierOrMarkerContext | undefined {
		return this.tryGetRuleContext(0, AIdentifierOrMarkerContext);
	}
	public timeOrMarker(): TimeOrMarkerContext | undefined {
		return this.tryGetRuleContext(0, TimeOrMarkerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PROV_NParser.RULE_endExpression; }
	// @Override
	public enterRule(listener: PROV_NListener): void {
		if (listener.enterEndExpression) {
			listener.enterEndExpression(this);
		}
	}
	// @Override
	public exitRule(listener: PROV_NListener): void {
		if (listener.exitEndExpression) {
			listener.exitEndExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PROV_NVisitor<Result>): Result {
		if (visitor.visitEndExpression) {
			return visitor.visitEndExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InvalidationExpressionContext extends ParserRuleContext {
	public optionalIdentifier(): OptionalIdentifierContext {
		return this.getRuleContext(0, OptionalIdentifierContext);
	}
	public eIdentifier(): EIdentifierContext {
		return this.getRuleContext(0, EIdentifierContext);
	}
	public optionalAttributeValuePairs(): OptionalAttributeValuePairsContext {
		return this.getRuleContext(0, OptionalAttributeValuePairsContext);
	}
	public aIdentifierOrMarker(): AIdentifierOrMarkerContext | undefined {
		return this.tryGetRuleContext(0, AIdentifierOrMarkerContext);
	}
	public timeOrMarker(): TimeOrMarkerContext | undefined {
		return this.tryGetRuleContext(0, TimeOrMarkerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PROV_NParser.RULE_invalidationExpression; }
	// @Override
	public enterRule(listener: PROV_NListener): void {
		if (listener.enterInvalidationExpression) {
			listener.enterInvalidationExpression(this);
		}
	}
	// @Override
	public exitRule(listener: PROV_NListener): void {
		if (listener.exitInvalidationExpression) {
			listener.exitInvalidationExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PROV_NVisitor<Result>): Result {
		if (visitor.visitInvalidationExpression) {
			return visitor.visitInvalidationExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CommunicationExpressionContext extends ParserRuleContext {
	public optionalIdentifier(): OptionalIdentifierContext {
		return this.getRuleContext(0, OptionalIdentifierContext);
	}
	public aIdentifier(): AIdentifierContext[];
	public aIdentifier(i: number): AIdentifierContext;
	public aIdentifier(i?: number): AIdentifierContext | AIdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AIdentifierContext);
		} else {
			return this.getRuleContext(i, AIdentifierContext);
		}
	}
	public optionalAttributeValuePairs(): OptionalAttributeValuePairsContext {
		return this.getRuleContext(0, OptionalAttributeValuePairsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PROV_NParser.RULE_communicationExpression; }
	// @Override
	public enterRule(listener: PROV_NListener): void {
		if (listener.enterCommunicationExpression) {
			listener.enterCommunicationExpression(this);
		}
	}
	// @Override
	public exitRule(listener: PROV_NListener): void {
		if (listener.exitCommunicationExpression) {
			listener.exitCommunicationExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PROV_NVisitor<Result>): Result {
		if (visitor.visitCommunicationExpression) {
			return visitor.visitCommunicationExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AgentExpressionContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public optionalAttributeValuePairs(): OptionalAttributeValuePairsContext {
		return this.getRuleContext(0, OptionalAttributeValuePairsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PROV_NParser.RULE_agentExpression; }
	// @Override
	public enterRule(listener: PROV_NListener): void {
		if (listener.enterAgentExpression) {
			listener.enterAgentExpression(this);
		}
	}
	// @Override
	public exitRule(listener: PROV_NListener): void {
		if (listener.exitAgentExpression) {
			listener.exitAgentExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PROV_NVisitor<Result>): Result {
		if (visitor.visitAgentExpression) {
			return visitor.visitAgentExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssociationExpressionContext extends ParserRuleContext {
	public optionalIdentifier(): OptionalIdentifierContext {
		return this.getRuleContext(0, OptionalIdentifierContext);
	}
	public aIdentifier(): AIdentifierContext {
		return this.getRuleContext(0, AIdentifierContext);
	}
	public optionalAttributeValuePairs(): OptionalAttributeValuePairsContext {
		return this.getRuleContext(0, OptionalAttributeValuePairsContext);
	}
	public agIdentifierOrMarker(): AgIdentifierOrMarkerContext | undefined {
		return this.tryGetRuleContext(0, AgIdentifierOrMarkerContext);
	}
	public eIdentifierOrMarker(): EIdentifierOrMarkerContext | undefined {
		return this.tryGetRuleContext(0, EIdentifierOrMarkerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PROV_NParser.RULE_associationExpression; }
	// @Override
	public enterRule(listener: PROV_NListener): void {
		if (listener.enterAssociationExpression) {
			listener.enterAssociationExpression(this);
		}
	}
	// @Override
	public exitRule(listener: PROV_NListener): void {
		if (listener.exitAssociationExpression) {
			listener.exitAssociationExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PROV_NVisitor<Result>): Result {
		if (visitor.visitAssociationExpression) {
			return visitor.visitAssociationExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AttributionExpressionContext extends ParserRuleContext {
	public optionalIdentifier(): OptionalIdentifierContext {
		return this.getRuleContext(0, OptionalIdentifierContext);
	}
	public eIdentifier(): EIdentifierContext {
		return this.getRuleContext(0, EIdentifierContext);
	}
	public agIdentifier(): AgIdentifierContext {
		return this.getRuleContext(0, AgIdentifierContext);
	}
	public optionalAttributeValuePairs(): OptionalAttributeValuePairsContext {
		return this.getRuleContext(0, OptionalAttributeValuePairsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PROV_NParser.RULE_attributionExpression; }
	// @Override
	public enterRule(listener: PROV_NListener): void {
		if (listener.enterAttributionExpression) {
			listener.enterAttributionExpression(this);
		}
	}
	// @Override
	public exitRule(listener: PROV_NListener): void {
		if (listener.exitAttributionExpression) {
			listener.exitAttributionExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PROV_NVisitor<Result>): Result {
		if (visitor.visitAttributionExpression) {
			return visitor.visitAttributionExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DelegationExpressionContext extends ParserRuleContext {
	public optionalIdentifier(): OptionalIdentifierContext {
		return this.getRuleContext(0, OptionalIdentifierContext);
	}
	public agIdentifier(): AgIdentifierContext[];
	public agIdentifier(i: number): AgIdentifierContext;
	public agIdentifier(i?: number): AgIdentifierContext | AgIdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AgIdentifierContext);
		} else {
			return this.getRuleContext(i, AgIdentifierContext);
		}
	}
	public optionalAttributeValuePairs(): OptionalAttributeValuePairsContext {
		return this.getRuleContext(0, OptionalAttributeValuePairsContext);
	}
	public aIdentifierOrMarker(): AIdentifierOrMarkerContext | undefined {
		return this.tryGetRuleContext(0, AIdentifierOrMarkerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PROV_NParser.RULE_delegationExpression; }
	// @Override
	public enterRule(listener: PROV_NListener): void {
		if (listener.enterDelegationExpression) {
			listener.enterDelegationExpression(this);
		}
	}
	// @Override
	public exitRule(listener: PROV_NListener): void {
		if (listener.exitDelegationExpression) {
			listener.exitDelegationExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PROV_NVisitor<Result>): Result {
		if (visitor.visitDelegationExpression) {
			return visitor.visitDelegationExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DerivationExpressionContext extends ParserRuleContext {
	public optionalIdentifier(): OptionalIdentifierContext {
		return this.getRuleContext(0, OptionalIdentifierContext);
	}
	public eIdentifier(): EIdentifierContext[];
	public eIdentifier(i: number): EIdentifierContext;
	public eIdentifier(i?: number): EIdentifierContext | EIdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EIdentifierContext);
		} else {
			return this.getRuleContext(i, EIdentifierContext);
		}
	}
	public optionalAttributeValuePairs(): OptionalAttributeValuePairsContext {
		return this.getRuleContext(0, OptionalAttributeValuePairsContext);
	}
	public aIdentifierOrMarker(): AIdentifierOrMarkerContext | undefined {
		return this.tryGetRuleContext(0, AIdentifierOrMarkerContext);
	}
	public gIdentifierOrMarker(): GIdentifierOrMarkerContext | undefined {
		return this.tryGetRuleContext(0, GIdentifierOrMarkerContext);
	}
	public uIdentifierOrMarker(): UIdentifierOrMarkerContext | undefined {
		return this.tryGetRuleContext(0, UIdentifierOrMarkerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PROV_NParser.RULE_derivationExpression; }
	// @Override
	public enterRule(listener: PROV_NListener): void {
		if (listener.enterDerivationExpression) {
			listener.enterDerivationExpression(this);
		}
	}
	// @Override
	public exitRule(listener: PROV_NListener): void {
		if (listener.exitDerivationExpression) {
			listener.exitDerivationExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PROV_NVisitor<Result>): Result {
		if (visitor.visitDerivationExpression) {
			return visitor.visitDerivationExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InfluenceExpressionContext extends ParserRuleContext {
	public optionalIdentifier(): OptionalIdentifierContext {
		return this.getRuleContext(0, OptionalIdentifierContext);
	}
	public eIdentifier(): EIdentifierContext[];
	public eIdentifier(i: number): EIdentifierContext;
	public eIdentifier(i?: number): EIdentifierContext | EIdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EIdentifierContext);
		} else {
			return this.getRuleContext(i, EIdentifierContext);
		}
	}
	public optionalAttributeValuePairs(): OptionalAttributeValuePairsContext {
		return this.getRuleContext(0, OptionalAttributeValuePairsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PROV_NParser.RULE_influenceExpression; }
	// @Override
	public enterRule(listener: PROV_NListener): void {
		if (listener.enterInfluenceExpression) {
			listener.enterInfluenceExpression(this);
		}
	}
	// @Override
	public exitRule(listener: PROV_NListener): void {
		if (listener.exitInfluenceExpression) {
			listener.exitInfluenceExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PROV_NVisitor<Result>): Result {
		if (visitor.visitInfluenceExpression) {
			return visitor.visitInfluenceExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AlternateExpressionContext extends ParserRuleContext {
	public eIdentifier(): EIdentifierContext[];
	public eIdentifier(i: number): EIdentifierContext;
	public eIdentifier(i?: number): EIdentifierContext | EIdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EIdentifierContext);
		} else {
			return this.getRuleContext(i, EIdentifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PROV_NParser.RULE_alternateExpression; }
	// @Override
	public enterRule(listener: PROV_NListener): void {
		if (listener.enterAlternateExpression) {
			listener.enterAlternateExpression(this);
		}
	}
	// @Override
	public exitRule(listener: PROV_NListener): void {
		if (listener.exitAlternateExpression) {
			listener.exitAlternateExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PROV_NVisitor<Result>): Result {
		if (visitor.visitAlternateExpression) {
			return visitor.visitAlternateExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SpecializationExpressionContext extends ParserRuleContext {
	public eIdentifier(): EIdentifierContext[];
	public eIdentifier(i: number): EIdentifierContext;
	public eIdentifier(i?: number): EIdentifierContext | EIdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EIdentifierContext);
		} else {
			return this.getRuleContext(i, EIdentifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PROV_NParser.RULE_specializationExpression; }
	// @Override
	public enterRule(listener: PROV_NListener): void {
		if (listener.enterSpecializationExpression) {
			listener.enterSpecializationExpression(this);
		}
	}
	// @Override
	public exitRule(listener: PROV_NListener): void {
		if (listener.exitSpecializationExpression) {
			listener.exitSpecializationExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PROV_NVisitor<Result>): Result {
		if (visitor.visitSpecializationExpression) {
			return visitor.visitSpecializationExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MembershipExpressionContext extends ParserRuleContext {
	public cIdentifier(): CIdentifierContext {
		return this.getRuleContext(0, CIdentifierContext);
	}
	public eIdentifier(): EIdentifierContext {
		return this.getRuleContext(0, EIdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PROV_NParser.RULE_membershipExpression; }
	// @Override
	public enterRule(listener: PROV_NListener): void {
		if (listener.enterMembershipExpression) {
			listener.enterMembershipExpression(this);
		}
	}
	// @Override
	public exitRule(listener: PROV_NListener): void {
		if (listener.exitMembershipExpression) {
			listener.exitMembershipExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PROV_NVisitor<Result>): Result {
		if (visitor.visitMembershipExpression) {
			return visitor.visitMembershipExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExtensibilityExpressionContext extends ParserRuleContext {
	public optionalIdentifier(): OptionalIdentifierContext {
		return this.getRuleContext(0, OptionalIdentifierContext);
	}
	public extensibilityArgument(): ExtensibilityArgumentContext[];
	public extensibilityArgument(i: number): ExtensibilityArgumentContext;
	public extensibilityArgument(i?: number): ExtensibilityArgumentContext | ExtensibilityArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExtensibilityArgumentContext);
		} else {
			return this.getRuleContext(i, ExtensibilityArgumentContext);
		}
	}
	public optionalAttributeValuePairs(): OptionalAttributeValuePairsContext {
		return this.getRuleContext(0, OptionalAttributeValuePairsContext);
	}
	public PREFX(): TerminalNode | undefined { return this.tryGetToken(PROV_NParser.PREFX, 0); }
	public QUALIFIED_NAME(): TerminalNode | undefined { return this.tryGetToken(PROV_NParser.QUALIFIED_NAME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PROV_NParser.RULE_extensibilityExpression; }
	// @Override
	public enterRule(listener: PROV_NListener): void {
		if (listener.enterExtensibilityExpression) {
			listener.enterExtensibilityExpression(this);
		}
	}
	// @Override
	public exitRule(listener: PROV_NListener): void {
		if (listener.exitExtensibilityExpression) {
			listener.exitExtensibilityExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PROV_NVisitor<Result>): Result {
		if (visitor.visitExtensibilityExpression) {
			return visitor.visitExtensibilityExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExtensibilityArgumentContext extends ParserRuleContext {
	public identifierOrMarker(): IdentifierOrMarkerContext | undefined {
		return this.tryGetRuleContext(0, IdentifierOrMarkerContext);
	}
	public literal(): LiteralContext | undefined {
		return this.tryGetRuleContext(0, LiteralContext);
	}
	public time(): TimeContext | undefined {
		return this.tryGetRuleContext(0, TimeContext);
	}
	public extensibilityExpression(): ExtensibilityExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExtensibilityExpressionContext);
	}
	public extensibilityTuple(): ExtensibilityTupleContext | undefined {
		return this.tryGetRuleContext(0, ExtensibilityTupleContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PROV_NParser.RULE_extensibilityArgument; }
	// @Override
	public enterRule(listener: PROV_NListener): void {
		if (listener.enterExtensibilityArgument) {
			listener.enterExtensibilityArgument(this);
		}
	}
	// @Override
	public exitRule(listener: PROV_NListener): void {
		if (listener.exitExtensibilityArgument) {
			listener.exitExtensibilityArgument(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PROV_NVisitor<Result>): Result {
		if (visitor.visitExtensibilityArgument) {
			return visitor.visitExtensibilityArgument(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExtensibilityTupleContext extends ParserRuleContext {
	public extensibilityArgument(): ExtensibilityArgumentContext[];
	public extensibilityArgument(i: number): ExtensibilityArgumentContext;
	public extensibilityArgument(i?: number): ExtensibilityArgumentContext | ExtensibilityArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExtensibilityArgumentContext);
		} else {
			return this.getRuleContext(i, ExtensibilityArgumentContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PROV_NParser.RULE_extensibilityTuple; }
	// @Override
	public enterRule(listener: PROV_NListener): void {
		if (listener.enterExtensibilityTuple) {
			listener.enterExtensibilityTuple(this);
		}
	}
	// @Override
	public exitRule(listener: PROV_NListener): void {
		if (listener.exitExtensibilityTuple) {
			listener.exitExtensibilityTuple(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PROV_NVisitor<Result>): Result {
		if (visitor.visitExtensibilityTuple) {
			return visitor.visitExtensibilityTuple(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


