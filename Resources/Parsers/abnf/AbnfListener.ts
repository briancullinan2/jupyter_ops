// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/abnf/Abnf.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { RulelistContext } from "./AbnfParser";
import { Rule_Context } from "./AbnfParser";
import { ElementsContext } from "./AbnfParser";
import { AlternationContext } from "./AbnfParser";
import { ConcatenationContext } from "./AbnfParser";
import { RepetitionContext } from "./AbnfParser";
import { RepeatContext } from "./AbnfParser";
import { ElementContext } from "./AbnfParser";
import { GroupContext } from "./AbnfParser";
import { OptionContext } from "./AbnfParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `AbnfParser`.
 */
export interface AbnfListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `AbnfParser.rulelist`.
	 * @param ctx the parse tree
	 */
	enterRulelist?: (ctx: RulelistContext) => void;
	/**
	 * Exit a parse tree produced by `AbnfParser.rulelist`.
	 * @param ctx the parse tree
	 */
	exitRulelist?: (ctx: RulelistContext) => void;

	/**
	 * Enter a parse tree produced by `AbnfParser.rule_`.
	 * @param ctx the parse tree
	 */
	enterRule_?: (ctx: Rule_Context) => void;
	/**
	 * Exit a parse tree produced by `AbnfParser.rule_`.
	 * @param ctx the parse tree
	 */
	exitRule_?: (ctx: Rule_Context) => void;

	/**
	 * Enter a parse tree produced by `AbnfParser.elements`.
	 * @param ctx the parse tree
	 */
	enterElements?: (ctx: ElementsContext) => void;
	/**
	 * Exit a parse tree produced by `AbnfParser.elements`.
	 * @param ctx the parse tree
	 */
	exitElements?: (ctx: ElementsContext) => void;

	/**
	 * Enter a parse tree produced by `AbnfParser.alternation`.
	 * @param ctx the parse tree
	 */
	enterAlternation?: (ctx: AlternationContext) => void;
	/**
	 * Exit a parse tree produced by `AbnfParser.alternation`.
	 * @param ctx the parse tree
	 */
	exitAlternation?: (ctx: AlternationContext) => void;

	/**
	 * Enter a parse tree produced by `AbnfParser.concatenation`.
	 * @param ctx the parse tree
	 */
	enterConcatenation?: (ctx: ConcatenationContext) => void;
	/**
	 * Exit a parse tree produced by `AbnfParser.concatenation`.
	 * @param ctx the parse tree
	 */
	exitConcatenation?: (ctx: ConcatenationContext) => void;

	/**
	 * Enter a parse tree produced by `AbnfParser.repetition`.
	 * @param ctx the parse tree
	 */
	enterRepetition?: (ctx: RepetitionContext) => void;
	/**
	 * Exit a parse tree produced by `AbnfParser.repetition`.
	 * @param ctx the parse tree
	 */
	exitRepetition?: (ctx: RepetitionContext) => void;

	/**
	 * Enter a parse tree produced by `AbnfParser.repeat`.
	 * @param ctx the parse tree
	 */
	enterRepeat?: (ctx: RepeatContext) => void;
	/**
	 * Exit a parse tree produced by `AbnfParser.repeat`.
	 * @param ctx the parse tree
	 */
	exitRepeat?: (ctx: RepeatContext) => void;

	/**
	 * Enter a parse tree produced by `AbnfParser.element`.
	 * @param ctx the parse tree
	 */
	enterElement?: (ctx: ElementContext) => void;
	/**
	 * Exit a parse tree produced by `AbnfParser.element`.
	 * @param ctx the parse tree
	 */
	exitElement?: (ctx: ElementContext) => void;

	/**
	 * Enter a parse tree produced by `AbnfParser.group`.
	 * @param ctx the parse tree
	 */
	enterGroup?: (ctx: GroupContext) => void;
	/**
	 * Exit a parse tree produced by `AbnfParser.group`.
	 * @param ctx the parse tree
	 */
	exitGroup?: (ctx: GroupContext) => void;

	/**
	 * Enter a parse tree produced by `AbnfParser.option`.
	 * @param ctx the parse tree
	 */
	enterOption?: (ctx: OptionContext) => void;
	/**
	 * Exit a parse tree produced by `AbnfParser.option`.
	 * @param ctx the parse tree
	 */
	exitOption?: (ctx: OptionContext) => void;
}

