"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorBase = void 0;
const VarBase_1 = require("../../VarBase");
const utils_1 = require("../../utils");
class ColorBase {
    constructor(name, hex) {
        this.opacityColors = [];
        this.colors = [];
        this.vars = [];
        var rgbCommaSeparated = (0, utils_1.hexToRgbCommaSeparated)(hex);
        var category = "color";
        this.rgb = new VarBase_1.VarBase("rgb", name, rgbCommaSeparated);
        this.color = new VarBase_1.VarBase(category, name, `rgb(${this.rgb.var})`);
        for (var i = 1; i < 10; i++) {
            var val = `rgba(${this.rgb.var}, 0.${i})`;
            var color = new VarBase_1.VarBase(category, `${name}-0${i}`, val);
            this.opacityColors.push(color);
        }
        this.colors = [this.color, ...this.opacityColors];
        this.vars = [this.rgb, ...this.colors];
    }
}
exports.ColorBase = ColorBase;
