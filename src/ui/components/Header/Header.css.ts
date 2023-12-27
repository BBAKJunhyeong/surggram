import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { vars } from "styles/theme.css";

const cssBase = style({
  backgroundColor: vars.colors.gray[900],
  color: vars.palette.text.secondary,
  display: "flex",
  alignItems: "center",
  minHeight: 40,
  padding: `0 ${vars.spacing.s}px`,
});

export const variants = recipe({
  base: cssBase,
});
