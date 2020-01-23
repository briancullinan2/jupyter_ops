// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/clf/clf.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { LogContext } from "./clfParser";
import { LineContext } from "./clfParser";
import { HostContext } from "./clfParser";
import { LognameContext } from "./clfParser";
import { UsernameContext } from "./clfParser";
import { DatetimetzContext } from "./clfParser";
import { RefererContext } from "./clfParser";
import { RequestContext } from "./clfParser";
import { UseragentContext } from "./clfParser";
import { StatuscodeContext } from "./clfParser";
import { BytesContext } from "./clfParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `clfParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface clfVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `clfParser.log`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLog?: (ctx: LogContext) => Result;

	/**
	 * Visit a parse tree produced by `clfParser.line`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLine?: (ctx: LineContext) => Result;

	/**
	 * Visit a parse tree produced by `clfParser.host`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHost?: (ctx: HostContext) => Result;

	/**
	 * Visit a parse tree produced by `clfParser.logname`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogname?: (ctx: LognameContext) => Result;

	/**
	 * Visit a parse tree produced by `clfParser.username`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUsername?: (ctx: UsernameContext) => Result;

	/**
	 * Visit a parse tree produced by `clfParser.datetimetz`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDatetimetz?: (ctx: DatetimetzContext) => Result;

	/**
	 * Visit a parse tree produced by `clfParser.referer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReferer?: (ctx: RefererContext) => Result;

	/**
	 * Visit a parse tree produced by `clfParser.request`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRequest?: (ctx: RequestContext) => Result;

	/**
	 * Visit a parse tree produced by `clfParser.useragent`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUseragent?: (ctx: UseragentContext) => Result;

	/**
	 * Visit a parse tree produced by `clfParser.statuscode`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatuscode?: (ctx: StatuscodeContext) => Result;

	/**
	 * Visit a parse tree produced by `clfParser.bytes`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBytes?: (ctx: BytesContext) => Result;
}

