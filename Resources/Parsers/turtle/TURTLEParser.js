// Generated from ./turtle/TURTLE.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import TURTLEListener from './TURTLEListener.js';
const serializedATN = [4,1,45,147,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,1,0,5,0,40,8,
0,10,0,12,0,43,9,0,1,1,1,1,1,1,1,1,3,1,49,8,1,1,2,1,2,1,2,1,2,3,2,55,8,2,
1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,7,1,7,
1,7,1,7,1,7,3,7,78,8,7,3,7,80,8,7,1,8,1,8,1,8,1,8,1,8,1,8,3,8,88,8,8,5,8,
90,8,8,10,8,12,8,93,9,8,1,9,1,9,1,9,5,9,98,8,9,10,9,12,9,101,9,9,1,10,1,
10,3,10,105,8,10,1,11,1,11,1,11,3,11,110,8,11,1,12,1,12,1,13,1,13,1,13,1,
13,1,13,3,13,119,8,13,1,14,1,14,1,14,3,14,124,8,14,1,15,1,15,1,15,1,15,1,
16,1,16,5,16,132,8,16,10,16,12,16,135,9,16,1,16,1,16,1,17,1,17,1,17,1,17,
3,17,143,8,17,1,18,1,18,1,18,0,0,19,0,2,4,6,8,10,12,14,16,18,20,22,24,26,
28,30,32,34,36,0,1,2,0,20,20,22,22,149,0,41,1,0,0,0,2,48,1,0,0,0,4,54,1,
0,0,0,6,56,1,0,0,0,8,61,1,0,0,0,10,65,1,0,0,0,12,68,1,0,0,0,14,79,1,0,0,
0,16,81,1,0,0,0,18,94,1,0,0,0,20,104,1,0,0,0,22,109,1,0,0,0,24,111,1,0,0,
0,26,118,1,0,0,0,28,123,1,0,0,0,30,125,1,0,0,0,32,129,1,0,0,0,34,138,1,0,
0,0,36,144,1,0,0,0,38,40,3,2,1,0,39,38,1,0,0,0,40,43,1,0,0,0,41,39,1,0,0,
0,41,42,1,0,0,0,42,1,1,0,0,0,43,41,1,0,0,0,44,49,3,4,2,0,45,46,3,14,7,0,
46,47,5,1,0,0,47,49,1,0,0,0,48,44,1,0,0,0,48,45,1,0,0,0,49,3,1,0,0,0,50,
55,3,6,3,0,51,55,3,8,4,0,52,55,3,12,6,0,53,55,3,10,5,0,54,50,1,0,0,0,54,
51,1,0,0,0,54,52,1,0,0,0,54,53,1,0,0,0,55,5,1,0,0,0,56,57,5,2,0,0,57,58,
5,21,0,0,58,59,5,20,0,0,59,60,5,1,0,0,60,7,1,0,0,0,61,62,5,3,0,0,62,63,5,
20,0,0,63,64,5,1,0,0,64,9,1,0,0,0,65,66,5,4,0,0,66,67,5,20,0,0,67,11,1,0,
0,0,68,69,5,5,0,0,69,70,5,21,0,0,70,71,5,20,0,0,71,13,1,0,0,0,72,73,3,22,
11,0,73,74,3,16,8,0,74,80,1,0,0,0,75,77,3,30,15,0,76,78,3,16,8,0,77,76,1,
0,0,0,77,78,1,0,0,0,78,80,1,0,0,0,79,72,1,0,0,0,79,75,1,0,0,0,80,15,1,0,
0,0,81,82,3,20,10,0,82,91,3,18,9,0,83,87,5,6,0,0,84,85,3,20,10,0,85,86,3,
18,9,0,86,88,1,0,0,0,87,84,1,0,0,0,87,88,1,0,0,0,88,90,1,0,0,0,89,83,1,0,
0,0,90,93,1,0,0,0,91,89,1,0,0,0,91,92,1,0,0,0,92,17,1,0,0,0,93,91,1,0,0,
0,94,99,3,26,13,0,95,96,5,7,0,0,96,98,3,26,13,0,97,95,1,0,0,0,98,101,1,0,
0,0,99,97,1,0,0,0,99,100,1,0,0,0,100,19,1,0,0,0,101,99,1,0,0,0,102,105,3,
24,12,0,103,105,5,8,0,0,104,102,1,0,0,0,104,103,1,0,0,0,105,21,1,0,0,0,106,
110,3,36,18,0,107,110,5,17,0,0,108,110,3,32,16,0,109,106,1,0,0,0,109,107,
1,0,0,0,109,108,1,0,0,0,110,23,1,0,0,0,111,112,3,36,18,0,112,25,1,0,0,0,
113,119,3,36,18,0,114,119,5,17,0,0,115,119,3,32,16,0,116,119,3,30,15,0,117,
119,3,28,14,0,118,113,1,0,0,0,118,114,1,0,0,0,118,115,1,0,0,0,118,116,1,
0,0,0,118,117,1,0,0,0,119,27,1,0,0,0,120,124,3,34,17,0,121,124,5,14,0,0,
122,124,5,15,0,0,123,120,1,0,0,0,123,121,1,0,0,0,123,122,1,0,0,0,124,29,
1,0,0,0,125,126,5,9,0,0,126,127,3,16,8,0,127,128,5,10,0,0,128,31,1,0,0,0,
129,133,5,11,0,0,130,132,3,26,13,0,131,130,1,0,0,0,132,135,1,0,0,0,133,131,
1,0,0,0,133,134,1,0,0,0,134,136,1,0,0,0,135,133,1,0,0,0,136,137,5,12,0,0,
137,33,1,0,0,0,138,142,5,16,0,0,139,143,5,25,0,0,140,141,5,13,0,0,141,143,
3,36,18,0,142,139,1,0,0,0,142,140,1,0,0,0,142,143,1,0,0,0,143,35,1,0,0,0,
144,145,7,0,0,0,145,37,1,0,0,0,14,41,48,54,77,79,87,91,99,104,109,118,123,
133,142];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class TURTLEParser extends antlr4.Parser {

    static grammarFileName = "TURTLE.g4";
    static literalNames = [ null, "'.'", "'@prefix'", "'@base'", "'BASE'", 
                            "'PREFIX'", "';'", "','", "'a'", "'['", "']'", 
                            "'('", "')'", "'^^'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, "NumericLiteral", 
                             "BooleanLiteral", "String", "BlankNode", "WS", 
                             "PN_PREFIX", "IRIREF", "PNAME_NS", "PrefixedName", 
                             "PNAME_LN", "BLANK_NODE_LABEL", "LANGTAG", 
                             "INTEGER", "DECIMAL", "DOUBLE", "EXPONENT", 
                             "STRING_LITERAL_LONG_SINGLE_QUOTE", "STRING_LITERAL_LONG_QUOTE", 
                             "STRING_LITERAL_QUOTE", "STRING_LITERAL_SINGLE_QUOTE", 
                             "UCHAR", "ECHAR", "ANON_WS", "ANON", "PN_CHARS_BASE", 
                             "PN_CHARS_U", "PN_CHARS", "PN_LOCAL", "PLX", 
                             "PERCENT", "HEX", "PN_LOCAL_ESC" ];
    static ruleNames = [ "turtleDoc", "statement", "directive", "prefixID", 
                         "base", "sparqlBase", "sparqlPrefix", "triples", 
                         "predicateObjectList", "objectList", "verb", "subject", 
                         "predicate", "object_", "literal", "blankNodePropertyList", 
                         "collection", "rdfLiteral", "iri" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = TURTLEParser.ruleNames;
        this.literalNames = TURTLEParser.literalNames;
        this.symbolicNames = TURTLEParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	turtleDoc() {
	    let localctx = new TurtleDocContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, TURTLEParser.RULE_turtleDoc);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 41;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << TURTLEParser.T__1) | (1 << TURTLEParser.T__2) | (1 << TURTLEParser.T__3) | (1 << TURTLEParser.T__4) | (1 << TURTLEParser.T__8) | (1 << TURTLEParser.T__10) | (1 << TURTLEParser.BlankNode) | (1 << TURTLEParser.IRIREF) | (1 << TURTLEParser.PrefixedName))) !== 0)) {
	            this.state = 38;
	            this.statement();
	            this.state = 43;
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
	    this.enterRule(localctx, 2, TURTLEParser.RULE_statement);
	    try {
	        this.state = 48;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case TURTLEParser.T__1:
	        case TURTLEParser.T__2:
	        case TURTLEParser.T__3:
	        case TURTLEParser.T__4:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 44;
	            this.directive();
	            break;
	        case TURTLEParser.T__8:
	        case TURTLEParser.T__10:
	        case TURTLEParser.BlankNode:
	        case TURTLEParser.IRIREF:
	        case TURTLEParser.PrefixedName:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 45;
	            this.triples();
	            this.state = 46;
	            this.match(TURTLEParser.T__0);
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
	    this.enterRule(localctx, 4, TURTLEParser.RULE_directive);
	    try {
	        this.state = 54;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case TURTLEParser.T__1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 50;
	            this.prefixID();
	            break;
	        case TURTLEParser.T__2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 51;
	            this.base();
	            break;
	        case TURTLEParser.T__4:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 52;
	            this.sparqlPrefix();
	            break;
	        case TURTLEParser.T__3:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 53;
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
	    this.enterRule(localctx, 6, TURTLEParser.RULE_prefixID);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 56;
	        this.match(TURTLEParser.T__1);
	        this.state = 57;
	        this.match(TURTLEParser.PNAME_NS);
	        this.state = 58;
	        this.match(TURTLEParser.IRIREF);
	        this.state = 59;
	        this.match(TURTLEParser.T__0);
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
	    this.enterRule(localctx, 8, TURTLEParser.RULE_base);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 61;
	        this.match(TURTLEParser.T__2);
	        this.state = 62;
	        this.match(TURTLEParser.IRIREF);
	        this.state = 63;
	        this.match(TURTLEParser.T__0);
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
	    this.enterRule(localctx, 10, TURTLEParser.RULE_sparqlBase);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 65;
	        this.match(TURTLEParser.T__3);
	        this.state = 66;
	        this.match(TURTLEParser.IRIREF);
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
	    this.enterRule(localctx, 12, TURTLEParser.RULE_sparqlPrefix);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 68;
	        this.match(TURTLEParser.T__4);
	        this.state = 69;
	        this.match(TURTLEParser.PNAME_NS);
	        this.state = 70;
	        this.match(TURTLEParser.IRIREF);
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
	    this.enterRule(localctx, 14, TURTLEParser.RULE_triples);
	    var _la = 0; // Token type
	    try {
	        this.state = 79;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case TURTLEParser.T__10:
	        case TURTLEParser.BlankNode:
	        case TURTLEParser.IRIREF:
	        case TURTLEParser.PrefixedName:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 72;
	            this.subject();
	            this.state = 73;
	            this.predicateObjectList();
	            break;
	        case TURTLEParser.T__8:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 75;
	            this.blankNodePropertyList();
	            this.state = 77;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << TURTLEParser.T__7) | (1 << TURTLEParser.IRIREF) | (1 << TURTLEParser.PrefixedName))) !== 0)) {
	                this.state = 76;
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
	    this.enterRule(localctx, 16, TURTLEParser.RULE_predicateObjectList);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 81;
	        this.verb();
	        this.state = 82;
	        this.objectList();
	        this.state = 91;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===TURTLEParser.T__5) {
	            this.state = 83;
	            this.match(TURTLEParser.T__5);
	            this.state = 87;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << TURTLEParser.T__7) | (1 << TURTLEParser.IRIREF) | (1 << TURTLEParser.PrefixedName))) !== 0)) {
	                this.state = 84;
	                this.verb();
	                this.state = 85;
	                this.objectList();
	            }

	            this.state = 93;
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
	    this.enterRule(localctx, 18, TURTLEParser.RULE_objectList);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 94;
	        this.object_();
	        this.state = 99;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===TURTLEParser.T__6) {
	            this.state = 95;
	            this.match(TURTLEParser.T__6);
	            this.state = 96;
	            this.object_();
	            this.state = 101;
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



	verb() {
	    let localctx = new VerbContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, TURTLEParser.RULE_verb);
	    try {
	        this.state = 104;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case TURTLEParser.IRIREF:
	        case TURTLEParser.PrefixedName:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 102;
	            this.predicate();
	            break;
	        case TURTLEParser.T__7:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 103;
	            this.match(TURTLEParser.T__7);
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



	subject() {
	    let localctx = new SubjectContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, TURTLEParser.RULE_subject);
	    try {
	        this.state = 109;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case TURTLEParser.IRIREF:
	        case TURTLEParser.PrefixedName:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 106;
	            this.iri();
	            break;
	        case TURTLEParser.BlankNode:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 107;
	            this.match(TURTLEParser.BlankNode);
	            break;
	        case TURTLEParser.T__10:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 108;
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
	    this.enterRule(localctx, 24, TURTLEParser.RULE_predicate);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 111;
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
	    this.enterRule(localctx, 26, TURTLEParser.RULE_object_);
	    try {
	        this.state = 118;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case TURTLEParser.IRIREF:
	        case TURTLEParser.PrefixedName:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 113;
	            this.iri();
	            break;
	        case TURTLEParser.BlankNode:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 114;
	            this.match(TURTLEParser.BlankNode);
	            break;
	        case TURTLEParser.T__10:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 115;
	            this.collection();
	            break;
	        case TURTLEParser.T__8:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 116;
	            this.blankNodePropertyList();
	            break;
	        case TURTLEParser.NumericLiteral:
	        case TURTLEParser.BooleanLiteral:
	        case TURTLEParser.String:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 117;
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
	    this.enterRule(localctx, 28, TURTLEParser.RULE_literal);
	    try {
	        this.state = 123;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case TURTLEParser.String:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 120;
	            this.rdfLiteral();
	            break;
	        case TURTLEParser.NumericLiteral:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 121;
	            this.match(TURTLEParser.NumericLiteral);
	            break;
	        case TURTLEParser.BooleanLiteral:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 122;
	            this.match(TURTLEParser.BooleanLiteral);
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
	    this.enterRule(localctx, 30, TURTLEParser.RULE_blankNodePropertyList);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 125;
	        this.match(TURTLEParser.T__8);
	        this.state = 126;
	        this.predicateObjectList();
	        this.state = 127;
	        this.match(TURTLEParser.T__9);
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
	    this.enterRule(localctx, 32, TURTLEParser.RULE_collection);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 129;
	        this.match(TURTLEParser.T__10);
	        this.state = 133;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << TURTLEParser.T__8) | (1 << TURTLEParser.T__10) | (1 << TURTLEParser.NumericLiteral) | (1 << TURTLEParser.BooleanLiteral) | (1 << TURTLEParser.String) | (1 << TURTLEParser.BlankNode) | (1 << TURTLEParser.IRIREF) | (1 << TURTLEParser.PrefixedName))) !== 0)) {
	            this.state = 130;
	            this.object_();
	            this.state = 135;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 136;
	        this.match(TURTLEParser.T__11);
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



	rdfLiteral() {
	    let localctx = new RdfLiteralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, TURTLEParser.RULE_rdfLiteral);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 138;
	        this.match(TURTLEParser.String);
	        this.state = 142;
	        this._errHandler.sync(this);
	        switch (this._input.LA(1)) {
	        case TURTLEParser.LANGTAG:
	        	this.state = 139;
	        	this.match(TURTLEParser.LANGTAG);
	        	break;
	        case TURTLEParser.T__12:
	        	this.state = 140;
	        	this.match(TURTLEParser.T__12);
	        	this.state = 141;
	        	this.iri();
	        	break;
	        case TURTLEParser.T__0:
	        case TURTLEParser.T__5:
	        case TURTLEParser.T__6:
	        case TURTLEParser.T__8:
	        case TURTLEParser.T__9:
	        case TURTLEParser.T__10:
	        case TURTLEParser.T__11:
	        case TURTLEParser.NumericLiteral:
	        case TURTLEParser.BooleanLiteral:
	        case TURTLEParser.String:
	        case TURTLEParser.BlankNode:
	        case TURTLEParser.IRIREF:
	        case TURTLEParser.PrefixedName:
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



	iri() {
	    let localctx = new IriContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, TURTLEParser.RULE_iri);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 144;
	        _la = this._input.LA(1);
	        if(!(_la===TURTLEParser.IRIREF || _la===TURTLEParser.PrefixedName)) {
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

TURTLEParser.EOF = antlr4.Token.EOF;
TURTLEParser.T__0 = 1;
TURTLEParser.T__1 = 2;
TURTLEParser.T__2 = 3;
TURTLEParser.T__3 = 4;
TURTLEParser.T__4 = 5;
TURTLEParser.T__5 = 6;
TURTLEParser.T__6 = 7;
TURTLEParser.T__7 = 8;
TURTLEParser.T__8 = 9;
TURTLEParser.T__9 = 10;
TURTLEParser.T__10 = 11;
TURTLEParser.T__11 = 12;
TURTLEParser.T__12 = 13;
TURTLEParser.NumericLiteral = 14;
TURTLEParser.BooleanLiteral = 15;
TURTLEParser.String = 16;
TURTLEParser.BlankNode = 17;
TURTLEParser.WS = 18;
TURTLEParser.PN_PREFIX = 19;
TURTLEParser.IRIREF = 20;
TURTLEParser.PNAME_NS = 21;
TURTLEParser.PrefixedName = 22;
TURTLEParser.PNAME_LN = 23;
TURTLEParser.BLANK_NODE_LABEL = 24;
TURTLEParser.LANGTAG = 25;
TURTLEParser.INTEGER = 26;
TURTLEParser.DECIMAL = 27;
TURTLEParser.DOUBLE = 28;
TURTLEParser.EXPONENT = 29;
TURTLEParser.STRING_LITERAL_LONG_SINGLE_QUOTE = 30;
TURTLEParser.STRING_LITERAL_LONG_QUOTE = 31;
TURTLEParser.STRING_LITERAL_QUOTE = 32;
TURTLEParser.STRING_LITERAL_SINGLE_QUOTE = 33;
TURTLEParser.UCHAR = 34;
TURTLEParser.ECHAR = 35;
TURTLEParser.ANON_WS = 36;
TURTLEParser.ANON = 37;
TURTLEParser.PN_CHARS_BASE = 38;
TURTLEParser.PN_CHARS_U = 39;
TURTLEParser.PN_CHARS = 40;
TURTLEParser.PN_LOCAL = 41;
TURTLEParser.PLX = 42;
TURTLEParser.PERCENT = 43;
TURTLEParser.HEX = 44;
TURTLEParser.PN_LOCAL_ESC = 45;

TURTLEParser.RULE_turtleDoc = 0;
TURTLEParser.RULE_statement = 1;
TURTLEParser.RULE_directive = 2;
TURTLEParser.RULE_prefixID = 3;
TURTLEParser.RULE_base = 4;
TURTLEParser.RULE_sparqlBase = 5;
TURTLEParser.RULE_sparqlPrefix = 6;
TURTLEParser.RULE_triples = 7;
TURTLEParser.RULE_predicateObjectList = 8;
TURTLEParser.RULE_objectList = 9;
TURTLEParser.RULE_verb = 10;
TURTLEParser.RULE_subject = 11;
TURTLEParser.RULE_predicate = 12;
TURTLEParser.RULE_object_ = 13;
TURTLEParser.RULE_literal = 14;
TURTLEParser.RULE_blankNodePropertyList = 15;
TURTLEParser.RULE_collection = 16;
TURTLEParser.RULE_rdfLiteral = 17;
TURTLEParser.RULE_iri = 18;

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
        this.ruleIndex = TURTLEParser.RULE_turtleDoc;
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
	    if(listener instanceof TURTLEListener ) {
	        listener.enterTurtleDoc(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TURTLEListener ) {
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
        this.ruleIndex = TURTLEParser.RULE_statement;
    }

	directive() {
	    return this.getTypedRuleContext(DirectiveContext,0);
	};

	triples() {
	    return this.getTypedRuleContext(TriplesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TURTLEListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TURTLEListener ) {
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
        this.ruleIndex = TURTLEParser.RULE_directive;
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
	    if(listener instanceof TURTLEListener ) {
	        listener.enterDirective(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TURTLEListener ) {
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
        this.ruleIndex = TURTLEParser.RULE_prefixID;
    }

	PNAME_NS() {
	    return this.getToken(TURTLEParser.PNAME_NS, 0);
	};

	IRIREF() {
	    return this.getToken(TURTLEParser.IRIREF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TURTLEListener ) {
	        listener.enterPrefixID(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TURTLEListener ) {
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
        this.ruleIndex = TURTLEParser.RULE_base;
    }

	IRIREF() {
	    return this.getToken(TURTLEParser.IRIREF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TURTLEListener ) {
	        listener.enterBase(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TURTLEListener ) {
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
        this.ruleIndex = TURTLEParser.RULE_sparqlBase;
    }

	IRIREF() {
	    return this.getToken(TURTLEParser.IRIREF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TURTLEListener ) {
	        listener.enterSparqlBase(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TURTLEListener ) {
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
        this.ruleIndex = TURTLEParser.RULE_sparqlPrefix;
    }

	PNAME_NS() {
	    return this.getToken(TURTLEParser.PNAME_NS, 0);
	};

	IRIREF() {
	    return this.getToken(TURTLEParser.IRIREF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TURTLEListener ) {
	        listener.enterSparqlPrefix(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TURTLEListener ) {
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
        this.ruleIndex = TURTLEParser.RULE_triples;
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
	    if(listener instanceof TURTLEListener ) {
	        listener.enterTriples(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TURTLEListener ) {
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
        this.ruleIndex = TURTLEParser.RULE_predicateObjectList;
    }

	verb = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(VerbContext);
	    } else {
	        return this.getTypedRuleContext(VerbContext,i);
	    }
	};

	objectList = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ObjectListContext);
	    } else {
	        return this.getTypedRuleContext(ObjectListContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof TURTLEListener ) {
	        listener.enterPredicateObjectList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TURTLEListener ) {
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
        this.ruleIndex = TURTLEParser.RULE_objectList;
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

	enterRule(listener) {
	    if(listener instanceof TURTLEListener ) {
	        listener.enterObjectList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TURTLEListener ) {
	        listener.exitObjectList(this);
		}
	}


}



class VerbContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TURTLEParser.RULE_verb;
    }

	predicate() {
	    return this.getTypedRuleContext(PredicateContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TURTLEListener ) {
	        listener.enterVerb(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TURTLEListener ) {
	        listener.exitVerb(this);
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
        this.ruleIndex = TURTLEParser.RULE_subject;
    }

	iri() {
	    return this.getTypedRuleContext(IriContext,0);
	};

	BlankNode() {
	    return this.getToken(TURTLEParser.BlankNode, 0);
	};

	collection() {
	    return this.getTypedRuleContext(CollectionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TURTLEListener ) {
	        listener.enterSubject(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TURTLEListener ) {
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
        this.ruleIndex = TURTLEParser.RULE_predicate;
    }

	iri() {
	    return this.getTypedRuleContext(IriContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TURTLEListener ) {
	        listener.enterPredicate(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TURTLEListener ) {
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
        this.ruleIndex = TURTLEParser.RULE_object_;
    }

	iri() {
	    return this.getTypedRuleContext(IriContext,0);
	};

	BlankNode() {
	    return this.getToken(TURTLEParser.BlankNode, 0);
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
	    if(listener instanceof TURTLEListener ) {
	        listener.enterObject_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TURTLEListener ) {
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
        this.ruleIndex = TURTLEParser.RULE_literal;
    }

	rdfLiteral() {
	    return this.getTypedRuleContext(RdfLiteralContext,0);
	};

	NumericLiteral() {
	    return this.getToken(TURTLEParser.NumericLiteral, 0);
	};

	BooleanLiteral() {
	    return this.getToken(TURTLEParser.BooleanLiteral, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TURTLEListener ) {
	        listener.enterLiteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TURTLEListener ) {
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
        this.ruleIndex = TURTLEParser.RULE_blankNodePropertyList;
    }

	predicateObjectList() {
	    return this.getTypedRuleContext(PredicateObjectListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TURTLEListener ) {
	        listener.enterBlankNodePropertyList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TURTLEListener ) {
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
        this.ruleIndex = TURTLEParser.RULE_collection;
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

	enterRule(listener) {
	    if(listener instanceof TURTLEListener ) {
	        listener.enterCollection(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TURTLEListener ) {
	        listener.exitCollection(this);
		}
	}


}



class RdfLiteralContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TURTLEParser.RULE_rdfLiteral;
    }

	String() {
	    return this.getToken(TURTLEParser.String, 0);
	};

	LANGTAG() {
	    return this.getToken(TURTLEParser.LANGTAG, 0);
	};

	iri() {
	    return this.getTypedRuleContext(IriContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TURTLEListener ) {
	        listener.enterRdfLiteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TURTLEListener ) {
	        listener.exitRdfLiteral(this);
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
        this.ruleIndex = TURTLEParser.RULE_iri;
    }

	IRIREF() {
	    return this.getToken(TURTLEParser.IRIREF, 0);
	};

	PrefixedName() {
	    return this.getToken(TURTLEParser.PrefixedName, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TURTLEListener ) {
	        listener.enterIri(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TURTLEListener ) {
	        listener.exitIri(this);
		}
	}


}




TURTLEParser.TurtleDocContext = TurtleDocContext; 
TURTLEParser.StatementContext = StatementContext; 
TURTLEParser.DirectiveContext = DirectiveContext; 
TURTLEParser.PrefixIDContext = PrefixIDContext; 
TURTLEParser.BaseContext = BaseContext; 
TURTLEParser.SparqlBaseContext = SparqlBaseContext; 
TURTLEParser.SparqlPrefixContext = SparqlPrefixContext; 
TURTLEParser.TriplesContext = TriplesContext; 
TURTLEParser.PredicateObjectListContext = PredicateObjectListContext; 
TURTLEParser.ObjectListContext = ObjectListContext; 
TURTLEParser.VerbContext = VerbContext; 
TURTLEParser.SubjectContext = SubjectContext; 
TURTLEParser.PredicateContext = PredicateContext; 
TURTLEParser.Object_Context = Object_Context; 
TURTLEParser.LiteralContext = LiteralContext; 
TURTLEParser.BlankNodePropertyListContext = BlankNodePropertyListContext; 
TURTLEParser.CollectionContext = CollectionContext; 
TURTLEParser.RdfLiteralContext = RdfLiteralContext; 
TURTLEParser.IriContext = IriContext; 
