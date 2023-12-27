import { match } from "ts-pattern";
import { DecoratorType, InputProps } from "./type";
import { ReactNode, forwardRef } from "react";
import {
  cssInputWithLabel,
  cssDecoratorBase,
  cssWrapper,
  cssInput,
} from "./Input.css";

const Decorator = ({ decorator }: { decorator: DecoratorType }): ReactNode => {
  return (
    <div className={cssDecoratorBase}>
      {match(typeof decorator)
        .with("function", () => <p>{decorator}</p>)
        .with("string", () => decorator)
        .otherwise(() => null)}
    </div>
  );
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      width = "large",
      label,
      errorMessage,
      hasError,
      required,
      disabled,
      endDecorator,
      isWidthWrapped = true,
      ...rest
    },
    ref
  ) => {
    return (
      <div className={cssInputWithLabel}>
        {match([!!label, !!required])
          .with([true, false], () => <p>{label}</p>)
          .with([true, true], () => (
            <p>
              {label}
              <span>*</span>
            </p>
          ))
          .otherwise(() => null)}
        <div className={cssWrapper}>
          <div {...rest}>
            <input
              ref={ref}
              disabled={disabled}
              className={cssInput}
              {...rest}
            />
          </div>
        </div>
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
