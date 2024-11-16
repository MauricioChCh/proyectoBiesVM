// Generated from ./grammar/biesC.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import biesCVisitor from './biesCVisitor.js';

const serializedATN = [4,1,46,391,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,1,0,1,0,3,0,39,8,0,5,0,
41,8,0,10,0,12,0,44,9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,3,1,54,8,1,1,2,1,
2,1,2,1,2,3,2,60,8,2,1,2,1,2,1,3,1,3,3,3,66,8,3,1,3,1,3,3,3,70,8,3,1,3,1,
3,3,3,74,8,3,1,3,1,3,1,4,1,4,3,4,80,8,4,1,4,1,4,3,4,84,8,4,1,4,1,4,3,4,88,
8,4,1,4,1,4,1,4,1,4,3,4,94,8,4,1,4,1,4,3,4,98,8,4,1,4,1,4,3,4,102,8,4,1,
4,1,4,3,4,106,8,4,1,4,1,4,1,4,1,4,5,4,112,8,4,10,4,12,4,115,9,4,3,4,117,
8,4,1,4,1,4,1,4,1,4,3,4,123,8,4,3,4,125,8,4,1,5,1,5,1,5,1,5,5,5,131,8,5,
10,5,12,5,134,9,5,5,5,136,8,5,10,5,12,5,139,9,5,1,5,1,5,1,5,1,5,1,5,1,5,
1,5,5,5,148,8,5,10,5,12,5,151,9,5,5,5,153,8,5,10,5,12,5,156,9,5,1,5,3,5,
159,8,5,1,6,1,6,3,6,163,8,6,1,6,1,6,1,6,1,6,3,6,169,8,6,1,6,1,6,3,6,173,
8,6,1,6,1,6,3,6,177,8,6,1,6,1,6,3,6,181,8,6,1,6,1,6,1,7,1,7,1,7,1,7,3,7,
189,8,7,1,8,1,8,3,8,193,8,8,1,8,1,8,3,8,197,8,8,1,8,1,8,3,8,201,8,8,1,8,
1,8,1,9,1,9,3,9,207,8,9,1,9,1,9,3,9,211,8,9,1,9,1,9,3,9,215,8,9,1,9,1,9,
1,9,1,9,3,9,221,8,9,1,9,1,9,3,9,225,8,9,1,9,1,9,3,9,229,8,9,1,9,1,9,3,9,
233,8,9,1,9,1,9,1,9,1,9,5,9,239,8,9,10,9,12,9,242,9,9,3,9,244,8,9,1,9,1,
9,1,9,1,9,3,9,250,8,9,3,9,252,8,9,1,10,1,10,1,10,1,10,3,10,258,8,10,1,11,
1,11,1,11,1,11,1,11,1,11,1,11,1,11,3,11,268,8,11,1,11,1,11,1,11,1,11,1,11,
1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,
11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,
1,11,1,11,1,11,1,11,1,11,5,11,309,8,11,10,11,12,11,312,9,11,1,12,1,12,1,
12,1,12,1,12,1,12,1,12,1,12,5,12,322,8,12,10,12,12,12,325,9,12,1,12,1,12,
1,12,1,12,1,12,1,12,1,12,5,12,334,8,12,10,12,12,12,337,9,12,1,12,1,12,3,
12,341,8,12,1,13,1,13,1,14,1,14,1,15,1,15,3,15,349,8,15,1,15,1,15,3,15,353,
8,15,1,15,3,15,356,8,15,1,15,1,15,3,15,360,8,15,1,15,1,15,3,15,364,8,15,
1,15,3,15,367,8,15,5,15,369,8,15,10,15,12,15,372,9,15,3,15,374,8,15,1,15,
1,15,1,16,1,16,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,3,17,389,8,17,
1,17,0,1,22,18,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,0,1,1,0,
43,44,461,0,42,1,0,0,0,2,53,1,0,0,0,4,55,1,0,0,0,6,63,1,0,0,0,8,124,1,0,
0,0,10,126,1,0,0,0,12,160,1,0,0,0,14,188,1,0,0,0,16,190,1,0,0,0,18,251,1,
0,0,0,20,257,1,0,0,0,22,267,1,0,0,0,24,340,1,0,0,0,26,342,1,0,0,0,28,344,
1,0,0,0,30,346,1,0,0,0,32,377,1,0,0,0,34,388,1,0,0,0,36,38,3,2,1,0,37,39,
5,43,0,0,38,37,1,0,0,0,38,39,1,0,0,0,39,41,1,0,0,0,40,36,1,0,0,0,41,44,1,
0,0,0,42,40,1,0,0,0,42,43,1,0,0,0,43,45,1,0,0,0,44,42,1,0,0,0,45,46,5,0,
0,1,46,1,1,0,0,0,47,54,3,4,2,0,48,54,3,6,3,0,49,54,3,8,4,0,50,54,3,24,12,
0,51,54,3,10,5,0,52,54,3,12,6,0,53,47,1,0,0,0,53,48,1,0,0,0,53,49,1,0,0,
0,53,50,1,0,0,0,53,51,1,0,0,0,53,52,1,0,0,0,54,3,1,0,0,0,55,56,5,28,0,0,
56,59,5,1,0,0,57,60,3,20,10,0,58,60,3,22,11,0,59,57,1,0,0,0,59,58,1,0,0,
0,60,61,1,0,0,0,61,62,5,2,0,0,62,5,1,0,0,0,63,65,5,3,0,0,64,66,5,44,0,0,
65,64,1,0,0,0,65,66,1,0,0,0,66,67,1,0,0,0,67,69,3,32,16,0,68,70,5,44,0,0,
69,68,1,0,0,0,69,70,1,0,0,0,70,71,1,0,0,0,71,73,5,4,0,0,72,74,5,44,0,0,73,
72,1,0,0,0,73,74,1,0,0,0,74,75,1,0,0,0,75,76,3,22,11,0,76,7,1,0,0,0,77,79,
5,3,0,0,78,80,5,44,0,0,79,78,1,0,0,0,79,80,1,0,0,0,80,81,1,0,0,0,81,83,3,
32,16,0,82,84,5,44,0,0,83,82,1,0,0,0,83,84,1,0,0,0,84,85,1,0,0,0,85,87,5,
4,0,0,86,88,5,44,0,0,87,86,1,0,0,0,87,88,1,0,0,0,88,89,1,0,0,0,89,90,5,5,
0,0,90,93,5,6,0,0,91,94,3,2,1,0,92,94,3,22,11,0,93,91,1,0,0,0,93,92,1,0,
0,0,94,125,1,0,0,0,95,97,5,3,0,0,96,98,5,44,0,0,97,96,1,0,0,0,97,98,1,0,
0,0,98,99,1,0,0,0,99,101,3,32,16,0,100,102,5,44,0,0,101,100,1,0,0,0,101,
102,1,0,0,0,102,103,1,0,0,0,103,105,5,4,0,0,104,106,5,44,0,0,105,104,1,0,
0,0,105,106,1,0,0,0,106,107,1,0,0,0,107,116,5,1,0,0,108,113,3,32,16,0,109,
110,5,7,0,0,110,112,3,32,16,0,111,109,1,0,0,0,112,115,1,0,0,0,113,111,1,
0,0,0,113,114,1,0,0,0,114,117,1,0,0,0,115,113,1,0,0,0,116,108,1,0,0,0,116,
117,1,0,0,0,117,118,1,0,0,0,118,119,5,2,0,0,119,122,5,6,0,0,120,123,3,2,
1,0,121,123,3,22,11,0,122,120,1,0,0,0,122,121,1,0,0,0,123,125,1,0,0,0,124,
77,1,0,0,0,124,95,1,0,0,0,125,9,1,0,0,0,126,127,5,3,0,0,127,137,5,8,0,0,
128,132,3,14,7,0,129,131,7,0,0,0,130,129,1,0,0,0,131,134,1,0,0,0,132,130,
1,0,0,0,132,133,1,0,0,0,133,136,1,0,0,0,134,132,1,0,0,0,135,128,1,0,0,0,
136,139,1,0,0,0,137,135,1,0,0,0,137,138,1,0,0,0,138,140,1,0,0,0,139,137,
1,0,0,0,140,141,5,9,0,0,141,158,5,10,0,0,142,159,3,22,11,0,143,159,3,2,1,
0,144,154,5,8,0,0,145,149,3,2,1,0,146,148,7,0,0,0,147,146,1,0,0,0,148,151,
1,0,0,0,149,147,1,0,0,0,149,150,1,0,0,0,150,153,1,0,0,0,151,149,1,0,0,0,
152,145,1,0,0,0,153,156,1,0,0,0,154,152,1,0,0,0,154,155,1,0,0,0,155,157,
1,0,0,0,156,154,1,0,0,0,157,159,5,9,0,0,158,142,1,0,0,0,158,143,1,0,0,0,
158,144,1,0,0,0,159,11,1,0,0,0,160,162,5,11,0,0,161,163,5,44,0,0,162,161,
1,0,0,0,162,163,1,0,0,0,163,164,1,0,0,0,164,165,5,1,0,0,165,166,3,22,11,
0,166,168,5,2,0,0,167,169,5,44,0,0,168,167,1,0,0,0,168,169,1,0,0,0,169,170,
1,0,0,0,170,172,5,12,0,0,171,173,5,44,0,0,172,171,1,0,0,0,172,173,1,0,0,
0,173,174,1,0,0,0,174,176,3,22,11,0,175,177,5,44,0,0,176,175,1,0,0,0,176,
177,1,0,0,0,177,178,1,0,0,0,178,180,5,13,0,0,179,181,5,44,0,0,180,179,1,
0,0,0,180,181,1,0,0,0,181,182,1,0,0,0,182,183,3,22,11,0,183,13,1,0,0,0,184,
189,3,6,3,0,185,189,3,16,8,0,186,189,3,18,9,0,187,189,3,8,4,0,188,184,1,
0,0,0,188,185,1,0,0,0,188,186,1,0,0,0,188,187,1,0,0,0,189,15,1,0,0,0,190,
192,5,14,0,0,191,193,5,44,0,0,192,191,1,0,0,0,192,193,1,0,0,0,193,194,1,
0,0,0,194,196,3,32,16,0,195,197,5,44,0,0,196,195,1,0,0,0,196,197,1,0,0,0,
197,198,1,0,0,0,198,200,5,4,0,0,199,201,5,44,0,0,200,199,1,0,0,0,200,201,
1,0,0,0,201,202,1,0,0,0,202,203,3,22,11,0,203,17,1,0,0,0,204,206,5,14,0,
0,205,207,5,44,0,0,206,205,1,0,0,0,206,207,1,0,0,0,207,208,1,0,0,0,208,210,
3,32,16,0,209,211,5,44,0,0,210,209,1,0,0,0,210,211,1,0,0,0,211,212,1,0,0,
0,212,214,5,4,0,0,213,215,5,44,0,0,214,213,1,0,0,0,214,215,1,0,0,0,215,216,
1,0,0,0,216,217,5,5,0,0,217,220,5,6,0,0,218,221,3,2,1,0,219,221,3,22,11,
0,220,218,1,0,0,0,220,219,1,0,0,0,221,252,1,0,0,0,222,224,5,14,0,0,223,225,
5,44,0,0,224,223,1,0,0,0,224,225,1,0,0,0,225,226,1,0,0,0,226,228,3,32,16,
0,227,229,5,44,0,0,228,227,1,0,0,0,228,229,1,0,0,0,229,230,1,0,0,0,230,232,
5,4,0,0,231,233,5,44,0,0,232,231,1,0,0,0,232,233,1,0,0,0,233,234,1,0,0,0,
234,243,5,1,0,0,235,240,3,32,16,0,236,237,5,7,0,0,237,239,3,32,16,0,238,
236,1,0,0,0,239,242,1,0,0,0,240,238,1,0,0,0,240,241,1,0,0,0,241,244,1,0,
0,0,242,240,1,0,0,0,243,235,1,0,0,0,243,244,1,0,0,0,244,245,1,0,0,0,245,
246,5,2,0,0,246,249,5,6,0,0,247,250,3,2,1,0,248,250,3,22,11,0,249,247,1,
0,0,0,249,248,1,0,0,0,250,252,1,0,0,0,251,204,1,0,0,0,251,222,1,0,0,0,252,
19,1,0,0,0,253,258,3,26,13,0,254,258,3,28,14,0,255,258,3,30,15,0,256,258,
3,32,16,0,257,253,1,0,0,0,257,254,1,0,0,0,257,255,1,0,0,0,257,256,1,0,0,
0,258,21,1,0,0,0,259,260,6,11,-1,0,260,268,3,8,4,0,261,268,3,20,10,0,262,
268,3,24,12,0,263,264,5,1,0,0,264,265,3,22,11,0,265,266,5,2,0,0,266,268,
1,0,0,0,267,259,1,0,0,0,267,261,1,0,0,0,267,262,1,0,0,0,267,263,1,0,0,0,
268,310,1,0,0,0,269,270,10,14,0,0,270,271,5,30,0,0,271,309,3,22,11,15,272,
273,10,13,0,0,273,274,5,31,0,0,274,309,3,22,11,14,275,276,10,12,0,0,276,
277,5,32,0,0,277,309,3,22,11,13,278,279,10,11,0,0,279,280,5,33,0,0,280,309,
3,22,11,12,281,282,10,10,0,0,282,283,5,34,0,0,283,309,3,22,11,11,284,285,
10,9,0,0,285,286,5,35,0,0,286,309,3,22,11,10,287,288,10,8,0,0,288,289,5,
36,0,0,289,309,3,22,11,9,290,291,10,7,0,0,291,292,5,37,0,0,292,309,3,22,
11,8,293,294,10,6,0,0,294,295,5,38,0,0,295,309,3,22,11,7,296,297,10,5,0,
0,297,298,5,39,0,0,298,309,3,22,11,6,299,300,10,4,0,0,300,301,5,40,0,0,301,
309,3,22,11,5,302,303,10,3,0,0,303,304,5,41,0,0,304,309,3,22,11,4,305,306,
10,2,0,0,306,307,5,42,0,0,307,309,3,22,11,3,308,269,1,0,0,0,308,272,1,0,
0,0,308,275,1,0,0,0,308,278,1,0,0,0,308,281,1,0,0,0,308,284,1,0,0,0,308,
287,1,0,0,0,308,290,1,0,0,0,308,293,1,0,0,0,308,296,1,0,0,0,308,299,1,0,
0,0,308,302,1,0,0,0,308,305,1,0,0,0,309,312,1,0,0,0,310,308,1,0,0,0,310,
311,1,0,0,0,311,23,1,0,0,0,312,310,1,0,0,0,313,314,3,32,16,0,314,315,5,5,
0,0,315,341,1,0,0,0,316,317,3,32,16,0,317,318,5,1,0,0,318,323,3,22,11,0,
319,320,5,7,0,0,320,322,3,22,11,0,321,319,1,0,0,0,322,325,1,0,0,0,323,321,
1,0,0,0,323,324,1,0,0,0,324,326,1,0,0,0,325,323,1,0,0,0,326,327,5,2,0,0,
327,341,1,0,0,0,328,329,3,34,17,0,329,330,5,1,0,0,330,335,3,22,11,0,331,
332,5,7,0,0,332,334,3,22,11,0,333,331,1,0,0,0,334,337,1,0,0,0,335,333,1,
0,0,0,335,336,1,0,0,0,336,338,1,0,0,0,337,335,1,0,0,0,338,339,5,2,0,0,339,
341,1,0,0,0,340,313,1,0,0,0,340,316,1,0,0,0,340,328,1,0,0,0,341,25,1,0,0,
0,342,343,5,27,0,0,343,27,1,0,0,0,344,345,5,26,0,0,345,29,1,0,0,0,346,348,
5,15,0,0,347,349,5,44,0,0,348,347,1,0,0,0,348,349,1,0,0,0,349,373,1,0,0,
0,350,353,3,20,10,0,351,353,3,22,11,0,352,350,1,0,0,0,352,351,1,0,0,0,353,
355,1,0,0,0,354,356,5,44,0,0,355,354,1,0,0,0,355,356,1,0,0,0,356,370,1,0,
0,0,357,359,5,7,0,0,358,360,5,44,0,0,359,358,1,0,0,0,359,360,1,0,0,0,360,
363,1,0,0,0,361,364,3,20,10,0,362,364,3,22,11,0,363,361,1,0,0,0,363,362,
1,0,0,0,364,366,1,0,0,0,365,367,5,44,0,0,366,365,1,0,0,0,366,367,1,0,0,0,
367,369,1,0,0,0,368,357,1,0,0,0,369,372,1,0,0,0,370,368,1,0,0,0,370,371,
1,0,0,0,371,374,1,0,0,0,372,370,1,0,0,0,373,352,1,0,0,0,373,374,1,0,0,0,
374,375,1,0,0,0,375,376,5,16,0,0,376,31,1,0,0,0,377,378,5,29,0,0,378,33,
1,0,0,0,379,389,5,17,0,0,380,389,5,18,0,0,381,389,5,19,0,0,382,389,5,20,
0,0,383,389,5,21,0,0,384,389,5,22,0,0,385,389,5,23,0,0,386,389,5,24,0,0,
387,389,5,25,0,0,388,379,1,0,0,0,388,380,1,0,0,0,388,381,1,0,0,0,388,382,
1,0,0,0,388,383,1,0,0,0,388,384,1,0,0,0,388,385,1,0,0,0,388,386,1,0,0,0,
388,387,1,0,0,0,389,35,1,0,0,0,59,38,42,53,59,65,69,73,79,83,87,93,97,101,
105,113,116,122,124,132,137,149,154,158,162,168,172,176,180,188,192,196,
200,206,210,214,220,224,228,232,240,243,249,251,257,267,308,310,323,335,
340,348,352,355,359,363,366,370,373,388];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class biesCParser extends antlr4.Parser {

    static grammarFileName = "biesC.g4";
    static literalNames = [ null, "'('", "')'", "'let'", "'='", "'()'", 
                            "'=>'", "','", "'{'", "'}'", "'in'", "'if'", 
                            "'then'", "'else'", "'const'", "'['", "']'", 
                            "'bool'", "'true'", "'false'", "'null'", "'input'", 
                            "'int'", "'str'", "'list'", "'len'", null, null, 
                            "'print'", null, "'*'", "'/'", "'+'", "'-'", 
                            "'**'", "'&&'", "'||'", "'=='", "'!='", "'<'", 
                            "'>'", "'<='", "'>='" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, "BOOL", "TRUE", "FALSE", "NULL", "INPUT", 
                             "INT", "STR", "LIST", "LEN", "STRING", "NUMBER", 
                             "PRINT", "ID", "MULT", "DIV", "ADD", "SUB", 
                             "POW", "AND", "OR", "EQ", "NEQ", "LT", "GT", 
                             "LE", "GE", "NL", "WS", "COMMENT", "MULTILINE_COMMENT" ];
    static ruleNames = [ "program", "statement", "printInstr", "simpleLetInstr", 
                         "anonymousLetFunction", "letInExpr", "ifElseExpr", 
                         "declaration", "simpleConstInstr", "anonymousConstFunction", 
                         "primarydata", "expr", "functionCall", "number", 
                         "string", "array", "id", "predSymbols" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = biesCParser.ruleNames;
        this.literalNames = biesCParser.literalNames;
        this.symbolicNames = biesCParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 11:
    	    		return this.expr_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expr_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 14);
    		case 1:
    			return this.precpred(this._ctx, 13);
    		case 2:
    			return this.precpred(this._ctx, 12);
    		case 3:
    			return this.precpred(this._ctx, 11);
    		case 4:
    			return this.precpred(this._ctx, 10);
    		case 5:
    			return this.precpred(this._ctx, 9);
    		case 6:
    			return this.precpred(this._ctx, 8);
    		case 7:
    			return this.precpred(this._ctx, 7);
    		case 8:
    			return this.precpred(this._ctx, 6);
    		case 9:
    			return this.precpred(this._ctx, 5);
    		case 10:
    			return this.precpred(this._ctx, 4);
    		case 11:
    			return this.precpred(this._ctx, 3);
    		case 12:
    			return this.precpred(this._ctx, 2);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, biesCParser.RULE_program);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 42;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 872286216) !== 0)) {
	            this.state = 36;
	            this.statement();
	            this.state = 38;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===43) {
	                this.state = 37;
	                this.match(biesCParser.NL);
	            }

	            this.state = 44;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 45;
	        this.match(biesCParser.EOF);
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



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, biesCParser.RULE_statement);
	    try {
	        this.state = 53;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 47;
	            this.printInstr();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 48;
	            this.simpleLetInstr();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 49;
	            this.anonymousLetFunction();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 50;
	            this.functionCall();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 51;
	            this.letInExpr();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 52;
	            this.ifElseExpr();
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



	printInstr() {
	    let localctx = new PrintInstrContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, biesCParser.RULE_printInstr);
	    try {
	        localctx = new PrintInstr_LabelContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 55;
	        this.match(biesCParser.PRINT);
	        this.state = 56;
	        this.match(biesCParser.T__0);
	        this.state = 59;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 57;
	            this.primarydata();
	            break;

	        case 2:
	            this.state = 58;
	            this.expr(0);
	            break;

	        }
	        this.state = 61;
	        this.match(biesCParser.T__1);
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



	simpleLetInstr() {
	    let localctx = new SimpleLetInstrContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, biesCParser.RULE_simpleLetInstr);
	    var _la = 0;
	    try {
	        localctx = new SimpleLetInstr_LabelContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 63;
	        this.match(biesCParser.T__2);
	        this.state = 65;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===44) {
	            this.state = 64;
	            this.match(biesCParser.WS);
	        }

	        this.state = 67;
	        this.id();
	        this.state = 69;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===44) {
	            this.state = 68;
	            this.match(biesCParser.WS);
	        }

	        this.state = 71;
	        this.match(biesCParser.T__3);
	        this.state = 73;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===44) {
	            this.state = 72;
	            this.match(biesCParser.WS);
	        }

	        this.state = 75;
	        this.expr(0);
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



	anonymousLetFunction() {
	    let localctx = new AnonymousLetFunctionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, biesCParser.RULE_anonymousLetFunction);
	    var _la = 0;
	    try {
	        this.state = 124;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new LambdaNoParams_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 77;
	            this.match(biesCParser.T__2);
	            this.state = 79;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===44) {
	                this.state = 78;
	                this.match(biesCParser.WS);
	            }

	            this.state = 81;
	            this.id();
	            this.state = 83;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===44) {
	                this.state = 82;
	                this.match(biesCParser.WS);
	            }

	            this.state = 85;
	            this.match(biesCParser.T__3);
	            this.state = 87;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===44) {
	                this.state = 86;
	                this.match(biesCParser.WS);
	            }

	            this.state = 89;
	            this.match(biesCParser.T__4);
	            this.state = 90;
	            this.match(biesCParser.T__5);
	            this.state = 93;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 91;
	                this.statement();
	                break;

	            case 2:
	                this.state = 92;
	                this.expr(0);
	                break;

	            }
	            break;

	        case 2:
	            localctx = new LambdaWithParams_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 95;
	            this.match(biesCParser.T__2);
	            this.state = 97;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===44) {
	                this.state = 96;
	                this.match(biesCParser.WS);
	            }

	            this.state = 99;
	            this.id();
	            this.state = 101;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===44) {
	                this.state = 100;
	                this.match(biesCParser.WS);
	            }

	            this.state = 103;
	            this.match(biesCParser.T__3);
	            this.state = 105;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===44) {
	                this.state = 104;
	                this.match(biesCParser.WS);
	            }

	            this.state = 107;
	            this.match(biesCParser.T__0);
	            this.state = 116;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===29) {
	                this.state = 108;
	                this.id();
	                this.state = 113;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===7) {
	                    this.state = 109;
	                    this.match(biesCParser.T__6);
	                    this.state = 110;
	                    this.id();
	                    this.state = 115;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	            }

	            this.state = 118;
	            this.match(biesCParser.T__1);
	            this.state = 119;
	            this.match(biesCParser.T__5);
	            this.state = 122;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 120;
	                this.statement();
	                break;

	            case 2:
	                this.state = 121;
	                this.expr(0);
	                break;

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
	}



	letInExpr() {
	    let localctx = new LetInExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, biesCParser.RULE_letInExpr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 126;
	        this.match(biesCParser.T__2);
	        this.state = 127;
	        this.match(biesCParser.T__7);
	        this.state = 137;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===3 || _la===14) {
	            this.state = 128;
	            this.declaration();
	            this.state = 132;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===43 || _la===44) {
	                this.state = 129;
	                _la = this._input.LA(1);
	                if(!(_la===43 || _la===44)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 134;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 139;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 140;
	        this.match(biesCParser.T__8);
	        this.state = 141;
	        this.match(biesCParser.T__9);
	        this.state = 158;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 142;
	            this.expr(0);
	            break;

	        case 2:
	            this.state = 143;
	            this.statement();
	            break;

	        case 3:
	            this.state = 144;
	            this.match(biesCParser.T__7);
	            this.state = 154;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) === 0 && ((1 << _la) & 872286216) !== 0)) {
	                this.state = 145;
	                this.statement();
	                this.state = 149;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===43 || _la===44) {
	                    this.state = 146;
	                    _la = this._input.LA(1);
	                    if(!(_la===43 || _la===44)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 151;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	                this.state = 156;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 157;
	            this.match(biesCParser.T__8);
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



	ifElseExpr() {
	    let localctx = new IfElseExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, biesCParser.RULE_ifElseExpr);
	    var _la = 0;
	    try {
	        localctx = new IfElseExpr_LabelContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 160;
	        this.match(biesCParser.T__10);
	        this.state = 162;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===44) {
	            this.state = 161;
	            this.match(biesCParser.WS);
	        }

	        this.state = 164;
	        this.match(biesCParser.T__0);
	        this.state = 165;
	        this.expr(0);
	        this.state = 166;
	        this.match(biesCParser.T__1);
	        this.state = 168;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===44) {
	            this.state = 167;
	            this.match(biesCParser.WS);
	        }

	        this.state = 170;
	        this.match(biesCParser.T__11);
	        this.state = 172;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===44) {
	            this.state = 171;
	            this.match(biesCParser.WS);
	        }

	        this.state = 174;
	        this.expr(0);
	        this.state = 176;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===44) {
	            this.state = 175;
	            this.match(biesCParser.WS);
	        }

	        this.state = 178;
	        this.match(biesCParser.T__12);
	        this.state = 180;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===44) {
	            this.state = 179;
	            this.match(biesCParser.WS);
	        }

	        this.state = 182;
	        this.expr(0);
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



	declaration() {
	    let localctx = new DeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, biesCParser.RULE_declaration);
	    try {
	        this.state = 188;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,28,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 184;
	            this.simpleLetInstr();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 185;
	            this.simpleConstInstr();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 186;
	            this.anonymousConstFunction();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 187;
	            this.anonymousLetFunction();
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



	simpleConstInstr() {
	    let localctx = new SimpleConstInstrContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, biesCParser.RULE_simpleConstInstr);
	    var _la = 0;
	    try {
	        localctx = new SimpleConstInstr_LabelContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 190;
	        this.match(biesCParser.T__13);
	        this.state = 192;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===44) {
	            this.state = 191;
	            this.match(biesCParser.WS);
	        }

	        this.state = 194;
	        this.id();
	        this.state = 196;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===44) {
	            this.state = 195;
	            this.match(biesCParser.WS);
	        }

	        this.state = 198;
	        this.match(biesCParser.T__3);
	        this.state = 200;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===44) {
	            this.state = 199;
	            this.match(biesCParser.WS);
	        }

	        this.state = 202;
	        this.expr(0);
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



	anonymousConstFunction() {
	    let localctx = new AnonymousConstFunctionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, biesCParser.RULE_anonymousConstFunction);
	    var _la = 0;
	    try {
	        this.state = 251;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,42,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new LambdaConstNoParams_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 204;
	            this.match(biesCParser.T__13);
	            this.state = 206;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===44) {
	                this.state = 205;
	                this.match(biesCParser.WS);
	            }

	            this.state = 208;
	            this.id();
	            this.state = 210;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===44) {
	                this.state = 209;
	                this.match(biesCParser.WS);
	            }

	            this.state = 212;
	            this.match(biesCParser.T__3);
	            this.state = 214;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===44) {
	                this.state = 213;
	                this.match(biesCParser.WS);
	            }

	            this.state = 216;
	            this.match(biesCParser.T__4);
	            this.state = 217;
	            this.match(biesCParser.T__5);
	            this.state = 220;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,35,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 218;
	                this.statement();
	                break;

	            case 2:
	                this.state = 219;
	                this.expr(0);
	                break;

	            }
	            break;

	        case 2:
	            localctx = new LambdaConstWithParams_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 222;
	            this.match(biesCParser.T__13);
	            this.state = 224;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===44) {
	                this.state = 223;
	                this.match(biesCParser.WS);
	            }

	            this.state = 226;
	            this.id();
	            this.state = 228;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===44) {
	                this.state = 227;
	                this.match(biesCParser.WS);
	            }

	            this.state = 230;
	            this.match(biesCParser.T__3);
	            this.state = 232;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===44) {
	                this.state = 231;
	                this.match(biesCParser.WS);
	            }

	            this.state = 234;
	            this.match(biesCParser.T__0);
	            this.state = 243;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===29) {
	                this.state = 235;
	                this.id();
	                this.state = 240;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===7) {
	                    this.state = 236;
	                    this.match(biesCParser.T__6);
	                    this.state = 237;
	                    this.id();
	                    this.state = 242;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	            }

	            this.state = 245;
	            this.match(biesCParser.T__1);
	            this.state = 246;
	            this.match(biesCParser.T__5);
	            this.state = 249;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,41,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 247;
	                this.statement();
	                break;

	            case 2:
	                this.state = 248;
	                this.expr(0);
	                break;

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
	}



	primarydata() {
	    let localctx = new PrimarydataContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, biesCParser.RULE_primarydata);
	    try {
	        this.state = 257;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 27:
	            localctx = new Number_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 253;
	            this.number();
	            break;
	        case 26:
	            localctx = new String_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 254;
	            this.string();
	            break;
	        case 15:
	            localctx = new Array_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 255;
	            this.array();
	            break;
	        case 29:
	            localctx = new Id_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 256;
	            this.id();
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


	expr(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExprContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 22;
	    this.enterRecursionRule(localctx, 22, biesCParser.RULE_expr, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 267;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,44,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new AnonymousFunctionExpr_LabelContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 260;
	            this.anonymousLetFunction();
	            break;

	        case 2:
	            localctx = new PrimaryData_LabelContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 261;
	            this.primarydata();
	            break;

	        case 3:
	            localctx = new FunctionCallExpr_LabelContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 262;
	            this.functionCall();
	            break;

	        case 4:
	            localctx = new Exp_LabelContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 263;
	            this.match(biesCParser.T__0);
	            this.state = 264;
	            this.expr(0);
	            this.state = 265;
	            this.match(biesCParser.T__1);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 310;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,46,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 308;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,45,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new Mul_LabelContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expr);
	                    this.state = 269;
	                    if (!( this.precpred(this._ctx, 14))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 14)");
	                    }
	                    this.state = 270;
	                    this.match(biesCParser.MULT);
	                    this.state = 271;
	                    this.expr(15);
	                    break;

	                case 2:
	                    localctx = new Div_LabelContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expr);
	                    this.state = 272;
	                    if (!( this.precpred(this._ctx, 13))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
	                    }
	                    this.state = 273;
	                    this.match(biesCParser.DIV);
	                    this.state = 274;
	                    this.expr(14);
	                    break;

	                case 3:
	                    localctx = new Add_LabelContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expr);
	                    this.state = 275;
	                    if (!( this.precpred(this._ctx, 12))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
	                    }
	                    this.state = 276;
	                    this.match(biesCParser.ADD);
	                    this.state = 277;
	                    this.expr(13);
	                    break;

	                case 4:
	                    localctx = new Sub_LabelContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expr);
	                    this.state = 278;
	                    if (!( this.precpred(this._ctx, 11))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
	                    }
	                    this.state = 279;
	                    this.match(biesCParser.SUB);
	                    this.state = 280;
	                    this.expr(12);
	                    break;

	                case 5:
	                    localctx = new Pow_LabelContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expr);
	                    this.state = 281;
	                    if (!( this.precpred(this._ctx, 10))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
	                    }
	                    this.state = 282;
	                    this.match(biesCParser.POW);
	                    this.state = 283;
	                    this.expr(11);
	                    break;

	                case 6:
	                    localctx = new And_LabelContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expr);
	                    this.state = 284;
	                    if (!( this.precpred(this._ctx, 9))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
	                    }
	                    this.state = 285;
	                    this.match(biesCParser.AND);
	                    this.state = 286;
	                    this.expr(10);
	                    break;

	                case 7:
	                    localctx = new Or_LabelContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expr);
	                    this.state = 287;
	                    if (!( this.precpred(this._ctx, 8))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                    }
	                    this.state = 288;
	                    this.match(biesCParser.OR);
	                    this.state = 289;
	                    this.expr(9);
	                    break;

	                case 8:
	                    localctx = new Eq_LabelContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expr);
	                    this.state = 290;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 291;
	                    this.match(biesCParser.EQ);
	                    this.state = 292;
	                    this.expr(8);
	                    break;

	                case 9:
	                    localctx = new Neq_LabelContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expr);
	                    this.state = 293;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 294;
	                    this.match(biesCParser.NEQ);
	                    this.state = 295;
	                    this.expr(7);
	                    break;

	                case 10:
	                    localctx = new Lt_LabelContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expr);
	                    this.state = 296;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 297;
	                    this.match(biesCParser.LT);
	                    this.state = 298;
	                    this.expr(6);
	                    break;

	                case 11:
	                    localctx = new Gt_LabelContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expr);
	                    this.state = 299;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 300;
	                    this.match(biesCParser.GT);
	                    this.state = 301;
	                    this.expr(5);
	                    break;

	                case 12:
	                    localctx = new Le_LabelContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expr);
	                    this.state = 302;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 303;
	                    this.match(biesCParser.LE);
	                    this.state = 304;
	                    this.expr(4);
	                    break;

	                case 13:
	                    localctx = new Ge_LabelContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expr);
	                    this.state = 305;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 306;
	                    this.match(biesCParser.GE);
	                    this.state = 307;
	                    this.expr(3);
	                    break;

	                } 
	            }
	            this.state = 312;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,46,this._ctx);
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



	functionCall() {
	    let localctx = new FunctionCallContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, biesCParser.RULE_functionCall);
	    var _la = 0;
	    try {
	        this.state = 340;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,49,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new FunctionCallNoParams_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 313;
	            this.id();
	            this.state = 314;
	            this.match(biesCParser.T__4);
	            break;

	        case 2:
	            localctx = new FunctionCallWithParams_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 316;
	            this.id();
	            this.state = 317;
	            this.match(biesCParser.T__0);
	            this.state = 318;
	            this.expr(0);
	            this.state = 323;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===7) {
	                this.state = 319;
	                this.match(biesCParser.T__6);
	                this.state = 320;
	                this.expr(0);
	                this.state = 325;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 326;
	            this.match(biesCParser.T__1);
	            break;

	        case 3:
	            localctx = new PredifinedFunctionCall_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 328;
	            this.predSymbols();
	            this.state = 329;
	            this.match(biesCParser.T__0);
	            this.state = 330;
	            this.expr(0);
	            this.state = 335;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===7) {
	                this.state = 331;
	                this.match(biesCParser.T__6);
	                this.state = 332;
	                this.expr(0);
	                this.state = 337;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 338;
	            this.match(biesCParser.T__1);
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



	number() {
	    let localctx = new NumberContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, biesCParser.RULE_number);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 342;
	        this.match(biesCParser.NUMBER);
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
	    this.enterRule(localctx, 28, biesCParser.RULE_string);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 344;
	        this.match(biesCParser.STRING);
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



	array() {
	    let localctx = new ArrayContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, biesCParser.RULE_array);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 346;
	        this.match(biesCParser.T__14);
	        this.state = 348;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===44) {
	            this.state = 347;
	            this.match(biesCParser.WS);
	        }

	        this.state = 373;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 805208074) !== 0)) {
	            this.state = 352;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,51,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 350;
	                this.primarydata();
	                break;

	            case 2:
	                this.state = 351;
	                this.expr(0);
	                break;

	            }
	            this.state = 355;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===44) {
	                this.state = 354;
	                this.match(biesCParser.WS);
	            }

	            this.state = 370;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===7) {
	                this.state = 357;
	                this.match(biesCParser.T__6);
	                this.state = 359;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===44) {
	                    this.state = 358;
	                    this.match(biesCParser.WS);
	                }

	                this.state = 363;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,54,this._ctx);
	                switch(la_) {
	                case 1:
	                    this.state = 361;
	                    this.primarydata();
	                    break;

	                case 2:
	                    this.state = 362;
	                    this.expr(0);
	                    break;

	                }
	                this.state = 366;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===44) {
	                    this.state = 365;
	                    this.match(biesCParser.WS);
	                }

	                this.state = 372;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 375;
	        this.match(biesCParser.T__15);
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



	id() {
	    let localctx = new IdContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, biesCParser.RULE_id);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 377;
	        this.match(biesCParser.ID);
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



	predSymbols() {
	    let localctx = new PredSymbolsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, biesCParser.RULE_predSymbols);
	    try {
	        this.state = 388;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 17:
	            localctx = new Bool_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 379;
	            this.match(biesCParser.BOOL);
	            break;
	        case 18:
	            localctx = new True_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 380;
	            this.match(biesCParser.TRUE);
	            break;
	        case 19:
	            localctx = new False_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 381;
	            this.match(biesCParser.FALSE);
	            break;
	        case 20:
	            localctx = new Null_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 382;
	            this.match(biesCParser.NULL);
	            break;
	        case 21:
	            localctx = new Input_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 5);
	            this.state = 383;
	            this.match(biesCParser.INPUT);
	            break;
	        case 22:
	            localctx = new Int_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 6);
	            this.state = 384;
	            this.match(biesCParser.INT);
	            break;
	        case 23:
	            localctx = new Str_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 7);
	            this.state = 385;
	            this.match(biesCParser.STR);
	            break;
	        case 24:
	            localctx = new List_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 8);
	            this.state = 386;
	            this.match(biesCParser.LIST);
	            break;
	        case 25:
	            localctx = new Len_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 9);
	            this.state = 387;
	            this.match(biesCParser.LEN);
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


}

