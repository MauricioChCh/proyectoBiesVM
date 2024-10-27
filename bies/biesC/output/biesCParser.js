// Generated from ./grammar/biesC.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import biesCVisitor from './biesCVisitor.js';

const serializedATN = [4,1,7,25,2,0,7,0,2,1,7,1,2,2,7,2,1,0,1,0,3,0,9,8,
0,5,0,11,8,0,10,0,12,0,14,9,0,1,0,1,0,1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,2,0,
0,3,0,2,4,0,1,1,0,4,5,23,0,12,1,0,0,0,2,17,1,0,0,0,4,19,1,0,0,0,6,8,3,2,
1,0,7,9,5,6,0,0,8,7,1,0,0,0,8,9,1,0,0,0,9,11,1,0,0,0,10,6,1,0,0,0,11,14,
1,0,0,0,12,10,1,0,0,0,12,13,1,0,0,0,13,15,1,0,0,0,14,12,1,0,0,0,15,16,5,
0,0,1,16,1,1,0,0,0,17,18,3,4,2,0,18,3,1,0,0,0,19,20,5,3,0,0,20,21,5,1,0,
0,21,22,7,0,0,0,22,23,5,2,0,0,23,5,1,0,0,0,2,8,12];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class biesCParser extends antlr4.Parser {

    static grammarFileName = "biesC.g4";
    static literalNames = [ null, "'('", "')'", "'print'" ];
    static symbolicNames = [ null, null, null, "PRINT", "STRING", "NUMBER", 
                             "NL", "WS" ];
    static ruleNames = [ "program", "statement", "printInstr" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = biesCParser.ruleNames;
        this.literalNames = biesCParser.literalNames;
        this.symbolicNames = biesCParser.symbolicNames;
    }



	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, biesCParser.RULE_program);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 12;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===3) {
	            this.state = 6;
	            this.statement();
	            this.state = 8;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===6) {
	                this.state = 7;
	                this.match(biesCParser.NL);
	            }

	            this.state = 14;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 15;
	        this.match(biesCParser.EOF);
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
	    this.enterRule(localctx, 2, biesCParser.RULE_statement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 17;
	        this.printInstr();
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



	printInstr() {
	    let localctx = new PrintInstrContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, biesCParser.RULE_printInstr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 19;
	        this.match(biesCParser.PRINT);
	        this.state = 20;
	        this.match(biesCParser.T__0);
	        this.state = 21;
	        _la = this._input.LA(1);
	        if(!(_la===4 || _la===5)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 22;
	        this.match(biesCParser.T__1);
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

biesCParser.EOF = antlr4.Token.EOF;
biesCParser.T__0 = 1;
biesCParser.T__1 = 2;
biesCParser.PRINT = 3;
biesCParser.STRING = 4;
biesCParser.NUMBER = 5;
biesCParser.NL = 6;
biesCParser.WS = 7;

biesCParser.RULE_program = 0;
biesCParser.RULE_statement = 1;
biesCParser.RULE_printInstr = 2;

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
        this.ruleIndex = biesCParser.RULE_program;
    }

	EOF() {
	    return this.getToken(biesCParser.EOF, 0);
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
	        return this.getTokens(biesCParser.NL);
	    } else {
	        return this.getToken(biesCParser.NL, i);
	    }
	};


	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitProgram(this);
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
        this.ruleIndex = biesCParser.RULE_statement;
    }

	printInstr() {
	    return this.getTypedRuleContext(PrintInstrContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PrintInstrContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = biesCParser.RULE_printInstr;
    }

	PRINT() {
	    return this.getToken(biesCParser.PRINT, 0);
	};

	STRING() {
	    return this.getToken(biesCParser.STRING, 0);
	};

	NUMBER() {
	    return this.getToken(biesCParser.NUMBER, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitPrintInstr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




biesCParser.ProgramContext = ProgramContext; 
biesCParser.StatementContext = StatementContext; 
biesCParser.PrintInstrContext = PrintInstrContext; 
