import { variants } from "./Button.css";

import { HeaderButtonProps } from "./type";

const HeaderButton = ({ children, ...rest }: HeaderButtonProps) => {
  return (
    <button className={variants()} {...rest}>
      {children}
    </button>
  );
};

HeaderButton.displayName = "Header.Button";

export default HeaderButton;
