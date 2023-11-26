"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorGenerator = void 0;
const cssClassData_1 = require("../data/cssClassData");
const GeneratorBase_1 = require("../GeneratorBase");
const colors_1 = __importDefault(require("../vars/colors"));
class ColorGenerator extends GeneratorBase_1.GeneratorBase {
    constructor() {
        super(...arguments);
        this.postfixValuesMap = new Map([
            ...colors_1.default.colorsPalettePostfixValues,
        ]);
        this.list = ["black", "white", "transparent", "inherit", "initial", "revert", "unset"];
        this.cssData = [
            new cssClassData_1.CssClassData("color", ["color"], this.list, this.postfixValuesMap)
        ];
    }
}
exports.ColorGenerator = ColorGenerator;
