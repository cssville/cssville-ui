"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const VarBase_1 = require("../VarBase");
class CssvilleShadow {
}
_a = CssvilleShadow;
CssvilleShadow.xl = new VarBase_1.VarBase("xl", "shadow", "0px 12px 28px 0px");
CssvilleShadow.lg = new VarBase_1.VarBase("lg", "shadow", "0px 8px 24px 0px");
CssvilleShadow.md = new VarBase_1.VarBase("md", "shadow", "0px 6px 12px 0px");
CssvilleShadow.sm = new VarBase_1.VarBase("sm", "shadow", "0px 4px 8px 0px");
CssvilleShadow.xs = new VarBase_1.VarBase("xs", "shadow", "0px 2px 4px 0px");
CssvilleShadow.vars = [
    _a.xl,
    _a.lg,
    _a.md,
    _a.sm,
    _a.xs,
];
exports.default = CssvilleShadow;
