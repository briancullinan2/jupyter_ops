// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/stringtemplate/STGParser.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { GroupContext } from "./STGParser";
import { DelimitersContext } from "./STGParser";
import { ImportsContext } from "./STGParser";
import { TemplateContext } from "./STGParser";
import { FormalArgsContext } from "./STGParser";
import { FormalArgContext } from "./STGParser";
import { DictContext } from "./STGParser";
import { DictPairsContext } from "./STGParser";
import { KeyValuePairContext } from "./STGParser";
import { DefaultValuePairContext } from "./STGParser";
import { KeyValueContext } from "./STGParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `STGParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface STGParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `STGParser.group`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroup?: (ctx: GroupContext) => Result;

	/**
	 * Visit a parse tree produced by `STGParser.delimiters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDelimiters?: (ctx: DelimitersContext) => Result;

	/**
	 * Visit a parse tree produced by `STGParser.imports`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImports?: (ctx: ImportsContext) => Result;

	/**
	 * Visit a parse tree produced by `STGParser.template`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTemplate?: (ctx: TemplateContext) => Result;

	/**
	 * Visit a parse tree produced by `STGParser.formalArgs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFormalArgs?: (ctx: FormalArgsContext) => Result;

	/**
	 * Visit a parse tree produced by `STGParser.formalArg`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFormalArg?: (ctx: FormalArgContext) => Result;

	/**
	 * Visit a parse tree produced by `STGParser.dict`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDict?: (ctx: DictContext) => Result;

	/**
	 * Visit a parse tree produced by `STGParser.dictPairs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDictPairs?: (ctx: DictPairsContext) => Result;

	/**
	 * Visit a parse tree produced by `STGParser.keyValuePair`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKeyValuePair?: (ctx: KeyValuePairContext) => Result;

	/**
	 * Visit a parse tree produced by `STGParser.defaultValuePair`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefaultValuePair?: (ctx: DefaultValuePairContext) => Result;

	/**
	 * Visit a parse tree produced by `STGParser.keyValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKeyValue?: (ctx: KeyValueContext) => Result;
}

