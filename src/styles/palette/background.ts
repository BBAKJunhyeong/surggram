import { gray, white } from "styles/colors";

export const backgroundPrimary = white;
export const backgroundSecondary = gray[100];
export const backgroundTernary = gray[300];
export const backgroundInverse = gray[900];

export const background = {
  primary: backgroundPrimary,
  secondary: backgroundSecondary,
  ternary: backgroundTernary,
  inverse: backgroundInverse,
} as const;
