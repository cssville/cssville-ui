"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayGenerator = void 0;
const cssClassData_1 = require("../data/cssClassData");
const GeneratorBase_1 = require("../GeneratorBase");
class DisplayGenerator extends GeneratorBase_1.GeneratorBase {
    constructor() {
        super(...arguments);
        this.postfixValuesMap = new Map([
            ["block-flow", ["block flow"]],
            ["inline-flow", ["inline flow"]],
            ["inline-flow-root", ["inline flow-root"]],
            ["block-flex", ["block flex"]],
            ["inline-flex", ["inline flex"]],
            ["block-grid", ["block grid"]],
            ["inline-grid", ["inline grid"]],
            ["block-flow-root", ["block flow-root"]],
        ]);
        this.list = ["block", "inline", "inline-block", "flex", "inline-flex", "inherit", "grid", "inline-grid",
            "flow-root", "none", "contents", "table", "table-row", "table-column", "table-cell", "list-item", "initial", "revert", "unset"];
        this.cssData = [
            new cssClassData_1.CssClassData("d", ["display"], this.list, this.postfixValuesMap)
        ];
    }
}
exports.DisplayGenerator = DisplayGenerator;
