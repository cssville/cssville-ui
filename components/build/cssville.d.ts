import { IGenerator } from "./IGenerator";
import { IVar } from "./IVar";
export declare class Cssville {
    static generators: IGenerator[];
    static breakpoints: IVar[];
    static variables: IVar[][];
    static rootValues: Map<string, IVar>;
    static getCss(classes?: string[]): string;
}
