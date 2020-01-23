// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/tnsnames/tnsnamesParser.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `tnsnamesParser`.
 */
export interface tnsnamesParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `tnsnamesParser.tnsnames`.
	 * @param ctx the parse tree
	 */
	enterTnsnames?: (ctx: TnsnamesContext) => void;
	/**
	 * Exit a parse tree produced by `tnsnamesParser.tnsnames`.
	 * @param ctx the parse tree
	 */
	exitTnsnames?: (ctx: TnsnamesContext) => void;

	/**
	 * Enter a parse tree produced by `tnsnamesParser.tns_entry`.
	 * @param ctx the parse tree
	 */
	enterTns_entry?: (ctx: Tns_entryContext) => void;
	/**
	 * Exit a parse tree produced by `tnsnamesParser.tns_entry`.
	 * @param ctx the parse tree
	 */
	exitTns_entry?: (ctx: Tns_entryContext) => void;

	/**
	 * Enter a parse tree produced by `tnsnamesParser.ifile`.
	 * @param ctx the parse tree
	 */
	enterIfile?: (ctx: IfileContext) => void;
	/**
	 * Exit a parse tree produced by `tnsnamesParser.ifile`.
	 * @param ctx the parse tree
	 */
	exitIfile?: (ctx: IfileContext) => void;

	/**
	 * Enter a parse tree produced by `tnsnamesParser.lsnr_entry`.
	 * @param ctx the parse tree
	 */
	enterLsnr_entry?: (ctx: Lsnr_entryContext) => void;
	/**
	 * Exit a parse tree produced by `tnsnamesParser.lsnr_entry`.
	 * @param ctx the parse tree
	 */
	exitLsnr_entry?: (ctx: Lsnr_entryContext) => void;

	/**
	 * Enter a parse tree produced by `tnsnamesParser.lsnr_description`.
	 * @param ctx the parse tree
	 */
	enterLsnr_description?: (ctx: Lsnr_descriptionContext) => void;
	/**
	 * Exit a parse tree produced by `tnsnamesParser.lsnr_description`.
	 * @param ctx the parse tree
	 */
	exitLsnr_description?: (ctx: Lsnr_descriptionContext) => void;

	/**
	 * Enter a parse tree produced by `tnsnamesParser.alias_list`.
	 * @param ctx the parse tree
	 */
	enterAlias_list?: (ctx: Alias_listContext) => void;
	/**
	 * Exit a parse tree produced by `tnsnamesParser.alias_list`.
	 * @param ctx the parse tree
	 */
	exitAlias_list?: (ctx: Alias_listContext) => void;

	/**
	 * Enter a parse tree produced by `tnsnamesParser.alias`.
	 * @param ctx the parse tree
	 */
	enterAlias?: (ctx: AliasContext) => void;
	/**
	 * Exit a parse tree produced by `tnsnamesParser.alias`.
	 * @param ctx the parse tree
	 */
	exitAlias?: (ctx: AliasContext) => void;

	/**
	 * Enter a parse tree produced by `tnsnamesParser.description_list`.
	 * @param ctx the parse tree
	 */
	enterDescription_list?: (ctx: Description_listContext) => void;
	/**
	 * Exit a parse tree produced by `tnsnamesParser.description_list`.
	 * @param ctx the parse tree
	 */
	exitDescription_list?: (ctx: Description_listContext) => void;

	/**
	 * Enter a parse tree produced by `tnsnamesParser.dl_params`.
	 * @param ctx the parse tree
	 */
	enterDl_params?: (ctx: Dl_paramsContext) => void;
	/**
	 * Exit a parse tree produced by `tnsnamesParser.dl_params`.
	 * @param ctx the parse tree
	 */
	exitDl_params?: (ctx: Dl_paramsContext) => void;

	/**
	 * Enter a parse tree produced by `tnsnamesParser.dl_parameter`.
	 * @param ctx the parse tree
	 */
	enterDl_parameter?: (ctx: Dl_parameterContext) => void;
	/**
	 * Exit a parse tree produced by `tnsnamesParser.dl_parameter`.
	 * @param ctx the parse tree
	 */
	exitDl_parameter?: (ctx: Dl_parameterContext) => void;

	/**
	 * Enter a parse tree produced by `tnsnamesParser.description`.
	 * @param ctx the parse tree
	 */
	enterDescription?: (ctx: DescriptionContext) => void;
	/**
	 * Exit a parse tree produced by `tnsnamesParser.description`.
	 * @param ctx the parse tree
	 */
	exitDescription?: (ctx: DescriptionContext) => void;

	/**
	 * Enter a parse tree produced by `tnsnamesParser.d_params`.
	 * @param ctx the parse tree
	 */
	enterD_params?: (ctx: D_paramsContext) => void;
	/**
	 * Exit a parse tree produced by `tnsnamesParser.d_params`.
	 * @param ctx the parse tree
	 */
	exitD_params?: (ctx: D_paramsContext) => void;

	/**
	 * Enter a parse tree produced by `tnsnamesParser.d_parameter`.
	 * @param ctx the parse tree
	 */
	enterD_parameter?: (ctx: D_parameterContext) => void;
	/**
	 * Exit a parse tree produced by `tnsnamesParser.d_parameter`.
	 * @param ctx the parse tree
	 */
	exitD_parameter?: (ctx: D_parameterContext) => void;

	/**
	 * Enter a parse tree produced by `tnsnamesParser.d_enable`.
	 * @param ctx the parse tree
	 */
	enterD_enable?: (ctx: D_enableContext) => void;
	/**
	 * Exit a parse tree produced by `tnsnamesParser.d_enable`.
	 * @param ctx the parse tree
	 */
	exitD_enable?: (ctx: D_enableContext) => void;

	/**
	 * Enter a parse tree produced by `tnsnamesParser.d_sdu`.
	 * @param ctx the parse tree
	 */
	enterD_sdu?: (ctx: D_sduContext) => void;
	/**
	 * Exit a parse tree produced by `tnsnamesParser.d_sdu`.
	 * @param ctx the parse tree
	 */
	exitD_sdu?: (ctx: D_sduContext) => void;

	/**
	 * Enter a parse tree produced by `tnsnamesParser.d_recv_buf`.
	 * @param ctx the parse tree
	 */
	enterD_recv_buf?: (ctx: D_recv_bufContext) => void;
	/**
	 * Exit a parse tree produced by `tnsnamesParser.d_recv_buf`.
	 * @param ctx the parse tree
	 */
	exitD_recv_buf?: (ctx: D_recv_bufContext) => void;

	/**
	 * Enter a parse tree produced by `tnsnamesParser.d_send_buf`.
	 * @param ctx the parse tree
	 */
	enterD_send_buf?: (ctx: D_send_bufContext) => void;
	/**
	 * Exit a parse tree produced by `tnsnamesParser.d_send_buf`.
	 * @param ctx the parse tree
	 */
	exitD_send_buf?: (ctx: D_send_bufContext) => void;

	/**
	 * Enter a parse tree produced by `tnsnamesParser.d_service_type`.
	 * @param ctx the parse tree
	 */
	enterD_service_type?: (ctx: D_service_typeContext) => void;
	/**
	 * Exit a parse tree produced by `tnsnamesParser.d_service_type`.
	 * @param ctx the parse tree
	 */
	exitD_service_type?: (ctx: D_service_typeContext) => void;

	/**
	 * Enter a parse tree produced by `tnsnamesParser.d_security`.
	 * @param ctx the parse tree
	 */
	enterD_security?: (ctx: D_securityContext) => void;
	/**
	 * Exit a parse tree produced by `tnsnamesParser.d_security`.
	 * @param ctx the parse tree
	 */
	exitD_security?: (ctx: D_securityContext) => void;

	/**
	 * Enter a parse tree produced by `tnsnamesParser.d_conn_timeout`.
	 * @param ctx the parse tree
	 */
	enterD_conn_timeout?: (ctx: D_conn_timeoutContext) => void;
	/**
	 * Exit a parse tree produced by `tnsnamesParser.d_conn_timeout`.
	 * @param ctx the parse tree
	 */
	exitD_conn_timeout?: (ctx: D_conn_timeoutContext) => void;

	/**
	 * Enter a parse tree produced by `tnsnamesParser.d_retry_count`.
	 * @param ctx the parse tree
	 */
	enterD_retry_count?: (ctx: D_retry_countContext) => void;
	/**
	 * Exit a parse tree produced by `tnsnamesParser.d_retry_count`.
	 * @param ctx the parse tree
	 */
	exitD_retry_count?: (ctx: D_retry_countContext) => void;

	/**
	 * Enter a parse tree produced by `tnsnamesParser.d_tct`.
	 * @param ctx the parse tree
	 */
	enterD_tct?: (ctx: D_tctContext) => void;
	/**
	 * Exit a parse tree produced by `tnsnamesParser.d_tct`.
	 * @param ctx the parse tree
	 */
	exitD_tct?: (ctx: D_tctContext) => void;

	/**
	 * Enter a parse tree produced by `tnsnamesParser.ds_parameter`.
	 * @param ctx the parse tree
	 */
	enterDs_parameter?: (ctx: Ds_parameterContext) => void;
	/**
	 * Exit a parse tree produced by `tnsnamesParser.ds_parameter`.
	 * @param ctx the parse tree
	 */
	exitDs_parameter?: (ctx: Ds_parameterContext) => void;

	/**
	 * Enter a parse tree produced by `tnsnamesParser.address_list`.
	 * @param ctx the parse tree
	 */
	enterAddress_list?: (ctx: Address_listContext) => void;
	/**
	 * Exit a parse tree produced by `tnsnamesParser.address_list`.
	 * @param ctx the parse tree
	 */
	exitAddress_list?: (ctx: Address_listContext) => void;

	/**
	 * Enter a parse tree produced by `tnsnamesParser.al_params`.
	 * @param ctx the parse tree
	 */
	enterAl_params?: (ctx: Al_paramsContext) => void;
	/**
	 * Exit a parse tree produced by `tnsnamesParser.al_params`.
	 * @param ctx the parse tree
	 */
	exitAl_params?: (ctx: Al_paramsContext) => void;

	/**
	 * Enter a parse tree produced by `tnsnamesParser.al_parameter`.
	 * @param ctx the parse tree
	 */
	enterAl_parameter?: (ctx: Al_parameterContext) => void;
	/**
	 * Exit a parse tree produced by `tnsnamesParser.al_parameter`.
	 * @param ctx the parse tree
	 */
	exitAl_parameter?: (ctx: Al_parameterContext) => void;

	/**
	 * Enter a parse tree produced by `tnsnamesParser.al_failover`.
	 * @param ctx the parse tree
	 */
	enterAl_failover?: (ctx: Al_failoverContext) => void;
	/**
	 * Exit a parse tree produced by `tnsnamesParser.al_failover`.
	 * @param ctx the parse tree
	 */
	exitAl_failover?: (ctx: Al_failoverContext) => void;

	/**
	 * Enter a parse tree produced by `tnsnamesParser.al_load_balance`.
	 * @param ctx the parse tree
	 */
	enterAl_load_balance?: (ctx: Al_load_balanceContext) => void;
	/**
	 * Exit a parse tree produced by `tnsnamesParser.al_load_balance`.
	 * @param ctx the parse tree
	 */
	exitAl_load_balance?: (ctx: Al_load_balanceContext) => void;

	/**
	 * Enter a parse tree produced by `tnsnamesParser.al_source_route`.
	 * @param ctx the parse tree
	 */
	enterAl_source_route?: (ctx: Al_source_routeContext) => void;
	/**
	 * Exit a parse tree produced by `tnsnamesParser.al_source_route`.
	 * @param ctx the parse tree
	 */
	exitAl_source_route?: (ctx: Al_source_routeContext) => void;

	/**
	 * Enter a parse tree produced by `tnsnamesParser.address`.
	 * @param ctx the parse tree
	 */
	enterAddress?: (ctx: AddressContext) => void;
	/**
	 * Exit a parse tree produced by `tnsnamesParser.address`.
	 * @param ctx the parse tree
	 */
	exitAddress?: (ctx: AddressContext) => void;

	/**
	 * Enter a parse tree produced by `tnsnamesParser.a_params`.
	 * @param ctx the parse tree
	 */
	enterA_params?: (ctx: A_paramsContext) => void;
	/**
	 * Exit a parse tree produced by `tnsnamesParser.a_params`.
	 * @param ctx the parse tree
	 */
	exitA_params?: (ctx: A_paramsContext) => void;

	/**
	 * Enter a parse tree produced by `tnsnamesParser.a_parameter`.
	 * @param ctx the parse tree
	 */
	enterA_parameter?: (ctx: A_parameterContext) => void;
	/**
	 * Exit a parse tree produced by `tnsnamesParser.a_parameter`.
	 * @param ctx the parse tree
	 */
	exitA_parameter?: (ctx: A_parameterContext) => void;

	/**
	 * Enter a parse tree produced by `tnsnamesParser.protocol_info`.
	 * @param ctx the parse tree
	 */
	enterProtocol_info?: (ctx: Protocol_infoContext) => void;
	/**
	 * Exit a parse tree produced by `tnsnamesParser.protocol_info`.
	 * @param ctx the parse tree
	 */
	exitProtocol_info?: (ctx: Protocol_infoContext) => void;

	/**
	 * Enter a parse tree produced by `tnsnamesParser.tcp_protocol`.
	 * @param ctx the parse tree
	 */
	enterTcp_protocol?: (ctx: Tcp_protocolContext) => void;
	/**
	 * Exit a parse tree produced by `tnsnamesParser.tcp_protocol`.
	 * @param ctx the parse tree
	 */
	exitTcp_protocol?: (ctx: Tcp_protocolContext) => void;

	/**
	 * Enter a parse tree produced by `tnsnamesParser.tcp_params`.
	 * @param ctx the parse tree
	 */
	enterTcp_params?: (ctx: Tcp_paramsContext) => void;
	/**
	 * Exit a parse tree produced by `tnsnamesParser.tcp_params`.
	 * @param ctx the parse tree
	 */
	exitTcp_params?: (ctx: Tcp_paramsContext) => void;

	/**
	 * Enter a parse tree produced by `tnsnamesParser.tcp_parameter`.
	 * @param ctx the parse tree
	 */
	enterTcp_parameter?: (ctx: Tcp_parameterContext) => void;
	/**
	 * Exit a parse tree produced by `tnsnamesParser.tcp_parameter`.
	 * @param ctx the parse tree
	 */
	exitTcp_parameter?: (ctx: Tcp_parameterContext) => void;

	/**
	 * Enter a parse tree produced by `tnsnamesParser.tcp_host`.
	 * @param ctx the parse tree
	 */
	enterTcp_host?: (ctx: Tcp_hostContext) => void;
	/**
	 * Exit a parse tree produced by `tnsnamesParser.tcp_host`.
	 * @param ctx the parse tree
	 */
	exitTcp_host?: (ctx: Tcp_hostContext) => void;

	/**
	 * Enter a parse tree produced by `tnsnamesParser.tcp_port`.
	 * @param ctx the parse tree
	 */
	enterTcp_port?: (ctx: Tcp_portContext) => void;
	/**
	 * Exit a parse tree produced by `tnsnamesParser.tcp_port`.
	 * @param ctx the parse tree
	 */
	exitTcp_port?: (ctx: Tcp_portContext) => void;

	/**
	 * Enter a parse tree produced by `tnsnamesParser.tcp_tcp`.
	 * @param ctx the parse tree
	 */
	enterTcp_tcp?: (ctx: Tcp_tcpContext) => void;
	/**
	 * Exit a parse tree produced by `tnsnamesParser.tcp_tcp`.
	 * @param ctx the parse tree
	 */
	exitTcp_tcp?: (ctx: Tcp_tcpContext) => void;

	/**
	 * Enter a parse tree produced by `tnsnamesParser.host`.
	 * @param ctx the parse tree
	 */
	enterHost?: (ctx: HostContext) => void;
	/**
	 * Exit a parse tree produced by `tnsnamesParser.host`.
	 * @param ctx the parse tree
	 */
	exitHost?: (ctx: HostContext) => void;

	/**
	 * Enter a parse tree produced by `tnsnamesParser.port`.
	 * @param ctx the parse tree
	 */
	enterPort?: (ctx: PortContext) => void;
	/**
	 * Exit a parse tree produced by `tnsnamesParser.port`.
	 * @param ctx the parse tree
	 */
	exitPort?: (ctx: PortContext) => void;

	/**
	 * Enter a parse tree produced by `tnsnamesParser.ipc_protocol`.
	 * @param ctx the parse tree
	 */
	enterIpc_protocol?: (ctx: Ipc_protocolContext) => void;
	/**
	 * Exit a parse tree produced by `tnsnamesParser.ipc_protocol`.
	 * @param ctx the parse tree
	 */
	exitIpc_protocol?: (ctx: Ipc_protocolContext) => void;

	/**
	 * Enter a parse tree produced by `tnsnamesParser.ipc_params`.
	 * @param ctx the parse tree
	 */
	enterIpc_params?: (ctx: Ipc_paramsContext) => void;
	/**
	 * Exit a parse tree produced by `tnsnamesParser.ipc_params`.
	 * @param ctx the parse tree
	 */
	exitIpc_params?: (ctx: Ipc_paramsContext) => void;

	/**
	 * Enter a parse tree produced by `tnsnamesParser.ipc_parameter`.
	 * @param ctx the parse tree
	 */
	enterIpc_parameter?: (ctx: Ipc_parameterContext) => void;
	/**
	 * Exit a parse tree produced by `tnsnamesParser.ipc_parameter`.
	 * @param ctx the parse tree
	 */
	exitIpc_parameter?: (ctx: Ipc_parameterContext) => void;

	/**
	 * Enter a parse tree produced by `tnsnamesParser.ipc_ipc`.
	 * @param ctx the parse tree
	 */
	enterIpc_ipc?: (ctx: Ipc_ipcContext) => void;
	/**
	 * Exit a parse tree produced by `tnsnamesParser.ipc_ipc`.
	 * @param ctx the parse tree
	 */
	exitIpc_ipc?: (ctx: Ipc_ipcContext) => void;

	/**
	 * Enter a parse tree produced by `tnsnamesParser.ipc_key`.
	 * @param ctx the parse tree
	 */
	enterIpc_key?: (ctx: Ipc_keyContext) => void;
	/**
	 * Exit a parse tree produced by `tnsnamesParser.ipc_key`.
	 * @param ctx the parse tree
	 */
	exitIpc_key?: (ctx: Ipc_keyContext) => void;

	/**
	 * Enter a parse tree produced by `tnsnamesParser.spx_protocol`.
	 * @param ctx the parse tree
	 */
	enterSpx_protocol?: (ctx: Spx_protocolContext) => void;
	/**
	 * Exit a parse tree produced by `tnsnamesParser.spx_protocol`.
	 * @param ctx the parse tree
	 */
	exitSpx_protocol?: (ctx: Spx_protocolContext) => void;

	/**
	 * Enter a parse tree produced by `tnsnamesParser.spx_params`.
	 * @param ctx the parse tree
	 */
	enterSpx_params?: (ctx: Spx_paramsContext) => void;
	/**
	 * Exit a parse tree produced by `tnsnamesParser.spx_params`.
	 * @param ctx the parse tree
	 */
	exitSpx_params?: (ctx: Spx_paramsContext) => void;

	/**
	 * Enter a parse tree produced by `tnsnamesParser.spx_parameter`.
	 * @param ctx the parse tree
	 */
	enterSpx_parameter?: (ctx: Spx_parameterContext) => void;
	/**
	 * Exit a parse tree produced by `tnsnamesParser.spx_parameter`.
	 * @param ctx the parse tree
	 */
	exitSpx_parameter?: (ctx: Spx_parameterContext) => void;

	/**
	 * Enter a parse tree produced by `tnsnamesParser.spx_spx`.
	 * @param ctx the parse tree
	 */
	enterSpx_spx?: (ctx: Spx_spxContext) => void;
	/**
	 * Exit a parse tree produced by `tnsnamesParser.spx_spx`.
	 * @param ctx the parse tree
	 */
	exitSpx_spx?: (ctx: Spx_spxContext) => void;

	/**
	 * Enter a parse tree produced by `tnsnamesParser.spx_service`.
	 * @param ctx the parse tree
	 */
	enterSpx_service?: (ctx: Spx_serviceContext) => void;
	/**
	 * Exit a parse tree produced by `tnsnamesParser.spx_service`.
	 * @param ctx the parse tree
	 */
	exitSpx_service?: (ctx: Spx_serviceContext) => void;

	/**
	 * Enter a parse tree produced by `tnsnamesParser.nmp_protocol`.
	 * @param ctx the parse tree
	 */
	enterNmp_protocol?: (ctx: Nmp_protocolContext) => void;
	/**
	 * Exit a parse tree produced by `tnsnamesParser.nmp_protocol`.
	 * @param ctx the parse tree
	 */
	exitNmp_protocol?: (ctx: Nmp_protocolContext) => void;

	/**
	 * Enter a parse tree produced by `tnsnamesParser.nmp_params`.
	 * @param ctx the parse tree
	 */
	enterNmp_params?: (ctx: Nmp_paramsContext) => void;
	/**
	 * Exit a parse tree produced by `tnsnamesParser.nmp_params`.
	 * @param ctx the parse tree
	 */
	exitNmp_params?: (ctx: Nmp_paramsContext) => void;

	/**
	 * Enter a parse tree produced by `tnsnamesParser.nmp_parameter`.
	 * @param ctx the parse tree
	 */
	enterNmp_parameter?: (ctx: Nmp_parameterContext) => void;
	/**
	 * Exit a parse tree produced by `tnsnamesParser.nmp_parameter`.
	 * @param ctx the parse tree
	 */
	exitNmp_parameter?: (ctx: Nmp_parameterContext) => void;

	/**
	 * Enter a parse tree produced by `tnsnamesParser.nmp_nmp`.
	 * @param ctx the parse tree
	 */
	enterNmp_nmp?: (ctx: Nmp_nmpContext) => void;
	/**
	 * Exit a parse tree produced by `tnsnamesParser.nmp_nmp`.
	 * @param ctx the parse tree
	 */
	exitNmp_nmp?: (ctx: Nmp_nmpContext) => void;

	/**
	 * Enter a parse tree produced by `tnsnamesParser.nmp_server`.
	 * @param ctx the parse tree
	 */
	enterNmp_server?: (ctx: Nmp_serverContext) => void;
	/**
	 * Exit a parse tree produced by `tnsnamesParser.nmp_server`.
	 * @param ctx the parse tree
	 */
	exitNmp_server?: (ctx: Nmp_serverContext) => void;

	/**
	 * Enter a parse tree produced by `tnsnamesParser.nmp_pipe`.
	 * @param ctx the parse tree
	 */
	enterNmp_pipe?: (ctx: Nmp_pipeContext) => void;
	/**
	 * Exit a parse tree produced by `tnsnamesParser.nmp_pipe`.
	 * @param ctx the parse tree
	 */
	exitNmp_pipe?: (ctx: Nmp_pipeContext) => void;

	/**
	 * Enter a parse tree produced by `tnsnamesParser.beq_protocol`.
	 * @param ctx the parse tree
	 */
	enterBeq_protocol?: (ctx: Beq_protocolContext) => void;
	/**
	 * Exit a parse tree produced by `tnsnamesParser.beq_protocol`.
	 * @param ctx the parse tree
	 */
	exitBeq_protocol?: (ctx: Beq_protocolContext) => void;

	/**
	 * Enter a parse tree produced by `tnsnamesParser.beq_params`.
	 * @param ctx the parse tree
	 */
	enterBeq_params?: (ctx: Beq_paramsContext) => void;
	/**
	 * Exit a parse tree produced by `tnsnamesParser.beq_params`.
	 * @param ctx the parse tree
	 */
	exitBeq_params?: (ctx: Beq_paramsContext) => void;

	/**
	 * Enter a parse tree produced by `tnsnamesParser.beq_parameter`.
	 * @param ctx the parse tree
	 */
	enterBeq_parameter?: (ctx: Beq_parameterContext) => void;
	/**
	 * Exit a parse tree produced by `tnsnamesParser.beq_parameter`.
	 * @param ctx the parse tree
	 */
	exitBeq_parameter?: (ctx: Beq_parameterContext) => void;

	/**
	 * Enter a parse tree produced by `tnsnamesParser.beq_beq`.
	 * @param ctx the parse tree
	 */
	enterBeq_beq?: (ctx: Beq_beqContext) => void;
	/**
	 * Exit a parse tree produced by `tnsnamesParser.beq_beq`.
	 * @param ctx the parse tree
	 */
	exitBeq_beq?: (ctx: Beq_beqContext) => void;

	/**
	 * Enter a parse tree produced by `tnsnamesParser.beq_program`.
	 * @param ctx the parse tree
	 */
	enterBeq_program?: (ctx: Beq_programContext) => void;
	/**
	 * Exit a parse tree produced by `tnsnamesParser.beq_program`.
	 * @param ctx the parse tree
	 */
	exitBeq_program?: (ctx: Beq_programContext) => void;

	/**
	 * Enter a parse tree produced by `tnsnamesParser.beq_argv0`.
	 * @param ctx the parse tree
	 */
	enterBeq_argv0?: (ctx: Beq_argv0Context) => void;
	/**
	 * Exit a parse tree produced by `tnsnamesParser.beq_argv0`.
	 * @param ctx the parse tree
	 */
	exitBeq_argv0?: (ctx: Beq_argv0Context) => void;

	/**
	 * Enter a parse tree produced by `tnsnamesParser.beq_args`.
	 * @param ctx the parse tree
	 */
	enterBeq_args?: (ctx: Beq_argsContext) => void;
	/**
	 * Exit a parse tree produced by `tnsnamesParser.beq_args`.
	 * @param ctx the parse tree
	 */
	exitBeq_args?: (ctx: Beq_argsContext) => void;

	/**
	 * Enter a parse tree produced by `tnsnamesParser.ba_parameter`.
	 * @param ctx the parse tree
	 */
	enterBa_parameter?: (ctx: Ba_parameterContext) => void;
	/**
	 * Exit a parse tree produced by `tnsnamesParser.ba_parameter`.
	 * @param ctx the parse tree
	 */
	exitBa_parameter?: (ctx: Ba_parameterContext) => void;

	/**
	 * Enter a parse tree produced by `tnsnamesParser.ba_description`.
	 * @param ctx the parse tree
	 */
	enterBa_description?: (ctx: Ba_descriptionContext) => void;
	/**
	 * Exit a parse tree produced by `tnsnamesParser.ba_description`.
	 * @param ctx the parse tree
	 */
	exitBa_description?: (ctx: Ba_descriptionContext) => void;

	/**
	 * Enter a parse tree produced by `tnsnamesParser.bad_params`.
	 * @param ctx the parse tree
	 */
	enterBad_params?: (ctx: Bad_paramsContext) => void;
	/**
	 * Exit a parse tree produced by `tnsnamesParser.bad_params`.
	 * @param ctx the parse tree
	 */
	exitBad_params?: (ctx: Bad_paramsContext) => void;

	/**
	 * Enter a parse tree produced by `tnsnamesParser.bad_parameter`.
	 * @param ctx the parse tree
	 */
	enterBad_parameter?: (ctx: Bad_parameterContext) => void;
	/**
	 * Exit a parse tree produced by `tnsnamesParser.bad_parameter`.
	 * @param ctx the parse tree
	 */
	exitBad_parameter?: (ctx: Bad_parameterContext) => void;

	/**
	 * Enter a parse tree produced by `tnsnamesParser.bad_local`.
	 * @param ctx the parse tree
	 */
	enterBad_local?: (ctx: Bad_localContext) => void;
	/**
	 * Exit a parse tree produced by `tnsnamesParser.bad_local`.
	 * @param ctx the parse tree
	 */
	exitBad_local?: (ctx: Bad_localContext) => void;

	/**
	 * Enter a parse tree produced by `tnsnamesParser.bad_address`.
	 * @param ctx the parse tree
	 */
	enterBad_address?: (ctx: Bad_addressContext) => void;
	/**
	 * Exit a parse tree produced by `tnsnamesParser.bad_address`.
	 * @param ctx the parse tree
	 */
	exitBad_address?: (ctx: Bad_addressContext) => void;

	/**
	 * Enter a parse tree produced by `tnsnamesParser.connect_data`.
	 * @param ctx the parse tree
	 */
	enterConnect_data?: (ctx: Connect_dataContext) => void;
	/**
	 * Exit a parse tree produced by `tnsnamesParser.connect_data`.
	 * @param ctx the parse tree
	 */
	exitConnect_data?: (ctx: Connect_dataContext) => void;

	/**
	 * Enter a parse tree produced by `tnsnamesParser.cd_params`.
	 * @param ctx the parse tree
	 */
	enterCd_params?: (ctx: Cd_paramsContext) => void;
	/**
	 * Exit a parse tree produced by `tnsnamesParser.cd_params`.
	 * @param ctx the parse tree
	 */
	exitCd_params?: (ctx: Cd_paramsContext) => void;

	/**
	 * Enter a parse tree produced by `tnsnamesParser.cd_parameter`.
	 * @param ctx the parse tree
	 */
	enterCd_parameter?: (ctx: Cd_parameterContext) => void;
	/**
	 * Exit a parse tree produced by `tnsnamesParser.cd_parameter`.
	 * @param ctx the parse tree
	 */
	exitCd_parameter?: (ctx: Cd_parameterContext) => void;

	/**
	 * Enter a parse tree produced by `tnsnamesParser.cd_service_name`.
	 * @param ctx the parse tree
	 */
	enterCd_service_name?: (ctx: Cd_service_nameContext) => void;
	/**
	 * Exit a parse tree produced by `tnsnamesParser.cd_service_name`.
	 * @param ctx the parse tree
	 */
	exitCd_service_name?: (ctx: Cd_service_nameContext) => void;

	/**
	 * Enter a parse tree produced by `tnsnamesParser.cd_sid`.
	 * @param ctx the parse tree
	 */
	enterCd_sid?: (ctx: Cd_sidContext) => void;
	/**
	 * Exit a parse tree produced by `tnsnamesParser.cd_sid`.
	 * @param ctx the parse tree
	 */
	exitCd_sid?: (ctx: Cd_sidContext) => void;

	/**
	 * Enter a parse tree produced by `tnsnamesParser.cd_instance_name`.
	 * @param ctx the parse tree
	 */
	enterCd_instance_name?: (ctx: Cd_instance_nameContext) => void;
	/**
	 * Exit a parse tree produced by `tnsnamesParser.cd_instance_name`.
	 * @param ctx the parse tree
	 */
	exitCd_instance_name?: (ctx: Cd_instance_nameContext) => void;

	/**
	 * Enter a parse tree produced by `tnsnamesParser.cd_failover_mode`.
	 * @param ctx the parse tree
	 */
	enterCd_failover_mode?: (ctx: Cd_failover_modeContext) => void;
	/**
	 * Exit a parse tree produced by `tnsnamesParser.cd_failover_mode`.
	 * @param ctx the parse tree
	 */
	exitCd_failover_mode?: (ctx: Cd_failover_modeContext) => void;

	/**
	 * Enter a parse tree produced by `tnsnamesParser.cd_global_name`.
	 * @param ctx the parse tree
	 */
	enterCd_global_name?: (ctx: Cd_global_nameContext) => void;
	/**
	 * Exit a parse tree produced by `tnsnamesParser.cd_global_name`.
	 * @param ctx the parse tree
	 */
	exitCd_global_name?: (ctx: Cd_global_nameContext) => void;

	/**
	 * Enter a parse tree produced by `tnsnamesParser.cd_hs`.
	 * @param ctx the parse tree
	 */
	enterCd_hs?: (ctx: Cd_hsContext) => void;
	/**
	 * Exit a parse tree produced by `tnsnamesParser.cd_hs`.
	 * @param ctx the parse tree
	 */
	exitCd_hs?: (ctx: Cd_hsContext) => void;

	/**
	 * Enter a parse tree produced by `tnsnamesParser.cd_rdb_database`.
	 * @param ctx the parse tree
	 */
	enterCd_rdb_database?: (ctx: Cd_rdb_databaseContext) => void;
	/**
	 * Exit a parse tree produced by `tnsnamesParser.cd_rdb_database`.
	 * @param ctx the parse tree
	 */
	exitCd_rdb_database?: (ctx: Cd_rdb_databaseContext) => void;

	/**
	 * Enter a parse tree produced by `tnsnamesParser.cd_server`.
	 * @param ctx the parse tree
	 */
	enterCd_server?: (ctx: Cd_serverContext) => void;
	/**
	 * Exit a parse tree produced by `tnsnamesParser.cd_server`.
	 * @param ctx the parse tree
	 */
	exitCd_server?: (ctx: Cd_serverContext) => void;

	/**
	 * Enter a parse tree produced by `tnsnamesParser.cd_ur`.
	 * @param ctx the parse tree
	 */
	enterCd_ur?: (ctx: Cd_urContext) => void;
	/**
	 * Exit a parse tree produced by `tnsnamesParser.cd_ur`.
	 * @param ctx the parse tree
	 */
	exitCd_ur?: (ctx: Cd_urContext) => void;

	/**
	 * Enter a parse tree produced by `tnsnamesParser.fo_params`.
	 * @param ctx the parse tree
	 */
	enterFo_params?: (ctx: Fo_paramsContext) => void;
	/**
	 * Exit a parse tree produced by `tnsnamesParser.fo_params`.
	 * @param ctx the parse tree
	 */
	exitFo_params?: (ctx: Fo_paramsContext) => void;

	/**
	 * Enter a parse tree produced by `tnsnamesParser.fo_parameter`.
	 * @param ctx the parse tree
	 */
	enterFo_parameter?: (ctx: Fo_parameterContext) => void;
	/**
	 * Exit a parse tree produced by `tnsnamesParser.fo_parameter`.
	 * @param ctx the parse tree
	 */
	exitFo_parameter?: (ctx: Fo_parameterContext) => void;

	/**
	 * Enter a parse tree produced by `tnsnamesParser.fo_type`.
	 * @param ctx the parse tree
	 */
	enterFo_type?: (ctx: Fo_typeContext) => void;
	/**
	 * Exit a parse tree produced by `tnsnamesParser.fo_type`.
	 * @param ctx the parse tree
	 */
	exitFo_type?: (ctx: Fo_typeContext) => void;

	/**
	 * Enter a parse tree produced by `tnsnamesParser.fo_backup`.
	 * @param ctx the parse tree
	 */
	enterFo_backup?: (ctx: Fo_backupContext) => void;
	/**
	 * Exit a parse tree produced by `tnsnamesParser.fo_backup`.
	 * @param ctx the parse tree
	 */
	exitFo_backup?: (ctx: Fo_backupContext) => void;

	/**
	 * Enter a parse tree produced by `tnsnamesParser.fo_method`.
	 * @param ctx the parse tree
	 */
	enterFo_method?: (ctx: Fo_methodContext) => void;
	/**
	 * Exit a parse tree produced by `tnsnamesParser.fo_method`.
	 * @param ctx the parse tree
	 */
	exitFo_method?: (ctx: Fo_methodContext) => void;

	/**
	 * Enter a parse tree produced by `tnsnamesParser.fo_retries`.
	 * @param ctx the parse tree
	 */
	enterFo_retries?: (ctx: Fo_retriesContext) => void;
	/**
	 * Exit a parse tree produced by `tnsnamesParser.fo_retries`.
	 * @param ctx the parse tree
	 */
	exitFo_retries?: (ctx: Fo_retriesContext) => void;

	/**
	 * Enter a parse tree produced by `tnsnamesParser.fo_delay`.
	 * @param ctx the parse tree
	 */
	enterFo_delay?: (ctx: Fo_delayContext) => void;
	/**
	 * Exit a parse tree produced by `tnsnamesParser.fo_delay`.
	 * @param ctx the parse tree
	 */
	exitFo_delay?: (ctx: Fo_delayContext) => void;
}

