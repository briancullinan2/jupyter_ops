// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/pddl/Pddl.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { PddlDocContext } from "./PddlParser";
import { DomainContext } from "./PddlParser";
import { DomainNameContext } from "./PddlParser";
import { RequireDefContext } from "./PddlParser";
import { TypesDefContext } from "./PddlParser";
import { TypedNameListContext } from "./PddlParser";
import { SingleTypeNameListContext } from "./PddlParser";
import { TypeContext } from "./PddlParser";
import { PrimTypeContext } from "./PddlParser";
import { FunctionsDefContext } from "./PddlParser";
import { FunctionListContext } from "./PddlParser";
import { AtomicFunctionSkeletonContext } from "./PddlParser";
import { FunctionSymbolContext } from "./PddlParser";
import { FunctionTypeContext } from "./PddlParser";
import { ConstantsDefContext } from "./PddlParser";
import { PredicatesDefContext } from "./PddlParser";
import { AtomicFormulaSkeletonContext } from "./PddlParser";
import { PredicateContext } from "./PddlParser";
import { TypedVariableListContext } from "./PddlParser";
import { SingleTypeVarListContext } from "./PddlParser";
import { ConstraintsContext } from "./PddlParser";
import { StructureDefContext } from "./PddlParser";
import { ActionDefContext } from "./PddlParser";
import { ActionSymbolContext } from "./PddlParser";
import { ActionDefBodyContext } from "./PddlParser";
import { GoalDescContext } from "./PddlParser";
import { FCompContext } from "./PddlParser";
import { AtomicTermFormulaContext } from "./PddlParser";
import { TermContext } from "./PddlParser";
import { DurativeActionDefContext } from "./PddlParser";
import { DaDefBodyContext } from "./PddlParser";
import { DaGDContext } from "./PddlParser";
import { PrefTimedGDContext } from "./PddlParser";
import { TimedGDContext } from "./PddlParser";
import { TimeSpecifierContext } from "./PddlParser";
import { IntervalContext } from "./PddlParser";
import { DerivedDefContext } from "./PddlParser";
import { FExpContext } from "./PddlParser";
import { FExp2Context } from "./PddlParser";
import { FHeadContext } from "./PddlParser";
import { EffectContext } from "./PddlParser";
import { CEffectContext } from "./PddlParser";
import { PEffectContext } from "./PddlParser";
import { CondEffectContext } from "./PddlParser";
import { BinaryOpContext } from "./PddlParser";
import { BinaryCompContext } from "./PddlParser";
import { AssignOpContext } from "./PddlParser";
import { DurationConstraintContext } from "./PddlParser";
import { SimpleDurationConstraintContext } from "./PddlParser";
import { DurOpContext } from "./PddlParser";
import { DurValueContext } from "./PddlParser";
import { DaEffectContext } from "./PddlParser";
import { TimedEffectContext } from "./PddlParser";
import { FAssignDAContext } from "./PddlParser";
import { FExpDAContext } from "./PddlParser";
import { ProblemContext } from "./PddlParser";
import { ProblemDeclContext } from "./PddlParser";
import { ProblemDomainContext } from "./PddlParser";
import { ObjectDeclContext } from "./PddlParser";
import { InitContext } from "./PddlParser";
import { InitElContext } from "./PddlParser";
import { NameLiteralContext } from "./PddlParser";
import { AtomicNameFormulaContext } from "./PddlParser";
import { GoalContext } from "./PddlParser";
import { ProbConstraintsContext } from "./PddlParser";
import { PrefConGDContext } from "./PddlParser";
import { MetricSpecContext } from "./PddlParser";
import { OptimizationContext } from "./PddlParser";
import { MetricFExpContext } from "./PddlParser";
import { ConGDContext } from "./PddlParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `PddlParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface PddlVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `PddlParser.pddlDoc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPddlDoc?: (ctx: PddlDocContext) => Result;

	/**
	 * Visit a parse tree produced by `PddlParser.domain`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDomain?: (ctx: DomainContext) => Result;

	/**
	 * Visit a parse tree produced by `PddlParser.domainName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDomainName?: (ctx: DomainNameContext) => Result;

	/**
	 * Visit a parse tree produced by `PddlParser.requireDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRequireDef?: (ctx: RequireDefContext) => Result;

	/**
	 * Visit a parse tree produced by `PddlParser.typesDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypesDef?: (ctx: TypesDefContext) => Result;

	/**
	 * Visit a parse tree produced by `PddlParser.typedNameList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypedNameList?: (ctx: TypedNameListContext) => Result;

	/**
	 * Visit a parse tree produced by `PddlParser.singleTypeNameList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSingleTypeNameList?: (ctx: SingleTypeNameListContext) => Result;

	/**
	 * Visit a parse tree produced by `PddlParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType?: (ctx: TypeContext) => Result;

	/**
	 * Visit a parse tree produced by `PddlParser.primType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimType?: (ctx: PrimTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `PddlParser.functionsDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionsDef?: (ctx: FunctionsDefContext) => Result;

	/**
	 * Visit a parse tree produced by `PddlParser.functionList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionList?: (ctx: FunctionListContext) => Result;

	/**
	 * Visit a parse tree produced by `PddlParser.atomicFunctionSkeleton`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAtomicFunctionSkeleton?: (ctx: AtomicFunctionSkeletonContext) => Result;

	/**
	 * Visit a parse tree produced by `PddlParser.functionSymbol`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionSymbol?: (ctx: FunctionSymbolContext) => Result;

	/**
	 * Visit a parse tree produced by `PddlParser.functionType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionType?: (ctx: FunctionTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `PddlParser.constantsDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstantsDef?: (ctx: ConstantsDefContext) => Result;

	/**
	 * Visit a parse tree produced by `PddlParser.predicatesDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPredicatesDef?: (ctx: PredicatesDefContext) => Result;

	/**
	 * Visit a parse tree produced by `PddlParser.atomicFormulaSkeleton`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAtomicFormulaSkeleton?: (ctx: AtomicFormulaSkeletonContext) => Result;

	/**
	 * Visit a parse tree produced by `PddlParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPredicate?: (ctx: PredicateContext) => Result;

	/**
	 * Visit a parse tree produced by `PddlParser.typedVariableList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypedVariableList?: (ctx: TypedVariableListContext) => Result;

	/**
	 * Visit a parse tree produced by `PddlParser.singleTypeVarList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSingleTypeVarList?: (ctx: SingleTypeVarListContext) => Result;

	/**
	 * Visit a parse tree produced by `PddlParser.constraints`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstraints?: (ctx: ConstraintsContext) => Result;

	/**
	 * Visit a parse tree produced by `PddlParser.structureDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStructureDef?: (ctx: StructureDefContext) => Result;

	/**
	 * Visit a parse tree produced by `PddlParser.actionDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitActionDef?: (ctx: ActionDefContext) => Result;

	/**
	 * Visit a parse tree produced by `PddlParser.actionSymbol`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitActionSymbol?: (ctx: ActionSymbolContext) => Result;

	/**
	 * Visit a parse tree produced by `PddlParser.actionDefBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitActionDefBody?: (ctx: ActionDefBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `PddlParser.goalDesc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGoalDesc?: (ctx: GoalDescContext) => Result;

	/**
	 * Visit a parse tree produced by `PddlParser.fComp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFComp?: (ctx: FCompContext) => Result;

	/**
	 * Visit a parse tree produced by `PddlParser.atomicTermFormula`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAtomicTermFormula?: (ctx: AtomicTermFormulaContext) => Result;

	/**
	 * Visit a parse tree produced by `PddlParser.term`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTerm?: (ctx: TermContext) => Result;

	/**
	 * Visit a parse tree produced by `PddlParser.durativeActionDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDurativeActionDef?: (ctx: DurativeActionDefContext) => Result;

	/**
	 * Visit a parse tree produced by `PddlParser.daDefBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDaDefBody?: (ctx: DaDefBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `PddlParser.daGD`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDaGD?: (ctx: DaGDContext) => Result;

	/**
	 * Visit a parse tree produced by `PddlParser.prefTimedGD`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrefTimedGD?: (ctx: PrefTimedGDContext) => Result;

	/**
	 * Visit a parse tree produced by `PddlParser.timedGD`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTimedGD?: (ctx: TimedGDContext) => Result;

	/**
	 * Visit a parse tree produced by `PddlParser.timeSpecifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTimeSpecifier?: (ctx: TimeSpecifierContext) => Result;

	/**
	 * Visit a parse tree produced by `PddlParser.interval`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterval?: (ctx: IntervalContext) => Result;

	/**
	 * Visit a parse tree produced by `PddlParser.derivedDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDerivedDef?: (ctx: DerivedDefContext) => Result;

	/**
	 * Visit a parse tree produced by `PddlParser.fExp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFExp?: (ctx: FExpContext) => Result;

	/**
	 * Visit a parse tree produced by `PddlParser.fExp2`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFExp2?: (ctx: FExp2Context) => Result;

	/**
	 * Visit a parse tree produced by `PddlParser.fHead`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFHead?: (ctx: FHeadContext) => Result;

	/**
	 * Visit a parse tree produced by `PddlParser.effect`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEffect?: (ctx: EffectContext) => Result;

	/**
	 * Visit a parse tree produced by `PddlParser.cEffect`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCEffect?: (ctx: CEffectContext) => Result;

	/**
	 * Visit a parse tree produced by `PddlParser.pEffect`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPEffect?: (ctx: PEffectContext) => Result;

	/**
	 * Visit a parse tree produced by `PddlParser.condEffect`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCondEffect?: (ctx: CondEffectContext) => Result;

	/**
	 * Visit a parse tree produced by `PddlParser.binaryOp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinaryOp?: (ctx: BinaryOpContext) => Result;

	/**
	 * Visit a parse tree produced by `PddlParser.binaryComp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinaryComp?: (ctx: BinaryCompContext) => Result;

	/**
	 * Visit a parse tree produced by `PddlParser.assignOp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignOp?: (ctx: AssignOpContext) => Result;

	/**
	 * Visit a parse tree produced by `PddlParser.durationConstraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDurationConstraint?: (ctx: DurationConstraintContext) => Result;

	/**
	 * Visit a parse tree produced by `PddlParser.simpleDurationConstraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimpleDurationConstraint?: (ctx: SimpleDurationConstraintContext) => Result;

	/**
	 * Visit a parse tree produced by `PddlParser.durOp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDurOp?: (ctx: DurOpContext) => Result;

	/**
	 * Visit a parse tree produced by `PddlParser.durValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDurValue?: (ctx: DurValueContext) => Result;

	/**
	 * Visit a parse tree produced by `PddlParser.daEffect`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDaEffect?: (ctx: DaEffectContext) => Result;

	/**
	 * Visit a parse tree produced by `PddlParser.timedEffect`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTimedEffect?: (ctx: TimedEffectContext) => Result;

	/**
	 * Visit a parse tree produced by `PddlParser.fAssignDA`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFAssignDA?: (ctx: FAssignDAContext) => Result;

	/**
	 * Visit a parse tree produced by `PddlParser.fExpDA`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFExpDA?: (ctx: FExpDAContext) => Result;

	/**
	 * Visit a parse tree produced by `PddlParser.problem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProblem?: (ctx: ProblemContext) => Result;

	/**
	 * Visit a parse tree produced by `PddlParser.problemDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProblemDecl?: (ctx: ProblemDeclContext) => Result;

	/**
	 * Visit a parse tree produced by `PddlParser.problemDomain`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProblemDomain?: (ctx: ProblemDomainContext) => Result;

	/**
	 * Visit a parse tree produced by `PddlParser.objectDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObjectDecl?: (ctx: ObjectDeclContext) => Result;

	/**
	 * Visit a parse tree produced by `PddlParser.init`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInit?: (ctx: InitContext) => Result;

	/**
	 * Visit a parse tree produced by `PddlParser.initEl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInitEl?: (ctx: InitElContext) => Result;

	/**
	 * Visit a parse tree produced by `PddlParser.nameLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNameLiteral?: (ctx: NameLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `PddlParser.atomicNameFormula`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAtomicNameFormula?: (ctx: AtomicNameFormulaContext) => Result;

	/**
	 * Visit a parse tree produced by `PddlParser.goal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGoal?: (ctx: GoalContext) => Result;

	/**
	 * Visit a parse tree produced by `PddlParser.probConstraints`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProbConstraints?: (ctx: ProbConstraintsContext) => Result;

	/**
	 * Visit a parse tree produced by `PddlParser.prefConGD`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrefConGD?: (ctx: PrefConGDContext) => Result;

	/**
	 * Visit a parse tree produced by `PddlParser.metricSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMetricSpec?: (ctx: MetricSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `PddlParser.optimization`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOptimization?: (ctx: OptimizationContext) => Result;

	/**
	 * Visit a parse tree produced by `PddlParser.metricFExp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMetricFExp?: (ctx: MetricFExpContext) => Result;

	/**
	 * Visit a parse tree produced by `PddlParser.conGD`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConGD?: (ctx: ConGDContext) => Result;
}

