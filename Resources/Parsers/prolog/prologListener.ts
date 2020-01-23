// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/prolog/prolog.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { VariableContext } from "./prologParser";
import { Braced_termContext } from "./prologParser";
import { Integer_termContext } from "./prologParser";
import { FloatContext } from "./prologParser";
import { Compound_termContext } from "./prologParser";
import { Binary_operatorContext } from "./prologParser";
import { Unary_operatorContext } from "./prologParser";
import { List_termContext } from "./prologParser";
import { Curly_bracketed_termContext } from "./prologParser";
import { Atom_termContext } from "./prologParser";
import { Empty_listContext } from "./prologParser";
import { Empty_bracesContext } from "./prologParser";
import { NameContext } from "./prologParser";
import { GraphicContext } from "./prologParser";
import { Quoted_stringContext } from "./prologParser";
import { Dq_stringContext } from "./prologParser";
import { Backq_stringContext } from "./prologParser";
import { SemicolonContext } from "./prologParser";
import { CutContext } from "./prologParser";
import { P_textContext } from "./prologParser";
import { DirectiveContext } from "./prologParser";
import { ClauseContext } from "./prologParser";
import { TermlistContext } from "./prologParser";
import { TermContext } from "./prologParser";
import { OperatorContext } from "./prologParser";
import { AtomContext } from "./prologParser";
import { IntegerContext } from "./prologParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `prologParser`.
 */
