import { CssClassData } from "../data/cssClassData";
import { GeneratorBase } from "../GeneratorBase";
export declare class DisplayGenerator extends GeneratorBase {
    postfixValuesMap: Map<string, string[]>;
    list: string[];
    cssData: CssClassData[];
}
