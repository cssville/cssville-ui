"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlexShrinkGenerator = void 0;
const cssClassData_1 = require("../data/cssClassData");
const GeneratorBase_1 = require("../GeneratorBase");
class FlexShrinkGenerator extends GeneratorBase_1.GeneratorBase {
    constructor() {
        super(...arguments);
        this.list = ["0", "1", "2", "3", "inherit", "initial", "revert", "unset"];
        this.cssData = [
            new cssClassData_1.CssClassData("flex-shrink", ["-o-flex-shrink", "-webkit-flex-shrink", "flex-shrink"], this.list)
        ];
    }
}
exports.FlexShrinkGenerator = FlexShrinkGenerator;
