import React from 'react';
import { DividerProps } from "../props/DividerProps";
import { buildSimpleComponent } from '../utils';

export const Divider: React.FC<DividerProps> = (props) => buildSimpleComponent(props, "div", [
  "wid-12",
  ['mar-y-2', 'mar-y-3', 'mar-y-4', 'mar-y-5', 'mar-y-6'],
  props.noBorder ? 'hei-1px bg-col-transparent' : 'border-bottom-1'
], true);