"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WhiteSpaceGenerator = void 0;
const cssClassData_1 = require("../data/cssClassData");
const GeneratorBase_1 = require("../GeneratorBase");
class WhiteSpaceGenerator extends GeneratorBase_1.GeneratorBase {
    constructor() {
        super(...arguments);
        this.list = ["nowrap", "pre", "pre-wrap", "pre-line", "break-spaces", "normal"];
        this.cssData = [
            new cssClassData_1.CssClassData("white-space", ["white-space"], this.list)
        ];
    }
}
exports.WhiteSpaceGenerator = WhiteSpaceGenerator;
