// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/logo/ucb-logo/UCBLogo.g4 by ANTLR 4.7.3-SNAPSHOT


  import java.util.Map;
  import java.util.HashMap;


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `UCBLogoParser`.
 */
export interface UCBLogoListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `unaryMinusExpression`
	 * labeled alternative in `UCBLogoParser.expression`.
	 * @param ctx the parse tree
	 */
	enterUnaryMinusExpression?: (ctx: UnaryMinusExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `unaryMinusExpression`
	 * labeled alternative in `UCBLogoParser.expression`.
	 * @param ctx the parse tree
	 */
	exitUnaryMinusExpression?: (ctx: UnaryMinusExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `procedureCallExtraInput`
	 * labeled alternative in `UCBLogoParser.expression`.
	 * @param ctx the parse tree
	 */
	enterProcedureCallExtraInput?: (ctx: ProcedureCallExtraInputContext) => void;
	/**
	 * Exit a parse tree produced by the `procedureCallExtraInput`
	 * labeled alternative in `UCBLogoParser.expression`.
	 * @param ctx the parse tree
	 */
	exitProcedureCallExtraInput?: (ctx: ProcedureCallExtraInputContext) => void;

	/**
	 * Enter a parse tree produced by the `procedureCallExpression`
	 * labeled alternative in `UCBLogoParser.expression`.
	 * @param ctx the parse tree
	 */
	enterProcedureCallExpression?: (ctx: ProcedureCallExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `procedureCallExpression`
	 * labeled alternative in `UCBLogoParser.expression`.
	 * @param ctx the parse tree
	 */
	exitProcedureCallExpression?: (ctx: ProcedureCallExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `parensExpression`
	 * labeled alternative in `UCBLogoParser.expression`.
	 * @param ctx the parse tree
	 */
	enterParensExpression?: (ctx: ParensExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `parensExpression`
	 * labeled alternative in `UCBLogoParser.expression`.
	 * @param ctx the parse tree
	 */
	exitParensExpression?: (ctx: ParensExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `arrayExpression`
	 * labeled alternative in `UCBLogoParser.expression`.
	 * @param ctx the parse tree
	 */
	enterArrayExpression?: (ctx: ArrayExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `arrayExpression`
	 * labeled alternative in `UCBLogoParser.expression`.
	 * @param ctx the parse tree
	 */
	exitArrayExpression?: (ctx: ArrayExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `listExpression`
	 * labeled alternative in `UCBLogoParser.expression`.
	 * @param ctx the parse tree
	 */
	enterListExpression?: (ctx: ListExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `listExpression`
	 * labeled alternative in `UCBLogoParser.expression`.
	 * @param ctx the parse tree
	 */
	exitListExpression?: (ctx: ListExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `wordExpression`
	 * labeled alternative in `UCBLogoParser.expression`.
	 * @param ctx the parse tree
	 */
	enterWordExpression?: (ctx: WordExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `wordExpression`
	 * labeled alternative in `UCBLogoParser.expression`.
	 * @param ctx the parse tree
	 */
	exitWordExpression?: (ctx: WordExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `quotedWordExpression`
	 * labeled alternative in `UCBLogoParser.expression`.
	 * @param ctx the parse tree
	 */
	enterQuotedWordExpression?: (ctx: QuotedWordExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `quotedWordExpression`
	 * labeled alternative in `UCBLogoParser.expression`.
	 * @param ctx the parse tree
	 */
	exitQuotedWordExpression?: (ctx: QuotedWordExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `numberExpression`
	 * labeled alternative in `UCBLogoParser.expression`.
	 * @param ctx the parse tree
	 */
	enterNumberExpression?: (ctx: NumberExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `numberExpression`
	 * labeled alternative in `UCBLogoParser.expression`.
	 * @param ctx the parse tree
	 */
	exitNumberExpression?: (ctx: NumberExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `variableExpression`
	 * labeled alternative in `UCBLogoParser.expression`.
	 * @param ctx the parse tree
	 */
	enterVariableExpression?: (ctx: VariableExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `variableExpression`
	 * labeled alternative in `UCBLogoParser.expression`.
	 * @param ctx the parse tree
	 */
	exitVariableExpression?: (ctx: VariableExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `nameExpression`
	 * labeled alternative in `UCBLogoParser.expression`.
	 * @param ctx the parse tree
	 */
	enterNameExpression?: (ctx: NameExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `nameExpression`
	 * labeled alternative in `UCBLogoParser.expression`.
	 * @param ctx the parse tree
	 */
	exitNameExpression?: (ctx: NameExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `multiplyExpression`
	 * labeled alternative in `UCBLogoParser.expression`.
	 * @param ctx the parse tree
	 */
	enterMultiplyExpression?: (ctx: MultiplyExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `multiplyExpression`
	 * labeled alternative in `UCBLogoParser.expression`.
	 * @param ctx the parse tree
	 */
	exitMultiplyExpression?: (ctx: MultiplyExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `divideExpression`
	 * labeled alternative in `UCBLogoParser.expression`.
	 * @param ctx the parse tree
	 */
	enterDivideExpression?: (ctx: DivideExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `divideExpression`
	 * labeled alternative in `UCBLogoParser.expression`.
	 * @param ctx the parse tree
	 */
	exitDivideExpression?: (ctx: DivideExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `additionExpression`
	 * labeled alternative in `UCBLogoParser.expression`.
	 * @param ctx the parse tree
	 */
	enterAdditionExpression?: (ctx: AdditionExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `additionExpression`
	 * labeled alternative in `UCBLogoParser.expression`.
	 * @param ctx the parse tree
	 */
	exitAdditionExpression?: (ctx: AdditionExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `subtractionExpression`
	 * labeled alternative in `UCBLogoParser.expression`.
	 * @param ctx the parse tree
	 */
	enterSubtractionExpression?: (ctx: SubtractionExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `subtractionExpression`
	 * labeled alternative in `UCBLogoParser.expression`.
	 * @param ctx the parse tree
	 */
	exitSubtractionExpression?: (ctx: SubtractionExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `lessThanExpression`
	 * labeled alternative in `UCBLogoParser.expression`.
	 * @param ctx the parse tree
	 */
	enterLessThanExpression?: (ctx: LessThanExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `lessThanExpression`
	 * labeled alternative in `UCBLogoParser.expression`.
	 * @param ctx the parse tree
	 */
	exitLessThanExpression?: (ctx: LessThanExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `greaterThanExpression`
	 * labeled alternative in `UCBLogoParser.expression`.
	 * @param ctx the parse tree
	 */
	enterGreaterThanExpression?: (ctx: GreaterThanExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `greaterThanExpression`
	 * labeled alternative in `UCBLogoParser.expression`.
	 * @param ctx the parse tree
	 */
	exitGreaterThanExpression?: (ctx: GreaterThanExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `lessThanEqualsExpression`
	 * labeled alternative in `UCBLogoParser.expression`.
	 * @param ctx the parse tree
	 */
	enterLessThanEqualsExpression?: (ctx: LessThanEqualsExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `lessThanEqualsExpression`
	 * labeled alternative in `UCBLogoParser.expression`.
	 * @param ctx the parse tree
	 */
	exitLessThanEqualsExpression?: (ctx: LessThanEqualsExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `greaterThanEqualsExpression`
	 * labeled alternative in `UCBLogoParser.expression`.
	 * @param ctx the parse tree
	 */
	enterGreaterThanEqualsExpression?: (ctx: GreaterThanEqualsExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `greaterThanEqualsExpression`
	 * labeled alternative in `UCBLogoParser.expression`.
	 * @param ctx the parse tree
	 */
	exitGreaterThanEqualsExpression?: (ctx: GreaterThanEqualsExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `equalsExpression`
	 * labeled alternative in `UCBLogoParser.expression`.
	 * @param ctx the parse tree
	 */
	enterEqualsExpression?: (ctx: EqualsExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `equalsExpression`
	 * labeled alternative in `UCBLogoParser.expression`.
	 * @param ctx the parse tree
	 */
	exitEqualsExpression?: (ctx: EqualsExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `notEqualsExpressionExpression`
	 * labeled alternative in `UCBLogoParser.expression`.
	 * @param ctx the parse tree
	 */
	enterNotEqualsExpressionExpression?: (ctx: NotEqualsExpressionExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `notEqualsExpressionExpression`
	 * labeled alternative in `UCBLogoParser.expression`.
	 * @param ctx the parse tree
	 */
	exitNotEqualsExpressionExpression?: (ctx: NotEqualsExpressionExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `procedureDefInstruction`
	 * labeled alternative in `UCBLogoParser.instruction`.
	 * @param ctx the parse tree
	 */
	enterProcedureDefInstruction?: (ctx: ProcedureDefInstructionContext) => void;
	/**
	 * Exit a parse tree produced by the `procedureDefInstruction`
	 * labeled alternative in `UCBLogoParser.instruction`.
	 * @param ctx the parse tree
	 */
	exitProcedureDefInstruction?: (ctx: ProcedureDefInstructionContext) => void;

	/**
	 * Enter a parse tree produced by the `macroDefInstruction`
	 * labeled alternative in `UCBLogoParser.instruction`.
	 * @param ctx the parse tree
	 */
	enterMacroDefInstruction?: (ctx: MacroDefInstructionContext) => void;
	/**
	 * Exit a parse tree produced by the `macroDefInstruction`
	 * labeled alternative in `UCBLogoParser.instruction`.
	 * @param ctx the parse tree
	 */
	exitMacroDefInstruction?: (ctx: MacroDefInstructionContext) => void;

	/**
	 * Enter a parse tree produced by the `procedureCallExtraInputInstruction`
	 * labeled alternative in `UCBLogoParser.instruction`.
	 * @param ctx the parse tree
	 */
	enterProcedureCallExtraInputInstruction?: (ctx: ProcedureCallExtraInputInstructionContext) => void;
	/**
	 * Exit a parse tree produced by the `procedureCallExtraInputInstruction`
	 * labeled alternative in `UCBLogoParser.instruction`.
	 * @param ctx the parse tree
	 */
	exitProcedureCallExtraInputInstruction?: (ctx: ProcedureCallExtraInputInstructionContext) => void;

	/**
	 * Enter a parse tree produced by the `procedureCallInstruction`
	 * labeled alternative in `UCBLogoParser.instruction`.
	 * @param ctx the parse tree
	 */
	enterProcedureCallInstruction?: (ctx: ProcedureCallInstructionContext) => void;
	/**
	 * Exit a parse tree produced by the `procedureCallInstruction`
	 * labeled alternative in `UCBLogoParser.instruction`.
	 * @param ctx the parse tree
	 */
	exitProcedureCallInstruction?: (ctx: ProcedureCallInstructionContext) => void;

	/**
	 * Enter a parse tree produced by `UCBLogoParser.parse`.
	 * @param ctx the parse tree
	 */
	enterParse?: (ctx: ParseContext) => void;
	/**
	 * Exit a parse tree produced by `UCBLogoParser.parse`.
	 * @param ctx the parse tree
	 */
	exitParse?: (ctx: ParseContext) => void;

	/**
	 * Enter a parse tree produced by `UCBLogoParser.instruction`.
	 * @param ctx the parse tree
	 */
	enterInstruction?: (ctx: InstructionContext) => void;
	/**
	 * Exit a parse tree produced by `UCBLogoParser.instruction`.
	 * @param ctx the parse tree
	 */
	exitInstruction?: (ctx: InstructionContext) => void;

	/**
	 * Enter a parse tree produced by `UCBLogoParser.procedure_def`.
	 * @param ctx the parse tree
	 */
	enterProcedure_def?: (ctx: Procedure_defContext) => void;
	/**
	 * Exit a parse tree produced by `UCBLogoParser.procedure_def`.
	 * @param ctx the parse tree
	 */
	exitProcedure_def?: (ctx: Procedure_defContext) => void;

	/**
	 * Enter a parse tree produced by `UCBLogoParser.macro_def`.
	 * @param ctx the parse tree
	 */
	enterMacro_def?: (ctx: Macro_defContext) => void;
	/**
	 * Exit a parse tree produced by `UCBLogoParser.macro_def`.
	 * @param ctx the parse tree
	 */
	exitMacro_def?: (ctx: Macro_defContext) => void;

	/**
	 * Enter a parse tree produced by `UCBLogoParser.variables`.
	 * @param ctx the parse tree
	 */
	enterVariables?: (ctx: VariablesContext) => void;
	/**
	 * Exit a parse tree produced by `UCBLogoParser.variables`.
	 * @param ctx the parse tree
	 */
	exitVariables?: (ctx: VariablesContext) => void;

	/**
	 * Enter a parse tree produced by `UCBLogoParser.body_def`.
	 * @param ctx the parse tree
	 */
	enterBody_def?: (ctx: Body_defContext) => void;
	/**
	 * Exit a parse tree produced by `UCBLogoParser.body_def`.
	 * @param ctx the parse tree
	 */
	exitBody_def?: (ctx: Body_defContext) => void;

	/**
	 * Enter a parse tree produced by `UCBLogoParser.body_instruction`.
	 * @param ctx the parse tree
	 */
	enterBody_instruction?: (ctx: Body_instructionContext) => void;
	/**
	 * Exit a parse tree produced by `UCBLogoParser.body_instruction`.
	 * @param ctx the parse tree
	 */
	exitBody_instruction?: (ctx: Body_instructionContext) => void;

	/**
	 * Enter a parse tree produced by `UCBLogoParser.procedure_call_extra_input`.
	 * @param ctx the parse tree
	 */
	enterProcedure_call_extra_input?: (ctx: Procedure_call_extra_inputContext) => void;
	/**
	 * Exit a parse tree produced by `UCBLogoParser.procedure_call_extra_input`.
	 * @param ctx the parse tree
	 */
	exitProcedure_call_extra_input?: (ctx: Procedure_call_extra_inputContext) => void;

	/**
	 * Enter a parse tree produced by `UCBLogoParser.procedure_call`.
	 * @param ctx the parse tree
	 */
	enterProcedure_call?: (ctx: Procedure_callContext) => void;
	/**
	 * Exit a parse tree produced by `UCBLogoParser.procedure_call`.
	 * @param ctx the parse tree
	 */
	exitProcedure_call?: (ctx: Procedure_callContext) => void;

	/**
	 * Enter a parse tree produced by `UCBLogoParser.expressions`.
	 * @param ctx the parse tree
	 */
	enterExpressions?: (ctx: ExpressionsContext) => void;
	/**
	 * Exit a parse tree produced by `UCBLogoParser.expressions`.
	 * @param ctx the parse tree
	 */
	exitExpressions?: (ctx: ExpressionsContext) => void;

	/**
	 * Enter a parse tree produced by `UCBLogoParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `UCBLogoParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `UCBLogoParser.array`.
	 * @param ctx the parse tree
	 */
	enterArray?: (ctx: ArrayContext) => void;
	/**
	 * Exit a parse tree produced by `UCBLogoParser.array`.
	 * @param ctx the parse tree
	 */
	exitArray?: (ctx: ArrayContext) => void;

	/**
	 * Enter a parse tree produced by `UCBLogoParser.list`.
	 * @param ctx the parse tree
	 */
	enterList?: (ctx: ListContext) => void;
	/**
	 * Exit a parse tree produced by `UCBLogoParser.list`.
	 * @param ctx the parse tree
	 */
	exitList?: (ctx: ListContext) => void;
}

