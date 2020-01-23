// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/cto/CtoParser.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `CtoParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface CtoParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `CtoParser.modelUnit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModelUnit?: (ctx: ModelUnitContext) => Result;

	/**
	 * Visit a parse tree produced by `CtoParser.namespaceDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamespaceDeclaration?: (ctx: NamespaceDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `CtoParser.importDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImportDeclaration?: (ctx: ImportDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `CtoParser.typeDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeDeclaration?: (ctx: TypeDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `CtoParser.classModifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassModifier?: (ctx: ClassModifierContext) => Result;

	/**
	 * Visit a parse tree produced by `CtoParser.assetDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssetDeclaration?: (ctx: AssetDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `CtoParser.conceptDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConceptDeclaration?: (ctx: ConceptDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `CtoParser.enumDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumDeclaration?: (ctx: EnumDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `CtoParser.enumConstant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumConstant?: (ctx: EnumConstantContext) => Result;

	/**
	 * Visit a parse tree produced by `CtoParser.eventDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEventDeclaration?: (ctx: EventDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `CtoParser.participantDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParticipantDeclaration?: (ctx: ParticipantDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `CtoParser.transactionDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTransactionDeclaration?: (ctx: TransactionDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `CtoParser.extendsOrIdentified`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExtendsOrIdentified?: (ctx: ExtendsOrIdentifiedContext) => Result;

	/**
	 * Visit a parse tree produced by `CtoParser.identified`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentified?: (ctx: IdentifiedContext) => Result;

	/**
	 * Visit a parse tree produced by `CtoParser.classBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassBody?: (ctx: ClassBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `CtoParser.classBodyDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassBodyDeclaration?: (ctx: ClassBodyDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `CtoParser.fieldDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldDeclaration?: (ctx: FieldDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `CtoParser.identifierField`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifierField?: (ctx: IdentifierFieldContext) => Result;

	/**
	 * Visit a parse tree produced by `CtoParser.numericField`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumericField?: (ctx: NumericFieldContext) => Result;

	/**
	 * Visit a parse tree produced by `CtoParser.numericPrimitive`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumericPrimitive?: (ctx: NumericPrimitiveContext) => Result;

	/**
	 * Visit a parse tree produced by `CtoParser.booleanField`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanField?: (ctx: BooleanFieldContext) => Result;

	/**
	 * Visit a parse tree produced by `CtoParser.dateField`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDateField?: (ctx: DateFieldContext) => Result;

	/**
	 * Visit a parse tree produced by `CtoParser.defaultDate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefaultDate?: (ctx: DefaultDateContext) => Result;

	/**
	 * Visit a parse tree produced by `CtoParser.regexDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRegexDeclaration?: (ctx: RegexDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `CtoParser.stringField`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringField?: (ctx: StringFieldContext) => Result;

	/**
	 * Visit a parse tree produced by `CtoParser.reference`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReference?: (ctx: ReferenceContext) => Result;

	/**
	 * Visit a parse tree produced by `CtoParser.qualifiedName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQualifiedName?: (ctx: QualifiedNameContext) => Result;

	/**
	 * Visit a parse tree produced by `CtoParser.rangeValidation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRangeValidation?: (ctx: RangeValidationContext) => Result;

	/**
	 * Visit a parse tree produced by `CtoParser.rangeDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRangeDeclaration?: (ctx: RangeDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `CtoParser.defaultBoolean`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefaultBoolean?: (ctx: DefaultBooleanContext) => Result;

	/**
	 * Visit a parse tree produced by `CtoParser.defaultString`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefaultString?: (ctx: DefaultStringContext) => Result;

	/**
	 * Visit a parse tree produced by `CtoParser.defaultNumber`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefaultNumber?: (ctx: DefaultNumberContext) => Result;

	/**
	 * Visit a parse tree produced by `CtoParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifier?: (ctx: IdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `CtoParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral?: (ctx: LiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `CtoParser.numberLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumberLiteral?: (ctx: NumberLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `CtoParser.stringLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringLiteral?: (ctx: StringLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `CtoParser.integerLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntegerLiteral?: (ctx: IntegerLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `CtoParser.floatLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFloatLiteral?: (ctx: FloatLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `CtoParser.decorator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDecorator?: (ctx: DecoratorContext) => Result;

	/**
	 * Visit a parse tree produced by `CtoParser.elementValuePair`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElementValuePair?: (ctx: ElementValuePairContext) => Result;

	/**
	 * Visit a parse tree produced by `CtoParser.square`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSquare?: (ctx: SquareContext) => Result;
}

