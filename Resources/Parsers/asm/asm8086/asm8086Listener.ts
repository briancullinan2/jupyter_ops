// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/asm/asm8086/asm8086.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `asm8086Parser`.
 */
export interface asm8086Listener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `asm8086Parser.prog`.
	 * @param ctx the parse tree
	 */
	enterProg?: (ctx: ProgContext) => void;
	/**
	 * Exit a parse tree produced by `asm8086Parser.prog`.
	 * @param ctx the parse tree
	 */
	exitProg?: (ctx: ProgContext) => void;

	/**
	 * Enter a parse tree produced by `asm8086Parser.line`.
	 * @param ctx the parse tree
	 */
	enterLine?: (ctx: LineContext) => void;
	/**
	 * Exit a parse tree produced by `asm8086Parser.line`.
	 * @param ctx the parse tree
	 */
	exitLine?: (ctx: LineContext) => void;

	/**
	 * Enter a parse tree produced by `asm8086Parser.instruction`.
	 * @param ctx the parse tree
	 */
	enterInstruction?: (ctx: InstructionContext) => void;
	/**
	 * Exit a parse tree produced by `asm8086Parser.instruction`.
	 * @param ctx the parse tree
	 */
	exitInstruction?: (ctx: InstructionContext) => void;

	/**
	 * Enter a parse tree produced by `asm8086Parser.lbl`.
	 * @param ctx the parse tree
	 */
	enterLbl?: (ctx: LblContext) => void;
	/**
	 * Exit a parse tree produced by `asm8086Parser.lbl`.
	 * @param ctx the parse tree
	 */
	exitLbl?: (ctx: LblContext) => void;

	/**
	 * Enter a parse tree produced by `asm8086Parser.assemblerdirective`.
	 * @param ctx the parse tree
	 */
	enterAssemblerdirective?: (ctx: AssemblerdirectiveContext) => void;
	/**
	 * Exit a parse tree produced by `asm8086Parser.assemblerdirective`.
	 * @param ctx the parse tree
	 */
	exitAssemblerdirective?: (ctx: AssemblerdirectiveContext) => void;

	/**
	 * Enter a parse tree produced by `asm8086Parser.rw`.
	 * @param ctx the parse tree
	 */
	enterRw?: (ctx: RwContext) => void;
	/**
	 * Exit a parse tree produced by `asm8086Parser.rw`.
	 * @param ctx the parse tree
	 */
	exitRw?: (ctx: RwContext) => void;

	/**
	 * Enter a parse tree produced by `asm8086Parser.rb`.
	 * @param ctx the parse tree
	 */
	enterRb?: (ctx: RbContext) => void;
	/**
	 * Exit a parse tree produced by `asm8086Parser.rb`.
	 * @param ctx the parse tree
	 */
	exitRb?: (ctx: RbContext) => void;

	/**
	 * Enter a parse tree produced by `asm8086Parser.rs`.
	 * @param ctx the parse tree
	 */
	enterRs?: (ctx: RsContext) => void;
	/**
	 * Exit a parse tree produced by `asm8086Parser.rs`.
	 * @param ctx the parse tree
	 */
	exitRs?: (ctx: RsContext) => void;

	/**
	 * Enter a parse tree produced by `asm8086Parser.cseg`.
	 * @param ctx the parse tree
	 */
	enterCseg?: (ctx: CsegContext) => void;
	/**
	 * Exit a parse tree produced by `asm8086Parser.cseg`.
	 * @param ctx the parse tree
	 */
	exitCseg?: (ctx: CsegContext) => void;

	/**
	 * Enter a parse tree produced by `asm8086Parser.dseg`.
	 * @param ctx the parse tree
	 */
	enterDseg?: (ctx: DsegContext) => void;
	/**
	 * Exit a parse tree produced by `asm8086Parser.dseg`.
	 * @param ctx the parse tree
	 */
	exitDseg?: (ctx: DsegContext) => void;

	/**
	 * Enter a parse tree produced by `asm8086Parser.dw`.
	 * @param ctx the parse tree
	 */
	enterDw?: (ctx: DwContext) => void;
	/**
	 * Exit a parse tree produced by `asm8086Parser.dw`.
	 * @param ctx the parse tree
	 */
	exitDw?: (ctx: DwContext) => void;

	/**
	 * Enter a parse tree produced by `asm8086Parser.db`.
	 * @param ctx the parse tree
	 */
	enterDb?: (ctx: DbContext) => void;
	/**
	 * Exit a parse tree produced by `asm8086Parser.db`.
	 * @param ctx the parse tree
	 */
	exitDb?: (ctx: DbContext) => void;

	/**
	 * Enter a parse tree produced by `asm8086Parser.dd`.
	 * @param ctx the parse tree
	 */
	enterDd?: (ctx: DdContext) => void;
	/**
	 * Exit a parse tree produced by `asm8086Parser.dd`.
	 * @param ctx the parse tree
	 */
	exitDd?: (ctx: DdContext) => void;

	/**
	 * Enter a parse tree produced by `asm8086Parser.equ`.
	 * @param ctx the parse tree
	 */
	enterEqu?: (ctx: EquContext) => void;
	/**
	 * Exit a parse tree produced by `asm8086Parser.equ`.
	 * @param ctx the parse tree
	 */
	exitEqu?: (ctx: EquContext) => void;

	/**
	 * Enter a parse tree produced by `asm8086Parser.if_`.
	 * @param ctx the parse tree
	 */
	enterIf_?: (ctx: If_Context) => void;
	/**
	 * Exit a parse tree produced by `asm8086Parser.if_`.
	 * @param ctx the parse tree
	 */
	exitIf_?: (ctx: If_Context) => void;

	/**
	 * Enter a parse tree produced by `asm8086Parser.assemblerexpression`.
	 * @param ctx the parse tree
	 */
	enterAssemblerexpression?: (ctx: AssemblerexpressionContext) => void;
	/**
	 * Exit a parse tree produced by `asm8086Parser.assemblerexpression`.
	 * @param ctx the parse tree
	 */
	exitAssemblerexpression?: (ctx: AssemblerexpressionContext) => void;

	/**
	 * Enter a parse tree produced by `asm8086Parser.assemblerlogical`.
	 * @param ctx the parse tree
	 */
	enterAssemblerlogical?: (ctx: AssemblerlogicalContext) => void;
	/**
	 * Exit a parse tree produced by `asm8086Parser.assemblerlogical`.
	 * @param ctx the parse tree
	 */
	exitAssemblerlogical?: (ctx: AssemblerlogicalContext) => void;

	/**
	 * Enter a parse tree produced by `asm8086Parser.assemblerterm`.
	 * @param ctx the parse tree
	 */
	enterAssemblerterm?: (ctx: AssemblertermContext) => void;
	/**
	 * Exit a parse tree produced by `asm8086Parser.assemblerterm`.
	 * @param ctx the parse tree
	 */
	exitAssemblerterm?: (ctx: AssemblertermContext) => void;

	/**
	 * Enter a parse tree produced by `asm8086Parser.endif`.
	 * @param ctx the parse tree
	 */
	enterEndif?: (ctx: EndifContext) => void;
	/**
	 * Exit a parse tree produced by `asm8086Parser.endif`.
	 * @param ctx the parse tree
	 */
	exitEndif?: (ctx: EndifContext) => void;

	/**
	 * Enter a parse tree produced by `asm8086Parser.end`.
	 * @param ctx the parse tree
	 */
	enterEnd?: (ctx: EndContext) => void;
	/**
	 * Exit a parse tree produced by `asm8086Parser.end`.
	 * @param ctx the parse tree
	 */
	exitEnd?: (ctx: EndContext) => void;

	/**
	 * Enter a parse tree produced by `asm8086Parser.org`.
	 * @param ctx the parse tree
	 */
	enterOrg?: (ctx: OrgContext) => void;
	/**
	 * Exit a parse tree produced by `asm8086Parser.org`.
	 * @param ctx the parse tree
	 */
	exitOrg?: (ctx: OrgContext) => void;

	/**
	 * Enter a parse tree produced by `asm8086Parser.title`.
	 * @param ctx the parse tree
	 */
	enterTitle?: (ctx: TitleContext) => void;
	/**
	 * Exit a parse tree produced by `asm8086Parser.title`.
	 * @param ctx the parse tree
	 */
	exitTitle?: (ctx: TitleContext) => void;

	/**
	 * Enter a parse tree produced by `asm8086Parser.include`.
	 * @param ctx the parse tree
	 */
	enterInclude?: (ctx: IncludeContext) => void;
	/**
	 * Exit a parse tree produced by `asm8086Parser.include`.
	 * @param ctx the parse tree
	 */
	exitInclude?: (ctx: IncludeContext) => void;

	/**
	 * Enter a parse tree produced by `asm8086Parser.expressionlist`.
	 * @param ctx the parse tree
	 */
	enterExpressionlist?: (ctx: ExpressionlistContext) => void;
	/**
	 * Exit a parse tree produced by `asm8086Parser.expressionlist`.
	 * @param ctx the parse tree
	 */
	exitExpressionlist?: (ctx: ExpressionlistContext) => void;

	/**
	 * Enter a parse tree produced by `asm8086Parser.label`.
	 * @param ctx the parse tree
	 */
	enterLabel?: (ctx: LabelContext) => void;
	/**
	 * Exit a parse tree produced by `asm8086Parser.label`.
	 * @param ctx the parse tree
	 */
	exitLabel?: (ctx: LabelContext) => void;

	/**
	 * Enter a parse tree produced by `asm8086Parser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `asm8086Parser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `asm8086Parser.multiplyingExpression`.
	 * @param ctx the parse tree
	 */
	enterMultiplyingExpression?: (ctx: MultiplyingExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `asm8086Parser.multiplyingExpression`.
	 * @param ctx the parse tree
	 */
	exitMultiplyingExpression?: (ctx: MultiplyingExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `asm8086Parser.argument`.
	 * @param ctx the parse tree
	 */
	enterArgument?: (ctx: ArgumentContext) => void;
	/**
	 * Exit a parse tree produced by `asm8086Parser.argument`.
	 * @param ctx the parse tree
	 */
	exitArgument?: (ctx: ArgumentContext) => void;

	/**
	 * Enter a parse tree produced by `asm8086Parser.ptr`.
	 * @param ctx the parse tree
	 */
	enterPtr?: (ctx: PtrContext) => void;
	/**
	 * Exit a parse tree produced by `asm8086Parser.ptr`.
	 * @param ctx the parse tree
	 */
	exitPtr?: (ctx: PtrContext) => void;

	/**
	 * Enter a parse tree produced by `asm8086Parser.dollar`.
	 * @param ctx the parse tree
	 */
	enterDollar?: (ctx: DollarContext) => void;
	/**
	 * Exit a parse tree produced by `asm8086Parser.dollar`.
	 * @param ctx the parse tree
	 */
	exitDollar?: (ctx: DollarContext) => void;

	/**
	 * Enter a parse tree produced by `asm8086Parser.register_`.
	 * @param ctx the parse tree
	 */
	enterRegister_?: (ctx: Register_Context) => void;
	/**
	 * Exit a parse tree produced by `asm8086Parser.register_`.
	 * @param ctx the parse tree
	 */
	exitRegister_?: (ctx: Register_Context) => void;

	/**
	 * Enter a parse tree produced by `asm8086Parser.string`.
	 * @param ctx the parse tree
	 */
	enterString?: (ctx: StringContext) => void;
	/**
	 * Exit a parse tree produced by `asm8086Parser.string`.
	 * @param ctx the parse tree
	 */
	exitString?: (ctx: StringContext) => void;

	/**
	 * Enter a parse tree produced by `asm8086Parser.name`.
	 * @param ctx the parse tree
	 */
	enterName?: (ctx: NameContext) => void;
	/**
	 * Exit a parse tree produced by `asm8086Parser.name`.
	 * @param ctx the parse tree
	 */
	exitName?: (ctx: NameContext) => void;

	/**
	 * Enter a parse tree produced by `asm8086Parser.number`.
	 * @param ctx the parse tree
	 */
	enterNumber?: (ctx: NumberContext) => void;
	/**
	 * Exit a parse tree produced by `asm8086Parser.number`.
	 * @param ctx the parse tree
	 */
	exitNumber?: (ctx: NumberContext) => void;

	/**
	 * Enter a parse tree produced by `asm8086Parser.opcode`.
	 * @param ctx the parse tree
	 */
	enterOpcode?: (ctx: OpcodeContext) => void;
	/**
	 * Exit a parse tree produced by `asm8086Parser.opcode`.
	 * @param ctx the parse tree
	 */
	exitOpcode?: (ctx: OpcodeContext) => void;

	/**
	 * Enter a parse tree produced by `asm8086Parser.rep`.
	 * @param ctx the parse tree
	 */
	enterRep?: (ctx: RepContext) => void;
	/**
	 * Exit a parse tree produced by `asm8086Parser.rep`.
	 * @param ctx the parse tree
	 */
	exitRep?: (ctx: RepContext) => void;

	/**
	 * Enter a parse tree produced by `asm8086Parser.comment`.
	 * @param ctx the parse tree
	 */
	enterComment?: (ctx: CommentContext) => void;
	/**
	 * Exit a parse tree produced by `asm8086Parser.comment`.
	 * @param ctx the parse tree
	 */
	exitComment?: (ctx: CommentContext) => void;
}

