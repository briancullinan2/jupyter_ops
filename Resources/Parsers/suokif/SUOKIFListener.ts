// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/suokif/SUOKIF.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { Top_levelContext } from "./SUOKIFParser";
import { TermContext } from "./SUOKIFParser";
import { ArgumentContext } from "./SUOKIFParser";
import { FuntermContext } from "./SUOKIFParser";
import { SentenceContext } from "./SUOKIFParser";
import { EquationContext } from "./SUOKIFParser";
import { RelsentContext } from "./SUOKIFParser";
import { LogsentContext } from "./SUOKIFParser";
import { QuantsentContext } from "./SUOKIFParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `SUOKIFParser`.
 */
export interface SUOKIFListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `SUOKIFParser.top_level`.
	 * @param ctx the parse tree
	 */
	enterTop_level?: (ctx: Top_levelContext) => void;
	/**
	 * Exit a parse tree produced by `SUOKIFParser.top_level`.
	 * @param ctx the parse tree
	 */
	exitTop_level?: (ctx: Top_levelContext) => void;

	/**
	 * Enter a parse tree produced by `SUOKIFParser.term`.
	 * @param ctx the parse tree
	 */
	enterTerm?: (ctx: TermContext) => void;
	/**
	 * Exit a parse tree produced by `SUOKIFParser.term`.
	 * @param ctx the parse tree
	 */
	exitTerm?: (ctx: TermContext) => void;

	/**
	 * Enter a parse tree produced by `SUOKIFParser.argument`.
	 * @param ctx the parse tree
	 */
	enterArgument?: (ctx: ArgumentContext) => void;
	/**
	 * Exit a parse tree produced by `SUOKIFParser.argument`.
	 * @param ctx the parse tree
	 */
	exitArgument?: (ctx: ArgumentContext) => void;

	/**
	 * Enter a parse tree produced by `SUOKIFParser.funterm`.
	 * @param ctx the parse tree
	 */
	enterFunterm?: (ctx: FuntermContext) => void;
	/**
	 * Exit a parse tree produced by `SUOKIFParser.funterm`.
	 * @param ctx the parse tree
	 */
	exitFunterm?: (ctx: FuntermContext) => void;

	/**
	 * Enter a parse tree produced by `SUOKIFParser.sentence`.
	 * @param ctx the parse tree
	 */
	enterSentence?: (ctx: SentenceContext) => void;
	/**
	 * Exit a parse tree produced by `SUOKIFParser.sentence`.
	 * @param ctx the parse tree
	 */
	exitSentence?: (ctx: SentenceContext) => void;

	/**
	 * Enter a parse tree produced by `SUOKIFParser.equation`.
	 * @param ctx the parse tree
	 */
	enterEquation?: (ctx: EquationContext) => void;
	/**
	 * Exit a parse tree produced by `SUOKIFParser.equation`.
	 * @param ctx the parse tree
	 */
	exitEquation?: (ctx: EquationContext) => void;

	/**
	 * Enter a parse tree produced by `SUOKIFParser.relsent`.
	 * @param ctx the parse tree
	 */
	enterRelsent?: (ctx: RelsentContext) => void;
	/**
	 * Exit a parse tree produced by `SUOKIFParser.relsent`.
	 * @param ctx the parse tree
	 */
	exitRelsent?: (ctx: RelsentContext) => void;

	/**
	 * Enter a parse tree produced by `SUOKIFParser.logsent`.
	 * @param ctx the parse tree
	 */
	enterLogsent?: (ctx: LogsentContext) => void;
	/**
	 * Exit a parse tree produced by `SUOKIFParser.logsent`.
	 * @param ctx the parse tree
	 */
	exitLogsent?: (ctx: LogsentContext) => void;

	/**
	 * Enter a parse tree produced by `SUOKIFParser.quantsent`.
	 * @param ctx the parse tree
	 */
	enterQuantsent?: (ctx: QuantsentContext) => void;
	/**
	 * Exit a parse tree produced by `SUOKIFParser.quantsent`.
	 * @param ctx the parse tree
	 */
	exitQuantsent?: (ctx: QuantsentContext) => void;
}

