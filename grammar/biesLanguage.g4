grammar biesLanguage;

// Reglas principales del parser
program
    : (statement NL?)* EOF // Un programa consiste en múltiples declaraciones opcionales seguidas de un fin de archivo
    ;

functionDef // Define la estructura de una función para poder usar FUN y END
    : FUN ES LABEL_IDENTIFIER NL? // Inicio de la definición de la función con un identificador de etiqueta
      (statement NL?)* // Cuerpo de la función compuesto por múltiples declaraciones opcionales
      END ES LABEL_IDENTIFIER NL? // Fin de la definición de la función con un identificador de etiqueta
    ;

statement
    : instruction // Una declaración puede ser una instrucción
    | functionDef // O una definición de función
    ;

instruction
    : loadInstr // Una instrucción puede ser una instrucción de carga
    | arithInstr // O una instrucción aritmética
    | controlInstr // O una instrucción de control
    | funcInstr // O una instrucción de función
    | stringInstr // O instrucciones de manipulación de hileras
    | comparisonInstr // O instrucciones de comparación
    | listInstr // **Nueva regla** para manejar la instrucción LIN
    ;

loadInstr
    : 'LDV' ES? (NUMBER | STRING)? ES? // Instrucción de carga de valor (número o hilera)
    | 'BLD' ES? NUMBER ES? NUMBER ES? // Instrucción de carga de bloque con dos números
    | 'BST' ES? NUMBER ES? NUMBER ES? // Instrucción de almacenamiento de bloque con dos números
    | 'LDF' ES? LABEL_IDENTIFIER ES? // Instrucción de carga de función con un identificador de etiqueta
    | 'INI' ES? LABEL_IDENTIFIER ES? // Instrucción de inicialización con un identificador de etiqueta
    ;

arithInstr
    : 'ADD' ES? // Instrucción de suma
    | 'MUL' ES? // Instrucción de multiplicación
    | 'SUB' ES? // Instrucción de resta
    | 'DIV' ES? // Instrucción de división
    | 'NEG' ES? // Instrucción de negación
    | 'SQRT' ES? // Instrucción de raíz cuadrada
    | 'POW' ES? // Instrucción de potencia
    ;

controlInstr
    : 'RET' // Instrucción de retorno
    | 'HLT' // Instrucción de parada
    | 'BR' ES? NUMBER // Instrucción de salto incondicional
    | 'BT' ES? NUMBER // Instrucción de salto si verdadero
    | 'BF' ES? NUMBER // Instrucción de salto si falso
    | 'NOP' // Instrucción de no operación
    ;

funcInstr
    : 'APP' ES? NUMBER? // Instrucción de aplicación con un número opcional de argumentos (k)
    | 'PRN' // Instrucción de impresión
    | 'INP' // Instrucción de entrada
    ;

comparisonInstr
    : 'GTE' // Instrucción de comparación mayor o igual
    ;

stringInstr
    : 'STK' ES? NUMBER // Instrucción para seleccionar el k-ésimo elemento de la pila
    | 'SRK' ES? NUMBER // Instrucción para seleccionar el resto de la pila a partir de un índice
    ;

listInstr
    : 'LIN' (ES? (NUMBER | STRING))*? // Los parámetros son opcionales
    ;

array
    : '[' ( (NUMBER | STRING) (',' (NUMBER | STRING))* )? ']' // Acepta números o cadenas dentro de corchetes
    ;

// Instrucciones principales
LDV : 'LDV'; // Token para la instrucción LDV
ADD : 'ADD'; // Token para la instrucción ADD
MUL : 'MUL'; // Token para la instrucción MUL
SUB : 'SUB'; // Token para la instrucción SUB
DIV : 'DIV'; // Token para la instrucción DIV
NEG : 'NEG'; // Token para la instrucción NEG
SQRT : 'SQRT'; // Token para la instrucción de raíz cuadrada
POW : 'POW'; // Token para la instrucción de potencia
GTE : 'GTE'; // Token para la instrucción GTE
RET : 'RET'; // Token para la instrucción RET
HLT : 'HLT'; // Token para la instrucción HLT
APP : 'APP'; // Token para la instrucción APP
PRN : 'PRN'; // Token para la instrucción PRN
BLD : 'BLD'; // Token para la instrucción BLD
BST : 'BST'; // Token para la instrucción BST
LDF : 'LDF'; // Token para la instrucción LDF
INI : 'INI'; // Token para la instrucción INI
STK : 'STK'; // Token para la instrucción STK
SRK : 'SRK'; // Token para la instrucción SRK
LIN : 'LIN'; // **Nuevo Token** para la instrucción LIN

// Palabras clave para funciones
FUN : '$FUN'; // Token para el inicio de una función
END : '$END'; // Token para el fin de una función

LABEL_IDENTIFIER : '$' [a-zA-Z0-9]*; // Identificador de etiqueta que comienza con '$' seguido de letras o números

NUMBER
    : [+-]? [0-9]+ ('.' [0-9]+)? ([eE] [+-]? [0-9]+)? // Token para números enteros, flotantes y en notación científica, con un signo opcional al inicio
    ;

// Identificadores
ID : [a-zA-Z_][a-zA-Z_0-9]*; // Identificadores que comienzan con una letra o guion bajo, seguidos de letras, números o guiones bajos

// Literales de hileras
STRING : '"' .*? '"'; // Token para hileras entre comillas dobles

// Comentarios
COMMENT : ';' ~[\r\n]* -> skip; // Comentarios que comienzan con ';' y se omiten

// Ignorar espacios en blanco
ES : [ \t]; // Espacios en blanco y tabulaciones que se omiten

WS : [ \t\r\n]+ -> skip; // Para manejar los espacios en blanco
NL : [\r\n]+; // Saltos de línea que se omiten