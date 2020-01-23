// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/mumps/mumps.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { ProgramContext } from "./mumpsParser";
import { EofContext } from "./mumpsParser";
import { LineContext } from "./mumpsParser";
import { CodeContext } from "./mumpsParser";
import { LabelContext } from "./mumpsParser";
import { RoutinedeclContext } from "./mumpsParser";
import { ParamlistContext } from "./mumpsParser";
import { ParamContext } from "./mumpsParser";
import { SubprocContext } from "./mumpsParser";
import { CommandContext } from "./mumpsParser";
import { PostconditionContext } from "./mumpsParser";
import { ExpressionContext } from "./mumpsParser";
import { TermContext } from "./mumpsParser";
import { ConditionContext } from "./mumpsParser";
import { IdentifierContext } from "./mumpsParser";
import { VariableContext } from "./mumpsParser";
import { FunctionContext } from "./mumpsParser";
import { Break_Context } from "./mumpsParser";
import { Do_Context } from "./mumpsParser";
import { For_Context } from "./mumpsParser";
import { Halt_Context } from "./mumpsParser";
import { Hang_Context } from "./mumpsParser";
import { If_Context } from "./mumpsParser";
import { Kill_Context } from "./mumpsParser";
import { Merge_Context } from "./mumpsParser";
import { New_Context } from "./mumpsParser";
import { Quit_Context } from "./mumpsParser";
import { Read_Context } from "./mumpsParser";
import { Set_Context } from "./mumpsParser";
import { View_Context } from "./mumpsParser";
import { Write_Context } from "./mumpsParser";
import { Xecute_Context } from "./mumpsParser";
import { AssignContext } from "./mumpsParser";
import { ArglistContext } from "./mumpsParser";
import { ArgContext } from "./mumpsParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `mumpsParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface mumpsVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `mumpsParser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;

	/**
	 * Visit a parse tree produced by `mumpsParser.eof`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEof?: (ctx: EofContext) => Result;

	/**
	 * Visit a parse tree produced by `mumpsParser.line`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLine?: (ctx: LineContext) => Result;

	/**
	 * Visit a parse tree produced by `mumpsParser.code`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCode?: (ctx: CodeContext) => Result;

	/**
	 * Visit a parse tree produced by `mumpsParser.label`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLabel?: (ctx: LabelContext) => Result;

	/**
	 * Visit a parse tree produced by `mumpsParser.routinedecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRoutinedecl?: (ctx: RoutinedeclContext) => Result;

	/**
	 * Visit a parse tree produced by `mumpsParser.paramlist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParamlist?: (ctx: ParamlistContext) => Result;

	/**
	 * Visit a parse tree produced by `mumpsParser.param`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParam?: (ctx: ParamContext) => Result;

	/**
	 * Visit a parse tree produced by `mumpsParser.subproc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubproc?: (ctx: SubprocContext) => Result;

	/**
	 * Visit a parse tree produced by `mumpsParser.command`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommand?: (ctx: CommandContext) => Result;

	/**
	 * Visit a parse tree produced by `mumpsParser.postcondition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPostcondition?: (ctx: PostconditionContext) => Result;

	/**
	 * Visit a parse tree produced by `mumpsParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `mumpsParser.term`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTerm?: (ctx: TermContext) => Result;

	/**
	 * Visit a parse tree produced by `mumpsParser.condition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCondition?: (ctx: ConditionContext) => Result;

	/**
	 * Visit a parse tree produced by `mumpsParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifier?: (ctx: IdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `mumpsParser.variable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariable?: (ctx: VariableContext) => Result;

	/**
	 * Visit a parse tree produced by `mumpsParser.function`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction?: (ctx: FunctionContext) => Result;

	/**
	 * Visit a parse tree produced by `mumpsParser.break_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBreak_?: (ctx: Break_Context) => Result;

	/**
	 * Visit a parse tree produced by `mumpsParser.do_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDo_?: (ctx: Do_Context) => Result;

	/**
	 * Visit a parse tree produced by `mumpsParser.for_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFor_?: (ctx: For_Context) => Result;

	/**
	 * Visit a parse tree produced by `mumpsParser.halt_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHalt_?: (ctx: Halt_Context) => Result;

	/**
	 * Visit a parse tree produced by `mumpsParser.hang_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHang_?: (ctx: Hang_Context) => Result;

	/**
	 * Visit a parse tree produced by `mumpsParser.if_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIf_?: (ctx: If_Context) => Result;

	/**
	 * Visit a parse tree produced by `mumpsParser.kill_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKill_?: (ctx: Kill_Context) => Result;

	/**
	 * Visit a parse tree produced by `mumpsParser.merge_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMerge_?: (ctx: Merge_Context) => Result;

	/**
	 * Visit a parse tree produced by `mumpsParser.new_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNew_?: (ctx: New_Context) => Result;

	/**
	 * Visit a parse tree produced by `mumpsParser.quit_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuit_?: (ctx: Quit_Context) => Result;

	/**
	 * Visit a parse tree produced by `mumpsParser.read_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRead_?: (ctx: Read_Context) => Result;

	/**
	 * Visit a parse tree produced by `mumpsParser.set_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSet_?: (ctx: Set_Context) => Result;

	/**
	 * Visit a parse tree produced by `mumpsParser.view_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitView_?: (ctx: View_Context) => Result;

	/**
	 * Visit a parse tree produced by `mumpsParser.write_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWrite_?: (ctx: Write_Context) => Result;

	/**
	 * Visit a parse tree produced by `mumpsParser.xecute_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitXecute_?: (ctx: Xecute_Context) => Result;

	/**
	 * Visit a parse tree produced by `mumpsParser.assign`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssign?: (ctx: AssignContext) => Result;

	/**
	 * Visit a parse tree produced by `mumpsParser.arglist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArglist?: (ctx: ArglistContext) => Result;

	/**
	 * Visit a parse tree produced by `mumpsParser.arg`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArg?: (ctx: ArgContext) => Result;
}

