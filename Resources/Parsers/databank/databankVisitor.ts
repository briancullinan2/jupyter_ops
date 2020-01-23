// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/databank/databank.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { DatabankContext } from "./databankParser";
import { DatedseriesContext } from "./databankParser";
import { UndatedseriesContext } from "./databankParser";
import { DatatypeContext } from "./databankParser";
import { DatelineContext } from "./databankParser";
import { SampleContext } from "./databankParser";
import { NumberContext } from "./databankParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `databankParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface databankVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `databankParser.databank`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDatabank?: (ctx: DatabankContext) => Result;

	/**
	 * Visit a parse tree produced by `databankParser.datedseries`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDatedseries?: (ctx: DatedseriesContext) => Result;

	/**
	 * Visit a parse tree produced by `databankParser.undatedseries`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUndatedseries?: (ctx: UndatedseriesContext) => Result;

	/**
	 * Visit a parse tree produced by `databankParser.datatype`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDatatype?: (ctx: DatatypeContext) => Result;

	/**
	 * Visit a parse tree produced by `databankParser.dateline`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDateline?: (ctx: DatelineContext) => Result;

	/**
	 * Visit a parse tree produced by `databankParser.sample`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSample?: (ctx: SampleContext) => Result;

	/**
	 * Visit a parse tree produced by `databankParser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumber?: (ctx: NumberContext) => Result;
}

