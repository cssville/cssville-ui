import { BaseProps } from "./BaseProps";


export interface RowProps extends BaseProps {
  noSpace?: boolean;
  //justify content
  contentStart?: boolean;
  contentEnd?: boolean;
  contentCenter?: boolean;
}
