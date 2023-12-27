import { dimmed } from "./dimmed";
import { disabled } from "./disabled";
import { gray, black, white } from "./gray";
import { green } from "./green";
import { hutom } from "./hutom";
import { red } from "./red";

const colors = { hutom, green, gray, black, white, red, disabled, dimmed } as const;

export default colors;
