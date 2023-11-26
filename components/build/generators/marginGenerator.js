"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarginGenerator = void 0;
const cssClassData_1 = require("../data/cssClassData");
const GeneratorBase_1 = require("../GeneratorBase");
class MarginGenerator extends GeneratorBase_1.GeneratorBase {
    constructor() {
        super(...arguments);
        this.postfixValuesMap = new Map([
            ["0", ["0px"]],
            ["1", ["4px"]],
            ["2", ["8px"]],
            ["3", ["16px"]],
            ["4", ["32px"]],
            ["5", ["64px"]],
            ["-1", ["-4px"]],
            ["-2", ["-8px"]],
            ["-3", ["-16px"]],
            ["-4", ["-32px"]],
            ["-5", ["-64px"]],
        ]);
        this.list = ["auto", "inherit", "initial", "revert", "unset"];
        this.cssData = [
            new cssClassData_1.CssClassData("m", ["margin"], this.list, this.postfixValuesMap),
            new cssClassData_1.CssClassData("mt", ["margin-top"], this.list, this.postfixValuesMap),
            new cssClassData_1.CssClassData("mb", ["margin-bottom"], this.list, this.postfixValuesMap),
            new cssClassData_1.CssClassData("ml", ["margin-left"], this.list, this.postfixValuesMap),
            new cssClassData_1.CssClassData("mr", ["margin-right"], this.list, this.postfixValuesMap),
            new cssClassData_1.CssClassData("mx", ["margin-left", "margin-right"], this.list, this.postfixValuesMap),
            new cssClassData_1.CssClassData("my", ["margin-top", "margin-bottom"], this.list, this.postfixValuesMap),
        ];
    }
}
exports.MarginGenerator = MarginGenerator;
