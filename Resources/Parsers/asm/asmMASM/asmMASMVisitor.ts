// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/asm/asmMASM/asmMASM.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { ProgContext } from "./asmMASMParser";
import { LineContext } from "./asmMASMParser";
import { InstructionContext } from "./asmMASMParser";
import { LblContext } from "./asmMASMParser";
import { AssemblerdirectiveContext } from "./asmMASMParser";
import { MasmdirectivesContext } from "./asmMASMParser";
import { MasmdirectiveContext } from "./asmMASMParser";
import { AssumeContext } from "./asmMASMParser";
import { Label_Context } from "./asmMASMParser";
import { TypeContext } from "./asmMASMParser";
import { GroupContext } from "./asmMASMParser";
import { SegmentContext } from "./asmMASMParser";
import { EndsegmentContext } from "./asmMASMParser";
import { AlignContext } from "./asmMASMParser";
import { AssignContext } from "./asmMASMParser";
import { PutContext } from "./asmMASMParser";
import { DsContext } from "./asmMASMParser";
import { DwContext } from "./asmMASMParser";
import { DbContext } from "./asmMASMParser";
import { DmContext } from "./asmMASMParser";
import { DupContext } from "./asmMASMParser";
import { EquContext } from "./asmMASMParser";
import { ExternContext } from "./asmMASMParser";
import { If_Context } from "./asmMASMParser";
import { EndifContext } from "./asmMASMParser";
import { OrgContext } from "./asmMASMParser";
import { ExpressionlistContext } from "./asmMASMParser";
import { LabelContext } from "./asmMASMParser";
import { ExpressionContext } from "./asmMASMParser";
import { MultiplyingExpressionContext } from "./asmMASMParser";
import { ArgumentContext } from "./asmMASMParser";
import { GrossContext } from "./asmMASMParser";
import { GrossrawassemblerdirectiveContext } from "./asmMASMParser";
import { DollarContext } from "./asmMASMParser";
import { QuesContext } from "./asmMASMParser";
import { Register_Context } from "./asmMASMParser";
import { StringContext } from "./asmMASMParser";
import { NameContext } from "./asmMASMParser";
import { NumberContext } from "./asmMASMParser";
import { OpcodeContext } from "./asmMASMParser";
import { RepContext } from "./asmMASMParser";
import { CommentContext } from "./asmMASMParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `asmMASMParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface asmMASMVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `asmMASMParser.prog`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProg?: (ctx: ProgContext) => Result;

	/**
	 * Visit a parse tree produced by `asmMASMParser.line`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLine?: (ctx: LineContext) => Result;

	/**
	 * Visit a parse tree produced by `asmMASMParser.instruction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstruction?: (ctx: InstructionContext) => Result;

	/**
	 * Visit a parse tree produced by `asmMASMParser.lbl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLbl?: (ctx: LblContext) => Result;

	/**
	 * Visit a parse tree produced by `asmMASMParser.assemblerdirective`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssemblerdirective?: (ctx: AssemblerdirectiveContext) => Result;

	/**
	 * Visit a parse tree produced by `asmMASMParser.masmdirectives`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMasmdirectives?: (ctx: MasmdirectivesContext) => Result;

	/**
	 * Visit a parse tree produced by `asmMASMParser.masmdirective`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMasmdirective?: (ctx: MasmdirectiveContext) => Result;

	/**
	 * Visit a parse tree produced by `asmMASMParser.assume`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssume?: (ctx: AssumeContext) => Result;

	/**
	 * Visit a parse tree produced by `asmMASMParser.label_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLabel_?: (ctx: Label_Context) => Result;

	/**
	 * Visit a parse tree produced by `asmMASMParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType?: (ctx: TypeContext) => Result;

	/**
	 * Visit a parse tree produced by `asmMASMParser.group`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroup?: (ctx: GroupContext) => Result;

	/**
	 * Visit a parse tree produced by `asmMASMParser.segment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSegment?: (ctx: SegmentContext) => Result;

	/**
	 * Visit a parse tree produced by `asmMASMParser.endsegment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEndsegment?: (ctx: EndsegmentContext) => Result;

	/**
	 * Visit a parse tree produced by `asmMASMParser.align`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlign?: (ctx: AlignContext) => Result;

	/**
	 * Visit a parse tree produced by `asmMASMParser.assign`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssign?: (ctx: AssignContext) => Result;

	/**
	 * Visit a parse tree produced by `asmMASMParser.put`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPut?: (ctx: PutContext) => Result;

	/**
	 * Visit a parse tree produced by `asmMASMParser.ds`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDs?: (ctx: DsContext) => Result;

	/**
	 * Visit a parse tree produced by `asmMASMParser.dw`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDw?: (ctx: DwContext) => Result;

	/**
	 * Visit a parse tree produced by `asmMASMParser.db`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDb?: (ctx: DbContext) => Result;

	/**
	 * Visit a parse tree produced by `asmMASMParser.dm`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDm?: (ctx: DmContext) => Result;

	/**
	 * Visit a parse tree produced by `asmMASMParser.dup`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDup?: (ctx: DupContext) => Result;

	/**
	 * Visit a parse tree produced by `asmMASMParser.equ`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEqu?: (ctx: EquContext) => Result;

	/**
	 * Visit a parse tree produced by `asmMASMParser.extern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExtern?: (ctx: ExternContext) => Result;

	/**
	 * Visit a parse tree produced by `asmMASMParser.if_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIf_?: (ctx: If_Context) => Result;

	/**
	 * Visit a parse tree produced by `asmMASMParser.endif`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEndif?: (ctx: EndifContext) => Result;

	/**
	 * Visit a parse tree produced by `asmMASMParser.org`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrg?: (ctx: OrgContext) => Result;

	/**
	 * Visit a parse tree produced by `asmMASMParser.expressionlist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionlist?: (ctx: ExpressionlistContext) => Result;

	/**
	 * Visit a parse tree produced by `asmMASMParser.label`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLabel?: (ctx: LabelContext) => Result;

	/**
	 * Visit a parse tree produced by `asmMASMParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `asmMASMParser.multiplyingExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplyingExpression?: (ctx: MultiplyingExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `asmMASMParser.argument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgument?: (ctx: ArgumentContext) => Result;

	/**
	 * Visit a parse tree produced by `asmMASMParser.gross`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGross?: (ctx: GrossContext) => Result;

	/**
	 * Visit a parse tree produced by `asmMASMParser.grossrawassemblerdirective`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGrossrawassemblerdirective?: (ctx: GrossrawassemblerdirectiveContext) => Result;

	/**
	 * Visit a parse tree produced by `asmMASMParser.dollar`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDollar?: (ctx: DollarContext) => Result;

	/**
	 * Visit a parse tree produced by `asmMASMParser.ques`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQues?: (ctx: QuesContext) => Result;

	/**
	 * Visit a parse tree produced by `asmMASMParser.register_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRegister_?: (ctx: Register_Context) => Result;

	/**
	 * Visit a parse tree produced by `asmMASMParser.string`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitString?: (ctx: StringContext) => Result;

	/**
	 * Visit a parse tree produced by `asmMASMParser.name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitName?: (ctx: NameContext) => Result;

	/**
	 * Visit a parse tree produced by `asmMASMParser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumber?: (ctx: NumberContext) => Result;

	/**
	 * Visit a parse tree produced by `asmMASMParser.opcode`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOpcode?: (ctx: OpcodeContext) => Result;

	/**
	 * Visit a parse tree produced by `asmMASMParser.rep`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRep?: (ctx: RepContext) => Result;

	/**
	 * Visit a parse tree produced by `asmMASMParser.comment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComment?: (ctx: CommentContext) => Result;
}

