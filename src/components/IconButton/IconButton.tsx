import classNames from "clsx";
import React, {
  cloneElement,
  FC,
  isValidElement,
  MouseEventHandler,
  PropsWithChildren,
} from "react";
import { a11yIconHiddenProps } from "../../config";
import styles from "./IconButton.module.scss";

type IconButtonPropsType = {
  /**
   * Define button behavior. Default: button
   */
  type?: "button" | "submit" | "reset";

  /**
   * Define button size. Default: normal.
   */
  size?: "normal" | "small" | "large";

  /**
   * Disable button. Default: false.
   */
  disabled?: boolean;

  /**
   * Register click event handler.
   */
  onClick?: MouseEventHandler;

  /**
   * Define the shape of the button (border radius). Default: rounded.
   */
  shape?: "rounded" | "circle";

  /**
   * Add a class name. Optional.
   */
  className?: string;

  /**
   * Define 'aria-label' attribute for screen readers.
   * Required for icon buttons because they don't have any other descriptive text.
   */
  ariaLabel: string;
};

type IconButtonPropsTypeWithChildren = PropsWithChildren<IconButtonPropsType>;

/**
 * A square button with an icon.
 * Please note the children should be a single icon. In any other cases,
 * use Button instead.
 */
const IconButton: FC<IconButtonPropsTypeWithChildren> = ({
  onClick,
  disabled = false,
  type = "button",
  size = "normal",
  shape = "circle",
  children,
  className,
  ariaLabel,
}) => {
  const a11yProps = ariaLabel ? { "aria-label": ariaLabel } : null;

  const classes = classNames(
    styles.wrapper,
    styles[size],
    styles[shape],
    { [styles.disabled]: disabled },
    className
  );

  const icon = isValidElement(children)
    ? cloneElement(children, a11yIconHiddenProps)
    : null;

  return (
    <span className={classes}>
      <button
        className={styles.button}
        type={type}
        onClick={onClick}
        disabled={disabled}
        {...a11yProps}
      >
        {icon}
      </button>
    </span>
  );
};

export default IconButton;
