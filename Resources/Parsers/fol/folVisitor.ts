// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/fol/fol.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { ConditionContext } from "./folParser";
import { FormulaContext } from "./folParser";
import { TermContext } from "./folParser";
import { Bin_connectiveContext } from "./folParser";
import { VariableContext } from "./folParser";
import { Pred_constantContext } from "./folParser";
import { Ind_constantContext } from "./folParser";
import { Func_constantContext } from "./folParser";
import { SeparatorContext } from "./folParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `folParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface folVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `folParser.condition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCondition?: (ctx: ConditionContext) => Result;

	/**
	 * Visit a parse tree produced by `folParser.formula`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFormula?: (ctx: FormulaContext) => Result;

	/**
	 * Visit a parse tree produced by `folParser.term`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTerm?: (ctx: TermContext) => Result;

	/**
	 * Visit a parse tree produced by `folParser.bin_connective`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBin_connective?: (ctx: Bin_connectiveContext) => Result;

	/**
	 * Visit a parse tree produced by `folParser.variable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariable?: (ctx: VariableContext) => Result;

	/**
	 * Visit a parse tree produced by `folParser.pred_constant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPred_constant?: (ctx: Pred_constantContext) => Result;

	/**
	 * Visit a parse tree produced by `folParser.ind_constant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInd_constant?: (ctx: Ind_constantContext) => Result;

	/**
	 * Visit a parse tree produced by `folParser.func_constant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunc_constant?: (ctx: Func_constantContext) => Result;

	/**
	 * Visit a parse tree produced by `folParser.separator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSeparator?: (ctx: SeparatorContext) => Result;
}

