// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/calculator/calculator.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { EquationContext } from "./calculatorParser";
import { ExpressionContext } from "./calculatorParser";
import { MultiplyingExpressionContext } from "./calculatorParser";
import { PowExpressionContext } from "./calculatorParser";
import { SignedAtomContext } from "./calculatorParser";
import { AtomContext } from "./calculatorParser";
import { ScientificContext } from "./calculatorParser";
import { ConstantContext } from "./calculatorParser";
import { VariableContext } from "./calculatorParser";
import { FuncContext } from "./calculatorParser";
import { FuncnameContext } from "./calculatorParser";
import { RelopContext } from "./calculatorParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `calculatorParser`.
 */
export interface calculatorListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `calculatorParser.equation`.
	 * @param ctx the parse tree
	 */
	enterEquation?: (ctx: EquationContext) => void;
	/**
	 * Exit a parse tree produced by `calculatorParser.equation`.
	 * @param ctx the parse tree
	 */
	exitEquation?: (ctx: EquationContext) => void;

	/**
	 * Enter a parse tree produced by `calculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `calculatorParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `calculatorParser.multiplyingExpression`.
	 * @param ctx the parse tree
	 */
	enterMultiplyingExpression?: (ctx: MultiplyingExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `calculatorParser.multiplyingExpression`.
	 * @param ctx the parse tree
	 */
	exitMultiplyingExpression?: (ctx: MultiplyingExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `calculatorParser.powExpression`.
	 * @param ctx the parse tree
	 */
	enterPowExpression?: (ctx: PowExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `calculatorParser.powExpression`.
	 * @param ctx the parse tree
	 */
	exitPowExpression?: (ctx: PowExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `calculatorParser.signedAtom`.
	 * @param ctx the parse tree
	 */
	enterSignedAtom?: (ctx: SignedAtomContext) => void;
	/**
	 * Exit a parse tree produced by `calculatorParser.signedAtom`.
	 * @param ctx the parse tree
	 */
	exitSignedAtom?: (ctx: SignedAtomContext) => void;

	/**
	 * Enter a parse tree produced by `calculatorParser.atom`.
	 * @param ctx the parse tree
	 */
	enterAtom?: (ctx: AtomContext) => void;
	/**
	 * Exit a parse tree produced by `calculatorParser.atom`.
	 * @param ctx the parse tree
	 */
	exitAtom?: (ctx: AtomContext) => void;

	/**
	 * Enter a parse tree produced by `calculatorParser.scientific`.
	 * @param ctx the parse tree
	 */
	enterScientific?: (ctx: ScientificContext) => void;
	/**
	 * Exit a parse tree produced by `calculatorParser.scientific`.
	 * @param ctx the parse tree
	 */
	exitScientific?: (ctx: ScientificContext) => void;

	/**
	 * Enter a parse tree produced by `calculatorParser.constant`.
	 * @param ctx the parse tree
	 */
	enterConstant?: (ctx: ConstantContext) => void;
	/**
	 * Exit a parse tree produced by `calculatorParser.constant`.
	 * @param ctx the parse tree
	 */
	exitConstant?: (ctx: ConstantContext) => void;

	/**
	 * Enter a parse tree produced by `calculatorParser.variable`.
	 * @param ctx the parse tree
	 */
	enterVariable?: (ctx: VariableContext) => void;
	/**
	 * Exit a parse tree produced by `calculatorParser.variable`.
	 * @param ctx the parse tree
	 */
	exitVariable?: (ctx: VariableContext) => void;

	/**
	 * Enter a parse tree produced by `calculatorParser.func`.
	 * @param ctx the parse tree
	 */
	enterFunc?: (ctx: FuncContext) => void;
	/**
	 * Exit a parse tree produced by `calculatorParser.func`.
	 * @param ctx the parse tree
	 */
	exitFunc?: (ctx: FuncContext) => void;

	/**
	 * Enter a parse tree produced by `calculatorParser.funcname`.
	 * @param ctx the parse tree
	 */
	enterFuncname?: (ctx: FuncnameContext) => void;
	/**
	 * Exit a parse tree produced by `calculatorParser.funcname`.
	 * @param ctx the parse tree
	 */
	exitFuncname?: (ctx: FuncnameContext) => void;

	/**
	 * Enter a parse tree produced by `calculatorParser.relop`.
	 * @param ctx the parse tree
	 */
	enterRelop?: (ctx: RelopContext) => void;
	/**
	 * Exit a parse tree produced by `calculatorParser.relop`.
	 * @param ctx the parse tree
	 */
	exitRelop?: (ctx: RelopContext) => void;
}

