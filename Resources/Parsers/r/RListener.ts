// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/r/R.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ProgContext } from "./RParser";
import { ExprContext } from "./RParser";
import { ExprlistContext } from "./RParser";
import { FormlistContext } from "./RParser";
import { FormContext } from "./RParser";
import { SublistContext } from "./RParser";
import { SubContext } from "./RParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `RParser`.
 */
export interface RListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `RParser.prog`.
	 * @param ctx the parse tree
	 */
	enterProg?: (ctx: ProgContext) => void;
	/**
	 * Exit a parse tree produced by `RParser.prog`.
	 * @param ctx the parse tree
	 */
	exitProg?: (ctx: ProgContext) => void;

	/**
	 * Enter a parse tree produced by `RParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExpr?: (ctx: ExprContext) => void;
	/**
	 * Exit a parse tree produced by `RParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExpr?: (ctx: ExprContext) => void;

	/**
	 * Enter a parse tree produced by `RParser.exprlist`.
	 * @param ctx the parse tree
	 */
	enterExprlist?: (ctx: ExprlistContext) => void;
	/**
	 * Exit a parse tree produced by `RParser.exprlist`.
	 * @param ctx the parse tree
	 */
	exitExprlist?: (ctx: ExprlistContext) => void;

	/**
	 * Enter a parse tree produced by `RParser.formlist`.
	 * @param ctx the parse tree
	 */
	enterFormlist?: (ctx: FormlistContext) => void;
	/**
	 * Exit a parse tree produced by `RParser.formlist`.
	 * @param ctx the parse tree
	 */
	exitFormlist?: (ctx: FormlistContext) => void;

	/**
	 * Enter a parse tree produced by `RParser.form`.
	 * @param ctx the parse tree
	 */
	enterForm?: (ctx: FormContext) => void;
	/**
	 * Exit a parse tree produced by `RParser.form`.
	 * @param ctx the parse tree
	 */
	exitForm?: (ctx: FormContext) => void;

	/**
	 * Enter a parse tree produced by `RParser.sublist`.
	 * @param ctx the parse tree
	 */
	enterSublist?: (ctx: SublistContext) => void;
	/**
	 * Exit a parse tree produced by `RParser.sublist`.
	 * @param ctx the parse tree
	 */
	exitSublist?: (ctx: SublistContext) => void;

	/**
	 * Enter a parse tree produced by `RParser.sub`.
	 * @param ctx the parse tree
	 */
	enterSub?: (ctx: SubContext) => void;
	/**
	 * Exit a parse tree produced by `RParser.sub`.
	 * @param ctx the parse tree
	 */
	exitSub?: (ctx: SubContext) => void;
}

