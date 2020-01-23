// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/suokif/SUOKIF.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { Top_levelContext } from "./SUOKIFParser";
import { TermContext } from "./SUOKIFParser";
import { ArgumentContext } from "./SUOKIFParser";
import { FuntermContext } from "./SUOKIFParser";
import { SentenceContext } from "./SUOKIFParser";
import { EquationContext } from "./SUOKIFParser";
import { RelsentContext } from "./SUOKIFParser";
import { LogsentContext } from "./SUOKIFParser";
import { QuantsentContext } from "./SUOKIFParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `SUOKIFParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface SUOKIFVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `SUOKIFParser.top_level`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTop_level?: (ctx: Top_levelContext) => Result;

	/**
	 * Visit a parse tree produced by `SUOKIFParser.term`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTerm?: (ctx: TermContext) => Result;

	/**
	 * Visit a parse tree produced by `SUOKIFParser.argument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgument?: (ctx: ArgumentContext) => Result;

	/**
	 * Visit a parse tree produced by `SUOKIFParser.funterm`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunterm?: (ctx: FuntermContext) => Result;

	/**
	 * Visit a parse tree produced by `SUOKIFParser.sentence`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSentence?: (ctx: SentenceContext) => Result;

	/**
	 * Visit a parse tree produced by `SUOKIFParser.equation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEquation?: (ctx: EquationContext) => Result;

	/**
	 * Visit a parse tree produced by `SUOKIFParser.relsent`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelsent?: (ctx: RelsentContext) => Result;

	/**
	 * Visit a parse tree produced by `SUOKIFParser.logsent`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogsent?: (ctx: LogsentContext) => Result;

	/**
	 * Visit a parse tree produced by `SUOKIFParser.quantsent`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuantsent?: (ctx: QuantsentContext) => Result;
}

