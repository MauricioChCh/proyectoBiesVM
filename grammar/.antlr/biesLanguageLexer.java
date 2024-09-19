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
		LDV=1, ADD=2, RET=3, HLT=4, APP=5, PRN=6, BLD=7, LDF=8, INI=9, FUN=10, 
		END=11, LABEL_IDENTIFIER=12, NUMBER=13, ID=14, COMMENT=15, WS=16, NL=17;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"LDV", "ADD", "RET", "HLT", "APP", "PRN", "BLD", "LDF", "INI", "FUN", 
			"END", "LABEL_IDENTIFIER", "NUMBER", "ID", "COMMENT", "WS", "NL"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'LDV'", "'ADD'", "'RET'", "'HLT'", "'APP'", "'PRN'", "'BLD'", 
			"'LDF'", "'INI'", "'$FUN'", "'$END'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "LDV", "ADD", "RET", "HLT", "APP", "PRN", "BLD", "LDF", "INI", 
			"FUN", "END", "LABEL_IDENTIFIER", "NUMBER", "ID", "COMMENT", "WS", "NL"
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
		"\u0004\u0000\u0011z\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002\u0001"+
		"\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004"+
		"\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007"+
		"\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b"+
		"\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002"+
		"\u000f\u0007\u000f\u0002\u0010\u0007\u0010\u0001\u0000\u0001\u0000\u0001"+
		"\u0000\u0001\u0000\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001"+
		"\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0006\u0001\u0006\u0001"+
		"\u0006\u0001\u0006\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001"+
		"\b\u0001\b\u0001\b\u0001\b\u0001\t\u0001\t\u0001\t\u0001\t\u0001\t\u0001"+
		"\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\u000b\u0001\u000b\u0001\u000b"+
		"\u0005\u000bU\b\u000b\n\u000b\f\u000bX\t\u000b\u0001\f\u0004\f[\b\f\u000b"+
		"\f\f\f\\\u0001\r\u0001\r\u0005\ra\b\r\n\r\f\rd\t\r\u0001\u000e\u0001\u000e"+
		"\u0005\u000eh\b\u000e\n\u000e\f\u000ek\t\u000e\u0001\u000e\u0001\u000e"+
		"\u0001\u000f\u0004\u000fp\b\u000f\u000b\u000f\f\u000fq\u0001\u000f\u0001"+
		"\u000f\u0001\u0010\u0004\u0010w\b\u0010\u000b\u0010\f\u0010x\u0000\u0000"+
		"\u0011\u0001\u0001\u0003\u0002\u0005\u0003\u0007\u0004\t\u0005\u000b\u0006"+
		"\r\u0007\u000f\b\u0011\t\u0013\n\u0015\u000b\u0017\f\u0019\r\u001b\u000e"+
		"\u001d\u000f\u001f\u0010!\u0011\u0001\u0000\u0007\u0002\u0000AZaz\u0003"+
		"\u000009AZaz\u0001\u000009\u0003\u0000AZ__az\u0004\u000009AZ__az\u0002"+
		"\u0000\n\n\r\r\u0003\u0000\t\n\r\r  \u007f\u0000\u0001\u0001\u0000\u0000"+
		"\u0000\u0000\u0003\u0001\u0000\u0000\u0000\u0000\u0005\u0001\u0000\u0000"+
		"\u0000\u0000\u0007\u0001\u0000\u0000\u0000\u0000\t\u0001\u0000\u0000\u0000"+
		"\u0000\u000b\u0001\u0000\u0000\u0000\u0000\r\u0001\u0000\u0000\u0000\u0000"+
		"\u000f\u0001\u0000\u0000\u0000\u0000\u0011\u0001\u0000\u0000\u0000\u0000"+
		"\u0013\u0001\u0000\u0000\u0000\u0000\u0015\u0001\u0000\u0000\u0000\u0000"+
		"\u0017\u0001\u0000\u0000\u0000\u0000\u0019\u0001\u0000\u0000\u0000\u0000"+
		"\u001b\u0001\u0000\u0000\u0000\u0000\u001d\u0001\u0000\u0000\u0000\u0000"+
		"\u001f\u0001\u0000\u0000\u0000\u0000!\u0001\u0000\u0000\u0000\u0001#\u0001"+
		"\u0000\u0000\u0000\u0003\'\u0001\u0000\u0000\u0000\u0005+\u0001\u0000"+
		"\u0000\u0000\u0007/\u0001\u0000\u0000\u0000\t3\u0001\u0000\u0000\u0000"+
		"\u000b7\u0001\u0000\u0000\u0000\r;\u0001\u0000\u0000\u0000\u000f?\u0001"+
		"\u0000\u0000\u0000\u0011C\u0001\u0000\u0000\u0000\u0013G\u0001\u0000\u0000"+
		"\u0000\u0015L\u0001\u0000\u0000\u0000\u0017Q\u0001\u0000\u0000\u0000\u0019"+
		"Z\u0001\u0000\u0000\u0000\u001b^\u0001\u0000\u0000\u0000\u001de\u0001"+
		"\u0000\u0000\u0000\u001fo\u0001\u0000\u0000\u0000!v\u0001\u0000\u0000"+
		"\u0000#$\u0005L\u0000\u0000$%\u0005D\u0000\u0000%&\u0005V\u0000\u0000"+
		"&\u0002\u0001\u0000\u0000\u0000\'(\u0005A\u0000\u0000()\u0005D\u0000\u0000"+
		")*\u0005D\u0000\u0000*\u0004\u0001\u0000\u0000\u0000+,\u0005R\u0000\u0000"+
		",-\u0005E\u0000\u0000-.\u0005T\u0000\u0000.\u0006\u0001\u0000\u0000\u0000"+
		"/0\u0005H\u0000\u000001\u0005L\u0000\u000012\u0005T\u0000\u00002\b\u0001"+
		"\u0000\u0000\u000034\u0005A\u0000\u000045\u0005P\u0000\u000056\u0005P"+
		"\u0000\u00006\n\u0001\u0000\u0000\u000078\u0005P\u0000\u000089\u0005R"+
		"\u0000\u00009:\u0005N\u0000\u0000:\f\u0001\u0000\u0000\u0000;<\u0005B"+
		"\u0000\u0000<=\u0005L\u0000\u0000=>\u0005D\u0000\u0000>\u000e\u0001\u0000"+
		"\u0000\u0000?@\u0005L\u0000\u0000@A\u0005D\u0000\u0000AB\u0005F\u0000"+
		"\u0000B\u0010\u0001\u0000\u0000\u0000CD\u0005I\u0000\u0000DE\u0005N\u0000"+
		"\u0000EF\u0005I\u0000\u0000F\u0012\u0001\u0000\u0000\u0000GH\u0005$\u0000"+
		"\u0000HI\u0005F\u0000\u0000IJ\u0005U\u0000\u0000JK\u0005N\u0000\u0000"+
		"K\u0014\u0001\u0000\u0000\u0000LM\u0005$\u0000\u0000MN\u0005E\u0000\u0000"+
		"NO\u0005N\u0000\u0000OP\u0005D\u0000\u0000P\u0016\u0001\u0000\u0000\u0000"+
		"QR\u0005$\u0000\u0000RV\u0007\u0000\u0000\u0000SU\u0007\u0001\u0000\u0000"+
		"TS\u0001\u0000\u0000\u0000UX\u0001\u0000\u0000\u0000VT\u0001\u0000\u0000"+
		"\u0000VW\u0001\u0000\u0000\u0000W\u0018\u0001\u0000\u0000\u0000XV\u0001"+
		"\u0000\u0000\u0000Y[\u0007\u0002\u0000\u0000ZY\u0001\u0000\u0000\u0000"+
		"[\\\u0001\u0000\u0000\u0000\\Z\u0001\u0000\u0000\u0000\\]\u0001\u0000"+
		"\u0000\u0000]\u001a\u0001\u0000\u0000\u0000^b\u0007\u0003\u0000\u0000"+
		"_a\u0007\u0004\u0000\u0000`_\u0001\u0000\u0000\u0000ad\u0001\u0000\u0000"+
		"\u0000b`\u0001\u0000\u0000\u0000bc\u0001\u0000\u0000\u0000c\u001c\u0001"+
		"\u0000\u0000\u0000db\u0001\u0000\u0000\u0000ei\u0005;\u0000\u0000fh\b"+
		"\u0005\u0000\u0000gf\u0001\u0000\u0000\u0000hk\u0001\u0000\u0000\u0000"+
		"ig\u0001\u0000\u0000\u0000ij\u0001\u0000\u0000\u0000jl\u0001\u0000\u0000"+
		"\u0000ki\u0001\u0000\u0000\u0000lm\u0006\u000e\u0000\u0000m\u001e\u0001"+
		"\u0000\u0000\u0000np\u0007\u0006\u0000\u0000on\u0001\u0000\u0000\u0000"+
		"pq\u0001\u0000\u0000\u0000qo\u0001\u0000\u0000\u0000qr\u0001\u0000\u0000"+
		"\u0000rs\u0001\u0000\u0000\u0000st\u0006\u000f\u0000\u0000t \u0001\u0000"+
		"\u0000\u0000uw\u0007\u0005\u0000\u0000vu\u0001\u0000\u0000\u0000wx\u0001"+
		"\u0000\u0000\u0000xv\u0001\u0000\u0000\u0000xy\u0001\u0000\u0000\u0000"+
		"y\"\u0001\u0000\u0000\u0000\u0007\u0000V\\biqx\u0001\u0006\u0000\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}