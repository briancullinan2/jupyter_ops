// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/oncrpc/xdr.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `xdrParser`.
 */
export interface xdrListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `xdrParser.declaration`.
	 * @param ctx the parse tree
	 */
	enterDeclaration?: (ctx: DeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `xdrParser.declaration`.
	 * @param ctx the parse tree
	 */
	exitDeclaration?: (ctx: DeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `xdrParser.value`.
	 * @param ctx the parse tree
	 */
	enterValue?: (ctx: ValueContext) => void;
	/**
	 * Exit a parse tree produced by `xdrParser.value`.
	 * @param ctx the parse tree
	 */
	exitValue?: (ctx: ValueContext) => void;

	/**
	 * Enter a parse tree produced by `xdrParser.constant`.
	 * @param ctx the parse tree
	 */
	enterConstant?: (ctx: ConstantContext) => void;
	/**
	 * Exit a parse tree produced by `xdrParser.constant`.
	 * @param ctx the parse tree
	 */
	exitConstant?: (ctx: ConstantContext) => void;

	/**
	 * Enter a parse tree produced by `xdrParser.typeSpecifier`.
	 * @param ctx the parse tree
	 */
	enterTypeSpecifier?: (ctx: TypeSpecifierContext) => void;
	/**
	 * Exit a parse tree produced by `xdrParser.typeSpecifier`.
	 * @param ctx the parse tree
	 */
	exitTypeSpecifier?: (ctx: TypeSpecifierContext) => void;

	/**
	 * Enter a parse tree produced by `xdrParser.enumTypeSpec`.
	 * @param ctx the parse tree
	 */
	enterEnumTypeSpec?: (ctx: EnumTypeSpecContext) => void;
	/**
	 * Exit a parse tree produced by `xdrParser.enumTypeSpec`.
	 * @param ctx the parse tree
	 */
	exitEnumTypeSpec?: (ctx: EnumTypeSpecContext) => void;

	/**
	 * Enter a parse tree produced by `xdrParser.enumBody`.
	 * @param ctx the parse tree
	 */
	enterEnumBody?: (ctx: EnumBodyContext) => void;
	/**
	 * Exit a parse tree produced by `xdrParser.enumBody`.
	 * @param ctx the parse tree
	 */
	exitEnumBody?: (ctx: EnumBodyContext) => void;

	/**
	 * Enter a parse tree produced by `xdrParser.structTypeSpec`.
	 * @param ctx the parse tree
	 */
	enterStructTypeSpec?: (ctx: StructTypeSpecContext) => void;
	/**
	 * Exit a parse tree produced by `xdrParser.structTypeSpec`.
	 * @param ctx the parse tree
	 */
	exitStructTypeSpec?: (ctx: StructTypeSpecContext) => void;

	/**
	 * Enter a parse tree produced by `xdrParser.structBody`.
	 * @param ctx the parse tree
	 */
	enterStructBody?: (ctx: StructBodyContext) => void;
	/**
	 * Exit a parse tree produced by `xdrParser.structBody`.
	 * @param ctx the parse tree
	 */
	exitStructBody?: (ctx: StructBodyContext) => void;

	/**
	 * Enter a parse tree produced by `xdrParser.unionTypeSpec`.
	 * @param ctx the parse tree
	 */
	enterUnionTypeSpec?: (ctx: UnionTypeSpecContext) => void;
	/**
	 * Exit a parse tree produced by `xdrParser.unionTypeSpec`.
	 * @param ctx the parse tree
	 */
	exitUnionTypeSpec?: (ctx: UnionTypeSpecContext) => void;

	/**
	 * Enter a parse tree produced by `xdrParser.unionBody`.
	 * @param ctx the parse tree
	 */
	enterUnionBody?: (ctx: UnionBodyContext) => void;
	/**
	 * Exit a parse tree produced by `xdrParser.unionBody`.
	 * @param ctx the parse tree
	 */
	exitUnionBody?: (ctx: UnionBodyContext) => void;

	/**
	 * Enter a parse tree produced by `xdrParser.caseSpec`.
	 * @param ctx the parse tree
	 */
	enterCaseSpec?: (ctx: CaseSpecContext) => void;
	/**
	 * Exit a parse tree produced by `xdrParser.caseSpec`.
	 * @param ctx the parse tree
	 */
	exitCaseSpec?: (ctx: CaseSpecContext) => void;

	/**
	 * Enter a parse tree produced by `xdrParser.constantDef`.
	 * @param ctx the parse tree
	 */
	enterConstantDef?: (ctx: ConstantDefContext) => void;
	/**
	 * Exit a parse tree produced by `xdrParser.constantDef`.
	 * @param ctx the parse tree
	 */
	exitConstantDef?: (ctx: ConstantDefContext) => void;

	/**
	 * Enter a parse tree produced by `xdrParser.typeDef`.
	 * @param ctx the parse tree
	 */
	enterTypeDef?: (ctx: TypeDefContext) => void;
	/**
	 * Exit a parse tree produced by `xdrParser.typeDef`.
	 * @param ctx the parse tree
	 */
	exitTypeDef?: (ctx: TypeDefContext) => void;

	/**
	 * Enter a parse tree produced by `xdrParser.definition`.
	 * @param ctx the parse tree
	 */
	enterDefinition?: (ctx: DefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `xdrParser.definition`.
	 * @param ctx the parse tree
	 */
	exitDefinition?: (ctx: DefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `xdrParser.xdrSpecification`.
	 * @param ctx the parse tree
	 */
	enterXdrSpecification?: (ctx: XdrSpecificationContext) => void;
	/**
	 * Exit a parse tree produced by `xdrParser.xdrSpecification`.
	 * @param ctx the parse tree
	 */
	exitXdrSpecification?: (ctx: XdrSpecificationContext) => void;
}

