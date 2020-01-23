// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/istc/istc.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { IstcContext } from "./istcParser";
import { RegistrationContext } from "./istcParser";
import { YearContext } from "./istcParser";
import { WorkContext } from "./istcParser";
import { CheckContext } from "./istcParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `istcParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface istcVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `istcParser.istc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIstc?: (ctx: IstcContext) => Result;

	/**
	 * Visit a parse tree produced by `istcParser.registration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRegistration?: (ctx: RegistrationContext) => Result;

	/**
	 * Visit a parse tree produced by `istcParser.year`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitYear?: (ctx: YearContext) => Result;

	/**
	 * Visit a parse tree produced by `istcParser.work`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWork?: (ctx: WorkContext) => Result;

	/**
	 * Visit a parse tree produced by `istcParser.check`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCheck?: (ctx: CheckContext) => Result;
}

