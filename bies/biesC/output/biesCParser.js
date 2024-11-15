// Generated from ./grammar/biesC.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import biesCVisitor from './biesCVisitor.js';

const serializedATN = [4,1,33,333,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,1,0,1,0,3,0,35,8,0,5,0,37,8,0,10,0,12,0,40,
9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,3,1,49,8,1,1,2,1,2,1,2,1,2,3,2,55,8,2,1,
2,1,2,1,3,1,3,3,3,61,8,3,1,3,1,3,3,3,65,8,3,1,3,1,3,3,3,69,8,3,1,3,1,3,1,
4,1,4,3,4,75,8,4,1,4,1,4,3,4,79,8,4,1,4,1,4,3,4,83,8,4,1,4,1,4,1,4,1,4,3,
4,89,8,4,1,4,1,4,3,4,93,8,4,1,4,1,4,3,4,97,8,4,1,4,1,4,3,4,101,8,4,1,4,1,
4,1,4,1,4,5,4,107,8,4,10,4,12,4,110,9,4,3,4,112,8,4,1,4,1,4,1,4,1,4,3,4,
118,8,4,3,4,120,8,4,1,5,1,5,1,5,1,5,5,5,126,8,5,10,5,12,5,129,9,5,5,5,131,
8,5,10,5,12,5,134,9,5,1,5,1,5,1,5,1,5,1,5,5,5,141,8,5,10,5,12,5,144,9,5,
5,5,146,8,5,10,5,12,5,149,9,5,1,5,3,5,152,8,5,1,6,1,6,3,6,156,8,6,1,6,1,
6,3,6,160,8,6,1,6,1,6,3,6,164,8,6,1,6,1,6,1,6,1,6,3,6,170,8,6,1,6,1,6,3,
6,174,8,6,1,6,1,6,3,6,178,8,6,1,6,1,6,3,6,182,8,6,1,6,1,6,1,6,1,6,5,6,188,
8,6,10,6,12,6,191,9,6,3,6,193,8,6,1,6,1,6,1,6,1,6,3,6,199,8,6,3,6,201,8,
6,1,7,1,7,1,7,1,7,3,7,207,8,7,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,3,8,217,8,
8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,
8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,
8,5,8,255,8,8,10,8,12,8,258,9,8,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,5,9,268,
8,9,10,9,12,9,271,9,9,1,9,1,9,3,9,275,8,9,1,10,1,10,3,10,279,8,10,1,10,1,
10,3,10,283,8,10,1,10,5,10,286,8,10,10,10,12,10,289,9,10,1,11,1,11,1,11,
3,11,294,8,11,1,12,1,12,1,13,1,13,1,14,1,14,3,14,302,8,14,1,14,1,14,3,14,
306,8,14,1,14,3,14,309,8,14,1,14,1,14,3,14,313,8,14,1,14,1,14,3,14,317,8,
14,1,14,3,14,320,8,14,5,14,322,8,14,10,14,12,14,325,9,14,3,14,327,8,14,1,
14,1,14,1,15,1,15,1,15,0,1,16,16,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,
30,0,1,1,0,30,31,386,0,38,1,0,0,0,2,48,1,0,0,0,4,50,1,0,0,0,6,58,1,0,0,0,
8,119,1,0,0,0,10,121,1,0,0,0,12,200,1,0,0,0,14,206,1,0,0,0,16,216,1,0,0,
0,18,274,1,0,0,0,20,276,1,0,0,0,22,293,1,0,0,0,24,295,1,0,0,0,26,297,1,0,
0,0,28,299,1,0,0,0,30,330,1,0,0,0,32,34,3,2,1,0,33,35,5,30,0,0,34,33,1,0,
0,0,34,35,1,0,0,0,35,37,1,0,0,0,36,32,1,0,0,0,37,40,1,0,0,0,38,36,1,0,0,
0,38,39,1,0,0,0,39,41,1,0,0,0,40,38,1,0,0,0,41,42,5,0,0,1,42,1,1,0,0,0,43,
49,3,4,2,0,44,49,3,6,3,0,45,49,3,8,4,0,46,49,3,18,9,0,47,49,3,10,5,0,48,
43,1,0,0,0,48,44,1,0,0,0,48,45,1,0,0,0,48,46,1,0,0,0,48,47,1,0,0,0,49,3,
1,0,0,0,50,51,5,16,0,0,51,54,5,1,0,0,52,55,3,14,7,0,53,55,3,16,8,0,54,52,
1,0,0,0,54,53,1,0,0,0,55,56,1,0,0,0,56,57,5,2,0,0,57,5,1,0,0,0,58,60,5,3,
0,0,59,61,5,31,0,0,60,59,1,0,0,0,60,61,1,0,0,0,61,62,1,0,0,0,62,64,3,30,
15,0,63,65,5,31,0,0,64,63,1,0,0,0,64,65,1,0,0,0,65,66,1,0,0,0,66,68,5,4,
0,0,67,69,5,31,0,0,68,67,1,0,0,0,68,69,1,0,0,0,69,70,1,0,0,0,70,71,3,16,
8,0,71,7,1,0,0,0,72,74,5,3,0,0,73,75,5,31,0,0,74,73,1,0,0,0,74,75,1,0,0,
0,75,76,1,0,0,0,76,78,3,30,15,0,77,79,5,31,0,0,78,77,1,0,0,0,78,79,1,0,0,
0,79,80,1,0,0,0,80,82,5,4,0,0,81,83,5,31,0,0,82,81,1,0,0,0,82,83,1,0,0,0,
83,84,1,0,0,0,84,85,5,5,0,0,85,88,5,6,0,0,86,89,3,2,1,0,87,89,3,16,8,0,88,
86,1,0,0,0,88,87,1,0,0,0,89,120,1,0,0,0,90,92,5,3,0,0,91,93,5,31,0,0,92,
91,1,0,0,0,92,93,1,0,0,0,93,94,1,0,0,0,94,96,3,30,15,0,95,97,5,31,0,0,96,
95,1,0,0,0,96,97,1,0,0,0,97,98,1,0,0,0,98,100,5,4,0,0,99,101,5,31,0,0,100,
99,1,0,0,0,100,101,1,0,0,0,101,102,1,0,0,0,102,111,5,1,0,0,103,108,3,30,
15,0,104,105,5,7,0,0,105,107,3,30,15,0,106,104,1,0,0,0,107,110,1,0,0,0,108,
106,1,0,0,0,108,109,1,0,0,0,109,112,1,0,0,0,110,108,1,0,0,0,111,103,1,0,
0,0,111,112,1,0,0,0,112,113,1,0,0,0,113,114,5,2,0,0,114,117,5,6,0,0,115,
118,3,2,1,0,116,118,3,16,8,0,117,115,1,0,0,0,117,116,1,0,0,0,118,120,1,0,
0,0,119,72,1,0,0,0,119,90,1,0,0,0,120,9,1,0,0,0,121,122,5,3,0,0,122,132,
5,8,0,0,123,127,3,12,6,0,124,126,7,0,0,0,125,124,1,0,0,0,126,129,1,0,0,0,
127,125,1,0,0,0,127,128,1,0,0,0,128,131,1,0,0,0,129,127,1,0,0,0,130,123,
1,0,0,0,131,134,1,0,0,0,132,130,1,0,0,0,132,133,1,0,0,0,133,135,1,0,0,0,
134,132,1,0,0,0,135,136,5,9,0,0,136,151,5,10,0,0,137,147,5,8,0,0,138,142,
3,2,1,0,139,141,7,0,0,0,140,139,1,0,0,0,141,144,1,0,0,0,142,140,1,0,0,0,
142,143,1,0,0,0,143,146,1,0,0,0,144,142,1,0,0,0,145,138,1,0,0,0,146,149,
1,0,0,0,147,145,1,0,0,0,147,148,1,0,0,0,148,150,1,0,0,0,149,147,1,0,0,0,
150,152,5,9,0,0,151,137,1,0,0,0,151,152,1,0,0,0,152,11,1,0,0,0,153,155,5,
11,0,0,154,156,5,31,0,0,155,154,1,0,0,0,155,156,1,0,0,0,156,157,1,0,0,0,
157,159,3,30,15,0,158,160,5,31,0,0,159,158,1,0,0,0,159,160,1,0,0,0,160,161,
1,0,0,0,161,163,5,4,0,0,162,164,5,31,0,0,163,162,1,0,0,0,163,164,1,0,0,0,
164,165,1,0,0,0,165,166,5,5,0,0,166,169,5,6,0,0,167,170,3,2,1,0,168,170,
3,16,8,0,169,167,1,0,0,0,169,168,1,0,0,0,170,201,1,0,0,0,171,173,5,11,0,
0,172,174,5,31,0,0,173,172,1,0,0,0,173,174,1,0,0,0,174,175,1,0,0,0,175,177,
3,30,15,0,176,178,5,31,0,0,177,176,1,0,0,0,177,178,1,0,0,0,178,179,1,0,0,
0,179,181,5,4,0,0,180,182,5,31,0,0,181,180,1,0,0,0,181,182,1,0,0,0,182,183,
1,0,0,0,183,192,5,1,0,0,184,189,3,30,15,0,185,186,5,7,0,0,186,188,3,30,15,
0,187,185,1,0,0,0,188,191,1,0,0,0,189,187,1,0,0,0,189,190,1,0,0,0,190,193,
1,0,0,0,191,189,1,0,0,0,192,184,1,0,0,0,192,193,1,0,0,0,193,194,1,0,0,0,
194,195,5,2,0,0,195,198,5,6,0,0,196,199,3,2,1,0,197,199,3,16,8,0,198,196,
1,0,0,0,198,197,1,0,0,0,199,201,1,0,0,0,200,153,1,0,0,0,200,171,1,0,0,0,
201,13,1,0,0,0,202,207,3,24,12,0,203,207,3,26,13,0,204,207,3,28,14,0,205,
207,3,30,15,0,206,202,1,0,0,0,206,203,1,0,0,0,206,204,1,0,0,0,206,205,1,
0,0,0,207,15,1,0,0,0,208,209,6,8,-1,0,209,217,3,8,4,0,210,217,3,14,7,0,211,
217,3,18,9,0,212,213,5,1,0,0,213,214,3,16,8,0,214,215,5,2,0,0,215,217,1,
0,0,0,216,208,1,0,0,0,216,210,1,0,0,0,216,211,1,0,0,0,216,212,1,0,0,0,217,
256,1,0,0,0,218,219,10,13,0,0,219,220,5,18,0,0,220,255,3,16,8,14,221,222,
10,12,0,0,222,223,5,19,0,0,223,255,3,16,8,13,224,225,10,11,0,0,225,226,5,
20,0,0,226,255,3,16,8,12,227,228,10,10,0,0,228,229,5,21,0,0,229,255,3,16,
8,11,230,231,10,9,0,0,231,232,5,22,0,0,232,255,3,16,8,10,233,234,10,8,0,
0,234,235,5,23,0,0,235,255,3,16,8,9,236,237,10,7,0,0,237,238,5,24,0,0,238,
255,3,16,8,8,239,240,10,6,0,0,240,241,5,25,0,0,241,255,3,16,8,7,242,243,
10,5,0,0,243,244,5,26,0,0,244,255,3,16,8,6,245,246,10,4,0,0,246,247,5,27,
0,0,247,255,3,16,8,5,248,249,10,3,0,0,249,250,5,28,0,0,250,255,3,16,8,4,
251,252,10,2,0,0,252,253,5,29,0,0,253,255,3,16,8,3,254,218,1,0,0,0,254,221,
1,0,0,0,254,224,1,0,0,0,254,227,1,0,0,0,254,230,1,0,0,0,254,233,1,0,0,0,
254,236,1,0,0,0,254,239,1,0,0,0,254,242,1,0,0,0,254,245,1,0,0,0,254,248,
1,0,0,0,254,251,1,0,0,0,255,258,1,0,0,0,256,254,1,0,0,0,256,257,1,0,0,0,
257,17,1,0,0,0,258,256,1,0,0,0,259,260,3,30,15,0,260,261,5,5,0,0,261,275,
1,0,0,0,262,263,3,30,15,0,263,264,5,1,0,0,264,269,3,16,8,0,265,266,5,7,0,
0,266,268,3,16,8,0,267,265,1,0,0,0,268,271,1,0,0,0,269,267,1,0,0,0,269,270,
1,0,0,0,270,272,1,0,0,0,271,269,1,0,0,0,272,273,5,2,0,0,273,275,1,0,0,0,
274,259,1,0,0,0,274,262,1,0,0,0,275,19,1,0,0,0,276,287,3,22,11,0,277,279,
5,31,0,0,278,277,1,0,0,0,278,279,1,0,0,0,279,280,1,0,0,0,280,282,5,20,0,
0,281,283,5,31,0,0,282,281,1,0,0,0,282,283,1,0,0,0,283,284,1,0,0,0,284,286,
3,22,11,0,285,278,1,0,0,0,286,289,1,0,0,0,287,285,1,0,0,0,287,288,1,0,0,
0,288,21,1,0,0,0,289,287,1,0,0,0,290,294,3,24,12,0,291,294,3,26,13,0,292,
294,3,30,15,0,293,290,1,0,0,0,293,291,1,0,0,0,293,292,1,0,0,0,294,23,1,0,
0,0,295,296,5,15,0,0,296,25,1,0,0,0,297,298,5,14,0,0,298,27,1,0,0,0,299,
301,5,12,0,0,300,302,5,31,0,0,301,300,1,0,0,0,301,302,1,0,0,0,302,326,1,
0,0,0,303,306,3,14,7,0,304,306,3,16,8,0,305,303,1,0,0,0,305,304,1,0,0,0,
306,308,1,0,0,0,307,309,5,31,0,0,308,307,1,0,0,0,308,309,1,0,0,0,309,323,
1,0,0,0,310,312,5,7,0,0,311,313,5,31,0,0,312,311,1,0,0,0,312,313,1,0,0,0,
313,316,1,0,0,0,314,317,3,14,7,0,315,317,3,16,8,0,316,314,1,0,0,0,316,315,
1,0,0,0,317,319,1,0,0,0,318,320,5,31,0,0,319,318,1,0,0,0,319,320,1,0,0,0,
320,322,1,0,0,0,321,310,1,0,0,0,322,325,1,0,0,0,323,321,1,0,0,0,323,324,
1,0,0,0,324,327,1,0,0,0,325,323,1,0,0,0,326,305,1,0,0,0,326,327,1,0,0,0,
327,328,1,0,0,0,328,329,5,13,0,0,329,29,1,0,0,0,330,331,5,17,0,0,331,31,
1,0,0,0,52,34,38,48,54,60,64,68,74,78,82,88,92,96,100,108,111,117,119,127,
132,142,147,151,155,159,163,169,173,177,181,189,192,198,200,206,216,254,
256,269,274,278,282,287,293,301,305,308,312,316,319,323,326];


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
                         "primarydata", "expr", "functionCall", "concatExpr", 
                         "concatPart", "number", "string", "array", "id" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = biesCParser.ruleNames;
        this.literalNames = biesCParser.literalNames;
        this.symbolicNames = biesCParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 8:
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
	        this.state = 38;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 196616) !== 0)) {
	            this.state = 32;
	            this.statement();
	            this.state = 34;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===30) {
	                this.state = 33;
	                this.match(biesCParser.NL);
	            }

	            this.state = 40;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 41;
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
	        this.state = 48;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 43;
	            this.printInstr();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 44;
	            this.simpleLetInstr();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 45;
	            this.anonymousLetFunction();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 46;
	            this.functionCall();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 47;
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
	        this.state = 50;
	        this.match(biesCParser.PRINT);
	        this.state = 51;
	        this.match(biesCParser.T__0);
	        this.state = 54;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 52;
	            this.primarydata();
	            break;

	        case 2:
	            this.state = 53;
	            this.expr(0);
	            break;

	        }
	        this.state = 56;
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
	        this.state = 58;
	        this.match(biesCParser.T__2);
	        this.state = 60;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===31) {
	            this.state = 59;
	            this.match(biesCParser.WS);
	        }

	        this.state = 62;
	        this.id();
	        this.state = 64;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===31) {
	            this.state = 63;
	            this.match(biesCParser.WS);
	        }

	        this.state = 66;
	        this.match(biesCParser.T__3);
	        this.state = 68;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===31) {
	            this.state = 67;
	            this.match(biesCParser.WS);
	        }

	        this.state = 70;
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
	        this.state = 119;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new LambdaNoParams_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 72;
	            this.match(biesCParser.T__2);
	            this.state = 74;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===31) {
	                this.state = 73;
	                this.match(biesCParser.WS);
	            }

	            this.state = 76;
	            this.id();
	            this.state = 78;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===31) {
	                this.state = 77;
	                this.match(biesCParser.WS);
	            }

	            this.state = 80;
	            this.match(biesCParser.T__3);
	            this.state = 82;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===31) {
	                this.state = 81;
	                this.match(biesCParser.WS);
	            }

	            this.state = 84;
	            this.match(biesCParser.T__4);
	            this.state = 85;
	            this.match(biesCParser.T__5);
	            this.state = 88;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 86;
	                this.statement();
	                break;

	            case 2:
	                this.state = 87;
	                this.expr(0);
	                break;

	            }
	            break;

	        case 2:
	            localctx = new LambdaWithParams_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 90;
	            this.match(biesCParser.T__2);
	            this.state = 92;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===31) {
	                this.state = 91;
	                this.match(biesCParser.WS);
	            }

	            this.state = 94;
	            this.id();
	            this.state = 96;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===31) {
	                this.state = 95;
	                this.match(biesCParser.WS);
	            }

	            this.state = 98;
	            this.match(biesCParser.T__3);
	            this.state = 100;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===31) {
	                this.state = 99;
	                this.match(biesCParser.WS);
	            }

	            this.state = 102;
	            this.match(biesCParser.T__0);
	            this.state = 111;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===17) {
	                this.state = 103;
	                this.id();
	                this.state = 108;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===7) {
	                    this.state = 104;
	                    this.match(biesCParser.T__6);
	                    this.state = 105;
	                    this.id();
	                    this.state = 110;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	            }

	            this.state = 113;
	            this.match(biesCParser.T__1);
	            this.state = 114;
	            this.match(biesCParser.T__5);
	            this.state = 117;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 115;
	                this.statement();
	                break;

	            case 2:
	                this.state = 116;
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
	        this.state = 121;
	        this.match(biesCParser.T__2);
	        this.state = 122;
	        this.match(biesCParser.T__7);
	        this.state = 132;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===11) {
	            this.state = 123;
	            this.declaration();
	            this.state = 127;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===30 || _la===31) {
	                this.state = 124;
	                _la = this._input.LA(1);
	                if(!(_la===30 || _la===31)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 129;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 134;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 135;
	        this.match(biesCParser.T__8);
	        this.state = 136;
	        this.match(biesCParser.T__9);
	        this.state = 151;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
	        if(la_===1) {
	            this.state = 137;
	            this.match(biesCParser.T__7);
	            this.state = 147;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) === 0 && ((1 << _la) & 196616) !== 0)) {
	                this.state = 138;
	                this.statement();
	                this.state = 142;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===30 || _la===31) {
	                    this.state = 139;
	                    _la = this._input.LA(1);
	                    if(!(_la===30 || _la===31)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 144;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	                this.state = 149;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 150;
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
	    var _la = 0;
	    try {
	        this.state = 200;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,33,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new Const_NoParams_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 153;
	            this.match(biesCParser.T__10);
	            this.state = 155;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===31) {
	                this.state = 154;
	                this.match(biesCParser.WS);
	            }

	            this.state = 157;
	            this.id();
	            this.state = 159;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===31) {
	                this.state = 158;
	                this.match(biesCParser.WS);
	            }

	            this.state = 161;
	            this.match(biesCParser.T__3);
	            this.state = 163;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===31) {
	                this.state = 162;
	                this.match(biesCParser.WS);
	            }

	            this.state = 165;
	            this.match(biesCParser.T__4);
	            this.state = 166;
	            this.match(biesCParser.T__5);
	            this.state = 169;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,26,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 167;
	                this.statement();
	                break;

	            case 2:
	                this.state = 168;
	                this.expr(0);
	                break;

	            }
	            break;

	        case 2:
	            localctx = new Const_WithParams_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 171;
	            this.match(biesCParser.T__10);
	            this.state = 173;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===31) {
	                this.state = 172;
	                this.match(biesCParser.WS);
	            }

	            this.state = 175;
	            this.id();
	            this.state = 177;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===31) {
	                this.state = 176;
	                this.match(biesCParser.WS);
	            }

	            this.state = 179;
	            this.match(biesCParser.T__3);
	            this.state = 181;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===31) {
	                this.state = 180;
	                this.match(biesCParser.WS);
	            }

	            this.state = 183;
	            this.match(biesCParser.T__0);
	            this.state = 192;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===17) {
	                this.state = 184;
	                this.id();
	                this.state = 189;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===7) {
	                    this.state = 185;
	                    this.match(biesCParser.T__6);
	                    this.state = 186;
	                    this.id();
	                    this.state = 191;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	            }

	            this.state = 194;
	            this.match(biesCParser.T__1);
	            this.state = 195;
	            this.match(biesCParser.T__5);
	            this.state = 198;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,32,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 196;
	                this.statement();
	                break;

	            case 2:
	                this.state = 197;
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
	    this.enterRule(localctx, 14, biesCParser.RULE_primarydata);
	    try {
	        this.state = 206;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 15:
	            localctx = new Number_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 202;
	            this.number();
	            break;
	        case 14:
	            localctx = new String_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 203;
	            this.string();
	            break;
	        case 12:
	            localctx = new Array_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 204;
	            this.array();
	            break;
	        case 17:
	            localctx = new Id_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 205;
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
	    const _startState = 16;
	    this.enterRecursionRule(localctx, 16, biesCParser.RULE_expr, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 216;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,35,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new AnonymousFunctionExpr_LabelContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 209;
	            this.anonymousLetFunction();
	            break;

	        case 2:
	            localctx = new PrimaryData_LabelContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 210;
	            this.primarydata();
	            break;

	        case 3:
	            localctx = new FunctionCallExpr_LabelContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 211;
	            this.functionCall();
	            break;

	        case 4:
	            localctx = new Parens_LabelContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 212;
	            this.match(biesCParser.T__0);
	            this.state = 213;
	            this.expr(0);
	            this.state = 214;
	            this.match(biesCParser.T__1);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 256;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,37,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 254;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,36,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new Mul_LabelContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expr);
	                    this.state = 218;
	                    if (!( this.precpred(this._ctx, 13))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
	                    }
	                    this.state = 219;
	                    this.match(biesCParser.MULT);
	                    this.state = 220;
	                    this.expr(14);
	                    break;

	                case 2:
	                    localctx = new Div_LabelContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expr);
	                    this.state = 221;
	                    if (!( this.precpred(this._ctx, 12))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
	                    }
	                    this.state = 222;
	                    this.match(biesCParser.DIV);
	                    this.state = 223;
	                    this.expr(13);
	                    break;

	                case 3:
	                    localctx = new Add_LabelContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expr);
	                    this.state = 224;
	                    if (!( this.precpred(this._ctx, 11))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
	                    }
	                    this.state = 225;
	                    this.match(biesCParser.ADD);
	                    this.state = 226;
	                    this.expr(12);
	                    break;

	                case 4:
	                    localctx = new Sub_LabelContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expr);
	                    this.state = 227;
	                    if (!( this.precpred(this._ctx, 10))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
	                    }
	                    this.state = 228;
	                    this.match(biesCParser.SUB);
	                    this.state = 229;
	                    this.expr(11);
	                    break;

	                case 5:
	                    localctx = new And_LabelContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expr);
	                    this.state = 230;
	                    if (!( this.precpred(this._ctx, 9))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
	                    }
	                    this.state = 231;
	                    this.match(biesCParser.AND);
	                    this.state = 232;
	                    this.expr(10);
	                    break;

	                case 6:
	                    localctx = new Or_LabelContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expr);
	                    this.state = 233;
	                    if (!( this.precpred(this._ctx, 8))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                    }
	                    this.state = 234;
	                    this.match(biesCParser.OR);
	                    this.state = 235;
	                    this.expr(9);
	                    break;

	                case 7:
	                    localctx = new Eq_LabelContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expr);
	                    this.state = 236;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 237;
	                    this.match(biesCParser.EQ);
	                    this.state = 238;
	                    this.expr(8);
	                    break;

	                case 8:
	                    localctx = new Neq_LabelContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expr);
	                    this.state = 239;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 240;
	                    this.match(biesCParser.NEQ);
	                    this.state = 241;
	                    this.expr(7);
	                    break;

	                case 9:
	                    localctx = new Lt_LabelContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expr);
	                    this.state = 242;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 243;
	                    this.match(biesCParser.LT);
	                    this.state = 244;
	                    this.expr(6);
	                    break;

	                case 10:
	                    localctx = new Gt_LabelContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expr);
	                    this.state = 245;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 246;
	                    this.match(biesCParser.GT);
	                    this.state = 247;
	                    this.expr(5);
	                    break;

	                case 11:
	                    localctx = new Le_LabelContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expr);
	                    this.state = 248;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 249;
	                    this.match(biesCParser.LE);
	                    this.state = 250;
	                    this.expr(4);
	                    break;

	                case 12:
	                    localctx = new Ge_LabelContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expr);
	                    this.state = 251;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 252;
	                    this.match(biesCParser.GE);
	                    this.state = 253;
	                    this.expr(3);
	                    break;

	                } 
	            }
	            this.state = 258;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,37,this._ctx);
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
	    this.enterRule(localctx, 18, biesCParser.RULE_functionCall);
	    var _la = 0;
	    try {
	        this.state = 274;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,39,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new FunctionCallNoParams_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 259;
	            this.id();
	            this.state = 260;
	            this.match(biesCParser.T__4);
	            break;

	        case 2:
	            localctx = new FunctionCallWithParams_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 262;
	            this.id();
	            this.state = 263;
	            this.match(biesCParser.T__0);
	            this.state = 264;
	            this.expr(0);
	            this.state = 269;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===7) {
	                this.state = 265;
	                this.match(biesCParser.T__6);
	                this.state = 266;
	                this.expr(0);
	                this.state = 271;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 272;
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
	    this.enterRule(localctx, 20, biesCParser.RULE_concatExpr);
	    var _la = 0;
	    try {
	        localctx = new Concat_LabelContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 276;
	        this.concatPart();
	        this.state = 287;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===20 || _la===31) {
	            this.state = 278;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===31) {
	                this.state = 277;
	                this.match(biesCParser.WS);
	            }

	            this.state = 280;
	            this.match(biesCParser.ADD);
	            this.state = 282;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===31) {
	                this.state = 281;
	                this.match(biesCParser.WS);
	            }

	            this.state = 284;
	            this.concatPart();
	            this.state = 289;
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
	    this.enterRule(localctx, 22, biesCParser.RULE_concatPart);
	    try {
	        this.state = 293;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 15:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 290;
	            this.number();
	            break;
	        case 14:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 291;
	            this.string();
	            break;
	        case 17:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 292;
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
	    this.enterRule(localctx, 24, biesCParser.RULE_number);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 295;
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
	        this.state = 297;
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
	        this.state = 299;
	        this.match(biesCParser.T__11);
	        this.state = 301;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===31) {
	            this.state = 300;
	            this.match(biesCParser.WS);
	        }

	        this.state = 326;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 184330) !== 0)) {
	            this.state = 305;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,45,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 303;
	                this.primarydata();
	                break;

	            case 2:
	                this.state = 304;
	                this.expr(0);
	                break;

	            }
	            this.state = 308;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===31) {
	                this.state = 307;
	                this.match(biesCParser.WS);
	            }

	            this.state = 323;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===7) {
	                this.state = 310;
	                this.match(biesCParser.T__6);
	                this.state = 312;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===31) {
	                    this.state = 311;
	                    this.match(biesCParser.WS);
	                }

	                this.state = 316;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,48,this._ctx);
	                switch(la_) {
	                case 1:
	                    this.state = 314;
	                    this.primarydata();
	                    break;

	                case 2:
	                    this.state = 315;
	                    this.expr(0);
	                    break;

	                }
	                this.state = 319;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===31) {
	                    this.state = 318;
	                    this.match(biesCParser.WS);
	                }

	                this.state = 325;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 328;
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
	        this.state = 330;
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
biesCParser.RULE_primarydata = 7;
biesCParser.RULE_expr = 8;
biesCParser.RULE_functionCall = 9;
biesCParser.RULE_concatExpr = 10;
biesCParser.RULE_concatPart = 11;
biesCParser.RULE_number = 12;
biesCParser.RULE_string = 13;
biesCParser.RULE_array = 14;
biesCParser.RULE_id = 15;

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


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class Const_WithParams_LabelContext extends DeclarationContext {

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
	        return visitor.visitConst_WithParams_Label(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

biesCParser.Const_WithParams_LabelContext = Const_WithParams_LabelContext;

class Const_NoParams_LabelContext extends DeclarationContext {

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
	        return visitor.visitConst_NoParams_Label(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

biesCParser.Const_NoParams_LabelContext = Const_NoParams_LabelContext;

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
biesCParser.PrimarydataContext = PrimarydataContext; 
biesCParser.ExprContext = ExprContext; 
biesCParser.FunctionCallContext = FunctionCallContext; 
biesCParser.ConcatExprContext = ConcatExprContext; 
biesCParser.ConcatPartContext = ConcatPartContext; 
biesCParser.NumberContext = NumberContext; 
biesCParser.StringContext = StringContext; 
biesCParser.ArrayContext = ArrayContext; 
biesCParser.IdContext = IdContext; 
