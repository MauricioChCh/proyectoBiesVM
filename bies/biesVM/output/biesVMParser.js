// Generated from ./grammar/biesVM.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import biesVMVisitor from './biesVMVisitor.js';

const serializedATN = [4,1,62,340,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,1,0,1,0,3,0,
41,8,0,5,0,43,8,0,10,0,12,0,46,9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,3,1,56,
8,1,1,1,1,1,1,1,3,1,61,8,1,1,1,3,1,64,8,1,1,1,1,1,3,1,68,8,1,5,1,70,8,1,
10,1,12,1,73,9,1,1,1,1,1,1,1,1,1,3,1,79,8,1,1,2,1,2,3,2,83,8,2,1,3,1,3,1,
3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,99,8,3,1,4,1,4,3,4,103,
8,4,1,4,1,4,3,4,107,8,4,1,5,1,5,5,5,111,8,5,10,5,12,5,114,9,5,1,5,1,5,1,
5,3,5,119,8,5,1,5,5,5,122,8,5,10,5,12,5,125,9,5,1,5,1,5,3,5,129,8,5,1,5,
1,5,3,5,133,8,5,1,5,1,5,3,5,137,8,5,1,5,1,5,3,5,141,8,5,1,5,1,5,3,5,145,
8,5,1,5,1,5,3,5,149,8,5,1,5,1,5,3,5,153,8,5,1,5,1,5,3,5,157,8,5,1,5,1,5,
3,5,161,8,5,1,5,1,5,3,5,165,8,5,3,5,167,8,5,1,6,1,6,3,6,171,8,6,1,6,1,6,
3,6,175,8,6,1,6,1,6,3,6,179,8,6,1,6,1,6,3,6,183,8,6,1,6,1,6,3,6,187,8,6,
1,6,1,6,3,6,191,8,6,3,6,193,8,6,1,7,1,7,3,7,197,8,7,1,7,1,7,3,7,201,8,7,
1,7,1,7,3,7,205,8,7,1,7,1,7,3,7,209,8,7,3,7,211,8,7,1,8,1,8,1,8,3,8,216,
8,8,1,8,1,8,3,8,220,8,8,1,8,1,8,1,8,3,8,225,8,8,1,8,1,8,1,8,3,8,230,8,8,
1,8,1,8,3,8,234,8,8,1,9,1,9,1,10,1,10,3,10,240,8,10,1,10,3,10,243,8,10,1,
10,1,10,3,10,247,8,10,1,11,1,11,1,12,1,12,1,13,1,13,3,13,255,8,13,1,13,1,
13,1,13,3,13,260,8,13,5,13,262,8,13,10,13,12,13,265,9,13,1,13,1,13,1,13,
1,13,3,13,271,8,13,1,14,1,14,1,15,1,15,1,16,1,16,1,16,1,16,5,16,281,8,16,
10,16,12,16,284,9,16,1,17,1,17,5,17,288,8,17,10,17,12,17,291,9,17,1,17,1,
17,1,17,3,17,296,8,17,1,17,5,17,299,8,17,10,17,12,17,302,9,17,1,17,1,17,
5,17,306,8,17,10,17,12,17,309,9,17,1,17,1,17,1,17,3,17,314,8,17,1,17,5,17,
317,8,17,10,17,12,17,320,9,17,5,17,322,8,17,10,17,12,17,325,9,17,3,17,327,
8,17,1,17,1,17,1,18,1,18,1,18,1,18,5,18,335,8,18,10,18,12,18,338,9,18,1,
18,1,263,0,19,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,0,2,2,
0,8,8,26,29,2,0,9,11,38,39,414,0,44,1,0,0,0,2,49,1,0,0,0,4,82,1,0,0,0,6,
98,1,0,0,0,8,100,1,0,0,0,10,166,1,0,0,0,12,192,1,0,0,0,14,210,1,0,0,0,16,
233,1,0,0,0,18,235,1,0,0,0,20,246,1,0,0,0,22,248,1,0,0,0,24,250,1,0,0,0,
26,270,1,0,0,0,28,272,1,0,0,0,30,274,1,0,0,0,32,276,1,0,0,0,34,285,1,0,0,
0,36,330,1,0,0,0,38,40,3,4,2,0,39,41,5,62,0,0,40,39,1,0,0,0,40,41,1,0,0,
0,41,43,1,0,0,0,42,38,1,0,0,0,43,46,1,0,0,0,44,42,1,0,0,0,44,45,1,0,0,0,
45,47,1,0,0,0,46,44,1,0,0,0,47,48,5,0,0,1,48,1,1,0,0,0,49,50,5,52,0,0,50,
51,5,60,0,0,51,55,5,54,0,0,52,53,5,60,0,0,53,54,5,1,0,0,54,56,5,55,0,0,55,
52,1,0,0,0,55,56,1,0,0,0,56,60,1,0,0,0,57,58,5,60,0,0,58,59,5,2,0,0,59,61,
5,54,0,0,60,57,1,0,0,0,60,61,1,0,0,0,61,63,1,0,0,0,62,64,5,62,0,0,63,62,
1,0,0,0,63,64,1,0,0,0,64,71,1,0,0,0,65,67,3,4,2,0,66,68,5,62,0,0,67,66,1,
0,0,0,67,68,1,0,0,0,68,70,1,0,0,0,69,65,1,0,0,0,70,73,1,0,0,0,71,69,1,0,
0,0,71,72,1,0,0,0,72,74,1,0,0,0,73,71,1,0,0,0,74,75,5,53,0,0,75,76,5,60,
0,0,76,78,5,54,0,0,77,79,5,62,0,0,78,77,1,0,0,0,78,79,1,0,0,0,79,3,1,0,0,
0,80,83,3,6,3,0,81,83,3,2,1,0,82,80,1,0,0,0,82,81,1,0,0,0,83,5,1,0,0,0,84,
99,3,10,5,0,85,99,3,12,6,0,86,99,3,16,8,0,87,99,3,20,10,0,88,99,3,24,12,
0,89,99,3,22,11,0,90,99,3,14,7,0,91,99,3,26,13,0,92,99,3,28,14,0,93,99,3,
36,18,0,94,99,3,18,9,0,95,99,3,32,16,0,96,99,3,30,15,0,97,99,3,8,4,0,98,
84,1,0,0,0,98,85,1,0,0,0,98,86,1,0,0,0,98,87,1,0,0,0,98,88,1,0,0,0,98,89,
1,0,0,0,98,90,1,0,0,0,98,91,1,0,0,0,98,92,1,0,0,0,98,93,1,0,0,0,98,94,1,
0,0,0,98,95,1,0,0,0,98,96,1,0,0,0,98,97,1,0,0,0,99,7,1,0,0,0,100,102,5,37,
0,0,101,103,5,60,0,0,102,101,1,0,0,0,102,103,1,0,0,0,103,104,1,0,0,0,104,
106,5,54,0,0,105,107,5,60,0,0,106,105,1,0,0,0,106,107,1,0,0,0,107,9,1,0,
0,0,108,112,5,19,0,0,109,111,5,60,0,0,110,109,1,0,0,0,111,114,1,0,0,0,112,
110,1,0,0,0,112,113,1,0,0,0,113,118,1,0,0,0,114,112,1,0,0,0,115,119,5,55,
0,0,116,119,5,57,0,0,117,119,3,34,17,0,118,115,1,0,0,0,118,116,1,0,0,0,118,
117,1,0,0,0,118,119,1,0,0,0,119,123,1,0,0,0,120,122,5,60,0,0,121,120,1,0,
0,0,122,125,1,0,0,0,123,121,1,0,0,0,123,124,1,0,0,0,124,167,1,0,0,0,125,
123,1,0,0,0,126,128,5,34,0,0,127,129,5,60,0,0,128,127,1,0,0,0,128,129,1,
0,0,0,129,130,1,0,0,0,130,132,5,55,0,0,131,133,5,60,0,0,132,131,1,0,0,0,
132,133,1,0,0,0,133,134,1,0,0,0,134,136,5,55,0,0,135,137,5,60,0,0,136,135,
1,0,0,0,136,137,1,0,0,0,137,167,1,0,0,0,138,140,5,35,0,0,139,141,5,60,0,
0,140,139,1,0,0,0,140,141,1,0,0,0,141,142,1,0,0,0,142,144,5,55,0,0,143,145,
5,60,0,0,144,143,1,0,0,0,144,145,1,0,0,0,145,146,1,0,0,0,146,148,5,55,0,
0,147,149,5,60,0,0,148,147,1,0,0,0,148,149,1,0,0,0,149,167,1,0,0,0,150,152,
5,36,0,0,151,153,5,60,0,0,152,151,1,0,0,0,152,153,1,0,0,0,153,154,1,0,0,
0,154,156,5,54,0,0,155,157,5,60,0,0,156,155,1,0,0,0,156,157,1,0,0,0,157,
167,1,0,0,0,158,160,5,37,0,0,159,161,5,60,0,0,160,159,1,0,0,0,160,161,1,
0,0,0,161,162,1,0,0,0,162,164,5,54,0,0,163,165,5,60,0,0,164,163,1,0,0,0,
164,165,1,0,0,0,165,167,1,0,0,0,166,108,1,0,0,0,166,126,1,0,0,0,166,138,
1,0,0,0,166,150,1,0,0,0,166,158,1,0,0,0,167,11,1,0,0,0,168,170,5,20,0,0,
169,171,5,60,0,0,170,169,1,0,0,0,170,171,1,0,0,0,171,193,1,0,0,0,172,174,
5,21,0,0,173,175,5,60,0,0,174,173,1,0,0,0,174,175,1,0,0,0,175,193,1,0,0,
0,176,178,5,22,0,0,177,179,5,60,0,0,178,177,1,0,0,0,178,179,1,0,0,0,179,
193,1,0,0,0,180,182,5,23,0,0,181,183,5,60,0,0,182,181,1,0,0,0,182,183,1,
0,0,0,183,193,1,0,0,0,184,186,5,24,0,0,185,187,5,60,0,0,186,185,1,0,0,0,
186,187,1,0,0,0,187,193,1,0,0,0,188,190,5,51,0,0,189,191,5,60,0,0,190,189,
1,0,0,0,190,191,1,0,0,0,191,193,1,0,0,0,192,168,1,0,0,0,192,172,1,0,0,0,
192,176,1,0,0,0,192,180,1,0,0,0,192,184,1,0,0,0,192,188,1,0,0,0,193,13,1,
0,0,0,194,196,5,44,0,0,195,197,5,60,0,0,196,195,1,0,0,0,196,197,1,0,0,0,
197,211,1,0,0,0,198,200,5,47,0,0,199,201,5,60,0,0,200,199,1,0,0,0,200,201,
1,0,0,0,201,211,1,0,0,0,202,204,5,45,0,0,203,205,5,60,0,0,204,203,1,0,0,
0,204,205,1,0,0,0,205,211,1,0,0,0,206,208,5,46,0,0,207,209,5,60,0,0,208,
207,1,0,0,0,208,209,1,0,0,0,209,211,1,0,0,0,210,194,1,0,0,0,210,198,1,0,
0,0,210,202,1,0,0,0,210,206,1,0,0,0,211,15,1,0,0,0,212,234,5,30,0,0,213,
215,5,31,0,0,214,216,5,60,0,0,215,214,1,0,0,0,215,216,1,0,0,0,216,234,1,
0,0,0,217,219,5,3,0,0,218,220,5,60,0,0,219,218,1,0,0,0,219,220,1,0,0,0,220,
221,1,0,0,0,221,234,5,55,0,0,222,224,5,4,0,0,223,225,5,60,0,0,224,223,1,
0,0,0,224,225,1,0,0,0,225,226,1,0,0,0,226,234,5,55,0,0,227,229,5,5,0,0,228,
230,5,60,0,0,229,228,1,0,0,0,229,230,1,0,0,0,230,231,1,0,0,0,231,234,5,55,
0,0,232,234,5,6,0,0,233,212,1,0,0,0,233,213,1,0,0,0,233,217,1,0,0,0,233,
222,1,0,0,0,233,227,1,0,0,0,233,232,1,0,0,0,234,17,1,0,0,0,235,236,5,48,
0,0,236,19,1,0,0,0,237,239,5,32,0,0,238,240,5,60,0,0,239,238,1,0,0,0,239,
240,1,0,0,0,240,242,1,0,0,0,241,243,5,55,0,0,242,241,1,0,0,0,242,243,1,0,
0,0,243,247,1,0,0,0,244,247,5,33,0,0,245,247,5,7,0,0,246,237,1,0,0,0,246,
244,1,0,0,0,246,245,1,0,0,0,247,21,1,0,0,0,248,249,7,0,0,0,249,23,1,0,0,
0,250,251,7,1,0,0,251,25,1,0,0,0,252,263,5,40,0,0,253,255,5,60,0,0,254,253,
1,0,0,0,254,255,1,0,0,0,255,259,1,0,0,0,256,260,5,55,0,0,257,260,5,57,0,
0,258,260,3,34,17,0,259,256,1,0,0,0,259,257,1,0,0,0,259,258,1,0,0,0,260,
262,1,0,0,0,261,254,1,0,0,0,262,265,1,0,0,0,263,264,1,0,0,0,263,261,1,0,
0,0,264,271,1,0,0,0,265,263,1,0,0,0,266,271,5,41,0,0,267,271,5,49,0,0,268,
271,5,12,0,0,269,271,5,13,0,0,270,252,1,0,0,0,270,266,1,0,0,0,270,267,1,
0,0,0,270,268,1,0,0,0,270,269,1,0,0,0,271,27,1,0,0,0,272,273,5,14,0,0,273,
29,1,0,0,0,274,275,5,50,0,0,275,31,1,0,0,0,276,277,5,42,0,0,277,278,5,60,
0,0,278,282,5,18,0,0,279,281,5,60,0,0,280,279,1,0,0,0,281,284,1,0,0,0,282,
280,1,0,0,0,282,283,1,0,0,0,283,33,1,0,0,0,284,282,1,0,0,0,285,289,5,15,
0,0,286,288,5,60,0,0,287,286,1,0,0,0,288,291,1,0,0,0,289,287,1,0,0,0,289,
290,1,0,0,0,290,326,1,0,0,0,291,289,1,0,0,0,292,296,5,55,0,0,293,296,5,57,
0,0,294,296,3,34,17,0,295,292,1,0,0,0,295,293,1,0,0,0,295,294,1,0,0,0,296,
300,1,0,0,0,297,299,5,60,0,0,298,297,1,0,0,0,299,302,1,0,0,0,300,298,1,0,
0,0,300,301,1,0,0,0,301,323,1,0,0,0,302,300,1,0,0,0,303,307,5,16,0,0,304,
306,5,60,0,0,305,304,1,0,0,0,306,309,1,0,0,0,307,305,1,0,0,0,307,308,1,0,
0,0,308,313,1,0,0,0,309,307,1,0,0,0,310,314,5,55,0,0,311,314,5,57,0,0,312,
314,3,34,17,0,313,310,1,0,0,0,313,311,1,0,0,0,313,312,1,0,0,0,314,318,1,
0,0,0,315,317,5,60,0,0,316,315,1,0,0,0,317,320,1,0,0,0,318,316,1,0,0,0,318,
319,1,0,0,0,319,322,1,0,0,0,320,318,1,0,0,0,321,303,1,0,0,0,322,325,1,0,
0,0,323,321,1,0,0,0,323,324,1,0,0,0,324,327,1,0,0,0,325,323,1,0,0,0,326,
295,1,0,0,0,326,327,1,0,0,0,327,328,1,0,0,0,328,329,5,17,0,0,329,35,1,0,
0,0,330,331,5,43,0,0,331,332,5,60,0,0,332,336,5,18,0,0,333,335,5,60,0,0,
334,333,1,0,0,0,335,338,1,0,0,0,336,334,1,0,0,0,336,337,1,0,0,0,337,37,1,
0,0,0,338,336,1,0,0,0,60,40,44,55,60,63,67,71,78,82,98,102,106,112,118,123,
128,132,136,140,144,148,152,156,160,164,166,170,174,178,182,186,190,192,
196,200,204,208,210,215,219,224,229,233,239,242,246,254,259,263,270,282,
289,295,300,307,313,318,323,326,336];


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
                         "initializeInstr", "loadInstr", "arithInstr", "logicalInst", 
                         "controlInstr", "stackInstr", "funcInstr", "comparisonInstr", 
                         "stringInstr", "listInstr", "signInstr", "lengthInstr", 
                         "castInstr", "array", "inputString" ];

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
	        this.state = 44;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4260921336) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 2097151) !== 0)) {
	            this.state = 38;
	            this.statement();
	            this.state = 40;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===62) {
	                this.state = 39;
	                this.match(biesVMParser.NL);
	            }

	            this.state = 46;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 47;
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
	        this.state = 49;
	        this.match(biesVMParser.FUN);
	        this.state = 50;
	        this.match(biesVMParser.ES);
	        this.state = 51;
	        this.match(biesVMParser.LABEL_IDENTIFIER);
	        this.state = 55;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        if(la_===1) {
	            this.state = 52;
	            this.match(biesVMParser.ES);
	            this.state = 53;
	            this.match(biesVMParser.T__0);
	            this.state = 54;
	            this.match(biesVMParser.NUMBER);

	        }
	        this.state = 60;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===60) {
	            this.state = 57;
	            this.match(biesVMParser.ES);
	            this.state = 58;
	            this.match(biesVMParser.T__1);
	            this.state = 59;
	            this.match(biesVMParser.LABEL_IDENTIFIER);
	        }

	        this.state = 63;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===62) {
	            this.state = 62;
	            this.match(biesVMParser.NL);
	        }

	        this.state = 71;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4260921336) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 2097151) !== 0)) {
	            this.state = 65;
	            this.statement();
	            this.state = 67;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===62) {
	                this.state = 66;
	                this.match(biesVMParser.NL);
	            }

	            this.state = 73;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 74;
	        this.match(biesVMParser.END);
	        this.state = 75;
	        this.match(biesVMParser.ES);
	        this.state = 76;
	        this.match(biesVMParser.LABEL_IDENTIFIER);
	        this.state = 78;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        if(la_===1) {
	            this.state = 77;
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
	        this.state = 82;
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
	            this.state = 80;
	            this.instruction();
	            break;
	        case 52:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 81;
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
	        this.state = 98;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 84;
	            this.loadInstr();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 85;
	            this.arithInstr();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 86;
	            this.controlInstr();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 87;
	            this.funcInstr();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 88;
	            this.stringInstr();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 89;
	            this.comparisonInstr();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 90;
	            this.logicalInst();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 91;
	            this.listInstr();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 92;
	            this.signInstr();
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 93;
	            this.inputString();
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 94;
	            this.stackInstr();
	            break;

	        case 12:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 95;
	            this.castInstr();
	            break;

	        case 13:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 96;
	            this.lengthInstr();
	            break;

	        case 14:
	            this.enterOuterAlt(localctx, 14);
	            this.state = 97;
	            this.initializeInstr();
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



	initializeInstr() {
	    let localctx = new InitializeInstrContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, biesVMParser.RULE_initializeInstr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 100;
	        this.match(biesVMParser.INI);
	        this.state = 102;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===60) {
	            this.state = 101;
	            this.match(biesVMParser.ES);
	        }

	        this.state = 104;
	        this.match(biesVMParser.LABEL_IDENTIFIER);
	        this.state = 106;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===60) {
	            this.state = 105;
	            this.match(biesVMParser.ES);
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
	    this.enterRule(localctx, 10, biesVMParser.RULE_loadInstr);
	    var _la = 0;
	    try {
	        this.state = 166;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 19:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 108;
	            this.match(biesVMParser.LDV);
	            this.state = 112;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,12,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 109;
	                    this.match(biesVMParser.ES); 
	                }
	                this.state = 114;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,12,this._ctx);
	            }

	            this.state = 118;
	            this._errHandler.sync(this);
	            switch (this._input.LA(1)) {
	            case 55:
	            	this.state = 115;
	            	this.match(biesVMParser.NUMBER);
	            	break;
	            case 57:
	            	this.state = 116;
	            	this.match(biesVMParser.STRING);
	            	break;
	            case 15:
	            	this.state = 117;
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
	            this.state = 123;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===60) {
	                this.state = 120;
	                this.match(biesVMParser.ES);
	                this.state = 125;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            break;
	        case 34:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 126;
	            this.match(biesVMParser.BLD);
	            this.state = 128;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===60) {
	                this.state = 127;
	                this.match(biesVMParser.ES);
	            }

	            this.state = 130;
	            this.match(biesVMParser.NUMBER);
	            this.state = 132;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===60) {
	                this.state = 131;
	                this.match(biesVMParser.ES);
	            }

	            this.state = 134;
	            this.match(biesVMParser.NUMBER);
	            this.state = 136;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===60) {
	                this.state = 135;
	                this.match(biesVMParser.ES);
	            }

	            break;
	        case 35:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 138;
	            this.match(biesVMParser.BST);
	            this.state = 140;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===60) {
	                this.state = 139;
	                this.match(biesVMParser.ES);
	            }

	            this.state = 142;
	            this.match(biesVMParser.NUMBER);
	            this.state = 144;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===60) {
	                this.state = 143;
	                this.match(biesVMParser.ES);
	            }

	            this.state = 146;
	            this.match(biesVMParser.NUMBER);
	            this.state = 148;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===60) {
	                this.state = 147;
	                this.match(biesVMParser.ES);
	            }

	            break;
	        case 36:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 150;
	            this.match(biesVMParser.LDF);
	            this.state = 152;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===60) {
	                this.state = 151;
	                this.match(biesVMParser.ES);
	            }

	            this.state = 154;
	            this.match(biesVMParser.LABEL_IDENTIFIER);
	            this.state = 156;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===60) {
	                this.state = 155;
	                this.match(biesVMParser.ES);
	            }

	            break;
	        case 37:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 158;
	            this.match(biesVMParser.INI);
	            this.state = 160;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===60) {
	                this.state = 159;
	                this.match(biesVMParser.ES);
	            }

	            this.state = 162;
	            this.match(biesVMParser.LABEL_IDENTIFIER);
	            this.state = 164;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===60) {
	                this.state = 163;
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
	    this.enterRule(localctx, 12, biesVMParser.RULE_arithInstr);
	    var _la = 0;
	    try {
	        this.state = 192;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 20:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 168;
	            this.match(biesVMParser.ADD);
	            this.state = 170;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===60) {
	                this.state = 169;
	                this.match(biesVMParser.ES);
	            }

	            break;
	        case 21:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 172;
	            this.match(biesVMParser.MUL);
	            this.state = 174;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===60) {
	                this.state = 173;
	                this.match(biesVMParser.ES);
	            }

	            break;
	        case 22:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 176;
	            this.match(biesVMParser.SUB);
	            this.state = 178;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===60) {
	                this.state = 177;
	                this.match(biesVMParser.ES);
	            }

	            break;
	        case 23:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 180;
	            this.match(biesVMParser.DIV);
	            this.state = 182;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===60) {
	                this.state = 181;
	                this.match(biesVMParser.ES);
	            }

	            break;
	        case 24:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 184;
	            this.match(biesVMParser.NEG);
	            this.state = 186;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===60) {
	                this.state = 185;
	                this.match(biesVMParser.ES);
	            }

	            break;
	        case 51:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 188;
	            this.match(biesVMParser.POW);
	            this.state = 190;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===60) {
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



	logicalInst() {
	    let localctx = new LogicalInstContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, biesVMParser.RULE_logicalInst);
	    var _la = 0;
	    try {
	        this.state = 210;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 44:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 194;
	            this.match(biesVMParser.AND);
	            this.state = 196;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===60) {
	                this.state = 195;
	                this.match(biesVMParser.ES);
	            }

	            break;
	        case 47:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 198;
	            this.match(biesVMParser.NOT);
	            this.state = 200;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===60) {
	                this.state = 199;
	                this.match(biesVMParser.ES);
	            }

	            break;
	        case 45:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 202;
	            this.match(biesVMParser.OR);
	            this.state = 204;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===60) {
	                this.state = 203;
	                this.match(biesVMParser.ES);
	            }

	            break;
	        case 46:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 206;
	            this.match(biesVMParser.XOR);
	            this.state = 208;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===60) {
	                this.state = 207;
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
	    this.enterRule(localctx, 16, biesVMParser.RULE_controlInstr);
	    var _la = 0;
	    try {
	        this.state = 233;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 30:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 212;
	            this.match(biesVMParser.RET);
	            break;
	        case 31:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 213;
	            this.match(biesVMParser.HLT);
	            this.state = 215;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===60) {
	                this.state = 214;
	                this.match(biesVMParser.ES);
	            }

	            break;
	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 217;
	            this.match(biesVMParser.T__2);
	            this.state = 219;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===60) {
	                this.state = 218;
	                this.match(biesVMParser.ES);
	            }

	            this.state = 221;
	            this.match(biesVMParser.NUMBER);
	            break;
	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 222;
	            this.match(biesVMParser.T__3);
	            this.state = 224;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===60) {
	                this.state = 223;
	                this.match(biesVMParser.ES);
	            }

	            this.state = 226;
	            this.match(biesVMParser.NUMBER);
	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 227;
	            this.match(biesVMParser.T__4);
	            this.state = 229;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===60) {
	                this.state = 228;
	                this.match(biesVMParser.ES);
	            }

	            this.state = 231;
	            this.match(biesVMParser.NUMBER);
	            break;
	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 232;
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
	    this.enterRule(localctx, 18, biesVMParser.RULE_stackInstr);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 235;
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
	    this.enterRule(localctx, 20, biesVMParser.RULE_funcInstr);
	    var _la = 0;
	    try {
	        this.state = 246;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 32:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 237;
	            this.match(biesVMParser.APP);
	            this.state = 239;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===60) {
	                this.state = 238;
	                this.match(biesVMParser.ES);
	            }

	            this.state = 242;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===55) {
	                this.state = 241;
	                this.match(biesVMParser.NUMBER);
	            }

	            break;
	        case 33:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 244;
	            this.match(biesVMParser.PRN);
	            break;
	        case 7:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 245;
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
	    this.enterRule(localctx, 22, biesVMParser.RULE_comparisonInstr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 248;
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
	    this.enterRule(localctx, 24, biesVMParser.RULE_stringInstr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 250;
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
	    this.enterRule(localctx, 26, biesVMParser.RULE_listInstr);
	    var _la = 0;
	    try {
	        this.state = 270;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 40:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 252;
	            this.match(biesVMParser.LIN);
	            this.state = 263;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,48,this._ctx)
	            while(_alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1+1) {
	                    this.state = 254;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    if(_la===60) {
	                        this.state = 253;
	                        this.match(biesVMParser.ES);
	                    }

	                    this.state = 259;
	                    this._errHandler.sync(this);
	                    switch(this._input.LA(1)) {
	                    case 55:
	                        this.state = 256;
	                        this.match(biesVMParser.NUMBER);
	                        break;
	                    case 57:
	                        this.state = 257;
	                        this.match(biesVMParser.STRING);
	                        break;
	                    case 15:
	                        this.state = 258;
	                        this.array();
	                        break;
	                    default:
	                        throw new antlr4.error.NoViableAltException(this);
	                    } 
	                }
	                this.state = 265;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,48,this._ctx);
	            }

	            break;
	        case 41:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 266;
	            this.match(biesVMParser.LTK);
	            break;
	        case 49:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 267;
	            this.match(biesVMParser.LNT);
	            break;
	        case 12:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 268;
	            this.match(biesVMParser.T__11);
	            break;
	        case 13:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 269;
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
	    this.enterRule(localctx, 28, biesVMParser.RULE_signInstr);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 272;
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
	    this.enterRule(localctx, 30, biesVMParser.RULE_lengthInstr);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 274;
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
	    this.enterRule(localctx, 32, biesVMParser.RULE_castInstr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 276;
	        this.match(biesVMParser.CST);
	        this.state = 277;
	        this.match(biesVMParser.ES);
	        this.state = 278;
	        this.match(biesVMParser.TYPE);
	        this.state = 282;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===60) {
	            this.state = 279;
	            this.match(biesVMParser.ES);
	            this.state = 284;
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
	    this.enterRule(localctx, 34, biesVMParser.RULE_array);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 285;
	        this.match(biesVMParser.T__14);
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
	        this.state = 326;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===15 || _la===55 || _la===57) {
	            this.state = 295;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 55:
	                this.state = 292;
	                this.match(biesVMParser.NUMBER);
	                break;
	            case 57:
	                this.state = 293;
	                this.match(biesVMParser.STRING);
	                break;
	            case 15:
	                this.state = 294;
	                this.array();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 300;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===60) {
	                this.state = 297;
	                this.match(biesVMParser.ES);
	                this.state = 302;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 323;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===16) {
	                this.state = 303;
	                this.match(biesVMParser.T__15);
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
	                this.state = 313;
	                this._errHandler.sync(this);
	                switch(this._input.LA(1)) {
	                case 55:
	                    this.state = 310;
	                    this.match(biesVMParser.NUMBER);
	                    break;
	                case 57:
	                    this.state = 311;
	                    this.match(biesVMParser.STRING);
	                    break;
	                case 15:
	                    this.state = 312;
	                    this.array();
	                    break;
	                default:
	                    throw new antlr4.error.NoViableAltException(this);
	                }
	                this.state = 318;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===60) {
	                    this.state = 315;
	                    this.match(biesVMParser.ES);
	                    this.state = 320;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	                this.state = 325;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 328;
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
	    this.enterRule(localctx, 36, biesVMParser.RULE_inputString);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 330;
	        this.match(biesVMParser.INO);
	        this.state = 331;
	        this.match(biesVMParser.ES);
	        this.state = 332;
	        this.match(biesVMParser.TYPE);
	        this.state = 336;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===60) {
	            this.state = 333;
	            this.match(biesVMParser.ES);
	            this.state = 338;
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
biesVMParser.RULE_initializeInstr = 4;
biesVMParser.RULE_loadInstr = 5;
biesVMParser.RULE_arithInstr = 6;
biesVMParser.RULE_logicalInst = 7;
biesVMParser.RULE_controlInstr = 8;
biesVMParser.RULE_stackInstr = 9;
biesVMParser.RULE_funcInstr = 10;
biesVMParser.RULE_comparisonInstr = 11;
biesVMParser.RULE_stringInstr = 12;
biesVMParser.RULE_listInstr = 13;
biesVMParser.RULE_signInstr = 14;
biesVMParser.RULE_lengthInstr = 15;
biesVMParser.RULE_castInstr = 16;
biesVMParser.RULE_array = 17;
biesVMParser.RULE_inputString = 18;

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

	initializeInstr() {
	    return this.getTypedRuleContext(InitializeInstrContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesVMVisitor ) {
	        return visitor.visitInstruction(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InitializeInstrContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesVMParser.RULE_initializeInstr;
    }

	INI() {
	    return this.getToken(biesVMParser.INI, 0);
	};

	LABEL_IDENTIFIER() {
	    return this.getToken(biesVMParser.LABEL_IDENTIFIER, 0);
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


	accept(visitor) {
	    if ( visitor instanceof biesVMVisitor ) {
	        return visitor.visitInitializeInstr(this);
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
biesVMParser.InitializeInstrContext = InitializeInstrContext; 
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
