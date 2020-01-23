// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/graphql/GraphQL.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { StringValueContext } from "./GraphQLParser";
import { NumberValueContext } from "./GraphQLParser";
import { BooleanValueContext } from "./GraphQLParser";
import { ArrayValueContext } from "./GraphQLParser";
import { IdValueContext } from "./GraphQLParser";
import { NullValueContext } from "./GraphQLParser";
import { DocumentContext } from "./GraphQLParser";
import { DefinitionContext } from "./GraphQLParser";
import { TypeSystemDefinitionContext } from "./GraphQLParser";
import { SchemaDefinitionContext } from "./GraphQLParser";
import { RootOperationTypeDefinitionListContext } from "./GraphQLParser";
import { RootOperationTypeDefinitionContext } from "./GraphQLParser";
import { NamedTypeContext } from "./GraphQLParser";
import { TypeDefinitionContext } from "./GraphQLParser";
import { ScalarTypeDefinitionContext } from "./GraphQLParser";
import { DescriptionContext } from "./GraphQLParser";
import { ObjectTypeDefinitionContext } from "./GraphQLParser";
import { ImplementsInterfacesContext } from "./GraphQLParser";
import { FieldsDefinitionsContext } from "./GraphQLParser";
import { FieldsDefinitionContext } from "./GraphQLParser";
import { ArgumentsDefinitionContext } from "./GraphQLParser";
import { InputValueDefinitionContext } from "./GraphQLParser";
import { InterfaceTypeDefinitionContext } from "./GraphQLParser";
import { UnionTypeDefinitionContext } from "./GraphQLParser";
import { UnionMemberTypesContext } from "./GraphQLParser";
import { UnionTypeExtensionContext } from "./GraphQLParser";
import { EnumTypeDefinitionContext } from "./GraphQLParser";
import { EnumValuesDefinitionsContext } from "./GraphQLParser";
import { EnumValueContext } from "./GraphQLParser";
import { EnumTypeExtensionContext } from "./GraphQLParser";
import { InputObjectTypeDefinitionContext } from "./GraphQLParser";
import { InputFieldsDefinitionContext } from "./GraphQLParser";
import { DirectiveDefinitionContext } from "./GraphQLParser";
import { DirectiveLocationsContext } from "./GraphQLParser";
import { DirectiveLocationContext } from "./GraphQLParser";
import { ExecutableDirectiveLocationContext } from "./GraphQLParser";
import { TypeSystemDirectiveLocationContext } from "./GraphQLParser";
import { TypeSystemExtensionContext } from "./GraphQLParser";
import { SchemaExtensionContext } from "./GraphQLParser";
import { TypeExtensionContext } from "./GraphQLParser";
import { ExecDefinitionContext } from "./GraphQLParser";
import { OperationDefinitionContext } from "./GraphQLParser";
import { SelectionSetContext } from "./GraphQLParser";
import { OperationTypeContext } from "./GraphQLParser";
import { SelectionContext } from "./GraphQLParser";
import { FieldContext } from "./GraphQLParser";
import { FieldNameContext } from "./GraphQLParser";
import { AliasContext } from "./GraphQLParser";
import { ArgumentsContext } from "./GraphQLParser";
import { ArgumentContext } from "./GraphQLParser";
import { FragmentSpreadContext } from "./GraphQLParser";
import { InlineFragmentContext } from "./GraphQLParser";
import { FragmentDefinitionContext } from "./GraphQLParser";
import { FragmentNameContext } from "./GraphQLParser";
import { DirectivesContext } from "./GraphQLParser";
import { DirectiveContext } from "./GraphQLParser";
import { TypeConditionContext } from "./GraphQLParser";
import { VariableDefinitionsContext } from "./GraphQLParser";
import { VariableDefinitionContext } from "./GraphQLParser";
import { VariableContext } from "./GraphQLParser";
import { DefaultValueContext } from "./GraphQLParser";
import { ValueOrVariableContext } from "./GraphQLParser";
import { ValueContext } from "./GraphQLParser";
import { Type_Context } from "./GraphQLParser";
import { TypeNameContext } from "./GraphQLParser";
import { ListTypeContext } from "./GraphQLParser";
import { NonNullTypeContext } from "./GraphQLParser";
import { ArrayContext } from "./GraphQLParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `GraphQLParser`.
 */
