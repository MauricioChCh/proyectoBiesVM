// Generated from ./grammar/biesLanguage.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import biesLanguageVisitor from './biesLanguageVisitor.js';

const serializedATN = [4,1,38,208,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,1,0,1,0,3,0,25,8,0,5,
0,27,8,0,10,0,12,0,30,9,0,1,0,1,0,1,1,1,1,1,1,1,1,3,1,38,8,1,1,1,1,1,3,1,
42,8,1,5,1,44,8,1,10,1,12,1,47,9,1,1,1,1,1,1,1,1,1,3,1,53,8,1,1,2,1,2,3,
2,57,8,2,1,3,1,3,1,3,1,3,1,3,1,3,3,3,65,8,3,1,4,1,4,3,4,69,8,4,1,4,3,4,72,
8,4,1,4,3,4,75,8,4,1,4,1,4,3,4,79,8,4,1,4,1,4,3,4,83,8,4,1,4,1,4,3,4,87,
8,4,1,4,1,4,3,4,91,8,4,1,4,1,4,3,4,95,8,4,1,4,1,4,3,4,99,8,4,1,4,1,4,3,4,
103,8,4,1,4,1,4,3,4,107,8,4,1,4,1,4,3,4,111,8,4,1,4,1,4,3,4,115,8,4,1,4,
3,4,118,8,4,1,5,1,5,3,5,122,8,5,1,5,1,5,3,5,126,8,5,1,5,1,5,3,5,130,8,5,
1,5,1,5,3,5,134,8,5,1,5,1,5,3,5,138,8,5,1,5,1,5,3,5,142,8,5,1,5,1,5,3,5,
146,8,5,3,5,148,8,5,1,6,1,6,1,6,1,6,3,6,154,8,6,1,6,1,6,1,6,3,6,159,8,6,
1,6,1,6,1,6,3,6,164,8,6,1,6,1,6,3,6,168,8,6,1,7,1,7,3,7,172,8,7,1,7,3,7,
175,8,7,1,7,1,7,3,7,179,8,7,1,8,1,8,1,9,1,9,3,9,185,8,9,1,9,1,9,1,9,3,9,
190,8,9,1,9,3,9,193,8,9,1,10,1,10,1,10,1,10,5,10,199,8,10,10,10,12,10,202,
9,10,3,10,204,8,10,1,10,1,10,1,10,0,0,11,0,2,4,6,8,10,12,14,16,18,20,0,1,
2,0,32,32,34,34,256,0,28,1,0,0,0,2,33,1,0,0,0,4,56,1,0,0,0,6,64,1,0,0,0,
8,117,1,0,0,0,10,147,1,0,0,0,12,167,1,0,0,0,14,178,1,0,0,0,16,180,1,0,0,
0,18,192,1,0,0,0,20,194,1,0,0,0,22,24,3,4,2,0,23,25,5,38,0,0,24,23,1,0,0,
0,24,25,1,0,0,0,25,27,1,0,0,0,26,22,1,0,0,0,27,30,1,0,0,0,28,26,1,0,0,0,
28,29,1,0,0,0,29,31,1,0,0,0,30,28,1,0,0,0,31,32,5,0,0,1,32,1,1,0,0,0,33,
34,5,29,0,0,34,35,5,36,0,0,35,37,5,31,0,0,36,38,5,38,0,0,37,36,1,0,0,0,37,
38,1,0,0,0,38,45,1,0,0,0,39,41,3,4,2,0,40,42,5,38,0,0,41,40,1,0,0,0,41,42,
1,0,0,0,42,44,1,0,0,0,43,39,1,0,0,0,44,47,1,0,0,0,45,43,1,0,0,0,45,46,1,
0,0,0,46,48,1,0,0,0,47,45,1,0,0,0,48,49,5,30,0,0,49,50,5,36,0,0,50,52,5,
31,0,0,51,53,5,38,0,0,52,51,1,0,0,0,52,53,1,0,0,0,53,3,1,0,0,0,54,57,3,6,
3,0,55,57,3,2,1,0,56,54,1,0,0,0,56,55,1,0,0,0,57,5,1,0,0,0,58,65,3,8,4,0,
59,65,3,10,5,0,60,65,3,12,6,0,61,65,3,14,7,0,62,65,3,18,9,0,63,65,3,16,8,
0,64,58,1,0,0,0,64,59,1,0,0,0,64,60,1,0,0,0,64,61,1,0,0,0,64,62,1,0,0,0,
64,63,1,0,0,0,65,7,1,0,0,0,66,68,5,9,0,0,67,69,5,36,0,0,68,67,1,0,0,0,68,
69,1,0,0,0,69,71,1,0,0,0,70,72,7,0,0,0,71,70,1,0,0,0,71,72,1,0,0,0,72,74,
1,0,0,0,73,75,5,36,0,0,74,73,1,0,0,0,74,75,1,0,0,0,75,118,1,0,0,0,76,78,
5,22,0,0,77,79,5,36,0,0,78,77,1,0,0,0,78,79,1,0,0,0,79,80,1,0,0,0,80,82,
5,32,0,0,81,83,5,36,0,0,82,81,1,0,0,0,82,83,1,0,0,0,83,84,1,0,0,0,84,86,
5,32,0,0,85,87,5,36,0,0,86,85,1,0,0,0,86,87,1,0,0,0,87,118,1,0,0,0,88,90,
5,23,0,0,89,91,5,36,0,0,90,89,1,0,0,0,90,91,1,0,0,0,91,92,1,0,0,0,92,94,
5,32,0,0,93,95,5,36,0,0,94,93,1,0,0,0,94,95,1,0,0,0,95,96,1,0,0,0,96,98,
5,32,0,0,97,99,5,36,0,0,98,97,1,0,0,0,98,99,1,0,0,0,99,118,1,0,0,0,100,102,
5,24,0,0,101,103,5,36,0,0,102,101,1,0,0,0,102,103,1,0,0,0,103,104,1,0,0,
0,104,106,5,31,0,0,105,107,5,36,0,0,106,105,1,0,0,0,106,107,1,0,0,0,107,
118,1,0,0,0,108,110,5,25,0,0,109,111,5,36,0,0,110,109,1,0,0,0,110,111,1,
0,0,0,111,112,1,0,0,0,112,114,5,31,0,0,113,115,5,36,0,0,114,113,1,0,0,0,
114,115,1,0,0,0,115,118,1,0,0,0,116,118,5,28,0,0,117,66,1,0,0,0,117,76,1,
0,0,0,117,88,1,0,0,0,117,100,1,0,0,0,117,108,1,0,0,0,117,116,1,0,0,0,118,
9,1,0,0,0,119,121,5,10,0,0,120,122,5,36,0,0,121,120,1,0,0,0,121,122,1,0,
0,0,122,148,1,0,0,0,123,125,5,11,0,0,124,126,5,36,0,0,125,124,1,0,0,0,125,
126,1,0,0,0,126,148,1,0,0,0,127,129,5,12,0,0,128,130,5,36,0,0,129,128,1,
0,0,0,129,130,1,0,0,0,130,148,1,0,0,0,131,133,5,13,0,0,132,134,5,36,0,0,
133,132,1,0,0,0,133,134,1,0,0,0,134,148,1,0,0,0,135,137,5,14,0,0,136,138,
5,36,0,0,137,136,1,0,0,0,137,138,1,0,0,0,138,148,1,0,0,0,139,141,5,15,0,
0,140,142,5,36,0,0,141,140,1,0,0,0,141,142,1,0,0,0,142,148,1,0,0,0,143,145,
5,16,0,0,144,146,5,36,0,0,145,144,1,0,0,0,145,146,1,0,0,0,146,148,1,0,0,
0,147,119,1,0,0,0,147,123,1,0,0,0,147,127,1,0,0,0,147,131,1,0,0,0,147,135,
1,0,0,0,147,139,1,0,0,0,147,143,1,0,0,0,148,11,1,0,0,0,149,168,5,18,0,0,
150,168,5,19,0,0,151,153,5,1,0,0,152,154,5,36,0,0,153,152,1,0,0,0,153,154,
1,0,0,0,154,155,1,0,0,0,155,168,5,32,0,0,156,158,5,2,0,0,157,159,5,36,0,
0,158,157,1,0,0,0,158,159,1,0,0,0,159,160,1,0,0,0,160,168,5,32,0,0,161,163,
5,3,0,0,162,164,5,36,0,0,163,162,1,0,0,0,163,164,1,0,0,0,164,165,1,0,0,0,
165,168,5,32,0,0,166,168,5,4,0,0,167,149,1,0,0,0,167,150,1,0,0,0,167,151,
1,0,0,0,167,156,1,0,0,0,167,161,1,0,0,0,167,166,1,0,0,0,168,13,1,0,0,0,169,
171,5,20,0,0,170,172,5,36,0,0,171,170,1,0,0,0,171,172,1,0,0,0,172,174,1,
0,0,0,173,175,5,32,0,0,174,173,1,0,0,0,174,175,1,0,0,0,175,179,1,0,0,0,176,
179,5,21,0,0,177,179,5,5,0,0,178,169,1,0,0,0,178,176,1,0,0,0,178,177,1,0,
0,0,179,15,1,0,0,0,180,181,5,17,0,0,181,17,1,0,0,0,182,184,5,26,0,0,183,
185,5,36,0,0,184,183,1,0,0,0,184,185,1,0,0,0,185,186,1,0,0,0,186,193,5,32,
0,0,187,189,5,27,0,0,188,190,5,36,0,0,189,188,1,0,0,0,189,190,1,0,0,0,190,
191,1,0,0,0,191,193,5,32,0,0,192,182,1,0,0,0,192,187,1,0,0,0,193,19,1,0,
0,0,194,203,5,6,0,0,195,200,5,34,0,0,196,197,5,7,0,0,197,199,5,34,0,0,198,
196,1,0,0,0,199,202,1,0,0,0,200,198,1,0,0,0,200,201,1,0,0,0,201,204,1,0,
0,0,202,200,1,0,0,0,203,195,1,0,0,0,203,204,1,0,0,0,204,205,1,0,0,0,205,
206,5,8,0,0,206,21,1,0,0,0,42,24,28,37,41,45,52,56,64,68,71,74,78,82,86,
90,94,98,102,106,110,114,117,121,125,129,133,137,141,145,147,153,158,163,
167,171,174,178,184,189,192,200,203];


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
                            "'SRK'", "'HIL'", "'$FUN'", "'$END'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, "LDV", "ADD", "MUL", "SUB", "DIV", "NEG", 
                             "SQRT", "POW", "GTE", "RET", "HLT", "APP", 
                             "PRN", "BLD", "BST", "LDF", "INI", "STK", "SRK", 
                             "HIL", "FUN", "END", "LABEL_IDENTIFIER", "NUMBER", 
                             "ID", "STRING", "COMMENT", "ES", "WS", "NL" ];
    static ruleNames = [ "program", "functionDef", "statement", "instruction", 
                         "loadInstr", "arithInstr", "controlInstr", "funcInstr", 
                         "comparisonInstr", "stringInstr", "array" ];

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
	        this.state = 28;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1073741374) !== 0)) {
	            this.state = 22;
	            this.statement();
	            this.state = 24;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===38) {
	                this.state = 23;
	                this.match(biesLanguageParser.NL);
	            }

	            this.state = 30;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 31;
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
	        this.state = 33;
	        this.match(biesLanguageParser.FUN);
	        this.state = 34;
	        this.match(biesLanguageParser.ES);
	        this.state = 35;
	        this.match(biesLanguageParser.LABEL_IDENTIFIER);
	        this.state = 37;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===38) {
	            this.state = 36;
	            this.match(biesLanguageParser.NL);
	        }

	        this.state = 45;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1073741374) !== 0)) {
	            this.state = 39;
	            this.statement();
	            this.state = 41;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===38) {
	                this.state = 40;
	                this.match(biesLanguageParser.NL);
	            }

	            this.state = 47;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 48;
	        this.match(biesLanguageParser.END);
	        this.state = 49;
	        this.match(biesLanguageParser.ES);
	        this.state = 50;
	        this.match(biesLanguageParser.LABEL_IDENTIFIER);
	        this.state = 52;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        if(la_===1) {
	            this.state = 51;
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
	        this.state = 56;
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
	            this.state = 54;
	            this.instruction();
	            break;
	        case 29:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 55;
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
	        this.state = 64;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 9:
	        case 22:
	        case 23:
	        case 24:
	        case 25:
	        case 28:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 58;
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
	            this.state = 59;
	            this.arithInstr();
	            break;
	        case 1:
	        case 2:
	        case 3:
	        case 4:
	        case 18:
	        case 19:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 60;
	            this.controlInstr();
	            break;
	        case 5:
	        case 20:
	        case 21:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 61;
	            this.funcInstr();
	            break;
	        case 26:
	        case 27:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 62;
	            this.stringInstr();
	            break;
	        case 17:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 63;
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
	        this.state = 117;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 9:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 66;
	            this.match(biesLanguageParser.LDV);
	            this.state = 68;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	            if(la_===1) {
	                this.state = 67;
	                this.match(biesLanguageParser.ES);

	            }
	            this.state = 71;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===32 || _la===34) {
	                this.state = 70;
	                _la = this._input.LA(1);
	                if(!(_la===32 || _la===34)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	            }

	            this.state = 74;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===36) {
	                this.state = 73;
	                this.match(biesLanguageParser.ES);
	            }

	            break;
	        case 22:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 76;
	            this.match(biesLanguageParser.BLD);
	            this.state = 78;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===36) {
	                this.state = 77;
	                this.match(biesLanguageParser.ES);
	            }

	            this.state = 80;
	            this.match(biesLanguageParser.NUMBER);
	            this.state = 82;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===36) {
	                this.state = 81;
	                this.match(biesLanguageParser.ES);
	            }

	            this.state = 84;
	            this.match(biesLanguageParser.NUMBER);
	            this.state = 86;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===36) {
	                this.state = 85;
	                this.match(biesLanguageParser.ES);
	            }

	            break;
	        case 23:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 88;
	            this.match(biesLanguageParser.BST);
	            this.state = 90;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===36) {
	                this.state = 89;
	                this.match(biesLanguageParser.ES);
	            }

	            this.state = 92;
	            this.match(biesLanguageParser.NUMBER);
	            this.state = 94;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===36) {
	                this.state = 93;
	                this.match(biesLanguageParser.ES);
	            }

	            this.state = 96;
	            this.match(biesLanguageParser.NUMBER);
	            this.state = 98;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===36) {
	                this.state = 97;
	                this.match(biesLanguageParser.ES);
	            }

	            break;
	        case 24:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 100;
	            this.match(biesLanguageParser.LDF);
	            this.state = 102;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===36) {
	                this.state = 101;
	                this.match(biesLanguageParser.ES);
	            }

	            this.state = 104;
	            this.match(biesLanguageParser.LABEL_IDENTIFIER);
	            this.state = 106;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===36) {
	                this.state = 105;
	                this.match(biesLanguageParser.ES);
	            }

	            break;
	        case 25:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 108;
	            this.match(biesLanguageParser.INI);
	            this.state = 110;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===36) {
	                this.state = 109;
	                this.match(biesLanguageParser.ES);
	            }

	            this.state = 112;
	            this.match(biesLanguageParser.LABEL_IDENTIFIER);
	            this.state = 114;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===36) {
	                this.state = 113;
	                this.match(biesLanguageParser.ES);
	            }

	            break;
	        case 28:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 116;
	            this.match(biesLanguageParser.HIL);
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
	        this.state = 147;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 10:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 119;
	            this.match(biesLanguageParser.ADD);
	            this.state = 121;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===36) {
	                this.state = 120;
	                this.match(biesLanguageParser.ES);
	            }

	            break;
	        case 11:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 123;
	            this.match(biesLanguageParser.MUL);
	            this.state = 125;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===36) {
	                this.state = 124;
	                this.match(biesLanguageParser.ES);
	            }

	            break;
	        case 12:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 127;
	            this.match(biesLanguageParser.SUB);
	            this.state = 129;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===36) {
	                this.state = 128;
	                this.match(biesLanguageParser.ES);
	            }

	            break;
	        case 13:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 131;
	            this.match(biesLanguageParser.DIV);
	            this.state = 133;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===36) {
	                this.state = 132;
	                this.match(biesLanguageParser.ES);
	            }

	            break;
	        case 14:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 135;
	            this.match(biesLanguageParser.NEG);
	            this.state = 137;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===36) {
	                this.state = 136;
	                this.match(biesLanguageParser.ES);
	            }

	            break;
	        case 15:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 139;
	            this.match(biesLanguageParser.SQRT);
	            this.state = 141;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===36) {
	                this.state = 140;
	                this.match(biesLanguageParser.ES);
	            }

	            break;
	        case 16:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 143;
	            this.match(biesLanguageParser.POW);
	            this.state = 145;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===36) {
	                this.state = 144;
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
	        this.state = 167;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 18:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 149;
	            this.match(biesLanguageParser.RET);
	            break;
	        case 19:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 150;
	            this.match(biesLanguageParser.HLT);
	            break;
	        case 1:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 151;
	            this.match(biesLanguageParser.T__0);
	            this.state = 153;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===36) {
	                this.state = 152;
	                this.match(biesLanguageParser.ES);
	            }

	            this.state = 155;
	            this.match(biesLanguageParser.NUMBER);
	            break;
	        case 2:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 156;
	            this.match(biesLanguageParser.T__1);
	            this.state = 158;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===36) {
	                this.state = 157;
	                this.match(biesLanguageParser.ES);
	            }

	            this.state = 160;
	            this.match(biesLanguageParser.NUMBER);
	            break;
	        case 3:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 161;
	            this.match(biesLanguageParser.T__2);
	            this.state = 163;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===36) {
	                this.state = 162;
	                this.match(biesLanguageParser.ES);
	            }

	            this.state = 165;
	            this.match(biesLanguageParser.NUMBER);
	            break;
	        case 4:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 166;
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
	        this.state = 178;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 20:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 169;
	            this.match(biesLanguageParser.APP);
	            this.state = 171;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===36) {
	                this.state = 170;
	                this.match(biesLanguageParser.ES);
	            }

	            this.state = 174;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===32) {
	                this.state = 173;
	                this.match(biesLanguageParser.NUMBER);
	            }

	            break;
	        case 21:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 176;
	            this.match(biesLanguageParser.PRN);
	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 177;
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
	        this.state = 180;
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
	        this.state = 192;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 26:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 182;
	            this.match(biesLanguageParser.STK);
	            this.state = 184;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===36) {
	                this.state = 183;
	                this.match(biesLanguageParser.ES);
	            }

	            this.state = 186;
	            this.match(biesLanguageParser.NUMBER);
	            break;
	        case 27:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 187;
	            this.match(biesLanguageParser.SRK);
	            this.state = 189;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===36) {
	                this.state = 188;
	                this.match(biesLanguageParser.ES);
	            }

	            this.state = 191;
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



	array() {
	    let localctx = new ArrayContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, biesLanguageParser.RULE_array);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 194;
	        this.match(biesLanguageParser.T__5);
	        this.state = 203;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===34) {
	            this.state = 195;
	            this.match(biesLanguageParser.STRING);
	            this.state = 200;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===7) {
	                this.state = 196;
	                this.match(biesLanguageParser.T__6);
	                this.state = 197;
	                this.match(biesLanguageParser.STRING);
	                this.state = 202;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 205;
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
biesLanguageParser.HIL = 28;
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
biesLanguageParser.RULE_array = 10;

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

	HIL() {
	    return this.getToken(biesLanguageParser.HIL, 0);
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
biesLanguageParser.ArrayContext = ArrayContext; 
