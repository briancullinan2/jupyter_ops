// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/tinymud/tinymud.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { ProgContext } from "./tinymudParser";
import { LineContext } from "./tinymudParser";
import { CommandContext } from "./tinymudParser";
import { BootcommandContext } from "./tinymudParser";
import { ChowncommandContext } from "./tinymudParser";
import { CreatecommandContext } from "./tinymudParser";
import { DescribecommandContext } from "./tinymudParser";
import { DigcommandContext } from "./tinymudParser";
import { DumpcommandContext } from "./tinymudParser";
import { FailcommandContext } from "./tinymudParser";
import { FindcommandContext } from "./tinymudParser";
import { ForcecommandContext } from "./tinymudParser";
import { LinkcommandContext } from "./tinymudParser";
import { LockcommandContext } from "./tinymudParser";
import { NamecommandContext } from "./tinymudParser";
import { NewpassswordcommandContext } from "./tinymudParser";
import { OfailcommandContext } from "./tinymudParser";
import { OpencommandContext } from "./tinymudParser";
import { OsuccesscommandContext } from "./tinymudParser";
import { PasswordcommandContext } from "./tinymudParser";
import { PcreatecommandContext } from "./tinymudParser";
import { SetcommandContext } from "./tinymudParser";
import { ShutdowncommandContext } from "./tinymudParser";
import { StatscommandContext } from "./tinymudParser";
import { SuccesscommandContext } from "./tinymudParser";
import { TeleportcommandContext } from "./tinymudParser";
import { ToadcommandContext } from "./tinymudParser";
import { UnlinkcommandContext } from "./tinymudParser";
import { UnlockcommandContext } from "./tinymudParser";
import { WallcommandContext } from "./tinymudParser";
import { ActionContext } from "./tinymudParser";
import { DropactionContext } from "./tinymudParser";
import { ExamineactionContext } from "./tinymudParser";
import { GetactionContext } from "./tinymudParser";
import { GiveactionContext } from "./tinymudParser";
import { GotoactionContext } from "./tinymudParser";
import { GripeactionContext } from "./tinymudParser";
import { HelpactionContext } from "./tinymudParser";
import { InventoryactionContext } from "./tinymudParser";
import { KillactionContext } from "./tinymudParser";
import { LookactionContext } from "./tinymudParser";
import { NewsactionContext } from "./tinymudParser";
import { PageactionContext } from "./tinymudParser";
import { QuitactionContext } from "./tinymudParser";
import { RobactionContext } from "./tinymudParser";
import { SayactionContext } from "./tinymudParser";
import { ScoreactionContext } from "./tinymudParser";
import { WhisperactionContext } from "./tinymudParser";
import { WhoactionContext } from "./tinymudParser";
import { ObjectContext } from "./tinymudParser";
import { PlayerContext } from "./tinymudParser";
import { NameContext } from "./tinymudParser";
import { DescriptionContext } from "./tinymudParser";
import { CostContext } from "./tinymudParser";
import { KeyContext } from "./tinymudParser";
import { PasswordContext } from "./tinymudParser";
import { MessageContext } from "./tinymudParser";
import { DirContext } from "./tinymudParser";
import { NumberContext } from "./tinymudParser";
import { RoomContext } from "./tinymudParser";
import { FlagContext } from "./tinymudParser";
import { PenniesContext } from "./tinymudParser";
import { DirectionContext } from "./tinymudParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `tinymudParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface tinymudVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `tinymudParser.prog`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProg?: (ctx: ProgContext) => Result;

	/**
	 * Visit a parse tree produced by `tinymudParser.line`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLine?: (ctx: LineContext) => Result;

	/**
	 * Visit a parse tree produced by `tinymudParser.command`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommand?: (ctx: CommandContext) => Result;

	/**
	 * Visit a parse tree produced by `tinymudParser.bootcommand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBootcommand?: (ctx: BootcommandContext) => Result;

	/**
	 * Visit a parse tree produced by `tinymudParser.chowncommand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitChowncommand?: (ctx: ChowncommandContext) => Result;

	/**
	 * Visit a parse tree produced by `tinymudParser.createcommand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreatecommand?: (ctx: CreatecommandContext) => Result;

	/**
	 * Visit a parse tree produced by `tinymudParser.describecommand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDescribecommand?: (ctx: DescribecommandContext) => Result;

	/**
	 * Visit a parse tree produced by `tinymudParser.digcommand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDigcommand?: (ctx: DigcommandContext) => Result;

	/**
	 * Visit a parse tree produced by `tinymudParser.dumpcommand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDumpcommand?: (ctx: DumpcommandContext) => Result;

	/**
	 * Visit a parse tree produced by `tinymudParser.failcommand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFailcommand?: (ctx: FailcommandContext) => Result;

	/**
	 * Visit a parse tree produced by `tinymudParser.findcommand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFindcommand?: (ctx: FindcommandContext) => Result;

	/**
	 * Visit a parse tree produced by `tinymudParser.forcecommand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForcecommand?: (ctx: ForcecommandContext) => Result;

	/**
	 * Visit a parse tree produced by `tinymudParser.linkcommand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLinkcommand?: (ctx: LinkcommandContext) => Result;

	/**
	 * Visit a parse tree produced by `tinymudParser.lockcommand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLockcommand?: (ctx: LockcommandContext) => Result;

	/**
	 * Visit a parse tree produced by `tinymudParser.namecommand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamecommand?: (ctx: NamecommandContext) => Result;

	/**
	 * Visit a parse tree produced by `tinymudParser.newpassswordcommand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNewpassswordcommand?: (ctx: NewpassswordcommandContext) => Result;

	/**
	 * Visit a parse tree produced by `tinymudParser.ofailcommand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOfailcommand?: (ctx: OfailcommandContext) => Result;

	/**
	 * Visit a parse tree produced by `tinymudParser.opencommand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOpencommand?: (ctx: OpencommandContext) => Result;

	/**
	 * Visit a parse tree produced by `tinymudParser.osuccesscommand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOsuccesscommand?: (ctx: OsuccesscommandContext) => Result;

	/**
	 * Visit a parse tree produced by `tinymudParser.passwordcommand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPasswordcommand?: (ctx: PasswordcommandContext) => Result;

	/**
	 * Visit a parse tree produced by `tinymudParser.pcreatecommand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPcreatecommand?: (ctx: PcreatecommandContext) => Result;

	/**
	 * Visit a parse tree produced by `tinymudParser.setcommand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetcommand?: (ctx: SetcommandContext) => Result;

	/**
	 * Visit a parse tree produced by `tinymudParser.shutdowncommand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShutdowncommand?: (ctx: ShutdowncommandContext) => Result;

	/**
	 * Visit a parse tree produced by `tinymudParser.statscommand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatscommand?: (ctx: StatscommandContext) => Result;

	/**
	 * Visit a parse tree produced by `tinymudParser.successcommand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSuccesscommand?: (ctx: SuccesscommandContext) => Result;

	/**
	 * Visit a parse tree produced by `tinymudParser.teleportcommand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTeleportcommand?: (ctx: TeleportcommandContext) => Result;

	/**
	 * Visit a parse tree produced by `tinymudParser.toadcommand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitToadcommand?: (ctx: ToadcommandContext) => Result;

	/**
	 * Visit a parse tree produced by `tinymudParser.unlinkcommand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnlinkcommand?: (ctx: UnlinkcommandContext) => Result;

	/**
	 * Visit a parse tree produced by `tinymudParser.unlockcommand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnlockcommand?: (ctx: UnlockcommandContext) => Result;

	/**
	 * Visit a parse tree produced by `tinymudParser.wallcommand`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWallcommand?: (ctx: WallcommandContext) => Result;

	/**
	 * Visit a parse tree produced by `tinymudParser.action`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAction?: (ctx: ActionContext) => Result;

	/**
	 * Visit a parse tree produced by `tinymudParser.dropaction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropaction?: (ctx: DropactionContext) => Result;

	/**
	 * Visit a parse tree produced by `tinymudParser.examineaction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExamineaction?: (ctx: ExamineactionContext) => Result;

	/**
	 * Visit a parse tree produced by `tinymudParser.getaction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGetaction?: (ctx: GetactionContext) => Result;

	/**
	 * Visit a parse tree produced by `tinymudParser.giveaction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGiveaction?: (ctx: GiveactionContext) => Result;

	/**
	 * Visit a parse tree produced by `tinymudParser.gotoaction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGotoaction?: (ctx: GotoactionContext) => Result;

	/**
	 * Visit a parse tree produced by `tinymudParser.gripeaction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGripeaction?: (ctx: GripeactionContext) => Result;

	/**
	 * Visit a parse tree produced by `tinymudParser.helpaction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHelpaction?: (ctx: HelpactionContext) => Result;

	/**
	 * Visit a parse tree produced by `tinymudParser.inventoryaction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInventoryaction?: (ctx: InventoryactionContext) => Result;

	/**
	 * Visit a parse tree produced by `tinymudParser.killaction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKillaction?: (ctx: KillactionContext) => Result;

	/**
	 * Visit a parse tree produced by `tinymudParser.lookaction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLookaction?: (ctx: LookactionContext) => Result;

	/**
	 * Visit a parse tree produced by `tinymudParser.newsaction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNewsaction?: (ctx: NewsactionContext) => Result;

	/**
	 * Visit a parse tree produced by `tinymudParser.pageaction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPageaction?: (ctx: PageactionContext) => Result;

	/**
	 * Visit a parse tree produced by `tinymudParser.quitaction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuitaction?: (ctx: QuitactionContext) => Result;

	/**
	 * Visit a parse tree produced by `tinymudParser.robaction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRobaction?: (ctx: RobactionContext) => Result;

	/**
	 * Visit a parse tree produced by `tinymudParser.sayaction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSayaction?: (ctx: SayactionContext) => Result;

	/**
	 * Visit a parse tree produced by `tinymudParser.scoreaction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScoreaction?: (ctx: ScoreactionContext) => Result;

	/**
	 * Visit a parse tree produced by `tinymudParser.whisperaction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhisperaction?: (ctx: WhisperactionContext) => Result;

	/**
	 * Visit a parse tree produced by `tinymudParser.whoaction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhoaction?: (ctx: WhoactionContext) => Result;

	/**
	 * Visit a parse tree produced by `tinymudParser.object`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObject?: (ctx: ObjectContext) => Result;

	/**
	 * Visit a parse tree produced by `tinymudParser.player`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPlayer?: (ctx: PlayerContext) => Result;

	/**
	 * Visit a parse tree produced by `tinymudParser.name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitName?: (ctx: NameContext) => Result;

	/**
	 * Visit a parse tree produced by `tinymudParser.description`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDescription?: (ctx: DescriptionContext) => Result;

	/**
	 * Visit a parse tree produced by `tinymudParser.cost`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCost?: (ctx: CostContext) => Result;

	/**
	 * Visit a parse tree produced by `tinymudParser.key`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKey?: (ctx: KeyContext) => Result;

	/**
	 * Visit a parse tree produced by `tinymudParser.password`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPassword?: (ctx: PasswordContext) => Result;

	/**
	 * Visit a parse tree produced by `tinymudParser.message`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMessage?: (ctx: MessageContext) => Result;

	/**
	 * Visit a parse tree produced by `tinymudParser.dir`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDir?: (ctx: DirContext) => Result;

	/**
	 * Visit a parse tree produced by `tinymudParser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumber?: (ctx: NumberContext) => Result;

	/**
	 * Visit a parse tree produced by `tinymudParser.room`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRoom?: (ctx: RoomContext) => Result;

	/**
	 * Visit a parse tree produced by `tinymudParser.flag`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFlag?: (ctx: FlagContext) => Result;

	/**
	 * Visit a parse tree produced by `tinymudParser.pennies`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPennies?: (ctx: PenniesContext) => Result;

	/**
	 * Visit a parse tree produced by `tinymudParser.direction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDirection?: (ctx: DirectionContext) => Result;
}

