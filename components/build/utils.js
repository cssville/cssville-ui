"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hexToRgbCommaSeparated = void 0;
function hexToRgba(hex, alpha = 1.0) {
    var commaSeparatedRGB = hexToRgbCommaSeparated(hex);
    if (alpha > 0 && alpha < 1) {
        return `rgba(${commaSeparatedRGB}, ${alpha})`;
    }
    return `rgb(${commaSeparatedRGB})`;
}
exports.default = hexToRgba;
function hexToRgbCommaSeparated(hex) {
    hex = hex.replace(/^#/, '');
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    return `${r}, ${g}, ${b}`;
}
exports.hexToRgbCommaSeparated = hexToRgbCommaSeparated;
