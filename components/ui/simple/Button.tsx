import React from 'react';
import { ButtonProps, ButtonPropsKeys } from "../props/ButtonProps";
import { buildSimpleComponent, getValueByStyle, splitPropsIntoGroups } from '../utils';
import { StylePropsKeys } from "../props/StyleProps";
import { BasePropsKeys } from "../props/BaseProps";
import { SizePropsKeys } from "../props/SizeProps";


export const Button: React.FC<ButtonProps> = (props) => {
  const { buttonProps, styleProps, baseProps, sizeProps, remainingProps } = splitPropsIntoGroups(props, {
    buttonProps: ButtonPropsKeys,
    styleProps: StylePropsKeys,
    baseProps: BasePropsKeys,
    sizeProps: SizePropsKeys
  });

  const buttonChildren: React.ReactNode[] = [];
  if (buttonProps.startIcon || buttonProps.icon) {
    const iconWrapper = buildSimpleComponent(null, sizeProps, buttonProps.icon ? buttonProps.icon.props : [], "span", [
      ['hei-12px', 'hei-16px', 'hei-24px', 'hei-32px', 'hei-40px'],
      ['wid-12px', 'wid-16px', 'wid-24px', 'wid-32px', 'wid-40px'],
    ], false, buttonProps.icon ? buttonProps.icon : buttonProps.startIcon, "btn-icon")
    buttonChildren.push(iconWrapper);
  }

  if (buttonProps.notext === undefined ? true : buttonProps.notext) {

    const outlineTextClasses = [
      getValueByStyle(remainingProps, ['col-primary', 'col-secondary', 'col-success', 'col-info', 'col-warning', 'col-error'], 'col-text'),
    ];
    const filledTextClasses = ['col-bg',];

    const otherTextClasses = buttonProps.filled ? filledTextClasses
      : buttonProps.outline ? outlineTextClasses
        : outlineTextClasses;

    var btnText = buildSimpleComponent(null, sizeProps, buttonProps.buttonText ? buttonProps.buttonText.props : [], "span", [
      "tex-dec-none",
      ['fon-siz-xs', 'fon-siz-sm', 'fon-siz-md', 'fon-siz-lg', 'fon-siz-xl'],
      ['lin-hei-xs', 'lin-hei-sm', 'lin-hei-md', 'lin-hei-lg', 'lin-hei-xl'],
      buttonProps.bold ? 'fon-wei-bold' : '',
      ...otherTextClasses
    ], false, remainingProps.children, "btn-text")

    buttonChildren.push(buttonProps.buttonText ? buttonProps.buttonText : btnText);
  }

  if (buttonProps.endIcon) {
    const endIconWrapper = buildSimpleComponent(null, sizeProps, buttonProps.endIcon.props, "span", [
      ['hei-12px', 'hei-16px', 'hei-24px', 'hei-32px', 'hei-40px'],
      ['wid-12px', 'wid-16px', 'wid-24px', 'wid-32px', 'wid-40px'],
    ], false, buttonProps.endIcon, "btn-end-icon")
    buttonChildren.push(endIconWrapper);
  }

  const outlineBtnClasses = [
    getValueByStyle(styleProps, ['col-primary', 'col-secondary', 'col-success', 'col-info', 'col-warning', 'col-error'], 'col-text'),
    getValueByStyle(styleProps, ['bac-col-bg-primary', 'bac-col-bg-secondary', 'bac-col-bg-success', 'bac-col-bg-info', 'bac-col-bg-warning', 'bac-col-bg-error'], 'bac-col-grey-50'),
    buttonProps.disabled
      ? ''
      : getValueByStyle(styleProps, ['bac-col-hover-primary-hover', 'bac-col-hover-secondary-hover', 'bac-col-hover-success-hover', 'bac-col-hover-info-hover', 'bac-col-hover-warning-hover', 'bac-col-hover-error-hover'], 'bac-col-grey-100-hover'),
    getValueByStyle(styleProps, ['bor-col-border-primary', 'bor-col-border-secondary', 'bor-col-border-success', 'bor-col-border-info', 'bor-col-border-warning', 'bor-col-border-error'], 'bor-col-border'),
  ];
  const filledBtnClasses = [
    'col-bg',
    getValueByStyle(styleProps, ['bac-col-primary', 'bac-col-secondary', 'bac-col-success', 'bac-col-info', 'bac-col-warning', 'bac-col-error'], 'bac-col-text'),
    buttonProps.disabled
      ? ''
      : 'opa-09-hover',
    getValueByStyle(styleProps, ['bor-col-primary', 'bor-col-secondary', 'bor-col-success', 'bor-col-info', 'bor-col-warning', 'bor-col-error'], 'bor-col-bg'),
  ];
  const otherBtnClasses = buttonProps.filled ? filledBtnClasses
    : buttonProps.outline ? outlineBtnClasses
      : outlineBtnClasses;

  return buildSimpleComponent(baseProps, sizeProps, remainingProps, baseProps.tag || "button", [
    "dis-flex ali-ite-center jus-con-center tex-dec-none tex-wra-nowrap hei-min-content",
    ['pad-y-1', 'pad-y-2', 'pad-y-3', 'pad-y-4', 'pad-y-5'],
    ["gap-2px", "gap-4px", "gap-8px", "gap-12px", "gap-16px"],
    buttonProps.disabled ? 'opa-05 cur-default' : 'cur-pointer',
    buttonProps.noShadow ? 'box-sha-none' : ['box-sha-xs', 'box-sha-sm', 'box-sha-md', 'box-sha-lg', 'box-sha-xl'],
    buttonProps.rounded
      ? 'bor-rad-9999px'
      : buttonProps.square ? 'bor-rad-0'
        : ['bor-rad-2', 'bor-rad-3', 'bor-rad-4', 'bor-rad-5', 'bor-rad-5'],
    buttonProps.rounded
      ? ['pad-x-3', 'pad-x-4', 'pad-x-5', 'pad-x-6', 'pad-x-7']
      : ['pad-x-2', 'pad-x-3', 'pad-x-4', 'pad-x-5', 'pad-x-6'],
    buttonProps.bold ? 'fon-wei-bold' : 'fon-wei-500',
    buttonProps.noBorder ? 'bor-none' :
      buttonProps.filled ? 'bor-none'
        : buttonProps.outline ? 'bor-wid-1px bor-sty-solid'
          : 'bor-wid-1px bor-sty-solid',
    ...otherBtnClasses
  ], false, buttonChildren);
};
