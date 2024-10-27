grammar biesC;

// Reglas principales del parser
program
    : (statement NL?)* EOF // Un programa consiste en múltiples declaraciones opcionales seguidas de un fin de archivo
    ;

statement
    : printInstr // declaración de una instrucción de impresión
    ;

printInstr
    : 'print' '(' (STRING | NUMBER | array) ')' // Instrucción de impresión con una cadena de texto, un número o un array
    ;

array
    : '[' ES* ( (NUMBER | STRING | array) ES* (',' ES* (NUMBER | STRING | array) ES* )* )? ']' // Permitir números, cadenas y arreglos dentro de corchetes con espacios opcionales
    ;

// Tokens
PRINT: 'print';
STRING: '"' (~["\r\n])* '"'; // Definición de cadena de texto
NUMBER: [+-]? [0-9]+ ('.' [0-9]+)? ([eE] [+-]? [0-9]+)?; // Definición de números enteros, flotantes y en notación científica, con un signo opcional al inicio
NL: '\r'? '\n' ;
// Ignorar espacios en blanco
ES : [ \t]; // Espacios en blanco y tabulaciones que se omiten

WS : [ \t\r\n]+ -> skip; // Para manejar los espacios en blanco