export interface prologListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `variable`
	 * labeled alternative in `prologParser.term`.
	 * @param ctx the parse tree
	 */
	enterVariable?: (ctx: VariableContext) => void;
	/**
	 * Exit a parse tree produced by the `variable`
	 * labeled alternative in `prologParser.term`.
	 * @param ctx the parse tree
	 */
	exitVariable?: (ctx: VariableContext) => void;

	/**
	 * Enter a parse tree produced by the `braced_term`
	 * labeled alternative in `prologParser.term`.
	 * @param ctx the parse tree
	 */
	enterBraced_term?: (ctx: Braced_termContext) => void;
	/**
	 * Exit a parse tree produced by the `braced_term`
	 * labeled alternative in `prologParser.term`.
	 * @param ctx the parse tree
	 */
	exitBraced_term?: (ctx: Braced_termContext) => void;

	/**
	 * Enter a parse tree produced by the `integer_term`
	 * labeled alternative in `prologParser.term`.
	 * @param ctx the parse tree
	 */
	enterInteger_term?: (ctx: Integer_termContext) => void;
	/**
	 * Exit a parse tree produced by the `integer_term`
	 * labeled alternative in `prologParser.term`.
	 * @param ctx the parse tree
	 */
	exitInteger_term?: (ctx: Integer_termContext) => void;

	/**
	 * Enter a parse tree produced by the `float`
	 * labeled alternative in `prologParser.term`.
	 * @param ctx the parse tree
	 */
	enterFloat?: (ctx: FloatContext) => void;
	/**
	 * Exit a parse tree produced by the `float`
	 * labeled alternative in `prologParser.term`.
	 * @param ctx the parse tree
	 */
	exitFloat?: (ctx: FloatContext) => void;

	/**
	 * Enter a parse tree produced by the `compound_term`
	 * labeled alternative in `prologParser.term`.
	 * @param ctx the parse tree
	 */
	enterCompound_term?: (ctx: Compound_termContext) => void;
	/**
	 * Exit a parse tree produced by the `compound_term`
	 * labeled alternative in `prologParser.term`.
	 * @param ctx the parse tree
	 */
	exitCompound_term?: (ctx: Compound_termContext) => void;

	/**
	 * Enter a parse tree produced by the `binary_operator`
	 * labeled alternative in `prologParser.term`.
	 * @param ctx the parse tree
	 */
	enterBinary_operator?: (ctx: Binary_operatorContext) => void;
	/**
	 * Exit a parse tree produced by the `binary_operator`
	 * labeled alternative in `prologParser.term`.
	 * @param ctx the parse tree
	 */
	exitBinary_operator?: (ctx: Binary_operatorContext) => void;

	/**
	 * Enter a parse tree produced by the `unary_operator`
	 * labeled alternative in `prologParser.term`.
	 * @param ctx the parse tree
	 */
	enterUnary_operator?: (ctx: Unary_operatorContext) => void;
	/**
	 * Exit a parse tree produced by the `unary_operator`
	 * labeled alternative in `prologParser.term`.
	 * @param ctx the parse tree
	 */
	exitUnary_operator?: (ctx: Unary_operatorContext) => void;

	/**
	 * Enter a parse tree produced by the `list_term`
	 * labeled alternative in `prologParser.term`.
	 * @param ctx the parse tree
	 */
	enterList_term?: (ctx: List_termContext) => void;
	/**
	 * Exit a parse tree produced by the `list_term`
	 * labeled alternative in `prologParser.term`.
	 * @param ctx the parse tree
	 */
	exitList_term?: (ctx: List_termContext) => void;

	/**
	 * Enter a parse tree produced by the `curly_bracketed_term`
	 * labeled alternative in `prologParser.term`.
	 * @param ctx the parse tree
	 */
	enterCurly_bracketed_term?: (ctx: Curly_bracketed_termContext) => void;
	/**
	 * Exit a parse tree produced by the `curly_bracketed_term`
	 * labeled alternative in `prologParser.term`.
	 * @param ctx the parse tree
	 */
	exitCurly_bracketed_term?: (ctx: Curly_bracketed_termContext) => void;

	/**
	 * Enter a parse tree produced by the `atom_term`
	 * labeled alternative in `prologParser.term`.
	 * @param ctx the parse tree
	 */
	enterAtom_term?: (ctx: Atom_termContext) => void;
	/**
	 * Exit a parse tree produced by the `atom_term`
	 * labeled alternative in `prologParser.term`.
	 * @param ctx the parse tree
	 */
	exitAtom_term?: (ctx: Atom_termContext) => void;

	/**
	 * Enter a parse tree produced by the `empty_list`
	 * labeled alternative in `prologParser.atom`.
	 * @param ctx the parse tree
	 */
	enterEmpty_list?: (ctx: Empty_listContext) => void;
	/**
	 * Exit a parse tree produced by the `empty_list`
	 * labeled alternative in `prologParser.atom`.
	 * @param ctx the parse tree
	 */
	exitEmpty_list?: (ctx: Empty_listContext) => void;

	/**
	 * Enter a parse tree produced by the `empty_braces`
	 * labeled alternative in `prologParser.atom`.
	 * @param ctx the parse tree
	 */
	enterEmpty_braces?: (ctx: Empty_bracesContext) => void;
	/**
	 * Exit a parse tree produced by the `empty_braces`
	 * labeled alternative in `prologParser.atom`.
	 * @param ctx the parse tree
	 */
	exitEmpty_braces?: (ctx: Empty_bracesContext) => void;

	/**
	 * Enter a parse tree produced by the `name`
	 * labeled alternative in `prologParser.atom`.
	 * @param ctx the parse tree
	 */
	enterName?: (ctx: NameContext) => void;
	/**
	 * Exit a parse tree produced by the `name`
	 * labeled alternative in `prologParser.atom`.
	 * @param ctx the parse tree
	 */
	exitName?: (ctx: NameContext) => void;

	/**
	 * Enter a parse tree produced by the `graphic`
	 * labeled alternative in `prologParser.atom`.
	 * @param ctx the parse tree
	 */
	enterGraphic?: (ctx: GraphicContext) => void;
	/**
	 * Exit a parse tree produced by the `graphic`
	 * labeled alternative in `prologParser.atom`.
	 * @param ctx the parse tree
	 */
	exitGraphic?: (ctx: GraphicContext) => void;

	/**
	 * Enter a parse tree produced by the `quoted_string`
	 * labeled alternative in `prologParser.atom`.
	 * @param ctx the parse tree
	 */
	enterQuoted_string?: (ctx: Quoted_stringContext) => void;
	/**
	 * Exit a parse tree produced by the `quoted_string`
	 * labeled alternative in `prologParser.atom`.
	 * @param ctx the parse tree
	 */
	exitQuoted_string?: (ctx: Quoted_stringContext) => void;

	/**
	 * Enter a parse tree produced by the `dq_string`
	 * labeled alternative in `prologParser.atom`.
	 * @param ctx the parse tree
	 */
	enterDq_string?: (ctx: Dq_stringContext) => void;
	/**
	 * Exit a parse tree produced by the `dq_string`
	 * labeled alternative in `prologParser.atom`.
	 * @param ctx the parse tree
	 */
	exitDq_string?: (ctx: Dq_stringContext) => void;

	/**
	 * Enter a parse tree produced by the `backq_string`
	 * labeled alternative in `prologParser.atom`.
	 * @param ctx the parse tree
	 */
	enterBackq_string?: (ctx: Backq_stringContext) => void;
	/**
	 * Exit a parse tree produced by the `backq_string`
	 * labeled alternative in `prologParser.atom`.
	 * @param ctx the parse tree
	 */
	exitBackq_string?: (ctx: Backq_stringContext) => void;

	/**
	 * Enter a parse tree produced by the `semicolon`
	 * labeled alternative in `prologParser.atom`.
	 * @param ctx the parse tree
	 */
	enterSemicolon?: (ctx: SemicolonContext) => void;
	/**
	 * Exit a parse tree produced by the `semicolon`
	 * labeled alternative in `prologParser.atom`.
	 * @param ctx the parse tree
	 */
	exitSemicolon?: (ctx: SemicolonContext) => void;

	/**
	 * Enter a parse tree produced by the `cut`
	 * labeled alternative in `prologParser.atom`.
	 * @param ctx the parse tree
	 */
	enterCut?: (ctx: CutContext) => void;
	/**
	 * Exit a parse tree produced by the `cut`
	 * labeled alternative in `prologParser.atom`.
	 * @param ctx the parse tree
	 */
	exitCut?: (ctx: CutContext) => void;

	/**
	 * Enter a parse tree produced by `prologParser.p_text`.
	 * @param ctx the parse tree
	 */
	enterP_text?: (ctx: P_textContext) => void;
	/**
	 * Exit a parse tree produced by `prologParser.p_text`.
	 * @param ctx the parse tree
	 */
	exitP_text?: (ctx: P_textContext) => void;

	/**
	 * Enter a parse tree produced by `prologParser.directive`.
	 * @param ctx the parse tree
	 */
	enterDirective?: (ctx: DirectiveContext) => void;
	/**
	 * Exit a parse tree produced by `prologParser.directive`.
	 * @param ctx the parse tree
	 */
	exitDirective?: (ctx: DirectiveContext) => void;

	/**
	 * Enter a parse tree produced by `prologParser.clause`.
	 * @param ctx the parse tree
	 */
	enterClause?: (ctx: ClauseContext) => void;
	/**
	 * Exit a parse tree produced by `prologParser.clause`.
	 * @param ctx the parse tree
	 */
	exitClause?: (ctx: ClauseContext) => void;

	/**
	 * Enter a parse tree produced by `prologParser.termlist`.
	 * @param ctx the parse tree
	 */
	enterTermlist?: (ctx: TermlistContext) => void;
	/**
	 * Exit a parse tree produced by `prologParser.termlist`.
	 * @param ctx the parse tree
	 */
	exitTermlist?: (ctx: TermlistContext) => void;

	/**
	 * Enter a parse tree produced by `prologParser.term`.
	 * @param ctx the parse tree
	 */
	enterTerm?: (ctx: TermContext) => void;
	/**
	 * Exit a parse tree produced by `prologParser.term`.
	 * @param ctx the parse tree
	 */
	exitTerm?: (ctx: TermContext) => void;

	/**
	 * Enter a parse tree produced by `prologParser.operator`.
	 * @param ctx the parse tree
	 */
	enterOperator?: (ctx: OperatorContext) => void;
	/**
	 * Exit a parse tree produced by `prologParser.operator`.
	 * @param ctx the parse tree
	 */
	exitOperator?: (ctx: OperatorContext) => void;

	/**
	 * Enter a parse tree produced by `prologParser.atom`.
	 * @param ctx the parse tree
	 */
	enterAtom?: (ctx: AtomContext) => void;
	/**
	 * Exit a parse tree produced by `prologParser.atom`.
	 * @param ctx the parse tree
	 */
	exitAtom?: (ctx: AtomContext) => void;

	/**
	 * Enter a parse tree produced by `prologParser.integer`.
	 * @param ctx the parse tree
	 */
	enterInteger?: (ctx: IntegerContext) => void;
	/**
	 * Exit a parse tree produced by `prologParser.integer`.
	 * @param ctx the parse tree
	 */
	exitInteger?: (ctx: IntegerContext) => void;
}

