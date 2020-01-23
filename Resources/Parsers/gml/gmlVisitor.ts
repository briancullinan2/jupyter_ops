// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/gml/gml.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { GraphContext } from "./gmlParser";
import { ListContext } from "./gmlParser";
import { KvContext } from "./gmlParser";
import { ValueContext } from "./gmlParser";
import { KeyContext } from "./gmlParser";
import { IntegerContext } from "./gmlParser";
import { RealnumContext } from "./gmlParser";
import { StrContext } from "./gmlParser";
import { StringliteralContext } from "./gmlParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `gmlParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface gmlVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `gmlParser.graph`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGraph?: (ctx: GraphContext) => Result;

	/**
	 * Visit a parse tree produced by `gmlParser.list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitList?: (ctx: ListContext) => Result;

	/**
	 * Visit a parse tree produced by `gmlParser.kv`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKv?: (ctx: KvContext) => Result;

	/**
	 * Visit a parse tree produced by `gmlParser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValue?: (ctx: ValueContext) => Result;

	/**
	 * Visit a parse tree produced by `gmlParser.key`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKey?: (ctx: KeyContext) => Result;

	/**
	 * Visit a parse tree produced by `gmlParser.integer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInteger?: (ctx: IntegerContext) => Result;

	/**
	 * Visit a parse tree produced by `gmlParser.realnum`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRealnum?: (ctx: RealnumContext) => Result;

	/**
	 * Visit a parse tree produced by `gmlParser.str`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStr?: (ctx: StrContext) => Result;

	/**
	 * Visit a parse tree produced by `gmlParser.stringliteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringliteral?: (ctx: StringliteralContext) => Result;
}

