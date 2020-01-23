// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/atl/ATL.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `ATLParser`.
 */
export interface ATLListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `ATLParser.unit`.
	 * @param ctx the parse tree
	 */
	enterUnit?: (ctx: UnitContext) => void;
	/**
	 * Exit a parse tree produced by `ATLParser.unit`.
	 * @param ctx the parse tree
	 */
	exitUnit?: (ctx: UnitContext) => void;

	/**
	 * Enter a parse tree produced by `ATLParser.module`.
	 * @param ctx the parse tree
	 */
	enterModule?: (ctx: ModuleContext) => void;
	/**
	 * Exit a parse tree produced by `ATLParser.module`.
	 * @param ctx the parse tree
	 */
	exitModule?: (ctx: ModuleContext) => void;

	/**
	 * Enter a parse tree produced by `ATLParser.targetModelPattern`.
	 * @param ctx the parse tree
	 */
	enterTargetModelPattern?: (ctx: TargetModelPatternContext) => void;
	/**
	 * Exit a parse tree produced by `ATLParser.targetModelPattern`.
	 * @param ctx the parse tree
	 */
	exitTargetModelPattern?: (ctx: TargetModelPatternContext) => void;

	/**
	 * Enter a parse tree produced by `ATLParser.sourceModelPattern`.
	 * @param ctx the parse tree
	 */
	enterSourceModelPattern?: (ctx: SourceModelPatternContext) => void;
	/**
	 * Exit a parse tree produced by `ATLParser.sourceModelPattern`.
	 * @param ctx the parse tree
	 */
	exitSourceModelPattern?: (ctx: SourceModelPatternContext) => void;

	/**
	 * Enter a parse tree produced by `ATLParser.transformationMode`.
	 * @param ctx the parse tree
	 */
	enterTransformationMode?: (ctx: TransformationModeContext) => void;
	/**
	 * Exit a parse tree produced by `ATLParser.transformationMode`.
	 * @param ctx the parse tree
	 */
	exitTransformationMode?: (ctx: TransformationModeContext) => void;

	/**
	 * Enter a parse tree produced by `ATLParser.library`.
	 * @param ctx the parse tree
	 */
	enterLibrary?: (ctx: LibraryContext) => void;
	/**
	 * Exit a parse tree produced by `ATLParser.library`.
	 * @param ctx the parse tree
	 */
	exitLibrary?: (ctx: LibraryContext) => void;

	/**
	 * Enter a parse tree produced by `ATLParser.query`.
	 * @param ctx the parse tree
	 */
	enterQuery?: (ctx: QueryContext) => void;
	/**
	 * Exit a parse tree produced by `ATLParser.query`.
	 * @param ctx the parse tree
	 */
	exitQuery?: (ctx: QueryContext) => void;

	/**
	 * Enter a parse tree produced by `ATLParser.libraryRef`.
	 * @param ctx the parse tree
	 */
	enterLibraryRef?: (ctx: LibraryRefContext) => void;
	/**
	 * Exit a parse tree produced by `ATLParser.libraryRef`.
	 * @param ctx the parse tree
	 */
	exitLibraryRef?: (ctx: LibraryRefContext) => void;

	/**
	 * Enter a parse tree produced by `ATLParser.moduleElement`.
	 * @param ctx the parse tree
	 */
	enterModuleElement?: (ctx: ModuleElementContext) => void;
	/**
	 * Exit a parse tree produced by `ATLParser.moduleElement`.
	 * @param ctx the parse tree
	 */
	exitModuleElement?: (ctx: ModuleElementContext) => void;

	/**
	 * Enter a parse tree produced by `ATLParser.helper`.
	 * @param ctx the parse tree
	 */
	enterHelper?: (ctx: HelperContext) => void;
	/**
	 * Exit a parse tree produced by `ATLParser.helper`.
	 * @param ctx the parse tree
	 */
	exitHelper?: (ctx: HelperContext) => void;

	/**
	 * Enter a parse tree produced by `ATLParser.oclFeatureDefinition`.
	 * @param ctx the parse tree
	 */
	enterOclFeatureDefinition?: (ctx: OclFeatureDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `ATLParser.oclFeatureDefinition`.
	 * @param ctx the parse tree
	 */
	exitOclFeatureDefinition?: (ctx: OclFeatureDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `ATLParser.oclContextDefinition`.
	 * @param ctx the parse tree
	 */
	enterOclContextDefinition?: (ctx: OclContextDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `ATLParser.oclContextDefinition`.
	 * @param ctx the parse tree
	 */
	exitOclContextDefinition?: (ctx: OclContextDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `ATLParser.oclFeature`.
	 * @param ctx the parse tree
	 */
	enterOclFeature?: (ctx: OclFeatureContext) => void;
	/**
	 * Exit a parse tree produced by `ATLParser.oclFeature`.
	 * @param ctx the parse tree
	 */
	exitOclFeature?: (ctx: OclFeatureContext) => void;

	/**
	 * Enter a parse tree produced by `ATLParser.operation`.
	 * @param ctx the parse tree
	 */
	enterOperation?: (ctx: OperationContext) => void;
	/**
	 * Exit a parse tree produced by `ATLParser.operation`.
	 * @param ctx the parse tree
	 */
	exitOperation?: (ctx: OperationContext) => void;

	/**
	 * Enter a parse tree produced by `ATLParser.parameter`.
	 * @param ctx the parse tree
	 */
	enterParameter?: (ctx: ParameterContext) => void;
	/**
	 * Exit a parse tree produced by `ATLParser.parameter`.
	 * @param ctx the parse tree
	 */
	exitParameter?: (ctx: ParameterContext) => void;

	/**
	 * Enter a parse tree produced by `ATLParser.attribute`.
	 * @param ctx the parse tree
	 */
	enterAttribute?: (ctx: AttributeContext) => void;
	/**
	 * Exit a parse tree produced by `ATLParser.attribute`.
	 * @param ctx the parse tree
	 */
	exitAttribute?: (ctx: AttributeContext) => void;

	/**
	 * Enter a parse tree produced by `ATLParser.arule`.
	 * @param ctx the parse tree
	 */
	enterArule?: (ctx: AruleContext) => void;
	/**
	 * Exit a parse tree produced by `ATLParser.arule`.
	 * @param ctx the parse tree
	 */
	exitArule?: (ctx: AruleContext) => void;

	/**
	 * Enter a parse tree produced by `ATLParser.matchedRule`.
	 * @param ctx the parse tree
	 */
	enterMatchedRule?: (ctx: MatchedRuleContext) => void;
	/**
	 * Exit a parse tree produced by `ATLParser.matchedRule`.
	 * @param ctx the parse tree
	 */
	exitMatchedRule?: (ctx: MatchedRuleContext) => void;

	/**
	 * Enter a parse tree produced by `ATLParser.lazyMatchedRule`.
	 * @param ctx the parse tree
	 */
	enterLazyMatchedRule?: (ctx: LazyMatchedRuleContext) => void;
	/**
	 * Exit a parse tree produced by `ATLParser.lazyMatchedRule`.
	 * @param ctx the parse tree
	 */
	exitLazyMatchedRule?: (ctx: LazyMatchedRuleContext) => void;

	/**
	 * Enter a parse tree produced by `ATLParser.ruleVariableDeclaration`.
	 * @param ctx the parse tree
	 */
	enterRuleVariableDeclaration?: (ctx: RuleVariableDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `ATLParser.ruleVariableDeclaration`.
	 * @param ctx the parse tree
	 */
	exitRuleVariableDeclaration?: (ctx: RuleVariableDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `ATLParser.calledRule`.
	 * @param ctx the parse tree
	 */
	enterCalledRule?: (ctx: CalledRuleContext) => void;
	/**
	 * Exit a parse tree produced by `ATLParser.calledRule`.
	 * @param ctx the parse tree
	 */
	exitCalledRule?: (ctx: CalledRuleContext) => void;

	/**
	 * Enter a parse tree produced by `ATLParser.inPattern`.
	 * @param ctx the parse tree
	 */
	enterInPattern?: (ctx: InPatternContext) => void;
	/**
	 * Exit a parse tree produced by `ATLParser.inPattern`.
	 * @param ctx the parse tree
	 */
	exitInPattern?: (ctx: InPatternContext) => void;

	/**
	 * Enter a parse tree produced by `ATLParser.inPatternElement`.
	 * @param ctx the parse tree
	 */
	enterInPatternElement?: (ctx: InPatternElementContext) => void;
	/**
	 * Exit a parse tree produced by `ATLParser.inPatternElement`.
	 * @param ctx the parse tree
	 */
	exitInPatternElement?: (ctx: InPatternElementContext) => void;

	/**
	 * Enter a parse tree produced by `ATLParser.simpleInPatternElement`.
	 * @param ctx the parse tree
	 */
	enterSimpleInPatternElement?: (ctx: SimpleInPatternElementContext) => void;
	/**
	 * Exit a parse tree produced by `ATLParser.simpleInPatternElement`.
	 * @param ctx the parse tree
	 */
	exitSimpleInPatternElement?: (ctx: SimpleInPatternElementContext) => void;

	/**
	 * Enter a parse tree produced by `ATLParser.outPattern`.
	 * @param ctx the parse tree
	 */
	enterOutPattern?: (ctx: OutPatternContext) => void;
	/**
	 * Exit a parse tree produced by `ATLParser.outPattern`.
	 * @param ctx the parse tree
	 */
	exitOutPattern?: (ctx: OutPatternContext) => void;

	/**
	 * Enter a parse tree produced by `ATLParser.outPatternElement`.
	 * @param ctx the parse tree
	 */
	enterOutPatternElement?: (ctx: OutPatternElementContext) => void;
	/**
	 * Exit a parse tree produced by `ATLParser.outPatternElement`.
	 * @param ctx the parse tree
	 */
	exitOutPatternElement?: (ctx: OutPatternElementContext) => void;

	/**
	 * Enter a parse tree produced by `ATLParser.simpleOutPatternElement`.
	 * @param ctx the parse tree
	 */
	enterSimpleOutPatternElement?: (ctx: SimpleOutPatternElementContext) => void;
	/**
	 * Exit a parse tree produced by `ATLParser.simpleOutPatternElement`.
	 * @param ctx the parse tree
	 */
	exitSimpleOutPatternElement?: (ctx: SimpleOutPatternElementContext) => void;

	/**
	 * Enter a parse tree produced by `ATLParser.forEachOutPatternElement`.
	 * @param ctx the parse tree
	 */
	enterForEachOutPatternElement?: (ctx: ForEachOutPatternElementContext) => void;
	/**
	 * Exit a parse tree produced by `ATLParser.forEachOutPatternElement`.
	 * @param ctx the parse tree
	 */
	exitForEachOutPatternElement?: (ctx: ForEachOutPatternElementContext) => void;

	/**
	 * Enter a parse tree produced by `ATLParser.binding`.
	 * @param ctx the parse tree
	 */
	enterBinding?: (ctx: BindingContext) => void;
	/**
	 * Exit a parse tree produced by `ATLParser.binding`.
	 * @param ctx the parse tree
	 */
	exitBinding?: (ctx: BindingContext) => void;

	/**
	 * Enter a parse tree produced by `ATLParser.actionBlock`.
	 * @param ctx the parse tree
	 */
	enterActionBlock?: (ctx: ActionBlockContext) => void;
	/**
	 * Exit a parse tree produced by `ATLParser.actionBlock`.
	 * @param ctx the parse tree
	 */
	exitActionBlock?: (ctx: ActionBlockContext) => void;

	/**
	 * Enter a parse tree produced by `ATLParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `ATLParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `ATLParser.bindingStat`.
	 * @param ctx the parse tree
	 */
	enterBindingStat?: (ctx: BindingStatContext) => void;
	/**
	 * Exit a parse tree produced by `ATLParser.bindingStat`.
	 * @param ctx the parse tree
	 */
	exitBindingStat?: (ctx: BindingStatContext) => void;

	/**
	 * Enter a parse tree produced by `ATLParser.expressionStat`.
	 * @param ctx the parse tree
	 */
	enterExpressionStat?: (ctx: ExpressionStatContext) => void;
	/**
	 * Exit a parse tree produced by `ATLParser.expressionStat`.
	 * @param ctx the parse tree
	 */
	exitExpressionStat?: (ctx: ExpressionStatContext) => void;

	/**
	 * Enter a parse tree produced by `ATLParser.ifStat`.
	 * @param ctx the parse tree
	 */
	enterIfStat?: (ctx: IfStatContext) => void;
	/**
	 * Exit a parse tree produced by `ATLParser.ifStat`.
	 * @param ctx the parse tree
	 */
	exitIfStat?: (ctx: IfStatContext) => void;

	/**
	 * Enter a parse tree produced by `ATLParser.forStat`.
	 * @param ctx the parse tree
	 */
	enterForStat?: (ctx: ForStatContext) => void;
	/**
	 * Exit a parse tree produced by `ATLParser.forStat`.
	 * @param ctx the parse tree
	 */
	exitForStat?: (ctx: ForStatContext) => void;

	/**
	 * Enter a parse tree produced by `ATLParser.oclModel`.
	 * @param ctx the parse tree
	 */
	enterOclModel?: (ctx: OclModelContext) => void;
	/**
	 * Exit a parse tree produced by `ATLParser.oclModel`.
	 * @param ctx the parse tree
	 */
	exitOclModel?: (ctx: OclModelContext) => void;

	/**
	 * Enter a parse tree produced by `ATLParser.oclModelElement`.
	 * @param ctx the parse tree
	 */
	enterOclModelElement?: (ctx: OclModelElementContext) => void;
	/**
	 * Exit a parse tree produced by `ATLParser.oclModelElement`.
	 * @param ctx the parse tree
	 */
	exitOclModelElement?: (ctx: OclModelElementContext) => void;

	/**
	 * Enter a parse tree produced by `ATLParser.oclExpression`.
	 * @param ctx the parse tree
	 */
	enterOclExpression?: (ctx: OclExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `ATLParser.oclExpression`.
	 * @param ctx the parse tree
	 */
	exitOclExpression?: (ctx: OclExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `ATLParser.iteratorExp`.
	 * @param ctx the parse tree
	 */
	enterIteratorExp?: (ctx: IteratorExpContext) => void;
	/**
	 * Exit a parse tree produced by `ATLParser.iteratorExp`.
	 * @param ctx the parse tree
	 */
	exitIteratorExp?: (ctx: IteratorExpContext) => void;

	/**
	 * Enter a parse tree produced by `ATLParser.iterateExp`.
	 * @param ctx the parse tree
	 */
	enterIterateExp?: (ctx: IterateExpContext) => void;
	/**
	 * Exit a parse tree produced by `ATLParser.iterateExp`.
	 * @param ctx the parse tree
	 */
	exitIterateExp?: (ctx: IterateExpContext) => void;

	/**
	 * Enter a parse tree produced by `ATLParser.collectionOperationCallExp`.
	 * @param ctx the parse tree
	 */
	enterCollectionOperationCallExp?: (ctx: CollectionOperationCallExpContext) => void;
	/**
	 * Exit a parse tree produced by `ATLParser.collectionOperationCallExp`.
	 * @param ctx the parse tree
	 */
	exitCollectionOperationCallExp?: (ctx: CollectionOperationCallExpContext) => void;

	/**
	 * Enter a parse tree produced by `ATLParser.operationCallExp`.
	 * @param ctx the parse tree
	 */
	enterOperationCallExp?: (ctx: OperationCallExpContext) => void;
	/**
	 * Exit a parse tree produced by `ATLParser.operationCallExp`.
	 * @param ctx the parse tree
	 */
	exitOperationCallExp?: (ctx: OperationCallExpContext) => void;

	/**
	 * Enter a parse tree produced by `ATLParser.navigationOrAttributeCallExp`.
	 * @param ctx the parse tree
	 */
	enterNavigationOrAttributeCallExp?: (ctx: NavigationOrAttributeCallExpContext) => void;
	/**
	 * Exit a parse tree produced by `ATLParser.navigationOrAttributeCallExp`.
	 * @param ctx the parse tree
	 */
	exitNavigationOrAttributeCallExp?: (ctx: NavigationOrAttributeCallExpContext) => void;

	/**
	 * Enter a parse tree produced by `ATLParser.iterator`.
	 * @param ctx the parse tree
	 */
	enterIterator?: (ctx: IteratorContext) => void;
	/**
	 * Exit a parse tree produced by `ATLParser.iterator`.
	 * @param ctx the parse tree
	 */
	exitIterator?: (ctx: IteratorContext) => void;

	/**
	 * Enter a parse tree produced by `ATLParser.oclUndefinedExp`.
	 * @param ctx the parse tree
	 */
	enterOclUndefinedExp?: (ctx: OclUndefinedExpContext) => void;
	/**
	 * Exit a parse tree produced by `ATLParser.oclUndefinedExp`.
	 * @param ctx the parse tree
	 */
	exitOclUndefinedExp?: (ctx: OclUndefinedExpContext) => void;

	/**
	 * Enter a parse tree produced by `ATLParser.primitiveExp`.
	 * @param ctx the parse tree
	 */
	enterPrimitiveExp?: (ctx: PrimitiveExpContext) => void;
	/**
	 * Exit a parse tree produced by `ATLParser.primitiveExp`.
	 * @param ctx the parse tree
	 */
	exitPrimitiveExp?: (ctx: PrimitiveExpContext) => void;

	/**
	 * Enter a parse tree produced by `ATLParser.numericExp`.
	 * @param ctx the parse tree
	 */
	enterNumericExp?: (ctx: NumericExpContext) => void;
	/**
	 * Exit a parse tree produced by `ATLParser.numericExp`.
	 * @param ctx the parse tree
	 */
	exitNumericExp?: (ctx: NumericExpContext) => void;

	/**
	 * Enter a parse tree produced by `ATLParser.booleanExp`.
	 * @param ctx the parse tree
	 */
	enterBooleanExp?: (ctx: BooleanExpContext) => void;
	/**
	 * Exit a parse tree produced by `ATLParser.booleanExp`.
	 * @param ctx the parse tree
	 */
	exitBooleanExp?: (ctx: BooleanExpContext) => void;

	/**
	 * Enter a parse tree produced by `ATLParser.integerExp`.
	 * @param ctx the parse tree
	 */
	enterIntegerExp?: (ctx: IntegerExpContext) => void;
	/**
	 * Exit a parse tree produced by `ATLParser.integerExp`.
	 * @param ctx the parse tree
	 */
	exitIntegerExp?: (ctx: IntegerExpContext) => void;

	/**
	 * Enter a parse tree produced by `ATLParser.realExp`.
	 * @param ctx the parse tree
	 */
	enterRealExp?: (ctx: RealExpContext) => void;
	/**
	 * Exit a parse tree produced by `ATLParser.realExp`.
	 * @param ctx the parse tree
	 */
	exitRealExp?: (ctx: RealExpContext) => void;

	/**
	 * Enter a parse tree produced by `ATLParser.stringExp`.
	 * @param ctx the parse tree
	 */
	enterStringExp?: (ctx: StringExpContext) => void;
	/**
	 * Exit a parse tree produced by `ATLParser.stringExp`.
	 * @param ctx the parse tree
	 */
	exitStringExp?: (ctx: StringExpContext) => void;

	/**
	 * Enter a parse tree produced by `ATLParser.ifExp`.
	 * @param ctx the parse tree
	 */
	enterIfExp?: (ctx: IfExpContext) => void;
	/**
	 * Exit a parse tree produced by `ATLParser.ifExp`.
	 * @param ctx the parse tree
	 */
	exitIfExp?: (ctx: IfExpContext) => void;

	/**
	 * Enter a parse tree produced by `ATLParser.variableExp`.
	 * @param ctx the parse tree
	 */
	enterVariableExp?: (ctx: VariableExpContext) => void;
	/**
	 * Exit a parse tree produced by `ATLParser.variableExp`.
	 * @param ctx the parse tree
	 */
	exitVariableExp?: (ctx: VariableExpContext) => void;

	/**
	 * Enter a parse tree produced by `ATLParser.superExp`.
	 * @param ctx the parse tree
	 */
	enterSuperExp?: (ctx: SuperExpContext) => void;
	/**
	 * Exit a parse tree produced by `ATLParser.superExp`.
	 * @param ctx the parse tree
	 */
	exitSuperExp?: (ctx: SuperExpContext) => void;

	/**
	 * Enter a parse tree produced by `ATLParser.letExp`.
	 * @param ctx the parse tree
	 */
	enterLetExp?: (ctx: LetExpContext) => void;
	/**
	 * Exit a parse tree produced by `ATLParser.letExp`.
	 * @param ctx the parse tree
	 */
	exitLetExp?: (ctx: LetExpContext) => void;

	/**
	 * Enter a parse tree produced by `ATLParser.variableDeclaration`.
	 * @param ctx the parse tree
	 */
	enterVariableDeclaration?: (ctx: VariableDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `ATLParser.variableDeclaration`.
	 * @param ctx the parse tree
	 */
	exitVariableDeclaration?: (ctx: VariableDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `ATLParser.enumLiteralExp`.
	 * @param ctx the parse tree
	 */
	enterEnumLiteralExp?: (ctx: EnumLiteralExpContext) => void;
	/**
	 * Exit a parse tree produced by `ATLParser.enumLiteralExp`.
	 * @param ctx the parse tree
	 */
	exitEnumLiteralExp?: (ctx: EnumLiteralExpContext) => void;

	/**
	 * Enter a parse tree produced by `ATLParser.collectionExp`.
	 * @param ctx the parse tree
	 */
	enterCollectionExp?: (ctx: CollectionExpContext) => void;
	/**
	 * Exit a parse tree produced by `ATLParser.collectionExp`.
	 * @param ctx the parse tree
	 */
	exitCollectionExp?: (ctx: CollectionExpContext) => void;

	/**
	 * Enter a parse tree produced by `ATLParser.bagExp`.
	 * @param ctx the parse tree
	 */
	enterBagExp?: (ctx: BagExpContext) => void;
	/**
	 * Exit a parse tree produced by `ATLParser.bagExp`.
	 * @param ctx the parse tree
	 */
	exitBagExp?: (ctx: BagExpContext) => void;

	/**
	 * Enter a parse tree produced by `ATLParser.setExp`.
	 * @param ctx the parse tree
	 */
	enterSetExp?: (ctx: SetExpContext) => void;
	/**
	 * Exit a parse tree produced by `ATLParser.setExp`.
	 * @param ctx the parse tree
	 */
	exitSetExp?: (ctx: SetExpContext) => void;

	/**
	 * Enter a parse tree produced by `ATLParser.orderedSetExp`.
	 * @param ctx the parse tree
	 */
	enterOrderedSetExp?: (ctx: OrderedSetExpContext) => void;
	/**
	 * Exit a parse tree produced by `ATLParser.orderedSetExp`.
	 * @param ctx the parse tree
	 */
	exitOrderedSetExp?: (ctx: OrderedSetExpContext) => void;

	/**
	 * Enter a parse tree produced by `ATLParser.sequenceExp`.
	 * @param ctx the parse tree
	 */
	enterSequenceExp?: (ctx: SequenceExpContext) => void;
	/**
	 * Exit a parse tree produced by `ATLParser.sequenceExp`.
	 * @param ctx the parse tree
	 */
	exitSequenceExp?: (ctx: SequenceExpContext) => void;

	/**
	 * Enter a parse tree produced by `ATLParser.mapExp`.
	 * @param ctx the parse tree
	 */
	enterMapExp?: (ctx: MapExpContext) => void;
	/**
	 * Exit a parse tree produced by `ATLParser.mapExp`.
	 * @param ctx the parse tree
	 */
	exitMapExp?: (ctx: MapExpContext) => void;

	/**
	 * Enter a parse tree produced by `ATLParser.mapElement`.
	 * @param ctx the parse tree
	 */
	enterMapElement?: (ctx: MapElementContext) => void;
	/**
	 * Exit a parse tree produced by `ATLParser.mapElement`.
	 * @param ctx the parse tree
	 */
	exitMapElement?: (ctx: MapElementContext) => void;

	/**
	 * Enter a parse tree produced by `ATLParser.tupleExp`.
	 * @param ctx the parse tree
	 */
	enterTupleExp?: (ctx: TupleExpContext) => void;
	/**
	 * Exit a parse tree produced by `ATLParser.tupleExp`.
	 * @param ctx the parse tree
	 */
	exitTupleExp?: (ctx: TupleExpContext) => void;

	/**
	 * Enter a parse tree produced by `ATLParser.tuplePart`.
	 * @param ctx the parse tree
	 */
	enterTuplePart?: (ctx: TuplePartContext) => void;
	/**
	 * Exit a parse tree produced by `ATLParser.tuplePart`.
	 * @param ctx the parse tree
	 */
	exitTuplePart?: (ctx: TuplePartContext) => void;

	/**
	 * Enter a parse tree produced by `ATLParser.oclType`.
	 * @param ctx the parse tree
	 */
	enterOclType?: (ctx: OclTypeContext) => void;
	/**
	 * Exit a parse tree produced by `ATLParser.oclType`.
	 * @param ctx the parse tree
	 */
	exitOclType?: (ctx: OclTypeContext) => void;

	/**
	 * Enter a parse tree produced by `ATLParser.oclAnyType`.
	 * @param ctx the parse tree
	 */
	enterOclAnyType?: (ctx: OclAnyTypeContext) => void;
	/**
	 * Exit a parse tree produced by `ATLParser.oclAnyType`.
	 * @param ctx the parse tree
	 */
	exitOclAnyType?: (ctx: OclAnyTypeContext) => void;

	/**
	 * Enter a parse tree produced by `ATLParser.tupleType`.
	 * @param ctx the parse tree
	 */
	enterTupleType?: (ctx: TupleTypeContext) => void;
	/**
	 * Exit a parse tree produced by `ATLParser.tupleType`.
	 * @param ctx the parse tree
	 */
	exitTupleType?: (ctx: TupleTypeContext) => void;

	/**
	 * Enter a parse tree produced by `ATLParser.tupleTypeAttribute`.
	 * @param ctx the parse tree
	 */
	enterTupleTypeAttribute?: (ctx: TupleTypeAttributeContext) => void;
	/**
	 * Exit a parse tree produced by `ATLParser.tupleTypeAttribute`.
	 * @param ctx the parse tree
	 */
	exitTupleTypeAttribute?: (ctx: TupleTypeAttributeContext) => void;

	/**
	 * Enter a parse tree produced by `ATLParser.mapType`.
	 * @param ctx the parse tree
	 */
	enterMapType?: (ctx: MapTypeContext) => void;
	/**
	 * Exit a parse tree produced by `ATLParser.mapType`.
	 * @param ctx the parse tree
	 */
	exitMapType?: (ctx: MapTypeContext) => void;

	/**
	 * Enter a parse tree produced by `ATLParser.primitive`.
	 * @param ctx the parse tree
	 */
	enterPrimitive?: (ctx: PrimitiveContext) => void;
	/**
	 * Exit a parse tree produced by `ATLParser.primitive`.
	 * @param ctx the parse tree
	 */
	exitPrimitive?: (ctx: PrimitiveContext) => void;

	/**
	 * Enter a parse tree produced by `ATLParser.numericType`.
	 * @param ctx the parse tree
	 */
	enterNumericType?: (ctx: NumericTypeContext) => void;
	/**
	 * Exit a parse tree produced by `ATLParser.numericType`.
	 * @param ctx the parse tree
	 */
	exitNumericType?: (ctx: NumericTypeContext) => void;

	/**
	 * Enter a parse tree produced by `ATLParser.integerType`.
	 * @param ctx the parse tree
	 */
	enterIntegerType?: (ctx: IntegerTypeContext) => void;
	/**
	 * Exit a parse tree produced by `ATLParser.integerType`.
	 * @param ctx the parse tree
	 */
	exitIntegerType?: (ctx: IntegerTypeContext) => void;

	/**
	 * Enter a parse tree produced by `ATLParser.realType`.
	 * @param ctx the parse tree
	 */
	enterRealType?: (ctx: RealTypeContext) => void;
	/**
	 * Exit a parse tree produced by `ATLParser.realType`.
	 * @param ctx the parse tree
	 */
	exitRealType?: (ctx: RealTypeContext) => void;

	/**
	 * Enter a parse tree produced by `ATLParser.booleanType`.
	 * @param ctx the parse tree
	 */
	enterBooleanType?: (ctx: BooleanTypeContext) => void;
	/**
	 * Exit a parse tree produced by `ATLParser.booleanType`.
	 * @param ctx the parse tree
	 */
	exitBooleanType?: (ctx: BooleanTypeContext) => void;

	/**
	 * Enter a parse tree produced by `ATLParser.stringType`.
	 * @param ctx the parse tree
	 */
	enterStringType?: (ctx: StringTypeContext) => void;
	/**
	 * Exit a parse tree produced by `ATLParser.stringType`.
	 * @param ctx the parse tree
	 */
	exitStringType?: (ctx: StringTypeContext) => void;

	/**
	 * Enter a parse tree produced by `ATLParser.collectionType`.
	 * @param ctx the parse tree
	 */
	enterCollectionType?: (ctx: CollectionTypeContext) => void;
	/**
	 * Exit a parse tree produced by `ATLParser.collectionType`.
	 * @param ctx the parse tree
	 */
	exitCollectionType?: (ctx: CollectionTypeContext) => void;

	/**
	 * Enter a parse tree produced by `ATLParser.bagType`.
	 * @param ctx the parse tree
	 */
	enterBagType?: (ctx: BagTypeContext) => void;
	/**
	 * Exit a parse tree produced by `ATLParser.bagType`.
	 * @param ctx the parse tree
	 */
	exitBagType?: (ctx: BagTypeContext) => void;

	/**
	 * Enter a parse tree produced by `ATLParser.setType`.
	 * @param ctx the parse tree
	 */
	enterSetType?: (ctx: SetTypeContext) => void;
	/**
	 * Exit a parse tree produced by `ATLParser.setType`.
	 * @param ctx the parse tree
	 */
	exitSetType?: (ctx: SetTypeContext) => void;

	/**
	 * Enter a parse tree produced by `ATLParser.orderedSetType`.
	 * @param ctx the parse tree
	 */
	enterOrderedSetType?: (ctx: OrderedSetTypeContext) => void;
	/**
	 * Exit a parse tree produced by `ATLParser.orderedSetType`.
	 * @param ctx the parse tree
	 */
	exitOrderedSetType?: (ctx: OrderedSetTypeContext) => void;

	/**
	 * Enter a parse tree produced by `ATLParser.sequenceType`.
	 * @param ctx the parse tree
	 */
	enterSequenceType?: (ctx: SequenceTypeContext) => void;
	/**
	 * Exit a parse tree produced by `ATLParser.sequenceType`.
	 * @param ctx the parse tree
	 */
	exitSequenceType?: (ctx: SequenceTypeContext) => void;

	/**
	 * Enter a parse tree produced by `ATLParser.priority_0`.
	 * @param ctx the parse tree
	 */
	enterPriority_0?: (ctx: Priority_0Context) => void;
	/**
	 * Exit a parse tree produced by `ATLParser.priority_0`.
	 * @param ctx the parse tree
	 */
	exitPriority_0?: (ctx: Priority_0Context) => void;

	/**
	 * Enter a parse tree produced by `ATLParser.priority_1`.
	 * @param ctx the parse tree
	 */
	enterPriority_1?: (ctx: Priority_1Context) => void;
	/**
	 * Exit a parse tree produced by `ATLParser.priority_1`.
	 * @param ctx the parse tree
	 */
	exitPriority_1?: (ctx: Priority_1Context) => void;

	/**
	 * Enter a parse tree produced by `ATLParser.priority_2`.
	 * @param ctx the parse tree
	 */
	enterPriority_2?: (ctx: Priority_2Context) => void;
	/**
	 * Exit a parse tree produced by `ATLParser.priority_2`.
	 * @param ctx the parse tree
	 */
	exitPriority_2?: (ctx: Priority_2Context) => void;

	/**
	 * Enter a parse tree produced by `ATLParser.priority_3`.
	 * @param ctx the parse tree
	 */
	enterPriority_3?: (ctx: Priority_3Context) => void;
	/**
	 * Exit a parse tree produced by `ATLParser.priority_3`.
	 * @param ctx the parse tree
	 */
	exitPriority_3?: (ctx: Priority_3Context) => void;

	/**
	 * Enter a parse tree produced by `ATLParser.priority_4`.
	 * @param ctx the parse tree
	 */
	enterPriority_4?: (ctx: Priority_4Context) => void;
	/**
	 * Exit a parse tree produced by `ATLParser.priority_4`.
	 * @param ctx the parse tree
	 */
	exitPriority_4?: (ctx: Priority_4Context) => void;

	/**
	 * Enter a parse tree produced by `ATLParser.priority_5`.
	 * @param ctx the parse tree
	 */
	enterPriority_5?: (ctx: Priority_5Context) => void;
	/**
	 * Exit a parse tree produced by `ATLParser.priority_5`.
	 * @param ctx the parse tree
	 */
	exitPriority_5?: (ctx: Priority_5Context) => void;

	/**
	 * Enter a parse tree produced by `ATLParser.matchedRule_abstractContents`.
	 * @param ctx the parse tree
	 */
	enterMatchedRule_abstractContents?: (ctx: MatchedRule_abstractContentsContext) => void;
	/**
	 * Exit a parse tree produced by `ATLParser.matchedRule_abstractContents`.
	 * @param ctx the parse tree
	 */
	exitMatchedRule_abstractContents?: (ctx: MatchedRule_abstractContentsContext) => void;

	/**
	 * Enter a parse tree produced by `ATLParser.oclType_abstractContents`.
	 * @param ctx the parse tree
	 */
	enterOclType_abstractContents?: (ctx: OclType_abstractContentsContext) => void;
	/**
	 * Exit a parse tree produced by `ATLParser.oclType_abstractContents`.
	 * @param ctx the parse tree
	 */
	exitOclType_abstractContents?: (ctx: OclType_abstractContentsContext) => void;

	/**
	 * Enter a parse tree produced by `ATLParser.oclAnyType_abstractContents`.
	 * @param ctx the parse tree
	 */
	enterOclAnyType_abstractContents?: (ctx: OclAnyType_abstractContentsContext) => void;
	/**
	 * Exit a parse tree produced by `ATLParser.oclAnyType_abstractContents`.
	 * @param ctx the parse tree
	 */
	exitOclAnyType_abstractContents?: (ctx: OclAnyType_abstractContentsContext) => void;

	/**
	 * Enter a parse tree produced by `ATLParser.collectionType_abstractContents`.
	 * @param ctx the parse tree
	 */
	enterCollectionType_abstractContents?: (ctx: CollectionType_abstractContentsContext) => void;
	/**
	 * Exit a parse tree produced by `ATLParser.collectionType_abstractContents`.
	 * @param ctx the parse tree
	 */
	exitCollectionType_abstractContents?: (ctx: CollectionType_abstractContentsContext) => void;

	/**
	 * Enter a parse tree produced by `ATLParser.primary_oclExpression`.
	 * @param ctx the parse tree
	 */
	enterPrimary_oclExpression?: (ctx: Primary_oclExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `ATLParser.primary_oclExpression`.
	 * @param ctx the parse tree
	 */
	exitPrimary_oclExpression?: (ctx: Primary_oclExpressionContext) => void;
}

