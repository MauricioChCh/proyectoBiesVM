import chalk from 'chalk';
import fs from 'fs';


/**
 * Clase `Logger` que proporciona funcionalidades para registrar mensajes en la consola.
 * Permite activar diferentes niveles de detalle en los logs a través de las propiedades `isVerbose`, `isDebug`, `isOutfile` e `isErrfile`.
 * 
 * @class Logger
 * @file Logger.js
 * @singleton
 * @version 1.0.0
 * 
 * @author Joshua Yarit Amador Lara
 * @author Mauricio Chaves Chaves [Coordinador]
 * @author Fabiola Rojas Alvarado
 * @author Eddy Villarreal Muñoz
 * 
 * @requires chalk
 * @requires fs
 * 
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
     * @param {string} [outfile=null] - La ruta del archivo de salida.
     * @param {string} [errfile=null] - La ruta del archivo de errores.
     * @param {fs.WriteStream} [outStream=null] - El flujo de escritura para el archivo de salida.
     * @param {fs.WriteStream} [errStream=null] - El flujo de escritura para el archivo de errores.
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

    /**
     * Registra mensajes de error en la consola y en un archivo si `isErrfile` está activado.
     * @param  {...any} args Los mensajes o datos de error que se desean registrar.
     */
    err(...args) {
        const message = args.join(' ');
        console.error(chalk.red(...args));
        if (this.errStream) {
            this.errStream.write(`${message}\n`);
        }
    }
 
    /** 
     * Obtiene el valor de `isVerbose`.
     * @returns {boolean} `true` si `isVerbose` está activado, `false` en caso contrario.
    */
    getVerbose() {
        return this.isVerbose;
    }

    /** 
     * Obtiene el valor de `isDebug`.
     * @returns {boolean} `true` si `isDebug` está activado, `false` en caso contrario.
    */
    getDebug() {
        return this.isDebug;
    }

    /** 
     * Obtiene el valor de `isOutfile`.
     * @returns {boolean} `true` si `isOutfile` está activado, `false` en caso contrario.
    */
    getisOutfile() {
        return this.isOutfile;
    }

    /** 
     * Obtiene el valor de `isErrfile`.
     * @returns {boolean} `true` si `isErrfile` está activado, `false` en caso contrario.
    */
    getisErrfile() {
        return this.isErrfile;
    }

    /**
     * Obtiene la ruta del archivo de salida.
     * @returns {string} La ruta del archivo de salida.
     */
    getOutfile(){
        return this.outfile;
    }

    /**
     * Obtiene la ruta del archivo de errores.
     * @returns {string} La ruta del archivo de errores.
     */
    getErrfile(){
        return this.errfile;
    }



    
}

const instance = new Logger();

export { instance as Logger };
