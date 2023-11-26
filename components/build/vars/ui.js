"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const VarBase_1 = require("../VarBase");
const blueGrey_1 = __importDefault(require("./color/blueGrey"));
class UiColors {
}
_a = UiColors;
UiColors.text = new VarBase_1.VarBase("color", "text", blueGrey_1.default.collection.colors["900"].color.var);
UiColors.border = new VarBase_1.VarBase("color", "border", blueGrey_1.default.collection.colors["100"].color.var);
UiColors.shadow = new VarBase_1.VarBase("color", "shadow", blueGrey_1.default.collection.colors["300"].opacityColors[2].var);
UiColors.colors = [
    _a.text,
    _a.border,
    _a.shadow,
];
exports.default = UiColors;
