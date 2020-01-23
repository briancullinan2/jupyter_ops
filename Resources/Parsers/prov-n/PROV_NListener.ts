// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/prov-n/PROV_N.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { DocumentContext } from "./PROV_NParser";
import { NamespaceDeclarationsContext } from "./PROV_NParser";
import { DefaultNamespaceDeclarationContext } from "./PROV_NParser";
import { NamespaceDeclarationContext } from "./PROV_NParser";
import { NamespaceContext } from "./PROV_NParser";
import { BundleContext } from "./PROV_NParser";
import { IdentifierContext } from "./PROV_NParser";
import { ExpressionContext } from "./PROV_NParser";
import { EntityExpressionContext } from "./PROV_NParser";
import { OptionalAttributeValuePairsContext } from "./PROV_NParser";
import { AttributeValuePairsContext } from "./PROV_NParser";
import { AttributeValuePairContext } from "./PROV_NParser";
import { AttributeContext } from "./PROV_NParser";
import { LiteralContext } from "./PROV_NParser";
import { TypedLiteralContext } from "./PROV_NParser";
import { DatatypeContext } from "./PROV_NParser";
import { ConvenienceNotationContext } from "./PROV_NParser";
import { ActivityExpressionContext } from "./PROV_NParser";
import { TimeOrMarkerContext } from "./PROV_NParser";
import { TimeContext } from "./PROV_NParser";
import { GenerationExpressionContext } from "./PROV_NParser";
import { OptionalIdentifierContext } from "./PROV_NParser";
import { IdentifierOrMarkerContext } from "./PROV_NParser";
import { EIdentifierContext } from "./PROV_NParser";
import { EIdentifierOrMarkerContext } from "./PROV_NParser";
import { AIdentifierOrMarkerContext } from "./PROV_NParser";
import { AIdentifierContext } from "./PROV_NParser";
import { AgIdentifierOrMarkerContext } from "./PROV_NParser";
import { AgIdentifierContext } from "./PROV_NParser";
import { CIdentifierContext } from "./PROV_NParser";
import { GIdentifierContext } from "./PROV_NParser";
import { GIdentifierOrMarkerContext } from "./PROV_NParser";
import { UIdentifierContext } from "./PROV_NParser";
import { UIdentifierOrMarkerContext } from "./PROV_NParser";
import { UsageExpressionContext } from "./PROV_NParser";
import { StartExpressionContext } from "./PROV_NParser";
import { EndExpressionContext } from "./PROV_NParser";
import { InvalidationExpressionContext } from "./PROV_NParser";
import { CommunicationExpressionContext } from "./PROV_NParser";
import { AgentExpressionContext } from "./PROV_NParser";
import { AssociationExpressionContext } from "./PROV_NParser";
import { AttributionExpressionContext } from "./PROV_NParser";
import { DelegationExpressionContext } from "./PROV_NParser";
import { DerivationExpressionContext } from "./PROV_NParser";
import { InfluenceExpressionContext } from "./PROV_NParser";
import { AlternateExpressionContext } from "./PROV_NParser";
import { SpecializationExpressionContext } from "./PROV_NParser";
import { MembershipExpressionContext } from "./PROV_NParser";
import { ExtensibilityExpressionContext } from "./PROV_NParser";
import { ExtensibilityArgumentContext } from "./PROV_NParser";
import { ExtensibilityTupleContext } from "./PROV_NParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `PROV_NParser`.
 */
