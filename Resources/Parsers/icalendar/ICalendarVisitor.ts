// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/icalendar/ICalendar.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { ParseContext } from "./ICalendarParser";
import { IcalstreamContext } from "./ICalendarParser";
import { IcalobjectContext } from "./ICalendarParser";
import { CalpropContext } from "./ICalendarParser";
import { CalscaleContext } from "./ICalendarParser";
import { MethodContext } from "./ICalendarParser";
import { ProdidContext } from "./ICalendarParser";
import { VersionContext } from "./ICalendarParser";
import { VervalueContext } from "./ICalendarParser";
import { ComponentContext } from "./ICalendarParser";
import { Iana_compContext } from "./ICalendarParser";
import { X_compContext } from "./ICalendarParser";
import { ContentlineContext } from "./ICalendarParser";
import { NameContext } from "./ICalendarParser";
import { ValueContext } from "./ICalendarParser";
import { EventcContext } from "./ICalendarParser";
import { TodocContext } from "./ICalendarParser";
import { JournalcContext } from "./ICalendarParser";
import { FreebusycContext } from "./ICalendarParser";
import { TimezonecContext } from "./ICalendarParser";
import { AlarmcContext } from "./ICalendarParser";
import { EventpropContext } from "./ICalendarParser";
import { TodopropContext } from "./ICalendarParser";
import { JourpropContext } from "./ICalendarParser";
import { FbpropContext } from "./ICalendarParser";
import { TimezonepropContext } from "./ICalendarParser";
import { TzpropContext } from "./ICalendarParser";
import { AlarmpropContext } from "./ICalendarParser";
import { StandardcContext } from "./ICalendarParser";
import { DaylightcContext } from "./ICalendarParser";
import { AttachContext } from "./ICalendarParser";
import { AttachparamContext } from "./ICalendarParser";
import { CategoriesContext } from "./ICalendarParser";
import { CatparamContext } from "./ICalendarParser";
import { ClazzContext } from "./ICalendarParser";
import { ClassvalueContext } from "./ICalendarParser";
import { CommentContext } from "./ICalendarParser";
import { CommparamContext } from "./ICalendarParser";
import { DescriptionContext } from "./ICalendarParser";
import { DescparamContext } from "./ICalendarParser";
import { GeoContext } from "./ICalendarParser";
import { GeovalueContext } from "./ICalendarParser";
import { LocationContext } from "./ICalendarParser";
import { LocparamContext } from "./ICalendarParser";
import { PercentContext } from "./ICalendarParser";
import { PriorityContext } from "./ICalendarParser";
import { PriovalueContext } from "./ICalendarParser";
import { ResourcesContext } from "./ICalendarParser";
import { ResrcparamContext } from "./ICalendarParser";
import { StatusContext } from "./ICalendarParser";
import { StatvalueContext } from "./ICalendarParser";
import { Statvalue_eventContext } from "./ICalendarParser";
import { Statvalue_todoContext } from "./ICalendarParser";
import { Statvalue_jourContext } from "./ICalendarParser";
import { SummaryContext } from "./ICalendarParser";
import { SummparamContext } from "./ICalendarParser";
import { CompletedContext } from "./ICalendarParser";
import { DtendContext } from "./ICalendarParser";
import { DtendparamContext } from "./ICalendarParser";
import { DueContext } from "./ICalendarParser";
import { DueparamContext } from "./ICalendarParser";
import { DtstartContext } from "./ICalendarParser";
import { DtstparamContext } from "./ICalendarParser";
import { DurationContext } from "./ICalendarParser";
import { FreebusyContext } from "./ICalendarParser";
import { FbparamContext } from "./ICalendarParser";
import { FbvalueContext } from "./ICalendarParser";
import { TranspContext } from "./ICalendarParser";
import { TransvalueContext } from "./ICalendarParser";
import { TzidContext } from "./ICalendarParser";
import { TznameContext } from "./ICalendarParser";
import { TznparamContext } from "./ICalendarParser";
import { TzoffsetfromContext } from "./ICalendarParser";
import { TzoffsettoContext } from "./ICalendarParser";
import { TzurlContext } from "./ICalendarParser";
import { AttendeeContext } from "./ICalendarParser";
import { AttparamContext } from "./ICalendarParser";
import { ContactContext } from "./ICalendarParser";
import { ContparamContext } from "./ICalendarParser";
import { OrganizerContext } from "./ICalendarParser";
import { OrgparamContext } from "./ICalendarParser";
import { RecuridContext } from "./ICalendarParser";
import { RidparamContext } from "./ICalendarParser";
import { RelatedContext } from "./ICalendarParser";
import { RelparamContext } from "./ICalendarParser";
import { UrlContext } from "./ICalendarParser";
import { UidContext } from "./ICalendarParser";
import { ExdateContext } from "./ICalendarParser";
import { ExdtparamContext } from "./ICalendarParser";
import { RdateContext } from "./ICalendarParser";
import { RdtparamContext } from "./ICalendarParser";
import { RdtvalContext } from "./ICalendarParser";
import { Date_time_dateContext } from "./ICalendarParser";
import { RruleContext } from "./ICalendarParser";
import { ActionContext } from "./ICalendarParser";
import { ActionvalueContext } from "./ICalendarParser";
import { RepeatContext } from "./ICalendarParser";
import { TriggerContext } from "./ICalendarParser";
import { TrigrelContext } from "./ICalendarParser";
import { TrigabsContext } from "./ICalendarParser";
import { CreatedContext } from "./ICalendarParser";
import { DtstampContext } from "./ICalendarParser";
import { Last_modContext } from "./ICalendarParser";
import { SeqContext } from "./ICalendarParser";
import { Iana_propContext } from "./ICalendarParser";
import { X_propContext } from "./ICalendarParser";
import { RstatusContext } from "./ICalendarParser";
import { RstatparamContext } from "./ICalendarParser";
import { StatcodeContext } from "./ICalendarParser";
import { Param_nameContext } from "./ICalendarParser";
import { Param_valueContext } from "./ICalendarParser";
import { ParamtextContext } from "./ICalendarParser";
import { Quoted_stringContext } from "./ICalendarParser";
import { Iana_tokenContext } from "./ICalendarParser";
import { IcalparameterContext } from "./ICalendarParser";
import { AltrepparamContext } from "./ICalendarParser";
import { CnparamContext } from "./ICalendarParser";
import { CutypeparamContext } from "./ICalendarParser";
import { DelfromparamContext } from "./ICalendarParser";
import { DeltoparamContext } from "./ICalendarParser";
import { DirparamContext } from "./ICalendarParser";
import { EncodingparamContext } from "./ICalendarParser";
import { FmttypeparamContext } from "./ICalendarParser";
import { FbtypeparamContext } from "./ICalendarParser";
import { LanguageparamContext } from "./ICalendarParser";
import { MemberparamContext } from "./ICalendarParser";
import { PartstatparamContext } from "./ICalendarParser";
import { RangeparamContext } from "./ICalendarParser";
import { TrigrelparamContext } from "./ICalendarParser";
import { ReltypeparamContext } from "./ICalendarParser";
import { RoleparamContext } from "./ICalendarParser";
import { RsvpparamContext } from "./ICalendarParser";
import { SentbyparamContext } from "./ICalendarParser";
import { TzidparamContext } from "./ICalendarParser";
import { ValuetypeparamContext } from "./ICalendarParser";
import { ValuetypeContext } from "./ICalendarParser";
import { BinaryContext } from "./ICalendarParser";
import { B_charsContext } from "./ICalendarParser";
import { B_endContext } from "./ICalendarParser";
import { BoolContext } from "./ICalendarParser";
import { Cal_addressContext } from "./ICalendarParser";
import { DateContext } from "./ICalendarParser";
import { Date_timeContext } from "./ICalendarParser";
import { Dur_valueContext } from "./ICalendarParser";
import { Float_numContext } from "./ICalendarParser";
import { DigitsContext } from "./ICalendarParser";
import { IntegerContext } from "./ICalendarParser";
import { PeriodContext } from "./ICalendarParser";
import { RecurContext } from "./ICalendarParser";
import { TextContext } from "./ICalendarParser";
import { TimeContext } from "./ICalendarParser";
import { UriContext } from "./ICalendarParser";
import { Utc_offsetContext } from "./ICalendarParser";
import { Other_paramContext } from "./ICalendarParser";
import { Iana_paramContext } from "./ICalendarParser";
import { X_paramContext } from "./ICalendarParser";
import { Type_nameContext } from "./ICalendarParser";
import { Subtype_nameContext } from "./ICalendarParser";
import { Reg_nameContext } from "./ICalendarParser";
import { LanguageContext } from "./ICalendarParser";
import { Partstat_eventContext } from "./ICalendarParser";
import { Partstat_todoContext } from "./ICalendarParser";
import { Partstat_jourContext } from "./ICalendarParser";
import { B_charContext } from "./ICalendarParser";
import { Date_valueContext } from "./ICalendarParser";
import { Date_fullyearContext } from "./ICalendarParser";
import { Date_monthContext } from "./ICalendarParser";
import { Date_mdayContext } from "./ICalendarParser";
import { Time_hourContext } from "./ICalendarParser";
import { Time_minuteContext } from "./ICalendarParser";
import { Time_secondContext } from "./ICalendarParser";
import { Dur_dateContext } from "./ICalendarParser";
import { Dur_dayContext } from "./ICalendarParser";
import { Dur_timeContext } from "./ICalendarParser";
import { Dur_weekContext } from "./ICalendarParser";
import { Dur_hourContext } from "./ICalendarParser";
import { Dur_minuteContext } from "./ICalendarParser";
import { Dur_secondContext } from "./ICalendarParser";
import { Period_explicitContext } from "./ICalendarParser";
import { Period_startContext } from "./ICalendarParser";
import { Recur_rule_partContext } from "./ICalendarParser";
import { FreqContext } from "./ICalendarParser";
import { EnddateContext } from "./ICalendarParser";
import { CountContext } from "./ICalendarParser";
import { IntervalContext } from "./ICalendarParser";
import { ByseclistContext } from "./ICalendarParser";
import { ByminlistContext } from "./ICalendarParser";
import { ByhrlistContext } from "./ICalendarParser";
import { BywdaylistContext } from "./ICalendarParser";
import { WeekdaynumContext } from "./ICalendarParser";
import { WeekdayContext } from "./ICalendarParser";
import { BymodaylistContext } from "./ICalendarParser";
import { MonthdaynumContext } from "./ICalendarParser";
import { ByyrdaylistContext } from "./ICalendarParser";
import { YeardaynumContext } from "./ICalendarParser";
import { OrdyrdayContext } from "./ICalendarParser";
import { BywknolistContext } from "./ICalendarParser";
import { WeeknumContext } from "./ICalendarParser";
import { BymolistContext } from "./ICalendarParser";
import { BysplistContext } from "./ICalendarParser";
import { Digits_2Context } from "./ICalendarParser";
import { Digits_1_2Context } from "./ICalendarParser";
import { Safe_charContext } from "./ICalendarParser";
import { Value_charContext } from "./ICalendarParser";
import { Qsafe_charContext } from "./ICalendarParser";
import { Tsafe_charContext } from "./ICalendarParser";
import { Time_numzoneContext } from "./ICalendarParser";
import { Reg_name_charContext } from "./ICalendarParser";
import { Language_charContext } from "./ICalendarParser";
import { X_nameContext } from "./ICalendarParser";
import { Alpha_numContext } from "./ICalendarParser";
import { DigitContext } from "./ICalendarParser";
import { AlphaContext } from "./ICalendarParser";
import { K_acceptedContext } from "./ICalendarParser";
import { K_actionContext } from "./ICalendarParser";
import { K_addressContext } from "./ICalendarParser";
import { K_altrepContext } from "./ICalendarParser";
import { K_attachContext } from "./ICalendarParser";
import { K_attendeeContext } from "./ICalendarParser";
import { K_audioContext } from "./ICalendarParser";
import { K_baseContext } from "./ICalendarParser";
import { K_beginContext } from "./ICalendarParser";
import { K_binaryContext } from "./ICalendarParser";
import { K_bitContext } from "./ICalendarParser";
import { K_booleanContext } from "./ICalendarParser";
import { K_busyContext } from "./ICalendarParser";
import { K_busy_unavailableContext } from "./ICalendarParser";
import { K_busy_tentativeContext } from "./ICalendarParser";
import { K_bydayContext } from "./ICalendarParser";
import { K_byhourContext } from "./ICalendarParser";
import { K_byminuteContext } from "./ICalendarParser";
import { K_bymonthContext } from "./ICalendarParser";
import { K_bymonthdayContext } from "./ICalendarParser";
import { K_bysecondContext } from "./ICalendarParser";
import { K_bysetposContext } from "./ICalendarParser";
import { K_byweeknoContext } from "./ICalendarParser";
import { K_byyeardayContext } from "./ICalendarParser";
import { K_cal_addressContext } from "./ICalendarParser";
import { K_calscaleContext } from "./ICalendarParser";
import { K_cancelledContext } from "./ICalendarParser";
import { K_categoriesContext } from "./ICalendarParser";
import { K_chairContext } from "./ICalendarParser";
import { K_childContext } from "./ICalendarParser";
import { K_classContext } from "./ICalendarParser";
import { K_cnContext } from "./ICalendarParser";
import { K_commentContext } from "./ICalendarParser";
import { K_completedContext } from "./ICalendarParser";
import { K_confidentialContext } from "./ICalendarParser";
import { K_confirmedContext } from "./ICalendarParser";
import { K_contactContext } from "./ICalendarParser";
import { K_countContext } from "./ICalendarParser";
import { K_createdContext } from "./ICalendarParser";
import { K_cutypeContext } from "./ICalendarParser";
import { K_dailyContext } from "./ICalendarParser";
import { K_dateContext } from "./ICalendarParser";
import { K_date_timeContext } from "./ICalendarParser";
import { K_daylightContext } from "./ICalendarParser";
import { K_declinedContext } from "./ICalendarParser";
import { K_delegatedContext } from "./ICalendarParser";
import { K_delegated_fromContext } from "./ICalendarParser";
import { K_delegated_toContext } from "./ICalendarParser";
import { K_descriptionContext } from "./ICalendarParser";
import { K_dirContext } from "./ICalendarParser";
import { K_displayContext } from "./ICalendarParser";
import { K_draftContext } from "./ICalendarParser";
import { K_dtendContext } from "./ICalendarParser";
import { K_dtstampContext } from "./ICalendarParser";
import { K_dtstartContext } from "./ICalendarParser";
import { K_dueContext } from "./ICalendarParser";
import { K_durationContext } from "./ICalendarParser";
import { K_emailContext } from "./ICalendarParser";
import { K_encodingContext } from "./ICalendarParser";
import { K_endContext } from "./ICalendarParser";
import { K_exdateContext } from "./ICalendarParser";
import { K_falseContext } from "./ICalendarParser";
import { K_fbtypeContext } from "./ICalendarParser";
import { K_finalContext } from "./ICalendarParser";
import { K_floatContext } from "./ICalendarParser";
import { K_fmttypeContext } from "./ICalendarParser";
import { K_frContext } from "./ICalendarParser";
import { K_freeContext } from "./ICalendarParser";
import { K_freebusyContext } from "./ICalendarParser";
import { K_freqContext } from "./ICalendarParser";
import { K_geoContext } from "./ICalendarParser";
import { K_gregorianContext } from "./ICalendarParser";
import { K_groupContext } from "./ICalendarParser";
import { K_hourlyContext } from "./ICalendarParser";
import { K_in_processContext } from "./ICalendarParser";
import { K_individualContext } from "./ICalendarParser";
import { K_integerContext } from "./ICalendarParser";
import { K_intervalContext } from "./ICalendarParser";
import { K_languageContext } from "./ICalendarParser";
import { K_last_modifiedContext } from "./ICalendarParser";
import { K_locationContext } from "./ICalendarParser";
import { K_memberContext } from "./ICalendarParser";
import { K_methodContext } from "./ICalendarParser";
import { K_minutelyContext } from "./ICalendarParser";
import { K_moContext } from "./ICalendarParser";
import { K_monthlyContext } from "./ICalendarParser";
import { K_needs_actionContext } from "./ICalendarParser";
import { K_non_participantContext } from "./ICalendarParser";
import { K_opaqueContext } from "./ICalendarParser";
import { K_opt_participantContext } from "./ICalendarParser";
import { K_organizerContext } from "./ICalendarParser";
import { K_parentContext } from "./ICalendarParser";
import { K_participantContext } from "./ICalendarParser";
import { K_partstatContext } from "./ICalendarParser";
import { K_percent_completeContext } from "./ICalendarParser";
import { K_periodContext } from "./ICalendarParser";
import { K_priorityContext } from "./ICalendarParser";
import { K_privateContext } from "./ICalendarParser";
import { K_processContext } from "./ICalendarParser";
import { K_prodidContext } from "./ICalendarParser";
import { K_publicContext } from "./ICalendarParser";
import { K_rangeContext } from "./ICalendarParser";
import { K_rdateContext } from "./ICalendarParser";
import { K_recurContext } from "./ICalendarParser";
import { K_recurrence_idContext } from "./ICalendarParser";
import { K_relatContext } from "./ICalendarParser";
import { K_relatedContext } from "./ICalendarParser";
import { K_related_toContext } from "./ICalendarParser";
import { K_reltypeContext } from "./ICalendarParser";
import { K_repeatContext } from "./ICalendarParser";
import { K_req_participantContext } from "./ICalendarParser";
import { K_request_statusContext } from "./ICalendarParser";
import { K_resourceContext } from "./ICalendarParser";
import { K_resourcesContext } from "./ICalendarParser";
import { K_roleContext } from "./ICalendarParser";
import { K_roomContext } from "./ICalendarParser";
import { K_rruleContext } from "./ICalendarParser";
import { K_rsvpContext } from "./ICalendarParser";
import { K_saContext } from "./ICalendarParser";
import { K_secondlyContext } from "./ICalendarParser";
import { K_sent_byContext } from "./ICalendarParser";
import { K_sequenceContext } from "./ICalendarParser";
import { K_siblingContext } from "./ICalendarParser";
import { K_standardContext } from "./ICalendarParser";
import { K_startContext } from "./ICalendarParser";
import { K_statusContext } from "./ICalendarParser";
import { K_suContext } from "./ICalendarParser";
import { K_summaryContext } from "./ICalendarParser";
import { K_tentativeContext } from "./ICalendarParser";
import { K_textContext } from "./ICalendarParser";
import { K_thContext } from "./ICalendarParser";
import { K_thisandfutureContext } from "./ICalendarParser";
import { K_timeContext } from "./ICalendarParser";
import { K_transpContext } from "./ICalendarParser";
import { K_transparentContext } from "./ICalendarParser";
import { K_triggerContext } from "./ICalendarParser";
import { K_trueContext } from "./ICalendarParser";
import { K_tuContext } from "./ICalendarParser";
import { K_tzidContext } from "./ICalendarParser";
import { K_tznameContext } from "./ICalendarParser";
import { K_tzoffsetfromContext } from "./ICalendarParser";
import { K_tzoffsettoContext } from "./ICalendarParser";
import { K_tzurlContext } from "./ICalendarParser";
import { K_uidContext } from "./ICalendarParser";
import { K_unknownContext } from "./ICalendarParser";
import { K_untilContext } from "./ICalendarParser";
import { K_uriContext } from "./ICalendarParser";
import { K_urlContext } from "./ICalendarParser";
import { K_utc_offsetContext } from "./ICalendarParser";
import { K_valarmContext } from "./ICalendarParser";
import { K_valueContext } from "./ICalendarParser";
import { K_vcalendarContext } from "./ICalendarParser";
import { K_versionContext } from "./ICalendarParser";
import { K_veventContext } from "./ICalendarParser";
import { K_vfreebusyContext } from "./ICalendarParser";
import { K_vjournalContext } from "./ICalendarParser";
import { K_vtimezoneContext } from "./ICalendarParser";
import { K_vtodoContext } from "./ICalendarParser";
import { K_weContext } from "./ICalendarParser";
import { K_weeklyContext } from "./ICalendarParser";
import { K_wkstContext } from "./ICalendarParser";
import { K_yearlyContext } from "./ICalendarParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `ICalendarParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface ICalendarVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `ICalendarParser.parse`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParse?: (ctx: ParseContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.icalstream`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIcalstream?: (ctx: IcalstreamContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.icalobject`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIcalobject?: (ctx: IcalobjectContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.calprop`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCalprop?: (ctx: CalpropContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.calscale`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCalscale?: (ctx: CalscaleContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.method`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethod?: (ctx: MethodContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.prodid`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProdid?: (ctx: ProdidContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.version`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVersion?: (ctx: VersionContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.vervalue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVervalue?: (ctx: VervalueContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.component`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComponent?: (ctx: ComponentContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.iana_comp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIana_comp?: (ctx: Iana_compContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.x_comp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitX_comp?: (ctx: X_compContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.contentline`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitContentline?: (ctx: ContentlineContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitName?: (ctx: NameContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValue?: (ctx: ValueContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.eventc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEventc?: (ctx: EventcContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.todoc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTodoc?: (ctx: TodocContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.journalc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJournalc?: (ctx: JournalcContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.freebusyc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFreebusyc?: (ctx: FreebusycContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.timezonec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTimezonec?: (ctx: TimezonecContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.alarmc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlarmc?: (ctx: AlarmcContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.eventprop`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEventprop?: (ctx: EventpropContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.todoprop`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTodoprop?: (ctx: TodopropContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.jourprop`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJourprop?: (ctx: JourpropContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.fbprop`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFbprop?: (ctx: FbpropContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.timezoneprop`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTimezoneprop?: (ctx: TimezonepropContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.tzprop`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTzprop?: (ctx: TzpropContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.alarmprop`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlarmprop?: (ctx: AlarmpropContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.standardc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStandardc?: (ctx: StandardcContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.daylightc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDaylightc?: (ctx: DaylightcContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.attach`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttach?: (ctx: AttachContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.attachparam`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttachparam?: (ctx: AttachparamContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.categories`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCategories?: (ctx: CategoriesContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.catparam`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCatparam?: (ctx: CatparamContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.clazz`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClazz?: (ctx: ClazzContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.classvalue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassvalue?: (ctx: ClassvalueContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.comment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComment?: (ctx: CommentContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.commparam`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommparam?: (ctx: CommparamContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.description`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDescription?: (ctx: DescriptionContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.descparam`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDescparam?: (ctx: DescparamContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.geo`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGeo?: (ctx: GeoContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.geovalue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGeovalue?: (ctx: GeovalueContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.location`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocation?: (ctx: LocationContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.locparam`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocparam?: (ctx: LocparamContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.percent`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPercent?: (ctx: PercentContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.priority`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPriority?: (ctx: PriorityContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.priovalue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPriovalue?: (ctx: PriovalueContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.resources`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitResources?: (ctx: ResourcesContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.resrcparam`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitResrcparam?: (ctx: ResrcparamContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.status`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatus?: (ctx: StatusContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.statvalue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatvalue?: (ctx: StatvalueContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.statvalue_event`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatvalue_event?: (ctx: Statvalue_eventContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.statvalue_todo`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatvalue_todo?: (ctx: Statvalue_todoContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.statvalue_jour`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatvalue_jour?: (ctx: Statvalue_jourContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.summary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSummary?: (ctx: SummaryContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.summparam`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSummparam?: (ctx: SummparamContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.completed`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompleted?: (ctx: CompletedContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.dtend`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDtend?: (ctx: DtendContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.dtendparam`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDtendparam?: (ctx: DtendparamContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.due`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDue?: (ctx: DueContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.dueparam`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDueparam?: (ctx: DueparamContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.dtstart`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDtstart?: (ctx: DtstartContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.dtstparam`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDtstparam?: (ctx: DtstparamContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.duration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDuration?: (ctx: DurationContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.freebusy`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFreebusy?: (ctx: FreebusyContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.fbparam`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFbparam?: (ctx: FbparamContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.fbvalue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFbvalue?: (ctx: FbvalueContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.transp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTransp?: (ctx: TranspContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.transvalue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTransvalue?: (ctx: TransvalueContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.tzid`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTzid?: (ctx: TzidContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.tzname`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTzname?: (ctx: TznameContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.tznparam`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTznparam?: (ctx: TznparamContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.tzoffsetfrom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTzoffsetfrom?: (ctx: TzoffsetfromContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.tzoffsetto`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTzoffsetto?: (ctx: TzoffsettoContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.tzurl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTzurl?: (ctx: TzurlContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.attendee`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttendee?: (ctx: AttendeeContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.attparam`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttparam?: (ctx: AttparamContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.contact`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitContact?: (ctx: ContactContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.contparam`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitContparam?: (ctx: ContparamContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.organizer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrganizer?: (ctx: OrganizerContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.orgparam`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrgparam?: (ctx: OrgparamContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.recurid`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRecurid?: (ctx: RecuridContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.ridparam`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRidparam?: (ctx: RidparamContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.related`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelated?: (ctx: RelatedContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.relparam`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelparam?: (ctx: RelparamContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.url`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUrl?: (ctx: UrlContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.uid`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUid?: (ctx: UidContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.exdate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExdate?: (ctx: ExdateContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.exdtparam`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExdtparam?: (ctx: ExdtparamContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.rdate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRdate?: (ctx: RdateContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.rdtparam`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRdtparam?: (ctx: RdtparamContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.rdtval`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRdtval?: (ctx: RdtvalContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.date_time_date`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDate_time_date?: (ctx: Date_time_dateContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.rrule`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRrule?: (ctx: RruleContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.action`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAction?: (ctx: ActionContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.actionvalue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitActionvalue?: (ctx: ActionvalueContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.repeat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRepeat?: (ctx: RepeatContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.trigger`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTrigger?: (ctx: TriggerContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.trigrel`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTrigrel?: (ctx: TrigrelContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.trigabs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTrigabs?: (ctx: TrigabsContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.created`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreated?: (ctx: CreatedContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.dtstamp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDtstamp?: (ctx: DtstampContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.last_mod`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLast_mod?: (ctx: Last_modContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.seq`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSeq?: (ctx: SeqContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.iana_prop`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIana_prop?: (ctx: Iana_propContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.x_prop`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitX_prop?: (ctx: X_propContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.rstatus`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRstatus?: (ctx: RstatusContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.rstatparam`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRstatparam?: (ctx: RstatparamContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.statcode`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatcode?: (ctx: StatcodeContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.param_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParam_name?: (ctx: Param_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.param_value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParam_value?: (ctx: Param_valueContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.paramtext`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParamtext?: (ctx: ParamtextContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.quoted_string`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuoted_string?: (ctx: Quoted_stringContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.iana_token`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIana_token?: (ctx: Iana_tokenContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.icalparameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIcalparameter?: (ctx: IcalparameterContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.altrepparam`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAltrepparam?: (ctx: AltrepparamContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.cnparam`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCnparam?: (ctx: CnparamContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.cutypeparam`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCutypeparam?: (ctx: CutypeparamContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.delfromparam`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDelfromparam?: (ctx: DelfromparamContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.deltoparam`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeltoparam?: (ctx: DeltoparamContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.dirparam`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDirparam?: (ctx: DirparamContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.encodingparam`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEncodingparam?: (ctx: EncodingparamContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.fmttypeparam`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFmttypeparam?: (ctx: FmttypeparamContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.fbtypeparam`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFbtypeparam?: (ctx: FbtypeparamContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.languageparam`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLanguageparam?: (ctx: LanguageparamContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.memberparam`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMemberparam?: (ctx: MemberparamContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.partstatparam`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartstatparam?: (ctx: PartstatparamContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.rangeparam`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRangeparam?: (ctx: RangeparamContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.trigrelparam`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTrigrelparam?: (ctx: TrigrelparamContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.reltypeparam`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReltypeparam?: (ctx: ReltypeparamContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.roleparam`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRoleparam?: (ctx: RoleparamContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.rsvpparam`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRsvpparam?: (ctx: RsvpparamContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.sentbyparam`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSentbyparam?: (ctx: SentbyparamContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.tzidparam`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTzidparam?: (ctx: TzidparamContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.valuetypeparam`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValuetypeparam?: (ctx: ValuetypeparamContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.valuetype`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValuetype?: (ctx: ValuetypeContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.binary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinary?: (ctx: BinaryContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.b_chars`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitB_chars?: (ctx: B_charsContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.b_end`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitB_end?: (ctx: B_endContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.bool`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBool?: (ctx: BoolContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.cal_address`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCal_address?: (ctx: Cal_addressContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.date`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDate?: (ctx: DateContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.date_time`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDate_time?: (ctx: Date_timeContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.dur_value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDur_value?: (ctx: Dur_valueContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.float_num`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFloat_num?: (ctx: Float_numContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.digits`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDigits?: (ctx: DigitsContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.integer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInteger?: (ctx: IntegerContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.period`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPeriod?: (ctx: PeriodContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.recur`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRecur?: (ctx: RecurContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.text`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitText?: (ctx: TextContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.time`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTime?: (ctx: TimeContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.uri`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUri?: (ctx: UriContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.utc_offset`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUtc_offset?: (ctx: Utc_offsetContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.other_param`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOther_param?: (ctx: Other_paramContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.iana_param`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIana_param?: (ctx: Iana_paramContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.x_param`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitX_param?: (ctx: X_paramContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.type_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType_name?: (ctx: Type_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.subtype_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubtype_name?: (ctx: Subtype_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.reg_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReg_name?: (ctx: Reg_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.language`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLanguage?: (ctx: LanguageContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.partstat_event`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartstat_event?: (ctx: Partstat_eventContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.partstat_todo`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartstat_todo?: (ctx: Partstat_todoContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.partstat_jour`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartstat_jour?: (ctx: Partstat_jourContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.b_char`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitB_char?: (ctx: B_charContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.date_value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDate_value?: (ctx: Date_valueContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.date_fullyear`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDate_fullyear?: (ctx: Date_fullyearContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.date_month`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDate_month?: (ctx: Date_monthContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.date_mday`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDate_mday?: (ctx: Date_mdayContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.time_hour`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTime_hour?: (ctx: Time_hourContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.time_minute`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTime_minute?: (ctx: Time_minuteContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.time_second`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTime_second?: (ctx: Time_secondContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.dur_date`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDur_date?: (ctx: Dur_dateContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.dur_day`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDur_day?: (ctx: Dur_dayContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.dur_time`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDur_time?: (ctx: Dur_timeContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.dur_week`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDur_week?: (ctx: Dur_weekContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.dur_hour`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDur_hour?: (ctx: Dur_hourContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.dur_minute`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDur_minute?: (ctx: Dur_minuteContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.dur_second`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDur_second?: (ctx: Dur_secondContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.period_explicit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPeriod_explicit?: (ctx: Period_explicitContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.period_start`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPeriod_start?: (ctx: Period_startContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.recur_rule_part`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRecur_rule_part?: (ctx: Recur_rule_partContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.freq`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFreq?: (ctx: FreqContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.enddate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnddate?: (ctx: EnddateContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.count`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCount?: (ctx: CountContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.interval`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterval?: (ctx: IntervalContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.byseclist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitByseclist?: (ctx: ByseclistContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.byminlist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitByminlist?: (ctx: ByminlistContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.byhrlist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitByhrlist?: (ctx: ByhrlistContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.bywdaylist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBywdaylist?: (ctx: BywdaylistContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.weekdaynum`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWeekdaynum?: (ctx: WeekdaynumContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.weekday`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWeekday?: (ctx: WeekdayContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.bymodaylist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBymodaylist?: (ctx: BymodaylistContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.monthdaynum`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMonthdaynum?: (ctx: MonthdaynumContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.byyrdaylist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitByyrdaylist?: (ctx: ByyrdaylistContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.yeardaynum`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitYeardaynum?: (ctx: YeardaynumContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.ordyrday`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrdyrday?: (ctx: OrdyrdayContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.bywknolist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBywknolist?: (ctx: BywknolistContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.weeknum`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWeeknum?: (ctx: WeeknumContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.bymolist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBymolist?: (ctx: BymolistContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.bysplist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBysplist?: (ctx: BysplistContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.digits_2`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDigits_2?: (ctx: Digits_2Context) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.digits_1_2`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDigits_1_2?: (ctx: Digits_1_2Context) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.safe_char`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSafe_char?: (ctx: Safe_charContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.value_char`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValue_char?: (ctx: Value_charContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.qsafe_char`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQsafe_char?: (ctx: Qsafe_charContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.tsafe_char`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTsafe_char?: (ctx: Tsafe_charContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.time_numzone`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTime_numzone?: (ctx: Time_numzoneContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.reg_name_char`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReg_name_char?: (ctx: Reg_name_charContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.language_char`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLanguage_char?: (ctx: Language_charContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.x_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitX_name?: (ctx: X_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.alpha_num`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlpha_num?: (ctx: Alpha_numContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.digit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDigit?: (ctx: DigitContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.alpha`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlpha?: (ctx: AlphaContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_accepted`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_accepted?: (ctx: K_acceptedContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_action`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_action?: (ctx: K_actionContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_address`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_address?: (ctx: K_addressContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_altrep`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_altrep?: (ctx: K_altrepContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_attach`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_attach?: (ctx: K_attachContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_attendee`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_attendee?: (ctx: K_attendeeContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_audio`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_audio?: (ctx: K_audioContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_base`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_base?: (ctx: K_baseContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_begin`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_begin?: (ctx: K_beginContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_binary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_binary?: (ctx: K_binaryContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_bit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_bit?: (ctx: K_bitContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_boolean`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_boolean?: (ctx: K_booleanContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_busy`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_busy?: (ctx: K_busyContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_busy_unavailable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_busy_unavailable?: (ctx: K_busy_unavailableContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_busy_tentative`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_busy_tentative?: (ctx: K_busy_tentativeContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_byday`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_byday?: (ctx: K_bydayContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_byhour`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_byhour?: (ctx: K_byhourContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_byminute`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_byminute?: (ctx: K_byminuteContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_bymonth`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_bymonth?: (ctx: K_bymonthContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_bymonthday`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_bymonthday?: (ctx: K_bymonthdayContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_bysecond`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_bysecond?: (ctx: K_bysecondContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_bysetpos`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_bysetpos?: (ctx: K_bysetposContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_byweekno`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_byweekno?: (ctx: K_byweeknoContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_byyearday`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_byyearday?: (ctx: K_byyeardayContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_cal_address`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_cal_address?: (ctx: K_cal_addressContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_calscale`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_calscale?: (ctx: K_calscaleContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_cancelled`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_cancelled?: (ctx: K_cancelledContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_categories`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_categories?: (ctx: K_categoriesContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_chair`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_chair?: (ctx: K_chairContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_child`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_child?: (ctx: K_childContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_class`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_class?: (ctx: K_classContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_cn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_cn?: (ctx: K_cnContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_comment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_comment?: (ctx: K_commentContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_completed`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_completed?: (ctx: K_completedContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_confidential`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_confidential?: (ctx: K_confidentialContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_confirmed`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_confirmed?: (ctx: K_confirmedContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_contact`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_contact?: (ctx: K_contactContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_count`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_count?: (ctx: K_countContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_created`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_created?: (ctx: K_createdContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_cutype`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_cutype?: (ctx: K_cutypeContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_daily`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_daily?: (ctx: K_dailyContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_date`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_date?: (ctx: K_dateContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_date_time`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_date_time?: (ctx: K_date_timeContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_daylight`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_daylight?: (ctx: K_daylightContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_declined`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_declined?: (ctx: K_declinedContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_delegated`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_delegated?: (ctx: K_delegatedContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_delegated_from`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_delegated_from?: (ctx: K_delegated_fromContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_delegated_to`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_delegated_to?: (ctx: K_delegated_toContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_description`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_description?: (ctx: K_descriptionContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_dir`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_dir?: (ctx: K_dirContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_display`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_display?: (ctx: K_displayContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_draft`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_draft?: (ctx: K_draftContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_dtend`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_dtend?: (ctx: K_dtendContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_dtstamp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_dtstamp?: (ctx: K_dtstampContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_dtstart`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_dtstart?: (ctx: K_dtstartContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_due`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_due?: (ctx: K_dueContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_duration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_duration?: (ctx: K_durationContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_email`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_email?: (ctx: K_emailContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_encoding`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_encoding?: (ctx: K_encodingContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_end`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_end?: (ctx: K_endContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_exdate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_exdate?: (ctx: K_exdateContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_false`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_false?: (ctx: K_falseContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_fbtype`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_fbtype?: (ctx: K_fbtypeContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_final`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_final?: (ctx: K_finalContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_float`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_float?: (ctx: K_floatContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_fmttype`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_fmttype?: (ctx: K_fmttypeContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_fr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_fr?: (ctx: K_frContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_free`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_free?: (ctx: K_freeContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_freebusy`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_freebusy?: (ctx: K_freebusyContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_freq`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_freq?: (ctx: K_freqContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_geo`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_geo?: (ctx: K_geoContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_gregorian`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_gregorian?: (ctx: K_gregorianContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_group`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_group?: (ctx: K_groupContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_hourly`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_hourly?: (ctx: K_hourlyContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_in_process`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_in_process?: (ctx: K_in_processContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_individual`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_individual?: (ctx: K_individualContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_integer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_integer?: (ctx: K_integerContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_interval`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_interval?: (ctx: K_intervalContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_language`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_language?: (ctx: K_languageContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_last_modified`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_last_modified?: (ctx: K_last_modifiedContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_location`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_location?: (ctx: K_locationContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_member`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_member?: (ctx: K_memberContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_method`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_method?: (ctx: K_methodContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_minutely`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_minutely?: (ctx: K_minutelyContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_mo`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_mo?: (ctx: K_moContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_monthly`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_monthly?: (ctx: K_monthlyContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_needs_action`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_needs_action?: (ctx: K_needs_actionContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_non_participant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_non_participant?: (ctx: K_non_participantContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_opaque`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_opaque?: (ctx: K_opaqueContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_opt_participant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_opt_participant?: (ctx: K_opt_participantContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_organizer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_organizer?: (ctx: K_organizerContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_parent`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_parent?: (ctx: K_parentContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_participant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_participant?: (ctx: K_participantContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_partstat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_partstat?: (ctx: K_partstatContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_percent_complete`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_percent_complete?: (ctx: K_percent_completeContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_period`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_period?: (ctx: K_periodContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_priority`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_priority?: (ctx: K_priorityContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_private`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_private?: (ctx: K_privateContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_process`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_process?: (ctx: K_processContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_prodid`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_prodid?: (ctx: K_prodidContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_public`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_public?: (ctx: K_publicContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_range`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_range?: (ctx: K_rangeContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_rdate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_rdate?: (ctx: K_rdateContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_recur`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_recur?: (ctx: K_recurContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_recurrence_id`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_recurrence_id?: (ctx: K_recurrence_idContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_relat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_relat?: (ctx: K_relatContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_related`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_related?: (ctx: K_relatedContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_related_to`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_related_to?: (ctx: K_related_toContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_reltype`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_reltype?: (ctx: K_reltypeContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_repeat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_repeat?: (ctx: K_repeatContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_req_participant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_req_participant?: (ctx: K_req_participantContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_request_status`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_request_status?: (ctx: K_request_statusContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_resource`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_resource?: (ctx: K_resourceContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_resources`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_resources?: (ctx: K_resourcesContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_role`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_role?: (ctx: K_roleContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_room`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_room?: (ctx: K_roomContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_rrule`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_rrule?: (ctx: K_rruleContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_rsvp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_rsvp?: (ctx: K_rsvpContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_sa`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_sa?: (ctx: K_saContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_secondly`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_secondly?: (ctx: K_secondlyContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_sent_by`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_sent_by?: (ctx: K_sent_byContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_sequence`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_sequence?: (ctx: K_sequenceContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_sibling`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_sibling?: (ctx: K_siblingContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_standard`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_standard?: (ctx: K_standardContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_start`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_start?: (ctx: K_startContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_status`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_status?: (ctx: K_statusContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_su`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_su?: (ctx: K_suContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_summary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_summary?: (ctx: K_summaryContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_tentative`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_tentative?: (ctx: K_tentativeContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_text`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_text?: (ctx: K_textContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_th`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_th?: (ctx: K_thContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_thisandfuture`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_thisandfuture?: (ctx: K_thisandfutureContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_time`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_time?: (ctx: K_timeContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_transp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_transp?: (ctx: K_transpContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_transparent`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_transparent?: (ctx: K_transparentContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_trigger`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_trigger?: (ctx: K_triggerContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_true`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_true?: (ctx: K_trueContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_tu`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_tu?: (ctx: K_tuContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_tzid`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_tzid?: (ctx: K_tzidContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_tzname`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_tzname?: (ctx: K_tznameContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_tzoffsetfrom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_tzoffsetfrom?: (ctx: K_tzoffsetfromContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_tzoffsetto`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_tzoffsetto?: (ctx: K_tzoffsettoContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_tzurl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_tzurl?: (ctx: K_tzurlContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_uid`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_uid?: (ctx: K_uidContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_unknown`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_unknown?: (ctx: K_unknownContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_until`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_until?: (ctx: K_untilContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_uri`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_uri?: (ctx: K_uriContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_url`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_url?: (ctx: K_urlContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_utc_offset`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_utc_offset?: (ctx: K_utc_offsetContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_valarm`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_valarm?: (ctx: K_valarmContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_value?: (ctx: K_valueContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_vcalendar`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_vcalendar?: (ctx: K_vcalendarContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_version`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_version?: (ctx: K_versionContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_vevent`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_vevent?: (ctx: K_veventContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_vfreebusy`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_vfreebusy?: (ctx: K_vfreebusyContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_vjournal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_vjournal?: (ctx: K_vjournalContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_vtimezone`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_vtimezone?: (ctx: K_vtimezoneContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_vtodo`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_vtodo?: (ctx: K_vtodoContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_we`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_we?: (ctx: K_weContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_weekly`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_weekly?: (ctx: K_weeklyContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_wkst`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_wkst?: (ctx: K_wkstContext) => Result;

	/**
	 * Visit a parse tree produced by `ICalendarParser.k_yearly`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK_yearly?: (ctx: K_yearlyContext) => Result;
}

