grammar biesLanguage;

// Reglas principales del parser
program
    : (statement NL?)* EOF
    ;

functionDef //define la estructura de una funcion para poder usar FUN y END
    : FUN LABEL_IDENTIFIER NL
      statement*
      END LABEL_IDENTIFIER NL
    ;

statement
    : instruction NL?
    | functionDef
    ;

instruction //posibles instrucciones
    : loadInstr
    | arithInstr
    | controlInstr
    | funcInstr
    ;

loadInstr
    : LDV NUMBER
    | ADD
    | RET
    | HLT
    | APP
    | PRN
    | BLD NUMBER NUMBER
    | LDF LABEL_IDENTIFIER
    | INI LABEL_IDENTIFIER
    ;

arithInstr
    : ADD
    ;

controlInstr
    : RET
    | HLT
    ;

funcInstr
    : APP
    | PRN
    ;

// Instrucciones principales
LDV : 'LDV';
ADD : 'ADD';
RET : 'RET';
HLT : 'HLT';
APP : 'APP';
PRN : 'PRN';
BLD : 'BLD';
LDF : 'LDF';
INI : 'INI';

// Palabras clave para funciones
FUN : '$FUN';
END : '$END';


LABEL_IDENTIFIER : '$' [a-zA-Z][a-zA-Z0-9]*;

// Números
NUMBER : [0-9]+;

// Identificadores
ID : [a-zA-Z_][a-zA-Z_0-9]*;

// Comentarios
COMMENT : ';' ~[\r\n]* -> skip;

// Ignorar espacios en blanco
WS : [ \t\r\n]+ -> skip;

// Para manejar los saltos de línea
NL : [\r\n]+;