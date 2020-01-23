// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/z/ZParser.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { GivenTypesParagraphContext } from "./ZParser";
import { AxiomaticDescriptionParagraphContext } from "./ZParser";
import { SchemaDefinitionParagraphContext } from "./ZParser";
import { GenericAxiomaticDescriptionParagraphContext } from "./ZParser";
import { GenericSchemaDefinitionParagraphContext } from "./ZParser";
import { HorizontalDefinitionParagraphContext } from "./ZParser";
import { GenericHorizontalDefinitionParagraphContext } from "./ZParser";
import { GenericOperatorDefinitionParagraphContext } from "./ZParser";
import { FreeTypesParagraphContext } from "./ZParser";
import { ConjectureParagraphContext } from "./ZParser";
import { GenericConjectureParagraphContext } from "./ZParser";
import { OperatorTemplateParagraphContext } from "./ZParser";
import { InheritingSectionContext } from "./ZParser";
import { BaseSectionContext } from "./ZParser";
import { NewlineConjunctionPredicateContext } from "./ZParser";
import { SemicolonConjunctionPredicateContext } from "./ZParser";
import { UniversalQuantificationPredicateContext } from "./ZParser";
import { ExistentialQuantificationPredicateContext } from "./ZParser";
import { UniqueExistentialQuantificationPredicateContext } from "./ZParser";
import { EquivalencePredicateContext } from "./ZParser";
import { ImplicationPredicateContext } from "./ZParser";
import { DisjunctionPredicateContext } from "./ZParser";
import { ConjunctionPredicateContext } from "./ZParser";
import { NegationPredicateContext } from "./ZParser";
import { RelationOperatorApplicationPredicateContext } from "./ZParser";
import { SchemaPredicatePredicateContext } from "./ZParser";
import { TruthPredicateContext } from "./ZParser";
import { FalsityPredicateContext } from "./ZParser";
import { ParenthesizedPredicateContext } from "./ZParser";
import { SchemaUniversalQuantificationExpressionContext } from "./ZParser";
import { SchemaExistentialQuantificationExpressionContext } from "./ZParser";
import { SchemaUniqueExistentialQuantificationExpressionContext } from "./ZParser";
import { FunctionConstructionExpressionContext } from "./ZParser";
import { DefiniteDescriptionExpressionContext } from "./ZParser";
import { SubstitutionExpressionExpressionContext } from "./ZParser";
import { SchemaEquivalenceExpressionContext } from "./ZParser";
import { SchemaImplicationExpressionContext } from "./ZParser";
import { SchemaDisjunctionExpressionContext } from "./ZParser";
import { SchemaConjunctionExpressionContext } from "./ZParser";
import { SchemaNegationExpressionContext } from "./ZParser";
import { ConditionalExpressionContext } from "./ZParser";
import { SchemaCompositionExpressionContext } from "./ZParser";
import { SchemaPipingExpressionContext } from "./ZParser";
import { SchemaHidingExpressionContext } from "./ZParser";
import { SchemaProjectionExpressionContext } from "./ZParser";
import { SchemaPreconditionExpressionContext } from "./ZParser";
import { CartesianProductExpressionContext } from "./ZParser";
import { PowersetExpressionContext } from "./ZParser";
import { PrefixApplicationExpressionContext } from "./ZParser";
import { GenericPrefixApplicationExpressionContext } from "./ZParser";
import { PostfixApplicationExpressionContext } from "./ZParser";
import { GenericPostfixApplicationExpressionContext } from "./ZParser";
import { InfixLeftApplicationExpressionContext } from "./ZParser";
import { InfixRightApplicationExpressionContext } from "./ZParser";
import { GenericInfixApplicationExpressionContext } from "./ZParser";
import { NofixApplicationExpressionContext } from "./ZParser";
import { ApplicationExpressionContext } from "./ZParser";
import { SchemaDecorationExpressionContext } from "./ZParser";
import { SchemaRenamingExpressionContext } from "./ZParser";
import { BindingSelectionExpressionContext } from "./ZParser";
import { TupleSelectionExpressionContext } from "./ZParser";
import { BindingConstructionExpressionContext } from "./ZParser";
import { ReferenceExpressionContext } from "./ZParser";
import { GenericInstantiationExpressionContext } from "./ZParser";
import { NumberLiteralExpressionContext } from "./ZParser";
import { SetExtensionExpressionContext } from "./ZParser";
import { SetComprehensionExpressionContext } from "./ZParser";
import { CharacteristicSetComprehensionExpressionContext } from "./ZParser";
import { SchemaConstructionExpressionContext } from "./ZParser";
import { BindingExtensionExpressionContext } from "./ZParser";
import { TupleExtensionExpressionContext } from "./ZParser";
import { CharacteristicDefiniteDescriptionExpressionContext } from "./ZParser";
import { ParenthesizedExpressionContext } from "./ZParser";
import { SpecificationContext } from "./ZParser";
import { SectionContext } from "./ZParser";
import { ParagraphContext } from "./ZParser";
import { FreetypeContext } from "./ZParser";
import { BranchContext } from "./ZParser";
import { FormalsContext } from "./ZParser";
import { PredicateContext } from "./ZParser";
import { ExpressionContext } from "./ZParser";
import { SchemaTextContext } from "./ZParser";
import { DeclPartContext } from "./ZParser";
import { DeclNameExpressionContext } from "./ZParser";
import { DeclarationContext } from "./ZParser";
import { OperatorTemplateContext } from "./ZParser";
import { CategoryTemplateContext } from "./ZParser";
import { PrecContext } from "./ZParser";
import { AssocContext } from "./ZParser";
import { TemplateContext } from "./ZParser";
import { PrefixTemplateContext } from "./ZParser";
import { PostfixTemplateContext } from "./ZParser";
import { InfixTemplateContext } from "./ZParser";
import { NofixTemplateContext } from "./ZParser";
import { DeclNameContext } from "./ZParser";
import { RefNameContext } from "./ZParser";
import { OpNameContext } from "./ZParser";
import { PrefixNameContext } from "./ZParser";
import { PostfixNameContext } from "./ZParser";
import { InfixNameContext } from "./ZParser";
import { NofixNameContext } from "./ZParser";
import { GenNameContext } from "./ZParser";
import { PrefixGenNameContext } from "./ZParser";
import { PostfixGenNameContext } from "./ZParser";
import { InfixGenNameContext } from "./ZParser";
import { NofixGenNameContext } from "./ZParser";
import { RelationContext } from "./ZParser";
import { PrefixRelContext } from "./ZParser";
import { PostfixRelContext } from "./ZParser";
import { InfixRelContext } from "./ZParser";
import { NofixRelContext } from "./ZParser";
import { ApplicationContext } from "./ZParser";
import { PrefixAppContext } from "./ZParser";
import { PostfixAppContext } from "./ZParser";
import { InfixAppContext } from "./ZParser";
import { NofixAppContext } from "./ZParser";
import { ExpSepContext } from "./ZParser";
import { ExpressionListContext } from "./ZParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `ZParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface ZParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `GivenTypesParagraph`
	 * labeled alternative in `ZParser.paragraph`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGivenTypesParagraph?: (ctx: GivenTypesParagraphContext) => Result;

	/**
	 * Visit a parse tree produced by the `AxiomaticDescriptionParagraph`
	 * labeled alternative in `ZParser.paragraph`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAxiomaticDescriptionParagraph?: (ctx: AxiomaticDescriptionParagraphContext) => Result;

	/**
	 * Visit a parse tree produced by the `SchemaDefinitionParagraph`
	 * labeled alternative in `ZParser.paragraph`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchemaDefinitionParagraph?: (ctx: SchemaDefinitionParagraphContext) => Result;

	/**
	 * Visit a parse tree produced by the `GenericAxiomaticDescriptionParagraph`
	 * labeled alternative in `ZParser.paragraph`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGenericAxiomaticDescriptionParagraph?: (ctx: GenericAxiomaticDescriptionParagraphContext) => Result;

	/**
	 * Visit a parse tree produced by the `GenericSchemaDefinitionParagraph`
	 * labeled alternative in `ZParser.paragraph`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGenericSchemaDefinitionParagraph?: (ctx: GenericSchemaDefinitionParagraphContext) => Result;

	/**
	 * Visit a parse tree produced by the `HorizontalDefinitionParagraph`
	 * labeled alternative in `ZParser.paragraph`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHorizontalDefinitionParagraph?: (ctx: HorizontalDefinitionParagraphContext) => Result;

	/**
	 * Visit a parse tree produced by the `GenericHorizontalDefinitionParagraph`
	 * labeled alternative in `ZParser.paragraph`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGenericHorizontalDefinitionParagraph?: (ctx: GenericHorizontalDefinitionParagraphContext) => Result;

	/**
	 * Visit a parse tree produced by the `GenericOperatorDefinitionParagraph`
	 * labeled alternative in `ZParser.paragraph`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGenericOperatorDefinitionParagraph?: (ctx: GenericOperatorDefinitionParagraphContext) => Result;

	/**
	 * Visit a parse tree produced by the `FreeTypesParagraph`
	 * labeled alternative in `ZParser.paragraph`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFreeTypesParagraph?: (ctx: FreeTypesParagraphContext) => Result;

	/**
	 * Visit a parse tree produced by the `ConjectureParagraph`
	 * labeled alternative in `ZParser.paragraph`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConjectureParagraph?: (ctx: ConjectureParagraphContext) => Result;

	/**
	 * Visit a parse tree produced by the `GenericConjectureParagraph`
	 * labeled alternative in `ZParser.paragraph`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGenericConjectureParagraph?: (ctx: GenericConjectureParagraphContext) => Result;

	/**
	 * Visit a parse tree produced by the `OperatorTemplateParagraph`
	 * labeled alternative in `ZParser.paragraph`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOperatorTemplateParagraph?: (ctx: OperatorTemplateParagraphContext) => Result;

	/**
	 * Visit a parse tree produced by the `InheritingSection`
	 * labeled alternative in `ZParser.section`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInheritingSection?: (ctx: InheritingSectionContext) => Result;

	/**
	 * Visit a parse tree produced by the `BaseSection`
	 * labeled alternative in `ZParser.section`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBaseSection?: (ctx: BaseSectionContext) => Result;

	/**
	 * Visit a parse tree produced by the `NewlineConjunctionPredicate`
	 * labeled alternative in `ZParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNewlineConjunctionPredicate?: (ctx: NewlineConjunctionPredicateContext) => Result;

	/**
	 * Visit a parse tree produced by the `SemicolonConjunctionPredicate`
	 * labeled alternative in `ZParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSemicolonConjunctionPredicate?: (ctx: SemicolonConjunctionPredicateContext) => Result;

	/**
	 * Visit a parse tree produced by the `UniversalQuantificationPredicate`
	 * labeled alternative in `ZParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUniversalQuantificationPredicate?: (ctx: UniversalQuantificationPredicateContext) => Result;

	/**
	 * Visit a parse tree produced by the `ExistentialQuantificationPredicate`
	 * labeled alternative in `ZParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExistentialQuantificationPredicate?: (ctx: ExistentialQuantificationPredicateContext) => Result;

	/**
	 * Visit a parse tree produced by the `UniqueExistentialQuantificationPredicate`
	 * labeled alternative in `ZParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUniqueExistentialQuantificationPredicate?: (ctx: UniqueExistentialQuantificationPredicateContext) => Result;

	/**
	 * Visit a parse tree produced by the `EquivalencePredicate`
	 * labeled alternative in `ZParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEquivalencePredicate?: (ctx: EquivalencePredicateContext) => Result;

	/**
	 * Visit a parse tree produced by the `ImplicationPredicate`
	 * labeled alternative in `ZParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImplicationPredicate?: (ctx: ImplicationPredicateContext) => Result;

	/**
	 * Visit a parse tree produced by the `DisjunctionPredicate`
	 * labeled alternative in `ZParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDisjunctionPredicate?: (ctx: DisjunctionPredicateContext) => Result;

	/**
	 * Visit a parse tree produced by the `ConjunctionPredicate`
	 * labeled alternative in `ZParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConjunctionPredicate?: (ctx: ConjunctionPredicateContext) => Result;

	/**
	 * Visit a parse tree produced by the `NegationPredicate`
	 * labeled alternative in `ZParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNegationPredicate?: (ctx: NegationPredicateContext) => Result;

	/**
	 * Visit a parse tree produced by the `RelationOperatorApplicationPredicate`
	 * labeled alternative in `ZParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelationOperatorApplicationPredicate?: (ctx: RelationOperatorApplicationPredicateContext) => Result;

	/**
	 * Visit a parse tree produced by the `SchemaPredicatePredicate`
	 * labeled alternative in `ZParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchemaPredicatePredicate?: (ctx: SchemaPredicatePredicateContext) => Result;

	/**
	 * Visit a parse tree produced by the `TruthPredicate`
	 * labeled alternative in `ZParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTruthPredicate?: (ctx: TruthPredicateContext) => Result;

	/**
	 * Visit a parse tree produced by the `FalsityPredicate`
	 * labeled alternative in `ZParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFalsityPredicate?: (ctx: FalsityPredicateContext) => Result;

	/**
	 * Visit a parse tree produced by the `ParenthesizedPredicate`
	 * labeled alternative in `ZParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParenthesizedPredicate?: (ctx: ParenthesizedPredicateContext) => Result;

	/**
	 * Visit a parse tree produced by the `SchemaUniversalQuantificationExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchemaUniversalQuantificationExpression?: (ctx: SchemaUniversalQuantificationExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `SchemaExistentialQuantificationExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchemaExistentialQuantificationExpression?: (ctx: SchemaExistentialQuantificationExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `SchemaUniqueExistentialQuantificationExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchemaUniqueExistentialQuantificationExpression?: (ctx: SchemaUniqueExistentialQuantificationExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `FunctionConstructionExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionConstructionExpression?: (ctx: FunctionConstructionExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `DefiniteDescriptionExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefiniteDescriptionExpression?: (ctx: DefiniteDescriptionExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `SubstitutionExpressionExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubstitutionExpressionExpression?: (ctx: SubstitutionExpressionExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `SchemaEquivalenceExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchemaEquivalenceExpression?: (ctx: SchemaEquivalenceExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `SchemaImplicationExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchemaImplicationExpression?: (ctx: SchemaImplicationExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `SchemaDisjunctionExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchemaDisjunctionExpression?: (ctx: SchemaDisjunctionExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `SchemaConjunctionExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchemaConjunctionExpression?: (ctx: SchemaConjunctionExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `SchemaNegationExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchemaNegationExpression?: (ctx: SchemaNegationExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `ConditionalExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditionalExpression?: (ctx: ConditionalExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `SchemaCompositionExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchemaCompositionExpression?: (ctx: SchemaCompositionExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `SchemaPipingExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchemaPipingExpression?: (ctx: SchemaPipingExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `SchemaHidingExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchemaHidingExpression?: (ctx: SchemaHidingExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `SchemaProjectionExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchemaProjectionExpression?: (ctx: SchemaProjectionExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `SchemaPreconditionExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchemaPreconditionExpression?: (ctx: SchemaPreconditionExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `CartesianProductExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCartesianProductExpression?: (ctx: CartesianProductExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `PowersetExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPowersetExpression?: (ctx: PowersetExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `PrefixApplicationExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrefixApplicationExpression?: (ctx: PrefixApplicationExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `GenericPrefixApplicationExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGenericPrefixApplicationExpression?: (ctx: GenericPrefixApplicationExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `PostfixApplicationExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPostfixApplicationExpression?: (ctx: PostfixApplicationExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `GenericPostfixApplicationExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGenericPostfixApplicationExpression?: (ctx: GenericPostfixApplicationExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `InfixLeftApplicationExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInfixLeftApplicationExpression?: (ctx: InfixLeftApplicationExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `InfixRightApplicationExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInfixRightApplicationExpression?: (ctx: InfixRightApplicationExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `GenericInfixApplicationExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGenericInfixApplicationExpression?: (ctx: GenericInfixApplicationExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `NofixApplicationExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNofixApplicationExpression?: (ctx: NofixApplicationExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `ApplicationExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitApplicationExpression?: (ctx: ApplicationExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `SchemaDecorationExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchemaDecorationExpression?: (ctx: SchemaDecorationExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `SchemaRenamingExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchemaRenamingExpression?: (ctx: SchemaRenamingExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `BindingSelectionExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBindingSelectionExpression?: (ctx: BindingSelectionExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `TupleSelectionExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTupleSelectionExpression?: (ctx: TupleSelectionExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `BindingConstructionExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBindingConstructionExpression?: (ctx: BindingConstructionExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `ReferenceExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReferenceExpression?: (ctx: ReferenceExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `GenericInstantiationExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGenericInstantiationExpression?: (ctx: GenericInstantiationExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `NumberLiteralExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumberLiteralExpression?: (ctx: NumberLiteralExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `SetExtensionExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetExtensionExpression?: (ctx: SetExtensionExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `SetComprehensionExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetComprehensionExpression?: (ctx: SetComprehensionExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `CharacteristicSetComprehensionExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCharacteristicSetComprehensionExpression?: (ctx: CharacteristicSetComprehensionExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `SchemaConstructionExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchemaConstructionExpression?: (ctx: SchemaConstructionExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `BindingExtensionExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBindingExtensionExpression?: (ctx: BindingExtensionExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `TupleExtensionExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTupleExtensionExpression?: (ctx: TupleExtensionExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `CharacteristicDefiniteDescriptionExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCharacteristicDefiniteDescriptionExpression?: (ctx: CharacteristicDefiniteDescriptionExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `ParenthesizedExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `ZParser.specification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSpecification?: (ctx: SpecificationContext) => Result;

	/**
	 * Visit a parse tree produced by `ZParser.section`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSection?: (ctx: SectionContext) => Result;

	/**
	 * Visit a parse tree produced by `ZParser.paragraph`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParagraph?: (ctx: ParagraphContext) => Result;

	/**
	 * Visit a parse tree produced by `ZParser.freetype`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFreetype?: (ctx: FreetypeContext) => Result;

	/**
	 * Visit a parse tree produced by `ZParser.branch`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBranch?: (ctx: BranchContext) => Result;

	/**
	 * Visit a parse tree produced by `ZParser.formals`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFormals?: (ctx: FormalsContext) => Result;

	/**
	 * Visit a parse tree produced by `ZParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPredicate?: (ctx: PredicateContext) => Result;

	/**
	 * Visit a parse tree produced by `ZParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `ZParser.schemaText`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchemaText?: (ctx: SchemaTextContext) => Result;

	/**
	 * Visit a parse tree produced by `ZParser.declPart`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclPart?: (ctx: DeclPartContext) => Result;

	/**
	 * Visit a parse tree produced by `ZParser.declNameExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclNameExpression?: (ctx: DeclNameExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `ZParser.declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclaration?: (ctx: DeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `ZParser.operatorTemplate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOperatorTemplate?: (ctx: OperatorTemplateContext) => Result;

	/**
	 * Visit a parse tree produced by `ZParser.categoryTemplate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCategoryTemplate?: (ctx: CategoryTemplateContext) => Result;

	/**
	 * Visit a parse tree produced by `ZParser.prec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrec?: (ctx: PrecContext) => Result;

	/**
	 * Visit a parse tree produced by `ZParser.assoc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssoc?: (ctx: AssocContext) => Result;

	/**
	 * Visit a parse tree produced by `ZParser.template`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTemplate?: (ctx: TemplateContext) => Result;

	/**
	 * Visit a parse tree produced by `ZParser.prefixTemplate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrefixTemplate?: (ctx: PrefixTemplateContext) => Result;

	/**
	 * Visit a parse tree produced by `ZParser.postfixTemplate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPostfixTemplate?: (ctx: PostfixTemplateContext) => Result;

	/**
	 * Visit a parse tree produced by `ZParser.infixTemplate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInfixTemplate?: (ctx: InfixTemplateContext) => Result;

	/**
	 * Visit a parse tree produced by `ZParser.nofixTemplate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNofixTemplate?: (ctx: NofixTemplateContext) => Result;

	/**
	 * Visit a parse tree produced by `ZParser.declName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclName?: (ctx: DeclNameContext) => Result;

	/**
	 * Visit a parse tree produced by `ZParser.refName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRefName?: (ctx: RefNameContext) => Result;

	/**
	 * Visit a parse tree produced by `ZParser.opName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOpName?: (ctx: OpNameContext) => Result;

	/**
	 * Visit a parse tree produced by `ZParser.prefixName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrefixName?: (ctx: PrefixNameContext) => Result;

	/**
	 * Visit a parse tree produced by `ZParser.postfixName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPostfixName?: (ctx: PostfixNameContext) => Result;

	/**
	 * Visit a parse tree produced by `ZParser.infixName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInfixName?: (ctx: InfixNameContext) => Result;

	/**
	 * Visit a parse tree produced by `ZParser.nofixName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNofixName?: (ctx: NofixNameContext) => Result;

	/**
	 * Visit a parse tree produced by `ZParser.genName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGenName?: (ctx: GenNameContext) => Result;

	/**
	 * Visit a parse tree produced by `ZParser.prefixGenName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrefixGenName?: (ctx: PrefixGenNameContext) => Result;

	/**
	 * Visit a parse tree produced by `ZParser.postfixGenName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPostfixGenName?: (ctx: PostfixGenNameContext) => Result;

	/**
	 * Visit a parse tree produced by `ZParser.infixGenName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInfixGenName?: (ctx: InfixGenNameContext) => Result;

	/**
	 * Visit a parse tree produced by `ZParser.nofixGenName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNofixGenName?: (ctx: NofixGenNameContext) => Result;

	/**
	 * Visit a parse tree produced by `ZParser.relation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelation?: (ctx: RelationContext) => Result;

	/**
	 * Visit a parse tree produced by `ZParser.prefixRel`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrefixRel?: (ctx: PrefixRelContext) => Result;

	/**
	 * Visit a parse tree produced by `ZParser.postfixRel`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPostfixRel?: (ctx: PostfixRelContext) => Result;

	/**
	 * Visit a parse tree produced by `ZParser.infixRel`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInfixRel?: (ctx: InfixRelContext) => Result;

	/**
	 * Visit a parse tree produced by `ZParser.nofixRel`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNofixRel?: (ctx: NofixRelContext) => Result;

	/**
	 * Visit a parse tree produced by `ZParser.application`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitApplication?: (ctx: ApplicationContext) => Result;

	/**
	 * Visit a parse tree produced by `ZParser.prefixApp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrefixApp?: (ctx: PrefixAppContext) => Result;

	/**
	 * Visit a parse tree produced by `ZParser.postfixApp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPostfixApp?: (ctx: PostfixAppContext) => Result;

	/**
	 * Visit a parse tree produced by `ZParser.infixApp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInfixApp?: (ctx: InfixAppContext) => Result;

	/**
	 * Visit a parse tree produced by `ZParser.nofixApp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNofixApp?: (ctx: NofixAppContext) => Result;

	/**
	 * Visit a parse tree produced by `ZParser.expSep`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpSep?: (ctx: ExpSepContext) => Result;

	/**
	 * Visit a parse tree produced by `ZParser.expressionList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionList?: (ctx: ExpressionListContext) => Result;
}

