export declare class CssClassData {
    constructor(className: string, cssProperties: string[], postfixArray: string[], postfixValuesMap?: Map<string, string[]>);
    className: string;
    cssProperties: string[];
    postfixValuesMap: Map<string, string[]>;
    private cssParts;
    getCss(prefix: string, classes: string[]): string;
}
