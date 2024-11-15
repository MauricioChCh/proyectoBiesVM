// Generated from ./grammar/biesC.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import biesCVisitor from './biesCVisitor.js';

const serializedATN = [4,1,43,362,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,1,0,1,0,3,0,37,8,0,5,0,39,8,0,10,
0,12,0,42,9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,3,1,51,8,1,1,2,1,2,1,2,1,2,3,2,
57,8,2,1,2,1,2,1,3,1,3,3,3,63,8,3,1,3,1,3,3,3,67,8,3,1,3,1,3,3,3,71,8,3,
1,3,1,3,1,4,1,4,3,4,77,8,4,1,4,1,4,3,4,81,8,4,1,4,1,4,3,4,85,8,4,1,4,1,4,
1,4,1,4,3,4,91,8,4,1,4,1,4,3,4,95,8,4,1,4,1,4,3,4,99,8,4,1,4,1,4,3,4,103,
8,4,1,4,1,4,1,4,1,4,5,4,109,8,4,10,4,12,4,112,9,4,3,4,114,8,4,1,4,1,4,1,
4,1,4,3,4,120,8,4,3,4,122,8,4,1,5,1,5,1,5,1,5,5,5,128,8,5,10,5,12,5,131,
9,5,5,5,133,8,5,10,5,12,5,136,9,5,1,5,1,5,1,5,1,5,1,5,5,5,143,8,5,10,5,12,
5,146,9,5,5,5,148,8,5,10,5,12,5,151,9,5,1,5,3,5,154,8,5,1,6,1,6,1,6,1,6,
3,6,160,8,6,1,7,1,7,3,7,164,8,7,1,7,1,7,3,7,168,8,7,1,7,1,7,3,7,172,8,7,
1,7,1,7,1,8,1,8,3,8,178,8,8,1,8,1,8,3,8,182,8,8,1,8,1,8,3,8,186,8,8,1,8,
1,8,1,8,1,8,3,8,192,8,8,1,8,1,8,3,8,196,8,8,1,8,1,8,3,8,200,8,8,1,8,1,8,
3,8,204,8,8,1,8,1,8,1,8,1,8,5,8,210,8,8,10,8,12,8,213,9,8,3,8,215,8,8,1,
8,1,8,1,8,1,8,3,8,221,8,8,3,8,223,8,8,1,9,1,9,1,9,1,9,3,9,229,8,9,1,10,1,
10,1,10,1,10,1,10,1,10,1,10,1,10,3,10,239,8,10,1,10,1,10,1,10,1,10,1,10,
1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,
10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,
1,10,1,10,1,10,1,10,1,10,5,10,280,8,10,10,10,12,10,283,9,10,1,11,1,11,1,
11,1,11,1,11,1,11,1,11,1,11,5,11,293,8,11,10,11,12,11,296,9,11,1,11,1,11,
1,11,1,11,1,11,1,11,1,11,5,11,305,8,11,10,11,12,11,308,9,11,1,11,1,11,3,
11,312,8,11,1,12,1,12,1,13,1,13,1,14,1,14,3,14,320,8,14,1,14,1,14,3,14,324,
8,14,1,14,3,14,327,8,14,1,14,1,14,3,14,331,8,14,1,14,1,14,3,14,335,8,14,
1,14,3,14,338,8,14,5,14,340,8,14,10,14,12,14,343,9,14,3,14,345,8,14,1,14,
1,14,1,15,1,15,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,3,16,360,8,16,
1,16,0,1,20,17,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,0,1,1,0,40,
41,426,0,40,1,0,0,0,2,50,1,0,0,0,4,52,1,0,0,0,6,60,1,0,0,0,8,121,1,0,0,0,
10,123,1,0,0,0,12,159,1,0,0,0,14,161,1,0,0,0,16,222,1,0,0,0,18,228,1,0,0,
0,20,238,1,0,0,0,22,311,1,0,0,0,24,313,1,0,0,0,26,315,1,0,0,0,28,317,1,0,
0,0,30,348,1,0,0,0,32,359,1,0,0,0,34,36,3,2,1,0,35,37,5,40,0,0,36,35,1,0,
0,0,36,37,1,0,0,0,37,39,1,0,0,0,38,34,1,0,0,0,39,42,1,0,0,0,40,38,1,0,0,
0,40,41,1,0,0,0,41,43,1,0,0,0,42,40,1,0,0,0,43,44,5,0,0,1,44,1,1,0,0,0,45,
51,3,4,2,0,46,51,3,6,3,0,47,51,3,8,4,0,48,51,3,22,11,0,49,51,3,10,5,0,50,
45,1,0,0,0,50,46,1,0,0,0,50,47,1,0,0,0,50,48,1,0,0,0,50,49,1,0,0,0,51,3,
1,0,0,0,52,53,5,25,0,0,53,56,5,1,0,0,54,57,3,18,9,0,55,57,3,20,10,0,56,54,
1,0,0,0,56,55,1,0,0,0,57,58,1,0,0,0,58,59,5,2,0,0,59,5,1,0,0,0,60,62,5,3,
0,0,61,63,5,41,0,0,62,61,1,0,0,0,62,63,1,0,0,0,63,64,1,0,0,0,64,66,3,30,
15,0,65,67,5,41,0,0,66,65,1,0,0,0,66,67,1,0,0,0,67,68,1,0,0,0,68,70,5,4,
0,0,69,71,5,41,0,0,70,69,1,0,0,0,70,71,1,0,0,0,71,72,1,0,0,0,72,73,3,20,
10,0,73,7,1,0,0,0,74,76,5,3,0,0,75,77,5,41,0,0,76,75,1,0,0,0,76,77,1,0,0,
0,77,78,1,0,0,0,78,80,3,30,15,0,79,81,5,41,0,0,80,79,1,0,0,0,80,81,1,0,0,
0,81,82,1,0,0,0,82,84,5,4,0,0,83,85,5,41,0,0,84,83,1,0,0,0,84,85,1,0,0,0,
85,86,1,0,0,0,86,87,5,5,0,0,87,90,5,6,0,0,88,91,3,2,1,0,89,91,3,20,10,0,
90,88,1,0,0,0,90,89,1,0,0,0,91,122,1,0,0,0,92,94,5,3,0,0,93,95,5,41,0,0,
94,93,1,0,0,0,94,95,1,0,0,0,95,96,1,0,0,0,96,98,3,30,15,0,97,99,5,41,0,0,
98,97,1,0,0,0,98,99,1,0,0,0,99,100,1,0,0,0,100,102,5,4,0,0,101,103,5,41,
0,0,102,101,1,0,0,0,102,103,1,0,0,0,103,104,1,0,0,0,104,113,5,1,0,0,105,
110,3,30,15,0,106,107,5,7,0,0,107,109,3,30,15,0,108,106,1,0,0,0,109,112,
1,0,0,0,110,108,1,0,0,0,110,111,1,0,0,0,111,114,1,0,0,0,112,110,1,0,0,0,
113,105,1,0,0,0,113,114,1,0,0,0,114,115,1,0,0,0,115,116,5,2,0,0,116,119,
5,6,0,0,117,120,3,2,1,0,118,120,3,20,10,0,119,117,1,0,0,0,119,118,1,0,0,
0,120,122,1,0,0,0,121,74,1,0,0,0,121,92,1,0,0,0,122,9,1,0,0,0,123,124,5,
3,0,0,124,134,5,8,0,0,125,129,3,12,6,0,126,128,7,0,0,0,127,126,1,0,0,0,128,
131,1,0,0,0,129,127,1,0,0,0,129,130,1,0,0,0,130,133,1,0,0,0,131,129,1,0,
0,0,132,125,1,0,0,0,133,136,1,0,0,0,134,132,1,0,0,0,134,135,1,0,0,0,135,
137,1,0,0,0,136,134,1,0,0,0,137,138,5,9,0,0,138,153,5,10,0,0,139,149,5,8,
0,0,140,144,3,2,1,0,141,143,7,0,0,0,142,141,1,0,0,0,143,146,1,0,0,0,144,
142,1,0,0,0,144,145,1,0,0,0,145,148,1,0,0,0,146,144,1,0,0,0,147,140,1,0,
0,0,148,151,1,0,0,0,149,147,1,0,0,0,149,150,1,0,0,0,150,152,1,0,0,0,151,
149,1,0,0,0,152,154,5,9,0,0,153,139,1,0,0,0,153,154,1,0,0,0,154,11,1,0,0,
0,155,160,3,6,3,0,156,160,3,14,7,0,157,160,3,16,8,0,158,160,3,8,4,0,159,
155,1,0,0,0,159,156,1,0,0,0,159,157,1,0,0,0,159,158,1,0,0,0,160,13,1,0,0,
0,161,163,5,11,0,0,162,164,5,41,0,0,163,162,1,0,0,0,163,164,1,0,0,0,164,
165,1,0,0,0,165,167,3,30,15,0,166,168,5,41,0,0,167,166,1,0,0,0,167,168,1,
0,0,0,168,169,1,0,0,0,169,171,5,4,0,0,170,172,5,41,0,0,171,170,1,0,0,0,171,
172,1,0,0,0,172,173,1,0,0,0,173,174,3,20,10,0,174,15,1,0,0,0,175,177,5,11,
0,0,176,178,5,41,0,0,177,176,1,0,0,0,177,178,1,0,0,0,178,179,1,0,0,0,179,
181,3,30,15,0,180,182,5,41,0,0,181,180,1,0,0,0,181,182,1,0,0,0,182,183,1,
0,0,0,183,185,5,4,0,0,184,186,5,41,0,0,185,184,1,0,0,0,185,186,1,0,0,0,186,
187,1,0,0,0,187,188,5,5,0,0,188,191,5,6,0,0,189,192,3,2,1,0,190,192,3,20,
10,0,191,189,1,0,0,0,191,190,1,0,0,0,192,223,1,0,0,0,193,195,5,11,0,0,194,
196,5,41,0,0,195,194,1,0,0,0,195,196,1,0,0,0,196,197,1,0,0,0,197,199,3,30,
15,0,198,200,5,41,0,0,199,198,1,0,0,0,199,200,1,0,0,0,200,201,1,0,0,0,201,
203,5,4,0,0,202,204,5,41,0,0,203,202,1,0,0,0,203,204,1,0,0,0,204,205,1,0,
0,0,205,214,5,1,0,0,206,211,3,30,15,0,207,208,5,7,0,0,208,210,3,30,15,0,
209,207,1,0,0,0,210,213,1,0,0,0,211,209,1,0,0,0,211,212,1,0,0,0,212,215,
1,0,0,0,213,211,1,0,0,0,214,206,1,0,0,0,214,215,1,0,0,0,215,216,1,0,0,0,
216,217,5,2,0,0,217,220,5,6,0,0,218,221,3,2,1,0,219,221,3,20,10,0,220,218,
1,0,0,0,220,219,1,0,0,0,221,223,1,0,0,0,222,175,1,0,0,0,222,193,1,0,0,0,
223,17,1,0,0,0,224,229,3,24,12,0,225,229,3,26,13,0,226,229,3,28,14,0,227,
229,3,30,15,0,228,224,1,0,0,0,228,225,1,0,0,0,228,226,1,0,0,0,228,227,1,
0,0,0,229,19,1,0,0,0,230,231,6,10,-1,0,231,239,3,8,4,0,232,239,3,18,9,0,
233,239,3,22,11,0,234,235,5,1,0,0,235,236,3,20,10,0,236,237,5,2,0,0,237,
239,1,0,0,0,238,230,1,0,0,0,238,232,1,0,0,0,238,233,1,0,0,0,238,234,1,0,
0,0,239,281,1,0,0,0,240,241,10,14,0,0,241,242,5,27,0,0,242,280,3,20,10,15,
243,244,10,13,0,0,244,245,5,28,0,0,245,280,3,20,10,14,246,247,10,12,0,0,
247,248,5,29,0,0,248,280,3,20,10,13,249,250,10,11,0,0,250,251,5,30,0,0,251,
280,3,20,10,12,252,253,10,10,0,0,253,254,5,31,0,0,254,280,3,20,10,11,255,
256,10,9,0,0,256,257,5,32,0,0,257,280,3,20,10,10,258,259,10,8,0,0,259,260,
5,33,0,0,260,280,3,20,10,9,261,262,10,7,0,0,262,263,5,34,0,0,263,280,3,20,
10,8,264,265,10,6,0,0,265,266,5,35,0,0,266,280,3,20,10,7,267,268,10,5,0,
0,268,269,5,36,0,0,269,280,3,20,10,6,270,271,10,4,0,0,271,272,5,37,0,0,272,
280,3,20,10,5,273,274,10,3,0,0,274,275,5,38,0,0,275,280,3,20,10,4,276,277,
10,2,0,0,277,278,5,39,0,0,278,280,3,20,10,3,279,240,1,0,0,0,279,243,1,0,
0,0,279,246,1,0,0,0,279,249,1,0,0,0,279,252,1,0,0,0,279,255,1,0,0,0,279,
258,1,0,0,0,279,261,1,0,0,0,279,264,1,0,0,0,279,267,1,0,0,0,279,270,1,0,
0,0,279,273,1,0,0,0,279,276,1,0,0,0,280,283,1,0,0,0,281,279,1,0,0,0,281,
282,1,0,0,0,282,21,1,0,0,0,283,281,1,0,0,0,284,285,3,30,15,0,285,286,5,5,
0,0,286,312,1,0,0,0,287,288,3,30,15,0,288,289,5,1,0,0,289,294,3,20,10,0,
290,291,5,7,0,0,291,293,3,20,10,0,292,290,1,0,0,0,293,296,1,0,0,0,294,292,
1,0,0,0,294,295,1,0,0,0,295,297,1,0,0,0,296,294,1,0,0,0,297,298,5,2,0,0,
298,312,1,0,0,0,299,300,3,32,16,0,300,301,5,1,0,0,301,306,3,20,10,0,302,
303,5,7,0,0,303,305,3,20,10,0,304,302,1,0,0,0,305,308,1,0,0,0,306,304,1,
0,0,0,306,307,1,0,0,0,307,309,1,0,0,0,308,306,1,0,0,0,309,310,5,2,0,0,310,
312,1,0,0,0,311,284,1,0,0,0,311,287,1,0,0,0,311,299,1,0,0,0,312,23,1,0,0,
0,313,314,5,24,0,0,314,25,1,0,0,0,315,316,5,23,0,0,316,27,1,0,0,0,317,319,
5,12,0,0,318,320,5,41,0,0,319,318,1,0,0,0,319,320,1,0,0,0,320,344,1,0,0,
0,321,324,3,18,9,0,322,324,3,20,10,0,323,321,1,0,0,0,323,322,1,0,0,0,324,
326,1,0,0,0,325,327,5,41,0,0,326,325,1,0,0,0,326,327,1,0,0,0,327,341,1,0,
0,0,328,330,5,7,0,0,329,331,5,41,0,0,330,329,1,0,0,0,330,331,1,0,0,0,331,
334,1,0,0,0,332,335,3,18,9,0,333,335,3,20,10,0,334,332,1,0,0,0,334,333,1,
0,0,0,335,337,1,0,0,0,336,338,5,41,0,0,337,336,1,0,0,0,337,338,1,0,0,0,338,
340,1,0,0,0,339,328,1,0,0,0,340,343,1,0,0,0,341,339,1,0,0,0,341,342,1,0,
0,0,342,345,1,0,0,0,343,341,1,0,0,0,344,323,1,0,0,0,344,345,1,0,0,0,345,
346,1,0,0,0,346,347,5,13,0,0,347,29,1,0,0,0,348,349,5,26,0,0,349,31,1,0,
0,0,350,360,5,14,0,0,351,360,5,15,0,0,352,360,5,16,0,0,353,360,5,17,0,0,
354,360,5,18,0,0,355,360,5,19,0,0,356,360,5,20,0,0,357,360,5,21,0,0,358,
360,5,22,0,0,359,350,1,0,0,0,359,351,1,0,0,0,359,352,1,0,0,0,359,353,1,0,
0,0,359,354,1,0,0,0,359,355,1,0,0,0,359,356,1,0,0,0,359,357,1,0,0,0,359,
358,1,0,0,0,360,33,1,0,0,0,54,36,40,50,56,62,66,70,76,80,84,90,94,98,102,
110,113,119,121,129,134,144,149,153,159,163,167,171,177,181,185,191,195,
199,203,211,214,220,222,228,238,279,281,294,306,311,319,323,326,330,334,
337,341,344,359];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class biesCParser extends antlr4.Parser {

    static grammarFileName = "biesC.g4";
    static literalNames = [ null, "'('", "')'", "'let'", "'='", "'()'", 
                            "'=>'", "','", "'{'", "'}'", "'in'", "'const'", 
                            "'['", "']'", "'bool'", "'true'", "'false'", 
                            "'null'", "'input'", "'int'", "'str'", "'list'", 
                            "'len'", null, null, "'print'", null, "'*'", 
                            "'/'", "'+'", "'-'", "'**'", "'&&'", "'||'", 
                            "'=='", "'!='", "'<'", "'>'", "'<='", "'>='" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, "BOOL", 
                             "TRUE", "FALSE", "NULL", "INPUT", "INT", "STR", 
                             "LIST", "LEN", "STRING", "NUMBER", "PRINT", 
                             "ID", "MULT", "DIV", "ADD", "SUB", "POW", "AND", 
                             "OR", "EQ", "NEQ", "LT", "GT", "LE", "GE", 
                             "NL", "WS", "COMMENT", "MULTILINE_COMMENT" ];
    static ruleNames = [ "program", "statement", "printInstr", "simpleLetInstr", 
                         "anonymousLetFunction", "letInExpr", "declaration", 
                         "simpleConstInstr", "anonymousConstFunction", "primarydata", 
                         "expr", "functionCall", "number", "string", "array", 
                         "id", "predSymbols" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = biesCParser.ruleNames;
        this.literalNames = biesCParser.literalNames;
        this.symbolicNames = biesCParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 10:
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
	        this.state = 40;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 109035528) !== 0)) {
	            this.state = 34;
	            this.statement();
	            this.state = 36;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===40) {
	                this.state = 35;
	                this.match(biesCParser.NL);
	            }

	            this.state = 42;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 43;
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
	        this.state = 50;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 45;
	            this.printInstr();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 46;
	            this.simpleLetInstr();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 47;
	            this.anonymousLetFunction();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 48;
	            this.functionCall();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 49;
	            this.letInExpr();
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
	        this.state = 52;
	        this.match(biesCParser.PRINT);
	        this.state = 53;
	        this.match(biesCParser.T__0);
	        this.state = 56;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 54;
	            this.primarydata();
	            break;

	        case 2:
	            this.state = 55;
	            this.expr(0);
	            break;

	        }
	        this.state = 58;
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
	        this.state = 60;
	        this.match(biesCParser.T__2);
	        this.state = 62;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===41) {
	            this.state = 61;
	            this.match(biesCParser.WS);
	        }

	        this.state = 64;
	        this.id();
	        this.state = 66;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===41) {
	            this.state = 65;
	            this.match(biesCParser.WS);
	        }

	        this.state = 68;
	        this.match(biesCParser.T__3);
	        this.state = 70;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===41) {
	            this.state = 69;
	            this.match(biesCParser.WS);
	        }

	        this.state = 72;
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
	        this.state = 121;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new LambdaNoParams_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 74;
	            this.match(biesCParser.T__2);
	            this.state = 76;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===41) {
	                this.state = 75;
	                this.match(biesCParser.WS);
	            }

	            this.state = 78;
	            this.id();
	            this.state = 80;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===41) {
	                this.state = 79;
	                this.match(biesCParser.WS);
	            }

	            this.state = 82;
	            this.match(biesCParser.T__3);
	            this.state = 84;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===41) {
	                this.state = 83;
	                this.match(biesCParser.WS);
	            }

	            this.state = 86;
	            this.match(biesCParser.T__4);
	            this.state = 87;
	            this.match(biesCParser.T__5);
	            this.state = 90;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 88;
	                this.statement();
	                break;

	            case 2:
	                this.state = 89;
	                this.expr(0);
	                break;

	            }
	            break;

	        case 2:
	            localctx = new LambdaWithParams_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 92;
	            this.match(biesCParser.T__2);
	            this.state = 94;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===41) {
	                this.state = 93;
	                this.match(biesCParser.WS);
	            }

	            this.state = 96;
	            this.id();
	            this.state = 98;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===41) {
	                this.state = 97;
	                this.match(biesCParser.WS);
	            }

	            this.state = 100;
	            this.match(biesCParser.T__3);
	            this.state = 102;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===41) {
	                this.state = 101;
	                this.match(biesCParser.WS);
	            }

	            this.state = 104;
	            this.match(biesCParser.T__0);
	            this.state = 113;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===26) {
	                this.state = 105;
	                this.id();
	                this.state = 110;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===7) {
	                    this.state = 106;
	                    this.match(biesCParser.T__6);
	                    this.state = 107;
	                    this.id();
	                    this.state = 112;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	            }

	            this.state = 115;
	            this.match(biesCParser.T__1);
	            this.state = 116;
	            this.match(biesCParser.T__5);
	            this.state = 119;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 117;
	                this.statement();
	                break;

	            case 2:
	                this.state = 118;
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
	        localctx = new LetInExpr_LabelContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 123;
	        this.match(biesCParser.T__2);
	        this.state = 124;
	        this.match(biesCParser.T__7);
	        this.state = 134;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===3 || _la===11) {
	            this.state = 125;
	            this.declaration();
	            this.state = 129;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===40 || _la===41) {
	                this.state = 126;
	                _la = this._input.LA(1);
	                if(!(_la===40 || _la===41)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 131;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 136;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 137;
	        this.match(biesCParser.T__8);
	        this.state = 138;
	        this.match(biesCParser.T__9);
	        this.state = 153;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
	        if(la_===1) {
	            this.state = 139;
	            this.match(biesCParser.T__7);
	            this.state = 149;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) === 0 && ((1 << _la) & 109035528) !== 0)) {
	                this.state = 140;
	                this.statement();
	                this.state = 144;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===40 || _la===41) {
	                    this.state = 141;
	                    _la = this._input.LA(1);
	                    if(!(_la===40 || _la===41)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 146;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	                this.state = 151;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 152;
	            this.match(biesCParser.T__8);

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



	declaration() {
	    let localctx = new DeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, biesCParser.RULE_declaration);
	    try {
	        this.state = 159;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,23,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 155;
	            this.simpleLetInstr();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 156;
	            this.simpleConstInstr();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 157;
	            this.anonymousConstFunction();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 158;
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
	    this.enterRule(localctx, 14, biesCParser.RULE_simpleConstInstr);
	    var _la = 0;
	    try {
	        localctx = new SimpleConstInstr_LabelContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 161;
	        this.match(biesCParser.T__10);
	        this.state = 163;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===41) {
	            this.state = 162;
	            this.match(biesCParser.WS);
	        }

	        this.state = 165;
	        this.id();
	        this.state = 167;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===41) {
	            this.state = 166;
	            this.match(biesCParser.WS);
	        }

	        this.state = 169;
	        this.match(biesCParser.T__3);
	        this.state = 171;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===41) {
	            this.state = 170;
	            this.match(biesCParser.WS);
	        }

	        this.state = 173;
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
	    this.enterRule(localctx, 16, biesCParser.RULE_anonymousConstFunction);
	    var _la = 0;
	    try {
	        this.state = 222;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,37,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new LambdaConstNoParams_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 175;
	            this.match(biesCParser.T__10);
	            this.state = 177;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===41) {
	                this.state = 176;
	                this.match(biesCParser.WS);
	            }

	            this.state = 179;
	            this.id();
	            this.state = 181;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===41) {
	                this.state = 180;
	                this.match(biesCParser.WS);
	            }

	            this.state = 183;
	            this.match(biesCParser.T__3);
	            this.state = 185;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===41) {
	                this.state = 184;
	                this.match(biesCParser.WS);
	            }

	            this.state = 187;
	            this.match(biesCParser.T__4);
	            this.state = 188;
	            this.match(biesCParser.T__5);
	            this.state = 191;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,30,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 189;
	                this.statement();
	                break;

	            case 2:
	                this.state = 190;
	                this.expr(0);
	                break;

	            }
	            break;

	        case 2:
	            localctx = new LambdaConstWithParams_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 193;
	            this.match(biesCParser.T__10);
	            this.state = 195;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===41) {
	                this.state = 194;
	                this.match(biesCParser.WS);
	            }

	            this.state = 197;
	            this.id();
	            this.state = 199;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===41) {
	                this.state = 198;
	                this.match(biesCParser.WS);
	            }

	            this.state = 201;
	            this.match(biesCParser.T__3);
	            this.state = 203;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===41) {
	                this.state = 202;
	                this.match(biesCParser.WS);
	            }

	            this.state = 205;
	            this.match(biesCParser.T__0);
	            this.state = 214;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===26) {
	                this.state = 206;
	                this.id();
	                this.state = 211;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===7) {
	                    this.state = 207;
	                    this.match(biesCParser.T__6);
	                    this.state = 208;
	                    this.id();
	                    this.state = 213;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	            }

	            this.state = 216;
	            this.match(biesCParser.T__1);
	            this.state = 217;
	            this.match(biesCParser.T__5);
	            this.state = 220;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,36,this._ctx);
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
	    this.enterRule(localctx, 18, biesCParser.RULE_primarydata);
	    try {
	        this.state = 228;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 24:
	            localctx = new Number_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 224;
	            this.number();
	            break;
	        case 23:
	            localctx = new String_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 225;
	            this.string();
	            break;
	        case 12:
	            localctx = new Array_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 226;
	            this.array();
	            break;
	        case 26:
	            localctx = new Id_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 227;
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
	    const _startState = 20;
	    this.enterRecursionRule(localctx, 20, biesCParser.RULE_expr, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 238;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,39,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new AnonymousFunctionExpr_LabelContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 231;
	            this.anonymousLetFunction();
	            break;

	        case 2:
	            localctx = new PrimaryData_LabelContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 232;
	            this.primarydata();
	            break;

	        case 3:
	            localctx = new FunctionCallExpr_LabelContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 233;
	            this.functionCall();
	            break;

	        case 4:
	            localctx = new Exp_LabelContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 234;
	            this.match(biesCParser.T__0);
	            this.state = 235;
	            this.expr(0);
	            this.state = 236;
	            this.match(biesCParser.T__1);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 281;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,41,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 279;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,40,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new Mul_LabelContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expr);
	                    this.state = 240;
	                    if (!( this.precpred(this._ctx, 14))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 14)");
	                    }
	                    this.state = 241;
	                    this.match(biesCParser.MULT);
	                    this.state = 242;
	                    this.expr(15);
	                    break;

	                case 2:
	                    localctx = new Div_LabelContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expr);
	                    this.state = 243;
	                    if (!( this.precpred(this._ctx, 13))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
	                    }
	                    this.state = 244;
	                    this.match(biesCParser.DIV);
	                    this.state = 245;
	                    this.expr(14);
	                    break;

	                case 3:
	                    localctx = new Add_LabelContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expr);
	                    this.state = 246;
	                    if (!( this.precpred(this._ctx, 12))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
	                    }
	                    this.state = 247;
	                    this.match(biesCParser.ADD);
	                    this.state = 248;
	                    this.expr(13);
	                    break;

	                case 4:
	                    localctx = new Sub_LabelContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expr);
	                    this.state = 249;
	                    if (!( this.precpred(this._ctx, 11))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
	                    }
	                    this.state = 250;
	                    this.match(biesCParser.SUB);
	                    this.state = 251;
	                    this.expr(12);
	                    break;

	                case 5:
	                    localctx = new Pow_LabelContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expr);
	                    this.state = 252;
	                    if (!( this.precpred(this._ctx, 10))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
	                    }
	                    this.state = 253;
	                    this.match(biesCParser.POW);
	                    this.state = 254;
	                    this.expr(11);
	                    break;

	                case 6:
	                    localctx = new And_LabelContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expr);
	                    this.state = 255;
	                    if (!( this.precpred(this._ctx, 9))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
	                    }
	                    this.state = 256;
	                    this.match(biesCParser.AND);
	                    this.state = 257;
	                    this.expr(10);
	                    break;

	                case 7:
	                    localctx = new Or_LabelContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expr);
	                    this.state = 258;
	                    if (!( this.precpred(this._ctx, 8))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                    }
	                    this.state = 259;
	                    this.match(biesCParser.OR);
	                    this.state = 260;
	                    this.expr(9);
	                    break;

	                case 8:
	                    localctx = new Eq_LabelContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expr);
	                    this.state = 261;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 262;
	                    this.match(biesCParser.EQ);
	                    this.state = 263;
	                    this.expr(8);
	                    break;

	                case 9:
	                    localctx = new Neq_LabelContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expr);
	                    this.state = 264;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 265;
	                    this.match(biesCParser.NEQ);
	                    this.state = 266;
	                    this.expr(7);
	                    break;

	                case 10:
	                    localctx = new Lt_LabelContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expr);
	                    this.state = 267;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 268;
	                    this.match(biesCParser.LT);
	                    this.state = 269;
	                    this.expr(6);
	                    break;

	                case 11:
	                    localctx = new Gt_LabelContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expr);
	                    this.state = 270;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 271;
	                    this.match(biesCParser.GT);
	                    this.state = 272;
	                    this.expr(5);
	                    break;

	                case 12:
	                    localctx = new Le_LabelContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expr);
	                    this.state = 273;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 274;
	                    this.match(biesCParser.LE);
	                    this.state = 275;
	                    this.expr(4);
	                    break;

	                case 13:
	                    localctx = new Ge_LabelContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expr);
	                    this.state = 276;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 277;
	                    this.match(biesCParser.GE);
	                    this.state = 278;
	                    this.expr(3);
	                    break;

	                } 
	            }
	            this.state = 283;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,41,this._ctx);
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
	    this.enterRule(localctx, 22, biesCParser.RULE_functionCall);
	    var _la = 0;
	    try {
	        this.state = 311;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,44,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new FunctionCallNoParams_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 284;
	            this.id();
	            this.state = 285;
	            this.match(biesCParser.T__4);
	            break;

	        case 2:
	            localctx = new FunctionCallWithParams_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 287;
	            this.id();
	            this.state = 288;
	            this.match(biesCParser.T__0);
	            this.state = 289;
	            this.expr(0);
	            this.state = 294;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===7) {
	                this.state = 290;
	                this.match(biesCParser.T__6);
	                this.state = 291;
	                this.expr(0);
	                this.state = 296;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 297;
	            this.match(biesCParser.T__1);
	            break;

	        case 3:
	            localctx = new PredifinedFunctionCall_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 299;
	            this.predSymbols();
	            this.state = 300;
	            this.match(biesCParser.T__0);
	            this.state = 301;
	            this.expr(0);
	            this.state = 306;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===7) {
	                this.state = 302;
	                this.match(biesCParser.T__6);
	                this.state = 303;
	                this.expr(0);
	                this.state = 308;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 309;
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
	    this.enterRule(localctx, 24, biesCParser.RULE_number);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 313;
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
	    this.enterRule(localctx, 26, biesCParser.RULE_string);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 315;
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
	    this.enterRule(localctx, 28, biesCParser.RULE_array);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 317;
	        this.match(biesCParser.T__11);
	        this.state = 319;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===41) {
	            this.state = 318;
	            this.match(biesCParser.WS);
	        }

	        this.state = 344;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 100651018) !== 0)) {
	            this.state = 323;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,46,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 321;
	                this.primarydata();
	                break;

	            case 2:
	                this.state = 322;
	                this.expr(0);
	                break;

	            }
	            this.state = 326;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===41) {
	                this.state = 325;
	                this.match(biesCParser.WS);
	            }

	            this.state = 341;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===7) {
	                this.state = 328;
	                this.match(biesCParser.T__6);
	                this.state = 330;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===41) {
	                    this.state = 329;
	                    this.match(biesCParser.WS);
	                }

	                this.state = 334;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,49,this._ctx);
	                switch(la_) {
	                case 1:
	                    this.state = 332;
	                    this.primarydata();
	                    break;

	                case 2:
	                    this.state = 333;
	                    this.expr(0);
	                    break;

	                }
	                this.state = 337;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===41) {
	                    this.state = 336;
	                    this.match(biesCParser.WS);
	                }

	                this.state = 343;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 346;
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
	    this.enterRule(localctx, 30, biesCParser.RULE_id);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 348;
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
	    this.enterRule(localctx, 32, biesCParser.RULE_predSymbols);
	    try {
	        this.state = 359;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 14:
	            localctx = new Bool_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 350;
	            this.match(biesCParser.BOOL);
	            break;
	        case 15:
	            localctx = new True_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 351;
	            this.match(biesCParser.TRUE);
	            break;
	        case 16:
	            localctx = new False_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 352;
	            this.match(biesCParser.FALSE);
	            break;
	        case 17:
	            localctx = new Null_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 353;
	            this.match(biesCParser.NULL);
	            break;
	        case 18:
	            localctx = new Input_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 5);
	            this.state = 354;
	            this.match(biesCParser.INPUT);
	            break;
	        case 19:
	            localctx = new Int_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 6);
	            this.state = 355;
	            this.match(biesCParser.INT);
	            break;
	        case 20:
	            localctx = new Str_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 7);
	            this.state = 356;
	            this.match(biesCParser.STR);
	            break;
	        case 21:
	            localctx = new List_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 8);
	            this.state = 357;
	            this.match(biesCParser.LIST);
	            break;
	        case 22:
	            localctx = new Len_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 9);
	            this.state = 358;
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
biesCParser.BOOL = 14;
biesCParser.TRUE = 15;
biesCParser.FALSE = 16;
biesCParser.NULL = 17;
biesCParser.INPUT = 18;
biesCParser.INT = 19;
biesCParser.STR = 20;
biesCParser.LIST = 21;
biesCParser.LEN = 22;
biesCParser.STRING = 23;
biesCParser.NUMBER = 24;
biesCParser.PRINT = 25;
biesCParser.ID = 26;
biesCParser.MULT = 27;
biesCParser.DIV = 28;
biesCParser.ADD = 29;
biesCParser.SUB = 30;
biesCParser.POW = 31;
biesCParser.AND = 32;
biesCParser.OR = 33;
biesCParser.EQ = 34;
biesCParser.NEQ = 35;
biesCParser.LT = 36;
biesCParser.GT = 37;
biesCParser.LE = 38;
biesCParser.GE = 39;
biesCParser.NL = 40;
biesCParser.WS = 41;
biesCParser.COMMENT = 42;
biesCParser.MULTILINE_COMMENT = 43;

biesCParser.RULE_program = 0;
biesCParser.RULE_statement = 1;
biesCParser.RULE_printInstr = 2;
biesCParser.RULE_simpleLetInstr = 3;
biesCParser.RULE_anonymousLetFunction = 4;
biesCParser.RULE_letInExpr = 5;
biesCParser.RULE_declaration = 6;
biesCParser.RULE_simpleConstInstr = 7;
biesCParser.RULE_anonymousConstFunction = 8;
biesCParser.RULE_primarydata = 9;
biesCParser.RULE_expr = 10;
biesCParser.RULE_functionCall = 11;
biesCParser.RULE_number = 12;
biesCParser.RULE_string = 13;
biesCParser.RULE_array = 14;
biesCParser.RULE_id = 15;
biesCParser.RULE_predSymbols = 16;

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


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class LetInExpr_LabelContext extends LetInExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

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
	        return visitor.visitLetInExpr_Label(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

biesCParser.LetInExpr_LabelContext = LetInExpr_LabelContext;

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
