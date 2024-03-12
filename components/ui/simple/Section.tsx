import React from 'react';
import { SectionProps } from "../props/SectionProps";
import { buildSimpleComponent } from '../utils';

export const Section: React.FC<SectionProps> = (props) => buildSimpleComponent(props, "div", [
  "d-flex flex-direction-column position-relative mx-auto w-12 box-sizing-border-box",
  props.fullWidth
    ? ""
    : ['max-w-xs', 'max-w-sm', 'max-w-md', 'max-w-lg', 'max-w-xl'],
  props.noPadding ? 'p-0' : ['py-3', 'py-4', 'py-5', 'py-6', 'py-7'],
  props.noPadding ? '' : ['px-3', 'px-4', 'px-5', 'px-6', 'px-7'],
  props.noPadding ? '' : ['lg-px-2', 'lg-px-3', 'lg-px-4', 'lg-px-5', 'lg-px-6'],
  props.noPadding ? '' : ['md-px-1', 'md-px-2', 'md-px-3', 'md-px-4', 'md-px-5'],
  props.itemsStart
    ? 'align-items-start'
    : props.itemsCenter
      ? 'align-items-center'
      : props.itemsEnd
        ? 'align-items-end'
        : 'align-items-start',
  props.contentStart
    ? 'justify-content-start'
    : props.contentCenter
      ? 'justify-content-center'
      : props.contentEnd
        ? 'justify-content-end'
        : 'justify-content-start',
]);