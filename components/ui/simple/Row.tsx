import React from 'react';
import { RowProps } from "../props/RowProps";
import { buildSimpleComponent } from '../utils';
import { Spacer } from './Spacer';

export const Row: React.FC<RowProps> = (props) => {
  var row = buildSimpleComponent(props, "div", [], [
    "d-flex flex-direction-row w-12 flex-wrap-wrap align-items-center",
    props.contentStart
      ? 'justify-content-start'
      : props.contentCenter
        ? 'justify-content-center'
        : props.contentEnd
          ? 'justify-content-end'
          : ''
  ])

  if (!props.noSpace) {
    const modifiedChildren = [];
    React.Children.forEach(props.children, (child, index) => {
      modifiedChildren.push(child);
      if (index !== React.Children.count(props.children) - 1) {
        modifiedChildren.push(<Spacer key={`separator-${index}`} {...props} />);
      }
    });

    row.props.children = modifiedChildren;
  }

  return row;
};