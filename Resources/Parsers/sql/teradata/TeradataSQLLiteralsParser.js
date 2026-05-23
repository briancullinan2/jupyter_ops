// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/sql/teradata/TeradataSQLLiteralsParser.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import TeradataSQLLiteralsParserListener from './TeradataSQLLiteralsParserListener.js';
const serializedATN = [4,1,1233,136,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,
7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,
3,0,44,8,0,1,1,1,1,1,2,3,2,49,8,2,1,2,4,2,52,8,2,11,2,12,2,53,1,3,3,3,57,
8,3,1,3,1,3,5,3,61,8,3,10,3,12,3,64,9,3,1,3,1,3,1,3,1,4,3,4,70,8,4,1,4,1,
4,1,5,1,5,1,6,1,6,1,7,1,7,1,8,1,8,1,9,3,9,83,8,9,1,9,1,9,1,10,3,10,88,8,
10,1,10,1,10,1,11,3,11,93,8,11,1,11,1,11,1,12,1,12,3,12,99,8,12,1,12,1,12,
1,12,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,
13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,3,13,
131,8,13,1,14,1,14,1,14,1,14,0,0,15,0,2,4,6,8,10,12,14,16,18,20,22,24,26,
28,0,2,1,0,1069,1072,2,0,1198,1200,1203,1203,153,0,43,1,0,0,0,2,45,1,0,0,
0,4,48,1,0,0,0,6,56,1,0,0,0,8,69,1,0,0,0,10,73,1,0,0,0,12,75,1,0,0,0,14,
77,1,0,0,0,16,79,1,0,0,0,18,82,1,0,0,0,20,87,1,0,0,0,22,92,1,0,0,0,24,96,
1,0,0,0,26,130,1,0,0,0,28,132,1,0,0,0,30,44,3,2,1,0,31,44,3,4,2,0,32,44,
3,6,3,0,33,44,3,8,4,0,34,44,3,10,5,0,35,44,3,12,6,0,36,44,3,14,7,0,37,44,
3,18,9,0,38,44,3,20,10,0,39,44,3,22,11,0,40,44,3,24,12,0,41,44,3,28,14,0,
42,44,5,274,0,0,43,30,1,0,0,0,43,31,1,0,0,0,43,32,1,0,0,0,43,33,1,0,0,0,
43,34,1,0,0,0,43,35,1,0,0,0,43,36,1,0,0,0,43,37,1,0,0,0,43,38,1,0,0,0,43,
39,1,0,0,0,43,40,1,0,0,0,43,41,1,0,0,0,43,42,1,0,0,0,44,1,1,0,0,0,45,46,
5,1195,0,0,46,3,1,0,0,0,47,49,3,16,8,0,48,47,1,0,0,0,48,49,1,0,0,0,49,51,
1,0,0,0,50,52,5,1203,0,0,51,50,1,0,0,0,52,53,1,0,0,0,53,51,1,0,0,0,53,54,
1,0,0,0,54,5,1,0,0,0,55,57,3,16,8,0,56,55,1,0,0,0,56,57,1,0,0,0,57,58,1,
0,0,0,58,62,5,1202,0,0,59,61,5,1203,0,0,60,59,1,0,0,0,61,64,1,0,0,0,62,60,
1,0,0,0,62,63,1,0,0,0,63,65,1,0,0,0,64,62,1,0,0,0,65,66,5,444,0,0,66,67,
5,1203,0,0,67,7,1,0,0,0,68,70,3,16,8,0,69,68,1,0,0,0,69,70,1,0,0,0,70,71,
1,0,0,0,71,72,5,1204,0,0,72,9,1,0,0,0,73,74,5,1194,0,0,74,11,1,0,0,0,75,
76,5,1196,0,0,76,13,1,0,0,0,77,78,5,1197,0,0,78,15,1,0,0,0,79,80,7,0,0,0,
80,17,1,0,0,0,81,83,5,104,0,0,82,81,1,0,0,0,82,83,1,0,0,0,83,84,1,0,0,0,
84,85,5,1198,0,0,85,19,1,0,0,0,86,88,5,421,0,0,87,86,1,0,0,0,87,88,1,0,0,
0,88,89,1,0,0,0,89,90,5,1199,0,0,90,21,1,0,0,0,91,93,5,422,0,0,92,91,1,0,
0,0,92,93,1,0,0,0,93,94,1,0,0,0,94,95,5,1200,0,0,95,23,1,0,0,0,96,98,5,205,
0,0,97,99,5,1222,0,0,98,97,1,0,0,0,98,99,1,0,0,0,99,100,1,0,0,0,100,101,
7,1,0,0,101,102,3,26,13,0,102,25,1,0,0,0,103,131,5,478,0,0,104,105,5,478,
0,0,105,106,5,426,0,0,106,131,5,258,0,0,107,131,5,258,0,0,108,131,5,106,
0,0,109,110,5,106,0,0,110,111,5,426,0,0,111,131,5,185,0,0,112,113,5,106,
0,0,113,114,5,426,0,0,114,131,5,248,0,0,115,116,5,106,0,0,116,117,5,426,
0,0,117,131,5,368,0,0,118,131,5,185,0,0,119,120,5,185,0,0,120,121,5,426,
0,0,121,131,5,248,0,0,122,123,5,185,0,0,123,124,5,426,0,0,124,131,5,368,
0,0,125,131,5,248,0,0,126,127,5,248,0,0,127,128,5,426,0,0,128,131,5,368,
0,0,129,131,5,368,0,0,130,103,1,0,0,0,130,104,1,0,0,0,130,107,1,0,0,0,130,
108,1,0,0,0,130,109,1,0,0,0,130,112,1,0,0,0,130,115,1,0,0,0,130,118,1,0,
0,0,130,119,1,0,0,0,130,122,1,0,0,0,130,125,1,0,0,0,130,126,1,0,0,0,130,
129,1,0,0,0,131,27,1,0,0,0,132,133,5,853,0,0,133,134,5,1201,0,0,134,29,1,
0,0,0,11,43,48,53,56,62,69,82,87,92,98,130];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class TeradataSQLLiteralsParser extends antlr4.Parser {

    static grammarFileName = "TeradataSQLLiteralsParser.g4";
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
    static ruleNames = [ "literal", "hex_byte_literal", "char_string_literal", 
                         "unicode_char_string_literal", "hex_char_string_literal", 
                         "integer_literal", "hex_integer_literal", "float_literal", 
                         "character_set_prefix", "date_literal", "time_literal", 
                         "timestamp_literal", "interval_literal", "interval_qualifier", 
                         "period_literal" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = TeradataSQLLiteralsParser.ruleNames;
        this.literalNames = TeradataSQLLiteralsParser.literalNames;
        this.symbolicNames = TeradataSQLLiteralsParser.symbolicNames;
    }



	literal() {
	    let localctx = new LiteralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, TeradataSQLLiteralsParser.RULE_literal);
	    try {
	        this.state = 43;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 30;
	            this.hex_byte_literal();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 31;
	            this.char_string_literal();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 32;
	            this.unicode_char_string_literal();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 33;
	            this.hex_char_string_literal();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 34;
	            this.integer_literal();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 35;
	            this.hex_integer_literal();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 36;
	            this.float_literal();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 37;
	            this.date_literal();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 38;
	            this.time_literal();
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 39;
	            this.timestamp_literal();
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 40;
	            this.interval_literal();
	            break;

	        case 12:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 41;
	            this.period_literal();
	            break;

	        case 13:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 42;
	            this.match(TeradataSQLLiteralsParser.NULL);
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



	hex_byte_literal() {
	    let localctx = new Hex_byte_literalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, TeradataSQLLiteralsParser.RULE_hex_byte_literal);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 45;
	        this.match(TeradataSQLLiteralsParser.HEX_BYTE_LITERAL);
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



	char_string_literal() {
	    let localctx = new Char_string_literalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, TeradataSQLLiteralsParser.RULE_char_string_literal);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 48;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 1069)) & ~0x1f) === 0 && ((1 << (_la - 1069)) & 15) !== 0)) {
	            this.state = 47;
	            this.character_set_prefix();
	        }

	        this.state = 51; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 50;
	            this.match(TeradataSQLLiteralsParser.CHAR_STRING);
	            this.state = 53; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===1203);
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



	unicode_char_string_literal() {
	    let localctx = new Unicode_char_string_literalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, TeradataSQLLiteralsParser.RULE_unicode_char_string_literal);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 56;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 1069)) & ~0x1f) === 0 && ((1 << (_la - 1069)) & 15) !== 0)) {
	            this.state = 55;
	            this.character_set_prefix();
	        }

	        this.state = 58;
	        this.match(TeradataSQLLiteralsParser.UNICODE_STRING_LEADING);
	        this.state = 62;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===1203) {
	            this.state = 59;
	            this.match(TeradataSQLLiteralsParser.CHAR_STRING);
	            this.state = 64;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 65;
	        this.match(TeradataSQLLiteralsParser.UESCAPE);
	        this.state = 66;
	        this.match(TeradataSQLLiteralsParser.CHAR_STRING);
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



	hex_char_string_literal() {
	    let localctx = new Hex_char_string_literalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, TeradataSQLLiteralsParser.RULE_hex_char_string_literal);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 69;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 1069)) & ~0x1f) === 0 && ((1 << (_la - 1069)) & 15) !== 0)) {
	            this.state = 68;
	            this.character_set_prefix();
	        }

	        this.state = 71;
	        this.match(TeradataSQLLiteralsParser.HEX_STRING);
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



	integer_literal() {
	    let localctx = new Integer_literalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, TeradataSQLLiteralsParser.RULE_integer_literal);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 73;
	        this.match(TeradataSQLLiteralsParser.UNSIGNED_INTEGER);
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



	hex_integer_literal() {
	    let localctx = new Hex_integer_literalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, TeradataSQLLiteralsParser.RULE_hex_integer_literal);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 75;
	        this.match(TeradataSQLLiteralsParser.HEX_INTEGER_LITERAL);
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



	float_literal() {
	    let localctx = new Float_literalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, TeradataSQLLiteralsParser.RULE_float_literal);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 77;
	        this.match(TeradataSQLLiteralsParser.FLOAT_LITERAL);
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



	character_set_prefix() {
	    let localctx = new Character_set_prefixContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, TeradataSQLLiteralsParser.RULE_character_set_prefix);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 79;
	        _la = this._input.LA(1);
	        if(!(((((_la - 1069)) & ~0x1f) === 0 && ((1 << (_la - 1069)) & 15) !== 0))) {
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



	date_literal() {
	    let localctx = new Date_literalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, TeradataSQLLiteralsParser.RULE_date_literal);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 82;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===104) {
	            this.state = 81;
	            this.match(TeradataSQLLiteralsParser.DATE);
	        }

	        this.state = 84;
	        this.match(TeradataSQLLiteralsParser.DATE_STRING);
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



	time_literal() {
	    let localctx = new Time_literalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, TeradataSQLLiteralsParser.RULE_time_literal);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 87;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===421) {
	            this.state = 86;
	            this.match(TeradataSQLLiteralsParser.TIME);
	        }

	        this.state = 89;
	        this.match(TeradataSQLLiteralsParser.TIME_STRING);
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



	timestamp_literal() {
	    let localctx = new Timestamp_literalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, TeradataSQLLiteralsParser.RULE_timestamp_literal);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 92;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===422) {
	            this.state = 91;
	            this.match(TeradataSQLLiteralsParser.TIMESTAMP);
	        }

	        this.state = 94;
	        this.match(TeradataSQLLiteralsParser.TIMESTAMP_STRING);
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



	interval_literal() {
	    let localctx = new Interval_literalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, TeradataSQLLiteralsParser.RULE_interval_literal);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 96;
	        this.match(TeradataSQLLiteralsParser.INTERVAL);
	        this.state = 98;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===1222) {
	            this.state = 97;
	            this.match(TeradataSQLLiteralsParser.MINUS_SIGN);
	        }

	        this.state = 100;
	        _la = this._input.LA(1);
	        if(!(((((_la - 1198)) & ~0x1f) === 0 && ((1 << (_la - 1198)) & 39) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 101;
	        this.interval_qualifier();
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



	interval_qualifier() {
	    let localctx = new Interval_qualifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, TeradataSQLLiteralsParser.RULE_interval_qualifier);
	    try {
	        this.state = 130;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 103;
	            this.match(TeradataSQLLiteralsParser.YEAR);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 104;
	            this.match(TeradataSQLLiteralsParser.YEAR);
	            this.state = 105;
	            this.match(TeradataSQLLiteralsParser.TO);
	            this.state = 106;
	            this.match(TeradataSQLLiteralsParser.MONTH);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 107;
	            this.match(TeradataSQLLiteralsParser.MONTH);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 108;
	            this.match(TeradataSQLLiteralsParser.DAY);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 109;
	            this.match(TeradataSQLLiteralsParser.DAY);
	            this.state = 110;
	            this.match(TeradataSQLLiteralsParser.TO);
	            this.state = 111;
	            this.match(TeradataSQLLiteralsParser.HOUR);
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 112;
	            this.match(TeradataSQLLiteralsParser.DAY);
	            this.state = 113;
	            this.match(TeradataSQLLiteralsParser.TO);
	            this.state = 114;
	            this.match(TeradataSQLLiteralsParser.MINUTE);
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 115;
	            this.match(TeradataSQLLiteralsParser.DAY);
	            this.state = 116;
	            this.match(TeradataSQLLiteralsParser.TO);
	            this.state = 117;
	            this.match(TeradataSQLLiteralsParser.SECOND);
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 118;
	            this.match(TeradataSQLLiteralsParser.HOUR);
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 119;
	            this.match(TeradataSQLLiteralsParser.HOUR);
	            this.state = 120;
	            this.match(TeradataSQLLiteralsParser.TO);
	            this.state = 121;
	            this.match(TeradataSQLLiteralsParser.MINUTE);
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 122;
	            this.match(TeradataSQLLiteralsParser.HOUR);
	            this.state = 123;
	            this.match(TeradataSQLLiteralsParser.TO);
	            this.state = 124;
	            this.match(TeradataSQLLiteralsParser.SECOND);
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 125;
	            this.match(TeradataSQLLiteralsParser.MINUTE);
	            break;

	        case 12:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 126;
	            this.match(TeradataSQLLiteralsParser.MINUTE);
	            this.state = 127;
	            this.match(TeradataSQLLiteralsParser.TO);
	            this.state = 128;
	            this.match(TeradataSQLLiteralsParser.SECOND);
	            break;

	        case 13:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 129;
	            this.match(TeradataSQLLiteralsParser.SECOND);
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



	period_literal() {
	    let localctx = new Period_literalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, TeradataSQLLiteralsParser.RULE_period_literal);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 132;
	        this.match(TeradataSQLLiteralsParser.PERIOD);
	        this.state = 133;
	        this.match(TeradataSQLLiteralsParser.PERIOD_STRING);
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

TeradataSQLLiteralsParser.EOF = antlr4.Token.EOF;
TeradataSQLLiteralsParser.ABORT = 1;
TeradataSQLLiteralsParser.ABORTSESSION = 2;
TeradataSQLLiteralsParser.ABS = 3;
TeradataSQLLiteralsParser.ACCESS_LOCK = 4;
TeradataSQLLiteralsParser.ACCOUNT = 5;
TeradataSQLLiteralsParser.ACOS = 6;
TeradataSQLLiteralsParser.ACOSH = 7;
TeradataSQLLiteralsParser.ADD = 8;
TeradataSQLLiteralsParser.ADD_MONTHS = 9;
TeradataSQLLiteralsParser.ADMIN = 10;
TeradataSQLLiteralsParser.AFTER = 11;
TeradataSQLLiteralsParser.AGGREGATE = 12;
TeradataSQLLiteralsParser.ALL = 13;
TeradataSQLLiteralsParser.ALTER = 14;
TeradataSQLLiteralsParser.AMP = 15;
TeradataSQLLiteralsParser.AND = 16;
TeradataSQLLiteralsParser.ANSIDATE = 17;
TeradataSQLLiteralsParser.ANY = 18;
TeradataSQLLiteralsParser.ARGLPAREN = 19;
TeradataSQLLiteralsParser.AS = 20;
TeradataSQLLiteralsParser.ASC = 21;
TeradataSQLLiteralsParser.ASIN = 22;
TeradataSQLLiteralsParser.ASINH = 23;
TeradataSQLLiteralsParser.AT = 24;
TeradataSQLLiteralsParser.ATAN = 25;
TeradataSQLLiteralsParser.ATAN2 = 26;
TeradataSQLLiteralsParser.ATANH = 27;
TeradataSQLLiteralsParser.ATOMIC = 28;
TeradataSQLLiteralsParser.AUTHORIZATION = 29;
TeradataSQLLiteralsParser.AVE = 30;
TeradataSQLLiteralsParser.AVERAGE = 31;
TeradataSQLLiteralsParser.AVG = 32;
TeradataSQLLiteralsParser.BEFORE = 33;
TeradataSQLLiteralsParser.BEGIN = 34;
TeradataSQLLiteralsParser.BETWEEN = 35;
TeradataSQLLiteralsParser.BIGINT = 36;
TeradataSQLLiteralsParser.BINARY = 37;
TeradataSQLLiteralsParser.BLOB = 38;
TeradataSQLLiteralsParser.BOTH = 39;
TeradataSQLLiteralsParser.BT = 40;
TeradataSQLLiteralsParser.BUT = 41;
TeradataSQLLiteralsParser.BY = 42;
TeradataSQLLiteralsParser.BYTE = 43;
TeradataSQLLiteralsParser.BYTEINT = 44;
TeradataSQLLiteralsParser.BYTES = 45;
TeradataSQLLiteralsParser.CALL = 46;
TeradataSQLLiteralsParser.CASE = 47;
TeradataSQLLiteralsParser.CASE_N = 48;
TeradataSQLLiteralsParser.CASESPECIFIC = 49;
TeradataSQLLiteralsParser.CAST = 50;
TeradataSQLLiteralsParser.CD = 51;
TeradataSQLLiteralsParser.CHAR = 52;
TeradataSQLLiteralsParser.CHAR_LENGTH = 53;
TeradataSQLLiteralsParser.CHAR2HEXINT = 54;
TeradataSQLLiteralsParser.CHARACTER = 55;
TeradataSQLLiteralsParser.CHARACTER_LENGTH = 56;
TeradataSQLLiteralsParser.CHARACTERS = 57;
TeradataSQLLiteralsParser.CHARS = 58;
TeradataSQLLiteralsParser.CHECK = 59;
TeradataSQLLiteralsParser.CHECKPOINT = 60;
TeradataSQLLiteralsParser.CLASS = 61;
TeradataSQLLiteralsParser.CLOB = 62;
TeradataSQLLiteralsParser.CLOSE = 63;
TeradataSQLLiteralsParser.CLUSTER = 64;
TeradataSQLLiteralsParser.CM = 65;
TeradataSQLLiteralsParser.COALESCE = 66;
TeradataSQLLiteralsParser.COLLATION = 67;
TeradataSQLLiteralsParser.COLLECT = 68;
TeradataSQLLiteralsParser.COLUMN = 69;
TeradataSQLLiteralsParser.COMMENT = 70;
TeradataSQLLiteralsParser.COMMIT = 71;
TeradataSQLLiteralsParser.COMPRESS = 72;
TeradataSQLLiteralsParser.CONNECT = 73;
TeradataSQLLiteralsParser.CONSTRAINT = 74;
TeradataSQLLiteralsParser.CONSTRUCTOR = 75;
TeradataSQLLiteralsParser.CONSUME = 76;
TeradataSQLLiteralsParser.CONTAINS = 77;
TeradataSQLLiteralsParser.CONTINUE = 78;
TeradataSQLLiteralsParser.CONVERT_TABLE_HEADER = 79;
TeradataSQLLiteralsParser.CORR = 80;
TeradataSQLLiteralsParser.COS = 81;
TeradataSQLLiteralsParser.COSH = 82;
TeradataSQLLiteralsParser.COUNT = 83;
TeradataSQLLiteralsParser.COVAR_POP = 84;
TeradataSQLLiteralsParser.COVAR_SAMP = 85;
TeradataSQLLiteralsParser.CREATE = 86;
TeradataSQLLiteralsParser.CROSS = 87;
TeradataSQLLiteralsParser.CS = 88;
TeradataSQLLiteralsParser.CSUM = 89;
TeradataSQLLiteralsParser.CT = 90;
TeradataSQLLiteralsParser.CTCONTROL = 91;
TeradataSQLLiteralsParser.CUBE = 92;
TeradataSQLLiteralsParser.CURRENT = 93;
TeradataSQLLiteralsParser.CURRENT_DATE = 94;
TeradataSQLLiteralsParser.CURRENT_ROLE = 95;
TeradataSQLLiteralsParser.CURRENT_TIME = 96;
TeradataSQLLiteralsParser.CURRENT_TIMESTAMP = 97;
TeradataSQLLiteralsParser.CURRENT_USER = 98;
TeradataSQLLiteralsParser.CURSOR = 99;
TeradataSQLLiteralsParser.CV = 100;
TeradataSQLLiteralsParser.CYCLE = 101;
TeradataSQLLiteralsParser.DATABASE = 102;
TeradataSQLLiteralsParser.DATABLOCKSIZE = 103;
TeradataSQLLiteralsParser.DATE = 104;
TeradataSQLLiteralsParser.DATEFORM = 105;
TeradataSQLLiteralsParser.DAY = 106;
TeradataSQLLiteralsParser.DEALLOCATE = 107;
TeradataSQLLiteralsParser.DEC = 108;
TeradataSQLLiteralsParser.DECIMAL = 109;
TeradataSQLLiteralsParser.DECLARE = 110;
TeradataSQLLiteralsParser.DEFAULT = 111;
TeradataSQLLiteralsParser.DEFERRED = 112;
TeradataSQLLiteralsParser.DEGREES = 113;
TeradataSQLLiteralsParser.DEL = 114;
TeradataSQLLiteralsParser.DELETE = 115;
TeradataSQLLiteralsParser.DESC = 116;
TeradataSQLLiteralsParser.DETERMINISTIC = 117;
TeradataSQLLiteralsParser.DIAGNOSTIC = 118;
TeradataSQLLiteralsParser.DICTIONARY = 119;
TeradataSQLLiteralsParser.DISABLED = 120;
TeradataSQLLiteralsParser.DISTINCT = 121;
TeradataSQLLiteralsParser.DO = 122;
TeradataSQLLiteralsParser.DOMAIN = 123;
TeradataSQLLiteralsParser.DOUBLE = 124;
TeradataSQLLiteralsParser.DROP = 125;
TeradataSQLLiteralsParser.DUAL = 126;
TeradataSQLLiteralsParser.DUMP = 127;
TeradataSQLLiteralsParser.DYNAMIC = 128;
TeradataSQLLiteralsParser.EACH = 129;
TeradataSQLLiteralsParser.ECHO = 130;
TeradataSQLLiteralsParser.ELSE = 131;
TeradataSQLLiteralsParser.ELSEIF = 132;
TeradataSQLLiteralsParser.ENABLED = 133;
TeradataSQLLiteralsParser.END = 134;
TeradataSQLLiteralsParser.EQ = 135;
TeradataSQLLiteralsParser.EQUALS = 136;
TeradataSQLLiteralsParser.ERROR = 137;
TeradataSQLLiteralsParser.ERRORFILES = 138;
TeradataSQLLiteralsParser.ERRORTABLES = 139;
TeradataSQLLiteralsParser.ESCAPE = 140;
TeradataSQLLiteralsParser.ET = 141;
TeradataSQLLiteralsParser.EXCEPT = 142;
TeradataSQLLiteralsParser.EXEC = 143;
TeradataSQLLiteralsParser.EXECUTE = 144;
TeradataSQLLiteralsParser.EXISTS = 145;
TeradataSQLLiteralsParser.EXIT = 146;
TeradataSQLLiteralsParser.EXP = 147;
TeradataSQLLiteralsParser.EXPAND = 148;
TeradataSQLLiteralsParser.EXPANDING = 149;
TeradataSQLLiteralsParser.EXPLAIN = 150;
TeradataSQLLiteralsParser.EXTERNAL = 151;
TeradataSQLLiteralsParser.EXTRACT = 152;
TeradataSQLLiteralsParser.FALLBACK = 153;
TeradataSQLLiteralsParser.FASTEXPORT = 154;
TeradataSQLLiteralsParser.FETCH = 155;
TeradataSQLLiteralsParser.FIRST = 156;
TeradataSQLLiteralsParser.FLOAT = 157;
TeradataSQLLiteralsParser.FLUSH = 158;
TeradataSQLLiteralsParser.FOR = 159;
TeradataSQLLiteralsParser.FOREIGN = 160;
TeradataSQLLiteralsParser.FORMAT = 161;
TeradataSQLLiteralsParser.FOUND = 162;
TeradataSQLLiteralsParser.FREESPACE = 163;
TeradataSQLLiteralsParser.FROM = 164;
TeradataSQLLiteralsParser.FULL = 165;
TeradataSQLLiteralsParser.FUNCTION = 166;
TeradataSQLLiteralsParser.FUNCTIONDESCRIPTOR = 167;
TeradataSQLLiteralsParser.GE = 168;
TeradataSQLLiteralsParser.GENERATED = 169;
TeradataSQLLiteralsParser.GET = 170;
TeradataSQLLiteralsParser.GIVE = 171;
TeradataSQLLiteralsParser.GRANT = 172;
TeradataSQLLiteralsParser.GRAPHIC = 173;
TeradataSQLLiteralsParser.GROUP = 174;
TeradataSQLLiteralsParser.GROUPING = 175;
TeradataSQLLiteralsParser.GT = 176;
TeradataSQLLiteralsParser.HANDLER = 177;
TeradataSQLLiteralsParser.HASH = 178;
TeradataSQLLiteralsParser.HASHAMP = 179;
TeradataSQLLiteralsParser.HASHBAKAMP = 180;
TeradataSQLLiteralsParser.HASHBUCKET = 181;
TeradataSQLLiteralsParser.HASHROW = 182;
TeradataSQLLiteralsParser.HAVING = 183;
TeradataSQLLiteralsParser.HELP = 184;
TeradataSQLLiteralsParser.HOUR = 185;
TeradataSQLLiteralsParser.ID2BIGINT = 186;
TeradataSQLLiteralsParser.IDENTITY = 187;
TeradataSQLLiteralsParser.IF = 188;
TeradataSQLLiteralsParser.IMMEDIATE = 189;
TeradataSQLLiteralsParser.IN = 190;
TeradataSQLLiteralsParser.INCONSISTENT = 191;
TeradataSQLLiteralsParser.INDEX = 192;
TeradataSQLLiteralsParser.INITIATE = 193;
TeradataSQLLiteralsParser.INNER = 194;
TeradataSQLLiteralsParser.INOUT = 195;
TeradataSQLLiteralsParser.INPUT = 196;
TeradataSQLLiteralsParser.INS = 197;
TeradataSQLLiteralsParser.INSERT = 198;
TeradataSQLLiteralsParser.INSTANCE = 199;
TeradataSQLLiteralsParser.INSTEAD = 200;
TeradataSQLLiteralsParser.INT = 201;
TeradataSQLLiteralsParser.INTEGER = 202;
TeradataSQLLiteralsParser.INTEGERDATE = 203;
TeradataSQLLiteralsParser.INTERSECT = 204;
TeradataSQLLiteralsParser.INTERVAL = 205;
TeradataSQLLiteralsParser.INTO = 206;
TeradataSQLLiteralsParser.IS = 207;
TeradataSQLLiteralsParser.ITERATE = 208;
TeradataSQLLiteralsParser.JAR = 209;
TeradataSQLLiteralsParser.JOIN = 210;
TeradataSQLLiteralsParser.JOURNAL = 211;
TeradataSQLLiteralsParser.KEY = 212;
TeradataSQLLiteralsParser.KURTOSIS = 213;
TeradataSQLLiteralsParser.LANGUAGE = 214;
TeradataSQLLiteralsParser.LARGE = 215;
TeradataSQLLiteralsParser.LE = 216;
TeradataSQLLiteralsParser.LEADING = 217;
TeradataSQLLiteralsParser.LEAVE = 218;
TeradataSQLLiteralsParser.LEFT = 219;
TeradataSQLLiteralsParser.LIKE = 220;
TeradataSQLLiteralsParser.LIMIT = 221;
TeradataSQLLiteralsParser.LN = 222;
TeradataSQLLiteralsParser.LOADING = 223;
TeradataSQLLiteralsParser.LOCAL = 224;
TeradataSQLLiteralsParser.LOCATOR = 225;
TeradataSQLLiteralsParser.LOCK = 226;
TeradataSQLLiteralsParser.LOCKING = 227;
TeradataSQLLiteralsParser.LOG = 228;
TeradataSQLLiteralsParser.LOGGING = 229;
TeradataSQLLiteralsParser.LOGON = 230;
TeradataSQLLiteralsParser.LONG = 231;
TeradataSQLLiteralsParser.LOOP = 232;
TeradataSQLLiteralsParser.LOWER = 233;
TeradataSQLLiteralsParser.LT = 234;
TeradataSQLLiteralsParser.MACRO = 235;
TeradataSQLLiteralsParser.MAP = 236;
TeradataSQLLiteralsParser.MAVG = 237;
TeradataSQLLiteralsParser.MAX = 238;
TeradataSQLLiteralsParser.MAXIMUM = 239;
TeradataSQLLiteralsParser.MCHARACTERS = 240;
TeradataSQLLiteralsParser.MDIFF = 241;
TeradataSQLLiteralsParser.MERGE = 242;
TeradataSQLLiteralsParser.METHOD = 243;
TeradataSQLLiteralsParser.MIN = 244;
TeradataSQLLiteralsParser.MINDEX = 245;
TeradataSQLLiteralsParser.MINIMUM = 246;
TeradataSQLLiteralsParser.MINUS = 247;
TeradataSQLLiteralsParser.MINUTE = 248;
TeradataSQLLiteralsParser.MLINREG = 249;
TeradataSQLLiteralsParser.MLOAD = 250;
TeradataSQLLiteralsParser.MOD = 251;
TeradataSQLLiteralsParser.MODE = 252;
TeradataSQLLiteralsParser.MODIFIES = 253;
TeradataSQLLiteralsParser.MODIFY = 254;
TeradataSQLLiteralsParser.MONITOR = 255;
TeradataSQLLiteralsParser.MONRESOURCE = 256;
TeradataSQLLiteralsParser.MONSESSION = 257;
TeradataSQLLiteralsParser.MONTH = 258;
TeradataSQLLiteralsParser.MSUBSTR = 259;
TeradataSQLLiteralsParser.MSUM = 260;
TeradataSQLLiteralsParser.MULTISET = 261;
TeradataSQLLiteralsParser.NAMED = 262;
TeradataSQLLiteralsParser.NATURAL = 263;
TeradataSQLLiteralsParser.NE = 264;
TeradataSQLLiteralsParser.NEW = 265;
TeradataSQLLiteralsParser.NEW_TABLE = 266;
TeradataSQLLiteralsParser.NEXT = 267;
TeradataSQLLiteralsParser.NO = 268;
TeradataSQLLiteralsParser.NONE = 269;
TeradataSQLLiteralsParser.NONTEMPORAL = 270;
TeradataSQLLiteralsParser.NORMALIZE = 271;
TeradataSQLLiteralsParser.NOT = 272;
TeradataSQLLiteralsParser.NOWAIT = 273;
TeradataSQLLiteralsParser.NULL = 274;
TeradataSQLLiteralsParser.NULLIF = 275;
TeradataSQLLiteralsParser.NULLIFZERO = 276;
TeradataSQLLiteralsParser.NUMBER = 277;
TeradataSQLLiteralsParser.NUMERIC = 278;
TeradataSQLLiteralsParser.OBJECT = 279;
TeradataSQLLiteralsParser.OBJECTS = 280;
TeradataSQLLiteralsParser.OCTET_LENGTH = 281;
TeradataSQLLiteralsParser.OF = 282;
TeradataSQLLiteralsParser.OFF = 283;
TeradataSQLLiteralsParser.OLD = 284;
TeradataSQLLiteralsParser.OLD_TABLE = 285;
TeradataSQLLiteralsParser.ON = 286;
TeradataSQLLiteralsParser.ONLY = 287;
TeradataSQLLiteralsParser.OPEN = 288;
TeradataSQLLiteralsParser.OPTION = 289;
TeradataSQLLiteralsParser.OR = 290;
TeradataSQLLiteralsParser.ORDER = 291;
TeradataSQLLiteralsParser.ORDERING = 292;
TeradataSQLLiteralsParser.OUT = 293;
TeradataSQLLiteralsParser.OUTER = 294;
TeradataSQLLiteralsParser.OVER = 295;
TeradataSQLLiteralsParser.OVERLAPS = 296;
TeradataSQLLiteralsParser.OVERRIDE = 297;
TeradataSQLLiteralsParser.PARAMETER = 298;
TeradataSQLLiteralsParser.PASSWORD = 299;
TeradataSQLLiteralsParser.PERCENT = 300;
TeradataSQLLiteralsParser.PERCENT_RANK = 301;
TeradataSQLLiteralsParser.PERM = 302;
TeradataSQLLiteralsParser.PERMANENT = 303;
TeradataSQLLiteralsParser.POSITION = 304;
TeradataSQLLiteralsParser.PRECISION = 305;
TeradataSQLLiteralsParser.PREPARE = 306;
TeradataSQLLiteralsParser.PRESERVE = 307;
TeradataSQLLiteralsParser.PRIMARY = 308;
TeradataSQLLiteralsParser.PRIVILEGES = 309;
TeradataSQLLiteralsParser.PROCEDURE = 310;
TeradataSQLLiteralsParser.PROFILE = 311;
TeradataSQLLiteralsParser.PROTECTION = 312;
TeradataSQLLiteralsParser.PUBLIC = 313;
TeradataSQLLiteralsParser.QUALIFIED = 314;
TeradataSQLLiteralsParser.QUALIFY = 315;
TeradataSQLLiteralsParser.QUANTILE = 316;
TeradataSQLLiteralsParser.QUEUE = 317;
TeradataSQLLiteralsParser.RADIANS = 318;
TeradataSQLLiteralsParser.RANDOM = 319;
TeradataSQLLiteralsParser.RANGE_N = 320;
TeradataSQLLiteralsParser.RANK = 321;
TeradataSQLLiteralsParser.READS = 322;
TeradataSQLLiteralsParser.REAL = 323;
TeradataSQLLiteralsParser.RECURSIVE = 324;
TeradataSQLLiteralsParser.REFERENCES = 325;
TeradataSQLLiteralsParser.REFERENCING = 326;
TeradataSQLLiteralsParser.REGR_AVGX = 327;
TeradataSQLLiteralsParser.REGR_AVGY = 328;
TeradataSQLLiteralsParser.REGR_COUNT = 329;
TeradataSQLLiteralsParser.REGR_INTERCEPT = 330;
TeradataSQLLiteralsParser.REGR_R2 = 331;
TeradataSQLLiteralsParser.REGR_SLOPE = 332;
TeradataSQLLiteralsParser.REGR_SXX = 333;
TeradataSQLLiteralsParser.REGR_SXY = 334;
TeradataSQLLiteralsParser.REGR_SYY = 335;
TeradataSQLLiteralsParser.RELATIVE = 336;
TeradataSQLLiteralsParser.RELEASE = 337;
TeradataSQLLiteralsParser.RENAME = 338;
TeradataSQLLiteralsParser.REPEAT = 339;
TeradataSQLLiteralsParser.REPLACE = 340;
TeradataSQLLiteralsParser.REPLCONTROL = 341;
TeradataSQLLiteralsParser.REPLICATION = 342;
TeradataSQLLiteralsParser.REQUEST = 343;
TeradataSQLLiteralsParser.RESIGNAL = 344;
TeradataSQLLiteralsParser.RESTART = 345;
TeradataSQLLiteralsParser.RESTORE = 346;
TeradataSQLLiteralsParser.RESULT = 347;
TeradataSQLLiteralsParser.RESUME = 348;
TeradataSQLLiteralsParser.RET = 349;
TeradataSQLLiteralsParser.RETRIEVE = 350;
TeradataSQLLiteralsParser.RETURN = 351;
TeradataSQLLiteralsParser.RETURNS = 352;
TeradataSQLLiteralsParser.REVALIDATE = 353;
TeradataSQLLiteralsParser.REVOKE = 354;
TeradataSQLLiteralsParser.RIGHT = 355;
TeradataSQLLiteralsParser.RIGHTS = 356;
TeradataSQLLiteralsParser.ROLE = 357;
TeradataSQLLiteralsParser.ROLLBACK = 358;
TeradataSQLLiteralsParser.ROLLFORWARD = 359;
TeradataSQLLiteralsParser.ROLLUP = 360;
TeradataSQLLiteralsParser.ROW = 361;
TeradataSQLLiteralsParser.ROW_NUMBER = 362;
TeradataSQLLiteralsParser.ROWID = 363;
TeradataSQLLiteralsParser.ROWS = 364;
TeradataSQLLiteralsParser.SAMPLE = 365;
TeradataSQLLiteralsParser.SAMPLEID = 366;
TeradataSQLLiteralsParser.SCROLL = 367;
TeradataSQLLiteralsParser.SECOND = 368;
TeradataSQLLiteralsParser.SEL = 369;
TeradataSQLLiteralsParser.SELECT = 370;
TeradataSQLLiteralsParser.SESSION = 371;
TeradataSQLLiteralsParser.SET = 372;
TeradataSQLLiteralsParser.SETRESRATE = 373;
TeradataSQLLiteralsParser.SETS = 374;
TeradataSQLLiteralsParser.SETSESSRATE = 375;
TeradataSQLLiteralsParser.SHOW = 376;
TeradataSQLLiteralsParser.SIGNAL = 377;
TeradataSQLLiteralsParser.SIN = 378;
TeradataSQLLiteralsParser.SINH = 379;
TeradataSQLLiteralsParser.SKEW = 380;
TeradataSQLLiteralsParser.SMALLINT = 381;
TeradataSQLLiteralsParser.SOME = 382;
TeradataSQLLiteralsParser.SOUNDEX = 383;
TeradataSQLLiteralsParser.SPECIFIC = 384;
TeradataSQLLiteralsParser.SPOOL = 385;
TeradataSQLLiteralsParser.SQL = 386;
TeradataSQLLiteralsParser.SQLEXCEPTION = 387;
TeradataSQLLiteralsParser.SQLTEXT = 388;
TeradataSQLLiteralsParser.SQLWARNING = 389;
TeradataSQLLiteralsParser.SQRT = 390;
TeradataSQLLiteralsParser.SS = 391;
TeradataSQLLiteralsParser.START = 392;
TeradataSQLLiteralsParser.STARTUP = 393;
TeradataSQLLiteralsParser.STATEMENT = 394;
TeradataSQLLiteralsParser.STATISTICS = 395;
TeradataSQLLiteralsParser.STDDEV_POP = 396;
TeradataSQLLiteralsParser.STDDEV_SAMP = 397;
TeradataSQLLiteralsParser.STEPINFO = 398;
TeradataSQLLiteralsParser.STRING_CS = 399;
TeradataSQLLiteralsParser.SUBSCRIBER = 400;
TeradataSQLLiteralsParser.SUBSTR = 401;
TeradataSQLLiteralsParser.SUBSTRING = 402;
TeradataSQLLiteralsParser.SUM = 403;
TeradataSQLLiteralsParser.SUMMARY = 404;
TeradataSQLLiteralsParser.SUSPEND = 405;
TeradataSQLLiteralsParser.TABLE = 406;
TeradataSQLLiteralsParser.TAN = 407;
TeradataSQLLiteralsParser.TANH = 408;
TeradataSQLLiteralsParser.TBL_CS = 409;
TeradataSQLLiteralsParser.TD_ANYTYPE = 410;
TeradataSQLLiteralsParser.TD_AUTHID = 411;
TeradataSQLLiteralsParser.TD_HOST = 412;
TeradataSQLLiteralsParser.TD_ROWLOADID = 413;
TeradataSQLLiteralsParser.TD_ROWREVISION = 414;
TeradataSQLLiteralsParser.TD_ROWSIZE = 415;
TeradataSQLLiteralsParser.TD_VALIST = 416;
TeradataSQLLiteralsParser.TEMPORARY = 417;
TeradataSQLLiteralsParser.TERMINATE = 418;
TeradataSQLLiteralsParser.THEN = 419;
TeradataSQLLiteralsParser.THRESHOLD = 420;
TeradataSQLLiteralsParser.TIME = 421;
TeradataSQLLiteralsParser.TIMESTAMP = 422;
TeradataSQLLiteralsParser.TIMEZONE_HOUR = 423;
TeradataSQLLiteralsParser.TIMEZONE_MINUTE = 424;
TeradataSQLLiteralsParser.TITLE = 425;
TeradataSQLLiteralsParser.TO = 426;
TeradataSQLLiteralsParser.TOP = 427;
TeradataSQLLiteralsParser.TRACE = 428;
TeradataSQLLiteralsParser.TRAILING = 429;
TeradataSQLLiteralsParser.TRANSACTION = 430;
TeradataSQLLiteralsParser.TRANSACTIONTIME = 431;
TeradataSQLLiteralsParser.TRANSFORM = 432;
TeradataSQLLiteralsParser.TRANSLATE = 433;
TeradataSQLLiteralsParser.TRANSLATE_CHK = 434;
TeradataSQLLiteralsParser.TRIGGER = 435;
TeradataSQLLiteralsParser.TRIM = 436;
TeradataSQLLiteralsParser.TYPE = 437;
TeradataSQLLiteralsParser.UC = 438;
TeradataSQLLiteralsParser.UDTCASTAS = 439;
TeradataSQLLiteralsParser.UDTCASTLPAREN = 440;
TeradataSQLLiteralsParser.UDTMETHOD = 441;
TeradataSQLLiteralsParser.UDTTYPE = 442;
TeradataSQLLiteralsParser.UDTUSAGE = 443;
TeradataSQLLiteralsParser.UESCAPE = 444;
TeradataSQLLiteralsParser.UNDEFINED = 445;
TeradataSQLLiteralsParser.UNDO = 446;
TeradataSQLLiteralsParser.UNION = 447;
TeradataSQLLiteralsParser.UNIQUE = 448;
TeradataSQLLiteralsParser.UNTIL = 449;
TeradataSQLLiteralsParser.UNTIL_CHANGED = 450;
TeradataSQLLiteralsParser.UNTIL_CLOSED = 451;
TeradataSQLLiteralsParser.UPD = 452;
TeradataSQLLiteralsParser.UPDATE = 453;
TeradataSQLLiteralsParser.UPPER = 454;
TeradataSQLLiteralsParser.UPPERCASE = 455;
TeradataSQLLiteralsParser.USER = 456;
TeradataSQLLiteralsParser.USING = 457;
TeradataSQLLiteralsParser.VALIDTIME = 458;
TeradataSQLLiteralsParser.VALUE = 459;
TeradataSQLLiteralsParser.VALUES = 460;
TeradataSQLLiteralsParser.VAR_POP = 461;
TeradataSQLLiteralsParser.VAR_SAMP = 462;
TeradataSQLLiteralsParser.VARBYTE = 463;
TeradataSQLLiteralsParser.VARCHAR = 464;
TeradataSQLLiteralsParser.VARGRAPHIC = 465;
TeradataSQLLiteralsParser.VARIANT_TYPE = 466;
TeradataSQLLiteralsParser.VARYING = 467;
TeradataSQLLiteralsParser.VIEW = 468;
TeradataSQLLiteralsParser.VOLATILE = 469;
TeradataSQLLiteralsParser.WHEN = 470;
TeradataSQLLiteralsParser.WHERE = 471;
TeradataSQLLiteralsParser.WHILE = 472;
TeradataSQLLiteralsParser.WIDTH_BUCKET = 473;
TeradataSQLLiteralsParser.WITH = 474;
TeradataSQLLiteralsParser.WITHOUT = 475;
TeradataSQLLiteralsParser.WORK = 476;
TeradataSQLLiteralsParser.XMLPLAN = 477;
TeradataSQLLiteralsParser.YEAR = 478;
TeradataSQLLiteralsParser.ZEROIFNULL = 479;
TeradataSQLLiteralsParser.ZONE = 480;
TeradataSQLLiteralsParser.ALIAS = 481;
TeradataSQLLiteralsParser.DESCRIPTOR = 482;
TeradataSQLLiteralsParser.GO = 483;
TeradataSQLLiteralsParser.GOTO = 484;
TeradataSQLLiteralsParser.INDICATOR = 485;
TeradataSQLLiteralsParser.PRIVATE = 486;
TeradataSQLLiteralsParser.WAIT = 487;
TeradataSQLLiteralsParser.ABORTSESSIONS = 488;
TeradataSQLLiteralsParser.ABSENT = 489;
TeradataSQLLiteralsParser.ACCESS = 490;
TeradataSQLLiteralsParser.ACCORDING = 491;
TeradataSQLLiteralsParser.ACCUMULATE = 492;
TeradataSQLLiteralsParser.AG = 493;
TeradataSQLLiteralsParser.AGGGEOMINTERSECTION = 494;
TeradataSQLLiteralsParser.AGGGEOMUNION = 495;
TeradataSQLLiteralsParser.ALLDBQL = 496;
TeradataSQLLiteralsParser.ALLOCATE = 497;
TeradataSQLLiteralsParser.ALLOCATION = 498;
TeradataSQLLiteralsParser.ALLOW = 499;
TeradataSQLLiteralsParser.ALLPARAMS = 500;
TeradataSQLLiteralsParser.ALLTDWM = 501;
TeradataSQLLiteralsParser.ALWAYS = 502;
TeradataSQLLiteralsParser.AMPCOUNT = 503;
TeradataSQLLiteralsParser.ANALYSIS = 504;
TeradataSQLLiteralsParser.ANCHOR = 505;
TeradataSQLLiteralsParser.ANCHOR_HOUR = 506;
TeradataSQLLiteralsParser.ANCHOR_MILLISECOND = 507;
TeradataSQLLiteralsParser.ANCHOR_MINUTE = 508;
TeradataSQLLiteralsParser.ANCHOR_SECOND = 509;
TeradataSQLLiteralsParser.APPLNAME = 510;
TeradataSQLLiteralsParser.ARCHIVE = 511;
TeradataSQLLiteralsParser.ARRAY = 512;
TeradataSQLLiteralsParser.ARRAY_ADD = 513;
TeradataSQLLiteralsParser.ARRAY_AGG = 514;
TeradataSQLLiteralsParser.ARRAY_AVG = 515;
TeradataSQLLiteralsParser.ARRAY_COMPARE = 516;
TeradataSQLLiteralsParser.ARRAY_CONCAT = 517;
TeradataSQLLiteralsParser.ARRAY_COUNT_DISTINCT = 518;
TeradataSQLLiteralsParser.ARRAY_DIV = 519;
TeradataSQLLiteralsParser.ARRAY_EQ = 520;
TeradataSQLLiteralsParser.ARRAY_GE = 521;
TeradataSQLLiteralsParser.ARRAY_GET = 522;
TeradataSQLLiteralsParser.ARRAY_GT = 523;
TeradataSQLLiteralsParser.ARRAY_LE = 524;
TeradataSQLLiteralsParser.ARRAY_LT = 525;
TeradataSQLLiteralsParser.ARRAY_MAX = 526;
TeradataSQLLiteralsParser.ARRAY_MIN = 527;
TeradataSQLLiteralsParser.ARRAY_MOD = 528;
TeradataSQLLiteralsParser.ARRAY_MUL = 529;
TeradataSQLLiteralsParser.ARRAY_NE = 530;
TeradataSQLLiteralsParser.ARRAY_SUB = 531;
TeradataSQLLiteralsParser.ARRAY_SUM = 532;
TeradataSQLLiteralsParser.ARRAY_UPDATE = 533;
TeradataSQLLiteralsParser.ARRAY_UPDATE_STRIDE = 534;
TeradataSQLLiteralsParser.ASCII = 535;
TeradataSQLLiteralsParser.ASSIGNMENT = 536;
TeradataSQLLiteralsParser.ATTR = 537;
TeradataSQLLiteralsParser.ATTRIBUTE = 538;
TeradataSQLLiteralsParser.ATTRIBUTES = 539;
TeradataSQLLiteralsParser.ATTRIBUTION = 540;
TeradataSQLLiteralsParser.ATTRS = 541;
TeradataSQLLiteralsParser.AUTH = 542;
TeradataSQLLiteralsParser.AUTO = 543;
TeradataSQLLiteralsParser.AUTOTEMP = 544;
TeradataSQLLiteralsParser.AVRO = 545;
TeradataSQLLiteralsParser.BIT_LENGTH = 546;
TeradataSQLLiteralsParser.BITAND = 547;
TeradataSQLLiteralsParser.BITNOT = 548;
TeradataSQLLiteralsParser.BITOR = 549;
TeradataSQLLiteralsParser.BITXOR = 550;
TeradataSQLLiteralsParser.BLOCKCOMPRESSION = 551;
TeradataSQLLiteralsParser.BLOCKCOMPRESSIONALGORITHM = 552;
TeradataSQLLiteralsParser.BLOCKCOMPRESSIONLEVEL = 553;
TeradataSQLLiteralsParser.BOM = 554;
TeradataSQLLiteralsParser.BOTTOM = 555;
TeradataSQLLiteralsParser.BSON = 556;
TeradataSQLLiteralsParser.C = 557;
TeradataSQLLiteralsParser.CALENDAR = 558;
TeradataSQLLiteralsParser.CALLED = 559;
TeradataSQLLiteralsParser.CALLER = 560;
TeradataSQLLiteralsParser.CAMSET = 561;
TeradataSQLLiteralsParser.CAMSET_L = 562;
TeradataSQLLiteralsParser.CAPTURE = 563;
TeradataSQLLiteralsParser.CARDINALITY = 564;
TeradataSQLLiteralsParser.CEIL = 565;
TeradataSQLLiteralsParser.CEILING = 566;
TeradataSQLLiteralsParser.CHANGERATE = 567;
TeradataSQLLiteralsParser.CHARACTERISTICS = 568;
TeradataSQLLiteralsParser.CHARSET = 569;
TeradataSQLLiteralsParser.CHARSET_COLL = 570;
TeradataSQLLiteralsParser.CHECKSUM = 571;
TeradataSQLLiteralsParser.CHR = 572;
TeradataSQLLiteralsParser.CLASS_ORIGIN = 573;
TeradataSQLLiteralsParser.CLICKLAG = 574;
TeradataSQLLiteralsParser.CLIENT = 575;
TeradataSQLLiteralsParser.CNT = 576;
TeradataSQLLiteralsParser.COLOCATE = 577;
TeradataSQLLiteralsParser.COLUMNMETA = 578;
TeradataSQLLiteralsParser.COLUMNS = 579;
TeradataSQLLiteralsParser.COLUMNSPERINDEX = 580;
TeradataSQLLiteralsParser.COLUMNSPERJOININDEX = 581;
TeradataSQLLiteralsParser.COMMAND_FUNCTION = 582;
TeradataSQLLiteralsParser.COMMAND_FUNCTION_CODE = 583;
TeradataSQLLiteralsParser.COMPARISON = 584;
TeradataSQLLiteralsParser.COMPILE = 585;
TeradataSQLLiteralsParser.CONCAT = 586;
TeradataSQLLiteralsParser.CONCURRENT = 587;
TeradataSQLLiteralsParser.CONDITION = 588;
TeradataSQLLiteralsParser.CONDITION_IDENTIFIER = 589;
TeradataSQLLiteralsParser.CONDITION_NUMBER = 590;
TeradataSQLLiteralsParser.CONTAINED = 591;
TeradataSQLLiteralsParser.CONTAINEDTOKEN = 592;
TeradataSQLLiteralsParser.CONTENT = 593;
TeradataSQLLiteralsParser.CONTIGUOUS = 594;
TeradataSQLLiteralsParser.COST = 595;
TeradataSQLLiteralsParser.COSTS = 596;
TeradataSQLLiteralsParser.COUNTSET = 597;
TeradataSQLLiteralsParser.CPP = 598;
TeradataSQLLiteralsParser.CPUTIME = 599;
TeradataSQLLiteralsParser.CPUTIMENORM = 600;
TeradataSQLLiteralsParser.CREATEDATASET = 601;
TeradataSQLLiteralsParser.CREATOR = 602;
TeradataSQLLiteralsParser.CUME_DIST = 603;
TeradataSQLLiteralsParser.CURDATE = 604;
TeradataSQLLiteralsParser.CURTIME = 605;
TeradataSQLLiteralsParser.DATA = 606;
TeradataSQLLiteralsParser.DATASET = 607;
TeradataSQLLiteralsParser.DAY_OF_CALENDAR = 608;
TeradataSQLLiteralsParser.DAY_OF_MONTH = 609;
TeradataSQLLiteralsParser.DAY_OF_WEEK = 610;
TeradataSQLLiteralsParser.DAY_OF_YEAR = 611;
TeradataSQLLiteralsParser.DAYNUMBER_OF_CALENDAR = 612;
TeradataSQLLiteralsParser.DAYNUMBER_OF_MONTH = 613;
TeradataSQLLiteralsParser.DAYNUMBER_OF_WEEK = 614;
TeradataSQLLiteralsParser.DAYNUMBER_OF_YEAR = 615;
TeradataSQLLiteralsParser.DAYOCCURRENCE_OF_MONTH = 616;
TeradataSQLLiteralsParser.DBA = 617;
TeradataSQLLiteralsParser.DBC = 618;
TeradataSQLLiteralsParser.DEBUG = 619;
TeradataSQLLiteralsParser.DECAMSET = 620;
TeradataSQLLiteralsParser.DECAMSET_L = 621;
TeradataSQLLiteralsParser.DECODE = 622;
TeradataSQLLiteralsParser.DECOMPRESS = 623;
TeradataSQLLiteralsParser.DEFINER = 624;
TeradataSQLLiteralsParser.DELIMITER = 625;
TeradataSQLLiteralsParser.DELTA_T = 626;
TeradataSQLLiteralsParser.DEMOGRAPHICS = 627;
TeradataSQLLiteralsParser.DENIALS = 628;
TeradataSQLLiteralsParser.DENSE = 629;
TeradataSQLLiteralsParser.DENSE_RANK = 630;
TeradataSQLLiteralsParser.DESCRIBE = 631;
TeradataSQLLiteralsParser.DETAILED = 632;
TeradataSQLLiteralsParser.DIAGNOSTICS = 633;
TeradataSQLLiteralsParser.DIGITS = 634;
TeradataSQLLiteralsParser.DIMENSION = 635;
TeradataSQLLiteralsParser.DOCUMENT = 636;
TeradataSQLLiteralsParser.DOT = 637;
TeradataSQLLiteralsParser.DOWN = 638;
TeradataSQLLiteralsParser.DR = 639;
TeradataSQLLiteralsParser.DUPCOUNT = 640;
TeradataSQLLiteralsParser.DUPCOUNTCUM = 641;
TeradataSQLLiteralsParser.EBCDIC = 642;
TeradataSQLLiteralsParser.EDITDISTANCE = 643;
TeradataSQLLiteralsParser.ELAPSEDSEC = 644;
TeradataSQLLiteralsParser.ELAPSEDTIME = 645;
TeradataSQLLiteralsParser.ELEMENT = 646;
TeradataSQLLiteralsParser.ELZS_H = 647;
TeradataSQLLiteralsParser.EMITNULL = 648;
TeradataSQLLiteralsParser.EMPTY = 649;
TeradataSQLLiteralsParser.EMPTY_BLOB = 650;
TeradataSQLLiteralsParser.EMPTY_CLOB = 651;
TeradataSQLLiteralsParser.ENCODE = 652;
TeradataSQLLiteralsParser.ENCODING = 653;
TeradataSQLLiteralsParser.ENCRYPT = 654;
TeradataSQLLiteralsParser.ERRORS = 655;
TeradataSQLLiteralsParser.ERRORTBL = 656;
TeradataSQLLiteralsParser.EVENTCOLUMN = 657;
TeradataSQLLiteralsParser.EXCEPTION = 658;
TeradataSQLLiteralsParser.EXCL = 659;
TeradataSQLLiteralsParser.EXCLUDE = 660;
TeradataSQLLiteralsParser.EXCLUDING = 661;
TeradataSQLLiteralsParser.EXCLUSIVE = 662;
TeradataSQLLiteralsParser.EXPIRE = 663;
TeradataSQLLiteralsParser.EXPORT = 664;
TeradataSQLLiteralsParser.EXPORTWIDTH = 665;
TeradataSQLLiteralsParser.FALSE = 666;
TeradataSQLLiteralsParser.FEATUREINFO = 667;
TeradataSQLLiteralsParser.FILE = 668;
TeradataSQLLiteralsParser.FILL = 669;
TeradataSQLLiteralsParser.FILTER = 670;
TeradataSQLLiteralsParser.FINAL = 671;
TeradataSQLLiteralsParser.FIRST_NOTNULL = 672;
TeradataSQLLiteralsParser.FIRST_VALUE = 673;
TeradataSQLLiteralsParser.FLOOR = 674;
TeradataSQLLiteralsParser.FOLLOWING = 675;
TeradataSQLLiteralsParser.FOREIGNFUNCTION = 676;
TeradataSQLLiteralsParser.FORTOKEN = 677;
TeradataSQLLiteralsParser.FRIDAY = 678;
TeradataSQLLiteralsParser.FROM_BYTES = 679;
TeradataSQLLiteralsParser.FUNCTIONPARAMETER = 680;
TeradataSQLLiteralsParser.G = 681;
TeradataSQLLiteralsParser.GETBIT = 682;
TeradataSQLLiteralsParser.GETPSFVERSION = 683;
TeradataSQLLiteralsParser.GETQUERYBAND = 684;
TeradataSQLLiteralsParser.GETQUERYBANDVALUE = 685;
TeradataSQLLiteralsParser.GETTIMEZONEDISPLACEMENT = 686;
TeradataSQLLiteralsParser.GLOBAL = 687;
TeradataSQLLiteralsParser.GLOP = 688;
TeradataSQLLiteralsParser.GREATEST = 689;
TeradataSQLLiteralsParser.HIGH = 690;
TeradataSQLLiteralsParser.HOST = 691;
TeradataSQLLiteralsParser.IDENTIFYDATABASE = 692;
TeradataSQLLiteralsParser.IDENTIFYSESSION = 693;
TeradataSQLLiteralsParser.IDENTIFYTABLE = 694;
TeradataSQLLiteralsParser.IDENTIFYUSER = 695;
TeradataSQLLiteralsParser.IFP = 696;
TeradataSQLLiteralsParser.IGNORE = 697;
TeradataSQLLiteralsParser.IMMEDIATELY = 698;
TeradataSQLLiteralsParser.IMPORT = 699;
TeradataSQLLiteralsParser.INCLUDE = 700;
TeradataSQLLiteralsParser.INCLUDING = 701;
TeradataSQLLiteralsParser.INCREMENT = 702;
TeradataSQLLiteralsParser.INCREMENTAL = 703;
TeradataSQLLiteralsParser.INDENT = 704;
TeradataSQLLiteralsParser.INDEXESPERTABLE = 705;
TeradataSQLLiteralsParser.INDEXMAINTMODE = 706;
TeradataSQLLiteralsParser.INIT = 707;
TeradataSQLLiteralsParser.INITCAP = 708;
TeradataSQLLiteralsParser.INLINE = 709;
TeradataSQLLiteralsParser.INSTANTIABLE = 710;
TeradataSQLLiteralsParser.INSTR = 711;
TeradataSQLLiteralsParser.INTERNAL = 712;
TeradataSQLLiteralsParser.INVOKER = 713;
TeradataSQLLiteralsParser.IOCOUNT = 714;
TeradataSQLLiteralsParser.IPARTITION = 715;
TeradataSQLLiteralsParser.ISOLATED = 716;
TeradataSQLLiteralsParser.ISOLATION = 717;
TeradataSQLLiteralsParser.JAVA = 718;
TeradataSQLLiteralsParser.JIS_COLL = 719;
TeradataSQLLiteralsParser.JSON = 720;
TeradataSQLLiteralsParser.JSON_AGG = 721;
TeradataSQLLiteralsParser.JSON_COMPOSE = 722;
TeradataSQLLiteralsParser.K = 723;
TeradataSQLLiteralsParser.KANJI1 = 724;
TeradataSQLLiteralsParser.KANJISJIS = 725;
TeradataSQLLiteralsParser.KBYTE = 726;
TeradataSQLLiteralsParser.KBYTES = 727;
TeradataSQLLiteralsParser.KEEP = 728;
TeradataSQLLiteralsParser.KILOBYTES = 729;
TeradataSQLLiteralsParser.LAG = 730;
TeradataSQLLiteralsParser.LAST = 731;
TeradataSQLLiteralsParser.LAST_DAY = 732;
TeradataSQLLiteralsParser.LAST_NOTNULL = 733;
TeradataSQLLiteralsParser.LAST_VALUE = 734;
TeradataSQLLiteralsParser.LATIN = 735;
TeradataSQLLiteralsParser.LDIFF = 736;
TeradataSQLLiteralsParser.LEAD = 737;
TeradataSQLLiteralsParser.LEAST = 738;
TeradataSQLLiteralsParser.LENGTH = 739;
TeradataSQLLiteralsParser.LEVEL = 740;
TeradataSQLLiteralsParser.LIST = 741;
TeradataSQLLiteralsParser.LOAD = 742;
TeradataSQLLiteralsParser.LOCATE = 743;
TeradataSQLLiteralsParser.LOCKEDUSEREXPIRE = 744;
TeradataSQLLiteralsParser.LOW = 745;
TeradataSQLLiteralsParser.LPAD = 746;
TeradataSQLLiteralsParser.LTRIM = 747;
TeradataSQLLiteralsParser.LZCOMP = 748;
TeradataSQLLiteralsParser.LZCOMP_L = 749;
TeradataSQLLiteralsParser.LZDECOMP = 750;
TeradataSQLLiteralsParser.LZDECOMP_L = 751;
TeradataSQLLiteralsParser.M = 752;
TeradataSQLLiteralsParser.MAD = 753;
TeradataSQLLiteralsParser.MANUAL = 754;
TeradataSQLLiteralsParser.MAPPING = 755;
TeradataSQLLiteralsParser.MATCHED = 756;
TeradataSQLLiteralsParser.MAX_CHOOSE = 757;
TeradataSQLLiteralsParser.MAXCHAR = 758;
TeradataSQLLiteralsParser.MAXINTERVALS = 759;
TeradataSQLLiteralsParser.MAXLOGONATTEMPTS = 760;
TeradataSQLLiteralsParser.MAXVALUE = 761;
TeradataSQLLiteralsParser.MAXVALUELENGTH = 762;
TeradataSQLLiteralsParser.MEDIAN = 763;
TeradataSQLLiteralsParser.MEDIUM = 764;
TeradataSQLLiteralsParser.MEETS = 765;
TeradataSQLLiteralsParser.MEMBER = 766;
TeradataSQLLiteralsParser.MERGEBLOCKRATIO = 767;
TeradataSQLLiteralsParser.MESSAGE_LENGTH = 768;
TeradataSQLLiteralsParser.MESSAGE_TEXT = 769;
TeradataSQLLiteralsParser.MIN_CHOOSE = 770;
TeradataSQLLiteralsParser.MINCHAR = 771;
TeradataSQLLiteralsParser.MINVALUE = 772;
TeradataSQLLiteralsParser.MODIFIED = 773;
TeradataSQLLiteralsParser.MONDAY = 774;
TeradataSQLLiteralsParser.MONITORQUERYBAND = 775;
TeradataSQLLiteralsParser.MONITORSESSIONRATE = 776;
TeradataSQLLiteralsParser.MONITORVERSION = 777;
TeradataSQLLiteralsParser.MONTH_BEGIN = 778;
TeradataSQLLiteralsParser.MONTH_END = 779;
TeradataSQLLiteralsParser.MONTH_OF_CALENDAR = 780;
TeradataSQLLiteralsParser.MONTH_OF_QUARTER = 781;
TeradataSQLLiteralsParser.MONTH_OF_YEAR = 782;
TeradataSQLLiteralsParser.MONTHNUMBER_OF_CALENDAR = 783;
TeradataSQLLiteralsParser.MONTHNUMBER_OF_QUARTER = 784;
TeradataSQLLiteralsParser.MONTHNUMBER_OF_YEAR = 785;
TeradataSQLLiteralsParser.MONTHS_BETWEEN = 786;
TeradataSQLLiteralsParser.MORE_ = 787;
TeradataSQLLiteralsParser.MULTINATIONAL = 788;
TeradataSQLLiteralsParser.NAME = 789;
TeradataSQLLiteralsParser.NAMESPACE = 790;
TeradataSQLLiteralsParser.NEVER = 791;
TeradataSQLLiteralsParser.NEXT_DAY = 792;
TeradataSQLLiteralsParser.NGRAM = 793;
TeradataSQLLiteralsParser.NIL = 794;
TeradataSQLLiteralsParser.NODDLTEXT = 795;
TeradataSQLLiteralsParser.NODE = 796;
TeradataSQLLiteralsParser.NONOPTCOST = 797;
TeradataSQLLiteralsParser.NONOPTINIT = 798;
TeradataSQLLiteralsParser.NONSEQUENCED = 799;
TeradataSQLLiteralsParser.NORIGHT = 800;
TeradataSQLLiteralsParser.NOSEXTRACTVARFROMPATH = 801;
TeradataSQLLiteralsParser.NOTATION = 802;
TeradataSQLLiteralsParser.NOW = 803;
TeradataSQLLiteralsParser.NPATH = 804;
TeradataSQLLiteralsParser.NTH = 805;
TeradataSQLLiteralsParser.NULLS = 806;
TeradataSQLLiteralsParser.NUMFPFNS = 807;
TeradataSQLLiteralsParser.NUMTODSINTERVAL = 808;
TeradataSQLLiteralsParser.NUMTOYMINTERVAL = 809;
TeradataSQLLiteralsParser.NVL = 810;
TeradataSQLLiteralsParser.NVL2 = 811;
TeradataSQLLiteralsParser.NVP = 812;
TeradataSQLLiteralsParser.OA = 813;
TeradataSQLLiteralsParser.OADD_MONTHS = 814;
TeradataSQLLiteralsParser.OCOUNT = 815;
TeradataSQLLiteralsParser.ODELETE = 816;
TeradataSQLLiteralsParser.OEXISTS = 817;
TeradataSQLLiteralsParser.OEXTEND = 818;
TeradataSQLLiteralsParser.OFIRST = 819;
TeradataSQLLiteralsParser.OLAST = 820;
TeradataSQLLiteralsParser.OLD_NEW_TABLE = 821;
TeradataSQLLiteralsParser.OLIMIT = 822;
TeradataSQLLiteralsParser.ONEXT = 823;
TeradataSQLLiteralsParser.ONLINE = 824;
TeradataSQLLiteralsParser.OPRIOR = 825;
TeradataSQLLiteralsParser.OPTIONS = 826;
TeradataSQLLiteralsParser.ORDERBYVALUES = 827;
TeradataSQLLiteralsParser.ORDERED_ANALYTIC = 828;
TeradataSQLLiteralsParser.ORDINALITY = 829;
TeradataSQLLiteralsParser.OREPLACE = 830;
TeradataSQLLiteralsParser.OTRANSLATE = 831;
TeradataSQLLiteralsParser.OTRIM = 832;
TeradataSQLLiteralsParser.OVERLAYS = 833;
TeradataSQLLiteralsParser.OWNER = 834;
TeradataSQLLiteralsParser.P_INTERSECT = 835;
TeradataSQLLiteralsParser.P_NORMALIZE = 836;
TeradataSQLLiteralsParser.PARAMID = 837;
TeradataSQLLiteralsParser.PARAMINFO = 838;
TeradataSQLLiteralsParser.PARENT = 839;
TeradataSQLLiteralsParser.PARTITION = 840;
TeradataSQLLiteralsParser.PARTITION_L = 841;
TeradataSQLLiteralsParser.PARTITIONED = 842;
TeradataSQLLiteralsParser.PARTITIONNAMES = 843;
TeradataSQLLiteralsParser.PASS = 844;
TeradataSQLLiteralsParser.PASSING = 845;
TeradataSQLLiteralsParser.PATH_GENERATOR = 846;
TeradataSQLLiteralsParser.PATH_START = 847;
TeradataSQLLiteralsParser.PATH_SUMMARIZER = 848;
TeradataSQLLiteralsParser.PATTERN = 849;
TeradataSQLLiteralsParser.PERCENTILE = 850;
TeradataSQLLiteralsParser.PERCENTILE_CONT = 851;
TeradataSQLLiteralsParser.PERCENTILE_DISC = 852;
TeradataSQLLiteralsParser.PERIOD = 853;
TeradataSQLLiteralsParser.PIVOT = 854;
TeradataSQLLiteralsParser.PORTION = 855;
TeradataSQLLiteralsParser.POWER = 856;
TeradataSQLLiteralsParser.PRECEDES = 857;
TeradataSQLLiteralsParser.PRECEDING = 858;
TeradataSQLLiteralsParser.PREFIX = 859;
TeradataSQLLiteralsParser.PRINT = 860;
TeradataSQLLiteralsParser.PRIOR = 861;
TeradataSQLLiteralsParser.PROTECTED = 862;
TeradataSQLLiteralsParser.QUARTER_BEGIN = 863;
TeradataSQLLiteralsParser.QUARTER_END = 864;
TeradataSQLLiteralsParser.QUARTER_OF_CALENDAR = 865;
TeradataSQLLiteralsParser.QUARTER_OF_YEAR = 866;
TeradataSQLLiteralsParser.QUARTERNUMBER_OF_CALENDAR = 867;
TeradataSQLLiteralsParser.QUARTERNUMBER_OF_YEAR = 868;
TeradataSQLLiteralsParser.QUERY = 869;
TeradataSQLLiteralsParser.QUERY_BAND = 870;
TeradataSQLLiteralsParser.QUOTECHAR = 871;
TeradataSQLLiteralsParser.RANDOMIZED = 872;
TeradataSQLLiteralsParser.RANGE = 873;
TeradataSQLLiteralsParser.RANGE_L = 874;
TeradataSQLLiteralsParser.RAPIDFIRE = 875;
TeradataSQLLiteralsParser.RDIFF = 876;
TeradataSQLLiteralsParser.READ = 877;
TeradataSQLLiteralsParser.RECALC = 878;
TeradataSQLLiteralsParser.REGEXP_INSTR = 879;
TeradataSQLLiteralsParser.REGEXP_REPLACE = 880;
TeradataSQLLiteralsParser.REGEXP_SIMILAR = 881;
TeradataSQLLiteralsParser.REGEXP_SUBSTR = 882;
TeradataSQLLiteralsParser.REPLACEMENT = 883;
TeradataSQLLiteralsParser.RESET = 884;
TeradataSQLLiteralsParser.RESPECT = 885;
TeradataSQLLiteralsParser.RESTRICTWORDS = 886;
TeradataSQLLiteralsParser.RETAIN = 887;
TeradataSQLLiteralsParser.RETURNED_SQLSTATE = 888;
TeradataSQLLiteralsParser.RETURNING = 889;
TeradataSQLLiteralsParser.REUSE = 890;
TeradataSQLLiteralsParser.ROOT = 891;
TeradataSQLLiteralsParser.ROTATELEFT = 892;
TeradataSQLLiteralsParser.ROTATERIGHT = 893;
TeradataSQLLiteralsParser.ROUND = 894;
TeradataSQLLiteralsParser.ROW_COUNT = 895;
TeradataSQLLiteralsParser.ROWIDGEN = 896;
TeradataSQLLiteralsParser.ROWIDGEN2 = 897;
TeradataSQLLiteralsParser.RPAD = 898;
TeradataSQLLiteralsParser.RTRIM = 899;
TeradataSQLLiteralsParser.RU = 900;
TeradataSQLLiteralsParser.RULES = 901;
TeradataSQLLiteralsParser.RULESET = 902;
TeradataSQLLiteralsParser.SAMPLES = 903;
TeradataSQLLiteralsParser.SATURDAY = 904;
TeradataSQLLiteralsParser.SCHEMA = 905;
TeradataSQLLiteralsParser.SCRIPT = 906;
TeradataSQLLiteralsParser.SCRIPT_COMMAND = 907;
TeradataSQLLiteralsParser.SEARCHSPACE = 908;
TeradataSQLLiteralsParser.SEARCHUIFDBPATH = 909;
TeradataSQLLiteralsParser.SECURITY = 910;
TeradataSQLLiteralsParser.SEED = 911;
TeradataSQLLiteralsParser.SELF = 912;
TeradataSQLLiteralsParser.SEQ = 913;
TeradataSQLLiteralsParser.SEQUENCE = 914;
TeradataSQLLiteralsParser.SEQUENCED = 915;
TeradataSQLLiteralsParser.SERIALIZABLE = 916;
TeradataSQLLiteralsParser.SERVER = 917;
TeradataSQLLiteralsParser.SESSIONIZE = 918;
TeradataSQLLiteralsParser.SETBIT = 919;
TeradataSQLLiteralsParser.SETRESOURCERATE = 920;
TeradataSQLLiteralsParser.SETSESSIONACCOUNT = 921;
TeradataSQLLiteralsParser.SETSESSIONRATE = 922;
TeradataSQLLiteralsParser.SHARE = 923;
TeradataSQLLiteralsParser.SHIFTLEFT = 924;
TeradataSQLLiteralsParser.SHIFTRIGHT = 925;
TeradataSQLLiteralsParser.SIGN = 926;
TeradataSQLLiteralsParser.SIZE = 927;
TeradataSQLLiteralsParser.SNAPPY_COMPRESS = 928;
TeradataSQLLiteralsParser.SNAPPY_DECOMPRESS = 929;
TeradataSQLLiteralsParser.SOURCE = 930;
TeradataSQLLiteralsParser.SPARSE = 931;
TeradataSQLLiteralsParser.SPECCHAR = 932;
TeradataSQLLiteralsParser.SPL = 933;
TeradataSQLLiteralsParser.SQLSTATE = 934;
TeradataSQLLiteralsParser.SR = 935;
TeradataSQLLiteralsParser.ST_GEOMETRY = 936;
TeradataSQLLiteralsParser.STAT = 937;
TeradataSQLLiteralsParser.STATIC = 938;
TeradataSQLLiteralsParser.STATS = 939;
TeradataSQLLiteralsParser.STATSUSAGE = 940;
TeradataSQLLiteralsParser.STORAGE = 941;
TeradataSQLLiteralsParser.STRIP = 942;
TeradataSQLLiteralsParser.STRTOK = 943;
TeradataSQLLiteralsParser.STYLE = 944;
TeradataSQLLiteralsParser.SUBBITSTR = 945;
TeradataSQLLiteralsParser.SUBCLASS_ORIGIN = 946;
TeradataSQLLiteralsParser.SUCCEEDS = 947;
TeradataSQLLiteralsParser.SUMMARYONLY = 948;
TeradataSQLLiteralsParser.SUNDAY = 949;
TeradataSQLLiteralsParser.SYMBOLS = 950;
TeradataSQLLiteralsParser.SYSTEM = 951;
TeradataSQLLiteralsParser.SYSTEM_TIME = 952;
TeradataSQLLiteralsParser.SYSTEMTEST = 953;
TeradataSQLLiteralsParser.TARGET = 954;
TeradataSQLLiteralsParser.TD_ARRAY2P = 955;
TeradataSQLLiteralsParser.TD_DATASET = 956;
TeradataSQLLiteralsParser.TD_DAY_OF_CALENDAR = 957;
TeradataSQLLiteralsParser.TD_DAY_OF_MONTH = 958;
TeradataSQLLiteralsParser.TD_DAY_OF_WEEK = 959;
TeradataSQLLiteralsParser.TD_DAY_OF_YEAR = 960;
TeradataSQLLiteralsParser.TD_GENERAL = 961;
TeradataSQLLiteralsParser.TD_GETTIMEBUCKET = 962;
TeradataSQLLiteralsParser.TD_INTERNAL = 963;
TeradataSQLLiteralsParser.TD_LZ_COMPRESS = 964;
TeradataSQLLiteralsParser.TD_LZ_DECOMPRESS = 965;
TeradataSQLLiteralsParser.TD_MONTH_OF_CALENDAR = 966;
TeradataSQLLiteralsParser.TD_MONTH_OF_QUARTER = 967;
TeradataSQLLiteralsParser.TD_MONTH_OF_YEAR = 968;
TeradataSQLLiteralsParser.TD_QUARTER_OF_CALENDAR = 969;
TeradataSQLLiteralsParser.TD_QUARTER_OF_YEAR = 970;
TeradataSQLLiteralsParser.TD_TIME_BUCKET_NUMBER = 971;
TeradataSQLLiteralsParser.TD_WEEK_OF_CALENDAR = 972;
TeradataSQLLiteralsParser.TD_WEEK_OF_MONTH = 973;
TeradataSQLLiteralsParser.TD_WEEK_OF_YEAR = 974;
TeradataSQLLiteralsParser.TD_WEEKDAY_OF_MONTH = 975;
TeradataSQLLiteralsParser.TD_YEAR_OF_CALENDAR = 976;
TeradataSQLLiteralsParser.TDWMEVENT = 977;
TeradataSQLLiteralsParser.TDWMEXCEPTION = 978;
TeradataSQLLiteralsParser.TDWMHISTORY = 979;
TeradataSQLLiteralsParser.TEMPORAL_DATE = 980;
TeradataSQLLiteralsParser.TEMPORAL_TIMESTAMP = 981;
TeradataSQLLiteralsParser.TEXT = 982;
TeradataSQLLiteralsParser.THRESHOLDPERCENT = 983;
TeradataSQLLiteralsParser.THROUGH = 984;
TeradataSQLLiteralsParser.THURSDAY = 985;
TeradataSQLLiteralsParser.TIES = 986;
TeradataSQLLiteralsParser.TIMECODE = 987;
TeradataSQLLiteralsParser.TIMECOLUMN = 988;
TeradataSQLLiteralsParser.TIMEOUT = 989;
TeradataSQLLiteralsParser.TIMESTAMPCOLUMN = 990;
TeradataSQLLiteralsParser.TO_BYTE = 991;
TeradataSQLLiteralsParser.TO_BYTES = 992;
TeradataSQLLiteralsParser.TO_CHAR = 993;
TeradataSQLLiteralsParser.TO_DATE = 994;
TeradataSQLLiteralsParser.TO_DSINTERVAL = 995;
TeradataSQLLiteralsParser.TO_NUMBER = 996;
TeradataSQLLiteralsParser.TO_TIMESTAMP = 997;
TeradataSQLLiteralsParser.TO_TIMESTAMP_TZ = 998;
TeradataSQLLiteralsParser.TO_YMINTERVAL = 999;
TeradataSQLLiteralsParser.TOTOKEN = 1000;
TeradataSQLLiteralsParser.TPA = 1001;
TeradataSQLLiteralsParser.TRANSACTION_ACTIVE = 1002;
TeradataSQLLiteralsParser.TRANSUNICODETOUTF8 = 1003;
TeradataSQLLiteralsParser.TRANSUTF8TOUNICODE = 1004;
TeradataSQLLiteralsParser.TRUE = 1005;
TeradataSQLLiteralsParser.TRUNC = 1006;
TeradataSQLLiteralsParser.TRUST_ONLY = 1007;
TeradataSQLLiteralsParser.TTGRANULARITY = 1008;
TeradataSQLLiteralsParser.TUESDAY = 1009;
TeradataSQLLiteralsParser.UBJSON = 1010;
TeradataSQLLiteralsParser.UCASE = 1011;
TeradataSQLLiteralsParser.UDFSEARCHPATH = 1012;
TeradataSQLLiteralsParser.UNBOUNDED = 1013;
TeradataSQLLiteralsParser.UNCOMMITTED = 1014;
TeradataSQLLiteralsParser.UNICODE = 1015;
TeradataSQLLiteralsParser.UNKNOWN = 1016;
TeradataSQLLiteralsParser.UNPIVOT = 1017;
TeradataSQLLiteralsParser.USE = 1018;
TeradataSQLLiteralsParser.USECOUNT = 1019;
TeradataSQLLiteralsParser.UTILITYINFO = 1020;
TeradataSQLLiteralsParser.VARRAY = 1021;
TeradataSQLLiteralsParser.VERBOSE = 1022;
TeradataSQLLiteralsParser.VERSION = 1023;
TeradataSQLLiteralsParser.VERSIONING = 1024;
TeradataSQLLiteralsParser.WARNING = 1025;
TeradataSQLLiteralsParser.WEDNESDAY = 1026;
TeradataSQLLiteralsParser.WEEK_BEGIN = 1027;
TeradataSQLLiteralsParser.WEEK_END = 1028;
TeradataSQLLiteralsParser.WEEK_OF_CALENDAR = 1029;
TeradataSQLLiteralsParser.WEEK_OF_MONTH = 1030;
TeradataSQLLiteralsParser.WEEK_OF_YEAR = 1031;
TeradataSQLLiteralsParser.WEEKDAY_OF_MONTH = 1032;
TeradataSQLLiteralsParser.WEEKNUMBER_OF_CALENDAR = 1033;
TeradataSQLLiteralsParser.WEEKNUMBER_OF_MONTH = 1034;
TeradataSQLLiteralsParser.WEEKNUMBER_OF_QUARTER = 1035;
TeradataSQLLiteralsParser.WEEKNUMBER_OF_YEAR = 1036;
TeradataSQLLiteralsParser.WHITESPACE = 1037;
TeradataSQLLiteralsParser.WINDOWSIZE = 1038;
TeradataSQLLiteralsParser.WITHIN = 1039;
TeradataSQLLiteralsParser.WORKLOAD = 1040;
TeradataSQLLiteralsParser.WRITE = 1041;
TeradataSQLLiteralsParser.XML = 1042;
TeradataSQLLiteralsParser.XMLAGG = 1043;
TeradataSQLLiteralsParser.XMLATTRIBUTES = 1044;
TeradataSQLLiteralsParser.XMLCOMMENT = 1045;
TeradataSQLLiteralsParser.XMLCONCAT = 1046;
TeradataSQLLiteralsParser.XMLDECLARATION = 1047;
TeradataSQLLiteralsParser.XMLDOCUMENT = 1048;
TeradataSQLLiteralsParser.XMLELEMENT = 1049;
TeradataSQLLiteralsParser.XMLFOREST = 1050;
TeradataSQLLiteralsParser.XMLNAMESPACES = 1051;
TeradataSQLLiteralsParser.XMLPARSE = 1052;
TeradataSQLLiteralsParser.XMLPI = 1053;
TeradataSQLLiteralsParser.XMLQUERY = 1054;
TeradataSQLLiteralsParser.XMLSCHEMA = 1055;
TeradataSQLLiteralsParser.XMLSERIALIZE = 1056;
TeradataSQLLiteralsParser.XMLTABLE = 1057;
TeradataSQLLiteralsParser.XMLTEXT = 1058;
TeradataSQLLiteralsParser.XMLTYPE = 1059;
TeradataSQLLiteralsParser.XMLVALIDATE = 1060;
TeradataSQLLiteralsParser.YEAR_BEGIN = 1061;
TeradataSQLLiteralsParser.YEAR_END = 1062;
TeradataSQLLiteralsParser.YEAR_OF_CALENDAR = 1063;
TeradataSQLLiteralsParser.YEARNUMBER_OF_CALENDAR = 1064;
TeradataSQLLiteralsParser.ZLIB = 1065;
TeradataSQLLiteralsParser.BUCKET = 1066;
TeradataSQLLiteralsParser.COMMITTED = 1067;
TeradataSQLLiteralsParser.CREATEXML = 1068;
TeradataSQLLiteralsParser.CS_LATIN = 1069;
TeradataSQLLiteralsParser.CS_UNICODE = 1070;
TeradataSQLLiteralsParser.CS_KANJISJIS = 1071;
TeradataSQLLiteralsParser.CS_GRAPHIC = 1072;
TeradataSQLLiteralsParser.CSV = 1073;
TeradataSQLLiteralsParser.CSVLD = 1074;
TeradataSQLLiteralsParser.DATASIZE = 1075;
TeradataSQLLiteralsParser.DAYOFMONTH = 1076;
TeradataSQLLiteralsParser.DAYS = 1077;
TeradataSQLLiteralsParser.DEFINITION = 1078;
TeradataSQLLiteralsParser.DELETED = 1079;
TeradataSQLLiteralsParser.FAST = 1080;
TeradataSQLLiteralsParser.LISTAGG = 1081;
TeradataSQLLiteralsParser.PATH = 1082;
TeradataSQLLiteralsParser.REGEXP_SPLIT_TO_TABLE = 1083;
TeradataSQLLiteralsParser.REVERSE = 1084;
TeradataSQLLiteralsParser.SAS = 1085;
TeradataSQLLiteralsParser.SQLTABLE = 1086;
TeradataSQLLiteralsParser.STRTOK_SPLIT_TO_TABLE = 1087;
TeradataSQLLiteralsParser.SYSLIB = 1088;
TeradataSQLLiteralsParser.SYSUDTLIB = 1089;
TeradataSQLLiteralsParser.TD_SERVER_DB = 1090;
TeradataSQLLiteralsParser.TD_SYSFNLIB = 1091;
TeradataSQLLiteralsParser.TD_SYSXML = 1092;
TeradataSQLLiteralsParser.TIMEDATEWZCONTROL = 1093;
TeradataSQLLiteralsParser.TRUST = 1094;
TeradataSQLLiteralsParser.TRYCAST = 1095;
TeradataSQLLiteralsParser.UDT = 1096;
TeradataSQLLiteralsParser.USAGE = 1097;
TeradataSQLLiteralsParser.VARIANT = 1098;
TeradataSQLLiteralsParser.WEEK = 1099;
TeradataSQLLiteralsParser.WIDTH = 1100;
TeradataSQLLiteralsParser.XMLPUBLISH = 1101;
TeradataSQLLiteralsParser.XMLPUBLISH_STREAM = 1102;
TeradataSQLLiteralsParser.XMLSPLIT = 1103;
TeradataSQLLiteralsParser.LATIN_TO_UNICODE = 1104;
TeradataSQLLiteralsParser.UNICODE_TO_LATIN = 1105;
TeradataSQLLiteralsParser.LOCALE_TO_UNICODE = 1106;
TeradataSQLLiteralsParser.UNICODE_TO_LOCALE = 1107;
TeradataSQLLiteralsParser.ASBSON = 1108;
TeradataSQLLiteralsParser.ASBSONTEXT = 1109;
TeradataSQLLiteralsParser.COMBINE = 1110;
TeradataSQLLiteralsParser.EXISTVALUE = 1111;
TeradataSQLLiteralsParser.JSONEXTRACT = 1112;
TeradataSQLLiteralsParser.JSONEXTRACTVALUE = 1113;
TeradataSQLLiteralsParser.JSONEXTRACTLARGEVALUE = 1114;
TeradataSQLLiteralsParser.KEYCOUNT = 1115;
TeradataSQLLiteralsParser.METADATA = 1116;
TeradataSQLLiteralsParser.STORAGE_SIZE = 1117;
TeradataSQLLiteralsParser.CREATESCHEMABASEDXML = 1118;
TeradataSQLLiteralsParser.CREATENONSCHEMABASEDXML = 1119;
TeradataSQLLiteralsParser.EXISTSNODE = 1120;
TeradataSQLLiteralsParser.ISCONTENT = 1121;
TeradataSQLLiteralsParser.ISDOCUMENT = 1122;
TeradataSQLLiteralsParser.ISSCHEMAVALID = 1123;
TeradataSQLLiteralsParser.ISSCHEMAVALIDATED = 1124;
TeradataSQLLiteralsParser.XMLEXTRACT = 1125;
TeradataSQLLiteralsParser.XMLTRANSFORM = 1126;
TeradataSQLLiteralsParser.PROC_ID = 1127;
TeradataSQLLiteralsParser.LOCATION = 1128;
TeradataSQLLiteralsParser.PAYLOAD = 1129;
TeradataSQLLiteralsParser.TRUSTED = 1130;
TeradataSQLLiteralsParser.PATHPATTERN = 1131;
TeradataSQLLiteralsParser.MANIFEST = 1132;
TeradataSQLLiteralsParser.ROWFORMAT = 1133;
TeradataSQLLiteralsParser.STOREDAS = 1134;
TeradataSQLLiteralsParser.HEADER = 1135;
TeradataSQLLiteralsParser.STRIP_EXTERIOR_SPACES = 1136;
TeradataSQLLiteralsParser.STRIP_ENCLOSING_CHAR = 1137;
TeradataSQLLiteralsParser.RLS = 1138;
TeradataSQLLiteralsParser.SINGLE = 1139;
TeradataSQLLiteralsParser.MULTIPLE = 1140;
TeradataSQLLiteralsParser.JSON_COMPRESS = 1141;
TeradataSQLLiteralsParser.JSON_DECOMPRESS = 1142;
TeradataSQLLiteralsParser.TS_COMPRESS = 1143;
TeradataSQLLiteralsParser.TS_DECOMPRESS = 1144;
TeradataSQLLiteralsParser.CONTIGUOUSMAPAMPS = 1145;
TeradataSQLLiteralsParser.SPARSEMAPAMPS = 1146;
TeradataSQLLiteralsParser.SPARSETABLEAMPS = 1147;
TeradataSQLLiteralsParser.UNNEST = 1148;
TeradataSQLLiteralsParser.CALCMATRIX = 1149;
TeradataSQLLiteralsParser.PHRASE = 1150;
TeradataSQLLiteralsParser.CALCTYPE = 1151;
TeradataSQLLiteralsParser.OUTPUT = 1152;
TeradataSQLLiteralsParser.NULL_HANDLING = 1153;
TeradataSQLLiteralsParser.READ_NOS = 1154;
TeradataSQLLiteralsParser.BUFFERSIZE = 1155;
TeradataSQLLiteralsParser.RETURNTYPE = 1156;
TeradataSQLLiteralsParser.SAMPLE_PERC = 1157;
TeradataSQLLiteralsParser.FULLSCAN = 1158;
TeradataSQLLiteralsParser.TD_UNPIVOT = 1159;
TeradataSQLLiteralsParser.VALUE_COLUMNS = 1160;
TeradataSQLLiteralsParser.UNPIVOT_COLUMN = 1161;
TeradataSQLLiteralsParser.COLUMN_LIST = 1162;
TeradataSQLLiteralsParser.COLUMN_ALIAS_LIST = 1163;
TeradataSQLLiteralsParser.INCLUDE_NULLS = 1164;
TeradataSQLLiteralsParser.WRITE_NOS = 1165;
TeradataSQLLiteralsParser.NAMING = 1166;
TeradataSQLLiteralsParser.MANIFESTFILE = 1167;
TeradataSQLLiteralsParser.MANIFESTONLY = 1168;
TeradataSQLLiteralsParser.OVERWRITE = 1169;
TeradataSQLLiteralsParser.INCLUDE_ORDERING = 1170;
TeradataSQLLiteralsParser.INCLUDE_HASHBY = 1171;
TeradataSQLLiteralsParser.MAXOBJECTSIZE = 1172;
TeradataSQLLiteralsParser.COMPRESSION = 1173;
TeradataSQLLiteralsParser.ARRAY_TO_JSON = 1174;
TeradataSQLLiteralsParser.BSON_CHECK = 1175;
TeradataSQLLiteralsParser.GEOJSONFROMGEOM = 1176;
TeradataSQLLiteralsParser.GEOMFROMGEOJSON = 1177;
TeradataSQLLiteralsParser.JSON_CHECK = 1178;
TeradataSQLLiteralsParser.JSONGETVALUE = 1179;
TeradataSQLLiteralsParser.JSONMETADATA = 1180;
TeradataSQLLiteralsParser.NVP2JSON = 1181;
TeradataSQLLiteralsParser.TD_JSONSHRED = 1182;
TeradataSQLLiteralsParser.JSON_KEYS = 1183;
TeradataSQLLiteralsParser.JSON_TABLE = 1184;
TeradataSQLLiteralsParser.DEPTH = 1185;
TeradataSQLLiteralsParser.QUOTES = 1186;
TeradataSQLLiteralsParser.ROWEXPR = 1187;
TeradataSQLLiteralsParser.COLEXPR = 1188;
TeradataSQLLiteralsParser.RETURNTYPES = 1189;
TeradataSQLLiteralsParser.NOCASE = 1190;
TeradataSQLLiteralsParser.TRUNCATE = 1191;
TeradataSQLLiteralsParser.LINK = 1192;
TeradataSQLLiteralsParser.OBJECT_NAME = 1193;
TeradataSQLLiteralsParser.UNSIGNED_INTEGER = 1194;
TeradataSQLLiteralsParser.HEX_BYTE_LITERAL = 1195;
TeradataSQLLiteralsParser.HEX_INTEGER_LITERAL = 1196;
TeradataSQLLiteralsParser.FLOAT_LITERAL = 1197;
TeradataSQLLiteralsParser.DATE_STRING = 1198;
TeradataSQLLiteralsParser.TIME_STRING = 1199;
TeradataSQLLiteralsParser.TIMESTAMP_STRING = 1200;
TeradataSQLLiteralsParser.PERIOD_STRING = 1201;
TeradataSQLLiteralsParser.UNICODE_STRING_LEADING = 1202;
TeradataSQLLiteralsParser.CHAR_STRING = 1203;
TeradataSQLLiteralsParser.HEX_STRING = 1204;
TeradataSQLLiteralsParser.PASSWORD_STRING = 1205;
TeradataSQLLiteralsParser.SEMICOLON = 1206;
TeradataSQLLiteralsParser.COLON = 1207;
TeradataSQLLiteralsParser.COMMA = 1208;
TeradataSQLLiteralsParser.DOT_ = 1209;
TeradataSQLLiteralsParser.AT_SIGN = 1210;
TeradataSQLLiteralsParser.CARET = 1211;
TeradataSQLLiteralsParser.QUESTION_MARK = 1212;
TeradataSQLLiteralsParser.OPEN_PAR = 1213;
TeradataSQLLiteralsParser.CLOSE_PAR = 1214;
TeradataSQLLiteralsParser.OPEN_SQ_BRACKET = 1215;
TeradataSQLLiteralsParser.CLOSE_SQ_BRACKET = 1216;
TeradataSQLLiteralsParser.CONCATENATE = 1217;
TeradataSQLLiteralsParser.BROKEN_CONCATENATE = 1218;
TeradataSQLLiteralsParser.MUL_SIGN = 1219;
TeradataSQLLiteralsParser.DIV_SIGN = 1220;
TeradataSQLLiteralsParser.PLUS_SIGN = 1221;
TeradataSQLLiteralsParser.MINUS_SIGN = 1222;
TeradataSQLLiteralsParser.EXPONENTIATION = 1223;
TeradataSQLLiteralsParser.EQUALS_SIGN = 1224;
TeradataSQLLiteralsParser.NOT_EQUALS_SIGN = 1225;
TeradataSQLLiteralsParser.NOT_EQUALS_SIGN_TD = 1226;
TeradataSQLLiteralsParser.LT_SIGN = 1227;
TeradataSQLLiteralsParser.LE_SIGN = 1228;
TeradataSQLLiteralsParser.GT_SIGN = 1229;
TeradataSQLLiteralsParser.GE_SIGN = 1230;
TeradataSQLLiteralsParser.SINGLE_LINE_COMMENT = 1231;
TeradataSQLLiteralsParser.MULTI_LINE_COMMENT = 1232;
TeradataSQLLiteralsParser.WS = 1233;

TeradataSQLLiteralsParser.RULE_literal = 0;
TeradataSQLLiteralsParser.RULE_hex_byte_literal = 1;
TeradataSQLLiteralsParser.RULE_char_string_literal = 2;
TeradataSQLLiteralsParser.RULE_unicode_char_string_literal = 3;
TeradataSQLLiteralsParser.RULE_hex_char_string_literal = 4;
TeradataSQLLiteralsParser.RULE_integer_literal = 5;
TeradataSQLLiteralsParser.RULE_hex_integer_literal = 6;
TeradataSQLLiteralsParser.RULE_float_literal = 7;
TeradataSQLLiteralsParser.RULE_character_set_prefix = 8;
TeradataSQLLiteralsParser.RULE_date_literal = 9;
TeradataSQLLiteralsParser.RULE_time_literal = 10;
TeradataSQLLiteralsParser.RULE_timestamp_literal = 11;
TeradataSQLLiteralsParser.RULE_interval_literal = 12;
TeradataSQLLiteralsParser.RULE_interval_qualifier = 13;
TeradataSQLLiteralsParser.RULE_period_literal = 14;

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
        this.ruleIndex = TeradataSQLLiteralsParser.RULE_literal;
    }

	hex_byte_literal() {
	    return this.getTypedRuleContext(Hex_byte_literalContext,0);
	};

	char_string_literal() {
	    return this.getTypedRuleContext(Char_string_literalContext,0);
	};

	unicode_char_string_literal() {
	    return this.getTypedRuleContext(Unicode_char_string_literalContext,0);
	};

	hex_char_string_literal() {
	    return this.getTypedRuleContext(Hex_char_string_literalContext,0);
	};

	integer_literal() {
	    return this.getTypedRuleContext(Integer_literalContext,0);
	};

	hex_integer_literal() {
	    return this.getTypedRuleContext(Hex_integer_literalContext,0);
	};

	float_literal() {
	    return this.getTypedRuleContext(Float_literalContext,0);
	};

	date_literal() {
	    return this.getTypedRuleContext(Date_literalContext,0);
	};

	time_literal() {
	    return this.getTypedRuleContext(Time_literalContext,0);
	};

	timestamp_literal() {
	    return this.getTypedRuleContext(Timestamp_literalContext,0);
	};

	interval_literal() {
	    return this.getTypedRuleContext(Interval_literalContext,0);
	};

	period_literal() {
	    return this.getTypedRuleContext(Period_literalContext,0);
	};

	NULL() {
	    return this.getToken(TeradataSQLLiteralsParser.NULL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TeradataSQLLiteralsParserListener ) {
	        listener.enterLiteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TeradataSQLLiteralsParserListener ) {
	        listener.exitLiteral(this);
		}
	}


}



class Hex_byte_literalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TeradataSQLLiteralsParser.RULE_hex_byte_literal;
    }

	HEX_BYTE_LITERAL() {
	    return this.getToken(TeradataSQLLiteralsParser.HEX_BYTE_LITERAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TeradataSQLLiteralsParserListener ) {
	        listener.enterHex_byte_literal(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TeradataSQLLiteralsParserListener ) {
	        listener.exitHex_byte_literal(this);
		}
	}


}



class Char_string_literalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TeradataSQLLiteralsParser.RULE_char_string_literal;
    }

	character_set_prefix() {
	    return this.getTypedRuleContext(Character_set_prefixContext,0);
	};

	CHAR_STRING = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(TeradataSQLLiteralsParser.CHAR_STRING);
	    } else {
	        return this.getToken(TeradataSQLLiteralsParser.CHAR_STRING, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof TeradataSQLLiteralsParserListener ) {
	        listener.enterChar_string_literal(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TeradataSQLLiteralsParserListener ) {
	        listener.exitChar_string_literal(this);
		}
	}


}