export interface GraphQLListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `stringValue`
	 * labeled alternative in `GraphQLParser.value`.
	 * @param ctx the parse tree
	 */
	enterStringValue?: (ctx: StringValueContext) => void;
	/**
	 * Exit a parse tree produced by the `stringValue`
	 * labeled alternative in `GraphQLParser.value`.
	 * @param ctx the parse tree
	 */
	exitStringValue?: (ctx: StringValueContext) => void;

	/**
	 * Enter a parse tree produced by the `numberValue`
	 * labeled alternative in `GraphQLParser.value`.
	 * @param ctx the parse tree
	 */
	enterNumberValue?: (ctx: NumberValueContext) => void;
	/**
	 * Exit a parse tree produced by the `numberValue`
	 * labeled alternative in `GraphQLParser.value`.
	 * @param ctx the parse tree
	 */
	exitNumberValue?: (ctx: NumberValueContext) => void;

	/**
	 * Enter a parse tree produced by the `booleanValue`
	 * labeled alternative in `GraphQLParser.value`.
	 * @param ctx the parse tree
	 */
	enterBooleanValue?: (ctx: BooleanValueContext) => void;
	/**
	 * Exit a parse tree produced by the `booleanValue`
	 * labeled alternative in `GraphQLParser.value`.
	 * @param ctx the parse tree
	 */
	exitBooleanValue?: (ctx: BooleanValueContext) => void;

	/**
	 * Enter a parse tree produced by the `arrayValue`
	 * labeled alternative in `GraphQLParser.value`.
	 * @param ctx the parse tree
	 */
	enterArrayValue?: (ctx: ArrayValueContext) => void;
	/**
	 * Exit a parse tree produced by the `arrayValue`
	 * labeled alternative in `GraphQLParser.value`.
	 * @param ctx the parse tree
	 */
	exitArrayValue?: (ctx: ArrayValueContext) => void;

	/**
	 * Enter a parse tree produced by the `idValue`
	 * labeled alternative in `GraphQLParser.value`.
	 * @param ctx the parse tree
	 */
	enterIdValue?: (ctx: IdValueContext) => void;
	/**
	 * Exit a parse tree produced by the `idValue`
	 * labeled alternative in `GraphQLParser.value`.
	 * @param ctx the parse tree
	 */
	exitIdValue?: (ctx: IdValueContext) => void;

	/**
	 * Enter a parse tree produced by the `nullValue`
	 * labeled alternative in `GraphQLParser.value`.
	 * @param ctx the parse tree
	 */
	enterNullValue?: (ctx: NullValueContext) => void;
	/**
	 * Exit a parse tree produced by the `nullValue`
	 * labeled alternative in `GraphQLParser.value`.
	 * @param ctx the parse tree
	 */
	exitNullValue?: (ctx: NullValueContext) => void;

	/**
	 * Enter a parse tree produced by `GraphQLParser.document`.
	 * @param ctx the parse tree
	 */
	enterDocument?: (ctx: DocumentContext) => void;
	/**
	 * Exit a parse tree produced by `GraphQLParser.document`.
	 * @param ctx the parse tree
	 */
	exitDocument?: (ctx: DocumentContext) => void;

	/**
	 * Enter a parse tree produced by `GraphQLParser.definition`.
	 * @param ctx the parse tree
	 */
	enterDefinition?: (ctx: DefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `GraphQLParser.definition`.
	 * @param ctx the parse tree
	 */
	exitDefinition?: (ctx: DefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `GraphQLParser.typeSystemDefinition`.
	 * @param ctx the parse tree
	 */
	enterTypeSystemDefinition?: (ctx: TypeSystemDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `GraphQLParser.typeSystemDefinition`.
	 * @param ctx the parse tree
	 */
	exitTypeSystemDefinition?: (ctx: TypeSystemDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `GraphQLParser.schemaDefinition`.
	 * @param ctx the parse tree
	 */
	enterSchemaDefinition?: (ctx: SchemaDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `GraphQLParser.schemaDefinition`.
	 * @param ctx the parse tree
	 */
	exitSchemaDefinition?: (ctx: SchemaDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `GraphQLParser.rootOperationTypeDefinitionList`.
	 * @param ctx the parse tree
	 */
	enterRootOperationTypeDefinitionList?: (ctx: RootOperationTypeDefinitionListContext) => void;
	/**
	 * Exit a parse tree produced by `GraphQLParser.rootOperationTypeDefinitionList`.
	 * @param ctx the parse tree
	 */
	exitRootOperationTypeDefinitionList?: (ctx: RootOperationTypeDefinitionListContext) => void;

	/**
	 * Enter a parse tree produced by `GraphQLParser.rootOperationTypeDefinition`.
	 * @param ctx the parse tree
	 */
	enterRootOperationTypeDefinition?: (ctx: RootOperationTypeDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `GraphQLParser.rootOperationTypeDefinition`.
	 * @param ctx the parse tree
	 */
	exitRootOperationTypeDefinition?: (ctx: RootOperationTypeDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `GraphQLParser.namedType`.
	 * @param ctx the parse tree
	 */
	enterNamedType?: (ctx: NamedTypeContext) => void;
	/**
	 * Exit a parse tree produced by `GraphQLParser.namedType`.
	 * @param ctx the parse tree
	 */
	exitNamedType?: (ctx: NamedTypeContext) => void;

	/**
	 * Enter a parse tree produced by `GraphQLParser.typeDefinition`.
	 * @param ctx the parse tree
	 */
	enterTypeDefinition?: (ctx: TypeDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `GraphQLParser.typeDefinition`.
	 * @param ctx the parse tree
	 */
	exitTypeDefinition?: (ctx: TypeDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `GraphQLParser.scalarTypeDefinition`.
	 * @param ctx the parse tree
	 */
	enterScalarTypeDefinition?: (ctx: ScalarTypeDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `GraphQLParser.scalarTypeDefinition`.
	 * @param ctx the parse tree
	 */
	exitScalarTypeDefinition?: (ctx: ScalarTypeDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `GraphQLParser.description`.
	 * @param ctx the parse tree
	 */
	enterDescription?: (ctx: DescriptionContext) => void;
	/**
	 * Exit a parse tree produced by `GraphQLParser.description`.
	 * @param ctx the parse tree
	 */
	exitDescription?: (ctx: DescriptionContext) => void;

	/**
	 * Enter a parse tree produced by `GraphQLParser.objectTypeDefinition`.
	 * @param ctx the parse tree
	 */
	enterObjectTypeDefinition?: (ctx: ObjectTypeDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `GraphQLParser.objectTypeDefinition`.
	 * @param ctx the parse tree
	 */
	exitObjectTypeDefinition?: (ctx: ObjectTypeDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `GraphQLParser.implementsInterfaces`.
	 * @param ctx the parse tree
	 */
	enterImplementsInterfaces?: (ctx: ImplementsInterfacesContext) => void;
	/**
	 * Exit a parse tree produced by `GraphQLParser.implementsInterfaces`.
	 * @param ctx the parse tree
	 */
	exitImplementsInterfaces?: (ctx: ImplementsInterfacesContext) => void;

	/**
	 * Enter a parse tree produced by `GraphQLParser.fieldsDefinitions`.
	 * @param ctx the parse tree
	 */
	enterFieldsDefinitions?: (ctx: FieldsDefinitionsContext) => void;
	/**
	 * Exit a parse tree produced by `GraphQLParser.fieldsDefinitions`.
	 * @param ctx the parse tree
	 */
	exitFieldsDefinitions?: (ctx: FieldsDefinitionsContext) => void;

	/**
	 * Enter a parse tree produced by `GraphQLParser.fieldsDefinition`.
	 * @param ctx the parse tree
	 */
	enterFieldsDefinition?: (ctx: FieldsDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `GraphQLParser.fieldsDefinition`.
	 * @param ctx the parse tree
	 */
	exitFieldsDefinition?: (ctx: FieldsDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `GraphQLParser.argumentsDefinition`.
	 * @param ctx the parse tree
	 */
	enterArgumentsDefinition?: (ctx: ArgumentsDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `GraphQLParser.argumentsDefinition`.
	 * @param ctx the parse tree
	 */
	exitArgumentsDefinition?: (ctx: ArgumentsDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `GraphQLParser.inputValueDefinition`.
	 * @param ctx the parse tree
	 */
	enterInputValueDefinition?: (ctx: InputValueDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `GraphQLParser.inputValueDefinition`.
	 * @param ctx the parse tree
	 */
	exitInputValueDefinition?: (ctx: InputValueDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `GraphQLParser.interfaceTypeDefinition`.
	 * @param ctx the parse tree
	 */
	enterInterfaceTypeDefinition?: (ctx: InterfaceTypeDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `GraphQLParser.interfaceTypeDefinition`.
	 * @param ctx the parse tree
	 */
	exitInterfaceTypeDefinition?: (ctx: InterfaceTypeDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `GraphQLParser.unionTypeDefinition`.
	 * @param ctx the parse tree
	 */
	enterUnionTypeDefinition?: (ctx: UnionTypeDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `GraphQLParser.unionTypeDefinition`.
	 * @param ctx the parse tree
	 */
	exitUnionTypeDefinition?: (ctx: UnionTypeDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `GraphQLParser.unionMemberTypes`.
	 * @param ctx the parse tree
	 */
	enterUnionMemberTypes?: (ctx: UnionMemberTypesContext) => void;
	/**
	 * Exit a parse tree produced by `GraphQLParser.unionMemberTypes`.
	 * @param ctx the parse tree
	 */
	exitUnionMemberTypes?: (ctx: UnionMemberTypesContext) => void;

	/**
	 * Enter a parse tree produced by `GraphQLParser.unionTypeExtension`.
	 * @param ctx the parse tree
	 */
	enterUnionTypeExtension?: (ctx: UnionTypeExtensionContext) => void;
	/**
	 * Exit a parse tree produced by `GraphQLParser.unionTypeExtension`.
	 * @param ctx the parse tree
	 */
	exitUnionTypeExtension?: (ctx: UnionTypeExtensionContext) => void;

	/**
	 * Enter a parse tree produced by `GraphQLParser.enumTypeDefinition`.
	 * @param ctx the parse tree
	 */
	enterEnumTypeDefinition?: (ctx: EnumTypeDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `GraphQLParser.enumTypeDefinition`.
	 * @param ctx the parse tree
	 */
	exitEnumTypeDefinition?: (ctx: EnumTypeDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `GraphQLParser.enumValuesDefinitions`.
	 * @param ctx the parse tree
	 */
	enterEnumValuesDefinitions?: (ctx: EnumValuesDefinitionsContext) => void;
	/**
	 * Exit a parse tree produced by `GraphQLParser.enumValuesDefinitions`.
	 * @param ctx the parse tree
	 */
	exitEnumValuesDefinitions?: (ctx: EnumValuesDefinitionsContext) => void;

	/**
	 * Enter a parse tree produced by `GraphQLParser.enumValue`.
	 * @param ctx the parse tree
	 */
	enterEnumValue?: (ctx: EnumValueContext) => void;
	/**
	 * Exit a parse tree produced by `GraphQLParser.enumValue`.
	 * @param ctx the parse tree
	 */
	exitEnumValue?: (ctx: EnumValueContext) => void;

	/**
	 * Enter a parse tree produced by `GraphQLParser.enumTypeExtension`.
	 * @param ctx the parse tree
	 */
	enterEnumTypeExtension?: (ctx: EnumTypeExtensionContext) => void;
	/**
	 * Exit a parse tree produced by `GraphQLParser.enumTypeExtension`.
	 * @param ctx the parse tree
	 */
	exitEnumTypeExtension?: (ctx: EnumTypeExtensionContext) => void;

	/**
	 * Enter a parse tree produced by `GraphQLParser.inputObjectTypeDefinition`.
	 * @param ctx the parse tree
	 */
	enterInputObjectTypeDefinition?: (ctx: InputObjectTypeDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `GraphQLParser.inputObjectTypeDefinition`.
	 * @param ctx the parse tree
	 */
	exitInputObjectTypeDefinition?: (ctx: InputObjectTypeDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `GraphQLParser.inputFieldsDefinition`.
	 * @param ctx the parse tree
	 */
	enterInputFieldsDefinition?: (ctx: InputFieldsDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `GraphQLParser.inputFieldsDefinition`.
	 * @param ctx the parse tree
	 */
	exitInputFieldsDefinition?: (ctx: InputFieldsDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `GraphQLParser.directiveDefinition`.
	 * @param ctx the parse tree
	 */
	enterDirectiveDefinition?: (ctx: DirectiveDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `GraphQLParser.directiveDefinition`.
	 * @param ctx the parse tree
	 */
	exitDirectiveDefinition?: (ctx: DirectiveDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `GraphQLParser.directiveLocations`.
	 * @param ctx the parse tree
	 */
	enterDirectiveLocations?: (ctx: DirectiveLocationsContext) => void;
	/**
	 * Exit a parse tree produced by `GraphQLParser.directiveLocations`.
	 * @param ctx the parse tree
	 */
	exitDirectiveLocations?: (ctx: DirectiveLocationsContext) => void;

	/**
	 * Enter a parse tree produced by `GraphQLParser.directiveLocation`.
	 * @param ctx the parse tree
	 */
	enterDirectiveLocation?: (ctx: DirectiveLocationContext) => void;
	/**
	 * Exit a parse tree produced by `GraphQLParser.directiveLocation`.
	 * @param ctx the parse tree
	 */
	exitDirectiveLocation?: (ctx: DirectiveLocationContext) => void;

	/**
	 * Enter a parse tree produced by `GraphQLParser.executableDirectiveLocation`.
	 * @param ctx the parse tree
	 */
	enterExecutableDirectiveLocation?: (ctx: ExecutableDirectiveLocationContext) => void;
	/**
	 * Exit a parse tree produced by `GraphQLParser.executableDirectiveLocation`.
	 * @param ctx the parse tree
	 */
	exitExecutableDirectiveLocation?: (ctx: ExecutableDirectiveLocationContext) => void;

	/**
	 * Enter a parse tree produced by `GraphQLParser.typeSystemDirectiveLocation`.
	 * @param ctx the parse tree
	 */
	enterTypeSystemDirectiveLocation?: (ctx: TypeSystemDirectiveLocationContext) => void;
	/**
	 * Exit a parse tree produced by `GraphQLParser.typeSystemDirectiveLocation`.
	 * @param ctx the parse tree
	 */
	exitTypeSystemDirectiveLocation?: (ctx: TypeSystemDirectiveLocationContext) => void;

	/**
	 * Enter a parse tree produced by `GraphQLParser.typeSystemExtension`.
	 * @param ctx the parse tree
	 */
	enterTypeSystemExtension?: (ctx: TypeSystemExtensionContext) => void;
	/**
	 * Exit a parse tree produced by `GraphQLParser.typeSystemExtension`.
	 * @param ctx the parse tree
	 */
	exitTypeSystemExtension?: (ctx: TypeSystemExtensionContext) => void;

	/**
	 * Enter a parse tree produced by `GraphQLParser.schemaExtension`.
	 * @param ctx the parse tree
	 */
	enterSchemaExtension?: (ctx: SchemaExtensionContext) => void;
	/**
	 * Exit a parse tree produced by `GraphQLParser.schemaExtension`.
	 * @param ctx the parse tree
	 */
	exitSchemaExtension?: (ctx: SchemaExtensionContext) => void;

	/**
	 * Enter a parse tree produced by `GraphQLParser.typeExtension`.
	 * @param ctx the parse tree
	 */
	enterTypeExtension?: (ctx: TypeExtensionContext) => void;
	/**
	 * Exit a parse tree produced by `GraphQLParser.typeExtension`.
	 * @param ctx the parse tree
	 */
	exitTypeExtension?: (ctx: TypeExtensionContext) => void;

	/**
	 * Enter a parse tree produced by `GraphQLParser.execDefinition`.
	 * @param ctx the parse tree
	 */
	enterExecDefinition?: (ctx: ExecDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `GraphQLParser.execDefinition`.
	 * @param ctx the parse tree
	 */
	exitExecDefinition?: (ctx: ExecDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `GraphQLParser.operationDefinition`.
	 * @param ctx the parse tree
	 */
	enterOperationDefinition?: (ctx: OperationDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `GraphQLParser.operationDefinition`.
	 * @param ctx the parse tree
	 */
	exitOperationDefinition?: (ctx: OperationDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `GraphQLParser.selectionSet`.
	 * @param ctx the parse tree
	 */
	enterSelectionSet?: (ctx: SelectionSetContext) => void;
	/**
	 * Exit a parse tree produced by `GraphQLParser.selectionSet`.
	 * @param ctx the parse tree
	 */
	exitSelectionSet?: (ctx: SelectionSetContext) => void;

	/**
	 * Enter a parse tree produced by `GraphQLParser.operationType`.
	 * @param ctx the parse tree
	 */
	enterOperationType?: (ctx: OperationTypeContext) => void;
	/**
	 * Exit a parse tree produced by `GraphQLParser.operationType`.
	 * @param ctx the parse tree
	 */
	exitOperationType?: (ctx: OperationTypeContext) => void;

	/**
	 * Enter a parse tree produced by `GraphQLParser.selection`.
	 * @param ctx the parse tree
	 */
	enterSelection?: (ctx: SelectionContext) => void;
	/**
	 * Exit a parse tree produced by `GraphQLParser.selection`.
	 * @param ctx the parse tree
	 */
	exitSelection?: (ctx: SelectionContext) => void;

	/**
	 * Enter a parse tree produced by `GraphQLParser.field`.
	 * @param ctx the parse tree
	 */
	enterField?: (ctx: FieldContext) => void;
	/**
	 * Exit a parse tree produced by `GraphQLParser.field`.
	 * @param ctx the parse tree
	 */
	exitField?: (ctx: FieldContext) => void;

	/**
	 * Enter a parse tree produced by `GraphQLParser.fieldName`.
	 * @param ctx the parse tree
	 */
	enterFieldName?: (ctx: FieldNameContext) => void;
	/**
	 * Exit a parse tree produced by `GraphQLParser.fieldName`.
	 * @param ctx the parse tree
	 */
	exitFieldName?: (ctx: FieldNameContext) => void;

	/**
	 * Enter a parse tree produced by `GraphQLParser.alias`.
	 * @param ctx the parse tree
	 */
	enterAlias?: (ctx: AliasContext) => void;
	/**
	 * Exit a parse tree produced by `GraphQLParser.alias`.
	 * @param ctx the parse tree
	 */
	exitAlias?: (ctx: AliasContext) => void;

	/**
	 * Enter a parse tree produced by `GraphQLParser.arguments`.
	 * @param ctx the parse tree
	 */
	enterArguments?: (ctx: ArgumentsContext) => void;
	/**
	 * Exit a parse tree produced by `GraphQLParser.arguments`.
	 * @param ctx the parse tree
	 */
	exitArguments?: (ctx: ArgumentsContext) => void;

	/**
	 * Enter a parse tree produced by `GraphQLParser.argument`.
	 * @param ctx the parse tree
	 */
	enterArgument?: (ctx: ArgumentContext) => void;
	/**
	 * Exit a parse tree produced by `GraphQLParser.argument`.
	 * @param ctx the parse tree
	 */
	exitArgument?: (ctx: ArgumentContext) => void;

	/**
	 * Enter a parse tree produced by `GraphQLParser.fragmentSpread`.
	 * @param ctx the parse tree
	 */
	enterFragmentSpread?: (ctx: FragmentSpreadContext) => void;
	/**
	 * Exit a parse tree produced by `GraphQLParser.fragmentSpread`.
	 * @param ctx the parse tree
	 */
	exitFragmentSpread?: (ctx: FragmentSpreadContext) => void;

	/**
	 * Enter a parse tree produced by `GraphQLParser.inlineFragment`.
	 * @param ctx the parse tree
	 */
	enterInlineFragment?: (ctx: InlineFragmentContext) => void;
	/**
	 * Exit a parse tree produced by `GraphQLParser.inlineFragment`.
	 * @param ctx the parse tree
	 */
	exitInlineFragment?: (ctx: InlineFragmentContext) => void;

	/**
	 * Enter a parse tree produced by `GraphQLParser.fragmentDefinition`.
	 * @param ctx the parse tree
	 */
	enterFragmentDefinition?: (ctx: FragmentDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `GraphQLParser.fragmentDefinition`.
	 * @param ctx the parse tree
	 */
	exitFragmentDefinition?: (ctx: FragmentDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `GraphQLParser.fragmentName`.
	 * @param ctx the parse tree
	 */
	enterFragmentName?: (ctx: FragmentNameContext) => void;
	/**
	 * Exit a parse tree produced by `GraphQLParser.fragmentName`.
	 * @param ctx the parse tree
	 */
	exitFragmentName?: (ctx: FragmentNameContext) => void;

	/**
	 * Enter a parse tree produced by `GraphQLParser.directives`.
	 * @param ctx the parse tree
	 */
	enterDirectives?: (ctx: DirectivesContext) => void;
	/**
	 * Exit a parse tree produced by `GraphQLParser.directives`.
	 * @param ctx the parse tree
	 */
	exitDirectives?: (ctx: DirectivesContext) => void;

	/**
	 * Enter a parse tree produced by `GraphQLParser.directive`.
	 * @param ctx the parse tree
	 */
	enterDirective?: (ctx: DirectiveContext) => void;
	/**
	 * Exit a parse tree produced by `GraphQLParser.directive`.
	 * @param ctx the parse tree
	 */
	exitDirective?: (ctx: DirectiveContext) => void;

	/**
	 * Enter a parse tree produced by `GraphQLParser.typeCondition`.
	 * @param ctx the parse tree
	 */
	enterTypeCondition?: (ctx: TypeConditionContext) => void;
	/**
	 * Exit a parse tree produced by `GraphQLParser.typeCondition`.
	 * @param ctx the parse tree
	 */
	exitTypeCondition?: (ctx: TypeConditionContext) => void;

	/**
	 * Enter a parse tree produced by `GraphQLParser.variableDefinitions`.
	 * @param ctx the parse tree
	 */
	enterVariableDefinitions?: (ctx: VariableDefinitionsContext) => void;
	/**
	 * Exit a parse tree produced by `GraphQLParser.variableDefinitions`.
	 * @param ctx the parse tree
	 */
	exitVariableDefinitions?: (ctx: VariableDefinitionsContext) => void;

	/**
	 * Enter a parse tree produced by `GraphQLParser.variableDefinition`.
	 * @param ctx the parse tree
	 */
	enterVariableDefinition?: (ctx: VariableDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `GraphQLParser.variableDefinition`.
	 * @param ctx the parse tree
	 */
	exitVariableDefinition?: (ctx: VariableDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `GraphQLParser.variable`.
	 * @param ctx the parse tree
	 */
	enterVariable?: (ctx: VariableContext) => void;
	/**
	 * Exit a parse tree produced by `GraphQLParser.variable`.
	 * @param ctx the parse tree
	 */
	exitVariable?: (ctx: VariableContext) => void;

	/**
	 * Enter a parse tree produced by `GraphQLParser.defaultValue`.
	 * @param ctx the parse tree
	 */
	enterDefaultValue?: (ctx: DefaultValueContext) => void;
	/**
	 * Exit a parse tree produced by `GraphQLParser.defaultValue`.
	 * @param ctx the parse tree
	 */
	exitDefaultValue?: (ctx: DefaultValueContext) => void;

	/**
	 * Enter a parse tree produced by `GraphQLParser.valueOrVariable`.
	 * @param ctx the parse tree
	 */
	enterValueOrVariable?: (ctx: ValueOrVariableContext) => void;
	/**
	 * Exit a parse tree produced by `GraphQLParser.valueOrVariable`.
	 * @param ctx the parse tree
	 */
	exitValueOrVariable?: (ctx: ValueOrVariableContext) => void;

	/**
	 * Enter a parse tree produced by `GraphQLParser.value`.
	 * @param ctx the parse tree
	 */
	enterValue?: (ctx: ValueContext) => void;
	/**
	 * Exit a parse tree produced by `GraphQLParser.value`.
	 * @param ctx the parse tree
	 */
	exitValue?: (ctx: ValueContext) => void;

	/**
	 * Enter a parse tree produced by `GraphQLParser.type_`.
	 * @param ctx the parse tree
	 */
	enterType_?: (ctx: Type_Context) => void;
	/**
	 * Exit a parse tree produced by `GraphQLParser.type_`.
	 * @param ctx the parse tree
	 */
	exitType_?: (ctx: Type_Context) => void;

	/**
	 * Enter a parse tree produced by `GraphQLParser.typeName`.
	 * @param ctx the parse tree
	 */
	enterTypeName?: (ctx: TypeNameContext) => void;
	/**
	 * Exit a parse tree produced by `GraphQLParser.typeName`.
	 * @param ctx the parse tree
	 */
	exitTypeName?: (ctx: TypeNameContext) => void;

	/**
	 * Enter a parse tree produced by `GraphQLParser.listType`.
	 * @param ctx the parse tree
	 */
	enterListType?: (ctx: ListTypeContext) => void;
	/**
	 * Exit a parse tree produced by `GraphQLParser.listType`.
	 * @param ctx the parse tree
	 */
	exitListType?: (ctx: ListTypeContext) => void;

	/**
	 * Enter a parse tree produced by `GraphQLParser.nonNullType`.
	 * @param ctx the parse tree
	 */
	enterNonNullType?: (ctx: NonNullTypeContext) => void;
	/**
	 * Exit a parse tree produced by `GraphQLParser.nonNullType`.
	 * @param ctx the parse tree
	 */
	exitNonNullType?: (ctx: NonNullTypeContext) => void;

	/**
	 * Enter a parse tree produced by `GraphQLParser.array`.
	 * @param ctx the parse tree
	 */
	enterArray?: (ctx: ArrayContext) => void;
	/**
	 * Exit a parse tree produced by `GraphQLParser.array`.
	 * @param ctx the parse tree
	 */
	exitArray?: (ctx: ArrayContext) => void;
}

