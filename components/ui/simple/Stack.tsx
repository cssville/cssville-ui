import React from 'react';
import { buildSimpleComponent } from '../utils';
import { StackProps } from '../props/StackProps';

export const Stack: React.FC<StackProps> = (props) => {
  var row = buildSimpleComponent(props, "div", [
    "d-flex w-12",
    props.row
      ? 'flex-direction-row'
      : props.column
        ? 'flex-direction-column'
        : 'flex-direction-row',
    props.noSpace
      ? 'gap-0'
      : ["gap-1", "gap-2", "gap-3", "gap-4", "gap-5"],
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