import React from 'react';
import { ButtonProps } from "../props/ButtonProps";
import { buildSimpleComponent, getValueByStyle } from '../utils';

export const ButtonText: React.FC<ButtonProps> = (props) => {
  const outlineTextClasses = [
    getValueByStyle(props, ['color-primary', 'color-secondary', 'color-success', 'color-info', 'color-warning', 'color-error'], 'color-text'),
  ];
  const filledTextClasses = [
    'color-bg',
  ];

  const otherTextClasses = props.filled ? filledTextClasses
    : props.outline ? outlineTextClasses
      : outlineTextClasses;

  var btnText = buildSimpleComponent(props, "span", [], [
    "text-decoration-none",
    ['fs-xs', 'fs-sm', 'fs-md', 'fs-lg', 'fs-xl'],
    ['lh-xs', 'lh-sm', 'lh-md', 'lh-lg', 'lh-xl'],
    props.bold ? 'fw-bold' : '',
    ...otherTextClasses
  ])

  return btnText;
};