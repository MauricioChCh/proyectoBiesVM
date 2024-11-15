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

    }

    false() {

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
}

export default BuiltInsProcessor;