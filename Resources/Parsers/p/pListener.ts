// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/p/p.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ProgContext } from "./pParser";
import { SymbolContext } from "./pParser";
import { IterateContext } from "./pParser";
import { AtomContext } from "./pParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `pParser`.
 */
export interface pListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `pParser.prog`.
	 * @param ctx the parse tree
	 */
	enterProg?: (ctx: ProgContext) => void;
	/**
	 * Exit a parse tree produced by `pParser.prog`.
	 * @param ctx the parse tree
	 */
	exitProg?: (ctx: ProgContext) => void;

	/**
	 * Enter a parse tree produced by `pParser.symbol`.
	 * @param ctx the parse tree
	 */
	enterSymbol?: (ctx: SymbolContext) => void;
	/**
	 * Exit a parse tree produced by `pParser.symbol`.
	 * @param ctx the parse tree
	 */
	exitSymbol?: (ctx: SymbolContext) => void;

	/**
	 * Enter a parse tree produced by `pParser.iterate`.
	 * @param ctx the parse tree
	 */
	enterIterate?: (ctx: IterateContext) => void;
	/**
	 * Exit a parse tree produced by `pParser.iterate`.
	 * @param ctx the parse tree
	 */
	exitIterate?: (ctx: IterateContext) => void;

	/**
	 * Enter a parse tree produced by `pParser.atom`.
	 * @param ctx the parse tree
	 */
	enterAtom?: (ctx: AtomContext) => void;
	/**
	 * Exit a parse tree produced by `pParser.atom`.
	 * @param ctx the parse tree
	 */
	exitAtom?: (ctx: AtomContext) => void;
}

