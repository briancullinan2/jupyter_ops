// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/wavefront/WavefrontOBJ.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { StartContext } from "./WavefrontOBJParser";
import { LineContext } from "./WavefrontOBJParser";
import { FaceContext } from "./WavefrontOBJParser";
import { VertexContext } from "./WavefrontOBJParser";
import { MtllibContext } from "./WavefrontOBJParser";
import { ObjectContext } from "./WavefrontOBJParser";
import { Use_materialContext } from "./WavefrontOBJParser";
import { GroupContext } from "./WavefrontOBJParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `WavefrontOBJParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface WavefrontOBJVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `WavefrontOBJParser.start`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStart?: (ctx: StartContext) => Result;

	/**
	 * Visit a parse tree produced by `WavefrontOBJParser.line`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLine?: (ctx: LineContext) => Result;

	/**
	 * Visit a parse tree produced by `WavefrontOBJParser.face`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFace?: (ctx: FaceContext) => Result;

	/**
	 * Visit a parse tree produced by `WavefrontOBJParser.vertex`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVertex?: (ctx: VertexContext) => Result;

	/**
	 * Visit a parse tree produced by `WavefrontOBJParser.mtllib`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMtllib?: (ctx: MtllibContext) => Result;

	/**
	 * Visit a parse tree produced by `WavefrontOBJParser.object`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObject?: (ctx: ObjectContext) => Result;

	/**
	 * Visit a parse tree produced by `WavefrontOBJParser.use_material`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUse_material?: (ctx: Use_materialContext) => Result;

	/**
	 * Visit a parse tree produced by `WavefrontOBJParser.group`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroup?: (ctx: GroupContext) => Result;
}

