// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/istc/istc.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { IstcContext } from "./istcParser";
import { RegistrationContext } from "./istcParser";
import { YearContext } from "./istcParser";
import { WorkContext } from "./istcParser";
import { CheckContext } from "./istcParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `istcParser`.
 */
export interface istcListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `istcParser.istc`.
	 * @param ctx the parse tree
	 */
	enterIstc?: (ctx: IstcContext) => void;
	/**
	 * Exit a parse tree produced by `istcParser.istc`.
	 * @param ctx the parse tree
	 */
	exitIstc?: (ctx: IstcContext) => void;

	/**
	 * Enter a parse tree produced by `istcParser.registration`.
	 * @param ctx the parse tree
	 */
	enterRegistration?: (ctx: RegistrationContext) => void;
	/**
	 * Exit a parse tree produced by `istcParser.registration`.
	 * @param ctx the parse tree
	 */
	exitRegistration?: (ctx: RegistrationContext) => void;

	/**
	 * Enter a parse tree produced by `istcParser.year`.
	 * @param ctx the parse tree
	 */
	enterYear?: (ctx: YearContext) => void;
	/**
	 * Exit a parse tree produced by `istcParser.year`.
	 * @param ctx the parse tree
	 */
	exitYear?: (ctx: YearContext) => void;

	/**
	 * Enter a parse tree produced by `istcParser.work`.
	 * @param ctx the parse tree
	 */
	enterWork?: (ctx: WorkContext) => void;
	/**
	 * Exit a parse tree produced by `istcParser.work`.
	 * @param ctx the parse tree
	 */
	exitWork?: (ctx: WorkContext) => void;

	/**
	 * Enter a parse tree produced by `istcParser.check`.
	 * @param ctx the parse tree
	 */
	enterCheck?: (ctx: CheckContext) => void;
	/**
	 * Exit a parse tree produced by `istcParser.check`.
	 * @param ctx the parse tree
	 */
	exitCheck?: (ctx: CheckContext) => void;
}

