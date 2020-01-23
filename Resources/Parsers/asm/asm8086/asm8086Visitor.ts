// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/asm/asm8086/asm8086.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { ProgContext } from "./asm8086Parser";
import { LineContext } from "./asm8086Parser";
import { InstructionContext } from "./asm8086Parser";
import { LblContext } from "./asm8086Parser";
import { AssemblerdirectiveContext } from "./asm8086Parser";
import { RwContext } from "./asm8086Parser";
import { RbContext } from "./asm8086Parser";
import { RsContext } from "./asm8086Parser";
import { CsegContext } from "./asm8086Parser";
import { DsegContext } from "./asm8086Parser";
import { DwContext } from "./asm8086Parser";
import { DbContext } from "./asm8086Parser";
import { DdContext } from "./asm8086Parser";
import { EquContext } from "./asm8086Parser";
import { If_Context } from "./asm8086Parser";
import { AssemblerexpressionContext } from "./asm8086Parser";
import { AssemblerlogicalContext } from "./asm8086Parser";
import { AssemblertermContext } from "./asm8086Parser";
import { EndifContext } from "./asm8086Parser";
import { EndContext } from "./asm8086Parser";
import { OrgContext } from "./asm8086Parser";
import { TitleContext } from "./asm8086Parser";
import { IncludeContext } from "./asm8086Parser";
import { ExpressionlistContext } from "./asm8086Parser";
import { LabelContext } from "./asm8086Parser";
import { ExpressionContext } from "./asm8086Parser";
import { MultiplyingExpressionContext } from "./asm8086Parser";
import { ArgumentContext } from "./asm8086Parser";
import { PtrContext } from "./asm8086Parser";
import { DollarContext } from "./asm8086Parser";
import { Register_Context } from "./asm8086Parser";
import { StringContext } from "./asm8086Parser";
import { NameContext } from "./asm8086Parser";
import { NumberContext } from "./asm8086Parser";
import { OpcodeContext } from "./asm8086Parser";
import { RepContext } from "./asm8086Parser";
import { CommentContext } from "./asm8086Parser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `asm8086Parser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface asm8086Visitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `asm8086Parser.prog`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProg?: (ctx: ProgContext) => Result;

	/**
	 * Visit a parse tree produced by `asm8086Parser.line`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLine?: (ctx: LineContext) => Result;

	/**
	 * Visit a parse tree produced by `asm8086Parser.instruction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstruction?: (ctx: InstructionContext) => Result;

	/**
	 * Visit a parse tree produced by `asm8086Parser.lbl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLbl?: (ctx: LblContext) => Result;

	/**
	 * Visit a parse tree produced by `asm8086Parser.assemblerdirective`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssemblerdirective?: (ctx: AssemblerdirectiveContext) => Result;

	/**
	 * Visit a parse tree produced by `asm8086Parser.rw`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRw?: (ctx: RwContext) => Result;

	/**
	 * Visit a parse tree produced by `asm8086Parser.rb`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRb?: (ctx: RbContext) => Result;

	/**
	 * Visit a parse tree produced by `asm8086Parser.rs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRs?: (ctx: RsContext) => Result;

	/**
	 * Visit a parse tree produced by `asm8086Parser.cseg`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCseg?: (ctx: CsegContext) => Result;

	/**
	 * Visit a parse tree produced by `asm8086Parser.dseg`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDseg?: (ctx: DsegContext) => Result;

	/**
	 * Visit a parse tree produced by `asm8086Parser.dw`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDw?: (ctx: DwContext) => Result;

	/**
	 * Visit a parse tree produced by `asm8086Parser.db`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDb?: (ctx: DbContext) => Result;

	/**
	 * Visit a parse tree produced by `asm8086Parser.dd`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDd?: (ctx: DdContext) => Result;

	/**
	 * Visit a parse tree produced by `asm8086Parser.equ`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEqu?: (ctx: EquContext) => Result;

	/**
	 * Visit a parse tree produced by `asm8086Parser.if_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIf_?: (ctx: If_Context) => Result;

	/**
	 * Visit a parse tree produced by `asm8086Parser.assemblerexpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssemblerexpression?: (ctx: AssemblerexpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `asm8086Parser.assemblerlogical`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssemblerlogical?: (ctx: AssemblerlogicalContext) => Result;

	/**
	 * Visit a parse tree produced by `asm8086Parser.assemblerterm`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssemblerterm?: (ctx: AssemblertermContext) => Result;

	/**
	 * Visit a parse tree produced by `asm8086Parser.endif`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEndif?: (ctx: EndifContext) => Result;

	/**
	 * Visit a parse tree produced by `asm8086Parser.end`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnd?: (ctx: EndContext) => Result;

	/**
	 * Visit a parse tree produced by `asm8086Parser.org`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrg?: (ctx: OrgContext) => Result;

	/**
	 * Visit a parse tree produced by `asm8086Parser.title`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTitle?: (ctx: TitleContext) => Result;

	/**
	 * Visit a parse tree produced by `asm8086Parser.include`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInclude?: (ctx: IncludeContext) => Result;

	/**
	 * Visit a parse tree produced by `asm8086Parser.expressionlist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionlist?: (ctx: ExpressionlistContext) => Result;

	/**
	 * Visit a parse tree produced by `asm8086Parser.label`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLabel?: (ctx: LabelContext) => Result;

	/**
	 * Visit a parse tree produced by `asm8086Parser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `asm8086Parser.multiplyingExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplyingExpression?: (ctx: MultiplyingExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `asm8086Parser.argument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgument?: (ctx: ArgumentContext) => Result;

	/**
	 * Visit a parse tree produced by `asm8086Parser.ptr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPtr?: (ctx: PtrContext) => Result;

	/**
	 * Visit a parse tree produced by `asm8086Parser.dollar`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDollar?: (ctx: DollarContext) => Result;

	/**
	 * Visit a parse tree produced by `asm8086Parser.register_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRegister_?: (ctx: Register_Context) => Result;

	/**
	 * Visit a parse tree produced by `asm8086Parser.string`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitString?: (ctx: StringContext) => Result;

	/**
	 * Visit a parse tree produced by `asm8086Parser.name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitName?: (ctx: NameContext) => Result;

	/**
	 * Visit a parse tree produced by `asm8086Parser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumber?: (ctx: NumberContext) => Result;

	/**
	 * Visit a parse tree produced by `asm8086Parser.opcode`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOpcode?: (ctx: OpcodeContext) => Result;

	/**
	 * Visit a parse tree produced by `asm8086Parser.rep`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRep?: (ctx: RepContext) => Result;

	/**
	 * Visit a parse tree produced by `asm8086Parser.comment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComment?: (ctx: CommentContext) => Result;
}

