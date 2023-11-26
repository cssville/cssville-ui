import { ReactElement } from "react";
import { StyleProps } from "./StyleProps";


export interface ButtonProps extends StyleProps {
  buttonText?: ReactElement;
  icon?: ReactElement;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  disabled?: boolean;
  rounded?: boolean;
  square?: boolean;
  noBorder?: boolean;
  noShadow?: boolean;
  //variants
  outline?: boolean;
  filled?: boolean;
  //text:
  bold?: boolean;
  notext?: boolean;
}
