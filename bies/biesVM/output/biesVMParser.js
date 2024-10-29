// Generated from ./grammar/biesVM.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import biesVMVisitor from './biesVMVisitor.js';

const serializedATN = [4,1,60,317,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,1,0,1,0,3,0,37,8,0,5,0,39,8,0,10,
0,12,0,42,9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,3,1,52,8,1,1,1,1,1,1,1,3,1,
57,8,1,1,1,3,1,60,8,1,1,1,1,1,3,1,64,8,1,5,1,66,8,1,10,1,12,1,69,9,1,1,1,
1,1,1,1,1,1,3,1,75,8,1,1,2,1,2,3,2,79,8,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,
3,1,3,1,3,1,3,1,3,3,3,93,8,3,1,4,1,4,5,4,97,8,4,10,4,12,4,100,9,4,1,4,1,
4,1,4,3,4,105,8,4,1,4,5,4,108,8,4,10,4,12,4,111,9,4,1,4,1,4,3,4,115,8,4,
1,4,1,4,3,4,119,8,4,1,4,1,4,3,4,123,8,4,1,4,1,4,3,4,127,8,4,1,4,1,4,3,4,
131,8,4,1,4,1,4,3,4,135,8,4,1,4,1,4,3,4,139,8,4,1,4,1,4,3,4,143,8,4,1,4,
1,4,3,4,147,8,4,1,4,1,4,3,4,151,8,4,3,4,153,8,4,1,5,1,5,3,5,157,8,5,1,5,
1,5,3,5,161,8,5,1,5,1,5,3,5,165,8,5,1,5,1,5,3,5,169,8,5,1,5,1,5,3,5,173,
8,5,3,5,175,8,5,1,6,1,6,3,6,179,8,6,1,6,1,6,3,6,183,8,6,1,6,1,6,3,6,187,
8,6,1,6,1,6,3,6,191,8,6,3,6,193,8,6,1,7,1,7,1,7,1,7,3,7,199,8,7,1,7,1,7,
1,7,3,7,204,8,7,1,7,1,7,1,7,3,7,209,8,7,1,7,1,7,3,7,213,8,7,1,8,1,8,1,9,
1,9,3,9,219,8,9,1,9,3,9,222,8,9,1,9,1,9,3,9,226,8,9,1,10,1,10,1,11,1,11,
1,12,1,12,3,12,234,8,12,1,12,1,12,1,12,3,12,239,8,12,5,12,241,8,12,10,12,
12,12,244,9,12,1,12,1,12,1,12,1,12,3,12,250,8,12,1,13,1,13,1,14,1,14,1,14,
1,14,5,14,258,8,14,10,14,12,14,261,9,14,1,15,1,15,5,15,265,8,15,10,15,12,
15,268,9,15,1,15,1,15,1,15,3,15,273,8,15,1,15,5,15,276,8,15,10,15,12,15,
279,9,15,1,15,1,15,5,15,283,8,15,10,15,12,15,286,9,15,1,15,1,15,1,15,3,15,
291,8,15,1,15,5,15,294,8,15,10,15,12,15,297,9,15,5,15,299,8,15,10,15,12,
15,302,9,15,3,15,304,8,15,1,15,1,15,1,16,1,16,1,16,1,16,5,16,312,8,16,10,
16,12,16,315,9,16,1,16,1,242,0,17,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,
30,32,0,2,2,0,8,8,26,29,2,0,9,11,38,39,386,0,40,1,0,0,0,2,45,1,0,0,0,4,78,
1,0,0,0,6,92,1,0,0,0,8,152,1,0,0,0,10,174,1,0,0,0,12,192,1,0,0,0,14,212,
1,0,0,0,16,214,1,0,0,0,18,225,1,0,0,0,20,227,1,0,0,0,22,229,1,0,0,0,24,249,
1,0,0,0,26,251,1,0,0,0,28,253,1,0,0,0,30,262,1,0,0,0,32,307,1,0,0,0,34,36,
3,4,2,0,35,37,5,60,0,0,36,35,1,0,0,0,36,37,1,0,0,0,37,39,1,0,0,0,38,34,1,
0,0,0,39,42,1,0,0,0,40,38,1,0,0,0,40,41,1,0,0,0,41,43,1,0,0,0,42,40,1,0,
0,0,43,44,5,0,0,1,44,1,1,0,0,0,45,46,5,50,0,0,46,47,5,58,0,0,47,51,5,52,
0,0,48,49,5,58,0,0,49,50,5,1,0,0,50,52,5,53,0,0,51,48,1,0,0,0,51,52,1,0,
0,0,52,56,1,0,0,0,53,54,5,58,0,0,54,55,5,2,0,0,55,57,5,52,0,0,56,53,1,0,
0,0,56,57,1,0,0,0,57,59,1,0,0,0,58,60,5,60,0,0,59,58,1,0,0,0,59,60,1,0,0,
0,60,67,1,0,0,0,61,63,3,4,2,0,62,64,5,60,0,0,63,62,1,0,0,0,63,64,1,0,0,0,
64,66,1,0,0,0,65,61,1,0,0,0,66,69,1,0,0,0,67,65,1,0,0,0,67,68,1,0,0,0,68,
70,1,0,0,0,69,67,1,0,0,0,70,71,5,51,0,0,71,72,5,58,0,0,72,74,5,52,0,0,73,
75,5,60,0,0,74,73,1,0,0,0,74,75,1,0,0,0,75,3,1,0,0,0,76,79,3,6,3,0,77,79,
3,2,1,0,78,76,1,0,0,0,78,77,1,0,0,0,79,5,1,0,0,0,80,93,3,8,4,0,81,93,3,10,
5,0,82,93,3,14,7,0,83,93,3,18,9,0,84,93,3,22,11,0,85,93,3,20,10,0,86,93,
3,12,6,0,87,93,3,24,12,0,88,93,3,26,13,0,89,93,3,32,16,0,90,93,3,16,8,0,
91,93,3,28,14,0,92,80,1,0,0,0,92,81,1,0,0,0,92,82,1,0,0,0,92,83,1,0,0,0,
92,84,1,0,0,0,92,85,1,0,0,0,92,86,1,0,0,0,92,87,1,0,0,0,92,88,1,0,0,0,92,
89,1,0,0,0,92,90,1,0,0,0,92,91,1,0,0,0,93,7,1,0,0,0,94,98,5,19,0,0,95,97,
5,58,0,0,96,95,1,0,0,0,97,100,1,0,0,0,98,96,1,0,0,0,98,99,1,0,0,0,99,104,
1,0,0,0,100,98,1,0,0,0,101,105,5,53,0,0,102,105,5,55,0,0,103,105,3,30,15,
0,104,101,1,0,0,0,104,102,1,0,0,0,104,103,1,0,0,0,104,105,1,0,0,0,105,109,
1,0,0,0,106,108,5,58,0,0,107,106,1,0,0,0,108,111,1,0,0,0,109,107,1,0,0,0,
109,110,1,0,0,0,110,153,1,0,0,0,111,109,1,0,0,0,112,114,5,34,0,0,113,115,
5,58,0,0,114,113,1,0,0,0,114,115,1,0,0,0,115,116,1,0,0,0,116,118,5,53,0,
0,117,119,5,58,0,0,118,117,1,0,0,0,118,119,1,0,0,0,119,120,1,0,0,0,120,122,
5,53,0,0,121,123,5,58,0,0,122,121,1,0,0,0,122,123,1,0,0,0,123,153,1,0,0,
0,124,126,5,35,0,0,125,127,5,58,0,0,126,125,1,0,0,0,126,127,1,0,0,0,127,
128,1,0,0,0,128,130,5,53,0,0,129,131,5,58,0,0,130,129,1,0,0,0,130,131,1,
0,0,0,131,132,1,0,0,0,132,134,5,53,0,0,133,135,5,58,0,0,134,133,1,0,0,0,
134,135,1,0,0,0,135,153,1,0,0,0,136,138,5,36,0,0,137,139,5,58,0,0,138,137,
1,0,0,0,138,139,1,0,0,0,139,140,1,0,0,0,140,142,5,52,0,0,141,143,5,58,0,
0,142,141,1,0,0,0,142,143,1,0,0,0,143,153,1,0,0,0,144,146,5,37,0,0,145,147,
5,58,0,0,146,145,1,0,0,0,146,147,1,0,0,0,147,148,1,0,0,0,148,150,5,52,0,
0,149,151,5,58,0,0,150,149,1,0,0,0,150,151,1,0,0,0,151,153,1,0,0,0,152,94,
1,0,0,0,152,112,1,0,0,0,152,124,1,0,0,0,152,136,1,0,0,0,152,144,1,0,0,0,
153,9,1,0,0,0,154,156,5,20,0,0,155,157,5,58,0,0,156,155,1,0,0,0,156,157,
1,0,0,0,157,175,1,0,0,0,158,160,5,21,0,0,159,161,5,58,0,0,160,159,1,0,0,
0,160,161,1,0,0,0,161,175,1,0,0,0,162,164,5,22,0,0,163,165,5,58,0,0,164,
163,1,0,0,0,164,165,1,0,0,0,165,175,1,0,0,0,166,168,5,23,0,0,167,169,5,58,
0,0,168,167,1,0,0,0,168,169,1,0,0,0,169,175,1,0,0,0,170,172,5,24,0,0,171,
173,5,58,0,0,172,171,1,0,0,0,172,173,1,0,0,0,173,175,1,0,0,0,174,154,1,0,
0,0,174,158,1,0,0,0,174,162,1,0,0,0,174,166,1,0,0,0,174,170,1,0,0,0,175,
11,1,0,0,0,176,178,5,44,0,0,177,179,5,58,0,0,178,177,1,0,0,0,178,179,1,0,
0,0,179,193,1,0,0,0,180,182,5,47,0,0,181,183,5,58,0,0,182,181,1,0,0,0,182,
183,1,0,0,0,183,193,1,0,0,0,184,186,5,45,0,0,185,187,5,58,0,0,186,185,1,
0,0,0,186,187,1,0,0,0,187,193,1,0,0,0,188,190,5,46,0,0,189,191,5,58,0,0,
190,189,1,0,0,0,190,191,1,0,0,0,191,193,1,0,0,0,192,176,1,0,0,0,192,180,
1,0,0,0,192,184,1,0,0,0,192,188,1,0,0,0,193,13,1,0,0,0,194,213,5,30,0,0,
195,213,5,31,0,0,196,198,5,3,0,0,197,199,5,58,0,0,198,197,1,0,0,0,198,199,
1,0,0,0,199,200,1,0,0,0,200,213,5,53,0,0,201,203,5,4,0,0,202,204,5,58,0,
0,203,202,1,0,0,0,203,204,1,0,0,0,204,205,1,0,0,0,205,213,5,53,0,0,206,208,
5,5,0,0,207,209,5,58,0,0,208,207,1,0,0,0,208,209,1,0,0,0,209,210,1,0,0,0,
210,213,5,53,0,0,211,213,5,6,0,0,212,194,1,0,0,0,212,195,1,0,0,0,212,196,
1,0,0,0,212,201,1,0,0,0,212,206,1,0,0,0,212,211,1,0,0,0,213,15,1,0,0,0,214,
215,5,48,0,0,215,17,1,0,0,0,216,218,5,32,0,0,217,219,5,58,0,0,218,217,1,
0,0,0,218,219,1,0,0,0,219,221,1,0,0,0,220,222,5,53,0,0,221,220,1,0,0,0,221,
222,1,0,0,0,222,226,1,0,0,0,223,226,5,33,0,0,224,226,5,7,0,0,225,216,1,0,
0,0,225,223,1,0,0,0,225,224,1,0,0,0,226,19,1,0,0,0,227,228,7,0,0,0,228,21,
1,0,0,0,229,230,7,1,0,0,230,23,1,0,0,0,231,242,5,40,0,0,232,234,5,58,0,0,
233,232,1,0,0,0,233,234,1,0,0,0,234,238,1,0,0,0,235,239,5,53,0,0,236,239,
5,55,0,0,237,239,3,30,15,0,238,235,1,0,0,0,238,236,1,0,0,0,238,237,1,0,0,
0,239,241,1,0,0,0,240,233,1,0,0,0,241,244,1,0,0,0,242,243,1,0,0,0,242,240,
1,0,0,0,243,250,1,0,0,0,244,242,1,0,0,0,245,250,5,41,0,0,246,250,5,49,0,
0,247,250,5,12,0,0,248,250,5,13,0,0,249,231,1,0,0,0,249,245,1,0,0,0,249,
246,1,0,0,0,249,247,1,0,0,0,249,248,1,0,0,0,250,25,1,0,0,0,251,252,5,14,
0,0,252,27,1,0,0,0,253,254,5,42,0,0,254,255,5,58,0,0,255,259,5,18,0,0,256,
258,5,58,0,0,257,256,1,0,0,0,258,261,1,0,0,0,259,257,1,0,0,0,259,260,1,0,
0,0,260,29,1,0,0,0,261,259,1,0,0,0,262,266,5,15,0,0,263,265,5,58,0,0,264,
263,1,0,0,0,265,268,1,0,0,0,266,264,1,0,0,0,266,267,1,0,0,0,267,303,1,0,
0,0,268,266,1,0,0,0,269,273,5,53,0,0,270,273,5,55,0,0,271,273,3,30,15,0,
272,269,1,0,0,0,272,270,1,0,0,0,272,271,1,0,0,0,273,277,1,0,0,0,274,276,
5,58,0,0,275,274,1,0,0,0,276,279,1,0,0,0,277,275,1,0,0,0,277,278,1,0,0,0,
278,300,1,0,0,0,279,277,1,0,0,0,280,284,5,16,0,0,281,283,5,58,0,0,282,281,
1,0,0,0,283,286,1,0,0,0,284,282,1,0,0,0,284,285,1,0,0,0,285,290,1,0,0,0,
286,284,1,0,0,0,287,291,5,53,0,0,288,291,5,55,0,0,289,291,3,30,15,0,290,
287,1,0,0,0,290,288,1,0,0,0,290,289,1,0,0,0,291,295,1,0,0,0,292,294,5,58,
0,0,293,292,1,0,0,0,294,297,1,0,0,0,295,293,1,0,0,0,295,296,1,0,0,0,296,
299,1,0,0,0,297,295,1,0,0,0,298,280,1,0,0,0,299,302,1,0,0,0,300,298,1,0,
0,0,300,301,1,0,0,0,301,304,1,0,0,0,302,300,1,0,0,0,303,272,1,0,0,0,303,
304,1,0,0,0,304,305,1,0,0,0,305,306,5,17,0,0,306,31,1,0,0,0,307,308,5,43,
0,0,308,309,5,58,0,0,309,313,5,18,0,0,310,312,5,58,0,0,311,310,1,0,0,0,312,
315,1,0,0,0,313,311,1,0,0,0,313,314,1,0,0,0,314,33,1,0,0,0,315,313,1,0,0,
0,56,36,40,51,56,59,63,67,74,78,92,98,104,109,114,118,122,126,130,134,138,
142,146,150,152,156,160,164,168,172,174,178,182,186,190,192,198,203,208,
212,218,221,225,233,238,242,249,259,266,272,277,284,290,295,300,303,313];


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
                            "'LNT'", "'$FUN'", "'$END'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, "TYPE", "LDV", "ADD", "MUL", "SUB", 
                             "DIV", "NEG", "EQ", "GT", "GTE", "LT", "LTE", 
                             "RET", "HLT", "APP", "PRN", "BLD", "BST", "LDF", 
                             "INI", "STK", "SRK", "LIN", "LTK", "CST", "INO", 
                             "AND", "OR", "XOR", "NOT", "SWP", "LNT", "FUN", 
                             "END", "LABEL_IDENTIFIER", "NUMBER", "ID", 
                             "STRING", "VALUE", "COMMENT", "ES", "WS", "NL" ];
    static ruleNames = [ "program", "functionDef", "statement", "instruction", 
                         "loadInstr", "arithInstr", "logicalInst", "controlInstr", 
                         "stackInstr", "funcInstr", "comparisonInstr", "stringInstr", 
                         "listInstr", "signInstr", "castInstr", "array", 
                         "inputString" ];

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
	        this.state = 40;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4260921336) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 524287) !== 0)) {
	            this.state = 34;
	            this.statement();
	            this.state = 36;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===60) {
	                this.state = 35;
	                this.match(biesVMParser.NL);
	            }

	            this.state = 42;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 43;
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
	        this.state = 45;
	        this.match(biesVMParser.FUN);
	        this.state = 46;
	        this.match(biesVMParser.ES);
	        this.state = 47;
	        this.match(biesVMParser.LABEL_IDENTIFIER);
	        this.state = 51;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        if(la_===1) {
	            this.state = 48;
	            this.match(biesVMParser.ES);
	            this.state = 49;
	            this.match(biesVMParser.T__0);
	            this.state = 50;
	            this.match(biesVMParser.NUMBER);

	        }
	        this.state = 56;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===58) {
	            this.state = 53;
	            this.match(biesVMParser.ES);
	            this.state = 54;
	            this.match(biesVMParser.T__1);
	            this.state = 55;
	            this.match(biesVMParser.LABEL_IDENTIFIER);
	        }

	        this.state = 59;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===60) {
	            this.state = 58;
	            this.match(biesVMParser.NL);
	        }

	        this.state = 67;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4260921336) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 524287) !== 0)) {
	            this.state = 61;
	            this.statement();
	            this.state = 63;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===60) {
	                this.state = 62;
	                this.match(biesVMParser.NL);
	            }

	            this.state = 69;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 70;
	        this.match(biesVMParser.END);
	        this.state = 71;
	        this.match(biesVMParser.ES);
	        this.state = 72;
	        this.match(biesVMParser.LABEL_IDENTIFIER);
	        this.state = 74;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        if(la_===1) {
	            this.state = 73;
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
	        this.state = 78;
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
	            this.enterOuterAlt(localctx, 1);
	            this.state = 76;
	            this.instruction();
	            break;
	        case 50:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 77;
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
	        this.state = 92;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 19:
	        case 34:
	        case 35:
	        case 36:
	        case 37:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 80;
	            this.loadInstr();
	            break;
	        case 20:
	        case 21:
	        case 22:
	        case 23:
	        case 24:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 81;
	            this.arithInstr();
	            break;
	        case 3:
	        case 4:
	        case 5:
	        case 6:
	        case 30:
	        case 31:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 82;
	            this.controlInstr();
	            break;
	        case 7:
	        case 32:
	        case 33:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 83;
	            this.funcInstr();
	            break;
	        case 9:
	        case 10:
	        case 11:
	        case 38:
	        case 39:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 84;
	            this.stringInstr();
	            break;
	        case 8:
	        case 26:
	        case 27:
	        case 28:
	        case 29:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 85;
	            this.comparisonInstr();
	            break;
	        case 44:
	        case 45:
	        case 46:
	        case 47:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 86;
	            this.logicalInst();
	            break;
	        case 12:
	        case 13:
	        case 40:
	        case 41:
	        case 49:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 87;
	            this.listInstr();
	            break;
	        case 14:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 88;
	            this.signInstr();
	            break;
	        case 43:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 89;
	            this.inputString();
	            break;
	        case 48:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 90;
	            this.stackInstr();
	            break;
	        case 42:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 91;
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
	    this.enterRule(localctx, 8, biesVMParser.RULE_loadInstr);
	    var _la = 0;
	    try {
	        this.state = 152;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 19:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 94;
	            this.match(biesVMParser.LDV);
	            this.state = 98;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,10,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 95;
	                    this.match(biesVMParser.ES); 
	                }
	                this.state = 100;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,10,this._ctx);
	            }

	            this.state = 104;
	            this._errHandler.sync(this);
	            switch (this._input.LA(1)) {
	            case 53:
	            	this.state = 101;
	            	this.match(biesVMParser.NUMBER);
	            	break;
	            case 55:
	            	this.state = 102;
	            	this.match(biesVMParser.STRING);
	            	break;
	            case 15:
	            	this.state = 103;
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
	            case 58:
	            case 60:
	            	break;
	            default:
	            	break;
	            }
	            this.state = 109;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===58) {
	                this.state = 106;
	                this.match(biesVMParser.ES);
	                this.state = 111;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            break;
	        case 34:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 112;
	            this.match(biesVMParser.BLD);
	            this.state = 114;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===58) {
	                this.state = 113;
	                this.match(biesVMParser.ES);
	            }

	            this.state = 116;
	            this.match(biesVMParser.NUMBER);
	            this.state = 118;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===58) {
	                this.state = 117;
	                this.match(biesVMParser.ES);
	            }

	            this.state = 120;
	            this.match(biesVMParser.NUMBER);
	            this.state = 122;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===58) {
	                this.state = 121;
	                this.match(biesVMParser.ES);
	            }

	            break;
	        case 35:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 124;
	            this.match(biesVMParser.BST);
	            this.state = 126;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===58) {
	                this.state = 125;
	                this.match(biesVMParser.ES);
	            }

	            this.state = 128;
	            this.match(biesVMParser.NUMBER);
	            this.state = 130;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===58) {
	                this.state = 129;
	                this.match(biesVMParser.ES);
	            }

	            this.state = 132;
	            this.match(biesVMParser.NUMBER);
	            this.state = 134;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===58) {
	                this.state = 133;
	                this.match(biesVMParser.ES);
	            }

	            break;
	        case 36:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 136;
	            this.match(biesVMParser.LDF);
	            this.state = 138;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===58) {
	                this.state = 137;
	                this.match(biesVMParser.ES);
	            }

	            this.state = 140;
	            this.match(biesVMParser.LABEL_IDENTIFIER);
	            this.state = 142;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===58) {
	                this.state = 141;
	                this.match(biesVMParser.ES);
	            }

	            break;
	        case 37:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 144;
	            this.match(biesVMParser.INI);
	            this.state = 146;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===58) {
	                this.state = 145;
	                this.match(biesVMParser.ES);
	            }

	            this.state = 148;
	            this.match(biesVMParser.LABEL_IDENTIFIER);
	            this.state = 150;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===58) {
	                this.state = 149;
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
	        this.state = 174;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 20:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 154;
	            this.match(biesVMParser.ADD);
	            this.state = 156;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===58) {
	                this.state = 155;
	                this.match(biesVMParser.ES);
	            }

	            break;
	        case 21:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 158;
	            this.match(biesVMParser.MUL);
	            this.state = 160;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===58) {
	                this.state = 159;
	                this.match(biesVMParser.ES);
	            }

	            break;
	        case 22:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 162;
	            this.match(biesVMParser.SUB);
	            this.state = 164;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===58) {
	                this.state = 163;
	                this.match(biesVMParser.ES);
	            }

	            break;
	        case 23:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 166;
	            this.match(biesVMParser.DIV);
	            this.state = 168;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===58) {
	                this.state = 167;
	                this.match(biesVMParser.ES);
	            }

	            break;
	        case 24:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 170;
	            this.match(biesVMParser.NEG);
	            this.state = 172;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===58) {
	                this.state = 171;
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
	        this.state = 192;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 44:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 176;
	            this.match(biesVMParser.AND);
	            this.state = 178;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===58) {
	                this.state = 177;
	                this.match(biesVMParser.ES);
	            }

	            break;
	        case 47:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 180;
	            this.match(biesVMParser.NOT);
	            this.state = 182;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===58) {
	                this.state = 181;
	                this.match(biesVMParser.ES);
	            }

	            break;
	        case 45:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 184;
	            this.match(biesVMParser.OR);
	            this.state = 186;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===58) {
	                this.state = 185;
	                this.match(biesVMParser.ES);
	            }

	            break;
	        case 46:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 188;
	            this.match(biesVMParser.XOR);
	            this.state = 190;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===58) {
	                this.state = 189;
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
	        this.state = 212;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 30:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 194;
	            this.match(biesVMParser.RET);
	            break;
	        case 31:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 195;
	            this.match(biesVMParser.HLT);
	            break;
	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 196;
	            this.match(biesVMParser.T__2);
	            this.state = 198;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===58) {
	                this.state = 197;
	                this.match(biesVMParser.ES);
	            }

	            this.state = 200;
	            this.match(biesVMParser.NUMBER);
	            break;
	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 201;
	            this.match(biesVMParser.T__3);
	            this.state = 203;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===58) {
	                this.state = 202;
	                this.match(biesVMParser.ES);
	            }

	            this.state = 205;
	            this.match(biesVMParser.NUMBER);
	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 206;
	            this.match(biesVMParser.T__4);
	            this.state = 208;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===58) {
	                this.state = 207;
	                this.match(biesVMParser.ES);
	            }

	            this.state = 210;
	            this.match(biesVMParser.NUMBER);
	            break;
	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 211;
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
	        this.state = 214;
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
	        this.state = 225;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 32:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 216;
	            this.match(biesVMParser.APP);
	            this.state = 218;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===58) {
	                this.state = 217;
	                this.match(biesVMParser.ES);
	            }

	            this.state = 221;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===53) {
	                this.state = 220;
	                this.match(biesVMParser.NUMBER);
	            }

	            break;
	        case 33:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 223;
	            this.match(biesVMParser.PRN);
	            break;
	        case 7:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 224;
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
	        this.state = 227;
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
	        this.state = 229;
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
	        this.state = 249;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 40:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 231;
	            this.match(biesVMParser.LIN);
	            this.state = 242;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,44,this._ctx)
	            while(_alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1+1) {
	                    this.state = 233;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    if(_la===58) {
	                        this.state = 232;
	                        this.match(biesVMParser.ES);
	                    }

	                    this.state = 238;
	                    this._errHandler.sync(this);
	                    switch(this._input.LA(1)) {
	                    case 53:
	                        this.state = 235;
	                        this.match(biesVMParser.NUMBER);
	                        break;
	                    case 55:
	                        this.state = 236;
	                        this.match(biesVMParser.STRING);
	                        break;
	                    case 15:
	                        this.state = 237;
	                        this.array();
	                        break;
	                    default:
	                        throw new antlr4.error.NoViableAltException(this);
	                    } 
	                }
	                this.state = 244;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,44,this._ctx);
	            }

	            break;
	        case 41:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 245;
	            this.match(biesVMParser.LTK);
	            break;
	        case 49:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 246;
	            this.match(biesVMParser.LNT);
	            break;
	        case 12:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 247;
	            this.match(biesVMParser.T__11);
	            break;
	        case 13:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 248;
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
	        this.state = 251;
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



	castInstr() {
	    let localctx = new CastInstrContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, biesVMParser.RULE_castInstr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 253;
	        this.match(biesVMParser.CST);
	        this.state = 254;
	        this.match(biesVMParser.ES);
	        this.state = 255;
	        this.match(biesVMParser.TYPE);
	        this.state = 259;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===58) {
	            this.state = 256;
	            this.match(biesVMParser.ES);
	            this.state = 261;
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
	    this.enterRule(localctx, 30, biesVMParser.RULE_array);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 262;
	        this.match(biesVMParser.T__14);
	        this.state = 266;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===58) {
	            this.state = 263;
	            this.match(biesVMParser.ES);
	            this.state = 268;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 303;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===15 || _la===53 || _la===55) {
	            this.state = 272;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 53:
	                this.state = 269;
	                this.match(biesVMParser.NUMBER);
	                break;
	            case 55:
	                this.state = 270;
	                this.match(biesVMParser.STRING);
	                break;
	            case 15:
	                this.state = 271;
	                this.array();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 277;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===58) {
	                this.state = 274;
	                this.match(biesVMParser.ES);
	                this.state = 279;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 300;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===16) {
	                this.state = 280;
	                this.match(biesVMParser.T__15);
	                this.state = 284;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===58) {
	                    this.state = 281;
	                    this.match(biesVMParser.ES);
	                    this.state = 286;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	                this.state = 290;
	                this._errHandler.sync(this);
	                switch(this._input.LA(1)) {
	                case 53:
	                    this.state = 287;
	                    this.match(biesVMParser.NUMBER);
	                    break;
	                case 55:
	                    this.state = 288;
	                    this.match(biesVMParser.STRING);
	                    break;
	                case 15:
	                    this.state = 289;
	                    this.array();
	                    break;
	                default:
	                    throw new antlr4.error.NoViableAltException(this);
	                }
	                this.state = 295;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===58) {
	                    this.state = 292;
	                    this.match(biesVMParser.ES);
	                    this.state = 297;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	                this.state = 302;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 305;
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
	    this.enterRule(localctx, 32, biesVMParser.RULE_inputString);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 307;
	        this.match(biesVMParser.INO);
	        this.state = 308;
	        this.match(biesVMParser.ES);
	        this.state = 309;
	        this.match(biesVMParser.TYPE);
	        this.state = 313;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===58) {
	            this.state = 310;
	            this.match(biesVMParser.ES);
	            this.state = 315;
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
biesVMParser.FUN = 50;
biesVMParser.END = 51;
biesVMParser.LABEL_IDENTIFIER = 52;
biesVMParser.NUMBER = 53;
biesVMParser.ID = 54;
biesVMParser.STRING = 55;
biesVMParser.VALUE = 56;
biesVMParser.COMMENT = 57;
biesVMParser.ES = 58;
biesVMParser.WS = 59;
biesVMParser.NL = 60;

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
biesVMParser.RULE_castInstr = 14;
biesVMParser.RULE_array = 15;
biesVMParser.RULE_inputString = 16;

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

	NUMBER() {
	    return this.getToken(biesVMParser.NUMBER, 0);
	};

	ES() {
	    return this.getToken(biesVMParser.ES, 0);
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
biesVMParser.CastInstrContext = CastInstrContext; 
biesVMParser.ArrayContext = ArrayContext; 
biesVMParser.InputStringContext = InputStringContext; 
