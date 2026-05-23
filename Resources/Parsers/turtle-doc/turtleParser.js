// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/turtle-doc/turtle.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import turtleListener from './turtleListener.js';
const serializedATN = [4,1,41,164,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,1,0,5,0,48,8,0,10,0,12,0,51,9,0,1,0,1,0,1,1,
1,1,1,1,1,1,3,1,59,8,1,1,2,1,2,1,2,1,2,3,2,65,8,2,1,3,1,3,1,3,1,3,1,3,1,
4,1,4,1,4,1,4,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,3,7,88,8,7,
3,7,90,8,7,1,8,1,8,1,8,3,8,95,8,8,5,8,97,8,8,10,8,12,8,100,9,8,1,9,1,9,1,
9,5,9,105,8,9,10,9,12,9,108,9,9,1,10,1,10,3,10,112,8,10,1,10,1,10,1,11,1,
11,1,11,3,11,119,8,11,1,12,1,12,1,13,1,13,1,13,1,13,1,13,3,13,128,8,13,1,
14,1,14,1,14,3,14,133,8,14,1,15,1,15,1,15,1,15,1,16,1,16,5,16,141,8,16,10,
16,12,16,144,9,16,1,16,1,16,1,17,1,17,1,18,1,18,1,18,1,18,3,18,154,8,18,
1,19,1,19,1,20,1,20,1,21,1,21,1,22,1,22,1,22,0,0,23,0,2,4,6,8,10,12,14,16,
18,20,22,24,26,28,30,32,34,36,38,40,42,44,0,5,1,0,13,15,1,0,35,36,1,0,17,
20,2,0,2,2,10,11,2,0,12,12,24,24,162,0,49,1,0,0,0,2,58,1,0,0,0,4,64,1,0,
0,0,6,66,1,0,0,0,8,71,1,0,0,0,10,75,1,0,0,0,12,78,1,0,0,0,14,89,1,0,0,0,
16,91,1,0,0,0,18,101,1,0,0,0,20,111,1,0,0,0,22,118,1,0,0,0,24,120,1,0,0,
0,26,127,1,0,0,0,28,132,1,0,0,0,30,134,1,0,0,0,32,138,1,0,0,0,34,147,1,0,
0,0,36,149,1,0,0,0,38,155,1,0,0,0,40,157,1,0,0,0,42,159,1,0,0,0,44,161,1,
0,0,0,46,48,3,2,1,0,47,46,1,0,0,0,48,51,1,0,0,0,49,47,1,0,0,0,49,50,1,0,
0,0,50,52,1,0,0,0,51,49,1,0,0,0,52,53,5,0,0,1,53,1,1,0,0,0,54,59,3,4,2,0,
55,56,3,14,7,0,56,57,5,4,0,0,57,59,1,0,0,0,58,54,1,0,0,0,58,55,1,0,0,0,59,
3,1,0,0,0,60,65,3,6,3,0,61,65,3,8,4,0,62,65,3,12,6,0,63,65,3,10,5,0,64,60,
1,0,0,0,64,61,1,0,0,0,64,62,1,0,0,0,64,63,1,0,0,0,65,5,1,0,0,0,66,67,5,39,
0,0,67,68,5,11,0,0,68,69,5,10,0,0,69,70,5,4,0,0,70,7,1,0,0,0,71,72,5,40,
0,0,72,73,5,10,0,0,73,74,5,4,0,0,74,9,1,0,0,0,75,76,5,38,0,0,76,77,5,10,
0,0,77,11,1,0,0,0,78,79,5,37,0,0,79,80,5,11,0,0,80,81,5,10,0,0,81,13,1,0,
0,0,82,83,3,22,11,0,83,84,3,16,8,0,84,90,1,0,0,0,85,87,3,30,15,0,86,88,3,
16,8,0,87,86,1,0,0,0,87,88,1,0,0,0,88,90,1,0,0,0,89,82,1,0,0,0,89,85,1,0,
0,0,90,15,1,0,0,0,91,98,3,20,10,0,92,94,5,34,0,0,93,95,3,20,10,0,94,93,1,
0,0,0,94,95,1,0,0,0,95,97,1,0,0,0,96,92,1,0,0,0,97,100,1,0,0,0,98,96,1,0,
0,0,98,99,1,0,0,0,99,17,1,0,0,0,100,98,1,0,0,0,101,106,3,26,13,0,102,103,
5,5,0,0,103,105,3,26,13,0,104,102,1,0,0,0,105,108,1,0,0,0,106,104,1,0,0,
0,106,107,1,0,0,0,107,19,1,0,0,0,108,106,1,0,0,0,109,112,3,24,12,0,110,112,
5,3,0,0,111,109,1,0,0,0,111,110,1,0,0,0,112,113,1,0,0,0,113,114,3,18,9,0,
114,21,1,0,0,0,115,119,3,42,21,0,116,119,3,44,22,0,117,119,3,32,16,0,118,
115,1,0,0,0,118,116,1,0,0,0,118,117,1,0,0,0,119,23,1,0,0,0,120,121,3,42,
21,0,121,25,1,0,0,0,122,128,3,42,21,0,123,128,3,44,22,0,124,128,3,32,16,
0,125,128,3,30,15,0,126,128,3,28,14,0,127,122,1,0,0,0,127,123,1,0,0,0,127,
124,1,0,0,0,127,125,1,0,0,0,127,126,1,0,0,0,128,27,1,0,0,0,129,133,3,36,
18,0,130,133,3,34,17,0,131,133,3,38,19,0,132,129,1,0,0,0,132,130,1,0,0,0,
132,131,1,0,0,0,133,29,1,0,0,0,134,135,5,8,0,0,135,136,3,16,8,0,136,137,
5,9,0,0,137,31,1,0,0,0,138,142,5,6,0,0,139,141,3,26,13,0,140,139,1,0,0,0,
141,144,1,0,0,0,142,140,1,0,0,0,142,143,1,0,0,0,143,145,1,0,0,0,144,142,
1,0,0,0,145,146,5,7,0,0,146,33,1,0,0,0,147,148,7,0,0,0,148,35,1,0,0,0,149,
153,3,40,20,0,150,154,5,41,0,0,151,152,5,1,0,0,152,154,3,42,21,0,153,150,
1,0,0,0,153,151,1,0,0,0,153,154,1,0,0,0,154,37,1,0,0,0,155,156,7,1,0,0,156,
39,1,0,0,0,157,158,7,2,0,0,158,41,1,0,0,0,159,160,7,3,0,0,160,43,1,0,0,0,
161,162,7,4,0,0,162,45,1,0,0,0,14,49,58,64,87,89,94,98,106,111,118,127,132,
142,153];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class turtleParser extends antlr4.Parser {

    static grammarFileName = "turtle.g4";
    static literalNames = [ null, "'^^'", null, "'a'", "'.'", "','", "'('", 
                            "')'", "'['", "']'", null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, "';'" ];
    static symbolicNames = [ null, null, "PNameLn", "LetterA", "Dot", "Coma", 
                             "LParen", "RParen", "LEnd", "REnd", "IriRef", 
                             "PNameNs", "BlankNodeLabel", "Integer", "Decimal", 
                             "Double", "Exponent", "StringLiteralQuote", 
                             "StringLiteralSingleQuote", "StringLiteralLongSingleQuote", 
                             "StringLiteralLongQuote", "Uchar", "ECHAR", 
                             "WS", "ANON", "PN_CHARS_BASE", "PNCharsU", 
                             "PN_CHARS", "PN_Prefix", "PNLocal", "PLX", 
                             "PERCENT", "HEX", "PN_LOCAL_ESC", "Semi", "TrueKeyword", 
                             "FalseKeyword", "PrefixKeyword", "BaseKeyword", 
                             "AtPrefixKeyword", "AtBaseKeyword", "LangTag" ];
    static ruleNames = [ "turtleDoc", "statement", "directive", "prefixID", 
                         "base", "sparqlBase", "sparqlPrefix", "triples", 
                         "predicateObjectList", "objectList", "predicateObject", 
                         "subject", "predicate", "object_", "literal", "blankNodePropertyList", 
                         "collection", "numericLiteral", "rDFLiteral", "bool_", 
                         "string", "iri", "blankNode" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = turtleParser.ruleNames;
        this.literalNames = turtleParser.literalNames;
        this.symbolicNames = turtleParser.symbolicNames;
    }



	turtleDoc() {
	    let localctx = new TurtleDocContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, turtleParser.RULE_turtleDoc);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 49;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 16784708) !== 0) || ((((_la - 37)) & ~0x1f) === 0 && ((1 << (_la - 37)) & 15) !== 0)) {
	            this.state = 46;
	            this.statement();
	            this.state = 51;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 52;
	        this.match(turtleParser.EOF);
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



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, turtleParser.RULE_statement);
	    try {
	        this.state = 58;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 37:
	        case 38:
	        case 39:
	        case 40:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 54;
	            this.directive();
	            break;
	        case 2:
	        case 6:
	        case 8:
	        case 10:
	        case 11:
	        case 12:
	        case 24:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 55;
	            this.triples();
	            this.state = 56;
	            this.match(turtleParser.Dot);
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



	directive() {
	    let localctx = new DirectiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, turtleParser.RULE_directive);
	    try {
	        this.state = 64;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 39:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 60;
	            this.prefixID();
	            break;
	        case 40:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 61;
	            this.base();
	            break;
	        case 37:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 62;
	            this.sparqlPrefix();
	            break;
	        case 38:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 63;
	            this.sparqlBase();
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



	prefixID() {
	    let localctx = new PrefixIDContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, turtleParser.RULE_prefixID);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 66;
	        this.match(turtleParser.AtPrefixKeyword);
	        this.state = 67;
	        this.match(turtleParser.PNameNs);
	        this.state = 68;
	        this.match(turtleParser.IriRef);
	        this.state = 69;
	        this.match(turtleParser.Dot);
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



	base() {
	    let localctx = new BaseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, turtleParser.RULE_base);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 71;
	        this.match(turtleParser.AtBaseKeyword);
	        this.state = 72;
	        this.match(turtleParser.IriRef);
	        this.state = 73;
	        this.match(turtleParser.Dot);
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



	sparqlBase() {
	    let localctx = new SparqlBaseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, turtleParser.RULE_sparqlBase);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 75;
	        this.match(turtleParser.BaseKeyword);
	        this.state = 76;
	        this.match(turtleParser.IriRef);
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



	sparqlPrefix() {
	    let localctx = new SparqlPrefixContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, turtleParser.RULE_sparqlPrefix);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 78;
	        this.match(turtleParser.PrefixKeyword);
	        this.state = 79;
	        this.match(turtleParser.PNameNs);
	        this.state = 80;
	        this.match(turtleParser.IriRef);
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



	triples() {
	    let localctx = new TriplesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, turtleParser.RULE_triples);
	    var _la = 0;
	    try {
	        this.state = 89;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 2:
	        case 6:
	        case 10:
	        case 11:
	        case 12:
	        case 24:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 82;
	            this.subject();
	            this.state = 83;
	            this.predicateObjectList();
	            break;
	        case 8:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 85;
	            this.blankNodePropertyList();
	            this.state = 87;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) === 0 && ((1 << _la) & 3084) !== 0)) {
	                this.state = 86;
	                this.predicateObjectList();
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



	predicateObjectList() {
	    let localctx = new PredicateObjectListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, turtleParser.RULE_predicateObjectList);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 91;
	        this.predicateObject();
	        this.state = 98;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===34) {
	            this.state = 92;
	            this.match(turtleParser.Semi);
	            this.state = 94;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) === 0 && ((1 << _la) & 3084) !== 0)) {
	                this.state = 93;
	                this.predicateObject();
	            }

	            this.state = 100;
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



	objectList() {
	    let localctx = new ObjectListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, turtleParser.RULE_objectList);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 101;
	        this.object_();
	        this.state = 106;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===5) {
	            this.state = 102;
	            this.match(turtleParser.Coma);
	            this.state = 103;
	            this.object_();
	            this.state = 108;
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



	predicateObject() {
	    let localctx = new PredicateObjectContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, turtleParser.RULE_predicateObject);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 111;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 2:
	        case 10:
	        case 11:
	            this.state = 109;
	            this.predicate();
	            break;
	        case 3:
	            this.state = 110;
	            this.match(turtleParser.LetterA);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 113;
	        this.objectList();
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



	subject() {
	    let localctx = new SubjectContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, turtleParser.RULE_subject);
	    try {
	        this.state = 118;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 2:
	        case 10:
	        case 11:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 115;
	            this.iri();
	            break;
	        case 12:
	        case 24:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 116;
	            this.blankNode();
	            break;
	        case 6:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 117;
	            this.collection();
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



	predicate() {
	    let localctx = new PredicateContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, turtleParser.RULE_predicate);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 120;
	        this.iri();
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



	object_() {
	    let localctx = new Object_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, turtleParser.RULE_object_);
	    try {
	        this.state = 127;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 2:
	        case 10:
	        case 11:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 122;
	            this.iri();
	            break;
	        case 12:
	        case 24:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 123;
	            this.blankNode();
	            break;
	        case 6:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 124;
	            this.collection();
	            break;
	        case 8:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 125;
	            this.blankNodePropertyList();
	            break;
	        case 13:
	        case 14:
	        case 15:
	        case 17:
	        case 18:
	        case 19:
	        case 20:
	        case 35:
	        case 36:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 126;
	            this.literal();
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



	literal() {
	    let localctx = new LiteralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, turtleParser.RULE_literal);
	    try {
	        this.state = 132;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 17:
	        case 18:
	        case 19:
	        case 20:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 129;
	            this.rDFLiteral();
	            break;
	        case 13:
	        case 14:
	        case 15:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 130;
	            this.numericLiteral();
	            break;
	        case 35:
	        case 36:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 131;
	            this.bool_();
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



	blankNodePropertyList() {
	    let localctx = new BlankNodePropertyListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, turtleParser.RULE_blankNodePropertyList);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 134;
	        this.match(turtleParser.LEnd);
	        this.state = 135;
	        this.predicateObjectList();
	        this.state = 136;
	        this.match(turtleParser.REnd);
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



	collection() {
	    let localctx = new CollectionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, turtleParser.RULE_collection);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 138;
	        this.match(turtleParser.LParen);
	        this.state = 142;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 18808132) !== 0) || _la===35 || _la===36) {
	            this.state = 139;
	            this.object_();
	            this.state = 144;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 145;
	        this.match(turtleParser.RParen);
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



	numericLiteral() {
	    let localctx = new NumericLiteralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, turtleParser.RULE_numericLiteral);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 147;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 57344) !== 0))) {
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



	rDFLiteral() {
	    let localctx = new RDFLiteralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, turtleParser.RULE_rDFLiteral);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 149;
	        this.string();
	        this.state = 153;
	        this._errHandler.sync(this);
	        switch (this._input.LA(1)) {
	        case 41:
	        	this.state = 150;
	        	this.match(turtleParser.LangTag);
	        	break;
	        case 1:
	        	this.state = 151;
	        	this.match(turtleParser.T__0);
	        	this.state = 152;
	        	this.iri();
	        	break;
	        case 2:
	        case 4:
	        case 5:
	        case 6:
	        case 7:
	        case 8:
	        case 9:
	        case 10:
	        case 11:
	        case 12:
	        case 13:
	        case 14:
	        case 15:
	        case 17:
	        case 18:
	        case 19:
	        case 20:
	        case 24:
	        case 34:
	        case 35:
	        case 36:
	        	break;
	        default:
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



	bool_() {
	    let localctx = new Bool_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, turtleParser.RULE_bool_);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 155;
	        _la = this._input.LA(1);
	        if(!(_la===35 || _la===36)) {
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



	string() {
	    let localctx = new StringContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, turtleParser.RULE_string);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 157;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 1966080) !== 0))) {
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



	iri() {
	    let localctx = new IriContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, turtleParser.RULE_iri);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 159;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 3076) !== 0))) {
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



	blankNode() {
	    let localctx = new BlankNodeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, turtleParser.RULE_blankNode);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 161;
	        _la = this._input.LA(1);
	        if(!(_la===12 || _la===24)) {
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


}

turtleParser.EOF = antlr4.Token.EOF;
turtleParser.T__0 = 1;
turtleParser.PNameLn = 2;
turtleParser.LetterA = 3;
turtleParser.Dot = 4;
turtleParser.Coma = 5;
turtleParser.LParen = 6;
turtleParser.RParen = 7;
turtleParser.LEnd = 8;
turtleParser.REnd = 9;
turtleParser.IriRef = 10;
turtleParser.PNameNs = 11;
turtleParser.BlankNodeLabel = 12;
turtleParser.Integer = 13;
turtleParser.Decimal = 14;
turtleParser.Double = 15;
turtleParser.Exponent = 16;
turtleParser.StringLiteralQuote = 17;
turtleParser.StringLiteralSingleQuote = 18;
turtleParser.StringLiteralLongSingleQuote = 19;
turtleParser.StringLiteralLongQuote = 20;
turtleParser.Uchar = 21;
turtleParser.ECHAR = 22;
turtleParser.WS = 23;
turtleParser.ANON = 24;
turtleParser.PN_CHARS_BASE = 25;
turtleParser.PNCharsU = 26;
turtleParser.PN_CHARS = 27;
turtleParser.PN_Prefix = 28;
turtleParser.PNLocal = 29;
turtleParser.PLX = 30;
turtleParser.PERCENT = 31;
turtleParser.HEX = 32;
turtleParser.PN_LOCAL_ESC = 33;
turtleParser.Semi = 34;
turtleParser.TrueKeyword = 35;
turtleParser.FalseKeyword = 36;
turtleParser.PrefixKeyword = 37;
turtleParser.BaseKeyword = 38;
turtleParser.AtPrefixKeyword = 39;
turtleParser.AtBaseKeyword = 40;
turtleParser.LangTag = 41;

turtleParser.RULE_turtleDoc = 0;
turtleParser.RULE_statement = 1;
turtleParser.RULE_directive = 2;
turtleParser.RULE_prefixID = 3;
turtleParser.RULE_base = 4;
turtleParser.RULE_sparqlBase = 5;
turtleParser.RULE_sparqlPrefix = 6;
turtleParser.RULE_triples = 7;
turtleParser.RULE_predicateObjectList = 8;
turtleParser.RULE_objectList = 9;
turtleParser.RULE_predicateObject = 10;
turtleParser.RULE_subject = 11;
turtleParser.RULE_predicate = 12;
turtleParser.RULE_object_ = 13;
turtleParser.RULE_literal = 14;
turtleParser.RULE_blankNodePropertyList = 15;
turtleParser.RULE_collection = 16;
turtleParser.RULE_numericLiteral = 17;
turtleParser.RULE_rDFLiteral = 18;
turtleParser.RULE_bool_ = 19;
turtleParser.RULE_string = 20;
turtleParser.RULE_iri = 21;
turtleParser.RULE_blankNode = 22;

class TurtleDocContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turtleParser.RULE_turtleDoc;
    }

	EOF() {
	    return this.getToken(turtleParser.EOF, 0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof turtleListener ) {
	        listener.enterTurtleDoc(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turtleListener ) {
	        listener.exitTurtleDoc(this);
		}
	}


}



class StatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turtleParser.RULE_statement;
    }

	directive() {
	    return this.getTypedRuleContext(DirectiveContext,0);
	};

	triples() {
	    return this.getTypedRuleContext(TriplesContext,0);
	};

	Dot() {
	    return this.getToken(turtleParser.Dot, 0);
	};

	enterRule(listener) {
	    if(listener instanceof turtleListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turtleListener ) {
	        listener.exitStatement(this);
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
        this.ruleIndex = turtleParser.RULE_directive;
    }

	prefixID() {
	    return this.getTypedRuleContext(PrefixIDContext,0);
	};

	base() {
	    return this.getTypedRuleContext(BaseContext,0);
	};

	sparqlPrefix() {
	    return this.getTypedRuleContext(SparqlPrefixContext,0);
	};

	sparqlBase() {
	    return this.getTypedRuleContext(SparqlBaseContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof turtleListener ) {
	        listener.enterDirective(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turtleListener ) {
	        listener.exitDirective(this);
		}
	}


}



class PrefixIDContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turtleParser.RULE_prefixID;
    }

	AtPrefixKeyword() {
	    return this.getToken(turtleParser.AtPrefixKeyword, 0);
	};

	PNameNs() {
	    return this.getToken(turtleParser.PNameNs, 0);
	};

	IriRef() {
	    return this.getToken(turtleParser.IriRef, 0);
	};

	Dot() {
	    return this.getToken(turtleParser.Dot, 0);
	};

	enterRule(listener) {
	    if(listener instanceof turtleListener ) {
	        listener.enterPrefixID(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turtleListener ) {
	        listener.exitPrefixID(this);
		}
	}


}



class BaseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turtleParser.RULE_base;
    }

	AtBaseKeyword() {
	    return this.getToken(turtleParser.AtBaseKeyword, 0);
	};

	IriRef() {
	    return this.getToken(turtleParser.IriRef, 0);
	};

	Dot() {
	    return this.getToken(turtleParser.Dot, 0);
	};

	enterRule(listener) {
	    if(listener instanceof turtleListener ) {
	        listener.enterBase(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turtleListener ) {
	        listener.exitBase(this);
		}
	}


}



class SparqlBaseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turtleParser.RULE_sparqlBase;
    }

	BaseKeyword() {
	    return this.getToken(turtleParser.BaseKeyword, 0);
	};

	IriRef() {
	    return this.getToken(turtleParser.IriRef, 0);
	};

	enterRule(listener) {
	    if(listener instanceof turtleListener ) {
	        listener.enterSparqlBase(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turtleListener ) {
	        listener.exitSparqlBase(this);
		}
	}


}



class SparqlPrefixContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turtleParser.RULE_sparqlPrefix;
    }

	PrefixKeyword() {
	    return this.getToken(turtleParser.PrefixKeyword, 0);
	};

	PNameNs() {
	    return this.getToken(turtleParser.PNameNs, 0);
	};

	IriRef() {
	    return this.getToken(turtleParser.IriRef, 0);
	};

	enterRule(listener) {
	    if(listener instanceof turtleListener ) {
	        listener.enterSparqlPrefix(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turtleListener ) {
	        listener.exitSparqlPrefix(this);
		}
	}


}



class TriplesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turtleParser.RULE_triples;
    }

	subject() {
	    return this.getTypedRuleContext(SubjectContext,0);
	};

	predicateObjectList() {
	    return this.getTypedRuleContext(PredicateObjectListContext,0);
	};

	blankNodePropertyList() {
	    return this.getTypedRuleContext(BlankNodePropertyListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof turtleListener ) {
	        listener.enterTriples(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turtleListener ) {
	        listener.exitTriples(this);
		}
	}


}



class PredicateObjectListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turtleParser.RULE_predicateObjectList;
    }

	predicateObject = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PredicateObjectContext);
	    } else {
	        return this.getTypedRuleContext(PredicateObjectContext,i);
	    }
	};

	Semi = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(turtleParser.Semi);
	    } else {
	        return this.getToken(turtleParser.Semi, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof turtleListener ) {
	        listener.enterPredicateObjectList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turtleListener ) {
	        listener.exitPredicateObjectList(this);
		}
	}


}



class ObjectListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turtleParser.RULE_objectList;
    }

	object_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Object_Context);
	    } else {
	        return this.getTypedRuleContext(Object_Context,i);
	    }
	};

	Coma = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(turtleParser.Coma);
	    } else {
	        return this.getToken(turtleParser.Coma, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof turtleListener ) {
	        listener.enterObjectList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turtleListener ) {
	        listener.exitObjectList(this);
		}
	}


}



class PredicateObjectContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turtleParser.RULE_predicateObject;
    }

	objectList() {
	    return this.getTypedRuleContext(ObjectListContext,0);
	};

	predicate() {
	    return this.getTypedRuleContext(PredicateContext,0);
	};

	LetterA() {
	    return this.getToken(turtleParser.LetterA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof turtleListener ) {
	        listener.enterPredicateObject(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turtleListener ) {
	        listener.exitPredicateObject(this);
		}
	}


}



class SubjectContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turtleParser.RULE_subject;
    }

	iri() {
	    return this.getTypedRuleContext(IriContext,0);
	};

	blankNode() {
	    return this.getTypedRuleContext(BlankNodeContext,0);
	};

	collection() {
	    return this.getTypedRuleContext(CollectionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof turtleListener ) {
	        listener.enterSubject(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turtleListener ) {
	        listener.exitSubject(this);
		}
	}


}



class PredicateContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turtleParser.RULE_predicate;
    }

	iri() {
	    return this.getTypedRuleContext(IriContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof turtleListener ) {
	        listener.enterPredicate(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turtleListener ) {
	        listener.exitPredicate(this);
		}
	}


}



class Object_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turtleParser.RULE_object_;
    }

	iri() {
	    return this.getTypedRuleContext(IriContext,0);
	};

	blankNode() {
	    return this.getTypedRuleContext(BlankNodeContext,0);
	};

	collection() {
	    return this.getTypedRuleContext(CollectionContext,0);
	};

	blankNodePropertyList() {
	    return this.getTypedRuleContext(BlankNodePropertyListContext,0);
	};

	literal() {
	    return this.getTypedRuleContext(LiteralContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof turtleListener ) {
	        listener.enterObject_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turtleListener ) {
	        listener.exitObject_(this);
		}
	}


}



class LiteralContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turtleParser.RULE_literal;
    }

	rDFLiteral() {
	    return this.getTypedRuleContext(RDFLiteralContext,0);
	};

	numericLiteral() {
	    return this.getTypedRuleContext(NumericLiteralContext,0);
	};

	bool_() {
	    return this.getTypedRuleContext(Bool_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof turtleListener ) {
	        listener.enterLiteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turtleListener ) {
	        listener.exitLiteral(this);
		}
	}


}



class BlankNodePropertyListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turtleParser.RULE_blankNodePropertyList;
    }

	LEnd() {
	    return this.getToken(turtleParser.LEnd, 0);
	};

	predicateObjectList() {
	    return this.getTypedRuleContext(PredicateObjectListContext,0);
	};

	REnd() {
	    return this.getToken(turtleParser.REnd, 0);
	};

	enterRule(listener) {
	    if(listener instanceof turtleListener ) {
	        listener.enterBlankNodePropertyList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turtleListener ) {
	        listener.exitBlankNodePropertyList(this);
		}
	}


}



class CollectionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turtleParser.RULE_collection;
    }

	LParen() {
	    return this.getToken(turtleParser.LParen, 0);
	};

	RParen() {
	    return this.getToken(turtleParser.RParen, 0);
	};

	object_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Object_Context);
	    } else {
	        return this.getTypedRuleContext(Object_Context,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof turtleListener ) {
	        listener.enterCollection(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turtleListener ) {
	        listener.exitCollection(this);
		}
	}


}



class NumericLiteralContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turtleParser.RULE_numericLiteral;
    }

	Integer() {
	    return this.getToken(turtleParser.Integer, 0);
	};

	Decimal() {
	    return this.getToken(turtleParser.Decimal, 0);
	};

	Double() {
	    return this.getToken(turtleParser.Double, 0);
	};

	enterRule(listener) {
	    if(listener instanceof turtleListener ) {
	        listener.enterNumericLiteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turtleListener ) {
	        listener.exitNumericLiteral(this);
		}
	}


}



class RDFLiteralContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turtleParser.RULE_rDFLiteral;
    }

	string() {
	    return this.getTypedRuleContext(StringContext,0);
	};

	LangTag() {
	    return this.getToken(turtleParser.LangTag, 0);
	};

	iri() {
	    return this.getTypedRuleContext(IriContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof turtleListener ) {
	        listener.enterRDFLiteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turtleListener ) {
	        listener.exitRDFLiteral(this);
		}
	}


}



class Bool_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turtleParser.RULE_bool_;
    }

	TrueKeyword() {
	    return this.getToken(turtleParser.TrueKeyword, 0);
	};

	FalseKeyword() {
	    return this.getToken(turtleParser.FalseKeyword, 0);
	};

	enterRule(listener) {
	    if(listener instanceof turtleListener ) {
	        listener.enterBool_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turtleListener ) {
	        listener.exitBool_(this);
		}
	}


}



class StringContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turtleParser.RULE_string;
    }

	StringLiteralQuote() {
	    return this.getToken(turtleParser.StringLiteralQuote, 0);
	};

	StringLiteralSingleQuote() {
	    return this.getToken(turtleParser.StringLiteralSingleQuote, 0);
	};

	StringLiteralLongSingleQuote() {
	    return this.getToken(turtleParser.StringLiteralLongSingleQuote, 0);
	};

	StringLiteralLongQuote() {
	    return this.getToken(turtleParser.StringLiteralLongQuote, 0);
	};

	enterRule(listener) {
	    if(listener instanceof turtleListener ) {
	        listener.enterString(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turtleListener ) {
	        listener.exitString(this);
		}
	}


}



class IriContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turtleParser.RULE_iri;
    }

	IriRef() {
	    return this.getToken(turtleParser.IriRef, 0);
	};

	PNameLn() {
	    return this.getToken(turtleParser.PNameLn, 0);
	};

	PNameNs() {
	    return this.getToken(turtleParser.PNameNs, 0);
	};

	enterRule(listener) {
	    if(listener instanceof turtleListener ) {
	        listener.enterIri(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turtleListener ) {
	        listener.exitIri(this);
		}
	}


}



class BlankNodeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turtleParser.RULE_blankNode;
    }

	BlankNodeLabel() {
	    return this.getToken(turtleParser.BlankNodeLabel, 0);
	};

	ANON() {
	    return this.getToken(turtleParser.ANON, 0);
	};

	enterRule(listener) {
	    if(listener instanceof turtleListener ) {
	        listener.enterBlankNode(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turtleListener ) {
	        listener.exitBlankNode(this);
		}
	}


}




turtleParser.TurtleDocContext = TurtleDocContext; 
turtleParser.StatementContext = StatementContext; 
turtleParser.DirectiveContext = DirectiveContext; 
turtleParser.PrefixIDContext = PrefixIDContext; 
turtleParser.BaseContext = BaseContext; 
turtleParser.SparqlBaseContext = SparqlBaseContext; 
turtleParser.SparqlPrefixContext = SparqlPrefixContext; 
turtleParser.TriplesContext = TriplesContext; 
turtleParser.PredicateObjectListContext = PredicateObjectListContext; 
turtleParser.ObjectListContext = ObjectListContext; 
turtleParser.PredicateObjectContext = PredicateObjectContext; 
turtleParser.SubjectContext = SubjectContext; 
turtleParser.PredicateContext = PredicateContext; 
turtleParser.Object_Context = Object_Context; 
turtleParser.LiteralContext = LiteralContext; 
turtleParser.BlankNodePropertyListContext = BlankNodePropertyListContext; 
turtleParser.CollectionContext = CollectionContext; 
turtleParser.NumericLiteralContext = NumericLiteralContext; 
turtleParser.RDFLiteralContext = RDFLiteralContext; 
turtleParser.Bool_Context = Bool_Context; 
turtleParser.StringContext = StringContext; 
turtleParser.IriContext = IriContext; 
turtleParser.BlankNodeContext = BlankNodeContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
