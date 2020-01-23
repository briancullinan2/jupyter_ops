// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/b/b.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ProgramContext } from "./bParser";
import { DefinitionContext } from "./bParser";
import { IvalContext } from "./bParser";
import { StatementContext } from "./bParser";
import { NullstmtContext } from "./bParser";
import { ExpressionstmtContext } from "./bParser";
import { BlockstmtContext } from "./bParser";
import { ReturnstmtContext } from "./bParser";
import { GotostmtContext } from "./bParser";
import { SwitchstmtContext } from "./bParser";
import { WhilestmtContext } from "./bParser";
import { IfstmtContext } from "./bParser";
import { CasestmtContext } from "./bParser";
import { ExternsmtContext } from "./bParser";
import { AutosmtContext } from "./bParser";
import { RvalueContext } from "./bParser";
import { TernaryContext } from "./bParser";
import { ComparisonContext } from "./bParser";
import { AssignmentContext } from "./bParser";
import { ExpressionContext } from "./bParser";
import { FunctioninvocationContext } from "./bParser";
import { FunctionparametersContext } from "./bParser";
import { AssignContext } from "./bParser";
import { IncdecContext } from "./bParser";
import { UnaryContext } from "./bParser";
import { BinaryContext } from "./bParser";
import { LvalueContext } from "./bParser";
import { ConstantContext } from "./bParser";
import { NameContext } from "./bParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `bParser`.
 */
