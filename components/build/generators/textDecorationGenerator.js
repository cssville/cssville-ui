"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextDecorationGenerator = void 0;
const cssClassData_1 = require("../data/cssClassData");
const GeneratorBase_1 = require("../GeneratorBase");
class TextDecorationGenerator extends GeneratorBase_1.GeneratorBase {
    constructor() {
        super(...arguments);
        this.list = ["underline", "overline", "none", "inherit", "initial", "revert", "unset"];
        this.cssData = [
            new cssClassData_1.CssClassData("text-decoration", ["text-decoration"], this.list)
        ];
    }
}
exports.TextDecorationGenerator = TextDecorationGenerator;
