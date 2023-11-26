"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WordBreakGenerator = void 0;
const cssClassData_1 = require("../data/cssClassData");
const GeneratorBase_1 = require("../GeneratorBase");
class WordBreakGenerator extends GeneratorBase_1.GeneratorBase {
    constructor() {
        super(...arguments);
        this.list = ["break-all", "keep-all", "break-word", "normal"];
        this.cssData = [
            new cssClassData_1.CssClassData("word-break", ["word-break"], this.list)
        ];
    }
}
exports.WordBreakGenerator = WordBreakGenerator;
