// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/properties/properties.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { PropertiesFileContext } from "./propertiesParser";
import { RowContext } from "./propertiesParser";
import { DeclContext } from "./propertiesParser";
import { KeyContext } from "./propertiesParser";
import { ValueContext } from "./propertiesParser";
import { CommentContext } from "./propertiesParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `propertiesParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface propertiesVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `propertiesParser.propertiesFile`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPropertiesFile?: (ctx: PropertiesFileContext) => Result;

	/**
	 * Visit a parse tree produced by `propertiesParser.row`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRow?: (ctx: RowContext) => Result;

	/**
	 * Visit a parse tree produced by `propertiesParser.decl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDecl?: (ctx: DeclContext) => Result;

	/**
	 * Visit a parse tree produced by `propertiesParser.key`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKey?: (ctx: KeyContext) => Result;

	/**
	 * Visit a parse tree produced by `propertiesParser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValue?: (ctx: ValueContext) => Result;

	/**
	 * Visit a parse tree produced by `propertiesParser.comment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComment?: (ctx: CommentContext) => Result;
}

