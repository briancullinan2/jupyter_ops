// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/objc/one-step-processing/ObjectiveCPreprocessorParser.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import ObjectiveCPreprocessorParserListener from './ObjectiveCPreprocessorParserListener.js';
const serializedATN = [4,1,236,95,2,0,7,0,2,1,7,1,2,2,7,2,1,0,1,0,1,0,1,
0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,
0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,3,0,42,8,0,3,0,44,
8,0,1,1,4,1,47,8,1,11,1,12,1,48,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,
3,2,61,8,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,74,8,2,3,2,76,
8,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,5,2,90,8,2,10,2,12,2,
93,9,2,1,2,0,1,4,3,0,2,4,0,4,1,0,200,201,1,0,235,236,1,0,219,220,1,0,223,
226,117,0,43,1,0,0,0,2,46,1,0,0,0,4,75,1,0,0,0,6,7,5,196,0,0,7,8,7,0,0,0,
8,44,3,2,1,0,9,10,5,196,0,0,10,11,5,205,0,0,11,44,3,4,2,0,12,13,5,196,0,
0,13,14,5,206,0,0,14,44,3,4,2,0,15,16,5,196,0,0,16,44,5,207,0,0,17,18,5,
196,0,0,18,44,5,211,0,0,19,20,5,196,0,0,20,21,5,209,0,0,21,44,5,228,0,0,
22,23,5,196,0,0,23,24,5,210,0,0,24,44,5,228,0,0,25,26,5,196,0,0,26,27,5,
208,0,0,27,44,5,228,0,0,28,29,5,196,0,0,29,30,5,202,0,0,30,44,3,2,1,0,31,
32,5,196,0,0,32,33,5,214,0,0,33,44,3,2,1,0,34,35,5,196,0,0,35,36,5,215,0,
0,36,44,3,2,1,0,37,38,5,196,0,0,38,39,5,203,0,0,39,41,5,228,0,0,40,42,3,
2,1,0,41,40,1,0,0,0,41,42,1,0,0,0,42,44,1,0,0,0,43,6,1,0,0,0,43,9,1,0,0,
0,43,12,1,0,0,0,43,15,1,0,0,0,43,17,1,0,0,0,43,19,1,0,0,0,43,22,1,0,0,0,
43,25,1,0,0,0,43,28,1,0,0,0,43,31,1,0,0,0,43,34,1,0,0,0,43,37,1,0,0,0,44,
1,1,0,0,0,45,47,7,1,0,0,46,45,1,0,0,0,47,48,1,0,0,0,48,46,1,0,0,0,48,49,
1,0,0,0,49,3,1,0,0,0,50,51,6,2,-1,0,51,76,5,212,0,0,52,76,5,213,0,0,53,76,
5,229,0,0,54,76,5,227,0,0,55,60,5,228,0,0,56,57,5,217,0,0,57,58,3,4,2,0,
58,59,5,218,0,0,59,61,1,0,0,0,60,56,1,0,0,0,60,61,1,0,0,0,61,76,1,0,0,0,
62,63,5,217,0,0,63,64,3,4,2,0,64,65,5,218,0,0,65,76,1,0,0,0,66,67,5,216,
0,0,67,76,3,4,2,6,68,73,5,204,0,0,69,74,5,228,0,0,70,71,5,217,0,0,71,72,
5,228,0,0,72,74,5,218,0,0,73,69,1,0,0,0,73,70,1,0,0,0,74,76,1,0,0,0,75,50,
1,0,0,0,75,52,1,0,0,0,75,53,1,0,0,0,75,54,1,0,0,0,75,55,1,0,0,0,75,62,1,
0,0,0,75,66,1,0,0,0,75,68,1,0,0,0,76,91,1,0,0,0,77,78,10,5,0,0,78,79,7,2,
0,0,79,90,3,4,2,6,80,81,10,4,0,0,81,82,5,221,0,0,82,90,3,4,2,5,83,84,10,
3,0,0,84,85,5,222,0,0,85,90,3,4,2,4,86,87,10,2,0,0,87,88,7,3,0,0,88,90,3,
4,2,3,89,77,1,0,0,0,89,80,1,0,0,0,89,83,1,0,0,0,89,86,1,0,0,0,90,93,1,0,
0,0,91,89,1,0,0,0,91,92,1,0,0,0,92,5,1,0,0,0,93,91,1,0,0,0,8,41,43,48,60,
73,75,89,91];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class ObjectiveCPreprocessorParser extends antlr4.Parser {

    static grammarFileName = "ObjectiveCPreprocessorParser.g4";
    static literalNames = [ null, "'auto'", "'break'", "'case'", "'char'", 
                            "'const'", "'continue'", "'default'", "'do'", 
                            "'double'", null, "'enum'", "'extern'", "'float'", 
                            "'for'", "'goto'", null, "'inline'", "'int'", 
                            "'long'", "'register'", "'restrict'", "'return'", 
                            "'short'", "'signed'", "'sizeof'", "'static'", 
                            "'struct'", "'switch'", "'typedef'", "'union'", 
                            "'unsigned'", "'void'", "'volatile'", "'while'", 
                            "'_Bool'", "'_Complex'", "'_Imaginery'", "'true'", 
                            "'false'", "'BOOL'", "'Class'", "'bycopy'", 
                            "'byref'", "'id'", "'IMP'", "'in'", "'inout'", 
                            "'nil'", "'NO'", "'NULL'", "'oneway'", "'out'", 
                            "'Protocol'", "'SEL'", "'self'", "'super'", 
                            "'YES'", "'@autoreleasepool'", "'catch'", "'@class'", 
                            "'@dynamic'", "'@encode'", "'@end'", "'finally'", 
                            "'@implementation'", "'@interface'", "'@import'", 
                            "'@package'", "'@protocol'", "'@optional'", 
                            "'@private'", "'@property'", "'@protected'", 
                            "'@public'", "'@required'", "'@selector'", "'@synchronized'", 
                            "'@synthesize'", "'@throw'", "'try'", "'atomic'", 
                            "'nonatomic'", "'retain'", "'direct'", "'__inline__'", 
                            "'__attribute__'", "'__extension__'", "'_Static_assert'", 
                            "'_Alignof'", "'__autoreleasing'", "'__block'", 
                            "'__bridge'", "'__bridge_retained'", "'__bridge_transfer'", 
                            "'__covariant'", "'__contravariant'", "'__deprecated'", 
                            "'__kindof'", "'__strong'", null, "'__unsafe_unretained'", 
                            "'__unused'", "'__weak'", null, null, null, 
                            "'null_resettable'", "'NS_INLINE'", "'NS_ENUM'", 
                            "'NS_CLOSED_ENUM'", "'NS_ERROR_ENUM'", "'NS_OPTIONS'", 
                            "'NS_SWIFT_NAME'", "'NS_NOESCAPE'", "'NS_UNAVAILABLE'", 
                            "'NS_SWIFT_UNAVAILABLE'", "'API_AVAILABLE'", 
                            "'API_UNAVAILABLE'", "'assign'", "'copy'", "'getter'", 
                            "'setter'", "'strong'", "'readonly'", "'readwrite'", 
                            "'weak'", "'unsafe_unretained'", "'IBOutlet'", 
                            "'IBOutletCollection'", "'IBInspectable'", "'IB_DESIGNABLE'", 
                            null, null, null, null, null, "'__TVOS_PROHIBITED'", 
                            null, null, null, "'{'", "'}'", "'['", "']'", 
                            "';'", "','", "'.'", "'->'", "'@'", "'_'", "'='", 
                            null, null, null, "'~'", "'?'", "':'", null, 
                            null, null, null, null, null, "'++'", "'--'", 
                            "'+'", "'-'", "'*'", "'/'", "'&'", "'|'", "'^'", 
                            "'%'", "'+='", "'-='", "'*='", "'/='", "'&='", 
                            "'|='", "'^='", "'%='", "'<<='", "'>>='", "'...'", 
                            null, null, null, null, null, null, null, null, 
                            null, null, "'\\'", null, null, null, null, 
                            null, null, null, null, "'defined'", null, "'elif'", 
                            null, "'undef'", "'ifdef'", "'ifndef'", "'endif'" ];
    static symbolicNames = [ null, "AUTO", "BREAK", "CASE", "CHAR", "CONST", 
                             "CONTINUE", "DEFAULT", "DO", "DOUBLE", "ELSE", 
                             "ENUM", "EXTERN", "FLOAT", "FOR", "GOTO", "IF", 
                             "INLINE", "INT", "LONG", "REGISTER", "RESTRICT", 
                             "RETURN", "SHORT", "SIGNED", "SIZEOF", "STATIC", 
                             "STRUCT", "SWITCH", "TYPEDEF", "UNION", "UNSIGNED", 
                             "VOID", "VOLATILE", "WHILE", "BOOL_", "COMPLEX", 
                             "IMAGINERY", "TRUE", "FALSE", "BOOL", "Class", 
                             "BYCOPY", "BYREF", "ID", "IMP", "IN", "INOUT", 
                             "NIL", "NO", "NULL_", "ONEWAY", "OUT", "PROTOCOL_", 
                             "SEL", "SELF", "SUPER", "YES", "AUTORELEASEPOOL", 
                             "CATCH", "CLASS", "DYNAMIC", "ENCODE", "END", 
                             "FINALLY", "IMPLEMENTATION", "INTERFACE", "IMPORT", 
                             "PACKAGE", "PROTOCOL", "OPTIONAL", "PRIVATE", 
                             "PROPERTY", "PROTECTED", "PUBLIC", "REQUIRED", 
                             "SELECTOR", "SYNCHRONIZED", "SYNTHESIZE", "THROW", 
                             "TRY", "ATOMIC", "NONATOMIC", "RETAIN", "DIRECT", 
                             "INLINE_ATTR", "ATTRIBUTE", "EXTENSION", "STATIC_ASSERT", 
                             "ALIGN_OF", "AUTORELEASING_QUALIFIER", "BLOCK", 
                             "BRIDGE", "BRIDGE_RETAINED", "BRIDGE_TRANSFER", 
                             "COVARIANT", "CONTRAVARIANT", "DEPRECATED", 
                             "KINDOF", "STRONG_QUALIFIER", "TYPEOF", "UNSAFE_UNRETAINED_QUALIFIER", 
                             "UNUSED", "WEAK_QUALIFIER", "NULL_UNSPECIFIED", 
                             "NULLABLE", "NONNULL", "NULL_RESETTABLE", "NS_INLINE", 
                             "NS_ENUM", "NS_CLOSED_ENUM", "NS_ERROR_ENUM", 
                             "NS_OPTIONS", "NS_SWIFT_NAME", "NS_NOESCAPE", 
                             "NS_UNAVAILABLE", "NS_SWIFT_UNAVAILABLE", "API_AVAILABLE", 
                             "API_UNAVAILABLE", "ASSIGN", "COPY", "GETTER", 
                             "SETTER", "STRONG", "READONLY", "READWRITE", 
                             "WEAK", "UNSAFE_UNRETAINED", "IB_OUTLET", "IB_OUTLET_COLLECTION", 
                             "IB_INSPECTABLE", "IB_DESIGNABLE", "NS_ASSUME_NONNULL_BEGIN", 
                             "NS_ASSUME_NONNULL_END", "EXTERN_SUFFIX", "IOS_SUFFIX", 
                             "MAC_SUFFIX", "TVOS_PROHIBITED", "IDENTIFIER", 
                             "LP", "RP", "LBRACE", "RBRACE", "LBRACK", "RBRACK", 
                             "SEMI", "COMMA", "DOT", "STRUCTACCESS", "AT", 
                             "UNDERSCORE", "ASSIGNMENT", "GT", "LT", "BANG", 
                             "TILDE", "QUESTION", "COLON", "EQUAL", "LE", 
                             "GE", "NOTEQUAL", "AND", "OR", "INC", "DEC", 
                             "ADD", "SUB", "MUL", "DIV", "BITAND", "BITOR", 
                             "BITXOR", "MOD", "ADD_ASSIGN", "SUB_ASSIGN", 
                             "MUL_ASSIGN", "DIV_ASSIGN", "AND_ASSIGN", "OR_ASSIGN", 
                             "XOR_ASSIGN", "MOD_ASSIGN", "LSHIFT_ASSIGN", 
                             "RSHIFT_ASSIGN", "ELIPSIS", "CHARACTER_LITERAL", 
                             "STRING_START", "HEX_LITERAL", "OCTAL_LITERAL", 
                             "BINARY_LITERAL", "DECIMAL_LITERAL", "FLOATING_POINT_LITERAL", 
                             "WS", "MULTI_COMMENT", "SINGLE_COMMENT", "BACKSLASH", 
                             "SHARP", "STRING_NEWLINE", "STRING_END", "STRING_VALUE", 
                             "DIRECTIVE_IMPORT", "DIRECTIVE_INCLUDE", "DIRECTIVE_PRAGMA", 
                             "DIRECTIVE_DEFINE", "DIRECTIVE_DEFINED", "DIRECTIVE_IF", 
                             "DIRECTIVE_ELIF", "DIRECTIVE_ELSE", "DIRECTIVE_UNDEF", 
                             "DIRECTIVE_IFDEF", "DIRECTIVE_IFNDEF", "DIRECTIVE_ENDIF", 
                             "DIRECTIVE_TRUE", "DIRECTIVE_FALSE", "DIRECTIVE_ERROR", 
                             "DIRECTIVE_WARNING", "DIRECTIVE_BANG", "DIRECTIVE_LP", 
                             "DIRECTIVE_RP", "DIRECTIVE_EQUAL", "DIRECTIVE_NOTEQUAL", 
                             "DIRECTIVE_AND", "DIRECTIVE_OR", "DIRECTIVE_LT", 
                             "DIRECTIVE_GT", "DIRECTIVE_LE", "DIRECTIVE_GE", 
                             "DIRECTIVE_STRING", "DIRECTIVE_ID", "DIRECTIVE_DECIMAL_LITERAL", 
                             "DIRECTIVE_FLOAT", "DIRECTIVE_NEWLINE", "DIRECTIVE_MULTI_COMMENT", 
                             "DIRECTIVE_SINGLE_COMMENT", "DIRECTIVE_BACKSLASH_NEWLINE", 
                             "DIRECTIVE_TEXT_NEWLINE", "DIRECTIVE_TEXT" ];
    static ruleNames = [ "directive", "directiveText", "preprocessorExpression" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = ObjectiveCPreprocessorParser.ruleNames;
        this.literalNames = ObjectiveCPreprocessorParser.literalNames;
        this.symbolicNames = ObjectiveCPreprocessorParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 2:
    	    		return this.preprocessorExpression_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    preprocessorExpression_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 5);
    		case 1:
    			return this.precpred(this._ctx, 4);
    		case 2:
    			return this.precpred(this._ctx, 3);
    		case 3:
    			return this.precpred(this._ctx, 2);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	directive() {
	    let localctx = new DirectiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, ObjectiveCPreprocessorParser.RULE_directive);
	    var _la = 0;
	    try {
	        this.state = 43;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new PreprocessorImportContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 6;
	            this.match(ObjectiveCPreprocessorParser.SHARP);
	            this.state = 7;
	            _la = this._input.LA(1);
	            if(!(_la===200 || _la===201)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 8;
	            this.directiveText();
	            break;

	        case 2:
	            localctx = new PreprocessorConditionalContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 9;
	            this.match(ObjectiveCPreprocessorParser.SHARP);
	            this.state = 10;
	            this.match(ObjectiveCPreprocessorParser.DIRECTIVE_IF);
	            this.state = 11;
	            this.preprocessorExpression(0);
	            break;

	        case 3:
	            localctx = new PreprocessorConditionalContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 12;
	            this.match(ObjectiveCPreprocessorParser.SHARP);
	            this.state = 13;
	            this.match(ObjectiveCPreprocessorParser.DIRECTIVE_ELIF);
	            this.state = 14;
	            this.preprocessorExpression(0);
	            break;

	        case 4:
	            localctx = new PreprocessorConditionalContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 15;
	            this.match(ObjectiveCPreprocessorParser.SHARP);
	            this.state = 16;
	            this.match(ObjectiveCPreprocessorParser.DIRECTIVE_ELSE);
	            break;

	        case 5:
	            localctx = new PreprocessorConditionalContext(this, localctx);
	            this.enterOuterAlt(localctx, 5);
	            this.state = 17;
	            this.match(ObjectiveCPreprocessorParser.SHARP);
	            this.state = 18;
	            this.match(ObjectiveCPreprocessorParser.DIRECTIVE_ENDIF);
	            break;

	        case 6:
	            localctx = new PreprocessorDefContext(this, localctx);
	            this.enterOuterAlt(localctx, 6);
	            this.state = 19;
	            this.match(ObjectiveCPreprocessorParser.SHARP);
	            this.state = 20;
	            this.match(ObjectiveCPreprocessorParser.DIRECTIVE_IFDEF);
	            this.state = 21;
	            this.match(ObjectiveCPreprocessorParser.DIRECTIVE_ID);
	            break;

	        case 7:
	            localctx = new PreprocessorDefContext(this, localctx);
	            this.enterOuterAlt(localctx, 7);
	            this.state = 22;
	            this.match(ObjectiveCPreprocessorParser.SHARP);
	            this.state = 23;
	            this.match(ObjectiveCPreprocessorParser.DIRECTIVE_IFNDEF);
	            this.state = 24;
	            this.match(ObjectiveCPreprocessorParser.DIRECTIVE_ID);
	            break;

	        case 8:
	            localctx = new PreprocessorDefContext(this, localctx);
	            this.enterOuterAlt(localctx, 8);
	            this.state = 25;
	            this.match(ObjectiveCPreprocessorParser.SHARP);
	            this.state = 26;
	            this.match(ObjectiveCPreprocessorParser.DIRECTIVE_UNDEF);
	            this.state = 27;
	            this.match(ObjectiveCPreprocessorParser.DIRECTIVE_ID);
	            break;

	        case 9:
	            localctx = new PreprocessorPragmaContext(this, localctx);
	            this.enterOuterAlt(localctx, 9);
	            this.state = 28;
	            this.match(ObjectiveCPreprocessorParser.SHARP);
	            this.state = 29;
	            this.match(ObjectiveCPreprocessorParser.DIRECTIVE_PRAGMA);
	            this.state = 30;
	            this.directiveText();
	            break;

	        case 10:
	            localctx = new PreprocessorErrorContext(this, localctx);
	            this.enterOuterAlt(localctx, 10);
	            this.state = 31;
	            this.match(ObjectiveCPreprocessorParser.SHARP);
	            this.state = 32;
	            this.match(ObjectiveCPreprocessorParser.DIRECTIVE_ERROR);
	            this.state = 33;
	            this.directiveText();
	            break;

	        case 11:
	            localctx = new PreprocessorWarningContext(this, localctx);
	            this.enterOuterAlt(localctx, 11);
	            this.state = 34;
	            this.match(ObjectiveCPreprocessorParser.SHARP);
	            this.state = 35;
	            this.match(ObjectiveCPreprocessorParser.DIRECTIVE_WARNING);
	            this.state = 36;
	            this.directiveText();
	            break;

	        case 12:
	            localctx = new PreprocessorDefineContext(this, localctx);
	            this.enterOuterAlt(localctx, 12);
	            this.state = 37;
	            this.match(ObjectiveCPreprocessorParser.SHARP);
	            this.state = 38;
	            this.match(ObjectiveCPreprocessorParser.DIRECTIVE_DEFINE);
	            this.state = 39;
	            this.match(ObjectiveCPreprocessorParser.DIRECTIVE_ID);
	            this.state = 41;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===235 || _la===236) {
	                this.state = 40;
	                this.directiveText();
	            }

	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	directiveText() {
	    let localctx = new DirectiveTextContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, ObjectiveCPreprocessorParser.RULE_directiveText);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 46; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 45;
	            _la = this._input.LA(1);
	            if(!(_la===235 || _la===236)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 48; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===235 || _la===236);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	preprocessorExpression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new PreprocessorExpressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 4;
	    this.enterRecursionRule(localctx, 4, ObjectiveCPreprocessorParser.RULE_preprocessorExpression, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 75;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 212:
	            localctx = new PreprocessorConstantContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 51;
	            this.match(ObjectiveCPreprocessorParser.DIRECTIVE_TRUE);
	            break;
	        case 213:
	            localctx = new PreprocessorConstantContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 52;
	            this.match(ObjectiveCPreprocessorParser.DIRECTIVE_FALSE);
	            break;
	        case 229:
	            localctx = new PreprocessorConstantContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 53;
	            this.match(ObjectiveCPreprocessorParser.DIRECTIVE_DECIMAL_LITERAL);
	            break;
	        case 227:
	            localctx = new PreprocessorConstantContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 54;
	            this.match(ObjectiveCPreprocessorParser.DIRECTIVE_STRING);
	            break;
	        case 228:
	            localctx = new PreprocessorConditionalSymbolContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 55;
	            this.match(ObjectiveCPreprocessorParser.DIRECTIVE_ID);
	            this.state = 60;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	            if(la_===1) {
	                this.state = 56;
	                this.match(ObjectiveCPreprocessorParser.DIRECTIVE_LP);
	                this.state = 57;
	                this.preprocessorExpression(0);
	                this.state = 58;
	                this.match(ObjectiveCPreprocessorParser.DIRECTIVE_RP);

	            }
	            break;
	        case 217:
	            localctx = new PreprocessorParenthesisContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 62;
	            this.match(ObjectiveCPreprocessorParser.DIRECTIVE_LP);
	            this.state = 63;
	            this.preprocessorExpression(0);
	            this.state = 64;
	            this.match(ObjectiveCPreprocessorParser.DIRECTIVE_RP);
	            break;
	        case 216:
	            localctx = new PreprocessorNotContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 66;
	            this.match(ObjectiveCPreprocessorParser.DIRECTIVE_BANG);
	            this.state = 67;
	            this.preprocessorExpression(6);
	            break;
	        case 204:
	            localctx = new PreprocessorDefinedContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 68;
	            this.match(ObjectiveCPreprocessorParser.DIRECTIVE_DEFINED);
	            this.state = 73;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 228:
	                this.state = 69;
	                this.match(ObjectiveCPreprocessorParser.DIRECTIVE_ID);
	                break;
	            case 217:
	                this.state = 70;
	                this.match(ObjectiveCPreprocessorParser.DIRECTIVE_LP);
	                this.state = 71;
	                this.match(ObjectiveCPreprocessorParser.DIRECTIVE_ID);
	                this.state = 72;
	                this.match(ObjectiveCPreprocessorParser.DIRECTIVE_RP);
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 91;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 89;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new PreprocessorBinaryContext(this, new PreprocessorExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ObjectiveCPreprocessorParser.RULE_preprocessorExpression);
	                    this.state = 77;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 78;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===219 || _la===220)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 79;
	                    this.preprocessorExpression(6);
	                    break;

	                case 2:
	                    localctx = new PreprocessorBinaryContext(this, new PreprocessorExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ObjectiveCPreprocessorParser.RULE_preprocessorExpression);
	                    this.state = 80;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 81;
	                    localctx.op = this.match(ObjectiveCPreprocessorParser.DIRECTIVE_AND);
	                    this.state = 82;
	                    this.preprocessorExpression(5);
	                    break;

	                case 3:
	                    localctx = new PreprocessorBinaryContext(this, new PreprocessorExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ObjectiveCPreprocessorParser.RULE_preprocessorExpression);
	                    this.state = 83;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 84;
	                    localctx.op = this.match(ObjectiveCPreprocessorParser.DIRECTIVE_OR);
	                    this.state = 85;
	                    this.preprocessorExpression(4);
	                    break;

	                case 4:
	                    localctx = new PreprocessorBinaryContext(this, new PreprocessorExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ObjectiveCPreprocessorParser.RULE_preprocessorExpression);
	                    this.state = 86;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 87;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(((((_la - 223)) & ~0x1f) === 0 && ((1 << (_la - 223)) & 15) !== 0))) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 88;
	                    this.preprocessorExpression(3);
	                    break;

	                } 
	            }
	            this.state = 93;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,7,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


}

