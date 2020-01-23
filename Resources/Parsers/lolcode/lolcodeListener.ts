// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/lolcode/lolcode.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ProgramContext } from "./lolcodeParser";
import { Code_blockContext } from "./lolcodeParser";
import { StatementContext } from "./lolcodeParser";
import { LoopContext } from "./lolcodeParser";
import { DeclarationContext } from "./lolcodeParser";
import { CommentContext } from "./lolcodeParser";
import { Print_blockContext } from "./lolcodeParser";
import { If_blockContext } from "./lolcodeParser";
import { Else_if_blockContext } from "./lolcodeParser";
import { Input_blockContext } from "./lolcodeParser";
import { Func_declContext } from "./lolcodeParser";
import { AssignmentContext } from "./lolcodeParser";
import { ExpressionContext } from "./lolcodeParser";
import { EqualsContext } from "./lolcodeParser";
import { Not_equalsContext } from "./lolcodeParser";
import { BothContext } from "./lolcodeParser";
import { EitherContext } from "./lolcodeParser";
import { GreaterContext } from "./lolcodeParser";
import { LessContext } from "./lolcodeParser";
import { AddContext } from "./lolcodeParser";
import { SubContext } from "./lolcodeParser";
import { MulContext } from "./lolcodeParser";
import { DivContext } from "./lolcodeParser";
import { ModContext } from "./lolcodeParser";
import { CastContext } from "./lolcodeParser";
import { AllContext } from "./lolcodeParser";
import { AnyContext } from "./lolcodeParser";
import { NotContext } from "./lolcodeParser";
import { FuncContext } from "./lolcodeParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `lolcodeParser`.
 */
