// Generated from ./grammar/biesLanguage.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import biesLanguageVisitor from './biesLanguageVisitor.js';

const serializedATN = [4,1,17,76,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,1,0,1,0,3,0,19,8,0,5,0,21,8,0,10,0,12,0,24,9,0,1,
0,1,0,1,1,1,1,1,1,1,1,5,1,32,8,1,10,1,12,1,35,9,1,1,1,1,1,1,1,1,1,1,2,1,
2,3,2,43,8,2,1,2,3,2,46,8,2,1,3,1,3,1,3,1,3,3,3,52,8,3,1,4,1,4,1,4,1,4,1,
4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,3,4,68,8,4,1,5,1,5,1,6,1,6,1,7,1,7,
1,7,0,0,8,0,2,4,6,8,10,12,14,0,2,1,0,3,4,1,0,5,6,83,0,22,1,0,0,0,2,27,1,
0,0,0,4,45,1,0,0,0,6,51,1,0,0,0,8,67,1,0,0,0,10,69,1,0,0,0,12,71,1,0,0,0,
14,73,1,0,0,0,16,18,3,4,2,0,17,19,5,17,0,0,18,17,1,0,0,0,18,19,1,0,0,0,19,
21,1,0,0,0,20,16,1,0,0,0,21,24,1,0,0,0,22,20,1,0,0,0,22,23,1,0,0,0,23,25,
1,0,0,0,24,22,1,0,0,0,25,26,5,0,0,1,26,1,1,0,0,0,27,28,5,10,0,0,28,29,5,
12,0,0,29,33,5,17,0,0,30,32,3,4,2,0,31,30,1,0,0,0,32,35,1,0,0,0,33,31,1,
0,0,0,33,34,1,0,0,0,34,36,1,0,0,0,35,33,1,0,0,0,36,37,5,11,0,0,37,38,5,12,
0,0,38,39,5,17,0,0,39,3,1,0,0,0,40,42,3,6,3,0,41,43,5,17,0,0,42,41,1,0,0,
0,42,43,1,0,0,0,43,46,1,0,0,0,44,46,3,2,1,0,45,40,1,0,0,0,45,44,1,0,0,0,
46,5,1,0,0,0,47,52,3,8,4,0,48,52,3,10,5,0,49,52,3,12,6,0,50,52,3,14,7,0,
51,47,1,0,0,0,51,48,1,0,0,0,51,49,1,0,0,0,51,50,1,0,0,0,52,7,1,0,0,0,53,
54,5,1,0,0,54,68,5,13,0,0,55,68,5,2,0,0,56,68,5,3,0,0,57,68,5,4,0,0,58,68,
5,5,0,0,59,68,5,6,0,0,60,61,5,7,0,0,61,62,5,13,0,0,62,68,5,13,0,0,63,64,
5,8,0,0,64,68,5,12,0,0,65,66,5,9,0,0,66,68,5,12,0,0,67,53,1,0,0,0,67,55,
1,0,0,0,67,56,1,0,0,0,67,57,1,0,0,0,67,58,1,0,0,0,67,59,1,0,0,0,67,60,1,
0,0,0,67,63,1,0,0,0,67,65,1,0,0,0,68,9,1,0,0,0,69,70,5,2,0,0,70,11,1,0,0,
0,71,72,7,0,0,0,72,13,1,0,0,0,73,74,7,1,0,0,74,15,1,0,0,0,7,18,22,33,42,
45,51,67];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class biesLanguageParser extends antlr4.Parser {

    static grammarFileName = "biesLanguage.g4";
    static literalNames = [ null, "'LDV'", "'ADD'", "'RET'", "'HLT'", "'APP'", 
                            "'PRN'", "'BLD'", "'LDF'", "'INI'", "'$FUN'", 
                            "'$END'" ];
    static symbolicNames = [ null, "LDV", "ADD", "RET", "HLT", "APP", "PRN", 
                             "BLD", "LDF", "INI", "FUN", "END", "LABEL_IDENTIFIER", 
                             "NUMBER", "ID", "COMMENT", "WS", "NL" ];
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
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 2046) !== 0)) {
	            this.state = 16;
	            this.statement();
	            this.state = 18;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===17) {
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
	        this.match(biesLanguageParser.LABEL_IDENTIFIER);
	        this.state = 29;
	        this.match(biesLanguageParser.NL);
	        this.state = 33;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 2046) !== 0)) {
	            this.state = 30;
	            this.statement();
	            this.state = 35;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 36;
	        this.match(biesLanguageParser.END);
	        this.state = 37;
	        this.match(biesLanguageParser.LABEL_IDENTIFIER);
	        this.state = 38;
	        this.match(biesLanguageParser.NL);
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
	        this.state = 45;
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
	            this.enterOuterAlt(localctx, 1);
	            this.state = 40;
	            this.instruction();
	            this.state = 42;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	            if(la_===1) {
	                this.state = 41;
	                this.match(biesLanguageParser.NL);

	            }
	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 44;
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
	        this.state = 51;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 47;
	            this.loadInstr();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 48;
	            this.arithInstr();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 49;
	            this.controlInstr();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 50;
	            this.funcInstr();
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



	loadInstr() {
	    let localctx = new LoadInstrContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, biesLanguageParser.RULE_loadInstr);
	    try {
	        this.state = 67;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 53;
	            this.match(biesLanguageParser.LDV);
	            this.state = 54;
	            this.match(biesLanguageParser.NUMBER);
	            break;
	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 55;
	            this.match(biesLanguageParser.ADD);
	            break;
	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 56;
	            this.match(biesLanguageParser.RET);
	            break;
	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 57;
	            this.match(biesLanguageParser.HLT);
	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 58;
	            this.match(biesLanguageParser.APP);
	            break;
	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 59;
	            this.match(biesLanguageParser.PRN);
	            break;
	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 60;
	            this.match(biesLanguageParser.BLD);
	            this.state = 61;
	            this.match(biesLanguageParser.NUMBER);
	            this.state = 62;
	            this.match(biesLanguageParser.NUMBER);
	            break;
	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 63;
	            this.match(biesLanguageParser.LDF);
	            this.state = 64;
	            this.match(biesLanguageParser.LABEL_IDENTIFIER);
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 65;
	            this.match(biesLanguageParser.INI);
	            this.state = 66;
	            this.match(biesLanguageParser.LABEL_IDENTIFIER);
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
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 69;
	        this.match(biesLanguageParser.ADD);
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
	        this.state = 71;
	        _la = this._input.LA(1);
	        if(!(_la===3 || _la===4)) {
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
	        this.state = 73;
	        _la = this._input.LA(1);
	        if(!(_la===5 || _la===6)) {
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
biesLanguageParser.RET = 3;
biesLanguageParser.HLT = 4;
biesLanguageParser.APP = 5;
biesLanguageParser.PRN = 6;
biesLanguageParser.BLD = 7;
biesLanguageParser.LDF = 8;
biesLanguageParser.INI = 9;
biesLanguageParser.FUN = 10;
biesLanguageParser.END = 11;
biesLanguageParser.LABEL_IDENTIFIER = 12;
biesLanguageParser.NUMBER = 13;
biesLanguageParser.ID = 14;
biesLanguageParser.COMMENT = 15;
biesLanguageParser.WS = 16;
biesLanguageParser.NL = 17;

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


	END() {
	    return this.getToken(biesLanguageParser.END, 0);
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

	NL() {
	    return this.getToken(biesLanguageParser.NL, 0);
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


	ADD() {
	    return this.getToken(biesLanguageParser.ADD, 0);
	};

	RET() {
	    return this.getToken(biesLanguageParser.RET, 0);
	};

	HLT() {
	    return this.getToken(biesLanguageParser.HLT, 0);
	};

	APP() {
	    return this.getToken(biesLanguageParser.APP, 0);
	};

	PRN() {
	    return this.getToken(biesLanguageParser.PRN, 0);
	};

	BLD() {
	    return this.getToken(biesLanguageParser.BLD, 0);
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
