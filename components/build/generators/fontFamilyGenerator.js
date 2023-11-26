"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FontFamilyGenerator = void 0;
const cssClassData_1 = require("../data/cssClassData");
const GeneratorBase_1 = require("../GeneratorBase");
const fontFamily_1 = __importDefault(require("../vars/fontFamily"));
class FontFamilyGenerator extends GeneratorBase_1.GeneratorBase {
    constructor() {
        super(...arguments);
        this.postfixValuesMap = new Map([
            ["primary", [`${fontFamily_1.default.primary.var}`]],
            ["secondary", [`${fontFamily_1.default.secondary.var}`]],
            ["code", [`${fontFamily_1.default.code.var}`]],
        ]);
        this.cssData = [
            new cssClassData_1.CssClassData("font-family", ["font-family"], [], this.postfixValuesMap),
        ];
    }
}
exports.FontFamilyGenerator = FontFamilyGenerator;
