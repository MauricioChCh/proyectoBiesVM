grammar biesLanguage;

// Reglas principales del parser
program
    : statement+ EOF
    ;

functionDef //para poder usar FUN y END
    : FUN LABEL_IDENTIFIER NL
      statement*
      END LABEL_IDENTIFIER NL
    ;

statement
    : instruction NL
    | functionDef
    ;

instruction
    : loadInstr
    | arithInstr
    | controlInstr
    | funcInstr
    ;

loadInstr
    : LDV NUMBER
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