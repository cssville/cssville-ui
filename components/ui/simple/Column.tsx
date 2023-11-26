import React from 'react';
import { ColumnProps } from "../props/ColumnProps";
import { buildSimpleComponent } from '../utils';
import { Spacer } from './Spacer';
import { Divider } from './Divider';

export const Column: React.FC<ColumnProps> = (props) => {
  var row = buildSimpleComponent(props, "div", [], [
    "d-flex flex-direction-column align-items-center",
    ['py-2', 'py-3', 'py-4', 'py-5', 'py-6'],
    props.contentStart
      ? 'align-items-start'
      : props.contentCenter
        ? 'align-items-center'
        : props.contentEnd
          ? 'align-items-end'
          : 'align-items-start'
  ])

  if (!props.noSpace) {
    const modifiedChildren = [];
    React.Children.forEach(props.children, (child, index) => {
      modifiedChildren.push(child);
      if (index !== React.Children.count(props.children) - 1) {
        modifiedChildren.push(<Divider noBorder key={`divider-${index}`} {...props} />);
      }
    });

    row.props.children = modifiedChildren;
  }

  return row;
};