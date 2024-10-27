grammar biesC;

// Reglas principales del parser
program
    : (statement NL?)* EOF // Un programa consiste en múltiples declaraciones opcionales seguidas de un fin de archivo
    ;

statement
    : printInstr // declaración de una instrucción de impresión
    ;

printInstr
    : 'print' '(' (STRING | NUMBER) ')' // Instrucción de impresión con una cadena de texto o un número
    ;

// Tokens
PRINT: 'print';
STRING: '"' (~["\r\n])* '"'; // Definición de cadena de texto
NUMBER: [+-]? [0-9]+ ('.' [0-9]+)? ([eE] [+-]? [0-9]+)?; // Definición de números enteros, flotantes y en notación científica, con un signo opcional al inicio
NL: '\r'? '\n' ;
WS: [ \t]+ -> skip; // Espacios en blanco