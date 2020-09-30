import classNames from "clsx";
import React, { cloneElement, FC, isValidElement, ReactElement } from "react";
import { a11yIconHiddenProps } from "../../config";
import styles from "./TextField.module.scss";

type TextFieldPropsType = {
  /**
   * Define button behavior. Default: text
   */
  type?: "text" | "password";

  /**
   * Define input size. Default: normal
   */
  size?: "normal" | "small" | "large";

  /**
   * Define the shape of the button (border radius). Default: rounded.
   */
  shape?: "rounded" | "circle";

  /**
   * Disable button. Default: false
   */
  disabled?: boolean;

  /**
   * Add a class name. Optional.
   */
  className?: string;

  /**
   * Add a placeholder text. Optional.
   */
  placeholder?: string;

  /**
   * Add a tabindex attribute. Optional.
   */
  tabIndex?: number;

  /**
   * Left icon. Optional.
   */
  leftIcon?: ReactElement;

  /**
   * Right icon. Optional.
   */
  rightIcon?: ReactElement;
};

/**
 * A text field.
 */
const TextField: FC<TextFieldPropsType> = ({
  type = "text",
  size = "normal",
  shape = "circle",
  disabled = false,
  className,
  leftIcon,
  rightIcon,
  ...rest
}) => {
  const classes = classNames(
    styles.wrapper,
    (styles as any)[size],
    (styles as any)[shape],
    { [(styles as any).disabled]: disabled },
    className
  );

  const leftIconAttributes = {
    ...a11yIconHiddenProps,
    className: classNames(styles.leftIcon)
  };
  const leftIconElement = isValidElement(leftIcon)
    ? cloneElement(leftIcon, leftIconAttributes)
    : null;

  const rightIconAttributes = {
    ...a11yIconHiddenProps,
    className: classNames(styles.rightIcon)
  };
  const rightIconElement = isValidElement(rightIcon)
    ? cloneElement(rightIcon, rightIconAttributes)
    : null;

  const inputClasses = classNames(styles.input, {
    [styles.hasLeftIcon]: leftIconElement != null,
    [styles.hasRightIcon]: rightIconElement != null,
  });

  return (
    <span className={classes}>
      {leftIconElement}
      <input
        className={inputClasses}
        type={type}
        disabled={disabled}
        {...rest}
      />
      {rightIconElement}
    </span>
  );
};

export default TextField;