biesCParser.EOF = antlr4.Token.EOF;
biesCParser.T__0 = 1;
biesCParser.T__1 = 2;
biesCParser.T__2 = 3;
biesCParser.T__3 = 4;
biesCParser.T__4 = 5;
biesCParser.T__5 = 6;
biesCParser.T__6 = 7;
biesCParser.T__7 = 8;
biesCParser.T__8 = 9;
biesCParser.T__9 = 10;
biesCParser.T__10 = 11;
biesCParser.T__11 = 12;
biesCParser.T__12 = 13;
biesCParser.T__13 = 14;
biesCParser.T__14 = 15;
biesCParser.T__15 = 16;
biesCParser.BOOL = 17;
biesCParser.TRUE = 18;
biesCParser.FALSE = 19;
biesCParser.NULL = 20;
biesCParser.INPUT = 21;
biesCParser.INT = 22;
biesCParser.STR = 23;
biesCParser.LIST = 24;
biesCParser.LEN = 25;
biesCParser.STRING = 26;
biesCParser.NUMBER = 27;
biesCParser.PRINT = 28;
biesCParser.ID = 29;
biesCParser.MULT = 30;
biesCParser.DIV = 31;
biesCParser.ADD = 32;
biesCParser.SUB = 33;
biesCParser.POW = 34;
biesCParser.AND = 35;
biesCParser.OR = 36;
biesCParser.EQ = 37;
biesCParser.NEQ = 38;
biesCParser.LT = 39;
biesCParser.GT = 40;
biesCParser.LE = 41;
biesCParser.GE = 42;
biesCParser.NL = 43;
biesCParser.WS = 44;
biesCParser.COMMENT = 45;
biesCParser.MULTILINE_COMMENT = 46;

