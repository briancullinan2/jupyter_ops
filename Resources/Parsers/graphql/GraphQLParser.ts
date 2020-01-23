// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/graphql/GraphQL.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { GraphQLListener } from "./GraphQLListener";
import { GraphQLVisitor } from "./GraphQLVisitor";


export class GraphQLParser extends Parser {
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
	public static readonly BooleanLiteral = 50;
	public static readonly NAME = 51;
	public static readonly String_ = 52;
	public static readonly STRING = 53;
	public static readonly BLOCK_STRING = 54;
	public static readonly ID = 55;
	public static readonly NUMBER = 56;
	public static readonly WS = 57;
	public static readonly LineComment = 58;
	public static readonly RULE_document = 0;
	public static readonly RULE_definition = 1;
	public static readonly RULE_typeSystemDefinition = 2;
	public static readonly RULE_schemaDefinition = 3;
	public static readonly RULE_rootOperationTypeDefinitionList = 4;
	public static readonly RULE_rootOperationTypeDefinition = 5;
	public static readonly RULE_namedType = 6;
	public static readonly RULE_typeDefinition = 7;
	public static readonly RULE_scalarTypeDefinition = 8;
	public static readonly RULE_description = 9;
	public static readonly RULE_objectTypeDefinition = 10;
	public static readonly RULE_implementsInterfaces = 11;
	public static readonly RULE_fieldsDefinitions = 12;
	public static readonly RULE_fieldsDefinition = 13;
	public static readonly RULE_argumentsDefinition = 14;
	public static readonly RULE_inputValueDefinition = 15;
	public static readonly RULE_interfaceTypeDefinition = 16;
	public static readonly RULE_unionTypeDefinition = 17;
	public static readonly RULE_unionMemberTypes = 18;
	public static readonly RULE_unionTypeExtension = 19;
	public static readonly RULE_enumTypeDefinition = 20;
	public static readonly RULE_enumValuesDefinitions = 21;
	public static readonly RULE_enumValue = 22;
	public static readonly RULE_enumTypeExtension = 23;
	public static readonly RULE_inputObjectTypeDefinition = 24;
	public static readonly RULE_inputFieldsDefinition = 25;
	public static readonly RULE_directiveDefinition = 26;
	public static readonly RULE_directiveLocations = 27;
	public static readonly RULE_directiveLocation = 28;
	public static readonly RULE_executableDirectiveLocation = 29;
	public static readonly RULE_typeSystemDirectiveLocation = 30;
	public static readonly RULE_typeSystemExtension = 31;
	public static readonly RULE_schemaExtension = 32;
	public static readonly RULE_typeExtension = 33;
	public static readonly RULE_execDefinition = 34;
	public static readonly RULE_operationDefinition = 35;
	public static readonly RULE_selectionSet = 36;
	public static readonly RULE_operationType = 37;
	public static readonly RULE_selection = 38;
	public static readonly RULE_field = 39;
	public static readonly RULE_fieldName = 40;
	public static readonly RULE_alias = 41;
	public static readonly RULE_arguments = 42;
	public static readonly RULE_argument = 43;
	public static readonly RULE_fragmentSpread = 44;
	public static readonly RULE_inlineFragment = 45;
	public static readonly RULE_fragmentDefinition = 46;
	public static readonly RULE_fragmentName = 47;
	public static readonly RULE_directives = 48;
	public static readonly RULE_directive = 49;
	public static readonly RULE_typeCondition = 50;
	public static readonly RULE_variableDefinitions = 51;
	public static readonly RULE_variableDefinition = 52;
	public static readonly RULE_variable = 53;
	public static readonly RULE_defaultValue = 54;
	public static readonly RULE_valueOrVariable = 55;
	public static readonly RULE_value = 56;
	public static readonly RULE_type_ = 57;
	public static readonly RULE_typeName = 58;
	public static readonly RULE_listType = 59;
	public static readonly RULE_nonNullType = 60;
	public static readonly RULE_array = 61;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"document", "definition", "typeSystemDefinition", "schemaDefinition", 
		"rootOperationTypeDefinitionList", "rootOperationTypeDefinition", "namedType", 
		"typeDefinition", "scalarTypeDefinition", "description", "objectTypeDefinition", 
		"implementsInterfaces", "fieldsDefinitions", "fieldsDefinition", "argumentsDefinition", 
		"inputValueDefinition", "interfaceTypeDefinition", "unionTypeDefinition", 
		"unionMemberTypes", "unionTypeExtension", "enumTypeDefinition", "enumValuesDefinitions", 
		"enumValue", "enumTypeExtension", "inputObjectTypeDefinition", "inputFieldsDefinition", 
		"directiveDefinition", "directiveLocations", "directiveLocation", "executableDirectiveLocation", 
		"typeSystemDirectiveLocation", "typeSystemExtension", "schemaExtension", 
		"typeExtension", "execDefinition", "operationDefinition", "selectionSet", 
		"operationType", "selection", "field", "fieldName", "alias", "arguments", 
		"argument", "fragmentSpread", "inlineFragment", "fragmentDefinition", 
		"fragmentName", "directives", "directive", "typeCondition", "variableDefinitions", 
		"variableDefinition", "variable", "defaultValue", "valueOrVariable", "value", 
		"type_", "typeName", "listType", "nonNullType", "array",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'schema'", "'{'", "','", "'}'", "':'", "'scalar'", "'type'", 
		"'implements'", "'&'", "'('", "')'", "'interface'", "'union'", "'='", 
		"'|'", "'extend'", "'enum'", "'input'", "'directive'", "'@'", "'on'", 
		"'QUERY'", "'MUTATION'", "'SUBSCRIPTION'", "'FIELD'", "'FRAGMENT_DEFINITION'", 
		"'FRAGMENT_SPREAD'", "'INLINE_FRAGMENT'", "'SCHEMA'", "'SCALAR'", "'OBJECT'", 
		"'FIELD_DEFINITION'", "'ARGUMENT_DEFINITION'", "'INTERFACE'", "'UNION'", 
		"'ENUM'", "'ENUM_VALUE'", "'INPUT_OBJECT'", "'INPUT_FIELD_DEFINITION'", 
		"'query'", "'mutation'", "'subscription'", "'...'", "'fragment'", "'$'", 
		"'null'", "'['", "']'", "'!'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, "BooleanLiteral", "NAME", "String_", "STRING", "BLOCK_STRING", 
		"ID", "NUMBER", "WS", "LineComment",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(GraphQLParser._LITERAL_NAMES, GraphQLParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return GraphQLParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "GraphQL.g4"; }

