// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/protobuf3/Protobuf3.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ProtoContext } from "./Protobuf3Parser";
import { SyntaxContext } from "./Protobuf3Parser";
import { ImportStatementContext } from "./Protobuf3Parser";
import { PackageStatementContext } from "./Protobuf3Parser";
import { OptionContext } from "./Protobuf3Parser";
import { OptionNameContext } from "./Protobuf3Parser";
import { OptionBodyContext } from "./Protobuf3Parser";
import { OptionBodyVariableContext } from "./Protobuf3Parser";
import { TopLevelDefContext } from "./Protobuf3Parser";
import { MessageContext } from "./Protobuf3Parser";
import { MessageBodyContext } from "./Protobuf3Parser";
import { EnumDefinitionContext } from "./Protobuf3Parser";
import { EnumBodyContext } from "./Protobuf3Parser";
import { EnumFieldContext } from "./Protobuf3Parser";
import { EnumValueOptionContext } from "./Protobuf3Parser";
import { ServiceContext } from "./Protobuf3Parser";
import { RpcContext } from "./Protobuf3Parser";
import { ReservedContext } from "./Protobuf3Parser";
import { RangesContext } from "./Protobuf3Parser";
import { RangeContext } from "./Protobuf3Parser";
import { FieldNamesContext } from "./Protobuf3Parser";
import { TypeContext } from "./Protobuf3Parser";
import { FieldNumberContext } from "./Protobuf3Parser";
import { FieldContext } from "./Protobuf3Parser";
import { FieldOptionsContext } from "./Protobuf3Parser";
import { FieldOptionContext } from "./Protobuf3Parser";
import { OneofContext } from "./Protobuf3Parser";
import { OneofFieldContext } from "./Protobuf3Parser";
import { MapFieldContext } from "./Protobuf3Parser";
import { KeyTypeContext } from "./Protobuf3Parser";
import { ReservedWordContext } from "./Protobuf3Parser";
import { FullIdentContext } from "./Protobuf3Parser";
import { MessageNameContext } from "./Protobuf3Parser";
import { EnumNameContext } from "./Protobuf3Parser";
import { MessageOrEnumNameContext } from "./Protobuf3Parser";
import { FieldNameContext } from "./Protobuf3Parser";
import { OneofNameContext } from "./Protobuf3Parser";
import { MapNameContext } from "./Protobuf3Parser";
import { ServiceNameContext } from "./Protobuf3Parser";
import { RpcNameContext } from "./Protobuf3Parser";
import { MessageTypeContext } from "./Protobuf3Parser";
import { MessageOrEnumTypeContext } from "./Protobuf3Parser";
import { EmptyStatementContext } from "./Protobuf3Parser";
import { ConstantContext } from "./Protobuf3Parser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `Protobuf3Parser`.
 */
