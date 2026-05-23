// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/plantUML/PlantUMLParser.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import PlantUMLParserListener from './PlantUMLParserListener.js';
const serializedATN = [4,1,51,183,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,1,0,1,0,1,0,1,1,5,1,41,
8,1,10,1,12,1,44,9,1,1,1,1,1,3,1,48,8,1,1,1,1,1,1,1,1,1,1,1,1,1,5,1,56,8,
1,10,1,12,1,59,9,1,1,1,1,1,5,1,63,8,1,10,1,12,1,66,9,1,1,2,3,2,69,8,2,1,
2,1,2,1,2,3,2,74,8,2,1,2,3,2,77,8,2,1,2,3,2,80,8,2,1,2,3,2,83,8,2,1,3,1,
3,5,3,87,8,3,10,3,12,3,90,9,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,3,4,99,8,4,1,5,
1,5,5,5,103,8,5,10,5,12,5,106,9,5,1,5,1,5,1,6,1,6,1,7,1,7,1,8,1,8,1,8,1,
9,1,9,1,10,1,10,1,10,3,10,122,8,10,1,10,3,10,125,8,10,1,11,1,11,1,11,1,11,
3,11,131,8,11,1,11,3,11,134,8,11,1,12,3,12,137,8,12,1,12,5,12,140,8,12,10,
12,12,12,143,9,12,1,12,3,12,146,8,12,1,13,1,13,3,13,150,8,13,1,14,3,14,153,
8,14,1,14,1,14,1,15,1,15,1,16,1,16,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,
17,3,17,169,8,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,3,17,179,8,17,3,
17,181,8,17,1,17,0,0,18,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,
0,4,2,0,37,37,39,39,1,0,5,6,2,0,15,15,17,22,1,0,16,17,196,0,36,1,0,0,0,2,
42,1,0,0,0,4,68,1,0,0,0,6,84,1,0,0,0,8,98,1,0,0,0,10,100,1,0,0,0,12,109,
1,0,0,0,14,111,1,0,0,0,16,113,1,0,0,0,18,116,1,0,0,0,20,118,1,0,0,0,22,126,
1,0,0,0,24,136,1,0,0,0,26,147,1,0,0,0,28,152,1,0,0,0,30,156,1,0,0,0,32,158,
1,0,0,0,34,180,1,0,0,0,36,37,3,2,1,0,37,38,5,0,0,1,38,1,1,0,0,0,39,41,7,
0,0,0,40,39,1,0,0,0,41,44,1,0,0,0,42,40,1,0,0,0,42,43,1,0,0,0,43,45,1,0,
0,0,44,42,1,0,0,0,45,47,5,3,0,0,46,48,5,42,0,0,47,46,1,0,0,0,47,48,1,0,0,
0,48,57,1,0,0,0,49,56,5,37,0,0,50,56,3,4,2,0,51,56,3,20,10,0,52,56,3,22,
11,0,53,56,3,34,17,0,54,56,5,39,0,0,55,49,1,0,0,0,55,50,1,0,0,0,55,51,1,
0,0,0,55,52,1,0,0,0,55,53,1,0,0,0,55,54,1,0,0,0,56,59,1,0,0,0,57,55,1,0,
0,0,57,58,1,0,0,0,58,60,1,0,0,0,59,57,1,0,0,0,60,64,5,4,0,0,61,63,7,0,0,
0,62,61,1,0,0,0,63,66,1,0,0,0,64,62,1,0,0,0,64,65,1,0,0,0,65,3,1,0,0,0,66,
64,1,0,0,0,67,69,3,12,6,0,68,67,1,0,0,0,68,69,1,0,0,0,69,70,1,0,0,0,70,71,
5,2,0,0,71,73,3,18,9,0,72,74,3,14,7,0,73,72,1,0,0,0,73,74,1,0,0,0,74,76,
1,0,0,0,75,77,3,16,8,0,76,75,1,0,0,0,76,77,1,0,0,0,77,82,1,0,0,0,78,80,5,
37,0,0,79,78,1,0,0,0,79,80,1,0,0,0,80,81,1,0,0,0,81,83,3,6,3,0,82,79,1,0,
0,0,82,83,1,0,0,0,83,5,1,0,0,0,84,88,5,31,0,0,85,87,3,8,4,0,86,85,1,0,0,
0,87,90,1,0,0,0,88,86,1,0,0,0,88,89,1,0,0,0,89,91,1,0,0,0,90,88,1,0,0,0,
91,92,5,45,0,0,92,7,1,0,0,0,93,99,5,43,0,0,94,99,5,44,0,0,95,99,5,46,0,0,
96,99,5,47,0,0,97,99,3,10,5,0,98,93,1,0,0,0,98,94,1,0,0,0,98,95,1,0,0,0,
98,96,1,0,0,0,98,97,1,0,0,0,99,9,1,0,0,0,100,104,5,44,0,0,101,103,3,8,4,
0,102,101,1,0,0,0,103,106,1,0,0,0,104,102,1,0,0,0,104,105,1,0,0,0,105,107,
1,0,0,0,106,104,1,0,0,0,107,108,5,45,0,0,108,11,1,0,0,0,109,110,7,1,0,0,
110,13,1,0,0,0,111,112,5,32,0,0,112,15,1,0,0,0,113,114,5,9,0,0,114,115,3,
18,9,0,115,17,1,0,0,0,116,117,5,42,0,0,117,19,1,0,0,0,118,119,5,1,0,0,119,
121,3,18,9,0,120,122,3,14,7,0,121,120,1,0,0,0,121,122,1,0,0,0,122,124,1,
0,0,0,123,125,3,6,3,0,124,123,1,0,0,0,124,125,1,0,0,0,125,21,1,0,0,0,126,
133,3,26,13,0,127,128,3,24,12,0,128,130,3,28,14,0,129,131,3,32,16,0,130,
129,1,0,0,0,130,131,1,0,0,0,131,134,1,0,0,0,132,134,3,32,16,0,133,127,1,
0,0,0,133,132,1,0,0,0,134,23,1,0,0,0,135,137,5,13,0,0,136,135,1,0,0,0,136,
137,1,0,0,0,137,141,1,0,0,0,138,140,7,2,0,0,139,138,1,0,0,0,140,143,1,0,
0,0,141,139,1,0,0,0,141,142,1,0,0,0,142,145,1,0,0,0,143,141,1,0,0,0,144,
146,5,12,0,0,145,144,1,0,0,0,145,146,1,0,0,0,146,25,1,0,0,0,147,149,3,18,
9,0,148,150,3,30,15,0,149,148,1,0,0,0,149,150,1,0,0,0,150,27,1,0,0,0,151,
153,3,30,15,0,152,151,1,0,0,0,152,153,1,0,0,0,153,154,1,0,0,0,154,155,3,
18,9,0,155,29,1,0,0,0,156,157,5,33,0,0,157,31,1,0,0,0,158,159,5,36,0,0,159,
33,1,0,0,0,160,161,5,24,0,0,161,162,3,18,9,0,162,163,5,23,0,0,163,164,3,
18,9,0,164,165,5,25,0,0,165,166,7,3,0,0,166,168,3,18,9,0,167,169,3,32,16,
0,168,167,1,0,0,0,168,169,1,0,0,0,169,181,1,0,0,0,170,171,3,18,9,0,171,172,
7,3,0,0,172,173,5,24,0,0,173,174,3,18,9,0,174,175,5,23,0,0,175,176,3,18,
9,0,176,178,5,25,0,0,177,179,3,32,16,0,178,177,1,0,0,0,178,179,1,0,0,0,179,
181,1,0,0,0,180,160,1,0,0,0,180,170,1,0,0,0,181,35,1,0,0,0,25,42,47,55,57,
64,68,73,76,79,82,88,98,104,121,124,130,133,136,141,145,149,152,168,178,
180];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class PlantUMLParser extends antlr4.Parser {

    static grammarFileName = "PlantUMLParser.g4";
    static literalNames = [ null, "'enum'", "'class'", "'@startuml'", "'@enduml'", 
                            "'interface'", "'abstract'", "'many'", "'one'", 
                            "'extends'", "'static'", "'List'", "'>'", "'<'", 
                            "'+'", "'-'", "'.'", "'..'", "'*'", "'o'", "'^'", 
                            "'|>'", "'<|'", "','", "'('", "')'", "'['", 
                            "']'", "'#'", "'='", "'null'", null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, "'}'", null, null, "'>>'", 
                            null, "'\"'" ];
    static symbolicNames = [ null, "ENUM", "CLASS", "STARTUML", "ENDUML", 
                             "INTERFACE", "ABSTRACT", "MANY", "ONE", "EXTENDS", 
                             "STATIC", "LIST", "GT", "LT", "PLUS", "DASH", 
                             "DOT", "DOUBLE_DOT", "STAR", "O", "CARET", 
                             "PIPE_GT", "LT_PIPE", "COMMA", "LPAREN", "RPAREN", 
                             "LBRACK", "RBRACK", "AMP", "EQUALS", "NULL_LITERAL", 
                             "CLASS_BODY_START", "STEREOTYPE_TEXT", "ASSOC_DETAIL", 
                             "NOTE", "DIAMOND", "AFTER_COLON_TEXT", "NEWLINE", 
                             "WS", "COMMENT", "FLOAT_LITERAL", "NUMBER", 
                             "IDENT", "BODY_INLINE_BRACES", "BODY_OPEN", 
                             "BODY_CLOSE", "BODY_CONTENT", "BODY_NL", "ENUM_FREE_TEXT_CLOSE", 
                             "ENUM_FREE_TEXT_CONTENT", "ASSOC_DETAIL_TEXT_CLOSE", 
                             "ASSOC_DETAIL_TEXT_CONTENT" ];
    static ruleNames = [ "entry_", "uml", "class_dclr", "class_body", "body_content", 
                         "nested_body", "class_type", "stereotype", "extension_dclr", 
                         "ident", "enum_dclr", "association_dclr", "relation", 
                         "association_left", "association_right", "association_detail", 
                         "association_name", "associative_class_dclr" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = PlantUMLParser.ruleNames;
        this.literalNames = PlantUMLParser.literalNames;
        this.symbolicNames = PlantUMLParser.symbolicNames;
    }



	entry_() {
	    let localctx = new Entry_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, PlantUMLParser.RULE_entry_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 36;
	        this.uml();
	        this.state = 37;
	        this.match(PlantUMLParser.EOF);
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



	uml() {
	    let localctx = new UmlContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, PlantUMLParser.RULE_uml);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 42;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===37 || _la===39) {
	            this.state = 39;
	            _la = this._input.LA(1);
	            if(!(_la===37 || _la===39)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 44;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 45;
	        this.match(PlantUMLParser.STARTUML);
	        this.state = 47;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        if(la_===1) {
	            this.state = 46;
	            this.match(PlantUMLParser.IDENT);

	        }
	        this.state = 57;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 16777318) !== 0) || ((((_la - 37)) & ~0x1f) === 0 && ((1 << (_la - 37)) & 37) !== 0)) {
	            this.state = 55;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 49;
	                this.match(PlantUMLParser.NEWLINE);
	                break;

	            case 2:
	                this.state = 50;
	                this.class_dclr();
	                break;

	            case 3:
	                this.state = 51;
	                this.enum_dclr();
	                break;

	            case 4:
	                this.state = 52;
	                this.association_dclr();
	                break;

	            case 5:
	                this.state = 53;
	                this.associative_class_dclr();
	                break;

	            case 6:
	                this.state = 54;
	                this.match(PlantUMLParser.COMMENT);
	                break;

	            }
	            this.state = 59;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 60;
	        this.match(PlantUMLParser.ENDUML);
	        this.state = 64;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===37 || _la===39) {
	            this.state = 61;
	            _la = this._input.LA(1);
	            if(!(_la===37 || _la===39)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 66;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
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



	class_dclr() {
	    let localctx = new Class_dclrContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, PlantUMLParser.RULE_class_dclr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 68;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===5 || _la===6) {
	            this.state = 67;
	            this.class_type();
	        }

	        this.state = 70;
	        this.match(PlantUMLParser.CLASS);
	        this.state = 71;
	        this.ident();
	        this.state = 73;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===32) {
	            this.state = 72;
	            this.stereotype();
	        }

	        this.state = 76;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===9) {
	            this.state = 75;
	            this.extension_dclr();
	        }

	        this.state = 82;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	        if(la_===1) {
	            this.state = 79;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===37) {
	                this.state = 78;
	                this.match(PlantUMLParser.NEWLINE);
	            }

	            this.state = 81;
	            this.class_body();

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



	class_body() {
	    let localctx = new Class_bodyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, PlantUMLParser.RULE_class_body);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 84;
	        this.match(PlantUMLParser.CLASS_BODY_START);
	        this.state = 88;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 43)) & ~0x1f) === 0 && ((1 << (_la - 43)) & 27) !== 0)) {
	            this.state = 85;
	            this.body_content();
	            this.state = 90;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 91;
	        this.match(PlantUMLParser.BODY_CLOSE);
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



	body_content() {
	    let localctx = new Body_contentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, PlantUMLParser.RULE_body_content);
	    try {
	        this.state = 98;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 93;
	            this.match(PlantUMLParser.BODY_INLINE_BRACES);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 94;
	            this.match(PlantUMLParser.BODY_OPEN);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 95;
	            this.match(PlantUMLParser.BODY_CONTENT);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 96;
	            this.match(PlantUMLParser.BODY_NL);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 97;
	            this.nested_body();
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



	nested_body() {
	    let localctx = new Nested_bodyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, PlantUMLParser.RULE_nested_body);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 100;
	        this.match(PlantUMLParser.BODY_OPEN);
	        this.state = 104;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 43)) & ~0x1f) === 0 && ((1 << (_la - 43)) & 27) !== 0)) {
	            this.state = 101;
	            this.body_content();
	            this.state = 106;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 107;
	        this.match(PlantUMLParser.BODY_CLOSE);
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



	class_type() {
	    let localctx = new Class_typeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, PlantUMLParser.RULE_class_type);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 109;
	        _la = this._input.LA(1);
	        if(!(_la===5 || _la===6)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
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



	stereotype() {
	    let localctx = new StereotypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, PlantUMLParser.RULE_stereotype);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 111;
	        this.match(PlantUMLParser.STEREOTYPE_TEXT);
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



	extension_dclr() {
	    let localctx = new Extension_dclrContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, PlantUMLParser.RULE_extension_dclr);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 113;
	        this.match(PlantUMLParser.EXTENDS);
	        this.state = 114;
	        this.ident();
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



	ident() {
	    let localctx = new IdentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, PlantUMLParser.RULE_ident);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 116;
	        this.match(PlantUMLParser.IDENT);
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



	enum_dclr() {
	    let localctx = new Enum_dclrContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, PlantUMLParser.RULE_enum_dclr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 118;
	        this.match(PlantUMLParser.ENUM);
	        this.state = 119;
	        this.ident();
	        this.state = 121;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===32) {
	            this.state = 120;
	            this.stereotype();
	        }

	        this.state = 124;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===31) {
	            this.state = 123;
	            this.class_body();
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



	association_dclr() {
	    let localctx = new Association_dclrContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, PlantUMLParser.RULE_association_dclr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 126;
	        this.association_left();
	        this.state = 133;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 12:
	        case 13:
	        case 15:
	        case 17:
	        case 18:
	        case 19:
	        case 20:
	        case 21:
	        case 22:
	        case 33:
	        case 42:
	            this.state = 127;
	            this.relation();
	            this.state = 128;
	            this.association_right();
	            this.state = 130;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===36) {
	                this.state = 129;
	                this.association_name();
	            }

	            break;
	        case 36:
	            this.state = 132;
	            this.association_name();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
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



	relation() {
	    let localctx = new RelationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, PlantUMLParser.RULE_relation);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 136;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===13) {
	            this.state = 135;
	            this.match(PlantUMLParser.LT);
	        }

	        this.state = 141;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 8290304) !== 0)) {
	            this.state = 138;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 8290304) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 143;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 145;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===12) {
	            this.state = 144;
	            this.match(PlantUMLParser.GT);
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



	association_left() {
	    let localctx = new Association_leftContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, PlantUMLParser.RULE_association_left);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 147;
	        this.ident();
	        this.state = 149;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
	        if(la_===1) {
	            this.state = 148;
	            this.association_detail();

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



	association_right() {
	    let localctx = new Association_rightContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, PlantUMLParser.RULE_association_right);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 152;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===33) {
	            this.state = 151;
	            this.association_detail();
	        }

	        this.state = 154;
	        this.ident();
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



	association_detail() {
	    let localctx = new Association_detailContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, PlantUMLParser.RULE_association_detail);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 156;
	        this.match(PlantUMLParser.ASSOC_DETAIL);
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



	association_name() {
	    let localctx = new Association_nameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, PlantUMLParser.RULE_association_name);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 158;
	        this.match(PlantUMLParser.AFTER_COLON_TEXT);
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



	associative_class_dclr() {
	    let localctx = new Associative_class_dclrContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, PlantUMLParser.RULE_associative_class_dclr);
	    var _la = 0;
	    try {
	        this.state = 180;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 24:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 160;
	            this.match(PlantUMLParser.LPAREN);
	            this.state = 161;
	            localctx.left = this.ident();
	            this.state = 162;
	            this.match(PlantUMLParser.COMMA);
	            this.state = 163;
	            localctx.right = this.ident();
	            this.state = 164;
	            this.match(PlantUMLParser.RPAREN);
	            this.state = 165;
	            _la = this._input.LA(1);
	            if(!(_la===16 || _la===17)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 166;
	            localctx.target = this.ident();
	            this.state = 168;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===36) {
	                this.state = 167;
	                this.association_name();
	            }

	            break;
	        case 42:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 170;
	            localctx.target = this.ident();
	            this.state = 171;
	            _la = this._input.LA(1);
	            if(!(_la===16 || _la===17)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 172;
	            this.match(PlantUMLParser.LPAREN);
	            this.state = 173;
	            localctx.left = this.ident();
	            this.state = 174;
	            this.match(PlantUMLParser.COMMA);
	            this.state = 175;
	            localctx.right = this.ident();
	            this.state = 176;
	            this.match(PlantUMLParser.RPAREN);
	            this.state = 178;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===36) {
	                this.state = 177;
	                this.association_name();
	            }

	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
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


}

PlantUMLParser.EOF = antlr4.Token.EOF;
PlantUMLParser.ENUM = 1;
PlantUMLParser.CLASS = 2;
PlantUMLParser.STARTUML = 3;
PlantUMLParser.ENDUML = 4;
PlantUMLParser.INTERFACE = 5;
PlantUMLParser.ABSTRACT = 6;
PlantUMLParser.MANY = 7;
PlantUMLParser.ONE = 8;
PlantUMLParser.EXTENDS = 9;
PlantUMLParser.STATIC = 10;
PlantUMLParser.LIST = 11;
PlantUMLParser.GT = 12;
PlantUMLParser.LT = 13;
PlantUMLParser.PLUS = 14;
PlantUMLParser.DASH = 15;
PlantUMLParser.DOT = 16;
PlantUMLParser.DOUBLE_DOT = 17;
PlantUMLParser.STAR = 18;
PlantUMLParser.O = 19;
PlantUMLParser.CARET = 20;
PlantUMLParser.PIPE_GT = 21;
PlantUMLParser.LT_PIPE = 22;
PlantUMLParser.COMMA = 23;
PlantUMLParser.LPAREN = 24;
PlantUMLParser.RPAREN = 25;
PlantUMLParser.LBRACK = 26;
PlantUMLParser.RBRACK = 27;
PlantUMLParser.AMP = 28;
PlantUMLParser.EQUALS = 29;
PlantUMLParser.NULL_LITERAL = 30;
PlantUMLParser.CLASS_BODY_START = 31;
PlantUMLParser.STEREOTYPE_TEXT = 32;
PlantUMLParser.ASSOC_DETAIL = 33;
PlantUMLParser.NOTE = 34;
PlantUMLParser.DIAMOND = 35;
PlantUMLParser.AFTER_COLON_TEXT = 36;
PlantUMLParser.NEWLINE = 37;
PlantUMLParser.WS = 38;
PlantUMLParser.COMMENT = 39;
PlantUMLParser.FLOAT_LITERAL = 40;
PlantUMLParser.NUMBER = 41;
PlantUMLParser.IDENT = 42;
PlantUMLParser.BODY_INLINE_BRACES = 43;
PlantUMLParser.BODY_OPEN = 44;
PlantUMLParser.BODY_CLOSE = 45;
PlantUMLParser.BODY_CONTENT = 46;
PlantUMLParser.BODY_NL = 47;
PlantUMLParser.ENUM_FREE_TEXT_CLOSE = 48;
PlantUMLParser.ENUM_FREE_TEXT_CONTENT = 49;
PlantUMLParser.ASSOC_DETAIL_TEXT_CLOSE = 50;
PlantUMLParser.ASSOC_DETAIL_TEXT_CONTENT = 51;

PlantUMLParser.RULE_entry_ = 0;
PlantUMLParser.RULE_uml = 1;
PlantUMLParser.RULE_class_dclr = 2;
PlantUMLParser.RULE_class_body = 3;
PlantUMLParser.RULE_body_content = 4;
PlantUMLParser.RULE_nested_body = 5;
PlantUMLParser.RULE_class_type = 6;
PlantUMLParser.RULE_stereotype = 7;
PlantUMLParser.RULE_extension_dclr = 8;
PlantUMLParser.RULE_ident = 9;
PlantUMLParser.RULE_enum_dclr = 10;
PlantUMLParser.RULE_association_dclr = 11;
PlantUMLParser.RULE_relation = 12;
PlantUMLParser.RULE_association_left = 13;
PlantUMLParser.RULE_association_right = 14;
PlantUMLParser.RULE_association_detail = 15;
PlantUMLParser.RULE_association_name = 16;
PlantUMLParser.RULE_associative_class_dclr = 17;

class Entry_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PlantUMLParser.RULE_entry_;
    }

	uml() {
	    return this.getTypedRuleContext(UmlContext,0);
	};

	EOF() {
	    return this.getToken(PlantUMLParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PlantUMLParserListener ) {
	        listener.enterEntry_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PlantUMLParserListener ) {
	        listener.exitEntry_(this);
		}
	}


}



class UmlContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PlantUMLParser.RULE_uml;
    }

	STARTUML() {
	    return this.getToken(PlantUMLParser.STARTUML, 0);
	};

	ENDUML() {
	    return this.getToken(PlantUMLParser.ENDUML, 0);
	};

	IDENT() {
	    return this.getToken(PlantUMLParser.IDENT, 0);
	};

	NEWLINE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(PlantUMLParser.NEWLINE);
	    } else {
	        return this.getToken(PlantUMLParser.NEWLINE, i);
	    }
	};


	class_dclr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Class_dclrContext);
	    } else {
	        return this.getTypedRuleContext(Class_dclrContext,i);
	    }
	};

	enum_dclr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Enum_dclrContext);
	    } else {
	        return this.getTypedRuleContext(Enum_dclrContext,i);
	    }
	};

	association_dclr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Association_dclrContext);
	    } else {
	        return this.getTypedRuleContext(Association_dclrContext,i);
	    }
	};

	associative_class_dclr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Associative_class_dclrContext);
	    } else {
	        return this.getTypedRuleContext(Associative_class_dclrContext,i);
	    }
	};

	COMMENT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(PlantUMLParser.COMMENT);
	    } else {
	        return this.getToken(PlantUMLParser.COMMENT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof PlantUMLParserListener ) {
	        listener.enterUml(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PlantUMLParserListener ) {
	        listener.exitUml(this);
		}
	}


}



