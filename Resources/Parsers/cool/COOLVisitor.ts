// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/cool/COOL.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { MethodCallContext } from "./COOLParser";
import { OwnMethodCallContext } from "./COOLParser";
import { IfContext } from "./COOLParser";
import { WhileContext } from "./COOLParser";
import { BlockContext } from "./COOLParser";
import { LetInContext } from "./COOLParser";
import { CaseContext } from "./COOLParser";
import { NewContext } from "./COOLParser";
import { NegativeContext } from "./COOLParser";
import { IsvoidContext } from "./COOLParser";
import { MultiplyContext } from "./COOLParser";
import { DivisionContext } from "./COOLParser";
import { AddContext } from "./COOLParser";
import { MinusContext } from "./COOLParser";
import { LessThanContext } from "./COOLParser";
import { LessEqualContext } from "./COOLParser";
import { EqualContext } from "./COOLParser";
import { BoolNotContext } from "./COOLParser";
import { ParenthesesContext } from "./COOLParser";
import { IdContext } from "./COOLParser";
import { IntContext } from "./COOLParser";
import { StringContext } from "./COOLParser";
import { TrueContext } from "./COOLParser";
import { FalseContext } from "./COOLParser";
import { AssignmentContext } from "./COOLParser";
import { MethodContext } from "./COOLParser";
import { PropertyContext } from "./COOLParser";
import { ClassesContext } from "./COOLParser";
import { EofContext } from "./COOLParser";
import { ProgramContext } from "./COOLParser";
import { ProgramBlocksContext } from "./COOLParser";
import { ClassDefineContext } from "./COOLParser";
import { FeatureContext } from "./COOLParser";
import { FormalContext } from "./COOLParser";
import { ExpressionContext } from "./COOLParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `COOLParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface COOLVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `methodCall`
	 * labeled alternative in `COOLParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodCall?: (ctx: MethodCallContext) => Result;

	/**
	 * Visit a parse tree produced by the `ownMethodCall`
	 * labeled alternative in `COOLParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOwnMethodCall?: (ctx: OwnMethodCallContext) => Result;

	/**
	 * Visit a parse tree produced by the `if`
	 * labeled alternative in `COOLParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIf?: (ctx: IfContext) => Result;

	/**
	 * Visit a parse tree produced by the `while`
	 * labeled alternative in `COOLParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhile?: (ctx: WhileContext) => Result;

	/**
	 * Visit a parse tree produced by the `block`
	 * labeled alternative in `COOLParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock?: (ctx: BlockContext) => Result;

	/**
	 * Visit a parse tree produced by the `letIn`
	 * labeled alternative in `COOLParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLetIn?: (ctx: LetInContext) => Result;

	/**
	 * Visit a parse tree produced by the `case`
	 * labeled alternative in `COOLParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCase?: (ctx: CaseContext) => Result;

	/**
	 * Visit a parse tree produced by the `new`
	 * labeled alternative in `COOLParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNew?: (ctx: NewContext) => Result;

	/**
	 * Visit a parse tree produced by the `negative`
	 * labeled alternative in `COOLParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNegative?: (ctx: NegativeContext) => Result;

	/**
	 * Visit a parse tree produced by the `isvoid`
	 * labeled alternative in `COOLParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIsvoid?: (ctx: IsvoidContext) => Result;

	/**
	 * Visit a parse tree produced by the `multiply`
	 * labeled alternative in `COOLParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiply?: (ctx: MultiplyContext) => Result;

	/**
	 * Visit a parse tree produced by the `division`
	 * labeled alternative in `COOLParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDivision?: (ctx: DivisionContext) => Result;

	/**
	 * Visit a parse tree produced by the `add`
	 * labeled alternative in `COOLParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdd?: (ctx: AddContext) => Result;

	/**
	 * Visit a parse tree produced by the `minus`
	 * labeled alternative in `COOLParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMinus?: (ctx: MinusContext) => Result;

	/**
	 * Visit a parse tree produced by the `lessThan`
	 * labeled alternative in `COOLParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLessThan?: (ctx: LessThanContext) => Result;

	/**
	 * Visit a parse tree produced by the `lessEqual`
	 * labeled alternative in `COOLParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLessEqual?: (ctx: LessEqualContext) => Result;

	/**
	 * Visit a parse tree produced by the `equal`
	 * labeled alternative in `COOLParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEqual?: (ctx: EqualContext) => Result;

	/**
	 * Visit a parse tree produced by the `boolNot`
	 * labeled alternative in `COOLParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBoolNot?: (ctx: BoolNotContext) => Result;

	/**
	 * Visit a parse tree produced by the `parentheses`
	 * labeled alternative in `COOLParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParentheses?: (ctx: ParenthesesContext) => Result;

	/**
	 * Visit a parse tree produced by the `id`
	 * labeled alternative in `COOLParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitId?: (ctx: IdContext) => Result;

	/**
	 * Visit a parse tree produced by the `int`
	 * labeled alternative in `COOLParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInt?: (ctx: IntContext) => Result;

	/**
	 * Visit a parse tree produced by the `string`
	 * labeled alternative in `COOLParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitString?: (ctx: StringContext) => Result;

	/**
	 * Visit a parse tree produced by the `true`
	 * labeled alternative in `COOLParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTrue?: (ctx: TrueContext) => Result;

	/**
	 * Visit a parse tree produced by the `false`
	 * labeled alternative in `COOLParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFalse?: (ctx: FalseContext) => Result;

	/**
	 * Visit a parse tree produced by the `assignment`
	 * labeled alternative in `COOLParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignment?: (ctx: AssignmentContext) => Result;

	/**
	 * Visit a parse tree produced by the `method`
	 * labeled alternative in `COOLParser.feature`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethod?: (ctx: MethodContext) => Result;

	/**
	 * Visit a parse tree produced by the `property`
	 * labeled alternative in `COOLParser.feature`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProperty?: (ctx: PropertyContext) => Result;

	/**
	 * Visit a parse tree produced by the `classes`
	 * labeled alternative in `COOLParser.programBlocks`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClasses?: (ctx: ClassesContext) => Result;

	/**
	 * Visit a parse tree produced by the `eof`
	 * labeled alternative in `COOLParser.programBlocks`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEof?: (ctx: EofContext) => Result;

	/**
	 * Visit a parse tree produced by `COOLParser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;

	/**
	 * Visit a parse tree produced by `COOLParser.programBlocks`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgramBlocks?: (ctx: ProgramBlocksContext) => Result;

	/**
	 * Visit a parse tree produced by `COOLParser.classDefine`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassDefine?: (ctx: ClassDefineContext) => Result;

	/**
	 * Visit a parse tree produced by `COOLParser.feature`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFeature?: (ctx: FeatureContext) => Result;

	/**
	 * Visit a parse tree produced by `COOLParser.formal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFormal?: (ctx: FormalContext) => Result;

	/**
	 * Visit a parse tree produced by `COOLParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;
}

