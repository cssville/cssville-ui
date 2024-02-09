import { BaseProps } from "./BaseProps";


export interface StackProps extends BaseProps {
  noSpace?: boolean;
  //justify content
  contentStart?: boolean;
  contentEnd?: boolean;
  contentCenter?: boolean;
  row?: boolean;
  column?: boolean;
}
