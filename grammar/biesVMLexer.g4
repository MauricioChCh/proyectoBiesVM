lexer grammar biesVMLexer;


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
NL: [\r\n]+;

