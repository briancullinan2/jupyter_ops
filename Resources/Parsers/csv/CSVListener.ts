// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/csv/CSV.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { CsvFileContext } from "./CSVParser";
import { HdrContext } from "./CSVParser";
import { RowContext } from "./CSVParser";
import { FieldContext } from "./CSVParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `CSVParser`.
 */
export interface CSVListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `CSVParser.csvFile`.
	 * @param ctx the parse tree
	 */
	enterCsvFile?: (ctx: CsvFileContext) => void;
	/**
	 * Exit a parse tree produced by `CSVParser.csvFile`.
	 * @param ctx the parse tree
	 */
	exitCsvFile?: (ctx: CsvFileContext) => void;

	/**
	 * Enter a parse tree produced by `CSVParser.hdr`.
	 * @param ctx the parse tree
	 */
	enterHdr?: (ctx: HdrContext) => void;
	/**
	 * Exit a parse tree produced by `CSVParser.hdr`.
	 * @param ctx the parse tree
	 */
	exitHdr?: (ctx: HdrContext) => void;

	/**
	 * Enter a parse tree produced by `CSVParser.row`.
	 * @param ctx the parse tree
	 */
	enterRow?: (ctx: RowContext) => void;
	/**
	 * Exit a parse tree produced by `CSVParser.row`.
	 * @param ctx the parse tree
	 */
	exitRow?: (ctx: RowContext) => void;

	/**
	 * Enter a parse tree produced by `CSVParser.field`.
	 * @param ctx the parse tree
	 */
	enterField?: (ctx: FieldContext) => void;
	/**
	 * Exit a parse tree produced by `CSVParser.field`.
	 * @param ctx the parse tree
	 */
	exitField?: (ctx: FieldContext) => void;
}

