// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/toml/toml.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { DocumentContext } from "./tomlParser";
import { ExpressionContext } from "./tomlParser";
import { CommentContext } from "./tomlParser";
import { Key_valueContext } from "./tomlParser";
import { KeyContext } from "./tomlParser";
import { Simple_keyContext } from "./tomlParser";
import { Unquoted_keyContext } from "./tomlParser";
import { Quoted_keyContext } from "./tomlParser";
import { Dotted_keyContext } from "./tomlParser";
import { ValueContext } from "./tomlParser";
import { StringContext } from "./tomlParser";
import { IntegerContext } from "./tomlParser";
import { Floating_pointContext } from "./tomlParser";
import { BoolContext } from "./tomlParser";
import { Date_timeContext } from "./tomlParser";
import { ArrayContext } from "./tomlParser";
import { Array_valuesContext } from "./tomlParser";
import { Comment_or_nlContext } from "./tomlParser";
import { TableContext } from "./tomlParser";
import { Standard_tableContext } from "./tomlParser";
import { Inline_tableContext } from "./tomlParser";
import { Inline_table_keyvalsContext } from "./tomlParser";
import { Inline_table_keyvals_non_emptyContext } from "./tomlParser";
import { Array_tableContext } from "./tomlParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `tomlParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface tomlVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `tomlParser.document`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDocument?: (ctx: DocumentContext) => Result;

	/**
	 * Visit a parse tree produced by `tomlParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `tomlParser.comment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComment?: (ctx: CommentContext) => Result;

	/**
	 * Visit a parse tree produced by `tomlParser.key_value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKey_value?: (ctx: Key_valueContext) => Result;

	/**
	 * Visit a parse tree produced by `tomlParser.key`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKey?: (ctx: KeyContext) => Result;

	/**
	 * Visit a parse tree produced by `tomlParser.simple_key`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimple_key?: (ctx: Simple_keyContext) => Result;

	/**
	 * Visit a parse tree produced by `tomlParser.unquoted_key`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnquoted_key?: (ctx: Unquoted_keyContext) => Result;

	/**
	 * Visit a parse tree produced by `tomlParser.quoted_key`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuoted_key?: (ctx: Quoted_keyContext) => Result;

	/**
	 * Visit a parse tree produced by `tomlParser.dotted_key`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDotted_key?: (ctx: Dotted_keyContext) => Result;

	/**
	 * Visit a parse tree produced by `tomlParser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValue?: (ctx: ValueContext) => Result;

	/**
	 * Visit a parse tree produced by `tomlParser.string`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitString?: (ctx: StringContext) => Result;

	/**
	 * Visit a parse tree produced by `tomlParser.integer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInteger?: (ctx: IntegerContext) => Result;

	/**
	 * Visit a parse tree produced by `tomlParser.floating_point`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFloating_point?: (ctx: Floating_pointContext) => Result;

	/**
	 * Visit a parse tree produced by `tomlParser.bool`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBool?: (ctx: BoolContext) => Result;

	/**
	 * Visit a parse tree produced by `tomlParser.date_time`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDate_time?: (ctx: Date_timeContext) => Result;

	/**
	 * Visit a parse tree produced by `tomlParser.array`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArray?: (ctx: ArrayContext) => Result;

	/**
	 * Visit a parse tree produced by `tomlParser.array_values`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArray_values?: (ctx: Array_valuesContext) => Result;

	/**
	 * Visit a parse tree produced by `tomlParser.comment_or_nl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComment_or_nl?: (ctx: Comment_or_nlContext) => Result;

	/**
	 * Visit a parse tree produced by `tomlParser.table`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTable?: (ctx: TableContext) => Result;

	/**
	 * Visit a parse tree produced by `tomlParser.standard_table`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStandard_table?: (ctx: Standard_tableContext) => Result;

	/**
	 * Visit a parse tree produced by `tomlParser.inline_table`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInline_table?: (ctx: Inline_tableContext) => Result;

	/**
	 * Visit a parse tree produced by `tomlParser.inline_table_keyvals`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInline_table_keyvals?: (ctx: Inline_table_keyvalsContext) => Result;

	/**
	 * Visit a parse tree produced by `tomlParser.inline_table_keyvals_non_empty`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInline_table_keyvals_non_empty?: (ctx: Inline_table_keyvals_non_emptyContext) => Result;

	/**
	 * Visit a parse tree produced by `tomlParser.array_table`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArray_table?: (ctx: Array_tableContext) => Result;
}

