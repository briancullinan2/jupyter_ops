// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/mumath/mumath.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `mumathParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface mumathVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `mumathParser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;

	/**
	 * Visit a parse tree produced by `mumathParser.assignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignment?: (ctx: AssignmentContext) => Result;

	/**
	 * Visit a parse tree produced by `mumathParser.list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitList?: (ctx: ListContext) => Result;

	/**
	 * Visit a parse tree produced by `mumathParser.functionDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionDefinition?: (ctx: FunctionDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `mumathParser.actualParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitActualParameter?: (ctx: ActualParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `mumathParser.statments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatments?: (ctx: StatmentsContext) => Result;

	/**
	 * Visit a parse tree produced by `mumathParser.block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock?: (ctx: BlockContext) => Result;

	/**
	 * Visit a parse tree produced by `mumathParser.loop`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLoop?: (ctx: LoopContext) => Result;

	/**
	 * Visit a parse tree produced by `mumathParser.when`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhen?: (ctx: WhenContext) => Result;

	/**
	 * Visit a parse tree produced by `mumathParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `mumathParser.relationalOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelationalOperator?: (ctx: RelationalOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `mumathParser.simpleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimpleExpression?: (ctx: SimpleExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `mumathParser.addingOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddingOperator?: (ctx: AddingOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `mumathParser.term`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTerm?: (ctx: TermContext) => Result;

	/**
	 * Visit a parse tree produced by `mumathParser.multiplyingOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplyingOperator?: (ctx: MultiplyingOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `mumathParser.factor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFactor?: (ctx: FactorContext) => Result;

	/**
	 * Visit a parse tree produced by `mumathParser.constant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstant?: (ctx: ConstantContext) => Result;

	/**
	 * Visit a parse tree produced by `mumathParser.functionDesignator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionDesignator?: (ctx: FunctionDesignatorContext) => Result;

	/**
	 * Visit a parse tree produced by `mumathParser.equal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEqual?: (ctx: EqualContext) => Result;
}

