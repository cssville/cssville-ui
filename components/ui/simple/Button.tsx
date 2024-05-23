import React from 'react';
import { ButtonProps } from "../props/ButtonProps";
import { buildSimpleComponent, getValueByStyle } from '../utils';
import { ButtonText } from './ButtonText';

export const Button: React.FC<ButtonProps> = (props) => {
  const outlineBtnClasses = [
    getValueByStyle(props, ['col-primary', 'col-secondary', 'col-success', 'col-info', 'col-warning', 'col-error'], 'col-text'),
    getValueByStyle(props, ['bac-col-bg-primary', 'bac-col-bg-secondary', 'bac-col-bg-success', 'bac-col-bg-info', 'bac-col-bg-warning', 'bac-col-bg-error'], 'bac-col-grey-50'),
    props.disabled
      ? ''
      : getValueByStyle(props, ['bac-col-hover-primary-hover', 'bac-col-hover-secondary-hover', 'bac-col-hover-success-hover', 'bac-col-hover-info-hover', 'bac-col-hover-warning-hover', 'bac-col-hover-error-hover'], 'bac-col-grey-100-hover'),
    getValueByStyle(props, ['bor-col-border-primary', 'bor-col-border-secondary', 'bor-col-border-success', 'bor-col-border-info', 'bor-col-border-warning', 'bor-col-border-error'], 'bor-col-border'),
  ];
  const filledBtnClasses = [
    'col-bg',
    getValueByStyle(props, ['bac-col-primary', 'bac-col-secondary', 'bac-col-success', 'bac-col-info', 'bac-col-warning', 'bac-col-error'], 'bac-col-text'),
    'opacity-09-hover',
    getValueByStyle(props, ['bor-col-primary', 'bor-col-secondary', 'bor-col-success', 'bor-col-info', 'bor-col-warning', 'bor-col-error'], 'bor-col-bg'),
  ];
  const otherBtnClasses = props.filled ? filledBtnClasses
    : props.outline ? outlineBtnClasses
      : outlineBtnClasses;

  const { buttonText, startIcon, endIcon, icon, tag, ...restProps } = props;

  const btn = buildSimpleComponent(restProps, tag || "button", [
    "dis-flex ali-ite-center jus-con-center tex-dec-none tex-wra-nowrap hei-min-content",
    ['pad-y-1', 'pad-y-2', 'pad-y-3', 'pad-y-4', 'pad-y-5'],
    ["gap-2px", "gap-4px", "gap-8px", "gap-12px", "gap-16px"],
    props.disabled ? 'opa-05 cur-default' : 'cur-pointer',
    props.noShadow ? 'box-sha-none' : ['box-sha-xs', 'box-sha-sm', 'box-sha-md', 'box-sha-lg', 'box-sha-xl'],
    props.rounded
      ? 'bor-rad-9999px'
      : props.square ? 'bor-rad-0'
        : ['bor-rad-2', 'bor-rad-3', 'bor-rad-4', 'bor-rad-5', 'bor-rad-5'],
    props.rounded
      ? ['pad-x-3', 'pad-x-4', 'pad-x-5', 'pad-x-6', 'pad-x-7']
      : ['pad-x-2', 'pad-x-3', 'pad-x-4', 'pad-x-5', 'pad-x-6'],
    props.bold ? 'fon-wei-bold' : 'fon-wei-500',
    props.noBorder ? 'bor-none' :
      props.filled ? 'bor-none'
        : props.outline ? 'bor-wid-1px bor-sty-solid'
          : 'bor-wid-1px bor-sty-solid',
    ...otherBtnClasses
  ])

  const buttonChildren = []
  if (startIcon || icon) {
    const iconWrapper = buildSimpleComponent(restProps, "span", [
      ['hei-12px', 'hei-16px', 'hei-24px', 'hei-32px', 'hei-40px'],
      ['wid-12px', 'wid-16px', 'wid-24px', 'wid-32px', 'wid-40px'],
    ], true)
    iconWrapper.props.children = icon ? icon : startIcon
    buttonChildren.push(iconWrapper)
  }

  const addText = props.notext === undefined ? true : props.notext

  if (addText)
    buttonChildren.push(buttonText ? buttonText : <ButtonText {...restProps}>{restProps.children}</ButtonText>)

  if (endIcon) {
    const iconWrapper = buildSimpleComponent(restProps, "span", [
      ['hei-12px', 'hei-16px', 'hei-24px', 'hei-32px', 'hei-40px'],
      ['wid-12px', 'wid-16px', 'wid-24px', 'wid-32px', 'wid-40px'],
    ], true)
    iconWrapper.props.children = endIcon
    buttonChildren.push(iconWrapper)
  }

  btn.props.children = buttonChildren;

  return btn;
};