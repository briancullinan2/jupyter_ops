// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/hypertalk/HyperTalk.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `HyperTalkParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface HyperTalkVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `HyperTalkParser.script`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScript?: (ctx: ScriptContext) => Result;

	/**
	 * Visit a parse tree produced by `HyperTalkParser.scriptlet`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScriptlet?: (ctx: ScriptletContext) => Result;

	/**
	 * Visit a parse tree produced by `HyperTalkParser.multilineScriptlet`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultilineScriptlet?: (ctx: MultilineScriptletContext) => Result;

	/**
	 * Visit a parse tree produced by `HyperTalkParser.handler`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHandler?: (ctx: HandlerContext) => Result;

	/**
	 * Visit a parse tree produced by `HyperTalkParser.function`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction?: (ctx: FunctionContext) => Result;

	/**
	 * Visit a parse tree produced by `HyperTalkParser.handlerName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHandlerName?: (ctx: HandlerNameContext) => Result;

	/**
	 * Visit a parse tree produced by `HyperTalkParser.parameterList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameterList?: (ctx: ParameterListContext) => Result;

	/**
	 * Visit a parse tree produced by `HyperTalkParser.statementList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatementList?: (ctx: StatementListContext) => Result;

	/**
	 * Visit a parse tree produced by `HyperTalkParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HyperTalkParser.globalStmnt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGlobalStmnt?: (ctx: GlobalStmntContext) => Result;

	/**
	 * Visit a parse tree produced by `HyperTalkParser.returnStmnt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturnStmnt?: (ctx: ReturnStmntContext) => Result;

	/**
	 * Visit a parse tree produced by `HyperTalkParser.ifStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfStatement?: (ctx: IfStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HyperTalkParser.thenStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitThenStatement?: (ctx: ThenStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HyperTalkParser.elseStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElseStatement?: (ctx: ElseStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HyperTalkParser.repeatStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRepeatStatement?: (ctx: RepeatStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HyperTalkParser.messageStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMessageStatement?: (ctx: MessageStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HyperTalkParser.commandStmnt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommandStmnt?: (ctx: CommandStmntContext) => Result;

	/**
	 * Visit a parse tree produced by `HyperTalkParser.remoteNavOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRemoteNavOption?: (ctx: RemoteNavOptionContext) => Result;

	/**
	 * Visit a parse tree produced by `HyperTalkParser.convertible`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConvertible?: (ctx: ConvertibleContext) => Result;

	/**
	 * Visit a parse tree produced by `HyperTalkParser.conversionFormat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConversionFormat?: (ctx: ConversionFormatContext) => Result;

	/**
	 * Visit a parse tree produced by `HyperTalkParser.length`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLength?: (ctx: LengthContext) => Result;

	/**
	 * Visit a parse tree produced by `HyperTalkParser.sortDirection`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSortDirection?: (ctx: SortDirectionContext) => Result;

	/**
	 * Visit a parse tree produced by `HyperTalkParser.sortChunkType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSortChunkType?: (ctx: SortChunkTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `HyperTalkParser.sortStyle`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSortStyle?: (ctx: SortStyleContext) => Result;

	/**
	 * Visit a parse tree produced by `HyperTalkParser.repeatRange`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRepeatRange?: (ctx: RepeatRangeContext) => Result;

	/**
	 * Visit a parse tree produced by `HyperTalkParser.duration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDuration?: (ctx: DurationContext) => Result;

	/**
	 * Visit a parse tree produced by `HyperTalkParser.count`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCount?: (ctx: CountContext) => Result;

	/**
	 * Visit a parse tree produced by `HyperTalkParser.range`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRange?: (ctx: RangeContext) => Result;

	/**
	 * Visit a parse tree produced by `HyperTalkParser.chunk`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitChunk?: (ctx: ChunkContext) => Result;

	/**
	 * Visit a parse tree produced by `HyperTalkParser.menu`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMenu?: (ctx: MenuContext) => Result;

	/**
	 * Visit a parse tree produced by `HyperTalkParser.menuItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMenuItem?: (ctx: MenuItemContext) => Result;

	/**
	 * Visit a parse tree produced by `HyperTalkParser.property`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProperty?: (ctx: PropertyContext) => Result;

	/**
	 * Visit a parse tree produced by `HyperTalkParser.globalProperty`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGlobalProperty?: (ctx: GlobalPropertyContext) => Result;

	/**
	 * Visit a parse tree produced by `HyperTalkParser.partProperty`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartProperty?: (ctx: PartPropertyContext) => Result;

	/**
	 * Visit a parse tree produced by `HyperTalkParser.part`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPart?: (ctx: PartContext) => Result;

	/**
	 * Visit a parse tree produced by `HyperTalkParser.stackPart`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStackPart?: (ctx: StackPartContext) => Result;

	/**
	 * Visit a parse tree produced by `HyperTalkParser.buttonPart`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitButtonPart?: (ctx: ButtonPartContext) => Result;

	/**
	 * Visit a parse tree produced by `HyperTalkParser.fieldPart`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldPart?: (ctx: FieldPartContext) => Result;

	/**
	 * Visit a parse tree produced by `HyperTalkParser.cardPart`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCardPart?: (ctx: CardPartContext) => Result;

	/**
	 * Visit a parse tree produced by `HyperTalkParser.bkgndPart`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBkgndPart?: (ctx: BkgndPartContext) => Result;

	/**
	 * Visit a parse tree produced by `HyperTalkParser.windowPart`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWindowPart?: (ctx: WindowPartContext) => Result;

	/**
	 * Visit a parse tree produced by `HyperTalkParser.listExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitListExpression?: (ctx: ListExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `HyperTalkParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `HyperTalkParser.factor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFactor?: (ctx: FactorContext) => Result;

	/**
	 * Visit a parse tree produced by `HyperTalkParser.container`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitContainer?: (ctx: ContainerContext) => Result;

	/**
	 * Visit a parse tree produced by `HyperTalkParser.musicExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMusicExpression?: (ctx: MusicExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `HyperTalkParser.toolExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitToolExpression?: (ctx: ToolExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `HyperTalkParser.effectExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEffectExpression?: (ctx: EffectExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `HyperTalkParser.functionCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionCall?: (ctx: FunctionCallContext) => Result;

	/**
	 * Visit a parse tree produced by `HyperTalkParser.builtInFunc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBuiltInFunc?: (ctx: BuiltInFuncContext) => Result;

	/**
	 * Visit a parse tree produced by `HyperTalkParser.zeroArgFunc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitZeroArgFunc?: (ctx: ZeroArgFuncContext) => Result;

	/**
	 * Visit a parse tree produced by `HyperTalkParser.singleArgFunc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSingleArgFunc?: (ctx: SingleArgFuncContext) => Result;

	/**
	 * Visit a parse tree produced by `HyperTalkParser.multiArgFunc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiArgFunc?: (ctx: MultiArgFuncContext) => Result;

	/**
	 * Visit a parse tree produced by `HyperTalkParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral?: (ctx: LiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `HyperTalkParser.preposition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPreposition?: (ctx: PrepositionContext) => Result;

	/**
	 * Visit a parse tree produced by `HyperTalkParser.constant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstant?: (ctx: ConstantContext) => Result;

	/**
	 * Visit a parse tree produced by `HyperTalkParser.cardinalValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCardinalValue?: (ctx: CardinalValueContext) => Result;

	/**
	 * Visit a parse tree produced by `HyperTalkParser.ordinal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrdinal?: (ctx: OrdinalContext) => Result;

	/**
	 * Visit a parse tree produced by `HyperTalkParser.ordinalValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrdinalValue?: (ctx: OrdinalValueContext) => Result;

	/**
	 * Visit a parse tree produced by `HyperTalkParser.mouseState`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMouseState?: (ctx: MouseStateContext) => Result;

	/**
	 * Visit a parse tree produced by `HyperTalkParser.modifierKey`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModifierKey?: (ctx: ModifierKeyContext) => Result;

	/**
	 * Visit a parse tree produced by `HyperTalkParser.knownType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKnownType?: (ctx: KnownTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `HyperTalkParser.findType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFindType?: (ctx: FindTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `HyperTalkParser.propertyName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPropertyName?: (ctx: PropertyNameContext) => Result;

	/**
	 * Visit a parse tree produced by `HyperTalkParser.propertyValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPropertyValue?: (ctx: PropertyValueContext) => Result;

	/**
	 * Visit a parse tree produced by `HyperTalkParser.commandName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommandName?: (ctx: CommandNameContext) => Result;

	/**
	 * Visit a parse tree produced by `HyperTalkParser.picture`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPicture?: (ctx: PictureContext) => Result;

	/**
	 * Visit a parse tree produced by `HyperTalkParser.seconds`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSeconds?: (ctx: SecondsContext) => Result;

	/**
	 * Visit a parse tree produced by `HyperTalkParser.speed`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSpeed?: (ctx: SpeedContext) => Result;

	/**
	 * Visit a parse tree produced by `HyperTalkParser.image`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImage?: (ctx: ImageContext) => Result;

	/**
	 * Visit a parse tree produced by `HyperTalkParser.effect`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEffect?: (ctx: EffectContext) => Result;

	/**
	 * Visit a parse tree produced by `HyperTalkParser.timeUnit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTimeUnit?: (ctx: TimeUnitContext) => Result;

	/**
	 * Visit a parse tree produced by `HyperTalkParser.position`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPosition?: (ctx: PositionContext) => Result;

	/**
	 * Visit a parse tree produced by `HyperTalkParser.message`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMessage?: (ctx: MessageContext) => Result;

	/**
	 * Visit a parse tree produced by `HyperTalkParser.cards`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCards?: (ctx: CardsContext) => Result;

	/**
	 * Visit a parse tree produced by `HyperTalkParser.card`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCard?: (ctx: CardContext) => Result;

	/**
	 * Visit a parse tree produced by `HyperTalkParser.background`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBackground?: (ctx: BackgroundContext) => Result;

	/**
	 * Visit a parse tree produced by `HyperTalkParser.button`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitButton?: (ctx: ButtonContext) => Result;

	/**
	 * Visit a parse tree produced by `HyperTalkParser.field`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitField?: (ctx: FieldContext) => Result;

	/**
	 * Visit a parse tree produced by `HyperTalkParser.stack`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStack?: (ctx: StackContext) => Result;

	/**
	 * Visit a parse tree produced by `HyperTalkParser.character`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCharacter?: (ctx: CharacterContext) => Result;

	/**
	 * Visit a parse tree produced by `HyperTalkParser.word`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWord?: (ctx: WordContext) => Result;

	/**
	 * Visit a parse tree produced by `HyperTalkParser.line`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLine?: (ctx: LineContext) => Result;

	/**
	 * Visit a parse tree produced by `HyperTalkParser.item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitItem?: (ctx: ItemContext) => Result;

	/**
	 * Visit a parse tree produced by `HyperTalkParser.of`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOf?: (ctx: OfContext) => Result;
}

