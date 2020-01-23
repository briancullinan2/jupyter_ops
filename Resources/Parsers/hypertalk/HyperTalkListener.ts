// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/hypertalk/HyperTalk.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ScriptContext } from "./HyperTalkParser";
import { ScriptletContext } from "./HyperTalkParser";
import { MultilineScriptletContext } from "./HyperTalkParser";
import { HandlerContext } from "./HyperTalkParser";
import { FunctionContext } from "./HyperTalkParser";
import { HandlerNameContext } from "./HyperTalkParser";
import { ParameterListContext } from "./HyperTalkParser";
import { StatementListContext } from "./HyperTalkParser";
import { StatementContext } from "./HyperTalkParser";
import { GlobalStmntContext } from "./HyperTalkParser";
import { ReturnStmntContext } from "./HyperTalkParser";
import { IfStatementContext } from "./HyperTalkParser";
import { ThenStatementContext } from "./HyperTalkParser";
import { ElseStatementContext } from "./HyperTalkParser";
import { RepeatStatementContext } from "./HyperTalkParser";
import { MessageStatementContext } from "./HyperTalkParser";
import { CommandStmntContext } from "./HyperTalkParser";
import { RemoteNavOptionContext } from "./HyperTalkParser";
import { ConvertibleContext } from "./HyperTalkParser";
import { ConversionFormatContext } from "./HyperTalkParser";
import { LengthContext } from "./HyperTalkParser";
import { SortDirectionContext } from "./HyperTalkParser";
import { SortChunkTypeContext } from "./HyperTalkParser";
import { SortStyleContext } from "./HyperTalkParser";
import { RepeatRangeContext } from "./HyperTalkParser";
import { DurationContext } from "./HyperTalkParser";
import { CountContext } from "./HyperTalkParser";
import { RangeContext } from "./HyperTalkParser";
import { ChunkContext } from "./HyperTalkParser";
import { MenuContext } from "./HyperTalkParser";
import { MenuItemContext } from "./HyperTalkParser";
import { PropertyContext } from "./HyperTalkParser";
import { GlobalPropertyContext } from "./HyperTalkParser";
import { PartPropertyContext } from "./HyperTalkParser";
import { PartContext } from "./HyperTalkParser";
import { StackPartContext } from "./HyperTalkParser";
import { ButtonPartContext } from "./HyperTalkParser";
import { FieldPartContext } from "./HyperTalkParser";
import { CardPartContext } from "./HyperTalkParser";
import { BkgndPartContext } from "./HyperTalkParser";
import { WindowPartContext } from "./HyperTalkParser";
import { ListExpressionContext } from "./HyperTalkParser";
import { ExpressionContext } from "./HyperTalkParser";
import { FactorContext } from "./HyperTalkParser";
import { ContainerContext } from "./HyperTalkParser";
import { MusicExpressionContext } from "./HyperTalkParser";
import { ToolExpressionContext } from "./HyperTalkParser";
import { EffectExpressionContext } from "./HyperTalkParser";
import { FunctionCallContext } from "./HyperTalkParser";
import { BuiltInFuncContext } from "./HyperTalkParser";
import { ZeroArgFuncContext } from "./HyperTalkParser";
import { SingleArgFuncContext } from "./HyperTalkParser";
import { MultiArgFuncContext } from "./HyperTalkParser";
import { LiteralContext } from "./HyperTalkParser";
import { PrepositionContext } from "./HyperTalkParser";
import { ConstantContext } from "./HyperTalkParser";
import { CardinalValueContext } from "./HyperTalkParser";
import { OrdinalContext } from "./HyperTalkParser";
import { OrdinalValueContext } from "./HyperTalkParser";
import { MouseStateContext } from "./HyperTalkParser";
import { ModifierKeyContext } from "./HyperTalkParser";
import { KnownTypeContext } from "./HyperTalkParser";
import { FindTypeContext } from "./HyperTalkParser";
import { PropertyNameContext } from "./HyperTalkParser";
import { PropertyValueContext } from "./HyperTalkParser";
import { CommandNameContext } from "./HyperTalkParser";
import { PictureContext } from "./HyperTalkParser";
import { SecondsContext } from "./HyperTalkParser";
import { SpeedContext } from "./HyperTalkParser";
import { ImageContext } from "./HyperTalkParser";
import { EffectContext } from "./HyperTalkParser";
import { TimeUnitContext } from "./HyperTalkParser";
import { PositionContext } from "./HyperTalkParser";
import { MessageContext } from "./HyperTalkParser";
import { CardsContext } from "./HyperTalkParser";
import { CardContext } from "./HyperTalkParser";
import { BackgroundContext } from "./HyperTalkParser";
import { ButtonContext } from "./HyperTalkParser";
import { FieldContext } from "./HyperTalkParser";
import { StackContext } from "./HyperTalkParser";
import { CharacterContext } from "./HyperTalkParser";
import { WordContext } from "./HyperTalkParser";
import { LineContext } from "./HyperTalkParser";
import { ItemContext } from "./HyperTalkParser";
import { OfContext } from "./HyperTalkParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `HyperTalkParser`.
 */
