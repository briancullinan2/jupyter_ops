// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/oncrpc/oncrpcv2.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `oncrpcv2Parser`.
 */
export interface oncrpcv2Listener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `oncrpcv2Parser.programDef`.
	 * @param ctx the parse tree
	 */
	enterProgramDef?: (ctx: ProgramDefContext) => void;
	/**
	 * Exit a parse tree produced by `oncrpcv2Parser.programDef`.
	 * @param ctx the parse tree
	 */
	exitProgramDef?: (ctx: ProgramDefContext) => void;

	/**
	 * Enter a parse tree produced by `oncrpcv2Parser.versionDef`.
	 * @param ctx the parse tree
	 */
	enterVersionDef?: (ctx: VersionDefContext) => void;
	/**
	 * Exit a parse tree produced by `oncrpcv2Parser.versionDef`.
	 * @param ctx the parse tree
	 */
	exitVersionDef?: (ctx: VersionDefContext) => void;

	/**
	 * Enter a parse tree produced by `oncrpcv2Parser.procedureDef`.
	 * @param ctx the parse tree
	 */
	enterProcedureDef?: (ctx: ProcedureDefContext) => void;
	/**
	 * Exit a parse tree produced by `oncrpcv2Parser.procedureDef`.
	 * @param ctx the parse tree
	 */
	exitProcedureDef?: (ctx: ProcedureDefContext) => void;

	/**
	 * Enter a parse tree produced by `oncrpcv2Parser.procReturn`.
	 * @param ctx the parse tree
	 */
	enterProcReturn?: (ctx: ProcReturnContext) => void;
	/**
	 * Exit a parse tree produced by `oncrpcv2Parser.procReturn`.
	 * @param ctx the parse tree
	 */
	exitProcReturn?: (ctx: ProcReturnContext) => void;

	/**
	 * Enter a parse tree produced by `oncrpcv2Parser.procFirstArg`.
	 * @param ctx the parse tree
	 */
	enterProcFirstArg?: (ctx: ProcFirstArgContext) => void;
	/**
	 * Exit a parse tree produced by `oncrpcv2Parser.procFirstArg`.
	 * @param ctx the parse tree
	 */
	exitProcFirstArg?: (ctx: ProcFirstArgContext) => void;

	/**
	 * Enter a parse tree produced by `oncrpcv2Parser.oncrpcv2Specification`.
	 * @param ctx the parse tree
	 */
	enterOncrpcv2Specification?: (ctx: Oncrpcv2SpecificationContext) => void;
	/**
	 * Exit a parse tree produced by `oncrpcv2Parser.oncrpcv2Specification`.
	 * @param ctx the parse tree
	 */
	exitOncrpcv2Specification?: (ctx: Oncrpcv2SpecificationContext) => void;

	/**
	 * Enter a parse tree produced by `oncrpcv2Parser.declaration`.
	 * @param ctx the parse tree
	 */
	enterDeclaration?: (ctx: DeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `oncrpcv2Parser.declaration`.
	 * @param ctx the parse tree
	 */
	exitDeclaration?: (ctx: DeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `oncrpcv2Parser.value`.
	 * @param ctx the parse tree
	 */
	enterValue?: (ctx: ValueContext) => void;
	/**
	 * Exit a parse tree produced by `oncrpcv2Parser.value`.
	 * @param ctx the parse tree
	 */
	exitValue?: (ctx: ValueContext) => void;

	/**
	 * Enter a parse tree produced by `oncrpcv2Parser.constant`.
	 * @param ctx the parse tree
	 */
	enterConstant?: (ctx: ConstantContext) => void;
	/**
	 * Exit a parse tree produced by `oncrpcv2Parser.constant`.
	 * @param ctx the parse tree
	 */
	exitConstant?: (ctx: ConstantContext) => void;

	/**
	 * Enter a parse tree produced by `oncrpcv2Parser.typeSpecifier`.
	 * @param ctx the parse tree
	 */
	enterTypeSpecifier?: (ctx: TypeSpecifierContext) => void;
	/**
	 * Exit a parse tree produced by `oncrpcv2Parser.typeSpecifier`.
	 * @param ctx the parse tree
	 */
	exitTypeSpecifier?: (ctx: TypeSpecifierContext) => void;

	/**
	 * Enter a parse tree produced by `oncrpcv2Parser.enumTypeSpec`.
	 * @param ctx the parse tree
	 */
	enterEnumTypeSpec?: (ctx: EnumTypeSpecContext) => void;
	/**
	 * Exit a parse tree produced by `oncrpcv2Parser.enumTypeSpec`.
	 * @param ctx the parse tree
	 */
	exitEnumTypeSpec?: (ctx: EnumTypeSpecContext) => void;

	/**
	 * Enter a parse tree produced by `oncrpcv2Parser.enumBody`.
	 * @param ctx the parse tree
	 */
	enterEnumBody?: (ctx: EnumBodyContext) => void;
	/**
	 * Exit a parse tree produced by `oncrpcv2Parser.enumBody`.
	 * @param ctx the parse tree
	 */
	exitEnumBody?: (ctx: EnumBodyContext) => void;

	/**
	 * Enter a parse tree produced by `oncrpcv2Parser.structTypeSpec`.
	 * @param ctx the parse tree
	 */
	enterStructTypeSpec?: (ctx: StructTypeSpecContext) => void;
	/**
	 * Exit a parse tree produced by `oncrpcv2Parser.structTypeSpec`.
	 * @param ctx the parse tree
	 */
	exitStructTypeSpec?: (ctx: StructTypeSpecContext) => void;

	/**
	 * Enter a parse tree produced by `oncrpcv2Parser.structBody`.
	 * @param ctx the parse tree
	 */
	enterStructBody?: (ctx: StructBodyContext) => void;
	/**
	 * Exit a parse tree produced by `oncrpcv2Parser.structBody`.
	 * @param ctx the parse tree
	 */
	exitStructBody?: (ctx: StructBodyContext) => void;

	/**
	 * Enter a parse tree produced by `oncrpcv2Parser.unionTypeSpec`.
	 * @param ctx the parse tree
	 */
	enterUnionTypeSpec?: (ctx: UnionTypeSpecContext) => void;
	/**
	 * Exit a parse tree produced by `oncrpcv2Parser.unionTypeSpec`.
	 * @param ctx the parse tree
	 */
	exitUnionTypeSpec?: (ctx: UnionTypeSpecContext) => void;

	/**
	 * Enter a parse tree produced by `oncrpcv2Parser.unionBody`.
	 * @param ctx the parse tree
	 */
	enterUnionBody?: (ctx: UnionBodyContext) => void;
	/**
	 * Exit a parse tree produced by `oncrpcv2Parser.unionBody`.
	 * @param ctx the parse tree
	 */
	exitUnionBody?: (ctx: UnionBodyContext) => void;

	/**
	 * Enter a parse tree produced by `oncrpcv2Parser.caseSpec`.
	 * @param ctx the parse tree
	 */
	enterCaseSpec?: (ctx: CaseSpecContext) => void;
	/**
	 * Exit a parse tree produced by `oncrpcv2Parser.caseSpec`.
	 * @param ctx the parse tree
	 */
	exitCaseSpec?: (ctx: CaseSpecContext) => void;

	/**
	 * Enter a parse tree produced by `oncrpcv2Parser.constantDef`.
	 * @param ctx the parse tree
	 */
	enterConstantDef?: (ctx: ConstantDefContext) => void;
	/**
	 * Exit a parse tree produced by `oncrpcv2Parser.constantDef`.
	 * @param ctx the parse tree
	 */
	exitConstantDef?: (ctx: ConstantDefContext) => void;

	/**
	 * Enter a parse tree produced by `oncrpcv2Parser.typeDef`.
	 * @param ctx the parse tree
	 */
	enterTypeDef?: (ctx: TypeDefContext) => void;
	/**
	 * Exit a parse tree produced by `oncrpcv2Parser.typeDef`.
	 * @param ctx the parse tree
	 */
	exitTypeDef?: (ctx: TypeDefContext) => void;

	/**
	 * Enter a parse tree produced by `oncrpcv2Parser.definition`.
	 * @param ctx the parse tree
	 */
	enterDefinition?: (ctx: DefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `oncrpcv2Parser.definition`.
	 * @param ctx the parse tree
	 */
	exitDefinition?: (ctx: DefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `oncrpcv2Parser.xdrSpecification`.
	 * @param ctx the parse tree
	 */
	enterXdrSpecification?: (ctx: XdrSpecificationContext) => void;
	/**
	 * Exit a parse tree produced by `oncrpcv2Parser.xdrSpecification`.
	 * @param ctx the parse tree
	 */
	exitXdrSpecification?: (ctx: XdrSpecificationContext) => void;
}

