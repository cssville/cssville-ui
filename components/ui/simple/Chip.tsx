import React from 'react';
import { ChipProps } from "../props/ChipProps";
import { buildSimpleComponent, getValueByStyle } from '../utils';

export const Chip: React.FC<ChipProps> = (props) => {
  const outlineChipClasses = [
    getValueByStyle(props, ['col-primary', 'col-secondary', 'col-success', 'col-info', 'col-warning', 'col-error'], 'col-text'),
    getValueByStyle(props, ['bac-col-bg-primary', 'bac-col-bg-secondary', 'bac-col-bg-success', 'bac-col-bg-info', 'bac-col-bg-warning', 'bac-col-bg-error'], 'bac-col-grey-50'),
    getValueByStyle(props, ['bor-col-border-primary', 'bor-col-border-secondary', 'bor-col-border-success', 'bor-col-border-info', 'bor-col-border-warning', 'bor-col-border-error'], 'bor-col-border'),
  ];
  const filledChipClasses = [
    'col-bg',
    getValueByStyle(props, ['bac-col-primary', 'bac-col-secondary', 'bac-col-success', 'bac-col-info', 'bac-col-warning', 'bac-col-error'], 'bac-col-text'),
    getValueByStyle(props, ['bor-col-primary', 'bor-col-secondary', 'bor-col-success', 'bor-col-info', 'bor-col-warning', 'bor-col-error'], 'bor-col-bg'),
  ];

  const other = props.filled ? filledChipClasses
    : props.outline ? outlineChipClasses
      : outlineChipClasses;

  return buildSimpleComponent(props, "span", [
    "dis-inline-block fon-fam-code tex-dec-none",
    ['fon-siz-2xs', 'fon-siz-xs', 'fon-siz-sm', 'fon-siz-md', 'fon-siz-lg'],
    ['lin-hei-2xs', 'lin-hei-xs', 'lin-hei-sm', 'lin-hei-md', 'lin-hei-lg'],
    ['pad-y-0', 'pad-y-1', 'pad-y-1', 'pad-y-2', 'pad-y-3'],
    props.disabled ? 'opa-05' : '',
    props.rounded
      ? 'bor-rad-9999px'
      : props.square ? 'bor-rad-0'
        : ['bor-rad-1', 'bor-rad-2', 'bor-rad-3', 'bor-rad-3', 'bor-rad-4'],
    props.rounded
      ? ['pad-x-2', 'pad-x-3', 'pad-x-4', 'pad-x-4', 'pad-x-5']
      : ['pad-x-2', 'pad-x-2', 'pad-x-3', 'pad-x-3', 'pad-x-4'],
    props.bold ? 'fon-wei-bold' : 'fon-wei-500',
    props.noBorder ? 'bor-none' :
      props.filled ? 'bor-none'
        : props.outline ? 'bor-wid-1px bor-sty-solid'
          : 'bor-wid-1px bor-sty-solid',
    ...other
  ])
};