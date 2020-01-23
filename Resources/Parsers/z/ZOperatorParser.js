// Generated from Resources/Parsers/z/ZOperatorParser.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var ZOperatorParserListener = require('./ZOperatorParserListener').ZOperatorParserListener;
var grammarFileName = "ZOperatorParser.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u009c\u00f5\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010",
    "\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014",
    "\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0007\u00020\n\u0002\f\u0002\u000e\u00023\u000b\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0005\u0003<\n\u0003\u0003\u0003\u0003\u0003\u0007\u0003@\n\u0003",
    "\f\u0003\u000e\u0003C\u000b\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0007\u0003J\n\u0003\f\u0003\u000e\u0003M\u000b",
    "\u0003\u0005\u0003O\n\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0007\u0004W\n\u0004\f\u0004\u000e\u0004",
    "Z\u000b\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0007\u0004_\n\u0004",
    "\f\u0004\u000e\u0004b\u000b\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0007\u0004g\n\u0004\f\u0004\u000e\u0004j\u000b\u0004\u0003\u0004\u0005",
    "\u0004m\n\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0007\u0005r\n\u0005",
    "\f\u0005\u000e\u0005u\u000b\u0005\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0005\u0006}\n\u0006\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0005\u0007\u0086\n\u0007\u0003\b\u0003\b\u0003\t\u0003\t\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0005\n\u0090\n\n\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0005\u000b\u0096\n\u000b\u0003\u000b\u0003\u000b\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003\r\u0003\u000e",
    "\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u000f",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0011",
    "\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003\u0013",
    "\u0003\u0013\u0003\u0013\u0007\u0013\u00b7\n\u0013\f\u0013\u000e\u0013",
    "\u00ba\u000b\u0013\u0003\u0013\u0003\u0013\u0005\u0013\u00be\n\u0013",
    "\u0003\u0013\u0003\u0013\u0005\u0013\u00c2\n\u0013\u0003\u0014\u0003",
    "\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0007\u0014\u00ca",
    "\n\u0014\f\u0014\u000e\u0014\u00cd\u000b\u0014\u0003\u0014\u0003\u0014",
    "\u0005\u0014\u00d1\n\u0014\u0005\u0014\u00d3\n\u0014\u0003\u0015\u0003",
    "\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0007",
    "\u0015\u00dc\n\u0015\f\u0015\u000e\u0015\u00df\u000b\u0015\u0003\u0015",
    "\u0003\u0015\u0005\u0015\u00e3\n\u0015\u0003\u0015\u0003\u0015\u0005",
    "\u0015\u00e7\n\u0015\u0003\u0016\u0003\u0016\u0003\u0016\u0007\u0016",
    "\u00ec\n\u0016\f\u0016\u000e\u0016\u00ef\u000b\u0016\u0003\u0016\u0003",
    "\u0016\u0005\u0016\u00f3\n\u0016\u0003\u0016\u0005X`h\u0002\u0017\u0002",
    "\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e",
    " \"$&(*\u0002\u0003\u0004\u0002\u001d\u001d##\u0002\u0105\u00021\u0003",
    "\u0002\u0002\u0002\u0004N\u0003\u0002\u0002\u0002\u0006l\u0003\u0002",
    "\u0002\u0002\bn\u0003\u0002\u0002\u0002\n|\u0003\u0002\u0002\u0002\f",
    "\u0085\u0003\u0002\u0002\u0002\u000e\u0087\u0003\u0002\u0002\u0002\u0010",
    "\u0089\u0003\u0002\u0002\u0002\u0012\u008f\u0003\u0002\u0002\u0002\u0014",
    "\u0091\u0003\u0002\u0002\u0002\u0016\u0099\u0003\u0002\u0002\u0002\u0018",
    "\u009d\u0003\u0002\u0002\u0002\u001a\u00a1\u0003\u0002\u0002\u0002\u001c",
    "\u00a5\u0003\u0002\u0002\u0002\u001e\u00a8\u0003\u0002\u0002\u0002 ",
    "\u00ab\u0003\u0002\u0002\u0002\"\u00ae\u0003\u0002\u0002\u0002$\u00c1",
    "\u0003\u0002\u0002\u0002&\u00d2\u0003\u0002\u0002\u0002(\u00e6\u0003",
    "\u0002\u0002\u0002*\u00e8\u0003\u0002\u0002\u0002,0\u0007\u0006\u0002",
    "\u0002-0\u0005\u0004\u0003\u0002.0\u0005\u0006\u0004\u0002/,\u0003\u0002",
    "\u0002\u0002/-\u0003\u0002\u0002\u0002/.\u0003\u0002\u0002\u000203\u0003",
    "\u0002\u0002\u00021/\u0003\u0002\u0002\u000212\u0003\u0002\u0002\u0002",
    "24\u0003\u0002\u0002\u000231\u0003\u0002\u0002\u000245\u0007\u0002\u0002",
    "\u00035\u0003\u0003\u0002\u0002\u000267\u0007\u0003\u0002\u000278\u0007",
    "$\u0002\u000289\u0007F\u0002\u00029;\u0007 \u0002\u0002:<\u0005\b\u0005",
    "\u0002;:\u0003\u0002\u0002\u0002;<\u0003\u0002\u0002\u0002<=\u0003\u0002",
    "\u0002\u0002=A\u0007\u0014\u0002\u0002>@\u0005\u0006\u0004\u0002?>\u0003",
    "\u0002\u0002\u0002@C\u0003\u0002\u0002\u0002A?\u0003\u0002\u0002\u0002",
    "AB\u0003\u0002\u0002\u0002BO\u0003\u0002\u0002\u0002CA\u0003\u0002\u0002",
    "\u0002DE\u0007\u0003\u0002\u0002EF\u0007$\u0002\u0002FG\u0007F\u0002",
    "\u0002GK\u0007\u0014\u0002\u0002HJ\u0005\u0006\u0004\u0002IH\u0003\u0002",
    "\u0002\u0002JM\u0003\u0002\u0002\u0002KI\u0003\u0002\u0002\u0002KL\u0003",
    "\u0002\u0002\u0002LO\u0003\u0002\u0002\u0002MK\u0003\u0002\u0002\u0002",
    "N6\u0003\u0002\u0002\u0002ND\u0003\u0002\u0002\u0002O\u0005\u0003\u0002",
    "\u0002\u0002PQ\u0007\u0003\u0002\u0002QR\u0005\n\u0006\u0002RS\u0007",
    "\u0014\u0002\u0002Sm\u0003\u0002\u0002\u0002TX\u0007\u0005\u0002\u0002",
    "UW\u000b\u0002\u0002\u0002VU\u0003\u0002\u0002\u0002WZ\u0003\u0002\u0002",
    "\u0002XY\u0003\u0002\u0002\u0002XV\u0003\u0002\u0002\u0002Y[\u0003\u0002",
    "\u0002\u0002ZX\u0003\u0002\u0002\u0002[m\u0007\u0014\u0002\u0002\\`",
    "\u0007\u0004\u0002\u0002]_\u000b\u0002\u0002\u0002^]\u0003\u0002\u0002",
    "\u0002_b\u0003\u0002\u0002\u0002`a\u0003\u0002\u0002\u0002`^\u0003\u0002",
    "\u0002\u0002ac\u0003\u0002\u0002\u0002b`\u0003\u0002\u0002\u0002cm\u0007",
    "\u0014\u0002\u0002dh\u0007\u0003\u0002\u0002eg\u000b\u0002\u0002\u0002",
    "fe\u0003\u0002\u0002\u0002gj\u0003\u0002\u0002\u0002hi\u0003\u0002\u0002",
    "\u0002hf\u0003\u0002\u0002\u0002ik\u0003\u0002\u0002\u0002jh\u0003\u0002",
    "\u0002\u0002km\u0007\u0014\u0002\u0002lP\u0003\u0002\u0002\u0002lT\u0003",
    "\u0002\u0002\u0002l\\\u0003\u0002\u0002\u0002ld\u0003\u0002\u0002\u0002",
    "m\u0007\u0003\u0002\u0002\u0002ns\u0007F\u0002\u0002op\u0007)\u0002",
    "\u0002pr\u0007F\u0002\u0002qo\u0003\u0002\u0002\u0002ru\u0003\u0002",
    "\u0002\u0002sq\u0003\u0002\u0002\u0002st\u0003\u0002\u0002\u0002t\t",
    "\u0003\u0002\u0002\u0002us\u0003\u0002\u0002\u0002vw\u0007\"\u0002\u0002",
    "w}\u0005\u0012\n\u0002xy\u0007\u001a\u0002\u0002y}\u0005\f\u0007\u0002",
    "z{\u0007\u001b\u0002\u0002{}\u0005\f\u0007\u0002|v\u0003\u0002\u0002",
    "\u0002|x\u0003\u0002\u0002\u0002|z\u0003\u0002\u0002\u0002}\u000b\u0003",
    "\u0002\u0002\u0002~\u0086\u0005\u0014\u000b\u0002\u007f\u0086\u0005",
    "\u0016\f\u0002\u0080\u0081\u0005\u000e\b\u0002\u0081\u0082\u0005\u0010",
    "\t\u0002\u0082\u0083\u0005\u0018\r\u0002\u0083\u0086\u0003\u0002\u0002",
    "\u0002\u0084\u0086\u0005\u001a\u000e\u0002\u0085~\u0003\u0002\u0002",
    "\u0002\u0085\u007f\u0003\u0002\u0002\u0002\u0085\u0080\u0003\u0002\u0002",
    "\u0002\u0085\u0084\u0003\u0002\u0002\u0002\u0086\r\u0003\u0002\u0002",
    "\u0002\u0087\u0088\u0007\u0007\u0002\u0002\u0088\u000f\u0003\u0002\u0002",
    "\u0002\u0089\u008a\t\u0002\u0002\u0002\u008a\u0011\u0003\u0002\u0002",
    "\u0002\u008b\u0090\u0005\u0014\u000b\u0002\u008c\u0090\u0005\u0016\f",
    "\u0002\u008d\u0090\u0005\u0018\r\u0002\u008e\u0090\u0005\u001a\u000e",
    "\u0002\u008f\u008b\u0003\u0002\u0002\u0002\u008f\u008c\u0003\u0002\u0002",
    "\u0002\u008f\u008d\u0003\u0002\u0002\u0002\u008f\u008e\u0003\u0002\u0002",
    "\u0002\u0090\u0013\u0003\u0002\u0002\u0002\u0091\u0095\u0007\t\u0002",
    "\u0002\u0092\u0096\u0005$\u0013\u0002\u0093\u0094\u0007\u001f\u0002",
    "\u0002\u0094\u0096\u00071\u0002\u0002\u0095\u0092\u0003\u0002\u0002",
    "\u0002\u0095\u0093\u0003\u0002\u0002\u0002\u0096\u0097\u0003\u0002\u0002",
    "\u0002\u0097\u0098\u0007\n\u0002\u0002\u0098\u0015\u0003\u0002\u0002",
    "\u0002\u0099\u009a\u0007\t\u0002\u0002\u009a\u009b\u0005&\u0014\u0002",
    "\u009b\u009c\u0007\n\u0002\u0002\u009c\u0017\u0003\u0002\u0002\u0002",
    "\u009d\u009e\u0007\t\u0002\u0002\u009e\u009f\u0005(\u0015\u0002\u009f",
    "\u00a0\u0007\n\u0002\u0002\u00a0\u0019\u0003\u0002\u0002\u0002\u00a1",
    "\u00a2\u0007\t\u0002\u0002\u00a2\u00a3\u0005*\u0016\u0002\u00a3\u00a4",
    "\u0007\n\u0002\u0002\u00a4\u001b\u0003\u0002\u0002\u0002\u00a5\u00a6",
    "\u00071\u0002\u0002\u00a6\u00a7\u0007F\u0002\u0002\u00a7\u001d\u0003",
    "\u0002\u0002\u0002\u00a8\u00a9\u00072\u0002\u0002\u00a9\u00aa\u0007",
    "F\u0002\u0002\u00aa\u001f\u0003\u0002\u0002\u0002\u00ab\u00ac\u0007",
    "1\u0002\u0002\u00ac\u00ad\u0007F\u0002\u0002\u00ad!\u0003\u0002\u0002",
    "\u0002\u00ae\u00af\u00072\u0002\u0002\u00af\u00b0\u0007F\u0002\u0002",
    "\u00b0#\u0003\u0002\u0002\u0002\u00b1\u00b2\u0007F\u0002\u0002\u00b2",
    "\u00c2\u00071\u0002\u0002\u00b3\u00b8\u0007F\u0002\u0002\u00b4\u00b7",
    "\u0005\u001c\u000f\u0002\u00b5\u00b7\u0005\u001e\u0010\u0002\u00b6\u00b4",
    "\u0003\u0002\u0002\u0002\u00b6\u00b5\u0003\u0002\u0002\u0002\u00b7\u00ba",
    "\u0003\u0002\u0002\u0002\u00b8\u00b6\u0003\u0002\u0002\u0002\u00b8\u00b9",
    "\u0003\u0002\u0002\u0002\u00b9\u00bd\u0003\u0002\u0002\u0002\u00ba\u00b8",
    "\u0003\u0002\u0002\u0002\u00bb\u00be\u0005 \u0011\u0002\u00bc\u00be",
    "\u0005\"\u0012\u0002\u00bd\u00bb\u0003\u0002\u0002\u0002\u00bd\u00bc",
    "\u0003\u0002\u0002\u0002\u00be\u00bf\u0003\u0002\u0002\u0002\u00bf\u00c0",
    "\u00071\u0002\u0002\u00c0\u00c2\u0003\u0002\u0002\u0002\u00c1\u00b1",
    "\u0003\u0002\u0002\u0002\u00c1\u00b3\u0003\u0002\u0002\u0002\u00c2%",
    "\u0003\u0002\u0002\u0002\u00c3\u00c4\u00071\u0002\u0002\u00c4\u00d3",
    "\u0007F\u0002\u0002\u00c5\u00c6\u00071\u0002\u0002\u00c6\u00cb\u0007",
    "F\u0002\u0002\u00c7\u00ca\u0005\u001c\u000f\u0002\u00c8\u00ca\u0005",
    "\u001e\u0010\u0002\u00c9\u00c7\u0003\u0002\u0002\u0002\u00c9\u00c8\u0003",
    "\u0002\u0002\u0002\u00ca\u00cd\u0003\u0002\u0002\u0002\u00cb\u00c9\u0003",
    "\u0002\u0002\u0002\u00cb\u00cc\u0003\u0002\u0002\u0002\u00cc\u00d0\u0003",
    "\u0002\u0002\u0002\u00cd\u00cb\u0003\u0002\u0002\u0002\u00ce\u00d1\u0005",
    " \u0011\u0002\u00cf\u00d1\u0005\"\u0012\u0002\u00d0\u00ce\u0003\u0002",
    "\u0002\u0002\u00d0\u00cf\u0003\u0002\u0002\u0002\u00d1\u00d3\u0003\u0002",
    "\u0002\u0002\u00d2\u00c3\u0003\u0002\u0002\u0002\u00d2\u00c5\u0003\u0002",
    "\u0002\u0002\u00d3\'\u0003\u0002\u0002\u0002\u00d4\u00d5\u00071\u0002",
    "\u0002\u00d5\u00d6\u0007F\u0002\u0002\u00d6\u00e7\u00071\u0002\u0002",
    "\u00d7\u00d8\u00071\u0002\u0002\u00d8\u00dd\u0007F\u0002\u0002\u00d9",
    "\u00dc\u0005\u001c\u000f\u0002\u00da\u00dc\u0005\u001e\u0010\u0002\u00db",
    "\u00d9\u0003\u0002\u0002\u0002\u00db\u00da\u0003\u0002\u0002\u0002\u00dc",
    "\u00df\u0003\u0002\u0002\u0002\u00dd\u00db\u0003\u0002\u0002\u0002\u00dd",
    "\u00de\u0003\u0002\u0002\u0002\u00de\u00e2\u0003\u0002\u0002\u0002\u00df",
    "\u00dd\u0003\u0002\u0002\u0002\u00e0\u00e3\u0005 \u0011\u0002\u00e1",
    "\u00e3\u0005\"\u0012\u0002\u00e2\u00e0\u0003\u0002\u0002\u0002\u00e2",
    "\u00e1\u0003\u0002\u0002\u0002\u00e3\u00e4\u0003\u0002\u0002\u0002\u00e4",
    "\u00e5\u00071\u0002\u0002\u00e5\u00e7\u0003\u0002\u0002\u0002\u00e6",
    "\u00d4\u0003\u0002\u0002\u0002\u00e6\u00d7\u0003\u0002\u0002\u0002\u00e7",
    ")\u0003\u0002\u0002\u0002\u00e8\u00ed\u0007F\u0002\u0002\u00e9\u00ec",
    "\u0005\u001c\u000f\u0002\u00ea\u00ec\u0005\u001e\u0010\u0002\u00eb\u00e9",
    "\u0003\u0002\u0002\u0002\u00eb\u00ea\u0003\u0002\u0002\u0002\u00ec\u00ef",
    "\u0003\u0002\u0002\u0002\u00ed\u00eb\u0003\u0002\u0002\u0002\u00ed\u00ee",
    "\u0003\u0002\u0002\u0002\u00ee\u00f2\u0003\u0002\u0002\u0002\u00ef\u00ed",
    "\u0003\u0002\u0002\u0002\u00f0\u00f3\u0005 \u0011\u0002\u00f1\u00f3",
    "\u0005\"\u0012\u0002\u00f2\u00f0\u0003\u0002\u0002\u0002\u00f2\u00f1",
    "\u0003\u0002\u0002\u0002\u00f3+\u0003\u0002\u0002\u0002 /1;AKNX`hls",
    "|\u0085\u008f\u0095\u00b6\u00b8\u00bd\u00c1\u00c9\u00cb\u00d0\u00d2",
    "\u00db\u00dd\u00e2\u00e6\u00eb\u00ed\u00f2"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'\u2500'", "'\u250C'", "'\u2577'", null, null, 
                     null, "'\u0028'", "'\u0029'", "'\u005B'", "'\u005D'", 
                     "'\u007B'", "'\u007D'", "'\u2989'", "'\u298A'", "'\u27EA'", 
                     "'\u27EB'", "'\u2550'", "'\u2514'", null, null, null, 
                     "'else'", "'false'", "'function'", "'generic'", "'if'", 
                     "'leftassoc'", "'let'", "'\u2119'", "'parents'", "'pre'", 
                     "'relation'", "'rightassoc'", "'section'", "'then'", 
                     "'true'", "':'", "'=='", "','", "'::='", "'|'", "'\u0026'", 
                     "'\u005C'", "'/'", "'.'", "';'", "'_'", "',,'", "'='", 
                     null, "'\u2200'", "'\u2981'", "'\u2203'", null, "'\u21D4'", 
                     "'\u21D2'", "'\u2228'", "'\u2227'", "'\u00AC'", "'\u2208'", 
                     "'\u2A21'", "'\u00D7'", "'\u03B8'", "'\u03BB'", "'\u03BC'", 
                     "'\u2A1F'", "'\u2A20'", null, null, "'\u0394'", "'\u039E'", 
                     "'\uD835\uDD38'", "'\u2115'", "'\u2032'", "'\u0021'", 
                     "'\u003F'", "'\u2197'", "'\u2199'", "'\u2198'", "'\u2196'", 
                     "'\u22A2'", "'\u29F9'", "'\u002B'", null, "'\u2194'", 
                     "'\u2192'", "'\u2260'", "'\u2209'", "'\u2205'", "'\u2286'", 
                     "'\u2282'", "'\u222A'", "'\u2229'", "'\u2216'", "'\u2296'", 
                     "'\u22C3'", "'\u22C2'", "'\uD835\uDD3D'", "'\u21A6'", 
                     "'\u2A3E'", "'\u2218'", "'\u25C1'", "'\u25B7'", "'\u2A64'", 
                     "'\u2A65'", "'\u223C'", "'\u2987'", "'\u2988'", "'\u2295'", 
                     "'\u21F8'", "'\u2914'", "'\u21A3'", "'\u2900'", "'\u21A0'", 
                     "'\u2916'", "'\u21FB'", "'\u2915'", "'\u2124'", "'\u002D'", 
                     "'\u2212'", "'\u2264'", "'\u003C'", "'\u2265'", "'\u003E'", 
                     "'\u002A'", "'\u0023'", "'\u2040'", "'\u21BF'", "'\u21BE'", 
                     "'\u27E8'", "'\u27E9'", null, null, null, null, null, 
                     null, null, null, null, null, null, null, null, null, 
                     null, null, null, null, null, null, null, null, "'\u2028'" ];

