# BiesC - Compilador para el Lenguaje BIES

## Descripción
BiesC es un compilador para el lenguaje de programación BIES con archivos `.bies`, un lenguaje funcional que genera código para la máquina virtual BIESVM en archivos `.basm`. BIES permite expresiones funcionales, operaciones aritméticas, lógicas, manejo de cadenas y listas, con una sintaxis similar a JavaScript pero con características propias.

## Características Principales
- Lenguaje funcional con tipado dinámico
- Soporte para expresiones aritméticas, lógicas, strings y listas
- Sistema de scoping léxico
- Declaraciones `let`, `fun`, y `let-in`
- Operadores similares a JavaScript
- Símbolos predefinidos inspirados en Python
- Comentarios estilo C
- Codificación UTF-8

## Instalación
### Requisitos
- **Node.js** (>= 14)
- **ANTLR** (versión utilizada: 4.13.1)
- Dependencias:
  - `antlr4`
  - `chalk`
  - `commander`

### Uso en Windows

1. Abre una terminal de comandos (CMD).
2. Navega hasta el directorio del proyecto.
3. Ejecuta el archivo `build.bat`:
    ```bash
    build.bat
    ```
Este script compila el código fuente y ejecuta un archivo `.basm`.

### Uso en Linux/Mac

1. Abre una terminal.
2. Navega hasta el directorio del proyecto.
3. Haz el script ejecutable (solo la primera vez):

    ```bash
    chmod +x build.sh
    ```

4. Ejecuta el script:

    ```bash
    ./build.sh
    ```

### Comprobacion de instalación
Puedes verificar que la instalacion se concreto probando:
```bash
biesC --version
```
Deberías ver la versión actual de BiesC (1.1.0)


### Comandos de Compilación
```bash
biesc <archivo.bies> [opciones]
```

| Opción | Descripción |
|--------|-------------|
| `-v, --verbose` | Activa el modo verbose para ver el proceso de compilación detallado |
| `-d, --detail` | Muestra información detallada sobre el proceso de parseo |
| `-o, --outfile <archivo>` | Redirige la salida estándar (print/sysout) a un archivo `.basm`|
| `-e, --errFile <archivo>` | Redirige la salida de errores (syserr) a un archivo `.txt` |
| `-h, --help` | Muestra la ayuda con todas las opciones disponibles |
| `-V, --version` | Muestra la versión actual de BiesC (1.1.0) |

Ejemplos:
```bash
biesc programa.bies                            # Compila un archivo BIES
biesc programa.bies --verbose                  # Compila con salida detallada
biesc programa.bies -o salida.basm             # Redirige la salida a un archivo
biesc programa.bies -e errores.txt            # Redirige los errores a un archivo
biesc programa.bies -o salida.basm -e err.txt  # Redirige ambas salidas
biesc -h                                      # Muestra la ayuda
```

## Estructura del Proyecto
```
biesC/
├──📁 battery/           # Casos de prueba
├──📁 grammar/           # Gramática ANTLR4
├──📁 lib/              # Bibliotecas necesarias
├──📁 output/           # Archivos generados por ANTLR$
├──📁 src/              # Código fuente
│   ├──📁 Compiler/     # Núcleo del compilador
└──📁 test/         # Pruebas unitarias
```

## Uso del Compilador

### Sintaxis Básica
```javascript
// Declaraciones
const x = 10
const y = 20


// Expresiones let-in
let max = (x, y) => if (x > y) then x else y
let {
	const x = 10
	const y = 20
} in {
	print("*** Testing max("+ x + " ," + y + ") ***")
	print(max(x, y))
}

// Listas
let lista = [1, 2, [3, 4]]

// Operaciones con strings
const mensaje = "Hola " + "Mundo"
```


## Símbolos Predefinidos
- `print`: Imprime en consola
- `input`: Lee entrada del usuario
- `len`: Retorna longitud

## Operadores
- Aritméticos: `**`, `*`, `/`, `+`, `-`
- Lógicos: `!`, `&&`, `||`
- Relacionales: `==`, `!=`, `>`, `>=`, `<`, `<=`

## Ejemplos

### Manejo de Listas
```javascript
const lista = [1, 2, 3]
print(len(lista))     // Imprime: 3
```

### Scope y Let-in
```javascript
let {
    const x = 10
    const y = 20
} in {
    print(x + y)      // Imprime: 30
}
```

## Autores
Creado por: 
- Joshua Yarit Amador Lara
- Mauricio Chaves Chaves `[Coordinador]`
- Fabiola Rojas Alvarado
- Eddy Villarreal Muñoz
