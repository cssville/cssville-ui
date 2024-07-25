import React from 'react';
import { TextProps, TextPropsKeys } from "../props/TextProps";
import { buildSimpleComponent, splitPropsIntoGroups } from '../utils';
import { BasePropsKeys } from "../props/BaseProps";
import { SizePropsKeys } from "../props/SizeProps";

const commonTextClasses = (props: TextProps, boldByDefault: boolean = false) => {
  return [
    "mar-0 col-text fon-fam-primary",
    props.bold == null && boldByDefault || props.bold ? 'fon-wei-bold' : 'fon-wei-normal',
    props.centered ? 'tex-ali-center' : ''
  ];
};

export const Display: React.FC<TextProps> = (props) => {
  const { textProps, baseProps, sizeProps, remainingProps } = splitPropsIntoGroups(props, {
    textProps: TextPropsKeys,
    baseProps: BasePropsKeys,
    sizeProps: SizePropsKeys
  });
  return buildSimpleComponent(baseProps, sizeProps, remainingProps, "h1", [
    ...commonTextClasses(textProps, true),
    ['fon-siz-4xl', 'fon-siz-5xl', 'fon-siz-6xl', 'fon-siz-7xl', 'fon-siz-8xl'],
    ['lin-hei-4xl', 'lin-hei-5xl', 'lin-hei-6xl', 'lin-hei-7xl', 'lin-hei-8xl'],
    textProps.dynamic ? ['md-fon-siz-3xl', 'md-fon-siz-4xl', 'md-fon-siz-5xl', 'md-fon-siz-6xl', 'md-fon-siz-7xl'] : [],
    textProps.dynamic ? ['md-lin-hei-3xl', 'md-lin-hei-4xl', 'md-lin-hei-5xl', 'md-lin-hei-6xl', 'md-lin-hei-7xl'] : [],
    textProps.dynamic ? ['sm-fon-siz-2xl', 'sm-fon-siz-3xl', 'sm-fon-siz-4xl', 'sm-fon-siz-5xl', 'sm-fon-siz-6xl'] : [],
    textProps.dynamic ? ['sm-lin-hei-2xl', 'sm-lin-hei-3xl', 'sm-lin-hei-4xl', 'sm-lin-hei-5xl', 'sm-lin-hei-6xl'] : [],
    textProps.noPadding ? 'pad-y-0' : ["pad-y-5", "pad-y-6", "pad-y-7", "pad-y-8", "pad-y-9"]
  ]);
}

export const Headline: React.FC<TextProps> = (props) => {
  const { textProps, baseProps, sizeProps, remainingProps } = splitPropsIntoGroups(props, {
    textProps: TextPropsKeys,
    baseProps: BasePropsKeys,
    sizeProps: SizePropsKeys
  });
  return buildSimpleComponent(baseProps, sizeProps, remainingProps, "h2", [
    ...commonTextClasses(textProps, true),
    ['fon-siz-xl', 'fon-siz-2xl', 'fon-siz-3xl', 'fon-siz-4xl', 'fon-siz-5xl'],
    ['lin-hei-xl', 'lin-hei-2xl', 'lin-hei-3xl', 'lin-hei-4xl', 'lin-hei-5xl'],
    textProps.dynamic ? ['md-fon-siz-lg', 'md-fon-siz-xl', 'md-fon-siz-2xl', 'md-fon-siz-3xl', 'md-fon-siz-4xl'] : [],
    textProps.dynamic ? ['md-lin-hei-lg', 'md-lin-hei-xl', 'md-lin-hei-2xl', 'md-lin-hei-3xl', 'md-lin-hei-4xl'] : [],
    textProps.dynamic ? ['sm-fon-siz-md', 'sm-fon-siz-lg', 'sm-fon-siz-xl', 'sm-fon-siz-2xl', 'sm-fon-siz-3xl'] : [],
    textProps.dynamic ? ['sm-lin-hei-md', 'sm-lin-hei-lg', 'sm-lin-hei-xl', 'sm-lin-hei-2xl', 'sm-lin-hei-3xl'] : [],
    textProps.noPadding ? 'pad-y-0' : ["pad-y-3", "pad-y-4", "pad-y-5", "pad-y-6", "pad-y-7"]
  ]);
}

