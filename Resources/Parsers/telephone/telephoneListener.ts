// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/telephone/telephone.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { NumberContext } from "./telephoneParser";
import { VariationContext } from "./telephoneParser";
import { NanpContext } from "./telephoneParser";
import { AreacodeContext } from "./telephoneParser";
import { ExchangeContext } from "./telephoneParser";
import { SubscriberContext } from "./telephoneParser";
import { JapanContext } from "./telephoneParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `telephoneParser`.
 */
export interface telephoneListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `telephoneParser.number`.
	 * @param ctx the parse tree
	 */
	enterNumber?: (ctx: NumberContext) => void;
	/**
	 * Exit a parse tree produced by `telephoneParser.number`.
	 * @param ctx the parse tree
	 */
	exitNumber?: (ctx: NumberContext) => void;

	/**
	 * Enter a parse tree produced by `telephoneParser.variation`.
	 * @param ctx the parse tree
	 */
	enterVariation?: (ctx: VariationContext) => void;
	/**
	 * Exit a parse tree produced by `telephoneParser.variation`.
	 * @param ctx the parse tree
	 */
	exitVariation?: (ctx: VariationContext) => void;

	/**
	 * Enter a parse tree produced by `telephoneParser.nanp`.
	 * @param ctx the parse tree
	 */
	enterNanp?: (ctx: NanpContext) => void;
	/**
	 * Exit a parse tree produced by `telephoneParser.nanp`.
	 * @param ctx the parse tree
	 */
	exitNanp?: (ctx: NanpContext) => void;

	/**
	 * Enter a parse tree produced by `telephoneParser.areacode`.
	 * @param ctx the parse tree
	 */
	enterAreacode?: (ctx: AreacodeContext) => void;
	/**
	 * Exit a parse tree produced by `telephoneParser.areacode`.
	 * @param ctx the parse tree
	 */
	exitAreacode?: (ctx: AreacodeContext) => void;

	/**
	 * Enter a parse tree produced by `telephoneParser.exchange`.
	 * @param ctx the parse tree
	 */
	enterExchange?: (ctx: ExchangeContext) => void;
	/**
	 * Exit a parse tree produced by `telephoneParser.exchange`.
	 * @param ctx the parse tree
	 */
	exitExchange?: (ctx: ExchangeContext) => void;

	/**
	 * Enter a parse tree produced by `telephoneParser.subscriber`.
	 * @param ctx the parse tree
	 */
	enterSubscriber?: (ctx: SubscriberContext) => void;
	/**
	 * Exit a parse tree produced by `telephoneParser.subscriber`.
	 * @param ctx the parse tree
	 */
	exitSubscriber?: (ctx: SubscriberContext) => void;

	/**
	 * Enter a parse tree produced by `telephoneParser.japan`.
	 * @param ctx the parse tree
	 */
	enterJapan?: (ctx: JapanContext) => void;
	/**
	 * Exit a parse tree produced by `telephoneParser.japan`.
	 * @param ctx the parse tree
	 */
	exitJapan?: (ctx: JapanContext) => void;
}

