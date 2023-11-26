"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeightGenerator = void 0;
const cssClassData_1 = require("../data/cssClassData");
const GeneratorBase_1 = require("../GeneratorBase");
class HeightGenerator extends GeneratorBase_1.GeneratorBase {
    constructor() {
        super(...arguments);
        this.postfixValuesMap = new Map([
            ["100", ["100%"]],
        ]);
        this.list = ["auto", "max-content", "min-content", "100vh", "1px", "8px", "16px", "24px", "32px", "48px", "64px", "inherit", "initial", "revert", "unset"];
        this.cssData = [
            new cssClassData_1.CssClassData("h", ["height"], this.list, this.postfixValuesMap),
            new cssClassData_1.CssClassData("max-h", ["max-height"], this.list, this.postfixValuesMap),
            new cssClassData_1.CssClassData("min-h", ["min-height"], this.list, this.postfixValuesMap)
        ];
    }
}
exports.HeightGenerator = HeightGenerator;
