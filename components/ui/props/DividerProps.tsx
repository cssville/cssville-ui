import { BaseProps } from "./BaseProps";


export interface DividerProps extends BaseProps {
  noBorder?: boolean;
}

export const DividerPropsKeys: (keyof DividerProps)[] = ["noBorder"]
