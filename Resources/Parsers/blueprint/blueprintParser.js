// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/blueprint/blueprint.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import blueprintListener from './blueprintListener.js';
const serializedATN = [4,1,23,206,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,1,0,5,0,40,8,
0,10,0,12,0,43,9,0,1,0,1,0,1,1,1,1,3,1,49,8,1,1,2,1,2,1,2,1,2,1,3,1,3,1,
3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,64,8,3,1,4,1,4,1,4,5,4,69,8,4,10,4,12,4,72,
9,4,1,4,3,4,75,8,4,3,4,77,8,4,1,5,1,5,1,5,1,5,1,6,1,6,3,6,85,8,6,1,7,1,7,
1,7,1,8,1,8,1,8,1,8,1,8,1,8,1,8,3,8,97,8,8,1,9,1,9,1,9,1,9,1,9,1,9,4,9,105,
8,9,11,9,12,9,106,1,9,1,9,1,9,1,10,1,10,1,11,1,11,1,11,1,11,5,11,118,8,11,
10,11,12,11,121,9,11,3,11,123,8,11,1,11,3,11,126,8,11,1,11,1,11,1,12,1,12,
1,12,1,12,1,13,1,13,1,13,1,13,1,13,5,13,139,8,13,10,13,12,13,142,9,13,1,
13,3,13,145,8,13,1,13,1,13,3,13,149,8,13,1,14,1,14,1,14,1,14,1,14,5,14,156,
8,14,10,14,12,14,159,9,14,3,14,161,8,14,1,14,3,14,164,8,14,1,14,1,14,1,15,
1,15,1,15,1,15,3,15,172,8,15,1,15,3,15,175,8,15,1,16,1,16,1,16,1,16,1,16,
5,16,182,8,16,10,16,12,16,185,9,16,1,16,3,16,188,8,16,1,16,1,16,3,16,192,
8,16,1,17,1,17,3,17,196,8,17,1,17,1,17,1,17,3,17,201,8,17,1,18,1,18,1,18,
1,18,0,0,19,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,0,2,1,0,
1,2,2,0,2,2,8,8,218,0,41,1,0,0,0,2,48,1,0,0,0,4,50,1,0,0,0,6,54,1,0,0,0,
8,76,1,0,0,0,10,78,1,0,0,0,12,82,1,0,0,0,14,86,1,0,0,0,16,96,1,0,0,0,18,
98,1,0,0,0,20,111,1,0,0,0,22,113,1,0,0,0,24,129,1,0,0,0,26,148,1,0,0,0,28,
150,1,0,0,0,30,167,1,0,0,0,32,191,1,0,0,0,34,200,1,0,0,0,36,202,1,0,0,0,
38,40,3,2,1,0,39,38,1,0,0,0,40,43,1,0,0,0,41,39,1,0,0,0,41,42,1,0,0,0,42,
44,1,0,0,0,43,41,1,0,0,0,44,45,5,0,0,1,45,1,1,0,0,0,46,49,3,4,2,0,47,49,
3,6,3,0,48,46,1,0,0,0,48,47,1,0,0,0,49,3,1,0,0,0,50,51,5,19,0,0,51,52,7,
0,0,0,52,53,3,12,6,0,53,5,1,0,0,0,54,63,5,19,0,0,55,56,5,3,0,0,56,57,3,8,
4,0,57,58,5,4,0,0,58,64,1,0,0,0,59,60,5,5,0,0,60,61,3,8,4,0,61,62,5,6,0,
0,62,64,1,0,0,0,63,55,1,0,0,0,63,59,1,0,0,0,64,7,1,0,0,0,65,70,3,10,5,0,
66,67,5,7,0,0,67,69,3,10,5,0,68,66,1,0,0,0,69,72,1,0,0,0,70,68,1,0,0,0,70,
71,1,0,0,0,71,74,1,0,0,0,72,70,1,0,0,0,73,75,5,7,0,0,74,73,1,0,0,0,74,75,
1,0,0,0,75,77,1,0,0,0,76,65,1,0,0,0,76,77,1,0,0,0,77,9,1,0,0,0,78,79,5,19,
0,0,79,80,7,1,0,0,80,81,3,12,6,0,81,11,1,0,0,0,82,84,3,16,8,0,83,85,3,14,
7,0,84,83,1,0,0,0,84,85,1,0,0,0,85,13,1,0,0,0,86,87,5,9,0,0,87,88,3,12,6,
0,88,15,1,0,0,0,89,97,5,17,0,0,90,97,3,18,9,0,91,97,3,20,10,0,92,97,5,18,
0,0,93,97,5,20,0,0,94,97,3,22,11,0,95,97,3,24,12,0,96,89,1,0,0,0,96,90,1,
0,0,0,96,91,1,0,0,0,96,92,1,0,0,0,96,93,1,0,0,0,96,94,1,0,0,0,96,95,1,0,
0,0,97,17,1,0,0,0,98,99,5,10,0,0,99,100,5,5,0,0,100,101,3,26,13,0,101,102,
5,7,0,0,102,104,5,3,0,0,103,105,3,30,15,0,104,103,1,0,0,0,105,106,1,0,0,
0,106,104,1,0,0,0,106,107,1,0,0,0,107,108,1,0,0,0,108,109,5,4,0,0,109,110,
5,6,0,0,110,19,1,0,0,0,111,112,5,19,0,0,112,21,1,0,0,0,113,122,5,11,0,0,
114,119,3,12,6,0,115,116,5,7,0,0,116,118,3,12,6,0,117,115,1,0,0,0,118,121,
1,0,0,0,119,117,1,0,0,0,119,120,1,0,0,0,120,123,1,0,0,0,121,119,1,0,0,0,
122,114,1,0,0,0,122,123,1,0,0,0,123,125,1,0,0,0,124,126,5,7,0,0,125,124,
1,0,0,0,125,126,1,0,0,0,126,127,1,0,0,0,127,128,5,12,0,0,128,23,1,0,0,0,
129,130,5,3,0,0,130,131,3,8,4,0,131,132,5,4,0,0,132,25,1,0,0,0,133,149,3,
28,14,0,134,135,5,5,0,0,135,140,3,28,14,0,136,137,5,7,0,0,137,139,3,28,14,
0,138,136,1,0,0,0,139,142,1,0,0,0,140,138,1,0,0,0,140,141,1,0,0,0,141,144,
1,0,0,0,142,140,1,0,0,0,143,145,5,7,0,0,144,143,1,0,0,0,144,145,1,0,0,0,
145,146,1,0,0,0,146,147,5,6,0,0,147,149,1,0,0,0,148,133,1,0,0,0,148,134,
1,0,0,0,149,27,1,0,0,0,150,151,5,19,0,0,151,160,5,5,0,0,152,157,5,20,0,0,
153,154,5,7,0,0,154,156,5,20,0,0,155,153,1,0,0,0,156,159,1,0,0,0,157,155,
1,0,0,0,157,158,1,0,0,0,158,161,1,0,0,0,159,157,1,0,0,0,160,152,1,0,0,0,
160,161,1,0,0,0,161,163,1,0,0,0,162,164,5,7,0,0,163,162,1,0,0,0,163,164,
1,0,0,0,164,165,1,0,0,0,165,166,5,6,0,0,166,29,1,0,0,0,167,168,3,32,16,0,
168,171,5,8,0,0,169,172,3,12,6,0,170,172,5,13,0,0,171,169,1,0,0,0,171,170,
1,0,0,0,172,174,1,0,0,0,173,175,5,7,0,0,174,173,1,0,0,0,174,175,1,0,0,0,
175,31,1,0,0,0,176,192,3,34,17,0,177,178,5,5,0,0,178,183,3,34,17,0,179,180,
5,7,0,0,180,182,3,34,17,0,181,179,1,0,0,0,182,185,1,0,0,0,183,181,1,0,0,
0,183,184,1,0,0,0,184,187,1,0,0,0,185,183,1,0,0,0,186,188,5,7,0,0,187,186,
1,0,0,0,187,188,1,0,0,0,188,189,1,0,0,0,189,190,5,6,0,0,190,192,1,0,0,0,
191,176,1,0,0,0,191,177,1,0,0,0,192,33,1,0,0,0,193,195,5,14,0,0,194,196,
3,36,18,0,195,194,1,0,0,0,195,196,1,0,0,0,196,201,1,0,0,0,197,201,5,15,0,
0,198,201,5,17,0,0,199,201,5,20,0,0,200,193,1,0,0,0,200,197,1,0,0,0,200,
198,1,0,0,0,200,199,1,0,0,0,201,35,1,0,0,0,202,203,5,16,0,0,203,204,5,19,
0,0,204,37,1,0,0,0,25,41,48,63,70,74,76,84,96,106,119,122,125,140,144,148,
157,160,163,171,174,183,187,191,195,200];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class blueprintParser extends antlr4.Parser {

    static grammarFileName = "blueprint.g4";
    static literalNames = [ null, "'+='", "'='", "'{'", "'}'", "'('", "')'", 
                            "','", "':'", "'+'", "'select'", "'['", "']'", 
                            "'unset'", "'any'", "'default'", "'@'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, "BOOLEAN", "INTEGER", "IDENT", "STRING", 
                             "COMMENT", "MULTILINE_COMMENT", "WS" ];
    static ruleNames = [ "blueprint", "definition", "assignment", "module", 
                         "propertyList", "property", "expression", "operator", 
                         "value", "select", "variable", "listValue", "mapValue", 
                         "conditions", "singleCondition", "selectCase", 
                         "selectPatterns", "selectOnePattern", "selectBinding" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = blueprintParser.ruleNames;
        this.literalNames = blueprintParser.literalNames;
        this.symbolicNames = blueprintParser.symbolicNames;
    }



	blueprint() {
	    let localctx = new BlueprintContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, blueprintParser.RULE_blueprint);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 41;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===19) {
	            this.state = 38;
	            this.definition();
	            this.state = 43;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 44;
	        this.match(blueprintParser.EOF);
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



	definition() {
	    let localctx = new DefinitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, blueprintParser.RULE_definition);
	    try {
	        this.state = 48;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 46;
	            this.assignment();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 47;
	            this.module();
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



	assignment() {
	    let localctx = new AssignmentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, blueprintParser.RULE_assignment);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 50;
	        this.match(blueprintParser.IDENT);
	        this.state = 51;
	        _la = this._input.LA(1);
	        if(!(_la===1 || _la===2)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 52;
	        this.expression();
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



	module() {
	    let localctx = new ModuleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, blueprintParser.RULE_module);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 54;
	        this.match(blueprintParser.IDENT);
	        this.state = 63;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 3:
	            this.state = 55;
	            this.match(blueprintParser.T__2);
	            this.state = 56;
	            this.propertyList();
	            this.state = 57;
	            this.match(blueprintParser.T__3);
	            break;
	        case 5:
	            this.state = 59;
	            this.match(blueprintParser.T__4);
	            this.state = 60;
	            this.propertyList();
	            this.state = 61;
	            this.match(blueprintParser.T__5);
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



	propertyList() {
	    let localctx = new PropertyListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, blueprintParser.RULE_propertyList);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 76;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===19) {
	            this.state = 65;
	            this.property();
	            this.state = 70;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 66;
	                    this.match(blueprintParser.T__6);
	                    this.state = 67;
	                    this.property(); 
	                }
	                this.state = 72;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
	            }

	            this.state = 74;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===7) {
	                this.state = 73;
	                this.match(blueprintParser.T__6);
	            }

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



	property() {
	    let localctx = new PropertyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, blueprintParser.RULE_property);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 78;
	        this.match(blueprintParser.IDENT);
	        this.state = 79;
	        _la = this._input.LA(1);
	        if(!(_la===2 || _la===8)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 80;
	        this.expression();
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



	expression() {
	    let localctx = new ExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, blueprintParser.RULE_expression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 82;
	        this.value();
	        this.state = 84;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===9) {
	            this.state = 83;
	            this.operator();
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



	operator() {
	    let localctx = new OperatorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, blueprintParser.RULE_operator);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 86;
	        this.match(blueprintParser.T__8);
	        this.state = 87;
	        this.expression();
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



	value() {
	    let localctx = new ValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, blueprintParser.RULE_value);
	    try {
	        this.state = 96;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 17:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 89;
	            this.match(blueprintParser.BOOLEAN);
	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 90;
	            this.select();
	            break;
	        case 19:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 91;
	            this.variable();
	            break;
	        case 18:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 92;
	            this.match(blueprintParser.INTEGER);
	            break;
	        case 20:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 93;
	            this.match(blueprintParser.STRING);
	            break;
	        case 11:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 94;
	            this.listValue();
	            break;
	        case 3:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 95;
	            this.mapValue();
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



	select() {
	    let localctx = new SelectContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, blueprintParser.RULE_select);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 98;
	        this.match(blueprintParser.T__9);
	        this.state = 99;
	        this.match(blueprintParser.T__4);
	        this.state = 100;
	        this.conditions();
	        this.state = 101;
	        this.match(blueprintParser.T__6);
	        this.state = 102;
	        this.match(blueprintParser.T__2);
	        this.state = 104; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 103;
	            this.selectCase();
	            this.state = 106; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1228832) !== 0));
	        this.state = 108;
	        this.match(blueprintParser.T__3);
	        this.state = 109;
	        this.match(blueprintParser.T__5);
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



	variable() {
	    let localctx = new VariableContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, blueprintParser.RULE_variable);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 111;
	        this.match(blueprintParser.IDENT);
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



	listValue() {
	    let localctx = new ListValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, blueprintParser.RULE_listValue);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 113;
	        this.match(blueprintParser.T__10);
	        this.state = 122;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 1969160) !== 0)) {
	            this.state = 114;
	            this.expression();
	            this.state = 119;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,9,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 115;
	                    this.match(blueprintParser.T__6);
	                    this.state = 116;
	                    this.expression(); 
	                }
	                this.state = 121;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,9,this._ctx);
	            }

	        }

	        this.state = 125;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===7) {
	            this.state = 124;
	            this.match(blueprintParser.T__6);
	        }

	        this.state = 127;
	        this.match(blueprintParser.T__11);
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



	mapValue() {
	    let localctx = new MapValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, blueprintParser.RULE_mapValue);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 129;
	        this.match(blueprintParser.T__2);
	        this.state = 130;
	        this.propertyList();
	        this.state = 131;
	        this.match(blueprintParser.T__3);
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



	conditions() {
	    let localctx = new ConditionsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, blueprintParser.RULE_conditions);
	    var _la = 0;
	    try {
	        this.state = 148;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 19:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 133;
	            this.singleCondition();
	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 134;
	            this.match(blueprintParser.T__4);
	            this.state = 135;
	            this.singleCondition();
	            this.state = 140;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,12,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 136;
	                    this.match(blueprintParser.T__6);
	                    this.state = 137;
	                    this.singleCondition(); 
	                }
	                this.state = 142;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,12,this._ctx);
	            }

	            this.state = 144;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===7) {
	                this.state = 143;
	                this.match(blueprintParser.T__6);
	            }

	            this.state = 146;
	            this.match(blueprintParser.T__5);
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



	singleCondition() {
	    let localctx = new SingleConditionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, blueprintParser.RULE_singleCondition);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 150;
	        this.match(blueprintParser.IDENT);
	        this.state = 151;
	        this.match(blueprintParser.T__4);
	        this.state = 160;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===20) {
	            this.state = 152;
	            this.match(blueprintParser.STRING);
	            this.state = 157;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,15,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 153;
	                    this.match(blueprintParser.T__6);
	                    this.state = 154;
	                    this.match(blueprintParser.STRING); 
	                }
	                this.state = 159;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,15,this._ctx);
	            }

	        }

	        this.state = 163;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===7) {
	            this.state = 162;
	            this.match(blueprintParser.T__6);
	        }

	        this.state = 165;
	        this.match(blueprintParser.T__5);
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



	selectCase() {
	    let localctx = new SelectCaseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, blueprintParser.RULE_selectCase);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 167;
	        this.selectPatterns();
	        this.state = 168;
	        this.match(blueprintParser.T__7);
	        this.state = 171;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 3:
	        case 10:
	        case 11:
	        case 17:
	        case 18:
	        case 19:
	        case 20:
	            this.state = 169;
	            this.expression();
	            break;
	        case 13:
	            this.state = 170;
	            this.match(blueprintParser.T__12);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 174;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===7) {
	            this.state = 173;
	            this.match(blueprintParser.T__6);
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



	selectPatterns() {
	    let localctx = new SelectPatternsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, blueprintParser.RULE_selectPatterns);
	    var _la = 0;
	    try {
	        this.state = 191;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 14:
	        case 15:
	        case 17:
	        case 20:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 176;
	            this.selectOnePattern();
	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 177;
	            this.match(blueprintParser.T__4);
	            this.state = 178;
	            this.selectOnePattern();
	            this.state = 183;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,20,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 179;
	                    this.match(blueprintParser.T__6);
	                    this.state = 180;
	                    this.selectOnePattern(); 
	                }
	                this.state = 185;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,20,this._ctx);
	            }

	            this.state = 187;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===7) {
	                this.state = 186;
	                this.match(blueprintParser.T__6);
	            }

	            this.state = 189;
	            this.match(blueprintParser.T__5);
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



	selectOnePattern() {
	    let localctx = new SelectOnePatternContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, blueprintParser.RULE_selectOnePattern);
	    var _la = 0;
	    try {
	        this.state = 200;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 14:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 193;
	            this.match(blueprintParser.T__13);
	            this.state = 195;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===16) {
	                this.state = 194;
	                this.selectBinding();
	            }

	            break;
	        case 15:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 197;
	            this.match(blueprintParser.T__14);
	            break;
	        case 17:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 198;
	            this.match(blueprintParser.BOOLEAN);
	            break;
	        case 20:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 199;
	            this.match(blueprintParser.STRING);
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



	selectBinding() {
	    let localctx = new SelectBindingContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, blueprintParser.RULE_selectBinding);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 202;
	        this.match(blueprintParser.T__15);
	        this.state = 203;
	        this.match(blueprintParser.IDENT);
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

