// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/tnsnames/tnsnamesParser.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { TnsnamesContext } from "./tnsnamesParser";
import { Tns_entryContext } from "./tnsnamesParser";
import { IfileContext } from "./tnsnamesParser";
import { Lsnr_entryContext } from "./tnsnamesParser";
import { Lsnr_descriptionContext } from "./tnsnamesParser";
import { Alias_listContext } from "./tnsnamesParser";
import { AliasContext } from "./tnsnamesParser";
import { Description_listContext } from "./tnsnamesParser";
import { Dl_paramsContext } from "./tnsnamesParser";
import { Dl_parameterContext } from "./tnsnamesParser";
import { DescriptionContext } from "./tnsnamesParser";
import { D_paramsContext } from "./tnsnamesParser";
import { D_parameterContext } from "./tnsnamesParser";
import { D_enableContext } from "./tnsnamesParser";
import { D_sduContext } from "./tnsnamesParser";
import { D_recv_bufContext } from "./tnsnamesParser";
import { D_send_bufContext } from "./tnsnamesParser";
import { D_service_typeContext } from "./tnsnamesParser";
import { D_securityContext } from "./tnsnamesParser";
import { D_conn_timeoutContext } from "./tnsnamesParser";
import { D_retry_countContext } from "./tnsnamesParser";
import { D_tctContext } from "./tnsnamesParser";
import { Ds_parameterContext } from "./tnsnamesParser";
import { Address_listContext } from "./tnsnamesParser";
import { Al_paramsContext } from "./tnsnamesParser";
import { Al_parameterContext } from "./tnsnamesParser";
import { Al_failoverContext } from "./tnsnamesParser";
import { Al_load_balanceContext } from "./tnsnamesParser";
import { Al_source_routeContext } from "./tnsnamesParser";
import { AddressContext } from "./tnsnamesParser";
import { A_paramsContext } from "./tnsnamesParser";
import { A_parameterContext } from "./tnsnamesParser";
import { Protocol_infoContext } from "./tnsnamesParser";
import { Tcp_protocolContext } from "./tnsnamesParser";
import { Tcp_paramsContext } from "./tnsnamesParser";
import { Tcp_parameterContext } from "./tnsnamesParser";
import { Tcp_hostContext } from "./tnsnamesParser";
import { Tcp_portContext } from "./tnsnamesParser";
import { Tcp_tcpContext } from "./tnsnamesParser";
import { HostContext } from "./tnsnamesParser";
import { PortContext } from "./tnsnamesParser";
import { Ipc_protocolContext } from "./tnsnamesParser";
import { Ipc_paramsContext } from "./tnsnamesParser";
import { Ipc_parameterContext } from "./tnsnamesParser";
import { Ipc_ipcContext } from "./tnsnamesParser";
import { Ipc_keyContext } from "./tnsnamesParser";
import { Spx_protocolContext } from "./tnsnamesParser";
import { Spx_paramsContext } from "./tnsnamesParser";
import { Spx_parameterContext } from "./tnsnamesParser";
import { Spx_spxContext } from "./tnsnamesParser";
import { Spx_serviceContext } from "./tnsnamesParser";
import { Nmp_protocolContext } from "./tnsnamesParser";
import { Nmp_paramsContext } from "./tnsnamesParser";
import { Nmp_parameterContext } from "./tnsnamesParser";
import { Nmp_nmpContext } from "./tnsnamesParser";
import { Nmp_serverContext } from "./tnsnamesParser";
import { Nmp_pipeContext } from "./tnsnamesParser";
import { Beq_protocolContext } from "./tnsnamesParser";
import { Beq_paramsContext } from "./tnsnamesParser";
import { Beq_parameterContext } from "./tnsnamesParser";
import { Beq_beqContext } from "./tnsnamesParser";
import { Beq_programContext } from "./tnsnamesParser";
import { Beq_argv0Context } from "./tnsnamesParser";
import { Beq_argsContext } from "./tnsnamesParser";
import { Ba_parameterContext } from "./tnsnamesParser";
import { Ba_descriptionContext } from "./tnsnamesParser";
import { Bad_paramsContext } from "./tnsnamesParser";
import { Bad_parameterContext } from "./tnsnamesParser";
import { Bad_localContext } from "./tnsnamesParser";
import { Bad_addressContext } from "./tnsnamesParser";
import { Connect_dataContext } from "./tnsnamesParser";
import { Cd_paramsContext } from "./tnsnamesParser";
import { Cd_parameterContext } from "./tnsnamesParser";
import { Cd_service_nameContext } from "./tnsnamesParser";
import { Cd_sidContext } from "./tnsnamesParser";
import { Cd_instance_nameContext } from "./tnsnamesParser";
import { Cd_failover_modeContext } from "./tnsnamesParser";
import { Cd_global_nameContext } from "./tnsnamesParser";
import { Cd_hsContext } from "./tnsnamesParser";
import { Cd_rdb_databaseContext } from "./tnsnamesParser";
import { Cd_serverContext } from "./tnsnamesParser";
import { Cd_urContext } from "./tnsnamesParser";
import { Fo_paramsContext } from "./tnsnamesParser";
import { Fo_parameterContext } from "./tnsnamesParser";
import { Fo_typeContext } from "./tnsnamesParser";
import { Fo_backupContext } from "./tnsnamesParser";
import { Fo_methodContext } from "./tnsnamesParser";
import { Fo_retriesContext } from "./tnsnamesParser";
import { Fo_delayContext } from "./tnsnamesParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `tnsnamesParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface tnsnamesParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `tnsnamesParser.tnsnames`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTnsnames?: (ctx: TnsnamesContext) => Result;

	/**
	 * Visit a parse tree produced by `tnsnamesParser.tns_entry`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTns_entry?: (ctx: Tns_entryContext) => Result;

	/**
	 * Visit a parse tree produced by `tnsnamesParser.ifile`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfile?: (ctx: IfileContext) => Result;

	/**
	 * Visit a parse tree produced by `tnsnamesParser.lsnr_entry`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLsnr_entry?: (ctx: Lsnr_entryContext) => Result;

	/**
	 * Visit a parse tree produced by `tnsnamesParser.lsnr_description`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLsnr_description?: (ctx: Lsnr_descriptionContext) => Result;

	/**
	 * Visit a parse tree produced by `tnsnamesParser.alias_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlias_list?: (ctx: Alias_listContext) => Result;

	/**
	 * Visit a parse tree produced by `tnsnamesParser.alias`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlias?: (ctx: AliasContext) => Result;

	/**
	 * Visit a parse tree produced by `tnsnamesParser.description_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDescription_list?: (ctx: Description_listContext) => Result;

	/**
	 * Visit a parse tree produced by `tnsnamesParser.dl_params`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDl_params?: (ctx: Dl_paramsContext) => Result;

	/**
	 * Visit a parse tree produced by `tnsnamesParser.dl_parameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDl_parameter?: (ctx: Dl_parameterContext) => Result;

	/**
	 * Visit a parse tree produced by `tnsnamesParser.description`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDescription?: (ctx: DescriptionContext) => Result;

	/**
	 * Visit a parse tree produced by `tnsnamesParser.d_params`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitD_params?: (ctx: D_paramsContext) => Result;

	/**
	 * Visit a parse tree produced by `tnsnamesParser.d_parameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitD_parameter?: (ctx: D_parameterContext) => Result;

	/**
	 * Visit a parse tree produced by `tnsnamesParser.d_enable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitD_enable?: (ctx: D_enableContext) => Result;

	/**
	 * Visit a parse tree produced by `tnsnamesParser.d_sdu`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitD_sdu?: (ctx: D_sduContext) => Result;

	/**
	 * Visit a parse tree produced by `tnsnamesParser.d_recv_buf`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitD_recv_buf?: (ctx: D_recv_bufContext) => Result;

	/**
	 * Visit a parse tree produced by `tnsnamesParser.d_send_buf`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitD_send_buf?: (ctx: D_send_bufContext) => Result;

	/**
	 * Visit a parse tree produced by `tnsnamesParser.d_service_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitD_service_type?: (ctx: D_service_typeContext) => Result;

	/**
	 * Visit a parse tree produced by `tnsnamesParser.d_security`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitD_security?: (ctx: D_securityContext) => Result;

	/**
	 * Visit a parse tree produced by `tnsnamesParser.d_conn_timeout`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitD_conn_timeout?: (ctx: D_conn_timeoutContext) => Result;

	/**
	 * Visit a parse tree produced by `tnsnamesParser.d_retry_count`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitD_retry_count?: (ctx: D_retry_countContext) => Result;

	/**
	 * Visit a parse tree produced by `tnsnamesParser.d_tct`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitD_tct?: (ctx: D_tctContext) => Result;

	/**
	 * Visit a parse tree produced by `tnsnamesParser.ds_parameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDs_parameter?: (ctx: Ds_parameterContext) => Result;

	/**
	 * Visit a parse tree produced by `tnsnamesParser.address_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddress_list?: (ctx: Address_listContext) => Result;

	/**
	 * Visit a parse tree produced by `tnsnamesParser.al_params`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAl_params?: (ctx: Al_paramsContext) => Result;

	/**
	 * Visit a parse tree produced by `tnsnamesParser.al_parameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAl_parameter?: (ctx: Al_parameterContext) => Result;

	/**
	 * Visit a parse tree produced by `tnsnamesParser.al_failover`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAl_failover?: (ctx: Al_failoverContext) => Result;

	/**
	 * Visit a parse tree produced by `tnsnamesParser.al_load_balance`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAl_load_balance?: (ctx: Al_load_balanceContext) => Result;

	/**
	 * Visit a parse tree produced by `tnsnamesParser.al_source_route`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAl_source_route?: (ctx: Al_source_routeContext) => Result;

	/**
	 * Visit a parse tree produced by `tnsnamesParser.address`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddress?: (ctx: AddressContext) => Result;

	/**
	 * Visit a parse tree produced by `tnsnamesParser.a_params`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitA_params?: (ctx: A_paramsContext) => Result;

	/**
	 * Visit a parse tree produced by `tnsnamesParser.a_parameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitA_parameter?: (ctx: A_parameterContext) => Result;

	/**
	 * Visit a parse tree produced by `tnsnamesParser.protocol_info`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProtocol_info?: (ctx: Protocol_infoContext) => Result;

	/**
	 * Visit a parse tree produced by `tnsnamesParser.tcp_protocol`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTcp_protocol?: (ctx: Tcp_protocolContext) => Result;

	/**
	 * Visit a parse tree produced by `tnsnamesParser.tcp_params`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTcp_params?: (ctx: Tcp_paramsContext) => Result;

	/**
	 * Visit a parse tree produced by `tnsnamesParser.tcp_parameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTcp_parameter?: (ctx: Tcp_parameterContext) => Result;

	/**
	 * Visit a parse tree produced by `tnsnamesParser.tcp_host`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTcp_host?: (ctx: Tcp_hostContext) => Result;

	/**
	 * Visit a parse tree produced by `tnsnamesParser.tcp_port`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTcp_port?: (ctx: Tcp_portContext) => Result;

	/**
	 * Visit a parse tree produced by `tnsnamesParser.tcp_tcp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTcp_tcp?: (ctx: Tcp_tcpContext) => Result;

	/**
	 * Visit a parse tree produced by `tnsnamesParser.host`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHost?: (ctx: HostContext) => Result;

	/**
	 * Visit a parse tree produced by `tnsnamesParser.port`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPort?: (ctx: PortContext) => Result;

	/**
	 * Visit a parse tree produced by `tnsnamesParser.ipc_protocol`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIpc_protocol?: (ctx: Ipc_protocolContext) => Result;

	/**
	 * Visit a parse tree produced by `tnsnamesParser.ipc_params`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIpc_params?: (ctx: Ipc_paramsContext) => Result;

	/**
	 * Visit a parse tree produced by `tnsnamesParser.ipc_parameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIpc_parameter?: (ctx: Ipc_parameterContext) => Result;

	/**
	 * Visit a parse tree produced by `tnsnamesParser.ipc_ipc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIpc_ipc?: (ctx: Ipc_ipcContext) => Result;

	/**
	 * Visit a parse tree produced by `tnsnamesParser.ipc_key`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIpc_key?: (ctx: Ipc_keyContext) => Result;

	/**
	 * Visit a parse tree produced by `tnsnamesParser.spx_protocol`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSpx_protocol?: (ctx: Spx_protocolContext) => Result;

	/**
	 * Visit a parse tree produced by `tnsnamesParser.spx_params`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSpx_params?: (ctx: Spx_paramsContext) => Result;

	/**
	 * Visit a parse tree produced by `tnsnamesParser.spx_parameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSpx_parameter?: (ctx: Spx_parameterContext) => Result;

	/**
	 * Visit a parse tree produced by `tnsnamesParser.spx_spx`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSpx_spx?: (ctx: Spx_spxContext) => Result;

	/**
	 * Visit a parse tree produced by `tnsnamesParser.spx_service`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSpx_service?: (ctx: Spx_serviceContext) => Result;

	/**
	 * Visit a parse tree produced by `tnsnamesParser.nmp_protocol`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNmp_protocol?: (ctx: Nmp_protocolContext) => Result;

	/**
	 * Visit a parse tree produced by `tnsnamesParser.nmp_params`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNmp_params?: (ctx: Nmp_paramsContext) => Result;

	/**
	 * Visit a parse tree produced by `tnsnamesParser.nmp_parameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNmp_parameter?: (ctx: Nmp_parameterContext) => Result;

	/**
	 * Visit a parse tree produced by `tnsnamesParser.nmp_nmp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNmp_nmp?: (ctx: Nmp_nmpContext) => Result;

	/**
	 * Visit a parse tree produced by `tnsnamesParser.nmp_server`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNmp_server?: (ctx: Nmp_serverContext) => Result;

	/**
	 * Visit a parse tree produced by `tnsnamesParser.nmp_pipe`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNmp_pipe?: (ctx: Nmp_pipeContext) => Result;

	/**
	 * Visit a parse tree produced by `tnsnamesParser.beq_protocol`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBeq_protocol?: (ctx: Beq_protocolContext) => Result;

	/**
	 * Visit a parse tree produced by `tnsnamesParser.beq_params`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBeq_params?: (ctx: Beq_paramsContext) => Result;

	/**
	 * Visit a parse tree produced by `tnsnamesParser.beq_parameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBeq_parameter?: (ctx: Beq_parameterContext) => Result;

	/**
	 * Visit a parse tree produced by `tnsnamesParser.beq_beq`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBeq_beq?: (ctx: Beq_beqContext) => Result;

	/**
	 * Visit a parse tree produced by `tnsnamesParser.beq_program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBeq_program?: (ctx: Beq_programContext) => Result;

	/**
	 * Visit a parse tree produced by `tnsnamesParser.beq_argv0`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBeq_argv0?: (ctx: Beq_argv0Context) => Result;

	/**
	 * Visit a parse tree produced by `tnsnamesParser.beq_args`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBeq_args?: (ctx: Beq_argsContext) => Result;

	/**
	 * Visit a parse tree produced by `tnsnamesParser.ba_parameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBa_parameter?: (ctx: Ba_parameterContext) => Result;

	/**
	 * Visit a parse tree produced by `tnsnamesParser.ba_description`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBa_description?: (ctx: Ba_descriptionContext) => Result;

	/**
	 * Visit a parse tree produced by `tnsnamesParser.bad_params`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBad_params?: (ctx: Bad_paramsContext) => Result;

	/**
	 * Visit a parse tree produced by `tnsnamesParser.bad_parameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBad_parameter?: (ctx: Bad_parameterContext) => Result;

	/**
	 * Visit a parse tree produced by `tnsnamesParser.bad_local`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBad_local?: (ctx: Bad_localContext) => Result;

	/**
	 * Visit a parse tree produced by `tnsnamesParser.bad_address`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBad_address?: (ctx: Bad_addressContext) => Result;

	/**
	 * Visit a parse tree produced by `tnsnamesParser.connect_data`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConnect_data?: (ctx: Connect_dataContext) => Result;

	/**
	 * Visit a parse tree produced by `tnsnamesParser.cd_params`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCd_params?: (ctx: Cd_paramsContext) => Result;

	/**
	 * Visit a parse tree produced by `tnsnamesParser.cd_parameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCd_parameter?: (ctx: Cd_parameterContext) => Result;

	/**
	 * Visit a parse tree produced by `tnsnamesParser.cd_service_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCd_service_name?: (ctx: Cd_service_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `tnsnamesParser.cd_sid`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCd_sid?: (ctx: Cd_sidContext) => Result;

	/**
	 * Visit a parse tree produced by `tnsnamesParser.cd_instance_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCd_instance_name?: (ctx: Cd_instance_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `tnsnamesParser.cd_failover_mode`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCd_failover_mode?: (ctx: Cd_failover_modeContext) => Result;

	/**
	 * Visit a parse tree produced by `tnsnamesParser.cd_global_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCd_global_name?: (ctx: Cd_global_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `tnsnamesParser.cd_hs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCd_hs?: (ctx: Cd_hsContext) => Result;

	/**
	 * Visit a parse tree produced by `tnsnamesParser.cd_rdb_database`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCd_rdb_database?: (ctx: Cd_rdb_databaseContext) => Result;

	/**
	 * Visit a parse tree produced by `tnsnamesParser.cd_server`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCd_server?: (ctx: Cd_serverContext) => Result;

	/**
	 * Visit a parse tree produced by `tnsnamesParser.cd_ur`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCd_ur?: (ctx: Cd_urContext) => Result;

	/**
	 * Visit a parse tree produced by `tnsnamesParser.fo_params`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFo_params?: (ctx: Fo_paramsContext) => Result;

	/**
	 * Visit a parse tree produced by `tnsnamesParser.fo_parameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFo_parameter?: (ctx: Fo_parameterContext) => Result;

	/**
	 * Visit a parse tree produced by `tnsnamesParser.fo_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFo_type?: (ctx: Fo_typeContext) => Result;

	/**
	 * Visit a parse tree produced by `tnsnamesParser.fo_backup`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFo_backup?: (ctx: Fo_backupContext) => Result;

	/**
	 * Visit a parse tree produced by `tnsnamesParser.fo_method`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFo_method?: (ctx: Fo_methodContext) => Result;

	/**
	 * Visit a parse tree produced by `tnsnamesParser.fo_retries`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFo_retries?: (ctx: Fo_retriesContext) => Result;

	/**
	 * Visit a parse tree produced by `tnsnamesParser.fo_delay`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFo_delay?: (ctx: Fo_delayContext) => Result;
}

