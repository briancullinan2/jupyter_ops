// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/semver/SemanticVersionParser.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import SemanticVersionParserListener from './SemanticVersionParserListener.js';
const serializedATN = [4,1,17,78,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
1,0,1,0,1,1,1,1,1,1,1,1,1,1,3,1,18,8,1,1,1,3,1,21,8,1,1,1,3,1,24,8,1,1,1,
1,1,3,1,28,8,1,1,1,5,1,31,8,1,10,1,12,1,34,9,1,1,2,1,2,1,2,1,2,1,2,3,2,41,
8,2,1,2,3,2,44,8,2,1,2,3,2,47,8,2,1,2,1,2,3,2,51,8,2,1,2,5,2,54,8,2,10,2,
12,2,57,9,2,1,3,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,3,4,70,8,4,1,4,1,
4,3,4,74,8,4,1,4,1,4,1,4,0,2,2,4,5,0,2,4,6,8,0,3,1,0,4,15,2,0,1,1,3,3,1,
0,16,17,89,0,10,1,0,0,0,2,23,1,0,0,0,4,46,1,0,0,0,6,58,1,0,0,0,8,64,1,0,
0,0,10,11,7,0,0,0,11,1,1,0,0,0,12,13,6,1,-1,0,13,24,5,16,0,0,14,24,5,1,0,
0,15,17,3,0,0,0,16,18,7,1,0,0,17,16,1,0,0,0,17,18,1,0,0,0,18,20,1,0,0,0,
19,21,7,2,0,0,20,19,1,0,0,0,20,21,1,0,0,0,21,24,1,0,0,0,22,24,5,17,0,0,23,
12,1,0,0,0,23,14,1,0,0,0,23,15,1,0,0,0,23,22,1,0,0,0,24,32,1,0,0,0,25,27,
10,1,0,0,26,28,7,1,0,0,27,26,1,0,0,0,27,28,1,0,0,0,28,29,1,0,0,0,29,31,3,
2,1,2,30,25,1,0,0,0,31,34,1,0,0,0,32,30,1,0,0,0,32,33,1,0,0,0,33,3,1,0,0,
0,34,32,1,0,0,0,35,36,6,2,-1,0,36,47,5,16,0,0,37,47,5,1,0,0,38,40,3,0,0,
0,39,41,7,1,0,0,40,39,1,0,0,0,40,41,1,0,0,0,41,43,1,0,0,0,42,44,7,2,0,0,
43,42,1,0,0,0,43,44,1,0,0,0,44,47,1,0,0,0,45,47,5,17,0,0,46,35,1,0,0,0,46,
37,1,0,0,0,46,38,1,0,0,0,46,45,1,0,0,0,47,55,1,0,0,0,48,50,10,1,0,0,49,51,
7,1,0,0,50,49,1,0,0,0,50,51,1,0,0,0,51,52,1,0,0,0,52,54,3,4,2,2,53,48,1,
0,0,0,54,57,1,0,0,0,55,53,1,0,0,0,55,56,1,0,0,0,56,5,1,0,0,0,57,55,1,0,0,
0,58,59,5,16,0,0,59,60,5,3,0,0,60,61,5,16,0,0,61,62,5,3,0,0,62,63,5,16,0,
0,63,7,1,0,0,0,64,73,3,6,3,0,65,66,5,1,0,0,66,69,3,4,2,0,67,68,5,2,0,0,68,
70,3,2,1,0,69,67,1,0,0,0,69,70,1,0,0,0,70,74,1,0,0,0,71,72,5,2,0,0,72,74,
3,2,1,0,73,65,1,0,0,0,73,71,1,0,0,0,73,74,1,0,0,0,74,75,1,0,0,0,75,76,5,
0,0,1,76,9,1,0,0,0,12,17,20,23,27,32,40,43,46,50,55,69,73];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class SemanticVersionParser extends antlr4.Parser {

    static grammarFileName = "SemanticVersionParser.g4";
    static literalNames = [ null, "'-'", "'+'", "'.'", "'alpha'", "'beta'", 
                            null, "'snapshot'", null, null, null, "'daily'", 
                            "'nightly'", null, "'test'", "'experimental'" ];
    static symbolicNames = [ null, "DASH", "PLUS", "DOT", "ALPHA", "BETA", 
                             "RC", "SNAPSHOT", "PREVIEW", "DEV", "MILESTONE", 
                             "DAILY", "NIGHTLY", "BUILD", "TEST", "EXPERIMENTAL", 
                             "NUMBER", "IDENTIFIER" ];
    static ruleNames = [ "tag", "build", "preRelease", "versionCore", "semver" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = SemanticVersionParser.ruleNames;
        this.literalNames = SemanticVersionParser.literalNames;
        this.symbolicNames = SemanticVersionParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 1:
    	    		return this.build_sempred(localctx, predIndex);
    	case 2:
    	    		return this.preRelease_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    build_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    preRelease_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 1:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	tag() {
	    let localctx = new TagContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, SemanticVersionParser.RULE_tag);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 10;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 65520) !== 0))) {
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


	build(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new BuildContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 2;
	    this.enterRecursionRule(localctx, 2, SemanticVersionParser.RULE_build, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 23;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 16:
	            localctx = new BuildNumberContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 13;
	            localctx.value = this.match(SemanticVersionParser.NUMBER);
	            break;
	        case 1:
	            localctx = new BuildDashContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 14;
	            this.match(SemanticVersionParser.DASH);
	            break;
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
	            localctx = new BuildTaggedContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 15;
	            this.tag();
	            this.state = 17;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	            if(la_===1) {
	                this.state = 16;
	                _la = this._input.LA(1);
	                if(!(_la===1 || _la===3)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }

	            }
	            this.state = 20;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	            if(la_===1) {
	                this.state = 19;
	                localctx.version = this._input.LT(1);
	                _la = this._input.LA(1);
	                if(!(_la===16 || _la===17)) {
	                    localctx.version = this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }

	            }
	            break;
	        case 17:
	            localctx = new BuildIdentifierContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 22;
	            localctx.value = this.match(SemanticVersionParser.IDENTIFIER);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 32;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new BuildIdentifierExtendedContext(this, new BuildContext(this, _parentctx, _parentState));
	                localctx.left = _prevctx;
	                this.pushNewRecursionContext(localctx, _startState, SemanticVersionParser.RULE_build);
	                this.state = 25;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 27;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	                if(la_===1) {
	                    this.state = 26;
	                    _la = this._input.LA(1);
	                    if(!(_la===1 || _la===3)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }

	                }
	                this.state = 29;
	                localctx.right = this.build(2); 
	            }
	            this.state = 34;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
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


	preRelease(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new PreReleaseContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 4;
	    this.enterRecursionRule(localctx, 4, SemanticVersionParser.RULE_preRelease, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 46;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 16:
	            localctx = new PreReleaseNumberContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 36;
	            localctx.value = this.match(SemanticVersionParser.NUMBER);
	            break;
	        case 1:
	            localctx = new PreReleaseDashContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 37;
	            this.match(SemanticVersionParser.DASH);
	            break;
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
	            localctx = new PreReleaseTaggedContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 38;
	            this.tag();
	            this.state = 40;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	            if(la_===1) {
	                this.state = 39;
	                _la = this._input.LA(1);
	                if(!(_la===1 || _la===3)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }

	            }
	            this.state = 43;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	            if(la_===1) {
	                this.state = 42;
	                localctx.version = this._input.LT(1);
	                _la = this._input.LA(1);
	                if(!(_la===16 || _la===17)) {
	                    localctx.version = this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }

	            }
	            break;
	        case 17:
	            localctx = new PreReleaseIdentifierContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 45;
	            localctx.value = this.match(SemanticVersionParser.IDENTIFIER);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 55;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,9,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new PreReleaseIdentifierExtendedContext(this, new PreReleaseContext(this, _parentctx, _parentState));
	                localctx.left = _prevctx;
	                this.pushNewRecursionContext(localctx, _startState, SemanticVersionParser.RULE_preRelease);
	                this.state = 48;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 50;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	                if(la_===1) {
	                    this.state = 49;
	                    _la = this._input.LA(1);
	                    if(!(_la===1 || _la===3)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }

	                }
	                this.state = 52;
	                localctx.right = this.preRelease(2); 
	            }
	            this.state = 57;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,9,this._ctx);
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



	versionCore() {
	    let localctx = new VersionCoreContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, SemanticVersionParser.RULE_versionCore);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 58;
	        localctx.major = this.match(SemanticVersionParser.NUMBER);
	        this.state = 59;
	        this.match(SemanticVersionParser.DOT);
	        this.state = 60;
	        localctx.minor = this.match(SemanticVersionParser.NUMBER);
	        this.state = 61;
	        this.match(SemanticVersionParser.DOT);
	        this.state = 62;
	        localctx.patch = this.match(SemanticVersionParser.NUMBER);
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



	semver() {
	    let localctx = new SemverContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, SemanticVersionParser.RULE_semver);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 64;
	        this.versionCore();
	        this.state = 73;
	        this._errHandler.sync(this);
	        switch (this._input.LA(1)) {
	        case 1:
	        	this.state = 65;
	        	this.match(SemanticVersionParser.DASH);
	        	this.state = 66;
	        	this.preRelease(0);
	        	this.state = 69;
	        	this._errHandler.sync(this);
	        	_la = this._input.LA(1);
	        	if(_la===2) {
	        	    this.state = 67;
	        	    this.match(SemanticVersionParser.PLUS);
	        	    this.state = 68;
	        	    this.build(0);
	        	}

	        	break;
	        case 2:
	        	this.state = 71;
	        	this.match(SemanticVersionParser.PLUS);
	        	this.state = 72;
	        	this.build(0);
	        	break;
	        case -1:
	        	break;
	        default:
	        	break;
	        }
	        this.state = 75;
	        this.match(SemanticVersionParser.EOF);
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

SemanticVersionParser.EOF = antlr4.Token.EOF;
SemanticVersionParser.DASH = 1;
SemanticVersionParser.PLUS = 2;
SemanticVersionParser.DOT = 3;
SemanticVersionParser.ALPHA = 4;
SemanticVersionParser.BETA = 5;
SemanticVersionParser.RC = 6;
SemanticVersionParser.SNAPSHOT = 7;
SemanticVersionParser.PREVIEW = 8;
SemanticVersionParser.DEV = 9;
SemanticVersionParser.MILESTONE = 10;
SemanticVersionParser.DAILY = 11;
SemanticVersionParser.NIGHTLY = 12;
SemanticVersionParser.BUILD = 13;
SemanticVersionParser.TEST = 14;
SemanticVersionParser.EXPERIMENTAL = 15;
SemanticVersionParser.NUMBER = 16;
SemanticVersionParser.IDENTIFIER = 17;

SemanticVersionParser.RULE_tag = 0;
SemanticVersionParser.RULE_build = 1;
SemanticVersionParser.RULE_preRelease = 2;
SemanticVersionParser.RULE_versionCore = 3;
SemanticVersionParser.RULE_semver = 4;

class TagContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SemanticVersionParser.RULE_tag;
    }

	ALPHA() {
	    return this.getToken(SemanticVersionParser.ALPHA, 0);
	};

	BETA() {
	    return this.getToken(SemanticVersionParser.BETA, 0);
	};

	RC() {
	    return this.getToken(SemanticVersionParser.RC, 0);
	};

	SNAPSHOT() {
	    return this.getToken(SemanticVersionParser.SNAPSHOT, 0);
	};

	PREVIEW() {
	    return this.getToken(SemanticVersionParser.PREVIEW, 0);
	};

	DEV() {
	    return this.getToken(SemanticVersionParser.DEV, 0);
	};

	MILESTONE() {
	    return this.getToken(SemanticVersionParser.MILESTONE, 0);
	};

	DAILY() {
	    return this.getToken(SemanticVersionParser.DAILY, 0);
	};

	NIGHTLY() {
	    return this.getToken(SemanticVersionParser.NIGHTLY, 0);
	};

	BUILD() {
	    return this.getToken(SemanticVersionParser.BUILD, 0);
	};

	TEST() {
	    return this.getToken(SemanticVersionParser.TEST, 0);
	};

	EXPERIMENTAL() {
	    return this.getToken(SemanticVersionParser.EXPERIMENTAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SemanticVersionParserListener ) {
	        listener.enterTag(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SemanticVersionParserListener ) {
	        listener.exitTag(this);
		}
	}


}



class BuildContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SemanticVersionParser.RULE_build;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class BuildNumberContext extends BuildContext {

    constructor(parser, ctx) {
        super(parser);
        this.value = null;;
        super.copyFrom(ctx);
    }

	NUMBER() {
	    return this.getToken(SemanticVersionParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SemanticVersionParserListener ) {
	        listener.enterBuildNumber(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SemanticVersionParserListener ) {
	        listener.exitBuildNumber(this);
		}
	}


}

SemanticVersionParser.BuildNumberContext = BuildNumberContext;

class BuildIdentifierExtendedContext extends BuildContext {

    constructor(parser, ctx) {
        super(parser);
        this.left = null;;
        this.right = null;;
        super.copyFrom(ctx);
    }

	build = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(BuildContext);
	    } else {
	        return this.getTypedRuleContext(BuildContext,i);
	    }
	};

	DOT() {
	    return this.getToken(SemanticVersionParser.DOT, 0);
	};

	DASH() {
	    return this.getToken(SemanticVersionParser.DASH, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SemanticVersionParserListener ) {
	        listener.enterBuildIdentifierExtended(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SemanticVersionParserListener ) {
	        listener.exitBuildIdentifierExtended(this);
		}
	}


}

SemanticVersionParser.BuildIdentifierExtendedContext = BuildIdentifierExtendedContext;

class BuildDashContext extends BuildContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	DASH() {
	    return this.getToken(SemanticVersionParser.DASH, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SemanticVersionParserListener ) {
	        listener.enterBuildDash(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SemanticVersionParserListener ) {
	        listener.exitBuildDash(this);
		}
	}


}

SemanticVersionParser.BuildDashContext = BuildDashContext;

class BuildIdentifierContext extends BuildContext {

    constructor(parser, ctx) {
        super(parser);
        this.value = null;;
        super.copyFrom(ctx);
    }

	IDENTIFIER() {
	    return this.getToken(SemanticVersionParser.IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SemanticVersionParserListener ) {
	        listener.enterBuildIdentifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SemanticVersionParserListener ) {
	        listener.exitBuildIdentifier(this);
		}
	}


}

SemanticVersionParser.BuildIdentifierContext = BuildIdentifierContext;

class BuildTaggedContext extends BuildContext {

    constructor(parser, ctx) {
        super(parser);
        this.version = null;;
        super.copyFrom(ctx);
    }

	tag() {
	    return this.getTypedRuleContext(TagContext,0);
	};

	DOT() {
	    return this.getToken(SemanticVersionParser.DOT, 0);
	};

	DASH() {
	    return this.getToken(SemanticVersionParser.DASH, 0);
	};

	NUMBER() {
	    return this.getToken(SemanticVersionParser.NUMBER, 0);
	};

	IDENTIFIER() {
	    return this.getToken(SemanticVersionParser.IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SemanticVersionParserListener ) {
	        listener.enterBuildTagged(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SemanticVersionParserListener ) {
	        listener.exitBuildTagged(this);
		}
	}


}

SemanticVersionParser.BuildTaggedContext = BuildTaggedContext;

class PreReleaseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SemanticVersionParser.RULE_preRelease;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class PreReleaseDashContext extends PreReleaseContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	DASH() {
	    return this.getToken(SemanticVersionParser.DASH, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SemanticVersionParserListener ) {
	        listener.enterPreReleaseDash(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SemanticVersionParserListener ) {
	        listener.exitPreReleaseDash(this);
		}
	}


}

SemanticVersionParser.PreReleaseDashContext = PreReleaseDashContext;

class PreReleaseIdentifierContext extends PreReleaseContext {

    constructor(parser, ctx) {
        super(parser);
        this.value = null;;
        super.copyFrom(ctx);
    }

	IDENTIFIER() {
	    return this.getToken(SemanticVersionParser.IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SemanticVersionParserListener ) {
	        listener.enterPreReleaseIdentifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SemanticVersionParserListener ) {
	        listener.exitPreReleaseIdentifier(this);
		}
	}


}

SemanticVersionParser.PreReleaseIdentifierContext = PreReleaseIdentifierContext;

class PreReleaseTaggedContext extends PreReleaseContext {

    constructor(parser, ctx) {
        super(parser);
        this.version = null;;
        super.copyFrom(ctx);
    }

	tag() {
	    return this.getTypedRuleContext(TagContext,0);
	};

	DOT() {
	    return this.getToken(SemanticVersionParser.DOT, 0);
	};

	DASH() {
	    return this.getToken(SemanticVersionParser.DASH, 0);
	};

	NUMBER() {
	    return this.getToken(SemanticVersionParser.NUMBER, 0);
	};

	IDENTIFIER() {
	    return this.getToken(SemanticVersionParser.IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SemanticVersionParserListener ) {
	        listener.enterPreReleaseTagged(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SemanticVersionParserListener ) {
	        listener.exitPreReleaseTagged(this);
		}
	}


}

SemanticVersionParser.PreReleaseTaggedContext = PreReleaseTaggedContext;

class PreReleaseIdentifierExtendedContext extends PreReleaseContext {

    constructor(parser, ctx) {
        super(parser);
        this.left = null;;
        this.right = null;;
        super.copyFrom(ctx);
    }

	preRelease = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PreReleaseContext);
	    } else {
	        return this.getTypedRuleContext(PreReleaseContext,i);
	    }
	};

	DOT() {
	    return this.getToken(SemanticVersionParser.DOT, 0);
	};

	DASH() {
	    return this.getToken(SemanticVersionParser.DASH, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SemanticVersionParserListener ) {
	        listener.enterPreReleaseIdentifierExtended(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SemanticVersionParserListener ) {
	        listener.exitPreReleaseIdentifierExtended(this);
		}
	}


}

SemanticVersionParser.PreReleaseIdentifierExtendedContext = PreReleaseIdentifierExtendedContext;

class PreReleaseNumberContext extends PreReleaseContext {

    constructor(parser, ctx) {
        super(parser);
        this.value = null;;
        super.copyFrom(ctx);
    }

	NUMBER() {
	    return this.getToken(SemanticVersionParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SemanticVersionParserListener ) {
	        listener.enterPreReleaseNumber(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SemanticVersionParserListener ) {
	        listener.exitPreReleaseNumber(this);
		}
	}


}

SemanticVersionParser.PreReleaseNumberContext = PreReleaseNumberContext;

class VersionCoreContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SemanticVersionParser.RULE_versionCore;
        this.major = null;
        this.minor = null;
        this.patch = null;
    }

	DOT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SemanticVersionParser.DOT);
	    } else {
	        return this.getToken(SemanticVersionParser.DOT, i);
	    }
	};


	NUMBER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SemanticVersionParser.NUMBER);
	    } else {
	        return this.getToken(SemanticVersionParser.NUMBER, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof SemanticVersionParserListener ) {
	        listener.enterVersionCore(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SemanticVersionParserListener ) {
	        listener.exitVersionCore(this);
		}
	}


}



class SemverContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SemanticVersionParser.RULE_semver;
    }

	versionCore() {
	    return this.getTypedRuleContext(VersionCoreContext,0);
	};

	EOF() {
	    return this.getToken(SemanticVersionParser.EOF, 0);
	};

	DASH() {
	    return this.getToken(SemanticVersionParser.DASH, 0);
	};

	preRelease() {
	    return this.getTypedRuleContext(PreReleaseContext,0);
	};

	PLUS() {
	    return this.getToken(SemanticVersionParser.PLUS, 0);
	};

	build() {
	    return this.getTypedRuleContext(BuildContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SemanticVersionParserListener ) {
	        listener.enterSemver(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SemanticVersionParserListener ) {
	        listener.exitSemver(this);
		}
	}


}




SemanticVersionParser.TagContext = TagContext; 
SemanticVersionParser.BuildContext = BuildContext; 
SemanticVersionParser.PreReleaseContext = PreReleaseContext; 
SemanticVersionParser.VersionCoreContext = VersionCoreContext; 
SemanticVersionParser.SemverContext = SemverContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
