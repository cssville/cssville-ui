import React from 'react';
import { DividerProps, DividerPropsKeys } from "../props/DividerProps";
import { buildSimpleComponent, splitPropsIntoGroups } from '../utils';
import { BasePropsKeys } from "../props/BaseProps";
import { SizePropsKeys } from "../props/SizeProps";

export const Divider: React.FC<DividerProps> = (props) => {
  
  const { dividerProps, baseProps, sizeProps, remainingProps } = splitPropsIntoGroups(props, {
    dividerProps: DividerPropsKeys,
    baseProps: BasePropsKeys,
    sizeProps: SizePropsKeys
  });

  return buildSimpleComponent(baseProps, sizeProps, remainingProps, "div", [
    "wid-full",
    ['mar-y-3', 'mar-y-4', 'mar-y-5', 'mar-y-6', 'mar-y-7'],
    dividerProps.noBorder ? 'hei-1px bg-col-transparent' : 'border-bottom-1'
  ], true);
}