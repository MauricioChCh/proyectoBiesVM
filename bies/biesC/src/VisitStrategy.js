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
                right: () => {
                    const value = ctx.STRING() || ctx.NUMBER() || ctx.array();
                    return value ? value.getText() : null;
                },
                left: () => 'print',
                root: () => 'printInstr'
            })
        },

        // Estrategia especial para simpleLetInstr (derecho -> izquierdo -> raíz)
        simpleLetInstr: {
            rightFirst: true,
            getVisitOrder: (ctx) => ({
                right: () => {
                    const value = ctx.expr();
                    return value ? value.getText() : null;
                },
                left: () => `let ${ctx.ID().getText()} =`,
                root: () => 'simpleLetInstr'
            })
        },

        // Estrategia especial para expr (izquierdo -> derecho -> raíz)
        expr: {
            rightFirst: false,
            getVisitOrder: (ctx) => ({
                left: () => ctx.children[0] ? ctx.children[0] : null,
                right: () => ctx.children[2] ? ctx.children[2] : null,
                root: () => ctx.children[1] ? ctx.children[1].getText() : ctx.getText()
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