export interface PROV_NListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `PROV_NParser.document`.
	 * @param ctx the parse tree
	 */
	enterDocument?: (ctx: DocumentContext) => void;
	/**
	 * Exit a parse tree produced by `PROV_NParser.document`.
	 * @param ctx the parse tree
	 */
	exitDocument?: (ctx: DocumentContext) => void;

	/**
	 * Enter a parse tree produced by `PROV_NParser.namespaceDeclarations`.
	 * @param ctx the parse tree
	 */
	enterNamespaceDeclarations?: (ctx: NamespaceDeclarationsContext) => void;
	/**
	 * Exit a parse tree produced by `PROV_NParser.namespaceDeclarations`.
	 * @param ctx the parse tree
	 */
	exitNamespaceDeclarations?: (ctx: NamespaceDeclarationsContext) => void;

	/**
	 * Enter a parse tree produced by `PROV_NParser.defaultNamespaceDeclaration`.
	 * @param ctx the parse tree
	 */
	enterDefaultNamespaceDeclaration?: (ctx: DefaultNamespaceDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `PROV_NParser.defaultNamespaceDeclaration`.
	 * @param ctx the parse tree
	 */
	exitDefaultNamespaceDeclaration?: (ctx: DefaultNamespaceDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `PROV_NParser.namespaceDeclaration`.
	 * @param ctx the parse tree
	 */
	enterNamespaceDeclaration?: (ctx: NamespaceDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `PROV_NParser.namespaceDeclaration`.
	 * @param ctx the parse tree
	 */
	exitNamespaceDeclaration?: (ctx: NamespaceDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `PROV_NParser.namespace`.
	 * @param ctx the parse tree
	 */
	enterNamespace?: (ctx: NamespaceContext) => void;
	/**
	 * Exit a parse tree produced by `PROV_NParser.namespace`.
	 * @param ctx the parse tree
	 */
	exitNamespace?: (ctx: NamespaceContext) => void;

	/**
	 * Enter a parse tree produced by `PROV_NParser.bundle`.
	 * @param ctx the parse tree
	 */
	enterBundle?: (ctx: BundleContext) => void;
	/**
	 * Exit a parse tree produced by `PROV_NParser.bundle`.
	 * @param ctx the parse tree
	 */
	exitBundle?: (ctx: BundleContext) => void;

	/**
	 * Enter a parse tree produced by `PROV_NParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `PROV_NParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitIdentifier?: (ctx: IdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `PROV_NParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `PROV_NParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `PROV_NParser.entityExpression`.
	 * @param ctx the parse tree
	 */
	enterEntityExpression?: (ctx: EntityExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `PROV_NParser.entityExpression`.
	 * @param ctx the parse tree
	 */
	exitEntityExpression?: (ctx: EntityExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `PROV_NParser.optionalAttributeValuePairs`.
	 * @param ctx the parse tree
	 */
	enterOptionalAttributeValuePairs?: (ctx: OptionalAttributeValuePairsContext) => void;
	/**
	 * Exit a parse tree produced by `PROV_NParser.optionalAttributeValuePairs`.
	 * @param ctx the parse tree
	 */
	exitOptionalAttributeValuePairs?: (ctx: OptionalAttributeValuePairsContext) => void;

	/**
	 * Enter a parse tree produced by `PROV_NParser.attributeValuePairs`.
	 * @param ctx the parse tree
	 */
	enterAttributeValuePairs?: (ctx: AttributeValuePairsContext) => void;
	/**
	 * Exit a parse tree produced by `PROV_NParser.attributeValuePairs`.
	 * @param ctx the parse tree
	 */
	exitAttributeValuePairs?: (ctx: AttributeValuePairsContext) => void;

	/**
	 * Enter a parse tree produced by `PROV_NParser.attributeValuePair`.
	 * @param ctx the parse tree
	 */
	enterAttributeValuePair?: (ctx: AttributeValuePairContext) => void;
	/**
	 * Exit a parse tree produced by `PROV_NParser.attributeValuePair`.
	 * @param ctx the parse tree
	 */
	exitAttributeValuePair?: (ctx: AttributeValuePairContext) => void;

	/**
	 * Enter a parse tree produced by `PROV_NParser.attribute`.
	 * @param ctx the parse tree
	 */
	enterAttribute?: (ctx: AttributeContext) => void;
	/**
	 * Exit a parse tree produced by `PROV_NParser.attribute`.
	 * @param ctx the parse tree
	 */
	exitAttribute?: (ctx: AttributeContext) => void;

	/**
	 * Enter a parse tree produced by `PROV_NParser.literal`.
	 * @param ctx the parse tree
	 */
	enterLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Exit a parse tree produced by `PROV_NParser.literal`.
	 * @param ctx the parse tree
	 */
	exitLiteral?: (ctx: LiteralContext) => void;

	/**
	 * Enter a parse tree produced by `PROV_NParser.typedLiteral`.
	 * @param ctx the parse tree
	 */
	enterTypedLiteral?: (ctx: TypedLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `PROV_NParser.typedLiteral`.
	 * @param ctx the parse tree
	 */
	exitTypedLiteral?: (ctx: TypedLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `PROV_NParser.datatype`.
	 * @param ctx the parse tree
	 */
	enterDatatype?: (ctx: DatatypeContext) => void;
	/**
	 * Exit a parse tree produced by `PROV_NParser.datatype`.
	 * @param ctx the parse tree
	 */
	exitDatatype?: (ctx: DatatypeContext) => void;

	/**
	 * Enter a parse tree produced by `PROV_NParser.convenienceNotation`.
	 * @param ctx the parse tree
	 */
	enterConvenienceNotation?: (ctx: ConvenienceNotationContext) => void;
	/**
	 * Exit a parse tree produced by `PROV_NParser.convenienceNotation`.
	 * @param ctx the parse tree
	 */
	exitConvenienceNotation?: (ctx: ConvenienceNotationContext) => void;

	/**
	 * Enter a parse tree produced by `PROV_NParser.activityExpression`.
	 * @param ctx the parse tree
	 */
	enterActivityExpression?: (ctx: ActivityExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `PROV_NParser.activityExpression`.
	 * @param ctx the parse tree
	 */
	exitActivityExpression?: (ctx: ActivityExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `PROV_NParser.timeOrMarker`.
	 * @param ctx the parse tree
	 */
	enterTimeOrMarker?: (ctx: TimeOrMarkerContext) => void;
	/**
	 * Exit a parse tree produced by `PROV_NParser.timeOrMarker`.
	 * @param ctx the parse tree
	 */
	exitTimeOrMarker?: (ctx: TimeOrMarkerContext) => void;

	/**
	 * Enter a parse tree produced by `PROV_NParser.time`.
	 * @param ctx the parse tree
	 */
	enterTime?: (ctx: TimeContext) => void;
	/**
	 * Exit a parse tree produced by `PROV_NParser.time`.
	 * @param ctx the parse tree
	 */
	exitTime?: (ctx: TimeContext) => void;

	/**
	 * Enter a parse tree produced by `PROV_NParser.generationExpression`.
	 * @param ctx the parse tree
	 */
	enterGenerationExpression?: (ctx: GenerationExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `PROV_NParser.generationExpression`.
	 * @param ctx the parse tree
	 */
	exitGenerationExpression?: (ctx: GenerationExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `PROV_NParser.optionalIdentifier`.
	 * @param ctx the parse tree
	 */
	enterOptionalIdentifier?: (ctx: OptionalIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `PROV_NParser.optionalIdentifier`.
	 * @param ctx the parse tree
	 */
	exitOptionalIdentifier?: (ctx: OptionalIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `PROV_NParser.identifierOrMarker`.
	 * @param ctx the parse tree
	 */
	enterIdentifierOrMarker?: (ctx: IdentifierOrMarkerContext) => void;
	/**
	 * Exit a parse tree produced by `PROV_NParser.identifierOrMarker`.
	 * @param ctx the parse tree
	 */
	exitIdentifierOrMarker?: (ctx: IdentifierOrMarkerContext) => void;

	/**
	 * Enter a parse tree produced by `PROV_NParser.eIdentifier`.
	 * @param ctx the parse tree
	 */
	enterEIdentifier?: (ctx: EIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `PROV_NParser.eIdentifier`.
	 * @param ctx the parse tree
	 */
	exitEIdentifier?: (ctx: EIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `PROV_NParser.eIdentifierOrMarker`.
	 * @param ctx the parse tree
	 */
	enterEIdentifierOrMarker?: (ctx: EIdentifierOrMarkerContext) => void;
	/**
	 * Exit a parse tree produced by `PROV_NParser.eIdentifierOrMarker`.
	 * @param ctx the parse tree
	 */
	exitEIdentifierOrMarker?: (ctx: EIdentifierOrMarkerContext) => void;

	/**
	 * Enter a parse tree produced by `PROV_NParser.aIdentifierOrMarker`.
	 * @param ctx the parse tree
	 */
	enterAIdentifierOrMarker?: (ctx: AIdentifierOrMarkerContext) => void;
	/**
	 * Exit a parse tree produced by `PROV_NParser.aIdentifierOrMarker`.
	 * @param ctx the parse tree
	 */
	exitAIdentifierOrMarker?: (ctx: AIdentifierOrMarkerContext) => void;

	/**
	 * Enter a parse tree produced by `PROV_NParser.aIdentifier`.
	 * @param ctx the parse tree
	 */
	enterAIdentifier?: (ctx: AIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `PROV_NParser.aIdentifier`.
	 * @param ctx the parse tree
	 */
	exitAIdentifier?: (ctx: AIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `PROV_NParser.agIdentifierOrMarker`.
	 * @param ctx the parse tree
	 */
	enterAgIdentifierOrMarker?: (ctx: AgIdentifierOrMarkerContext) => void;
	/**
	 * Exit a parse tree produced by `PROV_NParser.agIdentifierOrMarker`.
	 * @param ctx the parse tree
	 */
	exitAgIdentifierOrMarker?: (ctx: AgIdentifierOrMarkerContext) => void;

	/**
	 * Enter a parse tree produced by `PROV_NParser.agIdentifier`.
	 * @param ctx the parse tree
	 */
	enterAgIdentifier?: (ctx: AgIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `PROV_NParser.agIdentifier`.
	 * @param ctx the parse tree
	 */
	exitAgIdentifier?: (ctx: AgIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `PROV_NParser.cIdentifier`.
	 * @param ctx the parse tree
	 */
	enterCIdentifier?: (ctx: CIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `PROV_NParser.cIdentifier`.
	 * @param ctx the parse tree
	 */
	exitCIdentifier?: (ctx: CIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `PROV_NParser.gIdentifier`.
	 * @param ctx the parse tree
	 */
	enterGIdentifier?: (ctx: GIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `PROV_NParser.gIdentifier`.
	 * @param ctx the parse tree
	 */
	exitGIdentifier?: (ctx: GIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `PROV_NParser.gIdentifierOrMarker`.
	 * @param ctx the parse tree
	 */
	enterGIdentifierOrMarker?: (ctx: GIdentifierOrMarkerContext) => void;
	/**
	 * Exit a parse tree produced by `PROV_NParser.gIdentifierOrMarker`.
	 * @param ctx the parse tree
	 */
	exitGIdentifierOrMarker?: (ctx: GIdentifierOrMarkerContext) => void;

	/**
	 * Enter a parse tree produced by `PROV_NParser.uIdentifier`.
	 * @param ctx the parse tree
	 */
	enterUIdentifier?: (ctx: UIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `PROV_NParser.uIdentifier`.
	 * @param ctx the parse tree
	 */
	exitUIdentifier?: (ctx: UIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `PROV_NParser.uIdentifierOrMarker`.
	 * @param ctx the parse tree
	 */
	enterUIdentifierOrMarker?: (ctx: UIdentifierOrMarkerContext) => void;
	/**
	 * Exit a parse tree produced by `PROV_NParser.uIdentifierOrMarker`.
	 * @param ctx the parse tree
	 */
	exitUIdentifierOrMarker?: (ctx: UIdentifierOrMarkerContext) => void;

	/**
	 * Enter a parse tree produced by `PROV_NParser.usageExpression`.
	 * @param ctx the parse tree
	 */
	enterUsageExpression?: (ctx: UsageExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `PROV_NParser.usageExpression`.
	 * @param ctx the parse tree
	 */
	exitUsageExpression?: (ctx: UsageExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `PROV_NParser.startExpression`.
	 * @param ctx the parse tree
	 */
	enterStartExpression?: (ctx: StartExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `PROV_NParser.startExpression`.
	 * @param ctx the parse tree
	 */
	exitStartExpression?: (ctx: StartExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `PROV_NParser.endExpression`.
	 * @param ctx the parse tree
	 */
	enterEndExpression?: (ctx: EndExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `PROV_NParser.endExpression`.
	 * @param ctx the parse tree
	 */
	exitEndExpression?: (ctx: EndExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `PROV_NParser.invalidationExpression`.
	 * @param ctx the parse tree
	 */
	enterInvalidationExpression?: (ctx: InvalidationExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `PROV_NParser.invalidationExpression`.
	 * @param ctx the parse tree
	 */
	exitInvalidationExpression?: (ctx: InvalidationExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `PROV_NParser.communicationExpression`.
	 * @param ctx the parse tree
	 */
	enterCommunicationExpression?: (ctx: CommunicationExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `PROV_NParser.communicationExpression`.
	 * @param ctx the parse tree
	 */
	exitCommunicationExpression?: (ctx: CommunicationExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `PROV_NParser.agentExpression`.
	 * @param ctx the parse tree
	 */
	enterAgentExpression?: (ctx: AgentExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `PROV_NParser.agentExpression`.
	 * @param ctx the parse tree
	 */
	exitAgentExpression?: (ctx: AgentExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `PROV_NParser.associationExpression`.
	 * @param ctx the parse tree
	 */
	enterAssociationExpression?: (ctx: AssociationExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `PROV_NParser.associationExpression`.
	 * @param ctx the parse tree
	 */
	exitAssociationExpression?: (ctx: AssociationExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `PROV_NParser.attributionExpression`.
	 * @param ctx the parse tree
	 */
	enterAttributionExpression?: (ctx: AttributionExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `PROV_NParser.attributionExpression`.
	 * @param ctx the parse tree
	 */
	exitAttributionExpression?: (ctx: AttributionExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `PROV_NParser.delegationExpression`.
	 * @param ctx the parse tree
	 */
	enterDelegationExpression?: (ctx: DelegationExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `PROV_NParser.delegationExpression`.
	 * @param ctx the parse tree
	 */
	exitDelegationExpression?: (ctx: DelegationExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `PROV_NParser.derivationExpression`.
	 * @param ctx the parse tree
	 */
	enterDerivationExpression?: (ctx: DerivationExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `PROV_NParser.derivationExpression`.
	 * @param ctx the parse tree
	 */
	exitDerivationExpression?: (ctx: DerivationExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `PROV_NParser.influenceExpression`.
	 * @param ctx the parse tree
	 */
	enterInfluenceExpression?: (ctx: InfluenceExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `PROV_NParser.influenceExpression`.
	 * @param ctx the parse tree
	 */
	exitInfluenceExpression?: (ctx: InfluenceExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `PROV_NParser.alternateExpression`.
	 * @param ctx the parse tree
	 */
	enterAlternateExpression?: (ctx: AlternateExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `PROV_NParser.alternateExpression`.
	 * @param ctx the parse tree
	 */
	exitAlternateExpression?: (ctx: AlternateExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `PROV_NParser.specializationExpression`.
	 * @param ctx the parse tree
	 */
	enterSpecializationExpression?: (ctx: SpecializationExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `PROV_NParser.specializationExpression`.
	 * @param ctx the parse tree
	 */
	exitSpecializationExpression?: (ctx: SpecializationExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `PROV_NParser.membershipExpression`.
	 * @param ctx the parse tree
	 */
	enterMembershipExpression?: (ctx: MembershipExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `PROV_NParser.membershipExpression`.
	 * @param ctx the parse tree
	 */
	exitMembershipExpression?: (ctx: MembershipExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `PROV_NParser.extensibilityExpression`.
	 * @param ctx the parse tree
	 */
	enterExtensibilityExpression?: (ctx: ExtensibilityExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `PROV_NParser.extensibilityExpression`.
	 * @param ctx the parse tree
	 */
	exitExtensibilityExpression?: (ctx: ExtensibilityExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `PROV_NParser.extensibilityArgument`.
	 * @param ctx the parse tree
	 */
	enterExtensibilityArgument?: (ctx: ExtensibilityArgumentContext) => void;
	/**
	 * Exit a parse tree produced by `PROV_NParser.extensibilityArgument`.
	 * @param ctx the parse tree
	 */
	exitExtensibilityArgument?: (ctx: ExtensibilityArgumentContext) => void;

	/**
	 * Enter a parse tree produced by `PROV_NParser.extensibilityTuple`.
	 * @param ctx the parse tree
	 */
	enterExtensibilityTuple?: (ctx: ExtensibilityTupleContext) => void;
	/**
	 * Exit a parse tree produced by `PROV_NParser.extensibilityTuple`.
	 * @param ctx the parse tree
	 */
	exitExtensibilityTuple?: (ctx: ExtensibilityTupleContext) => void;
}

