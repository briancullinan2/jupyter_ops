// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/stellaris/stellaris.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ContentContext } from "./stellarisParser";
import { ExprContext } from "./stellarisParser";
import { KeyvalContext } from "./stellarisParser";
import { KeyContext } from "./stellarisParser";
import { ValContext } from "./stellarisParser";
import { AttribContext } from "./stellarisParser";
import { AccessorContext } from "./stellarisParser";
import { GroupContext } from "./stellarisParser";
import { IdContext } from "./stellarisParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `stellarisParser`.
 */
export interface stellarisListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `stellarisParser.content`.
	 * @param ctx the parse tree
	 */
	enterContent?: (ctx: ContentContext) => void;
	/**
	 * Exit a parse tree produced by `stellarisParser.content`.
	 * @param ctx the parse tree
	 */
	exitContent?: (ctx: ContentContext) => void;

	/**
	 * Enter a parse tree produced by `stellarisParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExpr?: (ctx: ExprContext) => void;
	/**
	 * Exit a parse tree produced by `stellarisParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExpr?: (ctx: ExprContext) => void;

	/**
	 * Enter a parse tree produced by `stellarisParser.keyval`.
	 * @param ctx the parse tree
	 */
	enterKeyval?: (ctx: KeyvalContext) => void;
	/**
	 * Exit a parse tree produced by `stellarisParser.keyval`.
	 * @param ctx the parse tree
	 */
	exitKeyval?: (ctx: KeyvalContext) => void;

	/**
	 * Enter a parse tree produced by `stellarisParser.key`.
	 * @param ctx the parse tree
	 */
	enterKey?: (ctx: KeyContext) => void;
	/**
	 * Exit a parse tree produced by `stellarisParser.key`.
	 * @param ctx the parse tree
	 */
	exitKey?: (ctx: KeyContext) => void;

	/**
	 * Enter a parse tree produced by `stellarisParser.val`.
	 * @param ctx the parse tree
	 */
	enterVal?: (ctx: ValContext) => void;
	/**
	 * Exit a parse tree produced by `stellarisParser.val`.
	 * @param ctx the parse tree
	 */
	exitVal?: (ctx: ValContext) => void;

	/**
	 * Enter a parse tree produced by `stellarisParser.attrib`.
	 * @param ctx the parse tree
	 */
	enterAttrib?: (ctx: AttribContext) => void;
	/**
	 * Exit a parse tree produced by `stellarisParser.attrib`.
	 * @param ctx the parse tree
	 */
	exitAttrib?: (ctx: AttribContext) => void;

	/**
	 * Enter a parse tree produced by `stellarisParser.accessor`.
	 * @param ctx the parse tree
	 */
	enterAccessor?: (ctx: AccessorContext) => void;
	/**
	 * Exit a parse tree produced by `stellarisParser.accessor`.
	 * @param ctx the parse tree
	 */
	exitAccessor?: (ctx: AccessorContext) => void;

	/**
	 * Enter a parse tree produced by `stellarisParser.group`.
	 * @param ctx the parse tree
	 */
	enterGroup?: (ctx: GroupContext) => void;
	/**
	 * Exit a parse tree produced by `stellarisParser.group`.
	 * @param ctx the parse tree
	 */
	exitGroup?: (ctx: GroupContext) => void;

	/**
	 * Enter a parse tree produced by `stellarisParser.id`.
	 * @param ctx the parse tree
	 */
	enterId?: (ctx: IdContext) => void;
	/**
	 * Exit a parse tree produced by `stellarisParser.id`.
	 * @param ctx the parse tree
	 */
	exitId?: (ctx: IdContext) => void;
}

