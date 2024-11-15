// Generated from ./grammar/biesC.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import biesCVisitor from './biesCVisitor.js';

const serializedATN = [4,1,42,335,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,1,0,1,0,3,0,33,8,0,5,0,35,8,0,10,0,12,0,38,9,0,1,0,1,
0,1,1,1,1,1,1,1,1,1,1,3,1,47,8,1,1,2,1,2,1,2,1,2,3,2,53,8,2,1,2,1,2,1,3,
1,3,3,3,59,8,3,1,3,1,3,3,3,63,8,3,1,3,1,3,3,3,67,8,3,1,3,1,3,1,4,1,4,3,4,
73,8,4,1,4,1,4,3,4,77,8,4,1,4,1,4,3,4,81,8,4,1,4,1,4,1,4,1,4,3,4,87,8,4,
1,4,1,4,3,4,91,8,4,1,4,1,4,3,4,95,8,4,1,4,1,4,3,4,99,8,4,1,4,1,4,1,4,1,4,
5,4,105,8,4,10,4,12,4,108,9,4,3,4,110,8,4,1,4,1,4,1,4,1,4,3,4,116,8,4,3,
4,118,8,4,1,5,1,5,1,5,1,5,5,5,124,8,5,10,5,12,5,127,9,5,5,5,129,8,5,10,5,
12,5,132,9,5,1,5,1,5,1,5,1,5,1,5,5,5,139,8,5,10,5,12,5,142,9,5,5,5,144,8,
5,10,5,12,5,147,9,5,1,5,3,5,150,8,5,1,6,1,6,3,6,154,8,6,1,6,1,6,3,6,158,
8,6,1,6,1,6,3,6,162,8,6,1,6,1,6,1,6,1,6,3,6,168,8,6,1,6,1,6,3,6,172,8,6,
1,6,1,6,3,6,176,8,6,1,6,1,6,3,6,180,8,6,1,6,1,6,1,6,1,6,5,6,186,8,6,10,6,
12,6,189,9,6,3,6,191,8,6,1,6,1,6,1,6,1,6,3,6,197,8,6,3,6,199,8,6,1,7,1,7,
1,7,1,7,3,7,205,8,7,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,3,8,215,8,8,1,8,1,8,
1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,
1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,5,8,253,
8,8,10,8,12,8,256,9,8,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,5,9,266,8,9,10,9,12,
9,269,9,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,5,9,278,8,9,10,9,12,9,281,9,9,1,9,
1,9,3,9,285,8,9,1,10,1,10,1,11,1,11,1,12,1,12,3,12,293,8,12,1,12,1,12,3,
12,297,8,12,1,12,3,12,300,8,12,1,12,1,12,3,12,304,8,12,1,12,1,12,3,12,308,
8,12,1,12,3,12,311,8,12,5,12,313,8,12,10,12,12,12,316,9,12,3,12,318,8,12,
1,12,1,12,1,13,1,13,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,3,14,333,
8,14,1,14,0,1,16,15,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,0,1,1,0,39,40,
394,0,36,1,0,0,0,2,46,1,0,0,0,4,48,1,0,0,0,6,56,1,0,0,0,8,117,1,0,0,0,10,
119,1,0,0,0,12,198,1,0,0,0,14,204,1,0,0,0,16,214,1,0,0,0,18,284,1,0,0,0,
20,286,1,0,0,0,22,288,1,0,0,0,24,290,1,0,0,0,26,321,1,0,0,0,28,332,1,0,0,
0,30,32,3,2,1,0,31,33,5,39,0,0,32,31,1,0,0,0,32,33,1,0,0,0,33,35,1,0,0,0,
34,30,1,0,0,0,35,38,1,0,0,0,36,34,1,0,0,0,36,37,1,0,0,0,37,39,1,0,0,0,38,
36,1,0,0,0,39,40,5,0,0,1,40,1,1,0,0,0,41,47,3,4,2,0,42,47,3,6,3,0,43,47,
3,8,4,0,44,47,3,18,9,0,45,47,3,10,5,0,46,41,1,0,0,0,46,42,1,0,0,0,46,43,
1,0,0,0,46,44,1,0,0,0,46,45,1,0,0,0,47,3,1,0,0,0,48,49,5,25,0,0,49,52,5,
1,0,0,50,53,3,14,7,0,51,53,3,16,8,0,52,50,1,0,0,0,52,51,1,0,0,0,53,54,1,
0,0,0,54,55,5,2,0,0,55,5,1,0,0,0,56,58,5,3,0,0,57,59,5,40,0,0,58,57,1,0,
0,0,58,59,1,0,0,0,59,60,1,0,0,0,60,62,3,26,13,0,61,63,5,40,0,0,62,61,1,0,
0,0,62,63,1,0,0,0,63,64,1,0,0,0,64,66,5,4,0,0,65,67,5,40,0,0,66,65,1,0,0,
0,66,67,1,0,0,0,67,68,1,0,0,0,68,69,3,16,8,0,69,7,1,0,0,0,70,72,5,3,0,0,
71,73,5,40,0,0,72,71,1,0,0,0,72,73,1,0,0,0,73,74,1,0,0,0,74,76,3,26,13,0,
75,77,5,40,0,0,76,75,1,0,0,0,76,77,1,0,0,0,77,78,1,0,0,0,78,80,5,4,0,0,79,
81,5,40,0,0,80,79,1,0,0,0,80,81,1,0,0,0,81,82,1,0,0,0,82,83,5,5,0,0,83,86,
5,6,0,0,84,87,3,2,1,0,85,87,3,16,8,0,86,84,1,0,0,0,86,85,1,0,0,0,87,118,
1,0,0,0,88,90,5,3,0,0,89,91,5,40,0,0,90,89,1,0,0,0,90,91,1,0,0,0,91,92,1,
0,0,0,92,94,3,26,13,0,93,95,5,40,0,0,94,93,1,0,0,0,94,95,1,0,0,0,95,96,1,
0,0,0,96,98,5,4,0,0,97,99,5,40,0,0,98,97,1,0,0,0,98,99,1,0,0,0,99,100,1,
0,0,0,100,109,5,1,0,0,101,106,3,26,13,0,102,103,5,7,0,0,103,105,3,26,13,
0,104,102,1,0,0,0,105,108,1,0,0,0,106,104,1,0,0,0,106,107,1,0,0,0,107,110,
1,0,0,0,108,106,1,0,0,0,109,101,1,0,0,0,109,110,1,0,0,0,110,111,1,0,0,0,
111,112,5,2,0,0,112,115,5,6,0,0,113,116,3,2,1,0,114,116,3,16,8,0,115,113,
1,0,0,0,115,114,1,0,0,0,116,118,1,0,0,0,117,70,1,0,0,0,117,88,1,0,0,0,118,
9,1,0,0,0,119,120,5,3,0,0,120,130,5,8,0,0,121,125,3,12,6,0,122,124,7,0,0,
0,123,122,1,0,0,0,124,127,1,0,0,0,125,123,1,0,0,0,125,126,1,0,0,0,126,129,
1,0,0,0,127,125,1,0,0,0,128,121,1,0,0,0,129,132,1,0,0,0,130,128,1,0,0,0,
130,131,1,0,0,0,131,133,1,0,0,0,132,130,1,0,0,0,133,134,5,9,0,0,134,149,
5,10,0,0,135,145,5,8,0,0,136,140,3,2,1,0,137,139,7,0,0,0,138,137,1,0,0,0,
139,142,1,0,0,0,140,138,1,0,0,0,140,141,1,0,0,0,141,144,1,0,0,0,142,140,
1,0,0,0,143,136,1,0,0,0,144,147,1,0,0,0,145,143,1,0,0,0,145,146,1,0,0,0,
146,148,1,0,0,0,147,145,1,0,0,0,148,150,5,9,0,0,149,135,1,0,0,0,149,150,
1,0,0,0,150,11,1,0,0,0,151,153,5,11,0,0,152,154,5,40,0,0,153,152,1,0,0,0,
153,154,1,0,0,0,154,155,1,0,0,0,155,157,3,26,13,0,156,158,5,40,0,0,157,156,
1,0,0,0,157,158,1,0,0,0,158,159,1,0,0,0,159,161,5,4,0,0,160,162,5,40,0,0,
161,160,1,0,0,0,161,162,1,0,0,0,162,163,1,0,0,0,163,164,5,5,0,0,164,167,
5,6,0,0,165,168,3,2,1,0,166,168,3,16,8,0,167,165,1,0,0,0,167,166,1,0,0,0,
168,199,1,0,0,0,169,171,5,11,0,0,170,172,5,40,0,0,171,170,1,0,0,0,171,172,
1,0,0,0,172,173,1,0,0,0,173,175,3,26,13,0,174,176,5,40,0,0,175,174,1,0,0,
0,175,176,1,0,0,0,176,177,1,0,0,0,177,179,5,4,0,0,178,180,5,40,0,0,179,178,
1,0,0,0,179,180,1,0,0,0,180,181,1,0,0,0,181,190,5,1,0,0,182,187,3,26,13,
0,183,184,5,7,0,0,184,186,3,26,13,0,185,183,1,0,0,0,186,189,1,0,0,0,187,
185,1,0,0,0,187,188,1,0,0,0,188,191,1,0,0,0,189,187,1,0,0,0,190,182,1,0,
0,0,190,191,1,0,0,0,191,192,1,0,0,0,192,193,5,2,0,0,193,196,5,6,0,0,194,
197,3,2,1,0,195,197,3,16,8,0,196,194,1,0,0,0,196,195,1,0,0,0,197,199,1,0,
0,0,198,151,1,0,0,0,198,169,1,0,0,0,199,13,1,0,0,0,200,205,3,20,10,0,201,
205,3,22,11,0,202,205,3,24,12,0,203,205,3,26,13,0,204,200,1,0,0,0,204,201,
1,0,0,0,204,202,1,0,0,0,204,203,1,0,0,0,205,15,1,0,0,0,206,207,6,8,-1,0,
207,215,3,8,4,0,208,215,3,14,7,0,209,215,3,18,9,0,210,211,5,1,0,0,211,212,
3,16,8,0,212,213,5,2,0,0,213,215,1,0,0,0,214,206,1,0,0,0,214,208,1,0,0,0,
214,209,1,0,0,0,214,210,1,0,0,0,215,254,1,0,0,0,216,217,10,13,0,0,217,218,
5,27,0,0,218,253,3,16,8,14,219,220,10,12,0,0,220,221,5,28,0,0,221,253,3,
16,8,13,222,223,10,11,0,0,223,224,5,29,0,0,224,253,3,16,8,12,225,226,10,
10,0,0,226,227,5,30,0,0,227,253,3,16,8,11,228,229,10,9,0,0,229,230,5,31,
0,0,230,253,3,16,8,10,231,232,10,8,0,0,232,233,5,32,0,0,233,253,3,16,8,9,
234,235,10,7,0,0,235,236,5,33,0,0,236,253,3,16,8,8,237,238,10,6,0,0,238,
239,5,34,0,0,239,253,3,16,8,7,240,241,10,5,0,0,241,242,5,35,0,0,242,253,
3,16,8,6,243,244,10,4,0,0,244,245,5,36,0,0,245,253,3,16,8,5,246,247,10,3,
0,0,247,248,5,37,0,0,248,253,3,16,8,4,249,250,10,2,0,0,250,251,5,38,0,0,
251,253,3,16,8,3,252,216,1,0,0,0,252,219,1,0,0,0,252,222,1,0,0,0,252,225,
1,0,0,0,252,228,1,0,0,0,252,231,1,0,0,0,252,234,1,0,0,0,252,237,1,0,0,0,
252,240,1,0,0,0,252,243,1,0,0,0,252,246,1,0,0,0,252,249,1,0,0,0,253,256,
1,0,0,0,254,252,1,0,0,0,254,255,1,0,0,0,255,17,1,0,0,0,256,254,1,0,0,0,257,
258,3,26,13,0,258,259,5,5,0,0,259,285,1,0,0,0,260,261,3,26,13,0,261,262,
5,1,0,0,262,267,3,16,8,0,263,264,5,7,0,0,264,266,3,16,8,0,265,263,1,0,0,
0,266,269,1,0,0,0,267,265,1,0,0,0,267,268,1,0,0,0,268,270,1,0,0,0,269,267,
1,0,0,0,270,271,5,2,0,0,271,285,1,0,0,0,272,273,3,28,14,0,273,274,5,1,0,
0,274,279,3,16,8,0,275,276,5,7,0,0,276,278,3,16,8,0,277,275,1,0,0,0,278,
281,1,0,0,0,279,277,1,0,0,0,279,280,1,0,0,0,280,282,1,0,0,0,281,279,1,0,
0,0,282,283,5,2,0,0,283,285,1,0,0,0,284,257,1,0,0,0,284,260,1,0,0,0,284,
272,1,0,0,0,285,19,1,0,0,0,286,287,5,24,0,0,287,21,1,0,0,0,288,289,5,23,
0,0,289,23,1,0,0,0,290,292,5,12,0,0,291,293,5,40,0,0,292,291,1,0,0,0,292,
293,1,0,0,0,293,317,1,0,0,0,294,297,3,14,7,0,295,297,3,16,8,0,296,294,1,
0,0,0,296,295,1,0,0,0,297,299,1,0,0,0,298,300,5,40,0,0,299,298,1,0,0,0,299,
300,1,0,0,0,300,314,1,0,0,0,301,303,5,7,0,0,302,304,5,40,0,0,303,302,1,0,
0,0,303,304,1,0,0,0,304,307,1,0,0,0,305,308,3,14,7,0,306,308,3,16,8,0,307,
305,1,0,0,0,307,306,1,0,0,0,308,310,1,0,0,0,309,311,5,40,0,0,310,309,1,0,
0,0,310,311,1,0,0,0,311,313,1,0,0,0,312,301,1,0,0,0,313,316,1,0,0,0,314,
312,1,0,0,0,314,315,1,0,0,0,315,318,1,0,0,0,316,314,1,0,0,0,317,296,1,0,
0,0,317,318,1,0,0,0,318,319,1,0,0,0,319,320,5,13,0,0,320,25,1,0,0,0,321,
322,5,26,0,0,322,27,1,0,0,0,323,333,5,14,0,0,324,333,5,15,0,0,325,333,5,
16,0,0,326,333,5,17,0,0,327,333,5,18,0,0,328,333,5,19,0,0,329,333,5,20,0,
0,330,333,5,21,0,0,331,333,5,22,0,0,332,323,1,0,0,0,332,324,1,0,0,0,332,
325,1,0,0,0,332,326,1,0,0,0,332,327,1,0,0,0,332,328,1,0,0,0,332,329,1,0,
0,0,332,330,1,0,0,0,332,331,1,0,0,0,333,29,1,0,0,0,50,32,36,46,52,58,62,
66,72,76,80,86,90,94,98,106,109,115,117,125,130,140,145,149,153,157,161,
167,171,175,179,187,190,196,198,204,214,252,254,267,279,284,292,296,299,
303,307,310,314,317,332];


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
                            "'/'", "'+'", "'-'", "'&&'", "'||'", "'=='", 
                            "'!='", "'<'", "'>'", "'<='", "'>='" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, "BOOL", 
                             "TRUE", "FALSE", "NULL", "INPUT", "INT", "STR", 
                             "LIST", "LEN", "STRING", "NUMBER", "PRINT", 
                             "ID", "MULT", "DIV", "ADD", "SUB", "AND", "OR", 
                             "EQ", "NEQ", "LT", "GT", "LE", "GE", "NL", 
                             "WS", "COMMENT", "MULTILINE_COMMENT" ];
    static ruleNames = [ "program", "statement", "printInstr", "simpleLetInstr", 
                         "anonymousLetFunction", "letInExpr", "declaration", 
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
	        this.state = 36;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 109035528) !== 0)) {
	            this.state = 30;
	            this.statement();
	            this.state = 32;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===39) {
	                this.state = 31;
	                this.match(biesCParser.NL);
	            }

	            this.state = 38;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 39;
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
	        this.state = 46;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 41;
	            this.printInstr();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 42;
	            this.simpleLetInstr();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 43;
	            this.anonymousLetFunction();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 44;
	            this.functionCall();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 45;
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
	        this.state = 48;
	        this.match(biesCParser.PRINT);
	        this.state = 49;
	        this.match(biesCParser.T__0);
	        this.state = 52;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 50;
	            this.primarydata();
	            break;

	        case 2:
	            this.state = 51;
	            this.expr(0);
	            break;

	        }
	        this.state = 54;
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
	        this.state = 56;
	        this.match(biesCParser.T__2);
	        this.state = 58;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===40) {
	            this.state = 57;
	            this.match(biesCParser.WS);
	        }

	        this.state = 60;
	        this.id();
	        this.state = 62;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===40) {
	            this.state = 61;
	            this.match(biesCParser.WS);
	        }

	        this.state = 64;
	        this.match(biesCParser.T__3);
	        this.state = 66;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===40) {
	            this.state = 65;
	            this.match(biesCParser.WS);
	        }

	        this.state = 68;
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
	        this.state = 117;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new LambdaNoParams_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 70;
	            this.match(biesCParser.T__2);
	            this.state = 72;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===40) {
	                this.state = 71;
	                this.match(biesCParser.WS);
	            }

	            this.state = 74;
	            this.id();
	            this.state = 76;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===40) {
	                this.state = 75;
	                this.match(biesCParser.WS);
	            }

	            this.state = 78;
	            this.match(biesCParser.T__3);
	            this.state = 80;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===40) {
	                this.state = 79;
	                this.match(biesCParser.WS);
	            }

	            this.state = 82;
	            this.match(biesCParser.T__4);
	            this.state = 83;
	            this.match(biesCParser.T__5);
	            this.state = 86;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 84;
	                this.statement();
	                break;

	            case 2:
	                this.state = 85;
	                this.expr(0);
	                break;

	            }
	            break;

	        case 2:
	            localctx = new LambdaWithParams_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 88;
	            this.match(biesCParser.T__2);
	            this.state = 90;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===40) {
	                this.state = 89;
	                this.match(biesCParser.WS);
	            }

	            this.state = 92;
	            this.id();
	            this.state = 94;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===40) {
	                this.state = 93;
	                this.match(biesCParser.WS);
	            }

	            this.state = 96;
	            this.match(biesCParser.T__3);
	            this.state = 98;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===40) {
	                this.state = 97;
	                this.match(biesCParser.WS);
	            }

	            this.state = 100;
	            this.match(biesCParser.T__0);
	            this.state = 109;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===26) {
	                this.state = 101;
	                this.id();
	                this.state = 106;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===7) {
	                    this.state = 102;
	                    this.match(biesCParser.T__6);
	                    this.state = 103;
	                    this.id();
	                    this.state = 108;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	            }

	            this.state = 111;
	            this.match(biesCParser.T__1);
	            this.state = 112;
	            this.match(biesCParser.T__5);
	            this.state = 115;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 113;
	                this.statement();
	                break;

	            case 2:
	                this.state = 114;
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
	        this.state = 119;
	        this.match(biesCParser.T__2);
	        this.state = 120;
	        this.match(biesCParser.T__7);
	        this.state = 130;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===11) {
	            this.state = 121;
	            this.declaration();
	            this.state = 125;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===39 || _la===40) {
	                this.state = 122;
	                _la = this._input.LA(1);
	                if(!(_la===39 || _la===40)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 127;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 132;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 133;
	        this.match(biesCParser.T__8);
	        this.state = 134;
	        this.match(biesCParser.T__9);
	        this.state = 149;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
	        if(la_===1) {
	            this.state = 135;
	            this.match(biesCParser.T__7);
	            this.state = 145;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) === 0 && ((1 << _la) & 109035528) !== 0)) {
	                this.state = 136;
	                this.statement();
	                this.state = 140;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===39 || _la===40) {
	                    this.state = 137;
	                    _la = this._input.LA(1);
	                    if(!(_la===39 || _la===40)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 142;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	                this.state = 147;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 148;
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
	        this.state = 198;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,33,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new Const_NoParams_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 151;
	            this.match(biesCParser.T__10);
	            this.state = 153;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===40) {
	                this.state = 152;
	                this.match(biesCParser.WS);
	            }

	            this.state = 155;
	            this.id();
	            this.state = 157;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===40) {
	                this.state = 156;
	                this.match(biesCParser.WS);
	            }

	            this.state = 159;
	            this.match(biesCParser.T__3);
	            this.state = 161;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===40) {
	                this.state = 160;
	                this.match(biesCParser.WS);
	            }

	            this.state = 163;
	            this.match(biesCParser.T__4);
	            this.state = 164;
	            this.match(biesCParser.T__5);
	            this.state = 167;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,26,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 165;
	                this.statement();
	                break;

	            case 2:
	                this.state = 166;
	                this.expr(0);
	                break;

	            }
	            break;

	        case 2:
	            localctx = new Const_WithParams_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 169;
	            this.match(biesCParser.T__10);
	            this.state = 171;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===40) {
	                this.state = 170;
	                this.match(biesCParser.WS);
	            }

	            this.state = 173;
	            this.id();
	            this.state = 175;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===40) {
	                this.state = 174;
	                this.match(biesCParser.WS);
	            }

	            this.state = 177;
	            this.match(biesCParser.T__3);
	            this.state = 179;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===40) {
	                this.state = 178;
	                this.match(biesCParser.WS);
	            }

	            this.state = 181;
	            this.match(biesCParser.T__0);
	            this.state = 190;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===26) {
	                this.state = 182;
	                this.id();
	                this.state = 187;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===7) {
	                    this.state = 183;
	                    this.match(biesCParser.T__6);
	                    this.state = 184;
	                    this.id();
	                    this.state = 189;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	            }

	            this.state = 192;
	            this.match(biesCParser.T__1);
	            this.state = 193;
	            this.match(biesCParser.T__5);
	            this.state = 196;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,32,this._ctx);
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
	        this.state = 204;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 24:
	            localctx = new Number_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 200;
	            this.number();
	            break;
	        case 23:
	            localctx = new String_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 201;
	            this.string();
	            break;
	        case 12:
	            localctx = new Array_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 202;
	            this.array();
	            break;
	        case 26:
	            localctx = new Id_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 203;
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
	        this.state = 214;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,35,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new AnonymousFunctionExpr_LabelContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 207;
	            this.anonymousLetFunction();
	            break;

	        case 2:
	            localctx = new PrimaryData_LabelContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 208;
	            this.primarydata();
	            break;

	        case 3:
	            localctx = new FunctionCallExpr_LabelContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 209;
	            this.functionCall();
	            break;

	        case 4:
	            localctx = new Exp_LabelContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 210;
	            this.match(biesCParser.T__0);
	            this.state = 211;
	            this.expr(0);
	            this.state = 212;
	            this.match(biesCParser.T__1);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 254;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,37,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 252;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,36,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new Mul_LabelContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expr);
	                    this.state = 216;
	                    if (!( this.precpred(this._ctx, 13))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
	                    }
	                    this.state = 217;
	                    this.match(biesCParser.MULT);
	                    this.state = 218;
	                    this.expr(14);
	                    break;

	                case 2:
	                    localctx = new Div_LabelContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expr);
	                    this.state = 219;
	                    if (!( this.precpred(this._ctx, 12))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
	                    }
	                    this.state = 220;
	                    this.match(biesCParser.DIV);
	                    this.state = 221;
	                    this.expr(13);
	                    break;

	                case 3:
	                    localctx = new Add_LabelContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expr);
	                    this.state = 222;
	                    if (!( this.precpred(this._ctx, 11))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
	                    }
	                    this.state = 223;
	                    this.match(biesCParser.ADD);
	                    this.state = 224;
	                    this.expr(12);
	                    break;

	                case 4:
	                    localctx = new Sub_LabelContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expr);
	                    this.state = 225;
	                    if (!( this.precpred(this._ctx, 10))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
	                    }
	                    this.state = 226;
	                    this.match(biesCParser.SUB);
	                    this.state = 227;
	                    this.expr(11);
	                    break;

	                case 5:
	                    localctx = new And_LabelContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expr);
	                    this.state = 228;
	                    if (!( this.precpred(this._ctx, 9))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
	                    }
	                    this.state = 229;
	                    this.match(biesCParser.AND);
	                    this.state = 230;
	                    this.expr(10);
	                    break;

	                case 6:
	                    localctx = new Or_LabelContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expr);
	                    this.state = 231;
	                    if (!( this.precpred(this._ctx, 8))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                    }
	                    this.state = 232;
	                    this.match(biesCParser.OR);
	                    this.state = 233;
	                    this.expr(9);
	                    break;

	                case 7:
	                    localctx = new Eq_LabelContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expr);
	                    this.state = 234;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 235;
	                    this.match(biesCParser.EQ);
	                    this.state = 236;
	                    this.expr(8);
	                    break;

	                case 8:
	                    localctx = new Neq_LabelContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expr);
	                    this.state = 237;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 238;
	                    this.match(biesCParser.NEQ);
	                    this.state = 239;
	                    this.expr(7);
	                    break;

	                case 9:
	                    localctx = new Lt_LabelContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expr);
	                    this.state = 240;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 241;
	                    this.match(biesCParser.LT);
	                    this.state = 242;
	                    this.expr(6);
	                    break;

	                case 10:
	                    localctx = new Gt_LabelContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expr);
	                    this.state = 243;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 244;
	                    this.match(biesCParser.GT);
	                    this.state = 245;
	                    this.expr(5);
	                    break;

	                case 11:
	                    localctx = new Le_LabelContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expr);
	                    this.state = 246;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 247;
	                    this.match(biesCParser.LE);
	                    this.state = 248;
	                    this.expr(4);
	                    break;

	                case 12:
	                    localctx = new Ge_LabelContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expr);
	                    this.state = 249;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 250;
	                    this.match(biesCParser.GE);
	                    this.state = 251;
	                    this.expr(3);
	                    break;

	                } 
	            }
	            this.state = 256;
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
	        this.state = 284;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,40,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new FunctionCallNoParams_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 257;
	            this.id();
	            this.state = 258;
	            this.match(biesCParser.T__4);
	            break;

	        case 2:
	            localctx = new FunctionCallWithParams_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 260;
	            this.id();
	            this.state = 261;
	            this.match(biesCParser.T__0);
	            this.state = 262;
	            this.expr(0);
	            this.state = 267;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===7) {
	                this.state = 263;
	                this.match(biesCParser.T__6);
	                this.state = 264;
	                this.expr(0);
	                this.state = 269;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 270;
	            this.match(biesCParser.T__1);
	            break;

	        case 3:
	            localctx = new PredifinedFunctionCall_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 272;
	            this.predSymbols();
	            this.state = 273;
	            this.match(biesCParser.T__0);
	            this.state = 274;
	            this.expr(0);
	            this.state = 279;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===7) {
	                this.state = 275;
	                this.match(biesCParser.T__6);
	                this.state = 276;
	                this.expr(0);
	                this.state = 281;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 282;
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
	    this.enterRule(localctx, 20, biesCParser.RULE_number);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 286;
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
	    this.enterRule(localctx, 22, biesCParser.RULE_string);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 288;
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
	    this.enterRule(localctx, 24, biesCParser.RULE_array);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 290;
	        this.match(biesCParser.T__11);
	        this.state = 292;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===40) {
	            this.state = 291;
	            this.match(biesCParser.WS);
	        }

	        this.state = 317;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 100651018) !== 0)) {
	            this.state = 296;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,42,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 294;
	                this.primarydata();
	                break;

	            case 2:
	                this.state = 295;
	                this.expr(0);
	                break;

	            }
	            this.state = 299;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===40) {
	                this.state = 298;
	                this.match(biesCParser.WS);
	            }

	            this.state = 314;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===7) {
	                this.state = 301;
	                this.match(biesCParser.T__6);
	                this.state = 303;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===40) {
	                    this.state = 302;
	                    this.match(biesCParser.WS);
	                }

	                this.state = 307;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,45,this._ctx);
	                switch(la_) {
	                case 1:
	                    this.state = 305;
	                    this.primarydata();
	                    break;

	                case 2:
	                    this.state = 306;
	                    this.expr(0);
	                    break;

	                }
	                this.state = 310;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===40) {
	                    this.state = 309;
	                    this.match(biesCParser.WS);
	                }

	                this.state = 316;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 319;
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
	    this.enterRule(localctx, 26, biesCParser.RULE_id);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 321;
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
	    this.enterRule(localctx, 28, biesCParser.RULE_predSymbols);
	    try {
	        this.state = 332;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 14:
	            localctx = new Bool_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 323;
	            this.match(biesCParser.BOOL);
	            break;
	        case 15:
	            localctx = new True_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 324;
	            this.match(biesCParser.TRUE);
	            break;
	        case 16:
	            localctx = new False_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 325;
	            this.match(biesCParser.FALSE);
	            break;
	        case 17:
	            localctx = new Null_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 326;
	            this.match(biesCParser.NULL);
	            break;
	        case 18:
	            localctx = new Input_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 5);
	            this.state = 327;
	            this.match(biesCParser.INPUT);
	            break;
	        case 19:
	            localctx = new Int_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 6);
	            this.state = 328;
	            this.match(biesCParser.INT);
	            break;
	        case 20:
	            localctx = new Str_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 7);
	            this.state = 329;
	            this.match(biesCParser.STR);
	            break;
	        case 21:
	            localctx = new List_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 8);
	            this.state = 330;
	            this.match(biesCParser.LIST);
	            break;
	        case 22:
	            localctx = new Len_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 9);
	            this.state = 331;
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
biesCParser.AND = 31;
biesCParser.OR = 32;
biesCParser.EQ = 33;
biesCParser.NEQ = 34;
biesCParser.LT = 35;
biesCParser.GT = 36;
biesCParser.LE = 37;
biesCParser.GE = 38;
biesCParser.NL = 39;
biesCParser.WS = 40;
biesCParser.COMMENT = 41;
biesCParser.MULTILINE_COMMENT = 42;

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
biesCParser.RULE_number = 10;
biesCParser.RULE_string = 11;
biesCParser.RULE_array = 12;
biesCParser.RULE_id = 13;
biesCParser.RULE_predSymbols = 14;

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
biesCParser.PrimarydataContext = PrimarydataContext; 
biesCParser.ExprContext = ExprContext; 
biesCParser.FunctionCallContext = FunctionCallContext; 
biesCParser.NumberContext = NumberContext; 
biesCParser.StringContext = StringContext; 
biesCParser.ArrayContext = ArrayContext; 
biesCParser.IdContext = IdContext; 
biesCParser.PredSymbolsContext = PredSymbolsContext; 
