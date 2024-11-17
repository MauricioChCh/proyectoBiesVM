# Proyecto BiesVM

## Autores

Este proyecto ha sido posible gracias al esfuerzo y colaboración de varios individuos. Aquí te presentamos a los autores:

- **Joshua Yarit Amador Lara**
  
- **Mauricio Chaves Chaves**

- **Fabiola Rojas Alvarado**

- **Eddy Villarreal Muñoz**


**BiesVM** es un proyecto construido sobre la base de un lenguaje personalizado interpretado con ANTLR. La máquina virtual creada permite ejecutar instrucciones en archivos `.basm`, dando vida a un sistema único que simula comportamientos diversos en el mundo de Bies. Aquí te mostramos cómo instalar y ejecutar el proyecto en distintos sistemas operativos.



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

# Uso General
Una vez completado el proceso de build, ya sea mediante los scripts build.bat (Windows) o build.sh (Linux/Mac), o utilizando el comando para generar el enlace simbólico, tendrás acceso al comando biesVM. Este comando facilita el uso de la aplicación, permitiéndote ejecutar archivos BASM de forma más sencilla.

# Instalación Global
Para hacer que `biesVM` esté disponible globalmente en tu sistema, ejecuta:

    ```bash
        npm link
    ```

Esto creará un enlace simbólico, permitiéndote usar biesVM desde cualquier ubicación en tu terminal.

# Uso de `biesVM`
El comando biesVM es la interfaz principal para ejecutar archivos BASM. Su sintaxis básica es:

    ```bash
    biesVM <archivo> [opciones]
    ```
# Argumentos

- <archivo>: Ruta al archivo BASM que deseas ejecutar. Este argumento es obligatorio.

Opciones

- -h, --help: Muestra el manual de ayuda.
- -V, --version: Muestra la versión actual de biesVM.
- -v, --verbose: Activa el modo verbose para obtener información detallada durante la ejecución.
- -d, --detail: Activa el modo detallado, proporcionando aún más información sobre la ejecución.

# Ejemplos de Uso

- Ejecutar un archivo BASM:
bashCopybiesVM ruta/al/archivo.basm

E- jecutar en modo verbose:
bashCopybiesVM  ruta/al/archivo.basm -v

Ejecutar en modo detallado:
bashCopybiesVM  ruta/al/archivo.basm -d

Ver la ayuda:
bashCopybiesVM -h

Ver la version:
bashCopybiesVM -V


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
npm run run:linux
```

## run:windows

Con este se ejecuta el build.bat para el sistema operativo windows

```cmd
npm run:windows
```


### Uso de Inteligencia Artificial
En el desarrollo de este proyecto, hemos utilizado varias herramientas de inteligencia artificial como apoyo en nuestro proceso de desarrollo. Estas herramientas nos han ayudado a mejorar la calidad del código, entender conceptos complejos y optimizar ciertas partes del proyecto. Específicamente, hemos utilizado:

- GitHub Copilot: Para sugerencias de código y autocompletado inteligente durante la programación.
- ChatGPT: Para obtener explicaciones sobre conceptos complejos y generar ideas para la resolución de problemas.
- Claude: Para recomendaciones de diseño, simplificaciones de código y ayuda en la comprensión de ANTLR4.

Es importante señalar que, si bien estas herramientas han sido de gran ayuda, todo el código y las decisiones finales han sido revisados y aprobados por nuestro equipo de desarrollo. Las IA se han utilizado como herramientas de apoyo, no como sustitutos del pensamiento crítico y la experiencia de nuestros desarrolladores.