var symbolicNames = [ null, "ZED", "SCH", "AX", "TEXT", "NUMERAL", "STROKE", 
                      "LEFT_PARENTHESIS", "RIGHT_PARENTHESIS", "LEFT_SQUARE_BRACKET", 
                      "RIGHT_SQUARE_BRACKET", "LEFT_CURLY_BRACKET", "RIGHT_CURLY_BRACKET", 
                      "LEFT_BINDING_BRACKET", "RIGHT_BINDING_BRACKET", "LEFT_DOUBLE_ANGLE_BRACKET", 
                      "RIGHT_DOUBLE_ANGLE_BRACKET", "GEN", "END", "WS", 
                      "NL", "IGNORE_NL", "ELSE", "FALSE", "FUNCTION", "GENERIC", 
                      "IF", "LEFTASSOC", "LET", "POWERSET", "PARENTS", "PRE_KEY", 
                      "RELATION", "RIGHTASSOC", "SECTION", "THEN", "TRUE", 
                      "COLON", "DEFINE_EQUAL", "COMMA", "FREE_EQUALS", "VERTICAL_LINE", 
                      "AMPERSAND", "REVERSE_SOLIDUS", "SOLIDUS", "FULL_STOP", 
                      "SEMICOLON", "ARGUMENT", "LIST", "EQUALS_SIGN", "CONJECTURE", 
                      "FOR_ALL", "SPOT", "THERE_EXISTS", "UNIQUE_EXISTS", 
                      "LEFT_RIGHT_DOUBLE_ARROW", "RIGHTWARDS_DOUBLE_ARROW", 
                      "LOGICAL_OR", "LOGICAL_AND", "NOT_SIGN", "ELEMENT_OF", 
                      "SCHEMA_PROJECTION", "MULTIPLICATION_SIGN", "GREEK_SMALL_LETTER_THETA", 
                      "GREEK_SMALL_LETTER_LAMBDA", "GREEK_SMALL_LETTER_MU", 
                      "SCHEMA_COMPOSITION", "SCHEMA_PIPING", "NAME", "WORDPART", 
                      "GREEK_CAPITAL_LETTER_DELTA", "GREEK_CAPITAL_LETTER_XI", 
                      "MATHEMATICAL_DOUBLE_STRUCK_CAPITAL_A", "DOUBLE_STRUCK_CAPITAL_N", 
                      "MODIFIER_LETTER_PRIME", "EXCLAMATION_MARK", "QUESTION_MARK", 
                      "NORTH_EAST_ARROW", "SOUTH_WEST_ARROW", "SOUTH_EAST_ARROW", 
                      "NORTH_WEST_ARROW", "RIGHT_TACK", "BIG_REVERSE_SOLIDUS", 
                      "PLUS_SIGN", "MATHEMATICAL_TOOLKIT_SYMBOLS", "LEFT_RIGHT_ARROW", 
                      "RIGHTWARDS_ARROW", "NOT_EQUAL_TO", "NOT_AN_ELEMENT_OF", 
                      "EMPTY_SET", "SUBSET_OF_OR_EQUAL_TO", "SUBSET_OF", 
                      "UNION", "INTERSECTION", "SET_MINUS", "CIRCLED_MINUS", 
                      "N_ARY_UNION", "N_ARY_INTERSECTION", "MATHEMATICAL_DOUBLE_STRUCK_CAPITAL_F", 
                      "RIGHTWARDS_ARROW_FROM_BAR", "RELATIONAL_COMPOSITION", 
                      "RING_OPERATOR", "WHITE_LEFT_POINTING_TRIANGLE", "WHITE_RIGHT_POINTING_TRIANGLE", 
                      "DOMAIN_ANTIRESTRICTION", "RANGE_ANTIRESTRICTION", 
                      "TILDE_OPERATOR", "LEFT_IMAGE_BRACKET", "RIGHT_IMAGE_BRACKET", 
                      "CIRCLED_PLUS", "RIGHTWARDS_ARROW_WITH_VERTICAL_STROKE", 
                      "RIGHTWARDS_ARROW_WITH_TAIL_WITH_VERTICAL_STROKE", 
                      "RIGHTWARDS_ARROW_WITH_TAIL", "RIGHTWARDS_TWO_HEADED_ARROW_WITH_VERTICAL_STROKE", 
                      "RIGHTWARDS_TWO_HEADED_ARROW", "RIGHTWARDS_TWO_HEADED_ARROW_WITH_TAIL", 
                      "RIGHTWARDS_ARROW_WITH_DOUBLE_VERTICAL_STROKE", "RIGHTWARDS_ARROW_WITH_TAIL_WITH_DOUBLE_VERTICAL_STROKE", 
                      "DOUBLE_STRUCK_CAPITAL_Z", "HYPHEN_MINUS", "MINUS_SIGN", 
                      "LESS_THAN_OR_EQUAL_TO", "LESS_THAN_SIGN", "GREATER_THAN_OR_EQUAL_TO", 
                      "GREATER_THAN_SIGN", "ASTERISK", "NUMBER_SIGN", "CHARACTER_TIE", 
                      "UPWARDS_HARPOON_WITH_BARB_LEFTWARDS", "UPWARDS_HARPOON_WITH_BARB_RIGHTWARDS", 
                      "LEFT_ANGLE_BRACKET", "RIGHT_ANGLE_BRACKET", "ID", 
                      "PREP", "PRE", "POSTP", "POST", "IP", "I", "LP", "L", 
                      "ELP", "EL", "ERP", "ER", "SRP", "SR", "EREP", "ERE", 
                      "SREP", "SRE", "ES", "SS", "UNKNOWN", "NLCHAR" ];

