// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/graphstream-dgs/DGSParser.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { DgsContext } from "./DGSParser";
import { HeaderContext } from "./DGSParser";
import { EventContext } from "./DGSParser";
import { AnContext } from "./DGSParser";
import { CnContext } from "./DGSParser";
import { DnContext } from "./DGSParser";
import { AeContext } from "./DGSParser";
import { CeContext } from "./DGSParser";
import { DeContext } from "./DGSParser";
import { CgContext } from "./DGSParser";
import { StContext } from "./DGSParser";
import { ClContext } from "./DGSParser";
import { AttributesContext } from "./DGSParser";
import { AttributeContext } from "./DGSParser";
import { ValueContext } from "./DGSParser";
import { ArrayContext } from "./DGSParser";
import { A_mapContext } from "./DGSParser";
import { MappingContext } from "./DGSParser";
import { DirectionContext } from "./DGSParser";
import { AssignContext } from "./DGSParser";
import { IdentifierContext } from "./DGSParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `DGSParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface DGSParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `DGSParser.dgs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDgs?: (ctx: DgsContext) => Result;

	/**
	 * Visit a parse tree produced by `DGSParser.header`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHeader?: (ctx: HeaderContext) => Result;

	/**
	 * Visit a parse tree produced by `DGSParser.event`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEvent?: (ctx: EventContext) => Result;

	/**
	 * Visit a parse tree produced by `DGSParser.an`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAn?: (ctx: AnContext) => Result;

	/**
	 * Visit a parse tree produced by `DGSParser.cn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCn?: (ctx: CnContext) => Result;

	/**
	 * Visit a parse tree produced by `DGSParser.dn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDn?: (ctx: DnContext) => Result;

	/**
	 * Visit a parse tree produced by `DGSParser.ae`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAe?: (ctx: AeContext) => Result;

	/**
	 * Visit a parse tree produced by `DGSParser.ce`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCe?: (ctx: CeContext) => Result;

	/**
	 * Visit a parse tree produced by `DGSParser.de`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDe?: (ctx: DeContext) => Result;

	/**
	 * Visit a parse tree produced by `DGSParser.cg`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCg?: (ctx: CgContext) => Result;

	/**
	 * Visit a parse tree produced by `DGSParser.st`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSt?: (ctx: StContext) => Result;

	/**
	 * Visit a parse tree produced by `DGSParser.cl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCl?: (ctx: ClContext) => Result;

	/**
	 * Visit a parse tree produced by `DGSParser.attributes`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttributes?: (ctx: AttributesContext) => Result;

	/**
	 * Visit a parse tree produced by `DGSParser.attribute`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttribute?: (ctx: AttributeContext) => Result;

	/**
	 * Visit a parse tree produced by `DGSParser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValue?: (ctx: ValueContext) => Result;

	/**
	 * Visit a parse tree produced by `DGSParser.array`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArray?: (ctx: ArrayContext) => Result;

	/**
	 * Visit a parse tree produced by `DGSParser.a_map`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitA_map?: (ctx: A_mapContext) => Result;

	/**
	 * Visit a parse tree produced by `DGSParser.mapping`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMapping?: (ctx: MappingContext) => Result;

	/**
	 * Visit a parse tree produced by `DGSParser.direction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDirection?: (ctx: DirectionContext) => Result;

	/**
	 * Visit a parse tree produced by `DGSParser.assign`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssign?: (ctx: AssignContext) => Result;

	/**
	 * Visit a parse tree produced by `DGSParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifier?: (ctx: IdentifierContext) => Result;
}