export interface HyperTalkListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `HyperTalkParser.script`.
	 * @param ctx the parse tree
	 */
	enterScript?: (ctx: ScriptContext) => void;
	/**
	 * Exit a parse tree produced by `HyperTalkParser.script`.
	 * @param ctx the parse tree
	 */
	exitScript?: (ctx: ScriptContext) => void;

	/**
	 * Enter a parse tree produced by `HyperTalkParser.scriptlet`.
	 * @param ctx the parse tree
	 */
	enterScriptlet?: (ctx: ScriptletContext) => void;
	/**
	 * Exit a parse tree produced by `HyperTalkParser.scriptlet`.
	 * @param ctx the parse tree
	 */
	exitScriptlet?: (ctx: ScriptletContext) => void;

	/**
	 * Enter a parse tree produced by `HyperTalkParser.multilineScriptlet`.
	 * @param ctx the parse tree
	 */
	enterMultilineScriptlet?: (ctx: MultilineScriptletContext) => void;
	/**
	 * Exit a parse tree produced by `HyperTalkParser.multilineScriptlet`.
	 * @param ctx the parse tree
	 */
	exitMultilineScriptlet?: (ctx: MultilineScriptletContext) => void;

	/**
	 * Enter a parse tree produced by `HyperTalkParser.handler`.
	 * @param ctx the parse tree
	 */
	enterHandler?: (ctx: HandlerContext) => void;
	/**
	 * Exit a parse tree produced by `HyperTalkParser.handler`.
	 * @param ctx the parse tree
	 */
	exitHandler?: (ctx: HandlerContext) => void;

	/**
	 * Enter a parse tree produced by `HyperTalkParser.function`.
	 * @param ctx the parse tree
	 */
	enterFunction?: (ctx: FunctionContext) => void;
	/**
	 * Exit a parse tree produced by `HyperTalkParser.function`.
	 * @param ctx the parse tree
	 */
	exitFunction?: (ctx: FunctionContext) => void;

	/**
	 * Enter a parse tree produced by `HyperTalkParser.handlerName`.
	 * @param ctx the parse tree
	 */
	enterHandlerName?: (ctx: HandlerNameContext) => void;
	/**
	 * Exit a parse tree produced by `HyperTalkParser.handlerName`.
	 * @param ctx the parse tree
	 */
	exitHandlerName?: (ctx: HandlerNameContext) => void;

	/**
	 * Enter a parse tree produced by `HyperTalkParser.parameterList`.
	 * @param ctx the parse tree
	 */
	enterParameterList?: (ctx: ParameterListContext) => void;
	/**
	 * Exit a parse tree produced by `HyperTalkParser.parameterList`.
	 * @param ctx the parse tree
	 */
	exitParameterList?: (ctx: ParameterListContext) => void;

	/**
	 * Enter a parse tree produced by `HyperTalkParser.statementList`.
	 * @param ctx the parse tree
	 */
	enterStatementList?: (ctx: StatementListContext) => void;
	/**
	 * Exit a parse tree produced by `HyperTalkParser.statementList`.
	 * @param ctx the parse tree
	 */
	exitStatementList?: (ctx: StatementListContext) => void;

	/**
	 * Enter a parse tree produced by `HyperTalkParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `HyperTalkParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `HyperTalkParser.globalStmnt`.
	 * @param ctx the parse tree
	 */
	enterGlobalStmnt?: (ctx: GlobalStmntContext) => void;
	/**
	 * Exit a parse tree produced by `HyperTalkParser.globalStmnt`.
	 * @param ctx the parse tree
	 */
	exitGlobalStmnt?: (ctx: GlobalStmntContext) => void;

	/**
	 * Enter a parse tree produced by `HyperTalkParser.returnStmnt`.
	 * @param ctx the parse tree
	 */
	enterReturnStmnt?: (ctx: ReturnStmntContext) => void;
	/**
	 * Exit a parse tree produced by `HyperTalkParser.returnStmnt`.
	 * @param ctx the parse tree
	 */
	exitReturnStmnt?: (ctx: ReturnStmntContext) => void;

	/**
	 * Enter a parse tree produced by `HyperTalkParser.ifStatement`.
	 * @param ctx the parse tree
	 */
	enterIfStatement?: (ctx: IfStatementContext) => void;
	/**
	 * Exit a parse tree produced by `HyperTalkParser.ifStatement`.
	 * @param ctx the parse tree
	 */
	exitIfStatement?: (ctx: IfStatementContext) => void;

	/**
	 * Enter a parse tree produced by `HyperTalkParser.thenStatement`.
	 * @param ctx the parse tree
	 */
	enterThenStatement?: (ctx: ThenStatementContext) => void;
	/**
	 * Exit a parse tree produced by `HyperTalkParser.thenStatement`.
	 * @param ctx the parse tree
	 */
	exitThenStatement?: (ctx: ThenStatementContext) => void;

	/**
	 * Enter a parse tree produced by `HyperTalkParser.elseStatement`.
	 * @param ctx the parse tree
	 */
	enterElseStatement?: (ctx: ElseStatementContext) => void;
	/**
	 * Exit a parse tree produced by `HyperTalkParser.elseStatement`.
	 * @param ctx the parse tree
	 */
	exitElseStatement?: (ctx: ElseStatementContext) => void;

	/**
	 * Enter a parse tree produced by `HyperTalkParser.repeatStatement`.
	 * @param ctx the parse tree
	 */
	enterRepeatStatement?: (ctx: RepeatStatementContext) => void;
	/**
	 * Exit a parse tree produced by `HyperTalkParser.repeatStatement`.
	 * @param ctx the parse tree
	 */
	exitRepeatStatement?: (ctx: RepeatStatementContext) => void;

	/**
	 * Enter a parse tree produced by `HyperTalkParser.messageStatement`.
	 * @param ctx the parse tree
	 */
	enterMessageStatement?: (ctx: MessageStatementContext) => void;
	/**
	 * Exit a parse tree produced by `HyperTalkParser.messageStatement`.
	 * @param ctx the parse tree
	 */
	exitMessageStatement?: (ctx: MessageStatementContext) => void;

	/**
	 * Enter a parse tree produced by `HyperTalkParser.commandStmnt`.
	 * @param ctx the parse tree
	 */
	enterCommandStmnt?: (ctx: CommandStmntContext) => void;
	/**
	 * Exit a parse tree produced by `HyperTalkParser.commandStmnt`.
	 * @param ctx the parse tree
	 */
	exitCommandStmnt?: (ctx: CommandStmntContext) => void;

	/**
	 * Enter a parse tree produced by `HyperTalkParser.remoteNavOption`.
	 * @param ctx the parse tree
	 */
	enterRemoteNavOption?: (ctx: RemoteNavOptionContext) => void;
	/**
	 * Exit a parse tree produced by `HyperTalkParser.remoteNavOption`.
	 * @param ctx the parse tree
	 */
	exitRemoteNavOption?: (ctx: RemoteNavOptionContext) => void;

	/**
	 * Enter a parse tree produced by `HyperTalkParser.convertible`.
	 * @param ctx the parse tree
	 */
	enterConvertible?: (ctx: ConvertibleContext) => void;
	/**
	 * Exit a parse tree produced by `HyperTalkParser.convertible`.
	 * @param ctx the parse tree
	 */
	exitConvertible?: (ctx: ConvertibleContext) => void;

	/**
	 * Enter a parse tree produced by `HyperTalkParser.conversionFormat`.
	 * @param ctx the parse tree
	 */
	enterConversionFormat?: (ctx: ConversionFormatContext) => void;
	/**
	 * Exit a parse tree produced by `HyperTalkParser.conversionFormat`.
	 * @param ctx the parse tree
	 */
	exitConversionFormat?: (ctx: ConversionFormatContext) => void;

	/**
	 * Enter a parse tree produced by `HyperTalkParser.length`.
	 * @param ctx the parse tree
	 */
	enterLength?: (ctx: LengthContext) => void;
	/**
	 * Exit a parse tree produced by `HyperTalkParser.length`.
	 * @param ctx the parse tree
	 */
	exitLength?: (ctx: LengthContext) => void;

	/**
	 * Enter a parse tree produced by `HyperTalkParser.sortDirection`.
	 * @param ctx the parse tree
	 */
	enterSortDirection?: (ctx: SortDirectionContext) => void;
	/**
	 * Exit a parse tree produced by `HyperTalkParser.sortDirection`.
	 * @param ctx the parse tree
	 */
	exitSortDirection?: (ctx: SortDirectionContext) => void;

	/**
	 * Enter a parse tree produced by `HyperTalkParser.sortChunkType`.
	 * @param ctx the parse tree
	 */
	enterSortChunkType?: (ctx: SortChunkTypeContext) => void;
	/**
	 * Exit a parse tree produced by `HyperTalkParser.sortChunkType`.
	 * @param ctx the parse tree
	 */
	exitSortChunkType?: (ctx: SortChunkTypeContext) => void;

	/**
	 * Enter a parse tree produced by `HyperTalkParser.sortStyle`.
	 * @param ctx the parse tree
	 */
	enterSortStyle?: (ctx: SortStyleContext) => void;
	/**
	 * Exit a parse tree produced by `HyperTalkParser.sortStyle`.
	 * @param ctx the parse tree
	 */
	exitSortStyle?: (ctx: SortStyleContext) => void;

	/**
	 * Enter a parse tree produced by `HyperTalkParser.repeatRange`.
	 * @param ctx the parse tree
	 */
	enterRepeatRange?: (ctx: RepeatRangeContext) => void;
	/**
	 * Exit a parse tree produced by `HyperTalkParser.repeatRange`.
	 * @param ctx the parse tree
	 */
	exitRepeatRange?: (ctx: RepeatRangeContext) => void;

	/**
	 * Enter a parse tree produced by `HyperTalkParser.duration`.
	 * @param ctx the parse tree
	 */
	enterDuration?: (ctx: DurationContext) => void;
	/**
	 * Exit a parse tree produced by `HyperTalkParser.duration`.
	 * @param ctx the parse tree
	 */
	exitDuration?: (ctx: DurationContext) => void;

	/**
	 * Enter a parse tree produced by `HyperTalkParser.count`.
	 * @param ctx the parse tree
	 */
	enterCount?: (ctx: CountContext) => void;
	/**
	 * Exit a parse tree produced by `HyperTalkParser.count`.
	 * @param ctx the parse tree
	 */
	exitCount?: (ctx: CountContext) => void;

	/**
	 * Enter a parse tree produced by `HyperTalkParser.range`.
	 * @param ctx the parse tree
	 */
	enterRange?: (ctx: RangeContext) => void;
	/**
	 * Exit a parse tree produced by `HyperTalkParser.range`.
	 * @param ctx the parse tree
	 */
	exitRange?: (ctx: RangeContext) => void;

	/**
	 * Enter a parse tree produced by `HyperTalkParser.chunk`.
	 * @param ctx the parse tree
	 */
	enterChunk?: (ctx: ChunkContext) => void;
	/**
	 * Exit a parse tree produced by `HyperTalkParser.chunk`.
	 * @param ctx the parse tree
	 */
	exitChunk?: (ctx: ChunkContext) => void;

	/**
	 * Enter a parse tree produced by `HyperTalkParser.menu`.
	 * @param ctx the parse tree
	 */
	enterMenu?: (ctx: MenuContext) => void;
	/**
	 * Exit a parse tree produced by `HyperTalkParser.menu`.
	 * @param ctx the parse tree
	 */
	exitMenu?: (ctx: MenuContext) => void;

	/**
	 * Enter a parse tree produced by `HyperTalkParser.menuItem`.
	 * @param ctx the parse tree
	 */
	enterMenuItem?: (ctx: MenuItemContext) => void;
	/**
	 * Exit a parse tree produced by `HyperTalkParser.menuItem`.
	 * @param ctx the parse tree
	 */
	exitMenuItem?: (ctx: MenuItemContext) => void;

	/**
	 * Enter a parse tree produced by `HyperTalkParser.property`.
	 * @param ctx the parse tree
	 */
	enterProperty?: (ctx: PropertyContext) => void;
	/**
	 * Exit a parse tree produced by `HyperTalkParser.property`.
	 * @param ctx the parse tree
	 */
	exitProperty?: (ctx: PropertyContext) => void;

	/**
	 * Enter a parse tree produced by `HyperTalkParser.globalProperty`.
	 * @param ctx the parse tree
	 */
	enterGlobalProperty?: (ctx: GlobalPropertyContext) => void;
	/**
	 * Exit a parse tree produced by `HyperTalkParser.globalProperty`.
	 * @param ctx the parse tree
	 */
	exitGlobalProperty?: (ctx: GlobalPropertyContext) => void;

	/**
	 * Enter a parse tree produced by `HyperTalkParser.partProperty`.
	 * @param ctx the parse tree
	 */
	enterPartProperty?: (ctx: PartPropertyContext) => void;
	/**
	 * Exit a parse tree produced by `HyperTalkParser.partProperty`.
	 * @param ctx the parse tree
	 */
	exitPartProperty?: (ctx: PartPropertyContext) => void;

	/**
	 * Enter a parse tree produced by `HyperTalkParser.part`.
	 * @param ctx the parse tree
	 */
	enterPart?: (ctx: PartContext) => void;
	/**
	 * Exit a parse tree produced by `HyperTalkParser.part`.
	 * @param ctx the parse tree
	 */
	exitPart?: (ctx: PartContext) => void;

	/**
	 * Enter a parse tree produced by `HyperTalkParser.stackPart`.
	 * @param ctx the parse tree
	 */
	enterStackPart?: (ctx: StackPartContext) => void;
	/**
	 * Exit a parse tree produced by `HyperTalkParser.stackPart`.
	 * @param ctx the parse tree
	 */
	exitStackPart?: (ctx: StackPartContext) => void;

	/**
	 * Enter a parse tree produced by `HyperTalkParser.buttonPart`.
	 * @param ctx the parse tree
	 */
	enterButtonPart?: (ctx: ButtonPartContext) => void;
	/**
	 * Exit a parse tree produced by `HyperTalkParser.buttonPart`.
	 * @param ctx the parse tree
	 */
	exitButtonPart?: (ctx: ButtonPartContext) => void;

	/**
	 * Enter a parse tree produced by `HyperTalkParser.fieldPart`.
	 * @param ctx the parse tree
	 */
	enterFieldPart?: (ctx: FieldPartContext) => void;
	/**
	 * Exit a parse tree produced by `HyperTalkParser.fieldPart`.
	 * @param ctx the parse tree
	 */
	exitFieldPart?: (ctx: FieldPartContext) => void;

	/**
	 * Enter a parse tree produced by `HyperTalkParser.cardPart`.
	 * @param ctx the parse tree
	 */
	enterCardPart?: (ctx: CardPartContext) => void;
	/**
	 * Exit a parse tree produced by `HyperTalkParser.cardPart`.
	 * @param ctx the parse tree
	 */
	exitCardPart?: (ctx: CardPartContext) => void;

	/**
	 * Enter a parse tree produced by `HyperTalkParser.bkgndPart`.
	 * @param ctx the parse tree
	 */
	enterBkgndPart?: (ctx: BkgndPartContext) => void;
	/**
	 * Exit a parse tree produced by `HyperTalkParser.bkgndPart`.
	 * @param ctx the parse tree
	 */
	exitBkgndPart?: (ctx: BkgndPartContext) => void;

	/**
	 * Enter a parse tree produced by `HyperTalkParser.windowPart`.
	 * @param ctx the parse tree
	 */
	enterWindowPart?: (ctx: WindowPartContext) => void;
	/**
	 * Exit a parse tree produced by `HyperTalkParser.windowPart`.
	 * @param ctx the parse tree
	 */
	exitWindowPart?: (ctx: WindowPartContext) => void;

	/**
	 * Enter a parse tree produced by `HyperTalkParser.listExpression`.
	 * @param ctx the parse tree
	 */
	enterListExpression?: (ctx: ListExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `HyperTalkParser.listExpression`.
	 * @param ctx the parse tree
	 */
	exitListExpression?: (ctx: ListExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `HyperTalkParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `HyperTalkParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `HyperTalkParser.factor`.
	 * @param ctx the parse tree
	 */
	enterFactor?: (ctx: FactorContext) => void;
	/**
	 * Exit a parse tree produced by `HyperTalkParser.factor`.
	 * @param ctx the parse tree
	 */
	exitFactor?: (ctx: FactorContext) => void;

	/**
	 * Enter a parse tree produced by `HyperTalkParser.container`.
	 * @param ctx the parse tree
	 */
	enterContainer?: (ctx: ContainerContext) => void;
	/**
	 * Exit a parse tree produced by `HyperTalkParser.container`.
	 * @param ctx the parse tree
	 */
	exitContainer?: (ctx: ContainerContext) => void;

	/**
	 * Enter a parse tree produced by `HyperTalkParser.musicExpression`.
	 * @param ctx the parse tree
	 */
	enterMusicExpression?: (ctx: MusicExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `HyperTalkParser.musicExpression`.
	 * @param ctx the parse tree
	 */
	exitMusicExpression?: (ctx: MusicExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `HyperTalkParser.toolExpression`.
	 * @param ctx the parse tree
	 */
	enterToolExpression?: (ctx: ToolExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `HyperTalkParser.toolExpression`.
	 * @param ctx the parse tree
	 */
	exitToolExpression?: (ctx: ToolExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `HyperTalkParser.effectExpression`.
	 * @param ctx the parse tree
	 */
	enterEffectExpression?: (ctx: EffectExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `HyperTalkParser.effectExpression`.
	 * @param ctx the parse tree
	 */
	exitEffectExpression?: (ctx: EffectExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `HyperTalkParser.functionCall`.
	 * @param ctx the parse tree
	 */
	enterFunctionCall?: (ctx: FunctionCallContext) => void;
	/**
	 * Exit a parse tree produced by `HyperTalkParser.functionCall`.
	 * @param ctx the parse tree
	 */
	exitFunctionCall?: (ctx: FunctionCallContext) => void;

	/**
	 * Enter a parse tree produced by `HyperTalkParser.builtInFunc`.
	 * @param ctx the parse tree
	 */
	enterBuiltInFunc?: (ctx: BuiltInFuncContext) => void;
	/**
	 * Exit a parse tree produced by `HyperTalkParser.builtInFunc`.
	 * @param ctx the parse tree
	 */
	exitBuiltInFunc?: (ctx: BuiltInFuncContext) => void;

	/**
	 * Enter a parse tree produced by `HyperTalkParser.zeroArgFunc`.
	 * @param ctx the parse tree
	 */
	enterZeroArgFunc?: (ctx: ZeroArgFuncContext) => void;
	/**
	 * Exit a parse tree produced by `HyperTalkParser.zeroArgFunc`.
	 * @param ctx the parse tree
	 */
	exitZeroArgFunc?: (ctx: ZeroArgFuncContext) => void;

	/**
	 * Enter a parse tree produced by `HyperTalkParser.singleArgFunc`.
	 * @param ctx the parse tree
	 */
	enterSingleArgFunc?: (ctx: SingleArgFuncContext) => void;
	/**
	 * Exit a parse tree produced by `HyperTalkParser.singleArgFunc`.
	 * @param ctx the parse tree
	 */
	exitSingleArgFunc?: (ctx: SingleArgFuncContext) => void;

	/**
	 * Enter a parse tree produced by `HyperTalkParser.multiArgFunc`.
	 * @param ctx the parse tree
	 */
	enterMultiArgFunc?: (ctx: MultiArgFuncContext) => void;
	/**
	 * Exit a parse tree produced by `HyperTalkParser.multiArgFunc`.
	 * @param ctx the parse tree
	 */
	exitMultiArgFunc?: (ctx: MultiArgFuncContext) => void;

	/**
	 * Enter a parse tree produced by `HyperTalkParser.literal`.
	 * @param ctx the parse tree
	 */
	enterLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Exit a parse tree produced by `HyperTalkParser.literal`.
	 * @param ctx the parse tree
	 */
	exitLiteral?: (ctx: LiteralContext) => void;

	/**
	 * Enter a parse tree produced by `HyperTalkParser.preposition`.
	 * @param ctx the parse tree
	 */
	enterPreposition?: (ctx: PrepositionContext) => void;
	/**
	 * Exit a parse tree produced by `HyperTalkParser.preposition`.
	 * @param ctx the parse tree
	 */
	exitPreposition?: (ctx: PrepositionContext) => void;

	/**
	 * Enter a parse tree produced by `HyperTalkParser.constant`.
	 * @param ctx the parse tree
	 */
	enterConstant?: (ctx: ConstantContext) => void;
	/**
	 * Exit a parse tree produced by `HyperTalkParser.constant`.
	 * @param ctx the parse tree
	 */
	exitConstant?: (ctx: ConstantContext) => void;

	/**
	 * Enter a parse tree produced by `HyperTalkParser.cardinalValue`.
	 * @param ctx the parse tree
	 */
	enterCardinalValue?: (ctx: CardinalValueContext) => void;
	/**
	 * Exit a parse tree produced by `HyperTalkParser.cardinalValue`.
	 * @param ctx the parse tree
	 */
	exitCardinalValue?: (ctx: CardinalValueContext) => void;

	/**
	 * Enter a parse tree produced by `HyperTalkParser.ordinal`.
	 * @param ctx the parse tree
	 */
	enterOrdinal?: (ctx: OrdinalContext) => void;
	/**
	 * Exit a parse tree produced by `HyperTalkParser.ordinal`.
	 * @param ctx the parse tree
	 */
	exitOrdinal?: (ctx: OrdinalContext) => void;

	/**
	 * Enter a parse tree produced by `HyperTalkParser.ordinalValue`.
	 * @param ctx the parse tree
	 */
	enterOrdinalValue?: (ctx: OrdinalValueContext) => void;
	/**
	 * Exit a parse tree produced by `HyperTalkParser.ordinalValue`.
	 * @param ctx the parse tree
	 */
	exitOrdinalValue?: (ctx: OrdinalValueContext) => void;

	/**
	 * Enter a parse tree produced by `HyperTalkParser.mouseState`.
	 * @param ctx the parse tree
	 */
	enterMouseState?: (ctx: MouseStateContext) => void;
	/**
	 * Exit a parse tree produced by `HyperTalkParser.mouseState`.
	 * @param ctx the parse tree
	 */
	exitMouseState?: (ctx: MouseStateContext) => void;

	/**
	 * Enter a parse tree produced by `HyperTalkParser.modifierKey`.
	 * @param ctx the parse tree
	 */
	enterModifierKey?: (ctx: ModifierKeyContext) => void;
	/**
	 * Exit a parse tree produced by `HyperTalkParser.modifierKey`.
	 * @param ctx the parse tree
	 */
	exitModifierKey?: (ctx: ModifierKeyContext) => void;

	/**
	 * Enter a parse tree produced by `HyperTalkParser.knownType`.
	 * @param ctx the parse tree
	 */
	enterKnownType?: (ctx: KnownTypeContext) => void;
	/**
	 * Exit a parse tree produced by `HyperTalkParser.knownType`.
	 * @param ctx the parse tree
	 */
	exitKnownType?: (ctx: KnownTypeContext) => void;

	/**
	 * Enter a parse tree produced by `HyperTalkParser.findType`.
	 * @param ctx the parse tree
	 */
	enterFindType?: (ctx: FindTypeContext) => void;
	/**
	 * Exit a parse tree produced by `HyperTalkParser.findType`.
	 * @param ctx the parse tree
	 */
	exitFindType?: (ctx: FindTypeContext) => void;

	/**
	 * Enter a parse tree produced by `HyperTalkParser.propertyName`.
	 * @param ctx the parse tree
	 */
	enterPropertyName?: (ctx: PropertyNameContext) => void;
	/**
	 * Exit a parse tree produced by `HyperTalkParser.propertyName`.
	 * @param ctx the parse tree
	 */
	exitPropertyName?: (ctx: PropertyNameContext) => void;

	/**
	 * Enter a parse tree produced by `HyperTalkParser.propertyValue`.
	 * @param ctx the parse tree
	 */
	enterPropertyValue?: (ctx: PropertyValueContext) => void;
	/**
	 * Exit a parse tree produced by `HyperTalkParser.propertyValue`.
	 * @param ctx the parse tree
	 */
	exitPropertyValue?: (ctx: PropertyValueContext) => void;

	/**
	 * Enter a parse tree produced by `HyperTalkParser.commandName`.
	 * @param ctx the parse tree
	 */
	enterCommandName?: (ctx: CommandNameContext) => void;
	/**
	 * Exit a parse tree produced by `HyperTalkParser.commandName`.
	 * @param ctx the parse tree
	 */
	exitCommandName?: (ctx: CommandNameContext) => void;

	/**
	 * Enter a parse tree produced by `HyperTalkParser.picture`.
	 * @param ctx the parse tree
	 */
	enterPicture?: (ctx: PictureContext) => void;
	/**
	 * Exit a parse tree produced by `HyperTalkParser.picture`.
	 * @param ctx the parse tree
	 */
	exitPicture?: (ctx: PictureContext) => void;

	/**
	 * Enter a parse tree produced by `HyperTalkParser.seconds`.
	 * @param ctx the parse tree
	 */
	enterSeconds?: (ctx: SecondsContext) => void;
	/**
	 * Exit a parse tree produced by `HyperTalkParser.seconds`.
	 * @param ctx the parse tree
	 */
	exitSeconds?: (ctx: SecondsContext) => void;

	/**
	 * Enter a parse tree produced by `HyperTalkParser.speed`.
	 * @param ctx the parse tree
	 */
	enterSpeed?: (ctx: SpeedContext) => void;
	/**
	 * Exit a parse tree produced by `HyperTalkParser.speed`.
	 * @param ctx the parse tree
	 */
	exitSpeed?: (ctx: SpeedContext) => void;

	/**
	 * Enter a parse tree produced by `HyperTalkParser.image`.
	 * @param ctx the parse tree
	 */
	enterImage?: (ctx: ImageContext) => void;
	/**
	 * Exit a parse tree produced by `HyperTalkParser.image`.
	 * @param ctx the parse tree
	 */
	exitImage?: (ctx: ImageContext) => void;

	/**
	 * Enter a parse tree produced by `HyperTalkParser.effect`.
	 * @param ctx the parse tree
	 */
	enterEffect?: (ctx: EffectContext) => void;
	/**
	 * Exit a parse tree produced by `HyperTalkParser.effect`.
	 * @param ctx the parse tree
	 */
	exitEffect?: (ctx: EffectContext) => void;

	/**
	 * Enter a parse tree produced by `HyperTalkParser.timeUnit`.
	 * @param ctx the parse tree
	 */
	enterTimeUnit?: (ctx: TimeUnitContext) => void;
	/**
	 * Exit a parse tree produced by `HyperTalkParser.timeUnit`.
	 * @param ctx the parse tree
	 */
	exitTimeUnit?: (ctx: TimeUnitContext) => void;

	/**
	 * Enter a parse tree produced by `HyperTalkParser.position`.
	 * @param ctx the parse tree
	 */
	enterPosition?: (ctx: PositionContext) => void;
	/**
	 * Exit a parse tree produced by `HyperTalkParser.position`.
	 * @param ctx the parse tree
	 */
	exitPosition?: (ctx: PositionContext) => void;

	/**
	 * Enter a parse tree produced by `HyperTalkParser.message`.
	 * @param ctx the parse tree
	 */
	enterMessage?: (ctx: MessageContext) => void;
	/**
	 * Exit a parse tree produced by `HyperTalkParser.message`.
	 * @param ctx the parse tree
	 */
	exitMessage?: (ctx: MessageContext) => void;

	/**
	 * Enter a parse tree produced by `HyperTalkParser.cards`.
	 * @param ctx the parse tree
	 */
	enterCards?: (ctx: CardsContext) => void;
	/**
	 * Exit a parse tree produced by `HyperTalkParser.cards`.
	 * @param ctx the parse tree
	 */
	exitCards?: (ctx: CardsContext) => void;

	/**
	 * Enter a parse tree produced by `HyperTalkParser.card`.
	 * @param ctx the parse tree
	 */
	enterCard?: (ctx: CardContext) => void;
	/**
	 * Exit a parse tree produced by `HyperTalkParser.card`.
	 * @param ctx the parse tree
	 */
	exitCard?: (ctx: CardContext) => void;

	/**
	 * Enter a parse tree produced by `HyperTalkParser.background`.
	 * @param ctx the parse tree
	 */
	enterBackground?: (ctx: BackgroundContext) => void;
	/**
	 * Exit a parse tree produced by `HyperTalkParser.background`.
	 * @param ctx the parse tree
	 */
	exitBackground?: (ctx: BackgroundContext) => void;

	/**
	 * Enter a parse tree produced by `HyperTalkParser.button`.
	 * @param ctx the parse tree
	 */
	enterButton?: (ctx: ButtonContext) => void;
	/**
	 * Exit a parse tree produced by `HyperTalkParser.button`.
	 * @param ctx the parse tree
	 */
	exitButton?: (ctx: ButtonContext) => void;

	/**
	 * Enter a parse tree produced by `HyperTalkParser.field`.
	 * @param ctx the parse tree
	 */
	enterField?: (ctx: FieldContext) => void;
	/**
	 * Exit a parse tree produced by `HyperTalkParser.field`.
	 * @param ctx the parse tree
	 */
	exitField?: (ctx: FieldContext) => void;

	/**
	 * Enter a parse tree produced by `HyperTalkParser.stack`.
	 * @param ctx the parse tree
	 */
	enterStack?: (ctx: StackContext) => void;
	/**
	 * Exit a parse tree produced by `HyperTalkParser.stack`.
	 * @param ctx the parse tree
	 */
	exitStack?: (ctx: StackContext) => void;

	/**
	 * Enter a parse tree produced by `HyperTalkParser.character`.
	 * @param ctx the parse tree
	 */
	enterCharacter?: (ctx: CharacterContext) => void;
	/**
	 * Exit a parse tree produced by `HyperTalkParser.character`.
	 * @param ctx the parse tree
	 */
	exitCharacter?: (ctx: CharacterContext) => void;

	/**
	 * Enter a parse tree produced by `HyperTalkParser.word`.
	 * @param ctx the parse tree
	 */
	enterWord?: (ctx: WordContext) => void;
	/**
	 * Exit a parse tree produced by `HyperTalkParser.word`.
	 * @param ctx the parse tree
	 */
	exitWord?: (ctx: WordContext) => void;

	/**
	 * Enter a parse tree produced by `HyperTalkParser.line`.
	 * @param ctx the parse tree
	 */
	enterLine?: (ctx: LineContext) => void;
	/**
	 * Exit a parse tree produced by `HyperTalkParser.line`.
	 * @param ctx the parse tree
	 */
	exitLine?: (ctx: LineContext) => void;

	/**
	 * Enter a parse tree produced by `HyperTalkParser.item`.
	 * @param ctx the parse tree
	 */
	enterItem?: (ctx: ItemContext) => void;
	/**
	 * Exit a parse tree produced by `HyperTalkParser.item`.
	 * @param ctx the parse tree
	 */
	exitItem?: (ctx: ItemContext) => void;

	/**
	 * Enter a parse tree produced by `HyperTalkParser.of`.
	 * @param ctx the parse tree
	 */
	enterOf?: (ctx: OfContext) => void;
	/**
	 * Exit a parse tree produced by `HyperTalkParser.of`.
	 * @param ctx the parse tree
	 */
	exitOf?: (ctx: OfContext) => void;
}

