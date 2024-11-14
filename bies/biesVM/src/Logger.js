/**
 * Clase `Logger` que proporciona funcionalidades para registrar mensajes en la consola.
 * Permite activar diferentes niveles de detalle en los logs a través de las propiedades `isVerbose`, `isDebug`, `isOutfile` e `isErrfile`.
 */
export class Logger {
    // Propiedad estática para mantener la única instancia de la clase
    static instance = null;

    /**
     * Crea una nueva instancia de la clase `Logger`.
     * Esta función solo se ejecuta una vez para crear la instancia.
     *
     * @param {boolean} [isVerbose=false] - Indica si se deben mostrar mensajes de registro detallados.
     * @param {boolean} [isDebug=false] - Indica si se deben mostrar mensajes de depuración.
     * @param {boolean} [isOutfile=false] - Indica si se deben registrar mensajes en un archivo de salida.
     * @param {boolean} [isErrfile=false] - Indica si se deben registrar mensajes de error en un archivo.
     */
    constructor(isVerbose = false, isDebug = false, isOutfile = false, isErrfile = false) {
        if (Logger.instance) {
            return Logger.instance; // Si ya existe una instancia, la retorna
        }

        // Configura las propiedades
        this.isVerbose = isVerbose;
        this.isDebug = isDebug;
        this.isOutfile = isOutfile;
        this.isErrfile = isErrfile;

        // Guarda la instancia en una propiedad estática
        Logger.instance = this;
    }

    /**
     * Método para actualizar la configuración del Logger.
     *
     * @param {boolean} [isVerbose] - Actualiza el valor de `isVerbose`.
     * @param {boolean} [isDebug] - Actualiza el valor de `isDebug`.
     * @param {boolean} [isOutfile] - Actualiza el valor de `isOutfile`.
     * @param {boolean} [isErrfile] - Actualiza el valor de `isErrfile`.
     */
    configure(isVerbose, isDebug, isOutfile, isErrfile) {
        this.isVerbose = isVerbose;
        this.isDebug = isDebug;
        this.isOutfile = isOutfile;
        this.isErrfile = isErrfile;
    }

    /**
     * Registra mensajes en la consola si `isVerbose` o `isDebug` están activados.
     *
     * @param {...any} args - Los mensajes o datos que se desean registrar.
     */
    log(...args) {
        if (this.isVerbose || this.isDebug) {
            console.log(...args);
        }
        // Aquí puedes añadir lógica para registrar en un archivo si `isOutfile` está activado
        if (this.isOutfile) {
            // Lógica para escribir en un archivo de salida
            // Ejemplo: fs.appendFileSync('output.log', args.join(' ') + '\n');
        }
    }

    /**
     * Registra mensajes de depuración en la consola si `isDebug` está activado.
     *
     * @param {...any} args - Los mensajes o datos de depuración que se desean registrar.
     */
    debug(...args) {
        if (this.isDebug) {
            console.debug(...args); // Usamos `console.debug` para mensajes más detallados
        }
        // Aquí puedes añadir lógica para registrar en un archivo de errores si `isErrfile` está activado
        if (this.isErrfile) {
            // Lógica para escribir en un archivo de errores
            // Ejemplo: fs.appendFileSync('error.log', args.join(' ') + '\n');
        }
    }
}
