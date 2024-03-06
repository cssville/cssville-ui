import { BaseProps } from "./BaseProps";


export interface StackProps extends BaseProps {
  noSpace?: boolean;
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
  row?: boolean;
  column?: boolean;
}
