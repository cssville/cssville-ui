"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BackgroundColorGenerator = void 0;
const cssClassData_1 = require("../data/cssClassData");
const GeneratorBase_1 = require("../GeneratorBase");
const colors_1 = __importDefault(require("./../vars/colors"));
class BackgroundColorGenerator extends GeneratorBase_1.GeneratorBase {
    constructor() {
        super(...arguments);
        this.postfixValuesMap = new Map([
            ...colors_1.default.colorsPalettePostfixValues,
        ]);
        this.flatValues = ["black", "white", "transparent", "inherit", "initial", "revert", "unset"];
        this.cssData = [
            new cssClassData_1.CssClassData("bg-color", ["background-color"], this.flatValues, this.postfixValuesMap)
        ];
    }
}
exports.BackgroundColorGenerator = BackgroundColorGenerator;