class Unicode_char_string_literalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TeradataSQLLiteralsParser.RULE_unicode_char_string_literal;
    }

	UNICODE_STRING_LEADING() {
	    return this.getToken(TeradataSQLLiteralsParser.UNICODE_STRING_LEADING, 0);
	};

	UESCAPE() {
	    return this.getToken(TeradataSQLLiteralsParser.UESCAPE, 0);
	};

	CHAR_STRING = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(TeradataSQLLiteralsParser.CHAR_STRING);
	    } else {
	        return this.getToken(TeradataSQLLiteralsParser.CHAR_STRING, i);
	    }
	};


	character_set_prefix() {
	    return this.getTypedRuleContext(Character_set_prefixContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TeradataSQLLiteralsParserListener ) {
	        listener.enterUnicode_char_string_literal(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TeradataSQLLiteralsParserListener ) {
	        listener.exitUnicode_char_string_literal(this);
		}
	}


}



class Hex_char_string_literalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TeradataSQLLiteralsParser.RULE_hex_char_string_literal;
    }

	HEX_STRING() {
	    return this.getToken(TeradataSQLLiteralsParser.HEX_STRING, 0);
	};

	character_set_prefix() {
	    return this.getTypedRuleContext(Character_set_prefixContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TeradataSQLLiteralsParserListener ) {
	        listener.enterHex_char_string_literal(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TeradataSQLLiteralsParserListener ) {
	        listener.exitHex_char_string_literal(this);
		}
	}


}



