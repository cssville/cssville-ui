"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlexWrapGenerator = void 0;
const cssClassData_1 = require("../data/cssClassData");
const GeneratorBase_1 = require("../GeneratorBase");
class FlexWrapGenerator extends GeneratorBase_1.GeneratorBase {
    constructor() {
        super(...arguments);
        this.list = ["nowrap", "wrap", "wrap-reverse", "inherit", "initial", "revert", "unset"];
        this.cssData = [
            new cssClassData_1.CssClassData("flex-wrap", ["-moz-flex-wrap", "-ms-flex-wrap", "-o-flex-wrap", "-webkit-flex-wrap", "flex-wrap"], this.list)
        ];
    }
}
exports.FlexWrapGenerator = FlexWrapGenerator;
