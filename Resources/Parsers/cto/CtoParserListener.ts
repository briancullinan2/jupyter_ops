// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/cto/CtoParser.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ModelUnitContext } from "./CtoParser";
import { NamespaceDeclarationContext } from "./CtoParser";
import { ImportDeclarationContext } from "./CtoParser";
import { TypeDeclarationContext } from "./CtoParser";
import { ClassModifierContext } from "./CtoParser";
import { AssetDeclarationContext } from "./CtoParser";
import { ConceptDeclarationContext } from "./CtoParser";
import { EnumDeclarationContext } from "./CtoParser";
import { EnumConstantContext } from "./CtoParser";
import { EventDeclarationContext } from "./CtoParser";
import { ParticipantDeclarationContext } from "./CtoParser";
import { TransactionDeclarationContext } from "./CtoParser";
import { ExtendsOrIdentifiedContext } from "./CtoParser";
import { IdentifiedContext } from "./CtoParser";
import { ClassBodyContext } from "./CtoParser";
import { ClassBodyDeclarationContext } from "./CtoParser";
import { FieldDeclarationContext } from "./CtoParser";
import { IdentifierFieldContext } from "./CtoParser";
import { NumericFieldContext } from "./CtoParser";
import { NumericPrimitiveContext } from "./CtoParser";
import { BooleanFieldContext } from "./CtoParser";
import { DateFieldContext } from "./CtoParser";
import { DefaultDateContext } from "./CtoParser";
import { RegexDeclarationContext } from "./CtoParser";
import { StringFieldContext } from "./CtoParser";
import { ReferenceContext } from "./CtoParser";
import { QualifiedNameContext } from "./CtoParser";
import { RangeValidationContext } from "./CtoParser";
import { RangeDeclarationContext } from "./CtoParser";
import { DefaultBooleanContext } from "./CtoParser";
import { DefaultStringContext } from "./CtoParser";
import { DefaultNumberContext } from "./CtoParser";
import { IdentifierContext } from "./CtoParser";
import { LiteralContext } from "./CtoParser";
import { NumberLiteralContext } from "./CtoParser";
import { StringLiteralContext } from "./CtoParser";
import { IntegerLiteralContext } from "./CtoParser";
import { FloatLiteralContext } from "./CtoParser";
import { DecoratorContext } from "./CtoParser";
import { ElementValuePairContext } from "./CtoParser";
import { SquareContext } from "./CtoParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `CtoParser`.
 */
