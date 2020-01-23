// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/graphstream-dgs/DGSParser.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `DGSParser`.
 */
export interface DGSParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `DGSParser.dgs`.
	 * @param ctx the parse tree
	 */
	enterDgs?: (ctx: DgsContext) => void;
	/**
	 * Exit a parse tree produced by `DGSParser.dgs`.
	 * @param ctx the parse tree
	 */
	exitDgs?: (ctx: DgsContext) => void;

	/**
	 * Enter a parse tree produced by `DGSParser.header`.
	 * @param ctx the parse tree
	 */
	enterHeader?: (ctx: HeaderContext) => void;
	/**
	 * Exit a parse tree produced by `DGSParser.header`.
	 * @param ctx the parse tree
	 */
	exitHeader?: (ctx: HeaderContext) => void;

	/**
	 * Enter a parse tree produced by `DGSParser.event`.
	 * @param ctx the parse tree
	 */
	enterEvent?: (ctx: EventContext) => void;
	/**
	 * Exit a parse tree produced by `DGSParser.event`.
	 * @param ctx the parse tree
	 */
	exitEvent?: (ctx: EventContext) => void;

	/**
	 * Enter a parse tree produced by `DGSParser.an`.
	 * @param ctx the parse tree
	 */
	enterAn?: (ctx: AnContext) => void;
	/**
	 * Exit a parse tree produced by `DGSParser.an`.
	 * @param ctx the parse tree
	 */
	exitAn?: (ctx: AnContext) => void;

	/**
	 * Enter a parse tree produced by `DGSParser.cn`.
	 * @param ctx the parse tree
	 */
	enterCn?: (ctx: CnContext) => void;
	/**
	 * Exit a parse tree produced by `DGSParser.cn`.
	 * @param ctx the parse tree
	 */
	exitCn?: (ctx: CnContext) => void;

	/**
	 * Enter a parse tree produced by `DGSParser.dn`.
	 * @param ctx the parse tree
	 */
	enterDn?: (ctx: DnContext) => void;
	/**
	 * Exit a parse tree produced by `DGSParser.dn`.
	 * @param ctx the parse tree
	 */
	exitDn?: (ctx: DnContext) => void;

	/**
	 * Enter a parse tree produced by `DGSParser.ae`.
	 * @param ctx the parse tree
	 */
	enterAe?: (ctx: AeContext) => void;
	/**
	 * Exit a parse tree produced by `DGSParser.ae`.
	 * @param ctx the parse tree
	 */
	exitAe?: (ctx: AeContext) => void;

	/**
	 * Enter a parse tree produced by `DGSParser.ce`.
	 * @param ctx the parse tree
	 */
	enterCe?: (ctx: CeContext) => void;
	/**
	 * Exit a parse tree produced by `DGSParser.ce`.
	 * @param ctx the parse tree
	 */
	exitCe?: (ctx: CeContext) => void;

	/**
	 * Enter a parse tree produced by `DGSParser.de`.
	 * @param ctx the parse tree
	 */
	enterDe?: (ctx: DeContext) => void;
	/**
	 * Exit a parse tree produced by `DGSParser.de`.
	 * @param ctx the parse tree
	 */
	exitDe?: (ctx: DeContext) => void;

	/**
	 * Enter a parse tree produced by `DGSParser.cg`.
	 * @param ctx the parse tree
	 */
	enterCg?: (ctx: CgContext) => void;
	/**
	 * Exit a parse tree produced by `DGSParser.cg`.
	 * @param ctx the parse tree
	 */
	exitCg?: (ctx: CgContext) => void;

	/**
	 * Enter a parse tree produced by `DGSParser.st`.
	 * @param ctx the parse tree
	 */
	enterSt?: (ctx: StContext) => void;
	/**
	 * Exit a parse tree produced by `DGSParser.st`.
	 * @param ctx the parse tree
	 */
	exitSt?: (ctx: StContext) => void;

	/**
	 * Enter a parse tree produced by `DGSParser.cl`.
	 * @param ctx the parse tree
	 */
	enterCl?: (ctx: ClContext) => void;
	/**
	 * Exit a parse tree produced by `DGSParser.cl`.
	 * @param ctx the parse tree
	 */
	exitCl?: (ctx: ClContext) => void;

	/**
	 * Enter a parse tree produced by `DGSParser.attributes`.
	 * @param ctx the parse tree
	 */
	enterAttributes?: (ctx: AttributesContext) => void;
	/**
	 * Exit a parse tree produced by `DGSParser.attributes`.
	 * @param ctx the parse tree
	 */
	exitAttributes?: (ctx: AttributesContext) => void;

	/**
	 * Enter a parse tree produced by `DGSParser.attribute`.
	 * @param ctx the parse tree
	 */
	enterAttribute?: (ctx: AttributeContext) => void;
	/**
	 * Exit a parse tree produced by `DGSParser.attribute`.
	 * @param ctx the parse tree
	 */
	exitAttribute?: (ctx: AttributeContext) => void;

	/**
	 * Enter a parse tree produced by `DGSParser.value`.
	 * @param ctx the parse tree
	 */
	enterValue?: (ctx: ValueContext) => void;
	/**
	 * Exit a parse tree produced by `DGSParser.value`.
	 * @param ctx the parse tree
	 */
	exitValue?: (ctx: ValueContext) => void;

	/**
	 * Enter a parse tree produced by `DGSParser.array`.
	 * @param ctx the parse tree
	 */
	enterArray?: (ctx: ArrayContext) => void;
	/**
	 * Exit a parse tree produced by `DGSParser.array`.
	 * @param ctx the parse tree
	 */
	exitArray?: (ctx: ArrayContext) => void;

	/**
	 * Enter a parse tree produced by `DGSParser.a_map`.
	 * @param ctx the parse tree
	 */
	enterA_map?: (ctx: A_mapContext) => void;
	/**
	 * Exit a parse tree produced by `DGSParser.a_map`.
	 * @param ctx the parse tree
	 */
	exitA_map?: (ctx: A_mapContext) => void;

	/**
	 * Enter a parse tree produced by `DGSParser.mapping`.
	 * @param ctx the parse tree
	 */
	enterMapping?: (ctx: MappingContext) => void;
	/**
	 * Exit a parse tree produced by `DGSParser.mapping`.
	 * @param ctx the parse tree
	 */
	exitMapping?: (ctx: MappingContext) => void;

	/**
	 * Enter a parse tree produced by `DGSParser.direction`.
	 * @param ctx the parse tree
	 */
	enterDirection?: (ctx: DirectionContext) => void;
	/**
	 * Exit a parse tree produced by `DGSParser.direction`.
	 * @param ctx the parse tree
	 */
	exitDirection?: (ctx: DirectionContext) => void;

	/**
	 * Enter a parse tree produced by `DGSParser.assign`.
	 * @param ctx the parse tree
	 */
	enterAssign?: (ctx: AssignContext) => void;
	/**
	 * Exit a parse tree produced by `DGSParser.assign`.
	 * @param ctx the parse tree
	 */
	exitAssign?: (ctx: AssignContext) => void;

	/**
	 * Enter a parse tree produced by `DGSParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `DGSParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitIdentifier?: (ctx: IdentifierContext) => void;
}

