import React from 'react';
import { TextProps } from "../props/TextProps";
import { buildSimpleComponent } from '../utils';

const commonTextClasses = (props: TextProps, boldByDefault: boolean = false) => {
  return [
    "mar-0 col-text fon-fam-primary",
    props.bold == null && boldByDefault || props.bold ? 'fon-wei-bold' : 'fon-wei-normal',
    props.centered ? 'tex-ali-center' : ''
  ];
};

export const Display: React.FC<TextProps> = (props) => buildSimpleComponent(props, "h1", [
  ...commonTextClasses(props, true),
  ['fon-siz-4xl', 'fon-siz-5xl', 'fon-siz-6xl', 'fon-siz-7xl', 'fon-siz-8xl'],
  ['lin-hei-4xl', 'lin-hei-5xl', 'lin-hei-6xl', 'lin-hei-7xl', 'lin-hei-8xl'],
  props.dynamic ? ['md-fon-siz-3xl', 'md-fon-siz-4xl', 'md-fon-siz-5xl', 'md-fon-siz-6xl', 'md-fon-siz-7xl'] : [],
  props.dynamic ? ['md-lin-hei-3xl', 'md-lin-hei-4xl', 'md-lin-hei-5xl', 'md-lin-hei-6xl', 'md-lin-hei-7xl'] : [],
  props.dynamic ? ['sm-fon-siz-2xl', 'sm-fon-siz-3xl', 'sm-fon-siz-4xl', 'sm-fon-siz-5xl', 'sm-fon-siz-6xl'] : [],
  props.dynamic ? ['sm-lin-hei-2xl', 'sm-lin-hei-3xl', 'sm-lin-hei-4xl', 'sm-lin-hei-5xl', 'sm-lin-hei-6xl'] : [],
  props.noPadding ? 'pad-y-0' : ["pad-y-4", "pad-y-5", "pad-y-6", "pad-y-7", "pad-y-8"]
]);

export const Headline: React.FC<TextProps> = (props) => buildSimpleComponent(props, "h2", [
  ...commonTextClasses(props, true),
  ['fon-siz-xl', 'fon-siz-2xl', 'fon-siz-3xl', 'fon-siz-4xl', 'fon-siz-5xl'],
  ['lin-hei-xl', 'lin-hei-2xl', 'lin-hei-3xl', 'lin-hei-4xl', 'lin-hei-5xl'],
  props.dynamic ? ['md-fon-siz-lg', 'md-fon-siz-xl', 'md-fon-siz-2xl', 'md-fon-siz-3xl', 'md-fon-siz-4xl'] : [],
  props.dynamic ? ['md-lin-hei-lg', 'md-lin-hei-xl', 'md-lin-hei-2xl', 'md-lin-hei-3xl', 'md-lin-hei-4xl'] : [],
  props.dynamic ? ['sm-fon-siz-md', 'sm-fon-siz-lg', 'sm-fon-siz-xl', 'sm-fon-siz-2xl', 'sm-fon-siz-3xl'] : [],
  props.dynamic ? ['sm-lin-hei-md', 'sm-lin-hei-lg', 'sm-lin-hei-xl', 'sm-lin-hei-2xl', 'sm-lin-hei-3xl'] : [],
  props.noPadding ? 'pad-y-0' : ["pad-y-2", "pad-y-3", "pad-y-4", "pad-y-5", "pad-y-6"]
]);

export const Title: React.FC<TextProps> = (props) => buildSimpleComponent(props, "h3", [
  ...commonTextClasses(props),
  ['fon-siz-xs', 'fon-siz-sm', 'fon-siz-md', 'fon-siz-xl', 'fon-siz-2xl'],
  ['lin-hei-xs', 'lin-hei-sm', 'lin-hei-md', 'lin-hei-xl', 'lin-hei-2xl'],
  props.dynamic ? ['md-fon-siz-2xs', 'md-fon-siz-xs', 'md-fon-siz-sm', 'md-fon-siz-lg', 'md-fon-siz-xl'] : [],
  props.dynamic ? ['md-lin-hei-2xs', 'md-lin-hei-xs', 'md-lin-hei-sm', 'md-lin-hei-lg', 'md-lin-hei-xl'] : [],
  props.dynamic ? ['sm-fon-siz-3xs', 'sm-fon-siz-2xs', 'sm-fon-siz-xs', 'sm-fon-siz-md', 'sm-fon-siz-lg'] : [],
  props.dynamic ? ['sm-lin-hei-3xs', 'sm-lin-hei-2xs', 'sm-lin-hei-xs', 'sm-lin-hei-md', 'sm-lin-hei-lg'] : [],
  props.noPadding ? 'pad-y-0' : ["pad-y-1", "pad-y-2", "pad-y-3", "pad-y-4", "pad-y-5"]
]);

export const Label: React.FC<TextProps> = (props) => buildSimpleComponent(props, "label", [
  ...commonTextClasses(props),
  ['fon-siz-3xs', 'fon-siz-2xs', 'fon-siz-xs', 'fon-siz-sm', 'fon-siz-md'],
  ['lin-hei-3xs', 'lin-hei-2xs', 'lin-hei-xs', 'lin-hei-sm', 'lin-hei-md'],
  props.noPadding ? 'pad-y-0' : ["pad-y-1", "pad-y-2", "pad-y-2", "pad-y-3", "pad-y-3"]
]);

export const Text: React.FC<TextProps> = (props) => buildSimpleComponent(props, "p", [
  ...commonTextClasses(props),
  ['fon-siz-2xs', 'fon-siz-xs', 'fon-siz-sm', 'fon-siz-md', 'fon-siz-lg'],
  ['lin-hei-2xs', 'lin-hei-xs', 'lin-hei-sm', 'lin-hei-md', 'lin-hei-lg'],
  props.noPadding ? 'pad-y-0' : ["pad-y-1", "pad-y-2", "pad-y-3", "pad-y-4", "pad-y-5"]
]);
