import React from 'react';
import { buildSimpleComponent, getValueByStyle, splitPropsIntoGroups } from '../utils';
import { StackProps } from '../props/StackProps';
import { StackPropsKeys } from "../props/StackProps";
import { BasePropsKeys } from "../props/BaseProps";
import { SizePropsKeys } from "../props/SizeProps";

export const Stack: React.FC<StackProps> = (props) => {

  const { stackProps, baseProps, sizeProps, remainingProps } = splitPropsIntoGroups(props, {
    stackProps: StackPropsKeys,
    baseProps: BasePropsKeys,
    sizeProps: SizePropsKeys
  });

  var row = buildSimpleComponent(baseProps, sizeProps, remainingProps, "div", [
    "dis-flex box-siz-border-box",
    stackProps.fullWidth ? "wid-full" : "",
    stackProps.row
      ? 'fle-dir-row'
      : stackProps.column
        ? 'fle-dir-column'
        : 'fle-dir-column',
    stackProps.noGap
      ? ''
      : ["gap-5", "gap-6", "gap-7", "gap-8", "gap-9"],
    stackProps.contentStart
      ? 'jus-con-start'
      : stackProps.contentCenter
        ? 'jus-con-center'
        : stackProps.contentEnd
          ? 'jus-con-end'
          : 'jus-con-start',
    stackProps.itemsStart
      ? 'ali-ite-start'
      : stackProps.itemsCenter
        ? 'ali-ite-center'
        : stackProps.itemsEnd
          ? 'ali-ite-end'
          : 'ali-ite-start',
    stackProps.flexWrap ? 'fle-wra-wrap' :
      stackProps.noFlexWrap ? 'fle-wra-nowrap' : ''
  ])

  return row;
};