var ruleNames =  [ "specification", "section", "paragraph", "formals", "operatorTemplate", 
                   "categoryTemplate", "prec", "assoc", "template", "prefixTemplate", 
                   "postfixTemplate", "infixTemplate", "nofixTemplate", 
                   "optArgName", "optListName", "argName", "listName", "prefixName", 
                   "postfixName", "infixName", "nofixName" ];

function ZOperatorParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

ZOperatorParser.prototype = Object.create(antlr4.Parser.prototype);
ZOperatorParser.prototype.constructor = ZOperatorParser;

Object.defineProperty(ZOperatorParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

ZOperatorParser.EOF = antlr4.Token.EOF;
ZOperatorParser.ZED = 1;
ZOperatorParser.SCH = 2;
ZOperatorParser.AX = 3;
ZOperatorParser.TEXT = 4;
ZOperatorParser.NUMERAL = 5;
ZOperatorParser.STROKE = 6;
ZOperatorParser.LEFT_PARENTHESIS = 7;
ZOperatorParser.RIGHT_PARENTHESIS = 8;
ZOperatorParser.LEFT_SQUARE_BRACKET = 9;
ZOperatorParser.RIGHT_SQUARE_BRACKET = 10;
ZOperatorParser.LEFT_CURLY_BRACKET = 11;
ZOperatorParser.RIGHT_CURLY_BRACKET = 12;
ZOperatorParser.LEFT_BINDING_BRACKET = 13;
ZOperatorParser.RIGHT_BINDING_BRACKET = 14;
ZOperatorParser.LEFT_DOUBLE_ANGLE_BRACKET = 15;
ZOperatorParser.RIGHT_DOUBLE_ANGLE_BRACKET = 16;
ZOperatorParser.GEN = 17;
ZOperatorParser.END = 18;
ZOperatorParser.WS = 19;
ZOperatorParser.NL = 20;
ZOperatorParser.IGNORE_NL = 21;
ZOperatorParser.ELSE = 22;
ZOperatorParser.FALSE = 23;
ZOperatorParser.FUNCTION = 24;
ZOperatorParser.GENERIC = 25;
ZOperatorParser.IF = 26;
ZOperatorParser.LEFTASSOC = 27;
ZOperatorParser.LET = 28;
ZOperatorParser.POWERSET = 29;
ZOperatorParser.PARENTS = 30;
ZOperatorParser.PRE_KEY = 31;
ZOperatorParser.RELATION = 32;
ZOperatorParser.RIGHTASSOC = 33;
ZOperatorParser.SECTION = 34;
ZOperatorParser.THEN = 35;
ZOperatorParser.TRUE = 36;
ZOperatorParser.COLON = 37;
ZOperatorParser.DEFINE_EQUAL = 38;
ZOperatorParser.COMMA = 39;
ZOperatorParser.FREE_EQUALS = 40;
ZOperatorParser.VERTICAL_LINE = 41;
ZOperatorParser.AMPERSAND = 42;
ZOperatorParser.REVERSE_SOLIDUS = 43;
ZOperatorParser.SOLIDUS = 44;
ZOperatorParser.FULL_STOP = 45;
ZOperatorParser.SEMICOLON = 46;
ZOperatorParser.ARGUMENT = 47;
ZOperatorParser.LIST = 48;
ZOperatorParser.EQUALS_SIGN = 49;
ZOperatorParser.CONJECTURE = 50;
ZOperatorParser.FOR_ALL = 51;
ZOperatorParser.SPOT = 52;
ZOperatorParser.THERE_EXISTS = 53;
ZOperatorParser.UNIQUE_EXISTS = 54;
ZOperatorParser.LEFT_RIGHT_DOUBLE_ARROW = 55;
ZOperatorParser.RIGHTWARDS_DOUBLE_ARROW = 56;
ZOperatorParser.LOGICAL_OR = 57;
ZOperatorParser.LOGICAL_AND = 58;
ZOperatorParser.NOT_SIGN = 59;
ZOperatorParser.ELEMENT_OF = 60;
ZOperatorParser.SCHEMA_PROJECTION = 61;
ZOperatorParser.MULTIPLICATION_SIGN = 62;
ZOperatorParser.GREEK_SMALL_LETTER_THETA = 63;
ZOperatorParser.GREEK_SMALL_LETTER_LAMBDA = 64;
ZOperatorParser.GREEK_SMALL_LETTER_MU = 65;
ZOperatorParser.SCHEMA_COMPOSITION = 66;
ZOperatorParser.SCHEMA_PIPING = 67;
ZOperatorParser.NAME = 68;
ZOperatorParser.WORDPART = 69;
ZOperatorParser.GREEK_CAPITAL_LETTER_DELTA = 70;
ZOperatorParser.GREEK_CAPITAL_LETTER_XI = 71;
ZOperatorParser.MATHEMATICAL_DOUBLE_STRUCK_CAPITAL_A = 72;
ZOperatorParser.DOUBLE_STRUCK_CAPITAL_N = 73;
ZOperatorParser.MODIFIER_LETTER_PRIME = 74;
ZOperatorParser.EXCLAMATION_MARK = 75;
ZOperatorParser.QUESTION_MARK = 76;
ZOperatorParser.NORTH_EAST_ARROW = 77;
ZOperatorParser.SOUTH_WEST_ARROW = 78;
ZOperatorParser.SOUTH_EAST_ARROW = 79;
ZOperatorParser.NORTH_WEST_ARROW = 80;
ZOperatorParser.RIGHT_TACK = 81;
ZOperatorParser.BIG_REVERSE_SOLIDUS = 82;
ZOperatorParser.PLUS_SIGN = 83;
ZOperatorParser.MATHEMATICAL_TOOLKIT_SYMBOLS = 84;
ZOperatorParser.LEFT_RIGHT_ARROW = 85;
ZOperatorParser.RIGHTWARDS_ARROW = 86;
ZOperatorParser.NOT_EQUAL_TO = 87;
ZOperatorParser.NOT_AN_ELEMENT_OF = 88;
ZOperatorParser.EMPTY_SET = 89;
ZOperatorParser.SUBSET_OF_OR_EQUAL_TO = 90;
ZOperatorParser.SUBSET_OF = 91;
ZOperatorParser.UNION = 92;
ZOperatorParser.INTERSECTION = 93;
ZOperatorParser.SET_MINUS = 94;
ZOperatorParser.CIRCLED_MINUS = 95;
ZOperatorParser.N_ARY_UNION = 96;
ZOperatorParser.N_ARY_INTERSECTION = 97;
ZOperatorParser.MATHEMATICAL_DOUBLE_STRUCK_CAPITAL_F = 98;
ZOperatorParser.RIGHTWARDS_ARROW_FROM_BAR = 99;
ZOperatorParser.RELATIONAL_COMPOSITION = 100;
ZOperatorParser.RING_OPERATOR = 101;
ZOperatorParser.WHITE_LEFT_POINTING_TRIANGLE = 102;
ZOperatorParser.WHITE_RIGHT_POINTING_TRIANGLE = 103;
ZOperatorParser.DOMAIN_ANTIRESTRICTION = 104;
ZOperatorParser.RANGE_ANTIRESTRICTION = 105;
ZOperatorParser.TILDE_OPERATOR = 106;
ZOperatorParser.LEFT_IMAGE_BRACKET = 107;
ZOperatorParser.RIGHT_IMAGE_BRACKET = 108;
ZOperatorParser.CIRCLED_PLUS = 109;
ZOperatorParser.RIGHTWARDS_ARROW_WITH_VERTICAL_STROKE = 110;
ZOperatorParser.RIGHTWARDS_ARROW_WITH_TAIL_WITH_VERTICAL_STROKE = 111;
ZOperatorParser.RIGHTWARDS_ARROW_WITH_TAIL = 112;
ZOperatorParser.RIGHTWARDS_TWO_HEADED_ARROW_WITH_VERTICAL_STROKE = 113;
ZOperatorParser.RIGHTWARDS_TWO_HEADED_ARROW = 114;
ZOperatorParser.RIGHTWARDS_TWO_HEADED_ARROW_WITH_TAIL = 115;
ZOperatorParser.RIGHTWARDS_ARROW_WITH_DOUBLE_VERTICAL_STROKE = 116;
ZOperatorParser.RIGHTWARDS_ARROW_WITH_TAIL_WITH_DOUBLE_VERTICAL_STROKE = 117;
ZOperatorParser.DOUBLE_STRUCK_CAPITAL_Z = 118;
ZOperatorParser.HYPHEN_MINUS = 119;
ZOperatorParser.MINUS_SIGN = 120;
ZOperatorParser.LESS_THAN_OR_EQUAL_TO = 121;
ZOperatorParser.LESS_THAN_SIGN = 122;
ZOperatorParser.GREATER_THAN_OR_EQUAL_TO = 123;
ZOperatorParser.GREATER_THAN_SIGN = 124;
ZOperatorParser.ASTERISK = 125;
ZOperatorParser.NUMBER_SIGN = 126;
ZOperatorParser.CHARACTER_TIE = 127;
ZOperatorParser.UPWARDS_HARPOON_WITH_BARB_LEFTWARDS = 128;
ZOperatorParser.UPWARDS_HARPOON_WITH_BARB_RIGHTWARDS = 129;
ZOperatorParser.LEFT_ANGLE_BRACKET = 130;
ZOperatorParser.RIGHT_ANGLE_BRACKET = 131;
ZOperatorParser.ID = 132;
ZOperatorParser.PREP = 133;
ZOperatorParser.PRE = 134;
ZOperatorParser.POSTP = 135;
ZOperatorParser.POST = 136;
ZOperatorParser.IP = 137;
ZOperatorParser.I = 138;
ZOperatorParser.LP = 139;
ZOperatorParser.L = 140;
ZOperatorParser.ELP = 141;
ZOperatorParser.EL = 142;
ZOperatorParser.ERP = 143;
ZOperatorParser.ER = 144;
ZOperatorParser.SRP = 145;
ZOperatorParser.SR = 146;
ZOperatorParser.EREP = 147;
ZOperatorParser.ERE = 148;
ZOperatorParser.SREP = 149;
ZOperatorParser.SRE = 150;
ZOperatorParser.ES = 151;
ZOperatorParser.SS = 152;
ZOperatorParser.UNKNOWN = 153;
ZOperatorParser.NLCHAR = 154;

ZOperatorParser.RULE_specification = 0;
ZOperatorParser.RULE_section = 1;
ZOperatorParser.RULE_paragraph = 2;
ZOperatorParser.RULE_formals = 3;
ZOperatorParser.RULE_operatorTemplate = 4;
ZOperatorParser.RULE_categoryTemplate = 5;
ZOperatorParser.RULE_prec = 6;
ZOperatorParser.RULE_assoc = 7;
ZOperatorParser.RULE_template = 8;
ZOperatorParser.RULE_prefixTemplate = 9;
ZOperatorParser.RULE_postfixTemplate = 10;
ZOperatorParser.RULE_infixTemplate = 11;
ZOperatorParser.RULE_nofixTemplate = 12;
ZOperatorParser.RULE_optArgName = 13;
ZOperatorParser.RULE_optListName = 14;
ZOperatorParser.RULE_argName = 15;
ZOperatorParser.RULE_listName = 16;
ZOperatorParser.RULE_prefixName = 17;
ZOperatorParser.RULE_postfixName = 18;
ZOperatorParser.RULE_infixName = 19;
ZOperatorParser.RULE_nofixName = 20;


function SpecificationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ZOperatorParser.RULE_specification;
    return this;
}

SpecificationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SpecificationContext.prototype.constructor = SpecificationContext;

SpecificationContext.prototype.EOF = function() {
    return this.getToken(ZOperatorParser.EOF, 0);
};

SpecificationContext.prototype.TEXT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ZOperatorParser.TEXT);
    } else {
        return this.getToken(ZOperatorParser.TEXT, i);
    }
};


SpecificationContext.prototype.section = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SectionContext);
    } else {
        return this.getTypedRuleContext(SectionContext,i);
    }
};

SpecificationContext.prototype.paragraph = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ParagraphContext);
    } else {
        return this.getTypedRuleContext(ParagraphContext,i);
    }
};

SpecificationContext.prototype.enterRule = function(listener) {
    if(listener instanceof ZOperatorParserListener ) {
        listener.enterSpecification(this);
	}
};

SpecificationContext.prototype.exitRule = function(listener) {
    if(listener instanceof ZOperatorParserListener ) {
        listener.exitSpecification(this);
	}
};




ZOperatorParser.SpecificationContext = SpecificationContext;

ZOperatorParser.prototype.specification = function() {

    var localctx = new SpecificationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, ZOperatorParser.RULE_specification);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 47;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ZOperatorParser.ZED) | (1 << ZOperatorParser.SCH) | (1 << ZOperatorParser.AX) | (1 << ZOperatorParser.TEXT))) !== 0)) {
            this.state = 45;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
            switch(la_) {
            case 1:
                this.state = 42;
                this.match(ZOperatorParser.TEXT);
                break;

            case 2:
                this.state = 43;
                this.section();
                break;

            case 3:
                this.state = 44;
                this.paragraph();
                break;

            }
            this.state = 49;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 50;
        this.match(ZOperatorParser.EOF);
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
};


function SectionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ZOperatorParser.RULE_section;
    return this;
}

SectionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SectionContext.prototype.constructor = SectionContext;


 
SectionContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function BaseSectionContext(parser, ctx) {
	SectionContext.call(this, parser);
    SectionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BaseSectionContext.prototype = Object.create(SectionContext.prototype);
BaseSectionContext.prototype.constructor = BaseSectionContext;

ZOperatorParser.BaseSectionContext = BaseSectionContext;

BaseSectionContext.prototype.ZED = function() {
    return this.getToken(ZOperatorParser.ZED, 0);
};

BaseSectionContext.prototype.SECTION = function() {
    return this.getToken(ZOperatorParser.SECTION, 0);
};

BaseSectionContext.prototype.NAME = function() {
    return this.getToken(ZOperatorParser.NAME, 0);
};

BaseSectionContext.prototype.END = function() {
    return this.getToken(ZOperatorParser.END, 0);
};

BaseSectionContext.prototype.paragraph = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ParagraphContext);
    } else {
        return this.getTypedRuleContext(ParagraphContext,i);
    }
};
BaseSectionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ZOperatorParserListener ) {
        listener.enterBaseSection(this);
	}
};

BaseSectionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ZOperatorParserListener ) {
        listener.exitBaseSection(this);
	}
};


function InheritingSectionContext(parser, ctx) {
	SectionContext.call(this, parser);
    SectionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

InheritingSectionContext.prototype = Object.create(SectionContext.prototype);
InheritingSectionContext.prototype.constructor = InheritingSectionContext;

ZOperatorParser.InheritingSectionContext = InheritingSectionContext;

InheritingSectionContext.prototype.ZED = function() {
    return this.getToken(ZOperatorParser.ZED, 0);
};

InheritingSectionContext.prototype.SECTION = function() {
    return this.getToken(ZOperatorParser.SECTION, 0);
};

InheritingSectionContext.prototype.NAME = function() {
    return this.getToken(ZOperatorParser.NAME, 0);
};

InheritingSectionContext.prototype.PARENTS = function() {
    return this.getToken(ZOperatorParser.PARENTS, 0);
};

InheritingSectionContext.prototype.END = function() {
    return this.getToken(ZOperatorParser.END, 0);
};

InheritingSectionContext.prototype.formals = function() {
    return this.getTypedRuleContext(FormalsContext,0);
};

InheritingSectionContext.prototype.paragraph = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ParagraphContext);
    } else {
        return this.getTypedRuleContext(ParagraphContext,i);
    }
};
InheritingSectionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ZOperatorParserListener ) {
        listener.enterInheritingSection(this);
	}
};

InheritingSectionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ZOperatorParserListener ) {
        listener.exitInheritingSection(this);
	}
};



ZOperatorParser.SectionContext = SectionContext;

ZOperatorParser.prototype.section = function() {

    var localctx = new SectionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, ZOperatorParser.RULE_section);
    var _la = 0; // Token type
    try {
        this.state = 76;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
        switch(la_) {
        case 1:
            localctx = new InheritingSectionContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 52;
            this.match(ZOperatorParser.ZED);
            this.state = 53;
            this.match(ZOperatorParser.SECTION);
            this.state = 54;
            this.match(ZOperatorParser.NAME);
            this.state = 55;
            this.match(ZOperatorParser.PARENTS);
            this.state = 57;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===ZOperatorParser.NAME) {
                this.state = 56;
                this.formals();
            }

            this.state = 59;
            this.match(ZOperatorParser.END);
            this.state = 63;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 60;
                    this.paragraph(); 
                }
                this.state = 65;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
            }

            break;

        case 2:
            localctx = new BaseSectionContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 66;
            this.match(ZOperatorParser.ZED);
            this.state = 67;
            this.match(ZOperatorParser.SECTION);
            this.state = 68;
            this.match(ZOperatorParser.NAME);
            this.state = 69;
            this.match(ZOperatorParser.END);
            this.state = 73;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 70;
                    this.paragraph(); 
                }
                this.state = 75;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
            }

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
};


function ParagraphContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ZOperatorParser.RULE_paragraph;
    return this;
}

ParagraphContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParagraphContext.prototype.constructor = ParagraphContext;


 
ParagraphContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function NONOperatorTemplateParagraphContext(parser, ctx) {
	ParagraphContext.call(this, parser);
    ParagraphContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NONOperatorTemplateParagraphContext.prototype = Object.create(ParagraphContext.prototype);
NONOperatorTemplateParagraphContext.prototype.constructor = NONOperatorTemplateParagraphContext;

ZOperatorParser.NONOperatorTemplateParagraphContext = NONOperatorTemplateParagraphContext;

NONOperatorTemplateParagraphContext.prototype.ZED = function() {
    return this.getToken(ZOperatorParser.ZED, 0);
};

NONOperatorTemplateParagraphContext.prototype.END = function() {
    return this.getToken(ZOperatorParser.END, 0);
};
NONOperatorTemplateParagraphContext.prototype.enterRule = function(listener) {
    if(listener instanceof ZOperatorParserListener ) {
        listener.enterNONOperatorTemplateParagraph(this);
	}
};

NONOperatorTemplateParagraphContext.prototype.exitRule = function(listener) {
    if(listener instanceof ZOperatorParserListener ) {
        listener.exitNONOperatorTemplateParagraph(this);
	}
};


function OperatorTemplateParagraphContext(parser, ctx) {
	ParagraphContext.call(this, parser);
    ParagraphContext.prototype.copyFrom.call(this, ctx);
    return this;
}

OperatorTemplateParagraphContext.prototype = Object.create(ParagraphContext.prototype);
OperatorTemplateParagraphContext.prototype.constructor = OperatorTemplateParagraphContext;

ZOperatorParser.OperatorTemplateParagraphContext = OperatorTemplateParagraphContext;

OperatorTemplateParagraphContext.prototype.ZED = function() {
    return this.getToken(ZOperatorParser.ZED, 0);
};

OperatorTemplateParagraphContext.prototype.operatorTemplate = function() {
    return this.getTypedRuleContext(OperatorTemplateContext,0);
};

OperatorTemplateParagraphContext.prototype.END = function() {
    return this.getToken(ZOperatorParser.END, 0);
};
OperatorTemplateParagraphContext.prototype.enterRule = function(listener) {
    if(listener instanceof ZOperatorParserListener ) {
        listener.enterOperatorTemplateParagraph(this);
	}
};

OperatorTemplateParagraphContext.prototype.exitRule = function(listener) {
    if(listener instanceof ZOperatorParserListener ) {
        listener.exitOperatorTemplateParagraph(this);
	}
};


function SchemaDefinitionParagraphContext(parser, ctx) {
	ParagraphContext.call(this, parser);
    ParagraphContext.prototype.copyFrom.call(this, ctx);
    return this;
}

SchemaDefinitionParagraphContext.prototype = Object.create(ParagraphContext.prototype);
SchemaDefinitionParagraphContext.prototype.constructor = SchemaDefinitionParagraphContext;

ZOperatorParser.SchemaDefinitionParagraphContext = SchemaDefinitionParagraphContext;

SchemaDefinitionParagraphContext.prototype.SCH = function() {
    return this.getToken(ZOperatorParser.SCH, 0);
};

SchemaDefinitionParagraphContext.prototype.END = function() {
    return this.getToken(ZOperatorParser.END, 0);
};
SchemaDefinitionParagraphContext.prototype.enterRule = function(listener) {
    if(listener instanceof ZOperatorParserListener ) {
        listener.enterSchemaDefinitionParagraph(this);
	}
};

SchemaDefinitionParagraphContext.prototype.exitRule = function(listener) {
    if(listener instanceof ZOperatorParserListener ) {
        listener.exitSchemaDefinitionParagraph(this);
	}
};


function AxiomaticDescriptionParagraphContext(parser, ctx) {
	ParagraphContext.call(this, parser);
    ParagraphContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AxiomaticDescriptionParagraphContext.prototype = Object.create(ParagraphContext.prototype);
AxiomaticDescriptionParagraphContext.prototype.constructor = AxiomaticDescriptionParagraphContext;

ZOperatorParser.AxiomaticDescriptionParagraphContext = AxiomaticDescriptionParagraphContext;

AxiomaticDescriptionParagraphContext.prototype.AX = function() {
    return this.getToken(ZOperatorParser.AX, 0);
};

AxiomaticDescriptionParagraphContext.prototype.END = function() {
    return this.getToken(ZOperatorParser.END, 0);
};
AxiomaticDescriptionParagraphContext.prototype.enterRule = function(listener) {
    if(listener instanceof ZOperatorParserListener ) {
        listener.enterAxiomaticDescriptionParagraph(this);
	}
};

AxiomaticDescriptionParagraphContext.prototype.exitRule = function(listener) {
    if(listener instanceof ZOperatorParserListener ) {
        listener.exitAxiomaticDescriptionParagraph(this);
	}
};



ZOperatorParser.ParagraphContext = ParagraphContext;

ZOperatorParser.prototype.paragraph = function() {

    var localctx = new ParagraphContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, ZOperatorParser.RULE_paragraph);
    try {
        this.state = 106;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
        switch(la_) {
        case 1:
            localctx = new OperatorTemplateParagraphContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 78;
            this.match(ZOperatorParser.ZED);
            this.state = 79;
            this.operatorTemplate();
            this.state = 80;
            this.match(ZOperatorParser.END);
            break;

        case 2:
            localctx = new AxiomaticDescriptionParagraphContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 82;
            this.match(ZOperatorParser.AX);
            this.state = 86;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,6,this._ctx)
            while(_alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1+1) {
                    this.state = 83;
                    this.matchWildcard(); 
                }
                this.state = 88;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,6,this._ctx);
            }

            this.state = 89;
            this.match(ZOperatorParser.END);
            break;

        case 3:
            localctx = new SchemaDefinitionParagraphContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 90;
            this.match(ZOperatorParser.SCH);
            this.state = 94;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
            while(_alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1+1) {
                    this.state = 91;
                    this.matchWildcard(); 
                }
                this.state = 96;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,7,this._ctx);
            }

            this.state = 97;
            this.match(ZOperatorParser.END);
            break;

        case 4:
            localctx = new NONOperatorTemplateParagraphContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 98;
            this.match(ZOperatorParser.ZED);
            this.state = 102;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
            while(_alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1+1) {
                    this.state = 99;
                    this.matchWildcard(); 
                }
                this.state = 104;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,8,this._ctx);
            }

            this.state = 105;
            this.match(ZOperatorParser.END);
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
};


function FormalsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ZOperatorParser.RULE_formals;
    return this;
}

FormalsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FormalsContext.prototype.constructor = FormalsContext;