export interface lolcodeListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `lolcodeParser.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `lolcodeParser.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;

	/**
	 * Enter a parse tree produced by `lolcodeParser.code_block`.
	 * @param ctx the parse tree
	 */
	enterCode_block?: (ctx: Code_blockContext) => void;
	/**
	 * Exit a parse tree produced by `lolcodeParser.code_block`.
	 * @param ctx the parse tree
	 */
	exitCode_block?: (ctx: Code_blockContext) => void;

	/**
	 * Enter a parse tree produced by `lolcodeParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `lolcodeParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `lolcodeParser.loop`.
	 * @param ctx the parse tree
	 */
	enterLoop?: (ctx: LoopContext) => void;
	/**
	 * Exit a parse tree produced by `lolcodeParser.loop`.
	 * @param ctx the parse tree
	 */
	exitLoop?: (ctx: LoopContext) => void;

	/**
	 * Enter a parse tree produced by `lolcodeParser.declaration`.
	 * @param ctx the parse tree
	 */
	enterDeclaration?: (ctx: DeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `lolcodeParser.declaration`.
	 * @param ctx the parse tree
	 */
	exitDeclaration?: (ctx: DeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `lolcodeParser.comment`.
	 * @param ctx the parse tree
	 */
	enterComment?: (ctx: CommentContext) => void;
	/**
	 * Exit a parse tree produced by `lolcodeParser.comment`.
	 * @param ctx the parse tree
	 */
	exitComment?: (ctx: CommentContext) => void;

	/**
	 * Enter a parse tree produced by `lolcodeParser.print_block`.
	 * @param ctx the parse tree
	 */
	enterPrint_block?: (ctx: Print_blockContext) => void;
	/**
	 * Exit a parse tree produced by `lolcodeParser.print_block`.
	 * @param ctx the parse tree
	 */
	exitPrint_block?: (ctx: Print_blockContext) => void;

	/**
	 * Enter a parse tree produced by `lolcodeParser.if_block`.
	 * @param ctx the parse tree
	 */
	enterIf_block?: (ctx: If_blockContext) => void;
	/**
	 * Exit a parse tree produced by `lolcodeParser.if_block`.
	 * @param ctx the parse tree
	 */
	exitIf_block?: (ctx: If_blockContext) => void;

	/**
	 * Enter a parse tree produced by `lolcodeParser.else_if_block`.
	 * @param ctx the parse tree
	 */
	enterElse_if_block?: (ctx: Else_if_blockContext) => void;
	/**
	 * Exit a parse tree produced by `lolcodeParser.else_if_block`.
	 * @param ctx the parse tree
	 */
	exitElse_if_block?: (ctx: Else_if_blockContext) => void;

	/**
	 * Enter a parse tree produced by `lolcodeParser.input_block`.
	 * @param ctx the parse tree
	 */
	enterInput_block?: (ctx: Input_blockContext) => void;
	/**
	 * Exit a parse tree produced by `lolcodeParser.input_block`.
	 * @param ctx the parse tree
	 */
	exitInput_block?: (ctx: Input_blockContext) => void;

	/**
	 * Enter a parse tree produced by `lolcodeParser.func_decl`.
	 * @param ctx the parse tree
	 */
	enterFunc_decl?: (ctx: Func_declContext) => void;
	/**
	 * Exit a parse tree produced by `lolcodeParser.func_decl`.
	 * @param ctx the parse tree
	 */
	exitFunc_decl?: (ctx: Func_declContext) => void;

	/**
	 * Enter a parse tree produced by `lolcodeParser.assignment`.
	 * @param ctx the parse tree
	 */
	enterAssignment?: (ctx: AssignmentContext) => void;
	/**
	 * Exit a parse tree produced by `lolcodeParser.assignment`.
	 * @param ctx the parse tree
	 */
	exitAssignment?: (ctx: AssignmentContext) => void;

	/**
	 * Enter a parse tree produced by `lolcodeParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `lolcodeParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `lolcodeParser.equals`.
	 * @param ctx the parse tree
	 */
	enterEquals?: (ctx: EqualsContext) => void;
	/**
	 * Exit a parse tree produced by `lolcodeParser.equals`.
	 * @param ctx the parse tree
	 */
	exitEquals?: (ctx: EqualsContext) => void;

	/**
	 * Enter a parse tree produced by `lolcodeParser.not_equals`.
	 * @param ctx the parse tree
	 */
	enterNot_equals?: (ctx: Not_equalsContext) => void;
	/**
	 * Exit a parse tree produced by `lolcodeParser.not_equals`.
	 * @param ctx the parse tree
	 */
	exitNot_equals?: (ctx: Not_equalsContext) => void;

	/**
	 * Enter a parse tree produced by `lolcodeParser.both`.
	 * @param ctx the parse tree
	 */
	enterBoth?: (ctx: BothContext) => void;
	/**
	 * Exit a parse tree produced by `lolcodeParser.both`.
	 * @param ctx the parse tree
	 */
	exitBoth?: (ctx: BothContext) => void;

	/**
	 * Enter a parse tree produced by `lolcodeParser.either`.
	 * @param ctx the parse tree
	 */
	enterEither?: (ctx: EitherContext) => void;
	/**
	 * Exit a parse tree produced by `lolcodeParser.either`.
	 * @param ctx the parse tree
	 */
	exitEither?: (ctx: EitherContext) => void;

	/**
	 * Enter a parse tree produced by `lolcodeParser.greater`.
	 * @param ctx the parse tree
	 */
	enterGreater?: (ctx: GreaterContext) => void;
	/**
	 * Exit a parse tree produced by `lolcodeParser.greater`.
	 * @param ctx the parse tree
	 */
	exitGreater?: (ctx: GreaterContext) => void;

	/**
	 * Enter a parse tree produced by `lolcodeParser.less`.
	 * @param ctx the parse tree
	 */
	enterLess?: (ctx: LessContext) => void;
	/**
	 * Exit a parse tree produced by `lolcodeParser.less`.
	 * @param ctx the parse tree
	 */
	exitLess?: (ctx: LessContext) => void;

	/**
	 * Enter a parse tree produced by `lolcodeParser.add`.
	 * @param ctx the parse tree
	 */
	enterAdd?: (ctx: AddContext) => void;
	/**
	 * Exit a parse tree produced by `lolcodeParser.add`.
	 * @param ctx the parse tree
	 */
	exitAdd?: (ctx: AddContext) => void;

	/**
	 * Enter a parse tree produced by `lolcodeParser.sub`.
	 * @param ctx the parse tree
	 */
	enterSub?: (ctx: SubContext) => void;
	/**
	 * Exit a parse tree produced by `lolcodeParser.sub`.
	 * @param ctx the parse tree
	 */
	exitSub?: (ctx: SubContext) => void;

	/**
	 * Enter a parse tree produced by `lolcodeParser.mul`.
	 * @param ctx the parse tree
	 */
	enterMul?: (ctx: MulContext) => void;
	/**
	 * Exit a parse tree produced by `lolcodeParser.mul`.
	 * @param ctx the parse tree
	 */
	exitMul?: (ctx: MulContext) => void;

	/**
	 * Enter a parse tree produced by `lolcodeParser.div`.
	 * @param ctx the parse tree
	 */
	enterDiv?: (ctx: DivContext) => void;
	/**
	 * Exit a parse tree produced by `lolcodeParser.div`.
	 * @param ctx the parse tree
	 */
	exitDiv?: (ctx: DivContext) => void;

	/**
	 * Enter a parse tree produced by `lolcodeParser.mod`.
	 * @param ctx the parse tree
	 */
	enterMod?: (ctx: ModContext) => void;
	/**
	 * Exit a parse tree produced by `lolcodeParser.mod`.
	 * @param ctx the parse tree
	 */
	exitMod?: (ctx: ModContext) => void;

	/**
	 * Enter a parse tree produced by `lolcodeParser.cast`.
	 * @param ctx the parse tree
	 */
	enterCast?: (ctx: CastContext) => void;
	/**
	 * Exit a parse tree produced by `lolcodeParser.cast`.
	 * @param ctx the parse tree
	 */
	exitCast?: (ctx: CastContext) => void;

	/**
	 * Enter a parse tree produced by `lolcodeParser.all`.
	 * @param ctx the parse tree
	 */
	enterAll?: (ctx: AllContext) => void;
	/**
	 * Exit a parse tree produced by `lolcodeParser.all`.
	 * @param ctx the parse tree
	 */
	exitAll?: (ctx: AllContext) => void;

	/**
	 * Enter a parse tree produced by `lolcodeParser.any`.
	 * @param ctx the parse tree
	 */
	enterAny?: (ctx: AnyContext) => void;
	/**
	 * Exit a parse tree produced by `lolcodeParser.any`.
	 * @param ctx the parse tree
	 */
	exitAny?: (ctx: AnyContext) => void;

	/**
	 * Enter a parse tree produced by `lolcodeParser.not`.
	 * @param ctx the parse tree
	 */
	enterNot?: (ctx: NotContext) => void;
	/**
	 * Exit a parse tree produced by `lolcodeParser.not`.
	 * @param ctx the parse tree
	 */
	exitNot?: (ctx: NotContext) => void;

	/**
	 * Enter a parse tree produced by `lolcodeParser.func`.
	 * @param ctx the parse tree
	 */
	enterFunc?: (ctx: FuncContext) => void;
	/**
	 * Exit a parse tree produced by `lolcodeParser.func`.
	 * @param ctx the parse tree
	 */
	exitFunc?: (ctx: FuncContext) => void;
}

