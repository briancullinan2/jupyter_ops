// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/rfc822/rfc822-datetime/datetime.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { Date_timeContext } from "./datetimeParser";
import { DayContext } from "./datetimeParser";
import { DateContext } from "./datetimeParser";
import { MonthContext } from "./datetimeParser";
import { TimeContext } from "./datetimeParser";
import { HourContext } from "./datetimeParser";
import { ZoneContext } from "./datetimeParser";
import { Two_digitContext } from "./datetimeParser";
import { Four_digitContext } from "./datetimeParser";
import { AlphanumericContext } from "./datetimeParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `datetimeParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface datetimeVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `datetimeParser.date_time`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDate_time?: (ctx: Date_timeContext) => Result;

	/**
	 * Visit a parse tree produced by `datetimeParser.day`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDay?: (ctx: DayContext) => Result;

	/**
	 * Visit a parse tree produced by `datetimeParser.date`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDate?: (ctx: DateContext) => Result;

	/**
	 * Visit a parse tree produced by `datetimeParser.month`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMonth?: (ctx: MonthContext) => Result;

	/**
	 * Visit a parse tree produced by `datetimeParser.time`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTime?: (ctx: TimeContext) => Result;

	/**
	 * Visit a parse tree produced by `datetimeParser.hour`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHour?: (ctx: HourContext) => Result;

	/**
	 * Visit a parse tree produced by `datetimeParser.zone`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZone?: (ctx: ZoneContext) => Result;

	/**
	 * Visit a parse tree produced by `datetimeParser.two_digit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTwo_digit?: (ctx: Two_digitContext) => Result;

	/**
	 * Visit a parse tree produced by `datetimeParser.four_digit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFour_digit?: (ctx: Four_digitContext) => Result;

	/**
	 * Visit a parse tree produced by `datetimeParser.alphanumeric`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlphanumeric?: (ctx: AlphanumericContext) => Result;
}

