// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/tinymud/tinymud.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `tinymudParser`.
 */
export interface tinymudListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `tinymudParser.prog`.
	 * @param ctx the parse tree
	 */
	enterProg?: (ctx: ProgContext) => void;
	/**
	 * Exit a parse tree produced by `tinymudParser.prog`.
	 * @param ctx the parse tree
	 */
	exitProg?: (ctx: ProgContext) => void;

	/**
	 * Enter a parse tree produced by `tinymudParser.line`.
	 * @param ctx the parse tree
	 */
	enterLine?: (ctx: LineContext) => void;
	/**
	 * Exit a parse tree produced by `tinymudParser.line`.
	 * @param ctx the parse tree
	 */
	exitLine?: (ctx: LineContext) => void;

	/**
	 * Enter a parse tree produced by `tinymudParser.command`.
	 * @param ctx the parse tree
	 */
	enterCommand?: (ctx: CommandContext) => void;
	/**
	 * Exit a parse tree produced by `tinymudParser.command`.
	 * @param ctx the parse tree
	 */
	exitCommand?: (ctx: CommandContext) => void;

	/**
	 * Enter a parse tree produced by `tinymudParser.bootcommand`.
	 * @param ctx the parse tree
	 */
	enterBootcommand?: (ctx: BootcommandContext) => void;
	/**
	 * Exit a parse tree produced by `tinymudParser.bootcommand`.
	 * @param ctx the parse tree
	 */
	exitBootcommand?: (ctx: BootcommandContext) => void;

	/**
	 * Enter a parse tree produced by `tinymudParser.chowncommand`.
	 * @param ctx the parse tree
	 */
	enterChowncommand?: (ctx: ChowncommandContext) => void;
	/**
	 * Exit a parse tree produced by `tinymudParser.chowncommand`.
	 * @param ctx the parse tree
	 */
	exitChowncommand?: (ctx: ChowncommandContext) => void;

	/**
	 * Enter a parse tree produced by `tinymudParser.createcommand`.
	 * @param ctx the parse tree
	 */
	enterCreatecommand?: (ctx: CreatecommandContext) => void;
	/**
	 * Exit a parse tree produced by `tinymudParser.createcommand`.
	 * @param ctx the parse tree
	 */
	exitCreatecommand?: (ctx: CreatecommandContext) => void;

	/**
	 * Enter a parse tree produced by `tinymudParser.describecommand`.
	 * @param ctx the parse tree
	 */
	enterDescribecommand?: (ctx: DescribecommandContext) => void;
	/**
	 * Exit a parse tree produced by `tinymudParser.describecommand`.
	 * @param ctx the parse tree
	 */
	exitDescribecommand?: (ctx: DescribecommandContext) => void;

	/**
	 * Enter a parse tree produced by `tinymudParser.digcommand`.
	 * @param ctx the parse tree
	 */
	enterDigcommand?: (ctx: DigcommandContext) => void;
	/**
	 * Exit a parse tree produced by `tinymudParser.digcommand`.
	 * @param ctx the parse tree
	 */
	exitDigcommand?: (ctx: DigcommandContext) => void;

	/**
	 * Enter a parse tree produced by `tinymudParser.dumpcommand`.
	 * @param ctx the parse tree
	 */
	enterDumpcommand?: (ctx: DumpcommandContext) => void;
	/**
	 * Exit a parse tree produced by `tinymudParser.dumpcommand`.
	 * @param ctx the parse tree
	 */
	exitDumpcommand?: (ctx: DumpcommandContext) => void;

	/**
	 * Enter a parse tree produced by `tinymudParser.failcommand`.
	 * @param ctx the parse tree
	 */
	enterFailcommand?: (ctx: FailcommandContext) => void;
	/**
	 * Exit a parse tree produced by `tinymudParser.failcommand`.
	 * @param ctx the parse tree
	 */
	exitFailcommand?: (ctx: FailcommandContext) => void;

	/**
	 * Enter a parse tree produced by `tinymudParser.findcommand`.
	 * @param ctx the parse tree
	 */
	enterFindcommand?: (ctx: FindcommandContext) => void;
	/**
	 * Exit a parse tree produced by `tinymudParser.findcommand`.
	 * @param ctx the parse tree
	 */
	exitFindcommand?: (ctx: FindcommandContext) => void;

	/**
	 * Enter a parse tree produced by `tinymudParser.forcecommand`.
	 * @param ctx the parse tree
	 */
	enterForcecommand?: (ctx: ForcecommandContext) => void;
	/**
	 * Exit a parse tree produced by `tinymudParser.forcecommand`.
	 * @param ctx the parse tree
	 */
	exitForcecommand?: (ctx: ForcecommandContext) => void;

	/**
	 * Enter a parse tree produced by `tinymudParser.linkcommand`.
	 * @param ctx the parse tree
	 */
	enterLinkcommand?: (ctx: LinkcommandContext) => void;
	/**
	 * Exit a parse tree produced by `tinymudParser.linkcommand`.
	 * @param ctx the parse tree
	 */
	exitLinkcommand?: (ctx: LinkcommandContext) => void;

	/**
	 * Enter a parse tree produced by `tinymudParser.lockcommand`.
	 * @param ctx the parse tree
	 */
	enterLockcommand?: (ctx: LockcommandContext) => void;
	/**
	 * Exit a parse tree produced by `tinymudParser.lockcommand`.
	 * @param ctx the parse tree
	 */
	exitLockcommand?: (ctx: LockcommandContext) => void;

	/**
	 * Enter a parse tree produced by `tinymudParser.namecommand`.
	 * @param ctx the parse tree
	 */
	enterNamecommand?: (ctx: NamecommandContext) => void;
	/**
	 * Exit a parse tree produced by `tinymudParser.namecommand`.
	 * @param ctx the parse tree
	 */
	exitNamecommand?: (ctx: NamecommandContext) => void;

	/**
	 * Enter a parse tree produced by `tinymudParser.newpassswordcommand`.
	 * @param ctx the parse tree
	 */
	enterNewpassswordcommand?: (ctx: NewpassswordcommandContext) => void;
	/**
	 * Exit a parse tree produced by `tinymudParser.newpassswordcommand`.
	 * @param ctx the parse tree
	 */
	exitNewpassswordcommand?: (ctx: NewpassswordcommandContext) => void;

	/**
	 * Enter a parse tree produced by `tinymudParser.ofailcommand`.
	 * @param ctx the parse tree
	 */
	enterOfailcommand?: (ctx: OfailcommandContext) => void;
	/**
	 * Exit a parse tree produced by `tinymudParser.ofailcommand`.
	 * @param ctx the parse tree
	 */
	exitOfailcommand?: (ctx: OfailcommandContext) => void;

	/**
	 * Enter a parse tree produced by `tinymudParser.opencommand`.
	 * @param ctx the parse tree
	 */
	enterOpencommand?: (ctx: OpencommandContext) => void;
	/**
	 * Exit a parse tree produced by `tinymudParser.opencommand`.
	 * @param ctx the parse tree
	 */
	exitOpencommand?: (ctx: OpencommandContext) => void;

	/**
	 * Enter a parse tree produced by `tinymudParser.osuccesscommand`.
	 * @param ctx the parse tree
	 */
	enterOsuccesscommand?: (ctx: OsuccesscommandContext) => void;
	/**
	 * Exit a parse tree produced by `tinymudParser.osuccesscommand`.
	 * @param ctx the parse tree
	 */
	exitOsuccesscommand?: (ctx: OsuccesscommandContext) => void;

	/**
	 * Enter a parse tree produced by `tinymudParser.passwordcommand`.
	 * @param ctx the parse tree
	 */
	enterPasswordcommand?: (ctx: PasswordcommandContext) => void;
	/**
	 * Exit a parse tree produced by `tinymudParser.passwordcommand`.
	 * @param ctx the parse tree
	 */
	exitPasswordcommand?: (ctx: PasswordcommandContext) => void;

	/**
	 * Enter a parse tree produced by `tinymudParser.pcreatecommand`.
	 * @param ctx the parse tree
	 */
	enterPcreatecommand?: (ctx: PcreatecommandContext) => void;
	/**
	 * Exit a parse tree produced by `tinymudParser.pcreatecommand`.
	 * @param ctx the parse tree
	 */
	exitPcreatecommand?: (ctx: PcreatecommandContext) => void;

	/**
	 * Enter a parse tree produced by `tinymudParser.setcommand`.
	 * @param ctx the parse tree
	 */
	enterSetcommand?: (ctx: SetcommandContext) => void;
	/**
	 * Exit a parse tree produced by `tinymudParser.setcommand`.
	 * @param ctx the parse tree
	 */
	exitSetcommand?: (ctx: SetcommandContext) => void;

	/**
	 * Enter a parse tree produced by `tinymudParser.shutdowncommand`.
	 * @param ctx the parse tree
	 */
	enterShutdowncommand?: (ctx: ShutdowncommandContext) => void;
	/**
	 * Exit a parse tree produced by `tinymudParser.shutdowncommand`.
	 * @param ctx the parse tree
	 */
	exitShutdowncommand?: (ctx: ShutdowncommandContext) => void;

	/**
	 * Enter a parse tree produced by `tinymudParser.statscommand`.
	 * @param ctx the parse tree
	 */
	enterStatscommand?: (ctx: StatscommandContext) => void;
	/**
	 * Exit a parse tree produced by `tinymudParser.statscommand`.
	 * @param ctx the parse tree
	 */
	exitStatscommand?: (ctx: StatscommandContext) => void;

	/**
	 * Enter a parse tree produced by `tinymudParser.successcommand`.
	 * @param ctx the parse tree
	 */
	enterSuccesscommand?: (ctx: SuccesscommandContext) => void;
	/**
	 * Exit a parse tree produced by `tinymudParser.successcommand`.
	 * @param ctx the parse tree
	 */
	exitSuccesscommand?: (ctx: SuccesscommandContext) => void;

	/**
	 * Enter a parse tree produced by `tinymudParser.teleportcommand`.
	 * @param ctx the parse tree
	 */
	enterTeleportcommand?: (ctx: TeleportcommandContext) => void;
	/**
	 * Exit a parse tree produced by `tinymudParser.teleportcommand`.
	 * @param ctx the parse tree
	 */
	exitTeleportcommand?: (ctx: TeleportcommandContext) => void;

	/**
	 * Enter a parse tree produced by `tinymudParser.toadcommand`.
	 * @param ctx the parse tree
	 */
	enterToadcommand?: (ctx: ToadcommandContext) => void;
	/**
	 * Exit a parse tree produced by `tinymudParser.toadcommand`.
	 * @param ctx the parse tree
	 */
	exitToadcommand?: (ctx: ToadcommandContext) => void;

	/**
	 * Enter a parse tree produced by `tinymudParser.unlinkcommand`.
	 * @param ctx the parse tree
	 */
	enterUnlinkcommand?: (ctx: UnlinkcommandContext) => void;
	/**
	 * Exit a parse tree produced by `tinymudParser.unlinkcommand`.
	 * @param ctx the parse tree
	 */
	exitUnlinkcommand?: (ctx: UnlinkcommandContext) => void;

	/**
	 * Enter a parse tree produced by `tinymudParser.unlockcommand`.
	 * @param ctx the parse tree
	 */
	enterUnlockcommand?: (ctx: UnlockcommandContext) => void;
	/**
	 * Exit a parse tree produced by `tinymudParser.unlockcommand`.
	 * @param ctx the parse tree
	 */
	exitUnlockcommand?: (ctx: UnlockcommandContext) => void;

	/**
	 * Enter a parse tree produced by `tinymudParser.wallcommand`.
	 * @param ctx the parse tree
	 */
	enterWallcommand?: (ctx: WallcommandContext) => void;
	/**
	 * Exit a parse tree produced by `tinymudParser.wallcommand`.
	 * @param ctx the parse tree
	 */
	exitWallcommand?: (ctx: WallcommandContext) => void;

	/**
	 * Enter a parse tree produced by `tinymudParser.action`.
	 * @param ctx the parse tree
	 */
	enterAction?: (ctx: ActionContext) => void;
	/**
	 * Exit a parse tree produced by `tinymudParser.action`.
	 * @param ctx the parse tree
	 */
	exitAction?: (ctx: ActionContext) => void;

	/**
	 * Enter a parse tree produced by `tinymudParser.dropaction`.
	 * @param ctx the parse tree
	 */
	enterDropaction?: (ctx: DropactionContext) => void;
	/**
	 * Exit a parse tree produced by `tinymudParser.dropaction`.
	 * @param ctx the parse tree
	 */
	exitDropaction?: (ctx: DropactionContext) => void;

	/**
	 * Enter a parse tree produced by `tinymudParser.examineaction`.
	 * @param ctx the parse tree
	 */
	enterExamineaction?: (ctx: ExamineactionContext) => void;
	/**
	 * Exit a parse tree produced by `tinymudParser.examineaction`.
	 * @param ctx the parse tree
	 */
	exitExamineaction?: (ctx: ExamineactionContext) => void;

	/**
	 * Enter a parse tree produced by `tinymudParser.getaction`.
	 * @param ctx the parse tree
	 */
	enterGetaction?: (ctx: GetactionContext) => void;
	/**
	 * Exit a parse tree produced by `tinymudParser.getaction`.
	 * @param ctx the parse tree
	 */
	exitGetaction?: (ctx: GetactionContext) => void;

	/**
	 * Enter a parse tree produced by `tinymudParser.giveaction`.
	 * @param ctx the parse tree
	 */
	enterGiveaction?: (ctx: GiveactionContext) => void;
	/**
	 * Exit a parse tree produced by `tinymudParser.giveaction`.
	 * @param ctx the parse tree
	 */
	exitGiveaction?: (ctx: GiveactionContext) => void;

	/**
	 * Enter a parse tree produced by `tinymudParser.gotoaction`.
	 * @param ctx the parse tree
	 */
	enterGotoaction?: (ctx: GotoactionContext) => void;
	/**
	 * Exit a parse tree produced by `tinymudParser.gotoaction`.
	 * @param ctx the parse tree
	 */
	exitGotoaction?: (ctx: GotoactionContext) => void;

	/**
	 * Enter a parse tree produced by `tinymudParser.gripeaction`.
	 * @param ctx the parse tree
	 */
	enterGripeaction?: (ctx: GripeactionContext) => void;
	/**
	 * Exit a parse tree produced by `tinymudParser.gripeaction`.
	 * @param ctx the parse tree
	 */
	exitGripeaction?: (ctx: GripeactionContext) => void;

	/**
	 * Enter a parse tree produced by `tinymudParser.helpaction`.
	 * @param ctx the parse tree
	 */
	enterHelpaction?: (ctx: HelpactionContext) => void;
	/**
	 * Exit a parse tree produced by `tinymudParser.helpaction`.
	 * @param ctx the parse tree
	 */
	exitHelpaction?: (ctx: HelpactionContext) => void;

	/**
	 * Enter a parse tree produced by `tinymudParser.inventoryaction`.
	 * @param ctx the parse tree
	 */
	enterInventoryaction?: (ctx: InventoryactionContext) => void;
	/**
	 * Exit a parse tree produced by `tinymudParser.inventoryaction`.
	 * @param ctx the parse tree
	 */
	exitInventoryaction?: (ctx: InventoryactionContext) => void;

	/**
	 * Enter a parse tree produced by `tinymudParser.killaction`.
	 * @param ctx the parse tree
	 */
	enterKillaction?: (ctx: KillactionContext) => void;
	/**
	 * Exit a parse tree produced by `tinymudParser.killaction`.
	 * @param ctx the parse tree
	 */
	exitKillaction?: (ctx: KillactionContext) => void;

	/**
	 * Enter a parse tree produced by `tinymudParser.lookaction`.
	 * @param ctx the parse tree
	 */
	enterLookaction?: (ctx: LookactionContext) => void;
	/**
	 * Exit a parse tree produced by `tinymudParser.lookaction`.
	 * @param ctx the parse tree
	 */
	exitLookaction?: (ctx: LookactionContext) => void;

	/**
	 * Enter a parse tree produced by `tinymudParser.newsaction`.
	 * @param ctx the parse tree
	 */
	enterNewsaction?: (ctx: NewsactionContext) => void;
	/**
	 * Exit a parse tree produced by `tinymudParser.newsaction`.
	 * @param ctx the parse tree
	 */
	exitNewsaction?: (ctx: NewsactionContext) => void;

	/**
	 * Enter a parse tree produced by `tinymudParser.pageaction`.
	 * @param ctx the parse tree
	 */
	enterPageaction?: (ctx: PageactionContext) => void;
	/**
	 * Exit a parse tree produced by `tinymudParser.pageaction`.
	 * @param ctx the parse tree
	 */
	exitPageaction?: (ctx: PageactionContext) => void;

	/**
	 * Enter a parse tree produced by `tinymudParser.quitaction`.
	 * @param ctx the parse tree
	 */
	enterQuitaction?: (ctx: QuitactionContext) => void;
	/**
	 * Exit a parse tree produced by `tinymudParser.quitaction`.
	 * @param ctx the parse tree
	 */
	exitQuitaction?: (ctx: QuitactionContext) => void;

	/**
	 * Enter a parse tree produced by `tinymudParser.robaction`.
	 * @param ctx the parse tree
	 */
	enterRobaction?: (ctx: RobactionContext) => void;
	/**
	 * Exit a parse tree produced by `tinymudParser.robaction`.
	 * @param ctx the parse tree
	 */
	exitRobaction?: (ctx: RobactionContext) => void;

	/**
	 * Enter a parse tree produced by `tinymudParser.sayaction`.
	 * @param ctx the parse tree
	 */
	enterSayaction?: (ctx: SayactionContext) => void;
	/**
	 * Exit a parse tree produced by `tinymudParser.sayaction`.
	 * @param ctx the parse tree
	 */
	exitSayaction?: (ctx: SayactionContext) => void;

	/**
	 * Enter a parse tree produced by `tinymudParser.scoreaction`.
	 * @param ctx the parse tree
	 */
	enterScoreaction?: (ctx: ScoreactionContext) => void;
	/**
	 * Exit a parse tree produced by `tinymudParser.scoreaction`.
	 * @param ctx the parse tree
	 */
	exitScoreaction?: (ctx: ScoreactionContext) => void;

	/**
	 * Enter a parse tree produced by `tinymudParser.whisperaction`.
	 * @param ctx the parse tree
	 */
	enterWhisperaction?: (ctx: WhisperactionContext) => void;
	/**
	 * Exit a parse tree produced by `tinymudParser.whisperaction`.
	 * @param ctx the parse tree
	 */
	exitWhisperaction?: (ctx: WhisperactionContext) => void;

	/**
	 * Enter a parse tree produced by `tinymudParser.whoaction`.
	 * @param ctx the parse tree
	 */
	enterWhoaction?: (ctx: WhoactionContext) => void;
	/**
	 * Exit a parse tree produced by `tinymudParser.whoaction`.
	 * @param ctx the parse tree
	 */
	exitWhoaction?: (ctx: WhoactionContext) => void;

	/**
	 * Enter a parse tree produced by `tinymudParser.object`.
	 * @param ctx the parse tree
	 */
	enterObject?: (ctx: ObjectContext) => void;
	/**
	 * Exit a parse tree produced by `tinymudParser.object`.
	 * @param ctx the parse tree
	 */
	exitObject?: (ctx: ObjectContext) => void;

	/**
	 * Enter a parse tree produced by `tinymudParser.player`.
	 * @param ctx the parse tree
	 */
	enterPlayer?: (ctx: PlayerContext) => void;
	/**
	 * Exit a parse tree produced by `tinymudParser.player`.
	 * @param ctx the parse tree
	 */
	exitPlayer?: (ctx: PlayerContext) => void;

	/**
	 * Enter a parse tree produced by `tinymudParser.name`.
	 * @param ctx the parse tree
	 */
	enterName?: (ctx: NameContext) => void;
	/**
	 * Exit a parse tree produced by `tinymudParser.name`.
	 * @param ctx the parse tree
	 */
	exitName?: (ctx: NameContext) => void;

	/**
	 * Enter a parse tree produced by `tinymudParser.description`.
	 * @param ctx the parse tree
	 */
	enterDescription?: (ctx: DescriptionContext) => void;
	/**
	 * Exit a parse tree produced by `tinymudParser.description`.
	 * @param ctx the parse tree
	 */
	exitDescription?: (ctx: DescriptionContext) => void;

	/**
	 * Enter a parse tree produced by `tinymudParser.cost`.
	 * @param ctx the parse tree
	 */
	enterCost?: (ctx: CostContext) => void;
	/**
	 * Exit a parse tree produced by `tinymudParser.cost`.
	 * @param ctx the parse tree
	 */
	exitCost?: (ctx: CostContext) => void;

	/**
	 * Enter a parse tree produced by `tinymudParser.key`.
	 * @param ctx the parse tree
	 */
	enterKey?: (ctx: KeyContext) => void;
	/**
	 * Exit a parse tree produced by `tinymudParser.key`.
	 * @param ctx the parse tree
	 */
	exitKey?: (ctx: KeyContext) => void;

	/**
	 * Enter a parse tree produced by `tinymudParser.password`.
	 * @param ctx the parse tree
	 */
	enterPassword?: (ctx: PasswordContext) => void;
	/**
	 * Exit a parse tree produced by `tinymudParser.password`.
	 * @param ctx the parse tree
	 */
	exitPassword?: (ctx: PasswordContext) => void;

	/**
	 * Enter a parse tree produced by `tinymudParser.message`.
	 * @param ctx the parse tree
	 */
	enterMessage?: (ctx: MessageContext) => void;
	/**
	 * Exit a parse tree produced by `tinymudParser.message`.
	 * @param ctx the parse tree
	 */
	exitMessage?: (ctx: MessageContext) => void;

	/**
	 * Enter a parse tree produced by `tinymudParser.dir`.
	 * @param ctx the parse tree
	 */
	enterDir?: (ctx: DirContext) => void;
	/**
	 * Exit a parse tree produced by `tinymudParser.dir`.
	 * @param ctx the parse tree
	 */
	exitDir?: (ctx: DirContext) => void;

	/**
	 * Enter a parse tree produced by `tinymudParser.number`.
	 * @param ctx the parse tree
	 */
	enterNumber?: (ctx: NumberContext) => void;
	/**
	 * Exit a parse tree produced by `tinymudParser.number`.
	 * @param ctx the parse tree
	 */
	exitNumber?: (ctx: NumberContext) => void;

	/**
	 * Enter a parse tree produced by `tinymudParser.room`.
	 * @param ctx the parse tree
	 */
	enterRoom?: (ctx: RoomContext) => void;
	/**
	 * Exit a parse tree produced by `tinymudParser.room`.
	 * @param ctx the parse tree
	 */
	exitRoom?: (ctx: RoomContext) => void;

	/**
	 * Enter a parse tree produced by `tinymudParser.flag`.
	 * @param ctx the parse tree
	 */
	enterFlag?: (ctx: FlagContext) => void;
	/**
	 * Exit a parse tree produced by `tinymudParser.flag`.
	 * @param ctx the parse tree
	 */
	exitFlag?: (ctx: FlagContext) => void;

	/**
	 * Enter a parse tree produced by `tinymudParser.pennies`.
	 * @param ctx the parse tree
	 */
	enterPennies?: (ctx: PenniesContext) => void;
	/**
	 * Exit a parse tree produced by `tinymudParser.pennies`.
	 * @param ctx the parse tree
	 */
	exitPennies?: (ctx: PenniesContext) => void;

	/**
	 * Enter a parse tree produced by `tinymudParser.direction`.
	 * @param ctx the parse tree
	 */
	enterDirection?: (ctx: DirectionContext) => void;
	/**
	 * Exit a parse tree produced by `tinymudParser.direction`.
	 * @param ctx the parse tree
	 */
	exitDirection?: (ctx: DirectionContext) => void;
}

