// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/sql/teradata/TeradataSQLNonReservedWordsParser.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import TeradataSQLNonReservedWordsParserListener from './TeradataSQLNonReservedWordsParserListener.js';
const serializedATN = [4,1,1233,5,2,0,7,0,1,0,1,0,1,0,0,0,1,0,0,1,1,0,488,
1192,3,0,2,1,0,0,0,2,3,7,0,0,0,3,1,1,0,0,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class TeradataSQLNonReservedWordsParser extends antlr4.Parser {

    static grammarFileName = "TeradataSQLNonReservedWordsParser.g4";
    static literalNames = [ null, "'ABORT'", "'ABORTSESSION'", "'ABS'", 
                            "'ACCESS_LOCK'", "'ACCOUNT'", "'ACOS'", "'ACOSH'", 
                            "'ADD'", "'ADD_MONTHS'", "'ADMIN'", "'AFTER'", 
                            "'AGGREGATE'", "'ALL'", "'ALTER'", "'AMP'", 
                            "'AND'", "'ANSIDATE'", "'ANY'", "'ARGLPAREN'", 
                            "'AS'", "'ASC'", "'ASIN'", "'ASINH'", "'AT'", 
                            "'ATAN'", "'ATAN2'", "'ATANH'", "'ATOMIC'", 
                            "'AUTHORIZATION'", "'AVE'", "'AVERAGE'", "'AVG'", 
                            "'BEFORE'", "'BEGIN'", "'BETWEEN'", "'BIGINT'", 
                            "'BINARY'", "'BLOB'", "'BOTH'", "'BT'", "'BUT'", 
                            "'BY'", "'BYTE'", "'BYTEINT'", "'BYTES'", "'CALL'", 
                            "'CASE'", "'CASE_N'", "'CASESPECIFIC'", "'CAST'", 
                            "'CD'", "'CHAR'", "'CHAR_LENGTH'", "'CHAR2HEXINT'", 
                            "'CHARACTER'", "'CHARACTER_LENGTH'", "'CHARACTERS'", 
                            "'CHARS'", "'CHECK'", "'CHECKPOINT'", "'CLASS'", 
                            "'CLOB'", "'CLOSE'", "'CLUSTER'", "'CM'", "'COALESCE'", 
                            "'COLLATION'", "'COLLECT'", "'COLUMN'", "'COMMENT'", 
                            "'COMMIT'", "'COMPRESS'", "'CONNECT'", "'CONSTRAINT'", 
                            "'CONSTRUCTOR'", "'CONSUME'", "'CONTAINS'", 
                            "'CONTINUE'", "'CONVERT_TABLE_HEADER'", "'CORR'", 
                            "'COS'", "'COSH'", "'COUNT'", "'COVAR_POP'", 
                            "'COVAR_SAMP'", "'CREATE'", "'CROSS'", "'CS'", 
                            "'CSUM'", "'CT'", "'CTCONTROL'", "'CUBE'", "'CURRENT'", 
                            "'CURRENT_DATE'", "'CURRENT_ROLE'", "'CURRENT_TIME'", 
                            "'CURRENT_TIMESTAMP'", "'CURRENT_USER'", "'CURSOR'", 
                            "'CV'", "'CYCLE'", "'DATABASE'", "'DATABLOCKSIZE'", 
                            "'DATE'", "'DATEFORM'", "'DAY'", "'DEALLOCATE'", 
                            "'DEC'", "'DECIMAL'", "'DECLARE'", "'DEFAULT'", 
                            "'DEFERRED'", "'DEGREES'", "'DEL'", "'DELETE'", 
                            "'DESC'", "'DETERMINISTIC'", "'DIAGNOSTIC'", 
                            "'DICTIONARY'", "'DISABLED'", "'DISTINCT'", 
                            "'DO'", "'DOMAIN'", "'DOUBLE'", "'DROP'", "'DUAL'", 
                            "'DUMP'", "'DYNAMIC'", "'EACH'", "'ECHO'", "'ELSE'", 
                            "'ELSEIF'", "'ENABLED'", "'END'", "'EQ'", "'EQUALS'", 
                            "'ERROR'", "'ERRORFILES'", "'ERRORTABLES'", 
                            "'ESCAPE'", "'ET'", "'EXCEPT'", "'EXEC'", "'EXECUTE'", 
                            "'EXISTS'", "'EXIT'", "'EXP'", "'EXPAND'", "'EXPANDING'", 
                            "'EXPLAIN'", "'EXTERNAL'", "'EXTRACT'", "'FALLBACK'", 
                            "'FASTEXPORT'", "'FETCH'", "'FIRST'", "'FLOAT'", 
                            "'FLUSH'", "'FOR'", "'FOREIGN'", "'FORMAT'", 
                            "'FOUND'", "'FREESPACE'", "'FROM'", "'FULL'", 
                            "'FUNCTION'", "'FUNCTIONDESCRIPTOR'", "'GE'", 
                            "'GENERATED'", "'GET'", "'GIVE'", "'GRANT'", 
                            "'GRAPHIC'", "'GROUP'", "'GROUPING'", "'GT'", 
                            "'HANDLER'", "'HASH'", "'HASHAMP'", "'HASHBAKAMP'", 
                            "'HASHBUCKET'", "'HASHROW'", "'HAVING'", "'HELP'", 
                            "'HOUR'", "'ID2BIGINT'", "'IDENTITY'", "'IF'", 
                            "'IMMEDIATE'", "'IN'", "'INCONSISTENT'", "'INDEX'", 
                            "'INITIATE'", "'INNER'", "'INOUT'", "'INPUT'", 
                            "'INS'", "'INSERT'", "'INSTANCE'", "'INSTEAD'", 
                            "'INT'", "'INTEGER'", "'INTEGERDATE'", "'INTERSECT'", 
                            "'INTERVAL'", "'INTO'", "'IS'", "'ITERATE'", 
                            "'JAR'", "'JOIN'", "'JOURNAL'", "'KEY'", "'KURTOSIS'", 
                            "'LANGUAGE'", "'LARGE'", "'LE'", "'LEADING'", 
                            "'LEAVE'", "'LEFT'", "'LIKE'", "'LIMIT'", "'LN'", 
                            "'LOADING'", "'LOCAL'", "'LOCATOR'", "'LOCK'", 
                            "'LOCKING'", "'LOG'", "'LOGGING'", "'LOGON'", 
                            "'LONG'", "'LOOP'", "'LOWER'", "'LT'", "'MACRO'", 
                            "'MAP'", "'MAVG'", "'MAX'", "'MAXIMUM'", "'MCHARACTERS'", 
                            "'MDIFF'", "'MERGE'", "'METHOD'", "'MIN'", "'MINDEX'", 
                            "'MINIMUM'", "'MINUS'", "'MINUTE'", "'MLINREG'", 
                            "'MLOAD'", "'MOD'", "'MODE'", "'MODIFIES'", 
                            "'MODIFY'", "'MONITOR'", "'MONRESOURCE'", "'MONSESSION'", 
                            "'MONTH'", "'MSUBSTR'", "'MSUM'", "'MULTISET'", 
                            "'NAMED'", "'NATURAL'", "'NE'", "'NEW'", "'NEW_TABLE'", 
                            "'NEXT'", "'NO'", "'NONE'", "'NONTEMPORAL'", 
                            "'NORMALIZE'", "'NOT'", "'NOWAIT'", "'NULL'", 
                            "'NULLIF'", "'NULLIFZERO'", "'NUMBER'", "'NUMERIC'", 
                            "'OBJECT'", "'OBJECTS'", "'OCTET_LENGTH'", "'OF'", 
                            "'OFF'", "'OLD'", "'OLD_TABLE'", "'ON'", "'ONLY'", 
                            "'OPEN'", "'OPTION'", "'OR'", "'ORDER'", "'ORDERING'", 
                            "'OUT'", "'OUTER'", "'OVER'", "'OVERLAPS'", 
                            "'OVERRIDE'", "'PARAMETER'", "'PASSWORD'", "'PERCENT'", 
                            "'PERCENT_RANK'", "'PERM'", "'PERMANENT'", "'POSITION'", 
                            "'PRECISION'", "'PREPARE'", "'PRESERVE'", "'PRIMARY'", 
                            "'PRIVILEGES'", "'PROCEDURE'", "'PROFILE'", 
                            "'PROTECTION'", "'PUBLIC'", "'QUALIFIED'", "'QUALIFY'", 
                            "'QUANTILE'", "'QUEUE'", "'RADIANS'", "'RANDOM'", 
                            "'RANGE_N'", "'RANK'", "'READS'", "'REAL'", 
                            "'RECURSIVE'", "'REFERENCES'", "'REFERENCING'", 
                            "'REGR_AVGX'", "'REGR_AVGY'", "'REGR_COUNT'", 
                            "'REGR_INTERCEPT'", "'REGR_R2'", "'REGR_SLOPE'", 
                            "'REGR_SXX'", "'REGR_SXY'", "'REGR_SYY'", "'RELATIVE'", 
                            "'RELEASE'", "'RENAME'", "'REPEAT'", "'REPLACE'", 
                            "'REPLCONTROL'", "'REPLICATION'", "'REQUEST'", 
                            "'RESIGNAL'", "'RESTART'", "'RESTORE'", "'RESULT'", 
                            "'RESUME'", "'RET'", "'RETRIEVE'", "'RETURN'", 
                            "'RETURNS'", "'REVALIDATE'", "'REVOKE'", "'RIGHT'", 
                            "'RIGHTS'", "'ROLE'", "'ROLLBACK'", "'ROLLFORWARD'", 
                            "'ROLLUP'", "'ROW'", "'ROW_NUMBER'", "'ROWID'", 
                            "'ROWS'", "'SAMPLE'", "'SAMPLEID'", "'SCROLL'", 
                            "'SECOND'", "'SEL'", "'SELECT'", "'SESSION'", 
                            "'SET'", "'SETRESRATE'", "'SETS'", "'SETSESSRATE'", 
                            "'SHOW'", "'SIGNAL'", "'SIN'", "'SINH'", "'SKEW'", 
                            "'SMALLINT'", "'SOME'", "'SOUNDEX'", "'SPECIFIC'", 
                            "'SPOOL'", "'SQL'", "'SQLEXCEPTION'", "'SQLTEXT'", 
                            "'SQLWARNING'", "'SQRT'", "'SS'", "'START'", 
                            "'STARTUP'", "'STATEMENT'", "'STATISTICS'", 
                            "'STDDEV_POP'", "'STDDEV_SAMP'", "'STEPINFO'", 
                            "'STRING_CS'", "'SUBSCRIBER'", "'SUBSTR'", "'SUBSTRING'", 
                            "'SUM'", "'SUMMARY'", "'SUSPEND'", "'TABLE'", 
                            "'TAN'", "'TANH'", "'TBL_CS'", "'TD_ANYTYPE'", 
                            "'TD_AUTHID'", "'TD_HOST'", "'TD_ROWLOADID'", 
                            "'TD_ROWREVISION'", "'TD_ROWSIZE'", "'TD_VALIST'", 
                            "'TEMPORARY'", "'TERMINATE'", "'THEN'", "'THRESHOLD'", 
                            "'TIME'", "'TIMESTAMP'", "'TIMEZONE_HOUR'", 
                            "'TIMEZONE_MINUTE'", "'TITLE'", "'TO'", "'TOP'", 
                            "'TRACE'", "'TRAILING'", "'TRANSACTION'", "'TRANSACTIONTIME'", 
                            "'TRANSFORM'", "'TRANSLATE'", "'TRANSLATE_CHK'", 
                            "'TRIGGER'", "'TRIM'", "'TYPE'", "'UC'", "'UDTCASTAS'", 
                            "'UDTCASTLPAREN'", "'UDTMETHOD'", "'UDTTYPE'", 
                            "'UDTUSAGE'", "'UESCAPE'", "'UNDEFINED'", "'UNDO'", 
                            "'UNION'", "'UNIQUE'", "'UNTIL'", "'UNTIL_CHANGED'", 
                            "'UNTIL_CLOSED'", "'UPD'", "'UPDATE'", "'UPPER'", 
                            "'UPPERCASE'", "'USER'", "'USING'", "'VALIDTIME'", 
                            "'VALUE'", "'VALUES'", "'VAR_POP'", "'VAR_SAMP'", 
                            "'VARBYTE'", "'VARCHAR'", "'VARGRAPHIC'", "'VARIANT_TYPE'", 
                            "'VARYING'", "'VIEW'", "'VOLATILE'", "'WHEN'", 
                            "'WHERE'", "'WHILE'", "'WIDTH_BUCKET'", "'WITH'", 
                            "'WITHOUT'", "'WORK'", "'XMLPLAN'", "'YEAR'", 
                            "'ZEROIFNULL'", "'ZONE'", "'ALIAS'", "'DESCRIPTOR'", 
                            "'GO'", "'GOTO'", "'INDICATOR'", "'PRIVATE'", 
                            "'WAIT'", "'AbortSessions'", "'ABSENT'", "'ACCESS'", 
                            "'ACCORDING'", "'ACCUMULATE'", "'AG'", "'AggGeomIntersection'", 
                            "'AggGeomUnion'", "'ALLDBQL'", "'ALLOCATE'", 
                            "'ALLOCATION'", "'ALLOW'", "'ALLPARAMS'", "'ALLTDWM'", 
                            "'ALWAYS'", "'AMPCOUNT'", "'ANALYSIS'", "'ANCHOR'", 
                            "'ANCHOR_HOUR'", "'ANCHOR_MILLISECOND'", "'ANCHOR_MINUTE'", 
                            "'ANCHOR_SECOND'", "'APPLNAME'", "'ARCHIVE'", 
                            "'ARRAY'", "'ARRAY_ADD'", "'ARRAY_AGG'", "'ARRAY_AVG'", 
                            "'ARRAY_COMPARE'", "'ARRAY_CONCAT'", "'ARRAY_COUNT_DISTINCT'", 
                            "'ARRAY_DIV'", "'ARRAY_EQ'", "'ARRAY_GE'", "'ARRAY_GET'", 
                            "'ARRAY_GT'", "'ARRAY_LE'", "'ARRAY_LT'", "'ARRAY_MAX'", 
                            "'ARRAY_MIN'", "'ARRAY_MOD'", "'ARRAY_MUL'", 
                            "'ARRAY_NE'", "'ARRAY_SUB'", "'ARRAY_SUM'", 
                            "'ARRAY_UPDATE'", "'ARRAY_UPDATE_STRIDE'", "'ASCII'", 
                            "'ASSIGNMENT'", "'ATTR'", "'ATTRIBUTE'", "'ATTRIBUTES'", 
                            "'ATTRIBUTION'", "'ATTRS'", "'AUTH'", "'AUTO'", 
                            "'AUTOTEMP'", "'AVRO'", "'BIT_LENGTH'", "'BITAND'", 
                            "'BITNOT'", "'BITOR'", "'BITXOR'", "'BLOCKCOMPRESSION'", 
                            "'BLOCKCOMPRESSIONALGORITHM'", "'BLOCKCOMPRESSIONLEVEL'", 
                            "'BOM'", "'BOTTOM'", "'BSON'", "'C'", "'CALENDAR'", 
                            "'CALLED'", "'CALLER'", "'camset'", "'camset_l'", 
                            "'CAPTURE'", "'CARDINALITY'", "'CEIL'", "'CEILING'", 
                            "'CHANGERATE'", "'CHARACTERISTICS'", "'CHARSET'", 
                            "'CHARSET_COLL'", "'CHECKSUM'", "'CHR'", "'CLASS_ORIGIN'", 
                            "'CLICKLAG'", "'CLIENT'", "'CNT'", "'COLOCATE'", 
                            "'COLUMNMETA'", "'COLUMNS'", "'COLUMNSPERINDEX'", 
                            "'COLUMNSPERJOININDEX'", "'COMMAND_FUNCTION'", 
                            "'COMMAND_FUNCTION_CODE'", "'COMPARISON'", "'COMPILE'", 
                            "'CONCAT'", "'CONCURRENT'", "'CONDITION'", "'CONDITION_IDENTIFIER'", 
                            "'CONDITION_NUMBER'", "'CONTAINED'", "'CONTAINEDTOKEN'", 
                            "'CONTENT'", "'CONTIGUOUS'", "'COST'", "'COSTS'", 
                            "'COUNTSET'", "'CPP'", "'CPUTIME'", "'CPUTIMENORM'", 
                            "'CREATEDATASET'", "'CREATOR'", "'CUME_DIST'", 
                            "'CURDATE'", "'CURTIME'", "'DATA'", "'DATASET'", 
                            "'day_of_calendar'", "'day_of_month'", "'day_of_week'", 
                            "'day_of_year'", "'DayNumber_Of_Calendar'", 
                            "'DayNumber_Of_Month'", "'DayNumber_Of_Week'", 
                            "'DayNumber_Of_Year'", "'DayOccurrence_Of_Month'", 
                            "'DBA'", "'DBC'", "'DEBUG'", "'decamset'", "'decamset_l'", 
                            "'DECODE'", "'DECOMPRESS'", "'DEFINER'", "'DELIMITER'", 
                            "'DELTA_T'", "'DEMOGRAPHICS'", "'DENIALS'", 
                            "'DENSE'", "'DENSE_RANK'", "'DESCRIBE'", "'DETAILED'", 
                            "'DIAGNOSTICS'", "'DIGITS'", "'DIMENSION'", 
                            "'DOCUMENT'", "'DOT'", "'DOWN'", "'DR'", "'DUPCOUNT'", 
                            "'DUPCOUNTCUM'", "'EBCDIC'", "'EDITDISTANCE'", 
                            "'ELAPSEDSEC'", "'ELAPSEDTIME'", "'ELEMENT'", 
                            "'ELZS_H'", "'EMITNULL'", "'EMPTY'", "'EMPTY_BLOB'", 
                            "'EMPTY_CLOB'", "'ENCODE'", "'ENCODING'", "'ENCRYPT'", 
                            "'ERRORS'", "'ERRORTBL'", "'EVENTCOLUMN'", "'EXCEPTION'", 
                            "'EXCL'", "'EXCLUDE'", "'EXCLUDING'", "'EXCLUSIVE'", 
                            "'EXPIRE'", "'EXPORT'", "'EXPORTWIDTH'", "'FALSE'", 
                            "'FEATUREINFO'", "'FILE'", "'FILL'", "'FILTER'", 
                            "'FINAL'", "'FIRST_NOTNULL'", "'FIRST_VALUE'", 
                            "'FLOOR'", "'FOLLOWING'", "'FOREIGNFUNCTION'", 
                            "'FORTOKEN'", "'FRIDAY'", "'FROM_BYTES'", "'FUNCTIONPARAMETER'", 
                            "'G'", "'GETBIT'", "'GetPSFVersion'", "'GetQueryBand'", 
                            "'GetQueryBandValue'", "'GetTimeZoneDisplacement'", 
                            "'GLOBAL'", "'GLOP'", "'Greatest'", "'HIGH'", 
                            "'HOST'", "'IdentifyDatabase'", "'IdentifySession'", 
                            "'IdentifyTable'", "'IdentifyUser'", "'IFP'", 
                            "'IGNORE'", "'IMMEDIATELY'", "'IMPORT'", "'INCLUDE'", 
                            "'INCLUDING'", "'INCREMENT'", "'INCREMENTAL'", 
                            "'INDENT'", "'INDEXESPERTABLE'", "'INDEXMAINTMODE'", 
                            "'INIT'", "'INITCAP'", "'INLINE'", "'INSTANTIABLE'", 
                            "'INSTR'", "'INTERNAL'", "'INVOKER'", "'IOCOUNT'", 
                            "'IPARTITION'", "'ISOLATED'", "'ISOLATION'", 
                            "'JAVA'", "'JIS_COLL'", "'JSON'", "'JSON_AGG'", 
                            "'JSON_COMPOSE'", "'K'", "'KANJI1'", "'KANJISJIS'", 
                            "'KBYTE'", "'KBYTES'", "'KEEP'", "'KILOBYTES'", 
                            "'LAG'", "'LAST'", "'Last_Day'", "'LAST_NOTNULL'", 
                            "'LAST_VALUE'", "'LATIN'", "'LDIFF'", "'LEAD'", 
                            "'Least'", "'LENGTH'", "'LEVEL'", "'LIST'", 
                            "'LOAD'", "'LOCATE'", "'LOCKEDUSEREXPIRE'", 
                            "'LOW'", "'LPAD'", "'LTRIM'", "'lzcomp'", "'lzcomp_L'", 
                            "'lzdecomp'", "'lzdecomp_L'", "'M'", "'MAD'", 
                            "'MANUAL'", "'MAPPING'", "'MATCHED'", "'MAX_CHOOSE'", 
                            "'MAXCHAR'", "'MAXINTERVALS'", "'MAXLOGONATTEMPTS'", 
                            "'MAXVALUE'", "'MAXVALUELENGTH'", "'MEDIAN'", 
                            "'MEDIUM'", "'MEETS'", "'MEMBER'", "'MERGEBLOCKRATIO'", 
                            "'MESSAGE_LENGTH'", "'MESSAGE_TEXT'", "'MIN_CHOOSE'", 
                            "'MINCHAR'", "'MINVALUE'", "'MODIFIED'", "'MONDAY'", 
                            "'MonitorQueryBand'", "'MonitorSessionRate'", 
                            "'MonitorVersion'", "'MONTH_BEGIN'", "'MONTH_END'", 
                            "'month_of_calendar'", "'month_of_quarter'", 
                            "'month_of_year'", "'MonthNumber_Of_Calendar'", 
                            "'MonthNumber_Of_Quarter'", "'MonthNumber_Of_Year'", 
                            "'Months_Between'", "'MORE'", "'MULTINATIONAL'", 
                            "'NAME'", "'NAMESPACE'", "'NEVER'", "'NEXT_DAY'", 
                            "'NGRAM'", "'NIL'", "'NODDLTEXT'", "'NODE'", 
                            "'NONOPTCOST'", "'NONOPTINIT'", "'NONSEQUENCED'", 
                            "'NORIGHT'", "'NOSEXTRACTVARFROMPATH'", "'NOTATION'", 
                            "'NOW'", "'NPATH'", "'NTH'", "'NULLS'", "'NUMFPFNS'", 
                            "'NUMTODSINTERVAL'", "'NUMTOYMINTERVAL'", "'nvl'", 
                            "'nvl2'", "'NVP'", "'OA'", "'OAdd_Months'", 
                            "'OCOUNT'", "'ODELETE'", "'OEXISTS'", "'OEXTEND'", 
                            "'OFIRST'", "'OLAST'", "'OLD_NEW_TABLE'", "'OLIMIT'", 
                            "'ONEXT'", "'ONLINE'", "'OPRIOR'", "'OPTIONS'", 
                            "'ORDERBYVALUES'", "'ORDERED_ANALYTIC'", "'ORDINALITY'", 
                            "'OREPLACE'", "'OTRANSLATE'", "'OTRIM'", "'OVERLAYS'", 
                            "'OWNER'", "'P_INTERSECT'", "'P_NORMALIZE'", 
                            "'PARAMID'", "'PARAMINFO'", "'PARENT'", "'PARTITION'", 
                            null, "'PARTITIONED'", "'PARTITIONNAMES'", "'PASS'", 
                            "'PASSING'", "'PATH_GENERATOR'", "'PATH_START'", 
                            "'PATH_SUMMARIZER'", "'PATTERN'", "'PERCENTILE'", 
                            "'PERCENTILE_CONT'", "'PERCENTILE_DISC'", "'PERIOD'", 
                            "'PIVOT'", "'PORTION'", "'POWER'", "'PRECEDES'", 
                            "'PRECEDING'", "'PREFIX'", "'PRINT'", "'PRIOR'", 
                            "'PROTECTED'", "'QUARTER_BEGIN'", "'QUARTER_END'", 
                            "'quarter_of_calendar'", "'quarter_of_year'", 
                            "'QuarterNumber_Of_Calendar'", "'QuarterNumber_Of_Year'", 
                            "'QUERY'", "'QUERY_BAND'", "'QUOTECHAR'", "'RANDOMIZED'", 
                            "'RANGE'", null, "'RAPIDFIRE'", "'RDIFF'", "'READ'", 
                            "'RECALC'", "'regexp_instr'", "'regexp_replace'", 
                            "'regexp_similar'", "'regexp_substr'", "'REPLACEMENT'", 
                            "'RESET'", "'RESPECT'", "'RESTRICTWORDS'", "'RETAIN'", 
                            "'RETURNED_SQLSTATE'", "'RETURNING'", "'REUSE'", 
                            "'ROOT'", "'ROTATELEFT'", "'ROTATERIGHT'", "'Round'", 
                            "'ROW_COUNT'", "'ROWIDGEN'", "'ROWIDGEN2'", 
                            "'RPAD'", "'RTRIM'", "'RU'", "'RULES'", "'RULESET'", 
                            "'SAMPLES'", "'SATURDAY'", "'SCHEMA'", "'SCRIPT'", 
                            "'SCRIPT_COMMAND'", "'SEARCHSPACE'", "'SEARCHUIFDBPATH'", 
                            "'SECURITY'", "'SEED'", "'SELF'", "'SEQ'", "'SEQUENCE'", 
                            "'SEQUENCED'", "'SERIALIZABLE'", "'SERVER'", 
                            "'SESSIONIZE'", "'SETBIT'", "'SetResourceRate'", 
                            "'SetSessionAccount'", "'SetSessionRate'", "'SHARE'", 
                            "'SHIFTLEFT'", "'SHIFTRIGHT'", "'SIGN'", "'SIZE'", 
                            "'SNAPPY_COMPRESS'", "'SNAPPY_DECOMPRESS'", 
                            "'SOURCE'", "'SPARSE'", "'SPECCHAR'", "'SPL'", 
                            "'SQLSTATE'", "'SR'", "'ST_GEOMETRY'", "'STAT'", 
                            "'STATIC'", "'STATS'", "'STATSUSAGE'", "'STORAGE'", 
                            "'STRIP'", "'STRTOK'", "'STYLE'", "'SUBBITSTR'", 
                            "'SUBCLASS_ORIGIN'", "'SUCCEEDS'", "'SUMMARYONLY'", 
                            "'SUNDAY'", "'SYMBOLS'", "'SYSTEM'", "'SYSTEM_TIME'", 
                            "'SYSTEMTEST'", "'TARGET'", "'TD_ARRAY2P'", 
                            "'TD_DATASET'", "'td_day_of_calendar'", "'td_day_of_month'", 
                            "'td_day_of_week'", "'td_day_of_year'", "'TD_GENERAL'", 
                            "'TD_GETTIMEBUCKET'", "'TD_INTERNAL'", "'TD_LZ_COMPRESS'", 
                            "'TD_LZ_DECOMPRESS'", "'td_month_of_calendar'", 
                            "'td_month_of_quarter'", "'td_month_of_year'", 
                            "'td_quarter_of_calendar'", "'td_quarter_of_year'", 
                            "'TD_TIME_BUCKET_NUMBER'", "'td_week_of_calendar'", 
                            "'td_week_of_month'", "'td_week_of_year'", "'td_weekday_of_month'", 
                            "'td_year_of_calendar'", "'TDWMEVENT'", "'TDWMEXCEPTION'", 
                            "'TDWMHISTORY'", "'TEMPORAL_DATE'", "'TEMPORAL_TIMESTAMP'", 
                            "'TEXT'", "'THRESHOLDPERCENT'", "'THROUGH'", 
                            "'THURSDAY'", "'TIES'", "'TIMECODE'", "'TIMECOLUMN'", 
                            "'TIMEOUT'", "'TIMESTAMPCOLUMN'", "'TO_BYTE'", 
                            "'TO_BYTES'", "'TO_CHAR'", "'TO_DATE'", "'TO_DSINTERVAL'", 
                            "'TO_NUMBER'", "'TO_TIMESTAMP'", "'TO_TIMESTAMP_TZ'", 
                            "'TO_YMINTERVAL'", "'TOTOKEN'", "'TPA'", "'TRANSACTION_ACTIVE'", 
                            "'TransUnicodeToUTF8'", "'TransUTF8ToUnicode'", 
                            "'TRUE'", "'Trunc'", "'TRUST_ONLY'", "'TTGRANULARITY'", 
                            "'TUESDAY'", "'UBJSON'", "'UCASE'", "'UDFSEARCHPATH'", 
                            "'UNBOUNDED'", "'UNCOMMITTED'", "'UNICODE'", 
                            "'UNKNOWN'", "'UNPIVOT'", "'USE'", "'USECOUNT'", 
                            "'UTILITYINFO'", "'VARRAY'", "'VERBOSE'", "'VERSION'", 
                            "'VERSIONING'", "'WARNING'", "'WEDNESDAY'", 
                            "'WEEK_BEGIN'", "'WEEK_END'", "'week_of_calendar'", 
                            "'week_of_month'", "'week_of_year'", "'weekday_of_month'", 
                            "'WeekNumber_Of_Calendar'", "'WeekNumber_Of_Month'", 
                            "'WeekNumber_Of_Quarter'", "'WeekNumber_Of_Year'", 
                            "'WHITESPACE'", "'WINDOWSIZE'", "'WITHIN'", 
                            "'WORKLOAD'", "'WRITE'", "'XML'", "'XMLAGG'", 
                            "'XMLATTRIBUTES'", "'XMLCOMMENT'", "'XMLCONCAT'", 
                            "'XMLDECLARATION'", "'XMLDOCUMENT'", "'XMLELEMENT'", 
                            "'XMLFOREST'", "'XMLNAMESPACES'", "'XMLPARSE'", 
                            "'XMLPI'", "'XMLQUERY'", "'XMLSCHEMA'", "'XMLSERIALIZE'", 
                            "'XMLTABLE'", "'XMLTEXT'", "'XMLTYPE'", "'XMLVALIDATE'", 
                            "'YEAR_BEGIN'", "'YEAR_END'", "'year_of_calendar'", 
                            "'YearNumber_Of_Calendar'", "'ZLIB'", "'BUCKET'", 
                            "'COMMITTED'", "'CREATEXML'", "'_LATIN'", "'_UNICODE'", 
                            "'_KANJISJIS'", "'_GRAPHIC'", "'CSV'", "'CSVLD'", 
                            "'DATASIZE'", "'DAYOFMONTH'", "'DAYS'", "'DEFINITION'", 
                            "'DELETED'", "'FAST'", "'LISTAGG'", "'PATH'", 
                            "'REGEXP_SPLIT_TO_TABLE'", "'REVERSE'", "'SAS'", 
                            "'SQLTABLE'", "'STRTOK_SPLIT_TO_TABLE'", "'SYSLIB'", 
                            "'SYSUDTLIB'", "'TD_SERVER_DB'", "'TD_SYSFNLIB'", 
                            "'TD_SYSXML'", "'TIMEDATEWZCONTROL'", "'TRUST'", 
                            "'TRYCAST'", "'UDT'", "'USAGE'", "'VARIANT'", 
                            "'WEEK'", "'WIDTH'", "'XMLPUBLISH'", "'XMLPUBLISH_STREAM'", 
                            "'XMLSPLIT'", "'LATIN_TO_UNICODE'", "'UNICODE_TO_LATIN'", 
                            "'LOCALE_TO_UNICODE'", "'UNICODE_TO_LOCALE'", 
                            "'ASBSON'", "'ASBSONTEXT'", "'COMBINE'", "'EXISTVALUE'", 
                            "'JSONEXTRACT'", "'JSONEXTRACTVALUE'", "'JSONEXTRACTLARGEVALUE'", 
                            "'KEYCOUNT'", "'METADATA'", "'STORAGE_SIZE'", 
                            "'CREATESCHEMABASEDXML'", "'CREATENONSCHEMABASEDXML'", 
                            "'EXISTSNODE'", "'ISCONTENT'", "'ISDOCUMENT'", 
                            "'ISSCHEMAVALID'", "'ISSCHEMAVALIDATED'", "'XMLEXTRACT'", 
                            "'XMLTRANSFORM'", "'PROC_ID'", "'LOCATION'", 
                            "'PAYLOAD'", "'TRUSTED'", "'PATHPATTERN'", "'MANIFEST'", 
                            "'ROWFORMAT'", "'STOREDAS'", "'HEADER'", "'STRIP_EXTERIOR_SPACES'", 
                            "'STRIP_ENCLOSING_CHAR'", "'RLS'", "'SINGLE'", 
                            "'MULTIPLE'", "'JSON_COMPRESS'", "'JSON_DECOMPRESS'", 
                            "'TS_COMPRESS'", "'TS_DECOMPRESS'", "'CONTIGUOUSMAPAMPS'", 
                            "'SPARSEMAPAMPS'", "'SPARSETABLEAMPS'", "'UNNEST'", 
                            "'CALCMATRIX'", "'PHRASE'", "'CALCTYPE'", "'OUTPUT'", 
                            "'NULL_HANDLING'", "'READ_NOS'", "'BUFFERSIZE'", 
                            "'RETURNTYPE'", "'SAMPLE_PERC'", "'FULLSCAN'", 
                            "'TD_UNPIVOT'", "'VALUE_COLUMNS'", "'UNPIVOT_COLUMN'", 
                            "'COLUMN_LIST'", "'COLUMN_ALIAS_LIST'", "'INCLUDE_NULLS'", 
                            "'WRITE_NOS'", "'NAMING'", "'MANIFESTFILE'", 
                            "'MANIFESTONLY'", "'OVERWRITE'", "'INCLUDE_ORDERING'", 
                            "'INCLUDE_HASHBY'", "'MAXOBJECTSIZE'", "'COMPRESSION'", 
                            "'ARRAY_TO_JSON'", "'BSON_CHECK'", "'GEOJSONFROMGEOM'", 
                            "'GEOMFROMGEOJSON'", "'JSON_CHECK'", "'JSONGETVALUE'", 
                            "'JSONMETADATA'", "'NVP2JSON'", "'TD_JSONSHRED'", 
                            "'JSON_KEYS'", "'JSON_TABLE'", "'DEPTH'", "'QUOTES'", 
                            "'ROWEXPR'", "'COLEXPR'", "'RETURNTYPES'", "'NOCASE'", 
                            "'TRUNCATE'", "'LINK'", null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, "';'", "':'", "','", "'.'", "'@'", "'^'", 
                            "'?'", "'('", "')'", "'['", "']'", "'||'", "'\\u00A6\\u00A6'", 
                            "'*'", "'/'", "'+'", "'-'", "'**'", "'='", "'<>'", 
                            "'^='", "'<'", "'<='", "'>'", "'>='" ];
    static symbolicNames = [ null, "ABORT", "ABORTSESSION", "ABS", "ACCESS_LOCK", 
                             "ACCOUNT", "ACOS", "ACOSH", "ADD", "ADD_MONTHS", 
                             "ADMIN", "AFTER", "AGGREGATE", "ALL", "ALTER", 
                             "AMP", "AND", "ANSIDATE", "ANY", "ARGLPAREN", 
                             "AS", "ASC", "ASIN", "ASINH", "AT", "ATAN", 
                             "ATAN2", "ATANH", "ATOMIC", "AUTHORIZATION", 
                             "AVE", "AVERAGE", "AVG", "BEFORE", "BEGIN", 
                             "BETWEEN", "BIGINT", "BINARY", "BLOB", "BOTH", 
                             "BT", "BUT", "BY", "BYTE", "BYTEINT", "BYTES", 
                             "CALL", "CASE", "CASE_N", "CASESPECIFIC", "CAST", 
                             "CD", "CHAR", "CHAR_LENGTH", "CHAR2HEXINT", 
                             "CHARACTER", "CHARACTER_LENGTH", "CHARACTERS", 
                             "CHARS", "CHECK", "CHECKPOINT", "CLASS", "CLOB", 
                             "CLOSE", "CLUSTER", "CM", "COALESCE", "COLLATION", 
                             "COLLECT", "COLUMN", "COMMENT", "COMMIT", "COMPRESS", 
                             "CONNECT", "CONSTRAINT", "CONSTRUCTOR", "CONSUME", 
                             "CONTAINS", "CONTINUE", "CONVERT_TABLE_HEADER", 
                             "CORR", "COS", "COSH", "COUNT", "COVAR_POP", 
                             "COVAR_SAMP", "CREATE", "CROSS", "CS", "CSUM", 
                             "CT", "CTCONTROL", "CUBE", "CURRENT", "CURRENT_DATE", 
                             "CURRENT_ROLE", "CURRENT_TIME", "CURRENT_TIMESTAMP", 
                             "CURRENT_USER", "CURSOR", "CV", "CYCLE", "DATABASE", 
                             "DATABLOCKSIZE", "DATE", "DATEFORM", "DAY", 
                             "DEALLOCATE", "DEC", "DECIMAL", "DECLARE", 
                             "DEFAULT", "DEFERRED", "DEGREES", "DEL", "DELETE", 
                             "DESC", "DETERMINISTIC", "DIAGNOSTIC", "DICTIONARY", 
                             "DISABLED", "DISTINCT", "DO", "DOMAIN", "DOUBLE", 
                             "DROP", "DUAL", "DUMP", "DYNAMIC", "EACH", 
                             "ECHO", "ELSE", "ELSEIF", "ENABLED", "END", 
                             "EQ", "EQUALS", "ERROR", "ERRORFILES", "ERRORTABLES", 
                             "ESCAPE", "ET", "EXCEPT", "EXEC", "EXECUTE", 
                             "EXISTS", "EXIT", "EXP", "EXPAND", "EXPANDING", 
                             "EXPLAIN", "EXTERNAL", "EXTRACT", "FALLBACK", 
                             "FASTEXPORT", "FETCH", "FIRST", "FLOAT", "FLUSH", 
                             "FOR", "FOREIGN", "FORMAT", "FOUND", "FREESPACE", 
                             "FROM", "FULL", "FUNCTION", "FUNCTIONDESCRIPTOR", 
                             "GE", "GENERATED", "GET", "GIVE", "GRANT", 
                             "GRAPHIC", "GROUP", "GROUPING", "GT", "HANDLER", 
                             "HASH", "HASHAMP", "HASHBAKAMP", "HASHBUCKET", 
                             "HASHROW", "HAVING", "HELP", "HOUR", "ID2BIGINT", 
                             "IDENTITY", "IF", "IMMEDIATE", "IN", "INCONSISTENT", 
                             "INDEX", "INITIATE", "INNER", "INOUT", "INPUT", 
                             "INS", "INSERT", "INSTANCE", "INSTEAD", "INT", 
                             "INTEGER", "INTEGERDATE", "INTERSECT", "INTERVAL", 
                             "INTO", "IS", "ITERATE", "JAR", "JOIN", "JOURNAL", 
                             "KEY", "KURTOSIS", "LANGUAGE", "LARGE", "LE", 
                             "LEADING", "LEAVE", "LEFT", "LIKE", "LIMIT", 
                             "LN", "LOADING", "LOCAL", "LOCATOR", "LOCK", 
                             "LOCKING", "LOG", "LOGGING", "LOGON", "LONG", 
                             "LOOP", "LOWER", "LT", "MACRO", "MAP", "MAVG", 
                             "MAX", "MAXIMUM", "MCHARACTERS", "MDIFF", "MERGE", 
                             "METHOD", "MIN", "MINDEX", "MINIMUM", "MINUS", 
                             "MINUTE", "MLINREG", "MLOAD", "MOD", "MODE", 
                             "MODIFIES", "MODIFY", "MONITOR", "MONRESOURCE", 
                             "MONSESSION", "MONTH", "MSUBSTR", "MSUM", "MULTISET", 
                             "NAMED", "NATURAL", "NE", "NEW", "NEW_TABLE", 
                             "NEXT", "NO", "NONE", "NONTEMPORAL", "NORMALIZE", 
                             "NOT", "NOWAIT", "NULL", "NULLIF", "NULLIFZERO", 
                             "NUMBER", "NUMERIC", "OBJECT", "OBJECTS", "OCTET_LENGTH", 
                             "OF", "OFF", "OLD", "OLD_TABLE", "ON", "ONLY", 
                             "OPEN", "OPTION", "OR", "ORDER", "ORDERING", 
                             "OUT", "OUTER", "OVER", "OVERLAPS", "OVERRIDE", 
                             "PARAMETER", "PASSWORD", "PERCENT", "PERCENT_RANK", 
                             "PERM", "PERMANENT", "POSITION", "PRECISION", 
                             "PREPARE", "PRESERVE", "PRIMARY", "PRIVILEGES", 
                             "PROCEDURE", "PROFILE", "PROTECTION", "PUBLIC", 
                             "QUALIFIED", "QUALIFY", "QUANTILE", "QUEUE", 
                             "RADIANS", "RANDOM", "RANGE_N", "RANK", "READS", 
                             "REAL", "RECURSIVE", "REFERENCES", "REFERENCING", 
                             "REGR_AVGX", "REGR_AVGY", "REGR_COUNT", "REGR_INTERCEPT", 
                             "REGR_R2", "REGR_SLOPE", "REGR_SXX", "REGR_SXY", 
                             "REGR_SYY", "RELATIVE", "RELEASE", "RENAME", 
                             "REPEAT", "REPLACE", "REPLCONTROL", "REPLICATION", 
                             "REQUEST", "RESIGNAL", "RESTART", "RESTORE", 
                             "RESULT", "RESUME", "RET", "RETRIEVE", "RETURN", 
                             "RETURNS", "REVALIDATE", "REVOKE", "RIGHT", 
                             "RIGHTS", "ROLE", "ROLLBACK", "ROLLFORWARD", 
                             "ROLLUP", "ROW", "ROW_NUMBER", "ROWID", "ROWS", 
                             "SAMPLE", "SAMPLEID", "SCROLL", "SECOND", "SEL", 
                             "SELECT", "SESSION", "SET", "SETRESRATE", "SETS", 
                             "SETSESSRATE", "SHOW", "SIGNAL", "SIN", "SINH", 
                             "SKEW", "SMALLINT", "SOME", "SOUNDEX", "SPECIFIC", 
                             "SPOOL", "SQL", "SQLEXCEPTION", "SQLTEXT", 
                             "SQLWARNING", "SQRT", "SS", "START", "STARTUP", 
                             "STATEMENT", "STATISTICS", "STDDEV_POP", "STDDEV_SAMP", 
                             "STEPINFO", "STRING_CS", "SUBSCRIBER", "SUBSTR", 
                             "SUBSTRING", "SUM", "SUMMARY", "SUSPEND", "TABLE", 
                             "TAN", "TANH", "TBL_CS", "TD_ANYTYPE", "TD_AUTHID", 
                             "TD_HOST", "TD_ROWLOADID", "TD_ROWREVISION", 
                             "TD_ROWSIZE", "TD_VALIST", "TEMPORARY", "TERMINATE", 
                             "THEN", "THRESHOLD", "TIME", "TIMESTAMP", "TIMEZONE_HOUR", 
                             "TIMEZONE_MINUTE", "TITLE", "TO", "TOP", "TRACE", 
                             "TRAILING", "TRANSACTION", "TRANSACTIONTIME", 
                             "TRANSFORM", "TRANSLATE", "TRANSLATE_CHK", 
                             "TRIGGER", "TRIM", "TYPE", "UC", "UDTCASTAS", 
                             "UDTCASTLPAREN", "UDTMETHOD", "UDTTYPE", "UDTUSAGE", 
                             "UESCAPE", "UNDEFINED", "UNDO", "UNION", "UNIQUE", 
                             "UNTIL", "UNTIL_CHANGED", "UNTIL_CLOSED", "UPD", 
                             "UPDATE", "UPPER", "UPPERCASE", "USER", "USING", 
                             "VALIDTIME", "VALUE", "VALUES", "VAR_POP", 
                             "VAR_SAMP", "VARBYTE", "VARCHAR", "VARGRAPHIC", 
                             "VARIANT_TYPE", "VARYING", "VIEW", "VOLATILE", 
                             "WHEN", "WHERE", "WHILE", "WIDTH_BUCKET", "WITH", 
                             "WITHOUT", "WORK", "XMLPLAN", "YEAR", "ZEROIFNULL", 
                             "ZONE", "ALIAS", "DESCRIPTOR", "GO", "GOTO", 
                             "INDICATOR", "PRIVATE", "WAIT", "ABORTSESSIONS", 
                             "ABSENT", "ACCESS", "ACCORDING", "ACCUMULATE", 
                             "AG", "AGGGEOMINTERSECTION", "AGGGEOMUNION", 
                             "ALLDBQL", "ALLOCATE", "ALLOCATION", "ALLOW", 
                             "ALLPARAMS", "ALLTDWM", "ALWAYS", "AMPCOUNT", 
                             "ANALYSIS", "ANCHOR", "ANCHOR_HOUR", "ANCHOR_MILLISECOND", 
                             "ANCHOR_MINUTE", "ANCHOR_SECOND", "APPLNAME", 
                             "ARCHIVE", "ARRAY", "ARRAY_ADD", "ARRAY_AGG", 
                             "ARRAY_AVG", "ARRAY_COMPARE", "ARRAY_CONCAT", 
                             "ARRAY_COUNT_DISTINCT", "ARRAY_DIV", "ARRAY_EQ", 
                             "ARRAY_GE", "ARRAY_GET", "ARRAY_GT", "ARRAY_LE", 
                             "ARRAY_LT", "ARRAY_MAX", "ARRAY_MIN", "ARRAY_MOD", 
                             "ARRAY_MUL", "ARRAY_NE", "ARRAY_SUB", "ARRAY_SUM", 
                             "ARRAY_UPDATE", "ARRAY_UPDATE_STRIDE", "ASCII", 
                             "ASSIGNMENT", "ATTR", "ATTRIBUTE", "ATTRIBUTES", 
                             "ATTRIBUTION", "ATTRS", "AUTH", "AUTO", "AUTOTEMP", 
                             "AVRO", "BIT_LENGTH", "BITAND", "BITNOT", "BITOR", 
                             "BITXOR", "BLOCKCOMPRESSION", "BLOCKCOMPRESSIONALGORITHM", 
                             "BLOCKCOMPRESSIONLEVEL", "BOM", "BOTTOM", "BSON", 
                             "C", "CALENDAR", "CALLED", "CALLER", "CAMSET", 
                             "CAMSET_L", "CAPTURE", "CARDINALITY", "CEIL", 
                             "CEILING", "CHANGERATE", "CHARACTERISTICS", 
                             "CHARSET", "CHARSET_COLL", "CHECKSUM", "CHR", 
                             "CLASS_ORIGIN", "CLICKLAG", "CLIENT", "CNT", 
                             "COLOCATE", "COLUMNMETA", "COLUMNS", "COLUMNSPERINDEX", 
                             "COLUMNSPERJOININDEX", "COMMAND_FUNCTION", 
                             "COMMAND_FUNCTION_CODE", "COMPARISON", "COMPILE", 
                             "CONCAT", "CONCURRENT", "CONDITION", "CONDITION_IDENTIFIER", 
                             "CONDITION_NUMBER", "CONTAINED", "CONTAINEDTOKEN", 
                             "CONTENT", "CONTIGUOUS", "COST", "COSTS", "COUNTSET", 
                             "CPP", "CPUTIME", "CPUTIMENORM", "CREATEDATASET", 
                             "CREATOR", "CUME_DIST", "CURDATE", "CURTIME", 
                             "DATA", "DATASET", "DAY_OF_CALENDAR", "DAY_OF_MONTH", 
                             "DAY_OF_WEEK", "DAY_OF_YEAR", "DAYNUMBER_OF_CALENDAR", 
                             "DAYNUMBER_OF_MONTH", "DAYNUMBER_OF_WEEK", 
                             "DAYNUMBER_OF_YEAR", "DAYOCCURRENCE_OF_MONTH", 
                             "DBA", "DBC", "DEBUG", "DECAMSET", "DECAMSET_L", 
                             "DECODE", "DECOMPRESS", "DEFINER", "DELIMITER", 
                             "DELTA_T", "DEMOGRAPHICS", "DENIALS", "DENSE", 
                             "DENSE_RANK", "DESCRIBE", "DETAILED", "DIAGNOSTICS", 
                             "DIGITS", "DIMENSION", "DOCUMENT", "DOT", "DOWN", 
                             "DR", "DUPCOUNT", "DUPCOUNTCUM", "EBCDIC", 
                             "EDITDISTANCE", "ELAPSEDSEC", "ELAPSEDTIME", 
                             "ELEMENT", "ELZS_H", "EMITNULL", "EMPTY", "EMPTY_BLOB", 
                             "EMPTY_CLOB", "ENCODE", "ENCODING", "ENCRYPT", 
                             "ERRORS", "ERRORTBL", "EVENTCOLUMN", "EXCEPTION", 
                             "EXCL", "EXCLUDE", "EXCLUDING", "EXCLUSIVE", 
                             "EXPIRE", "EXPORT", "EXPORTWIDTH", "FALSE", 
                             "FEATUREINFO", "FILE", "FILL", "FILTER", "FINAL", 
                             "FIRST_NOTNULL", "FIRST_VALUE", "FLOOR", "FOLLOWING", 
                             "FOREIGNFUNCTION", "FORTOKEN", "FRIDAY", "FROM_BYTES", 
                             "FUNCTIONPARAMETER", "G", "GETBIT", "GETPSFVERSION", 
                             "GETQUERYBAND", "GETQUERYBANDVALUE", "GETTIMEZONEDISPLACEMENT", 
                             "GLOBAL", "GLOP", "GREATEST", "HIGH", "HOST", 
                             "IDENTIFYDATABASE", "IDENTIFYSESSION", "IDENTIFYTABLE", 
                             "IDENTIFYUSER", "IFP", "IGNORE", "IMMEDIATELY", 
                             "IMPORT", "INCLUDE", "INCLUDING", "INCREMENT", 
                             "INCREMENTAL", "INDENT", "INDEXESPERTABLE", 
                             "INDEXMAINTMODE", "INIT", "INITCAP", "INLINE", 
                             "INSTANTIABLE", "INSTR", "INTERNAL", "INVOKER", 
                             "IOCOUNT", "IPARTITION", "ISOLATED", "ISOLATION", 
                             "JAVA", "JIS_COLL", "JSON", "JSON_AGG", "JSON_COMPOSE", 
                             "K", "KANJI1", "KANJISJIS", "KBYTE", "KBYTES", 
                             "KEEP", "KILOBYTES", "LAG", "LAST", "LAST_DAY", 
                             "LAST_NOTNULL", "LAST_VALUE", "LATIN", "LDIFF", 
                             "LEAD", "LEAST", "LENGTH", "LEVEL", "LIST", 
                             "LOAD", "LOCATE", "LOCKEDUSEREXPIRE", "LOW", 
                             "LPAD", "LTRIM", "LZCOMP", "LZCOMP_L", "LZDECOMP", 
                             "LZDECOMP_L", "M", "MAD", "MANUAL", "MAPPING", 
                             "MATCHED", "MAX_CHOOSE", "MAXCHAR", "MAXINTERVALS", 
                             "MAXLOGONATTEMPTS", "MAXVALUE", "MAXVALUELENGTH", 
                             "MEDIAN", "MEDIUM", "MEETS", "MEMBER", "MERGEBLOCKRATIO", 
                             "MESSAGE_LENGTH", "MESSAGE_TEXT", "MIN_CHOOSE", 
                             "MINCHAR", "MINVALUE", "MODIFIED", "MONDAY", 
                             "MONITORQUERYBAND", "MONITORSESSIONRATE", "MONITORVERSION", 
                             "MONTH_BEGIN", "MONTH_END", "MONTH_OF_CALENDAR", 
                             "MONTH_OF_QUARTER", "MONTH_OF_YEAR", "MONTHNUMBER_OF_CALENDAR", 
                             "MONTHNUMBER_OF_QUARTER", "MONTHNUMBER_OF_YEAR", 
                             "MONTHS_BETWEEN", "MORE_", "MULTINATIONAL", 
                             "NAME", "NAMESPACE", "NEVER", "NEXT_DAY", "NGRAM", 
                             "NIL", "NODDLTEXT", "NODE", "NONOPTCOST", "NONOPTINIT", 
                             "NONSEQUENCED", "NORIGHT", "NOSEXTRACTVARFROMPATH", 
                             "NOTATION", "NOW", "NPATH", "NTH", "NULLS", 
                             "NUMFPFNS", "NUMTODSINTERVAL", "NUMTOYMINTERVAL", 
                             "NVL", "NVL2", "NVP", "OA", "OADD_MONTHS", 
                             "OCOUNT", "ODELETE", "OEXISTS", "OEXTEND", 
                             "OFIRST", "OLAST", "OLD_NEW_TABLE", "OLIMIT", 
                             "ONEXT", "ONLINE", "OPRIOR", "OPTIONS", "ORDERBYVALUES", 
                             "ORDERED_ANALYTIC", "ORDINALITY", "OREPLACE", 
                             "OTRANSLATE", "OTRIM", "OVERLAYS", "OWNER", 
                             "P_INTERSECT", "P_NORMALIZE", "PARAMID", "PARAMINFO", 
                             "PARENT", "PARTITION", "PARTITION_L", "PARTITIONED", 
                             "PARTITIONNAMES", "PASS", "PASSING", "PATH_GENERATOR", 
                             "PATH_START", "PATH_SUMMARIZER", "PATTERN", 
                             "PERCENTILE", "PERCENTILE_CONT", "PERCENTILE_DISC", 
                             "PERIOD", "PIVOT", "PORTION", "POWER", "PRECEDES", 
                             "PRECEDING", "PREFIX", "PRINT", "PRIOR", "PROTECTED", 
                             "QUARTER_BEGIN", "QUARTER_END", "QUARTER_OF_CALENDAR", 
                             "QUARTER_OF_YEAR", "QUARTERNUMBER_OF_CALENDAR", 
                             "QUARTERNUMBER_OF_YEAR", "QUERY", "QUERY_BAND", 
                             "QUOTECHAR", "RANDOMIZED", "RANGE", "RANGE_L", 
                             "RAPIDFIRE", "RDIFF", "READ", "RECALC", "REGEXP_INSTR", 
                             "REGEXP_REPLACE", "REGEXP_SIMILAR", "REGEXP_SUBSTR", 
                             "REPLACEMENT", "RESET", "RESPECT", "RESTRICTWORDS", 
                             "RETAIN", "RETURNED_SQLSTATE", "RETURNING", 
                             "REUSE", "ROOT", "ROTATELEFT", "ROTATERIGHT", 
                             "ROUND", "ROW_COUNT", "ROWIDGEN", "ROWIDGEN2", 
                             "RPAD", "RTRIM", "RU", "RULES", "RULESET", 
                             "SAMPLES", "SATURDAY", "SCHEMA", "SCRIPT", 
                             "SCRIPT_COMMAND", "SEARCHSPACE", "SEARCHUIFDBPATH", 
                             "SECURITY", "SEED", "SELF", "SEQ", "SEQUENCE", 
                             "SEQUENCED", "SERIALIZABLE", "SERVER", "SESSIONIZE", 
                             "SETBIT", "SETRESOURCERATE", "SETSESSIONACCOUNT", 
                             "SETSESSIONRATE", "SHARE", "SHIFTLEFT", "SHIFTRIGHT", 
                             "SIGN", "SIZE", "SNAPPY_COMPRESS", "SNAPPY_DECOMPRESS", 
                             "SOURCE", "SPARSE", "SPECCHAR", "SPL", "SQLSTATE", 
                             "SR", "ST_GEOMETRY", "STAT", "STATIC", "STATS", 
                             "STATSUSAGE", "STORAGE", "STRIP", "STRTOK", 
                             "STYLE", "SUBBITSTR", "SUBCLASS_ORIGIN", "SUCCEEDS", 
                             "SUMMARYONLY", "SUNDAY", "SYMBOLS", "SYSTEM", 
                             "SYSTEM_TIME", "SYSTEMTEST", "TARGET", "TD_ARRAY2P", 
                             "TD_DATASET", "TD_DAY_OF_CALENDAR", "TD_DAY_OF_MONTH", 
                             "TD_DAY_OF_WEEK", "TD_DAY_OF_YEAR", "TD_GENERAL", 
                             "TD_GETTIMEBUCKET", "TD_INTERNAL", "TD_LZ_COMPRESS", 
                             "TD_LZ_DECOMPRESS", "TD_MONTH_OF_CALENDAR", 
                             "TD_MONTH_OF_QUARTER", "TD_MONTH_OF_YEAR", 
                             "TD_QUARTER_OF_CALENDAR", "TD_QUARTER_OF_YEAR", 
                             "TD_TIME_BUCKET_NUMBER", "TD_WEEK_OF_CALENDAR", 
                             "TD_WEEK_OF_MONTH", "TD_WEEK_OF_YEAR", "TD_WEEKDAY_OF_MONTH", 
                             "TD_YEAR_OF_CALENDAR", "TDWMEVENT", "TDWMEXCEPTION", 
                             "TDWMHISTORY", "TEMPORAL_DATE", "TEMPORAL_TIMESTAMP", 
                             "TEXT", "THRESHOLDPERCENT", "THROUGH", "THURSDAY", 
                             "TIES", "TIMECODE", "TIMECOLUMN", "TIMEOUT", 
                             "TIMESTAMPCOLUMN", "TO_BYTE", "TO_BYTES", "TO_CHAR", 
                             "TO_DATE", "TO_DSINTERVAL", "TO_NUMBER", "TO_TIMESTAMP", 
                             "TO_TIMESTAMP_TZ", "TO_YMINTERVAL", "TOTOKEN", 
                             "TPA", "TRANSACTION_ACTIVE", "TRANSUNICODETOUTF8", 
                             "TRANSUTF8TOUNICODE", "TRUE", "TRUNC", "TRUST_ONLY", 
                             "TTGRANULARITY", "TUESDAY", "UBJSON", "UCASE", 
                             "UDFSEARCHPATH", "UNBOUNDED", "UNCOMMITTED", 
                             "UNICODE", "UNKNOWN", "UNPIVOT", "USE", "USECOUNT", 
                             "UTILITYINFO", "VARRAY", "VERBOSE", "VERSION", 
                             "VERSIONING", "WARNING", "WEDNESDAY", "WEEK_BEGIN", 
                             "WEEK_END", "WEEK_OF_CALENDAR", "WEEK_OF_MONTH", 
                             "WEEK_OF_YEAR", "WEEKDAY_OF_MONTH", "WEEKNUMBER_OF_CALENDAR", 
                             "WEEKNUMBER_OF_MONTH", "WEEKNUMBER_OF_QUARTER", 
                             "WEEKNUMBER_OF_YEAR", "WHITESPACE", "WINDOWSIZE", 
                             "WITHIN", "WORKLOAD", "WRITE", "XML", "XMLAGG", 
                             "XMLATTRIBUTES", "XMLCOMMENT", "XMLCONCAT", 
                             "XMLDECLARATION", "XMLDOCUMENT", "XMLELEMENT", 
                             "XMLFOREST", "XMLNAMESPACES", "XMLPARSE", "XMLPI", 
                             "XMLQUERY", "XMLSCHEMA", "XMLSERIALIZE", "XMLTABLE", 
                             "XMLTEXT", "XMLTYPE", "XMLVALIDATE", "YEAR_BEGIN", 
                             "YEAR_END", "YEAR_OF_CALENDAR", "YEARNUMBER_OF_CALENDAR", 
                             "ZLIB", "BUCKET", "COMMITTED", "CREATEXML", 
                             "CS_LATIN", "CS_UNICODE", "CS_KANJISJIS", "CS_GRAPHIC", 
                             "CSV", "CSVLD", "DATASIZE", "DAYOFMONTH", "DAYS", 
                             "DEFINITION", "DELETED", "FAST", "LISTAGG", 
                             "PATH", "REGEXP_SPLIT_TO_TABLE", "REVERSE", 
                             "SAS", "SQLTABLE", "STRTOK_SPLIT_TO_TABLE", 
                             "SYSLIB", "SYSUDTLIB", "TD_SERVER_DB", "TD_SYSFNLIB", 
                             "TD_SYSXML", "TIMEDATEWZCONTROL", "TRUST", 
                             "TRYCAST", "UDT", "USAGE", "VARIANT", "WEEK", 
                             "WIDTH", "XMLPUBLISH", "XMLPUBLISH_STREAM", 
                             "XMLSPLIT", "LATIN_TO_UNICODE", "UNICODE_TO_LATIN", 
                             "LOCALE_TO_UNICODE", "UNICODE_TO_LOCALE", "ASBSON", 
                             "ASBSONTEXT", "COMBINE", "EXISTVALUE", "JSONEXTRACT", 
                             "JSONEXTRACTVALUE", "JSONEXTRACTLARGEVALUE", 
                             "KEYCOUNT", "METADATA", "STORAGE_SIZE", "CREATESCHEMABASEDXML", 
                             "CREATENONSCHEMABASEDXML", "EXISTSNODE", "ISCONTENT", 
                             "ISDOCUMENT", "ISSCHEMAVALID", "ISSCHEMAVALIDATED", 
                             "XMLEXTRACT", "XMLTRANSFORM", "PROC_ID", "LOCATION", 
                             "PAYLOAD", "TRUSTED", "PATHPATTERN", "MANIFEST", 
                             "ROWFORMAT", "STOREDAS", "HEADER", "STRIP_EXTERIOR_SPACES", 
                             "STRIP_ENCLOSING_CHAR", "RLS", "SINGLE", "MULTIPLE", 
                             "JSON_COMPRESS", "JSON_DECOMPRESS", "TS_COMPRESS", 
                             "TS_DECOMPRESS", "CONTIGUOUSMAPAMPS", "SPARSEMAPAMPS", 
                             "SPARSETABLEAMPS", "UNNEST", "CALCMATRIX", 
                             "PHRASE", "CALCTYPE", "OUTPUT", "NULL_HANDLING", 
                             "READ_NOS", "BUFFERSIZE", "RETURNTYPE", "SAMPLE_PERC", 
                             "FULLSCAN", "TD_UNPIVOT", "VALUE_COLUMNS", 
                             "UNPIVOT_COLUMN", "COLUMN_LIST", "COLUMN_ALIAS_LIST", 
                             "INCLUDE_NULLS", "WRITE_NOS", "NAMING", "MANIFESTFILE", 
                             "MANIFESTONLY", "OVERWRITE", "INCLUDE_ORDERING", 
                             "INCLUDE_HASHBY", "MAXOBJECTSIZE", "COMPRESSION", 
                             "ARRAY_TO_JSON", "BSON_CHECK", "GEOJSONFROMGEOM", 
                             "GEOMFROMGEOJSON", "JSON_CHECK", "JSONGETVALUE", 
                             "JSONMETADATA", "NVP2JSON", "TD_JSONSHRED", 
                             "JSON_KEYS", "JSON_TABLE", "DEPTH", "QUOTES", 
                             "ROWEXPR", "COLEXPR", "RETURNTYPES", "NOCASE", 
                             "TRUNCATE", "LINK", "OBJECT_NAME", "UNSIGNED_INTEGER", 
                             "HEX_BYTE_LITERAL", "HEX_INTEGER_LITERAL", 
                             "FLOAT_LITERAL", "DATE_STRING", "TIME_STRING", 
                             "TIMESTAMP_STRING", "PERIOD_STRING", "UNICODE_STRING_LEADING", 
                             "CHAR_STRING", "HEX_STRING", "PASSWORD_STRING", 
                             "SEMICOLON", "COLON", "COMMA", "DOT_", "AT_SIGN", 
                             "CARET", "QUESTION_MARK", "OPEN_PAR", "CLOSE_PAR", 
                             "OPEN_SQ_BRACKET", "CLOSE_SQ_BRACKET", "CONCATENATE", 
                             "BROKEN_CONCATENATE", "MUL_SIGN", "DIV_SIGN", 
                             "PLUS_SIGN", "MINUS_SIGN", "EXPONENTIATION", 
                             "EQUALS_SIGN", "NOT_EQUALS_SIGN", "NOT_EQUALS_SIGN_TD", 
                             "LT_SIGN", "LE_SIGN", "GT_SIGN", "GE_SIGN", 
                             "SINGLE_LINE_COMMENT", "MULTI_LINE_COMMENT", 
                             "WS" ];
    static ruleNames = [ "nonreserved_word" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = TeradataSQLNonReservedWordsParser.ruleNames;
        this.literalNames = TeradataSQLNonReservedWordsParser.literalNames;
        this.symbolicNames = TeradataSQLNonReservedWordsParser.symbolicNames;
    }



	nonreserved_word() {
	    let localctx = new Nonreserved_wordContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, TeradataSQLNonReservedWordsParser.RULE_nonreserved_word);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 2;
	        _la = this._input.LA(1);
	        if(!(((((_la - 488)) & ~0x1f) === 0 && ((1 << (_la - 488)) & 4294967295) !== 0) || ((((_la - 520)) & ~0x1f) === 0 && ((1 << (_la - 520)) & 4294967295) !== 0) || ((((_la - 552)) & ~0x1f) === 0 && ((1 << (_la - 552)) & 4294967295) !== 0) || ((((_la - 584)) & ~0x1f) === 0 && ((1 << (_la - 584)) & 4294967295) !== 0) || ((((_la - 616)) & ~0x1f) === 0 && ((1 << (_la - 616)) & 4294967295) !== 0) || ((((_la - 648)) & ~0x1f) === 0 && ((1 << (_la - 648)) & 4294967295) !== 0) || ((((_la - 680)) & ~0x1f) === 0 && ((1 << (_la - 680)) & 4294967295) !== 0) || ((((_la - 712)) & ~0x1f) === 0 && ((1 << (_la - 712)) & 4294967295) !== 0) || ((((_la - 744)) & ~0x1f) === 0 && ((1 << (_la - 744)) & 4294967295) !== 0) || ((((_la - 776)) & ~0x1f) === 0 && ((1 << (_la - 776)) & 4294967295) !== 0) || ((((_la - 808)) & ~0x1f) === 0 && ((1 << (_la - 808)) & 4294967295) !== 0) || ((((_la - 840)) & ~0x1f) === 0 && ((1 << (_la - 840)) & 4294967295) !== 0) || ((((_la - 872)) & ~0x1f) === 0 && ((1 << (_la - 872)) & 4294967295) !== 0) || ((((_la - 904)) & ~0x1f) === 0 && ((1 << (_la - 904)) & 4294967295) !== 0) || ((((_la - 936)) & ~0x1f) === 0 && ((1 << (_la - 936)) & 4294967295) !== 0) || ((((_la - 968)) & ~0x1f) === 0 && ((1 << (_la - 968)) & 4294967295) !== 0) || ((((_la - 1000)) & ~0x1f) === 0 && ((1 << (_la - 1000)) & 4294967295) !== 0) || ((((_la - 1032)) & ~0x1f) === 0 && ((1 << (_la - 1032)) & 4294967295) !== 0) || ((((_la - 1064)) & ~0x1f) === 0 && ((1 << (_la - 1064)) & 4294967295) !== 0) || ((((_la - 1096)) & ~0x1f) === 0 && ((1 << (_la - 1096)) & 4294967295) !== 0) || ((((_la - 1128)) & ~0x1f) === 0 && ((1 << (_la - 1128)) & 4294967295) !== 0) || ((((_la - 1160)) & ~0x1f) === 0 && ((1 << (_la - 1160)) & 4294967295) !== 0) || _la===1192)) {
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

TeradataSQLNonReservedWordsParser.EOF = antlr4.Token.EOF;
TeradataSQLNonReservedWordsParser.ABORT = 1;
TeradataSQLNonReservedWordsParser.ABORTSESSION = 2;
TeradataSQLNonReservedWordsParser.ABS = 3;
TeradataSQLNonReservedWordsParser.ACCESS_LOCK = 4;
TeradataSQLNonReservedWordsParser.ACCOUNT = 5;
TeradataSQLNonReservedWordsParser.ACOS = 6;
TeradataSQLNonReservedWordsParser.ACOSH = 7;
TeradataSQLNonReservedWordsParser.ADD = 8;
TeradataSQLNonReservedWordsParser.ADD_MONTHS = 9;
TeradataSQLNonReservedWordsParser.ADMIN = 10;
TeradataSQLNonReservedWordsParser.AFTER = 11;
TeradataSQLNonReservedWordsParser.AGGREGATE = 12;
TeradataSQLNonReservedWordsParser.ALL = 13;
TeradataSQLNonReservedWordsParser.ALTER = 14;
TeradataSQLNonReservedWordsParser.AMP = 15;
TeradataSQLNonReservedWordsParser.AND = 16;
TeradataSQLNonReservedWordsParser.ANSIDATE = 17;
TeradataSQLNonReservedWordsParser.ANY = 18;
TeradataSQLNonReservedWordsParser.ARGLPAREN = 19;
TeradataSQLNonReservedWordsParser.AS = 20;
TeradataSQLNonReservedWordsParser.ASC = 21;
TeradataSQLNonReservedWordsParser.ASIN = 22;
TeradataSQLNonReservedWordsParser.ASINH = 23;
TeradataSQLNonReservedWordsParser.AT = 24;
TeradataSQLNonReservedWordsParser.ATAN = 25;
TeradataSQLNonReservedWordsParser.ATAN2 = 26;
TeradataSQLNonReservedWordsParser.ATANH = 27;
TeradataSQLNonReservedWordsParser.ATOMIC = 28;
TeradataSQLNonReservedWordsParser.AUTHORIZATION = 29;
TeradataSQLNonReservedWordsParser.AVE = 30;
TeradataSQLNonReservedWordsParser.AVERAGE = 31;
TeradataSQLNonReservedWordsParser.AVG = 32;
TeradataSQLNonReservedWordsParser.BEFORE = 33;
TeradataSQLNonReservedWordsParser.BEGIN = 34;
TeradataSQLNonReservedWordsParser.BETWEEN = 35;
TeradataSQLNonReservedWordsParser.BIGINT = 36;
TeradataSQLNonReservedWordsParser.BINARY = 37;
TeradataSQLNonReservedWordsParser.BLOB = 38;
TeradataSQLNonReservedWordsParser.BOTH = 39;
TeradataSQLNonReservedWordsParser.BT = 40;
TeradataSQLNonReservedWordsParser.BUT = 41;
TeradataSQLNonReservedWordsParser.BY = 42;
TeradataSQLNonReservedWordsParser.BYTE = 43;
TeradataSQLNonReservedWordsParser.BYTEINT = 44;
TeradataSQLNonReservedWordsParser.BYTES = 45;
TeradataSQLNonReservedWordsParser.CALL = 46;
TeradataSQLNonReservedWordsParser.CASE = 47;
TeradataSQLNonReservedWordsParser.CASE_N = 48;
TeradataSQLNonReservedWordsParser.CASESPECIFIC = 49;
TeradataSQLNonReservedWordsParser.CAST = 50;
TeradataSQLNonReservedWordsParser.CD = 51;
TeradataSQLNonReservedWordsParser.CHAR = 52;
TeradataSQLNonReservedWordsParser.CHAR_LENGTH = 53;
TeradataSQLNonReservedWordsParser.CHAR2HEXINT = 54;
TeradataSQLNonReservedWordsParser.CHARACTER = 55;
TeradataSQLNonReservedWordsParser.CHARACTER_LENGTH = 56;
TeradataSQLNonReservedWordsParser.CHARACTERS = 57;
TeradataSQLNonReservedWordsParser.CHARS = 58;
TeradataSQLNonReservedWordsParser.CHECK = 59;
TeradataSQLNonReservedWordsParser.CHECKPOINT = 60;
TeradataSQLNonReservedWordsParser.CLASS = 61;
TeradataSQLNonReservedWordsParser.CLOB = 62;
TeradataSQLNonReservedWordsParser.CLOSE = 63;
TeradataSQLNonReservedWordsParser.CLUSTER = 64;
TeradataSQLNonReservedWordsParser.CM = 65;
TeradataSQLNonReservedWordsParser.COALESCE = 66;
TeradataSQLNonReservedWordsParser.COLLATION = 67;
TeradataSQLNonReservedWordsParser.COLLECT = 68;
TeradataSQLNonReservedWordsParser.COLUMN = 69;
TeradataSQLNonReservedWordsParser.COMMENT = 70;
TeradataSQLNonReservedWordsParser.COMMIT = 71;
TeradataSQLNonReservedWordsParser.COMPRESS = 72;
TeradataSQLNonReservedWordsParser.CONNECT = 73;
TeradataSQLNonReservedWordsParser.CONSTRAINT = 74;
TeradataSQLNonReservedWordsParser.CONSTRUCTOR = 75;
TeradataSQLNonReservedWordsParser.CONSUME = 76;
TeradataSQLNonReservedWordsParser.CONTAINS = 77;
TeradataSQLNonReservedWordsParser.CONTINUE = 78;
TeradataSQLNonReservedWordsParser.CONVERT_TABLE_HEADER = 79;
TeradataSQLNonReservedWordsParser.CORR = 80;
TeradataSQLNonReservedWordsParser.COS = 81;
TeradataSQLNonReservedWordsParser.COSH = 82;
TeradataSQLNonReservedWordsParser.COUNT = 83;
TeradataSQLNonReservedWordsParser.COVAR_POP = 84;
TeradataSQLNonReservedWordsParser.COVAR_SAMP = 85;
TeradataSQLNonReservedWordsParser.CREATE = 86;
TeradataSQLNonReservedWordsParser.CROSS = 87;
TeradataSQLNonReservedWordsParser.CS = 88;
TeradataSQLNonReservedWordsParser.CSUM = 89;
TeradataSQLNonReservedWordsParser.CT = 90;
TeradataSQLNonReservedWordsParser.CTCONTROL = 91;
TeradataSQLNonReservedWordsParser.CUBE = 92;
TeradataSQLNonReservedWordsParser.CURRENT = 93;
TeradataSQLNonReservedWordsParser.CURRENT_DATE = 94;
TeradataSQLNonReservedWordsParser.CURRENT_ROLE = 95;
TeradataSQLNonReservedWordsParser.CURRENT_TIME = 96;
TeradataSQLNonReservedWordsParser.CURRENT_TIMESTAMP = 97;
TeradataSQLNonReservedWordsParser.CURRENT_USER = 98;
TeradataSQLNonReservedWordsParser.CURSOR = 99;
TeradataSQLNonReservedWordsParser.CV = 100;
TeradataSQLNonReservedWordsParser.CYCLE = 101;
TeradataSQLNonReservedWordsParser.DATABASE = 102;
TeradataSQLNonReservedWordsParser.DATABLOCKSIZE = 103;
TeradataSQLNonReservedWordsParser.DATE = 104;
TeradataSQLNonReservedWordsParser.DATEFORM = 105;
TeradataSQLNonReservedWordsParser.DAY = 106;
TeradataSQLNonReservedWordsParser.DEALLOCATE = 107;
TeradataSQLNonReservedWordsParser.DEC = 108;
TeradataSQLNonReservedWordsParser.DECIMAL = 109;
TeradataSQLNonReservedWordsParser.DECLARE = 110;
TeradataSQLNonReservedWordsParser.DEFAULT = 111;
TeradataSQLNonReservedWordsParser.DEFERRED = 112;
TeradataSQLNonReservedWordsParser.DEGREES = 113;
TeradataSQLNonReservedWordsParser.DEL = 114;
TeradataSQLNonReservedWordsParser.DELETE = 115;
TeradataSQLNonReservedWordsParser.DESC = 116;
TeradataSQLNonReservedWordsParser.DETERMINISTIC = 117;
TeradataSQLNonReservedWordsParser.DIAGNOSTIC = 118;
TeradataSQLNonReservedWordsParser.DICTIONARY = 119;
TeradataSQLNonReservedWordsParser.DISABLED = 120;
TeradataSQLNonReservedWordsParser.DISTINCT = 121;
TeradataSQLNonReservedWordsParser.DO = 122;
TeradataSQLNonReservedWordsParser.DOMAIN = 123;
TeradataSQLNonReservedWordsParser.DOUBLE = 124;
TeradataSQLNonReservedWordsParser.DROP = 125;
TeradataSQLNonReservedWordsParser.DUAL = 126;
TeradataSQLNonReservedWordsParser.DUMP = 127;
TeradataSQLNonReservedWordsParser.DYNAMIC = 128;
TeradataSQLNonReservedWordsParser.EACH = 129;
TeradataSQLNonReservedWordsParser.ECHO = 130;
TeradataSQLNonReservedWordsParser.ELSE = 131;
TeradataSQLNonReservedWordsParser.ELSEIF = 132;
TeradataSQLNonReservedWordsParser.ENABLED = 133;
TeradataSQLNonReservedWordsParser.END = 134;
TeradataSQLNonReservedWordsParser.EQ = 135;
TeradataSQLNonReservedWordsParser.EQUALS = 136;
TeradataSQLNonReservedWordsParser.ERROR = 137;
TeradataSQLNonReservedWordsParser.ERRORFILES = 138;
TeradataSQLNonReservedWordsParser.ERRORTABLES = 139;
TeradataSQLNonReservedWordsParser.ESCAPE = 140;
TeradataSQLNonReservedWordsParser.ET = 141;
TeradataSQLNonReservedWordsParser.EXCEPT = 142;
TeradataSQLNonReservedWordsParser.EXEC = 143;
TeradataSQLNonReservedWordsParser.EXECUTE = 144;
TeradataSQLNonReservedWordsParser.EXISTS = 145;
TeradataSQLNonReservedWordsParser.EXIT = 146;
TeradataSQLNonReservedWordsParser.EXP = 147;
TeradataSQLNonReservedWordsParser.EXPAND = 148;
TeradataSQLNonReservedWordsParser.EXPANDING = 149;
TeradataSQLNonReservedWordsParser.EXPLAIN = 150;
TeradataSQLNonReservedWordsParser.EXTERNAL = 151;
TeradataSQLNonReservedWordsParser.EXTRACT = 152;
TeradataSQLNonReservedWordsParser.FALLBACK = 153;
TeradataSQLNonReservedWordsParser.FASTEXPORT = 154;
TeradataSQLNonReservedWordsParser.FETCH = 155;
TeradataSQLNonReservedWordsParser.FIRST = 156;
TeradataSQLNonReservedWordsParser.FLOAT = 157;
TeradataSQLNonReservedWordsParser.FLUSH = 158;
TeradataSQLNonReservedWordsParser.FOR = 159;
TeradataSQLNonReservedWordsParser.FOREIGN = 160;
TeradataSQLNonReservedWordsParser.FORMAT = 161;
TeradataSQLNonReservedWordsParser.FOUND = 162;
TeradataSQLNonReservedWordsParser.FREESPACE = 163;
TeradataSQLNonReservedWordsParser.FROM = 164;
TeradataSQLNonReservedWordsParser.FULL = 165;
TeradataSQLNonReservedWordsParser.FUNCTION = 166;
TeradataSQLNonReservedWordsParser.FUNCTIONDESCRIPTOR = 167;
TeradataSQLNonReservedWordsParser.GE = 168;
TeradataSQLNonReservedWordsParser.GENERATED = 169;
TeradataSQLNonReservedWordsParser.GET = 170;
TeradataSQLNonReservedWordsParser.GIVE = 171;
TeradataSQLNonReservedWordsParser.GRANT = 172;
TeradataSQLNonReservedWordsParser.GRAPHIC = 173;
TeradataSQLNonReservedWordsParser.GROUP = 174;
TeradataSQLNonReservedWordsParser.GROUPING = 175;
TeradataSQLNonReservedWordsParser.GT = 176;
TeradataSQLNonReservedWordsParser.HANDLER = 177;
TeradataSQLNonReservedWordsParser.HASH = 178;
TeradataSQLNonReservedWordsParser.HASHAMP = 179;
TeradataSQLNonReservedWordsParser.HASHBAKAMP = 180;
TeradataSQLNonReservedWordsParser.HASHBUCKET = 181;
TeradataSQLNonReservedWordsParser.HASHROW = 182;
TeradataSQLNonReservedWordsParser.HAVING = 183;
TeradataSQLNonReservedWordsParser.HELP = 184;
TeradataSQLNonReservedWordsParser.HOUR = 185;
TeradataSQLNonReservedWordsParser.ID2BIGINT = 186;
TeradataSQLNonReservedWordsParser.IDENTITY = 187;
TeradataSQLNonReservedWordsParser.IF = 188;
TeradataSQLNonReservedWordsParser.IMMEDIATE = 189;
TeradataSQLNonReservedWordsParser.IN = 190;
TeradataSQLNonReservedWordsParser.INCONSISTENT = 191;
TeradataSQLNonReservedWordsParser.INDEX = 192;
TeradataSQLNonReservedWordsParser.INITIATE = 193;
TeradataSQLNonReservedWordsParser.INNER = 194;
TeradataSQLNonReservedWordsParser.INOUT = 195;
TeradataSQLNonReservedWordsParser.INPUT = 196;
TeradataSQLNonReservedWordsParser.INS = 197;
TeradataSQLNonReservedWordsParser.INSERT = 198;
TeradataSQLNonReservedWordsParser.INSTANCE = 199;
TeradataSQLNonReservedWordsParser.INSTEAD = 200;
TeradataSQLNonReservedWordsParser.INT = 201;
TeradataSQLNonReservedWordsParser.INTEGER = 202;
TeradataSQLNonReservedWordsParser.INTEGERDATE = 203;
TeradataSQLNonReservedWordsParser.INTERSECT = 204;
TeradataSQLNonReservedWordsParser.INTERVAL = 205;
TeradataSQLNonReservedWordsParser.INTO = 206;
TeradataSQLNonReservedWordsParser.IS = 207;
TeradataSQLNonReservedWordsParser.ITERATE = 208;
TeradataSQLNonReservedWordsParser.JAR = 209;
TeradataSQLNonReservedWordsParser.JOIN = 210;
TeradataSQLNonReservedWordsParser.JOURNAL = 211;
TeradataSQLNonReservedWordsParser.KEY = 212;
TeradataSQLNonReservedWordsParser.KURTOSIS = 213;
TeradataSQLNonReservedWordsParser.LANGUAGE = 214;
TeradataSQLNonReservedWordsParser.LARGE = 215;
TeradataSQLNonReservedWordsParser.LE = 216;
TeradataSQLNonReservedWordsParser.LEADING = 217;
TeradataSQLNonReservedWordsParser.LEAVE = 218;
TeradataSQLNonReservedWordsParser.LEFT = 219;
TeradataSQLNonReservedWordsParser.LIKE = 220;
TeradataSQLNonReservedWordsParser.LIMIT = 221;
TeradataSQLNonReservedWordsParser.LN = 222;
TeradataSQLNonReservedWordsParser.LOADING = 223;
TeradataSQLNonReservedWordsParser.LOCAL = 224;
TeradataSQLNonReservedWordsParser.LOCATOR = 225;
TeradataSQLNonReservedWordsParser.LOCK = 226;
TeradataSQLNonReservedWordsParser.LOCKING = 227;
TeradataSQLNonReservedWordsParser.LOG = 228;
TeradataSQLNonReservedWordsParser.LOGGING = 229;
TeradataSQLNonReservedWordsParser.LOGON = 230;
TeradataSQLNonReservedWordsParser.LONG = 231;
TeradataSQLNonReservedWordsParser.LOOP = 232;
TeradataSQLNonReservedWordsParser.LOWER = 233;
TeradataSQLNonReservedWordsParser.LT = 234;
TeradataSQLNonReservedWordsParser.MACRO = 235;
TeradataSQLNonReservedWordsParser.MAP = 236;
TeradataSQLNonReservedWordsParser.MAVG = 237;
TeradataSQLNonReservedWordsParser.MAX = 238;
TeradataSQLNonReservedWordsParser.MAXIMUM = 239;
TeradataSQLNonReservedWordsParser.MCHARACTERS = 240;
TeradataSQLNonReservedWordsParser.MDIFF = 241;
TeradataSQLNonReservedWordsParser.MERGE = 242;
TeradataSQLNonReservedWordsParser.METHOD = 243;
TeradataSQLNonReservedWordsParser.MIN = 244;
TeradataSQLNonReservedWordsParser.MINDEX = 245;
TeradataSQLNonReservedWordsParser.MINIMUM = 246;
TeradataSQLNonReservedWordsParser.MINUS = 247;
TeradataSQLNonReservedWordsParser.MINUTE = 248;
TeradataSQLNonReservedWordsParser.MLINREG = 249;
TeradataSQLNonReservedWordsParser.MLOAD = 250;
TeradataSQLNonReservedWordsParser.MOD = 251;
TeradataSQLNonReservedWordsParser.MODE = 252;
TeradataSQLNonReservedWordsParser.MODIFIES = 253;
TeradataSQLNonReservedWordsParser.MODIFY = 254;
TeradataSQLNonReservedWordsParser.MONITOR = 255;
TeradataSQLNonReservedWordsParser.MONRESOURCE = 256;
TeradataSQLNonReservedWordsParser.MONSESSION = 257;
TeradataSQLNonReservedWordsParser.MONTH = 258;
TeradataSQLNonReservedWordsParser.MSUBSTR = 259;
TeradataSQLNonReservedWordsParser.MSUM = 260;
TeradataSQLNonReservedWordsParser.MULTISET = 261;
TeradataSQLNonReservedWordsParser.NAMED = 262;
TeradataSQLNonReservedWordsParser.NATURAL = 263;
TeradataSQLNonReservedWordsParser.NE = 264;
TeradataSQLNonReservedWordsParser.NEW = 265;
TeradataSQLNonReservedWordsParser.NEW_TABLE = 266;
TeradataSQLNonReservedWordsParser.NEXT = 267;
TeradataSQLNonReservedWordsParser.NO = 268;
TeradataSQLNonReservedWordsParser.NONE = 269;
TeradataSQLNonReservedWordsParser.NONTEMPORAL = 270;
TeradataSQLNonReservedWordsParser.NORMALIZE = 271;
TeradataSQLNonReservedWordsParser.NOT = 272;
TeradataSQLNonReservedWordsParser.NOWAIT = 273;
TeradataSQLNonReservedWordsParser.NULL = 274;
TeradataSQLNonReservedWordsParser.NULLIF = 275;
TeradataSQLNonReservedWordsParser.NULLIFZERO = 276;
TeradataSQLNonReservedWordsParser.NUMBER = 277;
TeradataSQLNonReservedWordsParser.NUMERIC = 278;
TeradataSQLNonReservedWordsParser.OBJECT = 279;
TeradataSQLNonReservedWordsParser.OBJECTS = 280;
TeradataSQLNonReservedWordsParser.OCTET_LENGTH = 281;
TeradataSQLNonReservedWordsParser.OF = 282;
TeradataSQLNonReservedWordsParser.OFF = 283;
TeradataSQLNonReservedWordsParser.OLD = 284;
TeradataSQLNonReservedWordsParser.OLD_TABLE = 285;
TeradataSQLNonReservedWordsParser.ON = 286;
TeradataSQLNonReservedWordsParser.ONLY = 287;
TeradataSQLNonReservedWordsParser.OPEN = 288;
TeradataSQLNonReservedWordsParser.OPTION = 289;
TeradataSQLNonReservedWordsParser.OR = 290;
TeradataSQLNonReservedWordsParser.ORDER = 291;
TeradataSQLNonReservedWordsParser.ORDERING = 292;
TeradataSQLNonReservedWordsParser.OUT = 293;
TeradataSQLNonReservedWordsParser.OUTER = 294;
TeradataSQLNonReservedWordsParser.OVER = 295;
TeradataSQLNonReservedWordsParser.OVERLAPS = 296;
TeradataSQLNonReservedWordsParser.OVERRIDE = 297;
TeradataSQLNonReservedWordsParser.PARAMETER = 298;
TeradataSQLNonReservedWordsParser.PASSWORD = 299;
TeradataSQLNonReservedWordsParser.PERCENT = 300;
TeradataSQLNonReservedWordsParser.PERCENT_RANK = 301;
TeradataSQLNonReservedWordsParser.PERM = 302;
TeradataSQLNonReservedWordsParser.PERMANENT = 303;
TeradataSQLNonReservedWordsParser.POSITION = 304;
TeradataSQLNonReservedWordsParser.PRECISION = 305;
TeradataSQLNonReservedWordsParser.PREPARE = 306;
TeradataSQLNonReservedWordsParser.PRESERVE = 307;
TeradataSQLNonReservedWordsParser.PRIMARY = 308;
TeradataSQLNonReservedWordsParser.PRIVILEGES = 309;
TeradataSQLNonReservedWordsParser.PROCEDURE = 310;
TeradataSQLNonReservedWordsParser.PROFILE = 311;
TeradataSQLNonReservedWordsParser.PROTECTION = 312;
TeradataSQLNonReservedWordsParser.PUBLIC = 313;
TeradataSQLNonReservedWordsParser.QUALIFIED = 314;
TeradataSQLNonReservedWordsParser.QUALIFY = 315;
TeradataSQLNonReservedWordsParser.QUANTILE = 316;
TeradataSQLNonReservedWordsParser.QUEUE = 317;
TeradataSQLNonReservedWordsParser.RADIANS = 318;
TeradataSQLNonReservedWordsParser.RANDOM = 319;
TeradataSQLNonReservedWordsParser.RANGE_N = 320;
TeradataSQLNonReservedWordsParser.RANK = 321;
TeradataSQLNonReservedWordsParser.READS = 322;
TeradataSQLNonReservedWordsParser.REAL = 323;
TeradataSQLNonReservedWordsParser.RECURSIVE = 324;
TeradataSQLNonReservedWordsParser.REFERENCES = 325;
TeradataSQLNonReservedWordsParser.REFERENCING = 326;
TeradataSQLNonReservedWordsParser.REGR_AVGX = 327;
TeradataSQLNonReservedWordsParser.REGR_AVGY = 328;
TeradataSQLNonReservedWordsParser.REGR_COUNT = 329;
TeradataSQLNonReservedWordsParser.REGR_INTERCEPT = 330;
TeradataSQLNonReservedWordsParser.REGR_R2 = 331;
TeradataSQLNonReservedWordsParser.REGR_SLOPE = 332;
TeradataSQLNonReservedWordsParser.REGR_SXX = 333;
TeradataSQLNonReservedWordsParser.REGR_SXY = 334;
TeradataSQLNonReservedWordsParser.REGR_SYY = 335;
TeradataSQLNonReservedWordsParser.RELATIVE = 336;
TeradataSQLNonReservedWordsParser.RELEASE = 337;
TeradataSQLNonReservedWordsParser.RENAME = 338;
TeradataSQLNonReservedWordsParser.REPEAT = 339;
TeradataSQLNonReservedWordsParser.REPLACE = 340;
TeradataSQLNonReservedWordsParser.REPLCONTROL = 341;
TeradataSQLNonReservedWordsParser.REPLICATION = 342;
TeradataSQLNonReservedWordsParser.REQUEST = 343;
TeradataSQLNonReservedWordsParser.RESIGNAL = 344;
TeradataSQLNonReservedWordsParser.RESTART = 345;
TeradataSQLNonReservedWordsParser.RESTORE = 346;
TeradataSQLNonReservedWordsParser.RESULT = 347;
TeradataSQLNonReservedWordsParser.RESUME = 348;
TeradataSQLNonReservedWordsParser.RET = 349;
TeradataSQLNonReservedWordsParser.RETRIEVE = 350;
TeradataSQLNonReservedWordsParser.RETURN = 351;
TeradataSQLNonReservedWordsParser.RETURNS = 352;
TeradataSQLNonReservedWordsParser.REVALIDATE = 353;
TeradataSQLNonReservedWordsParser.REVOKE = 354;
TeradataSQLNonReservedWordsParser.RIGHT = 355;
TeradataSQLNonReservedWordsParser.RIGHTS = 356;
TeradataSQLNonReservedWordsParser.ROLE = 357;
TeradataSQLNonReservedWordsParser.ROLLBACK = 358;
TeradataSQLNonReservedWordsParser.ROLLFORWARD = 359;
TeradataSQLNonReservedWordsParser.ROLLUP = 360;
TeradataSQLNonReservedWordsParser.ROW = 361;
TeradataSQLNonReservedWordsParser.ROW_NUMBER = 362;
TeradataSQLNonReservedWordsParser.ROWID = 363;
TeradataSQLNonReservedWordsParser.ROWS = 364;
TeradataSQLNonReservedWordsParser.SAMPLE = 365;
TeradataSQLNonReservedWordsParser.SAMPLEID = 366;
TeradataSQLNonReservedWordsParser.SCROLL = 367;
TeradataSQLNonReservedWordsParser.SECOND = 368;
TeradataSQLNonReservedWordsParser.SEL = 369;
TeradataSQLNonReservedWordsParser.SELECT = 370;
TeradataSQLNonReservedWordsParser.SESSION = 371;
TeradataSQLNonReservedWordsParser.SET = 372;
TeradataSQLNonReservedWordsParser.SETRESRATE = 373;
TeradataSQLNonReservedWordsParser.SETS = 374;
TeradataSQLNonReservedWordsParser.SETSESSRATE = 375;
TeradataSQLNonReservedWordsParser.SHOW = 376;
TeradataSQLNonReservedWordsParser.SIGNAL = 377;
TeradataSQLNonReservedWordsParser.SIN = 378;
TeradataSQLNonReservedWordsParser.SINH = 379;
TeradataSQLNonReservedWordsParser.SKEW = 380;
TeradataSQLNonReservedWordsParser.SMALLINT = 381;
TeradataSQLNonReservedWordsParser.SOME = 382;
TeradataSQLNonReservedWordsParser.SOUNDEX = 383;
TeradataSQLNonReservedWordsParser.SPECIFIC = 384;
TeradataSQLNonReservedWordsParser.SPOOL = 385;
TeradataSQLNonReservedWordsParser.SQL = 386;
TeradataSQLNonReservedWordsParser.SQLEXCEPTION = 387;
TeradataSQLNonReservedWordsParser.SQLTEXT = 388;
TeradataSQLNonReservedWordsParser.SQLWARNING = 389;
TeradataSQLNonReservedWordsParser.SQRT = 390;
TeradataSQLNonReservedWordsParser.SS = 391;
TeradataSQLNonReservedWordsParser.START = 392;
TeradataSQLNonReservedWordsParser.STARTUP = 393;
TeradataSQLNonReservedWordsParser.STATEMENT = 394;
TeradataSQLNonReservedWordsParser.STATISTICS = 395;
TeradataSQLNonReservedWordsParser.STDDEV_POP = 396;
TeradataSQLNonReservedWordsParser.STDDEV_SAMP = 397;
TeradataSQLNonReservedWordsParser.STEPINFO = 398;
TeradataSQLNonReservedWordsParser.STRING_CS = 399;
TeradataSQLNonReservedWordsParser.SUBSCRIBER = 400;
TeradataSQLNonReservedWordsParser.SUBSTR = 401;
TeradataSQLNonReservedWordsParser.SUBSTRING = 402;
TeradataSQLNonReservedWordsParser.SUM = 403;
TeradataSQLNonReservedWordsParser.SUMMARY = 404;
TeradataSQLNonReservedWordsParser.SUSPEND = 405;
TeradataSQLNonReservedWordsParser.TABLE = 406;
TeradataSQLNonReservedWordsParser.TAN = 407;
TeradataSQLNonReservedWordsParser.TANH = 408;
TeradataSQLNonReservedWordsParser.TBL_CS = 409;
TeradataSQLNonReservedWordsParser.TD_ANYTYPE = 410;
TeradataSQLNonReservedWordsParser.TD_AUTHID = 411;
TeradataSQLNonReservedWordsParser.TD_HOST = 412;
TeradataSQLNonReservedWordsParser.TD_ROWLOADID = 413;
TeradataSQLNonReservedWordsParser.TD_ROWREVISION = 414;
TeradataSQLNonReservedWordsParser.TD_ROWSIZE = 415;
TeradataSQLNonReservedWordsParser.TD_VALIST = 416;
TeradataSQLNonReservedWordsParser.TEMPORARY = 417;
TeradataSQLNonReservedWordsParser.TERMINATE = 418;
TeradataSQLNonReservedWordsParser.THEN = 419;
TeradataSQLNonReservedWordsParser.THRESHOLD = 420;
TeradataSQLNonReservedWordsParser.TIME = 421;
TeradataSQLNonReservedWordsParser.TIMESTAMP = 422;
TeradataSQLNonReservedWordsParser.TIMEZONE_HOUR = 423;
TeradataSQLNonReservedWordsParser.TIMEZONE_MINUTE = 424;
TeradataSQLNonReservedWordsParser.TITLE = 425;
TeradataSQLNonReservedWordsParser.TO = 426;
TeradataSQLNonReservedWordsParser.TOP = 427;
TeradataSQLNonReservedWordsParser.TRACE = 428;
TeradataSQLNonReservedWordsParser.TRAILING = 429;
TeradataSQLNonReservedWordsParser.TRANSACTION = 430;
TeradataSQLNonReservedWordsParser.TRANSACTIONTIME = 431;
TeradataSQLNonReservedWordsParser.TRANSFORM = 432;
TeradataSQLNonReservedWordsParser.TRANSLATE = 433;
TeradataSQLNonReservedWordsParser.TRANSLATE_CHK = 434;
TeradataSQLNonReservedWordsParser.TRIGGER = 435;
TeradataSQLNonReservedWordsParser.TRIM = 436;
TeradataSQLNonReservedWordsParser.TYPE = 437;
TeradataSQLNonReservedWordsParser.UC = 438;
TeradataSQLNonReservedWordsParser.UDTCASTAS = 439;
TeradataSQLNonReservedWordsParser.UDTCASTLPAREN = 440;
TeradataSQLNonReservedWordsParser.UDTMETHOD = 441;
TeradataSQLNonReservedWordsParser.UDTTYPE = 442;
TeradataSQLNonReservedWordsParser.UDTUSAGE = 443;
TeradataSQLNonReservedWordsParser.UESCAPE = 444;
TeradataSQLNonReservedWordsParser.UNDEFINED = 445;
TeradataSQLNonReservedWordsParser.UNDO = 446;
TeradataSQLNonReservedWordsParser.UNION = 447;
TeradataSQLNonReservedWordsParser.UNIQUE = 448;
TeradataSQLNonReservedWordsParser.UNTIL = 449;
TeradataSQLNonReservedWordsParser.UNTIL_CHANGED = 450;
TeradataSQLNonReservedWordsParser.UNTIL_CLOSED = 451;
TeradataSQLNonReservedWordsParser.UPD = 452;
TeradataSQLNonReservedWordsParser.UPDATE = 453;
TeradataSQLNonReservedWordsParser.UPPER = 454;
TeradataSQLNonReservedWordsParser.UPPERCASE = 455;
TeradataSQLNonReservedWordsParser.USER = 456;
TeradataSQLNonReservedWordsParser.USING = 457;
TeradataSQLNonReservedWordsParser.VALIDTIME = 458;
TeradataSQLNonReservedWordsParser.VALUE = 459;
TeradataSQLNonReservedWordsParser.VALUES = 460;
TeradataSQLNonReservedWordsParser.VAR_POP = 461;
TeradataSQLNonReservedWordsParser.VAR_SAMP = 462;
TeradataSQLNonReservedWordsParser.VARBYTE = 463;
TeradataSQLNonReservedWordsParser.VARCHAR = 464;
TeradataSQLNonReservedWordsParser.VARGRAPHIC = 465;
TeradataSQLNonReservedWordsParser.VARIANT_TYPE = 466;
TeradataSQLNonReservedWordsParser.VARYING = 467;
TeradataSQLNonReservedWordsParser.VIEW = 468;
TeradataSQLNonReservedWordsParser.VOLATILE = 469;
TeradataSQLNonReservedWordsParser.WHEN = 470;
TeradataSQLNonReservedWordsParser.WHERE = 471;
TeradataSQLNonReservedWordsParser.WHILE = 472;
TeradataSQLNonReservedWordsParser.WIDTH_BUCKET = 473;
TeradataSQLNonReservedWordsParser.WITH = 474;
TeradataSQLNonReservedWordsParser.WITHOUT = 475;
TeradataSQLNonReservedWordsParser.WORK = 476;
TeradataSQLNonReservedWordsParser.XMLPLAN = 477;
TeradataSQLNonReservedWordsParser.YEAR = 478;
TeradataSQLNonReservedWordsParser.ZEROIFNULL = 479;
TeradataSQLNonReservedWordsParser.ZONE = 480;
TeradataSQLNonReservedWordsParser.ALIAS = 481;
TeradataSQLNonReservedWordsParser.DESCRIPTOR = 482;
TeradataSQLNonReservedWordsParser.GO = 483;
TeradataSQLNonReservedWordsParser.GOTO = 484;
TeradataSQLNonReservedWordsParser.INDICATOR = 485;
TeradataSQLNonReservedWordsParser.PRIVATE = 486;
TeradataSQLNonReservedWordsParser.WAIT = 487;
TeradataSQLNonReservedWordsParser.ABORTSESSIONS = 488;
TeradataSQLNonReservedWordsParser.ABSENT = 489;
TeradataSQLNonReservedWordsParser.ACCESS = 490;
TeradataSQLNonReservedWordsParser.ACCORDING = 491;
TeradataSQLNonReservedWordsParser.ACCUMULATE = 492;
TeradataSQLNonReservedWordsParser.AG = 493;
TeradataSQLNonReservedWordsParser.AGGGEOMINTERSECTION = 494;
TeradataSQLNonReservedWordsParser.AGGGEOMUNION = 495;
TeradataSQLNonReservedWordsParser.ALLDBQL = 496;
TeradataSQLNonReservedWordsParser.ALLOCATE = 497;
TeradataSQLNonReservedWordsParser.ALLOCATION = 498;
TeradataSQLNonReservedWordsParser.ALLOW = 499;
TeradataSQLNonReservedWordsParser.ALLPARAMS = 500;
TeradataSQLNonReservedWordsParser.ALLTDWM = 501;
TeradataSQLNonReservedWordsParser.ALWAYS = 502;
TeradataSQLNonReservedWordsParser.AMPCOUNT = 503;
TeradataSQLNonReservedWordsParser.ANALYSIS = 504;
TeradataSQLNonReservedWordsParser.ANCHOR = 505;
TeradataSQLNonReservedWordsParser.ANCHOR_HOUR = 506;
TeradataSQLNonReservedWordsParser.ANCHOR_MILLISECOND = 507;
TeradataSQLNonReservedWordsParser.ANCHOR_MINUTE = 508;
TeradataSQLNonReservedWordsParser.ANCHOR_SECOND = 509;
TeradataSQLNonReservedWordsParser.APPLNAME = 510;
TeradataSQLNonReservedWordsParser.ARCHIVE = 511;
TeradataSQLNonReservedWordsParser.ARRAY = 512;
TeradataSQLNonReservedWordsParser.ARRAY_ADD = 513;
TeradataSQLNonReservedWordsParser.ARRAY_AGG = 514;
TeradataSQLNonReservedWordsParser.ARRAY_AVG = 515;
TeradataSQLNonReservedWordsParser.ARRAY_COMPARE = 516;
TeradataSQLNonReservedWordsParser.ARRAY_CONCAT = 517;
TeradataSQLNonReservedWordsParser.ARRAY_COUNT_DISTINCT = 518;
TeradataSQLNonReservedWordsParser.ARRAY_DIV = 519;
TeradataSQLNonReservedWordsParser.ARRAY_EQ = 520;
TeradataSQLNonReservedWordsParser.ARRAY_GE = 521;
TeradataSQLNonReservedWordsParser.ARRAY_GET = 522;
TeradataSQLNonReservedWordsParser.ARRAY_GT = 523;
TeradataSQLNonReservedWordsParser.ARRAY_LE = 524;
TeradataSQLNonReservedWordsParser.ARRAY_LT = 525;
TeradataSQLNonReservedWordsParser.ARRAY_MAX = 526;
TeradataSQLNonReservedWordsParser.ARRAY_MIN = 527;
TeradataSQLNonReservedWordsParser.ARRAY_MOD = 528;
TeradataSQLNonReservedWordsParser.ARRAY_MUL = 529;
TeradataSQLNonReservedWordsParser.ARRAY_NE = 530;
TeradataSQLNonReservedWordsParser.ARRAY_SUB = 531;
TeradataSQLNonReservedWordsParser.ARRAY_SUM = 532;
TeradataSQLNonReservedWordsParser.ARRAY_UPDATE = 533;
TeradataSQLNonReservedWordsParser.ARRAY_UPDATE_STRIDE = 534;
TeradataSQLNonReservedWordsParser.ASCII = 535;
TeradataSQLNonReservedWordsParser.ASSIGNMENT = 536;
TeradataSQLNonReservedWordsParser.ATTR = 537;
TeradataSQLNonReservedWordsParser.ATTRIBUTE = 538;
TeradataSQLNonReservedWordsParser.ATTRIBUTES = 539;
TeradataSQLNonReservedWordsParser.ATTRIBUTION = 540;
TeradataSQLNonReservedWordsParser.ATTRS = 541;
TeradataSQLNonReservedWordsParser.AUTH = 542;
TeradataSQLNonReservedWordsParser.AUTO = 543;
TeradataSQLNonReservedWordsParser.AUTOTEMP = 544;
TeradataSQLNonReservedWordsParser.AVRO = 545;
TeradataSQLNonReservedWordsParser.BIT_LENGTH = 546;
TeradataSQLNonReservedWordsParser.BITAND = 547;
TeradataSQLNonReservedWordsParser.BITNOT = 548;
TeradataSQLNonReservedWordsParser.BITOR = 549;
TeradataSQLNonReservedWordsParser.BITXOR = 550;
TeradataSQLNonReservedWordsParser.BLOCKCOMPRESSION = 551;
TeradataSQLNonReservedWordsParser.BLOCKCOMPRESSIONALGORITHM = 552;
TeradataSQLNonReservedWordsParser.BLOCKCOMPRESSIONLEVEL = 553;
TeradataSQLNonReservedWordsParser.BOM = 554;
TeradataSQLNonReservedWordsParser.BOTTOM = 555;
TeradataSQLNonReservedWordsParser.BSON = 556;
TeradataSQLNonReservedWordsParser.C = 557;
TeradataSQLNonReservedWordsParser.CALENDAR = 558;
TeradataSQLNonReservedWordsParser.CALLED = 559;
TeradataSQLNonReservedWordsParser.CALLER = 560;
TeradataSQLNonReservedWordsParser.CAMSET = 561;
TeradataSQLNonReservedWordsParser.CAMSET_L = 562;
TeradataSQLNonReservedWordsParser.CAPTURE = 563;
TeradataSQLNonReservedWordsParser.CARDINALITY = 564;
TeradataSQLNonReservedWordsParser.CEIL = 565;
TeradataSQLNonReservedWordsParser.CEILING = 566;
TeradataSQLNonReservedWordsParser.CHANGERATE = 567;
TeradataSQLNonReservedWordsParser.CHARACTERISTICS = 568;
TeradataSQLNonReservedWordsParser.CHARSET = 569;
TeradataSQLNonReservedWordsParser.CHARSET_COLL = 570;
TeradataSQLNonReservedWordsParser.CHECKSUM = 571;
TeradataSQLNonReservedWordsParser.CHR = 572;
TeradataSQLNonReservedWordsParser.CLASS_ORIGIN = 573;
TeradataSQLNonReservedWordsParser.CLICKLAG = 574;
TeradataSQLNonReservedWordsParser.CLIENT = 575;
TeradataSQLNonReservedWordsParser.CNT = 576;
TeradataSQLNonReservedWordsParser.COLOCATE = 577;
TeradataSQLNonReservedWordsParser.COLUMNMETA = 578;
TeradataSQLNonReservedWordsParser.COLUMNS = 579;
TeradataSQLNonReservedWordsParser.COLUMNSPERINDEX = 580;
TeradataSQLNonReservedWordsParser.COLUMNSPERJOININDEX = 581;
TeradataSQLNonReservedWordsParser.COMMAND_FUNCTION = 582;
TeradataSQLNonReservedWordsParser.COMMAND_FUNCTION_CODE = 583;
TeradataSQLNonReservedWordsParser.COMPARISON = 584;
TeradataSQLNonReservedWordsParser.COMPILE = 585;
TeradataSQLNonReservedWordsParser.CONCAT = 586;
TeradataSQLNonReservedWordsParser.CONCURRENT = 587;
TeradataSQLNonReservedWordsParser.CONDITION = 588;
TeradataSQLNonReservedWordsParser.CONDITION_IDENTIFIER = 589;
TeradataSQLNonReservedWordsParser.CONDITION_NUMBER = 590;
TeradataSQLNonReservedWordsParser.CONTAINED = 591;
TeradataSQLNonReservedWordsParser.CONTAINEDTOKEN = 592;
TeradataSQLNonReservedWordsParser.CONTENT = 593;
TeradataSQLNonReservedWordsParser.CONTIGUOUS = 594;
TeradataSQLNonReservedWordsParser.COST = 595;
TeradataSQLNonReservedWordsParser.COSTS = 596;
TeradataSQLNonReservedWordsParser.COUNTSET = 597;
TeradataSQLNonReservedWordsParser.CPP = 598;
TeradataSQLNonReservedWordsParser.CPUTIME = 599;
TeradataSQLNonReservedWordsParser.CPUTIMENORM = 600;
TeradataSQLNonReservedWordsParser.CREATEDATASET = 601;
TeradataSQLNonReservedWordsParser.CREATOR = 602;
TeradataSQLNonReservedWordsParser.CUME_DIST = 603;
TeradataSQLNonReservedWordsParser.CURDATE = 604;
TeradataSQLNonReservedWordsParser.CURTIME = 605;
TeradataSQLNonReservedWordsParser.DATA = 606;
TeradataSQLNonReservedWordsParser.DATASET = 607;
TeradataSQLNonReservedWordsParser.DAY_OF_CALENDAR = 608;
TeradataSQLNonReservedWordsParser.DAY_OF_MONTH = 609;
TeradataSQLNonReservedWordsParser.DAY_OF_WEEK = 610;
TeradataSQLNonReservedWordsParser.DAY_OF_YEAR = 611;
TeradataSQLNonReservedWordsParser.DAYNUMBER_OF_CALENDAR = 612;
TeradataSQLNonReservedWordsParser.DAYNUMBER_OF_MONTH = 613;
TeradataSQLNonReservedWordsParser.DAYNUMBER_OF_WEEK = 614;
TeradataSQLNonReservedWordsParser.DAYNUMBER_OF_YEAR = 615;
TeradataSQLNonReservedWordsParser.DAYOCCURRENCE_OF_MONTH = 616;
TeradataSQLNonReservedWordsParser.DBA = 617;
TeradataSQLNonReservedWordsParser.DBC = 618;
TeradataSQLNonReservedWordsParser.DEBUG = 619;
TeradataSQLNonReservedWordsParser.DECAMSET = 620;
TeradataSQLNonReservedWordsParser.DECAMSET_L = 621;
TeradataSQLNonReservedWordsParser.DECODE = 622;
TeradataSQLNonReservedWordsParser.DECOMPRESS = 623;
TeradataSQLNonReservedWordsParser.DEFINER = 624;
TeradataSQLNonReservedWordsParser.DELIMITER = 625;
TeradataSQLNonReservedWordsParser.DELTA_T = 626;
TeradataSQLNonReservedWordsParser.DEMOGRAPHICS = 627;
TeradataSQLNonReservedWordsParser.DENIALS = 628;
TeradataSQLNonReservedWordsParser.DENSE = 629;
TeradataSQLNonReservedWordsParser.DENSE_RANK = 630;
TeradataSQLNonReservedWordsParser.DESCRIBE = 631;
TeradataSQLNonReservedWordsParser.DETAILED = 632;
TeradataSQLNonReservedWordsParser.DIAGNOSTICS = 633;
TeradataSQLNonReservedWordsParser.DIGITS = 634;
TeradataSQLNonReservedWordsParser.DIMENSION = 635;
TeradataSQLNonReservedWordsParser.DOCUMENT = 636;
TeradataSQLNonReservedWordsParser.DOT = 637;
TeradataSQLNonReservedWordsParser.DOWN = 638;
TeradataSQLNonReservedWordsParser.DR = 639;
TeradataSQLNonReservedWordsParser.DUPCOUNT = 640;
TeradataSQLNonReservedWordsParser.DUPCOUNTCUM = 641;
TeradataSQLNonReservedWordsParser.EBCDIC = 642;
TeradataSQLNonReservedWordsParser.EDITDISTANCE = 643;
TeradataSQLNonReservedWordsParser.ELAPSEDSEC = 644;
TeradataSQLNonReservedWordsParser.ELAPSEDTIME = 645;
TeradataSQLNonReservedWordsParser.ELEMENT = 646;
TeradataSQLNonReservedWordsParser.ELZS_H = 647;
TeradataSQLNonReservedWordsParser.EMITNULL = 648;
TeradataSQLNonReservedWordsParser.EMPTY = 649;
TeradataSQLNonReservedWordsParser.EMPTY_BLOB = 650;
TeradataSQLNonReservedWordsParser.EMPTY_CLOB = 651;
TeradataSQLNonReservedWordsParser.ENCODE = 652;
TeradataSQLNonReservedWordsParser.ENCODING = 653;
TeradataSQLNonReservedWordsParser.ENCRYPT = 654;
TeradataSQLNonReservedWordsParser.ERRORS = 655;
TeradataSQLNonReservedWordsParser.ERRORTBL = 656;
TeradataSQLNonReservedWordsParser.EVENTCOLUMN = 657;
TeradataSQLNonReservedWordsParser.EXCEPTION = 658;
TeradataSQLNonReservedWordsParser.EXCL = 659;
TeradataSQLNonReservedWordsParser.EXCLUDE = 660;
TeradataSQLNonReservedWordsParser.EXCLUDING = 661;
TeradataSQLNonReservedWordsParser.EXCLUSIVE = 662;
TeradataSQLNonReservedWordsParser.EXPIRE = 663;
TeradataSQLNonReservedWordsParser.EXPORT = 664;
TeradataSQLNonReservedWordsParser.EXPORTWIDTH = 665;
TeradataSQLNonReservedWordsParser.FALSE = 666;
TeradataSQLNonReservedWordsParser.FEATUREINFO = 667;
TeradataSQLNonReservedWordsParser.FILE = 668;
TeradataSQLNonReservedWordsParser.FILL = 669;
TeradataSQLNonReservedWordsParser.FILTER = 670;
TeradataSQLNonReservedWordsParser.FINAL = 671;
TeradataSQLNonReservedWordsParser.FIRST_NOTNULL = 672;
TeradataSQLNonReservedWordsParser.FIRST_VALUE = 673;
TeradataSQLNonReservedWordsParser.FLOOR = 674;
TeradataSQLNonReservedWordsParser.FOLLOWING = 675;
TeradataSQLNonReservedWordsParser.FOREIGNFUNCTION = 676;
TeradataSQLNonReservedWordsParser.FORTOKEN = 677;
TeradataSQLNonReservedWordsParser.FRIDAY = 678;
TeradataSQLNonReservedWordsParser.FROM_BYTES = 679;
TeradataSQLNonReservedWordsParser.FUNCTIONPARAMETER = 680;
TeradataSQLNonReservedWordsParser.G = 681;
TeradataSQLNonReservedWordsParser.GETBIT = 682;
TeradataSQLNonReservedWordsParser.GETPSFVERSION = 683;
TeradataSQLNonReservedWordsParser.GETQUERYBAND = 684;
TeradataSQLNonReservedWordsParser.GETQUERYBANDVALUE = 685;
TeradataSQLNonReservedWordsParser.GETTIMEZONEDISPLACEMENT = 686;
TeradataSQLNonReservedWordsParser.GLOBAL = 687;
TeradataSQLNonReservedWordsParser.GLOP = 688;
TeradataSQLNonReservedWordsParser.GREATEST = 689;
TeradataSQLNonReservedWordsParser.HIGH = 690;
TeradataSQLNonReservedWordsParser.HOST = 691;
TeradataSQLNonReservedWordsParser.IDENTIFYDATABASE = 692;
TeradataSQLNonReservedWordsParser.IDENTIFYSESSION = 693;
TeradataSQLNonReservedWordsParser.IDENTIFYTABLE = 694;
TeradataSQLNonReservedWordsParser.IDENTIFYUSER = 695;
TeradataSQLNonReservedWordsParser.IFP = 696;
TeradataSQLNonReservedWordsParser.IGNORE = 697;
TeradataSQLNonReservedWordsParser.IMMEDIATELY = 698;
TeradataSQLNonReservedWordsParser.IMPORT = 699;
TeradataSQLNonReservedWordsParser.INCLUDE = 700;
TeradataSQLNonReservedWordsParser.INCLUDING = 701;
TeradataSQLNonReservedWordsParser.INCREMENT = 702;
TeradataSQLNonReservedWordsParser.INCREMENTAL = 703;
TeradataSQLNonReservedWordsParser.INDENT = 704;
TeradataSQLNonReservedWordsParser.INDEXESPERTABLE = 705;
TeradataSQLNonReservedWordsParser.INDEXMAINTMODE = 706;
TeradataSQLNonReservedWordsParser.INIT = 707;
TeradataSQLNonReservedWordsParser.INITCAP = 708;
TeradataSQLNonReservedWordsParser.INLINE = 709;
TeradataSQLNonReservedWordsParser.INSTANTIABLE = 710;
TeradataSQLNonReservedWordsParser.INSTR = 711;
TeradataSQLNonReservedWordsParser.INTERNAL = 712;
TeradataSQLNonReservedWordsParser.INVOKER = 713;
TeradataSQLNonReservedWordsParser.IOCOUNT = 714;
TeradataSQLNonReservedWordsParser.IPARTITION = 715;
TeradataSQLNonReservedWordsParser.ISOLATED = 716;
TeradataSQLNonReservedWordsParser.ISOLATION = 717;
TeradataSQLNonReservedWordsParser.JAVA = 718;
TeradataSQLNonReservedWordsParser.JIS_COLL = 719;
TeradataSQLNonReservedWordsParser.JSON = 720;
TeradataSQLNonReservedWordsParser.JSON_AGG = 721;
TeradataSQLNonReservedWordsParser.JSON_COMPOSE = 722;
TeradataSQLNonReservedWordsParser.K = 723;
TeradataSQLNonReservedWordsParser.KANJI1 = 724;
TeradataSQLNonReservedWordsParser.KANJISJIS = 725;
TeradataSQLNonReservedWordsParser.KBYTE = 726;
TeradataSQLNonReservedWordsParser.KBYTES = 727;
TeradataSQLNonReservedWordsParser.KEEP = 728;
TeradataSQLNonReservedWordsParser.KILOBYTES = 729;
TeradataSQLNonReservedWordsParser.LAG = 730;
TeradataSQLNonReservedWordsParser.LAST = 731;
TeradataSQLNonReservedWordsParser.LAST_DAY = 732;
TeradataSQLNonReservedWordsParser.LAST_NOTNULL = 733;
TeradataSQLNonReservedWordsParser.LAST_VALUE = 734;
TeradataSQLNonReservedWordsParser.LATIN = 735;
TeradataSQLNonReservedWordsParser.LDIFF = 736;
TeradataSQLNonReservedWordsParser.LEAD = 737;
TeradataSQLNonReservedWordsParser.LEAST = 738;
TeradataSQLNonReservedWordsParser.LENGTH = 739;
TeradataSQLNonReservedWordsParser.LEVEL = 740;
TeradataSQLNonReservedWordsParser.LIST = 741;
TeradataSQLNonReservedWordsParser.LOAD = 742;
TeradataSQLNonReservedWordsParser.LOCATE = 743;
TeradataSQLNonReservedWordsParser.LOCKEDUSEREXPIRE = 744;
TeradataSQLNonReservedWordsParser.LOW = 745;
TeradataSQLNonReservedWordsParser.LPAD = 746;
TeradataSQLNonReservedWordsParser.LTRIM = 747;
TeradataSQLNonReservedWordsParser.LZCOMP = 748;
TeradataSQLNonReservedWordsParser.LZCOMP_L = 749;
TeradataSQLNonReservedWordsParser.LZDECOMP = 750;
TeradataSQLNonReservedWordsParser.LZDECOMP_L = 751;
TeradataSQLNonReservedWordsParser.M = 752;
TeradataSQLNonReservedWordsParser.MAD = 753;
TeradataSQLNonReservedWordsParser.MANUAL = 754;
TeradataSQLNonReservedWordsParser.MAPPING = 755;
TeradataSQLNonReservedWordsParser.MATCHED = 756;
TeradataSQLNonReservedWordsParser.MAX_CHOOSE = 757;
TeradataSQLNonReservedWordsParser.MAXCHAR = 758;
TeradataSQLNonReservedWordsParser.MAXINTERVALS = 759;
TeradataSQLNonReservedWordsParser.MAXLOGONATTEMPTS = 760;
TeradataSQLNonReservedWordsParser.MAXVALUE = 761;
TeradataSQLNonReservedWordsParser.MAXVALUELENGTH = 762;
TeradataSQLNonReservedWordsParser.MEDIAN = 763;
TeradataSQLNonReservedWordsParser.MEDIUM = 764;
TeradataSQLNonReservedWordsParser.MEETS = 765;
TeradataSQLNonReservedWordsParser.MEMBER = 766;
TeradataSQLNonReservedWordsParser.MERGEBLOCKRATIO = 767;
TeradataSQLNonReservedWordsParser.MESSAGE_LENGTH = 768;
TeradataSQLNonReservedWordsParser.MESSAGE_TEXT = 769;
TeradataSQLNonReservedWordsParser.MIN_CHOOSE = 770;
TeradataSQLNonReservedWordsParser.MINCHAR = 771;
TeradataSQLNonReservedWordsParser.MINVALUE = 772;
TeradataSQLNonReservedWordsParser.MODIFIED = 773;
TeradataSQLNonReservedWordsParser.MONDAY = 774;
TeradataSQLNonReservedWordsParser.MONITORQUERYBAND = 775;
TeradataSQLNonReservedWordsParser.MONITORSESSIONRATE = 776;
TeradataSQLNonReservedWordsParser.MONITORVERSION = 777;
TeradataSQLNonReservedWordsParser.MONTH_BEGIN = 778;
TeradataSQLNonReservedWordsParser.MONTH_END = 779;
TeradataSQLNonReservedWordsParser.MONTH_OF_CALENDAR = 780;
TeradataSQLNonReservedWordsParser.MONTH_OF_QUARTER = 781;
TeradataSQLNonReservedWordsParser.MONTH_OF_YEAR = 782;
TeradataSQLNonReservedWordsParser.MONTHNUMBER_OF_CALENDAR = 783;
TeradataSQLNonReservedWordsParser.MONTHNUMBER_OF_QUARTER = 784;
TeradataSQLNonReservedWordsParser.MONTHNUMBER_OF_YEAR = 785;
TeradataSQLNonReservedWordsParser.MONTHS_BETWEEN = 786;
TeradataSQLNonReservedWordsParser.MORE_ = 787;
TeradataSQLNonReservedWordsParser.MULTINATIONAL = 788;
TeradataSQLNonReservedWordsParser.NAME = 789;
TeradataSQLNonReservedWordsParser.NAMESPACE = 790;
TeradataSQLNonReservedWordsParser.NEVER = 791;
TeradataSQLNonReservedWordsParser.NEXT_DAY = 792;
TeradataSQLNonReservedWordsParser.NGRAM = 793;
TeradataSQLNonReservedWordsParser.NIL = 794;
TeradataSQLNonReservedWordsParser.NODDLTEXT = 795;
TeradataSQLNonReservedWordsParser.NODE = 796;
TeradataSQLNonReservedWordsParser.NONOPTCOST = 797;
TeradataSQLNonReservedWordsParser.NONOPTINIT = 798;
TeradataSQLNonReservedWordsParser.NONSEQUENCED = 799;
TeradataSQLNonReservedWordsParser.NORIGHT = 800;
TeradataSQLNonReservedWordsParser.NOSEXTRACTVARFROMPATH = 801;
TeradataSQLNonReservedWordsParser.NOTATION = 802;
TeradataSQLNonReservedWordsParser.NOW = 803;
TeradataSQLNonReservedWordsParser.NPATH = 804;
TeradataSQLNonReservedWordsParser.NTH = 805;
TeradataSQLNonReservedWordsParser.NULLS = 806;
TeradataSQLNonReservedWordsParser.NUMFPFNS = 807;
TeradataSQLNonReservedWordsParser.NUMTODSINTERVAL = 808;
TeradataSQLNonReservedWordsParser.NUMTOYMINTERVAL = 809;
TeradataSQLNonReservedWordsParser.NVL = 810;
TeradataSQLNonReservedWordsParser.NVL2 = 811;
TeradataSQLNonReservedWordsParser.NVP = 812;
TeradataSQLNonReservedWordsParser.OA = 813;
TeradataSQLNonReservedWordsParser.OADD_MONTHS = 814;
TeradataSQLNonReservedWordsParser.OCOUNT = 815;
TeradataSQLNonReservedWordsParser.ODELETE = 816;
TeradataSQLNonReservedWordsParser.OEXISTS = 817;
TeradataSQLNonReservedWordsParser.OEXTEND = 818;
TeradataSQLNonReservedWordsParser.OFIRST = 819;
TeradataSQLNonReservedWordsParser.OLAST = 820;
TeradataSQLNonReservedWordsParser.OLD_NEW_TABLE = 821;
TeradataSQLNonReservedWordsParser.OLIMIT = 822;
TeradataSQLNonReservedWordsParser.ONEXT = 823;
TeradataSQLNonReservedWordsParser.ONLINE = 824;
TeradataSQLNonReservedWordsParser.OPRIOR = 825;
TeradataSQLNonReservedWordsParser.OPTIONS = 826;
TeradataSQLNonReservedWordsParser.ORDERBYVALUES = 827;
TeradataSQLNonReservedWordsParser.ORDERED_ANALYTIC = 828;
TeradataSQLNonReservedWordsParser.ORDINALITY = 829;
TeradataSQLNonReservedWordsParser.OREPLACE = 830;
TeradataSQLNonReservedWordsParser.OTRANSLATE = 831;
TeradataSQLNonReservedWordsParser.OTRIM = 832;
TeradataSQLNonReservedWordsParser.OVERLAYS = 833;
TeradataSQLNonReservedWordsParser.OWNER = 834;
TeradataSQLNonReservedWordsParser.P_INTERSECT = 835;
TeradataSQLNonReservedWordsParser.P_NORMALIZE = 836;
TeradataSQLNonReservedWordsParser.PARAMID = 837;
TeradataSQLNonReservedWordsParser.PARAMINFO = 838;
TeradataSQLNonReservedWordsParser.PARENT = 839;
TeradataSQLNonReservedWordsParser.PARTITION = 840;
TeradataSQLNonReservedWordsParser.PARTITION_L = 841;
TeradataSQLNonReservedWordsParser.PARTITIONED = 842;
TeradataSQLNonReservedWordsParser.PARTITIONNAMES = 843;
TeradataSQLNonReservedWordsParser.PASS = 844;
TeradataSQLNonReservedWordsParser.PASSING = 845;
TeradataSQLNonReservedWordsParser.PATH_GENERATOR = 846;
TeradataSQLNonReservedWordsParser.PATH_START = 847;
TeradataSQLNonReservedWordsParser.PATH_SUMMARIZER = 848;
TeradataSQLNonReservedWordsParser.PATTERN = 849;
TeradataSQLNonReservedWordsParser.PERCENTILE = 850;
TeradataSQLNonReservedWordsParser.PERCENTILE_CONT = 851;
TeradataSQLNonReservedWordsParser.PERCENTILE_DISC = 852;
TeradataSQLNonReservedWordsParser.PERIOD = 853;
TeradataSQLNonReservedWordsParser.PIVOT = 854;
TeradataSQLNonReservedWordsParser.PORTION = 855;
TeradataSQLNonReservedWordsParser.POWER = 856;
TeradataSQLNonReservedWordsParser.PRECEDES = 857;
TeradataSQLNonReservedWordsParser.PRECEDING = 858;
TeradataSQLNonReservedWordsParser.PREFIX = 859;
TeradataSQLNonReservedWordsParser.PRINT = 860;
TeradataSQLNonReservedWordsParser.PRIOR = 861;
TeradataSQLNonReservedWordsParser.PROTECTED = 862;
TeradataSQLNonReservedWordsParser.QUARTER_BEGIN = 863;
TeradataSQLNonReservedWordsParser.QUARTER_END = 864;
TeradataSQLNonReservedWordsParser.QUARTER_OF_CALENDAR = 865;
TeradataSQLNonReservedWordsParser.QUARTER_OF_YEAR = 866;
TeradataSQLNonReservedWordsParser.QUARTERNUMBER_OF_CALENDAR = 867;
TeradataSQLNonReservedWordsParser.QUARTERNUMBER_OF_YEAR = 868;
TeradataSQLNonReservedWordsParser.QUERY = 869;
TeradataSQLNonReservedWordsParser.QUERY_BAND = 870;
TeradataSQLNonReservedWordsParser.QUOTECHAR = 871;
TeradataSQLNonReservedWordsParser.RANDOMIZED = 872;
TeradataSQLNonReservedWordsParser.RANGE = 873;
TeradataSQLNonReservedWordsParser.RANGE_L = 874;
TeradataSQLNonReservedWordsParser.RAPIDFIRE = 875;
TeradataSQLNonReservedWordsParser.RDIFF = 876;
TeradataSQLNonReservedWordsParser.READ = 877;
TeradataSQLNonReservedWordsParser.RECALC = 878;
TeradataSQLNonReservedWordsParser.REGEXP_INSTR = 879;
TeradataSQLNonReservedWordsParser.REGEXP_REPLACE = 880;
TeradataSQLNonReservedWordsParser.REGEXP_SIMILAR = 881;
TeradataSQLNonReservedWordsParser.REGEXP_SUBSTR = 882;
TeradataSQLNonReservedWordsParser.REPLACEMENT = 883;
TeradataSQLNonReservedWordsParser.RESET = 884;
TeradataSQLNonReservedWordsParser.RESPECT = 885;
TeradataSQLNonReservedWordsParser.RESTRICTWORDS = 886;
TeradataSQLNonReservedWordsParser.RETAIN = 887;
TeradataSQLNonReservedWordsParser.RETURNED_SQLSTATE = 888;
TeradataSQLNonReservedWordsParser.RETURNING = 889;
TeradataSQLNonReservedWordsParser.REUSE = 890;
TeradataSQLNonReservedWordsParser.ROOT = 891;
TeradataSQLNonReservedWordsParser.ROTATELEFT = 892;
TeradataSQLNonReservedWordsParser.ROTATERIGHT = 893;
TeradataSQLNonReservedWordsParser.ROUND = 894;
TeradataSQLNonReservedWordsParser.ROW_COUNT = 895;
TeradataSQLNonReservedWordsParser.ROWIDGEN = 896;
TeradataSQLNonReservedWordsParser.ROWIDGEN2 = 897;
TeradataSQLNonReservedWordsParser.RPAD = 898;
TeradataSQLNonReservedWordsParser.RTRIM = 899;
TeradataSQLNonReservedWordsParser.RU = 900;
TeradataSQLNonReservedWordsParser.RULES = 901;
TeradataSQLNonReservedWordsParser.RULESET = 902;
TeradataSQLNonReservedWordsParser.SAMPLES = 903;
TeradataSQLNonReservedWordsParser.SATURDAY = 904;
TeradataSQLNonReservedWordsParser.SCHEMA = 905;
TeradataSQLNonReservedWordsParser.SCRIPT = 906;
TeradataSQLNonReservedWordsParser.SCRIPT_COMMAND = 907;
TeradataSQLNonReservedWordsParser.SEARCHSPACE = 908;
TeradataSQLNonReservedWordsParser.SEARCHUIFDBPATH = 909;
TeradataSQLNonReservedWordsParser.SECURITY = 910;
TeradataSQLNonReservedWordsParser.SEED = 911;
TeradataSQLNonReservedWordsParser.SELF = 912;
TeradataSQLNonReservedWordsParser.SEQ = 913;
TeradataSQLNonReservedWordsParser.SEQUENCE = 914;
TeradataSQLNonReservedWordsParser.SEQUENCED = 915;
TeradataSQLNonReservedWordsParser.SERIALIZABLE = 916;
TeradataSQLNonReservedWordsParser.SERVER = 917;
TeradataSQLNonReservedWordsParser.SESSIONIZE = 918;
TeradataSQLNonReservedWordsParser.SETBIT = 919;
TeradataSQLNonReservedWordsParser.SETRESOURCERATE = 920;
TeradataSQLNonReservedWordsParser.SETSESSIONACCOUNT = 921;
TeradataSQLNonReservedWordsParser.SETSESSIONRATE = 922;
TeradataSQLNonReservedWordsParser.SHARE = 923;
TeradataSQLNonReservedWordsParser.SHIFTLEFT = 924;
TeradataSQLNonReservedWordsParser.SHIFTRIGHT = 925;
TeradataSQLNonReservedWordsParser.SIGN = 926;
TeradataSQLNonReservedWordsParser.SIZE = 927;
TeradataSQLNonReservedWordsParser.SNAPPY_COMPRESS = 928;
TeradataSQLNonReservedWordsParser.SNAPPY_DECOMPRESS = 929;
TeradataSQLNonReservedWordsParser.SOURCE = 930;
TeradataSQLNonReservedWordsParser.SPARSE = 931;
TeradataSQLNonReservedWordsParser.SPECCHAR = 932;
TeradataSQLNonReservedWordsParser.SPL = 933;
TeradataSQLNonReservedWordsParser.SQLSTATE = 934;
TeradataSQLNonReservedWordsParser.SR = 935;
TeradataSQLNonReservedWordsParser.ST_GEOMETRY = 936;
TeradataSQLNonReservedWordsParser.STAT = 937;
TeradataSQLNonReservedWordsParser.STATIC = 938;
TeradataSQLNonReservedWordsParser.STATS = 939;
TeradataSQLNonReservedWordsParser.STATSUSAGE = 940;
TeradataSQLNonReservedWordsParser.STORAGE = 941;
TeradataSQLNonReservedWordsParser.STRIP = 942;
TeradataSQLNonReservedWordsParser.STRTOK = 943;
TeradataSQLNonReservedWordsParser.STYLE = 944;
TeradataSQLNonReservedWordsParser.SUBBITSTR = 945;
TeradataSQLNonReservedWordsParser.SUBCLASS_ORIGIN = 946;
TeradataSQLNonReservedWordsParser.SUCCEEDS = 947;
TeradataSQLNonReservedWordsParser.SUMMARYONLY = 948;
TeradataSQLNonReservedWordsParser.SUNDAY = 949;
TeradataSQLNonReservedWordsParser.SYMBOLS = 950;
TeradataSQLNonReservedWordsParser.SYSTEM = 951;
TeradataSQLNonReservedWordsParser.SYSTEM_TIME = 952;
TeradataSQLNonReservedWordsParser.SYSTEMTEST = 953;
TeradataSQLNonReservedWordsParser.TARGET = 954;
TeradataSQLNonReservedWordsParser.TD_ARRAY2P = 955;
TeradataSQLNonReservedWordsParser.TD_DATASET = 956;
TeradataSQLNonReservedWordsParser.TD_DAY_OF_CALENDAR = 957;
TeradataSQLNonReservedWordsParser.TD_DAY_OF_MONTH = 958;
TeradataSQLNonReservedWordsParser.TD_DAY_OF_WEEK = 959;
TeradataSQLNonReservedWordsParser.TD_DAY_OF_YEAR = 960;
TeradataSQLNonReservedWordsParser.TD_GENERAL = 961;
TeradataSQLNonReservedWordsParser.TD_GETTIMEBUCKET = 962;
TeradataSQLNonReservedWordsParser.TD_INTERNAL = 963;
TeradataSQLNonReservedWordsParser.TD_LZ_COMPRESS = 964;
TeradataSQLNonReservedWordsParser.TD_LZ_DECOMPRESS = 965;
TeradataSQLNonReservedWordsParser.TD_MONTH_OF_CALENDAR = 966;
TeradataSQLNonReservedWordsParser.TD_MONTH_OF_QUARTER = 967;
TeradataSQLNonReservedWordsParser.TD_MONTH_OF_YEAR = 968;
TeradataSQLNonReservedWordsParser.TD_QUARTER_OF_CALENDAR = 969;
TeradataSQLNonReservedWordsParser.TD_QUARTER_OF_YEAR = 970;
TeradataSQLNonReservedWordsParser.TD_TIME_BUCKET_NUMBER = 971;
TeradataSQLNonReservedWordsParser.TD_WEEK_OF_CALENDAR = 972;
TeradataSQLNonReservedWordsParser.TD_WEEK_OF_MONTH = 973;
TeradataSQLNonReservedWordsParser.TD_WEEK_OF_YEAR = 974;
TeradataSQLNonReservedWordsParser.TD_WEEKDAY_OF_MONTH = 975;
TeradataSQLNonReservedWordsParser.TD_YEAR_OF_CALENDAR = 976;
TeradataSQLNonReservedWordsParser.TDWMEVENT = 977;
TeradataSQLNonReservedWordsParser.TDWMEXCEPTION = 978;
TeradataSQLNonReservedWordsParser.TDWMHISTORY = 979;
TeradataSQLNonReservedWordsParser.TEMPORAL_DATE = 980;
TeradataSQLNonReservedWordsParser.TEMPORAL_TIMESTAMP = 981;
TeradataSQLNonReservedWordsParser.TEXT = 982;
TeradataSQLNonReservedWordsParser.THRESHOLDPERCENT = 983;
TeradataSQLNonReservedWordsParser.THROUGH = 984;
TeradataSQLNonReservedWordsParser.THURSDAY = 985;
TeradataSQLNonReservedWordsParser.TIES = 986;
TeradataSQLNonReservedWordsParser.TIMECODE = 987;
TeradataSQLNonReservedWordsParser.TIMECOLUMN = 988;
TeradataSQLNonReservedWordsParser.TIMEOUT = 989;
TeradataSQLNonReservedWordsParser.TIMESTAMPCOLUMN = 990;
TeradataSQLNonReservedWordsParser.TO_BYTE = 991;
TeradataSQLNonReservedWordsParser.TO_BYTES = 992;
TeradataSQLNonReservedWordsParser.TO_CHAR = 993;
TeradataSQLNonReservedWordsParser.TO_DATE = 994;
TeradataSQLNonReservedWordsParser.TO_DSINTERVAL = 995;
TeradataSQLNonReservedWordsParser.TO_NUMBER = 996;
TeradataSQLNonReservedWordsParser.TO_TIMESTAMP = 997;
TeradataSQLNonReservedWordsParser.TO_TIMESTAMP_TZ = 998;
TeradataSQLNonReservedWordsParser.TO_YMINTERVAL = 999;
TeradataSQLNonReservedWordsParser.TOTOKEN = 1000;
TeradataSQLNonReservedWordsParser.TPA = 1001;
TeradataSQLNonReservedWordsParser.TRANSACTION_ACTIVE = 1002;
TeradataSQLNonReservedWordsParser.TRANSUNICODETOUTF8 = 1003;
TeradataSQLNonReservedWordsParser.TRANSUTF8TOUNICODE = 1004;
TeradataSQLNonReservedWordsParser.TRUE = 1005;
TeradataSQLNonReservedWordsParser.TRUNC = 1006;
TeradataSQLNonReservedWordsParser.TRUST_ONLY = 1007;
TeradataSQLNonReservedWordsParser.TTGRANULARITY = 1008;
TeradataSQLNonReservedWordsParser.TUESDAY = 1009;
TeradataSQLNonReservedWordsParser.UBJSON = 1010;
TeradataSQLNonReservedWordsParser.UCASE = 1011;
TeradataSQLNonReservedWordsParser.UDFSEARCHPATH = 1012;
TeradataSQLNonReservedWordsParser.UNBOUNDED = 1013;
TeradataSQLNonReservedWordsParser.UNCOMMITTED = 1014;
TeradataSQLNonReservedWordsParser.UNICODE = 1015;
TeradataSQLNonReservedWordsParser.UNKNOWN = 1016;
TeradataSQLNonReservedWordsParser.UNPIVOT = 1017;
TeradataSQLNonReservedWordsParser.USE = 1018;
TeradataSQLNonReservedWordsParser.USECOUNT = 1019;
TeradataSQLNonReservedWordsParser.UTILITYINFO = 1020;
TeradataSQLNonReservedWordsParser.VARRAY = 1021;
TeradataSQLNonReservedWordsParser.VERBOSE = 1022;
TeradataSQLNonReservedWordsParser.VERSION = 1023;
TeradataSQLNonReservedWordsParser.VERSIONING = 1024;
TeradataSQLNonReservedWordsParser.WARNING = 1025;
TeradataSQLNonReservedWordsParser.WEDNESDAY = 1026;
TeradataSQLNonReservedWordsParser.WEEK_BEGIN = 1027;
TeradataSQLNonReservedWordsParser.WEEK_END = 1028;
TeradataSQLNonReservedWordsParser.WEEK_OF_CALENDAR = 1029;
TeradataSQLNonReservedWordsParser.WEEK_OF_MONTH = 1030;
TeradataSQLNonReservedWordsParser.WEEK_OF_YEAR = 1031;
TeradataSQLNonReservedWordsParser.WEEKDAY_OF_MONTH = 1032;
TeradataSQLNonReservedWordsParser.WEEKNUMBER_OF_CALENDAR = 1033;
TeradataSQLNonReservedWordsParser.WEEKNUMBER_OF_MONTH = 1034;
TeradataSQLNonReservedWordsParser.WEEKNUMBER_OF_QUARTER = 1035;
TeradataSQLNonReservedWordsParser.WEEKNUMBER_OF_YEAR = 1036;
TeradataSQLNonReservedWordsParser.WHITESPACE = 1037;
TeradataSQLNonReservedWordsParser.WINDOWSIZE = 1038;
TeradataSQLNonReservedWordsParser.WITHIN = 1039;
TeradataSQLNonReservedWordsParser.WORKLOAD = 1040;
TeradataSQLNonReservedWordsParser.WRITE = 1041;
TeradataSQLNonReservedWordsParser.XML = 1042;
TeradataSQLNonReservedWordsParser.XMLAGG = 1043;
TeradataSQLNonReservedWordsParser.XMLATTRIBUTES = 1044;
TeradataSQLNonReservedWordsParser.XMLCOMMENT = 1045;
TeradataSQLNonReservedWordsParser.XMLCONCAT = 1046;
TeradataSQLNonReservedWordsParser.XMLDECLARATION = 1047;
TeradataSQLNonReservedWordsParser.XMLDOCUMENT = 1048;
TeradataSQLNonReservedWordsParser.XMLELEMENT = 1049;
TeradataSQLNonReservedWordsParser.XMLFOREST = 1050;
TeradataSQLNonReservedWordsParser.XMLNAMESPACES = 1051;
TeradataSQLNonReservedWordsParser.XMLPARSE = 1052;
TeradataSQLNonReservedWordsParser.XMLPI = 1053;
TeradataSQLNonReservedWordsParser.XMLQUERY = 1054;
TeradataSQLNonReservedWordsParser.XMLSCHEMA = 1055;
TeradataSQLNonReservedWordsParser.XMLSERIALIZE = 1056;
TeradataSQLNonReservedWordsParser.XMLTABLE = 1057;
TeradataSQLNonReservedWordsParser.XMLTEXT = 1058;
TeradataSQLNonReservedWordsParser.XMLTYPE = 1059;
TeradataSQLNonReservedWordsParser.XMLVALIDATE = 1060;
TeradataSQLNonReservedWordsParser.YEAR_BEGIN = 1061;
TeradataSQLNonReservedWordsParser.YEAR_END = 1062;
TeradataSQLNonReservedWordsParser.YEAR_OF_CALENDAR = 1063;
TeradataSQLNonReservedWordsParser.YEARNUMBER_OF_CALENDAR = 1064;
TeradataSQLNonReservedWordsParser.ZLIB = 1065;
TeradataSQLNonReservedWordsParser.BUCKET = 1066;
TeradataSQLNonReservedWordsParser.COMMITTED = 1067;
TeradataSQLNonReservedWordsParser.CREATEXML = 1068;
TeradataSQLNonReservedWordsParser.CS_LATIN = 1069;
TeradataSQLNonReservedWordsParser.CS_UNICODE = 1070;
TeradataSQLNonReservedWordsParser.CS_KANJISJIS = 1071;
TeradataSQLNonReservedWordsParser.CS_GRAPHIC = 1072;
TeradataSQLNonReservedWordsParser.CSV = 1073;
TeradataSQLNonReservedWordsParser.CSVLD = 1074;
TeradataSQLNonReservedWordsParser.DATASIZE = 1075;
TeradataSQLNonReservedWordsParser.DAYOFMONTH = 1076;
TeradataSQLNonReservedWordsParser.DAYS = 1077;
TeradataSQLNonReservedWordsParser.DEFINITION = 1078;
TeradataSQLNonReservedWordsParser.DELETED = 1079;
TeradataSQLNonReservedWordsParser.FAST = 1080;
TeradataSQLNonReservedWordsParser.LISTAGG = 1081;
TeradataSQLNonReservedWordsParser.PATH = 1082;
TeradataSQLNonReservedWordsParser.REGEXP_SPLIT_TO_TABLE = 1083;
TeradataSQLNonReservedWordsParser.REVERSE = 1084;
TeradataSQLNonReservedWordsParser.SAS = 1085;
TeradataSQLNonReservedWordsParser.SQLTABLE = 1086;
TeradataSQLNonReservedWordsParser.STRTOK_SPLIT_TO_TABLE = 1087;
TeradataSQLNonReservedWordsParser.SYSLIB = 1088;
TeradataSQLNonReservedWordsParser.SYSUDTLIB = 1089;
TeradataSQLNonReservedWordsParser.TD_SERVER_DB = 1090;
TeradataSQLNonReservedWordsParser.TD_SYSFNLIB = 1091;
TeradataSQLNonReservedWordsParser.TD_SYSXML = 1092;
TeradataSQLNonReservedWordsParser.TIMEDATEWZCONTROL = 1093;
TeradataSQLNonReservedWordsParser.TRUST = 1094;
TeradataSQLNonReservedWordsParser.TRYCAST = 1095;
TeradataSQLNonReservedWordsParser.UDT = 1096;
TeradataSQLNonReservedWordsParser.USAGE = 1097;
TeradataSQLNonReservedWordsParser.VARIANT = 1098;
TeradataSQLNonReservedWordsParser.WEEK = 1099;
TeradataSQLNonReservedWordsParser.WIDTH = 1100;
TeradataSQLNonReservedWordsParser.XMLPUBLISH = 1101;
TeradataSQLNonReservedWordsParser.XMLPUBLISH_STREAM = 1102;
TeradataSQLNonReservedWordsParser.XMLSPLIT = 1103;
TeradataSQLNonReservedWordsParser.LATIN_TO_UNICODE = 1104;
TeradataSQLNonReservedWordsParser.UNICODE_TO_LATIN = 1105;
TeradataSQLNonReservedWordsParser.LOCALE_TO_UNICODE = 1106;
TeradataSQLNonReservedWordsParser.UNICODE_TO_LOCALE = 1107;
TeradataSQLNonReservedWordsParser.ASBSON = 1108;
TeradataSQLNonReservedWordsParser.ASBSONTEXT = 1109;
TeradataSQLNonReservedWordsParser.COMBINE = 1110;
TeradataSQLNonReservedWordsParser.EXISTVALUE = 1111;
TeradataSQLNonReservedWordsParser.JSONEXTRACT = 1112;
TeradataSQLNonReservedWordsParser.JSONEXTRACTVALUE = 1113;
TeradataSQLNonReservedWordsParser.JSONEXTRACTLARGEVALUE = 1114;
TeradataSQLNonReservedWordsParser.KEYCOUNT = 1115;
TeradataSQLNonReservedWordsParser.METADATA = 1116;
TeradataSQLNonReservedWordsParser.STORAGE_SIZE = 1117;
TeradataSQLNonReservedWordsParser.CREATESCHEMABASEDXML = 1118;
TeradataSQLNonReservedWordsParser.CREATENONSCHEMABASEDXML = 1119;
TeradataSQLNonReservedWordsParser.EXISTSNODE = 1120;
TeradataSQLNonReservedWordsParser.ISCONTENT = 1121;
TeradataSQLNonReservedWordsParser.ISDOCUMENT = 1122;
TeradataSQLNonReservedWordsParser.ISSCHEMAVALID = 1123;
TeradataSQLNonReservedWordsParser.ISSCHEMAVALIDATED = 1124;
TeradataSQLNonReservedWordsParser.XMLEXTRACT = 1125;
TeradataSQLNonReservedWordsParser.XMLTRANSFORM = 1126;
TeradataSQLNonReservedWordsParser.PROC_ID = 1127;
TeradataSQLNonReservedWordsParser.LOCATION = 1128;
TeradataSQLNonReservedWordsParser.PAYLOAD = 1129;
TeradataSQLNonReservedWordsParser.TRUSTED = 1130;
TeradataSQLNonReservedWordsParser.PATHPATTERN = 1131;
TeradataSQLNonReservedWordsParser.MANIFEST = 1132;
TeradataSQLNonReservedWordsParser.ROWFORMAT = 1133;
TeradataSQLNonReservedWordsParser.STOREDAS = 1134;
TeradataSQLNonReservedWordsParser.HEADER = 1135;
TeradataSQLNonReservedWordsParser.STRIP_EXTERIOR_SPACES = 1136;
TeradataSQLNonReservedWordsParser.STRIP_ENCLOSING_CHAR = 1137;
TeradataSQLNonReservedWordsParser.RLS = 1138;
TeradataSQLNonReservedWordsParser.SINGLE = 1139;
TeradataSQLNonReservedWordsParser.MULTIPLE = 1140;
TeradataSQLNonReservedWordsParser.JSON_COMPRESS = 1141;
TeradataSQLNonReservedWordsParser.JSON_DECOMPRESS = 1142;
TeradataSQLNonReservedWordsParser.TS_COMPRESS = 1143;
TeradataSQLNonReservedWordsParser.TS_DECOMPRESS = 1144;
TeradataSQLNonReservedWordsParser.CONTIGUOUSMAPAMPS = 1145;
TeradataSQLNonReservedWordsParser.SPARSEMAPAMPS = 1146;
TeradataSQLNonReservedWordsParser.SPARSETABLEAMPS = 1147;
TeradataSQLNonReservedWordsParser.UNNEST = 1148;
TeradataSQLNonReservedWordsParser.CALCMATRIX = 1149;
TeradataSQLNonReservedWordsParser.PHRASE = 1150;
TeradataSQLNonReservedWordsParser.CALCTYPE = 1151;
TeradataSQLNonReservedWordsParser.OUTPUT = 1152;
TeradataSQLNonReservedWordsParser.NULL_HANDLING = 1153;
TeradataSQLNonReservedWordsParser.READ_NOS = 1154;
TeradataSQLNonReservedWordsParser.BUFFERSIZE = 1155;
TeradataSQLNonReservedWordsParser.RETURNTYPE = 1156;
TeradataSQLNonReservedWordsParser.SAMPLE_PERC = 1157;
TeradataSQLNonReservedWordsParser.FULLSCAN = 1158;
TeradataSQLNonReservedWordsParser.TD_UNPIVOT = 1159;
TeradataSQLNonReservedWordsParser.VALUE_COLUMNS = 1160;
TeradataSQLNonReservedWordsParser.UNPIVOT_COLUMN = 1161;
TeradataSQLNonReservedWordsParser.COLUMN_LIST = 1162;
TeradataSQLNonReservedWordsParser.COLUMN_ALIAS_LIST = 1163;
TeradataSQLNonReservedWordsParser.INCLUDE_NULLS = 1164;
TeradataSQLNonReservedWordsParser.WRITE_NOS = 1165;
TeradataSQLNonReservedWordsParser.NAMING = 1166;
TeradataSQLNonReservedWordsParser.MANIFESTFILE = 1167;
TeradataSQLNonReservedWordsParser.MANIFESTONLY = 1168;
TeradataSQLNonReservedWordsParser.OVERWRITE = 1169;
TeradataSQLNonReservedWordsParser.INCLUDE_ORDERING = 1170;
TeradataSQLNonReservedWordsParser.INCLUDE_HASHBY = 1171;
TeradataSQLNonReservedWordsParser.MAXOBJECTSIZE = 1172;
TeradataSQLNonReservedWordsParser.COMPRESSION = 1173;
TeradataSQLNonReservedWordsParser.ARRAY_TO_JSON = 1174;
TeradataSQLNonReservedWordsParser.BSON_CHECK = 1175;
TeradataSQLNonReservedWordsParser.GEOJSONFROMGEOM = 1176;
TeradataSQLNonReservedWordsParser.GEOMFROMGEOJSON = 1177;
TeradataSQLNonReservedWordsParser.JSON_CHECK = 1178;
TeradataSQLNonReservedWordsParser.JSONGETVALUE = 1179;
TeradataSQLNonReservedWordsParser.JSONMETADATA = 1180;
TeradataSQLNonReservedWordsParser.NVP2JSON = 1181;
TeradataSQLNonReservedWordsParser.TD_JSONSHRED = 1182;
TeradataSQLNonReservedWordsParser.JSON_KEYS = 1183;
TeradataSQLNonReservedWordsParser.JSON_TABLE = 1184;
TeradataSQLNonReservedWordsParser.DEPTH = 1185;
TeradataSQLNonReservedWordsParser.QUOTES = 1186;
TeradataSQLNonReservedWordsParser.ROWEXPR = 1187;
TeradataSQLNonReservedWordsParser.COLEXPR = 1188;
TeradataSQLNonReservedWordsParser.RETURNTYPES = 1189;
TeradataSQLNonReservedWordsParser.NOCASE = 1190;
TeradataSQLNonReservedWordsParser.TRUNCATE = 1191;
TeradataSQLNonReservedWordsParser.LINK = 1192;
TeradataSQLNonReservedWordsParser.OBJECT_NAME = 1193;
TeradataSQLNonReservedWordsParser.UNSIGNED_INTEGER = 1194;
TeradataSQLNonReservedWordsParser.HEX_BYTE_LITERAL = 1195;
TeradataSQLNonReservedWordsParser.HEX_INTEGER_LITERAL = 1196;
TeradataSQLNonReservedWordsParser.FLOAT_LITERAL = 1197;
TeradataSQLNonReservedWordsParser.DATE_STRING = 1198;
TeradataSQLNonReservedWordsParser.TIME_STRING = 1199;
TeradataSQLNonReservedWordsParser.TIMESTAMP_STRING = 1200;
TeradataSQLNonReservedWordsParser.PERIOD_STRING = 1201;
TeradataSQLNonReservedWordsParser.UNICODE_STRING_LEADING = 1202;
TeradataSQLNonReservedWordsParser.CHAR_STRING = 1203;
TeradataSQLNonReservedWordsParser.HEX_STRING = 1204;
TeradataSQLNonReservedWordsParser.PASSWORD_STRING = 1205;
TeradataSQLNonReservedWordsParser.SEMICOLON = 1206;
TeradataSQLNonReservedWordsParser.COLON = 1207;
TeradataSQLNonReservedWordsParser.COMMA = 1208;
TeradataSQLNonReservedWordsParser.DOT_ = 1209;
TeradataSQLNonReservedWordsParser.AT_SIGN = 1210;
TeradataSQLNonReservedWordsParser.CARET = 1211;
TeradataSQLNonReservedWordsParser.QUESTION_MARK = 1212;
TeradataSQLNonReservedWordsParser.OPEN_PAR = 1213;
TeradataSQLNonReservedWordsParser.CLOSE_PAR = 1214;
TeradataSQLNonReservedWordsParser.OPEN_SQ_BRACKET = 1215;
TeradataSQLNonReservedWordsParser.CLOSE_SQ_BRACKET = 1216;
TeradataSQLNonReservedWordsParser.CONCATENATE = 1217;
TeradataSQLNonReservedWordsParser.BROKEN_CONCATENATE = 1218;
TeradataSQLNonReservedWordsParser.MUL_SIGN = 1219;
TeradataSQLNonReservedWordsParser.DIV_SIGN = 1220;
TeradataSQLNonReservedWordsParser.PLUS_SIGN = 1221;
TeradataSQLNonReservedWordsParser.MINUS_SIGN = 1222;
TeradataSQLNonReservedWordsParser.EXPONENTIATION = 1223;
TeradataSQLNonReservedWordsParser.EQUALS_SIGN = 1224;
TeradataSQLNonReservedWordsParser.NOT_EQUALS_SIGN = 1225;
TeradataSQLNonReservedWordsParser.NOT_EQUALS_SIGN_TD = 1226;
TeradataSQLNonReservedWordsParser.LT_SIGN = 1227;
TeradataSQLNonReservedWordsParser.LE_SIGN = 1228;
TeradataSQLNonReservedWordsParser.GT_SIGN = 1229;
TeradataSQLNonReservedWordsParser.GE_SIGN = 1230;
TeradataSQLNonReservedWordsParser.SINGLE_LINE_COMMENT = 1231;
TeradataSQLNonReservedWordsParser.MULTI_LINE_COMMENT = 1232;
TeradataSQLNonReservedWordsParser.WS = 1233;

TeradataSQLNonReservedWordsParser.RULE_nonreserved_word = 0;

class Nonreserved_wordContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TeradataSQLNonReservedWordsParser.RULE_nonreserved_word;
    }

	ABORTSESSIONS() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.ABORTSESSIONS, 0);
	};

	ABSENT() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.ABSENT, 0);
	};

	ACCESS() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.ACCESS, 0);
	};

	ACCORDING() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.ACCORDING, 0);
	};

	ACCUMULATE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.ACCUMULATE, 0);
	};

	AG() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.AG, 0);
	};

	AGGGEOMINTERSECTION() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.AGGGEOMINTERSECTION, 0);
	};

	AGGGEOMUNION() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.AGGGEOMUNION, 0);
	};

	ALLDBQL() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.ALLDBQL, 0);
	};

	ALLOCATE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.ALLOCATE, 0);
	};

	ALLOCATION() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.ALLOCATION, 0);
	};

	ALLOW() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.ALLOW, 0);
	};

	ALLPARAMS() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.ALLPARAMS, 0);
	};

	ALLTDWM() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.ALLTDWM, 0);
	};

	ALWAYS() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.ALWAYS, 0);
	};

	AMPCOUNT() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.AMPCOUNT, 0);
	};

	ANALYSIS() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.ANALYSIS, 0);
	};

	ANCHOR() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.ANCHOR, 0);
	};

	ANCHOR_HOUR() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.ANCHOR_HOUR, 0);
	};

	ANCHOR_MILLISECOND() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.ANCHOR_MILLISECOND, 0);
	};

	ANCHOR_MINUTE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.ANCHOR_MINUTE, 0);
	};

	ANCHOR_SECOND() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.ANCHOR_SECOND, 0);
	};

	APPLNAME() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.APPLNAME, 0);
	};

	ARCHIVE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.ARCHIVE, 0);
	};

	ARRAY() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.ARRAY, 0);
	};

	ARRAY_ADD() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.ARRAY_ADD, 0);
	};

	ARRAY_AGG() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.ARRAY_AGG, 0);
	};

	ARRAY_AVG() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.ARRAY_AVG, 0);
	};

	ARRAY_COMPARE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.ARRAY_COMPARE, 0);
	};

	ARRAY_CONCAT() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.ARRAY_CONCAT, 0);
	};

	ARRAY_COUNT_DISTINCT() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.ARRAY_COUNT_DISTINCT, 0);
	};

	ARRAY_DIV() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.ARRAY_DIV, 0);
	};

	ARRAY_EQ() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.ARRAY_EQ, 0);
	};

	ARRAY_GE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.ARRAY_GE, 0);
	};

	ARRAY_GET() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.ARRAY_GET, 0);
	};

	ARRAY_GT() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.ARRAY_GT, 0);
	};

	ARRAY_LE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.ARRAY_LE, 0);
	};

	ARRAY_LT() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.ARRAY_LT, 0);
	};

	ARRAY_MAX() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.ARRAY_MAX, 0);
	};

	ARRAY_MIN() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.ARRAY_MIN, 0);
	};

	ARRAY_MOD() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.ARRAY_MOD, 0);
	};

	ARRAY_MUL() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.ARRAY_MUL, 0);
	};

	ARRAY_NE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.ARRAY_NE, 0);
	};

	ARRAY_SUB() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.ARRAY_SUB, 0);
	};

	ARRAY_SUM() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.ARRAY_SUM, 0);
	};

	ARRAY_UPDATE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.ARRAY_UPDATE, 0);
	};

	ARRAY_UPDATE_STRIDE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.ARRAY_UPDATE_STRIDE, 0);
	};

	ASCII() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.ASCII, 0);
	};

	ASSIGNMENT() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.ASSIGNMENT, 0);
	};

	ATTR() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.ATTR, 0);
	};

	ATTRIBUTE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.ATTRIBUTE, 0);
	};

	ATTRIBUTES() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.ATTRIBUTES, 0);
	};

	ATTRIBUTION() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.ATTRIBUTION, 0);
	};

	ATTRS() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.ATTRS, 0);
	};

	AUTH() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.AUTH, 0);
	};

	AUTO() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.AUTO, 0);
	};

	AUTOTEMP() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.AUTOTEMP, 0);
	};

	AVRO() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.AVRO, 0);
	};

	BIT_LENGTH() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.BIT_LENGTH, 0);
	};

	BITAND() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.BITAND, 0);
	};

	BITNOT() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.BITNOT, 0);
	};

	BITOR() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.BITOR, 0);
	};

	BITXOR() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.BITXOR, 0);
	};

	BLOCKCOMPRESSION() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.BLOCKCOMPRESSION, 0);
	};

	BLOCKCOMPRESSIONALGORITHM() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.BLOCKCOMPRESSIONALGORITHM, 0);
	};

	BLOCKCOMPRESSIONLEVEL() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.BLOCKCOMPRESSIONLEVEL, 0);
	};

	BOM() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.BOM, 0);
	};

	BOTTOM() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.BOTTOM, 0);
	};

	BSON() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.BSON, 0);
	};

	C() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.C, 0);
	};

	CALENDAR() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.CALENDAR, 0);
	};

	CALLED() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.CALLED, 0);
	};

	CALLER() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.CALLER, 0);
	};

	CAMSET() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.CAMSET, 0);
	};

	CAMSET_L() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.CAMSET_L, 0);
	};

	CAPTURE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.CAPTURE, 0);
	};

	CARDINALITY() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.CARDINALITY, 0);
	};

	CEIL() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.CEIL, 0);
	};

	CEILING() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.CEILING, 0);
	};

	CHANGERATE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.CHANGERATE, 0);
	};

	CHARACTERISTICS() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.CHARACTERISTICS, 0);
	};

	CHARSET() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.CHARSET, 0);
	};

	CHARSET_COLL() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.CHARSET_COLL, 0);
	};

	CHECKSUM() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.CHECKSUM, 0);
	};

	CHR() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.CHR, 0);
	};

	CLASS_ORIGIN() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.CLASS_ORIGIN, 0);
	};

	CLICKLAG() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.CLICKLAG, 0);
	};

	CLIENT() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.CLIENT, 0);
	};

	CNT() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.CNT, 0);
	};

	COLOCATE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.COLOCATE, 0);
	};

	COLUMNMETA() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.COLUMNMETA, 0);
	};

	COLUMNS() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.COLUMNS, 0);
	};

	COLUMNSPERINDEX() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.COLUMNSPERINDEX, 0);
	};

	COLUMNSPERJOININDEX() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.COLUMNSPERJOININDEX, 0);
	};

	COMMAND_FUNCTION() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.COMMAND_FUNCTION, 0);
	};

	COMMAND_FUNCTION_CODE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.COMMAND_FUNCTION_CODE, 0);
	};

	COMPARISON() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.COMPARISON, 0);
	};

	COMPILE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.COMPILE, 0);
	};

	CONCAT() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.CONCAT, 0);
	};

	CONCURRENT() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.CONCURRENT, 0);
	};

	CONDITION() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.CONDITION, 0);
	};

	CONDITION_IDENTIFIER() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.CONDITION_IDENTIFIER, 0);
	};

	CONDITION_NUMBER() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.CONDITION_NUMBER, 0);
	};

	CONTAINED() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.CONTAINED, 0);
	};

	CONTAINEDTOKEN() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.CONTAINEDTOKEN, 0);
	};

	CONTENT() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.CONTENT, 0);
	};

	CONTIGUOUS() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.CONTIGUOUS, 0);
	};

	COST() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.COST, 0);
	};

	COSTS() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.COSTS, 0);
	};

	COUNTSET() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.COUNTSET, 0);
	};

	CPP() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.CPP, 0);
	};

	CPUTIME() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.CPUTIME, 0);
	};

	CPUTIMENORM() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.CPUTIMENORM, 0);
	};

	CREATEDATASET() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.CREATEDATASET, 0);
	};

	CREATOR() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.CREATOR, 0);
	};

	CUME_DIST() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.CUME_DIST, 0);
	};

	CURDATE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.CURDATE, 0);
	};

	CURTIME() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.CURTIME, 0);
	};

	DATA() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.DATA, 0);
	};

	DATASET() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.DATASET, 0);
	};

	DAY_OF_CALENDAR() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.DAY_OF_CALENDAR, 0);
	};

	DAY_OF_MONTH() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.DAY_OF_MONTH, 0);
	};

	DAY_OF_WEEK() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.DAY_OF_WEEK, 0);
	};

	DAY_OF_YEAR() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.DAY_OF_YEAR, 0);
	};

	DAYNUMBER_OF_CALENDAR() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.DAYNUMBER_OF_CALENDAR, 0);
	};

	DAYNUMBER_OF_MONTH() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.DAYNUMBER_OF_MONTH, 0);
	};

	DAYNUMBER_OF_WEEK() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.DAYNUMBER_OF_WEEK, 0);
	};

	DAYNUMBER_OF_YEAR() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.DAYNUMBER_OF_YEAR, 0);
	};

	DAYOCCURRENCE_OF_MONTH() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.DAYOCCURRENCE_OF_MONTH, 0);
	};

	DBA() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.DBA, 0);
	};

	DBC() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.DBC, 0);
	};

	DEBUG() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.DEBUG, 0);
	};

	DECAMSET() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.DECAMSET, 0);
	};

	DECAMSET_L() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.DECAMSET_L, 0);
	};

	DECODE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.DECODE, 0);
	};

	DECOMPRESS() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.DECOMPRESS, 0);
	};

	DEFINER() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.DEFINER, 0);
	};

	DELIMITER() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.DELIMITER, 0);
	};

	DELTA_T() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.DELTA_T, 0);
	};

	DEMOGRAPHICS() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.DEMOGRAPHICS, 0);
	};

	DENIALS() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.DENIALS, 0);
	};

	DENSE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.DENSE, 0);
	};

	DENSE_RANK() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.DENSE_RANK, 0);
	};

	DESCRIBE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.DESCRIBE, 0);
	};

	DETAILED() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.DETAILED, 0);
	};

	DIAGNOSTICS() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.DIAGNOSTICS, 0);
	};

	DIGITS() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.DIGITS, 0);
	};

	DIMENSION() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.DIMENSION, 0);
	};

	DOCUMENT() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.DOCUMENT, 0);
	};

	DOT() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.DOT, 0);
	};

	DOWN() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.DOWN, 0);
	};

	DR() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.DR, 0);
	};

	DUPCOUNT() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.DUPCOUNT, 0);
	};

	DUPCOUNTCUM() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.DUPCOUNTCUM, 0);
	};

	EBCDIC() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.EBCDIC, 0);
	};

	EDITDISTANCE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.EDITDISTANCE, 0);
	};

	ELAPSEDSEC() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.ELAPSEDSEC, 0);
	};

	ELAPSEDTIME() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.ELAPSEDTIME, 0);
	};

	ELEMENT() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.ELEMENT, 0);
	};

	ELZS_H() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.ELZS_H, 0);
	};

	EMITNULL() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.EMITNULL, 0);
	};

	EMPTY() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.EMPTY, 0);
	};

	EMPTY_BLOB() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.EMPTY_BLOB, 0);
	};

	EMPTY_CLOB() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.EMPTY_CLOB, 0);
	};

	ENCODE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.ENCODE, 0);
	};

	ENCODING() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.ENCODING, 0);
	};

	ENCRYPT() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.ENCRYPT, 0);
	};

	ERRORS() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.ERRORS, 0);
	};

	ERRORTBL() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.ERRORTBL, 0);
	};

	EVENTCOLUMN() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.EVENTCOLUMN, 0);
	};

	EXCEPTION() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.EXCEPTION, 0);
	};

	EXCL() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.EXCL, 0);
	};

	EXCLUDE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.EXCLUDE, 0);
	};

	EXCLUDING() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.EXCLUDING, 0);
	};

	EXCLUSIVE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.EXCLUSIVE, 0);
	};

	EXPIRE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.EXPIRE, 0);
	};

	EXPORT() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.EXPORT, 0);
	};

	EXPORTWIDTH() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.EXPORTWIDTH, 0);
	};

	FALSE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.FALSE, 0);
	};

	FEATUREINFO() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.FEATUREINFO, 0);
	};

	FILE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.FILE, 0);
	};

	FILL() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.FILL, 0);
	};

	FILTER() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.FILTER, 0);
	};

	FINAL() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.FINAL, 0);
	};

	FIRST_NOTNULL() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.FIRST_NOTNULL, 0);
	};

	FIRST_VALUE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.FIRST_VALUE, 0);
	};

	FLOOR() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.FLOOR, 0);
	};

	FOLLOWING() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.FOLLOWING, 0);
	};

	FOREIGNFUNCTION() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.FOREIGNFUNCTION, 0);
	};

	FORTOKEN() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.FORTOKEN, 0);
	};

	FRIDAY() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.FRIDAY, 0);
	};

	FROM_BYTES() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.FROM_BYTES, 0);
	};

	FUNCTIONPARAMETER() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.FUNCTIONPARAMETER, 0);
	};

	G() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.G, 0);
	};

	GETBIT() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.GETBIT, 0);
	};

	GETPSFVERSION() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.GETPSFVERSION, 0);
	};

	GETQUERYBAND() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.GETQUERYBAND, 0);
	};

	GETQUERYBANDVALUE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.GETQUERYBANDVALUE, 0);
	};

	GETTIMEZONEDISPLACEMENT() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.GETTIMEZONEDISPLACEMENT, 0);
	};

	GLOBAL() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.GLOBAL, 0);
	};

	GLOP() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.GLOP, 0);
	};

	GREATEST() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.GREATEST, 0);
	};

	HIGH() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.HIGH, 0);
	};

	HOST() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.HOST, 0);
	};

	IDENTIFYDATABASE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.IDENTIFYDATABASE, 0);
	};

	IDENTIFYSESSION() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.IDENTIFYSESSION, 0);
	};

	IDENTIFYTABLE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.IDENTIFYTABLE, 0);
	};

	IDENTIFYUSER() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.IDENTIFYUSER, 0);
	};

	IFP() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.IFP, 0);
	};

	IGNORE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.IGNORE, 0);
	};

	IMMEDIATELY() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.IMMEDIATELY, 0);
	};

	IMPORT() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.IMPORT, 0);
	};

	INCLUDE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.INCLUDE, 0);
	};

	INCLUDING() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.INCLUDING, 0);
	};

	INCREMENT() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.INCREMENT, 0);
	};

	INCREMENTAL() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.INCREMENTAL, 0);
	};

	INDENT() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.INDENT, 0);
	};

	INDEXESPERTABLE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.INDEXESPERTABLE, 0);
	};

	INDEXMAINTMODE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.INDEXMAINTMODE, 0);
	};

	INIT() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.INIT, 0);
	};

	INITCAP() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.INITCAP, 0);
	};

	INLINE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.INLINE, 0);
	};

	INSTANTIABLE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.INSTANTIABLE, 0);
	};

	INSTR() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.INSTR, 0);
	};

	INTERNAL() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.INTERNAL, 0);
	};

	INVOKER() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.INVOKER, 0);
	};

	IOCOUNT() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.IOCOUNT, 0);
	};

	IPARTITION() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.IPARTITION, 0);
	};

	ISOLATED() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.ISOLATED, 0);
	};

	ISOLATION() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.ISOLATION, 0);
	};

	JAVA() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.JAVA, 0);
	};

	JIS_COLL() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.JIS_COLL, 0);
	};

	JSON() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.JSON, 0);
	};

	JSON_AGG() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.JSON_AGG, 0);
	};

	JSON_COMPOSE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.JSON_COMPOSE, 0);
	};

	K() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.K, 0);
	};

	KANJI1() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.KANJI1, 0);
	};

	KANJISJIS() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.KANJISJIS, 0);
	};

	KBYTE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.KBYTE, 0);
	};

	KBYTES() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.KBYTES, 0);
	};

	KEEP() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.KEEP, 0);
	};

	KILOBYTES() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.KILOBYTES, 0);
	};

	LAG() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.LAG, 0);
	};

	LAST() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.LAST, 0);
	};

	LAST_DAY() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.LAST_DAY, 0);
	};

	LAST_NOTNULL() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.LAST_NOTNULL, 0);
	};

	LAST_VALUE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.LAST_VALUE, 0);
	};

	LATIN() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.LATIN, 0);
	};

	LDIFF() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.LDIFF, 0);
	};

	LEAD() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.LEAD, 0);
	};

	LEAST() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.LEAST, 0);
	};

	LENGTH() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.LENGTH, 0);
	};

	LEVEL() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.LEVEL, 0);
	};

	LIST() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.LIST, 0);
	};

	LOAD() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.LOAD, 0);
	};

	LOCATE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.LOCATE, 0);
	};

	LOCKEDUSEREXPIRE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.LOCKEDUSEREXPIRE, 0);
	};

	LOW() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.LOW, 0);
	};

	LPAD() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.LPAD, 0);
	};

	LTRIM() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.LTRIM, 0);
	};

	LZCOMP() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.LZCOMP, 0);
	};

	LZCOMP_L() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.LZCOMP_L, 0);
	};

	LZDECOMP() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.LZDECOMP, 0);
	};

	LZDECOMP_L() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.LZDECOMP_L, 0);
	};

	M() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.M, 0);
	};

	MAD() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.MAD, 0);
	};

	MANUAL() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.MANUAL, 0);
	};

	MAPPING() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.MAPPING, 0);
	};

	MATCHED() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.MATCHED, 0);
	};

	MAX_CHOOSE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.MAX_CHOOSE, 0);
	};

	MAXCHAR() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.MAXCHAR, 0);
	};

	MAXINTERVALS() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.MAXINTERVALS, 0);
	};

	MAXLOGONATTEMPTS() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.MAXLOGONATTEMPTS, 0);
	};

	MAXVALUE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.MAXVALUE, 0);
	};

	MAXVALUELENGTH() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.MAXVALUELENGTH, 0);
	};

	MEDIAN() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.MEDIAN, 0);
	};

	MEDIUM() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.MEDIUM, 0);
	};

	MEETS() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.MEETS, 0);
	};

	MEMBER() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.MEMBER, 0);
	};

	MERGEBLOCKRATIO() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.MERGEBLOCKRATIO, 0);
	};

	MESSAGE_LENGTH() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.MESSAGE_LENGTH, 0);
	};

	MESSAGE_TEXT() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.MESSAGE_TEXT, 0);
	};

	MIN_CHOOSE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.MIN_CHOOSE, 0);
	};

	MINCHAR() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.MINCHAR, 0);
	};

	MINVALUE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.MINVALUE, 0);
	};

	MODIFIED() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.MODIFIED, 0);
	};

	MONDAY() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.MONDAY, 0);
	};

	MONITORQUERYBAND() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.MONITORQUERYBAND, 0);
	};

	MONITORSESSIONRATE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.MONITORSESSIONRATE, 0);
	};

	MONITORVERSION() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.MONITORVERSION, 0);
	};

	MONTH_BEGIN() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.MONTH_BEGIN, 0);
	};

	MONTH_END() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.MONTH_END, 0);
	};

	MONTH_OF_CALENDAR() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.MONTH_OF_CALENDAR, 0);
	};

	MONTH_OF_QUARTER() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.MONTH_OF_QUARTER, 0);
	};

	MONTH_OF_YEAR() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.MONTH_OF_YEAR, 0);
	};

	MONTHNUMBER_OF_CALENDAR() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.MONTHNUMBER_OF_CALENDAR, 0);
	};

	MONTHNUMBER_OF_QUARTER() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.MONTHNUMBER_OF_QUARTER, 0);
	};

	MONTHNUMBER_OF_YEAR() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.MONTHNUMBER_OF_YEAR, 0);
	};

	MONTHS_BETWEEN() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.MONTHS_BETWEEN, 0);
	};

	MORE_() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.MORE_, 0);
	};

	MULTINATIONAL() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.MULTINATIONAL, 0);
	};

	NAME() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.NAME, 0);
	};

	NAMESPACE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.NAMESPACE, 0);
	};

	NEVER() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.NEVER, 0);
	};

	NEXT_DAY() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.NEXT_DAY, 0);
	};

	NGRAM() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.NGRAM, 0);
	};

	NIL() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.NIL, 0);
	};

	NODDLTEXT() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.NODDLTEXT, 0);
	};

	NODE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.NODE, 0);
	};

	NONOPTCOST() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.NONOPTCOST, 0);
	};

	NONOPTINIT() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.NONOPTINIT, 0);
	};

	NONSEQUENCED() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.NONSEQUENCED, 0);
	};

	NORIGHT() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.NORIGHT, 0);
	};

	NOSEXTRACTVARFROMPATH() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.NOSEXTRACTVARFROMPATH, 0);
	};

	NOTATION() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.NOTATION, 0);
	};

	NOW() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.NOW, 0);
	};

	NPATH() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.NPATH, 0);
	};

	NTH() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.NTH, 0);
	};

	NULLS() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.NULLS, 0);
	};

	NUMFPFNS() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.NUMFPFNS, 0);
	};

	NUMTODSINTERVAL() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.NUMTODSINTERVAL, 0);
	};

	NUMTOYMINTERVAL() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.NUMTOYMINTERVAL, 0);
	};

	NVL() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.NVL, 0);
	};

	NVL2() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.NVL2, 0);
	};

	NVP() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.NVP, 0);
	};

	OA() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.OA, 0);
	};

	OADD_MONTHS() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.OADD_MONTHS, 0);
	};

	OCOUNT() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.OCOUNT, 0);
	};

	ODELETE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.ODELETE, 0);
	};

	OEXISTS() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.OEXISTS, 0);
	};

	OEXTEND() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.OEXTEND, 0);
	};

	OFIRST() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.OFIRST, 0);
	};

	OLAST() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.OLAST, 0);
	};

	OLD_NEW_TABLE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.OLD_NEW_TABLE, 0);
	};

	OLIMIT() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.OLIMIT, 0);
	};

	ONEXT() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.ONEXT, 0);
	};

	ONLINE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.ONLINE, 0);
	};

	OPRIOR() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.OPRIOR, 0);
	};

	OPTIONS() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.OPTIONS, 0);
	};

	ORDERBYVALUES() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.ORDERBYVALUES, 0);
	};

	ORDERED_ANALYTIC() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.ORDERED_ANALYTIC, 0);
	};

	ORDINALITY() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.ORDINALITY, 0);
	};

	OREPLACE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.OREPLACE, 0);
	};

	OTRANSLATE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.OTRANSLATE, 0);
	};

	OTRIM() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.OTRIM, 0);
	};

	OVERLAYS() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.OVERLAYS, 0);
	};

	OWNER() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.OWNER, 0);
	};

	P_INTERSECT() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.P_INTERSECT, 0);
	};

	P_NORMALIZE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.P_NORMALIZE, 0);
	};

	PARAMID() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.PARAMID, 0);
	};

	PARAMINFO() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.PARAMINFO, 0);
	};

	PARENT() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.PARENT, 0);
	};

	PARTITION() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.PARTITION, 0);
	};

	PARTITION_L() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.PARTITION_L, 0);
	};

	PARTITIONED() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.PARTITIONED, 0);
	};

	PARTITIONNAMES() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.PARTITIONNAMES, 0);
	};

	PASS() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.PASS, 0);
	};

	PASSING() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.PASSING, 0);
	};

	PATH_GENERATOR() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.PATH_GENERATOR, 0);
	};

	PATH_START() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.PATH_START, 0);
	};

	PATH_SUMMARIZER() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.PATH_SUMMARIZER, 0);
	};

	PATTERN() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.PATTERN, 0);
	};

	PERCENTILE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.PERCENTILE, 0);
	};

	PERCENTILE_CONT() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.PERCENTILE_CONT, 0);
	};

	PERCENTILE_DISC() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.PERCENTILE_DISC, 0);
	};

	PERIOD() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.PERIOD, 0);
	};

	PIVOT() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.PIVOT, 0);
	};

	PORTION() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.PORTION, 0);
	};

	POWER() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.POWER, 0);
	};

	PRECEDES() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.PRECEDES, 0);
	};

	PRECEDING() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.PRECEDING, 0);
	};

	PREFIX() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.PREFIX, 0);
	};

	PRINT() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.PRINT, 0);
	};

	PRIOR() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.PRIOR, 0);
	};

	PROTECTED() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.PROTECTED, 0);
	};

	QUARTER_BEGIN() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.QUARTER_BEGIN, 0);
	};

	QUARTER_END() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.QUARTER_END, 0);
	};

	QUARTER_OF_CALENDAR() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.QUARTER_OF_CALENDAR, 0);
	};

	QUARTER_OF_YEAR() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.QUARTER_OF_YEAR, 0);
	};

	QUARTERNUMBER_OF_CALENDAR() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.QUARTERNUMBER_OF_CALENDAR, 0);
	};

	QUARTERNUMBER_OF_YEAR() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.QUARTERNUMBER_OF_YEAR, 0);
	};

	QUERY() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.QUERY, 0);
	};

	QUERY_BAND() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.QUERY_BAND, 0);
	};

	QUOTECHAR() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.QUOTECHAR, 0);
	};

	RANDOMIZED() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.RANDOMIZED, 0);
	};

	RANGE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.RANGE, 0);
	};

	RANGE_L() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.RANGE_L, 0);
	};

	RAPIDFIRE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.RAPIDFIRE, 0);
	};

	RDIFF() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.RDIFF, 0);
	};

	READ() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.READ, 0);
	};

	RECALC() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.RECALC, 0);
	};

	REGEXP_INSTR() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.REGEXP_INSTR, 0);
	};

	REGEXP_REPLACE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.REGEXP_REPLACE, 0);
	};

	REGEXP_SIMILAR() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.REGEXP_SIMILAR, 0);
	};

	REGEXP_SUBSTR() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.REGEXP_SUBSTR, 0);
	};

	REPLACEMENT() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.REPLACEMENT, 0);
	};

	RESET() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.RESET, 0);
	};

	RESPECT() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.RESPECT, 0);
	};

	RESTRICTWORDS() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.RESTRICTWORDS, 0);
	};

	RETAIN() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.RETAIN, 0);
	};

	RETURNED_SQLSTATE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.RETURNED_SQLSTATE, 0);
	};

	RETURNING() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.RETURNING, 0);
	};

	REUSE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.REUSE, 0);
	};

	ROOT() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.ROOT, 0);
	};

	ROTATELEFT() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.ROTATELEFT, 0);
	};

	ROTATERIGHT() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.ROTATERIGHT, 0);
	};

	ROUND() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.ROUND, 0);
	};

	ROW_COUNT() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.ROW_COUNT, 0);
	};

	ROWIDGEN() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.ROWIDGEN, 0);
	};

	ROWIDGEN2() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.ROWIDGEN2, 0);
	};

	RPAD() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.RPAD, 0);
	};

	RTRIM() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.RTRIM, 0);
	};

	RU() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.RU, 0);
	};

	RULES() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.RULES, 0);
	};

	RULESET() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.RULESET, 0);
	};

	SAMPLES() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.SAMPLES, 0);
	};

	SATURDAY() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.SATURDAY, 0);
	};

	SCHEMA() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.SCHEMA, 0);
	};

	SCRIPT() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.SCRIPT, 0);
	};

	SCRIPT_COMMAND() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.SCRIPT_COMMAND, 0);
	};

	SEARCHSPACE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.SEARCHSPACE, 0);
	};

	SEARCHUIFDBPATH() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.SEARCHUIFDBPATH, 0);
	};

	SECURITY() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.SECURITY, 0);
	};

	SEED() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.SEED, 0);
	};

	SELF() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.SELF, 0);
	};

	SEQ() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.SEQ, 0);
	};

	SEQUENCE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.SEQUENCE, 0);
	};

	SEQUENCED() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.SEQUENCED, 0);
	};

	SERIALIZABLE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.SERIALIZABLE, 0);
	};

	SERVER() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.SERVER, 0);
	};

	SESSIONIZE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.SESSIONIZE, 0);
	};

	SETBIT() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.SETBIT, 0);
	};

	SETRESOURCERATE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.SETRESOURCERATE, 0);
	};

	SETSESSIONACCOUNT() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.SETSESSIONACCOUNT, 0);
	};

	SETSESSIONRATE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.SETSESSIONRATE, 0);
	};

	SHARE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.SHARE, 0);
	};

	SHIFTLEFT() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.SHIFTLEFT, 0);
	};

	SHIFTRIGHT() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.SHIFTRIGHT, 0);
	};

	SIGN() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.SIGN, 0);
	};

	SIZE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.SIZE, 0);
	};

	SNAPPY_COMPRESS() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.SNAPPY_COMPRESS, 0);
	};

	SNAPPY_DECOMPRESS() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.SNAPPY_DECOMPRESS, 0);
	};

	SOURCE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.SOURCE, 0);
	};

	SPARSE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.SPARSE, 0);
	};

	SPECCHAR() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.SPECCHAR, 0);
	};

	SPL() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.SPL, 0);
	};

	SQLSTATE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.SQLSTATE, 0);
	};

	SR() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.SR, 0);
	};

	ST_GEOMETRY() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.ST_GEOMETRY, 0);
	};

	STAT() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.STAT, 0);
	};

	STATIC() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.STATIC, 0);
	};

	STATS() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.STATS, 0);
	};

	STATSUSAGE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.STATSUSAGE, 0);
	};

	STORAGE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.STORAGE, 0);
	};

	STRIP() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.STRIP, 0);
	};

	STRTOK() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.STRTOK, 0);
	};

	STYLE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.STYLE, 0);
	};

	SUBBITSTR() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.SUBBITSTR, 0);
	};

	SUBCLASS_ORIGIN() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.SUBCLASS_ORIGIN, 0);
	};

	SUCCEEDS() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.SUCCEEDS, 0);
	};

	SUMMARYONLY() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.SUMMARYONLY, 0);
	};

	SUNDAY() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.SUNDAY, 0);
	};

	SYMBOLS() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.SYMBOLS, 0);
	};

	SYSTEM() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.SYSTEM, 0);
	};

	SYSTEM_TIME() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.SYSTEM_TIME, 0);
	};

	SYSTEMTEST() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.SYSTEMTEST, 0);
	};

	TARGET() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.TARGET, 0);
	};

	TD_ARRAY2P() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.TD_ARRAY2P, 0);
	};

	TD_DATASET() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.TD_DATASET, 0);
	};

	TD_DAY_OF_CALENDAR() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.TD_DAY_OF_CALENDAR, 0);
	};

	TD_DAY_OF_MONTH() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.TD_DAY_OF_MONTH, 0);
	};

	TD_DAY_OF_WEEK() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.TD_DAY_OF_WEEK, 0);
	};

	TD_DAY_OF_YEAR() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.TD_DAY_OF_YEAR, 0);
	};

	TD_GENERAL() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.TD_GENERAL, 0);
	};

	TD_GETTIMEBUCKET() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.TD_GETTIMEBUCKET, 0);
	};

	TD_INTERNAL() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.TD_INTERNAL, 0);
	};

	TD_LZ_COMPRESS() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.TD_LZ_COMPRESS, 0);
	};

	TD_LZ_DECOMPRESS() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.TD_LZ_DECOMPRESS, 0);
	};

	TD_MONTH_OF_CALENDAR() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.TD_MONTH_OF_CALENDAR, 0);
	};

	TD_MONTH_OF_QUARTER() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.TD_MONTH_OF_QUARTER, 0);
	};

	TD_MONTH_OF_YEAR() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.TD_MONTH_OF_YEAR, 0);
	};

	TD_QUARTER_OF_CALENDAR() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.TD_QUARTER_OF_CALENDAR, 0);
	};

	TD_QUARTER_OF_YEAR() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.TD_QUARTER_OF_YEAR, 0);
	};

	TD_TIME_BUCKET_NUMBER() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.TD_TIME_BUCKET_NUMBER, 0);
	};

	TD_WEEK_OF_CALENDAR() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.TD_WEEK_OF_CALENDAR, 0);
	};

	TD_WEEK_OF_MONTH() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.TD_WEEK_OF_MONTH, 0);
	};

	TD_WEEK_OF_YEAR() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.TD_WEEK_OF_YEAR, 0);
	};

	TD_WEEKDAY_OF_MONTH() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.TD_WEEKDAY_OF_MONTH, 0);
	};

	TD_YEAR_OF_CALENDAR() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.TD_YEAR_OF_CALENDAR, 0);
	};

	TDWMEVENT() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.TDWMEVENT, 0);
	};

	TDWMEXCEPTION() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.TDWMEXCEPTION, 0);
	};

	TDWMHISTORY() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.TDWMHISTORY, 0);
	};

	TEMPORAL_DATE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.TEMPORAL_DATE, 0);
	};

	TEMPORAL_TIMESTAMP() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.TEMPORAL_TIMESTAMP, 0);
	};

	TEXT() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.TEXT, 0);
	};

	THRESHOLDPERCENT() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.THRESHOLDPERCENT, 0);
	};

	THROUGH() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.THROUGH, 0);
	};

	THURSDAY() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.THURSDAY, 0);
	};

	TIES() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.TIES, 0);
	};

	TIMECODE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.TIMECODE, 0);
	};

	TIMECOLUMN() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.TIMECOLUMN, 0);
	};

	TIMEOUT() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.TIMEOUT, 0);
	};

	TIMESTAMPCOLUMN() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.TIMESTAMPCOLUMN, 0);
	};

	TO_BYTE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.TO_BYTE, 0);
	};

	TO_BYTES() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.TO_BYTES, 0);
	};

	TO_CHAR() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.TO_CHAR, 0);
	};

	TO_DATE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.TO_DATE, 0);
	};

	TO_DSINTERVAL() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.TO_DSINTERVAL, 0);
	};

	TO_NUMBER() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.TO_NUMBER, 0);
	};

	TO_TIMESTAMP() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.TO_TIMESTAMP, 0);
	};

	TO_TIMESTAMP_TZ() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.TO_TIMESTAMP_TZ, 0);
	};

	TO_YMINTERVAL() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.TO_YMINTERVAL, 0);
	};

	TOTOKEN() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.TOTOKEN, 0);
	};

	TPA() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.TPA, 0);
	};

	TRANSACTION_ACTIVE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.TRANSACTION_ACTIVE, 0);
	};

	TRANSUNICODETOUTF8() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.TRANSUNICODETOUTF8, 0);
	};

	TRANSUTF8TOUNICODE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.TRANSUTF8TOUNICODE, 0);
	};

	TRUE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.TRUE, 0);
	};

	TRUNC() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.TRUNC, 0);
	};

	TRUST_ONLY() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.TRUST_ONLY, 0);
	};

	TTGRANULARITY() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.TTGRANULARITY, 0);
	};

	TUESDAY() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.TUESDAY, 0);
	};

	UBJSON() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.UBJSON, 0);
	};

	UCASE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.UCASE, 0);
	};

	UDFSEARCHPATH() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.UDFSEARCHPATH, 0);
	};

	UNBOUNDED() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.UNBOUNDED, 0);
	};

	UNCOMMITTED() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.UNCOMMITTED, 0);
	};

	UNICODE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.UNICODE, 0);
	};

	UNKNOWN() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.UNKNOWN, 0);
	};

	UNPIVOT() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.UNPIVOT, 0);
	};

	USE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.USE, 0);
	};

	USECOUNT() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.USECOUNT, 0);
	};

	UTILITYINFO() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.UTILITYINFO, 0);
	};

	VARRAY() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.VARRAY, 0);
	};

	VERBOSE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.VERBOSE, 0);
	};

	VERSION() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.VERSION, 0);
	};

	VERSIONING() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.VERSIONING, 0);
	};

	WARNING() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.WARNING, 0);
	};

	WEDNESDAY() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.WEDNESDAY, 0);
	};

	WEEK_BEGIN() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.WEEK_BEGIN, 0);
	};

	WEEK_END() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.WEEK_END, 0);
	};

	WEEK_OF_CALENDAR() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.WEEK_OF_CALENDAR, 0);
	};

	WEEK_OF_MONTH() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.WEEK_OF_MONTH, 0);
	};

	WEEK_OF_YEAR() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.WEEK_OF_YEAR, 0);
	};

	WEEKDAY_OF_MONTH() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.WEEKDAY_OF_MONTH, 0);
	};

	WEEKNUMBER_OF_CALENDAR() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.WEEKNUMBER_OF_CALENDAR, 0);
	};

	WEEKNUMBER_OF_MONTH() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.WEEKNUMBER_OF_MONTH, 0);
	};

	WEEKNUMBER_OF_QUARTER() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.WEEKNUMBER_OF_QUARTER, 0);
	};

	WEEKNUMBER_OF_YEAR() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.WEEKNUMBER_OF_YEAR, 0);
	};

	WHITESPACE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.WHITESPACE, 0);
	};

	WINDOWSIZE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.WINDOWSIZE, 0);
	};

	WITHIN() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.WITHIN, 0);
	};

	WORKLOAD() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.WORKLOAD, 0);
	};

	WRITE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.WRITE, 0);
	};

	XML() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.XML, 0);
	};

	XMLAGG() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.XMLAGG, 0);
	};

	XMLATTRIBUTES() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.XMLATTRIBUTES, 0);
	};

	XMLCOMMENT() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.XMLCOMMENT, 0);
	};

	XMLCONCAT() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.XMLCONCAT, 0);
	};

	XMLDECLARATION() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.XMLDECLARATION, 0);
	};

	XMLDOCUMENT() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.XMLDOCUMENT, 0);
	};

	XMLELEMENT() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.XMLELEMENT, 0);
	};

	XMLFOREST() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.XMLFOREST, 0);
	};

	XMLNAMESPACES() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.XMLNAMESPACES, 0);
	};

	XMLPARSE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.XMLPARSE, 0);
	};

	XMLPI() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.XMLPI, 0);
	};

	XMLQUERY() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.XMLQUERY, 0);
	};

	XMLSCHEMA() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.XMLSCHEMA, 0);
	};

	XMLSERIALIZE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.XMLSERIALIZE, 0);
	};

	XMLTABLE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.XMLTABLE, 0);
	};

	XMLTEXT() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.XMLTEXT, 0);
	};

	XMLTYPE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.XMLTYPE, 0);
	};

	XMLVALIDATE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.XMLVALIDATE, 0);
	};

	YEAR_BEGIN() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.YEAR_BEGIN, 0);
	};

	YEAR_END() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.YEAR_END, 0);
	};

	YEAR_OF_CALENDAR() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.YEAR_OF_CALENDAR, 0);
	};

	YEARNUMBER_OF_CALENDAR() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.YEARNUMBER_OF_CALENDAR, 0);
	};

	ZLIB() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.ZLIB, 0);
	};

	BUCKET() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.BUCKET, 0);
	};

	COMMITTED() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.COMMITTED, 0);
	};

	CREATEXML() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.CREATEXML, 0);
	};

	CS_LATIN() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.CS_LATIN, 0);
	};

	CS_UNICODE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.CS_UNICODE, 0);
	};

	CS_KANJISJIS() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.CS_KANJISJIS, 0);
	};

	CS_GRAPHIC() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.CS_GRAPHIC, 0);
	};

	CSV() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.CSV, 0);
	};

	CSVLD() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.CSVLD, 0);
	};

	DATASIZE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.DATASIZE, 0);
	};

	DAYOFMONTH() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.DAYOFMONTH, 0);
	};

	DAYS() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.DAYS, 0);
	};

	DEFINITION() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.DEFINITION, 0);
	};

	DELETED() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.DELETED, 0);
	};

	FAST() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.FAST, 0);
	};

	LISTAGG() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.LISTAGG, 0);
	};

	PATH() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.PATH, 0);
	};

	REGEXP_SPLIT_TO_TABLE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.REGEXP_SPLIT_TO_TABLE, 0);
	};

	REVERSE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.REVERSE, 0);
	};

	SAS() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.SAS, 0);
	};

	SQLTABLE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.SQLTABLE, 0);
	};

	STRTOK_SPLIT_TO_TABLE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.STRTOK_SPLIT_TO_TABLE, 0);
	};

	SYSLIB() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.SYSLIB, 0);
	};

	SYSUDTLIB() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.SYSUDTLIB, 0);
	};

	TD_SERVER_DB() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.TD_SERVER_DB, 0);
	};

	TD_SYSFNLIB() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.TD_SYSFNLIB, 0);
	};

	TD_SYSXML() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.TD_SYSXML, 0);
	};

	TIMEDATEWZCONTROL() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.TIMEDATEWZCONTROL, 0);
	};

	TRUST() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.TRUST, 0);
	};

	TRYCAST() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.TRYCAST, 0);
	};

	UDT() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.UDT, 0);
	};

	USAGE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.USAGE, 0);
	};

	VARIANT() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.VARIANT, 0);
	};

	WEEK() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.WEEK, 0);
	};

	WIDTH() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.WIDTH, 0);
	};

	XMLPUBLISH() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.XMLPUBLISH, 0);
	};

	XMLPUBLISH_STREAM() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.XMLPUBLISH_STREAM, 0);
	};

	XMLSPLIT() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.XMLSPLIT, 0);
	};

	LATIN_TO_UNICODE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.LATIN_TO_UNICODE, 0);
	};

	UNICODE_TO_LATIN() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.UNICODE_TO_LATIN, 0);
	};

	LOCALE_TO_UNICODE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.LOCALE_TO_UNICODE, 0);
	};

	UNICODE_TO_LOCALE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.UNICODE_TO_LOCALE, 0);
	};

	ASBSON() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.ASBSON, 0);
	};

	ASBSONTEXT() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.ASBSONTEXT, 0);
	};

	COMBINE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.COMBINE, 0);
	};

	EXISTVALUE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.EXISTVALUE, 0);
	};

	JSONEXTRACT() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.JSONEXTRACT, 0);
	};

	JSONEXTRACTVALUE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.JSONEXTRACTVALUE, 0);
	};

	JSONEXTRACTLARGEVALUE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.JSONEXTRACTLARGEVALUE, 0);
	};

	KEYCOUNT() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.KEYCOUNT, 0);
	};

	METADATA() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.METADATA, 0);
	};

	STORAGE_SIZE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.STORAGE_SIZE, 0);
	};

	CREATESCHEMABASEDXML() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.CREATESCHEMABASEDXML, 0);
	};

	CREATENONSCHEMABASEDXML() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.CREATENONSCHEMABASEDXML, 0);
	};

	EXISTSNODE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.EXISTSNODE, 0);
	};

	ISCONTENT() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.ISCONTENT, 0);
	};

	ISDOCUMENT() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.ISDOCUMENT, 0);
	};

	ISSCHEMAVALID() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.ISSCHEMAVALID, 0);
	};

	ISSCHEMAVALIDATED() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.ISSCHEMAVALIDATED, 0);
	};

	XMLEXTRACT() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.XMLEXTRACT, 0);
	};

	XMLTRANSFORM() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.XMLTRANSFORM, 0);
	};

	PROC_ID() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.PROC_ID, 0);
	};

	LOCATION() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.LOCATION, 0);
	};

	PAYLOAD() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.PAYLOAD, 0);
	};

	TRUSTED() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.TRUSTED, 0);
	};

	PATHPATTERN() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.PATHPATTERN, 0);
	};

	MANIFEST() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.MANIFEST, 0);
	};

	ROWFORMAT() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.ROWFORMAT, 0);
	};

	STOREDAS() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.STOREDAS, 0);
	};

	HEADER() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.HEADER, 0);
	};

	STRIP_EXTERIOR_SPACES() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.STRIP_EXTERIOR_SPACES, 0);
	};

	STRIP_ENCLOSING_CHAR() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.STRIP_ENCLOSING_CHAR, 0);
	};

	RLS() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.RLS, 0);
	};

	SINGLE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.SINGLE, 0);
	};

	MULTIPLE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.MULTIPLE, 0);
	};

	JSON_COMPRESS() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.JSON_COMPRESS, 0);
	};

	JSON_DECOMPRESS() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.JSON_DECOMPRESS, 0);
	};

	TS_COMPRESS() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.TS_COMPRESS, 0);
	};

	TS_DECOMPRESS() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.TS_DECOMPRESS, 0);
	};

	CONTIGUOUSMAPAMPS() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.CONTIGUOUSMAPAMPS, 0);
	};

	SPARSEMAPAMPS() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.SPARSEMAPAMPS, 0);
	};

	SPARSETABLEAMPS() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.SPARSETABLEAMPS, 0);
	};

	UNNEST() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.UNNEST, 0);
	};

	CALCMATRIX() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.CALCMATRIX, 0);
	};

	PHRASE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.PHRASE, 0);
	};

	CALCTYPE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.CALCTYPE, 0);
	};

	OUTPUT() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.OUTPUT, 0);
	};

	NULL_HANDLING() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.NULL_HANDLING, 0);
	};

	READ_NOS() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.READ_NOS, 0);
	};

	BUFFERSIZE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.BUFFERSIZE, 0);
	};

	RETURNTYPE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.RETURNTYPE, 0);
	};

	SAMPLE_PERC() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.SAMPLE_PERC, 0);
	};

	FULLSCAN() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.FULLSCAN, 0);
	};

	TD_UNPIVOT() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.TD_UNPIVOT, 0);
	};

	VALUE_COLUMNS() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.VALUE_COLUMNS, 0);
	};

	UNPIVOT_COLUMN() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.UNPIVOT_COLUMN, 0);
	};

	COLUMN_LIST() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.COLUMN_LIST, 0);
	};

	COLUMN_ALIAS_LIST() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.COLUMN_ALIAS_LIST, 0);
	};

	INCLUDE_NULLS() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.INCLUDE_NULLS, 0);
	};

	WRITE_NOS() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.WRITE_NOS, 0);
	};

	NAMING() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.NAMING, 0);
	};

	MANIFESTFILE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.MANIFESTFILE, 0);
	};

	MANIFESTONLY() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.MANIFESTONLY, 0);
	};

	OVERWRITE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.OVERWRITE, 0);
	};

	INCLUDE_ORDERING() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.INCLUDE_ORDERING, 0);
	};

	INCLUDE_HASHBY() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.INCLUDE_HASHBY, 0);
	};

	MAXOBJECTSIZE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.MAXOBJECTSIZE, 0);
	};

	COMPRESSION() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.COMPRESSION, 0);
	};

	ARRAY_TO_JSON() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.ARRAY_TO_JSON, 0);
	};

	BSON_CHECK() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.BSON_CHECK, 0);
	};

	GEOJSONFROMGEOM() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.GEOJSONFROMGEOM, 0);
	};

	GEOMFROMGEOJSON() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.GEOMFROMGEOJSON, 0);
	};

	JSON_CHECK() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.JSON_CHECK, 0);
	};

	JSONGETVALUE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.JSONGETVALUE, 0);
	};

	JSONMETADATA() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.JSONMETADATA, 0);
	};

	NVP2JSON() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.NVP2JSON, 0);
	};

	TD_JSONSHRED() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.TD_JSONSHRED, 0);
	};

	JSON_KEYS() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.JSON_KEYS, 0);
	};

	JSON_TABLE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.JSON_TABLE, 0);
	};

	DEPTH() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.DEPTH, 0);
	};

	QUOTES() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.QUOTES, 0);
	};

	ROWEXPR() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.ROWEXPR, 0);
	};

	COLEXPR() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.COLEXPR, 0);
	};

	RETURNTYPES() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.RETURNTYPES, 0);
	};

	NOCASE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.NOCASE, 0);
	};

	TRUNCATE() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.TRUNCATE, 0);
	};

	LINK() {
	    return this.getToken(TeradataSQLNonReservedWordsParser.LINK, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TeradataSQLNonReservedWordsParserListener ) {
	        listener.enterNonreserved_word(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TeradataSQLNonReservedWordsParserListener ) {
	        listener.exitNonreserved_word(this);
		}
	}


}




TeradataSQLNonReservedWordsParser.Nonreserved_wordContext = Nonreserved_wordContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
