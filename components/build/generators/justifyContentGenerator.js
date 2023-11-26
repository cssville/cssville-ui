"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JustifyContentGenerator = void 0;
const cssClassData_1 = require("../data/cssClassData");
const GeneratorBase_1 = require("../GeneratorBase");
class JustifyContentGenerator extends GeneratorBase_1.GeneratorBase {
    constructor() {
        super(...arguments);
        this.postfixValuesMap = new Map([
            ["safe-center", ["safe center"]],
            ["unsafe-center", ["unsafe center"]],
        ]);
        this.list = ["center", "start", "flex-start", "end", "flex-end", "normal", "space-between", "space-around", "space-evenly",
            "stretch", "inherit", "initial", "revert", "unset"];
        this.cssData = [
            new cssClassData_1.CssClassData("justify-content", ["-o-justify-content", "-webkit-justify-content", "justify-content"], this.list, this.postfixValuesMap)
        ];
    }
}
exports.JustifyContentGenerator = JustifyContentGenerator;
