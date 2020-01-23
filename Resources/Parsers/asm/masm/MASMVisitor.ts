// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/asm/masm/MASM.g4 by ANTLR 4.7.3-SNAPSHOT

 
 	 package com.Ostermiller.Syntax;
 	 

import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `MASMParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface MASMVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `MASMParser.compilationUnit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompilationUnit?: (ctx: CompilationUnitContext) => Result;

	/**
	 * Visit a parse tree produced by `MASMParser.segments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSegments?: (ctx: SegmentsContext) => Result;

	/**
	 * Visit a parse tree produced by `MASMParser.proc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProc?: (ctx: ProcContext) => Result;

	/**
	 * Visit a parse tree produced by `MASMParser.code`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCode?: (ctx: CodeContext) => Result;

	/**
	 * Visit a parse tree produced by `MASMParser.binary_exp1`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinary_exp1?: (ctx: Binary_exp1Context) => Result;

	/**
	 * Visit a parse tree produced by `MASMParser.unuary_exp1`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnuary_exp1?: (ctx: Unuary_exp1Context) => Result;

	/**
	 * Visit a parse tree produced by `MASMParser.unuary_exp2`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnuary_exp2?: (ctx: Unuary_exp2Context) => Result;

	/**
	 * Visit a parse tree produced by `MASMParser.binary_exp2`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinary_exp2?: (ctx: Binary_exp2Context) => Result;

	/**
	 * Visit a parse tree produced by `MASMParser.notarguments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNotarguments?: (ctx: NotargumentsContext) => Result;

	/**
	 * Visit a parse tree produced by `MASMParser.binary_exp3`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinary_exp3?: (ctx: Binary_exp3Context) => Result;

	/**
	 * Visit a parse tree produced by `MASMParser.unuary_exp3`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnuary_exp3?: (ctx: Unuary_exp3Context) => Result;

	/**
	 * Visit a parse tree produced by `MASMParser.binary_exp4`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinary_exp4?: (ctx: Binary_exp4Context) => Result;

	/**
	 * Visit a parse tree produced by `MASMParser.binary_exp5`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinary_exp5?: (ctx: Binary_exp5Context) => Result;

	/**
	 * Visit a parse tree produced by `MASMParser.binary_exp6`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinary_exp6?: (ctx: Binary_exp6Context) => Result;

	/**
	 * Visit a parse tree produced by `MASMParser.binary_exp7`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinary_exp7?: (ctx: Binary_exp7Context) => Result;

	/**
	 * Visit a parse tree produced by `MASMParser.binary_exp8`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinary_exp8?: (ctx: Binary_exp8Context) => Result;

	/**
	 * Visit a parse tree produced by `MASMParser.binary_exp9`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinary_exp9?: (ctx: Binary_exp9Context) => Result;

	/**
	 * Visit a parse tree produced by `MASMParser.unuary_exp4`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnuary_exp4?: (ctx: Unuary_exp4Context) => Result;

	/**
	 * Visit a parse tree produced by `MASMParser.unuary_exp5`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnuary_exp5?: (ctx: Unuary_exp5Context) => Result;

	/**
	 * Visit a parse tree produced by `MASMParser.binary_exp10`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinary_exp10?: (ctx: Binary_exp10Context) => Result;

	/**
	 * Visit a parse tree produced by `MASMParser.binary_exp11`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinary_exp11?: (ctx: Binary_exp11Context) => Result;

	/**
	 * Visit a parse tree produced by `MASMParser.binary_exp12`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinary_exp12?: (ctx: Binary_exp12Context) => Result;

	/**
	 * Visit a parse tree produced by `MASMParser.directive_exp1`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDirective_exp1?: (ctx: Directive_exp1Context) => Result;

	/**
	 * Visit a parse tree produced by `MASMParser.variabledeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariabledeclaration?: (ctx: VariabledeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `MASMParser.memory`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMemory?: (ctx: MemoryContext) => Result;

	/**
	 * Visit a parse tree produced by `MASMParser.segmentos`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSegmentos?: (ctx: SegmentosContext) => Result;

	/**
	 * Visit a parse tree produced by `MASMParser.register`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRegister?: (ctx: RegisterContext) => Result;

	/**
	 * Visit a parse tree produced by `MASMParser.o`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitO?: (ctx: OContext) => Result;

	/**
	 * Visit a parse tree produced by `MASMParser.op`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOp?: (ctx: OpContext) => Result;

	/**
	 * Visit a parse tree produced by `MASMParser.ope`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOpe?: (ctx: OpeContext) => Result;

	/**
	 * Visit a parse tree produced by `MASMParser.oper`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOper?: (ctx: OperContext) => Result;

	/**
	 * Visit a parse tree produced by `MASMParser.opera`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOpera?: (ctx: OperaContext) => Result;

	/**
	 * Visit a parse tree produced by `MASMParser.operat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOperat?: (ctx: OperatContext) => Result;

	/**
	 * Visit a parse tree produced by `MASMParser.operato`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOperato?: (ctx: OperatoContext) => Result;

	/**
	 * Visit a parse tree produced by `MASMParser.operator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOperator?: (ctx: OperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `MASMParser.l`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitL?: (ctx: LContext) => Result;

	/**
	 * Visit a parse tree produced by `MASMParser.x`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitX?: (ctx: XContext) => Result;

	/**
	 * Visit a parse tree produced by `MASMParser.s`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitS?: (ctx: SContext) => Result;

	/**
	 * Visit a parse tree produced by `MASMParser.sh`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSh?: (ctx: ShContext) => Result;

	/**
	 * Visit a parse tree produced by `MASMParser.b`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitB?: (ctx: BContext) => Result;

	/**
	 * Visit a parse tree produced by `MASMParser.call`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCall?: (ctx: CallContext) => Result;

	/**
	 * Visit a parse tree produced by `MASMParser.interruption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterruption?: (ctx: InterruptionContext) => Result;

	/**
	 * Visit a parse tree produced by `MASMParser.in`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIn?: (ctx: InContext) => Result;

	/**
	 * Visit a parse tree produced by `MASMParser.out`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOut?: (ctx: OutContext) => Result;

	/**
	 * Visit a parse tree produced by `MASMParser.re`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRe?: (ctx: ReContext) => Result;

	/**
	 * Visit a parse tree produced by `MASMParser.directives`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDirectives?: (ctx: DirectivesContext) => Result;

	/**
	 * Visit a parse tree produced by `MASMParser.ty`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTy?: (ctx: TyContext) => Result;

	/**
	 * Visit a parse tree produced by `MASMParser.question`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuestion?: (ctx: QuestionContext) => Result;

	/**
	 * Visit a parse tree produced by `MASMParser.time`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTime?: (ctx: TimeContext) => Result;
}