class Class_dclrContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PlantUMLParser.RULE_class_dclr;
    }

	CLASS() {
	    return this.getToken(PlantUMLParser.CLASS, 0);
	};

	ident() {
	    return this.getTypedRuleContext(IdentContext,0);
	};

	class_type() {
	    return this.getTypedRuleContext(Class_typeContext,0);
	};

	stereotype() {
	    return this.getTypedRuleContext(StereotypeContext,0);
	};

	extension_dclr() {
	    return this.getTypedRuleContext(Extension_dclrContext,0);
	};

	class_body() {
	    return this.getTypedRuleContext(Class_bodyContext,0);
	};

	NEWLINE() {
	    return this.getToken(PlantUMLParser.NEWLINE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PlantUMLParserListener ) {
	        listener.enterClass_dclr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PlantUMLParserListener ) {
	        listener.exitClass_dclr(this);
		}
	}


}



class Class_bodyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PlantUMLParser.RULE_class_body;
    }

	CLASS_BODY_START() {
	    return this.getToken(PlantUMLParser.CLASS_BODY_START, 0);
	};

	BODY_CLOSE() {
	    return this.getToken(PlantUMLParser.BODY_CLOSE, 0);
	};

	body_content = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Body_contentContext);
	    } else {
	        return this.getTypedRuleContext(Body_contentContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof PlantUMLParserListener ) {
	        listener.enterClass_body(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PlantUMLParserListener ) {
	        listener.exitClass_body(this);
		}
	}


}



