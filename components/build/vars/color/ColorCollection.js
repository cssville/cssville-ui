"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ColorBase_1 = require("./ColorBase");
class ColorCollection {
    constructor(colorName, hexValue) {
        this.colors = [];
        this.vars = [];
        var indexes = ["50", "100", "200", "300", "400", "500", "600", "700", "800", "900"];
        hexValue.forEach((hex, index) => {
            var id = indexes[index];
            var color = new ColorBase_1.ColorBase(`${colorName}-${id}`, hex);
            this.colors[`${id}`] = color;
            this.vars.push(...color.vars);
        });
    }
}
exports.default = ColorCollection;
