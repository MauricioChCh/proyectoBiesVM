// Generated from /home/mauricio/Documents/Obsidian/2024/Ciclo2/Paradigmas/Proyectos/Proyecto 1/pruebas/proyectoBiesVM/grammar/biesLanguage.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue", "this-escape"})
public class biesLanguageLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		LDV=1, ADD=2, MUL=3, RET=4, HLT=5, APP=6, PRN=7, BLD=8, BST=9, LDF=10, 
		INI=11, FUN=12, END=13, LABEL_IDENTIFIER=14, NUMBER=15, ID=16, COMMENT=17, 
		WS=18, NL=19;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"LDV", "ADD", "MUL", "RET", "HLT", "APP", "PRN", "BLD", "BST", "LDF", 
			"INI", "FUN", "END", "LABEL_IDENTIFIER", "NUMBER", "ID", "COMMENT", "WS", 
			"NL"
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


	public biesLanguageLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "biesLanguage.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\u0004\u0000\u0013\u0086\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002"+
		"\u0001\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002"+
		"\u0004\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002"+
		"\u0007\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002"+
		"\u000b\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e"+
		"\u0002\u000f\u0007\u000f\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011"+
		"\u0002\u0012\u0007\u0012\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0002\u0001\u0002"+
		"\u0001\u0002\u0001\u0002\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0005\u0001\u0005"+
		"\u0001\u0005\u0001\u0005\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006"+
		"\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\b\u0001\b\u0001"+
		"\b\u0001\b\u0001\t\u0001\t\u0001\t\u0001\t\u0001\n\u0001\n\u0001\n\u0001"+
		"\n\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\f"+
		"\u0001\f\u0001\f\u0001\f\u0001\f\u0001\r\u0001\r\u0001\r\u0005\ra\b\r"+
		"\n\r\f\rd\t\r\u0001\u000e\u0004\u000eg\b\u000e\u000b\u000e\f\u000eh\u0001"+
		"\u000f\u0001\u000f\u0005\u000fm\b\u000f\n\u000f\f\u000fp\t\u000f\u0001"+
		"\u0010\u0001\u0010\u0005\u0010t\b\u0010\n\u0010\f\u0010w\t\u0010\u0001"+
		"\u0010\u0001\u0010\u0001\u0011\u0004\u0011|\b\u0011\u000b\u0011\f\u0011"+
		"}\u0001\u0011\u0001\u0011\u0001\u0012\u0004\u0012\u0083\b\u0012\u000b"+
		"\u0012\f\u0012\u0084\u0000\u0000\u0013\u0001\u0001\u0003\u0002\u0005\u0003"+
		"\u0007\u0004\t\u0005\u000b\u0006\r\u0007\u000f\b\u0011\t\u0013\n\u0015"+
		"\u000b\u0017\f\u0019\r\u001b\u000e\u001d\u000f\u001f\u0010!\u0011#\u0012"+
		"%\u0013\u0001\u0000\u0007\u0002\u0000AZaz\u0003\u000009AZaz\u0001\u0000"+
		"09\u0003\u0000AZ__az\u0004\u000009AZ__az\u0002\u0000\n\n\r\r\u0003\u0000"+
		"\t\n\r\r  \u008b\u0000\u0001\u0001\u0000\u0000\u0000\u0000\u0003\u0001"+
		"\u0000\u0000\u0000\u0000\u0005\u0001\u0000\u0000\u0000\u0000\u0007\u0001"+
		"\u0000\u0000\u0000\u0000\t\u0001\u0000\u0000\u0000\u0000\u000b\u0001\u0000"+
		"\u0000\u0000\u0000\r\u0001\u0000\u0000\u0000\u0000\u000f\u0001\u0000\u0000"+
		"\u0000\u0000\u0011\u0001\u0000\u0000\u0000\u0000\u0013\u0001\u0000\u0000"+
		"\u0000\u0000\u0015\u0001\u0000\u0000\u0000\u0000\u0017\u0001\u0000\u0000"+
		"\u0000\u0000\u0019\u0001\u0000\u0000\u0000\u0000\u001b\u0001\u0000\u0000"+
		"\u0000\u0000\u001d\u0001\u0000\u0000\u0000\u0000\u001f\u0001\u0000\u0000"+
		"\u0000\u0000!\u0001\u0000\u0000\u0000\u0000#\u0001\u0000\u0000\u0000\u0000"+
		"%\u0001\u0000\u0000\u0000\u0001\'\u0001\u0000\u0000\u0000\u0003+\u0001"+
		"\u0000\u0000\u0000\u0005/\u0001\u0000\u0000\u0000\u00073\u0001\u0000\u0000"+
		"\u0000\t7\u0001\u0000\u0000\u0000\u000b;\u0001\u0000\u0000\u0000\r?\u0001"+
		"\u0000\u0000\u0000\u000fC\u0001\u0000\u0000\u0000\u0011G\u0001\u0000\u0000"+
		"\u0000\u0013K\u0001\u0000\u0000\u0000\u0015O\u0001\u0000\u0000\u0000\u0017"+
		"S\u0001\u0000\u0000\u0000\u0019X\u0001\u0000\u0000\u0000\u001b]\u0001"+
		"\u0000\u0000\u0000\u001df\u0001\u0000\u0000\u0000\u001fj\u0001\u0000\u0000"+
		"\u0000!q\u0001\u0000\u0000\u0000#{\u0001\u0000\u0000\u0000%\u0082\u0001"+
		"\u0000\u0000\u0000\'(\u0005L\u0000\u0000()\u0005D\u0000\u0000)*\u0005"+
		"V\u0000\u0000*\u0002\u0001\u0000\u0000\u0000+,\u0005A\u0000\u0000,-\u0005"+
		"D\u0000\u0000-.\u0005D\u0000\u0000.\u0004\u0001\u0000\u0000\u0000/0\u0005"+
		"M\u0000\u000001\u0005U\u0000\u000012\u0005L\u0000\u00002\u0006\u0001\u0000"+
		"\u0000\u000034\u0005R\u0000\u000045\u0005E\u0000\u000056\u0005T\u0000"+
		"\u00006\b\u0001\u0000\u0000\u000078\u0005H\u0000\u000089\u0005L\u0000"+
		"\u00009:\u0005T\u0000\u0000:\n\u0001\u0000\u0000\u0000;<\u0005A\u0000"+
		"\u0000<=\u0005P\u0000\u0000=>\u0005P\u0000\u0000>\f\u0001\u0000\u0000"+
		"\u0000?@\u0005P\u0000\u0000@A\u0005R\u0000\u0000AB\u0005N\u0000\u0000"+
		"B\u000e\u0001\u0000\u0000\u0000CD\u0005B\u0000\u0000DE\u0005L\u0000\u0000"+
		"EF\u0005D\u0000\u0000F\u0010\u0001\u0000\u0000\u0000GH\u0005B\u0000\u0000"+
		"HI\u0005S\u0000\u0000IJ\u0005T\u0000\u0000J\u0012\u0001\u0000\u0000\u0000"+
		"KL\u0005L\u0000\u0000LM\u0005D\u0000\u0000MN\u0005F\u0000\u0000N\u0014"+
		"\u0001\u0000\u0000\u0000OP\u0005I\u0000\u0000PQ\u0005N\u0000\u0000QR\u0005"+
		"I\u0000\u0000R\u0016\u0001\u0000\u0000\u0000ST\u0005$\u0000\u0000TU\u0005"+
		"F\u0000\u0000UV\u0005U\u0000\u0000VW\u0005N\u0000\u0000W\u0018\u0001\u0000"+
		"\u0000\u0000XY\u0005$\u0000\u0000YZ\u0005E\u0000\u0000Z[\u0005N\u0000"+
		"\u0000[\\\u0005D\u0000\u0000\\\u001a\u0001\u0000\u0000\u0000]^\u0005$"+
		"\u0000\u0000^b\u0007\u0000\u0000\u0000_a\u0007\u0001\u0000\u0000`_\u0001"+
		"\u0000\u0000\u0000ad\u0001\u0000\u0000\u0000b`\u0001\u0000\u0000\u0000"+
		"bc\u0001\u0000\u0000\u0000c\u001c\u0001\u0000\u0000\u0000db\u0001\u0000"+
		"\u0000\u0000eg\u0007\u0002\u0000\u0000fe\u0001\u0000\u0000\u0000gh\u0001"+
		"\u0000\u0000\u0000hf\u0001\u0000\u0000\u0000hi\u0001\u0000\u0000\u0000"+
		"i\u001e\u0001\u0000\u0000\u0000jn\u0007\u0003\u0000\u0000km\u0007\u0004"+
		"\u0000\u0000lk\u0001\u0000\u0000\u0000mp\u0001\u0000\u0000\u0000nl\u0001"+
		"\u0000\u0000\u0000no\u0001\u0000\u0000\u0000o \u0001\u0000\u0000\u0000"+
		"pn\u0001\u0000\u0000\u0000qu\u0005;\u0000\u0000rt\b\u0005\u0000\u0000"+
		"sr\u0001\u0000\u0000\u0000tw\u0001\u0000\u0000\u0000us\u0001\u0000\u0000"+
		"\u0000uv\u0001\u0000\u0000\u0000vx\u0001\u0000\u0000\u0000wu\u0001\u0000"+
		"\u0000\u0000xy\u0006\u0010\u0000\u0000y\"\u0001\u0000\u0000\u0000z|\u0007"+
		"\u0006\u0000\u0000{z\u0001\u0000\u0000\u0000|}\u0001\u0000\u0000\u0000"+
		"}{\u0001\u0000\u0000\u0000}~\u0001\u0000\u0000\u0000~\u007f\u0001\u0000"+
		"\u0000\u0000\u007f\u0080\u0006\u0011\u0000\u0000\u0080$\u0001\u0000\u0000"+
		"\u0000\u0081\u0083\u0007\u0005\u0000\u0000\u0082\u0081\u0001\u0000\u0000"+
		"\u0000\u0083\u0084\u0001\u0000\u0000\u0000\u0084\u0082\u0001\u0000\u0000"+
		"\u0000\u0084\u0085\u0001\u0000\u0000\u0000\u0085&\u0001\u0000\u0000\u0000"+
		"\u0007\u0000bhnu}\u0084\u0001\u0006\u0000\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}