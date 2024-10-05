// Generated from ./grammar/biesLanguage.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import biesLanguageVisitor from './biesLanguageVisitor.js';

const serializedATN = [4,1,31,180,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,1,0,1,0,3,0,23,8,0,5,0,25,8,0,
10,0,12,0,28,9,0,1,0,1,0,1,1,1,1,1,1,1,1,3,1,36,8,1,1,1,1,1,3,1,40,8,1,5,
1,42,8,1,10,1,12,1,45,9,1,1,1,1,1,1,1,1,1,3,1,51,8,1,1,2,1,2,3,2,55,8,2,
1,3,1,3,1,3,1,3,1,3,1,3,3,3,63,8,3,1,4,1,4,3,4,67,8,4,1,4,3,4,70,8,4,1,4,
3,4,73,8,4,1,4,1,4,3,4,77,8,4,1,4,1,4,3,4,81,8,4,1,4,1,4,3,4,85,8,4,1,4,
1,4,3,4,89,8,4,1,4,1,4,3,4,93,8,4,1,4,1,4,3,4,97,8,4,1,4,1,4,3,4,101,8,4,
1,4,1,4,3,4,105,8,4,1,4,1,4,3,4,109,8,4,1,4,1,4,3,4,113,8,4,3,4,115,8,4,
1,5,1,5,3,5,119,8,5,1,5,1,5,3,5,123,8,5,1,5,1,5,3,5,127,8,5,1,5,1,5,3,5,
131,8,5,3,5,133,8,5,1,6,1,6,1,6,1,6,3,6,139,8,6,1,6,1,6,1,6,3,6,144,8,6,
1,6,1,6,1,6,3,6,149,8,6,1,6,1,6,3,6,153,8,6,1,7,1,7,3,7,157,8,7,1,7,3,7,
160,8,7,1,7,1,7,3,7,164,8,7,1,8,1,8,1,9,1,9,3,9,170,8,9,1,9,1,9,1,9,3,9,
175,8,9,1,9,3,9,178,8,9,1,9,0,0,10,0,2,4,6,8,10,12,14,16,18,0,1,2,0,25,25,
27,27,220,0,26,1,0,0,0,2,31,1,0,0,0,4,54,1,0,0,0,6,62,1,0,0,0,8,114,1,0,
0,0,10,132,1,0,0,0,12,152,1,0,0,0,14,163,1,0,0,0,16,165,1,0,0,0,18,177,1,
0,0,0,20,22,3,4,2,0,21,23,5,31,0,0,22,21,1,0,0,0,22,23,1,0,0,0,23,25,1,0,
0,0,24,20,1,0,0,0,25,28,1,0,0,0,26,24,1,0,0,0,26,27,1,0,0,0,27,29,1,0,0,
0,28,26,1,0,0,0,29,30,5,0,0,1,30,1,1,0,0,0,31,32,5,22,0,0,32,33,5,29,0,0,
33,35,5,24,0,0,34,36,5,31,0,0,35,34,1,0,0,0,35,36,1,0,0,0,36,43,1,0,0,0,
37,39,3,4,2,0,38,40,5,31,0,0,39,38,1,0,0,0,39,40,1,0,0,0,40,42,1,0,0,0,41,
37,1,0,0,0,42,45,1,0,0,0,43,41,1,0,0,0,43,44,1,0,0,0,44,46,1,0,0,0,45,43,
1,0,0,0,46,47,5,23,0,0,47,48,5,29,0,0,48,50,5,24,0,0,49,51,5,31,0,0,50,49,
1,0,0,0,50,51,1,0,0,0,51,3,1,0,0,0,52,55,3,6,3,0,53,55,3,2,1,0,54,52,1,0,
0,0,54,53,1,0,0,0,55,5,1,0,0,0,56,63,3,8,4,0,57,63,3,10,5,0,58,63,3,12,6,
0,59,63,3,14,7,0,60,63,3,18,9,0,61,63,3,16,8,0,62,56,1,0,0,0,62,57,1,0,0,
0,62,58,1,0,0,0,62,59,1,0,0,0,62,60,1,0,0,0,62,61,1,0,0,0,63,7,1,0,0,0,64,
66,5,6,0,0,65,67,5,29,0,0,66,65,1,0,0,0,66,67,1,0,0,0,67,69,1,0,0,0,68,70,
7,0,0,0,69,68,1,0,0,0,69,70,1,0,0,0,70,72,1,0,0,0,71,73,5,29,0,0,72,71,1,
0,0,0,72,73,1,0,0,0,73,115,1,0,0,0,74,76,5,16,0,0,75,77,5,29,0,0,76,75,1,
0,0,0,76,77,1,0,0,0,77,78,1,0,0,0,78,80,5,25,0,0,79,81,5,29,0,0,80,79,1,
0,0,0,80,81,1,0,0,0,81,82,1,0,0,0,82,84,5,25,0,0,83,85,5,29,0,0,84,83,1,
0,0,0,84,85,1,0,0,0,85,115,1,0,0,0,86,88,5,17,0,0,87,89,5,29,0,0,88,87,1,
0,0,0,88,89,1,0,0,0,89,90,1,0,0,0,90,92,5,25,0,0,91,93,5,29,0,0,92,91,1,
0,0,0,92,93,1,0,0,0,93,94,1,0,0,0,94,96,5,25,0,0,95,97,5,29,0,0,96,95,1,
0,0,0,96,97,1,0,0,0,97,115,1,0,0,0,98,100,5,18,0,0,99,101,5,29,0,0,100,99,
1,0,0,0,100,101,1,0,0,0,101,102,1,0,0,0,102,104,5,24,0,0,103,105,5,29,0,
0,104,103,1,0,0,0,104,105,1,0,0,0,105,115,1,0,0,0,106,108,5,19,0,0,107,109,
5,29,0,0,108,107,1,0,0,0,108,109,1,0,0,0,109,110,1,0,0,0,110,112,5,24,0,
0,111,113,5,29,0,0,112,111,1,0,0,0,112,113,1,0,0,0,113,115,1,0,0,0,114,64,
1,0,0,0,114,74,1,0,0,0,114,86,1,0,0,0,114,98,1,0,0,0,114,106,1,0,0,0,115,
9,1,0,0,0,116,118,5,7,0,0,117,119,5,29,0,0,118,117,1,0,0,0,118,119,1,0,0,
0,119,133,1,0,0,0,120,122,5,8,0,0,121,123,5,29,0,0,122,121,1,0,0,0,122,123,
1,0,0,0,123,133,1,0,0,0,124,126,5,9,0,0,125,127,5,29,0,0,126,125,1,0,0,0,
126,127,1,0,0,0,127,133,1,0,0,0,128,130,5,10,0,0,129,131,5,29,0,0,130,129,
1,0,0,0,130,131,1,0,0,0,131,133,1,0,0,0,132,116,1,0,0,0,132,120,1,0,0,0,
132,124,1,0,0,0,132,128,1,0,0,0,133,11,1,0,0,0,134,153,5,12,0,0,135,153,
5,13,0,0,136,138,5,1,0,0,137,139,5,29,0,0,138,137,1,0,0,0,138,139,1,0,0,
0,139,140,1,0,0,0,140,153,5,25,0,0,141,143,5,2,0,0,142,144,5,29,0,0,143,
142,1,0,0,0,143,144,1,0,0,0,144,145,1,0,0,0,145,153,5,25,0,0,146,148,5,3,
0,0,147,149,5,29,0,0,148,147,1,0,0,0,148,149,1,0,0,0,149,150,1,0,0,0,150,
153,5,25,0,0,151,153,5,4,0,0,152,134,1,0,0,0,152,135,1,0,0,0,152,136,1,0,
0,0,152,141,1,0,0,0,152,146,1,0,0,0,152,151,1,0,0,0,153,13,1,0,0,0,154,156,
5,14,0,0,155,157,5,29,0,0,156,155,1,0,0,0,156,157,1,0,0,0,157,159,1,0,0,
0,158,160,5,25,0,0,159,158,1,0,0,0,159,160,1,0,0,0,160,164,1,0,0,0,161,164,
5,15,0,0,162,164,5,5,0,0,163,154,1,0,0,0,163,161,1,0,0,0,163,162,1,0,0,0,
164,15,1,0,0,0,165,166,5,11,0,0,166,17,1,0,0,0,167,169,5,20,0,0,168,170,
5,29,0,0,169,168,1,0,0,0,169,170,1,0,0,0,170,171,1,0,0,0,171,178,5,25,0,
0,172,174,5,21,0,0,173,175,5,29,0,0,174,173,1,0,0,0,174,175,1,0,0,0,175,
176,1,0,0,0,176,178,5,25,0,0,177,167,1,0,0,0,177,172,1,0,0,0,178,19,1,0,
0,0,37,22,26,35,39,43,50,54,62,66,69,72,76,80,84,88,92,96,100,104,108,112,
114,118,122,126,130,132,138,143,148,152,156,159,163,169,174,177];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class biesLanguageParser extends antlr4.Parser {

    static grammarFileName = "biesLanguage.g4";
    static literalNames = [ null, "'BR'", "'BT'", "'BF'", "'NOP'", "'INP'", 
                            "'LDV'", "'ADD'", "'MUL'", "'SUB'", "'DIV'", 
                            "'GTE'", "'RET'", "'HLT'", "'APP'", "'PRN'", 
                            "'BLD'", "'BST'", "'LDF'", "'INI'", "'STK'", 
                            "'SRK'", "'$FUN'", "'$END'" ];
    static symbolicNames = [ null, null, null, null, null, null, "LDV", 
                             "ADD", "MUL", "SUB", "DIV", "GTE", "RET", "HLT", 
                             "APP", "PRN", "BLD", "BST", "LDF", "INI", "STK", 
                             "SRK", "FUN", "END", "LABEL_IDENTIFIER", "NUMBER", 
                             "ID", "STRING", "COMMENT", "ES", "WS", "NL" ];
    static ruleNames = [ "program", "functionDef", "statement", "instruction", 
                         "loadInstr", "arithInstr", "controlInstr", "funcInstr", 
                         "comparisonInstr", "stringInstr" ];

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
	        this.state = 26;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 8388606) !== 0)) {
	            this.state = 20;
	            this.statement();
	            this.state = 22;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===31) {
	                this.state = 21;
	                this.match(biesLanguageParser.NL);
	            }

	            this.state = 28;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 29;
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
	        this.state = 31;
	        this.match(biesLanguageParser.FUN);
	        this.state = 32;
	        this.match(biesLanguageParser.ES);
	        this.state = 33;
	        this.match(biesLanguageParser.LABEL_IDENTIFIER);
	        this.state = 35;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===31) {
	            this.state = 34;
	            this.match(biesLanguageParser.NL);
	        }

	        this.state = 43;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 8388606) !== 0)) {
	            this.state = 37;
	            this.statement();
	            this.state = 39;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===31) {
	                this.state = 38;
	                this.match(biesLanguageParser.NL);
	            }

	            this.state = 45;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 46;
	        this.match(biesLanguageParser.END);
	        this.state = 47;
	        this.match(biesLanguageParser.ES);
	        this.state = 48;
	        this.match(biesLanguageParser.LABEL_IDENTIFIER);
	        this.state = 50;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        if(la_===1) {
	            this.state = 49;
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
	        this.state = 54;
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
	        case 21:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 52;
	            this.instruction();
	            break;
	        case 22:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 53;
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
	        this.state = 62;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 6:
	        case 16:
	        case 17:
	        case 18:
	        case 19:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 56;
	            this.loadInstr();
	            break;
	        case 7:
	        case 8:
	        case 9:
	        case 10:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 57;
	            this.arithInstr();
	            break;
	        case 1:
	        case 2:
	        case 3:
	        case 4:
	        case 12:
	        case 13:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 58;
	            this.controlInstr();
	            break;
	        case 5:
	        case 14:
	        case 15:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 59;
	            this.funcInstr();
	            break;
	        case 20:
	        case 21:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 60;
	            this.stringInstr();
	            break;
	        case 11:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 61;
	            this.comparisonInstr();
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
	        this.state = 114;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 6:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 64;
	            this.match(biesLanguageParser.LDV);
	            this.state = 66;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	            if(la_===1) {
	                this.state = 65;
	                this.match(biesLanguageParser.ES);

	            }
	            this.state = 69;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===25 || _la===27) {
	                this.state = 68;
	                _la = this._input.LA(1);
	                if(!(_la===25 || _la===27)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	            }

	            this.state = 72;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===29) {
	                this.state = 71;
	                this.match(biesLanguageParser.ES);
	            }

	            break;
	        case 16:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 74;
	            this.match(biesLanguageParser.BLD);
	            this.state = 76;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===29) {
	                this.state = 75;
	                this.match(biesLanguageParser.ES);
	            }

	            this.state = 78;
	            this.match(biesLanguageParser.NUMBER);
	            this.state = 80;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===29) {
	                this.state = 79;
	                this.match(biesLanguageParser.ES);
	            }

	            this.state = 82;
	            this.match(biesLanguageParser.NUMBER);
	            this.state = 84;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===29) {
	                this.state = 83;
	                this.match(biesLanguageParser.ES);
	            }

	            break;
	        case 17:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 86;
	            this.match(biesLanguageParser.BST);
	            this.state = 88;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===29) {
	                this.state = 87;
	                this.match(biesLanguageParser.ES);
	            }

	            this.state = 90;
	            this.match(biesLanguageParser.NUMBER);
	            this.state = 92;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===29) {
	                this.state = 91;
	                this.match(biesLanguageParser.ES);
	            }

	            this.state = 94;
	            this.match(biesLanguageParser.NUMBER);
	            this.state = 96;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===29) {
	                this.state = 95;
	                this.match(biesLanguageParser.ES);
	            }

	            break;
	        case 18:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 98;
	            this.match(biesLanguageParser.LDF);
	            this.state = 100;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===29) {
	                this.state = 99;
	                this.match(biesLanguageParser.ES);
	            }

	            this.state = 102;
	            this.match(biesLanguageParser.LABEL_IDENTIFIER);
	            this.state = 104;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===29) {
	                this.state = 103;
	                this.match(biesLanguageParser.ES);
	            }

	            break;
	        case 19:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 106;
	            this.match(biesLanguageParser.INI);
	            this.state = 108;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===29) {
	                this.state = 107;
	                this.match(biesLanguageParser.ES);
	            }

	            this.state = 110;
	            this.match(biesLanguageParser.LABEL_IDENTIFIER);
	            this.state = 112;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===29) {
	                this.state = 111;
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
	        this.state = 132;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 7:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 116;
	            this.match(biesLanguageParser.ADD);
	            this.state = 118;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===29) {
	                this.state = 117;
	                this.match(biesLanguageParser.ES);
	            }

	            break;
	        case 8:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 120;
	            this.match(biesLanguageParser.MUL);
	            this.state = 122;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===29) {
	                this.state = 121;
	                this.match(biesLanguageParser.ES);
	            }

	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 124;
	            this.match(biesLanguageParser.SUB);
	            this.state = 126;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===29) {
	                this.state = 125;
	                this.match(biesLanguageParser.ES);
	            }

	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 128;
	            this.match(biesLanguageParser.DIV);
	            this.state = 130;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===29) {
	                this.state = 129;
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
	        this.state = 152;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 12:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 134;
	            this.match(biesLanguageParser.RET);
	            break;
	        case 13:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 135;
	            this.match(biesLanguageParser.HLT);
	            break;
	        case 1:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 136;
	            this.match(biesLanguageParser.T__0);
	            this.state = 138;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===29) {
	                this.state = 137;
	                this.match(biesLanguageParser.ES);
	            }

	            this.state = 140;
	            this.match(biesLanguageParser.NUMBER);
	            break;
	        case 2:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 141;
	            this.match(biesLanguageParser.T__1);
	            this.state = 143;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===29) {
	                this.state = 142;
	                this.match(biesLanguageParser.ES);
	            }

	            this.state = 145;
	            this.match(biesLanguageParser.NUMBER);
	            break;
	        case 3:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 146;
	            this.match(biesLanguageParser.T__2);
	            this.state = 148;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===29) {
	                this.state = 147;
	                this.match(biesLanguageParser.ES);
	            }

	            this.state = 150;
	            this.match(biesLanguageParser.NUMBER);
	            break;
	        case 4:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 151;
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
	        this.state = 163;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 14:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 154;
	            this.match(biesLanguageParser.APP);
	            this.state = 156;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===29) {
	                this.state = 155;
	                this.match(biesLanguageParser.ES);
	            }

	            this.state = 159;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===25) {
	                this.state = 158;
	                this.match(biesLanguageParser.NUMBER);
	            }

	            break;
	        case 15:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 161;
	            this.match(biesLanguageParser.PRN);
	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 162;
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
	        this.state = 165;
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
	        this.state = 177;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 20:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 167;
	            this.match(biesLanguageParser.STK);
	            this.state = 169;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===29) {
	                this.state = 168;
	                this.match(biesLanguageParser.ES);
	            }

	            this.state = 171;
	            this.match(biesLanguageParser.NUMBER);
	            break;
	        case 21:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 172;
	            this.match(biesLanguageParser.SRK);
	            this.state = 174;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===29) {
	                this.state = 173;
	                this.match(biesLanguageParser.ES);
	            }

	            this.state = 176;
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
biesLanguageParser.GTE = 11;
biesLanguageParser.RET = 12;
biesLanguageParser.HLT = 13;
biesLanguageParser.APP = 14;
biesLanguageParser.PRN = 15;
biesLanguageParser.BLD = 16;
biesLanguageParser.BST = 17;
biesLanguageParser.LDF = 18;
biesLanguageParser.INI = 19;
biesLanguageParser.STK = 20;
biesLanguageParser.SRK = 21;
biesLanguageParser.FUN = 22;
biesLanguageParser.END = 23;
biesLanguageParser.LABEL_IDENTIFIER = 24;
biesLanguageParser.NUMBER = 25;
biesLanguageParser.ID = 26;
biesLanguageParser.STRING = 27;
biesLanguageParser.COMMENT = 28;
biesLanguageParser.ES = 29;
biesLanguageParser.WS = 30;
biesLanguageParser.NL = 31;

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
