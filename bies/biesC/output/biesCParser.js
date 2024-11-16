// Generated from ./grammar/biesC.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import biesCVisitor from './biesCVisitor.js';

const serializedATN = [4,1,46,451,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,1,0,1,0,3,0,45,8,0,5,0,47,8,0,10,0,12,0,50,9,0,1,0,1,0,1,1,1,1,1,
1,1,1,1,1,1,1,3,1,60,8,1,1,2,1,2,1,2,1,2,3,2,66,8,2,1,2,1,2,1,3,1,3,3,3,
72,8,3,1,3,1,3,3,3,76,8,3,1,3,1,3,3,3,80,8,3,1,3,1,3,1,4,1,4,3,4,86,8,4,
1,4,1,4,3,4,90,8,4,1,4,1,4,3,4,94,8,4,1,4,1,4,1,4,1,4,3,4,100,8,4,1,4,1,
4,3,4,104,8,4,1,4,1,4,3,4,108,8,4,1,4,1,4,3,4,112,8,4,1,4,1,4,1,4,1,4,5,
4,118,8,4,10,4,12,4,121,9,4,3,4,123,8,4,1,4,1,4,1,4,1,4,3,4,129,8,4,1,4,
1,4,3,4,133,8,4,1,4,1,4,3,4,137,8,4,1,4,1,4,3,4,141,8,4,1,4,1,4,3,4,145,
8,4,1,4,1,4,3,4,149,8,4,1,4,5,4,152,8,4,10,4,12,4,155,9,4,1,4,3,4,158,8,
4,1,4,1,4,1,4,3,4,163,8,4,3,4,165,8,4,1,5,1,5,1,5,1,5,5,5,171,8,5,10,5,12,
5,174,9,5,5,5,176,8,5,10,5,12,5,179,9,5,1,5,1,5,1,5,1,5,1,5,1,5,5,5,187,
8,5,10,5,12,5,190,9,5,5,5,192,8,5,10,5,12,5,195,9,5,1,5,3,5,198,8,5,1,6,
1,6,3,6,202,8,6,1,6,1,6,1,6,1,6,3,6,208,8,6,1,6,1,6,3,6,212,8,6,1,6,1,6,
3,6,216,8,6,1,6,1,6,3,6,220,8,6,1,6,1,6,1,7,1,7,1,7,1,7,3,7,228,8,7,1,8,
1,8,3,8,232,8,8,1,8,1,8,3,8,236,8,8,1,8,1,8,3,8,240,8,8,1,8,1,8,1,9,1,9,
3,9,246,8,9,1,9,1,9,3,9,250,8,9,1,9,1,9,3,9,254,8,9,1,9,1,9,1,9,1,9,3,9,
260,8,9,1,9,1,9,3,9,264,8,9,1,9,1,9,3,9,268,8,9,1,9,1,9,3,9,272,8,9,1,9,
1,9,1,9,1,9,5,9,278,8,9,10,9,12,9,281,9,9,3,9,283,8,9,1,9,1,9,1,9,1,9,3,
9,289,8,9,3,9,291,8,9,1,10,1,10,1,10,1,10,3,10,297,8,10,1,11,1,11,1,11,1,
11,1,11,1,11,1,11,1,11,3,11,307,8,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,
1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,
11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,
1,11,1,11,1,11,5,11,348,8,11,10,11,12,11,351,9,11,1,12,1,12,1,12,1,12,1,
12,1,12,1,12,1,12,5,12,361,8,12,10,12,12,12,364,9,12,1,12,1,12,1,12,1,12,
1,12,5,12,371,8,12,10,12,12,12,374,9,12,1,12,1,12,5,12,378,8,12,10,12,12,
12,381,9,12,1,12,1,12,1,12,1,12,1,12,5,12,388,8,12,10,12,12,12,391,9,12,
1,12,1,12,3,12,395,8,12,1,13,1,13,1,14,1,14,1,15,1,15,3,15,403,8,15,1,15,
1,15,3,15,407,8,15,1,15,3,15,410,8,15,1,15,1,15,3,15,414,8,15,1,15,1,15,
3,15,418,8,15,1,15,3,15,421,8,15,5,15,423,8,15,10,15,12,15,426,9,15,3,15,
428,8,15,1,15,1,15,1,16,1,16,1,17,1,17,1,18,1,18,1,19,1,19,1,20,1,20,1,20,
1,20,1,20,1,20,1,20,1,20,1,20,3,20,449,8,20,1,20,0,1,22,21,0,2,4,6,8,10,
12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,0,1,1,0,43,44,528,0,48,1,0,
0,0,2,59,1,0,0,0,4,61,1,0,0,0,6,69,1,0,0,0,8,164,1,0,0,0,10,166,1,0,0,0,
12,199,1,0,0,0,14,227,1,0,0,0,16,229,1,0,0,0,18,290,1,0,0,0,20,296,1,0,0,
0,22,306,1,0,0,0,24,394,1,0,0,0,26,396,1,0,0,0,28,398,1,0,0,0,30,400,1,0,
0,0,32,431,1,0,0,0,34,433,1,0,0,0,36,435,1,0,0,0,38,437,1,0,0,0,40,448,1,
0,0,0,42,44,3,2,1,0,43,45,5,43,0,0,44,43,1,0,0,0,44,45,1,0,0,0,45,47,1,0,
0,0,46,42,1,0,0,0,47,50,1,0,0,0,48,46,1,0,0,0,48,49,1,0,0,0,49,51,1,0,0,
0,50,48,1,0,0,0,51,52,5,0,0,1,52,1,1,0,0,0,53,60,3,4,2,0,54,60,3,6,3,0,55,
60,3,8,4,0,56,60,3,24,12,0,57,60,3,10,5,0,58,60,3,12,6,0,59,53,1,0,0,0,59,
54,1,0,0,0,59,55,1,0,0,0,59,56,1,0,0,0,59,57,1,0,0,0,59,58,1,0,0,0,60,3,
1,0,0,0,61,62,5,28,0,0,62,65,5,1,0,0,63,66,3,20,10,0,64,66,3,22,11,0,65,
63,1,0,0,0,65,64,1,0,0,0,66,67,1,0,0,0,67,68,5,2,0,0,68,5,1,0,0,0,69,71,
5,3,0,0,70,72,5,44,0,0,71,70,1,0,0,0,71,72,1,0,0,0,72,73,1,0,0,0,73,75,3,
32,16,0,74,76,5,44,0,0,75,74,1,0,0,0,75,76,1,0,0,0,76,77,1,0,0,0,77,79,5,
4,0,0,78,80,5,44,0,0,79,78,1,0,0,0,79,80,1,0,0,0,80,81,1,0,0,0,81,82,3,22,
11,0,82,7,1,0,0,0,83,85,5,3,0,0,84,86,5,44,0,0,85,84,1,0,0,0,85,86,1,0,0,
0,86,87,1,0,0,0,87,89,3,32,16,0,88,90,5,44,0,0,89,88,1,0,0,0,89,90,1,0,0,
0,90,91,1,0,0,0,91,93,5,4,0,0,92,94,5,44,0,0,93,92,1,0,0,0,93,94,1,0,0,0,
94,95,1,0,0,0,95,96,5,5,0,0,96,99,5,6,0,0,97,100,3,2,1,0,98,100,3,22,11,
0,99,97,1,0,0,0,99,98,1,0,0,0,100,165,1,0,0,0,101,103,5,3,0,0,102,104,5,
44,0,0,103,102,1,0,0,0,103,104,1,0,0,0,104,105,1,0,0,0,105,107,3,32,16,0,
106,108,5,44,0,0,107,106,1,0,0,0,107,108,1,0,0,0,108,109,1,0,0,0,109,111,
5,4,0,0,110,112,5,44,0,0,111,110,1,0,0,0,111,112,1,0,0,0,112,113,1,0,0,0,
113,122,5,1,0,0,114,119,3,32,16,0,115,116,5,7,0,0,116,118,3,32,16,0,117,
115,1,0,0,0,118,121,1,0,0,0,119,117,1,0,0,0,119,120,1,0,0,0,120,123,1,0,
0,0,121,119,1,0,0,0,122,114,1,0,0,0,122,123,1,0,0,0,123,124,1,0,0,0,124,
125,5,2,0,0,125,128,5,6,0,0,126,129,3,2,1,0,127,129,3,22,11,0,128,126,1,
0,0,0,128,127,1,0,0,0,129,165,1,0,0,0,130,132,5,3,0,0,131,133,5,44,0,0,132,
131,1,0,0,0,132,133,1,0,0,0,133,134,1,0,0,0,134,136,3,32,16,0,135,137,5,
44,0,0,136,135,1,0,0,0,136,137,1,0,0,0,137,138,1,0,0,0,138,140,5,4,0,0,139,
141,5,44,0,0,140,139,1,0,0,0,140,141,1,0,0,0,141,142,1,0,0,0,142,153,3,32,
16,0,143,145,5,44,0,0,144,143,1,0,0,0,144,145,1,0,0,0,145,146,1,0,0,0,146,
148,5,6,0,0,147,149,5,44,0,0,148,147,1,0,0,0,148,149,1,0,0,0,149,150,1,0,
0,0,150,152,3,32,16,0,151,144,1,0,0,0,152,155,1,0,0,0,153,151,1,0,0,0,153,
154,1,0,0,0,154,157,1,0,0,0,155,153,1,0,0,0,156,158,5,44,0,0,157,156,1,0,
0,0,157,158,1,0,0,0,158,159,1,0,0,0,159,162,5,6,0,0,160,163,3,2,1,0,161,
163,3,22,11,0,162,160,1,0,0,0,162,161,1,0,0,0,163,165,1,0,0,0,164,83,1,0,
0,0,164,101,1,0,0,0,164,130,1,0,0,0,165,9,1,0,0,0,166,167,5,3,0,0,167,177,
5,8,0,0,168,172,3,14,7,0,169,171,7,0,0,0,170,169,1,0,0,0,171,174,1,0,0,0,
172,170,1,0,0,0,172,173,1,0,0,0,173,176,1,0,0,0,174,172,1,0,0,0,175,168,
1,0,0,0,176,179,1,0,0,0,177,175,1,0,0,0,177,178,1,0,0,0,178,180,1,0,0,0,
179,177,1,0,0,0,180,181,5,9,0,0,181,197,5,10,0,0,182,198,3,2,1,0,183,193,
5,8,0,0,184,188,3,2,1,0,185,187,7,0,0,0,186,185,1,0,0,0,187,190,1,0,0,0,
188,186,1,0,0,0,188,189,1,0,0,0,189,192,1,0,0,0,190,188,1,0,0,0,191,184,
1,0,0,0,192,195,1,0,0,0,193,191,1,0,0,0,193,194,1,0,0,0,194,196,1,0,0,0,
195,193,1,0,0,0,196,198,5,9,0,0,197,182,1,0,0,0,197,183,1,0,0,0,198,11,1,
0,0,0,199,201,3,34,17,0,200,202,5,44,0,0,201,200,1,0,0,0,201,202,1,0,0,0,
202,203,1,0,0,0,203,204,5,1,0,0,204,205,3,22,11,0,205,207,5,2,0,0,206,208,
5,44,0,0,207,206,1,0,0,0,207,208,1,0,0,0,208,209,1,0,0,0,209,211,3,38,19,
0,210,212,5,44,0,0,211,210,1,0,0,0,211,212,1,0,0,0,212,213,1,0,0,0,213,215,
3,22,11,0,214,216,5,44,0,0,215,214,1,0,0,0,215,216,1,0,0,0,216,217,1,0,0,
0,217,219,3,36,18,0,218,220,5,44,0,0,219,218,1,0,0,0,219,220,1,0,0,0,220,
221,1,0,0,0,221,222,3,22,11,0,222,13,1,0,0,0,223,228,3,6,3,0,224,228,3,16,
8,0,225,228,3,18,9,0,226,228,3,8,4,0,227,223,1,0,0,0,227,224,1,0,0,0,227,
225,1,0,0,0,227,226,1,0,0,0,228,15,1,0,0,0,229,231,5,11,0,0,230,232,5,44,
0,0,231,230,1,0,0,0,231,232,1,0,0,0,232,233,1,0,0,0,233,235,3,32,16,0,234,
236,5,44,0,0,235,234,1,0,0,0,235,236,1,0,0,0,236,237,1,0,0,0,237,239,5,4,
0,0,238,240,5,44,0,0,239,238,1,0,0,0,239,240,1,0,0,0,240,241,1,0,0,0,241,
242,3,22,11,0,242,17,1,0,0,0,243,245,5,11,0,0,244,246,5,44,0,0,245,244,1,
0,0,0,245,246,1,0,0,0,246,247,1,0,0,0,247,249,3,32,16,0,248,250,5,44,0,0,
249,248,1,0,0,0,249,250,1,0,0,0,250,251,1,0,0,0,251,253,5,4,0,0,252,254,
5,44,0,0,253,252,1,0,0,0,253,254,1,0,0,0,254,255,1,0,0,0,255,256,5,5,0,0,
256,259,5,6,0,0,257,260,3,2,1,0,258,260,3,22,11,0,259,257,1,0,0,0,259,258,
1,0,0,0,260,291,1,0,0,0,261,263,5,11,0,0,262,264,5,44,0,0,263,262,1,0,0,
0,263,264,1,0,0,0,264,265,1,0,0,0,265,267,3,32,16,0,266,268,5,44,0,0,267,
266,1,0,0,0,267,268,1,0,0,0,268,269,1,0,0,0,269,271,5,4,0,0,270,272,5,44,
0,0,271,270,1,0,0,0,271,272,1,0,0,0,272,273,1,0,0,0,273,282,5,1,0,0,274,
279,3,32,16,0,275,276,5,7,0,0,276,278,3,32,16,0,277,275,1,0,0,0,278,281,
1,0,0,0,279,277,1,0,0,0,279,280,1,0,0,0,280,283,1,0,0,0,281,279,1,0,0,0,
282,274,1,0,0,0,282,283,1,0,0,0,283,284,1,0,0,0,284,285,5,2,0,0,285,288,
5,6,0,0,286,289,3,2,1,0,287,289,3,22,11,0,288,286,1,0,0,0,288,287,1,0,0,
0,289,291,1,0,0,0,290,243,1,0,0,0,290,261,1,0,0,0,291,19,1,0,0,0,292,297,
3,26,13,0,293,297,3,28,14,0,294,297,3,30,15,0,295,297,3,32,16,0,296,292,
1,0,0,0,296,293,1,0,0,0,296,294,1,0,0,0,296,295,1,0,0,0,297,21,1,0,0,0,298,
299,6,11,-1,0,299,307,3,8,4,0,300,307,3,20,10,0,301,307,3,24,12,0,302,303,
5,1,0,0,303,304,3,22,11,0,304,305,5,2,0,0,305,307,1,0,0,0,306,298,1,0,0,
0,306,300,1,0,0,0,306,301,1,0,0,0,306,302,1,0,0,0,307,349,1,0,0,0,308,309,
10,14,0,0,309,310,5,30,0,0,310,348,3,22,11,15,311,312,10,13,0,0,312,313,
5,31,0,0,313,348,3,22,11,14,314,315,10,12,0,0,315,316,5,32,0,0,316,348,3,
22,11,13,317,318,10,11,0,0,318,319,5,33,0,0,319,348,3,22,11,12,320,321,10,
10,0,0,321,322,5,34,0,0,322,348,3,22,11,11,323,324,10,9,0,0,324,325,5,35,
0,0,325,348,3,22,11,10,326,327,10,8,0,0,327,328,5,36,0,0,328,348,3,22,11,
9,329,330,10,7,0,0,330,331,5,37,0,0,331,348,3,22,11,8,332,333,10,6,0,0,333,
334,5,38,0,0,334,348,3,22,11,7,335,336,10,5,0,0,336,337,5,39,0,0,337,348,
3,22,11,6,338,339,10,4,0,0,339,340,5,40,0,0,340,348,3,22,11,5,341,342,10,
3,0,0,342,343,5,41,0,0,343,348,3,22,11,4,344,345,10,2,0,0,345,346,5,42,0,
0,346,348,3,22,11,3,347,308,1,0,0,0,347,311,1,0,0,0,347,314,1,0,0,0,347,
317,1,0,0,0,347,320,1,0,0,0,347,323,1,0,0,0,347,326,1,0,0,0,347,329,1,0,
0,0,347,332,1,0,0,0,347,335,1,0,0,0,347,338,1,0,0,0,347,341,1,0,0,0,347,
344,1,0,0,0,348,351,1,0,0,0,349,347,1,0,0,0,349,350,1,0,0,0,350,23,1,0,0,
0,351,349,1,0,0,0,352,353,3,32,16,0,353,354,5,5,0,0,354,395,1,0,0,0,355,
356,3,32,16,0,356,357,5,1,0,0,357,362,3,22,11,0,358,359,5,7,0,0,359,361,
3,22,11,0,360,358,1,0,0,0,361,364,1,0,0,0,362,360,1,0,0,0,362,363,1,0,0,
0,363,365,1,0,0,0,364,362,1,0,0,0,365,379,5,2,0,0,366,367,5,1,0,0,367,372,
3,22,11,0,368,369,5,7,0,0,369,371,3,22,11,0,370,368,1,0,0,0,371,374,1,0,
0,0,372,370,1,0,0,0,372,373,1,0,0,0,373,375,1,0,0,0,374,372,1,0,0,0,375,
376,5,2,0,0,376,378,1,0,0,0,377,366,1,0,0,0,378,381,1,0,0,0,379,377,1,0,
0,0,379,380,1,0,0,0,380,395,1,0,0,0,381,379,1,0,0,0,382,383,3,40,20,0,383,
384,5,1,0,0,384,389,3,22,11,0,385,386,5,7,0,0,386,388,3,22,11,0,387,385,
1,0,0,0,388,391,1,0,0,0,389,387,1,0,0,0,389,390,1,0,0,0,390,392,1,0,0,0,
391,389,1,0,0,0,392,393,5,2,0,0,393,395,1,0,0,0,394,352,1,0,0,0,394,355,
1,0,0,0,394,382,1,0,0,0,395,25,1,0,0,0,396,397,5,27,0,0,397,27,1,0,0,0,398,
399,5,26,0,0,399,29,1,0,0,0,400,402,5,12,0,0,401,403,5,44,0,0,402,401,1,
0,0,0,402,403,1,0,0,0,403,427,1,0,0,0,404,407,3,20,10,0,405,407,3,22,11,
0,406,404,1,0,0,0,406,405,1,0,0,0,407,409,1,0,0,0,408,410,5,44,0,0,409,408,
1,0,0,0,409,410,1,0,0,0,410,424,1,0,0,0,411,413,5,7,0,0,412,414,5,44,0,0,
413,412,1,0,0,0,413,414,1,0,0,0,414,417,1,0,0,0,415,418,3,20,10,0,416,418,
3,22,11,0,417,415,1,0,0,0,417,416,1,0,0,0,418,420,1,0,0,0,419,421,5,44,0,
0,420,419,1,0,0,0,420,421,1,0,0,0,421,423,1,0,0,0,422,411,1,0,0,0,423,426,
1,0,0,0,424,422,1,0,0,0,424,425,1,0,0,0,425,428,1,0,0,0,426,424,1,0,0,0,
427,406,1,0,0,0,427,428,1,0,0,0,428,429,1,0,0,0,429,430,5,13,0,0,430,31,
1,0,0,0,431,432,5,29,0,0,432,33,1,0,0,0,433,434,5,14,0,0,434,35,1,0,0,0,
435,436,5,15,0,0,436,37,1,0,0,0,437,438,5,16,0,0,438,39,1,0,0,0,439,449,
5,17,0,0,440,449,5,18,0,0,441,449,5,19,0,0,442,449,5,20,0,0,443,449,5,21,
0,0,444,449,5,22,0,0,445,449,5,23,0,0,446,449,5,24,0,0,447,449,5,25,0,0,
448,439,1,0,0,0,448,440,1,0,0,0,448,441,1,0,0,0,448,442,1,0,0,0,448,443,
1,0,0,0,448,444,1,0,0,0,448,445,1,0,0,0,448,446,1,0,0,0,448,447,1,0,0,0,
449,41,1,0,0,0,69,44,48,59,65,71,75,79,85,89,93,99,103,107,111,119,122,128,
132,136,140,144,148,153,157,162,164,172,177,188,193,197,201,207,211,215,
219,227,231,235,239,245,249,253,259,263,267,271,279,282,288,290,296,306,
347,349,362,372,379,389,394,402,406,409,413,417,420,424,427,448];


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
	        this.state = 164;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
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

	        case 3:
	            localctx = new NestedLambda_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 130;
	            this.match(biesCParser.T__2);
	            this.state = 132;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===44) {
	                this.state = 131;
	                this.match(biesCParser.WS);
	            }

	            this.state = 134;
	            this.id();
	            this.state = 136;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===44) {
	                this.state = 135;
	                this.match(biesCParser.WS);
	            }

	            this.state = 138;
	            this.match(biesCParser.T__3);
	            this.state = 140;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===44) {
	                this.state = 139;
	                this.match(biesCParser.WS);
	            }

	            this.state = 142;
	            this.id();
	            this.state = 153;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,22,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 144;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    if(_la===44) {
	                        this.state = 143;
	                        this.match(biesCParser.WS);
	                    }

	                    this.state = 146;
	                    this.match(biesCParser.T__5);
	                    this.state = 148;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    if(_la===44) {
	                        this.state = 147;
	                        this.match(biesCParser.WS);
	                    }

	                    this.state = 150;
	                    this.id(); 
	                }
	                this.state = 155;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,22,this._ctx);
	            }

	            this.state = 157;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===44) {
	                this.state = 156;
	                this.match(biesCParser.WS);
	            }

	            this.state = 159;
	            this.match(biesCParser.T__5);
	            this.state = 162;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 160;
	                this.statement();
	                break;

	            case 2:
	                this.state = 161;
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
	        this.state = 166;
	        this.match(biesCParser.T__2);
	        this.state = 167;
	        this.match(biesCParser.T__7);
	        this.state = 177;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===3 || _la===11) {
	            this.state = 168;
	            this.declaration();
	            this.state = 172;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===43 || _la===44) {
	                this.state = 169;
	                _la = this._input.LA(1);
	                if(!(_la===43 || _la===44)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 174;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 179;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 180;
	        this.match(biesCParser.T__8);
	        this.state = 181;
	        this.match(biesCParser.T__9);
	        this.state = 197;
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
	            this.state = 182;
	            this.statement();
	            break;
	        case 8:
	            this.state = 183;
	            this.match(biesCParser.T__7);
	            this.state = 193;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) === 0 && ((1 << _la) & 872300552) !== 0)) {
	                this.state = 184;
	                this.statement();
	                this.state = 188;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===43 || _la===44) {
	                    this.state = 185;
	                    _la = this._input.LA(1);
	                    if(!(_la===43 || _la===44)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 190;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	                this.state = 195;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 196;
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
	        this.state = 199;
	        this.if_();
	        this.state = 201;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===44) {
	            this.state = 200;
	            this.match(biesCParser.WS);
	        }

	        this.state = 203;
	        this.match(biesCParser.T__0);
	        this.state = 204;
	        this.expr(0);
	        this.state = 205;
	        this.match(biesCParser.T__1);
	        this.state = 207;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===44) {
	            this.state = 206;
	            this.match(biesCParser.WS);
	        }

	        this.state = 209;
	        this.then();
	        this.state = 211;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===44) {
	            this.state = 210;
	            this.match(biesCParser.WS);
	        }

	        this.state = 213;
	        this.expr(0);
	        this.state = 215;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===44) {
	            this.state = 214;
	            this.match(biesCParser.WS);
	        }

	        this.state = 217;
	        this.else_();
	        this.state = 219;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===44) {
	            this.state = 218;
	            this.match(biesCParser.WS);
	        }

	        this.state = 221;
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
	        this.state = 227;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,36,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 223;
	            this.simpleLetInstr();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 224;
	            this.simpleConstInstr();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 225;
	            this.anonymousConstFunction();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 226;
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
	        this.state = 229;
	        this.match(biesCParser.T__10);
	        this.state = 231;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===44) {
	            this.state = 230;
	            this.match(biesCParser.WS);
	        }

	        this.state = 233;
	        this.id();
	        this.state = 235;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===44) {
	            this.state = 234;
	            this.match(biesCParser.WS);
	        }

	        this.state = 237;
	        this.match(biesCParser.T__3);
	        this.state = 239;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===44) {
	            this.state = 238;
	            this.match(biesCParser.WS);
	        }

	        this.state = 241;
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
	        this.state = 290;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,50,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new LambdaConstNoParams_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 243;
	            this.match(biesCParser.T__10);
	            this.state = 245;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===44) {
	                this.state = 244;
	                this.match(biesCParser.WS);
	            }

	            this.state = 247;
	            this.id();
	            this.state = 249;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===44) {
	                this.state = 248;
	                this.match(biesCParser.WS);
	            }

	            this.state = 251;
	            this.match(biesCParser.T__3);
	            this.state = 253;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===44) {
	                this.state = 252;
	                this.match(biesCParser.WS);
	            }

	            this.state = 255;
	            this.match(biesCParser.T__4);
	            this.state = 256;
	            this.match(biesCParser.T__5);
	            this.state = 259;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,43,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 257;
	                this.statement();
	                break;

	            case 2:
	                this.state = 258;
	                this.expr(0);
	                break;

	            }
	            break;

	        case 2:
	            localctx = new LambdaConstWithParams_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 261;
	            this.match(biesCParser.T__10);
	            this.state = 263;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===44) {
	                this.state = 262;
	                this.match(biesCParser.WS);
	            }

	            this.state = 265;
	            this.id();
	            this.state = 267;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===44) {
	                this.state = 266;
	                this.match(biesCParser.WS);
	            }

	            this.state = 269;
	            this.match(biesCParser.T__3);
	            this.state = 271;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===44) {
	                this.state = 270;
	                this.match(biesCParser.WS);
	            }

	            this.state = 273;
	            this.match(biesCParser.T__0);
	            this.state = 282;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===29) {
	                this.state = 274;
	                this.id();
	                this.state = 279;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===7) {
	                    this.state = 275;
	                    this.match(biesCParser.T__6);
	                    this.state = 276;
	                    this.id();
	                    this.state = 281;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	            }

	            this.state = 284;
	            this.match(biesCParser.T__1);
	            this.state = 285;
	            this.match(biesCParser.T__5);
	            this.state = 288;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,49,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 286;
	                this.statement();
	                break;

	            case 2:
	                this.state = 287;
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
	        this.state = 296;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 27:
	            localctx = new Number_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 292;
	            this.number();
	            break;
	        case 26:
	            localctx = new String_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 293;
	            this.string();
	            break;
	        case 12:
	            localctx = new Array_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 294;
	            this.array();
	            break;
	        case 29:
	            localctx = new Id_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 295;
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
	        this.state = 306;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,52,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new AnonymousFunctionExpr_LabelContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 299;
	            this.anonymousLetFunction();
	            break;

	        case 2:
	            localctx = new PrimaryData_LabelContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 300;
	            this.primarydata();
	            break;

	        case 3:
	            localctx = new FunctionCallExpr_LabelContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 301;
	            this.functionCall();
	            break;

	        case 4:
	            localctx = new Exp_LabelContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 302;
	            this.match(biesCParser.T__0);
	            this.state = 303;
	            this.expr(0);
	            this.state = 304;
	            this.match(biesCParser.T__1);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 349;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,54,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 347;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,53,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new Mul_LabelContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expr);
	                    this.state = 308;
	                    if (!( this.precpred(this._ctx, 14))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 14)");
	                    }
	                    this.state = 309;
	                    this.match(biesCParser.MULT);
	                    this.state = 310;
	                    this.expr(15);
	                    break;

	                case 2:
	                    localctx = new Div_LabelContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expr);
	                    this.state = 311;
	                    if (!( this.precpred(this._ctx, 13))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
	                    }
	                    this.state = 312;
	                    this.match(biesCParser.DIV);
	                    this.state = 313;
	                    this.expr(14);
	                    break;

	                case 3:
	                    localctx = new Add_LabelContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expr);
	                    this.state = 314;
	                    if (!( this.precpred(this._ctx, 12))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
	                    }
	                    this.state = 315;
	                    this.match(biesCParser.ADD);
	                    this.state = 316;
	                    this.expr(13);
	                    break;

	                case 4:
	                    localctx = new Sub_LabelContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expr);
	                    this.state = 317;
	                    if (!( this.precpred(this._ctx, 11))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
	                    }
	                    this.state = 318;
	                    this.match(biesCParser.SUB);
	                    this.state = 319;
	                    this.expr(12);
	                    break;

	                case 5:
	                    localctx = new Pow_LabelContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expr);
	                    this.state = 320;
	                    if (!( this.precpred(this._ctx, 10))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
	                    }
	                    this.state = 321;
	                    this.match(biesCParser.POW);
	                    this.state = 322;
	                    this.expr(11);
	                    break;

	                case 6:
	                    localctx = new And_LabelContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expr);
	                    this.state = 323;
	                    if (!( this.precpred(this._ctx, 9))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
	                    }
	                    this.state = 324;
	                    this.match(biesCParser.AND);
	                    this.state = 325;
	                    this.expr(10);
	                    break;

	                case 7:
	                    localctx = new Or_LabelContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expr);
	                    this.state = 326;
	                    if (!( this.precpred(this._ctx, 8))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                    }
	                    this.state = 327;
	                    this.match(biesCParser.OR);
	                    this.state = 328;
	                    this.expr(9);
	                    break;

	                case 8:
	                    localctx = new Eq_LabelContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expr);
	                    this.state = 329;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 330;
	                    this.match(biesCParser.EQ);
	                    this.state = 331;
	                    this.expr(8);
	                    break;

	                case 9:
	                    localctx = new Neq_LabelContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expr);
	                    this.state = 332;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 333;
	                    this.match(biesCParser.NEQ);
	                    this.state = 334;
	                    this.expr(7);
	                    break;

	                case 10:
	                    localctx = new Lt_LabelContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expr);
	                    this.state = 335;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 336;
	                    this.match(biesCParser.LT);
	                    this.state = 337;
	                    this.expr(6);
	                    break;

	                case 11:
	                    localctx = new Gt_LabelContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expr);
	                    this.state = 338;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 339;
	                    this.match(biesCParser.GT);
	                    this.state = 340;
	                    this.expr(5);
	                    break;

	                case 12:
	                    localctx = new Le_LabelContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expr);
	                    this.state = 341;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 342;
	                    this.match(biesCParser.LE);
	                    this.state = 343;
	                    this.expr(4);
	                    break;

	                case 13:
	                    localctx = new Ge_LabelContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expr);
	                    this.state = 344;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 345;
	                    this.match(biesCParser.GE);
	                    this.state = 346;
	                    this.expr(3);
	                    break;

	                } 
	            }
	            this.state = 351;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,54,this._ctx);
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
	        this.state = 394;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,59,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new FunctionCallNoParams_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 352;
	            this.id();
	            this.state = 353;
	            this.match(biesCParser.T__4);
	            break;

	        case 2:
	            localctx = new FunctionCallWithParams_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 355;
	            this.id();
	            this.state = 356;
	            this.match(biesCParser.T__0);
	            this.state = 357;
	            this.expr(0);
	            this.state = 362;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===7) {
	                this.state = 358;
	                this.match(biesCParser.T__6);
	                this.state = 359;
	                this.expr(0);
	                this.state = 364;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 365;
	            this.match(biesCParser.T__1);
	            this.state = 379;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,57,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 366;
	                    this.match(biesCParser.T__0);
	                    this.state = 367;
	                    this.expr(0);
	                    this.state = 372;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    while(_la===7) {
	                        this.state = 368;
	                        this.match(biesCParser.T__6);
	                        this.state = 369;
	                        this.expr(0);
	                        this.state = 374;
	                        this._errHandler.sync(this);
	                        _la = this._input.LA(1);
	                    }
	                    this.state = 375;
	                    this.match(biesCParser.T__1); 
	                }
	                this.state = 381;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,57,this._ctx);
	            }

	            break;

	        case 3:
	            localctx = new PredifinedFunctionCall_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 382;
	            this.predSymbols();
	            this.state = 383;
	            this.match(biesCParser.T__0);
	            this.state = 384;
	            this.expr(0);
	            this.state = 389;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===7) {
	                this.state = 385;
	                this.match(biesCParser.T__6);
	                this.state = 386;
	                this.expr(0);
	                this.state = 391;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 392;
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
	        this.state = 396;
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
	        this.state = 398;
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
	        this.state = 400;
	        this.match(biesCParser.T__11);
	        this.state = 402;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===44) {
	            this.state = 401;
	            this.match(biesCParser.WS);
	        }

	        this.state = 427;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 805179402) !== 0)) {
	            this.state = 406;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,61,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 404;
	                this.primarydata();
	                break;

	            case 2:
	                this.state = 405;
	                this.expr(0);
	                break;

	            }
	            this.state = 409;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===44) {
	                this.state = 408;
	                this.match(biesCParser.WS);
	            }

	            this.state = 424;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===7) {
	                this.state = 411;
	                this.match(biesCParser.T__6);
	                this.state = 413;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===44) {
	                    this.state = 412;
	                    this.match(biesCParser.WS);
	                }

	                this.state = 417;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,64,this._ctx);
	                switch(la_) {
	                case 1:
	                    this.state = 415;
	                    this.primarydata();
	                    break;

	                case 2:
	                    this.state = 416;
	                    this.expr(0);
	                    break;

	                }
	                this.state = 420;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===44) {
	                    this.state = 419;
	                    this.match(biesCParser.WS);
	                }

	                this.state = 426;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 429;
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
	        this.state = 431;
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
	        this.state = 433;
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
	        this.state = 435;
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
	        this.state = 437;
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
	        this.state = 448;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 17:
	            localctx = new Bool_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 439;
	            this.match(biesCParser.BOOL);
	            break;
	        case 18:
	            localctx = new True_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 440;
	            this.match(biesCParser.TRUE);
	            break;
	        case 19:
	            localctx = new False_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 441;
	            this.match(biesCParser.FALSE);
	            break;
	        case 20:
	            localctx = new Null_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 442;
	            this.match(biesCParser.NULL);
	            break;
	        case 21:
	            localctx = new Input_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 5);
	            this.state = 443;
	            this.match(biesCParser.INPUT);
	            break;
	        case 22:
	            localctx = new Int_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 6);
	            this.state = 444;
	            this.match(biesCParser.INT);
	            break;
	        case 23:
	            localctx = new Str_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 7);
	            this.state = 445;
	            this.match(biesCParser.STR);
	            break;
	        case 24:
	            localctx = new List_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 8);
	            this.state = 446;
	            this.match(biesCParser.LIST);
	            break;
	        case 25:
	            localctx = new Len_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 9);
	            this.state = 447;
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
