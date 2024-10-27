// Generated from ./grammar/biesC.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import biesCVisitor from './biesCVisitor.js';

const serializedATN = [4,1,11,76,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,1,0,1,0,
3,0,11,8,0,5,0,13,8,0,10,0,12,0,16,9,0,1,0,1,0,1,1,1,1,1,2,1,2,1,2,1,2,1,
2,3,2,27,8,2,1,2,1,2,1,3,1,3,5,3,33,8,3,10,3,12,3,36,9,3,1,3,1,3,1,3,3,3,
41,8,3,1,3,5,3,44,8,3,10,3,12,3,47,9,3,1,3,1,3,5,3,51,8,3,10,3,12,3,54,9,
3,1,3,1,3,1,3,3,3,59,8,3,1,3,5,3,62,8,3,10,3,12,3,65,9,3,5,3,67,8,3,10,3,
12,3,70,9,3,3,3,72,8,3,1,3,1,3,1,3,0,0,4,0,2,4,6,0,0,85,0,14,1,0,0,0,2,19,
1,0,0,0,4,21,1,0,0,0,6,30,1,0,0,0,8,10,3,2,1,0,9,11,5,9,0,0,10,9,1,0,0,0,
10,11,1,0,0,0,11,13,1,0,0,0,12,8,1,0,0,0,13,16,1,0,0,0,14,12,1,0,0,0,14,
15,1,0,0,0,15,17,1,0,0,0,16,14,1,0,0,0,17,18,5,0,0,1,18,1,1,0,0,0,19,20,
3,4,2,0,20,3,1,0,0,0,21,22,5,6,0,0,22,26,5,1,0,0,23,27,5,7,0,0,24,27,5,8,
0,0,25,27,3,6,3,0,26,23,1,0,0,0,26,24,1,0,0,0,26,25,1,0,0,0,27,28,1,0,0,
0,28,29,5,2,0,0,29,5,1,0,0,0,30,34,5,3,0,0,31,33,5,10,0,0,32,31,1,0,0,0,
33,36,1,0,0,0,34,32,1,0,0,0,34,35,1,0,0,0,35,71,1,0,0,0,36,34,1,0,0,0,37,
41,5,8,0,0,38,41,5,7,0,0,39,41,3,6,3,0,40,37,1,0,0,0,40,38,1,0,0,0,40,39,
1,0,0,0,41,45,1,0,0,0,42,44,5,10,0,0,43,42,1,0,0,0,44,47,1,0,0,0,45,43,1,
0,0,0,45,46,1,0,0,0,46,68,1,0,0,0,47,45,1,0,0,0,48,52,5,4,0,0,49,51,5,10,
0,0,50,49,1,0,0,0,51,54,1,0,0,0,52,50,1,0,0,0,52,53,1,0,0,0,53,58,1,0,0,
0,54,52,1,0,0,0,55,59,5,8,0,0,56,59,5,7,0,0,57,59,3,6,3,0,58,55,1,0,0,0,
58,56,1,0,0,0,58,57,1,0,0,0,59,63,1,0,0,0,60,62,5,10,0,0,61,60,1,0,0,0,62,
65,1,0,0,0,63,61,1,0,0,0,63,64,1,0,0,0,64,67,1,0,0,0,65,63,1,0,0,0,66,48,
1,0,0,0,67,70,1,0,0,0,68,66,1,0,0,0,68,69,1,0,0,0,69,72,1,0,0,0,70,68,1,
0,0,0,71,40,1,0,0,0,71,72,1,0,0,0,72,73,1,0,0,0,73,74,5,5,0,0,74,7,1,0,0,
0,11,10,14,26,34,40,45,52,58,63,68,71];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class biesCParser extends antlr4.Parser {

    static grammarFileName = "biesC.g4";
    static literalNames = [ null, "'('", "')'", "'['", "','", "']'", "'print'" ];
    static symbolicNames = [ null, null, null, null, null, null, "PRINT", 
                             "STRING", "NUMBER", "NL", "ES", "WS" ];
    static ruleNames = [ "program", "statement", "printInstr", "array" ];

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
	        this.state = 14;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===6) {
	            this.state = 8;
	            this.statement();
	            this.state = 10;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===9) {
	                this.state = 9;
	                this.match(biesCParser.NL);
	            }

	            this.state = 16;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 17;
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
	        this.state = 19;
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
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 21;
	        this.match(biesCParser.PRINT);
	        this.state = 22;
	        this.match(biesCParser.T__0);
	        this.state = 26;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 7:
	            this.state = 23;
	            this.match(biesCParser.STRING);
	            break;
	        case 8:
	            this.state = 24;
	            this.match(biesCParser.NUMBER);
	            break;
	        case 3:
	            this.state = 25;
	            this.array();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 28;
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



	array() {
	    let localctx = new ArrayContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, biesCParser.RULE_array);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 30;
	        this.match(biesCParser.T__2);
	        this.state = 34;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===10) {
	            this.state = 31;
	            this.match(biesCParser.ES);
	            this.state = 36;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 71;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 392) !== 0)) {
	            this.state = 40;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 8:
	                this.state = 37;
	                this.match(biesCParser.NUMBER);
	                break;
	            case 7:
	                this.state = 38;
	                this.match(biesCParser.STRING);
	                break;
	            case 3:
	                this.state = 39;
	                this.array();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 45;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===10) {
	                this.state = 42;
	                this.match(biesCParser.ES);
	                this.state = 47;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 68;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===4) {
	                this.state = 48;
	                this.match(biesCParser.T__3);
	                this.state = 52;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===10) {
	                    this.state = 49;
	                    this.match(biesCParser.ES);
	                    this.state = 54;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	                this.state = 58;
	                this._errHandler.sync(this);
	                switch(this._input.LA(1)) {
	                case 8:
	                    this.state = 55;
	                    this.match(biesCParser.NUMBER);
	                    break;
	                case 7:
	                    this.state = 56;
	                    this.match(biesCParser.STRING);
	                    break;
	                case 3:
	                    this.state = 57;
	                    this.array();
	                    break;
	                default:
	                    throw new antlr4.error.NoViableAltException(this);
	                }
	                this.state = 63;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===10) {
	                    this.state = 60;
	                    this.match(biesCParser.ES);
	                    this.state = 65;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	                this.state = 70;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 73;
	        this.match(biesCParser.T__4);
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
biesCParser.T__2 = 3;
biesCParser.T__3 = 4;
biesCParser.T__4 = 5;
biesCParser.PRINT = 6;
biesCParser.STRING = 7;
biesCParser.NUMBER = 8;
biesCParser.NL = 9;
biesCParser.ES = 10;
biesCParser.WS = 11;

biesCParser.RULE_program = 0;
biesCParser.RULE_statement = 1;
biesCParser.RULE_printInstr = 2;
biesCParser.RULE_array = 3;

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

	array() {
	    return this.getTypedRuleContext(ArrayContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitPrintInstr(this);
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
        this.ruleIndex = biesCParser.RULE_array;
    }

	ES = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(biesCParser.ES);
	    } else {
	        return this.getToken(biesCParser.ES, i);
	    }
	};


	NUMBER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(biesCParser.NUMBER);
	    } else {
	        return this.getToken(biesCParser.NUMBER, i);
	    }
	};


	STRING = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(biesCParser.STRING);
	    } else {
	        return this.getToken(biesCParser.STRING, i);
	    }
	};


	array = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ArrayContext);
	    } else {
	        return this.getTypedRuleContext(ArrayContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof biesCVisitor ) {
	        return visitor.visitArray(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




biesCParser.ProgramContext = ProgramContext; 
biesCParser.StatementContext = StatementContext; 
biesCParser.PrintInstrContext = PrintInstrContext; 
biesCParser.ArrayContext = ArrayContext; 
