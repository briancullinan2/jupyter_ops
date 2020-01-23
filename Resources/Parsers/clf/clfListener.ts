// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/clf/clf.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `clfParser`.
 */
export interface clfListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `clfParser.log`.
	 * @param ctx the parse tree
	 */
	enterLog?: (ctx: LogContext) => void;
	/**
	 * Exit a parse tree produced by `clfParser.log`.
	 * @param ctx the parse tree
	 */
	exitLog?: (ctx: LogContext) => void;

	/**
	 * Enter a parse tree produced by `clfParser.line`.
	 * @param ctx the parse tree
	 */
	enterLine?: (ctx: LineContext) => void;
	/**
	 * Exit a parse tree produced by `clfParser.line`.
	 * @param ctx the parse tree
	 */
	exitLine?: (ctx: LineContext) => void;

	/**
	 * Enter a parse tree produced by `clfParser.host`.
	 * @param ctx the parse tree
	 */
	enterHost?: (ctx: HostContext) => void;
	/**
	 * Exit a parse tree produced by `clfParser.host`.
	 * @param ctx the parse tree
	 */
	exitHost?: (ctx: HostContext) => void;

	/**
	 * Enter a parse tree produced by `clfParser.logname`.
	 * @param ctx the parse tree
	 */
	enterLogname?: (ctx: LognameContext) => void;
	/**
	 * Exit a parse tree produced by `clfParser.logname`.
	 * @param ctx the parse tree
	 */
	exitLogname?: (ctx: LognameContext) => void;

	/**
	 * Enter a parse tree produced by `clfParser.username`.
	 * @param ctx the parse tree
	 */
	enterUsername?: (ctx: UsernameContext) => void;
	/**
	 * Exit a parse tree produced by `clfParser.username`.
	 * @param ctx the parse tree
	 */
	exitUsername?: (ctx: UsernameContext) => void;

	/**
	 * Enter a parse tree produced by `clfParser.datetimetz`.
	 * @param ctx the parse tree
	 */
	enterDatetimetz?: (ctx: DatetimetzContext) => void;
	/**
	 * Exit a parse tree produced by `clfParser.datetimetz`.
	 * @param ctx the parse tree
	 */
	exitDatetimetz?: (ctx: DatetimetzContext) => void;

	/**
	 * Enter a parse tree produced by `clfParser.referer`.
	 * @param ctx the parse tree
	 */
	enterReferer?: (ctx: RefererContext) => void;
	/**
	 * Exit a parse tree produced by `clfParser.referer`.
	 * @param ctx the parse tree
	 */
	exitReferer?: (ctx: RefererContext) => void;

	/**
	 * Enter a parse tree produced by `clfParser.request`.
	 * @param ctx the parse tree
	 */
	enterRequest?: (ctx: RequestContext) => void;
	/**
	 * Exit a parse tree produced by `clfParser.request`.
	 * @param ctx the parse tree
	 */
	exitRequest?: (ctx: RequestContext) => void;

	/**
	 * Enter a parse tree produced by `clfParser.useragent`.
	 * @param ctx the parse tree
	 */
	enterUseragent?: (ctx: UseragentContext) => void;
	/**
	 * Exit a parse tree produced by `clfParser.useragent`.
	 * @param ctx the parse tree
	 */
	exitUseragent?: (ctx: UseragentContext) => void;

	/**
	 * Enter a parse tree produced by `clfParser.statuscode`.
	 * @param ctx the parse tree
	 */
	enterStatuscode?: (ctx: StatuscodeContext) => void;
	/**
	 * Exit a parse tree produced by `clfParser.statuscode`.
	 * @param ctx the parse tree
	 */
	exitStatuscode?: (ctx: StatuscodeContext) => void;

	/**
	 * Enter a parse tree produced by `clfParser.bytes`.
	 * @param ctx the parse tree
	 */
	enterBytes?: (ctx: BytesContext) => void;
	/**
	 * Exit a parse tree produced by `clfParser.bytes`.
	 * @param ctx the parse tree
	 */
	exitBytes?: (ctx: BytesContext) => void;
}

