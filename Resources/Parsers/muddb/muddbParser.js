// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/muddb/muddb.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import muddbListener from './muddbListener.js';
const serializedATN = [4,1,4,123,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,
13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,
7,20,1,0,5,0,44,8,0,10,0,12,0,47,9,0,1,0,1,0,5,0,51,8,0,10,0,12,0,54,9,0,
1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
1,1,1,2,1,2,1,2,1,3,1,3,1,4,1,4,1,5,1,5,1,6,1,6,1,7,1,7,1,8,1,8,1,9,1,9,
1,10,1,10,1,11,1,11,1,12,1,12,1,13,1,13,1,14,1,14,1,15,1,15,1,16,1,16,1,
17,1,17,1,18,3,18,109,8,18,1,18,1,18,1,19,3,19,114,8,19,1,19,1,19,1,20,3,
20,119,8,20,1,20,1,20,1,20,0,0,21,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,
30,32,34,36,38,40,0,0,106,0,45,1,0,0,0,2,57,1,0,0,0,4,74,1,0,0,0,6,77,1,
0,0,0,8,79,1,0,0,0,10,81,1,0,0,0,12,83,1,0,0,0,14,85,1,0,0,0,16,87,1,0,0,
0,18,89,1,0,0,0,20,91,1,0,0,0,22,93,1,0,0,0,24,95,1,0,0,0,26,97,1,0,0,0,
28,99,1,0,0,0,30,101,1,0,0,0,32,103,1,0,0,0,34,105,1,0,0,0,36,108,1,0,0,
0,38,113,1,0,0,0,40,118,1,0,0,0,42,44,3,2,1,0,43,42,1,0,0,0,44,47,1,0,0,
0,45,43,1,0,0,0,45,46,1,0,0,0,46,48,1,0,0,0,47,45,1,0,0,0,48,52,5,1,0,0,
49,51,5,4,0,0,50,49,1,0,0,0,51,54,1,0,0,0,52,50,1,0,0,0,52,53,1,0,0,0,53,
55,1,0,0,0,54,52,1,0,0,0,55,56,5,0,0,1,56,1,1,0,0,0,57,58,3,4,2,0,58,59,
3,6,3,0,59,60,3,8,4,0,60,61,3,10,5,0,61,62,3,12,6,0,62,63,3,14,7,0,63,64,
3,16,8,0,64,65,3,18,9,0,65,66,3,20,10,0,66,67,3,22,11,0,67,68,3,24,12,0,
68,69,3,26,13,0,69,70,3,28,14,0,70,71,3,30,15,0,71,72,3,32,16,0,72,73,3,
34,17,0,73,3,1,0,0,0,74,75,5,3,0,0,75,76,5,4,0,0,76,5,1,0,0,0,77,78,3,36,
18,0,78,7,1,0,0,0,79,80,3,36,18,0,80,9,1,0,0,0,81,82,3,38,19,0,82,11,1,0,
0,0,83,84,3,38,19,0,84,13,1,0,0,0,85,86,3,38,19,0,86,15,1,0,0,0,87,88,3,
38,19,0,88,17,1,0,0,0,89,90,3,40,20,0,90,19,1,0,0,0,91,92,3,36,18,0,92,21,
1,0,0,0,93,94,3,36,18,0,94,23,1,0,0,0,95,96,3,36,18,0,96,25,1,0,0,0,97,98,
3,36,18,0,98,27,1,0,0,0,99,100,3,38,19,0,100,29,1,0,0,0,101,102,3,38,19,
0,102,31,1,0,0,0,103,104,3,38,19,0,104,33,1,0,0,0,105,106,3,36,18,0,106,
35,1,0,0,0,107,109,5,3,0,0,108,107,1,0,0,0,108,109,1,0,0,0,109,110,1,0,0,
0,110,111,5,4,0,0,111,37,1,0,0,0,112,114,5,2,0,0,113,112,1,0,0,0,113,114,
1,0,0,0,114,115,1,0,0,0,115,116,5,4,0,0,116,39,1,0,0,0,117,119,5,2,0,0,118,
117,1,0,0,0,118,119,1,0,0,0,119,120,1,0,0,0,120,121,5,4,0,0,121,41,1,0,0,
0,5,45,52,108,113,118];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class muddbParser extends antlr4.Parser {

    static grammarFileName = "muddb.g4";
    static literalNames = [ null, "'***END OF DUMP***'" ];
    static symbolicNames = [ null, "END", "NUM", "STRING", "EOL" ];
    static ruleNames = [ "db", "room", "roomno", "name", "description", 
                         "location", "contents", "exits", "next_", "key", 
                         "fail_message", "succ_message", "ofail", "osuccess", 
                         "owner", "pennies", "flags", "password", "string", 
                         "ref", "bool_" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = muddbParser.ruleNames;
        this.literalNames = muddbParser.literalNames;
        this.symbolicNames = muddbParser.symbolicNames;
    }



	db() {
	    let localctx = new DbContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, muddbParser.RULE_db);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 45;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===3) {
	            this.state = 42;
	            this.room();
	            this.state = 47;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 48;
	        this.match(muddbParser.END);
	        this.state = 52;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===4) {
	            this.state = 49;
	            this.match(muddbParser.EOL);
	            this.state = 54;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 55;
	        this.match(muddbParser.EOF);
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



	room() {
	    let localctx = new RoomContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, muddbParser.RULE_room);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 57;
	        this.roomno();
	        this.state = 58;
	        this.name();
	        this.state = 59;
	        this.description();
	        this.state = 60;
	        this.location();
	        this.state = 61;
	        this.contents();
	        this.state = 62;
	        this.exits();
	        this.state = 63;
	        this.next_();
	        this.state = 64;
	        this.key();
	        this.state = 65;
	        this.fail_message();
	        this.state = 66;
	        this.succ_message();
	        this.state = 67;
	        this.ofail();
	        this.state = 68;
	        this.osuccess();
	        this.state = 69;
	        this.owner();
	        this.state = 70;
	        this.pennies();
	        this.state = 71;
	        this.flags();
	        this.state = 72;
	        this.password();
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



	roomno() {
	    let localctx = new RoomnoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, muddbParser.RULE_roomno);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 74;
	        this.match(muddbParser.STRING);
	        this.state = 75;
	        this.match(muddbParser.EOL);
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
	    this.enterRule(localctx, 6, muddbParser.RULE_name);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 77;
	        this.string();
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



	description() {
	    let localctx = new DescriptionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, muddbParser.RULE_description);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 79;
	        this.string();
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



	location() {
	    let localctx = new LocationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, muddbParser.RULE_location);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 81;
	        this.ref();
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



	contents() {
	    let localctx = new ContentsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, muddbParser.RULE_contents);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 83;
	        this.ref();
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



	exits() {
	    let localctx = new ExitsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, muddbParser.RULE_exits);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 85;
	        this.ref();
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



	next_() {
	    let localctx = new Next_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, muddbParser.RULE_next_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 87;
	        this.ref();
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



	key() {
	    let localctx = new KeyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, muddbParser.RULE_key);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 89;
	        this.bool_();
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



	fail_message() {
	    let localctx = new Fail_messageContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, muddbParser.RULE_fail_message);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 91;
	        this.string();
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



	succ_message() {
	    let localctx = new Succ_messageContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, muddbParser.RULE_succ_message);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 93;
	        this.string();
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



	ofail() {
	    let localctx = new OfailContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, muddbParser.RULE_ofail);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 95;
	        this.string();
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



	osuccess() {
	    let localctx = new OsuccessContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, muddbParser.RULE_osuccess);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 97;
	        this.string();
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



	owner() {
	    let localctx = new OwnerContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, muddbParser.RULE_owner);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 99;
	        this.ref();
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



	pennies() {
	    let localctx = new PenniesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, muddbParser.RULE_pennies);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 101;
	        this.ref();
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



	flags() {
	    let localctx = new FlagsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, muddbParser.RULE_flags);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 103;
	        this.ref();
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



	password() {
	    let localctx = new PasswordContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, muddbParser.RULE_password);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 105;
	        this.string();
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
	    this.enterRule(localctx, 36, muddbParser.RULE_string);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 108;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===3) {
	            this.state = 107;
	            this.match(muddbParser.STRING);
	        }

	        this.state = 110;
	        this.match(muddbParser.EOL);
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



	ref() {
	    let localctx = new RefContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, muddbParser.RULE_ref);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 113;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===2) {
	            this.state = 112;
	            this.match(muddbParser.NUM);
	        }

	        this.state = 115;
	        this.match(muddbParser.EOL);
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
	    this.enterRule(localctx, 40, muddbParser.RULE_bool_);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 118;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===2) {
	            this.state = 117;
	            this.match(muddbParser.NUM);
	        }

	        this.state = 120;
	        this.match(muddbParser.EOL);
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

