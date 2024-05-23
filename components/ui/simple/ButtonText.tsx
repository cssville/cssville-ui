import React from 'react';
import { ButtonProps } from "../props/ButtonProps";
import { buildSimpleComponent, getValueByStyle } from '../utils';

export const ButtonText: React.FC<ButtonProps> = (props) => {
  const outlineTextClasses = [
    getValueByStyle(props, ['col-primary', 'col-secondary', 'col-success', 'col-info', 'col-warning', 'col-error'], 'col-text'),
  ];
  const filledTextClasses = [
    'col-bg',
  ];

  const otherTextClasses = props.filled ? filledTextClasses
    : props.outline ? outlineTextClasses
      : outlineTextClasses;

  var btnText = buildSimpleComponent(props, "span", [
    "tex-dec-none",
    ['fon-siz-xs', 'fon-siz-sm', 'fon-siz-md', 'fon-siz-lg', 'fon-siz-xl'],
    ['lin-hei-xs', 'lin-hei-sm', 'lin-hei-md', 'lin-hei-lg', 'lin-hei-xl'],
    props.bold ? 'fon-wei-bold' : '',
    ...otherTextClasses
  ])

  return btnText;
};