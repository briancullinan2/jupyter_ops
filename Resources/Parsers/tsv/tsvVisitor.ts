// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/tsv/tsv.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { TsvFileContext } from "./tsvParser";
import { HdrContext } from "./tsvParser";
import { RowContext } from "./tsvParser";
import { FieldContext } from "./tsvParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `tsvParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface tsvVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `tsvParser.tsvFile`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTsvFile?: (ctx: TsvFileContext) => Result;

	/**
	 * Visit a parse tree produced by `tsvParser.hdr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHdr?: (ctx: HdrContext) => Result;

	/**
	 * Visit a parse tree produced by `tsvParser.row`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRow?: (ctx: RowContext) => Result;

	/**
	 * Visit a parse tree produced by `tsvParser.field`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitField?: (ctx: FieldContext) => Result;
}

