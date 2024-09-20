// Generated from /home/mauricio/Documents/Obsidian/2024/Ciclo2/Paradigmas/Proyectos/Proyecto 1/pruebas/proyectoBiesVM/grammar/biesLanguage.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class biesLanguageParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		LDV=1, ADD=2, MUL=3, RET=4, HLT=5, APP=6, PRN=7, BLD=8, BST=9, LDF=10, 
		INI=11, FUN=12, END=13, LABEL_IDENTIFIER=14, NUMBER=15, ID=16, COMMENT=17, 
		WS=18, NL=19;
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
			null, "'LDV'", "'ADD'", "'MUL'", "'RET'", "'HLT'", "'APP'", "'PRN'", 
			"'BLD'", "'BST'", "'LDF'", "'INI'", "'$FUN'", "'$END'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "LDV", "ADD", "MUL", "RET", "HLT", "APP", "PRN", "BLD", "BST", 
			"LDF", "INI", "FUN", "END", "LABEL_IDENTIFIER", "NUMBER", "ID", "COMMENT", 
			"WS", "NL"
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
	public String getGrammarFileName() { return "biesLanguage.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public biesLanguageParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ProgramContext extends ParserRuleContext {
		public TerminalNode EOF() { return getToken(biesLanguageParser.EOF, 0); }
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public List<TerminalNode> NL() { return getTokens(biesLanguageParser.NL); }
		public TerminalNode NL(int i) {
			return getToken(biesLanguageParser.NL, i);
		}
		public ProgramContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_program; }
	}

	public final ProgramContext program() throws RecognitionException {
		ProgramContext _localctx = new ProgramContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_program);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(22);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 8190L) != 0)) {
				{
				{
				setState(16);
				statement();
				setState(18);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==NL) {
					{
					setState(17);
					match(NL);
					}
				}

				}
				}
				setState(24);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(25);
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
		public TerminalNode FUN() { return getToken(biesLanguageParser.FUN, 0); }
		public List<TerminalNode> LABEL_IDENTIFIER() { return getTokens(biesLanguageParser.LABEL_IDENTIFIER); }
		public TerminalNode LABEL_IDENTIFIER(int i) {
			return getToken(biesLanguageParser.LABEL_IDENTIFIER, i);
		}
		public List<TerminalNode> NL() { return getTokens(biesLanguageParser.NL); }
		public TerminalNode NL(int i) {
			return getToken(biesLanguageParser.NL, i);
		}
		public TerminalNode END() { return getToken(biesLanguageParser.END, 0); }
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
	}

	public final FunctionDefContext functionDef() throws RecognitionException {
		FunctionDefContext _localctx = new FunctionDefContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_functionDef);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(27);
			match(FUN);
			setState(28);
			match(LABEL_IDENTIFIER);
			setState(29);
			match(NL);
			setState(33);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 8190L) != 0)) {
				{
				{
				setState(30);
				statement();
				}
				}
				setState(35);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(36);
			match(END);
			setState(37);
			match(LABEL_IDENTIFIER);
			setState(38);
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
		public TerminalNode NL() { return getToken(biesLanguageParser.NL, 0); }
		public FunctionDefContext functionDef() {
			return getRuleContext(FunctionDefContext.class,0);
		}
		public StatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statement; }
	}

	public final StatementContext statement() throws RecognitionException {
		StatementContext _localctx = new StatementContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_statement);
		try {
			setState(45);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case LDV:
			case ADD:
			case MUL:
			case RET:
			case HLT:
			case APP:
			case PRN:
			case BLD:
			case BST:
			case LDF:
			case INI:
				enterOuterAlt(_localctx, 1);
				{
				setState(40);
				instruction();
				setState(42);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,3,_ctx) ) {
				case 1:
					{
					setState(41);
					match(NL);
					}
					break;
				}
				}
				break;
			case FUN:
				enterOuterAlt(_localctx, 2);
				{
				setState(44);
				functionDef();
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
	}

	public final InstructionContext instruction() throws RecognitionException {
		InstructionContext _localctx = new InstructionContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_instruction);
		try {
			setState(51);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,5,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(47);
				loadInstr();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(48);
				arithInstr();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(49);
				controlInstr();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(50);
				funcInstr();
				}
				break;
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
		public TerminalNode LDV() { return getToken(biesLanguageParser.LDV, 0); }
		public List<TerminalNode> NUMBER() { return getTokens(biesLanguageParser.NUMBER); }
		public TerminalNode NUMBER(int i) {
			return getToken(biesLanguageParser.NUMBER, i);
		}
		public TerminalNode ADD() { return getToken(biesLanguageParser.ADD, 0); }
		public TerminalNode MUL() { return getToken(biesLanguageParser.MUL, 0); }
		public TerminalNode RET() { return getToken(biesLanguageParser.RET, 0); }
		public TerminalNode HLT() { return getToken(biesLanguageParser.HLT, 0); }
		public TerminalNode APP() { return getToken(biesLanguageParser.APP, 0); }
		public TerminalNode PRN() { return getToken(biesLanguageParser.PRN, 0); }
		public TerminalNode BLD() { return getToken(biesLanguageParser.BLD, 0); }
		public TerminalNode BST() { return getToken(biesLanguageParser.BST, 0); }
		public TerminalNode LDF() { return getToken(biesLanguageParser.LDF, 0); }
		public TerminalNode LABEL_IDENTIFIER() { return getToken(biesLanguageParser.LABEL_IDENTIFIER, 0); }
		public TerminalNode INI() { return getToken(biesLanguageParser.INI, 0); }
		public LoadInstrContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_loadInstr; }
	}

	public final LoadInstrContext loadInstr() throws RecognitionException {
		LoadInstrContext _localctx = new LoadInstrContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_loadInstr);
		try {
			setState(71);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case LDV:
				enterOuterAlt(_localctx, 1);
				{
				setState(53);
				match(LDV);
				setState(54);
				match(NUMBER);
				}
				break;
			case ADD:
				enterOuterAlt(_localctx, 2);
				{
				setState(55);
				match(ADD);
				}
				break;
			case MUL:
				enterOuterAlt(_localctx, 3);
				{
				setState(56);
				match(MUL);
				}
				break;
			case RET:
				enterOuterAlt(_localctx, 4);
				{
				setState(57);
				match(RET);
				}
				break;
			case HLT:
				enterOuterAlt(_localctx, 5);
				{
				setState(58);
				match(HLT);
				}
				break;
			case APP:
				enterOuterAlt(_localctx, 6);
				{
				setState(59);
				match(APP);
				}
				break;
			case PRN:
				enterOuterAlt(_localctx, 7);
				{
				setState(60);
				match(PRN);
				}
				break;
			case BLD:
				enterOuterAlt(_localctx, 8);
				{
				setState(61);
				match(BLD);
				setState(62);
				match(NUMBER);
				setState(63);
				match(NUMBER);
				}
				break;
			case BST:
				enterOuterAlt(_localctx, 9);
				{
				setState(64);
				match(BST);
				setState(65);
				match(NUMBER);
				setState(66);
				match(NUMBER);
				}
				break;
			case LDF:
				enterOuterAlt(_localctx, 10);
				{
				setState(67);
				match(LDF);
				setState(68);
				match(LABEL_IDENTIFIER);
				}
				break;
			case INI:
				enterOuterAlt(_localctx, 11);
				{
				setState(69);
				match(INI);
				setState(70);
				match(LABEL_IDENTIFIER);
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
	public static class ArithInstrContext extends ParserRuleContext {
		public TerminalNode ADD() { return getToken(biesLanguageParser.ADD, 0); }
		public TerminalNode MUL() { return getToken(biesLanguageParser.MUL, 0); }
		public ArithInstrContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_arithInstr; }
	}

	public final ArithInstrContext arithInstr() throws RecognitionException {
		ArithInstrContext _localctx = new ArithInstrContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_arithInstr);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(73);
			_la = _input.LA(1);
			if ( !(_la==ADD || _la==MUL) ) {
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
	public static class ControlInstrContext extends ParserRuleContext {
		public TerminalNode RET() { return getToken(biesLanguageParser.RET, 0); }
		public TerminalNode HLT() { return getToken(biesLanguageParser.HLT, 0); }
		public ControlInstrContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_controlInstr; }
	}

	public final ControlInstrContext controlInstr() throws RecognitionException {
		ControlInstrContext _localctx = new ControlInstrContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_controlInstr);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(75);
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
		public TerminalNode APP() { return getToken(biesLanguageParser.APP, 0); }
		public TerminalNode PRN() { return getToken(biesLanguageParser.PRN, 0); }
		public FuncInstrContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_funcInstr; }
	}

	public final FuncInstrContext funcInstr() throws RecognitionException {
		FuncInstrContext _localctx = new FuncInstrContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_funcInstr);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(77);
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
		"\u0004\u0001\u0013P\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0001"+
		"\u0000\u0001\u0000\u0003\u0000\u0013\b\u0000\u0005\u0000\u0015\b\u0000"+
		"\n\u0000\f\u0000\u0018\t\u0000\u0001\u0000\u0001\u0000\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0005\u0001 \b\u0001\n\u0001\f\u0001#\t"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0002\u0001"+
		"\u0002\u0003\u0002+\b\u0002\u0001\u0002\u0003\u0002.\b\u0002\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0003\u00034\b\u0003\u0001\u0004"+
		"\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004"+
		"\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004"+
		"\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0003\u0004"+
		"H\b\u0004\u0001\u0005\u0001\u0005\u0001\u0006\u0001\u0006\u0001\u0007"+
		"\u0001\u0007\u0001\u0007\u0000\u0000\b\u0000\u0002\u0004\u0006\b\n\f\u000e"+
		"\u0000\u0003\u0001\u0000\u0002\u0003\u0001\u0000\u0004\u0005\u0001\u0000"+
		"\u0006\u0007Y\u0000\u0016\u0001\u0000\u0000\u0000\u0002\u001b\u0001\u0000"+
		"\u0000\u0000\u0004-\u0001\u0000\u0000\u0000\u00063\u0001\u0000\u0000\u0000"+
		"\bG\u0001\u0000\u0000\u0000\nI\u0001\u0000\u0000\u0000\fK\u0001\u0000"+
		"\u0000\u0000\u000eM\u0001\u0000\u0000\u0000\u0010\u0012\u0003\u0004\u0002"+
		"\u0000\u0011\u0013\u0005\u0013\u0000\u0000\u0012\u0011\u0001\u0000\u0000"+
		"\u0000\u0012\u0013\u0001\u0000\u0000\u0000\u0013\u0015\u0001\u0000\u0000"+
		"\u0000\u0014\u0010\u0001\u0000\u0000\u0000\u0015\u0018\u0001\u0000\u0000"+
		"\u0000\u0016\u0014\u0001\u0000\u0000\u0000\u0016\u0017\u0001\u0000\u0000"+
		"\u0000\u0017\u0019\u0001\u0000\u0000\u0000\u0018\u0016\u0001\u0000\u0000"+
		"\u0000\u0019\u001a\u0005\u0000\u0000\u0001\u001a\u0001\u0001\u0000\u0000"+
		"\u0000\u001b\u001c\u0005\f\u0000\u0000\u001c\u001d\u0005\u000e\u0000\u0000"+
		"\u001d!\u0005\u0013\u0000\u0000\u001e \u0003\u0004\u0002\u0000\u001f\u001e"+
		"\u0001\u0000\u0000\u0000 #\u0001\u0000\u0000\u0000!\u001f\u0001\u0000"+
		"\u0000\u0000!\"\u0001\u0000\u0000\u0000\"$\u0001\u0000\u0000\u0000#!\u0001"+
		"\u0000\u0000\u0000$%\u0005\r\u0000\u0000%&\u0005\u000e\u0000\u0000&\'"+
		"\u0005\u0013\u0000\u0000\'\u0003\u0001\u0000\u0000\u0000(*\u0003\u0006"+
		"\u0003\u0000)+\u0005\u0013\u0000\u0000*)\u0001\u0000\u0000\u0000*+\u0001"+
		"\u0000\u0000\u0000+.\u0001\u0000\u0000\u0000,.\u0003\u0002\u0001\u0000"+
		"-(\u0001\u0000\u0000\u0000-,\u0001\u0000\u0000\u0000.\u0005\u0001\u0000"+
		"\u0000\u0000/4\u0003\b\u0004\u000004\u0003\n\u0005\u000014\u0003\f\u0006"+
		"\u000024\u0003\u000e\u0007\u00003/\u0001\u0000\u0000\u000030\u0001\u0000"+
		"\u0000\u000031\u0001\u0000\u0000\u000032\u0001\u0000\u0000\u00004\u0007"+
		"\u0001\u0000\u0000\u000056\u0005\u0001\u0000\u00006H\u0005\u000f\u0000"+
		"\u00007H\u0005\u0002\u0000\u00008H\u0005\u0003\u0000\u00009H\u0005\u0004"+
		"\u0000\u0000:H\u0005\u0005\u0000\u0000;H\u0005\u0006\u0000\u0000<H\u0005"+
		"\u0007\u0000\u0000=>\u0005\b\u0000\u0000>?\u0005\u000f\u0000\u0000?H\u0005"+
		"\u000f\u0000\u0000@A\u0005\t\u0000\u0000AB\u0005\u000f\u0000\u0000BH\u0005"+
		"\u000f\u0000\u0000CD\u0005\n\u0000\u0000DH\u0005\u000e\u0000\u0000EF\u0005"+
		"\u000b\u0000\u0000FH\u0005\u000e\u0000\u0000G5\u0001\u0000\u0000\u0000"+
		"G7\u0001\u0000\u0000\u0000G8\u0001\u0000\u0000\u0000G9\u0001\u0000\u0000"+
		"\u0000G:\u0001\u0000\u0000\u0000G;\u0001\u0000\u0000\u0000G<\u0001\u0000"+
		"\u0000\u0000G=\u0001\u0000\u0000\u0000G@\u0001\u0000\u0000\u0000GC\u0001"+
		"\u0000\u0000\u0000GE\u0001\u0000\u0000\u0000H\t\u0001\u0000\u0000\u0000"+
		"IJ\u0007\u0000\u0000\u0000J\u000b\u0001\u0000\u0000\u0000KL\u0007\u0001"+
		"\u0000\u0000L\r\u0001\u0000\u0000\u0000MN\u0007\u0002\u0000\u0000N\u000f"+
		"\u0001\u0000\u0000\u0000\u0007\u0012\u0016!*-3G";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}