class Body_contentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PlantUMLParser.RULE_body_content;
    }

	BODY_INLINE_BRACES() {
	    return this.getToken(PlantUMLParser.BODY_INLINE_BRACES, 0);
	};

	BODY_OPEN() {
	    return this.getToken(PlantUMLParser.BODY_OPEN, 0);
	};

	BODY_CONTENT() {
	    return this.getToken(PlantUMLParser.BODY_CONTENT, 0);
	};

	BODY_NL() {
	    return this.getToken(PlantUMLParser.BODY_NL, 0);
	};

	nested_body() {
	    return this.getTypedRuleContext(Nested_bodyContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PlantUMLParserListener ) {
	        listener.enterBody_content(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PlantUMLParserListener ) {
	        listener.exitBody_content(this);
		}
	}


}



class Nested_bodyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PlantUMLParser.RULE_nested_body;
    }

	BODY_OPEN() {
	    return this.getToken(PlantUMLParser.BODY_OPEN, 0);
	};

	BODY_CLOSE() {
	    return this.getToken(PlantUMLParser.BODY_CLOSE, 0);
	};

	body_content = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Body_contentContext);
	    } else {
	        return this.getTypedRuleContext(Body_contentContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof PlantUMLParserListener ) {
	        listener.enterNested_body(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PlantUMLParserListener ) {
	        listener.exitNested_body(this);
		}
	}


}



