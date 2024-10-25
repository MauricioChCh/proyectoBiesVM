// Generated from ./grammar/biesLanguage.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import biesLanguageVisitor from './biesLanguageVisitor.js';

const serializedATN = [4,1,58,283,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,1,0,1,0,3,0,37,8,0,5,0,39,8,0,10,
0,12,0,42,9,0,1,0,1,0,1,1,1,1,1,1,1,1,3,1,50,8,1,1,1,1,1,3,1,54,8,1,5,1,
56,8,1,10,1,12,1,59,9,1,1,1,1,1,1,1,1,1,3,1,65,8,1,1,2,1,2,3,2,69,8,2,1,
3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,83,8,3,1,4,1,4,5,4,87,
8,4,10,4,12,4,90,9,4,1,4,1,4,1,4,3,4,95,8,4,1,4,5,4,98,8,4,10,4,12,4,101,
9,4,1,4,1,4,3,4,105,8,4,1,4,1,4,3,4,109,8,4,1,4,1,4,3,4,113,8,4,1,4,1,4,
3,4,117,8,4,1,4,1,4,3,4,121,8,4,1,4,1,4,3,4,125,8,4,1,4,1,4,3,4,129,8,4,
1,4,1,4,3,4,133,8,4,1,4,1,4,3,4,137,8,4,1,4,1,4,3,4,141,8,4,3,4,143,8,4,
1,5,1,5,3,5,147,8,5,1,5,1,5,3,5,151,8,5,1,5,1,5,3,5,155,8,5,1,5,1,5,3,5,
159,8,5,1,5,1,5,3,5,163,8,5,3,5,165,8,5,1,6,1,6,3,6,169,8,6,1,6,1,6,3,6,
173,8,6,1,6,1,6,3,6,177,8,6,1,6,1,6,3,6,181,8,6,3,6,183,8,6,1,7,1,7,1,7,
1,7,3,7,189,8,7,1,7,1,7,1,7,3,7,194,8,7,1,7,1,7,1,7,3,7,199,8,7,1,7,1,7,
3,7,203,8,7,1,8,1,8,1,9,1,9,3,9,209,8,9,1,9,3,9,212,8,9,1,9,1,9,3,9,216,
8,9,1,10,1,10,1,11,1,11,1,12,1,12,3,12,224,8,12,1,12,1,12,1,12,3,12,229,
8,12,5,12,231,8,12,10,12,12,12,234,9,12,1,12,1,12,1,12,1,12,3,12,240,8,12,
1,13,1,13,1,14,1,14,1,14,1,14,5,14,248,8,14,10,14,12,14,251,9,14,1,15,1,
15,1,15,1,15,3,15,257,8,15,1,15,1,15,1,15,1,15,3,15,263,8,15,5,15,265,8,
15,10,15,12,15,268,9,15,3,15,270,8,15,1,15,1,15,1,16,1,16,1,16,1,16,5,16,
278,8,16,10,16,12,16,281,9,16,1,16,1,232,0,17,0,2,4,6,8,10,12,14,16,18,20,
22,24,26,28,30,32,0,2,2,0,6,6,24,27,2,0,7,9,36,37,346,0,40,1,0,0,0,2,45,
1,0,0,0,4,68,1,0,0,0,6,82,1,0,0,0,8,142,1,0,0,0,10,164,1,0,0,0,12,182,1,
0,0,0,14,202,1,0,0,0,16,204,1,0,0,0,18,215,1,0,0,0,20,217,1,0,0,0,22,219,
1,0,0,0,24,239,1,0,0,0,26,241,1,0,0,0,28,243,1,0,0,0,30,252,1,0,0,0,32,273,
1,0,0,0,34,36,3,4,2,0,35,37,5,58,0,0,36,35,1,0,0,0,36,37,1,0,0,0,37,39,1,
0,0,0,38,34,1,0,0,0,39,42,1,0,0,0,40,38,1,0,0,0,40,41,1,0,0,0,41,43,1,0,
0,0,42,40,1,0,0,0,43,44,5,0,0,1,44,1,1,0,0,0,45,46,5,48,0,0,46,47,5,56,0,
0,47,49,5,50,0,0,48,50,5,58,0,0,49,48,1,0,0,0,49,50,1,0,0,0,50,57,1,0,0,
0,51,53,3,4,2,0,52,54,5,58,0,0,53,52,1,0,0,0,53,54,1,0,0,0,54,56,1,0,0,0,
55,51,1,0,0,0,56,59,1,0,0,0,57,55,1,0,0,0,57,58,1,0,0,0,58,60,1,0,0,0,59,
57,1,0,0,0,60,61,5,49,0,0,61,62,5,56,0,0,62,64,5,50,0,0,63,65,5,58,0,0,64,
63,1,0,0,0,64,65,1,0,0,0,65,3,1,0,0,0,66,69,3,6,3,0,67,69,3,2,1,0,68,66,
1,0,0,0,68,67,1,0,0,0,69,5,1,0,0,0,70,83,3,8,4,0,71,83,3,10,5,0,72,83,3,
14,7,0,73,83,3,18,9,0,74,83,3,22,11,0,75,83,3,20,10,0,76,83,3,12,6,0,77,
83,3,24,12,0,78,83,3,26,13,0,79,83,3,32,16,0,80,83,3,16,8,0,81,83,3,28,14,
0,82,70,1,0,0,0,82,71,1,0,0,0,82,72,1,0,0,0,82,73,1,0,0,0,82,74,1,0,0,0,
82,75,1,0,0,0,82,76,1,0,0,0,82,77,1,0,0,0,82,78,1,0,0,0,82,79,1,0,0,0,82,
80,1,0,0,0,82,81,1,0,0,0,83,7,1,0,0,0,84,88,5,17,0,0,85,87,5,56,0,0,86,85,
1,0,0,0,87,90,1,0,0,0,88,86,1,0,0,0,88,89,1,0,0,0,89,94,1,0,0,0,90,88,1,
0,0,0,91,95,5,51,0,0,92,95,5,53,0,0,93,95,3,30,15,0,94,91,1,0,0,0,94,92,
1,0,0,0,94,93,1,0,0,0,94,95,1,0,0,0,95,99,1,0,0,0,96,98,5,56,0,0,97,96,1,
0,0,0,98,101,1,0,0,0,99,97,1,0,0,0,99,100,1,0,0,0,100,143,1,0,0,0,101,99,
1,0,0,0,102,104,5,32,0,0,103,105,5,56,0,0,104,103,1,0,0,0,104,105,1,0,0,
0,105,106,1,0,0,0,106,108,5,51,0,0,107,109,5,56,0,0,108,107,1,0,0,0,108,
109,1,0,0,0,109,110,1,0,0,0,110,112,5,51,0,0,111,113,5,56,0,0,112,111,1,
0,0,0,112,113,1,0,0,0,113,143,1,0,0,0,114,116,5,33,0,0,115,117,5,56,0,0,
116,115,1,0,0,0,116,117,1,0,0,0,117,118,1,0,0,0,118,120,5,51,0,0,119,121,
5,56,0,0,120,119,1,0,0,0,120,121,1,0,0,0,121,122,1,0,0,0,122,124,5,51,0,
0,123,125,5,56,0,0,124,123,1,0,0,0,124,125,1,0,0,0,125,143,1,0,0,0,126,128,
5,34,0,0,127,129,5,56,0,0,128,127,1,0,0,0,128,129,1,0,0,0,129,130,1,0,0,
0,130,132,5,50,0,0,131,133,5,56,0,0,132,131,1,0,0,0,132,133,1,0,0,0,133,
143,1,0,0,0,134,136,5,35,0,0,135,137,5,56,0,0,136,135,1,0,0,0,136,137,1,
0,0,0,137,138,1,0,0,0,138,140,5,50,0,0,139,141,5,56,0,0,140,139,1,0,0,0,
140,141,1,0,0,0,141,143,1,0,0,0,142,84,1,0,0,0,142,102,1,0,0,0,142,114,1,
0,0,0,142,126,1,0,0,0,142,134,1,0,0,0,143,9,1,0,0,0,144,146,5,18,0,0,145,
147,5,56,0,0,146,145,1,0,0,0,146,147,1,0,0,0,147,165,1,0,0,0,148,150,5,19,
0,0,149,151,5,56,0,0,150,149,1,0,0,0,150,151,1,0,0,0,151,165,1,0,0,0,152,
154,5,20,0,0,153,155,5,56,0,0,154,153,1,0,0,0,154,155,1,0,0,0,155,165,1,
0,0,0,156,158,5,21,0,0,157,159,5,56,0,0,158,157,1,0,0,0,158,159,1,0,0,0,
159,165,1,0,0,0,160,162,5,22,0,0,161,163,5,56,0,0,162,161,1,0,0,0,162,163,
1,0,0,0,163,165,1,0,0,0,164,144,1,0,0,0,164,148,1,0,0,0,164,152,1,0,0,0,
164,156,1,0,0,0,164,160,1,0,0,0,165,11,1,0,0,0,166,168,5,42,0,0,167,169,
5,56,0,0,168,167,1,0,0,0,168,169,1,0,0,0,169,183,1,0,0,0,170,172,5,45,0,
0,171,173,5,56,0,0,172,171,1,0,0,0,172,173,1,0,0,0,173,183,1,0,0,0,174,176,
5,43,0,0,175,177,5,56,0,0,176,175,1,0,0,0,176,177,1,0,0,0,177,183,1,0,0,
0,178,180,5,44,0,0,179,181,5,56,0,0,180,179,1,0,0,0,180,181,1,0,0,0,181,
183,1,0,0,0,182,166,1,0,0,0,182,170,1,0,0,0,182,174,1,0,0,0,182,178,1,0,
0,0,183,13,1,0,0,0,184,203,5,28,0,0,185,203,5,29,0,0,186,188,5,1,0,0,187,
189,5,56,0,0,188,187,1,0,0,0,188,189,1,0,0,0,189,190,1,0,0,0,190,203,5,51,
0,0,191,193,5,2,0,0,192,194,5,56,0,0,193,192,1,0,0,0,193,194,1,0,0,0,194,
195,1,0,0,0,195,203,5,51,0,0,196,198,5,3,0,0,197,199,5,56,0,0,198,197,1,
0,0,0,198,199,1,0,0,0,199,200,1,0,0,0,200,203,5,51,0,0,201,203,5,4,0,0,202,
184,1,0,0,0,202,185,1,0,0,0,202,186,1,0,0,0,202,191,1,0,0,0,202,196,1,0,
0,0,202,201,1,0,0,0,203,15,1,0,0,0,204,205,5,46,0,0,205,17,1,0,0,0,206,208,
5,30,0,0,207,209,5,56,0,0,208,207,1,0,0,0,208,209,1,0,0,0,209,211,1,0,0,
0,210,212,5,51,0,0,211,210,1,0,0,0,211,212,1,0,0,0,212,216,1,0,0,0,213,216,
5,31,0,0,214,216,5,5,0,0,215,206,1,0,0,0,215,213,1,0,0,0,215,214,1,0,0,0,
216,19,1,0,0,0,217,218,7,0,0,0,218,21,1,0,0,0,219,220,7,1,0,0,220,23,1,0,
0,0,221,232,5,38,0,0,222,224,5,56,0,0,223,222,1,0,0,0,223,224,1,0,0,0,224,
228,1,0,0,0,225,229,5,51,0,0,226,229,5,53,0,0,227,229,3,30,15,0,228,225,
1,0,0,0,228,226,1,0,0,0,228,227,1,0,0,0,229,231,1,0,0,0,230,223,1,0,0,0,
231,234,1,0,0,0,232,233,1,0,0,0,232,230,1,0,0,0,233,240,1,0,0,0,234,232,
1,0,0,0,235,240,5,39,0,0,236,240,5,47,0,0,237,240,5,10,0,0,238,240,5,11,
0,0,239,221,1,0,0,0,239,235,1,0,0,0,239,236,1,0,0,0,239,237,1,0,0,0,239,
238,1,0,0,0,240,25,1,0,0,0,241,242,5,12,0,0,242,27,1,0,0,0,243,244,5,40,
0,0,244,245,5,56,0,0,245,249,5,16,0,0,246,248,5,56,0,0,247,246,1,0,0,0,248,
251,1,0,0,0,249,247,1,0,0,0,249,250,1,0,0,0,250,29,1,0,0,0,251,249,1,0,0,
0,252,269,5,13,0,0,253,257,5,51,0,0,254,257,5,53,0,0,255,257,3,30,15,0,256,
253,1,0,0,0,256,254,1,0,0,0,256,255,1,0,0,0,257,266,1,0,0,0,258,262,5,14,
0,0,259,263,5,51,0,0,260,263,5,53,0,0,261,263,3,30,15,0,262,259,1,0,0,0,
262,260,1,0,0,0,262,261,1,0,0,0,263,265,1,0,0,0,264,258,1,0,0,0,265,268,
1,0,0,0,266,264,1,0,0,0,266,267,1,0,0,0,267,270,1,0,0,0,268,266,1,0,0,0,
269,256,1,0,0,0,269,270,1,0,0,0,270,271,1,0,0,0,271,272,5,15,0,0,272,31,
1,0,0,0,273,274,5,41,0,0,274,275,5,56,0,0,275,279,5,16,0,0,276,278,5,56,
0,0,277,276,1,0,0,0,278,281,1,0,0,0,279,277,1,0,0,0,279,280,1,0,0,0,280,
33,1,0,0,0,281,279,1,0,0,0,50,36,40,49,53,57,64,68,82,88,94,99,104,108,112,
116,120,124,128,132,136,140,142,146,150,154,158,162,164,168,172,176,180,
182,188,193,198,202,208,211,215,223,228,232,239,249,256,262,266,269,279];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class biesLanguageParser extends antlr4.Parser {

    static grammarFileName = "biesLanguage.g4";
    static literalNames = [ null, "'BR'", "'BT'", "'BF'", "'NOP'", "'INP'", 
                            "'EQ'", "'CAT'", "'SNT'", "'TOS'", "'LRK'", 
                            "'TOL'", "'SGN'", "'['", "','", "']'", null, 
                            "'LDV'", "'ADD'", "'MUL'", "'SUB'", "'DIV'", 
                            "'NEG'", "'ET'", "'GT'", "'GTE'", "'LT'", "'LTE'", 
                            "'RET'", "'HLT'", "'APP'", "'PRN'", "'BLD'", 
                            "'BST'", "'LDF'", "'INI'", "'STK'", "'SRK'", 
                            "'LIN'", "'LTK'", "'CST'", "'INO'", "'AND'", 
                            "'OR'", "'XOR'", "'NOT'", "'SWP'", "'LNT'", 
                            "'$FUN'", "'$END'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             "TYPE", "LDV", "ADD", "MUL", "SUB", "DIV", 
                             "NEG", "EQ", "GT", "GTE", "LT", "LTE", "RET", 
                             "HLT", "APP", "PRN", "BLD", "BST", "LDF", "INI", 
                             "STK", "SRK", "LIN", "LTK", "CST", "INO", "AND", 
                             "OR", "XOR", "NOT", "SWP", "LNT", "FUN", "END", 
                             "LABEL_IDENTIFIER", "NUMBER", "ID", "STRING", 
                             "VALUE", "COMMENT", "ES", "WS", "NL" ];
    static ruleNames = [ "program", "functionDef", "statement", "instruction", 
                         "loadInstr", "arithInstr", "logicalInst", "controlInstr", 
                         "stackInstr", "funcInstr", "comparisonInstr", "stringInstr", 
                         "listInstr", "signInstr", "castInstr", "array", 
                         "inputString" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = biesLanguageParser.ruleNames;
        this.literalNames = biesLanguageParser.literalNames;
        this.symbolicNames = biesLanguageParser.symbolicNames;
    }



	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, biesLanguageParser.RULE_program);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 40;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4286455806) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 131071) !== 0)) {
	            this.state = 34;
	            this.statement();
	            this.state = 36;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===58) {
	                this.state = 35;
	                this.match(biesLanguageParser.NL);
	            }

	            this.state = 42;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 43;
	        this.match(biesLanguageParser.EOF);
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



	functionDef() {
	    let localctx = new FunctionDefContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, biesLanguageParser.RULE_functionDef);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 45;
	        this.match(biesLanguageParser.FUN);
	        this.state = 46;
	        this.match(biesLanguageParser.ES);
	        this.state = 47;
	        this.match(biesLanguageParser.LABEL_IDENTIFIER);
	        this.state = 49;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===58) {
	            this.state = 48;
	            this.match(biesLanguageParser.NL);
	        }

	        this.state = 57;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4286455806) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 131071) !== 0)) {
	            this.state = 51;
	            this.statement();
	            this.state = 53;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===58) {
	                this.state = 52;
	                this.match(biesLanguageParser.NL);
	            }

	            this.state = 59;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 60;
	        this.match(biesLanguageParser.END);
	        this.state = 61;
	        this.match(biesLanguageParser.ES);
	        this.state = 62;
	        this.match(biesLanguageParser.LABEL_IDENTIFIER);
	        this.state = 64;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        if(la_===1) {
	            this.state = 63;
	            this.match(biesLanguageParser.NL);

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



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, biesLanguageParser.RULE_statement);
	    try {
	        this.state = 68;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	        case 2:
	        case 3:
	        case 4:
	        case 5:
	        case 6:
	        case 7:
	        case 8:
	        case 9:
	        case 10:
	        case 11:
	        case 12:
	        case 17:
	        case 18:
	        case 19:
	        case 20:
	        case 21:
	        case 22:
	        case 24:
	        case 25:
	        case 26:
	        case 27:
	        case 28:
	        case 29:
	        case 30:
	        case 31:
	        case 32:
	        case 33:
	        case 34:
	        case 35:
	        case 36:
	        case 37:
	        case 38:
	        case 39:
	        case 40:
	        case 41:
	        case 42:
	        case 43:
	        case 44:
	        case 45:
	        case 46:
	        case 47:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 66;
	            this.instruction();
	            break;
	        case 48:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 67;
	            this.functionDef();
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



	instruction() {
	    let localctx = new InstructionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, biesLanguageParser.RULE_instruction);
	    try {
	        this.state = 82;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 17:
	        case 32:
	        case 33:
	        case 34:
	        case 35:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 70;
	            this.loadInstr();
	            break;
	        case 18:
	        case 19:
	        case 20:
	        case 21:
	        case 22:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 71;
	            this.arithInstr();
	            break;
	        case 1:
	        case 2:
	        case 3:
	        case 4:
	        case 28:
	        case 29:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 72;
	            this.controlInstr();
	            break;
	        case 5:
	        case 30:
	        case 31:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 73;
	            this.funcInstr();
	            break;
	        case 7:
	        case 8:
	        case 9:
	        case 36:
	        case 37:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 74;
	            this.stringInstr();
	            break;
	        case 6:
	        case 24:
	        case 25:
	        case 26:
	        case 27:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 75;
	            this.comparisonInstr();
	            break;
	        case 42:
	        case 43:
	        case 44:
	        case 45:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 76;
	            this.logicalInst();
	            break;
	        case 10:
	        case 11:
	        case 38:
	        case 39:
	        case 47:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 77;
	            this.listInstr();
	            break;
	        case 12:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 78;
	            this.signInstr();
	            break;
	        case 41:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 79;
	            this.inputString();
	            break;
	        case 46:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 80;
	            this.stackInstr();
	            break;
	        case 40:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 81;
	            this.castInstr();
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



	loadInstr() {
	    let localctx = new LoadInstrContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, biesLanguageParser.RULE_loadInstr);
	    var _la = 0;
	    try {
	        this.state = 142;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 17:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 84;
	            this.match(biesLanguageParser.LDV);
	            this.state = 88;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 85;
	                    this.match(biesLanguageParser.ES); 
	                }
	                this.state = 90;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,8,this._ctx);
	            }

	            this.state = 94;
	            this._errHandler.sync(this);
	            switch (this._input.LA(1)) {
	            case 51:
	            	this.state = 91;
	            	this.match(biesLanguageParser.NUMBER);
	            	break;
	            case 53:
	            	this.state = 92;
	            	this.match(biesLanguageParser.STRING);
	            	break;
	            case 13:
	            	this.state = 93;
	            	this.array();
	            	break;
	            case -1:
	            case 1:
	            case 2:
	            case 3:
	            case 4:
	            case 5:
	            case 6:
	            case 7:
	            case 8:
	            case 9:
	            case 10:
	            case 11:
	            case 12:
	            case 17:
	            case 18:
	            case 19:
	            case 20:
	            case 21:
	            case 22:
	            case 24:
	            case 25:
	            case 26:
	            case 27:
	            case 28:
	            case 29:
	            case 30:
	            case 31:
	            case 32:
	            case 33:
	            case 34:
	            case 35:
	            case 36:
	            case 37:
	            case 38:
	            case 39:
	            case 40:
	            case 41:
	            case 42:
	            case 43:
	            case 44:
	            case 45:
	            case 46:
	            case 47:
	            case 48:
	            case 49:
	            case 56:
	            case 58:
	            	break;
	            default:
	            	break;
	            }
	            this.state = 99;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===56) {
	                this.state = 96;
	                this.match(biesLanguageParser.ES);
	                this.state = 101;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            break;
	        case 32:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 102;
	            this.match(biesLanguageParser.BLD);
	            this.state = 104;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===56) {
	                this.state = 103;
	                this.match(biesLanguageParser.ES);
	            }

	            this.state = 106;
	            this.match(biesLanguageParser.NUMBER);
	            this.state = 108;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===56) {
	                this.state = 107;
	                this.match(biesLanguageParser.ES);
	            }

	            this.state = 110;
	            this.match(biesLanguageParser.NUMBER);
	            this.state = 112;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===56) {
	                this.state = 111;
	                this.match(biesLanguageParser.ES);
	            }

	            break;
	        case 33:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 114;
	            this.match(biesLanguageParser.BST);
	            this.state = 116;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===56) {
	                this.state = 115;
	                this.match(biesLanguageParser.ES);
	            }

	            this.state = 118;
	            this.match(biesLanguageParser.NUMBER);
	            this.state = 120;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===56) {
	                this.state = 119;
	                this.match(biesLanguageParser.ES);
	            }

	            this.state = 122;
	            this.match(biesLanguageParser.NUMBER);
	            this.state = 124;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===56) {
	                this.state = 123;
	                this.match(biesLanguageParser.ES);
	            }

	            break;
	        case 34:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 126;
	            this.match(biesLanguageParser.LDF);
	            this.state = 128;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===56) {
	                this.state = 127;
	                this.match(biesLanguageParser.ES);
	            }

	            this.state = 130;
	            this.match(biesLanguageParser.LABEL_IDENTIFIER);
	            this.state = 132;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===56) {
	                this.state = 131;
	                this.match(biesLanguageParser.ES);
	            }

	            break;
	        case 35:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 134;
	            this.match(biesLanguageParser.INI);
	            this.state = 136;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===56) {
	                this.state = 135;
	                this.match(biesLanguageParser.ES);
	            }

	            this.state = 138;
	            this.match(biesLanguageParser.LABEL_IDENTIFIER);
	            this.state = 140;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===56) {
	                this.state = 139;
	                this.match(biesLanguageParser.ES);
	            }

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



	arithInstr() {
	    let localctx = new ArithInstrContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, biesLanguageParser.RULE_arithInstr);
	    var _la = 0;
	    try {
	        this.state = 164;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 18:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 144;
	            this.match(biesLanguageParser.ADD);
	            this.state = 146;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===56) {
	                this.state = 145;
	                this.match(biesLanguageParser.ES);
	            }

	            break;
	        case 19:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 148;
	            this.match(biesLanguageParser.MUL);
	            this.state = 150;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===56) {
	                this.state = 149;
	                this.match(biesLanguageParser.ES);
	            }

	            break;
	        case 20:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 152;
	            this.match(biesLanguageParser.SUB);
	            this.state = 154;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===56) {
	                this.state = 153;
	                this.match(biesLanguageParser.ES);
	            }

	            break;
	        case 21:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 156;
	            this.match(biesLanguageParser.DIV);
	            this.state = 158;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===56) {
	                this.state = 157;
	                this.match(biesLanguageParser.ES);
	            }

	            break;
	        case 22:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 160;
	            this.match(biesLanguageParser.NEG);
	            this.state = 162;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===56) {
	                this.state = 161;
	                this.match(biesLanguageParser.ES);
	            }

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



	logicalInst() {
	    let localctx = new LogicalInstContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, biesLanguageParser.RULE_logicalInst);
	    var _la = 0;
	    try {
	        this.state = 182;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 42:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 166;
	            this.match(biesLanguageParser.AND);
	            this.state = 168;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===56) {
	                this.state = 167;
	                this.match(biesLanguageParser.ES);
	            }

	            break;
	        case 45:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 170;
	            this.match(biesLanguageParser.NOT);
	            this.state = 172;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===56) {
	                this.state = 171;
	                this.match(biesLanguageParser.ES);
	            }

	            break;
	        case 43:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 174;
	            this.match(biesLanguageParser.OR);
	            this.state = 176;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===56) {
	                this.state = 175;
	                this.match(biesLanguageParser.ES);
	            }

	            break;
	        case 44:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 178;
	            this.match(biesLanguageParser.XOR);
	            this.state = 180;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===56) {
	                this.state = 179;
	                this.match(biesLanguageParser.ES);
	            }

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



	controlInstr() {
	    let localctx = new ControlInstrContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, biesLanguageParser.RULE_controlInstr);
	    var _la = 0;
	    try {
	        this.state = 202;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 28:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 184;
	            this.match(biesLanguageParser.RET);
	            break;
	        case 29:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 185;
	            this.match(biesLanguageParser.HLT);
	            break;
	        case 1:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 186;
	            this.match(biesLanguageParser.T__0);
	            this.state = 188;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===56) {
	                this.state = 187;
	                this.match(biesLanguageParser.ES);
	            }

	            this.state = 190;
	            this.match(biesLanguageParser.NUMBER);
	            break;
	        case 2:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 191;
	            this.match(biesLanguageParser.T__1);
	            this.state = 193;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===56) {
	                this.state = 192;
	                this.match(biesLanguageParser.ES);
	            }

	            this.state = 195;
	            this.match(biesLanguageParser.NUMBER);
	            break;
	        case 3:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 196;
	            this.match(biesLanguageParser.T__2);
	            this.state = 198;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===56) {
	                this.state = 197;
	                this.match(biesLanguageParser.ES);
	            }

	            this.state = 200;
	            this.match(biesLanguageParser.NUMBER);
	            break;
	        case 4:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 201;
	            this.match(biesLanguageParser.T__3);
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



	stackInstr() {
	    let localctx = new StackInstrContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, biesLanguageParser.RULE_stackInstr);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 204;
	        this.match(biesLanguageParser.SWP);
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



	funcInstr() {
	    let localctx = new FuncInstrContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, biesLanguageParser.RULE_funcInstr);
	    var _la = 0;
	    try {
	        this.state = 215;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 30:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 206;
	            this.match(biesLanguageParser.APP);
	            this.state = 208;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===56) {
	                this.state = 207;
	                this.match(biesLanguageParser.ES);
	            }

	            this.state = 211;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===51) {
	                this.state = 210;
	                this.match(biesLanguageParser.NUMBER);
	            }

	            break;
	        case 31:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 213;
	            this.match(biesLanguageParser.PRN);
	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 214;
	            this.match(biesLanguageParser.T__4);
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



	comparisonInstr() {
	    let localctx = new ComparisonInstrContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, biesLanguageParser.RULE_comparisonInstr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 217;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 251658304) !== 0))) {
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
	}



	stringInstr() {
	    let localctx = new StringInstrContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, biesLanguageParser.RULE_stringInstr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 219;
	        _la = this._input.LA(1);
	        if(!(((((_la - 7)) & ~0x1f) === 0 && ((1 << (_la - 7)) & 1610612743) !== 0))) {
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
	}



	listInstr() {
	    let localctx = new ListInstrContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, biesLanguageParser.RULE_listInstr);
	    var _la = 0;
	    try {
	        this.state = 239;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 38:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 221;
	            this.match(biesLanguageParser.LIN);
	            this.state = 232;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,42,this._ctx)
	            while(_alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1+1) {
	                    this.state = 223;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    if(_la===56) {
	                        this.state = 222;
	                        this.match(biesLanguageParser.ES);
	                    }

	                    this.state = 228;
	                    this._errHandler.sync(this);
	                    switch(this._input.LA(1)) {
	                    case 51:
	                        this.state = 225;
	                        this.match(biesLanguageParser.NUMBER);
	                        break;
	                    case 53:
	                        this.state = 226;
	                        this.match(biesLanguageParser.STRING);
	                        break;
	                    case 13:
	                        this.state = 227;
	                        this.array();
	                        break;
	                    default:
	                        throw new antlr4.error.NoViableAltException(this);
	                    } 
	                }
	                this.state = 234;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,42,this._ctx);
	            }

	            break;
	        case 39:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 235;
	            this.match(biesLanguageParser.LTK);
	            break;
	        case 47:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 236;
	            this.match(biesLanguageParser.LNT);
	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 237;
	            this.match(biesLanguageParser.T__9);
	            break;
	        case 11:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 238;
	            this.match(biesLanguageParser.T__10);
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



	signInstr() {
	    let localctx = new SignInstrContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, biesLanguageParser.RULE_signInstr);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 241;
	        this.match(biesLanguageParser.T__11);
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



	castInstr() {
	    let localctx = new CastInstrContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, biesLanguageParser.RULE_castInstr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 243;
	        this.match(biesLanguageParser.CST);
	        this.state = 244;
	        this.match(biesLanguageParser.ES);
	        this.state = 245;
	        this.match(biesLanguageParser.TYPE);
	        this.state = 249;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===56) {
	            this.state = 246;
	            this.match(biesLanguageParser.ES);
	            this.state = 251;
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



	array() {
	    let localctx = new ArrayContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, biesLanguageParser.RULE_array);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 252;
	        this.match(biesLanguageParser.T__12);
	        this.state = 269;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===13 || _la===51 || _la===53) {
	            this.state = 256;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 51:
	                this.state = 253;
	                this.match(biesLanguageParser.NUMBER);
	                break;
	            case 53:
	                this.state = 254;
	                this.match(biesLanguageParser.STRING);
	                break;
	            case 13:
	                this.state = 255;
	                this.array();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 266;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===14) {
	                this.state = 258;
	                this.match(biesLanguageParser.T__13);
	                this.state = 262;
	                this._errHandler.sync(this);
	                switch(this._input.LA(1)) {
	                case 51:
	                    this.state = 259;
	                    this.match(biesLanguageParser.NUMBER);
	                    break;
	                case 53:
	                    this.state = 260;
	                    this.match(biesLanguageParser.STRING);
	                    break;
	                case 13:
	                    this.state = 261;
	                    this.array();
	                    break;
	                default:
	                    throw new antlr4.error.NoViableAltException(this);
	                }
	                this.state = 268;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 271;
	        this.match(biesLanguageParser.T__14);
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



	inputString() {
	    let localctx = new InputStringContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, biesLanguageParser.RULE_inputString);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 273;
	        this.match(biesLanguageParser.INO);
	        this.state = 274;
	        this.match(biesLanguageParser.ES);
	        this.state = 275;
	        this.match(biesLanguageParser.TYPE);
	        this.state = 279;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===56) {
	            this.state = 276;
	            this.match(biesLanguageParser.ES);
	            this.state = 281;
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


}