ObjectiveCPreprocessorParser.EOF = antlr4.Token.EOF;
ObjectiveCPreprocessorParser.AUTO = 1;
ObjectiveCPreprocessorParser.BREAK = 2;
ObjectiveCPreprocessorParser.CASE = 3;
ObjectiveCPreprocessorParser.CHAR = 4;
ObjectiveCPreprocessorParser.CONST = 5;
ObjectiveCPreprocessorParser.CONTINUE = 6;
ObjectiveCPreprocessorParser.DEFAULT = 7;
ObjectiveCPreprocessorParser.DO = 8;
ObjectiveCPreprocessorParser.DOUBLE = 9;
ObjectiveCPreprocessorParser.ELSE = 10;
ObjectiveCPreprocessorParser.ENUM = 11;
ObjectiveCPreprocessorParser.EXTERN = 12;
ObjectiveCPreprocessorParser.FLOAT = 13;
ObjectiveCPreprocessorParser.FOR = 14;
ObjectiveCPreprocessorParser.GOTO = 15;
ObjectiveCPreprocessorParser.IF = 16;
ObjectiveCPreprocessorParser.INLINE = 17;
ObjectiveCPreprocessorParser.INT = 18;
ObjectiveCPreprocessorParser.LONG = 19;
ObjectiveCPreprocessorParser.REGISTER = 20;
ObjectiveCPreprocessorParser.RESTRICT = 21;
ObjectiveCPreprocessorParser.RETURN = 22;
ObjectiveCPreprocessorParser.SHORT = 23;
ObjectiveCPreprocessorParser.SIGNED = 24;
ObjectiveCPreprocessorParser.SIZEOF = 25;
ObjectiveCPreprocessorParser.STATIC = 26;
ObjectiveCPreprocessorParser.STRUCT = 27;
ObjectiveCPreprocessorParser.SWITCH = 28;
ObjectiveCPreprocessorParser.TYPEDEF = 29;
ObjectiveCPreprocessorParser.UNION = 30;
ObjectiveCPreprocessorParser.UNSIGNED = 31;
ObjectiveCPreprocessorParser.VOID = 32;
ObjectiveCPreprocessorParser.VOLATILE = 33;
ObjectiveCPreprocessorParser.WHILE = 34;
ObjectiveCPreprocessorParser.BOOL_ = 35;
ObjectiveCPreprocessorParser.COMPLEX = 36;
ObjectiveCPreprocessorParser.IMAGINERY = 37;
ObjectiveCPreprocessorParser.TRUE = 38;
ObjectiveCPreprocessorParser.FALSE = 39;
ObjectiveCPreprocessorParser.BOOL = 40;
ObjectiveCPreprocessorParser.Class = 41;
ObjectiveCPreprocessorParser.BYCOPY = 42;
ObjectiveCPreprocessorParser.BYREF = 43;
ObjectiveCPreprocessorParser.ID = 44;
ObjectiveCPreprocessorParser.IMP = 45;
ObjectiveCPreprocessorParser.IN = 46;
ObjectiveCPreprocessorParser.INOUT = 47;
ObjectiveCPreprocessorParser.NIL = 48;
ObjectiveCPreprocessorParser.NO = 49;
ObjectiveCPreprocessorParser.NULL_ = 50;
ObjectiveCPreprocessorParser.ONEWAY = 51;
ObjectiveCPreprocessorParser.OUT = 52;
ObjectiveCPreprocessorParser.PROTOCOL_ = 53;
ObjectiveCPreprocessorParser.SEL = 54;
ObjectiveCPreprocessorParser.SELF = 55;
ObjectiveCPreprocessorParser.SUPER = 56;
ObjectiveCPreprocessorParser.YES = 57;
ObjectiveCPreprocessorParser.AUTORELEASEPOOL = 58;
ObjectiveCPreprocessorParser.CATCH = 59;
ObjectiveCPreprocessorParser.CLASS = 60;
ObjectiveCPreprocessorParser.DYNAMIC = 61;
ObjectiveCPreprocessorParser.ENCODE = 62;
ObjectiveCPreprocessorParser.END = 63;
ObjectiveCPreprocessorParser.FINALLY = 64;
ObjectiveCPreprocessorParser.IMPLEMENTATION = 65;
ObjectiveCPreprocessorParser.INTERFACE = 66;
ObjectiveCPreprocessorParser.IMPORT = 67;
ObjectiveCPreprocessorParser.PACKAGE = 68;
ObjectiveCPreprocessorParser.PROTOCOL = 69;
ObjectiveCPreprocessorParser.OPTIONAL = 70;
ObjectiveCPreprocessorParser.PRIVATE = 71;
ObjectiveCPreprocessorParser.PROPERTY = 72;
ObjectiveCPreprocessorParser.PROTECTED = 73;
ObjectiveCPreprocessorParser.PUBLIC = 74;
ObjectiveCPreprocessorParser.REQUIRED = 75;
ObjectiveCPreprocessorParser.SELECTOR = 76;
ObjectiveCPreprocessorParser.SYNCHRONIZED = 77;
ObjectiveCPreprocessorParser.SYNTHESIZE = 78;
ObjectiveCPreprocessorParser.THROW = 79;
ObjectiveCPreprocessorParser.TRY = 80;
ObjectiveCPreprocessorParser.ATOMIC = 81;
ObjectiveCPreprocessorParser.NONATOMIC = 82;
ObjectiveCPreprocessorParser.RETAIN = 83;
ObjectiveCPreprocessorParser.DIRECT = 84;
ObjectiveCPreprocessorParser.INLINE_ATTR = 85;
ObjectiveCPreprocessorParser.ATTRIBUTE = 86;
ObjectiveCPreprocessorParser.EXTENSION = 87;
ObjectiveCPreprocessorParser.STATIC_ASSERT = 88;
ObjectiveCPreprocessorParser.ALIGN_OF = 89;
ObjectiveCPreprocessorParser.AUTORELEASING_QUALIFIER = 90;
ObjectiveCPreprocessorParser.BLOCK = 91;
ObjectiveCPreprocessorParser.BRIDGE = 92;
ObjectiveCPreprocessorParser.BRIDGE_RETAINED = 93;
ObjectiveCPreprocessorParser.BRIDGE_TRANSFER = 94;
ObjectiveCPreprocessorParser.COVARIANT = 95;
ObjectiveCPreprocessorParser.CONTRAVARIANT = 96;
ObjectiveCPreprocessorParser.DEPRECATED = 97;
ObjectiveCPreprocessorParser.KINDOF = 98;
ObjectiveCPreprocessorParser.STRONG_QUALIFIER = 99;
ObjectiveCPreprocessorParser.TYPEOF = 100;
ObjectiveCPreprocessorParser.UNSAFE_UNRETAINED_QUALIFIER = 101;
ObjectiveCPreprocessorParser.UNUSED = 102;
ObjectiveCPreprocessorParser.WEAK_QUALIFIER = 103;
ObjectiveCPreprocessorParser.NULL_UNSPECIFIED = 104;
ObjectiveCPreprocessorParser.NULLABLE = 105;
ObjectiveCPreprocessorParser.NONNULL = 106;
ObjectiveCPreprocessorParser.NULL_RESETTABLE = 107;
ObjectiveCPreprocessorParser.NS_INLINE = 108;
ObjectiveCPreprocessorParser.NS_ENUM = 109;
ObjectiveCPreprocessorParser.NS_CLOSED_ENUM = 110;
ObjectiveCPreprocessorParser.NS_ERROR_ENUM = 111;
ObjectiveCPreprocessorParser.NS_OPTIONS = 112;
ObjectiveCPreprocessorParser.NS_SWIFT_NAME = 113;
ObjectiveCPreprocessorParser.NS_NOESCAPE = 114;
ObjectiveCPreprocessorParser.NS_UNAVAILABLE = 115;
ObjectiveCPreprocessorParser.NS_SWIFT_UNAVAILABLE = 116;
ObjectiveCPreprocessorParser.API_AVAILABLE = 117;
ObjectiveCPreprocessorParser.API_UNAVAILABLE = 118;
ObjectiveCPreprocessorParser.ASSIGN = 119;
ObjectiveCPreprocessorParser.COPY = 120;
ObjectiveCPreprocessorParser.GETTER = 121;
ObjectiveCPreprocessorParser.SETTER = 122;
ObjectiveCPreprocessorParser.STRONG = 123;
ObjectiveCPreprocessorParser.READONLY = 124;
ObjectiveCPreprocessorParser.READWRITE = 125;
ObjectiveCPreprocessorParser.WEAK = 126;
ObjectiveCPreprocessorParser.UNSAFE_UNRETAINED = 127;
ObjectiveCPreprocessorParser.IB_OUTLET = 128;
ObjectiveCPreprocessorParser.IB_OUTLET_COLLECTION = 129;
ObjectiveCPreprocessorParser.IB_INSPECTABLE = 130;
ObjectiveCPreprocessorParser.IB_DESIGNABLE = 131;
ObjectiveCPreprocessorParser.NS_ASSUME_NONNULL_BEGIN = 132;
ObjectiveCPreprocessorParser.NS_ASSUME_NONNULL_END = 133;
ObjectiveCPreprocessorParser.EXTERN_SUFFIX = 134;
ObjectiveCPreprocessorParser.IOS_SUFFIX = 135;
ObjectiveCPreprocessorParser.MAC_SUFFIX = 136;
ObjectiveCPreprocessorParser.TVOS_PROHIBITED = 137;
ObjectiveCPreprocessorParser.IDENTIFIER = 138;
ObjectiveCPreprocessorParser.LP = 139;
ObjectiveCPreprocessorParser.RP = 140;
ObjectiveCPreprocessorParser.LBRACE = 141;
ObjectiveCPreprocessorParser.RBRACE = 142;
ObjectiveCPreprocessorParser.LBRACK = 143;
ObjectiveCPreprocessorParser.RBRACK = 144;
ObjectiveCPreprocessorParser.SEMI = 145;
ObjectiveCPreprocessorParser.COMMA = 146;
ObjectiveCPreprocessorParser.DOT = 147;
ObjectiveCPreprocessorParser.STRUCTACCESS = 148;
ObjectiveCPreprocessorParser.AT = 149;
ObjectiveCPreprocessorParser.UNDERSCORE = 150;
ObjectiveCPreprocessorParser.ASSIGNMENT = 151;
ObjectiveCPreprocessorParser.GT = 152;
ObjectiveCPreprocessorParser.LT = 153;
ObjectiveCPreprocessorParser.BANG = 154;
ObjectiveCPreprocessorParser.TILDE = 155;
ObjectiveCPreprocessorParser.QUESTION = 156;
ObjectiveCPreprocessorParser.COLON = 157;
ObjectiveCPreprocessorParser.EQUAL = 158;
ObjectiveCPreprocessorParser.LE = 159;
ObjectiveCPreprocessorParser.GE = 160;
ObjectiveCPreprocessorParser.NOTEQUAL = 161;
ObjectiveCPreprocessorParser.AND = 162;
ObjectiveCPreprocessorParser.OR = 163;
ObjectiveCPreprocessorParser.INC = 164;
ObjectiveCPreprocessorParser.DEC = 165;
ObjectiveCPreprocessorParser.ADD = 166;
ObjectiveCPreprocessorParser.SUB = 167;
ObjectiveCPreprocessorParser.MUL = 168;
ObjectiveCPreprocessorParser.DIV = 169;
ObjectiveCPreprocessorParser.BITAND = 170;
ObjectiveCPreprocessorParser.BITOR = 171;
ObjectiveCPreprocessorParser.BITXOR = 172;
ObjectiveCPreprocessorParser.MOD = 173;
ObjectiveCPreprocessorParser.ADD_ASSIGN = 174;
ObjectiveCPreprocessorParser.SUB_ASSIGN = 175;
ObjectiveCPreprocessorParser.MUL_ASSIGN = 176;
ObjectiveCPreprocessorParser.DIV_ASSIGN = 177;
ObjectiveCPreprocessorParser.AND_ASSIGN = 178;
ObjectiveCPreprocessorParser.OR_ASSIGN = 179;
ObjectiveCPreprocessorParser.XOR_ASSIGN = 180;
ObjectiveCPreprocessorParser.MOD_ASSIGN = 181;
ObjectiveCPreprocessorParser.LSHIFT_ASSIGN = 182;
ObjectiveCPreprocessorParser.RSHIFT_ASSIGN = 183;
ObjectiveCPreprocessorParser.ELIPSIS = 184;
ObjectiveCPreprocessorParser.CHARACTER_LITERAL = 185;
ObjectiveCPreprocessorParser.STRING_START = 186;
ObjectiveCPreprocessorParser.HEX_LITERAL = 187;
ObjectiveCPreprocessorParser.OCTAL_LITERAL = 188;
ObjectiveCPreprocessorParser.BINARY_LITERAL = 189;
ObjectiveCPreprocessorParser.DECIMAL_LITERAL = 190;
ObjectiveCPreprocessorParser.FLOATING_POINT_LITERAL = 191;
ObjectiveCPreprocessorParser.WS = 192;
ObjectiveCPreprocessorParser.MULTI_COMMENT = 193;
ObjectiveCPreprocessorParser.SINGLE_COMMENT = 194;
ObjectiveCPreprocessorParser.BACKSLASH = 195;
ObjectiveCPreprocessorParser.SHARP = 196;
ObjectiveCPreprocessorParser.STRING_NEWLINE = 197;
ObjectiveCPreprocessorParser.STRING_END = 198;
ObjectiveCPreprocessorParser.STRING_VALUE = 199;
ObjectiveCPreprocessorParser.DIRECTIVE_IMPORT = 200;
ObjectiveCPreprocessorParser.DIRECTIVE_INCLUDE = 201;
ObjectiveCPreprocessorParser.DIRECTIVE_PRAGMA = 202;
ObjectiveCPreprocessorParser.DIRECTIVE_DEFINE = 203;
ObjectiveCPreprocessorParser.DIRECTIVE_DEFINED = 204;
ObjectiveCPreprocessorParser.DIRECTIVE_IF = 205;
ObjectiveCPreprocessorParser.DIRECTIVE_ELIF = 206;
ObjectiveCPreprocessorParser.DIRECTIVE_ELSE = 207;
ObjectiveCPreprocessorParser.DIRECTIVE_UNDEF = 208;
ObjectiveCPreprocessorParser.DIRECTIVE_IFDEF = 209;
ObjectiveCPreprocessorParser.DIRECTIVE_IFNDEF = 210;
ObjectiveCPreprocessorParser.DIRECTIVE_ENDIF = 211;
ObjectiveCPreprocessorParser.DIRECTIVE_TRUE = 212;
ObjectiveCPreprocessorParser.DIRECTIVE_FALSE = 213;
ObjectiveCPreprocessorParser.DIRECTIVE_ERROR = 214;
ObjectiveCPreprocessorParser.DIRECTIVE_WARNING = 215;
ObjectiveCPreprocessorParser.DIRECTIVE_BANG = 216;
ObjectiveCPreprocessorParser.DIRECTIVE_LP = 217;
ObjectiveCPreprocessorParser.DIRECTIVE_RP = 218;
ObjectiveCPreprocessorParser.DIRECTIVE_EQUAL = 219;
ObjectiveCPreprocessorParser.DIRECTIVE_NOTEQUAL = 220;
ObjectiveCPreprocessorParser.DIRECTIVE_AND = 221;
ObjectiveCPreprocessorParser.DIRECTIVE_OR = 222;
ObjectiveCPreprocessorParser.DIRECTIVE_LT = 223;
ObjectiveCPreprocessorParser.DIRECTIVE_GT = 224;
ObjectiveCPreprocessorParser.DIRECTIVE_LE = 225;
ObjectiveCPreprocessorParser.DIRECTIVE_GE = 226;
ObjectiveCPreprocessorParser.DIRECTIVE_STRING = 227;
ObjectiveCPreprocessorParser.DIRECTIVE_ID = 228;
ObjectiveCPreprocessorParser.DIRECTIVE_DECIMAL_LITERAL = 229;
ObjectiveCPreprocessorParser.DIRECTIVE_FLOAT = 230;
ObjectiveCPreprocessorParser.DIRECTIVE_NEWLINE = 231;
ObjectiveCPreprocessorParser.DIRECTIVE_MULTI_COMMENT = 232;
ObjectiveCPreprocessorParser.DIRECTIVE_SINGLE_COMMENT = 233;
ObjectiveCPreprocessorParser.DIRECTIVE_BACKSLASH_NEWLINE = 234;
ObjectiveCPreprocessorParser.DIRECTIVE_TEXT_NEWLINE = 235;
ObjectiveCPreprocessorParser.DIRECTIVE_TEXT = 236;

