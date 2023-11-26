import React from 'react';
import { BaseProps } from "../props/BaseProps";
import { buildSimpleComponent } from '../utils';

export const Spacer: React.FC<BaseProps> = (props) => buildSimpleComponent(props, "div", [], [
  "h-100 bg-color-transparent",
  ['w-2px', 'w-4px', 'w-8px', 'w-12px', 'w-16px'],
], true);