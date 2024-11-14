grammar biesC;

// Reglas principales del parser
program
    : (statement NL?)* EOF
    ;

statement
    : printInstr
    | simpleLetInstr
    | anonymousLetFunction // Permitir funciones anónimas como statement
    | functionCall
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
    | expr AND expr                         # And_Label
    | expr OR expr                          # Or_Label
    | expr EQ expr                          # Eq_Label
    | expr NEQ expr                         # Neq_Label
    | expr LT expr                          # Lt_Label
    | expr GT expr                          # Gt_Label
    | expr LE expr                          # Le_Label
    | expr GE expr                          # Ge_Label
    | '(' expr ')'                          # Parens_Label
    ;

functionCall
    : id '()'                               # FunctionCallNoParams_Label
    | id '(' expr (',' expr)* ')'           # FunctionCallWithParams_Label
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

// Definición de tokens

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