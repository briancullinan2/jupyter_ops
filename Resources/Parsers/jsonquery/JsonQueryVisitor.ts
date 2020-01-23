// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/jsonquery/JsonQuery.g4 by ANTLR 4.7.3-SNAPSHOT


    package ud.antlr.json;


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { ParenExpContext } from "./JsonQueryParser";
import { LogicalExpContext } from "./JsonQueryParser";
import { PresentExpContext } from "./JsonQueryParser";
import { CompareExpContext } from "./JsonQueryParser";
import { BooleanContext } from "./JsonQueryParser";
import { NullContext } from "./JsonQueryParser";
import { StringContext } from "./JsonQueryParser";
import { DoubleContext } from "./JsonQueryParser";
import { LongContext } from "./JsonQueryParser";
import { QueryContext } from "./JsonQueryParser";
import { AttrPathContext } from "./JsonQueryParser";
import { SubAttrContext } from "./JsonQueryParser";
import { ValueContext } from "./JsonQueryParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `JsonQueryParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface JsonQueryVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `parenExp`
	 * labeled alternative in `JsonQueryParser.query`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParenExp?: (ctx: ParenExpContext) => Result;

	/**
	 * Visit a parse tree produced by the `logicalExp`
	 * labeled alternative in `JsonQueryParser.query`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalExp?: (ctx: LogicalExpContext) => Result;

	/**
	 * Visit a parse tree produced by the `presentExp`
	 * labeled alternative in `JsonQueryParser.query`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPresentExp?: (ctx: PresentExpContext) => Result;

	/**
	 * Visit a parse tree produced by the `compareExp`
	 * labeled alternative in `JsonQueryParser.query`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompareExp?: (ctx: CompareExpContext) => Result;

	/**
	 * Visit a parse tree produced by the `boolean`
	 * labeled alternative in `JsonQueryParser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBoolean?: (ctx: BooleanContext) => Result;

	/**
	 * Visit a parse tree produced by the `null`
	 * labeled alternative in `JsonQueryParser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNull?: (ctx: NullContext) => Result;

	/**
	 * Visit a parse tree produced by the `string`
	 * labeled alternative in `JsonQueryParser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitString?: (ctx: StringContext) => Result;

	/**
	 * Visit a parse tree produced by the `double`
	 * labeled alternative in `JsonQueryParser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDouble?: (ctx: DoubleContext) => Result;

	/**
	 * Visit a parse tree produced by the `long`
	 * labeled alternative in `JsonQueryParser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLong?: (ctx: LongContext) => Result;

	/**
	 * Visit a parse tree produced by `JsonQueryParser.query`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuery?: (ctx: QueryContext) => Result;

	/**
	 * Visit a parse tree produced by `JsonQueryParser.attrPath`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttrPath?: (ctx: AttrPathContext) => Result;

	/**
	 * Visit a parse tree produced by `JsonQueryParser.subAttr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubAttr?: (ctx: SubAttrContext) => Result;

	/**
	 * Visit a parse tree produced by `JsonQueryParser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValue?: (ctx: ValueContext) => Result;
}

