// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/objc/two-step-processing/ObjectiveCPreprocessorParser.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import ObjectiveCPreprocessorParserListener from './ObjectiveCPreprocessorParserListener.js';
const serializedATN = [4,1,40,107,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,1,0,5,0,14,8,0,10,0,12,0,17,9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,3,
1,26,8,1,1,2,4,2,29,8,2,11,2,12,2,30,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,
1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,54,8,3,3,3,56,8,3,1,
4,4,4,59,8,4,11,4,12,4,60,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,3,5,73,
8,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,3,5,86,8,5,3,5,88,8,5,1,
5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,5,5,102,8,5,10,5,12,5,105,
9,5,1,5,0,1,10,6,0,2,4,6,8,10,0,4,1,1,34,34,1,0,3,4,1,0,21,22,1,0,25,28,
128,0,15,1,0,0,0,2,25,1,0,0,0,4,28,1,0,0,0,6,55,1,0,0,0,8,58,1,0,0,0,10,
87,1,0,0,0,12,14,3,2,1,0,13,12,1,0,0,0,14,17,1,0,0,0,15,13,1,0,0,0,15,16,
1,0,0,0,16,18,1,0,0,0,17,15,1,0,0,0,18,19,5,0,0,1,19,1,1,0,0,0,20,26,3,4,
2,0,21,22,5,1,0,0,22,23,3,6,3,0,23,24,7,0,0,0,24,26,1,0,0,0,25,20,1,0,0,
0,25,21,1,0,0,0,26,3,1,0,0,0,27,29,5,2,0,0,28,27,1,0,0,0,29,30,1,0,0,0,30,
28,1,0,0,0,30,31,1,0,0,0,31,5,1,0,0,0,32,33,7,1,0,0,33,56,3,8,4,0,34,35,
5,8,0,0,35,56,3,10,5,0,36,37,5,9,0,0,37,56,3,10,5,0,38,56,5,10,0,0,39,56,
5,14,0,0,40,41,5,12,0,0,41,56,5,31,0,0,42,43,5,13,0,0,43,56,5,31,0,0,44,
45,5,11,0,0,45,56,5,31,0,0,46,47,5,5,0,0,47,56,3,8,4,0,48,49,5,17,0,0,49,
56,3,8,4,0,50,51,5,6,0,0,51,53,5,31,0,0,52,54,3,8,4,0,53,52,1,0,0,0,53,54,
1,0,0,0,54,56,1,0,0,0,55,32,1,0,0,0,55,34,1,0,0,0,55,36,1,0,0,0,55,38,1,
0,0,0,55,39,1,0,0,0,55,40,1,0,0,0,55,42,1,0,0,0,55,44,1,0,0,0,55,46,1,0,
0,0,55,48,1,0,0,0,55,50,1,0,0,0,56,7,1,0,0,0,57,59,5,39,0,0,58,57,1,0,0,
0,59,60,1,0,0,0,60,58,1,0,0,0,60,61,1,0,0,0,61,9,1,0,0,0,62,63,6,5,-1,0,
63,88,5,15,0,0,64,88,5,16,0,0,65,88,5,32,0,0,66,88,5,30,0,0,67,72,5,31,0,
0,68,69,5,19,0,0,69,70,3,10,5,0,70,71,5,20,0,0,71,73,1,0,0,0,72,68,1,0,0,
0,72,73,1,0,0,0,73,88,1,0,0,0,74,75,5,19,0,0,75,76,3,10,5,0,76,77,5,20,0,
0,77,88,1,0,0,0,78,79,5,18,0,0,79,88,3,10,5,6,80,85,5,7,0,0,81,86,5,31,0,
0,82,83,5,19,0,0,83,84,5,31,0,0,84,86,5,20,0,0,85,81,1,0,0,0,85,82,1,0,0,
0,86,88,1,0,0,0,87,62,1,0,0,0,87,64,1,0,0,0,87,65,1,0,0,0,87,66,1,0,0,0,
87,67,1,0,0,0,87,74,1,0,0,0,87,78,1,0,0,0,87,80,1,0,0,0,88,103,1,0,0,0,89,
90,10,5,0,0,90,91,7,2,0,0,91,102,3,10,5,6,92,93,10,4,0,0,93,94,5,23,0,0,
94,102,3,10,5,5,95,96,10,3,0,0,96,97,5,24,0,0,97,102,3,10,5,4,98,99,10,2,
0,0,99,100,7,3,0,0,100,102,3,10,5,3,101,89,1,0,0,0,101,92,1,0,0,0,101,95,
1,0,0,0,101,98,1,0,0,0,102,105,1,0,0,0,103,101,1,0,0,0,103,104,1,0,0,0,104,
11,1,0,0,0,105,103,1,0,0,0,11,15,25,30,53,55,60,72,85,87,101,103];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class ObjectiveCPreprocessorParser extends antlr4.Parser {

    static grammarFileName = "ObjectiveCPreprocessorParser.g4";
    static literalNames = [ null, "'#'", null, null, null, "'pragma'", null, 
                            "'defined'", "'if'", "'elif'", "'else'", "'undef'", 
                            "'ifdef'", "'ifndef'", "'endif'", null, null, 
                            "'error'", "'!'", "'('", "')'", "'=='", "'!='", 
                            "'&&'", "'||'", "'<'", "'>'", "'<='", "'>='" ];
    static symbolicNames = [ null, "SHARP", "CODE", "IMPORT", "INCLUDE", 
                             "PRAGMA", "DEFINE", "DEFINED", "IF", "ELIF", 
                             "ELSE", "UNDEF", "IFDEF", "IFNDEF", "ENDIF", 
                             "TRUE", "FALSE", "ERROR", "BANG", "LPAREN", 
                             "RPAREN", "EQUAL", "NOTEQUAL", "AND", "OR", 
                             "LT", "GT", "LE", "GE", "DIRECTIVE_WHITESPACES", 
                             "DIRECTIVE_STRING", "CONDITIONAL_SYMBOL", "DECIMAL_LITERAL", 
                             "FLOAT", "NEW_LINE", "DIRECITVE_COMMENT", "DIRECITVE_LINE_COMMENT", 
                             "DIRECITVE_NEW_LINE", "DIRECITVE_TEXT_NEW_LINE", 
                             "TEXT", "SLASH" ];
    static ruleNames = [ "objectiveCDocument", "text", "code", "directive", 
                         "directive_text", "preprocessor_expression" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = ObjectiveCPreprocessorParser.ruleNames;
        this.literalNames = ObjectiveCPreprocessorParser.literalNames;
        this.symbolicNames = ObjectiveCPreprocessorParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 5:
    	    		return this.preprocessor_expression_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    preprocessor_expression_sempred(localctx, predIndex) {
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




	objectiveCDocument() {
	    let localctx = new ObjectiveCDocumentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, ObjectiveCPreprocessorParser.RULE_objectiveCDocument);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 15;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===1 || _la===2) {
	            this.state = 12;
	            this.text();
	            this.state = 17;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 18;
	        this.match(ObjectiveCPreprocessorParser.EOF);
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



	text() {
	    let localctx = new TextContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, ObjectiveCPreprocessorParser.RULE_text);
	    var _la = 0;
	    try {
	        this.state = 25;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 2:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 20;
	            this.code();
	            break;
	        case 1:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 21;
	            this.match(ObjectiveCPreprocessorParser.SHARP);
	            this.state = 22;
	            this.directive();
	            this.state = 23;
	            _la = this._input.LA(1);
	            if(!(_la===-1 || _la===34)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
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



	code() {
	    let localctx = new CodeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, ObjectiveCPreprocessorParser.RULE_code);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 28; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 27;
	        		this.match(ObjectiveCPreprocessorParser.CODE);
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 30; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,2, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
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



	directive() {
	    let localctx = new DirectiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, ObjectiveCPreprocessorParser.RULE_directive);
	    var _la = 0;
	    try {
	        this.state = 55;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 3:
	        case 4:
	            localctx = new PreprocessorImportContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 32;
	            _la = this._input.LA(1);
	            if(!(_la===3 || _la===4)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 33;
	            this.directive_text();
	            break;
	        case 8:
	            localctx = new PreprocessorConditionalContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 34;
	            this.match(ObjectiveCPreprocessorParser.IF);
	            this.state = 35;
	            this.preprocessor_expression(0);
	            break;
	        case 9:
	            localctx = new PreprocessorConditionalContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 36;
	            this.match(ObjectiveCPreprocessorParser.ELIF);
	            this.state = 37;
	            this.preprocessor_expression(0);
	            break;
	        case 10:
	            localctx = new PreprocessorConditionalContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 38;
	            this.match(ObjectiveCPreprocessorParser.ELSE);
	            break;
	        case 14:
	            localctx = new PreprocessorConditionalContext(this, localctx);
	            this.enterOuterAlt(localctx, 5);
	            this.state = 39;
	            this.match(ObjectiveCPreprocessorParser.ENDIF);
	            break;
	        case 12:
	            localctx = new PreprocessorDefContext(this, localctx);
	            this.enterOuterAlt(localctx, 6);
	            this.state = 40;
	            this.match(ObjectiveCPreprocessorParser.IFDEF);
	            this.state = 41;
	            this.match(ObjectiveCPreprocessorParser.CONDITIONAL_SYMBOL);
	            break;
	        case 13:
	            localctx = new PreprocessorDefContext(this, localctx);
	            this.enterOuterAlt(localctx, 7);
	            this.state = 42;
	            this.match(ObjectiveCPreprocessorParser.IFNDEF);
	            this.state = 43;
	            this.match(ObjectiveCPreprocessorParser.CONDITIONAL_SYMBOL);
	            break;
	        case 11:
	            localctx = new PreprocessorDefContext(this, localctx);
	            this.enterOuterAlt(localctx, 8);
	            this.state = 44;
	            this.match(ObjectiveCPreprocessorParser.UNDEF);
	            this.state = 45;
	            this.match(ObjectiveCPreprocessorParser.CONDITIONAL_SYMBOL);
	            break;
	        case 5:
	            localctx = new PreprocessorPragmaContext(this, localctx);
	            this.enterOuterAlt(localctx, 9);
	            this.state = 46;
	            this.match(ObjectiveCPreprocessorParser.PRAGMA);
	            this.state = 47;
	            this.directive_text();
	            break;
	        case 17:
	            localctx = new PreprocessorErrorContext(this, localctx);
	            this.enterOuterAlt(localctx, 10);
	            this.state = 48;
	            this.match(ObjectiveCPreprocessorParser.ERROR);
	            this.state = 49;
	            this.directive_text();
	            break;
	        case 6:
	            localctx = new PreprocessorDefineContext(this, localctx);
	            this.enterOuterAlt(localctx, 11);
	            this.state = 50;
	            this.match(ObjectiveCPreprocessorParser.DEFINE);
	            this.state = 51;
	            this.match(ObjectiveCPreprocessorParser.CONDITIONAL_SYMBOL);
	            this.state = 53;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===39) {
	                this.state = 52;
	                this.directive_text();
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



	directive_text() {
	    let localctx = new Directive_textContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, ObjectiveCPreprocessorParser.RULE_directive_text);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 58; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 57;
	            this.match(ObjectiveCPreprocessorParser.TEXT);
	            this.state = 60; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===39);
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


	preprocessor_expression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new Preprocessor_expressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 10;
	    this.enterRecursionRule(localctx, 10, ObjectiveCPreprocessorParser.RULE_preprocessor_expression, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 87;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 15:
	            localctx = new PreprocessorConstantContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 63;
	            this.match(ObjectiveCPreprocessorParser.TRUE);
	            break;
	        case 16:
	            localctx = new PreprocessorConstantContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 64;
	            this.match(ObjectiveCPreprocessorParser.FALSE);
	            break;
	        case 32:
	            localctx = new PreprocessorConstantContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 65;
	            this.match(ObjectiveCPreprocessorParser.DECIMAL_LITERAL);
	            break;
	        case 30:
	            localctx = new PreprocessorConstantContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 66;
	            this.match(ObjectiveCPreprocessorParser.DIRECTIVE_STRING);
	            break;
	        case 31:
	            localctx = new PreprocessorConditionalSymbolContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 67;
	            this.match(ObjectiveCPreprocessorParser.CONDITIONAL_SYMBOL);
	            this.state = 72;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	            if(la_===1) {
	                this.state = 68;
	                this.match(ObjectiveCPreprocessorParser.LPAREN);
	                this.state = 69;
	                this.preprocessor_expression(0);
	                this.state = 70;
	                this.match(ObjectiveCPreprocessorParser.RPAREN);

	            }
	            break;
	        case 19:
	            localctx = new PreprocessorParenthesisContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 74;
	            this.match(ObjectiveCPreprocessorParser.LPAREN);
	            this.state = 75;
	            this.preprocessor_expression(0);
	            this.state = 76;
	            this.match(ObjectiveCPreprocessorParser.RPAREN);
	            break;
	        case 18:
	            localctx = new PreprocessorNotContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 78;
	            this.match(ObjectiveCPreprocessorParser.BANG);
	            this.state = 79;
	            this.preprocessor_expression(6);
	            break;
	        case 7:
	            localctx = new PreprocessorDefinedContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 80;
	            this.match(ObjectiveCPreprocessorParser.DEFINED);
	            this.state = 85;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 31:
	                this.state = 81;
	                this.match(ObjectiveCPreprocessorParser.CONDITIONAL_SYMBOL);
	                break;
	            case 19:
	                this.state = 82;
	                this.match(ObjectiveCPreprocessorParser.LPAREN);
	                this.state = 83;
	                this.match(ObjectiveCPreprocessorParser.CONDITIONAL_SYMBOL);
	                this.state = 84;
	                this.match(ObjectiveCPreprocessorParser.RPAREN);
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 103;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,10,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 101;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new PreprocessorBinaryContext(this, new Preprocessor_expressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ObjectiveCPreprocessorParser.RULE_preprocessor_expression);
	                    this.state = 89;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 90;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===21 || _la===22)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 91;
	                    this.preprocessor_expression(6);
	                    break;

	                case 2:
	                    localctx = new PreprocessorBinaryContext(this, new Preprocessor_expressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ObjectiveCPreprocessorParser.RULE_preprocessor_expression);
	                    this.state = 92;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 93;
	                    localctx.op = this.match(ObjectiveCPreprocessorParser.AND);
	                    this.state = 94;
	                    this.preprocessor_expression(5);
	                    break;

	                case 3:
	                    localctx = new PreprocessorBinaryContext(this, new Preprocessor_expressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ObjectiveCPreprocessorParser.RULE_preprocessor_expression);
	                    this.state = 95;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 96;
	                    localctx.op = this.match(ObjectiveCPreprocessorParser.OR);
	                    this.state = 97;
	                    this.preprocessor_expression(4);
	                    break;

	                case 4:
	                    localctx = new PreprocessorBinaryContext(this, new Preprocessor_expressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, ObjectiveCPreprocessorParser.RULE_preprocessor_expression);
	                    this.state = 98;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 99;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 503316480) !== 0))) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 100;
	                    this.preprocessor_expression(3);
	                    break;

	                } 
	            }
	            this.state = 105;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,10,this._ctx);
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
ObjectiveCPreprocessorParser.SHARP = 1;
ObjectiveCPreprocessorParser.CODE = 2;
ObjectiveCPreprocessorParser.IMPORT = 3;
ObjectiveCPreprocessorParser.INCLUDE = 4;
ObjectiveCPreprocessorParser.PRAGMA = 5;
ObjectiveCPreprocessorParser.DEFINE = 6;
ObjectiveCPreprocessorParser.DEFINED = 7;
ObjectiveCPreprocessorParser.IF = 8;
ObjectiveCPreprocessorParser.ELIF = 9;
ObjectiveCPreprocessorParser.ELSE = 10;
ObjectiveCPreprocessorParser.UNDEF = 11;
ObjectiveCPreprocessorParser.IFDEF = 12;
ObjectiveCPreprocessorParser.IFNDEF = 13;
ObjectiveCPreprocessorParser.ENDIF = 14;
ObjectiveCPreprocessorParser.TRUE = 15;
ObjectiveCPreprocessorParser.FALSE = 16;
ObjectiveCPreprocessorParser.ERROR = 17;
ObjectiveCPreprocessorParser.BANG = 18;
ObjectiveCPreprocessorParser.LPAREN = 19;
ObjectiveCPreprocessorParser.RPAREN = 20;
ObjectiveCPreprocessorParser.EQUAL = 21;
ObjectiveCPreprocessorParser.NOTEQUAL = 22;
ObjectiveCPreprocessorParser.AND = 23;
ObjectiveCPreprocessorParser.OR = 24;
ObjectiveCPreprocessorParser.LT = 25;
ObjectiveCPreprocessorParser.GT = 26;
ObjectiveCPreprocessorParser.LE = 27;
ObjectiveCPreprocessorParser.GE = 28;
ObjectiveCPreprocessorParser.DIRECTIVE_WHITESPACES = 29;
ObjectiveCPreprocessorParser.DIRECTIVE_STRING = 30;
ObjectiveCPreprocessorParser.CONDITIONAL_SYMBOL = 31;
ObjectiveCPreprocessorParser.DECIMAL_LITERAL = 32;
ObjectiveCPreprocessorParser.FLOAT = 33;
ObjectiveCPreprocessorParser.NEW_LINE = 34;
ObjectiveCPreprocessorParser.DIRECITVE_COMMENT = 35;
ObjectiveCPreprocessorParser.DIRECITVE_LINE_COMMENT = 36;
ObjectiveCPreprocessorParser.DIRECITVE_NEW_LINE = 37;
ObjectiveCPreprocessorParser.DIRECITVE_TEXT_NEW_LINE = 38;
ObjectiveCPreprocessorParser.TEXT = 39;
ObjectiveCPreprocessorParser.SLASH = 40;

