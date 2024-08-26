// Generated from Resources/Parsers/ply/ply.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import plyListener from './plyListener.js';
const serializedATN = [4,1,23,113,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,1,0,1,0,3,0,35,8,0,1,0,3,0,38,8,0,1,1,1,1,
1,1,1,1,5,1,44,8,1,10,1,12,1,47,9,1,1,1,1,1,1,2,1,2,1,2,1,3,1,3,1,3,1,3,
1,4,1,4,1,4,1,4,1,4,1,5,1,5,3,5,65,8,5,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,
7,1,7,1,7,1,7,1,8,1,8,1,9,1,9,1,9,1,10,4,10,85,8,10,11,10,12,10,86,1,11,
4,11,90,8,11,11,11,12,11,91,1,12,1,12,1,12,1,12,1,12,1,13,1,13,1,13,1,13,
4,13,103,8,13,11,13,12,13,104,1,13,1,13,1,14,1,14,1,15,1,15,1,15,0,0,16,
0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,0,1,1,0,7,17,104,0,32,1,0,0,0,
2,39,1,0,0,0,4,50,1,0,0,0,6,53,1,0,0,0,8,57,1,0,0,0,10,64,1,0,0,0,12,66,
1,0,0,0,14,71,1,0,0,0,16,78,1,0,0,0,18,80,1,0,0,0,20,84,1,0,0,0,22,89,1,
0,0,0,24,93,1,0,0,0,26,98,1,0,0,0,28,108,1,0,0,0,30,110,1,0,0,0,32,34,3,
2,1,0,33,35,3,20,10,0,34,33,1,0,0,0,34,35,1,0,0,0,35,37,1,0,0,0,36,38,3,
22,11,0,37,36,1,0,0,0,37,38,1,0,0,0,38,1,1,0,0,0,39,40,3,18,9,0,40,45,3,
6,3,0,41,44,3,8,4,0,42,44,3,10,5,0,43,41,1,0,0,0,43,42,1,0,0,0,44,47,1,0,
0,0,45,43,1,0,0,0,45,46,1,0,0,0,46,48,1,0,0,0,47,45,1,0,0,0,48,49,3,4,2,
0,49,3,1,0,0,0,50,51,5,1,0,0,51,52,5,22,0,0,52,5,1,0,0,0,53,54,5,2,0,0,54,
55,5,3,0,0,55,56,5,22,0,0,56,7,1,0,0,0,57,58,5,4,0,0,58,59,3,30,15,0,59,
60,3,28,14,0,60,61,5,22,0,0,61,9,1,0,0,0,62,65,3,12,6,0,63,65,3,14,7,0,64,
62,1,0,0,0,64,63,1,0,0,0,65,11,1,0,0,0,66,67,5,5,0,0,67,68,3,16,8,0,68,69,
3,30,15,0,69,70,5,22,0,0,70,13,1,0,0,0,71,72,5,5,0,0,72,73,5,6,0,0,73,74,
3,16,8,0,74,75,3,16,8,0,75,76,3,30,15,0,76,77,5,22,0,0,77,15,1,0,0,0,78,
79,7,0,0,0,79,17,1,0,0,0,80,81,5,18,0,0,81,82,5,22,0,0,82,19,1,0,0,0,83,
85,3,24,12,0,84,83,1,0,0,0,85,86,1,0,0,0,86,84,1,0,0,0,86,87,1,0,0,0,87,
21,1,0,0,0,88,90,3,26,13,0,89,88,1,0,0,0,90,91,1,0,0,0,91,89,1,0,0,0,91,
92,1,0,0,0,92,23,1,0,0,0,93,94,3,28,14,0,94,95,3,28,14,0,95,96,3,28,14,0,
96,97,5,22,0,0,97,25,1,0,0,0,98,99,3,28,14,0,99,100,3,28,14,0,100,102,3,
28,14,0,101,103,3,28,14,0,102,101,1,0,0,0,103,104,1,0,0,0,104,102,1,0,0,
0,104,105,1,0,0,0,105,106,1,0,0,0,106,107,5,22,0,0,107,27,1,0,0,0,108,109,
5,20,0,0,109,29,1,0,0,0,110,111,5,19,0,0,111,31,1,0,0,0,8,34,37,43,45,64,
86,91,104];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class plyParser extends antlr4.Parser {

    static grammarFileName = "ply.g4";
    static literalNames = [ null, "'end_header'", "'format'", "'ascii 1.0'", 
                            "'element'", "'property'", "'list'", "'char'", 
                            "'uchar'", "'short'", "'ushort'", "'int'", "'uint'", 
                            "'float'", "'double'", "'float32'", "'uint8'", 
                            "'int32'", "'ply'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, "STRING", "NUMBER", "COMMENT", 
                             "EOL", "WS" ];
    static ruleNames = [ "ply", "header", "end_header", "format_", "element", 
                         "property_", "scalarproperty", "listproperty", 
                         "type_", "plydeclaration", "vertices", "faces", 
                         "vertex", "face", "number", "string" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = plyParser.ruleNames;
        this.literalNames = plyParser.literalNames;
        this.symbolicNames = plyParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	ply() {
	    let localctx = new PlyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, plyParser.RULE_ply);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 32;
	        this.header();
	        this.state = 34;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	        if(la_===1) {
	            this.state = 33;
	            this.vertices();

	        }
	        this.state = 37;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===plyParser.NUMBER) {
	            this.state = 36;
	            this.faces();
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



	header() {
	    let localctx = new HeaderContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, plyParser.RULE_header);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 39;
	        this.plydeclaration();
	        this.state = 40;
	        this.format_();
	        this.state = 45;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===plyParser.T__3 || _la===plyParser.T__4) {
	            this.state = 43;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case plyParser.T__3:
	                this.state = 41;
	                this.element();
	                break;
	            case plyParser.T__4:
	                this.state = 42;
	                this.property_();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 47;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 48;
	        this.end_header();
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



	end_header() {
	    let localctx = new End_headerContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, plyParser.RULE_end_header);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 50;
	        this.match(plyParser.T__0);
	        this.state = 51;
	        this.match(plyParser.EOL);
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



	format_() {
	    let localctx = new Format_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, plyParser.RULE_format_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 53;
	        this.match(plyParser.T__1);
	        this.state = 54;
	        this.match(plyParser.T__2);
	        this.state = 55;
	        this.match(plyParser.EOL);
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



	element() {
	    let localctx = new ElementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, plyParser.RULE_element);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 57;
	        this.match(plyParser.T__3);
	        this.state = 58;
	        this.string();
	        this.state = 59;
	        this.number();
	        this.state = 60;
	        this.match(plyParser.EOL);
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



	property_() {
	    let localctx = new Property_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, plyParser.RULE_property_);
	    try {
	        this.state = 64;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 62;
	            this.scalarproperty();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 63;
	            this.listproperty();
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



	scalarproperty() {
	    let localctx = new ScalarpropertyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, plyParser.RULE_scalarproperty);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 66;
	        this.match(plyParser.T__4);
	        this.state = 67;
	        this.type_();
	        this.state = 68;
	        this.string();
	        this.state = 69;
	        this.match(plyParser.EOL);
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



	listproperty() {
	    let localctx = new ListpropertyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, plyParser.RULE_listproperty);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 71;
	        this.match(plyParser.T__4);
	        this.state = 72;
	        this.match(plyParser.T__5);
	        this.state = 73;
	        this.type_();
	        this.state = 74;
	        this.type_();
	        this.state = 75;
	        this.string();
	        this.state = 76;
	        this.match(plyParser.EOL);
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



	type_() {
	    let localctx = new Type_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, plyParser.RULE_type_);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 78;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << plyParser.T__6) | (1 << plyParser.T__7) | (1 << plyParser.T__8) | (1 << plyParser.T__9) | (1 << plyParser.T__10) | (1 << plyParser.T__11) | (1 << plyParser.T__12) | (1 << plyParser.T__13) | (1 << plyParser.T__14) | (1 << plyParser.T__15) | (1 << plyParser.T__16))) !== 0))) {
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



	plydeclaration() {
	    let localctx = new PlydeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, plyParser.RULE_plydeclaration);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 80;
	        this.match(plyParser.T__17);
	        this.state = 81;
	        this.match(plyParser.EOL);
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



	vertices() {
	    let localctx = new VerticesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, plyParser.RULE_vertices);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 84; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 83;
	        		this.vertex();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 86; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,5, this._ctx);
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



	faces() {
	    let localctx = new FacesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, plyParser.RULE_faces);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 89; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 88;
	            this.face();
	            this.state = 91; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===plyParser.NUMBER);
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
	    this.enterRule(localctx, 24, plyParser.RULE_vertex);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 93;
	        this.number();
	        this.state = 94;
	        this.number();
	        this.state = 95;
	        this.number();
	        this.state = 96;
	        this.match(plyParser.EOL);
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



	face() {
	    let localctx = new FaceContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, plyParser.RULE_face);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 98;
	        this.number();
	        this.state = 99;
	        this.number();
	        this.state = 100;
	        this.number();
	        this.state = 102; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 101;
	            this.number();
	            this.state = 104; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===plyParser.NUMBER);
	        this.state = 106;
	        this.match(plyParser.EOL);
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



	number() {
	    let localctx = new NumberContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, plyParser.RULE_number);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 108;
	        this.match(plyParser.NUMBER);
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
	    this.enterRule(localctx, 30, plyParser.RULE_string);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 110;
	        this.match(plyParser.STRING);
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

