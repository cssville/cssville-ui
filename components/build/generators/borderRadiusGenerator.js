"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorderRadiusGenerator = void 0;
const cssClassData_1 = require("../data/cssClassData");
const GeneratorBase_1 = require("../GeneratorBase");
class BorderRadiusGenerator extends GeneratorBase_1.GeneratorBase {
    constructor() {
        super(...arguments);
        this.postfixValuesMap = new Map([
            ["0", ["0px"]],
            ["1", ["4px"]],
            ["2", ["8px"]],
            ["3", ["16px"]],
            ["4", ["32px"]],
            ["5", ["48px"]],
            ["6", ["64px"]],
        ]);
        this.list = ["inherit", "initial", "revert", "unset", "9999px"];
        this.cssData = [
            new cssClassData_1.CssClassData("br", ["-ms-border-radius", "border-radius"], this.list, this.postfixValuesMap),
            new cssClassData_1.CssClassData("br-top-left", ["-ms-border-top-left-radius", "border-top-left-radius"], this.list, this.postfixValuesMap),
            new cssClassData_1.CssClassData("br-top-right", ["-ms-border-top-right-radius", "border-top-right-radius"], this.list, this.postfixValuesMap),
            new cssClassData_1.CssClassData("br-bottom-right", ["-ms-border-bottom-right-radius", "border-bottom-right-radius"], this.list, this.postfixValuesMap),
            new cssClassData_1.CssClassData("br-bottom-left", ["-ms-border-bottom-left-radius", "border-bottom-left-radius"], this.list, this.postfixValuesMap)
        ];
    }
}
exports.BorderRadiusGenerator = BorderRadiusGenerator;
