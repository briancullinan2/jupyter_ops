// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/properties/properties.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { PropertiesFileContext } from "./propertiesParser";
import { RowContext } from "./propertiesParser";
import { DeclContext } from "./propertiesParser";
import { KeyContext } from "./propertiesParser";
import { ValueContext } from "./propertiesParser";
import { CommentContext } from "./propertiesParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `propertiesParser`.
 */
export interface propertiesListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `propertiesParser.propertiesFile`.
	 * @param ctx the parse tree
	 */
	enterPropertiesFile?: (ctx: PropertiesFileContext) => void;
	/**
	 * Exit a parse tree produced by `propertiesParser.propertiesFile`.
	 * @param ctx the parse tree
	 */
	exitPropertiesFile?: (ctx: PropertiesFileContext) => void;

	/**
	 * Enter a parse tree produced by `propertiesParser.row`.
	 * @param ctx the parse tree
	 */
	enterRow?: (ctx: RowContext) => void;
	/**
	 * Exit a parse tree produced by `propertiesParser.row`.
	 * @param ctx the parse tree
	 */
	exitRow?: (ctx: RowContext) => void;

	/**
	 * Enter a parse tree produced by `propertiesParser.decl`.
	 * @param ctx the parse tree
	 */
	enterDecl?: (ctx: DeclContext) => void;
	/**
	 * Exit a parse tree produced by `propertiesParser.decl`.
	 * @param ctx the parse tree
	 */
	exitDecl?: (ctx: DeclContext) => void;

	/**
	 * Enter a parse tree produced by `propertiesParser.key`.
	 * @param ctx the parse tree
	 */
	enterKey?: (ctx: KeyContext) => void;
	/**
	 * Exit a parse tree produced by `propertiesParser.key`.
	 * @param ctx the parse tree
	 */
	exitKey?: (ctx: KeyContext) => void;

	/**
	 * Enter a parse tree produced by `propertiesParser.value`.
	 * @param ctx the parse tree
	 */
	enterValue?: (ctx: ValueContext) => void;
	/**
	 * Exit a parse tree produced by `propertiesParser.value`.
	 * @param ctx the parse tree
	 */
	exitValue?: (ctx: ValueContext) => void;

	/**
	 * Enter a parse tree produced by `propertiesParser.comment`.
	 * @param ctx the parse tree
	 */
	enterComment?: (ctx: CommentContext) => void;
	/**
	 * Exit a parse tree produced by `propertiesParser.comment`.
	 * @param ctx the parse tree
	 */
	exitComment?: (ctx: CommentContext) => void;
}

