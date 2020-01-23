// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/swift-fin/src/main/antlr4/SwiftFinParser.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `SwiftFinParser`.
 */
export interface SwiftFinParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `SwiftFinParser.messages`.
	 * @param ctx the parse tree
	 */
	enterMessages?: (ctx: MessagesContext) => void;
	/**
	 * Exit a parse tree produced by `SwiftFinParser.messages`.
	 * @param ctx the parse tree
	 */
	exitMessages?: (ctx: MessagesContext) => void;

	/**
	 * Enter a parse tree produced by `SwiftFinParser.message`.
	 * @param ctx the parse tree
	 */
	enterMessage?: (ctx: MessageContext) => void;
	/**
	 * Exit a parse tree produced by `SwiftFinParser.message`.
	 * @param ctx the parse tree
	 */
	exitMessage?: (ctx: MessageContext) => void;

	/**
	 * Enter a parse tree produced by `SwiftFinParser.block1`.
	 * @param ctx the parse tree
	 */
	enterBlock1?: (ctx: Block1Context) => void;
	/**
	 * Exit a parse tree produced by `SwiftFinParser.block1`.
	 * @param ctx the parse tree
	 */
	exitBlock1?: (ctx: Block1Context) => void;

	/**
	 * Enter a parse tree produced by `SwiftFinParser.block2`.
	 * @param ctx the parse tree
	 */
	enterBlock2?: (ctx: Block2Context) => void;
	/**
	 * Exit a parse tree produced by `SwiftFinParser.block2`.
	 * @param ctx the parse tree
	 */
	exitBlock2?: (ctx: Block2Context) => void;

	/**
	 * Enter a parse tree produced by `SwiftFinParser.block3`.
	 * @param ctx the parse tree
	 */
	enterBlock3?: (ctx: Block3Context) => void;
	/**
	 * Exit a parse tree produced by `SwiftFinParser.block3`.
	 * @param ctx the parse tree
	 */
	exitBlock3?: (ctx: Block3Context) => void;

	/**
	 * Enter a parse tree produced by `SwiftFinParser.block4`.
	 * @param ctx the parse tree
	 */
	enterBlock4?: (ctx: Block4Context) => void;
	/**
	 * Exit a parse tree produced by `SwiftFinParser.block4`.
	 * @param ctx the parse tree
	 */
	exitBlock4?: (ctx: Block4Context) => void;

	/**
	 * Enter a parse tree produced by `SwiftFinParser.block4Item`.
	 * @param ctx the parse tree
	 */
	enterBlock4Item?: (ctx: Block4ItemContext) => void;
	/**
	 * Exit a parse tree produced by `SwiftFinParser.block4Item`.
	 * @param ctx the parse tree
	 */
	exitBlock4Item?: (ctx: Block4ItemContext) => void;

	/**
	 * Enter a parse tree produced by `SwiftFinParser.block4Field`.
	 * @param ctx the parse tree
	 */
	enterBlock4Field?: (ctx: Block4FieldContext) => void;
	/**
	 * Exit a parse tree produced by `SwiftFinParser.block4Field`.
	 * @param ctx the parse tree
	 */
	exitBlock4Field?: (ctx: Block4FieldContext) => void;

	/**
	 * Enter a parse tree produced by `SwiftFinParser.block4Line`.
	 * @param ctx the parse tree
	 */
	enterBlock4Line?: (ctx: Block4LineContext) => void;
	/**
	 * Exit a parse tree produced by `SwiftFinParser.block4Line`.
	 * @param ctx the parse tree
	 */
	exitBlock4Line?: (ctx: Block4LineContext) => void;

	/**
	 * Enter a parse tree produced by `SwiftFinParser.block5`.
	 * @param ctx the parse tree
	 */
	enterBlock5?: (ctx: Block5Context) => void;
	/**
	 * Exit a parse tree produced by `SwiftFinParser.block5`.
	 * @param ctx the parse tree
	 */
	exitBlock5?: (ctx: Block5Context) => void;

	/**
	 * Enter a parse tree produced by `SwiftFinParser.value`.
	 * @param ctx the parse tree
	 */
	enterValue?: (ctx: ValueContext) => void;
	/**
	 * Exit a parse tree produced by `SwiftFinParser.value`.
	 * @param ctx the parse tree
	 */
	exitValue?: (ctx: ValueContext) => void;

	/**
	 * Enter a parse tree produced by `SwiftFinParser.map`.
	 * @param ctx the parse tree
	 */
	enterMap?: (ctx: MapContext) => void;
	/**
	 * Exit a parse tree produced by `SwiftFinParser.map`.
	 * @param ctx the parse tree
	 */
	exitMap?: (ctx: MapContext) => void;

	/**
	 * Enter a parse tree produced by `SwiftFinParser.keyValue`.
	 * @param ctx the parse tree
	 */
	enterKeyValue?: (ctx: KeyValueContext) => void;
	/**
	 * Exit a parse tree produced by `SwiftFinParser.keyValue`.
	 * @param ctx the parse tree
	 */
	exitKeyValue?: (ctx: KeyValueContext) => void;

	/**
	 * Enter a parse tree produced by `SwiftFinParser.mKey`.
	 * @param ctx the parse tree
	 */
	enterMKey?: (ctx: MKeyContext) => void;
	/**
	 * Exit a parse tree produced by `SwiftFinParser.mKey`.
	 * @param ctx the parse tree
	 */
	exitMKey?: (ctx: MKeyContext) => void;

	/**
	 * Enter a parse tree produced by `SwiftFinParser.mValue`.
	 * @param ctx the parse tree
	 */
	enterMValue?: (ctx: MValueContext) => void;
	/**
	 * Exit a parse tree produced by `SwiftFinParser.mValue`.
	 * @param ctx the parse tree
	 */
	exitMValue?: (ctx: MValueContext) => void;
}