plyParser.EOF = antlr4.Token.EOF;
plyParser.T__0 = 1;
plyParser.T__1 = 2;
plyParser.T__2 = 3;
plyParser.T__3 = 4;
plyParser.T__4 = 5;
plyParser.T__5 = 6;
plyParser.T__6 = 7;
plyParser.T__7 = 8;
plyParser.T__8 = 9;
plyParser.T__9 = 10;
plyParser.T__10 = 11;
plyParser.T__11 = 12;
plyParser.T__12 = 13;
plyParser.T__13 = 14;
plyParser.T__14 = 15;
plyParser.T__15 = 16;
plyParser.T__16 = 17;
plyParser.T__17 = 18;
plyParser.STRING = 19;
plyParser.NUMBER = 20;
plyParser.COMMENT = 21;
plyParser.EOL = 22;
plyParser.WS = 23;

plyParser.RULE_ply = 0;
plyParser.RULE_header = 1;
plyParser.RULE_end_header = 2;
plyParser.RULE_format_ = 3;
plyParser.RULE_element = 4;
plyParser.RULE_property_ = 5;
plyParser.RULE_scalarproperty = 6;
plyParser.RULE_listproperty = 7;
plyParser.RULE_type_ = 8;
plyParser.RULE_plydeclaration = 9;
plyParser.RULE_vertices = 10;
plyParser.RULE_faces = 11;
plyParser.RULE_vertex = 12;
plyParser.RULE_face = 13;
plyParser.RULE_number = 14;
plyParser.RULE_string = 15;

class PlyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = plyParser.RULE_ply;
    }

	header() {
	    return this.getTypedRuleContext(HeaderContext,0);
	};

	vertices() {
	    return this.getTypedRuleContext(VerticesContext,0);
	};

	faces() {
	    return this.getTypedRuleContext(FacesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof plyListener ) {
	        listener.enterPly(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof plyListener ) {
	        listener.exitPly(this);
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
        this.ruleIndex = plyParser.RULE_header;
    }

	plydeclaration() {
	    return this.getTypedRuleContext(PlydeclarationContext,0);
	};

	format_() {
	    return this.getTypedRuleContext(Format_Context,0);
	};

	end_header() {
	    return this.getTypedRuleContext(End_headerContext,0);
	};

	element = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ElementContext);
	    } else {
	        return this.getTypedRuleContext(ElementContext,i);
	    }
	};

	property_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Property_Context);
	    } else {
	        return this.getTypedRuleContext(Property_Context,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof plyListener ) {
	        listener.enterHeader(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof plyListener ) {
	        listener.exitHeader(this);
		}
	}


}



class End_headerContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = plyParser.RULE_end_header;
    }

	EOL() {
	    return this.getToken(plyParser.EOL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof plyListener ) {
	        listener.enterEnd_header(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof plyListener ) {
	        listener.exitEnd_header(this);
		}
	}


}



class Format_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = plyParser.RULE_format_;
    }

	EOL() {
	    return this.getToken(plyParser.EOL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof plyListener ) {
	        listener.enterFormat_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof plyListener ) {
	        listener.exitFormat_(this);
		}
	}


}



class ElementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = plyParser.RULE_element;
    }

	string() {
	    return this.getTypedRuleContext(StringContext,0);
	};

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
	};

	EOL() {
	    return this.getToken(plyParser.EOL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof plyListener ) {
	        listener.enterElement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof plyListener ) {
	        listener.exitElement(this);
		}
	}


}



