"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const ui_1 = __importDefault(require("./ui"));
const amber_1 = __importDefault(require("./color/amber"));
const blue_1 = __importDefault(require("./color/blue"));
const blueGrey_1 = __importDefault(require("./color/blueGrey"));
const brown_1 = __importDefault(require("./color/brown"));
const cyan_1 = __importDefault(require("./color/cyan"));
const deepOrange_1 = __importDefault(require("./color/deepOrange"));
const deepPurple_1 = __importDefault(require("./color/deepPurple"));
const green_1 = __importDefault(require("./color/green"));
const grey_1 = __importDefault(require("./color/grey"));
const indigo_1 = __importDefault(require("./color/indigo"));
const lightBlue_1 = __importDefault(require("./color/lightBlue"));
const lightGreen_1 = __importDefault(require("./color/lightGreen"));
const lime_1 = __importDefault(require("./color/lime"));
const orange_1 = __importDefault(require("./color/orange"));
const pink_1 = __importDefault(require("./color/pink"));
const purple_1 = __importDefault(require("./color/purple"));
const red_1 = __importDefault(require("./color/red"));
const teal_1 = __importDefault(require("./color/teal"));
const yellow_1 = __importDefault(require("./color/yellow"));
class CssvilleColors {
}
_a = CssvilleColors;
CssvilleColors.colorsPalette = [
    ...red_1.default.collection.vars,
    ...pink_1.default.collection.vars,
    ...purple_1.default.collection.vars,
    ...deepPurple_1.default.collection.vars,
    ...indigo_1.default.collection.vars,
    ...blue_1.default.collection.vars,
    ...lightBlue_1.default.collection.vars,
    ...cyan_1.default.collection.vars,
    ...teal_1.default.collection.vars,
    ...green_1.default.collection.vars,
    ...lightGreen_1.default.collection.vars,
    ...lime_1.default.collection.vars,
    ...yellow_1.default.collection.vars,
    ...amber_1.default.collection.vars,
    ...orange_1.default.collection.vars,
    ...deepOrange_1.default.collection.vars,
    ...brown_1.default.collection.vars,
    ...grey_1.default.collection.vars,
    ...blueGrey_1.default.collection.vars,
    ...ui_1.default.colors
];
CssvilleColors.colorsPalettePostfixValues = _a.colorsPalette.map(e => e.postfixValue);
exports.default = CssvilleColors;
