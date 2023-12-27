import { forwardRef } from "react";

import { variants } from "./Button.css";
import ButtonIcon from "./Icon";
import { ButtonProps } from "./type";

interface IButton
  extends React.ForwardRefExoticComponent<
    ButtonProps & React.RefAttributes<HTMLButtonElement>
  > {
  Icon: typeof ButtonIcon;
}

const forwardRefButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ size = "medium", color = "primary", children, ...rest }, ref) => {
    return (
      <button ref={ref} className={variants({ size, color })} {...rest}>
        {children}
      </button>
    );
  }
);

forwardRefButton.displayName = "Button";

export default { ...forwardRefButton, Icon: ButtonIcon } as IButton;
