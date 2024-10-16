# Proyecto BiesVM

**BiesVM** es un proyecto construido sobre la base de un lenguaje personalizado interpretado con ANTLR. La máquina virtual creada permite ejecutar instrucciones en archivos `.basm`, dando vida a un sistema único que simula comportamientos diversos en el mundo de Bies. Aquí te mostramos cómo instalar y ejecutar el proyecto en distintos sistemas operativos.

## Autores

Este proyecto ha sido posible gracias al esfuerzo y colaboración de varios individuos. Aquí te presentamos a los autores:

- **Joshua Yarit Amador Lara**
  
- **Mauricio Chaves Chaves**

- **Fabiola Rojas Alvarado**

- **Eddy Villarreal Muñoz**


## Requisitos

- **Node.js** (>= 14)
- **ANTLR** (versión utilizada: 4.13.1)
- Dependencias:
  - `antlr4`
  - `chalk`
  - `commander`

## Uso en Windows

1. Abre una terminal de comandos (CMD).
2. Navega hasta el directorio del proyecto.
3. Ejecuta el archivo `build.bat`:

    ```bash
    build.bat
    ```

Este script compila el código fuente y ejecuta un archivo `.basm`.

## Uso en Linux/Mac

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

Este script también compila el código fuente y ejecuta un archivo `.basm`.

## Descripción de los Scripts

### build.bat (Windows)

Este script realiza las siguientes tareas:
- Ejecuta el comando de Node.js para interpretar el archivo `.basm`.
- Utiliza las dependencias instaladas en el proyecto.

### build.sh (Linux/Mac)

Realiza las mismas tareas que el script de Windows, pero está adaptado para sistemas Unix-like.

## Ejecución Manual

Si prefieres ejecutar los comandos manualmente, sigue estos pasos:

1. Genera el Lexer y Parser de ANTLR:

    ```bash
    antlr4 -Dlanguage=JavaScript -o ./output grammar/biesLanguage.g4
    ```

2. Ejecuta la máquina virtual de Bies con un archivo `.basm`:

    ```bash
    node src/biesVM.js ./battery/archivo.basm
    ```

## Compilar y Ejecutar

- **Compilar el proyecto**: Genera los archivos necesarios de ANTLR y prepara el entorno para la ejecución:

    ```bash
    antlr4 -Dlanguage=JavaScript -o ./output grammar/biesLanguage.g4
    ```

- **Ejecutar un archivo `.basm`**:

    ```bash
    node src/biesVM.js ./battery/archivo.basm
    ```

## Tests

Puedes ejecutar las pruebas con:

```bash
npm test
```
## Linker

Puedes hacer un link a biesVM con:

```bash
npm link
```

## run:linux

Con este se ejecuta el build.sh para el sistema operativo linux

```bash
npm run:linux
```

## run:windows

Con este se ejecuta el build.bat para el sistema operativo windows

```cmd
npm run:windows
```