// Generated from ./grammar/biesVM.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import biesVMVisitor from './biesVMVisitor.js';

const serializedATN = [4,1,62,329,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,1,0,1,0,3,0,39,8,0,5,0,
41,8,0,10,0,12,0,44,9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,3,1,54,8,1,1,1,1,
1,1,1,3,1,59,8,1,1,1,3,1,62,8,1,1,1,1,1,3,1,66,8,1,5,1,68,8,1,10,1,12,1,
71,9,1,1,1,1,1,1,1,1,1,3,1,77,8,1,1,2,1,2,3,2,81,8,2,1,3,1,3,1,3,1,3,1,3,
1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,96,8,3,1,4,1,4,5,4,100,8,4,10,4,12,4,
103,9,4,1,4,1,4,1,4,3,4,108,8,4,1,4,5,4,111,8,4,10,4,12,4,114,9,4,1,4,1,
4,3,4,118,8,4,1,4,1,4,3,4,122,8,4,1,4,1,4,3,4,126,8,4,1,4,1,4,3,4,130,8,
4,1,4,1,4,3,4,134,8,4,1,4,1,4,3,4,138,8,4,1,4,1,4,3,4,142,8,4,1,4,1,4,3,
4,146,8,4,1,4,1,4,3,4,150,8,4,1,4,1,4,3,4,154,8,4,3,4,156,8,4,1,5,1,5,3,
5,160,8,5,1,5,1,5,3,5,164,8,5,1,5,1,5,3,5,168,8,5,1,5,1,5,3,5,172,8,5,1,
5,1,5,3,5,176,8,5,1,5,1,5,3,5,180,8,5,3,5,182,8,5,1,6,1,6,3,6,186,8,6,1,
6,1,6,3,6,190,8,6,1,6,1,6,3,6,194,8,6,1,6,1,6,3,6,198,8,6,3,6,200,8,6,1,
7,1,7,1,7,3,7,205,8,7,1,7,1,7,3,7,209,8,7,1,7,1,7,1,7,3,7,214,8,7,1,7,1,
7,1,7,3,7,219,8,7,1,7,1,7,3,7,223,8,7,1,8,1,8,1,9,1,9,3,9,229,8,9,1,9,3,
9,232,8,9,1,9,1,9,3,9,236,8,9,1,10,1,10,1,11,1,11,1,12,1,12,3,12,244,8,12,
1,12,1,12,1,12,3,12,249,8,12,5,12,251,8,12,10,12,12,12,254,9,12,1,12,1,12,
1,12,1,12,3,12,260,8,12,1,13,1,13,1,14,1,14,1,15,1,15,1,15,1,15,5,15,270,
8,15,10,15,12,15,273,9,15,1,16,1,16,5,16,277,8,16,10,16,12,16,280,9,16,1,
16,1,16,1,16,3,16,285,8,16,1,16,5,16,288,8,16,10,16,12,16,291,9,16,1,16,
1,16,5,16,295,8,16,10,16,12,16,298,9,16,1,16,1,16,1,16,3,16,303,8,16,1,16,
5,16,306,8,16,10,16,12,16,309,9,16,5,16,311,8,16,10,16,12,16,314,9,16,3,
16,316,8,16,1,16,1,16,1,17,1,17,1,17,1,17,5,17,324,8,17,10,17,12,17,327,
9,17,1,17,1,252,0,18,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,0,
2,2,0,8,8,26,29,2,0,9,11,38,39,401,0,42,1,0,0,0,2,47,1,0,0,0,4,80,1,0,0,
0,6,95,1,0,0,0,8,155,1,0,0,0,10,181,1,0,0,0,12,199,1,0,0,0,14,222,1,0,0,
0,16,224,1,0,0,0,18,235,1,0,0,0,20,237,1,0,0,0,22,239,1,0,0,0,24,259,1,0,
0,0,26,261,1,0,0,0,28,263,1,0,0,0,30,265,1,0,0,0,32,274,1,0,0,0,34,319,1,
0,0,0,36,38,3,4,2,0,37,39,5,62,0,0,38,37,1,0,0,0,38,39,1,0,0,0,39,41,1,0,
0,0,40,36,1,0,0,0,41,44,1,0,0,0,42,40,1,0,0,0,42,43,1,0,0,0,43,45,1,0,0,
0,44,42,1,0,0,0,45,46,5,0,0,1,46,1,1,0,0,0,47,48,5,52,0,0,48,49,5,60,0,0,
49,53,5,54,0,0,50,51,5,60,0,0,51,52,5,1,0,0,52,54,5,55,0,0,53,50,1,0,0,0,
53,54,1,0,0,0,54,58,1,0,0,0,55,56,5,60,0,0,56,57,5,2,0,0,57,59,5,54,0,0,
58,55,1,0,0,0,58,59,1,0,0,0,59,61,1,0,0,0,60,62,5,62,0,0,61,60,1,0,0,0,61,
62,1,0,0,0,62,69,1,0,0,0,63,65,3,4,2,0,64,66,5,62,0,0,65,64,1,0,0,0,65,66,
1,0,0,0,66,68,1,0,0,0,67,63,1,0,0,0,68,71,1,0,0,0,69,67,1,0,0,0,69,70,1,
0,0,0,70,72,1,0,0,0,71,69,1,0,0,0,72,73,5,53,0,0,73,74,5,60,0,0,74,76,5,
54,0,0,75,77,5,62,0,0,76,75,1,0,0,0,76,77,1,0,0,0,77,3,1,0,0,0,78,81,3,6,
3,0,79,81,3,2,1,0,80,78,1,0,0,0,80,79,1,0,0,0,81,5,1,0,0,0,82,96,3,8,4,0,
83,96,3,10,5,0,84,96,3,14,7,0,85,96,3,18,9,0,86,96,3,22,11,0,87,96,3,20,
10,0,88,96,3,12,6,0,89,96,3,24,12,0,90,96,3,26,13,0,91,96,3,34,17,0,92,96,
3,16,8,0,93,96,3,30,15,0,94,96,3,28,14,0,95,82,1,0,0,0,95,83,1,0,0,0,95,
84,1,0,0,0,95,85,1,0,0,0,95,86,1,0,0,0,95,87,1,0,0,0,95,88,1,0,0,0,95,89,
1,0,0,0,95,90,1,0,0,0,95,91,1,0,0,0,95,92,1,0,0,0,95,93,1,0,0,0,95,94,1,
0,0,0,96,7,1,0,0,0,97,101,5,19,0,0,98,100,5,60,0,0,99,98,1,0,0,0,100,103,
1,0,0,0,101,99,1,0,0,0,101,102,1,0,0,0,102,107,1,0,0,0,103,101,1,0,0,0,104,
108,5,55,0,0,105,108,5,57,0,0,106,108,3,32,16,0,107,104,1,0,0,0,107,105,
1,0,0,0,107,106,1,0,0,0,107,108,1,0,0,0,108,112,1,0,0,0,109,111,5,60,0,0,
110,109,1,0,0,0,111,114,1,0,0,0,112,110,1,0,0,0,112,113,1,0,0,0,113,156,
1,0,0,0,114,112,1,0,0,0,115,117,5,34,0,0,116,118,5,60,0,0,117,116,1,0,0,
0,117,118,1,0,0,0,118,119,1,0,0,0,119,121,5,55,0,0,120,122,5,60,0,0,121,
120,1,0,0,0,121,122,1,0,0,0,122,123,1,0,0,0,123,125,5,55,0,0,124,126,5,60,
0,0,125,124,1,0,0,0,125,126,1,0,0,0,126,156,1,0,0,0,127,129,5,35,0,0,128,
130,5,60,0,0,129,128,1,0,0,0,129,130,1,0,0,0,130,131,1,0,0,0,131,133,5,55,
0,0,132,134,5,60,0,0,133,132,1,0,0,0,133,134,1,0,0,0,134,135,1,0,0,0,135,
137,5,55,0,0,136,138,5,60,0,0,137,136,1,0,0,0,137,138,1,0,0,0,138,156,1,
0,0,0,139,141,5,36,0,0,140,142,5,60,0,0,141,140,1,0,0,0,141,142,1,0,0,0,
142,143,1,0,0,0,143,145,5,54,0,0,144,146,5,60,0,0,145,144,1,0,0,0,145,146,
1,0,0,0,146,156,1,0,0,0,147,149,5,37,0,0,148,150,5,60,0,0,149,148,1,0,0,
0,149,150,1,0,0,0,150,151,1,0,0,0,151,153,5,54,0,0,152,154,5,60,0,0,153,
152,1,0,0,0,153,154,1,0,0,0,154,156,1,0,0,0,155,97,1,0,0,0,155,115,1,0,0,
0,155,127,1,0,0,0,155,139,1,0,0,0,155,147,1,0,0,0,156,9,1,0,0,0,157,159,
5,20,0,0,158,160,5,60,0,0,159,158,1,0,0,0,159,160,1,0,0,0,160,182,1,0,0,
0,161,163,5,21,0,0,162,164,5,60,0,0,163,162,1,0,0,0,163,164,1,0,0,0,164,
182,1,0,0,0,165,167,5,22,0,0,166,168,5,60,0,0,167,166,1,0,0,0,167,168,1,
0,0,0,168,182,1,0,0,0,169,171,5,23,0,0,170,172,5,60,0,0,171,170,1,0,0,0,
171,172,1,0,0,0,172,182,1,0,0,0,173,175,5,24,0,0,174,176,5,60,0,0,175,174,
1,0,0,0,175,176,1,0,0,0,176,182,1,0,0,0,177,179,5,51,0,0,178,180,5,60,0,
0,179,178,1,0,0,0,179,180,1,0,0,0,180,182,1,0,0,0,181,157,1,0,0,0,181,161,
1,0,0,0,181,165,1,0,0,0,181,169,1,0,0,0,181,173,1,0,0,0,181,177,1,0,0,0,
182,11,1,0,0,0,183,185,5,44,0,0,184,186,5,60,0,0,185,184,1,0,0,0,185,186,
1,0,0,0,186,200,1,0,0,0,187,189,5,47,0,0,188,190,5,60,0,0,189,188,1,0,0,
0,189,190,1,0,0,0,190,200,1,0,0,0,191,193,5,45,0,0,192,194,5,60,0,0,193,
192,1,0,0,0,193,194,1,0,0,0,194,200,1,0,0,0,195,197,5,46,0,0,196,198,5,60,
0,0,197,196,1,0,0,0,197,198,1,0,0,0,198,200,1,0,0,0,199,183,1,0,0,0,199,
187,1,0,0,0,199,191,1,0,0,0,199,195,1,0,0,0,200,13,1,0,0,0,201,223,5,30,
0,0,202,204,5,31,0,0,203,205,5,60,0,0,204,203,1,0,0,0,204,205,1,0,0,0,205,
223,1,0,0,0,206,208,5,3,0,0,207,209,5,60,0,0,208,207,1,0,0,0,208,209,1,0,
0,0,209,210,1,0,0,0,210,223,5,55,0,0,211,213,5,4,0,0,212,214,5,60,0,0,213,
212,1,0,0,0,213,214,1,0,0,0,214,215,1,0,0,0,215,223,5,55,0,0,216,218,5,5,
0,0,217,219,5,60,0,0,218,217,1,0,0,0,218,219,1,0,0,0,219,220,1,0,0,0,220,
223,5,55,0,0,221,223,5,6,0,0,222,201,1,0,0,0,222,202,1,0,0,0,222,206,1,0,
0,0,222,211,1,0,0,0,222,216,1,0,0,0,222,221,1,0,0,0,223,15,1,0,0,0,224,225,
5,48,0,0,225,17,1,0,0,0,226,228,5,32,0,0,227,229,5,60,0,0,228,227,1,0,0,
0,228,229,1,0,0,0,229,231,1,0,0,0,230,232,5,55,0,0,231,230,1,0,0,0,231,232,
1,0,0,0,232,236,1,0,0,0,233,236,5,33,0,0,234,236,5,7,0,0,235,226,1,0,0,0,
235,233,1,0,0,0,235,234,1,0,0,0,236,19,1,0,0,0,237,238,7,0,0,0,238,21,1,
0,0,0,239,240,7,1,0,0,240,23,1,0,0,0,241,252,5,40,0,0,242,244,5,60,0,0,243,
242,1,0,0,0,243,244,1,0,0,0,244,248,1,0,0,0,245,249,5,55,0,0,246,249,5,57,
0,0,247,249,3,32,16,0,248,245,1,0,0,0,248,246,1,0,0,0,248,247,1,0,0,0,249,
251,1,0,0,0,250,243,1,0,0,0,251,254,1,0,0,0,252,253,1,0,0,0,252,250,1,0,
0,0,253,260,1,0,0,0,254,252,1,0,0,0,255,260,5,41,0,0,256,260,5,49,0,0,257,
260,5,12,0,0,258,260,5,13,0,0,259,241,1,0,0,0,259,255,1,0,0,0,259,256,1,
0,0,0,259,257,1,0,0,0,259,258,1,0,0,0,260,25,1,0,0,0,261,262,5,14,0,0,262,
27,1,0,0,0,263,264,5,50,0,0,264,29,1,0,0,0,265,266,5,42,0,0,266,267,5,60,
0,0,267,271,5,18,0,0,268,270,5,60,0,0,269,268,1,0,0,0,270,273,1,0,0,0,271,
269,1,0,0,0,271,272,1,0,0,0,272,31,1,0,0,0,273,271,1,0,0,0,274,278,5,15,
0,0,275,277,5,60,0,0,276,275,1,0,0,0,277,280,1,0,0,0,278,276,1,0,0,0,278,
279,1,0,0,0,279,315,1,0,0,0,280,278,1,0,0,0,281,285,5,55,0,0,282,285,5,57,
0,0,283,285,3,32,16,0,284,281,1,0,0,0,284,282,1,0,0,0,284,283,1,0,0,0,285,
289,1,0,0,0,286,288,5,60,0,0,287,286,1,0,0,0,288,291,1,0,0,0,289,287,1,0,
0,0,289,290,1,0,0,0,290,312,1,0,0,0,291,289,1,0,0,0,292,296,5,16,0,0,293,
295,5,60,0,0,294,293,1,0,0,0,295,298,1,0,0,0,296,294,1,0,0,0,296,297,1,0,
0,0,297,302,1,0,0,0,298,296,1,0,0,0,299,303,5,55,0,0,300,303,5,57,0,0,301,
303,3,32,16,0,302,299,1,0,0,0,302,300,1,0,0,0,302,301,1,0,0,0,303,307,1,
0,0,0,304,306,5,60,0,0,305,304,1,0,0,0,306,309,1,0,0,0,307,305,1,0,0,0,307,
308,1,0,0,0,308,311,1,0,0,0,309,307,1,0,0,0,310,292,1,0,0,0,311,314,1,0,
0,0,312,310,1,0,0,0,312,313,1,0,0,0,313,316,1,0,0,0,314,312,1,0,0,0,315,
284,1,0,0,0,315,316,1,0,0,0,316,317,1,0,0,0,317,318,5,17,0,0,318,33,1,0,
0,0,319,320,5,43,0,0,320,321,5,60,0,0,321,325,5,18,0,0,322,324,5,60,0,0,
323,322,1,0,0,0,324,327,1,0,0,0,325,323,1,0,0,0,325,326,1,0,0,0,326,35,1,
0,0,0,327,325,1,0,0,0,58,38,42,53,58,61,65,69,76,80,95,101,107,112,117,121,
125,129,133,137,141,145,149,153,155,159,163,167,171,175,179,181,185,189,
193,197,199,204,208,213,218,222,228,231,235,243,248,252,259,271,278,284,
289,296,302,307,312,315,325];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class biesVMParser extends antlr4.Parser {

    static grammarFileName = "biesVM.g4";
    static literalNames = [ null, "'ARGS:'", "'PARENT:'", "'BR'", "'BT'", 
                            "'BF'", "'NOP'", "'INP'", "'EQ'", "'CAT'", "'SNT'", 
                            "'TOS'", "'LRK'", "'TOL'", "'SGN'", "'['", "','", 
                            "']'", null, "'LDV'", "'ADD'", "'MUL'", "'SUB'", 
                            "'DIV'", "'NEG'", "'ET'", "'GT'", "'GTE'", "'LT'", 
                            "'LTE'", "'RET'", "'HLT'", "'APP'", "'PRN'", 
                            "'BLD'", "'BST'", "'LDF'", "'INI'", "'STK'", 
                            "'SRK'", "'LIN'", "'LTK'", "'CST'", "'INO'", 
                            "'AND'", "'OR'", "'XOR'", "'NOT'", "'SWP'", 
                            "'LNT'", "'LEN'", "'POW'", "'$FUN'", "'$END'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, "TYPE", "LDV", "ADD", "MUL", "SUB", 
                             "DIV", "NEG", "EQ", "GT", "GTE", "LT", "LTE", 
                             "RET", "HLT", "APP", "PRN", "BLD", "BST", "LDF", 
                             "INI", "STK", "SRK", "LIN", "LTK", "CST", "INO", 
                             "AND", "OR", "XOR", "NOT", "SWP", "LNT", "LEN", 
                             "POW", "FUN", "END", "LABEL_IDENTIFIER", "NUMBER", 
                             "ID", "STRING", "VALUE", "COMMENT", "ES", "WS", 
                             "NL" ];
    static ruleNames = [ "program", "functionDef", "statement", "instruction", 
                         "loadInstr", "arithInstr", "logicalInst", "controlInstr", 
                         "stackInstr", "funcInstr", "comparisonInstr", "stringInstr", 
                         "listInstr", "signInstr", "lengthInstr", "castInstr", 
                         "array", "inputString" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = biesVMParser.ruleNames;
        this.literalNames = biesVMParser.literalNames;
        this.symbolicNames = biesVMParser.symbolicNames;
    }



	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, biesVMParser.RULE_program);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 42;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4260921336) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 2097151) !== 0)) {
	            this.state = 36;
	            this.statement();
	            this.state = 38;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===62) {
	                this.state = 37;
	                this.match(biesVMParser.NL);
	            }

	            this.state = 44;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 45;
	        this.match(biesVMParser.EOF);
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
	    this.enterRule(localctx, 2, biesVMParser.RULE_functionDef);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 47;
	        this.match(biesVMParser.FUN);
	        this.state = 48;
	        this.match(biesVMParser.ES);
	        this.state = 49;
	        this.match(biesVMParser.LABEL_IDENTIFIER);
	        this.state = 53;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        if(la_===1) {
	            this.state = 50;
	            this.match(biesVMParser.ES);
	            this.state = 51;
	            this.match(biesVMParser.T__0);
	            this.state = 52;
	            this.match(biesVMParser.NUMBER);

	        }
	        this.state = 58;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===60) {
	            this.state = 55;
	            this.match(biesVMParser.ES);
	            this.state = 56;
	            this.match(biesVMParser.T__1);
	            this.state = 57;
	            this.match(biesVMParser.LABEL_IDENTIFIER);
	        }

	        this.state = 61;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===62) {
	            this.state = 60;
	            this.match(biesVMParser.NL);
	        }

	        this.state = 69;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4260921336) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 2097151) !== 0)) {
	            this.state = 63;
	            this.statement();
	            this.state = 65;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===62) {
	                this.state = 64;
	                this.match(biesVMParser.NL);
	            }

	            this.state = 71;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 72;
	        this.match(biesVMParser.END);
	        this.state = 73;
	        this.match(biesVMParser.ES);
	        this.state = 74;
	        this.match(biesVMParser.LABEL_IDENTIFIER);
	        this.state = 76;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        if(la_===1) {
	            this.state = 75;
	            this.match(biesVMParser.NL);

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
	    this.enterRule(localctx, 4, biesVMParser.RULE_statement);
	    try {
	        this.state = 80;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
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
	        case 13:
	        case 14:
	        case 19:
	        case 20:
	        case 21:
	        case 22:
	        case 23:
	        case 24:
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
	        case 50:
	        case 51:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 78;
	            this.instruction();
	            break;
	        case 52:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 79;
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
	    this.enterRule(localctx, 6, biesVMParser.RULE_instruction);
	    try {
	        this.state = 95;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 19:
	        case 34:
	        case 35:
	        case 36:
	        case 37:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 82;
	            this.loadInstr();
	            break;
	        case 20:
	        case 21:
	        case 22:
	        case 23:
	        case 24:
	        case 51:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 83;
	            this.arithInstr();
	            break;
	        case 3:
	        case 4:
	        case 5:
	        case 6:
	        case 30:
	        case 31:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 84;
	            this.controlInstr();
	            break;
	        case 7:
	        case 32:
	        case 33:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 85;
	            this.funcInstr();
	            break;
	        case 9:
	        case 10:
	        case 11:
	        case 38:
	        case 39:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 86;
	            this.stringInstr();
	            break;
	        case 8:
	        case 26:
	        case 27:
	        case 28:
	        case 29:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 87;
	            this.comparisonInstr();
	            break;
	        case 44:
	        case 45:
	        case 46:
	        case 47:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 88;
	            this.logicalInst();
	            break;
	        case 12:
	        case 13:
	        case 40:
	        case 41:
	        case 49:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 89;
	            this.listInstr();
	            break;
	        case 14:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 90;
	            this.signInstr();
	            break;
	        case 43:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 91;
	            this.inputString();
	            break;
	        case 48:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 92;
	            this.stackInstr();
	            break;
	        case 42:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 93;
	            this.castInstr();
	            break;
	        case 50:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 94;
	            this.lengthInstr();
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
	    this.enterRule(localctx, 8, biesVMParser.RULE_loadInstr);
	    var _la = 0;
	    try {
	        this.state = 155;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 19:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 97;
	            this.match(biesVMParser.LDV);
	            this.state = 101;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,10,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 98;
	                    this.match(biesVMParser.ES); 
	                }
	                this.state = 103;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,10,this._ctx);
	            }

	            this.state = 107;
	            this._errHandler.sync(this);
	            switch (this._input.LA(1)) {
	            case 55:
	            	this.state = 104;
	            	this.match(biesVMParser.NUMBER);
	            	break;
	            case 57:
	            	this.state = 105;
	            	this.match(biesVMParser.STRING);
	            	break;
	            case 15:
	            	this.state = 106;
	            	this.array();
	            	break;
	            case -1:
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
	            case 13:
	            case 14:
	            case 19:
	            case 20:
	            case 21:
	            case 22:
	            case 23:
	            case 24:
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
	            case 50:
	            case 51:
	            case 52:
	            case 53:
	            case 60:
	            case 62:
	            	break;
	            default:
	            	break;
	            }
	            this.state = 112;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===60) {
	                this.state = 109;
	                this.match(biesVMParser.ES);
	                this.state = 114;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            break;
	        case 34:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 115;
	            this.match(biesVMParser.BLD);
	            this.state = 117;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===60) {
	                this.state = 116;
	                this.match(biesVMParser.ES);
	            }

	            this.state = 119;
	            this.match(biesVMParser.NUMBER);
	            this.state = 121;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===60) {
	                this.state = 120;
	                this.match(biesVMParser.ES);
	            }

	            this.state = 123;
	            this.match(biesVMParser.NUMBER);
	            this.state = 125;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===60) {
	                this.state = 124;
	                this.match(biesVMParser.ES);
	            }

	            break;
	        case 35:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 127;
	            this.match(biesVMParser.BST);
	            this.state = 129;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===60) {
	                this.state = 128;
	                this.match(biesVMParser.ES);
	            }

	            this.state = 131;
	            this.match(biesVMParser.NUMBER);
	            this.state = 133;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===60) {
	                this.state = 132;
	                this.match(biesVMParser.ES);
	            }

	            this.state = 135;
	            this.match(biesVMParser.NUMBER);
	            this.state = 137;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===60) {
	                this.state = 136;
	                this.match(biesVMParser.ES);
	            }

	            break;
	        case 36:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 139;
	            this.match(biesVMParser.LDF);
	            this.state = 141;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===60) {
	                this.state = 140;
	                this.match(biesVMParser.ES);
	            }

	            this.state = 143;
	            this.match(biesVMParser.LABEL_IDENTIFIER);
	            this.state = 145;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===60) {
	                this.state = 144;
	                this.match(biesVMParser.ES);
	            }

	            break;
	        case 37:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 147;
	            this.match(biesVMParser.INI);
	            this.state = 149;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===60) {
	                this.state = 148;
	                this.match(biesVMParser.ES);
	            }

	            this.state = 151;
	            this.match(biesVMParser.LABEL_IDENTIFIER);
	            this.state = 153;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===60) {
	                this.state = 152;
	                this.match(biesVMParser.ES);
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
	    this.enterRule(localctx, 10, biesVMParser.RULE_arithInstr);
	    var _la = 0;
	    try {
	        this.state = 181;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 20:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 157;
	            this.match(biesVMParser.ADD);
	            this.state = 159;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===60) {
	                this.state = 158;
	                this.match(biesVMParser.ES);
	            }

	            break;
	        case 21:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 161;
	            this.match(biesVMParser.MUL);
	            this.state = 163;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===60) {
	                this.state = 162;
	                this.match(biesVMParser.ES);
	            }

	            break;
	        case 22:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 165;
	            this.match(biesVMParser.SUB);
	            this.state = 167;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===60) {
	                this.state = 166;
	                this.match(biesVMParser.ES);
	            }

	            break;
	        case 23:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 169;
	            this.match(biesVMParser.DIV);
	            this.state = 171;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===60) {
	                this.state = 170;
	                this.match(biesVMParser.ES);
	            }

	            break;
	        case 24:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 173;
	            this.match(biesVMParser.NEG);
	            this.state = 175;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===60) {
	                this.state = 174;
	                this.match(biesVMParser.ES);
	            }

	            break;
	        case 51:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 177;
	            this.match(biesVMParser.POW);
	            this.state = 179;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===60) {
	                this.state = 178;
	                this.match(biesVMParser.ES);
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
	    this.enterRule(localctx, 12, biesVMParser.RULE_logicalInst);
	    var _la = 0;
	    try {
	        this.state = 199;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 44:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 183;
	            this.match(biesVMParser.AND);
	            this.state = 185;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===60) {
	                this.state = 184;
	                this.match(biesVMParser.ES);
	            }

	            break;
	        case 47:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 187;
	            this.match(biesVMParser.NOT);
	            this.state = 189;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===60) {
	                this.state = 188;
	                this.match(biesVMParser.ES);
	            }

	            break;
	        case 45:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 191;
	            this.match(biesVMParser.OR);
	            this.state = 193;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===60) {
	                this.state = 192;
	                this.match(biesVMParser.ES);
	            }

	            break;
	        case 46:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 195;
	            this.match(biesVMParser.XOR);
	            this.state = 197;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===60) {
	                this.state = 196;
	                this.match(biesVMParser.ES);
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
	    this.enterRule(localctx, 14, biesVMParser.RULE_controlInstr);
	    var _la = 0;
	    try {
	        this.state = 222;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 30:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 201;
	            this.match(biesVMParser.RET);
	            break;
	        case 31:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 202;
	            this.match(biesVMParser.HLT);
	            this.state = 204;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===60) {
	                this.state = 203;
	                this.match(biesVMParser.ES);
	            }

	            break;
	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 206;
	            this.match(biesVMParser.T__2);
	            this.state = 208;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===60) {
	                this.state = 207;
	                this.match(biesVMParser.ES);
	            }

	            this.state = 210;
	            this.match(biesVMParser.NUMBER);
	            break;
	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 211;
	            this.match(biesVMParser.T__3);
	            this.state = 213;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===60) {
	                this.state = 212;
	                this.match(biesVMParser.ES);
	            }

	            this.state = 215;
	            this.match(biesVMParser.NUMBER);
	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 216;
	            this.match(biesVMParser.T__4);
	            this.state = 218;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===60) {
	                this.state = 217;
	                this.match(biesVMParser.ES);
	            }

	            this.state = 220;
	            this.match(biesVMParser.NUMBER);
	            break;
	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 221;
	            this.match(biesVMParser.T__5);
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
	    this.enterRule(localctx, 16, biesVMParser.RULE_stackInstr);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 224;
	        this.match(biesVMParser.SWP);
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
	    this.enterRule(localctx, 18, biesVMParser.RULE_funcInstr);
	    var _la = 0;
	    try {
	        this.state = 235;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 32:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 226;
	            this.match(biesVMParser.APP);
	            this.state = 228;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===60) {
	                this.state = 227;
	                this.match(biesVMParser.ES);
	            }

	            this.state = 231;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===55) {
	                this.state = 230;
	                this.match(biesVMParser.NUMBER);
	            }

	            break;
	        case 33:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 233;
	            this.match(biesVMParser.PRN);
	            break;
	        case 7:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 234;
	            this.match(biesVMParser.T__6);
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
	    this.enterRule(localctx, 20, biesVMParser.RULE_comparisonInstr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 237;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 1006633216) !== 0))) {
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
	    this.enterRule(localctx, 22, biesVMParser.RULE_stringInstr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 239;
	        _la = this._input.LA(1);
	        if(!(((((_la - 9)) & ~0x1f) === 0 && ((1 << (_la - 9)) & 1610612743) !== 0))) {
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
	    this.enterRule(localctx, 24, biesVMParser.RULE_listInstr);
	    var _la = 0;
	    try {
	        this.state = 259;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 40:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 241;
	            this.match(biesVMParser.LIN);
	            this.state = 252;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,46,this._ctx)
	            while(_alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1+1) {
	                    this.state = 243;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    if(_la===60) {
	                        this.state = 242;
	                        this.match(biesVMParser.ES);
	                    }

	                    this.state = 248;
	                    this._errHandler.sync(this);
	                    switch(this._input.LA(1)) {
	                    case 55:
	                        this.state = 245;
	                        this.match(biesVMParser.NUMBER);
	                        break;
	                    case 57:
	                        this.state = 246;
	                        this.match(biesVMParser.STRING);
	                        break;
	                    case 15:
	                        this.state = 247;
	                        this.array();
	                        break;
	                    default:
	                        throw new antlr4.error.NoViableAltException(this);
	                    } 
	                }
	                this.state = 254;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,46,this._ctx);
	            }

	            break;
	        case 41:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 255;
	            this.match(biesVMParser.LTK);
	            break;
	        case 49:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 256;
	            this.match(biesVMParser.LNT);
	            break;
	        case 12:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 257;
	            this.match(biesVMParser.T__11);
	            break;
	        case 13:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 258;
	            this.match(biesVMParser.T__12);
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
	    this.enterRule(localctx, 26, biesVMParser.RULE_signInstr);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 261;
	        this.match(biesVMParser.T__13);
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



	lengthInstr() {
	    let localctx = new LengthInstrContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, biesVMParser.RULE_lengthInstr);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 263;
	        this.match(biesVMParser.LEN);
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
	    this.enterRule(localctx, 30, biesVMParser.RULE_castInstr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 265;
	        this.match(biesVMParser.CST);
	        this.state = 266;
	        this.match(biesVMParser.ES);
	        this.state = 267;
	        this.match(biesVMParser.TYPE);
	        this.state = 271;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===60) {
	            this.state = 268;
	            this.match(biesVMParser.ES);
	            this.state = 273;
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
	    this.enterRule(localctx, 32, biesVMParser.RULE_array);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 274;
	        this.match(biesVMParser.T__14);
	        this.state = 278;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===60) {
	            this.state = 275;
	            this.match(biesVMParser.ES);
	            this.state = 280;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 315;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===15 || _la===55 || _la===57) {
	            this.state = 284;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 55:
	                this.state = 281;
	                this.match(biesVMParser.NUMBER);
	                break;
	            case 57:
	                this.state = 282;
	                this.match(biesVMParser.STRING);
	                break;
	            case 15:
	                this.state = 283;
	                this.array();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 289;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===60) {
	                this.state = 286;
	                this.match(biesVMParser.ES);
	                this.state = 291;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 312;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===16) {
	                this.state = 292;
	                this.match(biesVMParser.T__15);
	                this.state = 296;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===60) {
	                    this.state = 293;
	                    this.match(biesVMParser.ES);
	                    this.state = 298;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	                this.state = 302;
	                this._errHandler.sync(this);
	                switch(this._input.LA(1)) {
	                case 55:
	                    this.state = 299;
	                    this.match(biesVMParser.NUMBER);
	                    break;
	                case 57:
	                    this.state = 300;
	                    this.match(biesVMParser.STRING);
	                    break;
	                case 15:
	                    this.state = 301;
	                    this.array();
	                    break;
	                default:
	                    throw new antlr4.error.NoViableAltException(this);
	                }
	                this.state = 307;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===60) {
	                    this.state = 304;
	                    this.match(biesVMParser.ES);
	                    this.state = 309;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	                this.state = 314;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 317;
	        this.match(biesVMParser.T__16);
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
	    this.enterRule(localctx, 34, biesVMParser.RULE_inputString);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 319;
	        this.match(biesVMParser.INO);
	        this.state = 320;
	        this.match(biesVMParser.ES);
	        this.state = 321;
	        this.match(biesVMParser.TYPE);
	        this.state = 325;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===60) {
	            this.state = 322;
	            this.match(biesVMParser.ES);
	            this.state = 327;
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

biesVMParser.EOF = antlr4.Token.EOF;
biesVMParser.T__0 = 1;
biesVMParser.T__1 = 2;
biesVMParser.T__2 = 3;
biesVMParser.T__3 = 4;
biesVMParser.T__4 = 5;
biesVMParser.T__5 = 6;
biesVMParser.T__6 = 7;
biesVMParser.T__7 = 8;
biesVMParser.T__8 = 9;
biesVMParser.T__9 = 10;
biesVMParser.T__10 = 11;
biesVMParser.T__11 = 12;
biesVMParser.T__12 = 13;
biesVMParser.T__13 = 14;
biesVMParser.T__14 = 15;
biesVMParser.T__15 = 16;
biesVMParser.T__16 = 17;
biesVMParser.TYPE = 18;
biesVMParser.LDV = 19;
biesVMParser.ADD = 20;
biesVMParser.MUL = 21;
biesVMParser.SUB = 22;
biesVMParser.DIV = 23;
biesVMParser.NEG = 24;
biesVMParser.EQ = 25;
biesVMParser.GT = 26;
biesVMParser.GTE = 27;
biesVMParser.LT = 28;
biesVMParser.LTE = 29;
biesVMParser.RET = 30;
biesVMParser.HLT = 31;
biesVMParser.APP = 32;
biesVMParser.PRN = 33;
biesVMParser.BLD = 34;
biesVMParser.BST = 35;
biesVMParser.LDF = 36;
biesVMParser.INI = 37;
biesVMParser.STK = 38;
biesVMParser.SRK = 39;
biesVMParser.LIN = 40;
biesVMParser.LTK = 41;
biesVMParser.CST = 42;
biesVMParser.INO = 43;
biesVMParser.AND = 44;
biesVMParser.OR = 45;
biesVMParser.XOR = 46;
biesVMParser.NOT = 47;
biesVMParser.SWP = 48;
biesVMParser.LNT = 49;
biesVMParser.LEN = 50;
biesVMParser.POW = 51;
biesVMParser.FUN = 52;
biesVMParser.END = 53;
biesVMParser.LABEL_IDENTIFIER = 54;
biesVMParser.NUMBER = 55;
biesVMParser.ID = 56;
biesVMParser.STRING = 57;
biesVMParser.VALUE = 58;
biesVMParser.COMMENT = 59;
biesVMParser.ES = 60;
biesVMParser.WS = 61;
biesVMParser.NL = 62;

biesVMParser.RULE_program = 0;
biesVMParser.RULE_functionDef = 1;
biesVMParser.RULE_statement = 2;
biesVMParser.RULE_instruction = 3;
biesVMParser.RULE_loadInstr = 4;
biesVMParser.RULE_arithInstr = 5;
biesVMParser.RULE_logicalInst = 6;
biesVMParser.RULE_controlInstr = 7;
biesVMParser.RULE_stackInstr = 8;
biesVMParser.RULE_funcInstr = 9;
biesVMParser.RULE_comparisonInstr = 10;
biesVMParser.RULE_stringInstr = 11;
biesVMParser.RULE_listInstr = 12;
biesVMParser.RULE_signInstr = 13;
biesVMParser.RULE_lengthInstr = 14;
biesVMParser.RULE_castInstr = 15;
biesVMParser.RULE_array = 16;
biesVMParser.RULE_inputString = 17;

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
        this.ruleIndex = biesVMParser.RULE_program;
    }

	EOF() {
	    return this.getToken(biesVMParser.EOF, 0);
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
	        return this.getTokens(biesVMParser.NL);
	    } else {
	        return this.getToken(biesVMParser.NL, i);
	    }
	};


	accept(visitor) {
	    if ( visitor instanceof biesVMVisitor ) {
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
        this.ruleIndex = biesVMParser.RULE_functionDef;
    }

	FUN() {
	    return this.getToken(biesVMParser.FUN, 0);
	};

	ES = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(biesVMParser.ES);
	    } else {
	        return this.getToken(biesVMParser.ES, i);
	    }
	};


	LABEL_IDENTIFIER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(biesVMParser.LABEL_IDENTIFIER);
	    } else {
	        return this.getToken(biesVMParser.LABEL_IDENTIFIER, i);
	    }
	};


	END() {
	    return this.getToken(biesVMParser.END, 0);
	};

	NUMBER() {
	    return this.getToken(biesVMParser.NUMBER, 0);
	};

	NL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(biesVMParser.NL);
	    } else {
	        return this.getToken(biesVMParser.NL, i);
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
	    if ( visitor instanceof biesVMVisitor ) {
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
        this.ruleIndex = biesVMParser.RULE_statement;
    }

	instruction() {
	    return this.getTypedRuleContext(InstructionContext,0);
	};

	functionDef() {
	    return this.getTypedRuleContext(FunctionDefContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesVMVisitor ) {
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
        this.ruleIndex = biesVMParser.RULE_instruction;
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

	lengthInstr() {
	    return this.getTypedRuleContext(LengthInstrContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesVMVisitor ) {
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
        this.ruleIndex = biesVMParser.RULE_loadInstr;
    }

	LDV() {
	    return this.getToken(biesVMParser.LDV, 0);
	};

	ES = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(biesVMParser.ES);
	    } else {
	        return this.getToken(biesVMParser.ES, i);
	    }
	};


	NUMBER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(biesVMParser.NUMBER);
	    } else {
	        return this.getToken(biesVMParser.NUMBER, i);
	    }
	};


	STRING() {
	    return this.getToken(biesVMParser.STRING, 0);
	};

	array() {
	    return this.getTypedRuleContext(ArrayContext,0);
	};

	BLD() {
	    return this.getToken(biesVMParser.BLD, 0);
	};

	BST() {
	    return this.getToken(biesVMParser.BST, 0);
	};

	LDF() {
	    return this.getToken(biesVMParser.LDF, 0);
	};

	LABEL_IDENTIFIER() {
	    return this.getToken(biesVMParser.LABEL_IDENTIFIER, 0);
	};

	INI() {
	    return this.getToken(biesVMParser.INI, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesVMVisitor ) {
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
        this.ruleIndex = biesVMParser.RULE_arithInstr;
    }

	ADD() {
	    return this.getToken(biesVMParser.ADD, 0);
	};

	ES() {
	    return this.getToken(biesVMParser.ES, 0);
	};

	MUL() {
	    return this.getToken(biesVMParser.MUL, 0);
	};

	SUB() {
	    return this.getToken(biesVMParser.SUB, 0);
	};

	DIV() {
	    return this.getToken(biesVMParser.DIV, 0);
	};

	NEG() {
	    return this.getToken(biesVMParser.NEG, 0);
	};

	POW() {
	    return this.getToken(biesVMParser.POW, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesVMVisitor ) {
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
        this.ruleIndex = biesVMParser.RULE_logicalInst;
    }

	AND() {
	    return this.getToken(biesVMParser.AND, 0);
	};

	ES() {
	    return this.getToken(biesVMParser.ES, 0);
	};

	NOT() {
	    return this.getToken(biesVMParser.NOT, 0);
	};

	OR() {
	    return this.getToken(biesVMParser.OR, 0);
	};

	XOR() {
	    return this.getToken(biesVMParser.XOR, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesVMVisitor ) {
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
        this.ruleIndex = biesVMParser.RULE_controlInstr;
    }

	RET() {
	    return this.getToken(biesVMParser.RET, 0);
	};

	HLT() {
	    return this.getToken(biesVMParser.HLT, 0);
	};

	ES() {
	    return this.getToken(biesVMParser.ES, 0);
	};

	NUMBER() {
	    return this.getToken(biesVMParser.NUMBER, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesVMVisitor ) {
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
        this.ruleIndex = biesVMParser.RULE_stackInstr;
    }

	SWP() {
	    return this.getToken(biesVMParser.SWP, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesVMVisitor ) {
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
        this.ruleIndex = biesVMParser.RULE_funcInstr;
    }

	APP() {
	    return this.getToken(biesVMParser.APP, 0);
	};

	ES() {
	    return this.getToken(biesVMParser.ES, 0);
	};

	NUMBER() {
	    return this.getToken(biesVMParser.NUMBER, 0);
	};

	PRN() {
	    return this.getToken(biesVMParser.PRN, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesVMVisitor ) {
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
        this.ruleIndex = biesVMParser.RULE_comparisonInstr;
    }

	GT() {
	    return this.getToken(biesVMParser.GT, 0);
	};

	GTE() {
	    return this.getToken(biesVMParser.GTE, 0);
	};

	LT() {
	    return this.getToken(biesVMParser.LT, 0);
	};

	LTE() {
	    return this.getToken(biesVMParser.LTE, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesVMVisitor ) {
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
        this.ruleIndex = biesVMParser.RULE_stringInstr;
    }

	STK() {
	    return this.getToken(biesVMParser.STK, 0);
	};

	SRK() {
	    return this.getToken(biesVMParser.SRK, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesVMVisitor ) {
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
        this.ruleIndex = biesVMParser.RULE_listInstr;
    }

	LIN() {
	    return this.getToken(biesVMParser.LIN, 0);
	};

	NUMBER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(biesVMParser.NUMBER);
	    } else {
	        return this.getToken(biesVMParser.NUMBER, i);
	    }
	};


	STRING = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(biesVMParser.STRING);
	    } else {
	        return this.getToken(biesVMParser.STRING, i);
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
	        return this.getTokens(biesVMParser.ES);
	    } else {
	        return this.getToken(biesVMParser.ES, i);
	    }
	};


	LTK() {
	    return this.getToken(biesVMParser.LTK, 0);
	};

	LNT() {
	    return this.getToken(biesVMParser.LNT, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesVMVisitor ) {
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
        this.ruleIndex = biesVMParser.RULE_signInstr;
    }


	accept(visitor) {
	    if ( visitor instanceof biesVMVisitor ) {
	        return visitor.visitSignInstr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LengthInstrContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesVMParser.RULE_lengthInstr;
    }

	LEN() {
	    return this.getToken(biesVMParser.LEN, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesVMVisitor ) {
	        return visitor.visitLengthInstr(this);
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
        this.ruleIndex = biesVMParser.RULE_castInstr;
    }

	CST() {
	    return this.getToken(biesVMParser.CST, 0);
	};

	ES = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(biesVMParser.ES);
	    } else {
	        return this.getToken(biesVMParser.ES, i);
	    }
	};


	TYPE() {
	    return this.getToken(biesVMParser.TYPE, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesVMVisitor ) {
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
        this.ruleIndex = biesVMParser.RULE_array;
    }

	ES = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(biesVMParser.ES);
	    } else {
	        return this.getToken(biesVMParser.ES, i);
	    }
	};


	NUMBER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(biesVMParser.NUMBER);
	    } else {
	        return this.getToken(biesVMParser.NUMBER, i);
	    }
	};


	STRING = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(biesVMParser.STRING);
	    } else {
	        return this.getToken(biesVMParser.STRING, i);
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
	    if ( visitor instanceof biesVMVisitor ) {
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
        this.ruleIndex = biesVMParser.RULE_inputString;
    }

	INO() {
	    return this.getToken(biesVMParser.INO, 0);
	};

	ES = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(biesVMParser.ES);
	    } else {
	        return this.getToken(biesVMParser.ES, i);
	    }
	};


	TYPE() {
	    return this.getToken(biesVMParser.TYPE, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesVMVisitor ) {
	        return visitor.visitInputString(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




biesVMParser.ProgramContext = ProgramContext; 
biesVMParser.FunctionDefContext = FunctionDefContext; 
biesVMParser.StatementContext = StatementContext; 
biesVMParser.InstructionContext = InstructionContext; 
biesVMParser.LoadInstrContext = LoadInstrContext; 
biesVMParser.ArithInstrContext = ArithInstrContext; 
biesVMParser.LogicalInstContext = LogicalInstContext; 
biesVMParser.ControlInstrContext = ControlInstrContext; 
biesVMParser.StackInstrContext = StackInstrContext; 
biesVMParser.FuncInstrContext = FuncInstrContext; 
biesVMParser.ComparisonInstrContext = ComparisonInstrContext; 
biesVMParser.StringInstrContext = StringInstrContext; 
biesVMParser.ListInstrContext = ListInstrContext; 
biesVMParser.SignInstrContext = SignInstrContext; 
biesVMParser.LengthInstrContext = LengthInstrContext; 
biesVMParser.CastInstrContext = CastInstrContext; 
biesVMParser.ArrayContext = ArrayContext; 
biesVMParser.InputStringContext = InputStringContext; 
