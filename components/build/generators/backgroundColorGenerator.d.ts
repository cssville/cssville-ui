import { CssClassData } from "../data/cssClassData";
import { GeneratorBase } from "../GeneratorBase";
export declare class BackgroundColorGenerator extends GeneratorBase {
    postfixValuesMap: Map<string, string[]>;
    flatValues: string[];
    cssData: CssClassData[];
}
