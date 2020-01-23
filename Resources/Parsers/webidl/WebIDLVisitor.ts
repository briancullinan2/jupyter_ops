// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/webidl/WebIDL.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { WebIDLContext } from "./WebIDLParser";
import { DefinitionsContext } from "./WebIDLParser";
import { DefinitionContext } from "./WebIDLParser";
import { CallbackOrInterfaceContext } from "./WebIDLParser";
import { CallbackRestOrInterfaceContext } from "./WebIDLParser";
import { Interface_Context } from "./WebIDLParser";
import { Class_Context } from "./WebIDLParser";
import { PartialContext } from "./WebIDLParser";
import { PartialDefinitionContext } from "./WebIDLParser";
import { PartialInterfaceContext } from "./WebIDLParser";
import { InterfaceMembersContext } from "./WebIDLParser";
import { InterfaceMemberContext } from "./WebIDLParser";
import { DictionaryContext } from "./WebIDLParser";
import { DictionaryMembersContext } from "./WebIDLParser";
import { DictionaryMemberContext } from "./WebIDLParser";
import { RequiredContext } from "./WebIDLParser";
import { PartialDictionaryContext } from "./WebIDLParser";
import { Default_Context } from "./WebIDLParser";
import { DefaultValueContext } from "./WebIDLParser";
import { InheritanceContext } from "./WebIDLParser";
import { ExtensionContext } from "./WebIDLParser";
import { Enum_Context } from "./WebIDLParser";
import { EnumValueListContext } from "./WebIDLParser";
import { EnumValueListCommaContext } from "./WebIDLParser";
import { EnumValueListStringContext } from "./WebIDLParser";
import { CallbackRestContext } from "./WebIDLParser";
import { TypedefContext } from "./WebIDLParser";
import { ImplementsStatementContext } from "./WebIDLParser";
import { Const_Context } from "./WebIDLParser";
import { ConstValueContext } from "./WebIDLParser";
import { BooleanLiteralContext } from "./WebIDLParser";
import { FloatLiteralContext } from "./WebIDLParser";
import { SerializerContext } from "./WebIDLParser";
import { SerializerRestContext } from "./WebIDLParser";
import { SerializationPatternContext } from "./WebIDLParser";
import { SerializationPatternMapContext } from "./WebIDLParser";
import { SerializationPatternListContext } from "./WebIDLParser";
import { StringifierContext } from "./WebIDLParser";
import { StringifierRestContext } from "./WebIDLParser";
import { StaticMemberContext } from "./WebIDLParser";
import { StaticMemberRestContext } from "./WebIDLParser";
import { ReadonlyMemberContext } from "./WebIDLParser";
import { ReadonlyMemberRestContext } from "./WebIDLParser";
import { ReadWriteAttributeContext } from "./WebIDLParser";
import { AttributeRestContext } from "./WebIDLParser";
import { AttributeNameContext } from "./WebIDLParser";
import { AttributeNameKeywordContext } from "./WebIDLParser";
import { InheritContext } from "./WebIDLParser";
import { ReadOnlyContext } from "./WebIDLParser";
import { OperationContext } from "./WebIDLParser";
import { SpecialOperationContext } from "./WebIDLParser";
import { SpecialsContext } from "./WebIDLParser";
import { SpecialContext } from "./WebIDLParser";
import { OperationRestContext } from "./WebIDLParser";
import { OptionalIdentifierContext } from "./WebIDLParser";
import { ArgumentListContext } from "./WebIDLParser";
import { ArgumentsContext } from "./WebIDLParser";
import { ArgumentContext } from "./WebIDLParser";
import { OptionalOrRequiredArgumentContext } from "./WebIDLParser";
import { ArgumentNameContext } from "./WebIDLParser";
import { EllipsisContext } from "./WebIDLParser";
import { IterableContext } from "./WebIDLParser";
import { OptionalTypeContext } from "./WebIDLParser";
import { ReadWriteMaplikeContext } from "./WebIDLParser";
import { ReadWriteSetlikeContext } from "./WebIDLParser";
import { MaplikeRestContext } from "./WebIDLParser";
import { SetlikeRestContext } from "./WebIDLParser";
import { ExtendedAttributeListContext } from "./WebIDLParser";
import { ExtendedAttributesContext } from "./WebIDLParser";
import { ExtendedAttributeContext } from "./WebIDLParser";
import { ExtendedAttributeRestContext } from "./WebIDLParser";
import { ExtendedAttributeInnerContext } from "./WebIDLParser";
import { OtherContext } from "./WebIDLParser";
import { ArgumentNameKeywordContext } from "./WebIDLParser";
import { OtherOrCommaContext } from "./WebIDLParser";
import { TypeContext } from "./WebIDLParser";
import { SingleTypeContext } from "./WebIDLParser";
import { UnionTypeContext } from "./WebIDLParser";
import { UnionMemberTypeContext } from "./WebIDLParser";
import { UnionMemberTypesContext } from "./WebIDLParser";
import { NonAnyTypeContext } from "./WebIDLParser";
import { BufferRelatedTypeContext } from "./WebIDLParser";
import { ConstTypeContext } from "./WebIDLParser";
import { PrimitiveTypeContext } from "./WebIDLParser";
import { UnrestrictedFloatTypeContext } from "./WebIDLParser";
import { FloatTypeContext } from "./WebIDLParser";
import { UnsignedIntegerTypeContext } from "./WebIDLParser";
import { IntegerTypeContext } from "./WebIDLParser";
import { OptionalLongContext } from "./WebIDLParser";
import { PromiseTypeContext } from "./WebIDLParser";
import { Null_Context } from "./WebIDLParser";
import { ReturnTypeContext } from "./WebIDLParser";
import { IdentifierListContext } from "./WebIDLParser";
import { IdentifiersContext } from "./WebIDLParser";
import { ExtendedAttributeNoArgsContext } from "./WebIDLParser";
import { ExtendedAttributeArgListContext } from "./WebIDLParser";
import { ExtendedAttributeIdentContext } from "./WebIDLParser";
import { ExtendedAttributeIdentListContext } from "./WebIDLParser";
import { ExtendedAttributeNamedArgListContext } from "./WebIDLParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `WebIDLParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface WebIDLVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `WebIDLParser.webIDL`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWebIDL?: (ctx: WebIDLContext) => Result;

	/**
	 * Visit a parse tree produced by `WebIDLParser.definitions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefinitions?: (ctx: DefinitionsContext) => Result;

	/**
	 * Visit a parse tree produced by `WebIDLParser.definition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefinition?: (ctx: DefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `WebIDLParser.callbackOrInterface`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCallbackOrInterface?: (ctx: CallbackOrInterfaceContext) => Result;

	/**
	 * Visit a parse tree produced by `WebIDLParser.callbackRestOrInterface`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCallbackRestOrInterface?: (ctx: CallbackRestOrInterfaceContext) => Result;

	/**
	 * Visit a parse tree produced by `WebIDLParser.interface_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterface_?: (ctx: Interface_Context) => Result;

	/**
	 * Visit a parse tree produced by `WebIDLParser.class_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClass_?: (ctx: Class_Context) => Result;

	/**
	 * Visit a parse tree produced by `WebIDLParser.partial`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartial?: (ctx: PartialContext) => Result;

	/**
	 * Visit a parse tree produced by `WebIDLParser.partialDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartialDefinition?: (ctx: PartialDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `WebIDLParser.partialInterface`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartialInterface?: (ctx: PartialInterfaceContext) => Result;

	/**
	 * Visit a parse tree produced by `WebIDLParser.interfaceMembers`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterfaceMembers?: (ctx: InterfaceMembersContext) => Result;

	/**
	 * Visit a parse tree produced by `WebIDLParser.interfaceMember`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterfaceMember?: (ctx: InterfaceMemberContext) => Result;

	/**
	 * Visit a parse tree produced by `WebIDLParser.dictionary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDictionary?: (ctx: DictionaryContext) => Result;

	/**
	 * Visit a parse tree produced by `WebIDLParser.dictionaryMembers`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDictionaryMembers?: (ctx: DictionaryMembersContext) => Result;

	/**
	 * Visit a parse tree produced by `WebIDLParser.dictionaryMember`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDictionaryMember?: (ctx: DictionaryMemberContext) => Result;

	/**
	 * Visit a parse tree produced by `WebIDLParser.required`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRequired?: (ctx: RequiredContext) => Result;

	/**
	 * Visit a parse tree produced by `WebIDLParser.partialDictionary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartialDictionary?: (ctx: PartialDictionaryContext) => Result;

	/**
	 * Visit a parse tree produced by `WebIDLParser.default_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefault_?: (ctx: Default_Context) => Result;

	/**
	 * Visit a parse tree produced by `WebIDLParser.defaultValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefaultValue?: (ctx: DefaultValueContext) => Result;

	/**
	 * Visit a parse tree produced by `WebIDLParser.inheritance`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInheritance?: (ctx: InheritanceContext) => Result;

	/**
	 * Visit a parse tree produced by `WebIDLParser.extension`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExtension?: (ctx: ExtensionContext) => Result;

	/**
	 * Visit a parse tree produced by `WebIDLParser.enum_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnum_?: (ctx: Enum_Context) => Result;

	/**
	 * Visit a parse tree produced by `WebIDLParser.enumValueList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumValueList?: (ctx: EnumValueListContext) => Result;

	/**
	 * Visit a parse tree produced by `WebIDLParser.enumValueListComma`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumValueListComma?: (ctx: EnumValueListCommaContext) => Result;

	/**
	 * Visit a parse tree produced by `WebIDLParser.enumValueListString`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumValueListString?: (ctx: EnumValueListStringContext) => Result;

	/**
	 * Visit a parse tree produced by `WebIDLParser.callbackRest`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCallbackRest?: (ctx: CallbackRestContext) => Result;

	/**
	 * Visit a parse tree produced by `WebIDLParser.typedef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypedef?: (ctx: TypedefContext) => Result;

	/**
	 * Visit a parse tree produced by `WebIDLParser.implementsStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImplementsStatement?: (ctx: ImplementsStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `WebIDLParser.const_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConst_?: (ctx: Const_Context) => Result;

	/**
	 * Visit a parse tree produced by `WebIDLParser.constValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstValue?: (ctx: ConstValueContext) => Result;

	/**
	 * Visit a parse tree produced by `WebIDLParser.booleanLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanLiteral?: (ctx: BooleanLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `WebIDLParser.floatLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFloatLiteral?: (ctx: FloatLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `WebIDLParser.serializer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSerializer?: (ctx: SerializerContext) => Result;

	/**
	 * Visit a parse tree produced by `WebIDLParser.serializerRest`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSerializerRest?: (ctx: SerializerRestContext) => Result;

	/**
	 * Visit a parse tree produced by `WebIDLParser.serializationPattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSerializationPattern?: (ctx: SerializationPatternContext) => Result;

	/**
	 * Visit a parse tree produced by `WebIDLParser.serializationPatternMap`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSerializationPatternMap?: (ctx: SerializationPatternMapContext) => Result;

	/**
	 * Visit a parse tree produced by `WebIDLParser.serializationPatternList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSerializationPatternList?: (ctx: SerializationPatternListContext) => Result;

	/**
	 * Visit a parse tree produced by `WebIDLParser.stringifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringifier?: (ctx: StringifierContext) => Result;

	/**
	 * Visit a parse tree produced by `WebIDLParser.stringifierRest`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringifierRest?: (ctx: StringifierRestContext) => Result;

	/**
	 * Visit a parse tree produced by `WebIDLParser.staticMember`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStaticMember?: (ctx: StaticMemberContext) => Result;

	/**
	 * Visit a parse tree produced by `WebIDLParser.staticMemberRest`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStaticMemberRest?: (ctx: StaticMemberRestContext) => Result;

	/**
	 * Visit a parse tree produced by `WebIDLParser.readonlyMember`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReadonlyMember?: (ctx: ReadonlyMemberContext) => Result;

	/**
	 * Visit a parse tree produced by `WebIDLParser.readonlyMemberRest`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReadonlyMemberRest?: (ctx: ReadonlyMemberRestContext) => Result;

	/**
	 * Visit a parse tree produced by `WebIDLParser.readWriteAttribute`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReadWriteAttribute?: (ctx: ReadWriteAttributeContext) => Result;

	/**
	 * Visit a parse tree produced by `WebIDLParser.attributeRest`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttributeRest?: (ctx: AttributeRestContext) => Result;

	/**
	 * Visit a parse tree produced by `WebIDLParser.attributeName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttributeName?: (ctx: AttributeNameContext) => Result;

	/**
	 * Visit a parse tree produced by `WebIDLParser.attributeNameKeyword`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttributeNameKeyword?: (ctx: AttributeNameKeywordContext) => Result;

	/**
	 * Visit a parse tree produced by `WebIDLParser.inherit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInherit?: (ctx: InheritContext) => Result;

	/**
	 * Visit a parse tree produced by `WebIDLParser.readOnly`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReadOnly?: (ctx: ReadOnlyContext) => Result;

	/**
	 * Visit a parse tree produced by `WebIDLParser.operation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOperation?: (ctx: OperationContext) => Result;

	/**
	 * Visit a parse tree produced by `WebIDLParser.specialOperation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSpecialOperation?: (ctx: SpecialOperationContext) => Result;

	/**
	 * Visit a parse tree produced by `WebIDLParser.specials`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSpecials?: (ctx: SpecialsContext) => Result;

	/**
	 * Visit a parse tree produced by `WebIDLParser.special`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSpecial?: (ctx: SpecialContext) => Result;

	/**
	 * Visit a parse tree produced by `WebIDLParser.operationRest`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOperationRest?: (ctx: OperationRestContext) => Result;

	/**
	 * Visit a parse tree produced by `WebIDLParser.optionalIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOptionalIdentifier?: (ctx: OptionalIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `WebIDLParser.argumentList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgumentList?: (ctx: ArgumentListContext) => Result;

	/**
	 * Visit a parse tree produced by `WebIDLParser.arguments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArguments?: (ctx: ArgumentsContext) => Result;

	/**
	 * Visit a parse tree produced by `WebIDLParser.argument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgument?: (ctx: ArgumentContext) => Result;

	/**
	 * Visit a parse tree produced by `WebIDLParser.optionalOrRequiredArgument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOptionalOrRequiredArgument?: (ctx: OptionalOrRequiredArgumentContext) => Result;

	/**
	 * Visit a parse tree produced by `WebIDLParser.argumentName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgumentName?: (ctx: ArgumentNameContext) => Result;

	/**
	 * Visit a parse tree produced by `WebIDLParser.ellipsis`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEllipsis?: (ctx: EllipsisContext) => Result;

	/**
	 * Visit a parse tree produced by `WebIDLParser.iterable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIterable?: (ctx: IterableContext) => Result;

	/**
	 * Visit a parse tree produced by `WebIDLParser.optionalType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOptionalType?: (ctx: OptionalTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `WebIDLParser.readWriteMaplike`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReadWriteMaplike?: (ctx: ReadWriteMaplikeContext) => Result;

	/**
	 * Visit a parse tree produced by `WebIDLParser.readWriteSetlike`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReadWriteSetlike?: (ctx: ReadWriteSetlikeContext) => Result;

	/**
	 * Visit a parse tree produced by `WebIDLParser.maplikeRest`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMaplikeRest?: (ctx: MaplikeRestContext) => Result;

	/**
	 * Visit a parse tree produced by `WebIDLParser.setlikeRest`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetlikeRest?: (ctx: SetlikeRestContext) => Result;

	/**
	 * Visit a parse tree produced by `WebIDLParser.extendedAttributeList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExtendedAttributeList?: (ctx: ExtendedAttributeListContext) => Result;

	/**
	 * Visit a parse tree produced by `WebIDLParser.extendedAttributes`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExtendedAttributes?: (ctx: ExtendedAttributesContext) => Result;

	/**
	 * Visit a parse tree produced by `WebIDLParser.extendedAttribute`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExtendedAttribute?: (ctx: ExtendedAttributeContext) => Result;

	/**
	 * Visit a parse tree produced by `WebIDLParser.extendedAttributeRest`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExtendedAttributeRest?: (ctx: ExtendedAttributeRestContext) => Result;

	/**
	 * Visit a parse tree produced by `WebIDLParser.extendedAttributeInner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExtendedAttributeInner?: (ctx: ExtendedAttributeInnerContext) => Result;

	/**
	 * Visit a parse tree produced by `WebIDLParser.other`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOther?: (ctx: OtherContext) => Result;

	/**
	 * Visit a parse tree produced by `WebIDLParser.argumentNameKeyword`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgumentNameKeyword?: (ctx: ArgumentNameKeywordContext) => Result;

	/**
	 * Visit a parse tree produced by `WebIDLParser.otherOrComma`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOtherOrComma?: (ctx: OtherOrCommaContext) => Result;

	/**
	 * Visit a parse tree produced by `WebIDLParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType?: (ctx: TypeContext) => Result;

	/**
	 * Visit a parse tree produced by `WebIDLParser.singleType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSingleType?: (ctx: SingleTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `WebIDLParser.unionType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnionType?: (ctx: UnionTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `WebIDLParser.unionMemberType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnionMemberType?: (ctx: UnionMemberTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `WebIDLParser.unionMemberTypes`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnionMemberTypes?: (ctx: UnionMemberTypesContext) => Result;

	/**
	 * Visit a parse tree produced by `WebIDLParser.nonAnyType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNonAnyType?: (ctx: NonAnyTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `WebIDLParser.bufferRelatedType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBufferRelatedType?: (ctx: BufferRelatedTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `WebIDLParser.constType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstType?: (ctx: ConstTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `WebIDLParser.primitiveType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimitiveType?: (ctx: PrimitiveTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `WebIDLParser.unrestrictedFloatType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnrestrictedFloatType?: (ctx: UnrestrictedFloatTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `WebIDLParser.floatType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFloatType?: (ctx: FloatTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `WebIDLParser.unsignedIntegerType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnsignedIntegerType?: (ctx: UnsignedIntegerTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `WebIDLParser.integerType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntegerType?: (ctx: IntegerTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `WebIDLParser.optionalLong`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOptionalLong?: (ctx: OptionalLongContext) => Result;

	/**
	 * Visit a parse tree produced by `WebIDLParser.promiseType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPromiseType?: (ctx: PromiseTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `WebIDLParser.null_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNull_?: (ctx: Null_Context) => Result;

	/**
	 * Visit a parse tree produced by `WebIDLParser.returnType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturnType?: (ctx: ReturnTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `WebIDLParser.identifierList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifierList?: (ctx: IdentifierListContext) => Result;

	/**
	 * Visit a parse tree produced by `WebIDLParser.identifiers`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifiers?: (ctx: IdentifiersContext) => Result;

	/**
	 * Visit a parse tree produced by `WebIDLParser.extendedAttributeNoArgs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExtendedAttributeNoArgs?: (ctx: ExtendedAttributeNoArgsContext) => Result;

	/**
	 * Visit a parse tree produced by `WebIDLParser.extendedAttributeArgList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExtendedAttributeArgList?: (ctx: ExtendedAttributeArgListContext) => Result;

	/**
	 * Visit a parse tree produced by `WebIDLParser.extendedAttributeIdent`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExtendedAttributeIdent?: (ctx: ExtendedAttributeIdentContext) => Result;

	/**
	 * Visit a parse tree produced by `WebIDLParser.extendedAttributeIdentList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExtendedAttributeIdentList?: (ctx: ExtendedAttributeIdentListContext) => Result;

	/**
	 * Visit a parse tree produced by `WebIDLParser.extendedAttributeNamedArgList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExtendedAttributeNamedArgList?: (ctx: ExtendedAttributeNamedArgListContext) => Result;
}

