// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/lolcode/lolcode.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `lolcodeParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface lolcodeVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `lolcodeParser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;

	/**
	 * Visit a parse tree produced by `lolcodeParser.code_block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCode_block?: (ctx: Code_blockContext) => Result;

	/**
	 * Visit a parse tree produced by `lolcodeParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `lolcodeParser.loop`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLoop?: (ctx: LoopContext) => Result;

	/**
	 * Visit a parse tree produced by `lolcodeParser.declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclaration?: (ctx: DeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `lolcodeParser.comment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComment?: (ctx: CommentContext) => Result;

	/**
	 * Visit a parse tree produced by `lolcodeParser.print_block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrint_block?: (ctx: Print_blockContext) => Result;

	/**
	 * Visit a parse tree produced by `lolcodeParser.if_block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIf_block?: (ctx: If_blockContext) => Result;

	/**
	 * Visit a parse tree produced by `lolcodeParser.else_if_block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElse_if_block?: (ctx: Else_if_blockContext) => Result;

	/**
	 * Visit a parse tree produced by `lolcodeParser.input_block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInput_block?: (ctx: Input_blockContext) => Result;

	/**
	 * Visit a parse tree produced by `lolcodeParser.func_decl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunc_decl?: (ctx: Func_declContext) => Result;

	/**
	 * Visit a parse tree produced by `lolcodeParser.assignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignment?: (ctx: AssignmentContext) => Result;

	/**
	 * Visit a parse tree produced by `lolcodeParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `lolcodeParser.equals`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEquals?: (ctx: EqualsContext) => Result;

	/**
	 * Visit a parse tree produced by `lolcodeParser.not_equals`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNot_equals?: (ctx: Not_equalsContext) => Result;

	/**
	 * Visit a parse tree produced by `lolcodeParser.both`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBoth?: (ctx: BothContext) => Result;

	/**
	 * Visit a parse tree produced by `lolcodeParser.either`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEither?: (ctx: EitherContext) => Result;

	/**
	 * Visit a parse tree produced by `lolcodeParser.greater`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGreater?: (ctx: GreaterContext) => Result;

	/**
	 * Visit a parse tree produced by `lolcodeParser.less`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLess?: (ctx: LessContext) => Result;

	/**
	 * Visit a parse tree produced by `lolcodeParser.add`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdd?: (ctx: AddContext) => Result;

	/**
	 * Visit a parse tree produced by `lolcodeParser.sub`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSub?: (ctx: SubContext) => Result;

	/**
	 * Visit a parse tree produced by `lolcodeParser.mul`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMul?: (ctx: MulContext) => Result;

	/**
	 * Visit a parse tree produced by `lolcodeParser.div`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDiv?: (ctx: DivContext) => Result;

	/**
	 * Visit a parse tree produced by `lolcodeParser.mod`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMod?: (ctx: ModContext) => Result;

	/**
	 * Visit a parse tree produced by `lolcodeParser.cast`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCast?: (ctx: CastContext) => Result;

	/**
	 * Visit a parse tree produced by `lolcodeParser.all`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAll?: (ctx: AllContext) => Result;

	/**
	 * Visit a parse tree produced by `lolcodeParser.any`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAny?: (ctx: AnyContext) => Result;

	/**
	 * Visit a parse tree produced by `lolcodeParser.not`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNot?: (ctx: NotContext) => Result;

	/**
	 * Visit a parse tree produced by `lolcodeParser.func`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunc?: (ctx: FuncContext) => Result;
}