class Integer_literalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TeradataSQLLiteralsParser.RULE_integer_literal;
    }

	UNSIGNED_INTEGER() {
	    return this.getToken(TeradataSQLLiteralsParser.UNSIGNED_INTEGER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TeradataSQLLiteralsParserListener ) {
	        listener.enterInteger_literal(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TeradataSQLLiteralsParserListener ) {
	        listener.exitInteger_literal(this);
		}
	}


}



class Hex_integer_literalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TeradataSQLLiteralsParser.RULE_hex_integer_literal;
    }

	HEX_INTEGER_LITERAL() {
	    return this.getToken(TeradataSQLLiteralsParser.HEX_INTEGER_LITERAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TeradataSQLLiteralsParserListener ) {
	        listener.enterHex_integer_literal(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TeradataSQLLiteralsParserListener ) {
	        listener.exitHex_integer_literal(this);
		}
	}


}



class Float_literalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TeradataSQLLiteralsParser.RULE_float_literal;
    }

	FLOAT_LITERAL() {
	    return this.getToken(TeradataSQLLiteralsParser.FLOAT_LITERAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TeradataSQLLiteralsParserListener ) {
	        listener.enterFloat_literal(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TeradataSQLLiteralsParserListener ) {
	        listener.exitFloat_literal(this);
		}
	}


}



