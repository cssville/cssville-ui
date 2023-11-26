"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlignContentGenerator = void 0;
const cssClassData_1 = require("../data/cssClassData");
const GeneratorBase_1 = require("../GeneratorBase");
class AlignContentGenerator extends GeneratorBase_1.GeneratorBase {
    constructor() {
        super(...arguments);
        this.postfixValuesMap = new Map([
            ["first-baseline", ["first baseline"]],
            ["last-baseline", ["last baseline"]],
            ["safe-center", ["safe center"]],
            ["unsafe-center", ["unsafe center"]],
        ]);
        this.list = ["center", "start", "end", "flex-start", "flex-end", "normal",
            "baseline", "space-between", "space-around", "space-evenly", "stretch", "inherit", "initial",
            "revert", "revert-layer", "unset"];
        this.cssData = [
            new cssClassData_1.CssClassData("align-content", ["-ms-align-items", "-o-align-items", "-webkit-align-items", "align-items"], this.list, this.postfixValuesMap)
        ];
    }
}
exports.AlignContentGenerator = AlignContentGenerator;
