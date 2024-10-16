// Generated from ./grammar/biesLanguage.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import biesLanguageVisitor from './biesLanguageVisitor.js';

const serializedATN = [4,1,53,253,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,1,0,1,0,3,0,33,8,0,5,0,35,8,0,10,0,12,0,38,9,0,1,0,1,
0,1,1,1,1,1,1,1,1,3,1,46,8,1,1,1,1,1,3,1,50,8,1,5,1,52,8,1,10,1,12,1,55,
9,1,1,1,1,1,1,1,1,1,3,1,61,8,1,1,2,1,2,3,2,65,8,2,1,3,1,3,1,3,1,3,1,3,1,
3,1,3,1,3,1,3,1,3,3,3,77,8,3,1,4,1,4,5,4,81,8,4,10,4,12,4,84,9,4,1,4,3,4,
87,8,4,1,4,5,4,90,8,4,10,4,12,4,93,9,4,1,4,1,4,3,4,97,8,4,1,4,1,4,3,4,101,
8,4,1,4,1,4,3,4,105,8,4,1,4,1,4,3,4,109,8,4,1,4,1,4,3,4,113,8,4,1,4,1,4,
3,4,117,8,4,1,4,1,4,3,4,121,8,4,1,4,1,4,3,4,125,8,4,1,4,1,4,3,4,129,8,4,
1,4,1,4,3,4,133,8,4,3,4,135,8,4,1,5,1,5,3,5,139,8,5,1,5,1,5,3,5,143,8,5,
1,5,1,5,3,5,147,8,5,1,5,1,5,3,5,151,8,5,1,5,1,5,3,5,155,8,5,3,5,157,8,5,
1,6,1,6,3,6,161,8,6,1,6,1,6,3,6,165,8,6,1,6,1,6,3,6,169,8,6,1,6,1,6,3,6,
173,8,6,3,6,175,8,6,1,7,1,7,1,7,1,7,3,7,181,8,7,1,7,1,7,1,7,3,7,186,8,7,
1,7,1,7,1,7,3,7,191,8,7,1,7,1,7,3,7,195,8,7,1,8,1,8,1,9,1,9,3,9,201,8,9,
1,9,3,9,204,8,9,1,9,1,9,3,9,208,8,9,1,10,1,10,1,11,1,11,1,12,1,12,3,12,216,
8,12,1,12,5,12,219,8,12,10,12,12,12,222,9,12,1,13,1,13,1,13,1,13,5,13,228,
8,13,10,13,12,13,231,9,13,3,13,233,8,13,1,13,1,13,1,14,1,14,5,14,239,8,14,
10,14,12,14,242,9,14,1,14,3,14,245,8,14,1,14,5,14,248,8,14,10,14,12,14,251,
9,14,1,14,1,220,0,15,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,0,3,2,0,45,
45,47,47,2,0,6,6,20,23,2,0,7,9,32,33,305,0,36,1,0,0,0,2,41,1,0,0,0,4,64,
1,0,0,0,6,76,1,0,0,0,8,134,1,0,0,0,10,156,1,0,0,0,12,174,1,0,0,0,14,194,
1,0,0,0,16,196,1,0,0,0,18,207,1,0,0,0,20,209,1,0,0,0,22,211,1,0,0,0,24,213,
1,0,0,0,26,223,1,0,0,0,28,236,1,0,0,0,30,32,3,4,2,0,31,33,5,53,0,0,32,31,
1,0,0,0,32,33,1,0,0,0,33,35,1,0,0,0,34,30,1,0,0,0,35,38,1,0,0,0,36,34,1,
0,0,0,36,37,1,0,0,0,37,39,1,0,0,0,38,36,1,0,0,0,39,40,5,0,0,1,40,1,1,0,0,
0,41,42,5,42,0,0,42,43,5,51,0,0,43,45,5,44,0,0,44,46,5,53,0,0,45,44,1,0,
0,0,45,46,1,0,0,0,46,53,1,0,0,0,47,49,3,4,2,0,48,50,5,53,0,0,49,48,1,0,0,
0,49,50,1,0,0,0,50,52,1,0,0,0,51,47,1,0,0,0,52,55,1,0,0,0,53,51,1,0,0,0,
53,54,1,0,0,0,54,56,1,0,0,0,55,53,1,0,0,0,56,57,5,43,0,0,57,58,5,51,0,0,
58,60,5,44,0,0,59,61,5,53,0,0,60,59,1,0,0,0,60,61,1,0,0,0,61,3,1,0,0,0,62,
65,3,6,3,0,63,65,3,2,1,0,64,62,1,0,0,0,64,63,1,0,0,0,65,5,1,0,0,0,66,77,
3,8,4,0,67,77,3,10,5,0,68,77,3,14,7,0,69,77,3,18,9,0,70,77,3,22,11,0,71,
77,3,20,10,0,72,77,3,12,6,0,73,77,3,24,12,0,74,77,3,28,14,0,75,77,3,16,8,
0,76,66,1,0,0,0,76,67,1,0,0,0,76,68,1,0,0,0,76,69,1,0,0,0,76,70,1,0,0,0,
76,71,1,0,0,0,76,72,1,0,0,0,76,73,1,0,0,0,76,74,1,0,0,0,76,75,1,0,0,0,77,
7,1,0,0,0,78,82,5,13,0,0,79,81,5,51,0,0,80,79,1,0,0,0,81,84,1,0,0,0,82,80,
1,0,0,0,82,83,1,0,0,0,83,86,1,0,0,0,84,82,1,0,0,0,85,87,7,0,0,0,86,85,1,
0,0,0,86,87,1,0,0,0,87,91,1,0,0,0,88,90,5,51,0,0,89,88,1,0,0,0,90,93,1,0,
0,0,91,89,1,0,0,0,91,92,1,0,0,0,92,135,1,0,0,0,93,91,1,0,0,0,94,96,5,28,
0,0,95,97,5,51,0,0,96,95,1,0,0,0,96,97,1,0,0,0,97,98,1,0,0,0,98,100,5,45,
0,0,99,101,5,51,0,0,100,99,1,0,0,0,100,101,1,0,0,0,101,102,1,0,0,0,102,104,
5,45,0,0,103,105,5,51,0,0,104,103,1,0,0,0,104,105,1,0,0,0,105,135,1,0,0,
0,106,108,5,29,0,0,107,109,5,51,0,0,108,107,1,0,0,0,108,109,1,0,0,0,109,
110,1,0,0,0,110,112,5,45,0,0,111,113,5,51,0,0,112,111,1,0,0,0,112,113,1,
0,0,0,113,114,1,0,0,0,114,116,5,45,0,0,115,117,5,51,0,0,116,115,1,0,0,0,
116,117,1,0,0,0,117,135,1,0,0,0,118,120,5,30,0,0,119,121,5,51,0,0,120,119,
1,0,0,0,120,121,1,0,0,0,121,122,1,0,0,0,122,124,5,44,0,0,123,125,5,51,0,
0,124,123,1,0,0,0,124,125,1,0,0,0,125,135,1,0,0,0,126,128,5,31,0,0,127,129,
5,51,0,0,128,127,1,0,0,0,128,129,1,0,0,0,129,130,1,0,0,0,130,132,5,44,0,
0,131,133,5,51,0,0,132,131,1,0,0,0,132,133,1,0,0,0,133,135,1,0,0,0,134,78,
1,0,0,0,134,94,1,0,0,0,134,106,1,0,0,0,134,118,1,0,0,0,134,126,1,0,0,0,135,
9,1,0,0,0,136,138,5,14,0,0,137,139,5,51,0,0,138,137,1,0,0,0,138,139,1,0,
0,0,139,157,1,0,0,0,140,142,5,15,0,0,141,143,5,51,0,0,142,141,1,0,0,0,142,
143,1,0,0,0,143,157,1,0,0,0,144,146,5,16,0,0,145,147,5,51,0,0,146,145,1,
0,0,0,146,147,1,0,0,0,147,157,1,0,0,0,148,150,5,17,0,0,149,151,5,51,0,0,
150,149,1,0,0,0,150,151,1,0,0,0,151,157,1,0,0,0,152,154,5,18,0,0,153,155,
5,51,0,0,154,153,1,0,0,0,154,155,1,0,0,0,155,157,1,0,0,0,156,136,1,0,0,0,
156,140,1,0,0,0,156,144,1,0,0,0,156,148,1,0,0,0,156,152,1,0,0,0,157,11,1,
0,0,0,158,160,5,37,0,0,159,161,5,51,0,0,160,159,1,0,0,0,160,161,1,0,0,0,
161,175,1,0,0,0,162,164,5,40,0,0,163,165,5,51,0,0,164,163,1,0,0,0,164,165,
1,0,0,0,165,175,1,0,0,0,166,168,5,38,0,0,167,169,5,51,0,0,168,167,1,0,0,
0,168,169,1,0,0,0,169,175,1,0,0,0,170,172,5,39,0,0,171,173,5,51,0,0,172,
171,1,0,0,0,172,173,1,0,0,0,173,175,1,0,0,0,174,158,1,0,0,0,174,162,1,0,
0,0,174,166,1,0,0,0,174,170,1,0,0,0,175,13,1,0,0,0,176,195,5,24,0,0,177,
195,5,25,0,0,178,180,5,1,0,0,179,181,5,51,0,0,180,179,1,0,0,0,180,181,1,
0,0,0,181,182,1,0,0,0,182,195,5,45,0,0,183,185,5,2,0,0,184,186,5,51,0,0,
185,184,1,0,0,0,185,186,1,0,0,0,186,187,1,0,0,0,187,195,5,45,0,0,188,190,
5,3,0,0,189,191,5,51,0,0,190,189,1,0,0,0,190,191,1,0,0,0,191,192,1,0,0,0,
192,195,5,45,0,0,193,195,5,4,0,0,194,176,1,0,0,0,194,177,1,0,0,0,194,178,
1,0,0,0,194,183,1,0,0,0,194,188,1,0,0,0,194,193,1,0,0,0,195,15,1,0,0,0,196,
197,5,41,0,0,197,17,1,0,0,0,198,200,5,26,0,0,199,201,5,51,0,0,200,199,1,
0,0,0,200,201,1,0,0,0,201,203,1,0,0,0,202,204,5,45,0,0,203,202,1,0,0,0,203,
204,1,0,0,0,204,208,1,0,0,0,205,208,5,27,0,0,206,208,5,5,0,0,207,198,1,0,
0,0,207,205,1,0,0,0,207,206,1,0,0,0,208,19,1,0,0,0,209,210,7,1,0,0,210,21,
1,0,0,0,211,212,7,2,0,0,212,23,1,0,0,0,213,220,5,34,0,0,214,216,5,51,0,0,
215,214,1,0,0,0,215,216,1,0,0,0,216,217,1,0,0,0,217,219,7,0,0,0,218,215,
1,0,0,0,219,222,1,0,0,0,220,221,1,0,0,0,220,218,1,0,0,0,221,25,1,0,0,0,222,
220,1,0,0,0,223,232,5,10,0,0,224,229,7,0,0,0,225,226,5,11,0,0,226,228,7,
0,0,0,227,225,1,0,0,0,228,231,1,0,0,0,229,227,1,0,0,0,229,230,1,0,0,0,230,
233,1,0,0,0,231,229,1,0,0,0,232,224,1,0,0,0,232,233,1,0,0,0,233,234,1,0,
0,0,234,235,5,12,0,0,235,27,1,0,0,0,236,240,5,36,0,0,237,239,5,51,0,0,238,
237,1,0,0,0,239,242,1,0,0,0,240,238,1,0,0,0,240,241,1,0,0,0,241,244,1,0,
0,0,242,240,1,0,0,0,243,245,5,47,0,0,244,243,1,0,0,0,244,245,1,0,0,0,245,
249,1,0,0,0,246,248,5,51,0,0,247,246,1,0,0,0,248,251,1,0,0,0,249,247,1,0,
0,0,249,250,1,0,0,0,250,29,1,0,0,0,251,249,1,0,0,0,47,32,36,45,49,53,60,
64,76,82,86,91,96,100,104,108,112,116,120,124,128,132,134,138,142,146,150,
154,156,160,164,168,172,174,180,185,190,194,200,203,207,215,220,229,232,
240,244,249];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class biesLanguageParser extends antlr4.Parser {

    static grammarFileName = "biesLanguage.g4";
    static literalNames = [ null, "'BR'", "'BT'", "'BF'", "'NOP'", "'INP'", 
                            "'EQ'", "'CAT'", "'SNT'", "'TOS'", "'['", "','", 
                            "']'", "'LDV'", "'ADD'", "'MUL'", "'SUB'", "'DIV'", 
                            "'NEG'", "'ET'", "'GT'", "'GTE'", "'LT'", "'LTE'", 
                            "'RET'", "'HLT'", "'APP'", "'PRN'", "'BLD'", 
                            "'BST'", "'LDF'", "'INI'", "'STK'", "'SRK'", 
                            "'LIN'", "'CST'", "'INO'", "'AND'", "'OR'", 
                            "'XOR'", "'NOT'", "'SWP'", "'$FUN'", "'$END'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, "LDV", "ADD", 
                             "MUL", "SUB", "DIV", "NEG", "EQ", "GT", "GTE", 
                             "LT", "LTE", "RET", "HLT", "APP", "PRN", "BLD", 
                             "BST", "LDF", "INI", "STK", "SRK", "LIN", "CST", 
                             "INO", "AND", "OR", "XOR", "NOT", "SWP", "FUN", 
                             "END", "LABEL_IDENTIFIER", "NUMBER", "ID", 
                             "STRING", "TYPE", "VALUE", "COMMENT", "ES", 
                             "WS", "NL" ];
    static ruleNames = [ "program", "functionDef", "statement", "instruction", 
                         "loadInstr", "arithInstr", "logicalInst", "controlInstr", 
                         "stackInstr", "funcInstr", "comparisonInstr", "stringInstr", 
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
	        this.state = 36;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4294435838) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 2039) !== 0)) {
	            this.state = 30;
	            this.statement();
	            this.state = 32;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===53) {
	                this.state = 31;
	                this.match(biesLanguageParser.NL);
	            }

	            this.state = 38;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 39;
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
	        this.state = 41;
	        this.match(biesLanguageParser.FUN);
	        this.state = 42;
	        this.match(biesLanguageParser.ES);
	        this.state = 43;
	        this.match(biesLanguageParser.LABEL_IDENTIFIER);
	        this.state = 45;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===53) {
	            this.state = 44;
	            this.match(biesLanguageParser.NL);
	        }

	        this.state = 53;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4294435838) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 2039) !== 0)) {
	            this.state = 47;
	            this.statement();
	            this.state = 49;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===53) {
	                this.state = 48;
	                this.match(biesLanguageParser.NL);
	            }

	            this.state = 55;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 56;
	        this.match(biesLanguageParser.END);
	        this.state = 57;
	        this.match(biesLanguageParser.ES);
	        this.state = 58;
	        this.match(biesLanguageParser.LABEL_IDENTIFIER);
	        this.state = 60;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        if(la_===1) {
	            this.state = 59;
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
	        this.state = 64;
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
	        case 36:
	        case 37:
	        case 38:
	        case 39:
	        case 40:
	        case 41:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 62;
	            this.instruction();
	            break;
	        case 42:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 63;
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
	        this.state = 76;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 13:
	        case 28:
	        case 29:
	        case 30:
	        case 31:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 66;
	            this.loadInstr();
	            break;
	        case 14:
	        case 15:
	        case 16:
	        case 17:
	        case 18:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 67;
	            this.arithInstr();
	            break;
	        case 1:
	        case 2:
	        case 3:
	        case 4:
	        case 24:
	        case 25:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 68;
	            this.controlInstr();
	            break;
	        case 5:
	        case 26:
	        case 27:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 69;
	            this.funcInstr();
	            break;
	        case 7:
	        case 8:
	        case 9:
	        case 32:
	        case 33:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 70;
	            this.stringInstr();
	            break;
	        case 6:
	        case 20:
	        case 21:
	        case 22:
	        case 23:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 71;
	            this.comparisonInstr();
	            break;
	        case 37:
	        case 38:
	        case 39:
	        case 40:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 72;
	            this.logicalInst();
	            break;
	        case 34:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 73;
	            this.listInstr();
	            break;
	        case 36:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 74;
	            this.inputString();
	            break;
	        case 41:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 75;
	            this.stackInstr();
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
	        this.state = 134;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 13:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 78;
	            this.match(biesLanguageParser.LDV);
	            this.state = 82;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 79;
	                    this.match(biesLanguageParser.ES); 
	                }
	                this.state = 84;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,8,this._ctx);
	            }

	            this.state = 86;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===45 || _la===47) {
	                this.state = 85;
	                _la = this._input.LA(1);
	                if(!(_la===45 || _la===47)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	            }

	            this.state = 91;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===51) {
	                this.state = 88;
	                this.match(biesLanguageParser.ES);
	                this.state = 93;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            break;
	        case 28:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 94;
	            this.match(biesLanguageParser.BLD);
	            this.state = 96;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===51) {
	                this.state = 95;
	                this.match(biesLanguageParser.ES);
	            }

	            this.state = 98;
	            this.match(biesLanguageParser.NUMBER);
	            this.state = 100;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===51) {
	                this.state = 99;
	                this.match(biesLanguageParser.ES);
	            }

	            this.state = 102;
	            this.match(biesLanguageParser.NUMBER);
	            this.state = 104;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===51) {
	                this.state = 103;
	                this.match(biesLanguageParser.ES);
	            }

	            break;
	        case 29:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 106;
	            this.match(biesLanguageParser.BST);
	            this.state = 108;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===51) {
	                this.state = 107;
	                this.match(biesLanguageParser.ES);
	            }

	            this.state = 110;
	            this.match(biesLanguageParser.NUMBER);
	            this.state = 112;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===51) {
	                this.state = 111;
	                this.match(biesLanguageParser.ES);
	            }

	            this.state = 114;
	            this.match(biesLanguageParser.NUMBER);
	            this.state = 116;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===51) {
	                this.state = 115;
	                this.match(biesLanguageParser.ES);
	            }

	            break;
	        case 30:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 118;
	            this.match(biesLanguageParser.LDF);
	            this.state = 120;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===51) {
	                this.state = 119;
	                this.match(biesLanguageParser.ES);
	            }

	            this.state = 122;
	            this.match(biesLanguageParser.LABEL_IDENTIFIER);
	            this.state = 124;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===51) {
	                this.state = 123;
	                this.match(biesLanguageParser.ES);
	            }

	            break;
	        case 31:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 126;
	            this.match(biesLanguageParser.INI);
	            this.state = 128;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===51) {
	                this.state = 127;
	                this.match(biesLanguageParser.ES);
	            }

	            this.state = 130;
	            this.match(biesLanguageParser.LABEL_IDENTIFIER);
	            this.state = 132;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===51) {
	                this.state = 131;
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
	        this.state = 156;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 14:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 136;
	            this.match(biesLanguageParser.ADD);
	            this.state = 138;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===51) {
	                this.state = 137;
	                this.match(biesLanguageParser.ES);
	            }

	            break;
	        case 15:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 140;
	            this.match(biesLanguageParser.MUL);
	            this.state = 142;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===51) {
	                this.state = 141;
	                this.match(biesLanguageParser.ES);
	            }

	            break;
	        case 16:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 144;
	            this.match(biesLanguageParser.SUB);
	            this.state = 146;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===51) {
	                this.state = 145;
	                this.match(biesLanguageParser.ES);
	            }

	            break;
	        case 17:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 148;
	            this.match(biesLanguageParser.DIV);
	            this.state = 150;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===51) {
	                this.state = 149;
	                this.match(biesLanguageParser.ES);
	            }

	            break;
	        case 18:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 152;
	            this.match(biesLanguageParser.NEG);
	            this.state = 154;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===51) {
	                this.state = 153;
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
	        this.state = 174;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 37:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 158;
	            this.match(biesLanguageParser.AND);
	            this.state = 160;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===51) {
	                this.state = 159;
	                this.match(biesLanguageParser.ES);
	            }

	            break;
	        case 40:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 162;
	            this.match(biesLanguageParser.NOT);
	            this.state = 164;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===51) {
	                this.state = 163;
	                this.match(biesLanguageParser.ES);
	            }

	            break;
	        case 38:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 166;
	            this.match(biesLanguageParser.OR);
	            this.state = 168;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===51) {
	                this.state = 167;
	                this.match(biesLanguageParser.ES);
	            }

	            break;
	        case 39:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 170;
	            this.match(biesLanguageParser.XOR);
	            this.state = 172;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===51) {
	                this.state = 171;
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
	        this.state = 194;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 24:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 176;
	            this.match(biesLanguageParser.RET);
	            break;
	        case 25:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 177;
	            this.match(biesLanguageParser.HLT);
	            break;
	        case 1:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 178;
	            this.match(biesLanguageParser.T__0);
	            this.state = 180;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===51) {
	                this.state = 179;
	                this.match(biesLanguageParser.ES);
	            }

	            this.state = 182;
	            this.match(biesLanguageParser.NUMBER);
	            break;
	        case 2:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 183;
	            this.match(biesLanguageParser.T__1);
	            this.state = 185;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===51) {
	                this.state = 184;
	                this.match(biesLanguageParser.ES);
	            }

	            this.state = 187;
	            this.match(biesLanguageParser.NUMBER);
	            break;
	        case 3:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 188;
	            this.match(biesLanguageParser.T__2);
	            this.state = 190;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===51) {
	                this.state = 189;
	                this.match(biesLanguageParser.ES);
	            }

	            this.state = 192;
	            this.match(biesLanguageParser.NUMBER);
	            break;
	        case 4:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 193;
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
	        this.state = 196;
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
	        this.state = 207;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 26:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 198;
	            this.match(biesLanguageParser.APP);
	            this.state = 200;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===51) {
	                this.state = 199;
	                this.match(biesLanguageParser.ES);
	            }

	            this.state = 203;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===45) {
	                this.state = 202;
	                this.match(biesLanguageParser.NUMBER);
	            }

	            break;
	        case 27:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 205;
	            this.match(biesLanguageParser.PRN);
	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 206;
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
	        this.state = 209;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 15728704) !== 0))) {
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
	        this.state = 211;
	        _la = this._input.LA(1);
	        if(!(((((_la - 7)) & ~0x1f) === 0 && ((1 << (_la - 7)) & 100663303) !== 0))) {
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
	        this.enterOuterAlt(localctx, 1);
	        this.state = 213;
	        this.match(biesLanguageParser.LIN);
	        this.state = 220;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,41,this._ctx)
	        while(_alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1+1) {
	                this.state = 215;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===51) {
	                    this.state = 214;
	                    this.match(biesLanguageParser.ES);
	                }

	                this.state = 217;
	                _la = this._input.LA(1);
	                if(!(_la===45 || _la===47)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                } 
	            }
	            this.state = 222;
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
	    this.enterRule(localctx, 26, biesLanguageParser.RULE_array);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 223;
	        this.match(biesLanguageParser.T__9);
	        this.state = 232;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===45 || _la===47) {
	            this.state = 224;
	            _la = this._input.LA(1);
	            if(!(_la===45 || _la===47)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 229;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===11) {
	                this.state = 225;
	                this.match(biesLanguageParser.T__10);
	                this.state = 226;
	                _la = this._input.LA(1);
	                if(!(_la===45 || _la===47)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 231;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 234;
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



	inputString() {
	    let localctx = new InputStringContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, biesLanguageParser.RULE_inputString);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 236;
	        this.match(biesLanguageParser.INO);
	        this.state = 240;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,44,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 237;
	                this.match(biesLanguageParser.ES); 
	            }
	            this.state = 242;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,44,this._ctx);
	        }

	        this.state = 244;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===47) {
	            this.state = 243;
	            this.match(biesLanguageParser.STRING);
	        }

	        this.state = 249;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===51) {
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
biesLanguageParser.LDV = 13;
biesLanguageParser.ADD = 14;
biesLanguageParser.MUL = 15;
biesLanguageParser.SUB = 16;
biesLanguageParser.DIV = 17;
biesLanguageParser.NEG = 18;
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
biesLanguageParser.CST = 35;
biesLanguageParser.INO = 36;
biesLanguageParser.AND = 37;
biesLanguageParser.OR = 38;
biesLanguageParser.XOR = 39;
biesLanguageParser.NOT = 40;
biesLanguageParser.SWP = 41;
biesLanguageParser.FUN = 42;
biesLanguageParser.END = 43;
biesLanguageParser.LABEL_IDENTIFIER = 44;
biesLanguageParser.NUMBER = 45;
biesLanguageParser.ID = 46;
biesLanguageParser.STRING = 47;
biesLanguageParser.TYPE = 48;
biesLanguageParser.VALUE = 49;
biesLanguageParser.COMMENT = 50;
biesLanguageParser.ES = 51;
biesLanguageParser.WS = 52;
biesLanguageParser.NL = 53;

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
biesLanguageParser.RULE_array = 13;
biesLanguageParser.RULE_inputString = 14;

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

	stackInstr() {
	    return this.getTypedRuleContext(StackInstrContext,0);
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
biesLanguageParser.StackInstrContext = StackInstrContext; 
biesLanguageParser.FuncInstrContext = FuncInstrContext; 
biesLanguageParser.ComparisonInstrContext = ComparisonInstrContext; 
biesLanguageParser.StringInstrContext = StringInstrContext; 
biesLanguageParser.ListInstrContext = ListInstrContext; 
biesLanguageParser.ArrayContext = ArrayContext; 
biesLanguageParser.InputStringContext = InputStringContext; 
