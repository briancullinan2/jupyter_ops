// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/tnt/tnt.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { EquationContext } from "./tntParser";
import { AtomContext } from "./tntParser";
import { NumberContext } from "./tntParser";
import { VariableContext } from "./tntParser";
import { ExpressionContext } from "./tntParser";
import { ForeveryContext } from "./tntParser";
import { ExistsContext } from "./tntParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `tntParser`.
 */
export interface tntListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `tntParser.equation`.
	 * @param ctx the parse tree
	 */
	enterEquation?: (ctx: EquationContext) => void;
	/**
	 * Exit a parse tree produced by `tntParser.equation`.
	 * @param ctx the parse tree
	 */
	exitEquation?: (ctx: EquationContext) => void;

	/**
	 * Enter a parse tree produced by `tntParser.atom`.
	 * @param ctx the parse tree
	 */
	enterAtom?: (ctx: AtomContext) => void;
	/**
	 * Exit a parse tree produced by `tntParser.atom`.
	 * @param ctx the parse tree
	 */
	exitAtom?: (ctx: AtomContext) => void;

	/**
	 * Enter a parse tree produced by `tntParser.number`.
	 * @param ctx the parse tree
	 */
	enterNumber?: (ctx: NumberContext) => void;
	/**
	 * Exit a parse tree produced by `tntParser.number`.
	 * @param ctx the parse tree
	 */
	exitNumber?: (ctx: NumberContext) => void;

	/**
	 * Enter a parse tree produced by `tntParser.variable`.
	 * @param ctx the parse tree
	 */
	enterVariable?: (ctx: VariableContext) => void;
	/**
	 * Exit a parse tree produced by `tntParser.variable`.
	 * @param ctx the parse tree
	 */
	exitVariable?: (ctx: VariableContext) => void;

	/**
	 * Enter a parse tree produced by `tntParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `tntParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `tntParser.forevery`.
	 * @param ctx the parse tree
	 */
	enterForevery?: (ctx: ForeveryContext) => void;
	/**
	 * Exit a parse tree produced by `tntParser.forevery`.
	 * @param ctx the parse tree
	 */
	exitForevery?: (ctx: ForeveryContext) => void;

	/**
	 * Enter a parse tree produced by `tntParser.exists`.
	 * @param ctx the parse tree
	 */
	enterExists?: (ctx: ExistsContext) => void;
	/**
	 * Exit a parse tree produced by `tntParser.exists`.
	 * @param ctx the parse tree
	 */
	exitExists?: (ctx: ExistsContext) => void;
}

