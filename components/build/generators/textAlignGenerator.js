"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextAlignGenerator = void 0;
const cssClassData_1 = require("../data/cssClassData");
const GeneratorBase_1 = require("../GeneratorBase");
class TextAlignGenerator extends GeneratorBase_1.GeneratorBase {
    constructor() {
        super(...arguments);
        this.list = ["underline", "overline", "none", "start", "end", "left", "right", "center",
            "justify", "justify-all", "match-parent", "inherit", "initial", "revert", "unset"];
        this.cssData = [
            new cssClassData_1.CssClassData("text-align", ["text-align"], this.list, this.postfixValuesMap)
        ];
    }
}
exports.TextAlignGenerator = TextAlignGenerator;
