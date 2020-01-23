// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/cmake/CMake.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { FileContext } from "./CMakeParser";
import { Command_invocationContext } from "./CMakeParser";
import { Single_argumentContext } from "./CMakeParser";
import { Compound_argumentContext } from "./CMakeParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `CMakeParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface CMakeVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `CMakeParser.file`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFile?: (ctx: FileContext) => Result;

	/**
	 * Visit a parse tree produced by `CMakeParser.command_invocation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommand_invocation?: (ctx: Command_invocationContext) => Result;

	/**
	 * Visit a parse tree produced by `CMakeParser.single_argument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSingle_argument?: (ctx: Single_argumentContext) => Result;

	/**
	 * Visit a parse tree produced by `CMakeParser.compound_argument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompound_argument?: (ctx: Compound_argumentContext) => Result;
}

