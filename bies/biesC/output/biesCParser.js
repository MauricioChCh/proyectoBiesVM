// Generated from grammar/biesC.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import biesCVisitor from './biesCVisitor.js';

const serializedATN = [4,1,33,361,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,1,0,1,0,3,0,39,8,0,5,0,
41,8,0,10,0,12,0,44,9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,55,8,1,1,
2,1,2,1,2,1,2,1,2,3,2,62,8,2,1,2,1,2,1,3,1,3,3,3,68,8,3,1,3,1,3,3,3,72,8,
3,1,3,1,3,3,3,76,8,3,1,3,1,3,1,4,1,4,3,4,82,8,4,1,4,1,4,3,4,86,8,4,1,4,1,
4,3,4,90,8,4,1,4,1,4,1,4,1,4,3,4,96,8,4,1,4,1,4,3,4,100,8,4,1,4,1,4,3,4,
104,8,4,1,4,1,4,3,4,108,8,4,1,4,1,4,1,4,1,4,5,4,114,8,4,10,4,12,4,117,9,
4,3,4,119,8,4,1,4,1,4,1,4,1,4,3,4,125,8,4,3,4,127,8,4,1,5,1,5,1,5,1,5,5,
5,133,8,5,10,5,12,5,136,9,5,5,5,138,8,5,10,5,12,5,141,9,5,1,5,1,5,1,5,1,
5,1,5,5,5,148,8,5,10,5,12,5,151,9,5,5,5,153,8,5,10,5,12,5,156,9,5,1,5,3,
5,159,8,5,1,6,1,6,1,6,1,6,3,6,165,8,6,1,7,1,7,3,7,169,8,7,1,7,1,7,3,7,173,
8,7,1,7,1,7,3,7,177,8,7,1,7,1,7,1,8,1,8,3,8,183,8,8,1,8,1,8,3,8,187,8,8,
1,8,1,8,3,8,191,8,8,1,8,1,8,1,8,1,8,3,8,197,8,8,1,8,1,8,3,8,201,8,8,1,8,
1,8,3,8,205,8,8,1,8,1,8,3,8,209,8,8,1,8,1,8,1,8,1,8,5,8,215,8,8,10,8,12,
8,218,9,8,3,8,220,8,8,1,8,1,8,1,8,1,8,3,8,226,8,8,3,8,228,8,8,1,9,1,9,1,
9,1,9,3,9,234,8,9,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,3,10,245,
8,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,
10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,
1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,5,10,283,8,10,10,10,12,10,286,9,
10,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,5,11,296,8,11,10,11,12,11,299,
9,11,1,11,1,11,3,11,303,8,11,1,12,1,12,3,12,307,8,12,1,12,1,12,3,12,311,
8,12,1,12,5,12,314,8,12,10,12,12,12,317,9,12,1,13,1,13,1,13,3,13,322,8,13,
1,14,1,14,1,15,1,15,1,16,1,16,3,16,330,8,16,1,16,1,16,3,16,334,8,16,1,16,
3,16,337,8,16,1,16,1,16,3,16,341,8,16,1,16,1,16,3,16,345,8,16,1,16,3,16,
348,8,16,5,16,350,8,16,10,16,12,16,353,9,16,3,16,355,8,16,1,16,1,16,1,17,
1,17,1,17,0,1,20,18,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,0,1,
1,0,30,31,422,0,42,1,0,0,0,2,54,1,0,0,0,4,56,1,0,0,0,6,65,1,0,0,0,8,126,
1,0,0,0,10,128,1,0,0,0,12,164,1,0,0,0,14,166,1,0,0,0,16,227,1,0,0,0,18,233,
1,0,0,0,20,244,1,0,0,0,22,302,1,0,0,0,24,304,1,0,0,0,26,321,1,0,0,0,28,323,
1,0,0,0,30,325,1,0,0,0,32,327,1,0,0,0,34,358,1,0,0,0,36,38,3,2,1,0,37,39,
5,30,0,0,38,37,1,0,0,0,38,39,1,0,0,0,39,41,1,0,0,0,40,36,1,0,0,0,41,44,1,
0,0,0,42,40,1,0,0,0,42,43,1,0,0,0,43,45,1,0,0,0,44,42,1,0,0,0,45,46,5,0,
0,1,46,1,1,0,0,0,47,55,3,4,2,0,48,55,3,6,3,0,49,55,3,8,4,0,50,55,3,14,7,
0,51,55,3,16,8,0,52,55,3,22,11,0,53,55,3,10,5,0,54,47,1,0,0,0,54,48,1,0,
0,0,54,49,1,0,0,0,54,50,1,0,0,0,54,51,1,0,0,0,54,52,1,0,0,0,54,53,1,0,0,
0,55,3,1,0,0,0,56,57,5,16,0,0,57,61,5,1,0,0,58,62,3,18,9,0,59,62,3,20,10,
0,60,62,3,2,1,0,61,58,1,0,0,0,61,59,1,0,0,0,61,60,1,0,0,0,62,63,1,0,0,0,
63,64,5,2,0,0,64,5,1,0,0,0,65,67,5,3,0,0,66,68,5,31,0,0,67,66,1,0,0,0,67,
68,1,0,0,0,68,69,1,0,0,0,69,71,3,34,17,0,70,72,5,31,0,0,71,70,1,0,0,0,71,
72,1,0,0,0,72,73,1,0,0,0,73,75,5,4,0,0,74,76,5,31,0,0,75,74,1,0,0,0,75,76,
1,0,0,0,76,77,1,0,0,0,77,78,3,20,10,0,78,7,1,0,0,0,79,81,5,3,0,0,80,82,5,
31,0,0,81,80,1,0,0,0,81,82,1,0,0,0,82,83,1,0,0,0,83,85,3,34,17,0,84,86,5,
31,0,0,85,84,1,0,0,0,85,86,1,0,0,0,86,87,1,0,0,0,87,89,5,4,0,0,88,90,5,31,
0,0,89,88,1,0,0,0,89,90,1,0,0,0,90,91,1,0,0,0,91,92,5,5,0,0,92,95,5,6,0,
0,93,96,3,2,1,0,94,96,3,20,10,0,95,93,1,0,0,0,95,94,1,0,0,0,96,127,1,0,0,
0,97,99,5,3,0,0,98,100,5,31,0,0,99,98,1,0,0,0,99,100,1,0,0,0,100,101,1,0,
0,0,101,103,3,34,17,0,102,104,5,31,0,0,103,102,1,0,0,0,103,104,1,0,0,0,104,
105,1,0,0,0,105,107,5,4,0,0,106,108,5,31,0,0,107,106,1,0,0,0,107,108,1,0,
0,0,108,109,1,0,0,0,109,118,5,1,0,0,110,115,3,34,17,0,111,112,5,7,0,0,112,
114,3,34,17,0,113,111,1,0,0,0,114,117,1,0,0,0,115,113,1,0,0,0,115,116,1,
0,0,0,116,119,1,0,0,0,117,115,1,0,0,0,118,110,1,0,0,0,118,119,1,0,0,0,119,
120,1,0,0,0,120,121,5,2,0,0,121,124,5,6,0,0,122,125,3,2,1,0,123,125,3,20,
10,0,124,122,1,0,0,0,124,123,1,0,0,0,125,127,1,0,0,0,126,79,1,0,0,0,126,
97,1,0,0,0,127,9,1,0,0,0,128,129,5,3,0,0,129,139,5,8,0,0,130,134,3,12,6,
0,131,133,7,0,0,0,132,131,1,0,0,0,133,136,1,0,0,0,134,132,1,0,0,0,134,135,
1,0,0,0,135,138,1,0,0,0,136,134,1,0,0,0,137,130,1,0,0,0,138,141,1,0,0,0,
139,137,1,0,0,0,139,140,1,0,0,0,140,142,1,0,0,0,141,139,1,0,0,0,142,143,
5,9,0,0,143,158,5,10,0,0,144,154,5,8,0,0,145,149,3,2,1,0,146,148,7,0,0,0,
147,146,1,0,0,0,148,151,1,0,0,0,149,147,1,0,0,0,149,150,1,0,0,0,150,153,
1,0,0,0,151,149,1,0,0,0,152,145,1,0,0,0,153,156,1,0,0,0,154,152,1,0,0,0,
154,155,1,0,0,0,155,157,1,0,0,0,156,154,1,0,0,0,157,159,5,9,0,0,158,144,
1,0,0,0,158,159,1,0,0,0,159,11,1,0,0,0,160,165,3,6,3,0,161,165,3,14,7,0,
162,165,3,16,8,0,163,165,3,8,4,0,164,160,1,0,0,0,164,161,1,0,0,0,164,162,
1,0,0,0,164,163,1,0,0,0,165,13,1,0,0,0,166,168,5,11,0,0,167,169,5,31,0,0,
168,167,1,0,0,0,168,169,1,0,0,0,169,170,1,0,0,0,170,172,3,34,17,0,171,173,
5,31,0,0,172,171,1,0,0,0,172,173,1,0,0,0,173,174,1,0,0,0,174,176,5,4,0,0,
175,177,5,31,0,0,176,175,1,0,0,0,176,177,1,0,0,0,177,178,1,0,0,0,178,179,
3,20,10,0,179,15,1,0,0,0,180,182,5,11,0,0,181,183,5,31,0,0,182,181,1,0,0,
0,182,183,1,0,0,0,183,184,1,0,0,0,184,186,3,34,17,0,185,187,5,31,0,0,186,
185,1,0,0,0,186,187,1,0,0,0,187,188,1,0,0,0,188,190,5,4,0,0,189,191,5,31,
0,0,190,189,1,0,0,0,190,191,1,0,0,0,191,192,1,0,0,0,192,193,5,5,0,0,193,
196,5,6,0,0,194,197,3,2,1,0,195,197,3,20,10,0,196,194,1,0,0,0,196,195,1,
0,0,0,197,228,1,0,0,0,198,200,5,11,0,0,199,201,5,31,0,0,200,199,1,0,0,0,
200,201,1,0,0,0,201,202,1,0,0,0,202,204,3,34,17,0,203,205,5,31,0,0,204,203,
1,0,0,0,204,205,1,0,0,0,205,206,1,0,0,0,206,208,5,4,0,0,207,209,5,31,0,0,
208,207,1,0,0,0,208,209,1,0,0,0,209,210,1,0,0,0,210,219,5,1,0,0,211,216,
3,34,17,0,212,213,5,7,0,0,213,215,3,34,17,0,214,212,1,0,0,0,215,218,1,0,
0,0,216,214,1,0,0,0,216,217,1,0,0,0,217,220,1,0,0,0,218,216,1,0,0,0,219,
211,1,0,0,0,219,220,1,0,0,0,220,221,1,0,0,0,221,222,5,2,0,0,222,225,5,6,
0,0,223,226,3,2,1,0,224,226,3,20,10,0,225,223,1,0,0,0,225,224,1,0,0,0,226,
228,1,0,0,0,227,180,1,0,0,0,227,198,1,0,0,0,228,17,1,0,0,0,229,234,3,28,
14,0,230,234,3,30,15,0,231,234,3,32,16,0,232,234,3,34,17,0,233,229,1,0,0,
0,233,230,1,0,0,0,233,231,1,0,0,0,233,232,1,0,0,0,234,19,1,0,0,0,235,236,
6,10,-1,0,236,245,3,16,8,0,237,245,3,8,4,0,238,245,3,18,9,0,239,245,3,22,
11,0,240,241,5,1,0,0,241,242,3,20,10,0,242,243,5,2,0,0,243,245,1,0,0,0,244,
235,1,0,0,0,244,237,1,0,0,0,244,238,1,0,0,0,244,239,1,0,0,0,244,240,1,0,
0,0,245,284,1,0,0,0,246,247,10,13,0,0,247,248,5,18,0,0,248,283,3,20,10,14,
249,250,10,12,0,0,250,251,5,19,0,0,251,283,3,20,10,13,252,253,10,11,0,0,
253,254,5,20,0,0,254,283,3,20,10,12,255,256,10,10,0,0,256,257,5,21,0,0,257,
283,3,20,10,11,258,259,10,9,0,0,259,260,5,22,0,0,260,283,3,20,10,10,261,
262,10,8,0,0,262,263,5,23,0,0,263,283,3,20,10,9,264,265,10,7,0,0,265,266,
5,24,0,0,266,283,3,20,10,8,267,268,10,6,0,0,268,269,5,25,0,0,269,283,3,20,
10,7,270,271,10,5,0,0,271,272,5,26,0,0,272,283,3,20,10,6,273,274,10,4,0,
0,274,275,5,27,0,0,275,283,3,20,10,5,276,277,10,3,0,0,277,278,5,28,0,0,278,
283,3,20,10,4,279,280,10,2,0,0,280,281,5,29,0,0,281,283,3,20,10,3,282,246,
1,0,0,0,282,249,1,0,0,0,282,252,1,0,0,0,282,255,1,0,0,0,282,258,1,0,0,0,
282,261,1,0,0,0,282,264,1,0,0,0,282,267,1,0,0,0,282,270,1,0,0,0,282,273,
1,0,0,0,282,276,1,0,0,0,282,279,1,0,0,0,283,286,1,0,0,0,284,282,1,0,0,0,
284,285,1,0,0,0,285,21,1,0,0,0,286,284,1,0,0,0,287,288,3,34,17,0,288,289,
5,5,0,0,289,303,1,0,0,0,290,291,3,34,17,0,291,292,5,1,0,0,292,297,3,20,10,
0,293,294,5,7,0,0,294,296,3,20,10,0,295,293,1,0,0,0,296,299,1,0,0,0,297,
295,1,0,0,0,297,298,1,0,0,0,298,300,1,0,0,0,299,297,1,0,0,0,300,301,5,2,
0,0,301,303,1,0,0,0,302,287,1,0,0,0,302,290,1,0,0,0,303,23,1,0,0,0,304,315,
3,26,13,0,305,307,5,31,0,0,306,305,1,0,0,0,306,307,1,0,0,0,307,308,1,0,0,
0,308,310,5,20,0,0,309,311,5,31,0,0,310,309,1,0,0,0,310,311,1,0,0,0,311,
312,1,0,0,0,312,314,3,26,13,0,313,306,1,0,0,0,314,317,1,0,0,0,315,313,1,
0,0,0,315,316,1,0,0,0,316,25,1,0,0,0,317,315,1,0,0,0,318,322,3,28,14,0,319,
322,3,30,15,0,320,322,3,34,17,0,321,318,1,0,0,0,321,319,1,0,0,0,321,320,
1,0,0,0,322,27,1,0,0,0,323,324,5,15,0,0,324,29,1,0,0,0,325,326,5,14,0,0,
326,31,1,0,0,0,327,329,5,12,0,0,328,330,5,31,0,0,329,328,1,0,0,0,329,330,
1,0,0,0,330,354,1,0,0,0,331,334,3,18,9,0,332,334,3,20,10,0,333,331,1,0,0,
0,333,332,1,0,0,0,334,336,1,0,0,0,335,337,5,31,0,0,336,335,1,0,0,0,336,337,
1,0,0,0,337,351,1,0,0,0,338,340,5,7,0,0,339,341,5,31,0,0,340,339,1,0,0,0,
340,341,1,0,0,0,341,344,1,0,0,0,342,345,3,18,9,0,343,345,3,20,10,0,344,342,
1,0,0,0,344,343,1,0,0,0,345,347,1,0,0,0,346,348,5,31,0,0,347,346,1,0,0,0,
347,348,1,0,0,0,348,350,1,0,0,0,349,338,1,0,0,0,350,353,1,0,0,0,351,349,
1,0,0,0,351,352,1,0,0,0,352,355,1,0,0,0,353,351,1,0,0,0,354,333,1,0,0,0,
354,355,1,0,0,0,355,356,1,0,0,0,356,357,5,13,0,0,357,33,1,0,0,0,358,359,
5,17,0,0,359,35,1,0,0,0,56,38,42,54,61,67,71,75,81,85,89,95,99,103,107,115,
118,124,126,134,139,149,154,158,164,168,172,176,182,186,190,196,200,204,
208,216,219,225,227,233,244,282,284,297,302,306,310,315,321,329,333,336,
340,344,347,351,354];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class biesCParser extends antlr4.Parser {

    static grammarFileName = "biesC.g4";
    static literalNames = [ null, "'('", "')'", "'let'", "'='", "'()'", 
                            "'=>'", "','", "'{'", "'}'", "'in'", "'const'", 
                            "'['", "']'", null, null, "'print'", null, "'*'", 
                            "'/'", "'+'", "'-'", "'&&'", "'||'", "'=='", 
                            "'!='", "'<'", "'>'", "'<='", "'>='" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, "STRING", 
                             "NUMBER", "PRINT", "ID", "MULT", "DIV", "ADD", 
                             "SUB", "AND", "OR", "EQ", "NEQ", "LT", "GT", 
                             "LE", "GE", "NL", "WS", "COMMENT", "MULTILINE_COMMENT" ];
    static ruleNames = [ "program", "statement", "printInstr", "simpleLetInstr", 
                         "anonymousLetFunction", "letInExpr", "declaration", 
                         "simpleConstInstr", "anonymousConstFunction", "primarydata", 
                         "expr", "functionCall", "concatExpr", "concatPart", 
                         "number", "string", "array", "id" ];

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
    			return this.precpred(this._ctx, 13);
    		case 1:
    			return this.precpred(this._ctx, 12);
    		case 2:
    			return this.precpred(this._ctx, 11);
    		case 3:
    			return this.precpred(this._ctx, 10);
    		case 4:
    			return this.precpred(this._ctx, 9);
    		case 5:
    			return this.precpred(this._ctx, 8);
    		case 6:
    			return this.precpred(this._ctx, 7);
    		case 7:
    			return this.precpred(this._ctx, 6);
    		case 8:
    			return this.precpred(this._ctx, 5);
    		case 9:
    			return this.precpred(this._ctx, 4);
    		case 10:
    			return this.precpred(this._ctx, 3);
    		case 11:
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
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 198664) !== 0)) {
	            this.state = 36;
	            this.statement();
	            this.state = 38;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===30) {
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
	        this.state = 54;
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
	            this.simpleConstInstr();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 51;
	            this.anonymousConstFunction();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 52;
	            this.functionCall();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 53;
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
	        this.state = 56;
	        this.match(biesCParser.PRINT);
	        this.state = 57;
	        this.match(biesCParser.T__0);
	        this.state = 61;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 58;
	            this.primarydata();
	            break;

	        case 2:
	            this.state = 59;
	            this.expr(0);
	            break;

	        case 3:
	            this.state = 60;
	            this.statement();
	            break;

	        }
	        this.state = 63;
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
	        this.state = 65;
	        this.match(biesCParser.T__2);
	        this.state = 67;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===31) {
	            this.state = 66;
	            this.match(biesCParser.WS);
	        }

	        this.state = 69;
	        this.id();
	        this.state = 71;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===31) {
	            this.state = 70;
	            this.match(biesCParser.WS);
	        }

	        this.state = 73;
	        this.match(biesCParser.T__3);
	        this.state = 75;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===31) {
	            this.state = 74;
	            this.match(biesCParser.WS);
	        }

	        this.state = 77;
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
	        this.state = 126;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new LambdaNoParams_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 79;
	            this.match(biesCParser.T__2);
	            this.state = 81;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===31) {
	                this.state = 80;
	                this.match(biesCParser.WS);
	            }

	            this.state = 83;
	            this.id();
	            this.state = 85;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===31) {
	                this.state = 84;
	                this.match(biesCParser.WS);
	            }

	            this.state = 87;
	            this.match(biesCParser.T__3);
	            this.state = 89;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===31) {
	                this.state = 88;
	                this.match(biesCParser.WS);
	            }

	            this.state = 91;
	            this.match(biesCParser.T__4);
	            this.state = 92;
	            this.match(biesCParser.T__5);
	            this.state = 95;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 93;
	                this.statement();
	                break;

	            case 2:
	                this.state = 94;
	                this.expr(0);
	                break;

	            }
	            break;

	        case 2:
	            localctx = new LambdaWithParams_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 97;
	            this.match(biesCParser.T__2);
	            this.state = 99;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===31) {
	                this.state = 98;
	                this.match(biesCParser.WS);
	            }

	            this.state = 101;
	            this.id();
	            this.state = 103;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===31) {
	                this.state = 102;
	                this.match(biesCParser.WS);
	            }

	            this.state = 105;
	            this.match(biesCParser.T__3);
	            this.state = 107;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===31) {
	                this.state = 106;
	                this.match(biesCParser.WS);
	            }

	            this.state = 109;
	            this.match(biesCParser.T__0);
	            this.state = 118;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===17) {
	                this.state = 110;
	                this.id();
	                this.state = 115;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===7) {
	                    this.state = 111;
	                    this.match(biesCParser.T__6);
	                    this.state = 112;
	                    this.id();
	                    this.state = 117;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	            }

	            this.state = 120;
	            this.match(biesCParser.T__1);
	            this.state = 121;
	            this.match(biesCParser.T__5);
	            this.state = 124;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 122;
	                this.statement();
	                break;

	            case 2:
	                this.state = 123;
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
	        this.state = 128;
	        this.match(biesCParser.T__2);
	        this.state = 129;
	        this.match(biesCParser.T__7);
	        this.state = 139;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===3 || _la===11) {
	            this.state = 130;
	            this.declaration();
	            this.state = 134;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===30 || _la===31) {
	                this.state = 131;
	                _la = this._input.LA(1);
	                if(!(_la===30 || _la===31)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 136;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 141;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 142;
	        this.match(biesCParser.T__8);
	        this.state = 143;
	        this.match(biesCParser.T__9);
	        this.state = 158;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
	        if(la_===1) {
	            this.state = 144;
	            this.match(biesCParser.T__7);
	            this.state = 154;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) === 0 && ((1 << _la) & 198664) !== 0)) {
	                this.state = 145;
	                this.statement();
	                this.state = 149;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===30 || _la===31) {
	                    this.state = 146;
	                    _la = this._input.LA(1);
	                    if(!(_la===30 || _la===31)) {
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
	        this.state = 164;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,23,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 160;
	            this.simpleLetInstr();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 161;
	            this.simpleConstInstr();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 162;
	            this.anonymousConstFunction();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 163;
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
	        this.state = 166;
	        this.match(biesCParser.T__10);
	        this.state = 168;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===31) {
	            this.state = 167;
	            this.match(biesCParser.WS);
	        }

	        this.state = 170;
	        this.id();
	        this.state = 172;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===31) {
	            this.state = 171;
	            this.match(biesCParser.WS);
	        }

	        this.state = 174;
	        this.match(biesCParser.T__3);
	        this.state = 176;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===31) {
	            this.state = 175;
	            this.match(biesCParser.WS);
	        }

	        this.state = 178;
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
	        this.state = 227;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,37,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new LambdaConstNoParams_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 180;
	            this.match(biesCParser.T__10);
	            this.state = 182;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===31) {
	                this.state = 181;
	                this.match(biesCParser.WS);
	            }

	            this.state = 184;
	            this.id();
	            this.state = 186;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===31) {
	                this.state = 185;
	                this.match(biesCParser.WS);
	            }

	            this.state = 188;
	            this.match(biesCParser.T__3);
	            this.state = 190;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===31) {
	                this.state = 189;
	                this.match(biesCParser.WS);
	            }

	            this.state = 192;
	            this.match(biesCParser.T__4);
	            this.state = 193;
	            this.match(biesCParser.T__5);
	            this.state = 196;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,30,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 194;
	                this.statement();
	                break;

	            case 2:
	                this.state = 195;
	                this.expr(0);
	                break;

	            }
	            break;

	        case 2:
	            localctx = new LambdaConstWithParams_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 198;
	            this.match(biesCParser.T__10);
	            this.state = 200;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===31) {
	                this.state = 199;
	                this.match(biesCParser.WS);
	            }

	            this.state = 202;
	            this.id();
	            this.state = 204;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===31) {
	                this.state = 203;
	                this.match(biesCParser.WS);
	            }

	            this.state = 206;
	            this.match(biesCParser.T__3);
	            this.state = 208;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===31) {
	                this.state = 207;
	                this.match(biesCParser.WS);
	            }

	            this.state = 210;
	            this.match(biesCParser.T__0);
	            this.state = 219;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===17) {
	                this.state = 211;
	                this.id();
	                this.state = 216;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===7) {
	                    this.state = 212;
	                    this.match(biesCParser.T__6);
	                    this.state = 213;
	                    this.id();
	                    this.state = 218;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	            }

	            this.state = 221;
	            this.match(biesCParser.T__1);
	            this.state = 222;
	            this.match(biesCParser.T__5);
	            this.state = 225;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,36,this._ctx);
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
	        this.state = 233;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 15:
	            localctx = new Number_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 229;
	            this.number();
	            break;
	        case 14:
	            localctx = new String_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 230;
	            this.string();
	            break;
	        case 12:
	            localctx = new Array_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 231;
	            this.array();
	            break;
	        case 17:
	            localctx = new Id_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 232;
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
	        this.state = 244;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,39,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new AnonymousConstFunctionExpr_LabelContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 236;
	            this.anonymousConstFunction();
	            break;

	        case 2:
	            localctx = new AnonymousFunctionExpr_LabelContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 237;
	            this.anonymousLetFunction();
	            break;

	        case 3:
	            localctx = new PrimaryData_LabelContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 238;
	            this.primarydata();
	            break;

	        case 4:
	            localctx = new FunctionCallExpr_LabelContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 239;
	            this.functionCall();
	            break;

	        case 5:
	            localctx = new Parens_LabelContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 240;
	            this.match(biesCParser.T__0);
	            this.state = 241;
	            this.expr(0);
	            this.state = 242;
	            this.match(biesCParser.T__1);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 284;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,41,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 282;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,40,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new Mul_LabelContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expr);
	                    this.state = 246;
	                    if (!( this.precpred(this._ctx, 13))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
	                    }
	                    this.state = 247;
	                    this.match(biesCParser.MULT);
	                    this.state = 248;
	                    this.expr(14);
	                    break;

	                case 2:
	                    localctx = new Div_LabelContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expr);
	                    this.state = 249;
	                    if (!( this.precpred(this._ctx, 12))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
	                    }
	                    this.state = 250;
	                    this.match(biesCParser.DIV);
	                    this.state = 251;
	                    this.expr(13);
	                    break;

	                case 3:
	                    localctx = new Add_LabelContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expr);
	                    this.state = 252;
	                    if (!( this.precpred(this._ctx, 11))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
	                    }
	                    this.state = 253;
	                    this.match(biesCParser.ADD);
	                    this.state = 254;
	                    this.expr(12);
	                    break;

	                case 4:
	                    localctx = new Sub_LabelContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expr);
	                    this.state = 255;
	                    if (!( this.precpred(this._ctx, 10))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
	                    }
	                    this.state = 256;
	                    this.match(biesCParser.SUB);
	                    this.state = 257;
	                    this.expr(11);
	                    break;

	                case 5:
	                    localctx = new And_LabelContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expr);
	                    this.state = 258;
	                    if (!( this.precpred(this._ctx, 9))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
	                    }
	                    this.state = 259;
	                    this.match(biesCParser.AND);
	                    this.state = 260;
	                    this.expr(10);
	                    break;

	                case 6:
	                    localctx = new Or_LabelContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expr);
	                    this.state = 261;
	                    if (!( this.precpred(this._ctx, 8))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                    }
	                    this.state = 262;
	                    this.match(biesCParser.OR);
	                    this.state = 263;
	                    this.expr(9);
	                    break;

	                case 7:
	                    localctx = new Eq_LabelContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expr);
	                    this.state = 264;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 265;
	                    this.match(biesCParser.EQ);
	                    this.state = 266;
	                    this.expr(8);
	                    break;

	                case 8:
	                    localctx = new Neq_LabelContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expr);
	                    this.state = 267;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 268;
	                    this.match(biesCParser.NEQ);
	                    this.state = 269;
	                    this.expr(7);
	                    break;

	                case 9:
	                    localctx = new Lt_LabelContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expr);
	                    this.state = 270;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 271;
	                    this.match(biesCParser.LT);
	                    this.state = 272;
	                    this.expr(6);
	                    break;

	                case 10:
	                    localctx = new Gt_LabelContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expr);
	                    this.state = 273;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 274;
	                    this.match(biesCParser.GT);
	                    this.state = 275;
	                    this.expr(5);
	                    break;

	                case 11:
	                    localctx = new Le_LabelContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expr);
	                    this.state = 276;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 277;
	                    this.match(biesCParser.LE);
	                    this.state = 278;
	                    this.expr(4);
	                    break;

	                case 12:
	                    localctx = new Ge_LabelContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expr);
	                    this.state = 279;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 280;
	                    this.match(biesCParser.GE);
	                    this.state = 281;
	                    this.expr(3);
	                    break;

	                } 
	            }
	            this.state = 286;
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
	        this.state = 302;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,43,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new FunctionCallNoParams_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 287;
	            this.id();
	            this.state = 288;
	            this.match(biesCParser.T__4);
	            break;

	        case 2:
	            localctx = new FunctionCallWithParams_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 290;
	            this.id();
	            this.state = 291;
	            this.match(biesCParser.T__0);
	            this.state = 292;
	            this.expr(0);
	            this.state = 297;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===7) {
	                this.state = 293;
	                this.match(biesCParser.T__6);
	                this.state = 294;
	                this.expr(0);
	                this.state = 299;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 300;
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



	concatExpr() {
	    let localctx = new ConcatExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, biesCParser.RULE_concatExpr);
	    var _la = 0;
	    try {
	        localctx = new Concat_LabelContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 304;
	        this.concatPart();
	        this.state = 315;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===20 || _la===31) {
	            this.state = 306;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===31) {
	                this.state = 305;
	                this.match(biesCParser.WS);
	            }

	            this.state = 308;
	            this.match(biesCParser.ADD);
	            this.state = 310;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===31) {
	                this.state = 309;
	                this.match(biesCParser.WS);
	            }

	            this.state = 312;
	            this.concatPart();
	            this.state = 317;
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



	concatPart() {
	    let localctx = new ConcatPartContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, biesCParser.RULE_concatPart);
	    try {
	        this.state = 321;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 15:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 318;
	            this.number();
	            break;
	        case 14:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 319;
	            this.string();
	            break;
	        case 17:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 320;
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



	number() {
	    let localctx = new NumberContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, biesCParser.RULE_number);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 323;
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
	    this.enterRule(localctx, 30, biesCParser.RULE_string);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 325;
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
	    this.enterRule(localctx, 32, biesCParser.RULE_array);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 327;
	        this.match(biesCParser.T__11);
	        this.state = 329;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===31) {
	            this.state = 328;
	            this.match(biesCParser.WS);
	        }

	        this.state = 354;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 186378) !== 0)) {
	            this.state = 333;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,49,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 331;
	                this.primarydata();
	                break;

	            case 2:
	                this.state = 332;
	                this.expr(0);
	                break;

	            }
	            this.state = 336;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===31) {
	                this.state = 335;
	                this.match(biesCParser.WS);
	            }

	            this.state = 351;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===7) {
	                this.state = 338;
	                this.match(biesCParser.T__6);
	                this.state = 340;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===31) {
	                    this.state = 339;
	                    this.match(biesCParser.WS);
	                }

	                this.state = 344;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,52,this._ctx);
	                switch(la_) {
	                case 1:
	                    this.state = 342;
	                    this.primarydata();
	                    break;

	                case 2:
	                    this.state = 343;
	                    this.expr(0);
	                    break;

	                }
	                this.state = 347;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===31) {
	                    this.state = 346;
	                    this.match(biesCParser.WS);
	                }

	                this.state = 353;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 356;
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
	    this.enterRule(localctx, 34, biesCParser.RULE_id);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 358;
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
biesCParser.STRING = 14;
biesCParser.NUMBER = 15;
biesCParser.PRINT = 16;
biesCParser.ID = 17;
biesCParser.MULT = 18;
biesCParser.DIV = 19;
biesCParser.ADD = 20;
biesCParser.SUB = 21;
biesCParser.AND = 22;
biesCParser.OR = 23;
biesCParser.EQ = 24;
biesCParser.NEQ = 25;
biesCParser.LT = 26;
biesCParser.GT = 27;
biesCParser.LE = 28;
biesCParser.GE = 29;
biesCParser.NL = 30;
biesCParser.WS = 31;
biesCParser.COMMENT = 32;
biesCParser.MULTILINE_COMMENT = 33;

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
biesCParser.RULE_concatExpr = 12;
biesCParser.RULE_concatPart = 13;
biesCParser.RULE_number = 14;
biesCParser.RULE_string = 15;
biesCParser.RULE_array = 16;
biesCParser.RULE_id = 17;

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

	simpleConstInstr() {
	    return this.getTypedRuleContext(SimpleConstInstrContext,0);
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

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
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

class AnonymousConstFunctionExpr_LabelContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	anonymousConstFunction() {
	    return this.getTypedRuleContext(AnonymousConstFunctionContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitAnonymousConstFunctionExpr_Label(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

biesCParser.AnonymousConstFunctionExpr_LabelContext = AnonymousConstFunctionExpr_LabelContext;

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

class Parens_LabelContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitParens_Label(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

biesCParser.Parens_LabelContext = Parens_LabelContext;

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

class ConcatExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesCParser.RULE_concatExpr;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class Concat_LabelContext extends ConcatExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	concatPart = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ConcatPartContext);
	    } else {
	        return this.getTypedRuleContext(ConcatPartContext,i);
	    }
	};

	ADD = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(biesCParser.ADD);
	    } else {
	        return this.getToken(biesCParser.ADD, i);
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
	        return visitor.visitConcat_Label(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

biesCParser.Concat_LabelContext = Concat_LabelContext;

class ConcatPartContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesCParser.RULE_concatPart;
    }

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
	};

	string() {
	    return this.getTypedRuleContext(StringContext,0);
	};

	id() {
	    return this.getTypedRuleContext(IdContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitConcatPart(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



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
biesCParser.ConcatExprContext = ConcatExprContext; 
biesCParser.ConcatPartContext = ConcatPartContext; 
biesCParser.NumberContext = NumberContext; 
biesCParser.StringContext = StringContext; 
biesCParser.ArrayContext = ArrayContext; 
biesCParser.IdContext = IdContext; 