class Character_set_prefixContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TeradataSQLLiteralsParser.RULE_character_set_prefix;
    }

	CS_LATIN() {
	    return this.getToken(TeradataSQLLiteralsParser.CS_LATIN, 0);
	};

	CS_UNICODE() {
	    return this.getToken(TeradataSQLLiteralsParser.CS_UNICODE, 0);
	};

	CS_KANJISJIS() {
	    return this.getToken(TeradataSQLLiteralsParser.CS_KANJISJIS, 0);
	};

	CS_GRAPHIC() {
	    return this.getToken(TeradataSQLLiteralsParser.CS_GRAPHIC, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TeradataSQLLiteralsParserListener ) {
	        listener.enterCharacter_set_prefix(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TeradataSQLLiteralsParserListener ) {
	        listener.exitCharacter_set_prefix(this);
		}
	}


}



class Date_literalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TeradataSQLLiteralsParser.RULE_date_literal;
    }

	DATE_STRING() {
	    return this.getToken(TeradataSQLLiteralsParser.DATE_STRING, 0);
	};

	DATE() {
	    return this.getToken(TeradataSQLLiteralsParser.DATE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TeradataSQLLiteralsParserListener ) {
	        listener.enterDate_literal(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TeradataSQLLiteralsParserListener ) {
	        listener.exitDate_literal(this);
		}
	}


}



