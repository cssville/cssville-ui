"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorderGenerator = void 0;
const cssClassData_1 = require("../data/cssClassData");
const GeneratorBase_1 = require("../GeneratorBase");
const border_1 = __importDefault(require("../vars/border"));
const ui_1 = __importDefault(require("../vars/ui"));
class BorderGenerator extends GeneratorBase_1.GeneratorBase {
    constructor() {
        super(...arguments);
        this.postfixValuesMap = new Map([
            ["1", [`${border_1.default.width.var} solid ${ui_1.default.border.var}`]],
        ]);
        this.list = ["none"];
        this.cssData = [
            new cssClassData_1.CssClassData("border", ["border"], this.list, this.postfixValuesMap),
            new cssClassData_1.CssClassData("border-top", ["border-top"], this.list, this.postfixValuesMap),
            new cssClassData_1.CssClassData("border-bottom", ["border-bottom"], this.list, this.postfixValuesMap),
            new cssClassData_1.CssClassData("border-left", ["border-left"], this.list, this.postfixValuesMap),
            new cssClassData_1.CssClassData("border-right", ["border-right"], this.list, this.postfixValuesMap),
        ];
    }
}
exports.BorderGenerator = BorderGenerator;
