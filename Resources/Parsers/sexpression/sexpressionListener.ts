// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/sexpression/sexpression.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { SexprContext } from "./sexpressionParser";
import { ItemContext } from "./sexpressionParser";
import { ListContext } from "./sexpressionParser";
import { AtomContext } from "./sexpressionParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `sexpressionParser`.
 */
export interface sexpressionListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `sexpressionParser.sexpr`.
	 * @param ctx the parse tree
	 */
	enterSexpr?: (ctx: SexprContext) => void;
	/**
	 * Exit a parse tree produced by `sexpressionParser.sexpr`.
	 * @param ctx the parse tree
	 */
	exitSexpr?: (ctx: SexprContext) => void;

	/**
	 * Enter a parse tree produced by `sexpressionParser.item`.
	 * @param ctx the parse tree
	 */
	enterItem?: (ctx: ItemContext) => void;
	/**
	 * Exit a parse tree produced by `sexpressionParser.item`.
	 * @param ctx the parse tree
	 */
	exitItem?: (ctx: ItemContext) => void;

	/**
	 * Enter a parse tree produced by `sexpressionParser.list`.
	 * @param ctx the parse tree
	 */
	enterList?: (ctx: ListContext) => void;
	/**
	 * Exit a parse tree produced by `sexpressionParser.list`.
	 * @param ctx the parse tree
	 */
	exitList?: (ctx: ListContext) => void;

	/**
	 * Enter a parse tree produced by `sexpressionParser.atom`.
	 * @param ctx the parse tree
	 */
	enterAtom?: (ctx: AtomContext) => void;
	/**
	 * Exit a parse tree produced by `sexpressionParser.atom`.
	 * @param ctx the parse tree
	 */
	exitAtom?: (ctx: AtomContext) => void;
}

