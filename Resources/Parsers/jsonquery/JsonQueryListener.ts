// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/jsonquery/JsonQuery.g4 by ANTLR 4.7.3-SNAPSHOT


    package ud.antlr.json;


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `JsonQueryParser`.
 */
export interface JsonQueryListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `parenExp`
	 * labeled alternative in `JsonQueryParser.query`.
	 * @param ctx the parse tree
	 */
	enterParenExp?: (ctx: ParenExpContext) => void;
	/**
	 * Exit a parse tree produced by the `parenExp`
	 * labeled alternative in `JsonQueryParser.query`.
	 * @param ctx the parse tree
	 */
	exitParenExp?: (ctx: ParenExpContext) => void;

	/**
	 * Enter a parse tree produced by the `logicalExp`
	 * labeled alternative in `JsonQueryParser.query`.
	 * @param ctx the parse tree
	 */
	enterLogicalExp?: (ctx: LogicalExpContext) => void;
	/**
	 * Exit a parse tree produced by the `logicalExp`
	 * labeled alternative in `JsonQueryParser.query`.
	 * @param ctx the parse tree
	 */
	exitLogicalExp?: (ctx: LogicalExpContext) => void;

	/**
	 * Enter a parse tree produced by the `presentExp`
	 * labeled alternative in `JsonQueryParser.query`.
	 * @param ctx the parse tree
	 */
	enterPresentExp?: (ctx: PresentExpContext) => void;
	/**
	 * Exit a parse tree produced by the `presentExp`
	 * labeled alternative in `JsonQueryParser.query`.
	 * @param ctx the parse tree
	 */
	exitPresentExp?: (ctx: PresentExpContext) => void;

	/**
	 * Enter a parse tree produced by the `compareExp`
	 * labeled alternative in `JsonQueryParser.query`.
	 * @param ctx the parse tree
	 */
	enterCompareExp?: (ctx: CompareExpContext) => void;
	/**
	 * Exit a parse tree produced by the `compareExp`
	 * labeled alternative in `JsonQueryParser.query`.
	 * @param ctx the parse tree
	 */
	exitCompareExp?: (ctx: CompareExpContext) => void;

	/**
	 * Enter a parse tree produced by the `boolean`
	 * labeled alternative in `JsonQueryParser.value`.
	 * @param ctx the parse tree
	 */
	enterBoolean?: (ctx: BooleanContext) => void;
	/**
	 * Exit a parse tree produced by the `boolean`
	 * labeled alternative in `JsonQueryParser.value`.
	 * @param ctx the parse tree
	 */
	exitBoolean?: (ctx: BooleanContext) => void;

	/**
	 * Enter a parse tree produced by the `null`
	 * labeled alternative in `JsonQueryParser.value`.
	 * @param ctx the parse tree
	 */
	enterNull?: (ctx: NullContext) => void;
	/**
	 * Exit a parse tree produced by the `null`
	 * labeled alternative in `JsonQueryParser.value`.
	 * @param ctx the parse tree
	 */
	exitNull?: (ctx: NullContext) => void;

	/**
	 * Enter a parse tree produced by the `string`
	 * labeled alternative in `JsonQueryParser.value`.
	 * @param ctx the parse tree
	 */
	enterString?: (ctx: StringContext) => void;
	/**
	 * Exit a parse tree produced by the `string`
	 * labeled alternative in `JsonQueryParser.value`.
	 * @param ctx the parse tree
	 */
	exitString?: (ctx: StringContext) => void;

	/**
	 * Enter a parse tree produced by the `double`
	 * labeled alternative in `JsonQueryParser.value`.
	 * @param ctx the parse tree
	 */
	enterDouble?: (ctx: DoubleContext) => void;
	/**
	 * Exit a parse tree produced by the `double`
	 * labeled alternative in `JsonQueryParser.value`.
	 * @param ctx the parse tree
	 */
	exitDouble?: (ctx: DoubleContext) => void;

	/**
	 * Enter a parse tree produced by the `long`
	 * labeled alternative in `JsonQueryParser.value`.
	 * @param ctx the parse tree
	 */
	enterLong?: (ctx: LongContext) => void;
	/**
	 * Exit a parse tree produced by the `long`
	 * labeled alternative in `JsonQueryParser.value`.
	 * @param ctx the parse tree
	 */
	exitLong?: (ctx: LongContext) => void;

	/**
	 * Enter a parse tree produced by `JsonQueryParser.query`.
	 * @param ctx the parse tree
	 */
	enterQuery?: (ctx: QueryContext) => void;
	/**
	 * Exit a parse tree produced by `JsonQueryParser.query`.
	 * @param ctx the parse tree
	 */
	exitQuery?: (ctx: QueryContext) => void;

	/**
	 * Enter a parse tree produced by `JsonQueryParser.attrPath`.
	 * @param ctx the parse tree
	 */
	enterAttrPath?: (ctx: AttrPathContext) => void;
	/**
	 * Exit a parse tree produced by `JsonQueryParser.attrPath`.
	 * @param ctx the parse tree
	 */
	exitAttrPath?: (ctx: AttrPathContext) => void;

	/**
	 * Enter a parse tree produced by `JsonQueryParser.subAttr`.
	 * @param ctx the parse tree
	 */
	enterSubAttr?: (ctx: SubAttrContext) => void;
	/**
	 * Exit a parse tree produced by `JsonQueryParser.subAttr`.
	 * @param ctx the parse tree
	 */
	exitSubAttr?: (ctx: SubAttrContext) => void;

	/**
	 * Enter a parse tree produced by `JsonQueryParser.value`.
	 * @param ctx the parse tree
	 */
	enterValue?: (ctx: ValueContext) => void;
	/**
	 * Exit a parse tree produced by `JsonQueryParser.value`.
	 * @param ctx the parse tree
	 */
	exitValue?: (ctx: ValueContext) => void;
}

