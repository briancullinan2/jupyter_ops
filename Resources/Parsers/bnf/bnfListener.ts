// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/bnf/bnf.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { RulelistContext } from "./bnfParser";
import { Rule_Context } from "./bnfParser";
import { LhsContext } from "./bnfParser";
import { RhsContext } from "./bnfParser";
import { AlternativesContext } from "./bnfParser";
import { AlternativeContext } from "./bnfParser";
import { ElementContext } from "./bnfParser";
import { OptionalContext } from "./bnfParser";
import { ZeroormoreContext } from "./bnfParser";
import { OneormoreContext } from "./bnfParser";
import { TextContext } from "./bnfParser";
import { IdContext } from "./bnfParser";
import { RuleidContext } from "./bnfParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `bnfParser`.
 */
export interface bnfListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `bnfParser.rulelist`.
	 * @param ctx the parse tree
	 */
	enterRulelist?: (ctx: RulelistContext) => void;
	/**
	 * Exit a parse tree produced by `bnfParser.rulelist`.
	 * @param ctx the parse tree
	 */
	exitRulelist?: (ctx: RulelistContext) => void;

	/**
	 * Enter a parse tree produced by `bnfParser.rule_`.
	 * @param ctx the parse tree
	 */
	enterRule_?: (ctx: Rule_Context) => void;
	/**
	 * Exit a parse tree produced by `bnfParser.rule_`.
	 * @param ctx the parse tree
	 */
	exitRule_?: (ctx: Rule_Context) => void;

	/**
	 * Enter a parse tree produced by `bnfParser.lhs`.
	 * @param ctx the parse tree
	 */
	enterLhs?: (ctx: LhsContext) => void;
	/**
	 * Exit a parse tree produced by `bnfParser.lhs`.
	 * @param ctx the parse tree
	 */
	exitLhs?: (ctx: LhsContext) => void;

	/**
	 * Enter a parse tree produced by `bnfParser.rhs`.
	 * @param ctx the parse tree
	 */
	enterRhs?: (ctx: RhsContext) => void;
	/**
	 * Exit a parse tree produced by `bnfParser.rhs`.
	 * @param ctx the parse tree
	 */
	exitRhs?: (ctx: RhsContext) => void;

	/**
	 * Enter a parse tree produced by `bnfParser.alternatives`.
	 * @param ctx the parse tree
	 */
	enterAlternatives?: (ctx: AlternativesContext) => void;
	/**
	 * Exit a parse tree produced by `bnfParser.alternatives`.
	 * @param ctx the parse tree
	 */
	exitAlternatives?: (ctx: AlternativesContext) => void;

	/**
	 * Enter a parse tree produced by `bnfParser.alternative`.
	 * @param ctx the parse tree
	 */
	enterAlternative?: (ctx: AlternativeContext) => void;
	/**
	 * Exit a parse tree produced by `bnfParser.alternative`.
	 * @param ctx the parse tree
	 */
	exitAlternative?: (ctx: AlternativeContext) => void;

	/**
	 * Enter a parse tree produced by `bnfParser.element`.
	 * @param ctx the parse tree
	 */
	enterElement?: (ctx: ElementContext) => void;
	/**
	 * Exit a parse tree produced by `bnfParser.element`.
	 * @param ctx the parse tree
	 */
	exitElement?: (ctx: ElementContext) => void;

	/**
	 * Enter a parse tree produced by `bnfParser.optional`.
	 * @param ctx the parse tree
	 */
	enterOptional?: (ctx: OptionalContext) => void;
	/**
	 * Exit a parse tree produced by `bnfParser.optional`.
	 * @param ctx the parse tree
	 */
	exitOptional?: (ctx: OptionalContext) => void;

	/**
	 * Enter a parse tree produced by `bnfParser.zeroormore`.
	 * @param ctx the parse tree
	 */
	enterZeroormore?: (ctx: ZeroormoreContext) => void;
	/**
	 * Exit a parse tree produced by `bnfParser.zeroormore`.
	 * @param ctx the parse tree
	 */
	exitZeroormore?: (ctx: ZeroormoreContext) => void;

	/**
	 * Enter a parse tree produced by `bnfParser.oneormore`.
	 * @param ctx the parse tree
	 */
	enterOneormore?: (ctx: OneormoreContext) => void;
	/**
	 * Exit a parse tree produced by `bnfParser.oneormore`.
	 * @param ctx the parse tree
	 */
	exitOneormore?: (ctx: OneormoreContext) => void;

	/**
	 * Enter a parse tree produced by `bnfParser.text`.
	 * @param ctx the parse tree
	 */
	enterText?: (ctx: TextContext) => void;
	/**
	 * Exit a parse tree produced by `bnfParser.text`.
	 * @param ctx the parse tree
	 */
	exitText?: (ctx: TextContext) => void;

	/**
	 * Enter a parse tree produced by `bnfParser.id`.
	 * @param ctx the parse tree
	 */
	enterId?: (ctx: IdContext) => void;
	/**
	 * Exit a parse tree produced by `bnfParser.id`.
	 * @param ctx the parse tree
	 */
	exitId?: (ctx: IdContext) => void;

	/**
	 * Enter a parse tree produced by `bnfParser.ruleid`.
	 * @param ctx the parse tree
	 */
	enterRuleid?: (ctx: RuleidContext) => void;
	/**
	 * Exit a parse tree produced by `bnfParser.ruleid`.
	 * @param ctx the parse tree
	 */
	exitRuleid?: (ctx: RuleidContext) => void;
}

