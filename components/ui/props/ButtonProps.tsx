import { ReactElement } from "react";
import { StyleProps } from "./StyleProps";


export interface ButtonProps extends StyleProps {
  buttonText?: ReactElement | string;
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
}

export const ButtonPropsKeys: (keyof ButtonProps)[] = ["buttonText", "icon", "startIcon", "endIcon", "disabled", "rounded", "square", "noBorder", "noShadow", "outline", "filled", "bold"]
