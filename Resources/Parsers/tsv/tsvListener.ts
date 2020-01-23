// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/tsv/tsv.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { TsvFileContext } from "./tsvParser";
import { HdrContext } from "./tsvParser";
import { RowContext } from "./tsvParser";
import { FieldContext } from "./tsvParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `tsvParser`.
 */
export interface tsvListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `tsvParser.tsvFile`.
	 * @param ctx the parse tree
	 */
	enterTsvFile?: (ctx: TsvFileContext) => void;
	/**
	 * Exit a parse tree produced by `tsvParser.tsvFile`.
	 * @param ctx the parse tree
	 */
	exitTsvFile?: (ctx: TsvFileContext) => void;

	/**
	 * Enter a parse tree produced by `tsvParser.hdr`.
	 * @param ctx the parse tree
	 */
	enterHdr?: (ctx: HdrContext) => void;
	/**
	 * Exit a parse tree produced by `tsvParser.hdr`.
	 * @param ctx the parse tree
	 */
	exitHdr?: (ctx: HdrContext) => void;

	/**
	 * Enter a parse tree produced by `tsvParser.row`.
	 * @param ctx the parse tree
	 */
	enterRow?: (ctx: RowContext) => void;
	/**
	 * Exit a parse tree produced by `tsvParser.row`.
	 * @param ctx the parse tree
	 */
	exitRow?: (ctx: RowContext) => void;

	/**
	 * Enter a parse tree produced by `tsvParser.field`.
	 * @param ctx the parse tree
	 */
	enterField?: (ctx: FieldContext) => void;
	/**
	 * Exit a parse tree produced by `tsvParser.field`.
	 * @param ctx the parse tree
	 */
	exitField?: (ctx: FieldContext) => void;
}