ObjectiveCPreprocessorParser.RULE_directive = 0;
ObjectiveCPreprocessorParser.RULE_directiveText = 1;
ObjectiveCPreprocessorParser.RULE_preprocessorExpression = 2;

class DirectiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ObjectiveCPreprocessorParser.RULE_directive;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class PreprocessorDefContext extends DirectiveContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	SHARP() {
	    return this.getToken(ObjectiveCPreprocessorParser.SHARP, 0);
	};

	DIRECTIVE_IFDEF() {
	    return this.getToken(ObjectiveCPreprocessorParser.DIRECTIVE_IFDEF, 0);
	};

	DIRECTIVE_ID() {
	    return this.getToken(ObjectiveCPreprocessorParser.DIRECTIVE_ID, 0);
	};

	DIRECTIVE_IFNDEF() {
	    return this.getToken(ObjectiveCPreprocessorParser.DIRECTIVE_IFNDEF, 0);
	};

	DIRECTIVE_UNDEF() {
	    return this.getToken(ObjectiveCPreprocessorParser.DIRECTIVE_UNDEF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ObjectiveCPreprocessorParserListener ) {
	        listener.enterPreprocessorDef(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ObjectiveCPreprocessorParserListener ) {
	        listener.exitPreprocessorDef(this);
		}
	}


}