export interface Protobuf3Listener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `Protobuf3Parser.proto`.
	 * @param ctx the parse tree
	 */
	enterProto?: (ctx: ProtoContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf3Parser.proto`.
	 * @param ctx the parse tree
	 */
	exitProto?: (ctx: ProtoContext) => void;

	/**
	 * Enter a parse tree produced by `Protobuf3Parser.syntax`.
	 * @param ctx the parse tree
	 */
	enterSyntax?: (ctx: SyntaxContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf3Parser.syntax`.
	 * @param ctx the parse tree
	 */
	exitSyntax?: (ctx: SyntaxContext) => void;

	/**
	 * Enter a parse tree produced by `Protobuf3Parser.importStatement`.
	 * @param ctx the parse tree
	 */
	enterImportStatement?: (ctx: ImportStatementContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf3Parser.importStatement`.
	 * @param ctx the parse tree
	 */
	exitImportStatement?: (ctx: ImportStatementContext) => void;

	/**
	 * Enter a parse tree produced by `Protobuf3Parser.packageStatement`.
	 * @param ctx the parse tree
	 */
	enterPackageStatement?: (ctx: PackageStatementContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf3Parser.packageStatement`.
	 * @param ctx the parse tree
	 */
	exitPackageStatement?: (ctx: PackageStatementContext) => void;

	/**
	 * Enter a parse tree produced by `Protobuf3Parser.option`.
	 * @param ctx the parse tree
	 */
	enterOption?: (ctx: OptionContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf3Parser.option`.
	 * @param ctx the parse tree
	 */
	exitOption?: (ctx: OptionContext) => void;

	/**
	 * Enter a parse tree produced by `Protobuf3Parser.optionName`.
	 * @param ctx the parse tree
	 */
	enterOptionName?: (ctx: OptionNameContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf3Parser.optionName`.
	 * @param ctx the parse tree
	 */
	exitOptionName?: (ctx: OptionNameContext) => void;

	/**
	 * Enter a parse tree produced by `Protobuf3Parser.optionBody`.
	 * @param ctx the parse tree
	 */
	enterOptionBody?: (ctx: OptionBodyContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf3Parser.optionBody`.
	 * @param ctx the parse tree
	 */
	exitOptionBody?: (ctx: OptionBodyContext) => void;

	/**
	 * Enter a parse tree produced by `Protobuf3Parser.optionBodyVariable`.
	 * @param ctx the parse tree
	 */
	enterOptionBodyVariable?: (ctx: OptionBodyVariableContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf3Parser.optionBodyVariable`.
	 * @param ctx the parse tree
	 */
	exitOptionBodyVariable?: (ctx: OptionBodyVariableContext) => void;

	/**
	 * Enter a parse tree produced by `Protobuf3Parser.topLevelDef`.
	 * @param ctx the parse tree
	 */
	enterTopLevelDef?: (ctx: TopLevelDefContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf3Parser.topLevelDef`.
	 * @param ctx the parse tree
	 */
	exitTopLevelDef?: (ctx: TopLevelDefContext) => void;

	/**
	 * Enter a parse tree produced by `Protobuf3Parser.message`.
	 * @param ctx the parse tree
	 */
	enterMessage?: (ctx: MessageContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf3Parser.message`.
	 * @param ctx the parse tree
	 */
	exitMessage?: (ctx: MessageContext) => void;

	/**
	 * Enter a parse tree produced by `Protobuf3Parser.messageBody`.
	 * @param ctx the parse tree
	 */
	enterMessageBody?: (ctx: MessageBodyContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf3Parser.messageBody`.
	 * @param ctx the parse tree
	 */
	exitMessageBody?: (ctx: MessageBodyContext) => void;

	/**
	 * Enter a parse tree produced by `Protobuf3Parser.enumDefinition`.
	 * @param ctx the parse tree
	 */
	enterEnumDefinition?: (ctx: EnumDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf3Parser.enumDefinition`.
	 * @param ctx the parse tree
	 */
	exitEnumDefinition?: (ctx: EnumDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `Protobuf3Parser.enumBody`.
	 * @param ctx the parse tree
	 */
	enterEnumBody?: (ctx: EnumBodyContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf3Parser.enumBody`.
	 * @param ctx the parse tree
	 */
	exitEnumBody?: (ctx: EnumBodyContext) => void;

	/**
	 * Enter a parse tree produced by `Protobuf3Parser.enumField`.
	 * @param ctx the parse tree
	 */
	enterEnumField?: (ctx: EnumFieldContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf3Parser.enumField`.
	 * @param ctx the parse tree
	 */
	exitEnumField?: (ctx: EnumFieldContext) => void;

	/**
	 * Enter a parse tree produced by `Protobuf3Parser.enumValueOption`.
	 * @param ctx the parse tree
	 */
	enterEnumValueOption?: (ctx: EnumValueOptionContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf3Parser.enumValueOption`.
	 * @param ctx the parse tree
	 */
	exitEnumValueOption?: (ctx: EnumValueOptionContext) => void;

	/**
	 * Enter a parse tree produced by `Protobuf3Parser.service`.
	 * @param ctx the parse tree
	 */
	enterService?: (ctx: ServiceContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf3Parser.service`.
	 * @param ctx the parse tree
	 */
	exitService?: (ctx: ServiceContext) => void;

	/**
	 * Enter a parse tree produced by `Protobuf3Parser.rpc`.
	 * @param ctx the parse tree
	 */
	enterRpc?: (ctx: RpcContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf3Parser.rpc`.
	 * @param ctx the parse tree
	 */
	exitRpc?: (ctx: RpcContext) => void;

	/**
	 * Enter a parse tree produced by `Protobuf3Parser.reserved`.
	 * @param ctx the parse tree
	 */
	enterReserved?: (ctx: ReservedContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf3Parser.reserved`.
	 * @param ctx the parse tree
	 */
	exitReserved?: (ctx: ReservedContext) => void;

	/**
	 * Enter a parse tree produced by `Protobuf3Parser.ranges`.
	 * @param ctx the parse tree
	 */
	enterRanges?: (ctx: RangesContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf3Parser.ranges`.
	 * @param ctx the parse tree
	 */
	exitRanges?: (ctx: RangesContext) => void;

	/**
	 * Enter a parse tree produced by `Protobuf3Parser.range`.
	 * @param ctx the parse tree
	 */
	enterRange?: (ctx: RangeContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf3Parser.range`.
	 * @param ctx the parse tree
	 */
	exitRange?: (ctx: RangeContext) => void;

	/**
	 * Enter a parse tree produced by `Protobuf3Parser.fieldNames`.
	 * @param ctx the parse tree
	 */
	enterFieldNames?: (ctx: FieldNamesContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf3Parser.fieldNames`.
	 * @param ctx the parse tree
	 */
	exitFieldNames?: (ctx: FieldNamesContext) => void;

	/**
	 * Enter a parse tree produced by `Protobuf3Parser.type`.
	 * @param ctx the parse tree
	 */
	enterType?: (ctx: TypeContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf3Parser.type`.
	 * @param ctx the parse tree
	 */
	exitType?: (ctx: TypeContext) => void;

	/**
	 * Enter a parse tree produced by `Protobuf3Parser.fieldNumber`.
	 * @param ctx the parse tree
	 */
	enterFieldNumber?: (ctx: FieldNumberContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf3Parser.fieldNumber`.
	 * @param ctx the parse tree
	 */
	exitFieldNumber?: (ctx: FieldNumberContext) => void;

	/**
	 * Enter a parse tree produced by `Protobuf3Parser.field`.
	 * @param ctx the parse tree
	 */
	enterField?: (ctx: FieldContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf3Parser.field`.
	 * @param ctx the parse tree
	 */
	exitField?: (ctx: FieldContext) => void;

	/**
	 * Enter a parse tree produced by `Protobuf3Parser.fieldOptions`.
	 * @param ctx the parse tree
	 */
	enterFieldOptions?: (ctx: FieldOptionsContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf3Parser.fieldOptions`.
	 * @param ctx the parse tree
	 */
	exitFieldOptions?: (ctx: FieldOptionsContext) => void;

	/**
	 * Enter a parse tree produced by `Protobuf3Parser.fieldOption`.
	 * @param ctx the parse tree
	 */
	enterFieldOption?: (ctx: FieldOptionContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf3Parser.fieldOption`.
	 * @param ctx the parse tree
	 */
	exitFieldOption?: (ctx: FieldOptionContext) => void;

	/**
	 * Enter a parse tree produced by `Protobuf3Parser.oneof`.
	 * @param ctx the parse tree
	 */
	enterOneof?: (ctx: OneofContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf3Parser.oneof`.
	 * @param ctx the parse tree
	 */
	exitOneof?: (ctx: OneofContext) => void;

	/**
	 * Enter a parse tree produced by `Protobuf3Parser.oneofField`.
	 * @param ctx the parse tree
	 */
	enterOneofField?: (ctx: OneofFieldContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf3Parser.oneofField`.
	 * @param ctx the parse tree
	 */
	exitOneofField?: (ctx: OneofFieldContext) => void;

	/**
	 * Enter a parse tree produced by `Protobuf3Parser.mapField`.
	 * @param ctx the parse tree
	 */
	enterMapField?: (ctx: MapFieldContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf3Parser.mapField`.
	 * @param ctx the parse tree
	 */
	exitMapField?: (ctx: MapFieldContext) => void;

	/**
	 * Enter a parse tree produced by `Protobuf3Parser.keyType`.
	 * @param ctx the parse tree
	 */
	enterKeyType?: (ctx: KeyTypeContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf3Parser.keyType`.
	 * @param ctx the parse tree
	 */
	exitKeyType?: (ctx: KeyTypeContext) => void;

	/**
	 * Enter a parse tree produced by `Protobuf3Parser.reservedWord`.
	 * @param ctx the parse tree
	 */
	enterReservedWord?: (ctx: ReservedWordContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf3Parser.reservedWord`.
	 * @param ctx the parse tree
	 */
	exitReservedWord?: (ctx: ReservedWordContext) => void;

	/**
	 * Enter a parse tree produced by `Protobuf3Parser.fullIdent`.
	 * @param ctx the parse tree
	 */
	enterFullIdent?: (ctx: FullIdentContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf3Parser.fullIdent`.
	 * @param ctx the parse tree
	 */
	exitFullIdent?: (ctx: FullIdentContext) => void;

	/**
	 * Enter a parse tree produced by `Protobuf3Parser.messageName`.
	 * @param ctx the parse tree
	 */
	enterMessageName?: (ctx: MessageNameContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf3Parser.messageName`.
	 * @param ctx the parse tree
	 */
	exitMessageName?: (ctx: MessageNameContext) => void;

	/**
	 * Enter a parse tree produced by `Protobuf3Parser.enumName`.
	 * @param ctx the parse tree
	 */
	enterEnumName?: (ctx: EnumNameContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf3Parser.enumName`.
	 * @param ctx the parse tree
	 */
	exitEnumName?: (ctx: EnumNameContext) => void;

	/**
	 * Enter a parse tree produced by `Protobuf3Parser.messageOrEnumName`.
	 * @param ctx the parse tree
	 */
	enterMessageOrEnumName?: (ctx: MessageOrEnumNameContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf3Parser.messageOrEnumName`.
	 * @param ctx the parse tree
	 */
	exitMessageOrEnumName?: (ctx: MessageOrEnumNameContext) => void;

	/**
	 * Enter a parse tree produced by `Protobuf3Parser.fieldName`.
	 * @param ctx the parse tree
	 */
	enterFieldName?: (ctx: FieldNameContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf3Parser.fieldName`.
	 * @param ctx the parse tree
	 */
	exitFieldName?: (ctx: FieldNameContext) => void;

	/**
	 * Enter a parse tree produced by `Protobuf3Parser.oneofName`.
	 * @param ctx the parse tree
	 */
	enterOneofName?: (ctx: OneofNameContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf3Parser.oneofName`.
	 * @param ctx the parse tree
	 */
	exitOneofName?: (ctx: OneofNameContext) => void;

	/**
	 * Enter a parse tree produced by `Protobuf3Parser.mapName`.
	 * @param ctx the parse tree
	 */
	enterMapName?: (ctx: MapNameContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf3Parser.mapName`.
	 * @param ctx the parse tree
	 */
	exitMapName?: (ctx: MapNameContext) => void;

	/**
	 * Enter a parse tree produced by `Protobuf3Parser.serviceName`.
	 * @param ctx the parse tree
	 */
	enterServiceName?: (ctx: ServiceNameContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf3Parser.serviceName`.
	 * @param ctx the parse tree
	 */
	exitServiceName?: (ctx: ServiceNameContext) => void;

	/**
	 * Enter a parse tree produced by `Protobuf3Parser.rpcName`.
	 * @param ctx the parse tree
	 */
	enterRpcName?: (ctx: RpcNameContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf3Parser.rpcName`.
	 * @param ctx the parse tree
	 */
	exitRpcName?: (ctx: RpcNameContext) => void;

	/**
	 * Enter a parse tree produced by `Protobuf3Parser.messageType`.
	 * @param ctx the parse tree
	 */
	enterMessageType?: (ctx: MessageTypeContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf3Parser.messageType`.
	 * @param ctx the parse tree
	 */
	exitMessageType?: (ctx: MessageTypeContext) => void;

	/**
	 * Enter a parse tree produced by `Protobuf3Parser.messageOrEnumType`.
	 * @param ctx the parse tree
	 */
	enterMessageOrEnumType?: (ctx: MessageOrEnumTypeContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf3Parser.messageOrEnumType`.
	 * @param ctx the parse tree
	 */
	exitMessageOrEnumType?: (ctx: MessageOrEnumTypeContext) => void;

	/**
	 * Enter a parse tree produced by `Protobuf3Parser.emptyStatement`.
	 * @param ctx the parse tree
	 */
	enterEmptyStatement?: (ctx: EmptyStatementContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf3Parser.emptyStatement`.
	 * @param ctx the parse tree
	 */
	exitEmptyStatement?: (ctx: EmptyStatementContext) => void;

	/**
	 * Enter a parse tree produced by `Protobuf3Parser.constant`.
	 * @param ctx the parse tree
	 */
	enterConstant?: (ctx: ConstantContext) => void;
	/**
	 * Exit a parse tree produced by `Protobuf3Parser.constant`.
	 * @param ctx the parse tree
	 */
	exitConstant?: (ctx: ConstantContext) => void;
}

