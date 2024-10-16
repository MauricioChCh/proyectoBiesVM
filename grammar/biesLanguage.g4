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
    | logicalInst // O instrucciones lógicas
    | listInstr // **Nueva regla** para manejar la instrucción LIN
    | inputString // **Nueva regla** para manejar la instrucción INO
    | stackInstr // **Nueva regla** para manejar la instrucción SWP
    ;

loadInstr
    : 'LDV' ES* (NUMBER | STRING)? ES* // Permite espacios en blanco opcionales antes y después del argumento
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
    ;

logicalInst
    :  'AND' ES? // Instrucción de negación lógica
    |  'NOT' ES? // Instrucción de conjunción lógica
    |  'OR' ES? // Instrucción de disyunción lógica
    |  'XOR' ES? // Instrucción de disyunción exclusiva lógica
    ;

controlInstr
    : 'RET'        // Retorno
    | 'HLT'        // Parada
    | 'BR' ES? NUMBER // Bifurcación incondicional con desplazamiento relativo
    | 'BT' ES? NUMBER // Bifurcación condicional sobre verdadero con desplazamiento relativo
    | 'BF' ES? NUMBER // Bifurcación condicional sobre falso con desplazamiento relativo
    | 'NOP'       // No operación
    ;


stackInstr
    : 'SWP' // Instrucción para intercambiar los dos elementos superiores de la pila
    ;

funcInstr
    : 'APP' ES? NUMBER? // Instrucción de aplicación con un número opcional de argumentos (k)
    | 'PRN' // Instrucción de impresión
    | 'INP' // Instrucción de entrada
    ;

comparisonInstr
    : 'EQ'  // Instrucción de comparación igualdad
    | 'GT'  // Instrucción de comparación mayor que
    | 'GTE' // Instrucción de comparación mayor o igual
    | 'LT'  // Instrucción de comparación menor que
    | 'LTE' // Instrucción de comparación menor o igual
    ;

stringInstr
    : 'STK' // Instrucción para seleccionar el k-ésimo elemento de la pila
    | 'SRK' // Instrucción para seleccionar el resto de la pila a partir de un índice
    | 'CAT' // Instrucción para concatenar dos cadenas
    | 'SNT' // Instrucción para verificar si una cadena está vacía
    | 'TOS' // Instruccion para convertir el valor en la cima de la pila a cadena
    ;

listInstr
    : 'LIN' (ES? (NUMBER | STRING))*? // Los parámetros son opcionales
    ;

array
    : '[' ( (NUMBER | STRING) (',' (NUMBER | STRING))* )? ']' // Acepta números o cadenas dentro de corchetes
    ;

inputString
    : 'INO' ES* (STRING)? ES*  // Permitir TYPE o STRING
    ;

// Instrucciones principales
LDV : 'LDV'; // Token para la instrucción LDV
ADD : 'ADD'; // Token para la instrucción ADD
MUL : 'MUL'; // Token para la instrucción MUL
SUB : 'SUB'; // Token para la instrucción SUB
DIV : 'DIV'; // Token para la instrucción DIV
NEG : 'NEG'; // Token para la instrucción NEG
EQ : 'ET'; // Token para la instrucción GQ
GT : 'GT'; // Token para la instrucción GT
GTE : 'GTE'; // Token para la instrucción GTE
LT : 'LT'; // Token para la instrucción LT
LTE : 'LTE'; // Token para la instrucción LTE
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
LIN : 'LIN'; // Token para la instrucción LIN
CST : 'CST'; // Token para la instrucción CST
INO : 'INO'; // Token para la instrucción INO
AND : 'AND'; // Token para la instrucción AND
OR : 'OR'; // Token para la instrucción OR
XOR : 'XOR'; // Token para la instrucción XOR
NOT : 'NOT'; // Token para la instrucción NOT
SWP : 'SWP'; // Token para la instrucción SWP

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
STRING : '"' (~["\r\n])* '"' ; // Captura correctamente las cadenas entre comillas manteniendo los espacios

TYPE
    : '"number"'
    | '"list"'
    | '"string"'
    ;

VALUE
    : NUMBER | STRING // Valores que se pueden usar en el casting // NUMBER | LIST | STRING
    ;

// Comentarios
COMMENT : ';' ~[\r\n]* -> skip; // Comentarios que comienzan con ';' y se omiten

// Ignorar espacios en blanco
ES : [ \t]; // Espacios en blanco y tabulaciones que se omiten

WS : [ \t\r\n]+ -> skip; // Para manejar los espacios en blanco
NL : [\r\n]+; // Saltos de línea que se omiten