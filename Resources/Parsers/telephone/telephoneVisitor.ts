// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/telephone/telephone.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { NumberContext } from "./telephoneParser";
import { VariationContext } from "./telephoneParser";
import { NanpContext } from "./telephoneParser";
import { AreacodeContext } from "./telephoneParser";
import { ExchangeContext } from "./telephoneParser";
import { SubscriberContext } from "./telephoneParser";
import { JapanContext } from "./telephoneParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `telephoneParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface telephoneVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `telephoneParser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumber?: (ctx: NumberContext) => Result;

	/**
	 * Visit a parse tree produced by `telephoneParser.variation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariation?: (ctx: VariationContext) => Result;

	/**
	 * Visit a parse tree produced by `telephoneParser.nanp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNanp?: (ctx: NanpContext) => Result;

	/**
	 * Visit a parse tree produced by `telephoneParser.areacode`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAreacode?: (ctx: AreacodeContext) => Result;

	/**
	 * Visit a parse tree produced by `telephoneParser.exchange`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExchange?: (ctx: ExchangeContext) => Result;

	/**
	 * Visit a parse tree produced by `telephoneParser.subscriber`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubscriber?: (ctx: SubscriberContext) => Result;

	/**
	 * Visit a parse tree produced by `telephoneParser.japan`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJapan?: (ctx: JapanContext) => Result;
}

