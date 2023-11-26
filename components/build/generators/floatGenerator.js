"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FloatGenerator = void 0;
const cssClassData_1 = require("../data/cssClassData");
const GeneratorBase_1 = require("../GeneratorBase");
class FloatGenerator extends GeneratorBase_1.GeneratorBase {
    constructor() {
        super(...arguments);
        this.list = ["left", "right", "none", "inherit", "initial", "revert", "unset"];
        this.cssData = [
            new cssClassData_1.CssClassData("float", ["float"], this.list)
        ];
    }
}
exports.FloatGenerator = FloatGenerator;