class Class_typeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PlantUMLParser.RULE_class_type;
    }

	ABSTRACT() {
	    return this.getToken(PlantUMLParser.ABSTRACT, 0);
	};

	INTERFACE() {
	    return this.getToken(PlantUMLParser.INTERFACE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PlantUMLParserListener ) {
	        listener.enterClass_type(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PlantUMLParserListener ) {
	        listener.exitClass_type(this);
		}
	}


}



class StereotypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PlantUMLParser.RULE_stereotype;
    }

	STEREOTYPE_TEXT() {
	    return this.getToken(PlantUMLParser.STEREOTYPE_TEXT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PlantUMLParserListener ) {
	        listener.enterStereotype(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PlantUMLParserListener ) {
	        listener.exitStereotype(this);
		}
	}


}



class Extension_dclrContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PlantUMLParser.RULE_extension_dclr;
    }

	EXTENDS() {
	    return this.getToken(PlantUMLParser.EXTENDS, 0);
	};

	ident() {
	    return this.getTypedRuleContext(IdentContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PlantUMLParserListener ) {
	        listener.enterExtension_dclr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PlantUMLParserListener ) {
	        listener.exitExtension_dclr(this);
		}
	}


}



class IdentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PlantUMLParser.RULE_ident;
    }

	IDENT() {
	    return this.getToken(PlantUMLParser.IDENT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PlantUMLParserListener ) {
	        listener.enterIdent(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PlantUMLParserListener ) {
	        listener.exitIdent(this);
		}
	}


}



