// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/mumath/mumath.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ProgramContext } from "./mumathParser";
import { AssignmentContext } from "./mumathParser";
import { ListContext } from "./mumathParser";
import { FunctionDefinitionContext } from "./mumathParser";
import { ActualParameterContext } from "./mumathParser";
import { StatmentsContext } from "./mumathParser";
import { BlockContext } from "./mumathParser";
import { LoopContext } from "./mumathParser";
import { WhenContext } from "./mumathParser";
import { ExpressionContext } from "./mumathParser";
import { RelationalOperatorContext } from "./mumathParser";
import { SimpleExpressionContext } from "./mumathParser";
import { AddingOperatorContext } from "./mumathParser";
import { TermContext } from "./mumathParser";
import { MultiplyingOperatorContext } from "./mumathParser";
import { FactorContext } from "./mumathParser";
import { ConstantContext } from "./mumathParser";
import { FunctionDesignatorContext } from "./mumathParser";
import { EqualContext } from "./mumathParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `mumathParser`.
 */
export interface mumathListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `mumathParser.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `mumathParser.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;

	/**
	 * Enter a parse tree produced by `mumathParser.assignment`.
	 * @param ctx the parse tree
	 */
	enterAssignment?: (ctx: AssignmentContext) => void;
	/**
	 * Exit a parse tree produced by `mumathParser.assignment`.
	 * @param ctx the parse tree
	 */
	exitAssignment?: (ctx: AssignmentContext) => void;

	/**
	 * Enter a parse tree produced by `mumathParser.list`.
	 * @param ctx the parse tree
	 */
	enterList?: (ctx: ListContext) => void;
	/**
	 * Exit a parse tree produced by `mumathParser.list`.
	 * @param ctx the parse tree
	 */
	exitList?: (ctx: ListContext) => void;

	/**
	 * Enter a parse tree produced by `mumathParser.functionDefinition`.
	 * @param ctx the parse tree
	 */
	enterFunctionDefinition?: (ctx: FunctionDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `mumathParser.functionDefinition`.
	 * @param ctx the parse tree
	 */
	exitFunctionDefinition?: (ctx: FunctionDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `mumathParser.actualParameter`.
	 * @param ctx the parse tree
	 */
	enterActualParameter?: (ctx: ActualParameterContext) => void;
	/**
	 * Exit a parse tree produced by `mumathParser.actualParameter`.
	 * @param ctx the parse tree
	 */
	exitActualParameter?: (ctx: ActualParameterContext) => void;

	/**
	 * Enter a parse tree produced by `mumathParser.statments`.
	 * @param ctx the parse tree
	 */
	enterStatments?: (ctx: StatmentsContext) => void;
	/**
	 * Exit a parse tree produced by `mumathParser.statments`.
	 * @param ctx the parse tree
	 */
	exitStatments?: (ctx: StatmentsContext) => void;

	/**
	 * Enter a parse tree produced by `mumathParser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `mumathParser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;

	/**
	 * Enter a parse tree produced by `mumathParser.loop`.
	 * @param ctx the parse tree
	 */
	enterLoop?: (ctx: LoopContext) => void;
	/**
	 * Exit a parse tree produced by `mumathParser.loop`.
	 * @param ctx the parse tree
	 */
	exitLoop?: (ctx: LoopContext) => void;

	/**
	 * Enter a parse tree produced by `mumathParser.when`.
	 * @param ctx the parse tree
	 */
	enterWhen?: (ctx: WhenContext) => void;
	/**
	 * Exit a parse tree produced by `mumathParser.when`.
	 * @param ctx the parse tree
	 */
	exitWhen?: (ctx: WhenContext) => void;

	/**
	 * Enter a parse tree produced by `mumathParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `mumathParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `mumathParser.relationalOperator`.
	 * @param ctx the parse tree
	 */
	enterRelationalOperator?: (ctx: RelationalOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `mumathParser.relationalOperator`.
	 * @param ctx the parse tree
	 */
	exitRelationalOperator?: (ctx: RelationalOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `mumathParser.simpleExpression`.
	 * @param ctx the parse tree
	 */
	enterSimpleExpression?: (ctx: SimpleExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `mumathParser.simpleExpression`.
	 * @param ctx the parse tree
	 */
	exitSimpleExpression?: (ctx: SimpleExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `mumathParser.addingOperator`.
	 * @param ctx the parse tree
	 */
	enterAddingOperator?: (ctx: AddingOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `mumathParser.addingOperator`.
	 * @param ctx the parse tree
	 */
	exitAddingOperator?: (ctx: AddingOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `mumathParser.term`.
	 * @param ctx the parse tree
	 */
	enterTerm?: (ctx: TermContext) => void;
	/**
	 * Exit a parse tree produced by `mumathParser.term`.
	 * @param ctx the parse tree
	 */
	exitTerm?: (ctx: TermContext) => void;

	/**
	 * Enter a parse tree produced by `mumathParser.multiplyingOperator`.
	 * @param ctx the parse tree
	 */
	enterMultiplyingOperator?: (ctx: MultiplyingOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `mumathParser.multiplyingOperator`.
	 * @param ctx the parse tree
	 */
	exitMultiplyingOperator?: (ctx: MultiplyingOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `mumathParser.factor`.
	 * @param ctx the parse tree
	 */
	enterFactor?: (ctx: FactorContext) => void;
	/**
	 * Exit a parse tree produced by `mumathParser.factor`.
	 * @param ctx the parse tree
	 */
	exitFactor?: (ctx: FactorContext) => void;

	/**
	 * Enter a parse tree produced by `mumathParser.constant`.
	 * @param ctx the parse tree
	 */
	enterConstant?: (ctx: ConstantContext) => void;
	/**
	 * Exit a parse tree produced by `mumathParser.constant`.
	 * @param ctx the parse tree
	 */
	exitConstant?: (ctx: ConstantContext) => void;

	/**
	 * Enter a parse tree produced by `mumathParser.functionDesignator`.
	 * @param ctx the parse tree
	 */
	enterFunctionDesignator?: (ctx: FunctionDesignatorContext) => void;
	/**
	 * Exit a parse tree produced by `mumathParser.functionDesignator`.
	 * @param ctx the parse tree
	 */
	exitFunctionDesignator?: (ctx: FunctionDesignatorContext) => void;

	/**
	 * Enter a parse tree produced by `mumathParser.equal`.
	 * @param ctx the parse tree
	 */
	enterEqual?: (ctx: EqualContext) => void;
	/**
	 * Exit a parse tree produced by `mumathParser.equal`.
	 * @param ctx the parse tree
	 */
	exitEqual?: (ctx: EqualContext) => void;
}

