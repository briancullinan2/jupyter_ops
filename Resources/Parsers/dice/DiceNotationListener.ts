// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/dice/DiceNotation.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { NotationContext } from "./DiceNotationParser";
import { AddOpContext } from "./DiceNotationParser";
import { MultOpContext } from "./DiceNotationParser";
import { OperandContext } from "./DiceNotationParser";
import { DiceContext } from "./DiceNotationParser";
import { NumberContext } from "./DiceNotationParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `DiceNotationParser`.
 */
export interface DiceNotationListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `DiceNotationParser.notation`.
	 * @param ctx the parse tree
	 */
	enterNotation?: (ctx: NotationContext) => void;
	/**
	 * Exit a parse tree produced by `DiceNotationParser.notation`.
	 * @param ctx the parse tree
	 */
	exitNotation?: (ctx: NotationContext) => void;

	/**
	 * Enter a parse tree produced by `DiceNotationParser.addOp`.
	 * @param ctx the parse tree
	 */
	enterAddOp?: (ctx: AddOpContext) => void;
	/**
	 * Exit a parse tree produced by `DiceNotationParser.addOp`.
	 * @param ctx the parse tree
	 */
	exitAddOp?: (ctx: AddOpContext) => void;

	/**
	 * Enter a parse tree produced by `DiceNotationParser.multOp`.
	 * @param ctx the parse tree
	 */
	enterMultOp?: (ctx: MultOpContext) => void;
	/**
	 * Exit a parse tree produced by `DiceNotationParser.multOp`.
	 * @param ctx the parse tree
	 */
	exitMultOp?: (ctx: MultOpContext) => void;

	/**
	 * Enter a parse tree produced by `DiceNotationParser.operand`.
	 * @param ctx the parse tree
	 */
	enterOperand?: (ctx: OperandContext) => void;
	/**
	 * Exit a parse tree produced by `DiceNotationParser.operand`.
	 * @param ctx the parse tree
	 */
	exitOperand?: (ctx: OperandContext) => void;

	/**
	 * Enter a parse tree produced by `DiceNotationParser.dice`.
	 * @param ctx the parse tree
	 */
	enterDice?: (ctx: DiceContext) => void;
	/**
	 * Exit a parse tree produced by `DiceNotationParser.dice`.
	 * @param ctx the parse tree
	 */
	exitDice?: (ctx: DiceContext) => void;

	/**
	 * Enter a parse tree produced by `DiceNotationParser.number`.
	 * @param ctx the parse tree
	 */
	enterNumber?: (ctx: NumberContext) => void;
	/**
	 * Exit a parse tree produced by `DiceNotationParser.number`.
	 * @param ctx the parse tree
	 */
	exitNumber?: (ctx: NumberContext) => void;
}

