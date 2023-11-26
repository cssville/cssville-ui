import { SizeProps } from "./SizeProps";


export interface BaseProps extends React.HTMLProps<HTMLElement>, SizeProps {
  tag?: React.ElementType | string;
}
