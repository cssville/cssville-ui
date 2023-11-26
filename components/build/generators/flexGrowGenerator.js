"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlexGrowGenerator = void 0;
const cssClassData_1 = require("../data/cssClassData");
const GeneratorBase_1 = require("../GeneratorBase");
class FlexGrowGenerator extends GeneratorBase_1.GeneratorBase {
    constructor() {
        super(...arguments);
        this.list = ["0", "1", "2", "3", "inherit", "initial", "revert", "unset"];
        this.cssData = [
            new cssClassData_1.CssClassData("flex-grow", ["-o-flex-grow", "-webkit-flex-grow", "flex-grow"], this.list, this.postfixValuesMap)
        ];
    }
}
exports.FlexGrowGenerator = FlexGrowGenerator;
