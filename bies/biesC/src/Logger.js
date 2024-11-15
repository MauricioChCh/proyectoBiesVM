import fs from 'fs';
import path from 'path';

/**
 * Clase `Logger` que proporciona funcionalidades para registrar mensajes en la consola.
 * Permite activar diferentes niveles de detalle en los logs a través de las propiedades `isVerbose`, `isDebug`, `isOutfile` e `isErrfile`.
 */
class Logger {
    

    /**
     * Crea una nueva instancia de la clase `Logger`.
     * Esta función solo se ejecuta una vez para crear la instancia.
     *
     * @param {boolean} [isVerbose=false] - Indica si se deben mostrar mensajes de registro detallados.
     * @param {boolean} [isDebug=false] - Indica si se deben mostrar mensajes de depuración.
     * @param {boolean} [isOutfile=false] - Indica si se deben registrar mensajes en un archivo de salida.
     * @param {boolean} [isErrfile=false] - Indica si se deben registrar mensajes de error en un archivo.
     */
    constructor() {
        if (!Logger.instance) {
            // Configura las propiedades
            this.isVerbose = false;
            this.isDebug = false;
            this.isOutfile = false;
            this.isErrfile = false;
            this.outfile = null;
            this.errfile = null;
            this.outStream = null;
            this.errStream = null;

            // Guarda la instancia en una propiedad estática
            Logger.instance = this;

        }
        return Logger.instance; // Si ya existe una instancia, la retorna

        
    }

    /**
     * Método para actualizar la configuración del Logger.
     *
     * @param {boolean} [isVerbose] - Actualiza el valor de `isVerbose`.
     * @param {boolean} [isDebug] - Actualiza el valor de `isDebug`.
     * @param {boolean} [isOutfile] - Actualiza el valor de `isOutfile`.
     * @param {boolean} [isErrfile] - Actualiza el valor de `isErrfile`.
     */
    configure(isVerbose, isDebug, outfile, errfile) {
        this.isVerbose = isVerbose;
        this.isDebug = isDebug;

        if (outfile) {
            this.outfile = outfile;
            this.outStream = fs.createWriteStream(outfile, { flags: 'a' });
            this.isOutfile = true; // Marca que se está usando un archivo de salida
        }
    
        // Configura el archivo de errores si se proporciona
        if (errfile) {
            this.errfile = errfile;
            this.errStream = fs.createWriteStream(errfile, { flags: 'a' });
            this.isErrfile = true; // Marca que se está usando un archivo de errores
        }

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
        
        if (this.isOutfile) {
            
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
       
        if (this.isErrfile) {
            
        }
    }

    out(message) {
        if (this.outStream) {
            this.outStream.write(`${message}\n`);
        }
    }

    err(message) {
        if (this.errStream) {
            this.errStream.write(`${message}\n`);
        }
    }

    getVerbose() {
        return this.isVerbose;
    }

    getDebug() {
        return this.isDebug;
    }

    getisOutfile() {
        return this.isOutfile;
    }

    getisErrfile() {
        return this.isErrfile;
    }

    getOutfile(){
        return this.outfile;
    }

    getErrfile(){
        return this.errfile;
    }



    
}

const instance = new Logger();

export { instance as Logger };