biesCParser.RULE_program = 0;
biesCParser.RULE_statement = 1;
biesCParser.RULE_printInstr = 2;
biesCParser.RULE_simpleLetInstr = 3;
biesCParser.RULE_anonymousLetFunction = 4;
biesCParser.RULE_letInExpr = 5;
biesCParser.RULE_ifElseExpr = 6;
biesCParser.RULE_declaration = 7;
biesCParser.RULE_simpleConstInstr = 8;
biesCParser.RULE_anonymousConstFunction = 9;
biesCParser.RULE_primarydata = 10;
biesCParser.RULE_expr = 11;
biesCParser.RULE_functionCall = 12;
biesCParser.RULE_number = 13;
biesCParser.RULE_string = 14;
biesCParser.RULE_array = 15;
biesCParser.RULE_id = 16;
biesCParser.RULE_predSymbols = 17;

class ProgramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesCParser.RULE_program;
    }

	EOF() {
	    return this.getToken(biesCParser.EOF, 0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	NL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(biesCParser.NL);
	    } else {
	        return this.getToken(biesCParser.NL, i);
	    }
	};


	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitProgram(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesCParser.RULE_statement;
    }

	printInstr() {
	    return this.getTypedRuleContext(PrintInstrContext,0);
	};

	simpleLetInstr() {
	    return this.getTypedRuleContext(SimpleLetInstrContext,0);
	};

	anonymousLetFunction() {
	    return this.getTypedRuleContext(AnonymousLetFunctionContext,0);
	};

	functionCall() {
	    return this.getTypedRuleContext(FunctionCallContext,0);
	};

	letInExpr() {
	    return this.getTypedRuleContext(LetInExprContext,0);
	};

	ifElseExpr() {
	    return this.getTypedRuleContext(IfElseExprContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PrintInstrContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesCParser.RULE_printInstr;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class PrintInstr_LabelContext extends PrintInstrContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	PRINT() {
	    return this.getToken(biesCParser.PRINT, 0);
	};

	primarydata() {
	    return this.getTypedRuleContext(PrimarydataContext,0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitPrintInstr_Label(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

biesCParser.PrintInstr_LabelContext = PrintInstr_LabelContext;

class SimpleLetInstrContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesCParser.RULE_simpleLetInstr;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class SimpleLetInstr_LabelContext extends SimpleLetInstrContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	id() {
	    return this.getTypedRuleContext(IdContext,0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(biesCParser.WS);
	    } else {
	        return this.getToken(biesCParser.WS, i);
	    }
	};


	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitSimpleLetInstr_Label(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

biesCParser.SimpleLetInstr_LabelContext = SimpleLetInstr_LabelContext;

class AnonymousLetFunctionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesCParser.RULE_anonymousLetFunction;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class LambdaNoParams_LabelContext extends AnonymousLetFunctionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	id() {
	    return this.getTypedRuleContext(IdContext,0);
	};

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(biesCParser.WS);
	    } else {
	        return this.getToken(biesCParser.WS, i);
	    }
	};


	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitLambdaNoParams_Label(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

biesCParser.LambdaNoParams_LabelContext = LambdaNoParams_LabelContext;

class LambdaWithParams_LabelContext extends AnonymousLetFunctionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	id = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdContext);
	    } else {
	        return this.getTypedRuleContext(IdContext,i);
	    }
	};

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(biesCParser.WS);
	    } else {
	        return this.getToken(biesCParser.WS, i);
	    }
	};


	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitLambdaWithParams_Label(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

biesCParser.LambdaWithParams_LabelContext = LambdaWithParams_LabelContext;

class LetInExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesCParser.RULE_letInExpr;
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	declaration = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DeclarationContext);
	    } else {
	        return this.getTypedRuleContext(DeclarationContext,i);
	    }
	};

	NL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(biesCParser.NL);
	    } else {
	        return this.getToken(biesCParser.NL, i);
	    }
	};


	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(biesCParser.WS);
	    } else {
	        return this.getToken(biesCParser.WS, i);
	    }
	};


	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitLetInExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IfElseExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesCParser.RULE_ifElseExpr;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class IfElseExpr_LabelContext extends IfElseExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(biesCParser.WS);
	    } else {
	        return this.getToken(biesCParser.WS, i);
	    }
	};


	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitIfElseExpr_Label(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

biesCParser.IfElseExpr_LabelContext = IfElseExpr_LabelContext;

class DeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesCParser.RULE_declaration;
    }

	simpleLetInstr() {
	    return this.getTypedRuleContext(SimpleLetInstrContext,0);
	};

	simpleConstInstr() {
	    return this.getTypedRuleContext(SimpleConstInstrContext,0);
	};

	anonymousConstFunction() {
	    return this.getTypedRuleContext(AnonymousConstFunctionContext,0);
	};

	anonymousLetFunction() {
	    return this.getTypedRuleContext(AnonymousLetFunctionContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitDeclaration(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SimpleConstInstrContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesCParser.RULE_simpleConstInstr;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class SimpleConstInstr_LabelContext extends SimpleConstInstrContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	id() {
	    return this.getTypedRuleContext(IdContext,0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(biesCParser.WS);
	    } else {
	        return this.getToken(biesCParser.WS, i);
	    }
	};


	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitSimpleConstInstr_Label(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

biesCParser.SimpleConstInstr_LabelContext = SimpleConstInstr_LabelContext;

class AnonymousConstFunctionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesCParser.RULE_anonymousConstFunction;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class LambdaConstWithParams_LabelContext extends AnonymousConstFunctionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	id = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdContext);
	    } else {
	        return this.getTypedRuleContext(IdContext,i);
	    }
	};

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(biesCParser.WS);
	    } else {
	        return this.getToken(biesCParser.WS, i);
	    }
	};


	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitLambdaConstWithParams_Label(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

biesCParser.LambdaConstWithParams_LabelContext = LambdaConstWithParams_LabelContext;

class LambdaConstNoParams_LabelContext extends AnonymousConstFunctionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	id() {
	    return this.getTypedRuleContext(IdContext,0);
	};

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(biesCParser.WS);
	    } else {
	        return this.getToken(biesCParser.WS, i);
	    }
	};


	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitLambdaConstNoParams_Label(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

biesCParser.LambdaConstNoParams_LabelContext = LambdaConstNoParams_LabelContext;

class PrimarydataContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesCParser.RULE_primarydata;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class Array_LabelContext extends PrimarydataContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	array() {
	    return this.getTypedRuleContext(ArrayContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitArray_Label(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

biesCParser.Array_LabelContext = Array_LabelContext;

class Number_LabelContext extends PrimarydataContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitNumber_Label(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

biesCParser.Number_LabelContext = Number_LabelContext;

class String_LabelContext extends PrimarydataContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	string() {
	    return this.getTypedRuleContext(StringContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitString_Label(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

biesCParser.String_LabelContext = String_LabelContext;

class Id_LabelContext extends PrimarydataContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	id() {
	    return this.getTypedRuleContext(IdContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitId_Label(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

biesCParser.Id_LabelContext = Id_LabelContext;

class ExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesCParser.RULE_expr;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class Sub_LabelContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	SUB() {
	    return this.getToken(biesCParser.SUB, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitSub_Label(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

biesCParser.Sub_LabelContext = Sub_LabelContext;

class Mul_LabelContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	MULT() {
	    return this.getToken(biesCParser.MULT, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitMul_Label(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

biesCParser.Mul_LabelContext = Mul_LabelContext;

class Exp_LabelContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitExp_Label(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

biesCParser.Exp_LabelContext = Exp_LabelContext;

class Or_LabelContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	OR() {
	    return this.getToken(biesCParser.OR, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitOr_Label(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

biesCParser.Or_LabelContext = Or_LabelContext;

class And_LabelContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	AND() {
	    return this.getToken(biesCParser.AND, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitAnd_Label(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

biesCParser.And_LabelContext = And_LabelContext;

class Neq_LabelContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	NEQ() {
	    return this.getToken(biesCParser.NEQ, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitNeq_Label(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

biesCParser.Neq_LabelContext = Neq_LabelContext;

class Div_LabelContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	DIV() {
	    return this.getToken(biesCParser.DIV, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitDiv_Label(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

biesCParser.Div_LabelContext = Div_LabelContext;

class Le_LabelContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	LE() {
	    return this.getToken(biesCParser.LE, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitLe_Label(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

biesCParser.Le_LabelContext = Le_LabelContext;

class Add_LabelContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	ADD() {
	    return this.getToken(biesCParser.ADD, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitAdd_Label(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

biesCParser.Add_LabelContext = Add_LabelContext;

class Eq_LabelContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	EQ() {
	    return this.getToken(biesCParser.EQ, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitEq_Label(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

biesCParser.Eq_LabelContext = Eq_LabelContext;

class AnonymousFunctionExpr_LabelContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	anonymousLetFunction() {
	    return this.getTypedRuleContext(AnonymousLetFunctionContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitAnonymousFunctionExpr_Label(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

biesCParser.AnonymousFunctionExpr_LabelContext = AnonymousFunctionExpr_LabelContext;

class Pow_LabelContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	POW() {
	    return this.getToken(biesCParser.POW, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitPow_Label(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

biesCParser.Pow_LabelContext = Pow_LabelContext;

class Ge_LabelContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	GE() {
	    return this.getToken(biesCParser.GE, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitGe_Label(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

biesCParser.Ge_LabelContext = Ge_LabelContext;

class FunctionCallExpr_LabelContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	functionCall() {
	    return this.getTypedRuleContext(FunctionCallContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitFunctionCallExpr_Label(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

biesCParser.FunctionCallExpr_LabelContext = FunctionCallExpr_LabelContext;

class Lt_LabelContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	LT() {
	    return this.getToken(biesCParser.LT, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitLt_Label(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

biesCParser.Lt_LabelContext = Lt_LabelContext;

class Gt_LabelContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	GT() {
	    return this.getToken(biesCParser.GT, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitGt_Label(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

biesCParser.Gt_LabelContext = Gt_LabelContext;

class PrimaryData_LabelContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	primarydata() {
	    return this.getTypedRuleContext(PrimarydataContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitPrimaryData_Label(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

biesCParser.PrimaryData_LabelContext = PrimaryData_LabelContext;

class FunctionCallContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesCParser.RULE_functionCall;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class PredifinedFunctionCall_LabelContext extends FunctionCallContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	predSymbols() {
	    return this.getTypedRuleContext(PredSymbolsContext,0);
	};

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitPredifinedFunctionCall_Label(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

biesCParser.PredifinedFunctionCall_LabelContext = PredifinedFunctionCall_LabelContext;

class FunctionCallWithParams_LabelContext extends FunctionCallContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	id() {
	    return this.getTypedRuleContext(IdContext,0);
	};

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitFunctionCallWithParams_Label(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

biesCParser.FunctionCallWithParams_LabelContext = FunctionCallWithParams_LabelContext;

class FunctionCallNoParams_LabelContext extends FunctionCallContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	id() {
	    return this.getTypedRuleContext(IdContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitFunctionCallNoParams_Label(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

biesCParser.FunctionCallNoParams_LabelContext = FunctionCallNoParams_LabelContext;

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
        this.ruleIndex = biesCParser.RULE_number;
    }

	NUMBER() {
	    return this.getToken(biesCParser.NUMBER, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitNumber(this);
	    } else {
	        return visitor.visitChildren(this);
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
        this.ruleIndex = biesCParser.RULE_string;
    }

	STRING() {
	    return this.getToken(biesCParser.STRING, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitString(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ArrayContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesCParser.RULE_array;
    }

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(biesCParser.WS);
	    } else {
	        return this.getToken(biesCParser.WS, i);
	    }
	};


	primarydata = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PrimarydataContext);
	    } else {
	        return this.getTypedRuleContext(PrimarydataContext,i);
	    }
	};

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitArray(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IdContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesCParser.RULE_id;
    }

	ID() {
	    return this.getToken(biesCParser.ID, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitId(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PredSymbolsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesCParser.RULE_predSymbols;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class Str_LabelContext extends PredSymbolsContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	STR() {
	    return this.getToken(biesCParser.STR, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitStr_Label(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

biesCParser.Str_LabelContext = Str_LabelContext;

class List_LabelContext extends PredSymbolsContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	LIST() {
	    return this.getToken(biesCParser.LIST, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitList_Label(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

biesCParser.List_LabelContext = List_LabelContext;

class Input_LabelContext extends PredSymbolsContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	INPUT() {
	    return this.getToken(biesCParser.INPUT, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitInput_Label(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

biesCParser.Input_LabelContext = Input_LabelContext;

class Int_LabelContext extends PredSymbolsContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	INT() {
	    return this.getToken(biesCParser.INT, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitInt_Label(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

biesCParser.Int_LabelContext = Int_LabelContext;

class Len_LabelContext extends PredSymbolsContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	LEN() {
	    return this.getToken(biesCParser.LEN, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitLen_Label(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

biesCParser.Len_LabelContext = Len_LabelContext;

class Bool_LabelContext extends PredSymbolsContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	BOOL() {
	    return this.getToken(biesCParser.BOOL, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitBool_Label(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

biesCParser.Bool_LabelContext = Bool_LabelContext;

class True_LabelContext extends PredSymbolsContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	TRUE() {
	    return this.getToken(biesCParser.TRUE, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitTrue_Label(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

biesCParser.True_LabelContext = True_LabelContext;

class False_LabelContext extends PredSymbolsContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	FALSE() {
	    return this.getToken(biesCParser.FALSE, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitFalse_Label(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

biesCParser.False_LabelContext = False_LabelContext;

class Null_LabelContext extends PredSymbolsContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	NULL() {
	    return this.getToken(biesCParser.NULL, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitNull_Label(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

biesCParser.Null_LabelContext = Null_LabelContext;


biesCParser.ProgramContext = ProgramContext; 
biesCParser.StatementContext = StatementContext; 
biesCParser.PrintInstrContext = PrintInstrContext; 
biesCParser.SimpleLetInstrContext = SimpleLetInstrContext; 
biesCParser.AnonymousLetFunctionContext = AnonymousLetFunctionContext; 
biesCParser.LetInExprContext = LetInExprContext; 
biesCParser.IfElseExprContext = IfElseExprContext; 
biesCParser.DeclarationContext = DeclarationContext; 
biesCParser.SimpleConstInstrContext = SimpleConstInstrContext; 
biesCParser.AnonymousConstFunctionContext = AnonymousConstFunctionContext; 
biesCParser.PrimarydataContext = PrimarydataContext; 
biesCParser.ExprContext = ExprContext; 
biesCParser.FunctionCallContext = FunctionCallContext; 
biesCParser.NumberContext = NumberContext; 
biesCParser.StringContext = StringContext; 
biesCParser.ArrayContext = ArrayContext; 
biesCParser.IdContext = IdContext; 
biesCParser.PredSymbolsContext = PredSymbolsContext; 
