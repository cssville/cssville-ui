import { IVar } from "./IVar";
export declare class VarBase implements IVar {
    constructor(category: string, name: string, value: string);
    category: string;
    name: string;
    value: string;
    varName: string;
    var: string;
    css: string;
    postfixValue: [string, string[]];
}
