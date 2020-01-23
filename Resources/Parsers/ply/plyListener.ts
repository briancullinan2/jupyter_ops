// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/ply/ply.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `plyParser`.
 */
export interface plyListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `plyParser.ply`.
	 * @param ctx the parse tree
	 */
	enterPly?: (ctx: PlyContext) => void;
	/**
	 * Exit a parse tree produced by `plyParser.ply`.
	 * @param ctx the parse tree
	 */
	exitPly?: (ctx: PlyContext) => void;

	/**
	 * Enter a parse tree produced by `plyParser.header`.
	 * @param ctx the parse tree
	 */
	enterHeader?: (ctx: HeaderContext) => void;
	/**
	 * Exit a parse tree produced by `plyParser.header`.
	 * @param ctx the parse tree
	 */
	exitHeader?: (ctx: HeaderContext) => void;

	/**
	 * Enter a parse tree produced by `plyParser.end_header`.
	 * @param ctx the parse tree
	 */
	enterEnd_header?: (ctx: End_headerContext) => void;
	/**
	 * Exit a parse tree produced by `plyParser.end_header`.
	 * @param ctx the parse tree
	 */
	exitEnd_header?: (ctx: End_headerContext) => void;

	/**
	 * Enter a parse tree produced by `plyParser.format`.
	 * @param ctx the parse tree
	 */
	enterFormat?: (ctx: FormatContext) => void;
	/**
	 * Exit a parse tree produced by `plyParser.format`.
	 * @param ctx the parse tree
	 */
	exitFormat?: (ctx: FormatContext) => void;

	/**
	 * Enter a parse tree produced by `plyParser.element`.
	 * @param ctx the parse tree
	 */
	enterElement?: (ctx: ElementContext) => void;
	/**
	 * Exit a parse tree produced by `plyParser.element`.
	 * @param ctx the parse tree
	 */
	exitElement?: (ctx: ElementContext) => void;

	/**
	 * Enter a parse tree produced by `plyParser.property`.
	 * @param ctx the parse tree
	 */
	enterProperty?: (ctx: PropertyContext) => void;
	/**
	 * Exit a parse tree produced by `plyParser.property`.
	 * @param ctx the parse tree
	 */
	exitProperty?: (ctx: PropertyContext) => void;

	/**
	 * Enter a parse tree produced by `plyParser.scalarproperty`.
	 * @param ctx the parse tree
	 */
	enterScalarproperty?: (ctx: ScalarpropertyContext) => void;
	/**
	 * Exit a parse tree produced by `plyParser.scalarproperty`.
	 * @param ctx the parse tree
	 */
	exitScalarproperty?: (ctx: ScalarpropertyContext) => void;

	/**
	 * Enter a parse tree produced by `plyParser.listproperty`.
	 * @param ctx the parse tree
	 */
	enterListproperty?: (ctx: ListpropertyContext) => void;
	/**
	 * Exit a parse tree produced by `plyParser.listproperty`.
	 * @param ctx the parse tree
	 */
	exitListproperty?: (ctx: ListpropertyContext) => void;

	/**
	 * Enter a parse tree produced by `plyParser.type`.
	 * @param ctx the parse tree
	 */
	enterType?: (ctx: TypeContext) => void;
	/**
	 * Exit a parse tree produced by `plyParser.type`.
	 * @param ctx the parse tree
	 */
	exitType?: (ctx: TypeContext) => void;

	/**
	 * Enter a parse tree produced by `plyParser.plydeclaration`.
	 * @param ctx the parse tree
	 */
	enterPlydeclaration?: (ctx: PlydeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `plyParser.plydeclaration`.
	 * @param ctx the parse tree
	 */
	exitPlydeclaration?: (ctx: PlydeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `plyParser.vertices`.
	 * @param ctx the parse tree
	 */
	enterVertices?: (ctx: VerticesContext) => void;
	/**
	 * Exit a parse tree produced by `plyParser.vertices`.
	 * @param ctx the parse tree
	 */
	exitVertices?: (ctx: VerticesContext) => void;

	/**
	 * Enter a parse tree produced by `plyParser.faces`.
	 * @param ctx the parse tree
	 */
	enterFaces?: (ctx: FacesContext) => void;
	/**
	 * Exit a parse tree produced by `plyParser.faces`.
	 * @param ctx the parse tree
	 */
	exitFaces?: (ctx: FacesContext) => void;

	/**
	 * Enter a parse tree produced by `plyParser.vertex`.
	 * @param ctx the parse tree
	 */
	enterVertex?: (ctx: VertexContext) => void;
	/**
	 * Exit a parse tree produced by `plyParser.vertex`.
	 * @param ctx the parse tree
	 */
	exitVertex?: (ctx: VertexContext) => void;

	/**
	 * Enter a parse tree produced by `plyParser.face`.
	 * @param ctx the parse tree
	 */
	enterFace?: (ctx: FaceContext) => void;
	/**
	 * Exit a parse tree produced by `plyParser.face`.
	 * @param ctx the parse tree
	 */
	exitFace?: (ctx: FaceContext) => void;

	/**
	 * Enter a parse tree produced by `plyParser.number`.
	 * @param ctx the parse tree
	 */
	enterNumber?: (ctx: NumberContext) => void;
	/**
	 * Exit a parse tree produced by `plyParser.number`.
	 * @param ctx the parse tree
	 */
	exitNumber?: (ctx: NumberContext) => void;

	/**
	 * Enter a parse tree produced by `plyParser.string`.
	 * @param ctx the parse tree
	 */
	enterString?: (ctx: StringContext) => void;
	/**
	 * Exit a parse tree produced by `plyParser.string`.
	 * @param ctx the parse tree
	 */
	exitString?: (ctx: StringContext) => void;
}

