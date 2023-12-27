import { ButtonHTMLAttributes, PropsWithChildren } from "react";

export type HeaderProps = PropsWithChildren<{
  //
}> &
  React.HTMLAttributes<HTMLElement>;

export type HeaderButtonProps = PropsWithChildren<{
  //
}> &
  ButtonHTMLAttributes<HTMLButtonElement>;
