// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/cmake/CMake.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { FileContext } from "./CMakeParser";
import { Command_invocationContext } from "./CMakeParser";
import { Single_argumentContext } from "./CMakeParser";
import { Compound_argumentContext } from "./CMakeParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `CMakeParser`.
 */
export interface CMakeListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `CMakeParser.file`.
	 * @param ctx the parse tree
	 */
	enterFile?: (ctx: FileContext) => void;
	/**
	 * Exit a parse tree produced by `CMakeParser.file`.
	 * @param ctx the parse tree
	 */
	exitFile?: (ctx: FileContext) => void;

	/**
	 * Enter a parse tree produced by `CMakeParser.command_invocation`.
	 * @param ctx the parse tree
	 */
	enterCommand_invocation?: (ctx: Command_invocationContext) => void;
	/**
	 * Exit a parse tree produced by `CMakeParser.command_invocation`.
	 * @param ctx the parse tree
	 */
	exitCommand_invocation?: (ctx: Command_invocationContext) => void;

	/**
	 * Enter a parse tree produced by `CMakeParser.single_argument`.
	 * @param ctx the parse tree
	 */
	enterSingle_argument?: (ctx: Single_argumentContext) => void;
	/**
	 * Exit a parse tree produced by `CMakeParser.single_argument`.
	 * @param ctx the parse tree
	 */
	exitSingle_argument?: (ctx: Single_argumentContext) => void;

	/**
	 * Enter a parse tree produced by `CMakeParser.compound_argument`.
	 * @param ctx the parse tree
	 */
	enterCompound_argument?: (ctx: Compound_argumentContext) => void;
	/**
	 * Exit a parse tree produced by `CMakeParser.compound_argument`.
	 * @param ctx the parse tree
	 */
	exitCompound_argument?: (ctx: Compound_argumentContext) => void;
}