biesLanguageParser.EOF = antlr4.Token.EOF;
biesLanguageParser.T__0 = 1;
biesLanguageParser.T__1 = 2;
biesLanguageParser.T__2 = 3;
biesLanguageParser.T__3 = 4;
biesLanguageParser.T__4 = 5;
biesLanguageParser.T__5 = 6;
biesLanguageParser.T__6 = 7;
biesLanguageParser.T__7 = 8;
biesLanguageParser.T__8 = 9;
biesLanguageParser.T__9 = 10;
biesLanguageParser.T__10 = 11;
biesLanguageParser.T__11 = 12;
biesLanguageParser.T__12 = 13;
biesLanguageParser.T__13 = 14;
biesLanguageParser.T__14 = 15;
biesLanguageParser.TYPE = 16;
biesLanguageParser.LDV = 17;
biesLanguageParser.ADD = 18;
biesLanguageParser.MUL = 19;
biesLanguageParser.SUB = 20;
biesLanguageParser.DIV = 21;
biesLanguageParser.NEG = 22;
biesLanguageParser.EQ = 23;
biesLanguageParser.GT = 24;
biesLanguageParser.GTE = 25;
biesLanguageParser.LT = 26;
biesLanguageParser.LTE = 27;
biesLanguageParser.RET = 28;
biesLanguageParser.HLT = 29;
biesLanguageParser.APP = 30;
biesLanguageParser.PRN = 31;
biesLanguageParser.BLD = 32;
biesLanguageParser.BST = 33;
biesLanguageParser.LDF = 34;
biesLanguageParser.INI = 35;
biesLanguageParser.STK = 36;
biesLanguageParser.SRK = 37;
biesLanguageParser.LIN = 38;
biesLanguageParser.LTK = 39;
biesLanguageParser.CST = 40;
biesLanguageParser.INO = 41;
biesLanguageParser.AND = 42;
biesLanguageParser.OR = 43;
biesLanguageParser.XOR = 44;
biesLanguageParser.NOT = 45;
biesLanguageParser.SWP = 46;
biesLanguageParser.LNT = 47;
biesLanguageParser.FUN = 48;
biesLanguageParser.END = 49;
biesLanguageParser.LABEL_IDENTIFIER = 50;
biesLanguageParser.NUMBER = 51;
biesLanguageParser.ID = 52;
biesLanguageParser.STRING = 53;
biesLanguageParser.VALUE = 54;
biesLanguageParser.COMMENT = 55;
biesLanguageParser.ES = 56;
biesLanguageParser.WS = 57;
biesLanguageParser.NL = 58;

