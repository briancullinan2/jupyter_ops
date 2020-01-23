// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/oncrpc/xdr.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { DeclarationContext } from "./xdrParser";
import { ValueContext } from "./xdrParser";
import { ConstantContext } from "./xdrParser";
import { TypeSpecifierContext } from "./xdrParser";
import { EnumTypeSpecContext } from "./xdrParser";
import { EnumBodyContext } from "./xdrParser";
import { StructTypeSpecContext } from "./xdrParser";
import { StructBodyContext } from "./xdrParser";
import { UnionTypeSpecContext } from "./xdrParser";
import { UnionBodyContext } from "./xdrParser";
import { CaseSpecContext } from "./xdrParser";
import { ConstantDefContext } from "./xdrParser";
import { TypeDefContext } from "./xdrParser";
import { DefinitionContext } from "./xdrParser";
import { XdrSpecificationContext } from "./xdrParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `xdrParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface xdrVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `xdrParser.declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclaration?: (ctx: DeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `xdrParser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValue?: (ctx: ValueContext) => Result;

	/**
	 * Visit a parse tree produced by `xdrParser.constant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstant?: (ctx: ConstantContext) => Result;

	/**
	 * Visit a parse tree produced by `xdrParser.typeSpecifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeSpecifier?: (ctx: TypeSpecifierContext) => Result;

	/**
	 * Visit a parse tree produced by `xdrParser.enumTypeSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumTypeSpec?: (ctx: EnumTypeSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `xdrParser.enumBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumBody?: (ctx: EnumBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `xdrParser.structTypeSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStructTypeSpec?: (ctx: StructTypeSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `xdrParser.structBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStructBody?: (ctx: StructBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `xdrParser.unionTypeSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnionTypeSpec?: (ctx: UnionTypeSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `xdrParser.unionBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnionBody?: (ctx: UnionBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `xdrParser.caseSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCaseSpec?: (ctx: CaseSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `xdrParser.constantDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstantDef?: (ctx: ConstantDefContext) => Result;

	/**
	 * Visit a parse tree produced by `xdrParser.typeDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeDef?: (ctx: TypeDefContext) => Result;

	/**
	 * Visit a parse tree produced by `xdrParser.definition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefinition?: (ctx: DefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `xdrParser.xdrSpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitXdrSpecification?: (ctx: XdrSpecificationContext) => Result;
}

