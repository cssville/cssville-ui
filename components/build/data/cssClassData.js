"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CssClassData = void 0;
class CssClassData {
    constructor(className, cssProperties, postfixArray, postfixValuesMap = new Map()) {
        this.className = className;
        this.cssProperties = cssProperties;
        this.postfixValuesMap = postfixValuesMap;
        this.cssParts = new Map();
        if (postfixArray !== undefined) {
            postfixArray.forEach(element => {
                this.postfixValuesMap.set(element, [element]);
            });
        }
        this.postfixValuesMap.forEach((value, key) => {
            var postfix = key;
            var innerProperties = "";
            var innerPropertiesIm = "";
            this.cssProperties.forEach(cssProperty => {
                value.forEach(v => {
                    innerProperties += `${cssProperty}: ${v}; `;
                    innerPropertiesIm += `${cssProperty}: ${v} !important; `;
                });
            });
            this.cssParts.set(`${this.className}-${postfix}`, innerProperties);
            this.cssParts.set(`${this.className}-${postfix}-i`, innerPropertiesIm);
        });
    }
    getCss(prefix = "", classes) {
        var css = "";
        var postfix = "hover";
        this.cssParts.forEach((value, key) => {
            var className = `${prefix === "" ? "" : `${prefix}-`}${key}`;
            var classNameWithPostfix = `${prefix === "" ? "" : `${prefix}-`}${key}-${postfix}`;
            if (classes.length === 0) {
                css += `.${className} {${value}} `;
                css += `.${classNameWithPostfix}:hover {${value}} `;
            }
            if (classes.length > 0 && classes.indexOf(className) >= 0) {
                css += `.${className} {${value}} `;
                css += `.${classNameWithPostfix}:hover {${value}} `;
            }
        });
        return css;
    }
}
exports.CssClassData = CssClassData;
