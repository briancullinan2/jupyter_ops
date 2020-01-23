// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/icalendar/ICalendar.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `ICalendarParser`.
 */
export interface ICalendarListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `ICalendarParser.parse`.
	 * @param ctx the parse tree
	 */
	enterParse?: (ctx: ParseContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.parse`.
	 * @param ctx the parse tree
	 */
	exitParse?: (ctx: ParseContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.icalstream`.
	 * @param ctx the parse tree
	 */
	enterIcalstream?: (ctx: IcalstreamContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.icalstream`.
	 * @param ctx the parse tree
	 */
	exitIcalstream?: (ctx: IcalstreamContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.icalobject`.
	 * @param ctx the parse tree
	 */
	enterIcalobject?: (ctx: IcalobjectContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.icalobject`.
	 * @param ctx the parse tree
	 */
	exitIcalobject?: (ctx: IcalobjectContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.calprop`.
	 * @param ctx the parse tree
	 */
	enterCalprop?: (ctx: CalpropContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.calprop`.
	 * @param ctx the parse tree
	 */
	exitCalprop?: (ctx: CalpropContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.calscale`.
	 * @param ctx the parse tree
	 */
	enterCalscale?: (ctx: CalscaleContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.calscale`.
	 * @param ctx the parse tree
	 */
	exitCalscale?: (ctx: CalscaleContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.method`.
	 * @param ctx the parse tree
	 */
	enterMethod?: (ctx: MethodContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.method`.
	 * @param ctx the parse tree
	 */
	exitMethod?: (ctx: MethodContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.prodid`.
	 * @param ctx the parse tree
	 */
	enterProdid?: (ctx: ProdidContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.prodid`.
	 * @param ctx the parse tree
	 */
	exitProdid?: (ctx: ProdidContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.version`.
	 * @param ctx the parse tree
	 */
	enterVersion?: (ctx: VersionContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.version`.
	 * @param ctx the parse tree
	 */
	exitVersion?: (ctx: VersionContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.vervalue`.
	 * @param ctx the parse tree
	 */
	enterVervalue?: (ctx: VervalueContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.vervalue`.
	 * @param ctx the parse tree
	 */
	exitVervalue?: (ctx: VervalueContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.component`.
	 * @param ctx the parse tree
	 */
	enterComponent?: (ctx: ComponentContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.component`.
	 * @param ctx the parse tree
	 */
	exitComponent?: (ctx: ComponentContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.iana_comp`.
	 * @param ctx the parse tree
	 */
	enterIana_comp?: (ctx: Iana_compContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.iana_comp`.
	 * @param ctx the parse tree
	 */
	exitIana_comp?: (ctx: Iana_compContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.x_comp`.
	 * @param ctx the parse tree
	 */
	enterX_comp?: (ctx: X_compContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.x_comp`.
	 * @param ctx the parse tree
	 */
	exitX_comp?: (ctx: X_compContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.contentline`.
	 * @param ctx the parse tree
	 */
	enterContentline?: (ctx: ContentlineContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.contentline`.
	 * @param ctx the parse tree
	 */
	exitContentline?: (ctx: ContentlineContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.name`.
	 * @param ctx the parse tree
	 */
	enterName?: (ctx: NameContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.name`.
	 * @param ctx the parse tree
	 */
	exitName?: (ctx: NameContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.value`.
	 * @param ctx the parse tree
	 */
	enterValue?: (ctx: ValueContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.value`.
	 * @param ctx the parse tree
	 */
	exitValue?: (ctx: ValueContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.eventc`.
	 * @param ctx the parse tree
	 */
	enterEventc?: (ctx: EventcContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.eventc`.
	 * @param ctx the parse tree
	 */
	exitEventc?: (ctx: EventcContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.todoc`.
	 * @param ctx the parse tree
	 */
	enterTodoc?: (ctx: TodocContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.todoc`.
	 * @param ctx the parse tree
	 */
	exitTodoc?: (ctx: TodocContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.journalc`.
	 * @param ctx the parse tree
	 */
	enterJournalc?: (ctx: JournalcContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.journalc`.
	 * @param ctx the parse tree
	 */
	exitJournalc?: (ctx: JournalcContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.freebusyc`.
	 * @param ctx the parse tree
	 */
	enterFreebusyc?: (ctx: FreebusycContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.freebusyc`.
	 * @param ctx the parse tree
	 */
	exitFreebusyc?: (ctx: FreebusycContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.timezonec`.
	 * @param ctx the parse tree
	 */
	enterTimezonec?: (ctx: TimezonecContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.timezonec`.
	 * @param ctx the parse tree
	 */
	exitTimezonec?: (ctx: TimezonecContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.alarmc`.
	 * @param ctx the parse tree
	 */
	enterAlarmc?: (ctx: AlarmcContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.alarmc`.
	 * @param ctx the parse tree
	 */
	exitAlarmc?: (ctx: AlarmcContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.eventprop`.
	 * @param ctx the parse tree
	 */
	enterEventprop?: (ctx: EventpropContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.eventprop`.
	 * @param ctx the parse tree
	 */
	exitEventprop?: (ctx: EventpropContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.todoprop`.
	 * @param ctx the parse tree
	 */
	enterTodoprop?: (ctx: TodopropContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.todoprop`.
	 * @param ctx the parse tree
	 */
	exitTodoprop?: (ctx: TodopropContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.jourprop`.
	 * @param ctx the parse tree
	 */
	enterJourprop?: (ctx: JourpropContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.jourprop`.
	 * @param ctx the parse tree
	 */
	exitJourprop?: (ctx: JourpropContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.fbprop`.
	 * @param ctx the parse tree
	 */
	enterFbprop?: (ctx: FbpropContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.fbprop`.
	 * @param ctx the parse tree
	 */
	exitFbprop?: (ctx: FbpropContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.timezoneprop`.
	 * @param ctx the parse tree
	 */
	enterTimezoneprop?: (ctx: TimezonepropContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.timezoneprop`.
	 * @param ctx the parse tree
	 */
	exitTimezoneprop?: (ctx: TimezonepropContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.tzprop`.
	 * @param ctx the parse tree
	 */
	enterTzprop?: (ctx: TzpropContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.tzprop`.
	 * @param ctx the parse tree
	 */
	exitTzprop?: (ctx: TzpropContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.alarmprop`.
	 * @param ctx the parse tree
	 */
	enterAlarmprop?: (ctx: AlarmpropContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.alarmprop`.
	 * @param ctx the parse tree
	 */
	exitAlarmprop?: (ctx: AlarmpropContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.standardc`.
	 * @param ctx the parse tree
	 */
	enterStandardc?: (ctx: StandardcContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.standardc`.
	 * @param ctx the parse tree
	 */
	exitStandardc?: (ctx: StandardcContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.daylightc`.
	 * @param ctx the parse tree
	 */
	enterDaylightc?: (ctx: DaylightcContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.daylightc`.
	 * @param ctx the parse tree
	 */
	exitDaylightc?: (ctx: DaylightcContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.attach`.
	 * @param ctx the parse tree
	 */
	enterAttach?: (ctx: AttachContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.attach`.
	 * @param ctx the parse tree
	 */
	exitAttach?: (ctx: AttachContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.attachparam`.
	 * @param ctx the parse tree
	 */
	enterAttachparam?: (ctx: AttachparamContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.attachparam`.
	 * @param ctx the parse tree
	 */
	exitAttachparam?: (ctx: AttachparamContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.categories`.
	 * @param ctx the parse tree
	 */
	enterCategories?: (ctx: CategoriesContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.categories`.
	 * @param ctx the parse tree
	 */
	exitCategories?: (ctx: CategoriesContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.catparam`.
	 * @param ctx the parse tree
	 */
	enterCatparam?: (ctx: CatparamContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.catparam`.
	 * @param ctx the parse tree
	 */
	exitCatparam?: (ctx: CatparamContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.clazz`.
	 * @param ctx the parse tree
	 */
	enterClazz?: (ctx: ClazzContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.clazz`.
	 * @param ctx the parse tree
	 */
	exitClazz?: (ctx: ClazzContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.classvalue`.
	 * @param ctx the parse tree
	 */
	enterClassvalue?: (ctx: ClassvalueContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.classvalue`.
	 * @param ctx the parse tree
	 */
	exitClassvalue?: (ctx: ClassvalueContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.comment`.
	 * @param ctx the parse tree
	 */
	enterComment?: (ctx: CommentContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.comment`.
	 * @param ctx the parse tree
	 */
	exitComment?: (ctx: CommentContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.commparam`.
	 * @param ctx the parse tree
	 */
	enterCommparam?: (ctx: CommparamContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.commparam`.
	 * @param ctx the parse tree
	 */
	exitCommparam?: (ctx: CommparamContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.description`.
	 * @param ctx the parse tree
	 */
	enterDescription?: (ctx: DescriptionContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.description`.
	 * @param ctx the parse tree
	 */
	exitDescription?: (ctx: DescriptionContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.descparam`.
	 * @param ctx the parse tree
	 */
	enterDescparam?: (ctx: DescparamContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.descparam`.
	 * @param ctx the parse tree
	 */
	exitDescparam?: (ctx: DescparamContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.geo`.
	 * @param ctx the parse tree
	 */
	enterGeo?: (ctx: GeoContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.geo`.
	 * @param ctx the parse tree
	 */
	exitGeo?: (ctx: GeoContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.geovalue`.
	 * @param ctx the parse tree
	 */
	enterGeovalue?: (ctx: GeovalueContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.geovalue`.
	 * @param ctx the parse tree
	 */
	exitGeovalue?: (ctx: GeovalueContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.location`.
	 * @param ctx the parse tree
	 */
	enterLocation?: (ctx: LocationContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.location`.
	 * @param ctx the parse tree
	 */
	exitLocation?: (ctx: LocationContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.locparam`.
	 * @param ctx the parse tree
	 */
	enterLocparam?: (ctx: LocparamContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.locparam`.
	 * @param ctx the parse tree
	 */
	exitLocparam?: (ctx: LocparamContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.percent`.
	 * @param ctx the parse tree
	 */
	enterPercent?: (ctx: PercentContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.percent`.
	 * @param ctx the parse tree
	 */
	exitPercent?: (ctx: PercentContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.priority`.
	 * @param ctx the parse tree
	 */
	enterPriority?: (ctx: PriorityContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.priority`.
	 * @param ctx the parse tree
	 */
	exitPriority?: (ctx: PriorityContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.priovalue`.
	 * @param ctx the parse tree
	 */
	enterPriovalue?: (ctx: PriovalueContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.priovalue`.
	 * @param ctx the parse tree
	 */
	exitPriovalue?: (ctx: PriovalueContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.resources`.
	 * @param ctx the parse tree
	 */
	enterResources?: (ctx: ResourcesContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.resources`.
	 * @param ctx the parse tree
	 */
	exitResources?: (ctx: ResourcesContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.resrcparam`.
	 * @param ctx the parse tree
	 */
	enterResrcparam?: (ctx: ResrcparamContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.resrcparam`.
	 * @param ctx the parse tree
	 */
	exitResrcparam?: (ctx: ResrcparamContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.status`.
	 * @param ctx the parse tree
	 */
	enterStatus?: (ctx: StatusContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.status`.
	 * @param ctx the parse tree
	 */
	exitStatus?: (ctx: StatusContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.statvalue`.
	 * @param ctx the parse tree
	 */
	enterStatvalue?: (ctx: StatvalueContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.statvalue`.
	 * @param ctx the parse tree
	 */
	exitStatvalue?: (ctx: StatvalueContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.statvalue_event`.
	 * @param ctx the parse tree
	 */
	enterStatvalue_event?: (ctx: Statvalue_eventContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.statvalue_event`.
	 * @param ctx the parse tree
	 */
	exitStatvalue_event?: (ctx: Statvalue_eventContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.statvalue_todo`.
	 * @param ctx the parse tree
	 */
	enterStatvalue_todo?: (ctx: Statvalue_todoContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.statvalue_todo`.
	 * @param ctx the parse tree
	 */
	exitStatvalue_todo?: (ctx: Statvalue_todoContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.statvalue_jour`.
	 * @param ctx the parse tree
	 */
	enterStatvalue_jour?: (ctx: Statvalue_jourContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.statvalue_jour`.
	 * @param ctx the parse tree
	 */
	exitStatvalue_jour?: (ctx: Statvalue_jourContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.summary`.
	 * @param ctx the parse tree
	 */
	enterSummary?: (ctx: SummaryContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.summary`.
	 * @param ctx the parse tree
	 */
	exitSummary?: (ctx: SummaryContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.summparam`.
	 * @param ctx the parse tree
	 */
	enterSummparam?: (ctx: SummparamContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.summparam`.
	 * @param ctx the parse tree
	 */
	exitSummparam?: (ctx: SummparamContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.completed`.
	 * @param ctx the parse tree
	 */
	enterCompleted?: (ctx: CompletedContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.completed`.
	 * @param ctx the parse tree
	 */
	exitCompleted?: (ctx: CompletedContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.dtend`.
	 * @param ctx the parse tree
	 */
	enterDtend?: (ctx: DtendContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.dtend`.
	 * @param ctx the parse tree
	 */
	exitDtend?: (ctx: DtendContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.dtendparam`.
	 * @param ctx the parse tree
	 */
	enterDtendparam?: (ctx: DtendparamContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.dtendparam`.
	 * @param ctx the parse tree
	 */
	exitDtendparam?: (ctx: DtendparamContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.due`.
	 * @param ctx the parse tree
	 */
	enterDue?: (ctx: DueContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.due`.
	 * @param ctx the parse tree
	 */
	exitDue?: (ctx: DueContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.dueparam`.
	 * @param ctx the parse tree
	 */
	enterDueparam?: (ctx: DueparamContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.dueparam`.
	 * @param ctx the parse tree
	 */
	exitDueparam?: (ctx: DueparamContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.dtstart`.
	 * @param ctx the parse tree
	 */
	enterDtstart?: (ctx: DtstartContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.dtstart`.
	 * @param ctx the parse tree
	 */
	exitDtstart?: (ctx: DtstartContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.dtstparam`.
	 * @param ctx the parse tree
	 */
	enterDtstparam?: (ctx: DtstparamContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.dtstparam`.
	 * @param ctx the parse tree
	 */
	exitDtstparam?: (ctx: DtstparamContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.duration`.
	 * @param ctx the parse tree
	 */
	enterDuration?: (ctx: DurationContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.duration`.
	 * @param ctx the parse tree
	 */
	exitDuration?: (ctx: DurationContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.freebusy`.
	 * @param ctx the parse tree
	 */
	enterFreebusy?: (ctx: FreebusyContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.freebusy`.
	 * @param ctx the parse tree
	 */
	exitFreebusy?: (ctx: FreebusyContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.fbparam`.
	 * @param ctx the parse tree
	 */
	enterFbparam?: (ctx: FbparamContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.fbparam`.
	 * @param ctx the parse tree
	 */
	exitFbparam?: (ctx: FbparamContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.fbvalue`.
	 * @param ctx the parse tree
	 */
	enterFbvalue?: (ctx: FbvalueContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.fbvalue`.
	 * @param ctx the parse tree
	 */
	exitFbvalue?: (ctx: FbvalueContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.transp`.
	 * @param ctx the parse tree
	 */
	enterTransp?: (ctx: TranspContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.transp`.
	 * @param ctx the parse tree
	 */
	exitTransp?: (ctx: TranspContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.transvalue`.
	 * @param ctx the parse tree
	 */
	enterTransvalue?: (ctx: TransvalueContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.transvalue`.
	 * @param ctx the parse tree
	 */
	exitTransvalue?: (ctx: TransvalueContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.tzid`.
	 * @param ctx the parse tree
	 */
	enterTzid?: (ctx: TzidContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.tzid`.
	 * @param ctx the parse tree
	 */
	exitTzid?: (ctx: TzidContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.tzname`.
	 * @param ctx the parse tree
	 */
	enterTzname?: (ctx: TznameContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.tzname`.
	 * @param ctx the parse tree
	 */
	exitTzname?: (ctx: TznameContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.tznparam`.
	 * @param ctx the parse tree
	 */
	enterTznparam?: (ctx: TznparamContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.tznparam`.
	 * @param ctx the parse tree
	 */
	exitTznparam?: (ctx: TznparamContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.tzoffsetfrom`.
	 * @param ctx the parse tree
	 */
	enterTzoffsetfrom?: (ctx: TzoffsetfromContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.tzoffsetfrom`.
	 * @param ctx the parse tree
	 */
	exitTzoffsetfrom?: (ctx: TzoffsetfromContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.tzoffsetto`.
	 * @param ctx the parse tree
	 */
	enterTzoffsetto?: (ctx: TzoffsettoContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.tzoffsetto`.
	 * @param ctx the parse tree
	 */
	exitTzoffsetto?: (ctx: TzoffsettoContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.tzurl`.
	 * @param ctx the parse tree
	 */
	enterTzurl?: (ctx: TzurlContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.tzurl`.
	 * @param ctx the parse tree
	 */
	exitTzurl?: (ctx: TzurlContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.attendee`.
	 * @param ctx the parse tree
	 */
	enterAttendee?: (ctx: AttendeeContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.attendee`.
	 * @param ctx the parse tree
	 */
	exitAttendee?: (ctx: AttendeeContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.attparam`.
	 * @param ctx the parse tree
	 */
	enterAttparam?: (ctx: AttparamContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.attparam`.
	 * @param ctx the parse tree
	 */
	exitAttparam?: (ctx: AttparamContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.contact`.
	 * @param ctx the parse tree
	 */
	enterContact?: (ctx: ContactContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.contact`.
	 * @param ctx the parse tree
	 */
	exitContact?: (ctx: ContactContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.contparam`.
	 * @param ctx the parse tree
	 */
	enterContparam?: (ctx: ContparamContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.contparam`.
	 * @param ctx the parse tree
	 */
	exitContparam?: (ctx: ContparamContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.organizer`.
	 * @param ctx the parse tree
	 */
	enterOrganizer?: (ctx: OrganizerContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.organizer`.
	 * @param ctx the parse tree
	 */
	exitOrganizer?: (ctx: OrganizerContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.orgparam`.
	 * @param ctx the parse tree
	 */
	enterOrgparam?: (ctx: OrgparamContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.orgparam`.
	 * @param ctx the parse tree
	 */
	exitOrgparam?: (ctx: OrgparamContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.recurid`.
	 * @param ctx the parse tree
	 */
	enterRecurid?: (ctx: RecuridContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.recurid`.
	 * @param ctx the parse tree
	 */
	exitRecurid?: (ctx: RecuridContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.ridparam`.
	 * @param ctx the parse tree
	 */
	enterRidparam?: (ctx: RidparamContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.ridparam`.
	 * @param ctx the parse tree
	 */
	exitRidparam?: (ctx: RidparamContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.related`.
	 * @param ctx the parse tree
	 */
	enterRelated?: (ctx: RelatedContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.related`.
	 * @param ctx the parse tree
	 */
	exitRelated?: (ctx: RelatedContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.relparam`.
	 * @param ctx the parse tree
	 */
	enterRelparam?: (ctx: RelparamContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.relparam`.
	 * @param ctx the parse tree
	 */
	exitRelparam?: (ctx: RelparamContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.url`.
	 * @param ctx the parse tree
	 */
	enterUrl?: (ctx: UrlContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.url`.
	 * @param ctx the parse tree
	 */
	exitUrl?: (ctx: UrlContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.uid`.
	 * @param ctx the parse tree
	 */
	enterUid?: (ctx: UidContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.uid`.
	 * @param ctx the parse tree
	 */
	exitUid?: (ctx: UidContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.exdate`.
	 * @param ctx the parse tree
	 */
	enterExdate?: (ctx: ExdateContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.exdate`.
	 * @param ctx the parse tree
	 */
	exitExdate?: (ctx: ExdateContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.exdtparam`.
	 * @param ctx the parse tree
	 */
	enterExdtparam?: (ctx: ExdtparamContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.exdtparam`.
	 * @param ctx the parse tree
	 */
	exitExdtparam?: (ctx: ExdtparamContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.rdate`.
	 * @param ctx the parse tree
	 */
	enterRdate?: (ctx: RdateContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.rdate`.
	 * @param ctx the parse tree
	 */
	exitRdate?: (ctx: RdateContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.rdtparam`.
	 * @param ctx the parse tree
	 */
	enterRdtparam?: (ctx: RdtparamContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.rdtparam`.
	 * @param ctx the parse tree
	 */
	exitRdtparam?: (ctx: RdtparamContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.rdtval`.
	 * @param ctx the parse tree
	 */
	enterRdtval?: (ctx: RdtvalContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.rdtval`.
	 * @param ctx the parse tree
	 */
	exitRdtval?: (ctx: RdtvalContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.date_time_date`.
	 * @param ctx the parse tree
	 */
	enterDate_time_date?: (ctx: Date_time_dateContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.date_time_date`.
	 * @param ctx the parse tree
	 */
	exitDate_time_date?: (ctx: Date_time_dateContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.rrule`.
	 * @param ctx the parse tree
	 */
	enterRrule?: (ctx: RruleContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.rrule`.
	 * @param ctx the parse tree
	 */
	exitRrule?: (ctx: RruleContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.action`.
	 * @param ctx the parse tree
	 */
	enterAction?: (ctx: ActionContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.action`.
	 * @param ctx the parse tree
	 */
	exitAction?: (ctx: ActionContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.actionvalue`.
	 * @param ctx the parse tree
	 */
	enterActionvalue?: (ctx: ActionvalueContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.actionvalue`.
	 * @param ctx the parse tree
	 */
	exitActionvalue?: (ctx: ActionvalueContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.repeat`.
	 * @param ctx the parse tree
	 */
	enterRepeat?: (ctx: RepeatContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.repeat`.
	 * @param ctx the parse tree
	 */
	exitRepeat?: (ctx: RepeatContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.trigger`.
	 * @param ctx the parse tree
	 */
	enterTrigger?: (ctx: TriggerContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.trigger`.
	 * @param ctx the parse tree
	 */
	exitTrigger?: (ctx: TriggerContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.trigrel`.
	 * @param ctx the parse tree
	 */
	enterTrigrel?: (ctx: TrigrelContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.trigrel`.
	 * @param ctx the parse tree
	 */
	exitTrigrel?: (ctx: TrigrelContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.trigabs`.
	 * @param ctx the parse tree
	 */
	enterTrigabs?: (ctx: TrigabsContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.trigabs`.
	 * @param ctx the parse tree
	 */
	exitTrigabs?: (ctx: TrigabsContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.created`.
	 * @param ctx the parse tree
	 */
	enterCreated?: (ctx: CreatedContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.created`.
	 * @param ctx the parse tree
	 */
	exitCreated?: (ctx: CreatedContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.dtstamp`.
	 * @param ctx the parse tree
	 */
	enterDtstamp?: (ctx: DtstampContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.dtstamp`.
	 * @param ctx the parse tree
	 */
	exitDtstamp?: (ctx: DtstampContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.last_mod`.
	 * @param ctx the parse tree
	 */
	enterLast_mod?: (ctx: Last_modContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.last_mod`.
	 * @param ctx the parse tree
	 */
	exitLast_mod?: (ctx: Last_modContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.seq`.
	 * @param ctx the parse tree
	 */
	enterSeq?: (ctx: SeqContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.seq`.
	 * @param ctx the parse tree
	 */
	exitSeq?: (ctx: SeqContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.iana_prop`.
	 * @param ctx the parse tree
	 */
	enterIana_prop?: (ctx: Iana_propContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.iana_prop`.
	 * @param ctx the parse tree
	 */
	exitIana_prop?: (ctx: Iana_propContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.x_prop`.
	 * @param ctx the parse tree
	 */
	enterX_prop?: (ctx: X_propContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.x_prop`.
	 * @param ctx the parse tree
	 */
	exitX_prop?: (ctx: X_propContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.rstatus`.
	 * @param ctx the parse tree
	 */
	enterRstatus?: (ctx: RstatusContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.rstatus`.
	 * @param ctx the parse tree
	 */
	exitRstatus?: (ctx: RstatusContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.rstatparam`.
	 * @param ctx the parse tree
	 */
	enterRstatparam?: (ctx: RstatparamContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.rstatparam`.
	 * @param ctx the parse tree
	 */
	exitRstatparam?: (ctx: RstatparamContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.statcode`.
	 * @param ctx the parse tree
	 */
	enterStatcode?: (ctx: StatcodeContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.statcode`.
	 * @param ctx the parse tree
	 */
	exitStatcode?: (ctx: StatcodeContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.param_name`.
	 * @param ctx the parse tree
	 */
	enterParam_name?: (ctx: Param_nameContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.param_name`.
	 * @param ctx the parse tree
	 */
	exitParam_name?: (ctx: Param_nameContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.param_value`.
	 * @param ctx the parse tree
	 */
	enterParam_value?: (ctx: Param_valueContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.param_value`.
	 * @param ctx the parse tree
	 */
	exitParam_value?: (ctx: Param_valueContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.paramtext`.
	 * @param ctx the parse tree
	 */
	enterParamtext?: (ctx: ParamtextContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.paramtext`.
	 * @param ctx the parse tree
	 */
	exitParamtext?: (ctx: ParamtextContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.quoted_string`.
	 * @param ctx the parse tree
	 */
	enterQuoted_string?: (ctx: Quoted_stringContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.quoted_string`.
	 * @param ctx the parse tree
	 */
	exitQuoted_string?: (ctx: Quoted_stringContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.iana_token`.
	 * @param ctx the parse tree
	 */
	enterIana_token?: (ctx: Iana_tokenContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.iana_token`.
	 * @param ctx the parse tree
	 */
	exitIana_token?: (ctx: Iana_tokenContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.icalparameter`.
	 * @param ctx the parse tree
	 */
	enterIcalparameter?: (ctx: IcalparameterContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.icalparameter`.
	 * @param ctx the parse tree
	 */
	exitIcalparameter?: (ctx: IcalparameterContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.altrepparam`.
	 * @param ctx the parse tree
	 */
	enterAltrepparam?: (ctx: AltrepparamContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.altrepparam`.
	 * @param ctx the parse tree
	 */
	exitAltrepparam?: (ctx: AltrepparamContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.cnparam`.
	 * @param ctx the parse tree
	 */
	enterCnparam?: (ctx: CnparamContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.cnparam`.
	 * @param ctx the parse tree
	 */
	exitCnparam?: (ctx: CnparamContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.cutypeparam`.
	 * @param ctx the parse tree
	 */
	enterCutypeparam?: (ctx: CutypeparamContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.cutypeparam`.
	 * @param ctx the parse tree
	 */
	exitCutypeparam?: (ctx: CutypeparamContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.delfromparam`.
	 * @param ctx the parse tree
	 */
	enterDelfromparam?: (ctx: DelfromparamContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.delfromparam`.
	 * @param ctx the parse tree
	 */
	exitDelfromparam?: (ctx: DelfromparamContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.deltoparam`.
	 * @param ctx the parse tree
	 */
	enterDeltoparam?: (ctx: DeltoparamContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.deltoparam`.
	 * @param ctx the parse tree
	 */
	exitDeltoparam?: (ctx: DeltoparamContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.dirparam`.
	 * @param ctx the parse tree
	 */
	enterDirparam?: (ctx: DirparamContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.dirparam`.
	 * @param ctx the parse tree
	 */
	exitDirparam?: (ctx: DirparamContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.encodingparam`.
	 * @param ctx the parse tree
	 */
	enterEncodingparam?: (ctx: EncodingparamContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.encodingparam`.
	 * @param ctx the parse tree
	 */
	exitEncodingparam?: (ctx: EncodingparamContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.fmttypeparam`.
	 * @param ctx the parse tree
	 */
	enterFmttypeparam?: (ctx: FmttypeparamContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.fmttypeparam`.
	 * @param ctx the parse tree
	 */
	exitFmttypeparam?: (ctx: FmttypeparamContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.fbtypeparam`.
	 * @param ctx the parse tree
	 */
	enterFbtypeparam?: (ctx: FbtypeparamContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.fbtypeparam`.
	 * @param ctx the parse tree
	 */
	exitFbtypeparam?: (ctx: FbtypeparamContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.languageparam`.
	 * @param ctx the parse tree
	 */
	enterLanguageparam?: (ctx: LanguageparamContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.languageparam`.
	 * @param ctx the parse tree
	 */
	exitLanguageparam?: (ctx: LanguageparamContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.memberparam`.
	 * @param ctx the parse tree
	 */
	enterMemberparam?: (ctx: MemberparamContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.memberparam`.
	 * @param ctx the parse tree
	 */
	exitMemberparam?: (ctx: MemberparamContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.partstatparam`.
	 * @param ctx the parse tree
	 */
	enterPartstatparam?: (ctx: PartstatparamContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.partstatparam`.
	 * @param ctx the parse tree
	 */
	exitPartstatparam?: (ctx: PartstatparamContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.rangeparam`.
	 * @param ctx the parse tree
	 */
	enterRangeparam?: (ctx: RangeparamContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.rangeparam`.
	 * @param ctx the parse tree
	 */
	exitRangeparam?: (ctx: RangeparamContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.trigrelparam`.
	 * @param ctx the parse tree
	 */
	enterTrigrelparam?: (ctx: TrigrelparamContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.trigrelparam`.
	 * @param ctx the parse tree
	 */
	exitTrigrelparam?: (ctx: TrigrelparamContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.reltypeparam`.
	 * @param ctx the parse tree
	 */
	enterReltypeparam?: (ctx: ReltypeparamContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.reltypeparam`.
	 * @param ctx the parse tree
	 */
	exitReltypeparam?: (ctx: ReltypeparamContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.roleparam`.
	 * @param ctx the parse tree
	 */
	enterRoleparam?: (ctx: RoleparamContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.roleparam`.
	 * @param ctx the parse tree
	 */
	exitRoleparam?: (ctx: RoleparamContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.rsvpparam`.
	 * @param ctx the parse tree
	 */
	enterRsvpparam?: (ctx: RsvpparamContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.rsvpparam`.
	 * @param ctx the parse tree
	 */
	exitRsvpparam?: (ctx: RsvpparamContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.sentbyparam`.
	 * @param ctx the parse tree
	 */
	enterSentbyparam?: (ctx: SentbyparamContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.sentbyparam`.
	 * @param ctx the parse tree
	 */
	exitSentbyparam?: (ctx: SentbyparamContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.tzidparam`.
	 * @param ctx the parse tree
	 */
	enterTzidparam?: (ctx: TzidparamContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.tzidparam`.
	 * @param ctx the parse tree
	 */
	exitTzidparam?: (ctx: TzidparamContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.valuetypeparam`.
	 * @param ctx the parse tree
	 */
	enterValuetypeparam?: (ctx: ValuetypeparamContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.valuetypeparam`.
	 * @param ctx the parse tree
	 */
	exitValuetypeparam?: (ctx: ValuetypeparamContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.valuetype`.
	 * @param ctx the parse tree
	 */
	enterValuetype?: (ctx: ValuetypeContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.valuetype`.
	 * @param ctx the parse tree
	 */
	exitValuetype?: (ctx: ValuetypeContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.binary`.
	 * @param ctx the parse tree
	 */
	enterBinary?: (ctx: BinaryContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.binary`.
	 * @param ctx the parse tree
	 */
	exitBinary?: (ctx: BinaryContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.b_chars`.
	 * @param ctx the parse tree
	 */
	enterB_chars?: (ctx: B_charsContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.b_chars`.
	 * @param ctx the parse tree
	 */
	exitB_chars?: (ctx: B_charsContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.b_end`.
	 * @param ctx the parse tree
	 */
	enterB_end?: (ctx: B_endContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.b_end`.
	 * @param ctx the parse tree
	 */
	exitB_end?: (ctx: B_endContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.bool`.
	 * @param ctx the parse tree
	 */
	enterBool?: (ctx: BoolContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.bool`.
	 * @param ctx the parse tree
	 */
	exitBool?: (ctx: BoolContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.cal_address`.
	 * @param ctx the parse tree
	 */
	enterCal_address?: (ctx: Cal_addressContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.cal_address`.
	 * @param ctx the parse tree
	 */
	exitCal_address?: (ctx: Cal_addressContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.date`.
	 * @param ctx the parse tree
	 */
	enterDate?: (ctx: DateContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.date`.
	 * @param ctx the parse tree
	 */
	exitDate?: (ctx: DateContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.date_time`.
	 * @param ctx the parse tree
	 */
	enterDate_time?: (ctx: Date_timeContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.date_time`.
	 * @param ctx the parse tree
	 */
	exitDate_time?: (ctx: Date_timeContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.dur_value`.
	 * @param ctx the parse tree
	 */
	enterDur_value?: (ctx: Dur_valueContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.dur_value`.
	 * @param ctx the parse tree
	 */
	exitDur_value?: (ctx: Dur_valueContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.float_num`.
	 * @param ctx the parse tree
	 */
	enterFloat_num?: (ctx: Float_numContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.float_num`.
	 * @param ctx the parse tree
	 */
	exitFloat_num?: (ctx: Float_numContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.digits`.
	 * @param ctx the parse tree
	 */
	enterDigits?: (ctx: DigitsContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.digits`.
	 * @param ctx the parse tree
	 */
	exitDigits?: (ctx: DigitsContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.integer`.
	 * @param ctx the parse tree
	 */
	enterInteger?: (ctx: IntegerContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.integer`.
	 * @param ctx the parse tree
	 */
	exitInteger?: (ctx: IntegerContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.period`.
	 * @param ctx the parse tree
	 */
	enterPeriod?: (ctx: PeriodContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.period`.
	 * @param ctx the parse tree
	 */
	exitPeriod?: (ctx: PeriodContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.recur`.
	 * @param ctx the parse tree
	 */
	enterRecur?: (ctx: RecurContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.recur`.
	 * @param ctx the parse tree
	 */
	exitRecur?: (ctx: RecurContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.text`.
	 * @param ctx the parse tree
	 */
	enterText?: (ctx: TextContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.text`.
	 * @param ctx the parse tree
	 */
	exitText?: (ctx: TextContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.time`.
	 * @param ctx the parse tree
	 */
	enterTime?: (ctx: TimeContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.time`.
	 * @param ctx the parse tree
	 */
	exitTime?: (ctx: TimeContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.uri`.
	 * @param ctx the parse tree
	 */
	enterUri?: (ctx: UriContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.uri`.
	 * @param ctx the parse tree
	 */
	exitUri?: (ctx: UriContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.utc_offset`.
	 * @param ctx the parse tree
	 */
	enterUtc_offset?: (ctx: Utc_offsetContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.utc_offset`.
	 * @param ctx the parse tree
	 */
	exitUtc_offset?: (ctx: Utc_offsetContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.other_param`.
	 * @param ctx the parse tree
	 */
	enterOther_param?: (ctx: Other_paramContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.other_param`.
	 * @param ctx the parse tree
	 */
	exitOther_param?: (ctx: Other_paramContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.iana_param`.
	 * @param ctx the parse tree
	 */
	enterIana_param?: (ctx: Iana_paramContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.iana_param`.
	 * @param ctx the parse tree
	 */
	exitIana_param?: (ctx: Iana_paramContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.x_param`.
	 * @param ctx the parse tree
	 */
	enterX_param?: (ctx: X_paramContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.x_param`.
	 * @param ctx the parse tree
	 */
	exitX_param?: (ctx: X_paramContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.type_name`.
	 * @param ctx the parse tree
	 */
	enterType_name?: (ctx: Type_nameContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.type_name`.
	 * @param ctx the parse tree
	 */
	exitType_name?: (ctx: Type_nameContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.subtype_name`.
	 * @param ctx the parse tree
	 */
	enterSubtype_name?: (ctx: Subtype_nameContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.subtype_name`.
	 * @param ctx the parse tree
	 */
	exitSubtype_name?: (ctx: Subtype_nameContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.reg_name`.
	 * @param ctx the parse tree
	 */
	enterReg_name?: (ctx: Reg_nameContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.reg_name`.
	 * @param ctx the parse tree
	 */
	exitReg_name?: (ctx: Reg_nameContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.language`.
	 * @param ctx the parse tree
	 */
	enterLanguage?: (ctx: LanguageContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.language`.
	 * @param ctx the parse tree
	 */
	exitLanguage?: (ctx: LanguageContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.partstat_event`.
	 * @param ctx the parse tree
	 */
	enterPartstat_event?: (ctx: Partstat_eventContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.partstat_event`.
	 * @param ctx the parse tree
	 */
	exitPartstat_event?: (ctx: Partstat_eventContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.partstat_todo`.
	 * @param ctx the parse tree
	 */
	enterPartstat_todo?: (ctx: Partstat_todoContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.partstat_todo`.
	 * @param ctx the parse tree
	 */
	exitPartstat_todo?: (ctx: Partstat_todoContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.partstat_jour`.
	 * @param ctx the parse tree
	 */
	enterPartstat_jour?: (ctx: Partstat_jourContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.partstat_jour`.
	 * @param ctx the parse tree
	 */
	exitPartstat_jour?: (ctx: Partstat_jourContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.b_char`.
	 * @param ctx the parse tree
	 */
	enterB_char?: (ctx: B_charContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.b_char`.
	 * @param ctx the parse tree
	 */
	exitB_char?: (ctx: B_charContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.date_value`.
	 * @param ctx the parse tree
	 */
	enterDate_value?: (ctx: Date_valueContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.date_value`.
	 * @param ctx the parse tree
	 */
	exitDate_value?: (ctx: Date_valueContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.date_fullyear`.
	 * @param ctx the parse tree
	 */
	enterDate_fullyear?: (ctx: Date_fullyearContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.date_fullyear`.
	 * @param ctx the parse tree
	 */
	exitDate_fullyear?: (ctx: Date_fullyearContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.date_month`.
	 * @param ctx the parse tree
	 */
	enterDate_month?: (ctx: Date_monthContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.date_month`.
	 * @param ctx the parse tree
	 */
	exitDate_month?: (ctx: Date_monthContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.date_mday`.
	 * @param ctx the parse tree
	 */
	enterDate_mday?: (ctx: Date_mdayContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.date_mday`.
	 * @param ctx the parse tree
	 */
	exitDate_mday?: (ctx: Date_mdayContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.time_hour`.
	 * @param ctx the parse tree
	 */
	enterTime_hour?: (ctx: Time_hourContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.time_hour`.
	 * @param ctx the parse tree
	 */
	exitTime_hour?: (ctx: Time_hourContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.time_minute`.
	 * @param ctx the parse tree
	 */
	enterTime_minute?: (ctx: Time_minuteContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.time_minute`.
	 * @param ctx the parse tree
	 */
	exitTime_minute?: (ctx: Time_minuteContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.time_second`.
	 * @param ctx the parse tree
	 */
	enterTime_second?: (ctx: Time_secondContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.time_second`.
	 * @param ctx the parse tree
	 */
	exitTime_second?: (ctx: Time_secondContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.dur_date`.
	 * @param ctx the parse tree
	 */
	enterDur_date?: (ctx: Dur_dateContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.dur_date`.
	 * @param ctx the parse tree
	 */
	exitDur_date?: (ctx: Dur_dateContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.dur_day`.
	 * @param ctx the parse tree
	 */
	enterDur_day?: (ctx: Dur_dayContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.dur_day`.
	 * @param ctx the parse tree
	 */
	exitDur_day?: (ctx: Dur_dayContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.dur_time`.
	 * @param ctx the parse tree
	 */
	enterDur_time?: (ctx: Dur_timeContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.dur_time`.
	 * @param ctx the parse tree
	 */
	exitDur_time?: (ctx: Dur_timeContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.dur_week`.
	 * @param ctx the parse tree
	 */
	enterDur_week?: (ctx: Dur_weekContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.dur_week`.
	 * @param ctx the parse tree
	 */
	exitDur_week?: (ctx: Dur_weekContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.dur_hour`.
	 * @param ctx the parse tree
	 */
	enterDur_hour?: (ctx: Dur_hourContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.dur_hour`.
	 * @param ctx the parse tree
	 */
	exitDur_hour?: (ctx: Dur_hourContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.dur_minute`.
	 * @param ctx the parse tree
	 */
	enterDur_minute?: (ctx: Dur_minuteContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.dur_minute`.
	 * @param ctx the parse tree
	 */
	exitDur_minute?: (ctx: Dur_minuteContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.dur_second`.
	 * @param ctx the parse tree
	 */
	enterDur_second?: (ctx: Dur_secondContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.dur_second`.
	 * @param ctx the parse tree
	 */
	exitDur_second?: (ctx: Dur_secondContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.period_explicit`.
	 * @param ctx the parse tree
	 */
	enterPeriod_explicit?: (ctx: Period_explicitContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.period_explicit`.
	 * @param ctx the parse tree
	 */
	exitPeriod_explicit?: (ctx: Period_explicitContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.period_start`.
	 * @param ctx the parse tree
	 */
	enterPeriod_start?: (ctx: Period_startContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.period_start`.
	 * @param ctx the parse tree
	 */
	exitPeriod_start?: (ctx: Period_startContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.recur_rule_part`.
	 * @param ctx the parse tree
	 */
	enterRecur_rule_part?: (ctx: Recur_rule_partContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.recur_rule_part`.
	 * @param ctx the parse tree
	 */
	exitRecur_rule_part?: (ctx: Recur_rule_partContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.freq`.
	 * @param ctx the parse tree
	 */
	enterFreq?: (ctx: FreqContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.freq`.
	 * @param ctx the parse tree
	 */
	exitFreq?: (ctx: FreqContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.enddate`.
	 * @param ctx the parse tree
	 */
	enterEnddate?: (ctx: EnddateContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.enddate`.
	 * @param ctx the parse tree
	 */
	exitEnddate?: (ctx: EnddateContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.count`.
	 * @param ctx the parse tree
	 */
	enterCount?: (ctx: CountContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.count`.
	 * @param ctx the parse tree
	 */
	exitCount?: (ctx: CountContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.interval`.
	 * @param ctx the parse tree
	 */
	enterInterval?: (ctx: IntervalContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.interval`.
	 * @param ctx the parse tree
	 */
	exitInterval?: (ctx: IntervalContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.byseclist`.
	 * @param ctx the parse tree
	 */
	enterByseclist?: (ctx: ByseclistContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.byseclist`.
	 * @param ctx the parse tree
	 */
	exitByseclist?: (ctx: ByseclistContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.byminlist`.
	 * @param ctx the parse tree
	 */
	enterByminlist?: (ctx: ByminlistContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.byminlist`.
	 * @param ctx the parse tree
	 */
	exitByminlist?: (ctx: ByminlistContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.byhrlist`.
	 * @param ctx the parse tree
	 */
	enterByhrlist?: (ctx: ByhrlistContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.byhrlist`.
	 * @param ctx the parse tree
	 */
	exitByhrlist?: (ctx: ByhrlistContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.bywdaylist`.
	 * @param ctx the parse tree
	 */
	enterBywdaylist?: (ctx: BywdaylistContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.bywdaylist`.
	 * @param ctx the parse tree
	 */
	exitBywdaylist?: (ctx: BywdaylistContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.weekdaynum`.
	 * @param ctx the parse tree
	 */
	enterWeekdaynum?: (ctx: WeekdaynumContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.weekdaynum`.
	 * @param ctx the parse tree
	 */
	exitWeekdaynum?: (ctx: WeekdaynumContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.weekday`.
	 * @param ctx the parse tree
	 */
	enterWeekday?: (ctx: WeekdayContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.weekday`.
	 * @param ctx the parse tree
	 */
	exitWeekday?: (ctx: WeekdayContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.bymodaylist`.
	 * @param ctx the parse tree
	 */
	enterBymodaylist?: (ctx: BymodaylistContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.bymodaylist`.
	 * @param ctx the parse tree
	 */
	exitBymodaylist?: (ctx: BymodaylistContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.monthdaynum`.
	 * @param ctx the parse tree
	 */
	enterMonthdaynum?: (ctx: MonthdaynumContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.monthdaynum`.
	 * @param ctx the parse tree
	 */
	exitMonthdaynum?: (ctx: MonthdaynumContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.byyrdaylist`.
	 * @param ctx the parse tree
	 */
	enterByyrdaylist?: (ctx: ByyrdaylistContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.byyrdaylist`.
	 * @param ctx the parse tree
	 */
	exitByyrdaylist?: (ctx: ByyrdaylistContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.yeardaynum`.
	 * @param ctx the parse tree
	 */
	enterYeardaynum?: (ctx: YeardaynumContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.yeardaynum`.
	 * @param ctx the parse tree
	 */
	exitYeardaynum?: (ctx: YeardaynumContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.ordyrday`.
	 * @param ctx the parse tree
	 */
	enterOrdyrday?: (ctx: OrdyrdayContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.ordyrday`.
	 * @param ctx the parse tree
	 */
	exitOrdyrday?: (ctx: OrdyrdayContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.bywknolist`.
	 * @param ctx the parse tree
	 */
	enterBywknolist?: (ctx: BywknolistContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.bywknolist`.
	 * @param ctx the parse tree
	 */
	exitBywknolist?: (ctx: BywknolistContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.weeknum`.
	 * @param ctx the parse tree
	 */
	enterWeeknum?: (ctx: WeeknumContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.weeknum`.
	 * @param ctx the parse tree
	 */
	exitWeeknum?: (ctx: WeeknumContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.bymolist`.
	 * @param ctx the parse tree
	 */
	enterBymolist?: (ctx: BymolistContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.bymolist`.
	 * @param ctx the parse tree
	 */
	exitBymolist?: (ctx: BymolistContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.bysplist`.
	 * @param ctx the parse tree
	 */
	enterBysplist?: (ctx: BysplistContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.bysplist`.
	 * @param ctx the parse tree
	 */
	exitBysplist?: (ctx: BysplistContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.digits_2`.
	 * @param ctx the parse tree
	 */
	enterDigits_2?: (ctx: Digits_2Context) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.digits_2`.
	 * @param ctx the parse tree
	 */
	exitDigits_2?: (ctx: Digits_2Context) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.digits_1_2`.
	 * @param ctx the parse tree
	 */
	enterDigits_1_2?: (ctx: Digits_1_2Context) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.digits_1_2`.
	 * @param ctx the parse tree
	 */
	exitDigits_1_2?: (ctx: Digits_1_2Context) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.safe_char`.
	 * @param ctx the parse tree
	 */
	enterSafe_char?: (ctx: Safe_charContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.safe_char`.
	 * @param ctx the parse tree
	 */
	exitSafe_char?: (ctx: Safe_charContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.value_char`.
	 * @param ctx the parse tree
	 */
	enterValue_char?: (ctx: Value_charContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.value_char`.
	 * @param ctx the parse tree
	 */
	exitValue_char?: (ctx: Value_charContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.qsafe_char`.
	 * @param ctx the parse tree
	 */
	enterQsafe_char?: (ctx: Qsafe_charContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.qsafe_char`.
	 * @param ctx the parse tree
	 */
	exitQsafe_char?: (ctx: Qsafe_charContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.tsafe_char`.
	 * @param ctx the parse tree
	 */
	enterTsafe_char?: (ctx: Tsafe_charContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.tsafe_char`.
	 * @param ctx the parse tree
	 */
	exitTsafe_char?: (ctx: Tsafe_charContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.time_numzone`.
	 * @param ctx the parse tree
	 */
	enterTime_numzone?: (ctx: Time_numzoneContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.time_numzone`.
	 * @param ctx the parse tree
	 */
	exitTime_numzone?: (ctx: Time_numzoneContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.reg_name_char`.
	 * @param ctx the parse tree
	 */
	enterReg_name_char?: (ctx: Reg_name_charContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.reg_name_char`.
	 * @param ctx the parse tree
	 */
	exitReg_name_char?: (ctx: Reg_name_charContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.language_char`.
	 * @param ctx the parse tree
	 */
	enterLanguage_char?: (ctx: Language_charContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.language_char`.
	 * @param ctx the parse tree
	 */
	exitLanguage_char?: (ctx: Language_charContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.x_name`.
	 * @param ctx the parse tree
	 */
	enterX_name?: (ctx: X_nameContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.x_name`.
	 * @param ctx the parse tree
	 */
	exitX_name?: (ctx: X_nameContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.alpha_num`.
	 * @param ctx the parse tree
	 */
	enterAlpha_num?: (ctx: Alpha_numContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.alpha_num`.
	 * @param ctx the parse tree
	 */
	exitAlpha_num?: (ctx: Alpha_numContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.digit`.
	 * @param ctx the parse tree
	 */
	enterDigit?: (ctx: DigitContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.digit`.
	 * @param ctx the parse tree
	 */
	exitDigit?: (ctx: DigitContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.alpha`.
	 * @param ctx the parse tree
	 */
	enterAlpha?: (ctx: AlphaContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.alpha`.
	 * @param ctx the parse tree
	 */
	exitAlpha?: (ctx: AlphaContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_accepted`.
	 * @param ctx the parse tree
	 */
	enterK_accepted?: (ctx: K_acceptedContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_accepted`.
	 * @param ctx the parse tree
	 */
	exitK_accepted?: (ctx: K_acceptedContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_action`.
	 * @param ctx the parse tree
	 */
	enterK_action?: (ctx: K_actionContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_action`.
	 * @param ctx the parse tree
	 */
	exitK_action?: (ctx: K_actionContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_address`.
	 * @param ctx the parse tree
	 */
	enterK_address?: (ctx: K_addressContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_address`.
	 * @param ctx the parse tree
	 */
	exitK_address?: (ctx: K_addressContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_altrep`.
	 * @param ctx the parse tree
	 */
	enterK_altrep?: (ctx: K_altrepContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_altrep`.
	 * @param ctx the parse tree
	 */
	exitK_altrep?: (ctx: K_altrepContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_attach`.
	 * @param ctx the parse tree
	 */
	enterK_attach?: (ctx: K_attachContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_attach`.
	 * @param ctx the parse tree
	 */
	exitK_attach?: (ctx: K_attachContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_attendee`.
	 * @param ctx the parse tree
	 */
	enterK_attendee?: (ctx: K_attendeeContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_attendee`.
	 * @param ctx the parse tree
	 */
	exitK_attendee?: (ctx: K_attendeeContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_audio`.
	 * @param ctx the parse tree
	 */
	enterK_audio?: (ctx: K_audioContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_audio`.
	 * @param ctx the parse tree
	 */
	exitK_audio?: (ctx: K_audioContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_base`.
	 * @param ctx the parse tree
	 */
	enterK_base?: (ctx: K_baseContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_base`.
	 * @param ctx the parse tree
	 */
	exitK_base?: (ctx: K_baseContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_begin`.
	 * @param ctx the parse tree
	 */
	enterK_begin?: (ctx: K_beginContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_begin`.
	 * @param ctx the parse tree
	 */
	exitK_begin?: (ctx: K_beginContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_binary`.
	 * @param ctx the parse tree
	 */
	enterK_binary?: (ctx: K_binaryContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_binary`.
	 * @param ctx the parse tree
	 */
	exitK_binary?: (ctx: K_binaryContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_bit`.
	 * @param ctx the parse tree
	 */
	enterK_bit?: (ctx: K_bitContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_bit`.
	 * @param ctx the parse tree
	 */
	exitK_bit?: (ctx: K_bitContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_boolean`.
	 * @param ctx the parse tree
	 */
	enterK_boolean?: (ctx: K_booleanContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_boolean`.
	 * @param ctx the parse tree
	 */
	exitK_boolean?: (ctx: K_booleanContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_busy`.
	 * @param ctx the parse tree
	 */
	enterK_busy?: (ctx: K_busyContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_busy`.
	 * @param ctx the parse tree
	 */
	exitK_busy?: (ctx: K_busyContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_busy_unavailable`.
	 * @param ctx the parse tree
	 */
	enterK_busy_unavailable?: (ctx: K_busy_unavailableContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_busy_unavailable`.
	 * @param ctx the parse tree
	 */
	exitK_busy_unavailable?: (ctx: K_busy_unavailableContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_busy_tentative`.
	 * @param ctx the parse tree
	 */
	enterK_busy_tentative?: (ctx: K_busy_tentativeContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_busy_tentative`.
	 * @param ctx the parse tree
	 */
	exitK_busy_tentative?: (ctx: K_busy_tentativeContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_byday`.
	 * @param ctx the parse tree
	 */
	enterK_byday?: (ctx: K_bydayContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_byday`.
	 * @param ctx the parse tree
	 */
	exitK_byday?: (ctx: K_bydayContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_byhour`.
	 * @param ctx the parse tree
	 */
	enterK_byhour?: (ctx: K_byhourContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_byhour`.
	 * @param ctx the parse tree
	 */
	exitK_byhour?: (ctx: K_byhourContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_byminute`.
	 * @param ctx the parse tree
	 */
	enterK_byminute?: (ctx: K_byminuteContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_byminute`.
	 * @param ctx the parse tree
	 */
	exitK_byminute?: (ctx: K_byminuteContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_bymonth`.
	 * @param ctx the parse tree
	 */
	enterK_bymonth?: (ctx: K_bymonthContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_bymonth`.
	 * @param ctx the parse tree
	 */
	exitK_bymonth?: (ctx: K_bymonthContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_bymonthday`.
	 * @param ctx the parse tree
	 */
	enterK_bymonthday?: (ctx: K_bymonthdayContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_bymonthday`.
	 * @param ctx the parse tree
	 */
	exitK_bymonthday?: (ctx: K_bymonthdayContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_bysecond`.
	 * @param ctx the parse tree
	 */
	enterK_bysecond?: (ctx: K_bysecondContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_bysecond`.
	 * @param ctx the parse tree
	 */
	exitK_bysecond?: (ctx: K_bysecondContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_bysetpos`.
	 * @param ctx the parse tree
	 */
	enterK_bysetpos?: (ctx: K_bysetposContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_bysetpos`.
	 * @param ctx the parse tree
	 */
	exitK_bysetpos?: (ctx: K_bysetposContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_byweekno`.
	 * @param ctx the parse tree
	 */
	enterK_byweekno?: (ctx: K_byweeknoContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_byweekno`.
	 * @param ctx the parse tree
	 */
	exitK_byweekno?: (ctx: K_byweeknoContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_byyearday`.
	 * @param ctx the parse tree
	 */
	enterK_byyearday?: (ctx: K_byyeardayContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_byyearday`.
	 * @param ctx the parse tree
	 */
	exitK_byyearday?: (ctx: K_byyeardayContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_cal_address`.
	 * @param ctx the parse tree
	 */
	enterK_cal_address?: (ctx: K_cal_addressContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_cal_address`.
	 * @param ctx the parse tree
	 */
	exitK_cal_address?: (ctx: K_cal_addressContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_calscale`.
	 * @param ctx the parse tree
	 */
	enterK_calscale?: (ctx: K_calscaleContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_calscale`.
	 * @param ctx the parse tree
	 */
	exitK_calscale?: (ctx: K_calscaleContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_cancelled`.
	 * @param ctx the parse tree
	 */
	enterK_cancelled?: (ctx: K_cancelledContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_cancelled`.
	 * @param ctx the parse tree
	 */
	exitK_cancelled?: (ctx: K_cancelledContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_categories`.
	 * @param ctx the parse tree
	 */
	enterK_categories?: (ctx: K_categoriesContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_categories`.
	 * @param ctx the parse tree
	 */
	exitK_categories?: (ctx: K_categoriesContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_chair`.
	 * @param ctx the parse tree
	 */
	enterK_chair?: (ctx: K_chairContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_chair`.
	 * @param ctx the parse tree
	 */
	exitK_chair?: (ctx: K_chairContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_child`.
	 * @param ctx the parse tree
	 */
	enterK_child?: (ctx: K_childContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_child`.
	 * @param ctx the parse tree
	 */
	exitK_child?: (ctx: K_childContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_class`.
	 * @param ctx the parse tree
	 */
	enterK_class?: (ctx: K_classContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_class`.
	 * @param ctx the parse tree
	 */
	exitK_class?: (ctx: K_classContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_cn`.
	 * @param ctx the parse tree
	 */
	enterK_cn?: (ctx: K_cnContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_cn`.
	 * @param ctx the parse tree
	 */
	exitK_cn?: (ctx: K_cnContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_comment`.
	 * @param ctx the parse tree
	 */
	enterK_comment?: (ctx: K_commentContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_comment`.
	 * @param ctx the parse tree
	 */
	exitK_comment?: (ctx: K_commentContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_completed`.
	 * @param ctx the parse tree
	 */
	enterK_completed?: (ctx: K_completedContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_completed`.
	 * @param ctx the parse tree
	 */
	exitK_completed?: (ctx: K_completedContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_confidential`.
	 * @param ctx the parse tree
	 */
	enterK_confidential?: (ctx: K_confidentialContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_confidential`.
	 * @param ctx the parse tree
	 */
	exitK_confidential?: (ctx: K_confidentialContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_confirmed`.
	 * @param ctx the parse tree
	 */
	enterK_confirmed?: (ctx: K_confirmedContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_confirmed`.
	 * @param ctx the parse tree
	 */
	exitK_confirmed?: (ctx: K_confirmedContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_contact`.
	 * @param ctx the parse tree
	 */
	enterK_contact?: (ctx: K_contactContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_contact`.
	 * @param ctx the parse tree
	 */
	exitK_contact?: (ctx: K_contactContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_count`.
	 * @param ctx the parse tree
	 */
	enterK_count?: (ctx: K_countContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_count`.
	 * @param ctx the parse tree
	 */
	exitK_count?: (ctx: K_countContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_created`.
	 * @param ctx the parse tree
	 */
	enterK_created?: (ctx: K_createdContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_created`.
	 * @param ctx the parse tree
	 */
	exitK_created?: (ctx: K_createdContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_cutype`.
	 * @param ctx the parse tree
	 */
	enterK_cutype?: (ctx: K_cutypeContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_cutype`.
	 * @param ctx the parse tree
	 */
	exitK_cutype?: (ctx: K_cutypeContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_daily`.
	 * @param ctx the parse tree
	 */
	enterK_daily?: (ctx: K_dailyContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_daily`.
	 * @param ctx the parse tree
	 */
	exitK_daily?: (ctx: K_dailyContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_date`.
	 * @param ctx the parse tree
	 */
	enterK_date?: (ctx: K_dateContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_date`.
	 * @param ctx the parse tree
	 */
	exitK_date?: (ctx: K_dateContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_date_time`.
	 * @param ctx the parse tree
	 */
	enterK_date_time?: (ctx: K_date_timeContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_date_time`.
	 * @param ctx the parse tree
	 */
	exitK_date_time?: (ctx: K_date_timeContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_daylight`.
	 * @param ctx the parse tree
	 */
	enterK_daylight?: (ctx: K_daylightContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_daylight`.
	 * @param ctx the parse tree
	 */
	exitK_daylight?: (ctx: K_daylightContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_declined`.
	 * @param ctx the parse tree
	 */
	enterK_declined?: (ctx: K_declinedContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_declined`.
	 * @param ctx the parse tree
	 */
	exitK_declined?: (ctx: K_declinedContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_delegated`.
	 * @param ctx the parse tree
	 */
	enterK_delegated?: (ctx: K_delegatedContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_delegated`.
	 * @param ctx the parse tree
	 */
	exitK_delegated?: (ctx: K_delegatedContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_delegated_from`.
	 * @param ctx the parse tree
	 */
	enterK_delegated_from?: (ctx: K_delegated_fromContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_delegated_from`.
	 * @param ctx the parse tree
	 */
	exitK_delegated_from?: (ctx: K_delegated_fromContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_delegated_to`.
	 * @param ctx the parse tree
	 */
	enterK_delegated_to?: (ctx: K_delegated_toContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_delegated_to`.
	 * @param ctx the parse tree
	 */
	exitK_delegated_to?: (ctx: K_delegated_toContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_description`.
	 * @param ctx the parse tree
	 */
	enterK_description?: (ctx: K_descriptionContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_description`.
	 * @param ctx the parse tree
	 */
	exitK_description?: (ctx: K_descriptionContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_dir`.
	 * @param ctx the parse tree
	 */
	enterK_dir?: (ctx: K_dirContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_dir`.
	 * @param ctx the parse tree
	 */
	exitK_dir?: (ctx: K_dirContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_display`.
	 * @param ctx the parse tree
	 */
	enterK_display?: (ctx: K_displayContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_display`.
	 * @param ctx the parse tree
	 */
	exitK_display?: (ctx: K_displayContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_draft`.
	 * @param ctx the parse tree
	 */
	enterK_draft?: (ctx: K_draftContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_draft`.
	 * @param ctx the parse tree
	 */
	exitK_draft?: (ctx: K_draftContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_dtend`.
	 * @param ctx the parse tree
	 */
	enterK_dtend?: (ctx: K_dtendContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_dtend`.
	 * @param ctx the parse tree
	 */
	exitK_dtend?: (ctx: K_dtendContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_dtstamp`.
	 * @param ctx the parse tree
	 */
	enterK_dtstamp?: (ctx: K_dtstampContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_dtstamp`.
	 * @param ctx the parse tree
	 */
	exitK_dtstamp?: (ctx: K_dtstampContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_dtstart`.
	 * @param ctx the parse tree
	 */
	enterK_dtstart?: (ctx: K_dtstartContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_dtstart`.
	 * @param ctx the parse tree
	 */
	exitK_dtstart?: (ctx: K_dtstartContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_due`.
	 * @param ctx the parse tree
	 */
	enterK_due?: (ctx: K_dueContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_due`.
	 * @param ctx the parse tree
	 */
	exitK_due?: (ctx: K_dueContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_duration`.
	 * @param ctx the parse tree
	 */
	enterK_duration?: (ctx: K_durationContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_duration`.
	 * @param ctx the parse tree
	 */
	exitK_duration?: (ctx: K_durationContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_email`.
	 * @param ctx the parse tree
	 */
	enterK_email?: (ctx: K_emailContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_email`.
	 * @param ctx the parse tree
	 */
	exitK_email?: (ctx: K_emailContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_encoding`.
	 * @param ctx the parse tree
	 */
	enterK_encoding?: (ctx: K_encodingContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_encoding`.
	 * @param ctx the parse tree
	 */
	exitK_encoding?: (ctx: K_encodingContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_end`.
	 * @param ctx the parse tree
	 */
	enterK_end?: (ctx: K_endContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_end`.
	 * @param ctx the parse tree
	 */
	exitK_end?: (ctx: K_endContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_exdate`.
	 * @param ctx the parse tree
	 */
	enterK_exdate?: (ctx: K_exdateContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_exdate`.
	 * @param ctx the parse tree
	 */
	exitK_exdate?: (ctx: K_exdateContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_false`.
	 * @param ctx the parse tree
	 */
	enterK_false?: (ctx: K_falseContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_false`.
	 * @param ctx the parse tree
	 */
	exitK_false?: (ctx: K_falseContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_fbtype`.
	 * @param ctx the parse tree
	 */
	enterK_fbtype?: (ctx: K_fbtypeContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_fbtype`.
	 * @param ctx the parse tree
	 */
	exitK_fbtype?: (ctx: K_fbtypeContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_final`.
	 * @param ctx the parse tree
	 */
	enterK_final?: (ctx: K_finalContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_final`.
	 * @param ctx the parse tree
	 */
	exitK_final?: (ctx: K_finalContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_float`.
	 * @param ctx the parse tree
	 */
	enterK_float?: (ctx: K_floatContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_float`.
	 * @param ctx the parse tree
	 */
	exitK_float?: (ctx: K_floatContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_fmttype`.
	 * @param ctx the parse tree
	 */
	enterK_fmttype?: (ctx: K_fmttypeContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_fmttype`.
	 * @param ctx the parse tree
	 */
	exitK_fmttype?: (ctx: K_fmttypeContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_fr`.
	 * @param ctx the parse tree
	 */
	enterK_fr?: (ctx: K_frContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_fr`.
	 * @param ctx the parse tree
	 */
	exitK_fr?: (ctx: K_frContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_free`.
	 * @param ctx the parse tree
	 */
	enterK_free?: (ctx: K_freeContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_free`.
	 * @param ctx the parse tree
	 */
	exitK_free?: (ctx: K_freeContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_freebusy`.
	 * @param ctx the parse tree
	 */
	enterK_freebusy?: (ctx: K_freebusyContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_freebusy`.
	 * @param ctx the parse tree
	 */
	exitK_freebusy?: (ctx: K_freebusyContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_freq`.
	 * @param ctx the parse tree
	 */
	enterK_freq?: (ctx: K_freqContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_freq`.
	 * @param ctx the parse tree
	 */
	exitK_freq?: (ctx: K_freqContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_geo`.
	 * @param ctx the parse tree
	 */
	enterK_geo?: (ctx: K_geoContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_geo`.
	 * @param ctx the parse tree
	 */
	exitK_geo?: (ctx: K_geoContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_gregorian`.
	 * @param ctx the parse tree
	 */
	enterK_gregorian?: (ctx: K_gregorianContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_gregorian`.
	 * @param ctx the parse tree
	 */
	exitK_gregorian?: (ctx: K_gregorianContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_group`.
	 * @param ctx the parse tree
	 */
	enterK_group?: (ctx: K_groupContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_group`.
	 * @param ctx the parse tree
	 */
	exitK_group?: (ctx: K_groupContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_hourly`.
	 * @param ctx the parse tree
	 */
	enterK_hourly?: (ctx: K_hourlyContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_hourly`.
	 * @param ctx the parse tree
	 */
	exitK_hourly?: (ctx: K_hourlyContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_in_process`.
	 * @param ctx the parse tree
	 */
	enterK_in_process?: (ctx: K_in_processContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_in_process`.
	 * @param ctx the parse tree
	 */
	exitK_in_process?: (ctx: K_in_processContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_individual`.
	 * @param ctx the parse tree
	 */
	enterK_individual?: (ctx: K_individualContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_individual`.
	 * @param ctx the parse tree
	 */
	exitK_individual?: (ctx: K_individualContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_integer`.
	 * @param ctx the parse tree
	 */
	enterK_integer?: (ctx: K_integerContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_integer`.
	 * @param ctx the parse tree
	 */
	exitK_integer?: (ctx: K_integerContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_interval`.
	 * @param ctx the parse tree
	 */
	enterK_interval?: (ctx: K_intervalContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_interval`.
	 * @param ctx the parse tree
	 */
	exitK_interval?: (ctx: K_intervalContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_language`.
	 * @param ctx the parse tree
	 */
	enterK_language?: (ctx: K_languageContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_language`.
	 * @param ctx the parse tree
	 */
	exitK_language?: (ctx: K_languageContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_last_modified`.
	 * @param ctx the parse tree
	 */
	enterK_last_modified?: (ctx: K_last_modifiedContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_last_modified`.
	 * @param ctx the parse tree
	 */
	exitK_last_modified?: (ctx: K_last_modifiedContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_location`.
	 * @param ctx the parse tree
	 */
	enterK_location?: (ctx: K_locationContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_location`.
	 * @param ctx the parse tree
	 */
	exitK_location?: (ctx: K_locationContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_member`.
	 * @param ctx the parse tree
	 */
	enterK_member?: (ctx: K_memberContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_member`.
	 * @param ctx the parse tree
	 */
	exitK_member?: (ctx: K_memberContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_method`.
	 * @param ctx the parse tree
	 */
	enterK_method?: (ctx: K_methodContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_method`.
	 * @param ctx the parse tree
	 */
	exitK_method?: (ctx: K_methodContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_minutely`.
	 * @param ctx the parse tree
	 */
	enterK_minutely?: (ctx: K_minutelyContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_minutely`.
	 * @param ctx the parse tree
	 */
	exitK_minutely?: (ctx: K_minutelyContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_mo`.
	 * @param ctx the parse tree
	 */
	enterK_mo?: (ctx: K_moContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_mo`.
	 * @param ctx the parse tree
	 */
	exitK_mo?: (ctx: K_moContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_monthly`.
	 * @param ctx the parse tree
	 */
	enterK_monthly?: (ctx: K_monthlyContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_monthly`.
	 * @param ctx the parse tree
	 */
	exitK_monthly?: (ctx: K_monthlyContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_needs_action`.
	 * @param ctx the parse tree
	 */
	enterK_needs_action?: (ctx: K_needs_actionContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_needs_action`.
	 * @param ctx the parse tree
	 */
	exitK_needs_action?: (ctx: K_needs_actionContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_non_participant`.
	 * @param ctx the parse tree
	 */
	enterK_non_participant?: (ctx: K_non_participantContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_non_participant`.
	 * @param ctx the parse tree
	 */
	exitK_non_participant?: (ctx: K_non_participantContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_opaque`.
	 * @param ctx the parse tree
	 */
	enterK_opaque?: (ctx: K_opaqueContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_opaque`.
	 * @param ctx the parse tree
	 */
	exitK_opaque?: (ctx: K_opaqueContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_opt_participant`.
	 * @param ctx the parse tree
	 */
	enterK_opt_participant?: (ctx: K_opt_participantContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_opt_participant`.
	 * @param ctx the parse tree
	 */
	exitK_opt_participant?: (ctx: K_opt_participantContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_organizer`.
	 * @param ctx the parse tree
	 */
	enterK_organizer?: (ctx: K_organizerContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_organizer`.
	 * @param ctx the parse tree
	 */
	exitK_organizer?: (ctx: K_organizerContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_parent`.
	 * @param ctx the parse tree
	 */
	enterK_parent?: (ctx: K_parentContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_parent`.
	 * @param ctx the parse tree
	 */
	exitK_parent?: (ctx: K_parentContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_participant`.
	 * @param ctx the parse tree
	 */
	enterK_participant?: (ctx: K_participantContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_participant`.
	 * @param ctx the parse tree
	 */
	exitK_participant?: (ctx: K_participantContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_partstat`.
	 * @param ctx the parse tree
	 */
	enterK_partstat?: (ctx: K_partstatContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_partstat`.
	 * @param ctx the parse tree
	 */
	exitK_partstat?: (ctx: K_partstatContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_percent_complete`.
	 * @param ctx the parse tree
	 */
	enterK_percent_complete?: (ctx: K_percent_completeContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_percent_complete`.
	 * @param ctx the parse tree
	 */
	exitK_percent_complete?: (ctx: K_percent_completeContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_period`.
	 * @param ctx the parse tree
	 */
	enterK_period?: (ctx: K_periodContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_period`.
	 * @param ctx the parse tree
	 */
	exitK_period?: (ctx: K_periodContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_priority`.
	 * @param ctx the parse tree
	 */
	enterK_priority?: (ctx: K_priorityContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_priority`.
	 * @param ctx the parse tree
	 */
	exitK_priority?: (ctx: K_priorityContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_private`.
	 * @param ctx the parse tree
	 */
	enterK_private?: (ctx: K_privateContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_private`.
	 * @param ctx the parse tree
	 */
	exitK_private?: (ctx: K_privateContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_process`.
	 * @param ctx the parse tree
	 */
	enterK_process?: (ctx: K_processContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_process`.
	 * @param ctx the parse tree
	 */
	exitK_process?: (ctx: K_processContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_prodid`.
	 * @param ctx the parse tree
	 */
	enterK_prodid?: (ctx: K_prodidContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_prodid`.
	 * @param ctx the parse tree
	 */
	exitK_prodid?: (ctx: K_prodidContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_public`.
	 * @param ctx the parse tree
	 */
	enterK_public?: (ctx: K_publicContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_public`.
	 * @param ctx the parse tree
	 */
	exitK_public?: (ctx: K_publicContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_range`.
	 * @param ctx the parse tree
	 */
	enterK_range?: (ctx: K_rangeContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_range`.
	 * @param ctx the parse tree
	 */
	exitK_range?: (ctx: K_rangeContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_rdate`.
	 * @param ctx the parse tree
	 */
	enterK_rdate?: (ctx: K_rdateContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_rdate`.
	 * @param ctx the parse tree
	 */
	exitK_rdate?: (ctx: K_rdateContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_recur`.
	 * @param ctx the parse tree
	 */
	enterK_recur?: (ctx: K_recurContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_recur`.
	 * @param ctx the parse tree
	 */
	exitK_recur?: (ctx: K_recurContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_recurrence_id`.
	 * @param ctx the parse tree
	 */
	enterK_recurrence_id?: (ctx: K_recurrence_idContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_recurrence_id`.
	 * @param ctx the parse tree
	 */
	exitK_recurrence_id?: (ctx: K_recurrence_idContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_relat`.
	 * @param ctx the parse tree
	 */
	enterK_relat?: (ctx: K_relatContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_relat`.
	 * @param ctx the parse tree
	 */
	exitK_relat?: (ctx: K_relatContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_related`.
	 * @param ctx the parse tree
	 */
	enterK_related?: (ctx: K_relatedContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_related`.
	 * @param ctx the parse tree
	 */
	exitK_related?: (ctx: K_relatedContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_related_to`.
	 * @param ctx the parse tree
	 */
	enterK_related_to?: (ctx: K_related_toContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_related_to`.
	 * @param ctx the parse tree
	 */
	exitK_related_to?: (ctx: K_related_toContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_reltype`.
	 * @param ctx the parse tree
	 */
	enterK_reltype?: (ctx: K_reltypeContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_reltype`.
	 * @param ctx the parse tree
	 */
	exitK_reltype?: (ctx: K_reltypeContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_repeat`.
	 * @param ctx the parse tree
	 */
	enterK_repeat?: (ctx: K_repeatContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_repeat`.
	 * @param ctx the parse tree
	 */
	exitK_repeat?: (ctx: K_repeatContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_req_participant`.
	 * @param ctx the parse tree
	 */
	enterK_req_participant?: (ctx: K_req_participantContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_req_participant`.
	 * @param ctx the parse tree
	 */
	exitK_req_participant?: (ctx: K_req_participantContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_request_status`.
	 * @param ctx the parse tree
	 */
	enterK_request_status?: (ctx: K_request_statusContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_request_status`.
	 * @param ctx the parse tree
	 */
	exitK_request_status?: (ctx: K_request_statusContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_resource`.
	 * @param ctx the parse tree
	 */
	enterK_resource?: (ctx: K_resourceContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_resource`.
	 * @param ctx the parse tree
	 */
	exitK_resource?: (ctx: K_resourceContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_resources`.
	 * @param ctx the parse tree
	 */
	enterK_resources?: (ctx: K_resourcesContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_resources`.
	 * @param ctx the parse tree
	 */
	exitK_resources?: (ctx: K_resourcesContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_role`.
	 * @param ctx the parse tree
	 */
	enterK_role?: (ctx: K_roleContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_role`.
	 * @param ctx the parse tree
	 */
	exitK_role?: (ctx: K_roleContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_room`.
	 * @param ctx the parse tree
	 */
	enterK_room?: (ctx: K_roomContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_room`.
	 * @param ctx the parse tree
	 */
	exitK_room?: (ctx: K_roomContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_rrule`.
	 * @param ctx the parse tree
	 */
	enterK_rrule?: (ctx: K_rruleContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_rrule`.
	 * @param ctx the parse tree
	 */
	exitK_rrule?: (ctx: K_rruleContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_rsvp`.
	 * @param ctx the parse tree
	 */
	enterK_rsvp?: (ctx: K_rsvpContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_rsvp`.
	 * @param ctx the parse tree
	 */
	exitK_rsvp?: (ctx: K_rsvpContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_sa`.
	 * @param ctx the parse tree
	 */
	enterK_sa?: (ctx: K_saContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_sa`.
	 * @param ctx the parse tree
	 */
	exitK_sa?: (ctx: K_saContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_secondly`.
	 * @param ctx the parse tree
	 */
	enterK_secondly?: (ctx: K_secondlyContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_secondly`.
	 * @param ctx the parse tree
	 */
	exitK_secondly?: (ctx: K_secondlyContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_sent_by`.
	 * @param ctx the parse tree
	 */
	enterK_sent_by?: (ctx: K_sent_byContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_sent_by`.
	 * @param ctx the parse tree
	 */
	exitK_sent_by?: (ctx: K_sent_byContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_sequence`.
	 * @param ctx the parse tree
	 */
	enterK_sequence?: (ctx: K_sequenceContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_sequence`.
	 * @param ctx the parse tree
	 */
	exitK_sequence?: (ctx: K_sequenceContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_sibling`.
	 * @param ctx the parse tree
	 */
	enterK_sibling?: (ctx: K_siblingContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_sibling`.
	 * @param ctx the parse tree
	 */
	exitK_sibling?: (ctx: K_siblingContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_standard`.
	 * @param ctx the parse tree
	 */
	enterK_standard?: (ctx: K_standardContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_standard`.
	 * @param ctx the parse tree
	 */
	exitK_standard?: (ctx: K_standardContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_start`.
	 * @param ctx the parse tree
	 */
	enterK_start?: (ctx: K_startContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_start`.
	 * @param ctx the parse tree
	 */
	exitK_start?: (ctx: K_startContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_status`.
	 * @param ctx the parse tree
	 */
	enterK_status?: (ctx: K_statusContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_status`.
	 * @param ctx the parse tree
	 */
	exitK_status?: (ctx: K_statusContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_su`.
	 * @param ctx the parse tree
	 */
	enterK_su?: (ctx: K_suContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_su`.
	 * @param ctx the parse tree
	 */
	exitK_su?: (ctx: K_suContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_summary`.
	 * @param ctx the parse tree
	 */
	enterK_summary?: (ctx: K_summaryContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_summary`.
	 * @param ctx the parse tree
	 */
	exitK_summary?: (ctx: K_summaryContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_tentative`.
	 * @param ctx the parse tree
	 */
	enterK_tentative?: (ctx: K_tentativeContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_tentative`.
	 * @param ctx the parse tree
	 */
	exitK_tentative?: (ctx: K_tentativeContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_text`.
	 * @param ctx the parse tree
	 */
	enterK_text?: (ctx: K_textContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_text`.
	 * @param ctx the parse tree
	 */
	exitK_text?: (ctx: K_textContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_th`.
	 * @param ctx the parse tree
	 */
	enterK_th?: (ctx: K_thContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_th`.
	 * @param ctx the parse tree
	 */
	exitK_th?: (ctx: K_thContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_thisandfuture`.
	 * @param ctx the parse tree
	 */
	enterK_thisandfuture?: (ctx: K_thisandfutureContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_thisandfuture`.
	 * @param ctx the parse tree
	 */
	exitK_thisandfuture?: (ctx: K_thisandfutureContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_time`.
	 * @param ctx the parse tree
	 */
	enterK_time?: (ctx: K_timeContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_time`.
	 * @param ctx the parse tree
	 */
	exitK_time?: (ctx: K_timeContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_transp`.
	 * @param ctx the parse tree
	 */
	enterK_transp?: (ctx: K_transpContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_transp`.
	 * @param ctx the parse tree
	 */
	exitK_transp?: (ctx: K_transpContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_transparent`.
	 * @param ctx the parse tree
	 */
	enterK_transparent?: (ctx: K_transparentContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_transparent`.
	 * @param ctx the parse tree
	 */
	exitK_transparent?: (ctx: K_transparentContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_trigger`.
	 * @param ctx the parse tree
	 */
	enterK_trigger?: (ctx: K_triggerContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_trigger`.
	 * @param ctx the parse tree
	 */
	exitK_trigger?: (ctx: K_triggerContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_true`.
	 * @param ctx the parse tree
	 */
	enterK_true?: (ctx: K_trueContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_true`.
	 * @param ctx the parse tree
	 */
	exitK_true?: (ctx: K_trueContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_tu`.
	 * @param ctx the parse tree
	 */
	enterK_tu?: (ctx: K_tuContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_tu`.
	 * @param ctx the parse tree
	 */
	exitK_tu?: (ctx: K_tuContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_tzid`.
	 * @param ctx the parse tree
	 */
	enterK_tzid?: (ctx: K_tzidContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_tzid`.
	 * @param ctx the parse tree
	 */
	exitK_tzid?: (ctx: K_tzidContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_tzname`.
	 * @param ctx the parse tree
	 */
	enterK_tzname?: (ctx: K_tznameContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_tzname`.
	 * @param ctx the parse tree
	 */
	exitK_tzname?: (ctx: K_tznameContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_tzoffsetfrom`.
	 * @param ctx the parse tree
	 */
	enterK_tzoffsetfrom?: (ctx: K_tzoffsetfromContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_tzoffsetfrom`.
	 * @param ctx the parse tree
	 */
	exitK_tzoffsetfrom?: (ctx: K_tzoffsetfromContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_tzoffsetto`.
	 * @param ctx the parse tree
	 */
	enterK_tzoffsetto?: (ctx: K_tzoffsettoContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_tzoffsetto`.
	 * @param ctx the parse tree
	 */
	exitK_tzoffsetto?: (ctx: K_tzoffsettoContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_tzurl`.
	 * @param ctx the parse tree
	 */
	enterK_tzurl?: (ctx: K_tzurlContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_tzurl`.
	 * @param ctx the parse tree
	 */
	exitK_tzurl?: (ctx: K_tzurlContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_uid`.
	 * @param ctx the parse tree
	 */
	enterK_uid?: (ctx: K_uidContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_uid`.
	 * @param ctx the parse tree
	 */
	exitK_uid?: (ctx: K_uidContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_unknown`.
	 * @param ctx the parse tree
	 */
	enterK_unknown?: (ctx: K_unknownContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_unknown`.
	 * @param ctx the parse tree
	 */
	exitK_unknown?: (ctx: K_unknownContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_until`.
	 * @param ctx the parse tree
	 */
	enterK_until?: (ctx: K_untilContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_until`.
	 * @param ctx the parse tree
	 */
	exitK_until?: (ctx: K_untilContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_uri`.
	 * @param ctx the parse tree
	 */
	enterK_uri?: (ctx: K_uriContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_uri`.
	 * @param ctx the parse tree
	 */
	exitK_uri?: (ctx: K_uriContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_url`.
	 * @param ctx the parse tree
	 */
	enterK_url?: (ctx: K_urlContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_url`.
	 * @param ctx the parse tree
	 */
	exitK_url?: (ctx: K_urlContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_utc_offset`.
	 * @param ctx the parse tree
	 */
	enterK_utc_offset?: (ctx: K_utc_offsetContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_utc_offset`.
	 * @param ctx the parse tree
	 */
	exitK_utc_offset?: (ctx: K_utc_offsetContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_valarm`.
	 * @param ctx the parse tree
	 */
	enterK_valarm?: (ctx: K_valarmContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_valarm`.
	 * @param ctx the parse tree
	 */
	exitK_valarm?: (ctx: K_valarmContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_value`.
	 * @param ctx the parse tree
	 */
	enterK_value?: (ctx: K_valueContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_value`.
	 * @param ctx the parse tree
	 */
	exitK_value?: (ctx: K_valueContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_vcalendar`.
	 * @param ctx the parse tree
	 */
	enterK_vcalendar?: (ctx: K_vcalendarContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_vcalendar`.
	 * @param ctx the parse tree
	 */
	exitK_vcalendar?: (ctx: K_vcalendarContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_version`.
	 * @param ctx the parse tree
	 */
	enterK_version?: (ctx: K_versionContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_version`.
	 * @param ctx the parse tree
	 */
	exitK_version?: (ctx: K_versionContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_vevent`.
	 * @param ctx the parse tree
	 */
	enterK_vevent?: (ctx: K_veventContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_vevent`.
	 * @param ctx the parse tree
	 */
	exitK_vevent?: (ctx: K_veventContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_vfreebusy`.
	 * @param ctx the parse tree
	 */
	enterK_vfreebusy?: (ctx: K_vfreebusyContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_vfreebusy`.
	 * @param ctx the parse tree
	 */
	exitK_vfreebusy?: (ctx: K_vfreebusyContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_vjournal`.
	 * @param ctx the parse tree
	 */
	enterK_vjournal?: (ctx: K_vjournalContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_vjournal`.
	 * @param ctx the parse tree
	 */
	exitK_vjournal?: (ctx: K_vjournalContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_vtimezone`.
	 * @param ctx the parse tree
	 */
	enterK_vtimezone?: (ctx: K_vtimezoneContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_vtimezone`.
	 * @param ctx the parse tree
	 */
	exitK_vtimezone?: (ctx: K_vtimezoneContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_vtodo`.
	 * @param ctx the parse tree
	 */
	enterK_vtodo?: (ctx: K_vtodoContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_vtodo`.
	 * @param ctx the parse tree
	 */
	exitK_vtodo?: (ctx: K_vtodoContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_we`.
	 * @param ctx the parse tree
	 */
	enterK_we?: (ctx: K_weContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_we`.
	 * @param ctx the parse tree
	 */
	exitK_we?: (ctx: K_weContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_weekly`.
	 * @param ctx the parse tree
	 */
	enterK_weekly?: (ctx: K_weeklyContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_weekly`.
	 * @param ctx the parse tree
	 */
	exitK_weekly?: (ctx: K_weeklyContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_wkst`.
	 * @param ctx the parse tree
	 */
	enterK_wkst?: (ctx: K_wkstContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_wkst`.
	 * @param ctx the parse tree
	 */
	exitK_wkst?: (ctx: K_wkstContext) => void;

	/**
	 * Enter a parse tree produced by `ICalendarParser.k_yearly`.
	 * @param ctx the parse tree
	 */
	enterK_yearly?: (ctx: K_yearlyContext) => void;
	/**
	 * Exit a parse tree produced by `ICalendarParser.k_yearly`.
	 * @param ctx the parse tree
	 */
	exitK_yearly?: (ctx: K_yearlyContext) => void;
}

