"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectFitGenerator = void 0;
const cssClassData_1 = require("../data/cssClassData");
const GeneratorBase_1 = require("../GeneratorBase");
class ObjectFitGenerator extends GeneratorBase_1.GeneratorBase {
    constructor() {
        super(...arguments);
        this.list = ["contain", "cover", "fill", "none", "scale-down", "inherit", "initial", "revert", "revert-layer", "unset"];
        this.cssData = [
            new cssClassData_1.CssClassData("object-fit", ["object-fit"], this.list),
        ];
    }
}
exports.ObjectFitGenerator = ObjectFitGenerator;
