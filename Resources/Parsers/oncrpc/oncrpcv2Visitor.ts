// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/oncrpc/oncrpcv2.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { ProgramDefContext } from "./oncrpcv2Parser";
import { VersionDefContext } from "./oncrpcv2Parser";
import { ProcedureDefContext } from "./oncrpcv2Parser";
import { ProcReturnContext } from "./oncrpcv2Parser";
import { ProcFirstArgContext } from "./oncrpcv2Parser";
import { Oncrpcv2SpecificationContext } from "./oncrpcv2Parser";
import { DeclarationContext } from "./oncrpcv2Parser";
import { ValueContext } from "./oncrpcv2Parser";
import { ConstantContext } from "./oncrpcv2Parser";
import { TypeSpecifierContext } from "./oncrpcv2Parser";
import { EnumTypeSpecContext } from "./oncrpcv2Parser";
import { EnumBodyContext } from "./oncrpcv2Parser";
import { StructTypeSpecContext } from "./oncrpcv2Parser";
import { StructBodyContext } from "./oncrpcv2Parser";
import { UnionTypeSpecContext } from "./oncrpcv2Parser";
import { UnionBodyContext } from "./oncrpcv2Parser";
import { CaseSpecContext } from "./oncrpcv2Parser";
import { ConstantDefContext } from "./oncrpcv2Parser";
import { TypeDefContext } from "./oncrpcv2Parser";
import { DefinitionContext } from "./oncrpcv2Parser";
import { XdrSpecificationContext } from "./oncrpcv2Parser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `oncrpcv2Parser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface oncrpcv2Visitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `oncrpcv2Parser.programDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgramDef?: (ctx: ProgramDefContext) => Result;

	/**
	 * Visit a parse tree produced by `oncrpcv2Parser.versionDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVersionDef?: (ctx: VersionDefContext) => Result;

	/**
	 * Visit a parse tree produced by `oncrpcv2Parser.procedureDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProcedureDef?: (ctx: ProcedureDefContext) => Result;

	/**
	 * Visit a parse tree produced by `oncrpcv2Parser.procReturn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProcReturn?: (ctx: ProcReturnContext) => Result;

	/**
	 * Visit a parse tree produced by `oncrpcv2Parser.procFirstArg`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProcFirstArg?: (ctx: ProcFirstArgContext) => Result;

	/**
	 * Visit a parse tree produced by `oncrpcv2Parser.oncrpcv2Specification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOncrpcv2Specification?: (ctx: Oncrpcv2SpecificationContext) => Result;

	/**
	 * Visit a parse tree produced by `oncrpcv2Parser.declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclaration?: (ctx: DeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `oncrpcv2Parser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValue?: (ctx: ValueContext) => Result;

	/**
	 * Visit a parse tree produced by `oncrpcv2Parser.constant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstant?: (ctx: ConstantContext) => Result;

	/**
	 * Visit a parse tree produced by `oncrpcv2Parser.typeSpecifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeSpecifier?: (ctx: TypeSpecifierContext) => Result;

	/**
	 * Visit a parse tree produced by `oncrpcv2Parser.enumTypeSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumTypeSpec?: (ctx: EnumTypeSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `oncrpcv2Parser.enumBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumBody?: (ctx: EnumBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `oncrpcv2Parser.structTypeSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStructTypeSpec?: (ctx: StructTypeSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `oncrpcv2Parser.structBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStructBody?: (ctx: StructBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `oncrpcv2Parser.unionTypeSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnionTypeSpec?: (ctx: UnionTypeSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `oncrpcv2Parser.unionBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnionBody?: (ctx: UnionBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `oncrpcv2Parser.caseSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCaseSpec?: (ctx: CaseSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `oncrpcv2Parser.constantDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstantDef?: (ctx: ConstantDefContext) => Result;

	/**
	 * Visit a parse tree produced by `oncrpcv2Parser.typeDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeDef?: (ctx: TypeDefContext) => Result;

	/**
	 * Visit a parse tree produced by `oncrpcv2Parser.definition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefinition?: (ctx: DefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `oncrpcv2Parser.xdrSpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitXdrSpecification?: (ctx: XdrSpecificationContext) => Result;
}

