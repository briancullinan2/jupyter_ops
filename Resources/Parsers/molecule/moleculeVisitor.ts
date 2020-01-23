// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/molecule/molecule.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { MoleculeContext } from "./moleculeParser";
import { PartContext } from "./moleculeParser";
import { StructureContext } from "./moleculeParser";
import { SymbolContext } from "./moleculeParser";
import { GroupContext } from "./moleculeParser";
import { IonContext } from "./moleculeParser";
import { ElementContext } from "./moleculeParser";
import { CountContext } from "./moleculeParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `moleculeParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface moleculeVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `moleculeParser.molecule`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMolecule?: (ctx: MoleculeContext) => Result;

	/**
	 * Visit a parse tree produced by `moleculeParser.part`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPart?: (ctx: PartContext) => Result;

	/**
	 * Visit a parse tree produced by `moleculeParser.structure`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStructure?: (ctx: StructureContext) => Result;

	/**
	 * Visit a parse tree produced by `moleculeParser.symbol`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSymbol?: (ctx: SymbolContext) => Result;

	/**
	 * Visit a parse tree produced by `moleculeParser.group`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroup?: (ctx: GroupContext) => Result;

	/**
	 * Visit a parse tree produced by `moleculeParser.ion`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIon?: (ctx: IonContext) => Result;

	/**
	 * Visit a parse tree produced by `moleculeParser.element`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElement?: (ctx: ElementContext) => Result;

	/**
	 * Visit a parse tree produced by `moleculeParser.count`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCount?: (ctx: CountContext) => Result;
}

