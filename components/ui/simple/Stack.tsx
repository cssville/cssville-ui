import React from 'react';
import { buildSimpleComponent } from '../utils';
import { StackProps } from '../props/StackProps';

export const Stack: React.FC<StackProps> = (props) => {
  var row = buildSimpleComponent(props, "div", [
    "d-flex w-12 box-sizing-border-box",
    props.row
      ? 'flex-direction-row'
      : props.column
        ? 'flex-direction-column'
        : 'flex-direction-column',
    props.noGap
      ? 'gap-0px'
      : ["gap-8px", "gap-16px", "gap-24px", "gap-32px", "gap-48px"],
    props.contentStart
      ? 'justify-content-start'
      : props.contentCenter
        ? 'justify-content-center'
        : props.contentEnd
          ? 'justify-content-end'
          : 'justify-content-start',
    props.itemsStart
      ? 'align-items-start'
      : props.itemsCenter
        ? 'align-items-center'
        : props.itemsEnd
          ? 'align-items-end'
          : 'align-items-start',
    props.flexWrap ? 'flex-wrap-wrap' :
      props.noFlexWrap ? 'flex-wrap-nowrap' : ''
  ])

  return row;
};