class Enum_dclrContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PlantUMLParser.RULE_enum_dclr;
    }

	ENUM() {
	    return this.getToken(PlantUMLParser.ENUM, 0);
	};

	ident() {
	    return this.getTypedRuleContext(IdentContext,0);
	};

	stereotype() {
	    return this.getTypedRuleContext(StereotypeContext,0);
	};

	class_body() {
	    return this.getTypedRuleContext(Class_bodyContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PlantUMLParserListener ) {
	        listener.enterEnum_dclr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PlantUMLParserListener ) {
	        listener.exitEnum_dclr(this);
		}
	}


}



class Association_dclrContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PlantUMLParser.RULE_association_dclr;
    }

	association_left() {
	    return this.getTypedRuleContext(Association_leftContext,0);
	};

	relation() {
	    return this.getTypedRuleContext(RelationContext,0);
	};

	association_right() {
	    return this.getTypedRuleContext(Association_rightContext,0);
	};

	association_name() {
	    return this.getTypedRuleContext(Association_nameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PlantUMLParserListener ) {
	        listener.enterAssociation_dclr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PlantUMLParserListener ) {
	        listener.exitAssociation_dclr(this);
		}
	}


}



class RelationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PlantUMLParser.RULE_relation;
    }

	LT() {
	    return this.getToken(PlantUMLParser.LT, 0);
	};

	GT() {
	    return this.getToken(PlantUMLParser.GT, 0);
	};

	DOUBLE_DOT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(PlantUMLParser.DOUBLE_DOT);
	    } else {
	        return this.getToken(PlantUMLParser.DOUBLE_DOT, i);
	    }
	};


	DASH = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(PlantUMLParser.DASH);
	    } else {
	        return this.getToken(PlantUMLParser.DASH, i);
	    }
	};


	PIPE_GT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(PlantUMLParser.PIPE_GT);
	    } else {
	        return this.getToken(PlantUMLParser.PIPE_GT, i);
	    }
	};


	LT_PIPE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(PlantUMLParser.LT_PIPE);
	    } else {
	        return this.getToken(PlantUMLParser.LT_PIPE, i);
	    }
	};


	O = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(PlantUMLParser.O);
	    } else {
	        return this.getToken(PlantUMLParser.O, i);
	    }
	};


	CARET = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(PlantUMLParser.CARET);
	    } else {
	        return this.getToken(PlantUMLParser.CARET, i);
	    }
	};


	STAR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(PlantUMLParser.STAR);
	    } else {
	        return this.getToken(PlantUMLParser.STAR, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof PlantUMLParserListener ) {
	        listener.enterRelation(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PlantUMLParserListener ) {
	        listener.exitRelation(this);
		}
	}


}



