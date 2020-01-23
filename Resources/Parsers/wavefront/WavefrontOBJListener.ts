// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/wavefront/WavefrontOBJ.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { StartContext } from "./WavefrontOBJParser";
import { LineContext } from "./WavefrontOBJParser";
import { FaceContext } from "./WavefrontOBJParser";
import { VertexContext } from "./WavefrontOBJParser";
import { MtllibContext } from "./WavefrontOBJParser";
import { ObjectContext } from "./WavefrontOBJParser";
import { Use_materialContext } from "./WavefrontOBJParser";
import { GroupContext } from "./WavefrontOBJParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `WavefrontOBJParser`.
 */
export interface WavefrontOBJListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `WavefrontOBJParser.start`.
	 * @param ctx the parse tree
	 */
	enterStart?: (ctx: StartContext) => void;
	/**
	 * Exit a parse tree produced by `WavefrontOBJParser.start`.
	 * @param ctx the parse tree
	 */
	exitStart?: (ctx: StartContext) => void;

	/**
	 * Enter a parse tree produced by `WavefrontOBJParser.line`.
	 * @param ctx the parse tree
	 */
	enterLine?: (ctx: LineContext) => void;
	/**
	 * Exit a parse tree produced by `WavefrontOBJParser.line`.
	 * @param ctx the parse tree
	 */
	exitLine?: (ctx: LineContext) => void;

	/**
	 * Enter a parse tree produced by `WavefrontOBJParser.face`.
	 * @param ctx the parse tree
	 */
	enterFace?: (ctx: FaceContext) => void;
	/**
	 * Exit a parse tree produced by `WavefrontOBJParser.face`.
	 * @param ctx the parse tree
	 */
	exitFace?: (ctx: FaceContext) => void;

	/**
	 * Enter a parse tree produced by `WavefrontOBJParser.vertex`.
	 * @param ctx the parse tree
	 */
	enterVertex?: (ctx: VertexContext) => void;
	/**
	 * Exit a parse tree produced by `WavefrontOBJParser.vertex`.
	 * @param ctx the parse tree
	 */
	exitVertex?: (ctx: VertexContext) => void;

	/**
	 * Enter a parse tree produced by `WavefrontOBJParser.mtllib`.
	 * @param ctx the parse tree
	 */
	enterMtllib?: (ctx: MtllibContext) => void;
	/**
	 * Exit a parse tree produced by `WavefrontOBJParser.mtllib`.
	 * @param ctx the parse tree
	 */
	exitMtllib?: (ctx: MtllibContext) => void;

	/**
	 * Enter a parse tree produced by `WavefrontOBJParser.object`.
	 * @param ctx the parse tree
	 */
	enterObject?: (ctx: ObjectContext) => void;
	/**
	 * Exit a parse tree produced by `WavefrontOBJParser.object`.
	 * @param ctx the parse tree
	 */
	exitObject?: (ctx: ObjectContext) => void;

	/**
	 * Enter a parse tree produced by `WavefrontOBJParser.use_material`.
	 * @param ctx the parse tree
	 */
	enterUse_material?: (ctx: Use_materialContext) => void;
	/**
	 * Exit a parse tree produced by `WavefrontOBJParser.use_material`.
	 * @param ctx the parse tree
	 */
	exitUse_material?: (ctx: Use_materialContext) => void;

	/**
	 * Enter a parse tree produced by `WavefrontOBJParser.group`.
	 * @param ctx the parse tree
	 */
	enterGroup?: (ctx: GroupContext) => void;
	/**
	 * Exit a parse tree produced by `WavefrontOBJParser.group`.
	 * @param ctx the parse tree
	 */
	exitGroup?: (ctx: GroupContext) => void;
}

