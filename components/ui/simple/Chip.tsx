import React from 'react';
import { ChipProps } from "../props/ChipProps";
import { buildSimpleComponent, getValueByStyle } from '../utils';

export const Chip: React.FC<ChipProps> = (props) => {
  const outlineChipClasses = [
    getValueByStyle(props, ['color-primary', 'color-secondary', 'color-success', 'color-info', 'color-warning', 'color-error'], 'color-text'),
    getValueByStyle(props, ['bg-color-bg-primary', 'bg-color-bg-secondary', 'bg-color-bg-success', 'bg-color-bg-info', 'bg-color-bg-warning', 'bg-color-bg-error'], 'bg-color-grey-50'),
    getValueByStyle(props, ['border-color-border-primary', 'border-color-border-secondary', 'border-color-border-success', 'border-color-border-info', 'border-color-border-warning', 'border-color-border-error'], 'border-color-border'),
  ];
  const filledChipClasses = [
    'color-bg',
    getValueByStyle(props, ['bg-color-primary', 'bg-color-secondary', 'bg-color-success', 'bg-color-info', 'bg-color-warning', 'bg-color-error'], 'bg-color-text'),
    getValueByStyle(props, ['border-color-primary', 'border-color-secondary', 'border-color-success', 'border-color-info', 'border-color-warning', 'border-color-error'], 'border-color-bg'),
  ];

  const other = props.filled ? filledChipClasses
    : props.outline ? outlineChipClasses
      : outlineChipClasses;

  return buildSimpleComponent(props, "span", [], [
    "d-inline-block font-family-code text-decoration-none",
    ['fs-2xs', 'fs-xs', 'fs-sm', 'fs-md', 'fs-lg'],
    ['lh-2xs', 'lh-xs', 'lh-sm', 'lh-md', 'lh-lg'],
    ['py-0', 'py-1', 'py-1', 'py-2', 'py-3'],
    props.disabled ? 'opacity-05' : '',
    props.rounded
      ? 'br-9999px'
      : props.square ? 'br-0'
        : ['br-1', 'br-2', 'br-3', 'br-3', 'br-4'],
    props.rounded
      ? ['px-2', 'px-3', 'px-4', 'px-4', 'px-5']
      : ['px-2', 'px-2', 'px-3', 'px-3', 'px-4'],
    props.bold ? 'fw-bold' : 'fw-500',
    props.noBorder ? 'border-none' :
      props.filled ? 'border-none'
        : props.outline ? 'border-width-1px border-style-solid'
          : 'border-width-1px border-style-solid',
    ...other
  ])
};