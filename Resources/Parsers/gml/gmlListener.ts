// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/gml/gml.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `gmlParser`.
 */
export interface gmlListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `gmlParser.graph`.
	 * @param ctx the parse tree
	 */
	enterGraph?: (ctx: GraphContext) => void;
	/**
	 * Exit a parse tree produced by `gmlParser.graph`.
	 * @param ctx the parse tree
	 */
	exitGraph?: (ctx: GraphContext) => void;

	/**
	 * Enter a parse tree produced by `gmlParser.list`.
	 * @param ctx the parse tree
	 */
	enterList?: (ctx: ListContext) => void;
	/**
	 * Exit a parse tree produced by `gmlParser.list`.
	 * @param ctx the parse tree
	 */
	exitList?: (ctx: ListContext) => void;

	/**
	 * Enter a parse tree produced by `gmlParser.kv`.
	 * @param ctx the parse tree
	 */
	enterKv?: (ctx: KvContext) => void;
	/**
	 * Exit a parse tree produced by `gmlParser.kv`.
	 * @param ctx the parse tree
	 */
	exitKv?: (ctx: KvContext) => void;

	/**
	 * Enter a parse tree produced by `gmlParser.value`.
	 * @param ctx the parse tree
	 */
	enterValue?: (ctx: ValueContext) => void;
	/**
	 * Exit a parse tree produced by `gmlParser.value`.
	 * @param ctx the parse tree
	 */
	exitValue?: (ctx: ValueContext) => void;

	/**
	 * Enter a parse tree produced by `gmlParser.key`.
	 * @param ctx the parse tree
	 */
	enterKey?: (ctx: KeyContext) => void;
	/**
	 * Exit a parse tree produced by `gmlParser.key`.
	 * @param ctx the parse tree
	 */
	exitKey?: (ctx: KeyContext) => void;

	/**
	 * Enter a parse tree produced by `gmlParser.integer`.
	 * @param ctx the parse tree
	 */
	enterInteger?: (ctx: IntegerContext) => void;
	/**
	 * Exit a parse tree produced by `gmlParser.integer`.
	 * @param ctx the parse tree
	 */
	exitInteger?: (ctx: IntegerContext) => void;

	/**
	 * Enter a parse tree produced by `gmlParser.realnum`.
	 * @param ctx the parse tree
	 */
	enterRealnum?: (ctx: RealnumContext) => void;
	/**
	 * Exit a parse tree produced by `gmlParser.realnum`.
	 * @param ctx the parse tree
	 */
	exitRealnum?: (ctx: RealnumContext) => void;

	/**
	 * Enter a parse tree produced by `gmlParser.str`.
	 * @param ctx the parse tree
	 */
	enterStr?: (ctx: StrContext) => void;
	/**
	 * Exit a parse tree produced by `gmlParser.str`.
	 * @param ctx the parse tree
	 */
	exitStr?: (ctx: StrContext) => void;

	/**
	 * Enter a parse tree produced by `gmlParser.stringliteral`.
	 * @param ctx the parse tree
	 */
	enterStringliteral?: (ctx: StringliteralContext) => void;
	/**
	 * Exit a parse tree produced by `gmlParser.stringliteral`.
	 * @param ctx the parse tree
	 */
	exitStringliteral?: (ctx: StringliteralContext) => void;
}

