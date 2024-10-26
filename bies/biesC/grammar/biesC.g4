grammar biesC;

// Reglas principales del parser
program
    : (statement NL?)* EOF // Un programa consiste en múltiples declaraciones opcionales seguidas de un fin de archivo
    ;

statement
    : printInstr // declaración de una instrucción de impresión
    ;

printInstr
    : 'print' '(' STRING ')' // Instrucción de impresión con una cadena de texto
    ;

// Tokens
PRINT: 'print';
STRING: '"' (~["\r\n])* '"'; // Definición de cadena de texto
NL: '\r'? '\n' ;
WS: [ \t]+ -> skip; // Espacios en blanco