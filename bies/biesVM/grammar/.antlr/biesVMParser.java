// Generated from /home/mauricio/Documents/Obsidian/2024/Ciclo2/Paradigmas/Proyectos/Proyecto 1/pruebas/biesvm/grammar/biesVMParser.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class biesVMParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		LDV=1, ADD=2, RET=3, HLT=4, APP=5, PRN=6, FUN=7, END=8, LABEL_IDENTIFIER=9, 
		NUMBER=10, ID=11, COMMENT=12, WS=13, NL=14;
	public static final int
		RULE_program = 0, RULE_functionDef = 1, RULE_statement = 2, RULE_instruction = 3, 
		RULE_loadInstr = 4, RULE_arithInstr = 5, RULE_controlInstr = 6, RULE_funcInstr = 7;
	private static String[] makeRuleNames() {
		return new String[] {
			"program", "functionDef", "statement", "instruction", "loadInstr", "arithInstr", 
			"controlInstr", "funcInstr"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'LDV'", "'ADD'", "'RET'", "'HLT'", "'APP'", "'PRN'", "'$FUN'", 
			"'$END'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "LDV", "ADD", "RET", "HLT", "APP", "PRN", "FUN", "END", "LABEL_IDENTIFIER", 
			"NUMBER", "ID", "COMMENT", "WS", "NL"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "biesVMParser.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public biesVMParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ProgramContext extends ParserRuleContext {
		public TerminalNode EOF() { return getToken(biesVMParser.EOF, 0); }
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public ProgramContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_program; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof biesVMParserListener ) ((biesVMParserListener)listener).enterProgram(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof biesVMParserListener ) ((biesVMParserListener)listener).exitProgram(this);
		}
	}

	public final ProgramContext program() throws RecognitionException {
		ProgramContext _localctx = new ProgramContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_program);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(17); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(16);
				statement();
				}
				}
				setState(19); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & 126L) != 0) );
			setState(21);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FunctionDefContext extends ParserRuleContext {
		public TerminalNode FUN() { return getToken(biesVMParser.FUN, 0); }
		public List<TerminalNode> LABEL_IDENTIFIER() { return getTokens(biesVMParser.LABEL_IDENTIFIER); }
		public TerminalNode LABEL_IDENTIFIER(int i) {
			return getToken(biesVMParser.LABEL_IDENTIFIER, i);
		}
		public List<TerminalNode> NL() { return getTokens(biesVMParser.NL); }
		public TerminalNode NL(int i) {
			return getToken(biesVMParser.NL, i);
		}
		public TerminalNode END() { return getToken(biesVMParser.END, 0); }
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public FunctionDefContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionDef; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof biesVMParserListener ) ((biesVMParserListener)listener).enterFunctionDef(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof biesVMParserListener ) ((biesVMParserListener)listener).exitFunctionDef(this);
		}
	}

	public final FunctionDefContext functionDef() throws RecognitionException {
		FunctionDefContext _localctx = new FunctionDefContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_functionDef);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(23);
			match(FUN);
			setState(24);
			match(LABEL_IDENTIFIER);
			setState(25);
			match(NL);
			setState(27); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(26);
				statement();
				}
				}
				setState(29); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & 126L) != 0) );
			setState(31);
			match(END);
			setState(32);
			match(LABEL_IDENTIFIER);
			setState(33);
			match(NL);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class StatementContext extends ParserRuleContext {
		public InstructionContext instruction() {
			return getRuleContext(InstructionContext.class,0);
		}
		public TerminalNode NL() { return getToken(biesVMParser.NL, 0); }
		public StatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statement; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof biesVMParserListener ) ((biesVMParserListener)listener).enterStatement(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof biesVMParserListener ) ((biesVMParserListener)listener).exitStatement(this);
		}
	}

	public final StatementContext statement() throws RecognitionException {
		StatementContext _localctx = new StatementContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_statement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(35);
			instruction();
			setState(36);
			match(NL);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class InstructionContext extends ParserRuleContext {
		public LoadInstrContext loadInstr() {
			return getRuleContext(LoadInstrContext.class,0);
		}
		public ArithInstrContext arithInstr() {
			return getRuleContext(ArithInstrContext.class,0);
		}
		public ControlInstrContext controlInstr() {
			return getRuleContext(ControlInstrContext.class,0);
		}
		public FuncInstrContext funcInstr() {
			return getRuleContext(FuncInstrContext.class,0);
		}
		public InstructionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_instruction; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof biesVMParserListener ) ((biesVMParserListener)listener).enterInstruction(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof biesVMParserListener ) ((biesVMParserListener)listener).exitInstruction(this);
		}
	}

	public final InstructionContext instruction() throws RecognitionException {
		InstructionContext _localctx = new InstructionContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_instruction);
		try {
			setState(42);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case LDV:
				enterOuterAlt(_localctx, 1);
				{
				setState(38);
				loadInstr();
				}
				break;
			case ADD:
				enterOuterAlt(_localctx, 2);
				{
				setState(39);
				arithInstr();
				}
				break;
			case RET:
			case HLT:
				enterOuterAlt(_localctx, 3);
				{
				setState(40);
				controlInstr();
				}
				break;
			case APP:
			case PRN:
				enterOuterAlt(_localctx, 4);
				{
				setState(41);
				funcInstr();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class LoadInstrContext extends ParserRuleContext {
		public TerminalNode LDV() { return getToken(biesVMParser.LDV, 0); }
		public TerminalNode NUMBER() { return getToken(biesVMParser.NUMBER, 0); }
		public LoadInstrContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_loadInstr; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof biesVMParserListener ) ((biesVMParserListener)listener).enterLoadInstr(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof biesVMParserListener ) ((biesVMParserListener)listener).exitLoadInstr(this);
		}
	}

	public final LoadInstrContext loadInstr() throws RecognitionException {
		LoadInstrContext _localctx = new LoadInstrContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_loadInstr);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(44);
			match(LDV);
			setState(45);
			match(NUMBER);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ArithInstrContext extends ParserRuleContext {
		public TerminalNode ADD() { return getToken(biesVMParser.ADD, 0); }
		public ArithInstrContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_arithInstr; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof biesVMParserListener ) ((biesVMParserListener)listener).enterArithInstr(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof biesVMParserListener ) ((biesVMParserListener)listener).exitArithInstr(this);
		}
	}

	public final ArithInstrContext arithInstr() throws RecognitionException {
		ArithInstrContext _localctx = new ArithInstrContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_arithInstr);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(47);
			match(ADD);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ControlInstrContext extends ParserRuleContext {
		public TerminalNode RET() { return getToken(biesVMParser.RET, 0); }
		public TerminalNode HLT() { return getToken(biesVMParser.HLT, 0); }
		public ControlInstrContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_controlInstr; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof biesVMParserListener ) ((biesVMParserListener)listener).enterControlInstr(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof biesVMParserListener ) ((biesVMParserListener)listener).exitControlInstr(this);
		}
	}

	public final ControlInstrContext controlInstr() throws RecognitionException {
		ControlInstrContext _localctx = new ControlInstrContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_controlInstr);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(49);
			_la = _input.LA(1);
			if ( !(_la==RET || _la==HLT) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FuncInstrContext extends ParserRuleContext {
		public TerminalNode APP() { return getToken(biesVMParser.APP, 0); }
		public TerminalNode PRN() { return getToken(biesVMParser.PRN, 0); }
		public FuncInstrContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_funcInstr; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof biesVMParserListener ) ((biesVMParserListener)listener).enterFuncInstr(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof biesVMParserListener ) ((biesVMParserListener)listener).exitFuncInstr(this);
		}
	}

	public final FuncInstrContext funcInstr() throws RecognitionException {
		FuncInstrContext _localctx = new FuncInstrContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_funcInstr);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(51);
			_la = _input.LA(1);
			if ( !(_la==APP || _la==PRN) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\u0004\u0001\u000e6\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0001"+
		"\u0000\u0004\u0000\u0012\b\u0000\u000b\u0000\f\u0000\u0013\u0001\u0000"+
		"\u0001\u0000\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0004\u0001"+
		"\u001c\b\u0001\u000b\u0001\f\u0001\u001d\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0003\u0003+\b\u0003\u0001\u0004\u0001"+
		"\u0004\u0001\u0004\u0001\u0005\u0001\u0005\u0001\u0006\u0001\u0006\u0001"+
		"\u0007\u0001\u0007\u0001\u0007\u0000\u0000\b\u0000\u0002\u0004\u0006\b"+
		"\n\f\u000e\u0000\u0002\u0001\u0000\u0003\u0004\u0001\u0000\u0005\u0006"+
		"2\u0000\u0011\u0001\u0000\u0000\u0000\u0002\u0017\u0001\u0000\u0000\u0000"+
		"\u0004#\u0001\u0000\u0000\u0000\u0006*\u0001\u0000\u0000\u0000\b,\u0001"+
		"\u0000\u0000\u0000\n/\u0001\u0000\u0000\u0000\f1\u0001\u0000\u0000\u0000"+
		"\u000e3\u0001\u0000\u0000\u0000\u0010\u0012\u0003\u0004\u0002\u0000\u0011"+
		"\u0010\u0001\u0000\u0000\u0000\u0012\u0013\u0001\u0000\u0000\u0000\u0013"+
		"\u0011\u0001\u0000\u0000\u0000\u0013\u0014\u0001\u0000\u0000\u0000\u0014"+
		"\u0015\u0001\u0000\u0000\u0000\u0015\u0016\u0005\u0000\u0000\u0001\u0016"+
		"\u0001\u0001\u0000\u0000\u0000\u0017\u0018\u0005\u0007\u0000\u0000\u0018"+
		"\u0019\u0005\t\u0000\u0000\u0019\u001b\u0005\u000e\u0000\u0000\u001a\u001c"+
		"\u0003\u0004\u0002\u0000\u001b\u001a\u0001\u0000\u0000\u0000\u001c\u001d"+
		"\u0001\u0000\u0000\u0000\u001d\u001b\u0001\u0000\u0000\u0000\u001d\u001e"+
		"\u0001\u0000\u0000\u0000\u001e\u001f\u0001\u0000\u0000\u0000\u001f \u0005"+
		"\b\u0000\u0000 !\u0005\t\u0000\u0000!\"\u0005\u000e\u0000\u0000\"\u0003"+
		"\u0001\u0000\u0000\u0000#$\u0003\u0006\u0003\u0000$%\u0005\u000e\u0000"+
		"\u0000%\u0005\u0001\u0000\u0000\u0000&+\u0003\b\u0004\u0000\'+\u0003\n"+
		"\u0005\u0000(+\u0003\f\u0006\u0000)+\u0003\u000e\u0007\u0000*&\u0001\u0000"+
		"\u0000\u0000*\'\u0001\u0000\u0000\u0000*(\u0001\u0000\u0000\u0000*)\u0001"+
		"\u0000\u0000\u0000+\u0007\u0001\u0000\u0000\u0000,-\u0005\u0001\u0000"+
		"\u0000-.\u0005\n\u0000\u0000.\t\u0001\u0000\u0000\u0000/0\u0005\u0002"+
		"\u0000\u00000\u000b\u0001\u0000\u0000\u000012\u0007\u0000\u0000\u0000"+
		"2\r\u0001\u0000\u0000\u000034\u0007\u0001\u0000\u00004\u000f\u0001\u0000"+
		"\u0000\u0000\u0003\u0013\u001d*";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}