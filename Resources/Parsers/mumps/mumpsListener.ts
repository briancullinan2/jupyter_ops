// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/mumps/mumps.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `mumpsParser`.
 */
export interface mumpsListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `mumpsParser.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `mumpsParser.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;

	/**
	 * Enter a parse tree produced by `mumpsParser.eof`.
	 * @param ctx the parse tree
	 */
	enterEof?: (ctx: EofContext) => void;
	/**
	 * Exit a parse tree produced by `mumpsParser.eof`.
	 * @param ctx the parse tree
	 */
	exitEof?: (ctx: EofContext) => void;

	/**
	 * Enter a parse tree produced by `mumpsParser.line`.
	 * @param ctx the parse tree
	 */
	enterLine?: (ctx: LineContext) => void;
	/**
	 * Exit a parse tree produced by `mumpsParser.line`.
	 * @param ctx the parse tree
	 */
	exitLine?: (ctx: LineContext) => void;

	/**
	 * Enter a parse tree produced by `mumpsParser.code`.
	 * @param ctx the parse tree
	 */
	enterCode?: (ctx: CodeContext) => void;
	/**
	 * Exit a parse tree produced by `mumpsParser.code`.
	 * @param ctx the parse tree
	 */
	exitCode?: (ctx: CodeContext) => void;

	/**
	 * Enter a parse tree produced by `mumpsParser.label`.
	 * @param ctx the parse tree
	 */
	enterLabel?: (ctx: LabelContext) => void;
	/**
	 * Exit a parse tree produced by `mumpsParser.label`.
	 * @param ctx the parse tree
	 */
	exitLabel?: (ctx: LabelContext) => void;

	/**
	 * Enter a parse tree produced by `mumpsParser.routinedecl`.
	 * @param ctx the parse tree
	 */
	enterRoutinedecl?: (ctx: RoutinedeclContext) => void;
	/**
	 * Exit a parse tree produced by `mumpsParser.routinedecl`.
	 * @param ctx the parse tree
	 */
	exitRoutinedecl?: (ctx: RoutinedeclContext) => void;

	/**
	 * Enter a parse tree produced by `mumpsParser.paramlist`.
	 * @param ctx the parse tree
	 */
	enterParamlist?: (ctx: ParamlistContext) => void;
	/**
	 * Exit a parse tree produced by `mumpsParser.paramlist`.
	 * @param ctx the parse tree
	 */
	exitParamlist?: (ctx: ParamlistContext) => void;

	/**
	 * Enter a parse tree produced by `mumpsParser.param`.
	 * @param ctx the parse tree
	 */
	enterParam?: (ctx: ParamContext) => void;
	/**
	 * Exit a parse tree produced by `mumpsParser.param`.
	 * @param ctx the parse tree
	 */
	exitParam?: (ctx: ParamContext) => void;

	/**
	 * Enter a parse tree produced by `mumpsParser.subproc`.
	 * @param ctx the parse tree
	 */
	enterSubproc?: (ctx: SubprocContext) => void;
	/**
	 * Exit a parse tree produced by `mumpsParser.subproc`.
	 * @param ctx the parse tree
	 */
	exitSubproc?: (ctx: SubprocContext) => void;

	/**
	 * Enter a parse tree produced by `mumpsParser.command`.
	 * @param ctx the parse tree
	 */
	enterCommand?: (ctx: CommandContext) => void;
	/**
	 * Exit a parse tree produced by `mumpsParser.command`.
	 * @param ctx the parse tree
	 */
	exitCommand?: (ctx: CommandContext) => void;

	/**
	 * Enter a parse tree produced by `mumpsParser.postcondition`.
	 * @param ctx the parse tree
	 */
	enterPostcondition?: (ctx: PostconditionContext) => void;
	/**
	 * Exit a parse tree produced by `mumpsParser.postcondition`.
	 * @param ctx the parse tree
	 */
	exitPostcondition?: (ctx: PostconditionContext) => void;

	/**
	 * Enter a parse tree produced by `mumpsParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `mumpsParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `mumpsParser.term`.
	 * @param ctx the parse tree
	 */
	enterTerm?: (ctx: TermContext) => void;
	/**
	 * Exit a parse tree produced by `mumpsParser.term`.
	 * @param ctx the parse tree
	 */
	exitTerm?: (ctx: TermContext) => void;

	/**
	 * Enter a parse tree produced by `mumpsParser.condition`.
	 * @param ctx the parse tree
	 */
	enterCondition?: (ctx: ConditionContext) => void;
	/**
	 * Exit a parse tree produced by `mumpsParser.condition`.
	 * @param ctx the parse tree
	 */
	exitCondition?: (ctx: ConditionContext) => void;

	/**
	 * Enter a parse tree produced by `mumpsParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `mumpsParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitIdentifier?: (ctx: IdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `mumpsParser.variable`.
	 * @param ctx the parse tree
	 */
	enterVariable?: (ctx: VariableContext) => void;
	/**
	 * Exit a parse tree produced by `mumpsParser.variable`.
	 * @param ctx the parse tree
	 */
	exitVariable?: (ctx: VariableContext) => void;

	/**
	 * Enter a parse tree produced by `mumpsParser.function`.
	 * @param ctx the parse tree
	 */
	enterFunction?: (ctx: FunctionContext) => void;
	/**
	 * Exit a parse tree produced by `mumpsParser.function`.
	 * @param ctx the parse tree
	 */
	exitFunction?: (ctx: FunctionContext) => void;

	/**
	 * Enter a parse tree produced by `mumpsParser.break_`.
	 * @param ctx the parse tree
	 */
	enterBreak_?: (ctx: Break_Context) => void;
	/**
	 * Exit a parse tree produced by `mumpsParser.break_`.
	 * @param ctx the parse tree
	 */
	exitBreak_?: (ctx: Break_Context) => void;

	/**
	 * Enter a parse tree produced by `mumpsParser.do_`.
	 * @param ctx the parse tree
	 */
	enterDo_?: (ctx: Do_Context) => void;
	/**
	 * Exit a parse tree produced by `mumpsParser.do_`.
	 * @param ctx the parse tree
	 */
	exitDo_?: (ctx: Do_Context) => void;

	/**
	 * Enter a parse tree produced by `mumpsParser.for_`.
	 * @param ctx the parse tree
	 */
	enterFor_?: (ctx: For_Context) => void;
	/**
	 * Exit a parse tree produced by `mumpsParser.for_`.
	 * @param ctx the parse tree
	 */
	exitFor_?: (ctx: For_Context) => void;

	/**
	 * Enter a parse tree produced by `mumpsParser.halt_`.
	 * @param ctx the parse tree
	 */
	enterHalt_?: (ctx: Halt_Context) => void;
	/**
	 * Exit a parse tree produced by `mumpsParser.halt_`.
	 * @param ctx the parse tree
	 */
	exitHalt_?: (ctx: Halt_Context) => void;

	/**
	 * Enter a parse tree produced by `mumpsParser.hang_`.
	 * @param ctx the parse tree
	 */
	enterHang_?: (ctx: Hang_Context) => void;
	/**
	 * Exit a parse tree produced by `mumpsParser.hang_`.
	 * @param ctx the parse tree
	 */
	exitHang_?: (ctx: Hang_Context) => void;

	/**
	 * Enter a parse tree produced by `mumpsParser.if_`.
	 * @param ctx the parse tree
	 */
	enterIf_?: (ctx: If_Context) => void;
	/**
	 * Exit a parse tree produced by `mumpsParser.if_`.
	 * @param ctx the parse tree
	 */
	exitIf_?: (ctx: If_Context) => void;

	/**
	 * Enter a parse tree produced by `mumpsParser.kill_`.
	 * @param ctx the parse tree
	 */
	enterKill_?: (ctx: Kill_Context) => void;
	/**
	 * Exit a parse tree produced by `mumpsParser.kill_`.
	 * @param ctx the parse tree
	 */
	exitKill_?: (ctx: Kill_Context) => void;

	/**
	 * Enter a parse tree produced by `mumpsParser.merge_`.
	 * @param ctx the parse tree
	 */
	enterMerge_?: (ctx: Merge_Context) => void;
	/**
	 * Exit a parse tree produced by `mumpsParser.merge_`.
	 * @param ctx the parse tree
	 */
	exitMerge_?: (ctx: Merge_Context) => void;

	/**
	 * Enter a parse tree produced by `mumpsParser.new_`.
	 * @param ctx the parse tree
	 */
	enterNew_?: (ctx: New_Context) => void;
	/**
	 * Exit a parse tree produced by `mumpsParser.new_`.
	 * @param ctx the parse tree
	 */
	exitNew_?: (ctx: New_Context) => void;

	/**
	 * Enter a parse tree produced by `mumpsParser.quit_`.
	 * @param ctx the parse tree
	 */
	enterQuit_?: (ctx: Quit_Context) => void;
	/**
	 * Exit a parse tree produced by `mumpsParser.quit_`.
	 * @param ctx the parse tree
	 */
	exitQuit_?: (ctx: Quit_Context) => void;

	/**
	 * Enter a parse tree produced by `mumpsParser.read_`.
	 * @param ctx the parse tree
	 */
	enterRead_?: (ctx: Read_Context) => void;
	/**
	 * Exit a parse tree produced by `mumpsParser.read_`.
	 * @param ctx the parse tree
	 */
	exitRead_?: (ctx: Read_Context) => void;

	/**
	 * Enter a parse tree produced by `mumpsParser.set_`.
	 * @param ctx the parse tree
	 */
	enterSet_?: (ctx: Set_Context) => void;
	/**
	 * Exit a parse tree produced by `mumpsParser.set_`.
	 * @param ctx the parse tree
	 */
	exitSet_?: (ctx: Set_Context) => void;

	/**
	 * Enter a parse tree produced by `mumpsParser.view_`.
	 * @param ctx the parse tree
	 */
	enterView_?: (ctx: View_Context) => void;
	/**
	 * Exit a parse tree produced by `mumpsParser.view_`.
	 * @param ctx the parse tree
	 */
	exitView_?: (ctx: View_Context) => void;

	/**
	 * Enter a parse tree produced by `mumpsParser.write_`.
	 * @param ctx the parse tree
	 */
	enterWrite_?: (ctx: Write_Context) => void;
	/**
	 * Exit a parse tree produced by `mumpsParser.write_`.
	 * @param ctx the parse tree
	 */
	exitWrite_?: (ctx: Write_Context) => void;

	/**
	 * Enter a parse tree produced by `mumpsParser.xecute_`.
	 * @param ctx the parse tree
	 */
	enterXecute_?: (ctx: Xecute_Context) => void;
	/**
	 * Exit a parse tree produced by `mumpsParser.xecute_`.
	 * @param ctx the parse tree
	 */
	exitXecute_?: (ctx: Xecute_Context) => void;

	/**
	 * Enter a parse tree produced by `mumpsParser.assign`.
	 * @param ctx the parse tree
	 */
	enterAssign?: (ctx: AssignContext) => void;
	/**
	 * Exit a parse tree produced by `mumpsParser.assign`.
	 * @param ctx the parse tree
	 */
	exitAssign?: (ctx: AssignContext) => void;

	/**
	 * Enter a parse tree produced by `mumpsParser.arglist`.
	 * @param ctx the parse tree
	 */
	enterArglist?: (ctx: ArglistContext) => void;
	/**
	 * Exit a parse tree produced by `mumpsParser.arglist`.
	 * @param ctx the parse tree
	 */
	exitArglist?: (ctx: ArglistContext) => void;

	/**
	 * Enter a parse tree produced by `mumpsParser.arg`.
	 * @param ctx the parse tree
	 */
	enterArg?: (ctx: ArgContext) => void;
	/**
	 * Exit a parse tree produced by `mumpsParser.arg`.
	 * @param ctx the parse tree
	 */
	exitArg?: (ctx: ArgContext) => void;
}

