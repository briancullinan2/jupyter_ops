// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/asn/asn_3gpp/ASN_3gpp.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ModulesContext } from "./ASN_3gppParser";
import { ModuleDefinitionContext } from "./ASN_3gppParser";
import { TagDefaultContext } from "./ASN_3gppParser";
import { ExtensionDefaultContext } from "./ASN_3gppParser";
import { ModuleBodyContext } from "./ASN_3gppParser";
import { ExportsContext } from "./ASN_3gppParser";
import { SymbolsExportedContext } from "./ASN_3gppParser";
import { ImportsContext } from "./ASN_3gppParser";
import { SymbolsImportedContext } from "./ASN_3gppParser";
import { SymbolsFromModuleListContext } from "./ASN_3gppParser";
import { SymbolsFromModuleContext } from "./ASN_3gppParser";
import { GlobalModuleReferenceContext } from "./ASN_3gppParser";
import { AssignedIdentifierContext } from "./ASN_3gppParser";
import { SymbolListContext } from "./ASN_3gppParser";
import { SymbolContext } from "./ASN_3gppParser";
import { AssignmentListContext } from "./ASN_3gppParser";
import { AssignmentContext } from "./ASN_3gppParser";
import { SequenceTypeContext } from "./ASN_3gppParser";
import { ExtensionAndExceptionContext } from "./ASN_3gppParser";
import { OptionalExtensionMarkerContext } from "./ASN_3gppParser";
import { ComponentTypeListsContext } from "./ASN_3gppParser";
import { RootComponentTypeListContext } from "./ASN_3gppParser";
import { ComponentTypeListContext } from "./ASN_3gppParser";
import { ComponentTypeContext } from "./ASN_3gppParser";
import { TagContext } from "./ASN_3gppParser";
import { NeedTagContext } from "./ASN_3gppParser";
import { CondTagContext } from "./ASN_3gppParser";
import { ExtensionAdditionsContext } from "./ASN_3gppParser";
import { ExtensionAdditionListContext } from "./ASN_3gppParser";
import { ExtensionAdditionContext } from "./ASN_3gppParser";
import { ExtensionAdditionGroupContext } from "./ASN_3gppParser";
import { VersionNumberContext } from "./ASN_3gppParser";
import { SequenceOfTypeContext } from "./ASN_3gppParser";
import { SizeConstraintContext } from "./ASN_3gppParser";
import { ParameterizedAssignmentContext } from "./ASN_3gppParser";
import { ParameterListContext } from "./ASN_3gppParser";
import { ParameterContext } from "./ASN_3gppParser";
import { ParamGovernorContext } from "./ASN_3gppParser";
import { GovernorContext } from "./ASN_3gppParser";
import { ObjectClassAssignmentContext } from "./ASN_3gppParser";
import { ObjectClassContext } from "./ASN_3gppParser";
import { DefinedObjectClassContext } from "./ASN_3gppParser";
import { UsefulObjectClassReferenceContext } from "./ASN_3gppParser";
import { ExternalObjectClassReferenceContext } from "./ASN_3gppParser";
import { ObjectClassDefnContext } from "./ASN_3gppParser";
import { WithSyntaxSpecContext } from "./ASN_3gppParser";
import { SyntaxListContext } from "./ASN_3gppParser";
import { TokenOrGroupSpecContext } from "./ASN_3gppParser";
import { OptionalGroupContext } from "./ASN_3gppParser";
import { RequiredTokenContext } from "./ASN_3gppParser";
import { LiteralContext } from "./ASN_3gppParser";
import { PrimitiveFieldNameContext } from "./ASN_3gppParser";
import { FieldSpecContext } from "./ASN_3gppParser";
import { TypeFieldSpecContext } from "./ASN_3gppParser";
import { TypeOptionalitySpecContext } from "./ASN_3gppParser";
import { FixedTypeValueFieldSpecContext } from "./ASN_3gppParser";
import { ValueOptionalitySpecContext } from "./ASN_3gppParser";
import { VariableTypeValueFieldSpecContext } from "./ASN_3gppParser";
import { FixedTypeValueSetFieldSpecContext } from "./ASN_3gppParser";
import { ValueSetOptionalitySpecContext } from "./ASN_3gppParser";
import { ObjectContext } from "./ASN_3gppParser";
import { ParameterizedObjectContext } from "./ASN_3gppParser";
import { DefinedObjectContext } from "./ASN_3gppParser";
import { ObjectSetContext } from "./ASN_3gppParser";
import { ObjectSetSpecContext } from "./ASN_3gppParser";
import { FieldNameContext } from "./ASN_3gppParser";
import { ValueSetContext } from "./ASN_3gppParser";
import { ElementSetSpecsContext } from "./ASN_3gppParser";
import { RootElementSetSpecContext } from "./ASN_3gppParser";
import { AdditionalElementSetSpecContext } from "./ASN_3gppParser";
import { ElementSetSpecContext } from "./ASN_3gppParser";
import { UnionsContext } from "./ASN_3gppParser";
import { ExclusionsContext } from "./ASN_3gppParser";
import { IntersectionsContext } from "./ASN_3gppParser";
import { UnionMarkContext } from "./ASN_3gppParser";
import { IntersectionMarkContext } from "./ASN_3gppParser";
import { ElementsContext } from "./ASN_3gppParser";
import { ObjectSetElementsContext } from "./ASN_3gppParser";
import { IntersectionElementsContext } from "./ASN_3gppParser";
import { SubtypeElementsContext } from "./ASN_3gppParser";
import { VariableTypeValueSetFieldSpecContext } from "./ASN_3gppParser";
import { ObjectFieldSpecContext } from "./ASN_3gppParser";
import { ObjectOptionalitySpecContext } from "./ASN_3gppParser";
import { ObjectSetFieldSpecContext } from "./ASN_3gppParser";
import { ObjectSetOptionalitySpecContext } from "./ASN_3gppParser";
import { TypeAssignmentContext } from "./ASN_3gppParser";
import { ValueAssignmentContext } from "./ASN_3gppParser";
import { AsnTypeContext } from "./ASN_3gppParser";
import { BuiltinTypeContext } from "./ASN_3gppParser";
import { ObjectClassFieldTypeContext } from "./ASN_3gppParser";
import { SetTypeContext } from "./ASN_3gppParser";
import { SetOfTypeContext } from "./ASN_3gppParser";
import { ReferencedTypeContext } from "./ASN_3gppParser";
import { DefinedTypeContext } from "./ASN_3gppParser";
import { ConstraintContext } from "./ASN_3gppParser";
import { ConstraintSpecContext } from "./ASN_3gppParser";
import { UserDefinedConstraintContext } from "./ASN_3gppParser";
import { GeneralConstraintContext } from "./ASN_3gppParser";
import { UserDefinedConstraintParameterContext } from "./ASN_3gppParser";
import { TableConstraintContext } from "./ASN_3gppParser";
import { SimpleTableConstraintContext } from "./ASN_3gppParser";
import { ContentsConstraintContext } from "./ASN_3gppParser";
import { ComponentPresenceListsContext } from "./ASN_3gppParser";
import { ComponentPresenceListContext } from "./ASN_3gppParser";
import { ComponentPresenceContext } from "./ASN_3gppParser";
import { SubtypeConstraintContext } from "./ASN_3gppParser";
import { ValueContext } from "./ASN_3gppParser";
import { BuiltinValueContext } from "./ASN_3gppParser";
import { ObjectIdentifierValueContext } from "./ASN_3gppParser";
import { ObjIdComponentsListContext } from "./ASN_3gppParser";
import { ObjIdComponentsContext } from "./ASN_3gppParser";
import { IntegerValueContext } from "./ASN_3gppParser";
import { ChoiceValueContext } from "./ASN_3gppParser";
import { EnumeratedValueContext } from "./ASN_3gppParser";
import { SignedNumberContext } from "./ASN_3gppParser";
import { ChoiceTypeContext } from "./ASN_3gppParser";
import { AlternativeTypeListsContext } from "./ASN_3gppParser";
import { ExtensionAdditionAlternativesContext } from "./ASN_3gppParser";
import { ExtensionAdditionAlternativesListContext } from "./ASN_3gppParser";
import { ExtensionAdditionAlternativeContext } from "./ASN_3gppParser";
import { ExtensionAdditionAlternativesGroupContext } from "./ASN_3gppParser";
import { RootAlternativeTypeListContext } from "./ASN_3gppParser";
import { AlternativeTypeListContext } from "./ASN_3gppParser";
import { NamedTypeContext } from "./ASN_3gppParser";
import { EnumeratedTypeContext } from "./ASN_3gppParser";
import { EnumerationsContext } from "./ASN_3gppParser";
import { RootEnumerationContext } from "./ASN_3gppParser";
import { EnumerationContext } from "./ASN_3gppParser";
import { EnumerationItemContext } from "./ASN_3gppParser";
import { NamedNumberContext } from "./ASN_3gppParser";
import { DefinedValueContext } from "./ASN_3gppParser";
import { ParameterizedValueContext } from "./ASN_3gppParser";
import { SimpleDefinedValueContext } from "./ASN_3gppParser";
import { ActualParameterListContext } from "./ASN_3gppParser";
import { ActualParameterContext } from "./ASN_3gppParser";
import { ExceptionSpecContext } from "./ASN_3gppParser";
import { ExceptionIdentificationContext } from "./ASN_3gppParser";
import { AdditionalEnumerationContext } from "./ASN_3gppParser";
import { IntegerTypeContext } from "./ASN_3gppParser";
import { NamedNumberListContext } from "./ASN_3gppParser";
import { ObjectidentifiertypeContext } from "./ASN_3gppParser";
import { ComponentRelationConstraintContext } from "./ASN_3gppParser";
import { AtNotationContext } from "./ASN_3gppParser";
import { LevelContext } from "./ASN_3gppParser";
import { ComponentIdListContext } from "./ASN_3gppParser";
import { OctetStringTypeContext } from "./ASN_3gppParser";
import { BitStringTypeContext } from "./ASN_3gppParser";
import { NamedBitListContext } from "./ASN_3gppParser";
import { NamedBitContext } from "./ASN_3gppParser";
import { BooleanValueContext } from "./ASN_3gppParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `ASN_3gppParser`.
 */