	// @Override
	public get ruleNames(): string[] { return GraphQLParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return GraphQLParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(GraphQLParser._ATN, this);
	}
	// @RuleVersion(0)
	public document(): DocumentContext {
		let _localctx: DocumentContext = new DocumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, GraphQLParser.RULE_document);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 127;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 124;
					this.description();
					}
					}
				}
				this.state = 129;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
			}
			this.state = 131;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 130;
				this.definition();
				}
				}
				this.state = 133;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << GraphQLParser.T__0) | (1 << GraphQLParser.T__1) | (1 << GraphQLParser.T__5) | (1 << GraphQLParser.T__6) | (1 << GraphQLParser.T__11) | (1 << GraphQLParser.T__12) | (1 << GraphQLParser.T__15) | (1 << GraphQLParser.T__16) | (1 << GraphQLParser.T__17) | (1 << GraphQLParser.T__18))) !== 0) || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (GraphQLParser.T__39 - 40)) | (1 << (GraphQLParser.T__40 - 40)) | (1 << (GraphQLParser.T__41 - 40)) | (1 << (GraphQLParser.T__43 - 40)) | (1 << (GraphQLParser.String_ - 40)))) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public definition(): DefinitionContext {
		let _localctx: DefinitionContext = new DefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, GraphQLParser.RULE_definition);
		try {
			this.state = 138;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case GraphQLParser.T__1:
			case GraphQLParser.T__39:
			case GraphQLParser.T__40:
			case GraphQLParser.T__41:
			case GraphQLParser.T__43:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 135;
				this.execDefinition();
				}
				break;
			case GraphQLParser.T__0:
			case GraphQLParser.T__5:
			case GraphQLParser.T__6:
			case GraphQLParser.T__11:
			case GraphQLParser.T__12:
			case GraphQLParser.T__16:
			case GraphQLParser.T__17:
			case GraphQLParser.T__18:
			case GraphQLParser.String_:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 136;
				this.typeSystemDefinition();
				}
				break;
			case GraphQLParser.T__15:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 137;
				this.typeSystemExtension();
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
	public typeSystemDefinition(): TypeSystemDefinitionContext {
		let _localctx: TypeSystemDefinitionContext = new TypeSystemDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, GraphQLParser.RULE_typeSystemDefinition);
		try {
			this.state = 143;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 140;
				this.schemaDefinition();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 141;
				this.typeDefinition();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 142;
				this.directiveDefinition();
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
	public schemaDefinition(): SchemaDefinitionContext {
		let _localctx: SchemaDefinitionContext = new SchemaDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, GraphQLParser.RULE_schemaDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 145;
			this.match(GraphQLParser.T__0);
			this.state = 147;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === GraphQLParser.T__19) {
				{
				this.state = 146;
				this.directives();
				}
			}

			this.state = 149;
			this.rootOperationTypeDefinitionList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rootOperationTypeDefinitionList(): RootOperationTypeDefinitionListContext {
		let _localctx: RootOperationTypeDefinitionListContext = new RootOperationTypeDefinitionListContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, GraphQLParser.RULE_rootOperationTypeDefinitionList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 151;
			this.match(GraphQLParser.T__1);
			this.state = 152;
			this.rootOperationTypeDefinition();
			this.state = 159;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === GraphQLParser.T__2 || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (GraphQLParser.T__39 - 40)) | (1 << (GraphQLParser.T__40 - 40)) | (1 << (GraphQLParser.T__41 - 40)))) !== 0)) {
				{
				{
				this.state = 154;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === GraphQLParser.T__2) {
					{
					this.state = 153;
					this.match(GraphQLParser.T__2);
					}
				}

				this.state = 156;
				this.rootOperationTypeDefinition();
				}
				}
				this.state = 161;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 162;
			this.match(GraphQLParser.T__3);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rootOperationTypeDefinition(): RootOperationTypeDefinitionContext {
		let _localctx: RootOperationTypeDefinitionContext = new RootOperationTypeDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, GraphQLParser.RULE_rootOperationTypeDefinition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 164;
			this.operationType();
			this.state = 165;
			this.match(GraphQLParser.T__4);
			this.state = 166;
			this.namedType();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public namedType(): NamedTypeContext {
		let _localctx: NamedTypeContext = new NamedTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, GraphQLParser.RULE_namedType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 168;
			this.match(GraphQLParser.NAME);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeDefinition(): TypeDefinitionContext {
		let _localctx: TypeDefinitionContext = new TypeDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, GraphQLParser.RULE_typeDefinition);
		try {
			this.state = 176;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 170;
				this.scalarTypeDefinition();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 171;
				this.objectTypeDefinition();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 172;
				this.interfaceTypeDefinition();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 173;
				this.unionTypeDefinition();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 174;
				this.enumTypeDefinition();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 175;
				this.inputObjectTypeDefinition();
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
	public scalarTypeDefinition(): ScalarTypeDefinitionContext {
		let _localctx: ScalarTypeDefinitionContext = new ScalarTypeDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, GraphQLParser.RULE_scalarTypeDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 179;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === GraphQLParser.String_) {
				{
				this.state = 178;
				this.description();
				}
			}

			this.state = 181;
			this.match(GraphQLParser.T__5);
			this.state = 182;
			this.match(GraphQLParser.NAME);
			this.state = 183;
			this.directives();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 18, GraphQLParser.RULE_description);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 185;
			this.match(GraphQLParser.String_);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public objectTypeDefinition(): ObjectTypeDefinitionContext {
		let _localctx: ObjectTypeDefinitionContext = new ObjectTypeDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, GraphQLParser.RULE_objectTypeDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 188;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === GraphQLParser.String_) {
				{
				this.state = 187;
				this.description();
				}
			}

			this.state = 190;
			this.match(GraphQLParser.T__6);
			this.state = 191;
			this.match(GraphQLParser.NAME);
			this.state = 193;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === GraphQLParser.T__7) {
				{
				this.state = 192;
				this.implementsInterfaces(0);
				}
			}

			this.state = 196;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === GraphQLParser.T__19) {
				{
				this.state = 195;
				this.directives();
				}
			}

			this.state = 199;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				{
				this.state = 198;
				this.fieldsDefinitions();
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

	public implementsInterfaces(): ImplementsInterfacesContext;
	public implementsInterfaces(_p: number): ImplementsInterfacesContext;
	// @RuleVersion(0)
	public implementsInterfaces(_p?: number): ImplementsInterfacesContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ImplementsInterfacesContext = new ImplementsInterfacesContext(this._ctx, _parentState);
		let _prevctx: ImplementsInterfacesContext = _localctx;
		let _startState: number = 22;
		this.enterRecursionRule(_localctx, 22, GraphQLParser.RULE_implementsInterfaces, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 202;
			this.match(GraphQLParser.T__7);
			this.state = 204;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === GraphQLParser.T__8) {
				{
				this.state = 203;
				this.match(GraphQLParser.T__8);
				}
			}

			this.state = 206;
			this.type_();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 213;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new ImplementsInterfacesContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, GraphQLParser.RULE_implementsInterfaces);
					this.state = 208;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 209;
					this.match(GraphQLParser.T__8);
					this.state = 210;
					this.type_();
					}
					}
				}
				this.state = 215;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
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
	public fieldsDefinitions(): FieldsDefinitionsContext {
		let _localctx: FieldsDefinitionsContext = new FieldsDefinitionsContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, GraphQLParser.RULE_fieldsDefinitions);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 216;
			this.match(GraphQLParser.T__1);
			this.state = 218;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 217;
				this.fieldsDefinition();
				}
				}
				this.state = 220;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === GraphQLParser.NAME || _la === GraphQLParser.String_);
			this.state = 222;
			this.match(GraphQLParser.T__3);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldsDefinition(): FieldsDefinitionContext {
		let _localctx: FieldsDefinitionContext = new FieldsDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, GraphQLParser.RULE_fieldsDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 225;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === GraphQLParser.String_) {
				{
				this.state = 224;
				this.description();
				}
			}

			this.state = 227;
			this.match(GraphQLParser.NAME);
			this.state = 229;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === GraphQLParser.T__9) {
				{
				this.state = 228;
				this.argumentsDefinition();
				}
			}

			this.state = 231;
			this.match(GraphQLParser.T__4);
			this.state = 232;
			this.type_();
			this.state = 234;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === GraphQLParser.T__19) {
				{
				this.state = 233;
				this.directives();
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
	public argumentsDefinition(): ArgumentsDefinitionContext {
		let _localctx: ArgumentsDefinitionContext = new ArgumentsDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, GraphQLParser.RULE_argumentsDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 236;
			this.match(GraphQLParser.T__9);
			this.state = 237;
			this.inputValueDefinition();
			this.state = 242;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === GraphQLParser.T__2) {
				{
				{
				this.state = 238;
				this.match(GraphQLParser.T__2);
				this.state = 239;
				this.inputValueDefinition();
				}
				}
				this.state = 244;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 245;
			this.match(GraphQLParser.T__10);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public inputValueDefinition(): InputValueDefinitionContext {
		let _localctx: InputValueDefinitionContext = new InputValueDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, GraphQLParser.RULE_inputValueDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 248;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === GraphQLParser.String_) {
				{
				this.state = 247;
				this.description();
				}
			}

			this.state = 250;
			this.match(GraphQLParser.NAME);
			this.state = 251;
			this.match(GraphQLParser.T__4);
			this.state = 252;
			this.type_();
			this.state = 254;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === GraphQLParser.T__13) {
				{
				this.state = 253;
				this.defaultValue();
				}
			}

			this.state = 257;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === GraphQLParser.T__19) {
				{
				this.state = 256;
				this.directives();
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
	public interfaceTypeDefinition(): InterfaceTypeDefinitionContext {
		let _localctx: InterfaceTypeDefinitionContext = new InterfaceTypeDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, GraphQLParser.RULE_interfaceTypeDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 260;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === GraphQLParser.String_) {
				{
				this.state = 259;
				this.description();
				}
			}

			this.state = 262;
			this.match(GraphQLParser.T__11);
			this.state = 263;
			this.match(GraphQLParser.NAME);
			this.state = 265;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === GraphQLParser.T__19) {
				{
				this.state = 264;
				this.directives();
				}
			}

			this.state = 268;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 25, this._ctx) ) {
			case 1:
				{
				this.state = 267;
				this.fieldsDefinitions();
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
	public unionTypeDefinition(): UnionTypeDefinitionContext {
		let _localctx: UnionTypeDefinitionContext = new UnionTypeDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, GraphQLParser.RULE_unionTypeDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 271;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === GraphQLParser.String_) {
				{
				this.state = 270;
				this.description();
				}
			}

			this.state = 273;
			this.match(GraphQLParser.T__12);
			this.state = 274;
			this.match(GraphQLParser.NAME);
			this.state = 276;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === GraphQLParser.T__19) {
				{
				this.state = 275;
				this.directives();
				}
			}

			this.state = 279;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === GraphQLParser.T__13) {
				{
				this.state = 278;
				this.unionMemberTypes();
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
	public unionMemberTypes(): UnionMemberTypesContext {
		let _localctx: UnionMemberTypesContext = new UnionMemberTypesContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, GraphQLParser.RULE_unionMemberTypes);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 281;
			this.match(GraphQLParser.T__13);
			this.state = 282;
			this.type_();
			this.state = 287;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === GraphQLParser.T__14) {
				{
				{
				this.state = 283;
				this.match(GraphQLParser.T__14);
				this.state = 284;
				this.type_();
				}
				}
				this.state = 289;
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
	public unionTypeExtension(): UnionTypeExtensionContext {
		let _localctx: UnionTypeExtensionContext = new UnionTypeExtensionContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, GraphQLParser.RULE_unionTypeExtension);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 290;
			this.match(GraphQLParser.T__15);
			this.state = 291;
			this.unionTypeDefinition();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumTypeDefinition(): EnumTypeDefinitionContext {
		let _localctx: EnumTypeDefinitionContext = new EnumTypeDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, GraphQLParser.RULE_enumTypeDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 294;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === GraphQLParser.String_) {
				{
				this.state = 293;
				this.description();
				}
			}

			this.state = 296;
			this.match(GraphQLParser.T__16);
			this.state = 297;
			this.match(GraphQLParser.NAME);
			this.state = 299;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === GraphQLParser.T__19) {
				{
				this.state = 298;
				this.directives();
				}
			}

			this.state = 302;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 32, this._ctx) ) {
			case 1:
				{
				this.state = 301;
				this.enumValuesDefinitions();
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
	public enumValuesDefinitions(): EnumValuesDefinitionsContext {
		let _localctx: EnumValuesDefinitionsContext = new EnumValuesDefinitionsContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, GraphQLParser.RULE_enumValuesDefinitions);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 304;
			this.match(GraphQLParser.T__1);
			this.state = 312;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 306;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === GraphQLParser.String_) {
					{
					this.state = 305;
					this.description();
					}
				}

				this.state = 308;
				this.enumValue();
				this.state = 310;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === GraphQLParser.T__19) {
					{
					this.state = 309;
					this.directives();
					}
				}

				}
				}
				this.state = 314;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === GraphQLParser.NAME || _la === GraphQLParser.String_);
			this.state = 316;
			this.match(GraphQLParser.T__3);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumValue(): EnumValueContext {
		let _localctx: EnumValueContext = new EnumValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, GraphQLParser.RULE_enumValue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 318;
			this.match(GraphQLParser.NAME);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumTypeExtension(): EnumTypeExtensionContext {
		let _localctx: EnumTypeExtensionContext = new EnumTypeExtensionContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, GraphQLParser.RULE_enumTypeExtension);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 320;
			this.match(GraphQLParser.T__15);
			this.state = 321;
			this.enumTypeDefinition();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public inputObjectTypeDefinition(): InputObjectTypeDefinitionContext {
		let _localctx: InputObjectTypeDefinitionContext = new InputObjectTypeDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, GraphQLParser.RULE_inputObjectTypeDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 324;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === GraphQLParser.String_) {
				{
				this.state = 323;
				this.description();
				}
			}

			this.state = 326;
			this.match(GraphQLParser.T__17);
			this.state = 327;
			this.match(GraphQLParser.NAME);
			this.state = 329;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === GraphQLParser.T__19) {
				{
				this.state = 328;
				this.directives();
				}
			}

			this.state = 332;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 38, this._ctx) ) {
			case 1:
				{
				this.state = 331;
				this.inputFieldsDefinition();
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
	public inputFieldsDefinition(): InputFieldsDefinitionContext {
		let _localctx: InputFieldsDefinitionContext = new InputFieldsDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, GraphQLParser.RULE_inputFieldsDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 334;
			this.match(GraphQLParser.T__1);
			this.state = 336;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 335;
				this.inputValueDefinition();
				}
				}
				this.state = 338;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === GraphQLParser.NAME || _la === GraphQLParser.String_);
			this.state = 340;
			this.match(GraphQLParser.T__3);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public directiveDefinition(): DirectiveDefinitionContext {
		let _localctx: DirectiveDefinitionContext = new DirectiveDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, GraphQLParser.RULE_directiveDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 343;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === GraphQLParser.String_) {
				{
				this.state = 342;
				this.description();
				}
			}

			this.state = 345;
			this.match(GraphQLParser.T__18);
			this.state = 346;
			this.match(GraphQLParser.T__19);
			this.state = 347;
			this.match(GraphQLParser.NAME);
			this.state = 349;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === GraphQLParser.T__9) {
				{
				this.state = 348;
				this.argumentsDefinition();
				}
			}

			this.state = 351;
			this.match(GraphQLParser.T__20);
			this.state = 352;
			this.directiveLocations();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public directiveLocations(): DirectiveLocationsContext {
		let _localctx: DirectiveLocationsContext = new DirectiveLocationsContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, GraphQLParser.RULE_directiveLocations);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 354;
			this.directiveLocation();
			this.state = 359;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 42, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 355;
					this.match(GraphQLParser.T__14);
					this.state = 356;
					this.directiveLocations();
					}
					}
				}
				this.state = 361;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 42, this._ctx);
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
	public directiveLocation(): DirectiveLocationContext {
		let _localctx: DirectiveLocationContext = new DirectiveLocationContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, GraphQLParser.RULE_directiveLocation);
		try {
			this.state = 364;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case GraphQLParser.T__21:
			case GraphQLParser.T__22:
			case GraphQLParser.T__23:
			case GraphQLParser.T__24:
			case GraphQLParser.T__25:
			case GraphQLParser.T__26:
			case GraphQLParser.T__27:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 362;
				this.executableDirectiveLocation();
				}
				break;
			case GraphQLParser.T__28:
			case GraphQLParser.T__29:
			case GraphQLParser.T__30:
			case GraphQLParser.T__31:
			case GraphQLParser.T__32:
			case GraphQLParser.T__33:
			case GraphQLParser.T__34:
			case GraphQLParser.T__35:
			case GraphQLParser.T__36:
			case GraphQLParser.T__37:
			case GraphQLParser.T__38:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 363;
				this.typeSystemDirectiveLocation();
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
	public executableDirectiveLocation(): ExecutableDirectiveLocationContext {
		let _localctx: ExecutableDirectiveLocationContext = new ExecutableDirectiveLocationContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, GraphQLParser.RULE_executableDirectiveLocation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 366;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << GraphQLParser.T__21) | (1 << GraphQLParser.T__22) | (1 << GraphQLParser.T__23) | (1 << GraphQLParser.T__24) | (1 << GraphQLParser.T__25) | (1 << GraphQLParser.T__26) | (1 << GraphQLParser.T__27))) !== 0))) {
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
	public typeSystemDirectiveLocation(): TypeSystemDirectiveLocationContext {
		let _localctx: TypeSystemDirectiveLocationContext = new TypeSystemDirectiveLocationContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, GraphQLParser.RULE_typeSystemDirectiveLocation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 368;
			_la = this._input.LA(1);
			if (!(((((_la - 29)) & ~0x1F) === 0 && ((1 << (_la - 29)) & ((1 << (GraphQLParser.T__28 - 29)) | (1 << (GraphQLParser.T__29 - 29)) | (1 << (GraphQLParser.T__30 - 29)) | (1 << (GraphQLParser.T__31 - 29)) | (1 << (GraphQLParser.T__32 - 29)) | (1 << (GraphQLParser.T__33 - 29)) | (1 << (GraphQLParser.T__34 - 29)) | (1 << (GraphQLParser.T__35 - 29)) | (1 << (GraphQLParser.T__36 - 29)) | (1 << (GraphQLParser.T__37 - 29)) | (1 << (GraphQLParser.T__38 - 29)))) !== 0))) {
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
	public typeSystemExtension(): TypeSystemExtensionContext {
		let _localctx: TypeSystemExtensionContext = new TypeSystemExtensionContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, GraphQLParser.RULE_typeSystemExtension);
		try {
			this.state = 372;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 44, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 370;
				this.schemaExtension();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 371;
				this.typeExtension();
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
	public schemaExtension(): SchemaExtensionContext {
		let _localctx: SchemaExtensionContext = new SchemaExtensionContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, GraphQLParser.RULE_schemaExtension);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 374;
			this.match(GraphQLParser.T__15);
			this.state = 375;
			this.schemaDefinition();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeExtension(): TypeExtensionContext {
		let _localctx: TypeExtensionContext = new TypeExtensionContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, GraphQLParser.RULE_typeExtension);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 377;
			this.match(GraphQLParser.T__15);
			this.state = 378;
			this.typeDefinition();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public execDefinition(): ExecDefinitionContext {
		let _localctx: ExecDefinitionContext = new ExecDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, GraphQLParser.RULE_execDefinition);
		try {
			this.state = 382;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case GraphQLParser.T__1:
			case GraphQLParser.T__39:
			case GraphQLParser.T__40:
			case GraphQLParser.T__41:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 380;
				this.operationDefinition();
				}
				break;
			case GraphQLParser.T__43:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 381;
				this.fragmentDefinition();
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
	public operationDefinition(): OperationDefinitionContext {
		let _localctx: OperationDefinitionContext = new OperationDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, GraphQLParser.RULE_operationDefinition);
		let _la: number;
		try {
			this.state = 395;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case GraphQLParser.T__1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 384;
				this.selectionSet();
				}
				break;
			case GraphQLParser.T__39:
			case GraphQLParser.T__40:
			case GraphQLParser.T__41:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 385;
				this.operationType();
				this.state = 386;
				this.match(GraphQLParser.NAME);
				this.state = 388;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === GraphQLParser.T__9) {
					{
					this.state = 387;
					this.variableDefinitions();
					}
				}

				this.state = 391;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === GraphQLParser.T__19) {
					{
					this.state = 390;
					this.directives();
					}
				}

				this.state = 393;
				this.selectionSet();
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
	public selectionSet(): SelectionSetContext {
		let _localctx: SelectionSetContext = new SelectionSetContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, GraphQLParser.RULE_selectionSet);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 397;
			this.match(GraphQLParser.T__1);
			this.state = 398;
			this.selection();
			this.state = 405;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === GraphQLParser.T__2 || _la === GraphQLParser.T__42 || _la === GraphQLParser.NAME) {
				{
				{
				this.state = 400;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === GraphQLParser.T__2) {
					{
					this.state = 399;
					this.match(GraphQLParser.T__2);
					}
				}

				this.state = 402;
				this.selection();
				}
				}
				this.state = 407;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 408;
			this.match(GraphQLParser.T__3);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public operationType(): OperationTypeContext {
		let _localctx: OperationTypeContext = new OperationTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, GraphQLParser.RULE_operationType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 410;
			_la = this._input.LA(1);
			if (!(((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (GraphQLParser.T__39 - 40)) | (1 << (GraphQLParser.T__40 - 40)) | (1 << (GraphQLParser.T__41 - 40)))) !== 0))) {
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
	public selection(): SelectionContext {
		let _localctx: SelectionContext = new SelectionContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, GraphQLParser.RULE_selection);
		try {
			this.state = 415;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 51, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 412;
				this.field();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 413;
				this.fragmentSpread();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 414;
				this.inlineFragment();
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
	public field(): FieldContext {
		let _localctx: FieldContext = new FieldContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, GraphQLParser.RULE_field);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 417;
			this.fieldName();
			this.state = 419;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === GraphQLParser.T__9) {
				{
				this.state = 418;
				this.arguments();
				}
			}

			this.state = 422;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === GraphQLParser.T__19) {
				{
				this.state = 421;
				this.directives();
				}
			}

			this.state = 425;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === GraphQLParser.T__1) {
				{
				this.state = 424;
				this.selectionSet();
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
	public fieldName(): FieldNameContext {
		let _localctx: FieldNameContext = new FieldNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, GraphQLParser.RULE_fieldName);
		try {
			this.state = 429;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 55, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 427;
				this.alias();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 428;
				this.match(GraphQLParser.NAME);
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
	public alias(): AliasContext {
		let _localctx: AliasContext = new AliasContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, GraphQLParser.RULE_alias);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 431;
			this.match(GraphQLParser.NAME);
			this.state = 432;
			this.match(GraphQLParser.T__4);
			this.state = 433;
			this.match(GraphQLParser.NAME);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arguments(): ArgumentsContext {
		let _localctx: ArgumentsContext = new ArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, GraphQLParser.RULE_arguments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 435;
			this.match(GraphQLParser.T__9);
			this.state = 436;
			this.argument();
			this.state = 441;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === GraphQLParser.T__2) {
				{
				{
				this.state = 437;
				this.match(GraphQLParser.T__2);
				this.state = 438;
				this.argument();
				}
				}
				this.state = 443;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 444;
			this.match(GraphQLParser.T__10);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public argument(): ArgumentContext {
		let _localctx: ArgumentContext = new ArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, GraphQLParser.RULE_argument);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 446;
			this.match(GraphQLParser.NAME);
			this.state = 447;
			this.match(GraphQLParser.T__4);
			this.state = 448;
			this.valueOrVariable();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fragmentSpread(): FragmentSpreadContext {
		let _localctx: FragmentSpreadContext = new FragmentSpreadContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, GraphQLParser.RULE_fragmentSpread);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 450;
			this.match(GraphQLParser.T__42);
			this.state = 451;
			this.fragmentName();
			this.state = 453;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === GraphQLParser.T__19) {
				{
				this.state = 452;
				this.directives();
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
	public inlineFragment(): InlineFragmentContext {
		let _localctx: InlineFragmentContext = new InlineFragmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, GraphQLParser.RULE_inlineFragment);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 455;
			this.match(GraphQLParser.T__42);
			this.state = 456;
			this.match(GraphQLParser.T__20);
			this.state = 457;
			this.typeCondition();
			this.state = 459;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === GraphQLParser.T__19) {
				{
				this.state = 458;
				this.directives();
				}
			}

			this.state = 461;
			this.selectionSet();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fragmentDefinition(): FragmentDefinitionContext {
		let _localctx: FragmentDefinitionContext = new FragmentDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, GraphQLParser.RULE_fragmentDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 463;
			this.match(GraphQLParser.T__43);
			this.state = 464;
			this.fragmentName();
			this.state = 465;
			this.match(GraphQLParser.T__20);
			this.state = 466;
			this.typeCondition();
			this.state = 468;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === GraphQLParser.T__19) {
				{
				this.state = 467;
				this.directives();
				}
			}

			this.state = 470;
			this.selectionSet();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fragmentName(): FragmentNameContext {
		let _localctx: FragmentNameContext = new FragmentNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, GraphQLParser.RULE_fragmentName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 472;
			this.match(GraphQLParser.NAME);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public directives(): DirectivesContext {
		let _localctx: DirectivesContext = new DirectivesContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, GraphQLParser.RULE_directives);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 475;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 474;
				this.directive();
				}
				}
				this.state = 477;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === GraphQLParser.T__19);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 98, GraphQLParser.RULE_directive);
		try {
			this.state = 491;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 61, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 479;
				this.match(GraphQLParser.T__19);
				this.state = 480;
				this.match(GraphQLParser.NAME);
				this.state = 481;
				this.match(GraphQLParser.T__4);
				this.state = 482;
				this.valueOrVariable();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 483;
				this.match(GraphQLParser.T__19);
				this.state = 484;
				this.match(GraphQLParser.NAME);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 485;
				this.match(GraphQLParser.T__19);
				this.state = 486;
				this.match(GraphQLParser.NAME);
				this.state = 487;
				this.match(GraphQLParser.T__9);
				this.state = 488;
				this.argument();
				this.state = 489;
				this.match(GraphQLParser.T__10);
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
	public typeCondition(): TypeConditionContext {
		let _localctx: TypeConditionContext = new TypeConditionContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, GraphQLParser.RULE_typeCondition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 493;
			this.typeName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableDefinitions(): VariableDefinitionsContext {
		let _localctx: VariableDefinitionsContext = new VariableDefinitionsContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, GraphQLParser.RULE_variableDefinitions);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 495;
			this.match(GraphQLParser.T__9);
			this.state = 496;
			this.variableDefinition();
			this.state = 501;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === GraphQLParser.T__2) {
				{
				{
				this.state = 497;
				this.match(GraphQLParser.T__2);
				this.state = 498;
				this.variableDefinition();
				}
				}
				this.state = 503;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 504;
			this.match(GraphQLParser.T__10);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableDefinition(): VariableDefinitionContext {
		let _localctx: VariableDefinitionContext = new VariableDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, GraphQLParser.RULE_variableDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 506;
			this.variable();
			this.state = 507;
			this.match(GraphQLParser.T__4);
			this.state = 508;
			this.type_();
			this.state = 510;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === GraphQLParser.T__13) {
				{
				this.state = 509;
				this.defaultValue();
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
	public variable(): VariableContext {
		let _localctx: VariableContext = new VariableContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, GraphQLParser.RULE_variable);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 512;
			this.match(GraphQLParser.T__44);
			this.state = 513;
			this.match(GraphQLParser.NAME);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public defaultValue(): DefaultValueContext {
		let _localctx: DefaultValueContext = new DefaultValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, GraphQLParser.RULE_defaultValue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 515;
			this.match(GraphQLParser.T__13);
			this.state = 516;
			this.value();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public valueOrVariable(): ValueOrVariableContext {
		let _localctx: ValueOrVariableContext = new ValueOrVariableContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, GraphQLParser.RULE_valueOrVariable);
		try {
			this.state = 520;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case GraphQLParser.T__45:
			case GraphQLParser.T__46:
			case GraphQLParser.BooleanLiteral:
			case GraphQLParser.String_:
			case GraphQLParser.ID:
			case GraphQLParser.NUMBER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 518;
				this.value();
				}
				break;
			case GraphQLParser.T__44:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 519;
				this.variable();
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
	public value(): ValueContext {
		let _localctx: ValueContext = new ValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, GraphQLParser.RULE_value);
		try {
			this.state = 528;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case GraphQLParser.String_:
				_localctx = new StringValueContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 522;
				this.match(GraphQLParser.String_);
				}
				break;
			case GraphQLParser.NUMBER:
				_localctx = new NumberValueContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 523;
				this.match(GraphQLParser.NUMBER);
				}
				break;
			case GraphQLParser.BooleanLiteral:
				_localctx = new BooleanValueContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 524;
				this.match(GraphQLParser.BooleanLiteral);
				}
				break;
			case GraphQLParser.T__46:
				_localctx = new ArrayValueContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 525;
				this.array();
				}
				break;
			case GraphQLParser.ID:
				_localctx = new IdValueContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 526;
				this.match(GraphQLParser.ID);
				}
				break;
			case GraphQLParser.T__45:
				_localctx = new NullValueContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 527;
				this.match(GraphQLParser.T__45);
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
	public type_(): Type_Context {
		let _localctx: Type_Context = new Type_Context(this._ctx, this.state);
		this.enterRule(_localctx, 114, GraphQLParser.RULE_type_);
		try {
			this.state = 538;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case GraphQLParser.NAME:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 530;
				this.typeName();
				this.state = 532;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 66, this._ctx) ) {
				case 1:
					{
					this.state = 531;
					this.nonNullType();
					}
					break;
				}
				}
				break;
			case GraphQLParser.T__46:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 534;
				this.listType();
				this.state = 536;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 67, this._ctx) ) {
				case 1:
					{
					this.state = 535;
					this.nonNullType();
					}
					break;
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
	public typeName(): TypeNameContext {
		let _localctx: TypeNameContext = new TypeNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, GraphQLParser.RULE_typeName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 540;
			this.match(GraphQLParser.NAME);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public listType(): ListTypeContext {
		let _localctx: ListTypeContext = new ListTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, GraphQLParser.RULE_listType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 542;
			this.match(GraphQLParser.T__46);
			this.state = 543;
			this.type_();
			this.state = 544;
			this.match(GraphQLParser.T__47);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nonNullType(): NonNullTypeContext {
		let _localctx: NonNullTypeContext = new NonNullTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, GraphQLParser.RULE_nonNullType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 546;
			this.match(GraphQLParser.T__48);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public array(): ArrayContext {
		let _localctx: ArrayContext = new ArrayContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, GraphQLParser.RULE_array);
		let _la: number;
		try {
			this.state = 561;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 70, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 548;
				this.match(GraphQLParser.T__46);
				this.state = 549;
				this.value();
				this.state = 554;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === GraphQLParser.T__2) {
					{
					{
					this.state = 550;
					this.match(GraphQLParser.T__2);
					this.state = 551;
					this.value();
					}
					}
					this.state = 556;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 557;
				this.match(GraphQLParser.T__47);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 559;
				this.match(GraphQLParser.T__46);
				this.state = 560;
				this.match(GraphQLParser.T__47);
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

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 11:
			return this.implementsInterfaces_sempred(_localctx as ImplementsInterfacesContext, predIndex);
		}
		return true;
	}
	private implementsInterfaces_sempred(_localctx: ImplementsInterfacesContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03<\u0236\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
		"\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x03\x02\x07\x02\x80\n\x02\f\x02\x0E\x02\x83\v\x02" +
		"\x03\x02\x06\x02\x86\n\x02\r\x02\x0E\x02\x87\x03\x03\x03\x03\x03\x03\x05" +
		"\x03\x8D\n\x03\x03\x04\x03\x04\x03\x04\x05\x04\x92\n\x04\x03\x05\x03\x05" +
		"\x05\x05\x96\n\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x05\x06\x9D" +
		"\n\x06\x03\x06\x07\x06\xA0\n\x06\f\x06\x0E\x06\xA3\v\x06\x03\x06\x03\x06" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x05\t\xB3\n\t\x03\n\x05\n\xB6\n\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\v\x03\v\x03\f\x05\f\xBF\n\f\x03\f\x03\f\x03\f\x05\f\xC4\n\f\x03\f\x05" +
		"\f\xC7\n\f\x03\f\x05\f\xCA\n\f\x03\r\x03\r\x03\r\x05\r\xCF\n\r\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x07\r\xD6\n\r\f\r\x0E\r\xD9\v\r\x03\x0E\x03\x0E\x06" +
		"\x0E\xDD\n\x0E\r\x0E\x0E\x0E\xDE\x03\x0E\x03\x0E\x03\x0F\x05\x0F\xE4\n" +
		"\x0F\x03\x0F\x03\x0F\x05\x0F\xE8\n\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F" +
		"\xED\n\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x07\x10\xF3\n\x10\f\x10\x0E" +
		"\x10\xF6\v\x10\x03\x10\x03\x10\x03\x11\x05\x11\xFB\n\x11\x03\x11\x03\x11" +
		"\x03\x11\x03\x11\x05\x11\u0101\n\x11\x03\x11\x05\x11\u0104\n\x11\x03\x12" +
		"\x05\x12\u0107\n\x12\x03\x12\x03\x12\x03\x12\x05\x12\u010C\n\x12\x03\x12" +
		"\x05\x12\u010F\n\x12\x03\x13\x05\x13\u0112\n\x13\x03\x13\x03\x13\x03\x13" +
		"\x05\x13\u0117\n\x13\x03\x13\x05\x13\u011A\n\x13\x03\x14\x03\x14\x03\x14" +
		"\x03\x14\x07\x14\u0120\n\x14\f\x14\x0E\x14\u0123\v\x14\x03\x15\x03\x15" +
		"\x03\x15\x03\x16\x05\x16\u0129\n\x16\x03\x16\x03\x16\x03\x16\x05\x16\u012E" +
		"\n\x16\x03\x16\x05\x16\u0131\n\x16\x03\x17\x03\x17\x05\x17\u0135\n\x17" +
		"\x03\x17\x03\x17\x05\x17\u0139\n\x17\x06\x17\u013B\n\x17\r\x17\x0E\x17" +
		"\u013C\x03\x17\x03\x17\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19\x03\x1A" +
		"\x05\x1A\u0147\n\x1A\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u014C\n\x1A\x03\x1A" +
		"\x05\x1A\u014F\n\x1A\x03\x1B\x03\x1B\x06\x1B\u0153\n\x1B\r\x1B\x0E\x1B" +
		"\u0154\x03\x1B\x03\x1B\x03\x1C\x05\x1C\u015A\n\x1C\x03\x1C\x03\x1C\x03" +
		"\x1C\x03\x1C\x05\x1C\u0160\n\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D" +
		"\x03\x1D\x07\x1D\u0168\n\x1D\f\x1D\x0E\x1D\u016B\v\x1D\x03\x1E\x03\x1E" +
		"\x05\x1E\u016F\n\x1E\x03\x1F\x03\x1F\x03 \x03 \x03!\x03!\x05!\u0177\n" +
		"!\x03\"\x03\"\x03\"\x03#\x03#\x03#\x03$\x03$\x05$\u0181\n$\x03%\x03%\x03" +
		"%\x03%\x05%\u0187\n%\x03%\x05%\u018A\n%\x03%\x03%\x05%\u018E\n%\x03&\x03" +
		"&\x03&\x05&\u0193\n&\x03&\x07&\u0196\n&\f&\x0E&\u0199\v&\x03&\x03&\x03" +
		"\'\x03\'\x03(\x03(\x03(\x05(\u01A2\n(\x03)\x03)\x05)\u01A6\n)\x03)\x05" +
		")\u01A9\n)\x03)\x05)\u01AC\n)\x03*\x03*\x05*\u01B0\n*\x03+\x03+\x03+\x03" +
		"+\x03,\x03,\x03,\x03,\x07,\u01BA\n,\f,\x0E,\u01BD\v,\x03,\x03,\x03-\x03" +
		"-\x03-\x03-\x03.\x03.\x03.\x05.\u01C8\n.\x03/\x03/\x03/\x03/\x05/\u01CE" +
		"\n/\x03/\x03/\x030\x030\x030\x030\x030\x050\u01D7\n0\x030\x030\x031\x03" +
		"1\x032\x062\u01DE\n2\r2\x0E2\u01DF\x033\x033\x033\x033\x033\x033\x033" +
		"\x033\x033\x033\x033\x033\x053\u01EE\n3\x034\x034\x035\x035\x035\x035" +
		"\x075\u01F6\n5\f5\x0E5\u01F9\v5\x035\x035\x036\x036\x036\x036\x056\u0201" +
		"\n6\x037\x037\x037\x038\x038\x038\x039\x039\x059\u020B\n9\x03:\x03:\x03" +
		":\x03:\x03:\x03:\x05:\u0213\n:\x03;\x03;\x05;\u0217\n;\x03;\x03;\x05;" +
		"\u021B\n;\x05;\u021D\n;\x03<\x03<\x03=\x03=\x03=\x03=\x03>\x03>\x03?\x03" +
		"?\x03?\x03?\x07?\u022B\n?\f?\x0E?\u022E\v?\x03?\x03?\x03?\x03?\x05?\u0234" +
		"\n?\x03?\x02\x02\x03\x18@\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E" +
		"\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 " +
		"\x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02" +
		"<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02" +
		"X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02" +
		"t\x02v\x02x\x02z\x02|\x02\x02\x05\x03\x02\x18\x1E\x03\x02\x1F)\x03\x02" +
		"*,\x02\u024A\x02\x81\x03\x02\x02\x02\x04\x8C\x03\x02\x02\x02\x06\x91\x03" +
		"\x02\x02\x02\b\x93\x03\x02\x02\x02\n\x99\x03\x02\x02\x02\f\xA6\x03\x02" +
		"\x02\x02\x0E\xAA\x03\x02\x02\x02\x10\xB2\x03\x02\x02\x02\x12\xB5\x03\x02" +
		"\x02\x02\x14\xBB\x03\x02\x02\x02\x16\xBE\x03\x02\x02\x02\x18\xCB\x03\x02" +
		"\x02\x02\x1A\xDA\x03\x02\x02\x02\x1C\xE3\x03\x02\x02\x02\x1E\xEE\x03\x02" +
		"\x02\x02 \xFA\x03\x02\x02\x02\"\u0106\x03\x02\x02\x02$\u0111\x03\x02\x02" +
		"\x02&\u011B\x03\x02\x02\x02(\u0124\x03\x02\x02\x02*\u0128\x03\x02\x02" +
		"\x02,\u0132\x03\x02\x02\x02.\u0140\x03\x02\x02\x020\u0142\x03\x02\x02" +
		"\x022\u0146\x03\x02\x02\x024\u0150\x03\x02\x02\x026\u0159\x03\x02\x02" +
		"\x028\u0164\x03\x02\x02\x02:\u016E\x03\x02\x02\x02<\u0170\x03\x02\x02" +
		"\x02>\u0172\x03\x02\x02\x02@\u0176\x03\x02\x02\x02B\u0178\x03\x02\x02" +
		"\x02D\u017B\x03\x02\x02\x02F\u0180\x03\x02\x02\x02H\u018D\x03\x02\x02" +
		"\x02J\u018F\x03\x02\x02\x02L\u019C\x03\x02\x02\x02N\u01A1\x03\x02\x02" +
		"\x02P\u01A3\x03\x02\x02\x02R\u01AF\x03\x02\x02\x02T\u01B1\x03\x02\x02" +
		"\x02V\u01B5\x03\x02\x02\x02X\u01C0\x03\x02\x02\x02Z\u01C4\x03\x02\x02" +
		"\x02\\\u01C9\x03\x02\x02\x02^\u01D1\x03\x02\x02\x02`\u01DA\x03\x02\x02" +
		"\x02b\u01DD\x03\x02\x02\x02d\u01ED\x03\x02\x02\x02f\u01EF\x03\x02\x02" +
		"\x02h\u01F1\x03\x02\x02\x02j\u01FC\x03\x02\x02\x02l\u0202\x03\x02\x02" +
		"\x02n\u0205\x03\x02\x02\x02p\u020A\x03\x02\x02\x02r\u0212\x03\x02\x02" +
		"\x02t\u021C\x03\x02\x02\x02v\u021E\x03\x02\x02\x02x\u0220\x03\x02\x02" +
		"\x02z\u0224\x03\x02\x02\x02|\u0233\x03\x02\x02\x02~\x80\x05\x14\v\x02" +
		"\x7F~\x03\x02\x02\x02\x80\x83\x03\x02\x02\x02\x81\x7F\x03\x02\x02\x02" +
		"\x81\x82\x03\x02\x02\x02\x82\x85\x03\x02\x02\x02\x83\x81\x03\x02\x02\x02" +
		"\x84\x86\x05\x04\x03\x02\x85\x84\x03\x02\x02\x02\x86\x87\x03\x02\x02\x02" +
		"\x87\x85\x03\x02\x02\x02\x87\x88\x03\x02\x02\x02\x88\x03\x03\x02\x02\x02" +
		"\x89\x8D\x05F$\x02\x8A\x8D\x05\x06\x04\x02\x8B\x8D\x05@!\x02\x8C\x89\x03" +
		"\x02\x02\x02\x8C\x8A\x03\x02\x02\x02\x8C\x8B\x03\x02\x02\x02\x8D\x05\x03" +
		"\x02\x02\x02\x8E\x92\x05\b\x05\x02\x8F\x92\x05\x10\t\x02\x90\x92\x056" +
		"\x1C\x02\x91\x8E\x03\x02\x02\x02\x91\x8F\x03\x02\x02\x02\x91\x90\x03\x02" +
		"\x02\x02\x92\x07\x03\x02\x02\x02\x93\x95\x07\x03\x02\x02\x94\x96\x05b" +
		"2\x02\x95\x94\x03\x02\x02\x02\x95\x96\x03\x02\x02\x02\x96\x97\x03\x02" +
		"\x02\x02\x97\x98\x05\n\x06\x02\x98\t\x03\x02\x02\x02\x99\x9A\x07\x04\x02" +
		"\x02\x9A\xA1\x05\f\x07\x02\x9B\x9D\x07\x05\x02\x02\x9C\x9B\x03\x02\x02" +
		"\x02\x9C\x9D\x03\x02\x02\x02\x9D\x9E\x03\x02\x02\x02\x9E\xA0\x05\f\x07" +
		"\x02\x9F\x9C\x03\x02\x02\x02\xA0\xA3\x03\x02\x02\x02\xA1\x9F\x03\x02\x02" +
		"\x02\xA1\xA2\x03\x02\x02\x02\xA2\xA4\x03\x02\x02\x02\xA3\xA1\x03\x02\x02" +
		"\x02\xA4\xA5\x07\x06\x02\x02\xA5\v\x03\x02\x02\x02\xA6\xA7\x05L\'\x02" +
		"\xA7\xA8\x07\x07\x02\x02\xA8\xA9\x05\x0E\b\x02\xA9\r\x03\x02\x02\x02\xAA" +
		"\xAB\x075\x02\x02\xAB\x0F\x03\x02\x02\x02\xAC\xB3\x05\x12\n\x02\xAD\xB3" +
		"\x05\x16\f\x02\xAE\xB3\x05\"\x12\x02\xAF\xB3\x05$\x13\x02\xB0\xB3\x05" +
		"*\x16\x02\xB1\xB3\x052\x1A\x02\xB2\xAC\x03\x02\x02\x02\xB2\xAD\x03\x02" +
		"\x02\x02\xB2\xAE\x03\x02\x02\x02\xB2\xAF\x03\x02\x02\x02\xB2\xB0\x03\x02" +
		"\x02\x02\xB2\xB1\x03\x02\x02\x02\xB3\x11\x03\x02\x02\x02\xB4\xB6\x05\x14" +
		"\v\x02\xB5\xB4\x03\x02\x02\x02\xB5\xB6\x03\x02\x02\x02\xB6\xB7\x03\x02" +
		"\x02\x02\xB7\xB8\x07\b\x02\x02\xB8\xB9\x075\x02\x02\xB9\xBA\x05b2\x02" +
		"\xBA\x13\x03\x02\x02\x02\xBB\xBC\x076\x02\x02\xBC\x15\x03\x02\x02\x02" +
		"\xBD\xBF\x05\x14\v\x02\xBE\xBD\x03\x02\x02\x02\xBE\xBF\x03\x02\x02\x02" +
		"\xBF\xC0\x03\x02\x02\x02\xC0\xC1\x07\t\x02\x02\xC1\xC3\x075\x02\x02\xC2" +
		"\xC4\x05\x18\r\x02\xC3\xC2\x03\x02\x02\x02\xC3\xC4\x03\x02\x02\x02\xC4" +
		"\xC6\x03\x02\x02\x02\xC5\xC7\x05b2\x02\xC6\xC5\x03\x02\x02\x02\xC6\xC7" +
		"\x03\x02\x02\x02\xC7\xC9\x03\x02\x02\x02\xC8\xCA\x05\x1A\x0E\x02\xC9\xC8" +
		"\x03\x02\x02\x02\xC9\xCA\x03\x02\x02\x02\xCA\x17\x03\x02\x02\x02\xCB\xCC" +
		"\b\r\x01\x02\xCC\xCE\x07\n\x02\x02\xCD\xCF\x07\v\x02\x02\xCE\xCD\x03\x02" +
		"\x02\x02\xCE\xCF\x03\x02\x02\x02\xCF\xD0\x03\x02\x02\x02\xD0\xD1\x05t" +
		";\x02\xD1\xD7\x03\x02\x02\x02\xD2\xD3\f\x03\x02\x02\xD3\xD4\x07\v\x02" +
		"\x02\xD4\xD6\x05t;\x02\xD5\xD2\x03\x02\x02\x02\xD6\xD9\x03\x02\x02\x02" +
		"\xD7\xD5\x03\x02\x02\x02\xD7\xD8\x03\x02\x02\x02\xD8\x19\x03\x02\x02\x02" +
		"\xD9\xD7\x03\x02\x02\x02\xDA\xDC\x07\x04\x02\x02\xDB\xDD\x05\x1C\x0F\x02" +
		"\xDC\xDB\x03\x02\x02\x02\xDD\xDE\x03\x02\x02\x02\xDE\xDC\x03\x02\x02\x02" +
		"\xDE\xDF\x03\x02\x02\x02\xDF\xE0\x03\x02\x02\x02\xE0\xE1\x07\x06\x02\x02" +
		"\xE1\x1B\x03\x02\x02\x02\xE2\xE4\x05\x14\v\x02\xE3\xE2\x03\x02\x02\x02" +
		"\xE3\xE4\x03\x02\x02\x02\xE4\xE5\x03\x02\x02\x02\xE5\xE7\x075\x02\x02" +
		"\xE6\xE8\x05\x1E\x10\x02\xE7\xE6\x03\x02\x02\x02\xE7\xE8\x03\x02\x02\x02" +
		"\xE8\xE9\x03\x02\x02\x02\xE9\xEA\x07\x07\x02\x02\xEA\xEC\x05t;\x02\xEB" +
		"\xED\x05b2\x02\xEC\xEB\x03\x02\x02\x02\xEC\xED\x03\x02\x02\x02\xED\x1D" +
		"\x03\x02\x02\x02\xEE\xEF\x07\f\x02\x02\xEF\xF4\x05 \x11\x02\xF0\xF1\x07" +
		"\x05\x02\x02\xF1\xF3\x05 \x11\x02\xF2\xF0\x03\x02\x02\x02\xF3\xF6\x03" +
		"\x02\x02\x02\xF4\xF2\x03\x02\x02\x02\xF4\xF5\x03\x02\x02\x02\xF5\xF7\x03" +
		"\x02\x02\x02\xF6\xF4\x03\x02\x02\x02\xF7\xF8\x07\r\x02\x02\xF8\x1F\x03" +
		"\x02\x02\x02\xF9\xFB\x05\x14\v\x02\xFA\xF9\x03\x02\x02\x02\xFA\xFB\x03" +
		"\x02\x02\x02\xFB\xFC\x03\x02\x02\x02\xFC\xFD\x075\x02\x02\xFD\xFE\x07" +
		"\x07\x02\x02\xFE\u0100\x05t;\x02\xFF\u0101\x05n8\x02\u0100\xFF\x03\x02" +
		"\x02\x02\u0100\u0101\x03\x02\x02\x02\u0101\u0103\x03\x02\x02\x02\u0102" +
		"\u0104\x05b2\x02\u0103\u0102\x03\x02\x02\x02\u0103\u0104\x03\x02\x02\x02" +
		"\u0104!\x03\x02\x02\x02\u0105\u0107\x05\x14\v\x02\u0106\u0105\x03\x02" +
		"\x02\x02\u0106\u0107\x03\x02\x02\x02\u0107\u0108\x03\x02\x02\x02\u0108" +
		"\u0109\x07\x0E\x02\x02\u0109\u010B\x075\x02\x02\u010A\u010C\x05b2\x02" +
		"\u010B\u010A\x03\x02\x02\x02\u010B\u010C\x03\x02\x02\x02\u010C\u010E\x03" +
		"\x02\x02\x02\u010D\u010F\x05\x1A\x0E\x02\u010E\u010D\x03\x02\x02\x02\u010E" +
		"\u010F\x03\x02\x02\x02\u010F#\x03\x02\x02\x02\u0110\u0112\x05\x14\v\x02" +
		"\u0111\u0110\x03\x02\x02\x02\u0111\u0112\x03\x02\x02\x02\u0112\u0113\x03" +
		"\x02\x02\x02\u0113\u0114\x07\x0F\x02\x02\u0114\u0116\x075\x02\x02\u0115" +
		"\u0117\x05b2\x02\u0116\u0115\x03\x02\x02\x02\u0116\u0117\x03\x02\x02\x02" +
		"\u0117\u0119\x03\x02\x02\x02\u0118\u011A\x05&\x14\x02\u0119\u0118\x03" +
		"\x02\x02\x02\u0119\u011A\x03\x02\x02\x02\u011A%\x03\x02\x02\x02\u011B" +
		"\u011C\x07\x10\x02\x02\u011C\u0121\x05t;\x02\u011D\u011E\x07\x11\x02\x02" +
		"\u011E\u0120\x05t;\x02\u011F\u011D\x03\x02\x02\x02\u0120\u0123\x03\x02" +
		"\x02\x02\u0121\u011F\x03\x02\x02\x02\u0121\u0122\x03\x02\x02\x02\u0122" +
		"\'\x03\x02\x02\x02\u0123\u0121\x03\x02\x02\x02\u0124\u0125\x07\x12\x02" +
		"\x02\u0125\u0126\x05$\x13\x02\u0126)\x03\x02\x02\x02\u0127\u0129\x05\x14" +
		"\v\x02\u0128\u0127\x03\x02\x02\x02\u0128\u0129\x03\x02\x02\x02\u0129\u012A" +
		"\x03\x02\x02\x02\u012A\u012B\x07\x13\x02\x02\u012B\u012D\x075\x02\x02" +
		"\u012C\u012E\x05b2\x02\u012D\u012C\x03\x02\x02\x02\u012D\u012E\x03\x02" +
		"\x02\x02\u012E\u0130\x03\x02\x02\x02\u012F\u0131\x05,\x17\x02\u0130\u012F" +
		"\x03\x02\x02\x02\u0130\u0131\x03\x02\x02\x02\u0131+\x03\x02\x02\x02\u0132" +
		"\u013A\x07\x04\x02\x02\u0133\u0135\x05\x14\v\x02\u0134\u0133\x03\x02\x02" +
		"\x02\u0134\u0135\x03\x02\x02\x02\u0135\u0136\x03\x02\x02\x02\u0136\u0138" +
		"\x05.\x18\x02\u0137\u0139\x05b2\x02\u0138\u0137\x03\x02\x02\x02\u0138" +
		"\u0139\x03\x02\x02\x02\u0139\u013B\x03\x02\x02\x02\u013A\u0134\x03\x02" +
		"\x02\x02\u013B\u013C\x03\x02\x02\x02\u013C\u013A\x03\x02\x02\x02\u013C" +
		"\u013D\x03\x02\x02\x02\u013D\u013E\x03\x02\x02\x02\u013E\u013F\x07\x06" +
		"\x02\x02\u013F-\x03\x02\x02\x02\u0140\u0141\x075\x02\x02\u0141/\x03\x02" +
		"\x02\x02\u0142\u0143\x07\x12\x02\x02\u0143\u0144\x05*\x16\x02\u01441\x03" +
		"\x02\x02\x02\u0145\u0147\x05\x14\v\x02\u0146\u0145\x03\x02\x02\x02\u0146" +
		"\u0147\x03\x02\x02\x02\u0147\u0148\x03\x02\x02\x02\u0148\u0149\x07\x14" +
		"\x02\x02\u0149\u014B\x075\x02\x02\u014A\u014C\x05b2\x02\u014B\u014A\x03" +
		"\x02\x02\x02\u014B\u014C\x03\x02\x02\x02\u014C\u014E\x03\x02\x02\x02\u014D" +
		"\u014F\x054\x1B\x02\u014E\u014D\x03\x02\x02\x02\u014E\u014F\x03\x02\x02" +
		"\x02\u014F3\x03\x02\x02\x02\u0150\u0152\x07\x04\x02\x02\u0151\u0153\x05" +
		" \x11\x02\u0152\u0151\x03\x02\x02\x02\u0153\u0154\x03\x02\x02\x02\u0154" +
		"\u0152\x03\x02\x02\x02\u0154\u0155\x03\x02\x02\x02\u0155\u0156\x03\x02" +
		"\x02\x02\u0156\u0157\x07\x06\x02\x02\u01575\x03\x02\x02\x02\u0158\u015A" +
		"\x05\x14\v\x02\u0159\u0158\x03\x02\x02\x02\u0159\u015A\x03\x02\x02\x02" +
		"\u015A\u015B\x03\x02\x02\x02\u015B\u015C\x07\x15\x02\x02\u015C\u015D\x07" +
		"\x16\x02\x02\u015D\u015F\x075\x02\x02\u015E\u0160\x05\x1E\x10\x02\u015F" +
		"\u015E\x03\x02\x02\x02\u015F\u0160\x03\x02\x02\x02\u0160\u0161\x03\x02" +
		"\x02\x02\u0161\u0162\x07\x17\x02\x02\u0162\u0163\x058\x1D\x02\u01637\x03" +
		"\x02\x02\x02\u0164\u0169\x05:\x1E\x02\u0165\u0166\x07\x11\x02\x02\u0166" +
		"\u0168\x058\x1D\x02\u0167\u0165\x03\x02\x02\x02\u0168\u016B\x03\x02\x02" +
		"\x02\u0169\u0167\x03\x02\x02\x02\u0169\u016A\x03\x02\x02\x02\u016A9\x03" +
		"\x02\x02\x02\u016B\u0169\x03\x02\x02\x02\u016C\u016F\x05<\x1F\x02\u016D" +
		"\u016F\x05> \x02\u016E\u016C\x03\x02\x02\x02\u016E\u016D\x03\x02\x02\x02" +
		"\u016F;\x03\x02\x02\x02\u0170\u0171\t\x02\x02\x02\u0171=\x03\x02\x02\x02" +
		"\u0172\u0173\t\x03\x02\x02\u0173?\x03\x02\x02\x02\u0174\u0177\x05B\"\x02" +
		"\u0175\u0177\x05D#\x02\u0176\u0174\x03\x02\x02\x02\u0176\u0175\x03\x02" +
		"\x02\x02\u0177A\x03\x02\x02\x02\u0178\u0179\x07\x12\x02\x02\u0179\u017A" +
		"\x05\b\x05\x02\u017AC\x03\x02\x02\x02\u017B\u017C\x07\x12\x02\x02\u017C" +
		"\u017D\x05\x10\t\x02\u017DE\x03\x02\x02\x02\u017E\u0181\x05H%\x02\u017F" +
		"\u0181\x05^0\x02\u0180\u017E\x03\x02\x02\x02\u0180\u017F\x03\x02\x02\x02" +
		"\u0181G\x03\x02\x02\x02\u0182\u018E\x05J&\x02\u0183\u0184\x05L\'\x02\u0184" +
		"\u0186\x075\x02\x02\u0185\u0187\x05h5\x02\u0186\u0185\x03\x02\x02\x02" +
		"\u0186\u0187\x03\x02\x02\x02\u0187\u0189\x03\x02\x02\x02\u0188\u018A\x05" +
		"b2\x02\u0189\u0188\x03\x02\x02\x02\u0189\u018A\x03\x02\x02\x02\u018A\u018B" +
		"\x03\x02\x02\x02\u018B\u018C\x05J&\x02\u018C\u018E\x03\x02\x02\x02\u018D" +
		"\u0182\x03\x02\x02\x02\u018D\u0183\x03\x02\x02\x02\u018EI\x03\x02\x02" +
		"\x02\u018F\u0190\x07\x04\x02\x02\u0190\u0197\x05N(\x02\u0191\u0193\x07" +
		"\x05\x02\x02\u0192\u0191\x03\x02\x02\x02\u0192\u0193\x03\x02\x02\x02\u0193" +
		"\u0194\x03\x02\x02\x02\u0194\u0196\x05N(\x02\u0195\u0192\x03\x02\x02\x02" +
		"\u0196\u0199\x03\x02\x02\x02\u0197\u0195\x03\x02\x02\x02\u0197\u0198\x03" +
		"\x02\x02\x02\u0198\u019A\x03\x02\x02\x02\u0199\u0197\x03\x02\x02\x02\u019A" +
		"\u019B\x07\x06\x02\x02\u019BK\x03\x02\x02\x02\u019C\u019D\t\x04\x02\x02" +
		"\u019DM\x03\x02\x02\x02\u019E\u01A2\x05P)\x02\u019F\u01A2\x05Z.\x02\u01A0" +
		"\u01A2\x05\\/\x02\u01A1\u019E\x03\x02\x02\x02\u01A1\u019F\x03\x02\x02" +
		"\x02\u01A1\u01A0\x03\x02\x02\x02\u01A2O\x03\x02\x02\x02\u01A3\u01A5\x05" +
		"R*\x02\u01A4\u01A6\x05V,\x02\u01A5\u01A4\x03\x02\x02\x02\u01A5\u01A6\x03" +
		"\x02\x02\x02\u01A6\u01A8\x03\x02\x02\x02\u01A7\u01A9\x05b2\x02\u01A8\u01A7" +
		"\x03\x02\x02\x02\u01A8\u01A9\x03\x02\x02\x02\u01A9\u01AB\x03\x02\x02\x02" +
		"\u01AA\u01AC\x05J&\x02\u01AB\u01AA\x03\x02\x02\x02\u01AB\u01AC\x03\x02" +
		"\x02\x02\u01ACQ\x03\x02\x02\x02\u01AD\u01B0\x05T+\x02\u01AE\u01B0\x07" +
		"5\x02\x02\u01AF\u01AD\x03\x02\x02\x02\u01AF\u01AE\x03\x02\x02\x02\u01B0" +
		"S\x03\x02\x02\x02\u01B1\u01B2\x075\x02\x02\u01B2\u01B3\x07\x07\x02\x02" +
		"\u01B3\u01B4\x075\x02\x02\u01B4U\x03\x02\x02\x02\u01B5\u01B6\x07\f\x02" +
		"\x02\u01B6\u01BB\x05X-\x02\u01B7\u01B8\x07\x05\x02\x02\u01B8\u01BA\x05" +
		"X-\x02\u01B9\u01B7\x03\x02\x02\x02\u01BA\u01BD\x03\x02\x02\x02\u01BB\u01B9" +
		"\x03\x02\x02\x02\u01BB\u01BC\x03\x02\x02\x02\u01BC\u01BE\x03\x02\x02\x02" +
		"\u01BD\u01BB\x03\x02\x02\x02\u01BE\u01BF\x07\r\x02\x02\u01BFW\x03\x02" +
		"\x02\x02\u01C0\u01C1\x075\x02\x02\u01C1\u01C2\x07\x07\x02\x02\u01C2\u01C3" +
		"\x05p9\x02\u01C3Y\x03\x02\x02\x02\u01C4\u01C5\x07-\x02\x02\u01C5\u01C7" +
		"\x05`1\x02\u01C6\u01C8\x05b2\x02\u01C7\u01C6\x03\x02\x02\x02\u01C7\u01C8" +
		"\x03\x02\x02\x02\u01C8[\x03\x02\x02\x02\u01C9\u01CA\x07-\x02\x02\u01CA" +
		"\u01CB\x07\x17\x02\x02\u01CB\u01CD\x05f4\x02\u01CC\u01CE\x05b2\x02\u01CD" +
		"\u01CC\x03\x02\x02\x02\u01CD\u01CE\x03\x02\x02\x02\u01CE\u01CF\x03\x02" +
		"\x02\x02\u01CF\u01D0\x05J&\x02\u01D0]\x03\x02\x02\x02\u01D1\u01D2\x07" +
		".\x02\x02\u01D2\u01D3\x05`1\x02\u01D3\u01D4\x07\x17\x02\x02\u01D4\u01D6" +
		"\x05f4\x02\u01D5\u01D7\x05b2\x02\u01D6\u01D5\x03\x02\x02\x02\u01D6\u01D7" +
		"\x03\x02\x02\x02\u01D7\u01D8\x03\x02\x02\x02\u01D8\u01D9\x05J&\x02\u01D9" +
		"_\x03\x02\x02\x02\u01DA\u01DB\x075\x02\x02\u01DBa\x03\x02\x02\x02\u01DC" +
		"\u01DE\x05d3\x02\u01DD\u01DC\x03\x02\x02\x02\u01DE\u01DF\x03\x02\x02\x02" +
		"\u01DF\u01DD\x03\x02\x02\x02\u01DF\u01E0\x03\x02\x02\x02\u01E0c\x03\x02" +
		"\x02\x02\u01E1\u01E2\x07\x16\x02\x02\u01E2\u01E3\x075\x02\x02\u01E3\u01E4" +
		"\x07\x07\x02\x02\u01E4\u01EE\x05p9\x02\u01E5\u01E6\x07\x16\x02\x02\u01E6" +
		"\u01EE\x075\x02\x02\u01E7\u01E8\x07\x16\x02\x02\u01E8\u01E9\x075\x02\x02" +
		"\u01E9\u01EA\x07\f\x02\x02\u01EA\u01EB\x05X-\x02\u01EB\u01EC\x07\r\x02" +
		"\x02\u01EC\u01EE\x03\x02\x02\x02\u01ED\u01E1\x03\x02\x02\x02\u01ED\u01E5" +
		"\x03\x02\x02\x02\u01ED\u01E7\x03\x02\x02\x02\u01EEe\x03\x02\x02\x02\u01EF" +
		"\u01F0\x05v<\x02\u01F0g\x03\x02\x02\x02\u01F1\u01F2\x07\f\x02\x02\u01F2" +
		"\u01F7\x05j6\x02\u01F3\u01F4\x07\x05\x02\x02\u01F4\u01F6\x05j6\x02\u01F5" +
		"\u01F3\x03\x02\x02\x02\u01F6\u01F9\x03\x02\x02\x02\u01F7\u01F5\x03\x02" +
		"\x02\x02\u01F7\u01F8\x03\x02\x02\x02\u01F8\u01FA\x03\x02\x02\x02\u01F9" +
		"\u01F7\x03\x02\x02\x02\u01FA\u01FB\x07\r\x02\x02\u01FBi\x03\x02\x02\x02" +
		"\u01FC\u01FD\x05l7\x02\u01FD\u01FE\x07\x07\x02\x02\u01FE\u0200\x05t;\x02" +
		"\u01FF\u0201\x05n8\x02\u0200\u01FF\x03\x02\x02\x02\u0200\u0201\x03\x02" +
		"\x02\x02\u0201k\x03\x02\x02\x02\u0202\u0203\x07/\x02\x02\u0203\u0204\x07" +
		"5\x02\x02\u0204m\x03\x02\x02\x02\u0205\u0206\x07\x10\x02\x02\u0206\u0207" +
		"\x05r:\x02\u0207o\x03\x02\x02\x02\u0208\u020B\x05r:\x02\u0209\u020B\x05" +
		"l7\x02\u020A\u0208\x03\x02\x02\x02\u020A\u0209\x03\x02\x02\x02\u020Bq" +
		"\x03\x02\x02\x02\u020C\u0213\x076\x02\x02\u020D\u0213\x07:\x02\x02\u020E" +
		"\u0213\x074\x02\x02\u020F\u0213\x05|?\x02\u0210\u0213\x079\x02\x02\u0211" +
		"\u0213\x070\x02\x02\u0212\u020C\x03\x02\x02\x02\u0212\u020D\x03\x02\x02" +
		"\x02\u0212\u020E\x03\x02\x02\x02\u0212\u020F\x03\x02\x02\x02\u0212\u0210" +
		"\x03\x02\x02\x02\u0212\u0211\x03\x02\x02\x02\u0213s\x03\x02\x02\x02\u0214" +
		"\u0216\x05v<\x02\u0215\u0217\x05z>\x02\u0216\u0215\x03\x02\x02\x02\u0216" +
		"\u0217\x03\x02\x02\x02\u0217\u021D\x03\x02\x02\x02\u0218\u021A\x05x=\x02" +
		"\u0219\u021B\x05z>\x02\u021A\u0219\x03\x02\x02\x02\u021A\u021B\x03\x02" +
		"\x02\x02\u021B\u021D\x03\x02\x02\x02\u021C\u0214\x03\x02\x02\x02\u021C" +
		"\u0218\x03\x02\x02\x02\u021Du\x03\x02\x02\x02\u021E\u021F\x075\x02\x02" +
		"\u021Fw\x03\x02\x02\x02\u0220\u0221\x071\x02\x02\u0221\u0222\x05t;\x02" +
		"\u0222\u0223\x072\x02\x02\u0223y\x03\x02\x02\x02\u0224\u0225\x073\x02" +
		"\x02\u0225{\x03\x02\x02\x02\u0226\u0227\x071\x02\x02\u0227\u022C\x05r" +
		":\x02\u0228\u0229\x07\x05\x02\x02\u0229\u022B\x05r:\x02\u022A\u0228\x03" +
		"\x02\x02\x02\u022B\u022E\x03\x02\x02\x02\u022C\u022A\x03\x02\x02\x02\u022C" +
		"\u022D\x03\x02\x02\x02\u022D\u022F\x03\x02\x02\x02\u022E\u022C\x03\x02" +
		"\x02\x02\u022F\u0230\x072\x02\x02\u0230\u0234\x03\x02\x02\x02\u0231\u0232" +
		"\x071\x02\x02\u0232\u0234\x072\x02\x02\u0233\u0226\x03\x02\x02\x02\u0233" +
		"\u0231\x03\x02\x02\x02\u0234}\x03\x02\x02\x02I\x81\x87\x8C\x91\x95\x9C" +
		"\xA1\xB2\xB5\xBE\xC3\xC6\xC9\xCE\xD7\xDE\xE3\xE7\xEC\xF4\xFA\u0100\u0103" +
		"\u0106\u010B\u010E\u0111\u0116\u0119\u0121\u0128\u012D\u0130\u0134\u0138" +
		"\u013C\u0146\u014B\u014E\u0154\u0159\u015F\u0169\u016E\u0176\u0180\u0186" +
		"\u0189\u018D\u0192\u0197\u01A1\u01A5\u01A8\u01AB\u01AF\u01BB\u01C7\u01CD" +
		"\u01D6\u01DF\u01ED\u01F7\u0200\u020A\u0212\u0216\u021A\u021C\u022C\u0233";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!GraphQLParser.__ATN) {
			GraphQLParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(GraphQLParser._serializedATN));
		}

		return GraphQLParser.__ATN;
	}

}

