import React from 'react';
import { TextProps } from "../props/TextProps";
import { buildSimpleComponent } from '../utils';

const commonTextClasses = (props: TextProps) => {
  return [
    "m-0 color-text font-family-primary",
    props.bold ? 'fw-bold' : 'fw-medium',
    props.centered ? 'text-align-center' : ''
  ];
};

export const Display: React.FC<TextProps> = (props) => buildSimpleComponent(props, "h1", [], [
  ...commonTextClasses(props),
  ['fs-4xl', 'fs-5xl', 'fs-6xl', 'fs-7xl', 'fs-8xl'],
  ['lh-4xl', 'lh-5xl', 'lh-6xl', 'lh-7xl', 'lh-8xl'],
  props.dynamic ? ['md-fs-3xl', 'md-fs-4xl', 'md-fs-5xl', 'md-fs-6xl', 'md-fs-7xl'] : [],
  props.dynamic ? ['md-lh-3xl', 'md-lh-4xl', 'md-lh-5xl', 'md-lh-6xl', 'md-lh-7xl'] : [],
  props.dynamic ? ['sm-fs-2xl', 'sm-fs-3xl', 'sm-fs-4xl', 'sm-fs-5xl', 'sm-fs-6xl'] : [],
  props.dynamic ? ['sm-lh-2xl', 'sm-lh-3xl', 'sm-lh-4xl', 'sm-lh-5xl', 'sm-lh-6xl'] : [],
  props.noPadding ? 'py-0' : ["py-4", "py-5", "py-6", "py-7", "py-8"]
]);

export const Headline: React.FC<TextProps> = (props) => buildSimpleComponent(props, "h3", ['h5', 'h4', 'h3', 'h2', 'h1'], [
  ...commonTextClasses(props),
  ['fs-xl', 'fs-2xl', 'fs-3xl', 'fs-4xl', 'fs-5xl'],
  ['lh-xl', 'lh-2xl', 'lh-3xl', 'lh-4xl', 'lh-5xl'],
  props.dynamic ? ['md-fs-lg', 'md-fs-xl', 'md-fs-2xl', 'md-fs-3xl', 'md-fs-4xl'] : [],
  props.dynamic ? ['md-lh-lg', 'md-lh-xl', 'md-lh-2xl', 'md-lh-3xl', 'md-lh-4xl'] : [],
  props.dynamic ? ['sm-fs-md', 'sm-fs-lg', 'sm-fs-xl', 'sm-fs-2xl', 'sm-fs-3xl'] : [],
  props.dynamic ? ['sm-lh-md', 'sm-lh-lg', 'sm-lh-xl', 'sm-lh-2xl', 'sm-lh-3xl'] : [],
  props.noPadding ? 'py-0' : ["py-2", "py-3", "py-4", "py-5", "py-6"]
]);

export const Title: React.FC<TextProps> = (props) => buildSimpleComponent(props, "h4", ['h6', 'h5', 'h4', 'h3', 'h2'], [
  ...commonTextClasses(props),
  ['fs-xs', 'fs-sm', 'fs-md', 'fs-xl', 'fs-2xl'],
  ['lh-xs', 'lh-sm', 'lh-md', 'lh-xl', 'lh-2xl'],
  props.dynamic ? ['md-fs-2xs', 'md-fs-xs', 'md-fs-sm', 'md-fs-lg', 'md-fs-xl'] : [],
  props.dynamic ? ['md-lh-2xs', 'md-lh-xs', 'md-lh-sm', 'md-lh-lg', 'md-lh-xl'] : [],
  props.dynamic ? ['sm-fs-3xs', 'sm-fs-2xs', 'sm-fs-xs', 'sm-fs-md', 'sm-fs-lg'] : [],
  props.dynamic ? ['sm-lh-3xs', 'sm-lh-2xs', 'sm-lh-xs', 'sm-lh-md', 'sm-lh-lg'] : [],
  props.noPadding ? 'py-0' : ["py-1", "py-2", "py-3", "py-4", "py-5"]
]);

export const Label: React.FC<TextProps> = (props) => buildSimpleComponent(props, "label", [], [
  ...commonTextClasses(props),
  ['fs-3xs', 'fs-2xs', 'fs-xs', 'fs-sm', 'fs-md'],
  ['lh-3xs', 'lh-2xs', 'lh-xs', 'lh-sm', 'lh-md'],
  props.noPadding ? 'py-0' : ["py-1", "py-2", "py-3", "py-4", "py-5"]
]);

export const Text: React.FC<TextProps> = (props) => buildSimpleComponent(props, "p", [], [
  ...commonTextClasses(props),
  ['fs-2xs', 'fs-xs', 'fs-sm', 'fs-md', 'fs-lg'],
  ['lh-2xs', 'lh-xs', 'lh-sm', 'lh-md', 'lh-lg'],
  props.noPadding ? 'py-0' : ["py-1", "py-2", "py-3", "py-4", "py-5"]
]);