muddbParser.EOF = antlr4.Token.EOF;
muddbParser.END = 1;
muddbParser.NUM = 2;
muddbParser.STRING = 3;
muddbParser.EOL = 4;

muddbParser.RULE_db = 0;
muddbParser.RULE_room = 1;
muddbParser.RULE_roomno = 2;
muddbParser.RULE_name = 3;
muddbParser.RULE_description = 4;
muddbParser.RULE_location = 5;
muddbParser.RULE_contents = 6;
muddbParser.RULE_exits = 7;
muddbParser.RULE_next_ = 8;
muddbParser.RULE_key = 9;
muddbParser.RULE_fail_message = 10;
muddbParser.RULE_succ_message = 11;
muddbParser.RULE_ofail = 12;
muddbParser.RULE_osuccess = 13;
muddbParser.RULE_owner = 14;
muddbParser.RULE_pennies = 15;
muddbParser.RULE_flags = 16;
muddbParser.RULE_password = 17;
muddbParser.RULE_string = 18;
muddbParser.RULE_ref = 19;
muddbParser.RULE_bool_ = 20;

class DbContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = muddbParser.RULE_db;
    }

	END() {
	    return this.getToken(muddbParser.END, 0);
	};

	EOF() {
	    return this.getToken(muddbParser.EOF, 0);
	};

	room = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RoomContext);
	    } else {
	        return this.getTypedRuleContext(RoomContext,i);
	    }
	};

	EOL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(muddbParser.EOL);
	    } else {
	        return this.getToken(muddbParser.EOL, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof muddbListener ) {
	        listener.enterDb(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof muddbListener ) {
	        listener.exitDb(this);
		}
	}


}



class RoomContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = muddbParser.RULE_room;
    }

	roomno() {
	    return this.getTypedRuleContext(RoomnoContext,0);
	};

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	description() {
	    return this.getTypedRuleContext(DescriptionContext,0);
	};

	location() {
	    return this.getTypedRuleContext(LocationContext,0);
	};

	contents() {
	    return this.getTypedRuleContext(ContentsContext,0);
	};

	exits() {
	    return this.getTypedRuleContext(ExitsContext,0);
	};

	next_() {
	    return this.getTypedRuleContext(Next_Context,0);
	};

	key() {
	    return this.getTypedRuleContext(KeyContext,0);
	};

	fail_message() {
	    return this.getTypedRuleContext(Fail_messageContext,0);
	};

	succ_message() {
	    return this.getTypedRuleContext(Succ_messageContext,0);
	};

	ofail() {
	    return this.getTypedRuleContext(OfailContext,0);
	};

	osuccess() {
	    return this.getTypedRuleContext(OsuccessContext,0);
	};

	owner() {
	    return this.getTypedRuleContext(OwnerContext,0);
	};

	pennies() {
	    return this.getTypedRuleContext(PenniesContext,0);
	};

	flags() {
	    return this.getTypedRuleContext(FlagsContext,0);
	};

	password() {
	    return this.getTypedRuleContext(PasswordContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof muddbListener ) {
	        listener.enterRoom(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof muddbListener ) {
	        listener.exitRoom(this);
		}
	}


}



class RoomnoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = muddbParser.RULE_roomno;
    }

	STRING() {
	    return this.getToken(muddbParser.STRING, 0);
	};

	EOL() {
	    return this.getToken(muddbParser.EOL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof muddbListener ) {
	        listener.enterRoomno(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof muddbListener ) {
	        listener.exitRoomno(this);
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
        this.ruleIndex = muddbParser.RULE_name;
    }

	string() {
	    return this.getTypedRuleContext(StringContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof muddbListener ) {
	        listener.enterName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof muddbListener ) {
	        listener.exitName(this);
		}
	}


}



class DescriptionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = muddbParser.RULE_description;
    }

	string() {
	    return this.getTypedRuleContext(StringContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof muddbListener ) {
	        listener.enterDescription(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof muddbListener ) {
	        listener.exitDescription(this);
		}
	}


}



class LocationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = muddbParser.RULE_location;
    }

	ref() {
	    return this.getTypedRuleContext(RefContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof muddbListener ) {
	        listener.enterLocation(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof muddbListener ) {
	        listener.exitLocation(this);
		}
	}


}



class ContentsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = muddbParser.RULE_contents;
    }

	ref() {
	    return this.getTypedRuleContext(RefContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof muddbListener ) {
	        listener.enterContents(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof muddbListener ) {
	        listener.exitContents(this);
		}
	}


}



class ExitsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = muddbParser.RULE_exits;
    }

	ref() {
	    return this.getTypedRuleContext(RefContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof muddbListener ) {
	        listener.enterExits(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof muddbListener ) {
	        listener.exitExits(this);
		}
	}


}



class Next_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = muddbParser.RULE_next_;
    }

	ref() {
	    return this.getTypedRuleContext(RefContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof muddbListener ) {
	        listener.enterNext_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof muddbListener ) {
	        listener.exitNext_(this);
		}
	}


}



class KeyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = muddbParser.RULE_key;
    }

	bool_() {
	    return this.getTypedRuleContext(Bool_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof muddbListener ) {
	        listener.enterKey(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof muddbListener ) {
	        listener.exitKey(this);
		}
	}


}



class Fail_messageContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = muddbParser.RULE_fail_message;
    }

	string() {
	    return this.getTypedRuleContext(StringContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof muddbListener ) {
	        listener.enterFail_message(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof muddbListener ) {
	        listener.exitFail_message(this);
		}
	}


}



class Succ_messageContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = muddbParser.RULE_succ_message;
    }

	string() {
	    return this.getTypedRuleContext(StringContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof muddbListener ) {
	        listener.enterSucc_message(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof muddbListener ) {
	        listener.exitSucc_message(this);
		}
	}


}



class OfailContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = muddbParser.RULE_ofail;
    }

	string() {
	    return this.getTypedRuleContext(StringContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof muddbListener ) {
	        listener.enterOfail(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof muddbListener ) {
	        listener.exitOfail(this);
		}
	}


}



class OsuccessContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = muddbParser.RULE_osuccess;
    }

	string() {
	    return this.getTypedRuleContext(StringContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof muddbListener ) {
	        listener.enterOsuccess(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof muddbListener ) {
	        listener.exitOsuccess(this);
		}
	}


}



class OwnerContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = muddbParser.RULE_owner;
    }

	ref() {
	    return this.getTypedRuleContext(RefContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof muddbListener ) {
	        listener.enterOwner(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof muddbListener ) {
	        listener.exitOwner(this);
		}
	}


}



class PenniesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = muddbParser.RULE_pennies;
    }

	ref() {
	    return this.getTypedRuleContext(RefContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof muddbListener ) {
	        listener.enterPennies(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof muddbListener ) {
	        listener.exitPennies(this);
		}
	}


}



class FlagsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = muddbParser.RULE_flags;
    }

	ref() {
	    return this.getTypedRuleContext(RefContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof muddbListener ) {
	        listener.enterFlags(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof muddbListener ) {
	        listener.exitFlags(this);
		}
	}


}



class PasswordContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = muddbParser.RULE_password;
    }

	string() {
	    return this.getTypedRuleContext(StringContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof muddbListener ) {
	        listener.enterPassword(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof muddbListener ) {
	        listener.exitPassword(this);
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
        this.ruleIndex = muddbParser.RULE_string;
    }

	EOL() {
	    return this.getToken(muddbParser.EOL, 0);
	};

	STRING() {
	    return this.getToken(muddbParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof muddbListener ) {
	        listener.enterString(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof muddbListener ) {
	        listener.exitString(this);
		}
	}


}



class RefContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = muddbParser.RULE_ref;
    }

	EOL() {
	    return this.getToken(muddbParser.EOL, 0);
	};

	NUM() {
	    return this.getToken(muddbParser.NUM, 0);
	};

	enterRule(listener) {
	    if(listener instanceof muddbListener ) {
	        listener.enterRef(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof muddbListener ) {
	        listener.exitRef(this);
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
        this.ruleIndex = muddbParser.RULE_bool_;
    }

	EOL() {
	    return this.getToken(muddbParser.EOL, 0);
	};

	NUM() {
	    return this.getToken(muddbParser.NUM, 0);
	};

	enterRule(listener) {
	    if(listener instanceof muddbListener ) {
	        listener.enterBool_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof muddbListener ) {
	        listener.exitBool_(this);
		}
	}


}




muddbParser.DbContext = DbContext; 
muddbParser.RoomContext = RoomContext; 
muddbParser.RoomnoContext = RoomnoContext; 
muddbParser.NameContext = NameContext; 
muddbParser.DescriptionContext = DescriptionContext; 
muddbParser.LocationContext = LocationContext; 
muddbParser.ContentsContext = ContentsContext; 
muddbParser.ExitsContext = ExitsContext; 
muddbParser.Next_Context = Next_Context; 
muddbParser.KeyContext = KeyContext; 
muddbParser.Fail_messageContext = Fail_messageContext; 
muddbParser.Succ_messageContext = Succ_messageContext; 
muddbParser.OfailContext = OfailContext; 
muddbParser.OsuccessContext = OsuccessContext; 
muddbParser.OwnerContext = OwnerContext; 
muddbParser.PenniesContext = PenniesContext; 
muddbParser.FlagsContext = FlagsContext; 
muddbParser.PasswordContext = PasswordContext; 
muddbParser.StringContext = StringContext; 
muddbParser.RefContext = RefContext; 
muddbParser.Bool_Context = Bool_Context; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
