"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cssville = void 0;
const paddingGenerator_1 = require("./generators/paddingGenerator");
const marginGenerator_1 = require("./generators/marginGenerator");
const displayGenerator_1 = require("./generators/displayGenerator");
const flexDirectionGenerator_1 = require("./generators/flexDirectionGenerator");
const flexGrowGenerator_1 = require("./generators/flexGrowGenerator");
const flexWrapGenerator_1 = require("./generators/flexWrapGenerator");
const flexShrinkGenerator_1 = require("./generators/flexShrinkGenerator");
const floatGenerator_1 = require("./generators/floatGenerator");
const fontWeightGenerator_1 = require("./generators/fontWeightGenerator");
const fontFamilyGenerator_1 = require("./generators/fontFamilyGenerator");
const widthGenerator_1 = require("./generators/widthGenerator");
const fontSizeGenerator_1 = require("./generators/fontSizeGenerator");
const positionGenerator_1 = require("./generators/positionGenerator");
const alignContentGenerator_1 = require("./generators/alignContentGenerator");
const alignItemsGenerator_1 = require("./generators/alignItemsGenerator");
const justifyContentGenerator_1 = require("./generators/justifyContentGenerator");
const textDecorationGenerator_1 = require("./generators/textDecorationGenerator");
const heightGenerator_1 = require("./generators/heightGenerator");
const colorGenerator_1 = require("./generators/colorGenerator");
const borderRadiusGenerator_1 = require("./generators/borderRadiusGenerator");
const cursorGenerator_1 = require("./generators/cursorGenerator");
const backgroundColorGenerator_1 = require("./generators/backgroundColorGenerator");
const textAlignGenerator_1 = require("./generators/textAlignGenerator");
const wordBreakGenerator_1 = require("./generators/wordBreakGenerator");
const whiteSpaceGenerator_1 = require("./generators/whiteSpaceGenerator");
const objectFitGenerator_1 = require("./generators/objectFitGenerator");
const opacityGenerator_1 = require("./generators/opacityGenerator");
const overflowGenerator_1 = require("./generators/overflowGenerator");
const borderGenerator_1 = require("./generators/borderGenerator");
const breakpoints_1 = __importDefault(require("./vars/breakpoints"));
const colors_1 = __importDefault(require("./vars/colors"));
const ui_1 = __importDefault(require("./vars/ui"));
const border_1 = __importDefault(require("./vars/border"));
const boxShadowGenerator_1 = require("./generators/boxShadowGenerator");
const shadow_1 = __importDefault(require("./vars/shadow"));
const fontFamily_1 = __importDefault(require("./vars/fontFamily"));
const zIndexGenerator_1 = require("./generators/zIndexGenerator");
class Cssville {
    static getCss(classes = []) {
        var css = "";
        var allVarsCss = "";
        for (var varsCollection of this.variables) {
            var collectionCss = "";
            for (var v of varsCollection) {
                collectionCss += ` ${v.css}`;
            }
            allVarsCss += ` ${collectionCss}`;
        }
        for (const [key, value] of this.rootValues) {
            allVarsCss += ` ${key}: ${value.var};`;
        }
        css += `:root {${allVarsCss}} `;
        for (var x = 0; x < this.generators.length; x++) {
            const g = this.generators[x];
            var cssPart = g.generate("", classes);
            css += cssPart;
        }
        for (const breakpoint of this.breakpoints) {
            var innerCss = "";
            for (var x = 0; x < this.generators.length; x++) {
                const generator = this.generators[x];
                if (generator.generateCssForBreakpoints) {
                    var cssPartForPrefix = generator.generate(breakpoint.name, classes);
                    innerCss += cssPartForPrefix;
                }
            }
            css += `@media screen and (max-width: ${breakpoint.value}) { ${innerCss}} `;
        }
        return css;
    }
}
exports.Cssville = Cssville;
_a = Cssville;
Cssville.generators = [
    new alignContentGenerator_1.AlignContentGenerator("align-content"),
    new alignItemsGenerator_1.AlignItemsGenerator("align-items"),
    new borderGenerator_1.BorderGenerator("border"),
    new borderRadiusGenerator_1.BorderRadiusGenerator("border-radius"),
    new boxShadowGenerator_1.BoxShadowGenerator("box-shadow"),
    new backgroundColorGenerator_1.BackgroundColorGenerator("background-color", false),
    new colorGenerator_1.ColorGenerator("color", false),
    new cursorGenerator_1.CursorGenerator("cursor"),
    new displayGenerator_1.DisplayGenerator("display"),
    new flexDirectionGenerator_1.FlexDirectionGenerator("flex-direction"),
    new flexGrowGenerator_1.FlexGrowGenerator("flex-grow"),
    new flexShrinkGenerator_1.FlexShrinkGenerator("flex-shrink"),
    new flexWrapGenerator_1.FlexWrapGenerator("flex-wrap"),
    new floatGenerator_1.FloatGenerator("float"),
    new fontFamilyGenerator_1.FontFamilyGenerator("font-family"),
    new fontSizeGenerator_1.FontSizeGenerator("font-size"),
    new fontWeightGenerator_1.FontWeightGenerator("font-weight"),
    new heightGenerator_1.HeightGenerator("height"),
    new justifyContentGenerator_1.JustifyContentGenerator("justify-content"),
    new marginGenerator_1.MarginGenerator("margin"),
    new objectFitGenerator_1.ObjectFitGenerator("object-fit"),
    new opacityGenerator_1.OpacityGenerator("opacity"),
    new overflowGenerator_1.OverflowGenerator("overflow"),
    new paddingGenerator_1.PaddingGenerator("padding"),
    new positionGenerator_1.PositionGenerator("position"),
    new textAlignGenerator_1.TextAlignGenerator("text-align"),
    new textDecorationGenerator_1.TextDecorationGenerator("text-decoration"),
    new widthGenerator_1.WidthGenerator("width"),
    new whiteSpaceGenerator_1.WhiteSpaceGenerator("white-space"),
    new wordBreakGenerator_1.WordBreakGenerator("word-break"),
    new zIndexGenerator_1.ZIndexGenerator("z-index"),
];
Cssville.breakpoints = breakpoints_1.default.breakpoints;
Cssville.variables = [
    _a.breakpoints,
    fontFamily_1.default.vars,
    colors_1.default.colorsPalette,
    border_1.default.vars,
    shadow_1.default.vars,
];
Cssville.rootValues = new Map([
    ["font-family", fontFamily_1.default.primary],
    ["color", ui_1.default.text],
]);
