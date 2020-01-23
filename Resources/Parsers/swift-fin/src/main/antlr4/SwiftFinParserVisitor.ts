// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/swift-fin/src/main/antlr4/SwiftFinParser.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { MessagesContext } from "./SwiftFinParser";
import { MessageContext } from "./SwiftFinParser";
import { Block1Context } from "./SwiftFinParser";
import { Block2Context } from "./SwiftFinParser";
import { Block3Context } from "./SwiftFinParser";
import { Block4Context } from "./SwiftFinParser";
import { Block4ItemContext } from "./SwiftFinParser";
import { Block4FieldContext } from "./SwiftFinParser";
import { Block4LineContext } from "./SwiftFinParser";
import { Block5Context } from "./SwiftFinParser";
import { ValueContext } from "./SwiftFinParser";
import { MapContext } from "./SwiftFinParser";
import { KeyValueContext } from "./SwiftFinParser";
import { MKeyContext } from "./SwiftFinParser";
import { MValueContext } from "./SwiftFinParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `SwiftFinParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface SwiftFinParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `SwiftFinParser.messages`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMessages?: (ctx: MessagesContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftFinParser.message`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMessage?: (ctx: MessageContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftFinParser.block1`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock1?: (ctx: Block1Context) => Result;

	/**
	 * Visit a parse tree produced by `SwiftFinParser.block2`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock2?: (ctx: Block2Context) => Result;

	/**
	 * Visit a parse tree produced by `SwiftFinParser.block3`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock3?: (ctx: Block3Context) => Result;

	/**
	 * Visit a parse tree produced by `SwiftFinParser.block4`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock4?: (ctx: Block4Context) => Result;

	/**
	 * Visit a parse tree produced by `SwiftFinParser.block4Item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock4Item?: (ctx: Block4ItemContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftFinParser.block4Field`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock4Field?: (ctx: Block4FieldContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftFinParser.block4Line`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock4Line?: (ctx: Block4LineContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftFinParser.block5`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock5?: (ctx: Block5Context) => Result;

	/**
	 * Visit a parse tree produced by `SwiftFinParser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValue?: (ctx: ValueContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftFinParser.map`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMap?: (ctx: MapContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftFinParser.keyValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKeyValue?: (ctx: KeyValueContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftFinParser.mKey`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMKey?: (ctx: MKeyContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftFinParser.mValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMValue?: (ctx: MValueContext) => Result;
}