export class DocumentContext extends ParserRuleContext {
	public description(): DescriptionContext[];
	public description(i: number): DescriptionContext;
	public description(i?: number): DescriptionContext | DescriptionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DescriptionContext);
		} else {
			return this.getRuleContext(i, DescriptionContext);
		}
	}
	public definition(): DefinitionContext[];
	public definition(i: number): DefinitionContext;
	public definition(i?: number): DefinitionContext | DefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DefinitionContext);
		} else {
			return this.getRuleContext(i, DefinitionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GraphQLParser.RULE_document; }
	// @Override
	public enterRule(listener: GraphQLListener): void {
		if (listener.enterDocument) {
			listener.enterDocument(this);
		}
	}
	// @Override
	public exitRule(listener: GraphQLListener): void {
		if (listener.exitDocument) {
			listener.exitDocument(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GraphQLVisitor<Result>): Result {
		if (visitor.visitDocument) {
			return visitor.visitDocument(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DefinitionContext extends ParserRuleContext {
	public execDefinition(): ExecDefinitionContext | undefined {
		return this.tryGetRuleContext(0, ExecDefinitionContext);
	}
	public typeSystemDefinition(): TypeSystemDefinitionContext | undefined {
		return this.tryGetRuleContext(0, TypeSystemDefinitionContext);
	}
	public typeSystemExtension(): TypeSystemExtensionContext | undefined {
		return this.tryGetRuleContext(0, TypeSystemExtensionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GraphQLParser.RULE_definition; }
	// @Override
	public enterRule(listener: GraphQLListener): void {
		if (listener.enterDefinition) {
			listener.enterDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: GraphQLListener): void {
		if (listener.exitDefinition) {
			listener.exitDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GraphQLVisitor<Result>): Result {
		if (visitor.visitDefinition) {
			return visitor.visitDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeSystemDefinitionContext extends ParserRuleContext {
	public schemaDefinition(): SchemaDefinitionContext | undefined {
		return this.tryGetRuleContext(0, SchemaDefinitionContext);
	}
	public typeDefinition(): TypeDefinitionContext | undefined {
		return this.tryGetRuleContext(0, TypeDefinitionContext);
	}
	public directiveDefinition(): DirectiveDefinitionContext | undefined {
		return this.tryGetRuleContext(0, DirectiveDefinitionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GraphQLParser.RULE_typeSystemDefinition; }
	// @Override
	public enterRule(listener: GraphQLListener): void {
		if (listener.enterTypeSystemDefinition) {
			listener.enterTypeSystemDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: GraphQLListener): void {
		if (listener.exitTypeSystemDefinition) {
			listener.exitTypeSystemDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GraphQLVisitor<Result>): Result {
		if (visitor.visitTypeSystemDefinition) {
			return visitor.visitTypeSystemDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SchemaDefinitionContext extends ParserRuleContext {
	public rootOperationTypeDefinitionList(): RootOperationTypeDefinitionListContext {
		return this.getRuleContext(0, RootOperationTypeDefinitionListContext);
	}
	public directives(): DirectivesContext | undefined {
		return this.tryGetRuleContext(0, DirectivesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GraphQLParser.RULE_schemaDefinition; }
	// @Override
	public enterRule(listener: GraphQLListener): void {
		if (listener.enterSchemaDefinition) {
			listener.enterSchemaDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: GraphQLListener): void {
		if (listener.exitSchemaDefinition) {
			listener.exitSchemaDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GraphQLVisitor<Result>): Result {
		if (visitor.visitSchemaDefinition) {
			return visitor.visitSchemaDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RootOperationTypeDefinitionListContext extends ParserRuleContext {
	public rootOperationTypeDefinition(): RootOperationTypeDefinitionContext[];
	public rootOperationTypeDefinition(i: number): RootOperationTypeDefinitionContext;
	public rootOperationTypeDefinition(i?: number): RootOperationTypeDefinitionContext | RootOperationTypeDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RootOperationTypeDefinitionContext);
		} else {
			return this.getRuleContext(i, RootOperationTypeDefinitionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GraphQLParser.RULE_rootOperationTypeDefinitionList; }
	// @Override
	public enterRule(listener: GraphQLListener): void {
		if (listener.enterRootOperationTypeDefinitionList) {
			listener.enterRootOperationTypeDefinitionList(this);
		}
	}
	// @Override
	public exitRule(listener: GraphQLListener): void {
		if (listener.exitRootOperationTypeDefinitionList) {
			listener.exitRootOperationTypeDefinitionList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GraphQLVisitor<Result>): Result {
		if (visitor.visitRootOperationTypeDefinitionList) {
			return visitor.visitRootOperationTypeDefinitionList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RootOperationTypeDefinitionContext extends ParserRuleContext {
	public operationType(): OperationTypeContext {
		return this.getRuleContext(0, OperationTypeContext);
	}
	public namedType(): NamedTypeContext {
		return this.getRuleContext(0, NamedTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GraphQLParser.RULE_rootOperationTypeDefinition; }
	// @Override
	public enterRule(listener: GraphQLListener): void {
		if (listener.enterRootOperationTypeDefinition) {
			listener.enterRootOperationTypeDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: GraphQLListener): void {
		if (listener.exitRootOperationTypeDefinition) {
			listener.exitRootOperationTypeDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GraphQLVisitor<Result>): Result {
		if (visitor.visitRootOperationTypeDefinition) {
			return visitor.visitRootOperationTypeDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NamedTypeContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(GraphQLParser.NAME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GraphQLParser.RULE_namedType; }
	// @Override
	public enterRule(listener: GraphQLListener): void {
		if (listener.enterNamedType) {
			listener.enterNamedType(this);
		}
	}
	// @Override
	public exitRule(listener: GraphQLListener): void {
		if (listener.exitNamedType) {
			listener.exitNamedType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GraphQLVisitor<Result>): Result {
		if (visitor.visitNamedType) {
			return visitor.visitNamedType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeDefinitionContext extends ParserRuleContext {
	public scalarTypeDefinition(): ScalarTypeDefinitionContext | undefined {
		return this.tryGetRuleContext(0, ScalarTypeDefinitionContext);
	}
	public objectTypeDefinition(): ObjectTypeDefinitionContext | undefined {
		return this.tryGetRuleContext(0, ObjectTypeDefinitionContext);
	}
	public interfaceTypeDefinition(): InterfaceTypeDefinitionContext | undefined {
		return this.tryGetRuleContext(0, InterfaceTypeDefinitionContext);
	}
	public unionTypeDefinition(): UnionTypeDefinitionContext | undefined {
		return this.tryGetRuleContext(0, UnionTypeDefinitionContext);
	}
	public enumTypeDefinition(): EnumTypeDefinitionContext | undefined {
		return this.tryGetRuleContext(0, EnumTypeDefinitionContext);
	}
	public inputObjectTypeDefinition(): InputObjectTypeDefinitionContext | undefined {
		return this.tryGetRuleContext(0, InputObjectTypeDefinitionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GraphQLParser.RULE_typeDefinition; }
	// @Override
	public enterRule(listener: GraphQLListener): void {
		if (listener.enterTypeDefinition) {
			listener.enterTypeDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: GraphQLListener): void {
		if (listener.exitTypeDefinition) {
			listener.exitTypeDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GraphQLVisitor<Result>): Result {
		if (visitor.visitTypeDefinition) {
			return visitor.visitTypeDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ScalarTypeDefinitionContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(GraphQLParser.NAME, 0); }
	public directives(): DirectivesContext {
		return this.getRuleContext(0, DirectivesContext);
	}
	public description(): DescriptionContext | undefined {
		return this.tryGetRuleContext(0, DescriptionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GraphQLParser.RULE_scalarTypeDefinition; }
	// @Override
	public enterRule(listener: GraphQLListener): void {
		if (listener.enterScalarTypeDefinition) {
			listener.enterScalarTypeDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: GraphQLListener): void {
		if (listener.exitScalarTypeDefinition) {
			listener.exitScalarTypeDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GraphQLVisitor<Result>): Result {
		if (visitor.visitScalarTypeDefinition) {
			return visitor.visitScalarTypeDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DescriptionContext extends ParserRuleContext {
	public String_(): TerminalNode { return this.getToken(GraphQLParser.String_, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GraphQLParser.RULE_description; }
	// @Override
	public enterRule(listener: GraphQLListener): void {
		if (listener.enterDescription) {
			listener.enterDescription(this);
		}
	}
	// @Override
	public exitRule(listener: GraphQLListener): void {
		if (listener.exitDescription) {
			listener.exitDescription(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GraphQLVisitor<Result>): Result {
		if (visitor.visitDescription) {
			return visitor.visitDescription(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ObjectTypeDefinitionContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(GraphQLParser.NAME, 0); }
	public description(): DescriptionContext | undefined {
		return this.tryGetRuleContext(0, DescriptionContext);
	}
	public implementsInterfaces(): ImplementsInterfacesContext | undefined {
		return this.tryGetRuleContext(0, ImplementsInterfacesContext);
	}
	public directives(): DirectivesContext | undefined {
		return this.tryGetRuleContext(0, DirectivesContext);
	}
	public fieldsDefinitions(): FieldsDefinitionsContext | undefined {
		return this.tryGetRuleContext(0, FieldsDefinitionsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GraphQLParser.RULE_objectTypeDefinition; }
	// @Override
	public enterRule(listener: GraphQLListener): void {
		if (listener.enterObjectTypeDefinition) {
			listener.enterObjectTypeDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: GraphQLListener): void {
		if (listener.exitObjectTypeDefinition) {
			listener.exitObjectTypeDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GraphQLVisitor<Result>): Result {
		if (visitor.visitObjectTypeDefinition) {
			return visitor.visitObjectTypeDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImplementsInterfacesContext extends ParserRuleContext {
	public type_(): Type_Context {
		return this.getRuleContext(0, Type_Context);
	}
	public implementsInterfaces(): ImplementsInterfacesContext | undefined {
		return this.tryGetRuleContext(0, ImplementsInterfacesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GraphQLParser.RULE_implementsInterfaces; }
	// @Override
	public enterRule(listener: GraphQLListener): void {
		if (listener.enterImplementsInterfaces) {
			listener.enterImplementsInterfaces(this);
		}
	}
	// @Override
	public exitRule(listener: GraphQLListener): void {
		if (listener.exitImplementsInterfaces) {
			listener.exitImplementsInterfaces(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GraphQLVisitor<Result>): Result {
		if (visitor.visitImplementsInterfaces) {
			return visitor.visitImplementsInterfaces(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldsDefinitionsContext extends ParserRuleContext {
	public fieldsDefinition(): FieldsDefinitionContext[];
	public fieldsDefinition(i: number): FieldsDefinitionContext;
	public fieldsDefinition(i?: number): FieldsDefinitionContext | FieldsDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldsDefinitionContext);
		} else {
			return this.getRuleContext(i, FieldsDefinitionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GraphQLParser.RULE_fieldsDefinitions; }
	// @Override
	public enterRule(listener: GraphQLListener): void {
		if (listener.enterFieldsDefinitions) {
			listener.enterFieldsDefinitions(this);
		}
	}
	// @Override
	public exitRule(listener: GraphQLListener): void {
		if (listener.exitFieldsDefinitions) {
			listener.exitFieldsDefinitions(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GraphQLVisitor<Result>): Result {
		if (visitor.visitFieldsDefinitions) {
			return visitor.visitFieldsDefinitions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldsDefinitionContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(GraphQLParser.NAME, 0); }
	public type_(): Type_Context {
		return this.getRuleContext(0, Type_Context);
	}
	public description(): DescriptionContext | undefined {
		return this.tryGetRuleContext(0, DescriptionContext);
	}
	public argumentsDefinition(): ArgumentsDefinitionContext | undefined {
		return this.tryGetRuleContext(0, ArgumentsDefinitionContext);
	}
	public directives(): DirectivesContext | undefined {
		return this.tryGetRuleContext(0, DirectivesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GraphQLParser.RULE_fieldsDefinition; }
	// @Override
	public enterRule(listener: GraphQLListener): void {
		if (listener.enterFieldsDefinition) {
			listener.enterFieldsDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: GraphQLListener): void {
		if (listener.exitFieldsDefinition) {
			listener.exitFieldsDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GraphQLVisitor<Result>): Result {
		if (visitor.visitFieldsDefinition) {
			return visitor.visitFieldsDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgumentsDefinitionContext extends ParserRuleContext {
	public inputValueDefinition(): InputValueDefinitionContext[];
	public inputValueDefinition(i: number): InputValueDefinitionContext;
	public inputValueDefinition(i?: number): InputValueDefinitionContext | InputValueDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InputValueDefinitionContext);
		} else {
			return this.getRuleContext(i, InputValueDefinitionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GraphQLParser.RULE_argumentsDefinition; }
	// @Override
	public enterRule(listener: GraphQLListener): void {
		if (listener.enterArgumentsDefinition) {
			listener.enterArgumentsDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: GraphQLListener): void {
		if (listener.exitArgumentsDefinition) {
			listener.exitArgumentsDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GraphQLVisitor<Result>): Result {
		if (visitor.visitArgumentsDefinition) {
			return visitor.visitArgumentsDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InputValueDefinitionContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(GraphQLParser.NAME, 0); }
	public type_(): Type_Context {
		return this.getRuleContext(0, Type_Context);
	}
	public description(): DescriptionContext | undefined {
		return this.tryGetRuleContext(0, DescriptionContext);
	}
	public defaultValue(): DefaultValueContext | undefined {
		return this.tryGetRuleContext(0, DefaultValueContext);
	}
	public directives(): DirectivesContext | undefined {
		return this.tryGetRuleContext(0, DirectivesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GraphQLParser.RULE_inputValueDefinition; }
	// @Override
	public enterRule(listener: GraphQLListener): void {
		if (listener.enterInputValueDefinition) {
			listener.enterInputValueDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: GraphQLListener): void {
		if (listener.exitInputValueDefinition) {
			listener.exitInputValueDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GraphQLVisitor<Result>): Result {
		if (visitor.visitInputValueDefinition) {
			return visitor.visitInputValueDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InterfaceTypeDefinitionContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(GraphQLParser.NAME, 0); }
	public description(): DescriptionContext | undefined {
		return this.tryGetRuleContext(0, DescriptionContext);
	}
	public directives(): DirectivesContext | undefined {
		return this.tryGetRuleContext(0, DirectivesContext);
	}
	public fieldsDefinitions(): FieldsDefinitionsContext | undefined {
		return this.tryGetRuleContext(0, FieldsDefinitionsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GraphQLParser.RULE_interfaceTypeDefinition; }
	// @Override
	public enterRule(listener: GraphQLListener): void {
		if (listener.enterInterfaceTypeDefinition) {
			listener.enterInterfaceTypeDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: GraphQLListener): void {
		if (listener.exitInterfaceTypeDefinition) {
			listener.exitInterfaceTypeDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GraphQLVisitor<Result>): Result {
		if (visitor.visitInterfaceTypeDefinition) {
			return visitor.visitInterfaceTypeDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnionTypeDefinitionContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(GraphQLParser.NAME, 0); }
	public description(): DescriptionContext | undefined {
		return this.tryGetRuleContext(0, DescriptionContext);
	}
	public directives(): DirectivesContext | undefined {
		return this.tryGetRuleContext(0, DirectivesContext);
	}
	public unionMemberTypes(): UnionMemberTypesContext | undefined {
		return this.tryGetRuleContext(0, UnionMemberTypesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GraphQLParser.RULE_unionTypeDefinition; }
	// @Override
	public enterRule(listener: GraphQLListener): void {
		if (listener.enterUnionTypeDefinition) {
			listener.enterUnionTypeDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: GraphQLListener): void {
		if (listener.exitUnionTypeDefinition) {
			listener.exitUnionTypeDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GraphQLVisitor<Result>): Result {
		if (visitor.visitUnionTypeDefinition) {
			return visitor.visitUnionTypeDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnionMemberTypesContext extends ParserRuleContext {
	public type_(): Type_Context[];
	public type_(i: number): Type_Context;
	public type_(i?: number): Type_Context | Type_Context[] {
		if (i === undefined) {
			return this.getRuleContexts(Type_Context);
		} else {
			return this.getRuleContext(i, Type_Context);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GraphQLParser.RULE_unionMemberTypes; }
	// @Override
	public enterRule(listener: GraphQLListener): void {
		if (listener.enterUnionMemberTypes) {
			listener.enterUnionMemberTypes(this);
		}
	}
	// @Override
	public exitRule(listener: GraphQLListener): void {
		if (listener.exitUnionMemberTypes) {
			listener.exitUnionMemberTypes(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GraphQLVisitor<Result>): Result {
		if (visitor.visitUnionMemberTypes) {
			return visitor.visitUnionMemberTypes(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnionTypeExtensionContext extends ParserRuleContext {
	public unionTypeDefinition(): UnionTypeDefinitionContext {
		return this.getRuleContext(0, UnionTypeDefinitionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GraphQLParser.RULE_unionTypeExtension; }
	// @Override
	public enterRule(listener: GraphQLListener): void {
		if (listener.enterUnionTypeExtension) {
			listener.enterUnionTypeExtension(this);
		}
	}
	// @Override
	public exitRule(listener: GraphQLListener): void {
		if (listener.exitUnionTypeExtension) {
			listener.exitUnionTypeExtension(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GraphQLVisitor<Result>): Result {
		if (visitor.visitUnionTypeExtension) {
			return visitor.visitUnionTypeExtension(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumTypeDefinitionContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(GraphQLParser.NAME, 0); }
	public description(): DescriptionContext | undefined {
		return this.tryGetRuleContext(0, DescriptionContext);
	}
	public directives(): DirectivesContext | undefined {
		return this.tryGetRuleContext(0, DirectivesContext);
	}
	public enumValuesDefinitions(): EnumValuesDefinitionsContext | undefined {
		return this.tryGetRuleContext(0, EnumValuesDefinitionsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GraphQLParser.RULE_enumTypeDefinition; }
	// @Override
	public enterRule(listener: GraphQLListener): void {
		if (listener.enterEnumTypeDefinition) {
			listener.enterEnumTypeDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: GraphQLListener): void {
		if (listener.exitEnumTypeDefinition) {
			listener.exitEnumTypeDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GraphQLVisitor<Result>): Result {
		if (visitor.visitEnumTypeDefinition) {
			return visitor.visitEnumTypeDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumValuesDefinitionsContext extends ParserRuleContext {
	public enumValue(): EnumValueContext[];
	public enumValue(i: number): EnumValueContext;
	public enumValue(i?: number): EnumValueContext | EnumValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EnumValueContext);
		} else {
			return this.getRuleContext(i, EnumValueContext);
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
	public directives(): DirectivesContext[];
	public directives(i: number): DirectivesContext;
	public directives(i?: number): DirectivesContext | DirectivesContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DirectivesContext);
		} else {
			return this.getRuleContext(i, DirectivesContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GraphQLParser.RULE_enumValuesDefinitions; }
	// @Override
	public enterRule(listener: GraphQLListener): void {
		if (listener.enterEnumValuesDefinitions) {
			listener.enterEnumValuesDefinitions(this);
		}
	}
	// @Override
	public exitRule(listener: GraphQLListener): void {
		if (listener.exitEnumValuesDefinitions) {
			listener.exitEnumValuesDefinitions(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GraphQLVisitor<Result>): Result {
		if (visitor.visitEnumValuesDefinitions) {
			return visitor.visitEnumValuesDefinitions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumValueContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(GraphQLParser.NAME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GraphQLParser.RULE_enumValue; }
	// @Override
	public enterRule(listener: GraphQLListener): void {
		if (listener.enterEnumValue) {
			listener.enterEnumValue(this);
		}
	}
	// @Override
	public exitRule(listener: GraphQLListener): void {
		if (listener.exitEnumValue) {
			listener.exitEnumValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GraphQLVisitor<Result>): Result {
		if (visitor.visitEnumValue) {
			return visitor.visitEnumValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumTypeExtensionContext extends ParserRuleContext {
	public enumTypeDefinition(): EnumTypeDefinitionContext {
		return this.getRuleContext(0, EnumTypeDefinitionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GraphQLParser.RULE_enumTypeExtension; }
	// @Override
	public enterRule(listener: GraphQLListener): void {
		if (listener.enterEnumTypeExtension) {
			listener.enterEnumTypeExtension(this);
		}
	}
	// @Override
	public exitRule(listener: GraphQLListener): void {
		if (listener.exitEnumTypeExtension) {
			listener.exitEnumTypeExtension(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GraphQLVisitor<Result>): Result {
		if (visitor.visitEnumTypeExtension) {
			return visitor.visitEnumTypeExtension(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InputObjectTypeDefinitionContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(GraphQLParser.NAME, 0); }
	public description(): DescriptionContext | undefined {
		return this.tryGetRuleContext(0, DescriptionContext);
	}
	public directives(): DirectivesContext | undefined {
		return this.tryGetRuleContext(0, DirectivesContext);
	}
	public inputFieldsDefinition(): InputFieldsDefinitionContext | undefined {
		return this.tryGetRuleContext(0, InputFieldsDefinitionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GraphQLParser.RULE_inputObjectTypeDefinition; }
	// @Override
	public enterRule(listener: GraphQLListener): void {
		if (listener.enterInputObjectTypeDefinition) {
			listener.enterInputObjectTypeDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: GraphQLListener): void {
		if (listener.exitInputObjectTypeDefinition) {
			listener.exitInputObjectTypeDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GraphQLVisitor<Result>): Result {
		if (visitor.visitInputObjectTypeDefinition) {
			return visitor.visitInputObjectTypeDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InputFieldsDefinitionContext extends ParserRuleContext {
	public inputValueDefinition(): InputValueDefinitionContext[];
	public inputValueDefinition(i: number): InputValueDefinitionContext;
	public inputValueDefinition(i?: number): InputValueDefinitionContext | InputValueDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InputValueDefinitionContext);
		} else {
			return this.getRuleContext(i, InputValueDefinitionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GraphQLParser.RULE_inputFieldsDefinition; }
	// @Override
	public enterRule(listener: GraphQLListener): void {
		if (listener.enterInputFieldsDefinition) {
			listener.enterInputFieldsDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: GraphQLListener): void {
		if (listener.exitInputFieldsDefinition) {
			listener.exitInputFieldsDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GraphQLVisitor<Result>): Result {
		if (visitor.visitInputFieldsDefinition) {
			return visitor.visitInputFieldsDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DirectiveDefinitionContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(GraphQLParser.NAME, 0); }
	public directiveLocations(): DirectiveLocationsContext {
		return this.getRuleContext(0, DirectiveLocationsContext);
	}
	public description(): DescriptionContext | undefined {
		return this.tryGetRuleContext(0, DescriptionContext);
	}
	public argumentsDefinition(): ArgumentsDefinitionContext | undefined {
		return this.tryGetRuleContext(0, ArgumentsDefinitionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GraphQLParser.RULE_directiveDefinition; }
	// @Override
	public enterRule(listener: GraphQLListener): void {
		if (listener.enterDirectiveDefinition) {
			listener.enterDirectiveDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: GraphQLListener): void {
		if (listener.exitDirectiveDefinition) {
			listener.exitDirectiveDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GraphQLVisitor<Result>): Result {
		if (visitor.visitDirectiveDefinition) {
			return visitor.visitDirectiveDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DirectiveLocationsContext extends ParserRuleContext {
	public directiveLocation(): DirectiveLocationContext {
		return this.getRuleContext(0, DirectiveLocationContext);
	}
	public directiveLocations(): DirectiveLocationsContext[];
	public directiveLocations(i: number): DirectiveLocationsContext;
	public directiveLocations(i?: number): DirectiveLocationsContext | DirectiveLocationsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DirectiveLocationsContext);
		} else {
			return this.getRuleContext(i, DirectiveLocationsContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GraphQLParser.RULE_directiveLocations; }
	// @Override
	public enterRule(listener: GraphQLListener): void {
		if (listener.enterDirectiveLocations) {
			listener.enterDirectiveLocations(this);
		}
	}
	// @Override
	public exitRule(listener: GraphQLListener): void {
		if (listener.exitDirectiveLocations) {
			listener.exitDirectiveLocations(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GraphQLVisitor<Result>): Result {
		if (visitor.visitDirectiveLocations) {
			return visitor.visitDirectiveLocations(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DirectiveLocationContext extends ParserRuleContext {
	public executableDirectiveLocation(): ExecutableDirectiveLocationContext | undefined {
		return this.tryGetRuleContext(0, ExecutableDirectiveLocationContext);
	}
	public typeSystemDirectiveLocation(): TypeSystemDirectiveLocationContext | undefined {
		return this.tryGetRuleContext(0, TypeSystemDirectiveLocationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GraphQLParser.RULE_directiveLocation; }
	// @Override
	public enterRule(listener: GraphQLListener): void {
		if (listener.enterDirectiveLocation) {
			listener.enterDirectiveLocation(this);
		}
	}
	// @Override
	public exitRule(listener: GraphQLListener): void {
		if (listener.exitDirectiveLocation) {
			listener.exitDirectiveLocation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GraphQLVisitor<Result>): Result {
		if (visitor.visitDirectiveLocation) {
			return visitor.visitDirectiveLocation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExecutableDirectiveLocationContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GraphQLParser.RULE_executableDirectiveLocation; }
	// @Override
	public enterRule(listener: GraphQLListener): void {
		if (listener.enterExecutableDirectiveLocation) {
			listener.enterExecutableDirectiveLocation(this);
		}
	}
	// @Override
	public exitRule(listener: GraphQLListener): void {
		if (listener.exitExecutableDirectiveLocation) {
			listener.exitExecutableDirectiveLocation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GraphQLVisitor<Result>): Result {
		if (visitor.visitExecutableDirectiveLocation) {
			return visitor.visitExecutableDirectiveLocation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeSystemDirectiveLocationContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GraphQLParser.RULE_typeSystemDirectiveLocation; }
	// @Override
	public enterRule(listener: GraphQLListener): void {
		if (listener.enterTypeSystemDirectiveLocation) {
			listener.enterTypeSystemDirectiveLocation(this);
		}
	}
	// @Override
	public exitRule(listener: GraphQLListener): void {
		if (listener.exitTypeSystemDirectiveLocation) {
			listener.exitTypeSystemDirectiveLocation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GraphQLVisitor<Result>): Result {
		if (visitor.visitTypeSystemDirectiveLocation) {
			return visitor.visitTypeSystemDirectiveLocation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeSystemExtensionContext extends ParserRuleContext {
	public schemaExtension(): SchemaExtensionContext | undefined {
		return this.tryGetRuleContext(0, SchemaExtensionContext);
	}
	public typeExtension(): TypeExtensionContext | undefined {
		return this.tryGetRuleContext(0, TypeExtensionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GraphQLParser.RULE_typeSystemExtension; }
	// @Override
	public enterRule(listener: GraphQLListener): void {
		if (listener.enterTypeSystemExtension) {
			listener.enterTypeSystemExtension(this);
		}
	}
	// @Override
	public exitRule(listener: GraphQLListener): void {
		if (listener.exitTypeSystemExtension) {
			listener.exitTypeSystemExtension(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GraphQLVisitor<Result>): Result {
		if (visitor.visitTypeSystemExtension) {
			return visitor.visitTypeSystemExtension(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SchemaExtensionContext extends ParserRuleContext {
	public schemaDefinition(): SchemaDefinitionContext {
		return this.getRuleContext(0, SchemaDefinitionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GraphQLParser.RULE_schemaExtension; }
	// @Override
	public enterRule(listener: GraphQLListener): void {
		if (listener.enterSchemaExtension) {
			listener.enterSchemaExtension(this);
		}
	}
	// @Override
	public exitRule(listener: GraphQLListener): void {
		if (listener.exitSchemaExtension) {
			listener.exitSchemaExtension(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GraphQLVisitor<Result>): Result {
		if (visitor.visitSchemaExtension) {
			return visitor.visitSchemaExtension(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeExtensionContext extends ParserRuleContext {
	public typeDefinition(): TypeDefinitionContext {
		return this.getRuleContext(0, TypeDefinitionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GraphQLParser.RULE_typeExtension; }
	// @Override
	public enterRule(listener: GraphQLListener): void {
		if (listener.enterTypeExtension) {
			listener.enterTypeExtension(this);
		}
	}
	// @Override
	public exitRule(listener: GraphQLListener): void {
		if (listener.exitTypeExtension) {
			listener.exitTypeExtension(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GraphQLVisitor<Result>): Result {
		if (visitor.visitTypeExtension) {
			return visitor.visitTypeExtension(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExecDefinitionContext extends ParserRuleContext {
	public operationDefinition(): OperationDefinitionContext | undefined {
		return this.tryGetRuleContext(0, OperationDefinitionContext);
	}
	public fragmentDefinition(): FragmentDefinitionContext | undefined {
		return this.tryGetRuleContext(0, FragmentDefinitionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GraphQLParser.RULE_execDefinition; }
	// @Override
	public enterRule(listener: GraphQLListener): void {
		if (listener.enterExecDefinition) {
			listener.enterExecDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: GraphQLListener): void {
		if (listener.exitExecDefinition) {
			listener.exitExecDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GraphQLVisitor<Result>): Result {
		if (visitor.visitExecDefinition) {
			return visitor.visitExecDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OperationDefinitionContext extends ParserRuleContext {
	public selectionSet(): SelectionSetContext {
		return this.getRuleContext(0, SelectionSetContext);
	}
	public operationType(): OperationTypeContext | undefined {
		return this.tryGetRuleContext(0, OperationTypeContext);
	}
	public NAME(): TerminalNode | undefined { return this.tryGetToken(GraphQLParser.NAME, 0); }
	public variableDefinitions(): VariableDefinitionsContext | undefined {
		return this.tryGetRuleContext(0, VariableDefinitionsContext);
	}
	public directives(): DirectivesContext | undefined {
		return this.tryGetRuleContext(0, DirectivesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GraphQLParser.RULE_operationDefinition; }
	// @Override
	public enterRule(listener: GraphQLListener): void {
		if (listener.enterOperationDefinition) {
			listener.enterOperationDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: GraphQLListener): void {
		if (listener.exitOperationDefinition) {
			listener.exitOperationDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GraphQLVisitor<Result>): Result {
		if (visitor.visitOperationDefinition) {
			return visitor.visitOperationDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SelectionSetContext extends ParserRuleContext {
	public selection(): SelectionContext[];
	public selection(i: number): SelectionContext;
	public selection(i?: number): SelectionContext | SelectionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SelectionContext);
		} else {
			return this.getRuleContext(i, SelectionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GraphQLParser.RULE_selectionSet; }
	// @Override
	public enterRule(listener: GraphQLListener): void {
		if (listener.enterSelectionSet) {
			listener.enterSelectionSet(this);
		}
	}
	// @Override
	public exitRule(listener: GraphQLListener): void {
		if (listener.exitSelectionSet) {
			listener.exitSelectionSet(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GraphQLVisitor<Result>): Result {
		if (visitor.visitSelectionSet) {
			return visitor.visitSelectionSet(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OperationTypeContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GraphQLParser.RULE_operationType; }
	// @Override
	public enterRule(listener: GraphQLListener): void {
		if (listener.enterOperationType) {
			listener.enterOperationType(this);
		}
	}
	// @Override
	public exitRule(listener: GraphQLListener): void {
		if (listener.exitOperationType) {
			listener.exitOperationType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GraphQLVisitor<Result>): Result {
		if (visitor.visitOperationType) {
			return visitor.visitOperationType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SelectionContext extends ParserRuleContext {
	public field(): FieldContext | undefined {
		return this.tryGetRuleContext(0, FieldContext);
	}
	public fragmentSpread(): FragmentSpreadContext | undefined {
		return this.tryGetRuleContext(0, FragmentSpreadContext);
	}
	public inlineFragment(): InlineFragmentContext | undefined {
		return this.tryGetRuleContext(0, InlineFragmentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GraphQLParser.RULE_selection; }
	// @Override
	public enterRule(listener: GraphQLListener): void {
		if (listener.enterSelection) {
			listener.enterSelection(this);
		}
	}
	// @Override
	public exitRule(listener: GraphQLListener): void {
		if (listener.exitSelection) {
			listener.exitSelection(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GraphQLVisitor<Result>): Result {
		if (visitor.visitSelection) {
			return visitor.visitSelection(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldContext extends ParserRuleContext {
	public fieldName(): FieldNameContext {
		return this.getRuleContext(0, FieldNameContext);
	}
	public arguments(): ArgumentsContext | undefined {
		return this.tryGetRuleContext(0, ArgumentsContext);
	}
	public directives(): DirectivesContext | undefined {
		return this.tryGetRuleContext(0, DirectivesContext);
	}
	public selectionSet(): SelectionSetContext | undefined {
		return this.tryGetRuleContext(0, SelectionSetContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GraphQLParser.RULE_field; }
	// @Override
	public enterRule(listener: GraphQLListener): void {
		if (listener.enterField) {
			listener.enterField(this);
		}
	}
	// @Override
	public exitRule(listener: GraphQLListener): void {
		if (listener.exitField) {
			listener.exitField(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GraphQLVisitor<Result>): Result {
		if (visitor.visitField) {
			return visitor.visitField(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldNameContext extends ParserRuleContext {
	public alias(): AliasContext | undefined {
		return this.tryGetRuleContext(0, AliasContext);
	}
	public NAME(): TerminalNode | undefined { return this.tryGetToken(GraphQLParser.NAME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GraphQLParser.RULE_fieldName; }
	// @Override
	public enterRule(listener: GraphQLListener): void {
		if (listener.enterFieldName) {
			listener.enterFieldName(this);
		}
	}
	// @Override
	public exitRule(listener: GraphQLListener): void {
		if (listener.exitFieldName) {
			listener.exitFieldName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GraphQLVisitor<Result>): Result {
		if (visitor.visitFieldName) {
			return visitor.visitFieldName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AliasContext extends ParserRuleContext {
	public NAME(): TerminalNode[];
	public NAME(i: number): TerminalNode;
	public NAME(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(GraphQLParser.NAME);
		} else {
			return this.getToken(GraphQLParser.NAME, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GraphQLParser.RULE_alias; }
	// @Override
	public enterRule(listener: GraphQLListener): void {
		if (listener.enterAlias) {
			listener.enterAlias(this);
		}
	}
	// @Override
	public exitRule(listener: GraphQLListener): void {
		if (listener.exitAlias) {
			listener.exitAlias(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GraphQLVisitor<Result>): Result {
		if (visitor.visitAlias) {
			return visitor.visitAlias(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgumentsContext extends ParserRuleContext {
	public argument(): ArgumentContext[];
	public argument(i: number): ArgumentContext;
	public argument(i?: number): ArgumentContext | ArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArgumentContext);
		} else {
			return this.getRuleContext(i, ArgumentContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GraphQLParser.RULE_arguments; }
	// @Override
	public enterRule(listener: GraphQLListener): void {
		if (listener.enterArguments) {
			listener.enterArguments(this);
		}
	}
	// @Override
	public exitRule(listener: GraphQLListener): void {
		if (listener.exitArguments) {
			listener.exitArguments(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GraphQLVisitor<Result>): Result {
		if (visitor.visitArguments) {
			return visitor.visitArguments(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgumentContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(GraphQLParser.NAME, 0); }
	public valueOrVariable(): ValueOrVariableContext {
		return this.getRuleContext(0, ValueOrVariableContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GraphQLParser.RULE_argument; }
	// @Override
	public enterRule(listener: GraphQLListener): void {
		if (listener.enterArgument) {
			listener.enterArgument(this);
		}
	}
	// @Override
	public exitRule(listener: GraphQLListener): void {
		if (listener.exitArgument) {
			listener.exitArgument(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GraphQLVisitor<Result>): Result {
		if (visitor.visitArgument) {
			return visitor.visitArgument(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FragmentSpreadContext extends ParserRuleContext {
	public fragmentName(): FragmentNameContext {
		return this.getRuleContext(0, FragmentNameContext);
	}
	public directives(): DirectivesContext | undefined {
		return this.tryGetRuleContext(0, DirectivesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GraphQLParser.RULE_fragmentSpread; }
	// @Override
	public enterRule(listener: GraphQLListener): void {
		if (listener.enterFragmentSpread) {
			listener.enterFragmentSpread(this);
		}
	}
	// @Override
	public exitRule(listener: GraphQLListener): void {
		if (listener.exitFragmentSpread) {
			listener.exitFragmentSpread(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GraphQLVisitor<Result>): Result {
		if (visitor.visitFragmentSpread) {
			return visitor.visitFragmentSpread(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InlineFragmentContext extends ParserRuleContext {
	public typeCondition(): TypeConditionContext {
		return this.getRuleContext(0, TypeConditionContext);
	}
	public selectionSet(): SelectionSetContext {
		return this.getRuleContext(0, SelectionSetContext);
	}
	public directives(): DirectivesContext | undefined {
		return this.tryGetRuleContext(0, DirectivesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GraphQLParser.RULE_inlineFragment; }
	// @Override
	public enterRule(listener: GraphQLListener): void {
		if (listener.enterInlineFragment) {
			listener.enterInlineFragment(this);
		}
	}
	// @Override
	public exitRule(listener: GraphQLListener): void {
		if (listener.exitInlineFragment) {
			listener.exitInlineFragment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GraphQLVisitor<Result>): Result {
		if (visitor.visitInlineFragment) {
			return visitor.visitInlineFragment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FragmentDefinitionContext extends ParserRuleContext {
	public fragmentName(): FragmentNameContext {
		return this.getRuleContext(0, FragmentNameContext);
	}
	public typeCondition(): TypeConditionContext {
		return this.getRuleContext(0, TypeConditionContext);
	}
	public selectionSet(): SelectionSetContext {
		return this.getRuleContext(0, SelectionSetContext);
	}
	public directives(): DirectivesContext | undefined {
		return this.tryGetRuleContext(0, DirectivesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GraphQLParser.RULE_fragmentDefinition; }
	// @Override
	public enterRule(listener: GraphQLListener): void {
		if (listener.enterFragmentDefinition) {
			listener.enterFragmentDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: GraphQLListener): void {
		if (listener.exitFragmentDefinition) {
			listener.exitFragmentDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GraphQLVisitor<Result>): Result {
		if (visitor.visitFragmentDefinition) {
			return visitor.visitFragmentDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FragmentNameContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(GraphQLParser.NAME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GraphQLParser.RULE_fragmentName; }
	// @Override
	public enterRule(listener: GraphQLListener): void {
		if (listener.enterFragmentName) {
			listener.enterFragmentName(this);
		}
	}
	// @Override
	public exitRule(listener: GraphQLListener): void {
		if (listener.exitFragmentName) {
			listener.exitFragmentName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GraphQLVisitor<Result>): Result {
		if (visitor.visitFragmentName) {
			return visitor.visitFragmentName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DirectivesContext extends ParserRuleContext {
	public directive(): DirectiveContext[];
	public directive(i: number): DirectiveContext;
	public directive(i?: number): DirectiveContext | DirectiveContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DirectiveContext);
		} else {
			return this.getRuleContext(i, DirectiveContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GraphQLParser.RULE_directives; }
	// @Override
	public enterRule(listener: GraphQLListener): void {
		if (listener.enterDirectives) {
			listener.enterDirectives(this);
		}
	}
	// @Override
	public exitRule(listener: GraphQLListener): void {
		if (listener.exitDirectives) {
			listener.exitDirectives(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GraphQLVisitor<Result>): Result {
		if (visitor.visitDirectives) {
			return visitor.visitDirectives(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DirectiveContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(GraphQLParser.NAME, 0); }
	public valueOrVariable(): ValueOrVariableContext | undefined {
		return this.tryGetRuleContext(0, ValueOrVariableContext);
	}
	public argument(): ArgumentContext | undefined {
		return this.tryGetRuleContext(0, ArgumentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GraphQLParser.RULE_directive; }
	// @Override
	public enterRule(listener: GraphQLListener): void {
		if (listener.enterDirective) {
			listener.enterDirective(this);
		}
	}
	// @Override
	public exitRule(listener: GraphQLListener): void {
		if (listener.exitDirective) {
			listener.exitDirective(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GraphQLVisitor<Result>): Result {
		if (visitor.visitDirective) {
			return visitor.visitDirective(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeConditionContext extends ParserRuleContext {
	public typeName(): TypeNameContext {
		return this.getRuleContext(0, TypeNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GraphQLParser.RULE_typeCondition; }
	// @Override
	public enterRule(listener: GraphQLListener): void {
		if (listener.enterTypeCondition) {
			listener.enterTypeCondition(this);
		}
	}
	// @Override
	public exitRule(listener: GraphQLListener): void {
		if (listener.exitTypeCondition) {
			listener.exitTypeCondition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GraphQLVisitor<Result>): Result {
		if (visitor.visitTypeCondition) {
			return visitor.visitTypeCondition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDefinitionsContext extends ParserRuleContext {
	public variableDefinition(): VariableDefinitionContext[];
	public variableDefinition(i: number): VariableDefinitionContext;
	public variableDefinition(i?: number): VariableDefinitionContext | VariableDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableDefinitionContext);
		} else {
			return this.getRuleContext(i, VariableDefinitionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GraphQLParser.RULE_variableDefinitions; }
	// @Override
	public enterRule(listener: GraphQLListener): void {
		if (listener.enterVariableDefinitions) {
			listener.enterVariableDefinitions(this);
		}
	}
	// @Override
	public exitRule(listener: GraphQLListener): void {
		if (listener.exitVariableDefinitions) {
			listener.exitVariableDefinitions(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GraphQLVisitor<Result>): Result {
		if (visitor.visitVariableDefinitions) {
			return visitor.visitVariableDefinitions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDefinitionContext extends ParserRuleContext {
	public variable(): VariableContext {
		return this.getRuleContext(0, VariableContext);
	}
	public type_(): Type_Context {
		return this.getRuleContext(0, Type_Context);
	}
	public defaultValue(): DefaultValueContext | undefined {
		return this.tryGetRuleContext(0, DefaultValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GraphQLParser.RULE_variableDefinition; }
	// @Override
	public enterRule(listener: GraphQLListener): void {
		if (listener.enterVariableDefinition) {
			listener.enterVariableDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: GraphQLListener): void {
		if (listener.exitVariableDefinition) {
			listener.exitVariableDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GraphQLVisitor<Result>): Result {
		if (visitor.visitVariableDefinition) {
			return visitor.visitVariableDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(GraphQLParser.NAME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GraphQLParser.RULE_variable; }
	// @Override
	public enterRule(listener: GraphQLListener): void {
		if (listener.enterVariable) {
			listener.enterVariable(this);
		}
	}
	// @Override
	public exitRule(listener: GraphQLListener): void {
		if (listener.exitVariable) {
			listener.exitVariable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GraphQLVisitor<Result>): Result {
		if (visitor.visitVariable) {
			return visitor.visitVariable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DefaultValueContext extends ParserRuleContext {
	public value(): ValueContext {
		return this.getRuleContext(0, ValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GraphQLParser.RULE_defaultValue; }
	// @Override
	public enterRule(listener: GraphQLListener): void {
		if (listener.enterDefaultValue) {
			listener.enterDefaultValue(this);
		}
	}
	// @Override
	public exitRule(listener: GraphQLListener): void {
		if (listener.exitDefaultValue) {
			listener.exitDefaultValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GraphQLVisitor<Result>): Result {
		if (visitor.visitDefaultValue) {
			return visitor.visitDefaultValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValueOrVariableContext extends ParserRuleContext {
	public value(): ValueContext | undefined {
		return this.tryGetRuleContext(0, ValueContext);
	}
	public variable(): VariableContext | undefined {
		return this.tryGetRuleContext(0, VariableContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GraphQLParser.RULE_valueOrVariable; }
	// @Override
	public enterRule(listener: GraphQLListener): void {
		if (listener.enterValueOrVariable) {
			listener.enterValueOrVariable(this);
		}
	}
	// @Override
	public exitRule(listener: GraphQLListener): void {
		if (listener.exitValueOrVariable) {
			listener.exitValueOrVariable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GraphQLVisitor<Result>): Result {
		if (visitor.visitValueOrVariable) {
			return visitor.visitValueOrVariable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValueContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GraphQLParser.RULE_value; }
	public copyFrom(ctx: ValueContext): void {
		super.copyFrom(ctx);
	}
}
export class StringValueContext extends ValueContext {
	public String_(): TerminalNode { return this.getToken(GraphQLParser.String_, 0); }
	constructor(ctx: ValueContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: GraphQLListener): void {
		if (listener.enterStringValue) {
			listener.enterStringValue(this);
		}
	}
	// @Override
	public exitRule(listener: GraphQLListener): void {
		if (listener.exitStringValue) {
			listener.exitStringValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GraphQLVisitor<Result>): Result {
		if (visitor.visitStringValue) {
			return visitor.visitStringValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NumberValueContext extends ValueContext {
	public NUMBER(): TerminalNode { return this.getToken(GraphQLParser.NUMBER, 0); }
	constructor(ctx: ValueContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: GraphQLListener): void {
		if (listener.enterNumberValue) {
			listener.enterNumberValue(this);
		}
	}
	// @Override
	public exitRule(listener: GraphQLListener): void {
		if (listener.exitNumberValue) {
			listener.exitNumberValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GraphQLVisitor<Result>): Result {
		if (visitor.visitNumberValue) {
			return visitor.visitNumberValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BooleanValueContext extends ValueContext {
	public BooleanLiteral(): TerminalNode { return this.getToken(GraphQLParser.BooleanLiteral, 0); }
	constructor(ctx: ValueContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: GraphQLListener): void {
		if (listener.enterBooleanValue) {
			listener.enterBooleanValue(this);
		}
	}
	// @Override
	public exitRule(listener: GraphQLListener): void {
		if (listener.exitBooleanValue) {
			listener.exitBooleanValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GraphQLVisitor<Result>): Result {
		if (visitor.visitBooleanValue) {
			return visitor.visitBooleanValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ArrayValueContext extends ValueContext {
	public array(): ArrayContext {
		return this.getRuleContext(0, ArrayContext);
	}
	constructor(ctx: ValueContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: GraphQLListener): void {
		if (listener.enterArrayValue) {
			listener.enterArrayValue(this);
		}
	}
	// @Override
	public exitRule(listener: GraphQLListener): void {
		if (listener.exitArrayValue) {
			listener.exitArrayValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GraphQLVisitor<Result>): Result {
		if (visitor.visitArrayValue) {
			return visitor.visitArrayValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IdValueContext extends ValueContext {
	public ID(): TerminalNode { return this.getToken(GraphQLParser.ID, 0); }
	constructor(ctx: ValueContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: GraphQLListener): void {
		if (listener.enterIdValue) {
			listener.enterIdValue(this);
		}
	}
	// @Override
	public exitRule(listener: GraphQLListener): void {
		if (listener.exitIdValue) {
			listener.exitIdValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GraphQLVisitor<Result>): Result {
		if (visitor.visitIdValue) {
			return visitor.visitIdValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NullValueContext extends ValueContext {
	constructor(ctx: ValueContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: GraphQLListener): void {
		if (listener.enterNullValue) {
			listener.enterNullValue(this);
		}
	}
	// @Override
	public exitRule(listener: GraphQLListener): void {
		if (listener.exitNullValue) {
			listener.exitNullValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GraphQLVisitor<Result>): Result {
		if (visitor.visitNullValue) {
			return visitor.visitNullValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Type_Context extends ParserRuleContext {
	public typeName(): TypeNameContext | undefined {
		return this.tryGetRuleContext(0, TypeNameContext);
	}
	public nonNullType(): NonNullTypeContext | undefined {
		return this.tryGetRuleContext(0, NonNullTypeContext);
	}
	public listType(): ListTypeContext | undefined {
		return this.tryGetRuleContext(0, ListTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GraphQLParser.RULE_type_; }
	// @Override
	public enterRule(listener: GraphQLListener): void {
		if (listener.enterType_) {
			listener.enterType_(this);
		}
	}
	// @Override
	public exitRule(listener: GraphQLListener): void {
		if (listener.exitType_) {
			listener.exitType_(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GraphQLVisitor<Result>): Result {
		if (visitor.visitType_) {
			return visitor.visitType_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeNameContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(GraphQLParser.NAME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GraphQLParser.RULE_typeName; }
	// @Override
	public enterRule(listener: GraphQLListener): void {
		if (listener.enterTypeName) {
			listener.enterTypeName(this);
		}
	}
	// @Override
	public exitRule(listener: GraphQLListener): void {
		if (listener.exitTypeName) {
			listener.exitTypeName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GraphQLVisitor<Result>): Result {
		if (visitor.visitTypeName) {
			return visitor.visitTypeName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ListTypeContext extends ParserRuleContext {
	public type_(): Type_Context {
		return this.getRuleContext(0, Type_Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GraphQLParser.RULE_listType; }
	// @Override
	public enterRule(listener: GraphQLListener): void {
		if (listener.enterListType) {
			listener.enterListType(this);
		}
	}
	// @Override
	public exitRule(listener: GraphQLListener): void {
		if (listener.exitListType) {
			listener.exitListType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GraphQLVisitor<Result>): Result {
		if (visitor.visitListType) {
			return visitor.visitListType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NonNullTypeContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GraphQLParser.RULE_nonNullType; }
	// @Override
	public enterRule(listener: GraphQLListener): void {
		if (listener.enterNonNullType) {
			listener.enterNonNullType(this);
		}
	}
	// @Override
	public exitRule(listener: GraphQLListener): void {
		if (listener.exitNonNullType) {
			listener.exitNonNullType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GraphQLVisitor<Result>): Result {
		if (visitor.visitNonNullType) {
			return visitor.visitNonNullType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayContext extends ParserRuleContext {
	public value(): ValueContext[];
	public value(i: number): ValueContext;
	public value(i?: number): ValueContext | ValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueContext);
		} else {
			return this.getRuleContext(i, ValueContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return GraphQLParser.RULE_array; }
	// @Override
	public enterRule(listener: GraphQLListener): void {
		if (listener.enterArray) {
			listener.enterArray(this);
		}
	}
	// @Override
	public exitRule(listener: GraphQLListener): void {
		if (listener.exitArray) {
			listener.exitArray(this);
		}
	}
	// @Override
	public accept<Result>(visitor: GraphQLVisitor<Result>): Result {
		if (visitor.visitArray) {
			return visitor.visitArray(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


