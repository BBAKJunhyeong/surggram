import { red } from "styles/colors";

export const textPrimary = "#000000";
export const textSecondary = "#FFFFFF";
export const textTertiary = "#B8B8B8";
export const textDisabled = "#9C9C9E";
export const textError = red;
export const textBlue = "#298CFF";

export const text = {
  primary: textPrimary,
  secondary: textSecondary,
  tertiary: textTertiary,
  disabled: textDisabled,
  error: textError,
  info: textBlue,
} as const;
