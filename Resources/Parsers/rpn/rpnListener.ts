// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/rpn/rpn.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ExpressionContext } from "./rpnParser";
import { TermContext } from "./rpnParser";
import { OperContext } from "./rpnParser";
import { SignedAtomContext } from "./rpnParser";
import { VariableContext } from "./rpnParser";
import { ScientificContext } from "./rpnParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `rpnParser`.
 */
export interface rpnListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `rpnParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `rpnParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `rpnParser.term`.
	 * @param ctx the parse tree
	 */
	enterTerm?: (ctx: TermContext) => void;
	/**
	 * Exit a parse tree produced by `rpnParser.term`.
	 * @param ctx the parse tree
	 */
	exitTerm?: (ctx: TermContext) => void;

	/**
	 * Enter a parse tree produced by `rpnParser.oper`.
	 * @param ctx the parse tree
	 */
	enterOper?: (ctx: OperContext) => void;
	/**
	 * Exit a parse tree produced by `rpnParser.oper`.
	 * @param ctx the parse tree
	 */
	exitOper?: (ctx: OperContext) => void;

	/**
	 * Enter a parse tree produced by `rpnParser.signedAtom`.
	 * @param ctx the parse tree
	 */
	enterSignedAtom?: (ctx: SignedAtomContext) => void;
	/**
	 * Exit a parse tree produced by `rpnParser.signedAtom`.
	 * @param ctx the parse tree
	 */
	exitSignedAtom?: (ctx: SignedAtomContext) => void;

	/**
	 * Enter a parse tree produced by `rpnParser.variable`.
	 * @param ctx the parse tree
	 */
	enterVariable?: (ctx: VariableContext) => void;
	/**
	 * Exit a parse tree produced by `rpnParser.variable`.
	 * @param ctx the parse tree
	 */
	exitVariable?: (ctx: VariableContext) => void;

	/**
	 * Enter a parse tree produced by `rpnParser.scientific`.
	 * @param ctx the parse tree
	 */
	enterScientific?: (ctx: ScientificContext) => void;
	/**
	 * Exit a parse tree produced by `rpnParser.scientific`.
	 * @param ctx the parse tree
	 */
	exitScientific?: (ctx: ScientificContext) => void;
}

