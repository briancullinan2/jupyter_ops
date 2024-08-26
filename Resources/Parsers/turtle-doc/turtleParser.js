// Generated from Resources/Parsers/turtle-doc/turtle.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import turtleListener from './turtleListener.js';
const serializedATN = [4,1,41,162,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,1,0,5,0,48,8,0,10,0,12,0,51,9,0,1,1,1,1,1,1,
1,1,3,1,57,8,1,1,2,1,2,1,2,1,2,3,2,63,8,2,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,
4,1,4,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,3,7,86,8,7,3,7,88,
8,7,1,8,1,8,1,8,3,8,93,8,8,5,8,95,8,8,10,8,12,8,98,9,8,1,9,1,9,1,9,5,9,103,
8,9,10,9,12,9,106,9,9,1,10,1,10,3,10,110,8,10,1,10,1,10,1,11,1,11,1,11,3,
11,117,8,11,1,12,1,12,1,13,1,13,1,13,1,13,1,13,3,13,126,8,13,1,14,1,14,1,
14,3,14,131,8,14,1,15,1,15,1,15,1,15,1,16,1,16,5,16,139,8,16,10,16,12,16,
142,9,16,1,16,1,16,1,17,1,17,1,18,1,18,1,18,1,18,3,18,152,8,18,1,19,1,19,
1,20,1,20,1,21,1,21,1,22,1,22,1,22,0,0,23,0,2,4,6,8,10,12,14,16,18,20,22,
24,26,28,30,32,34,36,38,40,42,44,0,5,1,0,13,15,1,0,35,36,1,0,17,20,2,0,2,
2,10,11,2,0,12,12,24,24,160,0,49,1,0,0,0,2,56,1,0,0,0,4,62,1,0,0,0,6,64,
1,0,0,0,8,69,1,0,0,0,10,73,1,0,0,0,12,76,1,0,0,0,14,87,1,0,0,0,16,89,1,0,
0,0,18,99,1,0,0,0,20,109,1,0,0,0,22,116,1,0,0,0,24,118,1,0,0,0,26,125,1,
0,0,0,28,130,1,0,0,0,30,132,1,0,0,0,32,136,1,0,0,0,34,145,1,0,0,0,36,147,
1,0,0,0,38,153,1,0,0,0,40,155,1,0,0,0,42,157,1,0,0,0,44,159,1,0,0,0,46,48,
3,2,1,0,47,46,1,0,0,0,48,51,1,0,0,0,49,47,1,0,0,0,49,50,1,0,0,0,50,1,1,0,
0,0,51,49,1,0,0,0,52,57,3,4,2,0,53,54,3,14,7,0,54,55,5,4,0,0,55,57,1,0,0,
0,56,52,1,0,0,0,56,53,1,0,0,0,57,3,1,0,0,0,58,63,3,6,3,0,59,63,3,8,4,0,60,
63,3,12,6,0,61,63,3,10,5,0,62,58,1,0,0,0,62,59,1,0,0,0,62,60,1,0,0,0,62,
61,1,0,0,0,63,5,1,0,0,0,64,65,5,39,0,0,65,66,5,11,0,0,66,67,5,10,0,0,67,
68,5,4,0,0,68,7,1,0,0,0,69,70,5,40,0,0,70,71,5,10,0,0,71,72,5,4,0,0,72,9,
1,0,0,0,73,74,5,38,0,0,74,75,5,10,0,0,75,11,1,0,0,0,76,77,5,37,0,0,77,78,
5,11,0,0,78,79,5,10,0,0,79,13,1,0,0,0,80,81,3,22,11,0,81,82,3,16,8,0,82,
88,1,0,0,0,83,85,3,30,15,0,84,86,3,16,8,0,85,84,1,0,0,0,85,86,1,0,0,0,86,
88,1,0,0,0,87,80,1,0,0,0,87,83,1,0,0,0,88,15,1,0,0,0,89,96,3,20,10,0,90,
92,5,34,0,0,91,93,3,20,10,0,92,91,1,0,0,0,92,93,1,0,0,0,93,95,1,0,0,0,94,
90,1,0,0,0,95,98,1,0,0,0,96,94,1,0,0,0,96,97,1,0,0,0,97,17,1,0,0,0,98,96,
1,0,0,0,99,104,3,26,13,0,100,101,5,5,0,0,101,103,3,26,13,0,102,100,1,0,0,
0,103,106,1,0,0,0,104,102,1,0,0,0,104,105,1,0,0,0,105,19,1,0,0,0,106,104,
1,0,0,0,107,110,3,24,12,0,108,110,5,3,0,0,109,107,1,0,0,0,109,108,1,0,0,
0,110,111,1,0,0,0,111,112,3,18,9,0,112,21,1,0,0,0,113,117,3,42,21,0,114,
117,3,44,22,0,115,117,3,32,16,0,116,113,1,0,0,0,116,114,1,0,0,0,116,115,
1,0,0,0,117,23,1,0,0,0,118,119,3,42,21,0,119,25,1,0,0,0,120,126,3,42,21,
0,121,126,3,44,22,0,122,126,3,32,16,0,123,126,3,30,15,0,124,126,3,28,14,
0,125,120,1,0,0,0,125,121,1,0,0,0,125,122,1,0,0,0,125,123,1,0,0,0,125,124,
1,0,0,0,126,27,1,0,0,0,127,131,3,36,18,0,128,131,3,34,17,0,129,131,3,38,
19,0,130,127,1,0,0,0,130,128,1,0,0,0,130,129,1,0,0,0,131,29,1,0,0,0,132,
133,5,8,0,0,133,134,3,16,8,0,134,135,5,9,0,0,135,31,1,0,0,0,136,140,5,6,
0,0,137,139,3,26,13,0,138,137,1,0,0,0,139,142,1,0,0,0,140,138,1,0,0,0,140,
141,1,0,0,0,141,143,1,0,0,0,142,140,1,0,0,0,143,144,5,7,0,0,144,33,1,0,0,
0,145,146,7,0,0,0,146,35,1,0,0,0,147,151,3,40,20,0,148,152,5,41,0,0,149,
150,5,1,0,0,150,152,3,42,21,0,151,148,1,0,0,0,151,149,1,0,0,0,151,152,1,
0,0,0,152,37,1,0,0,0,153,154,7,1,0,0,154,39,1,0,0,0,155,156,7,2,0,0,156,
41,1,0,0,0,157,158,7,3,0,0,158,43,1,0,0,0,159,160,7,4,0,0,160,45,1,0,0,0,
14,49,56,62,85,87,92,96,104,109,116,125,130,140,151];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

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

    get atn() {
        return atn;
    }



	turtleDoc() {
	    let localctx = new TurtleDocContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, turtleParser.RULE_turtleDoc);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 49;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << turtleParser.PNameLn) | (1 << turtleParser.LParen) | (1 << turtleParser.LEnd) | (1 << turtleParser.IriRef) | (1 << turtleParser.PNameNs) | (1 << turtleParser.BlankNodeLabel) | (1 << turtleParser.ANON))) !== 0) || ((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (turtleParser.PrefixKeyword - 37)) | (1 << (turtleParser.BaseKeyword - 37)) | (1 << (turtleParser.AtPrefixKeyword - 37)) | (1 << (turtleParser.AtBaseKeyword - 37)))) !== 0)) {
	            this.state = 46;
	            this.statement();
	            this.state = 51;
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



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, turtleParser.RULE_statement);
	    try {
	        this.state = 56;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case turtleParser.PrefixKeyword:
	        case turtleParser.BaseKeyword:
	        case turtleParser.AtPrefixKeyword:
	        case turtleParser.AtBaseKeyword:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 52;
	            this.directive();
	            break;
	        case turtleParser.PNameLn:
	        case turtleParser.LParen:
	        case turtleParser.LEnd:
	        case turtleParser.IriRef:
	        case turtleParser.PNameNs:
	        case turtleParser.BlankNodeLabel:
	        case turtleParser.ANON:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 53;
	            this.triples();
	            this.state = 54;
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
	        this.state = 62;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case turtleParser.AtPrefixKeyword:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 58;
	            this.prefixID();
	            break;
	        case turtleParser.AtBaseKeyword:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 59;
	            this.base();
	            break;
	        case turtleParser.PrefixKeyword:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 60;
	            this.sparqlPrefix();
	            break;
	        case turtleParser.BaseKeyword:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 61;
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
	        this.state = 64;
	        this.match(turtleParser.AtPrefixKeyword);
	        this.state = 65;
	        this.match(turtleParser.PNameNs);
	        this.state = 66;
	        this.match(turtleParser.IriRef);
	        this.state = 67;
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
	        this.state = 69;
	        this.match(turtleParser.AtBaseKeyword);
	        this.state = 70;
	        this.match(turtleParser.IriRef);
	        this.state = 71;
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
	        this.state = 73;
	        this.match(turtleParser.BaseKeyword);
	        this.state = 74;
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
	        this.state = 76;
	        this.match(turtleParser.PrefixKeyword);
	        this.state = 77;
	        this.match(turtleParser.PNameNs);
	        this.state = 78;
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
	    var _la = 0; // Token type
	    try {
	        this.state = 87;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case turtleParser.PNameLn:
	        case turtleParser.LParen:
	        case turtleParser.IriRef:
	        case turtleParser.PNameNs:
	        case turtleParser.BlankNodeLabel:
	        case turtleParser.ANON:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 80;
	            this.subject();
	            this.state = 81;
	            this.predicateObjectList();
	            break;
	        case turtleParser.LEnd:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 83;
	            this.blankNodePropertyList();
	            this.state = 85;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << turtleParser.PNameLn) | (1 << turtleParser.LetterA) | (1 << turtleParser.IriRef) | (1 << turtleParser.PNameNs))) !== 0)) {
	                this.state = 84;
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 89;
	        this.predicateObject();
	        this.state = 96;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===turtleParser.Semi) {
	            this.state = 90;
	            this.match(turtleParser.Semi);
	            this.state = 92;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << turtleParser.PNameLn) | (1 << turtleParser.LetterA) | (1 << turtleParser.IriRef) | (1 << turtleParser.PNameNs))) !== 0)) {
	                this.state = 91;
	                this.predicateObject();
	            }

	            this.state = 98;
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 99;
	        this.object_();
	        this.state = 104;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===turtleParser.Coma) {
	            this.state = 100;
	            this.match(turtleParser.Coma);
	            this.state = 101;
	            this.object_();
	            this.state = 106;
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
	        this.state = 109;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case turtleParser.PNameLn:
	        case turtleParser.IriRef:
	        case turtleParser.PNameNs:
	            this.state = 107;
	            this.predicate();
	            break;
	        case turtleParser.LetterA:
	            this.state = 108;
	            this.match(turtleParser.LetterA);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 111;
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
	        this.state = 116;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case turtleParser.PNameLn:
	        case turtleParser.IriRef:
	        case turtleParser.PNameNs:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 113;
	            this.iri();
	            break;
	        case turtleParser.BlankNodeLabel:
	        case turtleParser.ANON:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 114;
	            this.blankNode();
	            break;
	        case turtleParser.LParen:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 115;
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
	        this.state = 118;
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
	        this.state = 125;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case turtleParser.PNameLn:
	        case turtleParser.IriRef:
	        case turtleParser.PNameNs:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 120;
	            this.iri();
	            break;
	        case turtleParser.BlankNodeLabel:
	        case turtleParser.ANON:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 121;
	            this.blankNode();
	            break;
	        case turtleParser.LParen:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 122;
	            this.collection();
	            break;
	        case turtleParser.LEnd:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 123;
	            this.blankNodePropertyList();
	            break;
	        case turtleParser.Integer:
	        case turtleParser.Decimal:
	        case turtleParser.Double:
	        case turtleParser.StringLiteralQuote:
	        case turtleParser.StringLiteralSingleQuote:
	        case turtleParser.StringLiteralLongSingleQuote:
	        case turtleParser.StringLiteralLongQuote:
	        case turtleParser.TrueKeyword:
	        case turtleParser.FalseKeyword:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 124;
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
	        this.state = 130;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case turtleParser.StringLiteralQuote:
	        case turtleParser.StringLiteralSingleQuote:
	        case turtleParser.StringLiteralLongSingleQuote:
	        case turtleParser.StringLiteralLongQuote:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 127;
	            this.rDFLiteral();
	            break;
	        case turtleParser.Integer:
	        case turtleParser.Decimal:
	        case turtleParser.Double:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 128;
	            this.numericLiteral();
	            break;
	        case turtleParser.TrueKeyword:
	        case turtleParser.FalseKeyword:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 129;
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
	        this.state = 132;
	        this.match(turtleParser.LEnd);
	        this.state = 133;
	        this.predicateObjectList();
	        this.state = 134;
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 136;
	        this.match(turtleParser.LParen);
	        this.state = 140;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << turtleParser.PNameLn) | (1 << turtleParser.LParen) | (1 << turtleParser.LEnd) | (1 << turtleParser.IriRef) | (1 << turtleParser.PNameNs) | (1 << turtleParser.BlankNodeLabel) | (1 << turtleParser.Integer) | (1 << turtleParser.Decimal) | (1 << turtleParser.Double) | (1 << turtleParser.StringLiteralQuote) | (1 << turtleParser.StringLiteralSingleQuote) | (1 << turtleParser.StringLiteralLongSingleQuote) | (1 << turtleParser.StringLiteralLongQuote) | (1 << turtleParser.ANON))) !== 0) || _la===turtleParser.TrueKeyword || _la===turtleParser.FalseKeyword) {
	            this.state = 137;
	            this.object_();
	            this.state = 142;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 143;
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 145;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << turtleParser.Integer) | (1 << turtleParser.Decimal) | (1 << turtleParser.Double))) !== 0))) {
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
	        this.state = 147;
	        this.string();
	        this.state = 151;
	        this._errHandler.sync(this);
	        switch (this._input.LA(1)) {
	        case turtleParser.LangTag:
	        	this.state = 148;
	        	this.match(turtleParser.LangTag);
	        	break;
	        case turtleParser.T__0:
	        	this.state = 149;
	        	this.match(turtleParser.T__0);
	        	this.state = 150;
	        	this.iri();
	        	break;
	        case turtleParser.PNameLn:
	        case turtleParser.Dot:
	        case turtleParser.Coma:
	        case turtleParser.LParen:
	        case turtleParser.RParen:
	        case turtleParser.LEnd:
	        case turtleParser.REnd:
	        case turtleParser.IriRef:
	        case turtleParser.PNameNs:
	        case turtleParser.BlankNodeLabel:
	        case turtleParser.Integer:
	        case turtleParser.Decimal:
	        case turtleParser.Double:
	        case turtleParser.StringLiteralQuote:
	        case turtleParser.StringLiteralSingleQuote:
	        case turtleParser.StringLiteralLongSingleQuote:
	        case turtleParser.StringLiteralLongQuote:
	        case turtleParser.ANON:
	        case turtleParser.Semi:
	        case turtleParser.TrueKeyword:
	        case turtleParser.FalseKeyword:
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 153;
	        _la = this._input.LA(1);
	        if(!(_la===turtleParser.TrueKeyword || _la===turtleParser.FalseKeyword)) {
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 155;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << turtleParser.StringLiteralQuote) | (1 << turtleParser.StringLiteralSingleQuote) | (1 << turtleParser.StringLiteralLongSingleQuote) | (1 << turtleParser.StringLiteralLongQuote))) !== 0))) {
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 157;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << turtleParser.PNameLn) | (1 << turtleParser.IriRef) | (1 << turtleParser.PNameNs))) !== 0))) {
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 159;
	        _la = this._input.LA(1);
	        if(!(_la===turtleParser.BlankNodeLabel || _la===turtleParser.ANON)) {
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
