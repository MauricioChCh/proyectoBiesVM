# Proyecto Bies

Este proyecto implementa un entorno de desarrollo completo para el lenguaje Bies, consistiendo en tres componentes principales que trabajan en conjunto. Cada componente tiene su propio README detallado con información específica de implementación y uso.
# Lenguaje BIES
BIES es un lenguaje funcional con las siguientes características principales:

- Archivos fuente en formato .bies (codificación UTF-8)
- Sintaxis inspirada en JavaScript con elementos funcionales
- Sistema de tipos dinámico
- Sensible a mayúsculas/minúsculas

## Componentes

### BiesC (Compilador)
Compilador que traduce código Bies a código bytecode de máquina virtual `.basm`. El compilador está diseñado para trabajar automáticamente con BiesVM, estableciendo una conexión directa para la ejecución del código compilado. [Documentación completa](bies/biesC/README.md)

**Características principales:**
- Compilación de código Bies a bytecode `.basm`
- Integración automática con BiesVM
- Uso de programación funcional declarativa

### BiesVM (Máquina Virtual)
Máquina virtual que ejecuta el bytecode generado por BiesC. Es el componente central para la ejecución de programas Bies. [Documentación completa](bies/biesVM/README.md)

**Características principales:**
- Ejecución de bytecode Bies
- Gestión de memoria
- Sistema de tipos dinámico


### Bies-Support (Extensión VS Code)
Extensión para Visual Studio Code que proporciona soporte completo para el desarrollo en Bies. [Documentación completa](bies-support/README.md)

**Características principales:**
- Resaltado de sintaxis
- Snippets predefinidos


## Construcción del Proyecto

### Requisitos Previos
- Node.js y npm instalados
- Java Runtime Environment (JRE) para ANTLR4
- Visual Studio Code (para la extensión)

### Scripts de Construcción

El proyecto incluye scripts de construcción tanto para Linux/Mac como para Windows:

```bash
# Linux/Mac
chmod +x build.sh           # Dar permisos de ejecución al script
./build.sh [opción]        # Ejecutar el script con la opción deseada

# Windows
build.bat [opción]         # Ejecutar el script con la opción deseada
```

### Opciones de Construcción

| Opción | Descripción |
|--------|-------------|
| `--all` | Construye todos los componentes en el orden correcto: VM, Compilador y Extensión |
| `--compiler` | Construye solo el compilador BiesC |
| `--vm` | Construye solo la máquina virtual BiesVM |
| `--support` | Construye solo la extensión VS Code |
| `--help` | Muestra la ayuda con todas las opciones disponibles |

## Enlaces Disponibles Después de la Construcción

Una vez construidos los componentes, tendrás disponibles los siguientes comandos con sus respectivas opciones:

### BiesVM (Máquina Virtual)

```bash
biesvm <archivo.basm> [opciones]
```

| Opción | Descripción |
|--------|-------------|
| `-v, --verbose` | Activa el modo verbose para ver el proceso de ejecución detallado |
| `-d, --detail` | Muestra información detallada sobre el proceso de parseo |
| `-h, --help` | Muestra la ayuda con todas las opciones disponibles |
| `-V, --version` | Muestra la versión actual de BiesVM (1.1.0) |

Ejemplos:
```bash
biesvm programa.basm              # Ejecuta un archivo BASM
biesvm programa.basm --verbose    # Ejecuta con salida detallada
biesvm -h                        # Muestra la ayuda
```

### BiesC (Compilador)

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

Notas importantes:
- Los archivos de salida (`-o`) y error (`-e`) se crearán si no existen
- Si el archivo ya existe, se sobrescribirá
- El modo verbose (`-v`) y detallado (`-d`) pueden combinarse para obtener información más completa
- Para más detalles sobre el funcionamiento interno y ejemplos avanzados, consulta los README específicos de cada componente

## Documentación Detallada

Para información más específica sobre cada componente, incluyendo:
- Guías de instalación detalladas
- Ejemplos de uso
- Referencia de API
- Guías de contribución

Consulta los README individuales de cada componente:
- [Documentación de BiesC](bies/biesC/README.md)
- [Documentación de BiesVM](bies/biesVM/README.md)
- [Documentación de Bies-Support](bies-support/README.md)

## Uso de IA 
En el desarrollo de este proyecto, hemos utilizado varias herramientas de inteligencia artificial como apoyo en nuestro proceso de desarrollo. Estas herramientas nos han ayudado a mejorar la calidad del código, entender conceptos complejos y optimizar ciertas partes del proyecto. Específicamente, hemos utilizado:

- GitHub Copilot: Para sugerencias de código y autocompletado inteligente durante la programación.
- ChatGPT: Para obtener explicaciones sobre conceptos complejos y generar ideas para la resolución de problemas.
- Claude: Para recomendaciones de diseño, simplificaciones de código y ayuda en la comprensión de ANTLR4.

Es importante señalar que, si bien estas herramientas han sido de gran ayuda, todo el código y las decisiones finales han sido revisados y aprobados por nuestro equipo de desarrollo. Las IA se han utilizado como herramientas de apoyo, no como sustitutos del pensamiento crítico y la experiencia de nuestros desarrolladores.

## Autores
Creado por: 
- Joshua Yarit Amador Lara
- Mauricio Chaves Chaves `[Coordinador]`
- Fabiola Rojas Alvarado
- Eddy Villarreal Muñoz

