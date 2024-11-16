// Generated from ./grammar/biesC.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import biesCVisitor from './biesCVisitor.js';

const serializedATN = [4,1,46,402,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,1,0,1,0,3,0,45,8,0,5,0,47,8,0,10,0,12,0,50,9,0,1,0,1,0,1,1,1,1,1,
1,1,1,1,1,1,1,3,1,60,8,1,1,2,1,2,1,2,1,2,3,2,66,8,2,1,2,1,2,1,3,1,3,3,3,
72,8,3,1,3,1,3,3,3,76,8,3,1,3,1,3,3,3,80,8,3,1,3,1,3,1,4,1,4,3,4,86,8,4,
1,4,1,4,3,4,90,8,4,1,4,1,4,3,4,94,8,4,1,4,1,4,1,4,1,4,3,4,100,8,4,1,4,1,
4,3,4,104,8,4,1,4,1,4,3,4,108,8,4,1,4,1,4,3,4,112,8,4,1,4,1,4,1,4,1,4,5,
4,118,8,4,10,4,12,4,121,9,4,3,4,123,8,4,1,4,1,4,1,4,1,4,3,4,129,8,4,3,4,
131,8,4,1,5,1,5,1,5,1,5,5,5,137,8,5,10,5,12,5,140,9,5,5,5,142,8,5,10,5,12,
5,145,9,5,1,5,1,5,1,5,1,5,1,5,1,5,5,5,153,8,5,10,5,12,5,156,9,5,5,5,158,
8,5,10,5,12,5,161,9,5,1,5,3,5,164,8,5,1,6,1,6,3,6,168,8,6,1,6,1,6,1,6,1,
6,3,6,174,8,6,1,6,1,6,3,6,178,8,6,1,6,1,6,3,6,182,8,6,1,6,1,6,3,6,186,8,
6,1,6,1,6,1,7,1,7,1,7,1,7,3,7,194,8,7,1,8,1,8,3,8,198,8,8,1,8,1,8,3,8,202,
8,8,1,8,1,8,3,8,206,8,8,1,8,1,8,1,9,1,9,3,9,212,8,9,1,9,1,9,3,9,216,8,9,
1,9,1,9,3,9,220,8,9,1,9,1,9,1,9,1,9,3,9,226,8,9,1,9,1,9,3,9,230,8,9,1,9,
1,9,3,9,234,8,9,1,9,1,9,3,9,238,8,9,1,9,1,9,1,9,1,9,5,9,244,8,9,10,9,12,
9,247,9,9,3,9,249,8,9,1,9,1,9,1,9,1,9,3,9,255,8,9,3,9,257,8,9,1,10,1,10,
1,10,1,10,3,10,263,8,10,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,3,11,273,
8,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,
11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,
1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,5,11,314,8,11,10,
11,12,11,317,9,11,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,5,12,327,8,12,
10,12,12,12,330,9,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,5,12,339,8,12,10,
12,12,12,342,9,12,1,12,1,12,3,12,346,8,12,1,13,1,13,1,14,1,14,1,15,1,15,
3,15,354,8,15,1,15,1,15,3,15,358,8,15,1,15,3,15,361,8,15,1,15,1,15,3,15,
365,8,15,1,15,1,15,3,15,369,8,15,1,15,3,15,372,8,15,5,15,374,8,15,10,15,
12,15,377,9,15,3,15,379,8,15,1,15,1,15,1,16,1,16,1,17,1,17,1,18,1,18,1,19,
1,19,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,3,20,400,8,20,1,20,0,1,
22,21,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,0,1,1,0,
43,44,468,0,48,1,0,0,0,2,59,1,0,0,0,4,61,1,0,0,0,6,69,1,0,0,0,8,130,1,0,
0,0,10,132,1,0,0,0,12,165,1,0,0,0,14,193,1,0,0,0,16,195,1,0,0,0,18,256,1,
0,0,0,20,262,1,0,0,0,22,272,1,0,0,0,24,345,1,0,0,0,26,347,1,0,0,0,28,349,
1,0,0,0,30,351,1,0,0,0,32,382,1,0,0,0,34,384,1,0,0,0,36,386,1,0,0,0,38,388,
1,0,0,0,40,399,1,0,0,0,42,44,3,2,1,0,43,45,5,43,0,0,44,43,1,0,0,0,44,45,
1,0,0,0,45,47,1,0,0,0,46,42,1,0,0,0,47,50,1,0,0,0,48,46,1,0,0,0,48,49,1,
0,0,0,49,51,1,0,0,0,50,48,1,0,0,0,51,52,5,0,0,1,52,1,1,0,0,0,53,60,3,4,2,
0,54,60,3,6,3,0,55,60,3,8,4,0,56,60,3,24,12,0,57,60,3,10,5,0,58,60,3,12,
6,0,59,53,1,0,0,0,59,54,1,0,0,0,59,55,1,0,0,0,59,56,1,0,0,0,59,57,1,0,0,
0,59,58,1,0,0,0,60,3,1,0,0,0,61,62,5,28,0,0,62,65,5,1,0,0,63,66,3,20,10,
0,64,66,3,22,11,0,65,63,1,0,0,0,65,64,1,0,0,0,66,67,1,0,0,0,67,68,5,2,0,
0,68,5,1,0,0,0,69,71,5,3,0,0,70,72,5,44,0,0,71,70,1,0,0,0,71,72,1,0,0,0,
72,73,1,0,0,0,73,75,3,32,16,0,74,76,5,44,0,0,75,74,1,0,0,0,75,76,1,0,0,0,
76,77,1,0,0,0,77,79,5,4,0,0,78,80,5,44,0,0,79,78,1,0,0,0,79,80,1,0,0,0,80,
81,1,0,0,0,81,82,3,22,11,0,82,7,1,0,0,0,83,85,5,3,0,0,84,86,5,44,0,0,85,
84,1,0,0,0,85,86,1,0,0,0,86,87,1,0,0,0,87,89,3,32,16,0,88,90,5,44,0,0,89,
88,1,0,0,0,89,90,1,0,0,0,90,91,1,0,0,0,91,93,5,4,0,0,92,94,5,44,0,0,93,92,
1,0,0,0,93,94,1,0,0,0,94,95,1,0,0,0,95,96,5,5,0,0,96,99,5,6,0,0,97,100,3,
2,1,0,98,100,3,22,11,0,99,97,1,0,0,0,99,98,1,0,0,0,100,131,1,0,0,0,101,103,
5,3,0,0,102,104,5,44,0,0,103,102,1,0,0,0,103,104,1,0,0,0,104,105,1,0,0,0,
105,107,3,32,16,0,106,108,5,44,0,0,107,106,1,0,0,0,107,108,1,0,0,0,108,109,
1,0,0,0,109,111,5,4,0,0,110,112,5,44,0,0,111,110,1,0,0,0,111,112,1,0,0,0,
112,113,1,0,0,0,113,122,5,1,0,0,114,119,3,32,16,0,115,116,5,7,0,0,116,118,
3,32,16,0,117,115,1,0,0,0,118,121,1,0,0,0,119,117,1,0,0,0,119,120,1,0,0,
0,120,123,1,0,0,0,121,119,1,0,0,0,122,114,1,0,0,0,122,123,1,0,0,0,123,124,
1,0,0,0,124,125,5,2,0,0,125,128,5,6,0,0,126,129,3,2,1,0,127,129,3,22,11,
0,128,126,1,0,0,0,128,127,1,0,0,0,129,131,1,0,0,0,130,83,1,0,0,0,130,101,
1,0,0,0,131,9,1,0,0,0,132,133,5,3,0,0,133,143,5,8,0,0,134,138,3,14,7,0,135,
137,7,0,0,0,136,135,1,0,0,0,137,140,1,0,0,0,138,136,1,0,0,0,138,139,1,0,
0,0,139,142,1,0,0,0,140,138,1,0,0,0,141,134,1,0,0,0,142,145,1,0,0,0,143,
141,1,0,0,0,143,144,1,0,0,0,144,146,1,0,0,0,145,143,1,0,0,0,146,147,5,9,
0,0,147,163,5,10,0,0,148,164,3,2,1,0,149,159,5,8,0,0,150,154,3,2,1,0,151,
153,7,0,0,0,152,151,1,0,0,0,153,156,1,0,0,0,154,152,1,0,0,0,154,155,1,0,
0,0,155,158,1,0,0,0,156,154,1,0,0,0,157,150,1,0,0,0,158,161,1,0,0,0,159,
157,1,0,0,0,159,160,1,0,0,0,160,162,1,0,0,0,161,159,1,0,0,0,162,164,5,9,
0,0,163,148,1,0,0,0,163,149,1,0,0,0,164,11,1,0,0,0,165,167,3,34,17,0,166,
168,5,44,0,0,167,166,1,0,0,0,167,168,1,0,0,0,168,169,1,0,0,0,169,170,5,1,
0,0,170,171,3,22,11,0,171,173,5,2,0,0,172,174,5,44,0,0,173,172,1,0,0,0,173,
174,1,0,0,0,174,175,1,0,0,0,175,177,3,38,19,0,176,178,5,44,0,0,177,176,1,
0,0,0,177,178,1,0,0,0,178,179,1,0,0,0,179,181,3,22,11,0,180,182,5,44,0,0,
181,180,1,0,0,0,181,182,1,0,0,0,182,183,1,0,0,0,183,185,3,36,18,0,184,186,
5,44,0,0,185,184,1,0,0,0,185,186,1,0,0,0,186,187,1,0,0,0,187,188,3,22,11,
0,188,13,1,0,0,0,189,194,3,6,3,0,190,194,3,16,8,0,191,194,3,18,9,0,192,194,
3,8,4,0,193,189,1,0,0,0,193,190,1,0,0,0,193,191,1,0,0,0,193,192,1,0,0,0,
194,15,1,0,0,0,195,197,5,11,0,0,196,198,5,44,0,0,197,196,1,0,0,0,197,198,
1,0,0,0,198,199,1,0,0,0,199,201,3,32,16,0,200,202,5,44,0,0,201,200,1,0,0,
0,201,202,1,0,0,0,202,203,1,0,0,0,203,205,5,4,0,0,204,206,5,44,0,0,205,204,
1,0,0,0,205,206,1,0,0,0,206,207,1,0,0,0,207,208,3,22,11,0,208,17,1,0,0,0,
209,211,5,11,0,0,210,212,5,44,0,0,211,210,1,0,0,0,211,212,1,0,0,0,212,213,
1,0,0,0,213,215,3,32,16,0,214,216,5,44,0,0,215,214,1,0,0,0,215,216,1,0,0,
0,216,217,1,0,0,0,217,219,5,4,0,0,218,220,5,44,0,0,219,218,1,0,0,0,219,220,
1,0,0,0,220,221,1,0,0,0,221,222,5,5,0,0,222,225,5,6,0,0,223,226,3,2,1,0,
224,226,3,22,11,0,225,223,1,0,0,0,225,224,1,0,0,0,226,257,1,0,0,0,227,229,
5,11,0,0,228,230,5,44,0,0,229,228,1,0,0,0,229,230,1,0,0,0,230,231,1,0,0,
0,231,233,3,32,16,0,232,234,5,44,0,0,233,232,1,0,0,0,233,234,1,0,0,0,234,
235,1,0,0,0,235,237,5,4,0,0,236,238,5,44,0,0,237,236,1,0,0,0,237,238,1,0,
0,0,238,239,1,0,0,0,239,248,5,1,0,0,240,245,3,32,16,0,241,242,5,7,0,0,242,
244,3,32,16,0,243,241,1,0,0,0,244,247,1,0,0,0,245,243,1,0,0,0,245,246,1,
0,0,0,246,249,1,0,0,0,247,245,1,0,0,0,248,240,1,0,0,0,248,249,1,0,0,0,249,
250,1,0,0,0,250,251,5,2,0,0,251,254,5,6,0,0,252,255,3,2,1,0,253,255,3,22,
11,0,254,252,1,0,0,0,254,253,1,0,0,0,255,257,1,0,0,0,256,209,1,0,0,0,256,
227,1,0,0,0,257,19,1,0,0,0,258,263,3,26,13,0,259,263,3,28,14,0,260,263,3,
30,15,0,261,263,3,32,16,0,262,258,1,0,0,0,262,259,1,0,0,0,262,260,1,0,0,
0,262,261,1,0,0,0,263,21,1,0,0,0,264,265,6,11,-1,0,265,273,3,8,4,0,266,273,
3,20,10,0,267,273,3,24,12,0,268,269,5,1,0,0,269,270,3,22,11,0,270,271,5,
2,0,0,271,273,1,0,0,0,272,264,1,0,0,0,272,266,1,0,0,0,272,267,1,0,0,0,272,
268,1,0,0,0,273,315,1,0,0,0,274,275,10,14,0,0,275,276,5,30,0,0,276,314,3,
22,11,15,277,278,10,13,0,0,278,279,5,31,0,0,279,314,3,22,11,14,280,281,10,
12,0,0,281,282,5,32,0,0,282,314,3,22,11,13,283,284,10,11,0,0,284,285,5,33,
0,0,285,314,3,22,11,12,286,287,10,10,0,0,287,288,5,34,0,0,288,314,3,22,11,
11,289,290,10,9,0,0,290,291,5,35,0,0,291,314,3,22,11,10,292,293,10,8,0,0,
293,294,5,36,0,0,294,314,3,22,11,9,295,296,10,7,0,0,296,297,5,37,0,0,297,
314,3,22,11,8,298,299,10,6,0,0,299,300,5,38,0,0,300,314,3,22,11,7,301,302,
10,5,0,0,302,303,5,39,0,0,303,314,3,22,11,6,304,305,10,4,0,0,305,306,5,40,
0,0,306,314,3,22,11,5,307,308,10,3,0,0,308,309,5,41,0,0,309,314,3,22,11,
4,310,311,10,2,0,0,311,312,5,42,0,0,312,314,3,22,11,3,313,274,1,0,0,0,313,
277,1,0,0,0,313,280,1,0,0,0,313,283,1,0,0,0,313,286,1,0,0,0,313,289,1,0,
0,0,313,292,1,0,0,0,313,295,1,0,0,0,313,298,1,0,0,0,313,301,1,0,0,0,313,
304,1,0,0,0,313,307,1,0,0,0,313,310,1,0,0,0,314,317,1,0,0,0,315,313,1,0,
0,0,315,316,1,0,0,0,316,23,1,0,0,0,317,315,1,0,0,0,318,319,3,32,16,0,319,
320,5,5,0,0,320,346,1,0,0,0,321,322,3,32,16,0,322,323,5,1,0,0,323,328,3,
22,11,0,324,325,5,7,0,0,325,327,3,22,11,0,326,324,1,0,0,0,327,330,1,0,0,
0,328,326,1,0,0,0,328,329,1,0,0,0,329,331,1,0,0,0,330,328,1,0,0,0,331,332,
5,2,0,0,332,346,1,0,0,0,333,334,3,40,20,0,334,335,5,1,0,0,335,340,3,22,11,
0,336,337,5,7,0,0,337,339,3,22,11,0,338,336,1,0,0,0,339,342,1,0,0,0,340,
338,1,0,0,0,340,341,1,0,0,0,341,343,1,0,0,0,342,340,1,0,0,0,343,344,5,2,
0,0,344,346,1,0,0,0,345,318,1,0,0,0,345,321,1,0,0,0,345,333,1,0,0,0,346,
25,1,0,0,0,347,348,5,27,0,0,348,27,1,0,0,0,349,350,5,26,0,0,350,29,1,0,0,
0,351,353,5,12,0,0,352,354,5,44,0,0,353,352,1,0,0,0,353,354,1,0,0,0,354,
378,1,0,0,0,355,358,3,20,10,0,356,358,3,22,11,0,357,355,1,0,0,0,357,356,
1,0,0,0,358,360,1,0,0,0,359,361,5,44,0,0,360,359,1,0,0,0,360,361,1,0,0,0,
361,375,1,0,0,0,362,364,5,7,0,0,363,365,5,44,0,0,364,363,1,0,0,0,364,365,
1,0,0,0,365,368,1,0,0,0,366,369,3,20,10,0,367,369,3,22,11,0,368,366,1,0,
0,0,368,367,1,0,0,0,369,371,1,0,0,0,370,372,5,44,0,0,371,370,1,0,0,0,371,
372,1,0,0,0,372,374,1,0,0,0,373,362,1,0,0,0,374,377,1,0,0,0,375,373,1,0,
0,0,375,376,1,0,0,0,376,379,1,0,0,0,377,375,1,0,0,0,378,357,1,0,0,0,378,
379,1,0,0,0,379,380,1,0,0,0,380,381,5,13,0,0,381,31,1,0,0,0,382,383,5,29,
0,0,383,33,1,0,0,0,384,385,5,14,0,0,385,35,1,0,0,0,386,387,5,15,0,0,387,
37,1,0,0,0,388,389,5,16,0,0,389,39,1,0,0,0,390,400,5,17,0,0,391,400,5,18,
0,0,392,400,5,19,0,0,393,400,5,20,0,0,394,400,5,21,0,0,395,400,5,22,0,0,
396,400,5,23,0,0,397,400,5,24,0,0,398,400,5,25,0,0,399,390,1,0,0,0,399,391,
1,0,0,0,399,392,1,0,0,0,399,393,1,0,0,0,399,394,1,0,0,0,399,395,1,0,0,0,
399,396,1,0,0,0,399,397,1,0,0,0,399,398,1,0,0,0,400,41,1,0,0,0,59,44,48,
59,65,71,75,79,85,89,93,99,103,107,111,119,122,128,130,138,143,154,159,163,
167,173,177,181,185,193,197,201,205,211,215,219,225,229,233,237,245,248,
254,256,262,272,313,315,328,340,345,353,357,360,364,368,371,375,378,399];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class biesCParser extends antlr4.Parser {

    static grammarFileName = "biesC.g4";
    static literalNames = [ null, "'('", "')'", "'let'", "'='", "'()'", 
                            "'=>'", "','", "'{'", "'}'", "'in'", "'const'", 
                            "'['", "']'", "'if'", "'else'", "'then'", "'bool'", 
                            "'true'", "'false'", "'null'", "'input'", "'int'", 
                            "'str'", "'list'", "'len'", null, null, "'print'", 
                            null, "'*'", "'/'", "'+'", "'-'", "'**'", "'&&'", 
                            "'||'", "'=='", "'!='", "'<'", "'>'", "'<='", 
                            "'>='" ];
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
                         "string", "array", "id", "if", "else", "then", 
                         "predSymbols" ];

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
	        this.state = 48;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 872300552) !== 0)) {
	            this.state = 42;
	            this.statement();
	            this.state = 44;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===43) {
	                this.state = 43;
	                this.match(biesCParser.NL);
	            }

	            this.state = 50;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 51;
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
	        this.state = 59;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 53;
	            this.printInstr();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 54;
	            this.simpleLetInstr();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 55;
	            this.anonymousLetFunction();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 56;
	            this.functionCall();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 57;
	            this.letInExpr();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 58;
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
	        this.state = 61;
	        this.match(biesCParser.PRINT);
	        this.state = 62;
	        this.match(biesCParser.T__0);
	        this.state = 65;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 63;
	            this.primarydata();
	            break;

	        case 2:
	            this.state = 64;
	            this.expr(0);
	            break;

	        }
	        this.state = 67;
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
	        this.state = 69;
	        this.match(biesCParser.T__2);
	        this.state = 71;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===44) {
	            this.state = 70;
	            this.match(biesCParser.WS);
	        }

	        this.state = 73;
	        this.id();
	        this.state = 75;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===44) {
	            this.state = 74;
	            this.match(biesCParser.WS);
	        }

	        this.state = 77;
	        this.match(biesCParser.T__3);
	        this.state = 79;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===44) {
	            this.state = 78;
	            this.match(biesCParser.WS);
	        }

	        this.state = 81;
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
	        this.state = 130;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new LambdaNoParams_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 83;
	            this.match(biesCParser.T__2);
	            this.state = 85;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===44) {
	                this.state = 84;
	                this.match(biesCParser.WS);
	            }

	            this.state = 87;
	            this.id();
	            this.state = 89;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===44) {
	                this.state = 88;
	                this.match(biesCParser.WS);
	            }

	            this.state = 91;
	            this.match(biesCParser.T__3);
	            this.state = 93;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===44) {
	                this.state = 92;
	                this.match(biesCParser.WS);
	            }

	            this.state = 95;
	            this.match(biesCParser.T__4);
	            this.state = 96;
	            this.match(biesCParser.T__5);
	            this.state = 99;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 97;
	                this.statement();
	                break;

	            case 2:
	                this.state = 98;
	                this.expr(0);
	                break;

	            }
	            break;

	        case 2:
	            localctx = new LambdaWithParams_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 101;
	            this.match(biesCParser.T__2);
	            this.state = 103;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===44) {
	                this.state = 102;
	                this.match(biesCParser.WS);
	            }

	            this.state = 105;
	            this.id();
	            this.state = 107;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===44) {
	                this.state = 106;
	                this.match(biesCParser.WS);
	            }

	            this.state = 109;
	            this.match(biesCParser.T__3);
	            this.state = 111;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===44) {
	                this.state = 110;
	                this.match(biesCParser.WS);
	            }

	            this.state = 113;
	            this.match(biesCParser.T__0);
	            this.state = 122;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===29) {
	                this.state = 114;
	                this.id();
	                this.state = 119;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===7) {
	                    this.state = 115;
	                    this.match(biesCParser.T__6);
	                    this.state = 116;
	                    this.id();
	                    this.state = 121;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	            }

	            this.state = 124;
	            this.match(biesCParser.T__1);
	            this.state = 125;
	            this.match(biesCParser.T__5);
	            this.state = 128;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 126;
	                this.statement();
	                break;

	            case 2:
	                this.state = 127;
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
	        this.state = 132;
	        this.match(biesCParser.T__2);
	        this.state = 133;
	        this.match(biesCParser.T__7);
	        this.state = 143;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===3 || _la===11) {
	            this.state = 134;
	            this.declaration();
	            this.state = 138;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===43 || _la===44) {
	                this.state = 135;
	                _la = this._input.LA(1);
	                if(!(_la===43 || _la===44)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 140;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 145;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 146;
	        this.match(biesCParser.T__8);
	        this.state = 147;
	        this.match(biesCParser.T__9);
	        this.state = 163;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 3:
	        case 14:
	        case 17:
	        case 18:
	        case 19:
	        case 20:
	        case 21:
	        case 22:
	        case 23:
	        case 24:
	        case 25:
	        case 28:
	        case 29:
	            this.state = 148;
	            this.statement();
	            break;
	        case 8:
	            this.state = 149;
	            this.match(biesCParser.T__7);
	            this.state = 159;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) === 0 && ((1 << _la) & 872300552) !== 0)) {
	                this.state = 150;
	                this.statement();
	                this.state = 154;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===43 || _la===44) {
	                    this.state = 151;
	                    _la = this._input.LA(1);
	                    if(!(_la===43 || _la===44)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 156;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	                this.state = 161;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 162;
	            this.match(biesCParser.T__8);
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



	ifElseExpr() {
	    let localctx = new IfElseExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, biesCParser.RULE_ifElseExpr);
	    var _la = 0;
	    try {
	        localctx = new IfElseExpr_LabelContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 165;
	        this.if_();
	        this.state = 167;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===44) {
	            this.state = 166;
	            this.match(biesCParser.WS);
	        }

	        this.state = 169;
	        this.match(biesCParser.T__0);
	        this.state = 170;
	        this.expr(0);
	        this.state = 171;
	        this.match(biesCParser.T__1);
	        this.state = 173;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===44) {
	            this.state = 172;
	            this.match(biesCParser.WS);
	        }

	        this.state = 175;
	        this.then();
	        this.state = 177;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===44) {
	            this.state = 176;
	            this.match(biesCParser.WS);
	        }

	        this.state = 179;
	        this.expr(0);
	        this.state = 181;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===44) {
	            this.state = 180;
	            this.match(biesCParser.WS);
	        }

	        this.state = 183;
	        this.else_();
	        this.state = 185;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===44) {
	            this.state = 184;
	            this.match(biesCParser.WS);
	        }

	        this.state = 187;
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
	        this.state = 193;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,28,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 189;
	            this.simpleLetInstr();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 190;
	            this.simpleConstInstr();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 191;
	            this.anonymousConstFunction();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 192;
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
	        this.state = 195;
	        this.match(biesCParser.T__10);
	        this.state = 197;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===44) {
	            this.state = 196;
	            this.match(biesCParser.WS);
	        }

	        this.state = 199;
	        this.id();
	        this.state = 201;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===44) {
	            this.state = 200;
	            this.match(biesCParser.WS);
	        }

	        this.state = 203;
	        this.match(biesCParser.T__3);
	        this.state = 205;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===44) {
	            this.state = 204;
	            this.match(biesCParser.WS);
	        }

	        this.state = 207;
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
	        this.state = 256;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,42,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new LambdaConstNoParams_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 209;
	            this.match(biesCParser.T__10);
	            this.state = 211;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===44) {
	                this.state = 210;
	                this.match(biesCParser.WS);
	            }

	            this.state = 213;
	            this.id();
	            this.state = 215;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===44) {
	                this.state = 214;
	                this.match(biesCParser.WS);
	            }

	            this.state = 217;
	            this.match(biesCParser.T__3);
	            this.state = 219;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===44) {
	                this.state = 218;
	                this.match(biesCParser.WS);
	            }

	            this.state = 221;
	            this.match(biesCParser.T__4);
	            this.state = 222;
	            this.match(biesCParser.T__5);
	            this.state = 225;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,35,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 223;
	                this.statement();
	                break;

	            case 2:
	                this.state = 224;
	                this.expr(0);
	                break;

	            }
	            break;

	        case 2:
	            localctx = new LambdaConstWithParams_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 227;
	            this.match(biesCParser.T__10);
	            this.state = 229;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===44) {
	                this.state = 228;
	                this.match(biesCParser.WS);
	            }

	            this.state = 231;
	            this.id();
	            this.state = 233;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===44) {
	                this.state = 232;
	                this.match(biesCParser.WS);
	            }

	            this.state = 235;
	            this.match(biesCParser.T__3);
	            this.state = 237;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===44) {
	                this.state = 236;
	                this.match(biesCParser.WS);
	            }

	            this.state = 239;
	            this.match(biesCParser.T__0);
	            this.state = 248;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===29) {
	                this.state = 240;
	                this.id();
	                this.state = 245;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===7) {
	                    this.state = 241;
	                    this.match(biesCParser.T__6);
	                    this.state = 242;
	                    this.id();
	                    this.state = 247;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	            }

	            this.state = 250;
	            this.match(biesCParser.T__1);
	            this.state = 251;
	            this.match(biesCParser.T__5);
	            this.state = 254;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,41,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 252;
	                this.statement();
	                break;

	            case 2:
	                this.state = 253;
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
	        this.state = 262;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 27:
	            localctx = new Number_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 258;
	            this.number();
	            break;
	        case 26:
	            localctx = new String_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 259;
	            this.string();
	            break;
	        case 12:
	            localctx = new Array_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 260;
	            this.array();
	            break;
	        case 29:
	            localctx = new Id_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 261;
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
	        this.state = 272;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,44,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new AnonymousFunctionExpr_LabelContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 265;
	            this.anonymousLetFunction();
	            break;

	        case 2:
	            localctx = new PrimaryData_LabelContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 266;
	            this.primarydata();
	            break;

	        case 3:
	            localctx = new FunctionCallExpr_LabelContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 267;
	            this.functionCall();
	            break;

	        case 4:
	            localctx = new Exp_LabelContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 268;
	            this.match(biesCParser.T__0);
	            this.state = 269;
	            this.expr(0);
	            this.state = 270;
	            this.match(biesCParser.T__1);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 315;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,46,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 313;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,45,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new Mul_LabelContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expr);
	                    this.state = 274;
	                    if (!( this.precpred(this._ctx, 14))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 14)");
	                    }
	                    this.state = 275;
	                    this.match(biesCParser.MULT);
	                    this.state = 276;
	                    this.expr(15);
	                    break;

	                case 2:
	                    localctx = new Div_LabelContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expr);
	                    this.state = 277;
	                    if (!( this.precpred(this._ctx, 13))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
	                    }
	                    this.state = 278;
	                    this.match(biesCParser.DIV);
	                    this.state = 279;
	                    this.expr(14);
	                    break;

	                case 3:
	                    localctx = new Add_LabelContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expr);
	                    this.state = 280;
	                    if (!( this.precpred(this._ctx, 12))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
	                    }
	                    this.state = 281;
	                    this.match(biesCParser.ADD);
	                    this.state = 282;
	                    this.expr(13);
	                    break;

	                case 4:
	                    localctx = new Sub_LabelContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expr);
	                    this.state = 283;
	                    if (!( this.precpred(this._ctx, 11))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
	                    }
	                    this.state = 284;
	                    this.match(biesCParser.SUB);
	                    this.state = 285;
	                    this.expr(12);
	                    break;

	                case 5:
	                    localctx = new Pow_LabelContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expr);
	                    this.state = 286;
	                    if (!( this.precpred(this._ctx, 10))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
	                    }
	                    this.state = 287;
	                    this.match(biesCParser.POW);
	                    this.state = 288;
	                    this.expr(11);
	                    break;

	                case 6:
	                    localctx = new And_LabelContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expr);
	                    this.state = 289;
	                    if (!( this.precpred(this._ctx, 9))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
	                    }
	                    this.state = 290;
	                    this.match(biesCParser.AND);
	                    this.state = 291;
	                    this.expr(10);
	                    break;

	                case 7:
	                    localctx = new Or_LabelContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expr);
	                    this.state = 292;
	                    if (!( this.precpred(this._ctx, 8))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                    }
	                    this.state = 293;
	                    this.match(biesCParser.OR);
	                    this.state = 294;
	                    this.expr(9);
	                    break;

	                case 8:
	                    localctx = new Eq_LabelContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expr);
	                    this.state = 295;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 296;
	                    this.match(biesCParser.EQ);
	                    this.state = 297;
	                    this.expr(8);
	                    break;

	                case 9:
	                    localctx = new Neq_LabelContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expr);
	                    this.state = 298;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 299;
	                    this.match(biesCParser.NEQ);
	                    this.state = 300;
	                    this.expr(7);
	                    break;

	                case 10:
	                    localctx = new Lt_LabelContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expr);
	                    this.state = 301;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 302;
	                    this.match(biesCParser.LT);
	                    this.state = 303;
	                    this.expr(6);
	                    break;

	                case 11:
	                    localctx = new Gt_LabelContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expr);
	                    this.state = 304;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 305;
	                    this.match(biesCParser.GT);
	                    this.state = 306;
	                    this.expr(5);
	                    break;

	                case 12:
	                    localctx = new Le_LabelContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expr);
	                    this.state = 307;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 308;
	                    this.match(biesCParser.LE);
	                    this.state = 309;
	                    this.expr(4);
	                    break;

	                case 13:
	                    localctx = new Ge_LabelContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expr);
	                    this.state = 310;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 311;
	                    this.match(biesCParser.GE);
	                    this.state = 312;
	                    this.expr(3);
	                    break;

	                } 
	            }
	            this.state = 317;
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
	        this.state = 345;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,49,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new FunctionCallNoParams_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 318;
	            this.id();
	            this.state = 319;
	            this.match(biesCParser.T__4);
	            break;

	        case 2:
	            localctx = new FunctionCallWithParams_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 321;
	            this.id();
	            this.state = 322;
	            this.match(biesCParser.T__0);
	            this.state = 323;
	            this.expr(0);
	            this.state = 328;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===7) {
	                this.state = 324;
	                this.match(biesCParser.T__6);
	                this.state = 325;
	                this.expr(0);
	                this.state = 330;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 331;
	            this.match(biesCParser.T__1);
	            break;

	        case 3:
	            localctx = new PredifinedFunctionCall_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 333;
	            this.predSymbols();
	            this.state = 334;
	            this.match(biesCParser.T__0);
	            this.state = 335;
	            this.expr(0);
	            this.state = 340;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===7) {
	                this.state = 336;
	                this.match(biesCParser.T__6);
	                this.state = 337;
	                this.expr(0);
	                this.state = 342;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 343;
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
	        this.state = 347;
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
	        this.state = 349;
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
	        this.state = 351;
	        this.match(biesCParser.T__11);
	        this.state = 353;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===44) {
	            this.state = 352;
	            this.match(biesCParser.WS);
	        }

	        this.state = 378;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 805179402) !== 0)) {
	            this.state = 357;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,51,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 355;
	                this.primarydata();
	                break;

	            case 2:
	                this.state = 356;
	                this.expr(0);
	                break;

	            }
	            this.state = 360;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===44) {
	                this.state = 359;
	                this.match(biesCParser.WS);
	            }

	            this.state = 375;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===7) {
	                this.state = 362;
	                this.match(biesCParser.T__6);
	                this.state = 364;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===44) {
	                    this.state = 363;
	                    this.match(biesCParser.WS);
	                }

	                this.state = 368;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,54,this._ctx);
	                switch(la_) {
	                case 1:
	                    this.state = 366;
	                    this.primarydata();
	                    break;

	                case 2:
	                    this.state = 367;
	                    this.expr(0);
	                    break;

	                }
	                this.state = 371;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===44) {
	                    this.state = 370;
	                    this.match(biesCParser.WS);
	                }

	                this.state = 377;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 380;
	        this.match(biesCParser.T__12);
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
	        this.state = 382;
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



	if_() {
	    let localctx = new IfContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, biesCParser.RULE_if);
	    try {
	        localctx = new If_LabelContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 384;
	        this.match(biesCParser.T__13);
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



	else_() {
	    let localctx = new ElseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, biesCParser.RULE_else);
	    try {
	        localctx = new Else_LabelContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 386;
	        this.match(biesCParser.T__14);
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



	then() {
	    let localctx = new ThenContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, biesCParser.RULE_then);
	    try {
	        localctx = new Then_LabelContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 388;
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



	predSymbols() {
	    let localctx = new PredSymbolsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, biesCParser.RULE_predSymbols);
	    try {
	        this.state = 399;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 17:
	            localctx = new Bool_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 390;
	            this.match(biesCParser.BOOL);
	            break;
	        case 18:
	            localctx = new True_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 391;
	            this.match(biesCParser.TRUE);
	            break;
	        case 19:
	            localctx = new False_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 392;
	            this.match(biesCParser.FALSE);
	            break;
	        case 20:
	            localctx = new Null_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 393;
	            this.match(biesCParser.NULL);
	            break;
	        case 21:
	            localctx = new Input_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 5);
	            this.state = 394;
	            this.match(biesCParser.INPUT);
	            break;
	        case 22:
	            localctx = new Int_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 6);
	            this.state = 395;
	            this.match(biesCParser.INT);
	            break;
	        case 23:
	            localctx = new Str_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 7);
	            this.state = 396;
	            this.match(biesCParser.STR);
	            break;
	        case 24:
	            localctx = new List_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 8);
	            this.state = 397;
	            this.match(biesCParser.LIST);
	            break;
	        case 25:
	            localctx = new Len_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 9);
	            this.state = 398;
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
biesCParser.RULE_if = 17;
biesCParser.RULE_else = 18;
biesCParser.RULE_then = 19;
biesCParser.RULE_predSymbols = 20;

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

	if_() {
	    return this.getTypedRuleContext(IfContext,0);
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

	then() {
	    return this.getTypedRuleContext(ThenContext,0);
	};

	else_() {
	    return this.getTypedRuleContext(ElseContext,0);
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



class IfContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesCParser.RULE_if;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class If_LabelContext extends IfContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }


	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitIf_Label(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

biesCParser.If_LabelContext = If_LabelContext;

class ElseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesCParser.RULE_else;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class Else_LabelContext extends ElseContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }


	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitElse_Label(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

biesCParser.Else_LabelContext = Else_LabelContext;

class ThenContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesCParser.RULE_then;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class Then_LabelContext extends ThenContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }


	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitThen_Label(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

biesCParser.Then_LabelContext = Then_LabelContext;

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
biesCParser.IfContext = IfContext; 
biesCParser.ElseContext = ElseContext; 
biesCParser.ThenContext = ThenContext; 
biesCParser.PredSymbolsContext = PredSymbolsContext; 
