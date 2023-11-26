"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpacityGenerator = void 0;
const cssClassData_1 = require("../data/cssClassData");
const GeneratorBase_1 = require("../GeneratorBase");
class OpacityGenerator extends GeneratorBase_1.GeneratorBase {
    constructor() {
        super(...arguments);
        this.postfixValuesMap = new Map([
            ["0", ["0"]],
            ["01", ["0.1"]],
            ["02", ["0.2"]],
            ["03", ["0.3"]],
            ["04", ["0.4"]],
            ["05", ["0.5"]],
            ["06", ["0.6"]],
            ["07", ["0.7"]],
            ["08", ["0.8"]],
            ["09", ["0.9"]],
            ["1", ["1"]],
        ]);
        this.list = ["inherit", "initial", "revert", "revert-layer", "unset"];
        this.cssData = [
            new cssClassData_1.CssClassData("opacity", ["opacity"], this.list, this.postfixValuesMap),
        ];
    }
}
exports.OpacityGenerator = OpacityGenerator;