class Association_leftContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PlantUMLParser.RULE_association_left;
    }

	ident() {
	    return this.getTypedRuleContext(IdentContext,0);
	};

	association_detail() {
	    return this.getTypedRuleContext(Association_detailContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PlantUMLParserListener ) {
	        listener.enterAssociation_left(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PlantUMLParserListener ) {
	        listener.exitAssociation_left(this);
		}
	}


}



class Association_rightContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PlantUMLParser.RULE_association_right;
    }

	ident() {
	    return this.getTypedRuleContext(IdentContext,0);
	};

	association_detail() {
	    return this.getTypedRuleContext(Association_detailContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PlantUMLParserListener ) {
	        listener.enterAssociation_right(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PlantUMLParserListener ) {
	        listener.exitAssociation_right(this);
		}
	}


}



class Association_detailContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PlantUMLParser.RULE_association_detail;
    }

	ASSOC_DETAIL() {
	    return this.getToken(PlantUMLParser.ASSOC_DETAIL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PlantUMLParserListener ) {
	        listener.enterAssociation_detail(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PlantUMLParserListener ) {
	        listener.exitAssociation_detail(this);
		}
	}


}



class Association_nameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PlantUMLParser.RULE_association_name;
    }

	AFTER_COLON_TEXT() {
	    return this.getToken(PlantUMLParser.AFTER_COLON_TEXT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PlantUMLParserListener ) {
	        listener.enterAssociation_name(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PlantUMLParserListener ) {
	        listener.exitAssociation_name(this);
		}
	}


}



