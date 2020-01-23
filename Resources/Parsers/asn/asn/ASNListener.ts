// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/asn/asn/ASN.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `ASNParser`.
 */
export interface ASNListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `ASNParser.modules`.
	 * @param ctx the parse tree
	 */
	enterModules?: (ctx: ModulesContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.modules`.
	 * @param ctx the parse tree
	 */
	exitModules?: (ctx: ModulesContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.moduleDefinition`.
	 * @param ctx the parse tree
	 */
	enterModuleDefinition?: (ctx: ModuleDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.moduleDefinition`.
	 * @param ctx the parse tree
	 */
	exitModuleDefinition?: (ctx: ModuleDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.tagDefault`.
	 * @param ctx the parse tree
	 */
	enterTagDefault?: (ctx: TagDefaultContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.tagDefault`.
	 * @param ctx the parse tree
	 */
	exitTagDefault?: (ctx: TagDefaultContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.extensionDefault`.
	 * @param ctx the parse tree
	 */
	enterExtensionDefault?: (ctx: ExtensionDefaultContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.extensionDefault`.
	 * @param ctx the parse tree
	 */
	exitExtensionDefault?: (ctx: ExtensionDefaultContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.moduleBody`.
	 * @param ctx the parse tree
	 */
	enterModuleBody?: (ctx: ModuleBodyContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.moduleBody`.
	 * @param ctx the parse tree
	 */
	exitModuleBody?: (ctx: ModuleBodyContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.exports`.
	 * @param ctx the parse tree
	 */
	enterExports?: (ctx: ExportsContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.exports`.
	 * @param ctx the parse tree
	 */
	exitExports?: (ctx: ExportsContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.symbolsExported`.
	 * @param ctx the parse tree
	 */
	enterSymbolsExported?: (ctx: SymbolsExportedContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.symbolsExported`.
	 * @param ctx the parse tree
	 */
	exitSymbolsExported?: (ctx: SymbolsExportedContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.imports`.
	 * @param ctx the parse tree
	 */
	enterImports?: (ctx: ImportsContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.imports`.
	 * @param ctx the parse tree
	 */
	exitImports?: (ctx: ImportsContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.symbolsImported`.
	 * @param ctx the parse tree
	 */
	enterSymbolsImported?: (ctx: SymbolsImportedContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.symbolsImported`.
	 * @param ctx the parse tree
	 */
	exitSymbolsImported?: (ctx: SymbolsImportedContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.symbolsFromModuleList`.
	 * @param ctx the parse tree
	 */
	enterSymbolsFromModuleList?: (ctx: SymbolsFromModuleListContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.symbolsFromModuleList`.
	 * @param ctx the parse tree
	 */
	exitSymbolsFromModuleList?: (ctx: SymbolsFromModuleListContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.symbolsFromModule`.
	 * @param ctx the parse tree
	 */
	enterSymbolsFromModule?: (ctx: SymbolsFromModuleContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.symbolsFromModule`.
	 * @param ctx the parse tree
	 */
	exitSymbolsFromModule?: (ctx: SymbolsFromModuleContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.globalModuleReference`.
	 * @param ctx the parse tree
	 */
	enterGlobalModuleReference?: (ctx: GlobalModuleReferenceContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.globalModuleReference`.
	 * @param ctx the parse tree
	 */
	exitGlobalModuleReference?: (ctx: GlobalModuleReferenceContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.assignedIdentifier`.
	 * @param ctx the parse tree
	 */
	enterAssignedIdentifier?: (ctx: AssignedIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.assignedIdentifier`.
	 * @param ctx the parse tree
	 */
	exitAssignedIdentifier?: (ctx: AssignedIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.symbolList`.
	 * @param ctx the parse tree
	 */
	enterSymbolList?: (ctx: SymbolListContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.symbolList`.
	 * @param ctx the parse tree
	 */
	exitSymbolList?: (ctx: SymbolListContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.symbol`.
	 * @param ctx the parse tree
	 */
	enterSymbol?: (ctx: SymbolContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.symbol`.
	 * @param ctx the parse tree
	 */
	exitSymbol?: (ctx: SymbolContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.assignmentList`.
	 * @param ctx the parse tree
	 */
	enterAssignmentList?: (ctx: AssignmentListContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.assignmentList`.
	 * @param ctx the parse tree
	 */
	exitAssignmentList?: (ctx: AssignmentListContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.assignment`.
	 * @param ctx the parse tree
	 */
	enterAssignment?: (ctx: AssignmentContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.assignment`.
	 * @param ctx the parse tree
	 */
	exitAssignment?: (ctx: AssignmentContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.sequenceType`.
	 * @param ctx the parse tree
	 */
	enterSequenceType?: (ctx: SequenceTypeContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.sequenceType`.
	 * @param ctx the parse tree
	 */
	exitSequenceType?: (ctx: SequenceTypeContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.extensionAndException`.
	 * @param ctx the parse tree
	 */
	enterExtensionAndException?: (ctx: ExtensionAndExceptionContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.extensionAndException`.
	 * @param ctx the parse tree
	 */
	exitExtensionAndException?: (ctx: ExtensionAndExceptionContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.optionalExtensionMarker`.
	 * @param ctx the parse tree
	 */
	enterOptionalExtensionMarker?: (ctx: OptionalExtensionMarkerContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.optionalExtensionMarker`.
	 * @param ctx the parse tree
	 */
	exitOptionalExtensionMarker?: (ctx: OptionalExtensionMarkerContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.componentTypeLists`.
	 * @param ctx the parse tree
	 */
	enterComponentTypeLists?: (ctx: ComponentTypeListsContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.componentTypeLists`.
	 * @param ctx the parse tree
	 */
	exitComponentTypeLists?: (ctx: ComponentTypeListsContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.rootComponentTypeList`.
	 * @param ctx the parse tree
	 */
	enterRootComponentTypeList?: (ctx: RootComponentTypeListContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.rootComponentTypeList`.
	 * @param ctx the parse tree
	 */
	exitRootComponentTypeList?: (ctx: RootComponentTypeListContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.componentTypeList`.
	 * @param ctx the parse tree
	 */
	enterComponentTypeList?: (ctx: ComponentTypeListContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.componentTypeList`.
	 * @param ctx the parse tree
	 */
	exitComponentTypeList?: (ctx: ComponentTypeListContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.componentType`.
	 * @param ctx the parse tree
	 */
	enterComponentType?: (ctx: ComponentTypeContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.componentType`.
	 * @param ctx the parse tree
	 */
	exitComponentType?: (ctx: ComponentTypeContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.extensionAdditions`.
	 * @param ctx the parse tree
	 */
	enterExtensionAdditions?: (ctx: ExtensionAdditionsContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.extensionAdditions`.
	 * @param ctx the parse tree
	 */
	exitExtensionAdditions?: (ctx: ExtensionAdditionsContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.extensionAdditionList`.
	 * @param ctx the parse tree
	 */
	enterExtensionAdditionList?: (ctx: ExtensionAdditionListContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.extensionAdditionList`.
	 * @param ctx the parse tree
	 */
	exitExtensionAdditionList?: (ctx: ExtensionAdditionListContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.extensionAddition`.
	 * @param ctx the parse tree
	 */
	enterExtensionAddition?: (ctx: ExtensionAdditionContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.extensionAddition`.
	 * @param ctx the parse tree
	 */
	exitExtensionAddition?: (ctx: ExtensionAdditionContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.extensionAdditionGroup`.
	 * @param ctx the parse tree
	 */
	enterExtensionAdditionGroup?: (ctx: ExtensionAdditionGroupContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.extensionAdditionGroup`.
	 * @param ctx the parse tree
	 */
	exitExtensionAdditionGroup?: (ctx: ExtensionAdditionGroupContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.versionNumber`.
	 * @param ctx the parse tree
	 */
	enterVersionNumber?: (ctx: VersionNumberContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.versionNumber`.
	 * @param ctx the parse tree
	 */
	exitVersionNumber?: (ctx: VersionNumberContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.sequenceOfType`.
	 * @param ctx the parse tree
	 */
	enterSequenceOfType?: (ctx: SequenceOfTypeContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.sequenceOfType`.
	 * @param ctx the parse tree
	 */
	exitSequenceOfType?: (ctx: SequenceOfTypeContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.sizeConstraint`.
	 * @param ctx the parse tree
	 */
	enterSizeConstraint?: (ctx: SizeConstraintContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.sizeConstraint`.
	 * @param ctx the parse tree
	 */
	exitSizeConstraint?: (ctx: SizeConstraintContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.parameterizedAssignment`.
	 * @param ctx the parse tree
	 */
	enterParameterizedAssignment?: (ctx: ParameterizedAssignmentContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.parameterizedAssignment`.
	 * @param ctx the parse tree
	 */
	exitParameterizedAssignment?: (ctx: ParameterizedAssignmentContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.parameterList`.
	 * @param ctx the parse tree
	 */
	enterParameterList?: (ctx: ParameterListContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.parameterList`.
	 * @param ctx the parse tree
	 */
	exitParameterList?: (ctx: ParameterListContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.parameter`.
	 * @param ctx the parse tree
	 */
	enterParameter?: (ctx: ParameterContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.parameter`.
	 * @param ctx the parse tree
	 */
	exitParameter?: (ctx: ParameterContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.paramGovernor`.
	 * @param ctx the parse tree
	 */
	enterParamGovernor?: (ctx: ParamGovernorContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.paramGovernor`.
	 * @param ctx the parse tree
	 */
	exitParamGovernor?: (ctx: ParamGovernorContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.governor`.
	 * @param ctx the parse tree
	 */
	enterGovernor?: (ctx: GovernorContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.governor`.
	 * @param ctx the parse tree
	 */
	exitGovernor?: (ctx: GovernorContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.objectClassAssignment`.
	 * @param ctx the parse tree
	 */
	enterObjectClassAssignment?: (ctx: ObjectClassAssignmentContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.objectClassAssignment`.
	 * @param ctx the parse tree
	 */
	exitObjectClassAssignment?: (ctx: ObjectClassAssignmentContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.objectClass`.
	 * @param ctx the parse tree
	 */
	enterObjectClass?: (ctx: ObjectClassContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.objectClass`.
	 * @param ctx the parse tree
	 */
	exitObjectClass?: (ctx: ObjectClassContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.definedObjectClass`.
	 * @param ctx the parse tree
	 */
	enterDefinedObjectClass?: (ctx: DefinedObjectClassContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.definedObjectClass`.
	 * @param ctx the parse tree
	 */
	exitDefinedObjectClass?: (ctx: DefinedObjectClassContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.usefulObjectClassReference`.
	 * @param ctx the parse tree
	 */
	enterUsefulObjectClassReference?: (ctx: UsefulObjectClassReferenceContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.usefulObjectClassReference`.
	 * @param ctx the parse tree
	 */
	exitUsefulObjectClassReference?: (ctx: UsefulObjectClassReferenceContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.externalObjectClassReference`.
	 * @param ctx the parse tree
	 */
	enterExternalObjectClassReference?: (ctx: ExternalObjectClassReferenceContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.externalObjectClassReference`.
	 * @param ctx the parse tree
	 */
	exitExternalObjectClassReference?: (ctx: ExternalObjectClassReferenceContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.objectClassDefn`.
	 * @param ctx the parse tree
	 */
	enterObjectClassDefn?: (ctx: ObjectClassDefnContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.objectClassDefn`.
	 * @param ctx the parse tree
	 */
	exitObjectClassDefn?: (ctx: ObjectClassDefnContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.withSyntaxSpec`.
	 * @param ctx the parse tree
	 */
	enterWithSyntaxSpec?: (ctx: WithSyntaxSpecContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.withSyntaxSpec`.
	 * @param ctx the parse tree
	 */
	exitWithSyntaxSpec?: (ctx: WithSyntaxSpecContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.syntaxList`.
	 * @param ctx the parse tree
	 */
	enterSyntaxList?: (ctx: SyntaxListContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.syntaxList`.
	 * @param ctx the parse tree
	 */
	exitSyntaxList?: (ctx: SyntaxListContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.tokenOrGroupSpec`.
	 * @param ctx the parse tree
	 */
	enterTokenOrGroupSpec?: (ctx: TokenOrGroupSpecContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.tokenOrGroupSpec`.
	 * @param ctx the parse tree
	 */
	exitTokenOrGroupSpec?: (ctx: TokenOrGroupSpecContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.optionalGroup`.
	 * @param ctx the parse tree
	 */
	enterOptionalGroup?: (ctx: OptionalGroupContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.optionalGroup`.
	 * @param ctx the parse tree
	 */
	exitOptionalGroup?: (ctx: OptionalGroupContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.requiredToken`.
	 * @param ctx the parse tree
	 */
	enterRequiredToken?: (ctx: RequiredTokenContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.requiredToken`.
	 * @param ctx the parse tree
	 */
	exitRequiredToken?: (ctx: RequiredTokenContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.literal`.
	 * @param ctx the parse tree
	 */
	enterLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.literal`.
	 * @param ctx the parse tree
	 */
	exitLiteral?: (ctx: LiteralContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.primitiveFieldName`.
	 * @param ctx the parse tree
	 */
	enterPrimitiveFieldName?: (ctx: PrimitiveFieldNameContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.primitiveFieldName`.
	 * @param ctx the parse tree
	 */
	exitPrimitiveFieldName?: (ctx: PrimitiveFieldNameContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.fieldSpec`.
	 * @param ctx the parse tree
	 */
	enterFieldSpec?: (ctx: FieldSpecContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.fieldSpec`.
	 * @param ctx the parse tree
	 */
	exitFieldSpec?: (ctx: FieldSpecContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.typeFieldSpec`.
	 * @param ctx the parse tree
	 */
	enterTypeFieldSpec?: (ctx: TypeFieldSpecContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.typeFieldSpec`.
	 * @param ctx the parse tree
	 */
	exitTypeFieldSpec?: (ctx: TypeFieldSpecContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.typeOptionalitySpec`.
	 * @param ctx the parse tree
	 */
	enterTypeOptionalitySpec?: (ctx: TypeOptionalitySpecContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.typeOptionalitySpec`.
	 * @param ctx the parse tree
	 */
	exitTypeOptionalitySpec?: (ctx: TypeOptionalitySpecContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.fixedTypeValueFieldSpec`.
	 * @param ctx the parse tree
	 */
	enterFixedTypeValueFieldSpec?: (ctx: FixedTypeValueFieldSpecContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.fixedTypeValueFieldSpec`.
	 * @param ctx the parse tree
	 */
	exitFixedTypeValueFieldSpec?: (ctx: FixedTypeValueFieldSpecContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.valueOptionalitySpec`.
	 * @param ctx the parse tree
	 */
	enterValueOptionalitySpec?: (ctx: ValueOptionalitySpecContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.valueOptionalitySpec`.
	 * @param ctx the parse tree
	 */
	exitValueOptionalitySpec?: (ctx: ValueOptionalitySpecContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.variableTypeValueFieldSpec`.
	 * @param ctx the parse tree
	 */
	enterVariableTypeValueFieldSpec?: (ctx: VariableTypeValueFieldSpecContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.variableTypeValueFieldSpec`.
	 * @param ctx the parse tree
	 */
	exitVariableTypeValueFieldSpec?: (ctx: VariableTypeValueFieldSpecContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.fixedTypeValueSetFieldSpec`.
	 * @param ctx the parse tree
	 */
	enterFixedTypeValueSetFieldSpec?: (ctx: FixedTypeValueSetFieldSpecContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.fixedTypeValueSetFieldSpec`.
	 * @param ctx the parse tree
	 */
	exitFixedTypeValueSetFieldSpec?: (ctx: FixedTypeValueSetFieldSpecContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.valueSetOptionalitySpec`.
	 * @param ctx the parse tree
	 */
	enterValueSetOptionalitySpec?: (ctx: ValueSetOptionalitySpecContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.valueSetOptionalitySpec`.
	 * @param ctx the parse tree
	 */
	exitValueSetOptionalitySpec?: (ctx: ValueSetOptionalitySpecContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.object`.
	 * @param ctx the parse tree
	 */
	enterObject?: (ctx: ObjectContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.object`.
	 * @param ctx the parse tree
	 */
	exitObject?: (ctx: ObjectContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.parameterizedObject`.
	 * @param ctx the parse tree
	 */
	enterParameterizedObject?: (ctx: ParameterizedObjectContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.parameterizedObject`.
	 * @param ctx the parse tree
	 */
	exitParameterizedObject?: (ctx: ParameterizedObjectContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.definedObject`.
	 * @param ctx the parse tree
	 */
	enterDefinedObject?: (ctx: DefinedObjectContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.definedObject`.
	 * @param ctx the parse tree
	 */
	exitDefinedObject?: (ctx: DefinedObjectContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.objectSet`.
	 * @param ctx the parse tree
	 */
	enterObjectSet?: (ctx: ObjectSetContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.objectSet`.
	 * @param ctx the parse tree
	 */
	exitObjectSet?: (ctx: ObjectSetContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.objectSetSpec`.
	 * @param ctx the parse tree
	 */
	enterObjectSetSpec?: (ctx: ObjectSetSpecContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.objectSetSpec`.
	 * @param ctx the parse tree
	 */
	exitObjectSetSpec?: (ctx: ObjectSetSpecContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.fieldName`.
	 * @param ctx the parse tree
	 */
	enterFieldName?: (ctx: FieldNameContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.fieldName`.
	 * @param ctx the parse tree
	 */
	exitFieldName?: (ctx: FieldNameContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.valueSet`.
	 * @param ctx the parse tree
	 */
	enterValueSet?: (ctx: ValueSetContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.valueSet`.
	 * @param ctx the parse tree
	 */
	exitValueSet?: (ctx: ValueSetContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.elementSetSpecs`.
	 * @param ctx the parse tree
	 */
	enterElementSetSpecs?: (ctx: ElementSetSpecsContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.elementSetSpecs`.
	 * @param ctx the parse tree
	 */
	exitElementSetSpecs?: (ctx: ElementSetSpecsContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.rootElementSetSpec`.
	 * @param ctx the parse tree
	 */
	enterRootElementSetSpec?: (ctx: RootElementSetSpecContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.rootElementSetSpec`.
	 * @param ctx the parse tree
	 */
	exitRootElementSetSpec?: (ctx: RootElementSetSpecContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.additionalElementSetSpec`.
	 * @param ctx the parse tree
	 */
	enterAdditionalElementSetSpec?: (ctx: AdditionalElementSetSpecContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.additionalElementSetSpec`.
	 * @param ctx the parse tree
	 */
	exitAdditionalElementSetSpec?: (ctx: AdditionalElementSetSpecContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.elementSetSpec`.
	 * @param ctx the parse tree
	 */
	enterElementSetSpec?: (ctx: ElementSetSpecContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.elementSetSpec`.
	 * @param ctx the parse tree
	 */
	exitElementSetSpec?: (ctx: ElementSetSpecContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.unions`.
	 * @param ctx the parse tree
	 */
	enterUnions?: (ctx: UnionsContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.unions`.
	 * @param ctx the parse tree
	 */
	exitUnions?: (ctx: UnionsContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.exclusions`.
	 * @param ctx the parse tree
	 */
	enterExclusions?: (ctx: ExclusionsContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.exclusions`.
	 * @param ctx the parse tree
	 */
	exitExclusions?: (ctx: ExclusionsContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.intersections`.
	 * @param ctx the parse tree
	 */
	enterIntersections?: (ctx: IntersectionsContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.intersections`.
	 * @param ctx the parse tree
	 */
	exitIntersections?: (ctx: IntersectionsContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.unionMark`.
	 * @param ctx the parse tree
	 */
	enterUnionMark?: (ctx: UnionMarkContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.unionMark`.
	 * @param ctx the parse tree
	 */
	exitUnionMark?: (ctx: UnionMarkContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.intersectionMark`.
	 * @param ctx the parse tree
	 */
	enterIntersectionMark?: (ctx: IntersectionMarkContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.intersectionMark`.
	 * @param ctx the parse tree
	 */
	exitIntersectionMark?: (ctx: IntersectionMarkContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.elements`.
	 * @param ctx the parse tree
	 */
	enterElements?: (ctx: ElementsContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.elements`.
	 * @param ctx the parse tree
	 */
	exitElements?: (ctx: ElementsContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.objectSetElements`.
	 * @param ctx the parse tree
	 */
	enterObjectSetElements?: (ctx: ObjectSetElementsContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.objectSetElements`.
	 * @param ctx the parse tree
	 */
	exitObjectSetElements?: (ctx: ObjectSetElementsContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.intersectionElements`.
	 * @param ctx the parse tree
	 */
	enterIntersectionElements?: (ctx: IntersectionElementsContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.intersectionElements`.
	 * @param ctx the parse tree
	 */
	exitIntersectionElements?: (ctx: IntersectionElementsContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.subtypeElements`.
	 * @param ctx the parse tree
	 */
	enterSubtypeElements?: (ctx: SubtypeElementsContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.subtypeElements`.
	 * @param ctx the parse tree
	 */
	exitSubtypeElements?: (ctx: SubtypeElementsContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.variableTypeValueSetFieldSpec`.
	 * @param ctx the parse tree
	 */
	enterVariableTypeValueSetFieldSpec?: (ctx: VariableTypeValueSetFieldSpecContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.variableTypeValueSetFieldSpec`.
	 * @param ctx the parse tree
	 */
	exitVariableTypeValueSetFieldSpec?: (ctx: VariableTypeValueSetFieldSpecContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.objectFieldSpec`.
	 * @param ctx the parse tree
	 */
	enterObjectFieldSpec?: (ctx: ObjectFieldSpecContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.objectFieldSpec`.
	 * @param ctx the parse tree
	 */
	exitObjectFieldSpec?: (ctx: ObjectFieldSpecContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.objectOptionalitySpec`.
	 * @param ctx the parse tree
	 */
	enterObjectOptionalitySpec?: (ctx: ObjectOptionalitySpecContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.objectOptionalitySpec`.
	 * @param ctx the parse tree
	 */
	exitObjectOptionalitySpec?: (ctx: ObjectOptionalitySpecContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.objectSetFieldSpec`.
	 * @param ctx the parse tree
	 */
	enterObjectSetFieldSpec?: (ctx: ObjectSetFieldSpecContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.objectSetFieldSpec`.
	 * @param ctx the parse tree
	 */
	exitObjectSetFieldSpec?: (ctx: ObjectSetFieldSpecContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.objectSetOptionalitySpec`.
	 * @param ctx the parse tree
	 */
	enterObjectSetOptionalitySpec?: (ctx: ObjectSetOptionalitySpecContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.objectSetOptionalitySpec`.
	 * @param ctx the parse tree
	 */
	exitObjectSetOptionalitySpec?: (ctx: ObjectSetOptionalitySpecContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.typeAssignment`.
	 * @param ctx the parse tree
	 */
	enterTypeAssignment?: (ctx: TypeAssignmentContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.typeAssignment`.
	 * @param ctx the parse tree
	 */
	exitTypeAssignment?: (ctx: TypeAssignmentContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.valueAssignment`.
	 * @param ctx the parse tree
	 */
	enterValueAssignment?: (ctx: ValueAssignmentContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.valueAssignment`.
	 * @param ctx the parse tree
	 */
	exitValueAssignment?: (ctx: ValueAssignmentContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.asnType`.
	 * @param ctx the parse tree
	 */
	enterAsnType?: (ctx: AsnTypeContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.asnType`.
	 * @param ctx the parse tree
	 */
	exitAsnType?: (ctx: AsnTypeContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.builtinType`.
	 * @param ctx the parse tree
	 */
	enterBuiltinType?: (ctx: BuiltinTypeContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.builtinType`.
	 * @param ctx the parse tree
	 */
	exitBuiltinType?: (ctx: BuiltinTypeContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.objectClassFieldType`.
	 * @param ctx the parse tree
	 */
	enterObjectClassFieldType?: (ctx: ObjectClassFieldTypeContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.objectClassFieldType`.
	 * @param ctx the parse tree
	 */
	exitObjectClassFieldType?: (ctx: ObjectClassFieldTypeContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.setType`.
	 * @param ctx the parse tree
	 */
	enterSetType?: (ctx: SetTypeContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.setType`.
	 * @param ctx the parse tree
	 */
	exitSetType?: (ctx: SetTypeContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.setOfType`.
	 * @param ctx the parse tree
	 */
	enterSetOfType?: (ctx: SetOfTypeContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.setOfType`.
	 * @param ctx the parse tree
	 */
	exitSetOfType?: (ctx: SetOfTypeContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.referencedType`.
	 * @param ctx the parse tree
	 */
	enterReferencedType?: (ctx: ReferencedTypeContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.referencedType`.
	 * @param ctx the parse tree
	 */
	exitReferencedType?: (ctx: ReferencedTypeContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.definedType`.
	 * @param ctx the parse tree
	 */
	enterDefinedType?: (ctx: DefinedTypeContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.definedType`.
	 * @param ctx the parse tree
	 */
	exitDefinedType?: (ctx: DefinedTypeContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.constraint`.
	 * @param ctx the parse tree
	 */
	enterConstraint?: (ctx: ConstraintContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.constraint`.
	 * @param ctx the parse tree
	 */
	exitConstraint?: (ctx: ConstraintContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.constraintSpec`.
	 * @param ctx the parse tree
	 */
	enterConstraintSpec?: (ctx: ConstraintSpecContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.constraintSpec`.
	 * @param ctx the parse tree
	 */
	exitConstraintSpec?: (ctx: ConstraintSpecContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.userDefinedConstraint`.
	 * @param ctx the parse tree
	 */
	enterUserDefinedConstraint?: (ctx: UserDefinedConstraintContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.userDefinedConstraint`.
	 * @param ctx the parse tree
	 */
	exitUserDefinedConstraint?: (ctx: UserDefinedConstraintContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.generalConstraint`.
	 * @param ctx the parse tree
	 */
	enterGeneralConstraint?: (ctx: GeneralConstraintContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.generalConstraint`.
	 * @param ctx the parse tree
	 */
	exitGeneralConstraint?: (ctx: GeneralConstraintContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.userDefinedConstraintParameter`.
	 * @param ctx the parse tree
	 */
	enterUserDefinedConstraintParameter?: (ctx: UserDefinedConstraintParameterContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.userDefinedConstraintParameter`.
	 * @param ctx the parse tree
	 */
	exitUserDefinedConstraintParameter?: (ctx: UserDefinedConstraintParameterContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.tableConstraint`.
	 * @param ctx the parse tree
	 */
	enterTableConstraint?: (ctx: TableConstraintContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.tableConstraint`.
	 * @param ctx the parse tree
	 */
	exitTableConstraint?: (ctx: TableConstraintContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.simpleTableConstraint`.
	 * @param ctx the parse tree
	 */
	enterSimpleTableConstraint?: (ctx: SimpleTableConstraintContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.simpleTableConstraint`.
	 * @param ctx the parse tree
	 */
	exitSimpleTableConstraint?: (ctx: SimpleTableConstraintContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.contentsConstraint`.
	 * @param ctx the parse tree
	 */
	enterContentsConstraint?: (ctx: ContentsConstraintContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.contentsConstraint`.
	 * @param ctx the parse tree
	 */
	exitContentsConstraint?: (ctx: ContentsConstraintContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.componentPresenceLists`.
	 * @param ctx the parse tree
	 */
	enterComponentPresenceLists?: (ctx: ComponentPresenceListsContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.componentPresenceLists`.
	 * @param ctx the parse tree
	 */
	exitComponentPresenceLists?: (ctx: ComponentPresenceListsContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.componentPresenceList`.
	 * @param ctx the parse tree
	 */
	enterComponentPresenceList?: (ctx: ComponentPresenceListContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.componentPresenceList`.
	 * @param ctx the parse tree
	 */
	exitComponentPresenceList?: (ctx: ComponentPresenceListContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.componentPresence`.
	 * @param ctx the parse tree
	 */
	enterComponentPresence?: (ctx: ComponentPresenceContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.componentPresence`.
	 * @param ctx the parse tree
	 */
	exitComponentPresence?: (ctx: ComponentPresenceContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.subtypeConstraint`.
	 * @param ctx the parse tree
	 */
	enterSubtypeConstraint?: (ctx: SubtypeConstraintContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.subtypeConstraint`.
	 * @param ctx the parse tree
	 */
	exitSubtypeConstraint?: (ctx: SubtypeConstraintContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.value`.
	 * @param ctx the parse tree
	 */
	enterValue?: (ctx: ValueContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.value`.
	 * @param ctx the parse tree
	 */
	exitValue?: (ctx: ValueContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.builtinValue`.
	 * @param ctx the parse tree
	 */
	enterBuiltinValue?: (ctx: BuiltinValueContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.builtinValue`.
	 * @param ctx the parse tree
	 */
	exitBuiltinValue?: (ctx: BuiltinValueContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.objectIdentifierValue`.
	 * @param ctx the parse tree
	 */
	enterObjectIdentifierValue?: (ctx: ObjectIdentifierValueContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.objectIdentifierValue`.
	 * @param ctx the parse tree
	 */
	exitObjectIdentifierValue?: (ctx: ObjectIdentifierValueContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.objIdComponentsList`.
	 * @param ctx the parse tree
	 */
	enterObjIdComponentsList?: (ctx: ObjIdComponentsListContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.objIdComponentsList`.
	 * @param ctx the parse tree
	 */
	exitObjIdComponentsList?: (ctx: ObjIdComponentsListContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.objIdComponents`.
	 * @param ctx the parse tree
	 */
	enterObjIdComponents?: (ctx: ObjIdComponentsContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.objIdComponents`.
	 * @param ctx the parse tree
	 */
	exitObjIdComponents?: (ctx: ObjIdComponentsContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.integerValue`.
	 * @param ctx the parse tree
	 */
	enterIntegerValue?: (ctx: IntegerValueContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.integerValue`.
	 * @param ctx the parse tree
	 */
	exitIntegerValue?: (ctx: IntegerValueContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.choiceValue`.
	 * @param ctx the parse tree
	 */
	enterChoiceValue?: (ctx: ChoiceValueContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.choiceValue`.
	 * @param ctx the parse tree
	 */
	exitChoiceValue?: (ctx: ChoiceValueContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.enumeratedValue`.
	 * @param ctx the parse tree
	 */
	enterEnumeratedValue?: (ctx: EnumeratedValueContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.enumeratedValue`.
	 * @param ctx the parse tree
	 */
	exitEnumeratedValue?: (ctx: EnumeratedValueContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.signedNumber`.
	 * @param ctx the parse tree
	 */
	enterSignedNumber?: (ctx: SignedNumberContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.signedNumber`.
	 * @param ctx the parse tree
	 */
	exitSignedNumber?: (ctx: SignedNumberContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.choiceType`.
	 * @param ctx the parse tree
	 */
	enterChoiceType?: (ctx: ChoiceTypeContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.choiceType`.
	 * @param ctx the parse tree
	 */
	exitChoiceType?: (ctx: ChoiceTypeContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.alternativeTypeLists`.
	 * @param ctx the parse tree
	 */
	enterAlternativeTypeLists?: (ctx: AlternativeTypeListsContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.alternativeTypeLists`.
	 * @param ctx the parse tree
	 */
	exitAlternativeTypeLists?: (ctx: AlternativeTypeListsContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.extensionAdditionAlternatives`.
	 * @param ctx the parse tree
	 */
	enterExtensionAdditionAlternatives?: (ctx: ExtensionAdditionAlternativesContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.extensionAdditionAlternatives`.
	 * @param ctx the parse tree
	 */
	exitExtensionAdditionAlternatives?: (ctx: ExtensionAdditionAlternativesContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.extensionAdditionAlternativesList`.
	 * @param ctx the parse tree
	 */
	enterExtensionAdditionAlternativesList?: (ctx: ExtensionAdditionAlternativesListContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.extensionAdditionAlternativesList`.
	 * @param ctx the parse tree
	 */
	exitExtensionAdditionAlternativesList?: (ctx: ExtensionAdditionAlternativesListContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.extensionAdditionAlternative`.
	 * @param ctx the parse tree
	 */
	enterExtensionAdditionAlternative?: (ctx: ExtensionAdditionAlternativeContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.extensionAdditionAlternative`.
	 * @param ctx the parse tree
	 */
	exitExtensionAdditionAlternative?: (ctx: ExtensionAdditionAlternativeContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.extensionAdditionAlternativesGroup`.
	 * @param ctx the parse tree
	 */
	enterExtensionAdditionAlternativesGroup?: (ctx: ExtensionAdditionAlternativesGroupContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.extensionAdditionAlternativesGroup`.
	 * @param ctx the parse tree
	 */
	exitExtensionAdditionAlternativesGroup?: (ctx: ExtensionAdditionAlternativesGroupContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.rootAlternativeTypeList`.
	 * @param ctx the parse tree
	 */
	enterRootAlternativeTypeList?: (ctx: RootAlternativeTypeListContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.rootAlternativeTypeList`.
	 * @param ctx the parse tree
	 */
	exitRootAlternativeTypeList?: (ctx: RootAlternativeTypeListContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.alternativeTypeList`.
	 * @param ctx the parse tree
	 */
	enterAlternativeTypeList?: (ctx: AlternativeTypeListContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.alternativeTypeList`.
	 * @param ctx the parse tree
	 */
	exitAlternativeTypeList?: (ctx: AlternativeTypeListContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.namedType`.
	 * @param ctx the parse tree
	 */
	enterNamedType?: (ctx: NamedTypeContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.namedType`.
	 * @param ctx the parse tree
	 */
	exitNamedType?: (ctx: NamedTypeContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.enumeratedType`.
	 * @param ctx the parse tree
	 */
	enterEnumeratedType?: (ctx: EnumeratedTypeContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.enumeratedType`.
	 * @param ctx the parse tree
	 */
	exitEnumeratedType?: (ctx: EnumeratedTypeContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.enumerations`.
	 * @param ctx the parse tree
	 */
	enterEnumerations?: (ctx: EnumerationsContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.enumerations`.
	 * @param ctx the parse tree
	 */
	exitEnumerations?: (ctx: EnumerationsContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.rootEnumeration`.
	 * @param ctx the parse tree
	 */
	enterRootEnumeration?: (ctx: RootEnumerationContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.rootEnumeration`.
	 * @param ctx the parse tree
	 */
	exitRootEnumeration?: (ctx: RootEnumerationContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.enumeration`.
	 * @param ctx the parse tree
	 */
	enterEnumeration?: (ctx: EnumerationContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.enumeration`.
	 * @param ctx the parse tree
	 */
	exitEnumeration?: (ctx: EnumerationContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.enumerationItem`.
	 * @param ctx the parse tree
	 */
	enterEnumerationItem?: (ctx: EnumerationItemContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.enumerationItem`.
	 * @param ctx the parse tree
	 */
	exitEnumerationItem?: (ctx: EnumerationItemContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.namedNumber`.
	 * @param ctx the parse tree
	 */
	enterNamedNumber?: (ctx: NamedNumberContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.namedNumber`.
	 * @param ctx the parse tree
	 */
	exitNamedNumber?: (ctx: NamedNumberContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.definedValue`.
	 * @param ctx the parse tree
	 */
	enterDefinedValue?: (ctx: DefinedValueContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.definedValue`.
	 * @param ctx the parse tree
	 */
	exitDefinedValue?: (ctx: DefinedValueContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.parameterizedValue`.
	 * @param ctx the parse tree
	 */
	enterParameterizedValue?: (ctx: ParameterizedValueContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.parameterizedValue`.
	 * @param ctx the parse tree
	 */
	exitParameterizedValue?: (ctx: ParameterizedValueContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.simpleDefinedValue`.
	 * @param ctx the parse tree
	 */
	enterSimpleDefinedValue?: (ctx: SimpleDefinedValueContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.simpleDefinedValue`.
	 * @param ctx the parse tree
	 */
	exitSimpleDefinedValue?: (ctx: SimpleDefinedValueContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.actualParameterList`.
	 * @param ctx the parse tree
	 */
	enterActualParameterList?: (ctx: ActualParameterListContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.actualParameterList`.
	 * @param ctx the parse tree
	 */
	exitActualParameterList?: (ctx: ActualParameterListContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.actualParameter`.
	 * @param ctx the parse tree
	 */
	enterActualParameter?: (ctx: ActualParameterContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.actualParameter`.
	 * @param ctx the parse tree
	 */
	exitActualParameter?: (ctx: ActualParameterContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.exceptionSpec`.
	 * @param ctx the parse tree
	 */
	enterExceptionSpec?: (ctx: ExceptionSpecContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.exceptionSpec`.
	 * @param ctx the parse tree
	 */
	exitExceptionSpec?: (ctx: ExceptionSpecContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.exceptionIdentification`.
	 * @param ctx the parse tree
	 */
	enterExceptionIdentification?: (ctx: ExceptionIdentificationContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.exceptionIdentification`.
	 * @param ctx the parse tree
	 */
	exitExceptionIdentification?: (ctx: ExceptionIdentificationContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.additionalEnumeration`.
	 * @param ctx the parse tree
	 */
	enterAdditionalEnumeration?: (ctx: AdditionalEnumerationContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.additionalEnumeration`.
	 * @param ctx the parse tree
	 */
	exitAdditionalEnumeration?: (ctx: AdditionalEnumerationContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.integerType`.
	 * @param ctx the parse tree
	 */
	enterIntegerType?: (ctx: IntegerTypeContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.integerType`.
	 * @param ctx the parse tree
	 */
	exitIntegerType?: (ctx: IntegerTypeContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.namedNumberList`.
	 * @param ctx the parse tree
	 */
	enterNamedNumberList?: (ctx: NamedNumberListContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.namedNumberList`.
	 * @param ctx the parse tree
	 */
	exitNamedNumberList?: (ctx: NamedNumberListContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.objectidentifiertype`.
	 * @param ctx the parse tree
	 */
	enterObjectidentifiertype?: (ctx: ObjectidentifiertypeContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.objectidentifiertype`.
	 * @param ctx the parse tree
	 */
	exitObjectidentifiertype?: (ctx: ObjectidentifiertypeContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.componentRelationConstraint`.
	 * @param ctx the parse tree
	 */
	enterComponentRelationConstraint?: (ctx: ComponentRelationConstraintContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.componentRelationConstraint`.
	 * @param ctx the parse tree
	 */
	exitComponentRelationConstraint?: (ctx: ComponentRelationConstraintContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.atNotation`.
	 * @param ctx the parse tree
	 */
	enterAtNotation?: (ctx: AtNotationContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.atNotation`.
	 * @param ctx the parse tree
	 */
	exitAtNotation?: (ctx: AtNotationContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.level`.
	 * @param ctx the parse tree
	 */
	enterLevel?: (ctx: LevelContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.level`.
	 * @param ctx the parse tree
	 */
	exitLevel?: (ctx: LevelContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.componentIdList`.
	 * @param ctx the parse tree
	 */
	enterComponentIdList?: (ctx: ComponentIdListContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.componentIdList`.
	 * @param ctx the parse tree
	 */
	exitComponentIdList?: (ctx: ComponentIdListContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.octetStringType`.
	 * @param ctx the parse tree
	 */
	enterOctetStringType?: (ctx: OctetStringTypeContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.octetStringType`.
	 * @param ctx the parse tree
	 */
	exitOctetStringType?: (ctx: OctetStringTypeContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.bitStringType`.
	 * @param ctx the parse tree
	 */
	enterBitStringType?: (ctx: BitStringTypeContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.bitStringType`.
	 * @param ctx the parse tree
	 */
	exitBitStringType?: (ctx: BitStringTypeContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.namedBitList`.
	 * @param ctx the parse tree
	 */
	enterNamedBitList?: (ctx: NamedBitListContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.namedBitList`.
	 * @param ctx the parse tree
	 */
	exitNamedBitList?: (ctx: NamedBitListContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.namedBit`.
	 * @param ctx the parse tree
	 */
	enterNamedBit?: (ctx: NamedBitContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.namedBit`.
	 * @param ctx the parse tree
	 */
	exitNamedBit?: (ctx: NamedBitContext) => void;

	/**
	 * Enter a parse tree produced by `ASNParser.booleanValue`.
	 * @param ctx the parse tree
	 */
	enterBooleanValue?: (ctx: BooleanValueContext) => void;
	/**
	 * Exit a parse tree produced by `ASNParser.booleanValue`.
	 * @param ctx the parse tree
	 */
	exitBooleanValue?: (ctx: BooleanValueContext) => void;
}

