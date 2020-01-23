// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/rfc822/rfc822-datetime/datetime.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `datetimeParser`.
 */
export interface datetimeListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `datetimeParser.date_time`.
	 * @param ctx the parse tree
	 */
	enterDate_time?: (ctx: Date_timeContext) => void;
	/**
	 * Exit a parse tree produced by `datetimeParser.date_time`.
	 * @param ctx the parse tree
	 */
	exitDate_time?: (ctx: Date_timeContext) => void;

	/**
	 * Enter a parse tree produced by `datetimeParser.day`.
	 * @param ctx the parse tree
	 */
	enterDay?: (ctx: DayContext) => void;
	/**
	 * Exit a parse tree produced by `datetimeParser.day`.
	 * @param ctx the parse tree
	 */
	exitDay?: (ctx: DayContext) => void;

	/**
	 * Enter a parse tree produced by `datetimeParser.date`.
	 * @param ctx the parse tree
	 */
	enterDate?: (ctx: DateContext) => void;
	/**
	 * Exit a parse tree produced by `datetimeParser.date`.
	 * @param ctx the parse tree
	 */
	exitDate?: (ctx: DateContext) => void;

	/**
	 * Enter a parse tree produced by `datetimeParser.month`.
	 * @param ctx the parse tree
	 */
	enterMonth?: (ctx: MonthContext) => void;
	/**
	 * Exit a parse tree produced by `datetimeParser.month`.
	 * @param ctx the parse tree
	 */
	exitMonth?: (ctx: MonthContext) => void;

	/**
	 * Enter a parse tree produced by `datetimeParser.time`.
	 * @param ctx the parse tree
	 */
	enterTime?: (ctx: TimeContext) => void;
	/**
	 * Exit a parse tree produced by `datetimeParser.time`.
	 * @param ctx the parse tree
	 */
	exitTime?: (ctx: TimeContext) => void;

	/**
	 * Enter a parse tree produced by `datetimeParser.hour`.
	 * @param ctx the parse tree
	 */
	enterHour?: (ctx: HourContext) => void;
	/**
	 * Exit a parse tree produced by `datetimeParser.hour`.
	 * @param ctx the parse tree
	 */
	exitHour?: (ctx: HourContext) => void;

	/**
	 * Enter a parse tree produced by `datetimeParser.zone`.
	 * @param ctx the parse tree
	 */
	enterZone?: (ctx: ZoneContext) => void;
	/**
	 * Exit a parse tree produced by `datetimeParser.zone`.
	 * @param ctx the parse tree
	 */
	exitZone?: (ctx: ZoneContext) => void;

	/**
	 * Enter a parse tree produced by `datetimeParser.two_digit`.
	 * @param ctx the parse tree
	 */
	enterTwo_digit?: (ctx: Two_digitContext) => void;
	/**
	 * Exit a parse tree produced by `datetimeParser.two_digit`.
	 * @param ctx the parse tree
	 */
	exitTwo_digit?: (ctx: Two_digitContext) => void;

	/**
	 * Enter a parse tree produced by `datetimeParser.four_digit`.
	 * @param ctx the parse tree
	 */
	enterFour_digit?: (ctx: Four_digitContext) => void;
	/**
	 * Exit a parse tree produced by `datetimeParser.four_digit`.
	 * @param ctx the parse tree
	 */
	exitFour_digit?: (ctx: Four_digitContext) => void;

	/**
	 * Enter a parse tree produced by `datetimeParser.alphanumeric`.
	 * @param ctx the parse tree
	 */
	enterAlphanumeric?: (ctx: AlphanumericContext) => void;
	/**
	 * Exit a parse tree produced by `datetimeParser.alphanumeric`.
	 * @param ctx the parse tree
	 */
	exitAlphanumeric?: (ctx: AlphanumericContext) => void;
}

