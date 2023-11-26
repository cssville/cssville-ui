"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlignItemsGenerator = void 0;
const cssClassData_1 = require("../data/cssClassData");
const GeneratorBase_1 = require("../GeneratorBase");
class AlignItemsGenerator extends GeneratorBase_1.GeneratorBase {
    constructor() {
        super(...arguments);
        this.postfixValuesMap = new Map([
            ["first-baseline", ["first baseline"]],
            ["last-baseline", ["last baseline"]],
            ["safe-center", ["safe center"]],
            ["unsafe-center", ["unsafe center"]],
        ]);
        this.list = ["normal", "stretch", "center", "start", "flex-start", "end", "flex-end", "baseline", "inherit", "initial", "revert", "unset"];
        this.cssData = [
            new cssClassData_1.CssClassData("align-items", ["-ms-align-items", "-o-align-items", "-webkit-align-items", "align-items"], this.list, this.postfixValuesMap)
        ];
    }
}
exports.AlignItemsGenerator = AlignItemsGenerator;
