import { vars } from "styles/theme.css";

import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

const cssIcon = style({
  border: "none",
  cursor: "pointer",
  width: "24px",
  height: "24px",
  lineHeight: "24px",
  borderRadius: "50%",

  backgroundColor: "transparent",
  ":hover": {
    backgroundColor: vars.colors.gray[300],
  },
  ":disabled": {
    color: vars.colors.disabled.light,
    cursor: "not-allowed",
    backgroundColor: "transparent",
    fill: vars.colors.disabled.light, // TODO: Icon svg 색을 변경하기 위함. Icon 컴포넌트 생기면 color만 지정하고, svg내부에서 currentColor로 캐스캐이딩받아 사용하도록 리팩토링
  },
});
export const variants = recipe({
  base: cssIcon,
});
