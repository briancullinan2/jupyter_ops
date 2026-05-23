// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/dot/DOT.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import DOTListener from './DOTListener.js';
const serializedATN = [4,1,24,129,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,1,0,3,0,30,8,0,1,0,1,0,3,0,34,8,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,
3,1,43,8,1,5,1,45,8,1,10,1,12,1,48,9,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,
2,58,8,2,1,3,1,3,1,3,1,4,1,4,3,4,65,8,4,1,4,4,4,68,8,4,11,4,12,4,69,1,5,
1,5,1,5,3,5,75,8,5,1,5,3,5,78,8,5,4,5,80,8,5,11,5,12,5,81,1,6,1,6,3,6,86,
8,6,1,6,1,6,3,6,90,8,6,1,7,1,7,1,7,3,7,95,8,7,4,7,97,8,7,11,7,12,7,98,1,
8,1,8,1,9,1,9,3,9,105,8,9,1,10,1,10,3,10,109,8,10,1,11,1,11,1,11,1,11,3,
11,115,8,11,1,12,1,12,3,12,119,8,12,3,12,121,8,12,1,12,1,12,1,12,1,12,1,
13,1,13,1,13,0,0,14,0,2,4,6,8,10,12,14,16,18,20,22,24,26,0,5,1,0,12,13,2,
0,12,12,14,15,2,0,3,3,7,7,1,0,8,9,1,0,17,20,136,0,29,1,0,0,0,2,46,1,0,0,
0,4,57,1,0,0,0,6,59,1,0,0,0,8,67,1,0,0,0,10,79,1,0,0,0,12,85,1,0,0,0,14,
96,1,0,0,0,16,100,1,0,0,0,18,102,1,0,0,0,20,106,1,0,0,0,22,110,1,0,0,0,24,
120,1,0,0,0,26,126,1,0,0,0,28,30,5,11,0,0,29,28,1,0,0,0,29,30,1,0,0,0,30,
31,1,0,0,0,31,33,7,0,0,0,32,34,3,26,13,0,33,32,1,0,0,0,33,34,1,0,0,0,34,
35,1,0,0,0,35,36,5,1,0,0,36,37,3,2,1,0,37,38,5,2,0,0,38,39,5,0,0,1,39,1,
1,0,0,0,40,42,3,4,2,0,41,43,5,3,0,0,42,41,1,0,0,0,42,43,1,0,0,0,43,45,1,
0,0,0,44,40,1,0,0,0,45,48,1,0,0,0,46,44,1,0,0,0,46,47,1,0,0,0,47,3,1,0,0,
0,48,46,1,0,0,0,49,58,3,18,9,0,50,58,3,12,6,0,51,58,3,6,3,0,52,53,3,26,13,
0,53,54,5,4,0,0,54,55,3,26,13,0,55,58,1,0,0,0,56,58,3,24,12,0,57,49,1,0,
0,0,57,50,1,0,0,0,57,51,1,0,0,0,57,52,1,0,0,0,57,56,1,0,0,0,58,5,1,0,0,0,
59,60,7,1,0,0,60,61,3,8,4,0,61,7,1,0,0,0,62,64,5,5,0,0,63,65,3,10,5,0,64,
63,1,0,0,0,64,65,1,0,0,0,65,66,1,0,0,0,66,68,5,6,0,0,67,62,1,0,0,0,68,69,
1,0,0,0,69,67,1,0,0,0,69,70,1,0,0,0,70,9,1,0,0,0,71,74,3,26,13,0,72,73,5,
4,0,0,73,75,3,26,13,0,74,72,1,0,0,0,74,75,1,0,0,0,75,77,1,0,0,0,76,78,7,
2,0,0,77,76,1,0,0,0,77,78,1,0,0,0,78,80,1,0,0,0,79,71,1,0,0,0,80,81,1,0,
0,0,81,79,1,0,0,0,81,82,1,0,0,0,82,11,1,0,0,0,83,86,3,20,10,0,84,86,3,24,
12,0,85,83,1,0,0,0,85,84,1,0,0,0,86,87,1,0,0,0,87,89,3,14,7,0,88,90,3,8,
4,0,89,88,1,0,0,0,89,90,1,0,0,0,90,13,1,0,0,0,91,94,3,16,8,0,92,95,3,20,
10,0,93,95,3,24,12,0,94,92,1,0,0,0,94,93,1,0,0,0,95,97,1,0,0,0,96,91,1,0,
0,0,97,98,1,0,0,0,98,96,1,0,0,0,98,99,1,0,0,0,99,15,1,0,0,0,100,101,7,3,
0,0,101,17,1,0,0,0,102,104,3,20,10,0,103,105,3,8,4,0,104,103,1,0,0,0,104,
105,1,0,0,0,105,19,1,0,0,0,106,108,3,26,13,0,107,109,3,22,11,0,108,107,1,
0,0,0,108,109,1,0,0,0,109,21,1,0,0,0,110,111,5,10,0,0,111,114,3,26,13,0,
112,113,5,10,0,0,113,115,3,26,13,0,114,112,1,0,0,0,114,115,1,0,0,0,115,23,
1,0,0,0,116,118,5,16,0,0,117,119,3,26,13,0,118,117,1,0,0,0,118,119,1,0,0,
0,119,121,1,0,0,0,120,116,1,0,0,0,120,121,1,0,0,0,121,122,1,0,0,0,122,123,
5,1,0,0,123,124,3,2,1,0,124,125,5,2,0,0,125,25,1,0,0,0,126,127,7,4,0,0,127,
27,1,0,0,0,19,29,33,42,46,57,64,69,74,77,81,85,89,94,98,104,108,114,118,
120];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class DOTParser extends antlr4.Parser {

    static grammarFileName = "DOT.g4";
    static literalNames = [ null, "'{'", "'}'", "';'", "'='", "'['", "']'", 
                            "','", "'->'", "'--'", "':'", "'strict'", "'graph'", 
                            "'digraph'", "'node'", "'edge'", "'subgraph'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, "STRICT", "GRAPH", "DIGRAPH", 
                             "NODE", "EDGE", "SUBGRAPH", "NUMBER", "STRING", 
                             "ID", "HTML_STRING", "COMMENT", "LINE_COMMENT", 
                             "PREPROC", "WS" ];
    static ruleNames = [ "graph", "stmt_list", "stmt", "attr_stmt", "attr_list", 
                         "a_list", "edge_stmt", "edgeRHS", "edgeop", "node_stmt", 
                         "node_id", "port", "subgraph", "id_" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = DOTParser.ruleNames;
        this.literalNames = DOTParser.literalNames;
        this.symbolicNames = DOTParser.symbolicNames;
    }



	graph() {
	    let localctx = new GraphContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, DOTParser.RULE_graph);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 29;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===11) {
	            this.state = 28;
	            this.match(DOTParser.STRICT);
	        }

	        this.state = 31;
	        _la = this._input.LA(1);
	        if(!(_la===12 || _la===13)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 33;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 1966080) !== 0)) {
	            this.state = 32;
	            this.id_();
	        }

	        this.state = 35;
	        this.match(DOTParser.T__0);
	        this.state = 36;
	        this.stmt_list();
	        this.state = 37;
	        this.match(DOTParser.T__1);
	        this.state = 38;
	        this.match(DOTParser.EOF);
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



	stmt_list() {
	    let localctx = new Stmt_listContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, DOTParser.RULE_stmt_list);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 46;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 2084866) !== 0)) {
	            this.state = 40;
	            this.stmt();
	            this.state = 42;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===3) {
	                this.state = 41;
	                this.match(DOTParser.T__2);
	            }

	            this.state = 48;
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



	stmt() {
	    let localctx = new StmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, DOTParser.RULE_stmt);
	    try {
	        this.state = 57;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 49;
	            this.node_stmt();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 50;
	            this.edge_stmt();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 51;
	            this.attr_stmt();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 52;
	            this.id_();
	            this.state = 53;
	            this.match(DOTParser.T__3);
	            this.state = 54;
	            this.id_();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 56;
	            this.subgraph();
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



	attr_stmt() {
	    let localctx = new Attr_stmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, DOTParser.RULE_attr_stmt);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 59;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 53248) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 60;
	        this.attr_list();
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



	attr_list() {
	    let localctx = new Attr_listContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, DOTParser.RULE_attr_list);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 67; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 62;
	            this.match(DOTParser.T__4);
	            this.state = 64;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) === 0 && ((1 << _la) & 1966080) !== 0)) {
	                this.state = 63;
	                this.a_list();
	            }

	            this.state = 66;
	            this.match(DOTParser.T__5);
	            this.state = 69; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===5);
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



	a_list() {
	    let localctx = new A_listContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, DOTParser.RULE_a_list);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 79; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 71;
	            this.id_();
	            this.state = 74;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===4) {
	                this.state = 72;
	                this.match(DOTParser.T__3);
	                this.state = 73;
	                this.id_();
	            }

	            this.state = 77;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===3 || _la===7) {
	                this.state = 76;
	                _la = this._input.LA(1);
	                if(!(_la===3 || _la===7)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	            }

	            this.state = 81; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1966080) !== 0));
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



	edge_stmt() {
	    let localctx = new Edge_stmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, DOTParser.RULE_edge_stmt);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 85;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 17:
	        case 18:
	        case 19:
	        case 20:
	            this.state = 83;
	            this.node_id();
	            break;
	        case 1:
	        case 16:
	            this.state = 84;
	            this.subgraph();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 87;
	        this.edgeRHS();
	        this.state = 89;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===5) {
	            this.state = 88;
	            this.attr_list();
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



	edgeRHS() {
	    let localctx = new EdgeRHSContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, DOTParser.RULE_edgeRHS);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 96; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 91;
	            this.edgeop();
	            this.state = 94;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 17:
	            case 18:
	            case 19:
	            case 20:
	                this.state = 92;
	                this.node_id();
	                break;
	            case 1:
	            case 16:
	                this.state = 93;
	                this.subgraph();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 98; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===8 || _la===9);
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



	edgeop() {
	    let localctx = new EdgeopContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, DOTParser.RULE_edgeop);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 100;
	        _la = this._input.LA(1);
	        if(!(_la===8 || _la===9)) {
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



	node_stmt() {
	    let localctx = new Node_stmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, DOTParser.RULE_node_stmt);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 102;
	        this.node_id();
	        this.state = 104;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===5) {
	            this.state = 103;
	            this.attr_list();
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



	node_id() {
	    let localctx = new Node_idContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, DOTParser.RULE_node_id);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 106;
	        this.id_();
	        this.state = 108;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===10) {
	            this.state = 107;
	            this.port();
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



	port() {
	    let localctx = new PortContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, DOTParser.RULE_port);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 110;
	        this.match(DOTParser.T__9);
	        this.state = 111;
	        this.id_();
	        this.state = 114;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===10) {
	            this.state = 112;
	            this.match(DOTParser.T__9);
	            this.state = 113;
	            this.id_();
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



	subgraph() {
	    let localctx = new SubgraphContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, DOTParser.RULE_subgraph);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 120;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 116;
	            this.match(DOTParser.SUBGRAPH);
	            this.state = 118;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) === 0 && ((1 << _la) & 1966080) !== 0)) {
	                this.state = 117;
	                this.id_();
	            }

	        }

	        this.state = 122;
	        this.match(DOTParser.T__0);
	        this.state = 123;
	        this.stmt_list();
	        this.state = 124;
	        this.match(DOTParser.T__1);
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



	id_() {
	    let localctx = new Id_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, DOTParser.RULE_id_);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 126;
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


}

