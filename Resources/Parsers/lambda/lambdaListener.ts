// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/lambda/lambda.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ExpressionContext } from "./lambdaParser";
import { FunctionContext } from "./lambdaParser";
import { ApplicationContext } from "./lambdaParser";
import { ScopeContext } from "./lambdaParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `lambdaParser`.
 */
export interface lambdaListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `lambdaParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `lambdaParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `lambdaParser.function`.
	 * @param ctx the parse tree
	 */
	enterFunction?: (ctx: FunctionContext) => void;
	/**
	 * Exit a parse tree produced by `lambdaParser.function`.
	 * @param ctx the parse tree
	 */
	exitFunction?: (ctx: FunctionContext) => void;

	/**
	 * Enter a parse tree produced by `lambdaParser.application`.
	 * @param ctx the parse tree
	 */
	enterApplication?: (ctx: ApplicationContext) => void;
	/**
	 * Exit a parse tree produced by `lambdaParser.application`.
	 * @param ctx the parse tree
	 */
	exitApplication?: (ctx: ApplicationContext) => void;

	/**
	 * Enter a parse tree produced by `lambdaParser.scope`.
	 * @param ctx the parse tree
	 */
	enterScope?: (ctx: ScopeContext) => void;
	/**
	 * Exit a parse tree produced by `lambdaParser.scope`.
	 * @param ctx the parse tree
	 */
	exitScope?: (ctx: ScopeContext) => void;
}

