// Generated from ./grammar/biesC.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import biesCVisitor from './biesCVisitor.js';

const serializedATN = [4,1,29,247,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,1,0,1,0,3,0,31,8,0,5,0,33,8,0,10,0,12,0,36,9,0,1,0,1,0,1,1,1,1,
1,1,1,1,3,1,44,8,1,1,2,1,2,1,2,1,2,3,2,50,8,2,1,2,1,2,1,3,1,3,3,3,56,8,3,
1,3,1,3,3,3,60,8,3,1,3,1,3,3,3,64,8,3,1,3,1,3,1,4,1,4,3,4,70,8,4,1,4,1,4,
3,4,74,8,4,1,4,1,4,3,4,78,8,4,1,4,1,4,1,4,1,4,3,4,84,8,4,1,4,1,4,3,4,88,
8,4,1,4,1,4,3,4,92,8,4,1,4,1,4,3,4,96,8,4,1,4,1,4,1,4,1,4,5,4,102,8,4,10,
4,12,4,105,9,4,3,4,107,8,4,1,4,1,4,1,4,1,4,3,4,113,8,4,3,4,115,8,4,1,5,1,
5,1,5,1,5,3,5,121,8,5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,3,6,131,8,6,1,6,1,
6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,
6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,5,6,169,
8,6,10,6,12,6,172,9,6,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,5,7,182,8,7,10,7,12,
7,185,9,7,1,7,1,7,3,7,189,8,7,1,8,1,8,3,8,193,8,8,1,8,1,8,3,8,197,8,8,1,
8,5,8,200,8,8,10,8,12,8,203,9,8,1,9,1,9,1,9,3,9,208,8,9,1,10,1,10,1,11,1,
11,1,12,1,12,3,12,216,8,12,1,12,1,12,3,12,220,8,12,1,12,3,12,223,8,12,1,
12,1,12,3,12,227,8,12,1,12,1,12,3,12,231,8,12,1,12,3,12,234,8,12,5,12,236,
8,12,10,12,12,12,239,9,12,3,12,241,8,12,1,12,1,12,1,13,1,13,1,13,0,1,12,
14,0,2,4,6,8,10,12,14,16,18,20,22,24,26,0,0,285,0,34,1,0,0,0,2,43,1,0,0,
0,4,45,1,0,0,0,6,53,1,0,0,0,8,114,1,0,0,0,10,120,1,0,0,0,12,130,1,0,0,0,
14,188,1,0,0,0,16,190,1,0,0,0,18,207,1,0,0,0,20,209,1,0,0,0,22,211,1,0,0,
0,24,213,1,0,0,0,26,244,1,0,0,0,28,30,3,2,1,0,29,31,5,26,0,0,30,29,1,0,0,
0,30,31,1,0,0,0,31,33,1,0,0,0,32,28,1,0,0,0,33,36,1,0,0,0,34,32,1,0,0,0,
34,35,1,0,0,0,35,37,1,0,0,0,36,34,1,0,0,0,37,38,5,0,0,1,38,1,1,0,0,0,39,
44,3,4,2,0,40,44,3,6,3,0,41,44,3,8,4,0,42,44,3,14,7,0,43,39,1,0,0,0,43,40,
1,0,0,0,43,41,1,0,0,0,43,42,1,0,0,0,44,3,1,0,0,0,45,46,5,12,0,0,46,49,5,
1,0,0,47,50,3,10,5,0,48,50,3,12,6,0,49,47,1,0,0,0,49,48,1,0,0,0,50,51,1,
0,0,0,51,52,5,2,0,0,52,5,1,0,0,0,53,55,5,3,0,0,54,56,5,27,0,0,55,54,1,0,
0,0,55,56,1,0,0,0,56,57,1,0,0,0,57,59,3,26,13,0,58,60,5,27,0,0,59,58,1,0,
0,0,59,60,1,0,0,0,60,61,1,0,0,0,61,63,5,4,0,0,62,64,5,27,0,0,63,62,1,0,0,
0,63,64,1,0,0,0,64,65,1,0,0,0,65,66,3,12,6,0,66,7,1,0,0,0,67,69,5,3,0,0,
68,70,5,27,0,0,69,68,1,0,0,0,69,70,1,0,0,0,70,71,1,0,0,0,71,73,3,26,13,0,
72,74,5,27,0,0,73,72,1,0,0,0,73,74,1,0,0,0,74,75,1,0,0,0,75,77,5,4,0,0,76,
78,5,27,0,0,77,76,1,0,0,0,77,78,1,0,0,0,78,79,1,0,0,0,79,80,5,5,0,0,80,83,
5,6,0,0,81,84,3,2,1,0,82,84,3,12,6,0,83,81,1,0,0,0,83,82,1,0,0,0,84,115,
1,0,0,0,85,87,5,3,0,0,86,88,5,27,0,0,87,86,1,0,0,0,87,88,1,0,0,0,88,89,1,
0,0,0,89,91,3,26,13,0,90,92,5,27,0,0,91,90,1,0,0,0,91,92,1,0,0,0,92,93,1,
0,0,0,93,95,5,4,0,0,94,96,5,27,0,0,95,94,1,0,0,0,95,96,1,0,0,0,96,97,1,0,
0,0,97,106,5,1,0,0,98,103,3,26,13,0,99,100,5,7,0,0,100,102,3,26,13,0,101,
99,1,0,0,0,102,105,1,0,0,0,103,101,1,0,0,0,103,104,1,0,0,0,104,107,1,0,0,
0,105,103,1,0,0,0,106,98,1,0,0,0,106,107,1,0,0,0,107,108,1,0,0,0,108,109,
5,2,0,0,109,112,5,6,0,0,110,113,3,2,1,0,111,113,3,12,6,0,112,110,1,0,0,0,
112,111,1,0,0,0,113,115,1,0,0,0,114,67,1,0,0,0,114,85,1,0,0,0,115,9,1,0,
0,0,116,121,3,20,10,0,117,121,3,22,11,0,118,121,3,24,12,0,119,121,3,26,13,
0,120,116,1,0,0,0,120,117,1,0,0,0,120,118,1,0,0,0,120,119,1,0,0,0,121,11,
1,0,0,0,122,123,6,6,-1,0,123,131,3,8,4,0,124,131,3,10,5,0,125,131,3,14,7,
0,126,127,5,1,0,0,127,128,3,12,6,0,128,129,5,2,0,0,129,131,1,0,0,0,130,122,
1,0,0,0,130,124,1,0,0,0,130,125,1,0,0,0,130,126,1,0,0,0,131,170,1,0,0,0,
132,133,10,13,0,0,133,134,5,14,0,0,134,169,3,12,6,14,135,136,10,12,0,0,136,
137,5,15,0,0,137,169,3,12,6,13,138,139,10,11,0,0,139,140,5,16,0,0,140,169,
3,12,6,12,141,142,10,10,0,0,142,143,5,17,0,0,143,169,3,12,6,11,144,145,10,
9,0,0,145,146,5,18,0,0,146,169,3,12,6,10,147,148,10,8,0,0,148,149,5,19,0,
0,149,169,3,12,6,9,150,151,10,7,0,0,151,152,5,20,0,0,152,169,3,12,6,8,153,
154,10,6,0,0,154,155,5,21,0,0,155,169,3,12,6,7,156,157,10,5,0,0,157,158,
5,22,0,0,158,169,3,12,6,6,159,160,10,4,0,0,160,161,5,23,0,0,161,169,3,12,
6,5,162,163,10,3,0,0,163,164,5,24,0,0,164,169,3,12,6,4,165,166,10,2,0,0,
166,167,5,25,0,0,167,169,3,12,6,3,168,132,1,0,0,0,168,135,1,0,0,0,168,138,
1,0,0,0,168,141,1,0,0,0,168,144,1,0,0,0,168,147,1,0,0,0,168,150,1,0,0,0,
168,153,1,0,0,0,168,156,1,0,0,0,168,159,1,0,0,0,168,162,1,0,0,0,168,165,
1,0,0,0,169,172,1,0,0,0,170,168,1,0,0,0,170,171,1,0,0,0,171,13,1,0,0,0,172,
170,1,0,0,0,173,174,3,26,13,0,174,175,5,5,0,0,175,189,1,0,0,0,176,177,3,
26,13,0,177,178,5,1,0,0,178,183,3,12,6,0,179,180,5,7,0,0,180,182,3,12,6,
0,181,179,1,0,0,0,182,185,1,0,0,0,183,181,1,0,0,0,183,184,1,0,0,0,184,186,
1,0,0,0,185,183,1,0,0,0,186,187,5,2,0,0,187,189,1,0,0,0,188,173,1,0,0,0,
188,176,1,0,0,0,189,15,1,0,0,0,190,201,3,18,9,0,191,193,5,27,0,0,192,191,
1,0,0,0,192,193,1,0,0,0,193,194,1,0,0,0,194,196,5,16,0,0,195,197,5,27,0,
0,196,195,1,0,0,0,196,197,1,0,0,0,197,198,1,0,0,0,198,200,3,18,9,0,199,192,
1,0,0,0,200,203,1,0,0,0,201,199,1,0,0,0,201,202,1,0,0,0,202,17,1,0,0,0,203,
201,1,0,0,0,204,208,3,20,10,0,205,208,3,22,11,0,206,208,3,26,13,0,207,204,
1,0,0,0,207,205,1,0,0,0,207,206,1,0,0,0,208,19,1,0,0,0,209,210,5,11,0,0,
210,21,1,0,0,0,211,212,5,10,0,0,212,23,1,0,0,0,213,215,5,8,0,0,214,216,5,
27,0,0,215,214,1,0,0,0,215,216,1,0,0,0,216,240,1,0,0,0,217,220,3,10,5,0,
218,220,3,12,6,0,219,217,1,0,0,0,219,218,1,0,0,0,220,222,1,0,0,0,221,223,
5,27,0,0,222,221,1,0,0,0,222,223,1,0,0,0,223,237,1,0,0,0,224,226,5,7,0,0,
225,227,5,27,0,0,226,225,1,0,0,0,226,227,1,0,0,0,227,230,1,0,0,0,228,231,
3,10,5,0,229,231,3,12,6,0,230,228,1,0,0,0,230,229,1,0,0,0,231,233,1,0,0,
0,232,234,5,27,0,0,233,232,1,0,0,0,233,234,1,0,0,0,234,236,1,0,0,0,235,224,
1,0,0,0,236,239,1,0,0,0,237,235,1,0,0,0,237,238,1,0,0,0,238,241,1,0,0,0,
239,237,1,0,0,0,240,219,1,0,0,0,240,241,1,0,0,0,241,242,1,0,0,0,242,243,
5,9,0,0,243,25,1,0,0,0,244,245,5,13,0,0,245,27,1,0,0,0,36,30,34,43,49,55,
59,63,69,73,77,83,87,91,95,103,106,112,114,120,130,168,170,183,188,192,196,
201,207,215,219,222,226,230,233,237,240];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class biesCParser extends antlr4.Parser {

    static grammarFileName = "biesC.g4";
    static literalNames = [ null, "'('", "')'", "'let'", "'='", "'()'", 
                            "'=>'", "','", "'['", "']'", null, null, "'print'", 
                            null, "'*'", "'/'", "'+'", "'-'", "'&&'", "'||'", 
                            "'=='", "'!='", "'<'", "'>'", "'<='", "'>='" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, "STRING", "NUMBER", "PRINT", "ID", 
                             "MULT", "DIV", "ADD", "SUB", "AND", "OR", "EQ", 
                             "NEQ", "LT", "GT", "LE", "GE", "NL", "WS", 
                             "COMMENT", "MULTILINE_COMMENT" ];
    static ruleNames = [ "program", "statement", "printInstr", "simpleLetInstr", 
                         "anonymousLetFunction", "primarydata", "expr", 
                         "functionCall", "concatExpr", "concatPart", "number", 
                         "string", "array", "id" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = biesCParser.ruleNames;
        this.literalNames = biesCParser.literalNames;
        this.symbolicNames = biesCParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 6:
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
	        this.state = 34;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 12296) !== 0)) {
	            this.state = 28;
	            this.statement();
	            this.state = 30;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===26) {
	                this.state = 29;
	                this.match(biesCParser.NL);
	            }

	            this.state = 36;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 37;
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
	        this.state = 43;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 39;
	            this.printInstr();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 40;
	            this.simpleLetInstr();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 41;
	            this.anonymousLetFunction();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 42;
	            this.functionCall();
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
	        this.state = 45;
	        this.match(biesCParser.PRINT);
	        this.state = 46;
	        this.match(biesCParser.T__0);
	        this.state = 49;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 47;
	            this.primarydata();
	            break;

	        case 2:
	            this.state = 48;
	            this.expr(0);
	            break;

	        }
	        this.state = 51;
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
	        this.state = 53;
	        this.match(biesCParser.T__2);
	        this.state = 55;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===27) {
	            this.state = 54;
	            this.match(biesCParser.WS);
	        }

	        this.state = 57;
	        this.id();
	        this.state = 59;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===27) {
	            this.state = 58;
	            this.match(biesCParser.WS);
	        }

	        this.state = 61;
	        this.match(biesCParser.T__3);
	        this.state = 63;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===27) {
	            this.state = 62;
	            this.match(biesCParser.WS);
	        }

	        this.state = 65;
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
	        this.state = 114;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new LambdaNoParams_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 67;
	            this.match(biesCParser.T__2);
	            this.state = 69;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===27) {
	                this.state = 68;
	                this.match(biesCParser.WS);
	            }

	            this.state = 71;
	            this.id();
	            this.state = 73;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===27) {
	                this.state = 72;
	                this.match(biesCParser.WS);
	            }

	            this.state = 75;
	            this.match(biesCParser.T__3);
	            this.state = 77;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===27) {
	                this.state = 76;
	                this.match(biesCParser.WS);
	            }

	            this.state = 79;
	            this.match(biesCParser.T__4);
	            this.state = 80;
	            this.match(biesCParser.T__5);
	            this.state = 83;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 81;
	                this.statement();
	                break;

	            case 2:
	                this.state = 82;
	                this.expr(0);
	                break;

	            }
	            break;

	        case 2:
	            localctx = new LambdaWithParams_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 85;
	            this.match(biesCParser.T__2);
	            this.state = 87;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===27) {
	                this.state = 86;
	                this.match(biesCParser.WS);
	            }

	            this.state = 89;
	            this.id();
	            this.state = 91;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===27) {
	                this.state = 90;
	                this.match(biesCParser.WS);
	            }

	            this.state = 93;
	            this.match(biesCParser.T__3);
	            this.state = 95;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===27) {
	                this.state = 94;
	                this.match(biesCParser.WS);
	            }

	            this.state = 97;
	            this.match(biesCParser.T__0);
	            this.state = 106;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===13) {
	                this.state = 98;
	                this.id();
	                this.state = 103;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===7) {
	                    this.state = 99;
	                    this.match(biesCParser.T__6);
	                    this.state = 100;
	                    this.id();
	                    this.state = 105;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	            }

	            this.state = 108;
	            this.match(biesCParser.T__1);
	            this.state = 109;
	            this.match(biesCParser.T__5);
	            this.state = 112;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 110;
	                this.statement();
	                break;

	            case 2:
	                this.state = 111;
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
	    this.enterRule(localctx, 10, biesCParser.RULE_primarydata);
	    try {
	        this.state = 120;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 11:
	            localctx = new Number_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 116;
	            this.number();
	            break;
	        case 10:
	            localctx = new String_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 117;
	            this.string();
	            break;
	        case 8:
	            localctx = new Array_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 118;
	            this.array();
	            break;
	        case 13:
	            localctx = new Id_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 119;
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
	    const _startState = 12;
	    this.enterRecursionRule(localctx, 12, biesCParser.RULE_expr, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 130;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new AnonymousFunctionExpr_LabelContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 123;
	            this.anonymousLetFunction();
	            break;

	        case 2:
	            localctx = new PrimaryData_LabelContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 124;
	            this.primarydata();
	            break;

	        case 3:
	            localctx = new FunctionCallExpr_LabelContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 125;
	            this.functionCall();
	            break;

	        case 4:
	            localctx = new Parens_LabelContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 126;
	            this.match(biesCParser.T__0);
	            this.state = 127;
	            this.expr(0);
	            this.state = 128;
	            this.match(biesCParser.T__1);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 170;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,21,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 168;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new Mul_LabelContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expr);
	                    this.state = 132;
	                    if (!( this.precpred(this._ctx, 13))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
	                    }
	                    this.state = 133;
	                    this.match(biesCParser.MULT);
	                    this.state = 134;
	                    this.expr(14);
	                    break;

	                case 2:
	                    localctx = new Div_LabelContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expr);
	                    this.state = 135;
	                    if (!( this.precpred(this._ctx, 12))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
	                    }
	                    this.state = 136;
	                    this.match(biesCParser.DIV);
	                    this.state = 137;
	                    this.expr(13);
	                    break;

	                case 3:
	                    localctx = new Add_LabelContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expr);
	                    this.state = 138;
	                    if (!( this.precpred(this._ctx, 11))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
	                    }
	                    this.state = 139;
	                    this.match(biesCParser.ADD);
	                    this.state = 140;
	                    this.expr(12);
	                    break;

	                case 4:
	                    localctx = new Sub_LabelContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expr);
	                    this.state = 141;
	                    if (!( this.precpred(this._ctx, 10))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
	                    }
	                    this.state = 142;
	                    this.match(biesCParser.SUB);
	                    this.state = 143;
	                    this.expr(11);
	                    break;

	                case 5:
	                    localctx = new And_LabelContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expr);
	                    this.state = 144;
	                    if (!( this.precpred(this._ctx, 9))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
	                    }
	                    this.state = 145;
	                    this.match(biesCParser.AND);
	                    this.state = 146;
	                    this.expr(10);
	                    break;

	                case 6:
	                    localctx = new Or_LabelContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expr);
	                    this.state = 147;
	                    if (!( this.precpred(this._ctx, 8))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                    }
	                    this.state = 148;
	                    this.match(biesCParser.OR);
	                    this.state = 149;
	                    this.expr(9);
	                    break;

	                case 7:
	                    localctx = new Eq_LabelContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expr);
	                    this.state = 150;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 151;
	                    this.match(biesCParser.EQ);
	                    this.state = 152;
	                    this.expr(8);
	                    break;

	                case 8:
	                    localctx = new Neq_LabelContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expr);
	                    this.state = 153;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 154;
	                    this.match(biesCParser.NEQ);
	                    this.state = 155;
	                    this.expr(7);
	                    break;

	                case 9:
	                    localctx = new Lt_LabelContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expr);
	                    this.state = 156;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 157;
	                    this.match(biesCParser.LT);
	                    this.state = 158;
	                    this.expr(6);
	                    break;

	                case 10:
	                    localctx = new Gt_LabelContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expr);
	                    this.state = 159;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 160;
	                    this.match(biesCParser.GT);
	                    this.state = 161;
	                    this.expr(5);
	                    break;

	                case 11:
	                    localctx = new Le_LabelContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expr);
	                    this.state = 162;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 163;
	                    this.match(biesCParser.LE);
	                    this.state = 164;
	                    this.expr(4);
	                    break;

	                case 12:
	                    localctx = new Ge_LabelContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, biesCParser.RULE_expr);
	                    this.state = 165;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 166;
	                    this.match(biesCParser.GE);
	                    this.state = 167;
	                    this.expr(3);
	                    break;

	                } 
	            }
	            this.state = 172;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,21,this._ctx);
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
	    this.enterRule(localctx, 14, biesCParser.RULE_functionCall);
	    var _la = 0;
	    try {
	        this.state = 188;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,23,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new FunctionCallNoParams_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 173;
	            this.id();
	            this.state = 174;
	            this.match(biesCParser.T__4);
	            break;

	        case 2:
	            localctx = new FunctionCallWithParams_LabelContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 176;
	            this.id();
	            this.state = 177;
	            this.match(biesCParser.T__0);
	            this.state = 178;
	            this.expr(0);
	            this.state = 183;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===7) {
	                this.state = 179;
	                this.match(biesCParser.T__6);
	                this.state = 180;
	                this.expr(0);
	                this.state = 185;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 186;
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
	    this.enterRule(localctx, 16, biesCParser.RULE_concatExpr);
	    var _la = 0;
	    try {
	        localctx = new Concat_LabelContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 190;
	        this.concatPart();
	        this.state = 201;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===16 || _la===27) {
	            this.state = 192;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===27) {
	                this.state = 191;
	                this.match(biesCParser.WS);
	            }

	            this.state = 194;
	            this.match(biesCParser.ADD);
	            this.state = 196;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===27) {
	                this.state = 195;
	                this.match(biesCParser.WS);
	            }

	            this.state = 198;
	            this.concatPart();
	            this.state = 203;
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
	    this.enterRule(localctx, 18, biesCParser.RULE_concatPart);
	    try {
	        this.state = 207;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 11:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 204;
	            this.number();
	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 205;
	            this.string();
	            break;
	        case 13:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 206;
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
	    this.enterRule(localctx, 20, biesCParser.RULE_number);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 209;
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
	        this.state = 211;
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
	        this.state = 213;
	        this.match(biesCParser.T__7);
	        this.state = 215;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===27) {
	            this.state = 214;
	            this.match(biesCParser.WS);
	        }

	        this.state = 240;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 11530) !== 0)) {
	            this.state = 219;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,29,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 217;
	                this.primarydata();
	                break;

	            case 2:
	                this.state = 218;
	                this.expr(0);
	                break;

	            }
	            this.state = 222;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===27) {
	                this.state = 221;
	                this.match(biesCParser.WS);
	            }

	            this.state = 237;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===7) {
	                this.state = 224;
	                this.match(biesCParser.T__6);
	                this.state = 226;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===27) {
	                    this.state = 225;
	                    this.match(biesCParser.WS);
	                }

	                this.state = 230;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,32,this._ctx);
	                switch(la_) {
	                case 1:
	                    this.state = 228;
	                    this.primarydata();
	                    break;

	                case 2:
	                    this.state = 229;
	                    this.expr(0);
	                    break;

	                }
	                this.state = 233;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===27) {
	                    this.state = 232;
	                    this.match(biesCParser.WS);
	                }

	                this.state = 239;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 242;
	        this.match(biesCParser.T__8);
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
	        this.state = 244;
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
biesCParser.STRING = 10;
biesCParser.NUMBER = 11;
biesCParser.PRINT = 12;
biesCParser.ID = 13;
biesCParser.MULT = 14;
biesCParser.DIV = 15;
biesCParser.ADD = 16;
biesCParser.SUB = 17;
biesCParser.AND = 18;
biesCParser.OR = 19;
biesCParser.EQ = 20;
biesCParser.NEQ = 21;
biesCParser.LT = 22;
biesCParser.GT = 23;
biesCParser.LE = 24;
biesCParser.GE = 25;
biesCParser.NL = 26;
biesCParser.WS = 27;
biesCParser.COMMENT = 28;
biesCParser.MULTILINE_COMMENT = 29;

biesCParser.RULE_program = 0;
biesCParser.RULE_statement = 1;
biesCParser.RULE_printInstr = 2;
biesCParser.RULE_simpleLetInstr = 3;
biesCParser.RULE_anonymousLetFunction = 4;
biesCParser.RULE_primarydata = 5;
biesCParser.RULE_expr = 6;
biesCParser.RULE_functionCall = 7;
biesCParser.RULE_concatExpr = 8;
biesCParser.RULE_concatPart = 9;
biesCParser.RULE_number = 10;
biesCParser.RULE_string = 11;
biesCParser.RULE_array = 12;
biesCParser.RULE_id = 13;

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
biesCParser.PrimarydataContext = PrimarydataContext; 
biesCParser.ExprContext = ExprContext; 
biesCParser.FunctionCallContext = FunctionCallContext; 
biesCParser.ConcatExprContext = ConcatExprContext; 
biesCParser.ConcatPartContext = ConcatPartContext; 
biesCParser.NumberContext = NumberContext; 
biesCParser.StringContext = StringContext; 
biesCParser.ArrayContext = ArrayContext; 
biesCParser.IdContext = IdContext; 
