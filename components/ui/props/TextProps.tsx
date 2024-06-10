import { BaseProps } from "./BaseProps";


export interface TextProps extends BaseProps {
  bold?: boolean;
  noPadding?: boolean;
  centered?: boolean;
  dynamic?: boolean;
}

export const TextPropsKeys: (keyof TextProps)[] = ["bold", "noPadding", "centered", "dynamic"]
