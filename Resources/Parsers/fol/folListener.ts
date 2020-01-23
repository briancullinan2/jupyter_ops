// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/fol/fol.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ConditionContext } from "./folParser";
import { FormulaContext } from "./folParser";
import { TermContext } from "./folParser";
import { Bin_connectiveContext } from "./folParser";
import { VariableContext } from "./folParser";
import { Pred_constantContext } from "./folParser";
import { Ind_constantContext } from "./folParser";
import { Func_constantContext } from "./folParser";
import { SeparatorContext } from "./folParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `folParser`.
 */
export interface folListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `folParser.condition`.
	 * @param ctx the parse tree
	 */
	enterCondition?: (ctx: ConditionContext) => void;
	/**
	 * Exit a parse tree produced by `folParser.condition`.
	 * @param ctx the parse tree
	 */
	exitCondition?: (ctx: ConditionContext) => void;

	/**
	 * Enter a parse tree produced by `folParser.formula`.
	 * @param ctx the parse tree
	 */
	enterFormula?: (ctx: FormulaContext) => void;
	/**
	 * Exit a parse tree produced by `folParser.formula`.
	 * @param ctx the parse tree
	 */
	exitFormula?: (ctx: FormulaContext) => void;

	/**
	 * Enter a parse tree produced by `folParser.term`.
	 * @param ctx the parse tree
	 */
	enterTerm?: (ctx: TermContext) => void;
	/**
	 * Exit a parse tree produced by `folParser.term`.
	 * @param ctx the parse tree
	 */
	exitTerm?: (ctx: TermContext) => void;

	/**
	 * Enter a parse tree produced by `folParser.bin_connective`.
	 * @param ctx the parse tree
	 */
	enterBin_connective?: (ctx: Bin_connectiveContext) => void;
	/**
	 * Exit a parse tree produced by `folParser.bin_connective`.
	 * @param ctx the parse tree
	 */
	exitBin_connective?: (ctx: Bin_connectiveContext) => void;

	/**
	 * Enter a parse tree produced by `folParser.variable`.
	 * @param ctx the parse tree
	 */
	enterVariable?: (ctx: VariableContext) => void;
	/**
	 * Exit a parse tree produced by `folParser.variable`.
	 * @param ctx the parse tree
	 */
	exitVariable?: (ctx: VariableContext) => void;

	/**
	 * Enter a parse tree produced by `folParser.pred_constant`.
	 * @param ctx the parse tree
	 */
	enterPred_constant?: (ctx: Pred_constantContext) => void;
	/**
	 * Exit a parse tree produced by `folParser.pred_constant`.
	 * @param ctx the parse tree
	 */
	exitPred_constant?: (ctx: Pred_constantContext) => void;

	/**
	 * Enter a parse tree produced by `folParser.ind_constant`.
	 * @param ctx the parse tree
	 */
	enterInd_constant?: (ctx: Ind_constantContext) => void;
	/**
	 * Exit a parse tree produced by `folParser.ind_constant`.
	 * @param ctx the parse tree
	 */
	exitInd_constant?: (ctx: Ind_constantContext) => void;

	/**
	 * Enter a parse tree produced by `folParser.func_constant`.
	 * @param ctx the parse tree
	 */
	enterFunc_constant?: (ctx: Func_constantContext) => void;
	/**
	 * Exit a parse tree produced by `folParser.func_constant`.
	 * @param ctx the parse tree
	 */
	exitFunc_constant?: (ctx: Func_constantContext) => void;

	/**
	 * Enter a parse tree produced by `folParser.separator`.
	 * @param ctx the parse tree
	 */
	enterSeparator?: (ctx: SeparatorContext) => void;
	/**
	 * Exit a parse tree produced by `folParser.separator`.
	 * @param ctx the parse tree
	 */
	exitSeparator?: (ctx: SeparatorContext) => void;
}