FormalsContext.prototype.NAME = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ZOperatorParser.NAME);
    } else {
        return this.getToken(ZOperatorParser.NAME, i);
    }
};


FormalsContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ZOperatorParser.COMMA);
    } else {
        return this.getToken(ZOperatorParser.COMMA, i);
    }
};


FormalsContext.prototype.enterRule = function(listener) {
    if(listener instanceof ZOperatorParserListener ) {
        listener.enterFormals(this);
	}
};

FormalsContext.prototype.exitRule = function(listener) {
    if(listener instanceof ZOperatorParserListener ) {
        listener.exitFormals(this);
	}
};




ZOperatorParser.FormalsContext = FormalsContext;

ZOperatorParser.prototype.formals = function() {

    var localctx = new FormalsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, ZOperatorParser.RULE_formals);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 108;
        this.match(ZOperatorParser.NAME);
        this.state = 113;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ZOperatorParser.COMMA) {
            this.state = 109;
            this.match(ZOperatorParser.COMMA);
            this.state = 110;
            this.match(ZOperatorParser.NAME);
            this.state = 115;
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
};


function OperatorTemplateContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ZOperatorParser.RULE_operatorTemplate;
    return this;
}

OperatorTemplateContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OperatorTemplateContext.prototype.constructor = OperatorTemplateContext;


 
OperatorTemplateContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function RelationOperatorTemplateContext(parser, ctx) {
	OperatorTemplateContext.call(this, parser);
    OperatorTemplateContext.prototype.copyFrom.call(this, ctx);
    return this;
}

RelationOperatorTemplateContext.prototype = Object.create(OperatorTemplateContext.prototype);
RelationOperatorTemplateContext.prototype.constructor = RelationOperatorTemplateContext;

ZOperatorParser.RelationOperatorTemplateContext = RelationOperatorTemplateContext;

RelationOperatorTemplateContext.prototype.RELATION = function() {
    return this.getToken(ZOperatorParser.RELATION, 0);
};

RelationOperatorTemplateContext.prototype.template = function() {
    return this.getTypedRuleContext(TemplateContext,0);
};
RelationOperatorTemplateContext.prototype.enterRule = function(listener) {
    if(listener instanceof ZOperatorParserListener ) {
        listener.enterRelationOperatorTemplate(this);
	}
};

RelationOperatorTemplateContext.prototype.exitRule = function(listener) {
    if(listener instanceof ZOperatorParserListener ) {
        listener.exitRelationOperatorTemplate(this);
	}
};


function GenericOperatorTemplateContext(parser, ctx) {
	OperatorTemplateContext.call(this, parser);
    OperatorTemplateContext.prototype.copyFrom.call(this, ctx);
    return this;
}

GenericOperatorTemplateContext.prototype = Object.create(OperatorTemplateContext.prototype);
GenericOperatorTemplateContext.prototype.constructor = GenericOperatorTemplateContext;

ZOperatorParser.GenericOperatorTemplateContext = GenericOperatorTemplateContext;

GenericOperatorTemplateContext.prototype.GENERIC = function() {
    return this.getToken(ZOperatorParser.GENERIC, 0);
};

GenericOperatorTemplateContext.prototype.categoryTemplate = function() {
    return this.getTypedRuleContext(CategoryTemplateContext,0);
};
GenericOperatorTemplateContext.prototype.enterRule = function(listener) {
    if(listener instanceof ZOperatorParserListener ) {
        listener.enterGenericOperatorTemplate(this);
	}
};

GenericOperatorTemplateContext.prototype.exitRule = function(listener) {
    if(listener instanceof ZOperatorParserListener ) {
        listener.exitGenericOperatorTemplate(this);
	}
};


function FunctionOperatorTemplateContext(parser, ctx) {
	OperatorTemplateContext.call(this, parser);
    OperatorTemplateContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FunctionOperatorTemplateContext.prototype = Object.create(OperatorTemplateContext.prototype);
FunctionOperatorTemplateContext.prototype.constructor = FunctionOperatorTemplateContext;

ZOperatorParser.FunctionOperatorTemplateContext = FunctionOperatorTemplateContext;

FunctionOperatorTemplateContext.prototype.FUNCTION = function() {
    return this.getToken(ZOperatorParser.FUNCTION, 0);
};

FunctionOperatorTemplateContext.prototype.categoryTemplate = function() {
    return this.getTypedRuleContext(CategoryTemplateContext,0);
};
FunctionOperatorTemplateContext.prototype.enterRule = function(listener) {
    if(listener instanceof ZOperatorParserListener ) {
        listener.enterFunctionOperatorTemplate(this);
	}
};

FunctionOperatorTemplateContext.prototype.exitRule = function(listener) {
    if(listener instanceof ZOperatorParserListener ) {
        listener.exitFunctionOperatorTemplate(this);
	}
};



ZOperatorParser.OperatorTemplateContext = OperatorTemplateContext;

ZOperatorParser.prototype.operatorTemplate = function() {

    var localctx = new OperatorTemplateContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, ZOperatorParser.RULE_operatorTemplate);
    try {
        this.state = 122;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ZOperatorParser.RELATION:
            localctx = new RelationOperatorTemplateContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 116;
            this.match(ZOperatorParser.RELATION);
            this.state = 117;
            this.template();
            break;
        case ZOperatorParser.FUNCTION:
            localctx = new FunctionOperatorTemplateContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 118;
            this.match(ZOperatorParser.FUNCTION);
            this.state = 119;
            this.categoryTemplate();
            break;
        case ZOperatorParser.GENERIC:
            localctx = new GenericOperatorTemplateContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 120;
            this.match(ZOperatorParser.GENERIC);
            this.state = 121;
            this.categoryTemplate();
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
};


function CategoryTemplateContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ZOperatorParser.RULE_categoryTemplate;
    return this;
}

CategoryTemplateContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CategoryTemplateContext.prototype.constructor = CategoryTemplateContext;

CategoryTemplateContext.prototype.prefixTemplate = function() {
    return this.getTypedRuleContext(PrefixTemplateContext,0);
};

CategoryTemplateContext.prototype.postfixTemplate = function() {
    return this.getTypedRuleContext(PostfixTemplateContext,0);
};

CategoryTemplateContext.prototype.prec = function() {
    return this.getTypedRuleContext(PrecContext,0);
};

CategoryTemplateContext.prototype.assoc = function() {
    return this.getTypedRuleContext(AssocContext,0);
};

CategoryTemplateContext.prototype.infixTemplate = function() {
    return this.getTypedRuleContext(InfixTemplateContext,0);
};

CategoryTemplateContext.prototype.nofixTemplate = function() {
    return this.getTypedRuleContext(NofixTemplateContext,0);
};

CategoryTemplateContext.prototype.enterRule = function(listener) {
    if(listener instanceof ZOperatorParserListener ) {
        listener.enterCategoryTemplate(this);
	}
};

CategoryTemplateContext.prototype.exitRule = function(listener) {
    if(listener instanceof ZOperatorParserListener ) {
        listener.exitCategoryTemplate(this);
	}
};




ZOperatorParser.CategoryTemplateContext = CategoryTemplateContext;

ZOperatorParser.prototype.categoryTemplate = function() {

    var localctx = new CategoryTemplateContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, ZOperatorParser.RULE_categoryTemplate);
    try {
        this.state = 131;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 124;
            this.prefixTemplate();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 125;
            this.postfixTemplate();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 126;
            this.prec();
            this.state = 127;
            this.assoc();
            this.state = 128;
            this.infixTemplate();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 130;
            this.nofixTemplate();
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
};


function PrecContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ZOperatorParser.RULE_prec;
    return this;
}

PrecContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PrecContext.prototype.constructor = PrecContext;

PrecContext.prototype.NUMERAL = function() {
    return this.getToken(ZOperatorParser.NUMERAL, 0);
};

PrecContext.prototype.enterRule = function(listener) {
    if(listener instanceof ZOperatorParserListener ) {
        listener.enterPrec(this);
	}
};

PrecContext.prototype.exitRule = function(listener) {
    if(listener instanceof ZOperatorParserListener ) {
        listener.exitPrec(this);
	}
};




ZOperatorParser.PrecContext = PrecContext;

ZOperatorParser.prototype.prec = function() {

    var localctx = new PrecContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, ZOperatorParser.RULE_prec);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 133;
        this.match(ZOperatorParser.NUMERAL);
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
};


function AssocContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ZOperatorParser.RULE_assoc;
    return this;
}

AssocContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AssocContext.prototype.constructor = AssocContext;

AssocContext.prototype.LEFTASSOC = function() {
    return this.getToken(ZOperatorParser.LEFTASSOC, 0);
};

AssocContext.prototype.RIGHTASSOC = function() {
    return this.getToken(ZOperatorParser.RIGHTASSOC, 0);
};

AssocContext.prototype.enterRule = function(listener) {
    if(listener instanceof ZOperatorParserListener ) {
        listener.enterAssoc(this);
	}
};

AssocContext.prototype.exitRule = function(listener) {
    if(listener instanceof ZOperatorParserListener ) {
        listener.exitAssoc(this);
	}
};




ZOperatorParser.AssocContext = AssocContext;

ZOperatorParser.prototype.assoc = function() {

    var localctx = new AssocContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, ZOperatorParser.RULE_assoc);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 135;
        _la = this._input.LA(1);
        if(!(_la===ZOperatorParser.LEFTASSOC || _la===ZOperatorParser.RIGHTASSOC)) {
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
};


function TemplateContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ZOperatorParser.RULE_template;
    return this;
}

TemplateContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TemplateContext.prototype.constructor = TemplateContext;

TemplateContext.prototype.prefixTemplate = function() {
    return this.getTypedRuleContext(PrefixTemplateContext,0);
};

TemplateContext.prototype.postfixTemplate = function() {
    return this.getTypedRuleContext(PostfixTemplateContext,0);
};

TemplateContext.prototype.infixTemplate = function() {
    return this.getTypedRuleContext(InfixTemplateContext,0);
};

