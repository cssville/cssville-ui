import { ReactElement, ReactNode } from "react";
import { SizeProps } from "./props/SizeProps";
import { BaseProps } from "./props/BaseProps";
import { StyleProps } from "./props/StyleProps";
import React from "react";

export function getValueByStyle(props: StyleProps, values: string[], defaultClass: string = ""): string {
  if (values.length < 6) {
    return defaultClass;
  }
  const primaryClass = values[0];
  const secondaryClass = values[1];
  const successClass = values[2];
  const infoClass = values[3];
  const warningClass = values[4];
  const errorClass = values[5];

  const defaultClassValue = defaultClass === "" ? primaryClass : defaultClass;

  return props.primary ? primaryClass
    : props.secondary ? secondaryClass
      : props.success ? successClass
        : props.info ? infoClass
          : props.warning ? warningClass
            : props.error ? errorClass
              : defaultClassValue;
}

export function getValueBySize(props: SizeProps, values: string[], defaultClass: string = ""): string {
  if (values.length < 5) {
    return defaultClass;
  }
  const xsClass = values[0];
  const smClass = values[1];
  const mdClass = values[2];
  const lgClass = values[3];
  const xlClass = values[4];
  const defaultClassValue = defaultClass === "" ? mdClass : defaultClass;
  return props.xs ? xsClass
    : props.sm ? smClass
      : props.md ? mdClass
        : props.lg ? lgClass
          : props.xl ? xlClass
            : defaultClassValue;
}

export function buildSimpleComponent(props: BaseProps, defaultTag: string = "div", tagsArray: string[] = [], classesArray: (string | string[])[], excludeChildren: boolean = false): ReactElement {
  let classes = "";
  for (const item of classesArray) {
    let c = "";
    if (typeof item === "string") {
      c = item;
    }
    else {
      c = getValueBySize(props, item)
    }
    if (c !== "") {
      classes += (classes === "" ? c : ` ${c}`);
    }
  }

  const { className, tag, ...restProps } = props;
  const baseTag = "div";
  const tagFromProps = tag || getValueBySize(props, tagsArray, defaultTag)
  const Tag = tagFromProps === "" ? baseTag : tagFromProps;

  return (
    <Tag className={`${classes}${props.className ? ` ${props.className}` : ''}`} {...restProps} >
      {!excludeChildren && props.children}
    </Tag>
  );
}