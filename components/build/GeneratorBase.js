"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeneratorBase = void 0;
class GeneratorBase {
    constructor(name, generateCssForBreakpoints = true) {
        this.name = "";
        this.postfixValuesMap = new Map();
        this.cssData = [];
        this.name = name;
        this.generateCssForBreakpoints = generateCssForBreakpoints;
    }
    generate(prefix = "", classes = []) {
        var cssPart = "";
        this.cssData.forEach(data => {
            cssPart += data.getCss(prefix, classes);
        });
        return cssPart;
    }
}
exports.GeneratorBase = GeneratorBase;
