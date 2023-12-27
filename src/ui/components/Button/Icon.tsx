import { variants } from "./Icon.css";
import { ButtonIconProps } from "./type";

const ButtonIcon = ({
  defaultChecked = true,
  Icon,
  ...rest
}: ButtonIconProps) => {
  return (
    <button className={variants({})} {...rest}>
      {Icon}
    </button>
  );
};

export default ButtonIcon;
