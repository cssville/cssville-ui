import React from 'react';
import { buildSimpleComponent } from '../utils';
import { StackProps } from '../props/StackProps';

export const Stack: React.FC<StackProps> = (props) => {
  var row = buildSimpleComponent(props, "div", [
    "dis-flex box-siz-border-box",
    props.fullWidth ? "wid-12" : "",
    props.row
      ? 'fle-dir-row'
      : props.column
        ? 'fle-dir-column'
        : 'fle-dir-column',
    props.noGap
      ? 'gap-0px'
      : ["gap-8px", "gap-16px", "gap-24px", "gap-32px", "gap-48px"],
    props.contentStart
      ? 'jus-con-start'
      : props.contentCenter
        ? 'jus-con-center'
        : props.contentEnd
          ? 'jus-con-end'
          : 'jus-con-start',
    props.itemsStart
      ? 'ali-ite-start'
      : props.itemsCenter
        ? 'ali-ite-center'
        : props.itemsEnd
          ? 'ali-ite-end'
          : 'ali-ite-start',
    props.flexWrap ? 'fle-wra-wrap' :
      props.noFlexWrap ? 'fle-wra-nowrap' : ''
  ])

  return row;
};