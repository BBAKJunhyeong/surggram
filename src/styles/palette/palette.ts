import { background } from "./background";
import { border } from "./border";
import { semantic } from "./semantic";
import { text } from "./text";

const palette = {
  background,
  text,
  border,
  semantic,
} as const;

export default palette;
