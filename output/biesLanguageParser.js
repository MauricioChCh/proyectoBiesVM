// Generated from ./grammar/biesLanguage.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import biesLanguageVisitor from './biesLanguageVisitor.js';

const serializedATN = [4,1,38,220,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,1,0,1,0,3,
0,27,8,0,5,0,29,8,0,10,0,12,0,32,9,0,1,0,1,0,1,1,1,1,1,1,1,1,3,1,40,8,1,
1,1,1,1,3,1,44,8,1,5,1,46,8,1,10,1,12,1,49,9,1,1,1,1,1,1,1,1,1,3,1,55,8,
1,1,2,1,2,3,2,59,8,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,68,8,3,1,4,1,4,3,4,
72,8,4,1,4,3,4,75,8,4,1,4,3,4,78,8,4,1,4,1,4,3,4,82,8,4,1,4,1,4,3,4,86,8,
4,1,4,1,4,3,4,90,8,4,1,4,1,4,3,4,94,8,4,1,4,1,4,3,4,98,8,4,1,4,1,4,3,4,102,
8,4,1,4,1,4,3,4,106,8,4,1,4,1,4,3,4,110,8,4,1,4,1,4,3,4,114,8,4,1,4,1,4,
3,4,118,8,4,3,4,120,8,4,1,5,1,5,3,5,124,8,5,1,5,1,5,3,5,128,8,5,1,5,1,5,
3,5,132,8,5,1,5,1,5,3,5,136,8,5,1,5,1,5,3,5,140,8,5,1,5,1,5,3,5,144,8,5,
1,5,1,5,3,5,148,8,5,3,5,150,8,5,1,6,1,6,1,6,1,6,3,6,156,8,6,1,6,1,6,1,6,
3,6,161,8,6,1,6,1,6,1,6,3,6,166,8,6,1,6,1,6,3,6,170,8,6,1,7,1,7,3,7,174,
8,7,1,7,3,7,177,8,7,1,7,1,7,3,7,181,8,7,1,8,1,8,1,9,1,9,3,9,187,8,9,1,9,
1,9,1,9,3,9,192,8,9,1,9,3,9,195,8,9,1,10,1,10,3,10,199,8,10,1,10,5,10,202,
8,10,10,10,12,10,205,9,10,1,11,1,11,1,11,1,11,5,11,211,8,11,10,11,12,11,
214,9,11,3,11,216,8,11,1,11,1,11,1,11,1,203,0,12,0,2,4,6,8,10,12,14,16,18,
20,22,0,1,2,0,32,32,34,34,269,0,30,1,0,0,0,2,35,1,0,0,0,4,58,1,0,0,0,6,67,
1,0,0,0,8,119,1,0,0,0,10,149,1,0,0,0,12,169,1,0,0,0,14,180,1,0,0,0,16,182,
1,0,0,0,18,194,1,0,0,0,20,196,1,0,0,0,22,206,1,0,0,0,24,26,3,4,2,0,25,27,
5,38,0,0,26,25,1,0,0,0,26,27,1,0,0,0,27,29,1,0,0,0,28,24,1,0,0,0,29,32,1,
0,0,0,30,28,1,0,0,0,30,31,1,0,0,0,31,33,1,0,0,0,32,30,1,0,0,0,33,34,5,0,
0,1,34,1,1,0,0,0,35,36,5,29,0,0,36,37,5,36,0,0,37,39,5,31,0,0,38,40,5,38,
0,0,39,38,1,0,0,0,39,40,1,0,0,0,40,47,1,0,0,0,41,43,3,4,2,0,42,44,5,38,0,
0,43,42,1,0,0,0,43,44,1,0,0,0,44,46,1,0,0,0,45,41,1,0,0,0,46,49,1,0,0,0,
47,45,1,0,0,0,47,48,1,0,0,0,48,50,1,0,0,0,49,47,1,0,0,0,50,51,5,30,0,0,51,
52,5,36,0,0,52,54,5,31,0,0,53,55,5,38,0,0,54,53,1,0,0,0,54,55,1,0,0,0,55,
3,1,0,0,0,56,59,3,6,3,0,57,59,3,2,1,0,58,56,1,0,0,0,58,57,1,0,0,0,59,5,1,
0,0,0,60,68,3,8,4,0,61,68,3,10,5,0,62,68,3,12,6,0,63,68,3,14,7,0,64,68,3,
18,9,0,65,68,3,16,8,0,66,68,3,20,10,0,67,60,1,0,0,0,67,61,1,0,0,0,67,62,
1,0,0,0,67,63,1,0,0,0,67,64,1,0,0,0,67,65,1,0,0,0,67,66,1,0,0,0,68,7,1,0,
0,0,69,71,5,9,0,0,70,72,5,36,0,0,71,70,1,0,0,0,71,72,1,0,0,0,72,74,1,0,0,
0,73,75,7,0,0,0,74,73,1,0,0,0,74,75,1,0,0,0,75,77,1,0,0,0,76,78,5,36,0,0,
77,76,1,0,0,0,77,78,1,0,0,0,78,120,1,0,0,0,79,81,5,22,0,0,80,82,5,36,0,0,
81,80,1,0,0,0,81,82,1,0,0,0,82,83,1,0,0,0,83,85,5,32,0,0,84,86,5,36,0,0,
85,84,1,0,0,0,85,86,1,0,0,0,86,87,1,0,0,0,87,89,5,32,0,0,88,90,5,36,0,0,
89,88,1,0,0,0,89,90,1,0,0,0,90,120,1,0,0,0,91,93,5,23,0,0,92,94,5,36,0,0,
93,92,1,0,0,0,93,94,1,0,0,0,94,95,1,0,0,0,95,97,5,32,0,0,96,98,5,36,0,0,
97,96,1,0,0,0,97,98,1,0,0,0,98,99,1,0,0,0,99,101,5,32,0,0,100,102,5,36,0,
0,101,100,1,0,0,0,101,102,1,0,0,0,102,120,1,0,0,0,103,105,5,24,0,0,104,106,
5,36,0,0,105,104,1,0,0,0,105,106,1,0,0,0,106,107,1,0,0,0,107,109,5,31,0,
0,108,110,5,36,0,0,109,108,1,0,0,0,109,110,1,0,0,0,110,120,1,0,0,0,111,113,
5,25,0,0,112,114,5,36,0,0,113,112,1,0,0,0,113,114,1,0,0,0,114,115,1,0,0,
0,115,117,5,31,0,0,116,118,5,36,0,0,117,116,1,0,0,0,117,118,1,0,0,0,118,
120,1,0,0,0,119,69,1,0,0,0,119,79,1,0,0,0,119,91,1,0,0,0,119,103,1,0,0,0,
119,111,1,0,0,0,120,9,1,0,0,0,121,123,5,10,0,0,122,124,5,36,0,0,123,122,
1,0,0,0,123,124,1,0,0,0,124,150,1,0,0,0,125,127,5,11,0,0,126,128,5,36,0,
0,127,126,1,0,0,0,127,128,1,0,0,0,128,150,1,0,0,0,129,131,5,12,0,0,130,132,
5,36,0,0,131,130,1,0,0,0,131,132,1,0,0,0,132,150,1,0,0,0,133,135,5,13,0,
0,134,136,5,36,0,0,135,134,1,0,0,0,135,136,1,0,0,0,136,150,1,0,0,0,137,139,
5,14,0,0,138,140,5,36,0,0,139,138,1,0,0,0,139,140,1,0,0,0,140,150,1,0,0,
0,141,143,5,15,0,0,142,144,5,36,0,0,143,142,1,0,0,0,143,144,1,0,0,0,144,
150,1,0,0,0,145,147,5,16,0,0,146,148,5,36,0,0,147,146,1,0,0,0,147,148,1,
0,0,0,148,150,1,0,0,0,149,121,1,0,0,0,149,125,1,0,0,0,149,129,1,0,0,0,149,
133,1,0,0,0,149,137,1,0,0,0,149,141,1,0,0,0,149,145,1,0,0,0,150,11,1,0,0,
0,151,170,5,18,0,0,152,170,5,19,0,0,153,155,5,1,0,0,154,156,5,36,0,0,155,
154,1,0,0,0,155,156,1,0,0,0,156,157,1,0,0,0,157,170,5,32,0,0,158,160,5,2,
0,0,159,161,5,36,0,0,160,159,1,0,0,0,160,161,1,0,0,0,161,162,1,0,0,0,162,
170,5,32,0,0,163,165,5,3,0,0,164,166,5,36,0,0,165,164,1,0,0,0,165,166,1,
0,0,0,166,167,1,0,0,0,167,170,5,32,0,0,168,170,5,4,0,0,169,151,1,0,0,0,169,
152,1,0,0,0,169,153,1,0,0,0,169,158,1,0,0,0,169,163,1,0,0,0,169,168,1,0,
0,0,170,13,1,0,0,0,171,173,5,20,0,0,172,174,5,36,0,0,173,172,1,0,0,0,173,
174,1,0,0,0,174,176,1,0,0,0,175,177,5,32,0,0,176,175,1,0,0,0,176,177,1,0,
0,0,177,181,1,0,0,0,178,181,5,21,0,0,179,181,5,5,0,0,180,171,1,0,0,0,180,
178,1,0,0,0,180,179,1,0,0,0,181,15,1,0,0,0,182,183,5,17,0,0,183,17,1,0,0,
0,184,186,5,26,0,0,185,187,5,36,0,0,186,185,1,0,0,0,186,187,1,0,0,0,187,
188,1,0,0,0,188,195,5,32,0,0,189,191,5,27,0,0,190,192,5,36,0,0,191,190,1,
0,0,0,191,192,1,0,0,0,192,193,1,0,0,0,193,195,5,32,0,0,194,184,1,0,0,0,194,
189,1,0,0,0,195,19,1,0,0,0,196,203,5,28,0,0,197,199,5,36,0,0,198,197,1,0,
0,0,198,199,1,0,0,0,199,200,1,0,0,0,200,202,7,0,0,0,201,198,1,0,0,0,202,
205,1,0,0,0,203,204,1,0,0,0,203,201,1,0,0,0,204,21,1,0,0,0,205,203,1,0,0,
0,206,215,5,6,0,0,207,212,7,0,0,0,208,209,5,7,0,0,209,211,7,0,0,0,210,208,
1,0,0,0,211,214,1,0,0,0,212,210,1,0,0,0,212,213,1,0,0,0,213,216,1,0,0,0,
214,212,1,0,0,0,215,207,1,0,0,0,215,216,1,0,0,0,216,217,1,0,0,0,217,218,
5,8,0,0,218,23,1,0,0,0,44,26,30,39,43,47,54,58,67,71,74,77,81,85,89,93,97,
101,105,109,113,117,119,123,127,131,135,139,143,147,149,155,160,165,169,
173,176,180,186,191,194,198,203,212,215];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class biesLanguageParser extends antlr4.Parser {

    static grammarFileName = "biesLanguage.g4";
    static literalNames = [ null, "'BR'", "'BT'", "'BF'", "'NOP'", "'INP'", 
                            "'['", "','", "']'", "'LDV'", "'ADD'", "'MUL'", 
                            "'SUB'", "'DIV'", "'NEG'", "'SQRT'", "'POW'", 
                            "'GTE'", "'RET'", "'HLT'", "'APP'", "'PRN'", 
                            "'BLD'", "'BST'", "'LDF'", "'INI'", "'STK'", 
                            "'SRK'", "'LIN'", "'$FUN'", "'$END'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, "LDV", "ADD", "MUL", "SUB", "DIV", "NEG", 
                             "SQRT", "POW", "GTE", "RET", "HLT", "APP", 
                             "PRN", "BLD", "BST", "LDF", "INI", "STK", "SRK", 
                             "LIN", "FUN", "END", "LABEL_IDENTIFIER", "NUMBER", 
                             "ID", "STRING", "COMMENT", "ES", "WS", "NL" ];
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
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1073741374) !== 0)) {
	            this.state = 24;
	            this.statement();
	            this.state = 26;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===38) {
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
	        if(_la===38) {
	            this.state = 38;
	            this.match(biesLanguageParser.NL);
	        }

	        this.state = 47;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1073741374) !== 0)) {
	            this.state = 41;
	            this.statement();
	            this.state = 43;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===38) {
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
	        case 9:
	        case 10:
	        case 11:
	        case 12:
	        case 13:
	        case 14:
	        case 15:
	        case 16:
	        case 17:
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
	            this.enterOuterAlt(localctx, 1);
	            this.state = 56;
	            this.instruction();
	            break;
	        case 29:
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
	        case 9:
	        case 22:
	        case 23:
	        case 24:
	        case 25:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 60;
	            this.loadInstr();
	            break;
	        case 10:
	        case 11:
	        case 12:
	        case 13:
	        case 14:
	        case 15:
	        case 16:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 61;
	            this.arithInstr();
	            break;
	        case 1:
	        case 2:
	        case 3:
	        case 4:
	        case 18:
	        case 19:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 62;
	            this.controlInstr();
	            break;
	        case 5:
	        case 20:
	        case 21:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 63;
	            this.funcInstr();
	            break;
	        case 26:
	        case 27:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 64;
	            this.stringInstr();
	            break;
	        case 17:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 65;
	            this.comparisonInstr();
	            break;
	        case 28:
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
	        this.state = 119;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 9:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 69;
	            this.match(biesLanguageParser.LDV);
	            this.state = 71;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	            if(la_===1) {
	                this.state = 70;
	                this.match(biesLanguageParser.ES);

	            }
	            this.state = 74;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===32 || _la===34) {
	                this.state = 73;
	                _la = this._input.LA(1);
	                if(!(_la===32 || _la===34)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	            }

	            this.state = 77;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===36) {
	                this.state = 76;
	                this.match(biesLanguageParser.ES);
	            }

	            break;
	        case 22:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 79;
	            this.match(biesLanguageParser.BLD);
	            this.state = 81;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===36) {
	                this.state = 80;
	                this.match(biesLanguageParser.ES);
	            }

	            this.state = 83;
	            this.match(biesLanguageParser.NUMBER);
	            this.state = 85;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===36) {
	                this.state = 84;
	                this.match(biesLanguageParser.ES);
	            }

	            this.state = 87;
	            this.match(biesLanguageParser.NUMBER);
	            this.state = 89;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===36) {
	                this.state = 88;
	                this.match(biesLanguageParser.ES);
	            }

	            break;
	        case 23:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 91;
	            this.match(biesLanguageParser.BST);
	            this.state = 93;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===36) {
	                this.state = 92;
	                this.match(biesLanguageParser.ES);
	            }

	            this.state = 95;
	            this.match(biesLanguageParser.NUMBER);
	            this.state = 97;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===36) {
	                this.state = 96;
	                this.match(biesLanguageParser.ES);
	            }

	            this.state = 99;
	            this.match(biesLanguageParser.NUMBER);
	            this.state = 101;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===36) {
	                this.state = 100;
	                this.match(biesLanguageParser.ES);
	            }

	            break;
	        case 24:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 103;
	            this.match(biesLanguageParser.LDF);
	            this.state = 105;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===36) {
	                this.state = 104;
	                this.match(biesLanguageParser.ES);
	            }

	            this.state = 107;
	            this.match(biesLanguageParser.LABEL_IDENTIFIER);
	            this.state = 109;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===36) {
	                this.state = 108;
	                this.match(biesLanguageParser.ES);
	            }

	            break;
	        case 25:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 111;
	            this.match(biesLanguageParser.INI);
	            this.state = 113;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===36) {
	                this.state = 112;
	                this.match(biesLanguageParser.ES);
	            }

	            this.state = 115;
	            this.match(biesLanguageParser.LABEL_IDENTIFIER);
	            this.state = 117;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===36) {
	                this.state = 116;
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
	        this.state = 149;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 10:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 121;
	            this.match(biesLanguageParser.ADD);
	            this.state = 123;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===36) {
	                this.state = 122;
	                this.match(biesLanguageParser.ES);
	            }

	            break;
	        case 11:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 125;
	            this.match(biesLanguageParser.MUL);
	            this.state = 127;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===36) {
	                this.state = 126;
	                this.match(biesLanguageParser.ES);
	            }

	            break;
	        case 12:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 129;
	            this.match(biesLanguageParser.SUB);
	            this.state = 131;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===36) {
	                this.state = 130;
	                this.match(biesLanguageParser.ES);
	            }

	            break;
	        case 13:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 133;
	            this.match(biesLanguageParser.DIV);
	            this.state = 135;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===36) {
	                this.state = 134;
	                this.match(biesLanguageParser.ES);
	            }

	            break;
	        case 14:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 137;
	            this.match(biesLanguageParser.NEG);
	            this.state = 139;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===36) {
	                this.state = 138;
	                this.match(biesLanguageParser.ES);
	            }

	            break;
	        case 15:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 141;
	            this.match(biesLanguageParser.SQRT);
	            this.state = 143;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===36) {
	                this.state = 142;
	                this.match(biesLanguageParser.ES);
	            }

	            break;
	        case 16:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 145;
	            this.match(biesLanguageParser.POW);
	            this.state = 147;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===36) {
	                this.state = 146;
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
	        this.state = 169;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 18:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 151;
	            this.match(biesLanguageParser.RET);
	            break;
	        case 19:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 152;
	            this.match(biesLanguageParser.HLT);
	            break;
	        case 1:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 153;
	            this.match(biesLanguageParser.T__0);
	            this.state = 155;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===36) {
	                this.state = 154;
	                this.match(biesLanguageParser.ES);
	            }

	            this.state = 157;
	            this.match(biesLanguageParser.NUMBER);
	            break;
	        case 2:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 158;
	            this.match(biesLanguageParser.T__1);
	            this.state = 160;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===36) {
	                this.state = 159;
	                this.match(biesLanguageParser.ES);
	            }

	            this.state = 162;
	            this.match(biesLanguageParser.NUMBER);
	            break;
	        case 3:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 163;
	            this.match(biesLanguageParser.T__2);
	            this.state = 165;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===36) {
	                this.state = 164;
	                this.match(biesLanguageParser.ES);
	            }

	            this.state = 167;
	            this.match(biesLanguageParser.NUMBER);
	            break;
	        case 4:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 168;
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



	funcInstr() {
	    let localctx = new FuncInstrContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, biesLanguageParser.RULE_funcInstr);
	    var _la = 0;
	    try {
	        this.state = 180;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 20:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 171;
	            this.match(biesLanguageParser.APP);
	            this.state = 173;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===36) {
	                this.state = 172;
	                this.match(biesLanguageParser.ES);
	            }

	            this.state = 176;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===32) {
	                this.state = 175;
	                this.match(biesLanguageParser.NUMBER);
	            }

	            break;
	        case 21:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 178;
	            this.match(biesLanguageParser.PRN);
	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 3);
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



	comparisonInstr() {
	    let localctx = new ComparisonInstrContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, biesLanguageParser.RULE_comparisonInstr);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 182;
	        this.match(biesLanguageParser.GTE);
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
	        this.state = 194;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 26:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 184;
	            this.match(biesLanguageParser.STK);
	            this.state = 186;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===36) {
	                this.state = 185;
	                this.match(biesLanguageParser.ES);
	            }

	            this.state = 188;
	            this.match(biesLanguageParser.NUMBER);
	            break;
	        case 27:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 189;
	            this.match(biesLanguageParser.SRK);
	            this.state = 191;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===36) {
	                this.state = 190;
	                this.match(biesLanguageParser.ES);
	            }

	            this.state = 193;
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
	        this.state = 196;
	        this.match(biesLanguageParser.LIN);
	        this.state = 203;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,41,this._ctx)
	        while(_alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1+1) {
	                this.state = 198;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===36) {
	                    this.state = 197;
	                    this.match(biesLanguageParser.ES);
	                }

	                this.state = 200;
	                _la = this._input.LA(1);
	                if(!(_la===32 || _la===34)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                } 
	            }
	            this.state = 205;
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
	        this.state = 206;
	        this.match(biesLanguageParser.T__5);
	        this.state = 215;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===32 || _la===34) {
	            this.state = 207;
	            _la = this._input.LA(1);
	            if(!(_la===32 || _la===34)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 212;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===7) {
	                this.state = 208;
	                this.match(biesLanguageParser.T__6);
	                this.state = 209;
	                _la = this._input.LA(1);
	                if(!(_la===32 || _la===34)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 214;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 217;
	        this.match(biesLanguageParser.T__7);
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
biesLanguageParser.LDV = 9;
biesLanguageParser.ADD = 10;
biesLanguageParser.MUL = 11;
biesLanguageParser.SUB = 12;
biesLanguageParser.DIV = 13;
biesLanguageParser.NEG = 14;
biesLanguageParser.SQRT = 15;
biesLanguageParser.POW = 16;
biesLanguageParser.GTE = 17;
biesLanguageParser.RET = 18;
biesLanguageParser.HLT = 19;
biesLanguageParser.APP = 20;
biesLanguageParser.PRN = 21;
biesLanguageParser.BLD = 22;
biesLanguageParser.BST = 23;
biesLanguageParser.LDF = 24;
biesLanguageParser.INI = 25;
biesLanguageParser.STK = 26;
biesLanguageParser.SRK = 27;
biesLanguageParser.LIN = 28;
biesLanguageParser.FUN = 29;
biesLanguageParser.END = 30;
biesLanguageParser.LABEL_IDENTIFIER = 31;
biesLanguageParser.NUMBER = 32;
biesLanguageParser.ID = 33;
biesLanguageParser.STRING = 34;
biesLanguageParser.COMMENT = 35;
biesLanguageParser.ES = 36;
biesLanguageParser.WS = 37;
biesLanguageParser.NL = 38;

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

	GTE() {
	    return this.getToken(biesLanguageParser.GTE, 0);
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

	NUMBER() {
	    return this.getToken(biesLanguageParser.NUMBER, 0);
	};

	ES() {
	    return this.getToken(biesLanguageParser.ES, 0);
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
