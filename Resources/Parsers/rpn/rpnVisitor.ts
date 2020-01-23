// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/rpn/rpn.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { ExpressionContext } from "./rpnParser";
import { TermContext } from "./rpnParser";
import { OperContext } from "./rpnParser";
import { SignedAtomContext } from "./rpnParser";
import { VariableContext } from "./rpnParser";
import { ScientificContext } from "./rpnParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `rpnParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface rpnVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `rpnParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `rpnParser.term`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTerm?: (ctx: TermContext) => Result;

	/**
	 * Visit a parse tree produced by `rpnParser.oper`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOper?: (ctx: OperContext) => Result;

	/**
	 * Visit a parse tree produced by `rpnParser.signedAtom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSignedAtom?: (ctx: SignedAtomContext) => Result;

	/**
	 * Visit a parse tree produced by `rpnParser.variable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariable?: (ctx: VariableContext) => Result;

	/**
	 * Visit a parse tree produced by `rpnParser.scientific`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScientific?: (ctx: ScientificContext) => Result;
}

