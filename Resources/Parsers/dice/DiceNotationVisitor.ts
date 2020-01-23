// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/dice/DiceNotation.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { NotationContext } from "./DiceNotationParser";
import { AddOpContext } from "./DiceNotationParser";
import { MultOpContext } from "./DiceNotationParser";
import { OperandContext } from "./DiceNotationParser";
import { DiceContext } from "./DiceNotationParser";
import { NumberContext } from "./DiceNotationParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `DiceNotationParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface DiceNotationVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `DiceNotationParser.notation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNotation?: (ctx: NotationContext) => Result;

	/**
	 * Visit a parse tree produced by `DiceNotationParser.addOp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddOp?: (ctx: AddOpContext) => Result;

	/**
	 * Visit a parse tree produced by `DiceNotationParser.multOp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultOp?: (ctx: MultOpContext) => Result;

	/**
	 * Visit a parse tree produced by `DiceNotationParser.operand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOperand?: (ctx: OperandContext) => Result;

	/**
	 * Visit a parse tree produced by `DiceNotationParser.dice`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDice?: (ctx: DiceContext) => Result;

	/**
	 * Visit a parse tree produced by `DiceNotationParser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumber?: (ctx: NumberContext) => Result;
}

