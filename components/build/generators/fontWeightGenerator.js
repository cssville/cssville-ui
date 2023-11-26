"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FontWeightGenerator = void 0;
const cssClassData_1 = require("../data/cssClassData");
const GeneratorBase_1 = require("../GeneratorBase");
class FontWeightGenerator extends GeneratorBase_1.GeneratorBase {
    constructor() {
        super(...arguments);
        this.list = ["normal", "bold", "lighter", "bolder", "100", "200", "300", "400", "500",
            "600", "700", "800", "900", "inherit", "initial", "revert", "unset"];
        this.cssData = [
            new cssClassData_1.CssClassData("fw", ["font-weight"], this.list)
        ];
    }
}
exports.FontWeightGenerator = FontWeightGenerator;
