// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/propcalc/propcalc.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { PropositionContext } from "./propcalcParser";
import { ExpressionContext } from "./propcalcParser";
import { RelExpressionContext } from "./propcalcParser";
import { AtomsContext } from "./propcalcParser";
import { AtomContext } from "./propcalcParser";
import { EquivContext } from "./propcalcParser";
import { ImpliesContext } from "./propcalcParser";
import { VariableContext } from "./propcalcParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `propcalcParser`.
 */
export interface propcalcListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `propcalcParser.proposition`.
	 * @param ctx the parse tree
	 */
	enterProposition?: (ctx: PropositionContext) => void;
	/**
	 * Exit a parse tree produced by `propcalcParser.proposition`.
	 * @param ctx the parse tree
	 */
	exitProposition?: (ctx: PropositionContext) => void;

	/**
	 * Enter a parse tree produced by `propcalcParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `propcalcParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `propcalcParser.relExpression`.
	 * @param ctx the parse tree
	 */
	enterRelExpression?: (ctx: RelExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `propcalcParser.relExpression`.
	 * @param ctx the parse tree
	 */
	exitRelExpression?: (ctx: RelExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `propcalcParser.atoms`.
	 * @param ctx the parse tree
	 */
	enterAtoms?: (ctx: AtomsContext) => void;
	/**
	 * Exit a parse tree produced by `propcalcParser.atoms`.
	 * @param ctx the parse tree
	 */
	exitAtoms?: (ctx: AtomsContext) => void;

	/**
	 * Enter a parse tree produced by `propcalcParser.atom`.
	 * @param ctx the parse tree
	 */
	enterAtom?: (ctx: AtomContext) => void;
	/**
	 * Exit a parse tree produced by `propcalcParser.atom`.
	 * @param ctx the parse tree
	 */
	exitAtom?: (ctx: AtomContext) => void;

	/**
	 * Enter a parse tree produced by `propcalcParser.equiv`.
	 * @param ctx the parse tree
	 */
	enterEquiv?: (ctx: EquivContext) => void;
	/**
	 * Exit a parse tree produced by `propcalcParser.equiv`.
	 * @param ctx the parse tree
	 */
	exitEquiv?: (ctx: EquivContext) => void;

	/**
	 * Enter a parse tree produced by `propcalcParser.implies`.
	 * @param ctx the parse tree
	 */
	enterImplies?: (ctx: ImpliesContext) => void;
	/**
	 * Exit a parse tree produced by `propcalcParser.implies`.
	 * @param ctx the parse tree
	 */
	exitImplies?: (ctx: ImpliesContext) => void;

	/**
	 * Enter a parse tree produced by `propcalcParser.variable`.
	 * @param ctx the parse tree
	 */
	enterVariable?: (ctx: VariableContext) => void;
	/**
	 * Exit a parse tree produced by `propcalcParser.variable`.
	 * @param ctx the parse tree
	 */
	exitVariable?: (ctx: VariableContext) => void;
}

