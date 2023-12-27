import { InputHTMLAttributes, ReactElement } from "react";

export type InputWidthType = "small" | "medium" | "large" | "xLarge" | "full";
export type DecoratorType = ReactElement | string;

export type InputProps = {
  width?: InputWidthType;
  label?: string;
  errorMessage?: string;
  hasError?: boolean;
  endDecorator?: DecoratorType;
  isWidthWrapped?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;