biesLanguageParser.RULE_program = 0;
biesLanguageParser.RULE_functionDef = 1;
biesLanguageParser.RULE_statement = 2;
biesLanguageParser.RULE_instruction = 3;
biesLanguageParser.RULE_loadInstr = 4;
biesLanguageParser.RULE_arithInstr = 5;
biesLanguageParser.RULE_logicalInst = 6;
biesLanguageParser.RULE_controlInstr = 7;
biesLanguageParser.RULE_stackInstr = 8;
biesLanguageParser.RULE_funcInstr = 9;
biesLanguageParser.RULE_comparisonInstr = 10;
biesLanguageParser.RULE_stringInstr = 11;
biesLanguageParser.RULE_listInstr = 12;
biesLanguageParser.RULE_signInstr = 13;
biesLanguageParser.RULE_castInstr = 14;
biesLanguageParser.RULE_array = 15;
biesLanguageParser.RULE_inputString = 16;

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
        this.ruleIndex = biesLanguageParser.RULE_program;
    }

	EOF() {
	    return this.getToken(biesLanguageParser.EOF, 0);
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
	        return this.getTokens(biesLanguageParser.NL);
	    } else {
	        return this.getToken(biesLanguageParser.NL, i);
	    }
	};


	accept(visitor) {
	    if ( visitor instanceof biesLanguageVisitor ) {
	        return visitor.visitProgram(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FunctionDefContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesLanguageParser.RULE_functionDef;
    }

	FUN() {
	    return this.getToken(biesLanguageParser.FUN, 0);
	};

	ES = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(biesLanguageParser.ES);
	    } else {
	        return this.getToken(biesLanguageParser.ES, i);
	    }
	};


	LABEL_IDENTIFIER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(biesLanguageParser.LABEL_IDENTIFIER);
	    } else {
	        return this.getToken(biesLanguageParser.LABEL_IDENTIFIER, i);
	    }
	};


	END() {
	    return this.getToken(biesLanguageParser.END, 0);
	};

	NL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(biesLanguageParser.NL);
	    } else {
	        return this.getToken(biesLanguageParser.NL, i);
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

	accept(visitor) {
	    if ( visitor instanceof biesLanguageVisitor ) {
	        return visitor.visitFunctionDef(this);
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
        this.ruleIndex = biesLanguageParser.RULE_statement;
    }

	instruction() {
	    return this.getTypedRuleContext(InstructionContext,0);
	};

	functionDef() {
	    return this.getTypedRuleContext(FunctionDefContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesLanguageVisitor ) {
	        return visitor.visitStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstructionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesLanguageParser.RULE_instruction;
    }

	loadInstr() {
	    return this.getTypedRuleContext(LoadInstrContext,0);
	};

	arithInstr() {
	    return this.getTypedRuleContext(ArithInstrContext,0);
	};

	controlInstr() {
	    return this.getTypedRuleContext(ControlInstrContext,0);
	};

	funcInstr() {
	    return this.getTypedRuleContext(FuncInstrContext,0);
	};

	stringInstr() {
	    return this.getTypedRuleContext(StringInstrContext,0);
	};

	comparisonInstr() {
	    return this.getTypedRuleContext(ComparisonInstrContext,0);
	};

	logicalInst() {
	    return this.getTypedRuleContext(LogicalInstContext,0);
	};

	listInstr() {
	    return this.getTypedRuleContext(ListInstrContext,0);
	};

	signInstr() {
	    return this.getTypedRuleContext(SignInstrContext,0);
	};

	inputString() {
	    return this.getTypedRuleContext(InputStringContext,0);
	};

	stackInstr() {
	    return this.getTypedRuleContext(StackInstrContext,0);
	};

	castInstr() {
	    return this.getTypedRuleContext(CastInstrContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesLanguageVisitor ) {
	        return visitor.visitInstruction(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LoadInstrContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesLanguageParser.RULE_loadInstr;
    }

	LDV() {
	    return this.getToken(biesLanguageParser.LDV, 0);
	};

	ES = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(biesLanguageParser.ES);
	    } else {
	        return this.getToken(biesLanguageParser.ES, i);
	    }
	};


	NUMBER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(biesLanguageParser.NUMBER);
	    } else {
	        return this.getToken(biesLanguageParser.NUMBER, i);
	    }
	};


	STRING() {
	    return this.getToken(biesLanguageParser.STRING, 0);
	};

	array() {
	    return this.getTypedRuleContext(ArrayContext,0);
	};

	BLD() {
	    return this.getToken(biesLanguageParser.BLD, 0);
	};

	BST() {
	    return this.getToken(biesLanguageParser.BST, 0);
	};

	LDF() {
	    return this.getToken(biesLanguageParser.LDF, 0);
	};

	LABEL_IDENTIFIER() {
	    return this.getToken(biesLanguageParser.LABEL_IDENTIFIER, 0);
	};

	INI() {
	    return this.getToken(biesLanguageParser.INI, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesLanguageVisitor ) {
	        return visitor.visitLoadInstr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ArithInstrContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesLanguageParser.RULE_arithInstr;
    }

	ADD() {
	    return this.getToken(biesLanguageParser.ADD, 0);
	};

	ES() {
	    return this.getToken(biesLanguageParser.ES, 0);
	};

	MUL() {
	    return this.getToken(biesLanguageParser.MUL, 0);
	};

	SUB() {
	    return this.getToken(biesLanguageParser.SUB, 0);
	};

	DIV() {
	    return this.getToken(biesLanguageParser.DIV, 0);
	};

	NEG() {
	    return this.getToken(biesLanguageParser.NEG, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesLanguageVisitor ) {
	        return visitor.visitArithInstr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LogicalInstContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesLanguageParser.RULE_logicalInst;
    }

	AND() {
	    return this.getToken(biesLanguageParser.AND, 0);
	};

	ES() {
	    return this.getToken(biesLanguageParser.ES, 0);
	};

	NOT() {
	    return this.getToken(biesLanguageParser.NOT, 0);
	};

	OR() {
	    return this.getToken(biesLanguageParser.OR, 0);
	};

	XOR() {
	    return this.getToken(biesLanguageParser.XOR, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesLanguageVisitor ) {
	        return visitor.visitLogicalInst(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ControlInstrContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesLanguageParser.RULE_controlInstr;
    }

	RET() {
	    return this.getToken(biesLanguageParser.RET, 0);
	};

	HLT() {
	    return this.getToken(biesLanguageParser.HLT, 0);
	};

	NUMBER() {
	    return this.getToken(biesLanguageParser.NUMBER, 0);
	};

	ES() {
	    return this.getToken(biesLanguageParser.ES, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesLanguageVisitor ) {
	        return visitor.visitControlInstr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StackInstrContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesLanguageParser.RULE_stackInstr;
    }

	SWP() {
	    return this.getToken(biesLanguageParser.SWP, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesLanguageVisitor ) {
	        return visitor.visitStackInstr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FuncInstrContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesLanguageParser.RULE_funcInstr;
    }

	APP() {
	    return this.getToken(biesLanguageParser.APP, 0);
	};

	ES() {
	    return this.getToken(biesLanguageParser.ES, 0);
	};

	NUMBER() {
	    return this.getToken(biesLanguageParser.NUMBER, 0);
	};

	PRN() {
	    return this.getToken(biesLanguageParser.PRN, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesLanguageVisitor ) {
	        return visitor.visitFuncInstr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ComparisonInstrContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesLanguageParser.RULE_comparisonInstr;
    }

	GT() {
	    return this.getToken(biesLanguageParser.GT, 0);
	};

	GTE() {
	    return this.getToken(biesLanguageParser.GTE, 0);
	};

	LT() {
	    return this.getToken(biesLanguageParser.LT, 0);
	};

	LTE() {
	    return this.getToken(biesLanguageParser.LTE, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesLanguageVisitor ) {
	        return visitor.visitComparisonInstr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StringInstrContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesLanguageParser.RULE_stringInstr;
    }

	STK() {
	    return this.getToken(biesLanguageParser.STK, 0);
	};

	SRK() {
	    return this.getToken(biesLanguageParser.SRK, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesLanguageVisitor ) {
	        return visitor.visitStringInstr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ListInstrContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesLanguageParser.RULE_listInstr;
    }

	LIN() {
	    return this.getToken(biesLanguageParser.LIN, 0);
	};

	NUMBER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(biesLanguageParser.NUMBER);
	    } else {
	        return this.getToken(biesLanguageParser.NUMBER, i);
	    }
	};


	STRING = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(biesLanguageParser.STRING);
	    } else {
	        return this.getToken(biesLanguageParser.STRING, i);
	    }
	};


	array = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ArrayContext);
	    } else {
	        return this.getTypedRuleContext(ArrayContext,i);
	    }
	};

	ES = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(biesLanguageParser.ES);
	    } else {
	        return this.getToken(biesLanguageParser.ES, i);
	    }
	};


	LTK() {
	    return this.getToken(biesLanguageParser.LTK, 0);
	};

	LNT() {
	    return this.getToken(biesLanguageParser.LNT, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesLanguageVisitor ) {
	        return visitor.visitListInstr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SignInstrContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesLanguageParser.RULE_signInstr;
    }


	accept(visitor) {
	    if ( visitor instanceof biesLanguageVisitor ) {
	        return visitor.visitSignInstr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CastInstrContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesLanguageParser.RULE_castInstr;
    }

	CST() {
	    return this.getToken(biesLanguageParser.CST, 0);
	};

	ES = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(biesLanguageParser.ES);
	    } else {
	        return this.getToken(biesLanguageParser.ES, i);
	    }
	};


	TYPE() {
	    return this.getToken(biesLanguageParser.TYPE, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesLanguageVisitor ) {
	        return visitor.visitCastInstr(this);
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
        this.ruleIndex = biesLanguageParser.RULE_array;
    }

	NUMBER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(biesLanguageParser.NUMBER);
	    } else {
	        return this.getToken(biesLanguageParser.NUMBER, i);
	    }
	};


	STRING = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(biesLanguageParser.STRING);
	    } else {
	        return this.getToken(biesLanguageParser.STRING, i);
	    }
	};


	array = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ArrayContext);
	    } else {
	        return this.getTypedRuleContext(ArrayContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof biesLanguageVisitor ) {
	        return visitor.visitArray(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InputStringContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesLanguageParser.RULE_inputString;
    }

	INO() {
	    return this.getToken(biesLanguageParser.INO, 0);
	};

	ES = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(biesLanguageParser.ES);
	    } else {
	        return this.getToken(biesLanguageParser.ES, i);
	    }
	};


	TYPE() {
	    return this.getToken(biesLanguageParser.TYPE, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesLanguageVisitor ) {
	        return visitor.visitInputString(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




biesLanguageParser.ProgramContext = ProgramContext; 
biesLanguageParser.FunctionDefContext = FunctionDefContext; 
biesLanguageParser.StatementContext = StatementContext; 
biesLanguageParser.InstructionContext = InstructionContext; 
biesLanguageParser.LoadInstrContext = LoadInstrContext; 
biesLanguageParser.ArithInstrContext = ArithInstrContext; 
biesLanguageParser.LogicalInstContext = LogicalInstContext; 
biesLanguageParser.ControlInstrContext = ControlInstrContext; 
biesLanguageParser.StackInstrContext = StackInstrContext; 
biesLanguageParser.FuncInstrContext = FuncInstrContext; 
biesLanguageParser.ComparisonInstrContext = ComparisonInstrContext; 
biesLanguageParser.StringInstrContext = StringInstrContext; 
biesLanguageParser.ListInstrContext = ListInstrContext; 
biesLanguageParser.SignInstrContext = SignInstrContext; 
biesLanguageParser.CastInstrContext = CastInstrContext; 
biesLanguageParser.ArrayContext = ArrayContext; 
biesLanguageParser.InputStringContext = InputStringContext; 
