// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/logo/ucb-logo/UCBLogo.g4 by ANTLR 4.7.3-SNAPSHOT


  import java.util.Map;
  import java.util.HashMap;


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { UnaryMinusExpressionContext } from "./UCBLogoParser";
import { ProcedureCallExtraInputContext } from "./UCBLogoParser";
import { ProcedureCallExpressionContext } from "./UCBLogoParser";
import { ParensExpressionContext } from "./UCBLogoParser";
import { ArrayExpressionContext } from "./UCBLogoParser";
import { ListExpressionContext } from "./UCBLogoParser";
import { WordExpressionContext } from "./UCBLogoParser";
import { QuotedWordExpressionContext } from "./UCBLogoParser";
import { NumberExpressionContext } from "./UCBLogoParser";
import { VariableExpressionContext } from "./UCBLogoParser";
import { NameExpressionContext } from "./UCBLogoParser";
import { MultiplyExpressionContext } from "./UCBLogoParser";
import { DivideExpressionContext } from "./UCBLogoParser";
import { AdditionExpressionContext } from "./UCBLogoParser";
import { SubtractionExpressionContext } from "./UCBLogoParser";
import { LessThanExpressionContext } from "./UCBLogoParser";
import { GreaterThanExpressionContext } from "./UCBLogoParser";
import { LessThanEqualsExpressionContext } from "./UCBLogoParser";
import { GreaterThanEqualsExpressionContext } from "./UCBLogoParser";
import { EqualsExpressionContext } from "./UCBLogoParser";
import { NotEqualsExpressionExpressionContext } from "./UCBLogoParser";
import { ProcedureDefInstructionContext } from "./UCBLogoParser";
import { MacroDefInstructionContext } from "./UCBLogoParser";
import { ProcedureCallExtraInputInstructionContext } from "./UCBLogoParser";
import { ProcedureCallInstructionContext } from "./UCBLogoParser";
import { ParseContext } from "./UCBLogoParser";
import { InstructionContext } from "./UCBLogoParser";
import { Procedure_defContext } from "./UCBLogoParser";
import { Macro_defContext } from "./UCBLogoParser";
import { VariablesContext } from "./UCBLogoParser";
import { Body_defContext } from "./UCBLogoParser";
import { Body_instructionContext } from "./UCBLogoParser";
import { Procedure_call_extra_inputContext } from "./UCBLogoParser";
import { Procedure_callContext } from "./UCBLogoParser";
import { ExpressionsContext } from "./UCBLogoParser";
import { ExpressionContext } from "./UCBLogoParser";
import { ArrayContext } from "./UCBLogoParser";
import { ListContext } from "./UCBLogoParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `UCBLogoParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface UCBLogoVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `unaryMinusExpression`
	 * labeled alternative in `UCBLogoParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryMinusExpression?: (ctx: UnaryMinusExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `procedureCallExtraInput`
	 * labeled alternative in `UCBLogoParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProcedureCallExtraInput?: (ctx: ProcedureCallExtraInputContext) => Result;

	/**
	 * Visit a parse tree produced by the `procedureCallExpression`
	 * labeled alternative in `UCBLogoParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProcedureCallExpression?: (ctx: ProcedureCallExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `parensExpression`
	 * labeled alternative in `UCBLogoParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParensExpression?: (ctx: ParensExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `arrayExpression`
	 * labeled alternative in `UCBLogoParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayExpression?: (ctx: ArrayExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `listExpression`
	 * labeled alternative in `UCBLogoParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitListExpression?: (ctx: ListExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `wordExpression`
	 * labeled alternative in `UCBLogoParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWordExpression?: (ctx: WordExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `quotedWordExpression`
	 * labeled alternative in `UCBLogoParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuotedWordExpression?: (ctx: QuotedWordExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `numberExpression`
	 * labeled alternative in `UCBLogoParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumberExpression?: (ctx: NumberExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `variableExpression`
	 * labeled alternative in `UCBLogoParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableExpression?: (ctx: VariableExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `nameExpression`
	 * labeled alternative in `UCBLogoParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNameExpression?: (ctx: NameExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `multiplyExpression`
	 * labeled alternative in `UCBLogoParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplyExpression?: (ctx: MultiplyExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `divideExpression`
	 * labeled alternative in `UCBLogoParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDivideExpression?: (ctx: DivideExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `additionExpression`
	 * labeled alternative in `UCBLogoParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdditionExpression?: (ctx: AdditionExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `subtractionExpression`
	 * labeled alternative in `UCBLogoParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubtractionExpression?: (ctx: SubtractionExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `lessThanExpression`
	 * labeled alternative in `UCBLogoParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLessThanExpression?: (ctx: LessThanExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `greaterThanExpression`
	 * labeled alternative in `UCBLogoParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGreaterThanExpression?: (ctx: GreaterThanExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `lessThanEqualsExpression`
	 * labeled alternative in `UCBLogoParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLessThanEqualsExpression?: (ctx: LessThanEqualsExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `greaterThanEqualsExpression`
	 * labeled alternative in `UCBLogoParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGreaterThanEqualsExpression?: (ctx: GreaterThanEqualsExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `equalsExpression`
	 * labeled alternative in `UCBLogoParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEqualsExpression?: (ctx: EqualsExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `notEqualsExpressionExpression`
	 * labeled alternative in `UCBLogoParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNotEqualsExpressionExpression?: (ctx: NotEqualsExpressionExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `procedureDefInstruction`
	 * labeled alternative in `UCBLogoParser.instruction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProcedureDefInstruction?: (ctx: ProcedureDefInstructionContext) => Result;

	/**
	 * Visit a parse tree produced by the `macroDefInstruction`
	 * labeled alternative in `UCBLogoParser.instruction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMacroDefInstruction?: (ctx: MacroDefInstructionContext) => Result;

	/**
	 * Visit a parse tree produced by the `procedureCallExtraInputInstruction`
	 * labeled alternative in `UCBLogoParser.instruction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProcedureCallExtraInputInstruction?: (ctx: ProcedureCallExtraInputInstructionContext) => Result;

	/**
	 * Visit a parse tree produced by the `procedureCallInstruction`
	 * labeled alternative in `UCBLogoParser.instruction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProcedureCallInstruction?: (ctx: ProcedureCallInstructionContext) => Result;

	/**
	 * Visit a parse tree produced by `UCBLogoParser.parse`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParse?: (ctx: ParseContext) => Result;

	/**
	 * Visit a parse tree produced by `UCBLogoParser.instruction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstruction?: (ctx: InstructionContext) => Result;

	/**
	 * Visit a parse tree produced by `UCBLogoParser.procedure_def`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProcedure_def?: (ctx: Procedure_defContext) => Result;

	/**
	 * Visit a parse tree produced by `UCBLogoParser.macro_def`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMacro_def?: (ctx: Macro_defContext) => Result;

	/**
	 * Visit a parse tree produced by `UCBLogoParser.variables`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariables?: (ctx: VariablesContext) => Result;

	/**
	 * Visit a parse tree produced by `UCBLogoParser.body_def`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBody_def?: (ctx: Body_defContext) => Result;

	/**
	 * Visit a parse tree produced by `UCBLogoParser.body_instruction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBody_instruction?: (ctx: Body_instructionContext) => Result;

	/**
	 * Visit a parse tree produced by `UCBLogoParser.procedure_call_extra_input`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProcedure_call_extra_input?: (ctx: Procedure_call_extra_inputContext) => Result;

	/**
	 * Visit a parse tree produced by `UCBLogoParser.procedure_call`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProcedure_call?: (ctx: Procedure_callContext) => Result;

	/**
	 * Visit a parse tree produced by `UCBLogoParser.expressions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressions?: (ctx: ExpressionsContext) => Result;

	/**
	 * Visit a parse tree produced by `UCBLogoParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `UCBLogoParser.array`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArray?: (ctx: ArrayContext) => Result;

	/**
	 * Visit a parse tree produced by `UCBLogoParser.list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitList?: (ctx: ListContext) => Result;
}

