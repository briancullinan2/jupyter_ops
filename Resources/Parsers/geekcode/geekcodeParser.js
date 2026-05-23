// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/geekcode/geekcode.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import geekcodeListener from './geekcodeListener.js';
const serializedATN = [4,1,70,127,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,1,0,1,0,4,0,19,8,0,11,0,12,0,20,1,0,1,0,1,1,3,
1,26,8,1,1,1,1,1,1,1,1,1,5,1,32,8,1,10,1,12,1,35,9,1,1,2,1,2,1,2,1,2,1,3,
4,3,42,8,3,11,3,12,3,43,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,
1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,
1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,3,4,92,8,
4,1,5,1,5,4,5,96,8,5,11,5,12,5,97,1,6,1,6,3,6,102,8,6,1,6,5,6,105,8,6,10,
6,12,6,108,9,6,1,6,1,6,3,6,112,8,6,1,6,5,6,115,8,6,10,6,12,6,118,9,6,5,6,
120,8,6,10,6,12,6,123,9,6,1,7,1,7,1,7,0,0,8,0,2,4,6,8,10,12,14,0,3,1,0,1,
3,3,0,12,13,15,22,28,28,1,0,5,8,175,0,16,1,0,0,0,2,25,1,0,0,0,4,36,1,0,0,
0,6,41,1,0,0,0,8,91,1,0,0,0,10,93,1,0,0,0,12,99,1,0,0,0,14,124,1,0,0,0,16,
18,5,68,0,0,17,19,3,2,1,0,18,17,1,0,0,0,19,20,1,0,0,0,20,18,1,0,0,0,20,21,
1,0,0,0,21,22,1,0,0,0,22,23,5,0,0,1,23,1,1,0,0,0,24,26,5,9,0,0,25,24,1,0,
0,0,25,26,1,0,0,0,26,27,1,0,0,0,27,33,3,8,4,0,28,32,3,6,3,0,29,32,3,4,2,
0,30,32,3,14,7,0,31,28,1,0,0,0,31,29,1,0,0,0,31,30,1,0,0,0,32,35,1,0,0,0,
33,31,1,0,0,0,33,34,1,0,0,0,34,3,1,0,0,0,35,33,1,0,0,0,36,37,5,10,0,0,37,
38,3,6,3,0,38,39,5,11,0,0,39,5,1,0,0,0,40,42,7,0,0,0,41,40,1,0,0,0,42,43,
1,0,0,0,43,41,1,0,0,0,43,44,1,0,0,0,44,7,1,0,0,0,45,92,5,23,0,0,46,92,3,
12,6,0,47,92,5,25,0,0,48,92,5,55,0,0,49,92,5,26,0,0,50,92,5,27,0,0,51,92,
5,29,0,0,52,92,5,30,0,0,53,92,5,31,0,0,54,92,5,32,0,0,55,92,5,33,0,0,56,
92,5,34,0,0,57,92,5,35,0,0,58,92,5,36,0,0,59,92,5,37,0,0,60,92,5,38,0,0,
61,92,5,39,0,0,62,92,5,40,0,0,63,92,5,41,0,0,64,92,5,42,0,0,65,92,5,43,0,
0,66,92,5,44,0,0,67,92,5,45,0,0,68,92,5,46,0,0,69,92,5,47,0,0,70,92,5,48,
0,0,71,92,5,49,0,0,72,92,5,50,0,0,73,92,5,51,0,0,74,92,5,52,0,0,75,92,5,
53,0,0,76,92,5,54,0,0,77,92,5,28,0,0,78,92,5,56,0,0,79,92,5,57,0,0,80,92,
5,58,0,0,81,92,5,59,0,0,82,92,5,60,0,0,83,92,5,61,0,0,84,92,5,62,0,0,85,
92,5,63,0,0,86,92,5,64,0,0,87,92,5,65,0,0,88,92,5,66,0,0,89,92,5,67,0,0,
90,92,3,10,5,0,91,45,1,0,0,0,91,46,1,0,0,0,91,47,1,0,0,0,91,48,1,0,0,0,91,
49,1,0,0,0,91,50,1,0,0,0,91,51,1,0,0,0,91,52,1,0,0,0,91,53,1,0,0,0,91,54,
1,0,0,0,91,55,1,0,0,0,91,56,1,0,0,0,91,57,1,0,0,0,91,58,1,0,0,0,91,59,1,
0,0,0,91,60,1,0,0,0,91,61,1,0,0,0,91,62,1,0,0,0,91,63,1,0,0,0,91,64,1,0,
0,0,91,65,1,0,0,0,91,66,1,0,0,0,91,67,1,0,0,0,91,68,1,0,0,0,91,69,1,0,0,
0,91,70,1,0,0,0,91,71,1,0,0,0,91,72,1,0,0,0,91,73,1,0,0,0,91,74,1,0,0,0,
91,75,1,0,0,0,91,76,1,0,0,0,91,77,1,0,0,0,91,78,1,0,0,0,91,79,1,0,0,0,91,
80,1,0,0,0,91,81,1,0,0,0,91,82,1,0,0,0,91,83,1,0,0,0,91,84,1,0,0,0,91,85,
1,0,0,0,91,86,1,0,0,0,91,87,1,0,0,0,91,88,1,0,0,0,91,89,1,0,0,0,91,90,1,
0,0,0,92,9,1,0,0,0,93,95,5,12,0,0,94,96,7,1,0,0,95,94,1,0,0,0,96,97,1,0,
0,0,97,95,1,0,0,0,97,98,1,0,0,0,98,11,1,0,0,0,99,101,5,24,0,0,100,102,3,
6,3,0,101,100,1,0,0,0,101,102,1,0,0,0,102,106,1,0,0,0,103,105,3,14,7,0,104,
103,1,0,0,0,105,108,1,0,0,0,106,104,1,0,0,0,106,107,1,0,0,0,107,121,1,0,
0,0,108,106,1,0,0,0,109,111,5,4,0,0,110,112,3,6,3,0,111,110,1,0,0,0,111,
112,1,0,0,0,112,116,1,0,0,0,113,115,3,14,7,0,114,113,1,0,0,0,115,118,1,0,
0,0,116,114,1,0,0,0,116,117,1,0,0,0,117,120,1,0,0,0,118,116,1,0,0,0,119,
109,1,0,0,0,120,123,1,0,0,0,121,119,1,0,0,0,121,122,1,0,0,0,122,13,1,0,0,
0,123,121,1,0,0,0,124,125,7,2,0,0,125,15,1,0,0,0,12,20,25,31,33,43,91,97,
101,106,111,116,121];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class geekcodeParser extends antlr4.Parser {

    static grammarFileName = "geekcode.g4";
    static literalNames = [ null, "'-'", "'+'", "'*'", "':'", "'@'", "'>'", 
                            "'$'", "'?'", "'!'", "'('", "')'", "'U'", "'UB'", 
                            "'UU'", "'UA'", "'UV'", "'UH'", "'UI'", "'UO'", 
                            "'US'", "'UC'", "'UX'", "'d'", "'s'", "'a'", 
                            "'C'", "'P'", "'L'", "'E'", "'W'", "'N'", "'o'", 
                            "'K'", "'O'", "'M'", "'V'", "'PS'", "'PE'", 
                            "'Y'", "'PGP'", "'t'", "'5'", "'X'", "'R'", 
                            "'tv'", "'b'", "'DI'", "'D'", "'e'", "'h'", 
                            "'r'", "'y'", "'z'", "'x'", "'H'", "'g'", "'p'", 
                            "'au'", "'w'", "'v'", "'3'", "'j'", "'G'", "'B'", 
                            "'u'", "'f'", "'n'" ];
    static symbolicNames = [ null, null, null, null, null, "NOTRIGID", "WANNABE", 
                             "FORLIVING", "NOKNOWLEDGE", "REFUSE", "LPAREN", 
                             "RPAREN", "UNIX", "BSD", "ULTRIX", "AIX", "SYSV", 
                             "HPUX", "IRIX", "OSF1", "SOLARIS", "SCO", "NEXT", 
                             "DRESS", "SHAPE", "AGE", "COMPUTERS", "PERL", 
                             "LINUX", "EMACS", "WWW", "USENET", "USENET_ORACLE", 
                             "KIBO", "OS2", "MACINTOSH", "VMS", "POLITCALSOCIAL", 
                             "POLITICSECONOMIC", "CYPHERPUNKS", "PGP", "STARTREK", 
                             "BABYLON5", "XFILES", "ROLEPLAYING", "TELEVISION", 
                             "BOOKS", "DILBERT", "DOOM", "EDUCATION", "HOUSEING", 
                             "RELATIONSHIPS", "SEXU", "SEXM", "SEXF", "HAIR", 
                             "GLASSES", "PENS", "AUTO", "WEIRDNESS", "VERBAGE", 
                             "BSD386", "JEOPARDY", "MAGIC", "BARNEY", "MUSIC", 
                             "FRIENDS", "NUTRITION", "GCODE", "ALPHA", "WS" ];
    static ruleNames = [ "file_", "tuple", "crossover", "sizing", "tupletyepe", 
                         "unixtuple", "shapetuple", "qualifier" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = geekcodeParser.ruleNames;
        this.literalNames = geekcodeParser.literalNames;
        this.symbolicNames = geekcodeParser.symbolicNames;
    }



	file_() {
	    let localctx = new File_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, geekcodeParser.RULE_file_);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 16;
	        this.match(geekcodeParser.GCODE);
	        this.state = 18; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 17;
	            this.tuple();
	            this.state = 20; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(((((_la - 9)) & ~0x1f) === 0 && ((1 << (_la - 9)) & 4294950921) !== 0) || ((((_la - 41)) & ~0x1f) === 0 && ((1 << (_la - 41)) & 134217727) !== 0));
	        this.state = 22;
	        this.match(geekcodeParser.EOF);
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



	tuple() {
	    let localctx = new TupleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, geekcodeParser.RULE_tuple);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 25;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===9) {
	            this.state = 24;
	            this.match(geekcodeParser.REFUSE);
	        }

	        this.state = 27;
	        this.tupletyepe();
	        this.state = 33;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1518) !== 0)) {
	            this.state = 31;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 1:
	            case 2:
	            case 3:
	                this.state = 28;
	                this.sizing();
	                break;
	            case 10:
	                this.state = 29;
	                this.crossover();
	                break;
	            case 5:
	            case 6:
	            case 7:
	            case 8:
	                this.state = 30;
	                this.qualifier();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 35;
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



	crossover() {
	    let localctx = new CrossoverContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, geekcodeParser.RULE_crossover);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 36;
	        this.match(geekcodeParser.LPAREN);
	        this.state = 37;
	        this.sizing();
	        this.state = 38;
	        this.match(geekcodeParser.RPAREN);
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



	sizing() {
	    let localctx = new SizingContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, geekcodeParser.RULE_sizing);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 41; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 40;
	        		_la = this._input.LA(1);
	        		if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 14) !== 0))) {
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
	        	this.state = 43; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,4, this._ctx);
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



	tupletyepe() {
	    let localctx = new TupletyepeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, geekcodeParser.RULE_tupletyepe);
	    try {
	        this.state = 91;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 23:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 45;
	            this.match(geekcodeParser.DRESS);
	            break;
	        case 24:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 46;
	            this.shapetuple();
	            break;
	        case 25:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 47;
	            this.match(geekcodeParser.AGE);
	            break;
	        case 55:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 48;
	            this.match(geekcodeParser.HAIR);
	            break;
	        case 26:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 49;
	            this.match(geekcodeParser.COMPUTERS);
	            break;
	        case 27:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 50;
	            this.match(geekcodeParser.PERL);
	            break;
	        case 29:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 51;
	            this.match(geekcodeParser.EMACS);
	            break;
	        case 30:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 52;
	            this.match(geekcodeParser.WWW);
	            break;
	        case 31:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 53;
	            this.match(geekcodeParser.USENET);
	            break;
	        case 32:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 54;
	            this.match(geekcodeParser.USENET_ORACLE);
	            break;
	        case 33:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 55;
	            this.match(geekcodeParser.KIBO);
	            break;
	        case 34:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 56;
	            this.match(geekcodeParser.OS2);
	            break;
	        case 35:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 57;
	            this.match(geekcodeParser.MACINTOSH);
	            break;
	        case 36:
	            this.enterOuterAlt(localctx, 14);
	            this.state = 58;
	            this.match(geekcodeParser.VMS);
	            break;
	        case 37:
	            this.enterOuterAlt(localctx, 15);
	            this.state = 59;
	            this.match(geekcodeParser.POLITCALSOCIAL);
	            break;
	        case 38:
	            this.enterOuterAlt(localctx, 16);
	            this.state = 60;
	            this.match(geekcodeParser.POLITICSECONOMIC);
	            break;
	        case 39:
	            this.enterOuterAlt(localctx, 17);
	            this.state = 61;
	            this.match(geekcodeParser.CYPHERPUNKS);
	            break;
	        case 40:
	            this.enterOuterAlt(localctx, 18);
	            this.state = 62;
	            this.match(geekcodeParser.PGP);
	            break;
	        case 41:
	            this.enterOuterAlt(localctx, 19);
	            this.state = 63;
	            this.match(geekcodeParser.STARTREK);
	            break;
	        case 42:
	            this.enterOuterAlt(localctx, 20);
	            this.state = 64;
	            this.match(geekcodeParser.BABYLON5);
	            break;
	        case 43:
	            this.enterOuterAlt(localctx, 21);
	            this.state = 65;
	            this.match(geekcodeParser.XFILES);
	            break;
	        case 44:
	            this.enterOuterAlt(localctx, 22);
	            this.state = 66;
	            this.match(geekcodeParser.ROLEPLAYING);
	            break;
	        case 45:
	            this.enterOuterAlt(localctx, 23);
	            this.state = 67;
	            this.match(geekcodeParser.TELEVISION);
	            break;
	        case 46:
	            this.enterOuterAlt(localctx, 24);
	            this.state = 68;
	            this.match(geekcodeParser.BOOKS);
	            break;
	        case 47:
	            this.enterOuterAlt(localctx, 25);
	            this.state = 69;
	            this.match(geekcodeParser.DILBERT);
	            break;
	        case 48:
	            this.enterOuterAlt(localctx, 26);
	            this.state = 70;
	            this.match(geekcodeParser.DOOM);
	            break;
	        case 49:
	            this.enterOuterAlt(localctx, 27);
	            this.state = 71;
	            this.match(geekcodeParser.EDUCATION);
	            break;
	        case 50:
	            this.enterOuterAlt(localctx, 28);
	            this.state = 72;
	            this.match(geekcodeParser.HOUSEING);
	            break;
	        case 51:
	            this.enterOuterAlt(localctx, 29);
	            this.state = 73;
	            this.match(geekcodeParser.RELATIONSHIPS);
	            break;
	        case 52:
	            this.enterOuterAlt(localctx, 30);
	            this.state = 74;
	            this.match(geekcodeParser.SEXU);
	            break;
	        case 53:
	            this.enterOuterAlt(localctx, 31);
	            this.state = 75;
	            this.match(geekcodeParser.SEXM);
	            break;
	        case 54:
	            this.enterOuterAlt(localctx, 32);
	            this.state = 76;
	            this.match(geekcodeParser.SEXF);
	            break;
	        case 28:
	            this.enterOuterAlt(localctx, 33);
	            this.state = 77;
	            this.match(geekcodeParser.LINUX);
	            break;
	        case 56:
	            this.enterOuterAlt(localctx, 34);
	            this.state = 78;
	            this.match(geekcodeParser.GLASSES);
	            break;
	        case 57:
	            this.enterOuterAlt(localctx, 35);
	            this.state = 79;
	            this.match(geekcodeParser.PENS);
	            break;
	        case 58:
	            this.enterOuterAlt(localctx, 36);
	            this.state = 80;
	            this.match(geekcodeParser.AUTO);
	            break;
	        case 59:
	            this.enterOuterAlt(localctx, 37);
	            this.state = 81;
	            this.match(geekcodeParser.WEIRDNESS);
	            break;
	        case 60:
	            this.enterOuterAlt(localctx, 38);
	            this.state = 82;
	            this.match(geekcodeParser.VERBAGE);
	            break;
	        case 61:
	            this.enterOuterAlt(localctx, 39);
	            this.state = 83;
	            this.match(geekcodeParser.BSD386);
	            break;
	        case 62:
	            this.enterOuterAlt(localctx, 40);
	            this.state = 84;
	            this.match(geekcodeParser.JEOPARDY);
	            break;
	        case 63:
	            this.enterOuterAlt(localctx, 41);
	            this.state = 85;
	            this.match(geekcodeParser.MAGIC);
	            break;
	        case 64:
	            this.enterOuterAlt(localctx, 42);
	            this.state = 86;
	            this.match(geekcodeParser.BARNEY);
	            break;
	        case 65:
	            this.enterOuterAlt(localctx, 43);
	            this.state = 87;
	            this.match(geekcodeParser.MUSIC);
	            break;
	        case 66:
	            this.enterOuterAlt(localctx, 44);
	            this.state = 88;
	            this.match(geekcodeParser.FRIENDS);
	            break;
	        case 67:
	            this.enterOuterAlt(localctx, 45);
	            this.state = 89;
	            this.match(geekcodeParser.NUTRITION);
	            break;
	        case 12:
	            this.enterOuterAlt(localctx, 46);
	            this.state = 90;
	            this.unixtuple();
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



	unixtuple() {
	    let localctx = new UnixtupleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, geekcodeParser.RULE_unixtuple);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 93;
	        this.match(geekcodeParser.UNIX);
	        this.state = 95; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 94;
	        		_la = this._input.LA(1);
	        		if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 276803584) !== 0))) {
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
	        	this.state = 97; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,6, this._ctx);
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



	shapetuple() {
	    let localctx = new ShapetupleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, geekcodeParser.RULE_shapetuple);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 99;
	        this.match(geekcodeParser.SHAPE);
	        this.state = 101;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        if(la_===1) {
	            this.state = 100;
	            this.sizing();

	        }
	        this.state = 106;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 103;
	                this.qualifier(); 
	            }
	            this.state = 108;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,8,this._ctx);
	        }

	        this.state = 121;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===4) {
	            this.state = 109;
	            this.match(geekcodeParser.T__3);
	            this.state = 111;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	            if(la_===1) {
	                this.state = 110;
	                this.sizing();

	            }
	            this.state = 116;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,10,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 113;
	                    this.qualifier(); 
	                }
	                this.state = 118;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,10,this._ctx);
	            }

	            this.state = 123;
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



	qualifier() {
	    let localctx = new QualifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, geekcodeParser.RULE_qualifier);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 124;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 480) !== 0))) {
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

geekcodeParser.EOF = antlr4.Token.EOF;
geekcodeParser.T__0 = 1;
geekcodeParser.T__1 = 2;
geekcodeParser.T__2 = 3;
geekcodeParser.T__3 = 4;
geekcodeParser.NOTRIGID = 5;
geekcodeParser.WANNABE = 6;
geekcodeParser.FORLIVING = 7;
geekcodeParser.NOKNOWLEDGE = 8;
geekcodeParser.REFUSE = 9;
geekcodeParser.LPAREN = 10;
geekcodeParser.RPAREN = 11;
geekcodeParser.UNIX = 12;
geekcodeParser.BSD = 13;
geekcodeParser.ULTRIX = 14;
geekcodeParser.AIX = 15;
geekcodeParser.SYSV = 16;
geekcodeParser.HPUX = 17;
geekcodeParser.IRIX = 18;
geekcodeParser.OSF1 = 19;
geekcodeParser.SOLARIS = 20;
geekcodeParser.SCO = 21;
geekcodeParser.NEXT = 22;
geekcodeParser.DRESS = 23;
geekcodeParser.SHAPE = 24;
geekcodeParser.AGE = 25;
geekcodeParser.COMPUTERS = 26;
geekcodeParser.PERL = 27;
geekcodeParser.LINUX = 28;
geekcodeParser.EMACS = 29;
geekcodeParser.WWW = 30;
geekcodeParser.USENET = 31;
geekcodeParser.USENET_ORACLE = 32;
geekcodeParser.KIBO = 33;
geekcodeParser.OS2 = 34;
geekcodeParser.MACINTOSH = 35;
geekcodeParser.VMS = 36;
geekcodeParser.POLITCALSOCIAL = 37;
geekcodeParser.POLITICSECONOMIC = 38;
geekcodeParser.CYPHERPUNKS = 39;
geekcodeParser.PGP = 40;
geekcodeParser.STARTREK = 41;
geekcodeParser.BABYLON5 = 42;
geekcodeParser.XFILES = 43;
geekcodeParser.ROLEPLAYING = 44;
geekcodeParser.TELEVISION = 45;
geekcodeParser.BOOKS = 46;
geekcodeParser.DILBERT = 47;
geekcodeParser.DOOM = 48;
geekcodeParser.EDUCATION = 49;
geekcodeParser.HOUSEING = 50;
geekcodeParser.RELATIONSHIPS = 51;
geekcodeParser.SEXU = 52;
geekcodeParser.SEXM = 53;
geekcodeParser.SEXF = 54;
geekcodeParser.HAIR = 55;
geekcodeParser.GLASSES = 56;
geekcodeParser.PENS = 57;
geekcodeParser.AUTO = 58;
geekcodeParser.WEIRDNESS = 59;
geekcodeParser.VERBAGE = 60;
geekcodeParser.BSD386 = 61;
geekcodeParser.JEOPARDY = 62;
geekcodeParser.MAGIC = 63;
geekcodeParser.BARNEY = 64;
geekcodeParser.MUSIC = 65;
geekcodeParser.FRIENDS = 66;
geekcodeParser.NUTRITION = 67;
geekcodeParser.GCODE = 68;
geekcodeParser.ALPHA = 69;
geekcodeParser.WS = 70;

geekcodeParser.RULE_file_ = 0;
geekcodeParser.RULE_tuple = 1;
geekcodeParser.RULE_crossover = 2;
geekcodeParser.RULE_sizing = 3;
geekcodeParser.RULE_tupletyepe = 4;
geekcodeParser.RULE_unixtuple = 5;
geekcodeParser.RULE_shapetuple = 6;
geekcodeParser.RULE_qualifier = 7;

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
        this.ruleIndex = geekcodeParser.RULE_file_;
    }

	GCODE() {
	    return this.getToken(geekcodeParser.GCODE, 0);
	};

	EOF() {
	    return this.getToken(geekcodeParser.EOF, 0);
	};

	tuple = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TupleContext);
	    } else {
	        return this.getTypedRuleContext(TupleContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof geekcodeListener ) {
	        listener.enterFile_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof geekcodeListener ) {
	        listener.exitFile_(this);
		}
	}


}



class TupleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = geekcodeParser.RULE_tuple;
    }

	tupletyepe() {
	    return this.getTypedRuleContext(TupletyepeContext,0);
	};

	REFUSE() {
	    return this.getToken(geekcodeParser.REFUSE, 0);
	};

	sizing = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SizingContext);
	    } else {
	        return this.getTypedRuleContext(SizingContext,i);
	    }
	};

	crossover = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CrossoverContext);
	    } else {
	        return this.getTypedRuleContext(CrossoverContext,i);
	    }
	};

	qualifier = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(QualifierContext);
	    } else {
	        return this.getTypedRuleContext(QualifierContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof geekcodeListener ) {
	        listener.enterTuple(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof geekcodeListener ) {
	        listener.exitTuple(this);
		}
	}


}



class CrossoverContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = geekcodeParser.RULE_crossover;
    }

	LPAREN() {
	    return this.getToken(geekcodeParser.LPAREN, 0);
	};

	sizing() {
	    return this.getTypedRuleContext(SizingContext,0);
	};

	RPAREN() {
	    return this.getToken(geekcodeParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof geekcodeListener ) {
	        listener.enterCrossover(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof geekcodeListener ) {
	        listener.exitCrossover(this);
		}
	}


}



class SizingContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = geekcodeParser.RULE_sizing;
    }


	enterRule(listener) {
	    if(listener instanceof geekcodeListener ) {
	        listener.enterSizing(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof geekcodeListener ) {
	        listener.exitSizing(this);
		}
	}


}



class TupletyepeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = geekcodeParser.RULE_tupletyepe;
    }

	DRESS() {
	    return this.getToken(geekcodeParser.DRESS, 0);
	};

	shapetuple() {
	    return this.getTypedRuleContext(ShapetupleContext,0);
	};

	AGE() {
	    return this.getToken(geekcodeParser.AGE, 0);
	};

	HAIR() {
	    return this.getToken(geekcodeParser.HAIR, 0);
	};

	COMPUTERS() {
	    return this.getToken(geekcodeParser.COMPUTERS, 0);
	};

	PERL() {
	    return this.getToken(geekcodeParser.PERL, 0);
	};

	EMACS() {
	    return this.getToken(geekcodeParser.EMACS, 0);
	};

	WWW() {
	    return this.getToken(geekcodeParser.WWW, 0);
	};

	USENET() {
	    return this.getToken(geekcodeParser.USENET, 0);
	};

	USENET_ORACLE() {
	    return this.getToken(geekcodeParser.USENET_ORACLE, 0);
	};

	KIBO() {
	    return this.getToken(geekcodeParser.KIBO, 0);
	};

	OS2() {
	    return this.getToken(geekcodeParser.OS2, 0);
	};

	MACINTOSH() {
	    return this.getToken(geekcodeParser.MACINTOSH, 0);
	};

	VMS() {
	    return this.getToken(geekcodeParser.VMS, 0);
	};

	POLITCALSOCIAL() {
	    return this.getToken(geekcodeParser.POLITCALSOCIAL, 0);
	};

	POLITICSECONOMIC() {
	    return this.getToken(geekcodeParser.POLITICSECONOMIC, 0);
	};

	CYPHERPUNKS() {
	    return this.getToken(geekcodeParser.CYPHERPUNKS, 0);
	};

	PGP() {
	    return this.getToken(geekcodeParser.PGP, 0);
	};

	STARTREK() {
	    return this.getToken(geekcodeParser.STARTREK, 0);
	};

	BABYLON5() {
	    return this.getToken(geekcodeParser.BABYLON5, 0);
	};

	XFILES() {
	    return this.getToken(geekcodeParser.XFILES, 0);
	};

	ROLEPLAYING() {
	    return this.getToken(geekcodeParser.ROLEPLAYING, 0);
	};

	TELEVISION() {
	    return this.getToken(geekcodeParser.TELEVISION, 0);
	};

	BOOKS() {
	    return this.getToken(geekcodeParser.BOOKS, 0);
	};

	DILBERT() {
	    return this.getToken(geekcodeParser.DILBERT, 0);
	};

	DOOM() {
	    return this.getToken(geekcodeParser.DOOM, 0);
	};

	EDUCATION() {
	    return this.getToken(geekcodeParser.EDUCATION, 0);
	};

	HOUSEING() {
	    return this.getToken(geekcodeParser.HOUSEING, 0);
	};

	RELATIONSHIPS() {
	    return this.getToken(geekcodeParser.RELATIONSHIPS, 0);
	};

	SEXU() {
	    return this.getToken(geekcodeParser.SEXU, 0);
	};

	SEXM() {
	    return this.getToken(geekcodeParser.SEXM, 0);
	};

	SEXF() {
	    return this.getToken(geekcodeParser.SEXF, 0);
	};

	LINUX() {
	    return this.getToken(geekcodeParser.LINUX, 0);
	};

	GLASSES() {
	    return this.getToken(geekcodeParser.GLASSES, 0);
	};

	PENS() {
	    return this.getToken(geekcodeParser.PENS, 0);
	};

	AUTO() {
	    return this.getToken(geekcodeParser.AUTO, 0);
	};

	WEIRDNESS() {
	    return this.getToken(geekcodeParser.WEIRDNESS, 0);
	};

	VERBAGE() {
	    return this.getToken(geekcodeParser.VERBAGE, 0);
	};

	BSD386() {
	    return this.getToken(geekcodeParser.BSD386, 0);
	};

	JEOPARDY() {
	    return this.getToken(geekcodeParser.JEOPARDY, 0);
	};

	MAGIC() {
	    return this.getToken(geekcodeParser.MAGIC, 0);
	};

	BARNEY() {
	    return this.getToken(geekcodeParser.BARNEY, 0);
	};

	MUSIC() {
	    return this.getToken(geekcodeParser.MUSIC, 0);
	};

	FRIENDS() {
	    return this.getToken(geekcodeParser.FRIENDS, 0);
	};

	NUTRITION() {
	    return this.getToken(geekcodeParser.NUTRITION, 0);
	};

	unixtuple() {
	    return this.getTypedRuleContext(UnixtupleContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof geekcodeListener ) {
	        listener.enterTupletyepe(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof geekcodeListener ) {
	        listener.exitTupletyepe(this);
		}
	}


}



class UnixtupleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = geekcodeParser.RULE_unixtuple;
    }

	UNIX = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(geekcodeParser.UNIX);
	    } else {
	        return this.getToken(geekcodeParser.UNIX, i);
	    }
	};


	BSD = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(geekcodeParser.BSD);
	    } else {
	        return this.getToken(geekcodeParser.BSD, i);
	    }
	};


	AIX = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(geekcodeParser.AIX);
	    } else {
	        return this.getToken(geekcodeParser.AIX, i);
	    }
	};


	SYSV = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(geekcodeParser.SYSV);
	    } else {
	        return this.getToken(geekcodeParser.SYSV, i);
	    }
	};


	HPUX = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(geekcodeParser.HPUX);
	    } else {
	        return this.getToken(geekcodeParser.HPUX, i);
	    }
	};


	IRIX = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(geekcodeParser.IRIX);
	    } else {
	        return this.getToken(geekcodeParser.IRIX, i);
	    }
	};


	OSF1 = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(geekcodeParser.OSF1);
	    } else {
	        return this.getToken(geekcodeParser.OSF1, i);
	    }
	};


	SOLARIS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(geekcodeParser.SOLARIS);
	    } else {
	        return this.getToken(geekcodeParser.SOLARIS, i);
	    }
	};


	SCO = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(geekcodeParser.SCO);
	    } else {
	        return this.getToken(geekcodeParser.SCO, i);
	    }
	};


	NEXT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(geekcodeParser.NEXT);
	    } else {
	        return this.getToken(geekcodeParser.NEXT, i);
	    }
	};


	LINUX = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(geekcodeParser.LINUX);
	    } else {
	        return this.getToken(geekcodeParser.LINUX, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof geekcodeListener ) {
	        listener.enterUnixtuple(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof geekcodeListener ) {
	        listener.exitUnixtuple(this);
		}
	}


}



class ShapetupleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = geekcodeParser.RULE_shapetuple;
    }

	SHAPE() {
	    return this.getToken(geekcodeParser.SHAPE, 0);
	};

	sizing = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SizingContext);
	    } else {
	        return this.getTypedRuleContext(SizingContext,i);
	    }
	};

	qualifier = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(QualifierContext);
	    } else {
	        return this.getTypedRuleContext(QualifierContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof geekcodeListener ) {
	        listener.enterShapetuple(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof geekcodeListener ) {
	        listener.exitShapetuple(this);
		}
	}


}



class QualifierContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = geekcodeParser.RULE_qualifier;
    }

	NOTRIGID() {
	    return this.getToken(geekcodeParser.NOTRIGID, 0);
	};

	WANNABE() {
	    return this.getToken(geekcodeParser.WANNABE, 0);
	};

	FORLIVING() {
	    return this.getToken(geekcodeParser.FORLIVING, 0);
	};

	NOKNOWLEDGE() {
	    return this.getToken(geekcodeParser.NOKNOWLEDGE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof geekcodeListener ) {
	        listener.enterQualifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof geekcodeListener ) {
	        listener.exitQualifier(this);
		}
	}


}




geekcodeParser.File_Context = File_Context; 
geekcodeParser.TupleContext = TupleContext; 
geekcodeParser.CrossoverContext = CrossoverContext; 
geekcodeParser.SizingContext = SizingContext; 
geekcodeParser.TupletyepeContext = TupletyepeContext; 
geekcodeParser.UnixtupleContext = UnixtupleContext; 
geekcodeParser.ShapetupleContext = ShapetupleContext; 
geekcodeParser.QualifierContext = QualifierContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
