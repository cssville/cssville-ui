"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VarBase = void 0;
class VarBase {
    constructor(category, name, value) {
        this.category = "";
        this.name = "";
        this.value = "";
        this.category = category;
        this.name = name;
        this.value = value;
        this.varName = `--cssville-${this.name}-${this.category}`;
        this.var = `var(${this.varName})`;
        this.css = `${this.varName}: ${this.value};`;
        this.postfixValue = [this.name, [this.var]];
    }
}
exports.VarBase = VarBase;