TemplateContext.prototype.nofixTemplate = function() {
    return this.getTypedRuleContext(NofixTemplateContext,0);
};

TemplateContext.prototype.enterRule = function(listener) {
    if(listener instanceof ZOperatorParserListener ) {
        listener.enterTemplate(this);
	}
};

TemplateContext.prototype.exitRule = function(listener) {
    if(listener instanceof ZOperatorParserListener ) {
        listener.exitTemplate(this);
	}
};




ZOperatorParser.TemplateContext = TemplateContext;

ZOperatorParser.prototype.template = function() {

    var localctx = new TemplateContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, ZOperatorParser.RULE_template);
    try {
        this.state = 141;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 137;
            this.prefixTemplate();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 138;
            this.postfixTemplate();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 139;
            this.infixTemplate();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 140;
            this.nofixTemplate();
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
};


function PrefixTemplateContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ZOperatorParser.RULE_prefixTemplate;
    return this;
}

PrefixTemplateContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PrefixTemplateContext.prototype.constructor = PrefixTemplateContext;

PrefixTemplateContext.prototype.LEFT_PARENTHESIS = function() {
    return this.getToken(ZOperatorParser.LEFT_PARENTHESIS, 0);
};

PrefixTemplateContext.prototype.RIGHT_PARENTHESIS = function() {
    return this.getToken(ZOperatorParser.RIGHT_PARENTHESIS, 0);
};

PrefixTemplateContext.prototype.prefixName = function() {
    return this.getTypedRuleContext(PrefixNameContext,0);
};

PrefixTemplateContext.prototype.POWERSET = function() {
    return this.getToken(ZOperatorParser.POWERSET, 0);
};

PrefixTemplateContext.prototype.ARGUMENT = function() {
    return this.getToken(ZOperatorParser.ARGUMENT, 0);
};

PrefixTemplateContext.prototype.enterRule = function(listener) {
    if(listener instanceof ZOperatorParserListener ) {
        listener.enterPrefixTemplate(this);
	}
};

PrefixTemplateContext.prototype.exitRule = function(listener) {
    if(listener instanceof ZOperatorParserListener ) {
        listener.exitPrefixTemplate(this);
	}
};




ZOperatorParser.PrefixTemplateContext = PrefixTemplateContext;

ZOperatorParser.prototype.prefixTemplate = function() {

    var localctx = new PrefixTemplateContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, ZOperatorParser.RULE_prefixTemplate);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 143;
        this.match(ZOperatorParser.LEFT_PARENTHESIS);
        this.state = 147;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ZOperatorParser.NAME:
            this.state = 144;
            this.prefixName();
            break;
        case ZOperatorParser.POWERSET:
            this.state = 145;
            this.match(ZOperatorParser.POWERSET);
            this.state = 146;
            this.match(ZOperatorParser.ARGUMENT);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 149;
        this.match(ZOperatorParser.RIGHT_PARENTHESIS);
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
};


function PostfixTemplateContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ZOperatorParser.RULE_postfixTemplate;
    return this;
}

PostfixTemplateContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PostfixTemplateContext.prototype.constructor = PostfixTemplateContext;

PostfixTemplateContext.prototype.LEFT_PARENTHESIS = function() {
    return this.getToken(ZOperatorParser.LEFT_PARENTHESIS, 0);
};

PostfixTemplateContext.prototype.postfixName = function() {
    return this.getTypedRuleContext(PostfixNameContext,0);
};

PostfixTemplateContext.prototype.RIGHT_PARENTHESIS = function() {
    return this.getToken(ZOperatorParser.RIGHT_PARENTHESIS, 0);
};

PostfixTemplateContext.prototype.enterRule = function(listener) {
    if(listener instanceof ZOperatorParserListener ) {
        listener.enterPostfixTemplate(this);
	}
};

PostfixTemplateContext.prototype.exitRule = function(listener) {
    if(listener instanceof ZOperatorParserListener ) {
        listener.exitPostfixTemplate(this);
	}
};




ZOperatorParser.PostfixTemplateContext = PostfixTemplateContext;

ZOperatorParser.prototype.postfixTemplate = function() {

    var localctx = new PostfixTemplateContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, ZOperatorParser.RULE_postfixTemplate);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 151;
        this.match(ZOperatorParser.LEFT_PARENTHESIS);
        this.state = 152;
        this.postfixName();
        this.state = 153;
        this.match(ZOperatorParser.RIGHT_PARENTHESIS);
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
};


function InfixTemplateContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ZOperatorParser.RULE_infixTemplate;
    return this;
}

InfixTemplateContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
InfixTemplateContext.prototype.constructor = InfixTemplateContext;

InfixTemplateContext.prototype.LEFT_PARENTHESIS = function() {
    return this.getToken(ZOperatorParser.LEFT_PARENTHESIS, 0);
};

InfixTemplateContext.prototype.infixName = function() {
    return this.getTypedRuleContext(InfixNameContext,0);
};

InfixTemplateContext.prototype.RIGHT_PARENTHESIS = function() {
    return this.getToken(ZOperatorParser.RIGHT_PARENTHESIS, 0);
};

InfixTemplateContext.prototype.enterRule = function(listener) {
    if(listener instanceof ZOperatorParserListener ) {
        listener.enterInfixTemplate(this);
	}
};

InfixTemplateContext.prototype.exitRule = function(listener) {
    if(listener instanceof ZOperatorParserListener ) {
        listener.exitInfixTemplate(this);
	}
};




ZOperatorParser.InfixTemplateContext = InfixTemplateContext;

ZOperatorParser.prototype.infixTemplate = function() {

    var localctx = new InfixTemplateContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, ZOperatorParser.RULE_infixTemplate);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 155;
        this.match(ZOperatorParser.LEFT_PARENTHESIS);
        this.state = 156;
        this.infixName();
        this.state = 157;
        this.match(ZOperatorParser.RIGHT_PARENTHESIS);
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
};


function NofixTemplateContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ZOperatorParser.RULE_nofixTemplate;
    return this;
}

NofixTemplateContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NofixTemplateContext.prototype.constructor = NofixTemplateContext;

NofixTemplateContext.prototype.LEFT_PARENTHESIS = function() {
    return this.getToken(ZOperatorParser.LEFT_PARENTHESIS, 0);
};

NofixTemplateContext.prototype.nofixName = function() {
    return this.getTypedRuleContext(NofixNameContext,0);
};

NofixTemplateContext.prototype.RIGHT_PARENTHESIS = function() {
    return this.getToken(ZOperatorParser.RIGHT_PARENTHESIS, 0);
};

NofixTemplateContext.prototype.enterRule = function(listener) {
    if(listener instanceof ZOperatorParserListener ) {
        listener.enterNofixTemplate(this);
	}
};

NofixTemplateContext.prototype.exitRule = function(listener) {
    if(listener instanceof ZOperatorParserListener ) {
        listener.exitNofixTemplate(this);
	}
};




ZOperatorParser.NofixTemplateContext = NofixTemplateContext;

ZOperatorParser.prototype.nofixTemplate = function() {

    var localctx = new NofixTemplateContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, ZOperatorParser.RULE_nofixTemplate);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 159;
        this.match(ZOperatorParser.LEFT_PARENTHESIS);
        this.state = 160;
        this.nofixName();
        this.state = 161;
        this.match(ZOperatorParser.RIGHT_PARENTHESIS);
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
};


function OptArgNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ZOperatorParser.RULE_optArgName;
    return this;
}

OptArgNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OptArgNameContext.prototype.constructor = OptArgNameContext;

OptArgNameContext.prototype.ARGUMENT = function() {
    return this.getToken(ZOperatorParser.ARGUMENT, 0);
};

OptArgNameContext.prototype.NAME = function() {
    return this.getToken(ZOperatorParser.NAME, 0);
};

OptArgNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof ZOperatorParserListener ) {
        listener.enterOptArgName(this);
	}
};

OptArgNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof ZOperatorParserListener ) {
        listener.exitOptArgName(this);
	}
};




ZOperatorParser.OptArgNameContext = OptArgNameContext;

ZOperatorParser.prototype.optArgName = function() {

    var localctx = new OptArgNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, ZOperatorParser.RULE_optArgName);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 163;
        this.match(ZOperatorParser.ARGUMENT);
        this.state = 164;
        this.match(ZOperatorParser.NAME);
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
};


function OptListNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ZOperatorParser.RULE_optListName;
    return this;
}

OptListNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OptListNameContext.prototype.constructor = OptListNameContext;

OptListNameContext.prototype.LIST = function() {
    return this.getToken(ZOperatorParser.LIST, 0);
};

OptListNameContext.prototype.NAME = function() {
    return this.getToken(ZOperatorParser.NAME, 0);
};

OptListNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof ZOperatorParserListener ) {
        listener.enterOptListName(this);
	}
};

OptListNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof ZOperatorParserListener ) {
        listener.exitOptListName(this);
	}
};




ZOperatorParser.OptListNameContext = OptListNameContext;

ZOperatorParser.prototype.optListName = function() {

    var localctx = new OptListNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, ZOperatorParser.RULE_optListName);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 166;
        this.match(ZOperatorParser.LIST);
        this.state = 167;
        this.match(ZOperatorParser.NAME);
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
};


function ArgNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ZOperatorParser.RULE_argName;
    return this;
}

ArgNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArgNameContext.prototype.constructor = ArgNameContext;

ArgNameContext.prototype.ARGUMENT = function() {
    return this.getToken(ZOperatorParser.ARGUMENT, 0);
};

ArgNameContext.prototype.NAME = function() {
    return this.getToken(ZOperatorParser.NAME, 0);
};

ArgNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof ZOperatorParserListener ) {
        listener.enterArgName(this);
	}
};

ArgNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof ZOperatorParserListener ) {
        listener.exitArgName(this);
	}
};




ZOperatorParser.ArgNameContext = ArgNameContext;

ZOperatorParser.prototype.argName = function() {

    var localctx = new ArgNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, ZOperatorParser.RULE_argName);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 169;
        this.match(ZOperatorParser.ARGUMENT);
        this.state = 170;
        this.match(ZOperatorParser.NAME);
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
};


function ListNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ZOperatorParser.RULE_listName;
    return this;
}

ListNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ListNameContext.prototype.constructor = ListNameContext;

ListNameContext.prototype.LIST = function() {
    return this.getToken(ZOperatorParser.LIST, 0);
};

ListNameContext.prototype.NAME = function() {
    return this.getToken(ZOperatorParser.NAME, 0);
};

ListNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof ZOperatorParserListener ) {
        listener.enterListName(this);
	}
};

ListNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof ZOperatorParserListener ) {
        listener.exitListName(this);
	}
};




ZOperatorParser.ListNameContext = ListNameContext;

ZOperatorParser.prototype.listName = function() {

    var localctx = new ListNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, ZOperatorParser.RULE_listName);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 172;
        this.match(ZOperatorParser.LIST);
        this.state = 173;
        this.match(ZOperatorParser.NAME);
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
};


function PrefixNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ZOperatorParser.RULE_prefixName;
    return this;
}

PrefixNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PrefixNameContext.prototype.constructor = PrefixNameContext;

PrefixNameContext.prototype.NAME = function() {
    return this.getToken(ZOperatorParser.NAME, 0);
};

PrefixNameContext.prototype.ARGUMENT = function() {
    return this.getToken(ZOperatorParser.ARGUMENT, 0);
};

PrefixNameContext.prototype.argName = function() {
    return this.getTypedRuleContext(ArgNameContext,0);
};

PrefixNameContext.prototype.listName = function() {
    return this.getTypedRuleContext(ListNameContext,0);
};

PrefixNameContext.prototype.optArgName = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(OptArgNameContext);
    } else {
        return this.getTypedRuleContext(OptArgNameContext,i);
    }
};

PrefixNameContext.prototype.optListName = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(OptListNameContext);
    } else {
        return this.getTypedRuleContext(OptListNameContext,i);
    }
};

PrefixNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof ZOperatorParserListener ) {
        listener.enterPrefixName(this);
	}
};

PrefixNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof ZOperatorParserListener ) {
        listener.exitPrefixName(this);
	}
};




ZOperatorParser.PrefixNameContext = PrefixNameContext;

ZOperatorParser.prototype.prefixName = function() {

    var localctx = new PrefixNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, ZOperatorParser.RULE_prefixName);
    try {
        this.state = 191;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 175;
            this.match(ZOperatorParser.NAME);
            this.state = 176;
            this.match(ZOperatorParser.ARGUMENT);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 177;
            this.match(ZOperatorParser.NAME);
            this.state = 182;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,16,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 180;
                    this._errHandler.sync(this);
                    switch(this._input.LA(1)) {
                    case ZOperatorParser.ARGUMENT:
                        this.state = 178;
                        this.optArgName();
                        break;
                    case ZOperatorParser.LIST:
                        this.state = 179;
                        this.optListName();
                        break;
                    default:
                        throw new antlr4.error.NoViableAltException(this);
                    } 
                }
                this.state = 184;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,16,this._ctx);
            }

            this.state = 187;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case ZOperatorParser.ARGUMENT:
                this.state = 185;
                this.argName();
                break;
            case ZOperatorParser.LIST:
                this.state = 186;
                this.listName();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 189;
            this.match(ZOperatorParser.ARGUMENT);
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
};


function PostfixNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ZOperatorParser.RULE_postfixName;
    return this;
}

PostfixNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PostfixNameContext.prototype.constructor = PostfixNameContext;

PostfixNameContext.prototype.ARGUMENT = function() {
    return this.getToken(ZOperatorParser.ARGUMENT, 0);
};

PostfixNameContext.prototype.NAME = function() {
    return this.getToken(ZOperatorParser.NAME, 0);
};

PostfixNameContext.prototype.argName = function() {
    return this.getTypedRuleContext(ArgNameContext,0);
};

PostfixNameContext.prototype.listName = function() {
    return this.getTypedRuleContext(ListNameContext,0);
};

PostfixNameContext.prototype.optArgName = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(OptArgNameContext);
    } else {
        return this.getTypedRuleContext(OptArgNameContext,i);
    }
};

PostfixNameContext.prototype.optListName = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(OptListNameContext);
    } else {
        return this.getTypedRuleContext(OptListNameContext,i);
    }
};

PostfixNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof ZOperatorParserListener ) {
        listener.enterPostfixName(this);
	}
};

PostfixNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof ZOperatorParserListener ) {
        listener.exitPostfixName(this);
	}
};




ZOperatorParser.PostfixNameContext = PostfixNameContext;

ZOperatorParser.prototype.postfixName = function() {

    var localctx = new PostfixNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, ZOperatorParser.RULE_postfixName);
    try {
        this.state = 208;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 193;
            this.match(ZOperatorParser.ARGUMENT);
            this.state = 194;
            this.match(ZOperatorParser.NAME);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 195;
            this.match(ZOperatorParser.ARGUMENT);
            this.state = 196;
            this.match(ZOperatorParser.NAME);
            this.state = 201;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,20,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 199;
                    this._errHandler.sync(this);
                    switch(this._input.LA(1)) {
                    case ZOperatorParser.ARGUMENT:
                        this.state = 197;
                        this.optArgName();
                        break;
                    case ZOperatorParser.LIST:
                        this.state = 198;
                        this.optListName();
                        break;
                    default:
                        throw new antlr4.error.NoViableAltException(this);
                    } 
                }
                this.state = 203;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,20,this._ctx);
            }

            this.state = 206;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case ZOperatorParser.ARGUMENT:
                this.state = 204;
                this.argName();
                break;
            case ZOperatorParser.LIST:
                this.state = 205;
                this.listName();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
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
};


function InfixNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ZOperatorParser.RULE_infixName;
    return this;
}

InfixNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
InfixNameContext.prototype.constructor = InfixNameContext;

InfixNameContext.prototype.ARGUMENT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ZOperatorParser.ARGUMENT);
    } else {
        return this.getToken(ZOperatorParser.ARGUMENT, i);
    }
};


InfixNameContext.prototype.NAME = function() {
    return this.getToken(ZOperatorParser.NAME, 0);
};

InfixNameContext.prototype.argName = function() {
    return this.getTypedRuleContext(ArgNameContext,0);
};

InfixNameContext.prototype.listName = function() {
    return this.getTypedRuleContext(ListNameContext,0);
};

InfixNameContext.prototype.optArgName = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(OptArgNameContext);
    } else {
        return this.getTypedRuleContext(OptArgNameContext,i);
    }
};

InfixNameContext.prototype.optListName = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(OptListNameContext);
    } else {
        return this.getTypedRuleContext(OptListNameContext,i);
    }
};

InfixNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof ZOperatorParserListener ) {
        listener.enterInfixName(this);
	}
};

InfixNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof ZOperatorParserListener ) {
        listener.exitInfixName(this);
	}
};




ZOperatorParser.InfixNameContext = InfixNameContext;

ZOperatorParser.prototype.infixName = function() {

    var localctx = new InfixNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, ZOperatorParser.RULE_infixName);
    try {
        this.state = 228;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,26,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 210;
            this.match(ZOperatorParser.ARGUMENT);
            this.state = 211;
            this.match(ZOperatorParser.NAME);
            this.state = 212;
            this.match(ZOperatorParser.ARGUMENT);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 213;
            this.match(ZOperatorParser.ARGUMENT);
            this.state = 214;
            this.match(ZOperatorParser.NAME);
            this.state = 219;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,24,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 217;
                    this._errHandler.sync(this);
                    switch(this._input.LA(1)) {
                    case ZOperatorParser.ARGUMENT:
                        this.state = 215;
                        this.optArgName();
                        break;
                    case ZOperatorParser.LIST:
                        this.state = 216;
                        this.optListName();
                        break;
                    default:
                        throw new antlr4.error.NoViableAltException(this);
                    } 
                }
                this.state = 221;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,24,this._ctx);
            }

            this.state = 224;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case ZOperatorParser.ARGUMENT:
                this.state = 222;
                this.argName();
                break;
            case ZOperatorParser.LIST:
                this.state = 223;
                this.listName();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 226;
            this.match(ZOperatorParser.ARGUMENT);
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
};


function NofixNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ZOperatorParser.RULE_nofixName;
    return this;
}

NofixNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NofixNameContext.prototype.constructor = NofixNameContext;

NofixNameContext.prototype.NAME = function() {
    return this.getToken(ZOperatorParser.NAME, 0);
};

NofixNameContext.prototype.argName = function() {
    return this.getTypedRuleContext(ArgNameContext,0);
};

NofixNameContext.prototype.listName = function() {
    return this.getTypedRuleContext(ListNameContext,0);
};

NofixNameContext.prototype.optArgName = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(OptArgNameContext);
    } else {
        return this.getTypedRuleContext(OptArgNameContext,i);
    }
};

NofixNameContext.prototype.optListName = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(OptListNameContext);
    } else {
        return this.getTypedRuleContext(OptListNameContext,i);
    }
};

NofixNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof ZOperatorParserListener ) {
        listener.enterNofixName(this);
	}
};

NofixNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof ZOperatorParserListener ) {
        listener.exitNofixName(this);
	}
};




ZOperatorParser.NofixNameContext = NofixNameContext;

ZOperatorParser.prototype.nofixName = function() {

    var localctx = new NofixNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, ZOperatorParser.RULE_nofixName);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 230;
        this.match(ZOperatorParser.NAME);
        this.state = 235;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,28,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 233;
                this._errHandler.sync(this);
                switch(this._input.LA(1)) {
                case ZOperatorParser.ARGUMENT:
                    this.state = 231;
                    this.optArgName();
                    break;
                case ZOperatorParser.LIST:
                    this.state = 232;
                    this.optListName();
                    break;
                default:
                    throw new antlr4.error.NoViableAltException(this);
                } 
            }
            this.state = 237;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,28,this._ctx);
        }

        this.state = 240;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ZOperatorParser.ARGUMENT:
            this.state = 238;
            this.argName();
            break;
        case ZOperatorParser.LIST:
            this.state = 239;
            this.listName();
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
};


exports.ZOperatorParser = ZOperatorParser;