ObjectiveCPreprocessorParser.PreprocessorDefContext = PreprocessorDefContext;

class PreprocessorErrorContext extends DirectiveContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	SHARP() {
	    return this.getToken(ObjectiveCPreprocessorParser.SHARP, 0);
	};

	DIRECTIVE_ERROR() {
	    return this.getToken(ObjectiveCPreprocessorParser.DIRECTIVE_ERROR, 0);
	};

	directiveText() {
	    return this.getTypedRuleContext(DirectiveTextContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ObjectiveCPreprocessorParserListener ) {
	        listener.enterPreprocessorError(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ObjectiveCPreprocessorParserListener ) {
	        listener.exitPreprocessorError(this);
		}
	}


}

ObjectiveCPreprocessorParser.PreprocessorErrorContext = PreprocessorErrorContext;

class PreprocessorConditionalContext extends DirectiveContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	SHARP() {
	    return this.getToken(ObjectiveCPreprocessorParser.SHARP, 0);
	};

	DIRECTIVE_IF() {
	    return this.getToken(ObjectiveCPreprocessorParser.DIRECTIVE_IF, 0);
	};

	preprocessorExpression() {
	    return this.getTypedRuleContext(PreprocessorExpressionContext,0);
	};

	DIRECTIVE_ELIF() {
	    return this.getToken(ObjectiveCPreprocessorParser.DIRECTIVE_ELIF, 0);
	};

	DIRECTIVE_ELSE() {
	    return this.getToken(ObjectiveCPreprocessorParser.DIRECTIVE_ELSE, 0);
	};

	DIRECTIVE_ENDIF() {
	    return this.getToken(ObjectiveCPreprocessorParser.DIRECTIVE_ENDIF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ObjectiveCPreprocessorParserListener ) {
	        listener.enterPreprocessorConditional(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ObjectiveCPreprocessorParserListener ) {
	        listener.exitPreprocessorConditional(this);
		}
	}


}

