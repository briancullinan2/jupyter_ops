// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/edif300/EDIF300.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { GoalContext } from "./EDIF300Parser";
import { AbsoluteContext } from "./EDIF300Parser";
import { AcLoadContext } from "./EDIF300Parser";
import { AcLoadDisplayContext } from "./EDIF300Parser";
import { AcLoadFactorCapacitanceContext } from "./EDIF300Parser";
import { AcLoadFactorTimeContext } from "./EDIF300Parser";
import { AddDisplayContext } from "./EDIF300Parser";
import { AmpereContext } from "./EDIF300Parser";
import { And_Context } from "./EDIF300Parser";
import { AngleValueContext } from "./EDIF300Parser";
import { AnnotateContext } from "./EDIF300Parser";
import { ApprovedDateContext } from "./EDIF300Parser";
import { ApprovedDateDisplayContext } from "./EDIF300Parser";
import { ArcContext } from "./EDIF300Parser";
import { AsciiContext } from "./EDIF300Parser";
import { AssociatedInterconnectNameDisplayContext } from "./EDIF300Parser";
import { AttachmentPointContext } from "./EDIF300Parser";
import { AuthorContext } from "./EDIF300Parser";
import { BackgroundColorContext } from "./EDIF300Parser";
import { BaselineJustifyContext } from "./EDIF300Parser";
import { BecomesContext } from "./EDIF300Parser";
import { BehaviorViewContext } from "./EDIF300Parser";
import { BidirectionalContext } from "./EDIF300Parser";
import { BidirectionalPortContext } from "./EDIF300Parser";
import { BidirectionalPortAttributesContext } from "./EDIF300Parser";
import { BitOrderContext } from "./EDIF300Parser";
import { BlueContext } from "./EDIF300Parser";
import { BoldStyleContext } from "./EDIF300Parser";
import { EbooleanContext } from "./EDIF300Parser";
import { BooleanConstantContext } from "./EDIF300Parser";
import { BooleanConstantRefContext } from "./EDIF300Parser";
import { BooleanExpressionContext } from "./EDIF300Parser";
import { BooleanMapContext } from "./EDIF300Parser";
import { BooleanParameterContext } from "./EDIF300Parser";
import { BooleanParameterAssignContext } from "./EDIF300Parser";
import { BooleanParameterRefContext } from "./EDIF300Parser";
import { BooleanTokenContext } from "./EDIF300Parser";
import { BooleanValueContext } from "./EDIF300Parser";
import { BorderPatternContext } from "./EDIF300Parser";
import { BorderPatternVisibleContext } from "./EDIF300Parser";
import { BorderWidthContext } from "./EDIF300Parser";
import { BottomJustifyContext } from "./EDIF300Parser";
import { CalculatedContext } from "./EDIF300Parser";
import { CandelaContext } from "./EDIF300Parser";
import { CapacitanceValueContext } from "./EDIF300Parser";
import { CaplineJustifyContext } from "./EDIF300Parser";
import { CellContext } from "./EDIF300Parser";
import { CellHeaderContext } from "./EDIF300Parser";
import { CellNameDisplayContext } from "./EDIF300Parser";
import { CellPropertyDisplayContext } from "./EDIF300Parser";
import { CellPropertyDisplayOverrideContext } from "./EDIF300Parser";
import { CellPropertyOverrideContext } from "./EDIF300Parser";
import { CellRefContext } from "./EDIF300Parser";
import { CelsiusContext } from "./EDIF300Parser";
import { CenterJustifyContext } from "./EDIF300Parser";
import { CharacterEncodingContext } from "./EDIF300Parser";
import { CheckDateContext } from "./EDIF300Parser";
import { CheckDateDisplayContext } from "./EDIF300Parser";
import { CircleContext } from "./EDIF300Parser";
import { ClusterContext } from "./EDIF300Parser";
import { ClusterConfigurationContext } from "./EDIF300Parser";
import { ClusterConfigurationNameCaseSensitiveContext } from "./EDIF300Parser";
import { ClusterConfigurationNameDefContext } from "./EDIF300Parser";
import { ClusterConfigurationNameRefContext } from "./EDIF300Parser";
import { ClusterConfigurationRefContext } from "./EDIF300Parser";
import { ClusterHeaderContext } from "./EDIF300Parser";
import { ClusterNameCaseSensitiveContext } from "./EDIF300Parser";
import { ClusterNameDefContext } from "./EDIF300Parser";
import { ClusterNameRefContext } from "./EDIF300Parser";
import { ClusterPropertyDisplayContext } from "./EDIF300Parser";
import { ClusterPropertyDisplayOverrideContext } from "./EDIF300Parser";
import { ClusterPropertyOverrideContext } from "./EDIF300Parser";
import { ClusterRefContext } from "./EDIF300Parser";
import { ColorContext } from "./EDIF300Parser";
import { CommentContext } from "./EDIF300Parser";
import { CommentGraphicsContext } from "./EDIF300Parser";
import { CompanyNameContext } from "./EDIF300Parser";
import { CompanyNameDisplayContext } from "./EDIF300Parser";
import { ComplementedNameContext } from "./EDIF300Parser";
import { ComplementedNamePartContext } from "./EDIF300Parser";
import { ComplexGeometryContext } from "./EDIF300Parser";
import { ComplexNameContext } from "./EDIF300Parser";
import { CompoundContext } from "./EDIF300Parser";
import { ConditionContext } from "./EDIF300Parser";
import { ConditionDisplayContext } from "./EDIF300Parser";
import { ConnectedSignalIndexGeneratorContext } from "./EDIF300Parser";
import { ConnectedSignalIndexGeneratorDisplayContext } from "./EDIF300Parser";
import { ConnectivityBusContext } from "./EDIF300Parser";
import { ConnectivityBusJoinedContext } from "./EDIF300Parser";
import { ConnectivityBusSliceContext } from "./EDIF300Parser";
import { ConnectivityFrameStructureContext } from "./EDIF300Parser";
import { ConnectivityFrameStructureNameDefContext } from "./EDIF300Parser";
import { ConnectivityNetContext } from "./EDIF300Parser";
import { ConnectivityNetJoinedContext } from "./EDIF300Parser";
import { ConnectivityRipperContext } from "./EDIF300Parser";
import { ConnectivityRipperNameDefContext } from "./EDIF300Parser";
import { ConnectivityRipperNameRefContext } from "./EDIF300Parser";
import { ConnectivityRipperRefContext } from "./EDIF300Parser";
import { ConnectivityStructureContext } from "./EDIF300Parser";
import { ConnectivitySubBusContext } from "./EDIF300Parser";
import { ConnectivitySubNetContext } from "./EDIF300Parser";
import { ConnectivityTagGeneratorContext } from "./EDIF300Parser";
import { ConnectivityTagGeneratorDisplayContext } from "./EDIF300Parser";
import { ConnectivityUnitsContext } from "./EDIF300Parser";
import { ConnectivityViewContext } from "./EDIF300Parser";
import { ConnectivityViewHeaderContext } from "./EDIF300Parser";
import { ConstantNameDefContext } from "./EDIF300Parser";
import { ConstantNameRefContext } from "./EDIF300Parser";
import { ConstantValuesContext } from "./EDIF300Parser";
import { ContractContext } from "./EDIF300Parser";
import { ContractDisplayContext } from "./EDIF300Parser";
import { CopyrightContext } from "./EDIF300Parser";
import { CopyrightDisplayContext } from "./EDIF300Parser";
import { CornerTypeContext } from "./EDIF300Parser";
import { CoulombContext } from "./EDIF300Parser";
import { CriticalityContext } from "./EDIF300Parser";
import { CriticalityDisplayContext } from "./EDIF300Parser";
import { CurrentMapContext } from "./EDIF300Parser";
import { CurrentValueContext } from "./EDIF300Parser";
import { CurveContext } from "./EDIF300Parser";
import { DataOriginContext } from "./EDIF300Parser";
import { DateContext } from "./EDIF300Parser";
import { DayNumberContext } from "./EDIF300Parser";
import { DcFanInLoadContext } from "./EDIF300Parser";
import { DcFanInLoadDisplayContext } from "./EDIF300Parser";
import { DcFanOutLoadContext } from "./EDIF300Parser";
import { DcFanOutLoadDisplayContext } from "./EDIF300Parser";
import { DcMaxFanInContext } from "./EDIF300Parser";
import { DcMaxFanInDisplayContext } from "./EDIF300Parser";
import { DcMaxFanOutContext } from "./EDIF300Parser";
import { DcMaxFanOutDisplayContext } from "./EDIF300Parser";
import { DecimalToStringContext } from "./EDIF300Parser";
import { DefaultClusterConfigurationContext } from "./EDIF300Parser";
import { DefaultConnectionContext } from "./EDIF300Parser";
import { DegreeContext } from "./EDIF300Parser";
import { DelayContext } from "./EDIF300Parser";
import { DenominatorContext } from "./EDIF300Parser";
import { DerivationContext } from "./EDIF300Parser";
import { DerivedFromContext } from "./EDIF300Parser";
import { DesignContext } from "./EDIF300Parser";
import { DesignatorContext } from "./EDIF300Parser";
import { DesignatorDisplayContext } from "./EDIF300Parser";
import { DesignHeaderContext } from "./EDIF300Parser";
import { DesignHierarchyContext } from "./EDIF300Parser";
import { DesignHierarchyHeaderContext } from "./EDIF300Parser";
import { DesignHierarchyNameCaseSensitiveContext } from "./EDIF300Parser";
import { DesignHierarchyNameDefContext } from "./EDIF300Parser";
import { DesignNameCaseSensitiveContext } from "./EDIF300Parser";
import { DesignNameDefContext } from "./EDIF300Parser";
import { DesignUnitsContext } from "./EDIF300Parser";
import { DiagramContext } from "./EDIF300Parser";
import { DiagramNameDefContext } from "./EDIF300Parser";
import { DirectionalPortAttributeOverrideContext } from "./EDIF300Parser";
import { DisplayContext } from "./EDIF300Parser";
import { DisplayAttributesContext } from "./EDIF300Parser";
import { DisplayNameContext } from "./EDIF300Parser";
import { DisplayNameOverrideContext } from "./EDIF300Parser";
import { DistanceValueContext } from "./EDIF300Parser";
import { DividendContext } from "./EDIF300Parser";
import { DivisorContext } from "./EDIF300Parser";
import { DocumentationContext } from "./EDIF300Parser";
import { DocumentationHeaderContext } from "./EDIF300Parser";
import { DocumentationNameCaseSensitiveContext } from "./EDIF300Parser";
import { DocumentationNameDefContext } from "./EDIF300Parser";
import { DocumentationUnitsContext } from "./EDIF300Parser";
import { DominatesContext } from "./EDIF300Parser";
import { DotContext } from "./EDIF300Parser";
import { DrawingDescriptionContext } from "./EDIF300Parser";
import { DrawingDescriptionDisplayContext } from "./EDIF300Parser";
import { DrawingIdentificationContext } from "./EDIF300Parser";
import { DrawingIdentificationDisplayContext } from "./EDIF300Parser";
import { DrawingSizeContext } from "./EDIF300Parser";
import { DrawingSizeDisplayContext } from "./EDIF300Parser";
import { DurationContext } from "./EDIF300Parser";
import { EContext } from "./EDIF300Parser";
import { EdifContext } from "./EDIF300Parser";
import { EdifHeaderContext } from "./EDIF300Parser";
import { EdifLevelContext } from "./EDIF300Parser";
import { EdifLevelValueContext } from "./EDIF300Parser";
import { EdifNameDefContext } from "./EDIF300Parser";
import { EdifVersionContext } from "./EDIF300Parser";
import { EndPointContext } from "./EDIF300Parser";
import { EndTypeContext } from "./EDIF300Parser";
import { EngineeringDateContext } from "./EDIF300Parser";
import { EngineeringDateDisplayContext } from "./EDIF300Parser";
import { EventContext } from "./EDIF300Parser";
import { ExponentContext } from "./EDIF300Parser";
import { ExtendContext } from "./EDIF300Parser";
import { ExtendForFrameMemberDefContext } from "./EDIF300Parser";
import { ExtendFrameDefContext } from "./EDIF300Parser";
import { ExtendInstanceDefContext } from "./EDIF300Parser";
import { ExtendInstanceMemberDefContext } from "./EDIF300Parser";
import { ExtendInterconnectDefContext } from "./EDIF300Parser";
import { ExtendPageDefContext } from "./EDIF300Parser";
import { ExtendPortDefContext } from "./EDIF300Parser";
import { ExtendPortMemberDefContext } from "./EDIF300Parser";
import { ExtendSignalDefContext } from "./EDIF300Parser";
import { ExtendSignalGroupDefContext } from "./EDIF300Parser";
import { ExtendSignalMemberDefContext } from "./EDIF300Parser";
import { ExternalContext } from "./EDIF300Parser";
import { FahrenheitContext } from "./EDIF300Parser";
import { EfalseContext } from "./EDIF300Parser";
import { FaradContext } from "./EDIF300Parser";
import { FigureContext } from "./EDIF300Parser";
import { FigureGroupContext } from "./EDIF300Parser";
import { FigureGroupNameCaseSensitiveContext } from "./EDIF300Parser";
import { FigureGroupNameDefContext } from "./EDIF300Parser";
import { FigureGroupNameRefContext } from "./EDIF300Parser";
import { FigureGroupOverrideContext } from "./EDIF300Parser";
import { FillPatternContext } from "./EDIF300Parser";
import { FillPatternVisibleContext } from "./EDIF300Parser";
import { FirstIntegerExpressionContext } from "./EDIF300Parser";
import { FirstStringExpressionContext } from "./EDIF300Parser";
import { FixedContext } from "./EDIF300Parser";
import { FontContext } from "./EDIF300Parser";
import { FontCapitalHeightContext } from "./EDIF300Parser";
import { FontDefinitionsContext } from "./EDIF300Parser";
import { FontDescentContext } from "./EDIF300Parser";
import { FontFamilyContext } from "./EDIF300Parser";
import { FontHeightContext } from "./EDIF300Parser";
import { FontNameDefContext } from "./EDIF300Parser";
import { FontNameRefContext } from "./EDIF300Parser";
import { FontProportionsContext } from "./EDIF300Parser";
import { FontRefContext } from "./EDIF300Parser";
import { FontsContext } from "./EDIF300Parser";
import { FontWidthContext } from "./EDIF300Parser";
import { ForbiddenEventContext } from "./EDIF300Parser";
import { ForFrameContext } from "./EDIF300Parser";
import { ForFrameAnnotateContext } from "./EDIF300Parser";
import { ForFrameIndexContext } from "./EDIF300Parser";
import { ForFrameIndexDisplayContext } from "./EDIF300Parser";
import { ForFrameIndexNameCaseSensitiveContext } from "./EDIF300Parser";
import { ForFrameIndexRefContext } from "./EDIF300Parser";
import { ForFrameMemberRefContext } from "./EDIF300Parser";
import { ForFrameRefContext } from "./EDIF300Parser";
import { FrameConfigurationContext } from "./EDIF300Parser";
import { FrameNameCaseSensitiveContext } from "./EDIF300Parser";
import { FrameNameDefContext } from "./EDIF300Parser";
import { FrameNameRefContext } from "./EDIF300Parser";
import { FrameRefContext } from "./EDIF300Parser";
import { FrequencyValueContext } from "./EDIF300Parser";
import { FromBottomContext } from "./EDIF300Parser";
import { FromIntegerContext } from "./EDIF300Parser";
import { FromLeftContext } from "./EDIF300Parser";
import { FromRightContext } from "./EDIF300Parser";
import { FromTopContext } from "./EDIF300Parser";
import { GeneratedContext } from "./EDIF300Parser";
import { GeometryMacroContext } from "./EDIF300Parser";
import { GeometryMacroHeaderContext } from "./EDIF300Parser";
import { GeometryMacroRefContext } from "./EDIF300Parser";
import { GeometryMacroUnitsContext } from "./EDIF300Parser";
import { GlobalPortContext } from "./EDIF300Parser";
import { GlobalPortBundleContext } from "./EDIF300Parser";
import { GlobalPortDefinitionsContext } from "./EDIF300Parser";
import { GlobalPortListContext } from "./EDIF300Parser";
import { GlobalPortNameCaseSensitiveContext } from "./EDIF300Parser";
import { GlobalPortNameDefContext } from "./EDIF300Parser";
import { GlobalPortNameDisplayContext } from "./EDIF300Parser";
import { GlobalPortNameRefContext } from "./EDIF300Parser";
import { GlobalPortPropertyDisplayContext } from "./EDIF300Parser";
import { GlobalPortRefContext } from "./EDIF300Parser";
import { GlobalPortScopeContext } from "./EDIF300Parser";
import { GreenContext } from "./EDIF300Parser";
import { HenryContext } from "./EDIF300Parser";
import { HertzContext } from "./EDIF300Parser";
import { HorizontalJustificationContext } from "./EDIF300Parser";
import { HotspotContext } from "./EDIF300Parser";
import { HotspotConnectDirectionContext } from "./EDIF300Parser";
import { HotspotGridContext } from "./EDIF300Parser";
import { HotspotNameCaseSensitiveContext } from "./EDIF300Parser";
import { HotspotNameDefContext } from "./EDIF300Parser";
import { HotspotNameDisplayContext } from "./EDIF300Parser";
import { HotspotNameRefContext } from "./EDIF300Parser";
import { HourNumberContext } from "./EDIF300Parser";
import { IeeeDesignationContext } from "./EDIF300Parser";
import { IeeeSectionContext } from "./EDIF300Parser";
import { IeeeStandardContext } from "./EDIF300Parser";
import { IfFrameContext } from "./EDIF300Parser";
import { IfFrameAnnotateContext } from "./EDIF300Parser";
import { IfFrameRefContext } from "./EDIF300Parser";
import { IfFrameSetContext } from "./EDIF300Parser";
import { IgnoreContext } from "./EDIF300Parser";
import { ImplementationNameCaseSensitiveContext } from "./EDIF300Parser";
import { ImplementationNameDefContext } from "./EDIF300Parser";
import { ImplementationNameDisplayContext } from "./EDIF300Parser";
import { ImplementationNameRefContext } from "./EDIF300Parser";
import { IndexEndDisplayContext } from "./EDIF300Parser";
import { IndexNameDefContext } from "./EDIF300Parser";
import { IndexNameDisplayContext } from "./EDIF300Parser";
import { IndexNameRefContext } from "./EDIF300Parser";
import { IndexStartContext } from "./EDIF300Parser";
import { IndexStartDisplayContext } from "./EDIF300Parser";
import { IndexStepContext } from "./EDIF300Parser";
import { IndexStepDisplayContext } from "./EDIF300Parser";
import { IndexValueContext } from "./EDIF300Parser";
import { InputContext } from "./EDIF300Parser";
import { InputPortContext } from "./EDIF300Parser";
import { InputPortAttributesContext } from "./EDIF300Parser";
import { InstanceContext } from "./EDIF300Parser";
import { InstanceConfigurationContext } from "./EDIF300Parser";
import { InstanceIndexValueContext } from "./EDIF300Parser";
import { InstanceMemberRefContext } from "./EDIF300Parser";
import { InstanceNameCaseSensitiveContext } from "./EDIF300Parser";
import { InstanceNameDefContext } from "./EDIF300Parser";
import { InstanceNameDisplayContext } from "./EDIF300Parser";
import { InstanceNameGeneratorContext } from "./EDIF300Parser";
import { InstanceNameGeneratorDisplayContext } from "./EDIF300Parser";
import { InstanceNameRefContext } from "./EDIF300Parser";
import { InstancePortAttributeDisplayContext } from "./EDIF300Parser";
import { InstancePortAttributesContext } from "./EDIF300Parser";
import { InstancePropertyDisplayContext } from "./EDIF300Parser";
import { InstancePropertyOverrideContext } from "./EDIF300Parser";
import { InstanceRefContext } from "./EDIF300Parser";
import { InstanceWidthContext } from "./EDIF300Parser";
import { InstanceWidthDisplayContext } from "./EDIF300Parser";
import { IntegerContext } from "./EDIF300Parser";
import { IntegerConstantContext } from "./EDIF300Parser";
import { IntegerConstantRefContext } from "./EDIF300Parser";
import { IntegerEqualContext } from "./EDIF300Parser";
import { IntegerExpressionContext } from "./EDIF300Parser";
import { IntegerParameterContext } from "./EDIF300Parser";
import { IntegerParameterAssignContext } from "./EDIF300Parser";
import { IntegerParameterRefContext } from "./EDIF300Parser";
import { IntegerProductContext } from "./EDIF300Parser";
import { IntegerQuotientContext } from "./EDIF300Parser";
import { IntegerRemainderContext } from "./EDIF300Parser";
import { IntegerSubtractContext } from "./EDIF300Parser";
import { IntegerSumContext } from "./EDIF300Parser";
import { IntegerValueContext } from "./EDIF300Parser";
import { InterconnectAnnotateContext } from "./EDIF300Parser";
import { InterconnectAttachedTextContext } from "./EDIF300Parser";
import { InterconnectDelayContext } from "./EDIF300Parser";
import { InterconnectDelayDisplayContext } from "./EDIF300Parser";
import { InterconnectDelayNameDefContext } from "./EDIF300Parser";
import { InterconnectDelayNameRefContext } from "./EDIF300Parser";
import { InterconnectHeaderContext } from "./EDIF300Parser";
import { InterconnectNameCaseSensitiveContext } from "./EDIF300Parser";
import { InterconnectNameDefContext } from "./EDIF300Parser";
import { InterconnectNameDisplayContext } from "./EDIF300Parser";
import { InterconnectNameRefContext } from "./EDIF300Parser";
import { InterconnectPropertyDisplayContext } from "./EDIF300Parser";
import { InterconnectRefContext } from "./EDIF300Parser";
import { InterconnectSetContext } from "./EDIF300Parser";
import { EinterfaceContext } from "./EDIF300Parser";
import { InterfaceJoinedContext } from "./EDIF300Parser";
import { InterfaceUnitsContext } from "./EDIF300Parser";
import { Iso8859Context } from "./EDIF300Parser";
import { Iso8859PartContext } from "./EDIF300Parser";
import { IsolatedContext } from "./EDIF300Parser";
import { IssueContext } from "./EDIF300Parser";
import { ItalicStyleContext } from "./EDIF300Parser";
import { Jisx0201Context } from "./EDIF300Parser";
import { Jisx0208Context } from "./EDIF300Parser";
import { JoinedAsSignalContext } from "./EDIF300Parser";
import { JouleContext } from "./EDIF300Parser";
import { K0KeywordLevelContext } from "./EDIF300Parser";
import { K1KeywordAliasContext } from "./EDIF300Parser";
import { K1KeywordLevelContext } from "./EDIF300Parser";
import { K1KeywordNameDefContext } from "./EDIF300Parser";
import { K1KeywordNameRefContext } from "./EDIF300Parser";
import { K2ActualContext } from "./EDIF300Parser";
import { K2BuildContext } from "./EDIF300Parser";
import { K2FormalContext } from "./EDIF300Parser";
import { K2FormalNameDefContext } from "./EDIF300Parser";
import { K2FormalNameRefContext } from "./EDIF300Parser";
import { K2GenerateContext } from "./EDIF300Parser";
import { K2KeywordDefineContext } from "./EDIF300Parser";
import { K2KeywordLevelContext } from "./EDIF300Parser";
import { K2KeywordParametersContext } from "./EDIF300Parser";
import { K2LiteralContext } from "./EDIF300Parser";
import { K2OptionalContext } from "./EDIF300Parser";
import { K2RequiredContext } from "./EDIF300Parser";
import { K3BuildContext } from "./EDIF300Parser";
import { K3CollectorContext } from "./EDIF300Parser";
import { K3ForEachContext } from "./EDIF300Parser";
import { K3FormalContext } from "./EDIF300Parser";
import { K3FormalListContext } from "./EDIF300Parser";
import { K3GenerateContext } from "./EDIF300Parser";
import { K3KeywordDefineContext } from "./EDIF300Parser";
import { K3KeywordLevelContext } from "./EDIF300Parser";
import { K3KeywordParametersContext } from "./EDIF300Parser";
import { KelvinContext } from "./EDIF300Parser";
import { KeywordMapContext } from "./EDIF300Parser";
import { KilogramContext } from "./EDIF300Parser";
import { LeafContext } from "./EDIF300Parser";
import { LeafOccurrenceAnnotateContext } from "./EDIF300Parser";
import { LeftJustifyContext } from "./EDIF300Parser";
import { LengthValueContext } from "./EDIF300Parser";
import { LessThanContext } from "./EDIF300Parser";
import { LessThanOrEqualContext } from "./EDIF300Parser";
import { LibraryContext } from "./EDIF300Parser";
import { LibraryHeaderContext } from "./EDIF300Parser";
import { LibraryNameCaseSensitiveContext } from "./EDIF300Parser";
import { LibraryNameDefContext } from "./EDIF300Parser";
import { LibraryNameRefContext } from "./EDIF300Parser";
import { LibraryObjectNameCaseSensitiveContext } from "./EDIF300Parser";
import { LibraryObjectNameDefContext } from "./EDIF300Parser";
import { LibraryObjectNameRefContext } from "./EDIF300Parser";
import { LibraryRefContext } from "./EDIF300Parser";
import { LoadDelayContext } from "./EDIF300Parser";
import { LocalPortGroupContext } from "./EDIF300Parser";
import { LocalPortGroupNameCaseSensitiveContext } from "./EDIF300Parser";
import { LocalPortGroupNameDefContext } from "./EDIF300Parser";
import { LocalPortGroupNameRefContext } from "./EDIF300Parser";
import { LocalPortGroupRefContext } from "./EDIF300Parser";
import { LogicalConnectivityContext } from "./EDIF300Parser";
import { LogicDefinitionsContext } from "./EDIF300Parser";
import { LogicListContext } from "./EDIF300Parser";
import { LogicMapInputContext } from "./EDIF300Parser";
import { LogicMapOutputContext } from "./EDIF300Parser";
import { LogicModelUnitsContext } from "./EDIF300Parser";
import { LogicModelViewContext } from "./EDIF300Parser";
import { LogicNameDefContext } from "./EDIF300Parser";
import { LogicNameRefContext } from "./EDIF300Parser";
import { LogicOneOfContext } from "./EDIF300Parser";
import { LogicRefContext } from "./EDIF300Parser";
import { LogicValueContext } from "./EDIF300Parser";
import { LsbToMsbContext } from "./EDIF300Parser";
import { MantissaContext } from "./EDIF300Parser";
import { MarkContext } from "./EDIF300Parser";
import { MaskLayoutUnitsContext } from "./EDIF300Parser";
import { MaskLayoutViewContext } from "./EDIF300Parser";
import { MeasuredContext } from "./EDIF300Parser";
import { MeterContext } from "./EDIF300Parser";
import { MiddleJustifyContext } from "./EDIF300Parser";
import { MinimalWidthContext } from "./EDIF300Parser";
import { MinimumStringLengthContext } from "./EDIF300Parser";
import { MiNoMaxContext } from "./EDIF300Parser";
import { MiNoMaxValueContext } from "./EDIF300Parser";
import { MinuendContext } from "./EDIF300Parser";
import { MinuteNumberContext } from "./EDIF300Parser";
import { MixedDirectionContext } from "./EDIF300Parser";
import { MnmContext } from "./EDIF300Parser";
import { MoleContext } from "./EDIF300Parser";
import { MonthNumberContext } from "./EDIF300Parser";
import { MsbToLsbContext } from "./EDIF300Parser";
import { MustJoinContext } from "./EDIF300Parser";
import { NameAliasContext } from "./EDIF300Parser";
import { NameCaseSensitivityContext } from "./EDIF300Parser";
import { NameDefContext } from "./EDIF300Parser";
import { NameDimensionContext } from "./EDIF300Parser";
import { NameDimensionStructureContext } from "./EDIF300Parser";
import { NameInformationContext } from "./EDIF300Parser";
import { NamePartSeparatorContext } from "./EDIF300Parser";
import { NameRefContext } from "./EDIF300Parser";
import { NameStructureContext } from "./EDIF300Parser";
import { NarrowPortContext } from "./EDIF300Parser";
import { NarrowWireContext } from "./EDIF300Parser";
import { NoHotspotGridContext } from "./EDIF300Parser";
import { NominalHotspotGridContext } from "./EDIF300Parser";
import { NonPermutableContext } from "./EDIF300Parser";
import { Not_Context } from "./EDIF300Parser";
import { NotInheritedContext } from "./EDIF300Parser";
import { NumberContext } from "./EDIF300Parser";
import { NumberExpressionContext } from "./EDIF300Parser";
import { NumberOfBasicUnitsContext } from "./EDIF300Parser";
import { NumberOfNewUnitsContext } from "./EDIF300Parser";
import { NumberParameterContext } from "./EDIF300Parser";
import { NumberParameterAssignContext } from "./EDIF300Parser";
import { NumberParameterRefContext } from "./EDIF300Parser";
import { NumberPointContext } from "./EDIF300Parser";
import { NumberValueContext } from "./EDIF300Parser";
import { NumeratorContext } from "./EDIF300Parser";
import { OccurrenceAnnotateContext } from "./EDIF300Parser";
import { OccurrenceHierarchyAnnotateContext } from "./EDIF300Parser";
import { OffsetEventContext } from "./EDIF300Parser";
import { OhmContext } from "./EDIF300Parser";
import { OpenShapeContext } from "./EDIF300Parser";
import { Or_Context } from "./EDIF300Parser";
import { OriginContext } from "./EDIF300Parser";
import { OriginalBoundingBoxContext } from "./EDIF300Parser";
import { OriginalDrawingDateContext } from "./EDIF300Parser";
import { OriginalDrawingDateDisplayContext } from "./EDIF300Parser";
import { OriginalNameContext } from "./EDIF300Parser";
import { OtherwiseFrameContext } from "./EDIF300Parser";
import { OtherwiseFrameAnnotateContext } from "./EDIF300Parser";
import { OtherwiseFrameRefContext } from "./EDIF300Parser";
import { OutputContext } from "./EDIF300Parser";
import { OutputPortContext } from "./EDIF300Parser";
import { OutputPortAttributesContext } from "./EDIF300Parser";
import { OwnerContext } from "./EDIF300Parser";
import { PageContext } from "./EDIF300Parser";
import { PageAnnotateContext } from "./EDIF300Parser";
import { PageBorderContext } from "./EDIF300Parser";
import { PageBorderTemplateContext } from "./EDIF300Parser";
import { PageBorderTemplateRefContext } from "./EDIF300Parser";
import { PageCommentGraphicsContext } from "./EDIF300Parser";
import { PageHeaderContext } from "./EDIF300Parser";
import { PageIdentificationContext } from "./EDIF300Parser";
import { PageIdentificationDisplayContext } from "./EDIF300Parser";
import { PageNameCaseSensitiveContext } from "./EDIF300Parser";
import { PageNameDefContext } from "./EDIF300Parser";
import { PageNameRefContext } from "./EDIF300Parser";
import { PagePropertyDisplayContext } from "./EDIF300Parser";
import { PageRefContext } from "./EDIF300Parser";
import { PageSizeContext } from "./EDIF300Parser";
import { PageTitleContext } from "./EDIF300Parser";
import { PageTitleBlockContext } from "./EDIF300Parser";
import { PageTitleBlockAttributeDisplayContext } from "./EDIF300Parser";
import { PageTitleBlockAttributesContext } from "./EDIF300Parser";
import { PageTitleBlockTemplateContext } from "./EDIF300Parser";
import { PageTitleBlockTemplateRefContext } from "./EDIF300Parser";
import { PageTitleDisplayContext } from "./EDIF300Parser";
import { ParameterDisplayContext } from "./EDIF300Parser";
import { ParameterNameCaseSensitiveContext } from "./EDIF300Parser";
import { ParameterNameDefContext } from "./EDIF300Parser";
import { ParameterNameDisplayContext } from "./EDIF300Parser";
import { ParameterNameRefContext } from "./EDIF300Parser";
import { PathContext } from "./EDIF300Parser";
import { PathDelayContext } from "./EDIF300Parser";
import { PathWidthContext } from "./EDIF300Parser";
import { PcbLayoutUnitsContext } from "./EDIF300Parser";
import { PcbLayoutViewContext } from "./EDIF300Parser";
import { PermutableContext } from "./EDIF300Parser";
import { PhysicalDefaultsContext } from "./EDIF300Parser";
import { PhysicalScalingContext } from "./EDIF300Parser";
import { PixelPatternContext } from "./EDIF300Parser";
import { PixelRowContext } from "./EDIF300Parser";
import { PointContext } from "./EDIF300Parser";
import { PointListContext } from "./EDIF300Parser";
import { PointValueContext } from "./EDIF300Parser";
import { PolygonContext } from "./EDIF300Parser";
import { PortContext } from "./EDIF300Parser";
import { PortAnnotateContext } from "./EDIF300Parser";
import { PortAttributeDisplayContext } from "./EDIF300Parser";
import { PortBundleContext } from "./EDIF300Parser";
import { PortDelayContext } from "./EDIF300Parser";
import { PortDelayDisplayContext } from "./EDIF300Parser";
import { PortDelayNameDefContext } from "./EDIF300Parser";
import { PortDelayNameRefContext } from "./EDIF300Parser";
import { PortDelayOverrideContext } from "./EDIF300Parser";
import { PortDirectionContext } from "./EDIF300Parser";
import { PortDirectionIndicatorContext } from "./EDIF300Parser";
import { PortIndexValueContext } from "./EDIF300Parser";
import { PortInstanceRefContext } from "./EDIF300Parser";
import { PortJoinedContext } from "./EDIF300Parser";
import { PortListContext } from "./EDIF300Parser";
import { PortLoadDelayContext } from "./EDIF300Parser";
import { PortLoadDelayDisplayContext } from "./EDIF300Parser";
import { PortLoadDelayNameDefContext } from "./EDIF300Parser";
import { PortLoadDelayNameRefContext } from "./EDIF300Parser";
import { PortLoadDelayOverrideContext } from "./EDIF300Parser";
import { PortMemberRefContext } from "./EDIF300Parser";
import { PortNameCaseSensitiveContext } from "./EDIF300Parser";
import { PortNameDefContext } from "./EDIF300Parser";
import { PortNameDisplayContext } from "./EDIF300Parser";
import { PortNameGeneratorContext } from "./EDIF300Parser";
import { PortNameGeneratorDisplayContext } from "./EDIF300Parser";
import { PortNameRefContext } from "./EDIF300Parser";
import { PortPropertyDisplayContext } from "./EDIF300Parser";
import { PortPropertyDisplayOverrideContext } from "./EDIF300Parser";
import { PortPropertyOverrideContext } from "./EDIF300Parser";
import { PortRefContext } from "./EDIF300Parser";
import { PortSetContext } from "./EDIF300Parser";
import { PortWidthContext } from "./EDIF300Parser";
import { PresentLogicValueContext } from "./EDIF300Parser";
import { PreviousLogicValueContext } from "./EDIF300Parser";
import { PreviousVersionContext } from "./EDIF300Parser";
import { PrimaryNameContext } from "./EDIF300Parser";
import { ProgramContext } from "./EDIF300Parser";
import { PropertyContext } from "./EDIF300Parser";
import { PropertyDisplayContext } from "./EDIF300Parser";
import { PropertyDisplayOverrideContext } from "./EDIF300Parser";
import { PropertyInheritanceControlContext } from "./EDIF300Parser";
import { PropertyNameCaseSensitiveContext } from "./EDIF300Parser";
import { PropertyNameDefContext } from "./EDIF300Parser";
import { PropertyNameDisplayContext } from "./EDIF300Parser";
import { PropertyNameRefContext } from "./EDIF300Parser";
import { PropertyOverrideContext } from "./EDIF300Parser";
import { ProportionalFontContext } from "./EDIF300Parser";
import { PtContext } from "./EDIF300Parser";
import { Pt1Context } from "./EDIF300Parser";
import { Pt2Context } from "./EDIF300Parser";
import { RadianContext } from "./EDIF300Parser";
import { ReasonContext } from "./EDIF300Parser";
import { RectangleContext } from "./EDIF300Parser";
import { RedContext } from "./EDIF300Parser";
import { RemoveDisplayContext } from "./EDIF300Parser";
import { RepetitionCountContext } from "./EDIF300Parser";
import { RepetitionCountDisplayContext } from "./EDIF300Parser";
import { ReplaceDisplayContext } from "./EDIF300Parser";
import { RequiredContext } from "./EDIF300Parser";
import { ResolvesContext } from "./EDIF300Parser";
import { RevisionContext } from "./EDIF300Parser";
import { RevisionDisplayContext } from "./EDIF300Parser";
import { RightJustifyContext } from "./EDIF300Parser";
import { RipperHotspotContext } from "./EDIF300Parser";
import { RipperHotspotRefContext } from "./EDIF300Parser";
import { RotationContext } from "./EDIF300Parser";
import { RoundContext } from "./EDIF300Parser";
import { RowSizeContext } from "./EDIF300Parser";
import { ScaledIntegerContext } from "./EDIF300Parser";
import { ScaleXContext } from "./EDIF300Parser";
import { ScaleYContext } from "./EDIF300Parser";
import { SchematicBusContext } from "./EDIF300Parser";
import { SchematicBusDetailsContext } from "./EDIF300Parser";
import { SchematicBusGraphicsContext } from "./EDIF300Parser";
import { SchematicBusJoinedContext } from "./EDIF300Parser";
import { SchematicBusSliceContext } from "./EDIF300Parser";
import { SchematicComplexFigureContext } from "./EDIF300Parser";
import { SchematicFigureMacroContext } from "./EDIF300Parser";
import { SchematicFigureMacroRefContext } from "./EDIF300Parser";
import { SchematicForFrameBorderContext } from "./EDIF300Parser";
import { SchematicForFrameBorderTemplateContext } from "./EDIF300Parser";
import { SchematicForFrameBorderTemplateRefContext } from "./EDIF300Parser";
import { SchematicForFrameImplementationContext } from "./EDIF300Parser";
import { SchematicForFrameImplementationHeaderContext } from "./EDIF300Parser";
import { SchematicFrameImplementationDetailsContext } from "./EDIF300Parser";
import { SchematicGlobalPortAttributesContext } from "./EDIF300Parser";
import { SchematicGlobalPortImplementationContext } from "./EDIF300Parser";
import { SchematicGlobalPortImplementationRefContext } from "./EDIF300Parser";
import { SchematicGlobalPortTemplateContext } from "./EDIF300Parser";
import { SchematicGlobalPortTemplateRefContext } from "./EDIF300Parser";
import { SchematicIfFrameBorderContext } from "./EDIF300Parser";
import { SchematicIfFrameBorderTemplateContext } from "./EDIF300Parser";
import { SchematicIfFrameBorderTemplateRefContext } from "./EDIF300Parser";
import { SchematicIfFrameImplementationContext } from "./EDIF300Parser";
import { SchematicIfFrameImplementationHeaderContext } from "./EDIF300Parser";
import { SchematicImplementationContext } from "./EDIF300Parser";
import { SchematicInstanceImplementationContext } from "./EDIF300Parser";
import { SchematicInstanceImplementationRefContext } from "./EDIF300Parser";
import { SchematicInterconnectAttributeDisplayContext } from "./EDIF300Parser";
import { SchematicInterconnectHeaderContext } from "./EDIF300Parser";
import { SchematicInterconnectTerminatorImplementationContext } from "./EDIF300Parser";
import { SchematicInterconnectTerminatorImplementationRefContext } from "./EDIF300Parser";
import { SchematicInterconnectTerminatorTemplateContext } from "./EDIF300Parser";
import { SchematicInterconnectTerminatorTemplateRefContext } from "./EDIF300Parser";
import { SchematicJunctionImplementationContext } from "./EDIF300Parser";
import { SchematicJunctionImplementationRefContext } from "./EDIF300Parser";
import { SchematicJunctionTemplateContext } from "./EDIF300Parser";
import { SchematicJunctionTemplateRefContext } from "./EDIF300Parser";
import { SchematicMasterPortImplementationContext } from "./EDIF300Parser";
import { SchematicMasterPortImplementationRefContext } from "./EDIF300Parser";
import { SchematicMasterPortTemplateContext } from "./EDIF300Parser";
import { SchematicMasterPortTemplateRefContext } from "./EDIF300Parser";
import { SchematicMetricContext } from "./EDIF300Parser";
import { SchematicNetContext } from "./EDIF300Parser";
import { SchematicNetDetailsContext } from "./EDIF300Parser";
import { SchematicNetGraphicsContext } from "./EDIF300Parser";
import { SchematicNetJoinedContext } from "./EDIF300Parser";
import { SchematicOffPageConnectorImplementationContext } from "./EDIF300Parser";
import { SchematicOffPageConnectorImplementationRefContext } from "./EDIF300Parser";
import { SchematicOffPageConnectorTemplateContext } from "./EDIF300Parser";
import { SchematicOffPageConnectorTemplateRefContext } from "./EDIF300Parser";
import { SchematicOnPageConnectorImplementationContext } from "./EDIF300Parser";
import { SchematicOnPageConnectorImplementationRefContext } from "./EDIF300Parser";
import { SchematicOnPageConnectorTemplateContext } from "./EDIF300Parser";
import { SchematicOnPageConnectorTemplateRefContext } from "./EDIF300Parser";
import { SchematicOtherwiseFrameBorderContext } from "./EDIF300Parser";
import { SchematicOtherwiseFrameBorderTemplateContext } from "./EDIF300Parser";
import { SchematicOtherwiseFrameBorderTemplateRefContext } from "./EDIF300Parser";
import { SchematicOtherwiseFrameImplementationContext } from "./EDIF300Parser";
import { SchematicOtherwiseFrameImplementationHeaderContext } from "./EDIF300Parser";
import { SchematicPortAcPowerContext } from "./EDIF300Parser";
import { SchematicPortAcPowerRecommendedFrequencyContext } from "./EDIF300Parser";
import { SchematicPortAcPowerRecommendedVoltageRmsContext } from "./EDIF300Parser";
import { SchematicPortAnalogContext } from "./EDIF300Parser";
import { SchematicPortAttributesContext } from "./EDIF300Parser";
import { SchematicPortChassisGroundContext } from "./EDIF300Parser";
import { SchematicPortClockContext } from "./EDIF300Parser";
import { SchematicPortDcPowerContext } from "./EDIF300Parser";
import { SchematicPortDcPowerRecommendedVoltageContext } from "./EDIF300Parser";
import { SchematicPortEarthGroundContext } from "./EDIF300Parser";
import { SchematicPortGroundContext } from "./EDIF300Parser";
import { SchematicPortNonLogicalContext } from "./EDIF300Parser";
import { SchematicPortOpenCollectorContext } from "./EDIF300Parser";
import { SchematicPortOpenEmitterContext } from "./EDIF300Parser";
import { SchematicPortPowerContext } from "./EDIF300Parser";
import { SchematicPortStyleContext } from "./EDIF300Parser";
import { SchematicPortThreeStateContext } from "./EDIF300Parser";
import { SchematicRequiredDefaultsContext } from "./EDIF300Parser";
import { SchematicRipperImplementationContext } from "./EDIF300Parser";
import { SchematicRipperImplementationRefContext } from "./EDIF300Parser";
import { SchematicRipperTemplateContext } from "./EDIF300Parser";
import { SchematicRipperTemplateRefContext } from "./EDIF300Parser";
import { SchematicSubBusContext } from "./EDIF300Parser";
import { SchematicSubBusSetContext } from "./EDIF300Parser";
import { SchematicSubInterconnectHeaderContext } from "./EDIF300Parser";
import { SchematicSubNetContext } from "./EDIF300Parser";
import { SchematicSubNetSetContext } from "./EDIF300Parser";
import { SchematicSymbolContext } from "./EDIF300Parser";
import { SchematicSymbolBorderContext } from "./EDIF300Parser";
import { SchematicSymbolBorderTemplateContext } from "./EDIF300Parser";
import { SchematicSymbolBorderTemplateRefContext } from "./EDIF300Parser";
import { SchematicSymbolHeaderContext } from "./EDIF300Parser";
import { SchematicSymbolPortImplementationContext } from "./EDIF300Parser";
import { SchematicSymbolPortImplementationRefContext } from "./EDIF300Parser";
import { SchematicSymbolPortTemplateContext } from "./EDIF300Parser";
import { SchematicSymbolPortTemplateRefContext } from "./EDIF300Parser";
import { SchematicSymbolRefContext } from "./EDIF300Parser";
import { SchematicTemplateHeaderContext } from "./EDIF300Parser";
import { SchematicUnitsContext } from "./EDIF300Parser";
import { SchematicViewContext } from "./EDIF300Parser";
import { SchematicViewHeaderContext } from "./EDIF300Parser";
import { SchematicWireAffinityContext } from "./EDIF300Parser";
import { SchematicWireStyleContext } from "./EDIF300Parser";
import { SecondContext } from "./EDIF300Parser";
import { SecondIntegerExpressionContext } from "./EDIF300Parser";
import { SecondNumberContext } from "./EDIF300Parser";
import { SecondStringExpressionContext } from "./EDIF300Parser";
import { SectionContext } from "./EDIF300Parser";
import { SectionNameDefContext } from "./EDIF300Parser";
import { SectionTitleContext } from "./EDIF300Parser";
import { SequenceContext } from "./EDIF300Parser";
import { SetAngleContext } from "./EDIF300Parser";
import { SetCapacitanceContext } from "./EDIF300Parser";
import { SetCurrentContext } from "./EDIF300Parser";
import { SetDistanceContext } from "./EDIF300Parser";
import { SetFrequencyContext } from "./EDIF300Parser";
import { SetTimeContext } from "./EDIF300Parser";
import { SetVoltageContext } from "./EDIF300Parser";
import { ShapeContext } from "./EDIF300Parser";
import { SiemensContext } from "./EDIF300Parser";
import { SignalContext } from "./EDIF300Parser";
import { SignalAnnotateContext } from "./EDIF300Parser";
import { SignalGroupContext } from "./EDIF300Parser";
import { SignalGroupAnnotateContext } from "./EDIF300Parser";
import { SignalGroupNameCaseSensitiveContext } from "./EDIF300Parser";
import { SignalGroupNameDefContext } from "./EDIF300Parser";
import { SignalGroupNameRefContext } from "./EDIF300Parser";
import { SignalGroupRefContext } from "./EDIF300Parser";
import { SignalIndexValueContext } from "./EDIF300Parser";
import { SignalJoinedContext } from "./EDIF300Parser";
import { SignalListContext } from "./EDIF300Parser";
import { SignalMemberRefContext } from "./EDIF300Parser";
import { SignalNameCaseSensitiveContext } from "./EDIF300Parser";
import { SignalNameDefContext } from "./EDIF300Parser";
import { SignalNameRefContext } from "./EDIF300Parser";
import { SignalRefContext } from "./EDIF300Parser";
import { SignalWidthContext } from "./EDIF300Parser";
import { SimpleNameContext } from "./EDIF300Parser";
import { StartPointContext } from "./EDIF300Parser";
import { StatusContext } from "./EDIF300Parser";
import { StepContext } from "./EDIF300Parser";
import { StringContext } from "./EDIF300Parser";
import { StringConcatenateContext } from "./EDIF300Parser";
import { StringConstantContext } from "./EDIF300Parser";
import { StringConstantRefContext } from "./EDIF300Parser";
import { StringEqualContext } from "./EDIF300Parser";
import { StringExpressionContext } from "./EDIF300Parser";
import { StringLengthContext } from "./EDIF300Parser";
import { StringParameterContext } from "./EDIF300Parser";
import { StringParameterAssignContext } from "./EDIF300Parser";
import { StringParameterRefContext } from "./EDIF300Parser";
import { StringPrefixContext } from "./EDIF300Parser";
import { StringSuffixContext } from "./EDIF300Parser";
import { StringValueContext } from "./EDIF300Parser";
import { StrongContext } from "./EDIF300Parser";
import { SubIssueContext } from "./EDIF300Parser";
import { SubstringContext } from "./EDIF300Parser";
import { SubstringLengthContext } from "./EDIF300Parser";
import { SubstringOffsetContext } from "./EDIF300Parser";
import { SubtrahendContext } from "./EDIF300Parser";
import { SymbolicLayoutUnitsContext } from "./EDIF300Parser";
import { SymbolicLayoutViewContext } from "./EDIF300Parser";
import { SymbolPortImplementationNameDefContext } from "./EDIF300Parser";
import { SymbolPortImplementationNameRefContext } from "./EDIF300Parser";
import { TechnologyContext } from "./EDIF300Parser";
import { TextHeightContext } from "./EDIF300Parser";
import { ThroughPointContext } from "./EDIF300Parser";
import { TimeContext } from "./EDIF300Parser";
import { TimeDelayContext } from "./EDIF300Parser";
import { TimeIntervalContext } from "./EDIF300Parser";
import { TimeStampContext } from "./EDIF300Parser";
import { TimeValueContext } from "./EDIF300Parser";
import { TimingContext } from "./EDIF300Parser";
import { TimingDisplayContext } from "./EDIF300Parser";
import { TimingNameDefContext } from "./EDIF300Parser";
import { TimingNameRefContext } from "./EDIF300Parser";
import { ToIntegerContext } from "./EDIF300Parser";
import { TopJustifyContext } from "./EDIF300Parser";
import { TotalPagesContext } from "./EDIF300Parser";
import { TotalPagesDisplayContext } from "./EDIF300Parser";
import { TransformContext } from "./EDIF300Parser";
import { TransitionContext } from "./EDIF300Parser";
import { EtrueContext } from "./EDIF300Parser";
import { TruncateContext } from "./EDIF300Parser";
import { TypedValueContext } from "./EDIF300Parser";
import { TypefaceContext } from "./EDIF300Parser";
import { TypefaceSuffixContext } from "./EDIF300Parser";
import { UnconfiguredContext } from "./EDIF300Parser";
import { UnconstrainedContext } from "./EDIF300Parser";
import { UndefinedContext } from "./EDIF300Parser";
import { UnitContext } from "./EDIF300Parser";
import { UnitDefinitionsContext } from "./EDIF300Parser";
import { UnitExponentContext } from "./EDIF300Parser";
import { UnitNameDefContext } from "./EDIF300Parser";
import { UnitNameRefContext } from "./EDIF300Parser";
import { UnitRefContext } from "./EDIF300Parser";
import { UnrestrictedContext } from "./EDIF300Parser";
import { UnspecifiedContext } from "./EDIF300Parser";
import { UnspecifiedDirectionPortContext } from "./EDIF300Parser";
import { UntypedContext } from "./EDIF300Parser";
import { UnusedContext } from "./EDIF300Parser";
import { UsableAreaContext } from "./EDIF300Parser";
import { UserDataContext } from "./EDIF300Parser";
import { UserDataTagContext } from "./EDIF300Parser";
import { VersionContext } from "./EDIF300Parser";
import { VerticalJustificationContext } from "./EDIF300Parser";
import { ViewGroupContext } from "./EDIF300Parser";
import { ViewGroupHeaderContext } from "./EDIF300Parser";
import { ViewGroupNameCaseSensitiveContext } from "./EDIF300Parser";
import { ViewGroupNameDefContext } from "./EDIF300Parser";
import { ViewGroupNameRefContext } from "./EDIF300Parser";
import { ViewGroupRefContext } from "./EDIF300Parser";
import { ViewNameCaseSensitiveContext } from "./EDIF300Parser";
import { ViewNameDefContext } from "./EDIF300Parser";
import { ViewNameDisplayContext } from "./EDIF300Parser";
import { ViewNameRefContext } from "./EDIF300Parser";
import { ViewPropertyDisplayContext } from "./EDIF300Parser";
import { ViewPropertyOverrideContext } from "./EDIF300Parser";
import { ViewRefContext } from "./EDIF300Parser";
import { VisibleContext } from "./EDIF300Parser";
import { VoltContext } from "./EDIF300Parser";
import { VoltageMapContext } from "./EDIF300Parser";
import { VoltageValueContext } from "./EDIF300Parser";
import { WattContext } from "./EDIF300Parser";
import { WeakContext } from "./EDIF300Parser";
import { WeakJoinedContext } from "./EDIF300Parser";
import { WeberContext } from "./EDIF300Parser";
import { WidePortContext } from "./EDIF300Parser";
import { WideWireContext } from "./EDIF300Parser";
import { WrittenContext } from "./EDIF300Parser";
import { XCoordinateContext } from "./EDIF300Parser";
import { XNumberValueContext } from "./EDIF300Parser";
import { Xor_Context } from "./EDIF300Parser";
import { YCoordinateContext } from "./EDIF300Parser";
import { YearContext } from "./EDIF300Parser";
import { YearNumberContext } from "./EDIF300Parser";
import { YNumberValueContext } from "./EDIF300Parser";
import { IntegerTokenContext } from "./EDIF300Parser";
import { StringTokenContext } from "./EDIF300Parser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `EDIF300Parser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface EDIF300Visitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `EDIF300Parser.goal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGoal?: (ctx: GoalContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.absolute`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAbsolute?: (ctx: AbsoluteContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.acLoad`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAcLoad?: (ctx: AcLoadContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.acLoadDisplay`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAcLoadDisplay?: (ctx: AcLoadDisplayContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.acLoadFactorCapacitance`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAcLoadFactorCapacitance?: (ctx: AcLoadFactorCapacitanceContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.acLoadFactorTime`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAcLoadFactorTime?: (ctx: AcLoadFactorTimeContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.addDisplay`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddDisplay?: (ctx: AddDisplayContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.ampere`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAmpere?: (ctx: AmpereContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.and_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnd_?: (ctx: And_Context) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.angleValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAngleValue?: (ctx: AngleValueContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.annotate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotate?: (ctx: AnnotateContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.approvedDate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitApprovedDate?: (ctx: ApprovedDateContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.approvedDateDisplay`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitApprovedDateDisplay?: (ctx: ApprovedDateDisplayContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.arc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArc?: (ctx: ArcContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.ascii`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAscii?: (ctx: AsciiContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.associatedInterconnectNameDisplay`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssociatedInterconnectNameDisplay?: (ctx: AssociatedInterconnectNameDisplayContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.attachmentPoint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttachmentPoint?: (ctx: AttachmentPointContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.author`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAuthor?: (ctx: AuthorContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.backgroundColor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBackgroundColor?: (ctx: BackgroundColorContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.baselineJustify`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBaselineJustify?: (ctx: BaselineJustifyContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.becomes`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBecomes?: (ctx: BecomesContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.behaviorView`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBehaviorView?: (ctx: BehaviorViewContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.bidirectional`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBidirectional?: (ctx: BidirectionalContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.bidirectionalPort`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBidirectionalPort?: (ctx: BidirectionalPortContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.bidirectionalPortAttributes`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBidirectionalPortAttributes?: (ctx: BidirectionalPortAttributesContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.bitOrder`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitOrder?: (ctx: BitOrderContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.blue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlue?: (ctx: BlueContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.boldStyle`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBoldStyle?: (ctx: BoldStyleContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.eboolean`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEboolean?: (ctx: EbooleanContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.booleanConstant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanConstant?: (ctx: BooleanConstantContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.booleanConstantRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanConstantRef?: (ctx: BooleanConstantRefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanExpression?: (ctx: BooleanExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.booleanMap`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanMap?: (ctx: BooleanMapContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.booleanParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanParameter?: (ctx: BooleanParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.booleanParameterAssign`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanParameterAssign?: (ctx: BooleanParameterAssignContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.booleanParameterRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanParameterRef?: (ctx: BooleanParameterRefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.booleanToken`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanToken?: (ctx: BooleanTokenContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.booleanValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanValue?: (ctx: BooleanValueContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.borderPattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBorderPattern?: (ctx: BorderPatternContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.borderPatternVisible`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBorderPatternVisible?: (ctx: BorderPatternVisibleContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.borderWidth`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBorderWidth?: (ctx: BorderWidthContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.bottomJustify`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBottomJustify?: (ctx: BottomJustifyContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.calculated`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCalculated?: (ctx: CalculatedContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.candela`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCandela?: (ctx: CandelaContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.capacitanceValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCapacitanceValue?: (ctx: CapacitanceValueContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.caplineJustify`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCaplineJustify?: (ctx: CaplineJustifyContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.cell`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCell?: (ctx: CellContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.cellHeader`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCellHeader?: (ctx: CellHeaderContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.cellNameDisplay`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCellNameDisplay?: (ctx: CellNameDisplayContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.cellPropertyDisplay`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCellPropertyDisplay?: (ctx: CellPropertyDisplayContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.cellPropertyDisplayOverride`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCellPropertyDisplayOverride?: (ctx: CellPropertyDisplayOverrideContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.cellPropertyOverride`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCellPropertyOverride?: (ctx: CellPropertyOverrideContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.cellRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCellRef?: (ctx: CellRefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.celsius`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCelsius?: (ctx: CelsiusContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.centerJustify`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCenterJustify?: (ctx: CenterJustifyContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.characterEncoding`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCharacterEncoding?: (ctx: CharacterEncodingContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.checkDate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCheckDate?: (ctx: CheckDateContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.checkDateDisplay`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCheckDateDisplay?: (ctx: CheckDateDisplayContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.circle`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCircle?: (ctx: CircleContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.cluster`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCluster?: (ctx: ClusterContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.clusterConfiguration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClusterConfiguration?: (ctx: ClusterConfigurationContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.clusterConfigurationNameCaseSensitive`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClusterConfigurationNameCaseSensitive?: (ctx: ClusterConfigurationNameCaseSensitiveContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.clusterConfigurationNameDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClusterConfigurationNameDef?: (ctx: ClusterConfigurationNameDefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.clusterConfigurationNameRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClusterConfigurationNameRef?: (ctx: ClusterConfigurationNameRefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.clusterConfigurationRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClusterConfigurationRef?: (ctx: ClusterConfigurationRefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.clusterHeader`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClusterHeader?: (ctx: ClusterHeaderContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.clusterNameCaseSensitive`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClusterNameCaseSensitive?: (ctx: ClusterNameCaseSensitiveContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.clusterNameDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClusterNameDef?: (ctx: ClusterNameDefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.clusterNameRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClusterNameRef?: (ctx: ClusterNameRefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.clusterPropertyDisplay`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClusterPropertyDisplay?: (ctx: ClusterPropertyDisplayContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.clusterPropertyDisplayOverride`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClusterPropertyDisplayOverride?: (ctx: ClusterPropertyDisplayOverrideContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.clusterPropertyOverride`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClusterPropertyOverride?: (ctx: ClusterPropertyOverrideContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.clusterRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClusterRef?: (ctx: ClusterRefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.color`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColor?: (ctx: ColorContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.comment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComment?: (ctx: CommentContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.commentGraphics`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommentGraphics?: (ctx: CommentGraphicsContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.companyName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompanyName?: (ctx: CompanyNameContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.companyNameDisplay`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompanyNameDisplay?: (ctx: CompanyNameDisplayContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.complementedName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComplementedName?: (ctx: ComplementedNameContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.complementedNamePart`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComplementedNamePart?: (ctx: ComplementedNamePartContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.complexGeometry`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComplexGeometry?: (ctx: ComplexGeometryContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.complexName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComplexName?: (ctx: ComplexNameContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.compound`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompound?: (ctx: CompoundContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.condition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCondition?: (ctx: ConditionContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.conditionDisplay`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditionDisplay?: (ctx: ConditionDisplayContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.connectedSignalIndexGenerator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConnectedSignalIndexGenerator?: (ctx: ConnectedSignalIndexGeneratorContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.connectedSignalIndexGeneratorDisplay`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConnectedSignalIndexGeneratorDisplay?: (ctx: ConnectedSignalIndexGeneratorDisplayContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.connectivityBus`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConnectivityBus?: (ctx: ConnectivityBusContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.connectivityBusJoined`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConnectivityBusJoined?: (ctx: ConnectivityBusJoinedContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.connectivityBusSlice`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConnectivityBusSlice?: (ctx: ConnectivityBusSliceContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.connectivityFrameStructure`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConnectivityFrameStructure?: (ctx: ConnectivityFrameStructureContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.connectivityFrameStructureNameDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConnectivityFrameStructureNameDef?: (ctx: ConnectivityFrameStructureNameDefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.connectivityNet`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConnectivityNet?: (ctx: ConnectivityNetContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.connectivityNetJoined`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConnectivityNetJoined?: (ctx: ConnectivityNetJoinedContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.connectivityRipper`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConnectivityRipper?: (ctx: ConnectivityRipperContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.connectivityRipperNameDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConnectivityRipperNameDef?: (ctx: ConnectivityRipperNameDefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.connectivityRipperNameRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConnectivityRipperNameRef?: (ctx: ConnectivityRipperNameRefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.connectivityRipperRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConnectivityRipperRef?: (ctx: ConnectivityRipperRefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.connectivityStructure`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConnectivityStructure?: (ctx: ConnectivityStructureContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.connectivitySubBus`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConnectivitySubBus?: (ctx: ConnectivitySubBusContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.connectivitySubNet`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConnectivitySubNet?: (ctx: ConnectivitySubNetContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.connectivityTagGenerator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConnectivityTagGenerator?: (ctx: ConnectivityTagGeneratorContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.connectivityTagGeneratorDisplay`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConnectivityTagGeneratorDisplay?: (ctx: ConnectivityTagGeneratorDisplayContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.connectivityUnits`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConnectivityUnits?: (ctx: ConnectivityUnitsContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.connectivityView`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConnectivityView?: (ctx: ConnectivityViewContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.connectivityViewHeader`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConnectivityViewHeader?: (ctx: ConnectivityViewHeaderContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.constantNameDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstantNameDef?: (ctx: ConstantNameDefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.constantNameRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstantNameRef?: (ctx: ConstantNameRefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.constantValues`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstantValues?: (ctx: ConstantValuesContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.contract`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitContract?: (ctx: ContractContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.contractDisplay`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitContractDisplay?: (ctx: ContractDisplayContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.copyright`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCopyright?: (ctx: CopyrightContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.copyrightDisplay`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCopyrightDisplay?: (ctx: CopyrightDisplayContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.cornerType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCornerType?: (ctx: CornerTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.coulomb`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCoulomb?: (ctx: CoulombContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.criticality`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCriticality?: (ctx: CriticalityContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.criticalityDisplay`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCriticalityDisplay?: (ctx: CriticalityDisplayContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.currentMap`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCurrentMap?: (ctx: CurrentMapContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.currentValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCurrentValue?: (ctx: CurrentValueContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.curve`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCurve?: (ctx: CurveContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.dataOrigin`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDataOrigin?: (ctx: DataOriginContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.date`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDate?: (ctx: DateContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.dayNumber`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDayNumber?: (ctx: DayNumberContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.dcFanInLoad`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDcFanInLoad?: (ctx: DcFanInLoadContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.dcFanInLoadDisplay`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDcFanInLoadDisplay?: (ctx: DcFanInLoadDisplayContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.dcFanOutLoad`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDcFanOutLoad?: (ctx: DcFanOutLoadContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.dcFanOutLoadDisplay`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDcFanOutLoadDisplay?: (ctx: DcFanOutLoadDisplayContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.dcMaxFanIn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDcMaxFanIn?: (ctx: DcMaxFanInContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.dcMaxFanInDisplay`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDcMaxFanInDisplay?: (ctx: DcMaxFanInDisplayContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.dcMaxFanOut`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDcMaxFanOut?: (ctx: DcMaxFanOutContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.dcMaxFanOutDisplay`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDcMaxFanOutDisplay?: (ctx: DcMaxFanOutDisplayContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.decimalToString`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDecimalToString?: (ctx: DecimalToStringContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.defaultClusterConfiguration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefaultClusterConfiguration?: (ctx: DefaultClusterConfigurationContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.defaultConnection`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefaultConnection?: (ctx: DefaultConnectionContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.degree`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDegree?: (ctx: DegreeContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.delay`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDelay?: (ctx: DelayContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.denominator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDenominator?: (ctx: DenominatorContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.derivation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDerivation?: (ctx: DerivationContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.derivedFrom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDerivedFrom?: (ctx: DerivedFromContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.design`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDesign?: (ctx: DesignContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.designator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDesignator?: (ctx: DesignatorContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.designatorDisplay`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDesignatorDisplay?: (ctx: DesignatorDisplayContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.designHeader`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDesignHeader?: (ctx: DesignHeaderContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.designHierarchy`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDesignHierarchy?: (ctx: DesignHierarchyContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.designHierarchyHeader`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDesignHierarchyHeader?: (ctx: DesignHierarchyHeaderContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.designHierarchyNameCaseSensitive`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDesignHierarchyNameCaseSensitive?: (ctx: DesignHierarchyNameCaseSensitiveContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.designHierarchyNameDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDesignHierarchyNameDef?: (ctx: DesignHierarchyNameDefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.designNameCaseSensitive`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDesignNameCaseSensitive?: (ctx: DesignNameCaseSensitiveContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.designNameDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDesignNameDef?: (ctx: DesignNameDefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.designUnits`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDesignUnits?: (ctx: DesignUnitsContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.diagram`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDiagram?: (ctx: DiagramContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.diagramNameDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDiagramNameDef?: (ctx: DiagramNameDefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.directionalPortAttributeOverride`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDirectionalPortAttributeOverride?: (ctx: DirectionalPortAttributeOverrideContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.display`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDisplay?: (ctx: DisplayContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.displayAttributes`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDisplayAttributes?: (ctx: DisplayAttributesContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.displayName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDisplayName?: (ctx: DisplayNameContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.displayNameOverride`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDisplayNameOverride?: (ctx: DisplayNameOverrideContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.distanceValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDistanceValue?: (ctx: DistanceValueContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.dividend`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDividend?: (ctx: DividendContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.divisor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDivisor?: (ctx: DivisorContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.documentation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDocumentation?: (ctx: DocumentationContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.documentationHeader`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDocumentationHeader?: (ctx: DocumentationHeaderContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.documentationNameCaseSensitive`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDocumentationNameCaseSensitive?: (ctx: DocumentationNameCaseSensitiveContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.documentationNameDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDocumentationNameDef?: (ctx: DocumentationNameDefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.documentationUnits`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDocumentationUnits?: (ctx: DocumentationUnitsContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.dominates`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDominates?: (ctx: DominatesContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.dot`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDot?: (ctx: DotContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.drawingDescription`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDrawingDescription?: (ctx: DrawingDescriptionContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.drawingDescriptionDisplay`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDrawingDescriptionDisplay?: (ctx: DrawingDescriptionDisplayContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.drawingIdentification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDrawingIdentification?: (ctx: DrawingIdentificationContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.drawingIdentificationDisplay`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDrawingIdentificationDisplay?: (ctx: DrawingIdentificationDisplayContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.drawingSize`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDrawingSize?: (ctx: DrawingSizeContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.drawingSizeDisplay`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDrawingSizeDisplay?: (ctx: DrawingSizeDisplayContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.duration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDuration?: (ctx: DurationContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.e`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitE?: (ctx: EContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.edif`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEdif?: (ctx: EdifContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.edifHeader`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEdifHeader?: (ctx: EdifHeaderContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.edifLevel`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEdifLevel?: (ctx: EdifLevelContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.edifLevelValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEdifLevelValue?: (ctx: EdifLevelValueContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.edifNameDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEdifNameDef?: (ctx: EdifNameDefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.edifVersion`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEdifVersion?: (ctx: EdifVersionContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.endPoint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEndPoint?: (ctx: EndPointContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.endType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEndType?: (ctx: EndTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.engineeringDate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEngineeringDate?: (ctx: EngineeringDateContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.engineeringDateDisplay`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEngineeringDateDisplay?: (ctx: EngineeringDateDisplayContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.event`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEvent?: (ctx: EventContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.exponent`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExponent?: (ctx: ExponentContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.extend`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExtend?: (ctx: ExtendContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.extendForFrameMemberDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExtendForFrameMemberDef?: (ctx: ExtendForFrameMemberDefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.extendFrameDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExtendFrameDef?: (ctx: ExtendFrameDefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.extendInstanceDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExtendInstanceDef?: (ctx: ExtendInstanceDefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.extendInstanceMemberDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExtendInstanceMemberDef?: (ctx: ExtendInstanceMemberDefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.extendInterconnectDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExtendInterconnectDef?: (ctx: ExtendInterconnectDefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.extendPageDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExtendPageDef?: (ctx: ExtendPageDefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.extendPortDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExtendPortDef?: (ctx: ExtendPortDefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.extendPortMemberDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExtendPortMemberDef?: (ctx: ExtendPortMemberDefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.extendSignalDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExtendSignalDef?: (ctx: ExtendSignalDefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.extendSignalGroupDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExtendSignalGroupDef?: (ctx: ExtendSignalGroupDefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.extendSignalMemberDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExtendSignalMemberDef?: (ctx: ExtendSignalMemberDefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.external`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExternal?: (ctx: ExternalContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.fahrenheit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFahrenheit?: (ctx: FahrenheitContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.efalse`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEfalse?: (ctx: EfalseContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.farad`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFarad?: (ctx: FaradContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.figure`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFigure?: (ctx: FigureContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.figureGroup`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFigureGroup?: (ctx: FigureGroupContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.figureGroupNameCaseSensitive`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFigureGroupNameCaseSensitive?: (ctx: FigureGroupNameCaseSensitiveContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.figureGroupNameDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFigureGroupNameDef?: (ctx: FigureGroupNameDefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.figureGroupNameRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFigureGroupNameRef?: (ctx: FigureGroupNameRefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.figureGroupOverride`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFigureGroupOverride?: (ctx: FigureGroupOverrideContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.fillPattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFillPattern?: (ctx: FillPatternContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.fillPatternVisible`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFillPatternVisible?: (ctx: FillPatternVisibleContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.firstIntegerExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFirstIntegerExpression?: (ctx: FirstIntegerExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.firstStringExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFirstStringExpression?: (ctx: FirstStringExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.fixed`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFixed?: (ctx: FixedContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.font`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFont?: (ctx: FontContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.fontCapitalHeight`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFontCapitalHeight?: (ctx: FontCapitalHeightContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.fontDefinitions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFontDefinitions?: (ctx: FontDefinitionsContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.fontDescent`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFontDescent?: (ctx: FontDescentContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.fontFamily`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFontFamily?: (ctx: FontFamilyContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.fontHeight`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFontHeight?: (ctx: FontHeightContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.fontNameDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFontNameDef?: (ctx: FontNameDefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.fontNameRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFontNameRef?: (ctx: FontNameRefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.fontProportions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFontProportions?: (ctx: FontProportionsContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.fontRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFontRef?: (ctx: FontRefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.fonts`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFonts?: (ctx: FontsContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.fontWidth`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFontWidth?: (ctx: FontWidthContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.forbiddenEvent`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForbiddenEvent?: (ctx: ForbiddenEventContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.forFrame`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForFrame?: (ctx: ForFrameContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.forFrameAnnotate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForFrameAnnotate?: (ctx: ForFrameAnnotateContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.forFrameIndex`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForFrameIndex?: (ctx: ForFrameIndexContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.forFrameIndexDisplay`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForFrameIndexDisplay?: (ctx: ForFrameIndexDisplayContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.forFrameIndexNameCaseSensitive`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForFrameIndexNameCaseSensitive?: (ctx: ForFrameIndexNameCaseSensitiveContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.forFrameIndexRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForFrameIndexRef?: (ctx: ForFrameIndexRefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.forFrameMemberRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForFrameMemberRef?: (ctx: ForFrameMemberRefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.forFrameRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForFrameRef?: (ctx: ForFrameRefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.frameConfiguration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFrameConfiguration?: (ctx: FrameConfigurationContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.frameNameCaseSensitive`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFrameNameCaseSensitive?: (ctx: FrameNameCaseSensitiveContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.frameNameDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFrameNameDef?: (ctx: FrameNameDefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.frameNameRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFrameNameRef?: (ctx: FrameNameRefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.frameRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFrameRef?: (ctx: FrameRefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.frequencyValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFrequencyValue?: (ctx: FrequencyValueContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.fromBottom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFromBottom?: (ctx: FromBottomContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.fromInteger`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFromInteger?: (ctx: FromIntegerContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.fromLeft`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFromLeft?: (ctx: FromLeftContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.fromRight`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFromRight?: (ctx: FromRightContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.fromTop`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFromTop?: (ctx: FromTopContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.generated`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGenerated?: (ctx: GeneratedContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.geometryMacro`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGeometryMacro?: (ctx: GeometryMacroContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.geometryMacroHeader`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGeometryMacroHeader?: (ctx: GeometryMacroHeaderContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.geometryMacroRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGeometryMacroRef?: (ctx: GeometryMacroRefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.geometryMacroUnits`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGeometryMacroUnits?: (ctx: GeometryMacroUnitsContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.globalPort`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGlobalPort?: (ctx: GlobalPortContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.globalPortBundle`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGlobalPortBundle?: (ctx: GlobalPortBundleContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.globalPortDefinitions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGlobalPortDefinitions?: (ctx: GlobalPortDefinitionsContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.globalPortList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGlobalPortList?: (ctx: GlobalPortListContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.globalPortNameCaseSensitive`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGlobalPortNameCaseSensitive?: (ctx: GlobalPortNameCaseSensitiveContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.globalPortNameDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGlobalPortNameDef?: (ctx: GlobalPortNameDefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.globalPortNameDisplay`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGlobalPortNameDisplay?: (ctx: GlobalPortNameDisplayContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.globalPortNameRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGlobalPortNameRef?: (ctx: GlobalPortNameRefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.globalPortPropertyDisplay`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGlobalPortPropertyDisplay?: (ctx: GlobalPortPropertyDisplayContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.globalPortRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGlobalPortRef?: (ctx: GlobalPortRefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.globalPortScope`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGlobalPortScope?: (ctx: GlobalPortScopeContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.green`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGreen?: (ctx: GreenContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.henry`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHenry?: (ctx: HenryContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.hertz`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHertz?: (ctx: HertzContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.horizontalJustification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHorizontalJustification?: (ctx: HorizontalJustificationContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.hotspot`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHotspot?: (ctx: HotspotContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.hotspotConnectDirection`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHotspotConnectDirection?: (ctx: HotspotConnectDirectionContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.hotspotGrid`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHotspotGrid?: (ctx: HotspotGridContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.hotspotNameCaseSensitive`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHotspotNameCaseSensitive?: (ctx: HotspotNameCaseSensitiveContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.hotspotNameDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHotspotNameDef?: (ctx: HotspotNameDefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.hotspotNameDisplay`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHotspotNameDisplay?: (ctx: HotspotNameDisplayContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.hotspotNameRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHotspotNameRef?: (ctx: HotspotNameRefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.hourNumber`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHourNumber?: (ctx: HourNumberContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.ieeeDesignation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIeeeDesignation?: (ctx: IeeeDesignationContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.ieeeSection`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIeeeSection?: (ctx: IeeeSectionContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.ieeeStandard`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIeeeStandard?: (ctx: IeeeStandardContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.ifFrame`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfFrame?: (ctx: IfFrameContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.ifFrameAnnotate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfFrameAnnotate?: (ctx: IfFrameAnnotateContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.ifFrameRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfFrameRef?: (ctx: IfFrameRefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.ifFrameSet`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfFrameSet?: (ctx: IfFrameSetContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.ignore`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIgnore?: (ctx: IgnoreContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.implementationNameCaseSensitive`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImplementationNameCaseSensitive?: (ctx: ImplementationNameCaseSensitiveContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.implementationNameDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImplementationNameDef?: (ctx: ImplementationNameDefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.implementationNameDisplay`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImplementationNameDisplay?: (ctx: ImplementationNameDisplayContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.implementationNameRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImplementationNameRef?: (ctx: ImplementationNameRefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.indexEndDisplay`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIndexEndDisplay?: (ctx: IndexEndDisplayContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.indexNameDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIndexNameDef?: (ctx: IndexNameDefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.indexNameDisplay`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIndexNameDisplay?: (ctx: IndexNameDisplayContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.indexNameRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIndexNameRef?: (ctx: IndexNameRefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.indexStart`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIndexStart?: (ctx: IndexStartContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.indexStartDisplay`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIndexStartDisplay?: (ctx: IndexStartDisplayContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.indexStep`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIndexStep?: (ctx: IndexStepContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.indexStepDisplay`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIndexStepDisplay?: (ctx: IndexStepDisplayContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.indexValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIndexValue?: (ctx: IndexValueContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.input`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInput?: (ctx: InputContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.inputPort`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInputPort?: (ctx: InputPortContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.inputPortAttributes`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInputPortAttributes?: (ctx: InputPortAttributesContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.instance`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstance?: (ctx: InstanceContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.instanceConfiguration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstanceConfiguration?: (ctx: InstanceConfigurationContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.instanceIndexValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstanceIndexValue?: (ctx: InstanceIndexValueContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.instanceMemberRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstanceMemberRef?: (ctx: InstanceMemberRefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.instanceNameCaseSensitive`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstanceNameCaseSensitive?: (ctx: InstanceNameCaseSensitiveContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.instanceNameDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstanceNameDef?: (ctx: InstanceNameDefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.instanceNameDisplay`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstanceNameDisplay?: (ctx: InstanceNameDisplayContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.instanceNameGenerator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstanceNameGenerator?: (ctx: InstanceNameGeneratorContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.instanceNameGeneratorDisplay`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstanceNameGeneratorDisplay?: (ctx: InstanceNameGeneratorDisplayContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.instanceNameRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstanceNameRef?: (ctx: InstanceNameRefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.instancePortAttributeDisplay`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstancePortAttributeDisplay?: (ctx: InstancePortAttributeDisplayContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.instancePortAttributes`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstancePortAttributes?: (ctx: InstancePortAttributesContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.instancePropertyDisplay`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstancePropertyDisplay?: (ctx: InstancePropertyDisplayContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.instancePropertyOverride`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstancePropertyOverride?: (ctx: InstancePropertyOverrideContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.instanceRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstanceRef?: (ctx: InstanceRefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.instanceWidth`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstanceWidth?: (ctx: InstanceWidthContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.instanceWidthDisplay`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstanceWidthDisplay?: (ctx: InstanceWidthDisplayContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.integer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInteger?: (ctx: IntegerContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.integerConstant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntegerConstant?: (ctx: IntegerConstantContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.integerConstantRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntegerConstantRef?: (ctx: IntegerConstantRefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.integerEqual`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntegerEqual?: (ctx: IntegerEqualContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.integerExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntegerExpression?: (ctx: IntegerExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.integerParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntegerParameter?: (ctx: IntegerParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.integerParameterAssign`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntegerParameterAssign?: (ctx: IntegerParameterAssignContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.integerParameterRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntegerParameterRef?: (ctx: IntegerParameterRefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.integerProduct`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntegerProduct?: (ctx: IntegerProductContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.integerQuotient`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntegerQuotient?: (ctx: IntegerQuotientContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.integerRemainder`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntegerRemainder?: (ctx: IntegerRemainderContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.integerSubtract`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntegerSubtract?: (ctx: IntegerSubtractContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.integerSum`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntegerSum?: (ctx: IntegerSumContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.integerValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntegerValue?: (ctx: IntegerValueContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.interconnectAnnotate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterconnectAnnotate?: (ctx: InterconnectAnnotateContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.interconnectAttachedText`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterconnectAttachedText?: (ctx: InterconnectAttachedTextContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.interconnectDelay`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterconnectDelay?: (ctx: InterconnectDelayContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.interconnectDelayDisplay`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterconnectDelayDisplay?: (ctx: InterconnectDelayDisplayContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.interconnectDelayNameDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterconnectDelayNameDef?: (ctx: InterconnectDelayNameDefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.interconnectDelayNameRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterconnectDelayNameRef?: (ctx: InterconnectDelayNameRefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.interconnectHeader`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterconnectHeader?: (ctx: InterconnectHeaderContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.interconnectNameCaseSensitive`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterconnectNameCaseSensitive?: (ctx: InterconnectNameCaseSensitiveContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.interconnectNameDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterconnectNameDef?: (ctx: InterconnectNameDefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.interconnectNameDisplay`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterconnectNameDisplay?: (ctx: InterconnectNameDisplayContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.interconnectNameRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterconnectNameRef?: (ctx: InterconnectNameRefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.interconnectPropertyDisplay`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterconnectPropertyDisplay?: (ctx: InterconnectPropertyDisplayContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.interconnectRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterconnectRef?: (ctx: InterconnectRefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.interconnectSet`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterconnectSet?: (ctx: InterconnectSetContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.einterface`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEinterface?: (ctx: EinterfaceContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.interfaceJoined`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterfaceJoined?: (ctx: InterfaceJoinedContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.interfaceUnits`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterfaceUnits?: (ctx: InterfaceUnitsContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.iso8859`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIso8859?: (ctx: Iso8859Context) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.iso8859Part`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIso8859Part?: (ctx: Iso8859PartContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.isolated`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIsolated?: (ctx: IsolatedContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.issue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIssue?: (ctx: IssueContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.italicStyle`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitItalicStyle?: (ctx: ItalicStyleContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.jisx0201`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJisx0201?: (ctx: Jisx0201Context) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.jisx0208`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJisx0208?: (ctx: Jisx0208Context) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.joinedAsSignal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJoinedAsSignal?: (ctx: JoinedAsSignalContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.joule`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJoule?: (ctx: JouleContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.k0KeywordLevel`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK0KeywordLevel?: (ctx: K0KeywordLevelContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.k1KeywordAlias`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK1KeywordAlias?: (ctx: K1KeywordAliasContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.k1KeywordLevel`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK1KeywordLevel?: (ctx: K1KeywordLevelContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.k1KeywordNameDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK1KeywordNameDef?: (ctx: K1KeywordNameDefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.k1KeywordNameRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK1KeywordNameRef?: (ctx: K1KeywordNameRefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.k2Actual`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK2Actual?: (ctx: K2ActualContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.k2Build`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK2Build?: (ctx: K2BuildContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.k2Formal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK2Formal?: (ctx: K2FormalContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.k2FormalNameDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK2FormalNameDef?: (ctx: K2FormalNameDefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.k2FormalNameRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK2FormalNameRef?: (ctx: K2FormalNameRefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.k2Generate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK2Generate?: (ctx: K2GenerateContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.k2KeywordDefine`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK2KeywordDefine?: (ctx: K2KeywordDefineContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.k2KeywordLevel`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK2KeywordLevel?: (ctx: K2KeywordLevelContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.k2KeywordParameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK2KeywordParameters?: (ctx: K2KeywordParametersContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.k2Literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK2Literal?: (ctx: K2LiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.k2Optional`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK2Optional?: (ctx: K2OptionalContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.k2Required`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK2Required?: (ctx: K2RequiredContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.k3Build`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK3Build?: (ctx: K3BuildContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.k3Collector`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK3Collector?: (ctx: K3CollectorContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.k3ForEach`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK3ForEach?: (ctx: K3ForEachContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.k3Formal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK3Formal?: (ctx: K3FormalContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.k3FormalList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK3FormalList?: (ctx: K3FormalListContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.k3Generate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK3Generate?: (ctx: K3GenerateContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.k3KeywordDefine`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK3KeywordDefine?: (ctx: K3KeywordDefineContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.k3KeywordLevel`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK3KeywordLevel?: (ctx: K3KeywordLevelContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.k3KeywordParameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitK3KeywordParameters?: (ctx: K3KeywordParametersContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.kelvin`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKelvin?: (ctx: KelvinContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.keywordMap`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKeywordMap?: (ctx: KeywordMapContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.kilogram`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKilogram?: (ctx: KilogramContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.leaf`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLeaf?: (ctx: LeafContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.leafOccurrenceAnnotate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLeafOccurrenceAnnotate?: (ctx: LeafOccurrenceAnnotateContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.leftJustify`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLeftJustify?: (ctx: LeftJustifyContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.lengthValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLengthValue?: (ctx: LengthValueContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.lessThan`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLessThan?: (ctx: LessThanContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.lessThanOrEqual`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLessThanOrEqual?: (ctx: LessThanOrEqualContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.library`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLibrary?: (ctx: LibraryContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.libraryHeader`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLibraryHeader?: (ctx: LibraryHeaderContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.libraryNameCaseSensitive`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLibraryNameCaseSensitive?: (ctx: LibraryNameCaseSensitiveContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.libraryNameDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLibraryNameDef?: (ctx: LibraryNameDefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.libraryNameRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLibraryNameRef?: (ctx: LibraryNameRefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.libraryObjectNameCaseSensitive`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLibraryObjectNameCaseSensitive?: (ctx: LibraryObjectNameCaseSensitiveContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.libraryObjectNameDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLibraryObjectNameDef?: (ctx: LibraryObjectNameDefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.libraryObjectNameRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLibraryObjectNameRef?: (ctx: LibraryObjectNameRefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.libraryRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLibraryRef?: (ctx: LibraryRefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.loadDelay`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLoadDelay?: (ctx: LoadDelayContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.localPortGroup`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocalPortGroup?: (ctx: LocalPortGroupContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.localPortGroupNameCaseSensitive`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocalPortGroupNameCaseSensitive?: (ctx: LocalPortGroupNameCaseSensitiveContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.localPortGroupNameDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocalPortGroupNameDef?: (ctx: LocalPortGroupNameDefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.localPortGroupNameRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocalPortGroupNameRef?: (ctx: LocalPortGroupNameRefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.localPortGroupRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocalPortGroupRef?: (ctx: LocalPortGroupRefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.logicalConnectivity`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalConnectivity?: (ctx: LogicalConnectivityContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.logicDefinitions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicDefinitions?: (ctx: LogicDefinitionsContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.logicList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicList?: (ctx: LogicListContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.logicMapInput`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicMapInput?: (ctx: LogicMapInputContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.logicMapOutput`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicMapOutput?: (ctx: LogicMapOutputContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.logicModelUnits`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicModelUnits?: (ctx: LogicModelUnitsContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.logicModelView`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicModelView?: (ctx: LogicModelViewContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.logicNameDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicNameDef?: (ctx: LogicNameDefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.logicNameRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicNameRef?: (ctx: LogicNameRefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.logicOneOf`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicOneOf?: (ctx: LogicOneOfContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.logicRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicRef?: (ctx: LogicRefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.logicValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicValue?: (ctx: LogicValueContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.lsbToMsb`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLsbToMsb?: (ctx: LsbToMsbContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.mantissa`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMantissa?: (ctx: MantissaContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.mark`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMark?: (ctx: MarkContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.maskLayoutUnits`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMaskLayoutUnits?: (ctx: MaskLayoutUnitsContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.maskLayoutView`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMaskLayoutView?: (ctx: MaskLayoutViewContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.measured`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMeasured?: (ctx: MeasuredContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.meter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMeter?: (ctx: MeterContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.middleJustify`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMiddleJustify?: (ctx: MiddleJustifyContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.minimalWidth`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMinimalWidth?: (ctx: MinimalWidthContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.minimumStringLength`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMinimumStringLength?: (ctx: MinimumStringLengthContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.miNoMax`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMiNoMax?: (ctx: MiNoMaxContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.miNoMaxValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMiNoMaxValue?: (ctx: MiNoMaxValueContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.minuend`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMinuend?: (ctx: MinuendContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.minuteNumber`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMinuteNumber?: (ctx: MinuteNumberContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.mixedDirection`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMixedDirection?: (ctx: MixedDirectionContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.mnm`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMnm?: (ctx: MnmContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.mole`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMole?: (ctx: MoleContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.monthNumber`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMonthNumber?: (ctx: MonthNumberContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.msbToLsb`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMsbToLsb?: (ctx: MsbToLsbContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.mustJoin`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMustJoin?: (ctx: MustJoinContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.nameAlias`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNameAlias?: (ctx: NameAliasContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.nameCaseSensitivity`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNameCaseSensitivity?: (ctx: NameCaseSensitivityContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.nameDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNameDef?: (ctx: NameDefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.nameDimension`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNameDimension?: (ctx: NameDimensionContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.nameDimensionStructure`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNameDimensionStructure?: (ctx: NameDimensionStructureContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.nameInformation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNameInformation?: (ctx: NameInformationContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.namePartSeparator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamePartSeparator?: (ctx: NamePartSeparatorContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.nameRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNameRef?: (ctx: NameRefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.nameStructure`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNameStructure?: (ctx: NameStructureContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.narrowPort`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNarrowPort?: (ctx: NarrowPortContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.narrowWire`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNarrowWire?: (ctx: NarrowWireContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.noHotspotGrid`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNoHotspotGrid?: (ctx: NoHotspotGridContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.nominalHotspotGrid`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNominalHotspotGrid?: (ctx: NominalHotspotGridContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.nonPermutable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNonPermutable?: (ctx: NonPermutableContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.not_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNot_?: (ctx: Not_Context) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.notInherited`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNotInherited?: (ctx: NotInheritedContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumber?: (ctx: NumberContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.numberExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumberExpression?: (ctx: NumberExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.numberOfBasicUnits`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumberOfBasicUnits?: (ctx: NumberOfBasicUnitsContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.numberOfNewUnits`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumberOfNewUnits?: (ctx: NumberOfNewUnitsContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.numberParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumberParameter?: (ctx: NumberParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.numberParameterAssign`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumberParameterAssign?: (ctx: NumberParameterAssignContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.numberParameterRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumberParameterRef?: (ctx: NumberParameterRefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.numberPoint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumberPoint?: (ctx: NumberPointContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.numberValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumberValue?: (ctx: NumberValueContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.numerator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumerator?: (ctx: NumeratorContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.occurrenceAnnotate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOccurrenceAnnotate?: (ctx: OccurrenceAnnotateContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.occurrenceHierarchyAnnotate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOccurrenceHierarchyAnnotate?: (ctx: OccurrenceHierarchyAnnotateContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.offsetEvent`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOffsetEvent?: (ctx: OffsetEventContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.ohm`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOhm?: (ctx: OhmContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.openShape`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOpenShape?: (ctx: OpenShapeContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.or_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOr_?: (ctx: Or_Context) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.origin`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrigin?: (ctx: OriginContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.originalBoundingBox`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOriginalBoundingBox?: (ctx: OriginalBoundingBoxContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.originalDrawingDate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOriginalDrawingDate?: (ctx: OriginalDrawingDateContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.originalDrawingDateDisplay`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOriginalDrawingDateDisplay?: (ctx: OriginalDrawingDateDisplayContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.originalName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOriginalName?: (ctx: OriginalNameContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.otherwiseFrame`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOtherwiseFrame?: (ctx: OtherwiseFrameContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.otherwiseFrameAnnotate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOtherwiseFrameAnnotate?: (ctx: OtherwiseFrameAnnotateContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.otherwiseFrameRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOtherwiseFrameRef?: (ctx: OtherwiseFrameRefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.output`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOutput?: (ctx: OutputContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.outputPort`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOutputPort?: (ctx: OutputPortContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.outputPortAttributes`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOutputPortAttributes?: (ctx: OutputPortAttributesContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.owner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOwner?: (ctx: OwnerContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.page`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPage?: (ctx: PageContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.pageAnnotate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPageAnnotate?: (ctx: PageAnnotateContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.pageBorder`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPageBorder?: (ctx: PageBorderContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.pageBorderTemplate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPageBorderTemplate?: (ctx: PageBorderTemplateContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.pageBorderTemplateRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPageBorderTemplateRef?: (ctx: PageBorderTemplateRefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.pageCommentGraphics`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPageCommentGraphics?: (ctx: PageCommentGraphicsContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.pageHeader`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPageHeader?: (ctx: PageHeaderContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.pageIdentification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPageIdentification?: (ctx: PageIdentificationContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.pageIdentificationDisplay`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPageIdentificationDisplay?: (ctx: PageIdentificationDisplayContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.pageNameCaseSensitive`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPageNameCaseSensitive?: (ctx: PageNameCaseSensitiveContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.pageNameDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPageNameDef?: (ctx: PageNameDefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.pageNameRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPageNameRef?: (ctx: PageNameRefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.pagePropertyDisplay`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPagePropertyDisplay?: (ctx: PagePropertyDisplayContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.pageRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPageRef?: (ctx: PageRefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.pageSize`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPageSize?: (ctx: PageSizeContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.pageTitle`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPageTitle?: (ctx: PageTitleContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.pageTitleBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPageTitleBlock?: (ctx: PageTitleBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.pageTitleBlockAttributeDisplay`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPageTitleBlockAttributeDisplay?: (ctx: PageTitleBlockAttributeDisplayContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.pageTitleBlockAttributes`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPageTitleBlockAttributes?: (ctx: PageTitleBlockAttributesContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.pageTitleBlockTemplate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPageTitleBlockTemplate?: (ctx: PageTitleBlockTemplateContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.pageTitleBlockTemplateRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPageTitleBlockTemplateRef?: (ctx: PageTitleBlockTemplateRefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.pageTitleDisplay`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPageTitleDisplay?: (ctx: PageTitleDisplayContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.parameterDisplay`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameterDisplay?: (ctx: ParameterDisplayContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.parameterNameCaseSensitive`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameterNameCaseSensitive?: (ctx: ParameterNameCaseSensitiveContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.parameterNameDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameterNameDef?: (ctx: ParameterNameDefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.parameterNameDisplay`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameterNameDisplay?: (ctx: ParameterNameDisplayContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.parameterNameRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameterNameRef?: (ctx: ParameterNameRefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.path`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPath?: (ctx: PathContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.pathDelay`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPathDelay?: (ctx: PathDelayContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.pathWidth`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPathWidth?: (ctx: PathWidthContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.pcbLayoutUnits`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPcbLayoutUnits?: (ctx: PcbLayoutUnitsContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.pcbLayoutView`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPcbLayoutView?: (ctx: PcbLayoutViewContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.permutable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPermutable?: (ctx: PermutableContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.physicalDefaults`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPhysicalDefaults?: (ctx: PhysicalDefaultsContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.physicalScaling`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPhysicalScaling?: (ctx: PhysicalScalingContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.pixelPattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPixelPattern?: (ctx: PixelPatternContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.pixelRow`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPixelRow?: (ctx: PixelRowContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.point`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPoint?: (ctx: PointContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.pointList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPointList?: (ctx: PointListContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.pointValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPointValue?: (ctx: PointValueContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.polygon`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPolygon?: (ctx: PolygonContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.port`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPort?: (ctx: PortContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.portAnnotate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPortAnnotate?: (ctx: PortAnnotateContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.portAttributeDisplay`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPortAttributeDisplay?: (ctx: PortAttributeDisplayContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.portBundle`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPortBundle?: (ctx: PortBundleContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.portDelay`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPortDelay?: (ctx: PortDelayContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.portDelayDisplay`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPortDelayDisplay?: (ctx: PortDelayDisplayContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.portDelayNameDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPortDelayNameDef?: (ctx: PortDelayNameDefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.portDelayNameRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPortDelayNameRef?: (ctx: PortDelayNameRefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.portDelayOverride`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPortDelayOverride?: (ctx: PortDelayOverrideContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.portDirection`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPortDirection?: (ctx: PortDirectionContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.portDirectionIndicator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPortDirectionIndicator?: (ctx: PortDirectionIndicatorContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.portIndexValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPortIndexValue?: (ctx: PortIndexValueContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.portInstanceRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPortInstanceRef?: (ctx: PortInstanceRefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.portJoined`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPortJoined?: (ctx: PortJoinedContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.portList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPortList?: (ctx: PortListContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.portLoadDelay`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPortLoadDelay?: (ctx: PortLoadDelayContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.portLoadDelayDisplay`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPortLoadDelayDisplay?: (ctx: PortLoadDelayDisplayContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.portLoadDelayNameDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPortLoadDelayNameDef?: (ctx: PortLoadDelayNameDefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.portLoadDelayNameRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPortLoadDelayNameRef?: (ctx: PortLoadDelayNameRefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.portLoadDelayOverride`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPortLoadDelayOverride?: (ctx: PortLoadDelayOverrideContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.portMemberRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPortMemberRef?: (ctx: PortMemberRefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.portNameCaseSensitive`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPortNameCaseSensitive?: (ctx: PortNameCaseSensitiveContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.portNameDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPortNameDef?: (ctx: PortNameDefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.portNameDisplay`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPortNameDisplay?: (ctx: PortNameDisplayContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.portNameGenerator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPortNameGenerator?: (ctx: PortNameGeneratorContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.portNameGeneratorDisplay`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPortNameGeneratorDisplay?: (ctx: PortNameGeneratorDisplayContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.portNameRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPortNameRef?: (ctx: PortNameRefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.portPropertyDisplay`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPortPropertyDisplay?: (ctx: PortPropertyDisplayContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.portPropertyDisplayOverride`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPortPropertyDisplayOverride?: (ctx: PortPropertyDisplayOverrideContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.portPropertyOverride`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPortPropertyOverride?: (ctx: PortPropertyOverrideContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.portRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPortRef?: (ctx: PortRefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.portSet`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPortSet?: (ctx: PortSetContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.portWidth`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPortWidth?: (ctx: PortWidthContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.presentLogicValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPresentLogicValue?: (ctx: PresentLogicValueContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.previousLogicValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPreviousLogicValue?: (ctx: PreviousLogicValueContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.previousVersion`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPreviousVersion?: (ctx: PreviousVersionContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.primaryName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimaryName?: (ctx: PrimaryNameContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.property`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProperty?: (ctx: PropertyContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.propertyDisplay`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPropertyDisplay?: (ctx: PropertyDisplayContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.propertyDisplayOverride`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPropertyDisplayOverride?: (ctx: PropertyDisplayOverrideContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.propertyInheritanceControl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPropertyInheritanceControl?: (ctx: PropertyInheritanceControlContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.propertyNameCaseSensitive`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPropertyNameCaseSensitive?: (ctx: PropertyNameCaseSensitiveContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.propertyNameDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPropertyNameDef?: (ctx: PropertyNameDefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.propertyNameDisplay`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPropertyNameDisplay?: (ctx: PropertyNameDisplayContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.propertyNameRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPropertyNameRef?: (ctx: PropertyNameRefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.propertyOverride`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPropertyOverride?: (ctx: PropertyOverrideContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.proportionalFont`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProportionalFont?: (ctx: ProportionalFontContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.pt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPt?: (ctx: PtContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.pt1`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPt1?: (ctx: Pt1Context) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.pt2`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPt2?: (ctx: Pt2Context) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.radian`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRadian?: (ctx: RadianContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.reason`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReason?: (ctx: ReasonContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.rectangle`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRectangle?: (ctx: RectangleContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.red`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRed?: (ctx: RedContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.removeDisplay`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRemoveDisplay?: (ctx: RemoveDisplayContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.repetitionCount`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRepetitionCount?: (ctx: RepetitionCountContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.repetitionCountDisplay`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRepetitionCountDisplay?: (ctx: RepetitionCountDisplayContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.replaceDisplay`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReplaceDisplay?: (ctx: ReplaceDisplayContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.required`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRequired?: (ctx: RequiredContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.resolves`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitResolves?: (ctx: ResolvesContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.revision`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRevision?: (ctx: RevisionContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.revisionDisplay`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRevisionDisplay?: (ctx: RevisionDisplayContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.rightJustify`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRightJustify?: (ctx: RightJustifyContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.ripperHotspot`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRipperHotspot?: (ctx: RipperHotspotContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.ripperHotspotRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRipperHotspotRef?: (ctx: RipperHotspotRefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.rotation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRotation?: (ctx: RotationContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.round`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRound?: (ctx: RoundContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.rowSize`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRowSize?: (ctx: RowSizeContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.scaledInteger`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScaledInteger?: (ctx: ScaledIntegerContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.scaleX`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScaleX?: (ctx: ScaleXContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.scaleY`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScaleY?: (ctx: ScaleYContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.schematicBus`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchematicBus?: (ctx: SchematicBusContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.schematicBusDetails`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchematicBusDetails?: (ctx: SchematicBusDetailsContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.schematicBusGraphics`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchematicBusGraphics?: (ctx: SchematicBusGraphicsContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.schematicBusJoined`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchematicBusJoined?: (ctx: SchematicBusJoinedContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.schematicBusSlice`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchematicBusSlice?: (ctx: SchematicBusSliceContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.schematicComplexFigure`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchematicComplexFigure?: (ctx: SchematicComplexFigureContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.schematicFigureMacro`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchematicFigureMacro?: (ctx: SchematicFigureMacroContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.schematicFigureMacroRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchematicFigureMacroRef?: (ctx: SchematicFigureMacroRefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.schematicForFrameBorder`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchematicForFrameBorder?: (ctx: SchematicForFrameBorderContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.schematicForFrameBorderTemplate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchematicForFrameBorderTemplate?: (ctx: SchematicForFrameBorderTemplateContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.schematicForFrameBorderTemplateRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchematicForFrameBorderTemplateRef?: (ctx: SchematicForFrameBorderTemplateRefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.schematicForFrameImplementation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchematicForFrameImplementation?: (ctx: SchematicForFrameImplementationContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.schematicForFrameImplementationHeader`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchematicForFrameImplementationHeader?: (ctx: SchematicForFrameImplementationHeaderContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.schematicFrameImplementationDetails`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchematicFrameImplementationDetails?: (ctx: SchematicFrameImplementationDetailsContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.schematicGlobalPortAttributes`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchematicGlobalPortAttributes?: (ctx: SchematicGlobalPortAttributesContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.schematicGlobalPortImplementation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchematicGlobalPortImplementation?: (ctx: SchematicGlobalPortImplementationContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.schematicGlobalPortImplementationRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchematicGlobalPortImplementationRef?: (ctx: SchematicGlobalPortImplementationRefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.schematicGlobalPortTemplate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchematicGlobalPortTemplate?: (ctx: SchematicGlobalPortTemplateContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.schematicGlobalPortTemplateRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchematicGlobalPortTemplateRef?: (ctx: SchematicGlobalPortTemplateRefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.schematicIfFrameBorder`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchematicIfFrameBorder?: (ctx: SchematicIfFrameBorderContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.schematicIfFrameBorderTemplate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchematicIfFrameBorderTemplate?: (ctx: SchematicIfFrameBorderTemplateContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.schematicIfFrameBorderTemplateRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchematicIfFrameBorderTemplateRef?: (ctx: SchematicIfFrameBorderTemplateRefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.schematicIfFrameImplementation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchematicIfFrameImplementation?: (ctx: SchematicIfFrameImplementationContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.schematicIfFrameImplementationHeader`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchematicIfFrameImplementationHeader?: (ctx: SchematicIfFrameImplementationHeaderContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.schematicImplementation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchematicImplementation?: (ctx: SchematicImplementationContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.schematicInstanceImplementation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchematicInstanceImplementation?: (ctx: SchematicInstanceImplementationContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.schematicInstanceImplementationRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchematicInstanceImplementationRef?: (ctx: SchematicInstanceImplementationRefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.schematicInterconnectAttributeDisplay`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchematicInterconnectAttributeDisplay?: (ctx: SchematicInterconnectAttributeDisplayContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.schematicInterconnectHeader`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchematicInterconnectHeader?: (ctx: SchematicInterconnectHeaderContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.schematicInterconnectTerminatorImplementation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchematicInterconnectTerminatorImplementation?: (ctx: SchematicInterconnectTerminatorImplementationContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.schematicInterconnectTerminatorImplementationRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchematicInterconnectTerminatorImplementationRef?: (ctx: SchematicInterconnectTerminatorImplementationRefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.schematicInterconnectTerminatorTemplate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchematicInterconnectTerminatorTemplate?: (ctx: SchematicInterconnectTerminatorTemplateContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.schematicInterconnectTerminatorTemplateRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchematicInterconnectTerminatorTemplateRef?: (ctx: SchematicInterconnectTerminatorTemplateRefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.schematicJunctionImplementation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchematicJunctionImplementation?: (ctx: SchematicJunctionImplementationContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.schematicJunctionImplementationRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchematicJunctionImplementationRef?: (ctx: SchematicJunctionImplementationRefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.schematicJunctionTemplate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchematicJunctionTemplate?: (ctx: SchematicJunctionTemplateContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.schematicJunctionTemplateRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchematicJunctionTemplateRef?: (ctx: SchematicJunctionTemplateRefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.schematicMasterPortImplementation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchematicMasterPortImplementation?: (ctx: SchematicMasterPortImplementationContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.schematicMasterPortImplementationRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchematicMasterPortImplementationRef?: (ctx: SchematicMasterPortImplementationRefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.schematicMasterPortTemplate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchematicMasterPortTemplate?: (ctx: SchematicMasterPortTemplateContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.schematicMasterPortTemplateRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchematicMasterPortTemplateRef?: (ctx: SchematicMasterPortTemplateRefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.schematicMetric`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchematicMetric?: (ctx: SchematicMetricContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.schematicNet`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchematicNet?: (ctx: SchematicNetContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.schematicNetDetails`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchematicNetDetails?: (ctx: SchematicNetDetailsContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.schematicNetGraphics`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchematicNetGraphics?: (ctx: SchematicNetGraphicsContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.schematicNetJoined`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchematicNetJoined?: (ctx: SchematicNetJoinedContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.schematicOffPageConnectorImplementation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchematicOffPageConnectorImplementation?: (ctx: SchematicOffPageConnectorImplementationContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.schematicOffPageConnectorImplementationRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchematicOffPageConnectorImplementationRef?: (ctx: SchematicOffPageConnectorImplementationRefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.schematicOffPageConnectorTemplate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchematicOffPageConnectorTemplate?: (ctx: SchematicOffPageConnectorTemplateContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.schematicOffPageConnectorTemplateRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchematicOffPageConnectorTemplateRef?: (ctx: SchematicOffPageConnectorTemplateRefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.schematicOnPageConnectorImplementation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchematicOnPageConnectorImplementation?: (ctx: SchematicOnPageConnectorImplementationContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.schematicOnPageConnectorImplementationRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchematicOnPageConnectorImplementationRef?: (ctx: SchematicOnPageConnectorImplementationRefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.schematicOnPageConnectorTemplate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchematicOnPageConnectorTemplate?: (ctx: SchematicOnPageConnectorTemplateContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.schematicOnPageConnectorTemplateRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchematicOnPageConnectorTemplateRef?: (ctx: SchematicOnPageConnectorTemplateRefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.schematicOtherwiseFrameBorder`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchematicOtherwiseFrameBorder?: (ctx: SchematicOtherwiseFrameBorderContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.schematicOtherwiseFrameBorderTemplate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchematicOtherwiseFrameBorderTemplate?: (ctx: SchematicOtherwiseFrameBorderTemplateContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.schematicOtherwiseFrameBorderTemplateRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchematicOtherwiseFrameBorderTemplateRef?: (ctx: SchematicOtherwiseFrameBorderTemplateRefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.schematicOtherwiseFrameImplementation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchematicOtherwiseFrameImplementation?: (ctx: SchematicOtherwiseFrameImplementationContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.schematicOtherwiseFrameImplementationHeader`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchematicOtherwiseFrameImplementationHeader?: (ctx: SchematicOtherwiseFrameImplementationHeaderContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.schematicPortAcPower`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchematicPortAcPower?: (ctx: SchematicPortAcPowerContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.schematicPortAcPowerRecommendedFrequency`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchematicPortAcPowerRecommendedFrequency?: (ctx: SchematicPortAcPowerRecommendedFrequencyContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.schematicPortAcPowerRecommendedVoltageRms`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchematicPortAcPowerRecommendedVoltageRms?: (ctx: SchematicPortAcPowerRecommendedVoltageRmsContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.schematicPortAnalog`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchematicPortAnalog?: (ctx: SchematicPortAnalogContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.schematicPortAttributes`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchematicPortAttributes?: (ctx: SchematicPortAttributesContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.schematicPortChassisGround`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchematicPortChassisGround?: (ctx: SchematicPortChassisGroundContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.schematicPortClock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchematicPortClock?: (ctx: SchematicPortClockContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.schematicPortDcPower`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchematicPortDcPower?: (ctx: SchematicPortDcPowerContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.schematicPortDcPowerRecommendedVoltage`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchematicPortDcPowerRecommendedVoltage?: (ctx: SchematicPortDcPowerRecommendedVoltageContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.schematicPortEarthGround`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchematicPortEarthGround?: (ctx: SchematicPortEarthGroundContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.schematicPortGround`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchematicPortGround?: (ctx: SchematicPortGroundContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.schematicPortNonLogical`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchematicPortNonLogical?: (ctx: SchematicPortNonLogicalContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.schematicPortOpenCollector`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchematicPortOpenCollector?: (ctx: SchematicPortOpenCollectorContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.schematicPortOpenEmitter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchematicPortOpenEmitter?: (ctx: SchematicPortOpenEmitterContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.schematicPortPower`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchematicPortPower?: (ctx: SchematicPortPowerContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.schematicPortStyle`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchematicPortStyle?: (ctx: SchematicPortStyleContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.schematicPortThreeState`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchematicPortThreeState?: (ctx: SchematicPortThreeStateContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.schematicRequiredDefaults`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchematicRequiredDefaults?: (ctx: SchematicRequiredDefaultsContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.schematicRipperImplementation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchematicRipperImplementation?: (ctx: SchematicRipperImplementationContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.schematicRipperImplementationRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchematicRipperImplementationRef?: (ctx: SchematicRipperImplementationRefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.schematicRipperTemplate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchematicRipperTemplate?: (ctx: SchematicRipperTemplateContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.schematicRipperTemplateRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchematicRipperTemplateRef?: (ctx: SchematicRipperTemplateRefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.schematicSubBus`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchematicSubBus?: (ctx: SchematicSubBusContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.schematicSubBusSet`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchematicSubBusSet?: (ctx: SchematicSubBusSetContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.schematicSubInterconnectHeader`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchematicSubInterconnectHeader?: (ctx: SchematicSubInterconnectHeaderContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.schematicSubNet`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchematicSubNet?: (ctx: SchematicSubNetContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.schematicSubNetSet`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchematicSubNetSet?: (ctx: SchematicSubNetSetContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.schematicSymbol`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchematicSymbol?: (ctx: SchematicSymbolContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.schematicSymbolBorder`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchematicSymbolBorder?: (ctx: SchematicSymbolBorderContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.schematicSymbolBorderTemplate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchematicSymbolBorderTemplate?: (ctx: SchematicSymbolBorderTemplateContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.schematicSymbolBorderTemplateRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchematicSymbolBorderTemplateRef?: (ctx: SchematicSymbolBorderTemplateRefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.schematicSymbolHeader`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchematicSymbolHeader?: (ctx: SchematicSymbolHeaderContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.schematicSymbolPortImplementation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchematicSymbolPortImplementation?: (ctx: SchematicSymbolPortImplementationContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.schematicSymbolPortImplementationRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchematicSymbolPortImplementationRef?: (ctx: SchematicSymbolPortImplementationRefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.schematicSymbolPortTemplate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchematicSymbolPortTemplate?: (ctx: SchematicSymbolPortTemplateContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.schematicSymbolPortTemplateRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchematicSymbolPortTemplateRef?: (ctx: SchematicSymbolPortTemplateRefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.schematicSymbolRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchematicSymbolRef?: (ctx: SchematicSymbolRefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.schematicTemplateHeader`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchematicTemplateHeader?: (ctx: SchematicTemplateHeaderContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.schematicUnits`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchematicUnits?: (ctx: SchematicUnitsContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.schematicView`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchematicView?: (ctx: SchematicViewContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.schematicViewHeader`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchematicViewHeader?: (ctx: SchematicViewHeaderContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.schematicWireAffinity`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchematicWireAffinity?: (ctx: SchematicWireAffinityContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.schematicWireStyle`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchematicWireStyle?: (ctx: SchematicWireStyleContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.second`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSecond?: (ctx: SecondContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.secondIntegerExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSecondIntegerExpression?: (ctx: SecondIntegerExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.secondNumber`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSecondNumber?: (ctx: SecondNumberContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.secondStringExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSecondStringExpression?: (ctx: SecondStringExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.section`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSection?: (ctx: SectionContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.sectionNameDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSectionNameDef?: (ctx: SectionNameDefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.sectionTitle`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSectionTitle?: (ctx: SectionTitleContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.sequence`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSequence?: (ctx: SequenceContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.setAngle`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetAngle?: (ctx: SetAngleContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.setCapacitance`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetCapacitance?: (ctx: SetCapacitanceContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.setCurrent`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetCurrent?: (ctx: SetCurrentContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.setDistance`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetDistance?: (ctx: SetDistanceContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.setFrequency`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetFrequency?: (ctx: SetFrequencyContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.setTime`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetTime?: (ctx: SetTimeContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.setVoltage`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetVoltage?: (ctx: SetVoltageContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.shape`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShape?: (ctx: ShapeContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.siemens`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSiemens?: (ctx: SiemensContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.signal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSignal?: (ctx: SignalContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.signalAnnotate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSignalAnnotate?: (ctx: SignalAnnotateContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.signalGroup`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSignalGroup?: (ctx: SignalGroupContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.signalGroupAnnotate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSignalGroupAnnotate?: (ctx: SignalGroupAnnotateContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.signalGroupNameCaseSensitive`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSignalGroupNameCaseSensitive?: (ctx: SignalGroupNameCaseSensitiveContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.signalGroupNameDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSignalGroupNameDef?: (ctx: SignalGroupNameDefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.signalGroupNameRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSignalGroupNameRef?: (ctx: SignalGroupNameRefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.signalGroupRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSignalGroupRef?: (ctx: SignalGroupRefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.signalIndexValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSignalIndexValue?: (ctx: SignalIndexValueContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.signalJoined`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSignalJoined?: (ctx: SignalJoinedContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.signalList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSignalList?: (ctx: SignalListContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.signalMemberRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSignalMemberRef?: (ctx: SignalMemberRefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.signalNameCaseSensitive`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSignalNameCaseSensitive?: (ctx: SignalNameCaseSensitiveContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.signalNameDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSignalNameDef?: (ctx: SignalNameDefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.signalNameRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSignalNameRef?: (ctx: SignalNameRefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.signalRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSignalRef?: (ctx: SignalRefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.signalWidth`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSignalWidth?: (ctx: SignalWidthContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.simpleName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimpleName?: (ctx: SimpleNameContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.startPoint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStartPoint?: (ctx: StartPointContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.status`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatus?: (ctx: StatusContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.step`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStep?: (ctx: StepContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.string`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitString?: (ctx: StringContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.stringConcatenate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringConcatenate?: (ctx: StringConcatenateContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.stringConstant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringConstant?: (ctx: StringConstantContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.stringConstantRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringConstantRef?: (ctx: StringConstantRefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.stringEqual`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringEqual?: (ctx: StringEqualContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.stringExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringExpression?: (ctx: StringExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.stringLength`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringLength?: (ctx: StringLengthContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.stringParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringParameter?: (ctx: StringParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.stringParameterAssign`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringParameterAssign?: (ctx: StringParameterAssignContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.stringParameterRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringParameterRef?: (ctx: StringParameterRefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.stringPrefix`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringPrefix?: (ctx: StringPrefixContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.stringSuffix`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringSuffix?: (ctx: StringSuffixContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.stringValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringValue?: (ctx: StringValueContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.strong`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStrong?: (ctx: StrongContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.subIssue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubIssue?: (ctx: SubIssueContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.substring`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubstring?: (ctx: SubstringContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.substringLength`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubstringLength?: (ctx: SubstringLengthContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.substringOffset`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubstringOffset?: (ctx: SubstringOffsetContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.subtrahend`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubtrahend?: (ctx: SubtrahendContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.symbolicLayoutUnits`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSymbolicLayoutUnits?: (ctx: SymbolicLayoutUnitsContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.symbolicLayoutView`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSymbolicLayoutView?: (ctx: SymbolicLayoutViewContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.symbolPortImplementationNameDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSymbolPortImplementationNameDef?: (ctx: SymbolPortImplementationNameDefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.symbolPortImplementationNameRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSymbolPortImplementationNameRef?: (ctx: SymbolPortImplementationNameRefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.technology`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTechnology?: (ctx: TechnologyContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.textHeight`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTextHeight?: (ctx: TextHeightContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.throughPoint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitThroughPoint?: (ctx: ThroughPointContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.time`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTime?: (ctx: TimeContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.timeDelay`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTimeDelay?: (ctx: TimeDelayContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.timeInterval`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTimeInterval?: (ctx: TimeIntervalContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.timeStamp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTimeStamp?: (ctx: TimeStampContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.timeValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTimeValue?: (ctx: TimeValueContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.timing`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTiming?: (ctx: TimingContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.timingDisplay`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTimingDisplay?: (ctx: TimingDisplayContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.timingNameDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTimingNameDef?: (ctx: TimingNameDefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.timingNameRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTimingNameRef?: (ctx: TimingNameRefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.toInteger`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitToInteger?: (ctx: ToIntegerContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.topJustify`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTopJustify?: (ctx: TopJustifyContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.totalPages`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTotalPages?: (ctx: TotalPagesContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.totalPagesDisplay`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTotalPagesDisplay?: (ctx: TotalPagesDisplayContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.transform`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTransform?: (ctx: TransformContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.transition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTransition?: (ctx: TransitionContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.etrue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEtrue?: (ctx: EtrueContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.truncate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTruncate?: (ctx: TruncateContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.typedValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypedValue?: (ctx: TypedValueContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.typeface`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeface?: (ctx: TypefaceContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.typefaceSuffix`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypefaceSuffix?: (ctx: TypefaceSuffixContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.unconfigured`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnconfigured?: (ctx: UnconfiguredContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.unconstrained`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnconstrained?: (ctx: UnconstrainedContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.undefined`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUndefined?: (ctx: UndefinedContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.unit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnit?: (ctx: UnitContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.unitDefinitions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnitDefinitions?: (ctx: UnitDefinitionsContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.unitExponent`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnitExponent?: (ctx: UnitExponentContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.unitNameDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnitNameDef?: (ctx: UnitNameDefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.unitNameRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnitNameRef?: (ctx: UnitNameRefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.unitRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnitRef?: (ctx: UnitRefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.unrestricted`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnrestricted?: (ctx: UnrestrictedContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.unspecified`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnspecified?: (ctx: UnspecifiedContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.unspecifiedDirectionPort`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnspecifiedDirectionPort?: (ctx: UnspecifiedDirectionPortContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.untyped`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUntyped?: (ctx: UntypedContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.unused`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnused?: (ctx: UnusedContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.usableArea`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUsableArea?: (ctx: UsableAreaContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.userData`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUserData?: (ctx: UserDataContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.userDataTag`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUserDataTag?: (ctx: UserDataTagContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.version`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVersion?: (ctx: VersionContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.verticalJustification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVerticalJustification?: (ctx: VerticalJustificationContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.viewGroup`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitViewGroup?: (ctx: ViewGroupContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.viewGroupHeader`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitViewGroupHeader?: (ctx: ViewGroupHeaderContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.viewGroupNameCaseSensitive`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitViewGroupNameCaseSensitive?: (ctx: ViewGroupNameCaseSensitiveContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.viewGroupNameDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitViewGroupNameDef?: (ctx: ViewGroupNameDefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.viewGroupNameRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitViewGroupNameRef?: (ctx: ViewGroupNameRefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.viewGroupRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitViewGroupRef?: (ctx: ViewGroupRefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.viewNameCaseSensitive`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitViewNameCaseSensitive?: (ctx: ViewNameCaseSensitiveContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.viewNameDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitViewNameDef?: (ctx: ViewNameDefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.viewNameDisplay`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitViewNameDisplay?: (ctx: ViewNameDisplayContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.viewNameRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitViewNameRef?: (ctx: ViewNameRefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.viewPropertyDisplay`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitViewPropertyDisplay?: (ctx: ViewPropertyDisplayContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.viewPropertyOverride`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitViewPropertyOverride?: (ctx: ViewPropertyOverrideContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.viewRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitViewRef?: (ctx: ViewRefContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.visible`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVisible?: (ctx: VisibleContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.volt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVolt?: (ctx: VoltContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.voltageMap`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVoltageMap?: (ctx: VoltageMapContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.voltageValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVoltageValue?: (ctx: VoltageValueContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.watt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWatt?: (ctx: WattContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.weak`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWeak?: (ctx: WeakContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.weakJoined`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWeakJoined?: (ctx: WeakJoinedContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.weber`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWeber?: (ctx: WeberContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.widePort`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWidePort?: (ctx: WidePortContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.wideWire`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWideWire?: (ctx: WideWireContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.written`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWritten?: (ctx: WrittenContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.xCoordinate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitXCoordinate?: (ctx: XCoordinateContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.xNumberValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitXNumberValue?: (ctx: XNumberValueContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.xor_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitXor_?: (ctx: Xor_Context) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.yCoordinate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitYCoordinate?: (ctx: YCoordinateContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.year`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitYear?: (ctx: YearContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.yearNumber`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitYearNumber?: (ctx: YearNumberContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.yNumberValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitYNumberValue?: (ctx: YNumberValueContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.integerToken`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntegerToken?: (ctx: IntegerTokenContext) => Result;

	/**
	 * Visit a parse tree produced by `EDIF300Parser.stringToken`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringToken?: (ctx: StringTokenContext) => Result;
}

