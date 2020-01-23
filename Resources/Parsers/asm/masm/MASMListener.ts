// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/asm/masm/MASM.g4 by ANTLR 4.7.3-SNAPSHOT

 
 	 package com.Ostermiller.Syntax;
 	 

import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { CompilationUnitContext } from "./MASMParser";
import { SegmentsContext } from "./MASMParser";
import { ProcContext } from "./MASMParser";
import { CodeContext } from "./MASMParser";
import { Binary_exp1Context } from "./MASMParser";
import { Unuary_exp1Context } from "./MASMParser";
import { Unuary_exp2Context } from "./MASMParser";
import { Binary_exp2Context } from "./MASMParser";
import { NotargumentsContext } from "./MASMParser";
import { Binary_exp3Context } from "./MASMParser";
import { Unuary_exp3Context } from "./MASMParser";
import { Binary_exp4Context } from "./MASMParser";
import { Binary_exp5Context } from "./MASMParser";
import { Binary_exp6Context } from "./MASMParser";
import { Binary_exp7Context } from "./MASMParser";
import { Binary_exp8Context } from "./MASMParser";
import { Binary_exp9Context } from "./MASMParser";
import { Unuary_exp4Context } from "./MASMParser";
import { Unuary_exp5Context } from "./MASMParser";
import { Binary_exp10Context } from "./MASMParser";
import { Binary_exp11Context } from "./MASMParser";
import { Binary_exp12Context } from "./MASMParser";
import { Directive_exp1Context } from "./MASMParser";
import { VariabledeclarationContext } from "./MASMParser";
import { MemoryContext } from "./MASMParser";
import { SegmentosContext } from "./MASMParser";
import { RegisterContext } from "./MASMParser";
import { OContext } from "./MASMParser";
import { OpContext } from "./MASMParser";
import { OpeContext } from "./MASMParser";
import { OperContext } from "./MASMParser";
import { OperaContext } from "./MASMParser";
import { OperatContext } from "./MASMParser";
import { OperatoContext } from "./MASMParser";
import { OperatorContext } from "./MASMParser";
import { LContext } from "./MASMParser";
import { XContext } from "./MASMParser";
import { SContext } from "./MASMParser";
import { ShContext } from "./MASMParser";
import { BContext } from "./MASMParser";
import { CallContext } from "./MASMParser";
import { InterruptionContext } from "./MASMParser";
import { InContext } from "./MASMParser";
import { OutContext } from "./MASMParser";
import { ReContext } from "./MASMParser";
import { DirectivesContext } from "./MASMParser";
import { TyContext } from "./MASMParser";
import { QuestionContext } from "./MASMParser";
import { TimeContext } from "./MASMParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `MASMParser`.
 */