class Property_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = plyParser.RULE_property_;
    }

	scalarproperty() {
	    return this.getTypedRuleContext(ScalarpropertyContext,0);
	};

	listproperty() {
	    return this.getTypedRuleContext(ListpropertyContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof plyListener ) {
	        listener.enterProperty_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof plyListener ) {
	        listener.exitProperty_(this);
		}
	}


}



class ScalarpropertyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = plyParser.RULE_scalarproperty;
    }

	type_() {
	    return this.getTypedRuleContext(Type_Context,0);
	};

	string() {
	    return this.getTypedRuleContext(StringContext,0);
	};

	EOL() {
	    return this.getToken(plyParser.EOL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof plyListener ) {
	        listener.enterScalarproperty(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof plyListener ) {
	        listener.exitScalarproperty(this);
		}
	}


}



class ListpropertyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = plyParser.RULE_listproperty;
    }

	type_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Type_Context);
	    } else {
	        return this.getTypedRuleContext(Type_Context,i);
	    }
	};

	string() {
	    return this.getTypedRuleContext(StringContext,0);
	};

	EOL() {
	    return this.getToken(plyParser.EOL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof plyListener ) {
	        listener.enterListproperty(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof plyListener ) {
	        listener.exitListproperty(this);
		}
	}


}



class Type_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = plyParser.RULE_type_;
    }


	enterRule(listener) {
	    if(listener instanceof plyListener ) {
	        listener.enterType_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof plyListener ) {
	        listener.exitType_(this);
		}
	}


}



class PlydeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = plyParser.RULE_plydeclaration;
    }

	EOL() {
	    return this.getToken(plyParser.EOL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof plyListener ) {
	        listener.enterPlydeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof plyListener ) {
	        listener.exitPlydeclaration(this);
		}
	}


}



class VerticesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = plyParser.RULE_vertices;
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

	enterRule(listener) {
	    if(listener instanceof plyListener ) {
	        listener.enterVertices(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof plyListener ) {
	        listener.exitVertices(this);
		}
	}


}



class FacesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = plyParser.RULE_faces;
    }

	face = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FaceContext);
	    } else {
	        return this.getTypedRuleContext(FaceContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof plyListener ) {
	        listener.enterFaces(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof plyListener ) {
	        listener.exitFaces(this);
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
        this.ruleIndex = plyParser.RULE_vertex;
    }

	number = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NumberContext);
	    } else {
	        return this.getTypedRuleContext(NumberContext,i);
	    }
	};

	EOL() {
	    return this.getToken(plyParser.EOL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof plyListener ) {
	        listener.enterVertex(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof plyListener ) {
	        listener.exitVertex(this);
		}
	}


}



class FaceContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = plyParser.RULE_face;
    }

	number = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NumberContext);
	    } else {
	        return this.getTypedRuleContext(NumberContext,i);
	    }
	};

	EOL() {
	    return this.getToken(plyParser.EOL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof plyListener ) {
	        listener.enterFace(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof plyListener ) {
	        listener.exitFace(this);
		}
	}


}



class NumberContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = plyParser.RULE_number;
    }

	NUMBER() {
	    return this.getToken(plyParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof plyListener ) {
	        listener.enterNumber(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof plyListener ) {
	        listener.exitNumber(this);
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
        this.ruleIndex = plyParser.RULE_string;
    }

	STRING() {
	    return this.getToken(plyParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof plyListener ) {
	        listener.enterString(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof plyListener ) {
	        listener.exitString(this);
		}
	}


}




plyParser.PlyContext = PlyContext; 
plyParser.HeaderContext = HeaderContext; 
plyParser.End_headerContext = End_headerContext; 
plyParser.Format_Context = Format_Context; 
plyParser.ElementContext = ElementContext; 
plyParser.Property_Context = Property_Context; 
plyParser.ScalarpropertyContext = ScalarpropertyContext; 
plyParser.ListpropertyContext = ListpropertyContext; 
plyParser.Type_Context = Type_Context; 
plyParser.PlydeclarationContext = PlydeclarationContext; 
plyParser.VerticesContext = VerticesContext; 
plyParser.FacesContext = FacesContext; 
plyParser.VertexContext = VertexContext; 
plyParser.FaceContext = FaceContext; 
plyParser.NumberContext = NumberContext; 
plyParser.StringContext = StringContext; 
