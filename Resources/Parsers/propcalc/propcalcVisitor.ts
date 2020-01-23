// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/propcalc/propcalc.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { PropositionContext } from "./propcalcParser";
import { ExpressionContext } from "./propcalcParser";
import { RelExpressionContext } from "./propcalcParser";
import { AtomsContext } from "./propcalcParser";
import { AtomContext } from "./propcalcParser";
import { EquivContext } from "./propcalcParser";
import { ImpliesContext } from "./propcalcParser";
import { VariableContext } from "./propcalcParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `propcalcParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface propcalcVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `propcalcParser.proposition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProposition?: (ctx: PropositionContext) => Result;

	/**
	 * Visit a parse tree produced by `propcalcParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `propcalcParser.relExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelExpression?: (ctx: RelExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `propcalcParser.atoms`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAtoms?: (ctx: AtomsContext) => Result;

	/**
	 * Visit a parse tree produced by `propcalcParser.atom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAtom?: (ctx: AtomContext) => Result;

	/**
	 * Visit a parse tree produced by `propcalcParser.equiv`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEquiv?: (ctx: EquivContext) => Result;

	/**
	 * Visit a parse tree produced by `propcalcParser.implies`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImplies?: (ctx: ImpliesContext) => Result;

	/**
	 * Visit a parse tree produced by `propcalcParser.variable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariable?: (ctx: VariableContext) => Result;
}