class Associative_class_dclrContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PlantUMLParser.RULE_associative_class_dclr;
        this.left = null;
        this.right = null;
        this.target = null;
    }

	LPAREN() {
	    return this.getToken(PlantUMLParser.LPAREN, 0);
	};

	COMMA() {
	    return this.getToken(PlantUMLParser.COMMA, 0);
	};

	RPAREN() {
	    return this.getToken(PlantUMLParser.RPAREN, 0);
	};

	ident = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdentContext);
	    } else {
	        return this.getTypedRuleContext(IdentContext,i);
	    }
	};

	DOT() {
	    return this.getToken(PlantUMLParser.DOT, 0);
	};

	DOUBLE_DOT() {
	    return this.getToken(PlantUMLParser.DOUBLE_DOT, 0);
	};

	association_name() {
	    return this.getTypedRuleContext(Association_nameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PlantUMLParserListener ) {
	        listener.enterAssociative_class_dclr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PlantUMLParserListener ) {
	        listener.exitAssociative_class_dclr(this);
		}
	}


}




PlantUMLParser.Entry_Context = Entry_Context; 
PlantUMLParser.UmlContext = UmlContext; 
PlantUMLParser.Class_dclrContext = Class_dclrContext; 
PlantUMLParser.Class_bodyContext = Class_bodyContext; 
PlantUMLParser.Body_contentContext = Body_contentContext; 
PlantUMLParser.Nested_bodyContext = Nested_bodyContext; 
PlantUMLParser.Class_typeContext = Class_typeContext; 
PlantUMLParser.StereotypeContext = StereotypeContext; 
PlantUMLParser.Extension_dclrContext = Extension_dclrContext; 
PlantUMLParser.IdentContext = IdentContext; 
PlantUMLParser.Enum_dclrContext = Enum_dclrContext; 
PlantUMLParser.Association_dclrContext = Association_dclrContext; 
PlantUMLParser.RelationContext = RelationContext; 
PlantUMLParser.Association_leftContext = Association_leftContext; 
PlantUMLParser.Association_rightContext = Association_rightContext; 
PlantUMLParser.Association_detailContext = Association_detailContext; 
PlantUMLParser.Association_nameContext = Association_nameContext; 
PlantUMLParser.Associative_class_dclrContext = Associative_class_dclrContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
