// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/asn/asn/ASN.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { ModulesContext } from "./ASNParser";
import { ModuleDefinitionContext } from "./ASNParser";
import { TagDefaultContext } from "./ASNParser";
import { ExtensionDefaultContext } from "./ASNParser";
import { ModuleBodyContext } from "./ASNParser";
import { ExportsContext } from "./ASNParser";
import { SymbolsExportedContext } from "./ASNParser";
import { ImportsContext } from "./ASNParser";
import { SymbolsImportedContext } from "./ASNParser";
import { SymbolsFromModuleListContext } from "./ASNParser";
import { SymbolsFromModuleContext } from "./ASNParser";
import { GlobalModuleReferenceContext } from "./ASNParser";
import { AssignedIdentifierContext } from "./ASNParser";
import { SymbolListContext } from "./ASNParser";
import { SymbolContext } from "./ASNParser";
import { AssignmentListContext } from "./ASNParser";
import { AssignmentContext } from "./ASNParser";
import { SequenceTypeContext } from "./ASNParser";
import { ExtensionAndExceptionContext } from "./ASNParser";
import { OptionalExtensionMarkerContext } from "./ASNParser";
import { ComponentTypeListsContext } from "./ASNParser";
import { RootComponentTypeListContext } from "./ASNParser";
import { ComponentTypeListContext } from "./ASNParser";
import { ComponentTypeContext } from "./ASNParser";
import { ExtensionAdditionsContext } from "./ASNParser";
import { ExtensionAdditionListContext } from "./ASNParser";
import { ExtensionAdditionContext } from "./ASNParser";
import { ExtensionAdditionGroupContext } from "./ASNParser";
import { VersionNumberContext } from "./ASNParser";
import { SequenceOfTypeContext } from "./ASNParser";
import { SizeConstraintContext } from "./ASNParser";
import { ParameterizedAssignmentContext } from "./ASNParser";
import { ParameterListContext } from "./ASNParser";
import { ParameterContext } from "./ASNParser";
import { ParamGovernorContext } from "./ASNParser";
import { GovernorContext } from "./ASNParser";
import { ObjectClassAssignmentContext } from "./ASNParser";
import { ObjectClassContext } from "./ASNParser";
import { DefinedObjectClassContext } from "./ASNParser";
import { UsefulObjectClassReferenceContext } from "./ASNParser";
import { ExternalObjectClassReferenceContext } from "./ASNParser";
import { ObjectClassDefnContext } from "./ASNParser";
import { WithSyntaxSpecContext } from "./ASNParser";
import { SyntaxListContext } from "./ASNParser";
import { TokenOrGroupSpecContext } from "./ASNParser";
import { OptionalGroupContext } from "./ASNParser";
import { RequiredTokenContext } from "./ASNParser";
import { LiteralContext } from "./ASNParser";
import { PrimitiveFieldNameContext } from "./ASNParser";
import { FieldSpecContext } from "./ASNParser";
import { TypeFieldSpecContext } from "./ASNParser";
import { TypeOptionalitySpecContext } from "./ASNParser";
import { FixedTypeValueFieldSpecContext } from "./ASNParser";
import { ValueOptionalitySpecContext } from "./ASNParser";
import { VariableTypeValueFieldSpecContext } from "./ASNParser";
import { FixedTypeValueSetFieldSpecContext } from "./ASNParser";
import { ValueSetOptionalitySpecContext } from "./ASNParser";
import { ObjectContext } from "./ASNParser";
import { ParameterizedObjectContext } from "./ASNParser";
import { DefinedObjectContext } from "./ASNParser";
import { ObjectSetContext } from "./ASNParser";
import { ObjectSetSpecContext } from "./ASNParser";
import { FieldNameContext } from "./ASNParser";
import { ValueSetContext } from "./ASNParser";
import { ElementSetSpecsContext } from "./ASNParser";
import { RootElementSetSpecContext } from "./ASNParser";
import { AdditionalElementSetSpecContext } from "./ASNParser";
import { ElementSetSpecContext } from "./ASNParser";
import { UnionsContext } from "./ASNParser";
import { ExclusionsContext } from "./ASNParser";
import { IntersectionsContext } from "./ASNParser";
import { UnionMarkContext } from "./ASNParser";
import { IntersectionMarkContext } from "./ASNParser";
import { ElementsContext } from "./ASNParser";
import { ObjectSetElementsContext } from "./ASNParser";
import { IntersectionElementsContext } from "./ASNParser";
import { SubtypeElementsContext } from "./ASNParser";
import { VariableTypeValueSetFieldSpecContext } from "./ASNParser";
import { ObjectFieldSpecContext } from "./ASNParser";
import { ObjectOptionalitySpecContext } from "./ASNParser";
import { ObjectSetFieldSpecContext } from "./ASNParser";
import { ObjectSetOptionalitySpecContext } from "./ASNParser";
import { TypeAssignmentContext } from "./ASNParser";
import { ValueAssignmentContext } from "./ASNParser";
import { AsnTypeContext } from "./ASNParser";
import { BuiltinTypeContext } from "./ASNParser";
import { ObjectClassFieldTypeContext } from "./ASNParser";
import { SetTypeContext } from "./ASNParser";
import { SetOfTypeContext } from "./ASNParser";
import { ReferencedTypeContext } from "./ASNParser";
import { DefinedTypeContext } from "./ASNParser";
import { ConstraintContext } from "./ASNParser";
import { ConstraintSpecContext } from "./ASNParser";
import { UserDefinedConstraintContext } from "./ASNParser";
import { GeneralConstraintContext } from "./ASNParser";
import { UserDefinedConstraintParameterContext } from "./ASNParser";
import { TableConstraintContext } from "./ASNParser";
import { SimpleTableConstraintContext } from "./ASNParser";
import { ContentsConstraintContext } from "./ASNParser";
import { ComponentPresenceListsContext } from "./ASNParser";
import { ComponentPresenceListContext } from "./ASNParser";
import { ComponentPresenceContext } from "./ASNParser";
import { SubtypeConstraintContext } from "./ASNParser";
import { ValueContext } from "./ASNParser";
import { BuiltinValueContext } from "./ASNParser";
import { ObjectIdentifierValueContext } from "./ASNParser";
import { ObjIdComponentsListContext } from "./ASNParser";
import { ObjIdComponentsContext } from "./ASNParser";
import { IntegerValueContext } from "./ASNParser";
import { ChoiceValueContext } from "./ASNParser";
import { EnumeratedValueContext } from "./ASNParser";
import { SignedNumberContext } from "./ASNParser";
import { ChoiceTypeContext } from "./ASNParser";
import { AlternativeTypeListsContext } from "./ASNParser";
import { ExtensionAdditionAlternativesContext } from "./ASNParser";
import { ExtensionAdditionAlternativesListContext } from "./ASNParser";
import { ExtensionAdditionAlternativeContext } from "./ASNParser";
import { ExtensionAdditionAlternativesGroupContext } from "./ASNParser";
import { RootAlternativeTypeListContext } from "./ASNParser";
import { AlternativeTypeListContext } from "./ASNParser";
import { NamedTypeContext } from "./ASNParser";
import { EnumeratedTypeContext } from "./ASNParser";
import { EnumerationsContext } from "./ASNParser";
import { RootEnumerationContext } from "./ASNParser";
import { EnumerationContext } from "./ASNParser";
import { EnumerationItemContext } from "./ASNParser";
import { NamedNumberContext } from "./ASNParser";
import { DefinedValueContext } from "./ASNParser";
import { ParameterizedValueContext } from "./ASNParser";
import { SimpleDefinedValueContext } from "./ASNParser";
import { ActualParameterListContext } from "./ASNParser";
import { ActualParameterContext } from "./ASNParser";
import { ExceptionSpecContext } from "./ASNParser";
import { ExceptionIdentificationContext } from "./ASNParser";
import { AdditionalEnumerationContext } from "./ASNParser";
import { IntegerTypeContext } from "./ASNParser";
import { NamedNumberListContext } from "./ASNParser";
import { ObjectidentifiertypeContext } from "./ASNParser";
import { ComponentRelationConstraintContext } from "./ASNParser";
import { AtNotationContext } from "./ASNParser";
import { LevelContext } from "./ASNParser";
import { ComponentIdListContext } from "./ASNParser";
import { OctetStringTypeContext } from "./ASNParser";
import { BitStringTypeContext } from "./ASNParser";
import { NamedBitListContext } from "./ASNParser";
import { NamedBitContext } from "./ASNParser";
import { BooleanValueContext } from "./ASNParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `ASNParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface ASNVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `ASNParser.modules`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModules?: (ctx: ModulesContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.moduleDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModuleDefinition?: (ctx: ModuleDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.tagDefault`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTagDefault?: (ctx: TagDefaultContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.extensionDefault`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExtensionDefault?: (ctx: ExtensionDefaultContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.moduleBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModuleBody?: (ctx: ModuleBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.exports`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExports?: (ctx: ExportsContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.symbolsExported`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSymbolsExported?: (ctx: SymbolsExportedContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.imports`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImports?: (ctx: ImportsContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.symbolsImported`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSymbolsImported?: (ctx: SymbolsImportedContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.symbolsFromModuleList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSymbolsFromModuleList?: (ctx: SymbolsFromModuleListContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.symbolsFromModule`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSymbolsFromModule?: (ctx: SymbolsFromModuleContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.globalModuleReference`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGlobalModuleReference?: (ctx: GlobalModuleReferenceContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.assignedIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignedIdentifier?: (ctx: AssignedIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.symbolList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSymbolList?: (ctx: SymbolListContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.symbol`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSymbol?: (ctx: SymbolContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.assignmentList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignmentList?: (ctx: AssignmentListContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.assignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignment?: (ctx: AssignmentContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.sequenceType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSequenceType?: (ctx: SequenceTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.extensionAndException`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExtensionAndException?: (ctx: ExtensionAndExceptionContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.optionalExtensionMarker`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOptionalExtensionMarker?: (ctx: OptionalExtensionMarkerContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.componentTypeLists`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComponentTypeLists?: (ctx: ComponentTypeListsContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.rootComponentTypeList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRootComponentTypeList?: (ctx: RootComponentTypeListContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.componentTypeList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComponentTypeList?: (ctx: ComponentTypeListContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.componentType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComponentType?: (ctx: ComponentTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.extensionAdditions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExtensionAdditions?: (ctx: ExtensionAdditionsContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.extensionAdditionList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExtensionAdditionList?: (ctx: ExtensionAdditionListContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.extensionAddition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExtensionAddition?: (ctx: ExtensionAdditionContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.extensionAdditionGroup`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExtensionAdditionGroup?: (ctx: ExtensionAdditionGroupContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.versionNumber`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVersionNumber?: (ctx: VersionNumberContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.sequenceOfType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSequenceOfType?: (ctx: SequenceOfTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.sizeConstraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSizeConstraint?: (ctx: SizeConstraintContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.parameterizedAssignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameterizedAssignment?: (ctx: ParameterizedAssignmentContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.parameterList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameterList?: (ctx: ParameterListContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.parameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameter?: (ctx: ParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.paramGovernor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParamGovernor?: (ctx: ParamGovernorContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.governor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGovernor?: (ctx: GovernorContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.objectClassAssignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObjectClassAssignment?: (ctx: ObjectClassAssignmentContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.objectClass`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObjectClass?: (ctx: ObjectClassContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.definedObjectClass`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefinedObjectClass?: (ctx: DefinedObjectClassContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.usefulObjectClassReference`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUsefulObjectClassReference?: (ctx: UsefulObjectClassReferenceContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.externalObjectClassReference`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExternalObjectClassReference?: (ctx: ExternalObjectClassReferenceContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.objectClassDefn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObjectClassDefn?: (ctx: ObjectClassDefnContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.withSyntaxSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWithSyntaxSpec?: (ctx: WithSyntaxSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.syntaxList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSyntaxList?: (ctx: SyntaxListContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.tokenOrGroupSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTokenOrGroupSpec?: (ctx: TokenOrGroupSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.optionalGroup`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOptionalGroup?: (ctx: OptionalGroupContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.requiredToken`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRequiredToken?: (ctx: RequiredTokenContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral?: (ctx: LiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.primitiveFieldName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimitiveFieldName?: (ctx: PrimitiveFieldNameContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.fieldSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldSpec?: (ctx: FieldSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.typeFieldSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeFieldSpec?: (ctx: TypeFieldSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.typeOptionalitySpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeOptionalitySpec?: (ctx: TypeOptionalitySpecContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.fixedTypeValueFieldSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFixedTypeValueFieldSpec?: (ctx: FixedTypeValueFieldSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.valueOptionalitySpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValueOptionalitySpec?: (ctx: ValueOptionalitySpecContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.variableTypeValueFieldSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableTypeValueFieldSpec?: (ctx: VariableTypeValueFieldSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.fixedTypeValueSetFieldSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFixedTypeValueSetFieldSpec?: (ctx: FixedTypeValueSetFieldSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.valueSetOptionalitySpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValueSetOptionalitySpec?: (ctx: ValueSetOptionalitySpecContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.object`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObject?: (ctx: ObjectContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.parameterizedObject`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameterizedObject?: (ctx: ParameterizedObjectContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.definedObject`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefinedObject?: (ctx: DefinedObjectContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.objectSet`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObjectSet?: (ctx: ObjectSetContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.objectSetSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObjectSetSpec?: (ctx: ObjectSetSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.fieldName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldName?: (ctx: FieldNameContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.valueSet`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValueSet?: (ctx: ValueSetContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.elementSetSpecs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElementSetSpecs?: (ctx: ElementSetSpecsContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.rootElementSetSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRootElementSetSpec?: (ctx: RootElementSetSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.additionalElementSetSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdditionalElementSetSpec?: (ctx: AdditionalElementSetSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.elementSetSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElementSetSpec?: (ctx: ElementSetSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.unions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnions?: (ctx: UnionsContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.exclusions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExclusions?: (ctx: ExclusionsContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.intersections`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntersections?: (ctx: IntersectionsContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.unionMark`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnionMark?: (ctx: UnionMarkContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.intersectionMark`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntersectionMark?: (ctx: IntersectionMarkContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.elements`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElements?: (ctx: ElementsContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.objectSetElements`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObjectSetElements?: (ctx: ObjectSetElementsContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.intersectionElements`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntersectionElements?: (ctx: IntersectionElementsContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.subtypeElements`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubtypeElements?: (ctx: SubtypeElementsContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.variableTypeValueSetFieldSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableTypeValueSetFieldSpec?: (ctx: VariableTypeValueSetFieldSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.objectFieldSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObjectFieldSpec?: (ctx: ObjectFieldSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.objectOptionalitySpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObjectOptionalitySpec?: (ctx: ObjectOptionalitySpecContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.objectSetFieldSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObjectSetFieldSpec?: (ctx: ObjectSetFieldSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.objectSetOptionalitySpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObjectSetOptionalitySpec?: (ctx: ObjectSetOptionalitySpecContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.typeAssignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeAssignment?: (ctx: TypeAssignmentContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.valueAssignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValueAssignment?: (ctx: ValueAssignmentContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.asnType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAsnType?: (ctx: AsnTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.builtinType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBuiltinType?: (ctx: BuiltinTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.objectClassFieldType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObjectClassFieldType?: (ctx: ObjectClassFieldTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.setType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetType?: (ctx: SetTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.setOfType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetOfType?: (ctx: SetOfTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.referencedType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReferencedType?: (ctx: ReferencedTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.definedType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefinedType?: (ctx: DefinedTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.constraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstraint?: (ctx: ConstraintContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.constraintSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstraintSpec?: (ctx: ConstraintSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.userDefinedConstraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUserDefinedConstraint?: (ctx: UserDefinedConstraintContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.generalConstraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGeneralConstraint?: (ctx: GeneralConstraintContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.userDefinedConstraintParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUserDefinedConstraintParameter?: (ctx: UserDefinedConstraintParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.tableConstraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableConstraint?: (ctx: TableConstraintContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.simpleTableConstraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimpleTableConstraint?: (ctx: SimpleTableConstraintContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.contentsConstraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitContentsConstraint?: (ctx: ContentsConstraintContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.componentPresenceLists`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComponentPresenceLists?: (ctx: ComponentPresenceListsContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.componentPresenceList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComponentPresenceList?: (ctx: ComponentPresenceListContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.componentPresence`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComponentPresence?: (ctx: ComponentPresenceContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.subtypeConstraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubtypeConstraint?: (ctx: SubtypeConstraintContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValue?: (ctx: ValueContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.builtinValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBuiltinValue?: (ctx: BuiltinValueContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.objectIdentifierValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObjectIdentifierValue?: (ctx: ObjectIdentifierValueContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.objIdComponentsList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObjIdComponentsList?: (ctx: ObjIdComponentsListContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.objIdComponents`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObjIdComponents?: (ctx: ObjIdComponentsContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.integerValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntegerValue?: (ctx: IntegerValueContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.choiceValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitChoiceValue?: (ctx: ChoiceValueContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.enumeratedValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumeratedValue?: (ctx: EnumeratedValueContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.signedNumber`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSignedNumber?: (ctx: SignedNumberContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.choiceType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitChoiceType?: (ctx: ChoiceTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.alternativeTypeLists`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlternativeTypeLists?: (ctx: AlternativeTypeListsContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.extensionAdditionAlternatives`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExtensionAdditionAlternatives?: (ctx: ExtensionAdditionAlternativesContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.extensionAdditionAlternativesList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExtensionAdditionAlternativesList?: (ctx: ExtensionAdditionAlternativesListContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.extensionAdditionAlternative`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExtensionAdditionAlternative?: (ctx: ExtensionAdditionAlternativeContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.extensionAdditionAlternativesGroup`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExtensionAdditionAlternativesGroup?: (ctx: ExtensionAdditionAlternativesGroupContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.rootAlternativeTypeList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRootAlternativeTypeList?: (ctx: RootAlternativeTypeListContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.alternativeTypeList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlternativeTypeList?: (ctx: AlternativeTypeListContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.namedType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamedType?: (ctx: NamedTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.enumeratedType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumeratedType?: (ctx: EnumeratedTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.enumerations`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumerations?: (ctx: EnumerationsContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.rootEnumeration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRootEnumeration?: (ctx: RootEnumerationContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.enumeration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumeration?: (ctx: EnumerationContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.enumerationItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumerationItem?: (ctx: EnumerationItemContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.namedNumber`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamedNumber?: (ctx: NamedNumberContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.definedValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefinedValue?: (ctx: DefinedValueContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.parameterizedValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameterizedValue?: (ctx: ParameterizedValueContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.simpleDefinedValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimpleDefinedValue?: (ctx: SimpleDefinedValueContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.actualParameterList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitActualParameterList?: (ctx: ActualParameterListContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.actualParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitActualParameter?: (ctx: ActualParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.exceptionSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExceptionSpec?: (ctx: ExceptionSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.exceptionIdentification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExceptionIdentification?: (ctx: ExceptionIdentificationContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.additionalEnumeration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdditionalEnumeration?: (ctx: AdditionalEnumerationContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.integerType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntegerType?: (ctx: IntegerTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.namedNumberList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamedNumberList?: (ctx: NamedNumberListContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.objectidentifiertype`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObjectidentifiertype?: (ctx: ObjectidentifiertypeContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.componentRelationConstraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComponentRelationConstraint?: (ctx: ComponentRelationConstraintContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.atNotation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAtNotation?: (ctx: AtNotationContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.level`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLevel?: (ctx: LevelContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.componentIdList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComponentIdList?: (ctx: ComponentIdListContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.octetStringType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOctetStringType?: (ctx: OctetStringTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.bitStringType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitStringType?: (ctx: BitStringTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.namedBitList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamedBitList?: (ctx: NamedBitListContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.namedBit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamedBit?: (ctx: NamedBitContext) => Result;

	/**
	 * Visit a parse tree produced by `ASNParser.booleanValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanValue?: (ctx: BooleanValueContext) => Result;
}

