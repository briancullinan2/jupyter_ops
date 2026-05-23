// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/newick/newick.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import newickListener from './newickListener.js';
const serializedATN = [4,1,8,77,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,
1,0,3,0,30,8,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,3,1,40,8,1,1,2,1,2,1,2,1,
2,1,2,1,2,1,2,1,3,1,3,3,3,51,8,3,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,
1,6,1,6,3,6,65,8,6,1,7,1,7,1,7,1,8,3,8,71,8,8,1,9,1,9,3,9,75,8,9,1,9,0,0,
10,0,2,4,6,8,10,12,14,16,18,0,0,73,0,29,1,0,0,0,2,39,1,0,0,0,4,41,1,0,0,
0,6,50,1,0,0,0,8,52,1,0,0,0,10,54,1,0,0,0,12,64,1,0,0,0,14,66,1,0,0,0,16,
70,1,0,0,0,18,74,1,0,0,0,20,21,3,2,1,0,21,22,5,1,0,0,22,30,1,0,0,0,23,24,
3,4,2,0,24,25,5,1,0,0,25,30,1,0,0,0,26,27,3,14,7,0,27,28,5,1,0,0,28,30,1,
0,0,0,29,20,1,0,0,0,29,23,1,0,0,0,29,26,1,0,0,0,30,31,1,0,0,0,31,32,5,0,
0,1,32,1,1,0,0,0,33,40,3,16,8,0,34,35,5,2,0,0,35,36,3,14,7,0,36,37,5,3,0,
0,37,38,3,16,8,0,38,40,1,0,0,0,39,33,1,0,0,0,39,34,1,0,0,0,40,3,1,0,0,0,
41,42,5,2,0,0,42,43,3,14,7,0,43,44,5,4,0,0,44,45,3,12,6,0,45,46,5,3,0,0,
46,47,3,16,8,0,47,5,1,0,0,0,48,51,3,8,4,0,49,51,3,10,5,0,50,48,1,0,0,0,50,
49,1,0,0,0,51,7,1,0,0,0,52,53,3,16,8,0,53,9,1,0,0,0,54,55,5,2,0,0,55,56,
3,12,6,0,56,57,5,3,0,0,57,58,3,16,8,0,58,11,1,0,0,0,59,65,3,14,7,0,60,61,
3,14,7,0,61,62,5,4,0,0,62,63,3,12,6,0,63,65,1,0,0,0,64,59,1,0,0,0,64,60,
1,0,0,0,65,13,1,0,0,0,66,67,3,6,3,0,67,68,3,18,9,0,68,15,1,0,0,0,69,71,5,
7,0,0,70,69,1,0,0,0,70,71,1,0,0,0,71,17,1,0,0,0,72,73,5,5,0,0,73,75,5,6,
0,0,74,72,1,0,0,0,74,75,1,0,0,0,75,19,1,0,0,0,6,29,39,50,64,70,74];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class newickParser extends antlr4.Parser {

    static grammarFileName = "newick.g4";
    static literalNames = [ null, "';'", "'('", "')'", "','", "':'" ];
    static symbolicNames = [ null, null, null, null, null, null, "NUMBER", 
                             "STRING", "WS" ];
    static ruleNames = [ "tree_", "rootLeaf", "rootInternal", "subtree", 
                         "leaf", "internal_", "branchSet", "branch", "name", 
                         "length" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = newickParser.ruleNames;
        this.literalNames = newickParser.literalNames;
        this.symbolicNames = newickParser.symbolicNames;
    }



	tree_() {
	    let localctx = new Tree_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, newickParser.RULE_tree_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 29;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 20;
	            this.rootLeaf();
	            this.state = 21;
	            this.match(newickParser.T__0);
	            break;

	        case 2:
	            this.state = 23;
	            this.rootInternal();
	            this.state = 24;
	            this.match(newickParser.T__0);
	            break;

	        case 3:
	            this.state = 26;
	            this.branch();
	            this.state = 27;
	            this.match(newickParser.T__0);
	            break;

	        }
	        this.state = 31;
	        this.match(newickParser.EOF);
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



	rootLeaf() {
	    let localctx = new RootLeafContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, newickParser.RULE_rootLeaf);
	    try {
	        this.state = 39;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	        case 7:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 33;
	            this.name();
	            break;
	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 34;
	            this.match(newickParser.T__1);
	            this.state = 35;
	            this.branch();
	            this.state = 36;
	            this.match(newickParser.T__2);
	            this.state = 37;
	            this.name();
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



	rootInternal() {
	    let localctx = new RootInternalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, newickParser.RULE_rootInternal);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 41;
	        this.match(newickParser.T__1);
	        this.state = 42;
	        this.branch();
	        this.state = 43;
	        this.match(newickParser.T__3);
	        this.state = 44;
	        this.branchSet();
	        this.state = 45;
	        this.match(newickParser.T__2);
	        this.state = 46;
	        this.name();
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



	subtree() {
	    let localctx = new SubtreeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, newickParser.RULE_subtree);
	    try {
	        this.state = 50;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	        case 3:
	        case 4:
	        case 5:
	        case 7:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 48;
	            this.leaf();
	            break;
	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 49;
	            this.internal_();
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



	leaf() {
	    let localctx = new LeafContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, newickParser.RULE_leaf);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 52;
	        this.name();
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



	internal_() {
	    let localctx = new Internal_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, newickParser.RULE_internal_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 54;
	        this.match(newickParser.T__1);
	        this.state = 55;
	        this.branchSet();
	        this.state = 56;
	        this.match(newickParser.T__2);
	        this.state = 57;
	        this.name();
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



	branchSet() {
	    let localctx = new BranchSetContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, newickParser.RULE_branchSet);
	    try {
	        this.state = 64;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 59;
	            this.branch();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 60;
	            this.branch();
	            this.state = 61;
	            this.match(newickParser.T__3);
	            this.state = 62;
	            this.branchSet();
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



	branch() {
	    let localctx = new BranchContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, newickParser.RULE_branch);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 66;
	        this.subtree();
	        this.state = 67;
	        this.length();
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



	name() {
	    let localctx = new NameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, newickParser.RULE_name);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 70;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===7) {
	            this.state = 69;
	            this.match(newickParser.STRING);
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



	length() {
	    let localctx = new LengthContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, newickParser.RULE_length);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 74;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===5) {
	            this.state = 72;
	            this.match(newickParser.T__4);
	            this.state = 73;
	            this.match(newickParser.NUMBER);
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

newickParser.EOF = antlr4.Token.EOF;
newickParser.T__0 = 1;
newickParser.T__1 = 2;
newickParser.T__2 = 3;
newickParser.T__3 = 4;
newickParser.T__4 = 5;
newickParser.NUMBER = 6;
newickParser.STRING = 7;
newickParser.WS = 8;

newickParser.RULE_tree_ = 0;
newickParser.RULE_rootLeaf = 1;
newickParser.RULE_rootInternal = 2;
newickParser.RULE_subtree = 3;
newickParser.RULE_leaf = 4;
newickParser.RULE_internal_ = 5;
newickParser.RULE_branchSet = 6;
newickParser.RULE_branch = 7;
newickParser.RULE_name = 8;
newickParser.RULE_length = 9;

class Tree_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = newickParser.RULE_tree_;
    }

	EOF() {
	    return this.getToken(newickParser.EOF, 0);
	};

	rootLeaf() {
	    return this.getTypedRuleContext(RootLeafContext,0);
	};

	rootInternal() {
	    return this.getTypedRuleContext(RootInternalContext,0);
	};

	branch() {
	    return this.getTypedRuleContext(BranchContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof newickListener ) {
	        listener.enterTree_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof newickListener ) {
	        listener.exitTree_(this);
		}
	}


}



class RootLeafContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = newickParser.RULE_rootLeaf;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	branch() {
	    return this.getTypedRuleContext(BranchContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof newickListener ) {
	        listener.enterRootLeaf(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof newickListener ) {
	        listener.exitRootLeaf(this);
		}
	}


}



class RootInternalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = newickParser.RULE_rootInternal;
    }

	branch() {
	    return this.getTypedRuleContext(BranchContext,0);
	};

	branchSet() {
	    return this.getTypedRuleContext(BranchSetContext,0);
	};

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof newickListener ) {
	        listener.enterRootInternal(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof newickListener ) {
	        listener.exitRootInternal(this);
		}
	}


}



class SubtreeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = newickParser.RULE_subtree;
    }

	leaf() {
	    return this.getTypedRuleContext(LeafContext,0);
	};

	internal_() {
	    return this.getTypedRuleContext(Internal_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof newickListener ) {
	        listener.enterSubtree(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof newickListener ) {
	        listener.exitSubtree(this);
		}
	}


}



class LeafContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = newickParser.RULE_leaf;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof newickListener ) {
	        listener.enterLeaf(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof newickListener ) {
	        listener.exitLeaf(this);
		}
	}


}



class Internal_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = newickParser.RULE_internal_;
    }

	branchSet() {
	    return this.getTypedRuleContext(BranchSetContext,0);
	};

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof newickListener ) {
	        listener.enterInternal_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof newickListener ) {
	        listener.exitInternal_(this);
		}
	}


}



class BranchSetContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = newickParser.RULE_branchSet;
    }

	branch() {
	    return this.getTypedRuleContext(BranchContext,0);
	};

	branchSet() {
	    return this.getTypedRuleContext(BranchSetContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof newickListener ) {
	        listener.enterBranchSet(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof newickListener ) {
	        listener.exitBranchSet(this);
		}
	}


}



class BranchContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = newickParser.RULE_branch;
    }

	subtree() {
	    return this.getTypedRuleContext(SubtreeContext,0);
	};

	length() {
	    return this.getTypedRuleContext(LengthContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof newickListener ) {
	        listener.enterBranch(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof newickListener ) {
	        listener.exitBranch(this);
		}
	}


}



class NameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = newickParser.RULE_name;
    }

	STRING() {
	    return this.getToken(newickParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof newickListener ) {
	        listener.enterName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof newickListener ) {
	        listener.exitName(this);
		}
	}


}



class LengthContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = newickParser.RULE_length;
    }

	NUMBER() {
	    return this.getToken(newickParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof newickListener ) {
	        listener.enterLength(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof newickListener ) {
	        listener.exitLength(this);
		}
	}


}




newickParser.Tree_Context = Tree_Context; 
newickParser.RootLeafContext = RootLeafContext; 
newickParser.RootInternalContext = RootInternalContext; 
newickParser.SubtreeContext = SubtreeContext; 
newickParser.LeafContext = LeafContext; 
newickParser.Internal_Context = Internal_Context; 
newickParser.BranchSetContext = BranchSetContext; 
newickParser.BranchContext = BranchContext; 
newickParser.NameContext = NameContext; 
newickParser.LengthContext = LengthContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
