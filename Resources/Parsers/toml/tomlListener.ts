// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/toml/toml.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `tomlParser`.
 */
export interface tomlListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `tomlParser.document`.
	 * @param ctx the parse tree
	 */
	enterDocument?: (ctx: DocumentContext) => void;
	/**
	 * Exit a parse tree produced by `tomlParser.document`.
	 * @param ctx the parse tree
	 */
	exitDocument?: (ctx: DocumentContext) => void;

	/**
	 * Enter a parse tree produced by `tomlParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `tomlParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `tomlParser.comment`.
	 * @param ctx the parse tree
	 */
	enterComment?: (ctx: CommentContext) => void;
	/**
	 * Exit a parse tree produced by `tomlParser.comment`.
	 * @param ctx the parse tree
	 */
	exitComment?: (ctx: CommentContext) => void;

	/**
	 * Enter a parse tree produced by `tomlParser.key_value`.
	 * @param ctx the parse tree
	 */
	enterKey_value?: (ctx: Key_valueContext) => void;
	/**
	 * Exit a parse tree produced by `tomlParser.key_value`.
	 * @param ctx the parse tree
	 */
	exitKey_value?: (ctx: Key_valueContext) => void;

	/**
	 * Enter a parse tree produced by `tomlParser.key`.
	 * @param ctx the parse tree
	 */
	enterKey?: (ctx: KeyContext) => void;
	/**
	 * Exit a parse tree produced by `tomlParser.key`.
	 * @param ctx the parse tree
	 */
	exitKey?: (ctx: KeyContext) => void;

	/**
	 * Enter a parse tree produced by `tomlParser.simple_key`.
	 * @param ctx the parse tree
	 */
	enterSimple_key?: (ctx: Simple_keyContext) => void;
	/**
	 * Exit a parse tree produced by `tomlParser.simple_key`.
	 * @param ctx the parse tree
	 */
	exitSimple_key?: (ctx: Simple_keyContext) => void;

	/**
	 * Enter a parse tree produced by `tomlParser.unquoted_key`.
	 * @param ctx the parse tree
	 */
	enterUnquoted_key?: (ctx: Unquoted_keyContext) => void;
	/**
	 * Exit a parse tree produced by `tomlParser.unquoted_key`.
	 * @param ctx the parse tree
	 */
	exitUnquoted_key?: (ctx: Unquoted_keyContext) => void;

	/**
	 * Enter a parse tree produced by `tomlParser.quoted_key`.
	 * @param ctx the parse tree
	 */
	enterQuoted_key?: (ctx: Quoted_keyContext) => void;
	/**
	 * Exit a parse tree produced by `tomlParser.quoted_key`.
	 * @param ctx the parse tree
	 */
	exitQuoted_key?: (ctx: Quoted_keyContext) => void;

	/**
	 * Enter a parse tree produced by `tomlParser.dotted_key`.
	 * @param ctx the parse tree
	 */
	enterDotted_key?: (ctx: Dotted_keyContext) => void;
	/**
	 * Exit a parse tree produced by `tomlParser.dotted_key`.
	 * @param ctx the parse tree
	 */
	exitDotted_key?: (ctx: Dotted_keyContext) => void;

	/**
	 * Enter a parse tree produced by `tomlParser.value`.
	 * @param ctx the parse tree
	 */
	enterValue?: (ctx: ValueContext) => void;
	/**
	 * Exit a parse tree produced by `tomlParser.value`.
	 * @param ctx the parse tree
	 */
	exitValue?: (ctx: ValueContext) => void;

	/**
	 * Enter a parse tree produced by `tomlParser.string`.
	 * @param ctx the parse tree
	 */
	enterString?: (ctx: StringContext) => void;
	/**
	 * Exit a parse tree produced by `tomlParser.string`.
	 * @param ctx the parse tree
	 */
	exitString?: (ctx: StringContext) => void;

	/**
	 * Enter a parse tree produced by `tomlParser.integer`.
	 * @param ctx the parse tree
	 */
	enterInteger?: (ctx: IntegerContext) => void;
	/**
	 * Exit a parse tree produced by `tomlParser.integer`.
	 * @param ctx the parse tree
	 */
	exitInteger?: (ctx: IntegerContext) => void;

	/**
	 * Enter a parse tree produced by `tomlParser.floating_point`.
	 * @param ctx the parse tree
	 */
	enterFloating_point?: (ctx: Floating_pointContext) => void;
	/**
	 * Exit a parse tree produced by `tomlParser.floating_point`.
	 * @param ctx the parse tree
	 */
	exitFloating_point?: (ctx: Floating_pointContext) => void;

	/**
	 * Enter a parse tree produced by `tomlParser.bool`.
	 * @param ctx the parse tree
	 */
	enterBool?: (ctx: BoolContext) => void;
	/**
	 * Exit a parse tree produced by `tomlParser.bool`.
	 * @param ctx the parse tree
	 */
	exitBool?: (ctx: BoolContext) => void;

	/**
	 * Enter a parse tree produced by `tomlParser.date_time`.
	 * @param ctx the parse tree
	 */
	enterDate_time?: (ctx: Date_timeContext) => void;
	/**
	 * Exit a parse tree produced by `tomlParser.date_time`.
	 * @param ctx the parse tree
	 */
	exitDate_time?: (ctx: Date_timeContext) => void;

	/**
	 * Enter a parse tree produced by `tomlParser.array`.
	 * @param ctx the parse tree
	 */
	enterArray?: (ctx: ArrayContext) => void;
	/**
	 * Exit a parse tree produced by `tomlParser.array`.
	 * @param ctx the parse tree
	 */
	exitArray?: (ctx: ArrayContext) => void;

	/**
	 * Enter a parse tree produced by `tomlParser.array_values`.
	 * @param ctx the parse tree
	 */
	enterArray_values?: (ctx: Array_valuesContext) => void;
	/**
	 * Exit a parse tree produced by `tomlParser.array_values`.
	 * @param ctx the parse tree
	 */
	exitArray_values?: (ctx: Array_valuesContext) => void;

	/**
	 * Enter a parse tree produced by `tomlParser.comment_or_nl`.
	 * @param ctx the parse tree
	 */
	enterComment_or_nl?: (ctx: Comment_or_nlContext) => void;
	/**
	 * Exit a parse tree produced by `tomlParser.comment_or_nl`.
	 * @param ctx the parse tree
	 */
	exitComment_or_nl?: (ctx: Comment_or_nlContext) => void;

	/**
	 * Enter a parse tree produced by `tomlParser.table`.
	 * @param ctx the parse tree
	 */
	enterTable?: (ctx: TableContext) => void;
	/**
	 * Exit a parse tree produced by `tomlParser.table`.
	 * @param ctx the parse tree
	 */
	exitTable?: (ctx: TableContext) => void;

	/**
	 * Enter a parse tree produced by `tomlParser.standard_table`.
	 * @param ctx the parse tree
	 */
	enterStandard_table?: (ctx: Standard_tableContext) => void;
	/**
	 * Exit a parse tree produced by `tomlParser.standard_table`.
	 * @param ctx the parse tree
	 */
	exitStandard_table?: (ctx: Standard_tableContext) => void;

	/**
	 * Enter a parse tree produced by `tomlParser.inline_table`.
	 * @param ctx the parse tree
	 */
	enterInline_table?: (ctx: Inline_tableContext) => void;
	/**
	 * Exit a parse tree produced by `tomlParser.inline_table`.
	 * @param ctx the parse tree
	 */
	exitInline_table?: (ctx: Inline_tableContext) => void;

	/**
	 * Enter a parse tree produced by `tomlParser.inline_table_keyvals`.
	 * @param ctx the parse tree
	 */
	enterInline_table_keyvals?: (ctx: Inline_table_keyvalsContext) => void;
	/**
	 * Exit a parse tree produced by `tomlParser.inline_table_keyvals`.
	 * @param ctx the parse tree
	 */
	exitInline_table_keyvals?: (ctx: Inline_table_keyvalsContext) => void;

	/**
	 * Enter a parse tree produced by `tomlParser.inline_table_keyvals_non_empty`.
	 * @param ctx the parse tree
	 */
	enterInline_table_keyvals_non_empty?: (ctx: Inline_table_keyvals_non_emptyContext) => void;
	/**
	 * Exit a parse tree produced by `tomlParser.inline_table_keyvals_non_empty`.
	 * @param ctx the parse tree
	 */
	exitInline_table_keyvals_non_empty?: (ctx: Inline_table_keyvals_non_emptyContext) => void;

	/**
	 * Enter a parse tree produced by `tomlParser.array_table`.
	 * @param ctx the parse tree
	 */
	enterArray_table?: (ctx: Array_tableContext) => void;
	/**
	 * Exit a parse tree produced by `tomlParser.array_table`.
	 * @param ctx the parse tree
	 */
	exitArray_table?: (ctx: Array_tableContext) => void;
}

