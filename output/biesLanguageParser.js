// Generated from ./grammar/biesLanguage.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import biesLanguageVisitor from './biesLanguageVisitor.js';

const serializedATN = [4,1,30,175,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,1,0,1,0,3,0,21,8,0,5,0,23,8,0,10,0,12,
0,26,9,0,1,0,1,0,1,1,1,1,1,1,1,1,3,1,34,8,1,1,1,1,1,3,1,38,8,1,5,1,40,8,
1,10,1,12,1,43,9,1,1,1,1,1,1,1,1,1,3,1,49,8,1,1,2,1,2,3,2,53,8,2,1,3,1,3,
1,3,1,3,1,3,3,3,60,8,3,1,4,1,4,3,4,64,8,4,1,4,3,4,67,8,4,1,4,3,4,70,8,4,
1,4,1,4,3,4,74,8,4,1,4,1,4,3,4,78,8,4,1,4,1,4,3,4,82,8,4,1,4,1,4,3,4,86,
8,4,1,4,1,4,3,4,90,8,4,1,4,1,4,3,4,94,8,4,1,4,1,4,3,4,98,8,4,1,4,1,4,3,4,
102,8,4,1,4,1,4,3,4,106,8,4,1,4,1,4,3,4,110,8,4,3,4,112,8,4,1,5,1,5,3,5,
116,8,5,1,5,1,5,3,5,120,8,5,1,5,1,5,3,5,124,8,5,1,5,1,5,3,5,128,8,5,3,5,
130,8,5,1,6,1,6,1,6,1,6,3,6,136,8,6,1,6,1,6,1,6,3,6,141,8,6,1,6,1,6,1,6,
3,6,146,8,6,1,6,1,6,3,6,150,8,6,1,7,1,7,3,7,154,8,7,1,7,3,7,157,8,7,1,7,
1,7,3,7,161,8,7,1,8,1,8,3,8,165,8,8,1,8,1,8,1,8,3,8,170,8,8,1,8,3,8,173,
8,8,1,8,0,0,9,0,2,4,6,8,10,12,14,16,0,1,2,0,24,24,26,26,215,0,24,1,0,0,0,
2,29,1,0,0,0,4,52,1,0,0,0,6,59,1,0,0,0,8,111,1,0,0,0,10,129,1,0,0,0,12,149,
1,0,0,0,14,160,1,0,0,0,16,172,1,0,0,0,18,20,3,4,2,0,19,21,5,30,0,0,20,19,
1,0,0,0,20,21,1,0,0,0,21,23,1,0,0,0,22,18,1,0,0,0,23,26,1,0,0,0,24,22,1,
0,0,0,24,25,1,0,0,0,25,27,1,0,0,0,26,24,1,0,0,0,27,28,5,0,0,1,28,1,1,0,0,
0,29,30,5,21,0,0,30,31,5,28,0,0,31,33,5,23,0,0,32,34,5,30,0,0,33,32,1,0,
0,0,33,34,1,0,0,0,34,41,1,0,0,0,35,37,3,4,2,0,36,38,5,30,0,0,37,36,1,0,0,
0,37,38,1,0,0,0,38,40,1,0,0,0,39,35,1,0,0,0,40,43,1,0,0,0,41,39,1,0,0,0,
41,42,1,0,0,0,42,44,1,0,0,0,43,41,1,0,0,0,44,45,5,22,0,0,45,46,5,28,0,0,
46,48,5,23,0,0,47,49,5,30,0,0,48,47,1,0,0,0,48,49,1,0,0,0,49,3,1,0,0,0,50,
53,3,6,3,0,51,53,3,2,1,0,52,50,1,0,0,0,52,51,1,0,0,0,53,5,1,0,0,0,54,60,
3,8,4,0,55,60,3,10,5,0,56,60,3,12,6,0,57,60,3,14,7,0,58,60,3,16,8,0,59,54,
1,0,0,0,59,55,1,0,0,0,59,56,1,0,0,0,59,57,1,0,0,0,59,58,1,0,0,0,60,7,1,0,
0,0,61,63,5,6,0,0,62,64,5,28,0,0,63,62,1,0,0,0,63,64,1,0,0,0,64,66,1,0,0,
0,65,67,7,0,0,0,66,65,1,0,0,0,66,67,1,0,0,0,67,69,1,0,0,0,68,70,5,28,0,0,
69,68,1,0,0,0,69,70,1,0,0,0,70,112,1,0,0,0,71,73,5,15,0,0,72,74,5,28,0,0,
73,72,1,0,0,0,73,74,1,0,0,0,74,75,1,0,0,0,75,77,5,24,0,0,76,78,5,28,0,0,
77,76,1,0,0,0,77,78,1,0,0,0,78,79,1,0,0,0,79,81,5,24,0,0,80,82,5,28,0,0,
81,80,1,0,0,0,81,82,1,0,0,0,82,112,1,0,0,0,83,85,5,16,0,0,84,86,5,28,0,0,
85,84,1,0,0,0,85,86,1,0,0,0,86,87,1,0,0,0,87,89,5,24,0,0,88,90,5,28,0,0,
89,88,1,0,0,0,89,90,1,0,0,0,90,91,1,0,0,0,91,93,5,24,0,0,92,94,5,28,0,0,
93,92,1,0,0,0,93,94,1,0,0,0,94,112,1,0,0,0,95,97,5,17,0,0,96,98,5,28,0,0,
97,96,1,0,0,0,97,98,1,0,0,0,98,99,1,0,0,0,99,101,5,23,0,0,100,102,5,28,0,
0,101,100,1,0,0,0,101,102,1,0,0,0,102,112,1,0,0,0,103,105,5,18,0,0,104,106,
5,28,0,0,105,104,1,0,0,0,105,106,1,0,0,0,106,107,1,0,0,0,107,109,5,23,0,
0,108,110,5,28,0,0,109,108,1,0,0,0,109,110,1,0,0,0,110,112,1,0,0,0,111,61,
1,0,0,0,111,71,1,0,0,0,111,83,1,0,0,0,111,95,1,0,0,0,111,103,1,0,0,0,112,
9,1,0,0,0,113,115,5,7,0,0,114,116,5,28,0,0,115,114,1,0,0,0,115,116,1,0,0,
0,116,130,1,0,0,0,117,119,5,8,0,0,118,120,5,28,0,0,119,118,1,0,0,0,119,120,
1,0,0,0,120,130,1,0,0,0,121,123,5,9,0,0,122,124,5,28,0,0,123,122,1,0,0,0,
123,124,1,0,0,0,124,130,1,0,0,0,125,127,5,10,0,0,126,128,5,28,0,0,127,126,
1,0,0,0,127,128,1,0,0,0,128,130,1,0,0,0,129,113,1,0,0,0,129,117,1,0,0,0,
129,121,1,0,0,0,129,125,1,0,0,0,130,11,1,0,0,0,131,150,5,11,0,0,132,150,
5,12,0,0,133,135,5,1,0,0,134,136,5,28,0,0,135,134,1,0,0,0,135,136,1,0,0,
0,136,137,1,0,0,0,137,150,5,24,0,0,138,140,5,2,0,0,139,141,5,28,0,0,140,
139,1,0,0,0,140,141,1,0,0,0,141,142,1,0,0,0,142,150,5,24,0,0,143,145,5,3,
0,0,144,146,5,28,0,0,145,144,1,0,0,0,145,146,1,0,0,0,146,147,1,0,0,0,147,
150,5,24,0,0,148,150,5,4,0,0,149,131,1,0,0,0,149,132,1,0,0,0,149,133,1,0,
0,0,149,138,1,0,0,0,149,143,1,0,0,0,149,148,1,0,0,0,150,13,1,0,0,0,151,153,
5,13,0,0,152,154,5,28,0,0,153,152,1,0,0,0,153,154,1,0,0,0,154,156,1,0,0,
0,155,157,5,24,0,0,156,155,1,0,0,0,156,157,1,0,0,0,157,161,1,0,0,0,158,161,
5,14,0,0,159,161,5,5,0,0,160,151,1,0,0,0,160,158,1,0,0,0,160,159,1,0,0,0,
161,15,1,0,0,0,162,164,5,19,0,0,163,165,5,28,0,0,164,163,1,0,0,0,164,165,
1,0,0,0,165,166,1,0,0,0,166,173,5,24,0,0,167,169,5,20,0,0,168,170,5,28,0,
0,169,168,1,0,0,0,169,170,1,0,0,0,170,171,1,0,0,0,171,173,5,24,0,0,172,162,
1,0,0,0,172,167,1,0,0,0,173,17,1,0,0,0,37,20,24,33,37,41,48,52,59,63,66,
69,73,77,81,85,89,93,97,101,105,109,111,115,119,123,127,129,135,140,145,
149,153,156,160,164,169,172];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class biesLanguageParser extends antlr4.Parser {

    static grammarFileName = "biesLanguage.g4";
    static literalNames = [ null, "'BR'", "'BT'", "'BF'", "'NOP'", "'INP'", 
                            "'LDV'", "'ADD'", "'MUL'", "'SUB'", "'DIV'", 
                            "'RET'", "'HLT'", "'APP'", "'PRN'", "'BLD'", 
                            "'BST'", "'LDF'", "'INI'", "'STK'", "'SRK'", 
                            "'$FUN'", "'$END'" ];
    static symbolicNames = [ null, null, null, null, null, null, "LDV", 
                             "ADD", "MUL", "SUB", "DIV", "RET", "HLT", "APP", 
                             "PRN", "BLD", "BST", "LDF", "INI", "STK", "SRK", 
                             "FUN", "END", "LABEL_IDENTIFIER", "NUMBER", 
                             "ID", "STRING", "COMMENT", "ES", "WS", "NL" ];
    static ruleNames = [ "program", "functionDef", "statement", "instruction", 
                         "loadInstr", "arithInstr", "controlInstr", "funcInstr", 
                         "stringInstr" ];

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
	        this.state = 24;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4194302) !== 0)) {
	            this.state = 18;
	            this.statement();
	            this.state = 20;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===30) {
	                this.state = 19;
	                this.match(biesLanguageParser.NL);
	            }

	            this.state = 26;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 27;
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
	        this.state = 29;
	        this.match(biesLanguageParser.FUN);
	        this.state = 30;
	        this.match(biesLanguageParser.ES);
	        this.state = 31;
	        this.match(biesLanguageParser.LABEL_IDENTIFIER);
	        this.state = 33;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===30) {
	            this.state = 32;
	            this.match(biesLanguageParser.NL);
	        }

	        this.state = 41;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4194302) !== 0)) {
	            this.state = 35;
	            this.statement();
	            this.state = 37;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===30) {
	                this.state = 36;
	                this.match(biesLanguageParser.NL);
	            }

	            this.state = 43;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 44;
	        this.match(biesLanguageParser.END);
	        this.state = 45;
	        this.match(biesLanguageParser.ES);
	        this.state = 46;
	        this.match(biesLanguageParser.LABEL_IDENTIFIER);
	        this.state = 48;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        if(la_===1) {
	            this.state = 47;
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
	        this.state = 52;
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
	        case 13:
	        case 14:
	        case 15:
	        case 16:
	        case 17:
	        case 18:
	        case 19:
	        case 20:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 50;
	            this.instruction();
	            break;
	        case 21:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 51;
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
	        this.state = 59;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 6:
	        case 15:
	        case 16:
	        case 17:
	        case 18:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 54;
	            this.loadInstr();
	            break;
	        case 7:
	        case 8:
	        case 9:
	        case 10:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 55;
	            this.arithInstr();
	            break;
	        case 1:
	        case 2:
	        case 3:
	        case 4:
	        case 11:
	        case 12:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 56;
	            this.controlInstr();
	            break;
	        case 5:
	        case 13:
	        case 14:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 57;
	            this.funcInstr();
	            break;
	        case 19:
	        case 20:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 58;
	            this.stringInstr();
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
	        this.state = 111;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 6:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 61;
	            this.match(biesLanguageParser.LDV);
	            this.state = 63;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	            if(la_===1) {
	                this.state = 62;
	                this.match(biesLanguageParser.ES);

	            }
	            this.state = 66;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===24 || _la===26) {
	                this.state = 65;
	                _la = this._input.LA(1);
	                if(!(_la===24 || _la===26)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	            }

	            this.state = 69;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===28) {
	                this.state = 68;
	                this.match(biesLanguageParser.ES);
	            }

	            break;
	        case 15:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 71;
	            this.match(biesLanguageParser.BLD);
	            this.state = 73;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===28) {
	                this.state = 72;
	                this.match(biesLanguageParser.ES);
	            }

	            this.state = 75;
	            this.match(biesLanguageParser.NUMBER);
	            this.state = 77;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===28) {
	                this.state = 76;
	                this.match(biesLanguageParser.ES);
	            }

	            this.state = 79;
	            this.match(biesLanguageParser.NUMBER);
	            this.state = 81;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===28) {
	                this.state = 80;
	                this.match(biesLanguageParser.ES);
	            }

	            break;
	        case 16:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 83;
	            this.match(biesLanguageParser.BST);
	            this.state = 85;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===28) {
	                this.state = 84;
	                this.match(biesLanguageParser.ES);
	            }

	            this.state = 87;
	            this.match(biesLanguageParser.NUMBER);
	            this.state = 89;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===28) {
	                this.state = 88;
	                this.match(biesLanguageParser.ES);
	            }

	            this.state = 91;
	            this.match(biesLanguageParser.NUMBER);
	            this.state = 93;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===28) {
	                this.state = 92;
	                this.match(biesLanguageParser.ES);
	            }

	            break;
	        case 17:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 95;
	            this.match(biesLanguageParser.LDF);
	            this.state = 97;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===28) {
	                this.state = 96;
	                this.match(biesLanguageParser.ES);
	            }

	            this.state = 99;
	            this.match(biesLanguageParser.LABEL_IDENTIFIER);
	            this.state = 101;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===28) {
	                this.state = 100;
	                this.match(biesLanguageParser.ES);
	            }

	            break;
	        case 18:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 103;
	            this.match(biesLanguageParser.INI);
	            this.state = 105;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===28) {
	                this.state = 104;
	                this.match(biesLanguageParser.ES);
	            }

	            this.state = 107;
	            this.match(biesLanguageParser.LABEL_IDENTIFIER);
	            this.state = 109;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===28) {
	                this.state = 108;
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
	        this.state = 129;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 7:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 113;
	            this.match(biesLanguageParser.ADD);
	            this.state = 115;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===28) {
	                this.state = 114;
	                this.match(biesLanguageParser.ES);
	            }

	            break;
	        case 8:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 117;
	            this.match(biesLanguageParser.MUL);
	            this.state = 119;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===28) {
	                this.state = 118;
	                this.match(biesLanguageParser.ES);
	            }

	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 121;
	            this.match(biesLanguageParser.SUB);
	            this.state = 123;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===28) {
	                this.state = 122;
	                this.match(biesLanguageParser.ES);
	            }

	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 125;
	            this.match(biesLanguageParser.DIV);
	            this.state = 127;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===28) {
	                this.state = 126;
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
	        this.state = 149;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 11:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 131;
	            this.match(biesLanguageParser.RET);
	            break;
	        case 12:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 132;
	            this.match(biesLanguageParser.HLT);
	            break;
	        case 1:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 133;
	            this.match(biesLanguageParser.T__0);
	            this.state = 135;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===28) {
	                this.state = 134;
	                this.match(biesLanguageParser.ES);
	            }

	            this.state = 137;
	            this.match(biesLanguageParser.NUMBER);
	            break;
	        case 2:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 138;
	            this.match(biesLanguageParser.T__1);
	            this.state = 140;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===28) {
	                this.state = 139;
	                this.match(biesLanguageParser.ES);
	            }

	            this.state = 142;
	            this.match(biesLanguageParser.NUMBER);
	            break;
	        case 3:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 143;
	            this.match(biesLanguageParser.T__2);
	            this.state = 145;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===28) {
	                this.state = 144;
	                this.match(biesLanguageParser.ES);
	            }

	            this.state = 147;
	            this.match(biesLanguageParser.NUMBER);
	            break;
	        case 4:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 148;
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
	        this.state = 160;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 13:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 151;
	            this.match(biesLanguageParser.APP);
	            this.state = 153;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===28) {
	                this.state = 152;
	                this.match(biesLanguageParser.ES);
	            }

	            this.state = 156;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===24) {
	                this.state = 155;
	                this.match(biesLanguageParser.NUMBER);
	            }

	            break;
	        case 14:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 158;
	            this.match(biesLanguageParser.PRN);
	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 159;
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



	stringInstr() {
	    let localctx = new StringInstrContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, biesLanguageParser.RULE_stringInstr);
	    var _la = 0;
	    try {
	        this.state = 172;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 19:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 162;
	            this.match(biesLanguageParser.STK);
	            this.state = 164;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===28) {
	                this.state = 163;
	                this.match(biesLanguageParser.ES);
	            }

	            this.state = 166;
	            this.match(biesLanguageParser.NUMBER);
	            break;
	        case 20:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 167;
	            this.match(biesLanguageParser.SRK);
	            this.state = 169;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===28) {
	                this.state = 168;
	                this.match(biesLanguageParser.ES);
	            }

	            this.state = 171;
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


}