export interface bListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `bParser.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `bParser.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;

	/**
	 * Enter a parse tree produced by `bParser.definition`.
	 * @param ctx the parse tree
	 */
	enterDefinition?: (ctx: DefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `bParser.definition`.
	 * @param ctx the parse tree
	 */
	exitDefinition?: (ctx: DefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `bParser.ival`.
	 * @param ctx the parse tree
	 */
	enterIval?: (ctx: IvalContext) => void;
	/**
	 * Exit a parse tree produced by `bParser.ival`.
	 * @param ctx the parse tree
	 */
	exitIval?: (ctx: IvalContext) => void;

	/**
	 * Enter a parse tree produced by `bParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `bParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `bParser.nullstmt`.
	 * @param ctx the parse tree
	 */
	enterNullstmt?: (ctx: NullstmtContext) => void;
	/**
	 * Exit a parse tree produced by `bParser.nullstmt`.
	 * @param ctx the parse tree
	 */
	exitNullstmt?: (ctx: NullstmtContext) => void;

	/**
	 * Enter a parse tree produced by `bParser.expressionstmt`.
	 * @param ctx the parse tree
	 */
	enterExpressionstmt?: (ctx: ExpressionstmtContext) => void;
	/**
	 * Exit a parse tree produced by `bParser.expressionstmt`.
	 * @param ctx the parse tree
	 */
	exitExpressionstmt?: (ctx: ExpressionstmtContext) => void;

	/**
	 * Enter a parse tree produced by `bParser.blockstmt`.
	 * @param ctx the parse tree
	 */
	enterBlockstmt?: (ctx: BlockstmtContext) => void;
	/**
	 * Exit a parse tree produced by `bParser.blockstmt`.
	 * @param ctx the parse tree
	 */
	exitBlockstmt?: (ctx: BlockstmtContext) => void;

	/**
	 * Enter a parse tree produced by `bParser.returnstmt`.
	 * @param ctx the parse tree
	 */
	enterReturnstmt?: (ctx: ReturnstmtContext) => void;
	/**
	 * Exit a parse tree produced by `bParser.returnstmt`.
	 * @param ctx the parse tree
	 */
	exitReturnstmt?: (ctx: ReturnstmtContext) => void;

	/**
	 * Enter a parse tree produced by `bParser.gotostmt`.
	 * @param ctx the parse tree
	 */
	enterGotostmt?: (ctx: GotostmtContext) => void;
	/**
	 * Exit a parse tree produced by `bParser.gotostmt`.
	 * @param ctx the parse tree
	 */
	exitGotostmt?: (ctx: GotostmtContext) => void;

	/**
	 * Enter a parse tree produced by `bParser.switchstmt`.
	 * @param ctx the parse tree
	 */
	enterSwitchstmt?: (ctx: SwitchstmtContext) => void;
	/**
	 * Exit a parse tree produced by `bParser.switchstmt`.
	 * @param ctx the parse tree
	 */
	exitSwitchstmt?: (ctx: SwitchstmtContext) => void;

	/**
	 * Enter a parse tree produced by `bParser.whilestmt`.
	 * @param ctx the parse tree
	 */
	enterWhilestmt?: (ctx: WhilestmtContext) => void;
	/**
	 * Exit a parse tree produced by `bParser.whilestmt`.
	 * @param ctx the parse tree
	 */
	exitWhilestmt?: (ctx: WhilestmtContext) => void;

	/**
	 * Enter a parse tree produced by `bParser.ifstmt`.
	 * @param ctx the parse tree
	 */
	enterIfstmt?: (ctx: IfstmtContext) => void;
	/**
	 * Exit a parse tree produced by `bParser.ifstmt`.
	 * @param ctx the parse tree
	 */
	exitIfstmt?: (ctx: IfstmtContext) => void;

	/**
	 * Enter a parse tree produced by `bParser.casestmt`.
	 * @param ctx the parse tree
	 */
	enterCasestmt?: (ctx: CasestmtContext) => void;
	/**
	 * Exit a parse tree produced by `bParser.casestmt`.
	 * @param ctx the parse tree
	 */
	exitCasestmt?: (ctx: CasestmtContext) => void;

	/**
	 * Enter a parse tree produced by `bParser.externsmt`.
	 * @param ctx the parse tree
	 */
	enterExternsmt?: (ctx: ExternsmtContext) => void;
	/**
	 * Exit a parse tree produced by `bParser.externsmt`.
	 * @param ctx the parse tree
	 */
	exitExternsmt?: (ctx: ExternsmtContext) => void;

	/**
	 * Enter a parse tree produced by `bParser.autosmt`.
	 * @param ctx the parse tree
	 */
	enterAutosmt?: (ctx: AutosmtContext) => void;
	/**
	 * Exit a parse tree produced by `bParser.autosmt`.
	 * @param ctx the parse tree
	 */
	exitAutosmt?: (ctx: AutosmtContext) => void;

	/**
	 * Enter a parse tree produced by `bParser.rvalue`.
	 * @param ctx the parse tree
	 */
	enterRvalue?: (ctx: RvalueContext) => void;
	/**
	 * Exit a parse tree produced by `bParser.rvalue`.
	 * @param ctx the parse tree
	 */
	exitRvalue?: (ctx: RvalueContext) => void;

	/**
	 * Enter a parse tree produced by `bParser.ternary`.
	 * @param ctx the parse tree
	 */
	enterTernary?: (ctx: TernaryContext) => void;
	/**
	 * Exit a parse tree produced by `bParser.ternary`.
	 * @param ctx the parse tree
	 */
	exitTernary?: (ctx: TernaryContext) => void;

	/**
	 * Enter a parse tree produced by `bParser.comparison`.
	 * @param ctx the parse tree
	 */
	enterComparison?: (ctx: ComparisonContext) => void;
	/**
	 * Exit a parse tree produced by `bParser.comparison`.
	 * @param ctx the parse tree
	 */
	exitComparison?: (ctx: ComparisonContext) => void;

	/**
	 * Enter a parse tree produced by `bParser.assignment`.
	 * @param ctx the parse tree
	 */
	enterAssignment?: (ctx: AssignmentContext) => void;
	/**
	 * Exit a parse tree produced by `bParser.assignment`.
	 * @param ctx the parse tree
	 */
	exitAssignment?: (ctx: AssignmentContext) => void;

	/**
	 * Enter a parse tree produced by `bParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `bParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `bParser.functioninvocation`.
	 * @param ctx the parse tree
	 */
	enterFunctioninvocation?: (ctx: FunctioninvocationContext) => void;
	/**
	 * Exit a parse tree produced by `bParser.functioninvocation`.
	 * @param ctx the parse tree
	 */
	exitFunctioninvocation?: (ctx: FunctioninvocationContext) => void;

	/**
	 * Enter a parse tree produced by `bParser.functionparameters`.
	 * @param ctx the parse tree
	 */
	enterFunctionparameters?: (ctx: FunctionparametersContext) => void;
	/**
	 * Exit a parse tree produced by `bParser.functionparameters`.
	 * @param ctx the parse tree
	 */
	exitFunctionparameters?: (ctx: FunctionparametersContext) => void;

	/**
	 * Enter a parse tree produced by `bParser.assign`.
	 * @param ctx the parse tree
	 */
	enterAssign?: (ctx: AssignContext) => void;
	/**
	 * Exit a parse tree produced by `bParser.assign`.
	 * @param ctx the parse tree
	 */
	exitAssign?: (ctx: AssignContext) => void;

	/**
	 * Enter a parse tree produced by `bParser.incdec`.
	 * @param ctx the parse tree
	 */
	enterIncdec?: (ctx: IncdecContext) => void;
	/**
	 * Exit a parse tree produced by `bParser.incdec`.
	 * @param ctx the parse tree
	 */
	exitIncdec?: (ctx: IncdecContext) => void;

	/**
	 * Enter a parse tree produced by `bParser.unary`.
	 * @param ctx the parse tree
	 */
	enterUnary?: (ctx: UnaryContext) => void;
	/**
	 * Exit a parse tree produced by `bParser.unary`.
	 * @param ctx the parse tree
	 */
	exitUnary?: (ctx: UnaryContext) => void;

	/**
	 * Enter a parse tree produced by `bParser.binary`.
	 * @param ctx the parse tree
	 */
	enterBinary?: (ctx: BinaryContext) => void;
	/**
	 * Exit a parse tree produced by `bParser.binary`.
	 * @param ctx the parse tree
	 */
	exitBinary?: (ctx: BinaryContext) => void;

	/**
	 * Enter a parse tree produced by `bParser.lvalue`.
	 * @param ctx the parse tree
	 */
	enterLvalue?: (ctx: LvalueContext) => void;
	/**
	 * Exit a parse tree produced by `bParser.lvalue`.
	 * @param ctx the parse tree
	 */
	exitLvalue?: (ctx: LvalueContext) => void;

	/**
	 * Enter a parse tree produced by `bParser.constant`.
	 * @param ctx the parse tree
	 */
	enterConstant?: (ctx: ConstantContext) => void;
	/**
	 * Exit a parse tree produced by `bParser.constant`.
	 * @param ctx the parse tree
	 */
	exitConstant?: (ctx: ConstantContext) => void;

	/**
	 * Enter a parse tree produced by `bParser.name`.
	 * @param ctx the parse tree
	 */
	enterName?: (ctx: NameContext) => void;
	/**
	 * Exit a parse tree produced by `bParser.name`.
	 * @param ctx the parse tree
	 */
	exitName?: (ctx: NameContext) => void;
}

