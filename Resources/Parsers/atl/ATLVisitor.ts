// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/atl/ATL.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { UnitContext } from "./ATLParser";
import { ModuleContext } from "./ATLParser";
import { TargetModelPatternContext } from "./ATLParser";
import { SourceModelPatternContext } from "./ATLParser";
import { TransformationModeContext } from "./ATLParser";
import { LibraryContext } from "./ATLParser";
import { QueryContext } from "./ATLParser";
import { LibraryRefContext } from "./ATLParser";
import { ModuleElementContext } from "./ATLParser";
import { HelperContext } from "./ATLParser";
import { OclFeatureDefinitionContext } from "./ATLParser";
import { OclContextDefinitionContext } from "./ATLParser";
import { OclFeatureContext } from "./ATLParser";
import { OperationContext } from "./ATLParser";
import { ParameterContext } from "./ATLParser";
import { AttributeContext } from "./ATLParser";
import { AruleContext } from "./ATLParser";
import { MatchedRuleContext } from "./ATLParser";
import { LazyMatchedRuleContext } from "./ATLParser";
import { RuleVariableDeclarationContext } from "./ATLParser";
import { CalledRuleContext } from "./ATLParser";
import { InPatternContext } from "./ATLParser";
import { InPatternElementContext } from "./ATLParser";
import { SimpleInPatternElementContext } from "./ATLParser";
import { OutPatternContext } from "./ATLParser";
import { OutPatternElementContext } from "./ATLParser";
import { SimpleOutPatternElementContext } from "./ATLParser";
import { ForEachOutPatternElementContext } from "./ATLParser";
import { BindingContext } from "./ATLParser";
import { ActionBlockContext } from "./ATLParser";
import { StatementContext } from "./ATLParser";
import { BindingStatContext } from "./ATLParser";
import { ExpressionStatContext } from "./ATLParser";
import { IfStatContext } from "./ATLParser";
import { ForStatContext } from "./ATLParser";
import { OclModelContext } from "./ATLParser";
import { OclModelElementContext } from "./ATLParser";
import { OclExpressionContext } from "./ATLParser";
import { IteratorExpContext } from "./ATLParser";
import { IterateExpContext } from "./ATLParser";
import { CollectionOperationCallExpContext } from "./ATLParser";
import { OperationCallExpContext } from "./ATLParser";
import { NavigationOrAttributeCallExpContext } from "./ATLParser";
import { IteratorContext } from "./ATLParser";
import { OclUndefinedExpContext } from "./ATLParser";
import { PrimitiveExpContext } from "./ATLParser";
import { NumericExpContext } from "./ATLParser";
import { BooleanExpContext } from "./ATLParser";
import { IntegerExpContext } from "./ATLParser";
import { RealExpContext } from "./ATLParser";
import { StringExpContext } from "./ATLParser";
import { IfExpContext } from "./ATLParser";
import { VariableExpContext } from "./ATLParser";
import { SuperExpContext } from "./ATLParser";
import { LetExpContext } from "./ATLParser";
import { VariableDeclarationContext } from "./ATLParser";
import { EnumLiteralExpContext } from "./ATLParser";
import { CollectionExpContext } from "./ATLParser";
import { BagExpContext } from "./ATLParser";
import { SetExpContext } from "./ATLParser";
import { OrderedSetExpContext } from "./ATLParser";
import { SequenceExpContext } from "./ATLParser";
import { MapExpContext } from "./ATLParser";
import { MapElementContext } from "./ATLParser";
import { TupleExpContext } from "./ATLParser";
import { TuplePartContext } from "./ATLParser";
import { OclTypeContext } from "./ATLParser";
import { OclAnyTypeContext } from "./ATLParser";
import { TupleTypeContext } from "./ATLParser";
import { TupleTypeAttributeContext } from "./ATLParser";
import { MapTypeContext } from "./ATLParser";
import { PrimitiveContext } from "./ATLParser";
import { NumericTypeContext } from "./ATLParser";
import { IntegerTypeContext } from "./ATLParser";
import { RealTypeContext } from "./ATLParser";
import { BooleanTypeContext } from "./ATLParser";
import { StringTypeContext } from "./ATLParser";
import { CollectionTypeContext } from "./ATLParser";
import { BagTypeContext } from "./ATLParser";
import { SetTypeContext } from "./ATLParser";
import { OrderedSetTypeContext } from "./ATLParser";
import { SequenceTypeContext } from "./ATLParser";
import { Priority_0Context } from "./ATLParser";
import { Priority_1Context } from "./ATLParser";
import { Priority_2Context } from "./ATLParser";
import { Priority_3Context } from "./ATLParser";
import { Priority_4Context } from "./ATLParser";
import { Priority_5Context } from "./ATLParser";
import { MatchedRule_abstractContentsContext } from "./ATLParser";
import { OclType_abstractContentsContext } from "./ATLParser";
import { OclAnyType_abstractContentsContext } from "./ATLParser";
import { CollectionType_abstractContentsContext } from "./ATLParser";
import { Primary_oclExpressionContext } from "./ATLParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `ATLParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface ATLVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `ATLParser.unit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnit?: (ctx: UnitContext) => Result;

	/**
	 * Visit a parse tree produced by `ATLParser.module`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModule?: (ctx: ModuleContext) => Result;

	/**
	 * Visit a parse tree produced by `ATLParser.targetModelPattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTargetModelPattern?: (ctx: TargetModelPatternContext) => Result;

	/**
	 * Visit a parse tree produced by `ATLParser.sourceModelPattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSourceModelPattern?: (ctx: SourceModelPatternContext) => Result;

	/**
	 * Visit a parse tree produced by `ATLParser.transformationMode`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTransformationMode?: (ctx: TransformationModeContext) => Result;

	/**
	 * Visit a parse tree produced by `ATLParser.library`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLibrary?: (ctx: LibraryContext) => Result;

	/**
	 * Visit a parse tree produced by `ATLParser.query`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuery?: (ctx: QueryContext) => Result;

	/**
	 * Visit a parse tree produced by `ATLParser.libraryRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLibraryRef?: (ctx: LibraryRefContext) => Result;

	/**
	 * Visit a parse tree produced by `ATLParser.moduleElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModuleElement?: (ctx: ModuleElementContext) => Result;

	/**
	 * Visit a parse tree produced by `ATLParser.helper`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHelper?: (ctx: HelperContext) => Result;

	/**
	 * Visit a parse tree produced by `ATLParser.oclFeatureDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOclFeatureDefinition?: (ctx: OclFeatureDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `ATLParser.oclContextDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOclContextDefinition?: (ctx: OclContextDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `ATLParser.oclFeature`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOclFeature?: (ctx: OclFeatureContext) => Result;

	/**
	 * Visit a parse tree produced by `ATLParser.operation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOperation?: (ctx: OperationContext) => Result;

	/**
	 * Visit a parse tree produced by `ATLParser.parameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameter?: (ctx: ParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `ATLParser.attribute`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttribute?: (ctx: AttributeContext) => Result;

	/**
	 * Visit a parse tree produced by `ATLParser.arule`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArule?: (ctx: AruleContext) => Result;

	/**
	 * Visit a parse tree produced by `ATLParser.matchedRule`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMatchedRule?: (ctx: MatchedRuleContext) => Result;

	/**
	 * Visit a parse tree produced by `ATLParser.lazyMatchedRule`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLazyMatchedRule?: (ctx: LazyMatchedRuleContext) => Result;

	/**
	 * Visit a parse tree produced by `ATLParser.ruleVariableDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRuleVariableDeclaration?: (ctx: RuleVariableDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `ATLParser.calledRule`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCalledRule?: (ctx: CalledRuleContext) => Result;

	/**
	 * Visit a parse tree produced by `ATLParser.inPattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInPattern?: (ctx: InPatternContext) => Result;

	/**
	 * Visit a parse tree produced by `ATLParser.inPatternElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInPatternElement?: (ctx: InPatternElementContext) => Result;

	/**
	 * Visit a parse tree produced by `ATLParser.simpleInPatternElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimpleInPatternElement?: (ctx: SimpleInPatternElementContext) => Result;

	/**
	 * Visit a parse tree produced by `ATLParser.outPattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOutPattern?: (ctx: OutPatternContext) => Result;

	/**
	 * Visit a parse tree produced by `ATLParser.outPatternElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOutPatternElement?: (ctx: OutPatternElementContext) => Result;

	/**
	 * Visit a parse tree produced by `ATLParser.simpleOutPatternElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimpleOutPatternElement?: (ctx: SimpleOutPatternElementContext) => Result;

	/**
	 * Visit a parse tree produced by `ATLParser.forEachOutPatternElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForEachOutPatternElement?: (ctx: ForEachOutPatternElementContext) => Result;

	/**
	 * Visit a parse tree produced by `ATLParser.binding`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinding?: (ctx: BindingContext) => Result;

	/**
	 * Visit a parse tree produced by `ATLParser.actionBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitActionBlock?: (ctx: ActionBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `ATLParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `ATLParser.bindingStat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBindingStat?: (ctx: BindingStatContext) => Result;

	/**
	 * Visit a parse tree produced by `ATLParser.expressionStat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionStat?: (ctx: ExpressionStatContext) => Result;

	/**
	 * Visit a parse tree produced by `ATLParser.ifStat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfStat?: (ctx: IfStatContext) => Result;

	/**
	 * Visit a parse tree produced by `ATLParser.forStat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForStat?: (ctx: ForStatContext) => Result;

	/**
	 * Visit a parse tree produced by `ATLParser.oclModel`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOclModel?: (ctx: OclModelContext) => Result;

	/**
	 * Visit a parse tree produced by `ATLParser.oclModelElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOclModelElement?: (ctx: OclModelElementContext) => Result;

	/**
	 * Visit a parse tree produced by `ATLParser.oclExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOclExpression?: (ctx: OclExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `ATLParser.iteratorExp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIteratorExp?: (ctx: IteratorExpContext) => Result;

	/**
	 * Visit a parse tree produced by `ATLParser.iterateExp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIterateExp?: (ctx: IterateExpContext) => Result;

	/**
	 * Visit a parse tree produced by `ATLParser.collectionOperationCallExp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCollectionOperationCallExp?: (ctx: CollectionOperationCallExpContext) => Result;

	/**
	 * Visit a parse tree produced by `ATLParser.operationCallExp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOperationCallExp?: (ctx: OperationCallExpContext) => Result;

	/**
	 * Visit a parse tree produced by `ATLParser.navigationOrAttributeCallExp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNavigationOrAttributeCallExp?: (ctx: NavigationOrAttributeCallExpContext) => Result;

	/**
	 * Visit a parse tree produced by `ATLParser.iterator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIterator?: (ctx: IteratorContext) => Result;

	/**
	 * Visit a parse tree produced by `ATLParser.oclUndefinedExp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOclUndefinedExp?: (ctx: OclUndefinedExpContext) => Result;

	/**
	 * Visit a parse tree produced by `ATLParser.primitiveExp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimitiveExp?: (ctx: PrimitiveExpContext) => Result;

	/**
	 * Visit a parse tree produced by `ATLParser.numericExp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumericExp?: (ctx: NumericExpContext) => Result;

	/**
	 * Visit a parse tree produced by `ATLParser.booleanExp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanExp?: (ctx: BooleanExpContext) => Result;

	/**
	 * Visit a parse tree produced by `ATLParser.integerExp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntegerExp?: (ctx: IntegerExpContext) => Result;

	/**
	 * Visit a parse tree produced by `ATLParser.realExp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRealExp?: (ctx: RealExpContext) => Result;

	/**
	 * Visit a parse tree produced by `ATLParser.stringExp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringExp?: (ctx: StringExpContext) => Result;

	/**
	 * Visit a parse tree produced by `ATLParser.ifExp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfExp?: (ctx: IfExpContext) => Result;

	/**
	 * Visit a parse tree produced by `ATLParser.variableExp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableExp?: (ctx: VariableExpContext) => Result;

	/**
	 * Visit a parse tree produced by `ATLParser.superExp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSuperExp?: (ctx: SuperExpContext) => Result;

	/**
	 * Visit a parse tree produced by `ATLParser.letExp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLetExp?: (ctx: LetExpContext) => Result;

	/**
	 * Visit a parse tree produced by `ATLParser.variableDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDeclaration?: (ctx: VariableDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `ATLParser.enumLiteralExp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumLiteralExp?: (ctx: EnumLiteralExpContext) => Result;

	/**
	 * Visit a parse tree produced by `ATLParser.collectionExp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCollectionExp?: (ctx: CollectionExpContext) => Result;

	/**
	 * Visit a parse tree produced by `ATLParser.bagExp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBagExp?: (ctx: BagExpContext) => Result;

	/**
	 * Visit a parse tree produced by `ATLParser.setExp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetExp?: (ctx: SetExpContext) => Result;

	/**
	 * Visit a parse tree produced by `ATLParser.orderedSetExp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrderedSetExp?: (ctx: OrderedSetExpContext) => Result;

	/**
	 * Visit a parse tree produced by `ATLParser.sequenceExp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSequenceExp?: (ctx: SequenceExpContext) => Result;

	/**
	 * Visit a parse tree produced by `ATLParser.mapExp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMapExp?: (ctx: MapExpContext) => Result;

	/**
	 * Visit a parse tree produced by `ATLParser.mapElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMapElement?: (ctx: MapElementContext) => Result;

	/**
	 * Visit a parse tree produced by `ATLParser.tupleExp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTupleExp?: (ctx: TupleExpContext) => Result;

	/**
	 * Visit a parse tree produced by `ATLParser.tuplePart`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTuplePart?: (ctx: TuplePartContext) => Result;

	/**
	 * Visit a parse tree produced by `ATLParser.oclType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOclType?: (ctx: OclTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `ATLParser.oclAnyType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOclAnyType?: (ctx: OclAnyTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `ATLParser.tupleType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTupleType?: (ctx: TupleTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `ATLParser.tupleTypeAttribute`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTupleTypeAttribute?: (ctx: TupleTypeAttributeContext) => Result;

	/**
	 * Visit a parse tree produced by `ATLParser.mapType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMapType?: (ctx: MapTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `ATLParser.primitive`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimitive?: (ctx: PrimitiveContext) => Result;

	/**
	 * Visit a parse tree produced by `ATLParser.numericType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumericType?: (ctx: NumericTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `ATLParser.integerType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntegerType?: (ctx: IntegerTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `ATLParser.realType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRealType?: (ctx: RealTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `ATLParser.booleanType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanType?: (ctx: BooleanTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `ATLParser.stringType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringType?: (ctx: StringTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `ATLParser.collectionType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCollectionType?: (ctx: CollectionTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `ATLParser.bagType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBagType?: (ctx: BagTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `ATLParser.setType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetType?: (ctx: SetTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `ATLParser.orderedSetType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrderedSetType?: (ctx: OrderedSetTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `ATLParser.sequenceType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSequenceType?: (ctx: SequenceTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `ATLParser.priority_0`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPriority_0?: (ctx: Priority_0Context) => Result;

	/**
	 * Visit a parse tree produced by `ATLParser.priority_1`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPriority_1?: (ctx: Priority_1Context) => Result;

	/**
	 * Visit a parse tree produced by `ATLParser.priority_2`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPriority_2?: (ctx: Priority_2Context) => Result;

	/**
	 * Visit a parse tree produced by `ATLParser.priority_3`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPriority_3?: (ctx: Priority_3Context) => Result;

	/**
	 * Visit a parse tree produced by `ATLParser.priority_4`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPriority_4?: (ctx: Priority_4Context) => Result;

	/**
	 * Visit a parse tree produced by `ATLParser.priority_5`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPriority_5?: (ctx: Priority_5Context) => Result;

	/**
	 * Visit a parse tree produced by `ATLParser.matchedRule_abstractContents`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMatchedRule_abstractContents?: (ctx: MatchedRule_abstractContentsContext) => Result;

	/**
	 * Visit a parse tree produced by `ATLParser.oclType_abstractContents`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOclType_abstractContents?: (ctx: OclType_abstractContentsContext) => Result;

	/**
	 * Visit a parse tree produced by `ATLParser.oclAnyType_abstractContents`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOclAnyType_abstractContents?: (ctx: OclAnyType_abstractContentsContext) => Result;

	/**
	 * Visit a parse tree produced by `ATLParser.collectionType_abstractContents`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCollectionType_abstractContents?: (ctx: CollectionType_abstractContentsContext) => Result;

	/**
	 * Visit a parse tree produced by `ATLParser.primary_oclExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimary_oclExpression?: (ctx: Primary_oclExpressionContext) => Result;
}

