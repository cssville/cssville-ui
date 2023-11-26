"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaddingGenerator = void 0;
const cssClassData_1 = require("../data/cssClassData");
const GeneratorBase_1 = require("./../GeneratorBase");
class PaddingGenerator extends GeneratorBase_1.GeneratorBase {
    constructor() {
        super(...arguments);
        this.postfixValuesMap = new Map([
            ["0", ["0px"]],
            ["1", ["4px"]],
            ["2", ["8px"]],
            ["3", ["16px"]],
            ["4", ["32px"]],
            ["5", ["64px"]],
        ]);
        this.list = ["inherit", "initial", "revert", "unset"];
        this.cssData = [
            new cssClassData_1.CssClassData("p", ["padding"], this.list, this.postfixValuesMap),
            new cssClassData_1.CssClassData("pt", ["padding-top"], this.list, this.postfixValuesMap),
            new cssClassData_1.CssClassData("pb", ["padding-bottom"], this.list, this.postfixValuesMap),
            new cssClassData_1.CssClassData("pl", ["padding-left"], this.list, this.postfixValuesMap),
            new cssClassData_1.CssClassData("pr", ["padding-right"], this.list, this.postfixValuesMap),
            new cssClassData_1.CssClassData("px", ["padding-left", "padding-right"], this.list, this.postfixValuesMap),
            new cssClassData_1.CssClassData("py", ["padding-top", "padding-bottom"], this.list, this.postfixValuesMap),
        ];
    }
}
exports.PaddingGenerator = PaddingGenerator;
