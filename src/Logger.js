export class Logger {
    constructor(isVerbose = false, isDebug = false) {
        this.isVerbose = isVerbose;
        this.isDebug = isDebug;
    }

    log(...args) {
        if (this.isVerbose || this.isDebug) {
            console.log(...args);
        }
    }

    debug(...args) {
        if (this.isDebug) {
            console.debug(...args); // Usamos `console.debug` para mensajes más detallados
        }
    }
}