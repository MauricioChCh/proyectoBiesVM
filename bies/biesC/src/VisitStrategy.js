class VisitStrategy {
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
                right: () => ctx.STRING().getText(),
                left: () => 'print',
                root: () => 'printInstr'
            })
        }
    };

    static getStrategy(nodeType) {
        return VisitStrategy.strategies[nodeType] || VisitStrategy.strategies.default;
    }
}

export default VisitStrategy;