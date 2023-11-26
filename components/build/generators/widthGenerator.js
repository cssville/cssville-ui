"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WidthGenerator = void 0;
const cssClassData_1 = require("../data/cssClassData");
const GeneratorBase_1 = require("../GeneratorBase");
const breakpoints_1 = __importDefault(require("../vars/breakpoints"));
class WidthGenerator extends GeneratorBase_1.GeneratorBase {
    constructor() {
        super(...arguments);
        this.postfixValuesMap = new Map([
            ["0", ["0%"]],
            ["1", ["8.333%"]],
            ["2", ["16.666%"]],
            ["3", ["25%"]],
            ["4", ["33.333%"]],
            ["5", ["41.666%"]],
            ["6", ["50%"]],
            ["7", ["58.333%"]],
            ["8", ["66.666%"]],
            ["9", ["75%"]],
            ["10", ["83.333%"]],
            ["11", ["91.666%"]],
            ["12", ["100%"]],
            ["xs", [breakpoints_1.default.xs.var]],
            ["sm", [breakpoints_1.default.sm.var]],
            ["md", [breakpoints_1.default.md.var]],
            ["lg", [breakpoints_1.default.lg.var]],
            ["xl", [breakpoints_1.default.xl.var]],
        ]);
        this.list = ["max-content", "min-content", "fit-content", "1px", "8px", "16px", "24px", "32px", "48px", "64px", "inherit", "initial", "revert", "unset"];
        this.cssData = [
            new cssClassData_1.CssClassData("w", ["width"], this.list, this.postfixValuesMap),
            new cssClassData_1.CssClassData("max-w", ["max-width"], this.list, this.postfixValuesMap),
            new cssClassData_1.CssClassData("min-w", ["min-width"], this.list, this.postfixValuesMap)
        ];
    }
}
exports.WidthGenerator = WidthGenerator;
