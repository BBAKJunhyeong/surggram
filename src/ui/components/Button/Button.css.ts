import { vars } from "styles/theme.css";

import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { ButtonSizeType, ButtonColorType } from "./type";

const cssBase = style({
  borderWidth: "1px",
  borderStyle: "solid",
  cursor: "pointer",
  padding: "0 16px",
  ":disabled": {
    color: vars.palette.text.disabled,
    backgroundColor: vars.colors.gray[300],
    borderColor: vars.colors.gray[500],
    cursor: "not-allowed",
  },
});

const size: VeStyle<ButtonSizeType> = {
  small: style({
    minWidth: "80px",
    height: "24px",
    borderRadius: "4px",
  }),
  medium: style({
    minWidth: "80px",
    height: "36px",
    borderRadius: "5px",
  }),
  large: style({
    minWidth: "120px",
    height: "50px",
    borderRadius: "6px",
  }),
};

const color: VeStyle<ButtonColorType> = {
  primary: style({
    color: vars.palette.text.secondary,
    backgroundColor: vars.colors.green[400],
    borderColor: vars.colors.green[800],
    selectors: {
      "&:hover:not(:disabled)": {
        backgroundColor: vars.colors.green[300],
      },
      "&:active:not(:disabled)": {
        backgroundColor: vars.colors.green[100],
      },
    },
  }),
  secondary: style({
    color: vars.palette.text.primary,
    backgroundColor: vars.colors.gray[300],
    borderColor: vars.colors.gray[500],
    selectors: {
      "&:hover:not(:disabled)": {
        backgroundColor: vars.colors.green[400],
      },
      "&:active:not(:disabled)": {
        backgroundColor: vars.colors.green[600],
      },
    },
  }),
  tertiary: style({
    color: vars.palette.text.primary,
    backgroundColor: vars.colors.gray[100],
    borderColor: vars.colors.gray[500],
    selectors: {
      "&:hover:not(:disabled)": {
        backgroundColor: vars.colors.green[200],
      },
      "&:active:not(:disabled)": {
        backgroundColor: vars.colors.green[400],
      },
    },
  }),
};

export const variants = recipe({
  base: cssBase,

  variants: {
    size: size,
    color: color,
  },
});