ObjectiveCPreprocessorParser.PreprocessorConditionalContext = PreprocessorConditionalContext;

class PreprocessorImportContext extends DirectiveContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	SHARP() {
	    return this.getToken(ObjectiveCPreprocessorParser.SHARP, 0);
	};

	directiveText() {
	    return this.getTypedRuleContext(DirectiveTextContext,0);
	};

	DIRECTIVE_IMPORT() {
	    return this.getToken(ObjectiveCPreprocessorParser.DIRECTIVE_IMPORT, 0);
	};

	DIRECTIVE_INCLUDE() {
	    return this.getToken(ObjectiveCPreprocessorParser.DIRECTIVE_INCLUDE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ObjectiveCPreprocessorParserListener ) {
	        listener.enterPreprocessorImport(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ObjectiveCPreprocessorParserListener ) {
	        listener.exitPreprocessorImport(this);
		}
	}


}

ObjectiveCPreprocessorParser.PreprocessorImportContext = PreprocessorImportContext;

class PreprocessorPragmaContext extends DirectiveContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	SHARP() {
	    return this.getToken(ObjectiveCPreprocessorParser.SHARP, 0);
	};

	DIRECTIVE_PRAGMA() {
	    return this.getToken(ObjectiveCPreprocessorParser.DIRECTIVE_PRAGMA, 0);
	};

	directiveText() {
	    return this.getTypedRuleContext(DirectiveTextContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ObjectiveCPreprocessorParserListener ) {
	        listener.enterPreprocessorPragma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ObjectiveCPreprocessorParserListener ) {
	        listener.exitPreprocessorPragma(this);
		}
	}


}

