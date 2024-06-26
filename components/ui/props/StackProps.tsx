import { BaseProps } from "./BaseProps";


export interface StackProps extends BaseProps {
  noGap?: boolean;
  fullWidth?: boolean;
  //flex-wrap
  flexWrap?: boolean;
  noFlexWrap?: boolean;
  //justify content
  contentStart?: boolean;
  contentEnd?: boolean;
  contentCenter?: boolean;
  //align items
  itemsStart?: boolean;
  itemsEnd?: boolean;
  itemsCenter?: boolean;
  //layout
  row?: boolean;
  column?: boolean;
}

export const StackPropsKeys: (keyof StackProps)[] = ["noGap", "fullWidth", "flexWrap", "noFlexWrap", "contentStart", "contentCenter", "contentEnd", "itemsStart", "itemsCenter", "itemsEnd", "row", "column"]