export interface MASMListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `MASMParser.compilationUnit`.
	 * @param ctx the parse tree
	 */
	enterCompilationUnit?: (ctx: CompilationUnitContext) => void;
	/**
	 * Exit a parse tree produced by `MASMParser.compilationUnit`.
	 * @param ctx the parse tree
	 */
	exitCompilationUnit?: (ctx: CompilationUnitContext) => void;

	/**
	 * Enter a parse tree produced by `MASMParser.segments`.
	 * @param ctx the parse tree
	 */
	enterSegments?: (ctx: SegmentsContext) => void;
	/**
	 * Exit a parse tree produced by `MASMParser.segments`.
	 * @param ctx the parse tree
	 */
	exitSegments?: (ctx: SegmentsContext) => void;

	/**
	 * Enter a parse tree produced by `MASMParser.proc`.
	 * @param ctx the parse tree
	 */
	enterProc?: (ctx: ProcContext) => void;
	/**
	 * Exit a parse tree produced by `MASMParser.proc`.
	 * @param ctx the parse tree
	 */
	exitProc?: (ctx: ProcContext) => void;

	/**
	 * Enter a parse tree produced by `MASMParser.code`.
	 * @param ctx the parse tree
	 */
	enterCode?: (ctx: CodeContext) => void;
	/**
	 * Exit a parse tree produced by `MASMParser.code`.
	 * @param ctx the parse tree
	 */
	exitCode?: (ctx: CodeContext) => void;

	/**
	 * Enter a parse tree produced by `MASMParser.binary_exp1`.
	 * @param ctx the parse tree
	 */
	enterBinary_exp1?: (ctx: Binary_exp1Context) => void;
	/**
	 * Exit a parse tree produced by `MASMParser.binary_exp1`.
	 * @param ctx the parse tree
	 */
	exitBinary_exp1?: (ctx: Binary_exp1Context) => void;

	/**
	 * Enter a parse tree produced by `MASMParser.unuary_exp1`.
	 * @param ctx the parse tree
	 */
	enterUnuary_exp1?: (ctx: Unuary_exp1Context) => void;
	/**
	 * Exit a parse tree produced by `MASMParser.unuary_exp1`.
	 * @param ctx the parse tree
	 */
	exitUnuary_exp1?: (ctx: Unuary_exp1Context) => void;

	/**
	 * Enter a parse tree produced by `MASMParser.unuary_exp2`.
	 * @param ctx the parse tree
	 */
	enterUnuary_exp2?: (ctx: Unuary_exp2Context) => void;
	/**
	 * Exit a parse tree produced by `MASMParser.unuary_exp2`.
	 * @param ctx the parse tree
	 */
	exitUnuary_exp2?: (ctx: Unuary_exp2Context) => void;

	/**
	 * Enter a parse tree produced by `MASMParser.binary_exp2`.
	 * @param ctx the parse tree
	 */
	enterBinary_exp2?: (ctx: Binary_exp2Context) => void;
	/**
	 * Exit a parse tree produced by `MASMParser.binary_exp2`.
	 * @param ctx the parse tree
	 */
	exitBinary_exp2?: (ctx: Binary_exp2Context) => void;

	/**
	 * Enter a parse tree produced by `MASMParser.notarguments`.
	 * @param ctx the parse tree
	 */
	enterNotarguments?: (ctx: NotargumentsContext) => void;
	/**
	 * Exit a parse tree produced by `MASMParser.notarguments`.
	 * @param ctx the parse tree
	 */
	exitNotarguments?: (ctx: NotargumentsContext) => void;

	/**
	 * Enter a parse tree produced by `MASMParser.binary_exp3`.
	 * @param ctx the parse tree
	 */
	enterBinary_exp3?: (ctx: Binary_exp3Context) => void;
	/**
	 * Exit a parse tree produced by `MASMParser.binary_exp3`.
	 * @param ctx the parse tree
	 */
	exitBinary_exp3?: (ctx: Binary_exp3Context) => void;

	/**
	 * Enter a parse tree produced by `MASMParser.unuary_exp3`.
	 * @param ctx the parse tree
	 */
	enterUnuary_exp3?: (ctx: Unuary_exp3Context) => void;
	/**
	 * Exit a parse tree produced by `MASMParser.unuary_exp3`.
	 * @param ctx the parse tree
	 */
	exitUnuary_exp3?: (ctx: Unuary_exp3Context) => void;

	/**
	 * Enter a parse tree produced by `MASMParser.binary_exp4`.
	 * @param ctx the parse tree
	 */
	enterBinary_exp4?: (ctx: Binary_exp4Context) => void;
	/**
	 * Exit a parse tree produced by `MASMParser.binary_exp4`.
	 * @param ctx the parse tree
	 */
	exitBinary_exp4?: (ctx: Binary_exp4Context) => void;

	/**
	 * Enter a parse tree produced by `MASMParser.binary_exp5`.
	 * @param ctx the parse tree
	 */
	enterBinary_exp5?: (ctx: Binary_exp5Context) => void;
	/**
	 * Exit a parse tree produced by `MASMParser.binary_exp5`.
	 * @param ctx the parse tree
	 */
	exitBinary_exp5?: (ctx: Binary_exp5Context) => void;

	/**
	 * Enter a parse tree produced by `MASMParser.binary_exp6`.
	 * @param ctx the parse tree
	 */
	enterBinary_exp6?: (ctx: Binary_exp6Context) => void;
	/**
	 * Exit a parse tree produced by `MASMParser.binary_exp6`.
	 * @param ctx the parse tree
	 */
	exitBinary_exp6?: (ctx: Binary_exp6Context) => void;

	/**
	 * Enter a parse tree produced by `MASMParser.binary_exp7`.
	 * @param ctx the parse tree
	 */
	enterBinary_exp7?: (ctx: Binary_exp7Context) => void;
	/**
	 * Exit a parse tree produced by `MASMParser.binary_exp7`.
	 * @param ctx the parse tree
	 */
	exitBinary_exp7?: (ctx: Binary_exp7Context) => void;

	/**
	 * Enter a parse tree produced by `MASMParser.binary_exp8`.
	 * @param ctx the parse tree
	 */
	enterBinary_exp8?: (ctx: Binary_exp8Context) => void;
	/**
	 * Exit a parse tree produced by `MASMParser.binary_exp8`.
	 * @param ctx the parse tree
	 */
	exitBinary_exp8?: (ctx: Binary_exp8Context) => void;

	/**
	 * Enter a parse tree produced by `MASMParser.binary_exp9`.
	 * @param ctx the parse tree
	 */
	enterBinary_exp9?: (ctx: Binary_exp9Context) => void;
	/**
	 * Exit a parse tree produced by `MASMParser.binary_exp9`.
	 * @param ctx the parse tree
	 */
	exitBinary_exp9?: (ctx: Binary_exp9Context) => void;

	/**
	 * Enter a parse tree produced by `MASMParser.unuary_exp4`.
	 * @param ctx the parse tree
	 */
	enterUnuary_exp4?: (ctx: Unuary_exp4Context) => void;
	/**
	 * Exit a parse tree produced by `MASMParser.unuary_exp4`.
	 * @param ctx the parse tree
	 */
	exitUnuary_exp4?: (ctx: Unuary_exp4Context) => void;

	/**
	 * Enter a parse tree produced by `MASMParser.unuary_exp5`.
	 * @param ctx the parse tree
	 */
	enterUnuary_exp5?: (ctx: Unuary_exp5Context) => void;
	/**
	 * Exit a parse tree produced by `MASMParser.unuary_exp5`.
	 * @param ctx the parse tree
	 */
	exitUnuary_exp5?: (ctx: Unuary_exp5Context) => void;

	/**
	 * Enter a parse tree produced by `MASMParser.binary_exp10`.
	 * @param ctx the parse tree
	 */
	enterBinary_exp10?: (ctx: Binary_exp10Context) => void;
	/**
	 * Exit a parse tree produced by `MASMParser.binary_exp10`.
	 * @param ctx the parse tree
	 */
	exitBinary_exp10?: (ctx: Binary_exp10Context) => void;

	/**
	 * Enter a parse tree produced by `MASMParser.binary_exp11`.
	 * @param ctx the parse tree
	 */
	enterBinary_exp11?: (ctx: Binary_exp11Context) => void;
	/**
	 * Exit a parse tree produced by `MASMParser.binary_exp11`.
	 * @param ctx the parse tree
	 */
	exitBinary_exp11?: (ctx: Binary_exp11Context) => void;

	/**
	 * Enter a parse tree produced by `MASMParser.binary_exp12`.
	 * @param ctx the parse tree
	 */
	enterBinary_exp12?: (ctx: Binary_exp12Context) => void;
	/**
	 * Exit a parse tree produced by `MASMParser.binary_exp12`.
	 * @param ctx the parse tree
	 */
	exitBinary_exp12?: (ctx: Binary_exp12Context) => void;

	/**
	 * Enter a parse tree produced by `MASMParser.directive_exp1`.
	 * @param ctx the parse tree
	 */
	enterDirective_exp1?: (ctx: Directive_exp1Context) => void;
	/**
	 * Exit a parse tree produced by `MASMParser.directive_exp1`.
	 * @param ctx the parse tree
	 */
	exitDirective_exp1?: (ctx: Directive_exp1Context) => void;

	/**
	 * Enter a parse tree produced by `MASMParser.variabledeclaration`.
	 * @param ctx the parse tree
	 */
	enterVariabledeclaration?: (ctx: VariabledeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `MASMParser.variabledeclaration`.
	 * @param ctx the parse tree
	 */
	exitVariabledeclaration?: (ctx: VariabledeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `MASMParser.memory`.
	 * @param ctx the parse tree
	 */
	enterMemory?: (ctx: MemoryContext) => void;
	/**
	 * Exit a parse tree produced by `MASMParser.memory`.
	 * @param ctx the parse tree
	 */
	exitMemory?: (ctx: MemoryContext) => void;

	/**
	 * Enter a parse tree produced by `MASMParser.segmentos`.
	 * @param ctx the parse tree
	 */
	enterSegmentos?: (ctx: SegmentosContext) => void;
	/**
	 * Exit a parse tree produced by `MASMParser.segmentos`.
	 * @param ctx the parse tree
	 */
	exitSegmentos?: (ctx: SegmentosContext) => void;

	/**
	 * Enter a parse tree produced by `MASMParser.register`.
	 * @param ctx the parse tree
	 */
	enterRegister?: (ctx: RegisterContext) => void;
	/**
	 * Exit a parse tree produced by `MASMParser.register`.
	 * @param ctx the parse tree
	 */
	exitRegister?: (ctx: RegisterContext) => void;

	/**
	 * Enter a parse tree produced by `MASMParser.o`.
	 * @param ctx the parse tree
	 */
	enterO?: (ctx: OContext) => void;
	/**
	 * Exit a parse tree produced by `MASMParser.o`.
	 * @param ctx the parse tree
	 */
	exitO?: (ctx: OContext) => void;

	/**
	 * Enter a parse tree produced by `MASMParser.op`.
	 * @param ctx the parse tree
	 */
	enterOp?: (ctx: OpContext) => void;
	/**
	 * Exit a parse tree produced by `MASMParser.op`.
	 * @param ctx the parse tree
	 */
	exitOp?: (ctx: OpContext) => void;

	/**
	 * Enter a parse tree produced by `MASMParser.ope`.
	 * @param ctx the parse tree
	 */
	enterOpe?: (ctx: OpeContext) => void;
	/**
	 * Exit a parse tree produced by `MASMParser.ope`.
	 * @param ctx the parse tree
	 */
	exitOpe?: (ctx: OpeContext) => void;

	/**
	 * Enter a parse tree produced by `MASMParser.oper`.
	 * @param ctx the parse tree
	 */
	enterOper?: (ctx: OperContext) => void;
	/**
	 * Exit a parse tree produced by `MASMParser.oper`.
	 * @param ctx the parse tree
	 */
	exitOper?: (ctx: OperContext) => void;

	/**
	 * Enter a parse tree produced by `MASMParser.opera`.
	 * @param ctx the parse tree
	 */
	enterOpera?: (ctx: OperaContext) => void;
	/**
	 * Exit a parse tree produced by `MASMParser.opera`.
	 * @param ctx the parse tree
	 */
	exitOpera?: (ctx: OperaContext) => void;

	/**
	 * Enter a parse tree produced by `MASMParser.operat`.
	 * @param ctx the parse tree
	 */
	enterOperat?: (ctx: OperatContext) => void;
	/**
	 * Exit a parse tree produced by `MASMParser.operat`.
	 * @param ctx the parse tree
	 */
	exitOperat?: (ctx: OperatContext) => void;

	/**
	 * Enter a parse tree produced by `MASMParser.operato`.
	 * @param ctx the parse tree
	 */
	enterOperato?: (ctx: OperatoContext) => void;
	/**
	 * Exit a parse tree produced by `MASMParser.operato`.
	 * @param ctx the parse tree
	 */
	exitOperato?: (ctx: OperatoContext) => void;

	/**
	 * Enter a parse tree produced by `MASMParser.operator`.
	 * @param ctx the parse tree
	 */
	enterOperator?: (ctx: OperatorContext) => void;
	/**
	 * Exit a parse tree produced by `MASMParser.operator`.
	 * @param ctx the parse tree
	 */
	exitOperator?: (ctx: OperatorContext) => void;

	/**
	 * Enter a parse tree produced by `MASMParser.l`.
	 * @param ctx the parse tree
	 */
	enterL?: (ctx: LContext) => void;
	/**
	 * Exit a parse tree produced by `MASMParser.l`.
	 * @param ctx the parse tree
	 */
	exitL?: (ctx: LContext) => void;

	/**
	 * Enter a parse tree produced by `MASMParser.x`.
	 * @param ctx the parse tree
	 */
	enterX?: (ctx: XContext) => void;
	/**
	 * Exit a parse tree produced by `MASMParser.x`.
	 * @param ctx the parse tree
	 */
	exitX?: (ctx: XContext) => void;

	/**
	 * Enter a parse tree produced by `MASMParser.s`.
	 * @param ctx the parse tree
	 */
	enterS?: (ctx: SContext) => void;
	/**
	 * Exit a parse tree produced by `MASMParser.s`.
	 * @param ctx the parse tree
	 */
	exitS?: (ctx: SContext) => void;

	/**
	 * Enter a parse tree produced by `MASMParser.sh`.
	 * @param ctx the parse tree
	 */
	enterSh?: (ctx: ShContext) => void;
	/**
	 * Exit a parse tree produced by `MASMParser.sh`.
	 * @param ctx the parse tree
	 */
	exitSh?: (ctx: ShContext) => void;

	/**
	 * Enter a parse tree produced by `MASMParser.b`.
	 * @param ctx the parse tree
	 */
	enterB?: (ctx: BContext) => void;
	/**
	 * Exit a parse tree produced by `MASMParser.b`.
	 * @param ctx the parse tree
	 */
	exitB?: (ctx: BContext) => void;

	/**
	 * Enter a parse tree produced by `MASMParser.call`.
	 * @param ctx the parse tree
	 */
	enterCall?: (ctx: CallContext) => void;
	/**
	 * Exit a parse tree produced by `MASMParser.call`.
	 * @param ctx the parse tree
	 */
	exitCall?: (ctx: CallContext) => void;

	/**
	 * Enter a parse tree produced by `MASMParser.interruption`.
	 * @param ctx the parse tree
	 */
	enterInterruption?: (ctx: InterruptionContext) => void;
	/**
	 * Exit a parse tree produced by `MASMParser.interruption`.
	 * @param ctx the parse tree
	 */
	exitInterruption?: (ctx: InterruptionContext) => void;

	/**
	 * Enter a parse tree produced by `MASMParser.in`.
	 * @param ctx the parse tree
	 */
	enterIn?: (ctx: InContext) => void;
	/**
	 * Exit a parse tree produced by `MASMParser.in`.
	 * @param ctx the parse tree
	 */
	exitIn?: (ctx: InContext) => void;

	/**
	 * Enter a parse tree produced by `MASMParser.out`.
	 * @param ctx the parse tree
	 */
	enterOut?: (ctx: OutContext) => void;
	/**
	 * Exit a parse tree produced by `MASMParser.out`.
	 * @param ctx the parse tree
	 */
	exitOut?: (ctx: OutContext) => void;

	/**
	 * Enter a parse tree produced by `MASMParser.re`.
	 * @param ctx the parse tree
	 */
	enterRe?: (ctx: ReContext) => void;
	/**
	 * Exit a parse tree produced by `MASMParser.re`.
	 * @param ctx the parse tree
	 */
	exitRe?: (ctx: ReContext) => void;

	/**
	 * Enter a parse tree produced by `MASMParser.directives`.
	 * @param ctx the parse tree
	 */
	enterDirectives?: (ctx: DirectivesContext) => void;
	/**
	 * Exit a parse tree produced by `MASMParser.directives`.
	 * @param ctx the parse tree
	 */
	exitDirectives?: (ctx: DirectivesContext) => void;

	/**
	 * Enter a parse tree produced by `MASMParser.ty`.
	 * @param ctx the parse tree
	 */
	enterTy?: (ctx: TyContext) => void;
	/**
	 * Exit a parse tree produced by `MASMParser.ty`.
	 * @param ctx the parse tree
	 */
	exitTy?: (ctx: TyContext) => void;

	/**
	 * Enter a parse tree produced by `MASMParser.question`.
	 * @param ctx the parse tree
	 */
	enterQuestion?: (ctx: QuestionContext) => void;
	/**
	 * Exit a parse tree produced by `MASMParser.question`.
	 * @param ctx the parse tree
	 */
	exitQuestion?: (ctx: QuestionContext) => void;

	/**
	 * Enter a parse tree produced by `MASMParser.time`.
	 * @param ctx the parse tree
	 */
	enterTime?: (ctx: TimeContext) => void;
	/**
	 * Exit a parse tree produced by `MASMParser.time`.
	 * @param ctx the parse tree
	 */
	exitTime?: (ctx: TimeContext) => void;
}

