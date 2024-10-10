// Generated from ./grammar/biesLanguage.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import biesLanguageVisitor from './biesLanguageVisitor.js';

const serializedATN = [4,1,44,227,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,1,0,1,0,3,
0,27,8,0,5,0,29,8,0,10,0,12,0,32,9,0,1,0,1,0,1,1,1,1,1,1,1,1,3,1,40,8,1,
1,1,1,1,3,1,44,8,1,5,1,46,8,1,10,1,12,1,49,9,1,1,1,1,1,1,1,1,1,3,1,55,8,
1,1,2,1,2,3,2,59,8,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,68,8,3,1,4,1,4,5,4,
72,8,4,10,4,12,4,75,9,4,1,4,3,4,78,8,4,1,4,5,4,81,8,4,10,4,12,4,84,9,4,1,
4,1,4,3,4,88,8,4,1,4,1,4,3,4,92,8,4,1,4,1,4,3,4,96,8,4,1,4,1,4,3,4,100,8,
4,1,4,1,4,3,4,104,8,4,1,4,1,4,3,4,108,8,4,1,4,1,4,3,4,112,8,4,1,4,1,4,3,
4,116,8,4,1,4,1,4,3,4,120,8,4,1,4,1,4,3,4,124,8,4,3,4,126,8,4,1,5,1,5,3,
5,130,8,5,1,5,1,5,3,5,134,8,5,1,5,1,5,1,5,3,5,139,8,5,1,5,1,5,3,5,143,8,
5,1,5,1,5,3,5,147,8,5,1,5,1,5,3,5,151,8,5,1,5,1,5,3,5,155,8,5,1,5,1,5,3,
5,159,8,5,3,5,161,8,5,1,6,1,6,1,6,1,6,3,6,167,8,6,1,6,1,6,1,6,3,6,172,8,
6,1,6,1,6,1,6,3,6,177,8,6,1,6,1,6,3,6,181,8,6,1,7,1,7,3,7,185,8,7,1,7,3,
7,188,8,7,1,7,1,7,3,7,192,8,7,1,8,1,8,1,9,1,9,3,9,198,8,9,1,9,1,9,3,9,202,
8,9,1,10,1,10,3,10,206,8,10,1,10,5,10,209,8,10,10,10,12,10,212,9,10,1,11,
1,11,1,11,1,11,5,11,218,8,11,10,11,12,11,221,9,11,3,11,223,8,11,1,11,1,11,
1,11,1,210,0,12,0,2,4,6,8,10,12,14,16,18,20,22,0,2,2,0,38,38,40,40,2,0,7,
7,20,23,277,0,30,1,0,0,0,2,35,1,0,0,0,4,58,1,0,0,0,6,67,1,0,0,0,8,125,1,
0,0,0,10,160,1,0,0,0,12,180,1,0,0,0,14,191,1,0,0,0,16,193,1,0,0,0,18,201,
1,0,0,0,20,203,1,0,0,0,22,213,1,0,0,0,24,26,3,4,2,0,25,27,5,44,0,0,26,25,
1,0,0,0,26,27,1,0,0,0,27,29,1,0,0,0,28,24,1,0,0,0,29,32,1,0,0,0,30,28,1,
0,0,0,30,31,1,0,0,0,31,33,1,0,0,0,32,30,1,0,0,0,33,34,5,0,0,1,34,1,1,0,0,
0,35,36,5,35,0,0,36,37,5,42,0,0,37,39,5,37,0,0,38,40,5,44,0,0,39,38,1,0,
0,0,39,40,1,0,0,0,40,47,1,0,0,0,41,43,3,4,2,0,42,44,5,44,0,0,43,42,1,0,0,
0,43,44,1,0,0,0,44,46,1,0,0,0,45,41,1,0,0,0,46,49,1,0,0,0,47,45,1,0,0,0,
47,48,1,0,0,0,48,50,1,0,0,0,49,47,1,0,0,0,50,51,5,36,0,0,51,52,5,42,0,0,
52,54,5,37,0,0,53,55,5,44,0,0,54,53,1,0,0,0,54,55,1,0,0,0,55,3,1,0,0,0,56,
59,3,6,3,0,57,59,3,2,1,0,58,56,1,0,0,0,58,57,1,0,0,0,59,5,1,0,0,0,60,68,
3,8,4,0,61,68,3,10,5,0,62,68,3,12,6,0,63,68,3,14,7,0,64,68,3,18,9,0,65,68,
3,16,8,0,66,68,3,20,10,0,67,60,1,0,0,0,67,61,1,0,0,0,67,62,1,0,0,0,67,63,
1,0,0,0,67,64,1,0,0,0,67,65,1,0,0,0,67,66,1,0,0,0,68,7,1,0,0,0,69,73,5,11,
0,0,70,72,5,42,0,0,71,70,1,0,0,0,72,75,1,0,0,0,73,71,1,0,0,0,73,74,1,0,0,
0,74,77,1,0,0,0,75,73,1,0,0,0,76,78,7,0,0,0,77,76,1,0,0,0,77,78,1,0,0,0,
78,82,1,0,0,0,79,81,5,42,0,0,80,79,1,0,0,0,81,84,1,0,0,0,82,80,1,0,0,0,82,
83,1,0,0,0,83,126,1,0,0,0,84,82,1,0,0,0,85,87,5,28,0,0,86,88,5,42,0,0,87,
86,1,0,0,0,87,88,1,0,0,0,88,89,1,0,0,0,89,91,5,38,0,0,90,92,5,42,0,0,91,
90,1,0,0,0,91,92,1,0,0,0,92,93,1,0,0,0,93,95,5,38,0,0,94,96,5,42,0,0,95,
94,1,0,0,0,95,96,1,0,0,0,96,126,1,0,0,0,97,99,5,29,0,0,98,100,5,42,0,0,99,
98,1,0,0,0,99,100,1,0,0,0,100,101,1,0,0,0,101,103,5,38,0,0,102,104,5,42,
0,0,103,102,1,0,0,0,103,104,1,0,0,0,104,105,1,0,0,0,105,107,5,38,0,0,106,
108,5,42,0,0,107,106,1,0,0,0,107,108,1,0,0,0,108,126,1,0,0,0,109,111,5,30,
0,0,110,112,5,42,0,0,111,110,1,0,0,0,111,112,1,0,0,0,112,113,1,0,0,0,113,
115,5,37,0,0,114,116,5,42,0,0,115,114,1,0,0,0,115,116,1,0,0,0,116,126,1,
0,0,0,117,119,5,31,0,0,118,120,5,42,0,0,119,118,1,0,0,0,119,120,1,0,0,0,
120,121,1,0,0,0,121,123,5,37,0,0,122,124,5,42,0,0,123,122,1,0,0,0,123,124,
1,0,0,0,124,126,1,0,0,0,125,69,1,0,0,0,125,85,1,0,0,0,125,97,1,0,0,0,125,
109,1,0,0,0,125,117,1,0,0,0,126,9,1,0,0,0,127,129,5,12,0,0,128,130,5,42,
0,0,129,128,1,0,0,0,129,130,1,0,0,0,130,161,1,0,0,0,131,133,5,1,0,0,132,
134,5,42,0,0,133,132,1,0,0,0,133,134,1,0,0,0,134,135,1,0,0,0,135,161,5,38,
0,0,136,138,5,13,0,0,137,139,5,42,0,0,138,137,1,0,0,0,138,139,1,0,0,0,139,
161,1,0,0,0,140,142,5,14,0,0,141,143,5,42,0,0,142,141,1,0,0,0,142,143,1,
0,0,0,143,161,1,0,0,0,144,146,5,15,0,0,145,147,5,42,0,0,146,145,1,0,0,0,
146,147,1,0,0,0,147,161,1,0,0,0,148,150,5,16,0,0,149,151,5,42,0,0,150,149,
1,0,0,0,150,151,1,0,0,0,151,161,1,0,0,0,152,154,5,17,0,0,153,155,5,42,0,
0,154,153,1,0,0,0,154,155,1,0,0,0,155,161,1,0,0,0,156,158,5,18,0,0,157,159,
5,42,0,0,158,157,1,0,0,0,158,159,1,0,0,0,159,161,1,0,0,0,160,127,1,0,0,0,
160,131,1,0,0,0,160,136,1,0,0,0,160,140,1,0,0,0,160,144,1,0,0,0,160,148,
1,0,0,0,160,152,1,0,0,0,160,156,1,0,0,0,161,11,1,0,0,0,162,181,5,24,0,0,
163,181,5,25,0,0,164,166,5,2,0,0,165,167,5,42,0,0,166,165,1,0,0,0,166,167,
1,0,0,0,167,168,1,0,0,0,168,181,5,38,0,0,169,171,5,3,0,0,170,172,5,42,0,
0,171,170,1,0,0,0,171,172,1,0,0,0,172,173,1,0,0,0,173,181,5,38,0,0,174,176,
5,4,0,0,175,177,5,42,0,0,176,175,1,0,0,0,176,177,1,0,0,0,177,178,1,0,0,0,
178,181,5,38,0,0,179,181,5,5,0,0,180,162,1,0,0,0,180,163,1,0,0,0,180,164,
1,0,0,0,180,169,1,0,0,0,180,174,1,0,0,0,180,179,1,0,0,0,181,13,1,0,0,0,182,
184,5,26,0,0,183,185,5,42,0,0,184,183,1,0,0,0,184,185,1,0,0,0,185,187,1,
0,0,0,186,188,5,38,0,0,187,186,1,0,0,0,187,188,1,0,0,0,188,192,1,0,0,0,189,
192,5,27,0,0,190,192,5,6,0,0,191,182,1,0,0,0,191,189,1,0,0,0,191,190,1,0,
0,0,192,15,1,0,0,0,193,194,7,1,0,0,194,17,1,0,0,0,195,197,5,32,0,0,196,198,
5,42,0,0,197,196,1,0,0,0,197,198,1,0,0,0,198,202,1,0,0,0,199,200,5,33,0,
0,200,202,5,38,0,0,201,195,1,0,0,0,201,199,1,0,0,0,202,19,1,0,0,0,203,210,
5,34,0,0,204,206,5,42,0,0,205,204,1,0,0,0,205,206,1,0,0,0,206,207,1,0,0,
0,207,209,7,0,0,0,208,205,1,0,0,0,209,212,1,0,0,0,210,211,1,0,0,0,210,208,
1,0,0,0,211,21,1,0,0,0,212,210,1,0,0,0,213,222,5,8,0,0,214,219,7,0,0,0,215,
216,5,9,0,0,216,218,7,0,0,0,217,215,1,0,0,0,218,221,1,0,0,0,219,217,1,0,
0,0,219,220,1,0,0,0,220,223,1,0,0,0,221,219,1,0,0,0,222,214,1,0,0,0,222,
223,1,0,0,0,223,224,1,0,0,0,224,225,5,10,0,0,225,23,1,0,0,0,44,26,30,39,
43,47,54,58,67,73,77,82,87,91,95,99,103,107,111,115,119,123,125,129,133,
138,142,146,150,154,158,160,166,171,176,180,184,187,191,197,201,205,210,
219,222];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class biesLanguageParser extends antlr4.Parser {

    static grammarFileName = "biesLanguage.g4";
    static literalNames = [ null, "'PLUS'", "'BR'", "'BT'", "'BF'", "'NOP'", 
                            "'INP'", "'EQ'", "'['", "','", "']'", "'LDV'", 
                            "'ADD'", "'MUL'", "'SUB'", "'DIV'", "'NEG'", 
                            "'SQRT'", "'POW'", "'ET'", "'GT'", "'GTE'", 
                            "'LT'", "'LTE'", "'RET'", "'HLT'", "'APP'", 
                            "'PRN'", "'BLD'", "'BST'", "'LDF'", "'INI'", 
                            "'STK'", "'SRK'", "'LIN'", "'$FUN'", "'$END'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, "LDV", "ADD", "MUL", "SUB", 
                             "DIV", "NEG", "SQRT", "POW", "EQ", "GT", "GTE", 
                             "LT", "LTE", "RET", "HLT", "APP", "PRN", "BLD", 
                             "BST", "LDF", "INI", "STK", "SRK", "LIN", "FUN", 
                             "END", "LABEL_IDENTIFIER", "NUMBER", "ID", 
                             "STRING", "COMMENT", "ES", "WS", "NL" ];
    static ruleNames = [ "program", "functionDef", "statement", "instruction", 
                         "loadInstr", "arithInstr", "controlInstr", "funcInstr", 
                         "comparisonInstr", "stringInstr", "listInstr", 
                         "array" ];

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
	        this.state = 30;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4294441214) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 15) !== 0)) {
	            this.state = 24;
	            this.statement();
	            this.state = 26;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===44) {
	                this.state = 25;
	                this.match(biesLanguageParser.NL);
	            }

	            this.state = 32;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 33;
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
	        this.state = 35;
	        this.match(biesLanguageParser.FUN);
	        this.state = 36;
	        this.match(biesLanguageParser.ES);
	        this.state = 37;
	        this.match(biesLanguageParser.LABEL_IDENTIFIER);
	        this.state = 39;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===44) {
	            this.state = 38;
	            this.match(biesLanguageParser.NL);
	        }

	        this.state = 47;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4294441214) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 15) !== 0)) {
	            this.state = 41;
	            this.statement();
	            this.state = 43;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===44) {
	                this.state = 42;
	                this.match(biesLanguageParser.NL);
	            }

	            this.state = 49;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 50;
	        this.match(biesLanguageParser.END);
	        this.state = 51;
	        this.match(biesLanguageParser.ES);
	        this.state = 52;
	        this.match(biesLanguageParser.LABEL_IDENTIFIER);
	        this.state = 54;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        if(la_===1) {
	            this.state = 53;
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
	        this.state = 58;
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
	        case 17:
	        case 18:
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
	        case 33:
	        case 34:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 56;
	            this.instruction();
	            break;
	        case 35:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 57;
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
	        this.state = 67;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 11:
	        case 28:
	        case 29:
	        case 30:
	        case 31:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 60;
	            this.loadInstr();
	            break;
	        case 1:
	        case 12:
	        case 13:
	        case 14:
	        case 15:
	        case 16:
	        case 17:
	        case 18:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 61;
	            this.arithInstr();
	            break;
	        case 2:
	        case 3:
	        case 4:
	        case 5:
	        case 24:
	        case 25:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 62;
	            this.controlInstr();
	            break;
	        case 6:
	        case 26:
	        case 27:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 63;
	            this.funcInstr();
	            break;
	        case 32:
	        case 33:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 64;
	            this.stringInstr();
	            break;
	        case 7:
	        case 20:
	        case 21:
	        case 22:
	        case 23:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 65;
	            this.comparisonInstr();
	            break;
	        case 34:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 66;
	            this.listInstr();
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
	        this.state = 125;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 11:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 69;
	            this.match(biesLanguageParser.LDV);
	            this.state = 73;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 70;
	                    this.match(biesLanguageParser.ES); 
	                }
	                this.state = 75;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,8,this._ctx);
	            }

	            this.state = 77;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===38 || _la===40) {
	                this.state = 76;
	                _la = this._input.LA(1);
	                if(!(_la===38 || _la===40)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	            }

	            this.state = 82;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===42) {
	                this.state = 79;
	                this.match(biesLanguageParser.ES);
	                this.state = 84;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            break;
	        case 28:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 85;
	            this.match(biesLanguageParser.BLD);
	            this.state = 87;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===42) {
	                this.state = 86;
	                this.match(biesLanguageParser.ES);
	            }

	            this.state = 89;
	            this.match(biesLanguageParser.NUMBER);
	            this.state = 91;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===42) {
	                this.state = 90;
	                this.match(biesLanguageParser.ES);
	            }

	            this.state = 93;
	            this.match(biesLanguageParser.NUMBER);
	            this.state = 95;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===42) {
	                this.state = 94;
	                this.match(biesLanguageParser.ES);
	            }

	            break;
	        case 29:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 97;
	            this.match(biesLanguageParser.BST);
	            this.state = 99;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===42) {
	                this.state = 98;
	                this.match(biesLanguageParser.ES);
	            }

	            this.state = 101;
	            this.match(biesLanguageParser.NUMBER);
	            this.state = 103;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===42) {
	                this.state = 102;
	                this.match(biesLanguageParser.ES);
	            }

	            this.state = 105;
	            this.match(biesLanguageParser.NUMBER);
	            this.state = 107;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===42) {
	                this.state = 106;
	                this.match(biesLanguageParser.ES);
	            }

	            break;
	        case 30:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 109;
	            this.match(biesLanguageParser.LDF);
	            this.state = 111;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===42) {
	                this.state = 110;
	                this.match(biesLanguageParser.ES);
	            }

	            this.state = 113;
	            this.match(biesLanguageParser.LABEL_IDENTIFIER);
	            this.state = 115;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===42) {
	                this.state = 114;
	                this.match(biesLanguageParser.ES);
	            }

	            break;
	        case 31:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 117;
	            this.match(biesLanguageParser.INI);
	            this.state = 119;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===42) {
	                this.state = 118;
	                this.match(biesLanguageParser.ES);
	            }

	            this.state = 121;
	            this.match(biesLanguageParser.LABEL_IDENTIFIER);
	            this.state = 123;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===42) {
	                this.state = 122;
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
	        this.state = 160;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 12:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 127;
	            this.match(biesLanguageParser.ADD);
	            this.state = 129;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===42) {
	                this.state = 128;
	                this.match(biesLanguageParser.ES);
	            }

	            break;
	        case 1:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 131;
	            this.match(biesLanguageParser.T__0);
	            this.state = 133;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===42) {
	                this.state = 132;
	                this.match(biesLanguageParser.ES);
	            }

	            this.state = 135;
	            this.match(biesLanguageParser.NUMBER);
	            break;
	        case 13:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 136;
	            this.match(biesLanguageParser.MUL);
	            this.state = 138;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===42) {
	                this.state = 137;
	                this.match(biesLanguageParser.ES);
	            }

	            break;
	        case 14:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 140;
	            this.match(biesLanguageParser.SUB);
	            this.state = 142;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===42) {
	                this.state = 141;
	                this.match(biesLanguageParser.ES);
	            }

	            break;
	        case 15:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 144;
	            this.match(biesLanguageParser.DIV);
	            this.state = 146;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===42) {
	                this.state = 145;
	                this.match(biesLanguageParser.ES);
	            }

	            break;
	        case 16:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 148;
	            this.match(biesLanguageParser.NEG);
	            this.state = 150;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===42) {
	                this.state = 149;
	                this.match(biesLanguageParser.ES);
	            }

	            break;
	        case 17:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 152;
	            this.match(biesLanguageParser.SQRT);
	            this.state = 154;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===42) {
	                this.state = 153;
	                this.match(biesLanguageParser.ES);
	            }

	            break;
	        case 18:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 156;
	            this.match(biesLanguageParser.POW);
	            this.state = 158;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===42) {
	                this.state = 157;
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
	    this.enterRule(localctx, 12, biesLanguageParser.RULE_controlInstr);
	    var _la = 0;
	    try {
	        this.state = 180;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 24:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 162;
	            this.match(biesLanguageParser.RET);
	            break;
	        case 25:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 163;
	            this.match(biesLanguageParser.HLT);
	            break;
	        case 2:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 164;
	            this.match(biesLanguageParser.T__1);
	            this.state = 166;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===42) {
	                this.state = 165;
	                this.match(biesLanguageParser.ES);
	            }

	            this.state = 168;
	            this.match(biesLanguageParser.NUMBER);
	            break;
	        case 3:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 169;
	            this.match(biesLanguageParser.T__2);
	            this.state = 171;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===42) {
	                this.state = 170;
	                this.match(biesLanguageParser.ES);
	            }

	            this.state = 173;
	            this.match(biesLanguageParser.NUMBER);
	            break;
	        case 4:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 174;
	            this.match(biesLanguageParser.T__3);
	            this.state = 176;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===42) {
	                this.state = 175;
	                this.match(biesLanguageParser.ES);
	            }

	            this.state = 178;
	            this.match(biesLanguageParser.NUMBER);
	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 179;
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
	    this.enterRule(localctx, 14, biesLanguageParser.RULE_funcInstr);
	    var _la = 0;
	    try {
	        this.state = 191;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 26:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 182;
	            this.match(biesLanguageParser.APP);
	            this.state = 184;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===42) {
	                this.state = 183;
	                this.match(biesLanguageParser.ES);
	            }

	            this.state = 187;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===38) {
	                this.state = 186;
	                this.match(biesLanguageParser.NUMBER);
	            }

	            break;
	        case 27:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 189;
	            this.match(biesLanguageParser.PRN);
	            break;
	        case 6:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 190;
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
	    this.enterRule(localctx, 16, biesLanguageParser.RULE_comparisonInstr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 193;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 15728768) !== 0))) {
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
	    this.enterRule(localctx, 18, biesLanguageParser.RULE_stringInstr);
	    var _la = 0;
	    try {
	        this.state = 201;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 32:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 195;
	            this.match(biesLanguageParser.STK);
	            this.state = 197;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===42) {
	                this.state = 196;
	                this.match(biesLanguageParser.ES);
	            }

	            break;
	        case 33:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 199;
	            this.match(biesLanguageParser.SRK);
	            this.state = 200;
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
	    this.enterRule(localctx, 20, biesLanguageParser.RULE_listInstr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 203;
	        this.match(biesLanguageParser.LIN);
	        this.state = 210;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,41,this._ctx)
	        while(_alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1+1) {
	                this.state = 205;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===42) {
	                    this.state = 204;
	                    this.match(biesLanguageParser.ES);
	                }

	                this.state = 207;
	                _la = this._input.LA(1);
	                if(!(_la===38 || _la===40)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                } 
	            }
	            this.state = 212;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,41,this._ctx);
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
	    this.enterRule(localctx, 22, biesLanguageParser.RULE_array);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 213;
	        this.match(biesLanguageParser.T__7);
	        this.state = 222;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===38 || _la===40) {
	            this.state = 214;
	            _la = this._input.LA(1);
	            if(!(_la===38 || _la===40)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 219;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===9) {
	                this.state = 215;
	                this.match(biesLanguageParser.T__8);
	                this.state = 216;
	                _la = this._input.LA(1);
	                if(!(_la===38 || _la===40)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 221;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 224;
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
biesLanguageParser.SQRT = 17;
biesLanguageParser.POW = 18;
biesLanguageParser.EQ = 19;
biesLanguageParser.GT = 20;
biesLanguageParser.GTE = 21;
biesLanguageParser.LT = 22;
biesLanguageParser.LTE = 23;
biesLanguageParser.RET = 24;
biesLanguageParser.HLT = 25;
biesLanguageParser.APP = 26;
biesLanguageParser.PRN = 27;
biesLanguageParser.BLD = 28;
biesLanguageParser.BST = 29;
biesLanguageParser.LDF = 30;
biesLanguageParser.INI = 31;
biesLanguageParser.STK = 32;
biesLanguageParser.SRK = 33;
biesLanguageParser.LIN = 34;
biesLanguageParser.FUN = 35;
biesLanguageParser.END = 36;
biesLanguageParser.LABEL_IDENTIFIER = 37;
biesLanguageParser.NUMBER = 38;
biesLanguageParser.ID = 39;
biesLanguageParser.STRING = 40;
biesLanguageParser.COMMENT = 41;
biesLanguageParser.ES = 42;
biesLanguageParser.WS = 43;
biesLanguageParser.NL = 44;

biesLanguageParser.RULE_program = 0;
biesLanguageParser.RULE_functionDef = 1;
biesLanguageParser.RULE_statement = 2;
biesLanguageParser.RULE_instruction = 3;
biesLanguageParser.RULE_loadInstr = 4;
biesLanguageParser.RULE_arithInstr = 5;
biesLanguageParser.RULE_controlInstr = 6;
biesLanguageParser.RULE_funcInstr = 7;
biesLanguageParser.RULE_comparisonInstr = 8;
biesLanguageParser.RULE_stringInstr = 9;
biesLanguageParser.RULE_listInstr = 10;
biesLanguageParser.RULE_array = 11;

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

	listInstr() {
	    return this.getTypedRuleContext(ListInstrContext,0);
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

	SQRT() {
	    return this.getToken(biesLanguageParser.SQRT, 0);
	};

	POW() {
	    return this.getToken(biesLanguageParser.POW, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesLanguageVisitor ) {
	        return visitor.visitArithInstr(this);
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




biesLanguageParser.ProgramContext = ProgramContext; 
biesLanguageParser.FunctionDefContext = FunctionDefContext; 
biesLanguageParser.StatementContext = StatementContext; 
biesLanguageParser.InstructionContext = InstructionContext; 
biesLanguageParser.LoadInstrContext = LoadInstrContext; 
biesLanguageParser.ArithInstrContext = ArithInstrContext; 
biesLanguageParser.ControlInstrContext = ControlInstrContext; 
biesLanguageParser.FuncInstrContext = FuncInstrContext; 
biesLanguageParser.ComparisonInstrContext = ComparisonInstrContext; 
biesLanguageParser.StringInstrContext = StringInstrContext; 
biesLanguageParser.ListInstrContext = ListInstrContext; 
biesLanguageParser.ArrayContext = ArrayContext; 
