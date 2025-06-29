grammar biesVM;

// Reglas principales del parser
program
    : (statement NL?)* EOF // Un programa consiste en múltiples declaraciones opcionales seguidas de un fin de archivo
    ;

functionDef // Define la estructura de una función para poder usar FUN y END
    : FUN ES LABEL_IDENTIFIER (ES 'ARGS:' NUMBER)? (ES 'PARENT:' LABEL_IDENTIFIER)? NL? // Inicio de la definición de la función con un identificador de etiqueta
      (statement NL?)* // Cuerpo de la función compuesto por múltiples declaraciones opcionales
      END ES LABEL_IDENTIFIER NL? // Fin de la definición de la función con un identificador de etiqueta
    ;

statement
    : instruction // Una declaración puede ser una instrucción
    | functionDef // O una definición de función
    ;

instruction
    : loadInstr // Una instrucción puede ser una instrucción de carga
    | arithInstr // Instrucción aritmética
    | controlInstr // Instrucción de control
    | funcInstr // Instrucción de función
    | stringInstr // Instrucción de manipulación de hileras
    | comparisonInstr // Instrucción de comparación
    | logicalInst // Instrucción lógicas
    | listInstr // Instrucción para manejar la instrucción LIN
    | signInstr // Instrucción para manejar la instrucción SGN**
    | inputString // Instrucción para manejar la instrucción INO
    | stackInstr // Instrucción para manejar la instrucción SWP
    | castInstr // Instrucción para manejar la instrucción CST
    | lengthInstr // Instrucción para manejar la instrucción LEN
    | initializeInstr // Instrucción para manejar la instrucción INI
    ;

initializeInstr
    : 'INI' ES? LABEL_IDENTIFIER ES? // Instrucción de inicialización con un identificador de etiqueta
    ;

loadInstr
    : 'LDV' ES* (NUMBER | STRING | array | boolData)? ES* // Permite cargar números, cadenas y listas
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
    | 'POW' ES? // Instrucción de potencia
    ;

logicalInst
    :  'AND' ES? // Instrucción de conjunción lógica
    |  'NOT' ES? // Instrucción de negación lógica
    |  'OR' ES? // Instrucción de disyunción lógica
    |  'XOR' ES? // Instrucción de disyunción exclusiva lógica
    ;

controlInstr
    : 'RET'        // Retorno
    | 'HLT' ES?       // Parada
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
    | 'TOS' // Instrucción para convertir el valor en la cima de la pila a cadena
    ;

listInstr
    : 'LIN' (ES? (NUMBER | STRING | array))*? // SE DEBE DE REVISAR ESTA INSTRUCCIÓN.
    | 'LTK'
    | 'LNT'
    | 'LRK'
    | 'TOL'
    ;

boolData
    : 'true' // Valor booleano verdadero
    | 'false' // Valor booleano falso
    | 'none' // Valor nulo
    ;

signInstr
    : 'SGN' // Instrucción de signo
    ;

lengthInstr
    : 'LEN' // Instrucción de longitud
    ;

TYPE
    : 'number'
    | 'list'
    | 'string'
    ;

castInstr
    : 'CST' ES TYPE ES* // Instrucción de casting
    ;

array
    : '[' ES* ( (NUMBER | STRING | array) ES* (',' ES* (NUMBER | STRING | array) ES* )* )? ']' // Permitir números, cadenas y arreglos dentro de corchetes con espacios opcionales
    ;

inputString
    : 'INO' ES TYPE ES*  // Instrucción de entrada de cadena
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
LTK : 'LTK'; // Token para la instrucción LTK
CST : 'CST'; // Token para la instrucción CST
INO : 'INO'; // Token para la instrucción INO
AND : 'AND'; // Token para la instrucción AND
OR : 'OR'; // Token para la instrucción OR
XOR : 'XOR'; // Token para la instrucción XOR
NOT : 'NOT'; // Token para la instrucción NOT
SWP : 'SWP'; // Token para la instrucción SWP
LNT : 'LNT'; // Token para la instrucción LNT
LEN : 'LEN'; // Token para la instrucción LEN
POW : 'POW'; // Token para la instrucción POW

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

VALUE
    : NUMBER | STRING // Valores que se pueden usar en el casting // NUMBER | LIST | STRING
    ;

// Comentarios
COMMENT : ';' ~[\r\n]* -> skip; // Comentarios que comienzan con ';' y se omiten

// Ignorar espacios en blanco
ES : [ \t]; // Espacios en blanco y tabulaciones que se omiten

WS : [ \t\r\n]+ -> skip; // Para manejar los espacios en blanco
NL : [\r\n]+; // Saltos de línea que se omiten