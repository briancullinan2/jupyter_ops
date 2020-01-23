// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/memcached_protocol/memcached_protocol.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `memcached_protocolParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface memcached_protocolVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `memcached_protocolParser.command_line`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommand_line?: (ctx: Command_lineContext) => Result;

	/**
	 * Visit a parse tree produced by `memcached_protocolParser.storage_command`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStorage_command?: (ctx: Storage_commandContext) => Result;

	/**
	 * Visit a parse tree produced by `memcached_protocolParser.storage_command_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStorage_command_name?: (ctx: Storage_command_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `memcached_protocolParser.retrieval_command`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRetrieval_command?: (ctx: Retrieval_commandContext) => Result;

	/**
	 * Visit a parse tree produced by `memcached_protocolParser.delete_command`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDelete_command?: (ctx: Delete_commandContext) => Result;

	/**
	 * Visit a parse tree produced by `memcached_protocolParser.increment_command`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIncrement_command?: (ctx: Increment_commandContext) => Result;

	/**
	 * Visit a parse tree produced by `memcached_protocolParser.decrement_command`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDecrement_command?: (ctx: Decrement_commandContext) => Result;

	/**
	 * Visit a parse tree produced by `memcached_protocolParser.statistics_command`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatistics_command?: (ctx: Statistics_commandContext) => Result;

	/**
	 * Visit a parse tree produced by `memcached_protocolParser.statistics_option`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatistics_option?: (ctx: Statistics_optionContext) => Result;

	/**
	 * Visit a parse tree produced by `memcached_protocolParser.flush_command`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFlush_command?: (ctx: Flush_commandContext) => Result;

	/**
	 * Visit a parse tree produced by `memcached_protocolParser.version_command`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVersion_command?: (ctx: Version_commandContext) => Result;

	/**
	 * Visit a parse tree produced by `memcached_protocolParser.verbosity_command`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVerbosity_command?: (ctx: Verbosity_commandContext) => Result;

	/**
	 * Visit a parse tree produced by `memcached_protocolParser.quit_command`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuit_command?: (ctx: Quit_commandContext) => Result;

	/**
	 * Visit a parse tree produced by `memcached_protocolParser.storage_response`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStorage_response?: (ctx: Storage_responseContext) => Result;

	/**
	 * Visit a parse tree produced by `memcached_protocolParser.retrieval_response`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRetrieval_response?: (ctx: Retrieval_responseContext) => Result;

	/**
	 * Visit a parse tree produced by `memcached_protocolParser.deletion_response`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeletion_response?: (ctx: Deletion_responseContext) => Result;

	/**
	 * Visit a parse tree produced by `memcached_protocolParser.incr_or_decr_response`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIncr_or_decr_response?: (ctx: Incr_or_decr_responseContext) => Result;

	/**
	 * Visit a parse tree produced by `memcached_protocolParser.statistics_response`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatistics_response?: (ctx: Statistics_responseContext) => Result;

	/**
	 * Visit a parse tree produced by `memcached_protocolParser.error_response`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitError_response?: (ctx: Error_responseContext) => Result;

	/**
	 * Visit a parse tree produced by `memcached_protocolParser.general_statistic`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGeneral_statistic?: (ctx: General_statisticContext) => Result;

	/**
	 * Visit a parse tree produced by `memcached_protocolParser.size_statistic`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSize_statistic?: (ctx: Size_statisticContext) => Result;

	/**
	 * Visit a parse tree produced by `memcached_protocolParser.general_error`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGeneral_error?: (ctx: General_errorContext) => Result;

	/**
	 * Visit a parse tree produced by `memcached_protocolParser.client_error_message`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClient_error_message?: (ctx: Client_error_messageContext) => Result;

	/**
	 * Visit a parse tree produced by `memcached_protocolParser.server_error_message`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitServer_error_message?: (ctx: Server_error_messageContext) => Result;

	/**
	 * Visit a parse tree produced by `memcached_protocolParser.end`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnd?: (ctx: EndContext) => Result;

	/**
	 * Visit a parse tree produced by `memcached_protocolParser.noreply`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNoreply?: (ctx: NoreplyContext) => Result;

	/**
	 * Visit a parse tree produced by `memcached_protocolParser.key`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKey?: (ctx: KeyContext) => Result;

	/**
	 * Visit a parse tree produced by `memcached_protocolParser.flags`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFlags?: (ctx: FlagsContext) => Result;

	/**
	 * Visit a parse tree produced by `memcached_protocolParser.exptime`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExptime?: (ctx: ExptimeContext) => Result;

	/**
	 * Visit a parse tree produced by `memcached_protocolParser.bytes`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBytes?: (ctx: BytesContext) => Result;

	/**
	 * Visit a parse tree produced by `memcached_protocolParser.cas_unique`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCas_unique?: (ctx: Cas_uniqueContext) => Result;

	/**
	 * Visit a parse tree produced by `memcached_protocolParser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValue?: (ctx: ValueContext) => Result;

	/**
	 * Visit a parse tree produced by `memcached_protocolParser.time`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTime?: (ctx: TimeContext) => Result;

	/**
	 * Visit a parse tree produced by `memcached_protocolParser.delay`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDelay?: (ctx: DelayContext) => Result;

	/**
	 * Visit a parse tree produced by `memcached_protocolParser.verbosity_level`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVerbosity_level?: (ctx: Verbosity_levelContext) => Result;

	/**
	 * Visit a parse tree produced by `memcached_protocolParser.statistic_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatistic_name?: (ctx: Statistic_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `memcached_protocolParser.statistic_value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatistic_value?: (ctx: Statistic_valueContext) => Result;

	/**
	 * Visit a parse tree produced by `memcached_protocolParser.size`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSize?: (ctx: SizeContext) => Result;

	/**
	 * Visit a parse tree produced by `memcached_protocolParser.count`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCount?: (ctx: CountContext) => Result;
}