ObjectiveCPreprocessorParser.PreprocessorPragmaContext = PreprocessorPragmaContext;

class PreprocessorDefineContext extends DirectiveContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	SHARP() {
	    return this.getToken(ObjectiveCPreprocessorParser.SHARP, 0);
	};

	DIRECTIVE_DEFINE() {
	    return this.getToken(ObjectiveCPreprocessorParser.DIRECTIVE_DEFINE, 0);
	};

	DIRECTIVE_ID() {
	    return this.getToken(ObjectiveCPreprocessorParser.DIRECTIVE_ID, 0);
	};

	directiveText() {
	    return this.getTypedRuleContext(DirectiveTextContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ObjectiveCPreprocessorParserListener ) {
	        listener.enterPreprocessorDefine(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ObjectiveCPreprocessorParserListener ) {
	        listener.exitPreprocessorDefine(this);
		}
	}


}

ObjectiveCPreprocessorParser.PreprocessorDefineContext = PreprocessorDefineContext;

class PreprocessorWarningContext extends DirectiveContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	SHARP() {
	    return this.getToken(ObjectiveCPreprocessorParser.SHARP, 0);
	};

	DIRECTIVE_WARNING() {
	    return this.getToken(ObjectiveCPreprocessorParser.DIRECTIVE_WARNING, 0);
	};

	directiveText() {
	    return this.getTypedRuleContext(DirectiveTextContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ObjectiveCPreprocessorParserListener ) {
	        listener.enterPreprocessorWarning(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ObjectiveCPreprocessorParserListener ) {
	        listener.exitPreprocessorWarning(this);
		}
	}


}

