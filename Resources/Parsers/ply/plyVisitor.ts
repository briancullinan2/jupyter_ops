// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/ply/ply.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { PlyContext } from "./plyParser";
import { HeaderContext } from "./plyParser";
import { End_headerContext } from "./plyParser";
import { FormatContext } from "./plyParser";
import { ElementContext } from "./plyParser";
import { PropertyContext } from "./plyParser";
import { ScalarpropertyContext } from "./plyParser";
import { ListpropertyContext } from "./plyParser";
import { TypeContext } from "./plyParser";
import { PlydeclarationContext } from "./plyParser";
import { VerticesContext } from "./plyParser";
import { FacesContext } from "./plyParser";
import { VertexContext } from "./plyParser";
import { FaceContext } from "./plyParser";
import { NumberContext } from "./plyParser";
import { StringContext } from "./plyParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `plyParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface plyVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `plyParser.ply`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPly?: (ctx: PlyContext) => Result;

	/**
	 * Visit a parse tree produced by `plyParser.header`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHeader?: (ctx: HeaderContext) => Result;

	/**
	 * Visit a parse tree produced by `plyParser.end_header`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnd_header?: (ctx: End_headerContext) => Result;

	/**
	 * Visit a parse tree produced by `plyParser.format`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFormat?: (ctx: FormatContext) => Result;

	/**
	 * Visit a parse tree produced by `plyParser.element`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElement?: (ctx: ElementContext) => Result;

	/**
	 * Visit a parse tree produced by `plyParser.property`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProperty?: (ctx: PropertyContext) => Result;

	/**
	 * Visit a parse tree produced by `plyParser.scalarproperty`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScalarproperty?: (ctx: ScalarpropertyContext) => Result;

	/**
	 * Visit a parse tree produced by `plyParser.listproperty`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitListproperty?: (ctx: ListpropertyContext) => Result;

	/**
	 * Visit a parse tree produced by `plyParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType?: (ctx: TypeContext) => Result;

	/**
	 * Visit a parse tree produced by `plyParser.plydeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPlydeclaration?: (ctx: PlydeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `plyParser.vertices`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVertices?: (ctx: VerticesContext) => Result;

	/**
	 * Visit a parse tree produced by `plyParser.faces`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFaces?: (ctx: FacesContext) => Result;

	/**
	 * Visit a parse tree produced by `plyParser.vertex`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVertex?: (ctx: VertexContext) => Result;

	/**
	 * Visit a parse tree produced by `plyParser.face`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFace?: (ctx: FaceContext) => Result;

	/**
	 * Visit a parse tree produced by `plyParser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumber?: (ctx: NumberContext) => Result;

	/**
	 * Visit a parse tree produced by `plyParser.string`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitString?: (ctx: StringContext) => Result;
}

