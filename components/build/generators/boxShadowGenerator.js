"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoxShadowGenerator = void 0;
const cssClassData_1 = require("../data/cssClassData");
const GeneratorBase_1 = require("../GeneratorBase");
const shadow_1 = __importDefault(require("../vars/shadow"));
const ui_1 = __importDefault(require("../vars/ui"));
class BoxShadowGenerator extends GeneratorBase_1.GeneratorBase {
    constructor() {
        super(...arguments);
        this.postfixValuesMap = new Map([
            ["xs", [`${shadow_1.default.xs.var} ${ui_1.default.shadow.var}`]],
            ["sm", [`${shadow_1.default.sm.var} ${ui_1.default.shadow.var}`]],
            ["md", [`${shadow_1.default.md.var} ${ui_1.default.shadow.var}`]],
            ["lg", [`${shadow_1.default.lg.var} ${ui_1.default.shadow.var}`]],
            ["xl", [`${shadow_1.default.xl.var} ${ui_1.default.shadow.var}`]],
        ]);
        this.list = ["none"];
        this.cssData = [
            new cssClassData_1.CssClassData("box-shadow", ["box-shadow"], this.list, this.postfixValuesMap),
        ];
    }
}
exports.BoxShadowGenerator = BoxShadowGenerator;