ObjectiveCPreprocessorParser.PreprocessorWarningContext = PreprocessorWarningContext;

class DirectiveTextContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ObjectiveCPreprocessorParser.RULE_directiveText;
    }

	DIRECTIVE_TEXT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ObjectiveCPreprocessorParser.DIRECTIVE_TEXT);
	    } else {
	        return this.getToken(ObjectiveCPreprocessorParser.DIRECTIVE_TEXT, i);
	    }
	};


	DIRECTIVE_TEXT_NEWLINE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ObjectiveCPreprocessorParser.DIRECTIVE_TEXT_NEWLINE);
	    } else {
	        return this.getToken(ObjectiveCPreprocessorParser.DIRECTIVE_TEXT_NEWLINE, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof ObjectiveCPreprocessorParserListener ) {
	        listener.enterDirectiveText(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ObjectiveCPreprocessorParserListener ) {
	        listener.exitDirectiveText(this);
		}
	}


}



class PreprocessorExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ObjectiveCPreprocessorParser.RULE_preprocessorExpression;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class PreprocessorParenthesisContext extends PreprocessorExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	DIRECTIVE_LP() {
	    return this.getToken(ObjectiveCPreprocessorParser.DIRECTIVE_LP, 0);
	};

	preprocessorExpression() {
	    return this.getTypedRuleContext(PreprocessorExpressionContext,0);
	};

	DIRECTIVE_RP() {
	    return this.getToken(ObjectiveCPreprocessorParser.DIRECTIVE_RP, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ObjectiveCPreprocessorParserListener ) {
	        listener.enterPreprocessorParenthesis(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ObjectiveCPreprocessorParserListener ) {
	        listener.exitPreprocessorParenthesis(this);
		}
	}


}

