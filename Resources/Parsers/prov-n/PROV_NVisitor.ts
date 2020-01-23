// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/prov-n/PROV_N.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `PROV_NParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface PROV_NVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `PROV_NParser.document`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDocument?: (ctx: DocumentContext) => Result;

	/**
	 * Visit a parse tree produced by `PROV_NParser.namespaceDeclarations`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamespaceDeclarations?: (ctx: NamespaceDeclarationsContext) => Result;

	/**
	 * Visit a parse tree produced by `PROV_NParser.defaultNamespaceDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefaultNamespaceDeclaration?: (ctx: DefaultNamespaceDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `PROV_NParser.namespaceDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamespaceDeclaration?: (ctx: NamespaceDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `PROV_NParser.namespace`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamespace?: (ctx: NamespaceContext) => Result;

	/**
	 * Visit a parse tree produced by `PROV_NParser.bundle`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBundle?: (ctx: BundleContext) => Result;

	/**
	 * Visit a parse tree produced by `PROV_NParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifier?: (ctx: IdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `PROV_NParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `PROV_NParser.entityExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEntityExpression?: (ctx: EntityExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `PROV_NParser.optionalAttributeValuePairs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOptionalAttributeValuePairs?: (ctx: OptionalAttributeValuePairsContext) => Result;

	/**
	 * Visit a parse tree produced by `PROV_NParser.attributeValuePairs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttributeValuePairs?: (ctx: AttributeValuePairsContext) => Result;

	/**
	 * Visit a parse tree produced by `PROV_NParser.attributeValuePair`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttributeValuePair?: (ctx: AttributeValuePairContext) => Result;

	/**
	 * Visit a parse tree produced by `PROV_NParser.attribute`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttribute?: (ctx: AttributeContext) => Result;

	/**
	 * Visit a parse tree produced by `PROV_NParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral?: (ctx: LiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `PROV_NParser.typedLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypedLiteral?: (ctx: TypedLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `PROV_NParser.datatype`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDatatype?: (ctx: DatatypeContext) => Result;

	/**
	 * Visit a parse tree produced by `PROV_NParser.convenienceNotation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConvenienceNotation?: (ctx: ConvenienceNotationContext) => Result;

	/**
	 * Visit a parse tree produced by `PROV_NParser.activityExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitActivityExpression?: (ctx: ActivityExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `PROV_NParser.timeOrMarker`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTimeOrMarker?: (ctx: TimeOrMarkerContext) => Result;

	/**
	 * Visit a parse tree produced by `PROV_NParser.time`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTime?: (ctx: TimeContext) => Result;

	/**
	 * Visit a parse tree produced by `PROV_NParser.generationExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGenerationExpression?: (ctx: GenerationExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `PROV_NParser.optionalIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOptionalIdentifier?: (ctx: OptionalIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `PROV_NParser.identifierOrMarker`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifierOrMarker?: (ctx: IdentifierOrMarkerContext) => Result;

	/**
	 * Visit a parse tree produced by `PROV_NParser.eIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEIdentifier?: (ctx: EIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `PROV_NParser.eIdentifierOrMarker`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEIdentifierOrMarker?: (ctx: EIdentifierOrMarkerContext) => Result;

	/**
	 * Visit a parse tree produced by `PROV_NParser.aIdentifierOrMarker`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAIdentifierOrMarker?: (ctx: AIdentifierOrMarkerContext) => Result;

	/**
	 * Visit a parse tree produced by `PROV_NParser.aIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAIdentifier?: (ctx: AIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `PROV_NParser.agIdentifierOrMarker`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAgIdentifierOrMarker?: (ctx: AgIdentifierOrMarkerContext) => Result;

	/**
	 * Visit a parse tree produced by `PROV_NParser.agIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAgIdentifier?: (ctx: AgIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `PROV_NParser.cIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCIdentifier?: (ctx: CIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `PROV_NParser.gIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGIdentifier?: (ctx: GIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `PROV_NParser.gIdentifierOrMarker`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGIdentifierOrMarker?: (ctx: GIdentifierOrMarkerContext) => Result;

	/**
	 * Visit a parse tree produced by `PROV_NParser.uIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUIdentifier?: (ctx: UIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `PROV_NParser.uIdentifierOrMarker`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUIdentifierOrMarker?: (ctx: UIdentifierOrMarkerContext) => Result;

	/**
	 * Visit a parse tree produced by `PROV_NParser.usageExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUsageExpression?: (ctx: UsageExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `PROV_NParser.startExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStartExpression?: (ctx: StartExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `PROV_NParser.endExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEndExpression?: (ctx: EndExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `PROV_NParser.invalidationExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInvalidationExpression?: (ctx: InvalidationExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `PROV_NParser.communicationExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommunicationExpression?: (ctx: CommunicationExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `PROV_NParser.agentExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAgentExpression?: (ctx: AgentExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `PROV_NParser.associationExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssociationExpression?: (ctx: AssociationExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `PROV_NParser.attributionExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttributionExpression?: (ctx: AttributionExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `PROV_NParser.delegationExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDelegationExpression?: (ctx: DelegationExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `PROV_NParser.derivationExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDerivationExpression?: (ctx: DerivationExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `PROV_NParser.influenceExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInfluenceExpression?: (ctx: InfluenceExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `PROV_NParser.alternateExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlternateExpression?: (ctx: AlternateExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `PROV_NParser.specializationExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSpecializationExpression?: (ctx: SpecializationExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `PROV_NParser.membershipExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMembershipExpression?: (ctx: MembershipExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `PROV_NParser.extensibilityExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExtensibilityExpression?: (ctx: ExtensibilityExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `PROV_NParser.extensibilityArgument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExtensibilityArgument?: (ctx: ExtensibilityArgumentContext) => Result;

	/**
	 * Visit a parse tree produced by `PROV_NParser.extensibilityTuple`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExtensibilityTuple?: (ctx: ExtensibilityTupleContext) => Result;
}

