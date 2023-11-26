"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const VarBase_1 = require("../VarBase");
class CssvilleFontFamily {
}
_a = CssvilleFontFamily;
CssvilleFontFamily.primary = new VarBase_1.VarBase("font-family", "primary", "'Inter', sans-serif");
CssvilleFontFamily.secondary = new VarBase_1.VarBase("font-family", "secondary", "'Inter', sans-serif");
CssvilleFontFamily.code = new VarBase_1.VarBase("font-family", "code", "'JetBrains Mono', monospace");
CssvilleFontFamily.vars = [
    _a.primary,
    _a.secondary,
    _a.code,
];
exports.default = CssvilleFontFamily;
