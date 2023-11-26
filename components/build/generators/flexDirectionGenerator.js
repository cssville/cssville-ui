"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlexDirectionGenerator = void 0;
const cssClassData_1 = require("../data/cssClassData");
const GeneratorBase_1 = require("../GeneratorBase");
class FlexDirectionGenerator extends GeneratorBase_1.GeneratorBase {
    constructor() {
        super(...arguments);
        this.list = ["row", "row-reverse", "column", "column-reverse", "inherit", "initial", "revert", "unset"];
        this.cssData = [
            new cssClassData_1.CssClassData("flex-direction", ["flex-direction"], this.list)
        ];
    }
}
exports.FlexDirectionGenerator = FlexDirectionGenerator;
