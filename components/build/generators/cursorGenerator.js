"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CursorGenerator = void 0;
const cssClassData_1 = require("../data/cssClassData");
const GeneratorBase_1 = require("../GeneratorBase");
class CursorGenerator extends GeneratorBase_1.GeneratorBase {
    constructor() {
        super(...arguments);
        this.list = ["cell", "help", "crosshair", "text", "wait", "copy", "move", "grab", "grabbing", "not-allowed", "pointer", "progress", "zoom-in", "zoom-out", "default"];
        this.cssData = [
            new cssClassData_1.CssClassData("cursor", ["cursor"], this.list)
        ];
    }
}
exports.CursorGenerator = CursorGenerator;