ObjectiveCPreprocessorParser.RULE_objectiveCDocument = 0;
ObjectiveCPreprocessorParser.RULE_text = 1;
ObjectiveCPreprocessorParser.RULE_code = 2;
ObjectiveCPreprocessorParser.RULE_directive = 3;
ObjectiveCPreprocessorParser.RULE_directive_text = 4;
ObjectiveCPreprocessorParser.RULE_preprocessor_expression = 5;

class ObjectiveCDocumentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ObjectiveCPreprocessorParser.RULE_objectiveCDocument;
    }

	EOF() {
	    return this.getToken(ObjectiveCPreprocessorParser.EOF, 0);
	};

	text = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TextContext);
	    } else {
	        return this.getTypedRuleContext(TextContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ObjectiveCPreprocessorParserListener ) {
	        listener.enterObjectiveCDocument(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ObjectiveCPreprocessorParserListener ) {
	        listener.exitObjectiveCDocument(this);
		}
	}


}



class TextContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ObjectiveCPreprocessorParser.RULE_text;
    }

	code() {
	    return this.getTypedRuleContext(CodeContext,0);
	};

	SHARP() {
	    return this.getToken(ObjectiveCPreprocessorParser.SHARP, 0);
	};

	directive() {
	    return this.getTypedRuleContext(DirectiveContext,0);
	};

	NEW_LINE() {
	    return this.getToken(ObjectiveCPreprocessorParser.NEW_LINE, 0);
	};

	EOF() {
	    return this.getToken(ObjectiveCPreprocessorParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ObjectiveCPreprocessorParserListener ) {
	        listener.enterText(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ObjectiveCPreprocessorParserListener ) {
	        listener.exitText(this);
		}
	}


}



class CodeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ObjectiveCPreprocessorParser.RULE_code;
    }

	CODE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ObjectiveCPreprocessorParser.CODE);
	    } else {
	        return this.getToken(ObjectiveCPreprocessorParser.CODE, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof ObjectiveCPreprocessorParserListener ) {
	        listener.enterCode(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ObjectiveCPreprocessorParserListener ) {
	        listener.exitCode(this);
		}
	}


}



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

	IFDEF() {
	    return this.getToken(ObjectiveCPreprocessorParser.IFDEF, 0);
	};

	CONDITIONAL_SYMBOL() {
	    return this.getToken(ObjectiveCPreprocessorParser.CONDITIONAL_SYMBOL, 0);
	};

	IFNDEF() {
	    return this.getToken(ObjectiveCPreprocessorParser.IFNDEF, 0);
	};

	UNDEF() {
	    return this.getToken(ObjectiveCPreprocessorParser.UNDEF, 0);
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

	ERROR() {
	    return this.getToken(ObjectiveCPreprocessorParser.ERROR, 0);
	};

	directive_text() {
	    return this.getTypedRuleContext(Directive_textContext,0);
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

	IF() {
	    return this.getToken(ObjectiveCPreprocessorParser.IF, 0);
	};

	preprocessor_expression() {
	    return this.getTypedRuleContext(Preprocessor_expressionContext,0);
	};

	ELIF() {
	    return this.getToken(ObjectiveCPreprocessorParser.ELIF, 0);
	};

	ELSE() {
	    return this.getToken(ObjectiveCPreprocessorParser.ELSE, 0);
	};

	ENDIF() {
	    return this.getToken(ObjectiveCPreprocessorParser.ENDIF, 0);
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

	directive_text() {
	    return this.getTypedRuleContext(Directive_textContext,0);
	};

	IMPORT() {
	    return this.getToken(ObjectiveCPreprocessorParser.IMPORT, 0);
	};

	INCLUDE() {
	    return this.getToken(ObjectiveCPreprocessorParser.INCLUDE, 0);
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

	PRAGMA() {
	    return this.getToken(ObjectiveCPreprocessorParser.PRAGMA, 0);
	};

	directive_text() {
	    return this.getTypedRuleContext(Directive_textContext,0);
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

	DEFINE() {
	    return this.getToken(ObjectiveCPreprocessorParser.DEFINE, 0);
	};

	CONDITIONAL_SYMBOL() {
	    return this.getToken(ObjectiveCPreprocessorParser.CONDITIONAL_SYMBOL, 0);
	};

	directive_text() {
	    return this.getTypedRuleContext(Directive_textContext,0);
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

class Directive_textContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ObjectiveCPreprocessorParser.RULE_directive_text;
    }

	TEXT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ObjectiveCPreprocessorParser.TEXT);
	    } else {
	        return this.getToken(ObjectiveCPreprocessorParser.TEXT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof ObjectiveCPreprocessorParserListener ) {
	        listener.enterDirective_text(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ObjectiveCPreprocessorParserListener ) {
	        listener.exitDirective_text(this);
		}
	}


}



class Preprocessor_expressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ObjectiveCPreprocessorParser.RULE_preprocessor_expression;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class PreprocessorParenthesisContext extends Preprocessor_expressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	LPAREN() {
	    return this.getToken(ObjectiveCPreprocessorParser.LPAREN, 0);
	};

	preprocessor_expression() {
	    return this.getTypedRuleContext(Preprocessor_expressionContext,0);
	};

	RPAREN() {
	    return this.getToken(ObjectiveCPreprocessorParser.RPAREN, 0);
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

class PreprocessorNotContext extends Preprocessor_expressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	BANG() {
	    return this.getToken(ObjectiveCPreprocessorParser.BANG, 0);
	};

	preprocessor_expression() {
	    return this.getTypedRuleContext(Preprocessor_expressionContext,0);
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

class PreprocessorBinaryContext extends Preprocessor_expressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null;;
        super.copyFrom(ctx);
    }

	preprocessor_expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Preprocessor_expressionContext);
	    } else {
	        return this.getTypedRuleContext(Preprocessor_expressionContext,i);
	    }
	};

	EQUAL() {
	    return this.getToken(ObjectiveCPreprocessorParser.EQUAL, 0);
	};

	NOTEQUAL() {
	    return this.getToken(ObjectiveCPreprocessorParser.NOTEQUAL, 0);
	};

	AND() {
	    return this.getToken(ObjectiveCPreprocessorParser.AND, 0);
	};

	OR() {
	    return this.getToken(ObjectiveCPreprocessorParser.OR, 0);
	};

	LT() {
	    return this.getToken(ObjectiveCPreprocessorParser.LT, 0);
	};

	GT() {
	    return this.getToken(ObjectiveCPreprocessorParser.GT, 0);
	};

	LE() {
	    return this.getToken(ObjectiveCPreprocessorParser.LE, 0);
	};

	GE() {
	    return this.getToken(ObjectiveCPreprocessorParser.GE, 0);
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

class PreprocessorConstantContext extends Preprocessor_expressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	TRUE() {
	    return this.getToken(ObjectiveCPreprocessorParser.TRUE, 0);
	};

	FALSE() {
	    return this.getToken(ObjectiveCPreprocessorParser.FALSE, 0);
	};

	DECIMAL_LITERAL() {
	    return this.getToken(ObjectiveCPreprocessorParser.DECIMAL_LITERAL, 0);
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

class PreprocessorConditionalSymbolContext extends Preprocessor_expressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	CONDITIONAL_SYMBOL() {
	    return this.getToken(ObjectiveCPreprocessorParser.CONDITIONAL_SYMBOL, 0);
	};

	LPAREN() {
	    return this.getToken(ObjectiveCPreprocessorParser.LPAREN, 0);
	};

	preprocessor_expression() {
	    return this.getTypedRuleContext(Preprocessor_expressionContext,0);
	};

	RPAREN() {
	    return this.getToken(ObjectiveCPreprocessorParser.RPAREN, 0);
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

class PreprocessorDefinedContext extends Preprocessor_expressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	DEFINED() {
	    return this.getToken(ObjectiveCPreprocessorParser.DEFINED, 0);
	};

	CONDITIONAL_SYMBOL() {
	    return this.getToken(ObjectiveCPreprocessorParser.CONDITIONAL_SYMBOL, 0);
	};

	LPAREN() {
	    return this.getToken(ObjectiveCPreprocessorParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(ObjectiveCPreprocessorParser.RPAREN, 0);
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


ObjectiveCPreprocessorParser.ObjectiveCDocumentContext = ObjectiveCDocumentContext; 
ObjectiveCPreprocessorParser.TextContext = TextContext; 
ObjectiveCPreprocessorParser.CodeContext = CodeContext; 
ObjectiveCPreprocessorParser.DirectiveContext = DirectiveContext; 
ObjectiveCPreprocessorParser.Directive_textContext = Directive_textContext; 
ObjectiveCPreprocessorParser.Preprocessor_expressionContext = Preprocessor_expressionContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
