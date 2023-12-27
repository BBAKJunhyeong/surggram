import { createGlobalTheme, globalLayer } from "@vanilla-extract/css";

import { colors } from "./colors";
import { palette } from "./palette";
import { spacing } from "./spacing";
import { font } from "./typography";
import { zIndices } from "./zIndices";

import "./layers.css";
import "./reset.css";

globalLayer("reset");

export const vars = createGlobalTheme(":root", {
  colors,
  palette,
  spacing,
  font,
  zIndices,
});
