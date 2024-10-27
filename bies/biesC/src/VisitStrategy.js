/**
 * Clase que representa la estrategia de visita del AST.
 */
class VisitStrategy {
    /**
     * Estrategias de visita.
     * @type {Object}
     */
    static strategies = {
        // Estrategia por defecto (post-order: izquierdo -> derecho -> raíz)
        default: {
            rightFirst: false,
            getVisitOrder: (ctx) => ({
                left: () => null,
                right: () => null,
                root: () => ctx.constructor.name
            })
        },
        // Estrategia especial para printInstr (derecho -> izquierdo -> raíz)
        printInstr: {
            rightFirst: true,
            getVisitOrder: (ctx) => ({
                right: () => ctx.STRING() ? ctx.STRING().getText() : ctx.NUMBER().getText(),
                left: () => 'print',
                root: () => 'printInstr'
            })
        }
    };

    /**
     * Obtiene la estrategia de visita para un tipo de nodo.
     * @param {string} nodeType - El tipo de nodo.
     * @returns {Object} - La estrategia de visita.
     */
    static getStrategy(nodeType) {
        return VisitStrategy.strategies[nodeType] || VisitStrategy.strategies.default;
    }
}

export default VisitStrategy;