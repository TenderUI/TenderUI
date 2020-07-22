import classNames from 'classnames';
import React, { FC, MouseEventHandler, PropsWithChildren, ReactElement } from 'react';
import styles from './Button.module.scss';

type ButtonPropsType = {
  /**
   * Define button behavior. Default: button
   */
  type?: 'button' | 'submit' | 'reset';

  /**
   * Define button size. Default: normal
   */
  size?: 'normal' | 'small' | 'large';

  /**
   * Disable button. Default: false
   */
  disabled?: boolean;

  /**
   * Register click event handler.
   */
  onClick?: MouseEventHandler;

  /**
   * Add a class name. Optional.
   */
  className?: string;

  /**
   * Define 'aria-label' attribute for screen readers. Optional.
   */
  ariaLabel?: string;
}

type ButtonPropsTypeWithChildren = PropsWithChildren<ButtonPropsType>

/**
 * A simple button.
 */
const Button: FC<ButtonPropsTypeWithChildren> = ({
  onClick,
  disabled = false,
  type = 'button',
  size = 'normal',
  children,
  className,
  ariaLabel
}) => {
  const classes = classNames(
    styles.button,
    styles[size],
    className
  );

  const a11yProps = ariaLabel ? 
    { "aria-label": ariaLabel } : 
    null;

  const button: ReactElement = (
    <button
        className={classes}
        type={type}
        onClick={onClick}
        disabled={disabled}
        {... a11yProps}
      >
        {children}
    </button>
  );

  if (disabled) {
    return button;
  }

  return (
    <span className={styles.buttonWrapper}>
      {button}
    </span>
  );
};

export default Button;