export interface CtoParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `CtoParser.modelUnit`.
	 * @param ctx the parse tree
	 */
	enterModelUnit?: (ctx: ModelUnitContext) => void;
	/**
	 * Exit a parse tree produced by `CtoParser.modelUnit`.
	 * @param ctx the parse tree
	 */
	exitModelUnit?: (ctx: ModelUnitContext) => void;

	/**
	 * Enter a parse tree produced by `CtoParser.namespaceDeclaration`.
	 * @param ctx the parse tree
	 */
	enterNamespaceDeclaration?: (ctx: NamespaceDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `CtoParser.namespaceDeclaration`.
	 * @param ctx the parse tree
	 */
	exitNamespaceDeclaration?: (ctx: NamespaceDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `CtoParser.importDeclaration`.
	 * @param ctx the parse tree
	 */
	enterImportDeclaration?: (ctx: ImportDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `CtoParser.importDeclaration`.
	 * @param ctx the parse tree
	 */
	exitImportDeclaration?: (ctx: ImportDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `CtoParser.typeDeclaration`.
	 * @param ctx the parse tree
	 */
	enterTypeDeclaration?: (ctx: TypeDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `CtoParser.typeDeclaration`.
	 * @param ctx the parse tree
	 */
	exitTypeDeclaration?: (ctx: TypeDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `CtoParser.classModifier`.
	 * @param ctx the parse tree
	 */
	enterClassModifier?: (ctx: ClassModifierContext) => void;
	/**
	 * Exit a parse tree produced by `CtoParser.classModifier`.
	 * @param ctx the parse tree
	 */
	exitClassModifier?: (ctx: ClassModifierContext) => void;

	/**
	 * Enter a parse tree produced by `CtoParser.assetDeclaration`.
	 * @param ctx the parse tree
	 */
	enterAssetDeclaration?: (ctx: AssetDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `CtoParser.assetDeclaration`.
	 * @param ctx the parse tree
	 */
	exitAssetDeclaration?: (ctx: AssetDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `CtoParser.conceptDeclaration`.
	 * @param ctx the parse tree
	 */
	enterConceptDeclaration?: (ctx: ConceptDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `CtoParser.conceptDeclaration`.
	 * @param ctx the parse tree
	 */
	exitConceptDeclaration?: (ctx: ConceptDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `CtoParser.enumDeclaration`.
	 * @param ctx the parse tree
	 */
	enterEnumDeclaration?: (ctx: EnumDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `CtoParser.enumDeclaration`.
	 * @param ctx the parse tree
	 */
	exitEnumDeclaration?: (ctx: EnumDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `CtoParser.enumConstant`.
	 * @param ctx the parse tree
	 */
	enterEnumConstant?: (ctx: EnumConstantContext) => void;
	/**
	 * Exit a parse tree produced by `CtoParser.enumConstant`.
	 * @param ctx the parse tree
	 */
	exitEnumConstant?: (ctx: EnumConstantContext) => void;

	/**
	 * Enter a parse tree produced by `CtoParser.eventDeclaration`.
	 * @param ctx the parse tree
	 */
	enterEventDeclaration?: (ctx: EventDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `CtoParser.eventDeclaration`.
	 * @param ctx the parse tree
	 */
	exitEventDeclaration?: (ctx: EventDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `CtoParser.participantDeclaration`.
	 * @param ctx the parse tree
	 */
	enterParticipantDeclaration?: (ctx: ParticipantDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `CtoParser.participantDeclaration`.
	 * @param ctx the parse tree
	 */
	exitParticipantDeclaration?: (ctx: ParticipantDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `CtoParser.transactionDeclaration`.
	 * @param ctx the parse tree
	 */
	enterTransactionDeclaration?: (ctx: TransactionDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `CtoParser.transactionDeclaration`.
	 * @param ctx the parse tree
	 */
	exitTransactionDeclaration?: (ctx: TransactionDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `CtoParser.extendsOrIdentified`.
	 * @param ctx the parse tree
	 */
	enterExtendsOrIdentified?: (ctx: ExtendsOrIdentifiedContext) => void;
	/**
	 * Exit a parse tree produced by `CtoParser.extendsOrIdentified`.
	 * @param ctx the parse tree
	 */
	exitExtendsOrIdentified?: (ctx: ExtendsOrIdentifiedContext) => void;

	/**
	 * Enter a parse tree produced by `CtoParser.identified`.
	 * @param ctx the parse tree
	 */
	enterIdentified?: (ctx: IdentifiedContext) => void;
	/**
	 * Exit a parse tree produced by `CtoParser.identified`.
	 * @param ctx the parse tree
	 */
	exitIdentified?: (ctx: IdentifiedContext) => void;

	/**
	 * Enter a parse tree produced by `CtoParser.classBody`.
	 * @param ctx the parse tree
	 */
	enterClassBody?: (ctx: ClassBodyContext) => void;
	/**
	 * Exit a parse tree produced by `CtoParser.classBody`.
	 * @param ctx the parse tree
	 */
	exitClassBody?: (ctx: ClassBodyContext) => void;

	/**
	 * Enter a parse tree produced by `CtoParser.classBodyDeclaration`.
	 * @param ctx the parse tree
	 */
	enterClassBodyDeclaration?: (ctx: ClassBodyDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `CtoParser.classBodyDeclaration`.
	 * @param ctx the parse tree
	 */
	exitClassBodyDeclaration?: (ctx: ClassBodyDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `CtoParser.fieldDeclaration`.
	 * @param ctx the parse tree
	 */
	enterFieldDeclaration?: (ctx: FieldDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `CtoParser.fieldDeclaration`.
	 * @param ctx the parse tree
	 */
	exitFieldDeclaration?: (ctx: FieldDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `CtoParser.identifierField`.
	 * @param ctx the parse tree
	 */
	enterIdentifierField?: (ctx: IdentifierFieldContext) => void;
	/**
	 * Exit a parse tree produced by `CtoParser.identifierField`.
	 * @param ctx the parse tree
	 */
	exitIdentifierField?: (ctx: IdentifierFieldContext) => void;

	/**
	 * Enter a parse tree produced by `CtoParser.numericField`.
	 * @param ctx the parse tree
	 */
	enterNumericField?: (ctx: NumericFieldContext) => void;
	/**
	 * Exit a parse tree produced by `CtoParser.numericField`.
	 * @param ctx the parse tree
	 */
	exitNumericField?: (ctx: NumericFieldContext) => void;

	/**
	 * Enter a parse tree produced by `CtoParser.numericPrimitive`.
	 * @param ctx the parse tree
	 */
	enterNumericPrimitive?: (ctx: NumericPrimitiveContext) => void;
	/**
	 * Exit a parse tree produced by `CtoParser.numericPrimitive`.
	 * @param ctx the parse tree
	 */
	exitNumericPrimitive?: (ctx: NumericPrimitiveContext) => void;

	/**
	 * Enter a parse tree produced by `CtoParser.booleanField`.
	 * @param ctx the parse tree
	 */
	enterBooleanField?: (ctx: BooleanFieldContext) => void;
	/**
	 * Exit a parse tree produced by `CtoParser.booleanField`.
	 * @param ctx the parse tree
	 */
	exitBooleanField?: (ctx: BooleanFieldContext) => void;

	/**
	 * Enter a parse tree produced by `CtoParser.dateField`.
	 * @param ctx the parse tree
	 */
	enterDateField?: (ctx: DateFieldContext) => void;
	/**
	 * Exit a parse tree produced by `CtoParser.dateField`.
	 * @param ctx the parse tree
	 */
	exitDateField?: (ctx: DateFieldContext) => void;

	/**
	 * Enter a parse tree produced by `CtoParser.defaultDate`.
	 * @param ctx the parse tree
	 */
	enterDefaultDate?: (ctx: DefaultDateContext) => void;
	/**
	 * Exit a parse tree produced by `CtoParser.defaultDate`.
	 * @param ctx the parse tree
	 */
	exitDefaultDate?: (ctx: DefaultDateContext) => void;

	/**
	 * Enter a parse tree produced by `CtoParser.regexDeclaration`.
	 * @param ctx the parse tree
	 */
	enterRegexDeclaration?: (ctx: RegexDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `CtoParser.regexDeclaration`.
	 * @param ctx the parse tree
	 */
	exitRegexDeclaration?: (ctx: RegexDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `CtoParser.stringField`.
	 * @param ctx the parse tree
	 */
	enterStringField?: (ctx: StringFieldContext) => void;
	/**
	 * Exit a parse tree produced by `CtoParser.stringField`.
	 * @param ctx the parse tree
	 */
	exitStringField?: (ctx: StringFieldContext) => void;

	/**
	 * Enter a parse tree produced by `CtoParser.reference`.
	 * @param ctx the parse tree
	 */
	enterReference?: (ctx: ReferenceContext) => void;
	/**
	 * Exit a parse tree produced by `CtoParser.reference`.
	 * @param ctx the parse tree
	 */
	exitReference?: (ctx: ReferenceContext) => void;

	/**
	 * Enter a parse tree produced by `CtoParser.qualifiedName`.
	 * @param ctx the parse tree
	 */
	enterQualifiedName?: (ctx: QualifiedNameContext) => void;
	/**
	 * Exit a parse tree produced by `CtoParser.qualifiedName`.
	 * @param ctx the parse tree
	 */
	exitQualifiedName?: (ctx: QualifiedNameContext) => void;

	/**
	 * Enter a parse tree produced by `CtoParser.rangeValidation`.
	 * @param ctx the parse tree
	 */
	enterRangeValidation?: (ctx: RangeValidationContext) => void;
	/**
	 * Exit a parse tree produced by `CtoParser.rangeValidation`.
	 * @param ctx the parse tree
	 */
	exitRangeValidation?: (ctx: RangeValidationContext) => void;

	/**
	 * Enter a parse tree produced by `CtoParser.rangeDeclaration`.
	 * @param ctx the parse tree
	 */
	enterRangeDeclaration?: (ctx: RangeDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `CtoParser.rangeDeclaration`.
	 * @param ctx the parse tree
	 */
	exitRangeDeclaration?: (ctx: RangeDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `CtoParser.defaultBoolean`.
	 * @param ctx the parse tree
	 */
	enterDefaultBoolean?: (ctx: DefaultBooleanContext) => void;
	/**
	 * Exit a parse tree produced by `CtoParser.defaultBoolean`.
	 * @param ctx the parse tree
	 */
	exitDefaultBoolean?: (ctx: DefaultBooleanContext) => void;

	/**
	 * Enter a parse tree produced by `CtoParser.defaultString`.
	 * @param ctx the parse tree
	 */
	enterDefaultString?: (ctx: DefaultStringContext) => void;
	/**
	 * Exit a parse tree produced by `CtoParser.defaultString`.
	 * @param ctx the parse tree
	 */
	exitDefaultString?: (ctx: DefaultStringContext) => void;

	/**
	 * Enter a parse tree produced by `CtoParser.defaultNumber`.
	 * @param ctx the parse tree
	 */
	enterDefaultNumber?: (ctx: DefaultNumberContext) => void;
	/**
	 * Exit a parse tree produced by `CtoParser.defaultNumber`.
	 * @param ctx the parse tree
	 */
	exitDefaultNumber?: (ctx: DefaultNumberContext) => void;

	/**
	 * Enter a parse tree produced by `CtoParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `CtoParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitIdentifier?: (ctx: IdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `CtoParser.literal`.
	 * @param ctx the parse tree
	 */
	enterLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Exit a parse tree produced by `CtoParser.literal`.
	 * @param ctx the parse tree
	 */
	exitLiteral?: (ctx: LiteralContext) => void;

	/**
	 * Enter a parse tree produced by `CtoParser.numberLiteral`.
	 * @param ctx the parse tree
	 */
	enterNumberLiteral?: (ctx: NumberLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `CtoParser.numberLiteral`.
	 * @param ctx the parse tree
	 */
	exitNumberLiteral?: (ctx: NumberLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `CtoParser.stringLiteral`.
	 * @param ctx the parse tree
	 */
	enterStringLiteral?: (ctx: StringLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `CtoParser.stringLiteral`.
	 * @param ctx the parse tree
	 */
	exitStringLiteral?: (ctx: StringLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `CtoParser.integerLiteral`.
	 * @param ctx the parse tree
	 */
	enterIntegerLiteral?: (ctx: IntegerLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `CtoParser.integerLiteral`.
	 * @param ctx the parse tree
	 */
	exitIntegerLiteral?: (ctx: IntegerLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `CtoParser.floatLiteral`.
	 * @param ctx the parse tree
	 */
	enterFloatLiteral?: (ctx: FloatLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `CtoParser.floatLiteral`.
	 * @param ctx the parse tree
	 */
	exitFloatLiteral?: (ctx: FloatLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `CtoParser.decorator`.
	 * @param ctx the parse tree
	 */
	enterDecorator?: (ctx: DecoratorContext) => void;
	/**
	 * Exit a parse tree produced by `CtoParser.decorator`.
	 * @param ctx the parse tree
	 */
	exitDecorator?: (ctx: DecoratorContext) => void;

	/**
	 * Enter a parse tree produced by `CtoParser.elementValuePair`.
	 * @param ctx the parse tree
	 */
	enterElementValuePair?: (ctx: ElementValuePairContext) => void;
	/**
	 * Exit a parse tree produced by `CtoParser.elementValuePair`.
	 * @param ctx the parse tree
	 */
	exitElementValuePair?: (ctx: ElementValuePairContext) => void;

	/**
	 * Enter a parse tree produced by `CtoParser.square`.
	 * @param ctx the parse tree
	 */
	enterSquare?: (ctx: SquareContext) => void;
	/**
	 * Exit a parse tree produced by `CtoParser.square`.
	 * @param ctx the parse tree
	 */
	exitSquare?: (ctx: SquareContext) => void;
}

