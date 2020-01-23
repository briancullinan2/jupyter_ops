// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/r/RFilter.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { StreamContext } from "./RFilter";
import { EatContext } from "./RFilter";
import { ElemContext } from "./RFilter";
import { AtomContext } from "./RFilter";
import { OpContext } from "./RFilter";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `RFilter`.
 */
export interface RFilterListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `RFilter.stream`.
	 * @param ctx the parse tree
	 */
	enterStream?: (ctx: StreamContext) => void;
	/**
	 * Exit a parse tree produced by `RFilter.stream`.
	 * @param ctx the parse tree
	 */
	exitStream?: (ctx: StreamContext) => void;

	/**
	 * Enter a parse tree produced by `RFilter.eat`.
	 * @param ctx the parse tree
	 */
	enterEat?: (ctx: EatContext) => void;
	/**
	 * Exit a parse tree produced by `RFilter.eat`.
	 * @param ctx the parse tree
	 */
	exitEat?: (ctx: EatContext) => void;

	/**
	 * Enter a parse tree produced by `RFilter.elem`.
	 * @param ctx the parse tree
	 */
	enterElem?: (ctx: ElemContext) => void;
	/**
	 * Exit a parse tree produced by `RFilter.elem`.
	 * @param ctx the parse tree
	 */
	exitElem?: (ctx: ElemContext) => void;

	/**
	 * Enter a parse tree produced by `RFilter.atom`.
	 * @param ctx the parse tree
	 */
	enterAtom?: (ctx: AtomContext) => void;
	/**
	 * Exit a parse tree produced by `RFilter.atom`.
	 * @param ctx the parse tree
	 */
	exitAtom?: (ctx: AtomContext) => void;

	/**
	 * Enter a parse tree produced by `RFilter.op`.
	 * @param ctx the parse tree
	 */
	enterOp?: (ctx: OpContext) => void;
	/**
	 * Exit a parse tree produced by `RFilter.op`.
	 * @param ctx the parse tree
	 */
	exitOp?: (ctx: OpContext) => void;
}

