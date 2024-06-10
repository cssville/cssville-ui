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
    stackProps.fullWidth ? "wid-12" : "",
    stackProps.row
      ? 'fle-dir-row'
      : stackProps.column
        ? 'fle-dir-column'
        : 'fle-dir-column',
    stackProps.noGap
      ? 'gap-0px'
      : ["gap-8px", "gap-16px", "gap-24px", "gap-32px", "gap-48px"],
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