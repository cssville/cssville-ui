import React from 'react';
import { SectionProps } from "../props/SectionProps";
import { buildSimpleComponent } from '../utils';

export const Section: React.FC<SectionProps> = (props) => buildSimpleComponent(props, "div", [
  "dis-flex fle-dir-column pos-relative mar-x-auto wid-12 box-siz-border-box",
  props.fullWidth
    ? ""
    : ['max-w-xs', 'max-w-sm', 'max-w-md', 'max-w-lg', 'max-w-xl'],
  props.noPadding ? 'p-0' : ['pad-y-3', 'pad-y-4', 'pad-y-5', 'pad-y-6', 'pad-y-7'],
  props.noPadding ? '' : ['pad-x-3', 'pad-x-4', 'pad-x-5', 'pad-x-6', 'pad-x-7'],
  props.noPadding ? '' : ['lg-pad-x-2', 'lg-pad-x-3', 'lg-pad-x-4', 'lg-pad-x-5', 'lg-pad-x-6'],
  props.noPadding ? '' : ['md-pad-x-1', 'md-pad-x-2', 'md-pad-x-3', 'md-pad-x-4', 'md-pad-x-5'],
  props.itemsStart
    ? 'ali-ite-start'
    : props.itemsCenter
      ? 'ali-ite-center'
      : props.itemsEnd
        ? 'ali-ite-end'
        : 'ali-ite-start',
  props.contentStart
    ? 'jus-con-start'
    : props.contentCenter
      ? 'jus-con-center'
      : props.contentEnd
        ? 'jus-con-end'
        : 'jus-con-start',
]);