// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/muddb/muddb.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { DbContext } from "./muddbParser";
import { RoomContext } from "./muddbParser";
import { RoomnoContext } from "./muddbParser";
import { NameContext } from "./muddbParser";
import { DescriptionContext } from "./muddbParser";
import { LocationContext } from "./muddbParser";
import { ContentsContext } from "./muddbParser";
import { ExitsContext } from "./muddbParser";
import { NextContext } from "./muddbParser";
import { KeyContext } from "./muddbParser";
import { Fail_messageContext } from "./muddbParser";
import { Succ_messageContext } from "./muddbParser";
import { OfailContext } from "./muddbParser";
import { OsuccessContext } from "./muddbParser";
import { OwnerContext } from "./muddbParser";
import { PenniesContext } from "./muddbParser";
import { FlagsContext } from "./muddbParser";
import { PasswordContext } from "./muddbParser";
import { StringContext } from "./muddbParser";
import { RefContext } from "./muddbParser";
import { BoolContext } from "./muddbParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `muddbParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface muddbVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `muddbParser.db`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDb?: (ctx: DbContext) => Result;

	/**
	 * Visit a parse tree produced by `muddbParser.room`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRoom?: (ctx: RoomContext) => Result;

	/**
	 * Visit a parse tree produced by `muddbParser.roomno`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRoomno?: (ctx: RoomnoContext) => Result;

	/**
	 * Visit a parse tree produced by `muddbParser.name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitName?: (ctx: NameContext) => Result;

	/**
	 * Visit a parse tree produced by `muddbParser.description`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDescription?: (ctx: DescriptionContext) => Result;

	/**
	 * Visit a parse tree produced by `muddbParser.location`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocation?: (ctx: LocationContext) => Result;

	/**
	 * Visit a parse tree produced by `muddbParser.contents`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitContents?: (ctx: ContentsContext) => Result;

	/**
	 * Visit a parse tree produced by `muddbParser.exits`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExits?: (ctx: ExitsContext) => Result;

	/**
	 * Visit a parse tree produced by `muddbParser.next`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNext?: (ctx: NextContext) => Result;

	/**
	 * Visit a parse tree produced by `muddbParser.key`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKey?: (ctx: KeyContext) => Result;

	/**
	 * Visit a parse tree produced by `muddbParser.fail_message`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFail_message?: (ctx: Fail_messageContext) => Result;

	/**
	 * Visit a parse tree produced by `muddbParser.succ_message`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSucc_message?: (ctx: Succ_messageContext) => Result;

	/**
	 * Visit a parse tree produced by `muddbParser.ofail`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOfail?: (ctx: OfailContext) => Result;

	/**
	 * Visit a parse tree produced by `muddbParser.osuccess`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOsuccess?: (ctx: OsuccessContext) => Result;

	/**
	 * Visit a parse tree produced by `muddbParser.owner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOwner?: (ctx: OwnerContext) => Result;

	/**
	 * Visit a parse tree produced by `muddbParser.pennies`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPennies?: (ctx: PenniesContext) => Result;

	/**
	 * Visit a parse tree produced by `muddbParser.flags`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFlags?: (ctx: FlagsContext) => Result;

	/**
	 * Visit a parse tree produced by `muddbParser.password`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPassword?: (ctx: PasswordContext) => Result;

	/**
	 * Visit a parse tree produced by `muddbParser.string`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitString?: (ctx: StringContext) => Result;

	/**
	 * Visit a parse tree produced by `muddbParser.ref`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRef?: (ctx: RefContext) => Result;

	/**
	 * Visit a parse tree produced by `muddbParser.bool`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBool?: (ctx: BoolContext) => Result;
}

