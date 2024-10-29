// Generated from c:/Users/Eddy/Desktop/Proyecto Paradigmas de la Programación/bies/biesC/grammar/biesC.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class biesCParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, PRINT=6, STRING=7, NUMBER=8, COMMENT=9, 
		NL=10, ES=11, WS=12;
	public static final int
		RULE_program = 0, RULE_statement = 1, RULE_printInstr = 2, RULE_array = 3;
	private static String[] makeRuleNames() {
		return new String[] {
			"program", "statement", "printInstr", "array"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'('", "')'", "'['", "','", "']'", "'print'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, "PRINT", "STRING", "NUMBER", "COMMENT", 
			"NL", "ES", "WS"
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
	public String getGrammarFileName() { return "biesC.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public biesCParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ProgramContext extends ParserRuleContext {
		public TerminalNode EOF() { return getToken(biesCParser.EOF, 0); }
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public List<TerminalNode> NL() { return getTokens(biesCParser.NL); }
		public TerminalNode NL(int i) {
			return getToken(biesCParser.NL, i);
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
			setState(14);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==PRINT) {
				{
				{
				setState(8);
				statement();
				setState(10);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==NL) {
					{
					setState(9);
					match(NL);
					}
				}

				}
				}
				setState(16);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(17);
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
	public static class StatementContext extends ParserRuleContext {
		public PrintInstrContext printInstr() {
			return getRuleContext(PrintInstrContext.class,0);
		}
		public StatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statement; }
	}

	public final StatementContext statement() throws RecognitionException {
		StatementContext _localctx = new StatementContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_statement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(19);
			printInstr();
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
	public static class PrintInstrContext extends ParserRuleContext {
		public TerminalNode PRINT() { return getToken(biesCParser.PRINT, 0); }
		public TerminalNode STRING() { return getToken(biesCParser.STRING, 0); }
		public TerminalNode NUMBER() { return getToken(biesCParser.NUMBER, 0); }
		public ArrayContext array() {
			return getRuleContext(ArrayContext.class,0);
		}
		public PrintInstrContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_printInstr; }
	}

	public final PrintInstrContext printInstr() throws RecognitionException {
		PrintInstrContext _localctx = new PrintInstrContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_printInstr);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(21);
			match(PRINT);
			setState(22);
			match(T__0);
			setState(26);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case STRING:
				{
				setState(23);
				match(STRING);
				}
				break;
			case NUMBER:
				{
				setState(24);
				match(NUMBER);
				}
				break;
			case T__2:
				{
				setState(25);
				array();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(28);
			match(T__1);
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
	public static class ArrayContext extends ParserRuleContext {
		public List<TerminalNode> ES() { return getTokens(biesCParser.ES); }
		public TerminalNode ES(int i) {
			return getToken(biesCParser.ES, i);
		}
		public List<TerminalNode> NUMBER() { return getTokens(biesCParser.NUMBER); }
		public TerminalNode NUMBER(int i) {
			return getToken(biesCParser.NUMBER, i);
		}
		public List<TerminalNode> STRING() { return getTokens(biesCParser.STRING); }
		public TerminalNode STRING(int i) {
			return getToken(biesCParser.STRING, i);
		}
		public List<ArrayContext> array() {
			return getRuleContexts(ArrayContext.class);
		}
		public ArrayContext array(int i) {
			return getRuleContext(ArrayContext.class,i);
		}
		public ArrayContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_array; }
	}

	public final ArrayContext array() throws RecognitionException {
		ArrayContext _localctx = new ArrayContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_array);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(30);
			match(T__2);
			setState(34);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==ES) {
				{
				{
				setState(31);
				match(ES);
				}
				}
				setState(36);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(71);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 392L) != 0)) {
				{
				setState(40);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case NUMBER:
					{
					setState(37);
					match(NUMBER);
					}
					break;
				case STRING:
					{
					setState(38);
					match(STRING);
					}
					break;
				case T__2:
					{
					setState(39);
					array();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(45);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==ES) {
					{
					{
					setState(42);
					match(ES);
					}
					}
					setState(47);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(68);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==T__3) {
					{
					{
					setState(48);
					match(T__3);
					setState(52);
					_errHandler.sync(this);
					_la = _input.LA(1);
					while (_la==ES) {
						{
						{
						setState(49);
						match(ES);
						}
						}
						setState(54);
						_errHandler.sync(this);
						_la = _input.LA(1);
					}
					setState(58);
					_errHandler.sync(this);
					switch (_input.LA(1)) {
					case NUMBER:
						{
						setState(55);
						match(NUMBER);
						}
						break;
					case STRING:
						{
						setState(56);
						match(STRING);
						}
						break;
					case T__2:
						{
						setState(57);
						array();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					setState(63);
					_errHandler.sync(this);
					_la = _input.LA(1);
					while (_la==ES) {
						{
						{
						setState(60);
						match(ES);
						}
						}
						setState(65);
						_errHandler.sync(this);
						_la = _input.LA(1);
					}
					}
					}
					setState(70);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(73);
			match(T__4);
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
		"\u0004\u0001\fL\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0001\u0000\u0001\u0000\u0003"+
		"\u0000\u000b\b\u0000\u0005\u0000\r\b\u0000\n\u0000\f\u0000\u0010\t\u0000"+
		"\u0001\u0000\u0001\u0000\u0001\u0001\u0001\u0001\u0001\u0002\u0001\u0002"+
		"\u0001\u0002\u0001\u0002\u0001\u0002\u0003\u0002\u001b\b\u0002\u0001\u0002"+
		"\u0001\u0002\u0001\u0003\u0001\u0003\u0005\u0003!\b\u0003\n\u0003\f\u0003"+
		"$\t\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0003\u0003)\b\u0003\u0001"+
		"\u0003\u0005\u0003,\b\u0003\n\u0003\f\u0003/\t\u0003\u0001\u0003\u0001"+
		"\u0003\u0005\u00033\b\u0003\n\u0003\f\u00036\t\u0003\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0003\u0003;\b\u0003\u0001\u0003\u0005\u0003>\b\u0003"+
		"\n\u0003\f\u0003A\t\u0003\u0005\u0003C\b\u0003\n\u0003\f\u0003F\t\u0003"+
		"\u0003\u0003H\b\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0000\u0000"+
		"\u0004\u0000\u0002\u0004\u0006\u0000\u0000U\u0000\u000e\u0001\u0000\u0000"+
		"\u0000\u0002\u0013\u0001\u0000\u0000\u0000\u0004\u0015\u0001\u0000\u0000"+
		"\u0000\u0006\u001e\u0001\u0000\u0000\u0000\b\n\u0003\u0002\u0001\u0000"+
		"\t\u000b\u0005\n\u0000\u0000\n\t\u0001\u0000\u0000\u0000\n\u000b\u0001"+
		"\u0000\u0000\u0000\u000b\r\u0001\u0000\u0000\u0000\f\b\u0001\u0000\u0000"+
		"\u0000\r\u0010\u0001\u0000\u0000\u0000\u000e\f\u0001\u0000\u0000\u0000"+
		"\u000e\u000f\u0001\u0000\u0000\u0000\u000f\u0011\u0001\u0000\u0000\u0000"+
		"\u0010\u000e\u0001\u0000\u0000\u0000\u0011\u0012\u0005\u0000\u0000\u0001"+
		"\u0012\u0001\u0001\u0000\u0000\u0000\u0013\u0014\u0003\u0004\u0002\u0000"+
		"\u0014\u0003\u0001\u0000\u0000\u0000\u0015\u0016\u0005\u0006\u0000\u0000"+
		"\u0016\u001a\u0005\u0001\u0000\u0000\u0017\u001b\u0005\u0007\u0000\u0000"+
		"\u0018\u001b\u0005\b\u0000\u0000\u0019\u001b\u0003\u0006\u0003\u0000\u001a"+
		"\u0017\u0001\u0000\u0000\u0000\u001a\u0018\u0001\u0000\u0000\u0000\u001a"+
		"\u0019\u0001\u0000\u0000\u0000\u001b\u001c\u0001\u0000\u0000\u0000\u001c"+
		"\u001d\u0005\u0002\u0000\u0000\u001d\u0005\u0001\u0000\u0000\u0000\u001e"+
		"\"\u0005\u0003\u0000\u0000\u001f!\u0005\u000b\u0000\u0000 \u001f\u0001"+
		"\u0000\u0000\u0000!$\u0001\u0000\u0000\u0000\" \u0001\u0000\u0000\u0000"+
		"\"#\u0001\u0000\u0000\u0000#G\u0001\u0000\u0000\u0000$\"\u0001\u0000\u0000"+
		"\u0000%)\u0005\b\u0000\u0000&)\u0005\u0007\u0000\u0000\')\u0003\u0006"+
		"\u0003\u0000(%\u0001\u0000\u0000\u0000(&\u0001\u0000\u0000\u0000(\'\u0001"+
		"\u0000\u0000\u0000)-\u0001\u0000\u0000\u0000*,\u0005\u000b\u0000\u0000"+
		"+*\u0001\u0000\u0000\u0000,/\u0001\u0000\u0000\u0000-+\u0001\u0000\u0000"+
		"\u0000-.\u0001\u0000\u0000\u0000.D\u0001\u0000\u0000\u0000/-\u0001\u0000"+
		"\u0000\u000004\u0005\u0004\u0000\u000013\u0005\u000b\u0000\u000021\u0001"+
		"\u0000\u0000\u000036\u0001\u0000\u0000\u000042\u0001\u0000\u0000\u0000"+
		"45\u0001\u0000\u0000\u00005:\u0001\u0000\u0000\u000064\u0001\u0000\u0000"+
		"\u00007;\u0005\b\u0000\u00008;\u0005\u0007\u0000\u00009;\u0003\u0006\u0003"+
		"\u0000:7\u0001\u0000\u0000\u0000:8\u0001\u0000\u0000\u0000:9\u0001\u0000"+
		"\u0000\u0000;?\u0001\u0000\u0000\u0000<>\u0005\u000b\u0000\u0000=<\u0001"+
		"\u0000\u0000\u0000>A\u0001\u0000\u0000\u0000?=\u0001\u0000\u0000\u0000"+
		"?@\u0001\u0000\u0000\u0000@C\u0001\u0000\u0000\u0000A?\u0001\u0000\u0000"+
		"\u0000B0\u0001\u0000\u0000\u0000CF\u0001\u0000\u0000\u0000DB\u0001\u0000"+
		"\u0000\u0000DE\u0001\u0000\u0000\u0000EH\u0001\u0000\u0000\u0000FD\u0001"+
		"\u0000\u0000\u0000G(\u0001\u0000\u0000\u0000GH\u0001\u0000\u0000\u0000"+
		"HI\u0001\u0000\u0000\u0000IJ\u0005\u0005\u0000\u0000J\u0007\u0001\u0000"+
		"\u0000\u0000\u000b\n\u000e\u001a\"(-4:?DG";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}