export const Title: React.FC<TextProps> = (props) => {
  const { textProps, baseProps, sizeProps, remainingProps } = splitPropsIntoGroups(props, {
    textProps: TextPropsKeys,
    baseProps: BasePropsKeys,
    sizeProps: SizePropsKeys
  });
  return buildSimpleComponent(baseProps, sizeProps, remainingProps, "h3", [
    ...commonTextClasses(textProps),
    ['fon-siz-xs', 'fon-siz-sm', 'fon-siz-md', 'fon-siz-xl', 'fon-siz-2xl'],
    ['lin-hei-xs', 'lin-hei-sm', 'lin-hei-md', 'lin-hei-xl', 'lin-hei-2xl'],
    textProps.dynamic ? ['md-fon-siz-2xs', 'md-fon-siz-xs', 'md-fon-siz-sm', 'md-fon-siz-lg', 'md-fon-siz-xl'] : [],
    textProps.dynamic ? ['md-lin-hei-2xs', 'md-lin-hei-xs', 'md-lin-hei-sm', 'md-lin-hei-lg', 'md-lin-hei-xl'] : [],
    textProps.dynamic ? ['sm-fon-siz-3xs', 'sm-fon-siz-2xs', 'sm-fon-siz-xs', 'sm-fon-siz-md', 'sm-fon-siz-lg'] : [],
    textProps.dynamic ? ['sm-lin-hei-3xs', 'sm-lin-hei-2xs', 'sm-lin-hei-xs', 'sm-lin-hei-md', 'sm-lin-hei-lg'] : [],
    textProps.noPadding ? 'pad-y-0' : ["pad-y-2", "pad-y-3", "pad-y-4", "pad-y-5", "pad-y-6"]
  ]);
}

export const Label: React.FC<TextProps> = (props) => {
  const { textProps, baseProps, sizeProps, remainingProps } = splitPropsIntoGroups(props, {
    textProps: TextPropsKeys,
    baseProps: BasePropsKeys,
    sizeProps: SizePropsKeys
  });
  return buildSimpleComponent(baseProps, sizeProps, remainingProps, "label", [
    ...commonTextClasses(textProps),
    ['fon-siz-3xs', 'fon-siz-2xs', 'fon-siz-xs', 'fon-siz-sm', 'fon-siz-md'],
    ['lin-hei-3xs', 'lin-hei-2xs', 'lin-hei-xs', 'lin-hei-sm', 'lin-hei-md'],
    textProps.noPadding ? 'pad-y-0' : ["pad-y-2", "pad-y-3", "pad-y-3", "pad-y-4", "pad-y-4"]
  ]);
}

export const Text: React.FC<TextProps> = (props) => {
  const { textProps, baseProps, sizeProps, remainingProps } = splitPropsIntoGroups(props, {
    textProps: TextPropsKeys,
    baseProps: BasePropsKeys,
    sizeProps: SizePropsKeys
  });
  return buildSimpleComponent(baseProps, sizeProps, remainingProps, "p", [
    ...commonTextClasses(textProps),
    ['fon-siz-2xs', 'fon-siz-xs', 'fon-siz-sm', 'fon-siz-md', 'fon-siz-lg'],
    ['lin-hei-2xs', 'lin-hei-xs', 'lin-hei-sm', 'lin-hei-md', 'lin-hei-lg'],
    textProps.noPadding ? 'pad-y-0' : ["pad-y-2", "pad-y-3", "pad-y-4", "pad-y-5", "pad-y-6"]
  ]);
}