biesLanguageParser.EOF = antlr4.Token.EOF;
biesLanguageParser.T__0 = 1;
biesLanguageParser.T__1 = 2;
biesLanguageParser.T__2 = 3;
biesLanguageParser.T__3 = 4;
biesLanguageParser.T__4 = 5;
biesLanguageParser.LDV = 6;
biesLanguageParser.ADD = 7;
biesLanguageParser.MUL = 8;
biesLanguageParser.SUB = 9;
biesLanguageParser.DIV = 10;
biesLanguageParser.RET = 11;
biesLanguageParser.HLT = 12;
biesLanguageParser.APP = 13;
biesLanguageParser.PRN = 14;
biesLanguageParser.BLD = 15;
biesLanguageParser.BST = 16;
biesLanguageParser.LDF = 17;
biesLanguageParser.INI = 18;
biesLanguageParser.STK = 19;
biesLanguageParser.SRK = 20;
biesLanguageParser.FUN = 21;
biesLanguageParser.END = 22;
biesLanguageParser.LABEL_IDENTIFIER = 23;
biesLanguageParser.NUMBER = 24;
biesLanguageParser.ID = 25;
biesLanguageParser.STRING = 26;
biesLanguageParser.COMMENT = 27;
biesLanguageParser.ES = 28;
biesLanguageParser.WS = 29;
biesLanguageParser.NL = 30;

biesLanguageParser.RULE_program = 0;
biesLanguageParser.RULE_functionDef = 1;
biesLanguageParser.RULE_statement = 2;
biesLanguageParser.RULE_instruction = 3;
biesLanguageParser.RULE_loadInstr = 4;
biesLanguageParser.RULE_arithInstr = 5;
biesLanguageParser.RULE_controlInstr = 6;
biesLanguageParser.RULE_funcInstr = 7;
biesLanguageParser.RULE_stringInstr = 8;

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




biesLanguageParser.ProgramContext = ProgramContext; 
biesLanguageParser.FunctionDefContext = FunctionDefContext; 
biesLanguageParser.StatementContext = StatementContext; 
biesLanguageParser.InstructionContext = InstructionContext; 
biesLanguageParser.LoadInstrContext = LoadInstrContext; 
biesLanguageParser.ArithInstrContext = ArithInstrContext; 
biesLanguageParser.ControlInstrContext = ControlInstrContext; 
biesLanguageParser.FuncInstrContext = FuncInstrContext; 
biesLanguageParser.StringInstrContext = StringInstrContext; 
