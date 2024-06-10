import { BaseProps } from "./BaseProps";


export interface SectionProps extends BaseProps {
  fullWidth?: boolean;
  noPadding?: boolean;
  //justify content
  contentStart?: boolean;
  contentEnd?: boolean;
  contentCenter?: boolean;
  //align items
  itemsStart?: boolean;
  itemsEnd?: boolean;
  itemsCenter?: boolean;
}

export const SectionPropsKeys: (keyof SectionProps)[] = ["fullWidth", "noPadding", "contentStart", "contentCenter", "contentEnd", "itemsStart", "itemsCenter", "itemsEnd"]
