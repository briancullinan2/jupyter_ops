// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/tinybasic/tinybasic.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ProgramContext } from "./tinybasicParser";
import { LineContext } from "./tinybasicParser";
import { StatementContext } from "./tinybasicParser";
import { ExprlistContext } from "./tinybasicParser";
import { VarlistContext } from "./tinybasicParser";
import { ExpressionContext } from "./tinybasicParser";
import { TermContext } from "./tinybasicParser";
import { FactorContext } from "./tinybasicParser";
import { VaraContext } from "./tinybasicParser";
import { NumberContext } from "./tinybasicParser";
import { RelopContext } from "./tinybasicParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `tinybasicParser`.
 */
export interface tinybasicListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `tinybasicParser.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `tinybasicParser.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;

	/**
	 * Enter a parse tree produced by `tinybasicParser.line`.
	 * @param ctx the parse tree
	 */
	enterLine?: (ctx: LineContext) => void;
	/**
	 * Exit a parse tree produced by `tinybasicParser.line`.
	 * @param ctx the parse tree
	 */
	exitLine?: (ctx: LineContext) => void;

	/**
	 * Enter a parse tree produced by `tinybasicParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `tinybasicParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `tinybasicParser.exprlist`.
	 * @param ctx the parse tree
	 */
	enterExprlist?: (ctx: ExprlistContext) => void;
	/**
	 * Exit a parse tree produced by `tinybasicParser.exprlist`.
	 * @param ctx the parse tree
	 */
	exitExprlist?: (ctx: ExprlistContext) => void;

	/**
	 * Enter a parse tree produced by `tinybasicParser.varlist`.
	 * @param ctx the parse tree
	 */
	enterVarlist?: (ctx: VarlistContext) => void;
	/**
	 * Exit a parse tree produced by `tinybasicParser.varlist`.
	 * @param ctx the parse tree
	 */
	exitVarlist?: (ctx: VarlistContext) => void;

	/**
	 * Enter a parse tree produced by `tinybasicParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `tinybasicParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `tinybasicParser.term`.
	 * @param ctx the parse tree
	 */
	enterTerm?: (ctx: TermContext) => void;
	/**
	 * Exit a parse tree produced by `tinybasicParser.term`.
	 * @param ctx the parse tree
	 */
	exitTerm?: (ctx: TermContext) => void;

	/**
	 * Enter a parse tree produced by `tinybasicParser.factor`.
	 * @param ctx the parse tree
	 */
	enterFactor?: (ctx: FactorContext) => void;
	/**
	 * Exit a parse tree produced by `tinybasicParser.factor`.
	 * @param ctx the parse tree
	 */
	exitFactor?: (ctx: FactorContext) => void;

	/**
	 * Enter a parse tree produced by `tinybasicParser.vara`.
	 * @param ctx the parse tree
	 */
	enterVara?: (ctx: VaraContext) => void;
	/**
	 * Exit a parse tree produced by `tinybasicParser.vara`.
	 * @param ctx the parse tree
	 */
	exitVara?: (ctx: VaraContext) => void;

	/**
	 * Enter a parse tree produced by `tinybasicParser.number`.
	 * @param ctx the parse tree
	 */
	enterNumber?: (ctx: NumberContext) => void;
	/**
	 * Exit a parse tree produced by `tinybasicParser.number`.
	 * @param ctx the parse tree
	 */
	exitNumber?: (ctx: NumberContext) => void;

	/**
	 * Enter a parse tree produced by `tinybasicParser.relop`.
	 * @param ctx the parse tree
	 */
	enterRelop?: (ctx: RelopContext) => void;
	/**
	 * Exit a parse tree produced by `tinybasicParser.relop`.
	 * @param ctx the parse tree
	 */
	exitRelop?: (ctx: RelopContext) => void;
}

