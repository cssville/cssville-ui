export interface SizeProps {
  xs?: boolean;
  sm?: boolean;
  md?: boolean;
  lg?: boolean;
  xl?: boolean;
}

export const SizePropsKeys: (keyof SizeProps)[] = ["xs", "sm", "md", "lg", "xl"]
