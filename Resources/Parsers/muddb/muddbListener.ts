// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/muddb/muddb.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `muddbParser`.
 */
export interface muddbListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `muddbParser.db`.
	 * @param ctx the parse tree
	 */
	enterDb?: (ctx: DbContext) => void;
	/**
	 * Exit a parse tree produced by `muddbParser.db`.
	 * @param ctx the parse tree
	 */
	exitDb?: (ctx: DbContext) => void;

	/**
	 * Enter a parse tree produced by `muddbParser.room`.
	 * @param ctx the parse tree
	 */
	enterRoom?: (ctx: RoomContext) => void;
	/**
	 * Exit a parse tree produced by `muddbParser.room`.
	 * @param ctx the parse tree
	 */
	exitRoom?: (ctx: RoomContext) => void;

	/**
	 * Enter a parse tree produced by `muddbParser.roomno`.
	 * @param ctx the parse tree
	 */
	enterRoomno?: (ctx: RoomnoContext) => void;
	/**
	 * Exit a parse tree produced by `muddbParser.roomno`.
	 * @param ctx the parse tree
	 */
	exitRoomno?: (ctx: RoomnoContext) => void;

	/**
	 * Enter a parse tree produced by `muddbParser.name`.
	 * @param ctx the parse tree
	 */
	enterName?: (ctx: NameContext) => void;
	/**
	 * Exit a parse tree produced by `muddbParser.name`.
	 * @param ctx the parse tree
	 */
	exitName?: (ctx: NameContext) => void;

	/**
	 * Enter a parse tree produced by `muddbParser.description`.
	 * @param ctx the parse tree
	 */
	enterDescription?: (ctx: DescriptionContext) => void;
	/**
	 * Exit a parse tree produced by `muddbParser.description`.
	 * @param ctx the parse tree
	 */
	exitDescription?: (ctx: DescriptionContext) => void;

	/**
	 * Enter a parse tree produced by `muddbParser.location`.
	 * @param ctx the parse tree
	 */
	enterLocation?: (ctx: LocationContext) => void;
	/**
	 * Exit a parse tree produced by `muddbParser.location`.
	 * @param ctx the parse tree
	 */
	exitLocation?: (ctx: LocationContext) => void;

	/**
	 * Enter a parse tree produced by `muddbParser.contents`.
	 * @param ctx the parse tree
	 */
	enterContents?: (ctx: ContentsContext) => void;
	/**
	 * Exit a parse tree produced by `muddbParser.contents`.
	 * @param ctx the parse tree
	 */
	exitContents?: (ctx: ContentsContext) => void;

	/**
	 * Enter a parse tree produced by `muddbParser.exits`.
	 * @param ctx the parse tree
	 */
	enterExits?: (ctx: ExitsContext) => void;
	/**
	 * Exit a parse tree produced by `muddbParser.exits`.
	 * @param ctx the parse tree
	 */
	exitExits?: (ctx: ExitsContext) => void;

	/**
	 * Enter a parse tree produced by `muddbParser.next`.
	 * @param ctx the parse tree
	 */
	enterNext?: (ctx: NextContext) => void;
	/**
	 * Exit a parse tree produced by `muddbParser.next`.
	 * @param ctx the parse tree
	 */
	exitNext?: (ctx: NextContext) => void;

	/**
	 * Enter a parse tree produced by `muddbParser.key`.
	 * @param ctx the parse tree
	 */
	enterKey?: (ctx: KeyContext) => void;
	/**
	 * Exit a parse tree produced by `muddbParser.key`.
	 * @param ctx the parse tree
	 */
	exitKey?: (ctx: KeyContext) => void;

	/**
	 * Enter a parse tree produced by `muddbParser.fail_message`.
	 * @param ctx the parse tree
	 */
	enterFail_message?: (ctx: Fail_messageContext) => void;
	/**
	 * Exit a parse tree produced by `muddbParser.fail_message`.
	 * @param ctx the parse tree
	 */
	exitFail_message?: (ctx: Fail_messageContext) => void;

	/**
	 * Enter a parse tree produced by `muddbParser.succ_message`.
	 * @param ctx the parse tree
	 */
	enterSucc_message?: (ctx: Succ_messageContext) => void;
	/**
	 * Exit a parse tree produced by `muddbParser.succ_message`.
	 * @param ctx the parse tree
	 */
	exitSucc_message?: (ctx: Succ_messageContext) => void;

	/**
	 * Enter a parse tree produced by `muddbParser.ofail`.
	 * @param ctx the parse tree
	 */
	enterOfail?: (ctx: OfailContext) => void;
	/**
	 * Exit a parse tree produced by `muddbParser.ofail`.
	 * @param ctx the parse tree
	 */
	exitOfail?: (ctx: OfailContext) => void;

	/**
	 * Enter a parse tree produced by `muddbParser.osuccess`.
	 * @param ctx the parse tree
	 */
	enterOsuccess?: (ctx: OsuccessContext) => void;
	/**
	 * Exit a parse tree produced by `muddbParser.osuccess`.
	 * @param ctx the parse tree
	 */
	exitOsuccess?: (ctx: OsuccessContext) => void;

	/**
	 * Enter a parse tree produced by `muddbParser.owner`.
	 * @param ctx the parse tree
	 */
	enterOwner?: (ctx: OwnerContext) => void;
	/**
	 * Exit a parse tree produced by `muddbParser.owner`.
	 * @param ctx the parse tree
	 */
	exitOwner?: (ctx: OwnerContext) => void;

	/**
	 * Enter a parse tree produced by `muddbParser.pennies`.
	 * @param ctx the parse tree
	 */
	enterPennies?: (ctx: PenniesContext) => void;
	/**
	 * Exit a parse tree produced by `muddbParser.pennies`.
	 * @param ctx the parse tree
	 */
	exitPennies?: (ctx: PenniesContext) => void;

	/**
	 * Enter a parse tree produced by `muddbParser.flags`.
	 * @param ctx the parse tree
	 */
	enterFlags?: (ctx: FlagsContext) => void;
	/**
	 * Exit a parse tree produced by `muddbParser.flags`.
	 * @param ctx the parse tree
	 */
	exitFlags?: (ctx: FlagsContext) => void;

	/**
	 * Enter a parse tree produced by `muddbParser.password`.
	 * @param ctx the parse tree
	 */
	enterPassword?: (ctx: PasswordContext) => void;
	/**
	 * Exit a parse tree produced by `muddbParser.password`.
	 * @param ctx the parse tree
	 */
	exitPassword?: (ctx: PasswordContext) => void;

	/**
	 * Enter a parse tree produced by `muddbParser.string`.
	 * @param ctx the parse tree
	 */
	enterString?: (ctx: StringContext) => void;
	/**
	 * Exit a parse tree produced by `muddbParser.string`.
	 * @param ctx the parse tree
	 */
	exitString?: (ctx: StringContext) => void;

	/**
	 * Enter a parse tree produced by `muddbParser.ref`.
	 * @param ctx the parse tree
	 */
	enterRef?: (ctx: RefContext) => void;
	/**
	 * Exit a parse tree produced by `muddbParser.ref`.
	 * @param ctx the parse tree
	 */
	exitRef?: (ctx: RefContext) => void;

	/**
	 * Enter a parse tree produced by `muddbParser.bool`.
	 * @param ctx the parse tree
	 */
	enterBool?: (ctx: BoolContext) => void;
	/**
	 * Exit a parse tree produced by `muddbParser.bool`.
	 * @param ctx the parse tree
	 */
	exitBool?: (ctx: BoolContext) => void;
}

