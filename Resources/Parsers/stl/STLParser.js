// Generated from Resources/Parsers/stl/STL.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import STLListener from './STLListener.js';
const serializedATN = [4,1,12,48,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,1,0,1,0,5,0,15,8,0,10,0,12,0,18,9,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,4,1,4,3,4,43,8,
4,1,5,1,5,1,5,1,5,0,0,6,0,2,4,6,8,10,0,0,43,0,12,1,0,0,0,2,22,1,0,0,0,4,
33,1,0,0,0,6,36,1,0,0,0,8,40,1,0,0,0,10,44,1,0,0,0,12,16,3,8,4,0,13,15,3,
2,1,0,14,13,1,0,0,0,15,18,1,0,0,0,16,14,1,0,0,0,16,17,1,0,0,0,17,19,1,0,
0,0,18,16,1,0,0,0,19,20,3,10,5,0,20,21,5,0,0,1,21,1,1,0,0,0,22,23,5,1,0,
0,23,24,5,2,0,0,24,25,3,6,3,0,25,26,5,3,0,0,26,27,5,4,0,0,27,28,3,4,2,0,
28,29,3,4,2,0,29,30,3,4,2,0,30,31,5,5,0,0,31,32,5,6,0,0,32,3,1,0,0,0,33,
34,5,7,0,0,34,35,3,6,3,0,35,5,1,0,0,0,36,37,5,10,0,0,37,38,5,10,0,0,38,39,
5,10,0,0,39,7,1,0,0,0,40,42,5,8,0,0,41,43,5,11,0,0,42,41,1,0,0,0,42,43,1,
0,0,0,43,9,1,0,0,0,44,45,5,9,0,0,45,46,5,11,0,0,46,11,1,0,0,0,2,16,42];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class STLParser extends antlr4.Parser {

    static grammarFileName = "STL.g4";
    static literalNames = [ null, "'facet'", "'normal'", "'outer'", "'loop'", 
                            "'endloop'", "'endfacet'", "'vertex'", "'solid'", 
                            "'endsolid'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, "FLOAT", "IDENTIFIER", "WS" ];
    static ruleNames = [ "file_", "triangle", "vertex", "triple", "header", 
                         "footer" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = STLParser.ruleNames;
        this.literalNames = STLParser.literalNames;
        this.symbolicNames = STLParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	file_() {
	    let localctx = new File_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, STLParser.RULE_file_);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 12;
	        this.header();
	        this.state = 16;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===STLParser.T__0) {
	            this.state = 13;
	            this.triangle();
	            this.state = 18;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 19;
	        this.footer();
	        this.state = 20;
	        this.match(STLParser.EOF);
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



	triangle() {
	    let localctx = new TriangleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, STLParser.RULE_triangle);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 22;
	        this.match(STLParser.T__0);
	        this.state = 23;
	        this.match(STLParser.T__1);
	        this.state = 24;
	        localctx.n = this.triple();
	        this.state = 25;
	        this.match(STLParser.T__2);
	        this.state = 26;
	        this.match(STLParser.T__3);
	        this.state = 27;
	        this.vertex();
	        this.state = 28;
	        this.vertex();
	        this.state = 29;
	        this.vertex();
	        this.state = 30;
	        this.match(STLParser.T__4);
	        this.state = 31;
	        this.match(STLParser.T__5);
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



	vertex() {
	    let localctx = new VertexContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, STLParser.RULE_vertex);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 33;
	        this.match(STLParser.T__6);
	        this.state = 34;
	        this.triple();
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



	triple() {
	    let localctx = new TripleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, STLParser.RULE_triple);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 36;
	        localctx.i = this.match(STLParser.FLOAT);
	        this.state = 37;
	        localctx.j = this.match(STLParser.FLOAT);
	        this.state = 38;
	        localctx.k = this.match(STLParser.FLOAT);
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



	header() {
	    let localctx = new HeaderContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, STLParser.RULE_header);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 40;
	        this.match(STLParser.T__7);
	        this.state = 42;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===STLParser.IDENTIFIER) {
	            this.state = 41;
	            localctx.name = this.match(STLParser.IDENTIFIER);
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



	footer() {
	    let localctx = new FooterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, STLParser.RULE_footer);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 44;
	        this.match(STLParser.T__8);
	        this.state = 45;
	        localctx.name = this.match(STLParser.IDENTIFIER);
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

STLParser.EOF = antlr4.Token.EOF;
STLParser.T__0 = 1;
STLParser.T__1 = 2;
STLParser.T__2 = 3;
STLParser.T__3 = 4;
STLParser.T__4 = 5;
STLParser.T__5 = 6;
STLParser.T__6 = 7;
STLParser.T__7 = 8;
STLParser.T__8 = 9;
STLParser.FLOAT = 10;
STLParser.IDENTIFIER = 11;
STLParser.WS = 12;

STLParser.RULE_file_ = 0;
STLParser.RULE_triangle = 1;
STLParser.RULE_vertex = 2;
STLParser.RULE_triple = 3;
STLParser.RULE_header = 4;
STLParser.RULE_footer = 5;

class File_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = STLParser.RULE_file_;
    }

	header() {
	    return this.getTypedRuleContext(HeaderContext,0);
	};

	footer() {
	    return this.getTypedRuleContext(FooterContext,0);
	};

	EOF() {
	    return this.getToken(STLParser.EOF, 0);
	};

	triangle = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TriangleContext);
	    } else {
	        return this.getTypedRuleContext(TriangleContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof STLListener ) {
	        listener.enterFile_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof STLListener ) {
	        listener.exitFile_(this);
		}
	}


}



class TriangleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = STLParser.RULE_triangle;
        this.n = null; // TripleContext
    }

	vertex = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(VertexContext);
	    } else {
	        return this.getTypedRuleContext(VertexContext,i);
	    }
	};

	triple() {
	    return this.getTypedRuleContext(TripleContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof STLListener ) {
	        listener.enterTriangle(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof STLListener ) {
	        listener.exitTriangle(this);
		}
	}


}



class VertexContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = STLParser.RULE_vertex;
    }

	triple() {
	    return this.getTypedRuleContext(TripleContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof STLListener ) {
	        listener.enterVertex(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof STLListener ) {
	        listener.exitVertex(this);
		}
	}


}



class TripleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = STLParser.RULE_triple;
        this.i = null; // Token
        this.j = null; // Token
        this.k = null; // Token
    }

	FLOAT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(STLParser.FLOAT);
	    } else {
	        return this.getToken(STLParser.FLOAT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof STLListener ) {
	        listener.enterTriple(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof STLListener ) {
	        listener.exitTriple(this);
		}
	}


}



class HeaderContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = STLParser.RULE_header;
        this.name = null; // Token
    }

	IDENTIFIER() {
	    return this.getToken(STLParser.IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof STLListener ) {
	        listener.enterHeader(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof STLListener ) {
	        listener.exitHeader(this);
		}
	}


}



class FooterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = STLParser.RULE_footer;
        this.name = null; // Token
    }

	IDENTIFIER() {
	    return this.getToken(STLParser.IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof STLListener ) {
	        listener.enterFooter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof STLListener ) {
	        listener.exitFooter(this);
		}
	}


}




STLParser.File_Context = File_Context; 
STLParser.TriangleContext = TriangleContext; 
STLParser.VertexContext = VertexContext; 
STLParser.TripleContext = TripleContext; 
STLParser.HeaderContext = HeaderContext; 
STLParser.FooterContext = FooterContext; 