class Time_literalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TeradataSQLLiteralsParser.RULE_time_literal;
    }

	TIME_STRING() {
	    return this.getToken(TeradataSQLLiteralsParser.TIME_STRING, 0);
	};

	TIME() {
	    return this.getToken(TeradataSQLLiteralsParser.TIME, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TeradataSQLLiteralsParserListener ) {
	        listener.enterTime_literal(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TeradataSQLLiteralsParserListener ) {
	        listener.exitTime_literal(this);
		}
	}


}



class Timestamp_literalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TeradataSQLLiteralsParser.RULE_timestamp_literal;
    }

	TIMESTAMP_STRING() {
	    return this.getToken(TeradataSQLLiteralsParser.TIMESTAMP_STRING, 0);
	};

	TIMESTAMP() {
	    return this.getToken(TeradataSQLLiteralsParser.TIMESTAMP, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TeradataSQLLiteralsParserListener ) {
	        listener.enterTimestamp_literal(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TeradataSQLLiteralsParserListener ) {
	        listener.exitTimestamp_literal(this);
		}
	}


}



class Interval_literalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TeradataSQLLiteralsParser.RULE_interval_literal;
    }

	INTERVAL() {
	    return this.getToken(TeradataSQLLiteralsParser.INTERVAL, 0);
	};

	interval_qualifier() {
	    return this.getTypedRuleContext(Interval_qualifierContext,0);
	};

	CHAR_STRING() {
	    return this.getToken(TeradataSQLLiteralsParser.CHAR_STRING, 0);
	};

	TIME_STRING() {
	    return this.getToken(TeradataSQLLiteralsParser.TIME_STRING, 0);
	};

	DATE_STRING() {
	    return this.getToken(TeradataSQLLiteralsParser.DATE_STRING, 0);
	};

	TIMESTAMP_STRING() {
	    return this.getToken(TeradataSQLLiteralsParser.TIMESTAMP_STRING, 0);
	};

	MINUS_SIGN() {
	    return this.getToken(TeradataSQLLiteralsParser.MINUS_SIGN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TeradataSQLLiteralsParserListener ) {
	        listener.enterInterval_literal(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TeradataSQLLiteralsParserListener ) {
	        listener.exitInterval_literal(this);
		}
	}


}



