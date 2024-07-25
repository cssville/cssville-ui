import React from 'react';
import { ChipProps, ChipPropsKeys } from "../props/ChipProps";
import { buildSimpleComponent, getValueByStyle, splitPropsIntoGroups } from '../utils';
import { StylePropsKeys } from "../props/StyleProps";
import { BasePropsKeys } from "../props/BaseProps";
import { SizePropsKeys } from "../props/SizeProps";

export const Chip: React.FC<ChipProps> = (props) => {

  const { chipProps, styleProps, baseProps, sizeProps, remainingProps } = splitPropsIntoGroups(props, {
    chipProps: ChipPropsKeys,
    styleProps: StylePropsKeys,
    baseProps: BasePropsKeys,
    sizeProps: SizePropsKeys
  });

  const outlineChipClasses = [
    getValueByStyle(styleProps, ['col-primary', 'col-secondary', 'col-success', 'col-info', 'col-warning', 'col-error'], 'col-text'),
    getValueByStyle(styleProps, ['bac-col-bg-primary', 'bac-col-bg-secondary', 'bac-col-bg-success', 'bac-col-bg-info', 'bac-col-bg-warning', 'bac-col-bg-error'], 'bac-col-grey-50'),
    getValueByStyle(styleProps, ['bor-col-border-primary', 'bor-col-border-secondary', 'bor-col-border-success', 'bor-col-border-info', 'bor-col-border-warning', 'bor-col-border-error'], 'bor-col-border'),
  ];
  const filledChipClasses = [
    'col-bg',
    getValueByStyle(styleProps, ['bac-col-primary', 'bac-col-secondary', 'bac-col-success', 'bac-col-info', 'bac-col-warning', 'bac-col-error'], 'bac-col-text'),
    getValueByStyle(styleProps, ['bor-col-primary', 'bor-col-secondary', 'bor-col-success', 'bor-col-info', 'bor-col-warning', 'bor-col-error'], 'bor-col-bg'),
  ];

  const other = chipProps.filled ? filledChipClasses
    : chipProps.outline ? outlineChipClasses
      : outlineChipClasses;

  return buildSimpleComponent(baseProps, sizeProps, remainingProps, "span", [
    "dis-inline-block fon-fam-code tex-dec-none",
    ['fon-siz-2xs', 'fon-siz-xs', 'fon-siz-sm', 'fon-siz-md', 'fon-siz-lg'],
    ['lin-hei-2xs', 'lin-hei-xs', 'lin-hei-sm', 'lin-hei-md', 'lin-hei-lg'],
    ['pad-y-1', 'pad-y-2', 'pad-y-2', 'pad-y-3', 'pad-y-4'],
    chipProps.disabled ? 'opa-05' : '',
    chipProps.rounded
      ? 'bor-rad-max'
      : chipProps.square ? 'bor-rad-0'
        : ['bor-rad-2', 'bor-rad-3', 'bor-rad-4', 'bor-rad-4', 'bor-rad-5'],
    chipProps.rounded
      ? ['pad-x-3', 'pad-x-4', 'pad-x-5', 'pad-x-5', 'pad-x-6']
      : ['pad-x-3', 'pad-x-3', 'pad-x-4', 'pad-x-4', 'pad-x-5'],
    chipProps.bold ? 'fon-wei-bold' : 'fon-wei-500',
    chipProps.noBorder ? 'bor-none' :
      chipProps.filled ? 'bor-none'
        : chipProps.outline ? 'bor-wid-1 bor-sty-solid'
          : 'bor-wid-1 bor-sty-solid',
    ...other
  ])
};