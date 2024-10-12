// Generated from ./grammar/biesLanguage.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import biesLanguageVisitor from './biesLanguageVisitor.js';

const serializedATN = [4,1,50,259,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,1,0,1,0,3,0,31,8,0,5,0,33,8,0,10,0,12,0,36,9,0,1,0,1,0,1,1,1,1,
1,1,1,1,3,1,44,8,1,1,1,1,1,3,1,48,8,1,5,1,50,8,1,10,1,12,1,53,9,1,1,1,1,
1,1,1,1,1,3,1,59,8,1,1,2,1,2,3,2,63,8,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,
1,3,3,3,74,8,3,1,4,1,4,5,4,78,8,4,10,4,12,4,81,9,4,1,4,3,4,84,8,4,1,4,5,
4,87,8,4,10,4,12,4,90,9,4,1,4,1,4,3,4,94,8,4,1,4,1,4,3,4,98,8,4,1,4,1,4,
3,4,102,8,4,1,4,1,4,3,4,106,8,4,1,4,1,4,3,4,110,8,4,1,4,1,4,3,4,114,8,4,
1,4,1,4,3,4,118,8,4,1,4,1,4,3,4,122,8,4,1,4,1,4,3,4,126,8,4,1,4,1,4,3,4,
130,8,4,3,4,132,8,4,1,5,1,5,3,5,136,8,5,1,5,1,5,3,5,140,8,5,1,5,1,5,1,5,
3,5,145,8,5,1,5,1,5,3,5,149,8,5,1,5,1,5,3,5,153,8,5,1,5,1,5,3,5,157,8,5,
3,5,159,8,5,1,6,1,6,3,6,163,8,6,1,6,1,6,3,6,167,8,6,1,6,1,6,3,6,171,8,6,
1,6,1,6,3,6,175,8,6,3,6,177,8,6,1,7,1,7,1,7,1,7,3,7,183,8,7,1,7,1,7,1,7,
3,7,188,8,7,1,7,1,7,1,7,3,7,193,8,7,1,7,1,7,3,7,197,8,7,1,8,1,8,3,8,201,
8,8,1,8,3,8,204,8,8,1,8,1,8,3,8,208,8,8,1,9,1,9,1,10,1,10,3,10,214,8,10,
1,10,1,10,3,10,218,8,10,1,11,1,11,3,11,222,8,11,1,11,5,11,225,8,11,10,11,
12,11,228,9,11,1,12,1,12,1,12,1,12,5,12,234,8,12,10,12,12,12,237,9,12,3,
12,239,8,12,1,12,1,12,1,13,1,13,5,13,245,8,13,10,13,12,13,248,9,13,1,13,
3,13,251,8,13,1,13,5,13,254,8,13,10,13,12,13,257,9,13,1,13,1,226,0,14,0,
2,4,6,8,10,12,14,16,18,20,22,24,26,0,2,2,0,42,42,44,44,2,0,7,7,18,21,315,
0,34,1,0,0,0,2,39,1,0,0,0,4,62,1,0,0,0,6,73,1,0,0,0,8,131,1,0,0,0,10,158,
1,0,0,0,12,176,1,0,0,0,14,196,1,0,0,0,16,207,1,0,0,0,18,209,1,0,0,0,20,217,
1,0,0,0,22,219,1,0,0,0,24,229,1,0,0,0,26,242,1,0,0,0,28,30,3,4,2,0,29,31,
5,50,0,0,30,29,1,0,0,0,30,31,1,0,0,0,31,33,1,0,0,0,32,28,1,0,0,0,33,36,1,
0,0,0,34,32,1,0,0,0,34,35,1,0,0,0,35,37,1,0,0,0,36,34,1,0,0,0,37,38,5,0,
0,1,38,1,1,0,0,0,39,40,5,39,0,0,40,41,5,48,0,0,41,43,5,41,0,0,42,44,5,50,
0,0,43,42,1,0,0,0,43,44,1,0,0,0,44,51,1,0,0,0,45,47,3,4,2,0,46,48,5,50,0,
0,47,46,1,0,0,0,47,48,1,0,0,0,48,50,1,0,0,0,49,45,1,0,0,0,50,53,1,0,0,0,
51,49,1,0,0,0,51,52,1,0,0,0,52,54,1,0,0,0,53,51,1,0,0,0,54,55,5,40,0,0,55,
56,5,48,0,0,56,58,5,41,0,0,57,59,5,50,0,0,58,57,1,0,0,0,58,59,1,0,0,0,59,
3,1,0,0,0,60,63,3,6,3,0,61,63,3,2,1,0,62,60,1,0,0,0,62,61,1,0,0,0,63,5,1,
0,0,0,64,74,3,8,4,0,65,74,3,10,5,0,66,74,3,14,7,0,67,74,3,16,8,0,68,74,3,
20,10,0,69,74,3,18,9,0,70,74,3,12,6,0,71,74,3,22,11,0,72,74,3,26,13,0,73,
64,1,0,0,0,73,65,1,0,0,0,73,66,1,0,0,0,73,67,1,0,0,0,73,68,1,0,0,0,73,69,
1,0,0,0,73,70,1,0,0,0,73,71,1,0,0,0,73,72,1,0,0,0,74,7,1,0,0,0,75,79,5,11,
0,0,76,78,5,48,0,0,77,76,1,0,0,0,78,81,1,0,0,0,79,77,1,0,0,0,79,80,1,0,0,
0,80,83,1,0,0,0,81,79,1,0,0,0,82,84,7,0,0,0,83,82,1,0,0,0,83,84,1,0,0,0,
84,88,1,0,0,0,85,87,5,48,0,0,86,85,1,0,0,0,87,90,1,0,0,0,88,86,1,0,0,0,88,
89,1,0,0,0,89,132,1,0,0,0,90,88,1,0,0,0,91,93,5,26,0,0,92,94,5,48,0,0,93,
92,1,0,0,0,93,94,1,0,0,0,94,95,1,0,0,0,95,97,5,42,0,0,96,98,5,48,0,0,97,
96,1,0,0,0,97,98,1,0,0,0,98,99,1,0,0,0,99,101,5,42,0,0,100,102,5,48,0,0,
101,100,1,0,0,0,101,102,1,0,0,0,102,132,1,0,0,0,103,105,5,27,0,0,104,106,
5,48,0,0,105,104,1,0,0,0,105,106,1,0,0,0,106,107,1,0,0,0,107,109,5,42,0,
0,108,110,5,48,0,0,109,108,1,0,0,0,109,110,1,0,0,0,110,111,1,0,0,0,111,113,
5,42,0,0,112,114,5,48,0,0,113,112,1,0,0,0,113,114,1,0,0,0,114,132,1,0,0,
0,115,117,5,28,0,0,116,118,5,48,0,0,117,116,1,0,0,0,117,118,1,0,0,0,118,
119,1,0,0,0,119,121,5,41,0,0,120,122,5,48,0,0,121,120,1,0,0,0,121,122,1,
0,0,0,122,132,1,0,0,0,123,125,5,29,0,0,124,126,5,48,0,0,125,124,1,0,0,0,
125,126,1,0,0,0,126,127,1,0,0,0,127,129,5,41,0,0,128,130,5,48,0,0,129,128,
1,0,0,0,129,130,1,0,0,0,130,132,1,0,0,0,131,75,1,0,0,0,131,91,1,0,0,0,131,
103,1,0,0,0,131,115,1,0,0,0,131,123,1,0,0,0,132,9,1,0,0,0,133,135,5,12,0,
0,134,136,5,48,0,0,135,134,1,0,0,0,135,136,1,0,0,0,136,159,1,0,0,0,137,139,
5,1,0,0,138,140,5,48,0,0,139,138,1,0,0,0,139,140,1,0,0,0,140,141,1,0,0,0,
141,159,5,42,0,0,142,144,5,13,0,0,143,145,5,48,0,0,144,143,1,0,0,0,144,145,
1,0,0,0,145,159,1,0,0,0,146,148,5,14,0,0,147,149,5,48,0,0,148,147,1,0,0,
0,148,149,1,0,0,0,149,159,1,0,0,0,150,152,5,15,0,0,151,153,5,48,0,0,152,
151,1,0,0,0,152,153,1,0,0,0,153,159,1,0,0,0,154,156,5,16,0,0,155,157,5,48,
0,0,156,155,1,0,0,0,156,157,1,0,0,0,157,159,1,0,0,0,158,133,1,0,0,0,158,
137,1,0,0,0,158,142,1,0,0,0,158,146,1,0,0,0,158,150,1,0,0,0,158,154,1,0,
0,0,159,11,1,0,0,0,160,162,5,35,0,0,161,163,5,48,0,0,162,161,1,0,0,0,162,
163,1,0,0,0,163,177,1,0,0,0,164,166,5,38,0,0,165,167,5,48,0,0,166,165,1,
0,0,0,166,167,1,0,0,0,167,177,1,0,0,0,168,170,5,36,0,0,169,171,5,48,0,0,
170,169,1,0,0,0,170,171,1,0,0,0,171,177,1,0,0,0,172,174,5,37,0,0,173,175,
5,48,0,0,174,173,1,0,0,0,174,175,1,0,0,0,175,177,1,0,0,0,176,160,1,0,0,0,
176,164,1,0,0,0,176,168,1,0,0,0,176,172,1,0,0,0,177,13,1,0,0,0,178,197,5,
22,0,0,179,197,5,23,0,0,180,182,5,2,0,0,181,183,5,48,0,0,182,181,1,0,0,0,
182,183,1,0,0,0,183,184,1,0,0,0,184,197,5,42,0,0,185,187,5,3,0,0,186,188,
5,48,0,0,187,186,1,0,0,0,187,188,1,0,0,0,188,189,1,0,0,0,189,197,5,42,0,
0,190,192,5,4,0,0,191,193,5,48,0,0,192,191,1,0,0,0,192,193,1,0,0,0,193,194,
1,0,0,0,194,197,5,42,0,0,195,197,5,5,0,0,196,178,1,0,0,0,196,179,1,0,0,0,
196,180,1,0,0,0,196,185,1,0,0,0,196,190,1,0,0,0,196,195,1,0,0,0,197,15,1,
0,0,0,198,200,5,24,0,0,199,201,5,48,0,0,200,199,1,0,0,0,200,201,1,0,0,0,
201,203,1,0,0,0,202,204,5,42,0,0,203,202,1,0,0,0,203,204,1,0,0,0,204,208,
1,0,0,0,205,208,5,25,0,0,206,208,5,6,0,0,207,198,1,0,0,0,207,205,1,0,0,0,
207,206,1,0,0,0,208,17,1,0,0,0,209,210,7,1,0,0,210,19,1,0,0,0,211,213,5,
30,0,0,212,214,5,48,0,0,213,212,1,0,0,0,213,214,1,0,0,0,214,218,1,0,0,0,
215,216,5,31,0,0,216,218,5,42,0,0,217,211,1,0,0,0,217,215,1,0,0,0,218,21,
1,0,0,0,219,226,5,32,0,0,220,222,5,48,0,0,221,220,1,0,0,0,221,222,1,0,0,
0,222,223,1,0,0,0,223,225,7,0,0,0,224,221,1,0,0,0,225,228,1,0,0,0,226,227,
1,0,0,0,226,224,1,0,0,0,227,23,1,0,0,0,228,226,1,0,0,0,229,238,5,8,0,0,230,
235,7,0,0,0,231,232,5,9,0,0,232,234,7,0,0,0,233,231,1,0,0,0,234,237,1,0,
0,0,235,233,1,0,0,0,235,236,1,0,0,0,236,239,1,0,0,0,237,235,1,0,0,0,238,
230,1,0,0,0,238,239,1,0,0,0,239,240,1,0,0,0,240,241,5,10,0,0,241,25,1,0,
0,0,242,246,5,34,0,0,243,245,5,48,0,0,244,243,1,0,0,0,245,248,1,0,0,0,246,
244,1,0,0,0,246,247,1,0,0,0,247,250,1,0,0,0,248,246,1,0,0,0,249,251,5,44,
0,0,250,249,1,0,0,0,250,251,1,0,0,0,251,255,1,0,0,0,252,254,5,48,0,0,253,
252,1,0,0,0,254,257,1,0,0,0,255,253,1,0,0,0,255,256,1,0,0,0,256,27,1,0,0,
0,257,255,1,0,0,0,50,30,34,43,47,51,58,62,73,79,83,88,93,97,101,105,109,
113,117,121,125,129,131,135,139,144,148,152,156,158,162,166,170,174,176,
182,187,192,196,200,203,207,213,217,221,226,235,238,246,250,255];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class biesLanguageParser extends antlr4.Parser {

    static grammarFileName = "biesLanguage.g4";
    static literalNames = [ null, "'PLUS'", "'BR'", "'BT'", "'BF'", "'NOP'", 
                            "'INP'", "'EQ'", "'['", "','", "']'", "'LDV'", 
                            "'ADD'", "'MUL'", "'SUB'", "'DIV'", "'NEG'", 
                            "'ET'", "'GT'", "'GTE'", "'LT'", "'LTE'", "'RET'", 
                            "'HLT'", "'APP'", "'PRN'", "'BLD'", "'BST'", 
                            "'LDF'", "'INI'", "'STK'", "'SRK'", "'LIN'", 
                            "'CST'", "'INO'", "'AND'", "'OR'", "'XOR'", 
                            "'NOT'", "'$FUN'", "'$END'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, "LDV", "ADD", "MUL", "SUB", 
                             "DIV", "NEG", "EQ", "GT", "GTE", "LT", "LTE", 
                             "RET", "HLT", "APP", "PRN", "BLD", "BST", "LDF", 
                             "INI", "STK", "SRK", "LIN", "CST", "INO", "AND", 
                             "OR", "XOR", "NOT", "FUN", "END", "LABEL_IDENTIFIER", 
                             "NUMBER", "ID", "STRING", "TYPE", "VALUE", 
                             "COMMENT", "ES", "WS", "NL" ];
    static ruleNames = [ "program", "functionDef", "statement", "instruction", 
                         "loadInstr", "arithInstr", "logicalInst", "controlInstr", 
                         "funcInstr", "comparisonInstr", "stringInstr", 
                         "listInstr", "array", "inputString" ];

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
	        this.state = 34;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4294834430) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 253) !== 0)) {
	            this.state = 28;
	            this.statement();
	            this.state = 30;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===50) {
	                this.state = 29;
	                this.match(biesLanguageParser.NL);
	            }

	            this.state = 36;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 37;
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
	        this.state = 39;
	        this.match(biesLanguageParser.FUN);
	        this.state = 40;
	        this.match(biesLanguageParser.ES);
	        this.state = 41;
	        this.match(biesLanguageParser.LABEL_IDENTIFIER);
	        this.state = 43;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===50) {
	            this.state = 42;
	            this.match(biesLanguageParser.NL);
	        }

	        this.state = 51;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4294834430) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 253) !== 0)) {
	            this.state = 45;
	            this.statement();
	            this.state = 47;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===50) {
	                this.state = 46;
	                this.match(biesLanguageParser.NL);
	            }

	            this.state = 53;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 54;
	        this.match(biesLanguageParser.END);
	        this.state = 55;
	        this.match(biesLanguageParser.ES);
	        this.state = 56;
	        this.match(biesLanguageParser.LABEL_IDENTIFIER);
	        this.state = 58;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        if(la_===1) {
	            this.state = 57;
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
	        this.state = 62;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	        case 2:
	        case 3:
	        case 4:
	        case 5:
	        case 6:
	        case 7:
	        case 11:
	        case 12:
	        case 13:
	        case 14:
	        case 15:
	        case 16:
	        case 18:
	        case 19:
	        case 20:
	        case 21:
	        case 22:
	        case 23:
	        case 24:
	        case 25:
	        case 26:
	        case 27:
	        case 28:
	        case 29:
	        case 30:
	        case 31:
	        case 32:
	        case 34:
	        case 35:
	        case 36:
	        case 37:
	        case 38:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 60;
	            this.instruction();
	            break;
	        case 39:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 61;
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
	        this.state = 73;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 11:
	        case 26:
	        case 27:
	        case 28:
	        case 29:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 64;
	            this.loadInstr();
	            break;
	        case 1:
	        case 12:
	        case 13:
	        case 14:
	        case 15:
	        case 16:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 65;
	            this.arithInstr();
	            break;
	        case 2:
	        case 3:
	        case 4:
	        case 5:
	        case 22:
	        case 23:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 66;
	            this.controlInstr();
	            break;
	        case 6:
	        case 24:
	        case 25:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 67;
	            this.funcInstr();
	            break;
	        case 30:
	        case 31:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 68;
	            this.stringInstr();
	            break;
	        case 7:
	        case 18:
	        case 19:
	        case 20:
	        case 21:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 69;
	            this.comparisonInstr();
	            break;
	        case 35:
	        case 36:
	        case 37:
	        case 38:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 70;
	            this.logicalInst();
	            break;
	        case 32:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 71;
	            this.listInstr();
	            break;
	        case 34:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 72;
	            this.inputString();
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
	        this.state = 131;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 11:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 75;
	            this.match(biesLanguageParser.LDV);
	            this.state = 79;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 76;
	                    this.match(biesLanguageParser.ES); 
	                }
	                this.state = 81;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,8,this._ctx);
	            }

	            this.state = 83;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===42 || _la===44) {
	                this.state = 82;
	                _la = this._input.LA(1);
	                if(!(_la===42 || _la===44)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	            }

	            this.state = 88;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===48) {
	                this.state = 85;
	                this.match(biesLanguageParser.ES);
	                this.state = 90;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            break;
	        case 26:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 91;
	            this.match(biesLanguageParser.BLD);
	            this.state = 93;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===48) {
	                this.state = 92;
	                this.match(biesLanguageParser.ES);
	            }

	            this.state = 95;
	            this.match(biesLanguageParser.NUMBER);
	            this.state = 97;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===48) {
	                this.state = 96;
	                this.match(biesLanguageParser.ES);
	            }

	            this.state = 99;
	            this.match(biesLanguageParser.NUMBER);
	            this.state = 101;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===48) {
	                this.state = 100;
	                this.match(biesLanguageParser.ES);
	            }

	            break;
	        case 27:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 103;
	            this.match(biesLanguageParser.BST);
	            this.state = 105;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===48) {
	                this.state = 104;
	                this.match(biesLanguageParser.ES);
	            }

	            this.state = 107;
	            this.match(biesLanguageParser.NUMBER);
	            this.state = 109;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===48) {
	                this.state = 108;
	                this.match(biesLanguageParser.ES);
	            }

	            this.state = 111;
	            this.match(biesLanguageParser.NUMBER);
	            this.state = 113;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===48) {
	                this.state = 112;
	                this.match(biesLanguageParser.ES);
	            }

	            break;
	        case 28:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 115;
	            this.match(biesLanguageParser.LDF);
	            this.state = 117;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===48) {
	                this.state = 116;
	                this.match(biesLanguageParser.ES);
	            }

	            this.state = 119;
	            this.match(biesLanguageParser.LABEL_IDENTIFIER);
	            this.state = 121;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===48) {
	                this.state = 120;
	                this.match(biesLanguageParser.ES);
	            }

	            break;
	        case 29:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 123;
	            this.match(biesLanguageParser.INI);
	            this.state = 125;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===48) {
	                this.state = 124;
	                this.match(biesLanguageParser.ES);
	            }

	            this.state = 127;
	            this.match(biesLanguageParser.LABEL_IDENTIFIER);
	            this.state = 129;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===48) {
	                this.state = 128;
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
	        this.state = 158;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 12:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 133;
	            this.match(biesLanguageParser.ADD);
	            this.state = 135;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===48) {
	                this.state = 134;
	                this.match(biesLanguageParser.ES);
	            }

	            break;
	        case 1:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 137;
	            this.match(biesLanguageParser.T__0);
	            this.state = 139;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===48) {
	                this.state = 138;
	                this.match(biesLanguageParser.ES);
	            }

	            this.state = 141;
	            this.match(biesLanguageParser.NUMBER);
	            break;
	        case 13:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 142;
	            this.match(biesLanguageParser.MUL);
	            this.state = 144;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===48) {
	                this.state = 143;
	                this.match(biesLanguageParser.ES);
	            }

	            break;
	        case 14:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 146;
	            this.match(biesLanguageParser.SUB);
	            this.state = 148;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===48) {
	                this.state = 147;
	                this.match(biesLanguageParser.ES);
	            }

	            break;
	        case 15:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 150;
	            this.match(biesLanguageParser.DIV);
	            this.state = 152;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===48) {
	                this.state = 151;
	                this.match(biesLanguageParser.ES);
	            }

	            break;
	        case 16:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 154;
	            this.match(biesLanguageParser.NEG);
	            this.state = 156;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===48) {
	                this.state = 155;
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
	        this.state = 176;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 35:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 160;
	            this.match(biesLanguageParser.AND);
	            this.state = 162;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===48) {
	                this.state = 161;
	                this.match(biesLanguageParser.ES);
	            }

	            break;
	        case 38:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 164;
	            this.match(biesLanguageParser.NOT);
	            this.state = 166;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===48) {
	                this.state = 165;
	                this.match(biesLanguageParser.ES);
	            }

	            break;
	        case 36:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 168;
	            this.match(biesLanguageParser.OR);
	            this.state = 170;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===48) {
	                this.state = 169;
	                this.match(biesLanguageParser.ES);
	            }

	            break;
	        case 37:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 172;
	            this.match(biesLanguageParser.XOR);
	            this.state = 174;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===48) {
	                this.state = 173;
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
	        this.state = 196;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 22:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 178;
	            this.match(biesLanguageParser.RET);
	            break;
	        case 23:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 179;
	            this.match(biesLanguageParser.HLT);
	            break;
	        case 2:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 180;
	            this.match(biesLanguageParser.T__1);
	            this.state = 182;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===48) {
	                this.state = 181;
	                this.match(biesLanguageParser.ES);
	            }

	            this.state = 184;
	            this.match(biesLanguageParser.NUMBER);
	            break;
	        case 3:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 185;
	            this.match(biesLanguageParser.T__2);
	            this.state = 187;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===48) {
	                this.state = 186;
	                this.match(biesLanguageParser.ES);
	            }

	            this.state = 189;
	            this.match(biesLanguageParser.NUMBER);
	            break;
	        case 4:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 190;
	            this.match(biesLanguageParser.T__3);
	            this.state = 192;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===48) {
	                this.state = 191;
	                this.match(biesLanguageParser.ES);
	            }

	            this.state = 194;
	            this.match(biesLanguageParser.NUMBER);
	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 195;
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



	funcInstr() {
	    let localctx = new FuncInstrContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, biesLanguageParser.RULE_funcInstr);
	    var _la = 0;
	    try {
	        this.state = 207;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 24:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 198;
	            this.match(biesLanguageParser.APP);
	            this.state = 200;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===48) {
	                this.state = 199;
	                this.match(biesLanguageParser.ES);
	            }

	            this.state = 203;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===42) {
	                this.state = 202;
	                this.match(biesLanguageParser.NUMBER);
	            }

	            break;
	        case 25:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 205;
	            this.match(biesLanguageParser.PRN);
	            break;
	        case 6:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 206;
	            this.match(biesLanguageParser.T__5);
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
	    this.enterRule(localctx, 18, biesLanguageParser.RULE_comparisonInstr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 209;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 3932288) !== 0))) {
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
	    this.enterRule(localctx, 20, biesLanguageParser.RULE_stringInstr);
	    var _la = 0;
	    try {
	        this.state = 217;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 30:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 211;
	            this.match(biesLanguageParser.STK);
	            this.state = 213;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===48) {
	                this.state = 212;
	                this.match(biesLanguageParser.ES);
	            }

	            break;
	        case 31:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 215;
	            this.match(biesLanguageParser.SRK);
	            this.state = 216;
	            this.match(biesLanguageParser.NUMBER);
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



	listInstr() {
	    let localctx = new ListInstrContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, biesLanguageParser.RULE_listInstr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 219;
	        this.match(biesLanguageParser.LIN);
	        this.state = 226;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,44,this._ctx)
	        while(_alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1+1) {
	                this.state = 221;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===48) {
	                    this.state = 220;
	                    this.match(biesLanguageParser.ES);
	                }

	                this.state = 223;
	                _la = this._input.LA(1);
	                if(!(_la===42 || _la===44)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                } 
	            }
	            this.state = 228;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,44,this._ctx);
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
	    this.enterRule(localctx, 24, biesLanguageParser.RULE_array);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 229;
	        this.match(biesLanguageParser.T__7);
	        this.state = 238;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===42 || _la===44) {
	            this.state = 230;
	            _la = this._input.LA(1);
	            if(!(_la===42 || _la===44)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 235;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===9) {
	                this.state = 231;
	                this.match(biesLanguageParser.T__8);
	                this.state = 232;
	                _la = this._input.LA(1);
	                if(!(_la===42 || _la===44)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 237;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 240;
	        this.match(biesLanguageParser.T__9);
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
	    this.enterRule(localctx, 26, biesLanguageParser.RULE_inputString);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 242;
	        this.match(biesLanguageParser.INO);
	        this.state = 246;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,47,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 243;
	                this.match(biesLanguageParser.ES); 
	            }
	            this.state = 248;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,47,this._ctx);
	        }

	        this.state = 250;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===44) {
	            this.state = 249;
	            this.match(biesLanguageParser.STRING);
	        }

	        this.state = 255;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===48) {
	            this.state = 252;
	            this.match(biesLanguageParser.ES);
	            this.state = 257;
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
biesLanguageParser.LDV = 11;
biesLanguageParser.ADD = 12;
biesLanguageParser.MUL = 13;
biesLanguageParser.SUB = 14;
biesLanguageParser.DIV = 15;
biesLanguageParser.NEG = 16;
biesLanguageParser.EQ = 17;
biesLanguageParser.GT = 18;
biesLanguageParser.GTE = 19;
biesLanguageParser.LT = 20;
biesLanguageParser.LTE = 21;
biesLanguageParser.RET = 22;
biesLanguageParser.HLT = 23;
biesLanguageParser.APP = 24;
biesLanguageParser.PRN = 25;
biesLanguageParser.BLD = 26;
biesLanguageParser.BST = 27;
biesLanguageParser.LDF = 28;
biesLanguageParser.INI = 29;
biesLanguageParser.STK = 30;
biesLanguageParser.SRK = 31;
biesLanguageParser.LIN = 32;
biesLanguageParser.CST = 33;
biesLanguageParser.INO = 34;
biesLanguageParser.AND = 35;
biesLanguageParser.OR = 36;
biesLanguageParser.XOR = 37;
biesLanguageParser.NOT = 38;
biesLanguageParser.FUN = 39;
biesLanguageParser.END = 40;
biesLanguageParser.LABEL_IDENTIFIER = 41;
biesLanguageParser.NUMBER = 42;
biesLanguageParser.ID = 43;
biesLanguageParser.STRING = 44;
biesLanguageParser.TYPE = 45;
biesLanguageParser.VALUE = 46;
biesLanguageParser.COMMENT = 47;
biesLanguageParser.ES = 48;
biesLanguageParser.WS = 49;
biesLanguageParser.NL = 50;

biesLanguageParser.RULE_program = 0;
biesLanguageParser.RULE_functionDef = 1;
biesLanguageParser.RULE_statement = 2;
biesLanguageParser.RULE_instruction = 3;
biesLanguageParser.RULE_loadInstr = 4;
biesLanguageParser.RULE_arithInstr = 5;
biesLanguageParser.RULE_logicalInst = 6;
biesLanguageParser.RULE_controlInstr = 7;
biesLanguageParser.RULE_funcInstr = 8;
biesLanguageParser.RULE_comparisonInstr = 9;
biesLanguageParser.RULE_stringInstr = 10;
biesLanguageParser.RULE_listInstr = 11;
biesLanguageParser.RULE_array = 12;
biesLanguageParser.RULE_inputString = 13;

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

	inputString() {
	    return this.getTypedRuleContext(InputStringContext,0);
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

	NUMBER() {
	    return this.getToken(biesLanguageParser.NUMBER, 0);
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

	ES() {
	    return this.getToken(biesLanguageParser.ES, 0);
	};

	SRK() {
	    return this.getToken(biesLanguageParser.SRK, 0);
	};

	NUMBER() {
	    return this.getToken(biesLanguageParser.NUMBER, 0);
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


	accept(visitor) {
	    if ( visitor instanceof biesLanguageVisitor ) {
	        return visitor.visitListInstr(this);
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


	STRING() {
	    return this.getToken(biesLanguageParser.STRING, 0);
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
biesLanguageParser.FuncInstrContext = FuncInstrContext; 
biesLanguageParser.ComparisonInstrContext = ComparisonInstrContext; 
biesLanguageParser.StringInstrContext = StringInstrContext; 
biesLanguageParser.ListInstrContext = ListInstrContext; 
biesLanguageParser.ArrayContext = ArrayContext; 
biesLanguageParser.InputStringContext = InputStringContext; 
