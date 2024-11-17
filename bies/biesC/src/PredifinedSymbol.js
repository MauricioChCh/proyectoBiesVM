class BuiltInsProcessor {
    constructor(visitor) {
        this.visitor = visitor;
    }

    bool() {
        this.visitor.byteCode.push('EQ');
        this.visitor.byteCode.push('NOT');
        this.visitor.byteCode.push('PRN');
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

    null() {

    }

    input() {

    }

    int() {

    }

    str() {

    }

    list() {

    }

    len() {
        this.visitor.byteCode.push('LEN');
        this.visitor.byteCode.push('PRN');
    }

    pow() {
        this.visitor.byteCode.push('POW');
        this.visitor.byteCode.push('PRN');
    }
}

export default BuiltInsProcessor;