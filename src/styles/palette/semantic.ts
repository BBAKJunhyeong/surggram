import { green, red } from "styles/colors";

export const semanticError = `linear-gradient(180deg, ${red} 0%, #CB3535 100%)`;
export const semanticWarning =
  "linear-gradient(180deg, #FFB11B 0%, #E78124 100%)";
export const semanticSuccess = `linear-gradient(180deg, ${green[200]} 0%, ${green[400]} 100%)`;
export const semanticConfirm =
  "linear-gradient(180deg, #81AAD1 0%, #347AB6 100%)";
export const semanticNotice =
  "linear-gradient(180deg, #FFE799 0%, #F6CD46 100%)";

export const semantic = {
  error: semanticError,
  warning: semanticWarning,
  success: semanticSuccess,
  confirm: semanticConfirm,
  notice: semanticNotice,
} as const;
