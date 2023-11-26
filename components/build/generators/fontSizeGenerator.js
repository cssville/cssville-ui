"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FontSizeGenerator = void 0;
const cssClassData_1 = require("../data/cssClassData");
const GeneratorBase_1 = require("../GeneratorBase");
class FontSizeGenerator extends GeneratorBase_1.GeneratorBase {
    constructor() {
        super(...arguments);
        this.postfixValuesMap = new Map([
            ["xxx-large", ["48px", "xxx-large"]],
            ["4x-large", ["64px"]],
        ]);
        this.list = ["smaller", "larger", "xx-small", "x-small", "small", "medium", "large",
            "x-large", "xx-large", "1rem", "2rem", "3rem", "4rem", "5rem", "inherit", "initial", "revert", "unset"];
        this.cssData = [
            new cssClassData_1.CssClassData("fs", ["font-size"], this.list, this.postfixValuesMap)
        ];
    }
}
exports.FontSizeGenerator = FontSizeGenerator;