DOTParser.EOF = antlr4.Token.EOF;
DOTParser.T__0 = 1;
DOTParser.T__1 = 2;
DOTParser.T__2 = 3;
DOTParser.T__3 = 4;
DOTParser.T__4 = 5;
DOTParser.T__5 = 6;
DOTParser.T__6 = 7;
DOTParser.T__7 = 8;
DOTParser.T__8 = 9;
DOTParser.T__9 = 10;
DOTParser.STRICT = 11;
DOTParser.GRAPH = 12;
DOTParser.DIGRAPH = 13;
DOTParser.NODE = 14;
DOTParser.EDGE = 15;
DOTParser.SUBGRAPH = 16;
DOTParser.NUMBER = 17;
DOTParser.STRING = 18;
DOTParser.ID = 19;
DOTParser.HTML_STRING = 20;
DOTParser.COMMENT = 21;
DOTParser.LINE_COMMENT = 22;
DOTParser.PREPROC = 23;
DOTParser.WS = 24;

DOTParser.RULE_graph = 0;
DOTParser.RULE_stmt_list = 1;
DOTParser.RULE_stmt = 2;
DOTParser.RULE_attr_stmt = 3;
DOTParser.RULE_attr_list = 4;
DOTParser.RULE_a_list = 5;
DOTParser.RULE_edge_stmt = 6;
DOTParser.RULE_edgeRHS = 7;
DOTParser.RULE_edgeop = 8;
DOTParser.RULE_node_stmt = 9;
DOTParser.RULE_node_id = 10;
DOTParser.RULE_port = 11;
DOTParser.RULE_subgraph = 12;
DOTParser.RULE_id_ = 13;

class GraphContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DOTParser.RULE_graph;
    }

	stmt_list() {
	    return this.getTypedRuleContext(Stmt_listContext,0);
	};

	EOF() {
	    return this.getToken(DOTParser.EOF, 0);
	};

	GRAPH() {
	    return this.getToken(DOTParser.GRAPH, 0);
	};

	DIGRAPH() {
	    return this.getToken(DOTParser.DIGRAPH, 0);
	};

	STRICT() {
	    return this.getToken(DOTParser.STRICT, 0);
	};

	id_() {
	    return this.getTypedRuleContext(Id_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof DOTListener ) {
	        listener.enterGraph(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DOTListener ) {
	        listener.exitGraph(this);
		}
	}


}



class Stmt_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DOTParser.RULE_stmt_list;
    }

	stmt = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StmtContext);
	    } else {
	        return this.getTypedRuleContext(StmtContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof DOTListener ) {
	        listener.enterStmt_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DOTListener ) {
	        listener.exitStmt_list(this);
		}
	}


}



class StmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DOTParser.RULE_stmt;
    }

	node_stmt() {
	    return this.getTypedRuleContext(Node_stmtContext,0);
	};

	edge_stmt() {
	    return this.getTypedRuleContext(Edge_stmtContext,0);
	};

	attr_stmt() {
	    return this.getTypedRuleContext(Attr_stmtContext,0);
	};

	id_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Id_Context);
	    } else {
	        return this.getTypedRuleContext(Id_Context,i);
	    }
	};

	subgraph() {
	    return this.getTypedRuleContext(SubgraphContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DOTListener ) {
	        listener.enterStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DOTListener ) {
	        listener.exitStmt(this);
		}
	}


}