blueprintParser.EOF = antlr4.Token.EOF;
blueprintParser.T__0 = 1;
blueprintParser.T__1 = 2;
blueprintParser.T__2 = 3;
blueprintParser.T__3 = 4;
blueprintParser.T__4 = 5;
blueprintParser.T__5 = 6;
blueprintParser.T__6 = 7;
blueprintParser.T__7 = 8;
blueprintParser.T__8 = 9;
blueprintParser.T__9 = 10;
blueprintParser.T__10 = 11;
blueprintParser.T__11 = 12;
blueprintParser.T__12 = 13;
blueprintParser.T__13 = 14;
blueprintParser.T__14 = 15;
blueprintParser.T__15 = 16;
blueprintParser.BOOLEAN = 17;
blueprintParser.INTEGER = 18;
blueprintParser.IDENT = 19;
blueprintParser.STRING = 20;
blueprintParser.COMMENT = 21;
blueprintParser.MULTILINE_COMMENT = 22;
blueprintParser.WS = 23;

blueprintParser.RULE_blueprint = 0;
blueprintParser.RULE_definition = 1;
blueprintParser.RULE_assignment = 2;
blueprintParser.RULE_module = 3;
blueprintParser.RULE_propertyList = 4;
blueprintParser.RULE_property = 5;
blueprintParser.RULE_expression = 6;
blueprintParser.RULE_operator = 7;
blueprintParser.RULE_value = 8;
blueprintParser.RULE_select = 9;
blueprintParser.RULE_variable = 10;
blueprintParser.RULE_listValue = 11;
blueprintParser.RULE_mapValue = 12;
blueprintParser.RULE_conditions = 13;
blueprintParser.RULE_singleCondition = 14;
blueprintParser.RULE_selectCase = 15;
blueprintParser.RULE_selectPatterns = 16;
blueprintParser.RULE_selectOnePattern = 17;
blueprintParser.RULE_selectBinding = 18;

class BlueprintContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = blueprintParser.RULE_blueprint;
    }

	EOF() {
	    return this.getToken(blueprintParser.EOF, 0);
	};

	definition = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DefinitionContext);
	    } else {
	        return this.getTypedRuleContext(DefinitionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof blueprintListener ) {
	        listener.enterBlueprint(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof blueprintListener ) {
	        listener.exitBlueprint(this);
		}
	}


}



class DefinitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = blueprintParser.RULE_definition;
    }

	assignment() {
	    return this.getTypedRuleContext(AssignmentContext,0);
	};

	module() {
	    return this.getTypedRuleContext(ModuleContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof blueprintListener ) {
	        listener.enterDefinition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof blueprintListener ) {
	        listener.exitDefinition(this);
		}
	}


}



class AssignmentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = blueprintParser.RULE_assignment;
    }

	IDENT() {
	    return this.getToken(blueprintParser.IDENT, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof blueprintListener ) {
	        listener.enterAssignment(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof blueprintListener ) {
	        listener.exitAssignment(this);
		}
	}


}



class ModuleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = blueprintParser.RULE_module;
    }

	IDENT() {
	    return this.getToken(blueprintParser.IDENT, 0);
	};

	propertyList() {
	    return this.getTypedRuleContext(PropertyListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof blueprintListener ) {
	        listener.enterModule(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof blueprintListener ) {
	        listener.exitModule(this);
		}
	}


}



class PropertyListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = blueprintParser.RULE_propertyList;
    }

	property = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PropertyContext);
	    } else {
	        return this.getTypedRuleContext(PropertyContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof blueprintListener ) {
	        listener.enterPropertyList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof blueprintListener ) {
	        listener.exitPropertyList(this);
		}
	}


}



class PropertyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = blueprintParser.RULE_property;
    }

	IDENT() {
	    return this.getToken(blueprintParser.IDENT, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof blueprintListener ) {
	        listener.enterProperty(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof blueprintListener ) {
	        listener.exitProperty(this);
		}
	}


}



class ExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = blueprintParser.RULE_expression;
    }

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	operator() {
	    return this.getTypedRuleContext(OperatorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof blueprintListener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof blueprintListener ) {
	        listener.exitExpression(this);
		}
	}


}



class OperatorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = blueprintParser.RULE_operator;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof blueprintListener ) {
	        listener.enterOperator(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof blueprintListener ) {
	        listener.exitOperator(this);
		}
	}


}



class ValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = blueprintParser.RULE_value;
    }

	BOOLEAN() {
	    return this.getToken(blueprintParser.BOOLEAN, 0);
	};

	select() {
	    return this.getTypedRuleContext(SelectContext,0);
	};

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	INTEGER() {
	    return this.getToken(blueprintParser.INTEGER, 0);
	};

	STRING() {
	    return this.getToken(blueprintParser.STRING, 0);
	};

	listValue() {
	    return this.getTypedRuleContext(ListValueContext,0);
	};

	mapValue() {
	    return this.getTypedRuleContext(MapValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof blueprintListener ) {
	        listener.enterValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof blueprintListener ) {
	        listener.exitValue(this);
		}
	}


}



class SelectContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = blueprintParser.RULE_select;
    }

	conditions() {
	    return this.getTypedRuleContext(ConditionsContext,0);
	};

	selectCase = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SelectCaseContext);
	    } else {
	        return this.getTypedRuleContext(SelectCaseContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof blueprintListener ) {
	        listener.enterSelect(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof blueprintListener ) {
	        listener.exitSelect(this);
		}
	}


}



class VariableContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = blueprintParser.RULE_variable;
    }

	IDENT() {
	    return this.getToken(blueprintParser.IDENT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof blueprintListener ) {
	        listener.enterVariable(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof blueprintListener ) {
	        listener.exitVariable(this);
		}
	}


}



class ListValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = blueprintParser.RULE_listValue;
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof blueprintListener ) {
	        listener.enterListValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof blueprintListener ) {
	        listener.exitListValue(this);
		}
	}


}



class MapValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = blueprintParser.RULE_mapValue;
    }

	propertyList() {
	    return this.getTypedRuleContext(PropertyListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof blueprintListener ) {
	        listener.enterMapValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof blueprintListener ) {
	        listener.exitMapValue(this);
		}
	}


}



class ConditionsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = blueprintParser.RULE_conditions;
    }

	singleCondition = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SingleConditionContext);
	    } else {
	        return this.getTypedRuleContext(SingleConditionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof blueprintListener ) {
	        listener.enterConditions(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof blueprintListener ) {
	        listener.exitConditions(this);
		}
	}


}



class SingleConditionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = blueprintParser.RULE_singleCondition;
    }

	IDENT() {
	    return this.getToken(blueprintParser.IDENT, 0);
	};

	STRING = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(blueprintParser.STRING);
	    } else {
	        return this.getToken(blueprintParser.STRING, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof blueprintListener ) {
	        listener.enterSingleCondition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof blueprintListener ) {
	        listener.exitSingleCondition(this);
		}
	}


}



class SelectCaseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = blueprintParser.RULE_selectCase;
    }

	selectPatterns() {
	    return this.getTypedRuleContext(SelectPatternsContext,0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof blueprintListener ) {
	        listener.enterSelectCase(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof blueprintListener ) {
	        listener.exitSelectCase(this);
		}
	}


}



class SelectPatternsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = blueprintParser.RULE_selectPatterns;
    }

	selectOnePattern = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SelectOnePatternContext);
	    } else {
	        return this.getTypedRuleContext(SelectOnePatternContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof blueprintListener ) {
	        listener.enterSelectPatterns(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof blueprintListener ) {
	        listener.exitSelectPatterns(this);
		}
	}


}



class SelectOnePatternContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = blueprintParser.RULE_selectOnePattern;
    }

	selectBinding() {
	    return this.getTypedRuleContext(SelectBindingContext,0);
	};

	BOOLEAN() {
	    return this.getToken(blueprintParser.BOOLEAN, 0);
	};

	STRING() {
	    return this.getToken(blueprintParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof blueprintListener ) {
	        listener.enterSelectOnePattern(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof blueprintListener ) {
	        listener.exitSelectOnePattern(this);
		}
	}


}



class SelectBindingContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = blueprintParser.RULE_selectBinding;
    }

	IDENT() {
	    return this.getToken(blueprintParser.IDENT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof blueprintListener ) {
	        listener.enterSelectBinding(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof blueprintListener ) {
	        listener.exitSelectBinding(this);
		}
	}


}




blueprintParser.BlueprintContext = BlueprintContext; 
blueprintParser.DefinitionContext = DefinitionContext; 
blueprintParser.AssignmentContext = AssignmentContext; 
blueprintParser.ModuleContext = ModuleContext; 
blueprintParser.PropertyListContext = PropertyListContext; 
blueprintParser.PropertyContext = PropertyContext; 
blueprintParser.ExpressionContext = ExpressionContext; 
blueprintParser.OperatorContext = OperatorContext; 
blueprintParser.ValueContext = ValueContext; 
blueprintParser.SelectContext = SelectContext; 
blueprintParser.VariableContext = VariableContext; 
blueprintParser.ListValueContext = ListValueContext; 
blueprintParser.MapValueContext = MapValueContext; 
blueprintParser.ConditionsContext = ConditionsContext; 
blueprintParser.SingleConditionContext = SingleConditionContext; 
blueprintParser.SelectCaseContext = SelectCaseContext; 
blueprintParser.SelectPatternsContext = SelectPatternsContext; 
blueprintParser.SelectOnePatternContext = SelectOnePatternContext; 
blueprintParser.SelectBindingContext = SelectBindingContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
