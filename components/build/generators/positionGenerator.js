"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PositionGenerator = void 0;
const cssClassData_1 = require("../data/cssClassData");
const GeneratorBase_1 = require("../GeneratorBase");
class PositionGenerator extends GeneratorBase_1.GeneratorBase {
    constructor() {
        super(...arguments);
        this.list = ["static", "relative", "absolute", "fixed", "sticky", "inherit", "initial", "revert", "unset"];
        this.cssData = [
            new cssClassData_1.CssClassData("position", ["position"], this.list),
        ];
    }
}
exports.PositionGenerator = PositionGenerator;
