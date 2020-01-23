// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/tnt/tnt.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { EquationContext } from "./tntParser";
import { AtomContext } from "./tntParser";
import { NumberContext } from "./tntParser";
import { VariableContext } from "./tntParser";
import { ExpressionContext } from "./tntParser";
import { ForeveryContext } from "./tntParser";
import { ExistsContext } from "./tntParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `tntParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface tntVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `tntParser.equation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEquation?: (ctx: EquationContext) => Result;

	/**
	 * Visit a parse tree produced by `tntParser.atom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAtom?: (ctx: AtomContext) => Result;

	/**
	 * Visit a parse tree produced by `tntParser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumber?: (ctx: NumberContext) => Result;

	/**
	 * Visit a parse tree produced by `tntParser.variable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariable?: (ctx: VariableContext) => Result;

	/**
	 * Visit a parse tree produced by `tntParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `tntParser.forevery`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForevery?: (ctx: ForeveryContext) => Result;

	/**
	 * Visit a parse tree produced by `tntParser.exists`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExists?: (ctx: ExistsContext) => Result;
}

