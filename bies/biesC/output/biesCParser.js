// Generated from ./grammar/biesC.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import biesCVisitor from './biesCVisitor.js';

const serializedATN = [4,1,47,463,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,1,0,1,0,3,0,51,8,0,5,0,53,8,0,10,0,
12,0,56,9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,69,8,1,1,2,1,
2,1,2,1,2,3,2,75,8,2,1,2,1,2,1,3,1,3,3,3,81,8,3,1,3,1,3,3,3,85,8,3,1,3,1,
3,3,3,89,8,3,1,3,1,3,1,4,1,4,3,4,95,8,4,1,4,1,4,3,4,99,8,4,1,4,1,4,3,4,103,
8,4,1,4,1,4,1,4,1,4,3,4,109,8,4,1,4,1,4,3,4,113,8,4,1,4,1,4,3,4,117,8,4,
1,4,1,4,3,4,121,8,4,1,4,1,4,1,4,1,4,5,4,127,8,4,10,4,12,4,130,9,4,3,4,132,
8,4,1,4,1,4,1,4,1,4,3,4,138,8,4,1,4,1,4,3,4,142,8,4,1,4,1,4,3,4,146,8,4,
1,4,1,4,3,4,150,8,4,1,4,1,4,3,4,154,8,4,1,4,1,4,3,4,158,8,4,1,4,5,4,161,
8,4,10,4,12,4,164,9,4,1,4,3,4,167,8,4,1,4,1,4,1,4,3,4,172,8,4,3,4,174,8,
4,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,3,6,184,8,6,1,6,1,6,3,6,188,8,6,1,6,1,
6,3,6,192,8,6,1,7,1,7,1,7,1,7,1,7,5,7,199,8,7,10,7,12,7,202,9,7,5,7,204,
8,7,10,7,12,7,207,9,7,1,7,1,7,1,8,1,8,1,8,1,8,1,8,1,8,5,8,217,8,8,10,8,12,
8,220,9,8,5,8,222,8,8,10,8,12,8,225,9,8,1,8,3,8,228,8,8,1,9,1,9,1,9,1,9,
1,10,1,10,3,10,236,8,10,1,10,1,10,3,10,240,8,10,1,10,1,10,3,10,244,8,10,
1,10,1,10,1,11,1,11,3,11,250,8,11,1,11,1,11,3,11,254,8,11,1,11,1,11,3,11,
258,8,11,1,11,1,11,1,11,1,11,3,11,264,8,11,1,11,1,11,3,11,268,8,11,1,11,
1,11,3,11,272,8,11,1,11,1,11,3,11,276,8,11,1,11,1,11,1,11,1,11,5,11,282,
8,11,10,11,12,11,285,9,11,3,11,287,8,11,1,11,1,11,1,11,1,11,3,11,293,8,11,
3,11,295,8,11,1,12,1,12,1,12,1,12,3,12,301,8,12,1,13,1,13,1,13,1,13,1,13,
1,13,1,13,1,13,1,13,1,13,3,13,313,8,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,
1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,5,
13,336,8,13,10,13,12,13,339,9,13,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,
5,14,349,8,14,10,14,12,14,352,9,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,
14,1,14,1,14,5,14,364,8,14,10,14,12,14,367,9,14,1,14,1,14,1,14,1,14,1,14,
5,14,374,8,14,10,14,12,14,377,9,14,1,14,1,14,3,14,381,8,14,1,15,1,15,1,16,
1,16,1,17,1,17,3,17,389,8,17,1,17,1,17,3,17,393,8,17,1,17,3,17,396,8,17,
1,17,1,17,3,17,400,8,17,1,17,1,17,3,17,404,8,17,1,17,3,17,407,8,17,5,17,
409,8,17,10,17,12,17,412,9,17,3,17,414,8,17,1,17,1,17,1,18,1,18,1,19,1,19,
3,19,422,8,19,1,19,1,19,1,19,1,19,3,19,428,8,19,1,20,1,20,3,20,432,8,20,
1,20,1,20,3,20,436,8,20,1,21,1,21,3,21,440,8,21,1,21,1,21,1,22,1,22,1,22,
1,22,3,22,448,8,22,1,22,1,22,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,
3,23,461,8,23,1,23,0,1,26,24,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,
32,34,36,38,40,42,44,46,0,6,2,0,3,3,7,7,1,0,44,45,1,0,31,32,1,0,33,34,1,
0,38,39,1,0,40,43,539,0,54,1,0,0,0,2,68,1,0,0,0,4,70,1,0,0,0,6,78,1,0,0,
0,8,173,1,0,0,0,10,175,1,0,0,0,12,191,1,0,0,0,14,193,1,0,0,0,16,210,1,0,
0,0,18,229,1,0,0,0,20,233,1,0,0,0,22,294,1,0,0,0,24,300,1,0,0,0,26,312,1,
0,0,0,28,380,1,0,0,0,30,382,1,0,0,0,32,384,1,0,0,0,34,386,1,0,0,0,36,417,
1,0,0,0,38,419,1,0,0,0,40,429,1,0,0,0,42,437,1,0,0,0,44,443,1,0,0,0,46,460,
1,0,0,0,48,50,3,2,1,0,49,51,5,44,0,0,50,49,1,0,0,0,50,51,1,0,0,0,51,53,1,
0,0,0,52,48,1,0,0,0,53,56,1,0,0,0,54,52,1,0,0,0,54,55,1,0,0,0,55,57,1,0,
0,0,56,54,1,0,0,0,57,58,5,0,0,1,58,1,1,0,0,0,59,69,3,4,2,0,60,69,3,6,3,0,
61,69,3,20,10,0,62,69,3,8,4,0,63,69,3,22,11,0,64,69,3,28,14,0,65,69,3,10,
5,0,66,69,3,18,9,0,67,69,3,12,6,0,68,59,1,0,0,0,68,60,1,0,0,0,68,61,1,0,
0,0,68,62,1,0,0,0,68,63,1,0,0,0,68,64,1,0,0,0,68,65,1,0,0,0,68,66,1,0,0,
0,68,67,1,0,0,0,69,3,1,0,0,0,70,71,5,29,0,0,71,74,5,1,0,0,72,75,3,24,12,
0,73,75,3,26,13,0,74,72,1,0,0,0,74,73,1,0,0,0,75,76,1,0,0,0,76,77,5,2,0,
0,77,5,1,0,0,0,78,80,5,3,0,0,79,81,5,45,0,0,80,79,1,0,0,0,80,81,1,0,0,0,
81,82,1,0,0,0,82,84,3,36,18,0,83,85,5,45,0,0,84,83,1,0,0,0,84,85,1,0,0,0,
85,86,1,0,0,0,86,88,5,4,0,0,87,89,5,45,0,0,88,87,1,0,0,0,88,89,1,0,0,0,89,
90,1,0,0,0,90,91,3,26,13,0,91,7,1,0,0,0,92,94,5,3,0,0,93,95,5,45,0,0,94,
93,1,0,0,0,94,95,1,0,0,0,95,96,1,0,0,0,96,98,3,36,18,0,97,99,5,45,0,0,98,
97,1,0,0,0,98,99,1,0,0,0,99,100,1,0,0,0,100,102,5,4,0,0,101,103,5,45,0,0,
102,101,1,0,0,0,102,103,1,0,0,0,103,104,1,0,0,0,104,105,5,5,0,0,105,108,
5,6,0,0,106,109,3,2,1,0,107,109,3,26,13,0,108,106,1,0,0,0,108,107,1,0,0,
0,109,174,1,0,0,0,110,112,7,0,0,0,111,113,5,45,0,0,112,111,1,0,0,0,112,113,
1,0,0,0,113,114,1,0,0,0,114,116,3,36,18,0,115,117,5,45,0,0,116,115,1,0,0,
0,116,117,1,0,0,0,117,118,1,0,0,0,118,120,5,4,0,0,119,121,5,45,0,0,120,119,
1,0,0,0,120,121,1,0,0,0,121,122,1,0,0,0,122,131,5,1,0,0,123,128,3,36,18,
0,124,125,5,8,0,0,125,127,3,36,18,0,126,124,1,0,0,0,127,130,1,0,0,0,128,
126,1,0,0,0,128,129,1,0,0,0,129,132,1,0,0,0,130,128,1,0,0,0,131,123,1,0,
0,0,131,132,1,0,0,0,132,133,1,0,0,0,133,134,5,2,0,0,134,137,5,6,0,0,135,
138,3,2,1,0,136,138,3,26,13,0,137,135,1,0,0,0,137,136,1,0,0,0,138,174,1,
0,0,0,139,141,5,3,0,0,140,142,5,45,0,0,141,140,1,0,0,0,141,142,1,0,0,0,142,
143,1,0,0,0,143,145,3,36,18,0,144,146,5,45,0,0,145,144,1,0,0,0,145,146,1,
0,0,0,146,147,1,0,0,0,147,149,5,4,0,0,148,150,5,45,0,0,149,148,1,0,0,0,149,
150,1,0,0,0,150,151,1,0,0,0,151,162,3,36,18,0,152,154,5,45,0,0,153,152,1,
0,0,0,153,154,1,0,0,0,154,155,1,0,0,0,155,157,5,6,0,0,156,158,5,45,0,0,157,
156,1,0,0,0,157,158,1,0,0,0,158,159,1,0,0,0,159,161,3,36,18,0,160,153,1,
0,0,0,161,164,1,0,0,0,162,160,1,0,0,0,162,163,1,0,0,0,163,166,1,0,0,0,164,
162,1,0,0,0,165,167,5,45,0,0,166,165,1,0,0,0,166,167,1,0,0,0,167,168,1,0,
0,0,168,171,5,6,0,0,169,172,3,2,1,0,170,172,3,26,13,0,171,169,1,0,0,0,171,
170,1,0,0,0,172,174,1,0,0,0,173,92,1,0,0,0,173,110,1,0,0,0,173,139,1,0,0,
0,174,9,1,0,0,0,175,176,3,14,7,0,176,177,3,16,8,0,177,11,1,0,0,0,178,179,
5,22,0,0,179,192,5,5,0,0,180,181,5,22,0,0,181,183,5,1,0,0,182,184,5,45,0,
0,183,182,1,0,0,0,183,184,1,0,0,0,184,185,1,0,0,0,185,187,3,26,13,0,186,
188,5,45,0,0,187,186,1,0,0,0,187,188,1,0,0,0,188,189,1,0,0,0,189,190,5,2,
0,0,190,192,1,0,0,0,191,178,1,0,0,0,191,180,1,0,0,0,192,13,1,0,0,0,193,194,
5,3,0,0,194,205,5,9,0,0,195,204,3,22,11,0,196,200,3,20,10,0,197,199,7,1,
0,0,198,197,1,0,0,0,199,202,1,0,0,0,200,198,1,0,0,0,200,201,1,0,0,0,201,
204,1,0,0,0,202,200,1,0,0,0,203,195,1,0,0,0,203,196,1,0,0,0,204,207,1,0,
0,0,205,203,1,0,0,0,205,206,1,0,0,0,206,208,1,0,0,0,207,205,1,0,0,0,208,
209,5,10,0,0,209,15,1,0,0,0,210,227,5,11,0,0,211,228,3,2,1,0,212,223,5,9,
0,0,213,222,3,2,1,0,214,218,3,26,13,0,215,217,7,1,0,0,216,215,1,0,0,0,217,
220,1,0,0,0,218,216,1,0,0,0,218,219,1,0,0,0,219,222,1,0,0,0,220,218,1,0,
0,0,221,213,1,0,0,0,221,214,1,0,0,0,222,225,1,0,0,0,223,221,1,0,0,0,223,
224,1,0,0,0,224,226,1,0,0,0,225,223,1,0,0,0,226,228,5,10,0,0,227,211,1,0,
0,0,227,212,1,0,0,0,228,17,1,0,0,0,229,230,3,38,19,0,230,231,3,40,20,0,231,
232,3,42,21,0,232,19,1,0,0,0,233,235,5,12,0,0,234,236,5,45,0,0,235,234,1,
0,0,0,235,236,1,0,0,0,236,237,1,0,0,0,237,239,3,36,18,0,238,240,5,45,0,0,
239,238,1,0,0,0,239,240,1,0,0,0,240,241,1,0,0,0,241,243,5,4,0,0,242,244,
5,45,0,0,243,242,1,0,0,0,243,244,1,0,0,0,244,245,1,0,0,0,245,246,3,26,13,
0,246,21,1,0,0,0,247,249,5,12,0,0,248,250,5,45,0,0,249,248,1,0,0,0,249,250,
1,0,0,0,250,251,1,0,0,0,251,253,3,36,18,0,252,254,5,45,0,0,253,252,1,0,0,
0,253,254,1,0,0,0,254,255,1,0,0,0,255,257,5,4,0,0,256,258,5,45,0,0,257,256,
1,0,0,0,257,258,1,0,0,0,258,259,1,0,0,0,259,260,5,5,0,0,260,263,5,6,0,0,
261,264,3,2,1,0,262,264,3,26,13,0,263,261,1,0,0,0,263,262,1,0,0,0,264,295,
1,0,0,0,265,267,5,12,0,0,266,268,5,45,0,0,267,266,1,0,0,0,267,268,1,0,0,
0,268,269,1,0,0,0,269,271,3,36,18,0,270,272,5,45,0,0,271,270,1,0,0,0,271,
272,1,0,0,0,272,273,1,0,0,0,273,275,5,4,0,0,274,276,5,45,0,0,275,274,1,0,
0,0,275,276,1,0,0,0,276,277,1,0,0,0,277,286,5,1,0,0,278,283,3,36,18,0,279,
280,5,8,0,0,280,282,3,36,18,0,281,279,1,0,0,0,282,285,1,0,0,0,283,281,1,
0,0,0,283,284,1,0,0,0,284,287,1,0,0,0,285,283,1,0,0,0,286,278,1,0,0,0,286,
287,1,0,0,0,287,288,1,0,0,0,288,289,5,2,0,0,289,292,5,6,0,0,290,293,3,2,
1,0,291,293,3,26,13,0,292,290,1,0,0,0,292,291,1,0,0,0,293,295,1,0,0,0,294,
247,1,0,0,0,294,265,1,0,0,0,295,23,1,0,0,0,296,301,3,30,15,0,297,301,3,32,
16,0,298,301,3,34,17,0,299,301,3,36,18,0,300,296,1,0,0,0,300,297,1,0,0,0,
300,298,1,0,0,0,300,299,1,0,0,0,301,25,1,0,0,0,302,303,6,13,-1,0,303,304,
5,1,0,0,304,305,3,26,13,0,305,306,5,2,0,0,306,313,1,0,0,0,307,313,3,8,4,
0,308,313,3,24,12,0,309,313,3,28,14,0,310,313,3,44,22,0,311,313,3,46,23,
0,312,302,1,0,0,0,312,307,1,0,0,0,312,308,1,0,0,0,312,309,1,0,0,0,312,310,
1,0,0,0,312,311,1,0,0,0,313,337,1,0,0,0,314,315,10,8,0,0,315,316,5,35,0,
0,316,336,3,26,13,9,317,318,10,7,0,0,318,319,7,2,0,0,319,336,3,26,13,8,320,
321,10,6,0,0,321,322,7,3,0,0,322,336,3,26,13,7,323,324,10,5,0,0,324,325,
7,4,0,0,325,336,3,26,13,6,326,327,10,4,0,0,327,328,7,5,0,0,328,336,3,26,
13,5,329,330,10,3,0,0,330,331,5,36,0,0,331,336,3,26,13,4,332,333,10,2,0,
0,333,334,5,37,0,0,334,336,3,26,13,3,335,314,1,0,0,0,335,317,1,0,0,0,335,
320,1,0,0,0,335,323,1,0,0,0,335,326,1,0,0,0,335,329,1,0,0,0,335,332,1,0,
0,0,336,339,1,0,0,0,337,335,1,0,0,0,337,338,1,0,0,0,338,27,1,0,0,0,339,337,
1,0,0,0,340,341,3,36,18,0,341,342,5,5,0,0,342,381,1,0,0,0,343,344,3,36,18,
0,344,345,5,1,0,0,345,350,3,26,13,0,346,347,5,8,0,0,347,349,3,26,13,0,348,
346,1,0,0,0,349,352,1,0,0,0,350,348,1,0,0,0,350,351,1,0,0,0,351,353,1,0,
0,0,352,350,1,0,0,0,353,354,5,2,0,0,354,381,1,0,0,0,355,356,3,36,18,0,356,
357,5,1,0,0,357,358,3,26,13,0,358,365,5,2,0,0,359,360,5,1,0,0,360,361,3,
26,13,0,361,362,5,2,0,0,362,364,1,0,0,0,363,359,1,0,0,0,364,367,1,0,0,0,
365,363,1,0,0,0,365,366,1,0,0,0,366,381,1,0,0,0,367,365,1,0,0,0,368,369,
3,46,23,0,369,370,5,1,0,0,370,375,3,26,13,0,371,372,5,8,0,0,372,374,3,26,
13,0,373,371,1,0,0,0,374,377,1,0,0,0,375,373,1,0,0,0,375,376,1,0,0,0,376,
378,1,0,0,0,377,375,1,0,0,0,378,379,5,2,0,0,379,381,1,0,0,0,380,340,1,0,
0,0,380,343,1,0,0,0,380,355,1,0,0,0,380,368,1,0,0,0,381,29,1,0,0,0,382,383,
5,28,0,0,383,31,1,0,0,0,384,385,5,27,0,0,385,33,1,0,0,0,386,388,5,13,0,0,
387,389,5,45,0,0,388,387,1,0,0,0,388,389,1,0,0,0,389,413,1,0,0,0,390,393,
3,24,12,0,391,393,3,26,13,0,392,390,1,0,0,0,392,391,1,0,0,0,393,395,1,0,
0,0,394,396,5,45,0,0,395,394,1,0,0,0,395,396,1,0,0,0,396,410,1,0,0,0,397,
399,5,8,0,0,398,400,5,45,0,0,399,398,1,0,0,0,399,400,1,0,0,0,400,403,1,0,
0,0,401,404,3,24,12,0,402,404,3,26,13,0,403,401,1,0,0,0,403,402,1,0,0,0,
404,406,1,0,0,0,405,407,5,45,0,0,406,405,1,0,0,0,406,407,1,0,0,0,407,409,
1,0,0,0,408,397,1,0,0,0,409,412,1,0,0,0,410,408,1,0,0,0,410,411,1,0,0,0,
411,414,1,0,0,0,412,410,1,0,0,0,413,392,1,0,0,0,413,414,1,0,0,0,414,415,
1,0,0,0,415,416,5,14,0,0,416,35,1,0,0,0,417,418,5,30,0,0,418,37,1,0,0,0,
419,421,5,15,0,0,420,422,5,45,0,0,421,420,1,0,0,0,421,422,1,0,0,0,422,423,
1,0,0,0,423,424,5,1,0,0,424,425,3,26,13,0,425,427,5,2,0,0,426,428,5,45,0,
0,427,426,1,0,0,0,427,428,1,0,0,0,428,39,1,0,0,0,429,431,5,16,0,0,430,432,
5,45,0,0,431,430,1,0,0,0,431,432,1,0,0,0,432,433,1,0,0,0,433,435,3,26,13,
0,434,436,5,45,0,0,435,434,1,0,0,0,435,436,1,0,0,0,436,41,1,0,0,0,437,439,
5,17,0,0,438,440,5,45,0,0,439,438,1,0,0,0,439,440,1,0,0,0,440,441,1,0,0,
0,441,442,3,26,13,0,442,43,1,0,0,0,443,444,3,36,18,0,444,447,5,13,0,0,445,
448,3,26,13,0,446,448,3,44,22,0,447,445,1,0,0,0,447,446,1,0,0,0,448,449,
1,0,0,0,449,450,5,14,0,0,450,45,1,0,0,0,451,461,5,18,0,0,452,461,5,19,0,
0,453,461,5,20,0,0,454,461,5,21,0,0,455,461,5,22,0,0,456,461,5,23,0,0,457,
461,5,24,0,0,458,461,5,25,0,0,459,461,5,26,0,0,460,451,1,0,0,0,460,452,1,
0,0,0,460,453,1,0,0,0,460,454,1,0,0,0,460,455,1,0,0,0,460,456,1,0,0,0,460,
457,1,0,0,0,460,458,1,0,0,0,460,459,1,0,0,0,461,47,1,0,0,0,73,50,54,68,74,
80,84,88,94,98,102,108,112,116,120,128,131,137,141,145,149,153,157,162,166,
171,173,183,187,191,200,203,205,218,221,223,227,235,239,243,249,253,257,
263,267,271,275,283,286,292,294,300,312,335,337,350,365,375,380,388,392,
395,399,403,406,410,413,421,427,431,435,439,447,460];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class biesCParser extends antlr4.Parser {

    static grammarFileName = "biesC.g4";
    static literalNames = [ null, "'('", "')'", "'let'", "'='", "'()'", 
                            "'=>'", "'fun'", "','", "'{'", "'}'", "'in'", 
                            "'const'", "'['", "']'", "'if'", "'then'", "'else'", 
                            "'bool'", "'true'", "'false'", "'none'", "'input'", 
                            "'int'", "'str'", "'list'", "'len'", null, null, 
                            "'print'", null, "'*'", "'/'", "'+'", "'-'", 
                            "'**'", "'&&'", "'||'", "'=='", "'!='", "'<'", 
                            "'>'", "'<='", "'>='" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, "BOOL", "TRUE", "FALSE", "NULL", 
                             "INPUT", "INT", "STR", "LIST", "LEN", "STRING", 
                             "NUMBER", "PRINT", "ID", "MULT", "DIV", "ADD", 
                             "SUB", "POW", "AND", "OR", "EQ", "NEQ", "LT", 
                             "GT", "LE", "GE", "NL", "WS", "COMMENT", "MULTILINE_COMMENT" ];
    static ruleNames = [ "program", "statement", "printInstr", "simpleLetInstr", 
                         "anonymousLetFunction", "letInExpr", "inputExpr", 
                         "let", "in", "ifElseExpr", "simpleConstInstr", 
                         "anonymousConstFunction", "primarydata", "expr", 
                         "functionCall", "number", "string", "array", "id", 
                         "if", "then", "else", "arrayAccess", "predSymbols" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = biesCParser.ruleNames;
        this.literalNames = biesCParser.literalNames;
        this.symbolicNames = biesCParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 13:
    	    		return this.expr_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expr_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 8);
    		case 1:
    			return this.precpred(this._ctx, 7);
    		case 2:
    			return this.precpred(this._ctx, 6);
    		case 3:
    			return this.precpred(this._ctx, 5);
    		case 4:
    			return this.precpred(this._ctx, 4);
    		case 5:
    			return this.precpred(this._ctx, 3);
    		case 6:
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
	        this.state = 54;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1744605320) !== 0)) {
	            this.state = 48;
	            this.statement();
	            this.state = 50;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===44) {
	                this.state = 49;
	                this.match(biesCParser.NL);
	            }

	            this.state = 56;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 57;
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
	        this.state = 68;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 59;
	            this.printInstr();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 60;
	            this.simpleLetInstr();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 61;
	            this.simpleConstInstr();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 62;
	            this.anonymousLetFunction();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 63;
	            this.anonymousConstFunction();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 64;
	            this.functionCall();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 65;
	            this.letInExpr();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 66;
	            this.ifElseExpr();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 67;
	            this.inputExpr();
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
	        this.state = 70;
	        this.match(biesCParser.PRINT);
	        this.state = 71;
	        this.match(biesCParser.T__0);
	        this.state = 74;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 72;
	            this.primarydata();
	            break;

	        case 2:
	            this.state = 73;
	            this.expr(0);
	            break;

	        }
	        this.state = 76;
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
	        this.state = 78;
	        this.match(biesCParser.T__2);
	        this.state = 80;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===45) {
	            this.state = 79;
	            this.match(biesCParser.WS);
	        }

	        this.state = 82;
	        this.id();
	        this.state = 84;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===45) {
	            this.state = 83;
	            this.match(biesCParser.WS);
	        }

	        this.state = 86;
	        this.match(biesCParser.T__3);
	        this.state = 88;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===45) {
	            this.state = 87;
	            this.match(biesCParser.WS);
	        }

	        this.state = 90;
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
	        this.state = 173;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new LambdaNoParams_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 92;
	            this.match(biesCParser.T__2);
	            this.state = 94;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===45) {
	                this.state = 93;
	                this.match(biesCParser.WS);
	            }

	            this.state = 96;
	            this.id();
	            this.state = 98;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===45) {
	                this.state = 97;
	                this.match(biesCParser.WS);
	            }

	            this.state = 100;
	            this.match(biesCParser.T__3);
	            this.state = 102;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===45) {
	                this.state = 101;
	                this.match(biesCParser.WS);
	            }

	            this.state = 104;
	            this.match(biesCParser.T__4);
	            this.state = 105;
	            this.match(biesCParser.T__5);
	            this.state = 108;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 106;
	                this.statement();
	                break;

	            case 2:
	                this.state = 107;
	                this.expr(0);
	                break;

	            }
	            break;

	        case 2:
	            localctx = new LambdaWithParams_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 110;
	            _la = this._input.LA(1);
	            if(!(_la===3 || _la===7)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 112;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===45) {
	                this.state = 111;
	                this.match(biesCParser.WS);
	            }

	            this.state = 114;
	            this.id();
	            this.state = 116;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===45) {
	                this.state = 115;
	                this.match(biesCParser.WS);
	            }

	            this.state = 118;
	            this.match(biesCParser.T__3);
	            this.state = 120;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===45) {
	                this.state = 119;
	                this.match(biesCParser.WS);
	            }

	            this.state = 122;
	            this.match(biesCParser.T__0);
	            this.state = 131;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===30) {
	                this.state = 123;
	                this.id();
	                this.state = 128;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===8) {
	                    this.state = 124;
	                    this.match(biesCParser.T__7);
	                    this.state = 125;
	                    this.id();
	                    this.state = 130;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	            }

	            this.state = 133;
	            this.match(biesCParser.T__1);
	            this.state = 134;
	            this.match(biesCParser.T__5);
	            this.state = 137;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 135;
	                this.statement();
	                break;

	            case 2:
	                this.state = 136;
	                this.expr(0);
	                break;

	            }
	            break;

	        case 3:
	            localctx = new NestedLambda_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 139;
	            this.match(biesCParser.T__2);
	            this.state = 141;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===45) {
	                this.state = 140;
	                this.match(biesCParser.WS);
	            }

	            this.state = 143;
	            this.id();
	            this.state = 145;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===45) {
	                this.state = 144;
	                this.match(biesCParser.WS);
	            }

	            this.state = 147;
	            this.match(biesCParser.T__3);
	            this.state = 149;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===45) {
	                this.state = 148;
	                this.match(biesCParser.WS);
	            }

	            this.state = 151;
	            this.id();
	            this.state = 162;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,22,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 153;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    if(_la===45) {
	                        this.state = 152;
	                        this.match(biesCParser.WS);
	                    }

	                    this.state = 155;
	                    this.match(biesCParser.T__5);
	                    this.state = 157;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    if(_la===45) {
	                        this.state = 156;
	                        this.match(biesCParser.WS);
	                    }

	                    this.state = 159;
	                    this.id(); 
	                }
	                this.state = 164;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,22,this._ctx);
	            }

	            this.state = 166;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===45) {
	                this.state = 165;
	                this.match(biesCParser.WS);
	            }

	            this.state = 168;
	            this.match(biesCParser.T__5);
	            this.state = 171;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 169;
	                this.statement();
	                break;

	            case 2:
	                this.state = 170;
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
	    try {
	        localctx = new LetInExpr_LabelContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 175;
	        this.let_();
	        this.state = 176;
	        this.in_();
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



	inputExpr() {
	    let localctx = new InputExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, biesCParser.RULE_inputExpr);
	    var _la = 0;
	    try {
	        this.state = 191;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,28,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new InputExprInstr_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 178;
	            this.match(biesCParser.INPUT);
	            this.state = 179;
	            this.match(biesCParser.T__4);
	            break;

	        case 2:
	            localctx = new InputExprInstrArgs_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 180;
	            this.match(biesCParser.INPUT);
	            this.state = 181;
	            this.match(biesCParser.T__0);
	            this.state = 183;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===45) {
	                this.state = 182;
	                this.match(biesCParser.WS);
	            }

	            this.state = 185;
	            this.expr(0);
	            this.state = 187;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===45) {
	                this.state = 186;
	                this.match(biesCParser.WS);
	            }

	            this.state = 189;
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



	let_() {
	    let localctx = new LetContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, biesCParser.RULE_let);
	    var _la = 0;
	    try {
	        localctx = new LetExpr_LabelContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 193;
	        this.match(biesCParser.T__2);
	        this.state = 194;
	        this.match(biesCParser.T__8);
	        this.state = 205;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===12) {
	            this.state = 203;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,30,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 195;
	                this.anonymousConstFunction();
	                break;

	            case 2:
	                this.state = 196;
	                this.simpleConstInstr();
	                this.state = 200;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===44 || _la===45) {
	                    this.state = 197;
	                    _la = this._input.LA(1);
	                    if(!(_la===44 || _la===45)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 202;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	                break;

	            }
	            this.state = 207;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 208;
	        this.match(biesCParser.T__9);
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



	in_() {
	    let localctx = new InContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, biesCParser.RULE_in);
	    var _la = 0;
	    try {
	        localctx = new InExpr_LabelContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 210;
	        this.match(biesCParser.T__10);
	        this.state = 227;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 3:
	        case 7:
	        case 12:
	        case 15:
	        case 18:
	        case 19:
	        case 20:
	        case 21:
	        case 22:
	        case 23:
	        case 24:
	        case 25:
	        case 26:
	        case 29:
	        case 30:
	            this.state = 211;
	            this.statement();
	            break;
	        case 9:
	            this.state = 212;
	            this.match(biesCParser.T__8);
	            this.state = 223;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) === 0 && ((1 << _la) & 2147266698) !== 0)) {
	                this.state = 221;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,33,this._ctx);
	                switch(la_) {
	                case 1:
	                    this.state = 213;
	                    this.statement();
	                    break;

	                case 2:
	                    this.state = 214;
	                    this.expr(0);
	                    this.state = 218;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    while(_la===44 || _la===45) {
	                        this.state = 215;
	                        _la = this._input.LA(1);
	                        if(!(_la===44 || _la===45)) {
	                        this._errHandler.recoverInline(this);
	                        }
	                        else {
	                        	this._errHandler.reportMatch(this);
	                            this.consume();
	                        }
	                        this.state = 220;
	                        this._errHandler.sync(this);
	                        _la = this._input.LA(1);
	                    }
	                    break;

	                }
	                this.state = 225;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 226;
	            this.match(biesCParser.T__9);
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
	    this.enterRule(localctx, 18, biesCParser.RULE_ifElseExpr);
	    try {
	        localctx = new IfElseExpr_LabelContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 229;
	        this.if_();
	        this.state = 230;
	        this.then();
	        this.state = 231;
	        this.else_();
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
	    this.enterRule(localctx, 20, biesCParser.RULE_simpleConstInstr);
	    var _la = 0;
	    try {
	        localctx = new SimpleConstInstr_LabelContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 233;
	        this.match(biesCParser.T__11);
	        this.state = 235;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===45) {
	            this.state = 234;
	            this.match(biesCParser.WS);
	        }

	        this.state = 237;
	        this.id();
	        this.state = 239;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===45) {
	            this.state = 238;
	            this.match(biesCParser.WS);
	        }

	        this.state = 241;
	        this.match(biesCParser.T__3);
	        this.state = 243;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===45) {
	            this.state = 242;
	            this.match(biesCParser.WS);
	        }

	        this.state = 245;
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
	    this.enterRule(localctx, 22, biesCParser.RULE_anonymousConstFunction);
	    var _la = 0;
	    try {
	        this.state = 294;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,49,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new LambdaConstNoParams_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 247;
	            this.match(biesCParser.T__11);
	            this.state = 249;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===45) {
	                this.state = 248;
	                this.match(biesCParser.WS);
	            }

	            this.state = 251;
	            this.id();
	            this.state = 253;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===45) {
	                this.state = 252;
	                this.match(biesCParser.WS);
	            }

	            this.state = 255;
	            this.match(biesCParser.T__3);
	            this.state = 257;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===45) {
	                this.state = 256;
	                this.match(biesCParser.WS);
	            }

	            this.state = 259;
	            this.match(biesCParser.T__4);
	            this.state = 260;
	            this.match(biesCParser.T__5);
	            this.state = 263;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,42,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 261;
	                this.statement();
	                break;

	            case 2:
	                this.state = 262;
	                this.expr(0);
	                break;

	            }
	            break;

	        case 2:
	            localctx = new LambdaConstWithParams_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 265;
	            this.match(biesCParser.T__11);
	            this.state = 267;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===45) {
	                this.state = 266;
	                this.match(biesCParser.WS);
	            }

	            this.state = 269;
	            this.id();
	            this.state = 271;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===45) {
	                this.state = 270;
	                this.match(biesCParser.WS);
	            }

	            this.state = 273;
	            this.match(biesCParser.T__3);
	            this.state = 275;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===45) {
	                this.state = 274;
	                this.match(biesCParser.WS);
	            }

	            this.state = 277;
	            this.match(biesCParser.T__0);
	            this.state = 286;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===30) {
	                this.state = 278;
	                this.id();
	                this.state = 283;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===8) {
	                    this.state = 279;
	                    this.match(biesCParser.T__7);
	                    this.state = 280;
	                    this.id();
	                    this.state = 285;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	            }

	            this.state = 288;
	            this.match(biesCParser.T__1);
	            this.state = 289;
	            this.match(biesCParser.T__5);
	            this.state = 292;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,48,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 290;
	                this.statement();
	                break;

	            case 2:
	                this.state = 291;
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
	    this.enterRule(localctx, 24, biesCParser.RULE_primarydata);
	    try {
	        this.state = 300;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 28:
	            localctx = new Number_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 296;
	            this.number();
	            break;
	        case 27:
	            localctx = new String_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 297;
	            this.string();
	            break;
	        case 13:
	            localctx = new Array_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 298;
	            this.array();
	            break;
	        case 30:
	            localctx = new Id_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 299;
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
	    const _startState = 26;
	    this.enterRecursionRule(localctx, 26, biesCParser.RULE_expr, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 312;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,51,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ParenthesisExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 303;
	            this.match(biesCParser.T__0);
	            this.state = 304;
	            this.expr(0);
	            this.state = 305;
	            this.match(biesCParser.T__1);
	            break;

	        case 2:
	            localctx = new AnonymousFunctionExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 307;
	            this.anonymousLetFunction();
	            break;

	        case 3:
	            localctx = new PrimaryDataContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 308;
	            this.primarydata();
	            break;

	        case 4:
	            localctx = new FunctionCallExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 309;
	            this.functionCall();
	            break;

	        case 5:
	            localctx = new ArrayAccessExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 310;
	            this.arrayAccess();
	            break;

	        case 6:
	            localctx = new PredSymbolsExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 311;
	            this.predSymbols();
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 337;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,53,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 335;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,52,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new PowExprContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expr);
	                    this.state = 314;
	                    if (!( this.precpred(this._ctx, 8))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                    }
	                    this.state = 315;
	                    this.match(biesCParser.POW);
	                    this.state = 316;
	                    this.expr(9);
	                    break;

	                case 2:
	                    localctx = new MultDivExprContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expr);
	                    this.state = 317;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 318;
	                    _la = this._input.LA(1);
	                    if(!(_la===31 || _la===32)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 319;
	                    this.expr(8);
	                    break;

	                case 3:
	                    localctx = new AddSubExprContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expr);
	                    this.state = 320;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 321;
	                    _la = this._input.LA(1);
	                    if(!(_la===33 || _la===34)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 322;
	                    this.expr(7);
	                    break;

	                case 4:
	                    localctx = new EqualityExprContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expr);
	                    this.state = 323;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 324;
	                    _la = this._input.LA(1);
	                    if(!(_la===38 || _la===39)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 325;
	                    this.expr(6);
	                    break;

	                case 5:
	                    localctx = new RelationalExprContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expr);
	                    this.state = 326;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 327;
	                    _la = this._input.LA(1);
	                    if(!(((((_la - 40)) & ~0x1f) === 0 && ((1 << (_la - 40)) & 15) !== 0))) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 328;
	                    this.expr(5);
	                    break;

	                case 6:
	                    localctx = new AndExprContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expr);
	                    this.state = 329;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 330;
	                    this.match(biesCParser.AND);
	                    this.state = 331;
	                    this.expr(4);
	                    break;

	                case 7:
	                    localctx = new OrExprContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expr);
	                    this.state = 332;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 333;
	                    this.match(biesCParser.OR);
	                    this.state = 334;
	                    this.expr(3);
	                    break;

	                } 
	            }
	            this.state = 339;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,53,this._ctx);
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
	    this.enterRule(localctx, 28, biesCParser.RULE_functionCall);
	    var _la = 0;
	    try {
	        this.state = 380;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,57,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new FunctionCallNoParams_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 340;
	            this.id();
	            this.state = 341;
	            this.match(biesCParser.T__4);
	            break;

	        case 2:
	            localctx = new FunctionCallWithParams_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 343;
	            this.id();
	            this.state = 344;
	            this.match(biesCParser.T__0);
	            this.state = 345;
	            this.expr(0);
	            this.state = 350;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===8) {
	                this.state = 346;
	                this.match(biesCParser.T__7);
	                this.state = 347;
	                this.expr(0);
	                this.state = 352;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 353;
	            this.match(biesCParser.T__1);
	            break;

	        case 3:
	            localctx = new FunctionCallNested_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 355;
	            this.id();
	            this.state = 356;
	            this.match(biesCParser.T__0);
	            this.state = 357;
	            this.expr(0);
	            this.state = 358;
	            this.match(biesCParser.T__1);
	            this.state = 365;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,55,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 359;
	                    this.match(biesCParser.T__0);
	                    this.state = 360;
	                    this.expr(0);
	                    this.state = 361;
	                    this.match(biesCParser.T__1); 
	                }
	                this.state = 367;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,55,this._ctx);
	            }

	            break;

	        case 4:
	            localctx = new PredifinedFunctionCall_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 368;
	            this.predSymbols();
	            this.state = 369;
	            this.match(biesCParser.T__0);
	            this.state = 370;
	            this.expr(0);
	            this.state = 375;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===8) {
	                this.state = 371;
	                this.match(biesCParser.T__7);
	                this.state = 372;
	                this.expr(0);
	                this.state = 377;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 378;
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
	    this.enterRule(localctx, 30, biesCParser.RULE_number);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 382;
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
	    this.enterRule(localctx, 32, biesCParser.RULE_string);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 384;
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
	    this.enterRule(localctx, 34, biesCParser.RULE_array);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 386;
	        this.match(biesCParser.T__12);
	        this.state = 388;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===45) {
	            this.state = 387;
	            this.match(biesCParser.WS);
	        }

	        this.state = 413;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 1610358922) !== 0)) {
	            this.state = 392;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,59,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 390;
	                this.primarydata();
	                break;

	            case 2:
	                this.state = 391;
	                this.expr(0);
	                break;

	            }
	            this.state = 395;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===45) {
	                this.state = 394;
	                this.match(biesCParser.WS);
	            }

	            this.state = 410;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===8) {
	                this.state = 397;
	                this.match(biesCParser.T__7);
	                this.state = 399;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===45) {
	                    this.state = 398;
	                    this.match(biesCParser.WS);
	                }

	                this.state = 403;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,62,this._ctx);
	                switch(la_) {
	                case 1:
	                    this.state = 401;
	                    this.primarydata();
	                    break;

	                case 2:
	                    this.state = 402;
	                    this.expr(0);
	                    break;

	                }
	                this.state = 406;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===45) {
	                    this.state = 405;
	                    this.match(biesCParser.WS);
	                }

	                this.state = 412;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 415;
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



	id() {
	    let localctx = new IdContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, biesCParser.RULE_id);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 417;
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
	    this.enterRule(localctx, 38, biesCParser.RULE_if);
	    var _la = 0;
	    try {
	        localctx = new If_LabelContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 419;
	        this.match(biesCParser.T__14);
	        this.state = 421;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===45) {
	            this.state = 420;
	            this.match(biesCParser.WS);
	        }

	        this.state = 423;
	        this.match(biesCParser.T__0);
	        this.state = 424;
	        this.expr(0);
	        this.state = 425;
	        this.match(biesCParser.T__1);
	        this.state = 427;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===45) {
	            this.state = 426;
	            this.match(biesCParser.WS);
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



	then() {
	    let localctx = new ThenContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, biesCParser.RULE_then);
	    var _la = 0;
	    try {
	        localctx = new Then_LabelContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 429;
	        this.match(biesCParser.T__15);
	        this.state = 431;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===45) {
	            this.state = 430;
	            this.match(biesCParser.WS);
	        }

	        this.state = 433;
	        this.expr(0);
	        this.state = 435;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===45) {
	            this.state = 434;
	            this.match(biesCParser.WS);
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



	else_() {
	    let localctx = new ElseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, biesCParser.RULE_else);
	    var _la = 0;
	    try {
	        localctx = new Else_LabelContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 437;
	        this.match(biesCParser.T__16);
	        this.state = 439;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===45) {
	            this.state = 438;
	            this.match(biesCParser.WS);
	        }

	        this.state = 441;
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



	arrayAccess() {
	    let localctx = new ArrayAccessContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, biesCParser.RULE_arrayAccess);
	    try {
	        localctx = new ArrayAccess_LabelContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 443;
	        this.id();
	        this.state = 444;
	        this.match(biesCParser.T__12);
	        this.state = 447;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,71,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 445;
	            this.expr(0);
	            break;

	        case 2:
	            this.state = 446;
	            this.arrayAccess();
	            break;

	        }
	        this.state = 449;
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



	predSymbols() {
	    let localctx = new PredSymbolsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, biesCParser.RULE_predSymbols);
	    try {
	        this.state = 460;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 18:
	            localctx = new Bool_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 451;
	            this.match(biesCParser.BOOL);
	            break;
	        case 19:
	            localctx = new True_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 452;
	            this.match(biesCParser.TRUE);
	            break;
	        case 20:
	            localctx = new False_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 453;
	            this.match(biesCParser.FALSE);
	            break;
	        case 21:
	            localctx = new Null_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 454;
	            this.match(biesCParser.NULL);
	            break;
	        case 22:
	            localctx = new Input_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 5);
	            this.state = 455;
	            this.match(biesCParser.INPUT);
	            break;
	        case 23:
	            localctx = new Int_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 6);
	            this.state = 456;
	            this.match(biesCParser.INT);
	            break;
	        case 24:
	            localctx = new Str_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 7);
	            this.state = 457;
	            this.match(biesCParser.STR);
	            break;
	        case 25:
	            localctx = new List_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 8);
	            this.state = 458;
	            this.match(biesCParser.LIST);
	            break;
	        case 26:
	            localctx = new Len_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 9);
	            this.state = 459;
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
biesCParser.T__16 = 17;
biesCParser.BOOL = 18;
biesCParser.TRUE = 19;
biesCParser.FALSE = 20;
biesCParser.NULL = 21;
biesCParser.INPUT = 22;
biesCParser.INT = 23;
biesCParser.STR = 24;
biesCParser.LIST = 25;
biesCParser.LEN = 26;
biesCParser.STRING = 27;
biesCParser.NUMBER = 28;
biesCParser.PRINT = 29;
biesCParser.ID = 30;
biesCParser.MULT = 31;
biesCParser.DIV = 32;
biesCParser.ADD = 33;
biesCParser.SUB = 34;
biesCParser.POW = 35;
biesCParser.AND = 36;
biesCParser.OR = 37;
biesCParser.EQ = 38;
biesCParser.NEQ = 39;
biesCParser.LT = 40;
biesCParser.GT = 41;
biesCParser.LE = 42;
biesCParser.GE = 43;
biesCParser.NL = 44;
biesCParser.WS = 45;
biesCParser.COMMENT = 46;
biesCParser.MULTILINE_COMMENT = 47;

