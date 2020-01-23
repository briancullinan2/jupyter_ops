// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/graphql/GraphQL.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `GraphQLParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface GraphQLVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `stringValue`
	 * labeled alternative in `GraphQLParser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringValue?: (ctx: StringValueContext) => Result;

	/**
	 * Visit a parse tree produced by the `numberValue`
	 * labeled alternative in `GraphQLParser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumberValue?: (ctx: NumberValueContext) => Result;

	/**
	 * Visit a parse tree produced by the `booleanValue`
	 * labeled alternative in `GraphQLParser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanValue?: (ctx: BooleanValueContext) => Result;

	/**
	 * Visit a parse tree produced by the `arrayValue`
	 * labeled alternative in `GraphQLParser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayValue?: (ctx: ArrayValueContext) => Result;

	/**
	 * Visit a parse tree produced by the `idValue`
	 * labeled alternative in `GraphQLParser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdValue?: (ctx: IdValueContext) => Result;

	/**
	 * Visit a parse tree produced by the `nullValue`
	 * labeled alternative in `GraphQLParser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNullValue?: (ctx: NullValueContext) => Result;

	/**
	 * Visit a parse tree produced by `GraphQLParser.document`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDocument?: (ctx: DocumentContext) => Result;

	/**
	 * Visit a parse tree produced by `GraphQLParser.definition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefinition?: (ctx: DefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `GraphQLParser.typeSystemDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeSystemDefinition?: (ctx: TypeSystemDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `GraphQLParser.schemaDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchemaDefinition?: (ctx: SchemaDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `GraphQLParser.rootOperationTypeDefinitionList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRootOperationTypeDefinitionList?: (ctx: RootOperationTypeDefinitionListContext) => Result;

	/**
	 * Visit a parse tree produced by `GraphQLParser.rootOperationTypeDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRootOperationTypeDefinition?: (ctx: RootOperationTypeDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `GraphQLParser.namedType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamedType?: (ctx: NamedTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `GraphQLParser.typeDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeDefinition?: (ctx: TypeDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `GraphQLParser.scalarTypeDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScalarTypeDefinition?: (ctx: ScalarTypeDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `GraphQLParser.description`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDescription?: (ctx: DescriptionContext) => Result;

	/**
	 * Visit a parse tree produced by `GraphQLParser.objectTypeDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObjectTypeDefinition?: (ctx: ObjectTypeDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `GraphQLParser.implementsInterfaces`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImplementsInterfaces?: (ctx: ImplementsInterfacesContext) => Result;

	/**
	 * Visit a parse tree produced by `GraphQLParser.fieldsDefinitions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldsDefinitions?: (ctx: FieldsDefinitionsContext) => Result;

	/**
	 * Visit a parse tree produced by `GraphQLParser.fieldsDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldsDefinition?: (ctx: FieldsDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `GraphQLParser.argumentsDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgumentsDefinition?: (ctx: ArgumentsDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `GraphQLParser.inputValueDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInputValueDefinition?: (ctx: InputValueDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `GraphQLParser.interfaceTypeDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterfaceTypeDefinition?: (ctx: InterfaceTypeDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `GraphQLParser.unionTypeDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnionTypeDefinition?: (ctx: UnionTypeDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `GraphQLParser.unionMemberTypes`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnionMemberTypes?: (ctx: UnionMemberTypesContext) => Result;

	/**
	 * Visit a parse tree produced by `GraphQLParser.unionTypeExtension`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnionTypeExtension?: (ctx: UnionTypeExtensionContext) => Result;

	/**
	 * Visit a parse tree produced by `GraphQLParser.enumTypeDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumTypeDefinition?: (ctx: EnumTypeDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `GraphQLParser.enumValuesDefinitions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumValuesDefinitions?: (ctx: EnumValuesDefinitionsContext) => Result;

	/**
	 * Visit a parse tree produced by `GraphQLParser.enumValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumValue?: (ctx: EnumValueContext) => Result;

	/**
	 * Visit a parse tree produced by `GraphQLParser.enumTypeExtension`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumTypeExtension?: (ctx: EnumTypeExtensionContext) => Result;

	/**
	 * Visit a parse tree produced by `GraphQLParser.inputObjectTypeDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInputObjectTypeDefinition?: (ctx: InputObjectTypeDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `GraphQLParser.inputFieldsDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInputFieldsDefinition?: (ctx: InputFieldsDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `GraphQLParser.directiveDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDirectiveDefinition?: (ctx: DirectiveDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `GraphQLParser.directiveLocations`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDirectiveLocations?: (ctx: DirectiveLocationsContext) => Result;

	/**
	 * Visit a parse tree produced by `GraphQLParser.directiveLocation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDirectiveLocation?: (ctx: DirectiveLocationContext) => Result;

	/**
	 * Visit a parse tree produced by `GraphQLParser.executableDirectiveLocation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExecutableDirectiveLocation?: (ctx: ExecutableDirectiveLocationContext) => Result;

	/**
	 * Visit a parse tree produced by `GraphQLParser.typeSystemDirectiveLocation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeSystemDirectiveLocation?: (ctx: TypeSystemDirectiveLocationContext) => Result;

	/**
	 * Visit a parse tree produced by `GraphQLParser.typeSystemExtension`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeSystemExtension?: (ctx: TypeSystemExtensionContext) => Result;

	/**
	 * Visit a parse tree produced by `GraphQLParser.schemaExtension`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchemaExtension?: (ctx: SchemaExtensionContext) => Result;

	/**
	 * Visit a parse tree produced by `GraphQLParser.typeExtension`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeExtension?: (ctx: TypeExtensionContext) => Result;

	/**
	 * Visit a parse tree produced by `GraphQLParser.execDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExecDefinition?: (ctx: ExecDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `GraphQLParser.operationDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOperationDefinition?: (ctx: OperationDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `GraphQLParser.selectionSet`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectionSet?: (ctx: SelectionSetContext) => Result;

	/**
	 * Visit a parse tree produced by `GraphQLParser.operationType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOperationType?: (ctx: OperationTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `GraphQLParser.selection`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelection?: (ctx: SelectionContext) => Result;

	/**
	 * Visit a parse tree produced by `GraphQLParser.field`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitField?: (ctx: FieldContext) => Result;

	/**
	 * Visit a parse tree produced by `GraphQLParser.fieldName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldName?: (ctx: FieldNameContext) => Result;

	/**
	 * Visit a parse tree produced by `GraphQLParser.alias`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlias?: (ctx: AliasContext) => Result;

	/**
	 * Visit a parse tree produced by `GraphQLParser.arguments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArguments?: (ctx: ArgumentsContext) => Result;

	/**
	 * Visit a parse tree produced by `GraphQLParser.argument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgument?: (ctx: ArgumentContext) => Result;

	/**
	 * Visit a parse tree produced by `GraphQLParser.fragmentSpread`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFragmentSpread?: (ctx: FragmentSpreadContext) => Result;

	/**
	 * Visit a parse tree produced by `GraphQLParser.inlineFragment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInlineFragment?: (ctx: InlineFragmentContext) => Result;

	/**
	 * Visit a parse tree produced by `GraphQLParser.fragmentDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFragmentDefinition?: (ctx: FragmentDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `GraphQLParser.fragmentName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFragmentName?: (ctx: FragmentNameContext) => Result;

	/**
	 * Visit a parse tree produced by `GraphQLParser.directives`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDirectives?: (ctx: DirectivesContext) => Result;

	/**
	 * Visit a parse tree produced by `GraphQLParser.directive`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDirective?: (ctx: DirectiveContext) => Result;

	/**
	 * Visit a parse tree produced by `GraphQLParser.typeCondition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeCondition?: (ctx: TypeConditionContext) => Result;

	/**
	 * Visit a parse tree produced by `GraphQLParser.variableDefinitions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDefinitions?: (ctx: VariableDefinitionsContext) => Result;

	/**
	 * Visit a parse tree produced by `GraphQLParser.variableDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDefinition?: (ctx: VariableDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `GraphQLParser.variable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariable?: (ctx: VariableContext) => Result;

	/**
	 * Visit a parse tree produced by `GraphQLParser.defaultValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefaultValue?: (ctx: DefaultValueContext) => Result;

	/**
	 * Visit a parse tree produced by `GraphQLParser.valueOrVariable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValueOrVariable?: (ctx: ValueOrVariableContext) => Result;

	/**
	 * Visit a parse tree produced by `GraphQLParser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValue?: (ctx: ValueContext) => Result;

	/**
	 * Visit a parse tree produced by `GraphQLParser.type_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType_?: (ctx: Type_Context) => Result;

	/**
	 * Visit a parse tree produced by `GraphQLParser.typeName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeName?: (ctx: TypeNameContext) => Result;

	/**
	 * Visit a parse tree produced by `GraphQLParser.listType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitListType?: (ctx: ListTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `GraphQLParser.nonNullType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNonNullType?: (ctx: NonNullTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `GraphQLParser.array`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArray?: (ctx: ArrayContext) => Result;
}