class Interval_qualifierContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TeradataSQLLiteralsParser.RULE_interval_qualifier;
    }

	YEAR() {
	    return this.getToken(TeradataSQLLiteralsParser.YEAR, 0);
	};

	TO() {
	    return this.getToken(TeradataSQLLiteralsParser.TO, 0);
	};

	MONTH() {
	    return this.getToken(TeradataSQLLiteralsParser.MONTH, 0);
	};

	DAY() {
	    return this.getToken(TeradataSQLLiteralsParser.DAY, 0);
	};

	HOUR() {
	    return this.getToken(TeradataSQLLiteralsParser.HOUR, 0);
	};

	MINUTE() {
	    return this.getToken(TeradataSQLLiteralsParser.MINUTE, 0);
	};

	SECOND() {
	    return this.getToken(TeradataSQLLiteralsParser.SECOND, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TeradataSQLLiteralsParserListener ) {
	        listener.enterInterval_qualifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TeradataSQLLiteralsParserListener ) {
	        listener.exitInterval_qualifier(this);
		}
	}


}



class Period_literalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TeradataSQLLiteralsParser.RULE_period_literal;
    }

	PERIOD() {
	    return this.getToken(TeradataSQLLiteralsParser.PERIOD, 0);
	};

	PERIOD_STRING() {
	    return this.getToken(TeradataSQLLiteralsParser.PERIOD_STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TeradataSQLLiteralsParserListener ) {
	        listener.enterPeriod_literal(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TeradataSQLLiteralsParserListener ) {
	        listener.exitPeriod_literal(this);
		}
	}


}




