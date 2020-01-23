// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/arithmetic/arithmetic.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { FileContext } from "./arithmeticParser";
import { EquationContext } from "./arithmeticParser";
import { ExpressionContext } from "./arithmeticParser";
import { AtomContext } from "./arithmeticParser";
import { ScientificContext } from "./arithmeticParser";
import { VariableContext } from "./arithmeticParser";
import { RelopContext } from "./arithmeticParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `arithmeticParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface arithmeticVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `arithmeticParser.file`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFile?: (ctx: FileContext) => Result;

	/**
	 * Visit a parse tree produced by `arithmeticParser.equation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEquation?: (ctx: EquationContext) => Result;

	/**
	 * Visit a parse tree produced by `arithmeticParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `arithmeticParser.atom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAtom?: (ctx: AtomContext) => Result;

	/**
	 * Visit a parse tree produced by `arithmeticParser.scientific`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScientific?: (ctx: ScientificContext) => Result;

	/**
	 * Visit a parse tree produced by `arithmeticParser.variable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariable?: (ctx: VariableContext) => Result;

	/**
	 * Visit a parse tree produced by `arithmeticParser.relop`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelop?: (ctx: RelopContext) => Result;
}

