// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/webidl/WebIDL.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `WebIDLParser`.
 */
export interface WebIDLListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `WebIDLParser.webIDL`.
	 * @param ctx the parse tree
	 */
	enterWebIDL?: (ctx: WebIDLContext) => void;
	/**
	 * Exit a parse tree produced by `WebIDLParser.webIDL`.
	 * @param ctx the parse tree
	 */
	exitWebIDL?: (ctx: WebIDLContext) => void;

	/**
	 * Enter a parse tree produced by `WebIDLParser.definitions`.
	 * @param ctx the parse tree
	 */
	enterDefinitions?: (ctx: DefinitionsContext) => void;
	/**
	 * Exit a parse tree produced by `WebIDLParser.definitions`.
	 * @param ctx the parse tree
	 */
	exitDefinitions?: (ctx: DefinitionsContext) => void;

	/**
	 * Enter a parse tree produced by `WebIDLParser.definition`.
	 * @param ctx the parse tree
	 */
	enterDefinition?: (ctx: DefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `WebIDLParser.definition`.
	 * @param ctx the parse tree
	 */
	exitDefinition?: (ctx: DefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `WebIDLParser.callbackOrInterface`.
	 * @param ctx the parse tree
	 */
	enterCallbackOrInterface?: (ctx: CallbackOrInterfaceContext) => void;
	/**
	 * Exit a parse tree produced by `WebIDLParser.callbackOrInterface`.
	 * @param ctx the parse tree
	 */
	exitCallbackOrInterface?: (ctx: CallbackOrInterfaceContext) => void;

	/**
	 * Enter a parse tree produced by `WebIDLParser.callbackRestOrInterface`.
	 * @param ctx the parse tree
	 */
	enterCallbackRestOrInterface?: (ctx: CallbackRestOrInterfaceContext) => void;
	/**
	 * Exit a parse tree produced by `WebIDLParser.callbackRestOrInterface`.
	 * @param ctx the parse tree
	 */
	exitCallbackRestOrInterface?: (ctx: CallbackRestOrInterfaceContext) => void;

	/**
	 * Enter a parse tree produced by `WebIDLParser.interface_`.
	 * @param ctx the parse tree
	 */
	enterInterface_?: (ctx: Interface_Context) => void;
	/**
	 * Exit a parse tree produced by `WebIDLParser.interface_`.
	 * @param ctx the parse tree
	 */
	exitInterface_?: (ctx: Interface_Context) => void;

	/**
	 * Enter a parse tree produced by `WebIDLParser.class_`.
	 * @param ctx the parse tree
	 */
	enterClass_?: (ctx: Class_Context) => void;
	/**
	 * Exit a parse tree produced by `WebIDLParser.class_`.
	 * @param ctx the parse tree
	 */
	exitClass_?: (ctx: Class_Context) => void;

	/**
	 * Enter a parse tree produced by `WebIDLParser.partial`.
	 * @param ctx the parse tree
	 */
	enterPartial?: (ctx: PartialContext) => void;
	/**
	 * Exit a parse tree produced by `WebIDLParser.partial`.
	 * @param ctx the parse tree
	 */
	exitPartial?: (ctx: PartialContext) => void;

	/**
	 * Enter a parse tree produced by `WebIDLParser.partialDefinition`.
	 * @param ctx the parse tree
	 */
	enterPartialDefinition?: (ctx: PartialDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `WebIDLParser.partialDefinition`.
	 * @param ctx the parse tree
	 */
	exitPartialDefinition?: (ctx: PartialDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `WebIDLParser.partialInterface`.
	 * @param ctx the parse tree
	 */
	enterPartialInterface?: (ctx: PartialInterfaceContext) => void;
	/**
	 * Exit a parse tree produced by `WebIDLParser.partialInterface`.
	 * @param ctx the parse tree
	 */
	exitPartialInterface?: (ctx: PartialInterfaceContext) => void;

	/**
	 * Enter a parse tree produced by `WebIDLParser.interfaceMembers`.
	 * @param ctx the parse tree
	 */
	enterInterfaceMembers?: (ctx: InterfaceMembersContext) => void;
	/**
	 * Exit a parse tree produced by `WebIDLParser.interfaceMembers`.
	 * @param ctx the parse tree
	 */
	exitInterfaceMembers?: (ctx: InterfaceMembersContext) => void;

	/**
	 * Enter a parse tree produced by `WebIDLParser.interfaceMember`.
	 * @param ctx the parse tree
	 */
	enterInterfaceMember?: (ctx: InterfaceMemberContext) => void;
	/**
	 * Exit a parse tree produced by `WebIDLParser.interfaceMember`.
	 * @param ctx the parse tree
	 */
	exitInterfaceMember?: (ctx: InterfaceMemberContext) => void;

	/**
	 * Enter a parse tree produced by `WebIDLParser.dictionary`.
	 * @param ctx the parse tree
	 */
	enterDictionary?: (ctx: DictionaryContext) => void;
	/**
	 * Exit a parse tree produced by `WebIDLParser.dictionary`.
	 * @param ctx the parse tree
	 */
	exitDictionary?: (ctx: DictionaryContext) => void;

	/**
	 * Enter a parse tree produced by `WebIDLParser.dictionaryMembers`.
	 * @param ctx the parse tree
	 */
	enterDictionaryMembers?: (ctx: DictionaryMembersContext) => void;
	/**
	 * Exit a parse tree produced by `WebIDLParser.dictionaryMembers`.
	 * @param ctx the parse tree
	 */
	exitDictionaryMembers?: (ctx: DictionaryMembersContext) => void;

	/**
	 * Enter a parse tree produced by `WebIDLParser.dictionaryMember`.
	 * @param ctx the parse tree
	 */
	enterDictionaryMember?: (ctx: DictionaryMemberContext) => void;
	/**
	 * Exit a parse tree produced by `WebIDLParser.dictionaryMember`.
	 * @param ctx the parse tree
	 */
	exitDictionaryMember?: (ctx: DictionaryMemberContext) => void;

	/**
	 * Enter a parse tree produced by `WebIDLParser.required`.
	 * @param ctx the parse tree
	 */
	enterRequired?: (ctx: RequiredContext) => void;
	/**
	 * Exit a parse tree produced by `WebIDLParser.required`.
	 * @param ctx the parse tree
	 */
	exitRequired?: (ctx: RequiredContext) => void;

	/**
	 * Enter a parse tree produced by `WebIDLParser.partialDictionary`.
	 * @param ctx the parse tree
	 */
	enterPartialDictionary?: (ctx: PartialDictionaryContext) => void;
	/**
	 * Exit a parse tree produced by `WebIDLParser.partialDictionary`.
	 * @param ctx the parse tree
	 */
	exitPartialDictionary?: (ctx: PartialDictionaryContext) => void;

	/**
	 * Enter a parse tree produced by `WebIDLParser.default_`.
	 * @param ctx the parse tree
	 */
	enterDefault_?: (ctx: Default_Context) => void;
	/**
	 * Exit a parse tree produced by `WebIDLParser.default_`.
	 * @param ctx the parse tree
	 */
	exitDefault_?: (ctx: Default_Context) => void;

	/**
	 * Enter a parse tree produced by `WebIDLParser.defaultValue`.
	 * @param ctx the parse tree
	 */
	enterDefaultValue?: (ctx: DefaultValueContext) => void;
	/**
	 * Exit a parse tree produced by `WebIDLParser.defaultValue`.
	 * @param ctx the parse tree
	 */
	exitDefaultValue?: (ctx: DefaultValueContext) => void;

	/**
	 * Enter a parse tree produced by `WebIDLParser.inheritance`.
	 * @param ctx the parse tree
	 */
	enterInheritance?: (ctx: InheritanceContext) => void;
	/**
	 * Exit a parse tree produced by `WebIDLParser.inheritance`.
	 * @param ctx the parse tree
	 */
	exitInheritance?: (ctx: InheritanceContext) => void;

	/**
	 * Enter a parse tree produced by `WebIDLParser.extension`.
	 * @param ctx the parse tree
	 */
	enterExtension?: (ctx: ExtensionContext) => void;
	/**
	 * Exit a parse tree produced by `WebIDLParser.extension`.
	 * @param ctx the parse tree
	 */
	exitExtension?: (ctx: ExtensionContext) => void;

	/**
	 * Enter a parse tree produced by `WebIDLParser.enum_`.
	 * @param ctx the parse tree
	 */
	enterEnum_?: (ctx: Enum_Context) => void;
	/**
	 * Exit a parse tree produced by `WebIDLParser.enum_`.
	 * @param ctx the parse tree
	 */
	exitEnum_?: (ctx: Enum_Context) => void;

	/**
	 * Enter a parse tree produced by `WebIDLParser.enumValueList`.
	 * @param ctx the parse tree
	 */
	enterEnumValueList?: (ctx: EnumValueListContext) => void;
	/**
	 * Exit a parse tree produced by `WebIDLParser.enumValueList`.
	 * @param ctx the parse tree
	 */
	exitEnumValueList?: (ctx: EnumValueListContext) => void;

	/**
	 * Enter a parse tree produced by `WebIDLParser.enumValueListComma`.
	 * @param ctx the parse tree
	 */
	enterEnumValueListComma?: (ctx: EnumValueListCommaContext) => void;
	/**
	 * Exit a parse tree produced by `WebIDLParser.enumValueListComma`.
	 * @param ctx the parse tree
	 */
	exitEnumValueListComma?: (ctx: EnumValueListCommaContext) => void;

	/**
	 * Enter a parse tree produced by `WebIDLParser.enumValueListString`.
	 * @param ctx the parse tree
	 */
	enterEnumValueListString?: (ctx: EnumValueListStringContext) => void;
	/**
	 * Exit a parse tree produced by `WebIDLParser.enumValueListString`.
	 * @param ctx the parse tree
	 */
	exitEnumValueListString?: (ctx: EnumValueListStringContext) => void;

	/**
	 * Enter a parse tree produced by `WebIDLParser.callbackRest`.
	 * @param ctx the parse tree
	 */
	enterCallbackRest?: (ctx: CallbackRestContext) => void;
	/**
	 * Exit a parse tree produced by `WebIDLParser.callbackRest`.
	 * @param ctx the parse tree
	 */
	exitCallbackRest?: (ctx: CallbackRestContext) => void;

	/**
	 * Enter a parse tree produced by `WebIDLParser.typedef`.
	 * @param ctx the parse tree
	 */
	enterTypedef?: (ctx: TypedefContext) => void;
	/**
	 * Exit a parse tree produced by `WebIDLParser.typedef`.
	 * @param ctx the parse tree
	 */
	exitTypedef?: (ctx: TypedefContext) => void;

	/**
	 * Enter a parse tree produced by `WebIDLParser.implementsStatement`.
	 * @param ctx the parse tree
	 */
	enterImplementsStatement?: (ctx: ImplementsStatementContext) => void;
	/**
	 * Exit a parse tree produced by `WebIDLParser.implementsStatement`.
	 * @param ctx the parse tree
	 */
	exitImplementsStatement?: (ctx: ImplementsStatementContext) => void;

	/**
	 * Enter a parse tree produced by `WebIDLParser.const_`.
	 * @param ctx the parse tree
	 */
	enterConst_?: (ctx: Const_Context) => void;
	/**
	 * Exit a parse tree produced by `WebIDLParser.const_`.
	 * @param ctx the parse tree
	 */
	exitConst_?: (ctx: Const_Context) => void;

	/**
	 * Enter a parse tree produced by `WebIDLParser.constValue`.
	 * @param ctx the parse tree
	 */
	enterConstValue?: (ctx: ConstValueContext) => void;
	/**
	 * Exit a parse tree produced by `WebIDLParser.constValue`.
	 * @param ctx the parse tree
	 */
	exitConstValue?: (ctx: ConstValueContext) => void;

	/**
	 * Enter a parse tree produced by `WebIDLParser.booleanLiteral`.
	 * @param ctx the parse tree
	 */
	enterBooleanLiteral?: (ctx: BooleanLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `WebIDLParser.booleanLiteral`.
	 * @param ctx the parse tree
	 */
	exitBooleanLiteral?: (ctx: BooleanLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `WebIDLParser.floatLiteral`.
	 * @param ctx the parse tree
	 */
	enterFloatLiteral?: (ctx: FloatLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `WebIDLParser.floatLiteral`.
	 * @param ctx the parse tree
	 */
	exitFloatLiteral?: (ctx: FloatLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `WebIDLParser.serializer`.
	 * @param ctx the parse tree
	 */
	enterSerializer?: (ctx: SerializerContext) => void;
	/**
	 * Exit a parse tree produced by `WebIDLParser.serializer`.
	 * @param ctx the parse tree
	 */
	exitSerializer?: (ctx: SerializerContext) => void;

	/**
	 * Enter a parse tree produced by `WebIDLParser.serializerRest`.
	 * @param ctx the parse tree
	 */
	enterSerializerRest?: (ctx: SerializerRestContext) => void;
	/**
	 * Exit a parse tree produced by `WebIDLParser.serializerRest`.
	 * @param ctx the parse tree
	 */
	exitSerializerRest?: (ctx: SerializerRestContext) => void;

	/**
	 * Enter a parse tree produced by `WebIDLParser.serializationPattern`.
	 * @param ctx the parse tree
	 */
	enterSerializationPattern?: (ctx: SerializationPatternContext) => void;
	/**
	 * Exit a parse tree produced by `WebIDLParser.serializationPattern`.
	 * @param ctx the parse tree
	 */
	exitSerializationPattern?: (ctx: SerializationPatternContext) => void;

	/**
	 * Enter a parse tree produced by `WebIDLParser.serializationPatternMap`.
	 * @param ctx the parse tree
	 */
	enterSerializationPatternMap?: (ctx: SerializationPatternMapContext) => void;
	/**
	 * Exit a parse tree produced by `WebIDLParser.serializationPatternMap`.
	 * @param ctx the parse tree
	 */
	exitSerializationPatternMap?: (ctx: SerializationPatternMapContext) => void;

	/**
	 * Enter a parse tree produced by `WebIDLParser.serializationPatternList`.
	 * @param ctx the parse tree
	 */
	enterSerializationPatternList?: (ctx: SerializationPatternListContext) => void;
	/**
	 * Exit a parse tree produced by `WebIDLParser.serializationPatternList`.
	 * @param ctx the parse tree
	 */
	exitSerializationPatternList?: (ctx: SerializationPatternListContext) => void;

	/**
	 * Enter a parse tree produced by `WebIDLParser.stringifier`.
	 * @param ctx the parse tree
	 */
	enterStringifier?: (ctx: StringifierContext) => void;
	/**
	 * Exit a parse tree produced by `WebIDLParser.stringifier`.
	 * @param ctx the parse tree
	 */
	exitStringifier?: (ctx: StringifierContext) => void;

	/**
	 * Enter a parse tree produced by `WebIDLParser.stringifierRest`.
	 * @param ctx the parse tree
	 */
	enterStringifierRest?: (ctx: StringifierRestContext) => void;
	/**
	 * Exit a parse tree produced by `WebIDLParser.stringifierRest`.
	 * @param ctx the parse tree
	 */
	exitStringifierRest?: (ctx: StringifierRestContext) => void;

	/**
	 * Enter a parse tree produced by `WebIDLParser.staticMember`.
	 * @param ctx the parse tree
	 */
	enterStaticMember?: (ctx: StaticMemberContext) => void;
	/**
	 * Exit a parse tree produced by `WebIDLParser.staticMember`.
	 * @param ctx the parse tree
	 */
	exitStaticMember?: (ctx: StaticMemberContext) => void;

	/**
	 * Enter a parse tree produced by `WebIDLParser.staticMemberRest`.
	 * @param ctx the parse tree
	 */
	enterStaticMemberRest?: (ctx: StaticMemberRestContext) => void;
	/**
	 * Exit a parse tree produced by `WebIDLParser.staticMemberRest`.
	 * @param ctx the parse tree
	 */
	exitStaticMemberRest?: (ctx: StaticMemberRestContext) => void;

	/**
	 * Enter a parse tree produced by `WebIDLParser.readonlyMember`.
	 * @param ctx the parse tree
	 */
	enterReadonlyMember?: (ctx: ReadonlyMemberContext) => void;
	/**
	 * Exit a parse tree produced by `WebIDLParser.readonlyMember`.
	 * @param ctx the parse tree
	 */
	exitReadonlyMember?: (ctx: ReadonlyMemberContext) => void;

	/**
	 * Enter a parse tree produced by `WebIDLParser.readonlyMemberRest`.
	 * @param ctx the parse tree
	 */
	enterReadonlyMemberRest?: (ctx: ReadonlyMemberRestContext) => void;
	/**
	 * Exit a parse tree produced by `WebIDLParser.readonlyMemberRest`.
	 * @param ctx the parse tree
	 */
	exitReadonlyMemberRest?: (ctx: ReadonlyMemberRestContext) => void;

	/**
	 * Enter a parse tree produced by `WebIDLParser.readWriteAttribute`.
	 * @param ctx the parse tree
	 */
	enterReadWriteAttribute?: (ctx: ReadWriteAttributeContext) => void;
	/**
	 * Exit a parse tree produced by `WebIDLParser.readWriteAttribute`.
	 * @param ctx the parse tree
	 */
	exitReadWriteAttribute?: (ctx: ReadWriteAttributeContext) => void;

	/**
	 * Enter a parse tree produced by `WebIDLParser.attributeRest`.
	 * @param ctx the parse tree
	 */
	enterAttributeRest?: (ctx: AttributeRestContext) => void;
	/**
	 * Exit a parse tree produced by `WebIDLParser.attributeRest`.
	 * @param ctx the parse tree
	 */
	exitAttributeRest?: (ctx: AttributeRestContext) => void;

	/**
	 * Enter a parse tree produced by `WebIDLParser.attributeName`.
	 * @param ctx the parse tree
	 */
	enterAttributeName?: (ctx: AttributeNameContext) => void;
	/**
	 * Exit a parse tree produced by `WebIDLParser.attributeName`.
	 * @param ctx the parse tree
	 */
	exitAttributeName?: (ctx: AttributeNameContext) => void;

	/**
	 * Enter a parse tree produced by `WebIDLParser.attributeNameKeyword`.
	 * @param ctx the parse tree
	 */
	enterAttributeNameKeyword?: (ctx: AttributeNameKeywordContext) => void;
	/**
	 * Exit a parse tree produced by `WebIDLParser.attributeNameKeyword`.
	 * @param ctx the parse tree
	 */
	exitAttributeNameKeyword?: (ctx: AttributeNameKeywordContext) => void;

	/**
	 * Enter a parse tree produced by `WebIDLParser.inherit`.
	 * @param ctx the parse tree
	 */
	enterInherit?: (ctx: InheritContext) => void;
	/**
	 * Exit a parse tree produced by `WebIDLParser.inherit`.
	 * @param ctx the parse tree
	 */
	exitInherit?: (ctx: InheritContext) => void;

	/**
	 * Enter a parse tree produced by `WebIDLParser.readOnly`.
	 * @param ctx the parse tree
	 */
	enterReadOnly?: (ctx: ReadOnlyContext) => void;
	/**
	 * Exit a parse tree produced by `WebIDLParser.readOnly`.
	 * @param ctx the parse tree
	 */
	exitReadOnly?: (ctx: ReadOnlyContext) => void;

	/**
	 * Enter a parse tree produced by `WebIDLParser.operation`.
	 * @param ctx the parse tree
	 */
	enterOperation?: (ctx: OperationContext) => void;
	/**
	 * Exit a parse tree produced by `WebIDLParser.operation`.
	 * @param ctx the parse tree
	 */
	exitOperation?: (ctx: OperationContext) => void;

	/**
	 * Enter a parse tree produced by `WebIDLParser.specialOperation`.
	 * @param ctx the parse tree
	 */
	enterSpecialOperation?: (ctx: SpecialOperationContext) => void;
	/**
	 * Exit a parse tree produced by `WebIDLParser.specialOperation`.
	 * @param ctx the parse tree
	 */
	exitSpecialOperation?: (ctx: SpecialOperationContext) => void;

	/**
	 * Enter a parse tree produced by `WebIDLParser.specials`.
	 * @param ctx the parse tree
	 */
	enterSpecials?: (ctx: SpecialsContext) => void;
	/**
	 * Exit a parse tree produced by `WebIDLParser.specials`.
	 * @param ctx the parse tree
	 */
	exitSpecials?: (ctx: SpecialsContext) => void;

	/**
	 * Enter a parse tree produced by `WebIDLParser.special`.
	 * @param ctx the parse tree
	 */
	enterSpecial?: (ctx: SpecialContext) => void;
	/**
	 * Exit a parse tree produced by `WebIDLParser.special`.
	 * @param ctx the parse tree
	 */
	exitSpecial?: (ctx: SpecialContext) => void;

	/**
	 * Enter a parse tree produced by `WebIDLParser.operationRest`.
	 * @param ctx the parse tree
	 */
	enterOperationRest?: (ctx: OperationRestContext) => void;
	/**
	 * Exit a parse tree produced by `WebIDLParser.operationRest`.
	 * @param ctx the parse tree
	 */
	exitOperationRest?: (ctx: OperationRestContext) => void;

	/**
	 * Enter a parse tree produced by `WebIDLParser.optionalIdentifier`.
	 * @param ctx the parse tree
	 */
	enterOptionalIdentifier?: (ctx: OptionalIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `WebIDLParser.optionalIdentifier`.
	 * @param ctx the parse tree
	 */
	exitOptionalIdentifier?: (ctx: OptionalIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `WebIDLParser.argumentList`.
	 * @param ctx the parse tree
	 */
	enterArgumentList?: (ctx: ArgumentListContext) => void;
	/**
	 * Exit a parse tree produced by `WebIDLParser.argumentList`.
	 * @param ctx the parse tree
	 */
	exitArgumentList?: (ctx: ArgumentListContext) => void;

	/**
	 * Enter a parse tree produced by `WebIDLParser.arguments`.
	 * @param ctx the parse tree
	 */
	enterArguments?: (ctx: ArgumentsContext) => void;
	/**
	 * Exit a parse tree produced by `WebIDLParser.arguments`.
	 * @param ctx the parse tree
	 */
	exitArguments?: (ctx: ArgumentsContext) => void;

	/**
	 * Enter a parse tree produced by `WebIDLParser.argument`.
	 * @param ctx the parse tree
	 */
	enterArgument?: (ctx: ArgumentContext) => void;
	/**
	 * Exit a parse tree produced by `WebIDLParser.argument`.
	 * @param ctx the parse tree
	 */
	exitArgument?: (ctx: ArgumentContext) => void;

	/**
	 * Enter a parse tree produced by `WebIDLParser.optionalOrRequiredArgument`.
	 * @param ctx the parse tree
	 */
	enterOptionalOrRequiredArgument?: (ctx: OptionalOrRequiredArgumentContext) => void;
	/**
	 * Exit a parse tree produced by `WebIDLParser.optionalOrRequiredArgument`.
	 * @param ctx the parse tree
	 */
	exitOptionalOrRequiredArgument?: (ctx: OptionalOrRequiredArgumentContext) => void;

	/**
	 * Enter a parse tree produced by `WebIDLParser.argumentName`.
	 * @param ctx the parse tree
	 */
	enterArgumentName?: (ctx: ArgumentNameContext) => void;
	/**
	 * Exit a parse tree produced by `WebIDLParser.argumentName`.
	 * @param ctx the parse tree
	 */
	exitArgumentName?: (ctx: ArgumentNameContext) => void;

	/**
	 * Enter a parse tree produced by `WebIDLParser.ellipsis`.
	 * @param ctx the parse tree
	 */
	enterEllipsis?: (ctx: EllipsisContext) => void;
	/**
	 * Exit a parse tree produced by `WebIDLParser.ellipsis`.
	 * @param ctx the parse tree
	 */
	exitEllipsis?: (ctx: EllipsisContext) => void;

	/**
	 * Enter a parse tree produced by `WebIDLParser.iterable`.
	 * @param ctx the parse tree
	 */
	enterIterable?: (ctx: IterableContext) => void;
	/**
	 * Exit a parse tree produced by `WebIDLParser.iterable`.
	 * @param ctx the parse tree
	 */
	exitIterable?: (ctx: IterableContext) => void;

	/**
	 * Enter a parse tree produced by `WebIDLParser.optionalType`.
	 * @param ctx the parse tree
	 */
	enterOptionalType?: (ctx: OptionalTypeContext) => void;
	/**
	 * Exit a parse tree produced by `WebIDLParser.optionalType`.
	 * @param ctx the parse tree
	 */
	exitOptionalType?: (ctx: OptionalTypeContext) => void;

	/**
	 * Enter a parse tree produced by `WebIDLParser.readWriteMaplike`.
	 * @param ctx the parse tree
	 */
	enterReadWriteMaplike?: (ctx: ReadWriteMaplikeContext) => void;
	/**
	 * Exit a parse tree produced by `WebIDLParser.readWriteMaplike`.
	 * @param ctx the parse tree
	 */
	exitReadWriteMaplike?: (ctx: ReadWriteMaplikeContext) => void;

	/**
	 * Enter a parse tree produced by `WebIDLParser.readWriteSetlike`.
	 * @param ctx the parse tree
	 */
	enterReadWriteSetlike?: (ctx: ReadWriteSetlikeContext) => void;
	/**
	 * Exit a parse tree produced by `WebIDLParser.readWriteSetlike`.
	 * @param ctx the parse tree
	 */
	exitReadWriteSetlike?: (ctx: ReadWriteSetlikeContext) => void;

	/**
	 * Enter a parse tree produced by `WebIDLParser.maplikeRest`.
	 * @param ctx the parse tree
	 */
	enterMaplikeRest?: (ctx: MaplikeRestContext) => void;
	/**
	 * Exit a parse tree produced by `WebIDLParser.maplikeRest`.
	 * @param ctx the parse tree
	 */
	exitMaplikeRest?: (ctx: MaplikeRestContext) => void;

	/**
	 * Enter a parse tree produced by `WebIDLParser.setlikeRest`.
	 * @param ctx the parse tree
	 */
	enterSetlikeRest?: (ctx: SetlikeRestContext) => void;
	/**
	 * Exit a parse tree produced by `WebIDLParser.setlikeRest`.
	 * @param ctx the parse tree
	 */
	exitSetlikeRest?: (ctx: SetlikeRestContext) => void;

	/**
	 * Enter a parse tree produced by `WebIDLParser.extendedAttributeList`.
	 * @param ctx the parse tree
	 */
	enterExtendedAttributeList?: (ctx: ExtendedAttributeListContext) => void;
	/**
	 * Exit a parse tree produced by `WebIDLParser.extendedAttributeList`.
	 * @param ctx the parse tree
	 */
	exitExtendedAttributeList?: (ctx: ExtendedAttributeListContext) => void;

	/**
	 * Enter a parse tree produced by `WebIDLParser.extendedAttributes`.
	 * @param ctx the parse tree
	 */
	enterExtendedAttributes?: (ctx: ExtendedAttributesContext) => void;
	/**
	 * Exit a parse tree produced by `WebIDLParser.extendedAttributes`.
	 * @param ctx the parse tree
	 */
	exitExtendedAttributes?: (ctx: ExtendedAttributesContext) => void;

	/**
	 * Enter a parse tree produced by `WebIDLParser.extendedAttribute`.
	 * @param ctx the parse tree
	 */
	enterExtendedAttribute?: (ctx: ExtendedAttributeContext) => void;
	/**
	 * Exit a parse tree produced by `WebIDLParser.extendedAttribute`.
	 * @param ctx the parse tree
	 */
	exitExtendedAttribute?: (ctx: ExtendedAttributeContext) => void;

	/**
	 * Enter a parse tree produced by `WebIDLParser.extendedAttributeRest`.
	 * @param ctx the parse tree
	 */
	enterExtendedAttributeRest?: (ctx: ExtendedAttributeRestContext) => void;
	/**
	 * Exit a parse tree produced by `WebIDLParser.extendedAttributeRest`.
	 * @param ctx the parse tree
	 */
	exitExtendedAttributeRest?: (ctx: ExtendedAttributeRestContext) => void;

	/**
	 * Enter a parse tree produced by `WebIDLParser.extendedAttributeInner`.
	 * @param ctx the parse tree
	 */
	enterExtendedAttributeInner?: (ctx: ExtendedAttributeInnerContext) => void;
	/**
	 * Exit a parse tree produced by `WebIDLParser.extendedAttributeInner`.
	 * @param ctx the parse tree
	 */
	exitExtendedAttributeInner?: (ctx: ExtendedAttributeInnerContext) => void;

	/**
	 * Enter a parse tree produced by `WebIDLParser.other`.
	 * @param ctx the parse tree
	 */
	enterOther?: (ctx: OtherContext) => void;
	/**
	 * Exit a parse tree produced by `WebIDLParser.other`.
	 * @param ctx the parse tree
	 */
	exitOther?: (ctx: OtherContext) => void;

	/**
	 * Enter a parse tree produced by `WebIDLParser.argumentNameKeyword`.
	 * @param ctx the parse tree
	 */
	enterArgumentNameKeyword?: (ctx: ArgumentNameKeywordContext) => void;
	/**
	 * Exit a parse tree produced by `WebIDLParser.argumentNameKeyword`.
	 * @param ctx the parse tree
	 */
	exitArgumentNameKeyword?: (ctx: ArgumentNameKeywordContext) => void;

	/**
	 * Enter a parse tree produced by `WebIDLParser.otherOrComma`.
	 * @param ctx the parse tree
	 */
	enterOtherOrComma?: (ctx: OtherOrCommaContext) => void;
	/**
	 * Exit a parse tree produced by `WebIDLParser.otherOrComma`.
	 * @param ctx the parse tree
	 */
	exitOtherOrComma?: (ctx: OtherOrCommaContext) => void;

	/**
	 * Enter a parse tree produced by `WebIDLParser.type`.
	 * @param ctx the parse tree
	 */
	enterType?: (ctx: TypeContext) => void;
	/**
	 * Exit a parse tree produced by `WebIDLParser.type`.
	 * @param ctx the parse tree
	 */
	exitType?: (ctx: TypeContext) => void;

	/**
	 * Enter a parse tree produced by `WebIDLParser.singleType`.
	 * @param ctx the parse tree
	 */
	enterSingleType?: (ctx: SingleTypeContext) => void;
	/**
	 * Exit a parse tree produced by `WebIDLParser.singleType`.
	 * @param ctx the parse tree
	 */
	exitSingleType?: (ctx: SingleTypeContext) => void;

	/**
	 * Enter a parse tree produced by `WebIDLParser.unionType`.
	 * @param ctx the parse tree
	 */
	enterUnionType?: (ctx: UnionTypeContext) => void;
	/**
	 * Exit a parse tree produced by `WebIDLParser.unionType`.
	 * @param ctx the parse tree
	 */
	exitUnionType?: (ctx: UnionTypeContext) => void;

	/**
	 * Enter a parse tree produced by `WebIDLParser.unionMemberType`.
	 * @param ctx the parse tree
	 */
	enterUnionMemberType?: (ctx: UnionMemberTypeContext) => void;
	/**
	 * Exit a parse tree produced by `WebIDLParser.unionMemberType`.
	 * @param ctx the parse tree
	 */
	exitUnionMemberType?: (ctx: UnionMemberTypeContext) => void;

	/**
	 * Enter a parse tree produced by `WebIDLParser.unionMemberTypes`.
	 * @param ctx the parse tree
	 */
	enterUnionMemberTypes?: (ctx: UnionMemberTypesContext) => void;
	/**
	 * Exit a parse tree produced by `WebIDLParser.unionMemberTypes`.
	 * @param ctx the parse tree
	 */
	exitUnionMemberTypes?: (ctx: UnionMemberTypesContext) => void;

	/**
	 * Enter a parse tree produced by `WebIDLParser.nonAnyType`.
	 * @param ctx the parse tree
	 */
	enterNonAnyType?: (ctx: NonAnyTypeContext) => void;
	/**
	 * Exit a parse tree produced by `WebIDLParser.nonAnyType`.
	 * @param ctx the parse tree
	 */
	exitNonAnyType?: (ctx: NonAnyTypeContext) => void;

	/**
	 * Enter a parse tree produced by `WebIDLParser.bufferRelatedType`.
	 * @param ctx the parse tree
	 */
	enterBufferRelatedType?: (ctx: BufferRelatedTypeContext) => void;
	/**
	 * Exit a parse tree produced by `WebIDLParser.bufferRelatedType`.
	 * @param ctx the parse tree
	 */
	exitBufferRelatedType?: (ctx: BufferRelatedTypeContext) => void;

	/**
	 * Enter a parse tree produced by `WebIDLParser.constType`.
	 * @param ctx the parse tree
	 */
	enterConstType?: (ctx: ConstTypeContext) => void;
	/**
	 * Exit a parse tree produced by `WebIDLParser.constType`.
	 * @param ctx the parse tree
	 */
	exitConstType?: (ctx: ConstTypeContext) => void;

	/**
	 * Enter a parse tree produced by `WebIDLParser.primitiveType`.
	 * @param ctx the parse tree
	 */
	enterPrimitiveType?: (ctx: PrimitiveTypeContext) => void;
	/**
	 * Exit a parse tree produced by `WebIDLParser.primitiveType`.
	 * @param ctx the parse tree
	 */
	exitPrimitiveType?: (ctx: PrimitiveTypeContext) => void;

	/**
	 * Enter a parse tree produced by `WebIDLParser.unrestrictedFloatType`.
	 * @param ctx the parse tree
	 */
	enterUnrestrictedFloatType?: (ctx: UnrestrictedFloatTypeContext) => void;
	/**
	 * Exit a parse tree produced by `WebIDLParser.unrestrictedFloatType`.
	 * @param ctx the parse tree
	 */
	exitUnrestrictedFloatType?: (ctx: UnrestrictedFloatTypeContext) => void;

	/**
	 * Enter a parse tree produced by `WebIDLParser.floatType`.
	 * @param ctx the parse tree
	 */
	enterFloatType?: (ctx: FloatTypeContext) => void;
	/**
	 * Exit a parse tree produced by `WebIDLParser.floatType`.
	 * @param ctx the parse tree
	 */
	exitFloatType?: (ctx: FloatTypeContext) => void;

	/**
	 * Enter a parse tree produced by `WebIDLParser.unsignedIntegerType`.
	 * @param ctx the parse tree
	 */
	enterUnsignedIntegerType?: (ctx: UnsignedIntegerTypeContext) => void;
	/**
	 * Exit a parse tree produced by `WebIDLParser.unsignedIntegerType`.
	 * @param ctx the parse tree
	 */
	exitUnsignedIntegerType?: (ctx: UnsignedIntegerTypeContext) => void;

	/**
	 * Enter a parse tree produced by `WebIDLParser.integerType`.
	 * @param ctx the parse tree
	 */
	enterIntegerType?: (ctx: IntegerTypeContext) => void;
	/**
	 * Exit a parse tree produced by `WebIDLParser.integerType`.
	 * @param ctx the parse tree
	 */
	exitIntegerType?: (ctx: IntegerTypeContext) => void;

	/**
	 * Enter a parse tree produced by `WebIDLParser.optionalLong`.
	 * @param ctx the parse tree
	 */
	enterOptionalLong?: (ctx: OptionalLongContext) => void;
	/**
	 * Exit a parse tree produced by `WebIDLParser.optionalLong`.
	 * @param ctx the parse tree
	 */
	exitOptionalLong?: (ctx: OptionalLongContext) => void;

	/**
	 * Enter a parse tree produced by `WebIDLParser.promiseType`.
	 * @param ctx the parse tree
	 */
	enterPromiseType?: (ctx: PromiseTypeContext) => void;
	/**
	 * Exit a parse tree produced by `WebIDLParser.promiseType`.
	 * @param ctx the parse tree
	 */
	exitPromiseType?: (ctx: PromiseTypeContext) => void;

	/**
	 * Enter a parse tree produced by `WebIDLParser.null_`.
	 * @param ctx the parse tree
	 */
	enterNull_?: (ctx: Null_Context) => void;
	/**
	 * Exit a parse tree produced by `WebIDLParser.null_`.
	 * @param ctx the parse tree
	 */
	exitNull_?: (ctx: Null_Context) => void;

	/**
	 * Enter a parse tree produced by `WebIDLParser.returnType`.
	 * @param ctx the parse tree
	 */
	enterReturnType?: (ctx: ReturnTypeContext) => void;
	/**
	 * Exit a parse tree produced by `WebIDLParser.returnType`.
	 * @param ctx the parse tree
	 */
	exitReturnType?: (ctx: ReturnTypeContext) => void;

	/**
	 * Enter a parse tree produced by `WebIDLParser.identifierList`.
	 * @param ctx the parse tree
	 */
	enterIdentifierList?: (ctx: IdentifierListContext) => void;
	/**
	 * Exit a parse tree produced by `WebIDLParser.identifierList`.
	 * @param ctx the parse tree
	 */
	exitIdentifierList?: (ctx: IdentifierListContext) => void;

	/**
	 * Enter a parse tree produced by `WebIDLParser.identifiers`.
	 * @param ctx the parse tree
	 */
	enterIdentifiers?: (ctx: IdentifiersContext) => void;
	/**
	 * Exit a parse tree produced by `WebIDLParser.identifiers`.
	 * @param ctx the parse tree
	 */
	exitIdentifiers?: (ctx: IdentifiersContext) => void;

	/**
	 * Enter a parse tree produced by `WebIDLParser.extendedAttributeNoArgs`.
	 * @param ctx the parse tree
	 */
	enterExtendedAttributeNoArgs?: (ctx: ExtendedAttributeNoArgsContext) => void;
	/**
	 * Exit a parse tree produced by `WebIDLParser.extendedAttributeNoArgs`.
	 * @param ctx the parse tree
	 */
	exitExtendedAttributeNoArgs?: (ctx: ExtendedAttributeNoArgsContext) => void;

	/**
	 * Enter a parse tree produced by `WebIDLParser.extendedAttributeArgList`.
	 * @param ctx the parse tree
	 */
	enterExtendedAttributeArgList?: (ctx: ExtendedAttributeArgListContext) => void;
	/**
	 * Exit a parse tree produced by `WebIDLParser.extendedAttributeArgList`.
	 * @param ctx the parse tree
	 */
	exitExtendedAttributeArgList?: (ctx: ExtendedAttributeArgListContext) => void;

	/**
	 * Enter a parse tree produced by `WebIDLParser.extendedAttributeIdent`.
	 * @param ctx the parse tree
	 */
	enterExtendedAttributeIdent?: (ctx: ExtendedAttributeIdentContext) => void;
	/**
	 * Exit a parse tree produced by `WebIDLParser.extendedAttributeIdent`.
	 * @param ctx the parse tree
	 */
	exitExtendedAttributeIdent?: (ctx: ExtendedAttributeIdentContext) => void;

	/**
	 * Enter a parse tree produced by `WebIDLParser.extendedAttributeIdentList`.
	 * @param ctx the parse tree
	 */
	enterExtendedAttributeIdentList?: (ctx: ExtendedAttributeIdentListContext) => void;
	/**
	 * Exit a parse tree produced by `WebIDLParser.extendedAttributeIdentList`.
	 * @param ctx the parse tree
	 */
	exitExtendedAttributeIdentList?: (ctx: ExtendedAttributeIdentListContext) => void;

	/**
	 * Enter a parse tree produced by `WebIDLParser.extendedAttributeNamedArgList`.
	 * @param ctx the parse tree
	 */
	enterExtendedAttributeNamedArgList?: (ctx: ExtendedAttributeNamedArgListContext) => void;
	/**
	 * Exit a parse tree produced by `WebIDLParser.extendedAttributeNamedArgList`.
	 * @param ctx the parse tree
	 */
	exitExtendedAttributeNamedArgList?: (ctx: ExtendedAttributeNamedArgListContext) => void;
}