class Attr_stmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DOTParser.RULE_attr_stmt;
    }

	attr_list() {
	    return this.getTypedRuleContext(Attr_listContext,0);
	};

	GRAPH() {
	    return this.getToken(DOTParser.GRAPH, 0);
	};

	NODE() {
	    return this.getToken(DOTParser.NODE, 0);
	};

	EDGE() {
	    return this.getToken(DOTParser.EDGE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DOTListener ) {
	        listener.enterAttr_stmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DOTListener ) {
	        listener.exitAttr_stmt(this);
		}
	}


}



class Attr_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DOTParser.RULE_attr_list;
    }

	a_list = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(A_listContext);
	    } else {
	        return this.getTypedRuleContext(A_listContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof DOTListener ) {
	        listener.enterAttr_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DOTListener ) {
	        listener.exitAttr_list(this);
		}
	}


}



class A_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DOTParser.RULE_a_list;
    }

	id_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Id_Context);
	    } else {
	        return this.getTypedRuleContext(Id_Context,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof DOTListener ) {
	        listener.enterA_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DOTListener ) {
	        listener.exitA_list(this);
		}
	}


}



class Edge_stmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DOTParser.RULE_edge_stmt;
    }

	edgeRHS() {
	    return this.getTypedRuleContext(EdgeRHSContext,0);
	};

	node_id() {
	    return this.getTypedRuleContext(Node_idContext,0);
	};

	subgraph() {
	    return this.getTypedRuleContext(SubgraphContext,0);
	};

	attr_list() {
	    return this.getTypedRuleContext(Attr_listContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DOTListener ) {
	        listener.enterEdge_stmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DOTListener ) {
	        listener.exitEdge_stmt(this);
		}
	}


}



class EdgeRHSContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DOTParser.RULE_edgeRHS;
    }

	edgeop = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(EdgeopContext);
	    } else {
	        return this.getTypedRuleContext(EdgeopContext,i);
	    }
	};

	node_id = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Node_idContext);
	    } else {
	        return this.getTypedRuleContext(Node_idContext,i);
	    }
	};

	subgraph = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SubgraphContext);
	    } else {
	        return this.getTypedRuleContext(SubgraphContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof DOTListener ) {
	        listener.enterEdgeRHS(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DOTListener ) {
	        listener.exitEdgeRHS(this);
		}
	}


}



class EdgeopContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DOTParser.RULE_edgeop;
    }


	enterRule(listener) {
	    if(listener instanceof DOTListener ) {
	        listener.enterEdgeop(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DOTListener ) {
	        listener.exitEdgeop(this);
		}
	}


}



class Node_stmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DOTParser.RULE_node_stmt;
    }

	node_id() {
	    return this.getTypedRuleContext(Node_idContext,0);
	};

	attr_list() {
	    return this.getTypedRuleContext(Attr_listContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DOTListener ) {
	        listener.enterNode_stmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DOTListener ) {
	        listener.exitNode_stmt(this);
		}
	}


}



class Node_idContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DOTParser.RULE_node_id;
    }

	id_() {
	    return this.getTypedRuleContext(Id_Context,0);
	};

	port() {
	    return this.getTypedRuleContext(PortContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DOTListener ) {
	        listener.enterNode_id(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DOTListener ) {
	        listener.exitNode_id(this);
		}
	}


}



class PortContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DOTParser.RULE_port;
    }

	id_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Id_Context);
	    } else {
	        return this.getTypedRuleContext(Id_Context,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof DOTListener ) {
	        listener.enterPort(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DOTListener ) {
	        listener.exitPort(this);
		}
	}


}



class SubgraphContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DOTParser.RULE_subgraph;
    }

	stmt_list() {
	    return this.getTypedRuleContext(Stmt_listContext,0);
	};

	SUBGRAPH() {
	    return this.getToken(DOTParser.SUBGRAPH, 0);
	};

	id_() {
	    return this.getTypedRuleContext(Id_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof DOTListener ) {
	        listener.enterSubgraph(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DOTListener ) {
	        listener.exitSubgraph(this);
		}
	}


}



class Id_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DOTParser.RULE_id_;
    }

	ID() {
	    return this.getToken(DOTParser.ID, 0);
	};

	STRING() {
	    return this.getToken(DOTParser.STRING, 0);
	};

	HTML_STRING() {
	    return this.getToken(DOTParser.HTML_STRING, 0);
	};

	NUMBER() {
	    return this.getToken(DOTParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DOTListener ) {
	        listener.enterId_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DOTListener ) {
	        listener.exitId_(this);
		}
	}


}




DOTParser.GraphContext = GraphContext; 
DOTParser.Stmt_listContext = Stmt_listContext; 
DOTParser.StmtContext = StmtContext; 
DOTParser.Attr_stmtContext = Attr_stmtContext; 
DOTParser.Attr_listContext = Attr_listContext; 
DOTParser.A_listContext = A_listContext; 
DOTParser.Edge_stmtContext = Edge_stmtContext; 
DOTParser.EdgeRHSContext = EdgeRHSContext; 
DOTParser.EdgeopContext = EdgeopContext; 
DOTParser.Node_stmtContext = Node_stmtContext; 
DOTParser.Node_idContext = Node_idContext; 
DOTParser.PortContext = PortContext; 
DOTParser.SubgraphContext = SubgraphContext; 
DOTParser.Id_Context = Id_Context; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