export interface ASN_3gppListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `ASN_3gppParser.modules`.
	 * @param ctx the parse tree
	 */
	enterModules?: (ctx: ModulesContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.modules`.
	 * @param ctx the parse tree
	 */
	exitModules?: (ctx: ModulesContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.moduleDefinition`.
	 * @param ctx the parse tree
	 */
	enterModuleDefinition?: (ctx: ModuleDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.moduleDefinition`.
	 * @param ctx the parse tree
	 */
	exitModuleDefinition?: (ctx: ModuleDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.tagDefault`.
	 * @param ctx the parse tree
	 */
	enterTagDefault?: (ctx: TagDefaultContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.tagDefault`.
	 * @param ctx the parse tree
	 */
	exitTagDefault?: (ctx: TagDefaultContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.extensionDefault`.
	 * @param ctx the parse tree
	 */
	enterExtensionDefault?: (ctx: ExtensionDefaultContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.extensionDefault`.
	 * @param ctx the parse tree
	 */
	exitExtensionDefault?: (ctx: ExtensionDefaultContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.moduleBody`.
	 * @param ctx the parse tree
	 */
	enterModuleBody?: (ctx: ModuleBodyContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.moduleBody`.
	 * @param ctx the parse tree
	 */
	exitModuleBody?: (ctx: ModuleBodyContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.exports`.
	 * @param ctx the parse tree
	 */
	enterExports?: (ctx: ExportsContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.exports`.
	 * @param ctx the parse tree
	 */
	exitExports?: (ctx: ExportsContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.symbolsExported`.
	 * @param ctx the parse tree
	 */
	enterSymbolsExported?: (ctx: SymbolsExportedContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.symbolsExported`.
	 * @param ctx the parse tree
	 */
	exitSymbolsExported?: (ctx: SymbolsExportedContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.imports`.
	 * @param ctx the parse tree
	 */
	enterImports?: (ctx: ImportsContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.imports`.
	 * @param ctx the parse tree
	 */
	exitImports?: (ctx: ImportsContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.symbolsImported`.
	 * @param ctx the parse tree
	 */
	enterSymbolsImported?: (ctx: SymbolsImportedContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.symbolsImported`.
	 * @param ctx the parse tree
	 */
	exitSymbolsImported?: (ctx: SymbolsImportedContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.symbolsFromModuleList`.
	 * @param ctx the parse tree
	 */
	enterSymbolsFromModuleList?: (ctx: SymbolsFromModuleListContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.symbolsFromModuleList`.
	 * @param ctx the parse tree
	 */
	exitSymbolsFromModuleList?: (ctx: SymbolsFromModuleListContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.symbolsFromModule`.
	 * @param ctx the parse tree
	 */
	enterSymbolsFromModule?: (ctx: SymbolsFromModuleContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.symbolsFromModule`.
	 * @param ctx the parse tree
	 */
	exitSymbolsFromModule?: (ctx: SymbolsFromModuleContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.globalModuleReference`.
	 * @param ctx the parse tree
	 */
	enterGlobalModuleReference?: (ctx: GlobalModuleReferenceContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.globalModuleReference`.
	 * @param ctx the parse tree
	 */
	exitGlobalModuleReference?: (ctx: GlobalModuleReferenceContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.assignedIdentifier`.
	 * @param ctx the parse tree
	 */
	enterAssignedIdentifier?: (ctx: AssignedIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.assignedIdentifier`.
	 * @param ctx the parse tree
	 */
	exitAssignedIdentifier?: (ctx: AssignedIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.symbolList`.
	 * @param ctx the parse tree
	 */
	enterSymbolList?: (ctx: SymbolListContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.symbolList`.
	 * @param ctx the parse tree
	 */
	exitSymbolList?: (ctx: SymbolListContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.symbol`.
	 * @param ctx the parse tree
	 */
	enterSymbol?: (ctx: SymbolContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.symbol`.
	 * @param ctx the parse tree
	 */
	exitSymbol?: (ctx: SymbolContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.assignmentList`.
	 * @param ctx the parse tree
	 */
	enterAssignmentList?: (ctx: AssignmentListContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.assignmentList`.
	 * @param ctx the parse tree
	 */
	exitAssignmentList?: (ctx: AssignmentListContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.assignment`.
	 * @param ctx the parse tree
	 */
	enterAssignment?: (ctx: AssignmentContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.assignment`.
	 * @param ctx the parse tree
	 */
	exitAssignment?: (ctx: AssignmentContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.sequenceType`.
	 * @param ctx the parse tree
	 */
	enterSequenceType?: (ctx: SequenceTypeContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.sequenceType`.
	 * @param ctx the parse tree
	 */
	exitSequenceType?: (ctx: SequenceTypeContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.extensionAndException`.
	 * @param ctx the parse tree
	 */
	enterExtensionAndException?: (ctx: ExtensionAndExceptionContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.extensionAndException`.
	 * @param ctx the parse tree
	 */
	exitExtensionAndException?: (ctx: ExtensionAndExceptionContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.optionalExtensionMarker`.
	 * @param ctx the parse tree
	 */
	enterOptionalExtensionMarker?: (ctx: OptionalExtensionMarkerContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.optionalExtensionMarker`.
	 * @param ctx the parse tree
	 */
	exitOptionalExtensionMarker?: (ctx: OptionalExtensionMarkerContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.componentTypeLists`.
	 * @param ctx the parse tree
	 */
	enterComponentTypeLists?: (ctx: ComponentTypeListsContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.componentTypeLists`.
	 * @param ctx the parse tree
	 */
	exitComponentTypeLists?: (ctx: ComponentTypeListsContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.rootComponentTypeList`.
	 * @param ctx the parse tree
	 */
	enterRootComponentTypeList?: (ctx: RootComponentTypeListContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.rootComponentTypeList`.
	 * @param ctx the parse tree
	 */
	exitRootComponentTypeList?: (ctx: RootComponentTypeListContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.componentTypeList`.
	 * @param ctx the parse tree
	 */
	enterComponentTypeList?: (ctx: ComponentTypeListContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.componentTypeList`.
	 * @param ctx the parse tree
	 */
	exitComponentTypeList?: (ctx: ComponentTypeListContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.componentType`.
	 * @param ctx the parse tree
	 */
	enterComponentType?: (ctx: ComponentTypeContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.componentType`.
	 * @param ctx the parse tree
	 */
	exitComponentType?: (ctx: ComponentTypeContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.tag`.
	 * @param ctx the parse tree
	 */
	enterTag?: (ctx: TagContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.tag`.
	 * @param ctx the parse tree
	 */
	exitTag?: (ctx: TagContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.needTag`.
	 * @param ctx the parse tree
	 */
	enterNeedTag?: (ctx: NeedTagContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.needTag`.
	 * @param ctx the parse tree
	 */
	exitNeedTag?: (ctx: NeedTagContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.condTag`.
	 * @param ctx the parse tree
	 */
	enterCondTag?: (ctx: CondTagContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.condTag`.
	 * @param ctx the parse tree
	 */
	exitCondTag?: (ctx: CondTagContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.extensionAdditions`.
	 * @param ctx the parse tree
	 */
	enterExtensionAdditions?: (ctx: ExtensionAdditionsContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.extensionAdditions`.
	 * @param ctx the parse tree
	 */
	exitExtensionAdditions?: (ctx: ExtensionAdditionsContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.extensionAdditionList`.
	 * @param ctx the parse tree
	 */
	enterExtensionAdditionList?: (ctx: ExtensionAdditionListContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.extensionAdditionList`.
	 * @param ctx the parse tree
	 */
	exitExtensionAdditionList?: (ctx: ExtensionAdditionListContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.extensionAddition`.
	 * @param ctx the parse tree
	 */
	enterExtensionAddition?: (ctx: ExtensionAdditionContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.extensionAddition`.
	 * @param ctx the parse tree
	 */
	exitExtensionAddition?: (ctx: ExtensionAdditionContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.extensionAdditionGroup`.
	 * @param ctx the parse tree
	 */
	enterExtensionAdditionGroup?: (ctx: ExtensionAdditionGroupContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.extensionAdditionGroup`.
	 * @param ctx the parse tree
	 */
	exitExtensionAdditionGroup?: (ctx: ExtensionAdditionGroupContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.versionNumber`.
	 * @param ctx the parse tree
	 */
	enterVersionNumber?: (ctx: VersionNumberContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.versionNumber`.
	 * @param ctx the parse tree
	 */
	exitVersionNumber?: (ctx: VersionNumberContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.sequenceOfType`.
	 * @param ctx the parse tree
	 */
	enterSequenceOfType?: (ctx: SequenceOfTypeContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.sequenceOfType`.
	 * @param ctx the parse tree
	 */
	exitSequenceOfType?: (ctx: SequenceOfTypeContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.sizeConstraint`.
	 * @param ctx the parse tree
	 */
	enterSizeConstraint?: (ctx: SizeConstraintContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.sizeConstraint`.
	 * @param ctx the parse tree
	 */
	exitSizeConstraint?: (ctx: SizeConstraintContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.parameterizedAssignment`.
	 * @param ctx the parse tree
	 */
	enterParameterizedAssignment?: (ctx: ParameterizedAssignmentContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.parameterizedAssignment`.
	 * @param ctx the parse tree
	 */
	exitParameterizedAssignment?: (ctx: ParameterizedAssignmentContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.parameterList`.
	 * @param ctx the parse tree
	 */
	enterParameterList?: (ctx: ParameterListContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.parameterList`.
	 * @param ctx the parse tree
	 */
	exitParameterList?: (ctx: ParameterListContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.parameter`.
	 * @param ctx the parse tree
	 */
	enterParameter?: (ctx: ParameterContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.parameter`.
	 * @param ctx the parse tree
	 */
	exitParameter?: (ctx: ParameterContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.paramGovernor`.
	 * @param ctx the parse tree
	 */
	enterParamGovernor?: (ctx: ParamGovernorContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.paramGovernor`.
	 * @param ctx the parse tree
	 */
	exitParamGovernor?: (ctx: ParamGovernorContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.governor`.
	 * @param ctx the parse tree
	 */
	enterGovernor?: (ctx: GovernorContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.governor`.
	 * @param ctx the parse tree
	 */
	exitGovernor?: (ctx: GovernorContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.objectClassAssignment`.
	 * @param ctx the parse tree
	 */
	enterObjectClassAssignment?: (ctx: ObjectClassAssignmentContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.objectClassAssignment`.
	 * @param ctx the parse tree
	 */
	exitObjectClassAssignment?: (ctx: ObjectClassAssignmentContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.objectClass`.
	 * @param ctx the parse tree
	 */
	enterObjectClass?: (ctx: ObjectClassContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.objectClass`.
	 * @param ctx the parse tree
	 */
	exitObjectClass?: (ctx: ObjectClassContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.definedObjectClass`.
	 * @param ctx the parse tree
	 */
	enterDefinedObjectClass?: (ctx: DefinedObjectClassContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.definedObjectClass`.
	 * @param ctx the parse tree
	 */
	exitDefinedObjectClass?: (ctx: DefinedObjectClassContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.usefulObjectClassReference`.
	 * @param ctx the parse tree
	 */
	enterUsefulObjectClassReference?: (ctx: UsefulObjectClassReferenceContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.usefulObjectClassReference`.
	 * @param ctx the parse tree
	 */
	exitUsefulObjectClassReference?: (ctx: UsefulObjectClassReferenceContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.externalObjectClassReference`.
	 * @param ctx the parse tree
	 */
	enterExternalObjectClassReference?: (ctx: ExternalObjectClassReferenceContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.externalObjectClassReference`.
	 * @param ctx the parse tree
	 */
	exitExternalObjectClassReference?: (ctx: ExternalObjectClassReferenceContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.objectClassDefn`.
	 * @param ctx the parse tree
	 */
	enterObjectClassDefn?: (ctx: ObjectClassDefnContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.objectClassDefn`.
	 * @param ctx the parse tree
	 */
	exitObjectClassDefn?: (ctx: ObjectClassDefnContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.withSyntaxSpec`.
	 * @param ctx the parse tree
	 */
	enterWithSyntaxSpec?: (ctx: WithSyntaxSpecContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.withSyntaxSpec`.
	 * @param ctx the parse tree
	 */
	exitWithSyntaxSpec?: (ctx: WithSyntaxSpecContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.syntaxList`.
	 * @param ctx the parse tree
	 */
	enterSyntaxList?: (ctx: SyntaxListContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.syntaxList`.
	 * @param ctx the parse tree
	 */
	exitSyntaxList?: (ctx: SyntaxListContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.tokenOrGroupSpec`.
	 * @param ctx the parse tree
	 */
	enterTokenOrGroupSpec?: (ctx: TokenOrGroupSpecContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.tokenOrGroupSpec`.
	 * @param ctx the parse tree
	 */
	exitTokenOrGroupSpec?: (ctx: TokenOrGroupSpecContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.optionalGroup`.
	 * @param ctx the parse tree
	 */
	enterOptionalGroup?: (ctx: OptionalGroupContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.optionalGroup`.
	 * @param ctx the parse tree
	 */
	exitOptionalGroup?: (ctx: OptionalGroupContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.requiredToken`.
	 * @param ctx the parse tree
	 */
	enterRequiredToken?: (ctx: RequiredTokenContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.requiredToken`.
	 * @param ctx the parse tree
	 */
	exitRequiredToken?: (ctx: RequiredTokenContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.literal`.
	 * @param ctx the parse tree
	 */
	enterLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.literal`.
	 * @param ctx the parse tree
	 */
	exitLiteral?: (ctx: LiteralContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.primitiveFieldName`.
	 * @param ctx the parse tree
	 */
	enterPrimitiveFieldName?: (ctx: PrimitiveFieldNameContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.primitiveFieldName`.
	 * @param ctx the parse tree
	 */
	exitPrimitiveFieldName?: (ctx: PrimitiveFieldNameContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.fieldSpec`.
	 * @param ctx the parse tree
	 */
	enterFieldSpec?: (ctx: FieldSpecContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.fieldSpec`.
	 * @param ctx the parse tree
	 */
	exitFieldSpec?: (ctx: FieldSpecContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.typeFieldSpec`.
	 * @param ctx the parse tree
	 */
	enterTypeFieldSpec?: (ctx: TypeFieldSpecContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.typeFieldSpec`.
	 * @param ctx the parse tree
	 */
	exitTypeFieldSpec?: (ctx: TypeFieldSpecContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.typeOptionalitySpec`.
	 * @param ctx the parse tree
	 */
	enterTypeOptionalitySpec?: (ctx: TypeOptionalitySpecContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.typeOptionalitySpec`.
	 * @param ctx the parse tree
	 */
	exitTypeOptionalitySpec?: (ctx: TypeOptionalitySpecContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.fixedTypeValueFieldSpec`.
	 * @param ctx the parse tree
	 */
	enterFixedTypeValueFieldSpec?: (ctx: FixedTypeValueFieldSpecContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.fixedTypeValueFieldSpec`.
	 * @param ctx the parse tree
	 */
	exitFixedTypeValueFieldSpec?: (ctx: FixedTypeValueFieldSpecContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.valueOptionalitySpec`.
	 * @param ctx the parse tree
	 */
	enterValueOptionalitySpec?: (ctx: ValueOptionalitySpecContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.valueOptionalitySpec`.
	 * @param ctx the parse tree
	 */
	exitValueOptionalitySpec?: (ctx: ValueOptionalitySpecContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.variableTypeValueFieldSpec`.
	 * @param ctx the parse tree
	 */
	enterVariableTypeValueFieldSpec?: (ctx: VariableTypeValueFieldSpecContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.variableTypeValueFieldSpec`.
	 * @param ctx the parse tree
	 */
	exitVariableTypeValueFieldSpec?: (ctx: VariableTypeValueFieldSpecContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.fixedTypeValueSetFieldSpec`.
	 * @param ctx the parse tree
	 */
	enterFixedTypeValueSetFieldSpec?: (ctx: FixedTypeValueSetFieldSpecContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.fixedTypeValueSetFieldSpec`.
	 * @param ctx the parse tree
	 */
	exitFixedTypeValueSetFieldSpec?: (ctx: FixedTypeValueSetFieldSpecContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.valueSetOptionalitySpec`.
	 * @param ctx the parse tree
	 */
	enterValueSetOptionalitySpec?: (ctx: ValueSetOptionalitySpecContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.valueSetOptionalitySpec`.
	 * @param ctx the parse tree
	 */
	exitValueSetOptionalitySpec?: (ctx: ValueSetOptionalitySpecContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.object`.
	 * @param ctx the parse tree
	 */
	enterObject?: (ctx: ObjectContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.object`.
	 * @param ctx the parse tree
	 */
	exitObject?: (ctx: ObjectContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.parameterizedObject`.
	 * @param ctx the parse tree
	 */
	enterParameterizedObject?: (ctx: ParameterizedObjectContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.parameterizedObject`.
	 * @param ctx the parse tree
	 */
	exitParameterizedObject?: (ctx: ParameterizedObjectContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.definedObject`.
	 * @param ctx the parse tree
	 */
	enterDefinedObject?: (ctx: DefinedObjectContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.definedObject`.
	 * @param ctx the parse tree
	 */
	exitDefinedObject?: (ctx: DefinedObjectContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.objectSet`.
	 * @param ctx the parse tree
	 */
	enterObjectSet?: (ctx: ObjectSetContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.objectSet`.
	 * @param ctx the parse tree
	 */
	exitObjectSet?: (ctx: ObjectSetContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.objectSetSpec`.
	 * @param ctx the parse tree
	 */
	enterObjectSetSpec?: (ctx: ObjectSetSpecContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.objectSetSpec`.
	 * @param ctx the parse tree
	 */
	exitObjectSetSpec?: (ctx: ObjectSetSpecContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.fieldName`.
	 * @param ctx the parse tree
	 */
	enterFieldName?: (ctx: FieldNameContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.fieldName`.
	 * @param ctx the parse tree
	 */
	exitFieldName?: (ctx: FieldNameContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.valueSet`.
	 * @param ctx the parse tree
	 */
	enterValueSet?: (ctx: ValueSetContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.valueSet`.
	 * @param ctx the parse tree
	 */
	exitValueSet?: (ctx: ValueSetContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.elementSetSpecs`.
	 * @param ctx the parse tree
	 */
	enterElementSetSpecs?: (ctx: ElementSetSpecsContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.elementSetSpecs`.
	 * @param ctx the parse tree
	 */
	exitElementSetSpecs?: (ctx: ElementSetSpecsContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.rootElementSetSpec`.
	 * @param ctx the parse tree
	 */
	enterRootElementSetSpec?: (ctx: RootElementSetSpecContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.rootElementSetSpec`.
	 * @param ctx the parse tree
	 */
	exitRootElementSetSpec?: (ctx: RootElementSetSpecContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.additionalElementSetSpec`.
	 * @param ctx the parse tree
	 */
	enterAdditionalElementSetSpec?: (ctx: AdditionalElementSetSpecContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.additionalElementSetSpec`.
	 * @param ctx the parse tree
	 */
	exitAdditionalElementSetSpec?: (ctx: AdditionalElementSetSpecContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.elementSetSpec`.
	 * @param ctx the parse tree
	 */
	enterElementSetSpec?: (ctx: ElementSetSpecContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.elementSetSpec`.
	 * @param ctx the parse tree
	 */
	exitElementSetSpec?: (ctx: ElementSetSpecContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.unions`.
	 * @param ctx the parse tree
	 */
	enterUnions?: (ctx: UnionsContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.unions`.
	 * @param ctx the parse tree
	 */
	exitUnions?: (ctx: UnionsContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.exclusions`.
	 * @param ctx the parse tree
	 */
	enterExclusions?: (ctx: ExclusionsContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.exclusions`.
	 * @param ctx the parse tree
	 */
	exitExclusions?: (ctx: ExclusionsContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.intersections`.
	 * @param ctx the parse tree
	 */
	enterIntersections?: (ctx: IntersectionsContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.intersections`.
	 * @param ctx the parse tree
	 */
	exitIntersections?: (ctx: IntersectionsContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.unionMark`.
	 * @param ctx the parse tree
	 */
	enterUnionMark?: (ctx: UnionMarkContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.unionMark`.
	 * @param ctx the parse tree
	 */
	exitUnionMark?: (ctx: UnionMarkContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.intersectionMark`.
	 * @param ctx the parse tree
	 */
	enterIntersectionMark?: (ctx: IntersectionMarkContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.intersectionMark`.
	 * @param ctx the parse tree
	 */
	exitIntersectionMark?: (ctx: IntersectionMarkContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.elements`.
	 * @param ctx the parse tree
	 */
	enterElements?: (ctx: ElementsContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.elements`.
	 * @param ctx the parse tree
	 */
	exitElements?: (ctx: ElementsContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.objectSetElements`.
	 * @param ctx the parse tree
	 */
	enterObjectSetElements?: (ctx: ObjectSetElementsContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.objectSetElements`.
	 * @param ctx the parse tree
	 */
	exitObjectSetElements?: (ctx: ObjectSetElementsContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.intersectionElements`.
	 * @param ctx the parse tree
	 */
	enterIntersectionElements?: (ctx: IntersectionElementsContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.intersectionElements`.
	 * @param ctx the parse tree
	 */
	exitIntersectionElements?: (ctx: IntersectionElementsContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.subtypeElements`.
	 * @param ctx the parse tree
	 */
	enterSubtypeElements?: (ctx: SubtypeElementsContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.subtypeElements`.
	 * @param ctx the parse tree
	 */
	exitSubtypeElements?: (ctx: SubtypeElementsContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.variableTypeValueSetFieldSpec`.
	 * @param ctx the parse tree
	 */
	enterVariableTypeValueSetFieldSpec?: (ctx: VariableTypeValueSetFieldSpecContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.variableTypeValueSetFieldSpec`.
	 * @param ctx the parse tree
	 */
	exitVariableTypeValueSetFieldSpec?: (ctx: VariableTypeValueSetFieldSpecContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.objectFieldSpec`.
	 * @param ctx the parse tree
	 */
	enterObjectFieldSpec?: (ctx: ObjectFieldSpecContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.objectFieldSpec`.
	 * @param ctx the parse tree
	 */
	exitObjectFieldSpec?: (ctx: ObjectFieldSpecContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.objectOptionalitySpec`.
	 * @param ctx the parse tree
	 */
	enterObjectOptionalitySpec?: (ctx: ObjectOptionalitySpecContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.objectOptionalitySpec`.
	 * @param ctx the parse tree
	 */
	exitObjectOptionalitySpec?: (ctx: ObjectOptionalitySpecContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.objectSetFieldSpec`.
	 * @param ctx the parse tree
	 */
	enterObjectSetFieldSpec?: (ctx: ObjectSetFieldSpecContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.objectSetFieldSpec`.
	 * @param ctx the parse tree
	 */
	exitObjectSetFieldSpec?: (ctx: ObjectSetFieldSpecContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.objectSetOptionalitySpec`.
	 * @param ctx the parse tree
	 */
	enterObjectSetOptionalitySpec?: (ctx: ObjectSetOptionalitySpecContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.objectSetOptionalitySpec`.
	 * @param ctx the parse tree
	 */
	exitObjectSetOptionalitySpec?: (ctx: ObjectSetOptionalitySpecContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.typeAssignment`.
	 * @param ctx the parse tree
	 */
	enterTypeAssignment?: (ctx: TypeAssignmentContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.typeAssignment`.
	 * @param ctx the parse tree
	 */
	exitTypeAssignment?: (ctx: TypeAssignmentContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.valueAssignment`.
	 * @param ctx the parse tree
	 */
	enterValueAssignment?: (ctx: ValueAssignmentContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.valueAssignment`.
	 * @param ctx the parse tree
	 */
	exitValueAssignment?: (ctx: ValueAssignmentContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.asnType`.
	 * @param ctx the parse tree
	 */
	enterAsnType?: (ctx: AsnTypeContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.asnType`.
	 * @param ctx the parse tree
	 */
	exitAsnType?: (ctx: AsnTypeContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.builtinType`.
	 * @param ctx the parse tree
	 */
	enterBuiltinType?: (ctx: BuiltinTypeContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.builtinType`.
	 * @param ctx the parse tree
	 */
	exitBuiltinType?: (ctx: BuiltinTypeContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.objectClassFieldType`.
	 * @param ctx the parse tree
	 */
	enterObjectClassFieldType?: (ctx: ObjectClassFieldTypeContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.objectClassFieldType`.
	 * @param ctx the parse tree
	 */
	exitObjectClassFieldType?: (ctx: ObjectClassFieldTypeContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.setType`.
	 * @param ctx the parse tree
	 */
	enterSetType?: (ctx: SetTypeContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.setType`.
	 * @param ctx the parse tree
	 */
	exitSetType?: (ctx: SetTypeContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.setOfType`.
	 * @param ctx the parse tree
	 */
	enterSetOfType?: (ctx: SetOfTypeContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.setOfType`.
	 * @param ctx the parse tree
	 */
	exitSetOfType?: (ctx: SetOfTypeContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.referencedType`.
	 * @param ctx the parse tree
	 */
	enterReferencedType?: (ctx: ReferencedTypeContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.referencedType`.
	 * @param ctx the parse tree
	 */
	exitReferencedType?: (ctx: ReferencedTypeContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.definedType`.
	 * @param ctx the parse tree
	 */
	enterDefinedType?: (ctx: DefinedTypeContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.definedType`.
	 * @param ctx the parse tree
	 */
	exitDefinedType?: (ctx: DefinedTypeContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.constraint`.
	 * @param ctx the parse tree
	 */
	enterConstraint?: (ctx: ConstraintContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.constraint`.
	 * @param ctx the parse tree
	 */
	exitConstraint?: (ctx: ConstraintContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.constraintSpec`.
	 * @param ctx the parse tree
	 */
	enterConstraintSpec?: (ctx: ConstraintSpecContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.constraintSpec`.
	 * @param ctx the parse tree
	 */
	exitConstraintSpec?: (ctx: ConstraintSpecContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.userDefinedConstraint`.
	 * @param ctx the parse tree
	 */
	enterUserDefinedConstraint?: (ctx: UserDefinedConstraintContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.userDefinedConstraint`.
	 * @param ctx the parse tree
	 */
	exitUserDefinedConstraint?: (ctx: UserDefinedConstraintContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.generalConstraint`.
	 * @param ctx the parse tree
	 */
	enterGeneralConstraint?: (ctx: GeneralConstraintContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.generalConstraint`.
	 * @param ctx the parse tree
	 */
	exitGeneralConstraint?: (ctx: GeneralConstraintContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.userDefinedConstraintParameter`.
	 * @param ctx the parse tree
	 */
	enterUserDefinedConstraintParameter?: (ctx: UserDefinedConstraintParameterContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.userDefinedConstraintParameter`.
	 * @param ctx the parse tree
	 */
	exitUserDefinedConstraintParameter?: (ctx: UserDefinedConstraintParameterContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.tableConstraint`.
	 * @param ctx the parse tree
	 */
	enterTableConstraint?: (ctx: TableConstraintContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.tableConstraint`.
	 * @param ctx the parse tree
	 */
	exitTableConstraint?: (ctx: TableConstraintContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.simpleTableConstraint`.
	 * @param ctx the parse tree
	 */
	enterSimpleTableConstraint?: (ctx: SimpleTableConstraintContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.simpleTableConstraint`.
	 * @param ctx the parse tree
	 */
	exitSimpleTableConstraint?: (ctx: SimpleTableConstraintContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.contentsConstraint`.
	 * @param ctx the parse tree
	 */
	enterContentsConstraint?: (ctx: ContentsConstraintContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.contentsConstraint`.
	 * @param ctx the parse tree
	 */
	exitContentsConstraint?: (ctx: ContentsConstraintContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.componentPresenceLists`.
	 * @param ctx the parse tree
	 */
	enterComponentPresenceLists?: (ctx: ComponentPresenceListsContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.componentPresenceLists`.
	 * @param ctx the parse tree
	 */
	exitComponentPresenceLists?: (ctx: ComponentPresenceListsContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.componentPresenceList`.
	 * @param ctx the parse tree
	 */
	enterComponentPresenceList?: (ctx: ComponentPresenceListContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.componentPresenceList`.
	 * @param ctx the parse tree
	 */
	exitComponentPresenceList?: (ctx: ComponentPresenceListContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.componentPresence`.
	 * @param ctx the parse tree
	 */
	enterComponentPresence?: (ctx: ComponentPresenceContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.componentPresence`.
	 * @param ctx the parse tree
	 */
	exitComponentPresence?: (ctx: ComponentPresenceContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.subtypeConstraint`.
	 * @param ctx the parse tree
	 */
	enterSubtypeConstraint?: (ctx: SubtypeConstraintContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.subtypeConstraint`.
	 * @param ctx the parse tree
	 */
	exitSubtypeConstraint?: (ctx: SubtypeConstraintContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.value`.
	 * @param ctx the parse tree
	 */
	enterValue?: (ctx: ValueContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.value`.
	 * @param ctx the parse tree
	 */
	exitValue?: (ctx: ValueContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.builtinValue`.
	 * @param ctx the parse tree
	 */
	enterBuiltinValue?: (ctx: BuiltinValueContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.builtinValue`.
	 * @param ctx the parse tree
	 */
	exitBuiltinValue?: (ctx: BuiltinValueContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.objectIdentifierValue`.
	 * @param ctx the parse tree
	 */
	enterObjectIdentifierValue?: (ctx: ObjectIdentifierValueContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.objectIdentifierValue`.
	 * @param ctx the parse tree
	 */
	exitObjectIdentifierValue?: (ctx: ObjectIdentifierValueContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.objIdComponentsList`.
	 * @param ctx the parse tree
	 */
	enterObjIdComponentsList?: (ctx: ObjIdComponentsListContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.objIdComponentsList`.
	 * @param ctx the parse tree
	 */
	exitObjIdComponentsList?: (ctx: ObjIdComponentsListContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.objIdComponents`.
	 * @param ctx the parse tree
	 */
	enterObjIdComponents?: (ctx: ObjIdComponentsContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.objIdComponents`.
	 * @param ctx the parse tree
	 */
	exitObjIdComponents?: (ctx: ObjIdComponentsContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.integerValue`.
	 * @param ctx the parse tree
	 */
	enterIntegerValue?: (ctx: IntegerValueContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.integerValue`.
	 * @param ctx the parse tree
	 */
	exitIntegerValue?: (ctx: IntegerValueContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.choiceValue`.
	 * @param ctx the parse tree
	 */
	enterChoiceValue?: (ctx: ChoiceValueContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.choiceValue`.
	 * @param ctx the parse tree
	 */
	exitChoiceValue?: (ctx: ChoiceValueContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.enumeratedValue`.
	 * @param ctx the parse tree
	 */
	enterEnumeratedValue?: (ctx: EnumeratedValueContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.enumeratedValue`.
	 * @param ctx the parse tree
	 */
	exitEnumeratedValue?: (ctx: EnumeratedValueContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.signedNumber`.
	 * @param ctx the parse tree
	 */
	enterSignedNumber?: (ctx: SignedNumberContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.signedNumber`.
	 * @param ctx the parse tree
	 */
	exitSignedNumber?: (ctx: SignedNumberContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.choiceType`.
	 * @param ctx the parse tree
	 */
	enterChoiceType?: (ctx: ChoiceTypeContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.choiceType`.
	 * @param ctx the parse tree
	 */
	exitChoiceType?: (ctx: ChoiceTypeContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.alternativeTypeLists`.
	 * @param ctx the parse tree
	 */
	enterAlternativeTypeLists?: (ctx: AlternativeTypeListsContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.alternativeTypeLists`.
	 * @param ctx the parse tree
	 */
	exitAlternativeTypeLists?: (ctx: AlternativeTypeListsContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.extensionAdditionAlternatives`.
	 * @param ctx the parse tree
	 */
	enterExtensionAdditionAlternatives?: (ctx: ExtensionAdditionAlternativesContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.extensionAdditionAlternatives`.
	 * @param ctx the parse tree
	 */
	exitExtensionAdditionAlternatives?: (ctx: ExtensionAdditionAlternativesContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.extensionAdditionAlternativesList`.
	 * @param ctx the parse tree
	 */
	enterExtensionAdditionAlternativesList?: (ctx: ExtensionAdditionAlternativesListContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.extensionAdditionAlternativesList`.
	 * @param ctx the parse tree
	 */
	exitExtensionAdditionAlternativesList?: (ctx: ExtensionAdditionAlternativesListContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.extensionAdditionAlternative`.
	 * @param ctx the parse tree
	 */
	enterExtensionAdditionAlternative?: (ctx: ExtensionAdditionAlternativeContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.extensionAdditionAlternative`.
	 * @param ctx the parse tree
	 */
	exitExtensionAdditionAlternative?: (ctx: ExtensionAdditionAlternativeContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.extensionAdditionAlternativesGroup`.
	 * @param ctx the parse tree
	 */
	enterExtensionAdditionAlternativesGroup?: (ctx: ExtensionAdditionAlternativesGroupContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.extensionAdditionAlternativesGroup`.
	 * @param ctx the parse tree
	 */
	exitExtensionAdditionAlternativesGroup?: (ctx: ExtensionAdditionAlternativesGroupContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.rootAlternativeTypeList`.
	 * @param ctx the parse tree
	 */
	enterRootAlternativeTypeList?: (ctx: RootAlternativeTypeListContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.rootAlternativeTypeList`.
	 * @param ctx the parse tree
	 */
	exitRootAlternativeTypeList?: (ctx: RootAlternativeTypeListContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.alternativeTypeList`.
	 * @param ctx the parse tree
	 */
	enterAlternativeTypeList?: (ctx: AlternativeTypeListContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.alternativeTypeList`.
	 * @param ctx the parse tree
	 */
	exitAlternativeTypeList?: (ctx: AlternativeTypeListContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.namedType`.
	 * @param ctx the parse tree
	 */
	enterNamedType?: (ctx: NamedTypeContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.namedType`.
	 * @param ctx the parse tree
	 */
	exitNamedType?: (ctx: NamedTypeContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.enumeratedType`.
	 * @param ctx the parse tree
	 */
	enterEnumeratedType?: (ctx: EnumeratedTypeContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.enumeratedType`.
	 * @param ctx the parse tree
	 */
	exitEnumeratedType?: (ctx: EnumeratedTypeContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.enumerations`.
	 * @param ctx the parse tree
	 */
	enterEnumerations?: (ctx: EnumerationsContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.enumerations`.
	 * @param ctx the parse tree
	 */
	exitEnumerations?: (ctx: EnumerationsContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.rootEnumeration`.
	 * @param ctx the parse tree
	 */
	enterRootEnumeration?: (ctx: RootEnumerationContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.rootEnumeration`.
	 * @param ctx the parse tree
	 */
	exitRootEnumeration?: (ctx: RootEnumerationContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.enumeration`.
	 * @param ctx the parse tree
	 */
	enterEnumeration?: (ctx: EnumerationContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.enumeration`.
	 * @param ctx the parse tree
	 */
	exitEnumeration?: (ctx: EnumerationContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.enumerationItem`.
	 * @param ctx the parse tree
	 */
	enterEnumerationItem?: (ctx: EnumerationItemContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.enumerationItem`.
	 * @param ctx the parse tree
	 */
	exitEnumerationItem?: (ctx: EnumerationItemContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.namedNumber`.
	 * @param ctx the parse tree
	 */
	enterNamedNumber?: (ctx: NamedNumberContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.namedNumber`.
	 * @param ctx the parse tree
	 */
	exitNamedNumber?: (ctx: NamedNumberContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.definedValue`.
	 * @param ctx the parse tree
	 */
	enterDefinedValue?: (ctx: DefinedValueContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.definedValue`.
	 * @param ctx the parse tree
	 */
	exitDefinedValue?: (ctx: DefinedValueContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.parameterizedValue`.
	 * @param ctx the parse tree
	 */
	enterParameterizedValue?: (ctx: ParameterizedValueContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.parameterizedValue`.
	 * @param ctx the parse tree
	 */
	exitParameterizedValue?: (ctx: ParameterizedValueContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.simpleDefinedValue`.
	 * @param ctx the parse tree
	 */
	enterSimpleDefinedValue?: (ctx: SimpleDefinedValueContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.simpleDefinedValue`.
	 * @param ctx the parse tree
	 */
	exitSimpleDefinedValue?: (ctx: SimpleDefinedValueContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.actualParameterList`.
	 * @param ctx the parse tree
	 */
	enterActualParameterList?: (ctx: ActualParameterListContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.actualParameterList`.
	 * @param ctx the parse tree
	 */
	exitActualParameterList?: (ctx: ActualParameterListContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.actualParameter`.
	 * @param ctx the parse tree
	 */
	enterActualParameter?: (ctx: ActualParameterContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.actualParameter`.
	 * @param ctx the parse tree
	 */
	exitActualParameter?: (ctx: ActualParameterContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.exceptionSpec`.
	 * @param ctx the parse tree
	 */
	enterExceptionSpec?: (ctx: ExceptionSpecContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.exceptionSpec`.
	 * @param ctx the parse tree
	 */
	exitExceptionSpec?: (ctx: ExceptionSpecContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.exceptionIdentification`.
	 * @param ctx the parse tree
	 */
	enterExceptionIdentification?: (ctx: ExceptionIdentificationContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.exceptionIdentification`.
	 * @param ctx the parse tree
	 */
	exitExceptionIdentification?: (ctx: ExceptionIdentificationContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.additionalEnumeration`.
	 * @param ctx the parse tree
	 */
	enterAdditionalEnumeration?: (ctx: AdditionalEnumerationContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.additionalEnumeration`.
	 * @param ctx the parse tree
	 */
	exitAdditionalEnumeration?: (ctx: AdditionalEnumerationContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.integerType`.
	 * @param ctx the parse tree
	 */
	enterIntegerType?: (ctx: IntegerTypeContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.integerType`.
	 * @param ctx the parse tree
	 */
	exitIntegerType?: (ctx: IntegerTypeContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.namedNumberList`.
	 * @param ctx the parse tree
	 */
	enterNamedNumberList?: (ctx: NamedNumberListContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.namedNumberList`.
	 * @param ctx the parse tree
	 */
	exitNamedNumberList?: (ctx: NamedNumberListContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.objectidentifiertype`.
	 * @param ctx the parse tree
	 */
	enterObjectidentifiertype?: (ctx: ObjectidentifiertypeContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.objectidentifiertype`.
	 * @param ctx the parse tree
	 */
	exitObjectidentifiertype?: (ctx: ObjectidentifiertypeContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.componentRelationConstraint`.
	 * @param ctx the parse tree
	 */
	enterComponentRelationConstraint?: (ctx: ComponentRelationConstraintContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.componentRelationConstraint`.
	 * @param ctx the parse tree
	 */
	exitComponentRelationConstraint?: (ctx: ComponentRelationConstraintContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.atNotation`.
	 * @param ctx the parse tree
	 */
	enterAtNotation?: (ctx: AtNotationContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.atNotation`.
	 * @param ctx the parse tree
	 */
	exitAtNotation?: (ctx: AtNotationContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.level`.
	 * @param ctx the parse tree
	 */
	enterLevel?: (ctx: LevelContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.level`.
	 * @param ctx the parse tree
	 */
	exitLevel?: (ctx: LevelContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.componentIdList`.
	 * @param ctx the parse tree
	 */
	enterComponentIdList?: (ctx: ComponentIdListContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.componentIdList`.
	 * @param ctx the parse tree
	 */
	exitComponentIdList?: (ctx: ComponentIdListContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.octetStringType`.
	 * @param ctx the parse tree
	 */
	enterOctetStringType?: (ctx: OctetStringTypeContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.octetStringType`.
	 * @param ctx the parse tree
	 */
	exitOctetStringType?: (ctx: OctetStringTypeContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.bitStringType`.
	 * @param ctx the parse tree
	 */
	enterBitStringType?: (ctx: BitStringTypeContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.bitStringType`.
	 * @param ctx the parse tree
	 */
	exitBitStringType?: (ctx: BitStringTypeContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.namedBitList`.
	 * @param ctx the parse tree
	 */
	enterNamedBitList?: (ctx: NamedBitListContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.namedBitList`.
	 * @param ctx the parse tree
	 */
	exitNamedBitList?: (ctx: NamedBitListContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.namedBit`.
	 * @param ctx the parse tree
	 */
	enterNamedBit?: (ctx: NamedBitContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.namedBit`.
	 * @param ctx the parse tree
	 */
	exitNamedBit?: (ctx: NamedBitContext) => void;

	/**
	 * Enter a parse tree produced by `ASN_3gppParser.booleanValue`.
	 * @param ctx the parse tree
	 */
	enterBooleanValue?: (ctx: BooleanValueContext) => void;
	/**
	 * Exit a parse tree produced by `ASN_3gppParser.booleanValue`.
	 * @param ctx the parse tree
	 */
	exitBooleanValue?: (ctx: BooleanValueContext) => void;
}

