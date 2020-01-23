// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/pddl/Pddl.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `PddlParser`.
 */
export interface PddlListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `PddlParser.pddlDoc`.
	 * @param ctx the parse tree
	 */
	enterPddlDoc?: (ctx: PddlDocContext) => void;
	/**
	 * Exit a parse tree produced by `PddlParser.pddlDoc`.
	 * @param ctx the parse tree
	 */
	exitPddlDoc?: (ctx: PddlDocContext) => void;

	/**
	 * Enter a parse tree produced by `PddlParser.domain`.
	 * @param ctx the parse tree
	 */
	enterDomain?: (ctx: DomainContext) => void;
	/**
	 * Exit a parse tree produced by `PddlParser.domain`.
	 * @param ctx the parse tree
	 */
	exitDomain?: (ctx: DomainContext) => void;

	/**
	 * Enter a parse tree produced by `PddlParser.domainName`.
	 * @param ctx the parse tree
	 */
	enterDomainName?: (ctx: DomainNameContext) => void;
	/**
	 * Exit a parse tree produced by `PddlParser.domainName`.
	 * @param ctx the parse tree
	 */
	exitDomainName?: (ctx: DomainNameContext) => void;

	/**
	 * Enter a parse tree produced by `PddlParser.requireDef`.
	 * @param ctx the parse tree
	 */
	enterRequireDef?: (ctx: RequireDefContext) => void;
	/**
	 * Exit a parse tree produced by `PddlParser.requireDef`.
	 * @param ctx the parse tree
	 */
	exitRequireDef?: (ctx: RequireDefContext) => void;

	/**
	 * Enter a parse tree produced by `PddlParser.typesDef`.
	 * @param ctx the parse tree
	 */
	enterTypesDef?: (ctx: TypesDefContext) => void;
	/**
	 * Exit a parse tree produced by `PddlParser.typesDef`.
	 * @param ctx the parse tree
	 */
	exitTypesDef?: (ctx: TypesDefContext) => void;

	/**
	 * Enter a parse tree produced by `PddlParser.typedNameList`.
	 * @param ctx the parse tree
	 */
	enterTypedNameList?: (ctx: TypedNameListContext) => void;
	/**
	 * Exit a parse tree produced by `PddlParser.typedNameList`.
	 * @param ctx the parse tree
	 */
	exitTypedNameList?: (ctx: TypedNameListContext) => void;

	/**
	 * Enter a parse tree produced by `PddlParser.singleTypeNameList`.
	 * @param ctx the parse tree
	 */
	enterSingleTypeNameList?: (ctx: SingleTypeNameListContext) => void;
	/**
	 * Exit a parse tree produced by `PddlParser.singleTypeNameList`.
	 * @param ctx the parse tree
	 */
	exitSingleTypeNameList?: (ctx: SingleTypeNameListContext) => void;

	/**
	 * Enter a parse tree produced by `PddlParser.type`.
	 * @param ctx the parse tree
	 */
	enterType?: (ctx: TypeContext) => void;
	/**
	 * Exit a parse tree produced by `PddlParser.type`.
	 * @param ctx the parse tree
	 */
	exitType?: (ctx: TypeContext) => void;

	/**
	 * Enter a parse tree produced by `PddlParser.primType`.
	 * @param ctx the parse tree
	 */
	enterPrimType?: (ctx: PrimTypeContext) => void;
	/**
	 * Exit a parse tree produced by `PddlParser.primType`.
	 * @param ctx the parse tree
	 */
	exitPrimType?: (ctx: PrimTypeContext) => void;

	/**
	 * Enter a parse tree produced by `PddlParser.functionsDef`.
	 * @param ctx the parse tree
	 */
	enterFunctionsDef?: (ctx: FunctionsDefContext) => void;
	/**
	 * Exit a parse tree produced by `PddlParser.functionsDef`.
	 * @param ctx the parse tree
	 */
	exitFunctionsDef?: (ctx: FunctionsDefContext) => void;

	/**
	 * Enter a parse tree produced by `PddlParser.functionList`.
	 * @param ctx the parse tree
	 */
	enterFunctionList?: (ctx: FunctionListContext) => void;
	/**
	 * Exit a parse tree produced by `PddlParser.functionList`.
	 * @param ctx the parse tree
	 */
	exitFunctionList?: (ctx: FunctionListContext) => void;

	/**
	 * Enter a parse tree produced by `PddlParser.atomicFunctionSkeleton`.
	 * @param ctx the parse tree
	 */
	enterAtomicFunctionSkeleton?: (ctx: AtomicFunctionSkeletonContext) => void;
	/**
	 * Exit a parse tree produced by `PddlParser.atomicFunctionSkeleton`.
	 * @param ctx the parse tree
	 */
	exitAtomicFunctionSkeleton?: (ctx: AtomicFunctionSkeletonContext) => void;

	/**
	 * Enter a parse tree produced by `PddlParser.functionSymbol`.
	 * @param ctx the parse tree
	 */
	enterFunctionSymbol?: (ctx: FunctionSymbolContext) => void;
	/**
	 * Exit a parse tree produced by `PddlParser.functionSymbol`.
	 * @param ctx the parse tree
	 */
	exitFunctionSymbol?: (ctx: FunctionSymbolContext) => void;

	/**
	 * Enter a parse tree produced by `PddlParser.functionType`.
	 * @param ctx the parse tree
	 */
	enterFunctionType?: (ctx: FunctionTypeContext) => void;
	/**
	 * Exit a parse tree produced by `PddlParser.functionType`.
	 * @param ctx the parse tree
	 */
	exitFunctionType?: (ctx: FunctionTypeContext) => void;

	/**
	 * Enter a parse tree produced by `PddlParser.constantsDef`.
	 * @param ctx the parse tree
	 */
	enterConstantsDef?: (ctx: ConstantsDefContext) => void;
	/**
	 * Exit a parse tree produced by `PddlParser.constantsDef`.
	 * @param ctx the parse tree
	 */
	exitConstantsDef?: (ctx: ConstantsDefContext) => void;

	/**
	 * Enter a parse tree produced by `PddlParser.predicatesDef`.
	 * @param ctx the parse tree
	 */
	enterPredicatesDef?: (ctx: PredicatesDefContext) => void;
	/**
	 * Exit a parse tree produced by `PddlParser.predicatesDef`.
	 * @param ctx the parse tree
	 */
	exitPredicatesDef?: (ctx: PredicatesDefContext) => void;

	/**
	 * Enter a parse tree produced by `PddlParser.atomicFormulaSkeleton`.
	 * @param ctx the parse tree
	 */
	enterAtomicFormulaSkeleton?: (ctx: AtomicFormulaSkeletonContext) => void;
	/**
	 * Exit a parse tree produced by `PddlParser.atomicFormulaSkeleton`.
	 * @param ctx the parse tree
	 */
	exitAtomicFormulaSkeleton?: (ctx: AtomicFormulaSkeletonContext) => void;

	/**
	 * Enter a parse tree produced by `PddlParser.predicate`.
	 * @param ctx the parse tree
	 */
	enterPredicate?: (ctx: PredicateContext) => void;
	/**
	 * Exit a parse tree produced by `PddlParser.predicate`.
	 * @param ctx the parse tree
	 */
	exitPredicate?: (ctx: PredicateContext) => void;

	/**
	 * Enter a parse tree produced by `PddlParser.typedVariableList`.
	 * @param ctx the parse tree
	 */
	enterTypedVariableList?: (ctx: TypedVariableListContext) => void;
	/**
	 * Exit a parse tree produced by `PddlParser.typedVariableList`.
	 * @param ctx the parse tree
	 */
	exitTypedVariableList?: (ctx: TypedVariableListContext) => void;

	/**
	 * Enter a parse tree produced by `PddlParser.singleTypeVarList`.
	 * @param ctx the parse tree
	 */
	enterSingleTypeVarList?: (ctx: SingleTypeVarListContext) => void;
	/**
	 * Exit a parse tree produced by `PddlParser.singleTypeVarList`.
	 * @param ctx the parse tree
	 */
	exitSingleTypeVarList?: (ctx: SingleTypeVarListContext) => void;

	/**
	 * Enter a parse tree produced by `PddlParser.constraints`.
	 * @param ctx the parse tree
	 */
	enterConstraints?: (ctx: ConstraintsContext) => void;
	/**
	 * Exit a parse tree produced by `PddlParser.constraints`.
	 * @param ctx the parse tree
	 */
	exitConstraints?: (ctx: ConstraintsContext) => void;

	/**
	 * Enter a parse tree produced by `PddlParser.structureDef`.
	 * @param ctx the parse tree
	 */
	enterStructureDef?: (ctx: StructureDefContext) => void;
	/**
	 * Exit a parse tree produced by `PddlParser.structureDef`.
	 * @param ctx the parse tree
	 */
	exitStructureDef?: (ctx: StructureDefContext) => void;

	/**
	 * Enter a parse tree produced by `PddlParser.actionDef`.
	 * @param ctx the parse tree
	 */
	enterActionDef?: (ctx: ActionDefContext) => void;
	/**
	 * Exit a parse tree produced by `PddlParser.actionDef`.
	 * @param ctx the parse tree
	 */
	exitActionDef?: (ctx: ActionDefContext) => void;

	/**
	 * Enter a parse tree produced by `PddlParser.actionSymbol`.
	 * @param ctx the parse tree
	 */
	enterActionSymbol?: (ctx: ActionSymbolContext) => void;
	/**
	 * Exit a parse tree produced by `PddlParser.actionSymbol`.
	 * @param ctx the parse tree
	 */
	exitActionSymbol?: (ctx: ActionSymbolContext) => void;

	/**
	 * Enter a parse tree produced by `PddlParser.actionDefBody`.
	 * @param ctx the parse tree
	 */
	enterActionDefBody?: (ctx: ActionDefBodyContext) => void;
	/**
	 * Exit a parse tree produced by `PddlParser.actionDefBody`.
	 * @param ctx the parse tree
	 */
	exitActionDefBody?: (ctx: ActionDefBodyContext) => void;

	/**
	 * Enter a parse tree produced by `PddlParser.goalDesc`.
	 * @param ctx the parse tree
	 */
	enterGoalDesc?: (ctx: GoalDescContext) => void;
	/**
	 * Exit a parse tree produced by `PddlParser.goalDesc`.
	 * @param ctx the parse tree
	 */
	exitGoalDesc?: (ctx: GoalDescContext) => void;

	/**
	 * Enter a parse tree produced by `PddlParser.fComp`.
	 * @param ctx the parse tree
	 */
	enterFComp?: (ctx: FCompContext) => void;
	/**
	 * Exit a parse tree produced by `PddlParser.fComp`.
	 * @param ctx the parse tree
	 */
	exitFComp?: (ctx: FCompContext) => void;

	/**
	 * Enter a parse tree produced by `PddlParser.atomicTermFormula`.
	 * @param ctx the parse tree
	 */
	enterAtomicTermFormula?: (ctx: AtomicTermFormulaContext) => void;
	/**
	 * Exit a parse tree produced by `PddlParser.atomicTermFormula`.
	 * @param ctx the parse tree
	 */
	exitAtomicTermFormula?: (ctx: AtomicTermFormulaContext) => void;

	/**
	 * Enter a parse tree produced by `PddlParser.term`.
	 * @param ctx the parse tree
	 */
	enterTerm?: (ctx: TermContext) => void;
	/**
	 * Exit a parse tree produced by `PddlParser.term`.
	 * @param ctx the parse tree
	 */
	exitTerm?: (ctx: TermContext) => void;

	/**
	 * Enter a parse tree produced by `PddlParser.durativeActionDef`.
	 * @param ctx the parse tree
	 */
	enterDurativeActionDef?: (ctx: DurativeActionDefContext) => void;
	/**
	 * Exit a parse tree produced by `PddlParser.durativeActionDef`.
	 * @param ctx the parse tree
	 */
	exitDurativeActionDef?: (ctx: DurativeActionDefContext) => void;

	/**
	 * Enter a parse tree produced by `PddlParser.daDefBody`.
	 * @param ctx the parse tree
	 */
	enterDaDefBody?: (ctx: DaDefBodyContext) => void;
	/**
	 * Exit a parse tree produced by `PddlParser.daDefBody`.
	 * @param ctx the parse tree
	 */
	exitDaDefBody?: (ctx: DaDefBodyContext) => void;

	/**
	 * Enter a parse tree produced by `PddlParser.daGD`.
	 * @param ctx the parse tree
	 */
	enterDaGD?: (ctx: DaGDContext) => void;
	/**
	 * Exit a parse tree produced by `PddlParser.daGD`.
	 * @param ctx the parse tree
	 */
	exitDaGD?: (ctx: DaGDContext) => void;

	/**
	 * Enter a parse tree produced by `PddlParser.prefTimedGD`.
	 * @param ctx the parse tree
	 */
	enterPrefTimedGD?: (ctx: PrefTimedGDContext) => void;
	/**
	 * Exit a parse tree produced by `PddlParser.prefTimedGD`.
	 * @param ctx the parse tree
	 */
	exitPrefTimedGD?: (ctx: PrefTimedGDContext) => void;

	/**
	 * Enter a parse tree produced by `PddlParser.timedGD`.
	 * @param ctx the parse tree
	 */
	enterTimedGD?: (ctx: TimedGDContext) => void;
	/**
	 * Exit a parse tree produced by `PddlParser.timedGD`.
	 * @param ctx the parse tree
	 */
	exitTimedGD?: (ctx: TimedGDContext) => void;

	/**
	 * Enter a parse tree produced by `PddlParser.timeSpecifier`.
	 * @param ctx the parse tree
	 */
	enterTimeSpecifier?: (ctx: TimeSpecifierContext) => void;
	/**
	 * Exit a parse tree produced by `PddlParser.timeSpecifier`.
	 * @param ctx the parse tree
	 */
	exitTimeSpecifier?: (ctx: TimeSpecifierContext) => void;

	/**
	 * Enter a parse tree produced by `PddlParser.interval`.
	 * @param ctx the parse tree
	 */
	enterInterval?: (ctx: IntervalContext) => void;
	/**
	 * Exit a parse tree produced by `PddlParser.interval`.
	 * @param ctx the parse tree
	 */
	exitInterval?: (ctx: IntervalContext) => void;

	/**
	 * Enter a parse tree produced by `PddlParser.derivedDef`.
	 * @param ctx the parse tree
	 */
	enterDerivedDef?: (ctx: DerivedDefContext) => void;
	/**
	 * Exit a parse tree produced by `PddlParser.derivedDef`.
	 * @param ctx the parse tree
	 */
	exitDerivedDef?: (ctx: DerivedDefContext) => void;

	/**
	 * Enter a parse tree produced by `PddlParser.fExp`.
	 * @param ctx the parse tree
	 */
	enterFExp?: (ctx: FExpContext) => void;
	/**
	 * Exit a parse tree produced by `PddlParser.fExp`.
	 * @param ctx the parse tree
	 */
	exitFExp?: (ctx: FExpContext) => void;

	/**
	 * Enter a parse tree produced by `PddlParser.fExp2`.
	 * @param ctx the parse tree
	 */
	enterFExp2?: (ctx: FExp2Context) => void;
	/**
	 * Exit a parse tree produced by `PddlParser.fExp2`.
	 * @param ctx the parse tree
	 */
	exitFExp2?: (ctx: FExp2Context) => void;

	/**
	 * Enter a parse tree produced by `PddlParser.fHead`.
	 * @param ctx the parse tree
	 */
	enterFHead?: (ctx: FHeadContext) => void;
	/**
	 * Exit a parse tree produced by `PddlParser.fHead`.
	 * @param ctx the parse tree
	 */
	exitFHead?: (ctx: FHeadContext) => void;

	/**
	 * Enter a parse tree produced by `PddlParser.effect`.
	 * @param ctx the parse tree
	 */
	enterEffect?: (ctx: EffectContext) => void;
	/**
	 * Exit a parse tree produced by `PddlParser.effect`.
	 * @param ctx the parse tree
	 */
	exitEffect?: (ctx: EffectContext) => void;

	/**
	 * Enter a parse tree produced by `PddlParser.cEffect`.
	 * @param ctx the parse tree
	 */
	enterCEffect?: (ctx: CEffectContext) => void;
	/**
	 * Exit a parse tree produced by `PddlParser.cEffect`.
	 * @param ctx the parse tree
	 */
	exitCEffect?: (ctx: CEffectContext) => void;

	/**
	 * Enter a parse tree produced by `PddlParser.pEffect`.
	 * @param ctx the parse tree
	 */
	enterPEffect?: (ctx: PEffectContext) => void;
	/**
	 * Exit a parse tree produced by `PddlParser.pEffect`.
	 * @param ctx the parse tree
	 */
	exitPEffect?: (ctx: PEffectContext) => void;

	/**
	 * Enter a parse tree produced by `PddlParser.condEffect`.
	 * @param ctx the parse tree
	 */
	enterCondEffect?: (ctx: CondEffectContext) => void;
	/**
	 * Exit a parse tree produced by `PddlParser.condEffect`.
	 * @param ctx the parse tree
	 */
	exitCondEffect?: (ctx: CondEffectContext) => void;

	/**
	 * Enter a parse tree produced by `PddlParser.binaryOp`.
	 * @param ctx the parse tree
	 */
	enterBinaryOp?: (ctx: BinaryOpContext) => void;
	/**
	 * Exit a parse tree produced by `PddlParser.binaryOp`.
	 * @param ctx the parse tree
	 */
	exitBinaryOp?: (ctx: BinaryOpContext) => void;

	/**
	 * Enter a parse tree produced by `PddlParser.binaryComp`.
	 * @param ctx the parse tree
	 */
	enterBinaryComp?: (ctx: BinaryCompContext) => void;
	/**
	 * Exit a parse tree produced by `PddlParser.binaryComp`.
	 * @param ctx the parse tree
	 */
	exitBinaryComp?: (ctx: BinaryCompContext) => void;

	/**
	 * Enter a parse tree produced by `PddlParser.assignOp`.
	 * @param ctx the parse tree
	 */
	enterAssignOp?: (ctx: AssignOpContext) => void;
	/**
	 * Exit a parse tree produced by `PddlParser.assignOp`.
	 * @param ctx the parse tree
	 */
	exitAssignOp?: (ctx: AssignOpContext) => void;

	/**
	 * Enter a parse tree produced by `PddlParser.durationConstraint`.
	 * @param ctx the parse tree
	 */
	enterDurationConstraint?: (ctx: DurationConstraintContext) => void;
	/**
	 * Exit a parse tree produced by `PddlParser.durationConstraint`.
	 * @param ctx the parse tree
	 */
	exitDurationConstraint?: (ctx: DurationConstraintContext) => void;

	/**
	 * Enter a parse tree produced by `PddlParser.simpleDurationConstraint`.
	 * @param ctx the parse tree
	 */
	enterSimpleDurationConstraint?: (ctx: SimpleDurationConstraintContext) => void;
	/**
	 * Exit a parse tree produced by `PddlParser.simpleDurationConstraint`.
	 * @param ctx the parse tree
	 */
	exitSimpleDurationConstraint?: (ctx: SimpleDurationConstraintContext) => void;

	/**
	 * Enter a parse tree produced by `PddlParser.durOp`.
	 * @param ctx the parse tree
	 */
	enterDurOp?: (ctx: DurOpContext) => void;
	/**
	 * Exit a parse tree produced by `PddlParser.durOp`.
	 * @param ctx the parse tree
	 */
	exitDurOp?: (ctx: DurOpContext) => void;

	/**
	 * Enter a parse tree produced by `PddlParser.durValue`.
	 * @param ctx the parse tree
	 */
	enterDurValue?: (ctx: DurValueContext) => void;
	/**
	 * Exit a parse tree produced by `PddlParser.durValue`.
	 * @param ctx the parse tree
	 */
	exitDurValue?: (ctx: DurValueContext) => void;

	/**
	 * Enter a parse tree produced by `PddlParser.daEffect`.
	 * @param ctx the parse tree
	 */
	enterDaEffect?: (ctx: DaEffectContext) => void;
	/**
	 * Exit a parse tree produced by `PddlParser.daEffect`.
	 * @param ctx the parse tree
	 */
	exitDaEffect?: (ctx: DaEffectContext) => void;

	/**
	 * Enter a parse tree produced by `PddlParser.timedEffect`.
	 * @param ctx the parse tree
	 */
	enterTimedEffect?: (ctx: TimedEffectContext) => void;
	/**
	 * Exit a parse tree produced by `PddlParser.timedEffect`.
	 * @param ctx the parse tree
	 */
	exitTimedEffect?: (ctx: TimedEffectContext) => void;

	/**
	 * Enter a parse tree produced by `PddlParser.fAssignDA`.
	 * @param ctx the parse tree
	 */
	enterFAssignDA?: (ctx: FAssignDAContext) => void;
	/**
	 * Exit a parse tree produced by `PddlParser.fAssignDA`.
	 * @param ctx the parse tree
	 */
	exitFAssignDA?: (ctx: FAssignDAContext) => void;

	/**
	 * Enter a parse tree produced by `PddlParser.fExpDA`.
	 * @param ctx the parse tree
	 */
	enterFExpDA?: (ctx: FExpDAContext) => void;
	/**
	 * Exit a parse tree produced by `PddlParser.fExpDA`.
	 * @param ctx the parse tree
	 */
	exitFExpDA?: (ctx: FExpDAContext) => void;

	/**
	 * Enter a parse tree produced by `PddlParser.problem`.
	 * @param ctx the parse tree
	 */
	enterProblem?: (ctx: ProblemContext) => void;
	/**
	 * Exit a parse tree produced by `PddlParser.problem`.
	 * @param ctx the parse tree
	 */
	exitProblem?: (ctx: ProblemContext) => void;

	/**
	 * Enter a parse tree produced by `PddlParser.problemDecl`.
	 * @param ctx the parse tree
	 */
	enterProblemDecl?: (ctx: ProblemDeclContext) => void;
	/**
	 * Exit a parse tree produced by `PddlParser.problemDecl`.
	 * @param ctx the parse tree
	 */
	exitProblemDecl?: (ctx: ProblemDeclContext) => void;

	/**
	 * Enter a parse tree produced by `PddlParser.problemDomain`.
	 * @param ctx the parse tree
	 */
	enterProblemDomain?: (ctx: ProblemDomainContext) => void;
	/**
	 * Exit a parse tree produced by `PddlParser.problemDomain`.
	 * @param ctx the parse tree
	 */
	exitProblemDomain?: (ctx: ProblemDomainContext) => void;

	/**
	 * Enter a parse tree produced by `PddlParser.objectDecl`.
	 * @param ctx the parse tree
	 */
	enterObjectDecl?: (ctx: ObjectDeclContext) => void;
	/**
	 * Exit a parse tree produced by `PddlParser.objectDecl`.
	 * @param ctx the parse tree
	 */
	exitObjectDecl?: (ctx: ObjectDeclContext) => void;

	/**
	 * Enter a parse tree produced by `PddlParser.init`.
	 * @param ctx the parse tree
	 */
	enterInit?: (ctx: InitContext) => void;
	/**
	 * Exit a parse tree produced by `PddlParser.init`.
	 * @param ctx the parse tree
	 */
	exitInit?: (ctx: InitContext) => void;

	/**
	 * Enter a parse tree produced by `PddlParser.initEl`.
	 * @param ctx the parse tree
	 */
	enterInitEl?: (ctx: InitElContext) => void;
	/**
	 * Exit a parse tree produced by `PddlParser.initEl`.
	 * @param ctx the parse tree
	 */
	exitInitEl?: (ctx: InitElContext) => void;

	/**
	 * Enter a parse tree produced by `PddlParser.nameLiteral`.
	 * @param ctx the parse tree
	 */
	enterNameLiteral?: (ctx: NameLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `PddlParser.nameLiteral`.
	 * @param ctx the parse tree
	 */
	exitNameLiteral?: (ctx: NameLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `PddlParser.atomicNameFormula`.
	 * @param ctx the parse tree
	 */
	enterAtomicNameFormula?: (ctx: AtomicNameFormulaContext) => void;
	/**
	 * Exit a parse tree produced by `PddlParser.atomicNameFormula`.
	 * @param ctx the parse tree
	 */
	exitAtomicNameFormula?: (ctx: AtomicNameFormulaContext) => void;

	/**
	 * Enter a parse tree produced by `PddlParser.goal`.
	 * @param ctx the parse tree
	 */
	enterGoal?: (ctx: GoalContext) => void;
	/**
	 * Exit a parse tree produced by `PddlParser.goal`.
	 * @param ctx the parse tree
	 */
	exitGoal?: (ctx: GoalContext) => void;

	/**
	 * Enter a parse tree produced by `PddlParser.probConstraints`.
	 * @param ctx the parse tree
	 */
	enterProbConstraints?: (ctx: ProbConstraintsContext) => void;
	/**
	 * Exit a parse tree produced by `PddlParser.probConstraints`.
	 * @param ctx the parse tree
	 */
	exitProbConstraints?: (ctx: ProbConstraintsContext) => void;

	/**
	 * Enter a parse tree produced by `PddlParser.prefConGD`.
	 * @param ctx the parse tree
	 */
	enterPrefConGD?: (ctx: PrefConGDContext) => void;
	/**
	 * Exit a parse tree produced by `PddlParser.prefConGD`.
	 * @param ctx the parse tree
	 */
	exitPrefConGD?: (ctx: PrefConGDContext) => void;

	/**
	 * Enter a parse tree produced by `PddlParser.metricSpec`.
	 * @param ctx the parse tree
	 */
	enterMetricSpec?: (ctx: MetricSpecContext) => void;
	/**
	 * Exit a parse tree produced by `PddlParser.metricSpec`.
	 * @param ctx the parse tree
	 */
	exitMetricSpec?: (ctx: MetricSpecContext) => void;

	/**
	 * Enter a parse tree produced by `PddlParser.optimization`.
	 * @param ctx the parse tree
	 */
	enterOptimization?: (ctx: OptimizationContext) => void;
	/**
	 * Exit a parse tree produced by `PddlParser.optimization`.
	 * @param ctx the parse tree
	 */
	exitOptimization?: (ctx: OptimizationContext) => void;

	/**
	 * Enter a parse tree produced by `PddlParser.metricFExp`.
	 * @param ctx the parse tree
	 */
	enterMetricFExp?: (ctx: MetricFExpContext) => void;
	/**
	 * Exit a parse tree produced by `PddlParser.metricFExp`.
	 * @param ctx the parse tree
	 */
	exitMetricFExp?: (ctx: MetricFExpContext) => void;

	/**
	 * Enter a parse tree produced by `PddlParser.conGD`.
	 * @param ctx the parse tree
	 */
	enterConGD?: (ctx: ConGDContext) => void;
	/**
	 * Exit a parse tree produced by `PddlParser.conGD`.
	 * @param ctx the parse tree
	 */
	exitConGD?: (ctx: ConGDContext) => void;
}

