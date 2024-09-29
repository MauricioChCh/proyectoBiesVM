// Generated from ./grammar/biesLanguage.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import biesLanguageVisitor from './biesLanguageVisitor.js';

const serializedATN = [4,1,20,115,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,1,0,1,0,3,0,19,8,0,5,0,21,8,0,10,0,12,0,24,9,0,
1,0,1,0,1,1,1,1,1,1,1,1,3,1,32,8,1,1,1,1,1,3,1,36,8,1,5,1,38,8,1,10,1,12,
1,41,9,1,1,1,1,1,1,1,1,1,3,1,47,8,1,1,2,1,2,3,2,51,8,2,1,3,1,3,1,3,1,3,3,
3,57,8,3,1,4,1,4,3,4,61,8,4,1,4,1,4,3,4,65,8,4,1,4,1,4,3,4,69,8,4,1,4,1,
4,3,4,73,8,4,1,4,1,4,3,4,77,8,4,1,4,1,4,3,4,81,8,4,1,4,1,4,3,4,85,8,4,1,
4,1,4,3,4,89,8,4,1,4,1,4,3,4,93,8,4,1,4,1,4,3,4,97,8,4,1,4,1,4,3,4,101,8,
4,1,4,1,4,3,4,105,8,4,3,4,107,8,4,1,5,1,5,1,6,1,6,1,7,1,7,1,7,0,0,8,0,2,
4,6,8,10,12,14,0,3,1,0,2,3,1,0,4,5,1,0,6,7,132,0,22,1,0,0,0,2,27,1,0,0,0,
4,50,1,0,0,0,6,56,1,0,0,0,8,106,1,0,0,0,10,108,1,0,0,0,12,110,1,0,0,0,14,
112,1,0,0,0,16,18,3,4,2,0,17,19,5,20,0,0,18,17,1,0,0,0,18,19,1,0,0,0,19,
21,1,0,0,0,20,16,1,0,0,0,21,24,1,0,0,0,22,20,1,0,0,0,22,23,1,0,0,0,23,25,
1,0,0,0,24,22,1,0,0,0,25,26,5,0,0,1,26,1,1,0,0,0,27,28,5,12,0,0,28,29,5,
18,0,0,29,31,5,14,0,0,30,32,5,20,0,0,31,30,1,0,0,0,31,32,1,0,0,0,32,39,1,
0,0,0,33,35,3,4,2,0,34,36,5,20,0,0,35,34,1,0,0,0,35,36,1,0,0,0,36,38,1,0,
0,0,37,33,1,0,0,0,38,41,1,0,0,0,39,37,1,0,0,0,39,40,1,0,0,0,40,42,1,0,0,
0,41,39,1,0,0,0,42,43,5,13,0,0,43,44,5,18,0,0,44,46,5,14,0,0,45,47,5,20,
0,0,46,45,1,0,0,0,46,47,1,0,0,0,47,3,1,0,0,0,48,51,3,6,3,0,49,51,3,2,1,0,
50,48,1,0,0,0,50,49,1,0,0,0,51,5,1,0,0,0,52,57,3,8,4,0,53,57,3,10,5,0,54,
57,3,12,6,0,55,57,3,14,7,0,56,52,1,0,0,0,56,53,1,0,0,0,56,54,1,0,0,0,56,
55,1,0,0,0,57,7,1,0,0,0,58,60,5,1,0,0,59,61,5,18,0,0,60,59,1,0,0,0,60,61,
1,0,0,0,61,62,1,0,0,0,62,64,5,15,0,0,63,65,5,18,0,0,64,63,1,0,0,0,64,65,
1,0,0,0,65,107,1,0,0,0,66,68,5,8,0,0,67,69,5,18,0,0,68,67,1,0,0,0,68,69,
1,0,0,0,69,70,1,0,0,0,70,72,5,15,0,0,71,73,5,18,0,0,72,71,1,0,0,0,72,73,
1,0,0,0,73,74,1,0,0,0,74,76,5,15,0,0,75,77,5,18,0,0,76,75,1,0,0,0,76,77,
1,0,0,0,77,107,1,0,0,0,78,80,5,9,0,0,79,81,5,18,0,0,80,79,1,0,0,0,80,81,
1,0,0,0,81,82,1,0,0,0,82,84,5,15,0,0,83,85,5,18,0,0,84,83,1,0,0,0,84,85,
1,0,0,0,85,86,1,0,0,0,86,88,5,15,0,0,87,89,5,18,0,0,88,87,1,0,0,0,88,89,
1,0,0,0,89,107,1,0,0,0,90,92,5,10,0,0,91,93,5,18,0,0,92,91,1,0,0,0,92,93,
1,0,0,0,93,94,1,0,0,0,94,96,5,14,0,0,95,97,5,18,0,0,96,95,1,0,0,0,96,97,
1,0,0,0,97,107,1,0,0,0,98,100,5,11,0,0,99,101,5,18,0,0,100,99,1,0,0,0,100,
101,1,0,0,0,101,102,1,0,0,0,102,104,5,14,0,0,103,105,5,18,0,0,104,103,1,
0,0,0,104,105,1,0,0,0,105,107,1,0,0,0,106,58,1,0,0,0,106,66,1,0,0,0,106,
78,1,0,0,0,106,90,1,0,0,0,106,98,1,0,0,0,107,9,1,0,0,0,108,109,7,0,0,0,109,
11,1,0,0,0,110,111,7,1,0,0,111,13,1,0,0,0,112,113,7,2,0,0,113,15,1,0,0,0,
21,18,22,31,35,39,46,50,56,60,64,68,72,76,80,84,88,92,96,100,104,106];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class biesLanguageParser extends antlr4.Parser {

    static grammarFileName = "biesLanguage.g4";
    static literalNames = [ null, "'LDV'", "'ADD'", "'MUL'", "'RET'", "'HLT'", 
                            "'APP'", "'PRN'", "'BLD'", "'BST'", "'LDF'", 
                            "'INI'", "'$FUN'", "'$END'" ];
    static symbolicNames = [ null, "LDV", "ADD", "MUL", "RET", "HLT", "APP", 
                             "PRN", "BLD", "BST", "LDF", "INI", "FUN", "END", 
                             "LABEL_IDENTIFIER", "NUMBER", "ID", "COMMENT", 
                             "ES", "WS", "NL" ];
    static ruleNames = [ "program", "functionDef", "statement", "instruction", 
                         "loadInstr", "arithInstr", "controlInstr", "funcInstr" ];

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
	        this.state = 22;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 8190) !== 0)) {
	            this.state = 16;
	            this.statement();
	            this.state = 18;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===20) {
	                this.state = 17;
	                this.match(biesLanguageParser.NL);
	            }

	            this.state = 24;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 25;
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
	        this.state = 27;
	        this.match(biesLanguageParser.FUN);
	        this.state = 28;
	        this.match(biesLanguageParser.ES);
	        this.state = 29;
	        this.match(biesLanguageParser.LABEL_IDENTIFIER);
	        this.state = 31;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===20) {
	            this.state = 30;
	            this.match(biesLanguageParser.NL);
	        }

	        this.state = 39;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 8190) !== 0)) {
	            this.state = 33;
	            this.statement();
	            this.state = 35;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===20) {
	                this.state = 34;
	                this.match(biesLanguageParser.NL);
	            }

	            this.state = 41;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 42;
	        this.match(biesLanguageParser.END);
	        this.state = 43;
	        this.match(biesLanguageParser.ES);
	        this.state = 44;
	        this.match(biesLanguageParser.LABEL_IDENTIFIER);
	        this.state = 46;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        if(la_===1) {
	            this.state = 45;
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
	        this.state = 50;
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
	            this.enterOuterAlt(localctx, 1);
	            this.state = 48;
	            this.instruction();
	            break;
	        case 12:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 49;
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
	        this.state = 56;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	        case 8:
	        case 9:
	        case 10:
	        case 11:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 52;
	            this.loadInstr();
	            break;
	        case 2:
	        case 3:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 53;
	            this.arithInstr();
	            break;
	        case 4:
	        case 5:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 54;
	            this.controlInstr();
	            break;
	        case 6:
	        case 7:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 55;
	            this.funcInstr();
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
	        this.state = 106;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 58;
	            this.match(biesLanguageParser.LDV);
	            this.state = 60;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===18) {
	                this.state = 59;
	                this.match(biesLanguageParser.ES);
	            }

	            this.state = 62;
	            this.match(biesLanguageParser.NUMBER);
	            this.state = 64;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===18) {
	                this.state = 63;
	                this.match(biesLanguageParser.ES);
	            }

	            break;
	        case 8:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 66;
	            this.match(biesLanguageParser.BLD);
	            this.state = 68;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===18) {
	                this.state = 67;
	                this.match(biesLanguageParser.ES);
	            }

	            this.state = 70;
	            this.match(biesLanguageParser.NUMBER);
	            this.state = 72;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===18) {
	                this.state = 71;
	                this.match(biesLanguageParser.ES);
	            }

	            this.state = 74;
	            this.match(biesLanguageParser.NUMBER);
	            this.state = 76;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===18) {
	                this.state = 75;
	                this.match(biesLanguageParser.ES);
	            }

	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 78;
	            this.match(biesLanguageParser.BST);
	            this.state = 80;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===18) {
	                this.state = 79;
	                this.match(biesLanguageParser.ES);
	            }

	            this.state = 82;
	            this.match(biesLanguageParser.NUMBER);
	            this.state = 84;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===18) {
	                this.state = 83;
	                this.match(biesLanguageParser.ES);
	            }

	            this.state = 86;
	            this.match(biesLanguageParser.NUMBER);
	            this.state = 88;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===18) {
	                this.state = 87;
	                this.match(biesLanguageParser.ES);
	            }

	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 90;
	            this.match(biesLanguageParser.LDF);
	            this.state = 92;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===18) {
	                this.state = 91;
	                this.match(biesLanguageParser.ES);
	            }

	            this.state = 94;
	            this.match(biesLanguageParser.LABEL_IDENTIFIER);
	            this.state = 96;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===18) {
	                this.state = 95;
	                this.match(biesLanguageParser.ES);
	            }

	            break;
	        case 11:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 98;
	            this.match(biesLanguageParser.INI);
	            this.state = 100;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===18) {
	                this.state = 99;
	                this.match(biesLanguageParser.ES);
	            }

	            this.state = 102;
	            this.match(biesLanguageParser.LABEL_IDENTIFIER);
	            this.state = 104;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===18) {
	                this.state = 103;
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
	        this.enterOuterAlt(localctx, 1);
	        this.state = 108;
	        _la = this._input.LA(1);
	        if(!(_la===2 || _la===3)) {
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



	controlInstr() {
	    let localctx = new ControlInstrContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, biesLanguageParser.RULE_controlInstr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 110;
	        _la = this._input.LA(1);
	        if(!(_la===4 || _la===5)) {
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



	funcInstr() {
	    let localctx = new FuncInstrContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, biesLanguageParser.RULE_funcInstr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 112;
	        _la = this._input.LA(1);
	        if(!(_la===6 || _la===7)) {
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


}

biesLanguageParser.EOF = antlr4.Token.EOF;
biesLanguageParser.LDV = 1;
biesLanguageParser.ADD = 2;
biesLanguageParser.MUL = 3;
biesLanguageParser.RET = 4;
biesLanguageParser.HLT = 5;
biesLanguageParser.APP = 6;
biesLanguageParser.PRN = 7;
biesLanguageParser.BLD = 8;
biesLanguageParser.BST = 9;
biesLanguageParser.LDF = 10;
biesLanguageParser.INI = 11;
biesLanguageParser.FUN = 12;
biesLanguageParser.END = 13;
biesLanguageParser.LABEL_IDENTIFIER = 14;
biesLanguageParser.NUMBER = 15;
biesLanguageParser.ID = 16;
biesLanguageParser.COMMENT = 17;
biesLanguageParser.ES = 18;
biesLanguageParser.WS = 19;
biesLanguageParser.NL = 20;

biesLanguageParser.RULE_program = 0;
biesLanguageParser.RULE_functionDef = 1;
biesLanguageParser.RULE_statement = 2;
biesLanguageParser.RULE_instruction = 3;
biesLanguageParser.RULE_loadInstr = 4;
biesLanguageParser.RULE_arithInstr = 5;
biesLanguageParser.RULE_controlInstr = 6;
biesLanguageParser.RULE_funcInstr = 7;

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

	MUL() {
	    return this.getToken(biesLanguageParser.MUL, 0);
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




biesLanguageParser.ProgramContext = ProgramContext; 
biesLanguageParser.FunctionDefContext = FunctionDefContext; 
biesLanguageParser.StatementContext = StatementContext; 
biesLanguageParser.InstructionContext = InstructionContext; 
biesLanguageParser.LoadInstrContext = LoadInstrContext; 
biesLanguageParser.ArithInstrContext = ArithInstrContext; 
biesLanguageParser.ControlInstrContext = ControlInstrContext; 
biesLanguageParser.FuncInstrContext = FuncInstrContext; 
