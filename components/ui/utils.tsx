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

export function getValueBySize(props: SizeProps, values: string[],
  defaultClass: string = ""): string {
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

export function buildSimpleComponent(baseProps: BaseProps, sizeProps: SizeProps, remainingProps: React.HTMLProps<HTMLElement>,
  customTag: string | React.ComponentClass<any, any> | React.FunctionComponent<any> = null,
  classesArray: (string | string[])[],
  excludeChildren: boolean = false,
  children?: React.ReactNode,
  key?: string): ReactElement {
  let classes = "";
  for (const item of classesArray) {
    let c = "";
    if (typeof item === "string") {
      c = item;
    }
    else {
      c = getValueBySize(sizeProps, item)
    }
    if (c !== "") {
      classes += (classes === "" ? c : ` ${c}`);
    }
  }

  const { className, ...restProps } = remainingProps;
  if (customTag === null) {
    customTag = "div";
  }
  const Tag = baseProps?.tag || customTag;

  return (
    <Tag key={key} className={`${classes}${remainingProps.className ? ` ${remainingProps.className}` : ''}`} {...restProps} >
      {!excludeChildren && (children || remainingProps.children)}
    </Tag>
  );
}

type PropsGroups<T> = {
  [K in keyof T]: Partial<Record<string, any>>;
} & { remainingProps: Partial<Record<string, any>> };

export function splitPropsIntoGroups<T extends object>(
  props: T,
  keysGroups: { [key: string]: (keyof T)[] }
): PropsGroups<{ [key: string]: (keyof T)[] }> {
  const result: PropsGroups<{ [key: string]: (keyof T)[] }> = { remainingProps: {} } as PropsGroups<{ [key: string]: (keyof T)[] }>;

  Object.keys(keysGroups).forEach(groupKey => {
    const keys = keysGroups[groupKey];
    result[groupKey] = {};

    keys.forEach(key => {
      if (key in props) {
        (result[groupKey] as any)[key] = (props as any)[key];
      }
    });
  });

  // Collect remaining props
  Object.keys(props).forEach(key => {
    const isAssigned = Object.values(keysGroups).some(keys => keys.includes(key as keyof T));
    if (!isAssigned) {
      (result.remainingProps as any)[key] = (props as any)[key];
    }
  });

  return result;
}
