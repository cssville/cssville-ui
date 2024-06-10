import { BaseProps } from "./BaseProps";


export interface StyleProps extends BaseProps {
  primary?: boolean;
  secondary?: boolean;
  success?: boolean;
  info?: boolean;
  warning?: boolean;
  error?: boolean;
}

export const StylePropsKeys: (keyof StyleProps)[] = ["primary", "secondary", "success", "info", "warning", "error"]
