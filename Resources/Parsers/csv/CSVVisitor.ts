// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/csv/CSV.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { CsvFileContext } from "./CSVParser";
import { HdrContext } from "./CSVParser";
import { RowContext } from "./CSVParser";
import { FieldContext } from "./CSVParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `CSVParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface CSVVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `CSVParser.csvFile`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCsvFile?: (ctx: CsvFileContext) => Result;

	/**
	 * Visit a parse tree produced by `CSVParser.hdr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHdr?: (ctx: HdrContext) => Result;

	/**
	 * Visit a parse tree produced by `CSVParser.row`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRow?: (ctx: RowContext) => Result;

	/**
	 * Visit a parse tree produced by `CSVParser.field`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitField?: (ctx: FieldContext) => Result;
}

