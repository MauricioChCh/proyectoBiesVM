/**
 * Clase `Logger` que proporciona funcionalidades para registrar mensajes en la consola.
 * Permite activar diferentes niveles de detalle en los logs a través de las propiedades `isVerbose` y `isDebug`.
 * 
 * @class
 * 
 * @author Joshua Yarit Amador Lara
 * @author Mauricio Chaves Chaves
 * @author Fabiola Rojas Alvarado
 * @author Eddy Villarreal Muñoz
 * 
 * @version 1.0.0
 * @since 2024-10-15
 * @license ISC
 * 
 */
export class Logger {
    /**
     * Crea una nueva instancia de la clase `Logger`.
     *
     * @param {boolean} [isVerbose=false] - Indica si se deben mostrar mensajes de registro detallados.
     * @param {boolean} [isDebug=false] - Indica si se deben mostrar mensajes de depuración.
     */
    constructor(isVerbose = false, isDebug = false) {
        /**
         * @property {boolean} isVerbose - Determina si el modo verbose está activado.
        */
        this.isVerbose = isVerbose;
        
        /**
         * @property {boolean} isDebug - Determina si el modo debug está activado.
        */
        this.isDebug = isDebug;
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
    }
}