biesCParser.RULE_program = 0;
biesCParser.RULE_statement = 1;
biesCParser.RULE_printInstr = 2;
biesCParser.RULE_simpleLetInstr = 3;
biesCParser.RULE_anonymousLetFunction = 4;
biesCParser.RULE_letInExpr = 5;
biesCParser.RULE_inputExpr = 6;
biesCParser.RULE_let = 7;
biesCParser.RULE_in = 8;
biesCParser.RULE_ifElseExpr = 9;
biesCParser.RULE_simpleConstInstr = 10;
biesCParser.RULE_anonymousConstFunction = 11;
biesCParser.RULE_primarydata = 12;
biesCParser.RULE_expr = 13;
biesCParser.RULE_functionCall = 14;
biesCParser.RULE_number = 15;
biesCParser.RULE_string = 16;
biesCParser.RULE_array = 17;
biesCParser.RULE_id = 18;
biesCParser.RULE_if = 19;
biesCParser.RULE_then = 20;
biesCParser.RULE_else = 21;
biesCParser.RULE_arrayAccess = 22;
biesCParser.RULE_predSymbols = 23;

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

	simpleConstInstr() {
	    return this.getTypedRuleContext(SimpleConstInstrContext,0);
	};

	anonymousLetFunction() {
	    return this.getTypedRuleContext(AnonymousLetFunctionContext,0);
	};

	anonymousConstFunction() {
	    return this.getTypedRuleContext(AnonymousConstFunctionContext,0);
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

	inputExpr() {
	    return this.getTypedRuleContext(InputExprContext,0);
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

class NestedLambda_LabelContext extends AnonymousLetFunctionContext {

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
	        return visitor.visitNestedLambda_Label(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

biesCParser.NestedLambda_LabelContext = NestedLambda_LabelContext;

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


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class LetInExpr_LabelContext extends LetInExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	let_() {
	    return this.getTypedRuleContext(LetContext,0);
	};

	in_() {
	    return this.getTypedRuleContext(InContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitLetInExpr_Label(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

biesCParser.LetInExpr_LabelContext = LetInExpr_LabelContext;

class InputExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesCParser.RULE_inputExpr;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class InputExprInstrArgs_LabelContext extends InputExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	INPUT() {
	    return this.getToken(biesCParser.INPUT, 0);
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
	        return visitor.visitInputExprInstrArgs_Label(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

biesCParser.InputExprInstrArgs_LabelContext = InputExprInstrArgs_LabelContext;

class InputExprInstr_LabelContext extends InputExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	INPUT() {
	    return this.getToken(biesCParser.INPUT, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitInputExprInstr_Label(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

biesCParser.InputExprInstr_LabelContext = InputExprInstr_LabelContext;

class LetContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesCParser.RULE_let;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class LetExpr_LabelContext extends LetContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	anonymousConstFunction = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AnonymousConstFunctionContext);
	    } else {
	        return this.getTypedRuleContext(AnonymousConstFunctionContext,i);
	    }
	};

	simpleConstInstr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SimpleConstInstrContext);
	    } else {
	        return this.getTypedRuleContext(SimpleConstInstrContext,i);
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
	        return visitor.visitLetExpr_Label(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

biesCParser.LetExpr_LabelContext = LetExpr_LabelContext;

class InContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesCParser.RULE_in;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class InExpr_LabelContext extends InContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
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
	        return visitor.visitInExpr_Label(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

biesCParser.InExpr_LabelContext = InExpr_LabelContext;

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

	then() {
	    return this.getTypedRuleContext(ThenContext,0);
	};

	else_() {
	    return this.getTypedRuleContext(ElseContext,0);
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


class PrimaryDataContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	primarydata() {
	    return this.getTypedRuleContext(PrimarydataContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitPrimaryData(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

biesCParser.PrimaryDataContext = PrimaryDataContext;

class MultDivExprContext extends ExprContext {

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

	DIV() {
	    return this.getToken(biesCParser.DIV, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitMultDivExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

biesCParser.MultDivExprContext = MultDivExprContext;

class AndExprContext extends ExprContext {

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
	        return visitor.visitAndExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

biesCParser.AndExprContext = AndExprContext;

class ParenthesisExprContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitParenthesisExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

biesCParser.ParenthesisExprContext = ParenthesisExprContext;

class AnonymousFunctionExprContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	anonymousLetFunction() {
	    return this.getTypedRuleContext(AnonymousLetFunctionContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitAnonymousFunctionExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

biesCParser.AnonymousFunctionExprContext = AnonymousFunctionExprContext;

class ArrayAccessExprContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	arrayAccess() {
	    return this.getTypedRuleContext(ArrayAccessContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitArrayAccessExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

biesCParser.ArrayAccessExprContext = ArrayAccessExprContext;

class PowExprContext extends ExprContext {

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
	        return visitor.visitPowExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

biesCParser.PowExprContext = PowExprContext;

class RelationalExprContext extends ExprContext {

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

	GT() {
	    return this.getToken(biesCParser.GT, 0);
	};

	LE() {
	    return this.getToken(biesCParser.LE, 0);
	};

	GE() {
	    return this.getToken(biesCParser.GE, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitRelationalExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

biesCParser.RelationalExprContext = RelationalExprContext;

class OrExprContext extends ExprContext {

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
	        return visitor.visitOrExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

biesCParser.OrExprContext = OrExprContext;

class FunctionCallExprContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	functionCall() {
	    return this.getTypedRuleContext(FunctionCallContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitFunctionCallExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

biesCParser.FunctionCallExprContext = FunctionCallExprContext;

class EqualityExprContext extends ExprContext {

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

	NEQ() {
	    return this.getToken(biesCParser.NEQ, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitEqualityExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

biesCParser.EqualityExprContext = EqualityExprContext;

class PredSymbolsExprContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	predSymbols() {
	    return this.getTypedRuleContext(PredSymbolsContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitPredSymbolsExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

biesCParser.PredSymbolsExprContext = PredSymbolsExprContext;

class AddSubExprContext extends ExprContext {

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

	SUB() {
	    return this.getToken(biesCParser.SUB, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitAddSubExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

biesCParser.AddSubExprContext = AddSubExprContext;

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

class FunctionCallNested_LabelContext extends FunctionCallContext {

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
	        return visitor.visitFunctionCallNested_Label(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

biesCParser.FunctionCallNested_LabelContext = FunctionCallNested_LabelContext;

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
	        return visitor.visitIf_Label(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

biesCParser.If_LabelContext = If_LabelContext;

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
	        return visitor.visitThen_Label(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

biesCParser.Then_LabelContext = Then_LabelContext;

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

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	WS() {
	    return this.getToken(biesCParser.WS, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitElse_Label(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

biesCParser.Else_LabelContext = Else_LabelContext;

class ArrayAccessContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesCParser.RULE_arrayAccess;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ArrayAccess_LabelContext extends ArrayAccessContext {

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

	arrayAccess() {
	    return this.getTypedRuleContext(ArrayAccessContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitArrayAccess_Label(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

biesCParser.ArrayAccess_LabelContext = ArrayAccess_LabelContext;

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
biesCParser.InputExprContext = InputExprContext; 
biesCParser.LetContext = LetContext; 
biesCParser.InContext = InContext; 
biesCParser.IfElseExprContext = IfElseExprContext; 
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
biesCParser.ThenContext = ThenContext; 
biesCParser.ElseContext = ElseContext; 
biesCParser.ArrayAccessContext = ArrayAccessContext; 
biesCParser.PredSymbolsContext = PredSymbolsContext; 
