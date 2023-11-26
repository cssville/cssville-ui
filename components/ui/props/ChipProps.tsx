import { StyleProps } from "./StyleProps";


export interface ChipProps extends StyleProps {
  disabled?: boolean;
  rounded?: boolean;
  square?: boolean;
  noBorder?: boolean;
  //variants
  outline?: boolean;
  filled?: boolean;
  //text:
  bold?: boolean;
}
