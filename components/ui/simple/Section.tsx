import React from 'react';
import { SectionProps, SectionPropsKeys } from "../props/SectionProps";
import { buildSimpleComponent, splitPropsIntoGroups } from '../utils';
import { BasePropsKeys } from "../props/BaseProps";
import { SizePropsKeys } from "../props/SizeProps";

export const Section: React.FC<SectionProps> = (props) => {

  const { stackProps, baseProps, sizeProps, remainingProps } = splitPropsIntoGroups(props, {
    stackProps: SectionPropsKeys,
    baseProps: BasePropsKeys,
    sizeProps: SizePropsKeys
  });

  var section = buildSimpleComponent(baseProps, sizeProps, remainingProps, "div", [
    "dis-flex fle-dir-column pos-relative mar-x-auto wid-full box-siz-border-box",
    stackProps.fullWidth
      ? ""
      : ['max-wid-xs', 'max-wid-sm', 'max-wid-md', 'max-wid-lg', 'max-wid-xl'],
    stackProps.noPadding ? 'p-0' : ['pad-y-3', 'pad-y-4', 'pad-y-5', 'pad-y-6', 'pad-y-7'],
    stackProps.noPadding ? '' : ['pad-x-3', 'pad-x-4', 'pad-x-5', 'pad-x-6', 'pad-x-7'],
    stackProps.noPadding ? '' : ['lg-pad-x-2', 'lg-pad-x-3', 'lg-pad-x-4', 'lg-pad-x-5', 'lg-pad-x-6'],
    stackProps.noPadding ? '' : ['md-pad-x-1', 'md-pad-x-2', 'md-pad-x-3', 'md-pad-x-4', 'md-pad-x-5'],
    stackProps.itemsStart
      ? 'ali-ite-start'
      : stackProps.itemsCenter
        ? 'ali-ite-center'
        : stackProps.itemsEnd
          ? 'ali-ite-end'
          : 'ali-ite-start',
    stackProps.contentStart
      ? 'jus-con-start'
      : stackProps.contentCenter
        ? 'jus-con-center'
        : stackProps.contentEnd
          ? 'jus-con-end'
          : 'jus-con-start',
  ])
  return section;
};