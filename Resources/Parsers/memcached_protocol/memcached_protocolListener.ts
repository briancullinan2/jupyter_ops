// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/memcached_protocol/memcached_protocol.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { Command_lineContext } from "./memcached_protocolParser";
import { Storage_commandContext } from "./memcached_protocolParser";
import { Storage_command_nameContext } from "./memcached_protocolParser";
import { Retrieval_commandContext } from "./memcached_protocolParser";
import { Delete_commandContext } from "./memcached_protocolParser";
import { Increment_commandContext } from "./memcached_protocolParser";
import { Decrement_commandContext } from "./memcached_protocolParser";
import { Statistics_commandContext } from "./memcached_protocolParser";
import { Statistics_optionContext } from "./memcached_protocolParser";
import { Flush_commandContext } from "./memcached_protocolParser";
import { Version_commandContext } from "./memcached_protocolParser";
import { Verbosity_commandContext } from "./memcached_protocolParser";
import { Quit_commandContext } from "./memcached_protocolParser";
import { Storage_responseContext } from "./memcached_protocolParser";
import { Retrieval_responseContext } from "./memcached_protocolParser";
import { Deletion_responseContext } from "./memcached_protocolParser";
import { Incr_or_decr_responseContext } from "./memcached_protocolParser";
import { Statistics_responseContext } from "./memcached_protocolParser";
import { Error_responseContext } from "./memcached_protocolParser";
import { General_statisticContext } from "./memcached_protocolParser";
import { Size_statisticContext } from "./memcached_protocolParser";
import { General_errorContext } from "./memcached_protocolParser";
import { Client_error_messageContext } from "./memcached_protocolParser";
import { Server_error_messageContext } from "./memcached_protocolParser";
import { EndContext } from "./memcached_protocolParser";
import { NoreplyContext } from "./memcached_protocolParser";
import { KeyContext } from "./memcached_protocolParser";
import { FlagsContext } from "./memcached_protocolParser";
import { ExptimeContext } from "./memcached_protocolParser";
import { BytesContext } from "./memcached_protocolParser";
import { Cas_uniqueContext } from "./memcached_protocolParser";
import { ValueContext } from "./memcached_protocolParser";
import { TimeContext } from "./memcached_protocolParser";
import { DelayContext } from "./memcached_protocolParser";
import { Verbosity_levelContext } from "./memcached_protocolParser";
import { Statistic_nameContext } from "./memcached_protocolParser";
import { Statistic_valueContext } from "./memcached_protocolParser";
import { SizeContext } from "./memcached_protocolParser";
import { CountContext } from "./memcached_protocolParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `memcached_protocolParser`.
 */
