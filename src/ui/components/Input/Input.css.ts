import { style } from "@vanilla-extract/css";
import { vars } from "styles/theme.css";
import { DecoratorType, InputWidthType } from "./type";
import { recipe } from "@vanilla-extract/recipes";

const DecoratorWidth = "36px";

export const cssDecoratorBase = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  paddingRight: "12px",
  width: DecoratorWidth,
});

export const cssInputWithLabel = style({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
});

export const cssWrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: "4px",
});

export const cssInput = style([
  {
    width: `calc(100% - ${DecoratorWidth})`,
    flexGrow: 1,
    paddingLeft: "12px",
    boxSizing: "border-box",
    color: vars.palette.text.primary,
    backgroundColor: "transparent",

    ":focus": {
      outline: "none",
    },

    "::placeholder": {
      color: vars.palette.text.tertiary,
    },

    ":disabled": {
      color: vars.palette.text.disabled,
      cursor: "not-allowed",
    },
  },
]);

const cssBase = style({
  display: "flex",
  height: "36px",
  borderRadius: "4px",
  border: `1px solid ${vars.palette.border.primary}`,
  overflow: "hidden",
  backgroundColor: vars.colors.gray[50],

  ":focus-within": {
    borderColor: vars.palette.border.valid,
  },

  ":disabled": {
    backgroundColor: vars.colors.disabled.light,
    cursor: "not-allowed",
  },
});

const cssSize: VeStyle<InputWidthType> = {
  small: style({
    width: "170px",
  }),
  medium: style({
    width: "250px",
  }),
  large: style({
    width: "360px",
  }),
  xLarge: style({
    width: "436px",
  }),
  full: style({
    width: "100%",
  }),
};

export const inputVariants = recipe({
  base: cssInput,

  variants: {
    size: cssSize,
  },
});

export const variants = recipe({
  base: cssBase,

  variants: {
    padding: {},
  },
});
