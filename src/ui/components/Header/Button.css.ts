import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { vars } from "styles/theme.css";

const cssBase = style({
  backgroundColor: vars.colors.gray[900],
  display: "flex",
  alignItems: "center",
  minHeight: 50,
  cursor: "pointer",
  verticalAlign: "middle",
  padding: `${vars.spacing.xs}px ${vars.spacing.s}px`,
  ":hover": {
    backgroundColor: vars.colors.gray[800],
  },
  ":active": {
    backgroundColor: vars.colors.gray[600],
  },
  fontSize: vars.font.size.xs,
  fontWeight: vars.font.weight.medium,
  lineHeight: "17.5px",
});

export const variants = recipe({
  base: cssBase,
});