export interface memcached_protocolListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `memcached_protocolParser.command_line`.
	 * @param ctx the parse tree
	 */
	enterCommand_line?: (ctx: Command_lineContext) => void;
	/**
	 * Exit a parse tree produced by `memcached_protocolParser.command_line`.
	 * @param ctx the parse tree
	 */
	exitCommand_line?: (ctx: Command_lineContext) => void;

	/**
	 * Enter a parse tree produced by `memcached_protocolParser.storage_command`.
	 * @param ctx the parse tree
	 */
	enterStorage_command?: (ctx: Storage_commandContext) => void;
	/**
	 * Exit a parse tree produced by `memcached_protocolParser.storage_command`.
	 * @param ctx the parse tree
	 */
	exitStorage_command?: (ctx: Storage_commandContext) => void;

	/**
	 * Enter a parse tree produced by `memcached_protocolParser.storage_command_name`.
	 * @param ctx the parse tree
	 */
	enterStorage_command_name?: (ctx: Storage_command_nameContext) => void;
	/**
	 * Exit a parse tree produced by `memcached_protocolParser.storage_command_name`.
	 * @param ctx the parse tree
	 */
	exitStorage_command_name?: (ctx: Storage_command_nameContext) => void;

	/**
	 * Enter a parse tree produced by `memcached_protocolParser.retrieval_command`.
	 * @param ctx the parse tree
	 */
	enterRetrieval_command?: (ctx: Retrieval_commandContext) => void;
	/**
	 * Exit a parse tree produced by `memcached_protocolParser.retrieval_command`.
	 * @param ctx the parse tree
	 */
	exitRetrieval_command?: (ctx: Retrieval_commandContext) => void;

	/**
	 * Enter a parse tree produced by `memcached_protocolParser.delete_command`.
	 * @param ctx the parse tree
	 */
	enterDelete_command?: (ctx: Delete_commandContext) => void;
	/**
	 * Exit a parse tree produced by `memcached_protocolParser.delete_command`.
	 * @param ctx the parse tree
	 */
	exitDelete_command?: (ctx: Delete_commandContext) => void;

	/**
	 * Enter a parse tree produced by `memcached_protocolParser.increment_command`.
	 * @param ctx the parse tree
	 */
	enterIncrement_command?: (ctx: Increment_commandContext) => void;
	/**
	 * Exit a parse tree produced by `memcached_protocolParser.increment_command`.
	 * @param ctx the parse tree
	 */
	exitIncrement_command?: (ctx: Increment_commandContext) => void;

	/**
	 * Enter a parse tree produced by `memcached_protocolParser.decrement_command`.
	 * @param ctx the parse tree
	 */
	enterDecrement_command?: (ctx: Decrement_commandContext) => void;
	/**
	 * Exit a parse tree produced by `memcached_protocolParser.decrement_command`.
	 * @param ctx the parse tree
	 */
	exitDecrement_command?: (ctx: Decrement_commandContext) => void;

	/**
	 * Enter a parse tree produced by `memcached_protocolParser.statistics_command`.
	 * @param ctx the parse tree
	 */
	enterStatistics_command?: (ctx: Statistics_commandContext) => void;
	/**
	 * Exit a parse tree produced by `memcached_protocolParser.statistics_command`.
	 * @param ctx the parse tree
	 */
	exitStatistics_command?: (ctx: Statistics_commandContext) => void;

	/**
	 * Enter a parse tree produced by `memcached_protocolParser.statistics_option`.
	 * @param ctx the parse tree
	 */
	enterStatistics_option?: (ctx: Statistics_optionContext) => void;
	/**
	 * Exit a parse tree produced by `memcached_protocolParser.statistics_option`.
	 * @param ctx the parse tree
	 */
	exitStatistics_option?: (ctx: Statistics_optionContext) => void;

	/**
	 * Enter a parse tree produced by `memcached_protocolParser.flush_command`.
	 * @param ctx the parse tree
	 */
	enterFlush_command?: (ctx: Flush_commandContext) => void;
	/**
	 * Exit a parse tree produced by `memcached_protocolParser.flush_command`.
	 * @param ctx the parse tree
	 */
	exitFlush_command?: (ctx: Flush_commandContext) => void;

	/**
	 * Enter a parse tree produced by `memcached_protocolParser.version_command`.
	 * @param ctx the parse tree
	 */
	enterVersion_command?: (ctx: Version_commandContext) => void;
	/**
	 * Exit a parse tree produced by `memcached_protocolParser.version_command`.
	 * @param ctx the parse tree
	 */
	exitVersion_command?: (ctx: Version_commandContext) => void;

	/**
	 * Enter a parse tree produced by `memcached_protocolParser.verbosity_command`.
	 * @param ctx the parse tree
	 */
	enterVerbosity_command?: (ctx: Verbosity_commandContext) => void;
	/**
	 * Exit a parse tree produced by `memcached_protocolParser.verbosity_command`.
	 * @param ctx the parse tree
	 */
	exitVerbosity_command?: (ctx: Verbosity_commandContext) => void;

	/**
	 * Enter a parse tree produced by `memcached_protocolParser.quit_command`.
	 * @param ctx the parse tree
	 */
	enterQuit_command?: (ctx: Quit_commandContext) => void;
	/**
	 * Exit a parse tree produced by `memcached_protocolParser.quit_command`.
	 * @param ctx the parse tree
	 */
	exitQuit_command?: (ctx: Quit_commandContext) => void;

	/**
	 * Enter a parse tree produced by `memcached_protocolParser.storage_response`.
	 * @param ctx the parse tree
	 */
	enterStorage_response?: (ctx: Storage_responseContext) => void;
	/**
	 * Exit a parse tree produced by `memcached_protocolParser.storage_response`.
	 * @param ctx the parse tree
	 */
	exitStorage_response?: (ctx: Storage_responseContext) => void;

	/**
	 * Enter a parse tree produced by `memcached_protocolParser.retrieval_response`.
	 * @param ctx the parse tree
	 */
	enterRetrieval_response?: (ctx: Retrieval_responseContext) => void;
	/**
	 * Exit a parse tree produced by `memcached_protocolParser.retrieval_response`.
	 * @param ctx the parse tree
	 */
	exitRetrieval_response?: (ctx: Retrieval_responseContext) => void;

	/**
	 * Enter a parse tree produced by `memcached_protocolParser.deletion_response`.
	 * @param ctx the parse tree
	 */
	enterDeletion_response?: (ctx: Deletion_responseContext) => void;
	/**
	 * Exit a parse tree produced by `memcached_protocolParser.deletion_response`.
	 * @param ctx the parse tree
	 */
	exitDeletion_response?: (ctx: Deletion_responseContext) => void;

	/**
	 * Enter a parse tree produced by `memcached_protocolParser.incr_or_decr_response`.
	 * @param ctx the parse tree
	 */
	enterIncr_or_decr_response?: (ctx: Incr_or_decr_responseContext) => void;
	/**
	 * Exit a parse tree produced by `memcached_protocolParser.incr_or_decr_response`.
	 * @param ctx the parse tree
	 */
	exitIncr_or_decr_response?: (ctx: Incr_or_decr_responseContext) => void;

	/**
	 * Enter a parse tree produced by `memcached_protocolParser.statistics_response`.
	 * @param ctx the parse tree
	 */
	enterStatistics_response?: (ctx: Statistics_responseContext) => void;
	/**
	 * Exit a parse tree produced by `memcached_protocolParser.statistics_response`.
	 * @param ctx the parse tree
	 */
	exitStatistics_response?: (ctx: Statistics_responseContext) => void;

	/**
	 * Enter a parse tree produced by `memcached_protocolParser.error_response`.
	 * @param ctx the parse tree
	 */
	enterError_response?: (ctx: Error_responseContext) => void;
	/**
	 * Exit a parse tree produced by `memcached_protocolParser.error_response`.
	 * @param ctx the parse tree
	 */
	exitError_response?: (ctx: Error_responseContext) => void;

	/**
	 * Enter a parse tree produced by `memcached_protocolParser.general_statistic`.
	 * @param ctx the parse tree
	 */
	enterGeneral_statistic?: (ctx: General_statisticContext) => void;
	/**
	 * Exit a parse tree produced by `memcached_protocolParser.general_statistic`.
	 * @param ctx the parse tree
	 */
	exitGeneral_statistic?: (ctx: General_statisticContext) => void;

	/**
	 * Enter a parse tree produced by `memcached_protocolParser.size_statistic`.
	 * @param ctx the parse tree
	 */
	enterSize_statistic?: (ctx: Size_statisticContext) => void;
	/**
	 * Exit a parse tree produced by `memcached_protocolParser.size_statistic`.
	 * @param ctx the parse tree
	 */
	exitSize_statistic?: (ctx: Size_statisticContext) => void;

	/**
	 * Enter a parse tree produced by `memcached_protocolParser.general_error`.
	 * @param ctx the parse tree
	 */
	enterGeneral_error?: (ctx: General_errorContext) => void;
	/**
	 * Exit a parse tree produced by `memcached_protocolParser.general_error`.
	 * @param ctx the parse tree
	 */
	exitGeneral_error?: (ctx: General_errorContext) => void;

	/**
	 * Enter a parse tree produced by `memcached_protocolParser.client_error_message`.
	 * @param ctx the parse tree
	 */
	enterClient_error_message?: (ctx: Client_error_messageContext) => void;
	/**
	 * Exit a parse tree produced by `memcached_protocolParser.client_error_message`.
	 * @param ctx the parse tree
	 */
	exitClient_error_message?: (ctx: Client_error_messageContext) => void;

	/**
	 * Enter a parse tree produced by `memcached_protocolParser.server_error_message`.
	 * @param ctx the parse tree
	 */
	enterServer_error_message?: (ctx: Server_error_messageContext) => void;
	/**
	 * Exit a parse tree produced by `memcached_protocolParser.server_error_message`.
	 * @param ctx the parse tree
	 */
	exitServer_error_message?: (ctx: Server_error_messageContext) => void;

	/**
	 * Enter a parse tree produced by `memcached_protocolParser.end`.
	 * @param ctx the parse tree
	 */
	enterEnd?: (ctx: EndContext) => void;
	/**
	 * Exit a parse tree produced by `memcached_protocolParser.end`.
	 * @param ctx the parse tree
	 */
	exitEnd?: (ctx: EndContext) => void;

	/**
	 * Enter a parse tree produced by `memcached_protocolParser.noreply`.
	 * @param ctx the parse tree
	 */
	enterNoreply?: (ctx: NoreplyContext) => void;
	/**
	 * Exit a parse tree produced by `memcached_protocolParser.noreply`.
	 * @param ctx the parse tree
	 */
	exitNoreply?: (ctx: NoreplyContext) => void;

	/**
	 * Enter a parse tree produced by `memcached_protocolParser.key`.
	 * @param ctx the parse tree
	 */
	enterKey?: (ctx: KeyContext) => void;
	/**
	 * Exit a parse tree produced by `memcached_protocolParser.key`.
	 * @param ctx the parse tree
	 */
	exitKey?: (ctx: KeyContext) => void;

	/**
	 * Enter a parse tree produced by `memcached_protocolParser.flags`.
	 * @param ctx the parse tree
	 */
	enterFlags?: (ctx: FlagsContext) => void;
	/**
	 * Exit a parse tree produced by `memcached_protocolParser.flags`.
	 * @param ctx the parse tree
	 */
	exitFlags?: (ctx: FlagsContext) => void;

	/**
	 * Enter a parse tree produced by `memcached_protocolParser.exptime`.
	 * @param ctx the parse tree
	 */
	enterExptime?: (ctx: ExptimeContext) => void;
	/**
	 * Exit a parse tree produced by `memcached_protocolParser.exptime`.
	 * @param ctx the parse tree
	 */
	exitExptime?: (ctx: ExptimeContext) => void;

	/**
	 * Enter a parse tree produced by `memcached_protocolParser.bytes`.
	 * @param ctx the parse tree
	 */
	enterBytes?: (ctx: BytesContext) => void;
	/**
	 * Exit a parse tree produced by `memcached_protocolParser.bytes`.
	 * @param ctx the parse tree
	 */
	exitBytes?: (ctx: BytesContext) => void;

	/**
	 * Enter a parse tree produced by `memcached_protocolParser.cas_unique`.
	 * @param ctx the parse tree
	 */
	enterCas_unique?: (ctx: Cas_uniqueContext) => void;
	/**
	 * Exit a parse tree produced by `memcached_protocolParser.cas_unique`.
	 * @param ctx the parse tree
	 */
	exitCas_unique?: (ctx: Cas_uniqueContext) => void;

	/**
	 * Enter a parse tree produced by `memcached_protocolParser.value`.
	 * @param ctx the parse tree
	 */
	enterValue?: (ctx: ValueContext) => void;
	/**
	 * Exit a parse tree produced by `memcached_protocolParser.value`.
	 * @param ctx the parse tree
	 */
	exitValue?: (ctx: ValueContext) => void;

	/**
	 * Enter a parse tree produced by `memcached_protocolParser.time`.
	 * @param ctx the parse tree
	 */
	enterTime?: (ctx: TimeContext) => void;
	/**
	 * Exit a parse tree produced by `memcached_protocolParser.time`.
	 * @param ctx the parse tree
	 */
	exitTime?: (ctx: TimeContext) => void;

	/**
	 * Enter a parse tree produced by `memcached_protocolParser.delay`.
	 * @param ctx the parse tree
	 */
	enterDelay?: (ctx: DelayContext) => void;
	/**
	 * Exit a parse tree produced by `memcached_protocolParser.delay`.
	 * @param ctx the parse tree
	 */
	exitDelay?: (ctx: DelayContext) => void;

	/**
	 * Enter a parse tree produced by `memcached_protocolParser.verbosity_level`.
	 * @param ctx the parse tree
	 */
	enterVerbosity_level?: (ctx: Verbosity_levelContext) => void;
	/**
	 * Exit a parse tree produced by `memcached_protocolParser.verbosity_level`.
	 * @param ctx the parse tree
	 */
	exitVerbosity_level?: (ctx: Verbosity_levelContext) => void;

	/**
	 * Enter a parse tree produced by `memcached_protocolParser.statistic_name`.
	 * @param ctx the parse tree
	 */
	enterStatistic_name?: (ctx: Statistic_nameContext) => void;
	/**
	 * Exit a parse tree produced by `memcached_protocolParser.statistic_name`.
	 * @param ctx the parse tree
	 */
	exitStatistic_name?: (ctx: Statistic_nameContext) => void;

	/**
	 * Enter a parse tree produced by `memcached_protocolParser.statistic_value`.
	 * @param ctx the parse tree
	 */
	enterStatistic_value?: (ctx: Statistic_valueContext) => void;
	/**
	 * Exit a parse tree produced by `memcached_protocolParser.statistic_value`.
	 * @param ctx the parse tree
	 */
	exitStatistic_value?: (ctx: Statistic_valueContext) => void;

	/**
	 * Enter a parse tree produced by `memcached_protocolParser.size`.
	 * @param ctx the parse tree
	 */
	enterSize?: (ctx: SizeContext) => void;
	/**
	 * Exit a parse tree produced by `memcached_protocolParser.size`.
	 * @param ctx the parse tree
	 */
	exitSize?: (ctx: SizeContext) => void;

	/**
	 * Enter a parse tree produced by `memcached_protocolParser.count`.
	 * @param ctx the parse tree
	 */
	enterCount?: (ctx: CountContext) => void;
	/**
	 * Exit a parse tree produced by `memcached_protocolParser.count`.
	 * @param ctx the parse tree
	 */
	exitCount?: (ctx: CountContext) => void;
}

