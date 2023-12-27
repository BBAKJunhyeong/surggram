import { ButtonHTMLAttributes, PropsWithChildren } from "react";

export type ButtonSizeType = "small" | "medium" | "large";
export type ButtonColorType = "primary" | "secondary" | "tertiary";

export type ButtonProps = PropsWithChildren<{
  size?: ButtonSizeType;
  color?: ButtonColorType;
}> &
  ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonIconProps = {
  defaultChecked?: boolean;
  Icon?: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
