# BiesVM - Máquina Virtual para el Lenguaje BIES

## Descripción
BiesVM es una máquina virtual diseñada para ejecutar código compilado `.basm` generado por el compilador BiesC. Esta máquina virtual interpreta y ejecuta instrucciones específicas del lenguaje BIES, proporcionando un entorno de ejecución robusto y eficiente.

## Requisitos Previos
- Node.js (versión 14 o superior)
- Dependencias NPM:
  - `antlr4` (versión 4.13.1)
  - `chalk`
  - `commander`

## Instalación

### Windows

1. Ejecuta el script de construcción:
```bash
build.bat
```

### Linux/MacOS

1. Dale permisos de ejecución al script:
```bash
chmod +x build.sh
```

3. Ejecuta el script:
```bash
./build.sh
```

### Instalación Global
Para hacer disponible `biesVM` globalmente:
Igualmente esto lo hara automaticamente los builds.
```bash
npm link
```

## Uso de BiesVM

### Sintaxis Básica
```bash
biesvm <archivo.basm> [opciones]
```

### Opciones Disponibles
| Opción | Descripción |
|--------|-------------|
| `-v, --verbose` | Activa el modo verbose para ver el proceso de ejecución detallado |
| `-d, --detail` | Muestra información detallada sobre el proceso de parseo |
| `-h, --help` | Muestra la ayuda con todas las opciones disponibles |
| `-V, --version` | Muestra la versión actual de BiesVM (1.1.0) |

### Ejemplos de Uso
```bash
biesvm programa.basm              # Ejecuta un archivo BASM
biesvm programa.basm --verbose    # Ejecuta con salida detallada
biesvm programa.basm --detail     # Muestra detalles del proceso
biesvm -h                         # Muestra la ayuda
```

## Estructura del Proyecto
```
biesVM/
├── 📁 basm/             # Archivos de prueba BASM
├── 📁 command/          # Clases command para el manejo de la VM
├── 📁 grammar/          # Definición de gramática ANTLR4
├── 📁 lib/              # Bibliotecas y dependencias
├── 📁 output/           # Archivos generados por ANTLR4
└── 📁 src/              # Código fuente de la máquina virtual
```

## Scripts Disponibles

### Scripts NPM
```bash
npm test               # Ejecuta las pruebas
npm run run:linux      # Ejecuta build.sh en Linux (incluye pruebas)
npm run run:windows    # Ejecuta build.bat en Windows (incluye pruebas)
```

### Compilación Manual
Si prefieres compilar manualmente:
```bash
# Generar Lexer y Parser
antlr4 -Dlanguage=JavaScript -o ./output grammar/biesLanguage.g4

# Ejecutar un archivo BASM
node src/biesVM.js ./battery/archivo.basm
```



### Uso de Inteligencia Artificial
En el desarrollo de este proyecto, hemos utilizado varias herramientas de inteligencia artificial como apoyo en nuestro proceso de desarrollo. Estas herramientas nos han ayudado a mejorar la calidad del código, entender conceptos complejos y optimizar ciertas partes del proyecto. Específicamente, hemos utilizado:

- GitHub Copilot: Para sugerencias de código y autocompletado inteligente durante la programación.
- ChatGPT: Para obtener explicaciones sobre conceptos complejos y generar ideas para la resolución de problemas.
- Claude: Para recomendaciones de diseño, simplificaciones de código y ayuda en la comprensión de ANTLR4.

Es importante señalar que, si bien estas herramientas han sido de gran ayuda, todo el código y las decisiones finales han sido revisados y aprobados por nuestro equipo de desarrollo. Las IA se han utilizado como herramientas de apoyo, no como sustitutos del pensamiento crítico y la experiencia de nuestros desarrolladores.

## Autores

Este proyecto ha sido posible gracias al esfuerzo y colaboración de varios individuos. Aquí te presentamos a los autores:
- Joshua Yarit Amador Lara
- Mauricio Chaves Chaves `[Coordinador]`
- Fabiola Rojas Alvarado
- Eddy Villarreal Muñoz

