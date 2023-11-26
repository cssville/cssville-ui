import { BaseProps } from "./BaseProps";


export interface SectionProps extends BaseProps {
  fullWidth?: boolean;
  noPadding?: boolean;
  //justify content
  contentStart?: boolean;
  contentEnd?: boolean;
  contentCenter?: boolean;
}
