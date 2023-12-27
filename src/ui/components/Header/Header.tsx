import type { HeaderProps } from "./type";
import { variants } from "./Header.css";
import HeaderButton from "./Button";

const Header = ({ children, ...rest }: HeaderProps) => {
  return (
    <header className={variants()} {...rest}>
      {children}
    </header>
  );
};

Header.Button = HeaderButton;

export default Header;
