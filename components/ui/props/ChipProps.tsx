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

export const ChipPropsKeys: (keyof ChipProps)[] = ["disabled", "rounded", "square", "noBorder", "outline", "filled", "bold"]
