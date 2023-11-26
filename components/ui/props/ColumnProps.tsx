import { BaseProps } from "./BaseProps";


export interface ColumnProps extends BaseProps {
  noSpace?: boolean;
  //justify content
  contentStart?: boolean;
  contentEnd?: boolean;
  contentCenter?: boolean;
}
