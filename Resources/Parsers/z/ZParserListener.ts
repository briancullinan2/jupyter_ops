// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/z/ZParser.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `ZParser`.
 */
export interface ZParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `GivenTypesParagraph`
	 * labeled alternative in `ZParser.paragraph`.
	 * @param ctx the parse tree
	 */
	enterGivenTypesParagraph?: (ctx: GivenTypesParagraphContext) => void;
	/**
	 * Exit a parse tree produced by the `GivenTypesParagraph`
	 * labeled alternative in `ZParser.paragraph`.
	 * @param ctx the parse tree
	 */
	exitGivenTypesParagraph?: (ctx: GivenTypesParagraphContext) => void;

	/**
	 * Enter a parse tree produced by the `AxiomaticDescriptionParagraph`
	 * labeled alternative in `ZParser.paragraph`.
	 * @param ctx the parse tree
	 */
	enterAxiomaticDescriptionParagraph?: (ctx: AxiomaticDescriptionParagraphContext) => void;
	/**
	 * Exit a parse tree produced by the `AxiomaticDescriptionParagraph`
	 * labeled alternative in `ZParser.paragraph`.
	 * @param ctx the parse tree
	 */
	exitAxiomaticDescriptionParagraph?: (ctx: AxiomaticDescriptionParagraphContext) => void;

	/**
	 * Enter a parse tree produced by the `SchemaDefinitionParagraph`
	 * labeled alternative in `ZParser.paragraph`.
	 * @param ctx the parse tree
	 */
	enterSchemaDefinitionParagraph?: (ctx: SchemaDefinitionParagraphContext) => void;
	/**
	 * Exit a parse tree produced by the `SchemaDefinitionParagraph`
	 * labeled alternative in `ZParser.paragraph`.
	 * @param ctx the parse tree
	 */
	exitSchemaDefinitionParagraph?: (ctx: SchemaDefinitionParagraphContext) => void;

	/**
	 * Enter a parse tree produced by the `GenericAxiomaticDescriptionParagraph`
	 * labeled alternative in `ZParser.paragraph`.
	 * @param ctx the parse tree
	 */
	enterGenericAxiomaticDescriptionParagraph?: (ctx: GenericAxiomaticDescriptionParagraphContext) => void;
	/**
	 * Exit a parse tree produced by the `GenericAxiomaticDescriptionParagraph`
	 * labeled alternative in `ZParser.paragraph`.
	 * @param ctx the parse tree
	 */
	exitGenericAxiomaticDescriptionParagraph?: (ctx: GenericAxiomaticDescriptionParagraphContext) => void;

	/**
	 * Enter a parse tree produced by the `GenericSchemaDefinitionParagraph`
	 * labeled alternative in `ZParser.paragraph`.
	 * @param ctx the parse tree
	 */
	enterGenericSchemaDefinitionParagraph?: (ctx: GenericSchemaDefinitionParagraphContext) => void;
	/**
	 * Exit a parse tree produced by the `GenericSchemaDefinitionParagraph`
	 * labeled alternative in `ZParser.paragraph`.
	 * @param ctx the parse tree
	 */
	exitGenericSchemaDefinitionParagraph?: (ctx: GenericSchemaDefinitionParagraphContext) => void;

	/**
	 * Enter a parse tree produced by the `HorizontalDefinitionParagraph`
	 * labeled alternative in `ZParser.paragraph`.
	 * @param ctx the parse tree
	 */
	enterHorizontalDefinitionParagraph?: (ctx: HorizontalDefinitionParagraphContext) => void;
	/**
	 * Exit a parse tree produced by the `HorizontalDefinitionParagraph`
	 * labeled alternative in `ZParser.paragraph`.
	 * @param ctx the parse tree
	 */
	exitHorizontalDefinitionParagraph?: (ctx: HorizontalDefinitionParagraphContext) => void;

	/**
	 * Enter a parse tree produced by the `GenericHorizontalDefinitionParagraph`
	 * labeled alternative in `ZParser.paragraph`.
	 * @param ctx the parse tree
	 */
	enterGenericHorizontalDefinitionParagraph?: (ctx: GenericHorizontalDefinitionParagraphContext) => void;
	/**
	 * Exit a parse tree produced by the `GenericHorizontalDefinitionParagraph`
	 * labeled alternative in `ZParser.paragraph`.
	 * @param ctx the parse tree
	 */
	exitGenericHorizontalDefinitionParagraph?: (ctx: GenericHorizontalDefinitionParagraphContext) => void;

	/**
	 * Enter a parse tree produced by the `GenericOperatorDefinitionParagraph`
	 * labeled alternative in `ZParser.paragraph`.
	 * @param ctx the parse tree
	 */
	enterGenericOperatorDefinitionParagraph?: (ctx: GenericOperatorDefinitionParagraphContext) => void;
	/**
	 * Exit a parse tree produced by the `GenericOperatorDefinitionParagraph`
	 * labeled alternative in `ZParser.paragraph`.
	 * @param ctx the parse tree
	 */
	exitGenericOperatorDefinitionParagraph?: (ctx: GenericOperatorDefinitionParagraphContext) => void;

	/**
	 * Enter a parse tree produced by the `FreeTypesParagraph`
	 * labeled alternative in `ZParser.paragraph`.
	 * @param ctx the parse tree
	 */
	enterFreeTypesParagraph?: (ctx: FreeTypesParagraphContext) => void;
	/**
	 * Exit a parse tree produced by the `FreeTypesParagraph`
	 * labeled alternative in `ZParser.paragraph`.
	 * @param ctx the parse tree
	 */
	exitFreeTypesParagraph?: (ctx: FreeTypesParagraphContext) => void;

	/**
	 * Enter a parse tree produced by the `ConjectureParagraph`
	 * labeled alternative in `ZParser.paragraph`.
	 * @param ctx the parse tree
	 */
	enterConjectureParagraph?: (ctx: ConjectureParagraphContext) => void;
	/**
	 * Exit a parse tree produced by the `ConjectureParagraph`
	 * labeled alternative in `ZParser.paragraph`.
	 * @param ctx the parse tree
	 */
	exitConjectureParagraph?: (ctx: ConjectureParagraphContext) => void;

	/**
	 * Enter a parse tree produced by the `GenericConjectureParagraph`
	 * labeled alternative in `ZParser.paragraph`.
	 * @param ctx the parse tree
	 */
	enterGenericConjectureParagraph?: (ctx: GenericConjectureParagraphContext) => void;
	/**
	 * Exit a parse tree produced by the `GenericConjectureParagraph`
	 * labeled alternative in `ZParser.paragraph`.
	 * @param ctx the parse tree
	 */
	exitGenericConjectureParagraph?: (ctx: GenericConjectureParagraphContext) => void;

	/**
	 * Enter a parse tree produced by the `OperatorTemplateParagraph`
	 * labeled alternative in `ZParser.paragraph`.
	 * @param ctx the parse tree
	 */
	enterOperatorTemplateParagraph?: (ctx: OperatorTemplateParagraphContext) => void;
	/**
	 * Exit a parse tree produced by the `OperatorTemplateParagraph`
	 * labeled alternative in `ZParser.paragraph`.
	 * @param ctx the parse tree
	 */
	exitOperatorTemplateParagraph?: (ctx: OperatorTemplateParagraphContext) => void;

	/**
	 * Enter a parse tree produced by the `InheritingSection`
	 * labeled alternative in `ZParser.section`.
	 * @param ctx the parse tree
	 */
	enterInheritingSection?: (ctx: InheritingSectionContext) => void;
	/**
	 * Exit a parse tree produced by the `InheritingSection`
	 * labeled alternative in `ZParser.section`.
	 * @param ctx the parse tree
	 */
	exitInheritingSection?: (ctx: InheritingSectionContext) => void;

	/**
	 * Enter a parse tree produced by the `BaseSection`
	 * labeled alternative in `ZParser.section`.
	 * @param ctx the parse tree
	 */
	enterBaseSection?: (ctx: BaseSectionContext) => void;
	/**
	 * Exit a parse tree produced by the `BaseSection`
	 * labeled alternative in `ZParser.section`.
	 * @param ctx the parse tree
	 */
	exitBaseSection?: (ctx: BaseSectionContext) => void;

	/**
	 * Enter a parse tree produced by the `NewlineConjunctionPredicate`
	 * labeled alternative in `ZParser.predicate`.
	 * @param ctx the parse tree
	 */
	enterNewlineConjunctionPredicate?: (ctx: NewlineConjunctionPredicateContext) => void;
	/**
	 * Exit a parse tree produced by the `NewlineConjunctionPredicate`
	 * labeled alternative in `ZParser.predicate`.
	 * @param ctx the parse tree
	 */
	exitNewlineConjunctionPredicate?: (ctx: NewlineConjunctionPredicateContext) => void;

	/**
	 * Enter a parse tree produced by the `SemicolonConjunctionPredicate`
	 * labeled alternative in `ZParser.predicate`.
	 * @param ctx the parse tree
	 */
	enterSemicolonConjunctionPredicate?: (ctx: SemicolonConjunctionPredicateContext) => void;
	/**
	 * Exit a parse tree produced by the `SemicolonConjunctionPredicate`
	 * labeled alternative in `ZParser.predicate`.
	 * @param ctx the parse tree
	 */
	exitSemicolonConjunctionPredicate?: (ctx: SemicolonConjunctionPredicateContext) => void;

	/**
	 * Enter a parse tree produced by the `UniversalQuantificationPredicate`
	 * labeled alternative in `ZParser.predicate`.
	 * @param ctx the parse tree
	 */
	enterUniversalQuantificationPredicate?: (ctx: UniversalQuantificationPredicateContext) => void;
	/**
	 * Exit a parse tree produced by the `UniversalQuantificationPredicate`
	 * labeled alternative in `ZParser.predicate`.
	 * @param ctx the parse tree
	 */
	exitUniversalQuantificationPredicate?: (ctx: UniversalQuantificationPredicateContext) => void;

	/**
	 * Enter a parse tree produced by the `ExistentialQuantificationPredicate`
	 * labeled alternative in `ZParser.predicate`.
	 * @param ctx the parse tree
	 */
	enterExistentialQuantificationPredicate?: (ctx: ExistentialQuantificationPredicateContext) => void;
	/**
	 * Exit a parse tree produced by the `ExistentialQuantificationPredicate`
	 * labeled alternative in `ZParser.predicate`.
	 * @param ctx the parse tree
	 */
	exitExistentialQuantificationPredicate?: (ctx: ExistentialQuantificationPredicateContext) => void;

	/**
	 * Enter a parse tree produced by the `UniqueExistentialQuantificationPredicate`
	 * labeled alternative in `ZParser.predicate`.
	 * @param ctx the parse tree
	 */
	enterUniqueExistentialQuantificationPredicate?: (ctx: UniqueExistentialQuantificationPredicateContext) => void;
	/**
	 * Exit a parse tree produced by the `UniqueExistentialQuantificationPredicate`
	 * labeled alternative in `ZParser.predicate`.
	 * @param ctx the parse tree
	 */
	exitUniqueExistentialQuantificationPredicate?: (ctx: UniqueExistentialQuantificationPredicateContext) => void;

	/**
	 * Enter a parse tree produced by the `EquivalencePredicate`
	 * labeled alternative in `ZParser.predicate`.
	 * @param ctx the parse tree
	 */
	enterEquivalencePredicate?: (ctx: EquivalencePredicateContext) => void;
	/**
	 * Exit a parse tree produced by the `EquivalencePredicate`
	 * labeled alternative in `ZParser.predicate`.
	 * @param ctx the parse tree
	 */
	exitEquivalencePredicate?: (ctx: EquivalencePredicateContext) => void;

	/**
	 * Enter a parse tree produced by the `ImplicationPredicate`
	 * labeled alternative in `ZParser.predicate`.
	 * @param ctx the parse tree
	 */
	enterImplicationPredicate?: (ctx: ImplicationPredicateContext) => void;
	/**
	 * Exit a parse tree produced by the `ImplicationPredicate`
	 * labeled alternative in `ZParser.predicate`.
	 * @param ctx the parse tree
	 */
	exitImplicationPredicate?: (ctx: ImplicationPredicateContext) => void;

	/**
	 * Enter a parse tree produced by the `DisjunctionPredicate`
	 * labeled alternative in `ZParser.predicate`.
	 * @param ctx the parse tree
	 */
	enterDisjunctionPredicate?: (ctx: DisjunctionPredicateContext) => void;
	/**
	 * Exit a parse tree produced by the `DisjunctionPredicate`
	 * labeled alternative in `ZParser.predicate`.
	 * @param ctx the parse tree
	 */
	exitDisjunctionPredicate?: (ctx: DisjunctionPredicateContext) => void;

	/**
	 * Enter a parse tree produced by the `ConjunctionPredicate`
	 * labeled alternative in `ZParser.predicate`.
	 * @param ctx the parse tree
	 */
	enterConjunctionPredicate?: (ctx: ConjunctionPredicateContext) => void;
	/**
	 * Exit a parse tree produced by the `ConjunctionPredicate`
	 * labeled alternative in `ZParser.predicate`.
	 * @param ctx the parse tree
	 */
	exitConjunctionPredicate?: (ctx: ConjunctionPredicateContext) => void;

	/**
	 * Enter a parse tree produced by the `NegationPredicate`
	 * labeled alternative in `ZParser.predicate`.
	 * @param ctx the parse tree
	 */
	enterNegationPredicate?: (ctx: NegationPredicateContext) => void;
	/**
	 * Exit a parse tree produced by the `NegationPredicate`
	 * labeled alternative in `ZParser.predicate`.
	 * @param ctx the parse tree
	 */
	exitNegationPredicate?: (ctx: NegationPredicateContext) => void;

	/**
	 * Enter a parse tree produced by the `RelationOperatorApplicationPredicate`
	 * labeled alternative in `ZParser.predicate`.
	 * @param ctx the parse tree
	 */
	enterRelationOperatorApplicationPredicate?: (ctx: RelationOperatorApplicationPredicateContext) => void;
	/**
	 * Exit a parse tree produced by the `RelationOperatorApplicationPredicate`
	 * labeled alternative in `ZParser.predicate`.
	 * @param ctx the parse tree
	 */
	exitRelationOperatorApplicationPredicate?: (ctx: RelationOperatorApplicationPredicateContext) => void;

	/**
	 * Enter a parse tree produced by the `SchemaPredicatePredicate`
	 * labeled alternative in `ZParser.predicate`.
	 * @param ctx the parse tree
	 */
	enterSchemaPredicatePredicate?: (ctx: SchemaPredicatePredicateContext) => void;
	/**
	 * Exit a parse tree produced by the `SchemaPredicatePredicate`
	 * labeled alternative in `ZParser.predicate`.
	 * @param ctx the parse tree
	 */
	exitSchemaPredicatePredicate?: (ctx: SchemaPredicatePredicateContext) => void;

	/**
	 * Enter a parse tree produced by the `TruthPredicate`
	 * labeled alternative in `ZParser.predicate`.
	 * @param ctx the parse tree
	 */
	enterTruthPredicate?: (ctx: TruthPredicateContext) => void;
	/**
	 * Exit a parse tree produced by the `TruthPredicate`
	 * labeled alternative in `ZParser.predicate`.
	 * @param ctx the parse tree
	 */
	exitTruthPredicate?: (ctx: TruthPredicateContext) => void;

	/**
	 * Enter a parse tree produced by the `FalsityPredicate`
	 * labeled alternative in `ZParser.predicate`.
	 * @param ctx the parse tree
	 */
	enterFalsityPredicate?: (ctx: FalsityPredicateContext) => void;
	/**
	 * Exit a parse tree produced by the `FalsityPredicate`
	 * labeled alternative in `ZParser.predicate`.
	 * @param ctx the parse tree
	 */
	exitFalsityPredicate?: (ctx: FalsityPredicateContext) => void;

	/**
	 * Enter a parse tree produced by the `ParenthesizedPredicate`
	 * labeled alternative in `ZParser.predicate`.
	 * @param ctx the parse tree
	 */
	enterParenthesizedPredicate?: (ctx: ParenthesizedPredicateContext) => void;
	/**
	 * Exit a parse tree produced by the `ParenthesizedPredicate`
	 * labeled alternative in `ZParser.predicate`.
	 * @param ctx the parse tree
	 */
	exitParenthesizedPredicate?: (ctx: ParenthesizedPredicateContext) => void;

	/**
	 * Enter a parse tree produced by the `SchemaUniversalQuantificationExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 */
	enterSchemaUniversalQuantificationExpression?: (ctx: SchemaUniversalQuantificationExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `SchemaUniversalQuantificationExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 */
	exitSchemaUniversalQuantificationExpression?: (ctx: SchemaUniversalQuantificationExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `SchemaExistentialQuantificationExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 */
	enterSchemaExistentialQuantificationExpression?: (ctx: SchemaExistentialQuantificationExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `SchemaExistentialQuantificationExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 */
	exitSchemaExistentialQuantificationExpression?: (ctx: SchemaExistentialQuantificationExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `SchemaUniqueExistentialQuantificationExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 */
	enterSchemaUniqueExistentialQuantificationExpression?: (ctx: SchemaUniqueExistentialQuantificationExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `SchemaUniqueExistentialQuantificationExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 */
	exitSchemaUniqueExistentialQuantificationExpression?: (ctx: SchemaUniqueExistentialQuantificationExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `FunctionConstructionExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 */
	enterFunctionConstructionExpression?: (ctx: FunctionConstructionExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `FunctionConstructionExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 */
	exitFunctionConstructionExpression?: (ctx: FunctionConstructionExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `DefiniteDescriptionExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 */
	enterDefiniteDescriptionExpression?: (ctx: DefiniteDescriptionExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `DefiniteDescriptionExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 */
	exitDefiniteDescriptionExpression?: (ctx: DefiniteDescriptionExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `SubstitutionExpressionExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 */
	enterSubstitutionExpressionExpression?: (ctx: SubstitutionExpressionExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `SubstitutionExpressionExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 */
	exitSubstitutionExpressionExpression?: (ctx: SubstitutionExpressionExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `SchemaEquivalenceExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 */
	enterSchemaEquivalenceExpression?: (ctx: SchemaEquivalenceExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `SchemaEquivalenceExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 */
	exitSchemaEquivalenceExpression?: (ctx: SchemaEquivalenceExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `SchemaImplicationExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 */
	enterSchemaImplicationExpression?: (ctx: SchemaImplicationExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `SchemaImplicationExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 */
	exitSchemaImplicationExpression?: (ctx: SchemaImplicationExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `SchemaDisjunctionExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 */
	enterSchemaDisjunctionExpression?: (ctx: SchemaDisjunctionExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `SchemaDisjunctionExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 */
	exitSchemaDisjunctionExpression?: (ctx: SchemaDisjunctionExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `SchemaConjunctionExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 */
	enterSchemaConjunctionExpression?: (ctx: SchemaConjunctionExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `SchemaConjunctionExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 */
	exitSchemaConjunctionExpression?: (ctx: SchemaConjunctionExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `SchemaNegationExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 */
	enterSchemaNegationExpression?: (ctx: SchemaNegationExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `SchemaNegationExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 */
	exitSchemaNegationExpression?: (ctx: SchemaNegationExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `ConditionalExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 */
	enterConditionalExpression?: (ctx: ConditionalExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `ConditionalExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 */
	exitConditionalExpression?: (ctx: ConditionalExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `SchemaCompositionExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 */
	enterSchemaCompositionExpression?: (ctx: SchemaCompositionExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `SchemaCompositionExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 */
	exitSchemaCompositionExpression?: (ctx: SchemaCompositionExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `SchemaPipingExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 */
	enterSchemaPipingExpression?: (ctx: SchemaPipingExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `SchemaPipingExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 */
	exitSchemaPipingExpression?: (ctx: SchemaPipingExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `SchemaHidingExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 */
	enterSchemaHidingExpression?: (ctx: SchemaHidingExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `SchemaHidingExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 */
	exitSchemaHidingExpression?: (ctx: SchemaHidingExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `SchemaProjectionExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 */
	enterSchemaProjectionExpression?: (ctx: SchemaProjectionExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `SchemaProjectionExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 */
	exitSchemaProjectionExpression?: (ctx: SchemaProjectionExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `SchemaPreconditionExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 */
	enterSchemaPreconditionExpression?: (ctx: SchemaPreconditionExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `SchemaPreconditionExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 */
	exitSchemaPreconditionExpression?: (ctx: SchemaPreconditionExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `CartesianProductExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 */
	enterCartesianProductExpression?: (ctx: CartesianProductExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `CartesianProductExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 */
	exitCartesianProductExpression?: (ctx: CartesianProductExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `PowersetExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 */
	enterPowersetExpression?: (ctx: PowersetExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `PowersetExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 */
	exitPowersetExpression?: (ctx: PowersetExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `PrefixApplicationExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 */
	enterPrefixApplicationExpression?: (ctx: PrefixApplicationExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `PrefixApplicationExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 */
	exitPrefixApplicationExpression?: (ctx: PrefixApplicationExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `GenericPrefixApplicationExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 */
	enterGenericPrefixApplicationExpression?: (ctx: GenericPrefixApplicationExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `GenericPrefixApplicationExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 */
	exitGenericPrefixApplicationExpression?: (ctx: GenericPrefixApplicationExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `PostfixApplicationExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 */
	enterPostfixApplicationExpression?: (ctx: PostfixApplicationExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `PostfixApplicationExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 */
	exitPostfixApplicationExpression?: (ctx: PostfixApplicationExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `GenericPostfixApplicationExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 */
	enterGenericPostfixApplicationExpression?: (ctx: GenericPostfixApplicationExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `GenericPostfixApplicationExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 */
	exitGenericPostfixApplicationExpression?: (ctx: GenericPostfixApplicationExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `InfixLeftApplicationExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 */
	enterInfixLeftApplicationExpression?: (ctx: InfixLeftApplicationExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `InfixLeftApplicationExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 */
	exitInfixLeftApplicationExpression?: (ctx: InfixLeftApplicationExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `InfixRightApplicationExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 */
	enterInfixRightApplicationExpression?: (ctx: InfixRightApplicationExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `InfixRightApplicationExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 */
	exitInfixRightApplicationExpression?: (ctx: InfixRightApplicationExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `GenericInfixApplicationExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 */
	enterGenericInfixApplicationExpression?: (ctx: GenericInfixApplicationExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `GenericInfixApplicationExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 */
	exitGenericInfixApplicationExpression?: (ctx: GenericInfixApplicationExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `NofixApplicationExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 */
	enterNofixApplicationExpression?: (ctx: NofixApplicationExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `NofixApplicationExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 */
	exitNofixApplicationExpression?: (ctx: NofixApplicationExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `ApplicationExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 */
	enterApplicationExpression?: (ctx: ApplicationExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `ApplicationExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 */
	exitApplicationExpression?: (ctx: ApplicationExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `SchemaDecorationExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 */
	enterSchemaDecorationExpression?: (ctx: SchemaDecorationExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `SchemaDecorationExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 */
	exitSchemaDecorationExpression?: (ctx: SchemaDecorationExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `SchemaRenamingExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 */
	enterSchemaRenamingExpression?: (ctx: SchemaRenamingExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `SchemaRenamingExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 */
	exitSchemaRenamingExpression?: (ctx: SchemaRenamingExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `BindingSelectionExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 */
	enterBindingSelectionExpression?: (ctx: BindingSelectionExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `BindingSelectionExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 */
	exitBindingSelectionExpression?: (ctx: BindingSelectionExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `TupleSelectionExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 */
	enterTupleSelectionExpression?: (ctx: TupleSelectionExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `TupleSelectionExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 */
	exitTupleSelectionExpression?: (ctx: TupleSelectionExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `BindingConstructionExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 */
	enterBindingConstructionExpression?: (ctx: BindingConstructionExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `BindingConstructionExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 */
	exitBindingConstructionExpression?: (ctx: BindingConstructionExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `ReferenceExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 */
	enterReferenceExpression?: (ctx: ReferenceExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `ReferenceExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 */
	exitReferenceExpression?: (ctx: ReferenceExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `GenericInstantiationExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 */
	enterGenericInstantiationExpression?: (ctx: GenericInstantiationExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `GenericInstantiationExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 */
	exitGenericInstantiationExpression?: (ctx: GenericInstantiationExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `NumberLiteralExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 */
	enterNumberLiteralExpression?: (ctx: NumberLiteralExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `NumberLiteralExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 */
	exitNumberLiteralExpression?: (ctx: NumberLiteralExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `SetExtensionExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 */
	enterSetExtensionExpression?: (ctx: SetExtensionExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `SetExtensionExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 */
	exitSetExtensionExpression?: (ctx: SetExtensionExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `SetComprehensionExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 */
	enterSetComprehensionExpression?: (ctx: SetComprehensionExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `SetComprehensionExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 */
	exitSetComprehensionExpression?: (ctx: SetComprehensionExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `CharacteristicSetComprehensionExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 */
	enterCharacteristicSetComprehensionExpression?: (ctx: CharacteristicSetComprehensionExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `CharacteristicSetComprehensionExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 */
	exitCharacteristicSetComprehensionExpression?: (ctx: CharacteristicSetComprehensionExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `SchemaConstructionExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 */
	enterSchemaConstructionExpression?: (ctx: SchemaConstructionExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `SchemaConstructionExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 */
	exitSchemaConstructionExpression?: (ctx: SchemaConstructionExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `BindingExtensionExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 */
	enterBindingExtensionExpression?: (ctx: BindingExtensionExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `BindingExtensionExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 */
	exitBindingExtensionExpression?: (ctx: BindingExtensionExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `TupleExtensionExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 */
	enterTupleExtensionExpression?: (ctx: TupleExtensionExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `TupleExtensionExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 */
	exitTupleExtensionExpression?: (ctx: TupleExtensionExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `CharacteristicDefiniteDescriptionExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 */
	enterCharacteristicDefiniteDescriptionExpression?: (ctx: CharacteristicDefiniteDescriptionExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `CharacteristicDefiniteDescriptionExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 */
	exitCharacteristicDefiniteDescriptionExpression?: (ctx: CharacteristicDefiniteDescriptionExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `ParenthesizedExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 */
	enterParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `ParenthesizedExpression`
	 * labeled alternative in `ZParser.expression`.
	 * @param ctx the parse tree
	 */
	exitParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `ZParser.specification`.
	 * @param ctx the parse tree
	 */
	enterSpecification?: (ctx: SpecificationContext) => void;
	/**
	 * Exit a parse tree produced by `ZParser.specification`.
	 * @param ctx the parse tree
	 */
	exitSpecification?: (ctx: SpecificationContext) => void;

	/**
	 * Enter a parse tree produced by `ZParser.section`.
	 * @param ctx the parse tree
	 */
	enterSection?: (ctx: SectionContext) => void;
	/**
	 * Exit a parse tree produced by `ZParser.section`.
	 * @param ctx the parse tree
	 */
	exitSection?: (ctx: SectionContext) => void;

	/**
	 * Enter a parse tree produced by `ZParser.paragraph`.
	 * @param ctx the parse tree
	 */
	enterParagraph?: (ctx: ParagraphContext) => void;
	/**
	 * Exit a parse tree produced by `ZParser.paragraph`.
	 * @param ctx the parse tree
	 */
	exitParagraph?: (ctx: ParagraphContext) => void;

	/**
	 * Enter a parse tree produced by `ZParser.freetype`.
	 * @param ctx the parse tree
	 */
	enterFreetype?: (ctx: FreetypeContext) => void;
	/**
	 * Exit a parse tree produced by `ZParser.freetype`.
	 * @param ctx the parse tree
	 */
	exitFreetype?: (ctx: FreetypeContext) => void;

	/**
	 * Enter a parse tree produced by `ZParser.branch`.
	 * @param ctx the parse tree
	 */
	enterBranch?: (ctx: BranchContext) => void;
	/**
	 * Exit a parse tree produced by `ZParser.branch`.
	 * @param ctx the parse tree
	 */
	exitBranch?: (ctx: BranchContext) => void;

	/**
	 * Enter a parse tree produced by `ZParser.formals`.
	 * @param ctx the parse tree
	 */
	enterFormals?: (ctx: FormalsContext) => void;
	/**
	 * Exit a parse tree produced by `ZParser.formals`.
	 * @param ctx the parse tree
	 */
	exitFormals?: (ctx: FormalsContext) => void;

	/**
	 * Enter a parse tree produced by `ZParser.predicate`.
	 * @param ctx the parse tree
	 */
	enterPredicate?: (ctx: PredicateContext) => void;
	/**
	 * Exit a parse tree produced by `ZParser.predicate`.
	 * @param ctx the parse tree
	 */
	exitPredicate?: (ctx: PredicateContext) => void;

	/**
	 * Enter a parse tree produced by `ZParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `ZParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `ZParser.schemaText`.
	 * @param ctx the parse tree
	 */
	enterSchemaText?: (ctx: SchemaTextContext) => void;
	/**
	 * Exit a parse tree produced by `ZParser.schemaText`.
	 * @param ctx the parse tree
	 */
	exitSchemaText?: (ctx: SchemaTextContext) => void;

	/**
	 * Enter a parse tree produced by `ZParser.declPart`.
	 * @param ctx the parse tree
	 */
	enterDeclPart?: (ctx: DeclPartContext) => void;
	/**
	 * Exit a parse tree produced by `ZParser.declPart`.
	 * @param ctx the parse tree
	 */
	exitDeclPart?: (ctx: DeclPartContext) => void;

	/**
	 * Enter a parse tree produced by `ZParser.declNameExpression`.
	 * @param ctx the parse tree
	 */
	enterDeclNameExpression?: (ctx: DeclNameExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `ZParser.declNameExpression`.
	 * @param ctx the parse tree
	 */
	exitDeclNameExpression?: (ctx: DeclNameExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `ZParser.declaration`.
	 * @param ctx the parse tree
	 */
	enterDeclaration?: (ctx: DeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `ZParser.declaration`.
	 * @param ctx the parse tree
	 */
	exitDeclaration?: (ctx: DeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `ZParser.operatorTemplate`.
	 * @param ctx the parse tree
	 */
	enterOperatorTemplate?: (ctx: OperatorTemplateContext) => void;
	/**
	 * Exit a parse tree produced by `ZParser.operatorTemplate`.
	 * @param ctx the parse tree
	 */
	exitOperatorTemplate?: (ctx: OperatorTemplateContext) => void;

	/**
	 * Enter a parse tree produced by `ZParser.categoryTemplate`.
	 * @param ctx the parse tree
	 */
	enterCategoryTemplate?: (ctx: CategoryTemplateContext) => void;
	/**
	 * Exit a parse tree produced by `ZParser.categoryTemplate`.
	 * @param ctx the parse tree
	 */
	exitCategoryTemplate?: (ctx: CategoryTemplateContext) => void;

	/**
	 * Enter a parse tree produced by `ZParser.prec`.
	 * @param ctx the parse tree
	 */
	enterPrec?: (ctx: PrecContext) => void;
	/**
	 * Exit a parse tree produced by `ZParser.prec`.
	 * @param ctx the parse tree
	 */
	exitPrec?: (ctx: PrecContext) => void;

	/**
	 * Enter a parse tree produced by `ZParser.assoc`.
	 * @param ctx the parse tree
	 */
	enterAssoc?: (ctx: AssocContext) => void;
	/**
	 * Exit a parse tree produced by `ZParser.assoc`.
	 * @param ctx the parse tree
	 */
	exitAssoc?: (ctx: AssocContext) => void;

	/**
	 * Enter a parse tree produced by `ZParser.template`.
	 * @param ctx the parse tree
	 */
	enterTemplate?: (ctx: TemplateContext) => void;
	/**
	 * Exit a parse tree produced by `ZParser.template`.
	 * @param ctx the parse tree
	 */
	exitTemplate?: (ctx: TemplateContext) => void;

	/**
	 * Enter a parse tree produced by `ZParser.prefixTemplate`.
	 * @param ctx the parse tree
	 */
	enterPrefixTemplate?: (ctx: PrefixTemplateContext) => void;
	/**
	 * Exit a parse tree produced by `ZParser.prefixTemplate`.
	 * @param ctx the parse tree
	 */
	exitPrefixTemplate?: (ctx: PrefixTemplateContext) => void;

	/**
	 * Enter a parse tree produced by `ZParser.postfixTemplate`.
	 * @param ctx the parse tree
	 */
	enterPostfixTemplate?: (ctx: PostfixTemplateContext) => void;
	/**
	 * Exit a parse tree produced by `ZParser.postfixTemplate`.
	 * @param ctx the parse tree
	 */
	exitPostfixTemplate?: (ctx: PostfixTemplateContext) => void;

	/**
	 * Enter a parse tree produced by `ZParser.infixTemplate`.
	 * @param ctx the parse tree
	 */
	enterInfixTemplate?: (ctx: InfixTemplateContext) => void;
	/**
	 * Exit a parse tree produced by `ZParser.infixTemplate`.
	 * @param ctx the parse tree
	 */
	exitInfixTemplate?: (ctx: InfixTemplateContext) => void;

	/**
	 * Enter a parse tree produced by `ZParser.nofixTemplate`.
	 * @param ctx the parse tree
	 */
	enterNofixTemplate?: (ctx: NofixTemplateContext) => void;
	/**
	 * Exit a parse tree produced by `ZParser.nofixTemplate`.
	 * @param ctx the parse tree
	 */
	exitNofixTemplate?: (ctx: NofixTemplateContext) => void;

	/**
	 * Enter a parse tree produced by `ZParser.declName`.
	 * @param ctx the parse tree
	 */
	enterDeclName?: (ctx: DeclNameContext) => void;
	/**
	 * Exit a parse tree produced by `ZParser.declName`.
	 * @param ctx the parse tree
	 */
	exitDeclName?: (ctx: DeclNameContext) => void;

	/**
	 * Enter a parse tree produced by `ZParser.refName`.
	 * @param ctx the parse tree
	 */
	enterRefName?: (ctx: RefNameContext) => void;
	/**
	 * Exit a parse tree produced by `ZParser.refName`.
	 * @param ctx the parse tree
	 */
	exitRefName?: (ctx: RefNameContext) => void;

	/**
	 * Enter a parse tree produced by `ZParser.opName`.
	 * @param ctx the parse tree
	 */
	enterOpName?: (ctx: OpNameContext) => void;
	/**
	 * Exit a parse tree produced by `ZParser.opName`.
	 * @param ctx the parse tree
	 */
	exitOpName?: (ctx: OpNameContext) => void;

	/**
	 * Enter a parse tree produced by `ZParser.prefixName`.
	 * @param ctx the parse tree
	 */
	enterPrefixName?: (ctx: PrefixNameContext) => void;
	/**
	 * Exit a parse tree produced by `ZParser.prefixName`.
	 * @param ctx the parse tree
	 */
	exitPrefixName?: (ctx: PrefixNameContext) => void;

	/**
	 * Enter a parse tree produced by `ZParser.postfixName`.
	 * @param ctx the parse tree
	 */
	enterPostfixName?: (ctx: PostfixNameContext) => void;
	/**
	 * Exit a parse tree produced by `ZParser.postfixName`.
	 * @param ctx the parse tree
	 */
	exitPostfixName?: (ctx: PostfixNameContext) => void;

	/**
	 * Enter a parse tree produced by `ZParser.infixName`.
	 * @param ctx the parse tree
	 */
	enterInfixName?: (ctx: InfixNameContext) => void;
	/**
	 * Exit a parse tree produced by `ZParser.infixName`.
	 * @param ctx the parse tree
	 */
	exitInfixName?: (ctx: InfixNameContext) => void;

	/**
	 * Enter a parse tree produced by `ZParser.nofixName`.
	 * @param ctx the parse tree
	 */
	enterNofixName?: (ctx: NofixNameContext) => void;
	/**
	 * Exit a parse tree produced by `ZParser.nofixName`.
	 * @param ctx the parse tree
	 */
	exitNofixName?: (ctx: NofixNameContext) => void;

	/**
	 * Enter a parse tree produced by `ZParser.genName`.
	 * @param ctx the parse tree
	 */
	enterGenName?: (ctx: GenNameContext) => void;
	/**
	 * Exit a parse tree produced by `ZParser.genName`.
	 * @param ctx the parse tree
	 */
	exitGenName?: (ctx: GenNameContext) => void;

	/**
	 * Enter a parse tree produced by `ZParser.prefixGenName`.
	 * @param ctx the parse tree
	 */
	enterPrefixGenName?: (ctx: PrefixGenNameContext) => void;
	/**
	 * Exit a parse tree produced by `ZParser.prefixGenName`.
	 * @param ctx the parse tree
	 */
	exitPrefixGenName?: (ctx: PrefixGenNameContext) => void;

	/**
	 * Enter a parse tree produced by `ZParser.postfixGenName`.
	 * @param ctx the parse tree
	 */
	enterPostfixGenName?: (ctx: PostfixGenNameContext) => void;
	/**
	 * Exit a parse tree produced by `ZParser.postfixGenName`.
	 * @param ctx the parse tree
	 */
	exitPostfixGenName?: (ctx: PostfixGenNameContext) => void;

	/**
	 * Enter a parse tree produced by `ZParser.infixGenName`.
	 * @param ctx the parse tree
	 */
	enterInfixGenName?: (ctx: InfixGenNameContext) => void;
	/**
	 * Exit a parse tree produced by `ZParser.infixGenName`.
	 * @param ctx the parse tree
	 */
	exitInfixGenName?: (ctx: InfixGenNameContext) => void;

	/**
	 * Enter a parse tree produced by `ZParser.nofixGenName`.
	 * @param ctx the parse tree
	 */
	enterNofixGenName?: (ctx: NofixGenNameContext) => void;
	/**
	 * Exit a parse tree produced by `ZParser.nofixGenName`.
	 * @param ctx the parse tree
	 */
	exitNofixGenName?: (ctx: NofixGenNameContext) => void;

	/**
	 * Enter a parse tree produced by `ZParser.relation`.
	 * @param ctx the parse tree
	 */
	enterRelation?: (ctx: RelationContext) => void;
	/**
	 * Exit a parse tree produced by `ZParser.relation`.
	 * @param ctx the parse tree
	 */
	exitRelation?: (ctx: RelationContext) => void;

	/**
	 * Enter a parse tree produced by `ZParser.prefixRel`.
	 * @param ctx the parse tree
	 */
	enterPrefixRel?: (ctx: PrefixRelContext) => void;
	/**
	 * Exit a parse tree produced by `ZParser.prefixRel`.
	 * @param ctx the parse tree
	 */
	exitPrefixRel?: (ctx: PrefixRelContext) => void;

	/**
	 * Enter a parse tree produced by `ZParser.postfixRel`.
	 * @param ctx the parse tree
	 */
	enterPostfixRel?: (ctx: PostfixRelContext) => void;
	/**
	 * Exit a parse tree produced by `ZParser.postfixRel`.
	 * @param ctx the parse tree
	 */
	exitPostfixRel?: (ctx: PostfixRelContext) => void;

	/**
	 * Enter a parse tree produced by `ZParser.infixRel`.
	 * @param ctx the parse tree
	 */
	enterInfixRel?: (ctx: InfixRelContext) => void;
	/**
	 * Exit a parse tree produced by `ZParser.infixRel`.
	 * @param ctx the parse tree
	 */
	exitInfixRel?: (ctx: InfixRelContext) => void;

	/**
	 * Enter a parse tree produced by `ZParser.nofixRel`.
	 * @param ctx the parse tree
	 */
	enterNofixRel?: (ctx: NofixRelContext) => void;
	/**
	 * Exit a parse tree produced by `ZParser.nofixRel`.
	 * @param ctx the parse tree
	 */
	exitNofixRel?: (ctx: NofixRelContext) => void;

	/**
	 * Enter a parse tree produced by `ZParser.application`.
	 * @param ctx the parse tree
	 */
	enterApplication?: (ctx: ApplicationContext) => void;
	/**
	 * Exit a parse tree produced by `ZParser.application`.
	 * @param ctx the parse tree
	 */
	exitApplication?: (ctx: ApplicationContext) => void;

	/**
	 * Enter a parse tree produced by `ZParser.prefixApp`.
	 * @param ctx the parse tree
	 */
	enterPrefixApp?: (ctx: PrefixAppContext) => void;
	/**
	 * Exit a parse tree produced by `ZParser.prefixApp`.
	 * @param ctx the parse tree
	 */
	exitPrefixApp?: (ctx: PrefixAppContext) => void;

	/**
	 * Enter a parse tree produced by `ZParser.postfixApp`.
	 * @param ctx the parse tree
	 */
	enterPostfixApp?: (ctx: PostfixAppContext) => void;
	/**
	 * Exit a parse tree produced by `ZParser.postfixApp`.
	 * @param ctx the parse tree
	 */
	exitPostfixApp?: (ctx: PostfixAppContext) => void;

	/**
	 * Enter a parse tree produced by `ZParser.infixApp`.
	 * @param ctx the parse tree
	 */
	enterInfixApp?: (ctx: InfixAppContext) => void;
	/**
	 * Exit a parse tree produced by `ZParser.infixApp`.
	 * @param ctx the parse tree
	 */
	exitInfixApp?: (ctx: InfixAppContext) => void;

	/**
	 * Enter a parse tree produced by `ZParser.nofixApp`.
	 * @param ctx the parse tree
	 */
	enterNofixApp?: (ctx: NofixAppContext) => void;
	/**
	 * Exit a parse tree produced by `ZParser.nofixApp`.
	 * @param ctx the parse tree
	 */
	exitNofixApp?: (ctx: NofixAppContext) => void;

	/**
	 * Enter a parse tree produced by `ZParser.expSep`.
	 * @param ctx the parse tree
	 */
	enterExpSep?: (ctx: ExpSepContext) => void;
	/**
	 * Exit a parse tree produced by `ZParser.expSep`.
	 * @param ctx the parse tree
	 */
	exitExpSep?: (ctx: ExpSepContext) => void;

	/**
	 * Enter a parse tree produced by `ZParser.expressionList`.
	 * @param ctx the parse tree
	 */
	enterExpressionList?: (ctx: ExpressionListContext) => void;
	/**
	 * Exit a parse tree produced by `ZParser.expressionList`.
	 * @param ctx the parse tree
	 */
	exitExpressionList?: (ctx: ExpressionListContext) => void;
}