ObjectiveCPreprocessorParser.PreprocessorParenthesisContext = PreprocessorParenthesisContext;

class PreprocessorNotContext extends PreprocessorExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	DIRECTIVE_BANG() {
	    return this.getToken(ObjectiveCPreprocessorParser.DIRECTIVE_BANG, 0);
	};

	preprocessorExpression() {
	    return this.getTypedRuleContext(PreprocessorExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ObjectiveCPreprocessorParserListener ) {
	        listener.enterPreprocessorNot(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ObjectiveCPreprocessorParserListener ) {
	        listener.exitPreprocessorNot(this);
		}
	}


}

ObjectiveCPreprocessorParser.PreprocessorNotContext = PreprocessorNotContext;

class PreprocessorBinaryContext extends PreprocessorExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null;;
        super.copyFrom(ctx);
    }

	preprocessorExpression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PreprocessorExpressionContext);
	    } else {
	        return this.getTypedRuleContext(PreprocessorExpressionContext,i);
	    }
	};

	DIRECTIVE_EQUAL() {
	    return this.getToken(ObjectiveCPreprocessorParser.DIRECTIVE_EQUAL, 0);
	};

	DIRECTIVE_NOTEQUAL() {
	    return this.getToken(ObjectiveCPreprocessorParser.DIRECTIVE_NOTEQUAL, 0);
	};

	DIRECTIVE_AND() {
	    return this.getToken(ObjectiveCPreprocessorParser.DIRECTIVE_AND, 0);
	};

	DIRECTIVE_OR() {
	    return this.getToken(ObjectiveCPreprocessorParser.DIRECTIVE_OR, 0);
	};

	DIRECTIVE_LT() {
	    return this.getToken(ObjectiveCPreprocessorParser.DIRECTIVE_LT, 0);
	};

	DIRECTIVE_GT() {
	    return this.getToken(ObjectiveCPreprocessorParser.DIRECTIVE_GT, 0);
	};

	DIRECTIVE_LE() {
	    return this.getToken(ObjectiveCPreprocessorParser.DIRECTIVE_LE, 0);
	};

	DIRECTIVE_GE() {
	    return this.getToken(ObjectiveCPreprocessorParser.DIRECTIVE_GE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ObjectiveCPreprocessorParserListener ) {
	        listener.enterPreprocessorBinary(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ObjectiveCPreprocessorParserListener ) {
	        listener.exitPreprocessorBinary(this);
		}
	}


}

ObjectiveCPreprocessorParser.PreprocessorBinaryContext = PreprocessorBinaryContext;

class PreprocessorConstantContext extends PreprocessorExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	DIRECTIVE_TRUE() {
	    return this.getToken(ObjectiveCPreprocessorParser.DIRECTIVE_TRUE, 0);
	};

	DIRECTIVE_FALSE() {
	    return this.getToken(ObjectiveCPreprocessorParser.DIRECTIVE_FALSE, 0);
	};

	DIRECTIVE_DECIMAL_LITERAL() {
	    return this.getToken(ObjectiveCPreprocessorParser.DIRECTIVE_DECIMAL_LITERAL, 0);
	};

	DIRECTIVE_STRING() {
	    return this.getToken(ObjectiveCPreprocessorParser.DIRECTIVE_STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ObjectiveCPreprocessorParserListener ) {
	        listener.enterPreprocessorConstant(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ObjectiveCPreprocessorParserListener ) {
	        listener.exitPreprocessorConstant(this);
		}
	}


}

ObjectiveCPreprocessorParser.PreprocessorConstantContext = PreprocessorConstantContext;

class PreprocessorConditionalSymbolContext extends PreprocessorExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	DIRECTIVE_ID() {
	    return this.getToken(ObjectiveCPreprocessorParser.DIRECTIVE_ID, 0);
	};

	DIRECTIVE_LP() {
	    return this.getToken(ObjectiveCPreprocessorParser.DIRECTIVE_LP, 0);
	};

	preprocessorExpression() {
	    return this.getTypedRuleContext(PreprocessorExpressionContext,0);
	};

	DIRECTIVE_RP() {
	    return this.getToken(ObjectiveCPreprocessorParser.DIRECTIVE_RP, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ObjectiveCPreprocessorParserListener ) {
	        listener.enterPreprocessorConditionalSymbol(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ObjectiveCPreprocessorParserListener ) {
	        listener.exitPreprocessorConditionalSymbol(this);
		}
	}


}

ObjectiveCPreprocessorParser.PreprocessorConditionalSymbolContext = PreprocessorConditionalSymbolContext;

class PreprocessorDefinedContext extends PreprocessorExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	DIRECTIVE_DEFINED() {
	    return this.getToken(ObjectiveCPreprocessorParser.DIRECTIVE_DEFINED, 0);
	};

	DIRECTIVE_ID() {
	    return this.getToken(ObjectiveCPreprocessorParser.DIRECTIVE_ID, 0);
	};

	DIRECTIVE_LP() {
	    return this.getToken(ObjectiveCPreprocessorParser.DIRECTIVE_LP, 0);
	};

	DIRECTIVE_RP() {
	    return this.getToken(ObjectiveCPreprocessorParser.DIRECTIVE_RP, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ObjectiveCPreprocessorParserListener ) {
	        listener.enterPreprocessorDefined(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ObjectiveCPreprocessorParserListener ) {
	        listener.exitPreprocessorDefined(this);
		}
	}


}

ObjectiveCPreprocessorParser.PreprocessorDefinedContext = PreprocessorDefinedContext;


ObjectiveCPreprocessorParser.DirectiveContext = DirectiveContext; 
ObjectiveCPreprocessorParser.DirectiveTextContext = DirectiveTextContext; 
ObjectiveCPreprocessorParser.PreprocessorExpressionContext = PreprocessorExpressionContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
