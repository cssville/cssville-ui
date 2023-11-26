"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OverflowGenerator = void 0;
const cssClassData_1 = require("../data/cssClassData");
const GeneratorBase_1 = require("../GeneratorBase");
class OverflowGenerator extends GeneratorBase_1.GeneratorBase {
    constructor() {
        super(...arguments);
        this.list = ["visible", "hidden", "scroll", "auto"];
        this.cssData = [
            new cssClassData_1.CssClassData("overflow", ["overflow"], this.list),
            new cssClassData_1.CssClassData("overflow-x", ["overflow-x"], this.list),
            new cssClassData_1.CssClassData("overflow-y", ["overflow-y"], this.list),
        ];
    }
}
exports.OverflowGenerator = OverflowGenerator;
