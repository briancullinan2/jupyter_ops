// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/sql/hive/v3/HintParser.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import HintParserListener from './HintParserListener.js';
const serializedATN = [4,1,375,43,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,1,0,1,0,1,0,1,1,1,1,1,1,5,1,19,8,1,10,1,12,1,22,9,1,1,2,1,2,1,
2,1,2,1,2,3,2,29,8,2,1,3,1,3,1,4,1,4,1,4,5,4,36,8,4,10,4,12,4,39,9,4,1,5,
1,5,1,5,0,0,6,0,2,4,6,8,10,0,2,2,0,167,168,213,213,2,0,4,4,367,368,39,0,
12,1,0,0,0,2,15,1,0,0,0,4,23,1,0,0,0,6,30,1,0,0,0,8,32,1,0,0,0,10,40,1,0,
0,0,12,13,3,2,1,0,13,14,5,0,0,1,14,1,1,0,0,0,15,20,3,4,2,0,16,17,5,334,0,
0,17,19,3,4,2,0,18,16,1,0,0,0,19,22,1,0,0,0,20,18,1,0,0,0,20,21,1,0,0,0,
21,3,1,0,0,0,22,20,1,0,0,0,23,28,3,6,3,0,24,25,5,336,0,0,25,26,3,8,4,0,26,
27,5,337,0,0,27,29,1,0,0,0,28,24,1,0,0,0,28,29,1,0,0,0,29,5,1,0,0,0,30,31,
7,0,0,0,31,7,1,0,0,0,32,37,3,10,5,0,33,34,5,334,0,0,34,36,3,10,5,0,35,33,
1,0,0,0,36,39,1,0,0,0,37,35,1,0,0,0,37,38,1,0,0,0,38,9,1,0,0,0,39,37,1,0,
0,0,40,41,7,1,0,0,41,11,1,0,0,0,3,20,28,37];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class HintParser extends antlr4.Parser {

    static grammarFileName = "HintParser.g4";
    static literalNames = [ null, "'TRUE'", "'FALSE'", "'ALL'", "'NONE'", 
                            "'AND'", "'OR'", null, "'LIKE'", "'ANY'", "'IF'", 
                            "'EXISTS'", "'ASC'", "'DESC'", "'NULLS'", "'LAST'", 
                            "'ORDER'", "'GROUP'", "'BY'", "'HAVING'", "'WHERE'", 
                            "'FROM'", "'AS'", "'SELECT'", "'DISTINCT'", 
                            "'INSERT'", "'OVERWRITE'", "'OUTER'", "'UNIQUEJOIN'", 
                            "'PRESERVE'", "'JOIN'", "'LEFT'", "'RIGHT'", 
                            "'FULL'", "'ON'", "'PARTITION'", "'PARTITIONS'", 
                            "'TABLE'", "'TABLES'", "'COLUMNS'", "'INDEX'", 
                            "'INDEXES'", "'REBUILD'", "'FUNCTIONS'", "'SHOW'", 
                            "'MSCK'", "'REPAIR'", "'DIRECTORY'", "'LOCAL'", 
                            "'TRANSFORM'", "'USING'", "'CLUSTER'", "'DISTRIBUTE'", 
                            "'SORT'", "'UNION'", "'EXCEPT'", "'LOAD'", "'EXPORT'", 
                            "'IMPORT'", "'REPLICATION'", "'METADATA'", "'DATA'", 
                            "'INPATH'", "'IS'", "'NULL'", "'CREATE'", "'EXTERNAL'", 
                            "'ALTER'", "'CHANGE'", "'COLUMN'", "'FIRST'", 
                            "'AFTER'", "'DESCRIBE'", "'DROP'", "'RENAME'", 
                            "'TO'", "'COMMENT'", "'BOOLEAN'", "'TINYINT'", 
                            "'SMALLINT'", null, "'BIGINT'", "'FLOAT'", "'DOUBLE'", 
                            "'PRECISION'", "'DATE'", "'DATETIME'", "'TIMESTAMP'", 
                            "'TIMESTAMPLOCALTZ'", "'TIME'", "'ZONE'", "'INTERVAL'", 
                            null, "'STRING'", "'CHAR'", "'VARCHAR'", "'ARRAY'", 
                            "'STRUCT'", "'MAP'", "'UNIONTYPE'", "'REDUCE'", 
                            "'PARTITIONED'", "'CLUSTERED'", "'SORTED'", 
                            "'INTO'", "'BUCKETS'", "'ROW'", "'ROWS'", "'FORMAT'", 
                            "'DELIMITED'", "'FIELDS'", "'TERMINATED'", "'ESCAPED'", 
                            "'COLLECTION'", "'ITEMS'", "'KEYS'", "'$KEY$'", 
                            "'KILL'", "'LINES'", "'STORED'", "'FILEFORMAT'", 
                            "'INPUTFORMAT'", "'OUTPUTFORMAT'", "'INPUTDRIVER'", 
                            "'OUTPUTDRIVER'", "'ENABLE'", "'DISABLE'", "'LOCATION'", 
                            "'TABLESAMPLE'", "'BUCKET'", "'OUT'", "'OF'", 
                            "'PERCENT'", "'CAST'", "'ADD'", "'REPLACE'", 
                            "'RLIKE'", "'REGEXP'", "'TEMPORARY'", "'FUNCTION'", 
                            "'MACRO'", "'FILE'", "'JAR'", "'EXPLAIN'", "'EXTENDED'", 
                            "'FORMATTED'", "'DEPENDENCY'", "'LOGICAL'", 
                            "'SERDE'", "'WITH'", "'DEFERRED'", "'SERDEPROPERTIES'", 
                            "'DBPROPERTIES'", "'LIMIT'", "'OFFSET'", "'SET'", 
                            "'UNSET'", "'TBLPROPERTIES'", "'IDXPROPERTIES'", 
                            "'$VALUE$'", "'$ELEM$'", "'DEFINED'", "'CASE'", 
                            "'WHEN'", "'THEN'", "'ELSE'", "'END'", "'MAPJOIN'", 
                            "'STREAMTABLE'", "'CLUSTERSTATUS'", "'UTC'", 
                            "'UTC_TMESTAMP'", "'LONG'", "'DELETE'", "'PLUS'", 
                            "'MINUS'", "'FETCH'", "'INTERSECT'", "'VIEW'", 
                            "'VIEWS'", "'IN'", "'DATABASE'", "'DATABASES'", 
                            "'MATERIALIZED'", "'SCHEMA'", "'SCHEMAS'", "'GRANT'", 
                            "'REVOKE'", "'SSL'", "'UNDO'", "'LOCK'", "'LOCKS'", 
                            "'UNLOCK'", "'SHARED'", "'EXCLUSIVE'", "'PROCEDURE'", 
                            "'UNSIGNED'", "'WHILE'", "'READ'", "'READS'", 
                            "'PURGE'", "'RANGE'", "'ANALYZE'", "'BEFORE'", 
                            "'BETWEEN'", "'BOTH'", "'BINARY'", "'CROSS'", 
                            "'CONTINUE'", "'CURSOR'", "'TRIGGER'", "'RECORDREADER'", 
                            "'RECORDWRITER'", "'SEMI'", "'LATERAL'", "'TOUCH'", 
                            "'ARCHIVE'", "'UNARCHIVE'", "'COMPUTE'", "'STATISTICS'", 
                            "'USE'", "'OPTION'", "'CONCATENATE'", "'SHOW_DATABASE'", 
                            "'UPDATE'", "'RESTRICT'", "'CASCADE'", "'SKEWED'", 
                            "'ROLLUP'", "'CUBE'", "'DIRECTORIES'", "'FOR'", 
                            "'WINDOW'", "'UNBOUNDED'", "'PRECEDING'", "'FOLLOWING'", 
                            "'CURRENT'", "'CURRENT_DATE'", "'CURRENT_TIMESTAMP'", 
                            "'LESS'", "'MORE'", "'OVER'", "'GROUPING'", 
                            "'SETS'", "'TRUNCATE'", "'NOSCAN'", "'USER'", 
                            "'ROLE'", "'ROLES'", "'INNER'", "'EXCHANGE'", 
                            "'URI'", "'SERVER'", "'ADMIN'", "'OWNER'", "'PRINCIPALS'", 
                            "'COMPACT'", "'COMPACTIONS'", "'TRANSACTIONS'", 
                            "'REWRITE'", "'AUTHORIZATION'", "'REOPTIMIZATION'", 
                            "'CONF'", "'VALUES'", "'RELOAD'", null, "'QUERY'", 
                            "'QUARTER'", null, null, null, "'DAYOFWEEK'", 
                            null, null, null, "'START'", "'TRANSACTION'", 
                            "'COMMIT'", "'ROLLBACK'", "'WORK'", "'ONLY'", 
                            "'WRITE'", "'ISOLATION'", "'LEVEL'", "'SNAPSHOT'", 
                            "'AUTOCOMMIT'", "'CACHE'", "'PRIMARY'", "'FOREIGN'", 
                            "'REFERENCES'", "'CONSTRAINT'", "'ENFORCED'", 
                            "'VALIDATE'", "'NOVALIDATE'", "'RELY'", "'NORELY'", 
                            "'UNIQUE'", "'KEY'", "'ABORT'", "'EXTRACT'", 
                            "'FLOOR'", "'MERGE'", "'MATCHED'", "'REPL'", 
                            "'DUMP'", "'STATUS'", "'VECTORIZATION'", "'SUMMARY'", 
                            "'OPERATOR'", "'EXPRESSION'", "'DETAIL'", "'WAIT'", 
                            "'RESOURCE'", "'PLAN'", "'QUERY_PARALLELISM'", 
                            "'PLANS'", "'ACTIVATE'", "'DEFAULT'", "'CHECK'", 
                            "'POOL'", "'MOVE'", "'DO'", "'ALLOC_FRACTION'", 
                            "'SCHEDULING_POLICY'", "'PATH'", "'MAPPING'", 
                            "'WORKLOAD'", "'MANAGEMENT'", "'ACTIVE'", "'UNMANAGED'", 
                            "'APPLICATION'", "'SYNC'", "'.'", "':'", "','", 
                            "';'", "'('", "')'", "'['", "']'", "'{'", "'}'", 
                            null, "'<=>'", null, "'<='", "'<'", "'>='", 
                            "'>'", "'/'", "'+'", "'-'", "'*'", "'%'", "'DIV'", 
                            "'&'", "'~'", "'|'", "'||'", "'^'", "'?'", "'$'" ];
    static symbolicNames = [ null, "KW_TRUE", "KW_FALSE", "KW_ALL", "KW_NONE", 
                             "KW_AND", "KW_OR", "KW_NOT", "KW_LIKE", "KW_ANY", 
                             "KW_IF", "KW_EXISTS", "KW_ASC", "KW_DESC", 
                             "KW_NULLS", "KW_LAST", "KW_ORDER", "KW_GROUP", 
                             "KW_BY", "KW_HAVING", "KW_WHERE", "KW_FROM", 
                             "KW_AS", "KW_SELECT", "KW_DISTINCT", "KW_INSERT", 
                             "KW_OVERWRITE", "KW_OUTER", "KW_UNIQUEJOIN", 
                             "KW_PRESERVE", "KW_JOIN", "KW_LEFT", "KW_RIGHT", 
                             "KW_FULL", "KW_ON", "KW_PARTITION", "KW_PARTITIONS", 
                             "KW_TABLE", "KW_TABLES", "KW_COLUMNS", "KW_INDEX", 
                             "KW_INDEXES", "KW_REBUILD", "KW_FUNCTIONS", 
                             "KW_SHOW", "KW_MSCK", "KW_REPAIR", "KW_DIRECTORY", 
                             "KW_LOCAL", "KW_TRANSFORM", "KW_USING", "KW_CLUSTER", 
                             "KW_DISTRIBUTE", "KW_SORT", "KW_UNION", "KW_EXCEPT", 
                             "KW_LOAD", "KW_EXPORT", "KW_IMPORT", "KW_REPLICATION", 
                             "KW_METADATA", "KW_DATA", "KW_INPATH", "KW_IS", 
                             "KW_NULL", "KW_CREATE", "KW_EXTERNAL", "KW_ALTER", 
                             "KW_CHANGE", "KW_COLUMN", "KW_FIRST", "KW_AFTER", 
                             "KW_DESCRIBE", "KW_DROP", "KW_RENAME", "KW_TO", 
                             "KW_COMMENT", "KW_BOOLEAN", "KW_TINYINT", "KW_SMALLINT", 
                             "KW_INT", "KW_BIGINT", "KW_FLOAT", "KW_DOUBLE", 
                             "KW_PRECISION", "KW_DATE", "KW_DATETIME", "KW_TIMESTAMP", 
                             "KW_TIMESTAMPLOCALTZ", "KW_TIME", "KW_ZONE", 
                             "KW_INTERVAL", "KW_DECIMAL", "KW_STRING", "KW_CHAR", 
                             "KW_VARCHAR", "KW_ARRAY", "KW_STRUCT", "KW_MAP", 
                             "KW_UNIONTYPE", "KW_REDUCE", "KW_PARTITIONED", 
                             "KW_CLUSTERED", "KW_SORTED", "KW_INTO", "KW_BUCKETS", 
                             "KW_ROW", "KW_ROWS", "KW_FORMAT", "KW_DELIMITED", 
                             "KW_FIELDS", "KW_TERMINATED", "KW_ESCAPED", 
                             "KW_COLLECTION", "KW_ITEMS", "KW_KEYS", "KW_KEY_TYPE", 
                             "KW_KILL", "KW_LINES", "KW_STORED", "KW_FILEFORMAT", 
                             "KW_INPUTFORMAT", "KW_OUTPUTFORMAT", "KW_INPUTDRIVER", 
                             "KW_OUTPUTDRIVER", "KW_ENABLE", "KW_DISABLE", 
                             "KW_LOCATION", "KW_TABLESAMPLE", "KW_BUCKET", 
                             "KW_OUT", "KW_OF", "KW_PERCENT", "KW_CAST", 
                             "KW_ADD", "KW_REPLACE", "KW_RLIKE", "KW_REGEXP", 
                             "KW_TEMPORARY", "KW_FUNCTION", "KW_MACRO", 
                             "KW_FILE", "KW_JAR", "KW_EXPLAIN", "KW_EXTENDED", 
                             "KW_FORMATTED", "KW_DEPENDENCY", "KW_LOGICAL", 
                             "KW_SERDE", "KW_WITH", "KW_DEFERRED", "KW_SERDEPROPERTIES", 
                             "KW_DBPROPERTIES", "KW_LIMIT", "KW_OFFSET", 
                             "KW_SET", "KW_UNSET", "KW_TBLPROPERTIES", "KW_IDXPROPERTIES", 
                             "KW_VALUE_TYPE", "KW_ELEM_TYPE", "KW_DEFINED", 
                             "KW_CASE", "KW_WHEN", "KW_THEN", "KW_ELSE", 
                             "KW_END", "KW_MAPJOIN", "KW_STREAMTABLE", "KW_CLUSTERSTATUS", 
                             "KW_UTC", "KW_UTCTIMESTAMP", "KW_LONG", "KW_DELETE", 
                             "KW_PLUS", "KW_MINUS", "KW_FETCH", "KW_INTERSECT", 
                             "KW_VIEW", "KW_VIEWS", "KW_IN", "KW_DATABASE", 
                             "KW_DATABASES", "KW_MATERIALIZED", "KW_SCHEMA", 
                             "KW_SCHEMAS", "KW_GRANT", "KW_REVOKE", "KW_SSL", 
                             "KW_UNDO", "KW_LOCK", "KW_LOCKS", "KW_UNLOCK", 
                             "KW_SHARED", "KW_EXCLUSIVE", "KW_PROCEDURE", 
                             "KW_UNSIGNED", "KW_WHILE", "KW_READ", "KW_READS", 
                             "KW_PURGE", "KW_RANGE", "KW_ANALYZE", "KW_BEFORE", 
                             "KW_BETWEEN", "KW_BOTH", "KW_BINARY", "KW_CROSS", 
                             "KW_CONTINUE", "KW_CURSOR", "KW_TRIGGER", "KW_RECORDREADER", 
                             "KW_RECORDWRITER", "KW_SEMI", "KW_LATERAL", 
                             "KW_TOUCH", "KW_ARCHIVE", "KW_UNARCHIVE", "KW_COMPUTE", 
                             "KW_STATISTICS", "KW_USE", "KW_OPTION", "KW_CONCATENATE", 
                             "KW_SHOW_DATABASE", "KW_UPDATE", "KW_RESTRICT", 
                             "KW_CASCADE", "KW_SKEWED", "KW_ROLLUP", "KW_CUBE", 
                             "KW_DIRECTORIES", "KW_FOR", "KW_WINDOW", "KW_UNBOUNDED", 
                             "KW_PRECEDING", "KW_FOLLOWING", "KW_CURRENT", 
                             "KW_CURRENT_DATE", "KW_CURRENT_TIMESTAMP", 
                             "KW_LESS", "KW_MORE", "KW_OVER", "KW_GROUPING", 
                             "KW_SETS", "KW_TRUNCATE", "KW_NOSCAN", "KW_USER", 
                             "KW_ROLE", "KW_ROLES", "KW_INNER", "KW_EXCHANGE", 
                             "KW_URI", "KW_SERVER", "KW_ADMIN", "KW_OWNER", 
                             "KW_PRINCIPALS", "KW_COMPACT", "KW_COMPACTIONS", 
                             "KW_TRANSACTIONS", "KW_REWRITE", "KW_AUTHORIZATION", 
                             "KW_REOPTIMIZATION", "KW_CONF", "KW_VALUES", 
                             "KW_RELOAD", "KW_YEAR", "KW_QUERY", "KW_QUARTER", 
                             "KW_MONTH", "KW_WEEK", "KW_DAY", "KW_DOW", 
                             "KW_HOUR", "KW_MINUTE", "KW_SECOND", "KW_START", 
                             "KW_TRANSACTION", "KW_COMMIT", "KW_ROLLBACK", 
                             "KW_WORK", "KW_ONLY", "KW_WRITE", "KW_ISOLATION", 
                             "KW_LEVEL", "KW_SNAPSHOT", "KW_AUTOCOMMIT", 
                             "KW_CACHE", "KW_PRIMARY", "KW_FOREIGN", "KW_REFERENCES", 
                             "KW_CONSTRAINT", "KW_ENFORCED", "KW_VALIDATE", 
                             "KW_NOVALIDATE", "KW_RELY", "KW_NORELY", "KW_UNIQUE", 
                             "KW_KEY", "KW_ABORT", "KW_EXTRACT", "KW_FLOOR", 
                             "KW_MERGE", "KW_MATCHED", "KW_REPL", "KW_DUMP", 
                             "KW_STATUS", "KW_VECTORIZATION", "KW_SUMMARY", 
                             "KW_OPERATOR", "KW_EXPRESSION", "KW_DETAIL", 
                             "KW_WAIT", "KW_RESOURCE", "KW_PLAN", "KW_QUERY_PARALLELISM", 
                             "KW_PLANS", "KW_ACTIVATE", "KW_DEFAULT", "KW_CHECK", 
                             "KW_POOL", "KW_MOVE", "KW_DO", "KW_ALLOC_FRACTION", 
                             "KW_SCHEDULING_POLICY", "KW_PATH", "KW_MAPPING", 
                             "KW_WORKLOAD", "KW_MANAGEMENT", "KW_ACTIVE", 
                             "KW_UNMANAGED", "KW_APPLICATION", "KW_SYNC", 
                             "DOT", "COLON", "COMMA", "SEMICOLON", "LPAREN", 
                             "RPAREN", "LSQUARE", "RSQUARE", "LCURLY", "RCURLY", 
                             "EQUAL", "EQUAL_NS", "NOTEQUAL", "LESSTHANOREQUALTO", 
                             "LESSTHAN", "GREATERTHANOREQUALTO", "GREATERTHAN", 
                             "DIVIDE", "PLUS", "MINUS", "STAR", "MOD", "DIV", 
                             "AMPERSAND", "TILDE", "BITWISEOR", "CONCATENATE", 
                             "BITWISEXOR", "QUESTION", "DOLLAR", "StringLiteral", 
                             "CharSetLiteral", "IntegralLiteral", "NumberLiteral", 
                             "ByteLengthLiteral", "Number", "Identifier", 
                             "QuotedIdentifier", "CharSetName", "WS", "LINE_COMMENT", 
                             "QUERY_HINT", "SHOW_HINT", "HIDDEN_HINT" ];
    static ruleNames = [ "hint", "hintList", "hintItem", "hintName", "hintArgs", 
                         "hintArgName" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = HintParser.ruleNames;
        this.literalNames = HintParser.literalNames;
        this.symbolicNames = HintParser.symbolicNames;
    }



	hint() {
	    let localctx = new HintContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, HintParser.RULE_hint);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 12;
	        this.hintList();
	        this.state = 13;
	        this.match(HintParser.EOF);
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



	hintList() {
	    let localctx = new HintListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, HintParser.RULE_hintList);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 15;
	        this.hintItem();
	        this.state = 20;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===334) {
	            this.state = 16;
	            this.match(HintParser.COMMA);
	            this.state = 17;
	            this.hintItem();
	            this.state = 22;
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



	hintItem() {
	    let localctx = new HintItemContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, HintParser.RULE_hintItem);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 23;
	        this.hintName();
	        this.state = 28;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===336) {
	            this.state = 24;
	            this.match(HintParser.LPAREN);
	            this.state = 25;
	            this.hintArgs();
	            this.state = 26;
	            this.match(HintParser.RPAREN);
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



	hintName() {
	    let localctx = new HintNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, HintParser.RULE_hintName);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 30;
	        _la = this._input.LA(1);
	        if(!(_la===167 || _la===168 || _la===213)) {
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



	hintArgs() {
	    let localctx = new HintArgsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, HintParser.RULE_hintArgs);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 32;
	        this.hintArgName();
	        this.state = 37;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===334) {
	            this.state = 33;
	            this.match(HintParser.COMMA);
	            this.state = 34;
	            this.hintArgName();
	            this.state = 39;
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



	hintArgName() {
	    let localctx = new HintArgNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, HintParser.RULE_hintArgName);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 40;
	        _la = this._input.LA(1);
	        if(!(_la===4 || _la===367 || _la===368)) {
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

HintParser.EOF = antlr4.Token.EOF;
HintParser.KW_TRUE = 1;
HintParser.KW_FALSE = 2;
HintParser.KW_ALL = 3;
HintParser.KW_NONE = 4;
HintParser.KW_AND = 5;
HintParser.KW_OR = 6;
HintParser.KW_NOT = 7;
HintParser.KW_LIKE = 8;
HintParser.KW_ANY = 9;
HintParser.KW_IF = 10;
HintParser.KW_EXISTS = 11;
HintParser.KW_ASC = 12;
HintParser.KW_DESC = 13;
HintParser.KW_NULLS = 14;
HintParser.KW_LAST = 15;
HintParser.KW_ORDER = 16;
HintParser.KW_GROUP = 17;
HintParser.KW_BY = 18;
HintParser.KW_HAVING = 19;
HintParser.KW_WHERE = 20;
HintParser.KW_FROM = 21;
HintParser.KW_AS = 22;
HintParser.KW_SELECT = 23;
HintParser.KW_DISTINCT = 24;
HintParser.KW_INSERT = 25;
HintParser.KW_OVERWRITE = 26;
HintParser.KW_OUTER = 27;
HintParser.KW_UNIQUEJOIN = 28;
HintParser.KW_PRESERVE = 29;
HintParser.KW_JOIN = 30;
HintParser.KW_LEFT = 31;
HintParser.KW_RIGHT = 32;
HintParser.KW_FULL = 33;
HintParser.KW_ON = 34;
HintParser.KW_PARTITION = 35;
HintParser.KW_PARTITIONS = 36;
HintParser.KW_TABLE = 37;
HintParser.KW_TABLES = 38;
HintParser.KW_COLUMNS = 39;
HintParser.KW_INDEX = 40;
HintParser.KW_INDEXES = 41;
HintParser.KW_REBUILD = 42;
HintParser.KW_FUNCTIONS = 43;
HintParser.KW_SHOW = 44;
HintParser.KW_MSCK = 45;
HintParser.KW_REPAIR = 46;
HintParser.KW_DIRECTORY = 47;
HintParser.KW_LOCAL = 48;
HintParser.KW_TRANSFORM = 49;
HintParser.KW_USING = 50;
HintParser.KW_CLUSTER = 51;
HintParser.KW_DISTRIBUTE = 52;
HintParser.KW_SORT = 53;
HintParser.KW_UNION = 54;
HintParser.KW_EXCEPT = 55;
HintParser.KW_LOAD = 56;
HintParser.KW_EXPORT = 57;
HintParser.KW_IMPORT = 58;
HintParser.KW_REPLICATION = 59;
HintParser.KW_METADATA = 60;
HintParser.KW_DATA = 61;
HintParser.KW_INPATH = 62;
HintParser.KW_IS = 63;
HintParser.KW_NULL = 64;
HintParser.KW_CREATE = 65;
HintParser.KW_EXTERNAL = 66;
HintParser.KW_ALTER = 67;
HintParser.KW_CHANGE = 68;
HintParser.KW_COLUMN = 69;
HintParser.KW_FIRST = 70;
HintParser.KW_AFTER = 71;
HintParser.KW_DESCRIBE = 72;
HintParser.KW_DROP = 73;
HintParser.KW_RENAME = 74;
HintParser.KW_TO = 75;
HintParser.KW_COMMENT = 76;
HintParser.KW_BOOLEAN = 77;
HintParser.KW_TINYINT = 78;
HintParser.KW_SMALLINT = 79;
HintParser.KW_INT = 80;
HintParser.KW_BIGINT = 81;
HintParser.KW_FLOAT = 82;
HintParser.KW_DOUBLE = 83;
HintParser.KW_PRECISION = 84;
HintParser.KW_DATE = 85;
HintParser.KW_DATETIME = 86;
HintParser.KW_TIMESTAMP = 87;
HintParser.KW_TIMESTAMPLOCALTZ = 88;
HintParser.KW_TIME = 89;
HintParser.KW_ZONE = 90;
HintParser.KW_INTERVAL = 91;
HintParser.KW_DECIMAL = 92;
HintParser.KW_STRING = 93;
HintParser.KW_CHAR = 94;
HintParser.KW_VARCHAR = 95;
HintParser.KW_ARRAY = 96;
HintParser.KW_STRUCT = 97;
HintParser.KW_MAP = 98;
HintParser.KW_UNIONTYPE = 99;
HintParser.KW_REDUCE = 100;
HintParser.KW_PARTITIONED = 101;
HintParser.KW_CLUSTERED = 102;
HintParser.KW_SORTED = 103;
HintParser.KW_INTO = 104;
HintParser.KW_BUCKETS = 105;
HintParser.KW_ROW = 106;
HintParser.KW_ROWS = 107;
HintParser.KW_FORMAT = 108;
HintParser.KW_DELIMITED = 109;
HintParser.KW_FIELDS = 110;
HintParser.KW_TERMINATED = 111;
HintParser.KW_ESCAPED = 112;
HintParser.KW_COLLECTION = 113;
HintParser.KW_ITEMS = 114;
HintParser.KW_KEYS = 115;
HintParser.KW_KEY_TYPE = 116;
HintParser.KW_KILL = 117;
HintParser.KW_LINES = 118;
HintParser.KW_STORED = 119;
HintParser.KW_FILEFORMAT = 120;
HintParser.KW_INPUTFORMAT = 121;
HintParser.KW_OUTPUTFORMAT = 122;
HintParser.KW_INPUTDRIVER = 123;
HintParser.KW_OUTPUTDRIVER = 124;
HintParser.KW_ENABLE = 125;
HintParser.KW_DISABLE = 126;
HintParser.KW_LOCATION = 127;
HintParser.KW_TABLESAMPLE = 128;
HintParser.KW_BUCKET = 129;
HintParser.KW_OUT = 130;
HintParser.KW_OF = 131;
HintParser.KW_PERCENT = 132;
HintParser.KW_CAST = 133;
HintParser.KW_ADD = 134;
HintParser.KW_REPLACE = 135;
HintParser.KW_RLIKE = 136;
HintParser.KW_REGEXP = 137;
HintParser.KW_TEMPORARY = 138;
HintParser.KW_FUNCTION = 139;
HintParser.KW_MACRO = 140;
HintParser.KW_FILE = 141;
HintParser.KW_JAR = 142;
HintParser.KW_EXPLAIN = 143;
HintParser.KW_EXTENDED = 144;
HintParser.KW_FORMATTED = 145;
HintParser.KW_DEPENDENCY = 146;
HintParser.KW_LOGICAL = 147;
HintParser.KW_SERDE = 148;
HintParser.KW_WITH = 149;
HintParser.KW_DEFERRED = 150;
HintParser.KW_SERDEPROPERTIES = 151;
HintParser.KW_DBPROPERTIES = 152;
HintParser.KW_LIMIT = 153;
HintParser.KW_OFFSET = 154;
HintParser.KW_SET = 155;
HintParser.KW_UNSET = 156;
HintParser.KW_TBLPROPERTIES = 157;
HintParser.KW_IDXPROPERTIES = 158;
HintParser.KW_VALUE_TYPE = 159;
HintParser.KW_ELEM_TYPE = 160;
HintParser.KW_DEFINED = 161;
HintParser.KW_CASE = 162;
HintParser.KW_WHEN = 163;
HintParser.KW_THEN = 164;
HintParser.KW_ELSE = 165;
HintParser.KW_END = 166;
HintParser.KW_MAPJOIN = 167;
HintParser.KW_STREAMTABLE = 168;
HintParser.KW_CLUSTERSTATUS = 169;
HintParser.KW_UTC = 170;
HintParser.KW_UTCTIMESTAMP = 171;
HintParser.KW_LONG = 172;
HintParser.KW_DELETE = 173;
HintParser.KW_PLUS = 174;
HintParser.KW_MINUS = 175;
HintParser.KW_FETCH = 176;
HintParser.KW_INTERSECT = 177;
HintParser.KW_VIEW = 178;
HintParser.KW_VIEWS = 179;
HintParser.KW_IN = 180;
HintParser.KW_DATABASE = 181;
HintParser.KW_DATABASES = 182;
HintParser.KW_MATERIALIZED = 183;
HintParser.KW_SCHEMA = 184;
HintParser.KW_SCHEMAS = 185;
HintParser.KW_GRANT = 186;
HintParser.KW_REVOKE = 187;
HintParser.KW_SSL = 188;
HintParser.KW_UNDO = 189;
HintParser.KW_LOCK = 190;
HintParser.KW_LOCKS = 191;
HintParser.KW_UNLOCK = 192;
HintParser.KW_SHARED = 193;
HintParser.KW_EXCLUSIVE = 194;
HintParser.KW_PROCEDURE = 195;
HintParser.KW_UNSIGNED = 196;
HintParser.KW_WHILE = 197;
HintParser.KW_READ = 198;
HintParser.KW_READS = 199;
HintParser.KW_PURGE = 200;
HintParser.KW_RANGE = 201;
HintParser.KW_ANALYZE = 202;
HintParser.KW_BEFORE = 203;
HintParser.KW_BETWEEN = 204;
HintParser.KW_BOTH = 205;
HintParser.KW_BINARY = 206;
HintParser.KW_CROSS = 207;
HintParser.KW_CONTINUE = 208;
HintParser.KW_CURSOR = 209;
HintParser.KW_TRIGGER = 210;
HintParser.KW_RECORDREADER = 211;
HintParser.KW_RECORDWRITER = 212;
HintParser.KW_SEMI = 213;
HintParser.KW_LATERAL = 214;
HintParser.KW_TOUCH = 215;
HintParser.KW_ARCHIVE = 216;
HintParser.KW_UNARCHIVE = 217;
HintParser.KW_COMPUTE = 218;
HintParser.KW_STATISTICS = 219;
HintParser.KW_USE = 220;
HintParser.KW_OPTION = 221;
HintParser.KW_CONCATENATE = 222;
HintParser.KW_SHOW_DATABASE = 223;
HintParser.KW_UPDATE = 224;
HintParser.KW_RESTRICT = 225;
HintParser.KW_CASCADE = 226;
HintParser.KW_SKEWED = 227;
HintParser.KW_ROLLUP = 228;
HintParser.KW_CUBE = 229;
HintParser.KW_DIRECTORIES = 230;
HintParser.KW_FOR = 231;
HintParser.KW_WINDOW = 232;
HintParser.KW_UNBOUNDED = 233;
HintParser.KW_PRECEDING = 234;
HintParser.KW_FOLLOWING = 235;
HintParser.KW_CURRENT = 236;
HintParser.KW_CURRENT_DATE = 237;
HintParser.KW_CURRENT_TIMESTAMP = 238;
HintParser.KW_LESS = 239;
HintParser.KW_MORE = 240;
HintParser.KW_OVER = 241;
HintParser.KW_GROUPING = 242;
HintParser.KW_SETS = 243;
HintParser.KW_TRUNCATE = 244;
HintParser.KW_NOSCAN = 245;
HintParser.KW_USER = 246;
HintParser.KW_ROLE = 247;
HintParser.KW_ROLES = 248;
HintParser.KW_INNER = 249;
HintParser.KW_EXCHANGE = 250;
HintParser.KW_URI = 251;
HintParser.KW_SERVER = 252;
HintParser.KW_ADMIN = 253;
HintParser.KW_OWNER = 254;
HintParser.KW_PRINCIPALS = 255;
HintParser.KW_COMPACT = 256;
HintParser.KW_COMPACTIONS = 257;
HintParser.KW_TRANSACTIONS = 258;
HintParser.KW_REWRITE = 259;
HintParser.KW_AUTHORIZATION = 260;
HintParser.KW_REOPTIMIZATION = 261;
HintParser.KW_CONF = 262;
HintParser.KW_VALUES = 263;
HintParser.KW_RELOAD = 264;
HintParser.KW_YEAR = 265;
HintParser.KW_QUERY = 266;
HintParser.KW_QUARTER = 267;
HintParser.KW_MONTH = 268;
HintParser.KW_WEEK = 269;
HintParser.KW_DAY = 270;
HintParser.KW_DOW = 271;
HintParser.KW_HOUR = 272;
HintParser.KW_MINUTE = 273;
HintParser.KW_SECOND = 274;
HintParser.KW_START = 275;
HintParser.KW_TRANSACTION = 276;
HintParser.KW_COMMIT = 277;
HintParser.KW_ROLLBACK = 278;
HintParser.KW_WORK = 279;
HintParser.KW_ONLY = 280;
HintParser.KW_WRITE = 281;
HintParser.KW_ISOLATION = 282;
HintParser.KW_LEVEL = 283;
HintParser.KW_SNAPSHOT = 284;
HintParser.KW_AUTOCOMMIT = 285;
HintParser.KW_CACHE = 286;
HintParser.KW_PRIMARY = 287;
HintParser.KW_FOREIGN = 288;
HintParser.KW_REFERENCES = 289;
HintParser.KW_CONSTRAINT = 290;
HintParser.KW_ENFORCED = 291;
HintParser.KW_VALIDATE = 292;
HintParser.KW_NOVALIDATE = 293;
HintParser.KW_RELY = 294;
HintParser.KW_NORELY = 295;
HintParser.KW_UNIQUE = 296;
HintParser.KW_KEY = 297;
HintParser.KW_ABORT = 298;
HintParser.KW_EXTRACT = 299;
HintParser.KW_FLOOR = 300;
HintParser.KW_MERGE = 301;
HintParser.KW_MATCHED = 302;
HintParser.KW_REPL = 303;
HintParser.KW_DUMP = 304;
HintParser.KW_STATUS = 305;
HintParser.KW_VECTORIZATION = 306;
HintParser.KW_SUMMARY = 307;
HintParser.KW_OPERATOR = 308;
HintParser.KW_EXPRESSION = 309;
HintParser.KW_DETAIL = 310;
HintParser.KW_WAIT = 311;
HintParser.KW_RESOURCE = 312;
HintParser.KW_PLAN = 313;
HintParser.KW_QUERY_PARALLELISM = 314;
HintParser.KW_PLANS = 315;
HintParser.KW_ACTIVATE = 316;
HintParser.KW_DEFAULT = 317;
HintParser.KW_CHECK = 318;
HintParser.KW_POOL = 319;
HintParser.KW_MOVE = 320;
HintParser.KW_DO = 321;
HintParser.KW_ALLOC_FRACTION = 322;
HintParser.KW_SCHEDULING_POLICY = 323;
HintParser.KW_PATH = 324;
HintParser.KW_MAPPING = 325;
HintParser.KW_WORKLOAD = 326;
HintParser.KW_MANAGEMENT = 327;
HintParser.KW_ACTIVE = 328;
HintParser.KW_UNMANAGED = 329;
HintParser.KW_APPLICATION = 330;
HintParser.KW_SYNC = 331;
HintParser.DOT = 332;
HintParser.COLON = 333;
HintParser.COMMA = 334;
HintParser.SEMICOLON = 335;
HintParser.LPAREN = 336;
HintParser.RPAREN = 337;
HintParser.LSQUARE = 338;
HintParser.RSQUARE = 339;
HintParser.LCURLY = 340;
HintParser.RCURLY = 341;
HintParser.EQUAL = 342;
HintParser.EQUAL_NS = 343;
HintParser.NOTEQUAL = 344;
HintParser.LESSTHANOREQUALTO = 345;
HintParser.LESSTHAN = 346;
HintParser.GREATERTHANOREQUALTO = 347;
HintParser.GREATERTHAN = 348;
HintParser.DIVIDE = 349;
HintParser.PLUS = 350;
HintParser.MINUS = 351;
HintParser.STAR = 352;
HintParser.MOD = 353;
HintParser.DIV = 354;
HintParser.AMPERSAND = 355;
HintParser.TILDE = 356;
HintParser.BITWISEOR = 357;
HintParser.CONCATENATE = 358;
HintParser.BITWISEXOR = 359;
HintParser.QUESTION = 360;
HintParser.DOLLAR = 361;
HintParser.StringLiteral = 362;
HintParser.CharSetLiteral = 363;
HintParser.IntegralLiteral = 364;
HintParser.NumberLiteral = 365;
HintParser.ByteLengthLiteral = 366;
HintParser.Number = 367;
HintParser.Identifier = 368;
HintParser.QuotedIdentifier = 369;
HintParser.CharSetName = 370;
HintParser.WS = 371;
HintParser.LINE_COMMENT = 372;
HintParser.QUERY_HINT = 373;
HintParser.SHOW_HINT = 374;
HintParser.HIDDEN_HINT = 375;

HintParser.RULE_hint = 0;
HintParser.RULE_hintList = 1;
HintParser.RULE_hintItem = 2;
HintParser.RULE_hintName = 3;
HintParser.RULE_hintArgs = 4;
HintParser.RULE_hintArgName = 5;

class HintContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HintParser.RULE_hint;
    }

	hintList() {
	    return this.getTypedRuleContext(HintListContext,0);
	};

	EOF() {
	    return this.getToken(HintParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof HintParserListener ) {
	        listener.enterHint(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HintParserListener ) {
	        listener.exitHint(this);
		}
	}


}



class HintListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HintParser.RULE_hintList;
    }

	hintItem = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(HintItemContext);
	    } else {
	        return this.getTypedRuleContext(HintItemContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(HintParser.COMMA);
	    } else {
	        return this.getToken(HintParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof HintParserListener ) {
	        listener.enterHintList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HintParserListener ) {
	        listener.exitHintList(this);
		}
	}


}



class HintItemContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HintParser.RULE_hintItem;
    }

	hintName() {
	    return this.getTypedRuleContext(HintNameContext,0);
	};

	LPAREN() {
	    return this.getToken(HintParser.LPAREN, 0);
	};

	hintArgs() {
	    return this.getTypedRuleContext(HintArgsContext,0);
	};

	RPAREN() {
	    return this.getToken(HintParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof HintParserListener ) {
	        listener.enterHintItem(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HintParserListener ) {
	        listener.exitHintItem(this);
		}
	}


}



class HintNameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HintParser.RULE_hintName;
    }

	KW_MAPJOIN() {
	    return this.getToken(HintParser.KW_MAPJOIN, 0);
	};

	KW_SEMI() {
	    return this.getToken(HintParser.KW_SEMI, 0);
	};

	KW_STREAMTABLE() {
	    return this.getToken(HintParser.KW_STREAMTABLE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof HintParserListener ) {
	        listener.enterHintName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HintParserListener ) {
	        listener.exitHintName(this);
		}
	}


}



class HintArgsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HintParser.RULE_hintArgs;
    }

	hintArgName = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(HintArgNameContext);
	    } else {
	        return this.getTypedRuleContext(HintArgNameContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(HintParser.COMMA);
	    } else {
	        return this.getToken(HintParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof HintParserListener ) {
	        listener.enterHintArgs(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HintParserListener ) {
	        listener.exitHintArgs(this);
		}
	}


}



class HintArgNameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HintParser.RULE_hintArgName;
    }

	Identifier() {
	    return this.getToken(HintParser.Identifier, 0);
	};

	Number() {
	    return this.getToken(HintParser.Number, 0);
	};

	KW_NONE() {
	    return this.getToken(HintParser.KW_NONE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof HintParserListener ) {
	        listener.enterHintArgName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HintParserListener ) {
	        listener.exitHintArgName(this);
		}
	}


}




HintParser.HintContext = HintContext; 
HintParser.HintListContext = HintListContext; 
HintParser.HintItemContext = HintItemContext; 
HintParser.HintNameContext = HintNameContext; 
HintParser.HintArgsContext = HintArgsContext; 
HintParser.HintArgNameContext = HintArgNameContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