TeradataSQLLiteralsParser.LiteralContext = LiteralContext; 
TeradataSQLLiteralsParser.Hex_byte_literalContext = Hex_byte_literalContext; 
TeradataSQLLiteralsParser.Char_string_literalContext = Char_string_literalContext; 
TeradataSQLLiteralsParser.Unicode_char_string_literalContext = Unicode_char_string_literalContext; 
TeradataSQLLiteralsParser.Hex_char_string_literalContext = Hex_char_string_literalContext; 
TeradataSQLLiteralsParser.Integer_literalContext = Integer_literalContext; 
TeradataSQLLiteralsParser.Hex_integer_literalContext = Hex_integer_literalContext; 
TeradataSQLLiteralsParser.Float_literalContext = Float_literalContext; 
TeradataSQLLiteralsParser.Character_set_prefixContext = Character_set_prefixContext; 
TeradataSQLLiteralsParser.Date_literalContext = Date_literalContext; 
TeradataSQLLiteralsParser.Time_literalContext = Time_literalContext; 
TeradataSQLLiteralsParser.Timestamp_literalContext = Timestamp_literalContext; 
TeradataSQLLiteralsParser.Interval_literalContext = Interval_literalContext; 
TeradataSQLLiteralsParser.Interval_qualifierContext = Interval_qualifierContext; 
TeradataSQLLiteralsParser.Period_literalContext = Period_literalContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
