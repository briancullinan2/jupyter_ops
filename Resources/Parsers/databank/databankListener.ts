// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/databank/databank.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { DatabankContext } from "./databankParser";
import { DatedseriesContext } from "./databankParser";
import { UndatedseriesContext } from "./databankParser";
import { DatatypeContext } from "./databankParser";
import { DatelineContext } from "./databankParser";
import { SampleContext } from "./databankParser";
import { NumberContext } from "./databankParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `databankParser`.
 */
export interface databankListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `databankParser.databank`.
	 * @param ctx the parse tree
	 */
	enterDatabank?: (ctx: DatabankContext) => void;
	/**
	 * Exit a parse tree produced by `databankParser.databank`.
	 * @param ctx the parse tree
	 */
	exitDatabank?: (ctx: DatabankContext) => void;

	/**
	 * Enter a parse tree produced by `databankParser.datedseries`.
	 * @param ctx the parse tree
	 */
	enterDatedseries?: (ctx: DatedseriesContext) => void;
	/**
	 * Exit a parse tree produced by `databankParser.datedseries`.
	 * @param ctx the parse tree
	 */
	exitDatedseries?: (ctx: DatedseriesContext) => void;

	/**
	 * Enter a parse tree produced by `databankParser.undatedseries`.
	 * @param ctx the parse tree
	 */
	enterUndatedseries?: (ctx: UndatedseriesContext) => void;
	/**
	 * Exit a parse tree produced by `databankParser.undatedseries`.
	 * @param ctx the parse tree
	 */
	exitUndatedseries?: (ctx: UndatedseriesContext) => void;

	/**
	 * Enter a parse tree produced by `databankParser.datatype`.
	 * @param ctx the parse tree
	 */
	enterDatatype?: (ctx: DatatypeContext) => void;
	/**
	 * Exit a parse tree produced by `databankParser.datatype`.
	 * @param ctx the parse tree
	 */
	exitDatatype?: (ctx: DatatypeContext) => void;

	/**
	 * Enter a parse tree produced by `databankParser.dateline`.
	 * @param ctx the parse tree
	 */
	enterDateline?: (ctx: DatelineContext) => void;
	/**
	 * Exit a parse tree produced by `databankParser.dateline`.
	 * @param ctx the parse tree
	 */
	exitDateline?: (ctx: DatelineContext) => void;

	/**
	 * Enter a parse tree produced by `databankParser.sample`.
	 * @param ctx the parse tree
	 */
	enterSample?: (ctx: SampleContext) => void;
	/**
	 * Exit a parse tree produced by `databankParser.sample`.
	 * @param ctx the parse tree
	 */
	exitSample?: (ctx: SampleContext) => void;

	/**
	 * Enter a parse tree produced by `databankParser.number`.
	 * @param ctx the parse tree
	 */
	enterNumber?: (ctx: NumberContext) => void;
	/**
	 * Exit a parse tree produced by `databankParser.number`.
	 * @param ctx the parse tree
	 */
	exitNumber?: (ctx: NumberContext) => void;
}

