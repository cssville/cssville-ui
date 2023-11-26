import { IVar } from "../../IVar";
import { ColorBase } from "./ColorBase";
export default class ColorCollection {
    constructor(colorName: string, hexValue: string[]);
    colors: ColorBase[];
    vars: IVar[];
}
