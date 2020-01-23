// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/brainfuck/brainfuck.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { FileContext } from "./brainfuckParser";
import { StatementContext } from "./brainfuckParser";
import { OpcodeContext } from "./brainfuckParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `brainfuckParser`.
 */
export interface brainfuckListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `brainfuckParser.file`.
	 * @param ctx the parse tree
	 */
	enterFile?: (ctx: FileContext) => void;
	/**
	 * Exit a parse tree produced by `brainfuckParser.file`.
	 * @param ctx the parse tree
	 */
	exitFile?: (ctx: FileContext) => void;

	/**
	 * Enter a parse tree produced by `brainfuckParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `brainfuckParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `brainfuckParser.opcode`.
	 * @param ctx the parse tree
	 */
	enterOpcode?: (ctx: OpcodeContext) => void;
	/**
	 * Exit a parse tree produced by `brainfuckParser.opcode`.
	 * @param ctx the parse tree
	 */
	exitOpcode?: (ctx: OpcodeContext) => void;
}

