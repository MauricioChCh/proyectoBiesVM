class BuiltInsProcessor {
    constructor(visitor) {
        this.visitor = visitor;
    }

    bool() {
        this.visitor.byteCode.push('EQ');
        this.visitor.byteCode.push('NOT');
        this.visitor.byteCode.push('RET');
    }

    true() {
        this.visitor.byteCode.push('LDV 1');
        this.visitor.byteCode.push('LDV 1');
        this.visitor.byteCode.push('EQ');
    }

    false() {
        this.visitor.byteCode.push('LDV 0');
        this.visitor.byteCode.push('LDV 1');
        this.visitor.byteCode.push('EQ');
    }

    none() {
        this.visitor.byteCode.push('LDV "none"');
    }

    input() {
        this.visitor.byteCode.push('INP');
    }

    int() {
        this.visitor.byteCode.push('CST number');
    }

    str() {
        this.visitor.byteCode.push('CST string');
    }

    list() {
        this.visitor.byteCode.push('CST list');
    }

    len() {
        this.visitor.byteCode.push('LEN');
    }

    pow() {
        this.visitor.byteCode.push('POW');
    }
}

export default BuiltInsProcessor;