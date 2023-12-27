import { disabledLight, gray, hutomGreen2, red } from "styles/colors";

export const borderPrimary = gray[500];
export const borderValid = hutomGreen2;
export const borderDisabled = disabledLight;
export const borderError = red;

export const border = {
  primary: borderPrimary,
  disabled: borderDisabled,
  valid: borderValid,
  error: borderError,
} as const;
