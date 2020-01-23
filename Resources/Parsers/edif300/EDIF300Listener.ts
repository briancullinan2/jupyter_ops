// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/edif300/EDIF300.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `EDIF300Parser`.
 */
export interface EDIF300Listener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `EDIF300Parser.goal`.
	 * @param ctx the parse tree
	 */
	enterGoal?: (ctx: GoalContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.goal`.
	 * @param ctx the parse tree
	 */
	exitGoal?: (ctx: GoalContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.absolute`.
	 * @param ctx the parse tree
	 */
	enterAbsolute?: (ctx: AbsoluteContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.absolute`.
	 * @param ctx the parse tree
	 */
	exitAbsolute?: (ctx: AbsoluteContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.acLoad`.
	 * @param ctx the parse tree
	 */
	enterAcLoad?: (ctx: AcLoadContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.acLoad`.
	 * @param ctx the parse tree
	 */
	exitAcLoad?: (ctx: AcLoadContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.acLoadDisplay`.
	 * @param ctx the parse tree
	 */
	enterAcLoadDisplay?: (ctx: AcLoadDisplayContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.acLoadDisplay`.
	 * @param ctx the parse tree
	 */
	exitAcLoadDisplay?: (ctx: AcLoadDisplayContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.acLoadFactorCapacitance`.
	 * @param ctx the parse tree
	 */
	enterAcLoadFactorCapacitance?: (ctx: AcLoadFactorCapacitanceContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.acLoadFactorCapacitance`.
	 * @param ctx the parse tree
	 */
	exitAcLoadFactorCapacitance?: (ctx: AcLoadFactorCapacitanceContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.acLoadFactorTime`.
	 * @param ctx the parse tree
	 */
	enterAcLoadFactorTime?: (ctx: AcLoadFactorTimeContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.acLoadFactorTime`.
	 * @param ctx the parse tree
	 */
	exitAcLoadFactorTime?: (ctx: AcLoadFactorTimeContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.addDisplay`.
	 * @param ctx the parse tree
	 */
	enterAddDisplay?: (ctx: AddDisplayContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.addDisplay`.
	 * @param ctx the parse tree
	 */
	exitAddDisplay?: (ctx: AddDisplayContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.ampere`.
	 * @param ctx the parse tree
	 */
	enterAmpere?: (ctx: AmpereContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.ampere`.
	 * @param ctx the parse tree
	 */
	exitAmpere?: (ctx: AmpereContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.and_`.
	 * @param ctx the parse tree
	 */
	enterAnd_?: (ctx: And_Context) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.and_`.
	 * @param ctx the parse tree
	 */
	exitAnd_?: (ctx: And_Context) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.angleValue`.
	 * @param ctx the parse tree
	 */
	enterAngleValue?: (ctx: AngleValueContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.angleValue`.
	 * @param ctx the parse tree
	 */
	exitAngleValue?: (ctx: AngleValueContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.annotate`.
	 * @param ctx the parse tree
	 */
	enterAnnotate?: (ctx: AnnotateContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.annotate`.
	 * @param ctx the parse tree
	 */
	exitAnnotate?: (ctx: AnnotateContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.approvedDate`.
	 * @param ctx the parse tree
	 */
	enterApprovedDate?: (ctx: ApprovedDateContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.approvedDate`.
	 * @param ctx the parse tree
	 */
	exitApprovedDate?: (ctx: ApprovedDateContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.approvedDateDisplay`.
	 * @param ctx the parse tree
	 */
	enterApprovedDateDisplay?: (ctx: ApprovedDateDisplayContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.approvedDateDisplay`.
	 * @param ctx the parse tree
	 */
	exitApprovedDateDisplay?: (ctx: ApprovedDateDisplayContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.arc`.
	 * @param ctx the parse tree
	 */
	enterArc?: (ctx: ArcContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.arc`.
	 * @param ctx the parse tree
	 */
	exitArc?: (ctx: ArcContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.ascii`.
	 * @param ctx the parse tree
	 */
	enterAscii?: (ctx: AsciiContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.ascii`.
	 * @param ctx the parse tree
	 */
	exitAscii?: (ctx: AsciiContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.associatedInterconnectNameDisplay`.
	 * @param ctx the parse tree
	 */
	enterAssociatedInterconnectNameDisplay?: (ctx: AssociatedInterconnectNameDisplayContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.associatedInterconnectNameDisplay`.
	 * @param ctx the parse tree
	 */
	exitAssociatedInterconnectNameDisplay?: (ctx: AssociatedInterconnectNameDisplayContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.attachmentPoint`.
	 * @param ctx the parse tree
	 */
	enterAttachmentPoint?: (ctx: AttachmentPointContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.attachmentPoint`.
	 * @param ctx the parse tree
	 */
	exitAttachmentPoint?: (ctx: AttachmentPointContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.author`.
	 * @param ctx the parse tree
	 */
	enterAuthor?: (ctx: AuthorContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.author`.
	 * @param ctx the parse tree
	 */
	exitAuthor?: (ctx: AuthorContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.backgroundColor`.
	 * @param ctx the parse tree
	 */
	enterBackgroundColor?: (ctx: BackgroundColorContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.backgroundColor`.
	 * @param ctx the parse tree
	 */
	exitBackgroundColor?: (ctx: BackgroundColorContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.baselineJustify`.
	 * @param ctx the parse tree
	 */
	enterBaselineJustify?: (ctx: BaselineJustifyContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.baselineJustify`.
	 * @param ctx the parse tree
	 */
	exitBaselineJustify?: (ctx: BaselineJustifyContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.becomes`.
	 * @param ctx the parse tree
	 */
	enterBecomes?: (ctx: BecomesContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.becomes`.
	 * @param ctx the parse tree
	 */
	exitBecomes?: (ctx: BecomesContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.behaviorView`.
	 * @param ctx the parse tree
	 */
	enterBehaviorView?: (ctx: BehaviorViewContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.behaviorView`.
	 * @param ctx the parse tree
	 */
	exitBehaviorView?: (ctx: BehaviorViewContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.bidirectional`.
	 * @param ctx the parse tree
	 */
	enterBidirectional?: (ctx: BidirectionalContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.bidirectional`.
	 * @param ctx the parse tree
	 */
	exitBidirectional?: (ctx: BidirectionalContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.bidirectionalPort`.
	 * @param ctx the parse tree
	 */
	enterBidirectionalPort?: (ctx: BidirectionalPortContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.bidirectionalPort`.
	 * @param ctx the parse tree
	 */
	exitBidirectionalPort?: (ctx: BidirectionalPortContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.bidirectionalPortAttributes`.
	 * @param ctx the parse tree
	 */
	enterBidirectionalPortAttributes?: (ctx: BidirectionalPortAttributesContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.bidirectionalPortAttributes`.
	 * @param ctx the parse tree
	 */
	exitBidirectionalPortAttributes?: (ctx: BidirectionalPortAttributesContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.bitOrder`.
	 * @param ctx the parse tree
	 */
	enterBitOrder?: (ctx: BitOrderContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.bitOrder`.
	 * @param ctx the parse tree
	 */
	exitBitOrder?: (ctx: BitOrderContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.blue`.
	 * @param ctx the parse tree
	 */
	enterBlue?: (ctx: BlueContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.blue`.
	 * @param ctx the parse tree
	 */
	exitBlue?: (ctx: BlueContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.boldStyle`.
	 * @param ctx the parse tree
	 */
	enterBoldStyle?: (ctx: BoldStyleContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.boldStyle`.
	 * @param ctx the parse tree
	 */
	exitBoldStyle?: (ctx: BoldStyleContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.eboolean`.
	 * @param ctx the parse tree
	 */
	enterEboolean?: (ctx: EbooleanContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.eboolean`.
	 * @param ctx the parse tree
	 */
	exitEboolean?: (ctx: EbooleanContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.booleanConstant`.
	 * @param ctx the parse tree
	 */
	enterBooleanConstant?: (ctx: BooleanConstantContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.booleanConstant`.
	 * @param ctx the parse tree
	 */
	exitBooleanConstant?: (ctx: BooleanConstantContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.booleanConstantRef`.
	 * @param ctx the parse tree
	 */
	enterBooleanConstantRef?: (ctx: BooleanConstantRefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.booleanConstantRef`.
	 * @param ctx the parse tree
	 */
	exitBooleanConstantRef?: (ctx: BooleanConstantRefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterBooleanExpression?: (ctx: BooleanExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitBooleanExpression?: (ctx: BooleanExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.booleanMap`.
	 * @param ctx the parse tree
	 */
	enterBooleanMap?: (ctx: BooleanMapContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.booleanMap`.
	 * @param ctx the parse tree
	 */
	exitBooleanMap?: (ctx: BooleanMapContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.booleanParameter`.
	 * @param ctx the parse tree
	 */
	enterBooleanParameter?: (ctx: BooleanParameterContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.booleanParameter`.
	 * @param ctx the parse tree
	 */
	exitBooleanParameter?: (ctx: BooleanParameterContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.booleanParameterAssign`.
	 * @param ctx the parse tree
	 */
	enterBooleanParameterAssign?: (ctx: BooleanParameterAssignContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.booleanParameterAssign`.
	 * @param ctx the parse tree
	 */
	exitBooleanParameterAssign?: (ctx: BooleanParameterAssignContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.booleanParameterRef`.
	 * @param ctx the parse tree
	 */
	enterBooleanParameterRef?: (ctx: BooleanParameterRefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.booleanParameterRef`.
	 * @param ctx the parse tree
	 */
	exitBooleanParameterRef?: (ctx: BooleanParameterRefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.booleanToken`.
	 * @param ctx the parse tree
	 */
	enterBooleanToken?: (ctx: BooleanTokenContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.booleanToken`.
	 * @param ctx the parse tree
	 */
	exitBooleanToken?: (ctx: BooleanTokenContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.booleanValue`.
	 * @param ctx the parse tree
	 */
	enterBooleanValue?: (ctx: BooleanValueContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.booleanValue`.
	 * @param ctx the parse tree
	 */
	exitBooleanValue?: (ctx: BooleanValueContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.borderPattern`.
	 * @param ctx the parse tree
	 */
	enterBorderPattern?: (ctx: BorderPatternContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.borderPattern`.
	 * @param ctx the parse tree
	 */
	exitBorderPattern?: (ctx: BorderPatternContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.borderPatternVisible`.
	 * @param ctx the parse tree
	 */
	enterBorderPatternVisible?: (ctx: BorderPatternVisibleContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.borderPatternVisible`.
	 * @param ctx the parse tree
	 */
	exitBorderPatternVisible?: (ctx: BorderPatternVisibleContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.borderWidth`.
	 * @param ctx the parse tree
	 */
	enterBorderWidth?: (ctx: BorderWidthContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.borderWidth`.
	 * @param ctx the parse tree
	 */
	exitBorderWidth?: (ctx: BorderWidthContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.bottomJustify`.
	 * @param ctx the parse tree
	 */
	enterBottomJustify?: (ctx: BottomJustifyContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.bottomJustify`.
	 * @param ctx the parse tree
	 */
	exitBottomJustify?: (ctx: BottomJustifyContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.calculated`.
	 * @param ctx the parse tree
	 */
	enterCalculated?: (ctx: CalculatedContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.calculated`.
	 * @param ctx the parse tree
	 */
	exitCalculated?: (ctx: CalculatedContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.candela`.
	 * @param ctx the parse tree
	 */
	enterCandela?: (ctx: CandelaContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.candela`.
	 * @param ctx the parse tree
	 */
	exitCandela?: (ctx: CandelaContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.capacitanceValue`.
	 * @param ctx the parse tree
	 */
	enterCapacitanceValue?: (ctx: CapacitanceValueContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.capacitanceValue`.
	 * @param ctx the parse tree
	 */
	exitCapacitanceValue?: (ctx: CapacitanceValueContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.caplineJustify`.
	 * @param ctx the parse tree
	 */
	enterCaplineJustify?: (ctx: CaplineJustifyContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.caplineJustify`.
	 * @param ctx the parse tree
	 */
	exitCaplineJustify?: (ctx: CaplineJustifyContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.cell`.
	 * @param ctx the parse tree
	 */
	enterCell?: (ctx: CellContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.cell`.
	 * @param ctx the parse tree
	 */
	exitCell?: (ctx: CellContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.cellHeader`.
	 * @param ctx the parse tree
	 */
	enterCellHeader?: (ctx: CellHeaderContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.cellHeader`.
	 * @param ctx the parse tree
	 */
	exitCellHeader?: (ctx: CellHeaderContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.cellNameDisplay`.
	 * @param ctx the parse tree
	 */
	enterCellNameDisplay?: (ctx: CellNameDisplayContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.cellNameDisplay`.
	 * @param ctx the parse tree
	 */
	exitCellNameDisplay?: (ctx: CellNameDisplayContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.cellPropertyDisplay`.
	 * @param ctx the parse tree
	 */
	enterCellPropertyDisplay?: (ctx: CellPropertyDisplayContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.cellPropertyDisplay`.
	 * @param ctx the parse tree
	 */
	exitCellPropertyDisplay?: (ctx: CellPropertyDisplayContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.cellPropertyDisplayOverride`.
	 * @param ctx the parse tree
	 */
	enterCellPropertyDisplayOverride?: (ctx: CellPropertyDisplayOverrideContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.cellPropertyDisplayOverride`.
	 * @param ctx the parse tree
	 */
	exitCellPropertyDisplayOverride?: (ctx: CellPropertyDisplayOverrideContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.cellPropertyOverride`.
	 * @param ctx the parse tree
	 */
	enterCellPropertyOverride?: (ctx: CellPropertyOverrideContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.cellPropertyOverride`.
	 * @param ctx the parse tree
	 */
	exitCellPropertyOverride?: (ctx: CellPropertyOverrideContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.cellRef`.
	 * @param ctx the parse tree
	 */
	enterCellRef?: (ctx: CellRefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.cellRef`.
	 * @param ctx the parse tree
	 */
	exitCellRef?: (ctx: CellRefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.celsius`.
	 * @param ctx the parse tree
	 */
	enterCelsius?: (ctx: CelsiusContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.celsius`.
	 * @param ctx the parse tree
	 */
	exitCelsius?: (ctx: CelsiusContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.centerJustify`.
	 * @param ctx the parse tree
	 */
	enterCenterJustify?: (ctx: CenterJustifyContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.centerJustify`.
	 * @param ctx the parse tree
	 */
	exitCenterJustify?: (ctx: CenterJustifyContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.characterEncoding`.
	 * @param ctx the parse tree
	 */
	enterCharacterEncoding?: (ctx: CharacterEncodingContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.characterEncoding`.
	 * @param ctx the parse tree
	 */
	exitCharacterEncoding?: (ctx: CharacterEncodingContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.checkDate`.
	 * @param ctx the parse tree
	 */
	enterCheckDate?: (ctx: CheckDateContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.checkDate`.
	 * @param ctx the parse tree
	 */
	exitCheckDate?: (ctx: CheckDateContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.checkDateDisplay`.
	 * @param ctx the parse tree
	 */
	enterCheckDateDisplay?: (ctx: CheckDateDisplayContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.checkDateDisplay`.
	 * @param ctx the parse tree
	 */
	exitCheckDateDisplay?: (ctx: CheckDateDisplayContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.circle`.
	 * @param ctx the parse tree
	 */
	enterCircle?: (ctx: CircleContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.circle`.
	 * @param ctx the parse tree
	 */
	exitCircle?: (ctx: CircleContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.cluster`.
	 * @param ctx the parse tree
	 */
	enterCluster?: (ctx: ClusterContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.cluster`.
	 * @param ctx the parse tree
	 */
	exitCluster?: (ctx: ClusterContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.clusterConfiguration`.
	 * @param ctx the parse tree
	 */
	enterClusterConfiguration?: (ctx: ClusterConfigurationContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.clusterConfiguration`.
	 * @param ctx the parse tree
	 */
	exitClusterConfiguration?: (ctx: ClusterConfigurationContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.clusterConfigurationNameCaseSensitive`.
	 * @param ctx the parse tree
	 */
	enterClusterConfigurationNameCaseSensitive?: (ctx: ClusterConfigurationNameCaseSensitiveContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.clusterConfigurationNameCaseSensitive`.
	 * @param ctx the parse tree
	 */
	exitClusterConfigurationNameCaseSensitive?: (ctx: ClusterConfigurationNameCaseSensitiveContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.clusterConfigurationNameDef`.
	 * @param ctx the parse tree
	 */
	enterClusterConfigurationNameDef?: (ctx: ClusterConfigurationNameDefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.clusterConfigurationNameDef`.
	 * @param ctx the parse tree
	 */
	exitClusterConfigurationNameDef?: (ctx: ClusterConfigurationNameDefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.clusterConfigurationNameRef`.
	 * @param ctx the parse tree
	 */
	enterClusterConfigurationNameRef?: (ctx: ClusterConfigurationNameRefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.clusterConfigurationNameRef`.
	 * @param ctx the parse tree
	 */
	exitClusterConfigurationNameRef?: (ctx: ClusterConfigurationNameRefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.clusterConfigurationRef`.
	 * @param ctx the parse tree
	 */
	enterClusterConfigurationRef?: (ctx: ClusterConfigurationRefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.clusterConfigurationRef`.
	 * @param ctx the parse tree
	 */
	exitClusterConfigurationRef?: (ctx: ClusterConfigurationRefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.clusterHeader`.
	 * @param ctx the parse tree
	 */
	enterClusterHeader?: (ctx: ClusterHeaderContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.clusterHeader`.
	 * @param ctx the parse tree
	 */
	exitClusterHeader?: (ctx: ClusterHeaderContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.clusterNameCaseSensitive`.
	 * @param ctx the parse tree
	 */
	enterClusterNameCaseSensitive?: (ctx: ClusterNameCaseSensitiveContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.clusterNameCaseSensitive`.
	 * @param ctx the parse tree
	 */
	exitClusterNameCaseSensitive?: (ctx: ClusterNameCaseSensitiveContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.clusterNameDef`.
	 * @param ctx the parse tree
	 */
	enterClusterNameDef?: (ctx: ClusterNameDefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.clusterNameDef`.
	 * @param ctx the parse tree
	 */
	exitClusterNameDef?: (ctx: ClusterNameDefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.clusterNameRef`.
	 * @param ctx the parse tree
	 */
	enterClusterNameRef?: (ctx: ClusterNameRefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.clusterNameRef`.
	 * @param ctx the parse tree
	 */
	exitClusterNameRef?: (ctx: ClusterNameRefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.clusterPropertyDisplay`.
	 * @param ctx the parse tree
	 */
	enterClusterPropertyDisplay?: (ctx: ClusterPropertyDisplayContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.clusterPropertyDisplay`.
	 * @param ctx the parse tree
	 */
	exitClusterPropertyDisplay?: (ctx: ClusterPropertyDisplayContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.clusterPropertyDisplayOverride`.
	 * @param ctx the parse tree
	 */
	enterClusterPropertyDisplayOverride?: (ctx: ClusterPropertyDisplayOverrideContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.clusterPropertyDisplayOverride`.
	 * @param ctx the parse tree
	 */
	exitClusterPropertyDisplayOverride?: (ctx: ClusterPropertyDisplayOverrideContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.clusterPropertyOverride`.
	 * @param ctx the parse tree
	 */
	enterClusterPropertyOverride?: (ctx: ClusterPropertyOverrideContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.clusterPropertyOverride`.
	 * @param ctx the parse tree
	 */
	exitClusterPropertyOverride?: (ctx: ClusterPropertyOverrideContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.clusterRef`.
	 * @param ctx the parse tree
	 */
	enterClusterRef?: (ctx: ClusterRefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.clusterRef`.
	 * @param ctx the parse tree
	 */
	exitClusterRef?: (ctx: ClusterRefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.color`.
	 * @param ctx the parse tree
	 */
	enterColor?: (ctx: ColorContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.color`.
	 * @param ctx the parse tree
	 */
	exitColor?: (ctx: ColorContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.comment`.
	 * @param ctx the parse tree
	 */
	enterComment?: (ctx: CommentContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.comment`.
	 * @param ctx the parse tree
	 */
	exitComment?: (ctx: CommentContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.commentGraphics`.
	 * @param ctx the parse tree
	 */
	enterCommentGraphics?: (ctx: CommentGraphicsContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.commentGraphics`.
	 * @param ctx the parse tree
	 */
	exitCommentGraphics?: (ctx: CommentGraphicsContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.companyName`.
	 * @param ctx the parse tree
	 */
	enterCompanyName?: (ctx: CompanyNameContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.companyName`.
	 * @param ctx the parse tree
	 */
	exitCompanyName?: (ctx: CompanyNameContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.companyNameDisplay`.
	 * @param ctx the parse tree
	 */
	enterCompanyNameDisplay?: (ctx: CompanyNameDisplayContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.companyNameDisplay`.
	 * @param ctx the parse tree
	 */
	exitCompanyNameDisplay?: (ctx: CompanyNameDisplayContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.complementedName`.
	 * @param ctx the parse tree
	 */
	enterComplementedName?: (ctx: ComplementedNameContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.complementedName`.
	 * @param ctx the parse tree
	 */
	exitComplementedName?: (ctx: ComplementedNameContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.complementedNamePart`.
	 * @param ctx the parse tree
	 */
	enterComplementedNamePart?: (ctx: ComplementedNamePartContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.complementedNamePart`.
	 * @param ctx the parse tree
	 */
	exitComplementedNamePart?: (ctx: ComplementedNamePartContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.complexGeometry`.
	 * @param ctx the parse tree
	 */
	enterComplexGeometry?: (ctx: ComplexGeometryContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.complexGeometry`.
	 * @param ctx the parse tree
	 */
	exitComplexGeometry?: (ctx: ComplexGeometryContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.complexName`.
	 * @param ctx the parse tree
	 */
	enterComplexName?: (ctx: ComplexNameContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.complexName`.
	 * @param ctx the parse tree
	 */
	exitComplexName?: (ctx: ComplexNameContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.compound`.
	 * @param ctx the parse tree
	 */
	enterCompound?: (ctx: CompoundContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.compound`.
	 * @param ctx the parse tree
	 */
	exitCompound?: (ctx: CompoundContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.condition`.
	 * @param ctx the parse tree
	 */
	enterCondition?: (ctx: ConditionContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.condition`.
	 * @param ctx the parse tree
	 */
	exitCondition?: (ctx: ConditionContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.conditionDisplay`.
	 * @param ctx the parse tree
	 */
	enterConditionDisplay?: (ctx: ConditionDisplayContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.conditionDisplay`.
	 * @param ctx the parse tree
	 */
	exitConditionDisplay?: (ctx: ConditionDisplayContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.connectedSignalIndexGenerator`.
	 * @param ctx the parse tree
	 */
	enterConnectedSignalIndexGenerator?: (ctx: ConnectedSignalIndexGeneratorContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.connectedSignalIndexGenerator`.
	 * @param ctx the parse tree
	 */
	exitConnectedSignalIndexGenerator?: (ctx: ConnectedSignalIndexGeneratorContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.connectedSignalIndexGeneratorDisplay`.
	 * @param ctx the parse tree
	 */
	enterConnectedSignalIndexGeneratorDisplay?: (ctx: ConnectedSignalIndexGeneratorDisplayContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.connectedSignalIndexGeneratorDisplay`.
	 * @param ctx the parse tree
	 */
	exitConnectedSignalIndexGeneratorDisplay?: (ctx: ConnectedSignalIndexGeneratorDisplayContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.connectivityBus`.
	 * @param ctx the parse tree
	 */
	enterConnectivityBus?: (ctx: ConnectivityBusContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.connectivityBus`.
	 * @param ctx the parse tree
	 */
	exitConnectivityBus?: (ctx: ConnectivityBusContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.connectivityBusJoined`.
	 * @param ctx the parse tree
	 */
	enterConnectivityBusJoined?: (ctx: ConnectivityBusJoinedContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.connectivityBusJoined`.
	 * @param ctx the parse tree
	 */
	exitConnectivityBusJoined?: (ctx: ConnectivityBusJoinedContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.connectivityBusSlice`.
	 * @param ctx the parse tree
	 */
	enterConnectivityBusSlice?: (ctx: ConnectivityBusSliceContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.connectivityBusSlice`.
	 * @param ctx the parse tree
	 */
	exitConnectivityBusSlice?: (ctx: ConnectivityBusSliceContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.connectivityFrameStructure`.
	 * @param ctx the parse tree
	 */
	enterConnectivityFrameStructure?: (ctx: ConnectivityFrameStructureContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.connectivityFrameStructure`.
	 * @param ctx the parse tree
	 */
	exitConnectivityFrameStructure?: (ctx: ConnectivityFrameStructureContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.connectivityFrameStructureNameDef`.
	 * @param ctx the parse tree
	 */
	enterConnectivityFrameStructureNameDef?: (ctx: ConnectivityFrameStructureNameDefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.connectivityFrameStructureNameDef`.
	 * @param ctx the parse tree
	 */
	exitConnectivityFrameStructureNameDef?: (ctx: ConnectivityFrameStructureNameDefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.connectivityNet`.
	 * @param ctx the parse tree
	 */
	enterConnectivityNet?: (ctx: ConnectivityNetContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.connectivityNet`.
	 * @param ctx the parse tree
	 */
	exitConnectivityNet?: (ctx: ConnectivityNetContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.connectivityNetJoined`.
	 * @param ctx the parse tree
	 */
	enterConnectivityNetJoined?: (ctx: ConnectivityNetJoinedContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.connectivityNetJoined`.
	 * @param ctx the parse tree
	 */
	exitConnectivityNetJoined?: (ctx: ConnectivityNetJoinedContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.connectivityRipper`.
	 * @param ctx the parse tree
	 */
	enterConnectivityRipper?: (ctx: ConnectivityRipperContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.connectivityRipper`.
	 * @param ctx the parse tree
	 */
	exitConnectivityRipper?: (ctx: ConnectivityRipperContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.connectivityRipperNameDef`.
	 * @param ctx the parse tree
	 */
	enterConnectivityRipperNameDef?: (ctx: ConnectivityRipperNameDefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.connectivityRipperNameDef`.
	 * @param ctx the parse tree
	 */
	exitConnectivityRipperNameDef?: (ctx: ConnectivityRipperNameDefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.connectivityRipperNameRef`.
	 * @param ctx the parse tree
	 */
	enterConnectivityRipperNameRef?: (ctx: ConnectivityRipperNameRefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.connectivityRipperNameRef`.
	 * @param ctx the parse tree
	 */
	exitConnectivityRipperNameRef?: (ctx: ConnectivityRipperNameRefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.connectivityRipperRef`.
	 * @param ctx the parse tree
	 */
	enterConnectivityRipperRef?: (ctx: ConnectivityRipperRefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.connectivityRipperRef`.
	 * @param ctx the parse tree
	 */
	exitConnectivityRipperRef?: (ctx: ConnectivityRipperRefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.connectivityStructure`.
	 * @param ctx the parse tree
	 */
	enterConnectivityStructure?: (ctx: ConnectivityStructureContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.connectivityStructure`.
	 * @param ctx the parse tree
	 */
	exitConnectivityStructure?: (ctx: ConnectivityStructureContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.connectivitySubBus`.
	 * @param ctx the parse tree
	 */
	enterConnectivitySubBus?: (ctx: ConnectivitySubBusContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.connectivitySubBus`.
	 * @param ctx the parse tree
	 */
	exitConnectivitySubBus?: (ctx: ConnectivitySubBusContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.connectivitySubNet`.
	 * @param ctx the parse tree
	 */
	enterConnectivitySubNet?: (ctx: ConnectivitySubNetContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.connectivitySubNet`.
	 * @param ctx the parse tree
	 */
	exitConnectivitySubNet?: (ctx: ConnectivitySubNetContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.connectivityTagGenerator`.
	 * @param ctx the parse tree
	 */
	enterConnectivityTagGenerator?: (ctx: ConnectivityTagGeneratorContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.connectivityTagGenerator`.
	 * @param ctx the parse tree
	 */
	exitConnectivityTagGenerator?: (ctx: ConnectivityTagGeneratorContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.connectivityTagGeneratorDisplay`.
	 * @param ctx the parse tree
	 */
	enterConnectivityTagGeneratorDisplay?: (ctx: ConnectivityTagGeneratorDisplayContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.connectivityTagGeneratorDisplay`.
	 * @param ctx the parse tree
	 */
	exitConnectivityTagGeneratorDisplay?: (ctx: ConnectivityTagGeneratorDisplayContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.connectivityUnits`.
	 * @param ctx the parse tree
	 */
	enterConnectivityUnits?: (ctx: ConnectivityUnitsContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.connectivityUnits`.
	 * @param ctx the parse tree
	 */
	exitConnectivityUnits?: (ctx: ConnectivityUnitsContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.connectivityView`.
	 * @param ctx the parse tree
	 */
	enterConnectivityView?: (ctx: ConnectivityViewContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.connectivityView`.
	 * @param ctx the parse tree
	 */
	exitConnectivityView?: (ctx: ConnectivityViewContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.connectivityViewHeader`.
	 * @param ctx the parse tree
	 */
	enterConnectivityViewHeader?: (ctx: ConnectivityViewHeaderContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.connectivityViewHeader`.
	 * @param ctx the parse tree
	 */
	exitConnectivityViewHeader?: (ctx: ConnectivityViewHeaderContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.constantNameDef`.
	 * @param ctx the parse tree
	 */
	enterConstantNameDef?: (ctx: ConstantNameDefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.constantNameDef`.
	 * @param ctx the parse tree
	 */
	exitConstantNameDef?: (ctx: ConstantNameDefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.constantNameRef`.
	 * @param ctx the parse tree
	 */
	enterConstantNameRef?: (ctx: ConstantNameRefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.constantNameRef`.
	 * @param ctx the parse tree
	 */
	exitConstantNameRef?: (ctx: ConstantNameRefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.constantValues`.
	 * @param ctx the parse tree
	 */
	enterConstantValues?: (ctx: ConstantValuesContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.constantValues`.
	 * @param ctx the parse tree
	 */
	exitConstantValues?: (ctx: ConstantValuesContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.contract`.
	 * @param ctx the parse tree
	 */
	enterContract?: (ctx: ContractContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.contract`.
	 * @param ctx the parse tree
	 */
	exitContract?: (ctx: ContractContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.contractDisplay`.
	 * @param ctx the parse tree
	 */
	enterContractDisplay?: (ctx: ContractDisplayContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.contractDisplay`.
	 * @param ctx the parse tree
	 */
	exitContractDisplay?: (ctx: ContractDisplayContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.copyright`.
	 * @param ctx the parse tree
	 */
	enterCopyright?: (ctx: CopyrightContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.copyright`.
	 * @param ctx the parse tree
	 */
	exitCopyright?: (ctx: CopyrightContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.copyrightDisplay`.
	 * @param ctx the parse tree
	 */
	enterCopyrightDisplay?: (ctx: CopyrightDisplayContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.copyrightDisplay`.
	 * @param ctx the parse tree
	 */
	exitCopyrightDisplay?: (ctx: CopyrightDisplayContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.cornerType`.
	 * @param ctx the parse tree
	 */
	enterCornerType?: (ctx: CornerTypeContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.cornerType`.
	 * @param ctx the parse tree
	 */
	exitCornerType?: (ctx: CornerTypeContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.coulomb`.
	 * @param ctx the parse tree
	 */
	enterCoulomb?: (ctx: CoulombContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.coulomb`.
	 * @param ctx the parse tree
	 */
	exitCoulomb?: (ctx: CoulombContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.criticality`.
	 * @param ctx the parse tree
	 */
	enterCriticality?: (ctx: CriticalityContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.criticality`.
	 * @param ctx the parse tree
	 */
	exitCriticality?: (ctx: CriticalityContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.criticalityDisplay`.
	 * @param ctx the parse tree
	 */
	enterCriticalityDisplay?: (ctx: CriticalityDisplayContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.criticalityDisplay`.
	 * @param ctx the parse tree
	 */
	exitCriticalityDisplay?: (ctx: CriticalityDisplayContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.currentMap`.
	 * @param ctx the parse tree
	 */
	enterCurrentMap?: (ctx: CurrentMapContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.currentMap`.
	 * @param ctx the parse tree
	 */
	exitCurrentMap?: (ctx: CurrentMapContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.currentValue`.
	 * @param ctx the parse tree
	 */
	enterCurrentValue?: (ctx: CurrentValueContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.currentValue`.
	 * @param ctx the parse tree
	 */
	exitCurrentValue?: (ctx: CurrentValueContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.curve`.
	 * @param ctx the parse tree
	 */
	enterCurve?: (ctx: CurveContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.curve`.
	 * @param ctx the parse tree
	 */
	exitCurve?: (ctx: CurveContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.dataOrigin`.
	 * @param ctx the parse tree
	 */
	enterDataOrigin?: (ctx: DataOriginContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.dataOrigin`.
	 * @param ctx the parse tree
	 */
	exitDataOrigin?: (ctx: DataOriginContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.date`.
	 * @param ctx the parse tree
	 */
	enterDate?: (ctx: DateContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.date`.
	 * @param ctx the parse tree
	 */
	exitDate?: (ctx: DateContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.dayNumber`.
	 * @param ctx the parse tree
	 */
	enterDayNumber?: (ctx: DayNumberContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.dayNumber`.
	 * @param ctx the parse tree
	 */
	exitDayNumber?: (ctx: DayNumberContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.dcFanInLoad`.
	 * @param ctx the parse tree
	 */
	enterDcFanInLoad?: (ctx: DcFanInLoadContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.dcFanInLoad`.
	 * @param ctx the parse tree
	 */
	exitDcFanInLoad?: (ctx: DcFanInLoadContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.dcFanInLoadDisplay`.
	 * @param ctx the parse tree
	 */
	enterDcFanInLoadDisplay?: (ctx: DcFanInLoadDisplayContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.dcFanInLoadDisplay`.
	 * @param ctx the parse tree
	 */
	exitDcFanInLoadDisplay?: (ctx: DcFanInLoadDisplayContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.dcFanOutLoad`.
	 * @param ctx the parse tree
	 */
	enterDcFanOutLoad?: (ctx: DcFanOutLoadContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.dcFanOutLoad`.
	 * @param ctx the parse tree
	 */
	exitDcFanOutLoad?: (ctx: DcFanOutLoadContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.dcFanOutLoadDisplay`.
	 * @param ctx the parse tree
	 */
	enterDcFanOutLoadDisplay?: (ctx: DcFanOutLoadDisplayContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.dcFanOutLoadDisplay`.
	 * @param ctx the parse tree
	 */
	exitDcFanOutLoadDisplay?: (ctx: DcFanOutLoadDisplayContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.dcMaxFanIn`.
	 * @param ctx the parse tree
	 */
	enterDcMaxFanIn?: (ctx: DcMaxFanInContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.dcMaxFanIn`.
	 * @param ctx the parse tree
	 */
	exitDcMaxFanIn?: (ctx: DcMaxFanInContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.dcMaxFanInDisplay`.
	 * @param ctx the parse tree
	 */
	enterDcMaxFanInDisplay?: (ctx: DcMaxFanInDisplayContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.dcMaxFanInDisplay`.
	 * @param ctx the parse tree
	 */
	exitDcMaxFanInDisplay?: (ctx: DcMaxFanInDisplayContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.dcMaxFanOut`.
	 * @param ctx the parse tree
	 */
	enterDcMaxFanOut?: (ctx: DcMaxFanOutContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.dcMaxFanOut`.
	 * @param ctx the parse tree
	 */
	exitDcMaxFanOut?: (ctx: DcMaxFanOutContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.dcMaxFanOutDisplay`.
	 * @param ctx the parse tree
	 */
	enterDcMaxFanOutDisplay?: (ctx: DcMaxFanOutDisplayContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.dcMaxFanOutDisplay`.
	 * @param ctx the parse tree
	 */
	exitDcMaxFanOutDisplay?: (ctx: DcMaxFanOutDisplayContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.decimalToString`.
	 * @param ctx the parse tree
	 */
	enterDecimalToString?: (ctx: DecimalToStringContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.decimalToString`.
	 * @param ctx the parse tree
	 */
	exitDecimalToString?: (ctx: DecimalToStringContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.defaultClusterConfiguration`.
	 * @param ctx the parse tree
	 */
	enterDefaultClusterConfiguration?: (ctx: DefaultClusterConfigurationContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.defaultClusterConfiguration`.
	 * @param ctx the parse tree
	 */
	exitDefaultClusterConfiguration?: (ctx: DefaultClusterConfigurationContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.defaultConnection`.
	 * @param ctx the parse tree
	 */
	enterDefaultConnection?: (ctx: DefaultConnectionContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.defaultConnection`.
	 * @param ctx the parse tree
	 */
	exitDefaultConnection?: (ctx: DefaultConnectionContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.degree`.
	 * @param ctx the parse tree
	 */
	enterDegree?: (ctx: DegreeContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.degree`.
	 * @param ctx the parse tree
	 */
	exitDegree?: (ctx: DegreeContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.delay`.
	 * @param ctx the parse tree
	 */
	enterDelay?: (ctx: DelayContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.delay`.
	 * @param ctx the parse tree
	 */
	exitDelay?: (ctx: DelayContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.denominator`.
	 * @param ctx the parse tree
	 */
	enterDenominator?: (ctx: DenominatorContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.denominator`.
	 * @param ctx the parse tree
	 */
	exitDenominator?: (ctx: DenominatorContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.derivation`.
	 * @param ctx the parse tree
	 */
	enterDerivation?: (ctx: DerivationContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.derivation`.
	 * @param ctx the parse tree
	 */
	exitDerivation?: (ctx: DerivationContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.derivedFrom`.
	 * @param ctx the parse tree
	 */
	enterDerivedFrom?: (ctx: DerivedFromContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.derivedFrom`.
	 * @param ctx the parse tree
	 */
	exitDerivedFrom?: (ctx: DerivedFromContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.design`.
	 * @param ctx the parse tree
	 */
	enterDesign?: (ctx: DesignContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.design`.
	 * @param ctx the parse tree
	 */
	exitDesign?: (ctx: DesignContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.designator`.
	 * @param ctx the parse tree
	 */
	enterDesignator?: (ctx: DesignatorContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.designator`.
	 * @param ctx the parse tree
	 */
	exitDesignator?: (ctx: DesignatorContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.designatorDisplay`.
	 * @param ctx the parse tree
	 */
	enterDesignatorDisplay?: (ctx: DesignatorDisplayContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.designatorDisplay`.
	 * @param ctx the parse tree
	 */
	exitDesignatorDisplay?: (ctx: DesignatorDisplayContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.designHeader`.
	 * @param ctx the parse tree
	 */
	enterDesignHeader?: (ctx: DesignHeaderContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.designHeader`.
	 * @param ctx the parse tree
	 */
	exitDesignHeader?: (ctx: DesignHeaderContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.designHierarchy`.
	 * @param ctx the parse tree
	 */
	enterDesignHierarchy?: (ctx: DesignHierarchyContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.designHierarchy`.
	 * @param ctx the parse tree
	 */
	exitDesignHierarchy?: (ctx: DesignHierarchyContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.designHierarchyHeader`.
	 * @param ctx the parse tree
	 */
	enterDesignHierarchyHeader?: (ctx: DesignHierarchyHeaderContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.designHierarchyHeader`.
	 * @param ctx the parse tree
	 */
	exitDesignHierarchyHeader?: (ctx: DesignHierarchyHeaderContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.designHierarchyNameCaseSensitive`.
	 * @param ctx the parse tree
	 */
	enterDesignHierarchyNameCaseSensitive?: (ctx: DesignHierarchyNameCaseSensitiveContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.designHierarchyNameCaseSensitive`.
	 * @param ctx the parse tree
	 */
	exitDesignHierarchyNameCaseSensitive?: (ctx: DesignHierarchyNameCaseSensitiveContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.designHierarchyNameDef`.
	 * @param ctx the parse tree
	 */
	enterDesignHierarchyNameDef?: (ctx: DesignHierarchyNameDefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.designHierarchyNameDef`.
	 * @param ctx the parse tree
	 */
	exitDesignHierarchyNameDef?: (ctx: DesignHierarchyNameDefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.designNameCaseSensitive`.
	 * @param ctx the parse tree
	 */
	enterDesignNameCaseSensitive?: (ctx: DesignNameCaseSensitiveContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.designNameCaseSensitive`.
	 * @param ctx the parse tree
	 */
	exitDesignNameCaseSensitive?: (ctx: DesignNameCaseSensitiveContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.designNameDef`.
	 * @param ctx the parse tree
	 */
	enterDesignNameDef?: (ctx: DesignNameDefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.designNameDef`.
	 * @param ctx the parse tree
	 */
	exitDesignNameDef?: (ctx: DesignNameDefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.designUnits`.
	 * @param ctx the parse tree
	 */
	enterDesignUnits?: (ctx: DesignUnitsContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.designUnits`.
	 * @param ctx the parse tree
	 */
	exitDesignUnits?: (ctx: DesignUnitsContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.diagram`.
	 * @param ctx the parse tree
	 */
	enterDiagram?: (ctx: DiagramContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.diagram`.
	 * @param ctx the parse tree
	 */
	exitDiagram?: (ctx: DiagramContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.diagramNameDef`.
	 * @param ctx the parse tree
	 */
	enterDiagramNameDef?: (ctx: DiagramNameDefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.diagramNameDef`.
	 * @param ctx the parse tree
	 */
	exitDiagramNameDef?: (ctx: DiagramNameDefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.directionalPortAttributeOverride`.
	 * @param ctx the parse tree
	 */
	enterDirectionalPortAttributeOverride?: (ctx: DirectionalPortAttributeOverrideContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.directionalPortAttributeOverride`.
	 * @param ctx the parse tree
	 */
	exitDirectionalPortAttributeOverride?: (ctx: DirectionalPortAttributeOverrideContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.display`.
	 * @param ctx the parse tree
	 */
	enterDisplay?: (ctx: DisplayContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.display`.
	 * @param ctx the parse tree
	 */
	exitDisplay?: (ctx: DisplayContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.displayAttributes`.
	 * @param ctx the parse tree
	 */
	enterDisplayAttributes?: (ctx: DisplayAttributesContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.displayAttributes`.
	 * @param ctx the parse tree
	 */
	exitDisplayAttributes?: (ctx: DisplayAttributesContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.displayName`.
	 * @param ctx the parse tree
	 */
	enterDisplayName?: (ctx: DisplayNameContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.displayName`.
	 * @param ctx the parse tree
	 */
	exitDisplayName?: (ctx: DisplayNameContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.displayNameOverride`.
	 * @param ctx the parse tree
	 */
	enterDisplayNameOverride?: (ctx: DisplayNameOverrideContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.displayNameOverride`.
	 * @param ctx the parse tree
	 */
	exitDisplayNameOverride?: (ctx: DisplayNameOverrideContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.distanceValue`.
	 * @param ctx the parse tree
	 */
	enterDistanceValue?: (ctx: DistanceValueContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.distanceValue`.
	 * @param ctx the parse tree
	 */
	exitDistanceValue?: (ctx: DistanceValueContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.dividend`.
	 * @param ctx the parse tree
	 */
	enterDividend?: (ctx: DividendContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.dividend`.
	 * @param ctx the parse tree
	 */
	exitDividend?: (ctx: DividendContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.divisor`.
	 * @param ctx the parse tree
	 */
	enterDivisor?: (ctx: DivisorContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.divisor`.
	 * @param ctx the parse tree
	 */
	exitDivisor?: (ctx: DivisorContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.documentation`.
	 * @param ctx the parse tree
	 */
	enterDocumentation?: (ctx: DocumentationContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.documentation`.
	 * @param ctx the parse tree
	 */
	exitDocumentation?: (ctx: DocumentationContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.documentationHeader`.
	 * @param ctx the parse tree
	 */
	enterDocumentationHeader?: (ctx: DocumentationHeaderContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.documentationHeader`.
	 * @param ctx the parse tree
	 */
	exitDocumentationHeader?: (ctx: DocumentationHeaderContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.documentationNameCaseSensitive`.
	 * @param ctx the parse tree
	 */
	enterDocumentationNameCaseSensitive?: (ctx: DocumentationNameCaseSensitiveContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.documentationNameCaseSensitive`.
	 * @param ctx the parse tree
	 */
	exitDocumentationNameCaseSensitive?: (ctx: DocumentationNameCaseSensitiveContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.documentationNameDef`.
	 * @param ctx the parse tree
	 */
	enterDocumentationNameDef?: (ctx: DocumentationNameDefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.documentationNameDef`.
	 * @param ctx the parse tree
	 */
	exitDocumentationNameDef?: (ctx: DocumentationNameDefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.documentationUnits`.
	 * @param ctx the parse tree
	 */
	enterDocumentationUnits?: (ctx: DocumentationUnitsContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.documentationUnits`.
	 * @param ctx the parse tree
	 */
	exitDocumentationUnits?: (ctx: DocumentationUnitsContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.dominates`.
	 * @param ctx the parse tree
	 */
	enterDominates?: (ctx: DominatesContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.dominates`.
	 * @param ctx the parse tree
	 */
	exitDominates?: (ctx: DominatesContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.dot`.
	 * @param ctx the parse tree
	 */
	enterDot?: (ctx: DotContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.dot`.
	 * @param ctx the parse tree
	 */
	exitDot?: (ctx: DotContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.drawingDescription`.
	 * @param ctx the parse tree
	 */
	enterDrawingDescription?: (ctx: DrawingDescriptionContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.drawingDescription`.
	 * @param ctx the parse tree
	 */
	exitDrawingDescription?: (ctx: DrawingDescriptionContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.drawingDescriptionDisplay`.
	 * @param ctx the parse tree
	 */
	enterDrawingDescriptionDisplay?: (ctx: DrawingDescriptionDisplayContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.drawingDescriptionDisplay`.
	 * @param ctx the parse tree
	 */
	exitDrawingDescriptionDisplay?: (ctx: DrawingDescriptionDisplayContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.drawingIdentification`.
	 * @param ctx the parse tree
	 */
	enterDrawingIdentification?: (ctx: DrawingIdentificationContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.drawingIdentification`.
	 * @param ctx the parse tree
	 */
	exitDrawingIdentification?: (ctx: DrawingIdentificationContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.drawingIdentificationDisplay`.
	 * @param ctx the parse tree
	 */
	enterDrawingIdentificationDisplay?: (ctx: DrawingIdentificationDisplayContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.drawingIdentificationDisplay`.
	 * @param ctx the parse tree
	 */
	exitDrawingIdentificationDisplay?: (ctx: DrawingIdentificationDisplayContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.drawingSize`.
	 * @param ctx the parse tree
	 */
	enterDrawingSize?: (ctx: DrawingSizeContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.drawingSize`.
	 * @param ctx the parse tree
	 */
	exitDrawingSize?: (ctx: DrawingSizeContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.drawingSizeDisplay`.
	 * @param ctx the parse tree
	 */
	enterDrawingSizeDisplay?: (ctx: DrawingSizeDisplayContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.drawingSizeDisplay`.
	 * @param ctx the parse tree
	 */
	exitDrawingSizeDisplay?: (ctx: DrawingSizeDisplayContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.duration`.
	 * @param ctx the parse tree
	 */
	enterDuration?: (ctx: DurationContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.duration`.
	 * @param ctx the parse tree
	 */
	exitDuration?: (ctx: DurationContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.e`.
	 * @param ctx the parse tree
	 */
	enterE?: (ctx: EContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.e`.
	 * @param ctx the parse tree
	 */
	exitE?: (ctx: EContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.edif`.
	 * @param ctx the parse tree
	 */
	enterEdif?: (ctx: EdifContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.edif`.
	 * @param ctx the parse tree
	 */
	exitEdif?: (ctx: EdifContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.edifHeader`.
	 * @param ctx the parse tree
	 */
	enterEdifHeader?: (ctx: EdifHeaderContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.edifHeader`.
	 * @param ctx the parse tree
	 */
	exitEdifHeader?: (ctx: EdifHeaderContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.edifLevel`.
	 * @param ctx the parse tree
	 */
	enterEdifLevel?: (ctx: EdifLevelContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.edifLevel`.
	 * @param ctx the parse tree
	 */
	exitEdifLevel?: (ctx: EdifLevelContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.edifLevelValue`.
	 * @param ctx the parse tree
	 */
	enterEdifLevelValue?: (ctx: EdifLevelValueContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.edifLevelValue`.
	 * @param ctx the parse tree
	 */
	exitEdifLevelValue?: (ctx: EdifLevelValueContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.edifNameDef`.
	 * @param ctx the parse tree
	 */
	enterEdifNameDef?: (ctx: EdifNameDefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.edifNameDef`.
	 * @param ctx the parse tree
	 */
	exitEdifNameDef?: (ctx: EdifNameDefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.edifVersion`.
	 * @param ctx the parse tree
	 */
	enterEdifVersion?: (ctx: EdifVersionContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.edifVersion`.
	 * @param ctx the parse tree
	 */
	exitEdifVersion?: (ctx: EdifVersionContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.endPoint`.
	 * @param ctx the parse tree
	 */
	enterEndPoint?: (ctx: EndPointContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.endPoint`.
	 * @param ctx the parse tree
	 */
	exitEndPoint?: (ctx: EndPointContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.endType`.
	 * @param ctx the parse tree
	 */
	enterEndType?: (ctx: EndTypeContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.endType`.
	 * @param ctx the parse tree
	 */
	exitEndType?: (ctx: EndTypeContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.engineeringDate`.
	 * @param ctx the parse tree
	 */
	enterEngineeringDate?: (ctx: EngineeringDateContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.engineeringDate`.
	 * @param ctx the parse tree
	 */
	exitEngineeringDate?: (ctx: EngineeringDateContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.engineeringDateDisplay`.
	 * @param ctx the parse tree
	 */
	enterEngineeringDateDisplay?: (ctx: EngineeringDateDisplayContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.engineeringDateDisplay`.
	 * @param ctx the parse tree
	 */
	exitEngineeringDateDisplay?: (ctx: EngineeringDateDisplayContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.event`.
	 * @param ctx the parse tree
	 */
	enterEvent?: (ctx: EventContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.event`.
	 * @param ctx the parse tree
	 */
	exitEvent?: (ctx: EventContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.exponent`.
	 * @param ctx the parse tree
	 */
	enterExponent?: (ctx: ExponentContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.exponent`.
	 * @param ctx the parse tree
	 */
	exitExponent?: (ctx: ExponentContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.extend`.
	 * @param ctx the parse tree
	 */
	enterExtend?: (ctx: ExtendContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.extend`.
	 * @param ctx the parse tree
	 */
	exitExtend?: (ctx: ExtendContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.extendForFrameMemberDef`.
	 * @param ctx the parse tree
	 */
	enterExtendForFrameMemberDef?: (ctx: ExtendForFrameMemberDefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.extendForFrameMemberDef`.
	 * @param ctx the parse tree
	 */
	exitExtendForFrameMemberDef?: (ctx: ExtendForFrameMemberDefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.extendFrameDef`.
	 * @param ctx the parse tree
	 */
	enterExtendFrameDef?: (ctx: ExtendFrameDefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.extendFrameDef`.
	 * @param ctx the parse tree
	 */
	exitExtendFrameDef?: (ctx: ExtendFrameDefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.extendInstanceDef`.
	 * @param ctx the parse tree
	 */
	enterExtendInstanceDef?: (ctx: ExtendInstanceDefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.extendInstanceDef`.
	 * @param ctx the parse tree
	 */
	exitExtendInstanceDef?: (ctx: ExtendInstanceDefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.extendInstanceMemberDef`.
	 * @param ctx the parse tree
	 */
	enterExtendInstanceMemberDef?: (ctx: ExtendInstanceMemberDefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.extendInstanceMemberDef`.
	 * @param ctx the parse tree
	 */
	exitExtendInstanceMemberDef?: (ctx: ExtendInstanceMemberDefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.extendInterconnectDef`.
	 * @param ctx the parse tree
	 */
	enterExtendInterconnectDef?: (ctx: ExtendInterconnectDefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.extendInterconnectDef`.
	 * @param ctx the parse tree
	 */
	exitExtendInterconnectDef?: (ctx: ExtendInterconnectDefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.extendPageDef`.
	 * @param ctx the parse tree
	 */
	enterExtendPageDef?: (ctx: ExtendPageDefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.extendPageDef`.
	 * @param ctx the parse tree
	 */
	exitExtendPageDef?: (ctx: ExtendPageDefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.extendPortDef`.
	 * @param ctx the parse tree
	 */
	enterExtendPortDef?: (ctx: ExtendPortDefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.extendPortDef`.
	 * @param ctx the parse tree
	 */
	exitExtendPortDef?: (ctx: ExtendPortDefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.extendPortMemberDef`.
	 * @param ctx the parse tree
	 */
	enterExtendPortMemberDef?: (ctx: ExtendPortMemberDefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.extendPortMemberDef`.
	 * @param ctx the parse tree
	 */
	exitExtendPortMemberDef?: (ctx: ExtendPortMemberDefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.extendSignalDef`.
	 * @param ctx the parse tree
	 */
	enterExtendSignalDef?: (ctx: ExtendSignalDefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.extendSignalDef`.
	 * @param ctx the parse tree
	 */
	exitExtendSignalDef?: (ctx: ExtendSignalDefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.extendSignalGroupDef`.
	 * @param ctx the parse tree
	 */
	enterExtendSignalGroupDef?: (ctx: ExtendSignalGroupDefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.extendSignalGroupDef`.
	 * @param ctx the parse tree
	 */
	exitExtendSignalGroupDef?: (ctx: ExtendSignalGroupDefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.extendSignalMemberDef`.
	 * @param ctx the parse tree
	 */
	enterExtendSignalMemberDef?: (ctx: ExtendSignalMemberDefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.extendSignalMemberDef`.
	 * @param ctx the parse tree
	 */
	exitExtendSignalMemberDef?: (ctx: ExtendSignalMemberDefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.external`.
	 * @param ctx the parse tree
	 */
	enterExternal?: (ctx: ExternalContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.external`.
	 * @param ctx the parse tree
	 */
	exitExternal?: (ctx: ExternalContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.fahrenheit`.
	 * @param ctx the parse tree
	 */
	enterFahrenheit?: (ctx: FahrenheitContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.fahrenheit`.
	 * @param ctx the parse tree
	 */
	exitFahrenheit?: (ctx: FahrenheitContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.efalse`.
	 * @param ctx the parse tree
	 */
	enterEfalse?: (ctx: EfalseContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.efalse`.
	 * @param ctx the parse tree
	 */
	exitEfalse?: (ctx: EfalseContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.farad`.
	 * @param ctx the parse tree
	 */
	enterFarad?: (ctx: FaradContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.farad`.
	 * @param ctx the parse tree
	 */
	exitFarad?: (ctx: FaradContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.figure`.
	 * @param ctx the parse tree
	 */
	enterFigure?: (ctx: FigureContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.figure`.
	 * @param ctx the parse tree
	 */
	exitFigure?: (ctx: FigureContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.figureGroup`.
	 * @param ctx the parse tree
	 */
	enterFigureGroup?: (ctx: FigureGroupContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.figureGroup`.
	 * @param ctx the parse tree
	 */
	exitFigureGroup?: (ctx: FigureGroupContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.figureGroupNameCaseSensitive`.
	 * @param ctx the parse tree
	 */
	enterFigureGroupNameCaseSensitive?: (ctx: FigureGroupNameCaseSensitiveContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.figureGroupNameCaseSensitive`.
	 * @param ctx the parse tree
	 */
	exitFigureGroupNameCaseSensitive?: (ctx: FigureGroupNameCaseSensitiveContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.figureGroupNameDef`.
	 * @param ctx the parse tree
	 */
	enterFigureGroupNameDef?: (ctx: FigureGroupNameDefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.figureGroupNameDef`.
	 * @param ctx the parse tree
	 */
	exitFigureGroupNameDef?: (ctx: FigureGroupNameDefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.figureGroupNameRef`.
	 * @param ctx the parse tree
	 */
	enterFigureGroupNameRef?: (ctx: FigureGroupNameRefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.figureGroupNameRef`.
	 * @param ctx the parse tree
	 */
	exitFigureGroupNameRef?: (ctx: FigureGroupNameRefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.figureGroupOverride`.
	 * @param ctx the parse tree
	 */
	enterFigureGroupOverride?: (ctx: FigureGroupOverrideContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.figureGroupOverride`.
	 * @param ctx the parse tree
	 */
	exitFigureGroupOverride?: (ctx: FigureGroupOverrideContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.fillPattern`.
	 * @param ctx the parse tree
	 */
	enterFillPattern?: (ctx: FillPatternContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.fillPattern`.
	 * @param ctx the parse tree
	 */
	exitFillPattern?: (ctx: FillPatternContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.fillPatternVisible`.
	 * @param ctx the parse tree
	 */
	enterFillPatternVisible?: (ctx: FillPatternVisibleContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.fillPatternVisible`.
	 * @param ctx the parse tree
	 */
	exitFillPatternVisible?: (ctx: FillPatternVisibleContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.firstIntegerExpression`.
	 * @param ctx the parse tree
	 */
	enterFirstIntegerExpression?: (ctx: FirstIntegerExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.firstIntegerExpression`.
	 * @param ctx the parse tree
	 */
	exitFirstIntegerExpression?: (ctx: FirstIntegerExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.firstStringExpression`.
	 * @param ctx the parse tree
	 */
	enterFirstStringExpression?: (ctx: FirstStringExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.firstStringExpression`.
	 * @param ctx the parse tree
	 */
	exitFirstStringExpression?: (ctx: FirstStringExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.fixed`.
	 * @param ctx the parse tree
	 */
	enterFixed?: (ctx: FixedContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.fixed`.
	 * @param ctx the parse tree
	 */
	exitFixed?: (ctx: FixedContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.font`.
	 * @param ctx the parse tree
	 */
	enterFont?: (ctx: FontContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.font`.
	 * @param ctx the parse tree
	 */
	exitFont?: (ctx: FontContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.fontCapitalHeight`.
	 * @param ctx the parse tree
	 */
	enterFontCapitalHeight?: (ctx: FontCapitalHeightContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.fontCapitalHeight`.
	 * @param ctx the parse tree
	 */
	exitFontCapitalHeight?: (ctx: FontCapitalHeightContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.fontDefinitions`.
	 * @param ctx the parse tree
	 */
	enterFontDefinitions?: (ctx: FontDefinitionsContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.fontDefinitions`.
	 * @param ctx the parse tree
	 */
	exitFontDefinitions?: (ctx: FontDefinitionsContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.fontDescent`.
	 * @param ctx the parse tree
	 */
	enterFontDescent?: (ctx: FontDescentContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.fontDescent`.
	 * @param ctx the parse tree
	 */
	exitFontDescent?: (ctx: FontDescentContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.fontFamily`.
	 * @param ctx the parse tree
	 */
	enterFontFamily?: (ctx: FontFamilyContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.fontFamily`.
	 * @param ctx the parse tree
	 */
	exitFontFamily?: (ctx: FontFamilyContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.fontHeight`.
	 * @param ctx the parse tree
	 */
	enterFontHeight?: (ctx: FontHeightContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.fontHeight`.
	 * @param ctx the parse tree
	 */
	exitFontHeight?: (ctx: FontHeightContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.fontNameDef`.
	 * @param ctx the parse tree
	 */
	enterFontNameDef?: (ctx: FontNameDefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.fontNameDef`.
	 * @param ctx the parse tree
	 */
	exitFontNameDef?: (ctx: FontNameDefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.fontNameRef`.
	 * @param ctx the parse tree
	 */
	enterFontNameRef?: (ctx: FontNameRefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.fontNameRef`.
	 * @param ctx the parse tree
	 */
	exitFontNameRef?: (ctx: FontNameRefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.fontProportions`.
	 * @param ctx the parse tree
	 */
	enterFontProportions?: (ctx: FontProportionsContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.fontProportions`.
	 * @param ctx the parse tree
	 */
	exitFontProportions?: (ctx: FontProportionsContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.fontRef`.
	 * @param ctx the parse tree
	 */
	enterFontRef?: (ctx: FontRefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.fontRef`.
	 * @param ctx the parse tree
	 */
	exitFontRef?: (ctx: FontRefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.fonts`.
	 * @param ctx the parse tree
	 */
	enterFonts?: (ctx: FontsContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.fonts`.
	 * @param ctx the parse tree
	 */
	exitFonts?: (ctx: FontsContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.fontWidth`.
	 * @param ctx the parse tree
	 */
	enterFontWidth?: (ctx: FontWidthContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.fontWidth`.
	 * @param ctx the parse tree
	 */
	exitFontWidth?: (ctx: FontWidthContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.forbiddenEvent`.
	 * @param ctx the parse tree
	 */
	enterForbiddenEvent?: (ctx: ForbiddenEventContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.forbiddenEvent`.
	 * @param ctx the parse tree
	 */
	exitForbiddenEvent?: (ctx: ForbiddenEventContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.forFrame`.
	 * @param ctx the parse tree
	 */
	enterForFrame?: (ctx: ForFrameContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.forFrame`.
	 * @param ctx the parse tree
	 */
	exitForFrame?: (ctx: ForFrameContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.forFrameAnnotate`.
	 * @param ctx the parse tree
	 */
	enterForFrameAnnotate?: (ctx: ForFrameAnnotateContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.forFrameAnnotate`.
	 * @param ctx the parse tree
	 */
	exitForFrameAnnotate?: (ctx: ForFrameAnnotateContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.forFrameIndex`.
	 * @param ctx the parse tree
	 */
	enterForFrameIndex?: (ctx: ForFrameIndexContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.forFrameIndex`.
	 * @param ctx the parse tree
	 */
	exitForFrameIndex?: (ctx: ForFrameIndexContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.forFrameIndexDisplay`.
	 * @param ctx the parse tree
	 */
	enterForFrameIndexDisplay?: (ctx: ForFrameIndexDisplayContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.forFrameIndexDisplay`.
	 * @param ctx the parse tree
	 */
	exitForFrameIndexDisplay?: (ctx: ForFrameIndexDisplayContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.forFrameIndexNameCaseSensitive`.
	 * @param ctx the parse tree
	 */
	enterForFrameIndexNameCaseSensitive?: (ctx: ForFrameIndexNameCaseSensitiveContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.forFrameIndexNameCaseSensitive`.
	 * @param ctx the parse tree
	 */
	exitForFrameIndexNameCaseSensitive?: (ctx: ForFrameIndexNameCaseSensitiveContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.forFrameIndexRef`.
	 * @param ctx the parse tree
	 */
	enterForFrameIndexRef?: (ctx: ForFrameIndexRefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.forFrameIndexRef`.
	 * @param ctx the parse tree
	 */
	exitForFrameIndexRef?: (ctx: ForFrameIndexRefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.forFrameMemberRef`.
	 * @param ctx the parse tree
	 */
	enterForFrameMemberRef?: (ctx: ForFrameMemberRefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.forFrameMemberRef`.
	 * @param ctx the parse tree
	 */
	exitForFrameMemberRef?: (ctx: ForFrameMemberRefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.forFrameRef`.
	 * @param ctx the parse tree
	 */
	enterForFrameRef?: (ctx: ForFrameRefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.forFrameRef`.
	 * @param ctx the parse tree
	 */
	exitForFrameRef?: (ctx: ForFrameRefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.frameConfiguration`.
	 * @param ctx the parse tree
	 */
	enterFrameConfiguration?: (ctx: FrameConfigurationContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.frameConfiguration`.
	 * @param ctx the parse tree
	 */
	exitFrameConfiguration?: (ctx: FrameConfigurationContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.frameNameCaseSensitive`.
	 * @param ctx the parse tree
	 */
	enterFrameNameCaseSensitive?: (ctx: FrameNameCaseSensitiveContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.frameNameCaseSensitive`.
	 * @param ctx the parse tree
	 */
	exitFrameNameCaseSensitive?: (ctx: FrameNameCaseSensitiveContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.frameNameDef`.
	 * @param ctx the parse tree
	 */
	enterFrameNameDef?: (ctx: FrameNameDefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.frameNameDef`.
	 * @param ctx the parse tree
	 */
	exitFrameNameDef?: (ctx: FrameNameDefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.frameNameRef`.
	 * @param ctx the parse tree
	 */
	enterFrameNameRef?: (ctx: FrameNameRefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.frameNameRef`.
	 * @param ctx the parse tree
	 */
	exitFrameNameRef?: (ctx: FrameNameRefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.frameRef`.
	 * @param ctx the parse tree
	 */
	enterFrameRef?: (ctx: FrameRefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.frameRef`.
	 * @param ctx the parse tree
	 */
	exitFrameRef?: (ctx: FrameRefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.frequencyValue`.
	 * @param ctx the parse tree
	 */
	enterFrequencyValue?: (ctx: FrequencyValueContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.frequencyValue`.
	 * @param ctx the parse tree
	 */
	exitFrequencyValue?: (ctx: FrequencyValueContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.fromBottom`.
	 * @param ctx the parse tree
	 */
	enterFromBottom?: (ctx: FromBottomContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.fromBottom`.
	 * @param ctx the parse tree
	 */
	exitFromBottom?: (ctx: FromBottomContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.fromInteger`.
	 * @param ctx the parse tree
	 */
	enterFromInteger?: (ctx: FromIntegerContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.fromInteger`.
	 * @param ctx the parse tree
	 */
	exitFromInteger?: (ctx: FromIntegerContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.fromLeft`.
	 * @param ctx the parse tree
	 */
	enterFromLeft?: (ctx: FromLeftContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.fromLeft`.
	 * @param ctx the parse tree
	 */
	exitFromLeft?: (ctx: FromLeftContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.fromRight`.
	 * @param ctx the parse tree
	 */
	enterFromRight?: (ctx: FromRightContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.fromRight`.
	 * @param ctx the parse tree
	 */
	exitFromRight?: (ctx: FromRightContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.fromTop`.
	 * @param ctx the parse tree
	 */
	enterFromTop?: (ctx: FromTopContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.fromTop`.
	 * @param ctx the parse tree
	 */
	exitFromTop?: (ctx: FromTopContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.generated`.
	 * @param ctx the parse tree
	 */
	enterGenerated?: (ctx: GeneratedContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.generated`.
	 * @param ctx the parse tree
	 */
	exitGenerated?: (ctx: GeneratedContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.geometryMacro`.
	 * @param ctx the parse tree
	 */
	enterGeometryMacro?: (ctx: GeometryMacroContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.geometryMacro`.
	 * @param ctx the parse tree
	 */
	exitGeometryMacro?: (ctx: GeometryMacroContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.geometryMacroHeader`.
	 * @param ctx the parse tree
	 */
	enterGeometryMacroHeader?: (ctx: GeometryMacroHeaderContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.geometryMacroHeader`.
	 * @param ctx the parse tree
	 */
	exitGeometryMacroHeader?: (ctx: GeometryMacroHeaderContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.geometryMacroRef`.
	 * @param ctx the parse tree
	 */
	enterGeometryMacroRef?: (ctx: GeometryMacroRefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.geometryMacroRef`.
	 * @param ctx the parse tree
	 */
	exitGeometryMacroRef?: (ctx: GeometryMacroRefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.geometryMacroUnits`.
	 * @param ctx the parse tree
	 */
	enterGeometryMacroUnits?: (ctx: GeometryMacroUnitsContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.geometryMacroUnits`.
	 * @param ctx the parse tree
	 */
	exitGeometryMacroUnits?: (ctx: GeometryMacroUnitsContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.globalPort`.
	 * @param ctx the parse tree
	 */
	enterGlobalPort?: (ctx: GlobalPortContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.globalPort`.
	 * @param ctx the parse tree
	 */
	exitGlobalPort?: (ctx: GlobalPortContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.globalPortBundle`.
	 * @param ctx the parse tree
	 */
	enterGlobalPortBundle?: (ctx: GlobalPortBundleContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.globalPortBundle`.
	 * @param ctx the parse tree
	 */
	exitGlobalPortBundle?: (ctx: GlobalPortBundleContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.globalPortDefinitions`.
	 * @param ctx the parse tree
	 */
	enterGlobalPortDefinitions?: (ctx: GlobalPortDefinitionsContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.globalPortDefinitions`.
	 * @param ctx the parse tree
	 */
	exitGlobalPortDefinitions?: (ctx: GlobalPortDefinitionsContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.globalPortList`.
	 * @param ctx the parse tree
	 */
	enterGlobalPortList?: (ctx: GlobalPortListContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.globalPortList`.
	 * @param ctx the parse tree
	 */
	exitGlobalPortList?: (ctx: GlobalPortListContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.globalPortNameCaseSensitive`.
	 * @param ctx the parse tree
	 */
	enterGlobalPortNameCaseSensitive?: (ctx: GlobalPortNameCaseSensitiveContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.globalPortNameCaseSensitive`.
	 * @param ctx the parse tree
	 */
	exitGlobalPortNameCaseSensitive?: (ctx: GlobalPortNameCaseSensitiveContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.globalPortNameDef`.
	 * @param ctx the parse tree
	 */
	enterGlobalPortNameDef?: (ctx: GlobalPortNameDefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.globalPortNameDef`.
	 * @param ctx the parse tree
	 */
	exitGlobalPortNameDef?: (ctx: GlobalPortNameDefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.globalPortNameDisplay`.
	 * @param ctx the parse tree
	 */
	enterGlobalPortNameDisplay?: (ctx: GlobalPortNameDisplayContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.globalPortNameDisplay`.
	 * @param ctx the parse tree
	 */
	exitGlobalPortNameDisplay?: (ctx: GlobalPortNameDisplayContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.globalPortNameRef`.
	 * @param ctx the parse tree
	 */
	enterGlobalPortNameRef?: (ctx: GlobalPortNameRefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.globalPortNameRef`.
	 * @param ctx the parse tree
	 */
	exitGlobalPortNameRef?: (ctx: GlobalPortNameRefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.globalPortPropertyDisplay`.
	 * @param ctx the parse tree
	 */
	enterGlobalPortPropertyDisplay?: (ctx: GlobalPortPropertyDisplayContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.globalPortPropertyDisplay`.
	 * @param ctx the parse tree
	 */
	exitGlobalPortPropertyDisplay?: (ctx: GlobalPortPropertyDisplayContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.globalPortRef`.
	 * @param ctx the parse tree
	 */
	enterGlobalPortRef?: (ctx: GlobalPortRefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.globalPortRef`.
	 * @param ctx the parse tree
	 */
	exitGlobalPortRef?: (ctx: GlobalPortRefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.globalPortScope`.
	 * @param ctx the parse tree
	 */
	enterGlobalPortScope?: (ctx: GlobalPortScopeContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.globalPortScope`.
	 * @param ctx the parse tree
	 */
	exitGlobalPortScope?: (ctx: GlobalPortScopeContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.green`.
	 * @param ctx the parse tree
	 */
	enterGreen?: (ctx: GreenContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.green`.
	 * @param ctx the parse tree
	 */
	exitGreen?: (ctx: GreenContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.henry`.
	 * @param ctx the parse tree
	 */
	enterHenry?: (ctx: HenryContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.henry`.
	 * @param ctx the parse tree
	 */
	exitHenry?: (ctx: HenryContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.hertz`.
	 * @param ctx the parse tree
	 */
	enterHertz?: (ctx: HertzContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.hertz`.
	 * @param ctx the parse tree
	 */
	exitHertz?: (ctx: HertzContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.horizontalJustification`.
	 * @param ctx the parse tree
	 */
	enterHorizontalJustification?: (ctx: HorizontalJustificationContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.horizontalJustification`.
	 * @param ctx the parse tree
	 */
	exitHorizontalJustification?: (ctx: HorizontalJustificationContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.hotspot`.
	 * @param ctx the parse tree
	 */
	enterHotspot?: (ctx: HotspotContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.hotspot`.
	 * @param ctx the parse tree
	 */
	exitHotspot?: (ctx: HotspotContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.hotspotConnectDirection`.
	 * @param ctx the parse tree
	 */
	enterHotspotConnectDirection?: (ctx: HotspotConnectDirectionContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.hotspotConnectDirection`.
	 * @param ctx the parse tree
	 */
	exitHotspotConnectDirection?: (ctx: HotspotConnectDirectionContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.hotspotGrid`.
	 * @param ctx the parse tree
	 */
	enterHotspotGrid?: (ctx: HotspotGridContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.hotspotGrid`.
	 * @param ctx the parse tree
	 */
	exitHotspotGrid?: (ctx: HotspotGridContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.hotspotNameCaseSensitive`.
	 * @param ctx the parse tree
	 */
	enterHotspotNameCaseSensitive?: (ctx: HotspotNameCaseSensitiveContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.hotspotNameCaseSensitive`.
	 * @param ctx the parse tree
	 */
	exitHotspotNameCaseSensitive?: (ctx: HotspotNameCaseSensitiveContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.hotspotNameDef`.
	 * @param ctx the parse tree
	 */
	enterHotspotNameDef?: (ctx: HotspotNameDefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.hotspotNameDef`.
	 * @param ctx the parse tree
	 */
	exitHotspotNameDef?: (ctx: HotspotNameDefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.hotspotNameDisplay`.
	 * @param ctx the parse tree
	 */
	enterHotspotNameDisplay?: (ctx: HotspotNameDisplayContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.hotspotNameDisplay`.
	 * @param ctx the parse tree
	 */
	exitHotspotNameDisplay?: (ctx: HotspotNameDisplayContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.hotspotNameRef`.
	 * @param ctx the parse tree
	 */
	enterHotspotNameRef?: (ctx: HotspotNameRefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.hotspotNameRef`.
	 * @param ctx the parse tree
	 */
	exitHotspotNameRef?: (ctx: HotspotNameRefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.hourNumber`.
	 * @param ctx the parse tree
	 */
	enterHourNumber?: (ctx: HourNumberContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.hourNumber`.
	 * @param ctx the parse tree
	 */
	exitHourNumber?: (ctx: HourNumberContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.ieeeDesignation`.
	 * @param ctx the parse tree
	 */
	enterIeeeDesignation?: (ctx: IeeeDesignationContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.ieeeDesignation`.
	 * @param ctx the parse tree
	 */
	exitIeeeDesignation?: (ctx: IeeeDesignationContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.ieeeSection`.
	 * @param ctx the parse tree
	 */
	enterIeeeSection?: (ctx: IeeeSectionContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.ieeeSection`.
	 * @param ctx the parse tree
	 */
	exitIeeeSection?: (ctx: IeeeSectionContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.ieeeStandard`.
	 * @param ctx the parse tree
	 */
	enterIeeeStandard?: (ctx: IeeeStandardContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.ieeeStandard`.
	 * @param ctx the parse tree
	 */
	exitIeeeStandard?: (ctx: IeeeStandardContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.ifFrame`.
	 * @param ctx the parse tree
	 */
	enterIfFrame?: (ctx: IfFrameContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.ifFrame`.
	 * @param ctx the parse tree
	 */
	exitIfFrame?: (ctx: IfFrameContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.ifFrameAnnotate`.
	 * @param ctx the parse tree
	 */
	enterIfFrameAnnotate?: (ctx: IfFrameAnnotateContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.ifFrameAnnotate`.
	 * @param ctx the parse tree
	 */
	exitIfFrameAnnotate?: (ctx: IfFrameAnnotateContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.ifFrameRef`.
	 * @param ctx the parse tree
	 */
	enterIfFrameRef?: (ctx: IfFrameRefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.ifFrameRef`.
	 * @param ctx the parse tree
	 */
	exitIfFrameRef?: (ctx: IfFrameRefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.ifFrameSet`.
	 * @param ctx the parse tree
	 */
	enterIfFrameSet?: (ctx: IfFrameSetContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.ifFrameSet`.
	 * @param ctx the parse tree
	 */
	exitIfFrameSet?: (ctx: IfFrameSetContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.ignore`.
	 * @param ctx the parse tree
	 */
	enterIgnore?: (ctx: IgnoreContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.ignore`.
	 * @param ctx the parse tree
	 */
	exitIgnore?: (ctx: IgnoreContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.implementationNameCaseSensitive`.
	 * @param ctx the parse tree
	 */
	enterImplementationNameCaseSensitive?: (ctx: ImplementationNameCaseSensitiveContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.implementationNameCaseSensitive`.
	 * @param ctx the parse tree
	 */
	exitImplementationNameCaseSensitive?: (ctx: ImplementationNameCaseSensitiveContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.implementationNameDef`.
	 * @param ctx the parse tree
	 */
	enterImplementationNameDef?: (ctx: ImplementationNameDefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.implementationNameDef`.
	 * @param ctx the parse tree
	 */
	exitImplementationNameDef?: (ctx: ImplementationNameDefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.implementationNameDisplay`.
	 * @param ctx the parse tree
	 */
	enterImplementationNameDisplay?: (ctx: ImplementationNameDisplayContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.implementationNameDisplay`.
	 * @param ctx the parse tree
	 */
	exitImplementationNameDisplay?: (ctx: ImplementationNameDisplayContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.implementationNameRef`.
	 * @param ctx the parse tree
	 */
	enterImplementationNameRef?: (ctx: ImplementationNameRefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.implementationNameRef`.
	 * @param ctx the parse tree
	 */
	exitImplementationNameRef?: (ctx: ImplementationNameRefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.indexEndDisplay`.
	 * @param ctx the parse tree
	 */
	enterIndexEndDisplay?: (ctx: IndexEndDisplayContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.indexEndDisplay`.
	 * @param ctx the parse tree
	 */
	exitIndexEndDisplay?: (ctx: IndexEndDisplayContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.indexNameDef`.
	 * @param ctx the parse tree
	 */
	enterIndexNameDef?: (ctx: IndexNameDefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.indexNameDef`.
	 * @param ctx the parse tree
	 */
	exitIndexNameDef?: (ctx: IndexNameDefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.indexNameDisplay`.
	 * @param ctx the parse tree
	 */
	enterIndexNameDisplay?: (ctx: IndexNameDisplayContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.indexNameDisplay`.
	 * @param ctx the parse tree
	 */
	exitIndexNameDisplay?: (ctx: IndexNameDisplayContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.indexNameRef`.
	 * @param ctx the parse tree
	 */
	enterIndexNameRef?: (ctx: IndexNameRefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.indexNameRef`.
	 * @param ctx the parse tree
	 */
	exitIndexNameRef?: (ctx: IndexNameRefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.indexStart`.
	 * @param ctx the parse tree
	 */
	enterIndexStart?: (ctx: IndexStartContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.indexStart`.
	 * @param ctx the parse tree
	 */
	exitIndexStart?: (ctx: IndexStartContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.indexStartDisplay`.
	 * @param ctx the parse tree
	 */
	enterIndexStartDisplay?: (ctx: IndexStartDisplayContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.indexStartDisplay`.
	 * @param ctx the parse tree
	 */
	exitIndexStartDisplay?: (ctx: IndexStartDisplayContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.indexStep`.
	 * @param ctx the parse tree
	 */
	enterIndexStep?: (ctx: IndexStepContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.indexStep`.
	 * @param ctx the parse tree
	 */
	exitIndexStep?: (ctx: IndexStepContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.indexStepDisplay`.
	 * @param ctx the parse tree
	 */
	enterIndexStepDisplay?: (ctx: IndexStepDisplayContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.indexStepDisplay`.
	 * @param ctx the parse tree
	 */
	exitIndexStepDisplay?: (ctx: IndexStepDisplayContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.indexValue`.
	 * @param ctx the parse tree
	 */
	enterIndexValue?: (ctx: IndexValueContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.indexValue`.
	 * @param ctx the parse tree
	 */
	exitIndexValue?: (ctx: IndexValueContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.input`.
	 * @param ctx the parse tree
	 */
	enterInput?: (ctx: InputContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.input`.
	 * @param ctx the parse tree
	 */
	exitInput?: (ctx: InputContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.inputPort`.
	 * @param ctx the parse tree
	 */
	enterInputPort?: (ctx: InputPortContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.inputPort`.
	 * @param ctx the parse tree
	 */
	exitInputPort?: (ctx: InputPortContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.inputPortAttributes`.
	 * @param ctx the parse tree
	 */
	enterInputPortAttributes?: (ctx: InputPortAttributesContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.inputPortAttributes`.
	 * @param ctx the parse tree
	 */
	exitInputPortAttributes?: (ctx: InputPortAttributesContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.instance`.
	 * @param ctx the parse tree
	 */
	enterInstance?: (ctx: InstanceContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.instance`.
	 * @param ctx the parse tree
	 */
	exitInstance?: (ctx: InstanceContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.instanceConfiguration`.
	 * @param ctx the parse tree
	 */
	enterInstanceConfiguration?: (ctx: InstanceConfigurationContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.instanceConfiguration`.
	 * @param ctx the parse tree
	 */
	exitInstanceConfiguration?: (ctx: InstanceConfigurationContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.instanceIndexValue`.
	 * @param ctx the parse tree
	 */
	enterInstanceIndexValue?: (ctx: InstanceIndexValueContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.instanceIndexValue`.
	 * @param ctx the parse tree
	 */
	exitInstanceIndexValue?: (ctx: InstanceIndexValueContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.instanceMemberRef`.
	 * @param ctx the parse tree
	 */
	enterInstanceMemberRef?: (ctx: InstanceMemberRefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.instanceMemberRef`.
	 * @param ctx the parse tree
	 */
	exitInstanceMemberRef?: (ctx: InstanceMemberRefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.instanceNameCaseSensitive`.
	 * @param ctx the parse tree
	 */
	enterInstanceNameCaseSensitive?: (ctx: InstanceNameCaseSensitiveContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.instanceNameCaseSensitive`.
	 * @param ctx the parse tree
	 */
	exitInstanceNameCaseSensitive?: (ctx: InstanceNameCaseSensitiveContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.instanceNameDef`.
	 * @param ctx the parse tree
	 */
	enterInstanceNameDef?: (ctx: InstanceNameDefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.instanceNameDef`.
	 * @param ctx the parse tree
	 */
	exitInstanceNameDef?: (ctx: InstanceNameDefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.instanceNameDisplay`.
	 * @param ctx the parse tree
	 */
	enterInstanceNameDisplay?: (ctx: InstanceNameDisplayContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.instanceNameDisplay`.
	 * @param ctx the parse tree
	 */
	exitInstanceNameDisplay?: (ctx: InstanceNameDisplayContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.instanceNameGenerator`.
	 * @param ctx the parse tree
	 */
	enterInstanceNameGenerator?: (ctx: InstanceNameGeneratorContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.instanceNameGenerator`.
	 * @param ctx the parse tree
	 */
	exitInstanceNameGenerator?: (ctx: InstanceNameGeneratorContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.instanceNameGeneratorDisplay`.
	 * @param ctx the parse tree
	 */
	enterInstanceNameGeneratorDisplay?: (ctx: InstanceNameGeneratorDisplayContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.instanceNameGeneratorDisplay`.
	 * @param ctx the parse tree
	 */
	exitInstanceNameGeneratorDisplay?: (ctx: InstanceNameGeneratorDisplayContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.instanceNameRef`.
	 * @param ctx the parse tree
	 */
	enterInstanceNameRef?: (ctx: InstanceNameRefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.instanceNameRef`.
	 * @param ctx the parse tree
	 */
	exitInstanceNameRef?: (ctx: InstanceNameRefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.instancePortAttributeDisplay`.
	 * @param ctx the parse tree
	 */
	enterInstancePortAttributeDisplay?: (ctx: InstancePortAttributeDisplayContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.instancePortAttributeDisplay`.
	 * @param ctx the parse tree
	 */
	exitInstancePortAttributeDisplay?: (ctx: InstancePortAttributeDisplayContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.instancePortAttributes`.
	 * @param ctx the parse tree
	 */
	enterInstancePortAttributes?: (ctx: InstancePortAttributesContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.instancePortAttributes`.
	 * @param ctx the parse tree
	 */
	exitInstancePortAttributes?: (ctx: InstancePortAttributesContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.instancePropertyDisplay`.
	 * @param ctx the parse tree
	 */
	enterInstancePropertyDisplay?: (ctx: InstancePropertyDisplayContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.instancePropertyDisplay`.
	 * @param ctx the parse tree
	 */
	exitInstancePropertyDisplay?: (ctx: InstancePropertyDisplayContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.instancePropertyOverride`.
	 * @param ctx the parse tree
	 */
	enterInstancePropertyOverride?: (ctx: InstancePropertyOverrideContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.instancePropertyOverride`.
	 * @param ctx the parse tree
	 */
	exitInstancePropertyOverride?: (ctx: InstancePropertyOverrideContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.instanceRef`.
	 * @param ctx the parse tree
	 */
	enterInstanceRef?: (ctx: InstanceRefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.instanceRef`.
	 * @param ctx the parse tree
	 */
	exitInstanceRef?: (ctx: InstanceRefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.instanceWidth`.
	 * @param ctx the parse tree
	 */
	enterInstanceWidth?: (ctx: InstanceWidthContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.instanceWidth`.
	 * @param ctx the parse tree
	 */
	exitInstanceWidth?: (ctx: InstanceWidthContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.instanceWidthDisplay`.
	 * @param ctx the parse tree
	 */
	enterInstanceWidthDisplay?: (ctx: InstanceWidthDisplayContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.instanceWidthDisplay`.
	 * @param ctx the parse tree
	 */
	exitInstanceWidthDisplay?: (ctx: InstanceWidthDisplayContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.integer`.
	 * @param ctx the parse tree
	 */
	enterInteger?: (ctx: IntegerContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.integer`.
	 * @param ctx the parse tree
	 */
	exitInteger?: (ctx: IntegerContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.integerConstant`.
	 * @param ctx the parse tree
	 */
	enterIntegerConstant?: (ctx: IntegerConstantContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.integerConstant`.
	 * @param ctx the parse tree
	 */
	exitIntegerConstant?: (ctx: IntegerConstantContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.integerConstantRef`.
	 * @param ctx the parse tree
	 */
	enterIntegerConstantRef?: (ctx: IntegerConstantRefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.integerConstantRef`.
	 * @param ctx the parse tree
	 */
	exitIntegerConstantRef?: (ctx: IntegerConstantRefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.integerEqual`.
	 * @param ctx the parse tree
	 */
	enterIntegerEqual?: (ctx: IntegerEqualContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.integerEqual`.
	 * @param ctx the parse tree
	 */
	exitIntegerEqual?: (ctx: IntegerEqualContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.integerExpression`.
	 * @param ctx the parse tree
	 */
	enterIntegerExpression?: (ctx: IntegerExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.integerExpression`.
	 * @param ctx the parse tree
	 */
	exitIntegerExpression?: (ctx: IntegerExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.integerParameter`.
	 * @param ctx the parse tree
	 */
	enterIntegerParameter?: (ctx: IntegerParameterContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.integerParameter`.
	 * @param ctx the parse tree
	 */
	exitIntegerParameter?: (ctx: IntegerParameterContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.integerParameterAssign`.
	 * @param ctx the parse tree
	 */
	enterIntegerParameterAssign?: (ctx: IntegerParameterAssignContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.integerParameterAssign`.
	 * @param ctx the parse tree
	 */
	exitIntegerParameterAssign?: (ctx: IntegerParameterAssignContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.integerParameterRef`.
	 * @param ctx the parse tree
	 */
	enterIntegerParameterRef?: (ctx: IntegerParameterRefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.integerParameterRef`.
	 * @param ctx the parse tree
	 */
	exitIntegerParameterRef?: (ctx: IntegerParameterRefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.integerProduct`.
	 * @param ctx the parse tree
	 */
	enterIntegerProduct?: (ctx: IntegerProductContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.integerProduct`.
	 * @param ctx the parse tree
	 */
	exitIntegerProduct?: (ctx: IntegerProductContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.integerQuotient`.
	 * @param ctx the parse tree
	 */
	enterIntegerQuotient?: (ctx: IntegerQuotientContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.integerQuotient`.
	 * @param ctx the parse tree
	 */
	exitIntegerQuotient?: (ctx: IntegerQuotientContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.integerRemainder`.
	 * @param ctx the parse tree
	 */
	enterIntegerRemainder?: (ctx: IntegerRemainderContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.integerRemainder`.
	 * @param ctx the parse tree
	 */
	exitIntegerRemainder?: (ctx: IntegerRemainderContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.integerSubtract`.
	 * @param ctx the parse tree
	 */
	enterIntegerSubtract?: (ctx: IntegerSubtractContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.integerSubtract`.
	 * @param ctx the parse tree
	 */
	exitIntegerSubtract?: (ctx: IntegerSubtractContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.integerSum`.
	 * @param ctx the parse tree
	 */
	enterIntegerSum?: (ctx: IntegerSumContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.integerSum`.
	 * @param ctx the parse tree
	 */
	exitIntegerSum?: (ctx: IntegerSumContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.integerValue`.
	 * @param ctx the parse tree
	 */
	enterIntegerValue?: (ctx: IntegerValueContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.integerValue`.
	 * @param ctx the parse tree
	 */
	exitIntegerValue?: (ctx: IntegerValueContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.interconnectAnnotate`.
	 * @param ctx the parse tree
	 */
	enterInterconnectAnnotate?: (ctx: InterconnectAnnotateContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.interconnectAnnotate`.
	 * @param ctx the parse tree
	 */
	exitInterconnectAnnotate?: (ctx: InterconnectAnnotateContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.interconnectAttachedText`.
	 * @param ctx the parse tree
	 */
	enterInterconnectAttachedText?: (ctx: InterconnectAttachedTextContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.interconnectAttachedText`.
	 * @param ctx the parse tree
	 */
	exitInterconnectAttachedText?: (ctx: InterconnectAttachedTextContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.interconnectDelay`.
	 * @param ctx the parse tree
	 */
	enterInterconnectDelay?: (ctx: InterconnectDelayContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.interconnectDelay`.
	 * @param ctx the parse tree
	 */
	exitInterconnectDelay?: (ctx: InterconnectDelayContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.interconnectDelayDisplay`.
	 * @param ctx the parse tree
	 */
	enterInterconnectDelayDisplay?: (ctx: InterconnectDelayDisplayContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.interconnectDelayDisplay`.
	 * @param ctx the parse tree
	 */
	exitInterconnectDelayDisplay?: (ctx: InterconnectDelayDisplayContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.interconnectDelayNameDef`.
	 * @param ctx the parse tree
	 */
	enterInterconnectDelayNameDef?: (ctx: InterconnectDelayNameDefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.interconnectDelayNameDef`.
	 * @param ctx the parse tree
	 */
	exitInterconnectDelayNameDef?: (ctx: InterconnectDelayNameDefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.interconnectDelayNameRef`.
	 * @param ctx the parse tree
	 */
	enterInterconnectDelayNameRef?: (ctx: InterconnectDelayNameRefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.interconnectDelayNameRef`.
	 * @param ctx the parse tree
	 */
	exitInterconnectDelayNameRef?: (ctx: InterconnectDelayNameRefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.interconnectHeader`.
	 * @param ctx the parse tree
	 */
	enterInterconnectHeader?: (ctx: InterconnectHeaderContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.interconnectHeader`.
	 * @param ctx the parse tree
	 */
	exitInterconnectHeader?: (ctx: InterconnectHeaderContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.interconnectNameCaseSensitive`.
	 * @param ctx the parse tree
	 */
	enterInterconnectNameCaseSensitive?: (ctx: InterconnectNameCaseSensitiveContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.interconnectNameCaseSensitive`.
	 * @param ctx the parse tree
	 */
	exitInterconnectNameCaseSensitive?: (ctx: InterconnectNameCaseSensitiveContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.interconnectNameDef`.
	 * @param ctx the parse tree
	 */
	enterInterconnectNameDef?: (ctx: InterconnectNameDefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.interconnectNameDef`.
	 * @param ctx the parse tree
	 */
	exitInterconnectNameDef?: (ctx: InterconnectNameDefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.interconnectNameDisplay`.
	 * @param ctx the parse tree
	 */
	enterInterconnectNameDisplay?: (ctx: InterconnectNameDisplayContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.interconnectNameDisplay`.
	 * @param ctx the parse tree
	 */
	exitInterconnectNameDisplay?: (ctx: InterconnectNameDisplayContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.interconnectNameRef`.
	 * @param ctx the parse tree
	 */
	enterInterconnectNameRef?: (ctx: InterconnectNameRefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.interconnectNameRef`.
	 * @param ctx the parse tree
	 */
	exitInterconnectNameRef?: (ctx: InterconnectNameRefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.interconnectPropertyDisplay`.
	 * @param ctx the parse tree
	 */
	enterInterconnectPropertyDisplay?: (ctx: InterconnectPropertyDisplayContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.interconnectPropertyDisplay`.
	 * @param ctx the parse tree
	 */
	exitInterconnectPropertyDisplay?: (ctx: InterconnectPropertyDisplayContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.interconnectRef`.
	 * @param ctx the parse tree
	 */
	enterInterconnectRef?: (ctx: InterconnectRefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.interconnectRef`.
	 * @param ctx the parse tree
	 */
	exitInterconnectRef?: (ctx: InterconnectRefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.interconnectSet`.
	 * @param ctx the parse tree
	 */
	enterInterconnectSet?: (ctx: InterconnectSetContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.interconnectSet`.
	 * @param ctx the parse tree
	 */
	exitInterconnectSet?: (ctx: InterconnectSetContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.einterface`.
	 * @param ctx the parse tree
	 */
	enterEinterface?: (ctx: EinterfaceContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.einterface`.
	 * @param ctx the parse tree
	 */
	exitEinterface?: (ctx: EinterfaceContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.interfaceJoined`.
	 * @param ctx the parse tree
	 */
	enterInterfaceJoined?: (ctx: InterfaceJoinedContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.interfaceJoined`.
	 * @param ctx the parse tree
	 */
	exitInterfaceJoined?: (ctx: InterfaceJoinedContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.interfaceUnits`.
	 * @param ctx the parse tree
	 */
	enterInterfaceUnits?: (ctx: InterfaceUnitsContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.interfaceUnits`.
	 * @param ctx the parse tree
	 */
	exitInterfaceUnits?: (ctx: InterfaceUnitsContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.iso8859`.
	 * @param ctx the parse tree
	 */
	enterIso8859?: (ctx: Iso8859Context) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.iso8859`.
	 * @param ctx the parse tree
	 */
	exitIso8859?: (ctx: Iso8859Context) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.iso8859Part`.
	 * @param ctx the parse tree
	 */
	enterIso8859Part?: (ctx: Iso8859PartContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.iso8859Part`.
	 * @param ctx the parse tree
	 */
	exitIso8859Part?: (ctx: Iso8859PartContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.isolated`.
	 * @param ctx the parse tree
	 */
	enterIsolated?: (ctx: IsolatedContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.isolated`.
	 * @param ctx the parse tree
	 */
	exitIsolated?: (ctx: IsolatedContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.issue`.
	 * @param ctx the parse tree
	 */
	enterIssue?: (ctx: IssueContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.issue`.
	 * @param ctx the parse tree
	 */
	exitIssue?: (ctx: IssueContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.italicStyle`.
	 * @param ctx the parse tree
	 */
	enterItalicStyle?: (ctx: ItalicStyleContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.italicStyle`.
	 * @param ctx the parse tree
	 */
	exitItalicStyle?: (ctx: ItalicStyleContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.jisx0201`.
	 * @param ctx the parse tree
	 */
	enterJisx0201?: (ctx: Jisx0201Context) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.jisx0201`.
	 * @param ctx the parse tree
	 */
	exitJisx0201?: (ctx: Jisx0201Context) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.jisx0208`.
	 * @param ctx the parse tree
	 */
	enterJisx0208?: (ctx: Jisx0208Context) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.jisx0208`.
	 * @param ctx the parse tree
	 */
	exitJisx0208?: (ctx: Jisx0208Context) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.joinedAsSignal`.
	 * @param ctx the parse tree
	 */
	enterJoinedAsSignal?: (ctx: JoinedAsSignalContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.joinedAsSignal`.
	 * @param ctx the parse tree
	 */
	exitJoinedAsSignal?: (ctx: JoinedAsSignalContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.joule`.
	 * @param ctx the parse tree
	 */
	enterJoule?: (ctx: JouleContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.joule`.
	 * @param ctx the parse tree
	 */
	exitJoule?: (ctx: JouleContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.k0KeywordLevel`.
	 * @param ctx the parse tree
	 */
	enterK0KeywordLevel?: (ctx: K0KeywordLevelContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.k0KeywordLevel`.
	 * @param ctx the parse tree
	 */
	exitK0KeywordLevel?: (ctx: K0KeywordLevelContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.k1KeywordAlias`.
	 * @param ctx the parse tree
	 */
	enterK1KeywordAlias?: (ctx: K1KeywordAliasContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.k1KeywordAlias`.
	 * @param ctx the parse tree
	 */
	exitK1KeywordAlias?: (ctx: K1KeywordAliasContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.k1KeywordLevel`.
	 * @param ctx the parse tree
	 */
	enterK1KeywordLevel?: (ctx: K1KeywordLevelContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.k1KeywordLevel`.
	 * @param ctx the parse tree
	 */
	exitK1KeywordLevel?: (ctx: K1KeywordLevelContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.k1KeywordNameDef`.
	 * @param ctx the parse tree
	 */
	enterK1KeywordNameDef?: (ctx: K1KeywordNameDefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.k1KeywordNameDef`.
	 * @param ctx the parse tree
	 */
	exitK1KeywordNameDef?: (ctx: K1KeywordNameDefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.k1KeywordNameRef`.
	 * @param ctx the parse tree
	 */
	enterK1KeywordNameRef?: (ctx: K1KeywordNameRefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.k1KeywordNameRef`.
	 * @param ctx the parse tree
	 */
	exitK1KeywordNameRef?: (ctx: K1KeywordNameRefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.k2Actual`.
	 * @param ctx the parse tree
	 */
	enterK2Actual?: (ctx: K2ActualContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.k2Actual`.
	 * @param ctx the parse tree
	 */
	exitK2Actual?: (ctx: K2ActualContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.k2Build`.
	 * @param ctx the parse tree
	 */
	enterK2Build?: (ctx: K2BuildContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.k2Build`.
	 * @param ctx the parse tree
	 */
	exitK2Build?: (ctx: K2BuildContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.k2Formal`.
	 * @param ctx the parse tree
	 */
	enterK2Formal?: (ctx: K2FormalContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.k2Formal`.
	 * @param ctx the parse tree
	 */
	exitK2Formal?: (ctx: K2FormalContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.k2FormalNameDef`.
	 * @param ctx the parse tree
	 */
	enterK2FormalNameDef?: (ctx: K2FormalNameDefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.k2FormalNameDef`.
	 * @param ctx the parse tree
	 */
	exitK2FormalNameDef?: (ctx: K2FormalNameDefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.k2FormalNameRef`.
	 * @param ctx the parse tree
	 */
	enterK2FormalNameRef?: (ctx: K2FormalNameRefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.k2FormalNameRef`.
	 * @param ctx the parse tree
	 */
	exitK2FormalNameRef?: (ctx: K2FormalNameRefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.k2Generate`.
	 * @param ctx the parse tree
	 */
	enterK2Generate?: (ctx: K2GenerateContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.k2Generate`.
	 * @param ctx the parse tree
	 */
	exitK2Generate?: (ctx: K2GenerateContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.k2KeywordDefine`.
	 * @param ctx the parse tree
	 */
	enterK2KeywordDefine?: (ctx: K2KeywordDefineContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.k2KeywordDefine`.
	 * @param ctx the parse tree
	 */
	exitK2KeywordDefine?: (ctx: K2KeywordDefineContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.k2KeywordLevel`.
	 * @param ctx the parse tree
	 */
	enterK2KeywordLevel?: (ctx: K2KeywordLevelContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.k2KeywordLevel`.
	 * @param ctx the parse tree
	 */
	exitK2KeywordLevel?: (ctx: K2KeywordLevelContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.k2KeywordParameters`.
	 * @param ctx the parse tree
	 */
	enterK2KeywordParameters?: (ctx: K2KeywordParametersContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.k2KeywordParameters`.
	 * @param ctx the parse tree
	 */
	exitK2KeywordParameters?: (ctx: K2KeywordParametersContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.k2Literal`.
	 * @param ctx the parse tree
	 */
	enterK2Literal?: (ctx: K2LiteralContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.k2Literal`.
	 * @param ctx the parse tree
	 */
	exitK2Literal?: (ctx: K2LiteralContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.k2Optional`.
	 * @param ctx the parse tree
	 */
	enterK2Optional?: (ctx: K2OptionalContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.k2Optional`.
	 * @param ctx the parse tree
	 */
	exitK2Optional?: (ctx: K2OptionalContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.k2Required`.
	 * @param ctx the parse tree
	 */
	enterK2Required?: (ctx: K2RequiredContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.k2Required`.
	 * @param ctx the parse tree
	 */
	exitK2Required?: (ctx: K2RequiredContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.k3Build`.
	 * @param ctx the parse tree
	 */
	enterK3Build?: (ctx: K3BuildContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.k3Build`.
	 * @param ctx the parse tree
	 */
	exitK3Build?: (ctx: K3BuildContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.k3Collector`.
	 * @param ctx the parse tree
	 */
	enterK3Collector?: (ctx: K3CollectorContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.k3Collector`.
	 * @param ctx the parse tree
	 */
	exitK3Collector?: (ctx: K3CollectorContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.k3ForEach`.
	 * @param ctx the parse tree
	 */
	enterK3ForEach?: (ctx: K3ForEachContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.k3ForEach`.
	 * @param ctx the parse tree
	 */
	exitK3ForEach?: (ctx: K3ForEachContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.k3Formal`.
	 * @param ctx the parse tree
	 */
	enterK3Formal?: (ctx: K3FormalContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.k3Formal`.
	 * @param ctx the parse tree
	 */
	exitK3Formal?: (ctx: K3FormalContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.k3FormalList`.
	 * @param ctx the parse tree
	 */
	enterK3FormalList?: (ctx: K3FormalListContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.k3FormalList`.
	 * @param ctx the parse tree
	 */
	exitK3FormalList?: (ctx: K3FormalListContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.k3Generate`.
	 * @param ctx the parse tree
	 */
	enterK3Generate?: (ctx: K3GenerateContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.k3Generate`.
	 * @param ctx the parse tree
	 */
	exitK3Generate?: (ctx: K3GenerateContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.k3KeywordDefine`.
	 * @param ctx the parse tree
	 */
	enterK3KeywordDefine?: (ctx: K3KeywordDefineContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.k3KeywordDefine`.
	 * @param ctx the parse tree
	 */
	exitK3KeywordDefine?: (ctx: K3KeywordDefineContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.k3KeywordLevel`.
	 * @param ctx the parse tree
	 */
	enterK3KeywordLevel?: (ctx: K3KeywordLevelContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.k3KeywordLevel`.
	 * @param ctx the parse tree
	 */
	exitK3KeywordLevel?: (ctx: K3KeywordLevelContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.k3KeywordParameters`.
	 * @param ctx the parse tree
	 */
	enterK3KeywordParameters?: (ctx: K3KeywordParametersContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.k3KeywordParameters`.
	 * @param ctx the parse tree
	 */
	exitK3KeywordParameters?: (ctx: K3KeywordParametersContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.kelvin`.
	 * @param ctx the parse tree
	 */
	enterKelvin?: (ctx: KelvinContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.kelvin`.
	 * @param ctx the parse tree
	 */
	exitKelvin?: (ctx: KelvinContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.keywordMap`.
	 * @param ctx the parse tree
	 */
	enterKeywordMap?: (ctx: KeywordMapContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.keywordMap`.
	 * @param ctx the parse tree
	 */
	exitKeywordMap?: (ctx: KeywordMapContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.kilogram`.
	 * @param ctx the parse tree
	 */
	enterKilogram?: (ctx: KilogramContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.kilogram`.
	 * @param ctx the parse tree
	 */
	exitKilogram?: (ctx: KilogramContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.leaf`.
	 * @param ctx the parse tree
	 */
	enterLeaf?: (ctx: LeafContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.leaf`.
	 * @param ctx the parse tree
	 */
	exitLeaf?: (ctx: LeafContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.leafOccurrenceAnnotate`.
	 * @param ctx the parse tree
	 */
	enterLeafOccurrenceAnnotate?: (ctx: LeafOccurrenceAnnotateContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.leafOccurrenceAnnotate`.
	 * @param ctx the parse tree
	 */
	exitLeafOccurrenceAnnotate?: (ctx: LeafOccurrenceAnnotateContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.leftJustify`.
	 * @param ctx the parse tree
	 */
	enterLeftJustify?: (ctx: LeftJustifyContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.leftJustify`.
	 * @param ctx the parse tree
	 */
	exitLeftJustify?: (ctx: LeftJustifyContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.lengthValue`.
	 * @param ctx the parse tree
	 */
	enterLengthValue?: (ctx: LengthValueContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.lengthValue`.
	 * @param ctx the parse tree
	 */
	exitLengthValue?: (ctx: LengthValueContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.lessThan`.
	 * @param ctx the parse tree
	 */
	enterLessThan?: (ctx: LessThanContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.lessThan`.
	 * @param ctx the parse tree
	 */
	exitLessThan?: (ctx: LessThanContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.lessThanOrEqual`.
	 * @param ctx the parse tree
	 */
	enterLessThanOrEqual?: (ctx: LessThanOrEqualContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.lessThanOrEqual`.
	 * @param ctx the parse tree
	 */
	exitLessThanOrEqual?: (ctx: LessThanOrEqualContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.library`.
	 * @param ctx the parse tree
	 */
	enterLibrary?: (ctx: LibraryContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.library`.
	 * @param ctx the parse tree
	 */
	exitLibrary?: (ctx: LibraryContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.libraryHeader`.
	 * @param ctx the parse tree
	 */
	enterLibraryHeader?: (ctx: LibraryHeaderContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.libraryHeader`.
	 * @param ctx the parse tree
	 */
	exitLibraryHeader?: (ctx: LibraryHeaderContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.libraryNameCaseSensitive`.
	 * @param ctx the parse tree
	 */
	enterLibraryNameCaseSensitive?: (ctx: LibraryNameCaseSensitiveContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.libraryNameCaseSensitive`.
	 * @param ctx the parse tree
	 */
	exitLibraryNameCaseSensitive?: (ctx: LibraryNameCaseSensitiveContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.libraryNameDef`.
	 * @param ctx the parse tree
	 */
	enterLibraryNameDef?: (ctx: LibraryNameDefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.libraryNameDef`.
	 * @param ctx the parse tree
	 */
	exitLibraryNameDef?: (ctx: LibraryNameDefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.libraryNameRef`.
	 * @param ctx the parse tree
	 */
	enterLibraryNameRef?: (ctx: LibraryNameRefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.libraryNameRef`.
	 * @param ctx the parse tree
	 */
	exitLibraryNameRef?: (ctx: LibraryNameRefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.libraryObjectNameCaseSensitive`.
	 * @param ctx the parse tree
	 */
	enterLibraryObjectNameCaseSensitive?: (ctx: LibraryObjectNameCaseSensitiveContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.libraryObjectNameCaseSensitive`.
	 * @param ctx the parse tree
	 */
	exitLibraryObjectNameCaseSensitive?: (ctx: LibraryObjectNameCaseSensitiveContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.libraryObjectNameDef`.
	 * @param ctx the parse tree
	 */
	enterLibraryObjectNameDef?: (ctx: LibraryObjectNameDefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.libraryObjectNameDef`.
	 * @param ctx the parse tree
	 */
	exitLibraryObjectNameDef?: (ctx: LibraryObjectNameDefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.libraryObjectNameRef`.
	 * @param ctx the parse tree
	 */
	enterLibraryObjectNameRef?: (ctx: LibraryObjectNameRefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.libraryObjectNameRef`.
	 * @param ctx the parse tree
	 */
	exitLibraryObjectNameRef?: (ctx: LibraryObjectNameRefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.libraryRef`.
	 * @param ctx the parse tree
	 */
	enterLibraryRef?: (ctx: LibraryRefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.libraryRef`.
	 * @param ctx the parse tree
	 */
	exitLibraryRef?: (ctx: LibraryRefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.loadDelay`.
	 * @param ctx the parse tree
	 */
	enterLoadDelay?: (ctx: LoadDelayContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.loadDelay`.
	 * @param ctx the parse tree
	 */
	exitLoadDelay?: (ctx: LoadDelayContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.localPortGroup`.
	 * @param ctx the parse tree
	 */
	enterLocalPortGroup?: (ctx: LocalPortGroupContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.localPortGroup`.
	 * @param ctx the parse tree
	 */
	exitLocalPortGroup?: (ctx: LocalPortGroupContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.localPortGroupNameCaseSensitive`.
	 * @param ctx the parse tree
	 */
	enterLocalPortGroupNameCaseSensitive?: (ctx: LocalPortGroupNameCaseSensitiveContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.localPortGroupNameCaseSensitive`.
	 * @param ctx the parse tree
	 */
	exitLocalPortGroupNameCaseSensitive?: (ctx: LocalPortGroupNameCaseSensitiveContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.localPortGroupNameDef`.
	 * @param ctx the parse tree
	 */
	enterLocalPortGroupNameDef?: (ctx: LocalPortGroupNameDefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.localPortGroupNameDef`.
	 * @param ctx the parse tree
	 */
	exitLocalPortGroupNameDef?: (ctx: LocalPortGroupNameDefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.localPortGroupNameRef`.
	 * @param ctx the parse tree
	 */
	enterLocalPortGroupNameRef?: (ctx: LocalPortGroupNameRefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.localPortGroupNameRef`.
	 * @param ctx the parse tree
	 */
	exitLocalPortGroupNameRef?: (ctx: LocalPortGroupNameRefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.localPortGroupRef`.
	 * @param ctx the parse tree
	 */
	enterLocalPortGroupRef?: (ctx: LocalPortGroupRefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.localPortGroupRef`.
	 * @param ctx the parse tree
	 */
	exitLocalPortGroupRef?: (ctx: LocalPortGroupRefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.logicalConnectivity`.
	 * @param ctx the parse tree
	 */
	enterLogicalConnectivity?: (ctx: LogicalConnectivityContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.logicalConnectivity`.
	 * @param ctx the parse tree
	 */
	exitLogicalConnectivity?: (ctx: LogicalConnectivityContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.logicDefinitions`.
	 * @param ctx the parse tree
	 */
	enterLogicDefinitions?: (ctx: LogicDefinitionsContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.logicDefinitions`.
	 * @param ctx the parse tree
	 */
	exitLogicDefinitions?: (ctx: LogicDefinitionsContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.logicList`.
	 * @param ctx the parse tree
	 */
	enterLogicList?: (ctx: LogicListContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.logicList`.
	 * @param ctx the parse tree
	 */
	exitLogicList?: (ctx: LogicListContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.logicMapInput`.
	 * @param ctx the parse tree
	 */
	enterLogicMapInput?: (ctx: LogicMapInputContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.logicMapInput`.
	 * @param ctx the parse tree
	 */
	exitLogicMapInput?: (ctx: LogicMapInputContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.logicMapOutput`.
	 * @param ctx the parse tree
	 */
	enterLogicMapOutput?: (ctx: LogicMapOutputContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.logicMapOutput`.
	 * @param ctx the parse tree
	 */
	exitLogicMapOutput?: (ctx: LogicMapOutputContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.logicModelUnits`.
	 * @param ctx the parse tree
	 */
	enterLogicModelUnits?: (ctx: LogicModelUnitsContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.logicModelUnits`.
	 * @param ctx the parse tree
	 */
	exitLogicModelUnits?: (ctx: LogicModelUnitsContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.logicModelView`.
	 * @param ctx the parse tree
	 */
	enterLogicModelView?: (ctx: LogicModelViewContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.logicModelView`.
	 * @param ctx the parse tree
	 */
	exitLogicModelView?: (ctx: LogicModelViewContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.logicNameDef`.
	 * @param ctx the parse tree
	 */
	enterLogicNameDef?: (ctx: LogicNameDefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.logicNameDef`.
	 * @param ctx the parse tree
	 */
	exitLogicNameDef?: (ctx: LogicNameDefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.logicNameRef`.
	 * @param ctx the parse tree
	 */
	enterLogicNameRef?: (ctx: LogicNameRefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.logicNameRef`.
	 * @param ctx the parse tree
	 */
	exitLogicNameRef?: (ctx: LogicNameRefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.logicOneOf`.
	 * @param ctx the parse tree
	 */
	enterLogicOneOf?: (ctx: LogicOneOfContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.logicOneOf`.
	 * @param ctx the parse tree
	 */
	exitLogicOneOf?: (ctx: LogicOneOfContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.logicRef`.
	 * @param ctx the parse tree
	 */
	enterLogicRef?: (ctx: LogicRefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.logicRef`.
	 * @param ctx the parse tree
	 */
	exitLogicRef?: (ctx: LogicRefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.logicValue`.
	 * @param ctx the parse tree
	 */
	enterLogicValue?: (ctx: LogicValueContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.logicValue`.
	 * @param ctx the parse tree
	 */
	exitLogicValue?: (ctx: LogicValueContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.lsbToMsb`.
	 * @param ctx the parse tree
	 */
	enterLsbToMsb?: (ctx: LsbToMsbContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.lsbToMsb`.
	 * @param ctx the parse tree
	 */
	exitLsbToMsb?: (ctx: LsbToMsbContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.mantissa`.
	 * @param ctx the parse tree
	 */
	enterMantissa?: (ctx: MantissaContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.mantissa`.
	 * @param ctx the parse tree
	 */
	exitMantissa?: (ctx: MantissaContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.mark`.
	 * @param ctx the parse tree
	 */
	enterMark?: (ctx: MarkContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.mark`.
	 * @param ctx the parse tree
	 */
	exitMark?: (ctx: MarkContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.maskLayoutUnits`.
	 * @param ctx the parse tree
	 */
	enterMaskLayoutUnits?: (ctx: MaskLayoutUnitsContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.maskLayoutUnits`.
	 * @param ctx the parse tree
	 */
	exitMaskLayoutUnits?: (ctx: MaskLayoutUnitsContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.maskLayoutView`.
	 * @param ctx the parse tree
	 */
	enterMaskLayoutView?: (ctx: MaskLayoutViewContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.maskLayoutView`.
	 * @param ctx the parse tree
	 */
	exitMaskLayoutView?: (ctx: MaskLayoutViewContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.measured`.
	 * @param ctx the parse tree
	 */
	enterMeasured?: (ctx: MeasuredContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.measured`.
	 * @param ctx the parse tree
	 */
	exitMeasured?: (ctx: MeasuredContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.meter`.
	 * @param ctx the parse tree
	 */
	enterMeter?: (ctx: MeterContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.meter`.
	 * @param ctx the parse tree
	 */
	exitMeter?: (ctx: MeterContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.middleJustify`.
	 * @param ctx the parse tree
	 */
	enterMiddleJustify?: (ctx: MiddleJustifyContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.middleJustify`.
	 * @param ctx the parse tree
	 */
	exitMiddleJustify?: (ctx: MiddleJustifyContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.minimalWidth`.
	 * @param ctx the parse tree
	 */
	enterMinimalWidth?: (ctx: MinimalWidthContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.minimalWidth`.
	 * @param ctx the parse tree
	 */
	exitMinimalWidth?: (ctx: MinimalWidthContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.minimumStringLength`.
	 * @param ctx the parse tree
	 */
	enterMinimumStringLength?: (ctx: MinimumStringLengthContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.minimumStringLength`.
	 * @param ctx the parse tree
	 */
	exitMinimumStringLength?: (ctx: MinimumStringLengthContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.miNoMax`.
	 * @param ctx the parse tree
	 */
	enterMiNoMax?: (ctx: MiNoMaxContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.miNoMax`.
	 * @param ctx the parse tree
	 */
	exitMiNoMax?: (ctx: MiNoMaxContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.miNoMaxValue`.
	 * @param ctx the parse tree
	 */
	enterMiNoMaxValue?: (ctx: MiNoMaxValueContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.miNoMaxValue`.
	 * @param ctx the parse tree
	 */
	exitMiNoMaxValue?: (ctx: MiNoMaxValueContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.minuend`.
	 * @param ctx the parse tree
	 */
	enterMinuend?: (ctx: MinuendContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.minuend`.
	 * @param ctx the parse tree
	 */
	exitMinuend?: (ctx: MinuendContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.minuteNumber`.
	 * @param ctx the parse tree
	 */
	enterMinuteNumber?: (ctx: MinuteNumberContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.minuteNumber`.
	 * @param ctx the parse tree
	 */
	exitMinuteNumber?: (ctx: MinuteNumberContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.mixedDirection`.
	 * @param ctx the parse tree
	 */
	enterMixedDirection?: (ctx: MixedDirectionContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.mixedDirection`.
	 * @param ctx the parse tree
	 */
	exitMixedDirection?: (ctx: MixedDirectionContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.mnm`.
	 * @param ctx the parse tree
	 */
	enterMnm?: (ctx: MnmContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.mnm`.
	 * @param ctx the parse tree
	 */
	exitMnm?: (ctx: MnmContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.mole`.
	 * @param ctx the parse tree
	 */
	enterMole?: (ctx: MoleContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.mole`.
	 * @param ctx the parse tree
	 */
	exitMole?: (ctx: MoleContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.monthNumber`.
	 * @param ctx the parse tree
	 */
	enterMonthNumber?: (ctx: MonthNumberContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.monthNumber`.
	 * @param ctx the parse tree
	 */
	exitMonthNumber?: (ctx: MonthNumberContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.msbToLsb`.
	 * @param ctx the parse tree
	 */
	enterMsbToLsb?: (ctx: MsbToLsbContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.msbToLsb`.
	 * @param ctx the parse tree
	 */
	exitMsbToLsb?: (ctx: MsbToLsbContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.mustJoin`.
	 * @param ctx the parse tree
	 */
	enterMustJoin?: (ctx: MustJoinContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.mustJoin`.
	 * @param ctx the parse tree
	 */
	exitMustJoin?: (ctx: MustJoinContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.nameAlias`.
	 * @param ctx the parse tree
	 */
	enterNameAlias?: (ctx: NameAliasContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.nameAlias`.
	 * @param ctx the parse tree
	 */
	exitNameAlias?: (ctx: NameAliasContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.nameCaseSensitivity`.
	 * @param ctx the parse tree
	 */
	enterNameCaseSensitivity?: (ctx: NameCaseSensitivityContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.nameCaseSensitivity`.
	 * @param ctx the parse tree
	 */
	exitNameCaseSensitivity?: (ctx: NameCaseSensitivityContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.nameDef`.
	 * @param ctx the parse tree
	 */
	enterNameDef?: (ctx: NameDefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.nameDef`.
	 * @param ctx the parse tree
	 */
	exitNameDef?: (ctx: NameDefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.nameDimension`.
	 * @param ctx the parse tree
	 */
	enterNameDimension?: (ctx: NameDimensionContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.nameDimension`.
	 * @param ctx the parse tree
	 */
	exitNameDimension?: (ctx: NameDimensionContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.nameDimensionStructure`.
	 * @param ctx the parse tree
	 */
	enterNameDimensionStructure?: (ctx: NameDimensionStructureContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.nameDimensionStructure`.
	 * @param ctx the parse tree
	 */
	exitNameDimensionStructure?: (ctx: NameDimensionStructureContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.nameInformation`.
	 * @param ctx the parse tree
	 */
	enterNameInformation?: (ctx: NameInformationContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.nameInformation`.
	 * @param ctx the parse tree
	 */
	exitNameInformation?: (ctx: NameInformationContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.namePartSeparator`.
	 * @param ctx the parse tree
	 */
	enterNamePartSeparator?: (ctx: NamePartSeparatorContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.namePartSeparator`.
	 * @param ctx the parse tree
	 */
	exitNamePartSeparator?: (ctx: NamePartSeparatorContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.nameRef`.
	 * @param ctx the parse tree
	 */
	enterNameRef?: (ctx: NameRefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.nameRef`.
	 * @param ctx the parse tree
	 */
	exitNameRef?: (ctx: NameRefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.nameStructure`.
	 * @param ctx the parse tree
	 */
	enterNameStructure?: (ctx: NameStructureContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.nameStructure`.
	 * @param ctx the parse tree
	 */
	exitNameStructure?: (ctx: NameStructureContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.narrowPort`.
	 * @param ctx the parse tree
	 */
	enterNarrowPort?: (ctx: NarrowPortContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.narrowPort`.
	 * @param ctx the parse tree
	 */
	exitNarrowPort?: (ctx: NarrowPortContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.narrowWire`.
	 * @param ctx the parse tree
	 */
	enterNarrowWire?: (ctx: NarrowWireContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.narrowWire`.
	 * @param ctx the parse tree
	 */
	exitNarrowWire?: (ctx: NarrowWireContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.noHotspotGrid`.
	 * @param ctx the parse tree
	 */
	enterNoHotspotGrid?: (ctx: NoHotspotGridContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.noHotspotGrid`.
	 * @param ctx the parse tree
	 */
	exitNoHotspotGrid?: (ctx: NoHotspotGridContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.nominalHotspotGrid`.
	 * @param ctx the parse tree
	 */
	enterNominalHotspotGrid?: (ctx: NominalHotspotGridContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.nominalHotspotGrid`.
	 * @param ctx the parse tree
	 */
	exitNominalHotspotGrid?: (ctx: NominalHotspotGridContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.nonPermutable`.
	 * @param ctx the parse tree
	 */
	enterNonPermutable?: (ctx: NonPermutableContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.nonPermutable`.
	 * @param ctx the parse tree
	 */
	exitNonPermutable?: (ctx: NonPermutableContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.not_`.
	 * @param ctx the parse tree
	 */
	enterNot_?: (ctx: Not_Context) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.not_`.
	 * @param ctx the parse tree
	 */
	exitNot_?: (ctx: Not_Context) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.notInherited`.
	 * @param ctx the parse tree
	 */
	enterNotInherited?: (ctx: NotInheritedContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.notInherited`.
	 * @param ctx the parse tree
	 */
	exitNotInherited?: (ctx: NotInheritedContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.number`.
	 * @param ctx the parse tree
	 */
	enterNumber?: (ctx: NumberContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.number`.
	 * @param ctx the parse tree
	 */
	exitNumber?: (ctx: NumberContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.numberExpression`.
	 * @param ctx the parse tree
	 */
	enterNumberExpression?: (ctx: NumberExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.numberExpression`.
	 * @param ctx the parse tree
	 */
	exitNumberExpression?: (ctx: NumberExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.numberOfBasicUnits`.
	 * @param ctx the parse tree
	 */
	enterNumberOfBasicUnits?: (ctx: NumberOfBasicUnitsContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.numberOfBasicUnits`.
	 * @param ctx the parse tree
	 */
	exitNumberOfBasicUnits?: (ctx: NumberOfBasicUnitsContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.numberOfNewUnits`.
	 * @param ctx the parse tree
	 */
	enterNumberOfNewUnits?: (ctx: NumberOfNewUnitsContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.numberOfNewUnits`.
	 * @param ctx the parse tree
	 */
	exitNumberOfNewUnits?: (ctx: NumberOfNewUnitsContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.numberParameter`.
	 * @param ctx the parse tree
	 */
	enterNumberParameter?: (ctx: NumberParameterContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.numberParameter`.
	 * @param ctx the parse tree
	 */
	exitNumberParameter?: (ctx: NumberParameterContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.numberParameterAssign`.
	 * @param ctx the parse tree
	 */
	enterNumberParameterAssign?: (ctx: NumberParameterAssignContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.numberParameterAssign`.
	 * @param ctx the parse tree
	 */
	exitNumberParameterAssign?: (ctx: NumberParameterAssignContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.numberParameterRef`.
	 * @param ctx the parse tree
	 */
	enterNumberParameterRef?: (ctx: NumberParameterRefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.numberParameterRef`.
	 * @param ctx the parse tree
	 */
	exitNumberParameterRef?: (ctx: NumberParameterRefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.numberPoint`.
	 * @param ctx the parse tree
	 */
	enterNumberPoint?: (ctx: NumberPointContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.numberPoint`.
	 * @param ctx the parse tree
	 */
	exitNumberPoint?: (ctx: NumberPointContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.numberValue`.
	 * @param ctx the parse tree
	 */
	enterNumberValue?: (ctx: NumberValueContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.numberValue`.
	 * @param ctx the parse tree
	 */
	exitNumberValue?: (ctx: NumberValueContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.numerator`.
	 * @param ctx the parse tree
	 */
	enterNumerator?: (ctx: NumeratorContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.numerator`.
	 * @param ctx the parse tree
	 */
	exitNumerator?: (ctx: NumeratorContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.occurrenceAnnotate`.
	 * @param ctx the parse tree
	 */
	enterOccurrenceAnnotate?: (ctx: OccurrenceAnnotateContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.occurrenceAnnotate`.
	 * @param ctx the parse tree
	 */
	exitOccurrenceAnnotate?: (ctx: OccurrenceAnnotateContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.occurrenceHierarchyAnnotate`.
	 * @param ctx the parse tree
	 */
	enterOccurrenceHierarchyAnnotate?: (ctx: OccurrenceHierarchyAnnotateContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.occurrenceHierarchyAnnotate`.
	 * @param ctx the parse tree
	 */
	exitOccurrenceHierarchyAnnotate?: (ctx: OccurrenceHierarchyAnnotateContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.offsetEvent`.
	 * @param ctx the parse tree
	 */
	enterOffsetEvent?: (ctx: OffsetEventContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.offsetEvent`.
	 * @param ctx the parse tree
	 */
	exitOffsetEvent?: (ctx: OffsetEventContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.ohm`.
	 * @param ctx the parse tree
	 */
	enterOhm?: (ctx: OhmContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.ohm`.
	 * @param ctx the parse tree
	 */
	exitOhm?: (ctx: OhmContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.openShape`.
	 * @param ctx the parse tree
	 */
	enterOpenShape?: (ctx: OpenShapeContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.openShape`.
	 * @param ctx the parse tree
	 */
	exitOpenShape?: (ctx: OpenShapeContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.or_`.
	 * @param ctx the parse tree
	 */
	enterOr_?: (ctx: Or_Context) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.or_`.
	 * @param ctx the parse tree
	 */
	exitOr_?: (ctx: Or_Context) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.origin`.
	 * @param ctx the parse tree
	 */
	enterOrigin?: (ctx: OriginContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.origin`.
	 * @param ctx the parse tree
	 */
	exitOrigin?: (ctx: OriginContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.originalBoundingBox`.
	 * @param ctx the parse tree
	 */
	enterOriginalBoundingBox?: (ctx: OriginalBoundingBoxContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.originalBoundingBox`.
	 * @param ctx the parse tree
	 */
	exitOriginalBoundingBox?: (ctx: OriginalBoundingBoxContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.originalDrawingDate`.
	 * @param ctx the parse tree
	 */
	enterOriginalDrawingDate?: (ctx: OriginalDrawingDateContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.originalDrawingDate`.
	 * @param ctx the parse tree
	 */
	exitOriginalDrawingDate?: (ctx: OriginalDrawingDateContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.originalDrawingDateDisplay`.
	 * @param ctx the parse tree
	 */
	enterOriginalDrawingDateDisplay?: (ctx: OriginalDrawingDateDisplayContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.originalDrawingDateDisplay`.
	 * @param ctx the parse tree
	 */
	exitOriginalDrawingDateDisplay?: (ctx: OriginalDrawingDateDisplayContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.originalName`.
	 * @param ctx the parse tree
	 */
	enterOriginalName?: (ctx: OriginalNameContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.originalName`.
	 * @param ctx the parse tree
	 */
	exitOriginalName?: (ctx: OriginalNameContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.otherwiseFrame`.
	 * @param ctx the parse tree
	 */
	enterOtherwiseFrame?: (ctx: OtherwiseFrameContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.otherwiseFrame`.
	 * @param ctx the parse tree
	 */
	exitOtherwiseFrame?: (ctx: OtherwiseFrameContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.otherwiseFrameAnnotate`.
	 * @param ctx the parse tree
	 */
	enterOtherwiseFrameAnnotate?: (ctx: OtherwiseFrameAnnotateContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.otherwiseFrameAnnotate`.
	 * @param ctx the parse tree
	 */
	exitOtherwiseFrameAnnotate?: (ctx: OtherwiseFrameAnnotateContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.otherwiseFrameRef`.
	 * @param ctx the parse tree
	 */
	enterOtherwiseFrameRef?: (ctx: OtherwiseFrameRefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.otherwiseFrameRef`.
	 * @param ctx the parse tree
	 */
	exitOtherwiseFrameRef?: (ctx: OtherwiseFrameRefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.output`.
	 * @param ctx the parse tree
	 */
	enterOutput?: (ctx: OutputContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.output`.
	 * @param ctx the parse tree
	 */
	exitOutput?: (ctx: OutputContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.outputPort`.
	 * @param ctx the parse tree
	 */
	enterOutputPort?: (ctx: OutputPortContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.outputPort`.
	 * @param ctx the parse tree
	 */
	exitOutputPort?: (ctx: OutputPortContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.outputPortAttributes`.
	 * @param ctx the parse tree
	 */
	enterOutputPortAttributes?: (ctx: OutputPortAttributesContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.outputPortAttributes`.
	 * @param ctx the parse tree
	 */
	exitOutputPortAttributes?: (ctx: OutputPortAttributesContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.owner`.
	 * @param ctx the parse tree
	 */
	enterOwner?: (ctx: OwnerContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.owner`.
	 * @param ctx the parse tree
	 */
	exitOwner?: (ctx: OwnerContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.page`.
	 * @param ctx the parse tree
	 */
	enterPage?: (ctx: PageContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.page`.
	 * @param ctx the parse tree
	 */
	exitPage?: (ctx: PageContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.pageAnnotate`.
	 * @param ctx the parse tree
	 */
	enterPageAnnotate?: (ctx: PageAnnotateContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.pageAnnotate`.
	 * @param ctx the parse tree
	 */
	exitPageAnnotate?: (ctx: PageAnnotateContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.pageBorder`.
	 * @param ctx the parse tree
	 */
	enterPageBorder?: (ctx: PageBorderContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.pageBorder`.
	 * @param ctx the parse tree
	 */
	exitPageBorder?: (ctx: PageBorderContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.pageBorderTemplate`.
	 * @param ctx the parse tree
	 */
	enterPageBorderTemplate?: (ctx: PageBorderTemplateContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.pageBorderTemplate`.
	 * @param ctx the parse tree
	 */
	exitPageBorderTemplate?: (ctx: PageBorderTemplateContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.pageBorderTemplateRef`.
	 * @param ctx the parse tree
	 */
	enterPageBorderTemplateRef?: (ctx: PageBorderTemplateRefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.pageBorderTemplateRef`.
	 * @param ctx the parse tree
	 */
	exitPageBorderTemplateRef?: (ctx: PageBorderTemplateRefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.pageCommentGraphics`.
	 * @param ctx the parse tree
	 */
	enterPageCommentGraphics?: (ctx: PageCommentGraphicsContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.pageCommentGraphics`.
	 * @param ctx the parse tree
	 */
	exitPageCommentGraphics?: (ctx: PageCommentGraphicsContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.pageHeader`.
	 * @param ctx the parse tree
	 */
	enterPageHeader?: (ctx: PageHeaderContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.pageHeader`.
	 * @param ctx the parse tree
	 */
	exitPageHeader?: (ctx: PageHeaderContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.pageIdentification`.
	 * @param ctx the parse tree
	 */
	enterPageIdentification?: (ctx: PageIdentificationContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.pageIdentification`.
	 * @param ctx the parse tree
	 */
	exitPageIdentification?: (ctx: PageIdentificationContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.pageIdentificationDisplay`.
	 * @param ctx the parse tree
	 */
	enterPageIdentificationDisplay?: (ctx: PageIdentificationDisplayContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.pageIdentificationDisplay`.
	 * @param ctx the parse tree
	 */
	exitPageIdentificationDisplay?: (ctx: PageIdentificationDisplayContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.pageNameCaseSensitive`.
	 * @param ctx the parse tree
	 */
	enterPageNameCaseSensitive?: (ctx: PageNameCaseSensitiveContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.pageNameCaseSensitive`.
	 * @param ctx the parse tree
	 */
	exitPageNameCaseSensitive?: (ctx: PageNameCaseSensitiveContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.pageNameDef`.
	 * @param ctx the parse tree
	 */
	enterPageNameDef?: (ctx: PageNameDefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.pageNameDef`.
	 * @param ctx the parse tree
	 */
	exitPageNameDef?: (ctx: PageNameDefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.pageNameRef`.
	 * @param ctx the parse tree
	 */
	enterPageNameRef?: (ctx: PageNameRefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.pageNameRef`.
	 * @param ctx the parse tree
	 */
	exitPageNameRef?: (ctx: PageNameRefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.pagePropertyDisplay`.
	 * @param ctx the parse tree
	 */
	enterPagePropertyDisplay?: (ctx: PagePropertyDisplayContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.pagePropertyDisplay`.
	 * @param ctx the parse tree
	 */
	exitPagePropertyDisplay?: (ctx: PagePropertyDisplayContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.pageRef`.
	 * @param ctx the parse tree
	 */
	enterPageRef?: (ctx: PageRefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.pageRef`.
	 * @param ctx the parse tree
	 */
	exitPageRef?: (ctx: PageRefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.pageSize`.
	 * @param ctx the parse tree
	 */
	enterPageSize?: (ctx: PageSizeContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.pageSize`.
	 * @param ctx the parse tree
	 */
	exitPageSize?: (ctx: PageSizeContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.pageTitle`.
	 * @param ctx the parse tree
	 */
	enterPageTitle?: (ctx: PageTitleContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.pageTitle`.
	 * @param ctx the parse tree
	 */
	exitPageTitle?: (ctx: PageTitleContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.pageTitleBlock`.
	 * @param ctx the parse tree
	 */
	enterPageTitleBlock?: (ctx: PageTitleBlockContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.pageTitleBlock`.
	 * @param ctx the parse tree
	 */
	exitPageTitleBlock?: (ctx: PageTitleBlockContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.pageTitleBlockAttributeDisplay`.
	 * @param ctx the parse tree
	 */
	enterPageTitleBlockAttributeDisplay?: (ctx: PageTitleBlockAttributeDisplayContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.pageTitleBlockAttributeDisplay`.
	 * @param ctx the parse tree
	 */
	exitPageTitleBlockAttributeDisplay?: (ctx: PageTitleBlockAttributeDisplayContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.pageTitleBlockAttributes`.
	 * @param ctx the parse tree
	 */
	enterPageTitleBlockAttributes?: (ctx: PageTitleBlockAttributesContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.pageTitleBlockAttributes`.
	 * @param ctx the parse tree
	 */
	exitPageTitleBlockAttributes?: (ctx: PageTitleBlockAttributesContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.pageTitleBlockTemplate`.
	 * @param ctx the parse tree
	 */
	enterPageTitleBlockTemplate?: (ctx: PageTitleBlockTemplateContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.pageTitleBlockTemplate`.
	 * @param ctx the parse tree
	 */
	exitPageTitleBlockTemplate?: (ctx: PageTitleBlockTemplateContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.pageTitleBlockTemplateRef`.
	 * @param ctx the parse tree
	 */
	enterPageTitleBlockTemplateRef?: (ctx: PageTitleBlockTemplateRefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.pageTitleBlockTemplateRef`.
	 * @param ctx the parse tree
	 */
	exitPageTitleBlockTemplateRef?: (ctx: PageTitleBlockTemplateRefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.pageTitleDisplay`.
	 * @param ctx the parse tree
	 */
	enterPageTitleDisplay?: (ctx: PageTitleDisplayContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.pageTitleDisplay`.
	 * @param ctx the parse tree
	 */
	exitPageTitleDisplay?: (ctx: PageTitleDisplayContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.parameterDisplay`.
	 * @param ctx the parse tree
	 */
	enterParameterDisplay?: (ctx: ParameterDisplayContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.parameterDisplay`.
	 * @param ctx the parse tree
	 */
	exitParameterDisplay?: (ctx: ParameterDisplayContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.parameterNameCaseSensitive`.
	 * @param ctx the parse tree
	 */
	enterParameterNameCaseSensitive?: (ctx: ParameterNameCaseSensitiveContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.parameterNameCaseSensitive`.
	 * @param ctx the parse tree
	 */
	exitParameterNameCaseSensitive?: (ctx: ParameterNameCaseSensitiveContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.parameterNameDef`.
	 * @param ctx the parse tree
	 */
	enterParameterNameDef?: (ctx: ParameterNameDefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.parameterNameDef`.
	 * @param ctx the parse tree
	 */
	exitParameterNameDef?: (ctx: ParameterNameDefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.parameterNameDisplay`.
	 * @param ctx the parse tree
	 */
	enterParameterNameDisplay?: (ctx: ParameterNameDisplayContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.parameterNameDisplay`.
	 * @param ctx the parse tree
	 */
	exitParameterNameDisplay?: (ctx: ParameterNameDisplayContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.parameterNameRef`.
	 * @param ctx the parse tree
	 */
	enterParameterNameRef?: (ctx: ParameterNameRefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.parameterNameRef`.
	 * @param ctx the parse tree
	 */
	exitParameterNameRef?: (ctx: ParameterNameRefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.path`.
	 * @param ctx the parse tree
	 */
	enterPath?: (ctx: PathContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.path`.
	 * @param ctx the parse tree
	 */
	exitPath?: (ctx: PathContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.pathDelay`.
	 * @param ctx the parse tree
	 */
	enterPathDelay?: (ctx: PathDelayContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.pathDelay`.
	 * @param ctx the parse tree
	 */
	exitPathDelay?: (ctx: PathDelayContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.pathWidth`.
	 * @param ctx the parse tree
	 */
	enterPathWidth?: (ctx: PathWidthContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.pathWidth`.
	 * @param ctx the parse tree
	 */
	exitPathWidth?: (ctx: PathWidthContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.pcbLayoutUnits`.
	 * @param ctx the parse tree
	 */
	enterPcbLayoutUnits?: (ctx: PcbLayoutUnitsContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.pcbLayoutUnits`.
	 * @param ctx the parse tree
	 */
	exitPcbLayoutUnits?: (ctx: PcbLayoutUnitsContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.pcbLayoutView`.
	 * @param ctx the parse tree
	 */
	enterPcbLayoutView?: (ctx: PcbLayoutViewContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.pcbLayoutView`.
	 * @param ctx the parse tree
	 */
	exitPcbLayoutView?: (ctx: PcbLayoutViewContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.permutable`.
	 * @param ctx the parse tree
	 */
	enterPermutable?: (ctx: PermutableContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.permutable`.
	 * @param ctx the parse tree
	 */
	exitPermutable?: (ctx: PermutableContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.physicalDefaults`.
	 * @param ctx the parse tree
	 */
	enterPhysicalDefaults?: (ctx: PhysicalDefaultsContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.physicalDefaults`.
	 * @param ctx the parse tree
	 */
	exitPhysicalDefaults?: (ctx: PhysicalDefaultsContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.physicalScaling`.
	 * @param ctx the parse tree
	 */
	enterPhysicalScaling?: (ctx: PhysicalScalingContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.physicalScaling`.
	 * @param ctx the parse tree
	 */
	exitPhysicalScaling?: (ctx: PhysicalScalingContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.pixelPattern`.
	 * @param ctx the parse tree
	 */
	enterPixelPattern?: (ctx: PixelPatternContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.pixelPattern`.
	 * @param ctx the parse tree
	 */
	exitPixelPattern?: (ctx: PixelPatternContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.pixelRow`.
	 * @param ctx the parse tree
	 */
	enterPixelRow?: (ctx: PixelRowContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.pixelRow`.
	 * @param ctx the parse tree
	 */
	exitPixelRow?: (ctx: PixelRowContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.point`.
	 * @param ctx the parse tree
	 */
	enterPoint?: (ctx: PointContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.point`.
	 * @param ctx the parse tree
	 */
	exitPoint?: (ctx: PointContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.pointList`.
	 * @param ctx the parse tree
	 */
	enterPointList?: (ctx: PointListContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.pointList`.
	 * @param ctx the parse tree
	 */
	exitPointList?: (ctx: PointListContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.pointValue`.
	 * @param ctx the parse tree
	 */
	enterPointValue?: (ctx: PointValueContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.pointValue`.
	 * @param ctx the parse tree
	 */
	exitPointValue?: (ctx: PointValueContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.polygon`.
	 * @param ctx the parse tree
	 */
	enterPolygon?: (ctx: PolygonContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.polygon`.
	 * @param ctx the parse tree
	 */
	exitPolygon?: (ctx: PolygonContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.port`.
	 * @param ctx the parse tree
	 */
	enterPort?: (ctx: PortContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.port`.
	 * @param ctx the parse tree
	 */
	exitPort?: (ctx: PortContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.portAnnotate`.
	 * @param ctx the parse tree
	 */
	enterPortAnnotate?: (ctx: PortAnnotateContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.portAnnotate`.
	 * @param ctx the parse tree
	 */
	exitPortAnnotate?: (ctx: PortAnnotateContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.portAttributeDisplay`.
	 * @param ctx the parse tree
	 */
	enterPortAttributeDisplay?: (ctx: PortAttributeDisplayContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.portAttributeDisplay`.
	 * @param ctx the parse tree
	 */
	exitPortAttributeDisplay?: (ctx: PortAttributeDisplayContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.portBundle`.
	 * @param ctx the parse tree
	 */
	enterPortBundle?: (ctx: PortBundleContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.portBundle`.
	 * @param ctx the parse tree
	 */
	exitPortBundle?: (ctx: PortBundleContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.portDelay`.
	 * @param ctx the parse tree
	 */
	enterPortDelay?: (ctx: PortDelayContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.portDelay`.
	 * @param ctx the parse tree
	 */
	exitPortDelay?: (ctx: PortDelayContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.portDelayDisplay`.
	 * @param ctx the parse tree
	 */
	enterPortDelayDisplay?: (ctx: PortDelayDisplayContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.portDelayDisplay`.
	 * @param ctx the parse tree
	 */
	exitPortDelayDisplay?: (ctx: PortDelayDisplayContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.portDelayNameDef`.
	 * @param ctx the parse tree
	 */
	enterPortDelayNameDef?: (ctx: PortDelayNameDefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.portDelayNameDef`.
	 * @param ctx the parse tree
	 */
	exitPortDelayNameDef?: (ctx: PortDelayNameDefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.portDelayNameRef`.
	 * @param ctx the parse tree
	 */
	enterPortDelayNameRef?: (ctx: PortDelayNameRefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.portDelayNameRef`.
	 * @param ctx the parse tree
	 */
	exitPortDelayNameRef?: (ctx: PortDelayNameRefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.portDelayOverride`.
	 * @param ctx the parse tree
	 */
	enterPortDelayOverride?: (ctx: PortDelayOverrideContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.portDelayOverride`.
	 * @param ctx the parse tree
	 */
	exitPortDelayOverride?: (ctx: PortDelayOverrideContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.portDirection`.
	 * @param ctx the parse tree
	 */
	enterPortDirection?: (ctx: PortDirectionContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.portDirection`.
	 * @param ctx the parse tree
	 */
	exitPortDirection?: (ctx: PortDirectionContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.portDirectionIndicator`.
	 * @param ctx the parse tree
	 */
	enterPortDirectionIndicator?: (ctx: PortDirectionIndicatorContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.portDirectionIndicator`.
	 * @param ctx the parse tree
	 */
	exitPortDirectionIndicator?: (ctx: PortDirectionIndicatorContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.portIndexValue`.
	 * @param ctx the parse tree
	 */
	enterPortIndexValue?: (ctx: PortIndexValueContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.portIndexValue`.
	 * @param ctx the parse tree
	 */
	exitPortIndexValue?: (ctx: PortIndexValueContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.portInstanceRef`.
	 * @param ctx the parse tree
	 */
	enterPortInstanceRef?: (ctx: PortInstanceRefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.portInstanceRef`.
	 * @param ctx the parse tree
	 */
	exitPortInstanceRef?: (ctx: PortInstanceRefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.portJoined`.
	 * @param ctx the parse tree
	 */
	enterPortJoined?: (ctx: PortJoinedContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.portJoined`.
	 * @param ctx the parse tree
	 */
	exitPortJoined?: (ctx: PortJoinedContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.portList`.
	 * @param ctx the parse tree
	 */
	enterPortList?: (ctx: PortListContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.portList`.
	 * @param ctx the parse tree
	 */
	exitPortList?: (ctx: PortListContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.portLoadDelay`.
	 * @param ctx the parse tree
	 */
	enterPortLoadDelay?: (ctx: PortLoadDelayContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.portLoadDelay`.
	 * @param ctx the parse tree
	 */
	exitPortLoadDelay?: (ctx: PortLoadDelayContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.portLoadDelayDisplay`.
	 * @param ctx the parse tree
	 */
	enterPortLoadDelayDisplay?: (ctx: PortLoadDelayDisplayContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.portLoadDelayDisplay`.
	 * @param ctx the parse tree
	 */
	exitPortLoadDelayDisplay?: (ctx: PortLoadDelayDisplayContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.portLoadDelayNameDef`.
	 * @param ctx the parse tree
	 */
	enterPortLoadDelayNameDef?: (ctx: PortLoadDelayNameDefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.portLoadDelayNameDef`.
	 * @param ctx the parse tree
	 */
	exitPortLoadDelayNameDef?: (ctx: PortLoadDelayNameDefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.portLoadDelayNameRef`.
	 * @param ctx the parse tree
	 */
	enterPortLoadDelayNameRef?: (ctx: PortLoadDelayNameRefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.portLoadDelayNameRef`.
	 * @param ctx the parse tree
	 */
	exitPortLoadDelayNameRef?: (ctx: PortLoadDelayNameRefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.portLoadDelayOverride`.
	 * @param ctx the parse tree
	 */
	enterPortLoadDelayOverride?: (ctx: PortLoadDelayOverrideContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.portLoadDelayOverride`.
	 * @param ctx the parse tree
	 */
	exitPortLoadDelayOverride?: (ctx: PortLoadDelayOverrideContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.portMemberRef`.
	 * @param ctx the parse tree
	 */
	enterPortMemberRef?: (ctx: PortMemberRefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.portMemberRef`.
	 * @param ctx the parse tree
	 */
	exitPortMemberRef?: (ctx: PortMemberRefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.portNameCaseSensitive`.
	 * @param ctx the parse tree
	 */
	enterPortNameCaseSensitive?: (ctx: PortNameCaseSensitiveContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.portNameCaseSensitive`.
	 * @param ctx the parse tree
	 */
	exitPortNameCaseSensitive?: (ctx: PortNameCaseSensitiveContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.portNameDef`.
	 * @param ctx the parse tree
	 */
	enterPortNameDef?: (ctx: PortNameDefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.portNameDef`.
	 * @param ctx the parse tree
	 */
	exitPortNameDef?: (ctx: PortNameDefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.portNameDisplay`.
	 * @param ctx the parse tree
	 */
	enterPortNameDisplay?: (ctx: PortNameDisplayContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.portNameDisplay`.
	 * @param ctx the parse tree
	 */
	exitPortNameDisplay?: (ctx: PortNameDisplayContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.portNameGenerator`.
	 * @param ctx the parse tree
	 */
	enterPortNameGenerator?: (ctx: PortNameGeneratorContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.portNameGenerator`.
	 * @param ctx the parse tree
	 */
	exitPortNameGenerator?: (ctx: PortNameGeneratorContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.portNameGeneratorDisplay`.
	 * @param ctx the parse tree
	 */
	enterPortNameGeneratorDisplay?: (ctx: PortNameGeneratorDisplayContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.portNameGeneratorDisplay`.
	 * @param ctx the parse tree
	 */
	exitPortNameGeneratorDisplay?: (ctx: PortNameGeneratorDisplayContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.portNameRef`.
	 * @param ctx the parse tree
	 */
	enterPortNameRef?: (ctx: PortNameRefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.portNameRef`.
	 * @param ctx the parse tree
	 */
	exitPortNameRef?: (ctx: PortNameRefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.portPropertyDisplay`.
	 * @param ctx the parse tree
	 */
	enterPortPropertyDisplay?: (ctx: PortPropertyDisplayContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.portPropertyDisplay`.
	 * @param ctx the parse tree
	 */
	exitPortPropertyDisplay?: (ctx: PortPropertyDisplayContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.portPropertyDisplayOverride`.
	 * @param ctx the parse tree
	 */
	enterPortPropertyDisplayOverride?: (ctx: PortPropertyDisplayOverrideContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.portPropertyDisplayOverride`.
	 * @param ctx the parse tree
	 */
	exitPortPropertyDisplayOverride?: (ctx: PortPropertyDisplayOverrideContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.portPropertyOverride`.
	 * @param ctx the parse tree
	 */
	enterPortPropertyOverride?: (ctx: PortPropertyOverrideContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.portPropertyOverride`.
	 * @param ctx the parse tree
	 */
	exitPortPropertyOverride?: (ctx: PortPropertyOverrideContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.portRef`.
	 * @param ctx the parse tree
	 */
	enterPortRef?: (ctx: PortRefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.portRef`.
	 * @param ctx the parse tree
	 */
	exitPortRef?: (ctx: PortRefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.portSet`.
	 * @param ctx the parse tree
	 */
	enterPortSet?: (ctx: PortSetContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.portSet`.
	 * @param ctx the parse tree
	 */
	exitPortSet?: (ctx: PortSetContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.portWidth`.
	 * @param ctx the parse tree
	 */
	enterPortWidth?: (ctx: PortWidthContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.portWidth`.
	 * @param ctx the parse tree
	 */
	exitPortWidth?: (ctx: PortWidthContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.presentLogicValue`.
	 * @param ctx the parse tree
	 */
	enterPresentLogicValue?: (ctx: PresentLogicValueContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.presentLogicValue`.
	 * @param ctx the parse tree
	 */
	exitPresentLogicValue?: (ctx: PresentLogicValueContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.previousLogicValue`.
	 * @param ctx the parse tree
	 */
	enterPreviousLogicValue?: (ctx: PreviousLogicValueContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.previousLogicValue`.
	 * @param ctx the parse tree
	 */
	exitPreviousLogicValue?: (ctx: PreviousLogicValueContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.previousVersion`.
	 * @param ctx the parse tree
	 */
	enterPreviousVersion?: (ctx: PreviousVersionContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.previousVersion`.
	 * @param ctx the parse tree
	 */
	exitPreviousVersion?: (ctx: PreviousVersionContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.primaryName`.
	 * @param ctx the parse tree
	 */
	enterPrimaryName?: (ctx: PrimaryNameContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.primaryName`.
	 * @param ctx the parse tree
	 */
	exitPrimaryName?: (ctx: PrimaryNameContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.property`.
	 * @param ctx the parse tree
	 */
	enterProperty?: (ctx: PropertyContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.property`.
	 * @param ctx the parse tree
	 */
	exitProperty?: (ctx: PropertyContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.propertyDisplay`.
	 * @param ctx the parse tree
	 */
	enterPropertyDisplay?: (ctx: PropertyDisplayContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.propertyDisplay`.
	 * @param ctx the parse tree
	 */
	exitPropertyDisplay?: (ctx: PropertyDisplayContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.propertyDisplayOverride`.
	 * @param ctx the parse tree
	 */
	enterPropertyDisplayOverride?: (ctx: PropertyDisplayOverrideContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.propertyDisplayOverride`.
	 * @param ctx the parse tree
	 */
	exitPropertyDisplayOverride?: (ctx: PropertyDisplayOverrideContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.propertyInheritanceControl`.
	 * @param ctx the parse tree
	 */
	enterPropertyInheritanceControl?: (ctx: PropertyInheritanceControlContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.propertyInheritanceControl`.
	 * @param ctx the parse tree
	 */
	exitPropertyInheritanceControl?: (ctx: PropertyInheritanceControlContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.propertyNameCaseSensitive`.
	 * @param ctx the parse tree
	 */
	enterPropertyNameCaseSensitive?: (ctx: PropertyNameCaseSensitiveContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.propertyNameCaseSensitive`.
	 * @param ctx the parse tree
	 */
	exitPropertyNameCaseSensitive?: (ctx: PropertyNameCaseSensitiveContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.propertyNameDef`.
	 * @param ctx the parse tree
	 */
	enterPropertyNameDef?: (ctx: PropertyNameDefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.propertyNameDef`.
	 * @param ctx the parse tree
	 */
	exitPropertyNameDef?: (ctx: PropertyNameDefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.propertyNameDisplay`.
	 * @param ctx the parse tree
	 */
	enterPropertyNameDisplay?: (ctx: PropertyNameDisplayContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.propertyNameDisplay`.
	 * @param ctx the parse tree
	 */
	exitPropertyNameDisplay?: (ctx: PropertyNameDisplayContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.propertyNameRef`.
	 * @param ctx the parse tree
	 */
	enterPropertyNameRef?: (ctx: PropertyNameRefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.propertyNameRef`.
	 * @param ctx the parse tree
	 */
	exitPropertyNameRef?: (ctx: PropertyNameRefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.propertyOverride`.
	 * @param ctx the parse tree
	 */
	enterPropertyOverride?: (ctx: PropertyOverrideContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.propertyOverride`.
	 * @param ctx the parse tree
	 */
	exitPropertyOverride?: (ctx: PropertyOverrideContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.proportionalFont`.
	 * @param ctx the parse tree
	 */
	enterProportionalFont?: (ctx: ProportionalFontContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.proportionalFont`.
	 * @param ctx the parse tree
	 */
	exitProportionalFont?: (ctx: ProportionalFontContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.pt`.
	 * @param ctx the parse tree
	 */
	enterPt?: (ctx: PtContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.pt`.
	 * @param ctx the parse tree
	 */
	exitPt?: (ctx: PtContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.pt1`.
	 * @param ctx the parse tree
	 */
	enterPt1?: (ctx: Pt1Context) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.pt1`.
	 * @param ctx the parse tree
	 */
	exitPt1?: (ctx: Pt1Context) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.pt2`.
	 * @param ctx the parse tree
	 */
	enterPt2?: (ctx: Pt2Context) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.pt2`.
	 * @param ctx the parse tree
	 */
	exitPt2?: (ctx: Pt2Context) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.radian`.
	 * @param ctx the parse tree
	 */
	enterRadian?: (ctx: RadianContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.radian`.
	 * @param ctx the parse tree
	 */
	exitRadian?: (ctx: RadianContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.reason`.
	 * @param ctx the parse tree
	 */
	enterReason?: (ctx: ReasonContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.reason`.
	 * @param ctx the parse tree
	 */
	exitReason?: (ctx: ReasonContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.rectangle`.
	 * @param ctx the parse tree
	 */
	enterRectangle?: (ctx: RectangleContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.rectangle`.
	 * @param ctx the parse tree
	 */
	exitRectangle?: (ctx: RectangleContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.red`.
	 * @param ctx the parse tree
	 */
	enterRed?: (ctx: RedContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.red`.
	 * @param ctx the parse tree
	 */
	exitRed?: (ctx: RedContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.removeDisplay`.
	 * @param ctx the parse tree
	 */
	enterRemoveDisplay?: (ctx: RemoveDisplayContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.removeDisplay`.
	 * @param ctx the parse tree
	 */
	exitRemoveDisplay?: (ctx: RemoveDisplayContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.repetitionCount`.
	 * @param ctx the parse tree
	 */
	enterRepetitionCount?: (ctx: RepetitionCountContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.repetitionCount`.
	 * @param ctx the parse tree
	 */
	exitRepetitionCount?: (ctx: RepetitionCountContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.repetitionCountDisplay`.
	 * @param ctx the parse tree
	 */
	enterRepetitionCountDisplay?: (ctx: RepetitionCountDisplayContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.repetitionCountDisplay`.
	 * @param ctx the parse tree
	 */
	exitRepetitionCountDisplay?: (ctx: RepetitionCountDisplayContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.replaceDisplay`.
	 * @param ctx the parse tree
	 */
	enterReplaceDisplay?: (ctx: ReplaceDisplayContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.replaceDisplay`.
	 * @param ctx the parse tree
	 */
	exitReplaceDisplay?: (ctx: ReplaceDisplayContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.required`.
	 * @param ctx the parse tree
	 */
	enterRequired?: (ctx: RequiredContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.required`.
	 * @param ctx the parse tree
	 */
	exitRequired?: (ctx: RequiredContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.resolves`.
	 * @param ctx the parse tree
	 */
	enterResolves?: (ctx: ResolvesContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.resolves`.
	 * @param ctx the parse tree
	 */
	exitResolves?: (ctx: ResolvesContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.revision`.
	 * @param ctx the parse tree
	 */
	enterRevision?: (ctx: RevisionContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.revision`.
	 * @param ctx the parse tree
	 */
	exitRevision?: (ctx: RevisionContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.revisionDisplay`.
	 * @param ctx the parse tree
	 */
	enterRevisionDisplay?: (ctx: RevisionDisplayContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.revisionDisplay`.
	 * @param ctx the parse tree
	 */
	exitRevisionDisplay?: (ctx: RevisionDisplayContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.rightJustify`.
	 * @param ctx the parse tree
	 */
	enterRightJustify?: (ctx: RightJustifyContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.rightJustify`.
	 * @param ctx the parse tree
	 */
	exitRightJustify?: (ctx: RightJustifyContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.ripperHotspot`.
	 * @param ctx the parse tree
	 */
	enterRipperHotspot?: (ctx: RipperHotspotContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.ripperHotspot`.
	 * @param ctx the parse tree
	 */
	exitRipperHotspot?: (ctx: RipperHotspotContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.ripperHotspotRef`.
	 * @param ctx the parse tree
	 */
	enterRipperHotspotRef?: (ctx: RipperHotspotRefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.ripperHotspotRef`.
	 * @param ctx the parse tree
	 */
	exitRipperHotspotRef?: (ctx: RipperHotspotRefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.rotation`.
	 * @param ctx the parse tree
	 */
	enterRotation?: (ctx: RotationContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.rotation`.
	 * @param ctx the parse tree
	 */
	exitRotation?: (ctx: RotationContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.round`.
	 * @param ctx the parse tree
	 */
	enterRound?: (ctx: RoundContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.round`.
	 * @param ctx the parse tree
	 */
	exitRound?: (ctx: RoundContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.rowSize`.
	 * @param ctx the parse tree
	 */
	enterRowSize?: (ctx: RowSizeContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.rowSize`.
	 * @param ctx the parse tree
	 */
	exitRowSize?: (ctx: RowSizeContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.scaledInteger`.
	 * @param ctx the parse tree
	 */
	enterScaledInteger?: (ctx: ScaledIntegerContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.scaledInteger`.
	 * @param ctx the parse tree
	 */
	exitScaledInteger?: (ctx: ScaledIntegerContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.scaleX`.
	 * @param ctx the parse tree
	 */
	enterScaleX?: (ctx: ScaleXContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.scaleX`.
	 * @param ctx the parse tree
	 */
	exitScaleX?: (ctx: ScaleXContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.scaleY`.
	 * @param ctx the parse tree
	 */
	enterScaleY?: (ctx: ScaleYContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.scaleY`.
	 * @param ctx the parse tree
	 */
	exitScaleY?: (ctx: ScaleYContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.schematicBus`.
	 * @param ctx the parse tree
	 */
	enterSchematicBus?: (ctx: SchematicBusContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.schematicBus`.
	 * @param ctx the parse tree
	 */
	exitSchematicBus?: (ctx: SchematicBusContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.schematicBusDetails`.
	 * @param ctx the parse tree
	 */
	enterSchematicBusDetails?: (ctx: SchematicBusDetailsContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.schematicBusDetails`.
	 * @param ctx the parse tree
	 */
	exitSchematicBusDetails?: (ctx: SchematicBusDetailsContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.schematicBusGraphics`.
	 * @param ctx the parse tree
	 */
	enterSchematicBusGraphics?: (ctx: SchematicBusGraphicsContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.schematicBusGraphics`.
	 * @param ctx the parse tree
	 */
	exitSchematicBusGraphics?: (ctx: SchematicBusGraphicsContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.schematicBusJoined`.
	 * @param ctx the parse tree
	 */
	enterSchematicBusJoined?: (ctx: SchematicBusJoinedContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.schematicBusJoined`.
	 * @param ctx the parse tree
	 */
	exitSchematicBusJoined?: (ctx: SchematicBusJoinedContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.schematicBusSlice`.
	 * @param ctx the parse tree
	 */
	enterSchematicBusSlice?: (ctx: SchematicBusSliceContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.schematicBusSlice`.
	 * @param ctx the parse tree
	 */
	exitSchematicBusSlice?: (ctx: SchematicBusSliceContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.schematicComplexFigure`.
	 * @param ctx the parse tree
	 */
	enterSchematicComplexFigure?: (ctx: SchematicComplexFigureContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.schematicComplexFigure`.
	 * @param ctx the parse tree
	 */
	exitSchematicComplexFigure?: (ctx: SchematicComplexFigureContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.schematicFigureMacro`.
	 * @param ctx the parse tree
	 */
	enterSchematicFigureMacro?: (ctx: SchematicFigureMacroContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.schematicFigureMacro`.
	 * @param ctx the parse tree
	 */
	exitSchematicFigureMacro?: (ctx: SchematicFigureMacroContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.schematicFigureMacroRef`.
	 * @param ctx the parse tree
	 */
	enterSchematicFigureMacroRef?: (ctx: SchematicFigureMacroRefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.schematicFigureMacroRef`.
	 * @param ctx the parse tree
	 */
	exitSchematicFigureMacroRef?: (ctx: SchematicFigureMacroRefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.schematicForFrameBorder`.
	 * @param ctx the parse tree
	 */
	enterSchematicForFrameBorder?: (ctx: SchematicForFrameBorderContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.schematicForFrameBorder`.
	 * @param ctx the parse tree
	 */
	exitSchematicForFrameBorder?: (ctx: SchematicForFrameBorderContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.schematicForFrameBorderTemplate`.
	 * @param ctx the parse tree
	 */
	enterSchematicForFrameBorderTemplate?: (ctx: SchematicForFrameBorderTemplateContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.schematicForFrameBorderTemplate`.
	 * @param ctx the parse tree
	 */
	exitSchematicForFrameBorderTemplate?: (ctx: SchematicForFrameBorderTemplateContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.schematicForFrameBorderTemplateRef`.
	 * @param ctx the parse tree
	 */
	enterSchematicForFrameBorderTemplateRef?: (ctx: SchematicForFrameBorderTemplateRefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.schematicForFrameBorderTemplateRef`.
	 * @param ctx the parse tree
	 */
	exitSchematicForFrameBorderTemplateRef?: (ctx: SchematicForFrameBorderTemplateRefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.schematicForFrameImplementation`.
	 * @param ctx the parse tree
	 */
	enterSchematicForFrameImplementation?: (ctx: SchematicForFrameImplementationContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.schematicForFrameImplementation`.
	 * @param ctx the parse tree
	 */
	exitSchematicForFrameImplementation?: (ctx: SchematicForFrameImplementationContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.schematicForFrameImplementationHeader`.
	 * @param ctx the parse tree
	 */
	enterSchematicForFrameImplementationHeader?: (ctx: SchematicForFrameImplementationHeaderContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.schematicForFrameImplementationHeader`.
	 * @param ctx the parse tree
	 */
	exitSchematicForFrameImplementationHeader?: (ctx: SchematicForFrameImplementationHeaderContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.schematicFrameImplementationDetails`.
	 * @param ctx the parse tree
	 */
	enterSchematicFrameImplementationDetails?: (ctx: SchematicFrameImplementationDetailsContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.schematicFrameImplementationDetails`.
	 * @param ctx the parse tree
	 */
	exitSchematicFrameImplementationDetails?: (ctx: SchematicFrameImplementationDetailsContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.schematicGlobalPortAttributes`.
	 * @param ctx the parse tree
	 */
	enterSchematicGlobalPortAttributes?: (ctx: SchematicGlobalPortAttributesContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.schematicGlobalPortAttributes`.
	 * @param ctx the parse tree
	 */
	exitSchematicGlobalPortAttributes?: (ctx: SchematicGlobalPortAttributesContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.schematicGlobalPortImplementation`.
	 * @param ctx the parse tree
	 */
	enterSchematicGlobalPortImplementation?: (ctx: SchematicGlobalPortImplementationContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.schematicGlobalPortImplementation`.
	 * @param ctx the parse tree
	 */
	exitSchematicGlobalPortImplementation?: (ctx: SchematicGlobalPortImplementationContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.schematicGlobalPortImplementationRef`.
	 * @param ctx the parse tree
	 */
	enterSchematicGlobalPortImplementationRef?: (ctx: SchematicGlobalPortImplementationRefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.schematicGlobalPortImplementationRef`.
	 * @param ctx the parse tree
	 */
	exitSchematicGlobalPortImplementationRef?: (ctx: SchematicGlobalPortImplementationRefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.schematicGlobalPortTemplate`.
	 * @param ctx the parse tree
	 */
	enterSchematicGlobalPortTemplate?: (ctx: SchematicGlobalPortTemplateContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.schematicGlobalPortTemplate`.
	 * @param ctx the parse tree
	 */
	exitSchematicGlobalPortTemplate?: (ctx: SchematicGlobalPortTemplateContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.schematicGlobalPortTemplateRef`.
	 * @param ctx the parse tree
	 */
	enterSchematicGlobalPortTemplateRef?: (ctx: SchematicGlobalPortTemplateRefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.schematicGlobalPortTemplateRef`.
	 * @param ctx the parse tree
	 */
	exitSchematicGlobalPortTemplateRef?: (ctx: SchematicGlobalPortTemplateRefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.schematicIfFrameBorder`.
	 * @param ctx the parse tree
	 */
	enterSchematicIfFrameBorder?: (ctx: SchematicIfFrameBorderContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.schematicIfFrameBorder`.
	 * @param ctx the parse tree
	 */
	exitSchematicIfFrameBorder?: (ctx: SchematicIfFrameBorderContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.schematicIfFrameBorderTemplate`.
	 * @param ctx the parse tree
	 */
	enterSchematicIfFrameBorderTemplate?: (ctx: SchematicIfFrameBorderTemplateContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.schematicIfFrameBorderTemplate`.
	 * @param ctx the parse tree
	 */
	exitSchematicIfFrameBorderTemplate?: (ctx: SchematicIfFrameBorderTemplateContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.schematicIfFrameBorderTemplateRef`.
	 * @param ctx the parse tree
	 */
	enterSchematicIfFrameBorderTemplateRef?: (ctx: SchematicIfFrameBorderTemplateRefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.schematicIfFrameBorderTemplateRef`.
	 * @param ctx the parse tree
	 */
	exitSchematicIfFrameBorderTemplateRef?: (ctx: SchematicIfFrameBorderTemplateRefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.schematicIfFrameImplementation`.
	 * @param ctx the parse tree
	 */
	enterSchematicIfFrameImplementation?: (ctx: SchematicIfFrameImplementationContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.schematicIfFrameImplementation`.
	 * @param ctx the parse tree
	 */
	exitSchematicIfFrameImplementation?: (ctx: SchematicIfFrameImplementationContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.schematicIfFrameImplementationHeader`.
	 * @param ctx the parse tree
	 */
	enterSchematicIfFrameImplementationHeader?: (ctx: SchematicIfFrameImplementationHeaderContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.schematicIfFrameImplementationHeader`.
	 * @param ctx the parse tree
	 */
	exitSchematicIfFrameImplementationHeader?: (ctx: SchematicIfFrameImplementationHeaderContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.schematicImplementation`.
	 * @param ctx the parse tree
	 */
	enterSchematicImplementation?: (ctx: SchematicImplementationContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.schematicImplementation`.
	 * @param ctx the parse tree
	 */
	exitSchematicImplementation?: (ctx: SchematicImplementationContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.schematicInstanceImplementation`.
	 * @param ctx the parse tree
	 */
	enterSchematicInstanceImplementation?: (ctx: SchematicInstanceImplementationContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.schematicInstanceImplementation`.
	 * @param ctx the parse tree
	 */
	exitSchematicInstanceImplementation?: (ctx: SchematicInstanceImplementationContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.schematicInstanceImplementationRef`.
	 * @param ctx the parse tree
	 */
	enterSchematicInstanceImplementationRef?: (ctx: SchematicInstanceImplementationRefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.schematicInstanceImplementationRef`.
	 * @param ctx the parse tree
	 */
	exitSchematicInstanceImplementationRef?: (ctx: SchematicInstanceImplementationRefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.schematicInterconnectAttributeDisplay`.
	 * @param ctx the parse tree
	 */
	enterSchematicInterconnectAttributeDisplay?: (ctx: SchematicInterconnectAttributeDisplayContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.schematicInterconnectAttributeDisplay`.
	 * @param ctx the parse tree
	 */
	exitSchematicInterconnectAttributeDisplay?: (ctx: SchematicInterconnectAttributeDisplayContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.schematicInterconnectHeader`.
	 * @param ctx the parse tree
	 */
	enterSchematicInterconnectHeader?: (ctx: SchematicInterconnectHeaderContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.schematicInterconnectHeader`.
	 * @param ctx the parse tree
	 */
	exitSchematicInterconnectHeader?: (ctx: SchematicInterconnectHeaderContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.schematicInterconnectTerminatorImplementation`.
	 * @param ctx the parse tree
	 */
	enterSchematicInterconnectTerminatorImplementation?: (ctx: SchematicInterconnectTerminatorImplementationContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.schematicInterconnectTerminatorImplementation`.
	 * @param ctx the parse tree
	 */
	exitSchematicInterconnectTerminatorImplementation?: (ctx: SchematicInterconnectTerminatorImplementationContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.schematicInterconnectTerminatorImplementationRef`.
	 * @param ctx the parse tree
	 */
	enterSchematicInterconnectTerminatorImplementationRef?: (ctx: SchematicInterconnectTerminatorImplementationRefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.schematicInterconnectTerminatorImplementationRef`.
	 * @param ctx the parse tree
	 */
	exitSchematicInterconnectTerminatorImplementationRef?: (ctx: SchematicInterconnectTerminatorImplementationRefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.schematicInterconnectTerminatorTemplate`.
	 * @param ctx the parse tree
	 */
	enterSchematicInterconnectTerminatorTemplate?: (ctx: SchematicInterconnectTerminatorTemplateContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.schematicInterconnectTerminatorTemplate`.
	 * @param ctx the parse tree
	 */
	exitSchematicInterconnectTerminatorTemplate?: (ctx: SchematicInterconnectTerminatorTemplateContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.schematicInterconnectTerminatorTemplateRef`.
	 * @param ctx the parse tree
	 */
	enterSchematicInterconnectTerminatorTemplateRef?: (ctx: SchematicInterconnectTerminatorTemplateRefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.schematicInterconnectTerminatorTemplateRef`.
	 * @param ctx the parse tree
	 */
	exitSchematicInterconnectTerminatorTemplateRef?: (ctx: SchematicInterconnectTerminatorTemplateRefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.schematicJunctionImplementation`.
	 * @param ctx the parse tree
	 */
	enterSchematicJunctionImplementation?: (ctx: SchematicJunctionImplementationContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.schematicJunctionImplementation`.
	 * @param ctx the parse tree
	 */
	exitSchematicJunctionImplementation?: (ctx: SchematicJunctionImplementationContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.schematicJunctionImplementationRef`.
	 * @param ctx the parse tree
	 */
	enterSchematicJunctionImplementationRef?: (ctx: SchematicJunctionImplementationRefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.schematicJunctionImplementationRef`.
	 * @param ctx the parse tree
	 */
	exitSchematicJunctionImplementationRef?: (ctx: SchematicJunctionImplementationRefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.schematicJunctionTemplate`.
	 * @param ctx the parse tree
	 */
	enterSchematicJunctionTemplate?: (ctx: SchematicJunctionTemplateContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.schematicJunctionTemplate`.
	 * @param ctx the parse tree
	 */
	exitSchematicJunctionTemplate?: (ctx: SchematicJunctionTemplateContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.schematicJunctionTemplateRef`.
	 * @param ctx the parse tree
	 */
	enterSchematicJunctionTemplateRef?: (ctx: SchematicJunctionTemplateRefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.schematicJunctionTemplateRef`.
	 * @param ctx the parse tree
	 */
	exitSchematicJunctionTemplateRef?: (ctx: SchematicJunctionTemplateRefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.schematicMasterPortImplementation`.
	 * @param ctx the parse tree
	 */
	enterSchematicMasterPortImplementation?: (ctx: SchematicMasterPortImplementationContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.schematicMasterPortImplementation`.
	 * @param ctx the parse tree
	 */
	exitSchematicMasterPortImplementation?: (ctx: SchematicMasterPortImplementationContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.schematicMasterPortImplementationRef`.
	 * @param ctx the parse tree
	 */
	enterSchematicMasterPortImplementationRef?: (ctx: SchematicMasterPortImplementationRefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.schematicMasterPortImplementationRef`.
	 * @param ctx the parse tree
	 */
	exitSchematicMasterPortImplementationRef?: (ctx: SchematicMasterPortImplementationRefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.schematicMasterPortTemplate`.
	 * @param ctx the parse tree
	 */
	enterSchematicMasterPortTemplate?: (ctx: SchematicMasterPortTemplateContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.schematicMasterPortTemplate`.
	 * @param ctx the parse tree
	 */
	exitSchematicMasterPortTemplate?: (ctx: SchematicMasterPortTemplateContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.schematicMasterPortTemplateRef`.
	 * @param ctx the parse tree
	 */
	enterSchematicMasterPortTemplateRef?: (ctx: SchematicMasterPortTemplateRefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.schematicMasterPortTemplateRef`.
	 * @param ctx the parse tree
	 */
	exitSchematicMasterPortTemplateRef?: (ctx: SchematicMasterPortTemplateRefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.schematicMetric`.
	 * @param ctx the parse tree
	 */
	enterSchematicMetric?: (ctx: SchematicMetricContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.schematicMetric`.
	 * @param ctx the parse tree
	 */
	exitSchematicMetric?: (ctx: SchematicMetricContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.schematicNet`.
	 * @param ctx the parse tree
	 */
	enterSchematicNet?: (ctx: SchematicNetContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.schematicNet`.
	 * @param ctx the parse tree
	 */
	exitSchematicNet?: (ctx: SchematicNetContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.schematicNetDetails`.
	 * @param ctx the parse tree
	 */
	enterSchematicNetDetails?: (ctx: SchematicNetDetailsContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.schematicNetDetails`.
	 * @param ctx the parse tree
	 */
	exitSchematicNetDetails?: (ctx: SchematicNetDetailsContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.schematicNetGraphics`.
	 * @param ctx the parse tree
	 */
	enterSchematicNetGraphics?: (ctx: SchematicNetGraphicsContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.schematicNetGraphics`.
	 * @param ctx the parse tree
	 */
	exitSchematicNetGraphics?: (ctx: SchematicNetGraphicsContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.schematicNetJoined`.
	 * @param ctx the parse tree
	 */
	enterSchematicNetJoined?: (ctx: SchematicNetJoinedContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.schematicNetJoined`.
	 * @param ctx the parse tree
	 */
	exitSchematicNetJoined?: (ctx: SchematicNetJoinedContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.schematicOffPageConnectorImplementation`.
	 * @param ctx the parse tree
	 */
	enterSchematicOffPageConnectorImplementation?: (ctx: SchematicOffPageConnectorImplementationContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.schematicOffPageConnectorImplementation`.
	 * @param ctx the parse tree
	 */
	exitSchematicOffPageConnectorImplementation?: (ctx: SchematicOffPageConnectorImplementationContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.schematicOffPageConnectorImplementationRef`.
	 * @param ctx the parse tree
	 */
	enterSchematicOffPageConnectorImplementationRef?: (ctx: SchematicOffPageConnectorImplementationRefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.schematicOffPageConnectorImplementationRef`.
	 * @param ctx the parse tree
	 */
	exitSchematicOffPageConnectorImplementationRef?: (ctx: SchematicOffPageConnectorImplementationRefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.schematicOffPageConnectorTemplate`.
	 * @param ctx the parse tree
	 */
	enterSchematicOffPageConnectorTemplate?: (ctx: SchematicOffPageConnectorTemplateContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.schematicOffPageConnectorTemplate`.
	 * @param ctx the parse tree
	 */
	exitSchematicOffPageConnectorTemplate?: (ctx: SchematicOffPageConnectorTemplateContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.schematicOffPageConnectorTemplateRef`.
	 * @param ctx the parse tree
	 */
	enterSchematicOffPageConnectorTemplateRef?: (ctx: SchematicOffPageConnectorTemplateRefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.schematicOffPageConnectorTemplateRef`.
	 * @param ctx the parse tree
	 */
	exitSchematicOffPageConnectorTemplateRef?: (ctx: SchematicOffPageConnectorTemplateRefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.schematicOnPageConnectorImplementation`.
	 * @param ctx the parse tree
	 */
	enterSchematicOnPageConnectorImplementation?: (ctx: SchematicOnPageConnectorImplementationContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.schematicOnPageConnectorImplementation`.
	 * @param ctx the parse tree
	 */
	exitSchematicOnPageConnectorImplementation?: (ctx: SchematicOnPageConnectorImplementationContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.schematicOnPageConnectorImplementationRef`.
	 * @param ctx the parse tree
	 */
	enterSchematicOnPageConnectorImplementationRef?: (ctx: SchematicOnPageConnectorImplementationRefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.schematicOnPageConnectorImplementationRef`.
	 * @param ctx the parse tree
	 */
	exitSchematicOnPageConnectorImplementationRef?: (ctx: SchematicOnPageConnectorImplementationRefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.schematicOnPageConnectorTemplate`.
	 * @param ctx the parse tree
	 */
	enterSchematicOnPageConnectorTemplate?: (ctx: SchematicOnPageConnectorTemplateContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.schematicOnPageConnectorTemplate`.
	 * @param ctx the parse tree
	 */
	exitSchematicOnPageConnectorTemplate?: (ctx: SchematicOnPageConnectorTemplateContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.schematicOnPageConnectorTemplateRef`.
	 * @param ctx the parse tree
	 */
	enterSchematicOnPageConnectorTemplateRef?: (ctx: SchematicOnPageConnectorTemplateRefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.schematicOnPageConnectorTemplateRef`.
	 * @param ctx the parse tree
	 */
	exitSchematicOnPageConnectorTemplateRef?: (ctx: SchematicOnPageConnectorTemplateRefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.schematicOtherwiseFrameBorder`.
	 * @param ctx the parse tree
	 */
	enterSchematicOtherwiseFrameBorder?: (ctx: SchematicOtherwiseFrameBorderContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.schematicOtherwiseFrameBorder`.
	 * @param ctx the parse tree
	 */
	exitSchematicOtherwiseFrameBorder?: (ctx: SchematicOtherwiseFrameBorderContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.schematicOtherwiseFrameBorderTemplate`.
	 * @param ctx the parse tree
	 */
	enterSchematicOtherwiseFrameBorderTemplate?: (ctx: SchematicOtherwiseFrameBorderTemplateContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.schematicOtherwiseFrameBorderTemplate`.
	 * @param ctx the parse tree
	 */
	exitSchematicOtherwiseFrameBorderTemplate?: (ctx: SchematicOtherwiseFrameBorderTemplateContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.schematicOtherwiseFrameBorderTemplateRef`.
	 * @param ctx the parse tree
	 */
	enterSchematicOtherwiseFrameBorderTemplateRef?: (ctx: SchematicOtherwiseFrameBorderTemplateRefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.schematicOtherwiseFrameBorderTemplateRef`.
	 * @param ctx the parse tree
	 */
	exitSchematicOtherwiseFrameBorderTemplateRef?: (ctx: SchematicOtherwiseFrameBorderTemplateRefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.schematicOtherwiseFrameImplementation`.
	 * @param ctx the parse tree
	 */
	enterSchematicOtherwiseFrameImplementation?: (ctx: SchematicOtherwiseFrameImplementationContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.schematicOtherwiseFrameImplementation`.
	 * @param ctx the parse tree
	 */
	exitSchematicOtherwiseFrameImplementation?: (ctx: SchematicOtherwiseFrameImplementationContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.schematicOtherwiseFrameImplementationHeader`.
	 * @param ctx the parse tree
	 */
	enterSchematicOtherwiseFrameImplementationHeader?: (ctx: SchematicOtherwiseFrameImplementationHeaderContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.schematicOtherwiseFrameImplementationHeader`.
	 * @param ctx the parse tree
	 */
	exitSchematicOtherwiseFrameImplementationHeader?: (ctx: SchematicOtherwiseFrameImplementationHeaderContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.schematicPortAcPower`.
	 * @param ctx the parse tree
	 */
	enterSchematicPortAcPower?: (ctx: SchematicPortAcPowerContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.schematicPortAcPower`.
	 * @param ctx the parse tree
	 */
	exitSchematicPortAcPower?: (ctx: SchematicPortAcPowerContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.schematicPortAcPowerRecommendedFrequency`.
	 * @param ctx the parse tree
	 */
	enterSchematicPortAcPowerRecommendedFrequency?: (ctx: SchematicPortAcPowerRecommendedFrequencyContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.schematicPortAcPowerRecommendedFrequency`.
	 * @param ctx the parse tree
	 */
	exitSchematicPortAcPowerRecommendedFrequency?: (ctx: SchematicPortAcPowerRecommendedFrequencyContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.schematicPortAcPowerRecommendedVoltageRms`.
	 * @param ctx the parse tree
	 */
	enterSchematicPortAcPowerRecommendedVoltageRms?: (ctx: SchematicPortAcPowerRecommendedVoltageRmsContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.schematicPortAcPowerRecommendedVoltageRms`.
	 * @param ctx the parse tree
	 */
	exitSchematicPortAcPowerRecommendedVoltageRms?: (ctx: SchematicPortAcPowerRecommendedVoltageRmsContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.schematicPortAnalog`.
	 * @param ctx the parse tree
	 */
	enterSchematicPortAnalog?: (ctx: SchematicPortAnalogContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.schematicPortAnalog`.
	 * @param ctx the parse tree
	 */
	exitSchematicPortAnalog?: (ctx: SchematicPortAnalogContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.schematicPortAttributes`.
	 * @param ctx the parse tree
	 */
	enterSchematicPortAttributes?: (ctx: SchematicPortAttributesContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.schematicPortAttributes`.
	 * @param ctx the parse tree
	 */
	exitSchematicPortAttributes?: (ctx: SchematicPortAttributesContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.schematicPortChassisGround`.
	 * @param ctx the parse tree
	 */
	enterSchematicPortChassisGround?: (ctx: SchematicPortChassisGroundContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.schematicPortChassisGround`.
	 * @param ctx the parse tree
	 */
	exitSchematicPortChassisGround?: (ctx: SchematicPortChassisGroundContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.schematicPortClock`.
	 * @param ctx the parse tree
	 */
	enterSchematicPortClock?: (ctx: SchematicPortClockContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.schematicPortClock`.
	 * @param ctx the parse tree
	 */
	exitSchematicPortClock?: (ctx: SchematicPortClockContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.schematicPortDcPower`.
	 * @param ctx the parse tree
	 */
	enterSchematicPortDcPower?: (ctx: SchematicPortDcPowerContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.schematicPortDcPower`.
	 * @param ctx the parse tree
	 */
	exitSchematicPortDcPower?: (ctx: SchematicPortDcPowerContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.schematicPortDcPowerRecommendedVoltage`.
	 * @param ctx the parse tree
	 */
	enterSchematicPortDcPowerRecommendedVoltage?: (ctx: SchematicPortDcPowerRecommendedVoltageContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.schematicPortDcPowerRecommendedVoltage`.
	 * @param ctx the parse tree
	 */
	exitSchematicPortDcPowerRecommendedVoltage?: (ctx: SchematicPortDcPowerRecommendedVoltageContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.schematicPortEarthGround`.
	 * @param ctx the parse tree
	 */
	enterSchematicPortEarthGround?: (ctx: SchematicPortEarthGroundContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.schematicPortEarthGround`.
	 * @param ctx the parse tree
	 */
	exitSchematicPortEarthGround?: (ctx: SchematicPortEarthGroundContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.schematicPortGround`.
	 * @param ctx the parse tree
	 */
	enterSchematicPortGround?: (ctx: SchematicPortGroundContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.schematicPortGround`.
	 * @param ctx the parse tree
	 */
	exitSchematicPortGround?: (ctx: SchematicPortGroundContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.schematicPortNonLogical`.
	 * @param ctx the parse tree
	 */
	enterSchematicPortNonLogical?: (ctx: SchematicPortNonLogicalContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.schematicPortNonLogical`.
	 * @param ctx the parse tree
	 */
	exitSchematicPortNonLogical?: (ctx: SchematicPortNonLogicalContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.schematicPortOpenCollector`.
	 * @param ctx the parse tree
	 */
	enterSchematicPortOpenCollector?: (ctx: SchematicPortOpenCollectorContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.schematicPortOpenCollector`.
	 * @param ctx the parse tree
	 */
	exitSchematicPortOpenCollector?: (ctx: SchematicPortOpenCollectorContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.schematicPortOpenEmitter`.
	 * @param ctx the parse tree
	 */
	enterSchematicPortOpenEmitter?: (ctx: SchematicPortOpenEmitterContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.schematicPortOpenEmitter`.
	 * @param ctx the parse tree
	 */
	exitSchematicPortOpenEmitter?: (ctx: SchematicPortOpenEmitterContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.schematicPortPower`.
	 * @param ctx the parse tree
	 */
	enterSchematicPortPower?: (ctx: SchematicPortPowerContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.schematicPortPower`.
	 * @param ctx the parse tree
	 */
	exitSchematicPortPower?: (ctx: SchematicPortPowerContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.schematicPortStyle`.
	 * @param ctx the parse tree
	 */
	enterSchematicPortStyle?: (ctx: SchematicPortStyleContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.schematicPortStyle`.
	 * @param ctx the parse tree
	 */
	exitSchematicPortStyle?: (ctx: SchematicPortStyleContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.schematicPortThreeState`.
	 * @param ctx the parse tree
	 */
	enterSchematicPortThreeState?: (ctx: SchematicPortThreeStateContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.schematicPortThreeState`.
	 * @param ctx the parse tree
	 */
	exitSchematicPortThreeState?: (ctx: SchematicPortThreeStateContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.schematicRequiredDefaults`.
	 * @param ctx the parse tree
	 */
	enterSchematicRequiredDefaults?: (ctx: SchematicRequiredDefaultsContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.schematicRequiredDefaults`.
	 * @param ctx the parse tree
	 */
	exitSchematicRequiredDefaults?: (ctx: SchematicRequiredDefaultsContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.schematicRipperImplementation`.
	 * @param ctx the parse tree
	 */
	enterSchematicRipperImplementation?: (ctx: SchematicRipperImplementationContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.schematicRipperImplementation`.
	 * @param ctx the parse tree
	 */
	exitSchematicRipperImplementation?: (ctx: SchematicRipperImplementationContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.schematicRipperImplementationRef`.
	 * @param ctx the parse tree
	 */
	enterSchematicRipperImplementationRef?: (ctx: SchematicRipperImplementationRefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.schematicRipperImplementationRef`.
	 * @param ctx the parse tree
	 */
	exitSchematicRipperImplementationRef?: (ctx: SchematicRipperImplementationRefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.schematicRipperTemplate`.
	 * @param ctx the parse tree
	 */
	enterSchematicRipperTemplate?: (ctx: SchematicRipperTemplateContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.schematicRipperTemplate`.
	 * @param ctx the parse tree
	 */
	exitSchematicRipperTemplate?: (ctx: SchematicRipperTemplateContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.schematicRipperTemplateRef`.
	 * @param ctx the parse tree
	 */
	enterSchematicRipperTemplateRef?: (ctx: SchematicRipperTemplateRefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.schematicRipperTemplateRef`.
	 * @param ctx the parse tree
	 */
	exitSchematicRipperTemplateRef?: (ctx: SchematicRipperTemplateRefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.schematicSubBus`.
	 * @param ctx the parse tree
	 */
	enterSchematicSubBus?: (ctx: SchematicSubBusContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.schematicSubBus`.
	 * @param ctx the parse tree
	 */
	exitSchematicSubBus?: (ctx: SchematicSubBusContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.schematicSubBusSet`.
	 * @param ctx the parse tree
	 */
	enterSchematicSubBusSet?: (ctx: SchematicSubBusSetContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.schematicSubBusSet`.
	 * @param ctx the parse tree
	 */
	exitSchematicSubBusSet?: (ctx: SchematicSubBusSetContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.schematicSubInterconnectHeader`.
	 * @param ctx the parse tree
	 */
	enterSchematicSubInterconnectHeader?: (ctx: SchematicSubInterconnectHeaderContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.schematicSubInterconnectHeader`.
	 * @param ctx the parse tree
	 */
	exitSchematicSubInterconnectHeader?: (ctx: SchematicSubInterconnectHeaderContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.schematicSubNet`.
	 * @param ctx the parse tree
	 */
	enterSchematicSubNet?: (ctx: SchematicSubNetContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.schematicSubNet`.
	 * @param ctx the parse tree
	 */
	exitSchematicSubNet?: (ctx: SchematicSubNetContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.schematicSubNetSet`.
	 * @param ctx the parse tree
	 */
	enterSchematicSubNetSet?: (ctx: SchematicSubNetSetContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.schematicSubNetSet`.
	 * @param ctx the parse tree
	 */
	exitSchematicSubNetSet?: (ctx: SchematicSubNetSetContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.schematicSymbol`.
	 * @param ctx the parse tree
	 */
	enterSchematicSymbol?: (ctx: SchematicSymbolContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.schematicSymbol`.
	 * @param ctx the parse tree
	 */
	exitSchematicSymbol?: (ctx: SchematicSymbolContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.schematicSymbolBorder`.
	 * @param ctx the parse tree
	 */
	enterSchematicSymbolBorder?: (ctx: SchematicSymbolBorderContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.schematicSymbolBorder`.
	 * @param ctx the parse tree
	 */
	exitSchematicSymbolBorder?: (ctx: SchematicSymbolBorderContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.schematicSymbolBorderTemplate`.
	 * @param ctx the parse tree
	 */
	enterSchematicSymbolBorderTemplate?: (ctx: SchematicSymbolBorderTemplateContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.schematicSymbolBorderTemplate`.
	 * @param ctx the parse tree
	 */
	exitSchematicSymbolBorderTemplate?: (ctx: SchematicSymbolBorderTemplateContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.schematicSymbolBorderTemplateRef`.
	 * @param ctx the parse tree
	 */
	enterSchematicSymbolBorderTemplateRef?: (ctx: SchematicSymbolBorderTemplateRefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.schematicSymbolBorderTemplateRef`.
	 * @param ctx the parse tree
	 */
	exitSchematicSymbolBorderTemplateRef?: (ctx: SchematicSymbolBorderTemplateRefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.schematicSymbolHeader`.
	 * @param ctx the parse tree
	 */
	enterSchematicSymbolHeader?: (ctx: SchematicSymbolHeaderContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.schematicSymbolHeader`.
	 * @param ctx the parse tree
	 */
	exitSchematicSymbolHeader?: (ctx: SchematicSymbolHeaderContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.schematicSymbolPortImplementation`.
	 * @param ctx the parse tree
	 */
	enterSchematicSymbolPortImplementation?: (ctx: SchematicSymbolPortImplementationContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.schematicSymbolPortImplementation`.
	 * @param ctx the parse tree
	 */
	exitSchematicSymbolPortImplementation?: (ctx: SchematicSymbolPortImplementationContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.schematicSymbolPortImplementationRef`.
	 * @param ctx the parse tree
	 */
	enterSchematicSymbolPortImplementationRef?: (ctx: SchematicSymbolPortImplementationRefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.schematicSymbolPortImplementationRef`.
	 * @param ctx the parse tree
	 */
	exitSchematicSymbolPortImplementationRef?: (ctx: SchematicSymbolPortImplementationRefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.schematicSymbolPortTemplate`.
	 * @param ctx the parse tree
	 */
	enterSchematicSymbolPortTemplate?: (ctx: SchematicSymbolPortTemplateContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.schematicSymbolPortTemplate`.
	 * @param ctx the parse tree
	 */
	exitSchematicSymbolPortTemplate?: (ctx: SchematicSymbolPortTemplateContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.schematicSymbolPortTemplateRef`.
	 * @param ctx the parse tree
	 */
	enterSchematicSymbolPortTemplateRef?: (ctx: SchematicSymbolPortTemplateRefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.schematicSymbolPortTemplateRef`.
	 * @param ctx the parse tree
	 */
	exitSchematicSymbolPortTemplateRef?: (ctx: SchematicSymbolPortTemplateRefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.schematicSymbolRef`.
	 * @param ctx the parse tree
	 */
	enterSchematicSymbolRef?: (ctx: SchematicSymbolRefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.schematicSymbolRef`.
	 * @param ctx the parse tree
	 */
	exitSchematicSymbolRef?: (ctx: SchematicSymbolRefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.schematicTemplateHeader`.
	 * @param ctx the parse tree
	 */
	enterSchematicTemplateHeader?: (ctx: SchematicTemplateHeaderContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.schematicTemplateHeader`.
	 * @param ctx the parse tree
	 */
	exitSchematicTemplateHeader?: (ctx: SchematicTemplateHeaderContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.schematicUnits`.
	 * @param ctx the parse tree
	 */
	enterSchematicUnits?: (ctx: SchematicUnitsContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.schematicUnits`.
	 * @param ctx the parse tree
	 */
	exitSchematicUnits?: (ctx: SchematicUnitsContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.schematicView`.
	 * @param ctx the parse tree
	 */
	enterSchematicView?: (ctx: SchematicViewContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.schematicView`.
	 * @param ctx the parse tree
	 */
	exitSchematicView?: (ctx: SchematicViewContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.schematicViewHeader`.
	 * @param ctx the parse tree
	 */
	enterSchematicViewHeader?: (ctx: SchematicViewHeaderContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.schematicViewHeader`.
	 * @param ctx the parse tree
	 */
	exitSchematicViewHeader?: (ctx: SchematicViewHeaderContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.schematicWireAffinity`.
	 * @param ctx the parse tree
	 */
	enterSchematicWireAffinity?: (ctx: SchematicWireAffinityContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.schematicWireAffinity`.
	 * @param ctx the parse tree
	 */
	exitSchematicWireAffinity?: (ctx: SchematicWireAffinityContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.schematicWireStyle`.
	 * @param ctx the parse tree
	 */
	enterSchematicWireStyle?: (ctx: SchematicWireStyleContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.schematicWireStyle`.
	 * @param ctx the parse tree
	 */
	exitSchematicWireStyle?: (ctx: SchematicWireStyleContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.second`.
	 * @param ctx the parse tree
	 */
	enterSecond?: (ctx: SecondContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.second`.
	 * @param ctx the parse tree
	 */
	exitSecond?: (ctx: SecondContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.secondIntegerExpression`.
	 * @param ctx the parse tree
	 */
	enterSecondIntegerExpression?: (ctx: SecondIntegerExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.secondIntegerExpression`.
	 * @param ctx the parse tree
	 */
	exitSecondIntegerExpression?: (ctx: SecondIntegerExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.secondNumber`.
	 * @param ctx the parse tree
	 */
	enterSecondNumber?: (ctx: SecondNumberContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.secondNumber`.
	 * @param ctx the parse tree
	 */
	exitSecondNumber?: (ctx: SecondNumberContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.secondStringExpression`.
	 * @param ctx the parse tree
	 */
	enterSecondStringExpression?: (ctx: SecondStringExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.secondStringExpression`.
	 * @param ctx the parse tree
	 */
	exitSecondStringExpression?: (ctx: SecondStringExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.section`.
	 * @param ctx the parse tree
	 */
	enterSection?: (ctx: SectionContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.section`.
	 * @param ctx the parse tree
	 */
	exitSection?: (ctx: SectionContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.sectionNameDef`.
	 * @param ctx the parse tree
	 */
	enterSectionNameDef?: (ctx: SectionNameDefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.sectionNameDef`.
	 * @param ctx the parse tree
	 */
	exitSectionNameDef?: (ctx: SectionNameDefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.sectionTitle`.
	 * @param ctx the parse tree
	 */
	enterSectionTitle?: (ctx: SectionTitleContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.sectionTitle`.
	 * @param ctx the parse tree
	 */
	exitSectionTitle?: (ctx: SectionTitleContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.sequence`.
	 * @param ctx the parse tree
	 */
	enterSequence?: (ctx: SequenceContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.sequence`.
	 * @param ctx the parse tree
	 */
	exitSequence?: (ctx: SequenceContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.setAngle`.
	 * @param ctx the parse tree
	 */
	enterSetAngle?: (ctx: SetAngleContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.setAngle`.
	 * @param ctx the parse tree
	 */
	exitSetAngle?: (ctx: SetAngleContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.setCapacitance`.
	 * @param ctx the parse tree
	 */
	enterSetCapacitance?: (ctx: SetCapacitanceContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.setCapacitance`.
	 * @param ctx the parse tree
	 */
	exitSetCapacitance?: (ctx: SetCapacitanceContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.setCurrent`.
	 * @param ctx the parse tree
	 */
	enterSetCurrent?: (ctx: SetCurrentContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.setCurrent`.
	 * @param ctx the parse tree
	 */
	exitSetCurrent?: (ctx: SetCurrentContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.setDistance`.
	 * @param ctx the parse tree
	 */
	enterSetDistance?: (ctx: SetDistanceContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.setDistance`.
	 * @param ctx the parse tree
	 */
	exitSetDistance?: (ctx: SetDistanceContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.setFrequency`.
	 * @param ctx the parse tree
	 */
	enterSetFrequency?: (ctx: SetFrequencyContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.setFrequency`.
	 * @param ctx the parse tree
	 */
	exitSetFrequency?: (ctx: SetFrequencyContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.setTime`.
	 * @param ctx the parse tree
	 */
	enterSetTime?: (ctx: SetTimeContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.setTime`.
	 * @param ctx the parse tree
	 */
	exitSetTime?: (ctx: SetTimeContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.setVoltage`.
	 * @param ctx the parse tree
	 */
	enterSetVoltage?: (ctx: SetVoltageContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.setVoltage`.
	 * @param ctx the parse tree
	 */
	exitSetVoltage?: (ctx: SetVoltageContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.shape`.
	 * @param ctx the parse tree
	 */
	enterShape?: (ctx: ShapeContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.shape`.
	 * @param ctx the parse tree
	 */
	exitShape?: (ctx: ShapeContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.siemens`.
	 * @param ctx the parse tree
	 */
	enterSiemens?: (ctx: SiemensContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.siemens`.
	 * @param ctx the parse tree
	 */
	exitSiemens?: (ctx: SiemensContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.signal`.
	 * @param ctx the parse tree
	 */
	enterSignal?: (ctx: SignalContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.signal`.
	 * @param ctx the parse tree
	 */
	exitSignal?: (ctx: SignalContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.signalAnnotate`.
	 * @param ctx the parse tree
	 */
	enterSignalAnnotate?: (ctx: SignalAnnotateContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.signalAnnotate`.
	 * @param ctx the parse tree
	 */
	exitSignalAnnotate?: (ctx: SignalAnnotateContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.signalGroup`.
	 * @param ctx the parse tree
	 */
	enterSignalGroup?: (ctx: SignalGroupContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.signalGroup`.
	 * @param ctx the parse tree
	 */
	exitSignalGroup?: (ctx: SignalGroupContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.signalGroupAnnotate`.
	 * @param ctx the parse tree
	 */
	enterSignalGroupAnnotate?: (ctx: SignalGroupAnnotateContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.signalGroupAnnotate`.
	 * @param ctx the parse tree
	 */
	exitSignalGroupAnnotate?: (ctx: SignalGroupAnnotateContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.signalGroupNameCaseSensitive`.
	 * @param ctx the parse tree
	 */
	enterSignalGroupNameCaseSensitive?: (ctx: SignalGroupNameCaseSensitiveContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.signalGroupNameCaseSensitive`.
	 * @param ctx the parse tree
	 */
	exitSignalGroupNameCaseSensitive?: (ctx: SignalGroupNameCaseSensitiveContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.signalGroupNameDef`.
	 * @param ctx the parse tree
	 */
	enterSignalGroupNameDef?: (ctx: SignalGroupNameDefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.signalGroupNameDef`.
	 * @param ctx the parse tree
	 */
	exitSignalGroupNameDef?: (ctx: SignalGroupNameDefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.signalGroupNameRef`.
	 * @param ctx the parse tree
	 */
	enterSignalGroupNameRef?: (ctx: SignalGroupNameRefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.signalGroupNameRef`.
	 * @param ctx the parse tree
	 */
	exitSignalGroupNameRef?: (ctx: SignalGroupNameRefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.signalGroupRef`.
	 * @param ctx the parse tree
	 */
	enterSignalGroupRef?: (ctx: SignalGroupRefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.signalGroupRef`.
	 * @param ctx the parse tree
	 */
	exitSignalGroupRef?: (ctx: SignalGroupRefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.signalIndexValue`.
	 * @param ctx the parse tree
	 */
	enterSignalIndexValue?: (ctx: SignalIndexValueContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.signalIndexValue`.
	 * @param ctx the parse tree
	 */
	exitSignalIndexValue?: (ctx: SignalIndexValueContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.signalJoined`.
	 * @param ctx the parse tree
	 */
	enterSignalJoined?: (ctx: SignalJoinedContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.signalJoined`.
	 * @param ctx the parse tree
	 */
	exitSignalJoined?: (ctx: SignalJoinedContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.signalList`.
	 * @param ctx the parse tree
	 */
	enterSignalList?: (ctx: SignalListContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.signalList`.
	 * @param ctx the parse tree
	 */
	exitSignalList?: (ctx: SignalListContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.signalMemberRef`.
	 * @param ctx the parse tree
	 */
	enterSignalMemberRef?: (ctx: SignalMemberRefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.signalMemberRef`.
	 * @param ctx the parse tree
	 */
	exitSignalMemberRef?: (ctx: SignalMemberRefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.signalNameCaseSensitive`.
	 * @param ctx the parse tree
	 */
	enterSignalNameCaseSensitive?: (ctx: SignalNameCaseSensitiveContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.signalNameCaseSensitive`.
	 * @param ctx the parse tree
	 */
	exitSignalNameCaseSensitive?: (ctx: SignalNameCaseSensitiveContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.signalNameDef`.
	 * @param ctx the parse tree
	 */
	enterSignalNameDef?: (ctx: SignalNameDefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.signalNameDef`.
	 * @param ctx the parse tree
	 */
	exitSignalNameDef?: (ctx: SignalNameDefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.signalNameRef`.
	 * @param ctx the parse tree
	 */
	enterSignalNameRef?: (ctx: SignalNameRefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.signalNameRef`.
	 * @param ctx the parse tree
	 */
	exitSignalNameRef?: (ctx: SignalNameRefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.signalRef`.
	 * @param ctx the parse tree
	 */
	enterSignalRef?: (ctx: SignalRefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.signalRef`.
	 * @param ctx the parse tree
	 */
	exitSignalRef?: (ctx: SignalRefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.signalWidth`.
	 * @param ctx the parse tree
	 */
	enterSignalWidth?: (ctx: SignalWidthContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.signalWidth`.
	 * @param ctx the parse tree
	 */
	exitSignalWidth?: (ctx: SignalWidthContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.simpleName`.
	 * @param ctx the parse tree
	 */
	enterSimpleName?: (ctx: SimpleNameContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.simpleName`.
	 * @param ctx the parse tree
	 */
	exitSimpleName?: (ctx: SimpleNameContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.startPoint`.
	 * @param ctx the parse tree
	 */
	enterStartPoint?: (ctx: StartPointContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.startPoint`.
	 * @param ctx the parse tree
	 */
	exitStartPoint?: (ctx: StartPointContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.status`.
	 * @param ctx the parse tree
	 */
	enterStatus?: (ctx: StatusContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.status`.
	 * @param ctx the parse tree
	 */
	exitStatus?: (ctx: StatusContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.step`.
	 * @param ctx the parse tree
	 */
	enterStep?: (ctx: StepContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.step`.
	 * @param ctx the parse tree
	 */
	exitStep?: (ctx: StepContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.string`.
	 * @param ctx the parse tree
	 */
	enterString?: (ctx: StringContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.string`.
	 * @param ctx the parse tree
	 */
	exitString?: (ctx: StringContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.stringConcatenate`.
	 * @param ctx the parse tree
	 */
	enterStringConcatenate?: (ctx: StringConcatenateContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.stringConcatenate`.
	 * @param ctx the parse tree
	 */
	exitStringConcatenate?: (ctx: StringConcatenateContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.stringConstant`.
	 * @param ctx the parse tree
	 */
	enterStringConstant?: (ctx: StringConstantContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.stringConstant`.
	 * @param ctx the parse tree
	 */
	exitStringConstant?: (ctx: StringConstantContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.stringConstantRef`.
	 * @param ctx the parse tree
	 */
	enterStringConstantRef?: (ctx: StringConstantRefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.stringConstantRef`.
	 * @param ctx the parse tree
	 */
	exitStringConstantRef?: (ctx: StringConstantRefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.stringEqual`.
	 * @param ctx the parse tree
	 */
	enterStringEqual?: (ctx: StringEqualContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.stringEqual`.
	 * @param ctx the parse tree
	 */
	exitStringEqual?: (ctx: StringEqualContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.stringExpression`.
	 * @param ctx the parse tree
	 */
	enterStringExpression?: (ctx: StringExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.stringExpression`.
	 * @param ctx the parse tree
	 */
	exitStringExpression?: (ctx: StringExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.stringLength`.
	 * @param ctx the parse tree
	 */
	enterStringLength?: (ctx: StringLengthContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.stringLength`.
	 * @param ctx the parse tree
	 */
	exitStringLength?: (ctx: StringLengthContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.stringParameter`.
	 * @param ctx the parse tree
	 */
	enterStringParameter?: (ctx: StringParameterContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.stringParameter`.
	 * @param ctx the parse tree
	 */
	exitStringParameter?: (ctx: StringParameterContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.stringParameterAssign`.
	 * @param ctx the parse tree
	 */
	enterStringParameterAssign?: (ctx: StringParameterAssignContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.stringParameterAssign`.
	 * @param ctx the parse tree
	 */
	exitStringParameterAssign?: (ctx: StringParameterAssignContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.stringParameterRef`.
	 * @param ctx the parse tree
	 */
	enterStringParameterRef?: (ctx: StringParameterRefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.stringParameterRef`.
	 * @param ctx the parse tree
	 */
	exitStringParameterRef?: (ctx: StringParameterRefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.stringPrefix`.
	 * @param ctx the parse tree
	 */
	enterStringPrefix?: (ctx: StringPrefixContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.stringPrefix`.
	 * @param ctx the parse tree
	 */
	exitStringPrefix?: (ctx: StringPrefixContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.stringSuffix`.
	 * @param ctx the parse tree
	 */
	enterStringSuffix?: (ctx: StringSuffixContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.stringSuffix`.
	 * @param ctx the parse tree
	 */
	exitStringSuffix?: (ctx: StringSuffixContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.stringValue`.
	 * @param ctx the parse tree
	 */
	enterStringValue?: (ctx: StringValueContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.stringValue`.
	 * @param ctx the parse tree
	 */
	exitStringValue?: (ctx: StringValueContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.strong`.
	 * @param ctx the parse tree
	 */
	enterStrong?: (ctx: StrongContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.strong`.
	 * @param ctx the parse tree
	 */
	exitStrong?: (ctx: StrongContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.subIssue`.
	 * @param ctx the parse tree
	 */
	enterSubIssue?: (ctx: SubIssueContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.subIssue`.
	 * @param ctx the parse tree
	 */
	exitSubIssue?: (ctx: SubIssueContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.substring`.
	 * @param ctx the parse tree
	 */
	enterSubstring?: (ctx: SubstringContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.substring`.
	 * @param ctx the parse tree
	 */
	exitSubstring?: (ctx: SubstringContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.substringLength`.
	 * @param ctx the parse tree
	 */
	enterSubstringLength?: (ctx: SubstringLengthContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.substringLength`.
	 * @param ctx the parse tree
	 */
	exitSubstringLength?: (ctx: SubstringLengthContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.substringOffset`.
	 * @param ctx the parse tree
	 */
	enterSubstringOffset?: (ctx: SubstringOffsetContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.substringOffset`.
	 * @param ctx the parse tree
	 */
	exitSubstringOffset?: (ctx: SubstringOffsetContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.subtrahend`.
	 * @param ctx the parse tree
	 */
	enterSubtrahend?: (ctx: SubtrahendContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.subtrahend`.
	 * @param ctx the parse tree
	 */
	exitSubtrahend?: (ctx: SubtrahendContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.symbolicLayoutUnits`.
	 * @param ctx the parse tree
	 */
	enterSymbolicLayoutUnits?: (ctx: SymbolicLayoutUnitsContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.symbolicLayoutUnits`.
	 * @param ctx the parse tree
	 */
	exitSymbolicLayoutUnits?: (ctx: SymbolicLayoutUnitsContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.symbolicLayoutView`.
	 * @param ctx the parse tree
	 */
	enterSymbolicLayoutView?: (ctx: SymbolicLayoutViewContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.symbolicLayoutView`.
	 * @param ctx the parse tree
	 */
	exitSymbolicLayoutView?: (ctx: SymbolicLayoutViewContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.symbolPortImplementationNameDef`.
	 * @param ctx the parse tree
	 */
	enterSymbolPortImplementationNameDef?: (ctx: SymbolPortImplementationNameDefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.symbolPortImplementationNameDef`.
	 * @param ctx the parse tree
	 */
	exitSymbolPortImplementationNameDef?: (ctx: SymbolPortImplementationNameDefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.symbolPortImplementationNameRef`.
	 * @param ctx the parse tree
	 */
	enterSymbolPortImplementationNameRef?: (ctx: SymbolPortImplementationNameRefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.symbolPortImplementationNameRef`.
	 * @param ctx the parse tree
	 */
	exitSymbolPortImplementationNameRef?: (ctx: SymbolPortImplementationNameRefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.technology`.
	 * @param ctx the parse tree
	 */
	enterTechnology?: (ctx: TechnologyContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.technology`.
	 * @param ctx the parse tree
	 */
	exitTechnology?: (ctx: TechnologyContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.textHeight`.
	 * @param ctx the parse tree
	 */
	enterTextHeight?: (ctx: TextHeightContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.textHeight`.
	 * @param ctx the parse tree
	 */
	exitTextHeight?: (ctx: TextHeightContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.throughPoint`.
	 * @param ctx the parse tree
	 */
	enterThroughPoint?: (ctx: ThroughPointContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.throughPoint`.
	 * @param ctx the parse tree
	 */
	exitThroughPoint?: (ctx: ThroughPointContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.time`.
	 * @param ctx the parse tree
	 */
	enterTime?: (ctx: TimeContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.time`.
	 * @param ctx the parse tree
	 */
	exitTime?: (ctx: TimeContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.timeDelay`.
	 * @param ctx the parse tree
	 */
	enterTimeDelay?: (ctx: TimeDelayContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.timeDelay`.
	 * @param ctx the parse tree
	 */
	exitTimeDelay?: (ctx: TimeDelayContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.timeInterval`.
	 * @param ctx the parse tree
	 */
	enterTimeInterval?: (ctx: TimeIntervalContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.timeInterval`.
	 * @param ctx the parse tree
	 */
	exitTimeInterval?: (ctx: TimeIntervalContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.timeStamp`.
	 * @param ctx the parse tree
	 */
	enterTimeStamp?: (ctx: TimeStampContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.timeStamp`.
	 * @param ctx the parse tree
	 */
	exitTimeStamp?: (ctx: TimeStampContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.timeValue`.
	 * @param ctx the parse tree
	 */
	enterTimeValue?: (ctx: TimeValueContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.timeValue`.
	 * @param ctx the parse tree
	 */
	exitTimeValue?: (ctx: TimeValueContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.timing`.
	 * @param ctx the parse tree
	 */
	enterTiming?: (ctx: TimingContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.timing`.
	 * @param ctx the parse tree
	 */
	exitTiming?: (ctx: TimingContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.timingDisplay`.
	 * @param ctx the parse tree
	 */
	enterTimingDisplay?: (ctx: TimingDisplayContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.timingDisplay`.
	 * @param ctx the parse tree
	 */
	exitTimingDisplay?: (ctx: TimingDisplayContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.timingNameDef`.
	 * @param ctx the parse tree
	 */
	enterTimingNameDef?: (ctx: TimingNameDefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.timingNameDef`.
	 * @param ctx the parse tree
	 */
	exitTimingNameDef?: (ctx: TimingNameDefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.timingNameRef`.
	 * @param ctx the parse tree
	 */
	enterTimingNameRef?: (ctx: TimingNameRefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.timingNameRef`.
	 * @param ctx the parse tree
	 */
	exitTimingNameRef?: (ctx: TimingNameRefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.toInteger`.
	 * @param ctx the parse tree
	 */
	enterToInteger?: (ctx: ToIntegerContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.toInteger`.
	 * @param ctx the parse tree
	 */
	exitToInteger?: (ctx: ToIntegerContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.topJustify`.
	 * @param ctx the parse tree
	 */
	enterTopJustify?: (ctx: TopJustifyContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.topJustify`.
	 * @param ctx the parse tree
	 */
	exitTopJustify?: (ctx: TopJustifyContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.totalPages`.
	 * @param ctx the parse tree
	 */
	enterTotalPages?: (ctx: TotalPagesContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.totalPages`.
	 * @param ctx the parse tree
	 */
	exitTotalPages?: (ctx: TotalPagesContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.totalPagesDisplay`.
	 * @param ctx the parse tree
	 */
	enterTotalPagesDisplay?: (ctx: TotalPagesDisplayContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.totalPagesDisplay`.
	 * @param ctx the parse tree
	 */
	exitTotalPagesDisplay?: (ctx: TotalPagesDisplayContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.transform`.
	 * @param ctx the parse tree
	 */
	enterTransform?: (ctx: TransformContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.transform`.
	 * @param ctx the parse tree
	 */
	exitTransform?: (ctx: TransformContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.transition`.
	 * @param ctx the parse tree
	 */
	enterTransition?: (ctx: TransitionContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.transition`.
	 * @param ctx the parse tree
	 */
	exitTransition?: (ctx: TransitionContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.etrue`.
	 * @param ctx the parse tree
	 */
	enterEtrue?: (ctx: EtrueContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.etrue`.
	 * @param ctx the parse tree
	 */
	exitEtrue?: (ctx: EtrueContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.truncate`.
	 * @param ctx the parse tree
	 */
	enterTruncate?: (ctx: TruncateContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.truncate`.
	 * @param ctx the parse tree
	 */
	exitTruncate?: (ctx: TruncateContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.typedValue`.
	 * @param ctx the parse tree
	 */
	enterTypedValue?: (ctx: TypedValueContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.typedValue`.
	 * @param ctx the parse tree
	 */
	exitTypedValue?: (ctx: TypedValueContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.typeface`.
	 * @param ctx the parse tree
	 */
	enterTypeface?: (ctx: TypefaceContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.typeface`.
	 * @param ctx the parse tree
	 */
	exitTypeface?: (ctx: TypefaceContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.typefaceSuffix`.
	 * @param ctx the parse tree
	 */
	enterTypefaceSuffix?: (ctx: TypefaceSuffixContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.typefaceSuffix`.
	 * @param ctx the parse tree
	 */
	exitTypefaceSuffix?: (ctx: TypefaceSuffixContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.unconfigured`.
	 * @param ctx the parse tree
	 */
	enterUnconfigured?: (ctx: UnconfiguredContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.unconfigured`.
	 * @param ctx the parse tree
	 */
	exitUnconfigured?: (ctx: UnconfiguredContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.unconstrained`.
	 * @param ctx the parse tree
	 */
	enterUnconstrained?: (ctx: UnconstrainedContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.unconstrained`.
	 * @param ctx the parse tree
	 */
	exitUnconstrained?: (ctx: UnconstrainedContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.undefined`.
	 * @param ctx the parse tree
	 */
	enterUndefined?: (ctx: UndefinedContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.undefined`.
	 * @param ctx the parse tree
	 */
	exitUndefined?: (ctx: UndefinedContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.unit`.
	 * @param ctx the parse tree
	 */
	enterUnit?: (ctx: UnitContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.unit`.
	 * @param ctx the parse tree
	 */
	exitUnit?: (ctx: UnitContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.unitDefinitions`.
	 * @param ctx the parse tree
	 */
	enterUnitDefinitions?: (ctx: UnitDefinitionsContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.unitDefinitions`.
	 * @param ctx the parse tree
	 */
	exitUnitDefinitions?: (ctx: UnitDefinitionsContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.unitExponent`.
	 * @param ctx the parse tree
	 */
	enterUnitExponent?: (ctx: UnitExponentContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.unitExponent`.
	 * @param ctx the parse tree
	 */
	exitUnitExponent?: (ctx: UnitExponentContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.unitNameDef`.
	 * @param ctx the parse tree
	 */
	enterUnitNameDef?: (ctx: UnitNameDefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.unitNameDef`.
	 * @param ctx the parse tree
	 */
	exitUnitNameDef?: (ctx: UnitNameDefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.unitNameRef`.
	 * @param ctx the parse tree
	 */
	enterUnitNameRef?: (ctx: UnitNameRefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.unitNameRef`.
	 * @param ctx the parse tree
	 */
	exitUnitNameRef?: (ctx: UnitNameRefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.unitRef`.
	 * @param ctx the parse tree
	 */
	enterUnitRef?: (ctx: UnitRefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.unitRef`.
	 * @param ctx the parse tree
	 */
	exitUnitRef?: (ctx: UnitRefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.unrestricted`.
	 * @param ctx the parse tree
	 */
	enterUnrestricted?: (ctx: UnrestrictedContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.unrestricted`.
	 * @param ctx the parse tree
	 */
	exitUnrestricted?: (ctx: UnrestrictedContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.unspecified`.
	 * @param ctx the parse tree
	 */
	enterUnspecified?: (ctx: UnspecifiedContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.unspecified`.
	 * @param ctx the parse tree
	 */
	exitUnspecified?: (ctx: UnspecifiedContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.unspecifiedDirectionPort`.
	 * @param ctx the parse tree
	 */
	enterUnspecifiedDirectionPort?: (ctx: UnspecifiedDirectionPortContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.unspecifiedDirectionPort`.
	 * @param ctx the parse tree
	 */
	exitUnspecifiedDirectionPort?: (ctx: UnspecifiedDirectionPortContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.untyped`.
	 * @param ctx the parse tree
	 */
	enterUntyped?: (ctx: UntypedContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.untyped`.
	 * @param ctx the parse tree
	 */
	exitUntyped?: (ctx: UntypedContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.unused`.
	 * @param ctx the parse tree
	 */
	enterUnused?: (ctx: UnusedContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.unused`.
	 * @param ctx the parse tree
	 */
	exitUnused?: (ctx: UnusedContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.usableArea`.
	 * @param ctx the parse tree
	 */
	enterUsableArea?: (ctx: UsableAreaContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.usableArea`.
	 * @param ctx the parse tree
	 */
	exitUsableArea?: (ctx: UsableAreaContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.userData`.
	 * @param ctx the parse tree
	 */
	enterUserData?: (ctx: UserDataContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.userData`.
	 * @param ctx the parse tree
	 */
	exitUserData?: (ctx: UserDataContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.userDataTag`.
	 * @param ctx the parse tree
	 */
	enterUserDataTag?: (ctx: UserDataTagContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.userDataTag`.
	 * @param ctx the parse tree
	 */
	exitUserDataTag?: (ctx: UserDataTagContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.version`.
	 * @param ctx the parse tree
	 */
	enterVersion?: (ctx: VersionContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.version`.
	 * @param ctx the parse tree
	 */
	exitVersion?: (ctx: VersionContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.verticalJustification`.
	 * @param ctx the parse tree
	 */
	enterVerticalJustification?: (ctx: VerticalJustificationContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.verticalJustification`.
	 * @param ctx the parse tree
	 */
	exitVerticalJustification?: (ctx: VerticalJustificationContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.viewGroup`.
	 * @param ctx the parse tree
	 */
	enterViewGroup?: (ctx: ViewGroupContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.viewGroup`.
	 * @param ctx the parse tree
	 */
	exitViewGroup?: (ctx: ViewGroupContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.viewGroupHeader`.
	 * @param ctx the parse tree
	 */
	enterViewGroupHeader?: (ctx: ViewGroupHeaderContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.viewGroupHeader`.
	 * @param ctx the parse tree
	 */
	exitViewGroupHeader?: (ctx: ViewGroupHeaderContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.viewGroupNameCaseSensitive`.
	 * @param ctx the parse tree
	 */
	enterViewGroupNameCaseSensitive?: (ctx: ViewGroupNameCaseSensitiveContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.viewGroupNameCaseSensitive`.
	 * @param ctx the parse tree
	 */
	exitViewGroupNameCaseSensitive?: (ctx: ViewGroupNameCaseSensitiveContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.viewGroupNameDef`.
	 * @param ctx the parse tree
	 */
	enterViewGroupNameDef?: (ctx: ViewGroupNameDefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.viewGroupNameDef`.
	 * @param ctx the parse tree
	 */
	exitViewGroupNameDef?: (ctx: ViewGroupNameDefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.viewGroupNameRef`.
	 * @param ctx the parse tree
	 */
	enterViewGroupNameRef?: (ctx: ViewGroupNameRefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.viewGroupNameRef`.
	 * @param ctx the parse tree
	 */
	exitViewGroupNameRef?: (ctx: ViewGroupNameRefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.viewGroupRef`.
	 * @param ctx the parse tree
	 */
	enterViewGroupRef?: (ctx: ViewGroupRefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.viewGroupRef`.
	 * @param ctx the parse tree
	 */
	exitViewGroupRef?: (ctx: ViewGroupRefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.viewNameCaseSensitive`.
	 * @param ctx the parse tree
	 */
	enterViewNameCaseSensitive?: (ctx: ViewNameCaseSensitiveContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.viewNameCaseSensitive`.
	 * @param ctx the parse tree
	 */
	exitViewNameCaseSensitive?: (ctx: ViewNameCaseSensitiveContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.viewNameDef`.
	 * @param ctx the parse tree
	 */
	enterViewNameDef?: (ctx: ViewNameDefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.viewNameDef`.
	 * @param ctx the parse tree
	 */
	exitViewNameDef?: (ctx: ViewNameDefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.viewNameDisplay`.
	 * @param ctx the parse tree
	 */
	enterViewNameDisplay?: (ctx: ViewNameDisplayContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.viewNameDisplay`.
	 * @param ctx the parse tree
	 */
	exitViewNameDisplay?: (ctx: ViewNameDisplayContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.viewNameRef`.
	 * @param ctx the parse tree
	 */
	enterViewNameRef?: (ctx: ViewNameRefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.viewNameRef`.
	 * @param ctx the parse tree
	 */
	exitViewNameRef?: (ctx: ViewNameRefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.viewPropertyDisplay`.
	 * @param ctx the parse tree
	 */
	enterViewPropertyDisplay?: (ctx: ViewPropertyDisplayContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.viewPropertyDisplay`.
	 * @param ctx the parse tree
	 */
	exitViewPropertyDisplay?: (ctx: ViewPropertyDisplayContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.viewPropertyOverride`.
	 * @param ctx the parse tree
	 */
	enterViewPropertyOverride?: (ctx: ViewPropertyOverrideContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.viewPropertyOverride`.
	 * @param ctx the parse tree
	 */
	exitViewPropertyOverride?: (ctx: ViewPropertyOverrideContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.viewRef`.
	 * @param ctx the parse tree
	 */
	enterViewRef?: (ctx: ViewRefContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.viewRef`.
	 * @param ctx the parse tree
	 */
	exitViewRef?: (ctx: ViewRefContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.visible`.
	 * @param ctx the parse tree
	 */
	enterVisible?: (ctx: VisibleContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.visible`.
	 * @param ctx the parse tree
	 */
	exitVisible?: (ctx: VisibleContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.volt`.
	 * @param ctx the parse tree
	 */
	enterVolt?: (ctx: VoltContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.volt`.
	 * @param ctx the parse tree
	 */
	exitVolt?: (ctx: VoltContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.voltageMap`.
	 * @param ctx the parse tree
	 */
	enterVoltageMap?: (ctx: VoltageMapContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.voltageMap`.
	 * @param ctx the parse tree
	 */
	exitVoltageMap?: (ctx: VoltageMapContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.voltageValue`.
	 * @param ctx the parse tree
	 */
	enterVoltageValue?: (ctx: VoltageValueContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.voltageValue`.
	 * @param ctx the parse tree
	 */
	exitVoltageValue?: (ctx: VoltageValueContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.watt`.
	 * @param ctx the parse tree
	 */
	enterWatt?: (ctx: WattContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.watt`.
	 * @param ctx the parse tree
	 */
	exitWatt?: (ctx: WattContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.weak`.
	 * @param ctx the parse tree
	 */
	enterWeak?: (ctx: WeakContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.weak`.
	 * @param ctx the parse tree
	 */
	exitWeak?: (ctx: WeakContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.weakJoined`.
	 * @param ctx the parse tree
	 */
	enterWeakJoined?: (ctx: WeakJoinedContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.weakJoined`.
	 * @param ctx the parse tree
	 */
	exitWeakJoined?: (ctx: WeakJoinedContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.weber`.
	 * @param ctx the parse tree
	 */
	enterWeber?: (ctx: WeberContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.weber`.
	 * @param ctx the parse tree
	 */
	exitWeber?: (ctx: WeberContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.widePort`.
	 * @param ctx the parse tree
	 */
	enterWidePort?: (ctx: WidePortContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.widePort`.
	 * @param ctx the parse tree
	 */
	exitWidePort?: (ctx: WidePortContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.wideWire`.
	 * @param ctx the parse tree
	 */
	enterWideWire?: (ctx: WideWireContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.wideWire`.
	 * @param ctx the parse tree
	 */
	exitWideWire?: (ctx: WideWireContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.written`.
	 * @param ctx the parse tree
	 */
	enterWritten?: (ctx: WrittenContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.written`.
	 * @param ctx the parse tree
	 */
	exitWritten?: (ctx: WrittenContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.xCoordinate`.
	 * @param ctx the parse tree
	 */
	enterXCoordinate?: (ctx: XCoordinateContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.xCoordinate`.
	 * @param ctx the parse tree
	 */
	exitXCoordinate?: (ctx: XCoordinateContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.xNumberValue`.
	 * @param ctx the parse tree
	 */
	enterXNumberValue?: (ctx: XNumberValueContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.xNumberValue`.
	 * @param ctx the parse tree
	 */
	exitXNumberValue?: (ctx: XNumberValueContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.xor_`.
	 * @param ctx the parse tree
	 */
	enterXor_?: (ctx: Xor_Context) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.xor_`.
	 * @param ctx the parse tree
	 */
	exitXor_?: (ctx: Xor_Context) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.yCoordinate`.
	 * @param ctx the parse tree
	 */
	enterYCoordinate?: (ctx: YCoordinateContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.yCoordinate`.
	 * @param ctx the parse tree
	 */
	exitYCoordinate?: (ctx: YCoordinateContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.year`.
	 * @param ctx the parse tree
	 */
	enterYear?: (ctx: YearContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.year`.
	 * @param ctx the parse tree
	 */
	exitYear?: (ctx: YearContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.yearNumber`.
	 * @param ctx the parse tree
	 */
	enterYearNumber?: (ctx: YearNumberContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.yearNumber`.
	 * @param ctx the parse tree
	 */
	exitYearNumber?: (ctx: YearNumberContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.yNumberValue`.
	 * @param ctx the parse tree
	 */
	enterYNumberValue?: (ctx: YNumberValueContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.yNumberValue`.
	 * @param ctx the parse tree
	 */
	exitYNumberValue?: (ctx: YNumberValueContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.integerToken`.
	 * @param ctx the parse tree
	 */
	enterIntegerToken?: (ctx: IntegerTokenContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.integerToken`.
	 * @param ctx the parse tree
	 */
	exitIntegerToken?: (ctx: IntegerTokenContext) => void;

	/**
	 * Enter a parse tree produced by `EDIF300Parser.stringToken`.
	 * @param ctx the parse tree
	 */
	enterStringToken?: (ctx: StringTokenContext) => void;
	/**
	 * Exit a parse tree produced by `EDIF300Parser.stringToken`.
	 * @param ctx the parse tree
	 */
	exitStringToken?: (ctx: StringTokenContext) => void;
}

