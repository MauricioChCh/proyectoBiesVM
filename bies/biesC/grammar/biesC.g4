grammar biesC;

// Reglas principales del parser
program
    : (statement NL?)* EOF
    ;

statement
    : printInstr
    | simpleLetInstr
    | anonymousLetFunction
    | functionCall
    | letInExpr
    | ifElseExpr
    ;

printInstr
    : 'print' '(' (primarydata | expr) ')'  # PrintInstr_Label
    ;

simpleLetInstr
    : 'let' WS? id WS? '=' WS? expr         # SimpleLetInstr_Label
    ;

anonymousLetFunction
    : 'let' WS? id WS? '=' WS? '()' '=>' (statement | expr)                       # LambdaNoParams_Label
    | 'let' WS? id WS? '=' WS? '(' (id (',' id)*)? ')' '=>' (statement | expr)    # LambdaWithParams_Label
    | 'let' WS? id WS? '=' WS? id (WS? '=>' WS? id)* WS? '=>' (statement | expr)  # NestedLambda_Label
    ;

letInExpr
    : 'let' '{' (declaration (NL | WS)*)* '}' 'in' (statement | '{' (statement (NL | WS)*)* '}')
    ;

ifElseExpr
    : if WS? '(' expr ')' WS? then WS? expr WS? else WS? expr  # IfElseExpr_Label
    ;

declaration
    : simpleLetInstr
    | simpleConstInstr
    | anonymousConstFunction
    | anonymousLetFunction
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
    : anonymousLetFunction                  # AnonymousFunctionExpr_Label
    | primarydata                           # PrimaryData_Label
    | functionCall                          # FunctionCallExpr_Label
    | expr MULT expr                        # Mul_Label
    | expr DIV expr                         # Div_Label
    | expr ADD expr                         # Add_Label
    | expr SUB expr                         # Sub_Label
    | expr POW expr                         # Pow_Label
    | expr AND expr                         # And_Label
    | expr OR expr                          # Or_Label
    | expr EQ expr                          # Eq_Label
    | expr NEQ expr                         # Neq_Label
    | expr LT expr                          # Lt_Label
    | expr GT expr                          # Gt_Label
    | expr LE expr                          # Le_Label
    | expr GE expr                          # Ge_Label
    | '(' expr ')'                          # Exp_Label
    ;

functionCall
    : id '()'                                                               # FunctionCallNoParams_Label
    | id '(' expr (',' expr)* ')' ( '(' expr (',' expr)* ')' )*             # FunctionCallWithParams_Label
    | predSymbols '(' expr (',' expr)* ')'                                  # PredifinedFunctionCall_Label
    ;

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
    : 'if'                                   # If_Label
    ;
else
    : 'else'                                 # Else_Label
    ;
then
    : 'then'                                 # Then_Label
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
NULL: 'null';
INPUT: 'input';
INT: 'int';
STR: 'str';
LIST: 'list';
LEN: 'len';

// Datos Primarios
STRING: '"' (~["\r\n])* '"';
NUMBER: [+-]? [0-9]+ ('.' [0-9]+)? ([eE] [+-]? [0-9]+)?;
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