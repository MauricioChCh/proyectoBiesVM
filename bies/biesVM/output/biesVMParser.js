// Generated from /home/mauricio/Documents/Obsidian/2024/Ciclo2/Paradigmas/Evaluaciones/Proyectos/Proyecto 2/proyectoBiesVM/bies/biesVM/grammar/biesVM.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import biesVMVisitor from './biesVMVisitor.js';

const serializedATN = [4,1,65,345,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,1,
0,1,0,3,0,43,8,0,5,0,45,8,0,10,0,12,0,48,9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,
1,1,3,1,58,8,1,1,1,1,1,1,1,3,1,63,8,1,1,1,3,1,66,8,1,1,1,1,1,3,1,70,8,1,
5,1,72,8,1,10,1,12,1,75,9,1,1,1,1,1,1,1,1,1,3,1,81,8,1,1,2,1,2,3,2,85,8,
2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,101,8,3,1,
4,1,4,3,4,105,8,4,1,4,1,4,3,4,109,8,4,1,5,1,5,5,5,113,8,5,10,5,12,5,116,
9,5,1,5,1,5,1,5,1,5,3,5,122,8,5,1,5,5,5,125,8,5,10,5,12,5,128,9,5,1,5,1,
5,3,5,132,8,5,1,5,1,5,3,5,136,8,5,1,5,1,5,3,5,140,8,5,1,5,1,5,3,5,144,8,
5,1,5,1,5,3,5,148,8,5,1,5,1,5,3,5,152,8,5,1,5,1,5,3,5,156,8,5,1,5,1,5,3,
5,160,8,5,1,5,1,5,3,5,164,8,5,1,5,1,5,3,5,168,8,5,3,5,170,8,5,1,6,1,6,3,
6,174,8,6,1,6,1,6,3,6,178,8,6,1,6,1,6,3,6,182,8,6,1,6,1,6,3,6,186,8,6,1,
6,1,6,3,6,190,8,6,1,6,1,6,3,6,194,8,6,3,6,196,8,6,1,7,1,7,3,7,200,8,7,1,
7,1,7,3,7,204,8,7,1,7,1,7,3,7,208,8,7,1,7,1,7,3,7,212,8,7,3,7,214,8,7,1,
8,1,8,1,8,3,8,219,8,8,1,8,1,8,3,8,223,8,8,1,8,1,8,1,8,3,8,228,8,8,1,8,1,
8,1,8,3,8,233,8,8,1,8,1,8,3,8,237,8,8,1,9,1,9,1,10,1,10,3,10,243,8,10,1,
10,3,10,246,8,10,1,10,1,10,3,10,250,8,10,1,11,1,11,1,12,1,12,1,13,1,13,3,
13,258,8,13,1,13,1,13,1,13,3,13,263,8,13,5,13,265,8,13,10,13,12,13,268,9,
13,1,13,1,13,1,13,1,13,3,13,274,8,13,1,14,1,14,1,15,1,15,1,16,1,16,1,17,
1,17,1,17,1,17,5,17,286,8,17,10,17,12,17,289,9,17,1,18,1,18,5,18,293,8,18,
10,18,12,18,296,9,18,1,18,1,18,1,18,3,18,301,8,18,1,18,5,18,304,8,18,10,
18,12,18,307,9,18,1,18,1,18,5,18,311,8,18,10,18,12,18,314,9,18,1,18,1,18,
1,18,3,18,319,8,18,1,18,5,18,322,8,18,10,18,12,18,325,9,18,5,18,327,8,18,
10,18,12,18,330,9,18,3,18,332,8,18,1,18,1,18,1,19,1,19,1,19,1,19,5,19,340,
8,19,10,19,12,19,343,9,19,1,19,1,266,0,20,0,2,4,6,8,10,12,14,16,18,20,22,
24,26,28,30,32,34,36,38,0,3,2,0,8,8,29,32,2,0,9,11,41,42,1,0,14,16,419,0,
46,1,0,0,0,2,51,1,0,0,0,4,84,1,0,0,0,6,100,1,0,0,0,8,102,1,0,0,0,10,169,
1,0,0,0,12,195,1,0,0,0,14,213,1,0,0,0,16,236,1,0,0,0,18,238,1,0,0,0,20,249,
1,0,0,0,22,251,1,0,0,0,24,253,1,0,0,0,26,273,1,0,0,0,28,275,1,0,0,0,30,277,
1,0,0,0,32,279,1,0,0,0,34,281,1,0,0,0,36,290,1,0,0,0,38,335,1,0,0,0,40,42,
3,4,2,0,41,43,5,65,0,0,42,41,1,0,0,0,42,43,1,0,0,0,43,45,1,0,0,0,44,40,1,
0,0,0,45,48,1,0,0,0,46,44,1,0,0,0,46,47,1,0,0,0,47,49,1,0,0,0,48,46,1,0,
0,0,49,50,5,0,0,1,50,1,1,0,0,0,51,52,5,55,0,0,52,53,5,63,0,0,53,57,5,57,
0,0,54,55,5,63,0,0,55,56,5,1,0,0,56,58,5,58,0,0,57,54,1,0,0,0,57,58,1,0,
0,0,58,62,1,0,0,0,59,60,5,63,0,0,60,61,5,2,0,0,61,63,5,57,0,0,62,59,1,0,
0,0,62,63,1,0,0,0,63,65,1,0,0,0,64,66,5,65,0,0,65,64,1,0,0,0,65,66,1,0,0,
0,66,73,1,0,0,0,67,69,3,4,2,0,68,70,5,65,0,0,69,68,1,0,0,0,69,70,1,0,0,0,
70,72,1,0,0,0,71,67,1,0,0,0,72,75,1,0,0,0,73,71,1,0,0,0,73,74,1,0,0,0,74,
76,1,0,0,0,75,73,1,0,0,0,76,77,5,56,0,0,77,78,5,63,0,0,78,80,5,57,0,0,79,
81,5,65,0,0,80,79,1,0,0,0,80,81,1,0,0,0,81,3,1,0,0,0,82,85,3,6,3,0,83,85,
3,2,1,0,84,82,1,0,0,0,84,83,1,0,0,0,85,5,1,0,0,0,86,101,3,10,5,0,87,101,
3,12,6,0,88,101,3,16,8,0,89,101,3,20,10,0,90,101,3,24,12,0,91,101,3,22,11,
0,92,101,3,14,7,0,93,101,3,26,13,0,94,101,3,30,15,0,95,101,3,38,19,0,96,
101,3,18,9,0,97,101,3,34,17,0,98,101,3,32,16,0,99,101,3,8,4,0,100,86,1,0,
0,0,100,87,1,0,0,0,100,88,1,0,0,0,100,89,1,0,0,0,100,90,1,0,0,0,100,91,1,
0,0,0,100,92,1,0,0,0,100,93,1,0,0,0,100,94,1,0,0,0,100,95,1,0,0,0,100,96,
1,0,0,0,100,97,1,0,0,0,100,98,1,0,0,0,100,99,1,0,0,0,101,7,1,0,0,0,102,104,
5,40,0,0,103,105,5,63,0,0,104,103,1,0,0,0,104,105,1,0,0,0,105,106,1,0,0,
0,106,108,5,57,0,0,107,109,5,63,0,0,108,107,1,0,0,0,108,109,1,0,0,0,109,
9,1,0,0,0,110,114,5,22,0,0,111,113,5,63,0,0,112,111,1,0,0,0,113,116,1,0,
0,0,114,112,1,0,0,0,114,115,1,0,0,0,115,121,1,0,0,0,116,114,1,0,0,0,117,
122,5,58,0,0,118,122,5,60,0,0,119,122,3,36,18,0,120,122,3,28,14,0,121,117,
1,0,0,0,121,118,1,0,0,0,121,119,1,0,0,0,121,120,1,0,0,0,121,122,1,0,0,0,
122,126,1,0,0,0,123,125,5,63,0,0,124,123,1,0,0,0,125,128,1,0,0,0,126,124,
1,0,0,0,126,127,1,0,0,0,127,170,1,0,0,0,128,126,1,0,0,0,129,131,5,37,0,0,
130,132,5,63,0,0,131,130,1,0,0,0,131,132,1,0,0,0,132,133,1,0,0,0,133,135,
5,58,0,0,134,136,5,63,0,0,135,134,1,0,0,0,135,136,1,0,0,0,136,137,1,0,0,
0,137,139,5,58,0,0,138,140,5,63,0,0,139,138,1,0,0,0,139,140,1,0,0,0,140,
170,1,0,0,0,141,143,5,38,0,0,142,144,5,63,0,0,143,142,1,0,0,0,143,144,1,
0,0,0,144,145,1,0,0,0,145,147,5,58,0,0,146,148,5,63,0,0,147,146,1,0,0,0,
147,148,1,0,0,0,148,149,1,0,0,0,149,151,5,58,0,0,150,152,5,63,0,0,151,150,
1,0,0,0,151,152,1,0,0,0,152,170,1,0,0,0,153,155,5,39,0,0,154,156,5,63,0,
0,155,154,1,0,0,0,155,156,1,0,0,0,156,157,1,0,0,0,157,159,5,57,0,0,158,160,
5,63,0,0,159,158,1,0,0,0,159,160,1,0,0,0,160,170,1,0,0,0,161,163,5,40,0,
0,162,164,5,63,0,0,163,162,1,0,0,0,163,164,1,0,0,0,164,165,1,0,0,0,165,167,
5,57,0,0,166,168,5,63,0,0,167,166,1,0,0,0,167,168,1,0,0,0,168,170,1,0,0,
0,169,110,1,0,0,0,169,129,1,0,0,0,169,141,1,0,0,0,169,153,1,0,0,0,169,161,
1,0,0,0,170,11,1,0,0,0,171,173,5,23,0,0,172,174,5,63,0,0,173,172,1,0,0,0,
173,174,1,0,0,0,174,196,1,0,0,0,175,177,5,24,0,0,176,178,5,63,0,0,177,176,
1,0,0,0,177,178,1,0,0,0,178,196,1,0,0,0,179,181,5,25,0,0,180,182,5,63,0,
0,181,180,1,0,0,0,181,182,1,0,0,0,182,196,1,0,0,0,183,185,5,26,0,0,184,186,
5,63,0,0,185,184,1,0,0,0,185,186,1,0,0,0,186,196,1,0,0,0,187,189,5,27,0,
0,188,190,5,63,0,0,189,188,1,0,0,0,189,190,1,0,0,0,190,196,1,0,0,0,191,193,
5,54,0,0,192,194,5,63,0,0,193,192,1,0,0,0,193,194,1,0,0,0,194,196,1,0,0,
0,195,171,1,0,0,0,195,175,1,0,0,0,195,179,1,0,0,0,195,183,1,0,0,0,195,187,
1,0,0,0,195,191,1,0,0,0,196,13,1,0,0,0,197,199,5,47,0,0,198,200,5,63,0,0,
199,198,1,0,0,0,199,200,1,0,0,0,200,214,1,0,0,0,201,203,5,50,0,0,202,204,
5,63,0,0,203,202,1,0,0,0,203,204,1,0,0,0,204,214,1,0,0,0,205,207,5,48,0,
0,206,208,5,63,0,0,207,206,1,0,0,0,207,208,1,0,0,0,208,214,1,0,0,0,209,211,
5,49,0,0,210,212,5,63,0,0,211,210,1,0,0,0,211,212,1,0,0,0,212,214,1,0,0,
0,213,197,1,0,0,0,213,201,1,0,0,0,213,205,1,0,0,0,213,209,1,0,0,0,214,15,
1,0,0,0,215,237,5,33,0,0,216,218,5,34,0,0,217,219,5,63,0,0,218,217,1,0,0,
0,218,219,1,0,0,0,219,237,1,0,0,0,220,222,5,3,0,0,221,223,5,63,0,0,222,221,
1,0,0,0,222,223,1,0,0,0,223,224,1,0,0,0,224,237,5,58,0,0,225,227,5,4,0,0,
226,228,5,63,0,0,227,226,1,0,0,0,227,228,1,0,0,0,228,229,1,0,0,0,229,237,
5,58,0,0,230,232,5,5,0,0,231,233,5,63,0,0,232,231,1,0,0,0,232,233,1,0,0,
0,233,234,1,0,0,0,234,237,5,58,0,0,235,237,5,6,0,0,236,215,1,0,0,0,236,216,
1,0,0,0,236,220,1,0,0,0,236,225,1,0,0,0,236,230,1,0,0,0,236,235,1,0,0,0,
237,17,1,0,0,0,238,239,5,51,0,0,239,19,1,0,0,0,240,242,5,35,0,0,241,243,
5,63,0,0,242,241,1,0,0,0,242,243,1,0,0,0,243,245,1,0,0,0,244,246,5,58,0,
0,245,244,1,0,0,0,245,246,1,0,0,0,246,250,1,0,0,0,247,250,5,36,0,0,248,250,
5,7,0,0,249,240,1,0,0,0,249,247,1,0,0,0,249,248,1,0,0,0,250,21,1,0,0,0,251,
252,7,0,0,0,252,23,1,0,0,0,253,254,7,1,0,0,254,25,1,0,0,0,255,266,5,43,0,
0,256,258,5,63,0,0,257,256,1,0,0,0,257,258,1,0,0,0,258,262,1,0,0,0,259,263,
5,58,0,0,260,263,5,60,0,0,261,263,3,36,18,0,262,259,1,0,0,0,262,260,1,0,
0,0,262,261,1,0,0,0,263,265,1,0,0,0,264,257,1,0,0,0,265,268,1,0,0,0,266,
267,1,0,0,0,266,264,1,0,0,0,267,274,1,0,0,0,268,266,1,0,0,0,269,274,5,44,
0,0,270,274,5,52,0,0,271,274,5,12,0,0,272,274,5,13,0,0,273,255,1,0,0,0,273,
269,1,0,0,0,273,270,1,0,0,0,273,271,1,0,0,0,273,272,1,0,0,0,274,27,1,0,0,
0,275,276,7,2,0,0,276,29,1,0,0,0,277,278,5,17,0,0,278,31,1,0,0,0,279,280,
5,53,0,0,280,33,1,0,0,0,281,282,5,45,0,0,282,283,5,63,0,0,283,287,5,21,0,
0,284,286,5,63,0,0,285,284,1,0,0,0,286,289,1,0,0,0,287,285,1,0,0,0,287,288,
1,0,0,0,288,35,1,0,0,0,289,287,1,0,0,0,290,294,5,18,0,0,291,293,5,63,0,0,
292,291,1,0,0,0,293,296,1,0,0,0,294,292,1,0,0,0,294,295,1,0,0,0,295,331,
1,0,0,0,296,294,1,0,0,0,297,301,5,58,0,0,298,301,5,60,0,0,299,301,3,36,18,
0,300,297,1,0,0,0,300,298,1,0,0,0,300,299,1,0,0,0,301,305,1,0,0,0,302,304,
5,63,0,0,303,302,1,0,0,0,304,307,1,0,0,0,305,303,1,0,0,0,305,306,1,0,0,0,
306,328,1,0,0,0,307,305,1,0,0,0,308,312,5,19,0,0,309,311,5,63,0,0,310,309,
1,0,0,0,311,314,1,0,0,0,312,310,1,0,0,0,312,313,1,0,0,0,313,318,1,0,0,0,
314,312,1,0,0,0,315,319,5,58,0,0,316,319,5,60,0,0,317,319,3,36,18,0,318,
315,1,0,0,0,318,316,1,0,0,0,318,317,1,0,0,0,319,323,1,0,0,0,320,322,5,63,
0,0,321,320,1,0,0,0,322,325,1,0,0,0,323,321,1,0,0,0,323,324,1,0,0,0,324,
327,1,0,0,0,325,323,1,0,0,0,326,308,1,0,0,0,327,330,1,0,0,0,328,326,1,0,
0,0,328,329,1,0,0,0,329,332,1,0,0,0,330,328,1,0,0,0,331,300,1,0,0,0,331,
332,1,0,0,0,332,333,1,0,0,0,333,334,5,20,0,0,334,37,1,0,0,0,335,336,5,46,
0,0,336,337,5,63,0,0,337,341,5,21,0,0,338,340,5,63,0,0,339,338,1,0,0,0,340,
343,1,0,0,0,341,339,1,0,0,0,341,342,1,0,0,0,342,39,1,0,0,0,343,341,1,0,0,
0,60,42,46,57,62,65,69,73,80,84,100,104,108,114,121,126,131,135,139,143,
147,151,155,159,163,167,169,173,177,181,185,189,193,195,199,203,207,211,
213,218,222,227,232,236,242,245,249,257,262,266,273,287,294,300,305,312,
318,323,328,331,341];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class biesVMParser extends antlr4.Parser {

    static grammarFileName = "biesVM.g4";
    static literalNames = [ null, "'ARGS:'", "'PARENT:'", "'BR'", "'BT'", 
                            "'BF'", "'NOP'", "'INP'", "'EQ'", "'CAT'", "'SNT'", 
                            "'TOS'", "'LRK'", "'TOL'", "'true'", "'false'", 
                            "'none'", "'SGN'", "'['", "','", "']'", null, 
                            "'LDV'", "'ADD'", "'MUL'", "'SUB'", "'DIV'", 
                            "'NEG'", "'ET'", "'GT'", "'GTE'", "'LT'", "'LTE'", 
                            "'RET'", "'HLT'", "'APP'", "'PRN'", "'BLD'", 
                            "'BST'", "'LDF'", "'INI'", "'STK'", "'SRK'", 
                            "'LIN'", "'LTK'", "'CST'", "'INO'", "'AND'", 
                            "'OR'", "'XOR'", "'NOT'", "'SWP'", "'LNT'", 
                            "'LEN'", "'POW'", "'$FUN'", "'$END'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, "TYPE", "LDV", 
                             "ADD", "MUL", "SUB", "DIV", "NEG", "EQ", "GT", 
                             "GTE", "LT", "LTE", "RET", "HLT", "APP", "PRN", 
                             "BLD", "BST", "LDF", "INI", "STK", "SRK", "LIN", 
                             "LTK", "CST", "INO", "AND", "OR", "XOR", "NOT", 
                             "SWP", "LNT", "LEN", "POW", "FUN", "END", "LABEL_IDENTIFIER", 
                             "NUMBER", "ID", "STRING", "VALUE", "COMMENT", 
                             "ES", "WS", "NL" ];
    static ruleNames = [ "program", "functionDef", "statement", "instruction", 
                         "initializeInstr", "loadInstr", "arithInstr", "logicalInst", 
                         "controlInstr", "stackInstr", "funcInstr", "comparisonInstr", 
                         "stringInstr", "listInstr", "boolData", "signInstr", 
                         "lengthInstr", "castInstr", "array", "inputString" ];

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
	        this.state = 46;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4022484984) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 16777215) !== 0)) {
	            this.state = 40;
	            this.statement();
	            this.state = 42;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===65) {
	                this.state = 41;
	                this.match(biesVMParser.NL);
	            }

	            this.state = 48;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 49;
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
	        this.state = 51;
	        this.match(biesVMParser.FUN);
	        this.state = 52;
	        this.match(biesVMParser.ES);
	        this.state = 53;
	        this.match(biesVMParser.LABEL_IDENTIFIER);
	        this.state = 57;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        if(la_===1) {
	            this.state = 54;
	            this.match(biesVMParser.ES);
	            this.state = 55;
	            this.match(biesVMParser.T__0);
	            this.state = 56;
	            this.match(biesVMParser.NUMBER);

	        }
	        this.state = 62;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===63) {
	            this.state = 59;
	            this.match(biesVMParser.ES);
	            this.state = 60;
	            this.match(biesVMParser.T__1);
	            this.state = 61;
	            this.match(biesVMParser.LABEL_IDENTIFIER);
	        }

	        this.state = 65;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===65) {
	            this.state = 64;
	            this.match(biesVMParser.NL);
	        }

	        this.state = 73;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4022484984) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 16777215) !== 0)) {
	            this.state = 67;
	            this.statement();
	            this.state = 69;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===65) {
	                this.state = 68;
	                this.match(biesVMParser.NL);
	            }

	            this.state = 75;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 76;
	        this.match(biesVMParser.END);
	        this.state = 77;
	        this.match(biesVMParser.ES);
	        this.state = 78;
	        this.match(biesVMParser.LABEL_IDENTIFIER);
	        this.state = 80;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        if(la_===1) {
	            this.state = 79;
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
	        this.state = 84;
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
	        case 17:
	        case 22:
	        case 23:
	        case 24:
	        case 25:
	        case 26:
	        case 27:
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
	        case 54:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 82;
	            this.instruction();
	            break;
	        case 55:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 83;
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
	        this.state = 100;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 86;
	            this.loadInstr();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 87;
	            this.arithInstr();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 88;
	            this.controlInstr();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 89;
	            this.funcInstr();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 90;
	            this.stringInstr();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 91;
	            this.comparisonInstr();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 92;
	            this.logicalInst();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 93;
	            this.listInstr();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 94;
	            this.signInstr();
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 95;
	            this.inputString();
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 96;
	            this.stackInstr();
	            break;

	        case 12:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 97;
	            this.castInstr();
	            break;

	        case 13:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 98;
	            this.lengthInstr();
	            break;

	        case 14:
	            this.enterOuterAlt(localctx, 14);
	            this.state = 99;
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
	        this.state = 102;
	        this.match(biesVMParser.INI);
	        this.state = 104;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===63) {
	            this.state = 103;
	            this.match(biesVMParser.ES);
	        }

	        this.state = 106;
	        this.match(biesVMParser.LABEL_IDENTIFIER);
	        this.state = 108;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===63) {
	            this.state = 107;
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
	        this.state = 169;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 22:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 110;
	            this.match(biesVMParser.LDV);
	            this.state = 114;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,12,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 111;
	                    this.match(biesVMParser.ES); 
	                }
	                this.state = 116;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,12,this._ctx);
	            }

	            this.state = 121;
	            this._errHandler.sync(this);
	            switch (this._input.LA(1)) {
	            case 58:
	            	this.state = 117;
	            	this.match(biesVMParser.NUMBER);
	            	break;
	            case 60:
	            	this.state = 118;
	            	this.match(biesVMParser.STRING);
	            	break;
	            case 18:
	            	this.state = 119;
	            	this.array();
	            	break;
	            case 14:
	            case 15:
	            case 16:
	            	this.state = 120;
	            	this.boolData();
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
	            case 17:
	            case 22:
	            case 23:
	            case 24:
	            case 25:
	            case 26:
	            case 27:
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
	            case 54:
	            case 55:
	            case 56:
	            case 63:
	            case 65:
	            	break;
	            default:
	            	break;
	            }
	            this.state = 126;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===63) {
	                this.state = 123;
	                this.match(biesVMParser.ES);
	                this.state = 128;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            break;
	        case 37:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 129;
	            this.match(biesVMParser.BLD);
	            this.state = 131;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===63) {
	                this.state = 130;
	                this.match(biesVMParser.ES);
	            }

	            this.state = 133;
	            this.match(biesVMParser.NUMBER);
	            this.state = 135;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===63) {
	                this.state = 134;
	                this.match(biesVMParser.ES);
	            }

	            this.state = 137;
	            this.match(biesVMParser.NUMBER);
	            this.state = 139;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===63) {
	                this.state = 138;
	                this.match(biesVMParser.ES);
	            }

	            break;
	        case 38:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 141;
	            this.match(biesVMParser.BST);
	            this.state = 143;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===63) {
	                this.state = 142;
	                this.match(biesVMParser.ES);
	            }

	            this.state = 145;
	            this.match(biesVMParser.NUMBER);
	            this.state = 147;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===63) {
	                this.state = 146;
	                this.match(biesVMParser.ES);
	            }

	            this.state = 149;
	            this.match(biesVMParser.NUMBER);
	            this.state = 151;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===63) {
	                this.state = 150;
	                this.match(biesVMParser.ES);
	            }

	            break;
	        case 39:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 153;
	            this.match(biesVMParser.LDF);
	            this.state = 155;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===63) {
	                this.state = 154;
	                this.match(biesVMParser.ES);
	            }

	            this.state = 157;
	            this.match(biesVMParser.LABEL_IDENTIFIER);
	            this.state = 159;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===63) {
	                this.state = 158;
	                this.match(biesVMParser.ES);
	            }

	            break;
	        case 40:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 161;
	            this.match(biesVMParser.INI);
	            this.state = 163;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===63) {
	                this.state = 162;
	                this.match(biesVMParser.ES);
	            }

	            this.state = 165;
	            this.match(biesVMParser.LABEL_IDENTIFIER);
	            this.state = 167;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===63) {
	                this.state = 166;
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
	        this.state = 195;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 23:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 171;
	            this.match(biesVMParser.ADD);
	            this.state = 173;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===63) {
	                this.state = 172;
	                this.match(biesVMParser.ES);
	            }

	            break;
	        case 24:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 175;
	            this.match(biesVMParser.MUL);
	            this.state = 177;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===63) {
	                this.state = 176;
	                this.match(biesVMParser.ES);
	            }

	            break;
	        case 25:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 179;
	            this.match(biesVMParser.SUB);
	            this.state = 181;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===63) {
	                this.state = 180;
	                this.match(biesVMParser.ES);
	            }

	            break;
	        case 26:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 183;
	            this.match(biesVMParser.DIV);
	            this.state = 185;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===63) {
	                this.state = 184;
	                this.match(biesVMParser.ES);
	            }

	            break;
	        case 27:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 187;
	            this.match(biesVMParser.NEG);
	            this.state = 189;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===63) {
	                this.state = 188;
	                this.match(biesVMParser.ES);
	            }

	            break;
	        case 54:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 191;
	            this.match(biesVMParser.POW);
	            this.state = 193;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===63) {
	                this.state = 192;
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
	        this.state = 213;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 47:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 197;
	            this.match(biesVMParser.AND);
	            this.state = 199;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===63) {
	                this.state = 198;
	                this.match(biesVMParser.ES);
	            }

	            break;
	        case 50:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 201;
	            this.match(biesVMParser.NOT);
	            this.state = 203;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===63) {
	                this.state = 202;
	                this.match(biesVMParser.ES);
	            }

	            break;
	        case 48:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 205;
	            this.match(biesVMParser.OR);
	            this.state = 207;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===63) {
	                this.state = 206;
	                this.match(biesVMParser.ES);
	            }

	            break;
	        case 49:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 209;
	            this.match(biesVMParser.XOR);
	            this.state = 211;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===63) {
	                this.state = 210;
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
	        this.state = 236;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 33:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 215;
	            this.match(biesVMParser.RET);
	            break;
	        case 34:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 216;
	            this.match(biesVMParser.HLT);
	            this.state = 218;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===63) {
	                this.state = 217;
	                this.match(biesVMParser.ES);
	            }

	            break;
	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 220;
	            this.match(biesVMParser.T__2);
	            this.state = 222;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===63) {
	                this.state = 221;
	                this.match(biesVMParser.ES);
	            }

	            this.state = 224;
	            this.match(biesVMParser.NUMBER);
	            break;
	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 225;
	            this.match(biesVMParser.T__3);
	            this.state = 227;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===63) {
	                this.state = 226;
	                this.match(biesVMParser.ES);
	            }

	            this.state = 229;
	            this.match(biesVMParser.NUMBER);
	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 230;
	            this.match(biesVMParser.T__4);
	            this.state = 232;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===63) {
	                this.state = 231;
	                this.match(biesVMParser.ES);
	            }

	            this.state = 234;
	            this.match(biesVMParser.NUMBER);
	            break;
	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 235;
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
	        this.state = 238;
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
	        this.state = 249;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 35:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 240;
	            this.match(biesVMParser.APP);
	            this.state = 242;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===63) {
	                this.state = 241;
	                this.match(biesVMParser.ES);
	            }

	            this.state = 245;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===58) {
	                this.state = 244;
	                this.match(biesVMParser.NUMBER);
	            }

	            break;
	        case 36:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 247;
	            this.match(biesVMParser.PRN);
	            break;
	        case 7:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 248;
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
	        this.state = 251;
	        _la = this._input.LA(1);
	        if(!(((((_la - 8)) & ~0x1f) === 0 && ((1 << (_la - 8)) & 31457281) !== 0))) {
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
	        this.state = 253;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 3584) !== 0) || _la===41 || _la===42)) {
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
	        this.state = 273;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 43:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 255;
	            this.match(biesVMParser.LIN);
	            this.state = 266;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,48,this._ctx)
	            while(_alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1+1) {
	                    this.state = 257;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    if(_la===63) {
	                        this.state = 256;
	                        this.match(biesVMParser.ES);
	                    }

	                    this.state = 262;
	                    this._errHandler.sync(this);
	                    switch(this._input.LA(1)) {
	                    case 58:
	                        this.state = 259;
	                        this.match(biesVMParser.NUMBER);
	                        break;
	                    case 60:
	                        this.state = 260;
	                        this.match(biesVMParser.STRING);
	                        break;
	                    case 18:
	                        this.state = 261;
	                        this.array();
	                        break;
	                    default:
	                        throw new antlr4.error.NoViableAltException(this);
	                    } 
	                }
	                this.state = 268;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,48,this._ctx);
	            }

	            break;
	        case 44:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 269;
	            this.match(biesVMParser.LTK);
	            break;
	        case 52:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 270;
	            this.match(biesVMParser.LNT);
	            break;
	        case 12:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 271;
	            this.match(biesVMParser.T__11);
	            break;
	        case 13:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 272;
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



	boolData() {
	    let localctx = new BoolDataContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, biesVMParser.RULE_boolData);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 275;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 114688) !== 0))) {
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



	signInstr() {
	    let localctx = new SignInstrContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, biesVMParser.RULE_signInstr);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 277;
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



	lengthInstr() {
	    let localctx = new LengthInstrContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, biesVMParser.RULE_lengthInstr);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 279;
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
	    this.enterRule(localctx, 34, biesVMParser.RULE_castInstr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 281;
	        this.match(biesVMParser.CST);
	        this.state = 282;
	        this.match(biesVMParser.ES);
	        this.state = 283;
	        this.match(biesVMParser.TYPE);
	        this.state = 287;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===63) {
	            this.state = 284;
	            this.match(biesVMParser.ES);
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



	array() {
	    let localctx = new ArrayContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, biesVMParser.RULE_array);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 290;
	        this.match(biesVMParser.T__17);
	        this.state = 294;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===63) {
	            this.state = 291;
	            this.match(biesVMParser.ES);
	            this.state = 296;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 331;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===18 || _la===58 || _la===60) {
	            this.state = 300;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 58:
	                this.state = 297;
	                this.match(biesVMParser.NUMBER);
	                break;
	            case 60:
	                this.state = 298;
	                this.match(biesVMParser.STRING);
	                break;
	            case 18:
	                this.state = 299;
	                this.array();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 305;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===63) {
	                this.state = 302;
	                this.match(biesVMParser.ES);
	                this.state = 307;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 328;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===19) {
	                this.state = 308;
	                this.match(biesVMParser.T__18);
	                this.state = 312;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===63) {
	                    this.state = 309;
	                    this.match(biesVMParser.ES);
	                    this.state = 314;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	                this.state = 318;
	                this._errHandler.sync(this);
	                switch(this._input.LA(1)) {
	                case 58:
	                    this.state = 315;
	                    this.match(biesVMParser.NUMBER);
	                    break;
	                case 60:
	                    this.state = 316;
	                    this.match(biesVMParser.STRING);
	                    break;
	                case 18:
	                    this.state = 317;
	                    this.array();
	                    break;
	                default:
	                    throw new antlr4.error.NoViableAltException(this);
	                }
	                this.state = 323;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===63) {
	                    this.state = 320;
	                    this.match(biesVMParser.ES);
	                    this.state = 325;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	                this.state = 330;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 333;
	        this.match(biesVMParser.T__19);
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
	    this.enterRule(localctx, 38, biesVMParser.RULE_inputString);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 335;
	        this.match(biesVMParser.INO);
	        this.state = 336;
	        this.match(biesVMParser.ES);
	        this.state = 337;
	        this.match(biesVMParser.TYPE);
	        this.state = 341;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===63) {
	            this.state = 338;
	            this.match(biesVMParser.ES);
	            this.state = 343;
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
biesVMParser.T__17 = 18;
biesVMParser.T__18 = 19;
biesVMParser.T__19 = 20;
biesVMParser.TYPE = 21;
biesVMParser.LDV = 22;
biesVMParser.ADD = 23;
biesVMParser.MUL = 24;
biesVMParser.SUB = 25;
biesVMParser.DIV = 26;
biesVMParser.NEG = 27;
biesVMParser.EQ = 28;
biesVMParser.GT = 29;
biesVMParser.GTE = 30;
biesVMParser.LT = 31;
biesVMParser.LTE = 32;
biesVMParser.RET = 33;
biesVMParser.HLT = 34;
biesVMParser.APP = 35;
biesVMParser.PRN = 36;
biesVMParser.BLD = 37;
biesVMParser.BST = 38;
biesVMParser.LDF = 39;
biesVMParser.INI = 40;
biesVMParser.STK = 41;
biesVMParser.SRK = 42;
biesVMParser.LIN = 43;
biesVMParser.LTK = 44;
biesVMParser.CST = 45;
biesVMParser.INO = 46;
biesVMParser.AND = 47;
biesVMParser.OR = 48;
biesVMParser.XOR = 49;
biesVMParser.NOT = 50;
biesVMParser.SWP = 51;
biesVMParser.LNT = 52;
biesVMParser.LEN = 53;
biesVMParser.POW = 54;
biesVMParser.FUN = 55;
biesVMParser.END = 56;
biesVMParser.LABEL_IDENTIFIER = 57;
biesVMParser.NUMBER = 58;
biesVMParser.ID = 59;
biesVMParser.STRING = 60;
biesVMParser.VALUE = 61;
biesVMParser.COMMENT = 62;
biesVMParser.ES = 63;
biesVMParser.WS = 64;
biesVMParser.NL = 65;

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
biesVMParser.RULE_boolData = 14;
biesVMParser.RULE_signInstr = 15;
biesVMParser.RULE_lengthInstr = 16;
biesVMParser.RULE_castInstr = 17;
biesVMParser.RULE_array = 18;
biesVMParser.RULE_inputString = 19;

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

	boolData() {
	    return this.getTypedRuleContext(BoolDataContext,0);
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



class BoolDataContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesVMParser.RULE_boolData;
    }


	accept(visitor) {
	    if ( visitor instanceof biesVMVisitor ) {
	        return visitor.visitBoolData(this);
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
biesVMParser.BoolDataContext = BoolDataContext; 
biesVMParser.SignInstrContext = SignInstrContext; 
biesVMParser.LengthInstrContext = LengthInstrContext; 
biesVMParser.CastInstrContext = CastInstrContext; 
biesVMParser.ArrayContext = ArrayContext; 
biesVMParser.InputStringContext = InputStringContext; 
