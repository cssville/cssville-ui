"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZIndexGenerator = void 0;
const cssClassData_1 = require("../data/cssClassData");
const GeneratorBase_1 = require("../GeneratorBase");
class ZIndexGenerator extends GeneratorBase_1.GeneratorBase {
    constructor() {
        super(...arguments);
        this.list = ["auto", "0", "-1", "-2", "-3", "-4", "-5", "1", "2", "3", "4", "5", "10", "100", "1000", "9999"];
        this.cssData = [
            new cssClassData_1.CssClassData("z", ["z-index"], this.list)
        ];
    }
}
exports.ZIndexGenerator = ZIndexGenerator;
