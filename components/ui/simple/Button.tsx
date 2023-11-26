import React from 'react';
import { ButtonProps } from "../props/ButtonProps";
import { buildSimpleComponent, getValueByStyle } from '../utils';
import { ButtonText } from './ButtonText';
import { Spacer } from './Spacer';

export const Button: React.FC<ButtonProps> = (props) => {
  const outlineBtnClasses = [
    getValueByStyle(props, ['color-primary', 'color-secondary', 'color-success', 'color-info', 'color-warning', 'color-error'], 'color-text'),
    getValueByStyle(props, ['bg-color-bg-primary', 'bg-color-bg-secondary', 'bg-color-bg-success', 'bg-color-bg-info', 'bg-color-bg-warning', 'bg-color-bg-error'], 'bg-color-grey-50'),
    props.disabled
      ? ''
      : getValueByStyle(props, ['bg-color-hover-primary-hover', 'bg-color-hover-secondary-hover', 'bg-color-hover-success-hover', 'bg-color-hover-info-hover', 'bg-color-hover-warning-hover', 'bg-color-hover-error-hover'], 'bg-color-grey-100-hover'),
    getValueByStyle(props, ['border-color-border-primary', 'border-color-border-secondary', 'border-color-border-success', 'border-color-border-info', 'border-color-border-warning', 'border-color-border-error'], 'border-color-border'),
  ];
  const filledBtnClasses = [
    'color-bg',
    getValueByStyle(props, ['bg-color-primary', 'bg-color-secondary', 'bg-color-success', 'bg-color-info', 'bg-color-warning', 'bg-color-error'], 'bg-color-text'),
    'opacity-09-hover',
    getValueByStyle(props, ['border-color-primary', 'border-color-secondary', 'border-color-success', 'border-color-info', 'border-color-warning', 'border-color-error'], 'border-color-bg'),
  ];
  const otherBtnClasses = props.filled ? filledBtnClasses
    : props.outline ? outlineBtnClasses
      : outlineBtnClasses;

  const { buttonText, startIcon, endIcon, icon, ...restProps } = props;

  const btn = buildSimpleComponent(restProps, "button", [], [
    "d-flex align-items-center justify-content-center text-decoration-none text-wrap-nowrap h-min-content",
    ['py-1', 'py-2', 'py-3', 'py-4', 'py-5'],
    props.disabled ? 'opacity-05 cursor-default' : 'cursor-pointer',
    props.noShadow ? 'box-shadow-none' : ['box-shadow-xs', 'box-shadow-sm', 'box-shadow-md', 'box-shadow-lg', 'box-shadow-xl'],
    props.rounded
      ? 'br-9999px'
      : props.square ? 'br-0'
        : ['br-2', 'br-3', 'br-4', 'br-5', 'br-5'],
    props.rounded
      ? ['px-3', 'px-4', 'px-5', 'px-6', 'px-7']
      : ['px-2', 'px-3', 'px-4', 'px-5', 'px-6'],
    props.bold ? 'fw-bold' : 'fw-500',
    props.noBorder ? 'border-none' :
      props.filled ? 'border-none'
        : props.outline ? 'border-width-1px border-style-solid'
          : 'border-width-1px border-style-solid',
    ...otherBtnClasses
  ])

  const buttonChildren = []
  if (startIcon || icon) {
    const iconWrapper = buildSimpleComponent(restProps, "span", [], [
      ['h-12px', 'h-16px', 'h-24px', 'h-32px', 'h-40px'],
      ['w-12px', 'w-16px', 'w-24px', 'w-32px', 'w-40px'],
    ], true)
    iconWrapper.props.children = icon ? icon : startIcon
    buttonChildren.push(iconWrapper)
    buttonChildren.push(<Spacer {...restProps} />)
  }

  const addText = props.notext === undefined ? true : props.notext

  if (addText)
    buttonChildren.push(buttonText ? buttonText : <ButtonText {...restProps}>{restProps.children}</ButtonText>)

  if (endIcon) {
    const iconWrapper = buildSimpleComponent(restProps, "span", [], [
      ['h-12px', 'h-16px', 'h-24px', 'h-32px', 'h-40px'],
      ['w-12px', 'w-16px', 'w-24px', 'w-32px', 'w-40px'],
    ], true)
    iconWrapper.props.children = endIcon
    buttonChildren.push(<Spacer {...restProps} />)
    buttonChildren.push(iconWrapper)
  }

  btn.props.children = buttonChildren;

  return btn;
};