parser grammar biesVMParser;

options { tokenVocab = biesVMLexer; } // Importa los tokens del lexer

// Reglas principales del parser

program
    : statement+ EOF
    ;

functionDef //para poder usar FUN y END 
    : FUN LABEL_IDENTIFIER NL
      statement+
      END LABEL_IDENTIFIER NL
    ;


statement
    : instruction NL
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


