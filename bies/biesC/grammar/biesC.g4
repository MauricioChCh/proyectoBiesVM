grammar biesC;

// Reglas principales del parser
program
    : (statement NL?)* EOF
    ;

statement
    : printInstr
    | simpleLetInstr
    | simpleConstInstr
    | anonymousLetFunction
    | anonymousConstFunction
    | functionCall
    | letInExpr
    | ifElseExpr
    | inputExpr
    ;

printInstr
    : 'print' '(' (primarydata | expr) ')'  # PrintInstr_Label
    ;

simpleLetInstr
    : 'let' WS? id WS? '=' WS? expr         # SimpleLetInstr_Label
    ;

anonymousLetFunction
    : 'let' WS? id WS? '=' WS? '()' '=>' (statement | expr)                       # LambdaNoParams_Label
    | ('let' | 'fun') WS? id WS? '=' WS? '(' (id (',' id)*)? ')' '=>' (statement | expr)    # LambdaWithParams_Label
    | 'let' WS? id WS? '=' WS? id (WS? '=>' WS? id)* WS? '=>' (statement | expr)  # NestedLambda_Label
    ;

letInExpr
    : let in # LetInExpr_Label
    ;

inputExpr
    : INPUT '()'                    # InputExprInstr_Label
    | INPUT '(' WS? expr WS? ')'    # InputExprInstrArgs_Label
    ;

let
    : 'let' '{' (anonymousConstFunction | simpleConstInstr (NL | WS)*)* '}' # LetExpr_Label
    ;

in
    : 'in' (statement | '{' (statement | expr (NL | WS)*)* '}') # InExpr_Label
    ;

ifElseExpr
    : if then else  # IfElseExpr_Label
    ;

simpleConstInstr
    : 'const' WS? id WS? '=' WS? expr       #SimpleConstInstr_Label
    ;

anonymousConstFunction
    : 'const' WS? id WS? '=' WS? '()' '=>' (statement | expr)                       # LambdaConstNoParams_Label
    | 'const' WS? id WS? '=' WS? '(' (id (',' id)*)? ')' '=>' (statement | expr)    # LambdaConstWithParams_Label
    ;

primarydata                                 
    : number                                # Number_Label
    | string                                # String_Label
    | array                                 # Array_Label
    | id                                    # Id_Label
    ;

expr
    : '(' expr ')'                          # ParenthesisExpr
    | anonymousLetFunction                  # AnonymousFunctionExpr
    | primarydata                           # PrimaryData
    | functionCall                          # FunctionCallExpr
    | arrayAccess                           # ArrayAccessExpr
    | <precedence=right> expr POW expr      # PowExpr
    | expr (MULT | DIV) expr                # MultDivExpr
    | expr (ADD | SUB) expr                 # AddSubExpr
    | expr (EQ | NEQ) expr                  # EqualityExpr
    | expr (LT | GT | LE | GE) expr         # RelationalExpr
    | expr AND expr                         # AndExpr
    | expr OR expr                          # OrExpr
    | predSymbols
    ;

functionCall
    : id '()'                                                               # FunctionCallNoParams_Label
    | id '(' expr (',' expr)* ')'                                           # FunctionCallWithParams_Label
    | id '(' expr ')' ( '(' expr ')' )*                                     # FunctionCallNested_Label    
    | predSymbols '(' expr (',' expr)* ')'                                  # PredifinedFunctionCall_Label
    ;
//functionCallWithParams
number
    : NUMBER
    ;

string
    : STRING
    ;

array
    : '[' WS? ( (primarydata | expr) WS? (',' WS? (primarydata | expr) WS? )* )? ']'
    ;

id
    : ID                                    
    ;

if
    : 'if' WS? '(' expr ')' WS?              # If_Label
    ;

then
    : 'then' WS? expr WS?                    # Then_Label
    ;

else
    : 'else' WS? expr                        # Else_Label
    ;

arrayAccess
    : id '[' (expr | arrayAccess) ']'        # ArrayAccess_Label
    ;

predSymbols
    : BOOL      # Bool_Label
    | TRUE      # True_Label
    | FALSE     # False_Label
    | NULL      # Null_Label
    | INPUT     # Input_Label
    | INT       # Int_Label
    | STR       # Str_Label
    | LIST      # List_Label
    | LEN       # Len_Label
    ;

// Definición de tokens

// Símbolos
BOOL: 'bool';
TRUE: 'true';
FALSE: 'false';
NULL: 'none';
INPUT: 'input';
INT: 'int';
STR: 'str';
LIST: 'list';
LEN: 'len';

// Datos Primarios
STRING: '"' (~["\r\n])* '"';
NUMBER: [0-9]+ ('.' [0-9]+)?;
PRINT: 'print';
ID: [a-zA-Z_][a-zA-Z_0-9]*;

// Operadores
MULT: '*';
DIV: '/';
ADD: '+';
SUB: '-';
POW: '**';

// Operadores Lógicos
AND: '&&';
OR: '||';
EQ: '==';
NEQ: '!=';
LT: '<';
GT: '>';
LE: '<=';
GE: '>=';

// Espacios
NL: '\r'? '\n' -> skip;
WS: [ \t\r\n]+ -> skip;

// Comentarios
COMMENT: '//' ~[\r\n]* -> skip;
MULTILINE_COMMENT: '/*' .*? '*/' -> skip;